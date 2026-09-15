# OpenClaw Ecosystem Digest 2026-09-15

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-15 00:51 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

**OpenClaw Project Digest — 2026-09-15**

---

### **1. Today's Overview**  
OpenClaw remains highly active, with 500 issues and 500 PRs updated in the last 24 hours, indicating intense development and community engagement. Despite no new releases, the project is in a high-velocity maintenance and stabilization phase, with over 300 open issues and PRs flagged as P0–P1 severity. The volume of critical bug reports—particularly around session state corruption, process leaks, and update failures—suggests systemic instability in the 2026.9.x release line. Maintainers are responding rapidly, with 224 PRs merged/closed today, many authored by core contributors like steipete and Gabrielnkl, signaling a focused effort to stabilize core infrastructure.

---

### **2. Releases**  
No new releases were published in the last 24 hours. The absence of a 2026.9.5 or similar patch release—despite 17+ P0/P1 bugs and multiple update failures (e.g., #145510, #146860, #145072)—is a critical risk. Users on 2026.9.3/9.4 are encountering fatal update handoffs, runtime verification failures, and Gateway crashes, yet no official rollback or hotfix has been issued. The lack of release activity implies a freeze for stabilization, but without communication, user trust is eroding.

---

### **3. Project Progress**  
Today, 224 PRs were merged or closed, with a clear focus on infrastructure hardening and performance optimization. Key improvements include:  
- **Stability fixes**: `fix(gateway): preserve private continuation timeout receipts` (#148619), `fix(sqlite): keep committed writes succeeding when a post-commit observer fails` (#147236), and `fix(tasks): preserve cron completion recorded during cancellation` (#148478) address critical race conditions and data integrity issues.  
- **Performance**: `improve(logbook): reduce metadata reads during card revisions` (#148551), `improve(outbound): reduce reads when acknowledging claimed deliveries` (#148552), and `perf(fleet): run registry operations in SQLite workers` (#148290) significantly reduce I/O overhead.  
- **Cross-platform**: `fix(windows): keep process-start probe budget monotonic` (#142726) and `fix(plugins): load a plugin-owned CLI backend whose provider reuses a core model api` (#148656) resolve Windows-specific and plugin compatibility regressions.  
- **Maintainer efficiency**: Multiple PRs by steipete (#148463, #148539, #148398, #148213) streamline metadata handling, plugin loading, and MCP coordination—indicating a systematic cleanup of technical debt.

---

### **4. Community Hot Topics**  
Top 5 most active issues and PRs (by comments/reactions):  

1. **#25592** [OPEN] Text between tool calls leaks to messaging channels  
   [🔗](https://github.com/openclaw/openclaw/issues/25592)  
   *40 comments, 🦞 diamond lobster* — A UX and security nightmare: internal agent narration (e.g., “Processing…” or error logs) is being broadcast to Slack/iMessage. Users demand strict separation between internal logic and user-facing output.  

2. **#97616** [OPEN] OpenClaw leaks unreaped hook/tool child processes  
   [🔗](https://github.com/openclaw/openclaw/issues/97616)  
   *30 comments, 🦪 silver shellfish* — Zombie processes accumulate over time, degrading performance and requiring restarts. This is a systemic resource management failure in the hooks subsystem.  

3. **#144911** [OPEN] MCP server init timeout crashes the Gateway  
   [🔗](https://github.com/openclaw/openclaw/issues/144911)  
   *16 comments, 🦞 diamond lobster* — A single misbehaving MCP server can kill the entire Gateway due to unhandled promise rejection. High severity due to systemic fragility.  

4. **#146860** [OPEN] Windows update handoff stalls with InteractiveToken Scheduled Task  
   [🔗](https://github.com/openclaw/openclaw/issues/146860)  
   *10 comments, 🦪 silver shellfish, P0* — Blocks enterprise Windows deployments. The update mechanism cannot obtain process identity, causing indefinite stalls.  

5. **#148639** [OPEN] feat(codex): identify slow session catalog phases  
   [🔗](https://github.com/openclaw/openclaw/pull/148639)  
   *0 comments, but P2, XL size* — A maintainer-driven diagnostic enhancement to expose bottlenecks in Codex session loading. Reflects deep operational pain in large-scale deployments.  

**Analysis**: The community is overwhelmed by **silent failures** (data loss, message drops, process leaks) and **lack of transparency**. Users aren’t just requesting features—they’re begging for observability, resilience, and clear failure boundaries.

---

### **5. Bugs & Stability**  
**Top 5 Critical Bugs Reported Today (P0–P1)**:  

1. **#146860** — Windows update handoff stalls indefinitely → **P0, UX-release-blocker**  
2. **#145510** — Runtime verification failed on 2026.9.3 → **P0, update blocker**  
3. **#144911** — MCP timeout crashes Gateway → **P1, crash-loop**  
4. **#123326** — Multi-agent Codex migration crash-loops Gateway startup → **P0, stability-critical**  
5. **#97616** — Zombie process accumulation → **P1, runtime degradation**  

**Fix PRs exist for 4/5**:  
- #142726 (Windows process probe)  
- #148656 (CLI plugin loading)  
- #147236 (SQLite commit integrity)  
- #148619 (timeout receipts)  

**Critical gap**: No PRs yet for #146860 or #145510. The absence of fixes for update-related P0 bugs is alarming—users are stuck on broken versions with no recovery path.

---

### **6. Feature Requests & Roadmap Signals**  
High-potential features with strong community traction:  

- **#48788**: Centralized filename encoding utility for multi-encoding Content-Disposition → *Critical for global enterprise adoption (Shift-JIS, GB18030, EUC-KR)*.  
- **#52640**: Persistent task-status surface for long-running channel turns → *Needed for Discord, Telegram, and Slack users running multi-minute workflows*.  
- **#74100**: Skill Graph — on-demand dependency loading → *Directly reduces token cost; high ROI for LLM cost-sensitive users*.  
- **#112811**: Support multiple bot accounts in Microsoft Teams → *Enterprise multi-agent deployment blocker*.  
- **#148639**: Identify slow Codex session phases → *Not a feature, but a diagnostic tool—signals OpenClaw is maturing into an enterprise-grade platform*.  

**Prediction**: The next minor release (2026.9.5) will likely include:  
- Filename encoding utility (#48788)  
- Session status surface (#52640)  
- MCP timeout circuit breaker (implied by #144911)  
- Codex session diagnostics (#148639)

---

### **7. User Feedback Summary**  
**Pain Points**:  
- “Messages silently lost” on Telegram (#125764), WhatsApp (#77443), and Feishu (#74767) → **Trust erosion**.  
- “Gateway crashes on Windows” (#71699, #146860) → **Enterprise adoption halted**.  
- “Update fails and leaves me stuck” (#145510, #145072) → **No recovery path = user abandonment**.  
- “My session context vanished between turns” (#76665, #102175) → **Core AI state management is broken**.  

**Use Cases**:  
- **Enterprise IT**: Windows Scheduled Task deployments (#146860), Teams multi-bot (#112811), SMB mounts (#75767).  
- **Cost-conscious users**: Token inflation (#125333), on-demand skill loading (#74100).  
- **Power users**: Long-running workflows needing status visibility (#52640), CLI tooling (#148250).  

**Satisfaction**:  
- Low. Comments like “silently drops high-value messages” and “no user-visible error” reflect deep frustration.  
- High satisfaction is only visible in PRs that *prevent* failure (e.g., #147236, #148619)—users praise reliability, not features.

---

### **8. Backlog Watch**  
These critical items have been open for weeks/months with no maintainer response:  

- **#146860** — Windows update handoff stall → *P0, 2 days old, no assignee*  
- **#145510** — Runtime verification failed on 2026.9.3 → *P0, 3 days old, blocked on diagnostics*  
- **#115670** — `claws add` should adopt existing workspace → *XL, 58 days old, blocks #125345*  
- **#134995** — Disclose caller-scoped automation lists → *XL, 14 days old, no review*  
- **#142954** — Share Gateway client with Wear OS → *XL, 6 days old, critical for mobile ecosystem*  

**Urgency**: These are not feature requests—they are **deployment blockers**. The lack of maintainer attention on #146860 and #145510 risks mass user attrition. Recommend immediate triage sprint.

---

**Final Assessment**:  
OpenClaw is a project in crisis mode. Its technical ambition is unmatched, but operational maturity lags dangerously. The community is vocal, engaged, and deeply frustrated. The maintainer team is responding with high-quality PRs—but **not fast enough to fix the most critical user-facing failures**. Without a 2026.9.5 release within 72 hours addressing the top 3 P0 bugs (#146860, #145510, #123326), adoption will stall. Recommend:  
1. Emergency patch release with fixes for #146860, #145510, #144911.  
2. Public status page for update health.  
3. Formalize triage rotations for P0 issues.  

**Project Health**: ⚠️ **Critical** — Technically brilliant, operationally fragile.

---

## Cross-Ecosystem Comparison

**Cross-Project Comparison Report: Personal AI Agent Ecosystem — 2026-09-15**

---

### **1. Ecosystem Overview**  
The open-source personal AI agent ecosystem in 2026 is characterized by intense innovation and growing operational maturity, with five major projects driving divergent paths: high-velocity stabilization (OpenClaw, QwenPaw), targeted architectural refinement (Hermes, ZeroClaw), and deep diagnostic focus (IronClaw). While all projects prioritize agent reliability, cross-platform compatibility, and state persistence, they vary significantly in community scale, release cadence, and architectural philosophy — reflecting a maturing landscape moving beyond prototype experimentation toward enterprise-grade deployment. The absence of formal releases across four of five projects signals a collective shift toward continuous stabilization over feature-driven versioning, yet user trust remains fragile due to systemic instability in core state and update mechanisms.

---

### **2. Activity Comparison**

| Project       | Issues (24h) | PRs (24h) | Release Status               | Health Score |
|---------------|--------------|-----------|------------------------------|--------------|
| **OpenClaw**  | 500          | 500       | No release (2026.9.4 latest) | ⚠️ Critical  |
| **Hermes Agent** | 50         | 50        | v0.21.3 (2026-09-14)         | ⚠️ High Risk |
| **IronClaw**  | 1            | 1         | No release (pre-v1.0)        | ✅ Stable    |
| **QwenPaw**   | 45           | 50        | v2.2.1 (latest)              | ⚠️ Critical  |
| **ZeroClaw**  | 22           | 50        | No release (pre-v1.0)        | ✅ Healthy   |

> *Health Score Definitions*:  
> - **Critical**: High activity + unaddressed P0 bugs + no patch releases → adoption at risk  
> - **High Risk**: High activity + unresolved systemic bugs (e.g., WAL corruption, crashes)  
> - **Healthy**: Low noise, focused PRs, no critical regressions  
> - **Stable**: Minimal activity, but high-impact diagnostics and precision work  

---

### **3. OpenClaw's Position**  
OpenClaw leads in **community scale and development velocity**, with 10x the issue/PR volume of peers — indicating the largest active contributor base and most complex codebase. Its technical approach is **infrastructure-first**: deep optimization of SQLite, gateway process management, and MCP coordination — prioritizing system integrity over UI polish. Unlike Hermes (focused on voice/ABC interfaces) or QwenPaw (UI/UX-driven), OpenClaw targets **enterprise-scale agent orchestration**, where reliability under load is paramount. However, its **community is more fragmented and frustrated** than peers — 40+ comments on silent message leaks and update failures reflect deep trust erosion, despite superior technical depth. No other project has such a high ratio of P0 bugs to fix PRs (4/5 fixed, but critical Windows/upgrade bugs unaddressed), making OpenClaw both the most ambitious and the most vulnerable.

---

### **4. Shared Technical Focus Areas**  
Four critical requirements are emerging **across 3+ projects**:

| Requirement | Projects Involved | Specific Needs |
|-----------|-------------------|----------------|
| **State & Session Persistence** | OpenClaw, QwenPaw, Hermes, ZeroClaw | Prevent loss of conversation history, model configs, and context across restarts (e.g., #7708, #10858, #100896) |
| **Memory & Resource Leak Control** | OpenClaw, QwenPaw, Hermes | Unbounded memory growth (#7722), zombie processes (#97616), socket leaks (#109339) — all demand automated cleanup |
| **Silent Failure Detection & Visibility** | All five | Users demand explicit error messaging, not silent drops (e.g., #145510, #7715, #10842, #10625) |
| **Cross-Platform Reliability (Windows)** | OpenClaw, Hermes, ZeroClaw | Windows-specific crashes (e.g., #146860, #109982, #10381) are universal adoption blockers |

> *Note*: OpenClaw and QwenPaw show the strongest alignment on state persistence; Hermes and ZeroClaw lead on security and protocol consistency.

---

### **5. Differentiation Analysis**

| Dimension | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|---------|----------|--------------|----------|---------|----------|
| **Primary Focus** | System integrity, gateway stability | Voice, token budgeting, ABC interfaces | Failure taxonomy, diagnostic fidelity | UI ergonomics, memory safety | Security, protocol consistency, self-hosting |
| **Target Users** | Enterprise IT, multi-agent deployments | Power users, automation engineers | Benchmark researchers, internal teams | Desktop power users, multi-channel agents | Self-hosters, home labs, security-conscious devs |
| **Architecture** | Monolithic gateway + SQLite + MCP | Modular plugins + llama.cpp + WASM | MCP-centric, benchmark-driven | Desktop-first, Python-based agent loop | Runtime-first, proxy-based security model |
| **Release Cadence** | None (stabilization freeze) | Patch-only (v0.21.3) | None (pre-release) | Minor patches queued (v2.2.2 imminent) | None (v0.8.6 planned) |
| **Community Tone** | Frustrated, urgent | Enthusiastic but wary | Technical, niche | UX-driven, responsive | Governance-aware, pragmatic |

> **Key Insight**: OpenClaw and QwenPaw are **user-facing agent platforms**; Hermes and ZeroClaw are **runtime/protocol platforms**; IronClaw is a **diagnostic framework**.

---

### **6. Community Momentum & Maturity**

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration (High Velocity)** | OpenClaw, QwenPaw, ZeroClaw | 45–500 issues/PRs/day; fast PR merges; UI/tooling fixes prioritized; no releases due to instability |
| **Stabilization Phase** | Hermes Agent | v0.21.3 released; community pushing for v0.22.0 (voice, budgeting); high bug backlog but focused fixes |
| **Precision Engineering** | IronClaw | Minimal activity; deep, technical work (failure taxonomy, MCP diagnostics); low noise, high signal; pre-1.0 internal focus |

> **Trend**: Projects with highest activity (OpenClaw, QwenPaw) are **least mature operationally** — velocity outpaces stability. Hermes and ZeroClaw show more disciplined release discipline. IronClaw is the only project treating **reliability as a measurement problem**, not a code fix.

---

### **7. Trend Signals**

From community feedback, five key industry trends emerge:

1. **“Reliability > Features”** — Top complaints across all projects: silent failures, state loss, update crashes. Users now prioritize **trust** over intelligence.  
2. **Windows is the New Linux** — 4/5 projects have critical Windows-specific regressions. Cross-platform support is no longer optional.  
3. **Self-Hosting Demands Standards** — XMPP (#9814), OIDC (#10255), and proxy routing (#10748) show demand for **interoperable, non-proprietary infrastructure**.  
4. **Diagnosis as a Product** — IronClaw’s failure taxonomy (#8100) and OpenClaw’s session diagnostics (#148639) signal the rise of **agent observability** as a core capability — not an afterthought.  
5. **Governance Fatigue** — ZeroClaw’s RFC voting request (#10549) reflects a broader trend: **community decision-making is slowing adoption**. Lightweight, async governance is becoming essential.

> **Value for AI Agent Developers**:  
> - Build for **state persistence** and **error visibility** first.  
> - Prioritize **Windows compatibility** and **memory hygiene** — not just LLM prompts.  
> - Design for **observability**: expose session lifecycles, token usage, and failure causes.  
> - Adopt **modular, standards-based protocols** (MCP, OIDC, XMPP) — avoid vendor lock-in.  
> - Simplify governance: automate PR reviews, use bots, reduce RFC overhead.

---

**Final Note**: The ecosystem is fragmenting into **platforms** (OpenClaw, ZeroClaw), **runtimes** (Hermes), and **diagnostic layers** (IronClaw). For developers, the path to adoption is no longer “build a smarter agent” — it’s **“build an agent that doesn’t break.”**

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest — 2026-09-15**

---

### **1. Today's Overview**  
Hermes Agent is experiencing intense development activity, with 50 issues and 50 pull requests updated in the last 24 hours — a clear sign of a high-velocity, community-driven codebase under active maintenance. The release of **v0.21.3** (yesterday) consolidates 338 merged PRs, signaling a major stabilization push for production deployments. Despite the release, the issue queue remains overloaded (33 open, 17 closed), with persistent high-severity bugs around SQLite WAL corruption, Windows crashes, and streaming stalls. The project’s health is robust in terms of contributor engagement but strained by systemic architectural debt in state management and cross-platform compatibility.

---

### **2. Releases**  
**v0.21.3 (v2026.9.14)** — Patch release rolled out on September 14, 2026.  
- **Purpose**: Consolidates ~338 merged PRs since v0.21.2 into a stable, tagged release for Docker, Hermes Cloud, and hosted deployments.  
- **Key Fix**: Resolves remote-gateway sign-in failures introduced in prior builds.  
- **No breaking changes** documented; migration is seamless for users on v0.21.2.  
- **Note**: This release is primarily a bundling artifact — not a feature release — intended to stabilize downstream integrations.  
🔗 [Release Tag](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.14)

---

### **3. Project Progress**  
Today, **15 PRs were merged or closed**, with a strong focus on critical bug fixes and infrastructure hardening:  
- **Critical Fixes**:  
  - `#111337`: Restored `llama-server` startup on modern `llama.cpp` builds by replacing deprecated `-dio` flag with `--load-mode dio`.  
  - `#111336`: Fixed Slack `chat.update` failures by respecting the 4,000-character edit limit (previously exceeded, causing silent failures).  
  - `#109339`: Closed HTTP socket leak in Google Chat OAuth token revocation.  
  - `#111331`: Fixed tool dispatch mismatch (`shell` → `terminal`) to prevent model retry loops.  
  - `#111330`: Enabled drag-and-drop URL attachment in Hermes Desktop (previously failed silently).  
- **Infrastructure**:  
  - `#111329`: Auto-formatted JS codebase via CI bot, reducing lint noise.  
  - `#111324`: Introduced `hermes cleanse` — a new CLI tool to auto-repair project linters (eslint, ruff, etc.) — inspired by omp’s design.  
- **Testing**: `#52024` added comprehensive async testing for `env_probe.py`, improving reliability of environment detection.

---

### **4. Community Hot Topics**  
The most active discussions reflect deep architectural tensions and platform fragmentation:  

- **#77111** — *“RFC: RealtimeVoiceProvider ABC”* (25 comments, 2 👍)  
  > Four competing PRs (`#95147`, `#101034`, etc.) attempt to implement real-time voice without consensus. The community demands a **unified provider interface** (ABC) before merging any. This is the **top architectural decision point** — delaying voice feature rollouts.  
  🔗 [Issue #77111](https://github.com/NousResearch/hermes-agent/issues/77111)  

- **#48375** — *“Add spellcheck to Hermes Desktop prompt input”* (6 comments, 7 👍)  
  > High user demand (7 upvotes) for basic UX polish in the desktop app. Indicates growing user base using Hermes for long-form composition.  
  🔗 [Issue #48375](https://github.com/NousResearch/hermes-agent/issues/48375)  

- **#100896 & #103339** — *State.db corruption in WAL mode* (13 comments each)  
  > Recurring multi-process SQLite corruption on gateway/dashboard setups. Users report 4+ incidents in 5 weeks. Underlying need: **single-writer enforcement** and WAL-safe defaults.  
  🔗 [Issue #100896](https://github.com/NousResearch/hermes-agent/issues/100896) | [Issue #103339](https://github.com/NousResearch/hermes-agent/issues/103339)  

- **#109982** — *Windows wake word crashes gateway* (2 comments)  
  > `sentencepiece` crashes with `0xC0000005` on Windows. A silent process killer — blocks accessibility for Windows users.  
  🔗 [Issue #109982](https://github.com/NousResearch/hermes-agent/issues/109982)  

---

### **5. Bugs & Stability**  
**Top 5 Critical Bugs Reported Today (Ranked by Severity & Impact):**  

1. **P1 — `state.db` corruption in WAL mode** (#100896, #103339)  
   > 4 incidents in 5 weeks on single-host gateways. Multi-writer (gateway + dashboard) causes irreversible SQLite corruption. **No fix PR yet** — only proposals (e.g., lazy flock gate).  
   🔗 [Issue #100896](https://github.com/NousResearch/hermes-agent/issues/100896)  

2. **P1 — Streaming hangs on agent-sized context** (#110769)  
   > Reopened regression: streaming stalls after update to main (5eb99eb2). Previously closed as “fixed,” but reproducible. Impacts all users on long-context models.  
   🔗 [Issue #110769](https://github.com/NousResearch/hermes-agent/issues/110769)  

3. **P1 — Cron daemon dies silently on startup** (#111010)  
   > Scheduled jobs never fire. Gateway runs, but no cron jobs execute. Critical for automation users.  
   🔗 [Issue #111010](https://github.com/NousResearch/hermes-agent/issues/111010)  

4. **P1 — Windows wake word crashes entire gateway** (#109982)  
   > `sentencepiece` access violation on import → infinite respawn loop. **No PR yet**. Blocks Windows adoption.  
   🔗 [Issue #109982](https://github.com/NousResearch/hermes-agent/issues/109982)  

5. **P2 — Desktop spinner hangs after tool calls** (#111294)  
   > UI appears frozen for minutes post-tool execution. Only “Stop + continue” recovers. High UX impact.  
   🔗 [Issue #111294](https://github.com/NousResearch/hermes-agent/issues/111294)  

> **Note**: Many P1 bugs have **no corresponding fix PR** — indicating a critical triage bottleneck.

---

### **6. Feature Requests & Roadmap Signals**  
User-driven features with high signal:  

- **Realtime Voice Interface** (#77111, #95147, #101034)  
  > Three PRs competing to implement voice — community demands a **standardized ABC**. **Likely to be merged in v0.22.0** if interface is agreed upon this week.  

- **Per-Session Token Budgeting** (#91713)  
  > User burned 18.7M tokens in 5h due to a stuck loop. Request for abort/warn thresholds. **High probability of inclusion** in next minor release.  

- **Spellcheck in Desktop** (#48375)  
  > 7 upvotes, low effort. **Low-hanging fruit** — likely accepted in v0.21.4 patch.  

- **Bot Screen Streaming (Xfce desktop)** (#108914)  
  > Allows users to take over bot’s desktop for 2FA, then hand back. **Unique use case for automation-heavy users**. Strong potential for v0.22.0.  

- **Configurable Deliver Targets (Home Assistant)** (#35060)  
  > Request to send HA events to WhatsApp/Signal, not just HA. **High demand in smart home deployments**.  

> **Prediction**: v0.22.0 will include:  
> - Voice provider ABC  
> - Token budgeting  
> - Spellcheck  
> - Bot screen streaming  

---

### **7. User Feedback Summary**  
**Pain Points**:  
- **WAL corruption** is the #1 production fear — users report data loss and multi-hour downtime.  
- **Windows users are blocked** by `sentencepiece` crashes — no workaround.  
- **Desktop UI feels brittle** — spinner hangs, drag-drop failures, no spellcheck.  
- **False positives in skills_guard** block community skill adoption (e.g., `mksglu/context-mode`, `SOUL.md`).  
- **Cron jobs silently fail** — automation workflows are unreliable.  

**Satisfaction Signals**:  
- High engagement on **feature PRs** (e.g., voice, bot desktop) — users are invested in expanding capabilities.  
- **PRs are well-documented** and often include test cases (e.g., `#111336`, `#111337`).  
- **Auto-fix bots** (`#111329`, `#111324`) are reducing noise — community appreciates automation.  

> **Overall sentiment**: “We love the power, but the stability is terrifying.” — implicit consensus from issue tone.

---

### **8. Backlog Watch**  
These critical items have been open >30 days with no maintainer response:  

- **#77111** — RealtimeVoiceProvider ABC (open since 2026-08-02)  
  > Blocking 4 PRs. Needs **architectural decision** from core team.  

- **#100896** — State.db WAL corruption (open since 2026-09-02)  
  > 4 incidents in 5 weeks. No fix PR accepted.  

- **#93929** — Matrix.org access token expires every 3–4h  
  > MAS OAuth lacks refresh token support. Critical for enterprise Matrix users.  

- **#92644** — Scanner blocks SOUL.md content describing prompt injection  
  > Security scanner blocks educational content. Undermines agent safety training.  

- **#108219** — `httpx2==2.7.0` pinned despite known CVEs  
  > Security risk. No response from maintainers since 2026-09-11.  

> **Recommendation**: Core team must prioritize **#77111** and **#100896** in next sprint. Failure to respond risks user attrition in production environments.

---

**Project Health Summary**:  
✅ **High velocity, strong community**  
⚠️ **Critical stability gaps in state management and cross-platform support**  
🔴 **Top 3 P1 bugs lack fixes — risk to production adoption**  
🔮 **v0.22.0 will likely be the “Voice + Budgeting” release**  
🔧 **Auto-fix bots and docs translations show healthy automation culture**  

> **Verdict**: Technically brilliant, operationally fragile. Next 14 days will determine if Hermes Agent transitions from “powerful alpha” to “production-ready.”

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest — 2026-09-15**

---

**1. Today's Overview**  
IronClaw remains in a state of steady, focused development with minimal but meaningful activity over the past 24 hours. One new issue and one ongoing pull request were updated, indicating active maintenance without a surge in community noise. No new releases were published, and the project continues to operate without versioned updates, suggesting a development cadence aligned with iterative improvements rather than scheduled releases. The single open issue and PR both address core diagnostic and stability concerns, pointing to a maturing codebase under targeted refinement.

---

**2. Releases**  
No new releases were published in the last 24 hours. The most recent release remains unlisted, indicating the project is either in a pre-release stabilization phase or following a continuous integration model without formal version tagging.

---

**3. Project Progress**  
No PRs were merged or closed today. However, PR #8077 was updated on 2026-09-14 after being open since September 6, signaling continued maintainer engagement. This PR advances diagnostic clarity in the MCP (Model Communication Protocol) lane by centralizing the `response_leak_blocked` sentinel and improving classification logic to preserve safe host-level blocking while exposing actionable failure reasons to the MCP layer. This represents a subtle but important stability and observability enhancement, particularly for production-grade agent deployments.

---

**4. Community Hot Topics**  
The most active item is **Issue #8100**: [Daily ironclaw failure taxonomy — 2026-09-14](https://github.com/nearai/ironclaw/issues/8100). Though it has no comments or reactions, it is highly significant as it initiates a systematic taxonomy of failure modes from the OfficeQA benchmark run, identifying 43 non-pass tasks as “genuine model-quality errors” — specifically citing DeepSeek-V4-Flash navigation failures. This suggests an emerging community need for standardized failure classification to distinguish between model limitations, agent orchestration flaws, and infrastructure issues. The lack of engagement may reflect its technical nature, but it signals a foundational request for benchmark-driven quality accountability. No other Issues or PRs have received reactions or comments, making this the de facto community focal point.

---

**5. Bugs & Stability**  
- **High Severity**: Issue #8100 indirectly reveals a systemic stability concern: DeepSeek-V4-Flash’s navigation failures in OfficeQA are classified as model-quality errors, implying that core reasoning components are failing in task-critical scenarios. While not a crash or regression per se, this constitutes a high-impact functional regression in agent capability.  
- **Medium Severity**: PR #8077 addresses a previously unclassified “response leak” diagnostic issue in the MCP lane, which could lead to silent failures or misattribution of security violations. The fix is pending review but directly improves system safety and diagnostic fidelity.  
No crashes or regressions were explicitly reported, but the OfficeQA failure pattern suggests a latent stability risk in agent reasoning pipelines under real-world office task loads.

---

**6. Feature Requests & Roadmap Signals**  
The taxonomy initiative in Issue #8100 is not a feature request per se, but it strongly implies an unmet need for:  
- Automated failure classification pipelines  
- Benchmark-specific failure mode dashboards  
- Model vs. agent responsibility attribution tools  

These are clear signals for a future “Agent Diagnostics Suite” feature. PR #8077 also hints at an expanding need for granular MCP-level observability — a likely candidate for inclusion in the next minor release (v0.8.x), especially if the PR is merged. Expect roadmap evolution toward “failure explainability” and “MCP telemetry standardization” in Q4 2026.

---

**7. User Feedback Summary**  
There is no direct user feedback via comments or reactions. However, the existence of Issue #8100 — authored by a contributor analyzing benchmark results — indicates a user segment (likely internal researchers or benchmarking engineers) who are deeply invested in understanding *why* agents fail, not just that they fail. Their unmet need is diagnostic transparency: they want to separate model incompetence from agent misconfiguration. The absence of community upvotes or replies suggests either low public visibility of the issue or a narrow user base (e.g., NearAI internal team). Satisfaction is inferred from the precision of the analysis; dissatisfaction is implied by the lack of prior taxonomy infrastructure.

---

**8. Backlog Watch**  
- **PR #8077**: Open since 2026-09-06 (9 days), with no reviews or comments. Despite being well-documented and closing a referenced issue (#8009), it remains unmerged. This is a critical bottleneck — the fix improves system safety and is aligned with core agent reliability goals.  
- **Issue #8100**: Open since 2026-09-14, with zero engagement. While newly created, its technical depth and potential to shape future quality initiatives make it a priority for maintainer response.  

Both items are low-traffic but high-impact. They require immediate maintainer triage to prevent stagnation of foundational diagnostics work. Recommend assigning to a core engineer for review by 2026-09-18.

--- 

**Project Health Note**: IronClaw is operating with low external noise but high internal precision. Activity is focused, technical, and aligned with long-term reliability goals. The absence of releases and community engagement may indicate a pre-1.0 internal development phase. Maintainer responsiveness to PR #8077 and Issue #8100 will be key indicators of project momentum in the coming weeks.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

**QwenPaw Project Digest — 2026-09-15**

---

### **1. Today's Overview**  
QwenPaw remains highly active, with 45 issues and 50 PRs updated in the last 24 hours, indicating robust community engagement and rapid development velocity. Despite no new releases, the project demonstrates strong momentum through a high volume of bug fixes, UX refinements, and infrastructure improvements. The ratio of open to closed issues (31:14) and PRs (39:11) suggests a healthy but backlogged triage pipeline, with significant focus on memory management, agent stability, and UI ergonomics. The project is clearly in a phase of intensive stabilization ahead of an upcoming release cycle.

---

### **2. Releases**  
No new releases were published in the last 24 hours. The latest stable version remains **v2.2.1** (desktop) and **v2.2.0** (container), with multiple beta and patch-level fixes queued in open PRs. No breaking changes or migration notes are currently available.

---

### **3. Project Progress**  
Today, **11 PRs were merged/closed**, primarily addressing critical stability and usability gaps:

- **Memory & Agent Stability**:  
  - PR #7748 fixed three agent-loop recovery failures, including doom-loop warning delivery and budget overflow handling.  
  - PR #7769 enforced local API authentication in desktop mode, closing a security blind spot.  
  - PR #7751 aligned Docker Python runtime with desktop (Python 3.11), improving consistency.  
- **UI/UX Improvements**:  
  - PR #7704 moved the chat files drawer to the right (resolving #7739), significantly improving UI density on small screens.  
  - PR #7750 surfaced `send_file_to_user` artifacts in the response grid, improving user discoverability.  
  - PR #7681 persisted sidebar collapse state across reloads, enhancing user workflow continuity.  
- **Protocol & Integration Fixes**:  
  - PR #7729 enabled compatibility with Java/Kotlin MCP SDK servers by recognizing non-standard `jsonRpcError` envelopes.  
  - PR #7773 fixed Telegram `/start` handshake handling, enabling bot-initiated messaging.  
- **Tooling & Plugin Robustness**:  
  - PR #7753 upgraded `make-skill` to v2.1, enforcing plan persistence before draft generation.  
  - PR #7763 added error handling for plugin catalog CDN failures, improving plugin installation resilience.

These merges reflect a focused effort on **user experience, agent reliability, and cross-platform compatibility**.

---

### **4. Community Hot Topics**  
The most-commented issues and PRs reveal systemic pain points:

- **#7722 [Memory Exhaustion]** (4 comments) — *“Memory exhaustion compounds through three paths…”*  
  [Link](https://github.com/agentscope-ai/QwenPaw/issues/7722)  
  > A critical, multi-path memory leak (1MB/s growth) causing 20GB+ consumption. This is the top stability concern, with users reporting service hangs and OOM crashes.  

- **#7708 & #7724 [Model & Session Loss]** (4 comments each)  
  [Link #7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) | [Link #7724](https://github.com/agentscope-ai/QwenPaw/issues/7724)  
  > Users report **random loss of model configuration and entire conversation history** after normal usage — a severe UX regression. Correlated with #7745 (session deletion on agent switch).  

- **#7571 [Memory Forgetting]** (6 comments)  
  [Link](https://github.com/agentscope-ai/QwenPaw/issues/7571)  
  > Deep frustration over agent’s inability to retain user-defined paths and configuration — indicating **persistent failure in persistent memory and configuration binding**.  

- **#7739 [Right-Side Chat Drawer]** (4 comments)  
  [Link](https://github.com/agentscope-ai/QwenPaw/issues/7739)  
  > High demand for UI reorganization on small screens — **immediately addressed by PR #7704**, showing strong alignment between user feedback and development response.  

- **PR #7704 & #7750** (both merged/reviewed)  
  [Link #7704](https://github.com/agentscope-ai/QwenPaw/pull/7704) | [Link #7750](https://github.com/agentscope-ai/QwenPaw/pull/7750)  
  > Demonstrates user-driven UI refinement being rapidly implemented — a sign of responsive maintainership.

**Analysis**: The community is deeply concerned with **state persistence** (memory, sessions, configs) and **UI ergonomics**. The most vocal users are power users running complex agent workflows — they need reliability, not just features.

---

### **5. Bugs & Stability**  
**Top 5 Critical Bugs Reported Today (Ranked by Severity)**:

1. **#7722 — Unbounded Memory Growth (20GB+)**  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/7722)  
   > *Critical*: Causes service OOM crashes after 2+ days. No fix PR yet — high risk for production deployments.

2. **#7708 & #7724 — Model & Session Loss**  
   [Link #7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) | [Link #7724](https://github.com/agentscope-ai/QwenPaw/issues/7724)  
   > *Critical*: Configuration and conversation state vanish unpredictably. Correlated with #7745 — suggests a **core state management bug**.

3. **#7728 — Java MCP SDK Compatibility Failure**  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/7728)  
   > *High*: Blocks integration with enterprise Java-based MCP services. **Fixed by PR #7729** (merged).

4. **#7715 — Daily Paper Fails Silently on arXiv Outage**  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/7715)  
   > *High*: Misleading “no content” error hides actual HTTP failure — undermines automation reliability. No fix PR yet.

5. **#7727 — Out-of-Workspace Write Bypass (kimi-code)**  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/7727)  
   > *High*: Security risk — agent can write outside workspace without restriction. No fix PR yet.

> **Note**: 3 of the top 5 bugs have **no associated fix PR**, indicating critical gaps in response latency for stability issues.

---

### **6. Feature Requests & Roadmap Signals**  
User requests strongly signal the next release’s priorities:

- **Right-side chat drawer** (#7739) — Already implemented in PR #7704 → **Likely in v2.2.2**.  
- **Skill-channel binding** (#7746) — Request to restrict skills per channel (Discord, DingTalk, etc.) → **High-priority for multi-channel expansion**.  
- **Model fault switching configuration** (#7749) — Users cannot find where to configure fallback models → **Needs UI/UX documentation and implementation**.  
- **Memory auto-archiving** (#3995) — 4-month-old request for auto-compression of old memories → **Strong candidate for v2.3 memory overhaul**.  
- **Mem0 integration** (#4208) — Request for external memory backend → **Indicates desire for pluggable memory systems**.  
- **Context auto-adaptation** (#3801) — “Stop hard-limiting context in config” → **Long-term roadmap signal for dynamic token management**.

**Prediction**: v2.3 will likely include **pluggable memory (Mem0 support)**, **channel-aware skills**, and **dynamic context handling**, with v2.2.2 focusing on UI polish and memory leak fixes.

---

### **7. User Feedback Summary**  
**Pain Points**:  
- “**I keep losing my model settings and conversations**” — repeated by 3+ users (#7708, #7724, #7745).  
- “**It forgets where I told it to save files**” — #7571, #7705 — users feel the agent is “unreliable,” not “smart.”  
- “**No error messages — just silent failures**” — #7715, #7763 — automation users are particularly frustrated.  
- “**The UI is too cramped on my 14” laptop**” — #7739 — UI scalability is a real adoption blocker.

**Satisfaction Signals**:  
- PRs #7704, #7750, #7681 received **no complaints** — users appreciate clean, immediate UI fixes.  
- PR #7729 was tagged as “Fixes #7728” — community values **fast, precise bug resolution**.  

**Overall Sentiment**:  
> **High frustration with state loss and silent failures**, but **strong appreciation for responsive UI/UX fixes**. The project is perceived as powerful but brittle — users want **enterprise-grade reliability**, not just features.

---

### **8. Backlog Watch**  
These high-impact items remain **unaddressed for >7 days** and require maintainer attention:

| Issue | Age | Impact | Status |
|-------|-----|--------|--------|
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | 23 days | Critical (OOM) | No fix PR — **Top priority** |
| [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | 3 days | High (silent failure) | No fix PR — automation users at risk |
| [#7727](https://github.com/agentscope-ai/QwenPaw/issues/7727) | 3 days | High (security bypass) | No fix PR — potential exploit |
| [#3995](https://github.com/agentscope-ai/QwenPaw/issues/3995) | 137 days | Medium-High (memory bloat) | Long-standing request — needs roadmap commitment |
| [#4208](https://github.com/agentscope-ai/QwenPaw/issues/4208) | 158 days | Medium (Mem0 integration) | No response — signals desire for extensibility |

**Recommendation**:  
- **Immediately triage #7722, #7708, #7724** — these are **release-blocking** for production use.  
- **Assign owner to #3995** — memory lifecycle management is a foundational need.  
- **Respond to #4208** — even a brief roadmap note would reduce community uncertainty.

---

**Final Assessment**:  
QwenPaw is a **highly active, community-driven project** with excellent responsiveness to UI/UX feedback and plugin integration. However, **core stability issues around state persistence and memory management are eroding trust**. Without urgent fixes to #7722 and #7708, adoption in professional environments will stall. The project is on the cusp of becoming a production-ready agent platform — but only if reliability is prioritized over feature velocity.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest — 2026-09-15**

---

### **1. Today's Overview**  
ZeroClaw is experiencing a surge in activity, with 22 issues and 50 pull requests updated in the last 24 hours — a strong indicator of rapid development and active community engagement. The project shows no new releases, but the high volume of open PRs (38) and balanced issue closure rate (11 open, 11 closed) suggests a healthy, iterative development cycle. The majority of activity centers on core runtime, security, and channel integrations, with notable focus on API consistency and reliability. The absence of releases despite extensive changes signals a deliberate stabilization phase ahead of a major version bump.

---

### **2. Releases**  
No new releases were published in the last 24 hours. The project remains on an unstated pre-v1.0 stabilization track, with multiple high-risk fixes and feature enhancements queued for inclusion in an upcoming v0.8.6 or v0.9.0 milestone.

---

### **3. Project Progress**  
Today, **12 PRs were merged or closed**, advancing critical components across the stack:  
- **Security hardening**: PR #10307 (closed) unified pairing code policy and enforced a stronger default (6-digit → 32-char alphanumeric), aligning with Issue #6613.  
- **Channel reliability**: PR #10748 (closed) ensured all outbound HTTP traffic from channels routes through the runtime proxy, closing a critical security gap. PR #10747 (closed) refactored transcription managers across 8 channels, eliminating four recurring bugs.  
- **Configuration consistency**: PR #10589 (closed) defaulted `multimodal.max_image_size_mb` to 20 MiB (the existing ceiling), resolving a long-standing mismatch between user expectations and system behavior.  
- **Tooling & CI**: PR #10840 (closed) added automated `llms.txt` generation to mdBook builds, improving LLM documentation discoverability.  
- **Agent lifecycle**: PR #10621 (open, high priority) introduced a shared live-config authority for agent mutations, replacing fragmented config snapshots — a foundational change for multi-user reliability.

---

### **4. Community Hot Topics**  
The most active and high-signal issues and PRs reflect deep systemic concerns:  

- **#10549 [RFC: Simplify RFC voting]** — 10 comments, 0 👍 — *Underlying need:* Reducing bureaucratic friction in governance. The community is signaling fatigue with rigid 48–72h discussion windows that rarely improve review quality. This is a cultural shift request toward agile decision-making.  
- **#10621 [feat(runtime): coordinate agent lifecycle mutations]** — 0 comments but marked “size:XL” and “distinguished contributor” — *Underlying need:* Eliminating config drift and race conditions in multi-agent, multi-channel environments. This is the most architecturally significant PR under review, with broad impact on stability.  
- **#10858 [Bug: DateTimeSection invalidates cached prompts at midnight]** — 1 comment, opened today — *Underlying need:* Persistent session state is being undermined by naive timestamping. Users expect seamless continuity; this bug breaks caching semantics for all users with midnight-based workflows.  
- **#9814 [feat(channels): native XMPP / Prosody channel]** — 2 comments, open since August — *Underlying need:* Self-hosted, low-resource users demand lightweight, standards-based chat protocols. Matrix is heavy; XMPP is the obvious alternative for home labs.  

🔗 [Issue #10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) | [PR #10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) | [Issue #10858](https://github.com/zeroclaw-labs/zeroclaw/issues/10858) | [Issue #9814](https://github.com/zeroclaw-labs/zeroclaw/issues/9814)

---

### **5. Bugs & Stability**  
Six **high-severity (S1/S2)** bugs were reported today, all with active or pending fixes:  

1. **S1 — #10863**: Telegram voice update rejection blocks all subsequent messages — *No PR yet*, but referenced in #10640. Critical for production Telegram users.  
2. **S1 — #10857**: ZeroCode attaches images to text-only models → 400 errors — *PR pending?* (Issue opened 2026-09-14, no PR yet).  
3. **S1 — #10854**: Literal `[IMAGE:...]` markers in tool output are misinterpreted as real images — *PR pending?* High risk of hallucination or provider rejection.  
4. **S1 — #10603**: OpenCode providers never send `x-opencode-session` — *Fixed in PR #10864* (merged today).  
5. **S2 — #10625**: `[media attachment]` placeholder leaks to users with non-vision models — *Open*, impacts UX.  
6. **S2 — #10842**: Telegram reaction tool silently no-ops — *Open*, affects automation workflows.  

*Note:* PR #10864 (closed) fixed #10603, and PR #10589 (closed) addressed #10588 — showing rapid response to high-impact bugs.

---

### **6. Feature Requests & Roadmap Signals**  
Key requested features with strong momentum:  

- **XMPP/Prosody channel support** (#9814) — Highly requested by self-hosted users; likely in v0.8.6.  
- **AnySearch as built-in web_search_tool** (#10336) — Community contributor proposal; low friction, high utility. Strong candidate for v0.8.6.  
- **Native weekday in per-turn context** (#10856) — Small but meaningful UX improvement; merged or imminent.  
- **RFC voting simplification** (#10549) — If accepted, this signals a shift toward faster, lighter governance — a roadmap cultural milestone.  
- **OIDC token verification** (#10255) — Already in PR; part of a 5-stage security enhancement plan. Likely core to v0.9.  

*Prediction:* v0.8.6 (targeting late September) will include: XMPP, AnySearch, image size default fix, and RFC process simplification — if governance approves.

---

### **7. User Feedback Summary**  
Real user pain points are clear:  

- **Frustration with “silent failures”**: Telegram reactions (#10842), media placeholders (#10625), and image misprocessing (#10857) all point to users hitting invisible boundaries — they expect tools to fail loudly or gracefully, not silently.  
- **Demand for self-hosting flexibility**: XMPP (#9814), configurable Docker images (#10745), and proxy routing (#10748) show users want full control — not just “it works on Matrix.”  
- **Frustration with outdated defaults**: Default 5 MiB image limit (#10588 → #10589) was out of sync with real-world usage (phone photos ~8–15 MiB). Users felt the system was designed for 2018, not 2026.  
- **Confusion over caching**: #10858 reveals users assume state is persistent — when it’s not, due to naive datetime injection. This is a fundamental UX misunderstanding of agent statefulness.  

Satisfaction is high where fixes are fast (e.g., #10589, #10603), but dissatisfaction grows where behavior is opaque or defaults are wrong.

---

### **8. Backlog Watch**  
These critical items have been open for weeks with no maintainer response:  

- **#9753 [fix(config): distinguish absent vs empty risk-profile allowed_tools]** — Open since 2026-08-04, 32 days — *High risk, size:XL* — Needs maintainer review. Affects security policy enforcement.  
- **#10381 [fix(security): resolve host launchers before workspace cwd]** — Open since 2026-08-26, 20 days — *High risk, size:XL* — Critical for sandboxed environments (Docker, Firejail).  
- **#10197 [fix(acp): persist interrupted turn progress]** — Open since 2026-08-20, 26 days — *High risk, size:XL* — ACP users are losing work on interruptions.  
- **#9971 [feat(channels): authorize Discord members by role]** — Open since 2026-08-13, 34 days — *High risk, size:L* — Teams are manually maintaining user IDs; drift causes access issues.  

All four are labeled “risk:high” and “size:XL” — indicating major architectural impact. Their prolonged inactivity risks user attrition and security exposure.

🔗 [PR #9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753) | [PR #10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) | [PR #10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) | [PR #9971](https://github.com/zeroclaw-labs/zeroclaw/pull/9971)

---

**Final Assessment**: ZeroClaw is a high-velocity, security-conscious project with excellent community contribution and rapid bug response. However, maintainer bandwidth is becoming a bottleneck for high-impact, complex PRs. Urgent review of the four backlog items above is critical to maintain trust and prevent regression in enterprise/self-hosted deployments. The project is on the cusp of a major stabilization milestone — v0.8.6 — and the next 14 days will determine whether it achieves architectural maturity or remains fragmented.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*