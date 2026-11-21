# OpenClaw Ecosystem Digest 2026-11-21

> Issues: 339 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-21 03:24 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

<think>Let me analyze the GitHub data for OpenClaw and generate a structured project digest for 2026-11-21.

First, let me summarize the key data points:

1. **Activity Overview**:
   - Issues updated in last 24h: 339 (open/active: 248, closed: 91)
   - PRs updated in last 24h: 500 (open: 309, merged/closed: 191)
   - New releases: 0

2. **Latest Releases**: None (empty)

3. **Top Issues by Comments**:
   - #160959: Gateway blocks for minutes while capturing large external plugins (84 comments, P0)
   - #191944: Gateway stop fails on macOS with "Process ancestry could not be fully inspected" (38 comments, P2)
   - #197083: Post-install Doctor WAL publication verification leaves 11.3 update partially finalized (31 comments, P0)
   - #178359: doctor --fix --non-interactive idles for 15+ min in repair preparation (31 comments, P1)
   - #120385: Code Mode tool catalog built incomplete for scheduled/cron and memory-flush turns (27 comments, P2)
   - #182891: Prompt cache never reused (20 comments, P2)
   - #200606: 2026.11.5 candidate Doctor blocks update with plugin migration conflict (19 comments, P1)
   - #200756: Windows beta.2 → beta.4 update fails at package-swap (15 comments, P2)
   - #162914: Intermittent "Aborted | sandbox_provisioning" run failures (14 comments, P1)
   - #200224: 2026.11.5 beta update refuses retired agents.defaults.heartbeat (13 comments, P2)
   - #153899: Gateway drain waits out the full TimeoutStopSec (11 comments, P1)
   - #198218: Doctor/update maintenance livelocks while Gateway is stopped (11 comments, P1)
   - #178373: Agent loop has no run-level turn/token budget (11 comments, P2)
   - #155868: Agent-sourced runs get a reduced tool roster (11 comments, P2)
   - #131457: Add progress streaming mode to Feishu/Lark channel (11 comments, P2)

