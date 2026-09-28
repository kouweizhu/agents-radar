# OpenClaw Ecosystem Digest 2026-09-28

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-28 01:06 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

<think>The user wants me to generate a structured project digest for OpenClaw based on the GitHub data provided. Let me analyze the data and create the sections as requested.

Let me go through the data:

**Overview:**
- Issues updated in last 24h: 500 (open/active: 475, closed: 25)
- PRs updated in last 24h: 500 (open: 389, merged/closed: 111)
- New releases: 0

**Latest Releases:** None

**Latest Issues (50 shown):** I can see various issues with different severities (P0, P1, P2), various tags, and different impact areas (crash-loop, message-loss, session-state, etc.)

**Latest Pull Requests (30 shown):** Various PRs in different states (open, needs proof, ready for maintainer look, etc.)

Now I need to create the 8 sections:

1. **Today's Overview** - Summarize the project status
2. **Releases** - No new releases, so this will be brief/none
3. **Project Progress** - PRs merged/closed
4. **Community Hot Topics** - Most active Issues/PRs
5. **Bugs & Stability** - Bugs, crashes, regressions
6. **Feature Requests & Roadmap Signals** - User-requested features
7. **User Feedback Summary** - Real user pain points
8. **Backlog Watch** - Long-unanswered important issues

Let me analyze the data more carefully to extract the right information for each section.

Looking at the issues:
- Issue #159356 (OPEN): llama.cpp manager reports ready while embedding child exits - 25 comments - P2
- Issue #97616 (OPEN): OpenClaw leaks unreaped hook/tool child processes - 16 comments - P1
- Issue #157531 (OPEN): 2026.9.7 Fixes Tracker - 15 comments - P0


- Issue #127148 (OPEN): Codex sessions.compact acquires a second app-server - 12 comments - P1

I notice several high-priority stability and performance issues emerging. The project faces critical challenges with child process management, server conflicts, and potential release blockers. Multiple P0 and P1 issues suggest significant infrastructure complexity that could impact system reliability and user experience.

The technical debt spans memory management, state lifecycle, database interactions, and process handling. Specific concerns include memory pressure, session state corruption, plugin system instability, and potential release-blocking problems in the upcoming version.

These interconnected issues indicate a need for comprehensive system testing and targeted refactoring to improve overall platform stability and performance.</think>

# OpenClaw Project Digest — 2026-09-28

## Today's Overview

OpenClaw remains in a period of intense stabilization activity as the project approaches the 2026.9.7 release. The repository shows high activity with **500 issues** and **500 PRs** updated in the last 24 hours, though notably **no new releases** were published today. The issue backlog has grown to 475 open items, with 25 issues closed—indicating active triage but persistent incoming reports. Multiple P0-level stability issues are consuming significant developer attention, particularly around memory management, database corruption, and crash-loops in the Gateway component. The project appears to be in a stabilization sprint ahead of the next point release, with 18/21 P1 candidates reportedly identified for 2026.9.7.

---

## Releases

No new releases were published on **2026-09-28**. The most recent release remains **2026.9.6** (commit `eb377ac`). The project is tracking fixes between 2026.9.6 and 2026.9.7 in Issue #157531, which contains 18/21 established P1 candidates awaiting integration.

---

## Project Progress

The following Pull Requests advanced significantly in the last 24 hours:

