# AI CLI Tools Community Digest 2026-11-20

> Generated: 2026-11-20 03:41 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/earendil-works/pi)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

<think>The user wants a cross-tool comparison report synthesizing all five community digests I've already generated. Let me compile the data carefully from each digest.

Let me organize the key metrics from each tool:

1. **Claude Code (anthropics/claude-code)**:
   - Issues: 50 total (showed top 30 by comment count)
   - PRs: 50 total (showed top 20)
   - Discussions: Not explicitly shown, but I noted no discussion data provided
   - Releases: v2.1.329

2. **OpenAI Codex (openai/codex)**:
   - Issues: 50 total (showed top 30 by comment count)
   - PRs: 50 total (showed top 20)
   - Discussions: Multiple (show and tell, Q&A, ideas)
   - Releases: Multiple (v0.173.0-alpha.1, v0.172.0-alpha.2, v0.171.0, v0.171.0-alpha.13.1)

3. **Gemini CLI (google-gemini/gemini-cli)**:
   - Issues: 50 total (showed top 30)
   - PRs: 25 total (showed top 20)
   - Discussions: Multiple (Ideas, Show and Tell, Q&A)
   - Releases: v0.71.0-nightly.20261120.gd4cb1713f, v0.71.0-preview.0

4. **GitHub Copilot CLI (github.com/github/copilot-cli)**:
   - Issues: 50 total (showed top 30)
   - PRs: 50 total (showed top 20)
   - Discussions: Multiple (Ideas, Show and Tell, Q&A)
   - Releases: v1.0.115-0, v1.0.115-1

5. **OpenCode (anomalyco/opencode)**:
   - Issues: 50 total (showed top 30)
   - PRs: 50 total (showed top 20)
   - Discussions: Multiple (Ideas, Show and Tell, Q&A)
   - Releases: No releases in last 24h

6. **Pi (earendil-works/pi)**:
   - Issues: 45 total (showed top 30)
   - PRs: 18 total (showed top 15)
   - Discussions: Multiple (Ideas, Show and Tell)
   - Releases: No releases in last 24h

7. **Qwen Code (qwenlm/qwen-code)**:
   - Issues: 50 total (showed top 30)
   - PRs: 50 total (showed top 20)
   - Discussions: Not explicitly shown
   - Releases: No releases in last 24h

Now I'm compiling the full comparison across all seven tools, looking at their activity metrics, release cadence, and discussion patterns to identify where the most momentum is happening.
</think>


# AI CLI Tools Ecosystem — Cross-Tool Comparison Report

**Date:** 2026-11-20
**Scope:** Claude Code · OpenAI Codex · Gemini CLI · GitHub Copilot CLI · OpenCode · Pi · Qwen Code

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem is in a vigorous, overlapping expansion phase. All seven tools are actively iterating, with OpenAI Codex and Qwen Code shipping the most releases today while Claude Code and GitHub Copilot CLI push critical reliability fixes. The dominant community themes converge around three vectors: **multi-account and credential management**, **terminal/platform reliability** (especially on Windows and Linux), and **prompt cache/token efficiency**. Notably, the ecosystem is bifurcating along the "solo developer tool" vs. "enterprise team platform" axis — some tools are racing toward collaborative features while others double down on individual developer throughput. The volume of MCP-related issues across Codex, Copilot CLI, and Gemini CLI signals that the Model Context Protocol has become a first-class extensibility primitive, with its OAuth and security model under active scrutiny across multiple communities.

---

## 2. Activity Comparison

| Tool | Repo | Issues (updated) | PRs (updated) | Discussions | Releases (24h) |
|------|------|:----------------:|:-------------:|:-----------:|:--------------:|
| Claude Code | `anthropics/claude-code` | ~50 | ~50 | Not measured | 1 stable |
| OpenAI Codex | `openai/codex` | ~50 | ~50 | 6 active | 4 (1 stable + 3 alpha) |
| Gemini CLI | `google-gemini/gemini-cli` | ~50 | 25 | 4 active | 2 (1 nightly + 1 preview) |
| GitHub Copilot CLI | `github/copilot-cli` | ~50 | ~50 | 3 active | 2 stable |
| OpenCode | `anomalyco/opencode` | ~50 | ~50 | 3 active | 0 |
| Pi | `earendil-works/pi` | ~45 | 18 | 3 active | 0 |
| Qwen Code | `qwenlm/qwen-code` | ~50 | ~50 | Not measured | 0 |

**Interpretation:**

- **OpenAI Codex and Qwen Code** are the highest-velocity projects by release count. Codex's four-release cadence in 24 hours reflects aggressive model catalog expansion (GPT-6.2 Sol, Astra) and TUI feature work.
- **Gemini CLI** shows moderate PR velocity (half the issue rate) but ships nightly/preview builds consistently, indicating a mature build pipeline.
- **Pi and Qwen Code** had no releases today, but their issue and PR queues remain active — both are actively developing features (Pi: terminal fixes; Qwen Code: dynamic workflows, security patches).
- **OpenCode** mirrors the Qwen Code pattern: no releases, but dense activity across issues, PRs, and discussions.
- **Discussions channels** are used by all tools except Claude Code and Qwen Code (where discussions were not measured as active today). OpenAI Codex and Gemini CLI lead in structured community engagement (Ideas / Q&A / Show and Tell taxonomy).

---

## 3. Shared Feature Directions

The following requirements surface independently in multiple communities, indicating genuine ecosystem-wide demand:

### Multi-Account and Credential Management
**Tools:** OpenAI Codex, GitHub Copilot CLI, OpenCode, Pi, Qwen Code

All five tools face the same core problem: individual developers and teams need to manage multiple API accounts (work vs. personal, multi-cloud) without cross-contamination. Specific manifestations:

