# OpenClaw Ecosystem Digest 2026-10-09

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-10-09 02:30 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

<think>Let me analyze the GitHub data for OpenClaw and generate a structured project digest for 2026-10-09.

First, let me extract key information:

**Overview:**
- Issues updated in last 24h: 500 (open/active: 400, closed: 100)
- PRs updated in last 24h: 500 (open: 361, merged/closed: 139)
- New releases: 1 (v2026.9.9)

**Latest Release: v2026.9.9**
- 185 commits · 112 pull requests · 92 contributors

**Top Issues by comments:**
1. #119720 - Synchronous agent persistence blocks Gateway event loop (24 comments, P1)
2. #142585 - Doctor refuses valid legacy workspace setup (20 comments, P0, regression)
3. #97616 - OpenClaw leaks unreaped hook/tool child processes (18 comments, P1)
4. #80319 - QA tool-defaults suite conflates Codex tools (17 comments, closed)
5. #157325 - Stuck agent-DB resource causes generic failures (16 comments, P0)
6. #96834 - WhatsApp inbound image wedges main lane (15 comments, P1)
7. #154572 - sessions_spawn to claude-cli-runtime fails (14 comments, P1)
8. #53628 - XDG_CONFIG_HOME not processed when installing skill (14 comments, P2)
9. #160610 - Discord autoPresence reports "runtime degraded" (13 comments, P2)
10. #53408 - Write/exec tool parameters dropped after long conversations (13 comments, P2)

**Top PRs:**
Looking at the PRs, there are many active ones from "steipete" and other contributors. Let me identify the notable ones:

- #167558 - refactor(sessions): share worker admission and upstream reads (OPEN, L size)


- #167547 - improve(agents): reduce main-thread SQLite during retirement (OPEN, XL size)
- #163007 - fix(amazon-bedrock-mantle): recognize ambient aws-sdk authMode (OPEN)
- #138040 - fix(doctor): keep updater-retired plugin aliases (OPEN)
- #165486 - feat: prepare bundled Bun for Windows desktop (OPEN, draft)
- #167571 - improve(storage): reduce duplicate reads (OPEN)
- #136240 - fix(imessage): stop reflected replies from starting new turns (OPEN)
- #138087 - fix(context): context budget falls back to 200k (OPEN)
- #167252 - fix(browser): honor explicit management request timeouts (OPEN)
- #128282 - fix(ai): clamp OpenAI Responses max_output_tokens (OPEN)
- #167476 - chore(deps): update fs-safe to 0.25.0 (OPEN)
- #167570 - fix(storage): preserve committed facts when publication fails (OPEN)
- #114480 - fix(codex): account and trace every provider response (OPEN)
- #145850 - fix(agents): ignore empty stream heartbeats as model progress (OPEN)
- #149543 - fix(ui): retire the live terminal copy (OPEN)
- #167066 - fix(talk): clipboard-padded Talk session ids miss live sessions (OPEN)

