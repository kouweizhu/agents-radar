# OpenClaw Ecosystem Digest 2026-11-01

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-01 01:24 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

<think>Let me analyze the GitHub data provided for OpenClaw and generate a structured project digest for 2026-11-01.

First, let me organize the key information:

**Overview Data:**
- Issues updated in last 24h: 500 (open/active: 399, closed: 101)
- PRs updated in last 24h: 500 (open: 248, merged/closed: 252)
- New releases: 0

**Latest Releases:** None

**Top Issues by Comment Count:**
1. #160959 - Gateway blocks for minutes while capturing large external plugins (66 comments, P0)
2. #177656 - Native host exec returns shared-state integrity-admission error (22 comments, P1)
3. #166634 - Late reclamation commit checkpoint failure leaves agent unavailable (21 comments, P0)
4. #161976 - WhatsApp DM replies fail at durable registry handoff after restart (19 comments, P1)
5. #153426 - Curated memory roots silently excluded from bootstrap injection (15 comments, P0)
6. #76493 - Allow SecretRef objects in mcp.servers[].env schema (13 comments, P2)
7. #178359 - doctor --fix --non-interactive idles for 15+ min (13 comments, P1)
8. #131768 - Android Talk drops live session when agent uses tools (12 comments, P1)
9. #137177 - WeCom plugin can no longer be installed (11 comments, P0)
10. #184658 - Windows npm update reports missing-module cleanup failures (11 comments, P2)

**Top PRs:**
Looking at the PRs, I can see several recent ones from 2026-11-01:
- #189913 [CLOSED] - perf(control-ui): overlap Sessions and Cron route readiness


- #189917 [OPEN] - fix(ui): saving a provider key says when model policy hides models
- #189916 [OPEN] - fix(diagnostics): identify native main-thread stalls on Linux
- #189918 [OPEN] - experiment(control-ui): bounded cached row text fidelity
- #189924 [OPEN] - fix: allow plugin gateway handlers to return payloads
- #189928 [OPEN] - fix(agents): Claude CLI per-call usage keeps stream-start output
- #189889 [CLOSED] - fix(sessions): preserve explicit web search preferences

The recent PR activity shows a mix of UI improvements, bug fixes, and diagnostic enhancements. Several of these address performance issues in the control UI and session management, while others focus on improving error handling and diagnostic capabilities.</think>

# OpenClaw Project Digest — 2026-11-01

## 1. Today's Overview

OpenClaw project activity remains high on November 1st, 2026, with **500 issues** and **500 pull requests** updated in the last 24 hours. The issue backlog shows 399 active open issues against 101 closed, while PR activity shows 248 open versus 252 merged/closed—indicating healthy throughput. No new releases were published today, suggesting the team is in a stabilization phase following recent v2026.10.x releases. Critical stability issues dominate attention, particularly around Gateway performance regressions and session management, while the community continues to file feature requests around memory management and provider integration.

## 2. Releases

