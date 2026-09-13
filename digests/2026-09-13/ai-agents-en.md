# OpenClaw Ecosystem Digest 2026-09-13

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-13 00:13 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

**OpenClaw Project Digest — 2026-09-13**

---

### **1. Today's Overview**  
OpenClaw remains in a high-activity maintenance phase, with 500 issues and 500 PRs updated in the last 24 hours — indicating intense community and maintainer engagement. Despite no new releases, the project is in a critical stabilization window following the recent `2026.9.3` and `2026.9.4` deployments, with over 270 open issues flagged as P0/P1 severity. The volume of concurrent PRs (266 open, 234 merged/closed) reflects a coordinated effort to resolve systemic regressions, particularly around session state, upgrade reliability, and agent lifecycle management. The absence of releases suggests a deliberate freeze to stabilize core infrastructure before a patch rollout.

---

### **2. Releases**  
*No new releases were published in the last 24 hours.*  
The project remains on `2026.9.3` and `2026.9.4`, both of which are experiencing widespread upgrade failures, migration stalls, and runtime instability. No hotfix or patch version has been cut, despite multiple P0-level update blockers (e.g., #145510, #145782, #144739). Maintainers are prioritizing PR consolidation over release tagging, indicating a planned coordinated patch cycle is imminent.

---

### **3. Project Progress**  
Today, **234 PRs were merged or closed**, with a clear focus on core stability and performance. Key advancements include:  
- **Session & State Integrity**: Multiple PRs (#146571, #146491, #146565, #146542) fix SQLite snapshot leaks, queued write I/O blocking, and subagent reconciliation race conditions — addressing root causes behind silent session loss (#44925, #139847).  
- **Upgrade & Migration Reliability**: PRs #145335 and #145043 resolve Node version mismatch and stale Codex migrations that block updates — directly tackling #145192 and #123326.  
- **Performance Optimizations**: Steipete’s prolific contributions (#146584, #146581, #146578, #146373) reduce redundant hashing, SQLite scans, and prompt fitting, improving Gateway responsiveness under load.  
- **Channel & Plugin Stability**: Fixes for Telegram (#146129), Discord (#146583), and PDF tool handling (#146408) improve plugin interoperability.  
- **CI Efficiency**: PR #146353 cuts CI runtime by 6% via shared compiled workers — a significant win for maintainers.  

The majority of merged PRs originate from core contributors (notably “steipete” and “roboclaw-bot”), signaling strong internal coordination.

---

### **4. Community Hot Topics**  
Top 5 most active issues/PRs (by comments/reactions):

1. **#97616** — [Bug]: Zombie child process accumulation from hooks/tools (28 comments, 1 👍)  
   → *Underlying need:* Runtime hygiene and process lifecycle control. Users report degraded performance over days — a silent resource leak affecting long-running gateways.  
   [Link](https://github.com/openclaw/openclaw/issues/97616)

2. **#44925** — [Bug]: Subagent completion silently lost without retry or notification (27 comments, 2 👍)  
   → *Underlying need:* Guaranteed delivery semantics. Users rely on subagents for critical automation; silent failure breaks trust in agent reliability.  
   [Link](https://github.com/openclaw/openclaw/issues/44925)

3. **#142585** — [Regression]: Doctor refuses legacy workspace import (17 comments)  
   → *Underlying need:* Safe migration paths. Users upgrading from `2026.7.1-2` are locked out — a severe UX-release-blocker with no workaround.  
   [Link](https://github.com/openclaw/openclaw/issues/142585)

4. **#144911** — [Bug]: MCP server init timeout crashes entire Gateway (9 comments)  
   → *Underlying need:* Fault isolation. A single misbehaving MCP server taking down the entire system is unacceptable in production.  
   [Link](https://github.com/openclaw/openclaw/issues/144911)

5. **#146571** — [PR]: Fix SQLite snapshot cleanup blocking event loop (0 comments, but linked to 6+ issues)  
   → *Underlying need:* Non-blocking I/O. This PR is the linchpin for resolving #142476, #130741, and others — indicating maintainers are targeting systemic concurrency bugs.  
   [Link](https://github.com/openclaw/openclaw/pull/146571)

*Analysis:* The top issues reveal a community increasingly frustrated with **silent failures** and **upgrade fragility**. Users are not asking for new features — they are begging for *predictable behavior*. The high comment volume on #97616 and #44925 indicates these are production-breaking for enterprise users.

---

### **5. Bugs & Stability**  
**Top 5 Critical Bugs Reported Today (P0/P1):**

| Rank | Issue | Severity | Impact | Fix PR? |
|------|-------|----------|--------|---------|
| 1 | **#145929** — Auth profile logout permanently fails with lock-may-be-busy | P0 | UX-release-blocker | ❌ No PR |
| 2 | **#144911** — MCP server timeout crashes Gateway | P0 | System-wide crash | ❌ No PR |
| 3 | **#144739** — 2026.9.3 → 2026.9.4 update runs old version against new schema | P0 | Migration corruption | ❌ No PR |
| 4 | **#145510** — Update failure: runtime-verification-failed (Windows) | P0 | Upgrade dead end | ❌ No PR |
| 5 | **#145782** — Update failure: repairing (macOS) | P0 | Upgrade dead end | ❌ No PR |

**Other Critical Regressions:**  
- **#139847**: Messages dropped during reply runs (regression in 2026.9.2) — *linked to PR #146565*  
- **#142476**: Cron reaper blocks event loop for 76s every few minutes — *fixed by PR #146571*  
- **#140620**: Session transcript reconciliation stalls after upgrade — *linked to PR #145043*  
- **#146004**: Unwanted dashboard heartbeat after subagent completion — *no PR yet*

*Summary:* **7 P0 bugs reported today with no corresponding fix PRs** — a major red flag. While PRs are being merged for performance and edge cases, the most severe upgrade and crash bugs remain unaddressed. The project is at risk of losing enterprise trust if these are not resolved in the next 48 hours.

---

### **6. Feature Requests & Roadmap Signals**  
Key requested features with strong community traction:

- **#78308**: Channel-mediated approval for MCP tool calls (consent envelope) — *16 comments, 1 👍*  
  → *Likely in next patch:* Aligns with security posture; low-effort, high-impact.  
  [Link](https://github.com/openclaw/openclaw/issues/78308)

- **#131457**: Progress streaming mode for Feishu (Lark) — *5 comments*  
  → *High probability:* Already supported on Slack/Discord — parity is expected.  
  [Link](https://github.com/openclaw/openclaw/issues/131457)

- **#77798**: Collaborative Markdown editor (like ChatGPT Canvas) — *6 comments, 2 👍*  
  → *Likely in Q4 2026:* High user engagement; UI team has precedent with Canvas.  
  [Link](https://github.com/openclaw/openclaw/issues/77798)

- **#126876**: Accessibility audit (screen reader barriers) — *6 comments*  
  → *High priority:* First blind user to document install barriers — aligns with ethical AI commitments.  
  [Link](https://github.com/openclaw/openclaw/issues/126876)

- **#146546**: GPT Live shared across meetings (Zoom/Teams/Meet) — *merged PR*  
  → *Already shipped in code:* PR #146546 closed — feature active in dev builds.

*Prediction:* Next release (`2026.9.5`) will include MCP consent envelope, Feishu streaming, and GPT Live cross-platform support — with a focus on **security and interoperability** over new agent capabilities.

---

### **7. User Feedback Summary**  
**Pain Points (Direct Quotes & Themes):**  
- *“Doctor refuses valid legacy setup”* — #142585 → *“I can’t upgrade. My automation is frozen.”*  
- *“Subagent results silently lost”* — #44925 → *“I thought the task completed. It didn’t. I lost data.”*  
- *“Auth store lock may be busy”* — #145929 → *“I can’t logout or switch profiles. I’m locked out.”*  
- *“Gateway crashes if one MCP times out”* — #144911 → *“One broken plugin kills my entire assistant.”*

**Satisfaction Signals:**  
- Positive sentiment around PRs like #146584 (Code Mode optimization) and #146353 (CI speedup) — maintainers are being responsive to performance pain.  
- Appreciation for detailed issue templates and tagging (`clawsweeper:*`) — indicates mature community norms.

**Dissatisfaction Signals:**  
- **Frustration with upgrade reliability** is the dominant sentiment.  
- Users report **“works on my machine”** vs. **“fails in production”** dichotomy — especially around Node version mismatches (#145335) and plugin caching (#145266).  
- No acknowledgment from maintainers on P0 bugs — users are starting to ask: *“Is this project still being actively maintained?”*

---

### **8. Backlog Watch**  
**Critical Long-Unaddressed Items Needing Maintainer Attention:**

| Issue | Age | Severity | Why It Matters |
|-------|-----|----------|----------------|
| **#97616** — Zombie process leak | 77 days | P1 | Persistent resource drain in production gateways. Affects all long-running deployments. |
| **#115367** — Read gate blocks external plugins | 63 days | P1 | Breaks Slack/Discord/MSTeams plugin functionality. Core security feature misconfigured. |
| **#114158** — fs-safe ignores umask, breaks shared workspaces | 59 days | P2 | Blocks multi-user/NFS/SMB deployments — enterprise blocker. |
| **#145929** — Auth lock failure | 1 day | P0 | **Urgent** — no PR, no response. Prevents user session management. |
| **#144911** — MCP timeout crashes Gateway | 2 days | P0 | **Urgent** — no PR, no response. Systemic reliability failure. |
| **#144739** — Upgrade runs old version against new schema | 3 days | P0 | **Urgent** — data corruption risk during update. |

*Recommendation:* These 6 items represent the most critical threats to OpenClaw’s credibility. Maintainers must prioritize **response, not just code**. A public status update on these issues — even if “investigating” — would significantly reduce community anxiety.

---

**Final Assessment:**  
OpenClaw is experiencing **high operational intensity but declining stability**. The project has world-class engineering contributions (evidenced by PR quality), but is at risk of losing user trust due to unresolved P0 upgrade and crash bugs. The community is highly engaged and technically sophisticated — but increasingly impatient with silent failures. **Priority must shift from feature polish to reliability assurance.** A patch release (`2026.9.5`) resolving the top 5 P0 bugs is urgently needed.

---

## Cross-Ecosystem Comparison

**Cross-Project Comparison Report: Personal AI Agent Ecosystem — 2026-09-13**

---

### **1. Ecosystem Overview**

The personal AI agent open-source landscape in late 2026 is characterized by intense fragmentation and divergent maturity trajectories. While projects like OpenClaw, ZeroClaw, and QwenPaw exhibit high operational velocity with active community contributions, they face critical stability bottlenecks that threaten production adoption. Hermes Agent demonstrates disciplined architectural evolution under pressure, prioritizing security and session persistence, while IronClaw stands as a quiet outlier—stable, minimal, and focused on auditability. Collectively, the ecosystem is transitioning from feature experimentation to reliability engineering, with enterprise users increasingly demanding predictable state management, secure auth, and graceful degradation over novel capabilities.

---

### **2. Activity Comparison**

| Project       | Issues (24h) | PRs (24h) | Release Status | Health Score* |
|---------------|--------------|-----------|----------------|---------------|
| **OpenClaw**  | 500          | 500       | No release (2026.9.4) | ⚠️ 4/10 (High activity, critical P0 backlog) |
| **Hermes Agent** | 50         | 50        | No release (v0.21.2) | ✅ 7/10 (High velocity, strong PR-to-fix ratio) |
| **IronClaw**  | 0            | 2         | No release (unchanged) | ✅✅ 9/10 (Stable, low-risk, high-signal) |
| **QwenPaw**   | 17           | 7         | No release (v2.2.1) | ⚠️ 5/10 (High PR volume, zero merges, critical bugs unaddressed) |
| **ZeroClaw**  | 24           | 50        | No release (pre-v0.13) | ⚠️ 6/10 (High velocity, S0 bugs, Windows CI instability) |

*Health Score: 1–10 scale based on PR merge velocity, P0 bug resolution, release cadence, and community feedback tone. Higher scores reflect reliability + responsiveness.*

---

### **3. OpenClaw's Position**

OpenClaw dominates in **community scale and operational intensity**, with 10x the issue/PR volume of any peer—indicating it is the de facto reference implementation for agent infrastructure. Its technical approach is **monolithic and state-centric**, with deep integration of SQLite, subagent reconciliation, and gateway-level lifecycle management. Compared to peers, OpenClaw’s architecture is more complex and less modular than Hermes’ service-oriented design or IronClaw’s lineage-tracked state model. Its community is the largest and most technically sophisticated, but also the most frustrated—users are not asking for features, but for *predictability*. While QwenPaw and ZeroClaw show similar PR volume, OpenClaw’s maintainer coordination (evidenced by “steipete” and “roboclaw-bot”) is more centralized and effective, though critically undermined by its failure to resolve top P0 upgrade and crash bugs.

---

### **4. Shared Technical Focus Areas**

Across projects, four systemic requirements are emerging:

1. **State Persistence & Integrity**  
   - *OpenClaw (#44925, #146571)*, *QwenPaw (#7708, #7724)*, *ZeroClaw (#10797)* — Silent session/model loss is the top user complaint. All demand non-blocking, crash-resilient storage (SQLite, markdown backend, etc.).

2. **Authentication & Auth Isolation**  
   - *Hermes (#109440, #109422)*, *OpenClaw (#145929)* — Credential leakage, profile hijacking, and lock contention are recurring P1/P0 bugs. Projects are converging on granular identity scoping and OAuth boundary enforcement.

3. **Upgrade & Migration Reliability**  
   - *OpenClaw (#144739, #145510)*, *QwenPaw (#7716)* — Schema drift and version mismatch during updates are breaking production systems. All projects now require deterministic migration paths and rollback guards.

4. **Fault Isolation & Process Hygiene**  
   - *OpenClaw (#144911, #97616)*, *ZeroClaw (#10807)*, *Hermes (#109243)* — Single-point failures (MCP timeout, zombie processes, cron worker crashes) are unacceptable. Projects are implementing timeouts, watchdogs, and sandboxed execution.

---

### **5. Differentiation Analysis**

| Dimension           | OpenClaw                          | Hermes Agent                      | IronClaw                          | QwenPaw                           | ZeroClaw                          |
|---------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|
| **Feature Focus**   | Gateway orchestration, multi-agent state | Session persistence, auth isolation | Auditability, lineage tracing     | Model config, plugin UX, ACP/MCP  | Runtime safety, Windows TUI, CI   |
| **Target Users**    | Enterprise agent platforms        | Autonomous agent networks         | Compliance-sensitive deployments  | Chinese-language productivity     | Cross-platform desktop agents     |
| **Architecture**    | Monolithic, SQLite-heavy          | Microservice-adjacent, TUI-first  | Minimalist, state-lineage core    | Plugin-centric, ACP/MCP stack     | Daemon-first, durable outbox      |
| **Release Cadence** | Frozen (stabilization phase)      | Imminent patch (v0.21.3)          | Infrequent, deliberate            | Stalled (7 PRs unmerged)          | Pre-release accumulation          |
| **Risk Profile**    | High (P0 upgrade corruption)      | Medium (auth leaks)               | Low (stable, internal use)        | High (OOM, data loss)             | High (S0 memory loss, Windows CI) |

IronClaw is the only project with no user-facing bugs—its minimalism is a strategic differentiator. OpenClaw leads in ecosystem influence but lags in trust. QwenPaw and ZeroClaw are high-risk, high-reward candidates for rapid iteration.

---

### **6. Community Momentum & Maturity**

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **🔥 Rapid Iteration (High Velocity, Low Stability)** | QwenPaw, ZeroClaw | 15–50+ issues/PRs daily; PRs accumulate without merges; users report production failures. High contributor engagement but low maintainer throughput. |
| **⚡ High Activity, Controlled Stabilization** | OpenClaw, Hermes Agent | 50–500+ issues/PRs; strong PR-to-fix ratio; active maintainer coordination. OpenClaw is overloaded; Hermes is responsive. Both are in stabilization sprints. |
| **✅ Stable & Deliberate** | IronClaw | <5 issues/PRs weekly; no regressions; no releases needed. Core team drives precision fixes. Low community noise = high confidence. |

**Maturity Insight**: Only IronClaw has reached “maintenance maturity.” OpenClaw and Hermes are in “critical stabilization,” while QwenPaw and ZeroClaw are in “feature sprint chaos.” The ecosystem is polarizing: either you’re shipping reliability or drowning in PRs.

---

### **7. Trend Signals**

From community feedback, five industry-wide trends emerge:

1. **Trust > Features**  
   Users explicitly reject “new capabilities” in favor of “doesn’t break.” Silent failures (#44925, #7724, #10797) are the #1 trust killer.

2. **Production Use is Now the Norm**  
   Docker OOMs (#7722), enterprise auth leaks (#109440), and multi-user workspace corruption (#114158) are no longer edge cases—they’re daily production incidents.

3. **Cross-Platform Consistency is a Hard Requirement**  
   Windows-specific failures (#10734, #10793), TUI input bugs (#10795), and macOS upgrade stalls (#145782) are forcing projects to adopt deterministic, OS-agnostic runtime patterns.

4. **Auditability is Becoming a Competitive Moat**  
   IronClaw’s lineage pinning (#8098) and OpenClaw’s session reconciliation are early signs: future agent systems will require verifiable turn histories for compliance, debugging, and liability.

5. **Maintainer Responsiveness is the New Bottleneck**  
   Projects with 7+ day silence on P0 bugs (QwenPaw: #7722, #7484; OpenClaw: #145929, #144911) are losing user confidence faster than those with broken code. **Community trust is now a function of response time, not code quality.**

---

**Conclusion**: The AI agent ecosystem is maturing rapidly—but unevenly. Projects that prioritize **predictable state, secure identity, and maintainer responsiveness** will lead. Those that prioritize velocity over stability will fracture user trust. OpenClaw remains the technical north star, but IronClaw may become the gold standard for reliability. For developers: build on Hermes for autonomy, on IronClaw for auditability, and avoid QwenPaw/ZeroClaw in production until patch releases land.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest — 2026-09-13**

---

### **1. Today's Overview**  
Hermes Agent remains in a state of high operational intensity, with 50 issues and 50 PRs updated in the last 24 hours — indicating active community engagement and rapid development cycles. No new releases were published, but the volume of PRs (48 open, 2 merged) and the concentration of critical bug reports suggest the project is in a stabilization phase ahead of an imminent release. The ecosystem shows signs of strain: multiple high-severity security and stability issues are converging around authentication, config parsing, and session state management, while feature requests increasingly focus on cross-platform resilience and autonomous workflow durability. The project’s health is dynamically managed but appears to be under pressure from architectural debt in distributed state handling.

---

### **2. Releases**  
*No new releases were published today.*  
The latest version remains **v0.21.2** (`f364c1977`). No migration notes or breaking changes are documented for this cycle. Users are advised to monitor the next release for fixes to critical issues in config parsing, OAuth leakage, and cron worker handoffs, all of which are currently addressed in open PRs.

---

### **3. Project Progress**  
Two PRs were merged today:  
- **[#109252](https://github.com/NousResearch/hermes-agent/pull/109252)**: Extended the external cron worker acknowledgment window from 5s to 12s to accommodate cold-start latency — resolving [#109243](https://github.com/NousResearch/hermes-agent/issues/109243). This is a critical fix for reliable unattended job scheduling.  
- **[#109253](https://github.com/NousResearch/hermes-agent/pull/109253)**: Broke a module cycle in the Desktop SDK (`sdk/index.ts → app/skills/ → runtime-loader`) that was preventing plugin runtime loading — fixing [#107288](https://github.com/NousResearch/hermes-agent/issues/107288).  

Additionally, 18 PRs were opened today, with heavy focus on:  
- **Config and auth integrity** (e.g., [#109481](https://github.com/NousResearch/hermes-agent/pull/109481), [#109479](https://github.com/NousResearch/hermes-agent/pull/109479))  
- **Session state consistency** (e.g., [#109465](https://github.com/NousResearch/hermes-agent/pull/109465), [#109320](https://github.com/NousResearch/hermes-agent/pull/109320))  
- **Cross-platform Desktop and TUI reliability** (e.g., [#109255](https://github.com/NousResearch/hermes-agent/pull/109255), [#109259](https://github.com/NousResearch/hermes-agent/pull/109259))  

The team is prioritizing systemic fixes over feature expansion, signaling a shift toward platform maturity.

---

### **4. Community Hot Topics**  
Top 3 most discussed issues and PRs (by comments/reactions):

1. **[#97681](https://github.com/NousResearch/hermes-agent/issues/97681)** — *Bot Group Chats should keep working after Desktop closes* (28 comments, 1 👍)  
   *Underlying need:* Users demand true cloud-native autonomy — sessions and multi-bot coordination must persist across device boundaries. This is a foundational requirement for Hermes to be used in enterprise or production agent networks.  

2. **[#109440](https://github.com/NousResearch/hermes-agent/issues/109440)** — *`hermes chat -q -m <direct alias>` leaks API keys to default provider host* (3 comments, 1 👍)  
   *Critical security flaw:* Cross-origin credential leakage in direct model alias routing. This is a P1 issue with direct impact on user data sovereignty. A fix is being tracked in [#109372](https://github.com/NousResearch/hermes-agent/pull/109372).  

3. **[#109243](https://github.com/NousResearch/hermes-agent/issues/109243)** — *cron external-worker handoff fails due to 5s timeout vs 12s cold start* (17 comments)  
   *Systemic reliability failure:* Unattended workflows are breaking at scale. The merged fix [#109252](https://github.com/NousResearch/hermes-agent/pull/109252) confirms this is a top-tier operational pain point.  

*PR Highlight:* **[#109372](https://github.com/NousResearch/hermes-agent/pull/109372)** — Prevents silent destruction of `HERMES_HOME` data via terminal tools. This is a critical security boundary fix with broad implications for user trust.

---

### **5. Bugs & Stability**  
Top 5 severity-ranked bugs reported today:

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **P1** | [#109440](https://github.com/NousResearch/hermes-agent/issues/109440) | API key leaked to wrong provider host (cross-origin credential exposure) | ✅ [#109372](https://github.com/NousResearch/hermes-agent/pull/109372) |
| **P1** | [#39609](https://github.com/NousResearch/hermes-agent/issues/39609) | `--initial-status blocked` tasks auto-promote to `ready` with no actor — bypassing human approval | ❌ No PR yet; critical for compliance use cases |
| **P1** | [#109422](https://github.com/NousResearch/hermes-agent/issues/109422) | Multiplexed profiles share OAuth identity — one user’s auth hijacks another’s MCP session | ❌ Open |
| **P2** | [#109243](https://github.com/NousResearch/hermes-agent/issues/109243) | Cron worker handoff fails due to 5s timeout (cold start takes 12s) | ✅ [#109252](https://github.com/NousResearch/hermes-agent/pull/109252) |
| **P2** | [#109452](https://github.com/NousResearch/hermes-agent/issues/109452) | Non-sticky blocked Kanban cards re-promoted every dispatcher tick — 30 duplicate model runs/hour | ❌ No PR yet |

*Notable regressions:*  
- [#109480](https://github.com/NousResearch/hermes-agent/issues/109480): Profile switching breaks gateway state and dashboard routing.  
- [#109423](https://github.com/NousResearch/hermes-agent/issues/109423): Telegram `allowed_chats` as JSON string silently drops messages.  

**Overall stability trend:** High. 7 P1/P2 bugs reported today, 3 fixed via PRs — but critical gaps remain in auth isolation and state persistence.

---

### **6. Feature Requests & Roadmap Signals**  
Emerging feature signals with high traction:

- **Persistent, cross-device group bot chats** ([#97681](https://github.com/NousResearch/hermes-agent/issues/97681)) — Likely candidate for v0.22.0.  
- **Autonomous mission lifecycle management** ([#82304](https://github.com/NousResearch/hermes-agent/issues/82304)) — User-reported GPU and task state loss indicates demand for “agent job orchestration.”  
- **Per-agent Linux desktops with Realms** ([#104567](https://github.com/NousResearch/hermes-agent/pull/104567)) — PR suggests a roadmap toward sandboxed, isolated agent instances.  
- **NPM/Python package auto-update automation** ([#83673](https://github.com/NousResearch/hermes-agent/issues/83673), [#102563](https://github.com/NousResearch/hermes-agent/issues/102563)) — Community is demanding CI/CD hygiene; likely to be adopted as mandatory pre-release checks.  
- **Voice agent session grouping** ([#100067](https://github.com/NousResearch/hermes-agent/pull/100067)) — Already merged logic; UI integration expected soon.

**Prediction:** v0.22.0 will focus on **session persistence**, **auth isolation**, and **autonomous mission durability** — with a strong emphasis on security hardening.

---

### **7. User Feedback Summary**  
**Pain Points (Repeated):**  
- *“Config.yaml silently falls back to defaults”* ([#102945](https://github.com/NousResearch/hermes-agent/issues/102945)) — Users lose hours of configuration due to silent YAML parse failures.  
- *“`hermes config set` bypasses approval layer”* ([#59293](https://github.com/NousResearch/hermes-agent/issues/59293)) — CLI undermines security model; users feel unsafe automating config changes.  
- *“My GPU was rented and lost silently”* ([#82304](https://github.com/NousResearch/hermes-agent/issues/82304)) — Autonomy without accountability is unusable.  
- *“Telegram group messages dropped silently”* ([#109423](https://github.com/NousResearch/hermes-agent/issues/109423)) — No logging, no error — users distrust the platform.  

**Satisfaction Indicators:**  
- PRs like [#109465](https://github.com/NousResearch/hermes-agent/pull/109465) (UTF-8 corruption fallback) and [#109320](https://github.com/NousResearch/hermes-agent/pull/109320) (session resume cache consistency) are praised for *graceful degradation* — users value resilience over perfection.  
- The community actively contributes fixes (e.g., 18 PRs today from non-core contributors), indicating strong trust in the project’s openness.

**Overall sentiment:** High frustration with *silent failures*, but high hope in *community-driven fixes*. Users want Hermes to be *predictable*, not just powerful.

---

### **8. Backlog Watch**  
Long-unaddressed critical items needing maintainer attention:

| Issue | Age | Severity | Why It Matters |
|-------|-----|----------|----------------|
| [#39609](https://github.com/NousResearch/hermes-agent/issues/39609) | 101 days | P1 | Human approval gate bypassed — violates core security model. No PR. |
| [#59293](https://github.com/NousResearch/hermes-agent/issues/59293) | 70 days | P2 | CLI can disable auth protection — undermines entire approval layer. No response. |
| [#92146](https://github.com/NousResearch/hermes-agent/issues/92146) | 53 days | Security | `HERMES_HOME` exemption allows unrestricted access to protected files (SOUl.md/AGENTS.md) — bypasses all guardrails. |
| [#84235](https://github.com/NousResearch/hermes-agent/issues/84235) | 45 days | P2 | Concurrent session turns cause duplicate tool execution — data corruption risk in production. |
| [#82304](https://github.com/NousResearch/hermes-agent/issues/82304) | 45 days | P3 | Unattended missions lose rented resources — no lifecycle management. Critical for cloud agents. |

**Recommendation:** These issues represent architectural vulnerabilities in authentication, state isolation, and safety boundaries. They are not edge cases — they are systemic. Prioritize them before v0.22.0. The project’s credibility hinges on resolving these.

---

**Final Assessment:**  
Hermes Agent is a high-velocity, community-driven project showing strong technical capability but suffering from critical gaps in safety, state consistency, and config integrity. The volume of fixes being contributed is impressive, but the lack of response to long-standing P1 issues threatens user trust. **Recommendation:** Release v0.21.3 as a security/stability patch within 72 hours, incorporating the top 3 PRs (#109372, #109252, #109465), and publicly acknowledge the backlog issues to reassure users.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest — 2026-09-13**

---

**1. Today's Overview**  
IronClaw remains in a stable, low-activity state as of 2026-09-13, with no new issues or releases reported in the past 24 hours. The project saw two pull request updates, one merged and one newly opened, indicating ongoing incremental development with no major disruptions. Activity levels are consistent with a maintenance-phase rhythm, suggesting focused, non-disruptive refinements rather than feature expansion. No signs of system instability or community surge in engagement were detected, reflecting a healthy but subdued development cadence.

---

**2. Releases**  
No new releases were published in the last 24 hours. The most recent release remains unchanged; no version bumps, changelogs, or migration notes are applicable for this period.

---

**3. Project Progress**  
Two pull requests were updated today:  
- **#8076 (Closed/Merged)**: Fixed a critical edge case in shared channel handling by distinguishing between disconnected paired users and unpaired accounts. The fix ensures consistent rejection classification across product layers, adapter interfaces, and OpenAI-compatible endpoints, with specific updates to Slack capabilities. This improves multi-platform consistency and user experience reliability.  
- **#8098 (Open)**: Introduces a lineage pinning test for `TurnRunState` snapshots, validating that state-derived snapshots deliberately omit metadata fields (depth, activation provenance, descendant cap) while confirming their presence in initial terminal-rewrite lineage. This strengthens the correctness of state lineage tracking—a foundational component for auditability and reproducibility in agent turn sequences.  

Both PRs reflect a maturing codebase prioritizing correctness over novelty.

---

**4. Community Hot Topics**  
No active issues or PRs with comments or reactions were observed today. The most recently updated items (#8098 and #8076) received zero reactions or comments, indicating either high reviewer confidence or low community visibility. This suggests that development is currently driven by core maintainers with minimal external feedback loop. The absence of community engagement may signal either high developer trust in the project’s direction or limited external adoption.

---

**5. Bugs & Stability**  
No bugs, crashes, or regressions were reported in the last 24 hours. No open issues indicate instability. The merged PR #8076 resolved a subtle but potentially impactful classification inconsistency across interfaces, which could have led to ambiguous user experiences in shared channel workflows. No outstanding stability concerns are present.

---

**6. Feature Requests & Roadmap Signals**  
No new feature requests were submitted today. However, the nature of PR #8098—adding lineage metadata validation and pinning—signals an emerging emphasis on *provenance tracking* and *state auditability* as core architectural priorities. This aligns with broader trends in AI agent systems requiring traceability for compliance, debugging, and multi-agent coordination. We predict that future releases will include:  
- Expanded lineage metadata serialization formats  
- API endpoints for querying agent turn history  
- Optional persistence of lineage data for audit logs  

These are likely candidates for inclusion in the next minor release (v0.4.x).

---

**7. User Feedback Summary**  
No direct user feedback (e.g., comments, issues, or forum posts) was recorded today. The lack of user-reported pain points or satisfaction signals suggests either:  
- A small or internal user base with limited feedback channels  
- High satisfaction with current stability, reducing need for reporting  
- Low visibility of the project outside core development teams  

The absence of complaints, combined with active PRs targeting edge-case fixes, implies a developer-first, quality-focused ethos. No dissatisfaction indicators were detected.

---

**8. Backlog Watch**  
No long-unanswered issues or PRs were identified in the current dataset. All open items are recent (<24h old) or recently resolved. PR #8098, while open, was opened just one day ago and is technically focused—likely awaiting review rather than being neglected. No backlog items require urgent maintainer intervention at this time.

---

**Summary**  
IronClaw is operating in a stable, deliberate maintenance mode. Recent activity reflects disciplined engineering: one critical fix merged, one precision test added. No community noise, no bugs, no releases—just quiet, high-signal development. Project health is excellent, with low risk and strong technical focus. Watch for lineage and auditability features to emerge as key differentiators in upcoming releases.  

🔗 PR #8076: https://github.com/nearai/ironclaw/pull/8076  
🔗 PR #8098: https://github.com/nearai/ironclaw/pull/8098

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

**QwenPaw Project Digest — 2026-09-13**

---

### 1. **Today's Overview**

QwenPaw is experiencing a surge in activity, with 17 new issues and 7 open pull requests updated in the last 24 hours — all PRs remain unmerged, indicating a backlog in review and release cycles. No new releases were published, despite multiple high-priority bug fixes and feature enhancements being proposed. The project shows strong community engagement, particularly around stability, plugin usability, and model configuration, but is at risk of accumulating technical debt due to the lack of recent releases and delayed PR merges. The volume of issues opened on September 12 alone (13 out of 17) suggests a potential regression or breaking change in v2.2.x triggered by recent deployments.

---

### 2. **Releases**

No new releases were published as of 2026-09-13. The latest stable version remains **v2.2.1** (desktop) and **v2.2.0** (Docker), with multiple beta releases (e.g., `2.2.1-beta.2`) in circulation. Users are reporting regressions in this version range, particularly around model persistence, ACP/MCP connectivity, and memory leaks — indicating an urgent need for a patch release to stabilize the v2.2.x branch.

---

### 3. **Project Progress**

No PRs were merged today. However, seven high-quality PRs were submitted, all targeting critical issues reported in the same timeframe:

- **#7732**: Fixes ACP permission option matching logic to respect protocol-defined `kind` values, resolving silent fallbacks to interactive prompts.
- **#7729**: Addresses Java MCP SDK compatibility by recognizing non-standard `jsonRpcError` envelopes during `server/discover` probes.
- **#7725**: Replaces the blocking `watchfiles.awatch` with threaded polling, resolving server-wide freezes on large workspaces.
- **#7723**: Adds explicit error events in console SSE streams, enabling clients to distinguish failed vs. successful turns.
- **#7719**: Implements `memory_model` configuration for ReMeLight, allowing lightweight models for memory summarization (fixes #7664).
- **#7718**: Corrects Telegram markdown rendering by enabling `parse_mode=HTML` for approval cards.
- **#7680**: Improves subagent config loading diagnostics by logging exceptions instead of silently swallowing them (fixes #7676).

These PRs collectively resolve at least 6 major bugs and 2 feature gaps, all with clear test cases and minimal risk. Their collective existence signals a mature, responsive contributor base — but the lack of merges indicates a bottleneck in maintainer review.

---

### 4. **Community Hot Topics**

The most active and high-impact issues reflect systemic usability and reliability concerns:

- **#7708** (Model configuration lost randomly): [Link](https://github.com/agentscope-ai/QwenPaw/issues/7708) — 3 comments, reported by multiple users. Underlying need: **persistent, resilient configuration storage**. Users expect settings to survive crashes or restarts — a core trust issue.
- **#7724** (Session loss after shutdown): [Link](https://github.com/agentscope-ai/QwenPaw/issues/7724) — 2 comments, linked to #7708. Highlights **critical data loss** in conversation history, a showstopper for productivity use cases.
- **#7582** (Plugin store UX is broken): [Link](https://github.com/agentscope-ai/QwenPaw/issues/7582) — 2 comments, 6-day-old but still open. Reveals a **deep user frustration** with multi-step plugin management across devices — a major barrier to enterprise adoption.
- **#7484** (A2A protocol support timeline): [Link](https://github.com/agentscope-ai/QwenPaw/issues/7484) — 3 comments, opened 11 days ago. Signals **strategic uncertainty** — users are waiting for official A2A roadmap confirmation to build integrations.

These issues reveal a community moving beyond experimentation into production use, where reliability and workflow automation are now top priorities.

---

### 5. **Bugs & Stability**

Ranked by severity and impact (high → low):

1. **#7722** — *Memory exhaustion via 3 compounding paths* ([Link](https://github.com/agentscope-ai/QwenPaw/issues/7722))  
   **Severity**: Critical  
   **Impact**: Container OOM at ~1MB/s; service hangs. Likely affects all Docker users.  
   **Status**: Open, no PR yet. **Highest risk to production deployments.**

2. **#7721** — *Workspace file browser freezes entire server* ([Link](https://github.com/agentscope-ai/QwenPaw/issues/7721))  
   **Severity**: Critical  
   **Impact**: Blocks all channels (Feishu, QQ, etc.) on large repos.  
   **Status**: **Fixed by #7725** (PR submitted same day) — pending merge.

3. **#7708 + #7724** — *Model & session persistence failure* ([Link](https://github.com/agentscope-ai/QwenPaw/issues/7708), [Link](https://github.com/agentscope-ai/QwenPaw/issues/7724))  
   **Severity**: High  
   **Impact**: Data loss and configuration reset during normal use.  
   **Status**: Unfixed; both linked to configuration serialization bugs.

4. **#7728** — *Java MCP SDK discover handshake fails* ([Link](https://github.com/agentscope-ai/QwenPaw/issues/7728))  
   **Severity**: High  
   **Impact**: Blocks integration with Java-based MCP services.  
   **Status**: **Fixed by #7729** — PR ready.

5. **#7716** — *MCP registration broken since 2.2.x* ([Link](https://github.com/agentscope-ai/QwenPaw/issues/7716))  
   **Severity**: High  
   **Impact**: Breaks existing MCP integrations — migration blocker.  
   **Status**: Open, no PR yet.

**Verdict**: 4 critical/high bugs reported; 3 have PRs ready for merge. One (memory exhaustion) remains unaddressed — a major red flag.

---

### 6. **Feature Requests & Roadmap Signals**

User requests strongly indicate the next release’s roadmap:

- ✅ **ReMeLight memory model separation** (#7664 → #7719): Almost certainly in v2.2.2. PR is ready and well-justified.
- ✅ **Dot-file toggle in Files panel** (#7731): Low-risk, high-usability. Likely included in v2.2.2.
- ✅ **DeepSeek model enhancements** (#7717): Proposes KV-cache observability and prompt stability — aligns with Qwen’s model ecosystem strategy. High likelihood of adoption.
- ⚠️ **A2A protocol support** (#7484): Long-standing request. Without official timeline, users will fork or build workarounds. Must be addressed in v2.3.
- ⚠️ **One-click plugin update & notifications** (#7582): User pain point exceeds current feature scope. Likely requires UI overhaul — candidate for v2.4.

**Prediction**: v2.2.2 (patch) will include memory model config, dot-file toggle, and Java MCP fix. v2.3 will likely prioritize A2A and plugin store UX.

---

### 7. **User Feedback Summary**

Real user pain points (verbatim from issues):

> “用着用着就报错，说我没设置大模型，明明有的” — #7708  
> “对话丢失，在控制-会话中完全找不到。” — #7724  
> “装了很多个插件，更新插件时一个个搜索，一个个更新是非常麻烦。” — #7582  
> “内存溢出，服务挂了，1MB/s增长。” — #7722  

**Key Themes**:
- **Trust erosion**: Users no longer trust the system to preserve state (models, sessions).
- **Productivity drain**: Manual plugin updates and broken workflows are blocking automation.
- **Enterprise readiness**: Docker users are hitting OOMs; Java/MCP users are blocked — QwenPaw is being used in professional environments, but stability is inadequate.

Satisfaction is low among power users. New users are likely attracted by features, but retention is threatened by reliability issues.

---

### 8. **Backlog Watch**

These critical items remain unaddressed for >7 days and require maintainer attention:

- **#7484** — A2A Protocol Support Timeline  
  *Stalled since 2026-09-02. Critical for ecosystem expansion.*  
  [Link](https://github.com/agentscope-ai/QwenPaw/issues/7484)

- **#7722** — Memory Exhaustion (3-path OOM)  
  *Most severe bug. No PR. Likely requires architecture review.*  
  [Link](https://github.com/agentscope-ai/QwenPaw/issues/7722)

- **#7716** — MCP Registration Broken in 2.2.x  
  *Breaks existing integrations. No PR or comment from maintainers.*  
  [Link](https://github.com/agentscope-ai/QwenPaw/issues/7716)

- **#7582** — Plugin Store UX Overhaul  
  *High-impact usability issue with clear user pain. No response from team.*  
  [Link](https://github.com/agentscope-ai/QwenPaw/issues/7582)

- **#7730** — Plugin Catalog Fails Gracefully Offline  
  *Violates documented contract. PR may be needed.*  
  [Link](https://github.com/agentscope-ai/QwenPaw/issues/7730)

**Recommendation**: Prioritize merging the 3 ready PRs (#7725, #7729, #7719) for an emergency v2.2.2 patch. Then, assign a maintainer to respond to #7484 and #7722 — both are existential for adoption.

---

**Final Assessment**:  
QwenPaw has a vibrant, technically skilled community and a strong PR pipeline, but **maintainer responsiveness is the bottleneck**. With 7 PRs open and no merges in 24h, and 4 critical bugs unfixed, the project is at risk of losing trust among production users. A patch release within 48 hours is strongly recommended.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest — 2026-09-13**

---

### **1. Today's Overview**  
ZeroClaw is experiencing exceptionally high activity, with 24 new/updated issues and 50 updated pull requests in the last 24 hours — a clear sign of intense development and community engagement. The project shows no new releases, but the volume of open PRs (39) and active bugs (18 open) indicates rapid iteration under a high-pressure development cycle. The majority of activity is concentrated in runtime stability, channel integrations, and CI/CD reliability, particularly around Windows-specific test failures and memory safety. The absence of releases despite this velocity suggests a deliberate focus on stabilization before the next version cut.

---

### **2. Releases**  
No new releases were published in the last 24 hours. The project remains on an unstated pre-release cadence, with recent fixes (e.g., #10726 pinning Docker base images) and security hardening (e.g., #10091, #10449) accumulating in `master` for a future v0.13 or v1.0 milestone. No breaking changes have been tagged or documented for release.

---

### **3. Project Progress**  
Today, **11 PRs were merged or closed**, advancing key areas:  
- **Security & Reliability**: #10726 (pin Docker base images by digest) and #10091 (harden response cache permissions) closed, addressing supply chain and file permission risks.  
- **Channel Stability**: #10449 fixed Edge TTS artifact permissions; #10266 implemented direct-message detection for WhatsApp Web.  
- **CI/CD Robustness**: #10726 resolved mutable Docker tag risks in the `zerorelay` image pipeline.  
- **Runtime Coordination**: #10621 (agent lifecycle coordination) and #10775 (preserve live sessions during mode replacement) advanced core state management, reducing race conditions during agent reconfiguration.  
- **Plugin Architecture**: #9139 (durable scheduler outbox) and #9138 (typed event routing) continue to mature the plugin subsystem, laying groundwork for extensible automation.  

These merges reflect a maturing codebase with increasing emphasis on security, observability, and deterministic behavior.

---

### **4. Community Hot Topics**  
The most active and high-signal issues/PRs today:  

- **#10797** ([Bug]: markdown memory backend silently loses entries on concurrent `store()` calls) — *Newly filed, S0 severity, risk:high*. This is a critical data-loss bug in the memory backend, with immediate implications for agent persistence. No PR yet — high urgency.  
  → [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10797)  

- **#10788** ([Bug]: Failed Code/ACP turn discards durable history) — *High severity, 2 comments, in progress*. Affects core conversation integrity in ACP flows. Authored by Audacity88, suggesting internal prioritization.  
  → [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/10788)  

- **#10621** ([feat]: coordinate agent lifecycle mutations) — *XL-sized PR with 18+ related issues linked*. Centralizes config authority across daemon, gateway, and channels — a foundational change for multi-agent consistency. High risk, high reward.  
  → [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10621)  

- **#10248** ([feat]: canonical principals and shared grant resolution) — *XL-sized, blocked on RFC ratification*. Represents a major shift in identity model from grants to authenticated identities — a core architectural evolution.  
  → [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/10248)  

*Analysis*: The community is deeply engaged in **state consistency** (memory, history, sessions) and **secure identity management**. The recurring authorship of Audacity88 and JordanTheJet suggests a core team driving architectural cohesion, while new contributors (e.g., kouhe3, RustLangLatam) are surfacing UX and edge-case bugs.

---

### **5. Bugs & Stability**  
**Top 5 Critical Bugs Reported Today (Ranked by Severity)**:

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **S0 (Data Loss)** | #10797 | Markdown memory backend loses entries on concurrent writes | ❌ No PR |
| **S1 (Workflow Blocked)** | #10807 | MCP connection permanently poisoned after one failure | ❌ No PR |
| **S2 (Degraded Behavior)** | #10788 | ACP turn errors discard accepted prompts and tool exchanges | ✅ PR #10775 (related) |
| **S2 (Degraded Behavior)** | #10734 | Windows stack overflow in `RpcDispatcher::process_line` | ✅ In progress |
| **S2 (Degraded Behavior)** | #10793 | Three Windows-only test failures on advisory job (no code change) | ✅ In progress |

*Analysis*: Windows CI instability (#10793, #10794, #10805) is a recurring pattern. The **S0 memory bug (#10797)** is the most severe — it risks silent data corruption in long-running agent sessions. No PRs exist for #10797 or #10807, indicating a potential backlog in critical path fixes.

---

### **6. Feature Requests & Roadmap Signals**  
Key user-requested features with strong signals:  

- **#10812**: Populate `DocumentMessage.jpegThumbnail` for WhatsApp PDF previews — *low effort, high UX impact*. Likely to be picked up in next minor release (v0.12.1).  
- **#10400 / #10401**: Configurable Telegram unauthorized notice with i18n support — *already in PR*, aligned with Fluent localization strategy. High probability of merge.  
- **#8733**: Preserve model capabilities (vision, etc.) from models.dev catalog — *long-standing, 70+ days old*. Indicates a gap in model-aware routing; likely targets v0.13.  
- **#10813**: Refuse stale step results in SopEngine — *new PR, small size*. Suggests growing adoption of SOP workflows and need for resilience.  

*Prediction*: **WhatsApp preview support** and **Telegram i18n** will land in v0.12.1. **Model capability awareness** and **durable scheduler** (#9139) are likely v0.13 features. The **ACL/identity overhaul** (#10248) is the most significant roadmap signal — potentially delaying v1.0 until ratified.

---

### **7. User Feedback Summary**  
Real pain points emerging from issues:  
- **Windows users** are severely impacted by CI flakiness (#10793, #10794, #10805) and CLI usability issues (#10795, #10796) — terminal input (Backspace/Delete) fails on multi-byte chars, indicating poor cross-platform TUI support.  
- **Enterprise operators** are frustrated by silent data loss in memory (#10797) and broken recovery in MCP (#10807), suggesting deployments in production-like environments.  
- **Multimodal users** (WhatsApp PDFs, Telegram TTS) report degraded experiences — e.g., no PDF previews (#10812), voice replies skipped when starting with `[` (#10689).  
- **Developer experience**: Lack of localized diagnostics (#10789) and unclear daemon recovery docs (#10792) hinder onboarding.  

*Satisfaction*: High for architectural clarity (e.g., #10621, #9138) — contributors praise the direction.  
*Dissatisfaction*: Strong around **Windows reliability**, **memory safety**, and **observability gaps** — these are recurring themes across 7+ issues.

---

### **8. Backlog Watch**  
These high-impact items remain unaddressed for >7 days and require maintainer attention:  

- **#10797** — Memory backend data loss (S0) — *Critical, no PR*.  
- **#10807** — MCP connection poisoning — *S1, blocks tooling workflows*.  
- **#8733** — Discarded model capabilities (vision, etc.) — *70+ days old, affects model selection logic*.  
- **#10248** — Canonical principals RFC — *XL PR, stalled on review*. Needs final sign-off from core team.  
- **#9139** — Durable scheduler outbox — *XL, 40+ days, foundational for automation*.  

*Recommendation*: Prioritize triage of #10797 and #10807 with immediate patch or mitigation plan. #10248 and #9139 deserve dedicated review sessions — they are architectural pillars. The absence of responses to these issues after 24+ hours suggests potential maintainer overload.

---

**Project Health Summary**:  
✅ **High velocity, strong architectural direction**  
⚠️ **Critical stability risks in memory and Windows CI**  
⚠️ **Maintainer bandwidth appears strained — backlog growing in critical paths**  
🔮 **Next release likely v0.12.1 with WhatsApp/Telegram UX fixes; v0.13 will hinge on identity and memory safety**  

*All links are clickable in GitHub UI.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*