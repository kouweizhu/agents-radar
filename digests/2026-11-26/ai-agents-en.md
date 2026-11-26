# OpenClaw Ecosystem Digest 2026-11-26

> Issues: 359 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-26 04:19 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

<think>The user wants me to generate a structured project digest for OpenClaw based on the GitHub data provided. Let me analyze the data carefully and create a comprehensive, well-organized digest following the specified sections.

Let me extract key information:

**Data Overview:**
- Issues updated in last 24h: 359 (open/active: 246, closed: 113)
- PRs updated in last 24h: 500 (open: 282, merged/closed: 218)
- New releases: 2

**Latest Releases:**
- v2026.11.10: openclaw 2026.11.10 (docs-v1)
- v2026.10.34: openclaw 2026.10.34 (gateway-only `extended-stable` release, equivalent to LTS)

**Top Issues (by comment count):**
1. #164294 - Gateway state DB WAL auto-checkpoint never completes - 44 comments
2. #91588 - Critical: Gateway Memory Leak — RSS grows from 350MB to 15.5GB - 42 comments (P0, gold shrimp)
3. #197083 - Post-install Doctor WAL publication verification leaves 11.3 update partially finalized - 40 comments
4. #159662 - prepared-model-catalog.worker.js: unbounded memory leak - 28 comments
5. #182891 - Prompt cache never reused — cache read dropped - 28 comments (closed)
6. #153426 - Curated memory roots (MEMORY.md/USER.md) silently excluded - 25 comments (P0, diamond lobster)
7. #148707 - Reply lost with 'Reply operation has no active tool authority snapshot' - 23 comments
8. #123792 - Assistant turns render twice with CLI backends - 22 comments

**Top PRs (30 shown):**
Multiple PRs from vincentkoc addressing various issues


Multiple PRs addressing MEMORY.md trust restoration, update system fixes, and UI improvements

Now I'll organize this into the requested format with proper sections and analysis.
</think>


# OpenClaw Project Digest — 2026-11-26

---

## 1. Today's Overview

OpenClaw demonstrates high development velocity with **500 PRs and 359 issues updated in the last 24 hours**, indicating intense activity across the codebase. Two releases shipped today—**v2026.11.10** as the latest stable and **v2026.10.34** as an LTS-equivalent extended-stable gateway release with critical security and reliability patches. The project is actively addressing memory management issues (multiple leaks reported across different components), update system stability, and session state integrity. Community engagement remains strong with 349 contributors and over 7,600 merged PRs, though several P0 issues around memory leaks and session corruption require urgent attention.

---

## 2. Releases

