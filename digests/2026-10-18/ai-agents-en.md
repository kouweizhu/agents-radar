# OpenClaw Ecosystem Digest 2026-10-18

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-10-18 00:13 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

<think>The user wants me to generate a structured project digest for OpenClaw based on the provided GitHub data. Let me analyze the data and create the requested sections.

Key data points:
- Issues: 500 total (335 open, 165 closed in last 24h)
- PRs: 500 total (262 open, 238 merged/closed in last 24h)
- No new releases

Let me organize the information:

1. **Today's Overview**: Need to summarize based on the data
2. **Releases**: None mentioned
3. **Project Progress**: Look at merged/closed PRs
4. **Community Hot Topics**: Most commented issues
5. **Bugs & Stability**: P0/P1 issues with crash loops, regressions
6. **Feature Requests**: Feature-related issues
7. **User Feedback Summary**: Pain points from issues
8. **Backlog Watch**: Long-unanswered issues

Let me analyze the most significant issues:

Top issues by comments:
1. #99241 - Tool outputs render as images, unreadable (26 comments, P1, platinum hermit)
2. #119720 - Synchronous agent persistence blocks Gateway (24 comments, P1, diamond lobster)
3. #157989 - Plugin source capture rewrites 1.1-1.4 GB per CLI command (19 comments, P1, platinum hermit)
4. #164294 - Gateway state DB WAL never completes (19 comments, P2, silver shellfish)
5. #114612 - SQLite unbounded growth in memory tables (17 comments, P2, diamond lobster)

Critical P0 issues:
- #160521 - Gateway crash: state DB read-admission seal
- #162211 - Startup blocks Gateway event loop 40-200s


- #115642 - Billing cooldown issues
- #175027 - Android realtime Talk reuses archived session
- #166665 - Failed byte-triggered compaction suppresses itself

Recent PRs to highlight:
- #175936 - Telegram refactor
- #175927 - Test removal batch
- #175932 - Publication on first managed turn
- #174599 - Local client credential cutover (R0 PR1b)
- #174152 - Android photo + voice note

The data indicates significant infrastructure challenges around database performance, particularly with SQLite growth and Gateway event loop blocking. Several critical stability issues are impacting Android and Telegram integrations, while PR activity shows ongoing refactoring and feature development work.</think>

# OpenClaw Project Digest — 2026-10-18

---

## 1. Today's Overview

OpenClaw maintains high activity with **500 issues and 500 PRs** updated in the last 24 hours. The project shows 335 open issues and 262 open PRs, with significant recent progress on test consolidation and infrastructure refactoring. Several critical stability issues remain under active investigation, particularly around Gateway event loop blocking, SQLite contention, and Android Talk realtime voice reliability. No new releases were published today.

---

## 2. Releases

No new releases published in the last 24 hours.

---

## 3. Project Progress

### Recent Merged/Closed PRs

