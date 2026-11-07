# OpenClaw Ecosystem Digest 2026-11-07

> Issues: 363 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-07 02:18 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

<think>The user wants me to generate a structured project digest for OpenClaw based on the provided GitHub data. Let me analyze the data carefully and create a comprehensive digest.

Let me organize the key findings:

**Overview:**
- Issues updated in last 24h: 363 (open/active: 204, closed: 159)
- PRs updated in last 24h: 500 (open: 378, merged/closed: 122)
- New releases: 0

**Latest Releases:** None

**Top Issues by comment count:**
1. #160959 - Gateway blocks for minutes (80 comments) - P0 regression
2. #164294 - WAL auto-checkpoint never completes (39 comments) - P2
3. #177656 - Native host exec returns shared-state error (30 comments) - P1
4. #150635 - Dreaming deep phase never promotes (25 comments) - P2
5. #191944 - Gateway stop fails on macOS (23 comments) - P2
6. #164923 - Short-term promotion issue (20 comments) - P2, closed
7. #155563 - MCP groups retained after agent turn (16 comments) - P1 regression
8. #166017 - mcp.sessionIdleTtlMs default not applied (15 comments) - P1

**Top PRs:**
- #194376 - sessions_send wake starts feature
- #194411 - restore missing Access artwork (closed)
- #194412 - expire cached secrets on elapsed time
- #194190 - show only time for same-day timestamps (closed)
- #193519 - preserve collapsed groups when reloading
- #193509 - ci: give release watchers stable identity
- #194407 - preserve worker reuse when test caches grow (closed)
- #192617 - surface retriable work-start rejections as 409


- #194371 - prevent Subagents collapse during chat reload

Now I'll structure this into a clear digest format with all findings organized.
</think>


# OpenClaw Project Digest — 2026-11-07

---

## 1. Today's Overview

