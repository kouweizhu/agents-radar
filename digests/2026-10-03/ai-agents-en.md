# OpenClaw Ecosystem Digest 2026-10-03

> Issues: 493 | PRs: 500 | Projects covered: 5 | Generated: 2026-10-03 01:22 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

<think>The user wants me to generate a structured project digest for OpenClaw based on the provided GitHub data. Let me analyze the data and create the requested sections.

Key data points:
- Issues: 493 total (338 open/active, 155 closed)
- PRs: 500 total (293 open, 207 merged/closed)
- 1 new release: v2026.8.35

Let me organize this into the requested format:

1. **Today's Overview** - High activity (493 issues, 500 PRs updated in 24h)
2. **Releases** - v2026.8.35 is a gateway-only extended-stable release
3. **Project Progress** - Need to identify merged/closed PRs
4. **Community Hot Topics** - Top issues by comment count
5. **Bugs & Stability** - Bugs from the issues list
6. **Feature Requests & Roadmap Signals** - Feature requests
7. **User Feedback Summary** - Pain points from issues
8. **Backlog Watch** - Long-unanswered items

Let me analyze the data more carefully:

Top issues by comments:
1. #116201 - Realtime voice work resource limits (59 comments) - P2
2. #144911 - MCP server init timeout crashes (31 comments) - P1, closed
3. #102175 - embedded prompt cache breaks (21 comments) - P2
4. #97616 - leaks unreaped hook/tool child processes (17 comments) - P1
5. #38327 - "Cannot convert undefined or null to object" (17 comments) - P0

PRs:
Looking at the PRs, I can see several that are closed/merged:
- #163905 - closed - ci: pin the OpenClaw Bun fork
- #163605 - closed - refactor(sessions): move async durable transcript reads
- #159514 - closed - catalog worker rebuilds discovery registry
- #143196 - closed - fix(codex): transcribe voice notes


- #163838, #163805, #163807, #163806, #163804, #163789 - all closed

I've identified 18 closed pull requests in total. The release appears to be a gateway-only extended-stable version, essentially functioning as a long-term support release with critical security updates, reliability improvements, performance enhancements, and new model support capabilities.</think>

# OpenClaw Project Digest — 2026-10-03

## Today's Overview

OpenClaw continues to show very high activity with **493 issues** and **500 PRs** updated in the last 24 hours. The project is maintaining strong engagement—155 issues closed and 207 PRs merged/closed in the past day. The release of **v2026.8.35** as an `extended-stable` (LTS-equivalent) gateway-only build signals a shift toward more conservative release cadences for production deployments. Several critical P0/P1 bugs remain active, particularly around memory management, session stability, and Gateway crashes. The maintainer team is actively pushing refactoring work—multiple "deslop" PRs targeting cleanup of duplicated state and redundant code across gateway and agent core.

---

## Releases

### v2026.8.35 — Gateway-only `extended-stable` Release

This is a **gateway-only** release designated as `extended-stable`, the current equivalent to an LTS offering. It includes:

- OpenClaw from end of August 2026
- Critical security updates
- Reliability and performance fixes
- New model support features

**Migration Notes:** This is a gateway-only package; clients and plugins should remain on their current versions unless explicitly advised. No breaking changes announced for this stable track.

