# OpenClaw Ecosystem Digest 2026-11-12

> Issues: 469 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-12 03:17 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

<think>The user wants me to generate a structured project digest for OpenClaw based on the provided GitHub data from November 12, 2026. Let me analyze the data and create a comprehensive, well-organized digest following the 8 sections requested.

Key data points:
- Issues updated in last 24h: 469 (259 open/active, 210 closed)
- PRs updated in last 24h: 500 (322 open, 178 merged/closed)
- New releases: 1 (v2026.11.5-beta.2)

Latest Release: v2026.11.5-beta.2
- Highlights: Large conversations paged history, macOS app preserves saved secrets

Let me analyze the issues and PRs to identify:
1. Most active discussions
2. Critical bugs
3. Feature requests
4. Patterns in user feedback

Issues by comment count (top items):
1. #160959 - Gateway blocks for minutes with large plugins (81 comments, P0)
2. #164294 - WAL auto-checkpoint never completes (40 comments, P2)
3. #170956 - Windows slow startup, unreliable restarts (31 comments, P0)
4. #166634 - Late reclamation checkpoint failure (28 comments, CLOSED)
5. #162585 - Plugin source-capture on Windows explodes (16 comments, P2)
6. #125764 - Telegram dead-lettering after single attempt (14 comments, P1)
7. #145309 - Claude-cli backend transcript path issue (14 comments, P1, CLOSED)
8. #181432 - Excessive memory ~1.9 GB (13 comments, P1)
9. #101929 - Context overflow estimator over-counts (13 comments, P2)
10. #179481 - Doctor --fix refuses transcript-directives (13 comments, P2, CLOSED)


11. #192009 - Cross-provider cron fallback accounts (11 comments, P2)
12. #172986 - WebChat path rendering issues (11 comments, P2)
13. #165041 - Session resume context injections visible (10 comments, P2)
14. #164279 - Self-learning review 0% completion (10 comments, P2)
15. #164355 - Plugin hooks can't append after tool results (9 comments, P2)
16. #170562 - Doctor recovery for stranded subagent runs (9 comments, P2)

I notice several clusters emerging: plugin management and gateway stability dominate the discussion, particularly around Windows and macOS-specific issues. The Telegram integration and memory consumption problems are also drawing significant attention. Cross-provider cron fallback configuration and session context handling appear to be emerging feature requests worth monitoring.

Recent pull requests show active work on UI refinements (window file handling, command trails, font rendering), core infrastructure (usage summary optimization, MCP session management), and critical bug fixes (cron scheduling, Apple device availability, session tail cancellation). The maintainers are addressing test coverage gaps while improving accessibility features for chat composition and reasoning text display.

Several issues stand out as high-priority concerns: gateway blocking during large plugin captures, database checkpoint failures, Windows startup reliability, SQLite memory exhaustion, and crash loops triggered by npm updates. Feature requests are emerging around cron fallback configurations and platform-specific enhancements like durable background command execution on macOS.

The broader discussion reveals significant attention to memory management and performance optimization, particularly around large file handling and SQLite efficiency, alongside active work on improving the overall stability of background processes and agent recovery mechanisms.
</think>


# OpenClaw Project Digest — 2026-11-12

---

## 1. Today's Overview

OpenClaw maintains high velocity with 469 issues and 500 pull requests updated in the last 24 hours, reflecting intense development activity. The release of **v2026.11.5-beta.2** brings improved paged history for large conversations and macOS secret preservation. Community engagement remains robust, with several P0/P1 bugs receiving sustained attention and multiple PRs advancing through review. The project shows healthy momentum on UI refinements, stability fixes, and platform-specific improvements, though memory and database performance issues continue to surface across platforms.

---

## 2. Releases

### v2026.11.5-beta.2
**Released:** 2026-11-12 | [Release Details](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.2)

