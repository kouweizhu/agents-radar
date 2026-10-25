# OpenClaw Ecosystem Digest 2026-10-25

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-10-25 00:29 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

<think>The user wants me to generate a structured project digest for OpenClaw based on the provided GitHub data. Let me analyze the data and organize it according to the specified sections.

Let me go through the data:

**Releases:**
- v2026.10.7 - Has highlights about replay-safe session recovery
- v2026.9.34 - Gateway-only extended-stable release (LTS equivalent)

**Issues:**
Total: 500 (open: 408, closed: 92)

Top issues by comment count:
1. #160959 - Gateway blocks for minutes while capturing large external plugins (50 comments, P0, impact:crash-loop)
2. #164294 - Gateway state DB WAL auto-checkpoint never completes (30 comments, P2)
3. #159356 - llama.cpp manager reports ready while embedding child exits (29 comments, P2)
4. #157989 - Plugin source capture rewrites ~1.1–1.4 GB per CLI command (23 comments, P1)
5. #53408 - Write/exec tool parameters silently dropped after long conversations (15 comments, P2)
6. #159789 - Close wedge: one failed native close permanently locks agent execution (13 comments, P2)
7. #164394 - Control UI WebChat transcript jitters (12 comments, P2)
8. #157812 - Windows: auto-update fails repeatedly (12 comments, P2)
9. #96675 - Owner-signed responsibility gates for assistant memory (12 comments, P2, enhancement)
10. #162585 - Windows plugin source-capture staging issues (11 comments, P2)

**PRs:**
Total: 500 (open: 241, merged/closed: 259)

Top PRs:
- #183047 - perf(plugins): reuse prepared policy on recurring reads


- #183042 - perf(ui): defer dormant chat work during cold boot
- #182976 - perf: reuse validated entry facts for cold history accounting
- #180850 - fix(doctor): refuse malformed UTF-8 before claiming node state
- #183054 - fix: keep subagent Stop test stable after cleanup

The project shows significant activity with 500 total issues and PRs each. There's a focus on performance improvements, particularly around plugin handling and UI responsiveness. Several P0 and P1 issues indicate critical problems with gateway blocking, plugin source capture, and parameter handling that need immediate attention.</think>

# OpenClaw Project Digest — 2026-10-25

## 1. Today's Overview

OpenClaw maintains high velocity with **500 issues** and **500 PRs** updated in the last 24 hours, indicating active development. The project shipped two releases including v2026.10.7 with replay-safe session recovery improvements. Community engagement remains strong, with critical P0 issues around plugin capture performance and gateway stability drawing significant attention. Performance optimizations dominate recent PRs, while several regression bugs affecting Windows and session handling require triage.

---

## 2. Releases

### v2026.10.7 — OpenClaw 2026.10.7
**Release Notes Highlights:**
- **Replay-safe session recovery:** Interrupted sessions now retain recovery provenance and unfinished tool outcomes; stopped conversations clear terminal recovery residue before accepting new messages; rejected Claude CLI drafts stay out of final replies; large changes to session recovery handling.

### v2026.9.34 — Gateway-only `extended-stable` (LTS-equivalent)
- Gateway-only release from end of September 2026 plus critical security updates, reliability/performance fixes, and new model support features.

---

## 3. Project Progress