4. **Top PRs**: Several key pull requests are in progress including fixes for known MCP catalog delays (#202902), browser shutdown hangs (#148039), and workspace restoration for removed conversations (#202800). A compatibility fix for MCP server requests is also underway.

Additional PRs address various improvements: CI optimization for upgrade checks (#202894), publication read opt-in validation (#202636), sandbox workspace result handling (#202881), TTS schema isolation (#202864), WhatsApp scheduling capabilities (#202880), authorization helper maintenance (#202901), background tab screenshot functionality (#202878), PostgreSQL store capture during Gateway operations (#200294), and OpenClaw ID owner access reset functionality (#201587).

The project has significant unresolved issues spanning multiple priority levels. P0 bugs include Gateway blocking during external plugin capture, partially finalized updates from post-install verification failures, and Watch functionality issues. P1 issues involve CLI idle states during repair operations, plugin migration conflicts blocking updates, intermittent sandbox provisioning failures, gateway drain timing problems, maintenance livelocks, and regression scenarios where plugin preparation blocks the main thread. P2 items address gateway stop failures on macOS, incomplete tool catalogs for scheduled operations, unreliability in prompt cache mechanisms, Windows update failures during package swaps, beta update rejections for retired heartbeat configurations, and missing turn/token budgets in agent loops.

Additional concerns include reduced tool rosters for agent-sourced operations, transcript echo behavior in group chats, late model prompt projection invalidation, and skill refresh re-entry problems at scale. The project shows considerable activity with no releases in the past 24 hours, 191 PRs merged or closed, and 84 comments on the most discussed issue.
</think>


# OpenClaw Project Digest — 2026-11-21

---

## 1. Today's Overview

OpenClaw continues to show high activity with 339 issues and 500 PRs updated in the last 24 hours, though **no new releases** shipped today. The project is actively addressing stability concerns—multiple P0/P1 bugs are trending around Gateway blocking, update validation, and maintenance livelocks. Community engagement remains strong, with the top issue (#160959) accumulating 84 comments as users report Gateway event-loop stalls during large plugin capture. Several critical Windows and macOS platform issues are also gaining traction, suggesting an emphasis on cross-platform reliability as the 2026.11.x cycle matures.

---

## 2. Releases

**No new releases today.** The latest stable release remains 2026.11.3, with beta track at 2026.11.5-beta.4. Users on earlier versions (e.g., 2026.9.6, 2026.10.x) are experiencing regressions that may prompt an expedited patch release.

---

## 3. Project Progress

### Merged/Closed PRs (191 total in last 24h)

| PR | Author | Focus | Impact |
|----|--------|-------|--------|
| [#202878](https://github.com/openclaw/openclaw/pull/202878) | obviyus | Keep screenshots working for background tabs in headed Chrome | Browser extension reliability |
| [#202897](https://github.com/openclaw/openclaw/pull/202897) | openclaw-mantis[bot] | Refresh Control UI locales | i18n maintenance |
| [#202896](https://github.com/openclaw/openclaw/pull/202896) | openclaw-mantis[bot] | Refresh native app locales | i18n maintenance |
| [#202865](https://github.com/openclaw/openclaw/pull/202865) | steipete | Clear environment stubs after `process.env` replacement | Test reliability |
| [#202735](https://github.com/openclaw/openclaw/pull/202735) | hannesrudolph | Wait for busy gateway to restart before verifying Git update | Update reliability |
| [#202831](https://github.com/openclaw/openclaw/pull/202831) | warm-cloth | Warn when manifest stops enabled standalone plugin from starting | Plugin system clarity |

### Active Development (Open PRs under review)

- **[#202902](https://github.com/openclaw/openclaw/pull/202902)** — `fix: keep known MCP catalogs from delaying new chats` (steipete) — Addresses 10-second discovery delays on new chats
- **[#148039](https://github.com/openclaw/openclaw/pull/148039)** — `fix(browser): cancel in-flight CDP commands after handshake` (sunlit-deng) — Resolves browser shutdown hang, rated platinum hermit
- **[#202800](https://github.com/openclaw/openclaw/pull/202800)** — `fix: explicitly restore removed conversation workspaces` (steipete) — XL PR for workspace recovery UX
- **[#200294](https://github.com/openclaw/openclaw/pull/200294)** — `feat(update): capture PostgreSQL stores while the Gateway serves` (etzelm) — Major update system enhancement
- **[#202306](https://github.com/openclaw/openclaw/pull/202306)** — `feat: move a conversation that has no project into one` (daniel-lxs) — Conversation/project management
- **[#202880](https://github.com/openclaw/openclaw/pull/202880)** — `feat: let WhatsApp users schedule OpenClaw tasks from a DM` (brandon-julio-t) — WhatsApp integration expansion

---

## 4. Community Hot Topics

### Most Active Issues (by comment volume)

| Issue | Title | Comments | Link |
|-------|-------|----------|------|
| #160959 | Gateway blocks for minutes while capturing large external plugins (2026.9.6 regression) | **84** | [Link](https://github.com/openclaw/openclaw/issues/160959) |
| #191944 | gateway stop / stop --force fail on macOS with "Process ancestry could not be fully inspected" | **38** | [Link](https://github.com/openclaw/openclaw/issues/191944) |
| #197083 | Post-install Doctor WAL publication verification leaves 11.3 update partially finalized | **31** | [Link](https://github.com/openclaw/openclaw/issues/197083) |
| #178359 | doctor --fix --non-interactive idles for 15+ min with no output (macOS) | **31** | [Link](https://github.com/openclaw/openclaw/issues/178359) |
| #120385 | Code Mode tool catalog incomplete for scheduled/cron and memory-flush turns | **27** | [Link](https://github.com/openclaw/openclaw/issues/120385) |
| #182891 | Prompt cache never reused — `cache read dropped N -> 0` on every request | **20** | [Link](https://github.com/openclaw/openclaw/issues/182891) |

### Analysis of Underlying Needs

**Issue #160959 (84 comments)** reveals a significant regression introduced in 2026.9.6 where Gateway event loops block for minutes during plugin generation capture, particularly with large external plugins or workspace plugins. Users need the Gateway to remain responsive during plugin operations.

**Issue #191944 (38 comments)** highlights platform-specific macOS issues with process ancestry inspection during gateway stop operations. This suggests the need for more robust cross-platform process management.

**Issues #197083 and #178359** both surface update/maintenance reliability concerns—the Doctor tool and update validation are leaving systems in partially finalized states, indicating fragile state management during critical operations.

**Issue #182891** indicates prompt cache effectiveness problems with OpenAI-compatible routes, suggesting potential compatibility issues with third-party providers that may affect cost and performance.

---

## 5. Bugs & Stability

### P0 — Critical (Release Blockers)

| Issue | Title | Status | Fix PR? |
|-------|-------|--------|---------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway blocks for minutes while capturing large external plugins | OPEN | None yet |
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | Post-install Doctor WAL publication verification leaves 11.3 update partially finalized | OPEN | None yet |
| [#158277](https://github.com/openclaw/openclaw/issues/158277) | Talk on Watch fails with "Voice changed its remote network address" | OPEN | None yet |

### P1 — High Severity

| Issue | Title | Status | Fix PR? |
|-------|-------|--------|---------|
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | `doctor --fix --non-interactive` idles for 15+ min (macOS) | OPEN | None yet |
| [#200606](https://github.com/openclaw/openclaw/issues/200606) | 2026.11.5 candidate Doctor blocks update with plugin migration conflict | OPEN | None yet |
| [#162914](https://github.com/openclaw/openclaw/issues/162914) | Intermittent "Aborted | sandbox_provisioning" failures (Podman) | OPEN | None yet |
| [#153899](https://github.com/openclaw/openclaw/issues/153899) | Gateway drain waits out full TimeoutStopSec | OPEN | None yet |
| [#198218](https://github.com/openclaw/openclaw/issues/198218) | Doctor/update maintenance livelocks while Gateway is stopped | OPEN | None yet |
| [#174681](https://github.com/openclaw/openclaw/issues/174681) | **Regression**: Plugin preparation blocks Gateway main thread (reverted PR #172750 on release) | OPEN | None yet |
| [#197515](https://github.com/openclaw/openclaw/issues/197515) | Codex "data/settings upgrade is unfinished" persists on 2026.11.3 | OPEN | None yet |
| [#192524](https://github.com/openclaw/openclaw/issues/192524) | 2026.10.10 refuses every scheduled agentTurn through auth: "aws-sdk" provider | OPEN | Linked PR open |
| [#202246](https://github.com/openclaw/openclaw/issues/202246) | 2026.11.6: goal-continuation prompts produce duplicate reminder messages in Discord | CLOSED | — |
| [#195279](https://github.com/openclaw/openclaw/issues/195279) | Background exec completion wake fails with "operator execution authority is no longer active" | CLOSED | — |

### P2 — Medium Severity (Notable)

| Issue | Title | Platform | Link |
|-------|-------|----------|------|
| [#191944](https://github.com/openclaw/openclaw/issues/191944) | gateway stop fails on macOS | macOS | [Link](https://github.com/openclaw/openclaw/issues/191944) |
| [#200756](https://github.com/openclaw/openclaw/issues/200756) | Windows beta.2 → beta.4 update fails at package-swap | Windows | [Link](https://github.com/openclaw/openclaw/issues/200756) |
| [#200224](https://github.com/openclaw/openclaw/issues/200224) | 2026.11.5 beta update refuses retired agents.defaults.heartbeat | Cross-platform | [Link](https://github.com/openclaw/openclaw/issues/200224) |
| [#200781](https://github.com/openclaw/openclaw/issues/200781) | Control UI Sessions sidebar renders only agent headers | All | [Link](https://github.com/openclaw/openclaw/issues/200781) |
| [#200610](https://github.com/openclaw/openclaw/issues/200610) | Windows retained updater runtime exceeds MAX_PATH | Windows | [Link](https://github.com/openclaw/openclaw/issues/200610) |
| [#201251](https://github.com/openclaw/openclaw/issues/201251) | Update baseline capture walks every file; DB copied 5 times (5409s) | Linux/WSL2 | [Link](https://github.com/openclaw/openclaw/issues/201251) |
| [#182891](https://github.com/openclaw/openclaw/issues/182891) | Prompt cache never reused with OpenAI-compatible routes | Cross-platform | [Link](https://github.com/openclaw/openclaw/issues/182891) |
| [#198373](https://github.com/openclaw/openclaw/issues/198373) | Prompt cache: history rewritten between turns, cache read collapses to ~1% | Cross-platform | [Link](https://github.com/openclaw/openclaw/issues/198373) |

**Notable regressions** include plugin preparation blocking (reverted on release branch), prompt cache failures with OpenAI-compatible providers, and multiple Windows-specific update failures.

---

## 6. Feature Requests & Roadmap Signals

### High-Engagement Feature Requests

| Issue | Title | Comments | Priority | Link |
|-------|-------|----------|----------|------|
| [#131457](https://github.com/openclaw/openclaw/issues/131457) | Add progress streaming mode to Feishu (Lark) channel | 11 | P2 | [Link](https://github.com/openclaw/openclaw/issues/131457) |
| [#197297](https://github.com/openclaw/openclaw/issues/197297) | Per-user secret vault | 9 | P2 | [Link](https://github.com/openclaw/openclaw/issues/197297) |
| [#130247](https://github.com/openclaw/openclaw/issues/130247) | Cron jobs cannot end: no --until / --max-runs | 10 | P3 | [Link](https://github.com/openclaw/openclaw/issues/130247) |
| [#187264](https://github.com/openclaw/openclaw/issues/187264) | Caller-scoped, same-conversation scheduling for non-owner channel requests | 9 | P2 | [Link](https://github.com/openclaw/openclaw/issues/187264) |
| [#179685](https://github.com/openclaw/openclaw/issues/179685) | IMAP durable processing handoff and inspectable per-message outcomes | 9 | P2 | [Link](https://github.com/openclaw/openclaw/issues/179685) |
| [#181791](https://github.com/openclaw/openclaw/issues/181791) | Durable owner-native execution provenance for safe interruption recovery | 7 | P3 | [Link](https://github.com/openclaw/openclaw/issues/181791) |
| [#181579](https://github.com/openclaw/openclaw/issues/181579) | Improve progress narration grounding when follow-ups reference earlier conversation | 7 | P3 | [Link](https://github.com/openclaw/openclaw/issues/181579) |

### Roadmap Signal Analysis

1. **Multi-user/multi-tenant features** are gaining traction: per-user secret vault (#197297) and caller-scoped scheduling (#187264) suggest growing enterprise/multi-user deployment interest.

2. **Channel expansion**: Feishu/Lark progress streaming (#131457) aligns with existing Slack/Discord/Telegram/MS Teams support, indicating channel feature parity is a priority.

3. **Reliability enhancements**: IMAP durable handoff (#179685) and interruption recovery (#181791) point to production-hardening needs for automation workflows.

4. **Cron job lifecycle management** (#130247) addresses a long-standing gap—no end conditions for scheduled jobs.

---

## 7. User Feedback Summary

### Pain Points

**Critical stability concerns:**
- **Gateway responsiveness** — Large plugin operations block the event loop for minutes, breaking user expectations of always-available agents (#160959, #174681)
- **Update reliability** — Multiple reports of failed updates leaving systems in inconsistent states (Windows package-swap failures, Doctor validation hangs, WAL verification issues)
- **Maintenance tool hangs** — `doctor --fix` and `update repair` entering unbounded loops or stalling without feedback

**Platform-specific friction:**
- **macOS**: Process ancestry inspection failures on gateway stop, Doctor repair stalls
- **Windows**: MAX_PATH limitations, package-swap failures, retained temp files after uninstall
- **Linux/Docker**: 58-second plugin metadata rescans on startup, KNN search timeouts

**UX friction:**
- Control UI Sessions sidebar not rendering session rows (#200781)
- Prompt cache ineffectiveness with OpenAI-compatible providers (cost/performance impact)
- iOS text size settings not persisting
- Linux desktop app window controls overlapping sidebar

### Use Cases & Satisfaction

**Positive indicators:**
- Multi-agent Telegram group chats are actively used (#146311), indicating community adoption
- WhatsApp scheduling feature in development (#202880) shows responsive feature development
- Windows app (beta) is being actively tested (#200756, #200610)

**Dissatisfaction signals:**
- Several P0/P1 issues with high comment counts indicate users are actively blocked
- Regression concerns (plugin preparation fix reverted on release branch)
- Cross-platform consistency issues remain prevalent

---

## 8. Backlog Watch

### Long-Unanswered Important Issues Needing Maintainer Attention

| Issue | Title | Age | Last Updated | Priority | Link |
|-------|-------|-----|--------------|----------|------|
| [#153899](https://github.com/openclaw/openclaw/issues/153899) | Gateway drain waits out full TimeoutStopSec — health refresh and workboard lifecycle timers keep firing | ~2 months | 2026-11-21 | P1 | [Link](https://github.com/openclaw/openclaw/issues/153899) |
| [#178373](https://github.com/openclaw/openclaw/issues/178373) | Agent loop has no run-level turn/token budget, tool-loop detection is opt-in | ~1 month | 2026-11-20 | P2 | [Link](https://github.com/openclaw/openclaw/issues/178373) |
| [#155868](https://github.com/openclaw/openclaw/issues/155868) | Agent-sourced runs get reduced tool roster causing prompt-cache miss | ~2 months | 2026-11-20 | P2 | [Link](https://github.com/openclaw/openclaw/issues/155868) |
| [#146311](https://github.com/openclaw/openclaw/issues/146311) | Transcript echo fires per bot account in shared multi-agent group chats | ~2 months | 2026-11-20 | P2 | [Link](https://github.com/openclaw/openclaw/issues/146311) |
| [#172031](https://github.com/openclaw/openclaw/issues/172031) | Late modelPromptProjection invalidates custom context-engine admission after before_agent_run | ~1 month | 2026-11-20 | P2 | [Link](https://github.com/openclaw/openclaw/issues/172031) |
| [#130247](https://github.com/openclaw/openclaw/issues/130247) | Cron jobs cannot end: no --until / --max-runs | ~3 months | 2026-11-20 | P3 | [Link](https://github.com/openclaw/openclaw/issues/130247) |
| [#187350](https://github.com/openclaw/openclaw/issues/187350) | Plugin metadata snapshot rescans entire plugin tree on every startup (58s on 6,495-file tree) | ~3 weeks | 2026-11-20 | P2 | [Link](https://github.com/openclaw/openclaw/issues/187350) |
| [#164559](https://github.com/openclaw/openclaw/issues/164559) | agent_end plugin hook fires once per model attempt, not once per run | ~1.5 months | 2026-11-20 | P2 | [Link](https://github.com/openclaw/openclaw/issues/164559) |
| [#192496](https://github.com/openclaw/openclaw/issues/192496) | Idle skills refresh still re-enters at 19-20 agents (PR #170341 landed, symptom persists) | ~2.5 weeks | 2026-11-20 | P2 | [Link](https://github.com/openclaw/openclaw/issues/192496) |

### Stale Issues Requiring Triage

Multiple issues are tagged `stale` and may need closure or prioritization refresh:
- [#120385](https://github.com/openclaw/openclaw/issues/120385) — Code Mode tool catalog incomplete (CLOSED)
- [#138528](https://github.com/openclaw/openclaw/issues/138528) — Stuck-session recovery discards blocked_tool_call classification
- [#167622](https://github.com/openclaw/openclaw/issues/167622) — Native Codex execution: config get fails in SQLite read-only worker
- [#172031](https://github.com/openclaw/openclaw/issues/172031) — Late modelPromptProjection invalidates custom context-engine admission
- [#176187](https://github.com/openclaw/openclaw/issues/176187) — memory-core: sparse vec0 allocation amplifies KNN reads (CLOSED)
- [#170428](https://github.com/openclaw/openclaw/issues/170428) — iOS app text size does not apply or persist (CLOSED)

### PRs Needing Maintainer Review

| PR | Title | Status | Size | Link |
|----|-------|--------|------|------|
| [#148039](https://github.com/openclaw/openclaw/pull/148039) | fix(browser): cancel in-flight CDP commands after handshake | Ready for maintainer look | L | [Link](https://github.com/openclaw/openclaw/pull/148039) |
| [#202878](https://github.com/openclaw/openclaw/pull/202878) | fix: keep screenshots working for background tabs in headed Chrome | Ready for maintainer look | XS | [Link](https://github.com/openclaw/openclaw/pull/202878) |
| [#202636](https://github.com/openclaw/openclaw/pull/202636) | fix: check publication read opt-in at request admission | Ready for maintainer look | M | [Link](https://github.com/openclaw/openclaw/pull/202636) |
| [#202894](https://github.com/openclaw/openclaw/pull/202894) | improve(ci): start long upgrade checks before final validation wave | Ready for maintainer look | XS | [Link](https://github.com/openclaw/openclaw/pull/202894) |
| [#202831](https://github.com/openclaw/openclaw/pull/202831) | fix(plugins): warn when manifest stops enabled standalone plugin | Ready for maintainer look | S | [Link](https://github.com/openclaw/openclaw/pull/202831) |
| [#201577](https://github.com/openclaw/openclaw/pull/201577) | fix(onboard): reject token auth under Tailscale Funnel with accurate guidance | Waiting for maintainer | XS | [Link](https://github.com/openclaw/openclaw/pull/201577) |
| [#201586](https://github.com/openclaw/openclaw/pull/201586) | fix: stop copied OpenClaw ID Gateway key from resetting owner's access | Ready for maintainer look | S | [Link](https://github.com/openclaw/openclaw/pull/201586) |

---

*Digest generated from OpenClaw GitHub data for 2026-11-21. All issue/PR links reference https://github.com/openclaw/openclaw.*

---

## Cross-Ecosystem Comparison

<think>The user wants a comprehensive cross-project comparison report for the AI agent and personal AI assistant open-source ecosystem based on the five project digests I just generated. Let me analyze the data across all five projects and create a structured, professional report.

Let me compile the data:

**OpenClaw (github.com/openclaw/openclaw)**
- Issues: 339 updated in 24h (248 open/active, 91 closed)
- PRs: 500 updated in 24h (309 open, 191 merged/closed)
- Releases: 0 new today


- 8+ P0/P1 bugs, 15+ P2 bugs
- Health: Struggling with regressions

**Hermes Agent (github.com/nousresearch/hermes-agent)**
- Issues: 50 updated in 24h (40 open, 10 closed)
- PRs: 50 updated in 24h (38 open, 12 merged/closed)
- Releases: 1 canary release (v0.23.3+canary.20261120T064609Z)
- 0 P0, 0 P1 open, 15 P2 bugs
- Health: Good, active fixes landing

**IronClaw (github.com/nearai/ironclaw)**
- No activity in the last 24 hours

**QwenPaw (github.com/agentscope-ai/QwenPaw)**
- Issues: 13 updated in 24h (10 open, 3 closed)
- PRs: 41 updated in 24h (28 open, 13 merged/closed)
- Releases: 0 new today
- 2 high severity bugs, multiple medium/low
- Health: Good activity, large architectural changes in flight

**ZeroClaw (github.com/zeroclaw-labs/zeroclaw)**
- Issues: 13 updated in 24h (all open/active, 0 closed)
- PRs: 50 updated in 24h (49 open, 1 merged/closed)
- Releases: 0 new today
- 2 S1 bugs

, 3 high-risk issues
- Health: Moderate - active but bug queue needs attention

I'm noticing some interesting patterns across these projects. The naming conventions are striking—OpenClaw, IronClaw, and ZeroClaw all share the "Claw" suffix, suggesting they're either related or deliberately co-branded, which warrants investigation. Looking at activity levels, QwenPaw shows the highest PR-to-issue ratio at 3.15, while Hermes Agent maintains the most balanced ratio at 1.0, whereas ZeroClaw's ratio of 3.85 is concerning since almost all their PRs remain open with very few merged.

I'm also seeing consistent themes across these projects: plugin architectures, multi-channel support for platforms like WeChat, Telegram, and Discord, memory systems, update reliability, and local LLM integrations. The technical approaches vary significantly—ZeroClaw is Rust-based, while the others use Python or TypeScript, which likely explains their different architectural decisions and performance characteristics.
</think>


# AI Agent & Personal AI Assistant Open-Source Ecosystem Report
**Reference Date: 2026-11-21 | Audience: Technical Decision-Makers & Developers**

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source landscape is in a **high-velocity, fragmented growth phase** as of late 2026. Five active projects orbit around a shared core problem — bridging large language models to real-world tools, channels, and users — but diverge sharply in implementation language, governance model, and primary use case. **OpenClaw** dominates by raw community size (339 issues, 500 PRs updated in 24h) but is navigating a cluster of regression bugs from a rapid release cadence. **Hermes Agent** is the most operationally stable of the active projects, with fix PRs landing daily and a clear architectural direction toward plugin infrastructure and kanban reliability. **QwenPaw** is pushing the largest architectural refactor of the five — extracting local model management into a plugin provider — while maintaining high PR velocity. **ZeroClaw** (Rust-based) signals a distinct technical bet on memory safety and WASI sandboxing, but carries a non-trivial bug queue with no fix PRs filed. **IronClaw** shows no activity, raising questions about its maintenance status. The ecosystem as a whole is converging on several cross-cutting concerns — memory system reliability, multi-channel notification delivery, local model lifecycle management, and cross-platform stability (especially Windows and macOS) — indicating that the next generation of agent frameworks will compete primarily on infrastructure robustness rather than feature novelty.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | New Releases (24h) | Open P0/P1/S1 | P2 Bugs Open | Open PRs | Merged PRs (24h) | Activity Ratio (PRs:Issues) | Health Score |
|---|---|---|---|---|---|---|---|---|---|
| **OpenClaw** | 339 | 500 | 0 | 8+ P0/P1 | 15+ P2 | ~309 | ~191 | 1.47 | 🟡 Stressed |
| **Hermes Agent** | 50 | 50 | 1 canary | 0 P0/P1 | 15 P2 | ~38 | 12 | 1.00 | 🟢 Healthy |
| **IronClaw** | 0 | 0 | 0 | Unknown | Unknown | Unknown | 0 | — | ⚫ Dormant |
| **QwenPaw** | 13 | 41 | 0 | 2 High | 8 Medium | ~28 | 7 | 3.15 | 🟢 Healthy |
| **ZeroClaw** | 13 | 50 | 0 | 2 S1 + 3 High | 3 S2 | ~49 | 1 | 3.85 | 🟠 Needs Attention |

**Notes on the table:**
- *Activity Ratio* = PRs updated ÷ Issues updated. A ratio >1.0 suggests the project is producing more code than issue traffic (e.g., feature work dominating). Ratios <1.0 suggest issue-burdened projects.
- *Health Score* is a composite of: bug-to-fix ratio, release cadence, and regression prevalence.
- **IronClaw** shows zero activity across all metrics. This may indicate archived status, a maintenance gap, or that the project's GitHub data is not accessible via standard mechanisms.

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw's Position | Peer Comparison |
|---|---|---|
| **Community size** | Largest by far (339 issue updates, 500 PR updates/24h) | 6–38× the issue traffic of any peer |
| **Feature breadth** | Most mature multi-channel support (Slack, Discord, Telegram, MS Teams, Feishu/Lark, WhatsApp) | Hermes and ZeroClaw support fewer channels; QwenPaw focuses on WeChat + Console |
| **Plugin ecosystem** | Large, established plugin marketplace with MCP integration | Hermes Agent is building a plugin API (PR #151935 merged); others are nascent |
| **Release cadence** | Fast (2026.11.3 stable, beta.4 on track) | QwenPaw and Hermes are slower but more stable |
| **Control UI** | Full-featured web UI with sessions, kanban, settings | QwenPaw has Console UI; Hermes has TUI/CLI; ZeroClaw has Web dashboard |

### Technical Approach Differences

OpenClaw is the only project in the ecosystem with:
- **Native Watch support** (iOS/watchOS companion app integration — tracked as P0 #158277)
- **A/B test infrastructure** and candidate Doctor validation for update rollout
- **Prompt cache implementation** (currently failing with OpenAI-compatible providers — #182891)
- **Scheduled/cron agent turns** with multi-turn persistence (though Code Mode tool catalog is incomplete — #120385)

OpenClaw uses a **Python/Node.js hybrid architecture** with a Gateway daemon, Doctor maintenance tool, and plugin system. Hermes Agent uses **Rust** (via ZeroClaw comparison), while QwenPaw is **Python-based** with a Console backend. This architectural split means OpenClaw likely faces different categories of bugs (Python GIL, Node.js event loop) than ZeroClaw (Rust ownership, WASI sandboxing).

### Community Size Comparison

OpenClaw's comment volume on the top issue (#160959, Gateway blocking) reached 84 comments — **5× the next-highest issue in the ecosystem** (Hermes Agent's #131859 at 68 comments). This indicates both a larger user base and higher friction in OpenClaw's current release cycle.

---

## 4. Shared Technical Focus Areas

Several requirements are emerging **simultaneously across three or more projects**, indicating genuine ecosystem-wide pain points:

### Memory & Recall Systems
| Project | Specific Issue |
|---|---|
| **OpenClaw** | Code Mode tool catalog built incomplete for scheduled/cron and memory-flush turns (#120385); prompt cache never reused (#182891, #198373) |
| **Hermes Agent** | Per-user secret vault requested (#197297); background_review fallback chain failures (#93592) |
| **QwenPaw** | Memory tag index returns 503 — tags generated but unreadable (#8580); memory recall misses saved facts, saves wrong answers (#12607) |
| **ZeroClaw** | Memory recall opt-in external rerank stage RFC (#12022); memory recall data integrity issues (#12607) |

**Consensus need:** Memory systems across all projects are either unreliable (data loss, corruption) or unoptimized (no caching, no reranking). This is the most cross-cutting reliability gap in the ecosystem.

### Update & Maintenance Reliability
| Project | Specific Issue |
|---|---|
| **OpenClaw** | Post-install Doctor leaves 11.3 partially finalized (#197083); Doctor update maintenance livelocks (#198218); 11.5 candidate blocks on plugin migration conflict (#200606) |
| **Hermes Agent** | Failed dependency sync leaves paused gateways stopped — just fixed in PR #158449 |
| **QwenPaw** | Tool config with password causes page refresh loop (#8836); Windows retry logic needed for config saves — just fixed (#8835) |
| **ZeroClaw** | Gateway failed session-state write leaves 'running' until restart (#12619) |

**Consensus need:** Update, maintenance, and state-recovery operations are fragile across the ecosystem. Each project has a variant of "operation failed, system left in inconsistent state."

### Multi-Channel Notification & Delivery
| Project | Specific Issue |
|---|---|
| **OpenClaw** | Post-install WAL verification leaves 11.3 partially finalized (#197083); approval prompts must reach the originating channel (#6695, #6819) |
| **Hermes Agent** | Approval prompt delivery fix under review (#8303); read-only delivery.status RPC merged (#157156) |
| **QwenPaw** | WeChat silent polling death — messages lost without errors (#8757); approval prompt routing fix (#8303) |
| **ZeroClaw** | Telegram voice transcription failure blocks subsequent messages (#12597); WhatsApp Web quoted replies requested (#12598) |

**Consensus need:** Reliable, channel-aware delivery of asynchronous events (approvals, notifications, tool results) is a universal challenge.

### Cross-Platform Stability (Windows + macOS)
| Project | Specific Issue |
|---|---|
| **OpenClaw** | gateway stop fails on macOS (#191944); Windows beta update fails at package-swap (#200756); Windows retained updater exceeds MAX_PATH (#200610) |
| **Hermes Agent** | ACP session hangs on Windows git version check (#156777); gateway processes survive stop on Windows (#152435); Windows service write-back fails (#144933) |
| **QwenPaw** | Windows system notification feature request (#8821); Windows retry logic for config saves (#8835) |
| **ZeroClaw** | WASI filesystem sandbox escape on Windows (RUSTSEC-2026-0587, patched) |

**Consensus need:** Every project is struggling with Windows-specific reliability issues, particularly around process management, filesystem access, and service lifecycle. macOS-specific issues appear in OpenClaw and Hermes Agent around process ancestry inspection.

### Local Model Management
| Project | Specific Issue |
|---|---|
| **OpenClaw** | No native llama.cpp / local model management; relies on external tooling |
| **Hermes Agent** | Cron jobs on managed llama.cpp runtime store provider 'custom' and 401 on every run (#158383) |
| **QwenPaw** | XXXL PR extracting local model management into plugin (#8499); llama.cpp GPU controls (#8649); managed MLX engine support (#8647); Console UI for local models (#8648) |
| **ZeroClaw** | Retire local LLM response cache (#12611) — signals local model support exists |

**Consensus need:** Extracting local model lifecycle (download, GPU allocation, runtime management) from core agents into plugin or provider systems is a cross-project architectural trend. QwenPaw is furthest along with a coordinated three-PR feature block.

---

## 5. Differentiation Analysis

### By Target User

| Project | Primary Persona | Secondary Persona |
|---|---|---|
| **OpenClaw** | Power users running multi-agent deployments; enterprises with complex channel integrations (Slack + Discord + Feishu) | Developers building MCP plugins |
| **Hermes Agent** | Developers who want a flexible, CLI-first agent framework with strong kanban integration | Self-hosted users on NousResearch infrastructure |
| **QwenPaw** | Teams using WeChat for business communication; Chinese-language enterprise users | Local LLM enthusiasts (llama.cpp, Ollama, MLX) |
| **ZeroClaw** | Security-conscious operators; Rust/embedded deployment targets; enterprises requiring WASI sandboxing | Developers building memory-augmented agents |

### By Technical Architecture

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|---|---|---|---|---|
| **Language** | Python + Node.js (Gateway) | Rust | Python | Rust |
| **Security model** | Plugin sandboxing; MCP catalog validation | OIDC configurable scopes | Sandbox probing (Landlock) | WASI sandbox + operator credential scoping |
| **Agent memory** | ReMe (auto tag generation, recall) | Background review + memory-core | ReMe (tag generation + recall) | Memory recall with external rerank support |
| **Plugin system** | Established MCP plugin marketplace | New state facade API (PR #151935) | Provider plugin system (local model extraction) | Antigravity CLI delegate + credential granularization |
| **Channel count** | 8+ (Slack, Discord, Telegram, MS Teams, Feishu, WhatsApp, WeChat, iOS Watch) | 5+ (Telegram, Discord, WhatsApp, WeChat, Console) | 2 core (WeChat, Console WebUI) | 4+ (Discord, Telegram, Feishu, WhatsApp Web) |
| **Update mechanism** | Doctor + candidate validation; PostgreSQL store capture during update | Dependency sync + gateway restart sequencing | CLI upgrade with Windows retry logic | Cargo + WASM update path |

### By Feature Focus

| Feature | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|---|---|---|---|---|
| **Kanban / task management** | Built-in, multi-agent aware | Strong (real cancellation merged) | Partial (CLI + Console) | No native kanban |
| **OAuth / identity** | Via channel integrations | OIDC scopes configurable (PR #12497) | Via provider OAuth | OIDC scope configurability in flight |
| **Local LLM support** | External only | External + managed llama.cpp (with auth issues) | First-class plugin provider | Response cache retirement signals local model support |
| **Browser automation** | Browser tool + background tab screenshots (PR #202878) | No native browser tool | No native browser tool | Browser tool with file-upload action requested (#12614) |
| **Multi-agent orchestration** | Advanced (agent-sourced runs, reduced tool roster) | Limited (kanban workers are separate processes) | Limited | Limited |
| **Code Mode** | Yes (tool catalog incomplete for cron turns) | No | No | No |

**Key takeaway:** OpenClaw is the most feature-complete but paying a stability tax. QwenPaw has the most deliberate architectural direction (provider plugin extraction). ZeroClaw is the most security-focused by design. Hermes Agent is the most operationally stable.

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Project | Description |
|---|---|---|
| **Tier 1 — High-Volume** | **OpenClaw** | Industrial-scale community (339/500 updates/24h). Maturity is high but regression risk is elevated. Large plugin ecosystem. |
| **Tier 2 — Active Iteration** | **Hermes Agent**, **ZeroClaw** | Healthy PR volume (50/50 and 50/13 respectively). Hermes has a strong fix-to-bug ratio; ZeroClaw has a bug queue without fix PRs indicating earlier maturity stage. |
| **Tier 3 — Focused Development** | **QwenPaw** | Moderate issue traffic (13) but highest PR-to-issue ratio (3.15). Large architectural refactors in flight; focused on local model plugin extraction. |
| **Tier 4 — Dormant** | **IronClaw** | Zero activity across all metrics. Likely archived, renamed, or absorbed into another project. |

### Rapid Iteration Projects

- **OpenClaw**: Fastest release cadence; 2026.11.x cycle shipping weekly beta candidates. Regression rate is elevated — plugin preparation fix was reverted on the release branch.
- **QwenPaw**: Large XXXL refactor (local model plugin extraction, #8499) suggests architectural evolution rather than incremental feature growth.
- **ZeroClaw**: Large cleanup PRs (70 deleted source files, 165 i18n keys removed, 69 artifacts) indicate active technical debt reduction alongside feature work.

### Stabilizing Projects

- **Hermes Agent**: v0.23.3 canary released; 12 PRs merged today alongside strong bug fix coverage suggests the project is entering a stabilization phase after a feature expansion period. The kanban cancellation and plugin state facade are major features now in maintenance mode.

---

## 7. Trend Signals

The following signals emerge from cross-project community feedback and issue/PR patterns, relevant to developers building on or contributing to this ecosystem:

### ✅ 1. Plugin Infrastructure is the Primary Battleground
Every project is investing in plugin APIs — OpenClaw's established MCP marketplace, Hermes Agent's just-merged state facade (#151935), QwenPaw's provider plugin system, and ZeroClaw's Antigravity CLI delegate integration. The next differentiation factor will be **plugin governance**: how plugins are sandboxed, how credentials are scoped, and how plugin state survives agent restarts.

### ✅ 2. Memory Systems Need a Reliability Overhaul
All four active projects have open memory-related bugs — data loss, corruption, recall failures, or missing reranking. This is the single most cross-cutting reliability gap. Developers building production agents should expect to implement their own memory validation layers until this stabilizes.

### ✅ 3. Windows is Now a First-Class Target (and It Shows)
Every project has open Windows-specific bugs around process management, filesystem access, and service lifecycle. This reflects a shift from Linux-only/self-hosted to Windows desktop + Windows server deployment targets. The ecosystem is collectively under-invested in Windows testing infrastructure.

### ✅ 4. Local Model Lifecycle is Being Decoupled from Core Agents
QwenPaw's XXXL extraction (#8499) is the most aggressive, but Hermes Agent's managed llama.cpp runtime and OpenClaw's external plugin capture both point to the same conclusion: **local model management (download, GPU allocation, restart, auth) should be a plugin, not core**. Developers should architect around this expectation.

### ✅ 5. Approval and Delivery Notification is a Universal Problem
Across OpenClaw, Hermes Agent, and QwenPaw, approval prompt routing to the correct channel is a recurring regression. The architectural need — reliable asynchronous delivery of agent decisions to human approvers — is universal and unsolved in a portable way.

### ✅ 6. Cleanup and Technical Debt Reduction is Underway
ZeroClaw (70 deleted source files), OpenClaw (deprecated command removal, i18n refresh), and QwenPaw (mission command removal, unused web_search modal) are all simultaneously reducing surface area. This suggests the ecosystem is maturing: features are being hardened rather than expanded.

### ⚠️ 7. The "Claw" Family Needs Clarification
OpenClaw, IronClaw, and ZeroClaw share the "Claw" suffix. IronClaw shows zero activity. ZeroClaw is Rust-based. OpenClaw is Python/Node. If these are related projects (common origin, fork family, or co-marketed suite), the naming creates confusion for developers evaluating the ecosystem. A clear architectural relationship map would benefit community onboarding.

### ⚠️ 8. Cross-Platform Process Management is a Recurring Pain Point
Gateway/agent stop operations fail silently or incompletely on both Windows and macOS across all projects that support them. This suggests a need for a **portable process lifecycle abstraction** — a library or pattern that handles graceful shutdown, child process reaping, and ancestry inspection consistently across platforms.

---

*Report compiled from GitHub activity data for OpenClaw, Hermes Agent, IronClaw, QwenPaw, and ZeroClaw as of 2026-11-21. All issue/PR references are direct to their respective repositories.*

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>Let me analyze the GitHub data for Hermes Agent and generate a structured project digest for 2026-11-21.

Key data points:
- Issues updated in last 24h: 50 (open/active: 40, closed: 10)
- PRs updated in last 24h: 50 (open: 38, merged/closed: 12)
- New releases: 1 (v0.23.3+canary.20261120T064609Z)

Let me organize this into the required sections.

**Today's Overview:**
- High activity with 50 issues and 50 PRs updated in 24h


- Canary release v0.23.3+canary deployed on Nov 20, 2026
- Several PRs merged across plugins, kanban, and gateway features

**Releases:**
The canary build includes a DMG for macOS Apple Silicon, with a full release table referenced but incomplete in the data provided.

**Project Progress:**
Looking at the PR activity, I see several merged features including real kanban task cancellation, a gateway RPC for delivery status, and a plugin state facade that gives developers a durable detached-result write mechanism. There's also a fix for a skills view dedup entry and various other maintenance work across the gateway and plugins.

**Community Hot Topics:**
Issue #131859 about pull request creation permissions is generating significant discussion with 68 comments, and I'm seeing more activity across other issues as well.

**Bugs & Stability:**
The most critical issue is the kanban board removal that can orphan in-flight writers, followed by a background review that's ignoring the fallback chain configuration when the primary provider fails.

**Feature Requests & Roadmap Signals:**
The feature requests are starting to come in, with one already identified around relaxing the skill description character limit.

**User Feedback Summary:**
Looking at the feedback patterns, users are running into Windows-specific issues with sessions hanging, desktop setup problems, and process management on Windows servers.

**Backlog Watch:**
There are several issues that need maintainer attention—one about the 57-character skill description truncation that's been open since August, and another discussion about Anthropic's terms of service for OAuth integration that's gained some traction.
</think>


# Hermes Agent Project Digest — 2026-11-21

## 1. Today's Overview

Hermes Agent (NousResearch/hermes-agent) is in a period of **very high activity** on November 21, 2026, with 50 issues and 50 pull requests updated in the last 24 hours. The project shipped a new canary release (v0.23.3+canary.20261120T064609Z) yesterday, and a significant cluster of P1/P2 bug fixes are landing via PRs, many addressing Windows-specific reliability issues. The community is actively engaged across all major components — gateway, kanban, desktop, and plugins — and the maintainer team is processing a substantial inbound of regression reports alongside merging several long-awaited features (real kanban cancellation, delivery status RPC, plugin state facade). Overall health is good but the bug queue, particularly for Windows and kanban stability, remains elevated.

---

## 2. Releases

### v0.23.3+canary.20261120T064609Z — Released 2026-11-20

A canary (pre-release) build of the v0.23 series. The release notes indicate a Hermes Desktop DMG download for macOS Apple Silicon, with a full builds table referenced in the release page that is partially truncated in available data.

| Field | Detail |
|---|---|
| **Tag** | `v0.23.3+canary.20261120T064609Z` |
| **Date** | November 20, 2026 |
| **Platform** | macOS (Apple Silicon), other platforms table referenced but truncated |
| **Release URL** | [NousResearch/hermes-agent Release](https://github.com/NousResearch/hermes-agent/releases) |

> ⚠️ This is a canary build. No migration notes or breaking-change disclosures are present in the available release notes. Users on stable releases should review the changelog before upgrading.

---

## 3. Project Progress

Twelve pull requests were merged or closed in the last 24 hours. Key advances:

### Merged / Closed PRs

| PR | Author | Description | Area |
|---|---|---|---|
| **#158449** | pedroberaldo87 | **[P1] fix(update): a failed dependency sync no longer leaves paused gateways stopped** — Critical update-in-progress fix preventing gateways from remaining stopped after a failed dependency sync on slow links or misdetected libc. | CLI / install-update |
| **#158432** | TroyGamer73 | fix(gateway): FooteredReply deepcopy crash and unpruned dead platform writers — Two production-found fixes: deepcopy of a FooteredReply holding a live gateway reference crashed; dead platform writers were not cleaned up. | Gateway |
| **#158433** | TroyGamer73 | fix(backup): five guards that stopped pre-update backups failing or ballooning — Improved SQLite header sniffing, safer archive handling. | CLI / backup |
| **#157157** | Tormen28 | feat(kanban): real cancellation of in-flight tasks — New `hermes kanban cancel <ids>...` command and API to stop running kanban workers mid-execution. | CLI / kanban |
| **#157156** | Tormen28 | feat(gateway): read-only delivery.status RPC — Allows external consumers to query whether a queued delivery is pending, delivered, or dead-lettered. | Gateway / RPC |
| **#151935** | Tormen28 | feat(plugins): give plugins a durable detached-result write and a read-only state facade — Public API for plugins to write results into a session from outside a turn and read session state. | Plugins / API |
| **#151194** | BearHuddleston | fix(skills): release a skill_view dedup entry the model only saw as a preview — Prevents dedup entries from being permanently pinned after a preview-only view. | Agent / skills |
| **#158431** | ashgupta236-commits | probe — Test/validation PR, no functional change. | Meta |

### Open PRs (new or recently active)

| PR | Author | Priority | Description | Area |
|---|---|---|---|---|
| **#158455** | DobyKoishi | P3 | feat(photon): discrete multi-bubble streaming and native iOS ecosystem support | Streaming / iOS |
| **#158450** | pedroberaldo87 | P2 | fix(profiles): a rename repins the receiving bot of the profile's routes | Gateway / profiles |
| **#158438** | recoilburner | P2 | fix(models-dev): read a provider profile's catalog when a session records one of its aliases (GitHub Copilot) | Agent / models |
| **#158437** | chuggies510 | P2 | fix(tools): count full reads on confined local backends so write_file can overwrite | Tools / file |
| **#158436** | dragonkid | P3 | fix(skills): skill_manage resolves per-skill symlinked installs | Tools / skills |
| **#158424** | unsupportedpastels | P3 | feat(desktop): tell the backend when the user is active for smart phone notification suppression | Desktop / settings |
| **#158399** | mateu | P2 | fix(gateway): a failed stop no longer leaves the gateway running until SIGKILL | Gateway |
| **#158091** | kvnloo | P3 | feat(plugin-catalog): add z0live plugin (realtime voice stack) | Plugin catalog |
| **#158453** | kvnloo | P3 | feat(plugin-catalog): add stats plugin (Hermes Stats usage dashboard) | Plugin catalog |

---

## 4. Community Hot Topics

Issues and PRs ranked by comment/reaction engagement over the last 24 hours:

### 🔥 #131859 — [OPEN] Cannot open a pull request via API: CreatePullRequest permission error (68 comments)
**Link:** https://github.com/NousResearch/hermes-agent/issues/131859
- **Author:** kuehnberger | **Priority:** P3 | **Components:** auth, CLI
- **Summary:** Users cannot create pull requests against NousResearch/hermes-agent from forks due to a `CreatePullRequest` permission error, even though issue creation and fork PRs work fine. Reproduced twice within two minutes on 2026-10-03. The issue has attracted **68 comments** — the most active thread in the dataset — indicating this is a widely-hit blocker for contributors. The P3 label may understate its community impact.

**Underlying need:** A reliable, permission-compliant workflow for submitting PRs from within the Hermes CLI, which is likely used by many community members to contribute back.

### 💬 #84195 — [CLOSED] Relax/remove the 57-char skill description truncation (6 comments, closed 2026-11-20)
**Link:** https://github.com/NousResearch/hermes-agent/issues/84195
- **Author:** alone-tree | **Priority:** P3 | **Component:** agent / skills
- **Summary:** `SKILL_PROMPT_DESC_LIMIT = 60` in `agent/skill_utils.py` truncates every skill's description to 57 chars. Measurements on real setups with 150+ skills show the token savings are negligible while routing value is destroyed. The issue was **closed** — likely addressed by a merged PR.

### 💬 #156335 — [OPEN] Kanban: board removal must not orphan in-flight writers (7 comments)
**Link:** https://github.com/NousResearch/hermes-agent/issues/156335
- **Author:** rhgo1749 | **Priority:** P2 | **Components:** CLI, kanban_db_boards
- **Summary:** On Linux/POSIX, `hermes_cli.kanban_db_boards.remove_board()` can archive or hard-delete a board while another process holds an open SQLite writer, silently losing writes. This is a data-integrity issue.

**Underlying need:** Safe concurrent access to the kanban database across multi-process kanban worker scenarios.

### 💬 #93592 — [OPEN] background_review ignores auxiliary fallback_chain config when primary provider fails (7 comments)
**Link:** https://github.com/NousResearch/hermes-agent/issues/93592
- **Author:** EncoTime | **Priority:** P2 | **Components:** agent, config
- **Summary:** When `auxiliary.background_review.provider` fails (e.g., HTTP 429), the per-task `fallback_chain` configured in `auxiliary.background_review.fallback_chain` is never consulted. The review silently fails with zero calls made.

**Underlying need:** Resilient fallback behavior for auxiliary review tasks when the primary provider is rate-limited or unavailable.

### 👍 #126996 — [OPEN] feat(model-picker): per-provider model allowlist/blocklist (2 comments, 4 👍)
**Link:** https://github.com/NousResearch/hermes-agent/issues/126996
- **Author:** brettswift | **Priority:** P2 | **Components:** CLI, TUI, agent
- **Summary:** Live-discovered providers (Anthropic, OpenAI Codex via OAuth) list every model the account can see (16+ on Anthropic), with no way to narrow the selection. Users want per-provider allowlist/blocklist controls.

**Underlying need:** Model picker UX hygiene — users want to hide superseded or irrelevant models from their picker.

---

## 5. Bugs & Stability

Ranked by priority, excluding already-merged fix PRs noted in §3:

| Priority | Issue | Title | Component(s) | Status | Fix PR? |
|---|---|---|---|---|---|
| **P1** | — | *(No new P1 issue today; P1 fix #158449 merged)* | — | — | — |
| **P2** | #156335 | Kanban: board removal must not orphan in-flight writers | CLI / kanban | OPEN | No |
| **P2** | #93592 | background_review ignores fallback_chain when primary fails | agent / config | OPEN | No |
| **P2** | #156777 | ACP session/new / session/load hangs forever on Windows (git version check) | CLI / ACP | OPEN | No |
| **P2** | #134290 | Desktop: completed turns vanish from transcript after session switch (DB intact) | desktop / sessions | OPEN | No |
| **P2** | #155862 | Desktop falls into first-run setup when `--version` exceeds 15s (blobless clone) | desktop / shell | OPEN | No |
| **P2** | #152435 | Windows gateway never joins its kill-on-close job — spawned processes survive `stop` | CLI / gateway | OPEN | No |
| **P2** | #156258 | App re-selects app-managed local backend on refresh — profile chats 404 | gateway / profiles | OPEN | No |
| **P2** | #31336 | Feishu gateway silently drops messages sent in thread/topic with @mention | gateway / Feishu | OPEN | No |
| **P2** | #157146 | core_lock_upgrades() forces a -P pin over plugin upper bounds — downgrades blocked | CLI / install-update | OPEN | No |
| **P2** | #158441 | Control socket 2s hard timeout crashes kanban worker under concurrent load | gateway / kanban | OPEN | No |
| **P2** | #144933 | pm worker result write-back fails under Windows service (OSError 22) | CLI / Windows | OPEN | No |
| **P2** | #158383 | Cron jobs on managed llama.cpp runtime store provider 'custom' and 401 on every run | CLI / cron / auth | OPEN | No |
| **P2** | #158371 | kanban: live comment injection skips every comment signed with the worker's profile name | tools / kanban | OPEN | No |
| **P2** | #158390 | [iOS beta] Live Activity stays on "Thinking · 0 tools" — relay never reaches lock screen | gateway / iOS | OPEN | No |
| **P3** | #157274 | Runtime governance gate + tamper-evident audit trail (security) | agent / tools | OPEN | No |

**Stability assessment:** The P2 bug queue is **elevated**, with at least **15 open P2 issues** across Windows compatibility, kanban concurrency, session management, and desktop shell behavior. This is a notable concentration of reliability regressions. The maintainer team appears to be actively working through these — P1 fix #158449 and several P2 fix PRs (#158432, #158433, #158399, #158450) were merged today — but the inflow rate (multiple new P2s per day) suggests continued pressure.

---

## 6. Feature Requests & Roadmap Signals

Key feature requests that reflect user demand, with assessment of near-term likelihood:

| Request | Issue | Author | Priority | Likelihood of Near-Term Inclusion |
|---|---|---|---|---|
| **Real kanban task cancellation** | #157157 (merged) | Tormen28 | P3 | ✅ **Shipped** in this cycle |
| **Plugin state surface + delivery.status RPC** | #151935 + #157156 (merged) | Tormen28 | P2/P3 | ✅ **Shipped** in this cycle |
| **Per-provider model allowlist/blocklist** | #126996 | brettswift | P2 | 🔶 **Moderate** — well-defined, high demand |
| **Relax skill description 57-char truncation** | #84195 (closed) | alone-tree | P3 | ✅ Likely addressed in PR |
| **OAuth: expose redirect_port for IdPs requiring exact-match URIs** | #149642 | blackghostosint | P2 | 🔶 **Moderate** — Linear plugin blocked on this |
| **OAuth: comma-separated scopes + pinned redirect port** | #152732 | realpetru | P2 | 🔶 **Moderate** — Linear plugin blocked on this |
| **Runtime governance gate + tamper-evident audit trail** | #157274 | vladimirbbk | P3 | 🔷 **Lower** — security design work required |
| **Spoiler images in gateway replies (Discord/Telegram)** | #158416 | Igman | P3 | 🔷 **Lower** — nice-to-have platform polish |
| **Desktop: detect user active state for smart notifications** | #158424 (PR open) | unsupportedpastels | P3 | 🔶 **Moderate** — PR already submitted |
| **Public API for staged memory/skill writes from plugins** | #148313 | CuKhoi | P2 | 🔶 **Moderate** — complements #151935 |
| **Model credential scoping + per-attempt attribution** | #156606 (PR open) | diegorhoger | P2 | 🔶 **Moderate** — PR open, consent-gated |

**Roadmap signal:** The maintainer team's recent focus has been on **plugin infrastructure** (state facade, delivery RPC, OAuth improvements) and **kanban reliability** (cancellation, concurrency fixes). These suggest the next milestone may be a plugin-centric release with improved multi-profile/kanban stability.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|---|---|---|
| **Windows reliability** | Multiple P2 bugs: ACP hangs (#156777), gateway processes survive stop (#152435), write-back failures under NSSM service (#144933), stdin pipe inheritance | 🔴 High |
| **Kanban data integrity** | Board removal orphans writers (#156335), comment injection skips own profile (#158371), worker under concurrent load crashes (#158441) | 🔴 High |
| **Desktop session management** | Completed turns vanish after session switch (#134290), first-run wizard triggered incorrectly on blobless clones (#155862), wrong backend re-selected on refresh (#156258) | 🟠 Moderate-High |
| **Update/dependency failures** | Failed dependency sync leaves gateways stopped (#158449, just fixed), plugin upper-bound pinning regression (#157146) | 🟠 Moderate |
| **OAuth / Auth** | PR creation via API fails (#131859 — 68 comments), cron jobs 401 on llama.cpp runtime (#158383), OAuth redirect port not exposed (#149642, #152732) | 🟠 Moderate-High |

### Use Cases & Satisfaction Signals

- **Multi-profile + kanban** is a heavily-used pattern; the real cancellation and state surface features (now merged) directly address long-standing plugin developer pain.
- **Plugin ecosystem growth** is evident: z0live (realtime voice) and Hermes Stats dashboard plugins submitted to the catalog (#158091, #158453).
- **Feature request engagement** is healthy — the per-provider model allowlist (#126996) has 4 👍 despite only 2 comments, suggesting silent demand.
- **GitHub Copilot integration** issues (#158438) indicate a growing Copilot plugin user base.

---

## 8. Backlog Watch

Important issues that are either long-open or high-impact but have not yet received a fix PR or maintainer resolution:

| Issue | Age | Comments | Priority | Risk |
|---|---|---|---|---|
| **#131859** — PR creation via API fails with CreatePullRequest permission error | ~49 days (since 2026-10-03) | 68 | P3 (under-labeled) | 🔴 Community blocker for contributors |
| **#84195** — 57-char skill description truncation | ~101 days (since 2026-08-12) | 6 | P3 | 🟡 UX for skill-heavy users; closed but confirm fix merged |
| **#93592** — background_review ignores fallback_chain config | ~89 days (since 2026-08-24) | 7 | P2 | 🟠 Silent failure of auxiliary review under rate limits |
| **#146767** — Anthropic ToS question on native OAuth vs plugin | ~22 days (since 2026-10-30) | 2, 👍×2 | P3 | 🟡 Legal/ToS clarity needed for users on Claude Pro |
| **#156258** — Profile-owned chats 404 after backend re-selection | ~6 days (since 2026-11-15) | 4 | P2 | 🟠 Multi-profile installs are broken for non-default profiles |
| **#157274** — Runtime governance gate + audit trail | ~3 days (since 2026-11-18) | 2 | P3 | 🟡 Security architecture gap; no owner yet |
| **#158441** — Kanban worker crash under concurrent load (2s socket timeout) | <1 day | 1 | P2 | 🟠 High-severity in production under load |
| **#158383** — Cron jobs 401 on managed llama.cpp runtime | ~1 day | 1 | P2 | 🟠 Cron automation broken for llama.cpp users |

**Maintainer attention recommended on:** #131859 (high community impact despite P3 label), #93592 (silent failure pattern), #156258 (multi-profile regression), and the growing Windows reliability cluster.

---

*Digest generated from NousResearch/hermes-agent GitHub data for 2026-11-21. All issue/PR links are direct to https://github.com/NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>Let me analyze the GitHub data for QwenPaw and generate a structured project digest.

Let me go through the data:

**Overview:**
- 13 issues updated in last 24h (10 open, 3 closed)
- 41 PRs updated in last 24h (28 open, 13 merged/closed)
- 0 new releases

**Key Issues:**
- #8580: Memory tag index 503 error - OPEN (since Nov 4, still active)
- #8505: OpenAI gateway APIError classification bug - CLOSED (fixed by #8512)
- #8123: Daily Paper ToolJSONDecodeError - OPEN (since Oct 8, old issue)


- #8821: Windows notification feature - CLOSED
- #8757: WeChat channel polling death - OPEN (Nov 15)
- #8839: Android Pad UI overflow - CLOSED
- #8845: Markdown table overflow - OPEN (Nov 20)
- #8844: Keyboard scroll in message list - OPEN (Nov 20)
- #8843: Config docs incomplete - OPEN (Nov 20)
- #8840: LICENSE typo - OPEN (Nov 20)
- #8836: Tool config password page refresh - OPEN (Nov 20)
- #8833: Mission CLI duplicate /api prefix - OPEN (Nov 20)
- #8832: CLI health check HEAD /api/version - OPEN (Nov 20)

Looking at the pull requests, there's significant activity with several being actively reviewed or recently closed. The approval prompt delivery fix is under review, while the runtime base-path deployment and deprecation of the mission command are also moving through review. On the closed side, there are fixes for the web_search config modal and llama-server plugin lifecycle, plus some sandbox security improvements that got merged.

Now examining the local model management features—llama.cpp GPU controls, managed MLX engine, and console integration for these features are all open. Beyond that, there are scattered fixes across the codebase: error handling for missing providers, task tracker cleanup logic, scroll behavior for URL media, and the provider gateway error text extraction all made it in. The skills rollback fix is also under review.

The remaining closed work includes media downscaling logic, Windows retry mechanisms for agent config saves, context window sizing for Ollama, and Office skills updates. There's also the agentscope dependency update pending review.

Looking at what's most critical right now, the memory tag index issue (#8580) is a data corruption problem from November 4th that's been sitting open for weeks, followed by the WeChat polling death (#8757) which is silently dropping messages. The approval prompt routing fix (#8303) is getting significant attention, along with the runtime base-path deployment feature (#8719). The markdown table overflow and keyboard scroll accessibility issues are also noteworthy, and I should check whether the mission CLI bug has a fix associated with it.

Scanning through the merged work, most of the recent fixes have landed successfully—the gateway error extraction, Windows retry logic, skill rollback, and WebLLM support all look solid. The most active PRs under review are the approval routing, runtime base-path, and mission command removal, with a few medium-sized fixes also in flight.

Looking at the overall picture, the project seems to be in good shape with steady maintenance work, though there's still that lingering memory tag index issue from mid-November that needs attention.
</think>


# QwenPaw Project Digest — 2026-11-21

## 1. Today's Overview

QwenPaw is maintaining **very high activity** on November 21, 2026. A total of 41 pull requests were updated in the last 24 hours — the highest single-day pulse seen in recent weeks — alongside 13 issue updates. No new releases shipped today, but the merge queue was productive: at least 7 PRs reached a closed/merged state, including a multi-part local-model management extraction (#8499), a skills rollback safety fix (#8784), and a Windows agent-config resilience improvement (#8835). The project is actively addressing both UI polish (Android layout, markdown overflow, keyboard accessibility) and backend robustness (WeChat silent death, CLI health checks, approval prompt routing). The primary area of concern is a **two-week-old open bug** (#8580) affecting memory tag indexing, which has not yet been assigned a fix PR.

---

## 2. Releases

**No new releases** were published in the last 24 hours. The most recent version in the data remains v2.3.0.post1.

---

## 3. Project Progress

### PRs Closed / Merged Today (7 items)

| # | PR | Author | Size | Summary |
|---|----|--------|------|---------|
| #8512 | fix(providers): read gateway-reported status from error text | passionworkeer | S | Extracts the HTTP status code from the error message body for bare `APIError` exceptions, fixing the bare 502 retry failure from #8505 |
| #8835 | fix(windows): retry agent config saves and wait for installer child processes | Luohh5 | M | Adds retry logic on transient file-access errors when saving `agent.json`, and waits for child installers to exit before reporting timeout |
| #8784 | fix(skills): keep rollback backups until every workspace is restored | BeiMu-new | XL | Fixes five weak points in multi-workspace skill rollback: restores remaining workspaces on failure, avoids abandoned partial states, prevents premature backup deletion |
| #8236 | fix(ollama): size context window from `num_ctx` instead of 128k default | Li-john1021 | XL | Ollama discovery now reads `num_ctx` from the model config to set the actual context window, instead of falling back to a hard 128k default |
| #8499 | feat(providers): extract local model management into plugin | Leirunlin | XXXL | Moves local model downloads, llama.cpp installation, and service lifecycle into a dedicated Plugin Provider; preserves existing user configs |
| #8837 | fix(cli): remove deprecated mission command | xiaoyesoso | M | Removes the orphaned `mission` CLI implementation (deprecated in #3860 but never cleaned up); also closes #8833 |
| #8842 | fix(console): stop web_search config modal from saving untouched values | BeiMu-new | S | Debounced auto-save on the web-search config modal was firing on open, re-saving unchanged values; now only triggers on actual user edits |

**Key merged infrastructure changes:**
- **Local model plugin extraction (#8499)** is a large architectural change that decouples llama.cpp / MLX lifecycle from the core backend, enabling cleaner plugin updates and user-managed model installs.
- **Ollama context sizing (#8236)** closes a gap where local Ollama models were silently using wrong context windows.
- **Skills rollback hardening (#8784)** significantly improves reliability for multi-workspace skill installations.

### Notable Open PRs Under Active Review

| # | PR | Author | Status | Summary |
|---|----|--------|--------|---------|
| #8303 | fix(approvals): deliver approval prompts to the chat channel that raised them | sdxwmlyl | Under Review, M | Fixes approval prompts silently failing to reach WeChat/Console channels; long-standing regression root-caused in #6819 |
| #8719 | feat(console): support runtime base-path deployment | yaozy2020 | Under Review, XL | Adds `QWENPAW_BASE_PATH` for reverse-proxy prefix deployment; unblocks #8714 and relates to #1853, #8177 |
| #8785 | fix(media): enforce inline budget, rescale after refusal, report omissions | BeiMu-new | Under Review, XXL | Fixes three media downscaling gaps: independent byte-budget vs. side-limit, rescale after refusal, omission reporting |
| #8703 | fix(sandbox): probe Landlock without requiring securityfs | log-z | first-time-contributor, M | Fixes Landlock capability detection in containers lacking `/sys/kernel/security/lsm` |

### Multi-PR Feature Block (Local Model GPU + Auto-Update)

PRs #8649, #8647, and #8648 are a coordinated three-part feature stack adding llama.cpp GPU controls, managed MLX engine support, and Console UI for both. Merge order is strictly ordered: #8649 → #8647 → #8648.

---

## 4. Community Hot Topics

### Most-Discussed Issues

1. **#8580 — Memory tag index returns 503** *(10 comments, open since Nov 4)*
   - https://github.com/agentscope-ai/QwenPaw/issues/8580
   - **Root need:** Users with `auto_memory_generate_tags = true` generate tags successfully but cannot read them back. This is a **data availability / indexing bug** affecting anyone relying on ReMe memory features.
   - Status: Open, no fix PR yet. Two weeks old — needs maintainer triaging.

2. **#8821 — Windows system notification on task completion** *(3 comments, closed)*
   - https://github.com/agentscope-ai/QwenPaw/issues/8821
   - **Root need:** Users running long background tasks want OS-level notification without watching the browser tab.
   - Status: Closed (likely accepted as feature request; no linked PR in the last 24h data).

3. **#8757 — WeChat silent polling death** *(2 comments, open since Nov 15)*
   - https://github.com/agentscope-ai/QwenPaw/issues/8757
   - **Root need:** Production WeChat users experience silent message loss — the channel appears healthy but stops receiving messages without errors or logs.
   - Status: Needs investigation of the error-ret loop in `platform.py`.

### Most-Discussed PRs (by comment activity)

1. **#8303 — Approval prompt delivery fix** *(Under Review, M)*
   - https://github.com/agentscope-ai/QwenPaw/pull/8303
   - **Community signal:** Two prior issues (#6695, #6819) have been filed; the fix is under active review. Users need reliable approval escalation across all chat channels.
   - Likely candidate for merge within the next 1–2 days.

2. **#8719 — Runtime base-path deployment** *(Under Review, XL)*
   - https://github.com/agentscope-ai/QwenPaw/pull/8719
   - **Community signal:** Enterprise and self-hosted users behind reverse proxies (nginx, Caddy) need prefix-path deployment. This is a long-requested feature (related to #1853 from 2024).
   - Size is XL due to Console routing changes; expect careful review.

---

## 5. Bugs & Stability

Ranked by severity and freshness:

| Severity | Issue | Age | Status | Fix PR? |
|----------|-------|-----|--------|---------|
| 🔴 High | #8580 Memory tag index 503 — tags generated but unreadable | 17 days | OPEN | No |
| 🔴 High | #8757 WeChat silent inbound polling death | 6 days | OPEN | No |
| 🟠 Medium | #8123 Daily Paper fails on model output truncation | 44 days | OPEN | No |
| 🟠 Medium | #8505 Bare APIError no retry (fixed by #8512) | 22 days | CLOSED | ✅ #8512 merged |
| 🟠 Medium | #8836 Tool config with password causes page refresh loop | 1 day | OPEN | No |
| 🟠 Medium | #8833 Mission CLI `/api` prefix duplication | 1 day | OPEN | ✅ #8837 closed it |
| 🟠 Medium | #8832 CLI health check uses unsupported HEAD | 1 day | OPEN | No |
| 🟡 Low | #8845 Markdown tables overflow message bubble | 1 day | OPEN | No |
| 🟡 Low | #8844 Message list not keyboard-focusable | 1 day | OPEN | No |
| 🟡 Low | #8839 Android Pad UI button overflow | 1 day | OPEN | No |
| 🟡 Low | #8840 LICENSE typo (extra "the") | 1 day | OPEN | No |

**Stability assessment:** The merge of #8835 (Windows file-access retry) and #8784 (skills rollback) directly improves two known crash/cancellation scenarios. However, the two high-severity open bugs (#8580, #8757) both involve silent failures with no error logs — these are the highest priority for the next release cycle.

---

## 6. Feature Requests & Roadmap Signals

| # | Request | Comments | Likelihood of Near-Term Inclusion |
|---|---------|----------|-----------------------------------|
| #8821 | Windows native notification on task completion | 3 | High — closed, may have a PR forthcoming |
| #8719 | Runtime `QWENPAW_BASE_PATH` for reverse-proxy deployment | Under Review | High — PR under active review (XL) |
| #8580 (side effect) | Memory tag rebuild/repair mechanism | 6 | Medium — depends on #8580 fix being merged |
| #8303 (feature) | Approval routing across all channels | Under Review | High — PR ready, closes long-standing regression |
| #8844 | Keyboard navigation in message list | 1 | Low-medium — UI enhancement, no PR yet |

**Roadmap signals:** The three-part local model management stack (#8649/#8647/#8648) represents a significant upcoming feature for local LLM users (llama.cpp GPU controls, MLX on Apple Silicon, unified Console UI). Its merge will likely constitute a minor or major release.

---

## 7. User Feedback Summary

**Pain points reported today:**

- **Productivity interruption:** Users running long background agents need OS-level notification (#8821) — current UX requires constant tab monitoring.
- **Production reliability:** WeChat channel silent message loss (#8757) is especially damaging in production: the system appears healthy while messages are dropped, with no log evidence.
- **Memory feature trust:** The tag generation pipeline completing but tags being unreadable (#8580) undermines confidence in the ReMe memory system after two weeks without resolution.
- **Accessibility gaps:** Two separate UI issues (message list not keyboard-scrollable #8844; markdown table overflow #8845) affect users on non-mouse devices and wider screens — these are usability regressions from the current release.
- **Enterprise deployment friction:** The lack of base-path support (#8719) blocks self-hosted users behind standard reverse proxies.

**Positive signals:**
- The high volume of PR activity (41 updates) indicates active contributor engagement.
- The closure of #8821 (Windows notification) and the active review of #8719 signal responsiveness to user productivity and deployment needs.
- The XXXL local-model plugin extraction (#8499) demonstrates architectural ambition that the community has been requesting.

---

## 8. Backlog Watch

Issues and PRs that are important but have gone without maintainer attention or are at risk of staleness:

| Item | Type | Age | Gap |
|------|------|-----|-----|
| #8580 | Issue | 17 days | High-severity memory bug — no assignee, no fix PR |
| #8123 | Issue | 44 days | Daily Paper truncation error — still open, low comment count |
| #8757 | Issue | 6 days | WeChat silent death — needs investigation of `platform.py` error loop |
| #8649 / #8647 / #8648 | PRs | 12 days | Multi-part local model feature — depends on sequential merge, maintainer coordination needed |
| #8479 | PR | 24 days | Office skills sync with Anthropic update — XXXL size, first-time contributor, under review |
| #8719 | PR | 8 days | Base-path deployment — XL size, affects routing, needs thorough review |
| #8303 | PR | 34 days | Approval prompt delivery — regression, reviewed but not yet merged |

**Recommendation:** Prioritize triaging #8580 and #8757 before the next release. The local-model feature block (#8649→#8647→#8648) should be reviewed in dependency order to avoid blocking contributions from LXD-8.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>Let me analyze the GitHub data provided for ZeroClaw project and generate a structured project digest for 2026-11-21.

Let me break down what I have:

**Data Overview:**
- Issues updated in last 24h: 13 (all open/active)
- PRs updated in last 24h: 50 (49 open, 1 merged/closed)
- New releases: 0

**Latest Issues (13 total):**
1. #8794 - Bug: web dashboard UI stopping agent mid-work erases tool calls and thinking from context (P1, high risk)
2. #12422 - RFC: Scoped use of operator-managed service credentials
3. #12022 - Feature: memory recall opt-in external rerank stage
4. #12613 - Tracker: Deslop pass (cleanup/dead code removal)
5. #12597 - Bug: Telegram channel voice message transcription failure blocks offset
6. #12619 - Bug: gateway failed session-state write leaves 'running' until restart
7. #12614 - Feature: browser tool needs file-upload action
8. #12611 - Feature: retire local LLM response cache
9. #12607 - Bug: memory recall issues with saved facts
10. #12606 - Bug: a2a.client.peers config prefix issue
11. #12604 - Bug: MCP results from FastMCP tools reach model twice
12. #12601 - Bug: PR risk test reads base-side source at wrong sha
13. #12598 - Feature: WhatsApp Web quoted replies

**Latest PRs (50 total, showing top 20):**
1. #11076 - feat(tools): add agy_cli coding-CLI tool for Antigravity CLI
2. #12271 - feat(tools): route Discord external peers to explicit destination


3. #11815 - fix(tools): report dismissed ask_user choice as answer
4. #12615 - refactor(core): delete source files no crate compiles
5. #12617 - refactor(web): remove unused dashboard i18n keys
6. #12618 - chore(repo): remove committed artifacts, dead scripts
7. #12616 - refactor(core)!: remove root modules nothing compiles against
8. #12610 - fix(deps): bump wasmtime-wasi for RUSTSEC-2026-0587
9. #12479 - fix(providers): send drop_block for Anthropic thinking

I'm examining the PR activity across these updates, noting a mix of performance improvements, cleanup work, and critical security patches. The refactoring efforts (#12615, #12617, #12616) suggest ongoing code maintenance, while the security update (#12610) addresses a potential vulnerability. Notably, there are no recent releases, indicating the project is in an active development phase with multiple ongoing improvements. I'm tracking several high-priority memory and tool-related issues that need attention. The security RFC for operator-managed credentials is progressing, and the cleanup tracker shows active maintenance work. Critical bugs include gateway session state failures, Telegram channel blocking, and memory recall inconsistencies. The feature landscape reveals a significant refactoring effort with 70 orphaned source files being deleted, alongside UI key cleanup and dependency updates. The project is actively addressing technical debt while introducing new capabilities like Antigravity CLI integration, memory reranking, and response cache retirement.

The community is focusing on robust error handling, memory management, and security enhancements. Notably, the project maintains a clean security posture with no critical vulnerabilities, though memory system improvements remain a key concern. The development trajectory suggests a systematic approach to technical refinement and feature expansion.
</think>


# ZeroClaw Project Digest — 2026-11-21

## 1. Today's Overview

ZeroClaw is experiencing high activity with 13 issues and 50 PRs updated in the last 24 hours, with no new releases. The project is in a significant cleanup and modernization phase: multiple PRs are removing dead code (70 orphaned source files, 165 unused i18n keys, 69 committed artifacts), while several security-critical fixes are in flight—including a WASI sandbox patch (RUSTSEC-2026-0587) and OIDC token compatibility improvements. The community is actively discussing memory system reliability and browser tool capabilities, reflecting growing real-world usage.

---

## 2. Releases

**No new releases today.**

The last release information is not available in the provided data. No tagged versions were published in the 24-hour window.

---

## 3. Project Progress

| PR | Author | Summary | Size |
|----|--------|---------|------|
| [#12615](https://github.com/zeroclaw-labs/zeroclaw/pull/12615) | JordanTheJet | **Cleanup:** Deletes 70 `.rs` source files that no crate compiles—reducing noise and review burden | L |
| [#12617](https://github.com/zeroclaw-labs/zeroclaw/pull/12617) | JordanTheJet | **Web cleanup:** Removes 165 unused dashboard i18n keys and 4,756 translations across 31 locales | XL |
| [#12618](https://github.com/zeroclaw-labs/zeroclaw/pull/12618) | JordanTheJet | **Repo hygiene:** Removes 69 committed artifacts and dead scripts; updates book/workflow navigation | L |
| [#12616](https://github.com/zeroclaw-labs/zeroclaw/pull/12616) | JordanTheJet | **Breaking refactor:** Removes 6 root modules with no users in lib or binary targets | L |
| [#12610](https://github.com/zeroclaw-labs/zeroclaw/pull/12610) | tidux | **Security fix:** Bumps `wasmtime-wasi` to 48.0.10 for RUSTSEC-2026-0587 (CVSS 7.5 WASI filesystem sandbox escape on Windows) | XS |
| [#12479](https://github.com/zeroclaw-labs/zeroclaw/pull/12479) | mov-xound-glitch | **Provider fix:** Sends `drop_block` so edited conversation history no longer fails Anthropic thinking requests | L |
| [#11815](https://github.com/zeroclaw-labs/zeroclaw/pull/11815) | Audacity88 | **Tool fix:** Reports dismissed `ask_user` choices as successful answers instead of retry-triggering errors | S |

**Assessment:** The 1:49 open-to-merged PR ratio reflects active development rather than stagnation. Large cleanup PRs from JordanTheJet indicate intentional technical debt reduction. The security patch was expedited (published 2026-11-19, patched 2026-11-20).

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Author | Topic | Comments |
|-------|--------|-------|----------|
| [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | susyabashti | **[P1 Bug] Web dashboard: stopping agent mid-work erases tool calls and thinking from context** | 6 |
| [#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | CastelloBrancoTecnologia | **RFC: Scoped use of operator-managed service credentials** | 5 |
| [#12022](https://github.com/zeroclaw-labs/zeroclaw/issues/12022) | mov-xound-glitch | **Feature: Memory recall external rerank stage** | 2 |
| [#12613](https://github.com/zeroclaw-labs/zeroclaw/issues/12613) | JordanTheJet | **Tracker: Deslop pass (dead code, inert features, comment cleanup)** | 1 |

**Analysis:**
- **Issue #8794** (6 comments) reveals a critical UX flaw where stopping an agent during tool execution causes complete context loss—the tool calls and reasoning are discarded as if they never happened. This blocks workflows entirely and has been open since July 2026, indicating complexity.
- **RFC #12422** (5 comments) addresses a significant security model change: operators need to authorize agents for service tasks *without* exposing credentials to the model or chat logs. This is a foundational security enhancement for enterprise deployments.
- **Issue #12022** proposes an opt-in external reranking stage for memory recall, allowing operators to configure a `/v1/rerank` endpoint for improved candidate selection.

---

## 5. Bugs & Stability

### Reported Bugs (ranked by severity)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **S1** | [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | Web UI stopping mid-work erases tool calls & reasoning from context | No |
| **S1** | [#12597](https://github.com/zeroclaw-labs/zeroclaw/issues/12597) | Telegram voice transcription failure blocks all subsequent messages (offset never advances) | No |
| **High Risk** | [#12619](https://github.com/zeroclaw-labs/zeroclaw/issues/12619) | Gateway failed session-state write leaves `running` until restart; Stop can't clear it | No |
| **S2** | [#12607](https://github.com/zeroclaw-labs/zeroclaw/issues/12607) | Memory recall misses saved facts, saves wrong answers, keeps both after correction | No |
| **S2** | [#12606](https://github.com/zeroclaw-labs/zeroclaw/issues/12606) | `a2a.client.peers` cannot be set via config—wrong prefix (`a2a_client` vs `a2a`) | No |
| **S2** | [#12604](https://github.com/zeroclaw-labs/zeroclaw/issues/12604) | MCP results from FastMCP tools returning strings reach the model twice | No |
| **S3** | [#12601](https://github.com/zeroclaw-labs/zeroclaw/issues/12601) | PR risk test reads base-side source at `base.sha` instead of merge-base | No |

**Stability Assessment:**  
- **2 S1 bugs** represent workflow blockers affecting core functionality.
- **Gateway session state bug (#12619)** is particularly concerning—it persists across restarts and cannot be cleared via Stop, requiring manual intervention.
- **Memory system (#12607)** shows data integrity issues (corruption/triple storage).
- No fix PRs exist for any reported bugs, suggesting they need maintainer triage.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features

| Issue | Author | Summary | Viability |
|-------|--------|---------|-----------|
| [#12614](https://github.com/zeroclaw-labs/zeroclaw/issues/12614) | danieliyahu1 | **Browser tool needs file-upload action** for `<input type="file">` elements | High—underlying CLI (`agent-browser`) already supports it |
| [#12611](https://github.com/zeroclaw-labs/zeroclaw/issues/12611) | JordanTheJet | **Retire local LLM response cache** (almost never hits; 4 config keys + `response_cache.db`) | High—already in PR [#12612](https://github.com/zeroclaw-labs/zeroclaw/pull/12612) |
| [#12598](https://github.com/zeroclaw-labs/zeroclaw/issues/12598) | nsetyo | **WhatsApp Web: send agent replies as quoted replies** for group context | Medium—blocked by #10976 (broken outbound mentions) |
| [#12022](https://github.com/zeroclaw-labs/zeroclaw/issues/12022) | mov-xound-glitch | **Memory recall: opt-in external rerank stage** via operator-configured `/v1/rerank` endpoint | Medium—proposed implementation, needs review |

### Active PRs Indicating Direction

| PR | Summary | Roadmap Signal |
|----|---------|----------------|
| [#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076) | Add Antigravity CLI (`agy`) as coding delegate (replaces deprecated Gemini CLI) | Tool delegation expansion |
| [#12596](https://github.com/zeroclaw-labs/zeroclaw/pull/12596) | Scope browser username/password and TOTP access independently | Credential granularization |
| [#12269](https://github.com/zeroclaw-labs/zeroclaw/pull/12269) | Add paired-device voice settings and chat controls in WebUI | Accessibility / UX |
| [#12497](https://github.com/zeroclaw-labs/zeroclaw/pull/12497) | Make OAuth scopes configurable per OIDC provider | Enterprise identity |

**Roadmap Prediction:** The next release is likely to include:
1. Response cache removal (deprecation complete)
2. Antigravity CLI integration
3. OIDC scope configurability
4. Cleanup of dead code (70+ files)
5. Security patches (WASI, OIDC)

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Impact |
|-------|----------|--------|
| **Memory unreliability** | Issues [#12607](https://github.com/zeroclaw-labs/zeroclaw/issues/12607), [#12022](https://github.com/zeroclaw-labs/zeroclaw/issues/12022) | Users report facts lost, wrong answers saved, duplicates after correction. External reranking requested to improve recall accuracy. |
| **Context loss on interruption** | Issue [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | Stopping an agent mid-task discards all progress—complete UX failure for long-running tasks. |
| **Telegram channel blocking** | Issue [#12597](https://github.com/zeroclaw-labs/zeroclaw/issues/12597) | Voice transcription failures halt all subsequent messages, not just the voice message. |
| **Config prefix inconsistencies** | Issue [#12606](https://github.com/zeroclaw-labs/zeroclaw/issues/12606) | A2A peer configuration cannot be set via standard config surfaces—fragile for operators. |

### Positive Signals

- **Security focus:** RFC #12422 and multiple OIDC PRs indicate serious enterprise-grade identity work.
- **Maintenance velocity:** 4 large cleanup PRs in one day shows healthy project stewardship.
- **Tool ecosystem expansion:** Antigravity CLI integration reflects responsive adaptation to third-party changes (Google deprecated Gemini CLI).

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Age | Priority | Status | Concern |
|-------|-----|----------|--------|---------|
| [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | ~4.5 months | P1 / High Risk | Open | Long-standing S1 workflow blocker; 6 comments but no fix |
| [#12619](https://github.com/zeroclaw-labs/zeroclaw/issues/12619) | <1 day | High Risk | Open | Gateway state corruption; critical for session management |
| [#12597](https://github.com/zeroclaw-labs/zeroclaw/issues/12597) | 1 day | S1 | Open | Telegram channel blocked for all users |
| [#12607](https://github.com/zeroclaw-labs/zeroclaw/issues/12607) | 1 day | S2 | Open | Memory data integrity; user-facing corruption |

### Stalled PRs (No Activity Today)

| PR | Age | Summary | Risk |
|----|-----|---------|------|
| [#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076) | ~2 months | Antigravity CLI integration | Size XL; needs review |
| [#11885](https://github.com/zeroclaw-labs/zeroclaw/pull/11885) | ~1 month | Goal V1 proposal 8/12 (formal review FAIL) | Stale; draft status unclear |
| [#12269](https://github.com/zeroclaw-labs/zeroclaw/pull/12269) | ~2 weeks | Voice settings WebUI | Size XL; needs review |

---

## Summary Table

| Metric | Value |
|--------|-------|
| Issues updated (24h) | 13 |
| PRs updated (24h) | 50 |
| New releases | 0 |
| S1 bugs | 2 |
| High-risk issues | 3 |
| Active cleanup PRs | 4 |
| Security patches | 1 (WASI RUSTSEC) |

**Overall Health:** Moderate. High activity volume indicates active development. However, 0 merged PRs today and 2 unfixed S1 bugs (plus 1 critical gateway state bug) warrant attention. Cleanup momentum is strong, but reliability issues in memory and channel integrations should be prioritized.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*