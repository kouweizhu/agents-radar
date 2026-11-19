# OpenClaw Ecosystem Digest 2026-11-19

> Issues: 486 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-19 03:48 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

<think>The user wants me to generate a structured project digest for OpenClaw based on the GitHub data provided. Let me analyze the data and create a comprehensive digest following the specified sections.

Key data points:
- Issues: 486 total, 359 open/active, 127 closed in last 24h
- PRs: 500 total, 286 open, 214 merged/closed in last 24h
- 1 new release: v2026.10.33 (gateway-only extended-stable/LTS equivalent)

Let me structure this properly:

1. **Today's Overview** - High activity day with 486 issues and 500 PRs, one LTS release, many bug fixes in progress

2. **Releases** - v2026.10.33 is a gateway-only extended-stable release (LTS equivalent) with security updates, reliability/performance fixes, and new model support

3. **Project Progress** - Many PRs being worked on, including fixes for various bugs

4. **Community Hot Topics** - Most active issues based on comment count

5. **Bugs & Stability** - Critical bugs reported

6. **Feature Requests & Roadmap Signals** - Feature requests from the data

7. **User Feedback Summary** - Pain points from user reports

8. **Backlog Watch** - Long-unanswered issues

Let me write this in a professional, data-driven format.
</think>


# OpenClaw Project Digest — 2026-11-19

---

## 1. Today's Overview

OpenClaw enters November 19 with **extremely high activity**: 486 issues and 500 pull requests updated in the last 24 hours. The project released **v2026.10.33**, a gateway-only `extended-stable` release serving as the current LTS equivalent, bundling critical security patches, reliability improvements, and new model support. Community engagement remains intense—multiple P0/P1 bugs spanning session state corruption, transcript conflicts, and update machinery regressions dominate attention. Maintainers are actively reviewing 30+ pull requests, with several large refactors and fixes queued for merge. The project shows healthy maintenance velocity but carries a substantial bug backlog, particularly in macOS-specific behaviors, SQLite concurrency, and cross-platform plugin lifecycle management.

---

## 2. Releases