### Recently Merged/Closed PRs
| PR | Title | Status |
|----|-------|--------|
| [#182934](https://github.com/openclaw/openclaw/pull/182934) | perf(sessions): share resident actor entries across projections | CLOSED |
| [#182982](https://github.com/openclaw/openclaw/pull/182982) | fix: restore standalone helper launches | CLOSED |
| [#182984](https://github.com/openclaw/openclaw/pull/182984) | fix: CLI runs stall for minutes scanning an agent database the Gateway already opened | CLOSED |
| [#155419](https://github.com/openclaw/openclaw/pull/155419) | refactor(mentions): keep Inbox database work off the Gateway thread | CLOSED |
| [#153812](https://github.com/openclaw/openclaw/pull/153812) | feat(ui): show session mention notifications | CLOSED |

### Active Development (Notable Open PRs)
- [#183047](https://github.com/openclaw/openclaw/pull/183047) — perf(plugins): reuse prepared policy on recurring reads
- [#183042](https://github.com/openclaw/openclaw/pull/183042) — perf(ui): defer dormant chat work during cold boot (XL size, ci:full)
- [#183034](https://github.com/openclaw/openclaw/pull/183034) — improve(sessions): reduce transcript turn database round trips (XL size)
- [#183015](https://github.com/openclaw/openclaw/pull/183015) — fix(postgres): avoid full-table sorts for limited ordered reads
- [#182951](https://github.com/openclaw/openclaw/pull/182951) — fix(cli): route config mutations through a running Gateway (P0, blocking)
- [#176567](https://github.com/openclaw/openclaw/pull/176567) — fix(openai): realtime voice sockets bypass the managed proxy on Bun

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Comments | Priority | Link |
|-------|-------|----------|----------|------|
| #160959 | Gateway blocks for minutes while capturing large external plugins (2026.9.6 regression) | 50 | P0 | [View](https://github.com/openclaw/openclaw/issues/160959) |
| #164294 | Gateway state DB WAL auto-checkpoint never completes (pinned by in-process reader) | 30 | P2 | [View](https://github.com/openclaw/openclaw/issues/164294) |
| #159356 | llama.cpp manager reports ready while embedding child exits; embedding requests return HTTP 500 | 29 | P2 | [View](https://github.com/openclaw/openclaw/issues/159356) |
| #157989 | Plugin source capture rewrites ~1.1–1.4 GB per CLI command (severe SSD wear) | 23 | P1 | [View](https://github.com/openclaw/openclaw/issues/157989) |
| #53408 | Write/exec tool parameters silently dropped after long conversations | 15 | P2 | [View](https://github.com/openclaw/openclaw/issues/53408) |
| #159789 | One failed native close permanently locks agent execution until gateway restart | 13 | P2 | [View](https://github.com/openclaw/openclaw/issues/159789) |
| #164394 | Control UI WebChat transcript jitters continuously when scrolling | 12 | P2 | [View](https://github.com/openclaw/openclaw/issues/164394) |
| #96675 | Owner-signed responsibility gates for assistant memory, actions, skills | 12 | P2 | [View](https://github.com/openclaw/openclaw/issues/96675) |

### Analysis
- **Plugin performance** is a dominant theme: #160959 and #157989 both address regression issues from 2026.9.5-6 around external plugin capture causing severe blocking and SSD wear
- **Session reliability** issues (#159356, #159789) indicate problems with state management and recovery
- **UI/UX friction** appears in #164394 (scrolling jitter) and #53408 (parameter dropping)
- **Enhancement proposal** #96675 requests owner-confirmation gates for persistent memory/skill reuse — a privacy/security feature

---

## 5. Bugs & Stability

### Critical (P0) Issues

| Issue | Title | Severity | Fix PR? |
|-------|-------|----------|---------|
| #160959 | Gateway blocks for minutes while capturing large external plugins | 🦞 diamond lobster, crash-loop | No |
| #182476 | update repair fails with OPENCLAW_STATE_LEASE_LOST on Windows | 🦐 gold shrimp, crash-loop | No |
| #181660 | Session read batch cannot reenter an active SQLite writer admission | 🦪 silver shellfish, UX release blocker | No |
| #153426 | Curated memory roots silently excluded from bootstrap injection | 🦞 diamond lobster, security, session-state | No |
| #150822 | Native Codex children advertise tools without execution handler | 🐚 platinum hermit, security | No |
| #166634 | Late reclamation commit checkpoint failure leaves agent unavailable | 🦪 silver shellfish, message-loss | No |
| #182951 | CLI config mutations fail when Gateway is running (regression) | 🐚 platinum hermit (P0) | OPEN PR |

### Regressions Identified
- **2026.9.6**: Plugin capture blocking (regression from #144252)
- **2026.10.5 → 2026.10.6**: Codex app-server execution-budget timeout (every primary turn fails)
- **2026.10.10-beta.3**: CLI config set/unset refuses when Gateway running (regression from v2026.10.9)

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests with Community Interest

| Issue | Title | Priority | Signals |
|-------|-------|----------|---------|
| #96675 | Owner-signed responsibility gates for assistant memory, actions, skills | P2 | 12 comments, enhancement |
| #182712 | Limit-aware model fallback — skip candidates on exhausted provider account | P2 | 7 comments, feature |
| #155633 | Add Databricks Unity Gateway as official model provider | P2 | 10 comments, integration |
| #139477 | Honor `tools.toolSearch` for bundle-MCP CLI backends | 🦞 diamond lobster | 9 comments |
| #150598 | Proposal: completion-wake delivery semantics | 🌊 off-meta tidepool | 7 comments |

### Roadmap Indicators
- **PostgreSQL optimization** (#183015) suggests database backend maturity work
- **Model fallback improvements** (#182712) indicate provider resilience is a priority
- **Memory/provenance ratchet** (#153426) may require product decision on curation semantics
- **Databricks integration** (#155633) shows expansion of provider ecosystem

---

## 7. User Feedback Summary

### Pain Points

1. **Gateway Blocking & Performance**
   - External plugin loading blocks event loop for minutes (#160959)
   - WAL checkpoint never completes, blocking from boot (#164294)
   - Plugin source capture writes 1.1–1.4 GB per CLI command, causing SSD wear (#157989)

2. **Windows-Specific Issues**
   - Auto-update fails repeatedly with multiple failure modes (#157812)
   - Plugin staging re-materializes npm packages linearly, never converges (#162585)
   - Update repair fails with lease lost (#182476)

3. **Session Reliability**
   - Failed native close locks agent execution permanently (#159789)
   - Subagent completion-delivery drops final text silently (#154299)
   - Session auto-compaction causes 23-minute hangs (#148292)

4. **Memory & State**
   - MEMORY.md/USER.md silently excluded from bootstrap after provenance marked untrusted (#153426)
   - Write/exec tool parameters silently dropped after long conversations (#53408)

### Satisfaction Signals
- **Replay-safe session recovery** in v2026.10.7 addresses a known pain point
- **PostgreSQL full-table sort fix** (#183015) resolves performance complaint
- **CLI database scan stall fix** (#182984) addresses Auto Review tool slowness

---

## 8. Backlog Watch

### Long-Unanswered Important Issues (Stale, No Fix PR)

| Issue | Title | Age | Priority | Status |
|-------|-------|-----|----------|--------|
| #53408 | Write/exec tool parameters silently dropped after long conversations | ~7 months | P2 | stale, needs-info |
| #145937 | QQ channel broken in 2026.9.x — crashes on every inbound | ~1.5 months | P2 | stale |
| #149631 | PR preflight throws at 121 jobs against 120 Node matrix cap | ~1 month | P2 | stale |
| #146902 | Same-session tool-set churn defeats prompt-cache reuse | ~1 month | P2 | stale |
| #154104 | Idle Gateway with Matrix E2EE: ~50% CPU, 52 MB/min writes | ~1 month | P2 | stale |

### Issues Needing Maintainer Review (High Comment Count, No Fix PR)

| Issue | Title | Comments | Needs |
|-------|-------|----------|-------|
| #160959 | Gateway blocks for minutes (plugin capture) | 50 | maintainer-review, product-decision |
| #164294 | WAL auto-checkpoint never completes | 30 | maintainer-review |
| #159356 | llama.cpp embedding child exits | 29 | maintainer-review |
| #157989 | Plugin source capture SSD wear | 23 | maintainer-review |
| #157812 | Windows auto-update fails | 12 | maintainer-review |

---

*Digest generated from OpenClaw GitHub data — 2026-10-25*

---

## Cross-Ecosystem Comparison

<think>The user wants me to generate a cross-project comparison report for the four AI agent/assistant projects I've analyzed. Let me synthesize the data from each project digest into a cohesive comparison report.

Let me organize the key data points:

**OpenClaw (github.com/openclaw/openclaw)**
- Issues: 500 total (408 open, 92 closed)
- PRs: 500 total (241 open, 259 merged/closed)
- Releases: v2026.10.7, v2026.9.34 (LTS)
- Health: High activity, shipping releases, major focus on plugin/capture performance, session reliability
- Top concerns: Gateway blocking, plugin capture SSD wear, Windows issues, session reliability
- Features: Replay-safe session recovery, PostgreSQL optimization

**Hermes Agent (github.com/nousresearch/hermes-agent)**
- Issues: 50 (43 open, 7 closed)
- PRs: 50 (42 open, 8 merged/closed)
- Releases: No new releases today
- Health: High activity, focuses on desktop client, plugin ecosystem
- Top concerns: Desktop session management, state.db timeouts, Bot Chat delivery, memory leaks
- Features: Browser vault plugins, model download resumption, terminal CPU yielding

**IronClaw (github.com/nearai/ironclauw)**
- No activity in last 24 hours

**QwenPaw (github.com/agentscope-ai/QwenPaw)**
- Issues: 4 (3 open, 1 closed)
- PRs: 11 (10 open, 1 merged/closed)
- Releases: No new releases today
- Health: Moderate activity, focuses on channels (QQ), memory system
- Top concerns: Agent-to-Agent silent cancellation, QQ channel flag reset, audit.db recording


- Features: QQ streaming, ReMe 0.4.2 memory, Matrix session recovery

**ZeroClaw (github.com/zeroclaw-labs/zeroclaw)**
- Issues: 18 (12 open, 6 closed)
- PRs: 50 (47 open, 3 merged/closed)
- Releases: v0.8.7 just released
- Health: High activity, releasing frequently, channel expansion, memory system
- Top concerns: Memory backend data loss, SOP engine bugs, PowerShell dialect, context window handling
- Features: XMPP/OMEMO, email channel improvements, session event

I'll analyze the cross-project landscape, noting the diverse approaches to AI agent development. Each project shows unique strengths: OpenClaw leads in comprehensive releases, Hermes Agent prioritizes user experience, QwenPaw innovates in communication channels, and ZeroClaw demonstrates rapid iteration. The ecosystem reveals intense competition in plugin architecture, session reliability, and multi-platform support.

The open-source AI agent community appears dynamic, with projects addressing complex challenges like session management, memory systems, and cross-platform integration. Despite IronClaw's current inactivity, the overall landscape suggests robust technological advancement.</think>

# Cross-Project Comparison Report — Personal AI Assistant Ecosystem

**Date:** 2026-10-25  
**Scope:** OpenClaw, Hermes Agent, QwenPaw, ZeroClaw, IronClaw

---

## 1. Ecosystem Overview

The personal AI assistant and agent framework landscape in late 2026 shows a maturing but highly fragmented ecosystem. Five active projects (OpenClaw, Hermes Agent, QwenPaw, ZeroClaw, IronClaw) are actively developing autonomous agent runtimes with varying focuses: plugin ecosystems, channel integrations, memory systems, and enterprise features. The market appears to be converging on common requirements—session reliability, multi-channel support, memory persistence, and provider flexibility—while diverging in architectural approaches. All projects show strong recent activity (50–500 items updated in 24 hours) except IronClaw, which appears dormant.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases (24h) | Health Score |
|---------|---------------------|-------------------|----------------|--------------|
| **OpenClaw** | 500 | 500 | 2 (v2026.10.7, v2026.9.34) | 🟢 Very High |
| **ZeroClaw** | 18 | 50 | 1 (v0.8.7) | 🟢 Very High |
| **Hermes Agent** | 50 | 50 | 0 | 🟢 High |
| **QwenPaw** | 4 | 11 | 0 | 🟡 Moderate |
| **IronClaw** | 0 | 0 | 0 | 🔴 Dormant |

*Health Score: 🟢 Very High (>40 PRs/day + recent releases), 🟢 High (active, releases), 🟡 Moderate (some activity), 🔴 Dormant (no activity)*

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Highest activity velocity** — 500 issues and 500 PRs updated in 24 hours, doubling the next-most-active project (ZeroClaw at 50 PRs)
- **Release cadence** — Ships point releases with replay-safe session recovery, distinguishing it from peers still iterating on core stability
- **Community scale** — 408 open issues + 241 open PRs indicates a larger contributor base than QwenPaw (3 open issues) or Hermes Agent (43 open issues)
- **PostgreSQL backend** — Active optimization work (full-table sort fixes, WAL checkpoint improvements) positions OpenClaw ahead for enterprise deployment readiness

### Technical Approach Differences
- **Gateway-centric architecture** — OpenClaw runs a persistent Gateway daemon as the core, unlike Hermes Agent's standalone CLI model or ZeroClaw's daemon+job architecture
- **LTS-style releases** — The "extended-stable" (v2026.9.34) model signals enterprise stability commitment not seen in peer projects

### Community Size Comparison
OpenClaw's issue/PR volume (500) suggests a community 10x the size of QwenPaw (4 issues, 11 PRs) and comparable to Hermes Agent (50/50), but with substantially more merged output historically (259 closed PRs vs Hermes's 8).

---

## 4. Shared Technical Focus Areas

### Requirements Emerging Across Multiple Projects

| Focus Area | OpenClaw | Hermes | QwenPaw | ZeroClaw | Specific Needs |
|------------|:--------:|:------:|:-------:|:--------:|----------------|
| **Session/Memory Reliability** | ✅ | ✅ | ✅ | ✅ | Replay-safe recovery, audit trails, persistent memory with parity |
| **Plugin Ecosystem** | ✅ | ✅ | — | ✅ | Vault backends, deferred tool schemas, admission controls |
| **Multi-Channel Support** | — | — | ✅ | ✅ | QQ streaming, XMPP/OMEMO, email, Matrix |
| **Windows Stability** | ✅ | ✅ | — | ✅ | Auto-update failures, state.db handling, lease files |
| **Provider Flexibility** | — | ✅ | — | ✅ | Custom OpenAI-compatible, model fallback, context window handling |
| **Database Optimization** | ✅ | — | — | ✅ | PostgreSQL sorts, WAL checkpoint, audit.db |

**Observation:** Session/memory reliability and plugin ecosystems are universal concerns across all four active projects. This suggests the market is prioritizing fundamental stability over feature expansion.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **Primary Focus** | Gateway reliability, plugin capture performance | Desktop client UX, session visibility | QQ/Feishu channels, multi-agent orchestration | Channel ecosystem (email, XMPP), SOP engine |
| **Target Users** | Self-hosted power users, enterprises | Desktop-first end users | Chinese-market chat platforms (QQ, Feishu) | Developers needing SOP/workflow automation |
| **Architecture** | Persistent Gateway daemon | Standalone CLI + desktop UI | AgentScope platform integration | Daemon + cron jobs + SOP engine |
| **Release Model** | Point releases + LTS-equivalent | Rolling releases | Occasional patches | Frequent patches (v0.8.x series) |
| **Memory System** | Bootstrap injection, provenance tracking | Plugin memory, auto-recall | ReMe 0.4.2 integration | Markdown backend (concurrent write issues) |
| **Distinctive Feature** | Replay-safe session recovery | Browser vault plugins | QQ C2C streaming | XMPP + OMEMO encryption |

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration** | OpenClaw, ZeroClaw | 50–500 PRs/day, shipping releases weekly, aggressive feature development |
| **Active Development** | Hermes Agent | 50 PRs/day, steady improvements, focused on polish |
| **Steady Progress** | QwenPaw | 11 PRs/day, targeted channel features |
| **Stabilizing/Mature** | — | None clearly in maintenance mode |
| **Dormant** | IronClaw | Zero activity — likely deprecated or unmaintained |

### Project Maturity Signals
- **Most mature**: OpenClaw (LTS releases, replay-safe sessions) and Hermes Agent (desktop polish, regression guards)
- **Rapidly evolving**: ZeroClaw (frequent releases, channel expansion, but S0 data loss bugs indicates ongoing hardening)
- **Niche focus**: QwenPaw (QQ/Feishu integration) — smaller community but specific differentiation

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

1. **Gateway/Persistent Runtime as Standard** — OpenClaw's Gateway-centric model and ZeroClaw's daemon architecture both converge on persistent runtimes as superior to stateless CLI invocation for complex agent workflows

2. **Enterprise Requirements Emerging** — Context window configuration, provider fallback, audit logging, and owner-signed responsibility gates (OpenClaw #96675) signal enterprise adoption

3. **Channel Proliferation** — ZeroClaw (XMPP, email), QwenPaw (QQ streaming), and Hermes (Matrix recovery) all invest heavily in multi-channel support — likely driven by demand for unified communication hubs

4. **Memory System Convergence** — All four active projects are iterating on memory persistence, with issues around bootstrap injection, provenance, and automatic supersession indicating this as a critical unsolved problem

5. **Windows as First-Class Platform** — Multiple projects report Windows-specific issues (state.db timeouts, update failures, PowerShell dialect bugs) — Windows deployment is clearly a significant user base requiring dedicated attention

6. **Plugin Security & Sandboxing** — Plugin source capture rewrites (OpenClaw), vault backend scopes (Hermes), and admission controls (ZeroClaw) suggest the ecosystem is grappling with plugin security as adoption grows

### Value for AI Agent Developers

- **If building enterprise agents**: OpenClaw's PostgreSQL optimization and LTS releases offer the strongest foundation
- **If building consumer/desktop assistants**: Hermes Agent's session visibility and terminal CPU yielding address key UX gaps
- **If building communication platforms**: QwenPaw (QQ/Feishu) and ZeroClaw (XMPP/email) provide channel integrations ahead of OpenClaw
- **If building workflow/SOP agents**: ZeroClaw's SOP engine is the most differentiated approach, despite some stability issues

---

*Report generated from GitHub activity data on 2026-10-25*

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>Let me analyze this GitHub data for Hermes Agent and create a structured project digest for 2026-10-25.

First, let me organize the information:

**Overview:**
- 50 issues updated in last 24h (43 open, 7 closed)
- 50 PRs updated in last 24h (42 open, 8 merged/closed)
- 0 new releases

**Latest Issues (showing top by comment count):**
1. #50718 - Session visibility & notifications (12 comments) - Feature request
2. #133253 - Desktop update blocked - state.db timeout (8 comments) - Bug, P2
3. #48997 - Desktop should close abandoned runtime sessions (6 comments) - Feature
4. #143053 - Plugin catalog admission guidance (4 comments) - Docs
5. #143715 - Bot Chat delivery refused not_found (4 comments) - Bug
6. #142839 - model.default with slash prefix forwarded verbatim (4 comments) - Bug
7. #18964 - Add Reticulum as message gateway (4 comments) - Feature
8. #133026 - hermes config set reasoning_effort none saves null (4 comments) - Bug
9. #136189 - gateway shutdown flush files issue (4 comments) - Bug, P1
10. #98004 - Per-group auto-continue budget for Bot Mode (3 comments) - Feature

**Closed Issues:**
- #141468 - cron enabled_toolsets with MCP widening (3 comments, closed)
- #142528 - Windows abandoned pm-runtime lease files (3 comments, closed)
- #144071 - human-input from plugins (1 comment, closed)
- #142576 - Context7 API keys redaction (1 comment, closed)


- #142515 - Windows CLI gateway restart marker (1 comment, closed)

**Latest PRs:**
1. #143964 - feat(tools): support scoped browser vault backend plugins
2. #144207 - Agent terminal commands can yield CPU
3. #144201 - fix(agent): abandon streaming worker that stale kills cannot unwind
4. #144180 - tool_search keeps small servers' descriptions
5. #144177 - fix(prompt): one-shot runs drop steering
6. #144211 - Model downloads keep progress when killed
7. #143453

I've tracked 8 PRs merged or closed, with one significant one addressing the model download interruption problem. The project shows active development across multiple fronts - session management, desktop functionality, plugin systems, and configuration handling. Most items are bugs and features, with a balanced mix of open and resolved contributions.</think>

# Hermes Agent Project Digest
**Date:** 2026-10-25

---

## 1. Today's Overview

Hermes Agent shows high activity today with 50 issues and 50 PRs updated in the last 24 hours. The project is actively addressing desktop session management, gateway stability, and plugin ecosystem expansion. No new releases today. Community engagement remains strong with multiple P1/P2 bugs being addressed and several feature PRs advancing. The maintainers appear focused on stability improvements for the desktop client and gateway components while continuing to expand the plugin catalog with new integrations.

---

## 2. Releases

**No new releases today.**

---

## 3. Project Progress

### PRs Merged/Closed Today
| PR | Title | Status |
|----|-------|--------|
| [#144203](https://github.com/NousResearch/hermes-agent/pull/144203) | plugin-catalog: CoreWeave Inference tier verified | CLOSED |
| [#134556](https://github.com/NousResearch/hermes-agent/pull/134556) | feat(plugins): pre_send_message hook to rewrite or drop any outbound message | CLOSED |

### Notable Active PRs
| PR | Title | Details |
|----|-------|---------|
| [#144211](https://github.com/NousResearch/hermes-agent/pull/144211) | Model downloads keep progress when killed | Salvage of #143453 - resumes interrupted downloads |
| [#144207](https://github.com/NousResearch/hermes-agent/pull/144207) | Agent terminal commands can yield CPU | New `terminal.process_priority: low` config option |
| [#144201](https://github.com/NousResearch/hermes-agent/pull/144201) | Fix streaming worker stale kill | P2 fix for stalled turns |
| [#144204](https://github.com/NousResearch/hermes-agent/pull/144204) | Describe images in configured language | Fixes Chinese hint bug in vision descriptions |
| [#144198](https://github.com/NousResearch/hermes-agent/pull/144198) | Honor on_all_adapters_down=stay_alive | Fixes #144181 startup conflict handling |
| [#144180](https://github.com/NousResearch/hermes-agent/pull/144180) | tool_search and plugin install improvements | Loads plugins into running gateway |

---

## 4. Community Hot Topics

### Most Commented Issues
| Issue | Title | Comments | Reactions |
|-------|-------|----------|-----------|
| [#50718](https://github.com/NousResearch/hermes-agent/issues/50718) | Session visibility & notifications — unread markers, needs-input cues, and OS badges | 12 | 👍 3 |
| [#133253](https://github.com/NousResearch/hermes-agent/issues/133253) | Desktop update blocked - state.db 30s timeout for ~1GB | 8 | — |
| [#48997](https://github.com/NousResearch/hermes-agent/issues/48997) | Desktop should explicitly close abandoned runtime sessions | 6 | — |
| [#143715](https://github.com/NousResearch/hermes-agent/issues/143715) | Bot Chat delivery refused when canonical title held by unbound tui-source session | 4 | — |
| [#142839](https://github.com/NousResearch/hermes-agent/issues/142839) | model.default with slash prefix forwarded verbatim (503 model_not_found) | 4 | — |
| [#18964](https://github.com/NousResearch/hermes-agent/issues/18964) | Add Reticulum as message gateway | 4 | 👍 3 |

### Analysis
The highest-engagement issue (#50718, 12 comments) addresses fundamental UX gaps in the desktop client—users cannot easily distinguish between working, completed, or input-required sessions. This reflects strong demand for better session state visibility. The Reticulum gateway feature (#18964, 4 comments, 3 reactions) shows interest in decentralized, serverless communication options.

---

## 5. Bugs & Stability

### High Priority (P1) Bugs
| Issue | Title | Status |
|-------|-------|--------|
| [#136189](https://github.com/NousResearch/hermes-agent/issues/136189) | gateway shutdown flush files written under adapter's session key — restart recovery fails | OPEN, 4 comments |

### P2 Bugs (Ranked by Activity)
| Issue | Title | Status |
|-------|-------|--------|
| [#133253](https://github.com/NousResearch/hermes-agent/issues/133253) | Desktop update blocked - state.db 30s timeout | OPEN, 8 comments |
| [#143715](https://github.com/NousResearch/hermes-agent/issues/143715) | Bot Chat delivery refused not_found | OPEN, 4 comments |
| [#142839](https://github.com/NousResearch/hermes-agent/issues/142839) | model.default slash prefix forwarded verbatim | OPEN, 4 comments |
| [#133026](https://github.com/NousResearch/hermes-agent/issues/133026) | config set reasoning_effort none saves null | OPEN, 4 comments |
| [#144140](https://github.com/NousResearch/hermes-agent/issues/144140) | Dashboard lists sessions it cannot open | OPEN, 3 comments |
| [#144003](https://github.com/NousResearch/hermes-agent/issues/144003) | Plugin admission fails on Python 3.14 (onnxruntime) | OPEN, 2 comments |

### Bugs with Fix PRs
- [#144181] gateway startup conflict → Fix PR [#144198](https://github.com/NousResearch/hermes-agent/pull/144198)
- [#131786] gateway completion tail drops JSON → No fix PR yet
- [#136012] DM sessions grow unbounded → No fix PR yet

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests
| Issue | Title | Priority | Signals |
|-------|-------|----------|---------|
| [#50718](https://github.com/NousResearch/hermes-agent/issues/50718) | Session visibility & notifications | P3 | High community interest (12 comments, 3 👍) |
| [#48997](https://github.com/NousResearch/hermes-agent/issues/48997) | Explicit close for abandoned runtime sessions | P2 | Desktop session lifecycle gap |
| [#18964](https://github.com/NousResearch/hermes-agent/issues/18964) | Add Reticulum as message gateway | P3 | Decentralized comms interest (3 👍) |
| [#98004](https://github.com/NousResearch/hermes-agent/issues/98004) | Per-group auto-continue budget for Bot Mode | P3 | Continuation of #89545 roadmap |
| [#143053](https://github.com/NousResearch/hermes-agent/issues/143053) | Plugin catalog admission guidance | P3 | Documentation gap for plugin authors |

### New Plugin Integrations
| PR | Plugin | Status |
|----|--------|--------|
| [#144192](https://github.com/NousResearch/hermes-agent/pull/144192) | conxt memory provider | OPEN |
| [#134790](https://github.com/NousResearch/hermes-agent/pull/134790) | Frihet ERP connector | OPEN |
| [#144210](https://github.com/NousResearch/hermes-agent/pull/144210) | Frihet v0.2.1 catalog bump | OPEN |
| [#143585](https://github.com/NousResearch/hermes-agent/pull/143585) | Hermes Live multi-provider voice | OPEN (draft) |

---

## 7. User Feedback Summary

### Pain Points Identified
1. **Desktop session management** — Users struggle to track session states (working/completed/needs-input) in the sidebar
2. **Large state.db timeout** — Windows users with ~1GB databases cannot complete desktop updates
3. **Bot Chat delivery failures** — The "not_found" error when canonical titles are held by unbound sessions causes confusion
4. **Gateway DM session growth** — Long-lived DM sessions grow unbounded without rotation
5. **Python 3.14 compatibility** — Plugin admission fails due to onnxruntime missing Android wheels

### Positive Signals
- Browser vault plugin support (#143964) addresses plugin ecosystem extensibility
- Model download resumption (#144211) improves reliability for large model files
- Terminal CPU yielding (#144207) addresses resource contention concerns

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention
| Issue | Title | Age | Status |
|-------|-------|-----|--------|
| [#50718](https://github.com/NousResearch/hermes-agent/issues/50718) | Session visibility & notifications | 4 months | OPEN, 12 comments |
| [#48997](https://github.com/NousResearch/hermes-agent/issues/48997) | Desktop close abandoned sessions | 4 months | OPEN, 6 comments |
| [#18964](https://github.com/NousResearch/hermes-agent/issues/18964) | Add Reticulum gateway | 5 months | OPEN, 4 comments |
| [#133253](https://github.com/NousResearch/hermes-agent/issues/133253) | state.db timeout (Windows) | 20 days | OPEN, 8 comments |
| [#136189](https://github.com/NousResearch/hermes-agent/issues/136189) | shutdown flush recovery | 15 days | OPEN, P1 |

### Stale PRs
No clearly stale PRs identified in the top 20 active PRs. The project maintains active review throughput with 8 PRs closed/merged today.

---

*Generated from GitHub data for NousResearch/hermes-agent on 2026-10-25*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>Let me analyze this GitHub data for QwenPaw and create a structured project digest for 2026-10-25.

First, let me summarize the key data:

**Overview:**
- 4 Issues updated in last 24h (3 open, 1 closed)
- 11 PRs updated in last 24h (10 open, 1 merged/closed)
- 0 new releases

**Latest Issues:**
1. #8252 [CLOSED] - Bug about Agent-to-Agent call session being silently cancelled (CancelledError)
2. #8406 [OPEN] - Bug: QQ channel enabled flag silently reset to false
3. #8412 [OPEN] - Bug: governance/audit.db stops recording tool calls per-agent
4. #8412 [OPEN] - Feature request: server-level default config for "assistant message display mode"

**Latest PRs:**
1. #8411 [CLOSED] - fix(matrix): recover cached sessions and missing device keys
2. #8410 [OPEN] - fix(console): allow removing models from the pool
3. #7390 [OPEN] - test(providers): add regression guard for Aliyun Coding Plan
4. #8409 [OPEN] - feat(channels): add QQ C2C streaming message support
5. #8403 [OPEN] - fix(docs): correct anchor case for Mailbox Mail Access Control
6. #8402 [OPEN] - fix(docs): correct anchor case for Mailbox Automate New Mail
7. #8401 [OPEN] - fix(docs): correct anchor case for Security Web-login link
8. #8347 [OPEN] - feat(memory): integrate ReMe 0.4.2.0 with opt-in decision compaction
9. #8408 [OPEN] - feat(console): server-provided default for assistant message display mode


10. #7835 [OPEN] - fix(memory): stop leaking auto-memory-recall payload to channels
11. #7211 [OPEN] - fix(runtime): prevent injected context from persisting

I'll synthesize the project dynamics, focusing on the intricate interplay between feature development, bug fixes, and ongoing improvements. The repository shows a complex ecosystem of addressing technical debt, introducing new capabilities, and resolving nuanced implementation challenges across multiple components.</think>

# QwenPaw Project Digest — 2026-10-25

## 1. Today's Overview

QwenPaw (github.com/agentscope-ai/QwenPaw) shows **high development activity** on October 25, 2026. The project processed 11 pull requests and 4 issues in the last 24 hours, with 1 PR merged (fixing Matrix session recovery) and 1 critical bug issue closed. The 10 open PRs indicate active feature development, particularly around QQ channel streaming, memory system upgrades, and console improvements. No new releases were published today.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs

| PR | Author | Summary |
|----|--------|---------|
| [#8411](https://github.com/agentscope-ai/QwenPaw/pull/8411) | hehuang139 | **[CLOSED]** fix(matrix): recover cached sessions and missing device keys — Fixes #8365. Password-authenticated Matrix channels now reuse encryption keys on restart instead of re-uploading, resolving health report false positives. |

### Active PRs Advancing Features

| PR | Author | Summary |
|----|--------|---------|
| [#8409](https://github.com/agentscope-ai/QwenPaw/pull/8409) | no-teasy | **feat(channels):** Add QQ C2C streaming message support using official stream messages API (`POST /v2/users/{user_openid}/stream_messages`), gated behind `QQ_STREAMING_ENABLED`. Implements on_streaming_start/delta/end hooks. |
| [#8347](https://github.com/agentscope-ai/QwenPaw/pull/8347) | jinliyl | **feat(memory):** Upgrade ReMe dependency from `0.4.1.11` to `0.4.2.0`. Includes opt-in decision compaction, image memory, and entity tag generation. |
| [#8408](https://github.com/agentscope-ai/QwenPaw/pull/8408) | Wiziechen | **feat(console):** Server-provided default for assistant message display mode — addresses feature request #8407. Adds `config.json` option `chat_display.assistant_message_display_mode`. |
| [#8410](https://github.com/agentscope-ai/QwenPaw/pull/8410) | hehuang139 | **fix(console):** Allow removing models from the pool — fixes #8195. Adds Remove action with confirmation for provider-managed entries. |
| [#7390](https://github.com/agentscope-ai/QwenPaw/pull/7390) | c020627 | **test(providers):** Add regression guard for Aliyun Coding Plan catalog alignment — fixes #6551. |
| [#7835](https://github.com/agentscope-ai/QwenPaw/pull/7835) | TerebiSAMA | **fix(memory):** Stop leaking auto-memory-recall payload to channels (e.g., Feishu). Prevents synthetic traces from appearing in outbound messages. |
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | AGImentu | **fix(runtime):** Prevent injected context from persisting — fixes #6360/#6358. Keeps HookContext.inject_context() request-local. |

### Documentation Fixes (Low-Impact)

- [#8403](https://github.com/agentscope-ai/QwenPaw/pull/8403), [#8402](https://github.com/agentscope-ai/QwenPaw/pull/8402), [#8401](https://github.com/agentscope-ai/QwenPaw/pull/8401): Corrected anchor case issues in docs (Mailbox, Security sections).

---

## 4. Community Hot Topics

| Issue/PR | Activity | Summary |
|----------|----------|---------|
| [#8252](https://github.com/agentscope-ai/QwenPaw/issues/8252) | **4 comments** | **[CLOSED]** Critical bug: Agent-to-Agent calls silently cancelled with CancelledError — same-second pairings result in zero output, cancellation doesn't record initiator or reason. Multi-agent fleet (Orchestrator/Reasoner/Executor/Reviewer/Defender) + Feishu channel scenario. |
| [#8407](https://github.com/agentscope-ai/QwenPaw/issues/8407) | **1 comment** | Feature request: Server-level default for "assistant message display mode" — current preference stored in browser localStorage, lost on cache clear or across devices. Self-hosted deployments cannot set org-wide defaults. |

**Analysis:** The closed issue #8252 (Agent silent cancellation) generated the highest discussion (4 comments), indicating this is a significant reliability issue in multi-agent orchestration scenarios. The feature request #8407 addresses a cross-device/team deployment pain point, showing demand for enterprise-friendly configurations.

---

## 5. Bugs & Stability

| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#8252](https://github.com/agentscope-ai/QwenPaw/issues/8252) | **High** | Closed | — |
| [#8406](https://github.com/agentscope-ai/QwenPaw/issues/8406) | **Medium** | Open | — |
| [#8412](https://github.com/agentscope-ai/QwenPaw/issues/8412) | **Medium** | Open | — |

### Bug Details

1. **[#8406](https://github.com/agentscope-ai/QwenPaw/issues/8406)** — QQ channel enabled flag silently reset to false with no warning. Author: gcy529. No fix PR yet.

2. **[#8412](https://github.com/agentscope-ai/QwenPaw/issues/8412)** — `governance/audit.db` (table `audit_events`) stops recording tool calls per agent even with `audit_level: all` in policy.yaml. Once recording stops for an agent, it never resumes. Affects compliance/audit workflows.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Summary | Likelihood of Near-Term Implementation |
|-------|---------|----------------------------------------|
| [#8407](https://github.com/agentscope-ai/QwenPaw/issues/8407) | Server-provided default for assistant message display mode | **High** — PR #8408 already implements this |
| [#8409](https://github.com/agentscope-ai/QwenPaw/pull/8409) | QQ C2C streaming message support | **High** — Under active development |

**Roadmap Signals:** Based on active PRs, near-term releases likely emphasize:
- Enhanced QQ channel capabilities (streaming support)
- Memory system upgrades (ReMe 0.4.2.0 integration)
- Console/model pool management improvements
- Governance/audit enhancements (tool call recording fix needed)

---

## 7. User Feedback Summary

### Pain Points Identified

1. **Multi-agent reliability**: Issue #8252 (now closed but likely still in verification) highlights frustration with silent agent call cancellations — users lose output with no diagnostic information.
2. **Configuration persistence**: Users want assistant message display preferences stored server-side, not in browser localStorage (#8407).
3. **Audit compliance gap**: Governance audit database stops recording tool calls per-agent without clear reason (#8412), raising compliance concerns.
4. **QQ channel reliability**: Flag reset issue #8406 causes channels to silently stop working.

### Satisfaction Signals

- Matrix channel encryption key recovery (#8411) addresses a known friction point for self-hosted deployments.
- Documentation anchor fixes show attention to user experience in help materials.

---

## 8. Backlog Watch

| Item | Age | Status | Concern |
|------|-----|--------|---------|
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | ~65 days (2026-08-21) | Open, Under Review | Runtime context injection fix — relates to #6360/#6358. Needs maintainer attention for merge. |
| [#7835](https://github.com/agentscope-ai/QwenPaw/pull/7835) | ~38 days (2026-09-17) | Open, Under Review | Memory payload leaking to channels — impacts Feishu/other outbound integrations. |
| [#7390](https://github.com/agentscope-ai/QwenPaw/pull/7390) | ~88 days (2026-08-28) | Open | Aliyun Coding Plan regression guard — low priority but improves model catalog reliability. |
| [#8406](https://github.com/agentscope-ai/QwenPaw/issues/8406) | 2 days | Open | QQ channel flag reset bug — no assignee. |
| [#8412](https://github.com/agentscope-ai/QwenPaw/issues/8412) | 1 day | Open | Audit DB recording bug — no assignee. |

**Recommendation:** PRs #7211 and #7835 have been in review for 2+ months and should be prioritized for merge or feedback to avoid contributor fatigue. Bugs #8406 and #8412 need assignee attention.

---

*Digest generated from GitHub data for agentscope-ai/QwenPaw on 2026-10-25.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>Let me analyze this GitHub data from ZeroClaw and create a structured project digest for 2026-10-25.

Let me organize the data:

**Overview:**
- Issues updated in last 24h: 18 (open/active: 12, closed: 6)
- PRs updated in last 24h: 50 (open: 47, merged/closed: 3)
- New releases: 0

**Releases:**
- v0.8.7 was just released (PR #12011)
- No new releases today

**Latest Issues (18 total, showing key ones):**
1. #8891 [OPEN] - Tracker: Persistent memory - wire the curation, relevance, and operability planes to parity (enhancement, memory, runtime, priority:p2)
2. #10066 [CLOSED] - Bug: SOP engine promotes and runs later steps before recording a step's output-schema rejection (bug, daemon, runtime, priority:p0)
3. #10797 [OPEN] - Bug: markdown memory backend silently loses stored entries when store() calls overlap (bug, memory, runtime, priority:p1)
4. #9592 [CLOSED] - fix(tools): probe the saved provider alias after model-routing updates
5. #12014 [OPEN] - Bug: Custom OpenAI-compatible provider with no context_window silently assumes 32,000
6. #12005 [OPEN] - Bug: PowerShell dialect rejects any command with a bare @ in an argument
7. #11799 [OPEN] - Feature: Shell policy refusals should say why, and accept an operator hint
8. #11992 [OPEN] - Feature: Email channel: operator templates and a sanitised HTML body for send_via
9. #11853 [OPEN] - ci: npm audit failed — 2026-10-19 (dependencies, security)


10. #12016 [CLOSED] - Feature: let an embedding binary add hooks to chat and cron turns
11. #11946 [OPEN] - Task: keep a stale deterministic SOP checkpoint copy from overwriting the run's state file
12. #11945 [OPEN] - Task: cover the SOP stale-copy branches that no test fails on yet
13. #12006 [OPEN] - Bug: tool_search serves a deferred tool's schema as copied at registry build
14. #11996 [OPEN] - Feature: send_via: explicit attachments checked under the read policy
15. #11792 [OPEN] - Bug

: an interrupted plugin install can leave an abandoned stage
16. #11932 [CLOSED] - Bug: container CA bundles still trust distrusted emSign chains
17. #11899 [CLOSED] - Bug: after a daemon reload, the stopped gateway keeps serving the connections it already accepted
18. #12009 [CLOSED] - Bug: Security job fails on every build: RUSTSEC-2026-0385 and RUSTSEC-2026-0386

**Pull Requests (50 total, top 20):**
- #11999 [OPEN] - chore(deps): bump the actions-all group
- #11937 [OPEN] - chore(deps): bump the rust-all group
- #12011 [CLOSED] - chore(release): bump version to v0.8.7
- #12012 [OPEN] - chore(deps-dev): bump happy-dom
- #11879 [OPEN] - feat(goal): add dormant configuration and command grammar [Goal V1 proposal 2/12]
- #12017 [OPEN] - fix(runtime): treat the context window as model metadata, not configuration
- #10446 [OPEN] - fix(runtime): reject tool-call envelopes leaked into prose instead of rendering them
- #11997 [OPEN] - feat(tools): send files through send_via under the read policy
- #11441 [OPEN] - feat(runtime): bind cron main jobs to the conversation they were created from
- #12007 [OPEN] - fix(tools): serve deferred tool schemas from the live tools
- #12003 [OPEN] - feat(channels): allow inbound-only email channels without SMTP
- #11847 [OPEN] - feat(channels): add configurable XMPP/Prosody channel with optional OMEMO
- #12015 [OPEN] - refactor(crypto): unify ChaCha20Poly1305 consumers
- #11921 [OPEN] - feat(session): implement append-only session event history
- #9420 [OPEN] - fix(anthropic): support stored OAuth profiles
- #11422 [OPEN] - test(rpc): keep TUI signing bound to the config-owned key
- #12013 [OPEN] - test(rpc): cover competing TUI signing keys
- #11663 [OPEN] - fix(memory): require vector evidence before automatic supersession
- #11268 [OPEN] - docs(auth): align gateway policy publication guidance
- #11933 [OPEN] - fix(web): keep the chat header on screen in narrow layouts

Now I'll structure this into a proper digest format.</think>

# ZeroClaw Project Digest — 2026-10-25

## Today's Overview

ZeroClaw shows high development velocity with 18 issues and 50 pull requests updated in the last 24 hours. The project just released **v0.8.7** (PR #12011), marking the seventh patch release in the v0.8.x series. Activity spans multiple domains: critical runtime bugs are being addressed (SOP step ordering, memory backend data loss), new channel features are progressing (XMPP with OMEMO, inbound-only email), and significant architectural work continues on session history and goal configuration. Three PRs were merged/closed today, with 47 remaining open.

---

## Releases

### v0.8.7 — Released 2026-10-24
**PR:** [#12011](https://github.com/zeroclaw-labs/zeroclaw/pull/12011)

Patch release bumping the coordinated workspace from v0.8.6 to v0.8.7. Contains fixes addressing security advisories (RUSTSEC-2026-0385, RUSTSEC-2026-0386), daemon reload gateway handling, and SOP engine step ordering issues. No breaking changes reported.

---

## Project Progress

### Merged/Closed PRs Today (3)
| PR | Title | Status |
|----|-------|--------|
| [#12011](https://github.com/zeroclaw-labs/zeroclaw/pull/12011) | chore(release): bump version to v0.8.7 | Closed |
| [#12009](https://github.com/zeroclaw-labs/zeroclaw/issues/12009) | Security job fails on every build: RUSTSEC-2026-0385 and RUSTSEC-2026-0386 | Closed (issue) |
| [#11899](https://github.com/zeroclaw-labs/zeroclaw/issues/11899) | After a daemon reload, the stopped gateway keeps serving connections | Closed (issue) |

### Notable Advancing Features

| PR | Title | Impact |
|----|-------|--------|
| [#12017](https://github.com/zeroclaw-labs/zeroclaw/pull/12017) | fix(runtime): treat the context window as model metadata, not configuration | Fixes broken context window fallback for custom OpenAI-compatible providers |
| [#12007](https://github.com/zeroclaw-labs/zeroclaw/pull/12007) | fix(tools): serve deferred tool schemas from live tools, not assembly copy | Fixes stale schema issue after config reload |
| [#11997](https://github.com/zeroclaw-labs/zeroclaw/pull/11997) | feat(tools): send files through send_via under the read policy | Enables file attachments in email channel via explicit paths |
| [#12003](https://github.com/zeroclaw-labs/zeroclaw/pull/12003) | feat(channels): allow inbound-only email channels without SMTP | IMAP-only mailboxes now supported |
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | feat(channels): add configurable XMPP/Prosody channel with optional OMEMO | New channel: XMPP with OMEMO encryption |
| [#11921](https://github.com/zeroclaw-labs/zeroclaw/pull/11921) | feat(session): implement append-only session event history | Major architectural change for replayable conversation history |

---

## Community Hot Topics

### Most Active Issues (by comments)
1. **[#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)** — [Tracker]: Persistent memory — wire the curation, relevance, and operability planes to parity  
   *12 comments* | Enhancement | Priority P2 | Memory subsystem roadmap

2. **[#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066)** — [Bug]: SOP engine promotes and runs later steps before recording a step's output-schema rejection  
   *5 comments* | Priority P0 | High severity — workflow blocked

3. **[#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797)** — [Bug]: markdown memory backend silently loses stored entries when `store()` calls overlap  
   *3 comments* | Priority P1 | Data loss / security risk — concurrent write issue

4. **[#9592](https://github.com/zeroclaw-labs/zeroclaw/issues/9592)** — fix(tools): probe the saved provider alias after model-routing updates  
   *3 comments* | Follow-up issue | Fixed

**Analysis:** The persistent memory tracker (#8891) is generating significant discussion — users and contributors are engaged in coordinating a multi-PR rollout for cross-session memory parity. SOP engine bugs (#10066) and memory backend concurrency (#10797) indicate runtime stability concerns that may warrant priority attention.

---

## Bugs & Stability

### Critical/High Severity Bugs (Open)
| Issue | Severity | Description | Fix PR? |
|-------|----------|-------------|--------|
| [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | S0 — Data loss | Markdown memory backend loses entries on concurrent store() calls | No |
| [#12014](https://github.com/zeroclaw-labs/zeroclaw/issues/12014) | S1 — Workflow blocked | Custom OpenAI provider assumes 32K context window when unset, rejects valid turns | [#12017](https://github.com/zeroclaw-labs/zeroclaw/pull/12017) |
| [#12005](https://github.com/zeroclaw-labs/zeroclaw/issues/12005) | S2 — Regression | PowerShell dialect rejects commands with bare `@` (breaks mail CLI) | No |
| [#12006](https://github.com/zeroclaw-labs/zeroclaw/issues/12006) | S3 — Minor | tool_search serves stale deferred tool schemas after reload | [#12007](https://github.com/zeroclaw-labs/zeroclaw/pull/12007) |
| [#11853](https://github.com/zeroclaw-labs/zeroclaw/issues/11853) | High | npm audit failed — @tailwindcss/typography moderate vulnerability | No |

### Fixed in v0.8.7
- **#10066** — SOP step ordering fixed
- **#11899** — Gateway connection handling after daemon reload
- **#12009** — RustSec advisories (ctutils, tokio)

---

## Feature Requests & Roadmap Signals

### High-Interest Feature Requests (Open)
| Issue | Feature | Priority |
|-------|---------|----------|
| [#11799](https://github.com/zeroclaw-labs/zeroclaw/issues/11799) | Shell policy refusals should say why, and accept an operator hint | Feature |
| [#11992](https://github.com/zeroclaw-labs/zeroclaw/issues/11992) | Email channel: operator templates and sanitised HTML body for send_via | Feature |
| [#11996](https://github.com/zeroclaw-labs/zeroclaw/issues/11996) | send_via: explicit attachments checked under read policy | Feature |
| [#12016](https://github.com/zeroclaw-labs/zeroclaw/issues/12016) | Let an embedding binary add hooks to chat and cron turns | Feature |
| [#11879](https://github.com/zeroclaw-labs/zeroclaw/pull/11879) | Goal V1: dormant configuration and command grammar | Proposal (Goal V1 series) |

**Roadmap Signals:** The combination of email channel enhancements (#11992, #11996, #12003), XMPP channel (#11847), and the persistent memory tracker (#8891) suggests v0.9.0 may focus on **channel ecosystem expansion** and **memory subsystem maturity**. The Goal V1 proposal series (#11879 is 2/12) indicates long-term architectural work on goal-based agent orchestration.

---

## User Feedback Summary

### Pain Points Identified
1. **Data loss risk** — The markdown memory backend concurrency bug (#10797) is flagged as S0 severity (data loss / security risk), indicating users have experienced silent data loss.

2. **PowerShell incompatibility** — Issue #12005 reports that the PowerShell dialect rejects valid commands with `@`, breaking mail CLI tools. This appears to be a regression.

3. **Provider configuration friction** — Custom OpenAI-compatible provider context window handling (#12014) causes unexpected rejections, suggesting documentation or DX gaps.

4. **Security job blocking CI** — RUSTSEC advisories (#12009) caused the Security job to fail on every build, blocking merges until v0.8.7.

### Positive Signals
- Active development on email channel (#12003, #11997, #11992) indicates user demand for robust email integration.
- XMPP channel with OMEMO (#11847) addresses secure messaging use cases.
- Session event history (#11921) represents significant UX improvement for debugging and replay.

---

## Backlog Watch

### Long-Running or Stalled Issues Requiring Maintainer Attention
| Issue | Age | Status | Concern |
|-------|-----|--------|---------|
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | ~3.5 months | Open | Persistent memory tracker — 7 open items (4 issues, 3 PRs) — needs coordination |
| [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) | ~3 months | Open | Anthropic OAuth profiles support — large PR, trusted contributor |
| [#10446](https://github.com/zeroclaw-labs/zeroclaw/pull/10446) | ~2 months | Open | Security fix: reject tool-call envelopes leaked into prose — high-risk security fix |
| [#11441](https://github.com/zeroclaw-labs/zeroclaw/pull/11441) | ~3 weeks | Open | Cron job binding to conversation — depends on #11438 |
| [#11945](https://github.com/zeroclaw-labs/zeroclaw/issues/11945) | 3 days | Open | SOP stale-copy test coverage — new, needs attention |
| [#11946](https://github.com/zeroclaw-labs/zeroclaw/issues/11946) | 3 days | Open | SOP stale-copy state file protection — new, related to #10066 |

**Note:** The SOP stale-copy workstream (#11945, #11946) is actively being addressed with focused test and fix PRs, indicating good maintainer responsiveness to the v0.8.7 bug reports.

---

*Generated from ZeroClaw activity on 2026-10-25. Data source: github.com/zeroclaw-labs/zeroclaw*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*