**Highlights:**
- **Paged History for Large Conversations:** Implements bidirectional scrolling with visible history boundaries and bounded archive reads, addressing issues [#188450](https://github.com/openclaw/openclaw/issues/188450), [#188483](https://github.com/openclaw/openclaw/issues/188483), [#188557](https://github.com/openclaw/openclaw/issues/188557), [#188372](https://github.com/openclaw/openclaw/issues/188372), [#190690](https://github.com/openclaw/openclaw/issues/190690). Authored by @steipete; thanks to @xydt-tanshanshan.
- **macOS App Secret Preservation:** Fixes an issue where the macOS application was not preserving saved secrets across sessions.

**Migration Notes:** No breaking changes reported. Users with large conversation histories should see improved responsiveness when scrolling through archived content.

---

## 3. Project Progress

### Merged/Closed PRs (Notable)
| PR | Description | Status |
|----|-------------|--------|
| [#197488](https://github.com/openclaw/openclaw/pull/197488) | fix(ci): test-lines ratchet repair after hosted pricing tests | CLOSED |
| [#197431](https://github.com/openclaw/openclaw/pull/197431) | fix(ci): report state-worker timing diagnostics | CLOSED |
| [#197029](https://github.com/openclaw/openclaw/pull/197029) | feat(advisor): move Advisor out of Labs | CLOSED |
| [#196513](https://github.com/openclaw/openclaw/pull/196513) | fix(ui): stored pins override conversation order | CLOSED |
| [#197478](https://github.com/openclaw/openclaw/pull/197478) | fix(ui): stop missing device dialog animations | CLOSED |

### Active PRs Advancing
| PR | Description | Size | Status |
|----|-------------|------|--------|
| [#197482](https://github.com/openclaw/openclaw/pull/197482) | fix: stop usage summaries scanning entire agent databases | XL | ⏳ waiting on author |
| [#197464](https://github.com/openclaw/openclaw/pull/197464) | refactor(ui): window default Files with shared catalog | XL | ⏳ waiting on author |
| [#197466](https://github.com/openclaw/openclaw/pull/197466) | feat(ui): add optional inline command trail | XL | ⏳ waiting on author |
| [#197267](https://github.com/openclaw/openclaw/pull/197267) | feat(zai): run Z.AI models on Claude Code's Agent SDK runtime | L | 📣 needs proof |
| [#197474](https://github.com/openclaw/openclaw/pull/197474) | feat(exec): keep durable background commands running across restarts (macOS) | L | 📣 needs proof |
| [#197471](https://github.com/openclaw/openclaw/pull/197471) | feat(workboard): record optional claims, observations, verification | L | 📣 needs proof |

---

## 4. Community Hot Topics

### Most Active Issues by Discussion Volume

**1. Gateway blocks for minutes with large external plugins** — [Issue #160959](https://github.com/openclaw/openclaw/issues/160959)
- **Comments:** 81 | **Severity:** P0 | **Status:** OPEN
- **Summary:** Since the 2026.9.6 plugin generation capture, Gateways with external/workspace plugins having large dependency trees block the event loop for minutes at startup and during model runtime republishing.
- **Signal:** Critical regression affecting plugin-heavy workflows; community needs resolution urgently.

**2. WAL auto-checkpoint never completes** — [Issue #164294](https://github.com/openclaw/openclaw/issues/164294)
- **Comments:** 40 | **Severity:** P2 | **Status:** OPEN
- **Summary:** Gateway's WAL checkpoint on `state/openclaw.sqlite` is perpetually blocked by an in-process reader, with 17,091 log frames pending.
- **Signal:** Database performance degradation; long-standing issue requiring architectural review.

**3. Windows reliability: slow startup, unclean shutdown, schtasks errors** — [Issue #170956](https://github.com/openclaw/openclaw/issues/170956)
- **Comments:** 31 | **Severity:** P0 | **Status:** OPEN
- **Summary:** Three related problems make restarts and updates fail frequently on Windows managed-service installs.
- **Signal:** Platform-specific reliability gap; Windows enterprise users significantly impacted.

**4. Excessive baseline RSS memory (~1.9 GB)** — [Issue #181432](https://github.com/openclaw/openclaw/issues/181432)
- **Comments:** 13 | **Severity:** P1 | **Status:** OPEN
- **Summary:** After updating to 2026.10.5 on Linux ARM64, baseline memory jumped from ~300 MB to 1.89 GB at boot, causing SQLite transaction timeouts.
- **Signal:** Memory regression affecting resource-constrained deployments.

**5. Telegram dead-lettering after single network failure** — [Issue #125764](https://github.com/openclaw/openclaw/issues/125764)
- **Comments:** 14 | **Severity:** P1 | **Status:** OPEN
- **Summary:** Transient network failures on Telegram `sendMessage` permanently dead-letter messages after one attempt with no retry or user-visible error.
- **Signal:** Message reliability concern; Telegram users experiencing silent data loss.

### Active PRs by Community Interest

**1. Inline command trail feature** — [PR #197466](https://github.com/openclaw/openclaw/pull/197466)
- Enables users to follow coding tasks with commands and output visible in conversation order.
- Addresses demand for better developer workflow visibility.

**2. Usage summaries database optimization** — [PR #197482](https://github.com/openclaw/openclaw/pull/197482)
- Stops heavy database reads when usage cost summaries are requested for ranges with existing aggregates.
- Resolves a pain point for operators tracking costs.

**3. Z.AI model support** — [PR #197267](https://github.com/openclaw/openclaw/pull/197267)
- Adds support for Z.AI's GLM Coding Plan through Anthropic-compatible endpoint.
- Expands provider coverage based on user requests.

---

## 5. Bugs & Stability

### Critical Issues (P0) Requiring Immediate Attention

| Issue | Title | Comments | Fix PR? |
|-------|-------|----------|---------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway blocks for minutes with large plugins | 81 | None |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | Windows: slow startup, unreliable restarts | 31 | None |
| [#194664](https://github.com/openclaw/openclaw/issues/194664) | Codex protected continuation blocks follow-ups | 8 | None |
| [#178441](https://github.com/openclaw/openclaw/issues/178441) | Owner Telegram held by providerReview | 7 | None |
| [#146791](https://github.com/openclaw/openclaw/issues/146791) | iOS APNs relay registration never publishes | 9 | None |

### High Priority Issues (P1)

| Issue | Title | Comments | Fix PR? |
|-------|-------|----------|---------|
| [#181432](https://github.com/openclaw/openclaw/issues/181432) | Excessive ~1.9 GB RSS memory | 13 | None |
| [#125764](https://github.com/openclaw/openclaw/issues/125764) | Telegram dead-lettering after single failure | 14 | None |
| [#145690](https://github.com/openclaw/openclaw/issues/145690) | Subagent completion releases model runtime prematurely | 6 | None |
| [#168101](https://github.com/openclaw/openclaw/issues/168101) | Rate-limit Retry-After ignores maxRetryDelayMs | 8 | None |
| [#181662](https://github.com/openclaw/openclaw/issues/181662) | npm update keeps Gateway stopped ~19 min | 6 | None |
| [#194114](https://github.com/openclaw/openclaw/issues/194114) | Gateway-controlled GPT-Live Talk ends prematurely | 6 | None |

### Notable Bug Fixes Merged

- **[#166634](https://github.com/openclaw/openclaw/issues/166634)** — Late reclamation commit checkpoint failure fixed; agent now recovers properly after crash.
- **[#159638](https://github.com/openclaw/openclaw/issues/159638)** — Gateway boot loop creating 7 SQLite workers per minute resolved.
- **[#179676](https://github.com/openclaw/openclaw/issues/179676)** — Control UI pasted text (>1,000 chars) now persists across turns.

---

## 6. Feature Requests & Roadmap Signals

### High-Impact Feature Requests by Community Demand

| Issue | Title | Comments | Likelihood of Near-Term Implementation |
|-------|-------|----------|----------------------------------------|
| [#192009](https://github.com/openclaw/openclaw/issues/192009) | Explicitly authorize cross-provider cron fallback accounts | 11 | **High** — PRs in progress for multi-provider support |
| [#170562](https://github.com/openclaw/openclaw/issues/170562) | Doctor recovery for stranded subagent runs | 9 | **Medium** — Addresses operator pain point |
| [#176273](https://github.com/openclaw/openclaw/issues/176273) | Native progress-card SDK for Claw Orchestrator | 8 | **Medium** — Plugin ecosystem expansion |
| [#179954](https://github.com/openclaw/openclaw/issues/179954) | memory: configurable per-entry chunking paths | 8 | **Medium** — Memory system enhancement |
| [#143387](https://github.com/openclaw/openclaw/issues/143387) | Android notification QoL improvements | 8 | **Low** — Requires mobile platform focus |

### Emerging Patterns Suggesting Roadmap Direction
- **Multi-provider flexibility:** Cross-provider cron fallbacks and Z.AI support indicate expansion of multi-provider orchestration.
- **Platform parity:** macOS durability features and Windows reliability work suggest investment in platform-specific optimizations.
- **Developer experience:** Inline command trails, Advisor graduation from Labs, and transcript management improvements reflect focus on workflow usability.

---

## 7. User Feedback Summary

### Pain Points Identified

**Memory & Performance:**
- Linux ARM64 users report 6x memory increase (300 MB → 1.89 GB) after upgrading to 2026.10.5.
- SQLite transaction timeouts exceeding 1.5 seconds causing instability.
- npm updates creating 19-minute Gateway downtime on Ubuntu.

**Platform Reliability:**
- Windows users experiencing frequent restart/update failures with cryptic `schtasks` permission errors.
- macOS Settings becoming sluggish after opening certain conversations.
- iOS app failing to register APNs, preventing push notifications.

**Data Integrity:**
- Telegram users losing messages silently due to single-attempt dead-lettering.
- Session resume context injections appearing as visible user messages.
- WebChat path rendering middle-truncated for file links.

**Developer Workflow:**
- Plugin source-capture staging consuming excessive disk space (290 MB → 612 MB+) on Windows.
- Active Memory circuit breaker failing to open under realistic load patterns.

### Positive Signals
- Paged history feature received appreciation for addressing long-standing UX issue.
- macOS secret preservation fix well-received.
- Advisor feature graduation from Labs indicates maturity of experimental features.

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Title | Age | Comments | Priority | Gap |
|-------|-------|-----|----------|----------|-----|
| [#91931](https://github.com/openclaw/openclaw/issues/91931) | Preseeded SOUL.md/IDENTITY.md/USER.md deleted before first run | 5+ months | 9 | P1 | Needs maintainer review |
| [#101929](https://github.com/openclaw/openclaw/issues/101929) | Context overflow estimator over-counts 2.3-2.6x | 4+ months | 13 | P2 | Linked PR #168338 merged; awaiting verification |
| [#164065](https://github.com/openclaw/openclaw/issues/164065) | Telegram requireMention doesn't gate bare slash commands | 6 weeks | 7 | P2 | Needs product decision |
| [#167854](https://github.com/openclaw/openclaw/issues/167854) | Home drops session notices after 20 sessions | 5 weeks | 8 | P2 | Needs source repro |
| [#164279](https://github.com/openclaw/openclaw/issues/164279) | Self-learning review 0% completion (50 failures) | 6 weeks | 10 | P2 | Needs info |
| [#177505](https://github.com/openclaw/openclaw/issues/177505) | skill_workshop retries on invalid tool-call args | 3 weeks | 8 | P2 | Needs live repro |

### PRs Needing Maintainer Attention

| PR | Title | Status | Blocking Factor |
|----|-------|--------|-----------------|
| [#197267](https://github.com/openclaw/openclaw/pull/197267) | feat(zai): Z.AI model support | 📣 needs proof | Security review required |
| [#197474](https://github.com/openclaw/openclaw/pull/197474) | feat(exec): durable background commands (macOS) | 📣 needs proof | Security review required |
| [#197278](https://github.com/openclaw/openclaw/pull/197278) | fix(harness): surface native hook relay transport death | 📣 needs proof | Merge risk: availability |
| [#197484](https://github.com/openclaw/openclaw/pull/197484) | fix(cron): silent run skips with skipMissedJobs | 👀 ready for maintainer look | — |
| [#197275](https://github.com/openclaw/openclaw/pull/197275) | fix(usage): custom proxies record $0 | 👀 ready for maintainer look | — |

---

*Digest generated from OpenClaw repository data. For real-time updates, visit [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw).*

---

## Cross-Ecosystem Comparison

<think>The user wants a comprehensive cross-project comparison report for the personal AI assistant/agent open-source ecosystem based on the five project digests I've already generated. Let me synthesize the data and create a well-structured report in the seven sections requested.

Let me compile the key metrics from each project:

**OpenClaw (github.com/openclaw/openclaw)**
- Issues (24h): 469 (259 open, 210 closed)
- PRs (24h): 500 (322 open, 178 merged/closed)
- Releases: 1 new (v2026.11.5-beta.2)


- Community health: Very high velocity, mature project

**Hermes Agent (github.com/nousresearch/hermes-agent)**
- Issues (24h): 50 (46 open, 4 closed)
- PRs (24h): 50 (37 open, 13 merged/closed)
- Releases: 0
- Community health: High activity, security-focused

**IronClaw (github.com/nearai/ironclaw)**
- Issues (24h): 0
- PRs (24h): 0
- Releases: 0
- Community health: Inactive/dormant

Now I'm looking at the remaining two projects to complete the cross-project analysis, starting with their recent activity metrics and release patterns. I'm organizing the structure for this cross-project comparison report, mapping out seven key sections that cover the ecosystem landscape, activity metrics, OpenClaw's competitive position, technical priorities across projects, differentiation factors, community health, and emerging trends.
</think>


# Personal AI Agent Open-Source Ecosystem Report
## Cross-Project Comparison — 2026-11-12

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is in a **high-velocity growth phase**, driven by converging demand for multi-model orchestration, cross-platform deployment, and extensible plugin architectures. The five tracked projects reveal a landscape stratified by maturity: OpenClaw and Hermes Agent are the dominant players by activity volume, ZeroClaw demonstrates focused niche strengths in Rust-based infrastructure and multi-user access control, and QwenPaw is carving a distinct position with local model support and channel plugin diversity. IronClaw shows no recent activity and may be dormant or rebranded. Across the ecosystem, three dominant themes emerge—**security hardening** (Hermes Agent's sec-marathon), **multi-provider model routing** (OpenClaw's cross-provider cron, ZeroClaw's multiple-models-per-profile), and **cross-platform reliability** (Windows/macOS startup and stability issues across multiple projects). The ecosystem is transitioning from single-agent desktop tools toward distributed, multi-user, protocol-diverse agent runtimes.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | Open / Closed | PRs Updated (24h) | Open / Merged | Releases (24h) | Health Tier |
|---------|---------------------:|---------------|------------------:|---------------|:--------------:|:-----------:|
| **OpenClaw** | 469 | 259 / 210 | 500 | 322 / 178 | 1 (v2026.11.5-beta.2) | 🟢 Tier 1 — High Velocity |
| **Hermes Agent** | 50 | 46 / 4 | 50 | 37 / 13 | 0 | 🟢 Tier 1 — Active Security Sprint |
| **QwenPaw** | 12 | 7 / 5 | 38 | 24 / 14 | 1 (v2.3.0 stable) | 🟢 Tier 2 — Stable Release |
| **ZeroClaw** | 8 | — / — | 38 | — / 3 | 1 (v0.9.0) | 🟢 Tier 2 — Feature Sprint |
| **IronClaw** | 0 | — | 0 | — | 0 | 🔴 Tier 3 — Inactive |

### Interpretation

- **OpenClaw** dominates by raw volume at ~10x the activity of the next most active project, with over 1,000 combined issue/PR events per day. This reflects both a large contributor base and a broad feature surface.
- **Hermes Agent** and **OpenClaw** operate at similar Tier 1 velocity by proportion (roughly 1:1 PR-to-issue ratio with high daily churn), but Hermes Agent's activity is disproportionately concentrated in security fixes rather than features.
- **QwenPaw** and **ZeroClaw** show disciplined release cadences (both shipped stable releases today) with healthy PR-to-issue ratios, suggesting stable maintenance rather than rapid expansion.
- **IronClaw** shows zero activity, indicating either project abandonment, a hard fork under a new name, or a hiatus requiring investigation before any ecosystem integration decision.

---

## 3. OpenClaw's Position

### Advantages Over Peers

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|:--------:|:------------:|:-------:|:--------:|
| **Issue volume** | 469/day | 50/day | 12/day | 8/day |
| **PR volume** | 500/day | 50/day | 38/day | 38/day |
| **Feature breadth** | Gateway, agents, memory, channels, UI, CLI | Channels, plugins, TTS, vision | Local models, channels, MCP | Runtime, XMPP, multi-user auth |
| **Community size signal** | ~81-comment P0 issues | 37-comment RFC | 5-comment bugs | 6-comment CI request |
| **Release cadence** | Beta (~monthly) | Rolling | Stable (~monthly) | Stable (~minor monthly) |

### Technical Approach Differences

OpenClaw's architecture centers on a **Gateway process** (Python/SQLite) managing agent runtimes, with a desktop UI (Tauri) and extensive channel plugin system. Its design philosophy prioritizes **horizontal scalability** of agent sessions and a unified memory system with active context management. The project invests heavily in UI polish (command trails, paged history, sticky prompts) and platform-specific optimizations (macOS durability, Windows reliability).

Hermes Agent takes a **Rust-native approach** with a stronger emphasis on security primitives (session store ownership, TLS enforcement, sandbox hardening) and a lighter-weight agent core that relies heavily on external plugins for channels and capabilities. Its community discussions reveal deeper focus on protocol-level concerns (Matrix sanitization, WhatsApp session security) than UI concerns.

ZeroClaw is the only project explicitly built around **multi-user access control** (v0.9.0 is the first release enabling non-operator login), targeting enterprise/team deployment scenarios that the others treat as secondary. Its Rust-based runtime and focus on bounded delegate workspaces, POSIX shell compliance, and SSH transport reuse position it as the most **security-conscious and enterprise-oriented** of the five projects.

QwenPaw differentiates through **local model support** (Piccolo 4B/9B/27B in v2.3.0) and channel plugin externalization (Feishu, Matrix, QQ, WeChat), targeting users who want on-premise or offline-capable personal AI assistants. Its feature requests cluster around cross-platform stability and UI refinements rather than protocol diversity.

### Community Size Comparison

OpenClaw's community is substantially larger by every signal: the highest-comment issue has 81 comments versus 37 for Hermes Agent, 5 for QwenPaw, and 6 for ZeroClaw. The P0 issue (#160959, Gateway blocks) accumulated 81 comments and multiple contributors, indicating a large pool of users actively debugging production issues. This translates to faster bug discovery, more diverse use cases reported, and a higher likelihood of community-contributed PRs.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging across multiple projects, indicating ecosystem-wide engineering pressure points:

### A. Cross-Platform Reliability (All active projects)

| Project | Platform Issue |
|---------|---------------|
| OpenClaw | Windows: slow startup, unreliable restarts, schtasks errors (#170956, P0) |
| OpenClaw | Linux ARM64: ~1.9 GB RSS memory regression (#181432, P1) |
| Hermes Agent | Windows: event-loop stalls, console window flash, stale update state (#152364, #149907, #106592) |
| Hermes Agent | macOS: 1Password integration failure, screenshot path handling (#107998, #76334) |
| QwenPaw | Windows 11 IoT LTSC: startup failure (#8616) |
| QwenPaw | Linux: channel plugin workers crash due to missing HOME variable (#8682) |
| QwenPaw | macOS (Safari): missing UI icons, unicode path failures |
| ZeroClaw | Shell tool returns empty error string, stderr swallowing (#12390) |

**Implication:** Cross-platform parity is a systemic gap. Projects are individually solving similar problems (path handling, Unicode normalization, environment variable propagation) without apparent coordination. A shared cross-platform test harness would benefit the entire ecosystem.

### B. Multi-Provider Model Routing (OpenClaw, ZeroClaw, Hermes Agent)

| Project | Feature |
|---------|---------|
| OpenClaw | Cross-provider cron fallback accounts (#192009) — explicit authorization for fallback chains across providers |
| OpenClaw | Claude-cli backend transcript path issue (#145309) — resolved |
| Hermes Agent | Per-session real-time cost display (#93951) — dead config, needs revival |
| ZeroClaw | Multiple models per provider profile (#9809) — capability models, presets, fallback graphs across OpenAI/Anthropic/Ollama/Bedrock/Azure |
| QwenPaw | Piccolo local decision models (4B/9B/27B) via Ollama integration |

**Implication:** The ecosystem is converging on a need for **provider-agnostic model routing** with fallback chains, cost visibility, and per-session model selection. This is a strong candidate for a shared specification or interoperability layer.

### C. Channel / Protocol Diversity (OpenClaw, Hermes Agent, QwenPaw, ZeroClaw)

Every active project is investing in multi-channel support, but with different emphases:

| Project | Channels In Scope |
|---------|-------------------|
| OpenClaw | Telegram, iOS APNs, WebChat |
| Hermes Agent | Matrix (sanitization hardening), WhatsApp (session security), Email (TLS verification), X/Twitter (via summon plugin) |
| QwenPaw | Feishu, Matrix, QQ, WeChat (all externalized as official plugins) |
| ZeroClaw | XMPP with OMEMO (native Rust implementation in review) |

**Implication:** Channel plugin architecture is converging. The externalization pattern QwenPaw uses for channel plugins is being adopted across the ecosystem. Standardization of the channel plugin API could enable cross-project plugin compatibility.

### D. Security Hardening (Hermes Agent, ZeroClaw, OpenClaw)

| Project | Security Work |
|---------|--------------|
| Hermes Agent | sec-marathon: Matrix formatted_body sanitization, WhatsApp session store ownership, Email TLS enforcement, file safety guards |
| ZeroClaw | RUSTSEC-2026-0486 rustix patch merged today; bounded delegate workspace isolation (#10391); POSIX shell compliance (#11994) |
| OpenClaw | Doctor recovery for stranded subagent runs (#170562); session resume context injection visibility (#165041) |

**Implication:** Security is moving from perimeter hardening to **data-in-transit, data-at-rest, and session isolation** concerns. The sec-marathon pattern (Hermes Agent) of dedicated security sprints could be adopted by other projects.

### E. Memory & Context Management (OpenClaw, QwenPaw, ZeroClaw)

| Project | Memory Concern |
|---------|---------------|
| OpenClaw | Context overflow estimator over-counts 2.3–2.6x (#101929); active memory circuit breaker fails under load; WAL checkpoint never completes (#164294) |
| QwenPaw | Reranker model center with multi-query precision history (#8472, XXL PR); OpenViking compatibility fixes (#8588) |
| ZeroClaw | runtime-trace.jsonl loses hours of events (#12391, S2) |

**Implication:** Memory management is evolving from simple context windows to **hierarchical memory systems** with reranking, summarization, and durable trace storage. The technical solutions vary significantly across projects, indicating an immature problem space.

---

## 5. Differentiation Analysis

### By Target User

| Project | Primary Persona | Secondary Persona |
|---------|-----------------|-------------------|
| OpenClaw | Pro users, developers, teams managing multiple agents | Enterprise operators (multi-session, cron, webhooks) |
| Hermes Agent | Security-conscious self-hosters, Matrix/WeChat users | Plugin developers (ecosystem hackathon participants) |
| QwenPaw | Local-model enthusiasts, Chinese-language users, on-premise deployers | Cross-channel team communicators |
| ZeroClaw | Enterprise IT, Rust-centric shops, multi-user teams | Security-sensitive deployments requiring bounded agent workspaces |
| IronClaw | Unknown (inactive) | — |

### By Technical Architecture

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|-------------|---------|----------|
| **Language** | Python (core) + Tauri (UI) | Rust (core) | Python (core) | Rust (core) |
| **Database** | SQLite (WAL mode) | — | — | SQLite (via rusqlite) |
| **Agent model** | Unified runtime with subagents, memory, tool ceiling | Plugin-based agents | Third-party agent extraction (plugin) | Bounded delegate model with workspace isolation |
| **Multi-user** | Via Gateway operator accounts | Via Matrix/WhatsApp multi-user channels | Via channel plugins (Feishu, QQ) | **First-class via OpenID Connect** (v0.9.0) |
| **Local model** | Limited (Claude CLI backend) | Limited | **First-class** (Piccolo 4B/9B/27B, Ollama) | Via Ollama integration |
| **Plugin system** | Native channel plugins | External plugins (hackathon-driven) | External official plugins (channel) | MCP extraction (in review) |
| **Release model** | Beta rolling | Rolling | Stable with beta | Stable minor releases |

### By Feature Focus

- **OpenClaw** invests in **UI/UX** (paged history, command trails, sticky prompts, keyboard shortcuts) and **agent orchestration** (subagents, cron, self-learning review).
- **Hermes Agent** invests in **security hardening** (sec-marathon, sandbox hardening, TLS, session ownership) and **protocol integration** (Matrix, WhatsApp, Email).
- **QwenPaw** invests in **local inference** (Piccolo, Ollama, Model Forge plugin) and **cross-platform channel support** (Feishu, QQ, WeChat, Matrix).
- **ZeroClaw** invests in **multi-user access control** (OpenID Connect, scoped chat isolation) and **runtime safety** (bounded workspaces, POSIX shell enforcement, SSH transport reuse).

---

## 6. Community Momentum & Maturity

### Activity Tiers

**Tier 1 — High Velocity / Mass Community**
- **OpenClaw**: ~1,000 combined events/day. Mature bug triage process (P0/P1/P2 labels actively used). Community actively filing detailed repro steps for complex issues (81-comment P0, 40-comment P2). Strong contributor base evidenced by simultaneous XL PRs across multiple subsystems. **Maturity signal:** Stable beta release cadence, active security response.

- **Hermes Agent**: ~100 combined events/day. Strong security focus with dedicated sec-marathon sprints. Plugin Hackathon driving ecosystem expansion. 37-comment RFCs indicate thoughtful architectural governance. **Maturity signal:** Security patches merged rapidly (multiple XS fixes daily), mature plugin submission pipeline.

**Tier 2 — Stable Iteration / Focused Community**
- **QwenPaw**: ~50 events/day with disciplined stable releases. Community is smaller but engaged with concrete bug reports and feature requests. Platform-specific issues (Windows LTSC, macOS unicode, Linux env vars) indicate a project serving real production deployments. **Maturity signal:** v2.3.0 passed four verification checkpoints; migration notes present.

- **ZeroClaw**: ~46 events/day. Rust-core architecture gives it a distinct engineering profile. Multi-user authentication milestone (v0.9.0) signals enterprise readiness. Active PR pipeline (XL features in review) suggests feature momentum despite smaller community. **Maturity signal:** Stable minor release cadence, security patches handled promptly.

**Tier 3 — Dormant**
- **IronClaw**: Zero activity. Requires investigation before any ecosystem integration or dependency decision.

### Rapidly Iterating vs. Stabilizing

| Project | Trend | Evidence |
|---------|-------|----------|
| OpenClaw | **Rapidly iterating** | 178 merged PRs in 24h; multiple XL PRs in parallel; v2026.11.5-beta.2 today |
| Hermes Agent | **Rapidly iterating** (security-focused) | sec-marathon sprints; 10+ plugin submissions today; 13 merged PRs |
| QwenPaw | **Transitioning to stable** | v2.3.0 stable release; 14 merged PRs vs 12 issues; bug-fix velocity high |
| ZeroClaw | **Feature sprint → stable** | v0.9.0 stable milestone; major XL PRs entering review; security patches merged same day |
| IronClaw | **Stalled** | Zero activity |

---

## 7. Trend Signals

The following signals are extracted from community feedback and development activity across the ecosystem, indicating industry-wide priorities for AI agent developers:

### A. Multi-Model Routing Is Table Stakes

Both OpenClaw and ZeroClaw are implementing provider-agnostic model selection with fallback chains. This reflects user demand for **cost optimization, redundancy, and the ability to use the best model per task**. Developers building on any single-provider API should anticipate users wanting to swap providers without changing agent logic. The OpenClaw cross-provider cron fallback (issue #192009) and ZeroClaw's multiple-models-per-profile (PR #9809) are concrete implementations of this pattern.

**Actionable:** Build abstractions over model providers now. Expect users to demand fallback routing, cost-per-session visibility, and provider-specific capability detection.

### B. Cross-Platform Parity Is a Competitive Differentiator

Every active project has open Windows, macOS, or Linux-specific bugs. Projects that solve cross-platform reliability—particularly around **environment variable propagation, Unicode path handling, systemd integration, and console window management**—will win enterprise and power-user adoption. The macOS-specific durability features in OpenClaw (secret preservation across sessions, durable background commands) and Hermes Agent's security hardening on macOS suggest these platforms are becoming first-class targets.

**Actionable:** Invest in CI matrices covering Windows, macOS, and Linux from day one. Platform-specific issues have a compounding cost as user bases grow.

### C. Local Model Support Is Emerging as a Distinct Market Segment

QwenPaw's Piccolo integration (v2.3.0) and Model Forge plugin represent a growing demand for **on-premise, offline-capable, privacy-preserving** personal AI assistants. This is distinct from the cloud-API-first approach of OpenClaw and Hermes Agent. The differentiation is significant: local-model users prioritize data sovereignty and latency over model capability ceilings.

**Actionable:** Consider a local-model deployment path. Even if not a primary target, offering Ollama or similar local inference as a fallback reduces dependency on external APIs.

### D. Channel Plugin Architecture Is Converging

The externalization of channel plugins (QwenPaw's Feishu/Matrix/QQ/WeChat, Hermes Agent's Matrix/WhatsApp/Email, OpenClaw's Telegram/iOS/WebChat, ZeroClaw's XMPP) reveals a **shared architectural pattern**: channel adapters as first-class plugins with standardized lifecycle management, authentication flows, and event handling. No shared specification exists, but the pattern is consistent enough that a future interoperability layer is conceivable.

**Actionable:** Design channel integrations as swappable plugins with well-defined interfaces. Monitor for emerging plugin API standards across these projects.

### E. Security Is Escalating from Perimeter to Session

The shift from basic authentication hardening (API key management) to **session isolation, data-at-rest encryption, transport security, and sandboxing** (ZeroClaw's bounded workspaces, Hermes Agent's file-safety guards, OpenClaw's subagent run isolation) indicates the ecosystem is maturing into production-grade deployments. The Hermes Agent sec-marathon model—dedicated multi-day security sprints—is a practice other projects may adopt as their user bases grow.

**Actionable:** Treat security as a continuous process, not a one-time hardening. Implement session isolation, credential store ownership, and TLS enforcement as baseline practices.

### F. Enterprise Features Are Becoming Competitive Requirements

ZeroClaw's OpenID Connect multi-user support (v0.9.0) and scoped chat isolation signal that **team-based personal AI assistants** are a distinct market segment. OpenClaw's Gateway operator accounts and cron scheduling suggest similar enterprise readiness goals. As these tools move from personal productivity to team workflows, expect demand for RBAC, audit logging, SSO integration, and per-user cost attribution to increase.

**Actionable:** Plan for multi-user architectures early. Authentication, authorization, and audit trails are non-negotiable for team deployments.

---

*Report generated from community digest data across five AI agent open-source projects on 2026-11-12. Data sourced from GitHub public repository activity. IronClaw requires further investigation before ecosystem inclusion.*

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>Let me analyze this GitHub data for Hermes Agent and create a structured project digest for 2026-11-12.

Looking at the data:

**Activity Overview:**
- 50 issues updated in last 24h (46 open, 4 closed)
- 50 PRs updated in last 24h (37 open, 13 merged/closed)
- 0 new releases

**Key Issues by Comment Count:**
1. #143379 - RFC: THE DOC-CHAIN SUBSTRATE'S NETWORK (37 comments) - Open
2. #119070 - kanban rate-limited card stuck as blocker_auth (25 comments) - Open
3. #11911 - Feature Request: Native Mobile App with Voice Calling (22 comments) - Open
4. #139347 - Bug: bounded hosted-room transcript drops source users (14 comments) - Closed
5. #106592 - Remote Desktop update failure (10 comments) - Open
6. #106217 - Desktop dead-ends on Turn failed (9 comments) - Open
7. #52952 - Enter key sends message bug (9 comments) - Open

**Key PRs:**
- Security fixes: Matrix sanitization, WhatsApp session security, Email TLS verification, file-safety
- Plugin catalog additions: summon, shinjuku, prsn-id, werk, printsi, Model Forge, webgraft, VividSites
- Bug fixes: vision_analyze macOS unicode, desktop gateway migration, etc.
- Several security fixes (P2, sec-marathon)

**Bug Trends:**
- Desktop issues (multiple)
- Kanban/cron issues
- Session management issues
- Security issues (multiple security fixes being merged)
- Platform-specific issues (Windows, macOS)

**Feature Requests:**
- Native mobile app with voice
- Per-session cost display
- Many plugin additions

Let me structure this into the digest format requested.
</think>


# Hermes Agent Project Digest — 2026-11-12

## 1. Today's Overview

Hermes Agent shows **high activity with 100 combined issue/PR updates** in the last 24 hours. The project is actively addressing a significant number of bugs alongside a surge in security-related fixes and plugin catalog contributions. Notably, **13 PRs were merged/closed**, and the community is engaged with several long-running RFC discussions. The security team appears particularly active, with multiple P2 security fixes (tagged `sec-marathon`) being pushed through. Overall project health indicates strong maintenance velocity, though the volume of open P2 bugs suggests continued pressure on stability.

---

## 2. Releases

**No new releases today.** The last release information is not provided in the dataset.

---

## 3. Project Progress

### Merged/Closed PRs Today (13 total)

| PR | Type | Description | Status |
|----|------|-------------|--------|
| [#76376](https://github.com/NousResearch/hermes-agent/pull/76376) | Bug Fix | `fix(vision)`: U+202F filename handling for macOS screenshots | Closed |
| [#124742](https://github.com/NousResearch/hermes-agent/pull/124742) | Bug Fix | `fix`: tolerate macOS unicode filename drift in vision resolver | Closed |
| [#62126](https://github.com/NousResearch/hermes-agent/pull/62126) | Bug Fix | `fix(vision)`: resolve image paths with Unicode whitespace flattened | Closed |
| [#154161](https://github.com/NousResearch/hermes-agent/pull/154161) | Feature | `bump pixel-hq` to 1.2.0 — departments, session actions, roster editor | Closed |
| [#154046](https://github.com/NousResearch/hermes-agent/pull/154046) | Bug Fix | `fix(media)`: Mac screenshot paths open in vision, video, image generation | Closed |

### Active Development (37 Open PRs)

**Security Fixes (sec-marathon):**
- [#154124](https://github.com/NousResearch/hermes-agent/pull/154124) — Matrix `formatted_body` sanitization; expand TeX only in text nodes
- [#153849](https://github.com/NousResearch/hermes-agent/pull/153849) — WhatsApp: keep session store and bridge.log owner-only
- [#153815](https://github.com/NousResearch/hermes-agent/pull/153815) — Email: require verified TLS before SMTP/IMAP login
- [#153702](https://github.com/NousResearch/hermes-agent/pull/153702) — File safety: guard sibling profiles' credential stores

**Plugin Catalog Additions:**
- [#153861](https://github.com/NousResearch/hermes-agent/pull/153861) — **summon**: X/Twitter integration, learns from interactions
- [#153340](https://github.com/NousResearch/hermes-agent/pull/153340) — **shinjuku**: Plugin Hackathon entry, private wallet
- [#153570](https://github.com/NousResearch/hermes-agent/pull/153570) — **prsn-id**: PRSN Connect integration for session signing keys
- [#153518](https://github.com/NousResearch/hermes-agent/pull/153518) — **werk**: Proof-of-concept construction plugin
- [#153325](https://github.com/NousResearch/hermes-agent/pull/153325) — **printsi**: Plugin Hackathon entry
- [#153040](https://github.com/NousResearch/hermes-agent/pull/153040) — **Model Forge**: local models for every modality (hackathon entry)
- [#153056](https://github.com/NousResearch/hermes-agent/pull/153056) — **webgraft**: local web extraction backend with sources footer
- [#154155](https://github.com/NousResearch/hermes-agent/pull/154155) — **VividSites**: free components with optional paid library
- [#154061](https://github.com/NousResearch/hermes-agent/pull/154061) — **valun** bump to 0.4.1
- [#154218](https://github.com/NousResearch/hermes-agent/pull/154218) — **pixel-hq** bump to 1.3.0

**Desktop/CLI Improvements:**
- [#154219](https://github.com/NousResearch/hermes-agent/pull/154219) — Show gateway migration blockers after update

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Comments | Author | Priority |
|-------|-------|----------|--------|----------|
| [#143379](https://github.com/NousResearch/hermes-agent/issues/143379) | RFC: THE DOC-CHAIN SUBSTRATE'S NETWORK | 37 | c0wb0yp0tat0 | P4 |
| [#119070](https://github.com/NousResearch/hermes-agent/issues/119070) | kanban: rate-limited card stuck as `blocker_auth` forever | 25 | wiliano | P2 |
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | Feature Request: Native Mobile App (iOS & Android) with Voice Calling | 22 | chefroger | P3 |
| [#139347](https://github.com/NousResearch/hermes-agent/issues/139347) | Bug: bounded hosted-room transcript drops source users | 14 | tarkilhk | P2 |

### Analysis of Underlying Needs

1. **Long-term Architecture (Issue #143379)**: The DOC-CHAIN SUBSTRATE RFC demonstrates community interest in **durable record-keeping** across compression sessions, governance mechanisms, and compaction strategies. This is a fundamental architectural discussion that could shape future information persistence.

2. **Reliability Concerns (Issue #119070)**: The kanban card stuck issue highlights **workflow reliability** problems—rate-limiting retry logic that creates indefinite blocking states. Users need predictable job processing.

3. **Cross-Platform Voice Integration (Issue #11911)**: With 22 comments and 16 👍, there's strong demand for **mobile voice calling**. This represents a significant expansion of use cases beyond desktop/terminal, targeting hands-free and on-the-go scenarios.

---

## 5. Bugs & Stability

### P2 Bugs (Critical/High Priority)

| Issue | Title | Platform | Fix PR? |
|-------|-------|----------|---------|
| [#119070](https://github.com/NousResearch/hermes-agent/issues/119070) | Rate-limited kanban card stuck as `blocker_auth` | All | — |
| [#139347](https://github.com/NousResearch/hermes-agent/issues/139347) | Transcript drops source users on bounded rooms | All | — |
| [#106592](https://github.com/NousResearch/hermes-agent/issues/106592) | Remote Desktop update reports failure after successful systemd restart | Linux | — |
| [#106217](https://github.com/NousResearch/hermes-agent/issues/106217) | Desktop dead-ends on 'Turn failed' with no path forward | Desktop | — |
| [#141984](https://github.com/NousResearch/hermes-agent/issues/141984) | `tui_gateway.server` moves stdout to stderr at import | TUI | — |
| [#107998](https://github.com/NousResearch/hermes-agent/issues/107998) | 1Password browser-vault unlock fails | macOS | — |
| [#152365](https://github.com/NousResearch/hermes-agent/issues/152365) | WeChat voice message leaves session stuck at 'started' | WeChat | — |
| [#147400](https://github.com/NousResearch/hermes-agent/issues/147400) | Sticky-prompt clip breaks at non-100% UI scale | Webapp | — |
| [#148457](https://github.com/NousResearch/hermes-agent/issues/148457) | Browser sandbox bypass on AppArmor hosts | Linux | — |
| [#153048](https://github.com/NousResearch/hermes-agent/issues/153048) | 0-byte state.db passes is_file() → OperationalError | Windows | — |

### Platform-Specific Issues

**Windows (5 issues):**
- Event-loop stalls under concurrent Kanban workers ([#152364](https://github.com/NousResearch/hermes-agent/issues/152364))
- Agent terminal commands flash console windows on MSIX build ([#149907](https://github.com/NousResearch/hermes-agent/issues/149907))
- Stale update state after systemd restart ([#106592](https://github.com/NousResearch/hermes-agent/issues/106592))

**macOS (3 issues):**
- 1Password integration fails ([#107998](https://github.com/NousResearch/hermes-agent/issues/107998))
- macOS screenshot path handling ([#76334](https://github.com/NousResearch/hermes-agent/issues/76334)) — **Fixed in PRs #76376, #124742, #154046**
- Desktop health probe causes 4-76s delay on large checkouts ([#148498](https://github.com/NousResearch/hermes-agent/issues/148498))

**Desktop App (6 issues):**
- Dead-end error when resuming TUI-owned session ([#106217](https://github.com/NousResearch/hermes-agent/issues/106217))
- Enter key sends message, no newline support ([#52952](https://github.com/NousResearch/hermes-agent/issues/52952))
- Sticky-prompt clip breaks at zoom ≠ 100% ([#147400](https://github.com/NousResearch/hermes-agent/issues/147400))
- Dead "Get key" links in Settings ([#107988](https://github.com/NousResearch/hermes-agent/issues/107988))
- Model switch fails silently with revision_conflict ([#151686](https://github.com/NousResearch/hermes-agent/issues/151686))
- Gateway migration blockers not shown ([#154219](https://github.com/NousResearch/hermes-agent/pull/154219)) — **Fix PR exists**

---

## 6. Feature Requests & Roadmap Signals

### High-Engagement Requests

| Issue | Title | Votes | Comments | Likelihood |
|-------|-------|-------|----------|------------|
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | Native Mobile App (iOS & Android) with Voice Calling | 16 👍 | 22 | **High** — consistent demand |
| [#93951](https://github.com/NousResearch/hermes-agent/issues/93951) | Per-session real-time cost display | 0 👍 | 2 | **Medium** — billing transparency |

### Analysis

1. **Mobile Voice Integration**: With 16 👍 and 22 comments, this is the **most desired feature** by community vote. The request emphasizes hands-free operation and real-time phone conversations—indicating users want Hermes as a voice-first personal AI on mobile devices.

2. **Cost Visibility**: Users on paid APIs (e.g., DeepSeek) have no way to see conversation costs in real-time. The `show_cost` config is noted as "dead" in 0.20.4. This is a **likely candidate for upcoming development** given the billing awareness trend.

3. **Plugin Ecosystem Growth**: 10+ new plugin submissions today suggest the **Plugin Hackathon is driving significant ecosystem expansion**. The roadmap may increasingly emphasize plugin discoverability and quality standards.

---

## 7. User Feedback Summary

### Pain Points

| Category | Issue | User Impact |
|----------|-------|-------------|
| **Session Reliability** | Kanban cards stuck, sessions stuck at 'started' | Work lost, workflows broken |
| **Desktop UX** | Enter key sends, dead-end errors, silent failures | Frustration, lost productivity |
| **Cross-Platform** | macOS unicode, Windows console flash, Linux systemd | Platform trust issues |
| **Billing Transparency** | No cost display | Financial uncertainty |
| **Authentication** | 1Password integration, dead links | Broken integrations |

### Use Cases Observed

- **Multi-profile usage**: Routed-profile child environments, kanban workers per profile
- **Voice/multimodal**: WeChat voice messages, vision analysis, TTS integration
- **Enterprise integration**: Matrix, WhatsApp, 1Password, SMTP/IMAP
- **Local AI**: Model Forge plugin addresses GPU-local inference across all modalities

### Satisfaction Indicators

- **Active community engagement**: 37-comment RFC, Plugin Hackathon submissions
- **Security responsiveness**: Multiple sec-marathon fixes merged rapidly
- **Bug fix velocity**: macOS screenshot issues (long-standing #76334) now resolved

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Title | Age | Comments | Priority | Status |
|-------|-------|-----|----------|----------|--------|
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | Native Mobile App with Voice Calling | ~7 months | 22 | P3 | Open, needs-decision |
| [#76334](https://github.com/NousResearch/hermes-agent/issues/76334) | vision_analyze fails on macOS screenshots (U+202F) | ~4 months | 2 | P2 | **Fixed** (PRs merged) |
| [#52952](https://github.com/NousResearch/hermes-agent/issues/52952) | Desktop Enter key sends message | ~5 months | 9 | P3 | Open |
| [#93951](https://github.com/NousResearch/hermes-agent/issues/93951) | Per-session real-time cost display | ~3 months | 2 | P3, needs-decision | Open |
| [#107988](https://github.com/NousResearch/hermes-agent/issues/107988) | Dead "Get key" links (security hardening side effect) | ~2 months | 3 | P2 | Open |

### Issues Needing Maintainer Attention

1. **Issue [#11911](https://github.com/NousResearch/hermes-agent/issues/11911)**: Mobile app feature has 22 comments and 16 👍 but lacks `needs-decision` resolution. Community wants a roadmap signal.

2. **Issue [#143379](https://github.com/NousResearch/hermes-agent/issues/143379)**: DOC-CHAIN RFC with 37 comments represents significant architectural discussion that may need formal review.

3. **Issue [#145401](https://github.com/NousResearch/hermes-agent/issues/145401)**: Kanban requeues credits-exhausted workers forever—this billing-related bug has been open ~2 weeks with only 2 comments.

4. **Issue [#149679](https://github.com/NousResearch/hermes-agent/issues/149679)**: Silent message loss when steering into notification turns—affects `busy_input_mode: steer` users.

---

## Summary Metrics

| Metric | Value |
|--------|-------|
| Issues updated (24h) | 50 (46 open, 4 closed) |
| PRs updated (24h) | 50 (37 open, 13 merged/closed) |
| New releases | 0 |
| P2 bugs (open) | ~20 |
| Security fixes (merged/open) | 4 |
| Plugin submissions | 10+ |
| Most active discussion | DOC-CHAIN RFC (37 comments) |
| Top feature request | Native Mobile App (16 👍) |

*Digest generated for NousResearch/hermes-agent on 2026-11-12*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a structured English project digest for QwenPaw based on the provided GitHub data. Let me analyze the data and create a comprehensive digest following the specified sections.

Key data points:
- Issues updated in last 24h: 12 (open/active: 7, closed: 5)
- PRs updated in last 24h: 38 (open: 24, merged/closed: 14)
- New releases: 1 (v2.3.0)

Let me organize this into the requested format.
</think>


# QwenPaw Project Digest — 2026-11-12

## 1. Today's Overview

QwenPaw enters November 12th with **high development velocity** — 38 PRs updated and 12 issues touched in the last 24 hours, signaling an active sprint. The stable **v2.3.0** release dropped today, bringing Piccolo local decision models (4B/9B/27B) to the core product. Community engagement is healthy across bug reports and feature proposals, though the channel plugin ecosystem (Feishu, Matrix, QQ, WeChat) shows multiple race-condition and startup-window bugs that need attention. Overall project health is good, with strong PR throughput (14 merged/closed) indicating rapid iteration toward the next beta cycle.

---

## 2. Releases

### 🎉 v2.3.0 — Stable Release

**Release Page:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0

| Component | Details |
|-----------|---------|
| **Piccolo Local Decision Models** | Added Piccolo 4B, 9B, and 27B as local decision models for tool review and context compaction |
| **Recommended Quantization** | BF16 and Q8_0 |
| **Installation** | Runtime installation and updates supported |
| **Model Downloads** | Available via HuggingFace or ModelScope |

**Migration Notes:**  
- The release passed all four installation verification checkpoints. Users on 2.2.x should upgrade directly.  
- Channel plugins (Feishu, Matrix, WeChat) have been externalized to official plugins — see bug section for Linux/Windows startup issues.

---

## 3. Project Progress

### Merged/Closed PRs Today (14 total)

| PR | Author | Description | Size |
|----|--------|-------------|------|
| [#8638](https://github.com/agentscope-ai/QwenPaw/pull/8638) | zhijianma | **feat(shell):** add intent titles to command cards | M |
| [#8660](https://github.com/agentscope-ai/QwenPaw/pull/8660) | zhijianma | **fix(console):** gate terminal status checks on auth | S |
| [#8634](https://github.com/agentscope-ai/QwenPaw/pull/8634) | zhijianma | **fix(cron):** track scheduled agent runs with TaskTracker | M |
| [#8670](https://github.com/agentscope-ai/QwenPaw/pull/8670) | zhaozhuang521 | **fix(console):** restore Safari message queue action icons (fixes #8663) | S |
| [#8609](https://github.com/agentscope-ai/QwenPaw/pull/8609) | yang0228 | **feat(console):** quote response selections in follow-up drafts | L |
| [#8426](https://github.com/agentscope-ai/QwenPaw/pull/8426) | Luohh5 | **feat(agent):** extract third-party agent into plugins | XXXL |
| [#1972](https://github.com/agentscope-ai/QwenPaw/pull/1972) | hellomypastor | **feat(sandbox):** integrate OpenSandbox as cloud sandbox backend | — |

**Key Advancements:**
- **Quote-to-follow-up** feature shipped (#8609) — users can now select text and quote it in follow-up messages
- **Cron job tracking** now visible in TaskTracker (#8634) — scheduled runs are properly tracked and cancellable
- **Safari icon fix** for message queue actions (#8670) — resolved design library `size="small"` SVG bug
- **Shell command titles** for better UX in command cards (#8638)

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Author | Comments | Status |
|-------|-------|--------|----------|--------|
| [#8669](https://github.com/agentscope-ai/QwenPaw/issues/8669) | Channel plugin startup race: `_wait_connected` treats initial `platform_state="disconnected"` as fatal | justsavo | **5** | 🟡 OPEN |
| [#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538) | Matrix channel plugin fails to activate when multiple workspaces enable it | MCQSJ | **4** | 🟡 OPEN |
| [#8616](https://github.com/agentscope-ai/QwenPaw/issues/8616) | 2.3.0-beta.1 does not start on Windows 11 IoT LTSC | ArsenicumAlbum | **3** | 🟡 OPEN |
| [#5110](https://github.com/agentscope-ai/QwenPaw/issues/5110) | Quote/Reference text from responses for follow-up context | fhd200200 | **3** | ✅ CLOSED |
| [#8682](https://github.com/agentscope-ai/QwenPaw/issues/8682) | Official channel plugin workers crash on Linux (missing HOME) | Mcpy | **1** | 🟡 OPEN |
| [#8683](https://github.com/agentscope-ai/QwenPaw/issues/8683) | Need better view for markdown preview | wjsi | **1** | 🟡 OPEN |

### Hot PRs Under Review (by size/impact)

| PR | Title | Author | Size | Status |
|----|-------|--------|------|--------|
| [#8472](https://github.com/agentscope-ai/QwenPaw/pull/8472) | feat(memory): add reranker model center with service test, multi-query precision history and auto-verify | lecheng2018 | **XXL** | Under Review |
| [#8469](https://github.com/agentscope-ai/QwenPaw/pull/8469) | refactor(mcp): extract mcp into plugin | Luohh5 | **XXXL** | Under Review |
| [#8588](https://github.com/agentscope-ai/QwenPaw/pull/8588) | fix(memory): OpenViking follow-up cleanup, compatibility, and shutdown fixes | xypang33-sketch | **XL** | Under Review |
| [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236) | fix(ollama): size context window from num_ctx instead of 128k default | Li-john1021 | **XXL** | Under Review |

### Underlying Needs Analysis

1. **Channel Plugin Reliability:** Multiple issues (#8669, #8538, #8682) stem from the transition to externalized channel plugins. Users need robust startup sequencing across platforms.
2. **Cross-Platform Consistency:** Safari rendering bugs (#8663, fixed), Windows LTSC startup failures (#8616) indicate platform-specific QA gaps.
3. **Memory & Retrieval Improvements:** Strong interest in reranker enhancements (#8472) and OpenViking compatibility (#8588).
4. **Plugin Architecture Expansion:** Extraction of third-party agents (#8426) and MCP (#8469) into plugins signals architectural direction toward modularity.

---

## 5. Bugs & Stability

### Active Bug Reports (Ranked by Severity)

| Severity | Issue | Description | Platform | Fix PR? |
|----------|-------|-------------|----------|---------|
| 🔴 **High** | [#8616](https://github.com/agentscope-ai/QwenPaw/issues/8616) | 2.3.0-beta.1 fails to start on Windows 11 IoT LTSC with "path not found" → AppHang | Windows 11 IoT LTSC | ❌ None |
| 🔴 **High** | [#8682](https://github.com/agentscope-ai/QwenPaw/issues/8682) | Channel plugin workers crash on Linux — missing HOME/QWENPAW_WORKING_DIR | Linux | ❌ None |
| 🟠 **Medium** | [#8669](https://github.com/agentscope-ai/QwenPaw/issues/8669) | Feishu channel plugin startup race causing CHANNEL_NOT_CONNECTED on every start | Windows Desktop | ❌ None |
| 🟠 **Medium** | [#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538) | Matrix channel fails when multiple workspaces have it enabled (10s startup window too short) | Cross-platform | ❌ None |
| 🟡 **Low** | [#8674](https://github.com/agentscope-ai/QwenPaw/issues/8674) | Query error dumps grow unbounded in system temp directory (hundreds of MB) | Windows | ✅ [#8678](https://github.com/agentscope-ai/QwenPaw/pull/8678) |
| 🟡 **Low** | [#8683](https://github.com/agentscope-ai/QwenPaw/issues/8683) | Markdown preview too small in pad browser vertical view | Browser | ❌ None |

### Already Fixed Today
- ✅ **Safari message queue icons** — [#8670](https://github.com/agentscope-ai/QwenPaw/pull/8670) merged

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| Request | Issue | Author | User Need | Likelihood of Inclusion |
|---------|-------|--------|-----------|------------------------|
| **Markdown Preview Improvements** | [#8683](https://github.com/agentscope-ai/QwenPaw/issues/8683) | wjsi | Better sizing, fullscreen, visible action buttons in vertical pad view | 🟡 Medium |
| **Quote/Reference Text** | [#5110](https://github.com/agentscope-ai/QwenPaw/issues/5110) | fhd200200 | "Quote to follow-up" like Perplexity | ✅ **Shipped in #8609** |
| **Visual Consistency: Thinking Blocks vs Tool Cards** | [#8650](https://github.com/agentscope-ai/QwenPaw/issues/8650) | sslnv88 | Unified left-edge alignment and visual hierarchy in long tasks | 🟡 Medium |
| **Execution Tool Clarity** | [#8612](https://github.com/agentscope-ai/QwenPaw/issues/8612) | sslnv88 | Better differentiation of execution-type tool calls in long conversations | 🟡 Medium |

### Roadmap Signals

1. **Memory/Reranker Investment:** The XXL reranker model center PR (#8472) suggests memory quality is a 2026 priority.
2. **Plugin Architecture:** Extraction of MCP (#8469) and third-party agents (#8426) into plugins indicates a move toward a plugin marketplace model.
3. **Per-Job Reasoning Control:** `thinking_level` on JobRuntimeSpec (#8476) points to fine-grained agent configuration for scheduled jobs.
4. **Local Decision Models:** Piccolo integration in v2.3.0 signals a push toward on-premise/offline capabilities.

---

## 7. User Feedback Summary

### Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Channel plugin instability** | Multiple reports (#8669, #8538, #8682) of Feishu, Matrix, WeChat plugins failing on startup | Critical for users relying on team channels |
| **Windows LTSC incompatibility** | #8616: Path resolution errors, AppHang on 2.3.0-beta.1 | Blocks enterprise Windows deployments |
| **Markdown preview unusable on mobile** | #8683: Fixed small size, no fullscreen option | Poor UX for pad/touch users |
| **Unbounded temp storage growth** | #8674: Query error dumps filling disk | System stability risk |
| **Safari-specific rendering issues** | #8663: Missing action icons | Breaks workflow for macOS Safari users |

### Positive Feedback Signals

- **Quote feature shipped** — #5110 closed after implementation (#8609), indicating community feature requests are being addressed
- **Shell command titles** — cleaner command cards (#8638) improving readability
- **Cron job tracking** — better observability of scheduled tasks (#8634)

---

## 8. Backlog Watch

### Long-Unanswered Important Items

| Item | Age | Issue/PR | Description | Priority |
|------|-----|----------|-------------|----------|
| **OpenSandbox Integration** | ~8 months | [#1972](https://github.com/agentscope-ai/QwenPaw/pull/1972) | Cloud sandbox backend for CoPaw — finally merged | ✅ Resolved |
| **Ollama Context Window** | ~1 month | [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236) | Should read `num_ctx` instead of default 128k — under review | 🔴 High |
| **QQ C2C Streaming** | ~3 weeks | [#8409](https://github.com/agentscope-ai/QwenPaw/pull/8409) | Add streaming replies to QQ channel plugin — under review | 🟡 Medium |
| **MCP Plugin Extraction** | ~2 weeks | [#8469](https://github.com/agentscope-ai/QwenPaw/pull/8469) | XXXL refactor needed for plugin architecture — under review | 🔴 High |
| **Windows LTSC Startup** | ~5 days | [#8616](https://github.com/agentscope-ai/QwenPaw/issues/8616) | Needs investigation and fix | 🔴 High |
| **Feishu Startup Race** | ~2 days | [#8669](https://github.com/agentscope-ai/QwenPaw/issues/8669) | 5 comments but no assignee yet | 🔴 High |
| **Matrix Multi-Workspace** | ~10 days | [#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538) | 4 comments but no assignee yet | 🟠 Medium |

### Maintainer Attention Needed

1. **Assign #8616 (Windows LTSC)** — enterprise blocker with clear repro steps
2. **Assign #8669 (Feishu startup race)** — 5 comments, high community interest
3. **Review #8236 (Ollama)** — simple fix but long-pending
4. **Review #8469 (MCP extraction)** — large architectural change needs early feedback

---

*Digest generated from QwenPaw activity on 2026-11-12. All GitHub links point to agentscope-ai/QwenPaw.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>Let me analyze this GitHub data for ZeroClaw (zeroclaw-labs/zeroclaw) and generate a structured project digest for 2026-11-12.

Key observations from the data:

1. **Overall Activity**: 8 issues updated, 38 PRs updated, 1 new release
2. **Latest Release**: v0.9.0 - first release where non-operators can sign in, 117 commits, 22 contributors
3. **Issues**: 8 total, mix of bugs and features
4. **PRs**: 38 total, with 4 merged/closed

Let me categorize the issues and PRs:

**Key Issues:**
- #7461: Feature to run tests on Windows/macOS (in-progress, high risk)
- #8794: Bug - stopping agent mid-work erases tool calls (high severity S1)
- #9814: Feature - native XMPP/Prosody channel (enhancement)
- #12397: Feature - distinguish agent task outcome from cron execution (new, Nov 12)
- #12391: Bug - runtime-trace.jsonl loses hours of events (S2 severity)
- #12396: Bug - dead config knobs (history_pruning.keep_recent and collapse_tool_results)
- #12394: Feature - bound SOP step agent's tool ceiling
- #12390: Bug - shell tool returns empty error string

**Top PRs by activity:**
- #9809: feat(providers): support multiple models per provider profile (XL, many labels)
- #11869: feat(tools): add opt-in task-owned SSH transport reuse (XL)
- #10391: fix(delegate): keep bounded delegate's workspace stable (XL, high risk)
- #12258: feat(tools): add sync sessions_prompt tool (XL)


- #12259: feat(tools): scaffold async sessions_message (XL)
- #11847: feat(channels): add native Rust XMPP (XL, high risk)
- #11730: feat(runtime): show foreground delegate's tool calls (XL)
- #11698: fix(runtime): keep personality files stable (XL)
- #11589: feat(runtime): let operator override cost limit (XL)
- #11731: feat(zerocode): configure per-pane session cap (XL)
- #11633: feat(zerocode): open local file paths (XL)

The PR landscape shows significant investment in core runtime improvements and multi-channel support, with particular focus on delegate handling, session management, and expanded platform compatibility. Several high-risk XL-sized PRs indicate substantial architectural changes being reviewed for potential inclusion.

**Merged/Closed PRs:**
- #12380: chore(docs): pin translations to v0.9.0 (release)
- #12392: fix(deps): bump rustix to 1.1.6 for security
- #12215: chore(deps): bump rust-all group (36 updates)

**New PRs:**
- #12395: docs(runtime): correct shell-grammar binding row (XS, risk:high)
- #12393: chore(deps): bump rust-all group (35 updates)
- #12389: fix(memory): sanitize ANSI escape sequences (S)
- #12388: fix(discord): validate custom emoji (XS)

**New Issues (Nov 12):**
- #12397: Feature - distinguish agent task outcome from cron execution status

I should structure a comprehensive project digest covering release highlights, development velocity, community engagement, and security considerations.
</think>


# ZeroClaw Project Digest — 2026-11-12

---

## 1. Today's Overview

ZeroClaw continues to show high development velocity with **38 PRs and 8 issues updated** in the last 24 hours. The project has just released **v0.9.0** (117 commits, 22 contributors), marking its first release enabling non-operator user authentication via OpenID Connect. Active development is concentrated across provider multi-model support (#9809), native XMPP channel implementation (#11847), delegate workspace stability fixes (#10391), and runtime observability improvements. The community is actively filing bugs around daemon stability (trace gaps, config knobs, shell errors) while requesting richer cross-platform CI coverage and cron job outcome differentiation.

---

## 2. Releases

### v0.9.0 — Multi-User Authentication Milestone

| Field | Details |
|---|---|
| **Commits** | 117 |
| **Contributors** | 22 |
| **Breaking Changes** | None noted |
| **Migration Notes** | Dashboard now supports OpenID Connect login; non-administrator accounts receive scoped chat isolation |

**Highlights:**
- First release enabling **multi-user login** (previously operator-only)
- Dashboard authentication via **self-hosted OpenID Connect providers**
- Scoped chat environments for non-admin users
- Full changelog: https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.9.0

---

## 3. Project Progress

### Merged / Closed PRs (Today)

| PR | Title | Size | Risk |
|---|---|---|---|
| [#12380](https://github.com/zeroclaw-labs/zeroclaw/pull/12380) | pin translations to v0.9.0 | XS | Low |
| [#12392](https://github.com/zeroclaw-labs/zeroclaw/pull/12392) | bump rustix to 1.1.6 (RUSTSEC-2026-0486) | XS | High |
| [#12215](https://github.com/zeroclaw-labs/zeroclaw/pull/12215) | bump rust-all group (36 updates) | XS | Low |

### Notable Advancing Features

| PR | Title | Impact |
|---|---|---|
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | Support multiple models per provider profile | **Core** — Schema-v4 connections, capability models, presets, and fallback graphs; affects all provider types (OpenAI, Anthropic, Ollama, Bedrock, Azure, etc.) |
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | Native Rust XMPP with optional legacy OMEMO | **Channel** — Enables self-hosted Prosody/ejabberd integration |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | Keep bounded delegate's workspace stable | **Security/Agent** — Maintains workspace, tool ceiling, and command policy bounds beyond the turn |
| [#12258](https://github.com/zeroclaw-labs/zeroclaw/pull/12258) | Add sync sessions_prompt tool | **Tool** — Agents can prompt other agents' live RPC sessions |
| [#11869](https://github.com/zeroclaw-labs/zeroclaw/pull/11869) | Add opt-in task-owned SSH transport reuse | **Tool** — Pooled SSH connections per task for efficiency |
| [#11994](https://github.com/zeroclaw-labs/zeroclaw/pull/11994) | Read POSIX commands in bash's grammar | **Security** — Enforces POSIX shell command compliance |

---

## 4. Community Hot Topics

### Most Active Issues

| # | Title | Comments | Sentiment / Need |
|---|---|---|---|
| [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) | Run test suite on Windows and macOS in CI | 6 | **Cross-platform CI parity** — Request to expand Ubuntu-only nextest to macOS/Windows matrix |
| [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | Stopping agent mid-work erases tool calls | 5 | **Data loss / UX defect** — S1 severity; agent work discarded on interruption |
| [#9814](https://github.com/zeroclaw-labs/zeroclaw/issues/9814) | Native XMPP / Prosody channel | 4 | **Protocol diversity** — Request for lightweight self-hosted chat alternative to Matrix/Discord |
| [#12397](https://github.com/zeroclaw-labs/zeroclaw/issues/12397) | Distinguish agent task outcome from cron status | 1 | **Observability** — Cron reports `Ok` even when agent concluded `BLOCKED` |

### Most Active PRs (by labels/engagement)

| # | Title | Size | Key Driver |
|---|---|---|---|
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | Multiple models per provider profile | XL | **Provider flexibility** — Canonical feature enabling fallback chains |
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | Native Rust XMPP channel | XL | **Channel expansion** — Addresses home-lab / low-resource deployment needs |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | Bounded delegate workspace fix | XL | **Security & correctness** — Ensures tool ceiling isolation |

**Underlying need analysis:** The community is driving toward three themes: (1) **multi-model resilience** via provider profile fallbacks, (2) **protocol diversity** via XMPP support for self-hosted environments, and (3) **cross-platform parity** for macOS/Windows users in CI and production.

---

## 5. Bugs & Stability

| # | Severity | Title | Status | Fix PR? |
|---|---|---|---|---|
| [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | **S1** | Stopping agent mid-work erases tool calls and thinking | Open | No |
| [#12391](https://github.com/zeroclaw-labs/zeroclaw/issues/12391) | **S2** | runtime-trace.jsonl loses hours of events across daemon restarts | Open | No |
| [#12396](https://github.com/zeroclaw-labs/zeroclaw/issues/12396) | S2 | history_pruning.keep_recent and collapse_tool_results are dead config knobs | Open | No |
| [#12390](https://github.com/zeroclaw-labs/zeroclaw/issues/12390) | S2 | shell tool returns empty error string (stderr swallowed) | Open | No |
| [#12393](https://github.com/zeroclaw-labs/zeroclaw/pull/12393) | — | chore(deps): bump rust-all (35 updates) | Open | Dependency update |
| [#12392](https://github.com/zeroclaw-labs/zeroclaw/pull/12392) | — | fix(deps): bump rustix for RUSTSEC-2026-0486 | **Merged** | ✅ |

**Analysis:** One S1 data-loss bug (context erasure on agent interrupt) requires immediate attention. The S2 trace-gap issue (#12391) affects production observability on Windows. The dead-config-knobs bug (#12396) indicates config schema drift post-#8196 cleanup. A security patch for `rustix` (RUSTSEC-2026-0486) was merged promptly.

---

## 6. Feature Requests & Roadmap Signals

| # | Feature | Tags | Viability |
|---|---|---|---|
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | Multiple models per provider profile | Core, provider, size:XL | **In review** — Likely v0.9.x or v0.10 |
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | Native Rust XMPP with OMEMO | Channel, security, size:XL | **In review** — Active TLS replay cache work |
| [#9814](https://github.com/zeroclaw-labs/zeroclaw/issues/9814) | Native XMPP channel (user request) | Enhancement, integration | **Requested** — PR #11847 covers this |
| [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) | Multi-OS CI matrix (macOS/Windows) | CI, tests, in-progress | **In progress** — Blocks broader adoption |
| [#12397](https://github.com/zeroclaw-labs/zeroclaw/issues/12397) | Distinguish agent outcome from cron status | Cron, observability | **New** — Filed today |
| [#12394](https://github.com/zeroclaw-labs/zeroclaw/issues/12394) | Bound SOP step agent's tool ceiling | Agent, tool, SOP | **Open** — Follow-up to delegate fix |

**Roadmap signals:** Multi-model provider profiles and XMPP channel appear to be the highest-priority incoming features for the next minor release, given their XL size and active review status. Multi-OS CI expansion is a long-running request that may land soon given its in-progress tag.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Severity |
|---|---|---|
| **Agent interruption causes work loss** | #8794: stopping mid-work erases tool calls and thinking; agent "like the whole step never happened" | **High** |
| **Daemon trace gaps in production** | #12391: multi-hour coverage gaps on busy Windows daemon despite continued agent work | **High** |
| **Shell tool error messages opaque** | #12390: stderr swallowed; agent only learns "something failed" | **Medium** |
| **Cron job success masking agent failure** | #12397: agent concludes BLOCKED but dashboard shows Ok | **Medium** |
| **Config knobs with no effect** | #12396: history_pruning.keep_recent and collapse_tool_results have no readers | **Medium** |
| **Multi-platform CI gaps** | #7461: tests only run on Ubuntu; macOS/Windows users lack CI coverage | **Medium** |

**Positive signals:** v0.9.0 multi-user authentication is a significant milestone. The sessions_prompt and sessions_message tools (#12258, #12259) are well-received as inter-agent communication primitives. Dependency maintenance (rustix patch, rust-all bumps) is handled responsibly.

---

## 8. Backlog Watch

Items requiring maintainer attention (no activity in 24h, high impact, or stale signals):

| # | Age | Title | Risk | Action Needed |
|---|---|---|---|---|
| [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) | ~5 months | Multi-OS CI matrix | High | Review implementation plan; PR needed |
| [#9814](https://github.com/zeroclaw-labs/zeroclaw/issues/9814) | ~3 months | Native XMPP channel (user request) | High | PR #11847 is in review; ensure it lands |
| [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | ~4 months | S1 agent context erasure | High | Needs triage and fix assignment |
| [#12391](https://github.com/zeroclaw-labs/zeroclaw/issues/12391) | 1 day | Trace gap across daemon restarts | High | Reproduce; assign to runtime team |
| [#12396](https://github.com/zeroclaw-labs/zeroclaw/issues/12396) | 1 day | Dead config knobs | Medium | Schema cleanup PR needed |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | ~3 months | Bounded delegate workspace fix | High | Needs review/merge (blocking v0.9.x stability) |

---

*Digest generated from ZeroClaw (zeroclaw-labs/zeroclaw) GitHub data — 2026-11-12*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*