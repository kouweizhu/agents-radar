# OpenClaw Ecosystem Digest 2026-11-28

> Issues: 344 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-28 04:09 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

<think>The user wants me to generate a structured project digest for OpenClaw based on the provided GitHub data. Let me analyze the data and create a comprehensive digest following the specified sections.

Let me break down what I have:

**Data Overview:**
- 344 issues updated in last 24h (206 open/active, 138 closed)
- 500 PRs updated in last 24h (278 open, 222 merged/closed)
- 1 new release: v2026.12.1-beta.1

**Latest Releases:**
- v2026.12.1-beta.1: Updates to Git installations using prepared releases and resident launcher, prompt caching improvements

**Top Issues by Comment Count:**
1. #204775 (58 comments) - Design: prepared-release updates
2. #178359 (33 comments) - doctor --fix --non-interactive idles for 15+ min
3. #192547 (30 comments) - Reduce Gateway startup memory on ARM64
4. #114612 (20 comments) - SQLite unbounded growth
5. #181432 (16 comments) - Excessive baseline RSS memory
6. #127195 (15 comments) - "changed while starting work" error
7. #112638 (14 comments) - session.maintenance enforce mode
8. #92473 (13 comments) - Model fallback notice leaks
9. #79223 (13 comments) - Dream Diary language configurable
10. #126821 (13 comments) - SQLite corruption recurs

**Top PRs by Activity:**
- Multiple small fixes and improvements
- Some XL PRs like #207207 (docs/skills) and #201288 (automation billing)
- Many test improvements

Let me structure this into a proper digest.
</think>


# OpenClaw Project Digest — 2026-11-28

## 1. Today's Overview

OpenClaw maintains high velocity with **500 PRs and 344 issues** updated in the last 24 hours. The project released **v2026.12.1-beta.1**, introducing prepared Git releases with resident launchers and prompt cache reuse across routes. Community engagement remains intense—58 comments on the prepared-release design issue alone. Stability concerns persist around memory consumption on constrained hosts and SQLite transaction timeouts, with multiple P0/P1 bugs still open. The team is actively merging small fixes while larger feature work (automation billing, session management) awaits review.

---

## 2. Releases