### v2026.10.33 — Gateway-Only Extended-Stable (LTS Equivalent)
**Release date:** 2026-11-19 | [Release Link](https://github.com/openclaw/openclaw/releases/tag/v2026.10.33)

**Scope:** Gateway-only bundle; no CLI/package changes.

**Contents:**
- All changes from OpenClaw end-of-October 2026 releases
- Critical security updates
- Reliability and performance fixes
- New model support

**Migration notes:** No migration required. This release is backwards-compatible with existing 2026.10.x installations. Users seeking LTS stability should prefer this release channel over standard monthly builds.

---

## 3. Project Progress

### Merged/Closed PRs Today (24h)

| PR | Author | Area | Summary |
|----|--------|------|---------|
| [#201596](https://github.com/openclaw/openclaw/pull/201596) | pash-openai | Codex | Keep selected model when faster service tiers unavailable |
| [#201566](https://github.com/openclaw/openclaw/pull/201566) | steipete | Performance | Defer transcript search snippets, retain reader scope |
| [#201591](https://github.com/openclaw/openclaw/pull/201591) | steipete | Performance | Reduce CPU work when refreshing session lists |
| [#201590](https://github.com/openclaw/openclaw/pull/201590) | fuller-stack-dev | Testing | Keep Gateway restart handoff test in step with restart markers |
| [#201548](https://github.com/openclaw/openclaw/pull/201548) | vincentkoc | CI | Register published plugin driver entry |

### Active PRs Advancing (Top Highlights)

| PR | Author | Size | Priority | Status | Summary |
|----|--------|------|----------|--------|---------|
| [#199379](https://github.com/openclaw/openclaw/pull/199379) | Marvinthebored | XL | P1 | 📣 needs proof | **fix(talk):** Voice consults fail on Claude CLI or locked native harness |
| [#201538](https://github.com/openclaw/openclaw/pull/201538) | fuller-stack-dev | L | P1 | ⏳ waiting on author | Finish half-switched Git update instead of reporting it current |
| [#196092](https://github.com/openclaw/openclaw/pull/196092) | Marvinthebored | XL | P1 | 👀 ready for maintainer look | **fix(claude-cli):** Store every reply in chat history, not just final one |
| [#201553](https://github.com/openclaw/openclaw/pull/201553) | SunnyShu0925 | L | P2 | 📣 needs proof | **fix(macos):** Treat failed port inspection as unknown, not free |
| [#197395](https://github.com/openclaw/openclaw/pull/197395) | daniel-lxs | M | P2 | 📣 needs proof | **feat(cron):** Back automation off when provider pushes back |

**Progress Assessment:** 5 PRs merged/closed, ~30 actively under review. Strong focus on performance (session list refresh, transcript search), macOS stability, and Claude CLI backend fixes.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count, last 24h)

| # | Title | Comments | Priority | Key Theme |
|---|-------|----------|----------|-----------|
| [#191944](https://github.com/openclaw/openclaw/issues/191944) | Gateway stop / stop --force fail on macOS with "Process ancestry could not be fully inspected" | 37 | P2 | **macOS process inspection bug** |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | Synchronous agent persistence blocks Gateway event loop at scale | 28 | P1 | **Concurrency/scaling bottleneck** |
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | Post-install Doctor WAL publication verification leaves 11.3 update partially finalized | 25 | P2 | **Update integrity failure** |
| [#123792](https://github.com/openclaw/openclaw/issues/123792) | Assistant turns render twice with CLI backends | 20 | P2 | **Duplicate rendering bug** |
| [#182891](https://github.com/openclaw/openclaw/issues/182891) | Prompt cache never reused — `cache read dropped N -> 0` | 19 | P2 | **Prompt caching regression** |

### Underlying Needs Analysis

**macOS Reliability (#191944):** 37 comments indicate significant user pain. The gateway stop mechanism relies on process ancestry inspection that fails on Intel macOS. Users need a workaround or fix before the feature is trustworthy in production macOS environments.

**Event Loop Blocking (#119720):** High-comment volume (28) on a P1 concurrency issue suggests users hit this at scale. The partial repairs (#140231, #138984) landed, but users report the problem persists. This points to a need for stress testing infrastructure and clearer scaling guidance.

**Update Integrity (#197083):** The WAL publication verification failure during minor updates leaves the system in an inconsistent state. Users are rightfully concerned about data integrity—this needs a definitive fix and rollback mechanism.

---

## 5. Bugs & Stability

### Critical Bugs (P0/P1)

| # | Title | Severity | Impact | Fix PR? |
|---|-------|----------|--------|---------|
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | Synchronous agent persistence blocks Gateway event loop at scale | 🦞 Diamond Lobster | Event loop starvation, crash loops | Partial (#140231, #138984 merged) |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | Curated memory roots silently excluded from bootstrap injection | 🦞 Diamond Lobster | Session state loss, security | None |
| [#152965](https://github.com/openclaw/openclaw/issues/152965) | Hot-reloading non-channel plugin disposes channel plugins | 🐚 Platinum Hermit | Message loss, stream cuts | None |
| [#199155](https://github.com/openclaw/openclaw/issues/199155) | CLI `message send` commits invisible to gateway session actor | 🦞 Diamond Lobster | UNIQUE constraint violation | None |
| [#196199](https://github.com/openclaw/openclaw/issues/196199) | Native Codex helper completions fail to resume parent | 🦐 Gold Shrimp | UX friction, paused goals | None |
| [#194451](https://github.com/openclaw/openclaw/issues/194451) | `/think` directive kills turn with SqliteTranscriptMutationConflictError | 🦞 Diamond Lobster | Message loss | Linked PR open |
| [#191476](https://github.com/openclaw/openclaw/issues/191476) | Matrix room stuck on "Plugin matrix consumer is closed" | 🦐 Gold Shrimp | Message loss | None |

### Notable Regressions

| # | Title | Version Affected | Status |
|---|-------|------------------|--------|
| [#198373](https://github.com/openclaw/openclaw/issues/198373) | Prompt cache history rewritten between turns (cache read collapses to ~1%) | Since ~2026.10.x | Open |
| [#195192](https://github.com/openclaw/openclaw/issues/195192) | Control UI chat composer missing in Safari 27.3 | Current stable | Open |
| [#198218](https://github.com/openclaw/openclaw/issues/198218) | Doctor/update maintenance livelocks while Gateway stopped | 2026.10.6, 2026.11.3 | Open |

### Stability Notes
- **SQLite concurrency issues** dominate the bug backlog: WAL verification failures, constraint violations from cross-process transcript writes, and snapshot copy overhead on every read.
- **macOS platform-specific bugs** are trending: port inspection failures, process ancestry inspection, Settings slowness, and Voice Wake routing.
- **Plugin lifecycle bugs** persist: hot-reload disposes unrelated plugins, source-capture staging re-materializes packages.

---

## 6. Feature Requests & Roadmap Signals

### High-Impact Feature Requests

| # | Title | Comments | Priority | Likelihood of Near-Term Implementation |
|---|-------|----------|----------|----------------------------------------|
| [#170562](https://github.com/openclaw/openclaw/issues/170562) | Doctor recovery for stranded terminal subagent run | 12 | P2 | **High** — Operator recovery tooling |
| [#183048](https://github.com/openclaw/openclaw/issues/183048) | CLI to inspect/settle `unknown_after_send` queue entries | 10 | P2 | **High** — Debugging UX gap |
| [#179954](https://github.com/openclaw/openclaw/issues/179954) | memory: configurable per-entry chunking paths | 9 | P3 | **Medium** — Memory system enhancement |
| [#169428](https://github.com/openclaw/openclaw/issues/169428) | Expose auth profile in `/usage full` footer template | 9 | P3 | **Medium** — Visibility improvement |
| [#170261](https://github.com/openclaw/openclaw/issues/170261) | Matrix: deliver final reply as new message in streaming modes | 6 | P2 | **Medium** — Channel UX parity |
| [#155039](https://github.com/openclaw/openclaw/issues/155039) | Manual team-sidebar agent section order | 8 | P2 | **Low** — UI polish |

### Roadmap Signals
1. **Operator tooling emphasis:** Multiple requests for CLI commands to inspect/settle internal state (stranded subagent runs, unknown_after_send queue). Suggests growing enterprise/pro-user base.
2. **Cross-platform parity:** Signal implicit-mention gaps, Telegram requireMention bypass, Matrix streaming modes—all indicate channel integration completeness work.
3. **Memory system evolution:** Per-entry chunking for custom memory files extends the curated memory architecture.

---

## 7. User Feedback Summary

### Pain Points (Real User Reports)

**1. macOS Instability**
> *"On macOS (Intel x64), `openclaw gateway stop` and `openclaw gateway stop --force` both fail with: Gateway stop failed: ServiceInspectionError: Process ancestry could not be fully inspected."* — davidchyi-beep

Users report macOS as the least reliable platform, with process management, port inspection, and Settings UI all exhibiting platform-specific failures.

**2. Update Integrity Anxiety**
> *"A managed npm upgrade from 2026.11.1 to 2026.11.3 activated the new core, then post-install Doctor failed with `SQLite WAL commit publication could not be verified`. The updater refused rollback..."* — Staruy

Users fear updates leaving their systems in inconsistent states. The lack of reliable rollback is a trust issue.

**3. Prompt Caching Not Working**
> *"With a custom OpenAI-compatible provider (DeepSeek via ProxyAPI), prompt caching effectively never engages: `cacheRead` stays at 1–3%..."* — AlexBox36183618

Users with custom providers report prompt cache hit rates near zero, increasing costs and latency significantly.

**4. Duplicate Messages in Claude CLI**
> *"With the `claude-cli` backend, every assistant turn is persisted twice through two independent mechanisms..."* — spunzon

Users see duplicate rendering of assistant turns, creating confusion about conversation state.

### Satisfaction Signals
- **Issue #192667 reporter confirmed resolution:** Settings slowness and dark-theme input visibility resolved after updating to 2026.11.5 (Asia/Shanghai timezone user).
- **Positive engagement:** 500 PRs updated in 24h indicates active contributor community.

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| # | Title | Age | Last Update | Priority | Needs |
|---|-------|-----|-------------|----------|-------|
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | Event loop blocking at scale | ~3.5 months | 2026-11-18 | P1 | Maintainer review, stress test repro |
| [#112638](https://github.com/openclaw/openclaw/issues/112638) | session.maintenance enforce mode does not bound store | ~4 months | 2026-11-19 | P2 | Product decision, source repro |
| [#141172](https://github.com/openclaw/openclaw/issues/141172) | Run dies before first session commit leaks agent.run.started | ~2.5 months | 2026-11-19 | P2 | Maintainer review |
| [#164355](https://github.com/openclaw/openclaw/issues/164355) | Plugin hooks: no extension point after tool results | ~1.5 months | 2026-11-19 | P2 | Product decision |
| [#157712](https://github.com/openclaw/openclaw/issues/157712) | Every CLI state read leaks 162 MB DB snapshot | ~2 months | 2026-11-19 | P1 | Fix needed (23 GB leaked in 25 min) |

### PRs Needing Maintainer Attention

| # | Title | Size | Priority | Status | Age |
|---|-------|------|----------|--------|-----|
| [#199379](https://github.com/openclaw/openclaw/pull/199379) | Voice consults fail on Claude CLI | XL | P1 | 📣 needs proof | 4 days |
| [#196092](https://github.com/openclaw/openclaw/pull/196092) | Store every reply in claude-cli history | XL | P1 | 👀 ready for maintainer look | 10 days |
| [#200154](https://github.com/openclaw/openclaw/pull/200154) | Long conversations stuck with no usable auth profile | S | P1 | 👀 ready for maintainer look | 3 days |
| [#196869](https://github.com/openclaw/openclaw/pull/196869) | agent --local exits silently on uppercase session key | XS | P1 | 👀 ready for maintainer look | 9 days |
| [#196848](https://github.com/openclaw/openclaw/pull/196848) | Removed Discord DM senders can still message | S | P1 | 👀 ready for maintainer look | 9 days |

### Maintainer Attention Needed
- **P1 backlog:** 5+ P1 issues without linked fix PRs; several high-impact PRs awaiting review for 3-10 days.
- **Stale issues:** Many P2 issues tagged `stale` for 3+ weeks without response.
- **Product decisions pending:** Multiple issues marked `clawsweeper:needs-product-decision` blocking resolution.

---

*Digest generated from OpenClaw GitHub data for 2026-11-19. All issue/PR links reference https://github.com/openclaw/openclaw.*

---

## Cross-Ecosystem Comparison

<think>The user wants a cross-project comparison report based on the four project digests I've already generated. Let me analyze all the data and create a comprehensive comparison report.

Key data points from each project:

**OpenClaw:**
- Issues: 486 total, 359 open/active, 127 closed in last 24h
- PRs: 500 total, 286 open, 214 merged/closed in last 24h
- 1 new release: v2026.10.33 (gateway-only extended-stable/LTS)
- Focus: Gateway architecture, Claude CLI integration, macOS reliability, prompt caching, SQLite concurrency
- P1 bugs: 6+ critical bugs including event loop blocking, session state corruption
- Strong security posture with canary/LTS channels
- Maturity: High activity, large community

**Hermes Agent (NousResearch):**
- Issues: 50 updated, 45 open, 5 closed
- PRs: 50 updated, 44 open, 6 merged/closed
- 1 canary release: v0.23.2+canary.20261118T064620Z
- Focus: Serve-to-gateway migration, Windows stability, desktop app, A2A protocol support
- P1 bug: 1 (session persistence timeout destroys turn)
- Security issues: Terminal credential snapshot exposure
- Maturity: Medium activity, active development

**IronClaw:**
- No activity
- Unknown status

**QwenPaw (agentscope-ai):**
- Issues: 18 updated, 10 open, 8 closed
- PRs: 32 updated, 20 open, 12 merged/closed
- 1 patch release: v2.3.0.post1
- Focus: Plugin architecture, security hardening, multi-channel (Telegram, QQ, WeChat, Discord, Mattermost)
- Security fixes: 3 merged (destructive commands, Office COM, email/HTTP uploads)


- Regression issues after v2.3.0.post1
- Maturity: High velocity, modularization focus

**ZeroClaw:**
- Issues: 50 updated, 40 open, 10 closed
- PRs: 50 updated, 48 open, 2 merged/closed
- No new release
- Focus: V5 registry refactor, provider model bindings, multi-channel (Telegram, Signal, Matrix, Mattermost)
- S0/S1 bugs: 4+ critical/stability issues
- 5 security issues closed recently
- Maturity: Active development, architectural refactoring

I can see QwenPaw and ZeroClaw show the most intense activity patterns. QwenPaw has strong emphasis on plugin infrastructure and security, while ZeroClaw is deep in architectural refactoring with multiple provider integrations. Both are actively fixing regressions and security issues despite their different priorities.
</think>


# Personal AI Assistant Ecosystem — Cross-Project Comparison Report

## 2026-11-19

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is in a high-velocity growth phase, with four active projects showing distinct maturity profiles and architectural priorities. **OpenClaw** dominates in community size and issue volume, while **QwenPaw** leads in commit velocity and modularization ambition. **Hermes Agent** and **ZeroClaw** are actively refactoring core architecture, signaling production hardening. The ecosystem collectively faces shared challenges around session state integrity, multi-channel reliability, SQLite concurrency, and plugin security—indicating the field has converged on a similar set of hard problems. No single project has achieved clear ecosystem dominance; instead, the space shows healthy fragmentation across architectural approaches and target user segments.

---

## 2. Activity Comparison

| Metric | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|--------|----------|--------------|---------|----------|
| **Issues Updated (24h)** | 486 | 50 | 18 | 50 |
| **Open Issues (active)** | ~359 | ~45 | ~10 | ~40 |
| **PRs Updated (24h)** | 500 | 50 | 32 | 50 |
| **Open PRs** | ~286 | ~44 | ~20 | ~48 |
| **PRs Merged/Closed (24h)** | ~214 | 6 | 12 | 2 |
| **Releases (24h)** | **1** (v2026.10.33) | **1** (v0.23.2 canary) | **1** (v2.3.0.post1) | **0** |
| **Critical Bugs (P1/S0/S1)** | 6 | 1 | 0 | 4 |
| **Security Issues Closed (today)** | 0 | 0 | 3 | 5 |
| **Architectural Refactor in Progress** | No | Yes (serve→gateway) | Yes (plugin extraction) | Yes (V5 registry) |
| **Health Score** | 7/10 | 7/10 | 7/10 | 6/10 |

**Observations:**

- **OpenClaw** has the largest absolute volume but lower close-to-open ratio, indicating a larger backlog burden
- **QwenPaw** has the best PR merge ratio (12 of 32) in proportion to open PRs, suggesting focused, efficient development
- **ZeroClaw** has high PR volume but very few merges today (2), indicating review bottlenecks or stacked PR dependencies
- **Hermes Agent** shows balanced activity with a manageable backlog

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw | Peer Average |
|-----------|----------|--------------|
| **Community Size** | Largest (486 issues/PRs/24h) | ~50 per project |
| **Release Cadence** | Mature dual-channel (canary + LTS/extended-stable) | Canary-only or ad-hoc |
| **Documentation** | Rich labels, structured issue/PR metadata | Varies |
| **Bug Triage** | Priority-tagged (P0-P3), severity-rated (🦞🦐🐚) | Less granular |
| **macOS/Linux Coverage** | Strong (primary platforms) | Varies |

### Technical Approach Differences

| Aspect | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|--------|----------|--------------|---------|----------|
| **Core Language** | Node.js (based on tooling) | Python (based on PyPI patterns) | Python | Python |
| **Primary Backend** | Gateway service | Serve → Gateway migration | Monolithic | RPC-based |
| **Session Management** | Actor-based, event-driven | Session persistence with timeouts | Cron-driven | SQLite-backed |
| **Channel Support** | CLI-centric | Desktop, CLI | Multi-channel (Telegram, QQ, WeChat, Discord, Matrix, Mattermost) | Multi-channel (Signal, Telegram, Matrix, Mattermost) |
| **Upgrade Model** | Gateway-only LTS | Canary + stable | Canary | Canary only |
| **Bug Severity Taxonomy** | 🦞/🦐/🐚 + P0-P4 | P1-P3 | S0-S3 | S0-S2 |

### Community Size Context

OpenClaw's activity is approximately **10x** that of the other three projects combined. This reflects either a larger user base, higher bug rate, or more active community engagement. The high ratio of closed-to-open items (214 merges in 24 hours) suggests strong maintainer responsiveness, though the absolute backlog remains substantial.

---

## 4. Shared Technical Focus Areas

### 4.1 Session State Integrity

**Affected:** OpenClaw, Hermes Agent, ZeroClaw

All three projects exhibit session state corruption bugs:

- **OpenClaw** (#153426): Curated memory roots silently excluded from bootstrap injection
- **Hermes Agent** (#147839): Session persistence timeout destroys whole turns
- **ZeroClaw** (#9770): Cron update silently discards declarative job changes

**Common need:** Durable session state with atomic commits, rollback mechanisms, and clear error signaling when persistence fails. The community needs standardized patterns for handling SQLite constraint violations, WAL verification, and snapshot isolation across concurrent reads.

### 4.2 SQLite Concurrency & Performance

**Affected:** OpenClaw, Hermes Agent, QwenPaw

- **OpenClaw**: WAL publication verification failures (#197083), SQLite constraint violations (#199155)
- **Hermes Agent**: Every CLI state read leaks 162 MB DB snapshot (#157712) — 23 GB in 25 minutes
- **QwenPaw**: RESPONSE_SCOPE_LIMIT eviction never fires (#8814), unbounded write staging (#117894)

**Common need:** Bounded SQLite connections, connection pooling, WAL auto-checkpoint tuning, and memory-efficient snapshot copy strategies. Projects need to handle the tension between SQLite's single-writer model and high-concurrency agent workloads.

### 4.3 Multi-Channel Reliability

**Affected:** QwenPaw, ZeroClaw, Hermes Agent (desktop)

| Issue | QwenPaw | ZeroClaw | Hermes Agent |
|-------|---------|----------|--------------|
| **Silent failures** | QQ channel disabled (#8475) | — | — |
| **DM discovery** | Mattermost first-post missed (#12382) | — | — |
| **Credential isolation** | WeChat credentials scoped (#8756) | — | — |
| **Document handling** | Telegram replied-to docs (#12404) | — | Desktop transcript corruption (#137287) |
| **Platform-specific bugs** | — | — | Windows deadlocks (#41219), WSL prompts (#128770) |

**Common need:** Health monitoring for channel adapters, proactive failure detection (not silent degradation), and cross-platform parity testing. Multi-channel projects need circuit breakers, dead-letter queues, and observability into per-channel message delivery.

### 4.4 Plugin Security & Lifecycle

**Affected:** All projects (OpenClaw, QwenPaw, ZeroClaw, Hermes Agent)

- **OpenClaw** (#152965): Hot-reloading non-channel plugin disposes channel plugins
- **QwenPaw** (#8810): Require approval for shell-based email/HTTP writes/uploads
- **ZeroClaw** (#12144): File tools authorize through wrong tier → read bypass
- **Hermes Agent** (#62336): Terminal snapshots capture credential-bearing env vars

**Common need:** Plugin sandboxing, privilege escalation controls, credential isolation per workspace, and lifecycle management that prevents plugin interactions from corrupting unrelated subsystems. The shift toward plugin architectures (QwenPaw's extraction PRs, OpenClaw's plugin drivers) increases the attack surface.

### 4.5 macOS/Windows Platform Parity

**Affected:** OpenClaw, Hermes Agent

- **OpenClaw**: Process ancestry inspection fails on Intel macOS (#191944), Settings slowness
- **Hermes Agent**: Gateway event loop deadlock on Windows (#41219), WSL prompts (#128770), Illustrator UIA timeouts

**Common need:** Platform-specific abstraction layers, conditional feature flags, and CI coverage for macOS (Intel + Apple Silicon) and Windows (WSL + native). Platform bugs tend to have long resolution cycles due to environment complexity.

---

## 5. Differentiation Analysis

### 5.1 Feature Focus

| Project | Primary Differentiator | Secondary Focus |
|---------|----------------------|-----------------|
| **OpenClaw** | Claude CLI deep integration, voice consults, prompt caching optimization | Gateway reliability, macOS stability |
| **Hermes Agent** | A2A multi-agent protocol support, serve-to-gateway migration | Windows stability, desktop app |
| **QwenPaw** | Plugin-based modularity (Whisper, MCP, local models), multi-channel breadth | Security hardening, natural language cron |
| **ZeroClaw** | V5 canonical registry for provider models, SOP decision gates | Multi-channel, RPC stability |

### 5.2 Target Users

| Project | Primary User | Secondary User |
|---------|-------------|----------------|
| **OpenClaw** | Developers, power users (CLI-centric) | Enterprise (LTS stability) |
| **Hermes Agent** | Developers, researchers (protocol-focused) | Enterprise (multi-agent workflows) |
| **QwenPaw** | Chinese-speaking users (WeChat, QQ, DingTalk), developers | Global (Discord, Telegram, Mattermost) |
| **ZeroClaw** | Security-conscious operators (SOP gates, approval flows) | Multi-channel deployers (Signal, Matrix) |

### 5.3 Technical Architecture

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **Architecture Style** | Actor/event-driven gateway | Microservices (serve→gateway) | Monolithic → plugin | RPC-centric |
| **Modularity Strategy** | Plugin drivers (registry) | SDK extraction | Feature plugins | Registry + provider bindings |
| **Concurrency Model** | Event loop, async | Async/await | Thread pool | RPC per-call |
| **Release Model** | Canary + extended-stable (LTS) | Canary + stable | Canary | Canary only |
| **Security Model** | Tool guards, prompt caching | Governance, tool guards | Tool guards, shell safety | SOP gates, tiered auth |

**Key insight:** OpenClaw is the most architecturally mature with its dual release channel. Hermes Agent is mid-migration. QwenPaw is aggressively modularizing. ZeroClaw is refactoring its provider model. The ecosystem lacks a clear leader; differentiation is architectural rather than capability-based.

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Project | Indicators |
|------|---------|------------|
| **Tier 1 — Scaling** | OpenClaw | 486 issues/PRs per day, 214 merges/24h, mature bug taxonomy, LTS channel |
| **Tier 2 — Accelerating** | QwenPaw | 32 PRs/24h, 12 merges, aggressive plugin extraction (3 XXXL PRs), security fixes merged daily |
| **Tier 3 — Refactoring** | Hermes Agent | 50 issues/PRs/24h, serve-to-gateway migration in progress, desktop app maturation |
| **Tier 4 — Reorganizing** | ZeroClaw | 50 issues/PRs/24h, V5 registry refactor, stacked PRs, low merge rate (2 today) |
| **Tier 5 — Inactive** | IronClaw | No activity detected |

### Rapidly Iterating Projects

- **QwenPaw** — 12 PRs merged in 24 hours, 3 security fixes, plugin extraction in final stages. Highest close-to-open ratio.
- **OpenClaw** — 214 merges/24h demonstrates maintainer capacity despite large backlog.

### Stabilizing Projects

- **Hermes Agent** — Serve-to-gateway migration nearing completion; after landing, expect stabilized release cadence.
- **ZeroClaw** — V5 registry refactor (9 stacked PRs) is a major architectural investment; merge rate expected to increase after stack lands.

---

## 7. Trend Signals

### 7.1 Modularity as a First-Class Design Principle

QwenPaw's extraction of Whisper, MCP, and local model management into plugins signals a broader industry shift: **non-core features should not block base image size or runtime initialization**. OpenClaw's plugin driver registry and ZeroClaw's canonical registry follow the same pattern. Expect plugin marketplaces, plugin discovery, and plugin signing to become standard features.

### 7.2 Multi-Channel Reliability Remains Under-Engineered

Both QwenPaw and ZeroClaw (the primary multi-channel projects) show **silent failure modes** (disabled channels without warnings, missed DMs, credential scope leaks). The community needs shared patterns for channel health monitoring, dead-letter queuing, and observability. This is an underserved area where tooling could be shared across projects.

### 7.3 Security Hardening is Accelerating

All four projects are actively closing security vulnerabilities:

- OpenClaw: Security updates in LTS release
- QwenPaw: 3 security fixes merged (destructive commands, Office COM, data exfiltration)
- ZeroClaw: 5 security issues closed (SSRF, file auth bypass, credential handling)
- Hermes Agent: Security concern raised (credential snapshots) but unresolved

The trend toward plugin architectures increases the attack surface, making security tooling (privilege escalation controls, credential isolation, shell safety) a growth area.

### 7.4 Session State Integrity is a Pervasive Problem

Session persistence bugs appear across **all four projects**, indicating this is an architectural challenge inherent to stateful agent systems rather than implementation-specific bugs. The industry needs shared research on:

- WAL/SQLite concurrency patterns
- Actor model vs. thread-per-session tradeoffs
- Rollback and recovery mechanisms
- Memory-efficient state snapshots

### 7.5 Enterprise/Operator Tooling Demand

Feature requests across projects cluster around **operator tooling**:

- "CLI to inspect/settle unknown_after_send queue" (OpenClaw #183048)
- "Doctor recovery for stranded terminal subagent run" (OpenClaw #170562)
- "HERMES_DUMP_RETENTION_DAYS to prune old request dumps" (Hermes Agent #157656)
- "Report Signal listener health in dashboard" (ZeroClaw #11955)

This suggests growing enterprise adoption requiring **operational visibility**, not just functional capability.

### 7.6 Windows/macOS Platform Parity Gaps

Both OpenClaw and Hermes Agent show platform-specific bugs that persist for **months** (OpenClaw #191944: ~165 days; Hermes Agent #41219: ~165 days). Cross-platform testing infrastructure and conditional feature flags are underinvested. Projects targeting global audiences (QwenPaw with Chinese IME, multi-channel support) have better platform diversity but face different stability challenges.

---

## Recommendations for AI Agent Developers

| Priority | Recommendation | Relevant Projects |
|----------|----------------|-------------------|
| **High** | Adopt plugin architecture early; non-core features should be optional | All |
| **High** | Implement channel health monitoring and silent failure detection | QwenPaw, ZeroClaw |
| **High** | Invest in SQLite concurrency patterns (bounded connections, WAL tuning) | OpenClaw, Hermes Agent, QwenPaw |
| **Medium** | Prioritize Windows/macOS CI coverage; platform bugs have long tail | OpenClaw, Hermes Agent |
| **Medium** | Build operator tooling (observability, recovery CLI) alongside feature work | All |
| **Medium** | Establish dual release channels (canary + stable) before hitting OpenClaw-scale growth | Hermes Agent, ZeroClaw |
| **Low** | Consider adopting shared bug taxonomies (severity + priority labels) | Hermes Agent, ZeroClaw |

---

*Report generated from 2026-11-19 community data. All issue/PR references link to respective GitHub repositories.*

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to generate a structured project digest for Hermes Agent based on the provided GitHub data. Let me analyze the data carefully and create a comprehensive digest following the requested format.

Let me organize the key information:

**Releases:**
- v0.23.2+canary.20261118T064620Z released on November 18, 2026

**Activity:**
- Issues: 50 updated in last 24h (45 open, 5 closed)
- PRs: 50 updated in last 24h (44 open, 6 merged/closed)

**Top Issues by comments:**
1. #62336 - Security: Terminal environment snapshots capture credentials (20 comments) - P3
2. #137287 - Bug: Desktop transcript duplicates/misorders messages (17 comments) - P2
3. #147839 - Bug: session persistence timeout destroys turn (13 comments) - P1
4. #41219 - Bug: Gateway event loop deadlock on Windows (9 comments) - P2
5. #117894 - Bug: background_review staging unbounded (8 comments) - P2
6. #71998 - Bug: pre_llm_call plugin context dropped for multimodal (8 comments) - P3 - CLOSED
7. #106487 - Bug: Web dashboard CJK IME input garbled (8 comments) - P2
8. #128770 - Bug: Desktop spawns WSL prompt on non-WSL Windows (7 comments) - P2
9. #135872 - Bug: computer_use element clicks refused (7 comments) - P2 - CLOSED
10. #83244 - Feature: Add Google Antigravity as OAuth provider (6 comments) - P3

**Top PRs:**
- #157649 - fix(desktop): keep archived sessions archived - CLOSED
- #157551 - ci(docker): manifest-list jobs back on Blacksmith - CLOSED


- #144701 - fix(gateway): keep bounded control reads off serial queue - OPEN
- #157657 - fix(gateway): resolve plugin platforms before session recovery - OPEN
- #157646 - read_file tells agent how to read past clamped long line - OPEN
- #157655 - Cron schedules accept various patterns - OPEN
- Multiple stacked PRs for gateway migration (#157430, #157403, #157387, etc.)

**Key Themes:**
1. Session persistence and stability issues (P1 bug #147839)
2. Gateway migration ongoing (stacked PRs)
3. Security concerns around credential handling in terminal snapshots
4. Desktop app issues (transcript corruption, WSL prompts)
5. Windows-specific problems (event loop deadlock)
6. Multi-language input handling problems (CJK IME)
7. computer_use tool compatibility issues

Let me structure this into a digest.
</think>


# Hermes Agent Project Digest — 2026-11-19

---

## 1. Today's Overview

Hermes Agent continues to show high development velocity with **50 issues and 50 PRs updated in the last 24 hours**. The project is actively advancing its serve-to-gateway migration (a multi-PR effort spanning 9 stacked pull requests), with 6 PRs merged or closed today including a desktop session bugfix and Docker CI improvements. One P1 severity bug (#147839) regarding session persistence timeout destroying turns remains open with 13 comments, indicating potential user impact. Security concerns around credential handling in terminal environment snapshots (#62336) continue to attract community attention. The project shipped canary release v0.23.2+canary.20261118T064620Z yesterday.

---

## 2. Releases

### v0.23.2+canary.20261118T064620Z
**Released:** November 18, 2026

- **Status:** Canary build for Hermes Agent
- **Downloads Available:** macOS Apple Silicon DMG packages (additional platform assets referenced in release notes)
- **Upgrade Path:** Standard `hermes pm update` or direct download from release artifacts
- **Breaking Changes:** None documented in this release
- **Migration Notes:** No special migration steps noted

> **Note:** Canary releases ship frequently; production users should monitor for stable releases.

---

## 3. Project Progress

### Merged/Closed PRs (6 total today)

| PR | Author | Summary | Impact |
|---|---|---|---|
| [#157649](https://github.com/NousResearch/hermes-agent/pull/157649) | benbarclay | fix(desktop): keep archived sessions archived in sidebar search | **User-Facing Bug** — Desktop sidebar search now correctly respects archived session visibility |
| [#157551](https://github.com/NousResearch/hermes-agent/pull/157551) | c2h5oh | ci(docker): manifest-list jobs back on Blacksmith; PR image builds get Blacksmith builder | **CI/Build** — Restores Docker manifest build reliability |
| [#71998](https://github.com/NousResearch/hermes-agent/issues/71998) | MikeSchulze97 | pre_llm_call plugin context dropped for multimodal image turns | **Plugin System** — Bug closed |
| [#135872](https://github.com/NousResearch/hermes-agent/issues/135872) | amplogik | computer_use element clicks refused on cua-driver 0.34 | **Computer Use** — Bug closed |
| [#132876](https://github.com/NousResearch/hermes-agent/issues/132876) | JakeGreen2145 | computer_use sends unsupported element_index to strict token-only CUA action schemas | **Computer Use** — Bug closed |
| [#157583](https://github.com/NousResearch/hermes-agent/issues/157583) | BachkoB | Turn after image message misses prompt cache | **Performance** — Bug closed |

### Key Open PRs Advancing

| PR | Author | Summary | Status |
|---|---|---|---|
| [#157657](https://github.com/NousResearch/hermes-agent/pull/157657) | petertaras | fix(gateway): resolve plugin platforms before session recovery | **New Today** — Prevents crash-left admission routing failures |
| [#157646](https://github.com/NousResearch/hermes-agent/pull/157646) | teknium1 | read_file tells agent how to read past a clamped long line | **New Today** — Improves file reading UX for minified/one-line files |
| [#157655](https://github.com/NousResearch/hermes-agent/pull/157655) | teknium1 | Cron schedules accept natural language patterns ("every second monday", "last friday of month") | **New Today** — User experience improvement |
| [#157656](https://github.com/NousResearch/hermes-agent/pull/157656) | ywt-helloworld | feat: add HERMES_DUMP_RETENTION_DAYS to prune old request dumps | **New Today** — Storage management |
| [#144701](https://github.com/NousResearch/hermes-agent/pull/144701) | AbdullahPesteli | fix(gateway): keep bounded control reads off the serial queue | **Session Stability** — Fixes 30-second deadline misses |
| [#157430](https://github.com/NousResearch/hermes-agent/pull/157430) | unsupportedpastels | feat(gateway): migrate --backends commands with rollback | **Part 6/9 of gateway migration** |
| [#157387](https://github.com/NousResearch/hermes-agent/pull/157387) | unsupportedpastels | fix(dashboard): old dashboard/serve names gateway when holding port | **Part 3/9 of gateway migration** |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| # | Title | Comments | Severity | Theme |
|---|---|---|---|---|
| [#62336](https://github.com/NousResearch/hermes-agent/issues/62336) | **[Security] Terminal environment snapshots capture credential-bearing env vars to disk** | 20 | P3 | **Security & Credential Handling** |
| [#137287](https://github.com/NousResearch/hermes-agent/issues/137287) | **[Bug]: Desktop transcript randomly duplicates, scatters/misorders, or drops user/assistant messages** | 17 | P2 | **Desktop UX Reliability** |
| [#147839](https://github.com/NousResearch/hermes-agent/issues/147839) | session persistence: a single 20s worker_receipt_timeout poisons the store and destroys the turn | 13 | **P1** | **Session State Integrity** |
| [#41219](https://github.com/NousResearch/hermes-agent/issues/41219) | Gateway event loop deadlock within 30-60s of startup on Windows after first crash | 9 | P2 | **Windows Stability** |
| [#117894](https://github.com/NousResearch/hermes-agent/issues/117894) | background_review staging is unbounded and unsurfaced | 8 | P2 | **Memory Tool Behavior** |
| [#71998](https://github.com/NousResearch/hermes-agent/issues/71998) | pre_llm_call plugin context dropped for multimodal image turns | 8 | P3 | **Plugin System** (Closed) |
| [#106487](https://github.com/NousResearch/hermes-agent/issues/106487) | Web dashboard chat: CJK (Chinese) IME input garbled/dropped | 8 | P2 | **Internationalization** |
| [#128770](https://github.com/NousResearch/hermes-agent/issues/128770) | Desktop app spawns wsl.exe install prompt on WSL-less Windows | 7 | P2 | **Windows UX** |

### Most Active PRs (by attention/strategic value)

| # | Title | Focus Area |
|---|---|---|
| [#157430](https://github.com/NousResearch/hermes-agent/pull/157430) + stacked series | Serve-to-gateway migration (9-part series) | **Core Architecture** |
| [#157657](https://github.com/NousResearch/hermes-agent/pull/157657) | Resolve plugin platforms before session recovery | **Gateway Reliability** |
| [#157646](https://github.com/NousResearch/hermes-agent/pull/157646) | read_file handles clamped long lines | **File Tool UX** |
| [#141947](https://github.com/NousResearch/hermes-agent/pull/141947) | A2A accept-then-poll client workflow | **Multi-Agent Interop** |

### Underlying Community Needs Analysis

1. **Enterprise/Credential Security:** Issue #62336 reveals a significant gap: terminal snapshots persist all environment variables including secrets injected by `bws run --` and Bitwarden Secrets Manager. Users running automated workflows expect credential isolation.

2. **Desktop Reliability:** Multiple issues (#137287, #128770) point to the Electron-based desktop app having rough edges in session management, transcript rendering, and cross-platform behavior.

3. **Windows Platform Parity:** Issues #41219, #128770, #146970 indicate Hermes Agent has platform-specific problems on Windows (event loop deadlocks, WSL prompts, Illustrator UIA timeouts).

4. **International Use:** #106487 shows CJK input reliability issues in the web dashboard—meaningful for the project's global user base.

5. **Multi-Agent Ecosystem:** PR #141947 for A2A protocol support signals the project's direction toward agent-to-agent interoperability.

---

## 5. Bugs & Stability

### P1 — Critical (User-Impacting Data Loss/Integrity)

| # | Title | Details | Fix PR? |
|---|---|---|---|
| [#147839](https://github.com/NousResearch/hermes-agent/issues/147839) | Session persistence timeout destroys whole turn | A single 20s `worker_receipt_timeout` poisons the store; user sees "No reply". 11 occurrences on one install. | None yet |

### P2 — High (Significant Functional Impact)

| # | Title | Details | Fix PR? |
|---|---|---|---|
| [#137287](https://github.com/NousResearch/hermes-agent/issues/137287) | Desktop transcript duplicates/scatters messages | Session transcript randomly renders corrupted; messages duplicated at random positions or disappear entirely |
| [#41219](https://github.com/NousResearch/hermes-agent/issues/41219) | Gateway event loop deadlock on Windows | Process freezes 30-60s after restart; asyncio event loop stops entirely, process alive but unresponsive |
| [#117894](https://github.com/NousResearch/hermes-agent/issues/117894) | background_review staging queue unbounded | Unbounded invisible queue of staged memory writes; nothing reports the queue status |
| [#106487](https://github.com/NousResearch/hermes-agent/issues/106487) | CJK IME input garbled in web dashboard | Chinese characters get corrupted/dropped in dashboard Chat tab; paste is only reliable input method |
| [#128770](https://github.com/NousResearch/hermes-agent/issues/128770) | Desktop spawns WSL prompt on non-WSL Windows | Black console window appears showing WSL install prompt when switching/creating sessions |
| [#132084](https://github.com/NousResearch/hermes-agent/issues/132084) | cua-driver pinned to outdated 0.21.0 | Pre-dates macOS Retina backing-scale fix; causes element capture failures on scaled displays |
| [#97115](https://github.com/NousResearch/hermes-agent/issues/97115) | Tool-dispatch branches drop schema parameters | 3 live instances: session_search/profile, memory/new_text, drive_preview/full silently omit parameters |
| [#103355](https://github.com/NousResearch/hermes-agent/issues/103355) | Compression attempt budget never re-arms under plugin context | With hermes-lcm active, every successful compaction burns an attempt; long turns die at max_attempts |
| [#149223](https://github.com/NousResearch/hermes-agent/issues/149223) | Hosted-room driver re-opens sqlite per settled task | CPU scales with room history; each pass opens fresh connection per task |
| [#157583](https://github.com/NousResearch/hermes-agent/issues/157583) | Turn after image message misses prompt cache | Message resent in different shape; provider cache no longer matches |
| [#157632](https://github.com/NousResearch/hermes-agent/issues/157632) | Classic CLI one-shot prints image as Python tuple | Inline images in chat -q --oneshot render as `repr()` text instead of drawing |
| [#157605](https://github.com/NousResearch/hermes-agent/issues/157605) | Inline images break inside Zellij under kitty | Unicode placeholders rejected; image attachments broken |

### P3 — Medium (Cosmetic/Workaround Available)

| # | Title | Details |
|---|---|---|
| [#62336](https://github.com/NousResearch/hermes-agent/issues/62336) | Terminal snapshots capture credentials to disk | Security concern: secrets from bws run and Bitwarden persist |
| [#83244](https://github.com/NousResearch/hermes-agent/issues/83244) | Feature: Add Google Antigravity OAuth provider | Request for first-class OAuth for Google's model offerings |
| [#22009](https://github.com/NousResearch/hermes-agent/issues/22009) | UP/DOWN should navigate visual lines in TUI | Better Readline-like behavior for wrapped input |
| [#95803](https://github.com/NousResearch/hermes-agent/issues/95803) | Auto-repaired tool name uses bare print() | Ignores --quiet; dominates headless logs (4.8K lines/24h) |
| [#157615](https://github.com/NousResearch/hermes-agent/issues/157615) | Secret redaction misses label-prefixed field dumps | 1Password Connect field dumps pass through unredacted |

---

## 6. Feature Requests & Roadmap Signals

### High-Engagement Feature Requests

| # | Title | Comments | Strategic Value |
|---|---|---|---|
| [#83244](https://github.com/NousResearch/hermes-agent/issues/83244) | Add Google Antigravity as first-class OAuth provider | 6 | **Model Provider Expansion** — Would bring Gemini 3.x/3.6 family into OAuth flow alongside openai-codex and nous |
| [#120723](https://github.com/NousResearch/hermes-agent/issues/120723) | Opt-in to preserve signed thinking blocks for trusted proxies | 4 | **Anthropic Compatibility** — For proxies that don't rewrite thinking signatures |
| [#147984](https://github.com/NousResearch/hermes-agent/issues/147984) | Print SSH tunnel command for headless webapp; add --publish flag | 4 | **Headless Deployment** — Better server/VM deployment UX |
| [#157484](https://github.com/NousResearch/hermes-agent/pull/157484) | Name old serve/dashboard backend after update, document manual move | — | **Gateway Migration** — Part 9/9 of major architectural shift |

### Infrastructure/Migration Direction

The **serve-to-gateway migration** (9 stacked PRs by unsupportedpastels) represents the project's current major architectural direction:
- Consolidates dashboard, serve, and gateway backends
- Implements rollback support and per-home run locks
- Adds update markers for tracking migrations
- Expected to land in near-term releases

### Predictors for Next Version

Based on open PRs in review-ready state:
- **HERMES_DUMP_RETENTION_DAYS** environment variable for request dump cleanup
- **Natural language cron scheduling** ("every second monday at 9am")
- **read_file long-line handling** improvements
- **Plugin platform resolution before session recovery**

---

## 7. User Feedback Summary

### Pain Points

1. **Session Reliability Anxiety:** Users report that a single timeout can destroy an entire conversation turn (#147839). The "No reply" error with no recovery path creates frustration in long working sessions.

2. **Windows Platform Immaturity:** The gateway event loop deadlock (#41219), WSL prompt spawning (#128770), and Illustrator UIA timeout (#146970) suggest Windows users face more friction than macOS/Linux users.

3. **Credential Exposure Risk:** The terminal snapshot security issue (#62336) is significant for users integrating with secret managers—workflows that inject credentials at startup see those credentials written to disk.

4. **CJK Input Broken:** Users relying on Chinese input in the web dashboard must paste text rather than type (#106487), severely impacting productivity.

5. **Memory Pressure in Long Sessions:** The unbounded background_review staging (#117894) and prompt cache misses after images (#157583) suggest context management needs optimization for extended conversations.

### Positive Signals

- The Docker CI restoration (#157551) and stacked gateway migration PRs indicate active maintenance of core infrastructure.
- New features like natural language cron scheduling (#157655) and improved file reading (#157646) show responsiveness to UX feedback.
- The A2A protocol support (#141947) signals openness to multi-agent ecosystems.

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| # | Age | Title | Priority | Status |
|---|---|---|---|---|
| [#62336](https://github.com/NousResearch/hermes-agent/issues/62336) | ~134 days | Terminal snapshots capture credentials to disk | P3 | Open, 20 comments |
| [#41219](https://github.com/NousResearch/hermes-agent/issues/41219) | ~165 days | Gateway event loop deadlock on Windows | P2 | Open, 9 comments |
| [#40343](https://github.com/NousResearch/hermes-agent/issues/40343) | ~166 days | Background processes survive CLI exit | P2 | Open, 5 comments |
| [#22009](https://github.com/NousResearch/hermes-agent/issues/22009) | ~195 days | UP/DOWN should navigate visual lines in TUI | P3 | Open, 3 comments |
| [#137287](https://github.com/NousResearch/hermes-agent/issues/137287) | ~38 days | Desktop transcript corruption (duplicates/misorders) | P2 | Open, 17 comments |
| [#97115](https://github.com/NousResearch/hermes-agent/issues/97115) | ~83 days | Tool-dispatch branches drop schema parameters | P2 | Open, 5 comments |
| [#103355](https://github.com/NousResearch/hermes-agent/issues/103355) | ~75 days | Compression budget never re-arms under hermes-lcm | P3 | Open, 5 comments |

### Issues Needing Maintainer Decision/Action

| # | Title | Blocking Factor |
|---|---|---|
| [#147839](https://github.com/NousResearch/hermes-agent/issues/147839) | Session timeout destroys turn | P1; needs prioritization |
| [#117894](https://github.com/NousResearch/hermes-agent/issues/117894) | Unbounded memory write staging | Needs decision on queue surfacing |
| [#120723](https://github.com/NousResearch/hermes-agent/issues/120723) | Preserve thinking blocks for trusted proxies | Needs decision on security tradeoff |
| [#132084](https://github.com/NousResearch/hermes-agent/issues/132084) | Bump cua-driver past 0.21.0 | Dependency pin decision |

---

## Summary Table

| Metric | Value |
|---|---|
| Issues Active (24h) | 50 (45 open, 5 closed) |
| PRs Active (24h) | 50 (44 open, 6 merged/closed) |
| New Release | v0.23.2+canary.20261118T064620Z |
| P1 Bugs Open | 1 |
| P2 Bugs Open | ~20 |
| Security Issues | 2 (both P3) |
| Stacked Gateway Migration PRs | 9 (active development) |
| Most Active Issue | #62336 — Credential snapshot security (20 comments) |
| Longest-Running Issue | #41219 — Windows deadlock (~165 days) |

---

*Generated from NousResearch/hermes-agent GitHub data — 2026-11-19*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a structured project digest for QwenPaw based on the provided GitHub data. Let me analyze all the information and create a comprehensive digest.

Let me organize the key information:

**Overview:**
- Issues updated in last 24h: 18 (10 open/active, 8 closed)
- PRs updated in last 24h: 32 (20 open, 12 merged/closed)
- New releases: 1 (v2.3.0.post1)

**Releases:**
- v2.3.0.post1 - with changes including third-party agent extraction into plugins, quote response selections, Safari fix

**Key Issues:**
1. #8071 [OPEN] - Plugin-facing theme extension point - 21 comments
2. #8811 [OPEN] - Narrow screen text clipping bug - 3 comments
3. #8475 [OPEN] - QQ channel enabled flag reset bug - 3 comments
4. #8627 [CLOSED] - Checkpoint service fails + WeChat channel issue
5. #8806 [CLOSED] - User message appearing in context that was never sent
6. #7197 [CLOSED] - MCP tool authorization for custom channels
7. #8798 [CLOSED] - Model quota exceeded issue
8. #8812 [OPEN] - startup_diagnostic floods WARNING lines - 2 comments
9. #8700 [CLOSED] - DoomLoopGate never triggers
10. #8002 [CLOSED] - Windows auto mode Office COM security issue
11. #8718 [CLOSED] - Hub model gateway fails for Anthropic/MiniMax
12. #8736 [CLOSED] - Subagent completions trigger desktop notification
13. #8814 [OPEN] - RESPONSE_SCOPE_LIMIT bug - 1 comment
14. #8712 [OPEN] - Repeated identical tool calls not interrupted - 1 comment


15. #8808 [OPEN] - Feature announcement about making QwenPaw lighter - 1 comment, 1 👍
16. #8805 [OPEN] - MALLOC_ARENA_MAX performance issue - 1 comment
17. #8802 [OPEN] - MCP context limit bug - 1 comment
18. #8807 [OPEN] - Release duty verification

**Key PRs:**
1. #8784 [OPEN] - fix(skills): keep rollback backups
2. #8707 [OPEN] - fix(crons): persist cron and heartbeat token usage
3. #8431 [OPEN] - Continuing to review the remaining pull requests to identify patterns in contributions and development priorities.

The codebase is actively refactoring local Whisper functionality and extracting local model management into plugins, while addressing various channel display and provider status reading issues. Recent work includes security enhancements for shell-based operations and loop fixes for better tool call recording, with successful resolution of scope and credential management problems.

Version bumped to 2.3.1b1 following completion of these improvements. The development focus appears centered on modularization, stability refinements, and security hardening.
</think>


# QwenPaw Project Digest — 2026-11-19

## 1. Today's Overview

QwenPaw shows high development velocity with 32 PRs and 18 issues updated in the last 24 hours. The project has released v2.3.0.post1, introducing plugin architecture for third-party agents and UI refinements. Active development continues around modularization (extracting Whisper, MCP, local model management into plugins), with multiple security fixes merged addressing shell command vulnerabilities and Office COM automation risks. Community engagement is robust with 10 open issues receiving active discussion and several bug reports tied to the latest release requiring attention.

---

## 2. Releases

### v2.3.0.post1 (Latest)

| Change | Author | PR |
|--------|--------|-----|
| Extract third-party agent into plugins | @Luohh5 | [#8426](https://github.com/agentscope-ai/QwenPaw/pull/8426) |
| Quote response selections in follow-up drafts | @yang0228 | [#8609](https://github.com/agentscope-ai/QwenPaw/pull/8609) |
| Restore Safari compatibility | — | — |

**Migration Notes:** This is a patch release focused on bug fixes and plugin architecture improvements. No breaking changes expected, but users upgrading from v2.3.0 should verify channel configurations as startup diagnostics may flood WARNING logs (see Issue #8812).

---

## 3. Project Progress

### Merged/Closed PRs Today (12 total)

| PR | Title | Category | Significance |
|----|-------|----------|--------------|
| [#8701](https://github.com/agentscope-ai/QwenPaw/pull/8701) | fix(loop): record tool calls appended to one reply message | Bug Fix | High — DoomLoopGate protection now functional |
| [#8756](https://github.com/agentscope-ai/QwenPaw/pull/8756) | fix(channels): scope WeChat credentials per agent workspace | Bug Fix | Medium — Enables multi-agent WeChat isolation |
| [#7757](https://github.com/agentscope-ai/QwenPaw/pull/7757) | fix(governance): enforce destructive-command and system-credential guards | Security | High — Critical vulnerability patch |
| [#8028](https://github.com/agentscope-ai/QwenPaw/pull/8028) | fix(security): flag inline Office COM automation in shell commands | Security | Medium — Windows Office protection |
| [#8809](https://github.com/agentscope-ai/QwenPaw/pull/8809) | chore: bump version to 2.3.1b1 | Version | Preparation for next cycle |

### Active Development (Open PRs under review)

| PR | Title | Category | Size | Focus |
|----|-------|----------|------|-------|
| [#8431](https://github.com/agentscope-ai/QwenPaw/pull/8431) | feat(local whisper): Convert local Whisper into SDK plugin | Feature | XXXL | Plugin architecture |
| [#8499](https://github.com/agentscope-ai/QwenPaw/pull/8499) | feat(providers): extract local model management into plugin | Feature | XXXL | Modularity |
| [#8469](https://github.com/agentscope-ai/QwenPaw/pull/8469) | refactor(mcp): extract mcp into plugin | Refactor | XXXL | Plugin architecture |
| [#8295](https://github.com/agentscope-ai/QwenPaw/pull/8295) | fix(channels): hide internal scaffolding at display boundary | Bug Fix | XXL | UI cleanliness |
| [#8784](https://github.com/agentscope-ai/QwenPaw/pull/8784) | fix(skills): keep rollback backups until every workspace is restored | Bug Fix | L | Reliability |
| [#8707](https://github.com/agentscope-ai/QwenPaw/pull/8707) | fix(crons): persist cron and heartbeat token usage to turn records | Bug Fix | L | Analytics accuracy |
| [#8810](https://github.com/agentscope-ai/QwenPaw/pull/8810) | fix(security): require approval for shell-based email/HTTP writes/uploads | Security | M | Tool Guard enhancement |

**Key Trend:** Heavy investment in plugin/modular architecture. Three large PRs (#8431, #8499, #8469) are extracting core features into plugin system.

---

## 4. Community Hot Topics

### Most Discussed Issues

| Issue | Title | Comments | Status | Analysis |
|-------|-------|----------|--------|----------|
| [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) | Plugin-facing theme extension point | 21 | Open | Plugin authors want semantic token override layer beyond current `colorPrimary` knob |
| [#8811](https://github.com/agentscope-ai/QwenPaw/issues/8811) | Narrow screen message text clipping, tables/code blocks unscrollable | 3 | Open | Regression from v2.3.0.post1 affecting desktop (1903px) and mobile (375px) |
| [#8475](https://github.com/agentscope-ai/QwenPaw/issues/8475) | QQ channel `enabled` flag silently reset to `false` on restart | 3 | Open | Silent failure mode — no warning logs, breaks message reception |
| [#8812](https://github.com/agentscope-ai/QwenPaw/issues/8812) | startup_diagnostic floods WARNING, Channels unavailable after update | 2 | Open | v2.3.0.post1 regression — DingTalk/Feishu require manual update |

### Feature Announcement Generating Interest

| Issue | Title | 👍 | Analysis |
|-------|-------|---|----------|
| [#8808](https://github.com/agentscope-ai/QwenPaw/issues/8808) | QwenPaw Getting Lighter and Easier to Extend | 1 | Official roadmap signal — non-core features becoming plugins; aligns with PRs #8431, #8499, #8469 |

**Underlying Community Needs:**
1. **Extensibility** — Plugin system for themes, third-party agents, MCP, local models
2. **Regression-free releases** — Multiple issues reported after v2.3.0.post1 upgrade
3. **Multi-agent support** — Credential isolation for channels (WeChat fix merged)
4. **Doom-loop detection** — Previously non-functional, now being fixed

---

## 5. Bugs & Stability

### High Severity (Active Issues)

| Issue | Title | Recurrence | Fix PR |
|-------|-------|------------|--------|
| [#8814](https://github.com/agentscope-ai/QwenPaw/issues/8814) | RESPONSE_SCOPE_LIMIT: active routes never evicted, WeChat dies at 128 | Long-running deployments | None yet |
| [#8811](https://github.com/agentscope-ai/QwenPaw/issues/8811) | Narrow screen text clipping (regression v2.3.0.post1) | Any narrow viewport | None yet |
| [#8475](https://github.com/agentscope-ai/QwenPaw/issues/8475) | QQ channel silently disabled after config reload | Per restart cycle | None yet |

### Medium Severity (Recently Fixed or Under Review)

| Issue | Title | Status | Related PR |
|-------|-------|--------|------------|
| [#8700](https://github.com/agentscope-ai/QwenPaw/issues/8700) | DoomLoopGate never triggers | Fixed | [#8701](https://github.com/agentscope-ai/QwenPaw/pull/8701) merged |
| [#8718](https://github.com/agentscope-ai/QwenPaw/issues/8718) | Hub model gateway fails for Anthropic/MiniMax presets | Closed | — |
| [#8736](https://github.com/agentscope-ai/QwenPaw/issues/8736) | Subagent completions trigger "Reply completion" notification | Closed | — |

### Notable Security Fixes Merged

| PR | Title | Risk |
|----|-------|------|
| [#7757](https://github.com/agentscope-ai/QwenPaw/pull/7757) | Enforce destructive-command and system-credential guards | Critical command protection |
| [#8028](https://github.com/agentscope-ai/QwenPaw/pull/8028) | Flag inline Office COM automation in shell commands | Windows Office hijacking |
| [#8810](https://github.com/agentscope-ai/QwenPaw/pull/8810) | Require approval for shell-based email/HTTP writes/uploads | Data exfiltration prevention |

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| Issue | Title | Author | Priority Signal | Likelihood |
|-------|-------|--------|-----------------|------------|
| [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) | Plugin-facing theme extension point (semantic token override) | BeiMu-new | 21 comments, detailed spec | High — aligns with plugin strategy |
| [#8808](https://github.com/agentscope-ai/QwenPaw/issues/8808) | Lighter and more extensible QwenPaw | Luohh5 | Official roadmap announcement | Confirmed for v2.4+ |

### In-Progress Features (Active PRs)

| PR | Feature | Progress |
|----|---------|----------|
| [#8469](https://github.com/agentscope-ai/QwenPaw/pull/8469) | MCP extraction into plugin | Under Review, XXXL |
| [#8499](https://github.com/agentscope-ai/QwenPaw/pull/8499) | Local model management plugin | Active, XXXL |
| [#8431](https://github.com/agentscope-ai/QwenPaw/pull/8431) | Local Whisper SDK plugin | Under Review, XXXL |
| [#8804](https://github.com/agentscope-ai/QwenPaw/pull/8804) | Defer Anthropic/Gemini SDK imports (performance) | Active, M |

**Prediction:** The v2.4 cycle will focus on plugin architecture completion with MCP, local models, and Whisper as the primary modularization targets. Performance improvements (deferred SDK imports) suggest continued optimization focus.

---

## 7. User Feedback Summary

### Pain Points Reported

| Category | Issue | User Impact |
|----------|-------|-------------|
| **Regression** | Narrow screen clipping (#8811) | Broken UI on mobile and narrow desktop; blocks table/code block viewing |
| **Silent Failures** | QQ channel disabled without warning (#8475) | Users lose functionality with no diagnostic indication |
| **Memory/Performance** | 1.78 GB glibc arena usage (#8805) | Excessive memory on 56-core Docker deployments |
| **Startup Noise** | WARNING flood after update (#8812) | Confusing user experience, blocks require manual intervention |
| **Context Limits** | MCP context overflow (#8802) | Tasks interrupted mid-execution |

### Positive Signals

- Security hardening well-received (multiple governance fixes)
- Plugin architecture announcement (#8808) received community support
- DoomLoopGate fix addresses long-standing protection gap

### Dissatisfaction Themes

1. **Upgrade stability** — v2.3.0.post1 introduced regressions affecting UI and channel availability
2. **Memory efficiency** — Base image not optimized (MALLOC_ARENA_MAX missing)
3. **Silent failure modes** — Critical components fail without clear indicators

---

## 8. Backlog Watch

### Issues Requiring Maintainer Attention (Stale/Important)

| Issue | Title | Age | Status | Priority |
|-------|-------|-----|--------|----------|
| [#7197](https://github.com/agentscope-ai/QwenPaw/issues/7197) | MCP tool authorization rules can't select custom channels | 3 months | Closed | User confusion persists |
| [#8805](https://github.com/agentscope-ai/QwenPaw/issues/8805) | MALLOC_ARENA_MAX missing from base image | 1 day | Open | Performance regression |
| [#8802](https://github.com/agentscope-ai/QwenPaw/issues/8802) | MCP context limit in single turn | 1 day | Open | Blocking user workflows |
| [#8712](https://github.com/agentscope-ai/QwenPaw/issues/8712) | Repeated identical tool calls never interrupted | 6 days | Open | Security concern |

### PRs Awaiting Review (Large/Strategic)

| PR | Title | Size | Waiting Since | Blockers |
|----|-------|------|---------------|----------|
| [#8431](https://github.com/agentscope-ai/QwenPaw/pull/8431) | Local Whisper plugin | XXXL | 2026-10-26 | Under Review |
| [#8469](https://github.com/agentscope-ai/QwenPaw/pull/8469) | MCP plugin extraction | XXXL | 2026-10-28 | Under Review |
| [#8499](https://github.com/agentscope-ai/QwenPaw/pull/8499) | Local model management plugin | XXXL | 2026-10-29 | Active |

---

## Summary Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Issues Updated (24h) | 18 | High activity |
| PRs Updated (24h) | 32 | Very high velocity |
| Open Issues | 10 | Moderate backlog |
| Security Fixes Merged | 3 | Positive trend |
| Plugin Architecture PRs | 3 (XXXL) | Major refactoring underway |
| Regression Reports | 4+ | Requires immediate attention |

**Health Score:** 7/10 — Strong development momentum offset by post-release regressions requiring prompt fixes. Security posture improving with Tool Guard enhancements and governance fixes.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to generate a structured project digest for ZeroClaw based on the provided GitHub data. Let me analyze the data and create a comprehensive digest following the specified sections.

Key observations from the data:
- 50 issues updated in last 24h (40 open, 10 closed)
- 50 PRs updated in last 24h (48 open, 2 merged/closed)
- No new releases
- Most recent issues have various labels indicating bugs, enhancements, security issues
- Several security-related issues are marked as high risk
- Multiple PRs are stacked/related (12450, 12452, 12453, 12454, 12455, 12456, 12457)
- There's a major refactoring effort happening with provider registries and model bindings

Let me structure this properly:

1. Today's Overview
2. Releases (none)
3. Project Progress
4. Community Hot Topics
5. Bugs & Stability
6. Feature Requests & Roadmap Signals
7. User Feedback Summary
8. Backlog Watch

I need to be thorough, use the data provided, and include GitHub links.
</think>


# ZeroClaw Project Digest — 2026-11-19

## 1. Today's Overview

ZeroClaw shows high activity with **50 issues and 50 PRs updated in the last 24 hours**, indicating intense development velocity. The project is actively advancing a major architectural refactoring centered on the **canonical V5 registry and provider model bindings** (PRs #12450–#12457), with multiple stacked PRs awaiting merge. No releases were published today, but several security-related bugs were closed, and the community is engaged with priority issues spanning runtime stability, provider reliability, and multi-channel enhancements. The bug backlog includes one S0-level security regression and multiple S1/S2 issues currently in-progress.

---

## 2. Releases

**No new releases today.**

The project remains on version **v0.9.1** (referenced in issue #12401 as a target fix version). Users awaiting the next release should monitor the [releases page](https://github.com/zeroclaw-labs/zeroclaw/releases) for updates.

---

## 3. Project Progress

### Merged/Closed PRs (Last 24h)

| PR | Title | Risk | Key Change |
|----|-------|------|------------|
| #12530 | [fix(status): report the effective agent memory backend](https://github.com/zeroclaw-labs/zeroclaw/pull/12530) | Low | Resolves misleading "Memory: none" display when SQLite backend is active |
| #12388 | [fix(discord): validate custom emoji and percent-encode unsafe chars](https://github.com/zeroclaw-labs/zeroclaw/pull/12388) | Medium | Security hardening for Discord channel reaction URLs |
| #12382 | [fix(channels): deliver the first post in newly discovered Mattermost DMs](https://github.com/zeroclaw-labs/zeroclaw/pull/12382) | Medium | Fixes DM discovery polling to include first post |
| #12404 | [fix(channels): hand replied-to documents to the agent as files](https://github.com/zeroclaw-labs/zeroclaw/pull/12404) | Medium | Telegram documents in replies now accessible to the agent |

### Active PRs Advancing

| PR | Title | Risk | Status |
|----|-------|------|--------|
| #12450 | [feat(providers): adopt canonical V5 registry and runtime model bindings](https://github.com/zeroclaw-labs/zeroclaw/pull/12450) | High | XL; stacked, needs dependencies |
| #12453 | [feat(web): edit canonical registry and select exact model references](https://github.com/zeroclaw-labs/zeroclaw/pull/12453) | High | XL; stacked, needs-author-action |
| #12452 | [feat(zerocode): configure and select canonical provider models](https://github.com/zeroclaw-labs/zeroclaw/pull/12452) | High | XL; stacked, needs-author-action |
| #12402 | [feat(web): manage write-only plugin TLS credentials](https://github.com/zeroclaw-labs/zeroclaw/pull/12402) | High | XL; pending review |
| #12386 | [fix(tools): bound Notion API response body and tool output sizes](https://github.com/zeroclaw-labs/zeroclaw/pull/12386) | — | Needs-author-action |

---

## 4. Community Hot Topics

### Most Discussed Issues

| Issue | Title | Comments | Hot Topic |
|-------|-------|----------|-----------|
| [#9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) | [Feature]: Recalculate PR risk and size labels on every update | 7 | CI automation for maintainer workflows |
| [#12401](https://github.com/zeroclaw-labs/zeroclaw/issues/12401) | [Bug]: Tool-context collapse breaks Claude Opus 5.5 chats | 6 | Runtime regression affecting production users |
| [#9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) | cron update silently discards changes to declarative jobs | 3 | Data integrity in job management |
| [#9655](https://github.com/zeroclaw-labs/zeroclaw/issues/9655) | approval cards carry no position for back-to-back cards | 3 | UX issue in Telegram/security approval flows |
| [#9736](https://github.com/zeroclaw-labs/zeroclaw/issues/9736) | RPC prompt path never writes persisted SessionState | 3 | Observability gap in session tracking |

**Analysis:** The community is most engaged with **CI automation** (#9345) and **runtime stability** (#12401). The high comment count on the PR risk feature suggests maintainers prioritize automated workflow tooling. The Claude Opus regression (#12401) indicates users are encountering this in production with the v0.9.0 release.

### Active PRs Attracting Attention

| PR | Title | Comments | Note |
|----|-------|----------|------|
| #12450 | [feat(providers): adopt canonical V5 registry](https://github.com/zeroclaw-labs/zeroclaw/pull/12450) | — | Core dependency for entire refactor stack |
| #11289 | [feat(rpc): stable denial reason identifiers](https://github.com/zeroclaw-labs/zeroclaw/pull/11289) | — | Security enhancement; marked do-not-merge pending review |

---

## 5. Bugs & Stability

### By Severity

| Severity | Issue | Title | Fix PR? |
|----------|-------|-------|---------|
| **S0** | [#11124](https://github.com/zeroclaw-labs/zeroclaw/issues/11124) | SOP decision gate ignores strict fallback when mode answer is valid | In-progress |
| **S1** | [#12401](https://github.com/zeroclaw-labs/zeroclaw/issues/12401) | Tool-context collapse breaks Claude Opus 5.5 chats (thinking-signature 400) | — |
| **S1** | [#9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) | cron update silently discards declarative job changes | — |
| **S1** | [#9492](https://github.com/zeroclaw-labs/zeroclaw/issues/9492) | `auth refresh` dead-ends when OpenAI-Codex refresh token rotated | — |
| **S2** | [#12504](https://github.com/zeroclaw-labs/zeroclaw/issues/12504) | Anthropic provider replays unsigned thinking block → 400 on retry | — |
| **S2** | [#11696](https://github.com/zeroclaw-labs/zeroclaw/issues/11696) | System prompt rebuilt from disk every turn (performance) | — |
| **S2** | [#11823](https://github.com/zeroclaw-labs/zeroclaw/issues/11823) | Shell scanner skips command substitution in heredoc bodies | — |
| **S2** | [#12413](https://github.com/zeroclaw-labs/zeroclaw/issues/12413) | OpenCode Go context-window discovery returns no capacity | — |
| **S2** | [#12559](https://github.com/zeroclaw-labs/zeroclaw/issues/12559) | Config setters store `inf` and `NaN` for decimal settings | — |
| **S2** | [#9896](https://github.com/zeroclaw-labs/zeroclaw/issues/9896) | Status banner reports `Memory: none` when SQLite is active | #12530 merged |

### Security Issues

| Issue | Title | Domain | Status |
|-------|-------|--------|--------|
| [#12169](https://github.com/zeroclaw-labs/zeroclaw/issues/12169) | `send_message_to_peer` starts recipient turn outside tool scope | Security/SOP | Closed |
| [#12146](https://github.com/zeroclaw-labs/zeroclaw/issues/12146) | MCP SSE client accepts absolute URL → SSRF risk | Security/secrets | Closed |
| [#12144](https://github.com/zeroclaw-labs/zeroclaw/issues/12144) | File tools authorize through wrong tier → read bypass | Security/policy | Closed |
| [#12122](https://github.com/zeroclaw-labs/zeroclaw/issues/12122) | Windows installers skip SHA256SUMS verification | Security/CI | Closed |
| [#12053](https://github.com/zeroclaw-labs/zeroclaw/issues/12053) | /api/docs loads unpinned third-party script | Security | Closed |

**Note:** All security issues above are now **Closed**. The team is actively addressing security debt. However, several high-risk items remain open (#9345, #9770, #9492).

---

## 6. Feature Requests & Roadmap Signals

### High-Priority Feature Requests

| Issue | Title | Priority | Likely in Next Release? |
|-------|-------|----------|------------------------|
| [#11955](https://github.com/zeroclaw-labs/zeroclaw/issues/11955) | Report Signal listener health in dashboard | P3 | Possible |
| [#11050](https://github.com/zeroclaw-labs/zeroclaw/issues/11050) | Pace native polls with other outbound channel messages | P3 | Possible |
| [#12562](https://github.com/zeroclaw-labs/zeroclaw/issues/12562) | Telegram: trusted_groups for group chat authorization | — | New, needs triage |
| [#12561](https://github.com/zeroclaw-labs/zeroclaw/issues/12561) | Matrix: clean up room invites the bot declined | — | New, needs triage |

### Roadmap Indicators from PRs

The **V5 registry refactor** (PRs #12450–#12457) represents the dominant architectural theme:

- **Canonical registry** for provider models and capabilities
- **Exact model references** in pickers and configuration
- **Web UI for registry editing** with draft/save state
- **Zerocode integration** for provider selection
- **TLS credential management** in plugin system

This suggests the next minor release (v0.9.2) will focus on **configuration UX, provider stability, and multi-channel enhancements**.

---

## 7. User Feedback Summary

### Pain Points Identified

1. **Runtime Stability in Production** — Users on v0.9.0 report Claude Opus 5.5 becoming unusable after a few tool-using turns due to `keep_tool_context_turns` collapse (#12401). This is an **S1 regression**.

2. **Memory Misreporting** — Fresh SQLite installations show "Memory: none" in status banners, misleading operators about effective backend (#9896). **Fixed in #12530**.

3. **Telegram UX Gap** — Users cannot summarize documents when replying to a Telegram message containing a file (#12404). **Fixed in PR**.

4. **OAuth Token Rotation** — OpenAI-Codex users report `auth refresh` failing when external tools rotate the refresh token (#9492). Affects CI integrations.

5. **Cron Job Mutation** — Declarative cron jobs silently discard changes to six columns (#9770), risking configuration drift in production.

### Satisfaction Signals

- Security issue resolution (5 security bugs closed today) demonstrates responsive security posture
- Active documentation PRs (#12063, #11701, #12282, #12566) suggest improved developer experience
- Mattermost DM discovery fix (#12382) addresses long-standing channel reliability issue

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (>7 days since last update, high priority)

| Issue | Title | Age | Risk | Status |
|-------|-------|-----|------|--------|
| [#9492](https://github.com/zeroclaw-labs/zeroclaw/issues/9492) | `auth refresh` dead-ends on OpenAI-Codex token rotation | ~4 months | High | In-progress |
| [#9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) | cron update silently discards declarative changes | ~3.5 months | High | In-progress |
| [#9914](https://github.com/zeroclaw-labs/zeroclaw/issues/9914) | Preserve Docker workspace root with relative cwd | ~3.5 months | High | In-progress |
| [#9685](https://github.com/zeroclaw-labs/zeroclaw/issues/9685) | Expose SOP run cancellation as RPC method | ~3.5 months | High | Deferred |
| [#11696](https://github.com/zeroclaw-labs/zeroclaw/issues/11696) | System prompt rebuilt from disk every turn | ~1 month | High | In-progress |

### PRs Awaiting Review

| PR | Title | Age | Blocker? |
|----|-------|-----|----------|
| #11289 | [feat(rpc): stable denial reason identifiers](https://github.com/zeroclaw-labs/zeroclaw/pull/11289) | ~7 weeks | Marked do-not-merge |
| #12450–#12457 | V5 registry refactor stack | ~4 days | Stacked; needs sequential merge |
| #12402 | [feat(web): manage write-only plugin TLS credentials](https://github.com/zeroclaw-labs/zeroclaw/pull/12402) | ~7 days | High risk; needs review |

---

**End of Digest** | Generated for ZeroClaw (zeroclaw-labs/zeroclaw) | 2026-11-19

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*