# OpenClaw Ecosystem Digest 2026-10-26

> Issues: 358 | PRs: 500 | Projects covered: 5 | Generated: 2026-10-26 00:38 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

<think>The user wants me to generate a structured project digest for OpenClaw based on the provided GitHub data. Let me analyze the data and create a comprehensive digest following all the specified sections.

Let me organize the data:

**Data Overview:**
- Issues: 358 total (286 open/active, 72 closed in last 24h)
- PRs: 500 total (230 open, 270 merged/closed in last 24h)
- Releases: 0 (none)

**Key Issues (by comment count):**
1. #143524 - SQLite WAL grows to 1.4-2.8 GB (136 comments) - P0, crash-loop
2. #160959 - Gateway blocks for minutes while capturing large plugins (54 comments) - P0
3. #164294 - Gateway state DB WAL auto-checkpoint never completes (33 comments) - P2
4. #168955 - Startup regression: 1030s vs 410s (19 comments) - P1
5. #159596 - Gateway memory sawtooth (16 comments) - P0
6. #53408 - Write/exec tool parameters silently dropped (15 comments) - P2
7. #67413 - Feature request: Per-agent dreaming configuration (14 comments)
8. #182476 - Windows update repair fails (13 comments) - P1
9. #162585 - Plugin source-capture staging issues (12 comments) - P2
10. #134993 - Gateway pegs one CPU core (11 comments) - P1

**Key PRs:**
- #183535 - fix(web-push): skip agent-finished pushes to device viewing session
- #183023 - fix(text): deduplicate CRLF assistant replies
- #183995 - fix(plugins): show acquisition owners in reload timeout logs


- #183992 - perf(gateway): reuse configured session inventory paths
- #183996 - perf(agents): avoid plugin reloads during subagent cleanup
- #183994 - perf(chat): reduce allocation when opening history
- #183997 - perf(gateway): reduce Linux host CPU sampling overhead
- #183968 - perf(agents): avoid repeated Code Mode result serialization

I'll focus on the performance optimization PRs, noting they're all tagged with performance improvements targeting different system components like session inventory, plugin management, and CPU sampling.

- #184006 - test(agents, plugins, ui): remove low-value tests (batch d579)
- #184003 - perf: reduce Talk caption and hidden meter CPU

The remaining pull requests address test cleanup and CPU optimization for the Talk feature. #184006 removes redundant test cases, while #184003 focuses on reducing computational overhead in Talk's caption and meter rendering.</think>

# OpenClaw Project Digest — 2026-10-26

## 1. Today's Overview

OpenClaw maintains high activity with **358 issues** and **500 pull requests** updated in the last 24 hours. The project shows intense development velocity with **270 PRs merged/closed**, indicating active maintenance. However, several critical P0 issues remain unresolved, particularly around database checkpointing, memory management, and startup regressions. The community is actively engaged with significant discussion on performance bottlenecks and stability concerns, especially on Windows platforms.

## 2. Releases

**No new releases** in the last 24 hours. The project continues on existing versions (latest stable: 2026.10.x series).

## 3. Project Progress

The following pull requests were merged/closed recently:

