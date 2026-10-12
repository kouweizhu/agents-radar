# OpenClaw Ecosystem Digest 2026-10-12

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-10-12 01:40 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

<think>The user wants me to generate a structured project digest for OpenClaw based on the provided GitHub data. Let me analyze the data and create the requested sections.

Let me organize the key information:

**Data Overview:**
- Issues: 500 total (345 open, 155 closed in last 24h)
- PRs: 500 total (319 open, 181 merged/closed in last 24h)
- New releases: 1 (v2026.10.5-beta.1)

**Latest Release:**
- v2026.10.5-beta.1: Focus on safer updates with recovery from stale leases, interrupted activations, etc.

**Top Issues by Comments:**
1. #143524 - SQLite WAL grows to 1.4-2.8 GB (122 comments) - P0, Windows
2. #91588 - Gateway Memory Leak RSS 350MB to 15.5GB (38 comments) - P0
3. #97616 - Leaks unreaped child processes (18 comments) - P1
4. #148707 - Reply lost with 'Reply operation has no active tool authority snapshot' (18 comments) - P1
5. #157989 - Plugin source capture rewrites 1.1-1.4 GB per CLI command (15 comments) - P1
6. #160521 - Gateway crash state DB read-admission seal (15 comments) - P0

**Recent PRs:**
Looking at the PRs, I can see several that are open and being worked on.

Let me now create the structured digest with all 8 sections.</think>

# OpenClaw Project Digest — 2026-10-12

## 1. Today's Overview

OpenClaw shows high development activity with 500 issues and 500 PRs updated in the last 24 hours. The project released **v2026.10.5-beta.1** focused on improving update safety and recovery mechanisms. Community engagement remains robust with the top issue (SQLite WAL growth) gathering 122 comments, indicating significant user pain around Windows database performance. Gateway stability continues to be a concern, with multiple P0 issues around memory leaks and crash loops actively being discussed.

---

## 2. Releases

### v2026.10.5-beta.1 — openclaw 2026.10.5-beta.1

**Highlights:**
- **Safer updates:** Updates now complete reliably across devices, filesystems, Windows elevation, and interrupted activations. The release recovers from stale leases or changed evidence instead of stranding installs or blocking future updates.