| PR | Author | Status | Summary |
|----|--------|--------|---------|
| [#159347](https://github.com/openclaw/openclaw/pull/159347) | steipete | 📣 needs proof | **fix(windows): recover Gateway restarts from SQLite sharing errors** — Addresses P0 Windows Scheduled Task failures with `SQLITE_IOERR_TRUNCATE` |
| [#159297](https://github.com/openclaw/openclaw/pull/159297) | chelsealong | 📣 needs proof | **fix(daemon): retry transient SQLITE_IOERR owner-lease read** — P0 fix for Windows Gateway stop/restart race conditions |
| [#152875](https://github.com/openclaw/openclaw/pull/152875) | DonnieFi | 👀 ready for maintainer look | **fix(build): refuse dist rebuild under a live managed Gateway** — Prevents source builds from replacing modules in use |
| [#159935](https://github.com/openclaw/openclaw/pull/159935) | eliasopolski | 👀 ready for maintainer look | **fix(agents): isolate catalog worker state and heap** — Addresses memory leak where workers accumulate ~8MB per request |
| [#159940](https://github.com/openclaw/openclaw/pull/159940) | DonnieFi | 📣 needs proof | **fix(agents): report visible task start failures** — Improves error handling for failed child session spawns |
| [#159847](https://github.com/openclaw/openclaw/pull/159847) | steipete | 👀 ready for maintainer look | **refactor: delete unreferenced production code** — Large cleanup removing unreachable code paths |
| [#159401](https://github.com/openclaw/openclaw/pull/159401) | steipete | 👀 ready for maintainer look | **chore(deps): refresh dependencies** — September 19 dependency cutoff refresh |

**Merged/Closed:** 111 PRs were merged or closed in the last 24 hours, indicating substantial throughput despite the high issue volume.

---

## Community Hot Topics

The most active discussions center on stability-critical issues:

### Top Issues by Engagement

1. **[#159356](https://github.com/openclaw/openclaw/issues/159356)** — *llama.cpp manager reports ready while embedding child exits* (25 comments, P2)
   - **Summary:** Embedding requests return HTTP 500; operational recovery achieved after upgrading host RAM from 4GB to 8GB
   - **Root cause hypothesis:** Memory pressure leading to OOM-correlated failures

2. **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — *OpenClaw leaks unreaped hook/tool child processes* (16 comments, P1)
   - **Summary:** Zombie process accumulation from hook/tool execution causing runtime degradation
   - **Impact:** Message loss, crash-loop potential

3. **[#157531](https://github.com/openclaw/openclaw/issues/157531)** — *2026.9.7 Fixes Tracker* (15 comments, P0)
   - **Summary:** Tracking issue for 18/21 P1 candidates between 2026.9.6 and 2026.9.7

4. **[#127148](https://github.com/openclaw/openclaw/issues/127148)** — *Codex sessions.compact acquires a second app-server* (12 comments, P1)
   - **Summary:** Active-writer conflict when manually compacting bound Codex sessions

### Top PRs by Activity

- **[#156389](https://github.com/openclaw/openclaw/pull/156389)** — fix(ollama): tag native pre-tool narration as commentary — Ready for maintainer look
- **[#159516](https://github.com/openclaw/openclaw/pull/159516)** — feat(approvals): show plugin requester context — Needs proof (security-sensitive)
- **[#159997](https://github.com/openclaw/openclaw/pull/159997)** — fix(ui): work logs split when tasks resume — Screenshot proof provided

---

## Bugs & Stability

### Critical (P0) Bugs Active

| Issue | Summary | Severity | Status |
|-------|---------|----------|--------|
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | SQLite corruption recurs on pristine rebuilt DBs within 15–24h | P0, impact: data-loss, crash-loop | OPEN |
| [#157160](https://github.com/openclaw/openclaw/issues/157160) | Gateway crash-loops on plugin-doctor-post-session-state | P0, impact: ux-release-blocker | OPEN |
| [#157812](https://github.com/openclaw/openclaw/issues/157812) | Windows auto-update fails with unexpanded `$OPENCLAW_STATE_DIR` | P0, impact: ux-release-blocker | OPEN |
| [#158936](https://github.com/openclaw/openclaw/issues/158936) | macOS app readiness watchdog SIGTERMs slow-starting gateway | P0, crash-loop | OPEN |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) | Gateway runaway RSS outside V8 heap causes OOM | P0, crash-loop | OPEN |
| [#158095](https://github.com/openclaw/openclaw/issues/158095) | Gateway worker keeps state-lifecycle after acquireSqliteWorkerLifecycle | P0, message-loss | OPEN |
| [#159514](https://github.com/openclaw/openclaw/issues/159514) | Catalog worker rebuilds discovery registry ~8MB per request | P0, crash-loop | OPEN |

### High Priority (P1) Regression/Behavior Bugs

| Issue | Summary | Impact |
|-------|---------|--------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Zombie process leak from unreaped child processes | Session-state, crash-loop |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | Gateway startup wall-time scales with plugin count (120s+) | UX release blocker |
| [#157605](https://github.com/openclaw/openclaw/issues/157605) | High sustained CPU (240–276%) after v2026.9.6 upgrade | Other |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | Plugin source capture rewrites 1.1–1.4 GB per CLI command | SSD wear |

**Fix PRs in flight:** [#159347](https://github.com/openclaw/openclaw/pull/159347) (Windows SQLite), [#159297](https://github.com/openclaw/openclaw/pull/159297) (daemon retry), [#159935](https://github.com/openclaw/openclaw/pull/159935) (catalog worker heap)

---

## Feature Requests & Roadmap Signals

Notable feature requests and enhancement signals:

1. **[#63990](https://github.com/openclaw/openclaw/issues/63990)** — *Feature: Multi-index embedding memory with model-aware failover* (P3)
   - **Request:** First-class multi-index embedding support to allow resilient provider/model failover without corrupting vector semantics
   - **Signal:** Production reliability concern for embeddings

2. **[#152839](https://github.com/openclaw/openclaw/issues/152839)** — *Handle openat2 ENOSYS gracefully when acquiring gateway state lock* (P0 enhancement)
   - **Use case:** Running OpenClaw in Docker Compose on Synology NAS

3. **[#123799](https://github.com/openclaw/openclaw/issues/123799)** — *Need safe upgrade/backport guidance for production affected by Codex compact 404*
   - **Signal:** Production deployments seeking operational guidance for version migration

4. **[#157500](https://github.com/openclaw/openclaw/pull/157500)** (PR) — *feat(workers): authenticate stock GitHub clients on enterprise workers*
   - **Progress:** Enables disposable cloud workers to use short-lived GitHub App tokens

**Roadmap prediction:** Given the active 2026.9.7 fix tracker (#157531) and the density of P0 stability bugs, the next release likely focuses on: (1) SQLite/database stability fixes, (2) memory management improvements, (3) Windows/macOS platform-specific crash fixes.

---

## User Feedback Summary

### Pain Points Identified from Active Issues

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Memory pressure causing instability** | Multiple OOM reports (#159356, #154812), catalog worker leak (#159514) | Session crashes, data loss risk |
| **SQLite corruption in production** | #126821 reports corruption within 15–24h on pristine DBs | Gateway "paralyzed" mode, data loss |
| **Plugin/system startup slowness** | #155859 reports 120s+ startup with plugins enabled | User experience degradation |
| **Zombie process accumulation** | #97616 describes unreaped child processes | Runtime degradation over time |
| **Windows update failures** | #157812, #158231 report multiple failure modes | UX friction, release blockers |
| **Multi-lane load message loss** | #157389 describes feishu channel failures under load | Message loss in production |

### Satisfaction Signals

- The active fix tracker (#157531) with 18/21 candidates shows strong triage and release management
- Multiple PRs advancing to "ready for maintainer look" indicates healthy code review throughput
- Community engagement remains high (25 comments on top issue, 8 on #97616)

---

## Backlog Watch

### Long-Unanswered Important Issues Requiring Maintainer Attention

| Issue | Age | Status | Barrier |
|-------|-----|--------|---------|
| [#84110](https://github.com/openclaw/openclaw/issues/84110) | 2026-05-19 (~4 months) | Needs maintainer review | Codex prompt cache regression, 2 👍 |
| [#118793](https://github.com/openclaw/openclaw/issues/118793) | 2026-08-03 (~2 months) | Needs maintainer review | Claude CLI session limit error handling |
| [#120006](https://github.com/openclaw/openclaw/issues/120006) | 2026-08-06 (~7 weeks) | Needs product decision | CLI session reset drops tool history |
| [#124759](https://github.com/openclaw/openclaw/issues/124759) | 2026-08-16 (~6 weeks) | Needs info | iOS app lags with reasoning display enabled |
| [#55694](https://github.com/openclaw/openclaw/issues/55694) | 2026-03-27 (~6 months) | Queueable fix | Agent tool call failure loop (1 👍) |

### PRs Awaiting Author Response

| PR | Status | Blocked By |
|----|--------|------------|
| [#159588](https://github.com/openclaw/openclaw/pull/159588) | ⏳ waiting on author | Config refactor fourth pass |
| [#133376](https://github.com/openclaw/openclaw/pull/133376) | 📣 needs proof | Code Mode skill file access |

---

*Generated from OpenClaw repository data for 2026-09-28*

---

## Cross-Ecosystem Comparison

<think>The user wants a cross-project comparison report analyzing five projects:
1. OpenClaw
2. Hermes Agent
3. IronClaw
4. QwenPaw
5. ZeroClaw

I need to synthesize data from all five digests I just created into a cohesive cross-project analysis. Let me organize the key data points:

**Activity Comparison:**

| Project | Issues (24h) | PRs (24h) | Releases (24h) | Status |
|---------|-------------|-----------|----------------|--------|
| OpenClaw | 500 | 500 | 0 | High activity |
| Hermes Agent | 50 | 50 | 0 | High activity |
| IronClaw | 1 | 6 | 0 | Low activity |
| QwenPaw | 8 | 4 | 0 | Moderate activity |
| ZeroClaw | 43 | 50 | 0 | High activity |

**Health indicators:**
- OpenClaw: 475 open issues, 25 closed, 389 open PRs, 111 merged/closed
- Hermes Agent: 39 open issues, 11 closed, 43 open PRs, 7 merged/closed
- IronClaw: 1 open issue, 5 open PRs, 1 merged/closed
- QwenPaw: 6 open issues, 2 closed, 4 open PRs, 0 merged/closed
- ZeroClaw: 37 open issues, 6 closed, 47 open PRs, 3 merged/closed

**Technical Focus Areas:**
- OpenClaw: Memory management, SQLite stability, multi-session, tool execution, plugin system
- Hermes Agent: Desktop client, Windows installation, cron workers, session management
- IronClaw: Dependency maintenance, tool selection optimization
- QwenPaw: Context management, MCP, desktop UI


- ZeroClaw: Security, channels (WhatsApp, Telegram), session management, sandboxing

I'll analyze the projects' key technical differentiators and market positioning. Each project shows unique strengths in addressing specific agent ecosystem challenges, from performance optimization to platform-specific integrations and security enhancements.</think>

# Cross-Project Ecosystem Analysis: Personal AI Assistants & Agents

## 1. Ecosystem Overview

The personal AI assistant and agent landscape is experiencing rapid growth with significant differentiation across five active open-source projects. OpenClaw and Hermes Agent dominate activity volume with 500 and 50 updates respectively in 24 hours, while ZeroClaw maintains strong development with 43 issues and 50 PRs. IronClaw shows minimal activity suggesting either maturity or reduced development focus. QwenPaw occupies the mid-tier with 8 issues and 4 PRs. A notable pattern across all projects: zero releases in the past 24 hours indicates collective focus on in-progress development rather than stable cut releases. Security hardening, multi-session architecture, and cross-platform stability emerge as the dominant technical themes, with each project targeting different user segments—from enterprise deployments (OpenClaw, ZeroClaw) to individual developers (Hermes Agent, QwenPaw).

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | Open Issues | PRs Updated (24h) | Open PRs | Releases (24h) | Health Score |
|---------|---------------------|--------------|-------------------|----------|----------------|--------------|
| **OpenClaw** | 500 | 475 | 500 | 389 | 0 | ⚠️ High volume, moderate closure rate |
| **Hermes Agent** | 50 | 39 | 50 | 43 | 0 | ✅ Balanced activity |
| **IronClaw** | 1 | 1 | 6 | 5 | 0 | 🔶 Low activity, maintenance mode |
| **QwenPaw** | 8 | 6 | 4 | 4 | 0 | 🔶 Steady but low throughput |
| **ZeroClaw** | 43 | 37 | 50 | 47 | 0 | ✅ Strong PR merge rate (3 closed) |

*Health Score: ✅ = healthy throughput, ⚠️ = concerning backlog, 🔶 = uncertain/low signal*

---

## 3. OpenClaw's Position

### Advantages vs. Peers

**Scale and Ecosystem Maturity:** OpenClaw leads in absolute activity volume (500 issues + 500 PRs updates), indicating the largest active developer base and community engagement. Its issue backlog of 475 open items suggests strong incoming demand, though the 25:475 closure ratio (5.3% daily) raises questions about triage velocity.

**Technical Depth:** OpenClaw addresses the most complex technical challenges among peers—SQLite database corruption under load, memory management at scale (catalog worker leaks of ~8MB/request), multi-session state lifecycle, and Windows/macOS platform-specific crash loops. This positions OpenClaw for production enterprise deployments rather than developer tooling.

**Feature Breadth:** With 18/21 P1 candidates tracked for the 2026.9.7 release and active development across plugin systems, gateway architecture, and agent tooling, OpenClaw offers the widest functional surface area.

### Differentiation from Peers

| Aspect | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|--------|----------|--------------|----------|---------|----------|
| **Primary Focus** | Enterprise multi-session | Desktop client | Tool selection | Context management | Channels & security |
| **Platform** | Cross-platform | Desktop-first | CLI/Server | WebUI + Desktop | Server + channels |
| **Architecture** | Gateway-managed sessions | Single gateway | Agent runtime | AgentScope integration | Sandbox-first |

### Community Size Comparison

- **OpenClaw:** ~389 open PRs, 475 open issues → largest contributor pool
- **Hermes Agent:** ~43 open PRs, 39 open issues → medium contributor base
- **ZeroClaw:** ~47 open PRs, 37 open issues → active but smaller than OpenClaw
- **QwenPaw:** ~4 open PRs, 6 open issues → limited contributor activity
- **IronClaw:** ~5 open PRs, 1 open issue → minimal community engagement

---

## 4. Shared Technical Focus Areas

### Requirements Emerging Across Multiple Projects

**Context/Memory Management (OpenClaw, QwenPaw, ZeroClaw)**

- OpenClaw: Catalog worker memory leak (#159514), Gateway RSS runaway, context lifecycle issues
- QwenPaw: Context compression timing confusion (#7994), context indicator not updating (#7994), agent context lifecycle (#4525)
- ZeroClaw: Knowledge graph as first-class memory layer RFC (#11053), persistent session prompt attachments (#10407)

*Convergence signal:* All three projects recognize context management as critical. Expect industry-wide investment in memory lifecycle, compression triggers, and persistent state.

**Cross-Platform Stability (OpenClaw, Hermes Agent)**

- OpenClaw: Windows SQLite errors (#159347), macOS app readiness watchdog (#158936), Windows auto-update failures (#157812)
- Hermes Agent: Windows installation failures (#125657, #125350), Windows subprocess hangs (#107232), Linux desktop launcher (#122438)

*Convergence signal:* Windows remains the hardest platform. Both projects invest heavily in Windows-specific error handling, installation bootstrapping, and process management.

**Security Hardening (OpenClaw, ZeroClaw)**

- OpenClaw: Security-sensitive PRs (#159516, plugin requester context), unreaped child processes causing potential privilege escalation (#97616)
- ZeroClaw: SSRF protection for file_download (#10070 merged), sandbox_policy schema (#7821), delegated memory scope (#11198), environment forwarding after revocation (#11197)

*Convergence signal:* Security is being treated as a primary concern rather than an afterthought. Both projects implement defense-in-depth.

**Session State Lifecycle (OpenClaw, Hermes Agent, ZeroClaw)**

- OpenClaw: Gateway state lifecycle after acquireSqliteWorkerLifecycle (#158095), session state after compaction (#127148)
- Hermes Agent: Internal-event pins lost on gateway restart (#125793)
- ZeroClaw: Session resume restores forwarded environment after admin revocation (#11197)

*Convergence signal:* Multi-session architectures require sophisticated state management that remains unsolved. This is a frontier problem.

---

## 5. Differentiation Analysis

### Feature Focus

| Project | Primary Differentiator | Secondary Focus |
|---------|----------------------|------------------|
| **OpenClaw** | Enterprise-grade stability, SQLite reliability, plugin ecosystems | Multi-modal tool execution |
| **Hermes Agent** | Desktop client UX, cross-platform installer | Skill/automation system |
| **IronClaw** | Tool selection optimization (BM25F + embeddings proposal) | Dependency management |
| **QwenPaw** | AgentScope integration, console/UI polish | Context visualization |
| **ZeroClaw** | Channel integrations (WhatsApp, Telegram), sandbox security | A2A protocol, realtime voice |

### Target Users

- **OpenClaw:** Enterprise developers, teams requiring stable multi-agent orchestration
- **Hermes Agent:** Individual developers seeking a polished desktop AI assistant
- **IronClaw:** Advanced users/developers optimizing agent performance
- **QwenPaw:** AgentScope users wanting a visual/conversational interface
- **ZeroClaw:** Privacy-conscious users needing secure, channel-connected agents

### Technical Architecture

- **OpenClaw:** Gateway-managed sessions with SQLite persistence; plugin architecture; comprehensive monitoring
- **Hermes Agent:** Desktop-first with cron workers; plugin system; browser-based rendering
- **IronClaw:** Rust-based agent runtime; minimal dependencies
- **QwenPaw:** WebUI-centric; AgentScope backend integration; contextual awareness
- **ZeroClaw:** Sandbox-first security model; channel-agnostic design; Wyoming protocol support

---

## 6. Community Momentum & Maturity

### Activity Tiers

**Tier 1 — Rapid Iteration:**

- **OpenClaw** (500 updates/24h): High-velocity development with significant bug backlog. Risk: triage debt. Opportunity: largest community.
- **ZeroClaw** (50 updates/24h): Strong merge rate (3/50 = 6% closed), security-focused development, active RFC process. Healthy signs.

**Tier 2 — Steady Development:**

- **Hermes Agent** (50 updates/24h): Balanced throughput, good PR merge rate (7/50 = 14%), diverse feature work. Mature process.

**Tier 3 — Maintenance/Slow:**

- **QwenPaw** (8 issues/4 PRs): Low volume but consistent. 2 issues closed suggests active triage. Small but functional.
- **IronClaw** (1 issue/6 PRs): Primarily dependency updates. Suggests either maturity or reduced investment. Risk: possible abandonment.

### Maturity Indicators

| Project | Release Cadence | Issue Resolution | RFC Process | Security Focus |
|---------|-----------------|------------------|-------------|----------------|
| OpenClaw | Active (v2026.9.6 → v2026.9.7) | Moderate (25/500 daily) | Implicit via fix tracker | High |
| Hermes Agent | Active | Good (11/50 daily) | No visible RFC | Moderate |
| IronClaw | Unclear | Minimal activity | No | Low |
| QwenPaw | Moderate | Active (2/8 closed) | No | Low |
| ZeroClaw | Active (v0.8.x) | Strong (6/43 daily) | Yes (#11053) | High |

---

## 7. Trend Signals for AI Agent Developers

### Industry Trends Extracted from Community Feedback

**1. Memory/Context Management is the Next Frontier**

Multiple projects (OpenClaw, QwenPaw, ZeroClaw) are independently tackling context lifecycle. The lack of consensus on compression triggers, retention policies, and persistent memory indicates this is an unsolved problem space. Developers should expect continued innovation here.

**Signal:** Invest in context management tooling; monitor ZeroClaw's knowledge graph RFC and OpenClaw's session compaction work.

**2. Security is No Longer Optional**

ZeroClaw's SSRF protection, sandbox_policy schema, and environment isolation work—combined with OpenClaw's P0 security bugs—indicate the industry is mature enough to face adversarial scenarios. Tool-level access control (file_download gating, sandboxing) is becoming standard.

**Signal:** Agent frameworks must implement defense-in-depth; security will be a competitive differentiator.

**3. Desktop Experience Remains Hard**

Hermes Agent and OpenClaw both struggle with Windows installation, desktop integration, and process management. The desktop agent experience is not yet solved, creating opportunity for differentiation.

**Signal:** Desktop client developers face shared challenges; cross-project collaboration on platform abstraction could benefit all.

**4. Multi-Session Architecture is Complex**

OpenClaw's session state issues, Hermes Agent's gateway restart problems, and ZeroClaw's environment forwarding bugs all stem from multi-session complexity. This is a frontier problem requiring systematic solutions.

**Signal:** Teams building multi-agent systems should budget significant time for state lifecycle debugging.

**5. Channel Integrations are Proliferating**

ZeroClaw's WhatsApp, Telegram, and Matrix work demonstrates demand for agents embedded in existing communication platforms. This contrasts with the "standalone assistant" model.

**Signal:** Consider channel-first distribution strategies; monitor ZeroClaw's channel architecture.

### Value for AI Agent Developers

| Insight | Actionable Takeaway |
|---------|---------------------|
| Context management is unsolved | Build abstractions now; avoid hardcoding compaction logic |
| Windows is the hardest platform | Prioritize Windows testing; don't ship without Windows QA |
| Security is everyone's job | Implement tool-level access controls from day one |
| Multi-session state is complex | Design state machines explicitly; log state transitions |
| Channels are distribution channels | Consider WhatsApp/Telegram integration for user acquisition |

---

*Cross-project analysis synthesized from 2026-09-28 data for OpenClaw, Hermes Agent, IronClaw, QwenPaw, and ZeroClaw.*

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to generate a structured project digest for Hermes Agent based on the provided GitHub data. Let me analyze the data and organize it according to the requested sections.

Let me parse through the data:

**Overview:**
- Issues updated in last 24h: 50 (open/active: 39, closed: 11)
- PRs updated in last 24h: 50 (open: 43, merged/closed: 7)
- New releases: 0

**Latest Releases:** None

**Latest Issues (top by comment count):**
1. #125657 - Windows installation Python dependencies error (16 comments) - P2
2. #122438 - Linux desktop launcher self-heals Exec to managed venv (8 comments) - P1
3. #125350 - Fresh Windows install impossible issues (7 comments) - P2
4. #107232 - Windows subprocess hang in browser session (6 comments) - P2
5. #79087 - Windows desktop runtime probe timeout (6 comments) - P2
6. #125793 - Internal-event pins in-memory after gateway restart (5 comments) - P0
7. #107700 - Feature: secrets source-apply (5 comments) - P3
8. #46169 - Desktop find feature (5 comments, 1 reaction) - P3 - CLOSED
9. #122555 - pm activates wrong dependency environment (4 comments) - P1
10. #100532 - smart-approval ESCALATE issue (4 comments) - P2

**Latest Pull Requests (top):**
- #124882 - fix: retry directory-displacing renames on Windows (OPEN)
- #125883 - feat(desktop): display.version_label (OPEN)
- #76765 - feat(kanban): add audited update-body command (OPEN)


- #125882 - feat(matrix): expose explicit pin and unpin actions (OPEN)
- #125871 - fix(update): batch dependency consent (OPEN)
- #125874 - Retain MCP OAuth refresh state (OPEN)
- #125870 - fmt(js): auto-fix (CLOSED)
- #125875 - fix(cli): ignore web build temp dir (OPEN)
- #125876 - fix(agent): keep exit_code/error in tool error log (OPEN)
- #125877 - fix(tools): name missing patch body (OPEN)
- #125881 - Add fail-closed policy hooks for memory admission (OPEN)

I've compiled the complete roster of pull requests, noting their current status and categories. The batch shows active development across multiple components including desktop features, CLI improvements, agent logging, and system-level policy controls for memory management.

Looking at the issue backlog, I'm identifying the most pressing problems requiring attention. The Windows installation issues are particularly critical—multiple reports of Python dependency failures during setup, fresh install complications with Git and bzip2 dependencies, and subprocess hangs when executing batch files. These platform-specific installation barriers suggest systematic gaps in the Windows deployment pipeline that could prevent new users from successfully onboarding.

Beyond installation, I'm seeing session management problems: gateway restarts are losing internal-event pins, which could cause state inconsistencies, and session rendering is duplicating messages after compaction. Desktop integration also has gaps—deep link registration failures on Linux and blocked external links within the Skills Hub sandbox are limiting functionality. Additionally, there are cross-platform compatibility concerns with cron workers, PM source installs, and skill synchronization processes that need investigation.</think>

# Hermes Agent Project Digest — 2026-09-28

## 1. Today's Overview

Hermes Agent shows high activity today with 50 issues and 50 PRs updated in the last 24 hours. No new releases were published. The project is addressing critical Windows installation problems while advancing multi-session architecture and desktop UI refinements. Community engagement is strong, with 16 comments on a Windows installation bug indicating significant user pain. Seven PRs were merged/closed today, demonstrating continued delivery momentum despite ongoing compatibility challenges.

---

## 2. Releases

**No new releases today.** The project has no releases recorded in the past 24 hours.

---

## 3. Project Progress

### PRs Merged/Closed Today

| PR | Title | Status |
|----|-------|--------|
| [#125870](https://github.com/NousResearch/hermes-agent/pull/125870) | fmt(js): `npm run fix` auto-fix | Closed |
| [#125598](https://github.com/NousResearch/hermes-agent/pull/125598) | fix(install): fresh Windows 10 installs no longer die unpacking pinned Git | Closed |

### Notable PRs Opened Today

- **[#125883](https://github.com/NousResearch/hermes-agent/pull/125883)** — `feat(desktop): display.version_label` — Removes confusing `+<distance>` suffix from version pill
- **[#125882](https://github.com/NousResearch/hermes-agent/pull/125882)** — `feat(matrix): expose explicit pin and unpin actions` — Adds Matrix room pinning capabilities
- **[#125881](https://github.com/NousResearch/hermes-agent/pull/125881)** — Adds fail-closed policy hooks for memory admission and compression commits
- **[#125880](https://github.com/NousResearch/hermes-agent/pull/125880)** — `feat(desktop): copy a scheduled job's prompt from cron detail pane`
- **[#125878](https://github.com/NousResearch/hermes-agent/pull/125878)** — `feat(desktop): let show-ignored toggle reveal hygiene dirs like out/ and vendor/`
- **[#125879](https://github.com/NousResearch/hermes-agent/pull/125879)** — Fix FIPS compliance by passing `usedforsecurity=False` to hashlib digests
- **[#125874](https://github.com/NousResearch/hermes-agent/pull/125874)** — Retain MCP OAuth refresh state on malformed success responses
- **[#124882](https://github.com/NousResearch/hermes-agent/pull/124882)** — Fix retry logic for directory-displacing renames on Windows

---

## 4. Community Hot Topics

### Most Active Issues by Comment Count

| Issue | Title | Comments | Link |
|-------|-------|----------|------|
| #125657 | Windows install: Python dependencies error during setup | 16 | [View](https://github.com/NousResearch/hermes-agent/issues/125657) |
| #122438 | Linux desktop launcher self-heals Exec to managed venv | 8 | [View](https://github.com/NousResearch/hermes-agent/issues/122438) |
| #125350 | Fresh Windows install impossible: Git bzip2, ffmpeg 404, mirror 403 | 7 | [View](https://github.com/NousResearch/hermes-agent/issues/125350) |
| #107232 | Windows subprocess hang in _agent_browser_session_cmd | 6 | [View](https://github.com/NousResearch/hermes-agent/issues/107232) |
| #79087 | Windows desktop runtime probe timeout routes healthy install to reinstall | 6 | [View](https://github.com/NousResearch/hermes-agent/issues/79087) |

### Analysis

**Windows installation is the dominant pain point.** Three of the top five issues relate to Windows setup failures:
- Python dependency installation errors
- Missing bzip2 for Git extraction
- ffmpeg pin 404s and mirror 403s

The Linux desktop launcher issue (#122438) indicates post-update problems with GNOME integration. These issues reveal users struggling with cross-platform installation and upgrade workflows.

---

## 5. Bugs & Stability

### Critical (P0-P1) Bugs

| Issue | Title | Severity | Fix PR? |
|-------|-------|----------|---------|
| [#125793](https://github.com/NousResearch/hermes-agent/issues/125793) | Internal-event pins in-memory: gateway restart flips system prompt | P0 | — |
| [#122438](https://github.com/NousResearch/hermes-agent/issues/122438) | Linux desktop launcher self-heals Exec to managed venv | P1 | — |
| [#122555](https://github.com/NousResearch/hermes-agent/issues/122555) | pm activates dependency environment built for another interpreter | P1 | — |
| [#124279](https://github.com/NousResearch/hermes-agent/issues/124279) | Cron external worker uses raw interpreter, loses runtime dependencies | P1 | Duplicate: #125689 |
| [#125689](https://github.com/NousResearch/hermes-agent/issues/125689) | cron: restart-safe worker crashes with ModuleNotFoundError | P1 | — |

### High Priority (P2) Bugs

- **#125350** — Fresh Windows install impossible (multiple root causes)
- **#107232** — Windows subprocess hangs when executing .cmd files
- **#123985** — Desktop renders session's first messages twice after compaction
- **#121095** — browser_exec leaves stale browser_harness daemon processes
- **#124762** — Slack manifest generator clamps to 50 commands (actual limit: 25)

### Fixes Available
- [#125598](https://github.com/NousResearch/hermes-agent/pull/125598) — Windows 10 Git unpacking fix (merged)

---

## 6. Feature Requests & Roadmap Signals

### Notable Feature Requests

| Issue | Title | Priority | Signal |
|-------|-------|----------|--------|
| [#107700](https://github.com/NousResearch/hermes-agent/issues/107700) | feat(secrets): source-apply hydrates process for tool credentials | P3 | Active design discussion |
| [#110662](https://github.com/NousResearch/hermes-agent/issues/110662) | Make Desktop attachment storage follow configured profile workspace | P3 | Merged |
| [#46169](https://github.com/NousResearch/hermes-agent/issues/46169) | Desktop should support Ctrl+F/Cmd+F find | P3 | Closed |
| [#52532](https://github.com/NousResearch/hermes-agent/issues/52532) | Korean Language Support | P3 | User request |
| [#51694](https://github.com/NousResearch/hermes-agent/issues/51694) | Command Center (⌘K) should have FTS, search archived/cross-profile | P3 | User request |

### Roadmap Indicators
- **Multi-session architecture** (#106742) — Major refactor to have one gateway own every local session
- **Webapp mode** (#93508) — Serve Desktop renderer in browsers via `hermes webapp`
- **Secrets/vault improvements** — Multiple issues (#107700, #107705, #107698, #107704) indicate investment in credential management
- **Memory policy hooks** (#125881) — Fail-closed security model for memory admission

---

## 7. User Feedback Summary

### Pain Points Identified

1. **Windows Installation Barriers** — Users cannot complete fresh installs on Windows 10/11 without external tools (bzip2, ffmpeg). The bootstrap installer fails at multiple points.

2. **Linux Desktop Integration** — Post-update launcher breakage on GNOME suggests fragility in desktop integration.

3. **Cron Worker Failures** — Multiple users report cron workers failing with `ModuleNotFoundError` due to environment misconfiguration.

4. **Session State Loss** — Gateway restart loses internal-event pins, causing unexpected system prompt changes.

### Positive Signals

- **Desktop find feature** (#46169) closed — Users requested and received in-app search
- **Korean language support** (#52532) — Internationalization being addressed
- **Attachment storage** (#110662) — Profile workspace compliance delivered

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Title | Age | Status |
|-------|-------|-----|--------|
| [#69643](https://github.com/NousResearch/hermes-agent/issues/69643) | Linux local Desktop install silently fails to register hermes:// deep links | ~2 months | Open |
| [#97792](https://github.com/NousResearch/hermes-agent/issues/97792) | update: bundled-skill sync prints bare 'sync failed' — no diagnostics | ~1 month | Open |
| [#107232](https://github.com/NousResearch/hermes-agent/issues/107232) | Windows subprocess hang in browser session | ~18 days | Open |
| [#100532](https://github.com/NousResearch/hermes-agent/issues/100532) | smart-approval ESCALATE returns unanswerable pending_approval | ~27 days | Open |

### Long-Running PRs

| PR | Title | Age |
|----|-------|-----|
| [#106742](https://github.com/NousResearch/hermes-agent/pull/106742) | One gateway owns every local session | ~19 days |
| [#93508](https://github.com/NousResearch/hermes-agent/pull/93508) | feat(webapp): serve Desktop renderer in browsers | ~35 days |
| [#76765](https://github.com/NousResearch/hermes-agent/pull/76765) | feat(kanban): add audited update-body command | ~57 days |

---

*Generated: 2026-09-28 | Data source: GitHub NousResearch/hermes-agent*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to generate a structured project digest for IronClaw based on the provided GitHub data. Let me analyze the data and create the requested sections.

Data summary:
- Issues updated in last 24h: 1 (open: 1, closed: 0)
- PRs updated in last 24h: 6 (open: 5, merged/closed: 1)
- New releases: 0

Let me go through each item:

**Latest Issue:**
- #8113: Proposal: opt-in turn-0 tool selection (BM25F + embeddings) - Open, by CjS77

**Latest PRs:**
- #8114: OPEN - chore(deps): bump everything-else group (31 updates)
- #8104: CLOSED - chore(deps): bump everything-else group (29 updates)
- #8103: OPEN - chore(deps): bump actions group (8 updates)
- #7834: OPEN - chore(deps): bump wasm group (4 updates)
- #8078: OPEN - chore(deps): bump tokio-ecosystem group (2 updates)
- #7988: OPEN - chore(agents): refresh codebase knowledge graph

Now let me structure this into the requested format.</think>

# IronClaw Project Digest — 2026-09-28

## 1. Today's Overview

IronClaw (nearai/ironclaw) shows steady maintenance activity today with 1 new issue and 6 PR updates in the last 24 hours. The project is primarily receiving dependency updates across multiple groups (everything-else, actions, wasm, tokio-ecosystem), with 5 PRs open and 1 merged/closed. No new releases were published. The sole new issue represents a thoughtful architectural proposal for optimizing tool selection at conversation start, indicating ongoing refinement of core agent capabilities. Overall activity suggests a project in stable maintenance mode rather than heavy feature development.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

**Merged/Closed PRs:**

- **#8104** — [chore(deps): bump everything-else group with 29 updates](https://github.com/nearai/ironclaw/pull/8104) — Dependencies updated including uuid (1.24.0 → 1.26.1), base64 (0.22.1 → 0.23.1), and rust_decimal. Status: closed.

**Open PRs:**

- **#8114** — [chore(deps): bump everything-else group with 31 updates](https://github.com/nearai/ironclaw/pull/8114) — Bumps thiserror, uuid, base64, and 28 other packages; size: XL, risk: low.
- **#8103** — [chore(deps): bump actions group with 8 updates](https://github.com/nearai/ironclaw/pull/8103) — Updates GitHub Actions including anthropic/claude-code-action (1.0.183 → 1.0.228) and actions/setup-node (4.0.2 → 7.0.0).
- **#7834** — [chore(deps): bump wasm group with 4 updates](https://github.com/nearai/ironclaw/pull/7834) — Updates wasmtime, wasmtime-wasi, wit-component, and wit-parser; size: L, risk: medium.
- **#8078** — [chore(deps): bump tokio-ecosystem group with 2 updates](https://github.com/nearai/ironclaw/pull/8078) — Updates tower-http (0.7.0 → 0.7.1) and tokio-tungstenite.
- **#7988** — [chore(agents): refresh codebase knowledge graph](https://github.com/nearai/ironclaw/pull/7988) — Nightly workflow refresh of the committed codebase-memory bootstrap snapshot; size: XS, risk: low, contributor: core.

## 4. Community Hot Topics

**Issue #8113** — [Proposal: opt-in turn-0 tool selection (BM25F + embeddings)](https://github.com/nearai/ironclaw/issues/8113) — Author: CjS77 | Created: 2026-09-27

This is the only new issue and represents a substantive feature proposal. The author suggests using the first user message to predict which tools a conversation will need, then advertising only predicted tools plus four discovery bridges (`tool_search`, `tool_describe`, `tool_call`, `result_read`). The scoring uses a hybrid BM25F + embedding approach.

**Analysis:** This proposal addresses performance optimization and reduced token overhead at conversation initialization. By predicting tool needs upfront rather than exposing all available tools, the project could significantly reduce payload size for complex agent setups. The combination of BM25F (a proven text retrieval algorithm) with embeddings shows careful engineering thinking about accuracy vs. computational cost trade-offs.

## 5. Bugs & Stability

No bug reports, crashes, or regressions were filed in the last 24 hours. The dependency update PRs (#8114, #8103, #7834, #8078) are routine maintenance and do not indicate any stability issues.

## 6. Feature Requests & Roadmap Signals

**Active Feature Proposal:**

- **#8113** — [opt-in turn-0 tool selection (BM25F + embeddings)](https://github.com/nearai/ironclaw/issues/8113) — This is the most noteworthy feature signal. It proposes an opt-in optimization that could improve agent startup performance and reduce unnecessary tool exposure. Given the detailed technical approach, this appears to come from an experienced contributor familiar with the codebase.

**Prediction:** This feature could plausibly appear in a future minor release if accepted, as it represents an optional optimization rather than a breaking change. The opt-in nature makes it a low-risk addition.

## 7. User Feedback Summary

No user feedback (comments, reactions) was recorded on today's issues or PRs. The lack of community engagement on today's items suggests these are routine maintenance activities rather than user-facing changes. The feature proposal (#8113) has not yet attracted community reaction, likely due to its recent creation.

## 8. Backlog Watch

All 6 PRs and the 1 issue tracked today are active and recently updated (2026-09-27), indicating responsive maintainer attention. No long-unanswered items appear in the 24-hour window. The dependency update PRs are self-explanatory and automated (dependabot), while the knowledge graph refresh (#7988) is a routine CI workflow artifact.

---

*Digest generated from nearai/ironclaw GitHub data for 2026-09-28.*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a structured English QwenPaw project digest for 2026-09-28 based on the provided GitHub data. Let me analyze the data and organize it according to the specified sections.

Let me go through each section:

1. **Today's Overview** - Need to summarize project status based on the data:
   - 8 issues updated in last 24h (6 open, 2 closed)
   - 4 PRs updated in last 24h (all open, 0 merged)
   - 0 new releases

2. **Releases** - No new releases, so this will be omitted

3. **Project Progress** - No merged/closed PRs today, so I'll note what's being worked on

4. **Community Hot Topics** - Looking at issues with most comments:
   - #7957 has 3 comments
   - #4525 has 2 comments
   - #8000 has 1 comment
   - #7999 has 1 comment
   - #7998 has 1 comment
   - #7997 has 1 comment
   - #7995 has 1 comment
   - #7994 has 1 comment

5. **Bugs & Stability** - Bugs reported:
   - #8000: Desktop double-launch opens a second window (Windows single-instance guard issue)
   - #7995: Files panel refresh leaves expanded folders stale
   - #7994: Context display status not updating timely and not compressing (closed)
   - #7998: Context compression timing question (closed)

6. **Feature Requests & Roadmap Signals**:
   - #7957: Manual deactivation of pre-made models and channels
   - #4525: Agent self-managed context lifecycle
   - #7999: Desktop UI font size adjustment
   - #7997: Message retraction/editing and workspace rollback
   - #6874: MCP tool call timeout configuration (under review)

7. **User Feedback Summary**:
   - Users want better context management
   - Desktop app issues on Windows
   - UI improvements needed (font size)
   - File panel refresh issues

8. **Backlog Watch**:
   - #4525 has been open since 2026-05-19 (about 4 months)
   - #6874 has been under review since 2026-08-10 (about 7 weeks)

Now I'll write the digest.</think>

# QwenPaw Project Digest — 2026-09-28

## 1. Today's Overview

QwenPaw (agentscope-ai/QwenPaw) shows steady community activity on September 28, 2026. The project logged **8 issue updates** (6 open, 2 closed) and **4 pull request updates** (all open, 0 merged) within the last 24 hours. No new releases were published. The issue queue is healthy with a mix of bug reports, feature requests, and enhancement proposals, primarily focused on the desktop client, context management, and UI/UX improvements. No PRs reached merge readiness today, suggesting ongoing review cycles or finalization of in-flight work.

---

## 2. Releases

*No new releases published in the last 24 hours.*

---

## 3. Project Progress

No pull requests were merged or closed in the past 24 hours. All four tracked PRs remain open and under active development:

| PR | Title | Author | Status |
|----|-------|--------|--------|
| [#8001](https://github.com/agentscope-ai/QwenPaw/pull/8001) | fix(runtime): keep timeout tool results recoverable | axelray-dev | Open |
| [#7956](https://github.com/agentscope-ai/QwenPaw/pull/7956) | feat(console): unify settings UX and smooth conversation transitions | rayrayraykk | Open |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | feat(mcp): add configurable tool call timeout | AaronZ345 | Under Review |
| [#7996](https://github.com/agentscope-ai/QwenPaw/pull/7996) | fix(console): refresh expanded folders in Files panel | iluv7 | Open |

The most mature PR appears to be **#6874** (under review since August 10), which introduces configurable MCP tool call timeouts—a feature addressing a known pain point for users running long-running agent workflows.

---

## 4. Community Hot Topics

The most active discussions by comment count:

| Issue | Title | Comments | Author |
|-------|-------|----------|--------|
| [#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) | Recommendation: It is possible to manually deactivate/disable the existence of pre-made models and channels | 3 | dylanleesky |
| [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) | Agent self-managed context lifecycle - auto checkpoint & reset for cron tasks | 2 | dianguanboss |

**Analysis:** The top-discussed issue (#7957) reflects a user experience preference: users want granular control to disable unused pre-made models and channels, driven by aesthetic/organizational concerns ("some people have obsessive compulsive disorder"). Issue #4525 addresses a substantive performance need—agents running automated workflows lose execution quality as context grows, even with automatic compaction, degrading noticeably at 50-60% context utilization. Both issues indicate demand for more granular control over resource management and automation behavior.

---

## 5. Bugs & Severity

Two new bugs reported in the last 24 hours:

| Issue | Severity | Title | Fix PR |
|-------|----------|-------|--------|
| [#8000](https://github.com/agentscope-ai/QwenPaw/issues/8000) | **Medium-High** | Desktop double-launch opens a second window and terminates the first instance (no single-instance guard on Windows) | — |
| [#7995](https://github.com/agentscope-ai/QwenPaw/issues/7995) | **Low-Medium** | Files panel refresh leaves expanded folders stale | [#7996](https://github.com/agentscope-ai/QwenPaw/pull/7996) |

**#8000** is the more critical issue—a Windows desktop bug where double-clicking the executable while the app is already running opens a second independent window and kills the first instance's live backend, causing data loss. This directly impacts user workflow stability on the platform with the largest install base. **#7995** is less severe and already has an associated fix PR (#7996) in progress.

Two additional context-related issues (#7998, #7994) were closed as questions or resolved, indicating ongoing user confusion about context compression triggers—potential documentation or UX gap.

---

## 6. Feature Requests & Roadmap Signals

Five feature requests were logged today:

| Issue | Title | Domain | Likelihood of Near-Term Implementation |
|-------|-------|--------|----------------------------------------|
| [#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) | Manual deactivation of pre-made models and channels | UI/UX | Medium — user-friendly enhancement |
| [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) | Agent self-managed context lifecycle (auto checkpoint & reset for cron tasks) | Core Agent Runtime | **High** — addresses documented quality degradation |
| [#7999](https://github.com/agentscope-ai/QwenPaw/issues/7999) | Desktop UI font size adjustable (小/默认/大/特大) | Desktop UI | Medium — accessibility request |
| [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) | Support message retraction/editing and workspace rollback in WebUI | WebUI | Low-Medium — complex implementation |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | Add configurable tool call timeout (MCP) | MCP/Tooling | **High** — PR already under review |

**Prediction:** Based on PR activity and issue volume, the next release (likely a minor or patch version) will likely include the **configurable MCP tool call timeout** (#6874), the **Files panel refresh fix** (#7996), and potentially the **desktop UI font size adjustment** (#7999) given accessibility relevance. The agent context lifecycle feature (#4525) addresses a core performance issue and may be prioritized for a near-term release pending design approval.

---

## 7. User Feedback Summary

**Pain Points Identified:**

- **Context management frustration:** Users report that context compression is not triggered automatically during agent-driven workflows, only on manual user submissions. The context indicator circle sometimes fails to update when switching conversations, requiring a full app restart (#7994). These issues suggest confusion or gaps in the automatic context management system.
- **Windows desktop stability:** The double-launch bug (#8000) causing instance termination is a significant desktop reliability issue for Windows users.
- **Accessibility:** Users with visual impairments and high-DPI display users request adjustable font sizes (#7999).
- **UI polish:** Users desire more control over the interface—ability to hide unused models/channels (#7957), edit/retract messages (#7997)—reflecting a desire for personalized, clutter-free workspaces.

**Satisfaction Signals:** Active PR contributions (#8001, #7956, #7996) from the community indicate ongoing developer engagement. The fact that bug reports include detailed reproduction steps and version information (e.g., #8000 specifies v2.2.1) suggests an experienced user base.

---

## 8. Backlog Watch

Long-running issues requiring maintainer attention:

| Issue | Open Since | Title | Concern |
|-------|------------|-------|---------|
| [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) | 2026-05-19 (~4 months) | Agent self-managed context lifecycle - auto checkpoint & reset for cron tasks | Core feature request; impacts automated workflow quality |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | 2026-08-10 (~7 weeks) | feat(mcp): add configurable tool call timeout | Under review—needs final merge decision |

**#4525** has been open for approximately four months without a tagged PR or clear roadmap signal. Given it addresses a fundamental quality-of-execution issue for automated agents (context degradation at 50-60% utilization), it represents a high-value feature gap. Maintainers should consider providing a status update or scoping guidance.

---

*Generated: 2026-09-28 | Data source: GitHub agentscope-ai/QwenPaw*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to generate a structured project digest for ZeroClaw based on the provided GitHub data. Let me analyze the data and create the digest following the specified sections.

Let me organize the data:

1. **Issues**: 43 updated in last 24h (37 open, 6 closed)
2. **PRs**: 50 updated in last 24h (47 open, 3 merged/closed)
3. **Releases**: 0 new releases

Now let me categorize and analyze:

**High severity bugs (P0/P1)**:
- #11198 - [Bug]: Delegated memory tools lose principal scope (P0, security risk)
- #11197 - [Bug]: Session resume restores forwarded environment after admin revocation (P0, security risk)
- #11136 - [Bug]: concurrent file_edit/file_write calls to the same path silently drop one edit (P1, high risk)
- #10778 - [Bug]: multimodal image cap eviction rewrites earlier history messages (P1, high risk)
- #11130 - [Bug]: DeepSeek DSML tool-call markup is not parsed (P1, high risk)

**Active PRs with significant changes**:
- #10407 - feat(sessions): add persistent session prompt attachments (XL size, many labels)
- #7821 - feat(security): canonical sandbox_policy schema (XL size, high risk)
- #10480 - fix(runtime): recover from rejected image requests (XL size)
- #10197 - fix(acp): persist interrupted turn progress (XL size)
- #10070 - feat(tools): gate file_download against SSRF (XL size, closed)
- #11196 - feat(build): stamp daemon and relay binaries with their build commit


- #11099 - feat(enroll): print a relay frontdoor link and QR
- #11068 - feat(channels): narrow channel turns by sender role
- #11076 - feat(tools): add agy_cli coding-CLI tool

The project shows active development across security, session management, and channel features. Notable trends include multiple high-risk fixes around memory isolation and file operations, plus substantial new functionality around enrollment and channel access control. The security-focused PRs (#7821, #10070) suggest hardening is a priority.</think>

# ZeroClaw Project Digest — 2026-09-28

## 1. Today's Overview

ZeroClaw maintains high development velocity with **43 issues and 50 pull requests updated in the last 24 hours**. The project shows active progress across security hardening, channel improvements, and session management features. No new releases were published today. Several critical P0 security bugs were newly reported, while multiple large-scale PRs (XL size) continue advancing through review, indicating substantial upcoming changes. The overall health is solid but the security bug queue warrants close monitoring.

---

## 2. Releases

No new releases today.

---

## 3. Project Progress

**Closed/Merged PRs Today:**

| PR | Title | Size |
|---|-------|-----|
| [#10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070) | feat(tools): gate file_download against SSRF with private-host opt-in | XL |
| [#11199](https://github.com/zeroclaw-labs/zeroclaw/issues/11199) | [Bug]: Resumed shell environment diverges from admission state | — |

**Key Advancements:**

- **Security hardening**: SSRF protection for `file_download` merged — a significant security improvement for the tool layer.
- **Build tooling**: [#11196](https://github.com/zeroclaw-labs/zeroclaw/pull/11196) adds build commit stamping to daemon and relay binaries, improving debugging for production deployments.
- **WhatsApp channel**: Multiple PRs merged/improving thematic breaks, heading rendering, and voice note handling.
- **Telegram reactions**: [#10843](https://github.com/zeroclaw-labs/zeroclaw/pull/10843) implements `add_reaction`/`remove_reaction` with proper API calls.

---

## 4. Community Hot Topics

**Most Discussed Issues (by comment count):**

1. **[#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523)** — Bootstrap file truncation at 6000 chars is invisible to the operator *(5 comments, closed)*
   - *Root cause*: `compact_context` silently truncates workspace bootstrap files, confusing operators about what context the agent actually sees.

2. **[#11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036)** — OpenCode big-pickle returns 403 FreeTierError *(5 comments, closed)*
   - Provider compatibility issue with OpenCode's free tier model.

3. **[#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323)** — Define execution-tree iteration budget ownership *(4 comments)*
   - Core agent loop architecture discussion; `ToolLoop.shared_budget` needs proper ownership semantics.

4. **[#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943)** — Realtime voice-host channel (backend-agnostic WS client) *(4 comments)*
   - Strong community interest in voice integration; proposed as backend-agnostic WebSocket client aligned with Wyoming protocol.

5. **[#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053)** — RFC: Knowledge graph as first-class agent memory layer *(3 comments)*
   - Major architectural proposal: elevate knowledge graph from tool to memory layer, fundamentally changing how agent context works.

**Hot PRs (by activity/size):**

- **[#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)** — Persistent session prompt attachments (XL, 20+ labels) — active development
- **[#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821)** — Canonical sandbox_policy schema (XL, security-focused)
- **[#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480)** — Recover from rejected image requests (XL)

---

## 5. Bugs & Stability

**Critical (P0) — Immediate Attention Required:**

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) — Delegated memory tools lose principal scope | P0, S0, security | OPEN | No |
| [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) — Session resume restores forwarded environment after admin revocation | P0, S0, security | OPEN | No |

**High Priority (P1):**

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136) — Concurrent file_edit/file_write drops edits under parallel_tools | P1, S0, data loss | OPEN, in-progress | No |
| [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778) — Multimodal image cap eviction rewrites history & invalidates cache | P1, S0 | OPEN, accepted | [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) in progress |
| [#11130](https://github.com/zeroclaw-labs/zeroclaw/issues/11130) — DeepSeek DSML tool-call markup not parsed | P1, S1, workflow blocked | OPEN, in-progress | No |
| [#10008](https://github.com/zeroclaw-labs/zeroclaw/issues/10008) — Prove plugin wasi:http hook dials pinned address (e2e test) | P1, security | OPEN, no-stale | No |

**Notable Test Flakiness:**

- [#11180](https://github.com/zeroclaw-labs/zeroclaw/issues/11180) — Flaky test under parallel runtime gate
- [#10919](https://github.com/zeroclaw-labs/zeroclaw/issues/10919) — A2A/HTTP tool tests use separate locks for global proxy state

---

## 6. Feature Requests & Roadmap Signals

**High-Impact Features Advancing:**

| Feature | Issue/PR | Status | Likely Version |
|---------|----------|--------|----------------|
| Knowledge graph as first-class memory | [#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) | RFC, in progress | v0.9.0+ |
| Canonical sandbox_policy schema | [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) | OPEN, needs author action | v0.8.6/v0.9.0 |
| Persistent session prompt attachments | [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) | OPEN, active development | v0.8.6 |
| Realtime voice-host channel | [#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) | OPEN, parking-lot | Future |
| Channel turns by sender role | [#11068](https://github.com/zeroclaw-labs/zeroclaw/pull/11068) | OPEN | v0.8.6 |
| Stall watchdog enabled by default | [#10168](https://github.com/zeroclaw-labs/zeroclaw/issues/10168) | OPEN, accepted | v0.8.6 |

**Tracker for Upcoming Releases:**
- [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — Runtime and gateway delivery tracker for v0.8.6 and v0.9.0

---

## 7. User Feedback Summary

**Pain Points Identified from Issues:**

1. **Invisible truncation** — Users with `compact_context` enabled don't see that bootstrap files are truncated at 6,000 chars, leading to confusion about agent context.
2. **Windows Ctrl+C force quit** — Users on Windows report zeroclaw exits with code 1073741510 on Ctrl+C, a significant UX issue for interactive sessions.
3. **Backspace in REPL** — Multi-byte character handling in the interactive REPL deletes raw bytes instead of characters.
4. **Memory not working as memory** — Users expect the knowledge graph to function as persistent memory, but it's currently a tool requiring explicit invocation.

**Satisfaction Signals:**

- WhatsApp channel improvements (thematic breaks, voice notes) appear well-received with multiple stacked PRs advancing.
- Telegram reaction implementation addresses long-standing gap in channel feature parity.

---

## 8. Backlog Watch

**Issues Needing Maintainer Attention:**

| Issue | Age | Status | Why Watch |
|-------|-----|--------|-----------|
| [#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028) — Ctrl+C on Windows causes force quit | ~3 months | OPEN, no-stale | P2 but impacts Windows user experience significantly |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — Runtime/gateway delivery tracker | ~4 months | OPEN | Critical path for v0.8.6/v0.9.0 releases |
| [#11092](https://github.com/zeroclaw-labs/zeroclaw/issues/11092) | Referenced in [#11090](https://github.com/zeroclaw-labs/zeroclaw/pull/11090) | Blocked | Blocks runtime composition contract docs |

**PRs Requiring Review/Action:**

| PR | Author | Age | Blocked By |
|----|--------|-----|------------|
| [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) — Persistent sessions | vrurg | ~1 month | Needs author action |
| [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) — Sandbox policy | rarean | ~3 months | Needs author action |
| [#11090](https://github.com/zeroclaw-labs/zeroclaw/pull/11090) — Runtime composition contract docs | JordanTheJet | 4 days | Blocked by #11092 (Core Team) |

---

*Generated from GitHub data for 2026-09-28*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*