**No new releases** were published on November 1st, 2026. The project continues to operate on the v2026.10.x stable baseline (latest observed: 2026.10.8 in issue #187900).

## 3. Project Progress

The following pull requests were merged or closed today:

| PR | Title | Status |
|----|-------|--------|
| [#189913](https://github.com/openclaw/openclaw/pull/189913) | perf(control-ui): overlap Sessions and Cron route readiness | **MERGED** |
| [#189889](https://github.com/openclaw/openclaw/pull/189889) | fix(sessions): preserve explicit web search preferences | **MERGED** |
| [#189843](https://github.com/openclaw/openclaw/pull/189843) | perf(ui): reduce shared agent selector setup and focus work | **MERGED** |
| [#189395](https://github.com/openclaw/openclaw/pull/189395) | feat(google): use the Interactions API for Gemini Flash models | **MERGED** |

**Key advancements:**
- Control UI route performance improvements merged, reducing first-visit latency
- Session settings persistence bug fixed—explicit `webSearch` preferences now survive reloads
- Gemini Flash models now use the more efficient Interactions API instead of GenerateContent

## 4. Community Hot Topics

The most active discussions center on critical regressions and architectural limitations:

| Issue | Title | Comments | Focus Area |
|-------|-------|----------|-------------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway blocks for minutes while capturing large external plugins (2026.9.6 regression) | **66** | Performance regression |
| [#177656](https://github.com/openclaw/openclaw/issues/177656) | Native host exec returns shared-state integrity-admission error | **22** | Execution engine |
| [#166634](https://github.com/openclaw/openclaw/issues/166634) | Late reclamation commit checkpoint failure leaves agent unavailable | **21** | Session/crash recovery |
| [#161976](https://github.com/openclaw/openclaw/issues/161976) | WhatsApp DM replies fail at durable registry handoff after restart | **19** | Messaging integration |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | Curated memory roots silently excluded from bootstrap injection | **15** | Memory/provenance system |

**Analysis:** The #160959 regression (66 comments) represents the most urgent community concern—a 2026.9.6 regression causing Gateway event loop blocking for minutes during plugin capture. This directly impacts self-hosted deployments with large plugin dependency trees. The provenance ratchet issue (#153426) reveals a silent data loss scenario where `MEMORY.md`/`USER.md` files become permanently excluded from bootstrap prompts without user notification.

## 5. Bugs & Stability

Critical stability issues ranked by severity and recent activity:

### P0 — Release Blockers
| Issue | Title | Status |
|-------|-------|--------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway blocks for minutes while capturing large external plugins | **Open** — 66 comments |
| [#166634](https://github.com/openclaw/openclaw/issues/166634) | Late reclamation commit checkpoint failure leaves agent unavailable after crash | **Open** — 21 comments |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | Curated memory roots silently excluded from bootstrap injection | **Open** — 15 comments |
| [#137177](https://github.com/openclaw/openclaw/issues/137177) | WeCom plugin can no longer be installed successfully | **Open** — 11 comments |

### P1 — High Priority
| Issue | Title | Status |
|-------|-------|--------|
| [#177656](https://github.com/openclaw/openclaw/issues/177656) | Native host exec returns shared-state integrity-admission error | **Open** — 22 comments |
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | doctor --fix hangs 15+ min in plugin-capture stage (macOS) | **Open** — 13 comments |
| [#187900](https://github.com/openclaw/openclaw/issues/187900) | doctor hangs indefinitely at startup (all modes, Linux) | **Open** — 9 comments |
| [#182369](https://github.com/openclaw/openclaw/issues/182369) | Gateway RSS grows ~0.1 GiB/h off-heap until restart | **Open** — 6 comments |

**Notable:** No fix PRs referenced in the reported bugs. Several issues reference `clawsweeper:no-new-fix-pr` indicating the bugs are known but unpatched.

## 6. Feature Requests & Roadmap Signals

Active feature requests with significant community engagement:

| Issue | Title | Priority | Signal |
|-------|-------|----------|--------|
| [#159858](https://github.com/openclaw/openclaw/issues/159858) | Let idle worker isolates release memory on small hosts (~650 MB heap) | P1 | Memory optimization |
| [#138366](https://github.com/openclaw/openclaw/issues/138366) | Let the memory slot owner drive the Dreams page | P2 | UI/UX enhancement |
| [#76493](https://github.com/openclaw/openclaw/issues/76493) | Allow SecretRef objects in `mcp.servers[].env` schema | P2 | Security/operator experience |
| [#173058](https://github.com/openclaw/openclaw/issues/173058) | tools.fs.workspaceOnly does not restrict file tools (security) | P2 | Security boundary |

**Roadmap signals:** The memory optimization request (#159858, updated Nov 1) targeting ~650 MB heap reduction on small hosts suggests memory efficiency is a near-term priority. The SecretRef schema limitation (#76493) indicates security best practices are being constrained by current configuration schema—likely candidates for near-term resolution given security implications.

## 7. User Feedback Summary

**Pain points emerging from recent issues:**

1. **Plugin capture performance regression** — Users with external plugins report multi-minute Gateway blocking, impacting production deployments
2. **Silent data loss** — The provenance ratchet permanently excludes memory files without diagnostic output, leaving users unaware their curated prompts aren't loading
3. **Session recovery failures** — Crash recovery leaves agents permanently unavailable, requiring manual intervention
4. **Memory bloat** — Self-hosted users report 0.1 GiB/h RSS growth, requiring frequent restarts
5. **Doctor tool reliability** — Both macOS and Linux users report indefinite hangs during diagnostic runs

**Use case themes:** Heavy self-hosted deployments with many plugins, multi-agent rosters, and long-running sessions are encountering the most friction. The project appears to be stabilizing after rapid feature expansion in v2026.9.x.

## 8. Backlog Watch

Important issues requiring maintainer attention with stale or missing responses:

| Issue | Title | Age | Concern |
|-------|-------|-----|---------|
| [#131768](https://github.com/openclaw/openclaw/issues/131768) | Android Talk drops live session when agent uses tools | ~65 days | Live voice stability |
| [#135704](https://github.com/openclaw/openclaw/issues/135704) | iMessage reflections bypass echo cache | ~60 days | Message integrity |
| [#130209](https://github.com/openclaw/openclaw/issues/130209) | Sensitive-value redaction masks browser act key parameter | ~67 days | Security/self-correction |
| [#114913](https://github.com/openclaw/openclaw/issues/114913) | Memory search bound embeddings before fallback to FTS | ~96 days | Search reliability |
| [#112313](https://github.com/openclaw/openclaw/issues/112313) | Dead-lettered outbound delivery queue entries are permanent | ~103 days | Queue management |

**Notable gaps:** Several P1-level issues have `clawsweeper:needs-maintainer-review` or `clawsweeper:needs-product-decision` tags but limited recent activity. The outbound queue permanence issue (#112313) represents a data hygiene concern with no current remediation path.

---

## Cross-Ecosystem Comparison

<think>The user wants a cross-project comparison report for the four projects I've been tracking:
1. OpenClaw
2. Hermes Agent (nousresearch/hermes-agent)
3. QwenPaw (agentscope-ai/QwenPaw)
4. ZeroClaw (zeroclaw-labs/zeroclaw)

Let me compile the key metrics and observations from all four digests:

**OpenClaw:**
- 500 issues updated in last 24h (399 open, 101 closed)
- 500 PRs updated in last 24h (248 open, 252 merged/closed)
- No new releases
- High activity, seems mature and actively maintained
- Issues focus on Gateway performance, session management, memory/provenance

**Hermes Agent:**
- 50 issues updated in last 24h (47 open, 3 closed)
- 50 PRs updated in last 24h (37 open, 13 merged/closed)
- No new releases
- Strong mobile app demand, security issues, session portability

**QwenPaw:**
- 9 issues updated
- 14 PRs updated (13 open, 1 merged/closed)
- No new releases
- Channel integration focus (Feishu, QQ, Telegram), Docker issues

**ZeroClaw:**
- 24 issues updated (20 open, 4 closed)
- 50 PRs updated (45 open, 5 merged/closed)
- No releases
- Security-heavy (10+ vulnerabilities), v0.9.0 in progress, CLI-only builds

Let me structure this into the requested format:

1. Ecosystem Overview
2. Activity Comparison (table)
3. OpenClaw's Position
4. Shared Technical Focus Areas
5. Differentiation Analysis
6. Community Momentum & Maturity
7. Trend Signals</think>

# Cross-Project Ecosystem Report — Personal AI Assistants & Agents

## 1. Ecosystem Overview

The personal AI assistant and agent ecosystem is in a period of rapid maturation, with multiple open-source projects competing to define the next generation of user-facing AI tools. Projects span a wide spectrum—from gateway-centric architectures (OpenClaw) to security-first designs (ZeroClaw), from multi-channel platforms (QwenPaw) to mobile-first visions (Hermes Agent). The landscape reflects divergent bets on where the market is heading: desktop-first productivity, mobile-native experiences, enterprise-grade security, or open plugin ecosystems. All four projects show healthy activity levels, but each faces distinct technical and community challenges as they scale toward production deployments.

## 2. Activity Comparison

| Metric | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|--------|----------|--------------|---------|----------|
| **Issues (24h)** | 500 | 50 | 9 | 24 |
| **Issues (Open)** | 399 | 47 | 9 | 20 |
| **Issues (Closed)** | 101 | 3 | 0 | 4 |
| **PRs (24h)** | 500 | 50 | 14 | 50 |
| **PRs (Open)** | 248 | 37 | 13 | 45 |
| **PRs (Merged/Closed)** | 252 | 13 | 1 | 5 |
| **Releases (24h)** | 0 | 0 | 0 | 0 |
| **Health Score** | High | High | Moderate | High (security-heavy) |

## 3. OpenClaw's Position

OpenClaw operates at a significantly larger scale than its peers, with 10× the issue and PR activity of the next most active project (Hermes Agent). This reflects a more mature codebase with a broader feature surface and user base. Technically, OpenClaw distinguishes itself through its gateway-centric architecture—a centralized routing layer that manages plugin capture, session state, and provider abstraction. This approach favors extensibility but introduces complexity (as evidenced by the performance regression in #160959 where Gateway blocks for minutes). Community size is substantially larger, with the mobile app request (#11911 in Hermes Agent) showing comparable engagement to OpenClaw's P0 issues. OpenClaw's advantage lies in its established plugin ecosystem and multi-provider support; its disadvantage is architectural complexity leading to harder-to-diagnose performance regressions.

## 4. Shared Technical Focus Areas

Several requirements emerge consistently across projects:

| Focus Area | Projects | Specific Need |
|------------|----------|----------------|
| **Session persistence** | OpenClaw, Hermes Agent, ZeroClaw | Resume sessions, migrate between environments, survive crashes |
| **Gateway/Proxy reliability** | OpenClaw, QwenPaw | Handle timeouts, retries, protocol fallback (MCP legacy servers) |
| **Security hardening** | ZeroClaw, Hermes Agent | Credential isolation, approval verification, sandboxing |
| **Channel integration** | QwenPaw, Hermes Agent | Multi-platform messaging (Feishu, QQ, WhatsApp, Slack, Telegram) |
| **Memory/Provenance** | OpenClaw, ZeroClaw | Controlled memory injection, subagent isolation, provenance ratchets |

**Observation:** Session management and security are universal concerns. Every project has open bugs in these areas, suggesting these are unsolved problems in the current architectural paradigms rather than implementation gaps.

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **Primary target** | Self-hosted power users | Consumer/developer desktop | Enterprise multi-channel | Security-conscious operators |
| **Architecture** | Gateway-centric | Daemon + TUI | Channel router + Console | Minimal daemon + CLI-first |
| **Key strength** | Plugin ecosystem, multi-provider | Mobile vision, rich TUI | Channel breadth (Feishu, QQ, Slack) | Security model, minimal attack surface |
| **Weakness** | Gateway complexity, performance regression | Mobile beta quality, limited multi-user | Docker/environment edge cases | Security debt, slower feature velocity |
| **Release stage** | Stable (v2026.10.x) | Beta (v0.x) | Pre-1.0 (v2.3.0b) | Pre-1.0 (v0.9.0) |

OpenClaw bets on extensibility; Hermes Agent bets on mobile-native; QwenPaw bets on channel diversity; ZeroClaw bets on security. These are fundamentally different product strategies addressing overlapping but distinct market segments.

## 6. Community Momentum & Maturity

**Rapid Iteration (High Activity):**
- **OpenClaw** — 500 items/24h, high throughput, stable release cadence. Mature project in stabilization phase.
- **ZeroClaw** — 50 PRs/24h despite smaller codebase; v0.9.0 release in progress; high security researcher engagement.

**Steady Development (Moderate Activity):**
- **Hermes Agent** — 50 items/24h, mobile beta generating feedback, security fixes in progress.
- **QwenPaw** — Lower volume but consistent; channel integration work steady.

**Maturation Indicators:**
- OpenClaw: Performance regression handling (P0 issues with 66+ comments) indicates production scale.
- ZeroClaw: Security researcher involvement (10+ vulnerabilities filed) indicates security-audience targeting.
- Hermes Agent: Feature requests dominating (mobile app: 21 comments, 15 👍) indicates user demand gathering.
- QwenPaw: Docker and proxy edge cases emerging indicates real-world deployment growth.

## 7. Trend Signals

The following patterns emerge from cross-project community feedback:

1. **Session portability is a universal pain point.** Every project has open issues around session migration, crash recovery, or state persistence. Users want their AI assistants to feel persistent across restarts, devices, and environment changes—a solved problem in traditional software, not yet solved in agent runtimes.

2. **Security is becoming a primary differentiator.** ZeroClaw's active security research and Hermes Agent's approval-verification bug (#147373) indicate that as agents gain access to more tools and data, security model rigor is becoming a competitive advantage, not just a baseline requirement.

3. **Multi-channel deployment is driving complexity.** QwenPaw's proxy, Docker, and protocol fallback issues reflect the reality that production AI assistants must integrate with diverse enterprise communication stacks—each with its own quirks.

4. **Mobile is the next frontier.** Hermes Agent's mobile app request has the highest community engagement of any feature across all four projects. The market is signaling demand for native mobile experiences; the technical challenge (battery, notifications, WebSocket reliability) is substantial.

5. **Gateway/daemon architectures are hitting performance ceilings.** OpenClaw's Gateway regression and ZeroClaw's daemon design choices reflect a common architectural tension: centralized routing simplifies management but introduces bottlenecks at scale.

6. **Plugin ecosystems require runtime isolation.** OpenClaw's plugin capture issues and ZeroClaw's credential disclosure vulnerabilities both stem from the fundamental challenge of running third-party code safely within an agent's execution context.

**Implication for AI agent developers:** The next wave of innovation will likely focus on distributed agent architectures (avoiding gateway bottlenecks), stronger sandboxing (addressing security debt), and cross-device session continuity. Projects that solve session portability and mobile deployment will capture significant market share.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to generate a structured project digest for Hermes Agent based on the provided GitHub data. Let me analyze the data and create the sections as requested.

Let me organize the information:

**Today's Overview:**
- 50 issues updated in last 24h (47 open, 3 closed)
- 50 PRs updated in last 24h (37 open, 13 merged/closed)
- No new releases

**Releases:**
- No new releases

**Project Progress:**
Looking at the PRs:
- #147382: fix(gateway): record initial delivery attempt atomically
- #147075: fix(redact): per-line URL gate, recursive searches, argv dumps
- #147073: test(model-switch): make user-provider picker tests hermetic to a live Ollama
- #147054: fix(ssh): keep ControlMaster sockets under sun_path for deep profile temp dirs
- #147381: fix(config): reject empty documents during raw writeback
- #146170: feat(mcp-catalog): add SoChain hosted MCP
- #146171: feat(optional-skills): add utxo skill for Bitcoin, Litecoin, Dogecoin and Zcash
- #147380: fix(prompt): honor configured temporary directories
- #147068: fix(copilot-acp): catch BrokenPipeError on write
- #147072: fix(slack): render multi-select clarify as checkboxes + Submit
- #146934: fix(tui): bind queue retry to Alt+K as every hint states
- #131210: fix(anthropic): send one User-Agent on OAuth routes, not two
- #131211: feat(delegation): opt-in delegation.inherit_soul gives subagents SOUL.md
- #147378: fix(daytona): pass the profile-scoped API key to the SDK


- #147056: feat(google-workspace): named Google accounts with --account
- #3987: feat(security): add opt-in CaMeL guard plugin with IFC tests
- #147376: fix(kanban): identify refused PR acceptance reads
- #147375: feat(plugin-catalog): add neuralmind plugin
- #147370: feat(cli): make JSON output a configurable default
- #147188: fix(browser): URL scanners read the host after any userinfo

The PR list shows significant development across multiple areas: fixes to core gateway and CLI functionality, new feature integrations for Kanban and plugin systems, security enhancements, and improvements to OAuth and account handling.

Looking at the issue tracker, several mobile and platform-specific issues stand out as actively discussed. The native mobile app with voice calling feature has strong engagement with 21 comments and 15 thumbs-ups, while Android beta constraints are creating friction—Firebase tester limits and scrolling performance issues in conversations are both generating 4-5 comments each. Security concerns around smart approval systems are also receiving attention, particularly a notable incident where a PowerShell command removed a large number of files. Platform-specific bugs are emerging, particularly around iOS and Android betas, with issues affecting notification behavior, WebSocket connectivity, and memory management. Session handling problems persist, including profile migration failures, SQLite connection leaks during cache eviction, and gateway event loop blocking. Configuration handling continues to surface bugs related to empty document states. New security issues and Telegram adapter bugs were also reported today.

On the feature side, users are requesting native mobile apps with voice capabilities, GPU optimization for Apple Silicon through mlx-whisper, cron job metadata improvements, email authentication flexibility, and desktop enhancements like AI prompt improvement tools. The community's primary concerns center on mobile beta quality issues, session persistence, and the complexity of managing multiple accounts across platforms.</think>

# Hermes Agent Project Digest — 2026-11-01

## Today's Overview

Hermes Agent shows high development activity today with **50 issues** and **50 PRs** updated in the last 24 hours. The project is actively addressing mobile beta issues (both iOS and Android), with several security and stability fixes in flight. No new releases were published today, but the pipeline contains multiple fixes targeting gateway reliability, session management, and platform-specific bugs. The community is particularly engaged with the mobile app roadmap and security-related issues.

---

## Releases

No new releases today.

---

## Project Progress

The following PRs were merged/closed today:

| PR | Title | Status |
|----|-------|--------|
| [#147382](https://github.com/NousResearch/hermes-agent/pull/147382) | fix(gateway): record initial delivery attempt atomically | Open |
| [#147381](https://github.com/NousResearch/hermes-agent/pull/147381) | fix(config): reject empty documents during raw writeback | Open |
| [#147380](https://github.com/NousResearch/hermes-agent/pull/147380) | fix(prompt): honor configured temporary directories | Open |
| [#147378](https://github.com/NousResearch/hermes-agent/pull/147378) | fix(daytona): pass the profile-scoped API key to the SDK | Open |
| [#147376](https://github.com/NousResearch/hermes-agent/pull/147376) | fix(kanban): identify refused PR acceptance reads | Open |
| [#147375](https://github.com/NousResearch/hermes-agent/pull/147375) | feat(plugin-catalog): add neuralmind plugin | Open |
| [#147075](https://github.com/NousResearch/hermes-agent/pull/147075) | fix(redact): per-line URL gate, recursive searches, argv dumps | Open |
| [#147073](https://github.com/NousResearch/hermes-agent/pull/147073) | test(model-switch): make user-provider picker tests hermetic | Open |
| [#147054](https://github.com/NousResearch/hermes-agent/pull/147054) | fix(ssh): keep ControlMaster sockets under sun_path | Open |
| [#146170](https://github.com/NousResearch/hermes-agent/pull/146170) | feat(mcp-catalog): add SoChain hosted MCP | Open |
| [#146171](https://github.com/NousResearch/hermes-agent/pull/146171) | feat(optional-skills): add utxo skill for Bitcoin/LTC/DOGE/Zcash | Open |
| [#147068](https://github.com/NousResearch/hermes-agent/pull/147068) | fix(copilot-acp): catch BrokenPipeError on write | Open |
| [#147072](https://github.com/NousResearch/hermes-agent/pull/147072) | fix(slack): render multi-select clarify as checkboxes | Open |
| [#146934](https://github.com/NousResearch/hermes-agent/pull/146934) | fix(tui): bind queue retry to Alt+K | Open |
| [#131210](https://github.com/NousResearch/hermes-agent/pull/131210) | fix(anthropic): send one User-Agent on OAuth routes | Open |
| [#131211](https://github.com/NousResearch/hermes-agent/pull/131211) | feat(delegation): opt-in delegation.inherit_soul | Open |
| [#147056](https://github.com/NousResearch/hermes-agent/pull/147056) | feat(google-workspace): named Google accounts with --account | Open |
| [#3987](https://github.com/NousResearch/hermes-agent/pull/3987) | feat(security): add opt-in CaMeL guard plugin with IFC tests | Open |
| [#147370](https://github.com/NousResearch/hermes-agent/pull/147370) | feat(cli): make JSON output a configurable default | Open |
| [#147188](https://github.com/NousResearch/hermes-agent/pull/147188) | fix(browser): URL scanners read the host after any userinfo | Open |

---

## Community Hot Topics

| Issue | Title | Comments | Reactions |
|-------|-------|----------|-----------|
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | [Feature Request] Native Mobile App (iOS & Android) with Voice Calling | 21 | 👍 15 |
| [#147269](https://github.com/NousResearch/hermes-agent/issues/147269) | Hermes Mobile Android beta is at the Firebase tester limit | 5 | 👍 1 |
| [#147321](https://github.com/NousResearch/hermes-agent/issues/147321) | Android beta: conversation scrolling stutters and long streamed replies can't be scrolled | 4 | — |
| [#144547](https://github.com/NousResearch/hermes-agent/issues/144547) | lifecycle guard blocks `hermes gateway restart` but not `hermes update` | 4 | — |
| [#145162](https://github.com/NousResearch/hermes-agent/issues/145162) | drive_preview / desktop_preview read: viewer requests never answered | 4 | — |

**Analysis:** The mobile app feature request (#11911) remains the most discussed item, with 21 comments and 15 thumbs-ups, indicating strong user demand for native iOS/Android apps with voice capabilities. The Firebase tester limit issue (#147269) signals successful beta adoption but capacity constraints. Performance issues on Android (#147321) and security concerns around lifecycle guards (#144547) are generating developer attention.

---

## Bugs & Stability

| Severity | Issue | Summary | Fix PR |
|----------|-------|---------|--------|
| **High** | [#147373](https://github.com/NousResearch/hermes-agent/issues/147373) | Smart Approval auto-approved PowerShell command that removed 188,303 files (21.4 GiB) | — |
| **High** | [#147323](https://github.com/NousResearch/hermes-agent/issues/147323) | Android app freezes, crashes with OutOfMemoryError after ~1 hour | — |
| **High** | [#147361](https://github.com/NousResearch/hermes-agent/issues/147361) | Mobile app chat WebSocket always 403 on remote gateway (Origin-less subprotocol) | — |
| **High** | [#145999](https://github.com/NousResearch/hermes-agent/issues/145999) | Gateway event loop blocks on state.db get_meta() — 30s watchdog kills process | — |
| **High** | [#147087](https://github.com/NousResearch/hermes-agent/issues/147087) | SQLite connection leak on soft cache eviction (one per evicted agent) | — |
| **Medium** | [#147321](https://github.com/NousResearch/hermes-agent/issues/147321) | Android beta: conversation scrolling stutters | — |
| **Medium** | [#147350](https://github.com/NousResearch/hermes-agent/issues/147350) | Empty config.yaml overwrites user's whole config with stub | [#147381](https://github.com/NousResearch/hermes-agent/pull/147381) |
| **Medium** | [#147342](https://github.com/NousResearch/hermes-agent/issues/147342) | Duplicate Slack event → double admission | — |

**Key Concern:** A critical security-related bug (#147373) involves Smart Approval authorizing a command whose actual targets differed from its displayed text, leading to mass file deletion. This highlights a potential gap in the approval verification logic.

---

## Feature Requests & Roadmap Signals

| Issue | Title | Demand |
|-------|-------|--------|
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | Native Mobile App (iOS & Android) with Voice Calling | 21 comments, 15 👍 |
| [#41659](https://github.com/NousResearch/hermes-agent/issues/41659) | Apple Silicon GPU underutilized for STT — add mlx-whisper | 3 comments |
| [#68482](https://github.com/NousResearch/hermes-agent/issues/68482) | Cron job metadata fields (tags/category, description) | 3 comments |
| [#135931](https://github.com/NousResearch/hermes-agent/issues/135931) | Desktop: one-click AI prompt enhancement for unsent text | 1 comment |

**Prediction:** The mobile app feature (#11911) shows strong community momentum and may be prioritized in upcoming roadmaps. Apple Silicon GPU optimization (#41659) addresses a significant platform gap for macOS users.

---

## User Feedback Summary

**Pain Points:**
- **Mobile beta quality**: Users report Android scrolling stutters, OutOfMemoryError crashes, and notification inconsistencies. iOS beta has intermittent filter menu issues.
- **Session portability**: Moving `HERMES_HOME` invalidates all existing sessions with no migration path (#146480).
- **Security gaps**: Smart Approval approved a destructive command based on text rather than actual execution targets (#147373).
- **Multi-account complexity**: Google Workspace skill only supports single-account use (#147056 addresses this).

**Positive Signals:**
- New plugin integrations (SoChain MCP, neuralmind, UTXO skills) expand blockchain and AI capabilities.
- CLI JSON output configurability (#147370) addresses developer ergonomics.
- Delegation inheritance feature (#131211) enables subagent persona customization.

---

## Backlog Watch

| Issue | Age | Status | Concern |
|-------|-----|--------|---------|
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | ~6 months | Open | Most requested feature; may need roadmap clarity |
| [#3987](https://github.com/NousResearch/hermes-agent/issues/3987) | ~7 months | Open | Security plugin with IFC tests; long-standing enhancement |
| [#41659](https://github.com/NousResearch/hermes-agent/issues/41659) | ~5 months | Open | Apple Silicon STT optimization; platform gap |
| [#68482](https://github.com/NousResearch/hermes-agent/issues/68482) | ~3 months | Open | Cron metadata; operational management need |

These issues have been open for extended periods without resolution and may benefit from maintainer prioritization or community contribution guidance.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a structured English QwenPaw project digest for 2026-11-01 based on the provided GitHub data. Let me analyze the data and create the requested sections.

Let me organize the information:

**Data Overview:**
- Issues updated in last 24h: 9 (all open/active)
- PRs updated in last 24h: 14 (13 open, 1 merged/closed)
- New releases: 0

**Latest Issues (9 items):**
1. #8424 - Bug: server/discover returns HTTP 404 + JSON-RPC -32601 being hard-failed as modern protocol, legacy MCP servers can't fallback
2. #8315 - Bug: Feishu channel fails with 426 Upgrade Required when HTTP(S)_PROXY is injected without NO_PROXY for feishu.cn
3. #8184 - Bug: Doom-loop gate kills legitimate task-authorized polling; cron records false success after termination
4. #8511 - Feishu channel: intermittent "ProviderError: No active model configured" when new message arrives while agent still processing previous one
5. #8517 - Bug: Hub Docker runtime fails to start with Permission denied on working/config.json when Hub runs as non-root
6. #8521 - Bug: Dialogue often shows no response content + ctrl+C copy requires multiple presses
7. #8518 - Feature: Display per-reply latency in the Console chat UI
8. #8516 - Bug: /api/console/chat SSE missing X-Accel-Buffering: no — first event buffered behind nginx reverse proxy
9. #8515 - Bug: v2.3.0b2 crashes in restricted environment (fnOS app sandbox) - dependency_maintenance locks root directory based on pwd home derivation
 
**Pull Requests Overview:**
I notice the pull request landscape shows minimal progress, with only one PR closed and the majority remaining open. The active PRs span various critical areas like media handling, channel support, and infrastructure improvements. Notably, there's a first-time contributor addressing an nginx buffering issue, which suggests growing community engagement. The open PRs touch on important technical aspects including QQ channel streaming, provider configurations, and token usage tracking.

Most PRs are medium to large in scale, indicating substantial development efforts across different project components. The team appears focused on enhancing platform capabilities, addressing security concerns, and improving overall system performance and flexibility.

The pull request landscape reveals active development across multiple fronts: UI/UX improvements, channel integrations, security enhancements, and runtime optimizations. Contributors are addressing diverse technical challenges, from plugin installations to approval workflow language support.

Key highlights include a closed PR on Telegram's reply context and open PRs covering critical areas like browser configuration, security flagging, and test speedups. The project demonstrates a comprehensive approach to refining its infrastructure and user experience.

The PRs suggest ongoing efforts to improve system robustness, particularly in channel handling, runtime security, and plugin management. Significant attention is being paid to Docker runtime, desktop plugin reliability, and language-specific approval responses.</think>

# QwenPaw Project Digest — 2026-11-01

## 1. Today's Overview

QwenPaw shows high development activity today with **14 PRs** and **9 issues** updated in the last 24 hours. All issues remain open, indicating ongoing problem triage. No new releases were published. The project is actively addressing cross-platform integration challenges (Feishu, Telegram, QQ), security hardening, and runtime stability—particularly around Docker environments and proxy configurations. Community contributions are evident, with two first-time contributors submitting PRs.

## 2. Releases

No new releases in the last 24 hours.

## 3. Project Progress

| PR | Status | Description | Size |
|----|--------|-------------|------|
| [#8338](https://github.com/agentscope-ai/QwenPaw/pull/8338) | **Closed** | fix(channels): carry Telegram quoted reply context into the agent | M |
| [#8522](https://github.com/agentscope-ai/QwenPaw/pull/8522) | Open | fix(console): disable nginx buffering on /console/chat SSE | XS |
| [#8409](https://github.com/agentscope-ai/QwenPaw/pull/8409) | Open | feat(channels): add QQ C2C streaming message support | M |
| [#8509](https://github.com/agentscope-ai/QwenPaw/pull/8509) | Open | fix(channels): resolve desktop plugin installation and repair failures | M |
| [#8510](https://github.com/agentscope-ai/QwenPaw/pull/8510) | Open | fix(test): further speedup unittest from plugin | XL |
| [#8519](https://github.com/agentscope-ai/QwenPaw/pull/8519) | Open | fix(hub): preserve shared Docker runtime data ownership | L |
| [#8520](https://github.com/agentscope-ai/QwenPaw/pull/8520) | Open | fix(approvals): reply to /approval in the agent's language | L |
| [#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034) | Open | fix(providers): bound inline media per request, not just per file | XL |
| [#8061](https://github.com/agentscope-ai/QwenPaw/pull/8061) | Open | feat(providers): let custom gateways declare OpenAI prompt cache params | M |
| [#8060](https://github.com/agentscope-ai/QwenPaw/pull/8060) | Open | fix(token-usage): count Anthropic cache tokens in the live context meter | S |
| [#8031](https://github.com/agentscope-ai/QwenPaw/pull/8031) | Open | test: stop leaking unawaited coroutines from scheduling mocks | — |
| [#8029](https://github.com/agentscope-ai/QwenPaw/pull/8029) | Open | feat(browser): let config drop Playwright default launch arguments | — |
| [#8028](https://github.com/agentscope-ai/QwenPaw/pull/8028) | Open | fix(security): flag inline Office COM automation in shell commands | — |
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | Open | fix(runtime): prevent injected context from persisting | L |

**Key advancements:**
- Telegram quoted replies now properly carry context to the agent (merged)
- QQ channel gains streaming message support
- Desktop plugin installation/resolution improvements in progress
- Nginx buffering fix submitted by first-time contributor
- Anthropic cache token accounting now tracks live context properly

## 4. Community Hot Topics

| Issue/PR | Comments | Topic |
|----------|----------|-------|
| [#8424](https://github.com/agentscope-ai/QwenPaw/issues/8424) | 4 | MCP legacy server fallback failure |
| [#8315](https://github.com/agentscope-ai/QwenPaw/issues/8315) | 4 | Feishu proxy 426 errors |
| [#8184](https://github.com/agentscope-ai/QwenPaw/issues/8184) | 3 | Doom-loop gate false positives |
| [#8511](https://github.com/agentscope-ai/QwenPaw/issues/8511) | 2 | Feishu concurrent message race condition |

**Analysis:** The most discussed issues revolve around **channel reliability** (Feishu, MCP) and **protocol negotiation edge cases**. Users are encountering environment-specific failures when proxy configurations or legacy systems are involved. This suggests growing real-world deployment exposing edge cases in multi-channel architectures.

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#8424](https://github.com/agentscope-ai/QwenPaw/issues/8424) MCP legacy fallback fails | Open | — |
| **High** | [#8315](https://github.com/agentscope-ai/QwenPaw/issues/8315) Feishu fails with proxy | Open | — |
| **High** | [#8515](https://github.com/agentscope-ai/QwenPaw/issues/8515) v2.3.0b2 crashes in fnOS sandbox | Open | — |
| **High** | [#8517](https://github.com/agentscope-ai/QwenPaw/issues/8517) Hub Docker fails as non-root | Open | [#8519](https://github.com/agentscope-ai/QwenPaw/pull/8519) |
| **Medium** | [#8184](https://github.com/agentscope-ai/QwenPaw/issues/8184) Doom-loop kills legitimate polling | Open | — |
| **Medium** | [#8511](https://github.com/agentscope-ai/QwenPaw/issues/8511) Feishu race condition | Open | — |
| **Medium** | [#8516](https://github.com/agentscope-ai/QwenPaw/issues/8516) SSE nginx buffering | Open | [#8522](https://github.com/agentscope-ai/QwenPaw/pull/8522) |
| **Low** | [#8521](https://github.com/agentscope-ai/QwenPaw/issues/8521) UI copy issues, no response content | Open | — |

**Assessment:** Multiple high-severity bugs affect production deployments: Docker non-root execution, MCP legacy protocol handling, and proxy environments. One fix PR (#8519) addresses the Docker ownership issue.

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likely Priority |
|---------|-------|-----------------|
| Display per-reply latency in Console UI | [#8518](https://github.com/agentscope-ai/QwenPaw/issues/8518) | Medium |
| UI mode toggle (classic vs. new) | [#8521](https://github.com/agentscope-ai/QwenPaw/issues/8521) | Low-Medium |
| QQ C2C streaming support | [#8409](https://github.com/agentscope-ai/QwenPaw/pull/8409) | In Progress |

**Prediction:** Per-reply latency display is a practical observability feature likely to land soon. The UI mode toggle request (#8521) reflects user dissatisfaction with recent UI changes—may be considered if feedback grows.

## 7. User Feedback Summary

**Pain points reported:**
1. **Random missing responses**: Users report qwenpaw displays thinking content but no actual reply (v2.2.2.post1)
2. **UI regression**: New UI feels slower, less efficient; users request classic mode toggle
3. **Copy功能障碍**: Ctrl+C requires multiple presses to succeed
4. **Feishu reliability**: Concurrent message handling causes intermittent errors
5. **Restricted environment crashes**: v2.3.0b2 fails in sandboxed NAS environments

**Satisfaction signals:** QQ streaming support (PR #8409) and Telegram context fixes (PR #8338 merged) address long-standing channel feature gaps. The nginx buffering fix demonstrates responsive community contribution.

## 8. Backlog Watch

| Item | Age | Status | Concern |
|------|-----|--------|---------|
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | ~70 days | Open | Runtime context injection fix—addresses #6360/#6358; needs review |
| [#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034) | ~30 days | Open | Inline media bounding—security/performance fix for gateway byte limits |
| [#8028](https://github.com/agentscope-ai/QwenPaw/pull/8028) | ~30 days | Open | Office COM automation security flagging—Windows security hardening |

**Maintainer attention needed:** PR #7211 has been open since August without merge; it's a substantive runtime fix. PR #8034 addresses a critical gateway byte-limit vulnerability—high priority.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to generate a project digest for ZeroClaw based on the GitHub data provided. Let me analyze the data and create a structured report.

Key observations from the data:

1. **Activity**: 24 issues updated (20 open, 4 closed), 50 PRs updated (45 open, 5 merged/closed)

2. **Releases**: None - "Latest Releases: None"

3. **Latest Issues** (24 total, showing key ones):
   - RFC: Knowledge corpus — document retrieval (RAG) for the agent (#11235) - OPEN
   - [Feature] Add /load-session to resume a Code session (#12069) - CLOSED
   - [Feature] Build ZeroClaw without the gateway or dashboard (CLI-only source build) (#11971) - CLOSED
   - [Bug] OIDC callback token page has no browser binding, allowing login CSRF (#12050) - OPEN, security
   - [Bug] Memory_store tool call failure (#12080) - CLOSED
   - [Bug] Security job fails on every build: RUSTSEC-2026-0420 to RUSTSEC-2026-0424 (#12128) - CLOSED
   - Multiple security issues from IftekharUddin:
     - send_message_to_peer scope issues (#12169, #12167)
     - 10 unpatched vulnerabilities (#12158)
     - Various security bugs

4. **Pull Requests** (50 total, showing top 20):
   - #11965: feat(gateway): opt-in OIDC dashboard sign-in - OPEN
   - #11822: fix(security): split POSIX commands at substitution and subshell boundaries - CLOSED
   - #12071: feat(zerocode): add /load-session - CLOSED
   - #11266: fix(memory): keep owned-session subagent and pipeline memory private - OPEN
   - #11313: fix(cli): publish authorization edits from config set and config patch - OPEN
   - #11169: feat(rpc): SOP parity for cancel, dispatch-event, decision-models - OPEN
   - #12111: feat(install): install the CLI-only build - CLOSED
   - #11234: fix(rpc): judge queued session ownership by current authority - OPEN
   - #11230: fix(runtime): withhold session-data tools from non-admin principals - OPEN
   - #12170: fix(tools): inherit headless SOP step scope on peer-send turns - OPEN
   - #12168: fix(tools): enforce Act policy on send_message_to_peer - OPEN
   - #12150: fix(runtime): emit single SBPL backslash for home-dotfile regex - OPEN
   - #12129: fix(deps): bump Wasmtime to 48.0.8 - CLOSED
   - #12166: fix(install): verify Windows prebuilt release checksums - OPEN

The project is actively addressing multiple fronts: implementing new features like CLI-only builds and session loading, resolving security vulnerabilities in memory management and command parsing, and updating dependencies to patch known issues. Several PRs remain open, focusing on session ownership validation, access control improvements, and install script enhancements.

Several critical security concerns need attention, including OIDC login CSRF vulnerabilities, MCP SSE client URL handling issues, and permission misconfigurations in file upload operations. The daemon also has gaps in protecting its own configuration and data directories. Feature development continues with an RFC proposing RAG capabilities and work progressing toward v0.9.0.</think>

# ZeroClaw Project Digest — 2026-11-01

## Today's Overview

ZeroClaw shows high development activity today with 24 issue updates and 50 PR updates. The project is actively addressing security vulnerabilities—several critical issues were reported around daemon configuration protection, MCP transport security, and sandboxing gaps. The v0.9.0 release cycle appears to be in progress, with multiple PRs tagged for it. Community contributions continue strong, particularly from security researcher IftekharUddin (multiple security issues) and maintainer JordanTheJet.

---

## Releases

No new releases today. The project currently has no releases recorded in the data.

---

## Project Progress

### Merged/Closed PRs (5 total)

| PR | Title | Status |
|----|-------|--------|
| [#11822](https://github.com/zeroclaw-labs/zeroclaw/pull/11822) | fix(security): split POSIX commands at substitution and subshell boundaries | CLOSED |
| [#12071](https://github.com/zeroclaw-labs/zeroclaw/pull/12071) | feat(zerocode): add /load-session to resume a saved session by name or id | CLOSED |
| [#12111](https://github.com/zeroclaw-labs/zeroclaw/pull/12111) | feat(install): install the CLI-only build and switch to standard only on request | CLOSED |
| [#12102](https://github.com/zeroclaw-labs/zeroclaw/pull/12102) | chore(deps): bump rust-all group with 34 updates | CLOSED |
| [#12129](https://github.com/zeroclaw-labs/zeroclaw/pull/12129) | fix(deps): bump Wasmtime to 48.0.8 for RUSTSEC-2026-0420 to 0424 | CLOSED |

### Notable Advancements

- **CLI-only build support** — PR #12111 completes the feature for CLI-only installation without gateway/dashboard, addressing issue #11971
- **Session loading** — PR #12071 adds `/load-session` slash command to ZeroCode
- **Shell security fix** — PR #11822 properly splits POSIX commands at substitution boundaries to prevent command injection
- **Dependency updates** — Wasmtime bumped to 48.0.8 resolving five RustSec advisories (RUSTSEC-2026-0420 to 0424)

---

## Community Hot Topics

### Most Active Discussions

| Issue/PR | Title | Comments | Status |
|----------|-------|----------|--------|
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | RFC: Knowledge corpus — document retrieval (RAG) for the agent | 8 | OPEN |
| [#11965](https://github.com/zeroclaw-labs/zeroclaw/pull/11965) | feat(gateway): opt-in OIDC dashboard sign-in | Active | OPEN |
| [#11266](https://github.com/zeroclaw-labs/zeroclaw/pull/11266) | fix(memory): keep owned-session subagent and pipeline memory private | Active | OPEN |
| [#12069](https://github.com/zeroclaw-labs/zeroclaw/issues/12069) | [Feature]: Add /load-session to resume a Code session | 2 | CLOSED |
| [#11971](https://github.com/zeroclaw-labs/zeroclaw/issues/11971) | [Feature]: Build ZeroClaw without the gateway or dashboard | 1 | CLOSED |

### Analysis

- **RAG integration** is generating discussion—users want the agent to query operator-managed documents, language/tool docs, and security standards
- **OIDC dashboard sign-in** (PR #11965) is a significant feature for multi-user scenarios, moving beyond the current pairing-code-only model
- **Memory privacy** for subagents (PR #11266) addresses a security architecture concern

---

## Bugs & Stability

### Security Vulnerabilities (High Severity)

| Issue | Title | Severity | Status |
|-------|-------|----------|--------|
| [#12158](https://github.com/zeroclaw-labs/zeroclaw/issues/12158) | Security review findings: 10 unpatched vulnerabilities | S1 | OPEN |
| [#12143](https://github.com/zeroclaw-labs/zeroclaw/issues/12143) | MCP stdio servers inherit daemon environment (credential disclosure) | S1 | OPEN |
| [#12142](https://github.com/zeroclaw-labs/zeroclaw/issues/12142) | Daemon's own config/data directories not forbidden to agent | S1 | OPEN |
| [#12138](https://github.com/zeroclaw-labs/zeroclaw/issues/12138) | Native runtime runs login shell sourcing ~/.zshenv (execution hook) | S1 | OPEN |
| [#12141](https://github.com/zeroclaw-labs/zeroclaw/issues/12141) | Admin routes trust any loopback peer (approval bypass) | S1 | OPEN |
| [#12137](https://github.com/zeroclaw-labs/zeroclaw/issues/12137) | Seatbelt profile's home dotfiles rule mis-escaped | S1 | OPEN |
| [#12050](https://github.com/zeroclaw-labs/zeroclaw/issues/12050) | OIDC callback token page has no browser binding (login CSRF) | S1 | OPEN |

### Functional Bugs (Medium/Low Severity)

| Issue | Title | Severity | Status |
|-------|-------|----------|--------|
| [#12169](https://github.com/zeroclaw-labs/zeroclaw/issues/12169) | send_message_to_peer starts recipient outside tool scope | S1 | OPEN |
| [#12167](https://github.com/zeroclaw-labs/zeroclaw/issues/12167) | send_message_to_peer ignores sender autonomy level | S1 | OPEN |
| [#12146](https://github.com/zeroclaw-labs/zeroclaw/issues/12146) | MCP SSE client accepts absolute URL from server | S2 | OPEN |
| [#12145](https://github.com/zeroclaw-labs/zeroclaw/issues/12145) | Plugin store limiter doesn't cap memories/tables | S2 | OPEN |
| [#12144](file_upload, file_edit authorize through write tier | S2 | OPEN |
| [#12139](https://github.com/zeroclaw-labs/zeroclaw/issues/12139) | Default forbidden_paths miss macOS Keychains, credential dotfiles | S2 | OPEN |
| [#12156](https://github.com/zeroclaw-labs/zeroclaw/issues/12156) | zeroclaw update always downloads glibc build | S2 | OPEN |
| [#12155](https://github.com/zeroclaw-labs/zeroclaw/issues/12155) | Cancelled quickstart says "No config written" but creates file | S3 | OPEN |
| [#12154](https://github.com/zeroclaw-labs/zeroclaw/issues/12154) | install.sh shows build commit instead of version | S3 | OPEN |
| [#12153](https://github.com/zeroclaw-labs/zeroclaw/issues/12153) | install.sh picks musl build on glibc hosts with musl package | S3 | OPEN |

### Fix PRs In Progress

- [#12170](https://github.com/zeroclaw-labs/zeroclaw/pull/12170) — fix(tools): inherit headless SOP step scope on peer-send turns
- [#12168](https://github.com/zeroclaw-labs/zeroclaw/pull/12168) — fix(tools): enforce Act policy on send_message_to_peer
- [#12150](https://github.com/zeroclaw-labs/zeroclaw/pull/12150) — fix(runtime): emit single SBPL backslash for home-dotfile regex
- [#12166](https://github.com/zeroclaw-labs/zeroclaw/pull/12166) — fix(install): verify Windows prebuilt release checksums

---

## Feature Requests & Roadmap Signals

### Active RFC/Enhancement Issues

| Issue | Title | Tags |
|-------|-------|------|
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | RFC: Knowledge corpus — document retrieval (RAG) for the agent | enhancement, agent, memory, runtime, security, tool |
| [#11971](https://github.com/zeroclaw-labs/zeroclaw/issues/11971) | Build ZeroClaw without gateway/dashboard (CLI-only) | enhancement, cli, release:v0.9.0 |

### Likely Near-Term Features (based on PRs tagged v0.9.0)

- **OIDC dashboard authentication** — opt-in OIDC providers for dashboard sign-in (#11965)
- **RPC SOP parity** — cancel, dispatch-event, decision-models, graph-legend (#11169)
- **Authorization publishing** — config set/patch edits propagate to running daemon (#11313)
- **Session ownership enforcement** — judge queued session ownership by current authority (#11234)
- **Admin authority for SOP** — require administrator authority for SOP execution (#11220)

---

## User Feedback Summary

### Pain Points Identified

1. **Installation issues** — Multiple bugs around install.sh: wrong architecture selection, incorrect version display, confusing "no config written" message when file exists
2. **Security architecture gaps** — Researcher IftekharUddin filed 10+ security issues covering credential exposure, sandbox bypasses, and permission model weaknesses
3. **Memory system reliability** — Users experiencing `Memory_store` tool call failures with specific model configurations (jinja + Qwen3.6 35B A3B)
4. **Multi-user limitations** — Current dashboard requires shared pairing code; OIDC feature in development (#11965)

### Satisfaction Signals

- Session management improvements well-received (/load-session feature merged)
- CLI-only build option added after community request
- Active security research engagement suggests healthy community scrutiny

---

## Backlog Watch

### Long-Running Issues Requiring Maintainer Attention

| Issue | Title | Age | Status |
|-------|-------|-----|--------|
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | RFC: Knowledge corpus — document retrieval (RAG) | ~2 months | OPEN, needs-author-action |
| [#11266](https://github.com/zeroclaw-labs/zeroclaw/pull/11266) | fix(memory): keep owned-session subagent memory private | ~2 months | OPEN |
| [#11313](https://github.com/zeroclaw-labs/zeroclaw/pull/11313) | fix(cli): publish authorization edits into running daemon | ~1 month | OPEN, needs-maintainer-review |
| [#11169](https://github.com/zeroclaw-labs/zeroclaw/pull/11169) | feat(rpc): SOP parity | ~1 month | OPEN, needs-author-action |
| [#11234](https://github.com/zeroclaw-labs/zeroclaw/pull/11234) | fix(rpc): judge queued session ownership | ~2 months | OPEN |
| [#11230](https://github.com/zeroclaw-labs/zeroclaw/pull/11230) | fix(runtime): withhold session-data tools from non-admin | ~2 months | OPEN |
| [#11220](https://github.com/zeroclaw-labs/zeroclaw/pull/11220) | fix(security): require administrator authority for SOP | ~2 months | OPEN |

### Priority Concerns

- **Security backlog**: 10+ open security vulnerabilities need triage and patching
- **Release-blocking PRs**: Several v0.9.0-tagged PRs have interdependencies (#11230 depends on #11225 and #11234)
- **Author action needed**: #11235 (RAG RFC) and #11169 (RPC SOP) marked as needing author action

---

*Generated from GitHub data for zeroclaw-labs/zeroclaw on 2026-11-01*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*