# OpenClaw Ecosystem Digest 2026-10-30

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-10-30 02:07 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

<think>The user wants me to generate a structured project digest for OpenClaw based on the GitHub data provided. Let me analyze the data and create the required sections.

Key data points:
- Issues: 500 total (326 open, 174 closed in last 24h)
- PRs: 500 total (308 open, 192 merged/closed in last 24h)
- 2 new releases: v2026.10.9 and v2026.9.36

Latest Releases:
- v2026.10.9: Security patches for fast-uri, Zod collections, nodemailer
- v2026.9.36: Gateway-only extended-stable (LTS equivalent)

Let me organize this into the requested sections.

I need to:
1. Today's Overview - summarize project status
2. Releases - detail the two releases
3. Project Progress - PRs merged/closed
4. Community Hot Topics - most active issues
5. Bugs & Stability - ranked by severity
6. Feature Requests & Roadmap Signals
7. User Feedback Summary
8. Backlog Watch

Let me analyze the issues to identify:
- Most commented issues (top 50 shown with comment counts)
- Severity levels (P0, P1, P2)
- Issue ratings (diamond lobster, silver shellfish, etc.)
- Security issues
- Crash issues

Looking at the top issues by comments:
1. #164294 - Gateway state DB WAL auto-checkpoint (38 comments, P2)
2. #150635 - Short-term recall retention (23 comments, P2)
3. #120385 - Code Mode tool catalog incomplete (22 comments, P2)
4. #164923 - Short-term promotion issue (19 comments, P2)
5. #172837 - nativeSubagentAssignments never removed (18 comments, P1)


6. #166634 - Late reclamation commit checkpoint failure (18 comments, P0)
7. #177656 - Native host exec integrity error (17 comments, P1)
8. #162211 - Gateway startup blocks event loop (14 comments, P0)
9. #159094 - State-lifecycle lease contention (14 comments, P1)
10. #164394 - Control UI WebChat jitters (13 comments, P2)

I notice several critical performance and stability issues emerging. The P0 and P1 issues suggest significant challenges with state management, checkpoint processes, and system initialization that could impact overall system reliability.</think>

# OpenClaw Project Digest — 2026-10-30

## Today's Overview

OpenClaw remains highly active with **500 issues and 500 PRs updated in the last 24 hours**. The project shipped two releases today: **v2026.10.9** (standard release with security patches) and **v2026.9.36** (extended-stable/LTS gateway-only release). Community engagement is robust, with 38 comments on the top issue. However, several **P0-level bugs** remain open, including startup event-loop blocking, checkpoint failures causing agent unavailability, and crash-loop scenarios. The release cadence indicates active maintenance, though stability concerns persist around state management and memory systems.

---

## Releases

### v2026.10.9 — Standard Release
**Released:** 2026-10-30

**Highlights:**
- **Security patches** for vulnerable runtime dependencies:
  - `fast-uri 4.2.3` — rejects malformed URI schemes/hosts in MCP schema validation
  - `Zod` — oversized collections rejected early in A2UI and Discord embedded app SDK
  - `nodemailer 10.1.4` — fixes IMAP sender parsing spoofing

**Full changelog:** https://github.com/openclaw/openclaw/releases/tag/v2026.10.9

---

### v2026.9.36 — Extended-Stable (LTS Equivalent)
**Released:** 2026-10-30

**Highlights:**
- Gateway-only release (no CLI/agent changes)
- Includes critical security updates, reliability and performance fixes
- New model support added
- Serves as the current **extended-stable** branch

**Full changelog:** https://github.com/openclaw/openclaw/releases/tag/v2026.9.36

---

## Project Progress

### PRs Merged/Closed Today (Top Highlights)