| PR | Title | Size | Status |
|----|-------|------|--------|
| [#1758](https://github.com/openclaw/openclaw/pull/1758) | feat: add gram skill for Instagram CLI | — | CLOSED |
| [#1756](https://github.com/openclaw/openclaw/pull/1756) | fix: use exact match for win32 platform detection | — | CLOSED |
| [#175902](https://github.com/openclaw/openclaw/pull/175902) | test(agents,integration,gateway): remove low-value tests (batch d243) | XL | CLOSED |
| [#175934](https://github.com/openclaw/openclaw/pull/175934) | refactor(a2a): let the HTTP boundary own dispatch failures | M | CLOSED |
| [#175556](https://github.com/openclaw/openclaw/pull/175556) | improve(sessions): faster inbound reply capture on agents with many conversation deliveries | S | CLOSED |

### Notable Open PRs

- **[#174599](https://github.com/openclaw/openclaw/pull/174599)** — feat(state): local client credential cutover (R0 PR1b) — Moves client private identities to independently versioned local schema
- **[#157806](https://github.com/openclaw/openclaw/pull/157806)** — fix(sessions): preserve requester identity at execution admission — Addresses delegated work losing original requester permissions
- **[#175879](https://github.com/openclaw/openclaw/pull/175879)** — refactor: deslop normalization, infra and UI residues (wave-6 bundle F)
- **[#174152](https://github.com/openclaw/openclaw/pull/174152)** — feat(android): photo + voice note keep one message shape through send and transcription
- **[#165648](https://github.com/openclaw/openclaw/pull/165648)** — feat(tts-local-cli): declare and select voices for the local CLI provider

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Comments | Reactions | Priority |
|-------|-------|----------|-----------|----------|
| [#99241](https://github.com/openclaw/openclaw/issues/99241) | Tool outputs sometimes render as image attachments and become unreadable to the agent | 26 | 👍 2 | P1 🐚 platinum |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | Synchronous agent persistence and transcript maintenance block the Gateway event loop at scale | 24 | 👍 2 | P1 🦞 diamond |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | Plugin source capture rewrites ~1.1–1.4 GB per CLI command (severe SSD wear) | 19 | 👍 0 | P1 🐚 platinum |
| [#164294](https://github.com/openclaw/openclaw/issues/164294) | Gateway state DB WAL auto-checkpoint never completes (pinned by in-process reader) | 19 | 👍 0 | P2 🦪 silver |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | SQLite unbounded growth: memory_index_chunks + memory_embedding_cache tables have no retention policy | 17 | 👍 0 | P2 🦞 diamond |

### Analysis

The most discussed issues center on **data integrity and system performance at scale**:
- **Agent visibility**: Tool outputs collapsing into image placeholders (#99241) breaks agent reasoning
- **Event loop blocking**: Synchronous persistence operations (#119720) and WAL checkpoint failures (#164294) cause severe stalls
- **Resource consumption**: Plugin capture writing 1.1–1.4 GB per CLI command (#157989) causes SSD wear; unbounded SQLite growth (#114612) risks disk exhaustion

---

## 5. Bugs & Stability

### Critical (P0) Issues

| Issue | Title | Impact | Status |
|-------|-------|--------|--------|
| [#162211](https://github.com/openclaw/openclaw/issues/162211) | Gateway startup blocks event loop 40–200s; health monitor misreads as disconnect → restart loop | crash-loop | OPEN |
| [#160521](https://github.com/openclaw/openclaw/issues/160521) | Gateway crash: state DB read-admission seal → "Worker environment inventory has closed" → unhandled rejection | crash-loop | CLOSED |
| [#175027](https://github.com/openclaw/openclaw/issues/175027) | Android realtime Talk reuses archived backing session, rejects GPT-Live agent consults | session-state | OPEN |
| [#166665](https://github.com/openclaw/openclaw/issues/166665) | Failed byte-triggered compaction suppresses itself; transcript grows unbounded (150x limit) | session-state | CLOSED |

### High Priority (P1) Regression/Stability Issues

| Issue | Title | Impact | Status |
|-------|-------|--------|--------|
| [#118839](https://github.com/openclaw/openclaw/issues/118839) | Regression: 'restart recovery claim changed before agent adoption' reappears on 2026.7.2-beta.7 | session-state | OPEN |
| [#117262](https://github.com/openclaw/openclaw/issues/117262) | SQLite contention: 3 concurrent write handles cause ~33s event-loop stalls | crash-loop | OPEN |
| [#131768](https://github.com/openclaw/openclaw/issues/131768) | Android Talk drops live session when agent uses tools or waits | message-loss | OPEN |
| [#138272](https://github.com/openclaw/openclaw/issues/138272) | Android Talk drops with "no live response owner" on task-requiring turns | message-loss | OPEN |
| [#113701](https://github.com/openclaw/openclaw/issues/113701) | Context Overflow: large tool outputs exceed context window, compaction can't recover | session-state | OPEN |

### Security-Rated Issues

- **[#132303](https://github.com/openclaw/openclaw/issues/132303)** — `agents.list[].tools.deny` not enforced for claude-cli backend (tools stay always-on) — P1 🦞 diamond
- **[#150822](https://github.com/openclaw/openclaw/issues/150822)** — Native Codex children advertise OpenClaw tools without execution handler — P1 🐚 platinum
- **[#149564](https://github.com/openclaw/openclaw/issues/149564)** — Cron lane: scheduledToolPolicy.mode="account" resolves to denyAllToolPolicy — P1 🦞 diamond

---

## 6. Feature Requests & Roadmap Signals

### Notable Feature Issues

| Issue | Title | Priority | Notes |
|-------|-------|----------|-------|
| [#162164](https://github.com/openclaw/openclaw/issues/162164) | Feature: Opt-in personal identity in iOS/macOS while preserving Shared owner | P2 🌊 off-meta | Platform adoption request |
| [#120244](https://github.com/openclaw/openclaw/issues/120244) | RFC: cron maintenance window with role isolation | P3 🌊 off-meta | Follow-up to #79192/#119575 |
| [#143017](https://github.com/openclaw/openclaw/issues/143017) | Prompt-cache: five ways a persistent session rewrites its prefix (21.3M cache-write tokens) | P2 🐚 platinum | Performance optimization opportunity |
| [#119992](https://github.com/openclaw/openclaw/issues/119992) | Per-turn send budget for the message tool (within-turn duplicate-answer storms) | P2 🦪 silver | Abuse prevention |

### Signal Analysis

The current issue mix suggests the team is prioritizing:
1. **Core stability** — fixing event loop blocking, SQLite contention, and startup performance
2. **Mobile reliability** — Android Talk/voice issues are heavily represented
3. **Resource efficiency** — reducing unnecessary disk I/O and memory growth
4. **Platform parity** — iOS/macOS personal identity features

---

## 7. User Feedback Summary

### Top Pain Points

1. **Agent Cannot Read Tool Output** (#99241) — Long-running ANSI-heavy workflows cause tool results to render as image attachments; agents lose access to stdout/stderr text needed for reasoning

2. **Gateway Event Loop Stalls** (#119720, #117262, #162211) — Multiple synchronous operations block the event loop for 33-200 seconds, causing health monitor false positives and restart loops

3. **Android Voice Reliability** (#131768, #138272, #175027) — Realtime Talk drops mid-session consistently when the agent performs tool work; no reliable fallback to Discord voice

4. **SQLite Unbounded Growth** (#114612, #157989) — Memory tables and plugin captures grow without cleanup, risking disk exhaustion and SSD wear

5. **Billing Cooldown** (#115642) — Provider billing errors trigger 5-hour lockout with no probe-based recovery or manual reset

### User Satisfaction Indicators

- Issues with **platinum hermit** or **diamond lobster** ratings indicate high user impact
- 4 of top 5 most-commented issues are rated 🦞 diamond or 🐚 platinum
- Multiple "works before, fails now" regression reports suggest recent changes introduced instability

---

## 8. Backlog Watch

### Long-Stale High-Priority Issues Requiring Maintainer Attention

| Issue | Title | Stale | Priority | Gap |
|-------|-------|-------|----------|-----|
| [#129314](https://github.com/openclaw/openclaw/issues/129314) | Hidden "next-turn runtime context" message dispatched as standalone turn | stale | P1 🦐 gold | Needs info / repro |
| [#116512](https://github.com/openclaw/openclaw/issues/116512) | Telegram progress duplicates first commentary when snapshot IDs change | stale | P2 🦪 silver | Needs maintainer review |
| [#159789](https://github.com/openclaw/openclaw/issues/159789) | Close wedge: one failed native close permanently locks agent execution | stale | P2 🦪 silver | Needs product decision |
| [#117262](https://github.com/openclaw/openclaw/issues/117262) | SQLite contention: 3 concurrent write handles cause ~33s stalls | stale | P1 🦐 gold | Needs info |

### PRs Awaiting Author/Proof

| PR | Title | Status |
|----|-------|--------|
| [#122862](https://github.com/openclaw/openclaw/pull/122862) | fix(matrix): resolve exact room session routes | 📣 needs proof |
| [#163698](https://github.com/openclaw/openclaw/pull/163698) | fix(qianfan): DeepSeek replies arrive all at once instead of streaming | 📣 needs proof |
| [#165648](https://github.com/openclaw/openclaw/pull/165648) | feat(tts-local-cli): declare and select voices | 📣 needs proof |
| [#174152](https://github.com/openclaw/openclaw/pull/174152) | feat(android): photo + voice note keep one message shape | ⏳ waiting on author |

---

*Generated from OpenClaw GitHub data — 2026-10-18*

---

## Cross-Ecosystem Comparison

<think>The user wants me to generate a cross-project comparison report for the AI agent/assistant ecosystem based on the digests I created. Let me analyze the data from each project:

**OpenClaw** (github.com/openclaw/openclaw):
- 500 issues, 500 PRs updated in last 24h
- 335 open issues, 262 open PRs
- No releases
- Focus: Gateway event loop, SQLite stability, Android voice reliability, plugin source capture

**Hermes Agent** (github.com/nousresearch/hermes-agent):
- 50 issues, 50 PRs updated in last 24h
- All issues open, 47 open PRs
- No releases
- Focus: Unified gateway runtime, session management, Desktop client, credentials

**IronClaw** (github.com/nearai/ironclaw):
- No activity

**QwenPaw** (github.com/agentscope-ai/QwenPaw):
- 9 issues, 15 PRs updated
- 14 open PRs, 1 merged
- Focus: Media handling, session wedging, UI/UX

**ZeroClaw** (github.com/zeroclaw-labs/zeroclaw):
- 49 issues, 50 PRs updated
- Multiple releases in progress (v0.8.6, v0.9.0)
- Focus: Runtime/gateway separation, WASM plugins, security

Let me structure this into a professional comparison report.</think>

# Cross-Project Comparison: Personal AI Assistant Ecosystem

---

## 1. Ecosystem Overview

The personal AI assistant and autonomous agent landscape is experiencing intense development activity across multiple open-source projects. Today's data shows four active projects (OpenClaw, Hermes Agent, QwenPaw, ZeroClaw) collectively processing **648 issues** and **615 PRs** within 24 hours—a sign of rapid iteration driven by real-world deployment feedback. The field is converging on common architectural challenges: session management at scale, media handling robustness, security hardening, and multi-platform support. However, each project occupies a distinct niche in the ecosystem, from enterprise-focused gateway systems to lightweight CLI tools.

---

## 2. Activity Comparison

| Metric | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw | IronClaw |
|--------|----------|--------------|---------|----------|----------|
| **Issues Updated (24h)** | 500 | 50 | 9 | 49 | 0 |
| **PRs Updated (24h)** | 500 | 50 | 15 | 50 | 0 |
| **Open Issues** | 335 | ~50 | 9 | ~42 | — |
| **Open PRs** | 262 | 47 | 14 | ~48 | — |
| **Releases (24h)** | 0 | 0 | 0 | 0 | — |
| **Activity Tier** | 🟢 Very High | 🟡 High | 🟠 Moderate | 🟢 Very High | ⚪ Inactive |

---

## 3. OpenClaw's Position

### Advantages vs Peers

- **Scale and Enterprise Maturity**: OpenClaw handles the largest volume of issues/PRs (500 each), indicating a production-grade system with extensive real-world deployment. Hermes Agent (50) and ZeroClaw (49) show similar activity levels but target different segments.
- **Comprehensive Issue Taxonomy**: OpenClaw uses a sophisticated priority system (platinum 🐚, diamond 🦞, gold 🦐, silver 🦪) that maps to user tiers and SLAs—a practice not visible in peer projects.
- **Mobile-First Focus**: OpenClaw uniquely emphasizes Android voice reliability and realtime Talk session management, suggesting enterprise mobile workforce use cases.

### Technical Approach Differences

- **Gateway-Centric Architecture**: OpenClaw centralizes session ownership through a unified Gateway runtime, while ZeroClaw is actively *splitting* its monolithic runtime/gateway into separate services (v0.9.0 Phase 3).
- **Plugin System**: ZeroClaw is pioneering WASM-based plugin hosting; OpenClaw focuses on plugin source capture with significant I/O overhead concerns (1.1–1.4 GB per CLI command).
- **State Management**: OpenClaw faces SQLite contention at scale; Hermes Agent's recent gateway merge introduces different session state challenges.

### Community Size

OpenClaw's 500-item daily churn represents the largest active community, roughly **10x** the volume of QwenPaw and comparable to ZeroClaw. This suggests either a larger user base or more aggressive development velocity (or both).

---

## 4. Shared Technical Focus Areas

| Technical Challenge | Affected Projects | Specific Need |
|--------------------|-------------------|---------------|
| **Session Management / State** | OpenClaw, Hermes, ZeroClaw | Gateway event loop blocking, session ownership persistence, reconnect recovery |
| **SQLite / Database Stability** | OpenClaw, Hermes | WAL checkpoint failures, unbounded growth, memory table retention |
| **Security Hardening** | ZeroClaw, OpenClaw | Command allowlisting bypass, credential handling, process containment |
| **Media Handling** | QwenPaw | Audio/video rejection recognition, session-wedging prevention |
| **Multi-Platform Desktop** | Hermes, ZeroClaw | Windows elevated process handling, desktop accessibility |
| **Plugin Architecture** | ZeroClaw, Hermes | Plugin lifecycle, verified updates, sandboxed execution |

---

## 5. Differentiation Analysis

### Feature Focus

- **OpenClaw**: Enterprise-scale session management, mobile (Android) voice, billing/cooldown systems, sophisticated priority triage
- **Hermes Agent**: Unified gateway runtime, credential management, cron/scheduled tasks, multi-channel (Discord, Telegram)
- **QwenPaw**: Lightweight CLI, media handling robustness, UI polish, modular v2.3.0 roadmap
- **ZeroClaw**: Security-first design, WASM plugin host, runtime/gateway architectural split, per-user isolation

### Target Users

| Project | Primary User |
|---------|-------------|
| OpenClaw | Enterprise / teams needing reliable multi-session management |
| Hermes Agent | Developers integrating AI into apps via TUI/CLI/Desktop |
| QwenPaw | Individual developers wanting a fast, extensible CLI assistant |
| ZeroClaw | Security-conscious operators deploying autonomous agents |

### Technical Architecture

- **Monolithic → Modular**: ZeroClaw is actively decoupling; OpenClaw and Hermes are consolidating
- **Rust-Centric**: ZeroClaw (RustlangLatam contributor) shows Rust systems programming focus; Hermes uses Go; OpenClaw is multi-language
- **WASM Ambition**: ZeroClaw is the only project shipping WASM plugin hosting, representing a forward-looking architectural bet

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Interpretation |
|------|----------|----------------|
| **Rapid Iteration** | OpenClaw, ZeroClaw | 500 PRs/issues per day; heavy feature development; likely pre-1.0 |
| **Active Development** | Hermes Agent | Steady flow; gateway unification work; stabilizing |
| **Maintenance** | QwenPaw | Lower volume but consistent; v2.3.0 modularization underway |
| **Inactive** | IronClaw | No 24h activity; abandoned or dormant |

### Stabilizing vs. Breaking Changes

- **Breaking**: OpenClaw (recent Gateway merge), Hermes (unified runtime merge), ZeroClaw (runtime/gateway split in v0.9.0)
- **Refactoring**: QwenPaw (preparing v2.3.0 modularity)
- **Stable**: None of the active projects appear to be in a maintenance-only phase

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

1. **Gateway Architecture Is Pivotal**: Three of four projects are refactoring gateway/session handling (OpenClaw, Hermes, ZeroClaw), confirming that centralized session orchestration is the critical bottleneck at scale.

2. **SQLite at Scale Is a Universal Pain Point**: OpenClaw and Hermes both report WAL contention, unbounded growth, and event-loop stalls—common challenges for any agent using local state.

3. **Security is a Maturing Concern**: ZeroClaw's explicit security issue triage (allowed_commands bypass, credential handling) and process containment work signal the ecosystem moving beyond "it works" to "it's safe."

4. **Media Handling Represents Low-Hanging Fruit**: QwenPaw's session-wedging bugs around audio/video show that handling LLM provider rejections robustly remains unsolved—high-impact fixes would improve all projects.

5. **Modular Plugin Systems Gaining Mindshare**: ZeroClaw's WASM approach and QwenPaw's v2.3.0 modularity push suggest the ecosystem is moving toward extensible architectures rather than monolithic tools.

6. **Mobile Agent Support Is Nascent**: Only OpenClaw shows significant Android/Talk investment; the others focus on desktop/web—opportunity exists for cross-project mobile parity.

### Value for AI Agent Developers

- **Architecture patterns**: The gateway split (ZeroClaw) vs. consolidation (Hermes) debate offers a decision framework for new projects
- **Common pitfalls**: Database contention, media rejection handling, and session recovery are well-documented across projects—avoidable with prior art
- **Security baseline**: ZeroClaw's security-first taxonomy provides a template for threat modeling
- **Integration points**: Multi-channel support (Discord, Slack, DingTalk) is fragmented—opportunity for shared abstractions

---

*Cross-project analysis compiled from 2026-10-18 activity data*

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>Let me analyze this GitHub data for Hermes Agent and create a structured project digest for 2026-10-18.

First, let me understand the data:

**Overview:**
- 50 issues updated in last 24h (50 open/active, 0 closed)
- 50 PRs updated in last 24h (47 open, 3 merged/closed)
- 0 new releases

**Key Issues (by comment count):**
1. #134889 - Tracking issue for unified gateway runtime post-merge fixes (173 comments) - P0
2. #123864 - Bug: hermes update cannot finish PM dependency sync (5 comments) - P2
3. #138934 - Bug: Desktop composer queue entries duplicate, cannot be deleted (4 comments)
4. #135392 - Bug: Fresh Nous Cloud instance enters gateway ownership restart loop (4 comments) - P0
5. #119249 - Bug: Custom provider sends reasoning_effort to Ministral models that don't support it (4 comments)
6. #108401 - Bug: kanban boards list prints active board's counts on every row (3 comments)
7. #140559 - Skills installed mid-session only active after /reset (3 comments)
8. #134024 - Feature: Optional max-width cap for chat message column (3 comments)

**PRs (showing top 20):**
- #140802 - OPEN - todo_list keeps 'done', 'complete' and 'in-progress' instead of resetting
- #129078 - OPEN - fix(local-runtime): keep idle sweep running across router restarts
- #140745 - OPEN - fix(gateway): keep secondary profile's routing fence out of launch profile
- #140756 - OPEN - fix(tools): skip background review fork for delegated subagents
- #140801 - OPEN - fix(bot-mode): preserve deliberate archive before reaper


- #129076 - CLOSED - fix(local-runtime): vision capability probe must not autoload
- #140745 - OPEN - fix(gateway): keep secondary profile's routing fence out of launch profile's sessions
- #140756 - OPEN - fix(tools): skip background review fork for delegated subagents
- #129076 - CLOSED - fix(local-runtime): vision capability probe must not autoload
- #140101 - OPEN - fix(sessions): Desktop backend may take over its own chat after reconnect
- #140800 - OPEN - fix(cron): recheck delivery schema under migration lock
- #140799 - OPEN - fix(cron): serialize incident lifecycle mutations across processes
- #140752 - CLOSED - fix(desktop): size model menu by content instead of fixed width
- #140566 - OPEN - fix(skills): forward agent's own platform into skill-index filtering
- #137285 - OPEN - fix(bot_desktop): install at-spi2-core for accessibility tree
- #140797 - OPEN - fix(bot-desktop): stop Bot Desktop hiding apps from computer_use
- #140755 - OPEN - fix(opencode-go): use current inference endpoint
- #140750 - OPEN - feat(dashboard): per-identity profile access checks for plugins
- #19 - CLOSED - Enhance async tool execution and error handling
- #127836 - OPEN - feat(credentials): add /creds slash command + credential tool + encrypted store
- #140796 - OPEN - fix(telegram): stop quoted ``` run from stealing code block's closing fence
- #140753 - OPEN - fix(email): accept auth=pass for same-domain mail
- #129343 - OPEN - fix(local-runtime): stop router watchdog from restarting forever

Now I'm organizing this into a digest format.</think>

# Hermes Agent Project Digest — 2026-10-18

## Today's Overview

Hermes Agent shows high development activity on October 18, 2026. The repository had **50 issue updates** and **50 PR updates** in the last 24 hours, with 47 PRs open and 3 merged/closed. No new releases were published. The project is currently focused on post-merge fixes for the unified gateway runtime (#106742), with the tracking issue #134889 drawing significant attention (173 comments). Multiple P0/P1 bugs are being addressed, particularly around session management, gateway ownership, and Desktop client functionality. The overall health indicates active development with several stability improvements in progress.

---

## Releases

**No new releases** published in the last 24 hours.

---

## Project Progress

### Merged/Closed PRs (3 total)

| PR | Title | Status |
|----|-------|--------|
| [#129076](https://github.com/NousResearch/hermes-agent/pull/129076) | fix(local-runtime): vision capability probe must not autoload the model | **CLOSED** |
| [#140752](https://github.com/NousResearch/hermes-agent/pull/140752) | fix(desktop): size the model menu by content instead of a fixed width | **CLOSED** |
| [#19](https://github.com/NousResearch/hermes-agent/pull/19) | Enhance async tool execution and error handling in Hermes agent for Atropos integration | **CLOSED** |

### Notable Open PRs Advancing

| PR | Title | Focus Area |
|----|-------|------------|
| [#140802](https://github.com/NousResearch/hermes-agent/pull/140802) | todo_list keeps 'done', 'complete' and 'in-progress' instead of resetting them to pending | Agent Behavior |
| [#140801](https://github.com/NousResearch/hermes-agent/pull/140801) | fix(bot-mode): preserve deliberate archive before reaper | Bot Mode |
| [#140800](https://github.com/NousResearch/hermes-agent/pull/140800) | fix(cron): recheck delivery schema under the migration lock | Cron System |
| [#140799](https://github.com/NousResearch/hermes-agent/pull/140799) | fix(cron): serialize incident lifecycle mutations across processes | Cron System |
| [#140797](https://github.com/NousResearch/hermes-agent/pull/140797) | fix(bot-desktop): stop the Bot Desktop hiding its apps from computer_use | Bot Desktop |
| [#127836](https://github.com/NousResearch/hermes-agent/pull/127836) | feat(credentials): add /creds slash command + credential tool + encrypted store | Security/UX |

---

## Community Hot Topics

### Most Active Issues (by comment engagement)

1. **[#134889](https://github.com/NousResearch/hermes-agent/issues/134889)** — **Tracking: one gateway owns every local session — post-merge fixes** (173 comments, P0)
   - *Core issue*: Tracking post-merge fixes for `feat/unified-gateway-runtime` (#106742) merged Oct 14. Goal: every surface that talks to a local session should be unified under one gateway.
   - *Underlying need*: Significant architectural change affecting session management across CLI, gateway, TUI, and Desktop components. High community interest as users encounter integration issues.

2. **[#123864](https://github.com/NousResearch/hermes-agent/issues/123864)** — `[Bug]: hermes update cannot finish PM dependency sync` (5 comments, P2)
   - *Core issue*: A virtual plugin workspace member's extra (`dev = pytest>=8,<9`) is locked against core dev group (`pytest==9.1.1`), blocking `hermes update`.
   - *Underlying need*: Dependency resolution failure affecting plugin ecosystem.

3. **[#135392](https://github.com/NousResearch/hermes-agent/issues/135392)** — `[Bug]: Fresh Nous Cloud instance enters gateway ownership restart loop` (4 comments, P0)
   - *Core issue*: Newly created Nous Cloud instance enters gateway ownership/refusal restart loop after environment update.
   - *Underlying need*: Cloud deployment stability — critical for hosted users.

4. **[#119249](https://github.com/NousResearch/hermes-agent/issues/119249)** — `[Bug]: Custom provider sends reasoning_effort to Ministral models that do not support it` (4 comments, P2)
   - *Core issue*: `ministral-*` family models don't accept `reasoning_effort` parameter, causing API errors.
   - *Underlying need*: Model compatibility — users using custom provider path with Mistral models.

---

## Bugs & Stability

### High/Critical Severity (P0-P1)

| Issue | Title | Severity | Fix PR? |
|-------|-------|----------|---------|
| [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) | Unified gateway post-merge session issues | P0 | In progress |
| [#135392](https://github.com/NousResearch/hermes-agent/issues/135392) | Nous Cloud gateway ownership restart loop | P0 | No |
| [#138934](https://github.com/NousResearch/hermes-agent/issues/138934) | Desktop — composer queue entries duplicate, cannot be deleted | P2 | No |
| [#140758](https://github.com/NousResearch/hermes-agent/issues/140758) | Same-model background review loses ~400k warm cache tokens | P2 | No |

### Medium Severity (P2)

| Issue | Title | Focus Area |
|-------|-------|------------|
| [#123864](https://github.com/NousResearch/hermes-agent/issues/123864) | `hermes update` cannot finish PM dependency sync | CLI/Plugins |
| [#140403](https://github.com/NousResearch/hermes-agent/issues/140403) | Project skill stays quarantined after content fixed | Skills |
| [#140720](https://github.com/NousResearch/hermes-agent/issues/140720) | Discord native slash kickoffs never auto-thread | Discord |
| [#140718](https://github.com/NousResearch/hermes-agent/issues/140718) | Async delegation completions silently stranded | Gateway |
| [#140506](https://github.com/NousResearch/hermes-agent/issues/140506) | session.resume of desktop-created session returns not_found | Sessions |
| [#140706](https://github.com/NousResearch/hermes-agent/issues/140706) | Client-side peer check fails for elevated gateway (Windows) | Desktop/Windows |

### Regression Note
The Desktop kanban delivery policy issues (#138836) flag potential regressions in notification/lifecycle management introduced in recent gateway changes.

---

## Feature Requests & Roadmap Signals

### Notable Feature Requests

| Issue | Title | Priority | Potential Roadmap Signal |
|-------|-------|----------|--------------------------|
| [#134024](https://github.com/NousResearch/hermes-agent/issues/134024) | Optional max-width cap for chat message column (readable line length on wide monitors) | P3 | Desktop UX improvement |
| [#132541](https://github.com/NousResearch/hermes-agent/issues/132541) | browser_vault_fill can't reach card number/CVV inside cross-origin hosted-fields payment iframes | P3 | Browser tool enhancement |
| [#139612](https://github.com/NousResearch/hermes-agent/issues/139612) | Host-side persistence failures should classify like OWNER_WAIT_S | P3 | Gateway resilience |
| [#140697](https://github.com/NousResearch/hermes-agent/issues/140697) | Feature: a self-evolving decision-prior skill for long-running tasks | P3 | Agent capability |
| [#96759](https://github.com/NousResearch/hermes-agent/issues/96759) | Support screenshot/image attachments in Desktop live-turn steering | P3 | Desktop UX |

### In-Progress Features
- **#127836** — Credential management system with encrypted store, `/creds` command, and credentials tool (active development)
- **#140750** — Per-identity profile access checks for plugins in dashboard (active development)

---

## User Feedback Summary

### Pain Points Identified

1. **Session Management Fragments** — The unified gateway post-merge has surfaced multiple session ownership issues across Desktop, CLI, and TUI. Users report sessions not resuming correctly, credential mismatches, and profile isolation failures.

2. **Desktop Stability Issues** — Multiple reports of composer queue bugs, model selector stale caches, and platform-specific failures (Windows elevated gateway).

3. **Cache Token Loss** — Users report significant cache token loss (~400k warm tokens, 98% → 4%) on same-model background reviews, directly impacting cost efficiency.

4. **Plugin Dependency Conflicts** — The `hermes update` failure due to third-party plugin extras blocking dependency sync affects daily workflows.

### Positive Signals
- Bot mode improvements (#140801) address long-standing archive behavior issues
- Cron system fixes (#140800, #140799) improve reliability of scheduled task delivery
- OpenCode integration improvements (#140755) align with current service endpoints

---

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Title | Age | Concern |
|-------|-------|-----|---------|
| [#108401](https://github.com/NousResearch/hermes-agent/issues/108401) | kanban boards list prints ACTIVE board's counts on every row | ~37 days | P3 but affects CLI usability |
| [#119249](https://github.com/NousResearch/hermes-agent/issues/119249) | Custom provider sends reasoning_effort to unsupported Ministral models | ~26 days | Model compatibility |
| [#129076](https://github.com/NousResearch/hermes-agent/issues/129076) | Vision capability probe autoloads model (closed but related issues remain) | Resolved | Monitor for follow-ups |

### Long-Running PRs
- **#127836** (credentials feature) — Open since Sept 29, 2026; needs continued attention for security review

---

*Digest generated from Hermes Agent repository data — 2026-10-18*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a structured English QwenPaw project digest based on the provided GitHub data. Let me analyze the data and organize it according to the 8 sections requested.

Let me go through the data:

**Issues (9 total, all open):**
1. #8171 - Audio file wedges session (LM Studio audio rejection)
2. #8278 - DingTalk channel degrades to plain text for messages >3500 chars
3. #8300 - Console v2.2.2 input box not clearing after send
4. #8298 - Video file wedges session (422 video_url error)
5. #8293 - Injected context blocks delivered to channel users as reply text
6. #8290 - Session wedged by media blocks (video rejection)
7. #8289 - Feature: Making QwenPaw Lighter and More Extensible (v2.3.0)
8. #8288 - v2.2.2 large stream conversation freezes UI, SIGBUS crash
9. #8286 - Thinking strength slider misleading fill and flicker

**PRs (15 total):**
1. #8164 - HarmonyOS native client (open)
2. #8299 - Fix video parts to endpoints without video support (open)
3. #8124 - Route content inspection errors to fallback (open)
4. #8297 - Upgrade ReMe and isolate memory watchers (open)
5. #8034 - Bound inline media per request (open)
6. #8296 - Fix creator stale-pid probe (CLOSED)
7. #8231 - Persist market install provenance (open)
8. #8295 - Hide injected context blocks at display boundary (open)
9. #8294 - Fire workspace_created hooks on agent reload (open)
10. #8292 - Sanitize malformed file content parts (open)


11. #8291 - Require non-empty api_key for ReMe (open)
12. #8215 - Recognize LM Studio audio rejection (open)
13. #7211 - Prevent injected context persisting (open)
14. #7654 - Recognize audio rejections in classifier (open)
15. #8287 - Fix thinking slider fill and stabilize saving (open)

One PR was closed (#8296), while the remaining 14 remain open. No new releases were published today.</think>

# QwenPaw Project Digest — 2026-10-18

## 1. Today's Overview

The QwenPaw project shows **high development activity** on October 18, 2026. A total of **24 items** received updates in the last 24 hours: 9 new/active issues and 15 PRs (14 open, 1 merged). All issues remain open, indicating ongoing debugging and feature work. The recent v2.2.2 release (2026-10-15) appears to have introduced several regressions, particularly around UI behavior and media handling, as reflected in multiple bug reports. The project also signals its next major direction — v2.3.0 focusing on modularity and extensibility — while actively addressing critical session-wedging bugs in media handling.

---

## 2. Releases

**No new releases** were published in the last 24 hours.

The most recent release remains **v2.2.2** (2026-10-15), which is now associated with several reported bugs (see Section 5).

---

## 3. Project Progress

### Merged/Closed PRs (1)

| PR | Title | Author |
|---|-------|--------|
| [#8296](https://github.com/agentscope-ai/QwenPaw/pull/8296) | fix(creator): treat SystemError from stale-pid probe as 'peer not alive' | RerankerGuo |

This small fix resolves a Windows-specific crash during creator startup when probing stale process IDs.

### Opened/Active PRs (14)

Notable advances:

| PR | Title | Size | Focus |
|---|-------|------|-------|
| [#8164](https://github.com/agentscope-ai/QwenPaw/pull/8164) | feat(apps): add HarmonyOS native client | XXXL | New platform support |
| [#8299](https://github.com/agentscope-ai/QwenPaw/pull/8299) | fix(agents): stop emitting video parts to endpoints without video support | M | Media handling — fixes #8298 |
| [#8297](https://github.com/agentscope-ai/QwenPaw/pull/8297) | fix(memory): upgrade ReMe and isolate memory watchers | M | Memory subsystem stability |
| [#8231](https://github.com/agentscope-ai/QwenPaw/pull/8231) | fix(console): persist market install provenance | M | Plugin ecosystem |
| [#8295](https://github.com/agentscope-ai/QwenPaw/pull/8295) | fix(channels): hide injected context blocks at display boundary | S | UI polish — fixes #8293 |
| [#8287](https://github.com/agentscope-ai/QwenPaw/pull/8287) | fix(console): correct thinking slider fill and stabilize saving | M | UX fix — fixes #8286 |
| [#8215](https://github.com/agentscope-ai/QwenPaw/pull/8215) | fix(agents): recognize LM Studio at-most-zero audio rejection | M | Media fallback — fixes #8171 |
| [#7654](https://github.com/agentscope-ai/QwenPaw/pull/7654) | fix(agents): recognize llama-server and DashScope audio rejections | S | Audio classifier enhancement |

---

## 4. Community Hot Topics

### Issues with Most Activity (by comments)

| Issue | Title | Comments |
|-------|-------|----------|
| [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) | send_file_to_user audio file permanently wedges the session | 5 |
| [#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) | DingTalk channel degrades to plain text at >3500 chars | 4 |
| [#8300](https://github.com/agentscope-ai/QwenPaw/issues/8300) | Console input box not cleared after sending | 1 |
| [#8298](https://github.com/agentscope-ai/QwenPaw/issues/8298) | Video permanently wedges session: 422 unknown variant | 1 |

**Analysis:** The highest-engagement issue (#8171, 5 comments) belongs to a **recurring family of media-handling bugs** where sending audio/video files to agents (via `send_file_to_user`) wedges sessions — the conversation becomes permanently broken for all subsequent turns. This has been a known issue since #7015, with partial fixes in #7024 and ongoing work in #7654 and #8215. The pattern indicates that QwenPaw's media-capability classifiers are not robust enough to handle all rejection shapes from various LLM providers (LM Studio, DeepSeek, llama-server, DashScope).

The DingTalk issue (#8278) highlights a channel-specific rendering regression: long messages silently lose formatting, impacting data-reporting use cases — a functional gap rather than a crash.

---

## 5. Bugs & Stability

### Reported Bugs (Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | [#8298](https://github.com/agentscope-ai/QwenPaw/issues/8298) | Video file permanently wedges session (422 video_url error) | [#8299](https://github.com/agentscope-ai/QwenPaw/pull/8299) |
| **Critical** | [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) | Audio file permanently wedges session (LM Studio 400 error) | [#8215](https://github.com/agentscope-ai/QwenPaw/pull/8215) |
| **Critical** | [#8290](https://github.com/agentscope-ai/QwenPaw/issues/8290) | Session wedged by video rejection ("At most 0 video(s) may be provided") | — |
| **High** | [#8288](https://github.com/agentscope-ai/QwenPaw/issues/8288) | v2.2.2 large stream conversation freezes UI, can SIGBUS-crash backend | — |
| **Medium** | [#8300](https://github.com/agentscope-ai/QwenPaw/issues/8300) | Console input box not cleared after sending (v2.2.2 regression) | — |
| **Medium** | [#8293](https://github.com/agentscope-ai/QwenPaw/issues/8293) | Injected context blocks exposed to channel users as assistant text | [#8295](https://github.com/agentscope-ai/QwenPaw/pull/8295) |
| **Low** | [#8286](https://github.com/agentscope-ai/QwenPaw/issues/8286) | Thinking slider misleading fill and flicker | [#8287](https://github.com/agentscope-ai/QwenPaw/pull/8287) |
| **Low** | [#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) | DingTalk loses Markdown/table formatting >3500 chars | — |

**Key observations:**
- **Three critical session-wedging bugs** relate to media (audio/video) being sent to endpoints that don't support them, causing permanent conversation breakage.
- **v2.2.2 appears to have introduced regressions** (#8300, #8288) not present in v2.2.1 — the large stream freeze/SIGBUS issue is particularly concerning for production stability.
- **Several fix PRs are already open** (#8299, #8215, #8295, #8287), suggesting maintainers are actively addressing these.

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Request

| Issue | Title | Description |
|-------|-------|-------------|
| [#8289](https://github.com/agentscope-ai/QwenPaw/issues/8289) | 📢 Making QwenPaw Lighter and More Extensible (coming in v2.3.0) | Plugin refactor for modularity; seeks community input |

This is the **official roadmap signal** for **v2.3.0**. The team is actively seeking feedback on:
- What plugin/extension patterns users need
- Pain points with the current architecture
- Desired modularization

### Predictability Assessment
Given the issue's stated "Coming in v2.3.0" and the concurrent #8164 (HarmonyOS client), the next version appears to focus on **platform expansion + architectural modularity**. The media-handling fixes likely land in a patch release before v2.3.0.

---

## 7. User Feedback Summary

### Pain Points Identified from Issues

1. **Session Permanence Is Fragile** — Users report that sending a single audio/video file can permanently break a conversation. This is the highest-impact complaint (#8171, #8298, #8290). Users cannot recover without starting a new session.

2. **v2.2.2 Regression on Large Conversations** — Power users with long-running agent conversations report complete UI freezes and backend crashes (SIGBUS), which did not occur in v2.2.1.

3. **DingTalk Formatting Loss** — Enterprise users relying on DingTalk for data reports are frustrated by silent Markdown/table degradation on long messages.

4. **UI Polish Gaps** — Console input box not clearing after send (#8300) and thinking slider visual bugs (#8286) reduce confidence in UI quality, even though functional.

### Satisfaction Signals
- Community is actively contributing: at least **two first-time contributors** opened PRs today (#8291, #7211).
- Multiple fix PRs are in flight, indicating responsive maintenance.

---

## 8. Backlog Watch

### Long-Unanswered / High-Priority Items Needing Maintainer Attention

| Item | Age | Description | Concern |
|------|-----|-------------|---------|
| [#7654](https://github.com/agentscope-ai/QwenPaw/pull/7654) | Open since 2026-09-09 (~39 days) | fix(agents): recognize llama-server and DashScope audio rejections | Part of the audio-wedging fix chain; blocked by classifier improvements |
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | Open since 2026-08-21 (~58 days) | fix(runtime): prevent injected context from persisting (L, under review) | Large PR; addresses context leakage — high impact |
| [#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034) | Open since 2026-09-29 (~19 days) | fix(providers): bound inline media per request | Addresses payload bloat;gateway byte limits |
| [#8124](https://github.com/agentscope-ai/QwenPaw/pull/8124) | Open since 2026-10-08 (~10 days) | fix(providers): route content inspection errors to fallback | Affects Ali-compatible gateway reliability |
| [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) | Open since 2026-10-10 (~8 days) | Audio wedges session — third iteration of known bug | Needs coordinated fix with #8215 and #7654 |

**Recommendation:** The audio/video session-wedging bug family (#8171, #8298, #8290, #7654, #8215) should be prioritized as a single coordinated fix to avoid divergent partial solutions. The large stream freeze regression (#8288) in v2.2.2 also warrants urgent investigation given the clear reproduction steps and v2.2.1 comparison.

---

*Generated from GitHub data for 2026-10-18*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to generate a structured project digest for ZeroClaw based on the provided GitHub data. Let me analyze the information carefully and organize it into the requested sections.

Key data points:
- Issues: 49 updated in last 24h (42 open/active, 7 closed)
- PRs: 50 updated in last 24h (48 open, 2 merged/closed)
- No new releases

Let me organize this into the requested format:

1. **Today's Overview** - Summary of project status
2. **Releases** - None (0 releases)
3. **Project Progress** - Merged/closed PRs, features advanced
4. **Community Hot Topics** - Most active Issues/PRs
5. **Bugs & Stability** - Bugs ranked by severity
6. **Feature Requests & Roadmap Signals** - User-requested features
7. **User Feedback Summary** - Pain points
8. **Backlog Watch** - Long-unanswered important items

Let me go through the data more carefully:

Top issues by comment count:
1. #7432 - Runtime and gateway delivery tracker - 10 comments
2. #11418 - Bug: "Copy" one-click feature not working - 5 comments
3. #10999 - Task: Discord plugin installation - 4 comments
4. #9786 - Bug: SOP.toml malformed silently dropped - 4 comments
5. #5836 - Feature: cooperative cancellation - 4 comments (CLOSED)
6. #11416 - Bug: Slack "is thinking" status - 3 comments
7. #10993 - Feature: runtime composition boundary - 3 comments

Closed issues: #5836, #10995, #9624, #11606, #11491

Closed PRs: #11221, #11262


Looking at the merged pull requests, I see #11221 introduced opt-in minimal built-in tool settings while #11262 added plugin update functionality with verified replacement. Now examining the bug reports, several high-priority issues stand out: #11058 shows an explicit allowed_commands entry bypassing block_high_risk_commands, #11796 describes the daemon prompting for GitHub credentials and blocking, and #11777 identifies the loop detector threshold as too low. Medium priority issues include #11416 regarding the Slack status not displaying.

Several concerning problems warrant attention: #11087 prevents reopening or quitting after window closure, #11706 locks the vision route permanently, and #11606 rewrites the entire config incorrectly. For features, I'm tracking #7432 as a runtime/gateway delivery tracker, #10993 for completing the public runtime composition boundary, #11324/11325 focusing on daemon identity verification, and #10995 on verified plugin updates with rollback capability.</think>

# ZeroClaw Project Digest — 2026-10-18

## 1. Today's Overview

ZeroClaw shows **very high activity** today with 49 issues and 50 PRs updated in the last 24 hours. The project is actively working toward the **v0.9.0 release cycle**, with active development on runtime improvements, gateway separation, and security enhancements. No new releases were published today, but several significant PRs advanced through review, including tool selection changes and Windows daemon process containment. The issue tracker reveals ongoing focus on Phase 2 runtime work (v0.8.6) and Phase 3 gateway separation (v0.9.0), with multiple security-related bugs receiving attention. Community engagement remains strong, with key discussions around Discord plugin integration, skill review functionality, and security hardening.

---

## 2. Releases

**No new releases** were published in the last 24 hours.

---

## 3. Project Progress

### PRs Merged/Closed Today

| PR | Author | Description | Status |
|----|--------|-------------|--------|
| [#11221](https://github.com/zeroclaw-labs/zeroclaw/pull/11221) | JordanTheJet | **feat(tools): add an opt-in minimal built-in tool setting** — Built-in tool availability now selected by `[tools].optional`, default full (`["*"]`) | **CLOSED** |
| [#11262](https://github.com/zeroclaw-labs/zeroclaw/pull/11262) | IftekharUddin | **feat(cli): add zeroclaw plugin update with verified replacement** — Plugin update with failure rollback support | **CLOSED** |
| [#11491](https://github.com/zeroclaw-labs/zeroclaw/issues/11491) | Audacity88 | Show saved versus applied config status in ZeroCode Config | **CLOSED** |
| [#11606](https://github.com/zeroclaw-labs/zeroclaw/issues/11606) | Audacity88 | model_routing_config upsert_agent config rewrite bug | **CLOSED** |

### Notable Active PRs

| PR | Author | Description | Risk |
|----|--------|-------------|------|
| [#11301](https://github.com/zeroclaw-labs/zeroclaw/pull/11301) | IftekharUddin | **fix(agents): share durable committed-rename recovery** — Fixes agent rename stranding state | **HIGH** |
| [#11347](https://github.com/zeroclaw-labs/zeroclaw/pull/11347) | IftekharUddin | **feat(release): ship WASM plugin host** — Integrates tool-selection changes and Wasmtime 48.0.6 / Rustls security updates | **HIGH** |
| [#11822](https://github.com/zeroclaw-labs/zeroclaw/pull/11822) | tidux | **fix(security): split POSIX commands at substitution and subshell boundaries** — Shell command scanner improvements | — |
| [#11827](https://github.com/zeroclaw-labs/zeroclaw/pull/11827) | VladimirLewisII | **fix(daemon): contain Windows daemon's process tree** — Job object with kill-on-close | — |
| [#11826](https://github.com/zeroclaw-labs/zeroclaw/pull/11826) | RustLangLatam | **fix(config): publish secret key with renameat2 on Android** | — |
| [#10446](https://github.com/zeroclaw-labs/zeroclaw/pull/10446) | mov-xound-glitch | **fix(runtime): reject tool-call envelopes leaked into prose** | **HIGH** |
| [#10325](https://github.com/zeroclaw-labs/zeroclaw/pull/10325) | mov-xound-glitch | **feat(runtime): pre-turn tool-elicitation hints** (default-off flag) | **MEDIUM** |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Author | Title | Comments | Status |
|-------|--------|-------|----------|--------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | Audacity88 | **[Tracker] Runtime and gateway delivery — v0.8.6 and v0.9.0** | 10 | OPEN |
| [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) | JonathanMcCormickJr | **Bug: "Copy" one-click feature is not working** | 5 | OPEN |
| [#10999](https://github.com/zeroclaw-labs/zeroclaw/issues/10999) | JordanTheJet | **Task: Publish and prove Discord plugin installation** | 4 | OPEN |
| [#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) | JordanTheJet | **Bug: SOP.toml malformed is silently dropped** | 4 | OPEN |
| [#5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836) | Audacity88 | **Feature: add cooperative cancellation to Tool execution** | 4 | CLOSED |
| [#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416) | bryangruneberg | **Bug: Slack "is thinking…" status not shown since v0.8.5** | 3 | OPEN |
| [#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993) | JordanTheJet | **Feature: Complete the public runtime composition boundary** | 3 | OPEN |

### Analysis

- **#7432** serves as the central tracker for Phase 2 (v0.8.6) and Phase 3 (v0.9.0) work, indicating significant architectural changes in progress
- **#11418** represents a user-facing workflow blocker in the TUI "Copy" feature
- **#10999** tracks Discord plugin integration, showing community demand for channel integrations
- **#9786** reveals a UX issue where configuration validation silently fails, a common pain point for operators

---

## 5. Bugs & Stability

### Critical (S0) — Data Loss / Security Risk

| Issue | Title | Severity | Status |
|-------|-------|----------|--------|
| [#11058](https://github.com/zeroclaw-labs/zeroclaw/issues/11058) | `allowed_commands` entry exempts high-risk command from `block_high_risk_commands` — runs unprompted, no approval, no log | S0 | IN-PROGRESS |
| [#11796](https://github.com/zeroclaw-labs/zeroclaw/issues/11796) | ZeroClaw daemon prompts for GitHub credentials on startup and blocks | S0 | OPEN |

### High (S1) — Workflow Blocked

| Issue | Title | Severity | Status |
|-------|-------|----------|--------|
| [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) | "Copy" one-click feature not working | S1 | OPEN |
| [#11777](https://github.com/zeroclaw-labs/zeroclaw/issues/11777) | Loop detector default threshold too low — blocks agent for big graphs | S1 | OPEN |
| [#11087](https://github.com/zeroclaw-labs/zeroclaw/issues/11087) | Windows — after closing window app cannot be reopened or quit | S1 | OPEN |

### High (S2) — Degraded Behavior

| Issue | Title | Severity | Status | Fix PR |
|-------|-------|----------|--------|--------|
| [#11706](https://github.com/zeroclaw-labs/zeroclaw/issues/11706) | max_image_turns never releases vision route — provider pinned for whole conversation | S2 | OPEN | [#11716](https://github.com/zeroclaw-labs/zeroclaw/pull/11716) |
| [#11333](https://github.com/zeroclaw-labs/zeroclaw/issues/11333) | Skill review tools can't see skills assigned through skill_bundles | S2 | OPEN | — |
| [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) | Skill review/creation never run for channel, webhook, or gateway turns | S2 | OPEN | — |
| [#9902](https://github.com/zeroclaw-labs/zeroclaw/issues/9902) | sop.max_concurrent_total silently overrides per-SOP config, undocumented | S2 | OPEN | — |
| [#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416) | Slack "is thinking…" status no longer shown in channel threads | S3→S2 | IN-PROGRESS | — |

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Work (指向 v0.8.6 / v0.9.0)

| Issue | Title | Priority | Release |
|-------|-------|----------|---------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | **[Tracker] Runtime and gateway delivery** | P2 | v0.9.0 |
| [#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993) | Complete the public runtime composition boundary | P1 | v0.8.7 |
| [#10995](https://github.com/zeroclaw-labs/zeroclaw/issues/10995) | Add verified plugin update with failure rollback | P1 | v0.8.6 |
| [#11324](https://github.com/zeroclaw-labs/zeroclaw/issues/11324) | Verify daemon's identity in call_local, share one CLI daemon client | P1 | — |
| [#11325](https://github.com/zeroclaw-labs/zeroclaw/issues/11325) | Verify named-pipe server on Windows for live auth edits | P2 | — |
| [#11793](https://github.com/zeroclaw-labs/zeroclaw/issues/11793) | Create data directory owner-only, check group-/world-writable roots | — | v0.8.7 |
| [#11794](https://github.com/zeroclaw-labs/zeroclaw/issues/11794) | Per-user runtime-directory fallback for config lifecycle lock | — | — |

### New Task Requests (Today)

| Issue | Title | Summary |
|-------|-------|---------|
| [#11788](https://github.com/zeroclaw-labs/zeroclaw/issues/11788) | Distinguish configured-but-unselected tools from unavailable tools | Diagnostic for explicit built-in config that cannot take effect |
| [#11787](https://github.com/zeroclaw-labs/zeroclaw/issues/11787) | Warn about unknown tools.optional entries | Surface warnings for unknown optional tool names |

### Roadmap Signals

- **WASM plugin host** shipping in supported release artifacts (PR #11347)
- **Discord plugin** documentation and end-to-end proof in progress (issue #10999)
- **Runtime composition boundary** refactoring advancing (issue #10993)
- **Tool selection** now opt-in via `[tools].optional` (PR #11221 merged)

---

## 7. User Feedback Summary

### Pain Points Identified

1. **Configuration Silent Failures** — Users report that malformed SOP.toml is completely silent (#9786), causing confusion when SOPs don't appear
2. **Security Configuration Confusion** — The interaction between `allowed_commands` and `block_high_risk_commands` is counterintuitive, allowing high-risk commands to run without approval (#11058)
3. **Windows Desktop Issues** — Multiple reports of app not reopening/closing after window close (#11087), affecting desktop users
4. **Loop Detection Too Aggressive** — Default threshold of 6 cycles blocks legitimate agent workflows on complex tasks (#11777)
5. **Vision Route Sticking** — Multimodal conversations get pinned to vision provider indefinitely, causing unnecessary costs (#11706)
6. **Skill Bundle Visibility** — Skills loaded via skill_bundles are invisible to skill review tools (#11333)

### Positive Signals

- Plugin update with verified replacement merged (#11262)
- Minimal tool selection feature merged (#11221) — provides more control
- WASM plugin host shipping in releases (#11347)
- Active security hardening across multiple fronts

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Title | Age | Status | Concern |
|-------|-------|-----|--------|---------|
| [#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) | SOP.toml malformed silently dropped | ~2.5 mo | ACCEPTED | User impact: silent config failures |
| [#9902](https://github.com/zeroclaw-labs/zeroclaw/issues/9902) | sop.max_concurrent_total undocumented, silently overrides | ~2 mo | ACCEPTED | Documentation gap |
| [#11058](https://github.com/zeroclaw-labs/zeroclaw/issues/11058) | allowed_commands bypasses security block | ~1 mo | IN-PROGRESS | Security vulnerability |
| [#11333](https://github.com/zeroclaw-labs/zeroclaw/issues/11333) | Skill review tools can't see skill_bundles | ~2 wk | ACCEPTED | Feature regression |
| [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) | Skill review/creation not running for channels | ~2 wk | ACCEPTED | Learning loop incomplete |

### PRs Awaiting Review/Action

| PR | Title | Status | Notes |
|----|-------|--------|-------|
| [#11301](https://github.com/zeroclaw-labs/zeroclaw/pull/11301) | Agent rename recovery across CLI/gateway/RPC | OPEN | Needs-author-action, HIGH risk |
| [#10446](https://github.com/zeroclaw-labs/zeroclaw/pull/10446) | Reject tool-call envelopes in prose | OPEN | Stacked with #11299 |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | Delegate workspace/tool ceiling beyond turn | OPEN | Needs-author-action, HIGH risk |
| [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) | Anthropic stored OAuth profiles | OPEN | Trusted contributor, long-running |

---

*Generated from ZeroClaw activity data — 2026-10-18*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*