**References:** GitHub Release: [openclaw/openclaw releases](https://github.com/openclaw/openclaw/releases)

---

## 3. Project Progress

Recent merged/closed PRs today include:

| PR | Description | Status |
|---|---|---|
| [#169247](https://github.com/openclaw/openclaw/pull/169247) | build(ui): upgrade Solid to 2.0.0-rc.14 | CLOSED |
| [#169402](https://github.com/openclaw/openclaw/pull/169402) | fix(ui): new session shows "runner isn't ready" while page loads | CLOSED |
| [#169326](https://github.com/openclaw/openclaw/pull/169326) | fix(control-ui): restore rail snapshots for large rosters and Pages | CLOSED |

**Active development areas:**
- UI/Control UI refinements (Solid 2 migration, session runner fixes)
- ClickClack delivery improvements
- Telegram channel fixes
- Process/session handling cleanup

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **[#143524](https://github.com/openclaw/openclaw/issues/143524)** — **Agent SQLite WAL grows to 1.4–2.8 GB in days** (122 comments)
   - **Severity:** P0, impact:message-loss, crash-loop, ux-release-blocker
   - **Summary:** On Windows, the SQLite WAL file grows unbounded despite wal_autocheckpoint=1000, reaching 2865 MB and blocking gateway startup
   - **Root cause need:** Users need reliable checkpointing on Windows filesystems

2. **[#91588](https://github.com/openclaw/openclaw/issues/91588)** — **Critical: Gateway Memory Leak — RSS grows from 350MB to 15.5GB** (38 comments)
   - **Severity:** P0, maturity:stable
   - **Summary:** Severe memory leak causes OOM crashes after 2-3 days, triggering restart cycles
   - **User need:** Production stability for long-running deployments

3. **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — **OpenClaw leaks unreaped hook/tool child processes** (18 comments)
   - **Severity:** P1, impact:crash-loop
   - **Summary:** Zombie process accumulation causes runtime degradation
   - **User need:** Proper process lifecycle management

4. **[#148707](https://github.com/openclaw/openclaw/issues/148707)** — **Reply lost with 'Reply operation has no active tool authority snapshot'** (18 comments)
   - **Severity:** P1, impact:message-loss
   - **Summary:** Interactive session turns die before delivering replies, losing responses entirely

5. **[#157989](https://github.com/openclaw/openclaw/issues/157989)** — **Plugin source capture rewrites ~1.1–1.4 GB per CLI command** (15 comments)
   - **Severity:** P1, impact:ux-release-blocker
   - **Summary:** Severe SSD wear from repeated byte-copying and hashing of plugin files

---

## 5. Bugs & Stability

### P0 (Critical) Issues

| Issue | Title | Severity | Fix PR? |
|---|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL grows to 1.4–2.8 GB (Windows) | P0 | No |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway Memory Leak RSS 350MB→15.5GB | P0 | No |
| [#160521](https://github.com/openclaw/openclaw/issues/160521) | Gateway crash: state DB read-admission seal | P0 | No |
| [#155191](https://github.com/openclaw/openclaw/issues/155191) | Native memory leak in 2026.9.5 (~1 GiB/30s) | P0 | No |
| [#167771](https://github.com/openclaw/openclaw/issues/167771) | Updates permanently blocked by recovery interlock | P0 | No |
| [#158126](https://github.com/openclaw/openclaw/issues/158126) | Gateway shutdown fails with "Worker environment inventory closed" | P0 | No |

### Notable Regressions

- **[#168955](https://github.com/openclaw/openclaw/issues/168955)** — Startup regression: ready ~1030s vs ~410s on 2026.9.9 (Windows); sidecars.control-ui-assets blocks 477s
- **[#164113](https://github.com/openclaw/openclaw/issues/164113)** — Update fails at updater-runtime-retention with FICLONE EPERM inside unprivileged LXC

---

## 6. Feature Requests & Roadmap Signals

### Active Feature PRs

| PR | Description | Status |
|---|---|---|
| [#148193](https://github.com/openclaw/openclaw/pull/148193) | feat(llama-cpp): add managed local OCR and vision setup | Needs proof |
| [#163693](https://github.com/openclaw/openclaw/pull/163693) | feat: offer optional memory embedding setup | Ready for maintainer |
| [#169514](https://github.com/openclaw/openclaw/pull/169514) | feat(clawrouter): sidebar dashboard for subscription pool headroom | Open |
| [#169512](https://github.com/openclaw/openclaw/pull/169512) | feat: start fresh Tauri installs with a local Gateway | Open |

### User-Requested Enhancements

- **[#14785](https://github.com/openclaw/openclaw/issues/14785)** — Reduce tool schema token overhead (~3,500 tok/session) — P2, significant context cost
- **[#111143](https://github.com/openclaw/openclaw/issues/111143)** — Allow pinning plugin tabs in Control UI sidebar
- **[#74481](https://github.com/openclaw/openclaw/issues/74481)** — feat: dynamic catalog refresh from configured provider /v1/models

---

## 7. User Feedback Summary

### Pain Points

1. **Windows Performance:** Multiple issues specifically mention Windows-specific problems—SQLite WAL growth, startup regression, cron failures with DataCloneError
2. **Memory Management:** Gateway memory leaks (native and V8 heap) causing OOM crashes affect production stability
3. **Update Reliability:** Users report blocked updates with no repair path; recovery mechanisms failing
4. **Plugin System:** Source capture causing massive SSD writes and staging failures on Windows

### Satisfaction Signals

- Release v2026.10.5-beta.1 addresses core update safety concerns raised in multiple issues
- Active community engagement (122 comments on top issue) indicates invested user base
- UI/UX improvements continuing (Solid 2 migration, Control UI fixes)

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Title | Age | Status |
|---|---|---|---|
| [#69242](https://github.com/openclaw/openclaw/issues/69242) | exec tool on Linux intermittently SIGKILLs broad find/grep | ~6 months | OPEN, stale |
| [#48709](https://github.com/openclaw/openclaw/issues/48709) | Gemini 2.5 Pro: textSignature bloat + think tags | ~7 months | OPEN |
| [#88087](https://github.com/openclaw/openclaw/issues/88087) | Poor UX for long-running background tasks | ~5 months | OPEN, stale |

### PRs Needing Maintainer Attention

| PR | Description | Status |
|---|---|---|
| [#147629](https://github.com/openclaw/openclaw/pull/147629) | fix(update): preserve dirty checkouts by installing dev separately | Waiting on author |
| [#168718](https://github.com/openclaw/openclaw/pull/168718) | refactor(cron): extract prompt executor | Waiting on author |
| [#169431](https://github.com/openclaw/openclaw/pull/169431) | fix(codex): recover follow-up requests after failed thread preparation | Waiting on author |

---

*Digest generated from OpenClaw GitHub data — 2026-10-12*

---

## Cross-Ecosystem Comparison

<think>The user wants a cross-project comparison report for the four agent projects I just analyzed: OpenClaw, Hermes Agent, QwenPaw, and ZeroClaw. Let me analyze each project's characteristics and create a comprehensive comparison.

Let me organize the key data points from each digest:

## OpenClaw
- 500 issues (345 open, 155 closed in last 24h)
- 500 PRs (319 open, 181 merged/closed in last 24h)
- 1 new release (v2026.10.5-beta.1)
- Heavy focus on stability (P0 memory leaks, SQLite issues, crash loops)
- P1 issues: plugin source capture, reply lost, child process leaks
- Top issues: SQLite WAL growth (122 comments), memory leak 350MB→15.5GB (38 comments)

## Hermes Agent
- 50 issues (44 open, 6 closed)
- 50 PRs (44 open, 6 merged/closed)
- No releases today
- Desktop performance issues (session load, CPU pegging)
- API key misclassification (security)
- Windows PATH issues

## QwenPaw
- 10 issues (all open)
- 20 PRs (8 open, 12 merged/closed)
- No releases today
- Features: HarmonyOS client, persistent session state
- Bugs: Console silent failures, Codex backend breaks, skill binary corruption

## ZeroClaw
- 22 issues (20 open, 2 closed)
- 50 PRs (47 open, 3 merged/closed)
- No releases today
- Security issues (per-agent ownership scoping, knowledge graph isolation)
- Plugin ecosystem (WASM, signing, quickstart)
- Persistent memory tracker

Now let me create the cross-project comparison.</think>

# Cross-Project Comparison: Personal AI Assistant Ecosystem

---

## 1. Ecosystem Overview

The personal AI assistant and agent framework landscape is experiencing rapid maturation with significant variation in architecture, stability focus, and community engagement. Projects range from enterprise-grade platforms like **OpenClaw** (high issue volume, mature release cadence) to emerging ecosystems like **ZeroClaw** (aggressive feature development with security hardening) and **QwenPaw** (cross-platform expansion including mobile). All four projects are actively addressing multi-agent orchestration, persistent memory, and plugin extensibility—core requirements for production-grade autonomous systems. The high volume of P0/P1 bugs across all platforms indicates the entire sector is grappling with reliability challenges inherent to autonomous agent runtimes.

---

## 2. Activity Comparison

| Metric | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|--------|----------|--------------|---------|----------|
| **Issues Updated (24h)** | 500 | 50 | 10 | 22 |
| **Open Issues** | 345 | 44 | 10 | 20 |
| **Closed Issues** | 155 | 6 | 0 | 2 |
| **PRs Updated (24h)** | 500 | 50 | 20 | 50 |
| **Open PRs** | 319 | 44 | 8 | 47 |
| **Merged/Closed PRs** | 181 | 6 | 12 | 3 |
| **New Releases** | 1 (v2026.10.5-beta.1) | 0 | 0 | 0 |
| **Health Score** | High (active releases, resolving bugs) | Medium (high open backlog) | Medium (steady PR merges) | Medium-High (heavy dev, security fixes pending) |

*Health Score is an approximate assessment based on release cadence, bug resolution velocity, and open/closed ratios.*

---

## 3. OpenClaw's Position

### Advantages

- **Mature release pipeline**: Only project with recent stable releases and structured beta versioning
- **Community scale**: Highest engagement (500 items/24h), 122 comments on top issue vs. 21 for Hermes and ~3 for others
- **Enterprise features**: Focus on gateway stability, plugin source capture, and update safety aligns with production deployment requirements

### Technical Approach Differences

| Aspect | OpenClaw | Hermes | QwenPaw | ZeroClaw |
|--------|----------|--------|---------|----------|
| **Primary focus** | Gateway stability, enterprise reliability | Desktop session performance | Cross-platform (HarmonyOS) | Security, plugin ecosystem |
| **Memory model** | Plugin-based with source capture | Desktop session persistence | Server-side session state | Per-agent scoping, persistent memory |
| **Update mechanism** | Safer updates with recovery | hermes update (stale warnings) | — | — |
| **Security posture** | Plugin sandboxing | API key validation | — | Per-agent ownership (S0 issues) |

### Community Size Comparison

OpenClaw's 122-comment issue vs. Hermes Agent's 21-comment top issue demonstrates significantly larger active community. ZeroClaw and QwenPaw have smaller but engaged communities (10 and 3 comments respectively on top issues).

---

## 4. Shared Technical Focus Areas

### Persistent Memory

- **OpenClaw**: Plugin source capture and knowledge retrieval
- **ZeroClaw**: Multi-plane persistent memory (curation, relevance, operability) tracked in #8891
- **QwenPaw**: Session-level change notifications for real-time sync
- **Hermes Agent**: Profile-level heartbeat persistence

> *All four projects are investing in memory continuity—the ability for agents to retain context and knowledge across sessions.*

### Multi-Agent Orchestration

- **ZeroClaw**: Per-agent ownership scoping (#9646, #9647) — S0 security isolation
- **QwenPaw**: Per-chat approval levels, HarmonyOS multi-device support
- **Hermes Agent**: Per-topic configuration and delegation
- **OpenClaw**: Gateway multi-tenant stability

> *Multi-agent deployment is a common architectural goal, with security isolation (data leakage prevention) as the primary challenge.*

### Plugin Extensibility

- **ZeroClaw**: WASM plugin host, signing, verified updates, quickstart installation
- **QwenPaw**: Plugin market with version compatibility filtering
- **OpenClaw**: Plugin source capture (1.1–1.4 GB rewrite issue)
- **Hermes Agent**: MCP (Model Context Protocol) improvements

> *Plugin ecosystems are maturing; WASM-based plugin hosts (ZeroClaw #11347) represent a cutting-edge approach.*

### Reliability & Stability

- **Memory leaks**: OpenClaw (350MB → 15.5GB RSS), Hermes Agent (native + V8 heap)
- **Startup regression**: OpenClaw, Hermes Agent Desktop
- **Connection handling**: ZeroClaw (Tailscale tunnel), QwenPaw (Codex backend)
- **Update safety**: OpenClaw's v2026.10.5-beta.1, Hermes Agent's stale warnings

> *Every project is addressing memory management and connection resilience—fundamental challenges for long-running autonomous agents.*

---

## 5. Differentiation Analysis

### Target Users

| Project | Primary User |
|---------|--------------|
| OpenClaw | Enterprise deployments, self-hosted AI infrastructure |
| Hermes Agent | Developers seeking desktop-native agent experience |
| QwenPaw | Cross-platform users (Web, Desktop, HarmonyOS) |
| ZeroClaw | Security-conscious multi-agent operators, power users |

### Technical Architecture

- **OpenClaw**: Gateway-centric architecture with SQLite (WAL performance issues on Windows)
- **Hermes Agent**: Desktop-first with local SQLite/FTS session storage
- **QwenPaw**: Server-side session state with channel abstraction
- **ZeroClaw**: Modular channel architecture, firejail sandboxing, WASM plugin host

### Feature Focus Differentiation

- **OpenClaw** → Production stability, update safety, enterprise plugin management
- **Hermes Agent** → Desktop UX, browser automation, cron scheduling
- **QwenPaw** → Mobile (HarmonyOS), quickstart, MCP improvements
- **ZeroClaw** → Security isolation, dark factory workflows, cron extraction

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration** | OpenClaw, ZeroClaw | 40–50+ PRs/24h, heavy feature development, security hardening |
| **Steady Development** | Hermes Agent, QwenPaw | 20–50 items/24h, balanced bug fixes and features |
| **Stabilizing** | — | None identified in current snapshot |

### Maturity Assessment

- **Most Mature**: OpenClaw — structured releases, defined versioning (beta/stable), enterprise focus
- **Growing Maturity**: ZeroClaw — active security work, release tracking, but S0 issues indicate early-stage security hardening
- **Emerging**: Hermes Agent, QwenPaw — active feature development, desktop/mobile focus, smaller community

### Velocity vs. Stability

| Project | Velocity | Stability Focus | Net Assessment |
|---------|----------|------------------|-----------------|
| OpenClaw | High | Resolving P0 memory/SQLite issues | Delivering |
| ZeroClaw | High | Security S0 issues pending | Building |
| QwenPaw | Moderate | Console/bug fixes | Progressing |
| Hermes Agent | Moderate | Desktop session issues | Maintaining |

---

## 7. Trend Signals

### Industry Trends Extracted

1. **Persistent Memory is a Must-Have** — All four projects are investing in cross-session memory; users expect agents to "remember" context across restarts. ZeroClaw's tracker (#8891) and OpenClaw's knowledge retrieval represent different architectural approaches to the same requirement.

2. **Security Isolation is the Next Frontier** — ZeroClaw's S0-rated per-agent scoping issues (#9646, #9647) highlight a critical gap across the ecosystem. Multi-agent deployments require strict data isolation; no project has fully solved this.

3. **Plugin Ecosystems are Proliferating** — WASM-based plugins (ZeroClaw), MCP improvements (QwenPaw, Hermes), and plugin signing/marketplaces indicate a move toward extensible agent platforms.

4. **Desktop Performance is a Universal Pain Point** — Hermes Agent and OpenClaw both report desktop session load regressions, blocking I/O, and CPU pegging. The "local-first agent" use case demands better SQLite/FTS handling.

5. **Windows Support Remains Fragmented** — OpenClaw's SQLite WAL issues, Hermes Agent's PATH problems, and ZeroClaw's Windows installer requests indicate inconsistent cross-platform support.

6. **Release Cadence Varies Significantly** — OpenClaw maintains structured beta/stable releases; others operate on PR-triggered releases. The industry has not converged on a standard release model for agent frameworks.

### Value for AI Agent Developers

- **If building enterprise/self-hosted agents**: OpenClaw's release stability and update mechanisms are most mature
- **If building desktop/native applications**: Hermes Agent's learnings on session management are directly applicable
- **If building cross-platform/mobile**: QwenPaw's HarmonyOS client represents early mobile expansion
- **If building multi-agent systems**: ZeroClaw's security scoping work (despite being incomplete) provides a roadmap for isolation requirements

---

*Cross-project comparison generated from GitHub data dated 2026-10-12.*

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to generate a structured project digest for Hermes Agent based on the provided GitHub data. Let me analyze the data and create a comprehensive digest following the 8-section structure requested.

Key data points:
- 50 issues updated in last 24h (44 open, 6 closed)
- 50 PRs updated in last 24h (44 open, 6 merged/closed)
- No new releases

Let me organize the information:

**Today's Overview**: High activity with 100 total items (50 issues + 50 PRs) updated in the last 24 hours. Both open and closed counts are balanced, suggesting active development and issue resolution.

**Releases**: None

**Project Progress**: Looking at closed PRs - need to check which ones were actually merged/closed today. The data shows merged/closed: 6 but doesn't list them specifically in the top 20 by comment count.

**Community Hot Topics**: The most active issues by comment count:
1. #107402 - hermes update leaves stale warning (21 comments)
2. #121095 - browser_exec daemon processes (11 comments)
3. #136567 - Telegram DM topics issue (10 comments)
4. #70445 - Desktop session load issues (10 comments)
5. #133856 - Anthropic API keys misclassified (6 comments, 6 👍)

**Bugs & Stability**: Multiple P1/P2 bugs:
- P1: #133856 Anthropic API key misclassification (security/billing)
- P2: Multiple issues including browser daemon, Telegram topics, Windows PATH, etc.

**Feature Requests**: 
- #9645 - Optional configurable proactive check-ins (8 👍)
- #4431 - Per-topic/per-chat configuration (10 👍)
- #125448 - Source-backed proactive follow-ups
- #130197 - Profile-level heartbeat


- #136879 - Token count stamping on assistant rows
- #136881 - RTL panel header fix
- #136875 - Private key redaction
- #136874 - Heartbeat2 plugin

I'm tracking user pain points across several critical areas. Desktop session management remains problematic with slow loads and high CPU usage during tab switches. The browser tool is leaving stale daemon processes running. Authentication is problematic - API keys are misclassified and auth commands crash. Windows PATH registration is broken. Telegram message routing has issues.

Several PRs landed today addressing these problems: token count tracking, RTL display fixes, and private key security. The desktop session and browser tool problems are particularly severe, with no clear resolution in sight.</think>

# Hermes Agent Project Digest

**Date:** 2026-10-12

---

## 1. Today's Overview

Hermes Agent shows high development activity with **100 items updated in the last 24 hours** (50 issues + 50 PRs). The ratio of open to closed items is heavily skewed toward open (44 open issues, 44 open PRs), indicating active engagement but also a growing backlog. Notably, no releases were published today. Security-related fixes are prominent in recent PRs, and multiple P1/P2 bugs affect core functionality across desktop, CLI, and gateway components.

---

## 2. Releases

**No new releases** were published today. The stable channel remains at v0.21.6.

---

## 3. Project Progress

The following PRs were merged/closed in the last 24 hours:

| PR | Title | Status |
|---|---|---|
| #95595 | Desktop: switching to a warm session pegs renderer main thread | CLOSED |
| #60747 | Desktop sessions freeze: synchronous SQLite/FTS session loading blocks event loop | CLOSED |
| #131818 | Local skill correctly discovered by default profile is silently absent from sub-profile | CLOSED |
| #66393 | Gate browser tool in non-interactive sessions | CLOSED |
| #69776 | Async delegation dispatch note tells model to fabricate result | CLOSED |
| #95044 | Desktop: tab switches stay slow on huge sessions | CLOSED |

**Key advancements:**
- Session performance improvements for Desktop (SQLite blocking issues)
- Browser tool installation handling for non-interactive environments
- Async delegation behavior fixes

---

## 4. Community Hot Topics

Most active issues by engagement:

| Issue | Title | Comments | Reactions |
|-------|-------|----------|-----------|
| [#107402](https://github.com/NousResearch/hermes-agent/issues/107402) | `hermes update` leaves permanent "did not restart running gateways" warning | 21 | 0 |
| [#121095](https://github.com/NousResearch/hermes-agent/issues/121095) | browser_exec leaves stale browser_harness daemon processes | 11 | 0 |
| [#136567](https://github.com/NousResearch/hermes-agent/issues/136567) | Telegram DM topics: opening message delivered thread-less | 10 | 0 |
| [#70445](https://github.com/NousResearch/hermes-agent/issues/70445) | Desktop remote/VPS session load is slow, cancels on navigate | 10 | 2 |
| [#133856](https://github.com/NousResearch/hermes-agent/issues/133856) | Anthropic API keys with sk-ant-usr- prefix misclassified as OAuth | 6 | 6 |

**Analysis:** The most discussed issue (#107402) relates to update lifecycle management—users encounter persistent warnings when restarts are deferred. Browser automation (#121095) and Telegram integration (#136567) represent recurring pain points in tool reliability. The Anthropic API key misclassification (#133856) has attracted both comments and reactions (6 👍), indicating user concern around authentication correctness.

---

## 5. Bugs & Stability

**Critical (P1) Bugs:**

| Issue | Title | Severity | Fix PR |
|-------|-------|----------|--------|
| [#133856](https://github.com/NousResearch/hermes-agent/issues/133856) | Anthropic API keys misclassified as OAuth tokens | P1 | — |
| [#136801](https://github.com/NousResearch/hermes-agent/issues/136801) | Telegram gateway fails with "Insufficient Balance" despite funded providers | P2 | — |

**High Priority (P2) Bugs:**

| Issue | Title | Area |
|-------|-------|------|
| [#107402](https://github.com/NousResearch/hermes-agent/issues/107402) | hermes update stale warning | CLI/Gateway |
| [#121095](https://github.com/NousResearch/hermes-agent/issues/121095) | Browser daemon processes stale | Tools |
| [#136567](https://github.com/NousResearch/hermes-agent/issues/136567) | Telegram DM topic message routing | Gateway |
| [#70445](https://github.com/NousResearch/hermes-agent/issues/70445) | Desktop VPS session load issues | Desktop |
| [#135037](https://github.com/NousResearch/hermes-agent/issues/135037) | Windows PATH registration in sandbox | CLI/Windows |
| [#136842](https://github.com/NousResearch/hermes-agent/issues/136842) | write_file resolves against TERMINAL_CWD | CLI |

**Fix PRs available:**
- [#136879](https://github.com/NousResearch/hermes-agent/pull/136879) — Token count stamping
- [#136873](https://github.com/NousResearch/hermes-agent/pull/136873) — Nous Portal pricing tier estimates
- [#136876](https://github.com/NousResearch/hermes-agent/pull/136876) — pilk exclusion for cold-cache lock
- [#136765](https://github.com/NousResearch/hermes-agent/pull/136765) — Cron corrupted store errors

---

## 6. Feature Requests & Roadmap Signals

**Highly-requested features (by reactions/comments):**

| Issue | Title | Reactions |
|-------|-------|-----------|
| [#4431](https://github.com/NousResearch/hermes-agent/issues/4431) | Per-topic/per-chat configuration overrides (topic_configs) | 10 👍 |
| [#9645](https://github.com/NousResearch/hermes-agent/issues/9645) | Optional, Configurable Proactive Check-Ins | 8 👍 |
| [#125448](https://github.com/NousResearch/hermes-agent/issues/125448) | Support source-backed proactive follow-ups via gateway plugin | 3 |
| [#130197](https://github.com/NousResearch/hermes-agent/issues/130197) | Profile-level heartbeat that persists across sessions | 3 |

**New PRs introducing features:**
- [#136855](https://github.com/NousResearch/hermes-agent/pull/136855) — `waypoint` plugin (session status for Desktop)
- [#136874](https://github.com/NousResearch/hermes-agent/pull/136874) — `heartbeat2` plugin
- [#128926](https://github.com/NousResearch/hermes-agent/pull/128926) — OpenAI "Sign in with ChatGPT" provider

**Prediction:** Per-chat configuration (#4431) and proactive check-ins (#9645) have strong community interest and may appear in upcoming releases. The heartbeat and waypoint plugins indicate growing ecosystem focus.

---

## 7. User Feedback Summary

**Pain points reported today:**

1. **Desktop performance** — Users on remote/VPS backends experience 20+ second session loads, cancellations on navigation, and 100% CPU pegging during tab switches. Large `state.db` files (284 MB reported) cause blocking issues.

2. **Browser tool reliability** — Every `browser_exec` call leaves a stale daemon process with no cleanup mechanism. This impacts long-running sessions.

3. **Authentication instability** — `hermes auth add` crashes or hangs in non-interactive shells. Anthropic API keys are misclassified, affecting billing and OAuth flows.

4. **Windows-specific issues** — PATH registration writes sandbox/checkout directories to the shared user environment, causing cross-contamination between installations.

5. **Telegram integration** — Message routing in forum topics is unreliable; lobby recovery misroutes messages to previous topics.

**Satisfaction signals:** The closing of SQLite blocking issues (#60747, #95595) and the new token count stamping (#136879) address long-standing observability gaps. Security-focused PRs (#136875, #129166, #129169) around secret redaction are well-received.

---

## 8. Backlog Watch

**Important issues needing maintainer attention:**

| Issue | Title | Age | Status |
|-------|-------|-----|--------|
| [#17873](https://github.com/NousResearch/hermes-agent/issues/17873) | tools/approval.py: Add reverse shell, download-execute patterns to DANGEROUS_PATTERNS | ~5 months | OPEN |
| [#37244](https://github.com/NousResearch/hermes-agent/issues/37244) | Robust SPA Clicking / Playwright Force Click | ~4 months | OPEN |
| [#70445](https://github.com/NousResearch/hermes-agent/issues/70445) | Desktop remote/VPS session load issues | ~3 months | OPEN (P2) |
| [#55369](https://github.com/NousResearch/hermes-agent/issues/55369) | Union integer\|string tool args drop leading zeros | ~3 months | OPEN |

**Notes:**
- Security enhancement #17873 (dangerous pattern detection) remains open despite P2 priority
- SPA clicking issues (#37244) persist across months, affecting browser automation reliability
- Desktop VPS performance (#70445) has 10 comments but no fix PR yet

---

*Generated from Hermes Agent activity on 2026-10-12*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to generate a project digest for the IronClaw project (github.com/nearai/ironclaw) based on the provided GitHub data. Let me analyze the data and create a structured digest.

Looking at the data:
- Issues updated in last 24h: 0 (open/active: 0, closed: 0)
- PRs updated in last 24h: 7 (open: 4, merged/closed: 3)
- New releases: 0

Latest Pull Requests:
1. #8134 - OPEN - dependencies, rust - chore(deps): bump everything-else group with 34 updates
2. #8132 - OPEN - dependencies, rust - chore(deps): bump tokio-ecosystem group with 4 updates
3. #8114 - CLOSED - dependencies, rust - chore(deps): bump everything-else group with 31 updates
4. #8133 - OPEN - dependencies, github_actions - chore(deps): bump actions group with 10 updates
5. #8103 - CLOSED - dependencies, github_actions - chore(deps): bump actions group with 8 updates
6. #8123 - CLOSED - dependencies, rust - chore(deps): bump tokio-ecosystem group with 3 updates
7. #7834 - OPEN - size: L, risk: medium, dependencies, rust - chore(deps): bump wasm group with 4 updates

No releases, no issues, no bugs, no feature requests in the last 24h. This is primarily a dependency update focused day.

Let me create the structured digest following the 8 sections requested. I need to be objective and data-driven.</think>

# IronClaw Project Digest — 2026-10-12

**Repository:** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Today's Overview

IronClaw shows moderate maintenance activity on October 12, 2026. A total of 7 pull requests were updated in the last 24 hours: 4 remain open and 3 were closed/merged. Notably, there were **zero issues** filed or updated, and **zero new releases** published. The activity today is entirely focused on dependency updates across Rust crates, GitHub Actions, and WASM tooling—indicating routine dependency hygiene rather than feature development or bug fixes. The project appears in a stable, maintenance-mode state with no reported stability issues.

---

## 2. Releases

No new releases were published in the last 24 hours. The release section is omitted.

---

## 3. Project Progress

Three pull requests were merged/closed today:

| PR | Title | Status |
|----|-------|--------|
| [#8114](https://github.com/nearai/ironclaw/pull/8114) | chore(deps): bump everything-else group with 31 updates | **Closed** |
| [#8103](https://github.com/nearai/ironclaw/pull/8103) | chore(deps): bump actions group with 8 updates | **Closed** |
| [#8123](https://github.com/nearai/ironclaw/pull/8123) | chore(deps): bump tokio-ecosystem group with 3 updates | **Closed** |

All three merged PRs are dependency updates covering:
- Rust ecosystem crates (thiserror, uuid, base64, etc.)
- GitHub Actions (claude-code-action, setup-node, etc.)
- Tokio-related crates (tokio-test, tower-http, tokio-tungstenite)

**Assessment:** No features advanced; the project is in routine dependency maintenance. The closing of #8114 and #8103 (both created in late September) indicates the maintainers are actively processing the dependabot queue.

---

## 4. Community Hot Topics

No issues were filed or commented on in the last 24 hours, so there are no hot topics to analyze. The PRs currently open are all dependency updates from dependabot with zero comments and zero reactions.

---

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours. The project shows no stability concerns based on the available data.

---

## 6. Feature Requests & Roadmap Signals

No feature requests were filed in the last 24 hours. The open PRs are exclusively dependency updates (dependabot), offering no signals about upcoming features or roadmap direction.

---

## 7. User Feedback Summary

No user feedback (issues, comments, or reactions) was recorded in the last 24 hours. The dependency update PRs have zero comments and zero thumbs-up reactions, indicating no vocal user engagement on the current changes.

---

## 8. Backlog Watch

The following open pull requests remain unaddressed and may warrant maintainer attention:

| PR | Title | Risk | Age |
|----|-------|------|-----|
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | chore(deps): bump wasm group with 4 updates | **Medium** | ~50 days (2026-08-23) |
| [#8134](https://github.com/nearai/ironclaw/pull/8134) | chore(deps): bump everything-else group with 34 updates | Low | 1 day |
| [#8132](https://github.com/nearai/ironclaw/pull/8132) | chore(deps): bump tokio-ecosystem group with 4 updates | Low | 1 day |
| [#8133](https://github.com/nearai/ironclaw/pull/8133) | chore(deps): bump actions group with 10 updates | Low | 1 day |

**Note:** PR #7834 has been open for approximately 50 days with medium risk (WASM dependency updates). While the risk is labeled medium, WASM tooling updates can occasionally introduce runtime compatibility issues in WebAssembly-based components. Maintainers should prioritize reviewing this PR to avoid falling further behind on WASM ecosystem changes.

---

*Digest generated from GitHub activity data for 2026-10-12.*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a structured English QwenPaw project digest based on the provided GitHub data. Let me analyze the data carefully.

**Data Overview from 2026-10-12:**
- Issues updated in last 24h: 10 (all open/active, 0 closed)
- PRs updated in last 24h: 20 (8 open, 12 merged/closed)
- New releases: 0

**Key observations:**

1. **No new releases** - so I'll note that in the Releases section

2. **Issues (10 total, all open):**
   - #7990: Feature request for Aliyun Token Plan models to declare thinking_param_style
   - #8172: Bug - Console chat intermittent silent empty completion
   - #8181: Feature - Session-level change notifications for chat
   - #8180: Question about per-session approval level storage
   - #8179: Bug - Installing skill from GitHub corrupts binary files
   - #8177: Bug - Console hardcodes basename to /console, can't use reverse-proxy subpath
   - #8176: Bug - Plugin Store "Update All" only updates official plugins
   - #8174: Feature - web_search tavily provider has no API-key config
   - #8173: Bug - Codex backend connection breaks after restart, zombie tasks
   - #8175: Bug - ProviderManager.active_model not loaded at startup

3. **PRs (20 total):**
   - Closed (12): #5732, #5661, #5612, #5569, #1977, #2783, #2520, #2052, #1978, #1848, #1480, #1883
   - Open (8): #8137, #8164, #8182, #7973, #8178, #8156, #7654, #7127
   
I'll organize this into a clear, structured format for the digest.</think>

# QwenPaw Project Digest — 2026-10-12

## 1. Today's Overview

QwenPaw shows **moderate development activity** today with 20 PR updates (12 merged/closed) and 10 active issues. No new releases were published. The project is addressing a mix of bug fixes (particularly around console functionality, plugin management, and backend stability) and feature enhancements across multiple components including the HarmonyOS client, server-side session persistence, and skill management. Community engagement remains steady with issues spanning usability concerns, deployment flexibility, and system reliability.

---

## 2. Releases

**No new releases today.** The project continues on recent versions (v2.2.0/v2.2.1 per issue reports).

---

## 3. Project Progress

### Merged/Closed PRs (12 total)

| PR | Author | Title | Domain |
|----|--------|-------|--------|
| [#5732](https://github.com/agentscope-ai/QwenPaw/pull/5732) | wangfei010313 | feat: add 'none' memory backend to disable memory system | Memory |
| [#5661](https://github.com/agentscope-ai/QwenPaw/pull/5661) | wangfei010313 | feat: filter plugin market and CDN catalog by QwenPaw version compatibility | Plugins |
| [#5612](https://github.com/agentscope-ai/QwenPaw/pull/5612) | wangfei010313 | Fix/plugin market version routing | Plugins |
| [#5569](https://github.com/agentscope-ai/QwenPaw/pull/5569) | wangfei010313 | feat(desktop): eliminate startup white screen with instant splash loading | Desktop |
| [#1977](https://github.com/agentscope-ai/QwenPaw/pull/1977) | futuremeng | fix(runtime): harden mcp teardown and cron/channel exception handling | Runtime |
| [#2783](https://github.com/agentscope-ai/QwenPaw/pull/2783) | futuremeng | fix(runner): auto-recover context overflow with compaction retry | Runner |
| [#2520](https://github.com/agentscope-ai/QwenPaw/pull/2520) | futuremeng | fix(models): preflight active model and surface provider compute errors | Models |
| [#2052](https://github.com/agentscope-ai/QwenPaw/pull/2052) | futuremeng | fix(mcp): degrade connection errors to tool-level failure | MCP |
| [#1978](https://github.com/agentscope-ai/QwenPaw/pull/1978) | futuremeng | feat(mcp): improve import validation/preview and runtime status diagnostics | MCP |
| [#1848](https://github.com/agentscope-ai/QwenPaw/pull/1848) | futuremeng | feat(mcp): improve import templates and preserve description | MCP |
| [#1480](https://github.com/agentscope-ai/QwenPaw/pull/1480) | futuremeng | fix(ollama): default to 127.0.0.1 and surface original connection errors | Models |
| [#1883](https://github.com/agentscope-ai/QwenPaw/pull/1883) | futuremeng | feat(agents-square): add source browsing and import flow | Platform |

### Open PRs Under Review (8 total)

| PR | Author | Size | Title | Status |
|----|--------|------|-------|--------|
| [#8182](https://github.com/agentscope-ai/QwenPaw/pull/8182) | LUOSENGWA | XL | feat(chats): persist per-chat approval level on the server | Open |
| [#8164](https://github.com/agentscope-ai/QwenPaw/pull/8164) | LUOSENGWA | XXXL | feat(apps): add HarmonyOS native client (apps/qwenpaw-harmony) | Open |
| [#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178) | grissiom | L | feat(skills): support nested (categorised) skill directories | Open |
| [#8156](https://github.com/agentscope-ai/QwenPaw/pull/8156) | LUOSENGWA | L | feat(api): add coding-cli management endpoints for worker containers | Open |
| [#8137](https://github.com/agentscope-ai/QwenPaw/pull/8137) | LUOSENGWA | M | feat(console): add an official "reduced effects" tier to Appearance & language | Under Review |
| [#7973](https://github.com/agentscope-ai/QwenPaw/pull/7973) | yang0228 | M | fix(agents): recover from rejected media URLs | Open |
| [#7654](https://github.com/agentscope-ai/QwenPaw/pull/7654) | jcs130 | S | fix(agents): recognize llama-server and DashScope URL audio rejections in audio-fallback classifier | Open |
| [#7127](https://github.com/agentscope-ai/QwenPaw/pull/7127) | haosong384 | S | docs: add --agent-id targeting guide to CLI docs | Open |

---

## 4. Community Hot Topics

### Most Active Issues (by engagement: comments + recent activity)

| Issue | Title | Author | Comments | Status |
|-------|-------|--------|----------|--------|
| [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) | [Feature]: 模型目录请为 Aliyun Token Plan 模型声明 thinking_param_style | Andykpa | 3 | Open |
| [#8172](https://github.com/agentscope-ai/QwenPaw/issues/8172) | [Bug]: Console 聊天间歇性静默空完成——回合约 1 秒结束、output 为空、模型从未被调用 | feng183043996 | 3 | Open |
| [#8181](https://github.com/agentscope-ai/QwenPaw/issues/8181) | [Feature]: 会话级变更通知：让聊天区实时反映后端会话内容的变化，无需硬刷新页面 | One-sixth | 1 | Open |

**Analysis:** The most discussed issues reveal three distinct user needs:
1. **Model catalog completeness** — Users with Aliyun Token Plan models need proper thinking parameter declarations for UI controls to function
2. **Console reliability** — Intermittent silent failures in the web console chat represent a significant UX issue affecting production deployments
3. **Real-time sync** — Users want session-level change notifications to avoid hard-refreshing the page when backend state changes

---

## 5. Bugs & Stability

### Reported Bugs (ranked by severity)

| Severity | Issue | Title | Fix PR? |
|----------|-------|-------|---------|
| **High** | [#8172](https://github.com/agentscope-ai/QwenPaw/issues/8172) | Console chat intermittent silent empty completion — 1s return, empty output, model never called | No |
| **High** | [#8173](https://github.com/agentscope-ai/QwenPaw/issues/8173) | Codex backend connection silently breaks after restart; zombie "running" entry blocks recovery | No |
| **High** | [#8175](https://github.com/agentscope-ai/QwenPaw/issues/8175) | ProviderManager.active_model not loaded at startup + silent exception handling causes nightly cron failures | No |
| **Medium** | [#8179](https://github.com/agentscope-ai/QwenPaw/issues/8179) | Installing skill from GitHub corrupts binary files — non-UTF-8 bytes replaced with U+FFFD | No |
| **Medium** | [#8177](https://github.com/agentscope-ai/QwenPaw/issues/8177) | Console hardcodes basename to /console, blocks reverse-proxy subpath deployments | No |
| **Medium** | [#8176](https://github.com/agentscope-ai/QwenPaw/issues/8176) | Plugin Store "Update All" only updates official plugins, skips third-party | No |
| **Low** | [#8180](https://github.com/agentscope-ai/QwenPaw/issues/8180) | Per-session approval level stored in localStorage vs server-side expectation (design question) | No |

**Stability Concern:** Three high-severity bugs affect production reliability:
- Silent console failures causing incomplete responses
- Codex backend disconnection after restart creating zombie tasks
- Startup loading issues breaking scheduled cron jobs

No fix PRs exist yet for today's bug reports.

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| Issue | Title | Likely Version |
|-------|-------|-----------------|
| [#8181](https://github.com/agentscope-ai/QwenPaw/issues/8181) | Session-level change notifications for real-time chat updates | v2.3.x |
| [#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174) | web_search tavily provider needs API-key configuration surface | v2.3.x |
| [#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178) | Support nested (categorised) skill directories | Under review |
| [#8182](https://github.com/agentscope-ai/QwenPaw/pull/8182) | Persist per-chat approval level on the server | Under review |
| [#8164](https://github.com/agentscope-ai/QwenPaw/pull/8164) | HarmonyOS native client | Under review |

**Roadmap Signals:** The open PRs suggest the next release will include:
- HarmonyOS native client support
- Server-side session state persistence (approval levels)
- Nested skill directory organization
- Enhanced plugin/update management

---

## 7. User Feedback Summary

### Pain Points Identified

1. **Deployment Flexibility** — Users running QwenPaw behind reverse proxies need configurable console basenames ([#8177](https://github.com/agentscope-ai/QwenPaw/issues/8177))
2. **Binary Handling** — GitHub skill installation corrupts images/fonts ([#8179](https://github.com/agentscope-ai/QwenPaw/issues/8179))
3. **Plugin Ecosystem** — "Update All" only handling official plugins frustrates users with third-party plugins ([#8176](https://github.com/agentscope-ai/QwenPaw/issues/8176))
4. **Console Reliability** — Intermittent silent failures in chat undermine trust in production environments ([#8172](https://github.com/agentscope-ai/QwenPaw/issues/8172))
5. **Provider Configuration** — Built-in Tavily provider lacks API key configuration, making paid quotas unusable ([#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174))

### Satisfaction Signals

- MCP improvements merged (import validation, runtime diagnostics, connection error handling)
- Memory system now supports disabling entirely via "none" backend
- Desktop startup experience improved with splash loading
- Plugin market version compatibility filtering added

---

## 8. Backlog Watch

### Long-Unanswered Issues Requiring Maintainer Attention

| Issue | Age | Title | Priority |
|-------|-----|-------|----------|
| [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) | ~17 days | Aliyun Token Plan models missing thinking_param_style declaration | Medium |

No other issues from today remain unanswered; all 10 issues received at least 1 comment/activity within the 24h window.

---

*Generated from GitHub data for agentscope-ai/QwenPaw on 2026-10-12*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to generate a structured project digest for ZeroClaw based on the GitHub data provided. Let me analyze the data carefully.

Key observations from the data:

1. **Activity Overview**:
- 22 issues updated in last 24h (20 open, 2 closed)
- 50 PRs updated in last 24h (47 open, 3 merged/closed)
- No new releases

2. **Latest Issues** (22 total, showing top 22):
- Major security concerns: Multiple P1 security bugs related to per-agent ownership scoping (#9646, #9647)
- Memory issues: Persistent memory tracker (#8891), memory consolidation bugs
- Runtime/gateway delivery tracker (#7432) for v0.8.6 and v0.9.0
- Firejail args bug (#11594) - not applied to invocation
- Config migration bug (#11579) - schema version issue
- Telegram 429 retry bug (#11615)
- ZeroCode sidebar bug (#11586) - closed
- Cron extraction (#10546)
- Email channel CC bug (#9506)
- Shell command re-run bug (#11612) - closed
- New feature requests: Windows support, dark factory workflow, channel separation

3. **Latest Pull Requests** (50 total, showing top 20):
- #11659: Fix for snake_case context-window overflow codes
- #11347: Ship WASM plugin host in release artifacts
- #11531 (CLOSED): Fix tunnel URL reporting
- #10391: Delegate workspace/tool ceiling fix
- #10407: Persistent session prompt attachments
- #10485: ZeroCode clipboard cleanup
- #11660: Web chat input focus fix
- #11304: Plugin socket/WS egress denials recording
- #11228: TLS profile materialization hardening


- #11114: Multi-agent setup guide docs
- #11188: Browser and search tool semantics
- #11311: Plugin artifact smoke test
- #11221: Default to eleven built-ins
- #11309: Quickstart plugin installation
- #11310: Sign manifest document
- #11174: Capability-taking constructors
- #11262: Plugin update with verified replacement
- #10499: Config validation
- #11520: Legacy plugin recovery
- #11302: Channel instance binding

Now I'll structure the digest according to the required format.

## 1. Today's Overview

The project is tackling high-priority security vulnerabilities alongside feature development. I'm addressing critical P1 security gaps around per-agent ownership scoping and knowledge graph isolation, plus a configuration migration flaw. The system maintains strong momentum with 47 active PRs and multiple security hardening efforts in flight. Plugins and WASM functionality are advancing toward v0.8.6, while persistent memory work continues for the next release.

## 2. Releases

ZeroClaw had no new releases in the past 24 hours.

## 3. Project Progress

Three PRs closed recently: #11531 fixed tunnel URL reporting for Tailscale, #11586 corrected ZeroCode sidebar state after daemon restarts, and #11612 resolved shell command re-run issues in ACP sessions. Active development includes a fix for context window overflow codes (#11659), WASM plugin hosting in release builds (#11347), and persistent session attachments (#10407). Web chat input focus is being addressed in #11660.

## 4. Community Hot Topics

Security dominates discussion. Issue #8891 tracks persistent memory parity across seven open items, while #7432 monitors v0.8.6 and v0.9.0 delivery. Two critical P1 security vulnerabilities are being actively discussed: #9646 involves session and channel read/write tools lacking per-agent ownership scoping across Discord and similar services, and #9647 concerns knowledge graph isolation between agents.

Additional priority work includes a firejail_args configuration bug (#11594), a schema_version migration issue in config saves (#11579), and a Telegram rate limit handling problem (#11615). New feature proposals cover Windows installer support, dark factory workflows for multi-agent systems, and channel modularity. Recent pull requests advancing these discussions include the delegate fix (#10391), persistent session prompt attachments (#10407), and TLS profile materialization hardening (#11228).

Several critical bugs require immediate attention. Per-agent ownership gaps in session and knowledge tools (#9646, #9647) represent S0 security risks with high severity. A config migration issue (#11579) threatens data loss when saving V1/V2 configs. The firejail_args configuration bug (#11594) affects runtime sandboxing but remains unfixed.

Telegram's rate limiting implementation compounds issues by retrying immediately instead of honoring retry_after (#11615). Shell command execution can abort agent loops unexpectedly (#11612), and email channels lack proper CC recipient handling (#9506). The memory consolidation process is losing preference provenance during merges (#10755).

Recent fixes have addressed specific issues: clipboard cleanup in ZeroCode (#10485), web chat focus behavior (#11660), tunnel URL handling for Tailscale (#11531), and sidebar state management after daemon restarts (#11586).

Feature development continues with persistent memory across three planes (#8891), runtime and gateway delivery for v0.9.0 (#7432), WASM plugin hosting (#11347), and session prompt attachments (#10407). The system now defaults to eleven built-in tools (#11221), cron extraction is underway (#10546), and Windows support improvements are being discussed (#11665). Plugin infrastructure is expanding through quickstart installation (#11309), manifest signing (#11310), verified plugin updates (#11262), and channel instance binding (#11302).

User pain points center on security boundaries—agents can currently access each other's sessions, knowledge, and data. Configuration migration remains fragile, and the Windows installation process needs streamlining. Telegram's rate limiting creates friction, shell commands behave unexpectedly in ACP, and users want more granular control over channel and memory management with consolidated turn targeting options.

Long-running efforts requiring maintainer attention include a persistent memory tracker spanning multiple PRs (#8891), the runtime and gateway v0.9.0 delivery (#7432), and a cron extraction refactor (#10546). Several PRs are stacked and awaiting merge after dependencies land.</think>

# ZeroClaw Project Digest — 2026-10-12

---

## 1. Today's Overview

ZeroClaw shows high development velocity with **47 open PRs** and **20 active issues** in the last 24 hours. The project is addressing critical security and stability work: multiple P1 security vulnerabilities involving per-agent ownership scoping are under active development, and the v0.8.6/v0.9.0 release tracks are progressing. No new releases were published today. The community is actively filing bugs and feature requests, with particularly strong engagement around security hardening, plugin/WASM infrastructure, and cross-platform Windows support.

---

## 2. Releases

**No new releases** in the past 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs (3 total)

| PR | Title | Status |
|----|-------|--------|
| [#11531](https://github.com/zeroclaw-labs/zeroclaw/pull/11531) | fix(tunnel): report the URL tailscale actually serves the gateway on | **Closed** |
| [#11586](https://github.com/zeroclaw-labs/zeroclaw/issues/11586) | [Bug]: ZeroCode sidebar turns failed sessions green after the daemon restarts | **Closed** (issue) |
| [#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612) | [Bug]: Re-running an already-approved shell command in the same turn aborts the agent loop | **Closed** (issue) |

### Active Feature Development (highlights)

| PR | Title | Notes |
|----|-------|-------|
| [#11347](https://github.com/zeroclaw-labs/zeroclaw/pull/11347) | feat(release): ship the WASM plugin host in supported release artifacts | Targeting v0.8.6 |
| [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) | feat(sessions): add persistent session prompt attachments | Large feature, multi-channel |
| [#11660](https://github.com/zeroclaw-labs/zeroclaw/pull/11660) | fix(web): keep the chat input focused through a turn | Small UX fix |
| [#11221](https://github.com/zeroclaw-labs/zeroclaw/pull/11221) | feat(tools): default to eleven built-ins with a full setting | Release v0.8.6 & v0.9.0 |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | fix(delegate): keep a bounded delegate's workspace, tool ceiling and command policy bound | Large security-related fix |
| [#11309](https://github.com/zeroclaw-labs/zeroclaw/pull/11309) | feat(quickstart): install and activate tool plugins from zeroclaw quickstart | Plugin ecosystem |
| [#11302](https://github.com/zeroclaw-labs/zeroclaw/pull/11302) | feat(plugins): bind channel instances and seed their grants at install | Plugin ecosystem |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count & severity)

| Issue | Title | Comments | Priority | Theme |
|-------|-------|----------|----------|-------|
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | [Tracker]: Persistent memory - wire the curation, relevance, and operability planes to parity | 10 | P2 | **Memory architecture** |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | [Tracker]: Runtime and gateway delivery - v0.8.6 and v0.9.0 | 6 | P2 | **Release roadmap** |
| [#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594) | [Bug]: firejail_args is advertised and reported but never applied to the firejail invocation | 4 | P1 | **Runtime sandboxing** |
| [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) | [Bug]: Session/channel read+write tools lack per-agent ownership scoping | 4 | P1 | **Security — data isolation** |
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | [Bug]: Knowledge graph has no per-agent attribution | 4 | P1 | **Security — data isolation** |
| [#11615](https://github.com/zeroclaw-labs/zeroclaw/issues/11615) | [Bug]: Telegram send path ignores 429 retry_after | 2 | P1 | **Channel reliability** |
| [#11667](https://github.com/zeroclaw-labs/zeroclaw/issues/11667) | [Feature]: Decide whether turns started for another agent inherit the caller's command policy | 1 | — | **Delegation design** |

**Analysis:** Security and isolation dominate discussions. Two critical S0-rated bugs (#9646, #9647) expose cross-agent data access vulnerabilities — a major concern for multi-agent deployments. The persistent memory tracker (#8891) reflects strong community demand for cross-session memory, while the runtime/gateway tracker (#7432) shows the release cadence is actively managed.

---

## 5. Bugs & Stability

### Critical Bugs (P1 / High Risk)

| Issue | Severity | Title | Fix PR? |
|-------|----------|-------|---------|
| [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) | S0 — data loss / security risk | Session/channel tools lack per-agent ownership scoping | No |
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | S0 — data loss / security risk | Knowledge graph has no per-agent attribution | No |
| [#11579](https://github.com/zeroclaw-labs/zeroclaw/issues/11579) | S1 — workflow blocked | save_dirty stamps schema_version = 3 on unmigrated V1/V2 config, agent disappears | No |
| [#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594) | S2 — degraded behavior | firejail_args never applied to firejail invocation | No |
| [#11615](https://github.com/zeroclaw-labs/zeroclaw/issues/11615) | S1 — workflow blocked | Telegram ignores 429 retry_after, compounds flood-limiting | No |

### Bugs Fixed Since Last Digest

- [#11586](https://github.com/zeroclaw-labs/zeroclaw/issues/11586): ZeroCode sidebar incorrect state after daemon restart — **Closed**
- [#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612): Shell command re-run aborts agent loop in ACP — **Closed**
- [#11531](https://github.com/zeroclaw-labs/zeroclaw/pull/11531): Tunnel URL reporting for Tailscale — **Merged**

### Moderate/Low Bugs

- [#9506](https://github.com/zeroclaw-labs/zeroclaw/issues/9506): Email channel cannot preserve CC recipients (P2)
- [#10755](https://github.com/zeroclaw-labs/zeroclaw/issues/10755): Memory consolidation loses preference provenance (P2)
- [#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655): Core conflict supersede hides unrelated memories (S2)
- [#11654](https://github.com/zeroclaw-labs/zeroclaw/issues/11654): JPEG admission copies before decode-memory cap checked (S3)
- [#11658](https://github.com/zeroclaw-labs/zeroclaw/issues/11658): Web chat input loses focus after reply (S3)

---

## 6. Feature Requests & Roadmap Signals

### New Feature Requests Today

| Issue | Title | Domain |
|-------|-------|--------|
| [#11668](https://github.com/zeroclaw-labs/zeroclaw/issues/11668) | Make gateway MAX_BODY_SIZE configurable + give rejection a code + size | Gateway |
| [#11665](https://github.com/zeroclaw-labs/zeroclaw/issues/11665) | Better Windows Support (installer, Docker, WSL) | Cross-platform |
| [#11664](https://github.com/zeroclaw-labs/zeroclaw/issues/11664) | Level 5 Dark Factory Workflow (multi-agent orchestration) | Multi-agent |
| [#11662](https://github.com/zeroclaw-labs/zeroclaw/issues/11662) | Separate Channels from Core (modular channels) | Architecture |
| [#11657](https://github.com/zeroclaw-labs/zeroclaw/issues/11657) | Configurable target category for turn consolidation | Memory |
| [#11667](https://github.com/zeroclaw-labs/zeroclaw/issues/11667) | Decide whether turns started for another agent inherit the caller's command policy | Delegation |

### Roadmap-Aligned Active Work

- **v0.8.6**: WASM plugin host in release artifacts (#11347), default toolset changes (#11221), config validation (#10499), plugin quickstart (#11309)
- **v0.9.0**: Gateway separation (#7432), persistent memory parity (#8891), multi-channel per-agent scoping (#9646, #9647)
- **Architecture**: Cron extraction into zeroclaw-cron crate (#10546), channel modularity (#11662)

**Prediction:** Windows installer improvement (#11665) and configurable turn consolidation (#11657) have good odds for v0.9.0 or subsequent releases based on scope and maintainer interest signals.

---

## 7. User Feedback Summary

### Pain Points Identified

1. **Security Isolation Gaps** — Users (particularly those running multi-agent setups) are concerned about agents accessing each other's sessions and knowledge graphs without boundaries (#9646, #9647). This is an S0-rated issue attracting attention from the security-focused community.

2. **Configuration Migration Fragility** — The `save_dirty` bug (#11579) causes agents to "disappear" after config saves on unmigrated V1/V2 configs. Users upgrading from older installations are impacted.

3. **Windows Onboarding Friction** — The installation process is described as "very long and complex" (#11665). New users on Windows face a high barrier to entry.

4. **Telegram Integration Reliability** — The 429 retry bug (#11615) causes message loss under rate limits. Users relying on Telegram for production workflows report this as blocking.

5. **Email Channel Limitations** — Cannot preserve CC recipients or send true Reply-All (#9506), limiting use in professional email workflows.

6. **ACP Shell Behavior** — Re-running approved shell commands unexpectedly aborts the agent loop (#11612), disrupting supervised workflows.

### Satisfaction Signals

- ZeroCode UI improvements (#11660 — chat input focus fix) and #11586 (sidebar state) show responsiveness to UX feedback
- Plugin ecosystem is maturing rapidly (signing, binding, quickstart installation), indicating strong user demand for extensibility

---

## 8. Backlog Watch

### Long-Running Issues Needing Maintainer Attention

| Issue | Age | Title | Status |
|-------|-----|-------|--------|
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | ~3 months | Persistent memory tracker (multi-PR epic) | Open, active |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | ~4 months | Runtime and gateway delivery tracker (v0.8.6 / v0.9.0) | Open, active |
| [#10546](https://github.com/zeroclaw-labs/zeroclaw/issues/10546) | ~2 months | Extract cron into dedicated zeroclaw-cron crate | Open |
| [#9506](https://github.com/zeroclaw-labs/zeroclaw/issues/9506) | ~3 months | Email channel CC / Reply-All preservation | Open |

### Stacked PRs Requiring Dependency Merges

| PR | Title | Blocking Dependencies |
|----|-------|----------------------|
| [#11347](https://github.com/zeroclaw-labs/zeroclaw/pull/11347) | Ship WASM plugin host | Stacked on #11311 |
| [#11309](https://github.com/zeroclaw-labs/zeroclaw/pull/11309) | Quickstart plugin install | Stacked; merge order: #11581 → #11302 → this |
| [#11262](https://github.com/zeroclaw-labs/zeroclaw/pull/11262) | Plugin update with verified replacement | Stacked on #11261 → #11236 → #11581 |
| [#11174](https://github.com/zeroclaw-labs/zeroclaw/pull/11174) | Capability-taking constructors | Requires #11090 as design prerequisite |

**Action needed:** Maintainers should prioritize merging foundational PRs (#11581, #11302, #11236) to unstack the plugin and release pipelines.

---

*Digest generated from GitHub activity on 2026-10-12. All issue/PR links point to https://github.com/zeroclaw-labs/zeroclaw.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*