### v2026.12.1-beta.1
**Published:** 2026-11-28 | [Release Page](https://github.com/openclaw/openclaw/releases/tag/v2026.12.1-beta.1)

**Key Changes:**
| Area | Change | PRs |
|------|--------|-----|
| **Git Installations** | Use prepared releases with resident launcher | [#203194](https://github.com/openclaw/openclaw/issues/203194), [#203497](https://github.com/openclaw/openclaw/issues/203497) |
| **Package Updates** | Prepare without stopping the serving Gateway | Same PRs |
| **Prompt Caching** | Compaction reuses warm prompt cache across routes (read-only) | — |

**Contributor:** @obviyus

> ⚠️ This is a beta release. Users on stable channels should await v2026.12.1 stable.

---

## 3. Project Progress

### Merged/Closed PRs Today (Selected Highlights)

| PR | Title | Size | Impact |
|----|-------|------|--------|
| [#207208](https://github.com/openclaw/openclaw/pull/207208) | fix(doctor): lint --all reads client credentials from source state | S | UX friction |
| [#207202](https://github.com/openclaw/openclaw/pull/207202) | improve: defer browser profile setup for configs without a browser | M | Performance |
| [#207207](https://github.com/openclaw/openclaw/pull/207207) | docs(skills): load specialty procedures for the selected task | XL | UX friction |
| [#207196](https://github.com/openclaw/openclaw/pull/207196) | fix: keep cold Skills detail loads from failing layout tests | XS | Test stability |
| [#207119](https://github.com/openclaw/openclaw/pull/207119) | fix: stabilize Control UI update-triage tests on Bun | XS | Test stability |
| [#207211](https://github.com/openclaw/openclaw/pull/207211) | chore(i18n): refresh native locales | XL | Localization |

**Open PRs Under Review:**
- [#201288](https://github.com/openclaw/openclaw/pull/201288) — `fix: make automation billing accounts explicit` (XL, compatibility/auth-provider risk)
- [#207205](https://github.com/openclaw/openclaw/pull/207205) — `fix(agents): keep every untrusted-content block closed` (M, security-sensitive)
- [#207109](https://github.com/openclaw/openclaw/pull/207109) — `improve: reduce allocations when preparing session rows` (M)

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| # | Title | Comments | Priority | Theme |
|---|-------|----------|----------|-------|
| [#204775](https://github.com/openclaw/openclaw/issues/204775) | Design: prepared-release updates (state, ownership and plan) | **58** | P2 | Architecture coordination |
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | doctor --fix --non-interactive idles 15+ min (macOS) | **33** | P1 | CLI hang |
| [#192547](https://github.com/openclaw/openclaw/issues/192547) | Reduce Gateway startup memory on constrained ARM64 hosts | **30** | P2 | Memory optimization |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | SQLite unbounded growth: missing retention policy | **20** | P2 | Data management |
| [#181432](https://github.com/openclaw/openclaw/issues/181432) | Excessive baseline RSS memory (~1.9 GB) in 2026.10.5 | **16** | P1 | Memory regression |

### Analysis

**Prepared Release Architecture (#204775, 58 comments):**
The community is deeply engaged in the new update mechanism design. This is a cross-cutting architectural change affecting Git installations and package updates. The high comment count indicates healthy debate about state management, ownership boundaries, and implementation planning.

**Memory Issues Dominate:**
Three of the top five issues relate to memory consumption:
- ARM64 startup memory constraints
- 1.9 GB baseline RSS regression
- SQLite table unbounded growth

This signals users are running OpenClaw on resource-constrained infrastructure and need aggressive memory optimization.

---

## 5. Bugs & Stability

### Critical Bugs (P0/P1) — Active

| # | Title | Severity | Impact | Age | Fix PR? |
|---|-------|----------|--------|-----|---------|
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | doctor --fix hangs 15+ min, no output | 🦪 Silver | Crash-loop | 39 days | No |
| [#181432](https://github.com/openclaw/openclaw/issues/181432) | 1.9 GB RSS baseline memory (2026.10.5) | 🦪 Silver | Crash-loop | 36 days | No |
| [#194664](https://github.com/openclaw/openclaw/issues/194664) | Codex protected continuation blocks follow-ups | 🦞 Diamond | UX release-blocker | 21 days | No |
| [#202518](https://github.com/openclaw/openclaw/issues/202518) | claude-cli run never closes after sessions_spawn | 🦪 Silver | Session-state, message-loss | 8 days | No |
| [#200148](https://github.com/openclaw/openclaw/issues/200148) | /restart hangs forever on macOS | 🦐 Gold | Crash-loop | 12 days | No |
| [#206669](https://github.com/openclaw/openclaw/issues/206669) | Windows SQLite integrity worker stays alive | 🦪 Silver | Crash-loop | 1 day | No |

### Regressions Reported Today

| # | Title | Regression | Priority |
|---|-------|------------|----------|
| [#206669](https://github.com/openclaw/openclaw/issues/206669) | Windows SQLite integrity worker stays alive (300s wait per DB) | Yes | P1 |
| [#205566](https://github.com/openclaw/openclaw/issues/205566) | Control UI replies never complete — 360s watchdog aborts compaction | Yes | P1 |
| [#196820](https://github.com/openclaw/openclaw/issues/196820) | Control UI locks at ~100% CPU in `getAnimations()` loop | Yes | P1 |

### Stability Watch

- **SQLite corruption (#126821):** 5 events in 5 days on WSL2, including "paralyzed gateway" mode
- **Memory growth (#195497):** ~3 GB in 17 hours on v2026.11.1
- **Post-migration reclamation (#206030):** Session DB degraded, channel messages rejected

---

## 6. Feature Requests & Roadmap Signals

### High-Engagement Feature Requests

| # | Title | Comments | 👍 | Status |
|---|-------|----------|-----|--------|
| [#92473](https://github.com/openclaw/openclaw/issues/92473) | Model fallback notice leaks to external channels | 13 | 1 | Triaged |
| [#79223](https://github.com/openclaw/openclaw/issues/79223) | Configurable Dream Diary language/prompt | 13 | 2 | Closed |
| [#204701](https://github.com/openclaw/openclaw/issues/204701) | backup git create: configurable git timeout + table exclusions | 7 | 0 | Open |
| [#151766](https://github.com/openclaw/openclaw/issues/151766) | active-memory German (DE) escalation patterns missing | 6 | 2 | Open |
| [#167341](https://github.com/openclaw/openclaw/issues/167341) | Override user-facing copy for classified model-request failures | 9 | 0 | Open |

### Likely Near-Term Additions

Based on PR activity and issue engagement:

1. **Automation billing explicitness (#201288)** — Large PR under review, addresses billing account clarity
2. **Session row allocation reduction (#207109)** — Memory optimization work in progress
3. **German language support (#151766)** — Simple pattern addition, 2 👍 reactions
4. **Configurable git timeouts (#204701)** — Addresses recurring scheduled-backup failures

---

## 7. User Feedback Summary

### Pain Points (Recurring Themes)

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Memory consumption** | Multiple reports of 1.9-3 GB RSS, ARM64 crashes | High |
| **SQLite instability** | Corruption, unbounded growth, transaction timeouts | High |
| **macOS issues** | doctor hangs, restart failures, AppImage blank windows | Medium-High |
| **Session lifecycle** | Helper completions, protected continuations, spawn/yield | Medium |
| **UX friction** | Approval cards missing in TUI, model fallback leaks | Medium |

### Positive Signals

- **New beta release (#207207, #207211)** shows active i18n and documentation improvements
- **Test infrastructure investment** (#207209, #207217, #207199) indicates quality focus
- **Copilot test cleanup (#207203)** shows attention to developer experience

### User Satisfaction Indicators

- Feature request #79223 (Dream Diary language) received 2 👍 before closure — indicates desire for localization
- Bug report #202213 received 1 👍 — users want compressed archive fix in stable
- Security-related issue #205007 appears spurious (license confusion)

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| # | Title | Created | Days Open | Priority | Gap |
|---|-------|---------|-----------|----------|-----|
| [#58289](https://github.com/openclaw/openclaw/issues/58289) | Non-main agent may miss models.json on empty provider plan | 2026-03-31 | **241 days** | P2 | Auth-provider |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | SQLite unbounded growth (memory tables) | 2026-07-27 | **124 days** | P2 | Data management |
| [#92473](https://github.com/openclaw/openclaw/issues/92473) | Model fallback notice leaks externally | 2026-06-12 | **169 days** | P2 | UX friction |
| [#127195](https://github.com/openclaw/openclaw/issues/127195) | 16 identical "changed while starting work" errors | 2026-08-21 | **99 days** | P2 | Observability |
| [#112638](https://github.com/openclaw/openclaw/issues/112638) | session.maintenance enforce mode unbounded | 2026-07-22 | **129 days** | P2 | Session-state |

### Issues Needing Maintainer Attention

| # | Title | Label | Comments | Blocked |
|---|-------|-------|----------|---------|
| [#207190](https://github.com/openclaw/openclaw/issues/207190) | Agent cannot stop Gateway — 324s hang | needs-maintainer-review | 5 | Today |
| [#207205](https://github.com/openclaw/openclaw/pull/207205) | Untrusted-content block security fix | needs-environment | — | Stacked PR |
| [#201288](https://github.com/openclaw/openclaw/pull/201288) | Automation billing explicit | compatibility, auth-provider | — | Draft |

### Stale Issues Requiring Triage

| # | Title | Stale Date | Resolution Needed |
|---|-------|------------|-------------------|
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | SQLite corruption recurs (WSL2) | — | Reproduction or close |
| [#158897](https://github.com/openclaw/openclaw/issues/158897) | Make Dreaming MEMORY.md budget configurable | 2026-11-27 | Close or assign |
| [#178914](https://github.com/openclaw/openclaw/issues/178914) | Memory search ranking not configurable | 2026-11-27 | Product decision |

---

## Summary Metrics

| Metric | Value | Trend |
|--------|-------|-------|
| Issues active (24h) | 344 | High |
| PRs active (24h) | 500 | High |
| Open P0/P1 bugs | ~15 | Stable |
| New release | v2026.12.1-beta.1 | — |
| Avg issue age (top 10) | ~45 days | Needs attention |

---

*Digest generated from OpenClaw GitHub data for 2026-11-28. All links point to https://github.com/openclaw/openclaw.*

---

## Cross-Ecosystem Comparison

<think>The user wants me to generate a cross-project comparison report based on the five project digests I've created. Let me analyze all the data and create a comprehensive, professional report.

Let me compile the key metrics from each project:

1. **OpenClaw** (github.com/openclaw/openclaw)
   - Issues (24h): 344 (206 open, 138 closed)
   - PRs (24h): 500 (278 open, 222 merged)
   - Releases: v2026.12.1-beta.1
   - Health indicators: High activity, P0/P1 bugs active, memory issues prominent, SQLite stability concerns

2. **Hermes Agent** (github.com/nousresearch/hermes-agent)
   - Issues (24h): 50 (48 open, 2 closed)
   - PRs (24h): 50 (49 open, 1 merged)
   - Releases: v0.23.5
   - Health indicators: High velocity, Desktop redesign in progress, plugin extraction work, memory/compression bugs

3. **IronClaw** (github.com/nearai/ironclaw)
   - Issues (24h): 0
   - PRs (24h): 0
   - Releases: None
   - Health indicators: Inactive/not publicly active

4. **QwenPaw** (github.com/agentscope-ai/QwenPaw)
   - Issues (24h): 10 (8 open, 2 closed)
   - PRs (24h): 25 (19 open, 6 merged)
   - Releases: None today
   - Health indicators: Active bug fixing, console stability focus, enterprise signals

5. **ZeroClaw** (github.com/zeroclaw-labs/zeroclaw)
   - Issues (24h): 11 (all open/active)
   - PRs (24h): 39 (all open)
   - Releases: None
   - Health indicators: High velocity, 5 S1/S2 bugs, computer_use tool in development

Now I'll structure this into the requested sections.
</think>


# Personal AI Assistant & Agent Open-Source Ecosystem Report
**As of 2026-11-28**

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing a period of vigorous, uneven growth. **OpenClaw** dominates in absolute activity volume—10× the issue and PR throughput of any peer—but carries a correspondingly large bug surface, with ~15 active P0/P1 issues spanning memory regressions, SQLite corruption, and session lifecycle failures. **Hermes Agent** maintains the second-largest footprint, distinguished by a deliberate modularization strategy (moving Weixin, WeCom, DingTalk to separate plugins) and a sweeping Desktop workspace redesign. **ZeroClaw** shows the highest velocity-per-contributor ratio, fielding a substantial feature pipeline (macOS `computer_use`, LLMTR provider, Codex subscription UI) alongside five critical S1/S2 bugs reported in a single 24-hour window. **QwenPaw** operates at a smaller scale but with strong enterprise adoption signals and a disciplined focus on console stability. **IronClaw** has no recent public activity and may be operating under a private or nearline development model.

The collective picture is of an ecosystem still iterating rapidly on core primitives: memory management, session isolation, tool-result handling, and cross-platform stability. No project has reached a plateau of feature completeness; the landscape remains competitive, with architectural choices—Rust-based gateways (ZeroClaw), Python-centric design (QwenPaw), prepared release mechanisms (OpenClaw)—emerging as meaningful differentiators.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Open Issues | Open PRs | Releases (24h) | Health Score |
|---------|-------------|-----------|-------------|----------|----------------|--------------|
| **OpenClaw** | 344 | 500 | ~206 active | ~278 open | v2026.12.1-beta.1 | 🟡 High activity, high bug surface |
| **Hermes Agent** | 50 | 50 | ~48 active | ~49 open | v0.23.5 | 🟢 High velocity, stable releases |
| **QwenPaw** | 10 | 25 | 8 active | 19 open | None | 🟢 Solid activity-to-bug ratio |
| **ZeroClaw** | 11 | 39 | 11 active | 39 open | None | 🟡 High velocity, active S1 bugs |
| **IronClaw** | 0 | 0 | — | — | None | ⚫ No public activity |

**Observations:**

- **OpenClaw's absolute volume is 10× peers**, but the open-to-closed ratio (206:138 issues, 278:222 PRs) suggests the project absorbs a high volume of low-friction contributions rather than achieving proportional closure. A 1.5:1 open-to-closed ratio is healthy; the project's scale amplifies absolute backlog.
- **ZeroClaw's 39 open PRs with zero closed PRs** in 24 hours indicates a snapshot window where contributions outpaced merges—a normal burst pattern given the number of active fix branches, but worth monitoring.
- **QwenPaw shows the healthiest open-to-closed ratio** among active projects (8 open, 6 closed on PRs), suggesting efficient review cadence.
- **Hermes Agent's 50:1 PR ratio** (1 closed out of 50 updated) reflects the same snapshot artifact; the v0.23.5 release merged ~338 PRs, demonstrating the project processes batches rather than individual PRs.

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw's Position | Peer Comparison |
|-----------|---------------------|-----------------|
| **Community size** | Largest by volume (344 issues, 500 PRs/24h) | 10× Hermes Agent, 34× QwenPaw |
| **Release cadence** | Beta/stable dual-track with prepared releases | Hermes Agent publishes stable checkpoints; others irregular |
| **Feature scope** | Broadest: skills, memory, compression, gateway, TUI, CLI | Hermes Agent leads in Desktop and plugin architecture; ZeroClaw leads in security and platform-specific tools |
| **Memory management** | Most mature concerns (prompt caching, RSS monitoring, compaction) | Hermes Agent has comparable compression issues; ZeroClaw focused on Rust-native efficiency |
| **SQLite expertise** | Deepest (integrity workers, corruption recovery, unbounded growth tracking) | Unique to OpenClaw; others use different data layers |

### Technical Approach Differences

OpenClaw's **prepared release mechanism** (resident launchers with pre-downloaded artifacts) is architecturally distinct from peers. It trades download flexibility for reliability, targeting environments where network interruptions during upgrades are costly—aligning with its ARM64 and constrained-host user base.

Hermes Agent operates at a higher **abstraction level** (autonomous skill improvement, Dream Diary, delegation modes) rather than infrastructure reliability. ZeroClaw's Rust-based gateway prioritizes throughput and memory safety over Python's flexibility, reflected in its focus on `computer_use` tools and low-level `allowed_commands` policy enforcement.

### Community Size

OpenClaw's comment velocity on design issues (58 comments on the prepared-release architecture) indicates a large, engaged community participating in architectural decisions. However, the 241-day age of issue #58289 suggests maintainer bandwidth is the limiting factor, not community size.

---

## 4. Shared Technical Focus Areas

Several cross-cutting concerns appear independently across multiple projects, indicating genuine ecosystem-level pain points:

### Memory Management & Optimization
| Project | Specific Issue |
|---------|----------------|
| **OpenClaw** | 1.9 GB RSS baseline regression, ARM64 startup memory, SQLite unbounded growth |
| **Hermes Agent** | Compression sends role-typed tools to incompatible endpoints; compaction watchdog aborts at 360s |
| **ZeroClaw** | Markdown log memory bounds; SQLite embedding repairs |

**Unified need:** All three projects are experiencing memory pressure from different angles—baseline RSS, compression pipeline efficiency, and data store growth—suggesting no single silver-bullet solution and that memory profiling tooling would benefit the entire ecosystem.

### Tool-Result Reliability & Multi-Modal Delivery
| Project | Specific Issue |
|---------|----------------|
| **OpenClaw** | Prompt cache reuse, tool-result envelope handling |
| **Hermes Agent** | `delegate_task(continue)` subagent store updates; mid-turn subagent results (`busy_result_mode`) |
| **ZeroClaw** | OpenRouter drops declared image attachments; damaged tool-result envelope pairing |

**Unified need:** Tool-result handling—pairing results with calls, delivering multi-modal content (images), and propagating results across subagent boundaries—is the most active cross-project bug category. This is a fundamental architectural challenge as agents grow more complex.

### Session Lifecycle & State Management
| Project | Specific Issue |
|---------|----------------|
| **OpenClaw** | "changed while starting work" errors, session maintenance enforce mode, compaction race conditions |
| **Hermes Agent** | Subagent store drops updates for terminal IDs; cron agent sessions lack external memory tools |
| **ZeroClaw** | Gateway /health not answering during startup; MCP failure leaves agent without tools |
| **QwenPaw** | Subagent spawning leaks parent's `_execution_toolkit` |

**Unified need:** Session lifecycle—initialization, delegation, maintenance, and teardown—is fragile across all projects. The specific failure modes differ (Rust vs. Python vs. Go foundations) but the underlying challenge is the same: maintaining consistent state when agents spawn subagents, compress contexts, or reconnect.

### Configuration Validation & Safety
| Project | Specific Issue |
|---------|----------------|
| **OpenClaw** | `doctor --fix` hangs; SQLite corruption on WSL2 |
| **Hermes Agent** | `bind-board` leaves `board.project_id` unset; `allowed_commands` policy parsing |
| **ZeroClaw** | Gateway config validated before admin reload; `allowed_commands` unified parsing |

**Unified need:** Config validation at the boundary between user intent and runtime application is a recurring gap. All projects have at least one issue where invalid config silently propagates into failures.

### Localization & Internationalization
| Project | Specific Issue |
|---------|----------------|
| **OpenClaw** | Active-memory German (DE) escalation patterns missing |
| **Hermes Agent** | Dream Diary configurable language (closed request with 2 👍); i18n locale refresh |
| **QwenPaw** | No specific i18n issues, but web console rendering implies broad audience |

**Unified need:** Internationalization beyond English is nascent. German language patterns (#151766 on OpenClaw) and configurable agent prompts (#79223 on Hermes Agent) indicate non-English markets are adopting these tools and need localization.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **Primary focus** | Reliability & scale | Desktop UX & modularity | Console stability & enterprise | Security & platform-specific tools |
| **Target user** | Power users, ARM64/self-hosted | Desktop-first users, developers | Enterprise teams, web deployments | Security-conscious, desktop-power users |
| **Architecture** | Python + C extensions | Python + Electron | Python (AgentScope-based) | Rust gateway + Python plugins |
| **Key differentiator** | Prepared releases, prompt caching, SQLite expertise | SkillOpt autonomous learning, plugin extraction | Enterprise signals, console polish | `computer_use` tool, LLMTR provider, Buzz channel |
| **Bug profile** | Memory regressions, SQLite corruption | Desktop GPU, Kanban process leaks, compression | Console UX, code mode tool leaks | MCP resilience, /health startup, image attachments |
| **Release model** | Beta → stable dual-track | Stable checkpoint releases | Incremental (no scheduled cadence) | Rolling (no formal releases in 24h) |

### Strategic Positioning

**OpenClaw** positions itself as the reliable backbone—designed for constrained environments, with prepared releases and aggressive memory management. Its bug surface reflects broad deployment across diverse hardware and OS configurations.

**Hermes Agent** differentiates on developer and desktop experience—the most sophisticated plugin ecosystem, autonomous skill improvement, and the only project with an active Desktop workspace redesign initiative.

**QwenPaw** is the most pragmatic—targeting enterprise deployments with a focus on console reliability and stable web UX rather than cutting-edge agentic features.

**ZeroClaw** competes on security and platform depth—Rust-based performance, `computer_use` tool development, and fine-grained `allowed_commands` policy enforcement make it attractive for security-conscious deployments.

**IronClaw** appears strategically positioned as a private or nearline project (potentially serving Near.ai's commercial product), with no public community engagement visible in this digest window.

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Project | Velocity Indicator | Maturity Assessment |
|------|---------|-------------------|---------------------|
| **1 — Rapid iteration** | OpenClaw | 500 PRs/24h, beta releases every 1–2 weeks | Mature core, experimental features; high bug volume but proportional contribution |
| **1 — Rapid iteration** | ZeroClaw | 39 PRs/24h, no formal releases | Newer project in rapid feature expansion; 5 S1 bugs in 24h signals aggressive shipping |
| **2 — Active development** | Hermes Agent | 50 PRs/24h, stable checkpoint every ~2 weeks | Stable with periodic batch releases; modularization work signals architectural maturity |
| **3 — Steady maintenance** | QwenPaw | 25 PRs/24h, no formal cadence | Smaller scale but high efficiency; focused on console polish over feature expansion |
| **4 — Inactive / nearline** | IronClaw | 0 activity | No public community engagement; likely private development or archived |

### Which Projects Are Stabilizing

- **Hermes Agent** is the closest to stabilizing: v0.23.5 as a curated checkpoint, modularization nearly complete (Weixin, WeCom, DingTalk extracted), and Desktop workspace redesign entering final review. The bug surface is manageable (~15 open P2/P3 issues with no active P1s in the last 24 hours).

### Which Projects Are Rapidly Iterating

- **ZeroClaw** is in peak iteration: 39 open PRs, 5 S1 bugs in one day, and large features (`computer_use`, LLMTR, Codex UI) in flight simultaneously. The project is expanding its surface faster than it can stabilize the existing one.
- **OpenClaw** maintains high velocity by design—a large contributor base sustains continuous churn—but the consistent presence of 15+ P0/P1 bugs suggests the project is in a high-throughput, continuous-improvement mode rather than approaching a stable plateau.

---

## 7. Trend Signals

The following patterns emerge from cross-project community feedback and are likely to shape the ecosystem in the coming 6–12 months:

### 1. Agentic Delegation Is the Primary Battleground
Every project is investing in subagent/session delegation mechanics—OpenClaw's `session.maintenance`, Hermes Agent's `busy_result_mode` and `delegate_task(continue)`, QwenPaw's subagent toolkit isolation, and ZeroClaw's MCP resilience. The fundamental challenge is **state consistency across agent boundaries**: tool results, memory context, and session identity must survive delegation, compression, and reconnection. Projects that solve this reliably will have a decisive competitive advantage.

### 2. Memory Management Is a Universal Scaling Bottleneck
Three of four active projects have reported memory regressions or unbounded growth in the last 24 hours. As agents handle longer conversations, larger tool result sets, and more concurrent sessions, memory pressure is becoming the **primary reliability concern** across the ecosystem—not feature gaps. Expect to see:
- Bounded prompt cache strategies (already in OpenClaw)
- Compression pipeline hardening (Hermes Agent, OpenClaw)
- Rust-native efficiency gains (ZeroClaw)
- Explicit retention policies for SQLite data stores (OpenClaw)

### 3. Desktop and Cross-Platform Stability Is Underinvested Relative to Demand
OpenClaw has 3+ macOS-specific bugs open for 12–39 days. Hermes Agent has a desktop GPU regression on AMD Linux lasting 3 months. ZeroClaw has `/health` startup issues affecting Kubernetes deployments. The **gap between CLI/server reliability and desktop UI reliability** is a consistent pattern. As non-technical users adopt these tools, desktop UX stability will become a gating factor for adoption.

### 4. Plugin Ecosystem Architecture Is Converging
Hermes Agent's extraction of Weixin, WeCom, and DingTalk to separate plugin repos signals a broader architectural trend: **core should not bundle channel-specific integrations**. OpenClaw's `skills` system and ZeroClaw's `mcp_bundles` follow the same pattern. The next ecosystem question is whether a shared plugin API standard emerges or each project defines its own.

### 5. Enterprise Adoption Is Emerging Across All Active Projects
- QwenPaw received a formal enterprise platform-worker implementation review request (#8959)
- Hermes Agent has enterprise-grade features (billing account explicitness, Nous Portal usage reporting)
- OpenClaw's prepared releases and SQLite expertise align with self-hosted enterprise requirements
- ZeroClaw's `allowed_commands` policy and security-focused `computer_use` tool signal enterprise security requirements

**Implication for AI agent developers:** The market is transitioning from "individual developers experimenting with AI agents" to "teams deploying AI agents in production environments." Reliability, auditability, and enterprise integration will become weighted higher than feature velocity.

### 6. Internationalization Is a Pending Gap
Only two internationalization issues appeared across all four active projects (German patterns on OpenClaw, Dream Diary language on Hermes Agent), but the combined comment and reaction counts suggest genuine demand. As these tools expand beyond English-speaking markets, i18n will move from optional polish to a competitive differentiator.

---

*This report synthesizes community digest data from OpenClaw, Hermes Agent, QwenPaw, and ZeroClaw for 2026-11-28. IronClaw showed no public activity and was excluded from trend analysis.*

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>Let me analyze the provided GitHub data for Hermes Agent and generate a structured project digest for 2026-11-28.

Key data points:
- Issues updated in last 24h: 50 (open/active: 48, closed: 2)
- PRs updated in last 24h: 50 (open: 49, merged/closed: 1)
- New releases: 1 (v0.23.5)

Let me organize this into the required sections.

Looking at the issues:
- Most commented issue: #89732 (9 comments) - Desktop ambient animations GPU issue on Linux+AMD
- #136931 (8 comments) - Skill self-improvement regression concern
- #91169 (6 comments) - project bind-board leaves board project_id unset
- #80280 (6 comments) - Kanban timed-out workers leave descendant processes
- #92774 (5 comments) - register_system_prompt_section() caps hard-coded
- #147564 (5 comments, closed) - Hermes Cloud TCP connection refused
- #120858 (4 comments) - Anthropic OAuth wire alias issue
- #54941 (4 comments) - /reload-plugins feature request
- #146237 (4 comments) - Desktop Kanban card reassignment fails
- #148413 (4 comments) - Gateway TUI session.list issues

Looking at the PRs:
- Most recent PRs include:
  - #152168 - Redesigned agent workspace for desktop
  - #154578 - Linux AppImage update via electron-updater
  - #160995 - Plugin catalog bump to 1.0.0
  - Various refactor PRs for Weixin, WeCom, DingTalk to move to plugins
  - #136708 - busy_result_mode for mid-turn subagent results
  - #160994 - Nous account usage as JSON
  - #160993 - Desktop plugins relabel messaging sidebar

Release notes indicate v0.23.5 contains approximately 338 PRs merged since v0.23.4, representing a significant batch of recent development work.
</think>


# Hermes Agent Project Digest — 2026-11-28

---

## 1. Today's Overview

Hermes Agent continues to demonstrate high development velocity, with **50 issues and 50 PRs updated in the last 24 hours**. The project released **v0.23.5** yesterday (November 27), rolling up ~338 merged PRs since v0.23.4 as a stable checkpoint. Activity is concentrated in Desktop (Linux/macOS GPU performance, workspace redesign), gateway session management, and plugin extraction/refactoring work (Weixin, WeCom, DingTalk moving to separate plugins). Community engagement remains strong with several long-running P2 bugs generating active discussion. The ratio of open to closed issues (48:2) suggests a healthy inflow of reports being triaged, though maintainer bandwidth on legacy subsystems (Kanban, cron, compression) is under visible strain.

---

## 2. Releases

### v0.23.5 — Hermes Agent (November 27, 2026)
- **Type:** Patch / stable checkpoint
- **Scope:** ~338 PRs merged since v0.23.4; covers CLI, installers, Microsoft Store app, Docker, and Hermes Cloud
- **Migration notes:** None — this is a cumulative stable release; full curated changelog ships with v0.24.0
- **Reference:** [NousResearch/hermes-agent Release v0.23.5](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.5)

---

## 3. Project Progress

### Merged / Closed PRs Today (1 merged)
| PR | Type | Component | Summary |
|----|------|-----------|---------|
| #147564 | bug (closed) | platform/telegram, provider/nous | Fixed outbound TCP refused on Hermes Cloud instances after auth provider reset |

### Active PRs Advancing (top movers)

| PR | Type | Area | Summary |
|----|------|------|---------|
| [#152168](https://github.com/NousResearch/hermes-agent/pull/152168) | feat | desktop, webapp | Redesigned agent workspace (Desktop & shared web) as default shell, with one-toggle recovery to classic |
| [#159644](https://github.com/NousResearch/hermes-agent/pull/159644) | refactor | weixin, plugin-migration | Weixin leaves core → official `weixin` plugin in NousResearch/hermes-official-plugins |
| [#159649](https://github.com/NousResearch/hermes-agent/pull/159649) | refactor | wecom, plugin-migration | WeCom leaves core → Labs plugin (auto-migrated, opt-in) |
| [#159638](https://github.com/NousResearch/hermes-agent/pull/159638) | refactor | dingtalk, plugin-migration | DingTalk leaves core → Labs plugin (auto-migrated) |
| [#136708](https://github.com/NousResearch/hermes-agent/pull/136708) | feat | gateway, delegate | `busy_result_mode` — carries mid-turn subagent results into the already-running turn |
| [#154578](https://github.com/NousResearch/hermes-agent/pull/154578) | feat | desktop (Linux) | In-app Linux AppImage updates via electron-updater |
| [#160994](https://github.com/NousResearch/hermes-agent/pull/160994) | feat | cli, billing | `hermes usage --provider nous --json` exposes Nous Portal account usage |
| [#160993](https://github.com/NousResearch/hermes-agent/pull/160993) | feat | desktop | Plugins can relabel and split messaging sidebar sections via `session.sourceLabels` |
| [#160990](https://github.com/NousResearch/hermes-agent/pull/160990) | feat | plugin-catalog | Grimoire plugin bumped to v0.28.0 |
| [#160995](https://github.com/NousResearch/hermes-agent/pull/160995) | feat | plugin-catalog | REVamp plugin bumped to v1.0.0 stable |

---

## 4. Community Hot Topics

### Most-Discussed Issues (by comment count)

**#89732** — *Desktop ambient animations hold iGPU at 50–69% sustained (Linux + AMD)* — 9 comments  
[Issue #89732](https://github.com/NousResearch/hermes-agent/issues/89732)  
> **Root need:** Users on AMD integrated GPUs experience significant battery/thermal impact from idle desktop animations (arc-border, shimmer, status-dot pulse). This is a **platform-specific performance regression** in the Desktop shell, indicating insufficient GPU-aware rendering or lack of a toggle to disable ambient effects.  
> **Signal:** Likely to become a P1 if AMD laptop users are a meaningful user segment.

**#136931** — *Skill self-improvement can regress good workflows* — 8 comments  
[Issue #136931](https://github.com/NousResearch/hermes-agent/issues/136931)  
> **Root need:** Autonomous skill learning is valued, but users cannot distinguish durable improvements from task-local workarounds or narrow clarifications that pollute the skill ledger. Requesting a mechanism to audit, tag, or rollback learned rules.  
> **Signal:** Core AI quality concern; relates to the SkillOpt proposal in #71266.

**#91169** — *project bind-board leaves board project_id unset* — 6 comments  
[Issue #91169](https://github.com/NousResearch/hermes-agent/issues/91169)  
> **Root need:** Kanban board binding is incomplete — tasks on bound boards don't inherit the Project, causing them to fall back to unscoped defaults. Affects workflow organization reliability.

**#80280** — *Kanban timed-out/superseded workers leave descendant process groups alive* — 6 comments (1 reaction)  
[Issue #80280](https://github.com/NousResearch/hermes-agent/issues/80280)  
> **Root need:** Stale worker processes and replacement runs can mutate the same worktree concurrently, violating transactional assumptions. A process-leak bug with data-integrity implications.

**#92774** — *register_system_prompt_section() caps are hard-coded (4k/section, 8k aggregate)* — 5 comments  
[Issue #92774](https://github.com/NousResearch/hermes-agent/issues/92774)  
> **Root need:** Plugin authors cannot inject large always-injected context blocks (e.g., domain knowledge bases) via the sanctioned MemoryProvider path due to artificial limits. Requests config-driven caps.

---

## 5. Bugs & Stability

Ranked by severity (P2 = High, P3 = Medium/Low). Items marked 🔧 have open fix PRs.

### P2 — High Severity

| Issue | Component | Description | Fix PR |
|-------|-----------|-------------|--------|
| [#89732](https://github.com/NousResearch/hermes-agent/issues/89732) | desktop/shell (Linux+AMD) | Ambient animations sustain iGPU at 50–69% gpu_busy | — |
| [#91169](https://github.com/NousResearch/hermes-agent/issues/91169) | cli, cron | `bind-board` leaves `board.project_id` unset → tasks lose project scope | — |
| [#80280](https://github.com/NousResearch/hermes-agent/issues/80280) | gateway, cron | Kanban stale workers leave descendant process groups alive; concurrent worktree mutation risk | — |
| [#120858](https://github.com/NousResearch/hermes-agent/issues/120858) | agent, provider/anthropic | Anthropic OAuth wire alias `chat_history_lookup` not reverse-mapped → `not_found` errors | — |
| [#146237](https://github.com/NousResearch/hermes-agent/issues/146237) | desktop, profiles | Kanban card reassignment to another profile fails with 403 `profile_scope_mismatch` | — |
| [#148413](https://github.com/NousResearch/hermes-agent/issues/148413) | gateway, TUI | `session.list` drops preview & `show_subagents`, caps history at 200 with no pagination | — |
| [#158684](https://github.com/NousResearch/hermes-agent/issues/158684) | agent, compression | Compaction sends role-typed tool messages to summarizer endpoints that reject them → every pass falls back to main model | — |
| [#148857](https://github.com/NousResearch/hermes-agent/issues/148857) | agent, billing | After fallback chain exhausts, session stays on last failed fallback instead of trying earlier ones that recovered | — |
| [#159238](https://github.com/NousResearch/hermes-agent/issues/159238) | agent, compression | Worker session compression aborts: tool rows carry 'name' key the worker handoff rejects | — |
| [#160945](https://github.com/NousResearch/hermes-agent/issues/160945) | agent, cron, memory | Cron agent sessions never get external memory provider tools (`honcho_*`), despite provider registering | — |
| [#160977](https://github.com/NousResearch/hermes-agent/issues/160977) | agent, billing | `_fetch_anthropic_account_usage` with `fraction=True` scales 1% → 100% (misinterprets percentage as decimal) | — |
| [#160938](https://github.com/NousResearch/hermes-agent/issues/160938) | install-update | Plugin-only dependency pins never advance — each env generation inherits previous `uv.lock`, silently reverting upgrades | — |
| [#150518](https://github.com/NousResearch/hermes-agent/issues/150518) | gateway, macOS | Gateway freezes for minutes on macOS: `gc.collect()` in housekeeping holds GIL on large swapped heap | — |
| [#157805](https://github.com/NousResearch/hermes-agent/issues/157805) | desktop, delegate | `delegate_task(continue)` reuses `subagent_id`; store drops updates for an id already terminal → continued subagent never shown | 🔧 [#146851](https://github.com/NousResearch/hermes-agent/pull/146851) |

### P3 — Medium/Low Severity

| Issue | Component | Description |
|-------|-----------|-------------|
| [#160877](https://github.com/NousResearch/hermes-agent/issues/160877) | cli, webapp | Latest update force-installs configured "webapp" and disables dashboard without warning |
| [#160982](https://github.com/NousResearch/hermes-agent/issues/160982) | cron | `lifecycle_guard` false-positive: command regex matches across JSON string fields |
| [#160983](https://github.com/NousResearch/hermes-agent/issues/160983) | kanban | One-shot `hermes kanban claim` is reclaimed as failure at TTL and trips `gave_up` |
| [#160941](https://github.com/NousResearch/hermes-agent/issues/160941) | docker, profiles | Docker boot reconciliation crashes when `gateway_state.json` holds valid JSON of wrong shape |
| [#94714](https://github.com/NousResearch/hermes-agent/issues/94714) | cli, sessions | `hermes sessions browse` exits with `Cancelled.` when pressing arrow keys |
| [#160342](https://github.com/NousResearch/hermes-agent/pull/160342) 🔧 | desktop | Composer: media payload queues behind running turn instead of ending it; large paste attaches; unset threshold stays silent |

---

## 6. Feature Requests & Roadmap Signals

### High-Interest Requests (by engagement + strategic fit)

| Issue/PR | Area | Request | Likelihood of Near-Term Merge |
|----------|------|---------|-------------------------------|
| [#71266](https://github.com/NousResearch/hermes-agent/issues/71266) | skills, agent | Native skill-sleep with SkillOpt validation-gated self-improvement (no external dep) | High — aligns with existing autonomous improvement roadmap |
| [#136703](https://github.com/NousResearch/hermes-agent/issues/136703) / [#136708](https://github.com/NousResearch/hermes-agent/pull/136708) | gateway, delegate | `delegation.busy_result_mode` — mid-turn subagent results into running turn | **Open PR, high readiness** |
| [#54941](https://github.com/NousResearch/hermes-agent/issues/54941) | plugins, cli | `/reload-plugins` — hot-reload `plugins.enabled` without new session | Medium — enables git-pull workflow |
| [#74622](https://github.com/NousResearch/hermes-agent/issues/74622) | gateway, cli | `/refresh` — reload system prompt sources without losing conversation | Medium — blocked on prefix-cache invalidation design |
| [#28226](https://github.com/NousResearch/hermes-agent/issues/28226) | memory | Multi-tenant Memory OS with diagnostics, inventory, isolation tests | Low-Medium — architectural, long-term |
| [#88512](https://github.com/NousResearch/hermes-agent/issues/88512) | desktop | Make empty-chat wordmark configurable (skin-driven) | Low — cosmetic |
| [#160948](https://github.com/NousResearch/hermes-agent/issues/160948) | desktop, chat | Attach selected session-log excerpts to composer as context chips (like @file) | Medium — enhances UX for context re-use |

**Roadmap signal:** The active plugin extraction work (Weixin, WeCom, DingTalk → separate repos) and the Desktop workspace redesign (#152168) suggest the team is prioritizing **modularization** and **Desktop parity**. The SkillOpt skill-improvement work (#71266) and the `busy_result_mode` feature (#136708) indicate focus on **agentic delegation quality**. Memory system improvements (#28226, #160945) and compression robustness (#158684, #159238) reflect growing production usage stress-testing the architecture.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Impact |
|-------|----------|--------|
| **Desktop GPU on Linux/AMD** | #89732: 50–69% sustained iGPU usage from idle animations | Thermal/battery drain on integrated-graphics laptops |
| **Plugin dependency pinning** | #160938: upgrades silently reverted on next env rebuild | Users cannot reliably pin plugin-specific package versions |
| **Kanban reliability** | #80280 (process leaks), #91169 (project binding), #160983 (claim TTL), #107347 (active_pr respawn loop) | Workqueue integrity questioned; lost work risk |
| **Rate-limit fallback logic** | #148857: session stuck on last failed fallback instead of recovering | Wasted turns and user confusion during provider outages |
| **Cron memory tools missing** | #160945: `honcho_*` tools unavailable in cron agent sessions | Limits cron job autonomy for users with external memory backends |
| **Compression breaking summarizer endpoints** | #158684: role-typed tool messages rejected by non-tool-aware endpoints | Context compaction ineffective for certain provider configurations |
| **Docker profile reconciliation** | #160941: crashes on valid-but-wrong-shape `gateway_state.json` | Docker deployments break silently after partial config migrations |

### Satisfaction Signals

- **Plugin ecosystem growth:** Plugin catalog bumps (REVamp 1.0.0, Grimoire 0.28.0, #160995, #160990) indicate active third-party contribution
- **Desktop redesign interest:** #152168 (redesigned workspace) is actively developed with toggle recovery — users get new UX without being forced off familiar shell
- **Nous billing integration:** #160994 exposes usage as JSON, improving programmatic access for power users
- **macOS gateway GIL fix in progress:** #150518 is acknowledged; a fix is the gateway housekeeping sweep

---

## 8. Backlog Watch

Long-running or high-importance items needing maintainer attention:

| Issue/PR | Age | Priority | Status | Concern |
|----------|-----|----------|--------|---------|
| [#80280](https://github.com/NousResearch/hermes-agent/issues/80280) | ~3.5 months (2026-08-06) | P2 | OPEN | Process leak + concurrent worktree mutation — data integrity risk; no fix PR |
| [#89732](https://github.com/NousResearch/hermes-agent/issues/89732) | ~3 months (2026-08-19) | P2 | OPEN | Linux+AMD GPU regression; no fix PR; affects battery/thermal on popular hardware |
| [#91169](https://github.com/NousResearch/hermes-agent/issues/91169) | ~3 months (2026-08-20) | P2 | OPEN | Kanban project binding broken; breaks task scoping; no fix PR |
| [#150518](https://github.com/NousResearch/hermes-agent/issues/150518) | ~3 weeks (2026-11-07) | P2 | OPEN | macOS gateway freeze (GIL + gc.collect); service availability impact |
| [#158684](https://github.com/NousResearch/hermes-agent/issues/158684) | 1 week (2026-11-21) | P2 | OPEN | Compression fallback loop; context never shrinks for affected endpoints |
| [#160938](https://github.com/NousResearch/hermes-agent/issues/160938) | 1 day (2026-11-27) | P2 | OPEN | Dependency pin regression; upgrades silently lost |
| [#136931](https://github.com/NousResearch/hermes-agent/issues/136931) | ~7 weeks (2026-10-12) | P3 | OPEN | Skill self-improvement regression risk; needs architectural decision |
| [#71266](https://github.com/NousResearch/hermes-agent/issues/71266) | ~4 months (2026-07-25) | P3 | OPEN | SkillOpt feature; needs decision on whether to adopt methodology |
| [#28226](https://github.com/NousResearch/hermes-agent/issues/28226) | ~6 months (2026-05-18) | P3 | OPEN | Multi-tenant memory OS; architectural proposal with no visible movement |

**Key takeaway:** Three P2 bugs (#80280, #89732, #91169) have been open for 3+ months without fix PRs, suggesting maintainer bandwidth is stretched across the Desktop redesign, plugin extraction, and v0.24.0 preparation. Prioritizing at least the **process-leak** (#80280) and **Kanban binding** (#91169) bugs would address significant production reliability gaps.

---

*Digest generated from NousResearch/hermes-agent activity on 2026-11-28. All GitHub links reference the project's public repository.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a structured English project digest for QwenPaw based on the provided GitHub data from 2026-11-28. Let me analyze the data and create a comprehensive digest following the specified sections.

Let me organize the key data points:

**Activity Overview:**
- Issues updated in last 24h: 10 (open/active: 8, closed: 2)
- PRs updated in last 24h: 25 (open: 19, merged/closed: 6)
- New releases: 0

**Latest Issues (10 total):**
1. #8845 - Console: markdown tables overflow (open, 5 comments, 1 👍)
2. #8956 - Creator App Tests red on main (open, 4 comments)
3. #8962 - QQ channel reconnect supervisor exits permanently (open, 3 comments)
4. #8959 - Enterprise Platform-Worker implementation review (open, 2 comments, 1 👍)
5. #8712 - Repeated identical tool calls never interrupted (closed, 2 comments)
6. #8903 - Code mode run_tool_batch tool call failure (open, 2 comments)
7. #8960 - Cron API endpoints return 500 (open, 1 comment)
8. #8955 - Governance builtin rules can't be configured (open, 1 comment)
9. #8954 - Subagent spawning leaks parent's toolkit (open, 1 comment)
10. #8941 - Windows plugin-install tests fail (closed, 1 comment)

**Latest PRs (25 total, top 20 by comment count):**
Open PRs:
1. #8928 - feat(models): support custom decision model endpoints (first-time-contributor, size/S)
2. #7211 - fix(runtime): prevent injected context from persisting (first-time-contributor, size/L, Under Review)


3. #8965 - fix(crons): resolve default workspace for cron actions (size/S)
4. #8964 - fix(console): cancel chat before submission (size/S)
5. #8963 - fix(qq): continue reconnecting after websocket cleanup errors (size/M)
6. #8961 - fix(console): require double tildes for Markdown strikethrough (size/M)
7. #8957 - fix(recovery): let a recovery stop the loop with marked exception (size/S)
8. #8933 - fix(video_memory): coerce root themes to str & guard null (size/XS)
9. #8932 - fix(video_memory): cap folded short-tail segments at max_scene_sec (size/XS)
10. #8917 - fix(video_memory): scan for longest valid JSON in extract_json (size/S)
11. #8915 - fix(creator): validate balanced JSON candidates (size/S)
12. #8911 - fix(agents/utils): handle allOf in _schema_permits_string (size/XS)
13. #8909 - fix(web_grounding): drop null items in as_list (size/XS)
14. #8907 - fix(utils): skip empty text blocks in _first_text_in_list (size/XS)
15. #8905 - fix(creator/json_pointer): enforce RFC 6901 array-index tokens (size/S)
16. #8958 - fix(e2e): match each prompt to its reply in paginated chat history (size/S)
17. #8719 - feat(console): support runtime base-path deployment (size/XXXL, Under Review)

Closed PRs:
1. #8951 - fix(console): stabilize chat navigation, scrolling, steer timestamps (size/L)
2. #8952 - fix(relay): handle interrupted recovery and shutdown (size/L)
3. #8953 - fix(console): stabilize chat history pagination and scrolling (size/M)

The console improvements address navigation stability and scrolling behavior across multiple PRs. A larger feature for runtime base-path deployment is also in progress. Recovery mechanisms in the relay system are being hardened, while cron and QQ channel fixes resolve specific integration issues. The video_memory module has several small refinements handling JSON parsing and data type conversions.
</think>


# QwenPaw Project Digest — 2026-11-28

## 1. Today's Overview

QwenPaw maintains high development velocity with 25 PRs and 10 issues updated in the last 24 hours. The project shows strong community engagement, particularly around console stability, code mode reliability, and platform extensibility. Six PRs were merged/closed today, while 19 remain open and under review. No new releases were published. The overall health is stable with active bug-fixing across multiple subsystems and meaningful feature development in progress.

---

## 2. Releases

**No new releases today.** The last official version referenced in issue tracking is v2.3.0.post1 (used across several bug reports) and v2.2.2.post1 (enterprise baseline).

---

## 3. Project Progress

### Merged/Closed PRs Today (6 total)

| PR | Title | Size | Focus Area |
|----|-------|------|------------|
| [#8951](https://github.com/agentscope-ai/QwenPaw/pull/8951) | stabilize chat navigation, scrolling, and steer timestamps | L | Console |
| [#8952](https://github.com/agentscope-ai/QwenPaw/pull/8952) | handle interrupted recovery and shutdown | L | Relay |
| [#8953](https://github.com/agentscope-ai/QwenPaw/pull/8953) | stabilize chat history pagination and scrolling | M | Console |
| [#8941](https://github.com/agentscope-ai/QwenPaw/issues/8941) | (Issue closed: Windows plugin-install test failures documented) | — | Testing |

**Key Themes:**

- **Console stability dominates:** Three merged PRs focus on chat navigation, pagination, and scroll behavior — indicating the UI layer received significant attention this cycle.
- **Relay resilience:** PR #8952 improves recovery and shutdown handling in the relay system.
- **Bug closure:** Issue #8712 (doom-loop gate recording) and #8941 (Windows test failures) were closed, resolving known regressions.

### Notable Open PRs Advancing Features

| PR | Title | Size | Status | Significance |
|----|-------|------|--------|--------------|
| [#8928](https://github.com/agentscope-ai/QwenPaw/pull/8928) | support custom decision model endpoints | S | First-time contributor, Under Review | Extends model provider flexibility |
| [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719) | support runtime base-path deployment | XXXL | Under Review | Enables reverse-proxy deployments |
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | prevent injected context from persisting | L | Under Review | Fixes context leakage across turns |
| [#8965](https://github.com/agentscope-ai/QwenPaw/pull/8965) | resolve the default workspace for cron actions | S | Fix for #8960 | Resolves Cron API 500 errors |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **[#8845](https://github.com/agentscope-ai/QwenPaw/issues/8845)** — Console: markdown tables overflow message bubble with no horizontal scroll
   - **Author:** caldefoc | **Comments:** 5 | **Reactions:** 1 👍
   - **Root cause:** Markdown tables inside assistant messages exceed message bubble boundaries and lack horizontal scroll.
   - **Impact:** UX regression affecting message rendering in the web console.

2. **[#8956](https://github.com/agentscope-ai/QwenPaw/issues/8956)** — Creator App Tests red on main since #8785
   - **Author:** aiyili | **Comments:** 4
   - **Root cause:** Shared recovery budget in `call_with_overflow_recovery` causes incorrect give-up detection via object identity instead of content.
   - **Status:** PR #8957 filed as fix.

3. **[#8962](https://github.com/agentscope-ai/QwenPaw/issues/8962)** — QQ channel reconnect supervisor exits permanently
   - **Author:** yaozy2020 | **Comments:** 3
   - **Issue:** WebSocket cleanup errors permanently terminate the QQ reconnect loop.
   - **Fix:** PR #8963 implements minimal QQ-only repair.

4. **[#8959](https://github.com/agentscope-ai/QwenPaw/issues/8959)** — Enterprise Platform-Worker implementation review request (技术评审)
   - **Author:** wenjunlong | **Comments:** 2 | **Reactions:** 1 👍
   - **Significance:** Enterprise users seeking to upstream platform-worker architecture; signals demand for scalable deployment patterns.

### Underlying Community Needs

- **UI/Console reliability:** Multiple issues (#8845, #8951, #8953) indicate the web console needs hardening for real-world message formatting and navigation.
- **Plugin ecosystem health:** Windows compatibility (#8941) and creator app test stability (#8956) suggest growing plugin complexity.
- **Enterprise readiness:** Issue #8959 reflects adoption in enterprise contexts requiring architectural review and upstream contribution pathways.

---

## 5. Bugs & Stability

### Open Bugs (ranked by activity)

| Priority | Issue | Title | Fix PR | Status |
|----------|-------|-------|--------|--------|
| **High** | [#8960](https://github.com/agentscope-ai/QwenPaw/issues/8960) | Cron API endpoints return 500 — typo in `mam._workspaces` | [#8965](https://github.com/agentscope-ai/QwenPaw/pull/8965) | Fix filed |
| **High** | [#8962](https://github.com/agentscope-ai/QwenPaw/issues/8962) | QQ reconnect supervisor exits permanently | [#8963](https://github.com/agentscope-ai/QwenPaw/pull/8963) | Fix filed |
| **Medium** | [#8954](https://github.com/agentscope-ai/QwenPaw/issues/8954) | Subagent spawning leaks parent's `_execution_toolkit` | — | No PR yet |
| **Medium** | [#8903](https://github.com/agentscope-ai/QwenPaw/issues/8903) | Code mode `run_tool_batch` tool call failure | — | No PR yet |
| **Medium** | [#8845](https://github.com/agentscope-ai/QwenPaw/issues/8845) | Markdown tables overflow console bubble | — | No PR yet |
| **Low** | [#8955](https://github.com/agentscope-ai/QwenPaw/issues/8955) | Governance builtin rules can't be configured | — | Feature request |

### Regression Note

- **[#8956](https://github.com/agentscope-ai/QwenPaw/issues/8956):** Regression introduced by PR #8785 (merged 2026-11-26) affecting Creator App Tests. The shared recovery budget change broke object-identity-based give-up detection. Fix PR [#8957](https://github.com/agentscope-ai/QwenPaw/pull/8957) is pending.

---

## 6. Feature Requests & Roadmap Signals

### Active Feature PRs

| PR | Title | Size | Relevance |
|----|-------|------|-----------|
| [#8928](https://github.com/agentscope-ai/QwenPaw/pull/8928) | Support custom decision model endpoints | S | Model provider extensibility |
| [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719) | Support runtime base-path deployment | XXXL | Deployment flexibility (reverse-proxy) |
| [#8959](https://github.com/agentscope-ai/QwenPaw/issues/8959) | Enterprise Platform-Worker review request | — | Scalable architecture signal |

### Feature Request Issues

| Issue | Request | Notes |
|-------|---------|-------|
| [#8959](https://github.com/agentscope-ai/QwenPaw/issues/8959) | Enterprise Platform-Worker implementation & upstream integration | Suggests need for standardized extension interfaces |
| [#8955](https://github.com/agentscope-ai/QwenPaw/issues/8955) | Governance builtin rules should be configurable/disabled | Independence from tool_guard causing user confusion |

### Roadmap Prediction

Based on current activity, near-term development likely focuses on:

1. **Console stability** — multiple PRs addressing navigation, pagination, and formatting suggest UI polish is a priority.
2. **Deployment flexibility** — PR #8719 (base-path deployment) signals investment in enterprise/proxy-friendly hosting.
3. **Model extensibility** — #8928 adds custom decision model support, broadening provider options.
4. **Code mode hardening** — issues #8903, #8954, and #8956 all involve code mode or tool execution, indicating this area needs attention before v2.4.

---

## 7. User Feedback Summary

### Pain Points

| Category | Issue | User Report |
|----------|-------|-------------|
| **Console UI** | Markdown table overflow [#8845](https://github.com/agentscope-ai/QwenPaw/issues/8845) | Tables extend beyond message bubbles with no scroll; invisible content frustrates users reading wide tables. |
| **Cron API** | 500 errors on all cron endpoints [#8960](https://github.com/agentscope-ai/QwenPaw/issues/8960) | Users cannot manage scheduled jobs via REST API due to typo in workspace resolution. |
| **QQ Channel** | Reconnection failure permanent [#8962](https://github.com/agentscope-ai/QwenPaw/issues/8962) | One cleanup error permanently disables the QQ reconnect supervisor, leaving workers disconnected. |
| **Code Mode** | Subagent toolkit leak [#8954](https://github.com/agentscope-ai/QwenPaw/issues/8954) | Spawning subagents from code mode causes `ToolNotFoundError` due to inherited context contamination. |
| **Governance** | Unconfigurable builtin rules [#8955](https://github.com/agentscope-ai/QwenPaw/issues/8955) | Users cannot disable governance rules independently from tool_guard rules, creating confusion. |

### Positive Signals

- Enterprise adoption: Issue #8959 indicates real-world deployment of QwenPaw-based enterprise solutions.
- Active contribution: Multiple first-time contributors (PRs #8928, #7211, #8965, #8961) suggest growing community engagement.
- Rapid bug response: Critical fixes (#8963, #8965, #8957) were filed within hours of issue creation.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Title | Notes |
|-------|-----|-------|-------|
| [#8845](https://github.com/agentscope-ai/QwenPaw/issues/8845) | 8 days | Markdown table overflow | 5 comments, 1 👍; affects all users viewing wide tables; no PR yet. |
| [#8903](https://github.com/agentscope-ai/QwenPaw/issues/8903) | 3 days | Code mode `run_tool_batch` failure | Blocks code mode users; needs investigation. |
| [#8954](https://github.com/agentscope-ai/QwenPaw/issues/8954) | 1 day | Subagent toolkit leak | Regression; affects multi-agent workflows; needs prompt fix. |
| [#8959](https://github.com/agentscope-ai/QwenPaw/issues/8959) | 1 day | Enterprise review request | High strategic value; maintainer input requested on architecture. |
| [#8955](https://github.com/agentscope-ai/QwenPaw/issues/8955) | 1 day | Governance rule configuration | Feature gap affecting security-conscious deployments. |

### Stale PRs Requiring Review

| PR | Age | Title | Status |
|----|-----|-------|--------|
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | ~3 months | Prevent injected context from persisting | Under Review (size/L) — high impact on context isolation |
| [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719) | ~15 days | Support runtime base-path deployment | Under Review (size/XXXL) — significant architectural change |

---

*Digest generated from QwenPaw GitHub data for 2026-11-28. All issue and PR links point to https://github.com/agentscope-ai/QwenPaw.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>Let me analyze the GitHub data for ZeroClaw (zeroclaw-labs/zeroclaw) for 2026-11-28.

## Summary of Data

### Issues (11 total, all open/active)
- #11005: Enhancement for stable RPC denial reasons and localized selector denials (in-progress, high risk)
- #11658: Bug - Web chat input focus issue (minor)
- #11015: Tracker for Desktop computer-use protocol implementation (high priority)
- #12669: Tracker for Gemini provider modernization (high priority)
- #12746: Bug - Chat message box focus after reconnect
- #12774: Bug - OpenRouter drops image attachments (S1 - workflow blocked)
- #12773: Bug - Lark/Feishu credentials config issue (S1 - workflow blocked)
- #12772: Feature request - MCP tools exclusion (S0 - data loss/security risk)
- #12767: Bug - MCP failure leaves agent without tools (S2 - degraded)
- #12766: Bug - Gateway /health not answering during startup (S1 - workflow blocked)
- #12765: Feature request - Buzz channel support

### PRs (39 total, all open)
Let me identify the most significant ones:
- #12781: Fix damaged tool results pairing (depends on #12704, #12188)
- #12780: Fix OpenRouter tool-result images (fixes #12774)
- #12779: Fix gateway config validation before admin reload
- #12776: Feature - macOS computer_use tool and OpenRouter image delivery (XL size)
- #12778: Fix config allowed_commands parsing
- #12691: Feature - Codex subscription usage in web chat (XL size)
- #12459: Feature - browser voice for OIDC sessions
- #12188: Fix tool-result envelope handling


- #12062: Bounded RPC denial reason exception
- #12761: Memory fix for Markdown logs
- #12755: Log timestamp comparison fix
- #11727: Zerocode session reopening
- #12744: Skills - pass arguments without shell
- #12264: LLMTR provider
- #12775: SQLite embedding repairs
- #12318: FieldForm local drafts restoration
- #12777: Zip dependency update

No releases, but 39 PRs and 11 issues active with 5 critical S1-level bugs, indicating high development velocity and active maintenance.
</think>


# ZeroClaw Project Digest — 2026-11-28

## 1. Today's Overview

ZeroClaw is experiencing **high-volume activity** with 39 PRs and 11 issues updated in the last 24 hours, indicating active development momentum. The project is in a stabilization phase with five S1/S2 severity bugs reported overnight—primarily around tool-result handling, MCP resilience, and gateway health checks—while several large cross-cutting features are in flight (macOS computer_use tool, Codex subscription UI, LLMTR provider). No releases were cut today; the codebase remains on `master` at `0.9.0`.

## 2. Releases

**No new releases today.** The latest stable remains `0.9.0` (tagged on `master` at commit `d4a5d2afd`). No release blockers or deprecation notices were posted.

## 3. Project Progress

The following PRs represent the most substantive advances merged/updated today (all still open, but indicating active development velocity):

| PR | Author | Area | Summary |
|---|---|---|---|
| [#12781](https://github.com/zeroclaw-labs/zeroclaw/pull/12781) | Aarlington | providers | Fixes damaged tool-result envelope recovery; pairs orphaned results with remaining calls |
| [#12780](https://github.com/zeroclaw-labs/zeroclaw/pull/12780) | Aarlington | providers/OpenRouter | Fixes #12774 — delivers declared tool-result image attachments across chat paths |
| [#12779](https://github.com/zeroclaw-labs/zeroclaw/pull/12779) | vadelma-agent | gateway | Validates on-disk config before admin reload to prevent teardown on invalid candidates |
| [#12776](https://github.com/zeroclaw-labs/zeroclaw/pull/12776) | tidux | tools, security | Adds opt-in macOS `computer_use` tool (feature-flagged) and OpenRouter tool-result image delivery (XL) |
| [#12778](https://github.com/zeroclaw-labs/zeroclaw/pull/12778) | tidux | config, security | Unifies `allowed_commands` parsing and `"*"` comparison across all policy checks |
| [#12691](https://github.com/zeroclaw-labs/zeroclaw/pull/12691) | vadelma-agent | gateway, web | Shows Codex subscription usage in web chat (stacked on #12641; XL size) |
| [#12744](https://github.com/zeroclaw-labs/zeroclaw/pull/12744) | vadelma-agent | skills, security | Skills can now pass literal arguments to executables without a shell (`argv` array in SKILL.toml) |
| [#12264](https://github.com/zeroclaw-labs/zeroclaw/pull/12264) | knowhycodata | providers | Adds first-class `llmtr` model-provider slot for LLMTR Chat Completions gateway |

**Infrastructure & tooling fixes:**
- [#12777](https://github.com/zeroclaw-labs/zeroclaw/pull/12777): Updated `zip` crate from 9.0.5 → 9.8.2 (includes `constant_time_eq` 0.6.2, `typed-path` bump)
- [#12775](https://github.com/zeroclaw-labs/zeroclaw/pull/12775): Guards SQLite embedding repairs against concurrent edits
- [#12761](https://github.com/zeroclaw-labs/zeroclaw/pull/12761): Honors recall date bounds for suffixed Markdown log filenames
- [#12755](https://github.com/zeroclaw-labs/zeroclaw/pull/12755): Compares RFC 3339 timestamp bounds by `Instant` instead of text

## 4. Community Hot Topics

The most active discussions center on two high-impact implementation tracks and one provider deprecation:

**① Desktop computer-use protocol —** Issue [#11015](https://github.com/zeroclaw-labs/zeroclaw/issues/11015) is an accepted implementation batch tracker for arbitrary local desktop applications (screen observation, accessibility-first control). PR [#12776](https://github.com/zeroclaw-labs/zeroclaw/pull/12776) delivers the initial macOS feature-flagged built-in `computer_use` tool. This represents a major new surface area for agent autonomy and carries high risk; the feature is gated behind both Cargo features and config-level `risk_profiles`.

**② Gemini provider modernization —** Issue [#12669](https://github.com/zeroclaw-labs/zeroclaw/issues/12669) coordinates migration off retired Gemini CLI and Gemini Code Assist consumer OAuth onto supported paths (Gemini API keys, Vertex, Agent Platform, Gemini Enterprise). This is a provider continuity concern affecting all users who integrated via the deprecated Google consumer paths.

**③ Skills literal-argument execution —** PR [#12744](https://github.com/zeroclaw-labs/zeroclaw/pull/12744) introduces `argv`-based skill invocation without shell wrapping, improving argument fidelity and security posture. Community interest is reflected in its XL size and broad scope.

## 5. Bugs & Stability

Five bugs were reported in the last 24 hours, ranked by severity:

| Severity | Issue | Title | Status | Fix PR? |
|---|---|---|---|---|
| **S1** | [#12774](https://github.com/zeroclaw-labs/zeroclaw/issues/12774) | OpenRouter drops declared tool-result image attachments | open | [#12780](https://github.com/zeroclaw-labs/zeroclaw/pull/12780) |
| **S1** | [#12773](https://github.com/zeroclaw-labs/zeroclaw/issues/12773) | Quickstart cannot configure Lark/Feishu credentials; writes invalid block | open | — |
| **S1** | [#12766](https://github.com/zeroclaw-labs/zeroclaw/issues/12766) | Gateway does not answer /health during startup while MCP connects; liveness probes restart daemon | open | — |
| **S2** | [#12767](https://github.com/zeroclaw-labs/zeroclaw/issues/12767) | Transient MCP failure at startup leaves agent without tools; /health stays green | open | — |
| **S3** | [#11658](https://github.com/zeroclaw-labs/zeroclaw/issues/11658) | Web chat input doesn't regain focus after agent reply | open, in-progress | — |
| **S3** | [#12746](https://github.com/zeroclaw-labs/zeroclaw/issues/12746) | Chat message box doesn't get focus back after reconnect | open | — |

**Assessment:** Three S1 bugs represent genuine workflow blockers. The OpenRouter image-attachments bug (#12774) already has a fix PR (#12780) in review. The Lark/Feishu quickstart bug (#12773) and the gateway liveness-probe issue (#12766) lack fix PRs and should receive maintainer attention urgently—particularly #12766 which causes production daemon restarts during MCP outages.

## 6. Feature Requests & Roadmap Signals

Notable feature requests from today:

| Issue | Title | Severity | Likelihood of Near-Term Inclusion |
|---|---|---|---|
| [#12772](https://github.com/zeroclaw-labs/zeroclaw/issues/12772) | Support excluding individual MCP tools inside `mcp_bundles` | **S0** (data loss/security risk) | **High** — S0 severity flags it for immediate attention |
| [#12765](https://github.com/zeroclaw-labs/zeroclaw/issues/12765) | Add a Buzz (buzz.xyz) channel (free open-source Slack alternative) | enhancement | **Medium** — aligned with existing channel architecture |
| [#12459](https://github.com/zeroclaw-labs/zeroclaw/pull/12459) | Enable browser voice for OIDC sessions | docs (needs-author-action) | **Medium** — PR exists, awaiting author |
| [#12264](https://github.com/zeroclaw-labs/zeroclaw/pull/12264) | Add LLMTR chat-completions gateway | provider | **Medium** — PR in review |

**Roadmap signals:** The convergence of the macOS `computer_use` tool (#12776), desktop protocol tracker (#11015), and the OpenRouter image delivery work suggests computer-use and multi-modal tool result handling are high-priority focus areas for the next release cycle.

## 7. User Feedback Summary

Based on issue and PR activity, the following user pain points emerge:

- **Provider reliability:** OpenRouter's tool-result image handling is broken (#12774), and the Gemini provider migration is causing confusion as Google sunsets legacy OAuth paths (#12669).
- **MCP resilience in production:** Users deploying ZeroClaw in Kubernetes environments report daemon restarts triggered by liveness probes during transient MCP failures (#12766) and silent tool-loss without restart (#12767).
- **Onboarding friction:** The quickstart flow fails to collect Lark/Feishu credentials (#12773), blocking new channel setup.
- **Web UX regressions:** Two focus-related bugs (#11658, #12746) create friction in conversational usage—minor individually but notable as a pattern.
- **Fine-grained tool control:** Users want per-tool disabling within MCP bundles (#12772), citing data-loss/security-risk implications of exposing entire MCP servers.

## 8. Backlog Watch

The following issues are open, long-standing, or at risk of going stale and may need maintainer attention:

| Issue | Age | Status | Notes |
|---|---|---|---|
| [#11005](https://github.com/zeroclaw-labs/zeroclaw/issues/11005) — Stable RPC denial reasons & localized selector denials | ~2 months | in-progress | Part of stage 3 of #8289; high risk, CLI/topic:identity-access |
| [#11015](https://github.com/zeroclaw-labs/zeroclaw/issues/11015) — Desktop computer-use tracker | ~2 months | accepted | Large implementation batch; PR #12776 is the first slice |
| [#12062](https://github.com/zeroclaw-labs/zeroclaw/pull/12062) — Bounded RPC denial exception (docs) | ~1 month | needs-author-action | ADR proposal awaiting author |
| [#11727](https://github.com/zeroclaw-labs/zeroclaw/pull/11727) — Zerocode reopen sessions | ~1.5 months | needs-author-action | Large PR (#11727) stalled |
| [#12459](https://github.com/zeroclaw-labs/zeroclaw/pull/12459) — Browser voice for OIDC | ~2 weeks | needs-author-action | Large PR stalled |
| [#12691](https://github.com/zeroclaw-labs/zeroclaw/pull/12691) — Codex subscription UI | 5 days | open | Depends on #12641; large (XL), likely next sprint candidate |

**Recommendation:** The three `needs-author-action` PRs (#12062, #11727, #12459) should either be assigned a maintainer to shepherd or closed with a clear next-steps comment to avoid backlog noise.

---

*Digest generated from zeroclaw-labs/zeroclaw GitHub data on 2026-11-28. All issue/PR links use the format `https://github.com/zeroclaw-labs/zeroclaw/[issue|PR]/<number>`.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*