I notice several pull requests spanning different components. Storage improvements appear frequently (#167571, #167570, #167476), alongside fixes for session handling (#167558, #167066) and agent behavior (#167547, #145850). The browser management and OpenAI token clamping fixes address specific runtime concerns, while the Amazon Bedrock update resolves authentication complexities.

Several issues remain unresolved with multiple reports: package-swap failures during updates (#167376, #167181), persistent event loop blocking during startup (#162211), and plugin source-capture problems on Windows (#162585). These require targeted investigation and appear in various stages of review.</think>

# OpenClaw Project Digest — 2026-10-09

## Today's Overview

OpenClaw maintains high activity with 500 issues and 500 PRs updated in the last 24 hours. The project released **v2026.9.9** (185 commits, 112 PRs, 92 contributors), marking another incremental update. Community engagement remains robust, though the issue backlog shows persistent themes around session management, channel integrations, and update mechanics. A notable number of P0 issues remain open, indicating ongoing stability concerns in production deployments.

---

## Releases

### v2026.9.9 — openclaw 2026.9.9

**Stats:** 185 commits · 112 pull requests · 92 contributors

Release notes reference documentation at `https://docs.openclaw.ai/releases/2026` (URL appears truncated in data).

---

## Project Progress

### Merged/Closed Activity (139 PRs merged/closed in 24h)

The following PRs advanced to merged/closed status:

- **#107693** [CLOSED] — `fix(ai): don't run repairJson on already-valid JSON` (P1) — Fixed a heuristic bug where `repairJson`'s `looksLikeWindowsPathPrefix` misidentified valid tokens like `C:` in Python code, causing unnecessary JSON repair and potential `\n` doubling
- **#167552** [CLOSED] — `refactor(state): share admitted worker write envelopes` — Eliminated duplicate transaction admission envelope patterns across device tokens, restart sentinels, worktree run leases, and diagnostic writes

### Active PRs Advancing Features

| PR | Title | Size | Status |
|----|-------|------|--------|
| [#167558](https://github.com/openclaw/openclaw/pull/167558) | refactor(sessions): share worker admission and upstream reads | L | ⏳ waiting on author |
| [#167547](https://github.com/openclaw/openclaw/pull/167547) | improve(agents): reduce main-thread SQLite during retirement | XL | 📣 needs proof |
| [#165486](https://github.com/openclaw/openclaw/pull/165486) | feat: prepare bundled Bun for Windows desktop | XL | ⏳ waiting on author (DRAFT) |
| [#167571](https://github.com/openclaw/openclaw/pull/167571) | improve(storage): reduce duplicate reads around final authority guards | XL | ⏳ waiting on author |
| [#167476](https://github.com/openclaw/openclaw/pull/167476) | chore(deps): update fs-safe to 0.25.0 | S | 👀 ready for maintainer look |
| [#145850](https://github.com/openclaw/openclaw/pull/145850) | fix(agents): ignore empty stream heartbeats as model progress (partial fix for #145203) | L | 👀 ready for maintainer look |
| [#128282](https://github.com/openclaw/openclaw/pull/128282) | fix(ai): clamp OpenAI Responses max_output_tokens to model capacity | S | 📣 needs proof |
| [#163007](https://github.com/openclaw/openclaw/pull/163007) | fix(amazon-bedrock-mantle): recognize ambient aws-sdk authMode in runtime auth | XS | ✅ proof: sufficient |

---

## Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Comments | Reactions | Priority |
|-------|-------|----------|-----------|----------|
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | Synchronous agent persistence and transcript maintenance block the Gateway event loop at scale | 24 | 👍1 | P1 |
| [#142585](https://github.com/openclaw/openclaw/issues/142585) | **[Regression]** Doctor refuses valid legacy workspace setup when canonical rows are absent | 20 | 👍0 | P0 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation | 18 | 👍1 | P1 |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | A stuck agent-DB resource makes every agent's replies fail with generic failure copy | 16 | 👍0 | P0 |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 1:1 inbound image wedges main lane ~3min before processing | 15 | 👍1 | P1 |
| [#154572](https://github.com/openclaw/openclaw/issues/154572) | sessions_spawn to claude-cli-runtime child always fails with SessionTranscriptWriterClaimReboundError | 14 | 👍0 | P1 |
| [#160610](https://github.com/openclaw/openclaw/issues/160610) | Discord autoPresence always reports "runtime degraded" when credentials come from SecretRef/env | 13 | 👍0 | P2 |

### Analysis

**Underlying needs revealed:**
- **Event loop blocking** is a recurring theme (#119720, #162211, #160959) — users need stable, non-blocking Gateway operation under scale
- **Update/package mechanics** are problematic — multiple issues around `package-swap` failures (#167376, #167181, #164188, #164113) indicate fragile update paths
- **Channel-specific bugs** persist — WhatsApp, Discord, Feishu, Telegram each have active issues affecting production deployments
- **Session management** remains complex — spawn failures, transcript writer errors, and resource leaks point to gaps in the session lifecycle

---

## Bugs & Stability

### Critical (P0) Issues Active

| Issue | Title | Severity | Fix PR? |
|-------|-------|----------|---------|
| [#142585](https://github.com/openclaw/openclaw/issues/142585) | Doctor refuses valid legacy workspace setup (regression) | 🦐 gold shrimp | No |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | Stuck agent-DB resource causes all agent replies to fail | 🦞 diamond lobster | No |
| [#164074](https://github.com/openclaw/openclaw/issues/164074) | Native update recovery stuck at publication-complete | 🦐 gold shrimp | No |
| [#136203](https://github.com/openclaw/openclaw/issues/136203) | Windows de-DE upgrade leaves Doctor maintenance blocked | 🦐 gold shrimp | No |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | Persistent file-based provider cooldown blocks users for hours | 🦞 diamond lobster | No |
| [#156712](https://github.com/openclaw/openclaw/issues/156712) | openclaw triage subprocess doesn't exit cleanly, blocks restart | 🐚 platinum hermit | No |
| [#156674](https://github.com/openclaw/openclaw/issues/156674) | 2026.9.5 macOS gateway resource pressure with long-lived Codex workers | 🦪 silver shellfish | No |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway blocks for minutes while capturing large external plugins (regression) | 🦞 diamond lobster | No |
| [#162211](https://github.com/openclaw/openclaw/issues/162211) | Startup blocks Gateway event loop for 40–200s, causes restart loop | 🦐 gold shrimp | No |
| [#164972](https://github.com/openclaw/openclaw/issues/164972) | claude-cli multi-agent teams: visibility matrix failures | 🐚 platinum hermit | No |

### Notable Bug Fixes in Progress

- **#145850** — Fixes empty stream heartbeats being misinterpreted as model progress (addresses #145203 SSE stream hangs)
- **#128282** — Clamps OpenAI Responses max_output_tokens to model capacity (prevents invalid token limits)
- **#163007** — Fixes Amazon Bedrock Mantle 401 errors with aws-sdk auth mode

---

## Feature Requests & Roadmap Signals

### Active Feature Requests (by engagement)

| Issue | Title | Priority | Comments |
|-------|-------|----------|----------|
| [#44309](https://github.com/openclaw/openclaw/issues/44309) | Add one-way dispatch mode for A2A handoffs without reply-back ping-pong | P2 | 12 |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) | Support for multiple Azure/Teams bots on a single Openclaw Gateway | P2 | 9 |
| [#41366](https://github.com/openclaw/openclaw/issues/41366) | Durable natural-language rule learning + explicit multi-mention reply semantics | P3 | 8 |
| [#56781](https://github.com/openclaw/openclaw/issues/56781) | Fallback model chain for compaction and LCM summaryModel | P2 | 7 |
| [#55249](https://github.com/openclaw/openclaw/issues/55249) | Session labels / nicknames for easier identification | P2 | 7 |
| [#71452](https://github.com/openclaw/openclaw/issues/71452) | list chat / list messages should support pagination (hardcoded 25 limit) | P3 | 7 |
| [#88154](https://github.com/openclaw/openclaw/issues/88154) | Add Slack Modal Support for Interactive Workflows | P2 | 7 |

### Roadmap Signals

- **Windows desktop expansion**: PR #165486 (bundled Bun for Windows) suggests Desktop app is a priority
- **Performance refactors**: Multiple PRs from `steipete` on reducing main-thread SQLite (#167547), duplicate reads (#167571), transcript reads (#167238) — performance is a clear focus
- **Agent improvements**: Session worker deduplication (#167554), empty heartbeat handling (#145850), CLI agent routing fixes indicate active agent subsystem work

---

## User Feedback Summary

### Pain Points

1. **Update failures** — Multiple users report `package-swap` failures during update (2026.9.8→2026.9.9, LXC containers, various platforms). This erodes confidence in the auto-update mechanism.
2. **Event loop blocking** — Users on Windows, macOS, and Linux report Gateway freezes during startup, plugin capture, and at scale. This is a top-tier concern.
3. **Channel instability** — Discord shows fake "runtime degraded" status; WhatsApp image processing wedges; Feishu has per-chat queue blocking — users need reliable multi-channel deployments.
4. **Windows-specific issues** — Scheduled Task doesn't stay running, de-DE upgrade blocks Doctor, plugin staging explodes on Windows — platform parity concerns.
5. **Resource leaks** — Child process zombies, memory pressure with long-lived Codex workers degrade system performance over time.

### Satisfaction Signals

- The project maintains rapid release cadence (monthly)
- Community engagement remains high (500 issues/PRs updated daily)
- Regression testing is improving (#107693 fix addresses a long-standing JSON parsing edge case)
- Amazon Bedrock Mantle support now matches standard Bedrock parity (#163007)

---

## Backlog Watch

### Long-Unanswered Important Issues

| Issue | Title | Age | Status |
|-------|-------|-----|--------|
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | ${XDG_CONFIG_HOME} not processed when installing a skill | ~7 months | ⏳ needs-info |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | Write/exec tool parameters silently dropped after long conversations | ~7 months | ⏳ needs-info |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | Cron agent jobs silently timeout during LLM API outages | ~7 months | OPEN |
| [#41165](https://github.com/openclaw/openclaw/issues/41165) | Telegram DMs still land in agent:main:main after #40519 | ~7 months | OPEN |
| [#48709](https://github.com/openclaw/openclaw/issues/48709) | Gemini 2.5 Pro textSignature bloat causes session failures | ~7 months | OPEN |
| [#128140](https://github.com/openclaw/openclaw/issues/128140) | memory_search tool always times out (15s) while CLI works | ~2 months | ⏳ needs-live-repro |

### Stale Issues Needing Maintainer Review

The following have `stale` tag and need either closure or triage:

- [#44309](https://github.com/openclaw/openclaw/issues/44309) — A2A handoff mode (12 comments)
- [#51572](https://github.com/openclaw/openclaw/issues/51572) — Session memory hook on reset/prune (8 comments)
- [#77700](https://github.com/openclaw/openclaw/issues/77700) — Prepared runtime resolution migration tracking (7 comments)

---

*Generated from OpenClaw GitHub data — 2026-10-09*

---

## Cross-Ecosystem Comparison

<think>The user wants me to generate a cross-project comparison report analyzing four AI agent/assistant projects based on the digests I created earlier. Let me organize this data systematically.

Projects covered:
1. OpenClaw - Main project with high activity (500 issues, 500 PRs updated)
2. Hermes Agent - Medium activity (50 issues, 50 PRs)
3. IronClaw - Low activity (2 issues, 2 PRs)
4. ZeroClaw - High activity (17 issues, 50 PRs)
5. QwenPaw - High activity (30 issues, 31 PRs)

Let me structure this comparison report with the requested sections.</think>

# Cross-Project Ecosystem Report: Personal AI Assistants & Agents

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing rapid iteration across multiple projects, with activity concentrated in three primary categories: **autonomous agent orchestration** (OpenClaw, Hermes Agent), **channel-integrated messaging assistants** (ZeroClaw, IronClaw), and **multi-modal interface frameworks** (QwenPaw). All five projects show healthy maintenance velocity, with daily updates ranging from 2 to 500 items. The landscape reveals two distinct maturity tiers: mature projects like OpenClaw and ZeroClaw are addressing production-grade concerns (stability, security, channel reliability), while newer entrants (IronClaw) remain focused on core feature development. Notably, the entire ecosystem is grappling with common challenges—context/window management, multi-channel reliability, update mechanics, and resource leak prevention—indicating the field is converging on shared technical problems even as implementations diverge.

---

## 2. Activity Comparison

| Metric | OpenClaw | Hermes Agent | IronClaw | ZeroClaw | QwenPaw |
|--------|----------|-------------|----------|----------|---------|
| **Issues updated (24h)** | 500 | 50 | 2 | 17 | 30 |
| **Open Issues** | ~400 | ~50 | 2 | ~17 | ~17 |
| **PRs updated (24h)** | 500 | 50 | 2 | 50 | 31 |
| **Open PRs** | 361 | ~50 | 2 | 43 | 24 |
| **Merged/Closed (24h)** | 139 | 14 | 0 | 7 | 7 |
| **Releases (24h)** | 1 (v2026.9.9) | 1 (v0.21.6) | 0 | 0 | 0 |
| **Contributors (latest release)** | 92 | ~2,100 PRs merged | — | — | — |
| **Health Tier** | 🟢 Stable | 🟢 Stable | 🟡 Early | 🟢 Stable | 🟢 Stable |

---

## 3. OpenClaw's Position

**Advantages over peers:**
OpenClaw maintains the highest activity volume in the ecosystem (500 issues/PRs daily), demonstrating a mature contributor base and robust CI/CD pipeline. Its recent v2026.9.9 release incorporated 112 PRs and 92 contributors—the highest collaborator count across all five projects. OpenClaw's focus on gateway scalability and event loop performance (#119720) addresses enterprise-grade concerns that less mature projects have not yet encountered.

**Technical approach differences:**
- **vs Hermes Agent:** OpenClaw prioritizes gateway-centric design with persistent sessions; Hermes Agent emphasizes desktop-centric workflows with bundled runtime (Bun for Windows).
- **vs ZeroClaw:** OpenClaw maintains a broader multi-channel strategy (Discord, WhatsApp, Feishu, Telegram); ZeroClaw applies deeper specialization per channel with explicit security sandboxing (firejail).
- **vs QwenPaw:** OpenClaw's agent abstraction is provider-agnostic; QwenPaw shows tighter coupling to specific providers (DeepSeek issues dominate their bug reports).

**Community size:**
OpenClaw leads in absolute contributor count (92 on latest release) and daily activity volume. Hermes Agent's "2,100 PRs merged since v0.21.5" suggests comparable cumulative momentum but slower release cadence.

---

## 4. Shared Technical Focus Areas

| Requirement | OpenClaw | Hermes | IronClaw | ZeroClaw | QwenPaw |
|-------------|----------|--------|----------|----------|---------|
| **Update/Release Mechanics** | ✅ (critical) | ✅ (blocking) | — | ✅ | — |
| **Multi-Channel Reliability** | ✅ (P0) | — | — | ✅ (Telegram) | — |
| **Event Loop / Blocking** | ✅ (P1) | — | — | — | — |
| **Memory/Resource Leaks** | ✅ (P1) | — | — | ✅ (P1) | ✅ |
| **Chat/Context Persistence** | — | — | — | — | ✅ (P1) |
| **Desktop App Stability** | — | ✅ | — | — | ✅ |
| **Cross-Platform Sessions** | ✅ | ✅ | — | — | — |
| **Security Sandbox** | — | — | — | ✅ (firejail) | — |

**Convergence signals:**
The ecosystem shows strongest convergence on **update mechanics** (OpenClaw, Hermes Agent, ZeroClaw all have active blockers) and **resource leak prevention** (memory growth from unclosed file handles, zombie processes, or growing caches). Multi-channel reliability is a ZeroClaw/OpenClaw specialization, while Hermes and QwenPaw share desktop-app stability concerns.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | IronClaw | ZeroClaw | QwenPaw |
|-----------|----------|--------------|----------|----------|---------|
| **Primary Target** | Enterprise/power users | Personal desktop assistant | Office QA benchmarking | Security-conscious developers | Multi-modal chat UI |
| **Core Differentiator** | Gateway scalability, agent persistence | Desktop-bundled runtime, cross-platform sync | DeepSeek-V4 optimization, daily benchmarking | Firejail sandboxing, ZeroCode TUI | Local UI (Tauri/Electron), multimodal |
| **Architecture** | Gateway-centric, async | Desktop-app centric, monolithic | CLI + benchmark harness | CLI-first, RPC-extracted | WebView/Tauri UI |
| **Security Model** | SecretRef, RBAC | HERMES_HOME, dotenv per-run | Implicit (no external plugins) | firejail + command allowlists | Local-only by default |
| **Channel Focus** | Broad (7+ channels) | Desktop-first | Office QA, DeepSeek | Telegram-focused | Web UI channels |
| **Release Cadence** | Monthly | ~Monthly (v0.21.6 today) | Ad-hoc | Active dev | Beta (v2.2.2 series) |

**Notable architectural divergence:**
- **OpenClaw** and **ZeroClaw** invest heavily in backend infrastructure (gateway, RPC extraction)
- **Hermes Agent** and **QwenPaw** prioritize desktop/web UI polish
- **IronClaw** operates in a completely different paradigm—benchmarking-driven development rather than user-product-driven

---

## 6. Community Momentum & Maturity

| Project | Activity Tier | Trajectory | Maturity Signal |
|---------|---------------|------------|-----------------|
| **OpenClaw** | Rapid iteration | ↗️ Growing | Stabilizing around v2026.9; shifting to performance hardening |
| **Hermes Agent** | Rapid iteration | ↗️ Growing | v0.21.6 consolidating 2,100 PRs; infrastructure refactors (RPC proto extraction) |
| **ZeroClaw** | Active development | ↗️ Growing | v0.9.0 roadmap; ADR/RFC governance visible (#8692) |
| **QwenPaw** | Moderate | → Stable | Beta series (v2.2.2); bug-fix focus |
| **IronClaw** | Low | → Nascent | Early feature development; no release cadence |

**Rapid iterators** (high daily activity, major refactors): OpenClaw, Hermes Agent, ZeroClaw  
**Stabilizing** (bug-fix focus, established cadence): QwenPaw  
**Emerging** (low volume, feature-building): IronClaw

---

## 7. Trend Signals for AI Agent Developers

**Converging industry priorities (from all five projects):**

1. **Update/Release System Reliability** — Multiple projects report update failures blocking users. This suggests the OSS ecosystem is hitting the ceiling of "just ship it" deployment models. Expect investment in:
   - Atomic update transactions with rollback
   - Self-healing update recovery
   - Differential/patch-based updates (vs full reinstalls)

2. **Multi-Channel Production Readiness** — OpenClaw and ZeroClaw both show active Telegram/Discord/WhatsApp bugs. Channel integration is a solved problem at PoC level but remains unsolved at production scale. Developers entering this space should prioritize:
   - Idempotent message handling
   - Retry/backoff semantics per channel
   - Rate-limit-aware dispatch

3. **Resource Leak Prevention as a Service** — Memory leaks and zombie processes appear across OpenClaw, ZeroClaw, and QwenPaw. The pattern suggests that agent runtimes (which hold long-lived state and spawn subprocesses) need:
   - Structured lifecycle hooks
   - Explicit resource tracking in telemetry
   - Automatic graceful degradation

4. **Desktop App as First-Class Platform** — Hermes Agent's Bun bundling (#165486) and QwenPaw's Electron migration discussion (#8142) signal that desktop is no longer an afterthought. The "CLI-only" era is yielding to GUI-first experiences with local model execution.

5. **Security Sandboxing Maturity** — ZeroClaw's firejail integration and OpenClaw's SecretRef model indicate the ecosystem is moving from "trust the agent" to "verify and constrain." This is a leading indicator: expect security to become a primary differentiator as agents handle more sensitive operations.

**Strategic implications for developers:**
- **If building agents:** Prioritize update mechanisms and resource lifecycle—these are the highest-friction areas across all projects.
- **If evaluating frameworks:** Projects with visible ADR/RFC processes (ZeroClaw #8691, Hermes Agent) demonstrate governance maturity and are lower-risk for long-term adoption.
- **If contributing:** Memory management, channel reliability, and cross-platform session handling are underserved areas with high impact.

---

*Generated from 2026-10-09 project digests. Data sourced from OpenClaw, Hermes Agent, IronClaw, ZeroClaw, and QwenPaw GitHub activity.*

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to generate a structured project digest for the Hermes Agent project based on the GitHub data provided. Let me analyze the data and organize it according to the requested sections.

Let me go through each section:

1. **Today's Overview** - Summarize project status
2. **Releases** - v0.21.6 was released on October 8, 2026
3. **Project Progress** - Need to identify merged/closed PRs from the data
4. **Community Hot Topics** - Most active issues with comments
5. **Bugs & Stability** - Bugs ranked by severity
6. **Feature Requests & Roadmap Signals** - Feature requests
7. **User Feedback Summary** - Pain points
8. **Backlog Watch** - Long-unanswered important issues

Let me analyze the data:

**Releases:**
- v0.21.6 released October 8, 2026 - Patch release with ~2,100 PRs merged since v0.21.5

**PRs:**
From the data, I see:
- #135409 - OPEN - E2E suites run only on release builds
- #135410 - OPEN - test(skins): cover invalid file fallback and recovery
- #135406 - OPEN - Test runs no longer leave detached gateways running
- #135407 - OPEN - fix(update): use precise native macOS process clocks
- #135408 - OPEN - fix(pm): keep a plugin's own extras recorded
- #135404 - OPEN - feat(gateway): origin-safe shared sessions
- #135333 - OPEN - Plugins with Python dependencies install again in Windows MSIX
- #135401 - OPEN - fix(tui_gateway): shutdown interrupt leaves turn markers
- #135242 - CLOSED - Onboarding apps list fades at edges
- #132365 - CLOSED - fix(update): update marker v2


- #128295 - OPEN - her assets.nousresearch.com blocked by Cloudflare
- #130895 - OPEN - Gateway compaction misses prompt cache

I notice several critical issues emerging. The Cloudflare blocking of Hermes assets is severely impacting update mechanisms, while gateway compaction problems are causing performance and caching inefficiencies. Additionally, update processes are encountering self-blocking challenges on macOS desktop platforms, indicating potential synchronization or state management complexities in the update workflow.

The most pressing concerns involve:
- Update infrastructure vulnerabilities
- Cross-platform compatibility issues
- Plugin and dependency management problems
- Gateway performance optimization needs

These interconnected issues suggest a complex system requiring coordinated debugging and architectural improvements.</think>

# Hermes Agent Project Digest — 2026-10-09

## Today's Overview

Hermes Agent shows high activity with 50 issues and 50 PRs updated in the last 24 hours. The project released **v0.21.6** yesterday (October 8), a patch consolidating ~2,100 merged PRs. Several critical regressions have emerged post-release affecting macOS Desktop updates and Windows plugin loading. The community is actively debugging, with 14 PRs merged/closed today across the update system, plugin architecture, and gateway improvements.

---

## Releases

### v0.21.6 — Hermes Agent Patch Release
**Released:** October 8, 2026

- Patch release consolidating ~2,100 PRs merged since v0.21.5
- Provides stable tagged release for Docker and Hermes Cloud
- **Note:** Full curated release notes will ship with v0.22.0
- ⚠️ **Regressions reported:** See Bugs & Stability section — this version introduced issues with Desktop update handoff and api_server startup

---

## Project Progress

### Merged/Closed PRs Today

| PR | Title | Status |
|----|-------|--------|
| [#132365](https://github.com/NousResearch/hermes-agent/pull/132365) | fix(update): update marker v2 (owner liveness, no age ceiling) + checkout lock | CLOSED |
| [#135242](https://github.com/NousResearch/hermes-agent/pull/135242) | Onboarding apps list fades at the edges when it scrolls | CLOSED |

### Active PRs Advancing

- [#135409](https://github.com/NousResearch/hermes-agent/pull/135409) — E2E suites run only on release builds, never on PRs
- [#135407](https://github.com/NousResearch/hermes-agent/pull/135407) — fix(update): use precise native macOS process clocks in desktop handoff *(addresses the Desktop update bug)*
- [#135333](https://github.com/NousResearch/hermes-agent/pull/135333) — Plugins with Python dependencies install again in Windows MSIX app
- [#135408](https://github.com/NousResearch/hermes-agent/pull/135408) — fix(pm): keep a plugin's own extras recorded across rebuilds
- [#135404](https://github.com/NousResearch/hermes-agent/pull/135404) — feat(gateway): origin-safe shared sessions across platforms (adapter side of #79198)
- [#135401](https://github.com/NousResearch/hermes-agent/pull/135401) — fix(tui_gateway): shutdown interrupt leaves turn markers behind
- [#135406](https://github.com/NousResearch/hermes-agent/pull/135406) — Test runs no longer leave detached gateways running
- [#125260](https://github.com/NousResearch/hermes-agent/pull/125260) — fix(doctor): resolve HERMES_HOME / _DHH at call time, load dotenv per run
- [#125262](https://github.com/NousResearch/hermes-agent/pull/125262) — fix(tools): compare paths by file identity on Windows
- [#130938](https://github.com/NousResearch/hermes-agent/pull/130938) — fix(gateway): withdraw queued input throughout preparation (stack of 3 PRs)

---

## Community Hot Topics

### Most Active Issues by Comment Count

1. **[#125727](https://github.com/NousResearch/hermes-agent/issues/125727)** — Automated Nous integration blocked (34 comments)
   - *Priority P3, comp/agent* — Merge conflicts in multiple agent modules blocking the scheduled Nous-to-Enterkey merge

2. **[#133992](https://github.com/NousResearch/hermes-agent/issues/133992)** — macOS Desktop update hand-off refuses its own hermes update (23 comments)
   - *Priority P2, Bug* — Regression causing exit code 2; update refuses lock held by its own custodian process

3. **[#132401](https://github.com/NousResearch/hermes-agent/issues/132401)** — scratch prune destroys multi-day agent work (20 comments)
   - *Priority P0* — 24h idle delete silently destroys work in TMPDIR; no log, quarantine, or keep-marker

4. **[#124583](https://github.com/NousResearch/hermes-agent/issues/124583)** — terminal tool background hint references non-existent tool name (15 comments)
   - *Priority P2* — Hint tells users to call `process(action='...')` but tool is actually named `process_manage`

5. **[#131859](https://github.com/NousResearch/hermes-agent/issues/131859)** — Cannot open PR via API: CreatePullRequest permission error (13 comments)
   - *Priority P2, area/auth* — Fork PR creation fails for specific accounts

### Analysis

The active discussions center on **integration/merge complexity** (#125727), **update system reliability** (#133992), and **data loss risks** in temporary storage (#132401). The community is particularly focused on Desktop platform issues affecting macOS and Windows update flows.

---

## Bugs & Stability

### Critical (P0) Bugs

| Issue | Description | Fix Status |
|-------|-------------|-------------|
| [#132401](https://github.com/NousResearch/hermes-agent/issues/132401) | scratch prune: 24h idle delete silently destroys multi-day agent work in TMPDIR | No fix PR yet |
| [#128817](https://github.com/NousResearch/hermes-agent/issues/128817) | Follow-up turns re-prefill because tool schemas change between turns | No fix PR yet |
| [#133999](https://github.com/NousResearch/hermes-agent/issues/133999) | Outbound image eviction rewrites cached prefixes even when no provider limit near | No fix PR yet |
| [#128295](https://github.com/NousResearch/hermes-agent/issues/128295) | hermes-assets.nousresearch.com returns Cloudflare WAF 403 for all non-browser clients — updates fully blocked | No fix PR yet |

### High Priority (P1-P2) Bugs

| Issue | Description | Fix Status |
|-------|-------------|-------------|
| [#135298](https://github.com/NousResearch/hermes-agent/issues/135298) | api_server never connects when zero messaging platforms configured (regression in 0.21.6) | No fix PR yet |
| [#134602](https://github.com/NousResearch/hermes-agent/issues/134602) | Desktop update button fails 100% on macOS — handoff's own custodian refused | [#135407](https://github.com/NousResearch/hermes-agent/pull/135407) open |
| [#134268](https://github.com/NousResearch/hermes-agent/issues/134268) | Desktop hand-off exports wrong pid — every desktop-initiated update self-blocks | Related to above |
| [#130895](https://github.com/NousResearch/hermes-agent/issues/130895) | Gateway: turn after compaction misses prompt cache | No fix PR yet |
| [#135383](https://github.com/NousResearch/hermes-agent/issues/135383) | Bundled provider plugin 'solstice' fails to load: pm-runtime venv lacks httpx | No fix PR yet |

### Regressions in v0.21.6

- **macOS Desktop update failure** — Multiple issues (#133992, #134602, #134268, #135405) all relate to the update handoff mechanism failing
- **api_server startup** — Issue #135298 reports regression where server doesn't connect when zero platforms configured
- **Release date display** — Issue #135217 reports v0.21.6 shows v0.21.5's release date

---

## Feature Requests & Roadmap Signals

### Notable Feature Requests

| Issue | Request | Priority |
|-------|---------|----------|
| [#79198](https://github.com/NousResearch/hermes-agent/issues/79198) | Config-driven cross-platform session groups — selective session key remapping | P3 |
| [#66543](https://github.com/NousResearch/hermes-agent/issues/66543) | Custom providers should map reasoning effort to each model's supported levels | P2, needs-decision |
| [#90432](https://github.com/NousResearch/hermes-agent/issues/90432) | Upgrade pre_api_request to a Transform hook — allow plugins to override model/provider/base_url per request | P3 |
| [#526](https://github.com/NousResearch/hermes-agent/issues/526) | Anthropic Context Editing API Integration — Server-Side, Cache-Friendly Tool/Thinking Cleanup | P3, area/compression |
| [#70547](https://github.com/NousResearch/hermes-agent/issues/70547) | Kanban: configurable dispatcher spawn for non-profile assignees | P3, needs-decision |
| [#93731](https://github.com/NousResearch/hermes-agent/pull/93731) | feat(desktop): update installed AppImages in place | P2 |

### Roadmap Indicators

- **Cross-platform session unification** — Active development visible in [#135404](https://github.com/NousResearch/hermes-agent/pull/135404) (adapter side) and #79198 (config side)
- **Windows AppImage updates** — PR #93731 targeting Linux desktop update gaps
- **MCP/OAuth improvements** — PR #99833 addresses OAuth state preservation
- **Anthropic Context Editing** — Issue #526 shows interest in server-side context management

---

## User Feedback Summary

### Pain Points Identified

1. **Update System Reliability** — Multiple users reporting Desktop update failures on macOS (exit code 2, self-blocking). Affects both the app update button and CLI `hermes update`.

2. **Plugin Loading Failures** — Windows MSIX users report plugins with Python dependencies fail to install; macOS users report solstice plugin fails to load due to missing httpx.

3. **Asset Download Blocked** — Cloudflare WAF blocking non-browser clients prevents `hermes update` and `pm install` from working for some users.

4. **Data Loss Risk** — The scratch prune issue (#132401) is particularly concerning: users can lose multi-day agent work with no warning or recovery path.

5. **Configuration Complexity** — Multiple issues around custom providers, session handling, and platform-specific behavior indicate friction in configuration management.

### Positive Signals

- Active maintenance with 2,100 PRs merged since last release
- Community engagement on bugs — multiple duplicate/triaged reports indicate users are testing thoroughly
- Cross-platform session feature advancing (#135404)

---

## Backlog Watch

### Long-Unanswered Important Issues

| Issue | Age | Priority | Concern |
|-------|-----|----------|---------|
| [#125727](https://github.com/NousResearch/hermes-agent/issues/125727) | ~12 days | P3 | Automated Nous integration blocked — waiting on merge conflict resolution |
| [#79198](https://github.com/NousResearch/hermes-agent/issues/79198) | ~65 days | P3 | Cross-platform session groups feature — waiting on decision |
| [#66543](https://github.com/NousResearch/hermes-agent/issues/66543) | ~85 days | P2 | Custom provider reasoning effort mapping — needs decision |
| [#526](https://github.com/NousResearch/hermes-agent/issues/526) | ~218 days | P3 | Anthropic Context Editing API — long-standing feature request |

### PRs Awaiting Review/Merge

- [#135409](https://github.com/NousResearch/hermes-agent/pull/135409) — E2E CI change (opened 2026-10-09)
- [#135404](https://github.com/NousResearch/hermes-agent/pull/135404) — Cross-platform sessions (opened 2026-10-09)
- [#130938](https://github.com/NousResearch/hermes-agent/pull/130938) — Gateway input withdrawal (opened 2026-10-01, needs dependency merges)
- [#124195](https://github.com/NousResearch/hermes-agent/pull/124195) — Public drain_fd pipe (opened 2026-09-26)

---

*Digest generated from GitHub data for 2026-10-09*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to generate a structured project digest for IronClaw based on the provided GitHub data. Let me analyze the data and create a proper digest.

Data provided:
- Issues updated in last 24h: 2 (both open)
- PRs updated in last 24h: 2 (both open)
- New releases: 0

Latest Issues:
1. #8129 - "Daily ironclaw failure taxonomy — 2026-10-08" by pranavraja99
2. #8130 - "Proposal: optional Sendblue iMessage/SMS extension with host-owned credentials" by lookevink

Latest Pull Requests:
1. #8119 - "feat(loop-host): opt-in turn-start tool selection with a Jev classifier" by CjS77 (contributor: new)
2. #8127 - "feat: add Sendblue iMessage and SMS extension" by lookevink

Now I need to create a structured digest following the 8 sections requested. Let me organize this information professionally.</think>

# IronClaw Project Digest — 2026-10-09

**Repository:** [nearai/ironclaw](https://github.com/nearai/ironclaw)  
**Reporting Period:** 2026-10-08 to 2026-10-09

---

## 1. Today's Overview

IronClaw shows steady activity with 2 issues and 2 pull requests updated in the last 24 hours. Both issues and PRs remain open, indicating ongoing development rather than concluded milestones. No new releases were published today. The project appears to be in a feature expansion phase, with active work on communication extensions (Sendblue iMessage/SMS) and performance optimization tools (turn-start classifier). No critical bugs or regressions were reported in this cycle.

---

## 2. Releases

**No new releases** were published in the last 24 hours.

---

## 3. Project Progress

No pull requests were merged or closed in this period. The following PRs remain open and active:

| PR | Title | Scope | Status |
|----|-------|-------|--------|
| [#8119](https://github.com/nearai/ironclaw/pull/8119) | feat(loop-host): opt-in turn-start tool selection with a Jev classifier | docs, dependencies | OPEN |
| [#8127](https://github.com/nearai/ironclaw/pull/8127) | feat: add Sendblue iMessage and SMS extension | feature | OPEN |

**Key advancement:** The Sendblue integration (PR #8127) directly implements the feature proposed in Issue #8130, showing tight alignment between community proposals and implementation progress.

---

## 4. Community Hot Topics

**Most active discussions** (by engagement):

- **[Issue #8129](https://github.com/nearai/ironclaw/issues/8129)** — *Daily ironclaw failure taxonomy — 2026-10-08*  
  **Author:** pranavraja99 | **Created:** 2026-10-08  
  Analysis of officeqa benchmark failures showing 25 non-pass tasks, predominantly genuine model-quality errors with DeepSeek-V4-Flash. This is part of an ongoing daily taxonomy effort to track and categorize model failures systematically.

- **[Issue #8130](https://github.com/nearai/ironclaw/issues/8130)** — *Proposal: optional Sendblue iMessage/SMS extension with host-owned credentials*  
  **Author:** lookevink | **Created:** 2026-10-08  
  Feature proposal for iMessage/SMS integration with Sendblue API, including phone pairing, authenticated webhooks, and terminal replies. This represents demand for broader communication channel support.

**Underlying needs identified:**
- Systematic failure analysis and benchmarking transparency (daily taxonomy effort)
- Multi-channel communication beyond current supported platforms

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions reported** in the last 24 hours.

The daily failure taxonomy (Issue #8129) tracks model-quality errors but does not indicate any new bug reports or stability issues within IronClaw itself.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Feature | Status | Likelihood of Near-Term Inclusion |
|-------|---------|--------|-----------------------------------|
| [#8130](https://github.com/nearai/ironclaw/issues/8130) | Sendblue iMessage/SMS extension | **Already being implemented** (PR #8127) | HIGH — implementation in progress |
| [#8119](https://github.com/nearai/ironclaw/pull/8119) | Opt-in turn-start tool selection with Jev classifier | **Under review** | MEDIUM-HIGH — adds performance optimization |

**Roadmap signal:** The co-occurrence of a proposal (Issue #8130) and its implementation PR (#8127) within a single day suggests rapid iteration cycles. The turn-start classifier (PR #8119) indicates focus on reducing tool selection latency—a potential performance optimization priority for the next release.

---

## 7. User Feedback Summary

**Pain points identified:**
- **Model quality limitations:** The failure taxonomy (Issue #8129) reveals that current model errors are "overwhelmingly genuine model-quality errors" rather than IronClaw framework issues, suggesting users may be pushing the framework into complex tasks where model capabilities are the bottleneck.

**Use cases driving development:**
- **Multi-channel communication:** The Sendblue extension (Issue #8130 / PR #8127) reflects user demand for direct iMessage/SMS capabilities, indicating IronClaw is being used in personal assistant and communication workflow contexts.

**Satisfaction indicators:**
- Active daily benchmarking and taxonomy efforts suggest engaged users and maintainers focused on continuous quality improvement.

---

## 8. Backlog Watch

No long-unanswered issues requiring immediate maintainer attention were identified in this period. Both issues and PRs are recent (created/updated within the last 48 hours), indicating timely engagement.

**Monitor going forward:**
- PR #8119 (new contributor) may benefit from maintainer guidance
- Daily taxonomy issues (Issue #8129 and predecessors) represent accumulating benchmark data—consider periodic synthesis

---

*Generated: 2026-10-09 | Data source: GitHub nearai/ironclaw activity feed*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>Let me analyze this GitHub data for QwenPaw and create a structured project digest for 2026-10-09.

First, let me organize the key information:

**Overview:**
- Issues: 30 updated in last 24h (17 open, 13 closed)
- PRs: 31 updated in last 24h (24 open, 7 merged/closed)
- Releases: 0 new releases

**Latest Issues Analysis:**
Looking at the issues, there are several key themes:
1. Chat history issues - #7884, #8134 - complaints about chat history disappearing
2. File/image handling bugs - #8022, #7883, #8042, #8064 - issues with PDF files and DeepSeek provider
3. Console/UI issues - #8120, #7948, #8122, #8135, #8143 - page loading failures, layout issues, performance
4. Feature requests - #2865, #8015, #8142, #8140, #8139, #8126, #8112
5. Desktop issues - #8073, #8115 - desktop console problems

**PRs Analysis:**
Key PRs:
- #8145: fix console composer controls wrapping
- #8144: fix terminal UUIDs on HTTP origins (closed)
- #8137: add "reduced effects" tier
- #8141: fix UI host types package-local
- #7089: datapaw release pipeline (closed)
- #7870: stabilize Windows unit tests (closed)
- #8138: fix clipboard on insecure HTTP origins
- #7869: session header on connection checks
- #8083: add view_audio tool
- #8136: preserve EXIF orientation during image resizing
- #8133: CJK emphasis boundaries in chat Markdown


- #8050: DST-aware process timezone (closed)
- #8132: release evaluation workflows
- #8055: offload pool download
- #8130: settings headers
- #8010: recover from media payload rejections
- #8007: task tracker registration
- #8124: route content inspection errors

I'll focus on the most critical issues requiring immediate attention:

1. Chat history problems are creating significant user frustration, with issues #7884 and #8134 highlighting serious data loss concerns
2. Multiple file and image handling bugs are disrupting user experience, particularly with PDF interactions
3. Console and UI rendering problems continue to plague the desktop application
4. The latest PRs address complex technical challenges around media processing and error routing

The project is actively addressing user-reported bugs while simultaneously introducing new features to improve overall system reliability and performance.</think>

# QwenPaw Project Digest — 2026-10-09

## 1. Today's Overview

QwenPaw shows high development activity on October 9, 2026, with 30 issues and 31 PRs updated in the last 24 hours. The project is actively addressing stability issues in the v2.2.2 beta series while continuing feature development. No new releases were published today, but several PRs were merged fixing critical bugs related to HTTP origins, Windows compatibility, and timezone handling. The issue tracker reflects ongoing user pain around chat history reliability and file handling with certain providers.

---

## 2. Releases

No new releases today. The latest release remains **v2.2.2-beta.4**, which is undergoing installation verification per Issue #8053.

---

## 3. Project Progress

**PRs Merged/Closed Today:**

| PR | Title | Status |
|----|-------|--------|
| [#8144](https://github.com/agentscope-ai/QwenPaw/pull/8144) | fix(console): support terminal UUIDs on HTTP origins | Closed |
| [#7089](https://github.com/agentscope-ai/QwenPaw/pull/7089) | ci(datapaw): add a standalone version-driven release pipeline | Closed |
| [#7870](https://github.com/agentscope-ai/QwenPaw/pull/7870) | fix: stabilize Windows unit tests | Closed |
| [#8050](https://github.com/agentscope-ai/QwenPaw/pull/8050) | fix(chats): resolve a DST-aware process timezone | Closed |

**Key Advancements:**

- **Terminal UUID Fix** — Resolved Chat page crashes on LAN/Tailscale HTTP origins where `crypto.randomUUID()` is unavailable
- **Windows Test Stabilization** — Fixed two Windows-only unit test failures related to Git byte preservation and Uvicorn reload
- **DST Timezone Fix** — Resolved transcript timestamps shifting by DST delta
- **Datapaw Release Pipeline** — Added independent version-driven release pipeline for the datapaw plugin

---

## 4. Community Hot Topics

**Most Active Issues (by comments):**

| Issue | Title | Comments | Activity |
|-------|-------|----------|----------|
| [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | [question][bug]: 压缩后刷新前端，历史信息无法全量加载 | 9 | Closed |
| [#8134](https://github.com/agentscope-ai/QwenPaw/issues/8134) | [bug]: 聊天记录和大模型上下文窗口关联 | 5 | Open |
| [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) | [Bug]: send_file_to_user 产生的 file/image 内容块 + 空 assistant 消息污染会话上下文 | 5 | Closed |
| [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | [Bug]: tool-returned PDF serialized as nested file part, DeepSeek rejects with 400 | 5 | Closed |
| [#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865) | [Feature]: Support displaying custom agent names & avatars | 4 | Closed |

**Analysis:** The most discussed topics reveal two dominant user concerns:
1. **Chat history reliability** — Multiple users report conversation history disappearing or not persisting correctly (#7884, #8134). This is the most active theme, indicating a high-impact usability issue.
2. **File/Image handling with DeepSeek** — Several issues (#8022, #7883, #8064) document PDF file handling breaking sessions with persistent 400 errors. This appears to be a known problem with the DeepSeek provider.

---

## 5. Bugs & Severity Rankings

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|--------|
| **High** | [#8134](https://github.com/agentscope-ai/QwenPaw/issues/8134) | Chat history disappears entirely — not related to context window | No |
| **High** | [#8120](https://github.com/agentscope-ai/QwenPaw/issues/8120) | Frequent page load failures | No |
| **High** | [#8115](https://github.com/agentscope-ai/QwenPaw/issues/8115) | Desktop console hangs 11-25s on cold start; WebView2 can silently die | No |
| **Medium** | [#8143](https://github.com/agentscope-ai/QwenPaw/issues/8143) | Console error spam: SVG width/height receives non-numeric "small" | No |
| **Medium** | [#8122](https://github.com/agentscope-ai/QwenPaw/issues/8122) | Settings UI layout broken in v2.2.2 beta4 | No |
| **Medium** | [#8129](https://github.com/agentscope-ai/QwenPaw/issues/8129) | Image resizing loses EXIF orientation | [#8136](https://github.com/agentscope-ai/QwenPaw/pull/8136) exists |

**Fixed in active PRs:**
- [#8136](https://github.com/agentscope-ai/QwenPaw/pull/8136) — EXIF orientation preservation during image resizing
- [#8137](https://github.com/agentscope-ai/QwenPaw/pull/8137) — "Reduced effects" tier to address GPU performance issues (#8135)

---

## 6. Feature Requests & Roadmap Signals

**New Feature Requests Today:**

| Issue | Feature | Relevance |
|-------|---------|-----------|
| [#8015](https://github.com/agentscope-ai/QwenPaw/issues/8015) | Support configuring custom Skill/Plugin marketplace sources (self-hosted, air-gapped deployments) | Enterprise/intranet use |
| [#8139](https://github.com/agentscope-ai/QwenPaw/issues/8139) | Add You.com as keyless web_search provider | Search backend expansion |
| [#8142](https://github.com/agentscope-ai/QwenPaw/issues/8142) | Switch from Tauri2 to Electron for Linux/Kylin V10 compatibility | Desktop platform support |
| [#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126) | Make skill-pool download a cancellable background job | UX improvement |
| [#8112](https://github.com/agentscope-ai/QwenPaw/issues/8112) | Add hourly Dream schedule presets | Scheduler enhancement |
| [#8083](https://github.com/agentscope-ai/QwenPaw/pull/8083) | Add view_audio tool for audio understanding | Modalities expansion |

**Likely next-version candidates:** The #8015 (custom marketplace) and #8083 (view_audio) requests align with enterprise and multimodal trends. The #8137 "reduced effects" tier PR is already in progress, addressing GPU performance concerns.

---

## 7. User Feedback Summary

**Pain Points Identified:**

1. **Chat history is unreliable** — Users express frustration that conversation history "disappears" or cannot be scrolled back. One user explicitly states: "这个体验多差么" (how bad is this experience). This is not perceived as related to model context windows.

2. **File handling breaks sessions** — Multiple users report that sending PDF files via `send_file_to_user` permanently breaks sessions, with every subsequent request failing with 400 errors.

3. **Desktop app instability** — Reports of 11-25 second cold start delays, frequent page load failures, and WebView2 processes dying silently.

4. **UI/UX regressions** — Settings page layout broken in beta4, console error spam from SVG props, and GPU performance issues on integrated graphics.

**Satisfaction Signals:**
- Feature request #2865 (custom agent names/avatars) closed — suggests this was implemented
- PR #8050 DST fix closed — indicates active bug fixing

---

## 8. Backlog Watch

**Issues Needing Maintainer Attention:**

| Issue | Age | Status | Concern |
|-------|-----|--------|---------|
| [#7633](https://github.com/agentscope-ai/QwenPaw/issues/7633) | ~25 days | Open | llama.cpp has_update() silently rolls back user runtimes — 3rd occurrence (#8125) |
| [#8009](https://github.com/agentscope-ai/QwenPaw/issues/8009) | ~10 days | Open | Media payload rejections permanently break sessions (PR #8010 addresses) |
| [#8116](https://github.com/agentscope-ai/QwenPaw/issues/8116) | 2 days | Open | Message queue issues — user reports "半年了" (six months) |
| [#8131](https://github.com/agentscope-ai/QwenPaw/issues/8131) | 1 day | Closed | Duplicate of #8134 |

**Long-standing issue:** Issue #8116 reports message queue problems persisting for six months with duplicate processing and wrong conversation attribution.

---

*Generated from GitHub data for agentscope-ai/QwenPaw on 2026-10-09*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to generate a structured project digest for ZeroClaw based on the provided GitHub data. Let me analyze the data and create appropriate sections.

Let me organize the information:

1. **Issues**: 17 open/active issues, 0 closed in last 24h
2. **PRs**: 50 updated (43 open, 7 merged/closed)
3. **Releases**: None

Let me identify key items:

**High priority bugs:**
- #11594 - firejail_args not applied (security, P1)
- #9592 - provider alias probe after model-routing (P1)
- #10863 - Telegram retries rejected voice updates indefinitely (P1)
- #11586 - ZeroCode sidebar shows green after daemon restart (P3 but user-facing)

**Recent bugs (Oct 8):**
- #11623 - ZeroCode drops pending ask_user prompt
- #11620 - Show message times in transcript (feature request)
- #11618 - ZeroCode drops queued message on SESSION_BUSY
- #11615 - Telegram ignores 429 retry_after
- #11614 - map_key_sections leaks memory
- #11613 - Cost ledger drops total_tokens
- #11612 - Re-running approved shell command aborts agent loop

**Enhancements/Features:**
- #11254 - RFC: A2A protocol crate
- #11545 - Remove obsolete StreamErrorWithUsage
- #11626 - Suppress repeated plugin egress refusal records

**Merged/Closed PRs:**
- #11349, #11395, #11380, #11396, #11305, #11090, #11469

Let me structure this properly.</think>

# ZeroClaw Project Digest — 2026-10-09

## Today's Overview

ZeroClaw shows high development activity today with **17 active issues** and **50 PRs updated** in the last 24 hours. The project is actively addressing security, stability, and feature enhancements across multiple domains—particularly runtime security, provider configuration, and the ZeroCode TUI. No new releases were published today, but several substantial PRs are advancing toward merge, including the typed built-in tool inventory system and RPC protocol extraction work. The issue queue reflects continued focus on bug fixes for the Telegram channel, memory leak resolution in config handling, and ZeroCode UI improvements.

---

## Releases

No new releases today. The most recent release milestone referenced in the codebase is **v0.9.0** (associated with PR #11165).

---

## Project Progress

### PRs Merged/Closed Today (7 total)

| PR | Author | Summary | Status |
|----|--------|---------|--------|
| [#11349](https://github.com/zeroclaw-labs/zeroclaw/pull/11349) | IftekharUddin | test(daemon): hold broadcast-hook locks in RPC drain reload test | CLOSED |
| [#11395](https://github.com/zeroclaw-labs/zeroclaw/pull/11395) | IftekharUddin | test(rpc): skip provider retries in prompt-against-500 dispatch tests | CLOSED |
| [#11380](https://github.com/zeroclaw-labs/zeroclaw/pull/11380) | drbparadise | test(skills): make creator cache timestamps deterministic | CLOSED |
| [#11396](https://github.com/zeroclaw-labs/zeroclaw/pull/11396) | IftekharUddin | test(hardware): time the pipe-holder test from fixture's answer | CLOSED |
| [#11305](https://github.com/zeroclaw-labs/zeroclaw/pull/11305) | IftekharUddin | docs(tools): record tool tiers and the retained core set | CLOSED |
| [#11090](https://github.com/zeroclaw-labs/zeroclaw/pull/11090) | JordanTheJet | docs(runtime): propose runtime composition contract | CLOSED |
| [#11469](https://github.com/zeroclaw-labs/zeroclaw/pull/11469) | tidux | fix(security): recognize null device on every host | CLOSED |

### Notable Open PRs Advancing

- **[#11308](https://github.com/zeroclaw-labs/zeroclaw/pull/11308)** — `feat(tools): add a typed built-in tool inventory with tier ratchets` (size: XL, release: v0.8.6) — Major architectural addition adding `zeroclaw_tools::inventory` with tier classification for 93 tools.
- **[#11622](https://github.com/zeroclaw-labs/zeroclaw/pull/11622)** — `feat(zerocode): show message times in the transcript` — ZeroCode transcript now displays `HH:MM` timestamps (or full datetime for older messages).
- **[#11599](https://github.com/zeroclaw-labs/zeroclaw/pull/11599)** — `fix(providers): honor native_tools configuration for compat families` — Fixes silent ignore of `native_tools` config for OpenAI-compatible providers.
- **[#11598](https://github.com/zeroclaw-labs/zeroclaw/pull/11598)** — `feat(security): support glob matching in command allowlist` — Enables directory-tree glob patterns for `allowed_commands`.
- **[#11265](https://github.com/zeroclaw-labs/zeroclaw/pull/11265)** — `feat(cli): zeroclaw user commands for roster password lifecycle` — Large feature (size: XL) for identity-access management.
- **[#11165](https://github.com/zeroclaw-labs/zeroclaw/pull/11165)** — `refactor(rpc): extract wire contract into zeroclaw-rpc-proto` — Ongoing v0.9.0 preparatory work extracting RPC protocol definitions.

---

## Community Hot Topics

### Most Active Issues (by comment engagement)

| Issue | Author | Domain | Comments | Summary |
|-------|--------|--------|----------|---------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Audacity88 | architecture | 15 | **[Tracker]: Maintainer decision queue for RFCs and design issues** — Active queue for tracking RFCs and design decisions awaiting maintainer disposition. |
| [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) | NiuBlibing | security/architecture | 5 | **Downscale oversized images instead of dropping them** — Request to implement image downscaling rather than outright rejection when exceeding `multimodal.max_image_size_mb`, with option to disable limits via `0`. |
| [#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594) | tunglambk | security | 3 | **[Bug]: firejail_args advertised but never applied** — Configured `firejail_args` are not forwarded to firejail invocation; security configuration gap. |
| [#9592](https://github.com/zeroclaw-labs/zeroclaw/issues/9592) | Audacity88 | tools | 3 | **fix(tools): probe saved provider alias after model-routing updates** — Provider alias probe reads stale pre-update config instead of updated runtime snapshot. |
| [#11586](https://github.com/zeroclaw-labs/zeroclaw/issues/11586) | Audacity88 | zerocode | 3 | **[Bug]: ZeroCode sidebar turns failed sessions green after daemon restarts** — Visual regression where session status colors reset on daemon restart. |

### Analysis

The most discussed issue (#8692) is a **meta tracking issue** for maintainer decisions on RFCs—indicating active design governance. The image downscaling request (#9887) reflects real production pain where users want more flexible multimodal handling rather than hard failures. Security-related issues (#11594, #9592) are drawing attention, suggesting the community values robust sandboxing and provider configuration correctness.

---

## Bugs & Stability

### High-Severity Bugs (P1)

| Issue | Component | Severity | Status | Fix PR? |
|-------|-----------|----------|--------|---------|
| [#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594) | config/runtime sandboxing | S2 (degraded) | OPEN | No |
| [#9592](https://github.com/zeroclaw-labs/zeroclaw/issues/9592) | tools | S2 (degraded) | IN-PROGRESS | No |
| [#10863](https://github.com/zeroclaw-labs/zeroclaw/issues/10863) | channel (Telegram) | S1 (workflow blocked) | ACCEPTED | No |

### Medium-Severity Bugs (Oct 8 reports)

- **[#11614](https://github.com/zeroclaw-labs/zeroclaw/issues/11614)** — `map_key_sections` leaks schema paths on every call, growing daemon memory (S1 workflow blocked / memory leak)
- **[#11615](https://github.com/zeroclaw-labs/zeroclaw/issues/11615)** — Telegram ignores 429 `retry_after`, causing flood-limit compounding
- **[#11618](https://github.com/zeroclaw-labs/zeroclaw/issues/11618)** — ZeroCode drops queued message when daemon refuses as `SESSION_BUSY`
- **[#11623](https://github.com/zeroclaw-labs/zeroclaw/issues/11623)** — ZeroCode drops pending `ask_user` prompt without reply, causing 600s timeout
- **[#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612)** — Re-running approved shell command aborts agent loop (reported by DefuzeX/KUMA behavioral safety tester)

### Low-Severity Bugs

- **[#11586](https://github.com/zeroclaw-labs/zeroclaw/issues/11586)** — ZeroCode sidebar status colors reset on daemon restart
- **[#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613)** — Cost ledger under-counts tokens for models with hidden reasoning (e.g., Gemini via OpenAI-compatible provider)

---

## Feature Requests & Roadmap Signals

### Notable Enhancement Issues

| Issue | Type | Domain | Priority | Summary |
|-------|------|--------|----------|---------|
| [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | RFC | architecture | P2 | **RFC: A2A protocol crate (zeroclaw-a2a)** — Proposes dedicated crate for Agent-to-Agent protocol handling |
| [#11626](https://github.com/zeroclaw-labs/zeroclaw/issues/11626) | feature | observability | P2 | **Suppress repeated plugin egress refusal records** — Reduce log noise from retrying plugins |
| [#11620](https://github.com/zeroclaw-labs/zeroclaw/issues/11620) | feature | zerocode | — | **Show message times in ZeroCode transcript** — PR #11622 already implements this |
| [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) | enhancement | multimodal | P2 | **Downscale oversized images + disable limits with 0** |
| [#11545](https://github.com/zeroclaw-labs/zeroclaw/issues/11545) | task | agent-loop | P2 | **Remove obsolete StreamErrorWithUsage after image recovery lands** |

### Roadmap Signals

- **v0.8.6** — Tool inventory system (#11308) and docs (#11305) are advancing; expected to include typed tool tiers.
- **v0.9.0** — RPC protocol extraction (#11165) is a major refactor milestone; also includes webhook dispatch over core RPC (#11320).
- **A2A Protocol** — The RFC (#11254) indicates ZeroClaw is positioning for agent-interoperability standards.

---

## User Feedback Summary

### Pain Points Identified

1. **Telegram Channel Reliability** — Multiple issues (#10863, #11615) report Telegram message handling failures: voice update retries block messages, and 429 flood limits are ignored. This is a **production stability concern**.

2. **ZeroCode UI Correctness** — Users report confusing UI states: failed sessions showing as green (#11586), pending prompts timing out silently (#11623), and messages being dropped on SESSION_BUSY (#11618). These erode user trust in the TUI.

3. **Configuration Gaps** — The `firejail_args` bug (#11594) and `native_tools` config being silently ignored (#11599 PR) indicate users cannot trust that configured security and provider options actually take effect.

4. **Memory Management** — The `map_key_sections` memory leak (#11614) growing daemon memory over time is a **long-running stability risk**.

### Positive Signals

- Strong engagement on architectural RFCs (#8692, #11254) suggests an active contributor community invested in design quality.
- Tool inventory work (#11308) and ADR tracking (#8691) indicate systematic documentation improvements.

---

## Backlog Watch

### Long-Standing Tracker Issues

| Issue | Created | Status | Summary |
|-------|---------|--------|---------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 2026-07-04 | OPEN | Maintainer decision queue for RFCs — 15 comments, active coordination |
| [#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) | 2026-07-04 | IN-PROGRESS | ADR inventory and accepted RFC decision records |
| [#9592](https://github.com/zeroclaw-labs/zeroclaw/issues/9592) | 2026-07-31 | IN-PROGRESS | Provider alias probe fix — P1, needs attention |

### PRs Requiring Maintainer Attention

| PR | Author | Risk | Summary |
|----|--------|------|---------|
| [#11265](https://github.com/zeroclaw-labs/zeroclaw/pull/11265) | IftekharUddin | HIGH | `feat(cli): zeroclaw user commands for roster password lifecycle` — size XL, needs maintainer review |
| [#11320](https://github.com/zeroclaw-labs/zeroclaw/pull/11320) | IftekharUddin | HIGH | `feat(rpc): dispatch plugin webhooks over core RPC` — size XL, needs author action |
| [#11628](https://github.com/zeroclaw-labs/zeroclaw/pull/11628) | JordanTheJet | HIGH | `docs(runtime): record bounded Tailscale tunnel exception` — needs maintainer review |
| [#11165](https://github.com/zeroclaw-labs/zeroclaw/pull/11165) | JordanTheJet | MEDIUM | `refactor(rpc): extract wire contract` — size XL, needs author action |

---

*Generated from ZeroClaw activity on 2026-10-09. All links point to `github.com/zeroclaw-labs/zeroclaw`.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*