OpenClaw maintains high development velocity with **363 issues and 500 PRs updated in the last 24 hours**, indicating active daily engagement across the community. No new stable releases shipped today, but the project continues to address critical regressions and feature work. The most pressing issue remains a **P0 regression (#160959)** where Gateway blocks for minutes during large external plugin capture—a problem introduced in the 2026.9.6 release. Several P1 bugs affect session-state management and crash loops, while 122 PRs were merged or closed, showing the team is actively triaging the backlog. Overall, the project appears healthy but under pressure from multiple concurrent stability issues.

---

## 2. Releases

**No new releases today.** The latest stable release remains **v2026.10.10**, with prerelease **v2026.11.5-beta.1** in testing (includes fixes for SQLite header-probe timeout from #187197).

**Notable upcoming changes in prerelease:**
- Historical-state recovery for collector child sessions (#164445, `e02ae3ecb66`) is now on `main` and passes 14/14 tests at `c4d8a5ae171`
- Expected to ship in stable once validation completes

---

## 3. Project Progress

### Merged/Closed PRs Today (122 total)

| PR | Title | Size | Status |
|----|-------|------|--------|
| [#194411](https://github.com/openclaw/openclaw/pull/194411) | fix(plugins): restore missing Access artwork | XS | ✅ Closed |
| [#194190](https://github.com/openclaw/openclaw/pull/194190) | fix(ui): show only time for same-day timestamps | S | ✅ Closed |
| [#194407](https://github.com/openclaw/openclaw/pull/194407) | fix(ci): preserve worker reuse when test caches grow | XS | ✅ Closed |
| [#194405](https://github.com/openclaw/openclaw/pull/194405) | test(ui): wait for configured provider icons | XS | ✅ Closed |
| [#194399](https://github.com/openclaw/openclaw/pull/194399) | fix(media): cancel interrupted attachment downloads | S | ✅ Closed |
| [#194152](https://github.com/openclaw/openclaw/pull/194152) | ui: move dialog closes onto IconButton | L | ✅ Closed |

### Active PRs Advancing

| PR | Title | Size | Priority | Status |
|----|-------|------|----------|--------|
| [#194376](https://github.com/openclaw/openclaw/pull/194376) | feat(gateway): admit sessions_send wake starts | L | — | Open |
| [#194412](https://github.com/openclaw/openclaw/pull/194412) | fix(onepassword): expire cached secrets on elapsed time | S | — | Open |
| [#193519](https://github.com/openclaw/openclaw/pull/193519) | fix(ui): preserve collapsed groups when reloading | XS | P2 | Open |
| [#194371](https://github.com/openclaw/openclaw/pull/194371) | fix(control-ui): prevent Subagents collapse during chat reload | L | P3 | Open |
| [#191513](https://github.com/openclaw/openclaw/pull/191513) | feat(pairing): pair a browser with a short code approved on host | XL | P2 | Open |
| [#192617](https://github.com/openclaw/openclaw/pull/192617) | fix(gateway): surface retriable work-start rejections as 409 conflicts | S | P2 | Open |

**Key themes:**
- UI/UX polish continues (timestamps, dialogs, session sidebar)
- Security and reliability fixes (onepassword secrets expiry, attachment download cancellation)
- New gateway admission features for sessions_send wake traffic

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **[#160959](https://github.com/openclaw/openclaw/issues/160959)** — Gateway blocks for minutes while capturing large external plugins (2026.9.6 regression)  
   **80 comments | P0 | Diamond Lobster**  
   *Underlying need: The plugin generation capture feature introduced in 2026.9.6 causes Gateway event loop blocking for minutes when processing large external/workspace plugins. Users need uninterrupted Gateway operation.*

2. **[#164294](https://github.com/openclaw/openclaw/issues/164294)** — Gateway state DB WAL auto-checkpoint never completes  
   **39 comments | P2 | Silver Shellfish**  
   *Underlying need: SQLite WAL checkpoint is perpetually blocked by an in-process reader, indicating potential deadlock or resource contention.*

3. **[#177656](https://github.com/openclaw/openclaw/issues/177656)** — Native host exec returns shared-state integrity-admission error  
   **30 comments | P1 | Silver Shellfish**  
   *Underlying need: 28+ failures on stable 2026.10.5 related to child effects and integrity admission—affects production stability.*

4. **[#150635](https://github.com/openclaw/openclaw/issues/150635)** — Dreaming deep phase never promotes (short-term recall retention issue)  
   **25 comments | P2 | Diamond Lobster**  
   *Underlying need: Memory promotion system is non-functional when short-term recall store hits 512-entry cap; users lose automated memory optimization.*

5. **[#191944](https://github.com/openclaw/openclaw/issues/191944)** — Gateway stop fails on macOS  
   **23 comments | P2 | Silver Shellfish**  
   *Underlying need: macOS users cannot gracefully stop the Gateway, causing operational friction.*

---

## 5. Bugs & Stability

### P0 — Critical (Crash Loops / Blocking)

| Issue | Summary | Status | Fix PR? |
|-------|---------|--------|---------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway blocks for minutes during plugin capture | Open | No |

### P1 — High (Crash Loops / Message Loss / Security)

| Issue | Summary | Regression | Fix PR? |
|-------|---------|------------|---------|
| [#177656](https://github.com/openclaw/openclaw/issues/177656) | Native host exec integrity-admission error on 2026.10.5 | Yes | No |
| [#155563](https://github.com/openclaw/openclaw/issues/155563) | MCP groups retained after successful agent turn (2026.9.5) | Yes | No |
| [#182647](https://github.com/openclaw/openclaw/issues/182647) | Cloud-worker turns fail: "Session capability metadata requires worker preparation" | — | No |
| [#166641](https://github.com/openclaw/openclaw/issues/166641) | web_fetch cold fallback synchronously captures unrelated plugins | — | No |
| [#191847](https://github.com/openclaw/openclaw/issues/191847) | Large session kills SQLite worker (ERR_WORKER_OUT_OF_MEMORY) | Yes (2026.9.7→10.10) | No |
| [#157182](https://github.com/openclaw/openclaw/issues/157182) | Control UI retry loop when ambient main session not visible | — | No |
| [#192959](https://github.com/openclaw/openclaw/issues/192959) | Gateway refuses to start after Kubernetes pod restart (fsGroup remount) | — | No |
| [#162087](https://github.com/openclaw/openclaw/issues/162087) | Scheduled announce fails for pre-9.7 account-mode jobs | Yes (9.7) | No |

### Notable P2 — Medium (UX Friction / Session State)

| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | Dreaming deep phase never promotes (recall eviction bug) | No |
| [#191944](https://github.com/openclaw/openclaw/issues/191944) | Gateway stop fails on macOS | No |
| [#164923](https://github.com/openclaw/openclaw/issues/164923) | Short-term promotion returns 0/512 candidates | Open PR #164445 |
| [#166017](https://github.com/openclaw/openclaw/issues/166017) | mcp.sessionIdleTtlMs not applied → spawn broker fills to 256 cap | No |
| [#158127](https://github.com/openclaw/openclaw/issues/158127) | Multi-agent runtime publication failures on 2026.9.6 | No |
| [#185656](https://github.com/openclaw/openclaw/issues/185656) | Large zstd transcript archive exceeds Node string limit | Regression of #170847 |

---

## 6. Feature Requests & Roadmap Signals

### High-Engagement Feature Requests

| Issue | Summary | Comments | Tags |
|-------|---------|----------|------|
| [#79223](https://github.com/openclaw/openclaw/issues/79223) | Configurable Dream Diary language/prompt | 11 | Feature |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) | Per-model usage logging for cost tracking | 10 | Enhancement |
| [#163739](https://github.com/openclaw/openclaw/issues/163739) | Make Control UI's Ctrl+Shift+A (Archive) configurable | 12 | Feature |
| [#166678](https://github.com/openclaw/openclaw/issues/166678) | Hide agents from picker while keeping them spawnable | 8 | Feature |
| [#158800](https://github.com/openclaw/openclaw/issues/158800) | Browse/fork prior channel-chat segments after /new | 9 | Feature |
| [#136271](https://github.com/openclaw/openclaw/issues/136271) | msteams: resolve team SharePoint site dynamically | 9 | Feature |
| [#164620](https://github.com/openclaw/openclaw/issues/164620) | Setting to disable hosted plugin catalog feed | 7 | Feature |

### Roadmap Signal Analysis

- **Memory & Recall**: Strong interest in memory system improvements (Dream Diary language, promotion fixes, recall retention)
- **Cost Tracking**: Per-model usage logging (#13219) has been requested since Feb 2026—likely candidate for near-term implementation
- **UI Customization**: Keyboard shortcut configurability (#163739) and agent visibility controls (#166678) address multi-user/organizational needs
- **Plugin Flexibility**: Disabling the hosted catalog feed (#164620) suggests enterprise/offline deployment requirements

---

## 7. User Feedback Summary

### Pain Points Identified

| Category | Evidence | Impact |
|----------|----------|--------|
| **Performance Regression** | #160959 (Gateway blocking), #191847 (SQLite OOM) | Users on 2026.9.6+ experiencing degraded stability |
| **macOS Incompatibility** | #191944 (Gateway stop fails) | Operational blockers for macOS users |
| **Memory System Broken** | #150635, #164923 (promotion fails), #182891 (prompt cache never reused) | Users losing automated memory optimization |
| **Multi-Agent Issues** | #158127 (publication failures), #166017 (MCP child overflow) | Complex deployments affected |
| **Cloud Worker Failures** | #182647 (capability metadata errors) | Cloud deployment users blocked |
| **SQLite Bottlenecks** | #164294 (WAL checkpoint blocked), #166017 (session eviction broken) | Long-lived sessions at risk |

### Satisfaction Signals

- **Closed issues resolved today**: 159 issues closed, including #164923 (short-term promotion investigation), #166017, #164690 (claude-cli double-spawn), #165433 (reconnect rejection), and #168794 (Codex image limits)
- **Active PR engagement**: Multiple contributors submitting UI fixes, CI improvements, and plugin fixes
- **Internationalization progress**: Russian docs expansion (#181998) shows community localization effort

---

## 8. Backlog Watch

### Long-Unanswered Issues Needing Maintainer Attention

| Issue | Age | Summary | Priority | Gap |
|-------|-----|---------|----------|-----|
| [#123792](https://github.com/openclaw/openclaw/issues/123792) | ~3 months | Assistant turns render twice with CLI backends | P2 | Stale, no new fix PR |
| [#126950](https://github.com/openclaw/openclaw/issues/126950) | ~3 months | Telegram callback payloads silently dropped | P1 | No fix PR |
| [#103067](https://github.com/openclaw/openclaw/issues/103067) | ~4 months | Centralize chat-session naming; define subagent lifetime | P2 | Needs product decision |
| [#127195](https://github.com/openclaw/openclaw/issues/127195) | ~3 months | 16 call sites emit identical error with no reason code | P2 | No fix PR |
| [#112638](https://github.com/openclaw/openclaw/issues/112638) | ~3.5 months | session.maintenance enforce mode doesn't bound store | P2 | No fix PR |
| [#130247](https://github.com/openclaw/openclaw/issues/130247) | ~2.5 months | Cron jobs cannot end (no --until / --max-runs) | P3 | Stale |
| [#130257](https://github.com/openclaw/openclaw/issues/130257) | ~2.5 months | Tasks ledger records no tokens/cost for delegated ACP runs | P2 | Stale |

### PRs Awaiting Review

| PR | Title | Status | Age |
|----|-------|--------|-----|
| [#75225](https://github.com/openclaw/openclaw/pull/75225) | feat(agents): expose configured descriptions in agents_list | ⏳ waiting on maintainer | ~6 months |
| [#161362](https://github.com/openclaw/openclaw/pull/161362) | fix(agents): stop warning for documented core tool groups | ⏳ waiting on author | ~5 weeks |
| [#125969](https://github.com/openclaw/openclaw/pull/125969) | fix(gateway): scope image capability discovery | 👀 ready for maintainer look | ~3 months |
| [#125707](https://github.com/openclaw/openclaw/pull/125707) | fix(codex): retain native thread reasoning effort | (no status) | ~3 months |
| [#130231](https://github.com/openclaw/openclaw/pull/130231) | ci(i18n): add non-publishing native locale refresh | 📣 needs proof | ~2.5 months |

---

**End of Digest** — Next update: 2026-11-08

---

## Cross-Ecosystem Comparison

<think>The user wants a comprehensive cross-project comparison report analyzing four AI agent/personal AI assistant open-source projects: OpenClaw, Hermes Agent, IronClaw, QwenPaw, and ZeroClaw. I need to synthesize the individual digests into a cohesive ecosystem analysis.

Let me organize the key data points across all projects:

**Activity Metrics (last 24 hours):**
- OpenClaw: 363 issues, 500 PRs updated | 0 new releases | High velocity
- Hermes Agent: 50 issues, 50 PRs updated | 0 new releases | Moderate velocity
- IronClaw: 0 activity | No data
- QwenPaw: 23 issues, 35 PRs updated | 0 new releases | Moderate velocity


- ZeroClaw: 17 issues, 50 PRs updated | 0 new releases | Moderate velocity

**Key Themes by Project:**
- OpenClaw: P0 regression (Gateway blocking), memory system issues, session management, pnpm migration
- Hermes Agent: pnpm migration fallout, Windows state.db corruption (P0), cross-platform issues
- QwenPaw: Memory/retrieval fixes, Matrix channel stability, Windows compatibility, GBK encoding
- ZeroClaw: Security fixes merged, dependency vulnerabilities blocking, multi-model support

, feature work on coding CLI tools

Looking at the shared concerns across these projects, memory and session management issues appear in both OpenClaw and QwenPaw, Windows compatibility problems span multiple systems, and security is a major focus for ZeroClaw. I'm noticing that cross-platform support and reliability are common themes, though each project has its own priorities—the dependency vulnerability issue is particularly critical for ZeroClaw since it's blocking progress there.
</think>


# Personal AI Assistant & Agent Open-Source Ecosystem: Cross-Project Report

## 2026-11-07 | Technical Decision-Maker Briefing

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is in an active, high-velocity growth phase as of November 2026. All tracked projects except IronClaw (inactive) show meaningful daily commit and PR activity, with a combined 453 issues and 635 PRs updated across four active projects in the last 24 hours. The ecosystem is unified by a shared set of core engineering challenges—session state management, multi-platform deployment, memory/retrieval reliability, and security hardening—but differentiated by target user segments, architectural choices, and maturity levels. OpenClaw leads in absolute activity volume and addresses the most complex regression surface; Hermes Agent and ZeroClaw show focused security-oriented development; QwenPaw demonstrates rapid iteration on conversational UX and Chinese-market compatibility. No project shipped a new stable release today, suggesting a coordinated stabilization cycle across the ecosystem.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | New Releases | Regression Count | Security Fixes | Health Signal |
|---------|:-----------:|:---------:|:------------:|:---------------:|:--------------:|:-------------|
| **OpenClaw** | 363 | 500 | 0 | 5 (2 P0/P1, 3 P2) | 0 merged today | ⚠️ High pressure — active P0, multiple regressions |
| **Hermes Agent** | 50 | 50 | 0 | 3 (1 P0, 2 P2) | 0 merged today | ⚠️ Focused — pnpm migration aftermath, Windows P0 |
| **IronClaw** | 0 | 0 | 0 | Unknown | 0 | 🔴 Inactive — no community signal |
| **QwenPaw** | 23 | 35 | 0 | 4 (1 High, 3 Medium) | 0 merged today | ✅ Strong — rapid UX iteration, high close rate |
| **ZeroClaw** | 17 | 50 | 0 | 4 (2 S1, 2 S2) | 2 merged today | ⚠️ Blocked — dependency vulnerabilities blocking all merges |

**Observations:**
- OpenClaw dominates in absolute volume — roughly 7× the activity of the next most active project — but carries a proportionally heavier regression burden.
- ZeroClaw's PR-to-issue ratio (50:17) indicates a contributor-driven development model where PRs arrive faster than issue triage can track.
- QwenPaw shows the healthiest close rate today (18 PRs closed/merged with only 12 open), suggesting maintainers are actively managing throughput.
- Hermes Agent's npm→pnpm migration is the single largest coordinated change event across the ecosystem, with cascading follow-up work still visible in the backlog.

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **Community size** | Largest by activity volume (363 issues, 500 PRs/24h) | Medium | Medium | Small but active |
| **Release cadence** | Stable ~monthly, beta channel active | ~monthly | ~bi-weekly beta | Pre-v1.0 |
| **Plugin ecosystem** | MCP groups, hosted catalog, external plugin capture | Core + labs plugins (Yuanbao extraction) | Rich plugin marketplace | Multiple registry origins (in PR) |
| **Enterprise features** | Access artwork, fsGroup support, cloud workers | Pairing, account-mode jobs | Model center, reranker settings | Per-agent ownership scoping, OIDC auth |
| **Documentation** | Russian localization in progress | — | Dead links found and fixed | — |

### Technical Approach Differences

OpenClaw's architecture centers on a **Gateway** event-loop as the session authority, with WAL-based SQLite state management, worker-reuse pooling, and a dreaming/memory promotion system. This is a fundamentally different design from:

- **Hermes Agent's** CLI-first approach with a separate `hermes_cli` workspace and pnpm monorepo structure
- **QwenPaw's** agent-centric design with automatic recall, ReMe reranking, and multi-model provider profiles
- **ZeroClaw's** RPC-driven multi-peer architecture with OIDC integration and Matrix channel support

OpenClaw's **Dreaming deep phase** memory promotion (#150635, still open) and **MCP child session retention** (#155563, P1 regression) are unique challenges that have no direct parallel in peer projects, suggesting a deeper investment in autonomous memory management that peers have not yet tackled.

### Community Size Comparison

By raw activity, OpenClaw is 7× larger than Hermes Agent and QwenPaw, and 21× larger than ZeroClaw. However, volume correlates with regression surface: OpenClaw's 5 concurrent regressions (including a P0) versus QwenPaw's 4 medium-severity bugs suggests OpenClaw's larger surface area creates proportionally more maintenance burden.

---

## 4. Shared Technical Focus Areas

The following requirements and challenges are emerging across multiple projects simultaneously, indicating systemic ecosystem-wide engineering pressures:

### Memory & Recall Systems

| Project | Issue | Description |
|---------|-------|-------------|
| **OpenClaw** | #150635, #164923 | Dreaming deep phase never promotes; short-term recall retention broken at 512-entry cap |
| **QwenPaw** | #8580, #8276 | Memory tag index returns 503; ReMe reranker accepts empty api_key |

Both projects are iterating on memory/retrieval reliability simultaneously. OpenClaw's approach is autonomous (dreaming phase, promotion), while QwenPaw uses supervised reranking (ReMe). The convergence on memory quality signals that the ecosystem is hitting a common ceiling — automated memory management at scale is harder than anticipated.

**For AI agent developers**: Memory and recall systems are the most active area of shared development. Expect standardized patterns to emerge. OpenClaw's historical-state recovery for collector child sessions (#164445) may become a reference implementation.

### Windows & Cross-Platform Compatibility

| Project | Issue | Specific Problem |
|---------|-------|------------------|
| **Hermes Agent** | #147938 (P0) | Windows `state.db` verify misidentifies live locks as corruption → restores stale snapshots |
| **QwenPaw** | #8585 | `recall_history` broken on Windows due to `\\?\` extended-length path canonicalization |
| **OpenClaw** | #191944 | Gateway stop fails on macOS |
| **QwenPaw** | #8234 (in PR) | GBK/CP936 encoding drops bytes on Chinese Windows files |
| **Hermes Agent** | #149861, #150146 | macOS Desktop build failures after pnpm migration |

Three of four active projects have reported critical Windows or macOS platform issues in the last 24 hours. The QwenPaw GBK encoding PR (#8234, XXL) is particularly significant — it represents the deepest cross-platform file system work in the ecosystem.

**For AI agent developers**: Cross-platform correctness is a systemic gap. Windows in particular is underserved in CI coverage. Projects integrating with any of these ecosystems should anticipate Windows-specific edge cases in file paths, shell invocation, and database path handling.

### Security Hardening

| Project | Action | Scope |
|---------|--------|-------|
| **ZeroClaw** | Merged #12114 | Rate limits on XFF proxy hops |
| **ZeroClaw** | Merged #12233 | OIDC bearer verification limits |
| **ZeroClaw** | PR #12239 (open) | Hold current authority through session effects |
| **ZeroClaw** | PR #9746 (open, 95 days) | Per-agent ownership scoping |
| **Hermes Agent** | Issue #145171 | Entry-point cutover to gateway session authority |
| **QwenPaw** | PR #8550 | Model config validation enforcement |

ZeroClaw is the most security-focused project in the ecosystem, with 2 security fixes merged today and a 95-day PR (#9746) targeting per-agent ownership scoping. The convergence of security work across projects — OIDC, rate limiting, ownership scoping, config validation — reflects a maturation trend as these tools move from personal use to multi-user and enterprise deployments.

**For AI agent developers**: Security features (OIDC, rate limiting, per-agent ownership) are not yet standardized across the ecosystem. ZeroClaw's security patterns may become reference implementations for multi-user deployments.

### Session State & Persistence

| Project | Issue | Problem |
|---------|-------|---------|
| **OpenClaw** | #191847 | SQLite OOM on large sessions (regression 2026.9.7→10.10) |
| **OpenClaw** | #182647 | Cloud worker capability metadata failures |
| **Hermes Agent** | #139818 (closed) | Remote backend sessions unresumable (42 comments, 22 days) |
| **Hermes Agent** | #146643 | Gateway re-reads full session history on every change |
| **ZeroClaw** | #12279 | Channel startup may lose messages during transcript restore |
| **QwenPaw** | #8596 (fixed) | `/clear` message restored on chat reopen |

Session resumption, state persistence across restarts, and transcript integrity are universal concerns across all four active projects. Hermes Agent's closure of #139818 (42-comment issue on session resumability) is a significant milestone that may unlock similar fixes in other projects.

**For AI agent developers**: Session state management is the most fragmented area — no two projects use the same approach. OpenClaw uses WAL/SQLite with dreaming; Hermes Agent uses state.db with agent/main patterns; QwenPaw uses session transcripts with ReMe; ZeroClaw uses RPC session authority. Evaluators should assess persistence guarantees explicitly.

### Dependency & Build System Upgrades

| Project | Event | Impact |
|---------|-------|--------|
| **Hermes Agent** | npm→pnpm migration (#149746) | 6+ follow-up PRs and issues, macOS build failures |
| **ZeroClaw** | vodozemac 0.11.0 RUSTSEC failures (#12272) | **Blocks all merges** — S1 for project |
| **QwenPaw** | v2.3.0-beta.2 in testing | Memory tag index regression (#8580) |

All projects are navigating significant dependency transitions simultaneously. ZeroClaw's RUSTSEC vulnerability (#12272) is the most critical — it is blocking every PR and the master build, making it an ecosystem-wide risk for anyone depending on ZeroClaw.

**For AI agent developers**: The simultaneous dependency churn increases integration risk. Lockfile pinning and containerized builds are strongly recommended when integrating any of these projects.

---

## 5. Differentiation Analysis

### Feature Focus

| Project | Primary Differentiator | Secondary Focus |
|---------|----------------------|-----------------|
| **OpenClaw** | Autonomous memory management (Dreaming phase, promotion, recall) | MCP plugin ecosystem, cloud workers, hosted catalog |
| **Hermes Agent** | Desktop/multi-platform parity (Electron desktop, Android, iOS) | CLI tooling, systemd integration, pairing flows |
| **QwenPaw** | Conversational productivity (quoting, compact tool calls, ReMe reranking) | Chinese market support (GBK encoding, DeepSeek R1 offline), multi-model providers |
| **ZeroClaw** | Security & multi-user (OIDC, per-agent ownership, rate limiting) | Multi-peer RPC, Matrix channel, relay infrastructure |

### Target Users

| Project | Primary Persona | Secondary |
|---------|----------------|-----------|
| **OpenClaw** | Power users, developers wanting autonomous memory agents | Enterprise multi-agent deployments |
| **Hermes Agent** | Desktop-first users, CLI enthusiasts, self-hosters | Cross-platform (Windows/macOS/Linux/Android) users |
| **QwenPaw** | Chinese market developers, conversational productivity users | Multi-model deployments (local + API providers) |
| **ZeroClaw** | Security-conscious organizations, multi-user deployments | Matrix channel users, relay infrastructure operators |

### Technical Architecture

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **State backend** | SQLite WAL with auto-checkpoint | state.db with agent/main sessions | Session transcripts + SQLite | RPC session authority |
| **Plugin model** | MCP groups, external/workspace plugin capture | Core + labs plugins, pnpm workspace | Rich marketplace, dependency-checked | Multiple registry origins (in PR) |
| **Memory system** | Autonomous dreaming/promotion | Agent/main session split | ReMe supervised reranking | Peer-to-peer RPC state |
| **Auth model** | Gateway session authority | Entry-point cutover tracking | Config validation | OIDC + per-agent ownership |
| **Release stage** | Mature (v2026.10 stable) | Mature (v0.23.0) | Active (v2.3.0 beta) | Pre-v1.0 (v0.9.0 target) |

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Project | Velocity | Pattern |
|------|---------|----------|---------|
| **Tier 1 — Mass-market** | **OpenClaw** | 363 issues / 500 PRs daily | High velocity + high regression surface; mature but under pressure from regressions |
| **Tier 2 — Active growth** | **Hermes Agent**, **QwenPaw** | 23–50 issues/PRs daily | Healthy iteration; focused on specific pain points; rapidly closing issues |
| **Tier 3 — Pre-v1.0 / Blocked** | **ZeroClaw**, **IronClaw** | 0–50 daily | ZeroClaw blocked by dependency vulnerability; IronClaw inactive |

### Rapidly Iterating Projects

- **QwenPaw**: Highest close-to-open ratio today (18:17 for PRs, 11:12 for issues). Maintains velocity while fixing regressions. Rapid turnaround on user-reported bugs (most issues closed same day or within days).
- **OpenClaw**: Despite regressions, the project closed 159 issues today — showing the team can manage volume when focused. Historical-state recovery (#164445) is a technically sophisticated feature landing on a fast track.
- **Hermes Agent**: npm→pnpm migration is a significant infrastructure investment that, once complete, will improve build performance and dependency management substantially.

### Stabilizing Projects

- **ZeroClaw**: The v0.9.0 release is blocked by #12272 (RUSTSEC vulnerability). Once this is resolved, the project should see a release. The security-focused PRs (#12114, #12233) demonstrate mature security practices that should give confidence post-unblock.

### Concerning Signals

- **IronClaw**: Zero activity in 24 hours from a tracked project suggests either sunsetting or severe contributor attrition. Decision-makers should seek clarity on project status.
- **OpenClaw's P0 regression** (#160959, Gateway blocking during plugin capture, 80 comments) is the most critical unresolved issue in the ecosystem. It has been open since 2026.9.6 and is still unresolved after 80+ community comments.
- **ZeroClaw's dependency block** (#12272) is an existential risk for the project. If unresolved within days, contributors may disengage and forks may emerge.

---

## 7. Trend Signals

### For AI Agent Framework Developers

1. **Autonomous memory management is table stakes but unsolved.** OpenClaw's dreaming phase, QwenPaw's ReMe reranking, and OpenClaw's recall store all address the same problem from different angles. No project has a reference implementation that others have adopted. The next 3–6 months will likely produce a dominant pattern.

2. **Cross-platform correctness is a systemic gap.** Three of four active projects reported critical Windows or macOS issues simultaneously. The ecosystem lacks shared test infrastructure for platform-specific behaviors. Projects investing in comprehensive Windows CI will have a competitive advantage.

3. **Enterprise security features are converging.** OIDC integration, per-agent ownership scoping, rate limiting, and managed configuration scopes are appearing across all projects independently. The next step is likely standardization — either through a shared security specification or adoption of ZeroClaw's patterns.

4. **Plugin ecosystem fragmentation.** Each project has its own plugin model (MCP groups, labs plugins, marketplace, multi-origin registries). The lack of cross-project plugin portability limits ecosystem network effects.

5. **Dependency management turbulence.** Multiple projects are simultaneously undergoing major build system migrations (pnpm, RUSTSEC audits). This creates integration risk for downstream projects and users. Pinned, containerized deployments are strongly recommended.

### For Decision-Makers Evaluating Ecosystems

- **Choose OpenClaw** if autonomous memory management, MCP ecosystem depth, and community size are priorities. Accept the current regression pressure as a temporary state — the project's maintenance response has been consistently high.
- **Choose Hermes Agent** if desktop parity, CLI tooling, and cross-platform deployment are priorities. The pnpm migration will stabilize within weeks; the resulting architecture will be more maintainable.
- **Choose QwenPaw** if conversational UX, Chinese market support, and rapid feature iteration are priorities. The project's close rate demonstrates healthy governance.
- **Choose ZeroClaw** for multi-user, security-first deployments. The current dependency block (#12272) is the primary risk factor; monitor for resolution within the next 5–7 days before committing.
- **Avoid IronClaw** until project status is clarified.

---

*Report compiled from GitHub community activity across OpenClaw, Hermes Agent, QwenPaw, ZeroClaw, and IronClaw on 2026-11-07. All metrics reflect activity within 24 hours of the report date.*

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>Let me analyze the provided GitHub data for Hermes Agent (NousResearch/hermes-agent) and generate a structured project digest for 2026-11-07.

Let me organize the key data points:

**Issues (50 total, 30 shown):**
- 45 open/active, 5 closed in last 24h
- Top issues by comment count:
  1. #139818 [CLOSED] - Remote-desktop sessions unresumable (42 comments)
  2. #146643 [OPEN] - Gateway re-reads session history causing CPU issues (17 comments)
  3. #106960 [CLOSED] - systemd dashboard inventory issue (14 comments)
  4. #139347 [OPEN] - bounded hosted-room transcript issue (9 comments)
  5. #147938 [OPEN] - Windows state.db verify corruption issue (7 comments)
  6. #105163 [OPEN] - Stall-guard English-only (7 comments)
  7. #133006 [OPEN] - macOS Desktop form-filling failure (6 comments)
  8. #79836 [OPEN] - Messaging sidebar missing raft platform (6 comments)
  9. #149861 [CLOSED] - macOS desktop build pnpm issue (6 comments)
  10. #145171 [OPEN] - Entry-point cutover security (6 comments)
  11. #150369 [OPEN] - iPhone Safari mic button double-tap (5 comments)
  12. #147720 [OPEN] - Profile-route subagent toolsets issue (3 comments)
  13. #148329 [OPEN] - Skill lock blocks git writes (3 comments)
  14. #146280 [OPEN] - Anthropic usage reporting (2 comments)
  15. #149154 [OPEN] - kanban update drain issue (2 comments)
  16. #150056 [OPEN] - Local Bot Chat admission conflict (1 comment)
  17. #150146 [OPEN] - Desktop build fails pnpm (1 comment)
  18. #150397 [OPEN] - Multiplexed gateway terminal cwd issue (1 comment)
  19. #150398 [OPEN] - install-root lookups wrong (1 comment)
  20. #150399 [OPEN] - downgrade guard issue (1 comment)

The issue tracker shows 50 items with 30 displayed, mostly open with varying severity. Desktop platform problems dominate—particularly macOS build failures, form-filling issues, and sidebar layout gaps. There's also a significant gateway performance problem affecting CPU usage, plus Windows-specific corruption concerns in the state database verification.

Beyond the main issues, I see several security and architectural concerns: a downgrade guard bypass, install-root lookup vulnerabilities, and entry-point cutover weaknesses. The project also has localization gaps (stall-guard only works in English) and platform-specific complications with the pnpm transition. Recent activity includes Yuanbao migrating to a Labs plugin and various dependency management updates. Looking at the PR queue, I'm seeing a cluster of issues around dependency management and plugin architecture. The Yandex Mail plugin addition is straightforward, but there are several interconnected problems: pnpm compatibility fixes across multiple platforms, state module tracking improvements, and test coverage gaps for the upgrade path. The desktop UI bug with the menu command persistence and the session transcript reading feature are also notable changes. I need to identify which PRs are highest priority for the current sprint and which ones might be blocking other work. Looking at the rest of the pull requests, there are several bug fixes addressing CLI configuration issues, npm package management refinements, and import guard problems. Now I'm ready to synthesize this into a structured digest that shows the project health and key patterns.

The activity over the past day has been substantial—50 issues and pull requests processed across multiple component areas, with a notable focus on installer updates and cross-platform compatibility. The P0 priority Windows state.db corruption bug stands out as critical and needs immediate attention, while several P2 issues around session management and billing are also significant. The pnpm migration work appears to be spawning multiple follow-up PRs, and the Yuanbao plugin transition represents an architectural shift worth tracking.
</think>


# Hermes Agent Project Digest — 2026-11-07

## 1. Today's Overview

Hermes Agent (NousResearch/hermes-agent) is experiencing high-volume activity on November 7, 2026, with 50 issues and 50 PRs updated in the last 24 hours. The project's recent npm→pnpm workspace migration (merged as #149746) is generating significant follow-up work, with at least 6 open PRs and 5 issues directly tracking residual fallout. Development velocity remains strong across all components—gateway, CLI, desktop, and plugin system—with 13 PRs merged/closed and multiple fixes targeting installer stability and session management. The absence of a new release today (none tagged) reflects the current wave of polish and regression-fixing before the next stable cut.

---

## 2. Releases

**No new releases today.** The latest stable remains v0.23.0 (tagged 2026.9.24). Several PRs in flight (#150406, #150407, #150411) are staged to land before the next release, addressing pnpm migration safeguards and the downgrade guard; maintainers are clearly sequencing these into a cohesive next release rather than cutting patch releases piecemeal.

---

## 3. Project Progress

### Merged / Closed PRs Today
While all 50 PRs listed are currently **open**, 13 have been merged or closed in the last 24 hours (per the 37 open / 13 merged metric). Key merged work includes:

| PR | Author | Area | Summary |
|----|--------|------|---------|
| #150210 | teknium1 | plugin ecosystem | Yuanbao (Tencent chat) migrated out of core into `hermes-labs-plugins`; automatic migration for existing users |
| #150364 | c2h5oh | build/pm | Refuses npm installs in JS workspace subfolders, preserving `npx` and `npm run` |
| #150195 | teknium1 | gateway | Fixes flaky gateway refusal-stamp test (fake disk was borderline on its own 5s deadline) |
| #150035 | alt-glitch | build/pm | Bridge for pnpm→npmrc script-settings compatibility (node-gyp / node-pre-gyp binary mirrors) |
| #150036 | alt-glitch | build/pm | Single-source pnpm pin sync between `pm/lock.json` and `package.json devEngines` |

### Active Open PRs Advancing Features
- **#150102** — `feat(gateway)`: Read stored session transcripts without attaching (picker fields, compaction reads, subagent conversations). Enables new frontend plugin capabilities.
- **#150210** — Yuanbao plugin extraction (open, CI-reviewed).
- **#150433** — New community plugin: Yandex Mail (pinned at source v0.4.3).
- **#150323** — New plugin: `cite-or-abstain` v0.2.0 (evidence gate for AI deployments; internal citations prioritized).

---

## 4. Community Hot Topics

The most active discussions reveal concentrated pain points around **session management reliability**, **cross-platform installer correctness**, and **the pnpm migration's second-order effects**.

| # | Type | Title | Comments | Link |
|---|------|-------|----------|------|
| #139818 | Bug (P2, closed) | Remote-backend desktop sessions unresumable (`session.resume` → `not_found`) | **42** | [Issue #139818](https://github.com/NousResearch/hermes-agent/issues/139818) |
| #146643 | Bug (P2, open) | Gateway re-reads whole session history on every change; CPU spikes, timeouts | **17** | [Issue #146643](https://github.com/NousResearch/hermes-agent/issues/146643) |
| #106960 | Bug (P3, closed) | systemd dashboard inventoried as manual-serve after hermes update | **14** | [Issue #106960](https://github.com/NousResearch/hermes-agent/issues/106960) |
| #139347 | Bug (P2, open) | Bounded hosted-room transcript drops source users, breaks planner validation | **9** | [Issue #139347](https://github.com/NousResearch/hermes-agent/issues/139347) |
| #147938 | Bug (P0, open) | **Windows**: `state.db` verify mistakes live lock for corruption → restores months-stale snapshot | **7** | [Issue #147938](https://github.com/NousResearch/hermes-agent/issues/147938) |
| #145171 | Security (P3, open) | Entry-point cutover: serve, remote Desktop, web onto gateway session authority | **6** | [Issue #145171](https://github.com/NousResearch/hermes-agent/issues/145171) |
| #150369 | Bug (open) | iPhone Safari: mic button requires double-tap (AudioContext resume gated on user gesture) | **5** | [Issue #150369](https://github.com/NousResearch/hermes-agent/issues/150369) |

**Analysis of underlying needs:**
- **Session resilience** is the dominant theme. #139818 (42 comments, now closed) represents months of user frustration with remote-backend session resumption; its closure today is a significant milestone. #146643 shows the next frontier—session-store performance at scale (thousands of sessions causing multi-core CPU consumption).
- **pnpm migration fallout** (#106960 closed, plus #150035/#150036 merged) demonstrates the community's tolerance for migration disruption but expectation of rapid remediation. The #150041 tracking issue confirms active follow-up.
- **Platform parity** — macOS Desktop build failures (#149861, #150146), Windows state.db corruption (#147938), and iPhone Safari UX (#150369) collectively signal that Hermes's multi-platform claims need hardening. The P0 severity on the Windows state.db issue is the starkest indicator.

---

## 5. Bugs & Stability

Ranked by priority, with fix status noted:

| Priority | # | Component | Summary | Fix PR? |
|----------|---|-----------|---------|---------|
| **P0** | #147938 | CLI / state | Windows: live `state.db` lock misidentified as corruption → stale snapshot restored | None yet |
| **P2** | #146643 | Gateway | Full session history re-read on every change; CPU saturation, timeouts at scale | None yet |
| **P2** | #139347 | Gateway | Bounded transcript eviction drops referenced users → `DiscussionValidationError` | None yet |
| **P2** | #148329 | Tools | Skill lock blocks ALL git writes in containing repo (no agent-side workaround) | None yet |
| **P2** | #146280 | Agent | Anthropic usage: `utilization ≤ 1%` multiplied by 100 → 100%+ reported | None yet |
| **P2** | #105163 | Agent | Stall-guard intent detector English-only → anti-stall disabled for non-English agents | None yet |
| **P2** | #137723 | Agent | Codex quota recovery stays "exhausted" on disk after successful probe | None yet |
| **P3** | #145171 | CLI/Gateway | Entry-point cutover tracking: serve/remote/web not yet on gateway session authority | Tracking only |
| **P3** | #147720 | Tools | Profile-route subagents inherit parent toolset instead of target profile's | None yet |
| **Bug** | #150397 | Gateway | Multiplexed gateway overwrites profile's `terminal.cwd` with process cwd | None yet |
| **Bug** | #150398 | CLI | Two install-root lookups in `hermes_cli/` are incorrect on main | PR #150408 open |
| **Bug** | #150399 | CLI | Downgrade guard cannot see state modules inside the package | PR #150407 open |
| **Bug** | #150400 | CLI | Optional-import guards fall back incorrectly after module moves | Open |
| **Bug** | #150386 | CLI | Dropped package folders left behind, hiding code at new location | Open |
| **Bug** | #150385 | CLI | Update refuses target missing declared startup files | Open |
| **Bug** | #150387 | PM | Packaging change doesn't rebuild dependency environment | Open |

**Stability Assessment:** The P0 Windows state.db issue is the most alarming bug in today's queue. It silently overwrites healthy data with a stale snapshot and misreports the restore as failed—an anti-corruption mechanism actively causing data loss. This warrants immediate maintainer priority. The P2 gateway session re-read issue (#146643) similarly represents a systemic reliability risk for users with established session stores.

---

## 6. Feature Requests & Roadmap Signals

Notable user-requested features with traction:

| # | Area | Request | 👍 | Outlook |
|---|------|---------|-----|---------|
| #148307 | Mobile | Suppress routine mobile notifications while actively using Desktop (P3) | 1 | Likely near-term; focused UX improvement, low risk |
| #150431 | Admin | Managed scope: lock `mcp_servers` so users cannot add servers (P3) | 0 | Addresses enterprise/admin deployment need; likely on roadmap |
| #150436 | Config | Config save should not delete user values for keys in managed scope (P3) | 0 | Related to #150431; together these define a more robust managed-config story |
| #150102 | Gateway | Read stored session transcripts without attaching (merged PR, not request) | — | Feature landed today; signals session introspection as a first-class API concern |

**Roadmap Signals:** The convergence of #150431 and #150436 points to a deliberate enterprise/admin configuration management story. The Yuanbao extraction (#150210, merged today) signals an intentional plugin-first architecture for third-party platforms. The session transcript reading feature (#150102) may foreshadow broader conversation API surface for external frontends.

---

## 7. User Feedback Summary

**Session Management Frustrations:**
Users are actively struggling with session resumption reliability. #139818 (now closed after 42 comments and 22 days) represents persistent pain with remote-backend desktop sessions. Users expect sessions to be portable and resumable; failures here undermine trust in Hermes as a persistent agent platform. The new #150102 transcript-reading PR addresses a related need—visibility into session state without side effects.

**Cross-Platform Pain Points:**
Multiple macOS Desktop build failures (#149861, #150146) suggest the pnpm switch landed harder on macOS than Linux. Windows users face the P0 state.db corruption issue (#147938), which is a severe regression for update workflows. iPhone Safari users encounter UX friction (#150369). These collectively indicate that multi-platform support requires more automated CI coverage.

**pnpm Migration Aftermath:**
Community members are actively reporting pnpm-related fallout (#106960, #150041 tracking). The quick turn-around on follow-up PRs (#150035, #150036, #150364, #150430, #150419) suggests maintainers are responsive, but the volume of residual issues (6+ PRs still open) indicates the migration was aggressive.

**Git Workflow Blocking:**
#148329 — skill lock blocking unrelated git operations — generated significant discussion. Users expect safety guards to be scoped, not blanket.

---

## 8. Backlog Watch

Important issues or PRs that have received little or no maintainer response and may need attention:

| # | Age | Component | Issue | Comments | Status |
|---|-----|-----------|-------|----------|--------|
| #79836 | ~92 days | Desktop | Messaging sidebar missing sections/icons for raft and several platforms | 6 | Open |
| #133006 | ~33 days | Desktop | macOS Desktop form-filling failure with stale browser targets | 6 | Open, needs-repro |
| #147720 | ~6 days | Tools | Profile-route subagents get parent's full toolset instead of target's | 3 | Open |
| #149154 | ~3 days | Agent | kanban update drain kills running workers; admissions spend on sessionless cards | 2 | Open |
| #150056 | ~1 day | Desktop | Local Bot Chat deliveries refused with `admission_conflict` post-compression | 1 | Open, cause unknown |
| #137723 | ~25 days | Agent | Codex quota recovery stays exhausted on disk after successful probe | 1 | Open |
| #148307 | ~4 days | Mobile | Mobile notification suppression while Desktop is active | 1 | Open |
| #150041 | ~1 day | Build | Tracking: pnpm switch follow-ups (meta-issue) | 1 | Open |

**Most concerning for maintainer attention:**
- **#79836** (92 days, 6 comments) — raft platform invisible in Desktop sidebar is a user-experience regression that has languished.
- **#133006** (33 days, needs-repro) — macOS form-filling failure blocks real workflows and lacks a reproducible case, which may be blocking triage.
- **#147720** (6 days) — security-adjacent toolset leakage from profile routes could affect multi-tenant deployments; prompt for severity re-evaluation.

---

*Digest generated from NousResearch/hermes-agent activity on 2026-11-07. All issue and PR links use the format `https://github.com/NousResearch/hermes-agent/issues/<number>` and `https://github.com/NousResearch/hermes-agent/pull/<number>` respectively.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>Let me analyze the provided GitHub data for QwenPaw and create a structured project digest for 2026-11-07.

First, let me extract the key information:

**Overview Stats:**
- Issues updated in last 24h: 23 (open/active: 12, closed: 11)
- PRs updated in last 24h: 35 (open: 17, merged/closed: 18)
- New releases: 0

**Latest Releases:** None

**Latest Issues (showing top ones by activity):**
1. #2420 [CLOSED] - Enhancement about cross-agent collaboration (comments: 4)
2. #8580 [OPEN] - Memory tag index 503 error (comments: 4)
3. #8596 [CLOSED] - Bug with /clear and chat reopening (comments: 4)
4. #1453 [CLOSED] - Question about offline installation (comments: 4)
5. #8276 [CLOSED] - ReMe reranker empty api_key bug (comments: 4)
6. #7436 [OPEN] - Feature request for tool_call_format (comments: 3)
7. #5110 [OPEN] - Feature request for quote/reference text (comments: 3)
8. #8576 [OPEN] - Bug: default agent edit button disabled (comments: 3)
9. #8595 [OPEN] - Bug: Plugin install fails (comments: 3)
10. #8517 [OPEN] - Bug: Docker runtime permission denied (comments: 3)
11. #8538 [OPEN] - Bug: Matrix channel plugin activation failure (comments: 3)
12. #7857 [CLOSED] - ACP shutdown event loop leak (comments: 2)
13. #8585 [OPEN] - Bug: recall_history broken on Windows (comments: 2)
14. #8592 [OPEN] - Bug: Creator review round undecidable (comments: 2)


15. #7858 [CLOSED] - Tests: Fix unawaited coroutine warnings (comments: 1)
16. #8549 [CLOSED] - Bug: Model config write path bypasses validation (comments: 1)
17. #8365 [CLOSED] - Bug: Matrix channel login password every start (comments: 1)
18. #8605 [OPEN] - Feature: Browser tab title follows session name (comments: 1)
19. #8533 [CLOSED] - Bug: Codex/Qoder scheduled task empty request (comments: 1)
20. #8603 [OPEN] - Bug

I notice several patterns emerging across these issues. There are multiple bugs related to Matrix channel functionality and scheduled tasks, suggesting potential issues with authentication and request handling. The closed issues show active maintenance with fixes for coroutine warnings, model configuration validation, and scheduled task problems. The open issues indicate ongoing development around plugin installation, Docker permissions, and user interface features like tab titles and tool call formatting. I'm continuing to track pull requests, focusing on the next batch. PR #8611 adds model deletion functionality, while #8610 enables compact tool call display options. Smaller fixes include #8609 for quote response selections, #8608 allowing default agent editing, and #8607 addressing boolean schema handling. Documentation gets attention with #8606 fixing broken links, and several closed PRs handle memory reranking, model configuration validation, Matrix session recovery, and plugin dependency checks.

Additional closed work includes fixes for agent media capabilities, Windows shell cancellation, chat switching behavior, model removal, third-party scheduled task requests, and dynamic MCP tool persistence. There's also a chat reset fix to address.
</think>


# QwenPaw Project Digest — 2026-11-07

## 1. Today's Overview

QwenPaw (github.com/agentscope-ai/QwenPaw) shows high development velocity on 2026-11-07, with 23 issues and 35 PRs updated in the last 24 hours. No new releases were published, but the team is actively reviewing and merging PRs (18 closed/merged vs 17 open), indicating a strong code throughput. The activity mix reveals concentrated fixes around memory/retrieval systems, Matrix channel stability, Windows compatibility, and UI/UX polish for the console. Several multi-defect reports (e.g., Creator review blocker) suggest users are diving deep into edge cases, while feature PRs like quote-to-follow-up and compact tool call formats show demand for conversational productivity features.

---

## 2. Releases

**No new releases today.** The latest stable remains v2.2.2.post1; v2.3.0-beta.2 is in testing (referenced in issue #8580).

---

## 3. Project Progress

### Merged/Closed PRs (18 items)

| PR | Author | Size | Summary |
|----|--------|------|---------|
| [#8457](https://github.com/agentscope-ai/QwenPaw/pull/8457) | wuwenbo0626 | L | **Memory recall refactored** — automatic recall now uses transient `TextBlock` references instead of synthetic tool-call sequences, preventing models from imitating and re-calling `memory_search` |
| [#8550](https://github.com/agentscope-ai/QwenPaw/pull/8550) | xiong-wei1 | L | **Model config validation fixed** — write path now enforces `thinking_budget >= 1` and `max_input_length >= 1000` bounds; previously invalid values silently persisted and broke provider loading |
| [#8411](https://github.com/agentscope-ai/QwenPaw/pull/8411) | hehuang139 | XL | **Matrix session recovery** — cached sessions and device E2EE keys now restored on startup instead of re-authenticating with password every launch |
| [#8598](https://github.com/agentscope-ai/QwenPaw/pull/8598) | Luohh5 | XXXL | **Plugin dependency check refactored** — major rework of how plugin dependencies are validated |
| [#8535](https://github.com/agentscope-ai/QwenPaw/pull/8535) | liuxuyang1236 | S | **Third-party agent scheduled tasks fixed** — Codex/Qoder cron tasks no longer incorrectly reject non-empty text instructions |
| [#8600](https://github.com/agentscope-ai/QwenPaw/pull/8600) | yang0228 | M | **Chat reset persistence fixed** — reopened chats no longer restore stale `/clear` command bubbles |
| [#8604](https://github.com/agentscope-ai/QwenPaw/pull/8604) | lalaliat | XS | **Windows shell cancellation tests** — prevents test hangs on Windows |
| [#373](https://github.com/agentscope-ai/QwenPaw/pull/373) | valkryhx | — | **Dynamic MCP tool persistence** — dynamically registered MCP tools now persist across session turns |

### Open PRs Under Review (selected)

| PR | Author | Size | Summary |
|----|--------|------|---------|
| [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234) | Li-john1021 | XXL | **GBK/CP936 encoding support** — `read_file`, `edit_file`, `grep_search` decode Chinese Windows files instead of dropping bytes |
| [#8472](https://github.com/agentscope-ai/QwenPaw/pull/8472) | lecheng2018 | XXL | **Reranker model center** — adds service testing, multi-query precision verification, and auto-verification to reranker settings |
| [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236) | Li-john1021 | XL | **Ollama context window fix** — reads `num_ctx` instead of defaulting to 128k |
| [#8100](https://github.com/agentscope-ai/QwenPaw/pull/8100) | lorenzozanee | L | **Agent media capabilities at runtime** — resolves image-capability mismatch between provider discovery and formatting |

### New PRs (today)

| PR | Author | Size | Summary |
|----|--------|------|---------|
| [#8611](https://github.com/agentscope-ai/QwenPaw/pull/8611) | mango8853 | S | **Model management delete mode** — exposes deletion API in console UI for removing duplicate/unwanted models |
| [#8610](https://github.com/agentscope-ai/QwenPaw/pull/8610) | yang0228 | L | **Compact tool call formats** — adds `full` / `name_only` / `compact` options for IM channel display |
| [#8609](https://github.com/agentscope-ai/QwenPaw/pull/8609) | yang0228 | L | **Quote to follow-up** — select text and append as Markdown blockquote to draft |
| [#8608](https://github.com/agentscope-ai/QwenPaw/pull/8608) | yang0228 | S | **Allow editing default agent** — enables Edit button in gallery and detail drawer |
| [#8607](https://github.com/agentscope-ai/QwenPaw/pull/8607) | BeiMu-new | S | **Boolean schema preservation** — keeps `additionalProperties: false` in tool schemas instead of corrupting with `{"not": {...}}` |
| [#8606](https://github.com/agentscope-ai/QwenPaw/pull/8606) | leom1919 | XS | **Docs: 5 dead links fixed** in documentation, e2e README, and Terraform skill references |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **[#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580)** — Memory tag index returns 503 — 4 comments
   - **Root cause**: Auto-generated memory tags unreadable; index never rebuilds
   - **Signal**: Memory/retrieval subsystem has a silent failure mode in v2.3.0b2

2. **[#8596](https://github.com/agentscope-ai/QwenPaw/issues/8596)** — `/clear` message restored on chat reopen — 4 comments
   - **Already fixed** in PR #8600 merged today

3. **[#8276](https://github.com/agentscope-ai/QwenPaw/issues/8276)** — ReMe reranker accepts empty `api_key` — 4 comments
   - **Already fixed** in PR #8550

4. **[#7436](https://github.com/agentscope-ai/QwenPaw/issues/7436)** — `tool_call_format` config for IM channels — 3 comments
   - **Aligned with new PR #8610** implementing exactly this feature

5. **[#5110](https://github.com/agentscope-ai/QwenPaw/issues/5110)** — Quote/reference text for follow-up — 3 comments
   - **Aligned with new PR #8609** implementing quote-to-follow-up

6. **[#8576](https://github.com/agentscope-ai/QwenPaw/issues/8576)** — Default agent edit button disabled — 3 comments
   - **Already fixed** in PR #8608

### Most Active PRs

| PR | Hotness | Topic |
|----|---------|-------|
| [#8598](https://github.com/agentscope-ai/QwenPaw/pull/8598) | XXXL | Plugin dependency refactor |
| [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234) | XXL | GBK/CP936 encoding (Chinese Windows) |
| [#8472](https://github.com/agentscope-ai/QwenPaw/pull/8472) | XXL | Reranker model center |
| [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236) | XL | Ollama context window fix |
| [#8411](https://github.com/agentscope-ai/QwenPaw/pull/8411) | XL | Matrix session recovery |

**Underlying needs**: Cross-platform encoding support (GBK), robust memory/retrieval, Matrix channel reliability, and conversational productivity features (quoting, compact tool display) are the dominant community interests.

---

## 5. Bugs & Stability

### Critical / High Severity

| Issue | Title | Severity | Status | Fix PR |
|-------|-------|----------|--------|--------|
| [#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580) | Memory tag index 503 — tags generated but unreadable | **High** | Open | — |
| [#8592](https://github.com/agentscope-ai/QwenPaw/issues/8592) | Creator review round permanently undecidable (3 bundled defects) | **Critical** | Open | — |
| [#8585](https://github.com/agentscope-ai/QwenPaw/issues/8585) | `recall_history` broken on Windows — `\\?\` path breaks SQLite URI | **High** | Open | — |
| [#8595](https://github.com/agentscope-ai/QwenPaw/issues/8595) | Plugin install fails "No package metadata" for `qwenpaw-creator` | **High** | Open | — |
| [#8517](https://github.com/agentscope-ai/QwenPaw/issues/8517) | Docker Hub runtime fails with Permission denied (non-root) | **Medium** | Open | — |
| [#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538) | Matrix plugin activation fails with multiple workspaces (10s window) | **Medium** | Open | — |
| [#8603](https://github.com/agentscope-ai/QwenPaw/issues/8603) | `run_code` invoked with empty args on OpenAI-compatible providers | **Medium** | Open | — |

### Medium / Low Severity (Notable)

| Issue | Title | Severity | Status | Fix PR |
|-------|-------|----------|--------|--------|
| [#8591](https://github.com/agentscope-ai/QwenPaw/issues/8591) | Creator UI: white buttons on white background | **Low** | Open | — |
| [#8605](https://github.com/agentscope-ai/QwenPaw/issues/8605) | Browser tab title doesn't follow session name | **Low** | Open | — |
| [#8590](https://github.com/agentscope-ai/QwenPaw/issues/8590) | Plugin settings pages lose left-nav state | **Low** | Open | — |

### Fixed Today

- `#8596` /clear restore bug → [PR #8600](https://github.com/agentscope-ai/QwenPaw/pull/8600)
- `#8276` Reranker empty api_key → [PR #8550](https://github.com/agentscope-ai/QwenPaw/pull/8550)
- `#8549` Model config validation bypass → [PR #8550](https://github.com/agentscope-ai/QwenPaw/pull/8550)
- `#8365` Matrix password re-login → [PR #8411](https://github.com/agentscope-ai/QwenPaw/pull/8411)
- `#8576` Default agent edit disabled → [PR #8608](https://github.com/agentscope-ai/QwenPaw/pull/8608)
- `#8533` Codex/Qoder cron empty request → [PR #8535](https://github.com/agentscope-ai/QwenPaw/pull/8535)

**Stability note**: Windows-specific bugs are overrepresented (SQLite path canonicalization, shell cancellation hangs), indicating Windows is a pain point in current CI/testing coverage.

---

## 6. Feature Requests & Roadmap Signals

### High-Interest Requests

| Issue | Request | Comments | Likely Next Release? |
|-------|---------|----------|---------------------|
| [#7436](https://github.com/agentscope-ai/QwenPaw/issues/7436) | `tool_call_format` config for IM channels (full/name_only/compact) | 3 | ✅ In PR [#8610](https://github.com/agentscope-ai/QwenPaw/pull/8610) |
| [#5110](https://github.com/agentscope-ai/QwenPaw/issues/5110) | Quote/reference text from responses for follow-up | 3 | ✅ In PR [#8609](https://github.com/agentscope-ai/QwenPaw/pull/8609) |
| [#8605](https://github.com/agentscope-ai/QwenPaw/issues/8605) | Browser tab title follows current session name | 1 | Possible |
| [#8591](https://github.com/agentscope-ai/QwenPaw/issues/8591) | Creator UI accessibility fixes (button contrast, toggle state) | 1 | Possible |
| [#2420](https://github.com/agentscope-ai/QwenPaw/issues/2420) | Cross-agent collaboration guidance & communication triggers | 4 | Long-term |

### Infrastructure Features In Progress

- **Reranker model center** ([#8472](https://github.com/agentscope-ai/QwenPaw/pull/8472), XXL) — adds service testing and multi-query precision verification to memory settings
- **GBK/CP936 file encoding** ([#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234), XXL) — critical for Chinese Windows users
- **Ollama context window from `num_ctx`** ([#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236), XL) — local model compatibility

**Roadmap signals**: Memory/retrieval quality (reranker center, automatic recall refactor) and cross-platform encoding are strategic priorities. IM channel UX (compact tool calls, quoting) is user-demand-driven and moving fast.

---

## 7. User Feedback Summary

### Pain Points

1. **Windows compatibility gaps**: `recall_history` broken on Windows due to `\\?\` extended-length path handling; shell cancellation tests hanging; GBK file encoding dropping bytes
2. **Memory/retrieval fragility**: Silent tag generation failures returning 503; recall generating synthetic trajectories models can imitate
3. **Creator reviewer blocking**: A single review round can become permanently undecidable, blocking creative workflows
4. **Plugin installation failures**: Official `qwenpaw-creator` plugin fails with metadata errors via both UI and CLI
5. **Matrix multi-workspace activation**: 10-second startup window only covers first workspace's Matrix channel

### Positive Signals

- Cross-agent collaboration features are being actively used and refined (issue #2420 feedback)
- DeepSeek R1 integration works in offline CoPaw deployments (while Qwen3/3.5 do not)
- Memory recall refactor (PR #8457) and reranker improvements (PR #8472) address longstanding retrieval quality concerns
- Matrix session recovery (PR #8411) resolves the password-re-login annoyance

### Dissatisfaction Themes

- **UI accessibility**: Creator panel has white-on-white buttons; default agent edit disabled without technical reason
- **Debuggability**: Empty api_key accepted silently; out-of-range model configs persisted then fail silently after restart
- **Multi-instance management**: No way to distinguish multiple console tabs by session name

---

## 8. Backlog Watch

### Long-Unanswered or Stale Issues Needing Maintainer Attention

| Issue | Age | Title | Priority |
|-------|-----|-------|----------|
| [#2420](https://github.com/agentscope-ai/QwenPaw/issues/2420) | ~7 months | Cross-agent collaboration UX feedback (4 sub-issues) | High |
| [#1453](https://github.com/agentscope-ai/QwenPaw/issues/1453) | ~8 months | CoPaw offline install: Qwen3/3.5 not connectable (but DeepSeek R1 works) | Medium |
| [#5110](https://github.com/agentscope-ai/QwenPaw/issues/5110) | ~5 months | Quote/reference text feature request | Medium (PR in progress) |
| [#7436](https://github.com/agentscope-ai/QwenPaw/issues/7436) | ~2.5 months | `tool_call_format` config | Medium (PR in progress) |
| [#8592](https://github.com/agentscope-ai/QwenPaw/issues/8592) | 2 days | **3 bundled critical defects** in Creator review pipeline | **Critical — needs split/triage** |
| [#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580) | 3 days | Memory tag index 503 error | High |

### PRs Awaiting Review

| PR | Age | Title | Blockers |
|----|-----|-------|----------|
| [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234) | ~3 weeks | GBK/CP936 encoding fix | Size XXL, under review |
| [#8472](https://github.com/agentscope-ai/QwenPaw/pull/8472) | ~10 days | Reranker model center | Size XXL, under review |
| [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236) | ~3 weeks | Ollama context window | Size XL, under review |
| [#8100](https://github.com/agentscope-ai/QwenPaw/pull/8100) | ~5 weeks | Agent media capabilities | Size L, under review |

**Backlog concern**: Issue #8592 bundles three independently reproducible backend defects but hasn't been split despite being labeled a "hard blocker." The Creator review pipeline defect could block creative users entirely. Maintainer triage recommended.

---

*Digest generated from QwenPaw (agentscope-ai/QwenPaw) activity on 2026-11-07. Data covers issues and PRs updated within 24 hours.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to generate a structured project digest for ZeroClaw based on the provided GitHub data. Let me analyze the data carefully and organize it according to the requested sections.

Key data points:
- 17 issues updated in last 24h (7 open, 10 closed)
- 50 PRs updated in last 24h (36 open, 14 merged/closed)
- 0 new releases

Let me organize this into the requested sections:

1. **Today's Overview** - Summarize overall activity
2. **Releases** - None today
3. **Project Progress** - Merged/closed PRs and issues
4. **Community Hot Topics** - Most active items
5. **Bugs & Stability** - Security and bug reports
6. **Feature Requests & Roadmap Signals** - Feature PRs
7. **User Feedback Summary** - Pain points from issues
8. **Backlog Watch** - Items needing attention

Let me identify the most significant items:

Security/Bug fixes merged:
- #12114 - Fix rate limits on XFF
- #12233 - Limit OIDC bearer verification

Open critical issues:
- #10926 - Matrix send_via bug
- #12263 - Strict provider rejects long tool-heavy sessions (S1)
- #12272 - vodozemac security vulnerability

Notable PRs:
- #11076 - agy_cli coding-CLI tool
- #9809 - Multiple models per provider profile
- #9746 - Per-agent ownership scoping
- #12239 - Hold current authority through session effects

Let me write the digest in English as the user used English.
</think>


# ZeroClaw Project Digest — 2026-11-07

## 1. Today's Overview

ZeroClaw shows high development velocity today with 17 issues and 50 PRs updated in the last 24 hours. The project is actively addressing security concerns, with two security fixes merged (#12114, #12233) and several follow-up tasks in progress. Several S1 (workflow-blocking) and S2 (degraded behavior) bugs are under active discussion, including a critical provider rejection issue and a data-loss risk in channel startup. The community is working toward the v0.9.0 release, with multiple high-priority PRs targeting that milestone.

---

## 2. Releases

**No new releases today.** The project is preparing for v0.9.0, with several PRs flagged for that release in flight.

---

## 3. Project Progress

### Merged/Closed PRs (14)

| PR | Title | Area |
|----|-------|------|
| [#12114](https://github.com/zeroclaw-labs/zeroclaw/pull/12114) | fix(gateway): key rate limits on the proxy-appended XFF hop | Gateway/Security |
| [#12233](https://github.com/zeroclaw-labs/zeroclaw/pull/12233) | fix(gateway): limit and cap OIDC bearer verification on the config route group | Gateway/Security |

These two merged PRs close critical security gaps around rate limiting and OIDC token verification that were reported in issues #12047 and #12052.

### Open PRs Advancing

| PR | Title | Impact |
|----|-------|--------|
| [#12239](https://github.com/zeroclaw-labs/zeroclaw/pull/12239) | fix(rpc): hold current authority through session effects | Security/P1, v0.9.0 |
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) | fix(tools): per-agent ownership scoping | Security, v0.9.0 |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | feat(providers): support multiple models per provider profile | Feature/XL |
| [#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076) | feat(tools): add agy_cli coding-CLI tool | Feature/Integration |

---

## 4. Community Hot Topics

### Most Active Issues (by comments)

1. **[#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926)** — Matrix send_via treats peer user identities as room destinations — 9 comments
   - *Underlying need*: Correct routing behavior in Matrix channel operations

2. **[#12047](https://github.com/zeroclaw-labs/zeroclaw/issues/12047)** — OIDC bearer verification has no attempt limiter — 3 comments (CLOSED)
   - *Underlying need*: Security hardening for gateway authentication

3. **[#12052](https://github.com/zeroclaw-labs/zeroclaw/issues/12052)** — Rate limiters key on first X-Forwarded-For entry — 2 comments (CLOSED)
   - *Underlying need*: Proxy-aware security controls

### Notable Open Discussions

| Item | Topic | Signal |
|------|-------|--------|
| [#12280](https://github.com/zeroclaw-labs/zeroclaw/issues/12280) | Forwarded loopback should not count as local | Security hardening task |
| [#12283](https://github.com/zeroclaw-labs/zeroclaw/issues/12283) | resolve_peer_set allows sends to ignored peers | Data integrity concern |
| [#12279](https://github.com/zeroclaw-labs/zeroclaw/issues/12279) | Channel startup can lose messages | Potential data loss (S2/S0) |

---

## 5. Bugs & Stability

### Severity S1 — Workflow Blocked

| Issue | Title | Status |
|-------|-------|--------|
| [#12263](https://github.com/zeroclaw-labs/zeroclaw/issues/12263) | Strict provider rejects long tool-heavy sessions permanently (422 missing `tool_call_id`) | **OPEN** |
| [#12272](https://github.com/zeroclaw-labs/zeroclaw/issues/12272) | vodozemac 0.11.0 fails RUSTSEC-2026-0445 and RUSTSEC-2026-0451 | **OPEN** |

**#12263**: After ~38 messages with tool calls, every subsequent turn in a conversation is permanently rejected. This blocks long-running agentic workflows.

**#12272**: Security audit failure in dependencies is blocking all PRs and master builds in the Quality Gate.

### Severity S2 — Degraded Behavior

| Issue | Title | Fix PR? |
|-------|-------|---------|
| [#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926) | Matrix send_via uses peer user IDs as room destinations | — |
| [#11962](https://github.com/zeroclaw-labs/zeroclaw/issues/11962) | 64 live RPC sessions never released when idle | — |
| [#12176](https://github.com/zeroclaw-labs/zeroclaw/issues/12176) | Deferred MCP tool list in HashMap order busts prompt caching | — |
| [#12283](https://github.com/zeroclaw-labs/zeroclaw/issues/12283) | Outbound sends can reach ignored peers | — |
| [#12279](https://github.com/zeroclaw-labs/zeroclaw/issues/12279) | Channel startup may lose messages during transcript restore | — |

### Severity S3 — Minor

| Issue | Title |
|-------|-------|
| [#12155](https://github.com/zeroclaw-labs/zeroclaw/issues/12155) | Cancelled quickstart says "No config written" but config exists |
| [#12178](https://github.com/zeroclaw-labs/zeroclaw/issues/12178) | deliver_file description tells model to write URI into reply text |

---

## 6. Feature Requests & Roadmap Signals

### High-Impact Feature PRs in Review

| PR | Title | Size | Signals |
|----|-------|------|---------|
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | Support multiple models per provider profile | XL | Major provider architecture change |
| [#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076) | Add agy_cli coding-CLI tool for Antigravity CLI | XL | Gemini CLI migration response |
| [#12216](https://github.com/zeroclaw-labs/zeroclaw/pull/12216) | Support multiple plugin registry origins | XL | Enterprise/self-hosted flexibility |
| [#12276](https://github.com/zeroclaw-labs/zeroclaw/pull/12276) | Synthesize Telegram voice replies during text generation | XL | Accessibility/multimodal |
| [#12270](https://github.com/zeroclaw-labs/zeroclaw/pull/12270) | Serve daemon's web dashboard through relay (phase 2) | XL | Infrastructure, v0.9.0 |
| [#12269](https://github.com/zeroclaw-labs/zeroclaw/pull/12269) | Add paired-device voice settings and chat controls | XL | UX improvement |

### Feature Requests from Issues

| Issue | Title | Need |
|-------|-------|------|
| [#12261](https://github.com/zeroclaw-labs/zeroclaw/issues/12261) | Re-check current TUI before session/close effects | Security consistency |
| [#12248](https://github.com/zeroclaw-labs/zeroclaw/issues/12248) | Don't ask for approval of a tool call that can't run | UX efficiency |
| [#12249](https://github.com/zeroclaw-labs/zeroclaw/issues/12249) | Dashboard: hide config pages from accounts that can't read config | Access control UX |
| [#12217](https://github.com/zeroclaw-labs/zeroclaw/issues/12217) | Email tools-only docs should mention IMAP listener | Documentation |

---

## 7. User Feedback Summary

### Pain Points Reported

| Theme | Issue | Description |
|-------|-------|-------------|
| **Data loss risk** | #12279 | Users report potential message loss during channel restart — one message can be lost in a short boot window |
| **Workflow blocking** | #12263 | Long conversations with tools become permanently unusable after ~38 messages |
| **Dependency security** | #12272 | Quality gate failures are blocking all contributions; users can't merge any PRs |
| **Prompt caching broken** | #12176 | MCP deferred tool list order changes each session, defeating prompt caching optimization |
| **Confusing onboarding** | #12155 | Quickstart cancellation message contradicts actual state |

### Use Cases Highlighted

- **Multi-provider deployments**: #9809 addresses need for fallback models and multiple model support per provider
- **Coding assistance integration**: #11076 responds to Google's Gemini CLI deprecation with Antigravity CLI support
- **Enterprise plugin management**: #12216 enables private and public plugin registries

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Priority | Title |
|-------|-----|----------|-------|
| [#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926) | ~50 days | P2 | Matrix send_via peer routing bug — 9 comments, needs decision |
| [#11962](https://github.com/zeroclaw-labs/zeroclaw/issues/11962) | ~16 days | S2 | RPC session leak — 1 comment, needs triage |
| [#12283](https://github.com/zeroclaw-labs/zeroclaw/issues/12283) | <1 day | S2 | Ignored peers can still receive messages — needs confirmation |

### Long-Running PRs

| PR | Age | Status | Blocking |
|----|-----|--------|----------|
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | ~92 days | OPEN | Major architecture change, needs review |
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) | ~95 days | OPEN | Security fix, flagged for v0.9.0 |
| [#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076) | ~45 days | OPEN | Feature complete, needs exception documentation |

### Critical Blockers for v0.9.0

1. **#12272** — RUSTSEC vulnerabilities in vodozemac dependency (blocks all merges)
2. **#12263** — Provider rejection of long sessions (S1 workflow blocker)
3. **#9746** — Per-agent ownership scoping (needs-author-action)

---

*Generated: 2026-11-07 | Data source: zeroclaw-labs/zeroclaw GitHub repository*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*