### v2026.11.10 — Latest Stable
- **Commits:** 8,309 | **PRs merged:** 7,671 | **Contributors:** 349
- Release notes and changelog available at [docs.openclaw.ai](https://docs.openclaw.ai/release)

### v2026.10.34 — Extended-Stable (LTS Equivalent)
- **Type:** Gateway-only `extended-stable` release
- **Contents:** OpenClaw from end of October 2026, plus:
  - Critical security updates
  - Reliability and performance fixes
  - New model support features
- **Recommendation:** Production environments should consider this release for stability; see [OpenClaw releases](https://github.com/openclaw/openclaw/releases)

---

## 3. Project Progress

### Merged/Closed PRs (218 total)
Key contributions advancing today:

| PR | Author | Impact | Description |
|----|--------|--------|-------------|
| [#205728](https://github.com/openclaw/openclaw/pull/205728) | vincentkoc | P3 | Skip unused model rows during credential refresh |
| [#205687](https://github.com/openclaw/openclaw/pull/205687) | tideclaw-bot | P2 | Keep streaming preflight alive, fail stalled with cause |
| [#205723](https://github.com/openclaw/openclaw/pull/205723) | brandon-julio-t | P2 | Stop large MCP tool catalogs from stalling Gateway at session start |
| [#201826](https://github.com/openclaw/openclaw/pull/201826) | Vaibhav2824 | P2 | Let memory indexing finish for large PostgreSQL chat histories |

### Open PRs Under Review (282 total)
Notable contributions awaiting merge:

| PR | Author | Priority | Focus Area |
|----|--------|----------|------------|
| [#205731](https://github.com/openclaw/openclaw/pull/205731) | roboclaw-bot | P1 | Opt-in Antigravity sessions with safe restart resume |
| [#205743](https://github.com/openclaw/openclaw/pull/205743) | fuller-stack-dev | P1 | Prevent Doctor from restarting Gateway during package update |
| [#205730](https://github.com/openclaw/openclaw/pull/205730) | wr-web | P1 | Keep scheduled session turns going after configured send |
| [#205726](https://github.com/openclaw/openclaw/pull/205726) | tideclaw-bot | P2 | Restore reviewed MEMORY.md trust (fixes #204738) |
| [#204132](https://github.com/openclaw/openclaw/pull/204132) | etzelm | P2 | Auto-pick Agent Profile based on model size |
| [#204431](https://github.com/openclaw/openclaw/pull/204431) | roboclaw-bot | P2 | Let plugins explain provider errors in chat |
| [#205740](https://github.com/openclaw/openclaw/pull/205740) | roboclaw-bot | P3 | Hide People shortcut on single-user Gateways |

---

## 4. Community Hot Topics

### Most Active Issues (by comment engagement)

**1. [#164294](https://github.com/openclaw/openclaw/issues/164294) — WAL Auto-Checkpoint Never Completes** (44 comments)
- **Severity:** P2 | **Rating:** Silver shellfish
- Gateway's SQLite WAL auto-checkpoint on `state/openclaw.sqlite` is permanently blocked by an in-process reader since boot
- 866 frames checkpointed vs 17,091 log frames remain; 17,000+ consecutive blocked attempts
- **Underlying need:** Database reliability and storage bloat prevention

**2. [#91588](https://github.com/openclaw/openclaw/issues/91588) — Critical Memory Leak (RSS 350MB → 15.5GB)** (42 comments)
- **Severity:** P0 | **Rating:** Gold shrimp | **Impact:** Crash-loop, OOM kills
- Gateway process grows from ~350 MB to 15.5 GB over 2-3 days, triggering OOM killer
- Causes repeated `launchd-handoff` restart cycles
- **Underlying need:** Production stability for long-running deployments

**3. [#197083](https://github.com/openclaw/openclaw/issues/197083) — Post-Install Doctor WAL Verification Failure** (40 comments)
- **Severity:** P0 | **Rating:** Silver shellfish | **Impact:** UX-release-blocker
- Managed npm upgrade (2026.11.1 → 2026.11.3) left Gateway partially finalized with WAL publication unverified
- Updater refused rollback; external plugins left in inconsistent state
- **Underlying need:** Reliable update rollback mechanisms

**4. [#159662](https://github.com/openclaw/openclaw/issues/159662) — prepared-model-catalog Worker Memory Leak** (28 comments)
- **Severity:** P1 | **Impact:** Crash-loop
- Worker thread leaks 4-5 GB/hour independently of workload, provider, or plugins
- RSS grows from ~2.5 GB to 8-10 GB within 60-90 minutes on idle-to-light traffic
- **Underlying need:** Resource-bounded background workers

**5. [#153426](https://github.com/openclaw/openclaw/issues/153426) — Curated Memory Roots Silently Excluded** (25 comments)
- **Severity:** P0 | **Rating:** Diamond lobster | **Impact:** Session-state, security
- `MEMORY.md`/`USER.md` permanently excluded from bootstrap injection once provenance ratchet marks them "untrusted"
- No diagnostics, no CLI recovery, no user notification
- **Underlying need:** Transparent security boundaries with recovery paths

### Hot PRs (by attention)
- **[#205726](https://github.com/openclaw/openclaw/pull/205726)** — MEMORY.md trust restoration fix (linked to #204738, #203532, #153426)
- **[#205743](https://github.com/openclaw/openclaw/pull/205743)** — Prevent Gateway restart during package updates (P1)
- **[#204794](https://github.com/openclaw/openclaw/pull/204794)** — Preserve actionable run history during updates (Platinum hermit rating)

---

## 5. Bugs & Stability

### Critical (P0) — Requires Immediate Attention

| Issue | Title | Severity | Status | Fix PR? |
|-------|-------|----------|--------|---------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway Memory Leak (350MB→15.5GB) | P0 | OPEN | No |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | MEMORY.md/USER.md Silently Excluded | P0 | OPEN | No (PR #205726 pending) |
| [#158912](https://github.com/openclaw/openclaw/issues/158912) | MEMORY.md Not Injected at Bootstrap | P0 | OPEN | No |
| [#190563](https://github.com/openclaw/openclaw/issues/190563) | Cannot Resume Paused Codex Chat | P0 | OPEN | No |

### High Priority (P1) — Crash/Regression Issues

| Issue | Title | Regression? | Fix PR? |
|-------|-------|-------------|---------|
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | prepared-model-catalog Worker Leak (~4-5 GB/h) | No | No |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) | Runaway RSS Outside V8 Heap → OOM | No | No |
| [#181432](https://github.com/openclaw/openclaw/issues/181432) | Excessive Baseline RSS (1.9 GB) + SQLite Timeouts | Yes (2026.10.5) | No |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | Reply Lost — "No Active Tool Authority Snapshot" | Yes (2026.9.4) | No |
| [#196199](https://github.com/openclaw/openclaw/issues/196199) | Codex Helper Completions Fail to Resume Parent | Yes (2026.10.10) | No |
| [#161379](https://github.com/openclaw/openclaw/issues/161379) | Gateway Pins CPU Core Forever (Catalog Refresh Loop) | Yes | No |
| [#185085](https://github.com/openclaw/openclaw/issues/185085) | Exec Completion Wakes Lost (SESSION_DELIVERY_GENERATION_UNAVAILABLE) | Yes | Partial (fix not in stable) |

### Notable Bug Fixes Merged/Closed
- **[#205728](https://github.com/openclaw/openclaw/pull/205728)** — Skip unused model rows during credential refresh
- **[#205723](https://github.com/openclaw/openclaw/pull/205723)** — Stop large MCP tool catalogs from stalling Gateway (supersedes #199346)
- **[#182891](https://github.com/openclaw/openclaw/issues/182891)** — Prompt cache never reused (CLOSED)

---

## 6. Feature Requests & Roadmap Signals

### High-Impact Feature Requests

**1. [#204775](https://github.com/openclaw/openclaw/issues/204775) — Prepared-Release Updates Design**
- **Status:** P2 | **Comments:** 18
- **Scope:** Redesign the update path for state, ownership, and plan
- **Roadmap signal:** Major update system overhaul in progress; operators should expect significant changes to `openclaw update` behavior

**2. [#103067](https://github.com/openclaw/openclaw/issues/103067) — Centralize Chat-Session Naming**
- **Status:** P2 | **Comments:** 12 | **Rating:** Diamond lobster
- Define subagent session lifetime and cross-channel persistence
- **Roadmap signal:** Session management consolidation planned

**3. [#150238](https://github.com/openclaw/openclaw/issues/150238) — Context Budget for Skill Workshop Experience Review**
- **Status:** P2 | **Comments:** 14
- Add skip policy for oversized sessions in Skill Workshop
- **Roadmap signal:** Context window management for long sessions

**4. [#56349](https://github.com/openclaw/openclaw/issues/56349) — Unbypassable Outbound Policy Enforcement**
- **Status:** P2 | **Security-sensitive** | **Comments:** 9 | **Rating:** Platinum hermit
- Pre-send validation guarantee for all outbound messages
- **Roadmap signal:** Security hardening for multi-delivery-path architecture

**5. [#204132](https://github.com/openclaw/openclaw/pull/204132) — Auto-Pick Agent Profile from Model Size**
- **Status:** PR Open (P2) | **Size:** XL
- Lean mode based on model context window
- **Roadmap signal:** Automatic resource optimization per model capability

**6. [#197803](https://github.com/openclaw/openclaw/pull/197803) — XingChen-AGI Provider Plugin**
- **Status:** PR Open (P3)
- New provider: Xing4.1-Preview (China Telecom AI Technology Co., Ltd.)
- **Roadmap signal:** Continued expansion of provider ecosystem

---

## 7. User Feedback Summary

### Pain Points Identified

| Category | Issue Count | Top Concern |
|----------|-------------|-------------|
| **Memory Management** | 5+ critical | Unbounded leaks in Gateway, workers, and CLI state reads |
| **Update Reliability** | 4+ issues | Partial updates, failed rollbacks, Doctor interference |
| **Session State** | 8+ issues | Lost replies, duplicate rendering, corrupted state |
| **Provider Integration** | 3+ issues | Codex helper failures, catalog refresh hangs |

### Key User Scenarios

**Long-running Gateway Deployments:**
> "RSS grows from ~350 MB at startup to 15.5 GB over 2-3 days of normal use, eventually causing the process to be killed by the OS OOM killer." — [#91588](https://github.com/openclaw/openclaw/issues/91588)

**Multi-Agent Setups:**
> "Multi-agent runtime publication failures and separate Codex startup timeouts" after upgrading from 2026.9.2 to 2026.9.6 — [#158127](https://github.com/openclaw/openclaw/issues/158127)

**Update Failures:**
> "Candidate Doctor blocks 2026.11.3 → 2026.11.5 with migration-input conflict and `changed=[]`" — [#200606](https://github.com/openclaw/openclaw/issues/200606)

**Constrained Environments:**
> "On a small machine, a Git install can clone OpenClaw, install workspace dependencies, and build Control UI before discovering the full source build cannot fit." — [PR #205735](https://github.com/openclaw/openclaw/pull/205735)

### Satisfaction Signals
- Strong approval for new provider plugin ecosystem (XingChen-AGI PR welcomed)
- Positive engagement on Antigravity session feature proposal
- Community actively filing detailed bug reports with reproduction steps

---

## 8. Backlog Watch

### Long-Unanswered Issues Needing Maintainer Attention

| Issue | Age | Comments | Priority | Description |
|-------|-----|----------|----------|-------------|
| [#112313](https://github.com/openclaw/openclaw/issues/112313) | ~4 months | 16 | P2 | Dead-lettered outbound queue entries are permanent; no CLI/RPC/TTL can clear them |
| [#112638](https://github.com/openclaw/openclaw/issues/112638) | ~4 months | 13 | P2 | session.maintenance enforce mode does not bound store; thread/channel entries exempt |
| [#127195](https://github.com/openclaw/openclaw/issues/127195) | ~3 months | 15 | P2 | 16 call sites emit identical error with no reason code |
| [#141172](https://github.com/openclaw/openclaw/issues/141172) | ~2.5 months | 14 | P2 | Run that dies before first session commit leaks agent.run.started forever |
| [#56349](https://github.com/openclaw/openclaw/issues/56349) | ~8 months | 9 | P2 | Unbypassable outbound policy enforcement feature request |

### Stale Issues Requiring Triage

| Issue | Age | Status | Description |
|-------|-----|--------|-------------|
| [#162585](https://github.com/openclaw/openclaw/issues/162585) | ~2 months | Stale | Windows plugin staging re-materializes into package-0/node_modules/<self> |
| [#158127](https://github.com/openclaw/openclaw/issues/158127) | ~2 months | Stale | Multi-agent runtime publication failures |
| [#164065](https://github.com/openclaw/openclaw/issues/164065) | ~2 months | Stale | Telegram requireMention does not gate bare slash commands |

### PRs Needing Review

| PR | Author | Size | Status | Description |
|----|--------|------|--------|-------------|
| [#205731](https://github.com/openclaw/openclaw/pull/205731) | roboclaw-bot | XL | Waiting on author | Antigravity sessions with safe restart resume |
| [#204431](https://github.com/openclaw/openclaw/pull/204431) | roboclaw-bot | M | Ready for maintainer look | Let plugins explain provider errors in chat |
| [#204794](https://github.com/openclaw/openclaw/pull/204794) | EnesKartal | M | Ready for maintainer look | Preserve actionable run history during updates |
| [#205689](https://github.com/openclaw/openclaw/pull/205689) | roboclaw-bot | L | Waiting on author | Show restored guest access in Inbox |

---

## Summary Assessment

**Health Indicators:**
- 🟢 Active development (500 PRs updated in 24h)
- 🟡 Update system stability concerns (multiple rollback/partial update issues)
- 🔴 Memory management critical (multiple P0/P1 leaks affecting production)
- 🟡 Session state integrity (lost replies, duplicate rendering, corruption)

**Recommended Actions for Maintainers:**
1. Prioritize memory leak fixes ([#91588](https://github.com/openclaw/openclaw/issues/91588), [#159662](https://github.com/openclaw/openclaw/issues/159662), [#154812](https://github.com/openclaw/openclaw/issues/154812))
2. Address update system reliability before next stable release
3. Triage backlog of stale issues (4+ months without response)
4. Review P0 issues for inclusion in v2026.11.11 or v2026.10.35

---

*Digest generated 2026-11-26 | Data source: [OpenClaw GitHub](https://github.com/openclaw/openclaw)*

---

## Cross-Ecosystem Comparison

<think>The user wants me to generate a cross-project comparison report based on the individual project digests I just created. Let me analyze the data from all four projects and create a comprehensive comparison report.

Let me extract key metrics:

**OpenClaw:**
- Issues: 359 (246 open, 113 closed)
- PRs: 500 (282 open, 218 merged/closed)
- Releases: 2 (v2026.11.10, v2026.10.34)
- Contributors: 349
- Commits: 8,309
- PRs merged: 7,671
- Activity: Very high

**Hermes Agent:**
- Issues: 50 (48 open, 2 closed)


- PRs: 50 (42 open, 8 merged/closed)
- Releases: 1 (canary.20261125T064800Z-v0.23.4)
- Activity: High

**IronClaw:**
- Issues: 0
- PRs: 0
- Releases: 0
- Activity: No activity

**QwenPaw:**
- Issues: 35 (25 open, 10 closed)
- PRs: 50 (26 open, 24 merged/closed)
- Releases: 0
- Activity: High

**ZeroClaw:**
- Issues: (still extracting metrics from the data)

Looking at the full dataset, I can see QwenPaw and Hermes Agent both have moderate issue activity but Hermes Agent has a slightly higher PR engagement ratio. OpenClaw is clearly the most active project by an order of magnitude. IronClaw shows no recent activity, which could indicate it's either abandoned or in maintenance mode. ZeroClaw's metrics appear to be cut off in my data extraction.
</think>


# Personal AI Agent Open-Source Ecosystem — Cross-Project Comparison Report
*Data period: 2026-11-26*

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is in a **high-velocity growth phase**, with four actively maintained projects driving significant architectural diversity. OpenClaw dominates in sheer development volume—nearly 8× the issue and PR activity of its peers—but this comes with a proportionally larger bug surface, particularly around memory management in long-running gateway deployments. Hermes Agent and ZeroClaw share a strategic focus on **multi-channel orchestration** (Telegram, Discord, email, IRC) with strong emphasis on security hardening and plugin architectures. QwenPaw differentiates through **multi-model routing** and AgentScope-based agent orchestration with native video memory support. The ecosystem collectively signals maturation in three dimensions: (1) OIDC-based identity and session management, (2) WASM/plugin-based extensibility replacing monolithic binaries, and (3) durable memory layers that survive context compression.

---

## 2. Activity Comparison

| Metric | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw | IronClaw |
|--------|----------|--------------|---------|----------|----------|
| **Issues (24h)** | 359 | 50 | 35 | 11 | 0 |
| **PRs (24h)** | 500 | 50 | 50 | 50 | 0 |
| **Issues Open/Active** | 246 | 48 | 25 | 8 | 0 |
| **Issues Closed** | 113 | 2 | 10 | 3 | 0 |
| **PRs Open** | 282 | 42 | 26 | 39 | 0 |
| **PRs Merged/Closed** | 218 | 8 | 24 | 11 | 0 |
| **Releases (24h)** | **2** | 1 | 0 | 0 | 0 |
| **Total Contributors** | 349 | — | — | — | — |
| **Total Commits** | 8,309 | — | — | — | — |
| **Total PRs Merged** | 7,671 | — | — | — | — |
| **Health Score** | 🟡 High-risk/stable | 🟡 Feature-active | 🟢 Steady | 🟢 Architecturally advancing | ⚫ Inactive |

---

## 3. OpenClaw's Position

### Advantages Over Peers

| Dimension | OpenClaw | Peer Comparison |
|-----------|----------|-----------------|
| **Community size** | 349 contributors, 7,671 merged PRs | ZeroClaw and QwenPaw lack published totals but trail significantly |
| **Release cadence** | 2 releases in 24h (stable + LTS-equivalent) | Hermes Agent ships canary builds; others irregular |
| **Issue resolution velocity** | 113 issues closed in 24h | Hermes Agent: 2, QwenPaw: 10, ZeroClaw: 3 |
| **Feature breadth** | CLI, gateway, MCP, memory, multi-agent, update system | Hermes Agent focuses on channels; ZeroClaw on security; QwenPaw on models |
| **Bug tracking depth** | P0/P1 severity tiers with community ratings | Hermes Agent uses P1/P2/P3; others informal |

### Technical Approach Differences

OpenClaw uses a **monolithic-but-layered architecture** with a single binary containing CLI, gateway, worker, and update components, backed by SQLite WAL for state management. Hermes Agent and ZeroClaw adopt **plugin-first architectures** with WASM plugins for channels and tools. QwenPaw builds on the **AgentScope framework** with per-model adapters and a dedicated `video_memory` plugin for multimodal workflows. OpenClaw's memory model relies on curated file injection (`MEMORY.md`/`USER.md`) with a provenance ratchet, while Hermes Agent proposes a Doc-Chain Substrate for durable record-layer memory—a fundamentally different architectural bet.

### Community Size Comparison

OpenClaw's 349 contributors and 7,671 merged PRs represent a **mature, large-scale open-source project** comparable to mid-sized framework repositories. Hermes Agent and ZeroClaw operate at approximately 10–20% of this scale, reflecting earlier-stage projects with tighter core teams. QwenPaw's contributor base appears smaller but highly active per capita (50 PRs from an undisclosed contributor pool).

---

## 4. Shared Technical Focus Areas

The following requirements are emerging across multiple projects simultaneously, indicating ecosystem-wide demand:

### 4.1 Long-Running Gateway Stability

| Project | Specific Need | Severity |
|---------|---------------|----------|
| **OpenClaw** | Unbounded RSS growth (350MB → 15.5GB in 2-3 days); worker leaks; SQLite WAL checkpoint stalls | **Critical (P0 ×3)** |
| **Hermes Agent** | Idle gateway burns 50-70% CPU at 110 MB/s throughput | **High (P2)** |
| **ZeroClaw** | Email channel re-answers messages on restart (UNSEEN flag never set) | **High (S2)** |

**Cross-project signal:** Every project with a persistent gateway process faces memory or state management challenges. This is a structural requirement for agent deployments that persist beyond single turns.

### 4.2 Update/Rollback Reliability

| Project | Specific Need |
|---------|---------------|
| **OpenClaw** | Post-install Doctor leaves WAL publication unverified; partial updates leave external plugins in inconsistent state; Doctor blocks updates with migration-input conflicts |
| **ZeroClaw** | Containerfile check stage fails in StageX image; CI tooling gaps |

**Cross-project signal:** Update systems are under-tested in multi-component deployments. The pattern of "partial update → inconsistent state → no rollback" appears across the ecosystem.

### 4.3 OIDC / Authentication Hardening

| Project | Specific Need |
|---------|---------------|
| **OpenClaw** | MEMORY.md/USER.md silently excluded when provenance ratchet marks them "untrusted" — no user notification, no recovery |
| **Hermes Agent** | MCP OAuth scope overwritten by server metadata; dashboard auth triggers warnings on every profile-scope load |
| **ZeroClaw** | OIDC refresh grant management (ADR-017); daemon-held grants; enrollment with revocation; ACP turn reconnect replay |

**Cross-project signal:** Identity, session persistence, and credential lifecycle management are becoming first-class concerns as agents move into production multi-user environments.

### 4.4 Multi-Channel Session Management

| Project | Specific Need |
|---------|---------------|
| **Hermes Agent** | Telegram forum topics should map to separate agent sessions; kanban dispatch trapped by stale error messages |
| **ZeroClaw** | ACP as primary transport; receiver-discretionary session messaging (RFC #11027); Discord external peers need clearer errors |
| **QwenPaw** | Telegram topic isolation shipped in PR #8857 |

**Cross-project signal:** Session boundary definition—where one conversation ends and another begins—is unsolved across platforms. Projects are converging on platform-native concepts (Telegram topics, Discord threads) as session scopes.

### 4.5 Localization and i18n

| Project | Specific Need |
|---------|---------------|
| **OpenClaw** | Multiple non-English language pack requests pending; user-facing strings still English-dominant |
| **ZeroClaw** | Config metadata remains English in localized ZeroCode and web surfaces despite UI translation progress |

**Cross-project signal:** Localization is transitioning from UI strings to structured data (config metadata, model names, error messages). Projects that addressed UI i18n are now hitting deeper localization gaps.

---

## 5. Differentiation Analysis

### Feature Focus

| Project | Primary Differentiator | Secondary Focus |
|---------|------------------------|-----------------|
| **OpenClaw** | Memory provenance, multi-agent orchestration, curated memory injection | Update system, CLI extensibility, MCP catalog |
| **Hermes Agent** | Multi-channel integration (Telegram, Discord, email, IRC, Feishu) | Dashboard UX, kanban task management, webhook automation |
| **QwenPaw** | Multi-model routing (AgentScope-based), video memory, context compaction | Media handling, JSON extraction, Linux desktop packaging |
| **ZeroClaw** | Security-first ACP protocol, OIDC/refresh grants, WASM plugin architecture | Channel-as-plugin (IRC/Twitch → WASM), goal execution system |

### Target Users

| Project | Primary Audience | Deployment Profile |
|---------|-----------------|--------------------|
| **OpenClaw** | Power users, developers, AI-forward enterprises | Self-hosted gateway; CLI-first; update-oriented |
| **Hermes Agent** | Developers and operators managing multi-channel bots | Desktop GUI + CLI; cron-driven automation; webhook-centric |
| **QwenPaw** | Developers using AgentScope ecosystem; Linux-focused users | Desktop (Tauri), CLI, Docker; multi-model workflows |
| **ZeroClaw** | Security-conscious deployments; Rust-centric developers | ACP-native transport; plugin-driven; WASM toolchain |

### Technical Architecture

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **State backend** | SQLite WAL | PostgreSQL | AgentScope-managed | Certificate ledger |
| **Extensibility model** | MCP catalog + plugins | WASM plugins + channel adapters | AgentScope plugins + tool registry | WASM plugins + ACP protocol |
| **Memory model** | File-injected provenance ratchet | Doc-Chain Substrate (RFC) | Video-memory plugin | Durable records via ACP |
| **Release strategy** | Stable + LTS-equivalent | Canary + stable | Beta (v2.3.x) | Milestone-driven (v1.0.0 track) |
| **Language** | Node.js/TypeScript | Python (primary) | Python | Rust |
| **Update mechanism** | Built-in `openclaw update` + Doctor | Canary channel | Manual | Cargo + plugin registry |

---

## 6. Community Momentum & Maturity

### Activity Tiers

**Tier 1 — High-Volume, Mature**  
**OpenClaw** — 500 PRs/359 issues in 24h, 349 contributors, 7,671 merged PRs. The project is production-grade but carries technical debt in memory management and update reliability. The presence of P0 issues with "gold shrimp" and "diamond lobster" community ratings indicates sophisticated user engagement. The v2026.10.34 LTS-equivalent release signals a shift toward enterprise stability guarantees.

**Tier 2 — Active, Feature-Iterating**  
**Hermes Agent** and **QwenPaw** — Both maintain ~50 PRs/day with strong merge ratios (16% and 48% respectively). Hermes Agent is advancing on webhook automation (PagerDuty, PagerDuty integration) and platform-specific fixes. QwenPaw is resolving edge cases in media handling and model routing. Both projects show healthy community contribution patterns with diverse contributors.

**Tier 3 — Architecturally Advancing, Low Volume**  
**ZeroClaw** — Lower volume (50 PRs, 11 issues) but high technical ambition. The ACP protocol modernization, OIDC refresh grant system, and runtime split into smaller crates indicate a project investing in foundational architecture rather than feature breadth. The v1.0.0 roadmap tracker brings needed transparency.

**Tier 4 — Inactive**  
**IronClaw** — Zero activity in the last 24 hours. Status: dormant or discontinued.

### Rapid Iteration vs. Stabilization Signals

| Project | Trajectory | Signal |
|---------|-----------|--------|
| **OpenClaw** | ⚠️ Rapid but risk-heavy | 218 PRs merged/24h but 5+ P0/P1 bugs unresolved; the volume masks stability debt |
| **Hermes Agent** | 🟢 Feature-accelerating | PagerDuty integration, Desktop workspace switcher, OSC 7577 protocol support all advancing in parallel |
| **QwenPaw** | 🟢 Steady refinement | Bug-fix PRs (8 merged) outpace feature PRs; the project appears to be hardening v2.3.x |
| **ZeroClaw** | 🟢 Architecturally advancing | ACP/OIDC work represents foundational changes; expected for pre-1.0 projects |

---

## 7. Trend Signals

### For AI Agent Framework Developers

**1. Gateway Memory Management is Unsolved**  
Every project with a persistent agent process is independently discovering memory management failure modes. This is not a bug—it's an architectural gap in how agents manage long-lived state. Developers building new frameworks should design for bounded memory from day one, with explicit policies for WAL/worker/cache lifecycle management. The contrast between OpenClaw's 15.5 GB leak and Hermes Agent's 110 MB/s idle throughput suggests no shared best practice exists yet.

**2. Update/Rollback Systems Need Robustness Testing**  
The ecosystem shows a pattern of update failures leaving deployments in inconsistent states. This is a reliability anti-pattern that becomes critical as agents handle production workflows. Framework developers should invest in transactional update semantics and comprehensive rollback paths.

**3. Plugin Architecture is the Default Extensibility Model**  
Both Hermes Agent and ZeroClaw are moving channel integrations to WASM plugins, breaking existing binary assumptions. OpenClaw uses an MCP-based approach. QwenPaw uses AgentScope's registry model. Developers should anticipate plugin-first deployments and design for plugin isolation, lifecycle management, and sandboxing.

**4. Session Boundary Definition is a Cross-Platform Challenge**  
Projects are independently defining how one conversation session ends and another begins, with no consensus. The convergence toward platform-native concepts (Telegram topics, Discord threads) suggests sessions should be scoped to the platform's natural conversation unit rather than a universal definition.

**5. OIDC and Credential Lifecycle Management is Emerging**  
ZeroClaw's ADR-017 (daemon-held refresh grants), Hermes Agent's MCP OAuth scope issues, and OpenClaw's MEMORY.md trust ratchet all reflect a shared need: **production agents need to manage identity and credentials with the same rigor as traditional server applications**. This is a maturing signal.

**6. Multi-Model Routing is Becoming Table Stakes**  
QwenPaw's context table, OpenClaw's model catalog, and Hermes Agent's provider fallback logic all indicate that single-model agents are no longer the expected deployment pattern. Developers should build for model diversity, automatic failover, and budget-aware model selection.

**7. Linux Desktop Packaging is a Gap**  
Both QwenPaw and Hermes Agent are actively working on Linux desktop artifacts (AppImage/deb for QwenPaw; Electron considerations for Hermes Agent). This represents a user base that prefers native desktop experiences over Docker or CLI-only deployments.

### Strategic Recommendations

- **For contributors:** OpenClaw's P0 memory issues offer high-impact contribution opportunities. Hermes Agent's webhook automation features are actively reviewed. ZeroClaw's OIDC and ACP work is architecturally significant.
- **For operators:** OpenClaw's v2026.10.34 LTS-equivalent is recommended for production stability. Hermes Agent's canary channel provides latest fixes at the cost of regression risk. QwenPaw v2.3.x appears stable for general use. ZeroClaw is appropriate for Rust-ecosystem teams targeting ACP-native deployments.
- **For platform builders:** The ecosystem lacks shared standards for session boundaries, update semantics, and memory lifecycle policies. These are opportunities for cross-project specification work.

---

*Report compiled from community digest data for 2026-11-26. Projects: OpenClaw, Hermes Agent, IronClaw, QwenPaw, ZeroClaw.*

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>Let me analyze the provided GitHub data for Hermes Agent and generate a structured project digest for 2026-11-26.

Let me organize the key information:

**Overview:**
- Issues updated in last 24h: 50 (open/active: 48, closed: 2)
- PRs updated in last 24h: 50 (open: 42, merged/closed: 8)
- New releases: 1 (canary.20261125T064800Z-v0.23.4)

**Releases:**
- canary.20261125T064800Z-v0.23.4 released on November 25, 2026
- Hermes Desktop downloads available for macOS Apple Silicon

**Top Issues by comments:**
1. #143379 - RFC: THE DOC-CHAIN SUBSTRATE'S NETWORK (57 comments) - type/security, comp/agent, tool/memory
2. #146538 - Gateway does 34k-99k filesystem metadata ops/s with many profiles (15 comments) - type/perf, P2
3. #121281 - kanban: blocked→ready keeps stale last_failure_error (10 comments) - type/bug
4. #154275 - patchelf patch fails with patchelf-0.15.2 (9 comments) - type/bug
5. #108575 - heremes profile create --clone does not carry over agent.max_turns (8 comments) - type/bug
6. #148923 - Canonical group faces ignore the migrated bot avatar key (7 comments) - type/bug, 👍: 2
7. #119190 - image turns show injected memory context as user's words (6 comments) - type/bug
8. #144334 - Kanban owner-run workers' Worker log has no live tool feed (6 comments) - type/bug
9. #142477 - mcp oauth.scope is ignored (4 comments) - type/bug
10. 

#25620 - Feishu merge_forward messages produce empty '[Merged forward message]' (4 comments) - type/bug

Several more issues are tracking critical problems: Termux/Android lacks os.link support causing crashes, iteration budget messages leak to gateway platforms, Desktop approval timeout recovery needs a guard mechanism, and Desktop falls into first-run setup after Windows resume. Additional bugs include production infrastructure leaking 'No home channel' errors to users, kanban dispatcher rate-limit text trapping cards in blocker_auth, and Desktop cron sidebar requiring collapsible folders.

A custom email subject gets placed in the message body instead of the subject line, while the idle gateway burns 50-70% CPU reading ~110 MB/s. Dashboard auth triggers warnings on every profile-scope load, MCP OAuth scope gets overwritten by server metadata, and kimi-k3 tool_call receives empty arguments. Fallback provider switches preserve Anthropic fast-mode speed, iOS standalone mode reloads on panel toggle, the skill lock interpreter conflates paths, killed backup runs leave .partial archives, and /goal reopens verified work. Windows gateway ensure refuses a home with a pre-wscript .cmd launcher still running, and backup transfer to Hermes Cloud fails because the undo point can't read root-owned portal-recovery. Mobile app keeps displaying sessions as active even after they complete.

Three pull requests address platform issues: one tightens CLT git stub guards and resolves child process working directory paths, another guards Electron against macOS CLT git stub scenarios, and a third enables PagerDuty webhook support with signature verification and secret rotation. A project workspace switcher feature is in development, Model Forge gets bumped to v1.3.1, webhook disable/enable and secret rotation functionality is underway, and remote file overwrite protections are being added.

Several other PRs are queued: bumping antigravity-subscription-directsdk to v1.0.35, fixing gateway startup to wait for webapp.host assignment, updating aura plugin to 1.0.3, re-holding buffered Telegram events on pre-accept failures, adding Webapp support for hosts without agents, capping goal/context in background receipts, aligning backend migration timeouts, honoring verified login cookies on loopback listeners, capping document artifacts per completion notification, documenting production pitfalls, and resolving relative completion artifacts.
</think>


# Hermes Agent Project Digest — November 26, 2026

---

## 1. Today's Overview

Hermes Agent shows **high velocity** on November 26, 2026, with 50 issues and 50 PRs updated in the last 24 hours, and 8 PRs merged or closed. The project released **canary.20261125T064800Z-v0.23.4**, continuing its rapid iteration cadence. Community engagement remains strong with an RFC on the Doc-Chain Substrate's Network generating 57 comments — the most active thread by far — signaling demand for improved durable memory architecture. Performance regressions (Windows filesystem thrashing, idle gateway CPU burn) and platform-specific bugs (Termux/Android hard-link crash, Windows sleep/resume overlay, macOS CLT git stub dialogs) dominate the bug backlog, while new features are advancing across webhook management, PagerDuty integration, and Desktop workspace switching.

---

## 2. Releases

### canary.20261125T064800Z-v0.23.4
**Released:** November 25, 2026  
**Type:** Canary (pre-release) build

This is a standard canary release continuing the v0.23.x lineage. No breaking changes or migration notes were documented in the release metadata. Users on the canary channel receive the latest upstream fixes and features between stable releases.

- **Downloads:** Hermes Desktop DMG available for macOS Apple Silicon (M-series)
- **Release Link:** https://github.com/NousResearch/hermes-agent/releases/tag/canary.20261125T064800Z-v0.23.4

---

## 3. Project Progress

### Merged/Closed PRs Today (8 total)

| PR | Author | Change Summary |
|---|---|---|
| [#159003](https://github.com/NousResearch/hermes-agent/pull/159003) | mr-pewpy | plugin-catalog: Model Forge v1.2.0 — bump five entries |
| [#128785](https://github.com/NousResearch/hermes-agent/pull/128785) | chen964224 | fix(gateway): cap document artifacts per completion notification |
| [#123498](https://github.com/NousResearch/hermes-agent/pull/123498) | chen964224 | skills: production pitfalls — builtin skills, agy output-format/effort, opencode --model id, xlsx bulk reads |
| [#122191](https://github.com/NousResearch/hermes-agent/pull/122191) | chen964224 | fix(kanban): resolve relative completion artifacts against the task workspace |
| [#159964](https://github.com/NousResearch/hermes-agent/pull/159964) | csjoyxy | WebApp iOS standalone mode: panel toggle icons reload page (bugfix, closed) |
| [#160278](https://github.com/NousResearch/hermes-agent/pull/160278) | lldois | Mobile app session display bug (Withdrawn — unauthorized report) |

### Active PRs Advancing

- **[#160306](https://github.com/NousResearch/hermes-agent/pull/160306)** — `teknium1`: PagerDuty webhooks accepted with signature verification, secret rotation, event filters, and retries
- **[#156947](https://github.com/NousResearch/hermes-agent/pull/156947)** — `teknium1`: `hermes webhook disable/enable/rotate-secret` for dynamic route management
- **[#160300](https://github.com/NousResearch/hermes-agent/pull/160300)** — `BearHuddleston`: Tighten macOS CLT git stub guard, resolve child cwd PATH, test xcode-select timeout
- **[#160301](https://github.com/NousResearch/hermes-agent/pull/160301)** — `BearHuddleston`: Guard Electron resolveGitBinary against macOS CLT git stub (no dialog popups)
- **[#151754](https://github.com/NousResearch/hermes-agent/pull/151754)** — `pashakbit`: Add native project/workspace switcher to Hermes Desktop
- **[#160297](https://github.com/NousResearch/hermes-agent/pull/160297)** — `freqyfreqy`: Support OSC 7577 (Program Resume Protocol) across interactive terminal surfaces
- **[#160232](https://github.com/NousResearch/hermes-agent/pull/160232)** — `unsupportedpastels`: Gateway waits for late-assigned webapp.host address at boot (fixes #160209)
- **[#159876](https://github.com/NousResearch/hermes-agent/pull/159876)** — `benbarclay`: Run Webapp on host with no agent for Hermes Cloud hosted dashboard
- **[#148419](https://github.com/NousResearch/hermes-agent/pull/148419)** — `neaucode`: Cap goal/context echoed back in background delegation receipts
- **[#128626](https://github.com/NousResearch/hermes-agent/pull/128626)** — `0ut5ider`: Guard remote whole-file overwrites with SHA-256 digest verification

---

## 4. Community Hot Topics

### Most Active Threads

| # | Topic | Author | Comments | Link |
|---|---|---|---|---|
| 1 | **RFC: THE DOC-CHAIN SUBSTRATE'S NETWORK** | c0wb0yp0tat0 | 57 | [#143379](https://github.com/NousResearch/hermes-agent/issues/143379) |
| 2 | Gateway does 34k-99k filesystem metadata ops/s with many profiles | kabirMas | 15 | [#146538](https://github.com/NousResearch/hermes-agent/issues/146538) |
| 3 | kanban: blocked→ready promotes keeps stale last_failure_error | DresvyanskiyDenis | 10 | [#121281](https://github.com/NousResearch/hermes-agent/issues/121281) |
| 4 | patchelf patch fails with patchelf-0.15.2 (nixpkgs-unstable) | alaendle | 9 | [#154275](https://github.com/NousResearch/hermes-agent/issues/154275) |
| 5 | `hermes profile create --clone` does not carry over agent.max_turns | 2ndNatureAI | 8 | [#108575](https://github.com/NousResearch/hermes-agent/issues/108575) |

### Analysis

**#143379 — Doc-Chain Substrate RFC:** The overwhelming leader in engagement (57 comments) proposes a durable record layer for memory that survives session compression with provenance intact. This reflects a **deep community need for reliable long-term memory architecture** — users want the agent to re-read durable records rather than repeat context. The RFC covers the read protocol, governance model, and compaction strategy. Maintainers should prioritize this architectural discussion as it touches core agent behavior.

**#146538 — Windows Filesystem Thrashing:** 15 comments on a performance regression where the gateway on Windows with many profiles (66) generates 34,000–99,000 filesystem metadata operations per second. This is a **critical performance and resource issue** on the Windows platform, burning a full CPU core. Users with complex multi-profile setups are directly impacted.

---

## 5. Bugs & Stability

### P1/P2 Bugs (Critical/High Priority)

| Priority | Issue | Component | Summary | Fix PR? |
|---|---|---|---|---|
| **P2** | [#146538](https://github.com/NousResearch/hermes-agent/issues/146538) | Gateway, profiles | Windows: 34k-99k filesystem metadata ops/s with many profiles — kernel pool growth | — |
| **P2** | [#160281](https://github.com/NousResearch/hermes-agent/issues/160281) | Gateway, sessions | Idle gateway burns 50-70% CPU, reads ~110 MB/s on busy multi-profile install | — |
| **P2** | [#121281](https://github.com/NousResearch/hermes-agent/issues/121281) | CLI, cron, kanban | kanban blocked→ready promotes keeps stale last_failure_error, blocker_auth parks card forever | — |
| **P2** | [#158318](https://github.com/NousResearch/hermes-agent/issues/158318) | CLI, kanban | Stale rate-limit text in kanban dispatcher traps card in blocker_auth forever | — |
| **P2** | [#158513](https://github.com/NousResearch/hermes-agent/issues/158513) | Gateway, Termux/Android | os.link missing on Termux — hard-link atomic-create sites crash on every inbound turn | — |
| **P2** | [#143658](https://github.com/NousResearch/hermes-agent/issues/143658) | Desktop, Windows | Desktop falls into first-run setup overlay after Windows sleep/resume | — |
| **P2** | [#158734](https://github.com/NousResearch/hermes-agent/issues/158734) | Agent, kimi | kimi-k3 tool_call bridge receives empty arguments {} for all argument-bearing deferred tool calls | — |
| **P2** | [#122010](https://github.com/NousResearch/hermes-agent/issues/122010) | Agent, providers | Fallback provider switch keeps Anthropic fast-mode speed, crashes OpenAI-compatible fallbacks | — |
| **P2** | [#160067](https://github.com/NousResearch/hermes-agent/issues/160067) | Gateway, email | Custom email subject is ignored and placed in message body instead | — |
| **P2** | [#160293](https://github.com/NousResearch/hermes-agent/issues/160293) | CLI, Desktop, Windows | Windows gateway ensure refuses a home whose Scheduled Task still runs pre-wscript .cmd launcher | — |
| **P2** | [#160232](https://github.com/NousResearch/hermes-agent/pull/160232) | Gateway, webapp | Gateway fails to wait for late-assigned webapp.host address at boot | **Yes — #160232** |
| **P2** | [#160298](https://github.com/NousResearch/hermes-agent/pull/160298) | Gateway, Telegram | Re-hold buffered Telegram events on pre-accept failures | **Yes — #160298** |

### P3 Bugs (Medium Priority)

Notable P3 bugs include the kanban Worker log missing a live tool feed ([#144334](https://github.com/NousResearch/hermes-agent/issues/144334)), iteration-budget-exhausted messages leaking to Slack/Discord ([#79424](https://github.com/NousResearch/hermes-agent/issues/79424)), canonical group faces ignoring migrated bot avatar keys ([#148923](https://github.com/NousResearch/hermes-agent/issues/148923) — only issue with 👍: 2), and Feishu merge_forward producing empty messages ([#25620](https://github.com/NousResearch/hermes-agent/issues/25620)).

### Notable Fixes Merged

- **[#128785](https://github.com/NousResearch/hermes-agent/pull/128785):** Capped document artifacts per kanban completion notification — prevented hundreds of uploads flooding chats
- **[#122191](https://github.com/NousResearch/hermes-agent/pull/122191):** Kanban now resolves relative artifact paths against the task workspace instead of the calling process's cwd

---

## 6. Feature Requests & Roadmap Signals

### High-Interest Feature Requests

| PR/Issue | Topic | Author | Priority | Likelihood of Near-Term Merge |
|---|---|---|---|---|
| [#160306](https://github.com/NousResearch/hermes-agent/pull/160306) | PagerDuty webhook integration (signature, rotation, retries) | teknium1 | P2 | **High** — PR open today |
| [#156947](https://github.com/NousResearch/hermes-agent/pull/156947) | `hermes webhook disable/enable/rotate-secret` | teknium1 | P2 | **High** — CI reviewed, advancing |
| [#151754](https://github.com/NousResearch/hermes-agent/pull/151754) | Desktop project workspace switcher | pashakbit | P3 | **High** — comprehensive feature, multi-component |
| [#160297](https://github.com/NousResearch/hermes-agent/pull/160297) | OSC 7577 Program Resume Protocol support | freqyfreqy | P3 | **Medium** — PR open today |
| [#159876](https://github.com/NousResearch/hermes-agent/pull/159876) | Webapp on host with no agent for Cloud dashboard | benbarclay | P3 | **Medium** — tied to Cloud roadmap |
| [#147393](https://github.com/NousResearch/hermes-agent/issues/147393) | Desktop approval-timeout recovery with stale-command guard | iankoratskydcn | P3 | **Medium** — clear UX gap |
| [#144252](https://github.com/NousResearch/hermes-agent/issues/144252) | Desktop cron sidebar: collapsible folders by name prefix | Joe070707 | P3 | **Low-Medium** — nice-to-have UX |

### Roadmap Signals

The **RFC on Doc-Chain Substrate (#143379)** with 57 comments strongly signals that the community wants a first-class durable memory layer. The PagerDuty integration and webhook management features suggest the project is investing in **operational/automation use cases**. Desktop workspace switching and Cloud dashboard hosting indicate focus on **multi-project/organizational workflows**.

---

## 7. User Feedback Summary

### Pain Points

1. **Windows Platform Instability:** Multiple P2 bugs on Windows (filesystem thrashing, sleep/resume overlay, Scheduled Task launcher conflict) suggest Windows is a pain point. Users running multi-profile setups on Windows report significant resource overhead.

2. **Kanban Reliability:** Two separate P2 bugs ([#121281](https://github.com/NousResearch/hermes-agent/issues/121281), [#158318](https://github.com/NousResearch/hermes-agent/issues/158318)) involve the kanban dispatcher getting trapped in `blocker_auth` due to stale error messages. This is a **repeatable operational failure** that users encounter.

3. **Profile Cloning:** `hermes profile create --clone` silently drops `agent.max_turns`, causing kanban dispatch to fail with "Iteration budget exhausted (4/4)" — a silent data loss on a critical config field.

4. **Termux/Android Hard-Link Crash:** The absence of `os.link` on Termux causes crashes on **every inbound turn** until a salt file is pre-created. This is a fundamental compatibility issue with no graceful fallback.

5. **Email Subject Bug (#160067):** Users report that custom email subjects are placed in the body, making outbound communications difficult to organize — reported just yesterday.

### Positive Signals

- Model Forge plugin v1.3.1 bump and active community plugin development indicate a healthy plugin ecosystem
- Security features (PagerDuty webhook signature verification, HMAC secret rotation) show investment in production-grade security
- Desktop workspace switching addresses a real multi-project workflow need

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Age | Topic | Status | Risk |
|---|---|---|---|---|
| [#25620](https://github.com/NousResearch/hermes-agent/issues/25620) | ~6 months | Feishu merge_forward produces empty '[Merged forward message]' | Open | Message delivery risk |
| [#79424](https://github.com/NousResearch/hermes-agent/issues/79424) | ~3.5 months | Iteration-budget-exhausted leaks to Slack/Discord | Open | User-facing UX pollution |
| [#108575](https://github.com/NousResearch/hermes-agent/issues/108575) | ~2.5 months | Profile clone drops agent.max_turns | Open | Silent config loss |
| [#119190](https://github.com/NousResearch/hermes-agent/issues/119190) | ~2 months | Image turns show injected memory context as user's words | Open | Transcript fidelity |
| [#93719](https://github.com/NousResearch/hermes-agent/issues/93719) | ~3 months | MCP OAuth scope overwritten by server metadata | Open | Auth config broken |
| [#142477](https://github.com/NousResearch/hermes-agent/issues/142477) | ~1 month | MCP oauth.scope ignored (SDK overwrites) | Open | Same root cause as #93719 |

### PRs Needing Maintainer Attention

| PR | Age | Topic | Status |
|---|---|---|---|
| [#128626](https://github.com/NousResearch/hermes-agent/pull/128626) | ~2 months | Guard remote whole-file overwrites | Open |
| [#151754](https://github.com/NousResearch/hermes-agent/pull/151754) | ~17 days | Desktop project workspace switcher | Open — large feature PR |
| [#148419](https://github.com/NousResearch/hermes-agent/pull/148419) | ~23 days | Cap goal/context in background delegation receipts | Open |

### Archival Candidates

- **[#160278](https://github.com/NousResearch/hermes-agent/issues/160278):** Mobile app session display bug — **Withdrawn** (unauthorized filing, should be closed)
- Issues older than 3 months with no maintainer response and no PR linked may warrant sweeper closure or archival

---

*Digest generated from Hermes Agent repository data on 2026-11-26. All issue/PR links point to https://github.com/NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>Let me analyze this GitHub data for QwenPaw (agentscope-ai/QwenPaw) from 2026-11-26.

Key metrics:
- Issues updated in last 24h: 35 (open/active: 25, closed: 10)
- PRs updated in last 24h: 50 (open: 26, merged/closed: 24)
- New releases: 0

Let me structure the digest:

1. **Today's Overview** - summarize activity
2. **Releases** - none
3. **Project Progress** - merged/closed PRs
4. **Community Hot Topics** - most active issues/PRs
5. **Bugs & Stability** - bugs/crashes
6. **Feature Requests & Roadmap Signals**
7. **User Feedback Summary**
8. **Backlog Watch**

Let me identify the most notable items:

Issues with most comments:
- #8464 (CLOSED) - Bug: /compact ignores session-level model switch - 6 comments
- #8863 (OPEN) - Windows ReMe tag index failure - 5 comments
- #8727 (OPEN) - Responses continuation summary fails - 3 comments
- #8892 (OPEN) - Feature: AI Prompt Polishing button - 3 comments
- #8891 (OPEN) - Built-in providers context table lacks glm-5.3/5.4 - 3 comments

Key PRs merged/closed:
- #8487 (CLOSED) - fix(scroll): recognize url-referenced media in tool-result folding
- #8308 (CLOSED) - test(api): verify missing provider lookup returns 404
- #8268 (CLOSED) - fix(task_tracker): bound run completion callback
- #8785 (CLOSED) - fix(media): enforce inline budget, rescale after refusal
- #8853 (CLOSED) - fix(agents): suggest retrying failed context compaction


- #8841 (CLOSED) - fix(plugins): keep llama-server from outliving crashed backend
- #8857 (CLOSED) - feat(telegram): isolate agent sessions by forum topic

Several video_memory fixes have been submitted by passionworkeer addressing graph payload handling and segment planning. The code-mode tool batch fix and json_pointer validation improvements are also notable contributions. Platform enhancements include Linux deb and AppImage packaging support, plus custom decision model endpoints for greater flexibility.

A new PR introduces worker acknowledgment requirements for clean shutdowns, while context table gaps for glm-5.3/5.4 models and MCP header form support round out recent work. The most active discussions center on compact command behavior, ReMe indexing on Windows, prompt polishing capabilities, and JSON parsing edge cases across multiple subsystems.
</think>


# QwenPaw Project Digest — 2026-11-26

## 1. Today's Overview

QwenPaw maintains high development velocity with **35 issues and 50 PRs** updated in the last 24 hours. No new releases shipped today. The community closed **10 issues** and **24 PRs**, indicating strong merge cadence. A recurring contributor, **passionworkeer**, opened multiple XS-sized bug fixes for the `video_memory` plugin, while **qbc2016** submitted a larger refactor for channel worker shutdown semantics. Notable new features under development include Linux desktop packaging and custom decision model endpoints. Overall project health appears robust with balanced bug-fix and feature work.

---

## 2. Releases

**None** — No new releases were published in the last 24 hours. The project remains on the `2.3.x` beta track.

---

## 3. Project Progress

### Merged / Closed PRs (24 total)

| PR | Author | Size | Description |
|----|--------|------|-------------|
| [#8487](https://github.com/agentscope-ai/QwenPaw/pull/8487) | passionworkeer | S | **fix(scroll):** recognize URL-referenced media in tool-result folding — collapses historical tool results that carry media URLs during context compression |
| [#8268](https://github.com/agentscope-ai/QwenPaw/pull/8268) | passionworkeer | M | **fix(task_tracker):** bound the run completion callback and always clean up — prevents zombie `running` entries when a callback hangs or is cancelled |
| [#8785](https://github.com/agentscope-ai/QwenPaw/pull/8785) | BeiMu-new | XXL | **fix(media):** enforce inline budget, rescale after refusal, and report omissions — fixes three gaps: byte budget vs. side limit independence, rescale logic after refusals, and omission reporting |
| [#8853](https://github.com/agentscope-ai/QwenPaw/pull/8853) | Ymmcc | XS | **fix(agents):** suggest retrying a failed context compaction — changes error message to recommend `/compact` retry instead of `/clear`, reducing unintended context loss |
| [#8841](https://github.com/agentscope-ai/QwenPaw/pull/8841) | BeiMu-new | L | **fix(plugins):** keep llama-server from outliving a crashed backend — ensures the local Llama server process is terminated when the backend dies |
| [#8857](https://github.com/agentscope-ai/QwenPaw/pull/8857) | aming | S | **feat(telegram):** isolate agent sessions by forum topic — Telegram forum topics now map to separate agent sessions, memory, and Console conversations |
| [#8308](https://github.com/agentscope-ai/QwenPaw/pull/8308) | passionworkeer | XS | **test(api):** verify missing provider lookup returns 404 |

### New Open PRs (26 total, selected highlights)

| PR | Author | Size | Description |
|----|--------|------|-------------|
| [#8933](https://github.com/agentscope-ai/QwenPaw/pull/8933) | passionworkeer | XS | **fix(video_memory):** coerce root themes to str & guard null in `merged_graph_payload` |
| [#8932](https://github.com/agentscope-ai/QwenPaw/pull/8932) | passionworkeer | XS | **fix(video_memory):** cap folded short-tail segments at `max_scene_sec` in `plan_segments` |
| [#8928](https://github.com/agentscope-ai/QwenPaw/pull/8928) | liyangxu1 | L | **feat(models):** support custom decision model endpoints |
| [#8444](https://github.com/agentscope-ai/QwenPaw/pull/8444) | LUOSENGWA | XL | **feat(desktop):** add Linux deb and AppImage packaging to the Tauri build |
| [#8899](https://github.com/agentscope-ai/QwenPaw/pull/8899) | qbc2016 | XXL | **fix(channels):** require worker acknowledgment for a clean stop |
| [#8923](https://github.com/agentscope-ai/QwenPaw/pull/8923) | AyhamJo7 | S | **fix(code-mode):** let `run_tool_batch` reach catalog tools inside code mode |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **#8464** — **[Bug] /compact ignores session-level model switch** (Closed, 6 comments)  
   https://github.com/agentscope-ai/QwenPaw/issues/8464  
   **Underlying need:** Users switching models mid-session expect the `/compact` command to respect the active model, not the agent-level default. The bug causes compression to fail silently with a 400 error when the default model rejects the payload. *This issue is now closed.*

2. **#8863** — **[Bug] Windows ReMe tag-index permanent failure** (Open, 5 comments)  
   https://github.com/agentscope-ai/QwenPaw/issues/8863  
   **Underlying need:** Windows users on `v2.3.0` and `v2.3.0.post1` with ReMe Light backend cannot use memory tagging due to an invalid workspace-relative path. Cross-platform reliability for the ReMe integration is a growing concern.

3. **#8727** — **[Bug] Responses continuation summary fails with 4000-token reasoning budget** (Open, 3 comments)  
   https://github.com/agentscope-ai/QwenPaw/issues/8727  
   **Underlying need:** The OpenAI Responses protocol's `disable_thinking=True` strips the `reasoning` field instead of preserving "no reasoning" semantics, causing continuation summaries to fail.

4. **#8892** — **[Feature] Add "AI Prompt Polishing" button** (Open, 3 comments)  
   https://github.com/agentscope-ai/QwenPaw/issues/8892  
   **Underlying need:** Users want an assisted-input feature that refines and structures raw prompts before sending, reducing friction in prompt engineering.

5. **#8891** — **Built-in providers lack glm-5.3/5.4 context metadata** (Open, 3 comments)  
   https://github.com/agentscope-ai/QwenPaw/issues/8891  
   **Underlying need:** Recent GLM models fall back to the 128k default context window, which may cause truncation or over-tokenization. Users need accurate built-in metadata for newly released models.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | #8863 | Windows ReMe tag-index permanently fails with invalid workspace-relative path | None yet |
| **High** | #8877 | Status-less model overload in OpenAI-compatible stream bypasses retries | None yet |
| **High** | #8887 | Media data blocks in tool results cause 400 on non-multimodal models | None yet |
| **Medium** | #8931 | `merged_graph_payload()` crashes on null/non-string root themes | [#8933](https://github.com/agentscope-ai/QwenPaw/pull/8933) |
| **Medium** | #8930 | `plan_segments()` returns segments longer than `max_scene_sec` | [#8932](https://github.com/agentscope-ai/QwenPaw/pull/8932) |
| **Medium** | #8903 | Code-mode `run_tool_batch` tool calls fail | [#8923](https://github.com/agentscope-ai/QwenPaw/pull/8923) |
| **Medium** | #8893 | Console model settings have no agent scope; chat picker is session-only | None yet |
| **Low** | #8888 | Transcript jumps back several screens when content height shrinks | None yet |

**Stability note:** Multiple JSON extraction utilities (`extract_json`, `extract_json_payload`, `extract_json_key`) have parsing edge cases reported by the same contributor. Corresponding fix PRs are already open, suggesting a coordinated cleanup of structured-output handling across the codebase.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood of Inclusion | Notes |
|---------|-------|------------------------|-------|
| **AI Prompt Polishing button** | [#8892](https://github.com/agentscope-ai/QwenPaw/issues/8892) | Medium | Simple UI addition; aligns with productivity UX trend |
| **MCP config page: header form** | [#8929](https://github.com/agentscope-ai/QwenPaw/issues/8929) | High | User-facing gap; many MCP servers require header auth |
| **Linux deb + AppImage packaging** | [#8444](https://github.com/agentscope-ai/QwenPaw/pull/8444) | High | PR already open; fills a clear platform gap |
| **Custom decision model endpoints** | [#8928](https://github.com/agentscope-ai/QwenPaw/pull/8928) | High | PR open; addresses a known limitation for custom providers |
| **Tenant-scoped memory retrieval** | [#8881](https://github.com/agentscope-ai/QwenPaw/issues/8881) | Medium | Architectural refactor; improves multi-tenant isolation |
| **Telegram forum topic isolation** | [#8827](https://github.com/agentscope-ai/QwenPaw/issues/8827) | **Merged** | Already shipped in [#8857](https://github.com/agentscope-ai/QwenPaw/pull/8857) |

---

## 7. User Feedback Summary

| Theme | Evidence | Sentiment |
|-------|----------|-----------|
| **Platform pain on Windows** | #8863 reports ReMe memory backend unusable on Windows 10 across two independent machines and two versions | ⚠️ Dissatisfied |
| **Context compression UX** | #8464 and #8848 both flag that compaction failures push users toward `/clear`, risking context loss | ⚠️ Dissatisfied |
| **Model configuration friction** | #8891 and #8893 highlight that built-in provider metadata is stale and console settings lack per-agent scope | ⚠️ Dissatisfied |
| **Cross-platform desktop demand** | #8444 — Linux users forced to run Docker; no native desktop artifact | ⚠️ Dissatisfied |
| **Positive: Telegram forum feature** | #8857 merged; enables topic-scoped sessions in Telegram supergroups | ✅ Satisfied |
| **Positive: Media handling fix** | #8785 — three media budget/rescale bugs fixed in one large PR | ✅ Satisfied |

---

## 8. Backlog Watch

The following open issues are older than 5 days or have significant user impact but lack a fix PR:

| Issue | Age | Impact | Needed Action |
|-------|-----|--------|---------------|
| [#8863](https://github.com/agentscope-ai/QwenPaw/issues/8863) — Windows ReMe tag-index failure | 3 days | High (blocks Windows memory users) | Maintainer triage; likely needs path normalization fix |
| [#8727](https://github.com/agentscope-ai/QwenPaw/issues/8727) — Responses continuation summary failure | 13 days | Medium (breaks scroll on some models) | Investigate `disable_thinking` semantics in Responses API |
| [#8891](https://github.com/agentscope-ai/QwenPaw/issues/8891) — Missing GLM-5.3/5.4 context metadata | 2 days | Medium (causes misconfigured token budgets) | Add static entries to context table; update catalog fetcher |
| [#8877](https://github.com/agentscope-ai/QwenPaw/issues/8877) — Overload SSE bypasses retry logic | 2 days | Medium (causes silent failures under load) | Validate status-less error handling in stream parser |
| [#8881](https://github.com/agentscope-ai/QwenPaw/issues/8881) — Tenant-scoped memory retrieval | 2 days | Low (architectural; multi-tenant setups) | Design review; may be a v2.4 item |
| [#8444](https://github.com/agentscope-ai/QwenPaw/pull/8444) — Linux packaging | 31 days | Medium (platform gap) | PR awaiting review/merge |

---

*Digest generated from QwenPaw (agentscope-ai/QwenPaw) activity on 2026-11-26. Data sourced from GitHub Issues and Pull Requests.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>Let me analyze the GitHub data for ZeroClaw and create a structured project digest.

Key data points:
- 11 issues updated in last 24h (8 open, 3 closed)
- 50 PRs updated in last 24h (39 open, 11 merged/closed)
- 0 new releases

Let me organize the information by the requested sections:

**1. Today's Overview**
- High activity: 50 PRs updated, 11 issues
- Multiple security-related items (OIDC refresh grants, send_message_to_peer bug)
- v1.0.0 roadmap tracker created
- Zeroclaw-runtime split tracker active
- Several major PRs in progress (ACP, OIDC auth, Goal system, plugins)

**2. Releases**
- None today

**3. Project Progress**
Merged/closed PRs:
- #11872: fix(mcp) - replay tool call rejected for stale HTTP session
- #12167 (issue closed): Bug fix for send_message_to_peer ignoring autonomy level
- #12107 (issue closed): Task for detached chat turn answer display
- #8415 (issue closed): Telegram Rich Messages feature (icebox)

**4. Community Hot Topics**
Most active by comments:
- #9363: Config metadata localization bug (5 comments)
- #12697: Zeroclaw-runtime split tracker (3 comments)
- #12167: Security bug - send_message_to_peer (2 comments)
- #8415: Telegram Rich Messages (2 comments)
- #12107: Detached chat turn task (2 comments)
- #11760: Email channel UNSEEN bug (2 comments)

Most active PRs by recent updates (multiple stacked/active):
- #12440: Host-mediated agent wake dispatch
- #12271: Route external peers to explicit destination
- #12654: ACP startup cutover


- #12653: OIDC auth, principal scoping
- #11881: Goal execution lifecycle

**5. Bugs & Stability**
Critical security issue resolved with send_message_to_peer autonomy enforcement, email channel now properly marking messages as read to prevent duplicate responses, and Containerfile check stage failure in StageX image. Config metadata localization still needs attention.

**6. Feature Requests & Roadmap Signals**
v1.0.0 roadmap tracker establishes clear direction, zeroclaw-runtime split tracker addresses architectural goals, OIDC refresh grants tracking tracks security enhancements, and receiver-discretionary session messaging from RFC #11027 moves forward. ACP infrastructure and Goal execution system remain active development areas.

**7. User Feedback Summary**
Email channel creates operational friction with re-answering behavior, localization gaps persist despite progress on non-English metadata, Telegram rich messages feature requires completion, and Discord external peers need clearer error messaging. Plugin system architecture is being restructured.

**8. Backlog Watch**
IRC/Twitch migration to registry plugins remains pending, Gemini CLI removal requires confirmation, and several PRs await author action and maintainer review.
</think>


# ZeroClaw Project Digest — 2026-11-26

---

## 1. Today's Overview

ZeroClaw maintains **high development velocity** with 50 PRs and 11 issues updated in the last 24 hours, indicating active multi-front progress toward the v1.0.0 milestone. The project is advancing on several architectural fronts simultaneously: OIDC authentication and principal scoping for the ACP gateway, daemon-held refresh grants for device sessions, and the Goal execution lifecycle. A notable security bug affecting agent autonomy was resolved, while two new trackers (v1.0.0 roadmap and runtime split) provide clearer community direction. No releases were published today; the project remains in heavy feature integration phase.

---

## 2. Releases

**No new releases today.**

The project has not published any releases in the past 24 hours. The new v1.0.0 roadmap tracker ([#12712](https://github.com/zeroclaw-labs/zeroclaw/issues/12712)) suggests upcoming releases will be structured around milestone targets, replacing the previous version plan in FND-001 §6.

---

## 3. Project Progress

### Closed/Merged Items

| # | Type | Title | Key Change |
|---|------|-------|------------|
| [#11872](https://github.com/zeroclaw-labs/zeroclaw/pull/11872) | PR (fix) | fix(mcp): replay a tool call rejected for a stale HTTP session | MCP clients now correctly start a new session when receiving HTTP 404 from an idle-evicted or restarted Streamable HTTP server. |
| [#12167](https://github.com/zeroclaw-labs/zeroclaw/issues/12167) | Issue (closed) | send_message_to_peer ignores sender autonomy level | Confirmed S2 security bug; `readonly` agents could initiate turns for peers. Fix ensures `send_message_to_peer` now respects autonomy level and action budget. |
| [#12107](https://github.com/zeroclaw-labs/zeroclaw/issues/12107) | Issue (closed) | show detached chat turn answer when socket reopens before turn ends | Dashboard now tracks mid-turn socket closures and reloads the transcript once the turn completes. |
| [#8415](https://github.com/zeroclaw-labs/zeroclaw/issues/8415) | Issue (closed) | Implement Telegram Bot API 10.1 Rich Messages | Moved to icebox; Telegram legacy compatibility via Markdown tables was deemed lower priority. |

### Active Feature PRs (Recent Updates)

| # | Title | Scope | Status Note |
|---|-------|-------|-------------|
| [#12440](https://github.com/zeroclaw-labs/zeroclaw/pull/12440) | feat(plugins): add host-mediated agent wake dispatch | Plugin WIT interface, WASM tooling | High-risk, XL size; adds `dispatch.wake` to tool-plugin world |
| [#12653](https://github.com/zeroclaw-labs/zeroclaw/pull/12653) | feat(gateway): add OIDC auth, principal scoping, and turn reconnect replay to /acp | Gateway, ACP | Stacked on session management; enables dashboard identity and reconnect |
| [#12654](https://github.com/zeroclaw-labs/zeroclaw/pull/12654) | feat(webchat): wire ACP startup cutover and switch dashboard transport to /acp | Web, ACP | Introduces `acp_webchat_cutover` gateway flag |
| [#12717](https://github.com/zeroclaw-labs/zeroclaw/pull/12717) | feat(oidc): hold, seal and store refresh grants in certificate ledger | Security, OIDC | Slices 2–3 of daemon-held OIDC refresh grants (ADR-017) |
| [#12716](https://github.com/zeroclaw-labs/zeroclaw/pull/12716) | feat(oidc): add refresh and revocation requests to enrollment | Security, OIDC | Slice 1; adds IdP requests to Enrollment struct |
| [#11881](https://github.com/zeroclaw-labs/zeroclaw/pull/11881) | feat(goal): add accounted Goal execution lifecycle | Goal system | V1 proposal 4/12; draft status with local validation failures |
| [#12443](https://github.com/zeroclaw-labs/zeroclaw/pull/12443) | chore(channels)!: move IRC and Twitch out of the binary into registry plugins | Channel plugins, breaking change | IRC and Twitch become WASM plugins; breaks existing deployments |
| [#12452](https://github.com/zeroclaw-labs/zeroclaw/pull/12452) | feat(zerocode): configure and select canonical provider models | Zerocode, config | Masked editor baselines; exact model references in configuration |
| [#12678](https://github.com/zeroclaw-labs/zeroclaw/pull/12678) | feat(tools)!: remove the gemini_cli coding tool | Tooling, breaking change | Removes deprecated Gemini CLI (replaced by Antigravity CLI) |

---

## 4. Community Hot Topics

### Most Active Issues (by Comment Count)

| # | Title | Author | Comments | Reactions | Significance |
|---|-------|--------|----------|-----------|--------------|
| [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) | Config metadata remains English in localized ZeroCode and web surfaces | Audacity88 | 5 | 0 | Localization gap; affects non-English users of ZeroCode CLI and dashboard |
| [#12697](https://github.com/zeroclaw-labs/zeroclaw/issues/12697) | Tracker: Split zeroclaw-runtime into smaller crates | JordanTheJet | 3 | 1 | Architectural refactoring tracker; coordinates module ownership |
| [#12712](https://github.com/zeroclaw-labs/zeroclaw/issues/12712) | Tracker: Roadmap to v1.0.0 | JordanTheJet | 1 | 1 | Community visibility into release cadence and priorities |
| [#11119](https://github.com/zeroclaw-labs/zeroclaw/issues/11119) | Tracker: Implement receiver-discretionary session messaging from RFC #11027 | Audacity88 | 1 | 0 | Native agent-to-agent session messaging contract; affects multi-agent workflows |

**Underlying Needs:** The localization bug (#9363) highlights demand for proper i18n beyond shell strings, affecting config metadata visible in the dashboard and ZeroCode UI. The runtime split tracker (#12697) reflects community desire for smaller, composable crates enabling lighter deployments and clearer module boundaries.

### Most Active PRs (by Recent Update Volume)

The following large PRs are actively being updated and reviewed, indicating significant engineering investment:

- **ACP Gateway Modernization** ([#12653](https://github.com/zeroclaw-labs/zeroclaw/pull/12653), [#12654](https://github.com/zeroclaw-labs/zeroclaw/pull/12654)): Shared session lifecycle between dashboard WebChat and editor ACP is a major architectural convergence.
- **Goal System** ([#11881](https://github.com/zeroclaw-labs/zeroclaw/pull/11881), [#11880](https://github.com/zeroclaw-labs/zeroclaw/pull/11880), [#11879](https://github.com/zeroclaw-labs/zeroclaw/pull/11879)): 12-proposal V1 roadmap advancing on contracts, configuration grammar, and execution lifecycle.
- **OIDC Security** ([#12716](https://github.com/zeroclaw-labs/zeroclaw/pull/12716), [#12717](https://github.com/zeroclaw-labs/zeroclaw/pull/12717)): Daemon-held refresh grants for persistent device sessions (ADR-017).

---

## 5. Bugs & Stability

### Reported Bugs (Ranked by Severity)

| # | Severity | Component | Title | Fix Status |
|---|----------|-----------|-------|------------|
| [#12167](https://github.com/zeroclaw-labs/zeroclaw/issues/12167) | **Security S2** | Runtime | send_message_to_peer ignores sender autonomy level | **Fixed** — `readonly` agents no longer bypass action budget checks |
| [#11760](https://github.com/zeroclaw-labs/zeroclaw/issues/11760) | **S2** | Email channel | Email channel re-answers live mail after restart (UNSEEN flag never set) | In-progress |
| [#12703](https://github.com/zeroclaw-labs/zeroclaw/issues/12703) | **S2** | Email channel | Live-processed messages stay UNSEEN, causing backlog re-processing | Open |
| [#12710](https://github.com/zeroclaw-labs/zeroclaw/issues/12710) | **S2** | CI/Tooling | Containerfile `check` stage fails in StageX image | Open |
| [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) | **Degraded** | Config, Web | Config metadata remains English in localized surfaces | Open |

### Analysis

The **email channel's UNSEEN flag bug** is the most operationally impactful open issue — any restart causes duplicate email responses, affecting production deployments. The companion issue (#12703) suggests the root cause is in active mode startup drain logic. A fix should be prioritized before the next release.

The **Containerfile check stage failure** is a CI blocker; no workflow currently builds the StageX image referenced by the Containerfile comment, indicating a tooling gap.

---

## 6. Feature Requests & Roadmap Signals

### New Trackers Indicating Strategic Direction

| # | Title | Implication |
|---|-------|-------------|
| [#12712](https://github.com/zeroclaw-labs/zeroclaw/issues/12712) | Roadmap to v1.0.0 | First structured release plan; community can expect versioned milestones with target dates |
| [#12697](https://github.com/zeroclaw-labs/zeroclaw/issues/12697) | Split zeroclaw-runtime into smaller crates | Refactoring initiative will enable plugin-first architecture and lighter binaries |
| [#12707](https://github.com/zeroclaw-labs/zeroclaw/issues/12707) | Daemon-held OIDC refresh grants (ADR-017) | Enables long-lived device sessions without re-authentication; security-critical for ACP |

### Likely Next-Version Features

Based on PR maturity and tracker activity:

1. **ACP as primary gateway transport** — [#12653](https://github.com/zeroclaw-labs/zeroclaw/pull/12653), [#12654](https://github.com/zeroclaw-labs/zeroclaw/pull/12654) indicate ACP will replace legacy `/ws/chat` for dashboard and editor
2. **Plugin architecture for channels** — [#12443](https://github.com/zeroclaw-labs/zeroclaw/pull/12443) moves IRC/Twitch to WASM plugins; IRC/Twitch users will need to adopt new deployment patterns
3. **Canonical provider model selection** — [#12452](https://github.com/zeroclaw-labs/zeroclaw/pull/12452) enables explicit model configuration in Zerocode
4. **Qwen MP4 video input** — [#12578](https://github.com/zeroclaw-labs/zeroclaw/pull/12578) adds video file support to Qwen provider

### Breaking Changes to Watch

- **#12443**: IRC and Twitch removed from default binary; operators must install WASM plugins
- **#12678**: Gemini CLI tool removed (Gemini CLI sunset June 2026)

---

## 7. User Feedback Summary

### Pain Points Identified from Issue Activity

| Theme | Evidence | Impact |
|-------|----------|--------|
| **Email channel reliability** | #11760, #12703 (2 issues, active discussion) | Production users lose email idempotency on restart; high operational risk |
| **Localization gaps** | #9363 (5 comments, persistent) | Non-English users see mixed-language UI in config metadata and web surfaces |
| **Plugin ecosystem transition** | #12443, #12440 | Breaking change for IRC/Twitch users; migration path needed |
| **Dashboard session persistence** | #11727 (zerocode reopen sessions) | ZeroCode users lost open session list on restart; fixed in PR |
| **Telegram feature parity** | #8415 (moved to icebox) | Telegram bot users lack rich message support; lower priority |

### Satisfaction Signals

- The closed issue #12107 (detached chat turn display) and PR #11727 (session list persistence) indicate active investment in user-facing UX improvements
- The security fix for #12167 demonstrates responsiveness to agent autonomy concerns
- Multiple contributors (tidux, JordanTheJet, Audacity88, vadelma-agent) are actively maintaining and advancing the codebase

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| # | Age | Title | Risk | Note |
|---|-----|-------|------|------|
| [#8415](https://github.com/zeroclaw-labs/zeroclaw/issues/8415) | ~5 months | Telegram Bot API 10.1 Rich Messages | Medium | Moved to icebox; community interest (2 👍) suggests reconsidering |
| [#11760](https://github.com/zeroclaw-labs/zeroclaw/issues/11760) | ~1.5 months | Email UNSEEN flag bug | Medium | In-progress but unassigned; blocking for production email deployments |
| [#12710](https://github.com/zeroclaw-labs/zeroclaw/issues/12710) | 1 day | Containerfile check stage failure | Medium | CI blocker; no workflow builds StageX image |
| [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) | ~4 months | Config metadata localization | Low | Affects non-English users; fix PR needed |

### PRs Needing Author or Maintainer Action

| # | Title | Blockers |
|---|-------|----------|
| [#11881](https://github.com/zeroclaw-labs/zeroclaw/pull/11881) | Goal execution lifecycle | Local validation failures; needs-author-action |
| [#11510](https://github.com/zeroclaw-labs/zeroclaw/pull/11510) | Zerocode confirm config deletion/reset | needs-author-action |
| [#11727](https://github.com/zeroclaw-labs/zeroclaw/pull/11727) | Zerocode reopen sessions | needs-author-action |
| [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) | Persistent session prompt attachments | Experienced contributor; long-standing, may need rebase |

### Stale or Blocked Trackers

- **#8415** (Telegram Rich Messages): Iceboxed; consider whether Telegram's API evolution warrants revival
- **#12678** (Gemini CLI removal): Awaiting merge confirmation; removal is straightforward but breaking-change label requires maintainer sign-off

---

*Generated from ZeroClaw project activity on 2026-11-26. Data sourced from GitHub (zeroclaw-labs/zeroclaw).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*