| PR | Title | Size | Status |
|----|-------|------|--------|
| [#188036](https://github.com/openclaw/openclaw/pull/188036) | chore(ui): refresh control ui locales | M | ✅ CLOSED |
| [#188014](https://github.com/openclaw/openclaw/pull/188014) | fix(ios): wait for host headroom before screenshot boot | XS | ✅ CLOSED |
| [#188010](https://github.com/openclaw/openclaw/pull/188010) | fix(update): retry installation discovery after returned failures | XS | ✅ CLOSED |

### Active PRs Advancing

| PR | Title | Size | Priority | Status |
|----|-------|------|----------|--------|
| [#188025](https://github.com/openclaw/openclaw/pull/188025) | fix(gateway): stop GitHub readiness from copying whole agent databases | L | P1 | ⏳ waiting on author |
| [#188030](https://github.com/openclaw/openclaw/pull/188030) | perf(doctor): stop re-reading SQLite inspection copies on every check | L | — | 👀 ready for maintainer |
| [#188033](https://github.com/openclaw/openclaw/pull/188033) | fix: keep Gateway responsive during plugin tool discovery | M | — | 👀 ready for maintainer |
| [#188034](https://github.com/openclaw/openclaw/pull/188034) | fix(update): retain authority through fallback publication | M | — | 👀 ready for maintainer |
| [#188013](https://github.com/openclaw/openclaw/pull/188013) | fix: preserve authored CSP in relative HTML previews | XL | P2 | 📣 needs proof |
| [#187962](https://github.com/openclaw/openclaw/pull/187962) | feat(plugins): reload edited bundled plugin code in development | L | P2 | 👀 ready for maintainer |

---

## Community Hot Topics

### Most Active Issues (By Comment Count)

1. **[#164294](https://github.com/openclaw/openclaw/issues/164294)** — Gateway state DB WAL auto-checkpoint never completes (38 comments, P2)
   - **Issue:** WAL checkpoint blocked by in-process reader since boot
   - **Impact:** Persistent state database performance degradation
   - **Author:** zhangyong-le

2. **[#150635](https://github.com/openclaw/openclaw/issues/150635)** — Short-term recall retention evicts recalled entries nightly (23 comments, P2)
   - **Issue:** Dreaming deep phase never promotes due to 512-entry cap
   - **Impact:** Memory promotion failure for users with active sessions
   - **Author:** marknilsn

3. **[#120385](https://github.com/openclaw/openclaw/issues/120385)** — Code Mode tool catalog incomplete for scheduled/cron jobs (22 comments, P2)
   - **Issue:** MCP tools missing, surfacing as "Unknown tool id"
   - **Impact:** Scheduled jobs fail with cryptic errors

4. **[#164923](https://github.com/openclaw/openclaw/issues/164923)** — One workspace promotes 0/512 while siblings promote 50-90% (19 comments, P2)
   - **Issue:** Structural rejection of conversation-turn snippets
   - **Impact:** Inconsistent memory behavior across workspaces

5. **[#172837](https://github.com/openclaw/openclaw/issues/172837)** — Codex nativeSubagentAssignments never removed after completion (18 comments, P1)
   - **Issue:** Assignments persist, causing re-pinning and re-sending
   - **Impact:** Message loss and thread pollution

---

## Bugs & Stability

### Critical (P0) — Require Immediate Attention

| Issue | Title | Severity | Status |
|-------|-------|----------|--------|
| [#166634](https://github.com/openclaw/openclaw/issues/166634) | Late reclamation commit checkpoint failure leaves agent unavailable | 🐚 platinum hermit | OPEN |
| [#162211](https://github.com/openclaw/openclaw/issues/162211) | Gateway startup blocks event loop 40-200s, triggers restart loop | 🦪 silver shellfish | OPEN |
| [#158592](https://github.com/openclaw/openclaw/issues/158592) | After host sleep/wake, model runtime publication times out permanently | 🐚 platinum hermit | OPEN |
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | doctor --fix --non-interactive idles 15+ min, never reaches DB repair | 🦪 silver shellfish | OPEN |

### High Priority (P1)

| Issue | Title | Severity | Status |
|-------|-------|----------|--------|
| [#172837](https://github.com/openclaw/openclaw/issues/172837) | nativeSubagentAssignments never removed | 🐚 platinum hermit | OPEN |
| [#177656](https://github.com/openclaw/openclaw/issues/177656) | Native host exec returns shared-state integrity error | 🦪 silver shellfish | OPEN |
| [#159094](https://github.com/openclaw/openclaw/issues/159094) | State-lifecycle lease contention between processes | 🦐 gold shrimp | OPEN |
| [#167876](https://github.com/openclaw/openclaw/issues/167876) | Talk consultations lose caller authority after session setup | 🦞 diamond lobster | OPEN |
| [#158070](https://github.com/openclaw/openclaw/issues/158070) | Preflight compaction fails in lane queue | 🐚 platinum hermit | OPEN |

### Notable Fix PRs In Flight
- [#188025](https://github.com/openclaw/openclaw/pull/188025) — Fixes GitHub readiness copying entire agent DBs (minutes-long freeze)
- [#188030](https://github.com/openclaw/openclaw/pull/188030) — Doctor performance fix (SQLite re-read)
- [#188033](https://github.com/openclaw/openclaw/pull/188033) — Gateway responsiveness during plugin tool discovery

---

## Feature Requests & Roadmap Signals

### Active Feature Requests

| Issue | Title | Comments | Demand |
|-------|-------|----------|--------|
| [#6757](https://github.com/openclaw/openclaw/issues/6757) | **Feature Request: Agent-triggered context compaction (self-compact tool)** | 9 | 👍 2 |
| [#163739](https://github.com/openclaw/openclaw/issues/163739) | Make Control UI's Ctrl+Shift+A (Archive) configurable | 7 | 👍 1 |
| [#140244](https://github.com/openclaw/openclaw/issues/140244) | Support file-backed prompts in `openclaw infer model run` | 7 | 👍 1 |
| [#172547](https://github.com/openclaw/openclaw/issues/172547) | Exclude fenced dreaming ranges from memory-search indexing | 7 | — |

### Roadmap Signals
- **Plugin hot-reload** ([#187962](https://github.com/openclaw/openclaw/pull/187962)) — Developer experience improvement for bundled plugins
- **Memory chunking opt-in** ([#186649](https://github.com/openclaw/openclaw/pull/186649)) — Per-entry chunking for curated memory topics
- **Team server docs consolidation** ([#187963](https://github.com/openclaw/openclaw/pull/187963)) — Simplified multiplayer setup documentation

---

## User Feedback Summary

### Pain Points Identified

1. **Memory/Promotion Failures** — Multiple issues (#150635, #164923) report short-term recall promotion at 0%, causing user data loss in dreaming workflows
2. **State Contention** — Several reports of lease/ownership conflicts between Gateway processes (#159094, #177656)
3. **Startup Instability** — P0 issue where Gateway blocks for 40-200s on startup, triggering health-monitor restarts (#162211)
4. **UI Jitter** — Control UI WebChat transcript jitters during scroll (#164394) — affects user experience
5. **MCP Tool Discovery** — Gateway freezes during plugin tool catalog builds (#188033 in flight)

### Positive Signals
- Release cadence remains strong with security patches delivered promptly
- Doctor performance improvements in progress ([#188030](https://github.com/openclaw/openclaw/pull/188030))
- Update mechanism fixes landing ([#188034](https://github.com/openclaw/openclaw/pull/188034), [#188024](https://github.com/openclaw/openclaw/pull/188024))

---

## Backlog Watch

### Long-Unanswered Important Issues

| Issue | Title | Age | Needs |
|-------|-------|-----|-------|
| [#127195](https://github.com/openclaw/openclaw/issues/127195) | Sixteen call sites emit identical error with no reason code | ~2 months | Maintainer decision |
| [#112638](https://github.com/openclaw/openclaw/issues/112638) | session.maintenance enforce mode does not bound the store | ~3 months | Product decision |
| [#148033](https://github.com/openclaw/openclaw/issues/148033) | Context-engine assemble() missing runtimeContext.senderId | ~1.5 months | Maintainer review |
| [#153706](https://github.com/openclaw/openclaw/issues/153706) | Closed ACP sessions assert unused native runtime | ~1 month | Product decision |

### Stale Issues Requiring Action
- 14+ issues marked **stale** in the top 50 — may need triaging or closing
- Several issues have linked PRs open but remain unresolved

---

*Generated from OpenClaw GitHub data — 2026-10-30*

---

## Cross-Ecosystem Comparison

<think>The user wants a cross-project comparison report for all the projects in the digest. Let me analyze the data from each project and create a comprehensive comparison.

Let me gather the key data points:

**OpenClaw** (github.com/openclaw/openclaw)
- Issues: 500 updated in last 24h (326 open, 174 closed)
- PRs: 500 updated in last 24h (308 open, 192 merged/closed)
- Releases: 2 new releases (v2026.10.9 and v2026.9.36)
- Health: High activity, strong release cadence, security patches

**Hermes Agent** (github.com/nousresearch/hermes-agent)
- Issues: 50 updated in last 24h (48 open, 2 closed)
- PRs: 50 updated in last 24h (40 open, 10 merged/closed)
- Releases: 0
- Health: Active development, CLI and gateway focus

**IronClaw** (github.com/nearai/ironclaw)
- Issues: 0 updated in last 24h
- PRs: 2 open (both dependabot updates)
- Releases: 0
- Health: Very low activity, maintenance mode

**QwenPaw** (github.com/agentscope-ai/QwenPaw)
- Issues: 15 updated in last 24h (5 open, 10 closed)
- PRs: 40 updated in last 24h (27 open, 13 merged/closed)
- Releases: 0 (latest is v2.3.0-beta.1)
- Health: Active development, beta stage

**ZeroClaw** (github.com/zeroclaw-labs/zeroclaw)
- Issues: 50 updated in last 24h (33 open, 17 closed)


- PRs: 50 updated in last 24h (44 open, 6 merged/closed)
- Releases: 0 (v0.9.0 upcoming)
- Health: High activity, rapid development cycle

Now I'll create the comparison report with the requested sections.</think>

# Cross-Project Ecosystem Comparison Report

**Generated:** 2026-10-30

---

## 1. Ecosystem Overview

The personal AI assistant and agent framework landscape is experiencing rapid fragmentation, with five distinct open-source projects under analysis demonstrating divergent architectural philosophies and target audiences. The ecosystem is characterized by three maturity tiers: mature projects like **OpenClaw** shipping regular releases with security focus, mid-stage projects like **ZeroClaw** and **Hermes Agent** iterating aggressively on multi-tenant and channel-integration features, and nascent or maintenance-mode projects like **IronClaw** with minimal activity. Common themes emerging across all projects include security hardening (credential management, RBAC, sandboxing), memory/state management for long-running agents, and multi-channel deployment (Slack, Discord, Telegram, Matrix). The absence of new releases from three projects today may indicate either release-cycle timing or resource constraints.

---

## 2. Activity Comparison

| Project | Issues (24h) | Open | Closed | PRs (24h) | Open | Merged | Releases (24h) | Health Tier |
|---------|-------------|------|--------|-----------|------|--------|----------------|-------------|
| **OpenClaw** | 500 | 326 | 174 | 500 | 308 | 192 | 2 | 🟢 Excellent |
| **Hermes Agent** | 50 | 48 | 2 | 50 | 40 | 10 | 0 | 🟢 Good |
| **IronClaw** | 0 | 0 | 0 | 2 | 2 | 0 | 0 | 🔴 Dormant |
| **QwenPaw** | 15 | 5 | 10 | 40 | 27 | 13 | 0 | 🟡 Active |
| **ZeroClaw** | 50 | 33 | 17 | 50 | 44 | 6 | 0 | 🟢 Good |

---

## 3. OpenClaw's Position

**OpenClaw** maintains the strongest position in this cohort by raw activity metrics—500 issues and 500 PRs updated in 24 hours is 10× the volume of the next most active project. Its dual release strategy (standard + extended-stable/LTS) demonstrates enterprise maturity that peers lack. **Technical differentiators**: OpenClaw employs a Dreaming phase for memory consolidation with promotion thresholds, uses MCP tool catalogs for scheduled jobs, and maintains a Gateway-first architecture with WAL checkpointing. **Community size**: With 38 comments on the top issue and 500 updates daily, OpenClaw's community engagement dwarfs Hermes Agent (50 updates) and ZeroClaw (50 updates). IronClaw and QwenPaw represent smaller or more specialized user bases—QwenPaw is primarily Chinese-market focused (AgentScope ecosystem), while IronClaw shows near-zero organic contribution.

---

## 4. Shared Technical Focus Areas

| Focus Area | OpenClaw | Hermes | QwenPaw | ZeroClaw | Notes |
|------------|:--------:|:------:|:-------:|:--------:|-------|
| **Memory/Recall Management** | ✅ | ✅ | ✅ | ✅ | All projects address long-context memory promotion, dream consolidation, and short-term recall eviction |
| **Security/Billing Integrity** | ✅ | ✅ | — | ✅ | Credential refresh, RBAC, per-agent attribution—Hermes has double-billing bug, OpenClaw has security patches |
| **Multi-Channel Deployment** | — | — | ✅ | ✅ | QwenPaw targets Feishu, Discord; ZeroClaw supports Slack, Matrix, Signal, Telegram |
| **Plugin Architecture** | ✅ | ✅ | ✅ | ✅ | Plugin loading resilience, market provenance, RPC forwarding—converging on safe extensibility |
| **State/Checkpoint Management** | ✅ | — | — | ✅ | WAL checkpointing (OpenClaw), session persistence (ZeroClaw) |
| **Tool Call Safety** | — | ✅ | — | ✅ | Doom loop prevention, repetitive-tool safeguards |

---

## 5. Differentiation Analysis

**OpenClaw** differentiates through its **Dreaming phase** and memory promotion system—a unique architectural choice not seen in peers. It targets enterprise deployments with extended-stable releases and security-focused patching. **Hermes Agent** focuses on CLI-centric workflows with cron/scheduler integration and emphasizes OAuth/Fast signal handling. **ZeroClaw** targets multi-tenant deployments with per-sender RBAC and channel integrations (Discord, Slack, Matrix, Signal) plus a ZeroCode visual IDE. **QwenPaw** is positioned as a more accessible, desktop-oriented product with Chinese market integration (Feishu) and visual components (image gallery, compact UI). **IronClaw** targets WASM-based latency testing with minimal feature scope—essentially a specialized tool rather than a general agent.

---

## 6. Community Momentum & Maturity

| Project | Maturity Tier | Iteration Speed | Signal |
|---------|--------------|------------------|--------|
| **OpenClaw** | 🟢 Stable/Released | Moderate (releases bi-weekly) | Security patches, LTS tracking |
| **Hermes Agent** | 🟡 Active Dev | Rapid | Feature PRs merging, RFCs in flight |
| **ZeroClaw** | 🟡 Active Dev | Rapid | Large architectural PRs (session history, RPC), security hardening |
| **QwenPaw** | 🟡 Beta | Rapid | Beta feedback driving fixes, UI enhancements |
| **IronClaw** | 🔴 Dormant | Minimal | Only Dependabot updates |

**Rapid iterators**: ZeroClaw (44 open PRs), OpenClaw (308 open PRs), QwenPaw (27 open PRs)  
**Stabilizing**: OpenClaw—releases indicate shift from features to polish  
**Concerning**: IronClaw—zero community engagement beyond automated dependency updates

---

## 7. Trend Signals

The following patterns emerge from cross-project community feedback and represent **opportunities for AI agent developers**:

1. **Memory integrity is a universal pain point** — All four active projects have open issues about memory loss, dream consolidation failures, and promotion thresholds. The industry lacks a robust solution for long-running agent state management.

2. **Multi-tenancy and RBAC are accelerating** — ZeroClaw and Hermes both prioritize per-sender access control. As agents serve more users, isolation becomes critical.

3. **Channel integrations are proliferating but fragile** — QwenPaw and ZeroClaw both ship regressions in Slack, Discord, Matrix, and Feishu integrations. The SDK layer for multi-channel deployment needs standardization.

4. **Doom loops and token waste** — Hermes, QwenPaw, and ZeroClaw all have active issues on repeated tool call loops consuming API credits. This suggests a need for built-in circuit breakers.

5. **Security hardening is intensifying** — OpenClaw's security patches, ZeroClaw's knowledge graph attribution, Hermes's billing integrity issues—all indicate the ecosystem is maturing toward enterprise-grade isolation.

6. **Visual/Desktop UX is underserved** — QwenPaw's desktop HTML preview issues, ZeroClaw's ZeroCode editor bugs, and IronClaw's WASM latency focus suggest growing demand for client-side tooling.

---

*Cross-project analysis based on GitHub activity data for 2026-10-30.*

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to generate a structured project digest for Hermes Agent based on the provided GitHub data. Let me analyze the data and create a comprehensive digest.

Key data points:
- Issues: 50 updated in last 24h (48 open/active, 2 closed)
- PRs: 50 updated in last 24h (40 open, 10 merged/closed)
- No new releases

Let me organize this into the requested sections:

1. **Today's Overview** - Summarize the project status
2. **Releases** - None mentioned
3. **Project Progress** - 10 merged/closed PRs
4. **Community Hot Topics** - Top issues by comment count
5. **Bugs & Stability** - Bug reports ranked by severity
6. **Feature Requests & Roadmap Signals** - Feature requests
7. **User Feedback Summary** - Pain points from issues
8. **Backlog Watch** - Long-unanswered important items

Let me identify the key items:

Top issues by comments:
1. #143379 - RFC: THE DOC-CHAIN SUBSTRATE'S NETWORK (30 comments) - security, agent, tools, file, memory, compression
2. #38519 - Hermes Desktop frontend install only (23 comments) - feature, desktop, windows
3. #127284 - source-completion-pending has no TTL or self-heal (15 comments) - bug, P1
4. #118379 - Anthropic per-request credential refresh reverts credential-pool rotation (11 comments) - bug, P1, security
5. #135487 - cron worker dies on 'database is locked' (10 comments) - bug, P1
6. #145022 - Kanban workers crash (10 comments) - bug, P1

Notable merged/closed PRs:
- #74573 - docs(zh-Hans): fix stale writing-plans
- #98918 - feat(gateway): make the local STT fallback configurable (CLOSED)


- #98917 - feat(cron): include copyable job and run ids in deliveries (CLOSED)
- #98916 - fix(kanban): preserve selected board when deleting tasks (CLOSED)
- #98915 - fix(gateway): keep auto-TTS output under Hermes home (CLOSED)
- #73923 - feat(gateway): persist provider_message_id, delivery_route and chunk_count (CLOSED)
- #63812 - feat(gateway): make runtime footer use effective OAuth and Fast signals (CLOSED)

I'm tracking several recently closed pull requests that enhance gateway and cron functionality. These include configurable local STT fallback, copyable job identifiers, board preservation in kanban, TTS output management, and improved delivery tracking. The closed PRs suggest ongoing improvements to system reliability and user experience across different components.

The project shows active development with 50 issues and pull requests updated in the last 24 hours, indicating a dynamic and engaged development community.</think>

# Hermes Agent Project Digest

**Date:** 2026-10-30
**Repository:** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. Today's Overview

Hermes Agent continues to demonstrate high development velocity with **50 issues** and **50 PRs** updated in the last 24 hours. The project shows strong activity across all components—agent, CLI, gateway, cron, and tools—with 48 open/active issues and 40 open PRs. Notably, **10 PRs** were merged or closed today, indicating active maintenance. No new releases were published. The issue distribution shows a mix of P1 (critical) and P2 (standard) bugs alongside feature proposals, suggesting balanced attention between stability fixes and new capabilities.

---

## 2. Releases

No new releases today.

---

## 3. Project Progress

The following PRs were **merged or closed** today:

| PR | Description | Status |
|----|-------------|--------|
| [#74573](https://github.com/NousResearch/hermes-agent/pull/74573) | docs(zh-Hans): fix stale writing-plans and subagent-driven-development skill cross-references | CLOSED |
| [#98918](https://github.com/NousResearch/hermes-agent/pull/98918) | feat(gateway): make the local STT fallback configurable | CLOSED |
| [#98917](https://github.com/NousResearch/hermes-agent/pull/98917) | feat(cron): include copyable job and run ids in deliveries | CLOSED |
| [#98916](https://github.com/NousResearch/hermes-agent/pull/98916) | fix(kanban): preserve selected board when deleting tasks | CLOSED |
| [#98915](https://github.com/NousResearch/hermes-agent/pull/98915) | fix(gateway): keep auto-TTS output under Hermes home | CLOSED |
| [#73923](https://github.com/NousResearch/hermes-agent/pull/73923) | feat(gateway): persist provider_message_id, delivery_route and chunk_count in delivery ledger | CLOSED |
| [#63812](https://github.com/NousResearch/hermes-agent/pull/63812) | feat(gateway): make runtime footer use effective OAuth and Fast signals | CLOSED |

**Key advancements:**
- Cron job management improved with copyable IDs for easier debugging
- TTS output now properly scoped under Hermes home for security and reliability
- Kanban board state preservation during task deletion
- Delivery ledger enhanced with provider message tracking
- Local STT fallback made configurable for resource-constrained environments

---

## 4. Community Hot Topics

Most active discussions (by comment count):

1. **[#143379](https://github.com/NousResearch/hermes-agent/issues/143379)** — RFC: THE DOC-CHAIN SUBSTRATE'S NETWORK (30 comments)
   - **Topic:** Durable record system for session compression with provenance preservation
   - **Tags:** security, agent, tools, file, memory, compression, P2
   - **Analysis:** This is a significant architectural RFC proposing a "doc-chain" substrate for network-level governance and compaction. Users want session data to survive compression while maintaining read/write integrity.

2. **[#38519](https://github.com/NousResearch/hermes-agent/issues/38519)** — Hermes Desktop frontend install only (23 comments, 👍31)
   - **Topic:** Feature request for standalone Windows frontend installation with remote agent connection
   - **Tags:** feature, desktop, windows, P2
   - **Analysis:** Strong community interest (31 👍) in decoupling the Desktop frontend from the agent, enabling lightweight client setups.

3. **[#127284](https://github.com/NousResearch/hermes-agent/issues/127284)** — source-completion-pending has no TTL or self-heal (15 comments)
   - **Topic:** Bug—killed tail leaves stranded state causing repeated re-entry
   - **Tags:** bug, cli, P1, sweeper:risk-compatibility
   - **Analysis:** A reliability issue where incomplete source updates leave persistent state that blocks future launches.

4. **[#118379](https://github.com/NousResearch/hermes-agent/issues/118379)** — Anthropic per-request credential refresh reverts credential-pool rotation (11 comments, 👍1)
   - **Topic:** Bug—billing duplication when credential pool rotation is disrupted
   - **Tags:** bug, agent, anthropic, auth, P1, sweeper:risk-security-boundary, billing
   - **Analysis:** Critical security/billing issue causing double charges when credential refresh interferes with pool rotation.

---

## 5. Bugs & Stability

Critical bugs reported today (ranked by severity):

| Issue | Severity | Description | Component |
|-------|----------|-------------|-----------|
| [#127284](https://github.com/NousResearch/hermes-agent/issues/127284) | **P1** | source-completion-pending has no TTL; killed tail strands state | CLI |
| [#118379](https://github.com/NousResearch/hermes-agent/issues/118379) | **P1** | Anthropic credential refresh causes double billing | Agent, Auth |
| [#135487](https://github.com/NousResearch/hermes-agent/issues/135487) | **P1** | Cron worker dies on "database is locked", occurrence lost | Cron |
| [#145022](https://github.com/NousResearch/hermes-agent/issues/145022) | **P1** | Kanban workers crash with "retained by owner" during gateway stalls | Gateway, Kanban |
| [#137170](https://github.com/NousResearch/hermes-agent/issues/137170) | **P1** | No circuit breaker for repeated identical SUCCESSFUL tool calls (430x duplicate) | Agent |
| [#146643](https://github.com/NousResearch/hermes-agent/issues/146643) | **P2** | Gateway re-reads whole session history on every change; CPU timeouts grow | Gateway, TUI |
| [#146428](https://github.com/NousResearch/hermes-agent/issues/146428) | **P2** | Cron run wedges silently on UnscopedSecretError (multiplexed profiles) | Cron, Auth |

**Fix PRs available:**
- [#145435](https://github.com/NousResearch/hermes-agent/pull/145435) — fix(cli): charge the owed source-completion tail before it runs (addresses #127284)
- [#146714](https://github.com/NousResearch/hermes-agent/pull/146714) — fix(kanban): skip uninitialized sibling DBs during cleanup

---

## 6. Feature Requests & Roadmap Signals

Notable feature requests:

1. **[#38519](https://github.com/NousResearch/hermes-agent/issues/38519)** — Hermes Desktop frontend install only
   - High community interest (31 👍); would enable remote agent connections
   - Likely candidate for near-term implementation given engagement

2. **[#35147](https://github.com/NousResearch/hermes-agent/issues/35147)** — Expose user_id alongside user_name in single-user session context
   - Multi-user team profile support with stable numeric identity mapping
   - Tags: gateway, tool/file, platform/telegram, platform/slack, sessions

3. **[#142235](https://github.com/NousResearch/hermes-agent/issues/142235)** — public read-only MCP tool call for plugin backends
   - Enable plugin backends to read MCP server data (readOnlyHint-gated)
   - Tags: cli, tools, tool/mcp, P3

4. **[#146699](https://github.com/NousResearch/hermes-agent/issues/146699)** — Cron: agents can't see their jobs' run history
   - Agents need visibility into job delivery status
   - Tags: tools, cron, P3

---

## 7. User Feedback Summary

**Pain points identified:**

1. **Storage bloat:** ~22,600 `.pyc` files consuming >303 MiB ([#139500](https://github.com/NousResearch/hermes-agent/issues/139500))
2. **Cache outside pruner scope:** `~/.hermes/cache/uv/` at 1.0 GB with no cleanup path ([#143577](https://github.com/NousResearch/hermes-agent/issues/143577))
3. **Session visibility gaps:** CLI `/sessions` command hides TUI and other source sessions ([#44964](https://github.com/NousResearch/hermes-agent/issues/44964))
4. **Profile isolation issues:** Kanban card reassignment fails across profiles with 403 ([#146237](https://github.com/NousResearch/hermes-agent/issues/146237))
5. **Cron state persistence:** Paused cron jobs reactivate after gateway restart ([#145596](https://github.com/NousResearch/hermes-agent/issues/145596))

**Use case trends:**
- Multi-profile/multi-user deployments increasingly common (Discord multiplexing, Kanban profiles)
- Resource-constrained environments need configurable fallbacks (STT, memory management)
- Remote/hybrid workflows desired (Desktop frontend separation)

---

## 8. Backlog Watch

Issues requiring maintainer attention:

| Issue | Age | Priority | Description |
|-------|-----|----------|-------------|
| [#38519](https://github.com/NousResearch/hermes-agent/issues/38519) | ~5 months | P2 | Desktop frontend install only—high demand, no PR yet |
| [#44964](https://github.com/NousResearch/hermes-agent/issues/44964) | ~4 months | P2 | /sessions CLI hides non-CLI sessions—usability gap |
| [#90040](https://github.com/NousResearch/hermes-agent/issues/90040) | ~2 months | P2 | skills.external_dirs ignores Managed Scope—admin frustration |
| [#135487](https://github.com/NousResearch/hermes-agent/issues/135487) | ~3 weeks | P1 | Database locked cron failure—data loss risk |
| [#118379](https://github.com/NousResearch/hermes-agent/issues/118379) | ~5 weeks | P1 | Credential billing duplication—financial impact |

---

*Generated from GitHub data for 2026-10-30*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to generate a structured project digest for IronClaw based on the provided GitHub data. Let me analyze what I have:

**Data Summary:**
- Issues: 0 new in last 24h
- PRs: 2 open, 0 merged/closed
- Releases: 0

**Latest PRs:**
1. #8162 - dependabot: bump wasmtime from 47.0.3 to 48.0.7 (in /harness/latency/runner)
2. #8163 - dependabot: bump wasmtime from 47.0.4 to 49.0.5

There's very little activity data to work with. I need to create a digest based on what's available, being transparent about the limited data while still providing the structured sections requested.

Let me create the digest in English as requested, with each section addressed.</think>

# IronClaw Project Digest — 2026-10-30

**Repository:** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Today's Overview

Activity on the IronClaw repository today shows a typical maintenance pattern for a mature open-source project. Two pull requests were updated in the last 24 hours, both originating from Dependabot—routine dependency updates for the WebAssembly runtime component (wasmtime). No issues were opened or closed, and no releases were published. The project appears to be in a stable, low-noise state, with automated dependency management driving most of the recent activity. There is no evidence of active feature development or bug-fix cycles in the current snapshot.

---

## 2. Releases

No new releases were published in the last 24 hours.

*No release data available for this digest period.*

---

## 3. Project Progress

| PR # | Title | Status | Author | Focus Area |
|------|-------|--------|--------|------------|
| [#8162](https://github.com/nearai/ironclaw/pull/8162) | chore(deps): bump wasmtime from 47.0.3 to 48.0.7 in /harness/latency/runner | **OPEN** | dependabot[bot] | dependencies |
| [#8163](https://github.com/nearai/ironclaw/pull/8163) | chore(deps): bump wasmtime from 47.0.4 to 49.0.5 | **OPEN** | dependabot[bot] | dependencies |

**Summary:** Zero PRs were merged or closed today. Both open PRs are automated dependency bump requests targeting the wasmtime WebAssembly runtime. These updates appear to be applying version increments to different parts of the codebase (likely different modules or components), indicating the project maintains multiple wasmtime dependencies that are updated on independent schedules.

---

## 4. Community Hot Topics

No issues or pull requests with significant engagement (comments, reactions) were recorded in the last 24 hours. Both open PRs show zero reactions and zero comments, consistent with routine dependency updates that typically require no discussion before merging.

---

## 5. Bugs & Stability

No bug reports, crash logs, or regression issues were filed in the last 24 hours.

*No stability issues to report.*

---

## 6. Feature Requests & Roadmap Signals

No feature requests or roadmap-related issues were opened in the last 24 hours.

*No signal data available for this period.*

---

## 7. User Feedback Summary

No user-facing feedback (issues, comments, or discussions) was recorded in the last 24 hours.

*No feedback data available for analysis.*

---

## 8. Backlog Watch

No long-unanswered issues or stalled PRs were identified in the provided data snapshot.

*No backlog items flagged for this digest.*

---

**Digest generated:** 2026-10-30  
**Data source:** GitHub API activity feed for nearai/ironclaw

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a structured English QwenPaw project digest for 2026-10-30 based on the provided GitHub data. Let me analyze the data and create the sections as requested.

Let me organize the information:

1. **Today's Overview**: Need to summarize project status based on the data
   - 15 issues updated (5 open, 10 closed)
   - 40 PRs updated (27 open, 13 merged/closed)
   - No new releases

2. **Releases**: No new releases mentioned

3. **Project Progress**: Merged/closed PRs today
   - Looking at the PRs with "CLOSED" status:
     - #8497: fix(plugins): tolerate import cache refresh failures during plugin loading
     - #5490: feat(console): navigable fullscreen image gallery for chat media
     - #8358: fix(providers): honor thinking defaults and declared wire controls
     - #8253: feat(website): add JSON-driven evaluation index

4. **Community Hot Topics**: Most active Issues/PRs with most comments
   Looking at issues by comment count:
   - #6116: 9 comments - Doom loop bug
   - #8464: 5 comments - /compact ignores session model switch
   - #8150: 3 comments - Feishu inbound image drop
   - #8500: 2 comments - Auto-Dream drops memory silently
   - #8473: 2 comments - Backend plugins fail to load
   
   Looking at PRs by comment count (but no comment counts shown):
   - #7613: OpenViking memory plugin (size XXL, first-time-contributor)
   - #8463: Local Piccolo with bidirectional scoring
   - #8231: Persist market install provenance
   - #8480: Control-command routing in quoted replies
   - #8034: Bound inline media per request

5. **Bugs & Stability**: Bugs reported today
   - #8502: Desktop HTML preview fails with Chinese paths
   - #8500: Auto-Dream silently drops memory
   - #8490: Voice Transcription settings imports whisper (~690 MB RSS)
   - #8488: Desktop build omits visual_compression assets
   - #8486: Console tool-call icon clipped
   - #8473: Backend plugins fail to load

6. **Feature Requests & Roadmap Signals**: Enhancement issues with significant discussion
   - #6189: save_decision() API - structured decision persistence
   - #4356: Finer granular control/integration of file guard and tool guard
   - #7740: Hub mode password reset for admin
   - #4129: Rewind function
   - #8459: Easier access to unread push messages
   - #7740: Hub mode admin password reset

Several issues are blocking user workflows: the /compact command ignores model switches causing failures, Chinese path handling breaks HTML previews in the desktop app, and whisper loading creates memory overhead. The desktop build also lacks visual compression assets, which impacts functionality. Users are requesting features like a rewind function, admin password reset in Hub mode, and more granular file guard controls.</think>

# QwenPaw Project Digest — 2026-10-30

## 1. Today's Overview

QwenPaw shows high development activity today with **15 issues** (5 open, 10 closed) and **40 PRs** (27 open, 13 merged/closed) updated in the last 24 hours. No new releases were published. The project is actively addressing stability issues in the 2.3.0-beta.1 release, with fixes landing for plugin loading, environment variable masking, and memory handling. Multiple critical bugs affecting the desktop build and channel integrations remain open, indicating ongoing stabilization work before the next stable release.

## 2. Releases

No new releases today. The latest release remains **v2.3.0-beta.1** (released prior to this digest period).

## 3. Project Progress

The following PRs were merged/closed today:

| PR | Author | Description |
|----|--------|-------------|
| [#8497](https://github.com/agentscope-ai/QwenPaw/pull/8497) | lalaliat | fix(plugins): tolerate import cache refresh failures during plugin loading |
| [#5490](https://github.com/agentscope-ai/QwenPaw/pull/5490) | maximilize | feat(console): navigable fullscreen image gallery for chat media |
| [#8358](https://github.com/agentscope-ai/QwenPaw/pull/8358) | AGImentu | fix(providers): honor thinking defaults and declared wire controls |
| [#8253](https://github.com/agentscope-ai/QwenPaw/pull/8253) | rayrayrayraykk | feat(website): add JSON-driven evaluation index |

**Key advancements:**
- Plugin loading resilience improved with import cache refresh tolerance
- Fullscreen image gallery enables navigable media viewing in chat
- Thinking configuration now properly honors provider defaults
- New bilingual evaluation leaderboard at `/evaluation/`

## 4. Community Hot Topics

**Most commented issues:**

| Issue | Comments | Topic |
|-------|----------|-------|
| [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) | 9 | **[Bug] Doom loop: agent repeatedly triggers same tool call** |
| [#8464](https://github.com/agentscope-ai/QwenPaw/issues/8464) | 5 | **[Bug] /compact ignores session-level model switch, uses agent.json active_model** |
| [#8150](https://github.com/agentscope-ai/QwenPaw/issues/8150) | 3 | **[Bug] Feishu inbound图文混发 images silently dropped** |

**Analysis:** The **doom loop** issue (#6116) generates the most discussion, reflecting significant user pain around API token waste when agents get stuck in repetitive tool calls. The **/compact model switching** bug (#8464) is also actively discussed, indicating users rely heavily on manual context compression with model switching in production workflows.

## 5. Bugs & Stability

**Critical bugs reported today:**

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#8500](https://github.com/agentscope-ai/QwenPaw/issues/8500) Auto-Dream silently drops memory when extract fails, checkpoints unusable files | **High** | Open | No |
| [#8488](https://github.com/agentscope-ai/QwenPaw/issues/8488) Desktop build omits visual_compression assets → Visual Compact no-ops | **High** | Open | No |
| [#8473](https://github.com/agentscope-ai/QwenPaw/issues/8473) All backend plugins fail to load in 2.3.0-beta.1 — unguarded importlib.invalidate_caches() | **High** | Closed | — |
| [#8502](https://github.com/agentscope-ai/QwenPaw/issues/8502) Desktop HTML preview fails with Chinese paths | **Medium** | Open | No |
| [#8490](https://github.com/agentscope-ai/QwenPaw/issues/8490) Voice Transcription settings imports whisper (~690 MB RSS, never released) | **Medium** | Open | No |
| [#8486](https://github.com/agentscope-ai/QwenPaw/issues/8486) Console tool-call icon clipped on left edge | **Low** | Open | No |

**Note:** Issue #8473 (plugin loading failure) is closed but represents a significant regression in 2.3.0-beta.1 that was just addressed.

## 6. Feature Requests & Roadmap Signals

**Active enhancement proposals:**

| Issue | Category | Description |
|-------|----------|-------------|
| [#6189](https://github.com/agentscope-ai/QwenPaw/issues/6189) | **Memory** | save_decision() API — structured decision persistence to prevent loss during context compression |
| [#4356](https://github.com/agentscope-ai/QwenPaw/issues/4356) | **Security** | Finer granular control/integration of file guard and tool guard (whitelist support) |
| [#7740](https://github.com/agentscope-ai/QwenPaw/issues/7740) | **Admin** | Hub mode: admin password reset functionality |
| [#4129](https://github.com/agentscope-ai/QwenPaw/issues/4129) | **UX** | Rewind function (like Claude Code /rewind) to try different prompts, fix typos, rollback files |
| [#8459](https://github.com/agentscope-ai/QwenPaw/issues/8459) | **UI** | Easier access to unread push messages in web console |

**Prediction:** The **save_decision() API** (#6189) addresses a well-documented long-context pain point and has clear implementation scope—it is a strong candidate for inclusion in an upcoming release. The **Rewind function** (#4129) and **file guard granularity** (#4356) also align with power-user workflows and may appear as incremental improvements.

## 7. User Feedback Summary

**Pain points identified from recent issues:**
- **Token waste**: Doom loops consume API credits before detection (#6116)
- **Model switching broken**: Manual /compact ignores UI-selected model (#8464)
- **Desktop experience gaps**: Chinese path handling fails in HTML preview (#8502), visual compression assets missing in PyInstaller build (#8488)
- **Memory integrity**: Silent data loss in Auto-Dream when parsing fails (#8500)
- **Resource inefficiency**: Whisper imported unnecessarily (~690 MB) just to check availability (#8490)

**Satisfying progress:**
- Plugin market provenance tracking merged (#8231) — improves third-party plugin update workflows
- Fullscreen image gallery shipped (#5490) — better media inspection UX
- Inline media bounding improved (#8034) — prevents request bloat in long sessions

## 8. Backlog Watch

**Issues/PRs requiring maintainer attention:**

| Item | Age | Status | Concern |
|------|-----|--------|---------|
| [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) Doom loop bug | ~3.5 months | Closed (wontfix) | Low-priority tag may not reflect user impact; 9 comments indicate ongoing pain |
| [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) OpenViking memory plugin | ~7 weeks | Open, Under Review | Large (XXL) first-time contributor PR; needs thorough review |
| [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) PawApp SDK redesign | ~6 weeks | Open | XXXL refactoring PR; significant scope, needs owner assignment |
| [#8499](https://github.com/agentscope-ai/QwenPaw/pull/8499) Local model management plugin extraction | 1 day | Open (WIP) | XXXL change; core architecture change for local models |

**High-priority backlog items:**
- The **doom loop** issue was marked `wontfix` but continues to generate discussion—consider revisiting scope or providing agent-side mitigation guidance
- **PawApp SDK redesign** (#7874) and **local model plugin extraction** (#8499) represent major architectural changes needing clear ownership and timeline

---

*Digest generated from GitHub activity data for 2026-10-30*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to generate a structured project digest for ZeroClaw (github.com/zeroclaw-labs/zeroclaw) based on the provided GitHub data. Let me analyze the data and organize it according to the requested sections.

Let me go through the data:

1. **Issues updated in last 24h**: 50 (open/active: 33, closed: 17)
2. **PRs updated in last 24h**: 50 (open: 44, merged/closed: 6)
3. **New releases**: 0

**Latest Releases**: None

**Latest Issues** (showing top 30 by comment count):
1. #10526 - RFC: Append-only session event history, deterministic state replay, and derived agent streams (CLOSED, 14 comments)
2. #5982 - [Feature]: Per-sender RBAC for multi-tenant agent deployments (OPEN, 11 comments)
3. #10999 - [Task]: Publish and prove Discord plugin installation from a release binary (OPEN, 9 comments)
4. #11418 - [Bug]: "Copy" one-click feature is not working (OPEN, 8 comments)
5. #11416 - [Bug]: Slack "is thinking…" status no longer shown in channel threads since v0.8.5 (OPEN, 6 comments)
6. #10926 - [Bug]: Matrix send_via treats peer user identities as room destinations (OPEN, 5 comments)
7. #9647 - [Bug]: Knowledge graph has no per-agent attribution — any agent reads/mutates another agent's knowledge (OPEN, 5 comments, HIGH severity)
8. #7891 - [Feature]: Add Signal media attachment support (CLOSED, 4 comments)
9. #9394 - [Bug]: gateway.pairing_dashboard is accepted and entirely unread, and pairing codes never expire (OPEN, 4 comments, HIGH severity)


10. #11332 - [Bug]: Skill review and skill creation never run for channel, webhook, or gateway (OPEN, 4 comments)
11. #11336 - [Bug]: `plugin info` and `plugin list --verify` report `[loads]` for a plugin the runtime refuses to register (OPEN, 4 comments)
12. #11360 - [Bug]: the package lock file is readable by other local accounts (OPEN, 4 comments)
13. #11013 - [Tracker]: Unified file intake, resolver, and delivery implementation (OPEN, 3 comments)
14. #11562 - [Bug]: discovery can pair one generation's manifest with another's component during plugin update (CLOSED, 3 comments)
15. #11484 - [Bug]: ZeroCode Agent turns disable repetitive-tool safeguards (CLOSED, 3 comments)
16. #11517 - [Bug]: Web chat: reloading mid-turn drops the user's prompt (CLOSED, 3 comments)
17. #10993 - [Feature]: Complete the public runtime composition boundary (OPEN, 3 comments)
18. #11333 - [Bug]: Skill review tools can't see skills assigned through skill_bundles (OPEN, 3 comments)
19. #10400 - [Feature]: Configurable Telegram unauthorized-sender notice (CLOSED, 2 comments)
20. #10294 - [Bug]: file_write transcripts cannot distinguish creation from overwrite (OPEN, 2 comments)

The issue tracker shows a mix of open and recently closed items across feature requests, bug reports, and trackers. Several security-related issues are flagged as high severity, particularly around knowledge graph isolation and plugin manifest handling. ZeroCode Agent is disabling repetitive-tool safeguards, which represents a potential security regression. Several PRs are flagged as needing author action and are quite large in scope, particularly around session management, configuration, and runtime improvements. A significant dependency update addresses a security vulnerability, while others focus on user-facing enhancements and stability fixes.</think>

# ZeroClaw Project Digest — 2026-10-30

## 1. Today's Overview

ZeroClaw shows **high development activity** with 50 issues and 50 PRs updated in the last 24 hours. The project has no new releases today. A significant architectural RFC (#10526) was recently merged, implementing append-only session event history with deterministic state replay—a foundational change for future agent streaming capabilities. The issue queue is dominated by bug reports (particularly around channel integrations and plugin security), while PRs reflect substantial work on ZeroCode UI enhancements, multi-tenant RBAC, and knowledge graph per-agent attribution. With 44 open PRs and 33 active issues, the project remains in a rapid development cycle targeting the v0.9.0 release.

---

## 2. Releases

**No new releases today.** The tracker indicates v0.9.0 is an upcoming release with several associated issues (e.g., #9394, #11970, #12076, #12095).

---

## 3. Project Progress

### Merged/Closed PRs (Today)

| PR | Title | Status |
|----|-------|--------|
| [#12095](https://github.com/zeroclaw-labs/zeroclaw/pull/12095) | fix(deps): bump pulldown-cmark to 0.13.5 for RUSTSEC-2026-0414 | **Closed** — Security patch for CVE-2026-0414 |
| [#11792](https://github.com/zeroclaw-labs/zeroclaw/pull/11792) | Bug: interrupted `plugin install` leaves staging directory | **Closed** |
| [#11708](https://github.com/zeroclaw-labs/zeroclaw/pull/11708) | Bug: model_routing_config omits action-specific required arguments | **Closed** |
| [#11486](https://github.com/zeroclaw-labs/zeroclaw/pull/11486) | Feature: Make ZeroCode Config save and cancel behavior predictable | **Closed** |
| [#11987](https://github.com/zeroclaw-labs/zeroclaw/pull/11987) | Bug: Inline nosemgrep comments don't stop Semgrep alerts | **Closed** |
| [#11970](https://github.com/zeroclaw-labs/zeroclaw/pull/11970) | Bug: agents delete/rename skip owned-state cascade in gateway-less builds | **Closed** |

### Key Advancements

- **Security fix merged**: Dependency update to resolve RUSTSEC-2026-0414 in pulldown-cmark
- **ZeroCode UX improvements**: Multiple PRs from @Audacity88 advancing config editors, session management, and transcript display
- **Plugin architecture**: Work continues on RPC-based plugin webhook forwarding (#11322, #11320)
- **Knowledge graph security**: PR #9745 adds per-agent attribution and ownership scoping

---

## 4. Community Hot Topics

### Most Active Issues (by comments)

| Issue | Title | Comments | Sentiment |
|-------|-------|----------|-----------|
| [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | RFC: Append-only session event history, deterministic state replay | **14** | ✅ Accepted |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | Per-sender RBAC for multi-tenant agent deployments | **11** | 🔥 High demand |
| [#10999](https://github.com/zeroclaw-labs/zeroclaw/issues/10999) | Discord plugin installation from release binary | **9** | 🔄 In progress |
| [#11418](](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) | "Copy" one-click feature not working | **8** | 🐛 User blocker |
| [#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416) | Slack "is thinking…" status missing since v0.8.5 | **6** | 🐛 Regression |

### Most Active PRs (by activity/importance)

| PR | Title | Status |
|----|-------|--------|
| [#11921](https://github.com/zeroclaw-labs/zeroclaw/pull/11921) | feat(session): implement append-only session event history | **Open** — Core architecture |
| [#11322](https://github.com/zeroclaw-labs/zeroclaw/pull/11322) | feat(gateway): forward plugin webhooks over RPC | **Open** — Plugin system |
| [#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) | fix(memory): per-agent attribution for knowledge graph | **Open** — Security critical |
| [#11230](https://github.com/zeroclaw-labs/zeroclaw/pull/11230) | fix(runtime): withhold session-data tools from non-admin principals | **Open** — Security critical |
| [#11727](https://github.com/zeroclaw-labs/zeroclaw/pull/11727) | feat(zerocode): reopen open sessions when zerocode restarts | **Open** — UX |

### Underlying Needs Analysis

- **Multi-tenancy & security**: Strong community interest in RBAC (#5982), per-agent knowledge isolation (#9647), and principal-scoped session tools (#11230)
- **Channel reliability**: Users report regressions in Slack status indicators (#11416), Matrix routing (#10926), and Discord plugin deployment (#10999)
- **UX consistency**: ZeroCode copy functionality (#11418) and config save behavior (#11486) are blocking workflow

---

## 5. Bugs & Stability

### Critical/High-Severity Bugs

| Issue | Severity | Component | Status | Fix PR? |
|-------|----------|-----------|--------|---------|
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | **S0** — Knowledge graph has no per-agent attribution | memory | Open | [#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) in progress |
| [#9394](https://github.com/zeroclaw-labs/zeroclaw/issues/9394) | **S0** — gateway.pairing_dashboard unread, codes never expire | config | Open | No |
| [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) | **S2** — Skill review/creation not running for web channels | runtime | Open | No |
| [#11418](](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) | **S1** — Copy button not working (workflow blocked) | zerocode/tui | Open | No |
| [#11484](https://github.com/zeroclaw-labs/zeroclaw/issues/11484) | **S2** — ZeroCode Agent disables repetitive-tool safeguards | zerocode | Closed | — |
| [#11517](https://github.com/zeroclaw-labs/zeroclaw/issues/11517) | **S2** — Web chat reload drops user prompt | gateway | Closed | — |

### Security Issues

- **#9647**: Knowledge graph is globally shared—any agent can read/mutate another's data (critical)
- **#9394**: Pairing dashboard config accepted but ignored; codes don't expire (critical)
- **#11360**: Package lock file world-readable; local privilege escalation risk

---

## 6. Feature Requests & Roadmap Signals

### High-Interest Feature Requests

| Issue | Title | Priority | Signals Next Release |
|-------|-------|----------|---------------------|
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | Per-sender RBAC for multi-tenant | p2 | v0.9.0 likely |
| [#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993) | Complete public runtime composition boundary | p2 | v0.9.0 likely |
| [#7891](https://github.com/zeroclaw-labs/zeroclaw/issues/7891) | Signal media attachment support | p2 | Under consideration |
| [#11013](https://github.com/zeroclaw-labs/zeroclaw/issues/11013) | Unified file intake/resolver | p2 | Implementation tracker active |

### Roadmap Indicators

- **Session event history** (#10526, #11921) landed—expect deterministic replay and derived agent streams
- **Plugin RPC** (#11320, #11322) in progress—webhooks will route through core RPC
- **Per-agent knowledge** (#9647, #9745) being addressed—ownership model incoming
- **Cost override** (#11589) merged—operators can override exceeded limits

---

## 7. User Feedback Summary

### Pain Points

1. **ZeroCode copy failure**: "Copy button does absolutely nothing for my clipboard" (#11418)—S1 workflow blocker
2. **Web chat data loss**: Reloading mid-turn drops user prompt from screen and localStorage (#11517)
3. **Slack status regression**: "<app> is thinking…" no longer appears in channel threads (#11416)
4. **Skill isolation broken**: Skill review tools can't see skills in bundles (#11333)
5. **Plugin installation fragility**: Interrupted installs leave orphaned staging directories (#11792)

### Positive Signals

- Discord plugin now verified working from release binary (#10999)—channel maturity
- ZeroCode config editors now have consistent save/cancel behavior (#11486)
- Session reopening on restart implemented (#11727)—persistence improved

---

## 8. Backlog Watch

### Unanswered Important Issues (no recent activity)

| Issue | Title | Age | Status |
|-------|-------|-----|--------|
| [#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926) | Matrix send_via treats peer identities as room destinations | 2026-09-17 | Open, accepted |
| [#10294](https://github.com/zeroclaw-labs/zeroclaw/issues/10294) | file_write can't distinguish create vs overwrite | 2026-08-24 | Open |
| [#10162](https://github.com/zeroclaw-labs/zeroclaw/issues/10162) | plugin install persists before config seeding | 2026-08-20 | Open, in progress |
| [#11358](https://github.com/zeroclaw-labs/zeroclaw/issues/11358) | plugin migrate moves without package lock | 2026-10-01 | Open, accepted |

### PRs Needing Maintainer Review

| PR | Title | Waiting |
|----|-------|---------|
| [#11265](https://github.com/zeroclaw-labs/zeroclaw/pull/11265) | zeroclaw user commands for roster password lifecycle | Needs author action |
| [#11301](https://github.com/zeroclaw-labs/zeroclaw/pull/11301) | share durable committed-rename recovery | Needs author action |
| [#11313](https://github.com/zeroclaw-labs/zeroclaw/pull/11313) | publish authorization edits to running daemon | Needs maintainer review |

---

*Generated from GitHub data for 2026-10-30. All links point to https://github.com/zeroclaw-labs/zeroclaw.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*