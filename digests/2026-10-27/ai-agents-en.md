# OpenClaw Ecosystem Digest 2026-10-27

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-10-27 01:35 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

<think>The user wants me to generate a structured English OpenClaw project digest for 2026-10-27 based on the GitHub data provided. Let me analyze the data and organize it into the requested sections.

Let me break down the data:

**Issues:**
- Total: 500 issues updated in last 24h
- Open/active: 400
- Closed: 100

**PRs:**
- Total: 500 PRs updated in last 24h
- Open: 183
- Merged/closed: 317

**Releases:** None

Now let me identify the key items:

**Top Issues by comment count:**
1. #143524 - SQLite WAL grows to 1.4-2.8 GB - 139 comments - CLOSED - P0
2. #160959 - Gateway blocks for minutes while capturing large external plugins - 57 comments - OPEN - P0
3. #159662 - prepared-model-catalog.worker.js memory leak - 26 comments - OPEN - P0
4. #170956 - Windows: slow startup, unclean plugin shutdown - 21 comments - OPEN - P0
5. #140010 - Sleep/resume on Windows - 16 comments - OPEN - P1
6. #172091 - Worker SQLite transaction stays open - 16 comments - CLOSED - P2

**Key PRs:**
- #185250 - fix(agents): stop runtime rebuild storms during auth cooldowns
- #185291 - test cleanup batch
- #185300 - fix: preserve lazy Codex consumers in export scans
- #185304 - test cleanup batch
- #185068 - feat(codex): explicitly discard unwanted generated image candidates
- #185157 - refactor: deslop gateway, channels and UI owner surfaces
- #184293 - fix(agents): keep compaction safety deadline on the monotonic clock


- #184994 - perf: keep creation routes from loading chat early
- #185301 - perf(agents): reuse unchanged Code Mode store replay

I'll focus on identifying critical infrastructure improvements and performance optimizations. The latest PRs highlight ongoing efforts to streamline gateway performance, reduce unnecessary runtime rebuilds, and optimize resource management. These changes suggest a systematic approach to improving OpenClaw's efficiency and reliability across different system components.

The project appears to be addressing complex technical challenges, particularly around memory management, runtime optimization, and Windows-specific performance issues. Continuous testing and refactoring indicate a mature development strategy focused on stability and performance.</think>

# OpenClaw Project Digest

**Date:** 2026-10-27

---

## 1. Today's Overview

OpenClaw remains a high-velocity project with **500 issues and 500 PRs updated in the last 24 hours**. The issue backlog shows 400 active items alongside 100 closures, while PR activity shows 183 open and 317 merged/closed—a healthy merge ratio. No new releases shipped today. Critical stability issues dominate the landscape: Windows reliability problems (startup, sleep/resume, plugin lifecycle), SQLite/WAL checkpoint failures, and memory leaks in the prepared-model catalog worker continue to generate significant discussion. The project is actively addressing performance through recent PRs focused on reducing runtime rebuild storms and optimizing creation routes.

---

## 2. Releases

**No new releases** were published in the last 24 hours.

---

## 3. Project Progress

The following notable PRs were merged or advanced today:

| PR | Author | Description | Impact |
|----|--------|-------------|--------|
| [#185250](https://github.com/openclaw/openclaw/pull/185250) | steipete | **fix(agents): stop runtime rebuild storms during auth cooldowns** | Prevents repeated prepared-runtime rebuilds when provider rate limits toggle auth cooldowns |
| [#184293](https://github.com/openclaw/openclaw/pull/184293) | SunnyShu0925 | **fix(agents): keep compaction safety deadline on the monotonic clock** | Fixes clock drift issues causing compaction to miscalculate deadlines |
| [#184994](https://github.com/openclaw/openclaw/pull/184994) | steipete | **perf: keep creation routes from loading chat early** | Reduces unnecessary code loading for Worktrees, Claws, and Roster routes |
| [#185301](https://github.com/openclaw/openclaw/pull/185301) | steipete | **perf(agents): reuse unchanged Code Mode store replay** | Eliminates redundant reconstruction of persisted values |
| [#185307](https://github.com/openclaw/openclaw/pull/185307) | steipete | **perf(gateway): retain prepared row facts across equivalent catalogs** | Prevents needless fact rebuilding when catalog policy is unchanged |
| [#185263](https://github.com/openclaw/openclaw/pull/185263) | hannesrudolph | **fix: avoid sign-in warnings for routine OAuth token expiry** | Distinguishes token expiry from unusable authentication |

**Test cleanup campaign:** Multiple PRs (#185291, #185304, #185268, #185279) consolidated redundant test fixtures, removing ~2,400 lines of low-value test code while preserving contract coverage.

---

## 4. Community Hot Topics

The most active discussions center on critical reliability and performance issues:

| Issue | Comments | Status | Theme |
|-------|----------|--------|-------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 139 | CLOSED | SQLite WAL grows to 1.4–2.8 GB in days despite wal_autocheckpoint=1000; blocks gateway startup (Windows) |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 57 | OPEN | Gateway blocks for minutes while capturing large external plugins (2026.9.6 regression) |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | 26 | OPEN | prepared-model-catalog.worker.js: unbounded memory leak, ~4-5 GB/h, provider-agnostic |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | 21 | OPEN | Windows: slow startup, unclean plugin shutdown, and schtasks permission error make restarts/updates unreliable |
| [#140010](https://github.com/openclaw/openclaw/issues/140010) | 16 | OPEN | Sleep/resume on Windows: UI/WebSocket reconnects can fail for 30-60s+ after wake |

**Analysis:** The top issue (#143524, 139 comments) indicates a severe SQLite checkpoint failure affecting Windows production environments, causing database bloat that blocks gateway startup entirely. Issue #160959 represents a 2026.9.6 regression where large plugin capture operations block the event loop for minutes. The underlying need across these discussions is **Windows platform reliability**—multiple P0 issues target Windows-specific failures in startup, shutdown, sleep/resume, and scheduled task management.

---

## 5. Bugs & Stability

**Critical (P0) Bugs Reported Today:**

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#170956](https://github.com/openclaw/openclaw/issues/170956) — Windows startup/shutdown reliability | P0, UX release blocker | OPEN | No |
| [#143524](https://github.com/openclaw/openclaw/issues/143524) — SQLite WAL unbounded growth | P0 | CLOSED | No (resolved) |
| [#166634](https://github.com/openclaw/openclaw/issues/166634) — Late reclamation commit checkpoint failure leaves agent unavailable | P0, UX release blocker | OPEN | No |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) — Gateway blocks on large plugin capture | P0 | OPEN | No |

**High Severity (P1) Bugs:**

| Issue | Severity | Status | Key Impact |
|-------|----------|--------|------------|
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | P0 | OPEN | Memory leak 4-5 GB/h in worker thread |
| [#181432](https://github.com/openclaw/openclaw/issues/181432) | P1 | OPEN | RSS memory ~1.9 GB baseline, SQLite timeouts |
| [#182476](https://github.com/openclaw/openclaw/issues/182476) | P1 | OPEN | Windows update repair fails with OPENCLAW_STATE_LEASE_LOST |
| [#169953](https://github.com/openclaw/openclaw/issues/169953) | P1 | OPEN | npm update always fails, hangs at config.auth |

**Note:** Several P0 issues carry `impact:ux-release-blocker` labels, indicating they may be blocking upcoming releases. The absence of fix PRs for most critical bugs suggests active investigation.

---

## 6. Feature Requests & Roadmap Signals

**Active Feature Discussions:**

| Issue | Priority | Status | Request |
|-------|----------|--------|---------|
| [#162164](https://github.com/openclaw/openclaw/issues/162164) | P2 | OPEN | Opt-in personal identity in iOS/macOS while preserving Shared owner |
| [#136271](https://github.com/openclaw/openclaw/issues/136271) | P2 | OPEN | msteams: resolve team SharePoint site dynamically for channel file uploads |
| [#112372](https://github.com/openclaw/openclaw/issues/112372) | P2 | OPEN | Add opt-in, origin-bound deferred completion to sessions_send |
| [#158800](https://github.com/openclaw/openclaw/issues/158800) | P2 | OPEN | Browse and fork prior channel-chat segments after /new in Control UI |
| [#161050](https://github.com/openclaw/openclaw/issues/161050) | P1 | OPEN | memory-pressure-aware admission for sessions_spawn / isolated cron runs |

**Roadmap Signals:** The active feature work on personal identity (#162164), SharePoint integration (#136271), and memory-pressure admission (#161050) suggests upcoming focus on **multi-user/multi-device scenarios** and **resource governance**. The deferred completion feature (#112372) indicates investment in **reliability for inter-agent messaging**.

---

## 7. User Feedback Summary

**Pain Points Identified from Active Issues:**

1. **Windows Platform Instability** — Multiple users report unreliable restarts, updates failing repeatedly, and slow startup times. Issue #170956 notes "pas na veel proberen" (only after many retries) for Windows restarts.

2. **Memory Bloat** — Users experiencing 1.9-4 GB RSS baseline memory increases after upgrades, with SQLite transaction timeouts causing degraded performance (#181432).

3. **Session/Message Loss** — Reports of message loss (#166634), hidden internal context dispatched as visible turns (#129314), and phantom user messages (#151962) indicate persistent state management issues.

4. **Token Waste** — Session context bloat (#67419) causes 20-30% token waste from bootstrap file re-injection on every turn.

5. **Update Failures** — Multiple reports of npm update processes failing (#169953, #168895, #182476), leaving users stuck on older versions.

**Satisfaction Signals:** The active test cleanup campaign and performance optimizations (#185250, #185301, #185307) demonstrate responsive engineering. Fixes for OAuth token expiry warnings (#185263) and UI rendering issues (#185264, #185229) show attention to user experience细节.

---

## 8. Backlog Watch

**Long-Unanswered High-Priority Issues:**

| Issue | Age | Priority | Status | Needed |
|-------|-----|----------|--------|--------|
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | ~6 months | P2 | OPEN | Product decision on session context optimization |
| [#126906](https://github.com/openclaw/openclaw/issues/126906) | ~2 months | P1 | OPEN | Product decision on memory persistence when write tool denied |
| [#118885](https://github.com/openclaw/openclaw/issues/118885) | ~3 months | P1 | OPEN | Fix for redundant SQLite integrity checks |
| [#128067](https://github.com/openclaw/openclaw/issues/128067) | ~2 months | P1 | OPEN | Field report with 6 reliability defect classes; needs triage |
| [#114414](https://github.com/openclaw/openclaw/issues/114414) | ~3 months | P3 | OPEN | Dated TODO sweep — overdue items in CI/CD workflows |

**Issues Needing Maintainer Review:** 50+ issues carry the `clawsweeper:needs-maintainer-review` label, indicating backlog pressure. The `clawsweeper:no-new-fix-pr` label appears on nearly all top issues, suggesting these bugs lack proposed fixes.

---

*Generated from OpenClaw GitHub data — 2026-10-27*

---

## Cross-Ecosystem Comparison

<think>The user wants me to create a cross-project comparison report for the four OpenClaw ecosystem projects (OpenClaw, Hermes Agent, QwenPaw, and ZeroClaw) based on the individual project digests I just generated. Let me analyze the data from each project and create a comprehensive cross-project report.

Let me extract key data points:

**OpenClaw:**
- Issues (24h): 500 (400 open, 100 closed)
- PRs (24h): 500 (183 open, 317 merged/closed)
- Releases: None
- Top issues: SQLite WAL growth, Windows reliability, memory leaks
- Community: High velocity, major focus on Windows platform stability

**Hermes Agent:**
- Issues (24h): 50 (49 open, 1 closed)
- PRs (24h): 50 (45 open, 5 merged/closed)
- Releases: None
- Top issues: Discord automation, session resumption, lifecycle guard
- Community: Active Discord integration issues, cross-platform desktop problems

**QwenPaw:**
- Issues (24h): 24 (17 open, 7 closed)
- PRs (24h): 48 (33 open, 15 merged/closed)
- Releases: None
- Top issues: MCP discovery, embedding failures, CRLF handling
- Community: High PR merge ratio, Linux desktop parity focus

**ZeroClaw:**
- Issues (24h): 23 (all open)
- PRs (24h): 29 (28 open, 1 merged)
- Releases: None (preparing v0.9.0)
- Top issues: Security (9 identity-access issues), context management, configuration debt
- Community: Security-focused, v0.9.0 roadmap clear

Now let me create the comparison report with the requested sections.</think>

# Cross-Project Comparison: OpenClaw Ecosystem

## 1. Ecosystem Overview

The personal AI assistant and agent ecosystem represented by these four projects reflects a maturing but highly fragmented landscape. OpenClaw, Hermes Agent, QwenPaw, and ZeroClaw each pursue distinct architectural philosophies—from OpenClaw's general-purpose agent framework to Hermes Agent's Discord-centric automation, QwenPaw's Tauri-based desktop application, and ZeroClaw's security-hardened enterprise platform. Common themes across all projects include persistent challenges around **context management and memory**, **platform reliability** (especially Windows and Linux), **multi-protocol integrations** (MCP, OIDC, Discord), and **session/state durability**. No project shipped a release in the past 24 hours, indicating a period of active development rather than distribution. The aggregate activity (597 issues + 627 PRs updated across projects in 24 hours) signals healthy ongoing engineering investment.

---

## 2. Activity Comparison

| Metric | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|--------|----------|-------------|---------|----------|
| **Issues (24h)** | 500 (400 open, 100 closed) | 50 (49 open, 1 closed) | 24 (17 open, 7 closed) | 23 (all open) |
| **PRs (24h)** | 500 (183 open, 317 M/C) | 50 (45 open, 5 M/C) | 48 (33 open, 15 M/C) | 29 (28 open, 1 M/C) |
| **Releases (24h)** | 0 | 0 | 0 | 0 (preparing v0.9.0) |
| **Merge Ratio** | 63.4% | 10.0% | 31.3% | 3.4% |
| **Top Issue Theme** | Windows reliability, SQLite, memory | Discord automation, session resumption | MCP integration, embeddings | Security, context management |
| **Project Age Signal** | High velocity, mature | Active development | Maturing, stable API | Pre-release (v0.9.0) |

**Health Assessment:**

- **OpenClaw**: Strong merge ratio (63.4%), high volume—indicates active maintenance and responsive contributors.
- **QwenPaw**: Healthy PR merge ratio (31.3%) with substantial closure activity—suggests a project in steady-state with regular releases.
- **Hermes Agent**: Low merge ratio (10%) but high PR volume—likely a burst of new PRs awaiting review rather than stagnation.
- **ZeroClaw**: Very low merge ratio (3.4%)—most PRs are new or under review; v0.9.0 preparation phase.

---

## 3. OpenClaw's Position

### Advantages vs Peers

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **Community Scale** | Largest (500 issues/PRs daily) | Medium (50 daily) | Medium (24/48 daily) | Small (23/29 daily) |
| **Platform Breadth** | Windows, Linux, macOS | Desktop, cloud | Desktop (Tauri) | Enterprise/cloud |
| **Integration Depth** | Broad (codex, agents, gateway) | Narrow (Discord focus) | Moderate | Security-focused |
| **Release Velocity** | Frequent | Periodic | Steady | Pre-release |

### Technical Approach Differences

- **OpenClaw** employs a multi-process architecture (gateway, agent, runtime) with SQLite persistence and a plugin-first ecosystem. Its focus on **prepared-runtime** and **lazy Codex consumers** reflects an optimization-first philosophy.
- **Hermes Agent** optimizes for **event-driven Discord automation** with lifecycle guards and admission control—best suited for community management use cases.
- **QwenPaw** builds a **single-binary desktop application** using Tauri, prioritizing local-first UX with scroll history and embedding-based memory.
- **ZeroClaw** prioritizes **security hardening** (scoped principals, OIDC, RPC denial reasons) over feature velocity—a deliberate enterprise positioning.

### Community Size

OpenClaw's 500 daily updates dwarf the others, suggesting either a larger contributor base or higher per-user activity. Hermes Agent and QwenPaw show comparable mid-tier activity. ZeroClaw's lower volume but security-focused contribution pattern indicates a specialized, potentially enterprise-driven community.

---

## 4. Shared Technical Focus Areas

### Requirements Emerging Across Multiple Projects

| Focus Area | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|------------|----------|--------------|---------|----------|
| **Memory/Context Management** | ✓ | ✓ | ✓ | ✓ |
| **Windows Platform Reliability** | ✓ | — | ✓ | — |
| **Linux Desktop Parity** | — | — | ✓ | — |
| **MCP Protocol Support** | — | ✓ | ✓ | — |
| **Session Resumption** | ✓ | ✓ | — | — |
| **Scheduled/Cron Tasks** | — | ✓ | ✓ | — |
| **Multi-Provider Embeddings** | — | — | ✓ | — |
| **Security/Hardening** | — | — | — | ✓ |
| **OIDC/Authentication** | — | — | ✓ | ✓ |
| **Scroll/History Management** | — | — | ✓ | — |

### Specific Shared Needs

1. **Memory/Context Optimization**: All four projects report issues related to context bloat, token waste, and memory management. OpenClaw users report 20-30% token waste from repeated bootstrap injection. QwenPaw addressed 75% database bloat via scroll aging. ZeroClaw users request proactive token-budget compaction. Hermes Agent faces memory leaks in workers.

2. **Platform Reliability**: OpenClaw and QwenPaw both prioritize Windows fixes (startup, shutdown, encoding). QwenPaw explicitly targets Linux desktop parity.

3. **Protocol Integration**: MCP (Model Context Protocol) appears as a pain point in both Hermes Agent and QwenPaw—discovery failures, config UI issues, and web-research examples need work.

4. **Cron/Scheduled Execution**: Hermes Agent and QwenPaw both have active cron-related issues (duplicate scheduling, thinking_level support).

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **Primary Target Users** | Developers, power users | Community managers, Discord server operators | End-users seeking desktop AI assistant | Enterprise security teams |
| **Architecture Style** | Multi-process (gateway + agent) | Event-driven, lifecycle-managed | Single-binary Tauri app | RPC-centric, scoped principals |
| **Key Differentiator** | Prepared-runtime, lazy loading | Discord automation, admission control | Desktop UX, scroll history | Security hardening, OIDC |
| **Release Model** | Rolling, frequent | Rolling, periodic | Steady releases | Versioned (v0.9.0 imminent) |
| **Plugin Model** | Codex, agents, gateway | Subagent lifecycle, MCP | Skills, nested directories | Scoped principals, SOPs |

**Strategic Positioning:**

- **OpenClaw** = General-purpose agent framework with depth in runtime optimization
- **Hermes Agent** = Niche automation for Discord/messaging platforms
- **QwenPaw** = Desktop-first personal AI with local memory and file handling
- **ZeroClaw** = Enterprise-focused with security as the primary selling point

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Project | Velocity Signal |
|------|---------|-----------------|
| **Rapid Iteration** | OpenClaw | 500 updates/day, 63% merge ratio, active regression fixes |
| **Active Development** | Hermes Agent | 50 updates/day, high issue-to-PR ratio,Discord focus |
| **Maturing/Stable** | QwenPaw | 24/48 balance, 31% merge ratio, Linux parity underway |
| **Pre-Stable** | ZeroClaw | 23/29 focus on v0.9.0, security hardening phase |

### Which Projects Are Stabilizing?

- **QwenPaw** shows signs of API and feature stability—no major breaking changes in recent PRs; focus shifts to parity (Linux) and UX polish.
- **OpenClaw** is still in high-churn maintenance with frequent regressions (2026.9.6 memory leak, SQLite checkpoint failures), indicating active feature development rather than stabilization.
- **ZeroClaw** is pre-release—v0.9.0 will be a key maturity inflection point.

### Which Are Rapidly Iterating?

- **OpenClaw** demonstrates the highest velocity, likely due to a larger contributor base and broader scope.
- **Hermes Agent** is actively iterating on Discord-specific reliability (admission conflicts, session resumption).

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

| Trend | Evidence | Projects |
|-------|----------|----------|
| **Memory/Context as Primary Cost Driver** | All four projects discuss token waste, context bloat, and proactive compaction | All |
| **Desktop App Consolidation** | QwenPaw's Tauri push, ZeroClaw's scoped dashboard, OpenClaw's desktop reliability focus | OpenClaw, QwenPaw, ZeroClaw |
| **MCP as Integration Standard** | Multiple projects building MCP support, documentation, fallbacks | Hermes Agent, QwenPaw |
| **Security Hardening** | ZeroClaw's 9 identity-access issues, scoped principals, OIDC | ZeroClaw, QwenPaw |
| **Multi-Provider Resilience** | Embedding fallbacks, vision fallback to auto, model metadata fixes | OpenClaw, QwenPaw |
| **Cross-Platform Inconsistencies** | Windows startup, Linux desktop, GNOME tray, HDR rendering | OpenClaw, QwenPaw |
| **Scheduled Task Reliability** | Cron duplicate scheduling, thinking_level control, wake management | Hermes Agent, QwenPaw |
| **Plugin Ecosystem Maturity** | Theme extension points, skill directories, scoped tools | OpenClaw, Hermes Agent, QwenPaw |

### Value for AI Agent Developers

1. **Memory management is unsolved**: No project has fully addressed token-budget-driven context compaction. This represents an opportunity for differentiated tooling or methodology contributions.

2. **Platform reliability remains a bottleneck**: Windows issues dominate OpenClaw; cross-platform desktop bugs affect QwenPaw. Teams building production agents should budget significant integration testing time.

3. **MCP is gaining traction but immature**: Discovery failures and config UI issues suggest the protocol is still maturing. Early adopters should expect friction.

4. **Security is becoming first-class**: ZeroClaw's scoped principals and RPC denial reasons reflect growing enterprise requirements. Even non-enterprise projects (OpenClaw, QwenPaw) are adding OIDC and authentication flows.

5. **Discord as an automation platform is viable but complex**: Hermes Agent's persistent admission conflicts suggest the Discord API introduces unique challenges (event loop blocking, rate limits, thread management) that require specialized handling.

---

*Cross-project analysis generated from 2026-10-27 GitHub data for OpenClaw, Hermes Agent, QwenPaw, and ZeroClaw.*

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to generate a structured project digest for the Hermes Agent project based on the provided GitHub data. Let me analyze the data and create the requested sections.

Let me organize the information:

**Data Overview:**
- Issues updated in last 24h: 50 (open/active: 49, closed: 1)
- PRs updated in last 24h: 50 (open: 45, merged/closed: 5)
- New releases: 0

**Latest Releases:** None

**Latest Issues (30 items shown):**
- #139818 - Remote-backend desktop sessions unresumable (22 comments)
- #105758 - Lifecycle guard false-positive (15 comments)
- #142461 - Discord automation wake issues (10 comments)
- #133212 - Feature: subagent_lifecycle v1.1 (8 comments)
- #143720 - Discord thread process-completion wake refused (6 comments)
- #141878 - Cross-process plugin activation 401 (5 comments)
- #143845 - Dashboard 404 on cron session deletion (4 comments)
- #119805 - QQBot group messaging issues (4 comments)
- #119529 - web_extract fails on fresh installs (4 comments)
- #145261 - Watch-pattern completion injections refused (4 comments)
- #145286 - session.create policy refusal issues (3 comments)
- #123923 - Anthropic thinking blocks issue (3 comments)
- #143653 - chat -q from kanban/cron worker fails (3 comments)
- #145063 - tool-call args drop fields (2 comments)
- #140633 - Desktop HDR rendering issue (2 comments)
- #144438 - ACP session/list empty (2 comments)
- #144560 - gateway crash-loops without aiohttp (2 comments)


- #145314 - quiet cron leaves empty session (1 comment)
- #145315 - Webhook cron_job deadlock (1 comment)
- #145313 - Plugin catalog feature (1 comment, closed)
- #136614 - Kanban notify subscriptions feature (1 comment)
- #145306 - skill-authoring guidance bug (1 comment)
- #145304 - ascii-video edge mapping bug (1 comment)
- #145308 - clarify message_agent never renders (1 comment)
- #145292 - MCP transport teardown issue (1 comment)
- #145282 - GNOME screen lock tray icon

I'm seeing several categories emerge from the issue list. There are a handful of Discord-related problems affecting automation and thread handling, along with some cron job issues causing empty sessions or deadlocks. The desktop application has HDR rendering and tray icon problems on Linux, while ACP sessions aren't displaying properly. There's also an MCP transport issue and a feature request around plugin catalog management. The remaining issues seem to involve workflow complications and broken skill-related features.

Looking at the pull requests, most are currently open with no comments yet. Several are bug fixes spanning the agent, gateway, and plugin components, along with some feature additions for kanban and delegation capabilities. There's also a documentation update for local TTS optimization and a security fix related to webapp functionality.</think>

# Hermes Agent Project Digest — 2026-10-27

## 1. Today's Overview

Hermes Agent shows high activity today with 50 issues and 50 PRs updated in the last 24 hours. The project is in a state of active maintenance with numerous bug fixes progressing through PRs, particularly around Discord automation, session management, and cross-platform desktop issues. No new releases were published. The issue backlog is substantial (49 open), but the PR activity indicates active development response. Critical areas of focus include Discord thread admission conflicts, session resumption failures, and MCP transport stability.

---

## 2. Releases

**No new releases today.** The latest tagged release remains `v0.22.5` (referenced across multiple issues).

---

## 3. Project Progress

| PR | Title | Status |
|----|-------|--------|
| [#145317](https://github.com/NousResearch/hermes-agent/pull/145317) | feat(kanban): orchestrators can reclaim a running card | OPEN |
| [#145316](https://github.com/NousResearch/hermes-agent/pull/145316) | feat(delegation): look up a finished delegation by id | OPEN |
| [#145312](https://github.com/NousResearch/hermes-agent/pull/145312) | feat(mattermost): respond freely in threads where the bot was @mentioned | OPEN |
| [#145311](https://github.com/NousResearch/hermes-agent/pull/145311) | Google Workspace skill can check people's free/busy for scheduling | OPEN |
| [#145310](https://github.com/NousResearch/hermes-agent/pull/145310) | fix(a2a): refuse browser-originated and foreign-Host requests in no-token mode | OPEN |
| [#145309](https://github.com/NousResearch/hermes-agent/pull/145309) | fix(model-metadata): stop reporting SGLang endpoints as ollama | OPEN |
| [#145307](https://github.com/NousResearch/hermes-agent/pull/145307) | fix(agent): vision fallback to auto stops resurrecting the unavailable provider's pinned model | OPEN |
| [#145306](https://github.com/NousResearch/hermes-agent/pull/145306) | (Docs fix for skill-authoring guidance) | OPEN |
| [#145305](https://github.com/NousResearch/hermes-agent/pull/145305) | fix(subagent-lifecycle): keep the native summary, spill fields and usage in result() | OPEN |
| [#145107](https://github.com/NousResearch/hermes-agent/pull/145107) | fix(webapp): report a browser-blocked pop-out within seconds | OPEN |
| [#145106](https://github.com/NousResearch/hermes-agent/pull/145106) | fix(webapp): plain-HTTP sends and copies, browser edit menus, rebuild-safe chunks | CLOSED |
| [#75981](https://github.com/NousResearch/hermes-agent/pull/75981) | fix(projects): reject create when primary_path already owns a project | CLOSED |
| [#41043](https://github.com/NousResearch/hermes-agent/pull/41043) | fix(cli): bust update-check cache when local HEAD moves | CLOSED |

**Key Advances:**
- **Kanban orchestration**: New feature allowing orchestrator agents to reclaim running cards (#145317)
- **Delegation lookup**: Finished delegations can now be retrieved by ID (#145316)
- **Security**: A2A plugin now properly rejects browser-originated requests in no-token mode (#145310)
- **Model metadata**: SGLang endpoints no longer misreported as Ollama (#145309)
- **Vision fallback**: Fixed bug where unavailable provider's pinned model was resurrected in fallbacks (#145307)

---

## 4. Community Hot Topics

### Most Active Issues

| Issue | Title | Comments | Reactions |
|-------|-------|----------|-----------|
| [#139818](https://github.com/NousResearch/hermes-agent/issues/139818) | Remote-backend desktop sessions are unresumable — session.resume fails with not_found | 22 | 👍 1 |
| [#105758](https://github.com/NousResearch/hermes-agent/issues/105758) | Lifecycle guard false-positive blocks Node.js CLIs after Sep 3 scan-budget commits | 15 | — |
| [#142461](https://github.com/NousResearch/hermes-agent/issues/142461) | Automation wakes into auto-created Discord threads are refused admission_conflict forever | 10 | 👍 6 |
| [#133212](https://github.com/NousResearch/hermes-agent/issues/133212) | [Feature]: subagent_lifecycle v1.1 for plugin orchestrators | 8 | — |
| [#143720](https://github.com/NousResearch/hermes-agent/issues/143720) | Discord thread process-completion wake refused admission_conflict every 60s forever | 6 | — |

**Analysis:**
- **Discord integration** is a major pain point: three of the top five issues relate to Discord thread automation, admission conflicts, and process-completion wakes. Users are experiencing persistent event loop issues causing 2,641+ refusals in single days (#145261).
- **Remote session management**: Desktop sessions connected to remote backends cannot be resumed after the hosting process restarts — a significant usability blocker for distributed deployments.
- **Lifecycle guard**: False positives blocking legitimate Node.js CLI tools indicates overly aggressive security scanning.
- **Plugin orchestration**: Strong interest in subagent_lifecycle v1.1 features (steer, host-isolation transport), suggesting active plugin ecosystem growth.

---

## 5. Bugs & Stability

### Critical (P2) Bugs

| Issue | Component | Description | Fix PR? |
|-------|-----------|-------------|---------|
| [#139818](https://github.com/NousResearch/hermes-agent/issues/139818) | gateway, sessions | Remote-backend desktop sessions unresumable after process restart | — |
| [#142461](https://github.com/NousResearch/hermes-agent/issues/142461) | gateway, Discord | Auto-created Discord thread wake refused indefinitely (admission_conflict) | — |
| [#143720](https://github.com/NousResearch/hermes-agent/issues/143720) | gateway, Discord | Process-completion watch refuses every 60s forever; attempt cap never fires | — |
| [#145261](https://github.com/NousResearch/hermes-agent/issues/145261) | gateway, Discord | Watch-pattern completion injections always refused (2,641 occurrences in one day) | — |
| [#141878](https://github.com/NousResearch/hermes-agent/issues/141878) | cli, dashboard | Cross-process plugin activation returns 401 on login-gated dashboards | — |
| [#119805](https://github.com/NousResearch/hermes-agent/issues/119805) | gateway, QQBot | Group messaging fails after restart until inbound traffic (400 用户/群已注销) | — |
| [#119529](https://github.com/NousResearch/hermes-agent/issues/119529) | tools, web | web_extract fails on fresh installs — autodetect picks search-only ddgs | — |
| [#144560](https://github.com/NousResearch/hermes-agent/issues/144560) | gateway, webhook | Gateway crash-loops when aiohttp absent (66 annotation sites) | — |
| [#145298](https://github.com/NousResearch/hermes-agent/issues/145298) | gateway, desktop | Desktop file drop on messaging-platform sessions fails with permission_denied | — |
| [#145292](https://github.com/NousResearch/hermes-agent/issues/145292) | tools, MCP | MCP transport teardown never finishes, holds server run loop forever | — |
| [#123923](https://github.com/NousResearch/hermes-agent/issues/123923) | agent, Anthropic | Anthropic heartbeat continuation duplicates thinking blocks | — |

### Notable P3/Regession Issues

- **Desktop HDR rendering** (#140633): UI washed out on KDE Plasma Wayland with HDR enabled
- **GNOME tray icon** (#145282): Tray icon disappears after screen lock/unlock
- **Cron quiet mode** (#145314): Empty sessions left behind permanently

**Severity Assessment**: Discord-related bugs represent the most severe stability impact, with users reporting thousands of admission conflicts daily. Session resumption failures affect production deployments with remote backends.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Description | Priority |
|-------|-------------|----------|
| [#133212](https://github.com/NousResearch/hermes-agent/issues/133212) | subagent_lifecycle v1.1: steer, host-isolation transport, effort/route/follow-up on facade | P2 |
| [#136614](https://github.com/NousResearch/hermes-agent/issues/136614) | Kanban notify subscriptions: choose which event kinds wake the agent | P3 |
| [#145313](https://github.com/NousResearch/hermes-agent/issues/145313) | Plugin catalog: supported way to reuse existing Composio user credential | P3 |
| [#85041](https://github.com/NousResearch/hermes-agent/pull/85041) | docs(skills): local TTS optimization playbook — MLX parallel engine | P3 (docs) |

**Roadmap Signals:**
- **Kanban/Automation improvements**: Strong feature momentum (reclaim running cards #145317, notify subscriptions #136614) suggests Kanban orchestration is a priority area.
- **Plugin isolation**: subagent_lifecycle v1.1 indicates continued investment in secure multi-tenant plugin architectures.
- **Delegation UX**: Lookup by ID (#145316) improves debuggability of background delegation tasks.

---

## 7. User Feedback Summary

### Pain Points

1. **Discord Automation Reliability**: Users express frustration with "admission_conflict" errors firing continuously (2,641 times/day per #145261). The attempt cap "never fires" and "notify-mode=off has no effect" indicates a perceived lack of recourse.

2. **Session Resumability**: Remote desktop sessions becoming unresumable after host restart is described as a critical blocker for distributed workflows.

3. **Fresh Install DX**: web_extract failing immediately on fresh installs due to autodetect selecting an incompatible backend creates poor out-of-box experience.

4. **Cross-Platform Desktop Inconsistency**: Desktop app behaves differently across platforms (HDR issues on Linux, tray icon on GNOME, file drops on messaging platforms all failing).

### Positive Signals

- Feature requests around Kanban (#145317) and Mattermost thread response (#145312) indicate active use of automation workflows.
- Google Workspace skill expansion (#145311) shows demand for productivity integrations.

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Age | Status | Concern |
|-------|-----|--------|---------|
| [#105758](https://github.com/NousResearch/hermes-agent/issues/105758) | ~7 weeks | OPEN | Lifecycle guard false-positive — needs decision on scanning approach |
| [#119805](https://github.com/NousResearch/hermes-agent/issues/119805) | ~5 weeks | OPEN | QQBot group messaging — significant platform-specific gap |
| [#119529](https://github.com/NousResearch/hermes-agent/issues/119529) | ~5 weeks | OPEN | Fresh install web_extract failure — DX regression |
| [#123923](https://github.com/NousResearch/hermes-agent/issues/123923) | ~4 weeks | OPEN | Anthropic thinking blocks duplication — affects production |
| [#94983](https://github.com/NousResearch/hermes-agent/pull/94983) | ~2 months | OPEN | Context engines compaction authority — needs decision |

### PRs Requiring Maintainer Attention

| PR | Status | Notes |
|----|--------|-------|
| [#131461](https://github.com/NousResearch/hermes-agent/pull/131461) | OPEN | Fix approvals: two bugs bypassing/blocking HITL — CI needs maintainer approval to run |
| [#31734](https://github.com/NousResearch/hermes-agent/pull/31734) | OPEN | System prefill folding fix — 5+ months old, addresses compatibility issue |

**Backlog Concern**: Several P2 bugs are aging without resolution (QQBot platform issues, fresh-install DX regression, Anthropic provider bugs). The approvals fix PR (#131461) requiring manual CI activation may indicate process friction.

---

*Generated from Hermes Agent issue/PR data — 2026-10-27*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a structured English QwenPaw project digest for 2026-10-27 based on the provided GitHub data. Let me analyze the data and create the sections as requested.

Let me organize the information:

**Data Overview:**
- Issues updated in last 24h: 24 (open/active: 17, closed: 7)
- PRs updated in last 24h: 48 (open: 33, merged/closed: 15)
- New releases: 0

**Latest Issues (24 total)** - I need to identify the most significant ones:
- #8071 [OPEN] Feature: Plugin-facing theme extension point
- #8162 [CLOSED] Bug: OpenAI Responses API streaming empty response
- #8040 [OPEN] Bug: embedding reindex incomplete
- #7476 [CLOSED] Bug: cron task duplicate scheduling
- #8270 [CLOSED] Bug: Windows ZIP encoding garbled
- #8312 [OPEN] Bug: Context control failure
- #8424 [OPEN] Bug: MCP discover returns 404
- #8276 [OPEN] Bug: ReMe reranker accepts empty api_key
- #8279 [OPEN] Bug: Long-lived ReMe watchers exhaust AnyIO
- #8405 [OPEN] Bug: MCP config popup can't close
- #8123 [OPEN] Bug: Daily Paper fails with truncated output
- #4946 [CLOSED] Bug: Plugin import failure blocks startup
- #8417 [OPEN] Bug: Context compression 400 failure
- #8415 [OPEN] Bug: edit_file converts CRLF to LF
- #8425 [OPEN] Bug: Mail monitor name field issue
- #7912 [OPEN] Docs: MCP web-research example


- #8442 [OPEN] Feature: Linux desktop parity
- #8440 [OPEN] Bug: cancellable_wait leaves task running
- #8439 [OPEN] Feature: support thinking_level in JobRuntimeSpec
- #8435 [OPEN] Bug: LLM stream hangs
- #8429 [CLOSED] feat: thinking_level in JobRuntimeSpec
- #8286 [CLOSED] Bug: Thinking slider visual issue
- #8333 [CLOSED] Bug: source-group headers overlap

**Latest Pull Requests (48 total)**

Several PRs are currently open. The utils fix for atomic temp file basenames (#8446) is a small XS change addressing filename length issues. An MCP fallback fix (#8445) handles cases where discover returns HTTP 404 and -32601. Desktop packaging improvements for Linux are in progress (#8444), along with support for nested skill directories (#8178). A larger effort involves redesigning the SDK and app control plane (#7874), while scroll aging for tool_result blocks (#8443) addresses data retention.

Recent PRs include PowerContext memory support (#8376), inline media bounds (#8231), market install provenance (#8231), and Tauri fixes (#8033). Skills pool downloads now run in worker threads (#8027), auto-memory-recall payloads are no longer leaked to channels (#7835), and there's a fix for healthy embedding vectors (#8062). Additional work covers owned task cancellation (#8431), local Whisper SDK conversion (#8431), and channel extraction into plugins (#8187). OpenAI provider output recovery (#8165) and ReMeLight memory model separation (#7719) are also in progress, with ChatGPT subscription sign-in support (#8437).</think>

# QwenPaw Project Digest — 2026-10-27

## 1. Today's Overview

QwenPaw shows high development activity today with **24 Issues** and **48 Pull Requests** updated in the last 24 hours. The project closed 7 issues and 15 PRs (merged/closed), indicating active maintenance. No new releases were published today. The issue queue is predominantly composed of bug reports (approximately 17 open issues), with several high-impact items including MCP protocol negotiation problems, cron scheduling bugs, and memory management concerns. The PR activity demonstrates continued progress on desktop parity (Linux packaging), memory/embedding improvements, and channel isolation into plugins.

---

## 2. Releases

**No new releases** were published in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs (15 total)

| PR | Title | Size | Status |
|----|-------|------|--------|
| #7923 | feat(scroll): age out tool_result blocks after blocks_retention_days | — | Closed |
| #8165 | fix(providers): recover Responses output sent only on terminal event | M | Closed |
| #8062 | fix(memory): keep healthy embedding vectors when one chunk is over limit | L | Closed |
| #8429 | feat(cron): support thinking_level in JobRuntimeSpec | — | Closed |
| #8286 | Bug: Thinking strength slider has misleading fill | — | Closed |
| #8333 | Bug: source-group headers overlap first sidebar conversation | — | Closed |

**Key Advancements:**

- **Scroll History Optimization** (#7923, #8443): The scroll system now ages out `tool_result` blocks independently from searchable text, addressing ~75% database bloat on production instances. This resolves a major storage concern for long-running deployments.
- **OpenAI Responses API Fix** (#8165): Fixed streaming parser to handle providers that send complete output only in the terminal `response.completed` event rather than incremental deltas.
- **Cron Thinking Level** (#8429): Timer tasks can now independently control `thinking_level` (off/inherit/enabled), enabling cost savings for pipeline-style tasks without creating separate agents.

---

## 4. Community Hot Topics

### Most Active Issues by Discussion

| Issue | Title | Comments | Status |
|-------|-------|----------|--------|
| #8071 | [Feature] Plugin-facing theme extension point | 12 | OPEN |
| #8162 | [Bug] OpenAI Responses API streaming empty response | 8 | CLOSED |
| #8040 | [Bug] embedding reindex incomplete: N chunks failed | 6 | OPEN |
| #7476 | [Bug] cron task duplicate scheduling | 5 | CLOSED |
| #8270 | [Bug] Windows ZIP encoding garbled | 4 | CLOSED |

### Analysis

- **Theme Extension (#8071)** leads discussion with 12 comments. Plugin authors seek deeper theme customization beyond the single `colorPrimary` knob—users can already customize palettes, but plugins cannot. This signals demand for a more mature plugin ecosystem.
- **Embedding Reindex (#8040)** shows 6 comments and highlights a critical reliability issue: when a single CJK chunk exceeds provider token limits, the entire batch silently drops, producing false "success" logs.
- **Cron Duplicate Scheduling (#7476)** was resolved but generated significant discussion around cron misfire handling—demonstrating user reliance on scheduled tasks for production workflows.

---

## 5. Bugs & Stability

### Critical/Open Bugs (Ranked by Severity)

| Issue | Severity | Description | Fix PR |
|-------|----------|-------------|--------|
| **#8424** | High | MCP discover returns HTTP 404 + -32601 causing hard failure; legacy MCP servers cannot fall back | #8445 (open) |
| **#8040** | High | Embedding reindex silently fails chunks, false success logging | #8062 (merged, partial) |
| **#8279** | High | Long-lived ReMe watchers exhaust AnyIO thread limiter, stalling HTTP endpoints | None |
| **#8435** | High | LLM stream hangs indefinitely when rate-limiter semaphore never releases (watchdog never fires) | None |
| **#8312** | Medium | Context control failure causing task interruption | None |
| **#8417** | Medium | Context compression 400 failure: glm-5.3-flash incompatible with `thinking.type=disabled` | None |
| **#8405** | Medium | MCP config popup cannot close when using HTTP/SSE transport | None |
| **#8415** | Medium | edit_file converts CRLF to LF, corrupting ISO-8859-1 files | None |
| **#8425** | Medium | Mail monitor builds invalid `name@domain@domain` from full address | None |

### Fixes Merged Today
- **#8165**: OpenAI Responses API streaming recovery
- **#8062**: Keep healthy embedding vectors on batch failure
- **#8445** (open): MCP fallback for HTTP 404 + -32601

---

## 6. Feature Requests & Roadmap Signals

### Notable Feature Proposals

| Issue | Title | Predictability |
|-------|-------|----------------|
| #8442 | Linux desktop parity — deb + AppImage, Computer Use (Wayland), Chrome Native Messaging | High (PR #8444 open) |
| #8439 | support thinking_level in JobRuntimeSpec | High (merged #8429) |
| #8071 | Plugin-facing theme extension point | Medium |
| #8420 | Files panel — "Open with default app" and "Reveal in Finder/Explorer" | Medium |
| #7912 | Optional authenticated MCP web-research example with Baizhi Agent Toolkit | Low |
| #8376 | PowerContext prepared context and Artifact APIs | High (PR open) |

**Roadmap Signals:**
- **Linux Desktop**: PR #8444 explicitly targets Linux parity with deb/AppImage packaging via Tauri—this is the most concrete Linux desktop signal yet.
- **Memory/MCP Advances**: PowerContext integration (#8376), nested skill directories (#8178), and channel plugin extraction (#8187) indicate platform extensibility priorities.
- **Local Model Support**: #8437 adds ChatGPT subscription sign-in, expanding non-API-key authentication options.

---

## 7. User Feedback Summary

### Pain Points Identified

1. **Reliability in Production**: Users report critical issues around cron scheduling (#7476), embedding failures (#8040), and stream hangs (#8435)—all affecting production stability.
2. **Cross-Platform Inconsistencies**: Windows ZIP encoding (#8270), Linux desktop absence (#8442), and CRLF handling (#8415) indicate platform parity gaps.
3. **Memory Cost**: Requests for separate models for ReMeLight memory writing (#7719) and thinking_level control in cron tasks (#8439) reflect cost-optimization priorities.
4. **MCP Ecosystem Friction**: Multiple issues (#8424, #8405, #7912) suggest MCP integration complexity and documentation gaps.
5. **Plugin Maturity**: Theme extension (#8071) and reranker credential handling (#8276) show growing plugin ecosystem needs.

### Satisfaction Indicators
- Scroll retention improvement (#7923, #8443) addresses a major user pain point (database bloat).
- OpenAI Responses API fixes (#8162, #8165) resolved streaming reliability.
- "Daily Paper" and ReMe features continue to see active development, suggesting user engagement with memory systems.

---

## 8. Backlog Watch

### Unanswered Important Issues

| Issue | Age | Priority | Description |
|-------|-----|----------|-------------|
| #4946 | ~4 months | High | Plugin import failure blocks startup for 6+ minutes, all channels unresponsive |
| #8040 | ~1 month | High | Embedding reindex incomplete—partial fix merged but may need follow-up |
| #8123 | ~20 days | Medium | Daily Paper fails on truncated model output—no per-paper retry |
| #8276 | ~11 days | Medium | ReMe reranker accepts empty api_key, surfaces as "unexpected error" |

### PRs Needing Maintainer Attention

| PR | Age | Size | Blockers |
|----|-----|------|----------|
| #7874 (redesign SDK/app control plane) | ~1 month | XXXL | Large, likely needs architectural review |
| #8187 (channels → plugins) | ~2 weeks | XXXL | Under review, significant refactor |
| #8376 (PowerContext APIs) | ~5 days | XXXL | Under review |
| #8178 (nested skill directories) | ~2 weeks | XL | Under review, first-time contributor |

---

*Generated from QwenPaw GitHub data (2026-10-27)*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to generate a structured project digest for ZeroClaw based on the GitHub data provided. Let me analyze the data and create the sections as requested.

Let me organize the information:

**Data Overview:**
- Issues updated in last 24h: 23 (all open/active)
- PRs updated in last 24h: 29 (open: 28, merged/closed: 1)
- New releases: 0

**Latest Issues (23 total, I'll focus on the key ones):**
1. #10673 - Bug: Persist failed ACP turns on the daemon RPC path (ZeroCode Code pane)
2. #10921 - Bug: Qdrant time-bounded vector recall can omit eligible results
3. #10781 - Enhancement: Remove or implement inert context/history config keys
4. #10780 - Enhancement: Restore proactive token-budget context compaction
5. #11711 - Bug: trimming a long conversation permanently deletes older turns
6. #11562 - Bug: discovery can pair one generation's manifest with another's component
7. #11013 - Tracker: Unified file intake, resolver, and delivery implementation
8. #12021 - Bug: config group save button still highlighted after saving
9. #11825 - Bug: codex_cli test empties process PATH
10. #12022 - Feature: memory recall with external rerank stage
11. #12054 - Feature: Honor runtime-profile thinking levels for OpenAI
12. #12053 - Bug: /api/docs loads unpinned third-party script
13. #12052 - Bug: Gateway limiters key on first X-Forwarded-For entry
14. #12051 - Bug: sop_workshop apply lets scoped principal author shared SOPs
15. #12050 - Bug: OIDC callback token page has no browser binding


16. #12049 - Bug: Four remote addresses can fill browser sign-in flow store
17. #12048 - Feature: Validate OIDC browser-flow redirect_uri
18. #12047 - Bug: OIDC bearer verification has no attempt limiter
19. #12046 - Bug: Non-admin principals with wildcard tool selector keep principal-unaware tools
20. #12045 - Bug: Response bodies buffered whole before size cap
21. #12043 - Bug: glob_search silently drops authorized matches
22. #12042 - ZeroClaw reviewed on Hlido — scored 79/100
23. #12041 - Feature: Bring g

itea/forgejo feature set on-parity with github

I've got 29 pull requests to examine. The most substantial ones include #11847 introducing native Rust XMPP support, #11289 focused on stable denial reason identifiers, and #12039 which resolves the config form refresh issue. I'm also tracking #11986 for scoped dashboard chat through the core, #11965 for OIDC dashboard sign-in, and #11326 addressing log read restrictions for scoped principals. There are also fixes related to OIDC form encoding, system prompt size budget enforcement, and session ownership judgment by current authority. The project shows active development with multiple security and feature enhancements being merged.</think>

# ZeroClaw Project Digest — 2026-10-27

## 1. Today's Overview

ZeroClaw maintains high development velocity with **23 issues** and **29 PRs** updated in the last 24 hours. All issues remain open, indicating active triaging and discussion rather than resolution. The project shows strong focus on security hardening (9 identity-access related issues filed today) and runtime improvements. No releases were published. The community is actively engaging with the v0.9.0 release cycle, with multiple PRs marked for that release.

---

## 2. Releases

**No new releases** in the past 24 hours.

The project is preparing v0.9.0 (multiple PRs tagged `release:v0.9.0`) and v0.8.7 (documentation translations pinned in PR #12019).

---

## 3. Project Progress

### PRs Merged/Closed (1)
- No explicit merge events captured in the data window; most PRs remain open.

### Notable PRs Advancing

| PR | Title | Status | Focus Area |
|----|-------|--------|------------|
| [#12039](https://github.com/zeroclaw-labs/zeroclaw/pull/12039) | fix(web): refresh config form after Save all | OPEN | UI bugfix |
| [#12040](https://github.com/zeroclaw-labs/zeroclaw/pull/12040) | fix(plugins): admit a component only beside the manifest that described it | OPEN | Plugin security |
| [#12044](https://github.com/zeroclaw-labs/zeroclaw/pull/12044) | feat(runtime): deferred bootstrap sections | OPEN | Context optimization |
| [#11986](https://github.com/zeroclaw-labs/zeroclaw/pull/11986) | feat(gateway): scoped dashboard chat through the core | OPEN | v0.9.0 feature |
| [#11965](https://github.com/zeroclaw-labs/zeroclaw/pull/11965) | feat(gateway): opt-in OIDC dashboard sign-in | OPEN | v0.9.0 feature |
| [#11910](https://github.com/zeroclaw-labs/zeroclaw/pull/11910) | fix(runtime): enforce the system prompt size budget (fail closed) | OPEN | Runtime safety |
| [#11326](https://github.com/zeroclaw-labs/zeroclaw/pull/11326) | fix(rpc): refuse persisted log reads to scoped principals | OPEN | Security |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Comments | Theme |
|-------|-------|----------|-------|
| [#10673](https://github.com/zeroclaw-labs/zeroclaw/issues/10673) | Persist failed ACP turns on the daemon RPC path | 4 | ACP runtime bug |
| [#10921](https://github.com/zeroclaw-labs/zeroclaw/issues/10921) | Qdrant time-bounded vector recall can omit eligible results | 4 | Memory/vector search |
| [#10781](https://github.com/zeroclaw-labs/zeroclaw/issues/10781) | Remove or implement inert context/history config keys | 4 | Configuration debt |
| [#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) | Restore proactive token-budget context compaction | 4 | Context management |
| [#11711](https://github.com/zeroclaw-labs/zeroclaw/issues/11711) | trimming a long conversation permanently deletes older turns | 4 | Session persistence |

**Analysis:** The most discussed issues cluster around **context management** (3 of top 5) — specifically, users are frustrated by inert configuration options that promise token savings but don't work, and by the lack of proactive context compaction. This represents a significant user pain point about cost control in long conversations.

---

## 5. Bugs & Stability

### Critical (S1-S2) Bugs Reported Today

| Issue | Severity | Component | Status |
|-------|----------|-----------|--------|
| [#10673](https://github.com/zeroclaw-labs/zeroclaw/issues/10673) | S1 | ACP daemon RPC | Workflow blocker |
| [#12045](https://github.com/zeroclaw-labs/zeroclaw/issues/12045) | S2 | channel/provider/tools | Response buffering before size check |
| [#12043](https://github.com/zeroclaw-labs/zeroclaw/issues/12043) | S2 | security/sandbox | glob_search misreports accessible files |
| [#11711](https://github.com/zeroclaw-labs/zeroclaw/issues/11711) | S2 | session_sqlite | Permanent data loss on trim |
| [#10921](https://github.com/zeroclaw-labs/zeroclaw/issues/10921) | S2 | memory/qdrant | Vector recall omissions |

### Security Bugs (9 issues, all tagged `topic:identity-access`)

Several security issues filed today by **@IftekharUddin**:
- [#12053] Unpinned third-party script in /api/docs
- [#12052] X-Forwarded-For header exploitation
- [#12051] SOP workshop privilege escalation
- [#12050] OIDC login CSRF
- [#12049] Sign-in flow store exhaustion
- [#12048] OIDC redirect_uri validation
- [#12047] OIDC bearer verification without rate limiting
- [#12046] Wildcard tool selector bypass

**Fix PR exists:** [#12040](https://github.com/zeroclaw-labs/zeroclaw/pull/12040) addresses the plugin manifest pairing bug (#11562).

---

## 6. Feature Requests & Roadmap Signals

### New Feature Requests

| Issue | Request | Likely Target |
|-------|---------|---------------|
| [#12022](https://github.com/zeroclaw-labs/zeroclaw/issues/12022) | External rerank stage for memory recall | v0.9.x |
| [#12054](https://github.com/zeroclaw-labs/zeroclaw/issues/12054) | Runtime-profile thinking levels for OpenAI | v0.9.x |
| [#12041](https://github.com/zeroclaw-labs/zeroclaw/issues/12041) | Gitea/Forgejo parity with GitHub | Future |
| [#11013](https://github.com/zeroclaw-labs/zeroclaw/issues/11013) | Unified file intake/resolver/delivery | v0.9.x (tracker) |

### Tracker
- [#11013](https://github.com/zeroclaw-labs/zeroclaw/issues/11013) coordinates RFC #9488 implementation for unified file handling — a significant architectural change.

**Prediction:** The next release (v0.9.0) will likely include: OIDC dashboard sign-in, scoped principals, deferred bootstrap sections, and security patches. The context compaction issues (#10780, #10781) may be addressed given their high discussion activity.

---

## 7. User Feedback Summary

### Pain Points Identified

1. **Configuration confusion** — Users set `context_compression.*`, `history_pruning.keep_recent`, `collapse_tool_results`, `keep_tool_context_turns` expecting token savings, but these keys are inert. This is a **trust issue**.

2. **Context cost** — Users want proactive, token-budget-driven context compaction, not just message-count trimming. The current behavior forces manual intervention.

3. **Data loss perception** — Trimming long conversations permanently deletes older turns from the session store, which concerns users relying on historical data.

4. **External review** — ZeroClaw scored **79/100 on Hlido** (#12042), indicating generally positive reception but room for improvement.

### Satisfaction Signals
- Active security research (9 issues from IftekharUddin) suggests the project has engaged security contributors.
- Multiple PRs targeting v0.9.0 indicate a clear release roadmap.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (no activity in >7 days, high priority)

| Issue | Title | Age | Priority |
|-------|-------|-----|----------|
| [#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) | Restore proactive token-budget context compaction | 46 days | P1 |
| [#10781](https://github.com/zeroclaw-labs/zeroclaw/issues/10781) | Remove or implement inert context/history config keys | 46 days | P2 |
| [#11562](https://github.com/zeroclaw-labs/zeroclaw/issues/11562) | discovery can pair one generation's manifest with another's component | 21 days | P2 |

### Long-Standing PRs

| PR | Title | Age | Status |
|----|-------|-----|--------|
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | feat(channels): add native Rust XMPP | 8 days | XL, active |
| [#11289](https://github.com/zeroclaw-labs/zeroclaw/pull/11289) | feat(rpc): stable denial reason identifiers | 27 days | XL, security-focused |
| [#11234](https://github.com/zeroclaw-labs/zeroclaw/pull/11234) | fix(rpc): judge queued session ownership by current authority | 28 days | XL, security |

**Recommendation:** Prioritize the context management issues (#10780, #10781) — they have the highest user discussion and represent significant user friction. The security PRs (#11234, #11289, #11230) should be expedited given the number of related security issues filed today.

---

*Generated from GitHub data for zeroclaw-labs/zeroclaw on 2026-10-27*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*