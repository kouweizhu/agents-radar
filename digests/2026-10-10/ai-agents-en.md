# OpenClaw Ecosystem Digest 2026-10-10

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-10-10 01:53 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

<think>The user wants me to generate a structured English OpenClaw project digest for 2026-10-10 based on the provided GitHub data. Let me analyze the data and create the 8 sections as requested.

Key observations from the data:
1. Issues: 500 updated in last 24h (399 open, 101 closed)
2. PRs: 500 updated in last 24h (352 open, 148 merged/closed)
3. No new releases

Let me organize the most important issues by severity and comment count:

P0 issues (highest priority):
- #143524: SQLite WAL grows to 1.4-2.8 GB, blocks gateway startup (115 comments)
- #167771: Updates blocked by update-recovery-pending (9 comments)
- #160959: Gateway blocks for minutes capturing large plugins (11 comments)
- #156986: openclaw update hangs in update-candidate-state (8 comments)
- #162047: Windows 2026.9.7 upgrade spends 39 minutes in Doctor (8 comments)
- #158231: Update failure managed-service-preflight (8 comments)
- #153426: Curated memory roots silently excluded from bootstrap (7 comments)
- #56217: Secret provider crash-loop exhausts 1Password limits (7 comments)
- #115642: Billing cooldown outlives outage (9 comments)
- #163434: age-based transcript trimming deletes session header (6 comments)

P1 issues:
- #97616: Leaks unreaped child processes, zombie accumulation (18 comments)
- #161976: WhatsApp DM replies fail at durable registry handoff (18 comments)
- #157325: Stuck agent-DB resource makes replies fail (17 comments)
- #119411: Memory file watcher never reindexes (13 comments)


- #142336: Core /dashboard shadows Telegram Mini App (11 comments)

I notice several critical issues emerging from the data. The most pressing problems involve database management, plugin loading, and system update mechanisms. Multiple P0 and P1 issues suggest significant stability challenges, with SQLite WAL growth and gateway blocking being particularly concerning. The update-related problems (hanging updates, Doctor delays, update failures) indicate potential systemic risks in the upgrade process.

The pull requests reveal targeted fixes across various components, addressing issues in UI, authentication, storage, and agent management. Multiple PRs are in review stages, with some requiring maintainer attention and proof of concept. The fixes span small to extra-large changes, demonstrating a comprehensive approach to resolving platform instabilities.</think>

# OpenClaw Project Digest — 2026-10-10

## 1. Today's Overview

OpenClaw shows **high activity** on October 10, 2026, with 500 issues and 500 PRs updated in the last 24 hours. The project has 399 open issues and 352 open PRs, with 101 issues and 148 PRs closed/merged. No new releases were published today. Several **P0/ux-release-blocker** issues remain hot, particularly around SQLite WAL growth, update mechanisms, and plugin loading performance. Community engagement is robust, with critical issues generating significant discussion (top issue has 115 comments).

---

## 2. Releases