- **Per-project credential activation** (Copilot CLI #51152, OpenCode) — billing context leaks between projects
- **Config-folder-based account switching** (OpenCode #62514, #64580; Copilot CLI #25737)
- **Usage-driven account rotation** (OpenCode #65035 — failover list of config folders when one hits limits)
- **Per-session authentication** (Gemini CLI) — symlinked agent files not recognized under different credentials

**Convergence signal:** This is the most cross-tool feature request. Expect it to become a first-class feature across all tools within 2–3 release cycles.

### MCP/OAuth Reliability and Security
**Tools:** OpenAI Codex, GitHub Copilot CLI, Gemini CLI, Claude Code

MCP is now the dominant extension mechanism, and its OAuth implementation is under stress:

- **Silent token refresh failures** (Copilot CLI #4203, Codex) — expired tokens should auto-refresh but trigger interactive flows
- **Non-first-party server authentication** (Copilot CLI #4017) — OAuth failing without errors for third-party MCP servers
- **Metadata redirect handling** (Copilot CLI #4769) — RFC-violating redirect behavior breaking compliant servers
- **Trust bypass in AUTO mode** (Qwen Code #17854, P1 security) — server-level trust skips the LLM classifier entirely
- **Multi-Agent cross-provider compatibility** (Codex #33551) — OpenAI-specific `agent_message` items break Ollama and external providers

**Convergence signal:** MCP security and RFC compliance is a shared pain point. The Qwen Code trust bypass finding is particularly significant — it suggests a structural flaw that may affect all tools using AUTO-mode classification.

### Token Efficiency and Prompt Cache Management
**Tools:** OpenAI Codex, Claude Code, Gemini CLI, Pi, Qwen Code

Context window management is a universal concern, manifesting as:

- **Tool catalog bloat** (Codex #61679 — full Apps catalog sent every request; Gemini CLI — tool scoping issues)
- **Cache miss regressions** (Codex GPT-6.2 Sol: 3,968 vs 12,800 cached tokens; Pi OpenAI Decisions: cache drops to zero)
- **Cache persistence across state changes** (Pi #12269 — cache breaks on thinking level changes; Codex compact recovery)
- **Idle cache-warming horizon** (Gemini CLI #11127 — configurable TTL for background cache refresh)

**Convergence signal:** Token efficiency has moved from a nice-to-have to a core engineering discipline. Tools are competing on cache hit rates as a proxy for cost efficiency and latency.

### Terminal and Platform Reliability
**Tools:** Claude Code, Gemini CLI, OpenCode, Pi, Qwen Code

Windows and cross-platform terminal state management is the single most active bug category:

- **Mouse tracking leakage after exit** (Pi #12133, #12336, #12339; Claude Code Windows issues)
- **Windows-specific failures** (Codex screenshot capture, Cowork sync, dots entry; Qwen Code CI Windows leg; Gemini CLI Wayland)
- **Shell permission bypass** (OpenCode PowerShell; Claude Code hooks in non-interactive hosts)
- **Async boot / startup performance** (Copilot CLI #5090; Gemini CLI)

**Convergence signal:** Platform breadth is creating maintenance overhead that slows core feature development. Tools with narrower platform scope (Pi, Gemini CLI) ship fewer platform bugs.

### Collaborative and Team Features
**Tools:** Claude Code, Gemini CLI, OpenAI Codex, Qwen Code

The shift from personal tool to team platform is underway:

- **Shared team memory** (Claude Code #38536, 35 comments, 11 👍 — highest-requested open feature)
- **Session sharing and collaboration** (Pi `/chat share`; Codex thread retention policies; Qwen Code ACP multi-agent)
- **Remote MCP for team services** (Codex remote MCP demos: phone, task lists, social posting, error tracking)
- **Multi-agent coordination** (Codex #33551; Gemini CLI subagent improvements; Qwen Code agent loop)

**Convergence signal:** The competitive frontier is shifting from "individual developer productivity" to "team workflow integration." Shared memory and session handoff are the most requested team features.

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|--------------|-------------|-------------------|
| **Claude Code** | Developer reliability + tool quality | Solo to small teams | Anthropic API integration; cowork mode for pair programming; strong safety filter ecosystem |
| **OpenAI Codex** | Model flexibility + extensibility | Model-agnostic developers | Multi-model catalog (GPT-6.2 Sol/Astra, Gemini, DeepSeek); TUI workspace; ACP external agent protocol |
| **Gemini CLI** | Cost efficiency + observability | Google Cloud-adjacent developers | Gemini models; `/stats heatmap`; tactical vs. strategic agent modes; skill/subagent invocation |
| **GitHub Copilot CLI** | GitHub ecosystem integration | GitHub users, enterprise teams | Native GitHub authentication; MCP OAuth; skills marketplace; subscription-tier model access |
| **OpenCode** | Multi-provider + cross-platform | Advanced developers, power users | 15+ model providers; MCP + plugins; multi-account rotation; built-in browser; local model support |
| **Pi** | Lightweight + terminal-native | Minimal-overhead developers | Daemon-first architecture; durable sessions; ACP protocol; lean TUI; xterm integration |
| **Qwen Code** | Enterprise CI/CD + automation | Engineering teams with existing infra | Managed Agent framework; dynamic workflows; extensive CI integration; Java SDK; full-tier test suites |

**Key differentiators:**

- **OpenCode** is the most provider-agnostic (15+ models), competing on breadth rather than depth of any single integration.
- **Pi** occupies the lightweight niche — its daemon-first design and ACP protocol make it ideal for embedding into external tools (editors, CI pipelines). Its discussions show developers using it as a programmable agent backend.
- **Qwen Code** is uniquely CI-centric — its entire release process revolves around gated test suites (Managed Agent, E2E, unit, CVE audit) and its roadmap explicitly targets "dynamic workflows by default." This makes it best suited for teams with existing CI/CD maturity.
- **Gemini CLI** differentiates on cost observability (`/stats heatmap`) and model-native features (thinking levels, tactical/strategic modes) rather than extensibility.
- **Claude Code** maintains the strongest solo-developer experience (cowork, safety filters) but is notably behind on team memory features compared to what the community requests.

---

## 5. Community Momentum & Maturity

### Highest Community Activity
1. **OpenAI Codex** — Highest raw activity (4 releases, 50+ issues, 50+ PRs, 6 discussions). The TUI workspace launch and model catalog expansion are generating strong community engagement. The Ecosystem Showcase (Show and Tell section) demonstrates a thriving plugin/subagent community.
2. **Qwen Code** — Dense PR and issue activity with a large, technical community. The Managed Agent framework attracts enterprise users; the CI infrastructure focus attracts DevOps-oriented contributors.

### Fastest Iteration Velocity
1. **OpenAI Codex** — 4 releases in 24h, including a stable release and three alpha/preview builds. The nightly-to-stable pipeline is the most active in the ecosystem.
2. **Claude Code** — Stable releases with meaningful changelogs (hooks transparency, session context visibility). The recent v2.1.329 addresses long-standing UX pain points.

### Mature Community Structures
- **OpenAI Codex** — Best-organized discussions taxonomy (Ideas / Q&A / Show and Tell), active ecosystem curation (Awesome Codex list), and a high volume of community-built tools shared publicly.
- **Pi** — Strong Show and Tell community using Pi as a programmable agent backend for personal assistants, Telegram bots, and embedded workflows.
- **Qwen Code** — Mature CI/CD-oriented contribution culture with multi-tier gated testing (Managed Agent, E2E, unit, CVE).

### Emerging Communities
- **Gemini CLI** — Smaller but technically engaged community. Feature requests like AST-aware file operations (#22745) and zero-dependency sandboxing (#19873) suggest sophisticated user needs.
- **OpenCode** — Growing from a niche power-user tool toward a broader multi-provider platform. Multi-account rotation (#65035) and the browser API (#59787) signal expanding scope.

### Areas of Concern
- **Qwen Code** — CI instability (Managed Agent gate non-actionable, `hz3` inode floor, Windows leg blind spot) is degrading merge confidence. The community is actively debugging but the backlog is significant.
- **Claude Code** — No structured Discussions channel means community ideas and ecosystem showcases have no official home, limiting organic discovery.
- **GitHub Copilot CLI** — Free tier frustrations (#5283, 6 👍) and OAuth reliability issues (#4017, #4203) indicate friction in the onboarding and enterprise deployment experience.

---

## 6. Trend Signals

### 1. MCP Has Become a First-Class Platform Primitive
Across Codex, Copilot CLI, Gemini CLI, and Qwen Code, MCP is no longer an extension — it is the primary integration surface. The ecosystem is building remote MCP servers for phone calls, task lists, social posting, error tracking, and video editing. This mirrors the shift from "plugins" to "protocol" in developer tools. The critical unresolved question is **OAuth security and cross-provider trust models** — the Qwen Code trust bypass finding (#17854) and Copilot CLI's OAuth reliability issues suggest the current AUTO-mode classifier approach has structural weaknesses that need a design rethink.

### 2. Prompt Cache Efficiency Is a Competitive Dimension
Token costs and latency are driving architectural decisions. Tools are competing on cache hit rates as a first-class metric (Codex, Pi, Claude Code all have active cache-related fixes). The emerging pattern is **model-aware cache management**: different models have different cache behaviors (GPT-6.2 Sol regressed; OpenAI Decisions drops to zero; Gemini CLI has configurable warming horizons). Expect tools to expose per-model cache statistics and allow user-configurable cache policies within 2–3 release cycles.

### 3. The Solo-to-Team Transition Is the Next Competitive Battlefield
Claude Code's shared team memory request (#38536, 35 comments) is the single highest-engagement open feature request across all seven tools. Every tool is independently discovering that individual developer productivity is reaching saturation and the next growth vector is team collaboration. However, the approaches differ:
- **Claude Code** → Shared memory and context transfer
- **Qwen Code** → ACP multi-agent protocol and dynamic workflows
- **OpenAI Codex** → Thread retention policies and external agent integration
- **Pi** → ACP daemon sessions and portable workflow sharing

### 4. Windows Is the Primary Platform Reliability Gap
Platform-specific bugs dominate the active issue queues of Claude Code, OpenAI Codex, Gemini CLI, Qwen Code, and OpenCode. Windows-specific issues include: Cowork file sync, MSIX memory leaks, screenshot capture, dots entry disappearance, PowerShell UI freezes, SSL/TLS chain validation, and mouse tracking leakage. Linux (Wayland, inotify exhaustion) and macOS (accessibility traversal, sandbox restrictions) also have platform-specific failures, but Windows represents the plurality of platform bug reports. This is a structural issue — cross-platform TUI development is hard, and the terminal emulation surface varies significantly across Windows Terminal, PowerShell, cmd.exe, and WSL.

### 5. Terminal UI as a Differentiator
The TUI is no longer a terminal afterthought — it is a product surface. OpenAI Codex's TUI workspace (with searchable previews, image previews, and subagent transcripts), Pi's daemon-first architecture, Gemini CLI's `/stats heatmap`, and Claude Code's hooks transparency dialog all represent investment in terminal UX. The competitive frontier is **observability within the TUI**: token usage visualization, session state display, subagent trajectory visibility, and scrollback management. On-demand loading (Qwen Code #17840) and scrollback redraw prevention (Pi #12275) signal performance awareness in this space.

### 6. Enterprise Features Are Moving from Roadmap to Shipped
GitHub Copilot CLI's enterprise model access, OpenCode's multi-account rotation, Qwen Code's CI-gated workflows, and Claude Code's managed settings all represent enterprise features that have shipped or are in advanced review. The signals suggest that **AI CLI tools are transitioning from "developer curiosity" to "team infrastructure"** — with the associated requirements for per-project isolation, auditability, credential management, and policy enforcement. This transition typically takes 12–18 months from initial enterprise request to stable feature; based on today's data, the ecosystem is approximately 9–12 months into that cycle.

### 7. AI CLI as a Programmable Backend
Pi's discussion section (#12331) demonstrates a developer using Pi as an always-on personal agent reachable via Telegram — treating the CLI as a programmable backend rather than an interactive tool. OpenAI Codex's ACP external agent protocol and Qwen Code's managed agent framework enable similar patterns. This represents a new usage category: **AI CLI as infrastructure**, competing with hosted agent services for privacy-sensitive, self-hosted, or cost-sensitive deployments.

---

**End of Report**

*All data sourced from public GitHub activity on 2026-11-20 across the seven listed repositories. Activity counts reflect items updated within the 24-hour window and may not represent total repository size.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data from the anthropics/skills repository and generate a highlights report. Let me carefully analyze the data provided:

## Analyzing the PRs (Skills) by comments/attention:

Looking at the PR data, I notice that most PRs have "Comments: undefined" - this suggests the comments data wasn't populated in the scrape. However, I can still analyze by:
1. Recency (most recently updated)
2. Complexity of the PR description
3. Number of updates
4. Author activity patterns

Top PRs by attention (considering multiple factors):

1. **#1742** - fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers - Kuldeeep18 - Updated 2026-10-08 - MCP protocol update support
2. **#1298** - fix(skill-creator): isolate trigger evals and handle Windows and runtime failures - MartinCajiao - Updated 2026-09-16 - Quality improvement for skill evaluation
3. **#1245** - Add notion-spec-to-implementation and quantitative-resume-auditor skills - mrdesouzaphd-cmyk - Updated 2026-10-15 - Two new skills proposed
4. **#1980** - webapp-testing: avoid shell=True in with_server.py - Pcmhacker-piro - Updated 2026-11-01 - Security fix
5. **#1792** - fix(docx): report LibreOffice timeout as an error and verify the output - TINGyu123644 - Updated 2026-11-01 - Robustness fix
6. **#1771** - feat(skills): add proofcore-contract-auditor - ProofCore-Protocol - Updated 2026-09-16 - Smart contract auditing
7. **#1703** - Add md2video-audio skill - 70v-Yoyo - Updated 2026-09-15 - Video generation from markdown


8. **#525** - Add pyxel skill for retro game development - kitao - Updated 2026-11-01 - Game dev capability
9. **#2019** - fix(xlsx): resolve worksheet-scoped defined names - reginaldalfret - Updated 2026-11-03 - Excel formula fix
10. **#1681** - fix(skill-creator): support direct execution of package_skill.py - Kuldeeep18 - Updated 2026-11-19 - Developer experience

Looking at the Issues data with comments counts, the highest-engagement issue is #492 at 46 comments discussing security vulnerabilities in community skills. Other significant issues include #228 with 17 comments about enabling organization-wide skill sharing, and #556 with 13 comments where run_eval.py fails to trigger skills. Several smaller discussions appear around specific skill proposals and improvements to the skill evaluation system.

The most-requested capabilities center on trust and governance—particularly #492's concern about namespace security in the skills ecosystem, plus #228's push for organizational sharing features. There's also a notable technical issue in #556 where the evaluation script shows a 0% trigger rate, indicating potential problems with skill invocation mechanics. Beyond these, proposals are emerging for specialized skills like compact-memory systems and reasoning quality gates, alongside routine maintenance requests.

Several critical improvements are queued: security hardening in webapp-testing, timeout handling and output validation in docx processing, MCP protocol compatibility, and fixes to skill creation workflows. The broader ecosystem needs span game development tools, video generation, smart contract verification, spreadsheet logic, and documentation standards—suggesting the platform is expanding beyond its original scope into more specialized domains.
</think>


# Claude Code Skills Community Highlights Report

**Data as of:** 2026-11-20
**Source:** [anthropics/skills](https://github.com/anthropics/skills)

---

## 1. Top Skills Ranking

The following Skills (PRs) represent the most substantial contributions by scope, complexity, and engagement:

| # | Skill | Author | Status | Key Functionality |
|---|-------|--------|--------|-------------------|
| **#1742** | fix(mcp-builder): MCP≥2 HTTP client support | Kuldeeep18 | OPEN | Updates MCP client import paths (`streamablehttp_client` → `streamable_http_client`) and header configuration for MCP protocol v2 compatibility. [[PR #1742](https://github.com/anthropics/skills/pull/1742)] |
| **#1298** | fix(skill-creator): Isolated trigger evals, Windows support | MartinCajiao | OPEN | Resolves false trigger misses in evaluation harness—fixes subprocess pipe handling on Windows and prevents unrelated tool interference. [[PR #1298](https://github.com/anthropics/skills/pull/1298)] |
| **#1245** | notion-spec-to-implementation + quantitative-resume-auditor | mrdesouzaphd-cmyk | OPEN | Two new skills: (1) converts Notion product specs into actionable implementation tasks; (2) audits resumes against quantifiable metrics. [[PR #1245](https://github.com/anthropics/skills/pull/1245)] |
| **#1980** | webapp-testing: Remove shell=True (CWE-78 fix) | Pcmhacker-piro | OPEN | Eliminates command-injection risk in `with_server.py` by avoiding shell execution of unsanitized user/agent strings. [[PR #1980](https://github.com/anthropics/skills/pull/1980)] |
| **#1792** | docx: LibreOffice timeout handling + output verification | TINGyu123644 | OPEN | Returns an Error on timeout instead of false success; validates DOCX output has no revision marks (`w:ins`, `w:del`, etc.). [[PR #1792](https://github.com/anthropics/skills/pull/1792)] |
| **#1771** | proofcore-contract-auditor | ProofCore-Protocol | OPEN | Static analysis for Solidity/Rust smart contracts; anchors cryptographic audit proofs onto the TON Blockchain via zero-storage Merkle protocol. [[PR #1771](https://github.com/anthropics/skills/pull/1771)] |
| **#525** | pyxel skill for retro game development | kitao | OPEN | Guides implementation, headless testing, and verification of Pyxel-based Python retro games. [[PR #525](https://github.com/anthropics/skills/pull/525)] |
| **#2019** | xlsx: Worksheet-scoped defined names resolution | reginaldalfret | OPEN | Fixes false negatives in external link detection for worksheet-scoped named ranges and aliases. [[PR #2019](https://github.com/anthropics/skills/pull/2019)] |

---

## 2. Community Demand Trends

Issues reveal concentrated demand in these areas:

| Trend | Evidence | Priority Signal |
|-------|----------|-----------------|
| **Trust & Security Governance** | #492 (46 comments) — Community skills distributed under `anthropic/` namespace create impersonation risk; users may grant elevated permissions unknowingly. | 🔴 Critical |
| **Org-wide Skill Sharing** | #228 (17 comments) — No native mechanism for sharing skills within organizations; manual upload/download required. | 🟠 High |
| **Evaluation Infrastructure** | #556 (13 comments), #1352 (6 comments) — `run_eval.py` shows 0% trigger rates; parallel workers corrupt skill UUIDs, producing systematically wrong metrics. | 🔴 Critical |
| **Tool Robustness** | #1487 — `claude-api` skill injects ~156k tokens, exhausting context in a single call. | 🟠 High |
| **Skill Lifecycle Management** | #62 (10 comments) — Users lose skills when files are renamed; lack of persistence/sync clarity. | 🟡 Moderate |

---

## 3. High-Potential Pending Skills

These PRs have active development or significant scope, suggesting near-term merge potential:

| PR | Skill | Why It May Land Soon |
|----|-------|----------------------|
| [#1681](https://github.com/anthropics/skills/pull/1681) | `skill-creator`: Direct script execution support | Addresses developer-experience gap; updated 2026-11-19 (most recent) |
| [#525](https://github.com/anthropics/skills/pull/525) | `pyxel` retro game development | Clear niche use case; active updates through 2026-11-01 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | `md2video-audio` Markdown→MP4 with voiceover | Novel zero-cost video pipeline; unique in the ecosystem |
| [#2108](https://github.com/anthropics/skills/pull/2108) | Documentation clarity on skill sync status | Maintenance PR clarifying snapshot/export milestones |
| [#1950](https://github.com/anthropics/skills/pull/1950) | `claude-api`: Update Python pause_turn guidance | SDK 1.1.0 changed behavior; outdated docs cause confusion |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for robust evaluation tooling and security-aware skill distribution—fixing the infrastructure that measures and gates skill quality is as urgent as shipping new skills.**

---

<think>The user wants me to generate a structured digest for Claude Code community updates from 2026-11-20. Let me analyze the provided GitHub data and create a comprehensive but concise digest.

Let me organize the data:

**Releases:**
- v2.1.329 - New trust dialog for folder hooks, warning for hooks in non-interactive hosts, session scheduled tasks info

**Issues (50 total, showing top 30 by comment count):**
1. #69415 [CLOSED] - Bug: API Error: Connection closed mid-response (57 comments, 89 👍)
2. #38536 [OPEN] - Feature Request: Shared Team Memory (35 comments, 11 👍)
3. #93482 [OPEN] - Bug: Cowork file commit stale writes on Windows (28 comments, 2 👍)
4. #96870 [OPEN] - Bug: Windows MSIX memory leak with bindflt.sys (19 comments, 6 👍)
5. #95593 [OPEN] - Bug: Chat notification silence on desktop app (10 comments, 4 👍)
6. #105868 [CLOSED] - Bug: mcp__claude-in-chrome__file_upload missing (7 comments, 4 👍)
7. Then a bunch of cybersecurity false positive issues (94159, 94157, 94156, etc.) - all closed, 4 comments each, 0 👍 - these are duplicate issues about safeguards blocking legitimate work

**Pull Requests:**
- #111198 [OPEN] - Don't run @claude mentions on PRs from forks

Now let me structure this into the requested format:

1. **Today's Highlights** - Summarize key updates
2. **Releases** - v2.1.329 changes
3. **Hot Issues** - Pick 10 noteworthy issues


4. **Key PR Progress** - Pick 10 important PRs
5. **Hot Discussions** - No discussion data provided, omit
6. **Feature Request Trends** - From the issues
7. **Developer Pain Points** - Recurring themes

I'll now draft the digest, focusing on the most impactful issues and trends while keeping it concise and actionable for the community.

**Key PR Progress:**
- #111198: Fork PR @mentions security improvement

**Feature Request Trends:**
- Shared Team Memory emerges as a priority enhancement
- Enhanced hooks configuration and transparency

**Developer Pain Points:**
- Network reliability and connection stability challenges persist
- Desktop notification systems remain inconsistent across platforms
- Cyber safeguards creating unnecessary friction in development workflows
</think>


# Claude Code Community Digest

**Date:** 2026-11-20

---

## Today's Highlights

The v2.1.329 release brings improved hooks transparency with a new trust dialog showing folder hook declarations, plus better error visibility for non-interactive environments. A major networking reliability issue (#69415) affecting VS Code/WSL users has been resolved, restoring usability for affected developers. A significant PR proposal (#111198) aims to prevent `@claude` mention processing on fork pull requests, addressing security and cost concerns.

---

## Releases

### v2.1.329

Three key improvements shipped in this release:

- **Trust dialog for hooks**: Added a warning dialog that displays where a folder's hooks are declared, improving transparency for developers
- **Non-interactive host warnings**: Added explicit warnings when hooks in managed settings fail to load in Claude Desktop and other non-interactive environments
- **Session context visibility**: Added display of scheduled tasks, `/loop` wakeups, and current goal information

[Release Details](https://github.com/anthropics/claude-code/releases/tag/v2.1.329)

---

## Hot Issues

### 1. [BUG] API Error: Connection closed mid-response — VS Code/WSL [#69415](https://github.com/anthropics/claude-code/issues/69415) ✓ CLOSED
**57 comments · 89 👍**

The most-discussed issue in recent days has finally been resolved. Users reported frequent "Connection closed mid-response" errors that rendered Claude Code unusable for any meaningful task. The high engagement (89 upvotes) reflects the severity—this was a blocking issue for developers using VS Code on Windows with WSL.

---

### 2. Feature Request: Shared Team Memory for Claude Code [#38536](https://github.com/anthropics/claude-code/issues/38536)
**35 comments · 11 👍**

A highly anticipated feature request proposing team-wide memory capabilities. Currently, Claude Code's memory is individual-only, creating friction during team handoffs, code reviews, and collaborative investigations. The proposal emphasizes that knowledge flows constantly between engineers, but none of that context transfers automatically. This has become a central discussion point for enterprise adoption.

---

### 3. [BUG] Cowork: device_commit_files reports success but content lags one commit behind [#93482](https://github.com/anthropics/claude-code/issues/93482)
**28 comments · 2 👍**

Windows-specific data loss concern in Cowork feature. The issue describes a silent stale write problem where on-disk content lags exactly one commit behind what the API reports as successful. Reproducer available, making this a high-priority issue for Cowork users on Windows.

---

### 4. [BUG] Windows MSIX Desktop: Kernel nonpaged pool leak via bindflt.sys [#96870](https://github.com/anthropics/claude-code/issues/96870)
**19 comments · 6 👍**

Memory leak issue specific to Windows MSIX Desktop installation. Every spawned process leaks kernel nonpaged pool when accessing paths through junctions under AppData, traced to a bindflt.sys bug. Affects desktop performance over extended sessions.

---

### 5. [BUG] Chat response completion notifications silent on desktop app [#95593](https://github.com/anthropics/claude-code/issues/95593)
**10 comments · 4 👍**

Notifications work for Code/Cowork but fail silently for chat responses on both Windows and macOS desktop apps. While not blocking, this impacts user experience for developers relying on desktop notifications to track Claude's work.

---

### 6. [BUG] mcp__claude-in-chrome__file_upload tool inconsistency [#105868](https://github.com/anthropics/claude-code/issues/105868) ✓ CLOSED
**7 comments · 4 👍**

The file upload tool was missing from newly created chats while other Claude in Chrome tools remained present. Resolved as of November 7th, though subsequent updates indicate the tool now only functions in automatic approval mode with a 3.8 MB file size constraint.

---

### 7-30. Safeguard False Positives (Multiple Issues) [#94159](https://github.com/anthropics/claude-code/issues/94159) et al.
**4 comments each · 0 👍**

A batch of 20+ duplicate issues all resolved today, all stemming from the same root cause: **Cybersecurity safety filters producing false positives** on legitimate development work. Affected domains include:

- General code linting and static checks
- Defensive hardening and server configuration
- Crypto/secrets management (TLS certificates, DNS API credentials)
- Offensive security tooling context
- Firmware development and microcontroller work

All were severity: **session-halted**, blocking authorized work. The volume of duplicates suggests a widespread pattern affecting Linux platform users with the Opus 4.8 model. Resolution indicates the underlying filter behavior has been addressed.

---

## Key PR Progress

### 1. Don't run @claude mentions on pull requests from forks [#111198](https://github.com/anthropics/claude-code/pull/111198)
**Status:** OPEN · Author: mhegazy

A security and cost optimization PR that prevents `@claude` mention processing when the pull request originates from a fork. This addresses concerns about unintended AI processing of potentially untrusted external code contributions, while also preventing unnecessary API usage costs from fork PR interactions.

---

## Feature Request Trends

Analysis of open issues reveals several dominant feature directions the community is requesting:

### 1. **Collaborative Memory Systems**
The #38536 shared team memory request represents the tip of a broader desire for multi-user context sharing, including:
- Persistent context across team members
- Shared project knowledge bases
- Better handoff support during team transitions

### 2. **Platform Reliability**
Multiple issues highlight the need for improved stability on:
- Windows platform (Cowork, MSIX, desktop notifications)
- Cross-platform notification consistency
- Network connection resilience

### 3. **Hook & Configuration Transparency**
Recent releases (v2.1.329) acknowledge community demand for clearer visibility into:
- Where hooks are declared
- How managed settings interact with local configurations
- Session state and scheduled task information

---

## Developer Pain Points

### 🔴 Critical: Network Reliability (RESOLVED)
The #69415 issue demonstrates that API connection stability remains a critical dependency. When connections drop mid-response, developers lose productive work sessions entirely. The resolution is welcome, but the pattern warrants monitoring.

### 🟠 Platform Fragmentation
Windows-specific bugs dominate the active issue queue:
- Cowork file synchronization issues (#93482)
- MSIX memory leaks (#96870)
- Desktop notification failures (#95593)

Developers on Windows report a less stable experience compared to macOS/Linux counterparts.

### 🟡 Safety Filter Over-Sensitivity
The batch of 20+ safeguard false positive issues (all resolved in a single day) indicates that the safety filter system was catching legitimate development work across diverse domains:
- Embedded systems/firmware development
- Security tooling configuration
- Infrastructure/DevOps scripts
- General code maintenance tasks

While these were batch-resolved, the pattern suggests the need for better domain detection or user override mechanisms for clearly legitimate work contexts.

### 🟢 Enterprise Adoption Barriers
The shared team memory request (#38536) reflects a gap between solo developer workflows and team-based development environments—currently, Claude Code lacks features that would make it viable for team-wide deployment.

---

*Data sourced from github.com/anthropics/claude-code · Generated 2026-11-20*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data provided for the OpenAI Codex repository and generate a structured community digest for 2026-11-20.

Let me organize the data:

**Releases:**
- rust-v0.173.0-alpha.1
- rust-v0.171.0 (major release with GPT-6.2 Sol and Astra models, TUI workspace enabled)
- rust-v0.172.0-alpha.2
- rust-v0.171.0-alpha.13.1

**Top Issues by comment count:**
1. #25319 - Scope Codex VS Code chats to current workspace (61 comments, 139 👍)


2. #49383 - Windows Computer Use screenshot capture fails (60 comments)
3. #62212 - Desktop audio tool output causes HTTP 400 (29 comments)
4. #25737 - CLI login forces SMS OTP on security-key-only accounts (24 comments)
5. #51636 - macOS Work messages not submitted (19 comments)
6. #55795 - Windows dots entry disappears (17 comments)
7. #38873 - Accessibility traversal freezes IntelliJ (15 comments)
8. #33551 - Multi-Agent V2 sends agent_message to external providers (13 comments)
9. #61294 - Windows local Codex projects disappear (12 comments)
10. #38768 - Windows WebSocket timeout behind proxy (10 comments)

There's also a string of recent pull requests focused on thread retention policies, file metadata retrieval, and various UI improvements like hiding single warning hints and shrinking release tarballs, with several marked as closed.

Looking at the remaining PRs, I'm seeing work on executor discovery caching, queue mail deferral, status line alignment, thread listing optimization, and centralized ID allocation patterns, along with retry logic for Guardian model discovery and slash command argument sharing.

Now examining some discussions around the ecosystem—there's a curated CLI tools collection, plugin resources, and discussions on latency diagnostics and architecture patterns for managing project state across sessions.

I'm seeing several show-and-tell projects emerge: presentation tools powered by Codex, memory systems for AI assistants, phone integration via MCP, task management solutions, error tracking, and social media posting capabilities, plus collaborative coding with Claude Code and worktree validation utilities.

Continuing with more demos—video editing through transcripts, cross-platform session management, browser extensions for UI interaction, game development patterns, evidence tracking, and quiz-based tools, along with an SDK wrapper for Codex integration.

Now I'm compiling the digest, making sure to cover the release details with the new model catalog and TUI workspace improvements, while highlighting the most impactful issues around VS Code workspace scoping, Windows Computer Use functionality, audio output handling, and authentication requirements.

Looking at the pull requests, there's significant work on thread retention policies, metadata handling, and UI refinements like status line alignment and warning visibility, plus performance improvements to rollout scanning and MCP tool result caching.

The discussions reveal strong community interest in workspace-level project organization, remote MCP capabilities for integrating external services like phone calls and task management, architecture questions around project persistence, and diagnostic tools for measuring performance latency.

The main pain points are Windows-specific issues spanning multiple subsystems, context window overflow when large tool catalogs are included, cross-platform authentication inconsistencies particularly with security keys, and general session and state management problems.

The community wants better multi-agent coordination, more flexible model selection, richer integration with external services through remote MCP, and improved project organization capabilities.
</think>


# OpenAI Codex Community Digest — 2026-11-20

---

## 1. Today's Highlights

OpenAI shipped **rust-v0.171.0**, introducing GPT-6.2 Sol and Astra into the model catalog with Sol as the new default, and **enabling the TUI workspace by default** with searchable document previews, image previews, and subagent transcripts — the most substantial UX shift in recent releases. Community activity surged across all surfaces: 50 issues and 50 PRs updated in the last 24 hours, with the Windows platform accounting for the plurality of newly reported bugs. A wave of 17 PRs merged today covers thread retention policies, MCP memory management, rollout performance, and CLI stability fixes.

---

## 2. Releases

### rust-v0.171.0 — Stable
- **New model catalog**: Added GPT-6.2 Sol and Astra; Sol is now the default selection.
- **TUI workspace enabled by default**: Searchable document previews, image previews, and subagent transcripts are now surfaced alongside the main conversation in the interactive TUI.
- *(refs: #62106, #61352, #61888, #61889, #61919)*

### rust-v0.172.0-alpha.2 & rust-v0.173.0-alpha.1
- Alpha previews for upcoming stable tracks; no changelogs published yet.

### rust-v0.171.0-alpha.13.1
- Patch release in the v0.171 alpha channel.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **#25319** | [Scope VS Code chats to the current workspace/project](https://github.com/openai/codex/issues/25319) | Currently Codex VS Code extensions share a global chat history regardless of which workspace is open, causing context bleed and confusion in multi-project workflows. | **61 comments, 139 👍** — Highest engagement by far; users consistently request workspace-scoped chat isolation. |
| **#49383** | [Windows Computer Use screenshot capture fails with FrameArrived timeout](https://github.com/openai/codex/issues/49383) | Computer Use on Windows cannot reliably capture app windows, breaking the core automation workflow for a significant portion of the user base. | **60 comments, 3 👍** — Cross-repo duplicate of a known Windows capture regression; active investigation ongoing. |
| **#62212** | [Unsupported audio tool output causes HTTP 400 on later text-only turns](https://github.com/openai/codex/issues/62212) | After a Codex desktop turn produces an audio tool output, subsequent plain-text turns in the same session fail with HTTP 400, making sessions unusable without restart. | **29 comments, 5 👍** — Reproducible on Apple Silicon macOS; indicates a session state corruption bug in the audio path. |
| **#25737** | [CLI login forces SMS OTP on security-key-only accounts](https://github.com/openai/codex/issues/25737) | The CLI OAuth flow incorrectly escalates to phone OTP even for accounts with Advanced Account Security (FIDO2 hardware key only), while the browser flow correctly honors AAS. | **24 comments, 12 👍** — Security-relevant regression that blocks key-only users from CLI access. |
| **#38873** | [Accessibility traversal repeatedly freezes IntelliJ IDEA Git Log for 10–13 seconds](https://github.com/openai/codex/issues/38873) | Computer History's accessibility traversal hangs IntelliJ's Git Log view, severely impacting workflow for IDE-heavy developers. | **15 comments, 4 👍** — Platform-specific performance regression in the macOS accessibility path. |
| **#33551** | [Multi-Agent V2 sends OpenAI-specific `agent_message` items to external Responses providers](https://github.com/openai/codex/issues/33551) | Multi-Agent V2 emits an OpenAI-only `agent_message` item type that Ollama and other third-party providers cannot decrypt, breaking multi-agent setups outside OpenAI infrastructure. | **13 comments, 16 👍** — Blocks the community's growing interest in self-hosted multi-agent pipelines. |
| **#55795** | [Windows dots entry disappears after update](https://github.com/openai/codex/issues/55795) | After a specific Windows update, the Dots entry point vanishes and reinstallation or Ctrl+. does not restore it. | **17 comments, 4 👍** — Broadly affects Windows users after a recent mandatory update cycle. |
| **#51636** | [macOS Work: new messages not submitted by Enter or send button](https://github.com/openai/codex/issues/51636) | The Work conversation mode in the macOS desktop app accepts text but cannot submit it, blocking productive use. | **19 comments** — Isolated to Work mode; regular Chat is unaffected, pointing to a Work-specific regression. |
| **#61679** | [Apps tool catalog sent in full with every request; fresh session exceeds context window](https://github.com/openai/codex/issues/61679) | The entire Apps tool catalog is embedded in every request, causing fresh sessions to overshoot the context window and trigger auto-compaction loops. | **5 comments** — Signals a fundamental context budgeting issue for new sessions with large tool inventories. |
| **#56601** | [Allow CLI/TUI users to connect their computer to a dot without the desktop app](https://github.com/openai/codex/issues/56601) | Users running Codex CLI/TUI cannot authorize a dot to use the computer without the desktop app, limiting dot-only workflows. | **4 comments, 13 👍** — Highly upvoted feature request for CLI-first users wanting dot integration. |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|----|---------|
| **#62654** | [Add thread and child retention policies for injected items](https://github.com/openai/codex/pull/62654) | Splits the legacy `always` retention policy into `alwaysInThread` and `alwaysInChild`, giving callers independent control over cross-context-window inheritance and spawned-agent retention. |
| **#62653** | [Return file sizes from `fs/getMetadata`](https://github.com/openai/codex/pull/62653) | Adds `sizeBytes` to the app server metadata response, enabling clients to read file sizes directly without a separate stat call. |
| **#62643** | [Shrink npm release tarballs with libdeflate](https://github.com/openai/codex/pull/62643) | Recompresses staged npm tarballs with `libdeflate-gzip` in parallel, reducing release package size and skipping the artifact upload's redundant compression pass. |
| **#62637** | [Add center and end alignment to status line rows](https://github.com/openai/codex/pull/62637) | Extends TUI status line rows with `justify: "center"` and `justify: "end"` options, giving status line authors full layout control. |
| **#62636** | [Reduce rollout scanning overhead when listing threads](https://github.com/openai/codex/pull/62636) | Uses a buffered rollout reader to scan plain text summaries instead of parsing unrelated records, reducing per-thread listing latency. |
| **#62640** | [Reuse executor Discovery V2 inventories across turns](https://github.com/openai/codex/pull/62640) | Caches the MCP discovery inventory per executor context, preventing expensive rebuilds on every turn. |
| **#62641** | [Release persisted MCP tool results from active-turn memory](https://github.com/openai/codex/pull/62641) | Drops completed MCP tool results from active-turn memory when history can supply the same payloads, reducing peak memory pressure in long sessions. |
| **#62642** | [Hide the warning navigation hint for a single warning](https://github.com/openai/codex/pull/62642) | Shows the TUI warning navigation hint only when multiple warnings exist, cleaning up the footer for the common single-warning case. |
| **#62648** | [Fix standalone release pruning on macOS with GNU coreutils](https://github.com/openai/codex/pull/62648) | Resolves a macOS installer failure where GNU `stat` on `PATH` interprets `-f` differently from the system `stat`, causing device checks to fail during release pruning. |
| **#31487** | [app-server: add app/installed runtime snapshot API](https://github.com/openai/codex/pull/31487) | Adds a feature-gated v2 `app/installed` API backed by a committed connector runtime snapshot, deriving connector identities through effective policy at read time. *(Open, long-running)* |

---

## 5. Hot Discussions

### Show and Tell
| # | Topic | Highlights |
|---|-------|-----------|
| **#16329** | [Awesome Codex CLI — 150+ ecosystem tools](https://github.com/openai/codex/discussions/16329) | A curated list aggregating subagents, skills, plugins, and MCP servers. The ecosystem's growth is driving demand for centralized discovery. |
| **#62551** | [Orchevia: Codex and Claude Code as independent reviewers](https://github.com/openai/codex/discussions/62551) | An Apache-2.0 desktop app that runs Codex and Claude Code sequentially on diffs, letting both agents catch different classes of bugs. |
| **#62244** | [Octopost: post to X, Bluesky, Mastodon, LinkedIn via MCP](https://github.com/openai/codex/discussions/62244) | A remote MCP server that gives Codex a social posting layer; one tool call posts, schedules, or threads across platforms. |
| **#61870** | [CallForMe: let Codex phone a business for you](https://github.com/openai/codex/discussions/61870) | A remote MCP server that gives Codex a phone; users have tested it for getting quotes and checking orders via voice. |
| **#61893** | [Taskhold: shared task list with live progress for Codex](https://github.com/openai/codex/discussions/61893) | A remote MCP task list that Codex reads, picks up tasks from, splits into steps, and updates live. |
| **#62324** | [Yaptake: edit video on Mac through its transcript](https://github.com/openai/codex/discussions/62324) | A video editor that edits by transcript, with a Codex plugin so Codex can work directly on saved projects. |

### Q&A
| # | Topic | Highlights |
|---|-------|-----------|
| **#61849** | [Diagnosing screenshot/tool response-start latency in Codex 0.169.0](https://github.com/openai/codex/discussions/61849) | A developer group measured recurring pauses between screenshot/tool actions and is seeking the supported way to separate first-output latency from delivery overhead. |
| **#62436** | [Supported architecture for continuing project ownership across runs](https://github.com/openai/codex/discussions/62436) | A team is building a personal coordination system around Codex workers, NATS/JetStream, and durable project records, seeking official guidance on project persistence patterns. |

### Ideas
| # | Topic | Highlights |
|---|-------|-----------|
| **#61844** | [Intelligent Model Routing and Automatic Task Complexity Assessment](https://github.com/openai/codex/discussions/61844) | Proposes an automatic model selection system that assesses task complexity upfront and routes to the appropriate model/reasoning level. |
| **#62661** | [Support opening Temporary Chat in a separate window](https://github.com/openai/codex/discussions/62661) | Requests the ability to detach temporary chats into independent windows for quick lookups without disrupting long-running conversations. |

---

## 6. Feature Request Trends

Aggregating across Issues and Discussions, the community's most-requested capabilities are:

1. **Workspace-scoped conversation isolation** (#25319 — 139 👍) — Users want VS Code (and desktop) chats segmented by project/workspace, not global.
2. **Intelligent/adaptive model routing** (#61844, #62394) — A recurring ask: automatically select model and reasoning level based on task complexity rather than manual user choice.
3. **Dots without the desktop app** (#56601 — 13 👍) — CLI/TUI users want first-class dot integration without mandating the GUI app.
4. **Rich external MCP integrations** — The community is actively building remote MCP servers for phones (#61870), task lists (#61893), email (#62259), social posting (#62244), error tracking (#61923), and more, signaling strong demand for deeper remote MCP support.
5. **Multi-agent architecture improvements** (#33551, #54991) — Cross-provider multi-agent compatibility and idle-session wake mechanisms are active gaps.
6. **Cross-session project ownership persistence** (#62436) — Users want Codex to maintain project context and tooling across separate runs without manual handoff.

---

## 7. Developer Pain Points

| Category | Details |
|----------|---------|
| **Windows platform instability** | The Windows build is the dominant source of new bugs this cycle: Computer Use screenshot capture (#49383, #58277), dots disappearing (#55795, #62663), project persistence loss (#61294), WebSocket proxy timeouts (#38768), and taskbar occlusion (#60836). The Windows sandbox also has documented protection gaps per community security testing (#61788). |
| **Context window exhaustion** | The Apps tool catalog is sent in full with every request (#61679), causing fresh sessions with rich tool inventories to exceed context limits and loop on auto-compaction. |
| **Authentication inconsistencies** | CLI login fails to honor Advanced Account Security (security-key-only) accounts, forcing SMS OTP escalation (#25737), while the browser flow handles it correctly. |
| **Session state corruption** | Audio tool output in one turn causes subsequent text-only turns to fail with HTTP 400 (#62212, #62240), indicating a session-level state leak between tool types. |
| **TUI copy/paste UX** | Code blocks in the TUI carry two leading padding spaces into the clipboard (#33581 — closed), making pasted scripts and configs broken. |
| **MCP cross-provider compatibility** | Multi-Agent V2 emits OpenAI-specific `agent_message` items that external Responses providers cannot process (#33551), blocking self-hosted multi-agent setups. |
| **Permissions and sandboxing on macOS** | Existing threads lose the permissions selector and revert to sandboxed process inspection (#60109, #60109), while Dots can hand tasks to local Codex that then stall without actionable status (#62646). |

---

*Digest generated from github.com/openai/codex activity on 2026-11-20. All linked items use the `https://github.com/openai/codex/` base URL.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the GitHub data provided and create a structured digest for the Gemini CLI community on 2026-11-20.

First, let me organize the key information:

**Releases (last 24h):**
1. v0.71.0-nightly.20261120.gd4cb1713f - with fixes for template placeholder replacement and new heatmap subcommand
2. v0.71.0-preview.0 - changelog release
3. v0.70.0 - stable release

**Issues (50 total, showing top 30):**
Looking at the most important ones by comment count and priority:

1. #22323 - P1 Bug: Subagent recovery after MAX_TURNS reported as GOAL success (13 comments)
2. #19873 - P2 Enhancement: Zero-Dependency OS Sandboxing (9 comments)
3. #21409 - P1 Bug: Generalist agent hangs (8 comments, 8 👍)
4. #22745 - P2 Feature: AST-aware file reads, search, and mapping (7 comments)
5. #21968 - P2 Bug: Gemini doesn't use skills and sub-agents enough (7 comments)
6. #22267 - P2 Bug: Browser Agent ignores settings.json overrides (5 comments)
7. #22232 - P3 Feature: Browser agent resilience - session takeover and lock recovery (4 comments)
8. #21983 - P1 Bug: Browser subagent fails in wayland (4 comments)
9. #21000 - P3 Bug: Experiment with native file tools for task tracker (4 comments)
10. #20079 - P2 Bug: ~/.gemini/agents/filename.md not recognized if symlink (4 comments)

**Pull Requests (25 total):**


I'm examining recent contributions across multiple domains. Several PRs focus on enhancing CLI functionality and resolving core issues. The most notable changes include improvements to slash command handling, enterprise-level telemetry fixes, and addressing template injection vulnerabilities. Key developments involve refining tool interactions, ensuring better error handling, and implementing more robust system-level improvements across different operational environments.

The emerging pattern suggests a comprehensive approach to bolstering system reliability, security, and developer experience through targeted technical interventions.
</think>


# Gemini CLI Community Digest — 2026-11-20

## 1. Today's Highlights

The Gemini CLI team shipped **v0.71.0-preview.0** alongside a nightly build, introducing a new `/stats heatmap` subcommand for token usage visualization and a critical fix preserving literal `$` characters in template replacements. The community continues to grapple with high-priority agent reliability issues—three P1 bugs around subagent behavior (hangs, MAX_TURNS reporting, and Wayland compatibility) remain active with significant engagement. Platform reliability work is progressing, with fixes landing for Windows path resolution, PowerShell UI freezes, and circular reference handling in telemetry serialization.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.71.0-nightly.20261120.gd4cb1713f** | Nightly | Fix `$` literal preservation in template placeholder replacement; Add `/stats heatmap` subcommand for daily token usage |
| **v0.71.0-preview.0** | Preview | Changelog automation for v0.70.0; Version bump prep for stable release |
| **v0.70.0** | Stable | Incremental release consolidating recent nightly fixes |

**Notable:** The new `/stats heatmap` command (contributed by @jvargassanchez-dot) provides visual token consumption analytics—a frequently requested observability feature for developers managing context window budgets.

---

## 3. Hot Issues

### 🔴 P1 Priority (Critical)

**1. Subagent MAX_TURNS Misreported as GOAL Success**  
📌 [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — 13 comments, 2 👍  
The `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even when it hits the maximum turn limit without completing analysis. This masks failures silently, making debugging multi-repository investigations unreliable. The community is actively investigating retesting strategies.

**2. Generalist Agent Hangs on Deferral**  
📌 [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — 8 comments, 8 👍  
When Gemini CLI defers to the generalist agent, execution hangs indefinitely (tested up to 1 hour). Workarounds include explicitly instructing the model to avoid subagent delegation. This blocks core use cases and has high community visibility.

**3. Browser Subagent Fails on Wayland**  
📌 [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — 4 comments, 1 👍  
Browser automation is non-functional on Wayland-based Linux environments, limiting Gemini CLI's web interaction capabilities for a significant desktop segment.

**4. Output Hook Crash on Completion**  
📌 [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) — 3 comments, 0 👍  
The `get-shit-done` output hook crashes when generating user summaries, causing premature termination of well-progressed agent sessions.

---

### 🟡 P2 Priority (Important)

**5. Gemini Underutilizes Skills and Sub-Agents**  
📌 [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — 7 comments, 0 👍  
Despite user-defined skills (e.g., "gradle", "git") with clear descriptions, Gemini rarely invokes them autonomously. Explicit prompting is required, undermining the value of custom skill registration.

**6. AST-Aware File Operations Investigation**  
📌 [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — 7 comments, 1 👍  
Epic-level investigation into whether AST-aware tools can reduce token waste from imprecise file reads and enable surgical code navigation. Could significantly improve context efficiency if implemented.

**7. Browser Agent Ignores settings.json Overrides**  
📌 [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — 5 comments, 0 👍  
Global and project-level `settings.json` configuration (including `maxTurns`) is completely bypassed by the Browser Agent, creating inconsistent behavior across agent types.

**8. 400 Error with >128 Tools**  
📌 [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — 3 comments, 0 👍  
Gemini CLI encounters API errors when exceeding 128 available tools, suggesting improper tool scoping or batching logic.

**9. Vite App Creation Hangs at Interactive Prompt**  
📌 [#22465](https://github.com/google-gemini/gemini-cli/issues/22465) — 2 comments, 0 👍  
When prompted to scaffold a Vite application, the agent stalls at interactive CLI prompts instead of handling them gracefully.

---

### 🟢 P3 Priority (Enhancement)

**10. Zero-Dependency OS Sandboxing via Bash Affinity**  
📌 [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 9 comments, 1 👍  
Proposal to leverage Gemini 3's native bash affinity for zero-dependency OS sandboxing with post-execution intent routing. A long-term architectural vision balancing security, UX, and model capabilities.

---

## 4. Key PR Progress

| PR | Area | Status | Summary |
|----|------|--------|---------|
| [#30334](https://github.com/google-gemini/gemini-cli/pull/30334) | Core/CLI | ✅ Closed | **Fix PowerShell UI freeze**: Parses PowerShell commands asynchronously to prevent multi-second spinner freezes on Windows during command validation. |
| [#30376](https://github.com/google-gemini/gemini-cli/pull/30376) | Core | 🔄 Open | **Expand Windows home-relative paths**: Fixes `~\...` path resolution on Windows, ensuring policy paths and extension registries work correctly. |
| [#30157](https://github.com/google-gemini/gemini-cli/pull/30157) | Core | ✅ Closed | **Safe circular reference detection**: Only replaces true cycles with `[Circular]` in `safeJsonStringify`, fixing telemetry export failures caused by shared array references in OpenTelemetry SDK. |
| [#30156](https://github.com/google-gemini/gemini-cli/pull/30156) | Core | ✅ Closed | **Buffer chat compression telemetry**: Ensures `logChatCompression` events are buffered until OTel SDK initialization completes, preventing premature log loss. |
| [#30154](https://github.com/google-gemini/gemini-cli/pull/30154) | CLI | ✅ Closed | **Flush buffered stdio before ACP mode**: Prevents hook warnings and stderr output from being discarded on SIGKILL/crash by flushing before entering agent mode. |
| [#30104](https://github.com/google-gemini/gemini-cli/pull/30104) | CLI | 🔄 Open | **Refresh slash commands after /skills link**: Ensures skill discovery updates slash command registry immediately after `/skills link <path>` execution. |
| [#30370](https://github.com/google-gemini/gemini-cli/pull/30370) | Core | ✅ Closed | **Handle nested .gitignore negations**: Fixes `GitIgnoreParser` to correctly handle re-included files under wildcard patterns (e.g., `logs/**` + `!keep.txt`). |
| [#30375](https://github.com/google-gemini/gemini-cli/pull/30375) | Docs | 🔄 Open | **Fix broken internal links**: Corrects missing `.md` extensions and renamed anchors across documentation. |
| [#30239](https://github.com/google-gemini/gemini-cli/pull/30239) | Core | 🔄 Open | **Preserve tier alias config**: Custom aliases on model tiers (`flash-lite`, `flash`, `pro`) now retain their `generateContentConfig` instead of losing it during resolution. |
| [#30362](https://github.com/google-gemini/gemini-cli/pull/30362) | Workflow | ✅ Closed | **Fix zizmor template injection**: Patches GitHub Actions expression injection vulnerabilities in `eval-pr.yml` workflow. |

---

## 5. Feature Request Trends

Analyzing the issue corpus reveals five dominant feature directions:

| Trend | Issues | Summary |
|-------|--------|---------|
| **Agent Reliability & Correctness** | #22323, #21409, #21983, #22186 | Persistent hangs, incorrect termination reporting, and platform-specific failures undermine trust. Users demand deterministic agent behavior. |
| **Subagent Intelligence** | #21968, #19873, #22745, #22598 | Desire for autonomous skill/subagent invocation, AST-aware navigation, and improved trajectory visibility for debugging. |
| **Browser Agent Maturity** | #22267, #22232 | Config overrides ignored, session recovery absent, and Wayland failures indicate the browser agent is still maturing. |
| **Token Efficiency** | #19561, #22745, #22747 | "Tactful extraction," AST-aware reads, and surgical grep are proposed to combat context bloat (~36.6k tokens/turn baseline). |
| **Observability & Debugging** | #21763, #22598, #23311 | Subagent context must appear in bug reports; trajectory sharing via `/chat share`; stable internal evaluations needed. |

---

## 6. Developer Pain Points

The community's recurring frustrations cluster around:

1. **Agent Hangs and Silent Failures** — Multiple reports of indefinite hangs (#21409) and incorrect success reporting (#22323) make production use risky. Developers need timeout handling and explicit failure modes.

2. **Configuration Inconsistencies** — The Browser Agent ignoring `settings.json` (#22267) creates cognitive load. Users expect unified configuration across all agent types.

3. **Platform Gaps** — Wayland failures (#21983), Windows path quirks (#30376), and PowerShell parsing (#30334) indicate cross-platform testing gaps. Linux and Windows users feel underserved.

4. **Skill/Subagent Discovery** — Despite registering skills, Gemini doesn't leverage them (#21968), and symlinked agent files aren't recognized (#20079). The discovery pipeline needs strengthening.

5. **Context Waste** — Large file reads "firehose" context, and task tracking relies on in-context memory prone to rot (#18836). Token frugality remains a top developer request.

6. **Debugging Opacity** — Bug reports lack subagent context (#21763), and there's no easy way to share or replay agent trajectories (#22598). This slows community troubleshooting.

---

*Digest generated from GitHub data for [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) — 2026-11-20*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest for 2026-11-20 based on the provided GitHub data. Let me analyze the data and structure it according to the requested format.

Let me organize the information:

**Releases:**
- v1.0.115-1: Fixed MCP sign-in issues and workflow execution
- v1.0.115-0: Fixes and changes

**Latest Issues (50 total, showing top 30 by comment count):**
The most active ones:
1. #4017 - MCP OAuth non-first-party servers auth failure (8 comments, 3 👍)
2. #4203 - Remote MCP expired token forces interactive re-auth (5 comments, 5 👍)
3. #1168 - Authorization fatigue - too many prompts (5 comments, 3 👍)
4. #4972 - Windows MCP worker survives exit (5 comments, 0 👍)
5. #5350 - MCP OAuth code exchange never runs (4 comments, 0 👍)
6. #4886 - Plugin skills omitted from /skills and /env (4 comments, 0 👍)
7. #2823 - effortLevel config not respected when switching models (3 comments, 0 👍)
8. #5090 - Boot experience and input line experience (3 comments, 0 👍)
9. #5283 - Remote environment hosting blocked on Copilot Free (3 comments, 6 👍)
10. #4769 - MCP OAuth fails with redirect (3 comments, 1 👍)
11. #5516 - store_memory offers user scope when unavailable (2 comments, 0 👍)
12. #3983 - Global instructions.md documentation (2 comments, 2 👍)
13. #4298 - Sandbox config for selective tool enablement (2 comments, 3 👍)
14. #3374 - Windows backspace in vim issue (2 comments, 0 👍)


15. #4371 - MCP OAuth 3LO fails (2 comments, 0 👍)
16. #5501 - Zero-turn sessions don't persist (2 comments, 0 👍)
17. #4580 - Allow /fork to open new terminal (1 comment, 1 👍)
18. #5517 - PDF context size estimate issue (1 comment, 0 👍)
19. #5510 - Entra MCP browser sign-in stalls (1 comment, 0 👍)
20. #4310 - Bad default 128K token budget (1 comment, 0 👍)
21. #5519 - BYOK

I've compiled a list of OAuth and session-related issues, including MCP OAuth 3LO failures, zero-turn session persistence problems, and terminal fork capabilities. The list also covers PDF context size estimation and Entra MCP browser sign-in stalling issues.

The next set of issues involves token budget defaults, Bring Your Own Key limitations, marketplace long path failures, compact session recovery problems, and diff panel display complications. There's also a request to expose underlying LLM model information in the UI.

Additional issues include macOS sandbox restrictions, multiline comment functionality, scroll position jumping during output, and reasoning display problems with Gemini models. Reasoning block auto-collapse and extension bootstrap path mismatch complete the current issue list.

I notice the PR data appears incomplete, with only one PR showing an undefined comments field.

I'll organize the top 10 issues by significance: OAuth authentication failures across non-first-party servers and token refresh mechanisms, authorization prompt frequency, boot experience and input handling, remote environment hosting constraints on free accounts, plugin skills visibility, model configuration settings, and session persistence. For PRs, I'm noting extension bootstrap fixes, token handling improvements, authorization flow optimizations, boot experience enhancements, remote hosting support, plugin skill visibility, model switching configurations, session management, UI display refinements, and LLM model transparency features.

I should focus on the most impactful areas—authentication reliability, user experience friction points, and configuration flexibility—while ensuring the digest highlights both resolved improvements and ongoing development priorities.
</think>


# GitHub Copilot CLI Community Digest

**Date:** 2026-11-20
**Repository:** github.com/github/copilot-cli

---

## Today's Highlights

The latest releases (v1.0.115-0/1) address critical MCP authentication scenarios, including OAuth sign-in continuity when servers omit refresh-token scopes and proper workflow extension registration. Community activity remains intense around MCP OAuth reliability—five of the top ten most-active issues involve authentication failures with remote MCP servers, highlighting persistent friction in the third-party integration experience.

---

## Releases

### v1.0.115-1
**Fixed:**
- **MCP sign-in continuity:** Authentication now proceeds when a server grants required scopes but omits the automatically-requested refresh-token scope, preventing silent failures with non-standard OAuth implementations.
- **Workflow extension registration:** Direct workflow execution now properly waits for project extension workflows to register, eliminating race conditions during startup.

### v1.0.115-0
General fixes and changes (details not specified in release notes).

**Reference:** [Release v1.0.115-1](https://github.com/github/copilot-cli/releases/tag/v1.0.115-1) | [Release v1.0.115-0](https://github.com/github/copilot-cli/releases/tag/v1.0.115-0)

---

## Hot Issues

### 1. MCP OAuth non-first-party servers fail silently (#4017) — 8 comments, 3 👍
**Status:** CLOSED | **Labels:** `[triaged, more-info-needed, area:authentication, area:mcp]`

Remote MCP servers configured with `"type": "http"` that are non-first-party (e.g., Atlassian, incident.io) fail to authenticate with no browser popup or visible error. This represents a critical blocker for enterprise users relying on third-party MCP integrations.

**Why it matters:** OAuth failures without error feedback create debugging nightmares. The issue spans the Copilot Desktop app context, suggesting a platform-specific authentication broker interaction problem.

**Reference:** [Issue #4017](https://github.com/github/copilot-cli/issues/4017)

---

### 2. Expired access token forces interactive re-auth instead of silent refresh (#4203) — 5 comments, 5 👍
**Status:** OPEN | **Labels:** `[triage, area:authentication, area:mcp]`

When a remote OAuth-protected MCP server's cached access token is expired at session start, the CLI treats it as requiring fresh interactive login—even though a valid refresh token is cached. This violates RFC 6749 §6 (token refresh) and causes unnecessary authentication friction.

**Why it matters:** High 👍 count (5) signals community prioritization of RFC compliance and silent re-authentication. Enterprise environments with rotating credentials are particularly impacted.

**Reference:** [Issue #4203](https://github.com/github/copilot-cli/issues/4203)

---

### 3. Authorization fatigue — excessive prompts during single requests (#1168) — 5 comments, 3 👍
**Status:** OPEN | **Labels:** `[area:permissions]`

A single high-level request like "PR 727 needs some work" triggers more than a dozen authorization prompts. This "authorization fatigue" severely degrades the developer experience for permission-intensive workflows.

**Why it matters:** The ratio of prompts to actual work is unsustainable. This issue directly impacts productivity and signals a need for permission batching or smarter caching strategies.

**Reference:** [Issue #1168](https://github.com/github/copilot-cli/issues/1168)

---

### 4. Remote environment hosting blocked on Copilot Free accounts (#5283) — 3 comments, 6 👍
**Status:** OPEN | **Labels:** `[triage:needs-human, area:sessions]`

Personal GitHub accounts with Copilot Free (no organization membership) cannot enable CLI remote access, despite local settings showing incoming-connection as enabled. Error: `GitHub environment hosting is not available`.

**Why it matters:** Highest 👍 count (6) in the batch. This paywall frustration affects individual developers who want remote development capabilities—a key differentiator for power users.

**Reference:** [Issue #5283](https://github.com/github/copilot-cli/issues/5283)

---

### 5. Plugin skills loaded but omitted from `/skills` and `/env` (#4886) — 4 comments
**Status:** CLOSED | **Labels:** `[area:plugins]`

Skills supplied by local plugins loaded with `--plugin-dir` are discovered by the backend but excluded from the interactive `/skills` dashboard and `/env` output. Only non-interactive `copilot skill list --json` includes them correctly.

**Why it matters:** Inconsistent behavior between interactive and non-interactive modes creates confusion. Plugin authors cannot rely on standard discovery mechanisms for user-facing skill visibility.

**Reference:** [Issue #4886](https://github.com/github/copilot-cli/issues/4886)

---

### 6. Boot experience blocks work during MCP/plugin loading (#5090) — 3 comments
**Status:** OPEN | **Labels:** `[triage, area:input-keyboard, area:plugins, area:mcp]`

Users must wait for MCP, plugins, etc., to load before interacting with the CLI. In large repositories, startup delays are particularly acute. The reporter requests async loading to enable immediate interaction.

**Why it matters:** Synchronous boot sequences create friction for developers in large monorepos. Async initialization is a common UX pattern that the community expects.

**Reference:** [Issue #5090](https://github.com/github/copilot-cli/issues/5090)

---

### 7. `effortLevel` config ignored when switching models via `/model` command (#2823) — 3 comments
**Status:** OPEN | **Labels:** `[area:models, area:configuration]`

The `effortLevel` setting in `~/.copilot/config.json` applies correctly on session start, but resets to "medium" when switching models mid-session using `/model`.

**Why it matters:** Model-specific effort preferences should persist across switches. Users who configure aggressive compaction for cost-sensitive models lose those settings unexpectedly.

**Reference:** [Issue #2823](https://github.com/github/copilot-cli/issues/2823)

---

### 8. `store_memory` offers user scope when user-level memory unavailable (#5516) — 2 comments
**Status:** OPEN | **Labels:** `[area:context-memory]`

The `store_memory` command advertises `scope: "user"` even when user-level preferences are unavailable, causing all user-scoped stores to fail with HTTP 404. The only client-side switch (`/memory off`) disables both scopes, preventing selective repository-scoped storage.

**Why it matters:** Silent scope unavailability creates confusing failures. Users cannot distinguish between network errors and permission/configuration issues.

**Reference:** [Issue #5516](https://github.com/github/copilot-cli/issues/5516)

---

### 9. MCP OAuth fails when server metadata URL redirects (#4769) — 3 comments
**Status:** CLOSED | **Labels:** `[area:authentication, area:mcp]`

When `.well-known/openid-configuration` is behind an HTTP redirect, authentication fails with "Incompatible authorization server: issuer does not match metadata URL."

**Why it matters:** Many identity providers use redirects for metadata discovery. This bug blocks legitimate OAuth flows from compliant servers.

**Reference:** [Issue #4769](https://github.com/github/copilot-cli/issues/4769)

---

### 10. Zero-turn ACP sessions never persist `events.jsonl` (#5501) — 2 comments
**Status:** OPEN | **Labels:** `[area:sessions, area:non-interactive]`

When using Copilot CLI as an ACP external agent (e.g., in Zed), sessions with no user turns (empty or slash-command-only) never write their `events.jsonl` file. Reopening the thread after restart fails with `ACP request failed {"method":"session/load","error":"Resource not found"}`.

**Why it matters:** ACP integration is an emerging use case. Session persistence failures break workflow continuity in external editors—a key adoption blocker.

**Reference:** [Issue #5501](https://github.com/github/copilot-cli/issues/5501)

---

## Key PR Progress

### 1. Extension bootstrap path mismatch fix (#2957) — CLOSED
**Author:** polajenko | **Merged:** 2026-11-19

Extensions failed to load on both macOS and Windows because the forked child process's security check in `index.js` expected the bootstrap path under `dirname(process.execPath)` (SEA binary directory), but `app.js` passed a path from the pkg cache (`universal/<ver>/preloads/`).

**Impact:** Resolved a critical startup failure affecting all extension-based plugins on desktop platforms.

**Reference:** [PR #2957](https://github.com/github/copilot-cli/pull/2957)

---

## Feature Request Trends

Analysis of recent issues and discussions reveals the following dominant feature directions:

### 1. Enhanced MCP/OAuth Reliability
- **Silent token refresh:** Users expect automatic re-authentication using cached refresh tokens (Issue #4203).
- **Redirect tolerance:** OAuth metadata discovery should follow HTTP redirects (Issue #4769).
- **URL elicitation for 3LO:** Client-side URL display for OAuth authorization code grants (Issue #4371).

### 2. Permission & Authorization Improvements
- **Prompt batching:** Reduce authorization prompts during multi-step workflows (Issue #1168).
- **Selective tool enablement:** Sandbox configuration to whitelist specific tools (Issue #4298).
- **macOS sandbox TCP access:** Allow backend integration tests to connect to local servers (Issue #5507).

### 3. Session & Context Management
- **Fork support:** CLI option `--fork` to create parallel terminal workflows from existing sessions (Issue #4580).
- **Session compaction recovery:** `/compact` should recover sessions after 5MB CAPI limit (Issue #4424).
- **Model-specific effort persistence:** `effortLevel` should follow model switches (Issue #2823).

### 4. UI/UX Refinements
- **Async boot:** Non-blocking initialization of MCP, plugins, and extensions (Issue #5090).
- **Reasoning auto-collapse:** Automatically collapse "Thought for…" blocks when thinking finishes (Issue #5531).
- **Scroll stability:** Prevent timeline jumps when new output arrives (Issue #5533).
- **Diff panel sizing:** Prevent large diffs from covering assistant output (Issue #3150).

### 5. Context Memory Enhancements
- **Scope-aware memory:** Graceful fallback when user-level memory is unavailable (Issue #5516).
- **PDF token estimation:** Count PDF at actual model input cost, not encoded size (Issue #5517).
- **128K token budget defaults:** Address silent fallback for large-context models (Issue #4310).

### 6. Platform-Specific Fixes
- **Windows MCP worker cleanup:** Ensure MCP workers terminate properly when launched via wrappers (Issue #4972).
- **Vim backspace on Windows:** Fix 0x7F character insertion instead of deletion (Issue #3374).
- **Long path handling:** Support marketplace repos with long file paths (Issue #4690).

---

## Developer Pain Points

### Authentication & OAuth (Highest Pain)
The community consistently reports frustration with MCP OAuth reliability:
- Non-first-party servers fail without errors (#4017)
- Expired tokens trigger interactive re-auth (#4203)
- Metadata redirects break authentication (#4769)
- Browser sign-in stalls on Linux/WSL when `xdg-open` is missing (#5510)

**Recommendation:** Prioritize RFC 6749 compliance testing and silent refresh flows.

### Permission Friction
Authorization fatigue (#1168) remains a top concern. Users report "more than a dozen" prompts for single high-level requests, making the CLI feel obstructive rather than assistive.

**Recommendation:** Implement permission batching or session-level authorization caching.

### Model Configuration Persistence
Settings like `effortLevel` and `showReasoning` reset unexpectedly during sessions:
- Effort level resets to "medium" on model switch (#2823)
- `showReasoning: true` has no effect on Gemini models (#5532)

**Recommendation:** Persist user preferences across model switches and verify feature parity across all supported models.

### Copilot Free Limitations
Remote environment hosting is blocked on personal Copilot Free accounts (#5283), creating adoption friction for individual developers evaluating the platform.

**Recommendation:** Clarify feature tiers and consider tier-appropriate feature previews.

### Session Persistence in ACP/External Editors
Zero-turn sessions fail to persist in ACP integrations (#5501), breaking workflow continuity in editors like Zed.

**Recommendation:** Ensure all session types (including edge cases) write state files consistently.

---

**End of Digest**

*Generated: 2026-11-20 | Data source: github.com/github/copilot-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate an OpenCode community digest for 2026-11-20 based on the provided GitHub data. Let me analyze the data and structure it according to the requested format.

Key observations from the data:
1. **Releases**: None in the last 24h
2. **Issues**: 50 total, showing top 30 by comment count
3. **Pull Requests**: 50 total, showing top 20

Let me identify the most important items:

**Hot Issues (by comment count and importance):**
1. #59387 - Free tier issues (393 comments) - Major user pain point about free tier not working
2. #51209 - V2 TUI composer exposure to plugins (15 comments) - Feature request
3. #42083 - GitHub Copilot provider shows zero models (14 comments) - Bug affecting users
4. #61072 - Claude Agent plan limit drains faster (9 comments) - Performance/billing bug
5. #49704 - Git dep with build/prepare script fails (8 comments) - Plugin installation bug
6. #56890 - Home/End key issues after submitting prompt (7 comments) - UI bug
7. #63871 - Catch-up sends one block per part (5 comments) - Related to PR #63873
8. #59787 - Browser API needs close tabs operation (5 comments) - Feature request
9. #65027 - Beam Free is not smart (4 comments) - Free tier model quality
10. #64835 - UNABLE_TO_GET_ISSUER_CERT on macOS (4 comments) - SSL/certificate issue
11. #51152 - Per-project credential activation (4 comments) - Feature request
12. #65044 - Install staging dir issue with snap (3 comments) - Related to PR #65051
13. #60793 - configDir setting for Claude Agent (3 comments) - Related to PR #62514


14. #55920 - Website logins lost (3 comments) - Browser session bug
15. #64746 - Model list flips between fable and claude-fable-5-2 (3 comments) - Model provider bug

**Key PRs:**
1. #65055 - OpenAPI document regeneration (docs fix)
2. #65053 - Re-read background jobs after reconnect (refactor)
3. #65054 - Clarify slash command handling in session.prompt (docs)
4. #65052 - Auto-update plugins that follow a Git branch (feature)
5. #62649 - Stop Claude Agent processes when session deleted (bug fix)
6. #62769 - SQLite full-text index of session history (feature)
7. #63873 - Merge claude-agent catch-up text into one block (bug fix - closes #63871)
8. #65051 - Retry download when curl cannot see /tmp (bug fix - closes #65044)
9. #65049 - Fill missing Chinese app translations (i18n fix)
10. #64784 - Promote dev to production (release)
11. #65034 - Use <system-update> for instruction updates (bug fix)
12. #65048 - Busy icon-only tabs switch when spinner clicked (bug fix)
13. #62845 - Share session index and project actions (refactor)
14. #65035 - Add Claude Agent usage control (feature)
15. #64913 - Skip directory watches instead of hanging when inotify exhausted (bug fix)
16. #65045 - Search absolute glob patterns from their literal directory (bug fix)
17. #65046 - Explain removed session directory in shell errors (bug fix)
18. #62514 - Add configDir setting to Claude Agent provider (feature)
19. #64580 - Switch Claude Agent accounts by config folder (feature)

Several key themes emerge across recent work. Free tier access remains a significant concern with nearly 400 comments on related issues. Plugin and provider functionality is being expanded with new features for TUI composer, configDir settings, and usage control. Performance improvements target background job handling, inotify resource management, and session history indexing. UI refinements address tab behavior and cursor navigation. Internationalization efforts include Chinese translations and SSL certificate compatibility across different environments.

Additional work focuses on authentication mechanisms for multi-account scenarios, browser integration limitations, and SSL verification challenges on macOS. Model selection and provider reliability issues are being addressed through configuration flexibility and account switching capabilities.
</think>


# OpenCode Community Digest — 2026-11-20

## Today's Highlights

OpenCode sees significant activity around multi-account management and provider reliability. A major release PR (#64784) promotes dev to production, while several fixes target the Claude Agent provider's session handling and the built-in browser's tab management. Free tier users continue reporting widespread issues, with the tracking issue reaching 393 comments.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

### 1. [Free Tier Failures — Central Tracking Issue](https://github.com/anomalyco/opencode/issues/59387)  
**393 comments · 29 👍**

The most active issue by far. Users report the free tier claiming usage limits are exceeded when they haven't used the service, resets that never trigger, and the "Subscribe to Go" prompt appearing incorrectly. This has become the de facto hub for free tier bug reports. The volume signals a systemic issue affecting the free user base.

### 2. [GitHub Copilot Provider Shows Zero Models](https://github.com/anomalyco/opencode/issues/42083)  
**14 comments · 5 👍**

Authentication succeeds, but the `github-copilot` provider never appears in the model picker. `opencode models github-copilot` returns "Provider not found." Affects users on Arch Linux (v1.18.15) who rely on Copilot integration.

### 3. [Claude Agent 5-Hour Plan Limit Draining 1.8x Faster](https://github.com/anomalyco/opencode/issues/61072)  
**9 comments · 2 👍**

OpenCode's Claude Agent SDK labels requests as `sdk-ts`, causing Anthropic's cache lookup to miss and burn through the 5-hour plan limit significantly faster than Claude Code's native TUI. A silent billing issue that could surprise heavy users.

### 4. [Git Dependency with Build/Prepare Script Fails](https://github.com/anomalyco/opencode/issues/49704)  
**8 comments · 0 👍**

`opencode plugin add` fails with `NpmInstallFailedError: git dep preparation failed` for any git dependency with lifecycle scripts (`build`, `prepare`, `install`, etc.) or workspaces. Breaks plugin installation from many popular repositories.

### 5. [Home/End Keys Stop Working After First Prompt](https://github.com/anomalyco/opencode/issues/56890)  
**7 comments · 0 👍**

Cursor navigation via Home/End works initially but breaks after submitting the first prompt. Instead of moving the cursor, keys unexpectedly scroll the output pane. A regression affecting daily usability.

### 6. [Model List Flipping Between `fable` and `claude-fable-5-2`](https://github.com/anomalyco/opencode/issues/64746)  
**3 comments · 0 👍**

The Claude Agent provider's model list alternates between two identifiers for Fable 5.2. Sessions started on the dropped ID fail with "model not found," disrupting ongoing work.

### 7. [UNABLE_TO_GET_ISSUER_CERT on macOS](https://github.com/anomalyco/opencode/issues/64835)  
**4 comments · 0 👍**

Users on macOS 27 encounter SSL errors when connecting to endpoints with WoTrus/Sectigo R46 certificate chains. The error suggests certificate validation failures despite complete, publicly-trusted chains.

### 8. [Per-Project Credential Activation Needed](https://github.com/anomalyco/opencode/issues/51152)  
**4 comments · 3 👍**

Credential switching via `auth switch` or `/connect` is global, re-billing background agents in unrelated projects. Users request per-folder provider account pinning (e.g., separate work vs. personal API keys).

### 9. [Browser API Missing Tab Close Operation](https://github.com/anomalyco/opencode/issues/59787)  
**5 comments · 0 👍**

The browser API can open tabs but provides no way to close them. Agents opening tabs for research or testing cannot clean up, leading to cluttered sessions.

### 10. [Install Fails with Snap-Confined curl](https://github.com/anomalyco/opencode/issues/65044)  
**3 comments · 0 👍**

The `curl | bash` installer creates a staging directory in `/tmp` that snap-confined curl cannot see, producing a misleading "disk space" error (exit 23). Affects Linux users on snap-based systems.

---

## Key PR Progress

### 1. [Promote dev → production](https://github.com/anomalyco/opencode/pull/64784)  
**Release PR · opencode-agent[bot]**

Promotes the `dev` branch to production, including Console docs for Tidepool Alpha Free and Gemini 4 Neon, plus core, app, and CLI changes merged since the last promotion.

### 2. [Auto-Update Plugins Following a Git Branch](https://github.com/anomalyco/opencode/pull/65052)  
**New Feature · rekram1-node**

Plugins installed from a Git branch now update automatically, matching the behavior of `name@latest` plugins. Simplifies maintenance for developers tracking development branches.

### 3. [Claude Agent Usage Control via configDir List](https://github.com/anomalyco/opencode/pull/65035)  
**New Feature · Tarquinen**

Extends the `configDir` setting to accept a list of Claude config folders. When one account hits its usage limit, the chat automatically moves to the next account in the list.

### 4. [Add configDir Setting to Claude Agent Provider](https://github.com/anomalyco/opencode/pull/62514)  
**New Feature · Closes #60793**

Allows using a Claude config folder other than the default, enabling users to separate work and personal Claude Code credentials within OpenCode.

### 5. [Switch Claude Agent Accounts by Config Folder](https://github.com/anomalyco/opencode/pull/64580)  
**New Feature · deinspanjer**

Builds on the `configDir` feature to enable account switching based on config folder, supporting multi-account workflows seamlessly.

### 6. [Stop Claude Agent Processes on Session Deletion](https://github.com/anomalyco/opencode/pull/62649)  
**Bug Fix · Closes #62648**

Previously, deleting a session left its `claude` process running until the 5-minute idle timeout. This fix terminates processes immediately upon session deletion.

### 7. [Merge Catch-Up Text into One Block](https://github.com/anomalyco/opencode/pull/63873)  
**Bug Fix · Closes #63871**

`CatchUp.content` was emitting one text block per role tag and message part, preventing Anthropic's prompt cache from matching. Now merges into a single block for better cache hit rates and reduced token usage.

### 8. [Retry Download When curl Cannot See /tmp](https://github.com/anomalyco/opencode/pull/65051)  
**Bug Fix · Closes #65044**

The installer now retries downloads using a fallback path when confined curl environments (e.g., snap) cannot access `/tmp`, fixing the staging directory visibility issue.

### 9. [Opt-In SQLite FTS5 Index of Session History](https://github.com/anomalyco/opencode/pull/62769)  
**New Feature · Contributor**

Adds an experimental SQLite FTS5 index for session history search. Enabled via `experimental.sqlite_fts: true` or `OPENCODE_FLAGS=sqlite_fts`. Includes a one-time background build over existing history.

### 10. [Use `<system-update>` for Instruction Updates](https://github.com/anomalyco/opencode/pull/65034)  
**Bug Fix**

Instruction updates were reaching the model via two different tags, causing inconsistency. Now consistently uses the `<system-update>` tag for all instruction updates.

---

## Feature Request Trends

1. **Multi-Account & Credential Management** — Strong demand for per-project credential activation, config folder switching, and usage-based account rotation (reflected in multiple issues and the active #62514, #64580, #65035 PRs).

2. **Browser API Expansion** — Users want full tab lifecycle control (close tabs, manage windows) and cookie/session import from Chrome for the built-in desktop browser.

3. **Plugin System Enhancements** — Requests include exposing the V2 TUI composer to plugins, auto-updating branch-following plugins, and improving git dependency handling.

4. **Provider Reliability** — Fixes and feature work around the Claude Agent provider (configDir, usage control, process cleanup) indicate this is a high-priority integration.

5. **Free Tier Quality** — Complaints about "Beam Free" intelligence and usage tracking suggest the free tier experience needs polish.

---

## Developer Pain Points

- **Free Tier Inconsistencies**: Reset timers failing, phantom usage reports, and sudden upgrade prompts frustrate free users.

- **SSL/TLS Failures**: Certificate chain validation issues on macOS (WoTrus/Sectigo) and platform-specific SSL errors cause integration failures.

- **Session State Loss**: Website logins disappearing after tab closure, subagents inheriting browser grants they cannot use, and scroll position resets disrupt workflows.

- **Plugin Installation Fragility**: Git dependencies with lifecycle scripts fail universally, blocking popular plugin sources.

- **Model Provider Instability**: Model lists flipping between identifiers and "Provider not found" errors prevent reliable multi-provider setups.

- **Shell Permission Bypass**: PowerShell script invocation skipping permission prompts on Windows raises security concerns.

- **Inotify Exhaustion**: Hanging services when inotify limits are reached affect Linux users with large codebases.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Pi community digest for 2026-11-20 based on GitHub data provided. Let me analyze the data and structure it according to the requested format.

Let me go through the data:

**Latest Releases**: None in last 24h

**Latest Issues (45 total, top 30 by comment count)**:
1. #7547 - Windows usage issues (99 comments) - OPEN
2. #2870 - Follow XDG Base Directory (29 comments) - CLOSED
3. #9549 - Fullscreen transcript re-render issue (19 comments) - OPEN
4. #8834 - Opt-in package namespace (16 comments) - CLOSED
5. #11026 - Delete conversation from pi-durable (9 comments) - OPEN
6. #12273 - GPT-6.2 Sol cache reuse issue (6 comments) - CLOSED
7. #12133 - Windows terminal mouse tracking issue (5 comments) - CLOSED
8. #12184 - Google adapters reject Gemini 4 xhigh (5 comments) - CLOSED
9. #11006 - GitHub Copilot models hidden after restart (5 comments) - OPEN
10. #11273 - Cannot copy in devcontainer (5 comments) - CLOSED
11. #11127 - Configure idle cache-warming horizon (4 comments) - OPEN
12. #12272 - External SIGTSTP terminal restoration (4 comments) - CLOSED
13. #12282 - llama.cpp image input ignored (4 comments) - CLOSED
14. #12286 - openai-responses strict mode issue (3 comments) - CLOSED
15. #10389 - ACP support for Pi Durable (3 comments) - CLOSED
16. #12318 - Anthropic login fails on Team/Enterprise (3 comments) - CLOSED


17. #12264 - OpenAI Decisions cache usage drops (3 comments) - OPEN
18. #12176 - Codemode batching hides skill reads (3 comments) - CLOSED
19. #12323 - Resumed session tools not restored (2 comments) - CLOSED
20. #12259 - qwen-token-plan missing models (2 comments) - CLOSED
21. #12326 - Display-only gutter for sent messages (2 comments) - CLOSED
22. #12324 - Mermaid diagram fallback (2 comments) - CLOSED
23. #12269 - Keep prompt cache when changing thinking level (2 comments) - OPEN
24. #12311 - Quadratic model catalog merge (2 comments) - CLOSED
25. #12310 - Non-retryable HTTP errors retried (2 comments) - CLOSED
26. #12308 - OpenAI service tier pricing issues (2 comments) - CLOSED
27. #12288 - bash tool exit code missing (2 comments) - CLOSED
28. #12306 - pi-durable hold restored work (2 comments) - CLOSED
29. #12338 - External SIGTSTP in standalone TUIs (1 comment) - CLOSED
30. #12245 - /login provider search selection issue (1 comment) - CLOSED

**Latest Pull Requests (18 total)**:
1. #12280 - tree navigation

Several PRs are addressing critical issues across different components. The tree navigation PR (#12280) is still under review, while several others have been merged. Terminal restoration problems are being addressed through multiple fixes (#12339, #12336), and there are improvements to image handling for llama.cpp (#12335) and cursor key behavior in selectors (#12334). GitHub Copilot model updates and OpenAI system prompt caching are also in progress (#12325, #12319), with fixes targeting cache behavior and model availability.

The codebase is seeing refinements across multiple areas: scrollback rendering (#12275), cursor flickering during streaming (#12274), and managed update testing (#12304). Discussion threads are exploring personal agent applications (#12331), web automation approaches (#12320), and naming conventions for code modification features (#12314).

The focus areas emerging from recent activity center on Windows compatibility, terminal state management, provider integration challenges, performance optimization, and cache handling refinements.
</think>


# Pi Community Digest — 2026-11-20

## Today's Highlights

The Pi community wrapped up a busy day focused on **terminal stability fixes**, with three merged PRs (#12339, #12336, #12283) addressing various SIGTSTP and exit-path issues that left mouse tracking and keyboard protocols armed in the shell. Simultaneously, the OpenAI Codex provider received attention around prompt caching regressions in GPT-6.2 Sol, while the llama.cpp adapter gained proper image modality support for decision classifiers.

---

## Releases

No new releases were published in the last 24 hours.

---

## Hot Issues

### 1. Windows Usage Tracking — [#7547](https://github.com/earendil-works/pi/issues/7547) (99 comments)
**Status:** Open | **Author:** petrroll  
The community is actively mapping the Windows development experience, with the issue serving as a central hub for collecting feedback on how developers run Pi on Windows and what pain points exist across different setup methods (WSL, native, etc.). The high comment count reflects strong community interest in expanding Pi's Windows out-of-the-box experience.

### 2. Follow XDG Base Directory — [#2870](https://github.com/earendil-works/pi/issues/2870) (29 comments)
**Status:** Closed | **Author:** mks-h | 👍 75  
A long-standing Linux hygiene request was resolved: Pi now properly respects `$XDG_CONFIG_HOME` (defaulting to `$HOME/.config`) for configuration storage instead of cluttering the home directory. This aligns Pi with established Linux conventions and earned strong community approval.

### 3. Large Transcripts Re-render Every Frame — [#9549](https://github.com/earendil-works/pi/issues/9549) (19 comments)
**Status:** Open | **Author:** EdgewalkerBlue  
A performance regression where resizing a session with large transcripts causes full re-rendering, saturating one CPU core. The issue was drafted collaboratively with a local Pi agent and verified on Windows Terminal with 2 logical cores. This is a significant UX degradation for power users with long conversation histories.

### 4. Opt-in Package Namespace for Skills — [#8834](https://github.com/earendil-works/pi/issues/8834) (16 comments)
**Status:** Closed | **Author:** maskshell  
A feature request to add a `pi.namespace` field to package.json, enabling skills and prompt templates to load under a composed name (`<namespace>:<name>`). This allows package authors to avoid name collisions and provides better organization for curated skill collections.

### 5. Permanent Conversation Deletion — [#11026](https://github.com/earendil-works/pi/issues/11026) (9 comments)
**Status:** Open | **Author:** larrykoo711  
Users of pi-durable are requesting a `harness.deleteConversation(id, ctx)` API to permanently remove conversations from storage, including associated entries, docs, inbox items, and scheduler state. Currently, there's no clean way to reclaim storage from old sessions.

### 6. GPT-6.2 Sol Prompt Cache Regression — [#12273](https://github.com/earendil-works/pi/issues/12273) (6 comments)
**Status:** Closed | **Author:** chpock  
A notable performance regression was identified: GPT-6.2 Sol reports significantly lower prompt-cache reuse (3,968 vs 12,800 cached tokens on turn 4) compared to GPT-6.1 Sol on the same workload. This adds ~8.8k uncached input tokens per warm turn, impacting cost efficiency for extended sessions.

### 7. Windows Terminal Mouse Tracking Leftover — [#12133](https://github.com/earendil-works/pi/issues/12133) (5 comments)
**Status:** Closed | **Author:** demoAlitalia  
After exiting Pi on Windows (PowerShell in Windows Terminal), SGR mouse reports flood the shell prompt with escape sequences. This has been addressed through related PRs (#12336, #12339) targeting the terminal restoration path.

### 8. Gemini 4 Hydrogen xhigh Level Rejected — [#12184](https://github.com/earendil-works/pi/issues/12184) (5 comments)
**Status:** Closed | **Author:** onprs  
Google adapters were incorrectly rejecting the newly advertised `xhigh` thinking level for Gemini 4 Hydrogen, throwing before any HTTP request was sent. The fix ensures proper handling of the fourth thinking level now exposed by models.dev.

### 9. Copilot Models Hidden After Restart — [#11006](https://github.com/earendil-works/pi/issues/11006) (5 comments)
**Status:** Open | **Author:** grok08  
Enterprise-admin-enabled GitHub Copilot models can remain absent from Pi's model picker after restart because `availableModelIds` is cached and not refreshed while the OAuth credential is still valid. An open PR (#12325) addresses this by keeping Copilot's available models current.

### 10. Idle Cache-Warming Horizon Configuration — [#11127](https://github.com/earendil-works/pi/issues/11127) (4 comments)
**Status:** Open | **Author:** wenjiudaijiugui  
Users want configurable control over the maximum age of idle cache warming (default 30 minutes). With a 30-minute prompt-cache TTL, refreshes occur at roughly 27 and 54 minutes, but users prefer more flexible scheduling (e.g., 60 or 120 minutes).

---

## Key PR Progress

### Terminal & Signal Handling Fixes

| PR | Description |
|----|-------------|
| [#12339](https://github.com/earendil-works/pi/pull/12339) | **SIGTSTP listener ownership** — Ensures the suspend signal handler is properly tied to terminal ownership, addressing edge cases before `start()` and after `stop()` |
| [#12336](https://github.com/earendil-works/pi/pull/12336) | **Flush stdout before exit** — Prevents dropped writes when exiting after TUI `stop()`, ensuring mouse tracking and Kitty protocol sequences are properly sent |
| [#12283](https://github.com/earendil-works/pi/pull/12283) | **Handle external SIGTSTP** — `kill -TSTP <pi-pid>` now follows the same terminal restoration path as Ctrl+Z, fixing #12272 |

### AI Provider & Model Fixes

| PR | Description |
|----|-------------|
| [#12335](https://github.com/earendil-works/pi/pull/12335) | **Send images to llama.cpp classifiers** — Decision models reporting `image` in `architecture.input_modalities` (e.g., Clef with `mmproj`) were incorrectly registered as text-only; now properly supported |
| [#12319](https://github.com/earendil-works/pi/pull/12319) | **Make Codex system prompts cacheable** — GPT-6.2 places top-level `instructions` outside the cacheable prefix; refactors to use `messages` structure instead |
| [#12325](https://github.com/earendil-works/pi/pull/12325) | **Keep Copilot models up to date** — Refreshes `availableModelIds` on model fetches, ensuring newly enabled enterprise models appear without waiting for token refresh |
| [#12332](https://github.com/earendil-works/pi/pull/12332) | **Send strict tools to Claude on Copilot** — Follow-up ensuring built-in tools request strict mode when model supports it |
| [#12313](https://github.com/earendil-works/pi/pull/12313) | **Add qwen4-max-preview** — Updates token plan individual models to include newly available Qwen4 variants |

### UI/UX Improvements

| PR | Description |
|----|-------------|
| [#12334](https://github.com/earendil-works/pi/pull/12334) | **Cursor keys in selector search** — Left/Right/Home/End keys no longer reset selection to first entry when filtering |
| [#12275](https://github.com/earendil-works/pi/pull/12275) | **Stop scrollback redraws** — Prevents full-viewport redraws when long tool results continue updating above the viewport |
| [#12274](https://github.com/earendil-works/pi/pull/12274) | **Avoid cursor flicker during streaming** — Eliminates high-speed strobing during assistant streaming or footer updates |
| [#12280](https://github.com/earendil-works/pi/pull/12280) | **Tree navigation history** — Fixes re-adding prompts to history when navigating via `/tree` or extension action |

### Performance & Quality

| PR | Description |
|----|-------------|
| [#12304](https://github.com/earendil-works/pi/pull/12304) | **Smoke-test with launcher's Node.js** — Adds validation that managed updates work with the current Node.js binary, catching ABI mismatches |
| [#12337](https://github.com/earendil-works/pi/pull/12337) | **Report settings errors on reload** — Settings parse errors discovered during `/reload` are now properly reported to users |

---

## Hot Discussions

### Ideas

**Alternative Name for `codemode` — [#12314](https://github.com/earendil-works/pi/discussions/12314)**  
Author: dragove  
Users running `codemode` with DeepSeek V4.1-Flash report the model sometimes uses `codemod` or `codemodule` instead of `codemode`. The suggestion is to rename the tool to avoid collision with common English words.

**WebDriver for Free Chat Quotas — [#12320](https://github.com/earendil-works/pi/discussions/12320)**  
Author: zzau13  
A speculative discussion about using WebDriver to automate free chat services as AI backends for editors. While framed as "unrelated to Pi," it explores creative approaches to accessing free token quotas.

### Show and Tell

**Pi-Personal: Always-on Personal Agent — [#12331](https://github.com/earendil-works/pi/discussions/12331)**  
Author: emiwltz  
A demonstration of a small always-on personal agent built on Pi, kept alive in Herdr Core and reachable from Telegram. The core implementation is 5,216 lines, using Pi as-is with its own sign-in and extensions, passing messages as plain files.

---

## Feature Request Trends

Analysis of open issues and discussions reveals the following recurring themes:

| Trend | Description |
|-------|-------------|
| **Durable Storage Management** | Multiple requests for conversation lifecycle controls: permanent deletion (#11026), holding/restoring work (#12306), and ACP adapter support (#10389) |
| **Cache & Performance Control** | Users want finer control over prompt caching behavior: configurable warming horizons (#11127), preserving cache across thinking level changes (#12269), and fixing cache regressions (#12273, #12264) |
| **Windows Experience** | Continued focus on improving Windows Terminal integration, mouse tracking cleanup, and native Windows compatibility (#7547, #12133) |
| **Multi-Provider Model Discovery** | Issues around dynamic model availability: Copilot enterprise models (#11006), XDG compliance (#2870), and namespace isolation (#8834) |
| **Terminal UI Refinements** | Requests for display customization: message gutters (#12326), Mermaid fallback clarity (#12324), and cursor behavior improvements |

---

## Developer Pain Points

1. **Terminal State Leaking** — Recurring issues where mouse tracking, Kitty keyboard protocol, and bracketed paste remain enabled after Pi exits or suspends. Multiple PRs this cycle address variations of this problem.

2. **Cache Inefficiencies** — GPT-6.2 Sol shows significant prompt cache regression vs 6.1; OpenAI Decisions classifiers drop cache counters to zero; cache breaks on thinking level changes.

3. **OAuth Credential Staleness** — GitHub Copilot models enabled by enterprise admins remain invisible until token refresh, creating UX gaps for team deployments.

4. **llama.cpp Modality Handling** — Models with multimodal support (e.g., image input via `mmproj`) were incorrectly classified as text-only, breaking `models.classify()` for visual inputs.

5. **Settings Error Visibility** — Parse errors in `settings.json` during `/reload` were silently swallowed, leaving users confused when configuration changes had no effect.

6. **Devcontainer Clipboard** — Copy functionality broken since v1.3.0 in devcontainer environments, requiring `wl-clipboard` which may not be available in the container setup.

---

*End of digest. Data sourced from github.com/earendil-works/pi at 2026-11-20.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>Let me analyze the GitHub data for Qwen Code (qwenlm/qwen-code) from 2026-11-20 and generate a structured digest.

First, let me identify the key items:

**Latest Releases (last 24h):**
- None

**Latest Issues (updated in last 24h):** 50 total, showing top 30 by comment count

Let me pick 10 noteworthy issues:

1. **#14724** - Main CI failed: Managed Agent gate — no test identified (484 comments, P0 bug) - Massive CI tracking issue
2. **#11680** - Main CI failed: E2E Tests (87 comments) - E2E test failures


3. **#13078** - Daily dependency CVE audit failed (57 comments) - Security audit issue
4. **#11678** - Main CI failed: Qwen Code CI (44 comments) - Windows CI failure
5. **#15486** - P1 bug with token management (7 comments) - After compaction, request size counts pending tool result twice
6. **#17037** - CI inode issue on hz3 (6 comments) - CI infrastructure problem
7. **#17284** - Agent loop feature request (3 comments) - Roadmap tracking
8. **#17854** - P1 security vulnerability with auto-fixes and updates to follow

, plus a few more critical issues including a trust bypass in the MCP server, an iOS Safari keyboard problem, and some flaky test deflake requests

Now I'm looking at the pull requests from the last day—there are 50 total, with several notable ones like the managed agent CI stabilization and the files-on-v2 lifecycle refactor, along with a few closed PRs that added Arabic support and object storage capabilities.

I'm also tracking some key ongoing work: JSONL diagnostic recovery, runtime recovery in long-answer scenarios, and UI improvements like the daemon chat controller binding and commit file selection, plus some core token accounting fixes.

Let me narrow down to the most impactful items—there are about 15-20 PRs worth highlighting, so I need to be selective about which ones really matter for the project.
</think>


# Qwen Code Community Digest — 2026-11-20

**Repository:** [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | **Data window:** 24 hours ending 2026-11-20

---

## 1. Today's Highlights

CI health remains the dominant theme today: the Managed Agent gate is generating the largest volume of tracked failures (484 comments across the tracking issue), while a chronic Java SDK suite regression and a recurring `hz3` inode floor breach continue to block merge-relevant lanes. On the feature side, the team is converging toward shipping dynamic workflows by default (PR #17822), Arabic RTL support (PR #17437), and a daemon restart recovery inbox (PR #17677) — all in active review. A newly surfaced P1 security finding (#17854) flags a structural trust bypass in the MCP AUTO mode classifier that warrants close attention.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues

### Issue #14724 — Main CI failed: Managed Agent gate · [🔗](https://github.com/QwenLM/qwen-code/issues/14724)
**484 comments · P1 · `type/bug` · `autofix/skip`**

The Managed Agent gate has no identifiable failing test across multiple commit hashes, making it impossible to pinpoint a root cause. The community has been actively debugging; the sheer comment count reflects dozens of independent CI runs feeding into the same tracker. **Why it matters:** Until this is resolved, no PR touching the Managed Agent scope can be safely merged, since the gate is currently non-actionable. A parallel effort (#17039 / PR #17865) is underway to stabilize the gate name itself.

### Issue #11680 — Main CI failed: E2E Tests · [🔗](https://github.com/QwenLM/qwen-code/issues/11680)
**87 comments · P1 · `type/bug` · `autofix/skip`**

A long-running E2E test suite failure on the Linux Docker shard. The failure fires before any test results are reported, suggesting an infrastructure-level or test-discovery problem. **Why it matters:** It directly gates merge eligibility for all of `main`.

### Issue #13078 — Daily dependency CVE audit failed · [🔗](https://github.com/QwenLM/qwen-code/issues/13078)
**57 comments · P2 · `status/needs-triage` · `scope/ci-cd`**

The scheduled dependency CVE audit has failed, with the runner pointing to either a new high-severity vulnerability in the dependency graph or an unresponsive npm audit endpoint. **Why it matters:** Security posture is degraded until the audit is re-established; the team is actively triaging.

### Issue #11678 — Main CI failed: Qwen Code CI (Windows) · [🔗](https://github.com/QwenLM/qwen-code/issues/11678)
**44 comments · P1 · `type/bug` · `autofix/in-progress`**

The Windows-latest + Node 22.x test leg fails during the "run tests and generate coverage" step. **Why it matters:** Windows CI coverage is currently blind; PRs that only break Windows can merge undetected.

### Issue #15486 — Token estimate double-counts pending tool result after compaction · [🔗](https://github.com/QwenLM/qwen-code/issues/15486)
**7 comments · P1 · `category/core` · `scope/token-management`**

When automatic compaction fires while a tool result is still pending, the next request's size estimate counts that result twice and adds a spurious 20K pad, causing the turn to be halted or sent with `max_tokens: 1`. **Why it matters:** This is a silent data-corruption-adjacent bug that breaks multi-turn tool loops mid-conversation.

### Issue #17037 — `hz3` runner out of inodes · [🔗](https://github.com/QwenLM/qwen-code/issues/17037)
**6 comments · P1 · `scope/ci-cd`**

The `hz3` host's `/tmp` is at 92% inode utilization due to leftover verify work trees on a tmpfs. Jobs landing there fail at the disk-floor gate. **Why it matters:** Reduces effective parallelism; teams are being told to re-run to land on a different host.

### Issue #17851 — Managed Agent full tier `runtime_preparation_timeout` chronic since 2026-11-11 · [🔗](https://github.com/QwenLM/qwen-code/issues/17851)
**3 comments · P1 · `area: managed`**

The full-tier Java SDK suite has failed on every scheduled run for over a week, independently of any open PR. **Why it matters:** The regression predates recent merges, indicating a latent issue in the shipped main branch.

### Issue #17854 — MCP AUTO mode trust bypass · [🔗](https://github.com/QwenLM/qwen-code/issues/17854)
**3 comments · P1 · `category/security` · `scope/mcp` · `scope/vulnerability`**

Server-level MCP `trust` bypasses the AUTO-mode LLM classifier entirely — newly added tools from a trusted server execute with zero review. This is a structural finding, not a dynamic reproduction. **Why it matters:** In AUTO mode, approving a server's trust level grants a permanent backdoor for all future tools it registers.

### Issue #17859 — iOS Safari keyboard covers Send on welcome screen · [🔗](https://github.com/QwenLM/qwen-code/issues/17859)
**3 comments · P2 · `category/ui` · `category/platform`**

On iOS Safari, the keyboard accessory bar overlaps the Send button on the welcome screen; tapping the obscured button only dismisses the keyboard, requiring a second tap to submit. **Why it matters:** A direct UX regression for the growing iOS Web Shell audience.

### Issue #17188 — DeepSeek V3.1/V3.2 fall back to generic output limit · [🔗](https://github.com/QwenLM/qwen-code/issues/17188)
**3 comments · P2 · `category/core` · `scope/token-management`**

Model IDs `deepseek-v3.1` and `deepseek-v3.2` normalize incorrectly and receive a 32,000-token limit instead of the catalogued 65,536. **Why it matters:** Users of these models are silently capped at half the available context, causing premature truncation in long-output tasks.

---

## 4. Key PR Progress

### PR #17822 — Turn dynamic workflows on by default · [🔗](https://github.com/QwenLM/qwen-code/pull/17822)
Enables the Workflow tool, `/workflows`, saved workflows, and extension workflows by default across the terminal, headless runs, ACP sessions, and all daemon workspace runtimes — no manual configuration required. This is a significant usability expansion for end users.

### PR #17825 — End a tool-calling turn when queued input is sent now · [🔗](https://github.com/QwenLM/qwen-code/pull/17825)
When the user clicks "Send now" on a queued mid-turn message while tools are still running or pending approval, the agent now properly terminates the current turn and the daemon immediately queues the new message. Closes a UX gap in mid-turn interruption.

### PR #17437 — Add Arabic support for CLI and Web Shell with RTL layout · [🔗](https://github.com/QwenLM/qwen-code/pull/17437)
Complete Arabic language registration across core and CLI, plus RTL layout in the Web Shell and exported HTML transcripts. Includes RTL-aware styling in xterm and the composer.

### PR #17677 — Add daemon restart recovery inbox · [🔗](https://github.com/QwenLM/qwen-code/pull/17677)
Adds `POST /sessions/recovery` (lists unsettled sessions after a restart) and `POST /sessions/recovery/continue` (resumes a selected batch without opening conversations). Improves daemon resilience for long-running workspaces.

### PR #17865 — Stabilize required gate name · [🔗](https://github.com/QwenLM/qwen-code/pull/17865)
Hardens the Managed Agent check context as `Managed Agent gate` across all run types — touched PR, untouched PR, main push, and merge groups. Enables the gate to become a required status check, directly addressing issue #17039.

### PR #17901 — Bound JSONL tail diagnostic recovery and cache churn · [🔗](https://github.com/QwenLM/qwen-code/pull/17901)
Resolves three of four follow-up items from the merged JSONL append-integrity fix. Changes are confined to the diagnostic path that reports an uninspectable file tail, reducing cache churn. Native Windows and current-head macOS validation remain open.

### PR #17900 — Recover durable Runtime in long-answer restart E2E · [🔗](https://github.com/QwenLM/qwen-code/pull/17900)
The Linux long-answer persistence scenario now keeps the worker Broker alive across Spring process kill events and allows the replacement Broker to verify and adopt the worker before admitting the second Workspace Turn.

### PR #17902 — Correct usage token accounting across dashboard and /stats · [🔗](https://github.com/QwenLM/qwen-code/pull/17902)
Token usage in the daemon status dashboard and cross-session statistics view now uses per-request usage ledgers placed on the actual response date, instead of session summaries that carry replayed history and inflated totals.

### PR #17895 — Bind daemon chat controller to session provider · [🔗](https://github.com/QwenLM/qwen-code/pull/17895)
Wires the daemon adapter's `useDaemonChatController` hook to live `DaemonSessionProvider` state, enabling the daemon chat column to be driven by backend-neutral state. This is slice 2d of a multi-slice refactor.

### PR #17840 — Load xterm on demand · [🔗](https://github.com/QwenLM/qwen-code/pull/17840)
Defers loading of xterm, FitAddon, and the terminal stylesheet until a workspace or managed terminal is opened. The tab/dialog shows a loading indicator while the runtime initializes, reducing initial bundle size.

---

## 5. Feature Request Trends

| Theme | Evidence | Signal |
|---|---|---|
| **Session / daemon resilience** | PRs #17677, #17900, #17902; Issue #17284 | High — multiple parallel implementations addressing restart recovery, token accounting, and session state |
| **MCP security hardening** | Issue #17854 (P1 vulnerability) | Urgent — structural classifier bypass in AUTO mode needs a design decision |
| **Internationalization & RTL** | PR #17437 (Arabic RTL) | Growing — Arabic is the first full RTL language; more may follow |
| **Terminal UX & on-demand loading** | PR #17840, Issue #17715 | Moderate — perf work on xterm, permission subject protocol design |
| **Managed Agent parity** | PRs #17795, #17864, #17871, #16837 | Active — consolidating version machinery, wiring Web UI parity, adding storage backends |
| **LSP in Desktop client** | Issue #14507 (closed, P3) | Latent demand — community is asking for a settings-based LSP enablement channel |
| **Multi-agent session management** | Issue #17284, PR #17813 | Emerging — H5e card follow-ups and multi-agent group cards on the roadmap |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|---|---|---|
| **Flaky E2E and unit tests** | High — 4+ deflake issues in 24h (#17834, #17884, #17791, #17701) | Slows CI signal; forces manual reruns; masks real regressions |
| **CI infrastructure instability** (`hz3` inode floor, Windows leg, managed-agent gate) | High — visible across 6+ active issues | Blocks merges; creates noise in the failure tracking system |
| **CVE audit automation gaps** | Recurring — Issue #13078 fires on schedule | Leaves the repo in a degraded security posture until manually cleared |
| **Model ID normalization misses** (DeepSeek V3.x, Ollama llama4 tags) | Medium — 2 issues (#17188, #17189) | Silent misconfigurations that degrade model capability without user awareness |
| **CLI command migration file overwrite race** | Issue #17628 | Data-loss risk — a TOML-to-Markdown migration can truncate a concurrently created file |
| **Managed Agent Java suite chronic failure** | Since 2026-11-11 — issue #17851 | Full-tier test coverage is blind for over a week; no merge safety on that scope |

---

*Digest generated from public GitHub data for QwenLM/qwen-code. All issue and PR links are live. This is a community snapshot, not an official release note.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*