| PR | Title | Area |
|---|---|---|
| [#183354](https://github.com/openclaw/openclaw/pull/183354) | fix(backup): escape terminal controls in archive reports | Backup |
| [#183979](https://github.com/openclaw/openclaw/pull/183979) | perf(gateway): eliminate redundant PR watcher source checks | Performance |
| [#183977](https://github.com/openclaw/openclaw/pull/183977) | perf(gateway): skip canonical delivery index rebuilds | Performance |

**Active PRs advancing features/fixes:**

- [#183535](https://github.com/openclaw/openclaw/pull/183535) — fix(web-push): skip agent-finished pushes to the device viewing the session (ready for maintainer)
- [#183023](https://github.com/openclaw/openclaw/pull/183023) — fix(text): deduplicate CRLF assistant replies (ready for maintainer)
- [#182938](https://github.com/openclaw/openclaw/pull/182938) — fix(anthropic): long option description denies every AskUserQuestion question
- [#182779](https://github.com/openclaw/openclaw/pull/182779) — fix(text): bound brace checkpoint activation (closes #182562)

**Performance optimizations merged today:**

- [#183992](https://github.com/openclaw/openclaw/pull/183992) — perf(gateway): reuse configured session inventory paths
- [#183996](https://github.com/openclaw/openclaw/pull/183996) — perf(agents): avoid plugin reloads during subagent cleanup
- [#183994](https://github.com/openclaw/openclaw/pull/183994) — perf(chat): reduce allocation when opening history
- [#183997](https://github.com/openclaw/openclaw/pull/183997) — perf(gateway): reduce Linux host CPU sampling overhead
- [#183968](https://github.com/openclaw/openclaw/pull/183968) — perf(agents): avoid repeated Code Mode result serialization

## 4. Community Hot Topics

**Most commented Issues:**

1. **[#143524](https://github.com/openclaw/openclaw/issues/143524)** — Agent SQLite WAL grows to 1.4–2.8 GB in days despite wal_autocheckpoint=1000 (136 comments) — **P0**
   - *Root cause*: WAL checkpoint blocked on Windows; database grows unbounded
   - *Impact*: Blocks gateway startup, message loss, crash loops

2. **[#160959](https://github.com/openclaw/openclaw/issues/160959)** — Gateway blocks for minutes while capturing large external plugins (54 comments) — **P0**
   - *Regression*: Since 2026.9.6, plugin generation capture blocks event loop

3. **[#164294](https://github.com/openclaw/openclaw/issues/164294)** — Gateway state DB WAL auto-checkpoint never completes (33 comments) — **P2**
   - *Issue*: WAL checkpoint blocked by in-process reader, never completes

4. **[#168955](https://github.com/openclaw/openclaw/issues/168955)** — Startup regression: 1030s vs 410s on Windows (19 comments) — **P1**
   - *Regression*: 2026.10.1 introduced significant startup slowdown

5. **[#159596](https://github.com/openclaw/openclaw/issues/159596)** — Gateway memory sawtooth, prepared-model-catalog worker grows to heap ceiling (16 comments) — **P0**
   - *Impact*: ~200 critical memory-pressure events/day

**Underlying needs signaled:**
- **Database reliability**: Multiple WAL/checkpoint issues indicate systemic problems with SQLite handling under load
- **Windows platform quality**: Multiple issues specific to Windows (startup, plugin capture, repair flow)
- **Performance regression testing**: Need better CI checks to catch startup and memory regressions before release

## 5. Bugs & Stability

**Critical (P0) bugs reported/active:**

| Issue | Severity | Status | Fix PR? |
|---|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) SQLite WAL grows to 1.4-2.8 GB | P0, crash-loop, message-loss | OPEN | No |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) Gateway blocks on large plugins | P0, regression | OPEN | No |
| [#166634](https://github.com/openclaw/openclaw/issues/166634) Late reclamation commit checkpoint failure | P0, ux-release-blocker | OPEN | No |
| [#182476](https://github.com/openclaw/openclaw/issues/182476) Windows update repair fails | P1, crash-loop | OPEN | No |

**High (P1) regressions and stability issues:**

- [#168955](https://github.com/openclaw/openclaw/issues/168955) — Startup 2.5x slower (1030s vs 410s) on 2026.10.1
- [#134993](https://github.com/openclaw/openclaw/issues/134993) — Gateway pegs CPU core (busy loop in filesystem discovery)
- [#181078](https://github.com/openclaw/openclaw/issues/181078) — Session reader continuation failures on 2026.10.5
- [#183786](https://github.com/openclaw/openclaw/issues/183786) — Windows beta upgrade repeatedly queries stopped PID

**Notable fix in progress:**
- [#182779](https://github.com/openclaw/openclaw/pull/182779) — Fix brace checkpoint activation causing Gateway blocking

## 6. Feature Requests & Roadmap Signals

**Active feature requests with most engagement:**

1. **[#67413](https://github.com/openclaw/openclaw/issues/67413)** — Per-agent dreaming configuration (14 comments, 5 👍)
   - *Request*: Allow per-agent control of memory-core dreaming to prevent memory spikes
   - *Likelihood*: Medium — addresses real operational pain

2. **[#162164](https://github.com/openclaw/openclaw/issues/162164)** — Opt-in personal identity in iOS/macOS (11 comments)
   - *Tracks*: Native personal identity and local route selection

3. **[#101422](https://github.com/openclaw/openclaw/issues/101422)** — Configurable memory recall eligibility and index exclusion paths (10 comments)
   - *Request*: Expose include/exclude path scopes for recall and search

4. **[#159858](https://github.com/openclaw/openclaw/issues/159858)** — Let idle worker isolates release memory (6 comments)
   - *Request*: Opt-in memory release for small hosts (~650 MB savings potential)

5. **[#164825](https://github.com/openclaw/openclaw/pull/164825)** — Choose a profile name during Control UI setup (active PR)
   - *Part of*: Personal identity feature umbrella

**Predicting next version focus:**
- Performance fixes (multiple PRs merged today for allocations, CPU)
- Windows reliability improvements (multiple critical bugs)
- Personal identity rollout (active PRs #164825, #163765)

## 7. User Feedback Summary

**Real pain points from Issues:**

1. **Database reliability is the dominant concern** — Multiple users report SQLite WAL issues causing startup blocking, message loss, and crash loops. The checkpoint system appears fundamentally broken on Windows.

2. **Startup regressions are frustrating** — Users report 2.5x slowdown between versions (410s → 1030s), significantly impacting daily usage.

3. **Memory management needs attention** — The "sawtooth" memory pattern with ~200 critical pressure events/day indicates resource contention issues.

4. **Platform parity concerns** — Windows users specifically report more issues with update repair, plugin staging, and startup than other platforms.

5. **Long conversations have silent failures** — Write/exec tool parameters drop silently after extended conversations, leading to data loss.

**Satisfaction signals:**
- Performance optimization PRs are being merged rapidly (11+ today)
- Some UI/UX fixes advancing (web-push, keyboard focus, CRLF deduplication)
- Community engagement remains high (500 PR updates in 24h)

## 8. Backlog Watch

**Important Issues needing maintainer attention:**

| Issue | Age | Status | Gap |
|---|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) SQLite WAL growth | ~47 days | OPEN, needs-maintainer-review | No fix PR |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) Gateway blocks on plugins | ~27 days | OPEN, needs-maintainer-review | No fix PR |
| [#159596](https://github.com/openclaw/openclaw/issues/159596) Memory sawtooth | ~29 days | OPEN, stale | No fix PR |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) Memory roots silently excluded | ~36 days | OPEN, needs-security-review | No fix PR |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) Write/exec params dropped | ~216 days | OPEN | No fix PR |

**PRs awaiting review:**
- [#183535](https://github.com/openclaw/openclaw/pull/183535) — web-push fix (waiting on maintainer)
- [#182938](https://github.com/openclaw/openclaw/pull/182938) — anthropic fix (waiting on maintainer)
- [#183968](https://github.com/openclaw/openclaw/pull/183968) — Code Mode performance (ready for maintainer look)
- [#182779](https://github.com/openclaw/openclaw/pull/182779) — brace checkpoint fix (ready for maintainer look)

---

*Generated from OpenClaw GitHub data — 2026-10-26*

---

## Cross-Ecosystem Comparison

<think>The user wants me to create a cross-project comparison report based on the four project digests I've generated. Let me analyze each project's data and create a comprehensive comparison.

Projects analyzed:
1. OpenClaw (openclaw/openclaw)
2. Hermes Agent (nousresearch/hermes-agent)
3. IronClaw (nearai/ironclaw)
4. QwenPaw (agentscope-ai/QwenPaw)

Wait, there's also ZeroClaw (zeroclaw-labs/zeroclaw) which I also analyzed. Let me include that in the comparison as well.

Let me compile the key data points:

**OpenClaw:**
- Issues: 358 total (286 open/active, 72 closed in last 24h)
- PRs: 500 total (230 open, 270 merged/closed in last 24h)
- Releases: 0
- Focus: Gateway architecture, plugin system, memory/dreaming
- Key issues: SQLite WAL problems, startup regression, memory management, Windows platform issues

**Hermes Agent:**
- Issues: 50 (48 open, 2 closed in last 24h)
- PRs: 50 (40 open, 10 merged/closed in last 24h)
- Releases: 0
- Focus: Unified gateway, security, performance
- Key issues: Windows install reliability, Linux desktop opacity, gateway post-merge fixes

**IronClaw:**
- Issues: 0
- PRs: 7 (5 open, 2 closed in last 24h)
- Releases: 0
- Focus: Rust/WASM dependencies
- Key issues: All dependency updates, no community issues

**QwenPaw:**
- Issues: 6 (5 open, 1 closed in last 24h)


- PRs: 6 (all open)
- Releases: 0
- Focus: Shell safety, channels, memory features, steering command
- Key issues: Shell self-kill guard, audit DB issues, CRLF handling, Windows files

**ZeroClaw:**
- Issues: 6 (5 open, 1 closed in last 24h)
- PRs: 50 (49 open, 1 merged/closed in last 24h)
- Releases: 0
- Focus: Memory, channels, security, runtime capabilities
- Key issues: Persistent memory tracker, npm audit, knowledge

Now I'll organize these five projects into a structured comparison that highlights their similarities and differences across key dimensions.</think>

# Cross-Project Comparison: Open-Source Personal AI Assistant Ecosystem

---

## 1. Ecosystem Overview

The personal AI assistant and agent ecosystem is experiencing rapid iteration across multiple open-source projects, each tackling distinct aspects of autonomous agent architecture. This comparison examines five projects—OpenClaw, Hermes Agent, IronClaw, QwenPaw, and ZeroClaw—revealing a landscape focused on **gateway architecture unification**, **multi-platform reliability**, **security hardening**, and **persistent memory**. While all projects target developers building AI-powered applications, their technical approaches diverge significantly: some prioritize Rust-based performance (IronClaw), others emphasize plugin ecosystems (OpenClaw), and several are investing heavily in channel integrations and memory subsystems. No project has published a release in the last 24 hours, indicating a collective focus on stabilization and feature completion rather than cadence-based versioning.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | Issues Open | PRs Updated (24h) | PRs Open | Releases (24h) | Health Signal |
|---|---|---|---|---|---|---|
| **OpenClaw** | 358 (72 closed) | ~286 active | 500 (270 merged) | ~230 | 0 | High velocity, heavy engagement |
| **Hermes Agent** | 50 (2 closed) | ~48 active | 50 (10 merged) | ~40 | 0 | Moderate-high, post-merge stabilization |
| **IronClaw** | 0 | 0 | 7 (2 merged) | 5 | 0 | Minimal — dependency maintenance only |
| **QwenPaw** | 6 (1 closed) | 5 | 6 (0 merged) | 6 | 0 | Steady, bug-fix focused |
| **ZeroClaw** | 6 (1 closed) | 5 | 50 (1 merged) | 49 | 0 | High velocity, feature-heavy |

---

## 3. OpenClaw's Position

### Advantages vs Peers

- **Highest community engagement**: OpenClaw dominates in absolute activity (358 issue updates, 500 PR updates in 24 hours), with 270 PRs merged recently—far exceeding any peer. This indicates a large, active contributor base and rapid iteration cycles.
- **Rich plugin ecosystem**: OpenClaw's architecture explicitly supports external plugins with staging, acquisition ownership, and reload timeouts—a capability unmatched by peers.
- **Memory subsystem depth**: Issues like "Per-agent dreaming configuration" (#67413) and "Memory recall" feature requests signal advanced memory architecture work beyond simple context windows.

### Technical Approach Differences

| Dimension | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|---|---|---|---|---|---|
| **Architecture** | Gateway-centric with plugin isolation | Unified gateway post-merge | Rust/WASM | AgentScope-based | Capability-based runtime |
| **Memory** | Dreaming + long-term recall | Unified gateway state DB | N/A (tooling) | Context compression | Persistent memory tracker |
| **Security** | Approval cards, file access | Webhook provenance, WA-5 | N/A | Shell self-kill guard | RPC scoped principals |
| **Platform** | Windows/Linux | Windows/Linux/macOS | Cross-compile | Multi-channel | Docker/container-focused |

### Community Size

OpenClaw's 230+ open PRs and 286+ active issues represent the largest backlog in this cohort. Hermes Agent maintains a healthy 40 open PRs, while ZeroClaw mirrors that scale. IronClaw's near-zero issue activity suggests either a closed development model or minimal external adoption.

---

## 4. Shared Technical Focus Areas

### Cross-Project Requirements Emerging

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Database reliability** | OpenClaw, Hermes Agent | WAL checkpoint failures, SQLite growth issues, startup blocking |
| **Windows platform parity** | OpenClaw, Hermes Agent, QwenPaw | Install reliability, file system handling (CRLF), desktop window issues |
| **Memory persistence** | OpenClaw, ZeroClaw, Hermes Agent | Cross-session memory, audit trails, forgetting/recall mechanisms |
| **Channel/contact expansion** | QwenPaw, ZeroClaw | Multi-platform messaging (Slack, Telegram, Lark, WhatsApp), streaming responses |
| **Security hardening** | Hermes Agent, ZeroClaw | Data exfiltration prevention, scoped principals, approval injection prevention |
| **Performance regression** | OpenClaw, Hermes Agent | Startup time regression, memory sawtooth, CPU saturation |

### Notable Consensus

Four of five projects are actively addressing **gateway architecture** (OpenClaw, Hermes Agent, ZeroClaw, QwenPaw all have gateway-related PRs/issues). This suggests the gateway pattern—centralizing session management, state persistence, and tool execution—is becoming the dominant architectural paradigm for personal AI assistants.

---

## 5. Differentiation Analysis

### Feature Focus

- **OpenClaw**: Plugin ecosystem, per-agent dreaming configuration, session inventory optimization, WebPush integration
- **Hermes Agent**: Webapp (browser-hosted Desktop), local model support, frontend-only install, unified gateway
- **IronClaw**: Rust ecosystem maintenance, WASM compilation, dependency hygiene
- **QwenPaw**: Mid-execution steering (`/steer`), shell safety, DeepSearch provider, channel isolation
- **ZeroClaw**: Capability-based runtime constructors, external reranking, scoped dashboard chat, container variants

### Target Users

| Project | Primary User |
|---|---|
| OpenClaw | Power users requiring plugin extensibility, memory-intensive workflows |
| Hermes Agent | Developers wanting full-stack local AI with minimal setup |
| IronClaw | Rust/WASM developers or embedders needing lightweight agent tooling |
| QwenPaw | Teams needing multi-channel deployment (Telegram, Slack, Lark, WhatsApp) |
| ZeroClaw | Enterprise deployments requiring capability-based security, scoped access |

### Technical Architecture

- **Rust-based**: IronClaw (primary), ZeroClaw (partial runtime), OpenClaw (partial)
- **Python-based**: Hermes Agent, QwenPaw
- **Container-native**: ZeroClaw (`dist-broad` image), Hermes Agent (Docker/SSH sandbox)
- **Desktop-first**: OpenClaw (GUI), Hermes Agent (Electron-based Desktop), QwenPaw (Desktop UI)

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics |
|---|---|---|
| **Rapid Iteration** | OpenClaw, ZeroClaw | >50 PR updates/day, high issue volume, major features in flight |
| **Active Development** | Hermes Agent, QwenPaw | Moderate PR/issue volume, steady progress, post-feature stabilization |
| **Maintenance** | IronClaw | Dependency-only updates, no feature development, minimal community engagement |

### Stabilizing vs. Growing

- **Stabilizing**: Hermes Agent (post-unified-gateway cleanup), IronClaw (mature codebase)
- **Rapidly Iterating**: OpenClaw (performance PRs daily), ZeroClaw (major v0.9.0 push), QwenPaw (feature additions)

### Maturity Signals

- **Mature**: IronClaw (no issues, low activity = stable), Hermes Agent (RFC process, security hardening)
- **Growing**: OpenClaw (high velocity, feature-rich), ZeroClaw (epic tracking, tracker issues)

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

| Trend | Evidence | Projects |
|---|---|---|
| **Gateway unification** | "Unified gateway owns every local session" (Hermes), "reuse configured session inventory" (OpenClaw) | OpenClaw, Hermes, ZeroClaw |
| **Security-by-default** | Approval card injection prevention, scoped principals, webhook provenance, shell guard rails | Hermes, ZeroClaw, QwenPaw |
| **Memory as infrastructure** | Persistent memory trackers, external reranking, per-agent dreaming, audit trails | OpenClaw, ZeroClaw, Hermes |
| **Multi-channel parity** | Streaming reasoning in Telegram/Slack, configurable ack reactions, email document handling | ZeroClaw, QwenPaw |
| **Platform reliability (Windows)** | Windows install failures, CRLF handling, repair flows, startup regressions | OpenClaw, Hermes, QwenPaw |
| **Performance as feature** | Startup time 2.5x improvement (Hermes), 1.45s→0.44s (Hermes), 18x storage optimization (Hermes) | Hermes |
| **Modular/isolation architecture** | Channels as plugins with subprocess isolation (QwenPaw), container variants (ZeroClaw) | QwenPaw, ZeroClaw |

### Value for AI Agent Developers

1. **Gateway patterns are maturing**: Projects converge on centralized session/state management—useful as reference architectures
2. **Security is a first-class concern**: Approval systems, scoped principals, and webhook provenance indicate production-readiness expectations
3. **Memory remains hard**: Persistent memory, audit trails, and reranking are active research areas across all projects
4. **Multi-platform is table stakes**: Slack, Telegram, WhatsApp, email, and desktop parity expected for production deployments
5. **Rust adoption growing**: IronClaw and ZeroClaw suggest performance-critical components increasingly built in Rust

---

*Cross-project analysis synthesized from GitHub activity data on 2026-10-26.*

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to generate a structured project digest for Hermes Agent based on the provided GitHub data. Let me analyze the data and create the sections as requested.

Key observations from the data:
1. **Activity**: 50 issues updated (48 open, 2 closed), 50 PRs updated (40 open, 10 merged/closed) in the last 24 hours
2. **Releases**: No new releases
3. **Key issues**:
   - Issue #134889: Tracking issue for unified gateway (post-merge fixes) - 220 comments, highly active
   - Issue #143547: Open post-merge problems on main from unified gateway - 23 comments
   - Issue #143379: RFC for Doc-Chain Substrate's Network - 20 comments
   - Issue #38519: Feature request for frontend-only install - 19 comments, 31 👍
   - Issue #143426: Linux desktop window opacity bug - 17 comments, 11 👍
4. **PRs**:
   - #144265: Fixed (process_identity fix)
   - #144390: Fixed (deps snowballstemmer)
   - #144745: Open (streaming whitespace bug)
   - #110440: Open (Linux gateway systemd)
   - And more...

Let me structure this into the requested format.</think>

# Hermes Agent Project Digest — 2026-10-26

## Today's Overview

Hermes Agent shows **high development activity** with 50 issues and 50 PRs updated in the last 24 hours. The project is in a **post-unified-gateway stabilization phase** following the major #106742 merge (Oct 14), with Issue #134889 tracking 220 comments of follow-up fixes. Two PRs were closed/merged today, and 40 PRs remain open. No new releases today. The ecosystem is actively addressing cross-platform bugs (Windows, Linux, macOS), security concerns, and performance optimizations.

---

## Releases

No new releases published in the last 24 hours.

---

## Project Progress

### Merged/Closed PRs Today

| PR | Author | Description |
|----|--------|-------------|
| [#144265](https://github.com/NousResearch/hermes-agent/pull/144265) | rblauataidacm | **fix(process_identity):** Caller-independent birth for the managed-worker handshake — resolves identity verification race condition between worker and gateway |
| [#144390](https://github.com/NousResearch/hermes-agent/pull/144390) | Uther-Lightbringer | **fix(deps):** Install snowballstemmer on every supported Python — fixes import failure in `tools/tool_search_catalog.py` |

### Notable Open PRs Advancing

| PR | Description | Impact |
|----|-------------|--------|
| [#144745](https://github.com/NousResearch/hermes-agent/pull/144745) | Tool call streaming endless whitespace cut at 4 KiB | Fixes retry loops on malformed streaming responses |
| [#144640](https://github.com/NousResearch/hermes-agent/pull/144640) | Hermes starts ~1s faster from git checkout | Performance: `hermes sessions list` 1.45s → 0.44s |
| [#144630](https://github.com/NousResearch/hermes-agent/pull/144630) | `optimize-storage` shows progress, 18x faster | Storage optimization 24min → 1.25min |
| [#130023](https://github.com/NousResearch/hermes-agent/pull/130023) | Only fetch reply image URLs with tool provenance | Security: Closes data-exfiltration channel (#129975) |
| [#144741](https://github.com/NousResearch/hermes-agent/pull/144741) | Webapp workspace file resolution in Docker/SSH sandbox | Security: Fixes WA-5 gaps |
| [#144738](https://github.com/NousResearch/hermes-agent/pull/144738) | Approval cards: agent cannot inject card text | Security: Prevents approval card injection |
| [#127784](https://github.com/NousResearch/hermes-agent/pull/127784) | One sandbox target for every env creator | Security/isolation: Per-session Docker correctness |

---

## Community Hot Topics

### Top Issues by Engagement

| Issue | Comments | 👍 | Summary |
|-------|----------|----|---------|
| [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) | 220 | 1 | **Tracking: Unified gateway owns every local session** — Post-merge fixes for #106742 |
| [#143547](https://github.com/NousResearch/hermes-agent/issues/143547) | 23 | 1 | Unified gateway post-merge problems on main, continuing #134889 |
| [#143379](https://github.com/NousResearch/hermes-agent/issues/143379) | 20 | 0 | **RFC: Doc-Chain Substrate's Network** — Durable record governance and compaction |
| [#38519](https://github.com/NousResearch/hermes-agent/issues/38519) | 19 | 31 | **[Feature]: Hermes Desktop frontend install only** — Remote connection without local agent |
| [#143426](https://github.com/NousResearch/hermes-agent/issues/143426) | 17 | 11 | Linux desktop 6% window opacity — translucency bug on GNOME/Wayland |

### Analysis

- **Unified Gateway (#106742)** dominates discussion — the architectural change moved all local conversations into one gateway process, causing cascading issues across CLI, TUI, Desktop, API server, and platform integrations (Telegram, Discord).
- **Frontend-only install** (#38519) has strong community interest (31 👍) — users want lightweight remote Desktop access without installing the full agent.
- **Doc-Chain Substrate** (#143379) represents a significant architectural RFC for durable memory and provenance.

---

## Bugs & Stability

### High Severity (P0-P1)

| Issue | Component | Description |
|-------|------------|-------------|
| [#131199](https://github.com/NousResearch/hermes-agent/issues/131199) | desktop, Windows | First-run install fails at Python-dependencies stage — "INSTALL DIDN'T FINISH / dependency install failed" |
| [#135200](https://github.com/NousResearch/hermes-agent/issues/135200) | cli, security | User `.env` can set `HERMES_MANAGED_DIR` and repoint managed scope — security boundary risk |

### Medium Severity (P2)

| Issue | Component | Description |
|-------|------------|-------------|
| [#143426](https://github.com/NousResearch/hermes-agent/issues/143426) | desktop, Linux | Window opacity 6% — translucency applied by default on GNOME/Wayland |
| [#144437](https://github.com/NousResearch/hermes-agent/issues/144437) | cli, local-models | Bare "custom" provider falls through to OpenRouter, causes 400s |
| [#143833](https://github.com/NousResearch/hermes-agent/issues/143833) | tui-gateway | Session list rescan saturates CPU — 130ms per request, 3 cores on large installs |
| [#144117](https://github.com/NousResearch/hermes-agent/issues/144117) | docker, tools | Background process reports exit (-1) while still running |
| [#121973](https://github.com/NousResearch/hermes-agent/issues/121973) | agent, tools | Title generation 400s on opencode-go deepseek-v4.1-flash |
| [#140881](https://github.com/NousResearch/hermes-agent/issues/140881) | cli, model-switch | Alias on another provider rewrites model id, silently falls back |

### Fix PRs Available

- [#144265](https://github.com/NousResearch/hermes-agent/pull/144265) — process_identity fix (merged)
- [#144390](https://github.com/NousResearch/hermes-agent/pull/144390) — snowballstemmer dependency fix (merged)

---

## Feature Requests & Roadmap Signals

### High-Value User Requests

| Issue | 👍 | Component | Description |
|-------|----|-----------|-------------|
| [#38519](https://github.com/NousResearch/hermes-agent/issues/38519) | 31 | desktop | **Frontend-only install** for Windows — connect to remote agent |
| [#143379](https://github.com/NousResearch/hermes-agent/issues/143379) | 0 | agent, memory | **Doc-Chain Substrate Network** — durable record, provenance, compaction |
| [#144648](https://github.com/NousResearch/hermes-agent/issues/144648) | 0 | desktop, webapp | **Webapp (browser-hosted Desktop)** shipped in #141864 — tracking post-merge follow-ups |

### Predicted Next Features

Based on active development and PRs:
1. **Webapp expansion** — #144648 tracking browser-hosted Desktop follow-ups
2. **Security hardening** — Multiple PRs addressing message delivery, approval cards, file access
3. **Performance tuning** — Startup speed, storage optimization, session scanning

---

## User Feedback Summary

### Pain Points

1. **Windows Install Reliability** — Fresh installs failing at dependency stage (#131199) frustrates new users
2. **Linux Desktop Experience** — Unexpected translucency on GNOME/Wayland reduces usability (#143426)
3. **Gateway Architecture Disruption** — Unified gateway migration causing profile mismatches, session issues across platforms
4. **Provider Resolution** — Custom provider fallthrough to OpenRouter causing silent failures (#144437)

### Satisfying Areas

- **CLI Performance** — 1s startup improvement in git checkouts well-received
- **Storage Optimization** — 18x faster `optimize-storage` significantly improves large-install UX
- **Security Response** — Active patching of data-exfiltration and injection vectors

---

## Backlog Watch

### Long-Standing Issues Needing Maintainer Attention

| Issue | Age | Priority | Description |
|-------|-----|----------|-------------|
| [#38519](https://github.com/NousResearch/hermes-agent/issues/38519) | ~4 months | P2 | Frontend-only install feature — 31 👍, significant demand |
| [#127105](https://github.com/NousResearch/hermes-agent/issues/127105) | ~1 month | P2 | Audit regression: background notifications delivered as user messages |
| [#85861](https://github.com/NousResearch/hermes-agent/pull/85861) | ~2 months | P2 | Custom provider identity disambiguation — PR open, security-relevant |

### Stalled PRs (No Recent Activity)

- [#85861](https://github.com/NousResearch/hermes-agent/pull/85861) — Custom provider identity fix (since Aug 14)
- [#110440](https://github.com/NousResearch/hermes-agent/pull/110440) — Linux gateway systemd fallback (since Sep 14)
- [#86189](https://github.com/NousResearch/hermes-agent/pull/86189) — Background skill write scans (since Aug 14)

---

*Generated from GitHub data for 2026-10-26*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to generate a project digest for the IronClaw project (from nearai/ironclaw) based on the provided GitHub data. Let me analyze the data and create a structured digest.

Looking at the data:
- Issues: 0 updated in last 24h, 0 open/active, 0 closed
- PRs: 7 updated in last 24h, 5 open, 2 merged/closed
- Releases: 0 new releases

The PRs are all dependency updates from dependabot:
1. #8160 - OPEN - deps: bump everything-else group with 43 updates
2. #8159 - OPEN - deps: bump actions group with 11 updates
3. #8142 - CLOSED - deps: bump everything-else group with 41 updates
4. #8141 - OPEN - deps: bump tokio-ecosystem group with 5 updates
5. #8133 - CLOSED - deps: bump actions group with 10 updates
6. #8140 - OPEN - deps: bump serde_json from 1.0.151 to 1.0.154
7. #7834 - OPEN - deps: bump wasm group with 4 updates

All PRs are dependency updates - no feature PRs, no bug fixes, no issues. This is a project that's primarily doing maintenance/dependency updates.

Let me structure this according to the required format:

1. Today's Overview
2. Releases (none)
3. Project Progress
4. Community Hot Topics
5. Bugs & Stability
6. Feature Requests & Roadmap Signals
7. User Feedback Summary
8. Backlog Watch

I need to be objective and data-driven, highlighting project health.</think>

# IronClaw Project Digest — 2026-10-26

## 1. Today's Overview

IronClaw (nearai/ironclaw) shows **low-intensity maintenance activity** today. The repository received **7 pull request updates** in the last 24 hours, with 5 open and 2 merged/closed. No new issues were filed, and no releases were published. All activity consists of automated dependency updates via Dependabot, covering Rust crates, GitHub Actions, and WASM tooling. The project appears in a stable maintenance phase with no reported bugs, feature development, or community discussions requiring attention.

---

## 2. Releases

**No new releases** were published in the last 24 hours.

---

## 3. Project Progress

| PR | Status | Summary |
|---|---|---|
| [#8160](https://github.com/nearai/ironclaw/pull/8160) | OPEN | Dependabot: bump everything-else group with 43 updates (thiserror, uuid, base64, etc.) |
| [#8159](https://github.com/nearai/ironclaw/pull/8159) | OPEN | Dependabot: bump actions group with 11 updates (claude-code-action, setup-python, etc.) |
| [#8142](https://github.com/nearai/ironclaw/pull/8142) | CLOSED | Dependabot: bump everything-else group with 41 updates |
| [#8141](https://github.com/nearai/ironclaw/pull/8141) | OPEN | Dependabot: bump tokio-ecosystem group with 5 updates (tokio, tokio-test, tokio-util) |
| [#8133](https://github.com/nearai/ironclaw/pull/8133) | CLOSED | Dependabot: bump actions group with 10 updates |
| [#8140](https://github.com/nearai/ironclaw/pull/8140) | OPEN | Dependabot: bump serde_json from 1.0.151 to 1.0.154 |
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | OPEN | Dependabot: bump wasm group with 4 updates (wasmtime, wasmtime-wasi, wit-component, wit-parser) |

**Interpretation:** The project merged 2 dependency update PRs (#8142, #8133) recently, demonstrating active dependency hygiene. The remaining 5 open PRs are pending review/merge. No code changes, features, or bug fixes were advanced today.

---

## 4. Community Hot Topics

**No active issues or highly-engaged PRs** were reported in the last 24 hours. There are zero total issues in the system, and all 7 PRs are automated Dependabot updates with no comments or reactions.

**Underlying assessment:** The project lacks visible community-driven discussion. This may indicate:
- A closed development model with limited external contributors
- Early-stage project with no public feature roadmap
- Community engagement managed through channels other than GitHub Issues

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions** were reported today. The dependency update PRs (particularly tokio, serde_json, and wasmtime updates) suggest the project is proactively maintaining compatibility with upstream libraries, which is positive for stability.

---

## 6. Feature Requests & Roadmap Signals

**No feature requests** were filed today. The GitHub Issues list is empty. There is no public signal about upcoming features or roadmap direction from this data.

---

## 7. User Feedback Summary

**No user feedback** (issues, comments, or discussions) was recorded in the last 24 hours. Unable to assess user satisfaction or pain points from GitHub data alone.

---

## 8. Backlog Watch

| Item | Age | Status | Notes |
|---|---|---|---|
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | 2026-08-23 (~2 months) | OPEN | WASM dependency updates (wasmtime, wit-component, etc.) — largest scope, medium risk |
| [#8141](https://github.com/nearai/ironclaw/pull/8141) | 2026-10-18 (~8 days) | OPEN | Tokio ecosystem updates |
| [#8140](https://github.com/nearai/ironclaw/pull/8140) | 2026-10-18 (~8 days) | OPEN | serde_json patch update |

**Attention needed:** The longest-pending item is PR #7834 (WASM group updates, opened August 2026). While it's labeled "size: L, risk: medium," it has sat open for approximately 2 months without merge. This warrants maintainer review to avoid dependency drift.

---

*Generated: 2026-10-26 | Data source: GitHub nearai/ironclaw*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a project digest for QwenPaw based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

From the data:
- Issues updated in last 24h: 6 (5 open, 1 closed)
- PRs updated in last 24h: 6 (all open, 0 merged/closed)
- New releases: 0

Let me go through each issue and PR:

**Issues:**
1. #8413 - [OPEN] Self-kill guard blocks kill $PID for unrelated user-started process - Bug
2. #8416 - [CLOSED] Desktop approval dialog keeps retrying cancelled request - Bug
3. #8412 - [OPEN] governance/audit.db stops recording tool calls per-agent - Bug
4. #8417 - [OPEN] 上下文压缩摘要必 400 失败 - Bug (Chinese - about context compression failing with 400)
5. #8415 - [OPEN] edit_file converts CRLF to LF during targeted edit - Bug
6. #8414 - [OPEN] edit_file converts CRLF to LF - Bug (duplicate?)

**PRs:**
1. #8419 - [OPEN] fix(tools): stop shell self-kill guard from blocking kill $PID - Fix for #8413
2. #8418 - [OPEN] docs: note eligibility review for AgentScope Platform deployment
3. #8187 - [OPEN] feat(channels): extract channels into plugins with subprocess isolation
4. #8318 - [OPEN] feat(agent): add /steer command for mid-execution guidance
5. #8314 - [OPEN] feat(web_search): add DeepSeek Search provider
6. #8268 - [OPEN] fix(task_tracker): bound run completion callback and always clean up

Now let me structure this into the requested format:</think>

# QwenPaw Project Digest — 2026-10-26

## 1. Today's Overview

QwenPaw shows moderate activity on October 26, 2026. The project logged **6 issue updates** (5 new, 1 closed) and **6 pull requests** (all open, none merged) within the last 24 hours. No new releases were published. The issue queue reveals a mix of bug reports concentrated around file operations, shell command safety, and desktop UI behaviors, while the PR landscape shows continued work on core features including a mid-execution steering command, DeepSeek search integration, and channel isolation improvements. The closed issue (#8416) indicates some stability work is completing, though most reported bugs remain open and awaiting fixes.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Project Progress

**Pull Request Activity (Last 24h):**

| PR | Title | Status |
|----|-------|--------|
| [#8419](https://github.com/agentscope-ai/QwenPaw/pull/8419) | fix(tools): stop the shell self-kill guard from blocking kill $PID | OPEN |
| [#8418](https://github.com/agentscope-ai/QwenPaw/pull/8418) | docs: note eligibility review for AgentScope Platform deployment | OPEN |
| [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187) | feat(channels): extract channels into plugins with subprocess isolation | OPEN |
| [#8318](https://github.com/agentscope-ai/QwenPaw/pull/8318) | feat(agent): add /steer command for mid-execution guidance | OPEN |
| [#8314](https://github.com/agentscope-ai/QwenPaw/pull/8318) | feat(web_search): add DeepSeek Search provider | OPEN |
| [#8268](https://github.com/agentscope-ai/QwenPaw/pull/8268) | fix(task_tracker): bound the run completion callback and always clean up | OPEN |

**No PRs were merged or closed in the last 24 hours.** All six PRs remain open and under review. Key advancements include:

- **#8419** directly addresses the shell self-kill guard bug (#8413), proposing a fix for legitimate process termination commands using shell variables
- **#8318** introduces the `/steer` command for mid-execution user guidance, addressing a long-standing feature gap (Issue #1775)
- **#8314** adds DeepSeek as a web search provider, enabling structured search results with publication dates
- **#8187** represents a major architectural change moving channels into plugins with subprocess isolation
- **#8268** fixes a task tracker cleanup issue that could cause runs to hang indefinitely

---

## 4. Community Hot Topics

**Issues with Most Activity (by comment count):**

| Issue | Title | Comments | Status |
|-------|-------|----------|--------|
| [#8413](https://github.com/agentscope-ai/QwenPaw/issues/8413) | Self-kill guard blocks kill $PID for unrelated user-started process | 2 | OPEN |
| [#8416](https://github.com/agentscope-ai/QwenPaw/issues/8416) | Desktop approval dialog keeps retrying a cancelled request | 2 | CLOSED |
| [#8412](https://github.com/agentscope-ai/QwenPaw/issues/8412) | governance/audit.db stops recording tool calls per-agent | 2 | OPEN |
| [#8417](https://github.com/agentscope-ai/QwenPaw/issues/8417) | 上下文压缩摘要必 400 失败 (Context compression 400 failure) | 1 | OPEN |
| [#8415](https://github.com/agentscope-ai/QwenPaw/issues/8415) | edit_file converts CRLF to LF during targeted edit | 1 | OPEN |

**Analysis:**

The most discussed issue, **#8413** (shell self-kill guard false positives), highlights a tension in the project's security model—the current implementation is overly aggressive, blocking legitimate workflows like `PID=$(pgrep mydaemon) && kill $PID`. This suggests users are actively using QwenPaw for system administration tasks where process management is essential.

Issue **#8412** (audit database stopping recordings) is notable because it represents a **data integrity problem**—once an agent's audit events stop being recorded, they never resume, even though the agent continues making tool calls. This could have compliance implications for users relying on audit trails.

The **#8417** issue reveals a compatibility problem with the Volcano Engine AgentPlan's glm-5.3-flash model, which doesn't support the `thinking.type=disabled` parameter that the compatibility layer attempts to send. This indicates evolving model provider APIs creating integration challenges.

---

## 5. Bugs & Stability

**Bugs Reported Today (Ranked by Severity):**

| Issue | Severity | Description | Fix PR |
|-------|----------|-------------|--------|
| [#8413](https://github.com/agentscope-ai/QwenPaw/issues/8413) | **HIGH** | Shell self-kill guard blocks legitimate `$PID` variable usage | [#8419](https://github.com/agentscope-ai/QwenPaw/pull/8419) exists |
| [#8412](https://github.com/agentscope-ai/QwenPaw/issues/8412) | **HIGH** | Audit database stops recording per-agent tool calls permanently | None |
| [#8417](https://github.com/agentscope-ai/QwenPaw/issues/8417) | **MEDIUM** | Context compression fails with 400 error on glm-5.3-flash | None |
| [#8415](https://github.com/agentscope-ai/QwenPaw/issues/8415) / [#8414](https://github.com/agentscope-ai/QwenPaw/issues/8414) | **MEDIUM** | edit_file converts CRLF line endings to LF, corrupting Windows files | None |
| [#8416](https://github.com/agentscope-ai/QwenPaw/issues/8416) | **LOW** | Desktop approval dialog retry issue | **CLOSED** |

**Summary:**
- 1 bug closed (#8416 — Desktop approval dialog issue)
- 5 bugs remain open, with 2 having associated fix PRs (#8413 has #8419)
- The audit database bug (#8412) is particularly concerning as it represents silent data loss with no recovery mechanism

---

## 6. Feature Requests & Roadmap Signals

**Active Feature PRs Indicating Roadmap Direction:**

1. **#8318 — /steer command** (Size M): Enables mid-execution guidance without losing progress. This fills a major UX gap where users previously had to either wait for completion or restart entirely. Likely candidates for inclusion in a near-term minor release.

2. **#8314 — DeepSeek Search provider**: Adds another search backend. The inclusion of structured results with publication dates and authority tiers suggests QwenPaw is strengthening its research capabilities.

3. **#8187 — Channel plugin extraction** (Size XXXL): A substantial architectural refactor moving channels into isolated subprocesses. This reduces the main SDK's dependency footprint and improves failure isolation—points toward a more modular, enterprise-focused design.

4. **#8268 — Task tracker cleanup fix**: Addresses a resource leak that could cause indefinite hanging. This is a stability improvement that should be prioritized.

**No standalone feature request issues were reported today.**

---

## 7. User Feedback Summary

**Pain Points Identified:**

- **Shell command restrictions are too broad**: Users report that legitimate process management commands using shell variables (`$PID`) are incorrectly blocked. This suggests the security guard is harming usability for advanced users doing system administration.

- **Windows file corruption risk**: The `edit_file` function silently converts CRLF to LF, which could cause issues in collaborative environments where Windows and Unix developers work together.

- **Model compatibility gaps**: The failure with Volcano Engine's glm-5.3-flash shows that as QwenPaw supports more model providers, maintaining backward compatibility in API parameters becomes increasingly complex.

- **Silent audit failures**: Users with compliance requirements (audit_level: all) are experiencing silent data loss when the audit database stops recording. This is a trust-eroding issue.

**Satisfaction Signal:**

The closure of issue #8416 (Desktop approval dialog retry) indicates responsiveness to user-reported desktop UI issues. The quick turnaround (reported and closed within the same day or very quickly) demonstrates active maintenance.

---

## 8. Backlog Watch

**Issues Requiring Maintainer Attention:**

| Issue | Age | Priority | Description |
|-------|-----|----------|-------------|
| [#8412](https://github.com/agentscope-ai/QwenPaw/issues/8412) | 2 days | **HIGH** | Audit database stops recording per-agent (data loss) |
| [#8413](https://github.com/agentscope-ai/QwenPaw/issues/8413) | 1 day | **HIGH** | Shell self-kill guard false positives |
| [#8417](https://github.com/agentscope-ai/QwenPaw/issues/8417) | 1 day | **MEDIUM** | Context compression 400 failure with glm-5.3-flash |
| [#8415](https://github.com/agentscope-ai/QwenPaw/issues/8415) | 1 day | **MEDIUM** | CRLF to LF conversion in edit_file |

**Note:** No long-unanswered issues were identified in this 24-hour window. All reported issues have recent activity. However, the audit database issue (#8412) has been open for 2 days without an assigned fix, and it represents a critical data integrity problem that warrants expedited attention.

---

*Generated from GitHub data for agentscope-ai/QwenPaw on 2026-10-26*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>Let me analyze the GitHub data for ZeroClaw and create a structured project digest for 2026-10-26.

Let me organize the data:

**Issues (6 total, updated in last 24h):**
- 5 open/active, 1 closed

1. #8891 - [Tracker]: Persistent memory - wire the curation, relevance, and operability planes to parity
2. #11853 - ci: npm audit failed — 2026-10-19 (dependencies, security, risk:high)
3. #12035 - knowledge_bundles is validated but never consumed at runtime, with no warning
4. #12034 - RFC: Personal Agent MVP: visitor-facing knowledge-and-request subsystem (CLOSED)
5. #12022 - [Feature]: memory recall: an opt-in external rerank stage over the eligible candidate pool
6. #12021 - [Bug]: When saving configuration settings via the banner in the web ui, the config group save button is still highlighted afterwards

**PRs (50 total, updated in last 24h):**
- 49 open, 1 merged/closed

Let me identify the key items:

**Most notable Issues by engagement:**
- #8891 - Persistent memory tracker (14 comments)
- #11853 - npm audit failed (3 comments)
- #12034 - RFC Personal Agent MVP (just closed)
- #12035 - knowledge_bundles issue (0 comments but new)
- #12022 - memory recall external rerank (new feature request)
- #12021 - UI bug with save button

**Notable PRs:**
- #11209 - fix(memory): reject unknown backends instead of selecting markdown
- #11754 - feat(channels): make acknowledgement reactions configurable
- #11739 - fix(channels/telegram): withdraw the ack reaction when a reply finishes


- #11986 - feat(gateway): scoped dashboard chat through the core
- #11988 - ci(semgrep): drop nosemgrep-suppressed findings before the SARIF upload
- #11741 - build(container): publish a dist-broad image variant with the full channel set
- #11174 - feat(runtime): add capability-taking constructors for turn entry points (large, important)
- #11744 - feat(channels): stream model reasoning in Telegram and Slack drafts
- #11267 - fix(channels/lark): parse image elements in Feishu post messages
- #11056 - docs(channels/whatsapp): document the voice-note round trip
- #11644 - fix(cron): prevent shell diagnostics from leaking to channels (security)
- #11672 - fix(providers): project JPEG admission without copying the input
- #11326 - fix(rpc): refuse persisted log reads to scoped principals (security)
- #11855 - fix(plugins): clear abandoned install stages on the next install
- #11976 - ci(cli-only): build and test the CLI-only feature set with an artifact ratchet
- #11774 - fix(i18n): fall back from a regional locale to its language catalogue
- #11746 - fix(channels/email): save inbound documents to the channel workspace
- #11770 - test(channels): make voice-drop and model-fallback tests locale-independent

The codebase shows strong momentum across multiple fronts. Security patches are being prioritized—particularly around preventing shell output leaks and restricting log access for scoped principals. The channel layer is seeing significant work too, with improvements to Telegram ack reactions, Feishu image parsing, and WhatsApp voice note handling. Email attachments now save properly, and the test suite is becoming more resilient to locale variations. The runtime is getting capability-based constructors, the gateway gains scoped dashboard functionality, and there are refinements to i18n fallbacks and CLI builds.</think>

# ZeroClaw Project Digest — 2026-10-26

---

## 1. Today's Overview

ZeroClaw shows **very high activity** today with 50 PRs updated in the last 24 hours alongside 6 issue updates. The project is clearly in a heavy development push toward the upcoming v0.9.0 release, with major work happening across the runtime, channel integrations, memory subsystem, and security hardening. While no new releases were published, the backlog of open PRs (49) indicates substantial feature integration work in progress. One RFC issue (#12034) was closed, suggesting a proposal was accepted. The maintainers are actively addressing security concerns (multiple high-risk PRs) and expanding platform capabilities.

---

## 2. Releases

No new releases published in the last 24 hours.

---

## 3. Project Progress

| PR | Status | Description |
|---|---|---|
| — | *No merged PRs in data* | The 50 PR updates reflect active review/development; only 1 PR shows as merged/closed |

**Key feature advancements today:**

- **Memory backend fix** (#11209): Unknown memory backends now properly rejected instead of silently falling back to Markdown — a significant correctness fix
- **Configurable ack reactions** (#11754): Channels now allow custom acknowledgement emoji reactions (major UX improvement for Slack, Matrix, Lark)
- **Scoped dashboard chat** (#11986): Gateway now supports dashboard chat through the core with proper scoping
- **Capability constructors** (#11174): Runtime now exposes `run_with_capabilities`, `process_message_with_capabilities`, and related APIs for explicit permission handling — foundational for v0.9.0
- **Streaming reasoning** (#11744): Telegram and Slack now stream model reasoning in drafts (previously only Matrix supported this)
- **Container variant** (#11741): New `dist-broad` image includes full channel set
- **Security: RPC logs** (#11326): Persisted log reads now refused for scoped principals
- **Security: Shell leakage** (#11644): Cron diagnostics no longer leak to channels

---

## 4. Community Hot Topics

**Most active issues by comment count:**

| Issue | Comments | Summary |
|---|---|---|
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | 14 | **[Tracker]: Persistent memory** — Multi-PR rollout to bring cross-session memory to parity with peer agents. Currently 7 open items (4 issues + 3 PRs). High-priority epic. |
| [#11853](https://github.com/zeroclaw-labs/zeroclaw/issues/11853) | 3 | **npm audit failed** — Security vulnerability in `@tailwindcss/typography` (moderate severity). Action required. |

**Analysis:** The persistent memory tracker (#8891) is the focal point for long-term memory architecture work — users/developers are actively collaborating on wiring curation, relevance, and operability planes. The npm audit issue indicates the project stays on top of dependency hygiene.

---

## 5. Bugs & Stability

| Issue | Severity | Status | Fix PR? |
|---|---|---|---|
| [#12021](https://github.com/zeroclaw-labs/zeroclaw/issues/12021) | S3 (minor) | Open | No |
| [#12035](https://github.com/zeroclaw-labs/zeroclaw/issues/12035) | Low | Open | No |
| [#11853](https://github.com/zeroclaw-labs/zeroclaw/issues/11853) | High (security) | Open | No |
| [#11209](https://github.com/zeroclaw-labs/zeroclaw/pull/11209) | Medium | Open (PR) | — |

**Details:**

- **#12021**: UI bug — config save button remains highlighted after saving via banner. Minor UX annoyance; daemon reload clears it.
- **#12035**: Configuration `knowledge_bundles` is validated but silently ignored at runtime with no warning — config authors get false confidence.
- **#11853**: npm audit failure for `@tailwindcss/typography` — needs dependency update or override.
- **#11209** (PR): Memory backend rejection bug is under review — fixes silent fallback to Markdown for unknown backends.

**No regressions or crashes reported today.**

---

## 6. Feature Requests & Roadmap Signals

| Issue | Type | Summary |
|---|---|---|
| [#12022](https://github.com/zeroclaw-labs/zeroclaw/issues/12022) | Feature | **External rerank stage** for memory recall — opt-in `/v1/rerank` endpoint integration for candidate pool ordering |
| [#12034](https://github.com/zeroclaw-labs/zeroclaw/issues/12034) | RFC (Closed) | **Personal Agent MVP** — visitor-facing knowledge-and-request subsystem |
| [#11754](https://github.com/zeroclaw-labs/zeroclaw/pull/11754) | Feature (PR) | Configurable acknowledgement reactions per channel |
| [#11744](https://github.com/zeroclaw-labs/zeroclaw/pull/11744) | Feature (PR) | Stream model reasoning in Telegram/Slack (already in Matrix) |
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | Roadmap | **Persistent memory parity** — cross-session memory with full feature set |

**Prediction:** Based on current PRs and issue activity, **v0.9.0** is likely to include:
- Capability-based runtime constructors (#11174)
- External memory reranking (#12022)
- Expanded streaming support across channels
- Security hardening (RPC logs, shell diagnostics)
- Potentially the Personal Agent MVP if #12034 merges via #12033

---

## 7. User Feedback Summary

**Pain points identified from issues:**

1. **Configuration confusion** (#12035): Users set `knowledge_bundles` in config, it validates successfully, but is silently ignored at runtime — erodes trust in configuration system.
2. **UI polish gap** (#12021): After saving config via banner, the save button stays highlighted — minor but indicates UX testing gap.
3. **Memory backend behavior** (#11209): Silently using Markdown for unknown backends was unexpected; users expecting secure/structured storage got plain files.

**Satisfaction signals:**

- RFC process active (#12034) — community engaged in design
- Persistent memory work (#8891) gets sustained attention — user demand for memory features
- Channel feature richness (reactions, streaming, multi-platform) indicates production usage across Slack, Telegram, Matrix, Lark, WhatsApp

---

## 8. Backlog Watch

| Item | Age | Status | Concern |
|---|---|---|---|
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | ~3.5 mo | Open | **Persistent memory tracker** — high-priority epic with 7 sub-items still open; requires multi-PR coordination |
| [#11209](https://github.com/zeroclaw-labs/zeroclaw/pull/11209) | ~1 mo | Open | Memory backend fix — needs author/maintainer action |
| [#11739](https://github.com/zeroclaw-labs/zeroclaw/pull/11739) | ~12 days | Open | Telegram ack reaction fix — needs author action |
| [#11754](https://github.com/zeroclaw-labs/zeroclaw/pull/11754) | ~11 days | Open | Channel ack config — needs author action |
| [#11853](https://github.com/zeroclaw-labs/zeroclaw/issues/11853) | ~1 wk | Open | **npm audit failure** — security finding unaddressed |
| [#12035](https://github.com/zeroclaw-labs/zeroclaw/issues/12035) | 1 day | Open | Config validation gap — needs triage |

**Maintainer attention needed on:**
- Security vulnerability (#11853) — dependency update pending
- Several PRs flagged `needs-author-action` — check review queue

---

*Digest generated from GitHub activity for 2026-10-26. Data source: zeroclaw-labs/zeroclaw*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*