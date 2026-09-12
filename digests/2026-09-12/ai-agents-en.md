# OpenClaw Ecosystem Digest 2026-09-12

> Issues: 494 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-12 03:08 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

**OpenClaw Project Digest — 2026-09-12**

---

### **1. Today's Overview**  
OpenClaw is experiencing exceptionally high activity, with 494 issues and 500 pull requests updated in the last 24 hours, indicating intense development and user engagement. The project released **v2026.9.4** today, which includes critical rollback safeguards but also introduced new regressions, triggering a wave of urgent bug reports. With 271 open issues and 292 open PRs, the project remains in a high-throughput, high-pressure state, with a notable concentration of P0/P1 severity issues around update reliability, session state corruption, and agent crash loops. The community is actively diagnosing and patching systemic instability introduced in recent releases, particularly affecting multi-agent and Docker-sandboxed deployments.

---

### **2. Releases**  
**v2026.9.4** was released on 2026-09-12 with one key enhancement:  
- **Recover from compatible failed updates**: The update system now retains the previous package and restores its configuration and services if schema checks indicate rollback is safe. Database migrations still require pre-update backups. *(#140339)*  

**Critical Migration Notes**:  
- This release **does not include** fix #144208 (merged 2026-09-10), which resolves a handoff lease conflict that blocks config writes. This omission renders v2026.9.4 **unusable for users with legacy v1 handoff leases**, triggering immediate failures (#144742).  
- Users upgrading from 2026.9.3 to 2026.9.4 report deterministic failures on macOS (`Package rollback launcher backup changed`) and Windows (`runtime-verification-failed`), due to symlink mode fingerprint mismatches and malformed canary paths (#145072, #144581).  
- **Recommendation**: Avoid upgrading to v2026.9.4 until #144208 is backported. Users on 2026.9.3 should remain on it until a patch is issued.

---

### **3. Project Progress**  
Today, **208 PRs were merged or closed**, with significant progress in:  
- **Update & Migration Stability**: PRs #145043 (fixes Codex migration crash loops), #145501 (recovers from bad pack header failures), and #145426 (admits healthy agents despite divergent DB copies) directly address critical upgrade failures.  
- **CLI Input Validation**: A wave of small, high-impact fixes (#145539, #145538, #145537, #145534, #145524, #145532, #145523) now reject blank/whitespace inputs for critical flags (`--bundle`, `--timeout`, `--facing`, etc.), preventing silent misconfigurations.  
- **UI/UX Polish**: Multiple PRs improve accessibility and usability: Markdown attachments rendered in sidebar (#145555), saved messages recovered after browser closure (#145545), drag-to-resize chat composer (#145093), and removal of unnecessary framing in fullscreen dashboards (#145542).  
- **Multi-Platform Support**: Wear OS and Android fixes (#144987, #144387, #144993, #145004) improve reply binding, text readability, and UI layout on small screens.  

**Notable Feature Advance**:  
- Activity feed now shows Git changes and PR previews (#145530), improving traceability of agent behavior to code changes.

---

### **4. Community Hot Topics**  
Top 5 most active issues and PRs (by comments/reactions):

1. **#144742**: *“2026.9.4 ships without #144208: a retained version-1 handoff lease row fails every config write”* — **7 comments**  
   ➤ **Analysis**: This is the most urgent systemic issue — a release shipped without a critical fix, breaking upgrades for legacy users. It’s a **release process failure** with high impact.  
   ➤ [Link](https://github.com/openclaw/openclaw/issues/144742)

2. **#97616**: *“OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation”* — **15 comments, 1 👍**  
   ➤ **Analysis**: A long-standing process hygiene issue causing runtime degradation. Repeatedly reported since June — indicates a fundamental flaw in subprocess lifecycle management.  
   ➤ [Link](https://github.com/openclaw/openclaw/issues/97616)

3. **#142476**: *“cron session reaper opens every agent database with synchronous PRAGMA integrity_check, blocking event loop 14–76s every few minutes”* — **8 comments**  
   ➤ **Analysis**: A scalability killer in multi-agent gateways (632 agents). Synchronous DB checks on the main event loop are unacceptable in production.  
   ➤ [Link](https://github.com/openclaw/openclaw/issues/142476)

4. **#145554**: *“fix(models): default Fable and Astra to medium effort”* — **PR with no comments but authored by core maintainer**  
   ➤ **Analysis**: A subtle but strategic change — lowering reasoning effort for high-cost models signals cost-awareness and operational maturity. Likely part of a broader optimization push.  
   ➤ [Link](https://github.com/openclaw/openclaw/pull/145554)

5. **#145043**: *“fix(update): prevent stale Codex migrations from blocking upgrades”* — **PR #145043 (XL, P1)**  
   ➤ **Analysis**: Fixes #123326, a persistent crash loop during multi-agent upgrades. High community traction — this PR is likely to be merged soon and will resolve a major blocker.  
   ➤ [Link](https://github.com/openclaw/openclaw/pull/145043)

---

### **5. Bugs & Stability**  
**Top 5 Critical Bugs Reported Today (P0/P1)**:

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 P0 | #144742 | v2026.9.4 fails config writes due to missing #144208 fix | ❌ No — release bug |
| 🔴 P0 | #145510 | Update fails at “runtime-verification-failed” on Windows 2026.9.3 → 2026.9.4 | ❌ No |
| 🔴 P0 | #144911 | MCP server init timeout crashes entire Gateway via unhandled promise rejection | ❌ No |
| 🔴 P0 | #145192 | 2026.9.2 → 2026.9.4 update fails at candidate-Doctor due to incompatible handoff lease | ❌ No |
| 🔴 P0 | #142476 | Cron reaper blocks event loop for 76s every few minutes on 632-agent gateway | ✅ PR #145426 addresses related DB health issues |

**Other High-Impact Crashes**:  
- #145072 (macOS symlink mode mismatch during npm update)  
- #144581 (Windows malformed canary path)  
- #140908 (EACCES on systemctl — blocks all post-upgrade migrations)  

**Trend**: 8+ P0 issues directly tied to **update/upgrade mechanics**, suggesting systemic fragility in the deployment pipeline. **No fix PRs exist for 5/8 top P0s** — this is a critical maintenance bottleneck.

---

### **6. Feature Requests & Roadmap Signals**  
**Top Requested Features (High Signal)**:

- **#40786**: *“Add .gitignore-like exclude patterns to backup CLI”* — 12 comments, 1 👍  
  ➤ **Predicted**: High likelihood in v2026.9.5. Backups are bloated; this is a low-effort, high-value QoL feature.  
  ➤ [Link](https://github.com/openclaw/openclaw/issues/40786)

- **#9016**: *“Expose OpenRouter usage cost to agent runtime”* — 8 comments, 1 👍  
  ➤ **Predicted**: Likely in v2026.10.x. Cost transparency is critical for enterprise users. Already supported by OpenRouter API.  
  ➤ [Link](https://github.com/openclaw/openclaw/issues/9016)

- **#126876**: *“Accessibility audit: 13 screen reader barriers in setup”* — 6 comments, 0 👍  
  ➤ **Predicted**: Will be prioritized after v2026.9.5 patch cycle. First blind user report — strong ethical and compliance signal.  
  ➤ [Link](https://github.com/openclaw/openclaw/issues/126876)

- **#145093**: *“Drag-to-resize chat composer and column”* — 0 comments but PR open  
  ➤ **Predicted**: Will ship in v2026.9.5. UI flexibility is clearly a user priority — this is a “quiet winner” feature.  
  ➤ [Link](https://github.com/openclaw/openclaw/pull/145093)

**Emerging Signal**: User demand for **per-agent auth tokens** (#92367) and **content-based prompt injection scanning** (#79168) remains active — both may be scheduled for Q4 2026.

---

### **7. User Feedback Summary**  
**Pain Points (Direct Quotes & Themes)**:  
> *“Update fails at ‘global install swap’ — rollback restores package tree but reports ‘recovery is unverified’.”* — #144712  
> *“Telegram replies stuck in send_attempt_started and lost on restart.”* — #126246  
> *“iOS app lags badly when ‘show reasoning and tool activity’ is enabled.”* — #124759  
> *“MCP server timeout crashes the entire Gateway.”* — #144911  
> *“I’m blind and can’t install OpenClaw because VoiceOver doesn’t announce form fields.”* — #126876  

**Sentiment**:  
- **Frustration**: Dominant among multi-agent and Docker users. Upgrade failures are not edge cases — they’re systemic.  
- **Hope**: UI/UX improvements (drag-resize, accessibility, Markdown rendering) are receiving positive implicit signals — users are investing time to report details.  
- **Distrust**: The v2026.9.4 release without #144208 has eroded confidence in release quality. Users are now manually auditing release notes before upgrading.  

**Use Case Highlight**:  
- **Enterprise Gateway (632 agents)**: #142476 confirms OpenClaw is being deployed at scale — but performance bottlenecks are now production-impacting.  
- **Accessibility**: #126876 is the first public, structured accessibility audit — a landmark for open-source AI tools.

---

### **8. Backlog Watch**  
**Critical Long-Unaddressed Items Needing Maintainer Attention**:

| Issue | Age | Status | Why It Matters |
|-------|-----|--------|----------------|
| #97616 | 75 days | Open | Zombie process leak degrades long-running agents — affects all users. No assignee. |
| #49876 | 188 days | Closed but stale | LLM hallucinates outputs on tool failures — **trust/safety crisis**. No fix applied. |
| #79168 | 128 days | Closed but stale | No content-level prompt injection scanning — critical security gap. |
| #92367 | 123 days | Closed but stale | Request for scope-bound auth tokens + per-agent dispatch lanes — foundational for multi-tenant deployments. |
| #126876 | 54 days | Open | First blind user audit — 13 barriers. No maintainer response. Ethical obligation. |

**Assessment**:  
The backlog reveals a **growing gap between feature velocity and stability/audit depth**. While PRs flood in for UI polish and patch fixes, foundational security, process hygiene, and accessibility issues remain unassigned. This risks long-term adoption in regulated or enterprise environments.

---

**Final Assessment**:  
OpenClaw is a high-velocity, community-driven project with exceptional responsiveness to UI/UX and patch-level bugs. However, **release integrity and systemic stability are in crisis**. The v2026.9.4 release is broken for legacy users, and critical P0 issues lack fixes. Maintainers must prioritize **release process audits** and **assign backlog items** before the next release. Otherwise, trust erosion will outpace feature adoption.

---

## Cross-Ecosystem Comparison

**Cross-Project Comparison Report: Personal AI Agent Ecosystem — 2026-09-12**

---

### **1. Ecosystem Overview**  
The open-source personal AI agent ecosystem is undergoing rapid maturation, characterized by intense development velocity across core platforms, but with diverging priorities between feature innovation and systemic stability. Projects like OpenClaw, Hermes Agent, and QwenPaw are driving feature-rich, multi-agent orchestration capabilities, while ZeroClaw focuses on enterprise-grade security and isolation. However, a persistent pattern of release instability, unaddressed critical bugs, and accessibility gaps threatens trust and adoption — particularly in production environments. The community is increasingly signaling that **reliability, security, and cost efficiency** now outweigh feature novelty as the primary adoption drivers.

---

### **2. Activity Comparison**

| Project         | Open Issues | Open PRs | Latest Release       | Release Status       | Health Score* |
|-----------------|-------------|----------|----------------------|----------------------|---------------|
| OpenClaw        | 271         | 292      | v2026.9.4 (2026-09-12) | **Broken for legacy users** | 🔴 2/10       |
| Hermes Agent    | 46          | 32       | v0.21.2 (2026-09-11)  | **Critical patch, stable** | 🟢 8/10       |
| QwenPaw         | 14+ (new)   | 31       | v2.2.1 (2026-09-11)   | **Stable, high bug influx** | 🟡 5/10       |
| ZeroClaw        | 39          | 48       | v0.8.5 (unchanged)   | **Stabilizing, no release** | 🟠 6/10       |
| IronClaw        | 0           | 0        | —                    | **Inactive**         | 🔴 0/10       |

> *Health Score (1–10): Weighted by release integrity, critical bug count, backlog triage, and community sentiment. P0 bugs without PRs reduce score by 2–4 points.*

---

### **3. OpenClaw's Position**  
OpenClaw dominates in **community scale and velocity**, with 494 issues and 500 PRs updated in 24 hours — far exceeding all peers. Its technical approach emphasizes **multi-agent gateways, Docker sandboxing, and CLI-driven deployment**, making it the de facto reference for enterprise-scale agent orchestration. However, its **release integrity is critically compromised** — v2026.9.4 shipped without a mandatory fix (#144208), breaking legacy upgrades and triggering 8+ P0 bugs. Compared to Hermes (focused on secure multi-profile isolation) and QwenPaw (targeting cost-aware agent routing), OpenClaw’s architecture is more complex and less resilient to state corruption. Its community is the largest, but trust erosion is accelerating — users are now manually auditing releases, a sign of declining confidence.

---

### **4. Shared Technical Focus Areas**  
Three cross-project requirements are emerging as non-negotiable:

| Requirement | Projects Affected | Specific Needs |
|-----------|-------------------|----------------|
| **Secure Multi-Tenant Isolation** | Hermes, ZeroClaw, QwenPaw | Profile-scoped credentials (#92758, #108716), per-agent auth tokens (#92367), OIDC principal enforcement (#8289) |
| **Cost-Aware Agent Orchestration** | QwenPaw, OpenClaw | Per-agent model routing (#7501), default effort lowering (#145554), token compaction (#10780), OpenRouter cost exposure (#9016) |
| **Stable Session & State Management** | OpenClaw, QwenPaw, ZeroClaw | Ghost sessions (#7698), stopped tasks still running (#7567), zombie processes (#97616), cron lock contention (#142476) |

All four active projects show alignment on these three pillars — indicating a market-wide shift from “agent capability” to “agent reliability.”

---

### **5. Differentiation Analysis**  

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|---------|----------|--------------|---------|----------|
| **Target Users** | Enterprise gateways (600+ agents), CLI-first DevOps | Multi-user teams, SSO-requiring enterprises | Individual power users → team Hub adopters | Security/compliance-focused enterprises |
| **Architecture** | Monolithic gateway with Docker sandbox, DB-driven state | Profile-scoped SQLite, isolated MCP tools | Subagent hierarchy, Tauri desktop, Hub-based | RPC-first, OIDC-native, daemon-centric |
| **Feature Focus** | Scale, update rollback, CLI polish | Security hardening, profile isolation, cron stability | Model routing, cost control, bot integrations | Identity isolation, token budgeting, multimodal reliability |
| **UX Priority** | CLI + dashboard polish | Dashboard consistency | Desktop UX, mobile readability | CLI reliability, zero-config onboarding |
| **Risk Profile** | High: systemic upgrade fragility | Medium: credential leaks, profile bugs | Medium: session desync, task corruption | High: Windows instability, opaque config regressions |

**Key Insight**: OpenClaw and ZeroClaw are architecturally opposed — one scales via monolithic gateways, the other via isolated daemons. Hermes and QwenPaw both target team use but diverge: Hermes enforces security boundaries, QwenPaw optimizes cost and workflow.

---

### **6. Community Momentum & Maturity**  

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration (Velocity > Stability)** | OpenClaw, QwenPaw | High PR volume, frequent releases, but critical regressions dominate. Community is engaged but frustrated. |
| **Stabilizing with Strategic Focus** | Hermes Agent, ZeroClaw | Fewer PRs but higher signal-to-noise. Focused on security, isolation, and reliability. No new releases, but high-quality fixes. |
| **Inactive / Declining** | IronClaw | Zero activity. Effectively abandoned. |

**Maturity Signal**: Hermes and ZeroClaw are transitioning from “feature builder” to “trust builder.” OpenClaw and QwenPaw remain in “innovation mode” — but their failure to resolve foundational bugs risks becoming the next IronClaw.

---

### **7. Trend Signals**  

From community feedback, five industry-wide trends are clear:

1. **“Reliability > Features”** — Users are abandoning platforms with silent state corruption (#7567, #142476, #97616). Trust is the new Moat.  
2. **Cost Transparency is Table Stakes** — Per-agent model routing (#7501), token compaction (#10780), and OpenRouter cost exposure (#9016) are now expected, not optional.  
3. **Multi-Tenant Security is Non-Negotiable** — OAuth RFC compliance (#92758), write-restricted auth files (#108716), and OIDC (#8289) are required for enterprise adoption.  
4. **Accessibility is an Adoption Gatekeeper** — First blind user audit (#126876) triggered urgent signals; no project can ignore WCAG compliance.  
5. **Desktop UX is a Competitive Differentiator** — Drag-resize (#145093), session persistence (#145545), and config retention (#7708) are now key differentiators for personal use.

**For AI Agent Developers**: Prioritize **state integrity**, **cost control**, and **security isolation** before adding new tools or models. The market has moved beyond “can it do X?” to “can I trust it to not break my workflow?”  

--- 

**Final Note**: The ecosystem is bifurcating — between **high-velocity but fragile** platforms (OpenClaw, QwenPaw) and **slow, deliberate, secure** ones (Hermes, ZeroClaw). The winner will not be the most feature-rich, but the most *predictable*.

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest — 2026-09-12**

---

### **1. Today's Overview**  
Hermes Agent is experiencing intense development activity, with 50 issues and 50 pull requests updated in the last 24 hours — a clear sign of rapid iteration and community engagement. The project released a critical patch (v0.21.2) addressing session state fragility, and today saw an unprecedented surge in fixes targeting profile isolation, MCP tool scoping, and security vulnerabilities. With 32 open PRs and 46 open issues, the project remains highly active but faces mounting technical debt in concurrency, credential handling, and multi-profile consistency. Overall health is strong, though stability concerns are escalating in complex deployment scenarios.

---

### **2. Releases**  
**v2026.9.11 (v0.21.2)** — Patch Release (Sep 11, 2026)  
This patch resolves a critical regression introduced in v0.21.0, where concurrent writes to `state.db` caused lock contention and session state corruption under high-load or multiplexed gateway scenarios. The fix stabilizes SQLite connection handling and enforces stricter write serialization.  
- **No breaking changes** — backward compatible.  
- **Migration note**: Users running Hermes in multi-process or containerized environments (especially with Docker or SSH-isolated backends) should upgrade immediately to avoid silent session state loss.  
🔗 [Release Notes](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.11)

---

### **3. Project Progress**  
Today, **18 PRs were merged/closed**, primarily focused on **profile scoping and security hardening** under multiplexed gateway mode. Key advancements:  
- **MCP Tool Isolation**: PRs #104534 and #90027 fully isolate MCP tool registration and connection state per profile, fixing cross-profile credential leakage.  
- **Platform Adapter Scoping**: Multiple PRs (#100609, #99471, #102439, #102542, #102097, #104276, #104279, #103871, #108748) extended profile-scoped configuration to LINE, Matrix, Slack, Discord, Telegram, and OpenAI-compatible routes, ensuring config isolation in multi-user deployments.  
- **Cron & Kanban Stability**: PR #108763 fixes transient block misrouting; PR #108772 resolves AB-BA deadlock in cron heartbeat logic.  
- **Model Metadata Resilience**: PR #108765 prevents malformed context-length cache entries from crashing agent initialization.  
- **Security Fixes**: PR #108766 blocks sensitive query parameters in `web_extract`; PR #108767 enforces read-only guards on external skills.  

These merges signal a major shift toward **secure, multi-tenant architecture** — a core roadmap goal.

---

### **4. Community Hot Topics**  
The most active issues reflect deep user frustration with **profile isolation failures** and **security blind spots**:  

- **#66616** [OPEN] *Skills index is stale or degraded* (199 comments)  
  > Users rely on `/docs/skills-index.json` for tool discovery; its 29.8h staleness breaks automation workflows. Underlying need: **real-time, resilient skill registry with auto-recovery**.  
  🔗 https://github.com/NousResearch/hermes-agent/issues/66616  

- **#67605** [CLOSED] *Dashboard profile switch is partial* (12 comments)  
  > Profile switching in desktop/dashboard returns a hybrid state — not the selected profile. This is a **core UX failure** for multi-user teams.  
  🔗 https://github.com/NousResearch/hermes-agent/issues/67605  

- **#92758** [OPEN] *MCP OAuth fails due to dropped RFC 9207 iss parameter* (6 comments)  
  > Critical for enterprise SSO integrations (e.g., Resend). Users cannot authenticate via compliant identity providers.  
  🔗 https://github.com/NousResearch/hermes-agent/issues/92758  

- **#108761** [OPEN] *web_extract forwards opaque credential query params* (2 comments)  
  > Security bug — even with sensitive param detection, opaque values slip through. High risk for credential exfiltration.  
  🔗 https://github.com/NousResearch/hermes-agent/issues/108761  

- **#108716** [OPEN] *HERMES_HOME/auth.json remains writable despite documented deny contract* (1 comment)  
  > Direct threat to credential integrity. This is a **critical security regression**.  
  🔗 https://github.com/NousResearch/hermes-agent/issues/108716  

**Analysis**: The top issues reveal systemic gaps in **multi-profile state isolation** and **credential hygiene** — users are deploying Hermes in enterprise environments and hitting hard security and consistency walls.

---

### **5. Bugs & Stability**  
Top severity bugs reported today (ranked by impact):  

1. **P1: Vision tools vanish after first probe** (#87654)  
   > `vision_analyze`/`browser_vision` disappear silently due to cached `_AuxProbeClientStub`. Breaks multimodal workflows.  
   🔗 https://github.com/NousResearch/hermes-agent/issues/87654  

2. **P1: MCP OAuth fails on RFC 9207-compliant servers** (#92758)  
   > Blocks enterprise SSO integrations. No fix PR yet.  

3. **P2: Cron jobs killed by SSH idle-exit watchdog** (#107485)  
   > Long-running cron tasks terminated mid-execution. Affects automation pipelines.  

4. **P2: Windows `hermes update` hangs forever** (#108735)  
   > PowerShell profile loading causes infinite hang during `uv` install. Blocks Windows users.  
   🔗 https://github.com/NousResearch/hermes-agent/issues/108735  

5. **P2: File Write Safety: auth.json is writable** (#108716)  
   > Direct security breach. Contradicts documented policy.  

**Fix PRs exist for**:  
- `web_extract` credential leak → #108766  
- cron deadlock → #108772  
- context-length cache crash → #108765  
- skills provenance → #108767  
- model headers on Kimi → #108769  

**Unaddressed criticals**: #87654 (vision), #92758 (OAuth), #107485 (cron kill), #108716 (auth.json) — all require urgent triage.

---

### **6. Feature Requests & Roadmap Signals**  
Top requested features with strong community signals:  

- **#104102**: *Durable approval-decision audit log* (2 comments)  
  > “Who approved this file write?” — essential for compliance (GDPR, SOC2). High probability for v0.22.  

- **#91813**: *Bot Mode: live session transcript for group activity* (4 comments, 2 👍)  
  > Needed for supervising multi-agent collaboration. Likely candidate for v0.22.  

- **#106807**: *Deterministic event hooks between Bots* (1 comment)  
  > Enables adversarial review workflows — signals move toward **orchestrated agent teams**.  

- **#47809**: *Quick jump to conversation segments (like DeepSeek)* (1 comment)  
  > UX enhancement for long sessions. High usability ROI — likely in v0.23.  

- **#86266 & #108751**: *Equalize pane sizes / double-click sash distribution* (2 comments)  
  > Desktop UX refinement — low effort, high satisfaction. Almost certainly in next minor.  

**Prediction**: v0.22 will focus on **auditability, bot coordination, and security hardening**. v0.23 will likely deliver enhanced desktop UX and conversation navigation.

---

### **7. User Feedback Summary**  
**Pain Points**:  
- **Enterprise users**: “We can’t use Hermes in production because profile switching doesn’t work” (#67605, #92758).  
- **Automation engineers**: “Cron jobs die silently when SSH sessions time out” (#107485).  
- **Security teams**: “Herms writes secrets to disk even when configured to deny it” (#108716).  
- **Windows users**: “Update hangs forever — we can’t deploy” (#108735).  
- **Vision tool users**: “My multimodal agent just stopped working — no error, no warning” (#87654).  

**Satisfaction Signals**:  
- Praise for rapid PR merges on profile scoping (#100609, #104276) — users feel heard.  
- Appreciation for patch release speed after v0.21.0 instability.  
- Positive sentiment around “skills external_dirs” labeling (#108767) — improves transparency.  

**Overall**: Users are **frustrated but loyal** — they see Hermes as the most capable open-source agent framework, but stability and security gaps are now blocking adoption.

---

### **8. Backlog Watch**  
These critical items have been open >30 days with no maintainer response:  

- **#66616**: Skills index degradation (199 comments, 56 days open) — **highest community urgency**.  
- **#87654**: Vision tools disappearing (27 days open) — **blocks core functionality**.  
- **#92758**: MCP OAuth RFC 9207 failure (20 days open) — **blocks enterprise auth**.  
- **#107485**: Cron killed by SSH idle-exit (2 days old, but critical) — **no PR yet**.  
- **#38617**: Windows `uv` install fails (90 days open) — chronic Windows pain point.  
- **#52440**: `model.allowlist` feature (90 days open) — requested by admins for compliance.  

**Recommendation**: Prioritize triage of #66616 and #87654 — both are **high-impact, high-visibility blockers**. The project’s credibility in production environments hinges on resolving these.

---

**Project Health Summary**:  
✅ **Strengths**: Rapid iteration, strong PR hygiene, excellent community contribution.  
⚠️ **Risks**: Security regressions, profile scoping gaps, and cron stability issues threaten enterprise adoption.  
🚀 **Opportunity**: With focused triage on top 5 backlog items, Hermes could become the first truly production-ready open-source AI agent platform.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

**QwenPaw Project Digest — 2026-09-12**

---

### **1. Today's Overview**  
QwenPaw is experiencing exceptionally high activity, with 23 new issues and 31 PR updates in the last 24 hours, signaling intense community engagement and rapid development momentum. The release of **v2.2.1 (stable)** has triggered a wave of bug reports and feature requests, particularly around model routing, subagent behavior, and UI/UX regressions. Activity is heavily concentrated in core agent functionality, multi-agent collaboration, and desktop/console stability, indicating a maturing product under heavy real-world use. The project remains in a high-velocity phase, with 14 PRs merged and a strong focus on both backend robustness and frontend polish.

---

### **2. Releases**  
**v2.2.1 (Stable)** — Released on 2026-09-11  
This release introduces critical enhancements and fixes, including:  
- **Model routing per agent**: Users can now configure independent model providers and fallback chains for each agent (#7501).  
- **Memory system upgrade**: ReMe (Reactive Memory Engine) has been enhanced with proactive review capabilities for long-term context management.  
- **Stability fixes**: Addressed critical regressions in session synchronization, subagent model inheritance, and PDF handling in multimodal pipelines.  
**Migration Notes**:  
- Users upgrading from v2.2.0 or beta versions should clear cached sessions if encountering ghost conversations (#7698).  
- Subagent model overrides (`subagent_model`) now correctly respect per-agent config — previously silently ignored (#7676, #7680).  
- **Breaking change**: `qwenpaw providers` CLI command has been removed; use `qwenpaw models` instead (#7706).  

[Release Notes](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.1)

---

### **3. Project Progress**  
**Top Merged/Closed PRs (14 total)**:  
- **#7680**: Fixed silent suppression of subagent model override errors — now logs agent ID and stack trace (#7676).  
- **#7590 & #7713**: Enhanced Telegram integration with native Rich Messages for Markdown tables (improving readability).  
- **#7652**: Restored accurate context window sizes from provider metadata, preventing premature context truncation.  
- **#7677**: Improved API validation — now returns 422 for non-finite inputs (e.g., NaN, Inf), aligning with HTTP standards.  
- **#7688**: Simplified session pagination — removed “Collapse List” in favor of “Load More” for smoother UX.  
- **#7699**: Hardened `.master_key` file permissions on load, improving security posture for multi-user deployments.  
- **#7696**: Added `qwenpaw hub --init-admin` CLI for bootstrap of first Hub admin without browser/SSH — critical for remote server deployments.  
- **#7702**: Introduced `bot-manager` plugin — unified management of WeChat, DingTalk, and other bot channels.  
- **#7704**: Moved chat files drawer to right side, improving left-side conversation focus (user-requested layout change).  

These merges reflect a strong focus on **model governance**, **multi-channel extensibility**, and **UX polish**.

---

### **4. Community Hot Topics**  
**Top 3 Most Engaged Issues/PRs**:  
1. **#7318: QwenPaw Hub Multi-Tenant Roadmap Discussion** — *26 comments, 4 upvotes*  
   > Community is actively shaping the future of team collaboration in QwenPaw. Key asks: admin roles, skill permissions, audit logs. This is the **central strategic thread** for enterprise adoption.  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/7318)  

2. **#7676: subagent_model ignored — subagents inherit parent model** — *3 comments, linked to #4901*  
   > Critical for cost optimization: users want to route simple tasks (e.g., file reads) to cheap models (e.g., DeepSeek-Coder) while reserving expensive models for reasoning.  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/7676)  

3. **#7714: Allow custom default Loop mode** — *1 comment, but high signal*  
   > High-friction UX: users forced to manually switch from “默认” to “目标”/“任务” for every new session. Strong demand for personalization.  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/7714)  

**Analysis**: The community is shifting from personal assistant use to **team workflows** and **cost-efficient agent orchestration**. The Hub is no longer a “nice-to-have” — it’s the next product frontier.

---

### **5. Bugs & Stability**  
**Top Severity Bugs Reported Today**:  
1. **#7567: Stopped tasks continue running** — *Critical*  
   > User stops task → UI shows stopped → user submits new input → 409 error → refresh reveals original task still executing. **Data corruption risk**. No fix PR yet.  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/7567)  

2. **#7708: Model settings vanish randomly** — *High*  
   > Desktop users report losing configured LLM settings during normal use. Requires restart to reconfigure. Likely a serialization or config cache bug.  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/7708)  

3. **#7698: Ghost sessions & session-file desync** — *High*  
   > UI shows 9/10 sessions, but disk has no file for 9/10 — loads 9/9 instead. **Data loss risk**. Confirmed on Tauri desktop.  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/7698)  

4. **#7716: MCP connection broken since v2.2.x** — *High*  
   > Multi-Channel Protocol (MCP) registration fails — regression from v2.1.1b3. Impacts plugin ecosystem.  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/7716)  

5. **#7689: PDF blocks still sent to multimodal endpoints** — *Medium*  
   > Fixed for non-multimodal models, but OpenAI-compatible endpoints still receive malformed `{"type":"file"}` blocks → HTTP 400.  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/7689)  

**Note**: **#7567** and **#7708** are top-priority — both involve silent state corruption. No PRs yet to resolve them.

---

### **6. Feature Requests & Roadmap Signals**  
**High-Probability Features for v2.3**:  
- **Per-agent model routing** → Already merged (#7501), but **#7717** (DeepSeek-specific KV-cache observability) suggests deeper model tuning is next.  
- **Serply as web_search provider** → PR #7712 merged; likely to become default alternative to Tavily.  
- **Auto-compress long contexts in Loop mode** → #7679 requests `/compact` command — highly aligned with token cost concerns (#4901).  
- **Custom default Loop mode** → #7714 — almost certainly coming; users are fatigued by manual switching.  
- **Bot-manager plugin** → #7702 — signals roadmap shift toward **multi-platform bot orchestration** (WeChat, DingTalk, Telegram).  
- **History grouping for inter-agent chats** → #7710 — will likely be implemented to reduce “Uncategorized” noise.  

**Predicted v2.3 Focus**: *Cost efficiency*, *workflow automation*, and *multi-channel bot governance*.

---

### **7. User Feedback Summary**  
**Pain Points**:  
- **“I set a workspace, but it resets on restart”** — #7705 (workdir regression)  
- **“My PDFs keep breaking in multimodal chats”** — #7689, #7621 (incomplete fix)  
- **“The AI stops but keeps running — I lost hours of work”** — #7567  
- **“I have to reconfigure my model every time I open QwenPaw”** — #7708  
- **“On Android, I can’t write long messages — hitting ‘new line’ submits!”** — #7707  

**Positive Signals**:  
- Praise for **Hub multi-tenant design** (#7318) — “This is exactly what our team needs.”  
- Appreciation for **Telegram table rendering** (#7590, #7713) — “Now it looks professional.”  
- Gratitude for **CLI admin bootstrap** (#7696) — “Finally, I can deploy this on my cloud server without GUI.”  

**Overall Sentiment**: Mixed. Users are **excited about capabilities** but **frustrated by reliability**. The product is perceived as powerful but “not yet production-ready” for teams.

---

### **8. Backlog Watch**  
**Critical Long-Standing Items Needing Attention**:  
- **#4901: spawn_subagent support for per-task model selection** — *Open since June 2026, 3 comments*  
   > Core to cost optimization. Still unaddressed despite #7676 being fixed. **High-impact, low-effort to implement**.  
   [Link](https://github.com/agentscope-ai/QwenPaw/issues/4901)  

- **#7567: Tasks continue running after stop** — *Open since 2026-09-04, 6 comments*  
   > No PR. Likely a race condition in task cancellation. **Critical stability issue**.  

- **#7698: Session desync (ghost sessions)** — *Open since 2026-09-11*  
   > Confirmed on Tauri desktop. No PR. Likely a file I/O or session index bug.  

- **#7717: DeepSeek model enhancements** — *New, but detailed and well-researched*  
   > Proposes native support for KV-cache observability and prompt stability — mirrors DeepSeek’s official harness. **High-value for power users**.  

**Recommendation**: Prioritize triage of **#4901** and **#7567** — they represent foundational gaps in agent autonomy and reliability. The community is signaling that **stability now outweighs feature novelty**.

---

**Project Health Assessment**:  
🟢 **High Engagement & Innovation**  
🔴 **Critical Stability Gaps in Desktop & Task Execution**  
🟡 **Strong Roadmap Alignment — Community is Driving Priorities**  

**Next Steps**:  
1. Release **v2.2.2** to patch #7567, #7708, #7698  
2. Prioritize **#4901** and **#7714** for v2.3  
3. Formalize **Hub multi-tenant roadmap** based on #7318 feedback  

[QwenPaw GitHub](https://github.com/agentscope-ai/QwenPaw)

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

**ZeroClaw Project Digest — 2026-09-12**

---

### **1. Today's Overview**  
ZeroClaw is experiencing exceptionally high activity, with 50 issues and 50 PRs updated in the last 24 hours — a clear signal of intense development momentum, particularly around security, agent stability, and multimodal integration. The project shows no signs of slowing, with 48 open PRs and 39 open issues indicating a backlog under active pressure. Despite no new releases, the volume of high-severity bug reports and architectural enhancements suggests the team is in a critical stabilization and hardening phase ahead of an imminent v0.9 release. Activity is heavily concentrated among a small group of core contributors (notably Audacity88 and JordanTheJet), with community contributions remaining sparse.

---

### **2. Releases**  
*No new releases were published in the last 24 hours. The project remains on v0.8.5, with multiple high-severity bugs and architectural changes queued for inclusion in the next release.*

---

### **3. Project Progress**  
Two PRs were merged today, both addressing critical stability and usability issues:  
- **[#10262](https://github.com/zeroclaw-labs/zeroclaw/pull/10262)**: Fixed RPC connection leaks during daemon reload and unblocked the `zerocode` quickstart flow — a long-standing friction point for new users.  
- **[#10676](https://github.com/zeroclaw-labs/zeroclaw/pull/10676)**: Resolved a Windows-specific CI test failure by normalizing path comparisons in publish contract validation, improving cross-platform reliability.  

These merges reflect a focus on foundational stability. Meanwhile, **10 PRs were updated**, most notably:  
- **[#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259)**, **[#10275](https://github.com/zeroclaw-labs/zeroclaw/pull/10275)**, and the entire **#8289 stack** (PRs #10248 through #10275) are advancing Stage 5–6 of the OIDC authentication RFC — implementing principal isolation, browser PKCE, and legacy Nevis removal.  
- **[#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197)**: Introduces turn checkpointing for interrupted ACP sessions — a major UX improvement for long-running Code/ACP workflows.  
- **[#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621)**: Centralizes agent lifecycle management under a single config authority, reducing race conditions across channels and CLI.  

These represent foundational shifts toward secure, scalable agent orchestration.

---

### **4. Community Hot Topics**  
The most active issues and PRs reveal deep user frustrations and architectural priorities:  
- **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)**: *Tracker: Maintainer decision queue for RFCs* — 15 comments; reflects a growing need for transparency in governance. Users are explicitly requesting structured RFC triage to reduce ambiguity in roadmap alignment.  
- **[#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549)**: *RFC: Simplify voting by removing mandatory discussion windows* — 9 comments; signals user fatigue with bureaucratic process delays. The community is pushing for agile, outcome-driven RFCs over rigid timelines.  
- **[#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259)**: *Enforce authenticated principals on RPC* — top PR by stack depth; 9 commits in a chain, indicating high stake in identity isolation. Underlying need: secure multi-user environments (e.g., enterprise, shared workstations).  
- **[#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778)** and **[#10777](https://github.com/zeroclaw-labs/zeroclaw/issues/10777)**: Both from Audacity88, detail Anthropic cache corruption from image handling — 1 comment each but represent a systemic flaw in multimodal state management.  

*Analysis*: The dominant theme is **security hardening** (OIDC, principal isolation) and **multimodal reliability** (image handling, cache invalidation). The community is not requesting new features — they are demanding production-grade stability in existing ones.

---

### **5. Bugs & Stability**  
Today saw **12 new high-severity bugs** reported, mostly in the runtime, provider, and zerocode layers. Ranked by severity:  

**S1 — Workflow Blocked**  
- **[#10609](https://github.com/zeroclaw-labs/zeroclaw/issues/10609)**: `zerocode` ignores launch directory, forcing workspace cwd — breaks local development workflows.  
- **[#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785)**: Notification lag triggers session cancellation — renders long-context ACP sessions unusable.  

**S2 — Degraded Behavior (High Impact)**  
- **[#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734)** and **[#10753](https://github.com/zeroclaw-labs/zeroclaw/issues/10753)**: Windows stack overflow in `RpcDispatcher::process_line` — critical for Windows users.  
- **[#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788)**: Failed turns erase durable history — data loss risk in Code/ACP.  
- **[#10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787)**: Anthropic 529 errors skip non-streaming fallback — reliability degradation.  
- **[#10782](https://github.com/zeroclaw-labs/zeroclaw/issues/10782)**: Channel reply-intent precheck discards token usage — breaks cost tracking and quota enforcement.  
- **[#10779](https://github.com/zeroclaw-labs/zeroclaw/issues/10779)**: OpenCode 429 errors are retried with sub-second backoff — wastes quota on exhausted limits.  

**Fix PRs exist for**:  
- [#10734] → tracked in [#10753]  
- [#10788] → likely addressed by [#10197] (turn checkpointing)  
- [#10787] → partially addressed by [#10736] (non-streaming fallback)  

*Conclusion*: Stability is in crisis. At least 8 high-severity bugs are active, with 5+ having no open fix PRs. Windows and Anthropic integrations are the most fragile surfaces.

---

### **6. Feature Requests & Roadmap Signals**  
The following features are strongly signaled and likely candidates for v0.9:  
- **Proactive token-budget context compaction** ([#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780)): Users explicitly request this to reduce LLM costs — currently inert config keys (`context_compression.*`) suggest a regression.  
- **Image content block mapping into vision pipeline** ([#9521](https://github.com/zeroclaw-labs/zeroclaw/issues/9521)): Critical for Qwen/OpenAI compatibility — blocked since July.  
- **Selected text → Add to Chat** ([#10553](https://github.com/zeroclaw-labs/zeroclaw/pull/10553)): PR already open, UX-focused — high probability of merge.  
- **Configurable Docker sandbox image** ([#10745](https://github.com/zeroclaw-labs/zeroclaw/pull/10745)): PR merged soon — reflects enterprise compliance needs.  
- **Egress grant ceremony for plugins** ([#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584)): PR active — signals maturation of plugin ecosystem.  

*Prediction*: v0.9 will focus on **security compliance** (OIDC, sandbox, plugins), **cost control** (token compaction, quota tracking), and **multimodal reliability** (image blocks, cache integrity).

---

### **7. User Feedback Summary**  
Real user pain points emerge from issue descriptions:  
- **Frustration with “invisible” config features**: Users set `history_pruning.keep_recent` or `collapse_tool_results` expecting token savings — nothing happens ([#10781](https://github.com/zeroclaw-labs/zeroclaw/issues/10781)). This erodes trust in documentation.  
- **Workflow interruption**: `zerocode` cancels sessions due to notification lag ([#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785)) — users report losing hours of work.  
- **Provider unreliability**: Anthropic 529 errors cause total turn failure with no fallback ([#10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787)) — users are losing productivity to transient cloud errors.  
- **Platform friction**: Windows stack overflows ([#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734)) and path handling bugs ([#10690](https://github.com/zeroclaw-labs/zeroclaw/issues/10690)) make the tool feel “Unix-first” — alienating enterprise Windows users.  

*Satisfaction*: Minimal. Feedback is overwhelmingly negative — users feel the system is unstable, opaque, and poorly documented. Dissatisfaction is highest around **predictability** and **cost control**.

---

### **8. Backlog Watch**  
These high-impact items remain unaddressed for weeks — requiring urgent maintainer triage:  
- **[#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289)**: *OIDC milestone tracker* — 80+ days old, 3 PRs open, still incomplete. Critical for enterprise adoption.  
- **[#9967](https://github.com/zeroclaw-labs/zeroclaw/issues/9967)**: *Harness evaluation framework* — 30+ days old, no comments. Needed to validate performance claims.  
- **[#9521](https://github.com/zeroclaw-labs/zeroclaw/issues/9521)**: *Map MCP image blocks to vision pipeline* — blocked since July. Prevents true multimodal support.  
- **[#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780)**: *Restore proactive token compaction* — 2 days old but represents a core regression.  
- **[#10532](https://github.com/zeroclaw-labs/zeroclaw/issues/10532)**: *Degraded-config remediation invokes wrong binary* — risk: high, open since 9/2. Could cause config corruption.  

*Recommendation*: Prioritize **[#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289)** and **[#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780)** for v0.9. The OIDC stack is the project’s most important architectural pillar — and the lack of token compaction is a direct threat to user retention.

---

**Project Health Assessment**:  
**High activity, low stability**. ZeroClaw is undergoing rapid architectural evolution, but critical bugs and regressions are overwhelming the release pipeline. The project is at risk of losing user trust unless v0.9 delivers on **security guarantees** and **reliability fixes**. Maintain a strict “fix first, feature second” cadence for the next two weeks.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*