🔗 [Release Details](https://github.com/openclaw/openclaw/releases/tag/v2026.8.35)

---

## Project Progress

### PRs Merged/Closed Today (Selected)

| PR | Title | Status |
|----|-------|--------|
| [#163905](https://github.com/openclaw/openclaw/pull/163905) | ci: pin the OpenClaw Bun fork 13311 prerelease | ✅ Closed |
| [#163605](https://github.com/openclaw/openclaw/pull/163605) | refactor(sessions): move async durable transcript reads off the Gateway thread | ✅ Closed |
| [#163838](https://github.com/openclaw/openclaw/pull/163838) | fix: restore MIT license detection | ✅ Closed |
| [#163805](https://github.com/openclaw/openclaw/pull/163805) | fix(test): keep subprocess fixtures consistent across Node and Bun | ✅ Closed |
| [#163807](https://github.com/openclaw/openclaw/pull/163807) | fix(agents): prevent shared SQLite stores in model-switch tests | ✅ Closed |
| [#163806](https://github.com/openclaw/openclaw/pull/163806) | fix(codex): restore catalog lint checks | ✅ Closed |
| [#163804](https://github.com/openclaw/openclaw/pull/163804) | fix: put QuickJS plugin mascot on white | ✅ Closed |
| [#163789](https://github.com/openclaw/openclaw/pull/163789) | ci: use Blacksmith for default fork lint checks | ✅ Closed |
| [#159514](https://github.com/openclaw/openclaw/pull/159514) | Bug: catalog worker rebuilds discovery registry on nearly every request | ✅ Closed |
| [#143196](https://github.com/openclaw/openclaw/pull/143196) | fix(codex): transcribe voice notes in bound conversations | ✅ Closed |

### Key Advancements

- **Session Performance**: Transcript loading moved off the Gateway thread (#163605), addressing event-loop stalls during compaction and reset hooks
- **Provider Refactoring**: Large-scale provider family cleanup (#163827) removing duplicated transport, credential staging, and catalog projection code
- **macOS App Cleanup**: ~1,000 net production lines removed in macOS app refactor (#163892)
- **Gateway/Agent Deslop**: 1,007 net production lines removed across 79 production files (#163919)
- **Test Infrastructure**: Multiple fixes for Bun compatibility (#163805) and license detection (#163838)

---

## Community Hot Topics

### Most Active Issues (by comment count)

1. **[#116201](https://github.com/openclaw/openclaw/issues/116201)** — **Realtime voice work can retain unbounded provider and consult state** (59 comments)
   - *Severity: P2 | Impact: session-state*
   - Real-time voice sessions retain superseded consult work, large provider frames, and pre-ready audio under slow/stalled/bursty conditions
   - **Underlying need**: Resource governance for long-running voice sessions

2. **[#144911](https://github.com/openclaw/openclaw/issues/144911)** — **MCP server init timeout crashes Gateway** (31 comments, CLOSED)
   - *Severity: P1 | Impact: crash-loop*
   - Unhandled promise rejection in child cleanup path when stdio MCP server fails to initialize within 30s
   - **Underlying need**: Robust timeout and cleanup handling for MCP integrations

3. **[#102175](https://github.com/openclaw/openclaw/issues/102175)** — **embedded prompt cache breaks across room-event, policy, and Responses boundaries** (21 comments)
   - *Severity: P2 | Impact: security*
   - Long-lived embedded sessions lose prompt-cache reuse when turns cross various boundaries
   - **Underlying need**: Consistent caching across session state transitions

4. **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — **OpenClaw leaks unreaped hook/tool child processes** (17 comments)
   - *Severity: P1 | Impact: message-loss*
   - Zombie process accumulation from hook/tool execution degrading runtime over time
   - **Underlying need**: Proper child process lifecycle management

5. **[#38327](https://github.com/openclaw/openclaw/issues/38327)** — **"Cannot convert undefined or null to object" in 2026.3.2 with gemini-3.1-pro** (17 comments)
   - *Severity: P0 | Impact: ux-release-blocker*
   - Regression breaking all messages with embedded agents using Google Vertex
   - **Underlying need**: Provider compatibility testing

### Active PRs Gaining Traction

| PR | Title | Status |
|----|-------|--------|
| [#163919](https://github.com/openclaw/openclaw/pull/163919) | refactor(gateway): deslop gateway and agent core | 👀 Ready for maintainer |
| [#163827](https://github.com/openclaw/openclaw/pull/163827) | refactor(providers): deslop provider family | 👀 Ready for maintainer |
| [#163916](https://github.com/openclaw/openclaw/pull/163916) | refactor(media): deslop media generation and understanding | 👀 Ready for maintainer |
| [#163917](https://github.com/openclaw/openclaw/pull/163917) | improve(qa): verify deferred Codex tool discovery | ⏳ Waiting on author |
| [#162759](https://github.com/openclaw/openclaw/pull/162759) | fix(webhooks): preserve callbacks while retiring implicit ports | 👀 Ready for maintainer |

---

## Bugs & Stability

### Critical/High-Severity Bugs (P0-P1)

| Issue | Title | Severity | Status | Fix PR? |
|-------|-------|----------|--------|---------|
| [#160521](https://github.com/openclaw/openclaw/issues/160521) | Gateway crash: state DB read-admission seal → "Worker environment inventory has closed" → unhandled rejection | P0 | Open | No |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | Gateway startup wall-time scales with enabled plugin count | P0 | Open | No |
| [#115424](https://github.com/openclaw/openclaw/issues/115424) | Gateway V8 heap OOM during main-session turn; restart-recovery creates crash loop | P0 | Open | No |
| [#160548](https://github.com/openclaw/openclaw/issues/160548) | prepared-model-catalog worker leaks ~1 GiB per 5 min | P1 | Open | No |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | Plugin source capture rewrites 1.1–1.4 GB per CLI command (SSD wear) | P1 | Open | No |
| [#117262](https://github.com/openclaw/openclaw/issues/117262) | SQLite contention causes ~33s event-loop stalls | P1 | Open | No |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | Regression: "Cannot convert undefined or null to object" with Gemini | P0 | Open | No |
| [#161953](https://github.com/openclaw/openclaw/issues/161953) | Windows: sessions.create fails with "publication owner is no longer current" | P0 | Closed | Yes |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP server init timeout crashes Gateway | P1 | Closed | — |

### Key Observations

- **Memory issues dominate**: Multiple P0/P1 issues around heap OOM, memory leaks in catalog workers, and unbounded resource retention
- **Session stability concerns**: Several issues around session replay loops, restart recovery failures, and transcript handling
- **Platform-specific bugs**: Windows-specific session creation failure (#161953) now closed; macOS app boot-looping persists (#115256)
- Regression cluster in 2026.9.x releases affecting startup time, catalog worker behavior, and session creation

---

## Feature Requests & Roadmap Signals

### Notable Feature Requests

1. **[#67413](https://github.com/openclaw/openclaw/issues/67413)** — **Per-agent dreaming configuration** (12 comments, 5 👍)
   - Request to allow per-agent control over memory-core dreaming instead of simultaneous processing
   - **Likelihood**: Medium — addresses real memory spike problem; fits ongoing memory-system work

2. **[#103198](https://github.com/openclaw/openclaw/issues/103198)** — **WebChat image attachments not mapped to media store path** (8 comments, 3 👍)
   - Image tool receives "image_0" instead of actual file path
   - **Likelihood**: High — straightforward fix, affects user experience

3. **[#91804](https://github.com/openclaw/openclaw/issues/91804)** — **Internal Reasoning Leakage in 2026.6.5** (8 comments, 1 👍)
   - Privacy/UX regression exposing internal agent reasoning to users
   - **Likelihood**: High — security/privacy concern, likely prioritized

### Roadmap Signals

- **Extended-stable release model**: v2026.8.35 as LTS-equivalent suggests a dual-track release strategy (rapid innovation + stable long-term support)
- **Refactoring emphasis**: Multiple "deslop" PRs indicate a systematic cleanup phase, likely preparing for future feature work
- **Provider consolidation**: The provider family refactor (#163827) suggests harmonization across multi-extension support—new providers may be easier to add

---

## User Feedback Summary

### Pain Points

1. **Memory & Resource Management**
   - "prepared-model-catalog worker leaks ~1 GiB per 5 min" (#160548)
   - "Plugin source capture rewrites ~1.1–1.4 GB per CLI command" (#157989) — users reporting SSD wear concerns
   - "Gateway V8 heap OOM during main-session turn" (#115424)

2. **Session & State Stability**
   - "Matrix room agents can loop on visible no-reply output" (#114211)
   - "Windows: sessions.create always fails" (#161953) — now fixed
   - "Telegram DM replies fall back after stale DM-scope cleanup" (#111519)

3. **Regression Frustrations**
   - Multiple users reporting issues after 2026.9.x upgrades (#155859, #159514)
   - Control UI missing navigation to features (#108182)
   - "Internal Reasoning Leakage" (#91804) — privacy concern

### Positive Signals

- Quick turn-around on Windows session creation fix (#161953)
- Active refactoring reducing code duplication (1,000+ lines removed in major cleanups)
- Bun compatibility improvements expanding test infrastructure options

---

## Backlog Watch

### Long-Unanswered Important Issues

| Issue | Title | Age | Comments | Status |
|-------|-------|-----|----------|--------|
| [#114414](https://github.com/openclaw/openclaw/issues/114414) | Dated TODO sweep | 2026-07-27 | 11 | Open |
| [#53783](https://github.com/openclaw/openclaw/issues/53783) | Telegram group: cross-agent sessions_list visibility mismatch | 2026-03-24 | 9 | Open |
| [#84242](https://github.com/openclaw/openclaw/issues/84242) | memory-lancedb memory_store not exposed as callable tool | 2026-05-19 | 7 | Open |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | Usage-cost refresh lock never releasable after container restart | 2026-07-27 | 7 | Open |

### PRs Needing Maintainer Attention

| PR | Title | Status |
|----|-------|--------|
| [#160338](https://github.com/openclaw/openclaw/pull/160338) | perf(lint): bound selected core checker working sets | ⏳ Waiting on author |
| [#150992](https://github.com/openclaw/openclaw/pull/150992) | fix(onboard): reruns overwrite trusted-proxy authentication | ⏳ Waiting on author |
| [#145850](https://github.com/openclaw/openclaw/pull/145850) | fix(agents): ignore empty stream heartbeats as model progress | ⏳ Waiting on author |
| [#148066](https://github.com/openclaw/openclaw/pull/148066) | fix(daemon): avoid premature recovery failure during launchd throttling | 👀 Ready for maintainer |

---

*Generated from OpenClaw GitHub data — 2026-10-03*

---

## Cross-Ecosystem Comparison

<think>The user wants me to generate a cross-project comparison report for the personal AI assistant / agent open-source ecosystem based on the project digests I just created. Let me analyze the data from each project:

1. **OpenClaw** (github.com/openclaw/openclaw)
- 493 issues, 500 PRs updated in 24h
- 1 new release: v2026.8.35 (gateway-only extended-stable)
- 155 issues closed, 207 PRs merged/closed
- High activity, strong community engagement

2. **Hermes Agent** (github.com/nousresearch/hermes-agent)
- 50 issues, 50 PRs updated in 24h
- No new releases
- 39 open issues, 11 closed issues
- 38 open PRs, 12 merged/closed PRs

3. **IronClaw** (github.com/nearai/ironclaw)
- No activity in last 24h

4. **QwenPaw** (github.com/agentscope-ai/QwenPaw)
- 10 issues, 12 PRs updated in 24h
- No new releases
- All issues open (10), 7 PRs merged/closed

5. **ZeroClaw** (github.com/zeroclaw-labs/zeroclaw)
- 50 issues, 50 PRs updated in 24h
- No new releases
- 47 open issues, 3 closed
- 48 open PRs, 2 merged/closed

Let me organize this into the requested format:

1. Ecosystem Overview
2. Activity Comparison (table)
3. OpenClaw's Position
4. Shared Technical Focus Areas
5. Differentiation Analysis
6. Community Momentum & Maturity
7. Trend Signals

Let me write this professionally and concisely.</think>

# Cross-Project Comparison: Personal AI Assistant & Agent Ecosystem

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing intense development activity across multiple projects, each tackling the core challenge of enabling autonomous agentic behavior with varying architectural philosophies. **OpenClaw** dominates in sheer activity volume, while **Hermes Agent** and **ZeroClaw** maintain steady high-velocity development. The landscape shows a clear split between **provider-agnostic frameworks** (OpenClaw, Hermes Agent) targeting multi-model orchestration, and **integrated solutions** (QwenPaw, ZeroClaw) focused on specific deployment contexts. Notably, all actively-maintained projects are addressing similar cross-cutting concerns: memory/resource management, session stability, security hardening, and multi-instance collaboration — suggesting these are the critical unsolved problems the industry is collectively tackling.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases (24h) | Issue Close Rate | Open Issues | Open PRs |
|---------|---------------------|-------------------|----------------|-----------------|-------------|----------|
| **OpenClaw** | 493 | 500 | 1 | 31% (155/493) | 338 | 293 |
| **Hermes Agent** | 50 | 50 | 0 | 22% (11/50) | 39 | 38 |
| **IronClaw** | 0 | 0 | 0 | N/A | — | — |
| **QwenPaw** | 10 | 12 | 0 | 0% (0/10) | 10 | 5 |
| **ZeroClaw** | 50 | 50 | 0 | 6% (3/50) | 47 | 48 |

---

## 3. OpenClaw's Position

**Advantages vs Peers:**

- **Scale of engagement**: OpenClaw's 493 issues + 500 PRs in 24h represents ~10x the activity volume of any peer, indicating the largest active developer community and user base
- **Release cadence maturity**: The introduction of an `extended-stable` (LTS-equivalent) track with v2026.8.35 demonstrates a more mature release strategy compared to peers still on rapid-iteration models
- **Provider breadth**: OpenClaw's extensive provider family refactoring (#163827) suggests deeper multi-provider support than Hermes Agent's focused approach
- **Code quality investment**: The "deslop" initiative — removing 1,000+ production lines across gateway/agent core — signals commitment to long-term maintainability

**Technical Approach Differences:**
- OpenClaw uses a **gateway-centric architecture** with MCP integration, while Hermes Agent follows a **daemon-first** design
- ZeroClaw emphasizes **security hardening** (identity/access control) as a core differentiator; OpenClaw prioritizes **session reliability** and **memory management**
- QwenPaw is the only project with a **desktop-first** deployment model (Tauri-based)

---

## 4. Shared Technical Focus Areas

### Requirements Emerging Across Multiple Projects

| Focus Area | OpenClaw | Hermes | QwenPaw | ZeroClaw | Notes |
|------------|----------|--------|---------|----------|-------|
| **Memory/resource management** | ✅ P0 OOM issues, catalog worker leaks | ✅ FTS5 corruption, Chrome leaks | — | ✅ Subprocess watchdog | Critical across all platforms |
| **Session/state stability** | ✅ Transcript handling, replay loops | ✅ SQLite contention, state.db issues | ✅ Conversation page access | ✅ ZeroCode directory regression | Persistence reliability is universal |
| **Cross-instance collaboration** | — | ✅ Cross-gateway bots | ✅ Cross-instance agents | — | Emerging as high-demand feature |
| **Security hardening** | ✅ MCP timeout crashes | — | — | ✅ Password auth, key protection | Enterprise requirements maturing |
| **Mobile/responsive UI** | — | — | ✅ Mobile drawer, console adaptation | — | Desktop/web clients addressing mobile |
| **Provider routing** | ✅ Embedded prompt cache | ✅ Provider/model fallback logic | ✅ Provider caps | ✅ Ollama/llama.cpp controls | Multi-provider complexity shared |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|-------------|---------|----------|
| **Primary target users** | Developers building multi-agent systems | AI engineers requiring precise control | End-users wanting local-first AI | Teams requiring secure enterprise deployment |
| **Core architectural focus** | Gateway orchestration + MCP | Daemon-based agent runtime | WebUI-first desktop client | Security-first daemon + ZeroCode DSL |
| **Deployment model** | Self-hosted, gateway-centric | Self-hosted, daemon-first | Desktop app (Tauri) | Self-hosted, containerized |
| **Distinguishing features** | Provider family consolidation, "deslop" refactoring | Cross-gateway bot collaboration | Monaco language support for game-dev | RFC governance process, A2A protocol crate |
| **Platform emphasis** | Cross-platform (Windows, macOS, Linux) | Cross-platform with Docker focus | Desktop-focused (web + Tauri) | Linux server + Windows support |

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration** | OpenClaw | High velocity (500 PRs/24h), aggressive refactoring, dual-release tracks (rapid + LTS) |
| **Steady Development** | Hermes Agent, ZeroClaw | Consistent 50 PRs/24h, RFC-driven governance, focused milestone targets |
| **Feature Polish** | QwenPaw | Lower volume but meaningful UX improvements, mobile adaptation in progress |
| **Dormant** | IronClaw | No activity in last 24h — status unclear |

### Maturity Indicators

- **OpenClaw**: Most mature — LTS release track, systematic code cleanup ("deslop"), large community
- **ZeroClaw**: RFC governance process operational, security hardening advanced
- **Hermes Agent**: Active but less formal governance; strong community engagement (33 comments on top issue)
- **QwenPaw**: Emerging; desktop-first but still addressing stability bugs

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

1. **Resource governance is the #1 unsolved problem**
   - Every project reports memory leaks, OOM conditions, or unbounded resource retention
   - Subprocess monitoring, memory watchdogs, and context caching are all active work items

2. **Multi-agent/multi-instance collaboration is emerging as a major feature race**
   - OpenClaw: MCP server integration for tool collaboration
   - Hermes Agent: Cross-gateway bot collaboration (#97681, 33 comments)
   - QwenPaw: Cross-instance agent communication (#8080)
   - ZeroClaw: A2A protocol crate RFC (#11254)

3. **Security hardening is moving from optional to baseline**
   - ZeroClaw's password auth, roster verification, Windows key protection
   - Hermes Agent's security fix for Copilot token fallback
   - OpenClaw's extended-stable release includes "critical security updates"

4. **User-facing reliability beats feature velocity**
   - Desktop duplicate messages (#122167 Hermes), regression bugs (#11387 ZeroClaw), conversation page access failures generate outsized complaint volume
   - Projects with faster close rates (OpenClaw at 31%) appear more responsive

5. **Platform-specific bugs create disproportionate friction**
   - Windows DLL locks, macOS snapshot restore, Linux/FTS5 corruption — platform reliability remains a consistent pain point

### Value for AI Agent Developers

| Signal | Implication |
|--------|-------------|
| Memory/resource management across all projects | Avoid embedding long-lived subprocesses; implement explicit resource limits |
| Session state persistence issues | Design for crash recovery; avoid single-point-of-failure state |
| Cross-instance collaboration demand | Plan for multi-agent orchestration from the start |
| Security hardening across ecosystem | Assume enterprise users require identity/access control |
| RFC governance (ZeroClaw, Hermes) | Engage early in design discussions for upstream influence |

---

*Cross-project analysis — 2026-10-03*

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to generate a structured project digest for Hermes Agent based on the provided GitHub data. Let me analyze the data and create the eight required sections.

Key data points:
- 50 issues updated in last 24h (39 open, 11 closed)
- 50 PRs updated in last 24h (38 open, 12 merged/closed)
- 0 new releases
- Latest issues with comments (top ones by comment count)
- Latest PRs (top ones)

Let me organize this into the required sections:

1. **Today's Overview** - Summarize overall activity
2. **Releases** - None (0 new releases)
3. **Project Progress** - Merged/closed PRs today
4. **Community Hot Topics** - Most active issues/PRs
5. **Bugs & Stability** - Bugs reported
6. **Feature Requests & Roadmap Signals** - Feature requests
7. **User Feedback Summary** - Pain points
8. **Backlog Watch** - Long-unanswered important issues

Let me go through the issues and PRs to identify:
- Most commented issues: #97681 (33 comments), #122167 (13 comments), #123347 (9 comments), #124807 (7 comments), etc.
- Closed issues: #124807, #73163, #102405, #91609, #91431, #119227, #123988, etc.
- PRs: Many open, some closed (#90981, #90577, #70528)

Let me structure this properly.</think>

# Hermes Agent Project Digest — 2026-10-03

## 1. Today's Overview

Hermes Agent continues to show intense development activity with 50 issues and 50 PRs updated in the last 24 hours. The project maintains a healthy ratio of 39 open issues to 11 closed, and 38 open PRs to 12 merged/closed. The community is actively engaged with cross-gateway bot collaboration emerging as the most discussed topic, while several platform-specific bugs (especially Windows and macOS) are receiving focused attention. Desktop client stability remains a concern area with duplicate message rendering and session state issues recurring across multiple reports.

---

## 2. Releases

**No new releases** — The project has not published any releases in the past 24 hours.

---

## 3. Project Progress

### PRs Merged/Closed Today (12 total)

| PR | Title | Risk | Status |
|----|-------|------|--------|
| #90981 | fix(tests): handle windows signal compatibility in live system guard guarded_kill | — | Closed |
| #90577 | fix(process_registry): make _worker_memory_max_bytes cross-platform | — | Closed |
| #70528 | feat(gemini): support native context caching (cachedContents) | — | Closed |

**Notable merged PRs:**
- **#70528** — Gemini context caching support added for large system prompts (40k+ tokens), closing #29818 and #70554
- **#90981** — Fixed `WinError 87` teardown crashes in Windows test fixtures
- **#90577** — Cross-platform memory detection for process registry (handles missing `os.sysconf` on Windows)

### Active PRs Advancing (38 open)

Key PRs in flight:
- **#131919** — Approvals survive yolo mode, blocks unattended prompts (Cowork-inspired)
- **#131881** — Stop using gh auth as token fallback in Copilot (security fix, risk 0.85)
- **#131895** — Scope Docker reuse to immutable config
- **#131896** — Kanban auto-subscriptions binding after compaction fork
- **#131917** — Desktop recommended defaults skip Anthropic frontier tiers

---

## 4. Community Hot Topics

### Most Active Issues by Comment Count

| Issue | Title | Comments | Reactions |
|-------|-------|----------|-----------|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Let Bots collaborate across gateways | 33 | 👍 4 |
| [#122167](https://github.com/NousResearch/hermes-agent/issues/122167) | Desktop: message disappears + assistant replies render twice | 13 | 👍 1 |
| [#123347](https://github.com/NousResearch/hermes-agent/issues/123347) | Group Chat worker startup: _DeadlockError via frozen_importlib | 9 | — |
| [#124807](https://github.com/NousResearch/hermes-agent/issues/124807) | Windows hermes update fails: WinError 5 deleting libcrypto DLL | 7 | — |
| [#111389](https://github.com/NousResearch/hermes-agent/issues/111389) | [Wave] state.db / WAL reliability — landing-evidence style | 5 | — |

**Analysis — Underlying Needs:**

1. **#97681 (Cross-gateway bot collaboration)** — This is the flagship feature request, reflecting strong community demand for Hermes bots to work together across machines and eventually across owners without losing control. The 33 comments indicate substantial design discussion still needed.

2. **#122167 (Desktop duplicate messages)** — Multiple duplicate rendering issues (#36763, #131775 also reported) suggest a systemic Desktop client bug, possibly in the display projection layer. This impacts user trust significantly.

3. **#124807 & #128827 (Windows update failures)** — Platform-specific Windows update issues are recurring, suggesting the Python version management on Windows needs hardening.

---

## 5. Bugs & Stability

### High Severity (P1) — Active

| Issue | Component | Description | Fix PR? |
|-------|-----------|-------------|---------|
| [#131851](https://github.com/NousResearch/hermes-agent/issues/131851) | agent, docker | Recurring FTS5 shadow table B-tree corruption after unclean container stop | — |
| [#127010](https://github.com/NousResearch/hermes-agent/issues/127010) | cli, sessions | Snapshot restore on macOS: post-update guard overwrites healthy state.db; OAuth token rollback | — |

### Medium Severity (P2) — Active

| Issue | Component | Description |
|-------|-----------|-------------|
| [#122167](https://github.com/NousResearch/hermes-agent/issues/122167) | desktop | Message disappears, assistant replies render twice (server-side projection bug) |
| [#131793](https://github.com/NousResearch/hermes-agent/issues/131793) | desktop | Inference chip stuck at "Checking inference" after gateway flap |
| [#118969](https://github.com/NousResearch/hermes-agent/issues/118969) | agent | Fallback persists impossible provider:model pair (xai + deepseek-v4-flash) |
| [#128827](https://github.com/NousResearch/hermes-agent/issues/128827) | cli, windows | Windows update fails rotating Python — orphaned DLL holds lock |
| [#124807](https://github.com/NousResearch/hermes-agent/issues/124807) | cli, windows | Windows hermes update fails: WinError 5 deleting libcrypto DLL |
| [#131822](https://github.com/NousResearch/hermes-agent/issues/131822) | tools, browser | Pidless agent-browser socket dir rm -rf'd without killing daemon — leaked Chrome pinned 7/10 cores for 3d10h |
| [#131862](https://github.com/NousResearch/hermes-agent/issues/131862) | cli | rebrand_text rewrites real-world strings into non-existent references |

### Platform-Specific Instability Recap
- **Windows:** 4 active P2 bugs (update failures, DLL locks, compatibility)
- **macOS:** 3 active bugs (snapshot restore, desktop duplicate messages)
- **Linux/Docker:** 1 P1 bug (FTS5 corruption on unclean stop)

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| Issue | Component | Request | Priority |
|-------|-----------|---------|----------|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | gateway, agent | Bots collaborate across gateways (cross-machine, cross-owner) | P2 |
| [#91030](https://github.com/NousResearch/hermes-agent/issues/91030) | desktop | Separate Projects and Sessions into independent sidebar sections | P3 |
| [#131814](https://github.com/NousResearch/hermes-agent/issues/131814) | tools, browser | Vault integration: handle Pydantic extra_forbidden for Bitwarden allowed_origins | P2 |

**Roadmap Signals:**
- **Cross-gateway collaboration (#97681)** is explicitly described as building "the foundation" for future multi-owner coordination — likely a strategic priority for upcoming releases
- **Desktop sidebar redesign (#91030)** indicates UX refinement is planned for the Desktop client
- The Wave initiative for **state.db/WAL reliability (#111389)** suggests backend stability work is ongoing

---

## 7. User Feedback Summary

### Pain Points Reported Today

1. **Windows Update Reliability** — Users frustrated by repeated `WinError 5` failures when updating Hermes on Windows; affects productivity during routine maintenance
2. **Desktop Message Rendering** — Duplicate assistant replies and disappearing messages undermine confidence in the Desktop client's session handling
3. **Provider/Model Fallback Logic** — Impossible provider:model pairs persisting after fallback confuses users about which model is actually running
4. **Memory/Resource Leaks** — The headless Chrome leak (#131822) caused 3 days of 70% CPU usage on a production machine — severe resource impact
5. **Kanban Data Loss** — Silent deletion of task rows on default board (#131844) is high-severity data integrity concern

### Satisfaction Signals
- **#97681** has 4 👍 reactions indicating strong community enthusiasm for the collaboration feature
- Active PR engagement (38 open, 12 closed today) shows maintainers are responsive

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Age | Priority | Status | Concern |
|-------|-----|----------|--------|---------|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | ~35 days | P2 | Open | Feature design still being discussed (33 comments) — needs maintainer synthesis |
| [#111389](https://github.com/NousResearch/hermes-agent/issues/111389) | ~18 days | P3 | Open | Wave initiative for state.db reliability — may need architectural review |
| [#91030](https://github.com/NousResearch/hermes-agent/issues/91030) | ~44 days | P3 | Open | Desktop UX enhancement — pending prioritization |

### Issues Needing Maintainer Attention

1. **#127010** (P1) — macOS snapshot restore bugs with security implications; no fix PR yet
2. **#131851** (P1) — FTS5 corruption after container stop; data integrity critical
3. **#131822** (P2) — Resource leak with severe CPU impact; root cause fix needed
4. **#128827** (P2) — Windows update edge case with locked DLLs; needs Windows-specific investigation

---

*Digest generated from GitHub data for 2026-10-03*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a structured project digest for QwenPaw based on the provided GitHub data. Let me analyze the data and create a comprehensive report in the requested format.

Let me organize the data:

**Issues (10 total, all open):**
1. #7997 - Feature: Message retraction/editing and workspace rollback in WebUI
2. #6281 - Mobile-friendly Web console
3. #2975 - Markdown rendering for user messages
4. #8073 - Bug: V2.2.2.beta4 Unable to access conversation page
5. #8077 - Bug: Qoder third-party agent custom models invisible/unusable
6. #8078 - Bug: Cross-session messages split into multiple pages
7. #8085 - truncation: surface finish_reason="length" when output is cut off
8. #8082 - docs(heartbeat): document silence semantics
9. #8081 - Feature: Add view_audio built-in tool
10. #8080 - Feature: Cross-instance Agent communication

**PRs (12 total):**
- Open: 5 (#8086, #8084, #8079, #8083, #7936)
- Closed: 7 (#7347, #6877, #7356, #7357, #7359, #6874, #7344)

Let me categorize and analyze:

**Today's Overview:**
- High activity: 10 issues and 12 PRs updated in 24h
- No new releases
- Mix of bug reports and feature requests

**Releases:** None

**Project Progress:**
- 7 PRs merged/closed, covering mobile drawer, window geometry, chat scroll lock, tool call visibility, media caps, MCP timeout, game-dev languages
- New PRs focus on mobile UI, prompt handling, app reload, audio tool

**Community Hot Topics:**


I see significant community engagement with 8 discussions drawing notable attention. The most active topics reveal diverse user needs: message editing, mobile console adaptation, and cross-instance communication. These discussions highlight complex user requirements around interface flexibility and system interoperability.

**Bugs & Stability:**
Critical issues include a conversation page access problem in the latest beta version, Qoder agent model visibility challenges, and cross-session message fragmentation. These bugs suggest potential architectural complexities in the application's multi-instance and agent interaction frameworks.

**Feature Requests & Roadmap:**
The feature requests demonstrate innovative thinking around core system enhancements. Key proposals include message retraction capabilities, Markdown rendering, and advanced audio understanding tools. Notably, the view_audio tool has already progressed to a pull request, indicating a proactive development approach.

The cross-instance agent communication request is particularly intriguing, reflecting sophisticated user requirements for distributed system interactions.</think>

# QwenPaw Project Digest — 2026-10-03

## 1. Today's Overview

QwenPaw demonstrates **high development activity** on October 3, 2026, with 10 issues and 12 pull requests updated in the last 24 hours. The project shows a healthy mix of bug fixing and feature development, though no new releases were published today. Community engagement remains strong, with several feature proposals addressing core UX improvements (mobile adaptation, message editing, cross-instance communication) alongside critical bug reports for the recent V2.2.2.beta4 release. Seven PRs were successfully merged/closed, advancing mobile UI refinements, window state persistence, and accessibility features.

---

## 2. Releases

No new releases today.

---

## 3. Project Progress

**Merged/Closed PRs (7 total):**

| PR | Author | Summary |
|---|---|---|
| [#7347](https://github.com/agentscope-ai/QwenPaw/pull/7347) | AaronZ345 | **fix: keep rich input caret visible** — Resolved scrolling issue where long multi-line prompts could hide the active input line below the composer viewport |
| [#6877](https://github.com/agentscope-ai/QwenPaw/pull/6877) | AaronZ345 | **feat(desktop): remember window geometry** — Persists Tauri desktop window position/size using official window-state plugin |
| [#7356](https://github.com/agentscope-ai/QwenPaw/pull/7356) | AaronZ345 | **feat(console): add chat scroll lock** — Allows users to scroll away from streaming responses without auto-following new content |
| [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) | AaronZ345 | **feat(chat): add tool call visibility toggle** — Users can now hide tool call cards to reduce noise in conversation views |
| [#7359](https://github.com/agentscope-ai/QwenPaw/pull/7359) | AaronZ345 | **feat(providers): expose per-media inline caps** — Adds provider-level image/video/audio caps with provider-specific defaults |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | AaronZ345 | **feat(mcp): add configurable tool call timeout** — Per-client MCP tool-call deadline defaulting to 300s, honoring longer values |
| [#7344](https://github.com/agentscope-ai/QwenPaw/pull/7344) | AaronZ345 | **feat(console): support game-dev file languages** — Added Monaco language support for C# scripts, shaders, Unity, Godot, and graphics workflow files |

**New Open PRs (5 total):**

| PR | Author | Summary |
|---|---|---|
| [#8086](https://github.com/agentscope-ai/QwenPaw/pull/8086) | LeafS825 | **feat(console): move settings navigation into a mobile drawer** — Addresses cramped navigation on screens ≤768px by relocating 21-section nav to a drawer |
| [#8084](https://github.com/agentscope-ai/QwenPaw/pull/8084) | LUOSENGWA | **fix(agents): refuse oversized prompts and surface empty model replies** — Handles context overflow by surfacing visible errors instead of silent failures |
| [#8079](https://github.com/agentscope-ai/QwenPaw/pull/8079) | LUOSENGWA | **fix(app): notify the room and cancel in-flight runs when reload drain timeout expires** — Fixes config change reload handling |
| [#8083](https://github.com/agentscope-ai/QwenPaw/pull/8083) | shuziP | **feat(tools): add view_audio tool for audio understanding** — Completes audio modality alongside existing view_image/view_video tools |
| [#7936](https://github.com/agentscope-ai/QwenPaw/pull/7936) | lihongyuan99 | **fix(i18n): translate the access-control username label for zh** — Adds missing Chinese localization |

---

## 4. Community Hot Topics

| Issue/PR | Title | Comments | Analysis |
|---|---|---|---|
| [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) | [Feature] Support message retraction/editing and workspace rollback in WebUI | 8 | **Highest engagement.** Users want to edit/retract sent messages with automatic conversation truncation and optional file snapshot rollback—a major UX improvement for long-running sessions |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | Web console mobile adaptation | 6 | Long-standing request for mobile-responsive console; PR [#8086](https://github.com/agentscope-ai/QwenPaw/pull/8086) addresses part of this |
| [#2975](https://github.com/agentscope-ai/QwenPaw/issues/2975) | Render user input as Markdown | 4 | Users expect markdown support for their own messages to match AI response formatting |
| [#8080](https://github.com/agentscope-ai/QwenPaw/issues/8080) | [Feature Request] Cross-instance Agent communication | 1 | Ambitious proposal for decentralized multi-machine agent collaboration—signals demand for distributed deployment |

---

## 5. Bugs & Stability

| Issue | Severity | Status | Notes |
|---|---|---|---|
| [#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073) | **High** | Open | V2.2.2.beta4 conversation page access error when LAN devices access local services—regression from V2.2.1 |
| [#8077](https://github.com/agentscope-ai/QwenPaw/issues/8077) | **High** | Open | Qoder third-party agent: custom models invisible/unusable + context-usage meter hidden (3 defects) |
| [#8078](https://github.com/agentscope-ai/QwenPaw/issues/8078) | **Medium** | Open | Cross-session messages registered as independent chats, causing UI fragmentation within same session |
| [#8085](https://github.com/agentscope-ai/QwenPaw/issues/8085) | **Medium** | Open | Output truncation drops `finish_reason="length"` silently—users cannot distinguish complete vs. cut-off responses |

*Fix PRs: [#8084](https://github.com/agentscope-ai/QwenPaw/pull/8084) addresses prompt overflow, [#8079](https://github.com/agentscope-ai/QwenPaw/pull/8079) addresses reload timeout.*

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood of Near-Term Inclusion |
|---|---|---|
| [#8081](https://github.com/agentscope-ai/QwenPaw/issues/8081) / [#8083](https://github.com/agentscope-ai/QwenPaw/pull/8083) | Add `view_audio` built-in tool | **High** — PR already open, follows existing view_image/view_video pattern |
| [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) | Message editing/retraction + workspace rollback | **Medium-High** — 8 comments, clear use case for interactive sessions |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | Mobile console adaptation | **Medium** — Long-standing, partially addressed by [#8086](https://github.com/agentscope-ai/QwenPaw/pull/8086) |
| [#8080](https://github.com/agentscope-ai/QwenPaw/issues/8080) | Cross-instance Agent communication | **Low** — Ambitious, requires significant architecture change |
| [#2975](https://github.com/agentscope-ai/QwenPaw/issues/2975) | Markdown rendering for user messages | **Medium** — Straightforward enhancement |

---

## 7. User Feedback Summary

**Pain Points Identified:**

1. **V2.2.2.beta4 regressions** — Users report broken conversation page access when LAN devices connect, indicating a networking/regression issue ([#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073))
2. **Third-party integration broken** — Qoder agent's custom models are unusable, blocking users with custom model setups ([#8077](https://github.com/agentscope-ai/QwenPaw/issues/8077))
3. **Silent failures** — Oversized prompts return empty responses without explanation; truncation goes unnoticed ([#8084](https://github.com/agentscope-ai/QwenPaw/pull/8084), [#8085](https://github.com/agentscope-ai/QwenPaw/issues/8085))
4. **Mobile exclusion** — Web console remains difficult to use on mobile devices despite growing mobile usage ([#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281))

**Positive Signals:**

- Strong appreciation for recent UX improvements: chat scroll lock, tool visibility toggle, window geometry memory
- Community actively proposes features that align with QwenPaw's multi-modal vision (audio understanding, markdown support)

---

## 8. Backlog Watch

| Issue/PR | Age | Status | Concern |
|---|---|---|---|
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | ~75 days | Open | Mobile console adaptation—requested since July, partially addressed but not resolved |
| [#2975](https://github.com/agentscope-ai/QwenPaw/issues/2975) | ~180 days | Open | Markdown for user messages—since April, moderate complexity |
| [#8082](https://github.com/agentscope-ai/QwenPaw/issues/8082) | 1 day | Open | Heartbeat documentation gaps—new but highlights incomplete docs |
| [#8080](https://github.com/agentscope-ai/QwenPaw/issues/8080) | 1 day | Open | Cross-instance communication—architecturally significant, needs maintainer scoping |

---

*Generated from GitHub data for 2026-10-03*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>Let me analyze this GitHub data for ZeroClaw and create a structured project digest for 2026-10-03.

First, let me understand what I'm working with:
- Issues: 50 updated in last 24h (47 open/active, 3 closed)
- PRs: 50 updated in last 24h (48 open, 2 merged/closed)
- Releases: 0 new releases

Now let me organize by the requested sections:

## 1. Today's Overview
Need to summarize overall project status, activity level, key developments.

## 2. Releases
No new releases, so I'll note that.

## 3. Project Progress
Looking at PRs:
- 48 open PRs, 2 merged/closed in last 24h
- Looking at the top PRs:
  - #11414: feat(web): add focused workspaces and Admin hub (XL size, high risk)
  - #11471: fix(runtime): preserve container launcher environment
  - #11265: feat(cli): zeroclaw user commands for roster password lifecycle
  - #11264: feat(security): verify roster passwords through a password auth provider
  - #11313: fix(cli): publish authorization edits from config set and config patch into the running daemon
  - #11469: fix(security): recognize the null device on every host
  - #11456: feat(tools): add opt-in subprocess memory watchdog
  - #11451: fix(secrets): protect Windows key files at creation
  - #11468: fix(providers): honor Ollama and llama.cpp thinking controls
  - #11467: feat(agent): add opt-in single-tool provider rounds
  
## 4. Community Hot Topics
Top issues by comment count reveal key discussions: #8692 on maintainer decision queue for RFCs has 15 comments, #11387 about zerocode directory regression has 5 comments, #7943 requesting realtime voice-host channel has 5 comments, #6916 on process-memory limits has 4 comments, and #11296 about llama.cpp URL issues has 4 comments.

## 5. Bugs & Stability
Several priority bugs are actively being addressed: #11387 shows zerocode ignoring its launch directory as a P1 regression, #6916 addresses process-memory limits in shell tools, #11296 involves llama.cpp URL handling, and #11336 covers plugin info problems. The #11369 Docker images issue has been resolved.

## 6. Feature Requests & Roadmap Signals
Major architectural work is underway around RFCs and design systems.

## 7. User Feedback Summary
Key pain points center on directory handling in ZeroCode, plugin configuration gaps, skill discovery limitations in skill bundles, and ZeroCode's clipboard functionality.

## 8. Backlog Watch
Items requiring maintainer attention include #11325 (verify named-pipe server for Windows authorization), #11254 (RFC: A2A protocol crate), and #11235 (RFC: Knowledge corpus RAG).</think>

# ZeroClaw Project Digest — 2026-10-03

## 1. Today's Overview

ZeroClaw continues to demonstrate high development velocity with **50 issues and 50 PRs updated in the last 24 hours**. The project is actively addressing critical stability issues for the upcoming v0.8.6 release while simultaneously advancing major architectural initiatives including identity/access security, provider routing enhancements, and a new A2A protocol crate. Two PRs were merged/closed, and no new releases were published today. The issue backlog shows strong maintainer engagement, with several P1 bugs actively in-progress and multiple RFCs progressing through the pipeline.

## 2. Releases

**No new releases** were published today. The most recent release information is not provided in this data snapshot.

## 3. Project Progress

The following significant PRs advanced today:

| PR | Title | Risk | Size |
|----|-------|------|------|
| [#11414](https://github.com/zeroclaw-labs/zeroclaw/pull/11414) | feat(web): add focused workspaces and Admin hub | High | XL |
| [#11471](https://github.com/zeroclaw-labs/zeroclaw/pull/11471) | fix(runtime): preserve container launcher environment | Medium | M |
| [#11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456) | feat(tools): add opt-in subprocess memory watchdog | Medium | L |
| [#11451](https://github.com/zeroclaw-labs/zeroclaw/pull/11451) | fix(secrets): protect Windows key files at creation | High | XL |
| [#11468](https://github.com/zeroclaw-labs/zeroclaw/pull/11468) | fix(providers): honor Ollama and llama.cpp thinking controls | Medium | M |
| [#11467](https://github.com/zeroclaw-labs/zeroclaw/pull/11467) | feat(agent): add opt-in single-tool provider rounds | High | XL |
| [#11469](https://github.com/zeroclaw-labs/zeroclaw/pull/11469) | fix(security): recognize the null device on every host | Low | S |
| [#11313](https://github.com/zeroclaw-labs/zeroclaw/pull/11313) | fix(cli): publish authorization edits into running daemon | High | XL |
| [#11265](https://github.com/zeroclaw-labs/zeroclaw/pull/11265) | feat(cli): zeroclaw user commands for roster password lifecycle | High | XL |

**2 PRs merged/closed** in the last 24 hours (per the summary data indicating 2 merged/closed out of 50 total PR updates).

## 4. Community Hot Topics

| Issue | Title | Comments | Focus |
|-------|-------|----------|-------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker]: Maintainer decision queue for RFCs and design issues | 15 | **Architecture governance** — Active queue tracking RFCs and design issues requiring maintainer/owner decisions |
| [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) | [Bug]: zerocode ignores its launch directory again (regression of #10609) | 5 | **CLI regression** — P1 issue: ZeroCode forces agent workspace as cwd instead of respecting launch directory |
| [#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) | [Feature]: Realtime voice-host channel (backend-agnostic WS client) | 5 | **Voice integration** — Request for backend-agnostic WebSocket voice host supporting CrispASR, Wyoming-aligned |
| [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) | feat: process-memory limits on shell/skill_tool subprocess execution | 4 | **Security/runtime** — P1: Add memory limits to prevent container OOM from unbounded subprocess allocation |
| [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) | [Bug]: llama.cpp and custom provider use wrong url/uri for models | 4 | **Provider configuration** — Custom provider URIs not correctly used for model routing |

**Analysis:** The most active discussion centers on **architecture governance** (#8692), indicating strong community engagement in RFC processes. The regression bug (#11387) is generating significant attention, reflecting user frustration with the recurring directory-handling issue.

## 5. Bugs & Stability

### Critical (P1) — In Progress

| Issue | Title | Severity | Status |
|-------|-------|----------|--------|
| [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) | zerocode ignores launch directory (regression) | S2 | In Progress |
| [#11369](https://github.com/zeroclaw-labs/zeroclaw/issues/11369) | Docker images exit at startup, DB strand risk | S1 | **Closed** |
| [#10225](https://github.com/zeroclaw-labs/zeroclaw/issues/10225) | ZeroCode RPC cannot reach configured channels | S1 | In Progress |

### High Priority (P2)

| Issue | Title | Severity | Fix PR? |
|-------|-------|----------|---------|
| [#11336](https://github.com/zeroclaw-labs/zeroclaw/issues/11336) | plugin info reports [loads] for runtime-refused plugins | S2 | — |
| [#11333](https://github.com/zeroclaw-labs/zeroclaw/issues/11333) | Skill review tools can't see skills in bundles | S2 | — |
| [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) | Skill review never runs for web/gateway turns | S2 | — |
| [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) | llama.cpp custom provider wrong URL | S3 | — |
| [#10700](https://github.com/zeroclaw-labs/zeroclaw/issues/10700) | Cost records use daemon-lifetime session ID | — | — |
| [#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028) | Ctrl+C on Windows causes force quit | S2 | — |

**Note:** Several bugs reference `release:v0.8.6`, indicating these are targeted for the next patch release.

## 6. Feature Requests & Roadmap Signals

### RFCs Under Development

| Issue | Title | Domain | Priority |
|-------|-------|--------|----------|
| [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | RFC: A2A protocol crate (zeroclaw-a2a) | Architecture | P2 |
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | RFC: Knowledge corpus — document retrieval (RAG) | Architecture | P2 |
| [#11002](https://github.com/zeroclaw-labs/zeroclaw/issues/11002) | Ship zeroclaw-gw as standalone IPC client | Architecture | P2 (blocked) |

### Notable Feature PRs

- **#11467**: Opt-in single-tool provider rounds — enables fine-grained model selection per tool
- **#11456**: Opt-in subprocess memory watchdog — addresses container OOM risks
- **#7943**: Realtime voice-host channel — backend-agnostic WebSocket client for voice

**Roadmap Prediction:** Given the active RFCs and security-focused PRs (#11265, #11264, #11313), the next minor releases (v0.8.6+) will likely emphasize **identity/access security hardening** and **provider routing improvements**, with RAG capabilities queued for v0.9.0.

## 7. User Feedback Summary

### Pain Points Identified

1. **Directory handling regressions**: Users frustrated by recurring issue (#11387) where ZeroCode ignores launch directory — described as "regression of #10609"
2. **Plugin configuration confusion** (#11336): CLI reports plugins as loaded but runtime refuses registration due to missing `config_schema`
3. **Skill bundle visibility** (#11333): Skills loaded via bundles not visible to skill review tools
4. **Windows stability** (#9028): Ctrl+C causes force quit with exit code 1073741510
5. **Clipboard functionality** (#11418): "Copy" button in ZeroCode UI not functioning

### Positive Signals

- Active development on security features (#11264, #11265, #11451) indicates responsiveness to enterprise use cases
- Container runtime improvements (#11471, #11456) address production deployment concerns

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Title | Status | Signals |
|-------|-------|--------|---------|
| [#11325](https://github.com/zeroclaw-labs/zeroclaw/issues/11325) | verify named-pipe server on Windows for live config edits | Open, needs-maintainer-review | P2, follow-up |
| [#11324](https://github.com/zeroclaw-labs/zeroclaw/issues/11324) | verify daemon identity in call_local | Open, needs-maintainer-review | P1, follow-up |
| [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | RFC: A2A protocol crate | Open | P2, type:rfc |
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | RFC: Knowledge corpus RAG | Open | P2, type:rfc |
| [#11002](https://github.com/zeroclaw-labs/zeroclaw/issues/11002) | Ship zeroclaw-gw as standalone | Open, blocked | P2, release:v0.9.0 |

### Long-Standing Issues (>90 days, still active)

- [#5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836): Cooperative cancellation for tool execution (since 2026-04-17)
- [#7743](https://github.com/zeroclaw-labs/zeroclaw/issues/7743): Approval forwarding for delegate handoffs (since 2026-06-15)
- [#9226](https://github.com/zeroclaw-labs/zeroclaw/issues/9226): Isolated memory seeding for eval harness (since 2026-07-21)

---

*Digest generated from ZeroClaw GitHub data — github.com/zeroclaw-labs/zeroclaw*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*