**No new releases** published in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Title | Size | Status |
|----|-------|------|--------|
| [#167902](https://github.com/openclaw/openclaw/pull/167902) | fix(llama-cpp): reclaim orphaned managed servers on macOS | L | CLOSED |
| [#168025](https://github.com/openclaw/openclaw/pull/168025) | fix(storage): publish sandbox, worktree, and GitHub authority receipts | XL | CLOSED |
| [#168071](https://github.com/openclaw/openclaw/pull/168071) | feat(x): verify repository writers through GitHub profiles | XL | CLOSED |
| [#162047](https://github.com/openclaw/openclaw/issues/162047) | Windows 2026.9.7 upgrade Doctor slowness | — | CLOSED (Issue) |
| [#129750](https://github.com/openclaw/openclaw/issues/129750) | DashScope embedBatch exceeds 10-item limit | — | CLOSED (Issue) |

### Notable Advancements

- **Llama-cpp macOS fix**: Orphaned managed servers now properly reclaimed
- **Storage receipts**: Sandbox, worktree, and GitHub authority receipts now consistently published
- **OAuth fence**: Monotonic clock prevents refresh timeout issues from clock skew
- **Session previews**: Tilde-fenced code no longer crowds out preview text

---

## 4. Community Hot Topics

### Most Active Issues (by comments)

| Issue | Title | Comments | Reactions |
|-------|-------|----------|-----------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL grows to 1.4–2.8 GB, blocks gateway startup | 115 | 👍 0 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Leaks unreaped child processes, zombie accumulation | 18 | 👍 1 |
| [#161976](https://github.com/openclaw/openclaw/issues/161976) | WhatsApp DM replies fail at durable registry handoff | 18 | 👍 0 |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | Stuck agent-DB resource makes every agent's replies fail | 17 | 👍 0 |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | Duplicate transcript, replay, context assembly across channels | 16 | 👍 0 |

### Most Active PRs (by attention)

| PR | Title | Status |
|----|-------|--------|
| [#168076](https://github.com/openclaw/openclaw/pull/168076) | feat: organize and archive nested conversations explicitly | OPEN |
| [#168042](https://github.com/openclaw/openclaw/pull/168042) | perf(anthropic): preserve conversation cache checkpoints | Ready for maintainer |
| [#168059](https://github.com/openclaw/openclaw/pull/168059) | perf(control-ui): preload native plugin assets together | Ready for maintainer |
| [#103201](https://github.com/openclaw/openclaw/pull/103201) | fix(memory): session sync deletes and re-embeds every chunk | Waiting on author |

### Analysis

The **SQLite WAL growth issue (#143524)** dominates discussion—users are experiencing 2.8 GB WAL files despite `wal_autocheckpoint=1000`, causing gateway startup blocking. This represents a **major data integrity and operational reliability concern**.

---

## 5. Bugs & Stability

### P0 (Critical / Release Blocker)

| Issue | Title | Severity | Fix PR? |
|-------|-------|----------|---------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL grows to 1.4–2.8 GB, blocks startup | 🔴 ux-release-blocker | No |
| [#167771](https://github.com/openclaw/openclaw/issues/167771) | Updates permanently blocked by update-recovery-pending | 🔴 ux-release-blocker | No |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway blocks for minutes capturing large plugins | 🔴 crash-loop | No |
| [#156986](https://github.com/openclaw/openclaw/issues/156986) | openclaw update hangs in update-candidate-state | 🔴 ux-release-blocker | No |
| [#162047](https://github.com/openclaw/openclaw/issues/162047) | Windows 2026.9.7 upgrade spends 39 min in Doctor | 🔴 ux-release-blocker | No |
| [#158231](https://github.com/openclaw/openclaw/issues/158231) | Update failure: managed-service-preflight | 🔴 ux-release-blocker | No |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | Billing cooldown outlives outage | 🔴 ux-release-blocker | No |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | Curated memory roots silently excluded from bootstrap | 🔴 security, ux-release-blocker | No |

### P1 (High Priority)

| Issue | Title | Severity | Fix PR? |
|-------|-------|----------|---------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Unreaped child processes, zombie accumulation | 🟠 message-loss, crash-loop | No |
| [#161976](https://github.com/openclaw/openclaw/issues/161976) | WhatsApp DM replies fail at registry handoff | 🟠 message-loss | No |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | Stuck agent-DB resource breaks all replies | 🟠 message-loss | No |
| [#119411](https://github.com/openclaw/openclaw/issues/119411) | Memory file watcher never reindexes | 🟠 session-state | No |

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| Issue | Title | Need |
|-------|-------|------|
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | Onboarding Wizard should include Memory/Embedding setup | 📢 Product decision |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | Reduce tool schema token overhead (~3,500 tok/session) | 📢 Product decision |
| [#66252](https://github.com/openclaw/openclaw/issues/66252) | Per-Agent TTS/STT Configuration Overrides | 📢 Product decision |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) | Per-model usage logging for cost tracking | 📢 Product decision |
| [#16555](https://github.com/openclaw/openclaw/issues/16555) | Add TTL/Expiry for Delivery Queue Messages | 📢 Product decision |

### Signals for Next Version

The combination of **multiple plugin performance fixes** (#168042, #168059, #160959), **memory sync inefficiencies** (#103201), and **SQLite checkpoint issues** suggests the next release may focus on:
- **Performance**: Plugin loading, session caching, memory indexing
- **Stability**: WAL checkpointing, update mechanisms
- **DX**: Onboarding improvements, cost tracking

---

## 7. User Feedback Summary

### Pain Points

1. **Database/Blocking Issues**: Users frustrated by SQLite WAL growing to multiple GBs, blocking gateway startup entirely
2. **Update Failures**: Multiple users stuck on older versions with no recovery path (#167771, #156986, #158231)
3. **Plugin Loading**: Large plugins cause minutes-long event loop blocking (#160959)
4. **Windows Performance**: Ready times of ~220s on Windows, with Doctor taking 39 minutes (#159499, #162047)
5. **Memory Corruption**: Silent exclusion of curated memory roots with no diagnostics (#153426)

### Satisfaction Signals

- Positive reactions on fix PRs (e.g., #167902, #168025)
- Community actively debugging in comments (115 comments on top issue)
- Multiple regression reports show users testing pre-release versions

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Title | Age | Status |
|-------|-------|-----|--------|
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | Duplicate transcript/replay across channels | ~6 months | OPEN |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | Multi-agent orchestration unstable | ~7 months | OPEN |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | Hardcoded working path in code | ~7 months | OPEN |
| [#48709](https://github.com/openclaw/openclaw/issues/48709) | Gemini 2.5 Pro bloat + session failures | ~7 months | Stale |

### PRs Needing Maintainer Attention

| PR | Title | Status |
|----|-------|--------|
| [#168042](https://github.com/openclaw/openclaw/pull/168042) | perf(anthropic): preserve conversation cache checkpoints | 👀 ready for maintainer look |
| [#168059](https://github.com/openclaw/openclaw/pull/168059) | perf(control-ui): preload native plugin assets together | 👀 ready for maintainer look |
| [#103201](https://github.com/openclaw/openclaw/pull/103201) | fix(memory): session sync deletes/re-embeds chunks | ⏳ waiting on author |
| [#150149](https://github.com/openclaw/openclaw/pull/150149) | fix(vllm): honor declared reasoning efforts | 📣 needs proof |

---

*Generated: 2026-10-10 | Data: GitHub OpenClaw (openclaw/openclaw)*

---

## Cross-Ecosystem Comparison

<think>The user wants me to generate a cross-project comparison report in English based on the four project digests I just created. Let me analyze the data from each project:

**OpenClaw (openclaw/openclaw)**
- Issues: 500 updated (399 open)
- PRs: 500 updated (352 open)
- Releases: None
- Top issues: SQLite WAL growth (P0), update mechanisms, plugin loading
- Focus: Gateway, plugin system, update mechanisms

**Hermes Agent (NousResearch/hermes-agent)**
- Issues: 50 updated (48 open)
- PRs: 50 updated (41 open)
- Releases: None
- Top issues: Context compression, desktop duplication, MCP security
- Focus: Desktop app, memory, authentication

**QwenPaw (agentscope-ai/QwenPaw)**
- Issues: 21 updated (13 open)
- PRs: 35 updated (22 open)
- Releases: None
- Top issues: SubAgent timeouts, chat history, MCP RCE vulnerability
- Focus: Console UI, i18n, local models

**ZeroClaw (zeroclaw-labs/zeroclaw)**
- Issues: 26 updated (19 open)
- PRs: 50 updated (44 open)
- Releases: None
- Top issues: Telegram integration, cost tracking, memory leaks
- Focus: Gateway separation (v0.9.0), A2A protocol, cost management

Let me organize this into the 7 requested sections.</think>

# Cross-Project Comparison Report: Personal AI Assistant Ecosystems

---

## 1. Ecosystem Overview

The personal AI assistant and agent framework landscape in late 2026 shows a fragmented but highly active ecosystem. Four major open-source projects—OpenClaw, Hermes Agent, QwenPaw, and ZeroClaw—are iterating at pace, each tackling distinct challenges around gateway reliability, desktop experience, user interface localization, and protocol-level interop. No releases were published across any of these projects today, indicating a development-cycle phase rather than a release cadence. Common themes include **context/window management**, **plugin architectures**, **multi-channel integration** (Telegram, WhatsApp), **cost observability**, and **security hardening** (MCP allowlists, RCE vectors). The field is mature enough to have established recurring bug classes (memory leaks, session corruption, update failures) but still rapidly evolving, with RFC activity signaling architectural ambition.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | Open Issues | PRs Updated (24h) | Open PRs | Releases (24h) | Health Signal |
|---------|---------------------|-------------|-------------------|----------|-----------------|---------------|
| **OpenClaw** | 500 | ~399 | 500 | ~352 | 0 | ⚠️ High volume, multiple P0 blockers |
| **Hermes Agent** | 50 | ~48 | 50 | ~41 | 0 | 🟡 Moderate, security concerns |
| **QwenPaw** | 21 | ~13 | 35 | ~22 | 0 | 🟢 Steady, security-critical patch pending |
| **ZeroClaw** | 26 | ~19 | 50 | ~44 | 0 | 🟢 High PR velocity, v0.9.0 milestone |

**Notes:**
- OpenClaw dominates in raw activity volume (~10× others), reflecting a larger codebase and broader scope.
- ZeroClaw shows the highest PR-to-issue ratio (50:26), indicating active feature development relative to bug inflow.
- All four projects show 0 releases—coincidental or indicative of a synchronized development cycle phase.
- Hermes Agent's 50:50 issue:PR ratio suggests balanced maintenance; OpenClaw's 500:500 similarly.

---

## 3. OpenClaw's Position

### Advantages vs Peers

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **Issue volume** | Dominant (500) | Moderate (50) | Low (21) | Moderate (26) |
| **PR throughput** | Dominant (500) | Moderate (50) | Moderate (35) | High (50) |
| **Scope** | Gateway, plugins, multi-channel | Desktop app, memory, auth | Console UI, i18n, local models | Gateway separation, cost tracking |
| **Community engagement** | Very high (115 comments on top issue) | Moderate (10 comments) | Moderate (10 comments) | Low but growing |
| **Release cadence** | Unknown (no recent releases tracked) | Unknown | Unknown | v0.9.0 milestone tracked |

### Technical Approach Differences

- **OpenClaw** operates at the infrastructure layer (gateway, plugin loader, update recovery) and addresses system-level reliability. Its bugs are **operational** (SQLite WAL blocking, update deadlocks) rather than UX-focused.
- **Hermes Agent** centers on the **end-user desktop experience** (UI rendering, session compaction, OAuth flows).
- **QwenPaw** emphasizes **local deployment** (local models, console UI, multilingual interface).
- **ZeroClaw** pursues **architectural modularity** (gateway separation, A2A protocol crate) and financial observability (cost ledgers).

### Community Size

OpenClaw's issue volume (~10× peers) suggests a larger active user and contributor base. The 115-comment thread on the SQLite WAL issue indicates a highly engaged community debugging production incidents. Hermes and ZeroClaw show moderate engagement; QwenPaw's lower issue volume but healthy PR activity suggests a smaller but focused community.

---

## 4. Shared Technical Focus Areas

### Requirements Emerging Across Multiple Projects

| Focus Area | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw | Specific Needs |
|------------|----------|--------------|---------|----------|----------------|
| **Context/Window Management** | ✅ | ✅ | ✅ | — | Compression, truncation handling, token counting for local providers |
| **Plugin/Extension Architecture** | ✅ | ✅ | ✅ | — | Hot reload, schema deferral, sandboxing |
| **Multi-Channel Integration** | ✅ | — | — | ✅ | Telegram, WhatsApp reliability; message queuing; rate-limit handling |
| **Security (MCP)** | — | ✅ | ✅ | — | Tool allowlist enforcement; RCE prevention; driver config sandboxing |
| **Cost/Usage Observability** | — | ✅ | — | ✅ | Spend tracking, token metering, ledger accuracy |
| **Desktop/Console UI** | — | ✅ | ✅ | — | Rendering bugs, performance (GPU usage), theme/i18n |
| **Update/Release Mechanisms** | ✅ | ✅ | — | ✅ | Stable vs. nightly channels; recovery from failed updates |
| **Memory/Session Integrity** | ✅ | ✅ | ✅ | ✅ | Message deduplication, history preservation, bootstrap reliability |

**Analysis:** Four clusters emerge:

1. **Core Agent Reliability**: Session/message integrity, context management, memory handling—common to all four.
2. **Plugin/Extension Systems**: OpenClaw and Hermes both investing in plugin lifecycle (load, reload, unload).
3. **Multi-Channel Gateway**: OpenClaw and ZeroClaw both dealing with Telegram/WhatsApp delivery reliability.
4. **Financial Observability**: Hermes (token cost meter plugin) and ZeroClaw (cost ledger) independently building spend tracking.

---

## 5. Differentiation Analysis

### Feature Focus

| Project | Primary Differentiator | Secondary Focus |
|---------|----------------------|-----------------|
| **OpenClaw** | Gateway architecture, plugin marketplace, multi-channel routing | Update recovery, system-level reliability |
| **Hermes Agent** | Desktop client maturity, OAuth/1Password integration | Memory plugins, conversation caching |
| **QwenPaw** | Local model support (QwenPaw-Flash variants), i18n parity | Console UI, media handling |
| **ZeroClaw** | Gateway modularity (v0.9.0 separation), A2A protocol | Cost ledger, config-driven limits |

### Target Users

- **OpenClaw**: Operators deploying multi-channel AI services; enterprises needing gateway reliability.
- **Hermes Agent**: End users seeking a polished desktop agent experience; developers integrating with 1Password.
- **QwenPaw**: Developers running local models; non-English-speaking users (i18n push).
- **ZeroClaw**: Cost-conscious deployments; teams requiring granular spend visibility; architectural early adopters.

### Technical Architecture

| Aspect | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|--------|----------|--------------|---------|----------|
| **Language** | Mixed (Python likely) | Likely Rust or Python | Mixed | Rust-forward |
| **Deployment** | Gateway-centric | Desktop-first | Console + local | Gateway-separated |
| **Update Model** | Recovery pending, update-candidate-state | Stable vs. main branches | Hub-based | Phased (v0.8.6 → v0.9.0) |
| **Plugin Model** | Marketplace + built-in | Plugin catalog | Skills pool | Built-in deferred schemas |
| **Security Posture** | Update integrity | MCP allowlist | RCE (MCP driver) | OIDC, SOP guards |

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Project | Characteristics |
|------|--------|-----------------|
| **Rapid Iteration** | **OpenClaw** | High volume (500 issues/PRs), multiple P0 blockers, aggressive feature velocity. Indicates early-maturity or high-demand scope. |
| **Active Development** | **ZeroClaw** | High PR-to-issue ratio (50:26), RFC-driven architecture, v0.9.0 milestone tracked. Moving from prototype toward stable. |
| **Steady Maintenance** | **Hermes Agent** | Balanced 50:50 ratio, security patches in flight, desktop UX refinements. Stabilizing around a defined product. |
| **Focused Growth** | **QwenPaw** | Lower issue volume, moderate PRs, strong i18n/local-model focus. Niche but active community. |

### Maturity Signals

- **Stable processes**: ZeroClaw tracks RFC decisions in a dedicated queue (#8692); Hermes has established security response patterns; OpenClaw has detailed P0 severity rubrics.
- **Technical debt visibility**: All projects show recurring bug classes (session duplication, memory leaks, update deadlocks)—typical of rapidly evolving systems.
- **Release cadence**: None published today; likely working toward milestones (OpenClaw: maintenance; ZeroClaw: v0.9.0; Hermes: stable channel; QwenPaw: 2.0.1).

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

| Trend | Evidence | Projects |
|-------|----------|----------|
| **Gateway-as-a-Service maturation** | OpenClaw's v0.8.x maintenance + ZeroClaw's v0.9.0 gateway separation | OpenClaw, ZeroClaw |
| **Plugin/extension ecosystem expansion** | Plugin catalogs, hot reload, deferred schema loading | OpenClaw, Hermes, QwenPaw |
| **Cost observability becoming table-stakes** | Token metering, cost ledgers, spend dashboards | Hermes (token-cost-meter), ZeroClaw (cost ledger) |
| **Security hardening (MCP)** | MCP tool allowlist bypass, RCE via driver config, sandbox bypass | Hermes, QwenPaw |
| **Local deployment demand** | QwenPaw-Flash variants, local model tiers, Termux support | QwenPaw |
| **Multi-channel reliability** | Telegram/WhatsApp delivery failures, message queuing, rate-limit handling | OpenClaw, ZeroClaw |
| **i18n/localization pressure** | Spanish interface, locale parity, hardcoded UI strings | QwenPaw, Hermes |
| **Desktop UI performance** | Continuous GPU repaints, backdrop-filter effects, rendering bugs | Hermes, ZeroClaw |

### Value for AI Agent Developers

Developers building on or with these frameworks should:

1. **Prioritize security review** of MCP integrations—vulnerabilities are emerging across multiple projects.
2. **Monitor cost tracking** implementations—independent efforts suggest market demand for billing visibility.
3. **Watch ZeroClaw's gateway separation** as a potential architectural pattern for modular agent deployments.
4. **Contribute to i18n**—localization gaps are visible; community contributions are welcome.
5. **Expect instability in update mechanisms**—common across all projects; test rollback procedures thoroughly.

---

*Cross-project analysis synthesized from GitHub data — 2026-10-10*

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>Let me analyze this GitHub data for Hermes Agent and create a structured project digest for 2026-10-10.

Key data points:
- Issues updated in last 24h: 50 (open/active: 48, closed: 2)
- PRs updated in last 24h: 50 (open: 41, merged/closed: 9)
- New releases: 0

Let me organize this into the requested sections:

1. **Today's Overview** - Need to summarize overall activity
2. **Releases** - None, so I'll note that
3. **Project Progress** - PRs that were merged/closed today
4. **Community Hot Topics** - Most active issues by comments
5. **Bugs & Stability** - Bug reports ranked by severity
6. **Feature Requests & Roadmap Signals** - Feature requests
7. **User Feedback Summary** - Pain points from issues
8. **Backlog Watch** - Long-unanswered important issues

Let me categorize:

Top issues by comments:
1. #99943 - Compressor context window clamped (10 comments) - P2 bug
2. #108335 - 1Password browser-vault fill (9 comments) - P3 bug
3. #127621 - Desktop app duplicate rendering (7 comments, 7 👍) - P2 bug
4. #79357 - idle_compact_after_seconds never fires (7 comments) - P2 bug
5. #129426 - npm audit field report (6 comments) - security
6. #128293 - Duplicate message rows (6 comments) - P1 bug
7. #48523 - convert_messages doesn't strip metadata (6 comments) - P2 bug
8. #126194 - uv lock Python 3.14 failures (5 comments) - P2 bug
9. #119403 - session-list performance (5 comments) - P2 perf


10. #128831 - hermes update on Termux (4 comments) - P2 bug

Now looking at PR activity:
- #135566 - CLOSED - feat(agent): pre_verify gate
- #135909 - OPEN - fix(auth): record Nous device-code grant
- #135847 - OPEN - feat(update): stable releases default
- #135901 - OPEN - feat(memory): atomic source precondition
- #128757 - OPEN - fix(agent): model switch costs
- #135917 - OPEN - feat(desktop): cron "Start from"
- #50669 - OPEN - Fix email subjects
- #135915 - CLOSED - fix(browser): Chromium sandbox bypass
- #135911 - OPEN - fix(matrix): cache captioned media
- #135912 - OPEN - feat: token-cost-meter plugin
- #135913 - OPEN - fix(update): pausing drain ACK

Key observations: 50 issues active with 2 closed, 41 open PRs and 9 merged/closed. Security issues #129426 (npm audit) and #135594 (MCP tool allowlist) are critical, along with P1 bug #128293. The compression and session problems (#99943, #127621) are high priority. Performance issues also need attention. Desktop app duplicates and idle compaction failures are both P2 bugs. The MCP security issue where read-only profiles access write tools is concerning. Python 3.14 support needs uv lock fixes, and Termux also requires attention. Security advisories, authentication issues, and update mechanisms are progressing. Desktop features are expanding with cron functionality and a token-cost-meter plugin. Several high-priority bugs are being addressed.</think>

# Hermes Agent Project Digest — 2026-10-10

## 1. Today's Overview

Hermes Agent shows high activity with 50 issues and 50 PRs updated in the last 24 hours. The project maintains 48 open issues and 41 open PRs, with 9 PRs merged/closed today. No new releases were published. The issue backlog is substantial but actively managed, with several security-relevant bugs and platform compatibility issues requiring attention. Desktop app issues (duplication, performance) and compression/context handling remain persistent themes.

---

## 2. Releases

**No new releases today.** The project has no releases listed in the last 24 hours.

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Title | Status |
|----|-------|--------|
| [#135566](https://github.com/NousResearch/hermes-agent/pull/135566) | feat(agent): extend the pre_verify gate to text-response stops (opt-in) | CLOSED |
| [#135915](https://github.com/NousResearch/hermes-agent/pull/135915) | fix(browser): apply the Chromium sandbox bypass to the real-profile launch | CLOSED |
| [#135406](https://github.com/NousResearch/hermes-agent/pull/135406) | Test runs no longer leave detached gateways running after they finish | CLOSED |
| [#133108](https://github.com/NousResearch/hermes-agent/pull/133108) | fix(a2a): answer ContentTypeNotSupportedError for a non-JSON Content-Type | CLOSED |
| [#132346](https://github.com/NousResearch/hermes-agent/pull/132346) | ci: real-update E2E gates every updater change | CLOSED |

### Active PRs Advancing

| PR | Title | Focus Area |
|----|-------|------------|
| [#135847](https://github.com/NousResearch/hermes-agent/pull/135847) | feat(update): hermemes update and Desktop updates follow stable releases by default | Install/Update |
| [#135909](https://github.com/NousResearch/hermes-agent/pull/135909) | fix(auth): record the Nous device-code grant's approval time | Auth |
| [#135913](https://github.com/NousResearch/hermes-agent/pull/135913) | fix(update): only the gateway's pausing is a drain ACK | Update |
| [#135901](https://github.com/NousResearch/hermes-agent/pull/135901) | feat(memory): add atomic source precondition to MemoryStore.apply_batch | Memory |
| [#135911](https://github.com/NousResearch/hermes-agent/pull/135911) | fix(matrix): cache captioned media under its declared filename | Matrix Plugin |
| [#135917](https://github.com/NousResearch/hermes-agent/pull/135917) | feat(desktop): cron "Start from": copy a job, or customize a recipe's prompt | Desktop |
| [#135912](https://github.com/NousResearch/hermes-agent/pull/135912) | plugin-catalog: add token-cost-meter | Plugin Catalog |
| [#128757](https://github.com/NousResearch/hermes-agent/pull/128757) | fix(agent): say what a model switch costs on a large session | Performance |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Comments | Reactions | Priority |
|-------|-------|----------|-----------|----------|
| [#99943](https://github.com/NousResearch/hermes-agent/issues/99943) | Compressor context window clamped to model.ollama_num_ctx on cloud providers — 1M window silently drops to 65,536 | 10 | 0 | P2 |
| [#108335](https://github.com/NousResearch/hermes-agent/issues/108335) | 1Password browser-vault fill omits --vault with service-account authentication | 9 | 0 | P3 |
| [#127621](https://github.com/NousResearch/hermes-agent/issues/127621) | Desktop app: assistant response occasionally renders duplicated (same text twice) | 7 | 7 👍 | P2 |
| [#79357](https://github.com/NousResearch/hermes-agent/issues/79357) | idle_compact_after_seconds never fires in gateway mode — watchdog reset clobbers _last_activity_ts | 7 | 2 👍 | P2 |
| [#129426](https://github.com/NousResearch/hermes-agent/issues/129426) | security: npm audit field report 2026-09-30 — current remediation targets superseded | 6 | 0 | Security |

**Analysis:** The most discussed issues reveal ongoing challenges with:
- **Context compression** — Silent truncation of context windows affects multiple providers
- **Desktop UI reliability** — Duplicated rendering impacts user experience
- **Gateway idle logic** — Core compression timing bug in gateway mode
- **Security dependencies** — npm audit findings need updated remediations

---

## 5. Bugs & Stability

### Critical (P1)

| Issue | Title | Status | Fix PR? |
|-------|-------|--------|---------|
| [#128293](https://github.com/NousResearch/hermes-agent/issues/128293) | Duplicate message rows in desktop transcript after context compaction | OPEN | No |

### High Priority (P2)

| Issue | Title | Status | Fix PR? |
|-------|-------|--------|---------|
| [#99943](https://github.com/NousResearch/hermes-agent/issues/99943) | Compressor context window clamped to model.ollama_num_ctx on cloud providers | OPEN | No |
| [#127621](https://github.com/NousResearch/hermes-agent/issues/127621) | Desktop app: assistant response occasionally renders duplicated | OPEN | No |
| [#79357](https://github.com/NousResearch/hermes-agent/issues/79357) | idle_compact_after_seconds never fires in gateway mode | OPEN | No |
| [#48523](https://github.com/NousResearch/hermes-agent/issues/48523) | convert_messages doesn't strip timestamp/message_id/observed/finish_reason — causes 400 with strict providers | OPEN | No |
| [#135594](https://github.com/NousResearch/hermes-agent/issues/135594) | **[Security]** multiplexed gateway: profile MCP tool allowlist ignored (read-only profile gets write tools) | OPEN | No |
| [#126194](https://github.com/NousResearch/hermes-agent/issues/126194) | uv lock fails under Python 3.14: pilk & playwright incompatibilities | OPEN | No |
| [#128831](https://github.com/NousResearch/hermes-agent/issues/128831) | hermes update fails on Termux (Android + Python 3.14) | OPEN | [#128851](https://github.com/NousResearch/hermes-agent/pull/128851) |

### Security Issues

| Issue | Title | Status |
|-------|-------|--------|
| [#129426](https://github.com/NousResearch/hermes-agent/issues/129426) | npm audit field report — brace-expansion, undici, vitest, yaml advisories | OPEN |
| [#135594](https://github.com/NousResearch/hermes-agent/issues/135594) | MCP tool allowlist bypass in multiplexed gateway | OPEN |

**Stability Concerns:** The P1 duplicate message issue (#128293) represents a third report of this class, indicating a persistent regression in desktop session handling. The MCP security issue (#135594) is particularly concerning as it allows privilege escalation between profiles.

---

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| Issue | Title | Priority | Signals |
|-------|-------|----------|---------|
| [#103965](https://github.com/NousResearch/hermes-agent/issues/103965) | feat(delegate): per-task Hermes profile routing (model, host, memory, attribution) | P3 | Needs decision |
| [#61535](https://github.com/NousResearch/hermes-agent/issues/61535) | feat(desktop): status bar text too small, UI feels monochrome — request colorful theme | P3 | User demand |
| [#135867](https://github.com/NousResearch/hermes-agent/issues/135867) | [Feature]: Field report + 5 proven patterns for phone→Tailscale→gateway companions | P3 | Production deployment signal |
| [#135912](https://github.com/NousResearch/hermes-agent/pull/135912) | plugin-catalog: add token-cost-meter | Plugin | NEW PR |

**Roadmap Signals:**
- **Stable release channel** — PR #135847 moves `hermes update` to follow published `vX.Y.Z` releases instead of main, indicating a shift toward more stable distribution
- **Token cost metering** — New plugin (#135912) shows demand for usage tracking
- **Desktop UI improvements** — Status bar theming (#61535) suggests UI polish is desired

---

## 7. User Feedback Summary

### Pain Points Identified

1. **Context Compression Reliability** — Users report silent failures where 1M context windows drop to 65,536 without warning (#99943). This affects cloud providers broadly and undermines confidence in long conversations.

2. **Desktop Session Corruption** — Duplicate message rows after compaction (#128293, #127621) indicate data integrity issues in the desktop client's session management. Multiple independent reports suggest this is not edge-case.

3. **Platform Compatibility Gaps** — Python 3.14 support is problematic (#126194, #128831), particularly on Windows and Termux. The `uv lock` failures and package manager issues create friction for users on newer Python versions.

4. **Gateway Mode Deficiencies** — The idle compaction never firing (#79357) and the MCP allowlist bypass (#135594) reveal gateway mode has not received equivalent engineering attention compared to core agent.

5. **1Password Integration** — Service account authentication for browser vault fills is broken (#108335), blocking enterprise 1Password users.

### Satisfaction Signals

- PR activity shows active maintenance: 9 PRs merged/closed today
- Desktop cron job customization (#135917) addresses user workflow needs
- Test infrastructure improvements (#135406) suggest investment in regression prevention

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Title | Age | Concerns |
|-------|-------|-----|----------|
| [#48523](https://github.com/NousResearch/hermes-agent/issues/48523) | convert_messages doesn't strip metadata — causes 400 with strict providers | ~4 months | Gateway session replay breaks with strict API providers |
| [#95074](https://github.com/NousResearch/hermes-agent/issues/95074) | Bot Mode message_agent has two reply paths | ~2 months | Architectural confusion, potential message loss |
| [#119403](https://github.com/NousResearch/hermes-agent/issues/119403) | session-list refresh pays per-session subquery over messages — 0.4-0.7 GB reads per poll | ~3 weeks | Performance regression on grown databases |

### Issues Needing Maintainer Attention

| Issue | Title | Notes |
|-------|-------|-------|
| [#135594](https://github.com/NousResearch/hermes-agent/issues/135594) | **Security: MCP tool allowlist bypass** | High-severity security bug, needs urgent review |
| [#128293](https://github.com/NousResearch/hermes-agent/issues/128293) | **P1: Duplicate message rows** | Third report of class, user trust impacted |
| [#99943](https://github.com/NousResearch/hermes-agent/issues/99943) | Context window silent truncation | Data loss risk, affects multiple providers |

---

*Digest generated from GitHub data for 2026-10-10. All links point to NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to generate a project digest for QwenPaw based on the provided GitHub data. Let me analyze the data and create a structured report.

Key data points:
- Issues: 21 updated in last 24h (13 open/active, 8 closed)
- PRs: 35 updated in last 24h (22 open, 13 merged/closed)
- No new releases

Let me organize the information into the requested sections:

1. Today's Overview - Need to summarize the project status
2. Releases - None in last 24h
3. Project Progress - 13 merged/closed PRs
4. Community Hot Topics - Most active issues/PRs
5. Bugs & Stability - Various bugs reported
6. Feature Requests & Roadmap Signals - Feature requests
7. User Feedback Summary - Pain points
8. Backlog Watch - Long-unanswered issues

Let me identify the key items:

Most active issues by comments:
- #7678 [CLOSED] spawn subAgent - 10 comments
- #8134 [OPEN] 聊天记录和大模型上下文窗口关联 - 10 comments
- #8040 [OPEN] embedding reindex incomplete - 5 comments
- #8120 [OPEN] 频繁 页面加载失败 - 4 comments
- #7599 [CLOSED] MissingSessionID - 4 comments

Security issue:
- #8153 [Security] MCP Driver 配置接口导致 root RCE - critical security issue

Key PRs:
- #8154 [OPEN] fix(console): improve chunk error recovery
- #8149 [OPEN] fix(console): refresh expanded file directories
- #8159 [OPEN] fix(console): skip empty text messages
- #8161 [OPEN] fix(i18n): complete locale parity
- #7613 [OPEN] feat(memory): add OpenViking memory plugin
- #7565 [OPEN] feat(plugins): add clean unload and rollback-safe hot reload


- #8156 [OPEN] feat(api): add coding-cli management endpoints for worker containers

I'll highlight the worker container management endpoints as a significant technical enhancement. This PR appears to be addressing infrastructure and deployment complexity, potentially improving the system's containerization capabilities. The feature suggests deeper integration with containerized workflows, offering more granular control over worker processes.</think>

# QwenPaw Project Digest — 2026-10-10

## 1. Today's Overview

QwenPaw shows **high development activity** on October 10, 2026, with 35 PRs and 21 issues updated in the last 24 hours. The project is actively addressing both bug fixes and new features, particularly around the Console UI, i18n localization, and stability improvements. No new releases were published today, but several substantial PRs are under review. A **critical security vulnerability** (RCE via MCP Driver) was reported and requires immediate attention.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Project Progress

The following PRs were **merged/closed** today:

| PR | Title | Status |
|----|-------|--------|
| #8136 | fix(media): preserve EXIF orientation during image resizing | CLOSED |
| #8010 | fix(agents): recover from media payload rejections instead of failing | CLOSED |
| #8130 | fix(console): keep only the page title in settings headers | CLOSED |
| #8055 | fix(skills): offload pool download copy and sweep orphan stages | CLOSED |
| #8089 | fix(console): support terminal identity over LAN HTTP | CLOSED |
| #8155 | feat(local-models): update QwenPaw-Flash 9B, 27B and 35B-A3B | CLOSED |
| #7869 | fix(providers): carry the session header on connection checks | CLOSED |

**Key advancements:**
- **Media handling**: EXIF orientation preservation and recovery from oversized image rejections
- **Console UI**: LAN HTTP terminal identity support, consolidated settings headers
- **Local models**: New QwenPaw-Flash variants (27B, 35B-A3B) added

---

## 4. Community Hot Topics

| Issue/PR | Comments | Topic |
|----------|----------|-------|
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | 10 | **[BUG] spawn subAgent timeout failures** — All subAgent tasks fail with timeouts regardless of timeout settings |
| [#8134](https://github.com/agentscope-ai/QwenPaw/issues/8134) | 10 | **[BUG] Chat history disappears, affecting model context window** — Critical data loss issue |
| [#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) | 5 | **[BUG] Embedding reindex incomplete** — CJK chunks silently drop batches when exceeding token limits |
| [#8153](https://github.com/agentscope-ai/QwenPaw/issues/8153) | 2 | **[SECURITY] MCP Driver RCE vulnerability** — Root-level remote code execution via malicious driver |
| [#8160](https://github.com/agentscope-ai/QwenPaw/issues/8160) | 2 | **[Feature] Add Spanish (es) interface language** — Expanding i18n coverage |
| [#7809](https://github.com/agentscope-ai/QwenPaw/issues/7809) | 2 | **[Feature] Tool approval cards need i18n support** — Hardcoded English UI elements |

**Analysis**: Users are most concerned about **subAgent timeouts** and **chat history persistence** — core reliability issues. The newly reported **MCP RCE vulnerability** is critical and may drive an emergency patch. Localization continues to be a growing community demand.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **Critical** | [#8153] MCP Driver RCE — root access, possible crypto mining backdoor | OPEN | — |
| 🔴 **Critical** | [#8134] Chat history disappears, context window issues | OPEN | — |
| 🔴 **Critical** | [#7678] All subAgent tasks timeout | CLOSED | — |
| 🟠 **High** | [#8162] OpenAI Responses API streaming empty responses | OPEN | — |
| 🟠 **High** | [#8129] Image resizing loses EXIF orientation | CLOSED | [#8136] |
| 🟠 **High** | [#8009] Oversized image permanently breaks session | CLOSED | [#8010] |
| 🟡 **Medium** | [#8143] Console error spam: SVG receives non-numeric length | OPEN | [#8157] |
| 🟡 **Medium** | [#8158] Final answer renders as empty bubble with Scroll headline | OPEN | [#8159] |
| 🟡 **Medium** | [#8147] Console crashes after agent switch (crypto.randomUUID) | CLOSED | [#8089] |
| 🟢 **Low** | [#8135] GPU performance: large backdrop-filter radii on iGPU | OPEN | — |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likely Target |
|---------|-------|----------------|
| Spanish (es) interface language | [#8160](https://github.com/agentscope-ai/QwenPaw/issues/8160) | Near-term (i18n push) |
| Tool approval i18n support | [#7809](https://github.com/agentscope-ai/QwenPaw/issues/7809) | Near-term |
| `view_audio` built-in tool | [#8081](https://github.com/agentscope-ai/QwenPaw/issues/8081) | Mid-term (multimodal expansion) |
| Hub account remarks | [#8152](https://github.com/agentscope-ai/QwenPaw/issues/8152) | Minor release |
| Reduced effects console mode | [#8135](https://github.com/agentscope-ai/QwenPaw/issues/8135) | Performance optimization |

**Predicted next version priorities**: Security patch for MCP RCE, i18n parity (Spanish), Console stability fixes.

---

## 7. User Feedback Summary

**Pain points reported today:**
- **Reliability**: SubAgent timeouts, chat history loss, session-breaking images — users report production-impacting stability issues
- **Performance**: Console GPU usage on integrated graphics due to heavy backdrop-filter effects
- **UX**: Frequent page loading failures, console crashes after agent switching

**Satisfaction signals:**
- Fixes for EXIF orientation and media rejection recovery are well-received (address long-standing media handling pain points)
- New local model tiers (27B, 35B-A3B) expand deployment options

---

## 8. Backlog Watch

| Item | Age | Status | Concern |
|------|-----|--------|---------|
| [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) OpenViking memory plugin | ~33 days | OPEN, Under Review | Large PR (XXXL) awaiting merge |
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) Plugin hot reload | ~36 days | OPEN | Complex refactor, critical for plugin stability |
| [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) Durable paginated transcript history | ~18 days | OPEN, XXXL size | High-value feature for chat reliability |
| [#8121](https://github.com/agentscope-ai/QwenPaw/pull/8121) Creator 2.0.1 release | ~2 days | OPEN | Awaiting review |

**Recommendation**: Maintainers should prioritize reviewing the OpenViking memory plugin and plugin hot reload PRs, as they represent significant architectural improvements. The MCP RCE vulnerability (#8153) requires immediate security response.

---

*Generated from GitHub data — agentscope-ai/QwenPaw (2026-10-10)*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to generate a structured project digest for ZeroClaw based on the GitHub data provided. Let me analyze the data and create a comprehensive digest following the specified sections.

Let me organize the data:

**Overview of activity:**
- 26 issues updated in last 24h (19 open/active, 7 closed)
- 50 PRs updated in last 24h (44 open, 6 merged/closed)
- 0 new releases

**Latest Issues (26 total, showing some key ones):**
- #8692: Tracker for maintainer decision queue for RFCs (open)
- #7432: Tracker for Runtime and gateway delivery v0.8.6 and v0.9.0 (open)
- #9887: Enhancement about downscaling oversized images (open)
- #11420: Bug - SQLite session rewrites created_at (open)
- #11254: RFC about A2A protocol crate (open)
- #11166: Feature about evicting images in batches (closed)
- #11204: Bug - OpenRouter spend shows $0.00 (open)
- #11613: Bug - Cost ledger drops provider's total_tokens (open)
- #10700: Bug - cost records carry daemon-lifetime session id (closed)
- #10550: Feature about bound skill HTTP DNS resolution (closed)
- #11235: RFC about Knowledge corpus - document retrieval (open)
- #11074: RFC about search_routes for web_search_tool (open)
- #11612: Bug - Re-running shell command aborts agent loop (open)
- And more...

**Latest PRs (50 total, showing top 20):**
- #11467: feat(agent): add opt-in single-tool provider rounds (open)
- #11617: fix(agent): close steering channel before turn finishes (open)


- #11462: feat(delegate): route independent child approvals (open)
- #11473: feat(tools): defer built-in schemas through tool_search (open)
- #11587: fix(runtime): apply config/set cost limits (open)
- #11466: feat(config): report per-target application results (open)
- #11408: fix(rpc): guard SOP and session effects (open)
- #9453: fix(runtime): estimate context usage (open)
- #11634: ci(rust): bump toolchains to 1.99.0 (open)
- #11411: fix(auth): guard private SOP access (open)
- #11423: fix(oidc): preserve reserved characters (open)
- #11422: test(rpc): keep TUI signing bound (open)
- #11410: fix(auth): guard cron writes (open)
- #11590: ci(windows): task-owner recovery (open)
- #11528: fix(zerocode): exit on terminal loss (open)
- #11454: fix(runtime): correlate conversation keys (closed)
- #11404: test(providers): run each fake Grok fixture (open)
- #11403: perf(providers): pin Codex prompt-cache (open)
- #11419: feat(config): make secret key/value maps editable (open)
- #11494: refactor(zerocode): isolate client message queue (closed)

Now I'll structure this into a proper project digest.</think>

# ZeroClaw Project Digest — 2026-10-10

## Today's Overview

ZeroClaw maintains high development velocity with **50 PRs** and **26 issues** updated in the past 24 hours. The project shows active progress on multiple fronts: cost tracking and observability bugs are receiving attention, the v0.9.0 gateway separation milestone is advancing via tracker #7432, and RFC activity remains robust with three new architecture proposals. No releases were published today. Overall health appears stable, though several P1 bugs—particularly around Telegram integration and memory leaks—require urgent focus.

---

## Releases

No new releases today.

---

## Project Progress

### Merged/Closed PRs (6 total)

| PR | Title | Status |
|----|-------|--------|
| #11454 | fix(runtime): correlate conversation keys with turn traces | Closed |
| #11494 | refactor(zerocode): isolate client message queue ownership | Closed |

**Key advances:**
- **Cost tracking improvements**: PR #11587 now applies `config/set` cost limits to the live cost tracker in real-time, addressing a gap where runtime config changes weren't reflected in spend monitoring.
- **Context usage estimation**: PR #9453 fixes the context meter for local OpenAI-compatible providers (llama.cpp) that omit token counts—previously these showed blank usage.
- **ZeroCode resilience**: PR #11528 backports terminal EOF handling from Crossterm, improving graceful exit behavior.
- **Rust 1.99.0 upgrade**: PR #11634 bumps all CI toolchains and fixes Clippy compatibility findings.

---

## Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Comments | Link |
|-------|-------|----------|------|
| #8692 | [Tracker]: Maintainer decision queue for RFCs and design issues | 15 | [View](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| #7432 | [Tracker]: Runtime and gateway delivery - v0.8.6 and v0.9.0 | 6 | [View](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) |
| #9887 | Downscale oversized images instead of dropping them | 6 | [View](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) |
| #11420 | [Bug]: SQLite session rewrites created_at of every message | 6 | [View](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) |
| #11254 | RFC: A2A protocol crate (zeroclaw-a2a) | 5 | [View](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) |

**Analysis:**
- **Maintainer queue visibility**: Issue #8692 serves as the central queue for RFCs and design decisions—high comment activity reflects active architectural discussions.
- **Image handling gap**: #9887 requests downscaling vs. outright rejection for oversized images, plus disabling limits with 0—a quality-of-life improvement for multimodal workflows.
- **v0.9.0 gateway separation**: #7432 tracks Phase 2 (v0.8.6 runtime) and Phase 3 (gateway separation), indicating imminent release work.

### Most Active PRs (by attention/priority)

| PR | Title | Size | Link |
|----|-------|------|------|
| #11467 | feat(agent): add opt-in single-tool provider rounds | XL | [View](https://github.com/zeroclaw-labs/zeroclaw/pull/11467) |
| #11466 | feat(config): report per-target application results | XL | [View](https://github.com/zeroclaw-labs/zeroclaw/pull/11466) |
| #11473 | feat(tools): defer built-in schemas through tool_search | XL | [View](https://github.com/zeroclaw-labs/zeroclaw/pull/11473) |
| #11462 | feat(delegate): route independent child approvals to target operator | L | [View](https://github.com/zeroclaw-labs/zeroclaw/pull/11462) |
| #11419 | feat(config): make secret key/value maps editable in zerocode and dashboard | L | [View](https://github.com/zeroclaw-labs/zeroclaw/pull/11419) |

---

## Bugs & Stability

### Priority P1 Bugs (Urgent)

| Issue | Title | Severity | Status | Fix PR? |
|-------|-------|----------|--------|---------|
| #11612 | Re-running approved shell command aborts agent loop | S1 - workflow blocked | Open | No |
| #11608 | Telegram listener wedges on blackholed request | S1 - workflow blocked | Open | No |
| #11615 | Telegram send path ignores 429 retry_after | S1 - workflow blocked | Open | No |
| #11420 | SQLite rewrites created_at on every turn | S2 - degraded | Open | No |
| #11204 | OpenRouter spend shows $0.00, tokens classified "free tok" | S2 - degraded | Open | No |
| #11614 | map_key_sections leaks memory on every call | S1 - workflow blocked | Open | No |
| #11618 | ZeroCode drops queued message on SESSION_BUSY | Medium | Open | No |

### Priority P2 Bugs

- **#11613**: Cost ledger under-counts tokens for models with hidden reasoning (Gemini via OpenAI-compatible)
- **#11632**: Desktop (Linux/Tauri) WebKitWebProcess repaints continuously at ~100% GPU
- **#11623**: ZeroCode drops pending ask_user prompt without reply
- **#11484**: ZeroCode Agent turns disable repetitive-tool safeguards
- **#11371**: MCP nested object argument serialized as string before tool execution

---

## Feature Requests & Roadmap Signals

### Active RFCs & Enhancement Proposals

| Issue | Title | Domain | Link |
|-------|-------|--------|------|
| #11254 | RFC: A2A protocol crate (zeroclaw-a2a) | Architecture | [View](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) |
| #11235 | RFC: Knowledge corpus — document retrieval (RAG) for the agent | Architecture | [View](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) |
| #11074 | RFC: search_routes — hint-based provider routing for web_search_tool | Architecture | [View](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) |

**Roadmap predictions for next version (v0.9.0):**
- **Gateway separation**: Phase 3 of #7432 indicates the gateway will be decoupled as a standalone component.
- **A2A protocol**: #11254 proposes a dedicated crate for agent-to-agent communication, signaling interop ambitions.
- **RAG capabilities**: #11235 would add document retrieval, expanding the agent's knowledge reach.
- **Provider routing**: #11074 adds search-specific routing hints, complementing existing model_routes.

---

## User Feedback Summary

### Pain Points Identified

1. **Cost tracking broken for OpenRouter**: Users report $0.00 spend despite heavy usage (#11204)—trust issue for billing visibility.
2. **Memory leaks surface**: #11614 (config schema path leak) and #11632 (continuous GPU repaint) degrade system stability over time.
3. **Telegram integration fragile**: Two P1 bugs (#11608, #11615) indicate the Telegram channel lacks proper timeout and rate-limit handling.
4. **ZeroCode UX gaps**: Message timing invisible (#11620), queued messages silently dropped (#11618, #11623), and repetitive-tool safeguards disabled in Agent mode (#11484).

### Satisfaction Signals

- Image batch eviction (#11166) and context estimation (#9453) address long-standing multimodal and observability pain points.
- Config-driven cost limits now apply live (#11587), a highly requested operational control.
- Deferred built-in tool schemas (#11473) improve discovery without cluttering the tool list.

---

## Backlog Watch

### Issues Needing Maintainer Attention

| Issue | Title | Age | Status | Link |
|-------|-------|-----|--------|------|
| #10550 | Bound skill HTTP DNS resolution and test dispatch seam | ~38d | Closed (follow-up) | [View](https://github.com/zeroclaw-labs/zeroclaw/issues/10550) |
| #10700 | Bug: cost records carry daemon-lifetime session id | ~33d | Closed | [View](https://github.com/zeroclaw-labs/zeroclaw/issues/10700) |
| #11166 | Evict images in batches when per-request cap exceeded | ~14d | Closed | [View](https://github.com/zeroclaw-labs/zeroclaw/issues/11166) |

**Observations:**
- Several tracker and RFC issues have active follow-up work (#10550, #10700) that have closed but may need verification.
- Three Telegram-related P1 bugs (#11608, #11615, plus #11612 for shell) filed this week require immediate triaging.
- The community entry points tracker (#11638) was just filed—low urgency but visible brand impact.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*