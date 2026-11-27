# AI CLI Tools Community Digest 2026-11-27

> Generated: 2026-11-27 04:29 UTC | Tools covered: 7

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

<think>The user wants a comprehensive cross-tool comparison report covering all 6 AI CLI tools discussed in the digests. Let me analyze the data from each digest and create a structured comparison.

Let me organize the data:

1. **Claude Code**
   - Issues: 50 total shown, top 30 by comment count
   - PRs: 4 items (3 closed, 1 open)
   - Discussions: No data provided
   - Releases: None in last 24h
   - Notable: Issues have comments AND thumbs-up reactions

2. **OpenAI Codex**
   - Issues: Many (shown as top 30 by comment count, total not specified but seems substantial)
   - PRs: 20 merged in last 24h
   - Discussions: Multiple discussions (8 items shown)
   - Releases: 2 alpha releases (v0.174.0-alpha.7, v0.174.0-alpha.8)
   - Notable: Very high PR velocity, lots of discussion activity

3. **Gemini CLI**
   - Issues: 50 total, showing top 30
   - PRs: 20 items total (mix of new and active)
   - Discussions: No data provided
   - Releases: None in last 24h

4. **GitHub Copilot CLI**
   - Issues: 34 total
   - PRs: 0 in last 24h
   - Discussions: No data provided
   - Releases: 3 releases (v1.0.117-3, v1.0.117-4, v1.0.117-5)
   - Notable: Smallest community, but steady release cadence

5. **OpenCode**
   - Issues: 50 total, showing top 30
   - PRs: 50 total, showing top 20
   - Discussions: No data provided
   - Releases: None in last 24h
   - Notable: High activity across both issues and PRs

6. **Pi**
   - Issues: 50 total, showing top 30
   - PRs: 18 items
   - Discussions: No data provided
   - Releases: None in last 24h

7. **Qwen Code**
   - Issues: 30 items shown
   - PRs: 10 items
   - Discussions: No data provided
   - Releases: 4 releases (v0.28.7, v0.28.6, v0.28.6-nightly, sdk-typescript-v0.1.36)

Looking at the patterns across these tools, Claude Code, Gemini CLI, and OpenCode all maintain consistent issue volume while showing strong PR engagement. Codex and Qwen Code stand out with more frequent releases, suggesting either faster iteration or more active development cycles. Copilot CLI has the smallest footprint but steady updates, while Pi shows moderate activity without recent releases.

The real differentiation comes down to community structure—some tools use Discussions as their primary feedback channel while others rely on Issues, and release velocity varies significantly from steady monthly updates to rapid development bursts.
</think>


# AI CLI Tools Ecosystem — Cross-Tool Comparison Report

**Date:** 2026-11-27

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem is in a phase of rapid, parallel evolution. Every major tool is converging on a shared architectural model — agent orchestration, multi-turn session management, tool/extension/plugin systems, and MCP (Model Context Protocol) integration — yet each is solving these problems through distinct engineering philosophies. Anthropic's Claude Code and OpenAI's Codex prioritize desktop-native polish and corporate deployment use cases, while Google's Gemini CLI, the community-driven OpenCode, and Qwen's Qwen Code emphasize CLI-first, scriptable, and extensible workflows. Copilot CLI occupies a distinct niche as a lightweight GitHub-native wrapper. Across all tools, the dominant community concerns are memory/resource management, platform-specific regressions (especially Windows and Linux), multi-account and permission handling, and the fundamental tension between security (sandboxing, approval flows) and developer ergonomics (automated workflows, unattended execution).

---

## 2. Activity Comparison

| Tool | Releases Today | Issues (Recent) | PRs (Recent) | Discussions | Community Channel Model |
|---|---|---|---|---|---|
| **Claude Code** | 0 | 50 total, active engagement | 4 (1 open, 3 closed) | N/A | Issues + PRs only |
| **OpenAI Codex** | 2 alpha (v0.174.0-alpha.7/8) | High volume, top 30 by comments | **20 merged** | Active (8 items) | All three channels — highest overall velocity |
| **Gemini CLI** | 0 | 50 total, active engagement | 20 (3 new, 17 active) | N/A | Issues + PRs only |
| **GitHub Copilot CLI** | 3 (v1.0.117-3/4/5) | 34 total, moderate | 0 | N/A | Issues + PRs only; smallest footprint |
| **OpenCode** | 0 | 50 total, very high engagement | 50 total, active | N/A | Issues + PRs only; largest PR backlog |
| **Pi** | 0 | 50 total, high engagement | 18 (10+ new) | N/A | Issues + PRs only |
| **Qwen Code** | 4 (stable + nightly + SDK) | 30 shown, high engagement | 10 (all open/active) | N/A | Issues + PRs only |

**Observations:**

- **OpenAI Codex** leads in raw velocity — 20 PRs merged in 24 hours, plus active discussions, signals an intense development sprint, likely targeting a significant milestone.
- **GitHub Copilot CLI** has the smallest community footprint but maintains the most disciplined release cadence (three patch releases in as many days), suggesting mature CI/CD and a smaller surface area.
- **OpenCode** carries the largest open PR backlog (50 total), indicating either high contributor interest or slower review throughput.
- **No tool** uses Discussions as its primary community channel; all seven tools rely on Issues for bug reports and feature requests. OpenAI Codex is the outlier with a non-trivial discussion volume, reflecting a more productized community engagement model.

---

## 3. Shared Feature Directions

The following requirements appear across multiple tool communities, indicating genuine ecosystem-wide pain points:

### Agent & Session Reliability
- **Memory leaks and process cleanup:** Claude Code (fseventsd, daemon worker leaks), Gemini CLI (disposed sessions retain closures), Copilot CLI (credential manager flooding), Qwen Code (cold scan index rebuild storms), and Pi (AgentSession GC retention) all report memory or process management issues. This is the single most cross-cutting problem.
- **Crash recovery:** Claude Code's daemon crashes, Gemini CLI's crash recovery, Qwen Code's managed session cold recovery, and Copilot CLI's network reconnection handling all surface independently.
- **Subagent/agent hangs:** Claude Code (generalist agent hangs), Gemini CLI (subagent MAX_TURNS reporting), and Pi (AgentSession.dispose GC) — parallel failures suggesting architectural complexity around multi-agent orchestration.

### Multi-Account & Multi-Provider Identity
- **Multi-account support:** Claude Code (#18435, 1,114 👍) has the highest single-issue upvote count across all tools — the community is demanding multi-profile switching. OpenCode, Copilot CLI, and Qwen Code also address multi-account scenarios independently.
- **Model/provider discovery:** Gemini CLI, OpenCode, and Qwen Code all request better model discovery during provider setup.

### MCP Ecosystem
- **MCP server resilience:** Claude Code (Gmail MCP privacy), Gemini CLI (stdio connection timeouts), Copilot CLI (MCP tool persistence), Qwen Code (MCP OAuth token pinning), and OpenCode (MCP connection drop handling) all independently report MCP reliability issues.
- **TLS/certificate trust:** Copilot CLI (custom CA support), Gemini CLI (self-signed certs), and Qwen Code (private-network certificates) are all building the same trust infrastructure.

### Security & Permission Boundaries
- **Sandbox restriction friction:** Claude Code (subagent file writing), Copilot CLI (git submodule blocking), Gemini CLI (destructive operation warnings), and OpenCode (Promise tool permission prompts) all struggle with the tradeoff between safety and automation.
- **Credential isolation:** Qwen Code (fork review credentials), Copilot CLI (credential manager flooding), and Gemini CLI (OS sandboxing) all need better credential lifecycle management.

### Platform-Specific Challenges
- **Windows regressions:** Claude Code, Codex, Copilot CLI, and OpenCode all report Windows-specific failures — the most common being network access blocks, sandbox restrictions, and UI selector regressions after updates.
- **Linux desktop support:** Claude Code (fseventsd), Qwen Code (AppImage/Mesa), and Copilot CLI (GHE.com updater) all have distinct Linux-specific issues, despite Linux being a smaller user share.

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach | Unique Differentiators |
|---|---|---|---|---|
| **Claude Code** | Desktop-native agent IDE | Professional developers, power users | Opinionated defaults, MCP-centric, desktop-first | Highest community upvotes on single issues; largest feature request (multi-account at 1,114 👍); aggressive MCP integration |
| **OpenAI Codex** | Web/CLI hybrid, TUI excellence | Developers across all platforms | 20+ PRs/day velocity; TUI-heavy; Chrome extension bridge | Fastest release cycle; active discussion forum; broad platform parity effort |
| **Gemini CLI** | CLI-first extensibility | Developers wanting custom tooling | Plugin/hook architecture; AST-aware tool investigation; skill system | AST-aware file analysis (epic), configurable per-tool timeouts, skill invocation system |
| **GitHub Copilot CLI** | GitHub-native lightweight wrapper | GitHub Copilot subscribers | Minimal surface area; CLI-only; policy-driven security | Tightest GitHub integration; most disciplined release cadence; smallest footprint |
| **OpenCode** | Community-driven OSS alternative | Open-source community, self-hosters | Full CLI + desktop; active upstream contribution | 50 open PRs; fastest-growing PR backlog; community governance model |
| **Pi** | SDK-first extensibility | SDK integrators, harness developers | SDK architecture; Mod runtime; Pi Durable for long-running tasks | Mod plugin system; Harness kernel integration; pi-image API; telemetry transparency |
| **Qwen Code** | Kernel integration, privacy-conscious | Enterprise and Chinese-language users | Kernel-based architecture; usage statistics off by default | Harness kernel integration; cold recovery; scoped model defaults; fork review credential isolation |

**Key differentiators:**

- **Claude Code** bets on desktop-native experience and MCP ecosystem depth; **OpenAI Codex** bets on raw velocity and TUI polish.
- **Gemini CLI** differentiates through SDK-first design and AST-aware tooling; **Pi** differentiates through its Mod runtime and durable task architecture.
- **GitHub Copilot CLI** is intentionally minimal, while **Qwen Code** is the most privacy-conscious (usage statistics off by default, loopback credential serving).
- **OpenCode** is the only community-governed project, giving it different incentive alignment — features reflect direct contributor demand rather than corporate roadmap.

---

## 5. Community Momentum & Maturity

| Tool | Momentum Signal | Maturity Signal |
|---|---|---|
| **Claude Code** | 1,100+ upvote feature request, 258-comment discussions | Mature product with stable release cadence; issues reflect refinement rather than core breakage |
| **OpenAI Codex** | 20 PRs/day, active discussions, 2 alpha releases | Rapid iteration; regression risk is elevated (multiple Windows bugs post-Nov 21 update) |
| **Gemini CLI** | Consistent issue/PR volume, multiple concurrent P1 bugs | Active development with unresolved core stability issues (agent hangs, memory leaks) |
| **GitHub Copilot CLI** | Steady 3-release cadence, smaller issue volume | Most mature CI/CD process; smallest surface area means fewer regressions |
| **OpenCode** | 50 open PRs, active issue triaging | High contributor interest; PR backlog suggests review bottleneck or active feature development |
| **Pi** | 18 PRs, diverse feature work (telemetry, image API, Mods) | Architectural investment phase; multiple epic-level features in parallel |
| **Qwen Code** | 4 releases, 10 active PRs, cold recovery + kernel integration | Fast-moving with significant architectural changes; chronic CI failures indicate growth pains |

**Community health summary:**
- **Most mature:** GitHub Copilot CLI (disciplined releases, small surface area) and Claude Code (stable user base, high engagement).
- **Fastest moving:** OpenAI Codex (20 PRs/day) and Qwen Code (4 releases + kernel integration).
- **Highest community energy:** OpenCode (50 PR backlog, community-driven) and Claude Code (largest single-issue upvote count).
- **Most volatile:** Gemini CLI and OpenAI Codex (both have multiple P1 bugs open concurrently).

---

## 6. Trend Signals

### For Developers Choosing a Tool

1. **MCP is table stakes.** Every tool is building MCP server support, TLS trust infrastructure, and connection resilience. The differentiator is depth — Claude Code's MCP ecosystem is most mature; Gemini CLI's per-tool timeouts and AST-aware analysis represent the next frontier.

2. **Security vs. ergonomics is the central design tension.** Every tool struggles with the same tradeoff: aggressive sandboxing blocks legitimate workflows; permissive security enables automation but risks destructive actions. The industry is converging on interactive approval modes (Claude Code's `/approve`, Copilot CLI's assisted permissions) as a middle ground.

3. **Platform parity remains unsolved.** Windows and Linux regressions appear in every tool's issue tracker. The macOS ecosystem is most stable; Windows consistently presents sandbox, network, and UI issues; Linux support is an afterthought everywhere. This is a 12–18 month horizon problem.

4. **Subagent and multi-agent orchestration is the next battleground.** Claude Code's multi-account request, Gemini CLI's subagent MAX_TURNS bug, Pi's Mod runtime, and Qwen Code's durable scheduling all point to multi-agent coordination as the next major feature dimension.

5. **Community-driven tools are closing feature gaps rapidly.** OpenCode's 50-PR backlog and Qwen Code's kernel integration represent significant engineering investment from non-corporate contributors, suggesting the open-source ecosystem is not merely replicating features but advancing the architecture.

6. **Privacy-aware design is emerging.** Qwen Code's default-off usage telemetry and Copilot CLI's loopback credential serving for fork reviews signal that enterprise and privacy-conscious users are a growing segment the ecosystem is beginning to address explicitly.

7. **CLI tools are evolving into full platforms.** The presence of plugin systems (Gemini CLI hooks), Mod runtimes (Pi), kernel integration (Qwen Code), and extension APIs (OpenCode) indicates that CLI tools are no longer single-purpose utilities — they are becoming extensible development platforms with significant ecosystem lock-in potential.

---

*Report generated from community digest data across seven AI CLI tools on 2026-11-27. Metrics reflect activity visible in public GitHub repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data from GitHub and create a report with specific sections. Let me analyze the data provided:

**Pull Requests (Skills) data:**
- PR #1742: mcp-builder fix for mcp>=2 streamable_http_client import
- PR #1298: skill-creator fix for trigger evals and Windows
- PR #1245: Notion spec to implementation + resume auditor
- PR #1980: webapp-testing avoid shell=True (security fix)
- PR #1792: docx timeout handling fix
- PR #1771: proofcore-contract-auditor for smart contracts
- PR #1734: Detect orphaned docx comments
- PR #1703: md2video-audio skill
- PR #525: pyxel skill for retro game development
- PR #2019: xlsx fix for worksheet-scoped defined names
- PR #1730: claude-api replace dead URLs
- PR #1681: skill-creator direct execution fix
- PR #514: document-typography skill
- PR #2108: docs about document skills snapshot status
- PR #1997: skill-creator YAML frontmatter parsing
- PR #1977: algorithmic-art wrapAround fix
- PR #1976: webapp-testing textarea/select reporting
- PR #1975: pptx --cols validation
- PR #1950: claude-api Python pause_turn guidance
- PR #1615: scnet-hpc skill

**Issues data:**
- #492: Security - community skills under anthropic/ namespace (46 comments, 3 👍)
- #228: Enable org-wide skill sharing (17 comments, 8 👍)
- #556: run_eval.py never triggers skills (13 comments, 7 👍)


- #1329: Proposing compact-memory skill (10 comments)
- #62: Skills disappeared errors (10 comments, 2 👍)
- #1385: Reasoning Quality Gate Pipeline proposal (8 comments, 1 👍)
- #202: skill-creator should be updated to best practice (8 comments, 1 👍)
- #1143: Feature Request - change email address (7 comments, 20 👍)
- #1352: run_eval.py parallel workers cross-match UUIDs (6 comments, 3 👍)
- #412: Skill proposal: agent-governance (6 comments)
- #189: document-skills and example-skills plugins install identical content (6 comments, 9 👍)
- #2064: theme-factory description unclear (5 comments)
- #1487: claude-api skill injects ~156k tokens (5 comments)
- #2018: docx merge_runs.py drops namespace declarations (4 comments)
- #1868: create_gradient_background never produces bottom_color (4 comments)

I'm noticing some clear patterns here. The security concern about namespace abuse (#492) is getting significant traction with 46 comments, and there's substantial interest in org-wide sharing capabilities (#228) with 17 comments and 8 upvotes. The email address change request (#1143) has surprisingly strong engagement with 20 upvotes despite fewer comments. There's also a cluster of issues around skill lifecycle management—disappearing skills, plugin conflicts, and evaluation triggers not working properly—which suggests the platform needs better handling of skill distribution and activation states. The agent-governance proposal and quality gate pipeline indicate people want stronger operational safeguards for AI systems. Looking at the PR data, I see several security and reliability issues being addressed—shell injection vulnerabilities, timeout handling, and API compatibility fixes. The skill ecosystem is evolving to handle more specialized tasks like contract auditing and markdown-to-video conversion, with particular attention to Windows compatibility and trigger evaluation systems. These changes reflect growing sophistication in how skills manage dependencies and error conditions across different environments.

The community's primary focus is on strengthening security posture and ensuring consistent behavior across platforms, which suggests an emphasis on production-readiness rather than feature expansion alone.
</think>


# Claude Code Skills Community Highlights Report

*Data as of 2026-11-27 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The following Skills (PRs) generated the most discussion and engagement:

| Rank | PR | Skill / Fix | Author | Status | Key Focus |
|------|-----|-------------|--------|--------|-----------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder: MCP ≥2.0 HTTP Client Fix** | Kuldeeep18 | OPEN | Updates `streamable_http_client` import path and custom header configuration for MCP v2 protocol changes |
| 2 | [#1980](https://github.com/anthropics/skills/pull/1980) | **webapp-testing: Remove shell=True (Security)** | Pcmhacker-piro | OPEN | Fixes CWE-78 command injection vulnerability in server spawning; critical security patch |
| 3 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: Trigger Eval & Windows Fixes** | MartinCajiao | OPEN | Resolves false misses in trigger evaluation, subprocess pipe failures on Windows, and runtime failure masking |
| 4 | [#1792](https://github.com/anthropics/skills/pull/1792) | **docx: LibreOffice Timeout Handling** | TINGyu123644 | OPEN | Returns proper error on timeout and verifies output DOCX lacks revision marks before claiming success |
| 5 | [#2019](https://github.com/anthropics/skills/pull/2019) | **xlsx: External Link Detection Enhancement** | reginaldalfret | OPEN | Fixes false negatives in `external_links_at_risk` by handling worksheet-scoped defined names and aliases |
| 6 | [#525](https://github.com/anthropics/skills/pull/525) | **pyxel: Retro Game Development Skill** | kitao | OPEN | Guides Pyxel-based Python game creation, headless testing, frame inspection, and task-specific validation |
| 7 | [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor: Smart Contract Analysis** | ProofCore-Protocol | OPEN | Static analysis for Solidity/Rust contracts with TON Blockchain audit proof anchoring via zero-storage Merkle protocol |

**Discussion Highlights:**
- **Security focus**: PR #1980 addresses a genuine command injection risk, indicating community vigilance for production safety
- **MCP ecosystem evolution**: PR #1742 reflects the fast-moving MCP protocol v2 adoption requiring skill maintenance
- **Cross-platform reliability**: PR #1298 tackles Windows-specific subprocess handling—a notable gap in cross-environment support

---

## 2. Community Demand Trends

Analysis of Issues reveals these emerging directions:

| Trend | Issue | Demand Signal | upvotes |
|-------|-------|---------------|---------|
| **Security & Trust** | [#492](https://github.com/anthropics/skills/issues/492) | Community skills distributed under `anthropic/` namespace create trust boundary abuse risk (46 comments) | 3 |
| **Org-Level Collaboration** | [#228](https://github.com/anthropics/skills/issues/228) | Request for org-wide skill sharing directly within Claude.ai (17 comments) | 8 |
| **Evaluation Reliability** | [#556](https://github.com/anthropics/skills/issues/556), [#1352](https://github.com/anthropics/skills/issues/1352) | `run_eval.py` produces 0% trigger rates; parallel workers corrupt UUID matching (19 combined comments) | 10 |
| **Memory Efficiency** | [#1487](https://github.com/anthropics/skills/issues/1487) | `claude-api` skill injects ~156k tokens, exhausting context in single call | 0 |
| **Agent Governance** | [#412](https://github.com/anthropics/skills/issues/412) | Proposal for safety patterns: policy enforcement, threat detection, trust scoring, audit trails | 0 |
| **Quality Gates** | [#1385](https://github.com/anthropics/skills/issues/1385) | Three-stage pipeline: Pre-task Calibration → Adversarial Review → Delivery Verification | 1 |

**Key Insight**: The community's top concerns are **operational reliability** (evaluation tools failing silently), **trust & security** (namespace confusion, governance patterns), and **collaboration at scale** (org-wide sharing).

---

## 3. High-Potential Pending Skills

These PRs show active development and may merge soon:

| PR | Skill | Readiness Indicators | Notable Features |
|----|-------|---------------------|------------------|
| [#1245](https://github.com/anthropics/skills/pull/1245) | **notion-spec-to-implementation** + **quantitative-resume-auditor** | Dual-skill PR, active discussion | Transforms Notion specs into implementation tasks; audit resumes for ATS optimization |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | Clear scope, zero-cost workflow | Markdown → Marp slides → MP4 with realistic voiceovers |
| [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | Focused domain | Profile-based SSH/Slurm workflows for HPC cluster operation |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Addresses universal pain point | Prevents orphan words, widows, numbering misalignment in AI-generated docs |
| [#1681](https://github.com/anthropics/skills/pull/1681) | **skill-creator** direct execution fix | Active maintenance | Enables standalone `package_skill.py` execution; updates docstrings/CLI help |

---

## 4. Skills Ecosystem Insight

> **The Claude Code Skills community is most concentrated on production hardening**—fixing security vulnerabilities (command injection, namespace trust abuse), improving evaluation reliability, and maintaining cross-platform compatibility—rather than expanding into entirely new skill domains.

---

*Report generated from official anthropics/skills repository data. All GitHub links reference the source PRs/Issues for direct reference.*

---

<think>The user wants me to generate a Claude Code community digest for 2026-11-27 based on the provided GitHub data. Let me analyze the data and structure it according to the requested format.

Key observations from the data:
1. **Releases**: None in the last 24h
2. **Issues**: 50 total issues, showing top 30 by comment count
3. **Pull Requests**: 4 items, 3 closed, 1 open

Let me identify the most important items:

**Hot Issues (top by engagement/importance):**
1. #18435 - Multi-account management feature request (258 comments, 1114 👍) - HUGE engagement
2. #66010 - Gmail MCP privacy issue with tracking URLs
3. #98769 - fseventsd runaway memory issue on macOS
4. #44657 - Subagent Write tool rejecting .md files
5. #92089 - /compact quadratic transcript growth bug
6. #94710 - Session survey can't be disabled
7. #87891 - Background daemon leaking workers
8. #94446 - File viewer can't open links under additionalDirectories
9. #73338 - File paths outside working directory regression
10. #111685 - Billing quota hyper-depletion issue (closed)

**Key PRs:**
1. #35761 - PowerShell default plugin (closed)
2. #35684 - Chrome extension bridge fix (closed)
3. #35683 - Terminal scroll-to-top fix (closed)
4. #112436 - Don't mark reproducible issues as stale (open)

Now let me structure this into the digest format:

1. **Today's Highlights** - Summary of the day
2. **Releases** - None, so I'll note this briefly
3. **Hot Issues** - 10 noteworthy issues


4. **Key PR Progress** - 4 PRs total, I'll cover all
5. **Hot Discussions** - No discussion data provided, so omit
6. **Feature Request Trends** - Multi-account, privacy, memory management, etc.
7. **Developer Pain Points** - Memory leaks, session management, file permissions, billing issues

I'll prepare a professional digest highlighting the key technical challenges and community-driven improvements in the Claude Code ecosystem.
</think>


# Claude Code Community Digest — 2026-11-27

## Today's Highlights

The community remains highly engaged with multi-account management dominating discussion (Issue #18435 has surpassed 1,100 👍), while a cluster of memory and process management bugs on macOS indicate systemic resource cleanup issues. The team's recent PR to preserve reproducible issues from being marked stale signals improved bug triage responsiveness.

---

## Releases

No new releases in the last 24 hours. The team appears to be in a stabilization phase following the recent v2.1.x rollout.

---

## Hot Issues

### 1. 🔥 Multi-Account Profile Switching (1,114 👍 | 258 comments)
**[FEATURE] Add ability to manage multiple Claude accounts within Claude Desktop with easy profile switching**
[Issue #18435](https://github.com/anthropics/claude-code/issues/18435)

The single highest-engagement issue in the repository. Users are requesting native multi-account management to switch between personal/work Claude profiles without logging out. Community reaction: overwhelming demand for a quality-of-life improvement that's become a blocker for power users.

---

### 2. 🔐 Gmail MCP Privacy Bug — Tracking URL Injection (29 comments | 15 👍)
**[BUG] Gmail MCP rewrites URLs with Google tracking URLs**
[Issue #66010](https://github.com/anthropics/claude-code/issues/66010)

Users report that the Gmail MCP server appends Google tracking parameters to URLs, raising privacy concerns. This is a significant issue for security-conscious developers using MCP for email automation.

---

### 3. 💾 macOS fseventsd Memory Catastrophe (20 comments | 1 👍)
**[BUG] fseventsd runaway on agent-heavy Macs — 24 GB RAM consumed, core pinned for days**
[Issue #98769](https://github.com/anthropics/claude-code/issues/98769)

A critical performance regression affecting heavy Claude Code users on macOS. The system monitoring daemon (`fseventsd`) consumes 800x its expected memory budget, with no self-healing mechanism. Blocks startup in some cases.

---

### 4. 📝 Subagent Write Tool Overblocking (18 comments | 35 👍)
**[BUG] Subagent Write tool rejects .md files named "report"/"summary"/"findings"/"analysis"**
[Issue #44657](https://github.com/anthropics/claude-code/issues/44657)

A safeguard designed to prevent subagents from writing reports inadvertently blocks legitimate file names. Users cannot create markdown files with common professional naming conventions. The block cannot be disabled.

---

### 5. 📈 Quadratic Transcript Growth on Compaction (14 comments | 1 👍)
**[BUG] Second /compact re-appends history, transcript grows quadratically**
[Issue #92089](https://github.com/anthropics/claude-code/issues/92089)

A reproducible bug where consecutive `/compact` commands cause exponential transcript growth. Each compaction incorrectly appends previously summarized content, degrading performance over time.

---

### 6. 📊 Session Survey Cannot Be Disabled (14 comments | 22 👍)
**[ENHANCEMENT] Desktop app: no way to disable "How is Claude doing this session?" survey**
[Issue #94710](https://github.com/anthropics/claude-code/issues/94710)

Users report the inline session feedback survey cannot be dismissed or disabled via settings. This打扰 workflow for developers who don't want to participate in real-time feedback collection.

---

### 7. 🧟 Background Daemon Process Leak (9 comments | 6 👍)
**[BUG] Background daemon never reaps stale workers — 64 leaked processes / ~7.1 GB after six weeks**
[Issue #87891](https://github.com/anthropics/claude-code/issues/87891)

A long-running memory leak where the background daemon fails to clean up orphaned worker processes. After six weeks, users observe 64 leaked processes consuming significant memory.

---

### 8. 🔗 File Viewer Path Restriction (8 comments | 6 👍)
**[BUG] Desktop app file viewer cannot open links to files under additionalDirectories**
[Issue #94446](https://github.com/anthropics/claude-code/issues/94446)

The file viewer pane only resolves links within the primary working directory. Files added via `additionalDirectories` render as clickable links but fail to open, creating inconsistent UX.

---

### 9. 📂 Regression: External File Links (7 comments | 13 👍)
**[BUG] File paths outside working directory no longer open inline — regression after update**
[Issue #73338](https://github.com/anthropics/claude-code/issues/73338)

A regression in Claude Desktop where files outside the working directory show "This file is outside the working directory" instead of opening inline. Affects users who keep notes in `~/.claude/projects/`.

---

### 10. 💳 Billing Quota Hyper-Depletion (7 comments | recently closed)
**[BUG / BILLING] Wrongful hyper-depletion of Ultra weekly quota**
[Issue #111685](https://github.com/anthropics/claude-code/issues/111685)

*Recently closed.* A user reported 100% quota consumption in a single day despite minimal usage. Closed — likely resolved or escalated to billing team.

---

## Key PR Progress

### 1. ✅ PowerShell Default Plugin Merged
**Add powershell-default plugin: use PowerShell Preview as default shell (all platforms)**
[PR #35761](https://github.com/anthropics/claude-code/pull/35761)

Provides PowerShell 7+ as the default shell across all platforms via a SessionStart hook. Enables PowerShell syntax highlighting and improved Windows scripting support.

---

### 2. ✅ Chrome Extension Bridge Fix Merged
**Add bridge-fix plugin: fixes Chrome extension bridge connection failure**
[PR #35684](https://github.com/anthropics/claude-code/pull/35684)

Fixes the `tengu_copper_bridge` connection failure for Max subscribers using the Chrome extension. Supersedes an earlier attempt with a cleaner plugin-based approach.

---

### 3. ✅ Terminal Scroll Regression Fixed
**Add scroll-fix plugin: fixes terminal scroll-to-top regression (all platforms)**
[PR #35683](https://github.com/anthropics/claude-code/pull/35683)

Patches a scroll-to-top regression affecting all platforms by intercepting cursor-up events in synchronized output blocks. Includes a manual Ctrl+6 freeze toggle as fallback.

---

### 4. 🚧 Improved Stale Issue Triage
**Don't mark reproducible or high-impact issues as stale**
[PR #112436](https://github.com/anthropics/claude-code/pull/112436)

*Open.* The automated sweep bot will no longer mark or close issues labeled `has repro`, `reproduced`, `data-loss`, or `high-priority` as stale. Improves retention of actionable bug reports.

---

## Feature Request Trends

Analysis of open issues and discussions reveals these dominant feature directions:

| Theme | Representative Issues |
|-------|----------------------|
| **Account Management** | Multi-account switching, profile isolation (#18435) |
| **Unattended / Automation** | Pre-approve apps for computer-use MCP (#86649), scheduled agents support |
| **Privacy Controls** | Disable session surveys (#94710), MCP URL tracking opt-out (#66010) |
| **Platform Consistency** | WSL file linking (#94446), Windows Remote Control persistence (#110759) |
| **Cost Visibility** | Per-model usage breakdown (#110655), proactive usage alerts |
| **Memory & Process Management** | Process cleanup on macOS (#104888, #87891), idle session handling |

---

## Developer Pain Points

**Memory & Resource Management (macOS dominant)**
Multiple interconnected issues point to systemic cleanup failures: fseventsd runaway, daemon worker leaks, and idle session process accumulation. Heavy users report 20–26 GB memory overhead after weeks of normal use.

**File Access Restrictions**
The security model for file operations creates friction: subagents can't write "report" files, the file viewer ignores additional directories, and external file links regressed. Developers working across multiple project directories are particularly impacted.

**Billing Transparency**
Users report unexpected quota depletion with no alerting. The lack of per-model breakdown and real-time usage notifications creates anxiety, especially for international users (Brazilian Real, Euro currency mentions).

**Remote Control Fragility**
Windows users report Remote Control sessions resetting after app restart. Remote Control resume can overwrite local transcript history, causing data loss (#104123).

**Platform-Specific Breakage**
macOS issues dominate the issue tracker, with Windows and Linux users reporting distinct failure modes—suggesting platform-specific testing gaps in CI/CD.

---

*Generated 2026-11-27 | Data source: github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze this GitHub data for the OpenAI Codex repository and generate a structured community digest for 2026-11-27.

Let me organize the data:

**Releases (last 24h):**
- rust-v0.174.0-alpha.8
- rust-v0.174.0-alpha.7

**Issues (top 30 by comment count):**
1. #11023 - Linux desktop app request (207 comments, 953 👍) - CLOSED
2. #62943 - Windows regression after Nov 21 update (39 comments, 20 👍)
3. #53278 - Windows networkAccess=false issue (29 comments, 4 👍)


4. #62918 - Windows Send disabled in new Work chats (25 comments, 8 👍)
5. #37231 - macOS Locked Computer Use issue (19 comments, 5 👍)
6. #62669 - Windows file path breadcrumb flickers (19 comments, 7 👍)
7. #49718 - Windows App stuck on logo splash (15 comments, 2 👍)
8. #61670 - ChatGPT Dot relay issue on Windows (15 comments, 3 👍)
9. #62925 - Windows execution-location selector disappears (14 comments, 4 👍)

Now I'm looking at the rest of the issue list to identify any other critical problems or patterns in the reports.

10. #63577 - Account-specific rate limit on Pro 200 (12 comments, 2 👍)
11. #45061 - Gambling/adult terms in Codex titles (12 comments, 0 👍)
12. #17003 - Dead websocket connections (11 comments, 10 👍)
13. #63466 - GPT-6.2 Astra and Sol behavioral regressions (11 comments, 6 👍)
14. #62195 - GPT-6.2 SOL regression (9 comments, 16 👍)
15. #50264 - Configure recent chats count in IDE extension (9 comments, 1 👍)
16. #63627 - Xcode MCP regression - CLOSED (8 comments, 0 👍)
17. #60133 - gpt-6.1-terra ends turns early (7 comments, 2 👍)
18. #52338 - Windows browser sidebar inaccess (6 comments, 1 👍)
19. #63913 - Windows app hangs on launch (5 comments, 0 👍)
20. #63960 - app-server HTTP 400 errors (5 comments, 1 👍)
21. #58883 - Rate limit back-off issue (5 comments, 0 👍)
22. #55780 - Model selection ignored on Windows (5 comments, 0 👍)
23. #62982 - DNS/HTTPS blocked in Windows (4 comments, 0 👍)
24. #64238 - Safety check blocks tasks (4 comments, 0 👍)
25. #64051 - Inline edit cards missing (4 comments, 0 👍)
26. #30481 - Copy path uses forward slashes on Windows (4 comments, 1 👍)
27. #64046 - Unable to create new Work conversations on macOS (3 comments, 0 👍)
28. #63112 - Windows app freezes on startup (3 comments, 1 👍)
29. #64041 - Chrome URL verification error in Computer Use (2 comments, 0 👍)
30. #64246 - Linux memory exhaustion (2 comments, 0 👍)

Now looking at the pull requests from the last day—there are quite a few recent merges, though most lack comment data. The TUI and terminal UI components seem to be getting regular attention, with fixes around status timers, markdown rendering, sidebar interactions, and search functionality all merged in the past day or two. The PR list continues with more fixes around terminal output and interaction handling—batching writes, smoothing transitions between reasoning steps, preserving row shading across redraws, grouping tool calls properly, and adding PRIMARY selection support for Wayland. Then there are a couple of configuration and monitoring improvements: one for configuring Guardian V3 shadow reviews from the root thread and another adding metrics for Statsig updates. Now I'm moving into the latest discussions section.

Looking at the recent discussions, there's a Q&A about Codex architecture for project ownership across runs, a showcase of Codex Skins for theming the desktop app, an idea about extending VS Code history with pagination, a feature request for automatic task resumption when usage limits reset, another Q&A on recovery and diagnostic steps, a Project Board demo for managing tasks from Codex chats, and what looks like another item that's cut off. I'm seeing the rest of the discussion items now, and I need to organize this into a structured format covering today's highlights, releases, hot issues, key PRs, discussions, feature request trends, and developer pain points. Let me identify the most impactful items—there's a major closed issue about Linux desktop support that got significant traction, a current regression affecting Windows functionality, and several critical bugs that are actively being discussed.

Looking at the recent commits, most are TUI-related fixes that appear to be automated, though there are a couple of substantive changes around MCP startup behavior and sidebar interaction handling. I should also note the recent discussions include architecture questions, a feature request for pagination in VS Code, and a few show-and-tell demos.

The most pressing concern right now is a wave of regressions affecting Windows functionality, especially the November 21st update that's creating widespread issues.

Beyond that, I'm seeing several interconnected problems: the Linux desktop app request has massive community support, and there are ongoing issues with GPT-6.2 model behavior that users find unacceptable. Memory usage on Linux is also becoming problematic, particularly when running heavier workloads.

The recent PRs have been focused on stabilizing the terminal interface—fixing redraw bugs, improving markdown image handling, and refining the file picker functionality.

Looking at what's still ahead, there are clear patterns emerging: platform-specific regressions (especially on Windows), gaps in Linux support, and some fundamental behavioral issues with the newer models that need addressing.
</think>


# OpenAI Codex Community Digest — 2026-11-27

---

## 1. Today's Highlights

The Codex community is grappling with a cluster of Windows regressions introduced by the November 21 update: new Work chats lose execution-location selectors, network connectivity to loopback services breaks, and in some cases the Send button becomes disabled entirely. These issues collectively affect the majority of desktop users on Windows and are driving significant traffic. On the flip side, the team merged **20 pull requests** in the last 24 hours, all targeting TUI (terminal UI) refinements — covering rendering stability, Markdown previews, sidebar behavior, and Wayland support — indicating a concentrated sprint on the CLI/TUI experience.

---

## 2. Releases

Two alpha releases landed for the Rust SDK, representing the latest iteration in the `0.174.0-alpha` series:

| Version | Summary |
|---|---|
| **0.174.0-alpha.8** | Incremental alpha release; no changelog details provided in release notes. |
| **0.174.0-alpha.7** | Incremental alpha release; no changelog details provided in release notes. |

Both are tagged as pre-release. No breaking changes were announced. Developers pinning to Rust SDK versions should remain on the stable track unless actively testing alpha features. ([Releases page](https://github.com/openai/codex/releases))

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|---|---|---|
| **#11023** | **[CLOSED] Codex desktop app for Linux** | Long-standing, highly upvoted request (953 👍) finally closed — likely in response to the growing Linux desktop build discussion. Signals the team is actively pursuing Linux support. | 207 comments; users celebrating, with some noting power-consumption concerns on macOS. |
| **#62943** | **[Windows] Nov 21 regression — missing selectors & max reasoning effort** | The latest Windows update stripped core UI elements from new Work chats: execution-location and permission selectors disappeared, and max reasoning effort is gone. Affects every ChatGPT Work user on Windows. | 39 comments, 20 👍; multiple users confirming the same symptoms. |
| **#53278** | **[Windows] `networkAccess=false` applied despite enabled network** | Sandbox misconfiguration on Windows silently blocks network access even when the user explicitly enables it — a security/permissions confusion that undermines trust. | 29 comments; reports consistent across build versions. |
| **#62918** | **[Windows] Send disabled in new Work chats; connection errors** | New Work conversations cannot send the first message; existing chats work fine. Accompanied by main-process errors on relaunch — a two-symptom regression pointing to a shared init bug. | 25 comments; users report being completely blocked. |
| **#62669** | **[Windows] File path breadcrumb flickers continuously** | A UI polish issue on Windows where the file path breadcrumb re-renders constantly at certain window widths, causing a distracting visual flicker. | 19 comments; reproducible across Windows 10 and 11. |
| **#62195** | **GPT-6.2 SOL: regression in instruction following vs. GPT-6.1** | One of the highest-approval bug reports (16 👍) documenting that GPT-6.2 SOL struggles with straightforward coding tasks, especially via computer use, compared to 6.1 SOL. | 9 comments; users calling it a serious downgrade in reliability. |
| **#63466** | **GPT-6.2 Astra & Sol: behavioral regressions, excessive supervision** | Multiple previously-functional applications broken by persistent behavior issues in the newest models. Affects professional users relying on Codex for production tasks. | 11 comments, 6 👍; escalating concern about model quality. |
| **#45061** | **Gambling/adult terms injected into Codex titles** | Codex auto-generates conversation titles containing unrelated Chinese spam/gambling text — a model contamination issue with potential reputational and safety implications. | 12 comments; no upvotes, but the content is alarming. |
| **#17003** | **Dead WebSocket connections not detected for up to 5 minutes** | CLI users see "Working" status for 5+ minutes after a network change kills the connection, wasting time and creating confusion. Affects all platforms. | 11 comments, 10 👍; cross-platform concern. |
| **#64246** | **[Linux Desktop] Severe memory exhaustion — 22.6 GiB used, OOM kill** | Linux desktop app consumed over 22 GiB RAM and 15.6 GiB swap, triggering systemd-oomd to kill 323 processes. Possible regression of a prior memory leak (#44525). | 2 comments; urgent for Linux users, especially on resource-constrained systems. |

**Notable closed issue:** #63627 (Xcode MCP regression) was closed — the team resolved a server/discover tool-result error that was preventing the Xcode MCP bridge from exposing any tools. ([#11023](https://github.com/openai/codex/issues/11023) · [#62943](https://github.com/openai/codex/issues/62943) · [#53278](https://github.com/openai/codex/issues/53278) · [#62918](https://github.com/openai/codex/issues/62918) · [#62669](https://github.com/openai/codex/issues/62669) · [#62195](https://github.com/openai/codex/issues/62195) · [#63466](https://github.com/openai/codex/issues/63466) · [#45061](https://github.com/openai/codex/issues/45061) · [#17003](https://github.com/openai/codex/issues/17003) · [#64246](https://github.com/openai/codex/issues/64246))

---

## 4. Key PR Progress

The team merged **20 PRs in the last 24 hours**, all from `copyberry[bot]`, focusing on TUI stability and ergonomics:

| PR | Change | Significance |
|---|---|---|
| **#64256** | Keep TUI status timer ticking with animations disabled | Fixes stale elapsed-time display when animations are off. |
| **#64254** | Render local Markdown images inline in TUI replies | Markdown image alt-text now shows actual image previews in supporting terminals — major UX win for documentation workflows. |
| **#64253** | Restore hidden sidebars with the workspace shortcut | `Ctrl+X, s` now correctly restores sidebar content instead of silently failing. |
| **#64236** | Clear stale turn and review state when TUI resumes | Resolves ghost "in-progress" turns and stuck review mode after crashes or reconnects. |
| **#64235** | Fix `fd` search summaries in terminal UI | Depth flags like `-Hd 1` no longer leak into search summaries, making exploration output readable. |
| **#64221** | Keep MCP startup from showing TUI as working | MCP server initialization no longer falsely reports "Working" before a user turn begins. |
| **#64219** | Focus the sidebar chooser when clicking empty space | Improves keyboard navigation continuity after mouse interactions in the sidebar. |
| **#64214** | Fix Unicode highlighting in fuzzy file search | Emoji and combining marks in paths no longer cause off-by-one highlighting errors. |
| **#64211** | Open and highlight file line ranges in the TUI | File references like `src/search.ts:42-44` now open the full range and highlight it, not just the start line. |
| **#64207** | Save and cycle through side chats in TUI scrollback mode | Side chats can now be saved and reopened from parent conversation history. |
| **#64192** | Support PRIMARY selection in Wayland sessions | PRIMARY (middle-click paste) now works on Wayland, removing a long-standing Linux limitation. |
| **#64187** | Configure Guardian V3 shadow reviews from the root thread | Fixes shadow review routing so Guardian V3 settings supplied at the root thread are respected throughout. |
| **#64184** | Add metrics for Statsig updates and evaluations | Better observability into feature-flag evaluation failures, aiding diagnostics. |
| **#64204** | Batch terminal writes when inserting TUI history | Reduces line-buffered flush overhead during history replay, improving scroll performance. |
| **#64202** | Smooth transitions between TUI reasoning headings | Reasoning summaries now update on a 3.5-second cadence instead of streaming chaotically. |
| **#64199** | Fix TUI prompt editing with partially loaded history | Prompts on unloaded transcript pages no longer map to wrong history entries. |
| **#64195** | Preserve TUI row shading across redraws in Apple Terminal | Background colors on shaded rows survive redraws in Apple Terminal. |
| **#64193** | Keep TUI tool calls grouped across hidden reasoning | Tool calls separated only by transcript-only reasoning summaries are now correctly grouped. |
| **#64232** | Consolidate TUI tests and prune snapshots | Internal quality improvement; table-driven tests replace duplicate test cases. |
| **#64230** | Render matching file link labels once in the TUI | Markdown links like `[docs/guide.md](docs/guide.md)` now render once, not twice. |

([PR list](https://github.com/openai/codex/pulls?q=is%3Apr+updated%3A2026-11-26..2026-11-27))

---

## 5. Hot Discussions

### Ideas
- **#61614 — Automatic Task Resumption After Usage Limit Reset** (1 👍): Proposes auto-resuming interrupted tasks when a user's usage quota resets. Addresses a real pain point for long-running engineering tasks that hit rate limits mid-workflow. ([#61614](https://github.com/openai/codex/discussions/61614))
- **#44419 — VS Code Codex history pagination beyond 50 sessions** (2 👍): The VS Code extension only exposes the newest 50 unarchived local sessions, while Codex Desktop shows all. Users want consistent pagination and search. ([#44419](https://github.com/openai/codex/discussions/44419))

### Q&A
- **#62436 — Supported Codex architecture for project ownership across runs** (1 👍): A developer is building a personal coordination system using Codex workers, NATS/JetStream, and durable project records — seeking guidance on supported patterns. ([#62436](https://github.com/openai/codex/discussions/62436))
- **#64176 — Recovery and diagnostic steps for two Codex Desktop failures** (1 👍): User consolidated two bug reports and is seeking official diagnostic workflows rather than filing duplicates. ([#64176](https://github.com/openai/codex/discussions/64176))
- **#64076 — How to verify MXC-or-refusal and effective permissions before `command/exec`** (1 👍): A Windows App Server question about pre-flight permission verification — relevant for enterprise security configurations. ([#64076](https://github.com/openai/codex/discussions/64076))

### Show and Tell
- **#34350 — Codex Skins: one-click wallpaper themes** (2 👍): A community-built theme gallery using CDP injection to recolor the entire Codex window at runtime. Fully reversible, no config leftovers. ([#34350](https://github.com/openai/codex/discussions/34350))
- **#64218 — Project Board: a local Kanban board for Codex tasks** (1 👍): Built to track task suggestions extracted from Codex chat history as Kanban cards, with back-links to the original conversations. ([#64218](https://github.com/openai/codex/discussions/64218))
- **#61667 — A handoff note that reopens after reload** (1 👍): Demonstrates a workspace integration pattern where a handoff note persists and reopens after editing. ([#61667](https://github.com/openai/codex/discussions/61667))
- **#64185 — Codex smoke test for a contact form's saved-lead count** (1 👍): A practical test script pattern for verifying form analytics correctness before Codex modifies the form. ([#64185](https://github.com/openai/codex/discussions/64185))

---

## 6. Feature Request Trends

Aggregating signal from Issues and Discussions, the most-requested feature directions are:

1. **Linux Desktop App** — 953 upvotes on a single issue. The community has clearly reached consensus: Linux desktop support is overdue. The closed status of #11023 suggests the team is actively working on it.
2. **VS Code Extension Parity** — Requests for pagination, search, and full history access in the IDE extension to match Codex Desktop capabilities.
3. **Automatic Task Resumption** — Users want interrupted tasks to resume automatically when rate limits clear, rather than manually re-triggering.
4. **Configurable Sidebar & UI** — Allowing users to set the number of recent chats shown, customize themes, and control sidebar behavior.
5. **Improved Model Behavior Controls** — Users want fine-grained control over which models are used per conversation, and fewer regressions between model versions.

---

## 7. Developer Pain Points

The following frustrations appear repeatedly across the issue tracker:

| Pain Point | Evidence |
|---|---|
| **Windows update regressions** | #62943, #62918, #53278, #62925, #63913, #63112 — the Nov 21 update broke fundamental Windows desktop functionality across multiple dimensions (connectivity, UI selectors, startup, Send). |
| **Model quality regressions in GPT-6.2** | #62195 (16 👍), #63466, #60133 — multiple reports that GPT-6.2 SOL/Astra perform worse than 6.1 on instruction following, task completion, and turn-ending behavior. |
| **Linux platform neglect** | #11023, #64246 — Linux users face both missing features (no native desktop app) and severe regressions (22+ GiB memory exhaustion). |
| **Rate limit UX** | #63577, #58883 — rate limits cause silent multi-minute back-offs, and the TUI hides the first WebSocket retry, making debugging difficult. |
| **Sandbox & permission inconsistencies on Windows** | #53278, #49718, #62982 — Windows sandbox configuration produces inconsistent results: `networkAccess=false` applied incorrectly, DNS/HTTPS blocked in managed workspaces, and startup hangs tied to permission profile enforcement. |
| **WebSocket resilience** | #17003 — dead connections go undetected for up to 5 minutes, wasting developer time. |
| **Memory management** | #64246 — Linux memory exhaustion to OOM conditions; likely related to prior leak #44525. |
| **Model contamination** | #45061 — unrelated gambling/spam text injected into auto-generated conversation titles is a content-safety concern. |

---

*Digest generated from GitHub data for openai/codex on 2026-11-27. All linked items include their original GitHub URLs for further reading.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Gemini CLI community digest for 2026-11-27 based on the provided GitHub data. Let me analyze the data and create a structured digest following the specified format.

Let me first organize what I have:

**Latest Releases (last 24h):** None

**Latest Issues (30 items shown):** A mix of bugs and enhancements related to:
- Agent behavior (subagent recovery, generalist agent hangs, browser agent issues)
- Tool limitations and improvements
- UX improvements
- Performance issues

**Latest PRs (20 items):** Various fixes and features including:
- Hook system improvements
- CLI fixes
- Core tool fixes
- Documentation fixes
- ACP (Agent Communication Protocol) improvements

Now let me structure the digest:

1. **Today's Highlights** - Summarize the most important updates
2. **Releases** - None, so I'll note this
3. **Hot Issues** - Pick 10 noteworthy issues
4. **Key PR Progress** - Pick 10 important PRs
5. **Hot Discussions** - No discussion data provided, so I'll omit this section
6. **Feature Request Trends** - Analyze patterns
7. **Developer Pain Points** - Summarize recurring issues

Let me identify the most noteworthy items:

**Issues to highlight:**
1. #22323 - Subagent recovery after MAX_TURNS (14 comments) - Critical bug
2. #19873 - Zero-Dependency OS Sandboxing (9 comments) - Major enhancement
3. #21409 - Generalist agent hangs (8 comments) - P1 bug
4. #22745 - AST-aware file reads investigation (7 comments) - Epic tracking
5. #21968 - Gemini doesn't use skills/subagents enough (7 comments) - UX issue
6. #22267 - Browser Agent ignores settings.json (5 comments) - Bug


7. #22232 - Browser Agent resilience improvements (5 comments) - Feature request
8. #21983 - Browser subagent fails in wayland (4 comments) - P1 bug
9. #24246 - 400 error with > 128 tools (3 comments) - Bug
10. #22186 - get-shit-done output hook crash (3 comments) - P1 bug

**PRs to highlight:**
1. #30491 - Hook system: include tool_call_id
2. #30490 - Fix custom model displayName in Footer
3. #30489 - Normalize CRLF line endings in write_file diffs
4. #30375 - Fix documentation links and improve discoverability
5. #30372 - Resolve dead anchor references
6. #30368 - Add session close functionality
7. #30487 - ACP rejection handling
8. #30212 - Per-tool-call timeout configuration
9. #30109 - Cap grep_search output size
10. #30415 - Add timeout to web search

No discussions to reference in the dataset.
</think>


# Gemini CLI Community Digest

**Date:** 2026-11-27  
**Repository:** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. Today's Highlights

The community is actively addressing critical agent stability issues—multiple P1 bugs related to subagent hangs and crashes have surfaced, while new PRs introduce much-needed quality-of-life improvements including configurable per-tool timeouts and improved hook system capabilities. The ACP (Agent Communication Protocol) layer is receiving significant attention with fixes for session management and token tracking.

---

## 2. Releases

**No new releases in the last 24 hours.** The last activity includes automated nightly version bumps from September 2026 (#29300, #29291), which have been marked as stale.

---

## 3. Hot Issues

### 🔴 Critical Priority Issues

| # | Issue | Priority | Comments | Summary |
|---|-------|----------|----------|---------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 | 14 | **Subagent reports GOAL success despite hitting MAX_TURNS** — The `codebase_investigator` subagent incorrectly reports success status when it hits maximum turn limits without completing analysis. This masks task failures and confuses users about actual completion status. |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 | 8 | **Generalist agent hangs indefinitely** — When Gemini CLI defers to the generalist agent, it hangs forever even for simple operations like folder creation. Users report waiting over an hour before cancelling. Workaround: instructing the model not to use subagents. |
| 3 | [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | P1 | 3 | **get-shit-done output hook causes crash** — Repeated crashes occur when the "get-shit-done" output hook is nearly finished printing user summaries, destabilizing the CLI. |
| 4 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | P1 | 4 | **Browser subagent fails on Wayland** — The browser agent fails on Wayland environments, limiting cross-platform compatibility. |

### 🟡 Enhancement & Bug Issues

| # | Issue | Priority | Comments | Summary |
|---|-------|----------|----------|---------|
| 5 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | P2 | 9 | **Zero-Dependency OS Sandboxing via model's bash affinity** — Proposes leveraging native bash capabilities for security without dependencies, allowing the model to chain POSIX tools (`grep`, `cat`, `sed`, `awk`) for more efficient codebase exploration. |
| 6 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | P2 | 7 | **AST-aware file reads, search, and mapping (Epic)** — Tracks investigation into whether AST-aware tools can reduce tool call counts and token usage by precisely reading method bounds and navigating code structure. |
| 7 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | P2 | 7 | **Gemini does not use skills and sub-agents enough** — Users report that custom skills (e.g., "gradle", "git") are ignored unless explicitly instructed, limiting automation potential. |
| 8 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | P2 | 5 | **Browser Agent ignores settings.json overrides** — The browser agent doesn't respect `settings.json` configuration (e.g., `maxTurns`), causing inconsistent behavior across agents. |
| 9 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | P2 | 3 | **400 error with > 128 tools** — Encountered a 400 error when more than ~400 tools are available. Users expect smarter tool scoping. |
| 10 | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | P2 | 3 | **Agent should discourage destructive behavior** — The model sometimes uses risky commands like `git reset --force` when safer alternatives exist, and lacks awareness of database modification dangers. |

---

## 4. Key PR Progress

### New PRs (Last 24h)

| # | Author | Size | Area | Summary |
|---|--------|------|------|---------|
| 1 | [ayam04](https://github.com/ayam04) | S | Agent | **feat(hooks): include tool_call_id in BeforeTool and AfterTool** — Adds `tool_call_id` to hook inputs, enabling hooks to correlate before/after events by ID instead of relying on arrival order. Fixes #29975. ([PR #30491](https://github.com/google-gemini/gemini-cli/pull/30491)) |
| 2 | [bitwizard25](https://github.com/bitwizard25) | S | CLI | **fix: pass config to getDisplayString for custom model displayName** — Resolves custom model definitions not displaying correctly in the footer by passing the config object. ([PR #30490](https://github.com/google-gemini/gemini-cli/pull/30490)) |
| 3 | [bitwizard25](https://github.com/bitwizard25) | M | Core | **fix: normalize CRLF line endings in write_file diffs** — Normalizes `\r\n` to `\n` before computing diffs while preserving raw content for line ending detection. Fixes #30480. ([PR #30489](https://github.com/google-gemini/gemini-cli/pull/30489)) |

### Active PRs (Under Review)

| # | Author | Size | Priority | Area | Summary |
|---|--------|------|----------|------|---------|
| 4 | [harshpujari](https://github.com/harshpujari) | L | P3 | Core | **feat: add configurable per-tool-call timeout (`tools.callTimeout`)** — Introduces a `tools.callTimeout` setting (seconds) that caps wall-clock duration of single tool calls, enabling recoverable `TOOL_CALL_TIMEOUT` errors so the model can adapt. ([PR #30212](https://github.com/google-gemini/gemini-cli/pull/30212)) |
| 5 | [paolo-perrone](https://github.com/paolo-perrone) | L | P2 | Core | **fix: cap grep_search output size and prompt model to narrow searches** — Addresses excessive token usage from broad searches by implementing match caps and instructing the model to refine queries. ([PR #30109](https://github.com/google-gemini/gemini-cli/pull/30109)) |
| 6 | [sanvisasanapuri](https://github.com/sanvisasanapuri) | L | P1 | Core | **fix: add time limit to web search and stop retries on abort** — Resolves hang issues by adding a time limit to `google_web_search` tool requests. Addresses #29594. ([PR #30415](https://github.com/google-gemini/gemini-cli/pull/30415)) |
| 7 | [ArnabOPP](https://github.com/ArnabOPP) | M | — | ACP | **fix: handle rejection when sending approval-mode update** — Prevents unhandled promise rejections that could terminate the process when ACP connection closes. ([PR #30487](https://github.com/google-gemini/gemini-cli/pull/30487)) |
| 8 | [sayaklearner-prog](https://github.com/sayaklearner-prog) | L | — | ACP | **fix: standardize token usage tracking and quota metadata** — Resolves token tracking discrepancies (#24280, #27985) by preserving `PromptResponse.usage` on cancelled turns. ([PR #30353](https://github.com/google-gemini/gemini-cli/pull/30353)) |
| 9 | [bitwizard25](https://github.com/bitwizard25) | M | — | Core | **fix: exclude evicted binary payloads from exempt retrieval byte budget** — Prevents a single large image `read_file` from consuming excessive budget by using retained byte size instead of calculated history size. Fixes #30446. ([PR #30473](https://github.com/google-gemini/gemini-cli/pull/30473)) |
| 10 | [phon-t](https://github.com/phon-t) | S | P2 | Extensions | **feat: add gemini-2.5-flash-image model config** — Adds new model alias with `responseModalities: ['TEXT', 'IMAGE']` for image generation support. ([PR #30470](https://github.com/google-gemini/gemini-cli/pull/30470)) |

---

## 5. Hot Discussions

*No discussion data was provided in the source data.*

---

## 6. Feature Request Trends

Analysis of 50+ issues reveals these dominant feature directions:

| Theme | Frequency | Key Issues |
|-------|-----------|------------|
| **Agent Reliability & Recovery** | High | Subagent hangs (#21409), MAX_TURNS handling (#22323), crash prevention (#22186) |
| **AST-Aware Tooling** | Growing | Epic tracking (#22745, #22746, #22747) for surgical code discovery and reduced token usage |
| **Subagent Orchestration** | High | Skill/subagent invocation (#21968), parallel collaboration (#18287), background execution (#22741) |
| **Tool Scoping & Limits** | High | Grep output capping (#30109), >128 tool limits (#24246), per-tool timeouts (#30212) |
| **Browser Agent Improvements** | Moderate | Settings.json overrides (#22267), Wayland support (#21983), session resilience (#22232) |
| **Security & Sandboxing** | Moderate | OS sandboxing via bash affinity (#19873), destructive behavior warnings (#22672), YOLO mode respect (#30268) |
| **Context Management** | Moderate | Token-frugal reads (#19561), persistent task tracking (#18836), folder truncation markers (#30419) |

---

## 7. Developer Pain Points

Based on issue volume and comment engagement, developers are most frustrated by:

1. **Agent Hangs & Infinite Loops** — Generalist agent and browser subagent can hang indefinitely with no timeout, forcing manual cancellation and lost work.

2. **Inconsistent Configuration Behavior** — Settings.json overrides are ignored by some agents (especially browser agent), creating unpredictable behavior across different tools.

3. **Excessive Token Usage** — Large file reads "firehose" context, and broad searches can return 150K+ characters, leading to token bloat and degraded performance.

4. **Missing Subagent Context in Bug Reports** — `/bug` command output doesn't include subagent state, making debugging multi-agent sessions difficult (#21763).

5. **Destructive Operations Without Warnings** — The agent sometimes executes risky git operations or database modifications without appropriate safeguards or user confirmation.

6. **Cross-Platform Browser Issues** — Wayland users cannot use the browser subagent, limiting functionality on Linux distributions.

7. **Manual Intervention for Skills** — Developers must explicitly instruct the model to use available skills rather than having the agent discover and apply them contextually.

---

*Digest generated from GitHub data. For real-time updates, visit [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest for 2026-11-27 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Looking at the data:
1. **Releases**: 3 releases in the last 24h (v1.0.117-5, v1.0.117-4, v1.0.117-3)
2. **Issues**: 34 total issues, showing top 30 by comment count
3. **Pull Requests**: 0 PRs in the last 24h
4. **No Discussion data provided**

Let me organize this into the requested format:

1. **Today's Highlights**
2. **Releases** - There are 3 releases
3. **Hot Issues** - Pick 10 noteworthy issues
4. **Key PR Progress** - 0 PRs, so this section will be brief
5. **Hot Discussions** - No data, omit section
6. **Feature Request Trends**
7. **Developer Pain Points**

Let me carefully select the most noteworthy issues based on:
- Comment count
- Thumbs up reactions
- Whether they're open or closed
- Relevance to users
- Severity of the issue

Top issues by comment count:
1. #5323 - 8 comments, 7 👍 - Agent checkpoint refs feature request
2. #5283 - 4 comments, 9 👍 - Remote environment hosting blocked
3. #3563 - 4 comments - Tool approvals lost in parallel sessions (CLOSED)
4. #5464 - 3 comments - Stdio MCP server connection issue (CLOSED)
5. #5047 - 2 comments - Expose assisted approval in ACP mode (CLOSED)
6. #5257 - 1 comment - Permission prompt truncates URLs (CLOSED)
7. #5005 - 1 comment - OTel metrics issue (CLOSED)


8. #5580 - 1 comment - Windows sandbox TCP connection blocked
9. #5577 - 1 comment - Remote CLI session switch hangs
10. #5571 - 1 comment - Updater fails with GHE.com-only login

I'll focus on selecting 10 issues that represent the most critical technical challenges. The most significant problems involve network configuration, session management, and authentication issues across different platforms. These range from Windows-specific TCP blocking to remote environment hosting challenges, highlighting complex integration and compatibility problems.

The selected issues demonstrate deep technical complexity, addressing platform-specific limitations, session handling, and authentication mechanisms that could impact user workflow and system reliability.

Emerging patterns suggest consistent themes around network permissions, session state management, and cross-platform compatibility. Developers are experiencing friction points in configuration, MCP integration, and tool interaction, indicating a need for more robust, flexible system design.

Key focus areas include improving sandbox permissions, enhancing notification systems, and creating more resilient connection handling mechanisms that can gracefully manage network interruptions and system state changes.
</think>


# GitHub Copilot CLI Community Digest

**Date:** 2026-11-27
**Repository:** github.com/github/copilot-cli

---

## Today's Highlights

The Copilot CLI team shipped three incremental releases (v1.0.117-3/4/5) addressing permission handling, terminal UI, and sandbox TLS proxy support. Community activity remains high with 34 issues updated in the last 24 hours, including a significant feature request for disabling agent checkpoint refs and several critical bugs affecting Windows sandboxing, session management, and MCP server connectivity.

---

## Releases

### v1.0.117-5 (2026-11-27)
**Added**
- New `sandbox.userPolicy.network.extraCaCertificates` setting (user or managed) enables trust of custom CA certificates for sandboxed commands through TLS-intercepting proxies, improving enterprise proxy compatibility.

### v1.0.117-4 (2026-11-27)
**Fixed**
- Resolved Page Down stalling issue at pinned prompts in 10-row terminals when tabs are enabled.

### v1.0.117-3 (2026-11-26)
**Improved**
- Assisted Permissions now avoids unnecessary confirmation prompts when Copilot stops a process it started in the same session by process ID.

**Fixed**
- Approving an MCP server's tools for the session or location no longer also approves Copilot's built-in requests (e.g., shell commands).

---

## Hot Issues

### 1. Feature Request: Disable Agent Checkpoint Refs [#5323](https://github.com/github/copilot-cli/issues/5323)
**Status:** OPEN | 8 comments | 👍 7

Every agent turn creates commits under `refs/agents/<session-id>/checkpoints/turn/N` using the user's git identity, cluttering ref listings and potentially exposing session metadata. Users request a configuration setting to disable checkpoint refs entirely. This impacts repositories with strict git hygiene requirements.

---

### 2. Remote Environment Hosting Blocked on Copilot Free [#5283](https://github.com/github/copilot-cli/issues/5283)
**Status:** OPEN | 4 comments | 👍 9

Personal GitHub accounts with Copilot Free cannot enable Copilot CLI remote access despite local settings showing enabled. The `host.start` request fails for environment hosting, affecting developers who need multi-machine workflows without organizational accounts.

---

### 3. Tool Approvals Silently Lost in Parallel Sessions [#3563](https://github.com/github/copilot-cli/issues/3563)
**Status:** CLOSED | 4 comments

When multiple `copilot` CLI sessions run simultaneously and each persists tool approvals ("Always allow"), one session's approval can silently overwrite the other's in `~/.copilot/permissions-config.json`. This race condition causes unpredictable permission loss.

---

### 4. Stdio MCP Server Connection Timeout Bug [#5464](https://github.com/github/copilot-cli/issues/5464)
**Status:** CLOSED | 3 comments

When a stdio MCP server takes longer than ~10s to start, Copilot CLI sends a legacy `initialize` on the same connection after giving up on `server/discover`, causing the MCP Python SDK to reject it with error -32022. This breaks reliable MCP server initialization.

---

### 5. Expose Assisted Approval in ACP Mode [#5047](https://github.com/github/copilot-cli/issues/5047)
**Status:** CLOSED | 2 comments

ACP clients (like T3 Code) request access to Copilot's built-in assisted approval safety judge to automatically approve low-risk actions while requesting human approval for others. This would standardize permission handling across third-party integrations.

---

### 6. Windows Sandbox Blocks TCP Despite Allowlist [#5580](https://github.com/github/copilot-cli/issues/5583)
**Status:** OPEN | 1 comment

Copilot CLI 1.0.109 on Windows blocks direct TCP connections to internal servers (e.g., Nexus) even when hostname and IP are in the allowlist, failing with `SocketErrorCode: AccessDenied` (Windows error 10013). This prevents access to common enterprise infrastructure.

---

### 7. Remote CLI Session Switch Hangs with Memory Leak [#5577](https://github.com/github/copilot-cli/issues/5577)
**Status:** OPEN | 1 comment

Switching from local CLI to a Copilot CLI session on another machine fails to yield a responsive session. Users observe continued memory growth until the local machine becomes unusable, suggesting resource management issues in remote session handoff.

---

### 8. GHE.com-Only Login Updater Failure [#5571](https://github.com/github/copilot-cli/issues/5571)
**Status:** OPEN | 1 comment

On Windows with GitHub Enterprise Cloud on `*.ghe.com`, the auto-updater fails with "GitHub credential owner did not provide a token." Affects users on Copilot CLI 1.0.115-4/7/8, requiring manual workaround.

---

### 9. Git Submodule Update Blocked in Sandbox [#5593](https://github.com/github/copilot-cli/issues/5593)
**Status:** OPEN | 0 comments

With local sandboxing enabled, `git submodule update` fails even when submodules are already at their recorded commit (no-op). This breaks CI/CD workflows and build scripts that call submodule commands, a regression from v1.0.99-2.

---

### 10. Windows Credential Manager Flooding [#5591](https://github.com/github/copilot-cli/issues/5591)
**Status:** OPEN | 0 comments

Copilot CLI accumulates hundreds of `copilot-mcp-oauth` and `copilot-keychain-chunk` entries in Windows Credential Manager without cleanup, eventually preventing all applications from writing credentials (error 8). This blocks tools like `az devops login` and `cmdkey`.

---

## Key PR Progress

**No Pull Requests merged or opened in the last 24 hours.**

The team focused on incremental patch releases rather than larger feature PRs during this period.

---

## Feature Request Trends

Analysis of open issues reveals several dominant feature directions:

1. **Permission & Security Granularity**
   - Disable agent checkpoint refs ([#5323](https://github.com/github/copilot-cli/issues/5323))
   - Expose assisted approval to ACP ([#5047](https://github.com/github/copilot-cli/issues/5047))
   - Session-scoped prompt history ([#5576](https://github.com/github/copilot-cli/issues/5576))

2. **Enterprise & Proxy Compatibility**
   - Custom CA certificate trust ([shipped in v1.0.117-5](https://github.com/github/copilot-cli/releases))
   - UNC path handling on Windows ([#5586](https://github.com/github/copilot-cli/issues/5586))
   - BYOK provider OTel file exports ([#5583](https://github.com/github/copilot-cli/issues/5583))

3. **Model Routing & Fusion**
   - Local OpenAI-compatible server routing ([#5581](https://github.com/github/copilot-cli/issues/5581))
   - Org-level agent model selection ([#5585](https://github.com/github/copilot-cli/issues/5585))
   - ACP quota reading ([#5587](https://github.com/github/copilot-cli/issues/5587))

4. **Plugin & MCP Ecosystem**
   - MCP server case-insensitive matching ([#5050](https://github.com/github/copilot-cli/issues/5050))
   - Plugin marketplace error handling ([#5582](https://github.com/github/copilot-cli/issues/5582))
   - Skill slash command argument parsing ([#5578](https://github.com/github/copilot-cli/issues/5578))

5. **Observability & Telemetry**
   - Instance ID in OTel metrics ([#5005](https://github.com/github/copilot-cli/issues/5005))
   - Notification disposition tracking ([#5596](https://github.com/github/copilot-cli/issues/5596))
   - Exit telemetry disposition ([#5597](https://github.com/github/copilot-cli/issues/5597))

---

## Developer Pain Points

The following issues represent recurring developer frustrations based on frequency and engagement:

### 1. Sandbox Restrictions Blocking Legitimate Workflows
Multiple reports of sandbox policies blocking common operations:
- `git submodule update` ([#5593](https://github.com/github/copilot-cli/issues/5593))
- TCP connections with proper allowlists ([#5580](https://github.com/github/copilot-cli/issues/5580))
- Cypress component tests on macOS ([#5588](https://github.com/github/copilot-cli/issues/5588))

### 2. MCP Server Reliability
- Connection timeouts and fallback failures ([#5464](https://github.com/github/copilot-cli/issues/5464))
- Case-sensitive server name matching ([#5050](https://github.com/github/copilot-cli/issues/5050))

### 3. Configuration Hot-Reload Missing
Settings and hooks changes require full CLI restart with no notification:
- Hook scripts never fire for running sessions ([#5595](https://github.com/github/copilot-cli/issues/5595))
- AHP connection refresh retries indefinitely ([#5594](https://github.com/github/copilot-cli/issues/5594))

### 4. Permission State Management
- Parallel session approval conflicts ([#3563](https://github.com/github/copilot-cli/issues/3563))
- Permission prompts truncating URLs with shell variables ([#5257](https://github.com/github/copilot-cli/issues/5257))
- Windows Credential Manager exhaustion ([#5591](https://github.com/github/copilot-cli/issues/5591))

### 5. Remote Session Stability
- Session switch hangs with memory leaks ([#5577](https://github.com/github/copilot-cli/issues/5577))
- Large session handling crashes ([#5592](https://github.com/github/copilot-cli/issues/5592))
- Gemini 4 Neon tool call size limits ([#5590](https://github.com/github/copilot-cli/issues/5590))

### 6. Enterprise Authentication Gaps
- GHE.com-only updater failures ([#5571](https://github.com/github/copilot-cli/issues/5571))
- BYOK without GitHub sign-in OTel issues ([#5583](https://github.com/github/copilot-cli/issues/5583))
- Remote hosting blocked on personal accounts ([#5283](https://github.com/github/copilot-cli/issues/5283))

---

*Digest generated from GitHub Copilot CLI community data. For more details, visit [github.com/github/copilot-cli](https://github.com/github/copilot-cli).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze this GitHub data and create a structured digest for the OpenCode community on 2026-11-27.

Key observations:
1. No new releases in the last 24h
2. 50 issues total, showing top 30 by comment count
3. 50 PRs total, showing top 20 by comment count
4. No discussion data provided

Let me pick the most important items to highlight:

**Hot Issues (10 noteworthy):**
1. #59387 - Free tier issues mega-thread (413 comments!) - Major UX problem affecting free users
2. #64073 - Feature request for Restore Foreground Subagent Execution (38 comments) - Core feature request
3. #56285 - Desktop scroll bug (12 comments) - UX issue
4. #30611 - Sessions fail on transient network errors (12 comments) - Reliability issue
5. #65932 - CLI MCP server registration bug (11 comments) - CLI reliability
6. #58080 - macOS Local Network Privacy issue (9 comments) - Platform-specific issue
7. #56862 - Subagents failing with context compaction (8 comments) - Core functionality
8. #56298 - Second ChatGPT account fails (6 comments) - Authentication issue
9. #52700 - Chat tool call missing id/name (6 comments) - API integration
10. #53514 - Feature request for plugins to call MCP tools (5 comments) - Extensibility

**Key PR Progress (10 important):**
1. #66648 - Keep prompt cache when switching effort on Copilot GPT
2. #66717 - Read effort and system update flags from models.dev
3. #66369 - Keep previous plugin set when hot reload fails
4. #66715 - Scope Promise tool permission checks to each call (fixes #66698)


5. #65860 - Truncate replayed names of undeclared tool calls
6. #62756 - Keep MCP tools through dropped connections
7. #62511 - Use resolved branch bases in desktop review
8. #60041 - Trust private-network server certificates on first use
9. #60039 - Support per-server TLS trust for remote MCP servers
10. #64945 - Register new ChatGPT client when adding account

I'll distill the key trends from these PRs, focusing on core reliability, security, and user experience improvements. The PRs address critical infrastructure concerns like connection resilience, security certificates, and account management. These changes suggest a strategic approach to enhancing platform stability and expanding cross-platform compatibility.
</think>


# OpenCode Community Digest — 2026-11-27

## 1. Today's Highlights

The community is grappling with a surge in **free tier usage issues**—a mega-thread (#59387) has accumulated 413 comments, signaling widespread user frustration. On the positive side, significant progress is underway on **MCP reliability**: multiple PRs target connection resilience, TLS trust, and tool persistence across dropped connections. A notable CLI bug (#65932) affecting ~10% of standalone sessions is also drawing attention, as it silently breaks MCP tool availability.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Title | Author | Comments | Why It Matters |
|---|-------|--------|----------|----------------|
| [#59387](https://github.com/anomalyco/opencode/issues/59387) | Free tier issues: read this first | neriousy | 413 | **Highest-traffic issue.** Free users report "usage exceeded" errors that never reset, suggesting a backend quota or clock issue. Community is pooling repro steps. |
| [#64073](https://github.com/anomalyco/opencode/issues/64073) | [FEATURE] Restore Foreground Subagent Execution | wangzheruoyun | 38 | Major UX request for v2: bring back the ability to run subagents in the foreground with direct feedback, not just background tabs. |
| [#30611](https://github.com/anomalyco/opencode/issues/30611) | Sessions fail on transient network errors instead of retrying | literally-dan | 12 | The retry path only handles `ECONNRESET`; other transient failures (timeout, `ECONNREFUSED`) kill sessions outright. Closed with proposed fix. |
| [#65932](https://github.com/anomalyco/opencode/issues/65932) | CLI `opencode run --standalone` intermittently registers no MCP servers (~10% of sessions) | willturner-maker | 11 | Silent failure: MCP tools are unavailable for the *entire* session with no error message. Affects CI/scripted usage. |
| [#56285](https://github.com/anomalyco/opencode/issues/56285) | Desktop: fast scroll up snaps back down, history loads one chunk at a time | Railander | 12 | Usability bug in long desktop sessions prevents browsing chat history fluidly. |
| [#58080](https://github.com/anomalyco/opencode/issues/58080) | macOS Local Network Privacy blocks background service from LAN hosts | belgaied2 | 9 | On macOS 15+, OpenCode cannot reach LAN MCP servers (`192.168.x.x`, `10.x.x.x`) due to new privacy enforcement. Needs signed .app bundle fix. |
| [#56862](https://github.com/anomalyco/opencode/issues/56862) | Subagents kept failing with context compaction despite known limit | PiRomant | 8 | Context compaction triggers unexpectedly when reading large files, even within the stated limit. |
| [#56298](https://github.com/anomalyco/opencode/issues/56298) | Adding a second ChatGPT account fails with workspace scope denied | KomeijiReimu | 6 | Multi-account users are locked out; PR #64945 is in review to fix client registration per account. |
| [#53514](https://github.com/anomalyco/opencode/issues/53514) | [FEATURE] Let plugins call tools and read resources on engine's MCP connections | Skeptomenos | 5 | Extensibility request: plugins want to reuse existing MCP connections instead of spawning their own. |
| [#66596](https://github.com/anomalyco/opencode/issues/66596) | [FEATURE] Sort skills alphabetically in `/skills`, autocomplete, and API | mathworld | 4 | With many plugin-provided skills, unsorted lists are hard to navigate. Simple but high-impact QOL fix. |

---

## 4. Key PR Progress

| # | Title | Author | Status | Summary |
|---|-------|--------|--------|---------|
| [#66648](https://github.com/anomalyco/opencode/pull/66648) | fix(ai): keep the prompt cache when switching effort on Copilot GPT | rekram1-node | OPEN | Prevents cache invalidation when changing reasoning effort mid-session on Copilot GPT models. |
| [#66717](https://github.com/anomalyco/opencode/pull/66717) | fix(core): read effort and system update flags from models.dev | rekram1-node | OPEN | Companion fix: `models.dev` now records per-API whether a model accepts effort changes. |
| [#66369](https://github.com/anomalyco/opencode/pull/66369) | fix(plugin): keep previous plugin set when hot reload fails | four1er | OPEN | Hot reload failure no longer wipes the working plugin set; providers/models remain available. |
| [#66715](https://github.com/anomalyco/opencode/pull/66715) | fix(plugin): scope Promise tool permission checks to each call | akasakariko | OPEN | Fixes #66698: Promise tools no longer open interactive prompts in unattended runs. |
| [#62756](https://github.com/anomalyco/opencode/pull/62756) | feat(core): keep MCP tools through dropped connections and reconnect on demand | rekram1-node | OPEN | MCP tools persist across connection drops; model sees "new" only once per server, not every reconnect. |
| [#60041](https://github.com/anomalyco/opencode/pull/60041) | feat(mcp): trust private-network server certificates on first use | karup | OPEN | First-use flow for self-signed certs on private MCP servers (stacked on #60039). |
| [#60039](https://github.com/anomalyco/opencode/pull/60039) | feat(mcp): support per-server TLS trust for remote MCP servers | karup | OPEN | Adds `tls` config block per MCP server for self-signed/private-CA certificates. |
| [#64945](https://github.com/anomalyco/opencode/pull/64945) | fix(core): register a new ChatGPT client when adding an account | rekram1-node | OPEN | Closes #56298: each ChatGPT account now gets its own client/workspace binding. |
| [#66678](https://github.com/anomalyco/opencode/pull/66678) | fix(core): back off repeated SharedCache failures and honor Retry-After | hearnadam | OPEN | Reduces load during PlanetScale stalls by respecting `Retry-After` headers. |
| [#65700](https://github.com/anomalyco/opencode/pull/65700) | fix(ai): zstd-compress ChatGPT sign-in requests again | rekram1-node | OPEN | Restores zstd compression for ChatGPT OAuth requests, moving logic into the AI package. |

---

## 5. Hot Discussions

*No discussion data provided for this period.*

---

## 6. Feature Request Trends

Analysis of recent issues and PRs reveals these recurring themes:

| Theme | Representative Issues | Trend |
|-------|----------------------|-------|
| **MCP Reliability & Connectivity** | #62756, #60041, #60039, #58080 | High demand for robust MCP server handling—reconnection, TLS trust, and private network access. |
| **Multi-Account & Auth** | #56298, #64945 | Users want seamless multi-ChatGPT-account support; current behavior breaks on the second account. |
| **Agent Execution Control** | #64073, #58858 | Requests for foreground subagent execution and computer-awake modes during agent work. |
| **Plugin Extensibility** | #53514, #66702, #66689 | Community wants plugins to call MCP tools and to have server-side enable/disable controls. |
| **Desktop UX** | #56285, #66601, #59597 | Slow TUI startup (14.6s cold), scroll bugs, and per-commit review are friction points. |
| **CLI / Scripting Reliability** | #65932, #66699 | Silent failures in CI environments (missing MCP tools, empty stderr) hinder automation. |
| **Skills Organization** | #66596, #66706 | Alphabetical sorting and proper handling of MCP server instructions in skill listings. |

---

## 7. Developer Pain Points

1. **Free Tier Unreliability (#59387)** — Users hitting "usage exceeded" with no reset, blocking core workflows. Community needs a clear resolution path.

2. **MCP Server Discovery Failures (#65932)** — ~10% of CLI sessions start with no MCP tools available, silently breaking automation pipelines.

3. **Unattended Run Permission Prompts (#66698)** — Promise-style plugin tools trigger interactive prompts in automated runs, causing timeouts and failures.

4. **macOS Private Network Access (#58080)** — OpenCode cannot reach LAN MCP servers on macOS 15+ due to new sandbox restrictions; only a signed .app bundle will resolve this.

5. **TUI Cold Start Latency (#59597)** — First draw takes 14.6 seconds in large repos; devs are blocked from quick interactions.

6. **Multi-Account ChatGPT (#56298)** — Adding a second ChatGPT account fails, limiting adoption for users with multiple workspaces.

7. **Silent Retry Loops (#62319)** — Stalled upstream providers cause indefinite hangs with no user-facing error or log entry.

8. **Ollama Output Cap Ignored (#66249)** — `max_completion_tokens` is sent but Ollama ignores it, leading to unbounded output in local setups.

---

*End of digest. Data sourced from github.com/anomalyco/opencode at 2026-11-27.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Pi community digest for 2026-11-27 based on GitHub data from the `earendil-works/pi` repository. Let me analyze the data and create a structured digest with the requested sections.

Let me organize the data:

**Latest Releases (last 24h):** None

**Latest Issues (30 shown, total 50):**
- #8810 [OPEN] - Bug: Extension-registered providers ignoring defaultProvider/defaultModel (12 comments, 5 👍)
- #12548 [CLOSED] - Kitty images lost and scrollback wiped (6 comments)
- #12546 [CLOSED] - AgentSession.dispose() retains closures preventing GC (4 comments)
- #12564 [CLOSED] - Windows: pi dies mid-run leaves Kitty keyboard on (3 comments)
- #12550 [CLOSED] - Project-local skill exclusion writes both path and minus entry (3 comments)
- #8393 [CLOSED] - feat: Add ModelScope as built-in provider (2 comments)
- #12418 [CLOSED] - Preserve GitHub Copilot reasoning_opaque in replay (2 comments, 2 👍)
- #12600 [CLOSED] - Expose public MCP extension hooks (2 comments)
- #12594 [CLOSED] - pi-durable: codemode drops truncation notice (2 comments)
- #12565 [CLOSED] - Option to keep pre-compaction messages visible (2 comments)
- #12560 [CLOSED] - Built-in footer flashes during /new (2 comments)
- #12527 [CLOSED] - Serialize local file mutations across hard links (2 comments)
- #12526 [CLOSED] - Throwing tool progress subscriber can settle run (2 comments)
- #12521 [CLOSED] - Contributor approval request (2 comments)


- #12515 [CLOSED] - Standalone Bun binary issues (2 comments)
- #12512 [OPEN] - Allow pausing new task dispatch while draining (2 comments)
- #12509 [CLOSED] - openai-responses: Kimi streaming splits function calls (2 comments)
- #12506 [CLOSED] - Transcript sidecars: tool-result payload elision (2 comments)
- #12605 [CLOSED] - Retry classifier misses upstream SSE stream error (1 comment)
- #12510 [OPEN] - codemode: parse errors lack source excerpt (1 comment)
- #12599 [CLOSED] - Dangling extension symlink (1 comment)
- #12598 [CLOSED] - Boundary compaction drafts persisted without events (1 comment)
- #12593 [CLOSED] - "hello" produces 56k-token requests (1 comment)
- #12563 [OPEN] - Publish JSON schema for mcp.json (1 comment)
- #12567 [CLOSED] - Make truncated tool output resumable (1 comment)
- #12566 [CLOSED] - Rejecting getArgumentCompletions kills autocomplete (1 comment)
- #12561 [CLOSED] - Bash tool has no default timeout (1 comment)
- #12547 [OPEN] - /reload reorders system prompt tool list (1 comment)
- #12545 [CLOSED] - Add OpenAI Images API support (1 comment)
- #12544 [CLOSED] - sudo pi update leaves root-owned release (1 comment)

18 pull requests have been processed. Notable changes include fixes for GitHub Copilot model temperature handling, allowing hosts to control Pi Durable task scheduling, and replaying Copilot reasoning_opaque in openai-completions. Additional work covers coding-agent improvements with resource flags in OSC 7577 resume commands and agent-dir handling. Documentation updates address terminal reset procedures, while fixes address token estimation for !! output, Kitty image handling, and retry logic for Bedrock throttling errors. Feature work on pi-image API and conversation deletion functionality is underway, alongside telemetry documentation and various smaller improvements.

The most pressing concern involves provider defaults being overridden in fresh sessions when extensions register them. Kitty image rendering and session cleanup also need attention, with memory leaks appearing in disposed AgentSession instances. Windows terminal state recovery, skill exclusion logic, and prompt cache invalidation during /reload operations represent additional friction points. Transcript management options, image generation API parity, and JSON schema validation round out the broader feature landscape.

Several operational gaps stand out—Bash commands lack timeout safeguards, retry mechanisms don't consistently handle SSE stream failures, and missing source context in error messages creates debugging difficulty. Bun's standalone binary configuration and file mutation serialization across linked paths present compatibility concerns. The repository shows no recent releases, so I should note that absence alongside the substantive fixes and features landing in this cycle.
</think>


# Pi Community Digest — 2026-11-27

## Today's Highlights

The Pi community saw substantial activity focused on stability and extensibility. A critical bug affecting extension-registered providers ignoring default model settings remains open with active discussion (12 comments). On the PR side, several key fixes landed including improved Copilot reasoning replay, Kitty image handling improvements, and new telemetry documentation. The team also merged important host-integration enhancements for Pi Durable's task scheduling.

## Hot Issues

### 1. Extension-Registered Providers Ignoring Default Settings [#8810](https://github.com/earendil-works/pi/issues/8810) *(Open, 12 comments)*
**Why it matters:** Fresh sessions intermittently ignore `defaultProvider`/`defaultModel` when the provider is registered by an extension, silently falling back to another provider's default. This breaks expected startup behavior for any extension-based provider setup.
**Community reaction:** 5 👍 reactions; ongoing discussion with 12 comments indicating this is a reproducible and frustrating issue.

### 2. Kitty Images Lost in Regular Mode / Scrollback Wiped [#12548](https://github.com/earendil-works/pi/issues/12548) *(Closed)*
**Why it matters:** Images printed sequentially disappear when more output appears below, and Konsole's scrollback gets wiped due to fallback redraw behavior.
**Resolution:** Fixed via PRs [#12596](https://github.com/earendil-works/pi/pull/12596) (image ID range) and [#12597](https://github.com/earendil-works/pi/pull/12597) (append without full redraw).

### 3. AgentSession Dispose() Retains Closures, Preventing GC [#12546](https://github.com/earendil-works/pi/issues/12546) *(Closed)*
**Why it matters:** Long-running SDK processes leak memory as disposed `AgentSession` and `SessionManager` instances remain in the V8 heap until OOM.
**Resolution:** Closed as no-action; appears to be a known limitation being tracked separately.

### 4. Windows: Pi Death Leaves Kitty Keyboard Reporting On [#12564](https://github.com/earendil-works/pi/issues/12564) *(Closed)*
**Why it matters:** Crashed Pi on Windows leaves terminal in a broken state where PowerShell becomes unusable.
**Resolution:** Fixed via PR [#12601](https://github.com/earendil-works/pi/pull/12601) with improved documentation.

### 5. /reload Reorders System Prompt Tool List [#12547](https://github.com/earendil-works/pi/issues/12547) *(Open)*
**Why it matters:** Reloading unchanged code can change the system prompt's tool list order, causing Anthropic prompt cache misses and dropping thinking blocks.
**Status:** P0 priority, open for triage.

### 6. Project-Local Skill Exclusion Duplicates Entries [#12550](https://github.com/earendil-works/pi/issues/12550) *(Closed)*
**Why it matters:** Selecting "Skip" for a home skill saves both the path and a minus entry in `.pi/settings.json`, creating redundant configuration.
**Status:** Closed as no-action.

### 7. Retry Classifier Misses SSE Stream Failures [#12605](https://github.com/earendil-works/pi/issues/12605) *(Closed)*
**Why it matters:** With auto-retry enabled, upstream SSE stream failures stop the turn instead of triggering a retry, reducing reliability.
**Status:** Fixed under review.

### 8. Bash Tool Has No Default Timeout [#12561](https://github.com/earendil-works/pi/issues/12561) *(Closed)*
**Why it matters:** Hung commands can run indefinitely (one report: 2h 6m), blocking sessions.
**Status:** Closed as no-action; likely addressed in upcoming work.

### 9. codemode Parse Errors Lack Source Excerpt [#12510](https://github.com/earendil-works/pi/issues/12510) *(Open)*
**Why it matters:** Syntax errors only report file/line/column with no source context, forcing models to guess at the problem.
**Impact:** Makes debugging shell-heavy codemode scripts unnecessarily difficult.

### 10. Publish JSON Schema for mcp.json [#12563](https://github.com/earendil-works/pi/issues/12563) *(In Progress)*
**Why it matters:** Other configs (settings, models, keybindings, theme) have published schemas; mcp.json parity improves developer experience and IDE support.
**Status:** Work in progress.

---

## Key PR Progress

| PR | Title | Significance |
|----|-------|--------------|
| [#12604](https://github.com/earendil-works/pi/pull/12604) | fix(ai): GitHub Copilot mai-code models don't support temperature | Resolves error when using Copilot mai-code models |
| [#12603](https://github.com/earendil-works/pi/pull/12603) | Let hosts choose where Pi Durable starts runnable tasks | Major host-integration improvement; allows custom scheduling |
| [#12505](https://github.com/earendil-works/pi/pull/12505) | fix(ai): replay GitHub Copilot reasoning_opaque in openai-completions | Fixes reasoning replay for Copilot; addresses #12418 |
| [#12597](https://github.com/earendil-works/pi/pull/12597) | fix(tui): append Kitty images without full redraw in regular mode | Fixes scrollback wipe on image append |
| [#12596](https://github.com/earendil-works/pi/pull/12596) | fix(tui): keep Kitty image IDs within signed 32-bit range | Fixes image loss in Konsole |
| [#12602](https://github.com/earendil-works/pi/pull/12602) | feat(coding-agent): repeat restriction and resource flags in OSC 7577 resume | Improves terminal resume functionality |
| [#12595](https://github.com/earendil-works/pi/pull/12595) | feat(coding-agent): add --agent-dir and carry it in the resume command | Preserves agent directory across sessions |
| [#12601](https://github.com/earendil-works/pi/pull/12601) | docs(coding-agent): reset terminal after Pi was killed | Documentation fix for Windows terminal recovery |
| [#12535](https://github.com/earendil-works/pi/pull/12535) | feat(ai): add pi-image API | New image-generation protocol for provider parity |
| [#12584](https://github.com/earendil-works/pi/pull/12584) | docs(coding-agent): document telemetry and network requests | Improves transparency on data collection |

---

## Feature Request Trends

Based on the issue and PR activity, the community is driving momentum in these areas:

1. **Provider Ecosystem Expansion** — Requests for ModelScope as a built-in provider (#8393), OpenAI Images API support (#12545), and a unified pi-image API (#12535).

2. **Terminal & TUI Improvements** — Multiple issues addressing Kitty image handling, terminal mode recovery after crashes, and footer/header behavior during mode switches.

3. **Durable/Harness Enhancements** — Host-controlled task scheduling (#12603), conversation deletion (#12562, #12582), and pause/drain methods (#12512).

4. **Extension & SDK Refinements** — Public MCP extension hooks (#12600), extension symlink validation (#12599), and memory management improvements.

5. **Transparency & Control** — Transcript sidecar elision (#12506), pre-compaction message visibility (#12565), DO_NOT_TRACK compliance (#12556), and telemetry documentation.

---

## Developer Pain Points

The following frustrations appear repeatedly across issues and PRs:

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Missing error context** — Parse errors, tool failures, and upstream errors often lack actionable details | High | Forces manual debugging; slows AI-assisted workflows |
| **Memory leaks in SDK** — Disposed sessions retained in V8 heap causing eventual OOM | High | Breaks long-running integrations |
| **Terminal state corruption** — Crashes leave terminals in unusable states | Medium | Requires manual recovery; affects Windows particularly |
| **No tool timeouts** — Bash tool allows indefinite hangs | Medium | Blocks sessions for hours |
| **Prompt cache misses** — Tool list reordering invalidates caches unexpectedly | Medium | Wastes tokens; slows responses |
| **File mutation conflicts** — Hard links and symlinks cause race conditions | Low-Medium | Data integrity risk |
| **Bun standalone limitations** — undici.install() no-op affects HTTP configuration | Low | Degrades diagnostics in Bun environments |

---

*No new releases in the last 24 hours. See the [Pi repository](https://github.com/earendil-works/pi) for full activity.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a Qwen Code community digest for 2026-11-27 based on the provided GitHub data. Let me analyze the data and structure it according to the requested format.

Key observations from the data:

**Releases:**
- v0.28.7 (latest)
- v0.28.6
- v0.28.6-nightly.20261126.6b0cd79b
- sdk-typescript-v0.1.36 (bundling CLI 0.28.6)
- Several other SDK releases bundling CLI 0.28.0

**Highlights from releases:**
- Qwen Code CLI now available on Harness kernel with usage statistics off by default
- Managed sessions can suspend and resume after crashes via cold recovery
- Repeated-tool-call rejections now explain the cause

**Issues (showing top 10 most noteworthy):**
1. #18486 - Desktop AppImage gray window issue on Mesa (P2, OPEN)
2. #17851 - Managed Agent full tier chronic failures (P1, OPEN)
3. #17889 - Transcript pagination performance bug (P1, OPEN)
4. #18475 - Session deletion worktree sidecar issue (P2, OPEN)
5. #16259 - Single user message being buried by system-reminder (P2, OPEN)
6. #18030 - Share project auto-memory between workspace and Git worktrees (P2, OPEN)
7. #17446 - Discover models during custom provider setup (P2, OPEN)
8. #15649 - MCP OAuth token pinning issue (P2, OPEN)
9. #18422 - Proposal for kernel seams for Mods (P2, OPEN)
10. #11680, #17934, #18342 - Various CI failures

**PRs (showing top 10 noteworthy):**


I notice several significant pull requests targeting critical improvements across different components. The proposed changes focus on performance optimization, security hardening, and enhanced user experience. Key PRs include addressing AppImage smoke checks, improving session recovery mechanisms, implementing credential isolation, and refining the web shell's rendering and model default capabilities.

The PRs demonstrate a comprehensive approach to addressing technical debt, with a strong emphasis on system resilience, performance, and user interface refinements. Notable efforts include web-shell optimization, session management improvements, and infrastructure-level enhancements.

No discussion data was provided, which requires careful consideration in generating the response. I'll need to ensure the output maintains the requested JSON schema format while acknowledging the absence of discussion information.

I'll focus on creating a structured JSON that highlights the key insights from the release notes, emphasizing the most critical technical improvements and strategic updates in this version. The format must be precise, using camelCase for keys and maintaining a clear, hierarchical structure that captures the essence of the technical digest.

The JSON will prioritize concise, technically accurate summaries that provide immediate value to technical readers, highlighting architectural changes, performance optimizations, and significant feature developments across the Qwen Code ecosystem.

I'll ensure the structure allows for easy parsing while preserving the nuanced technical details from the release notes, particularly around CLI availability, session management, and tool call refinement.

The next section will dive into specific issues, starting with the Linux desktop rendering challenge that impacts users on systems using Mesa graphics drivers.

A critical performance bottleneck exists in the transcript pagination mechanism, causing event loop stalls that dramatically reduce query efficiency. This issue fundamentally compromises system responsiveness, especially under high-load scenarios.

The Managed Agent tier reveals persistent infrastructure instability, with daily test failures indicating deeper systemic challenges in the managed service architecture. These continuous integration breakdowns suggest underlying reliability concerns that require immediate engineering attention.

Session management introduces another potential data integrity risk, where transcript removal could occur incompletely during deletion processes. This creates potential inconsistencies in worktree tracking and session metadata management.

User context overload emerges as a significant interaction problem, where system reminders potentially obscure critical task instructions. The risk of important directives being effectively hidden represents a meaningful user experience degradation.

Git worktree memory management presents collaboration challenges, as learned project insights become isolated within specific workspace contexts, preventing knowledge transfer across different repository representations.

Provider model discovery remains an underaddressed workflow enhancement, with current CLI limitations constraining user flexibility in model selection and configuration processes.

Credential handling reveals potential security vulnerabilities, particularly around ambient credential exposure and fork review processes, suggesting a need for more robust isolation mechanisms.

Session architecture is evolving through modular plugin approaches, enabling more flexible host integrations and supporting optional adapter configurations that enhance system adaptability.

Transcript rendering receives targeted performance improvements, implementing intelligent highlighting strategies that optimize resource utilization during user interactions.

Credential security becomes more granular, with the new PR introducing precise isolation techniques for fork review processes, addressing potential information leakage risks.

Authentication mechanisms are being refined to handle token expiration more gracefully, specifically for MCP servers utilizing OAuth, which previously suffered from session disruptions.

The development team is actively restructuring store architecture, introducing collaborative designs that improve session management and modularity.

Performance optimization focuses on index rebuilding, targeting more efficient transcript handling and reducing computational overhead during complex interactions.

Key improvement vectors include enhanced CLI integration, robust session recovery mechanisms, refined authentication protocols, and advanced rendering strategies that minimize resource consumption.

Performance enhancements target transcript pagination, cold scan limitations, and incremental index management to optimize system responsiveness. Security measures now emphasize credential isolation and careful library bundling to prevent potential vulnerabilities. User experience refinements include memory sharing across Git worktrees, model discovery simplification, and improved session scheduling controls.

Platform stability initiatives focus on addressing chronic Managed Agent failures and ensuring compatibility across different graphics environments like Mesa, particularly for Linux desktop applications. These coordinated efforts demonstrate a comprehensive approach to improving system reliability, performance, and user interaction.
</think>


```json
{
  "date": "2026-11-27",
  "product": "Qwen Code",
  "section1_Highlights": "Qwen Code CLI is now available on the Harness kernel with privacy-preserving usage statistics (disabled by default), enabling tighter integration with the broader Qwen ecosystem. Managed sessions gained cold recovery capabilities, allowing them to suspend during tool approvals or background work and seamlessly resume after daemon crashes. The web-shell received significant UI/performance improvements including deferred transcript rendering and scoped model defaults for new tasks.",
  "section2_Releases": {
    "v0.28.7": {
      "summary": "Latest stable release. Qwen Code CLI is now available on the Harness kernel with usage statistics disabled by default (privacy.usageStatisticsEnabled controls opt-in). Repeated-tool-call rejections now include explanatory messages.",
      "breakingChanges": [],
      "securityFixes": []
    },
    "v0.28.6": {
      "summary": "Managed sessions can now suspend while awaiting tool approvals, questions, or background work, and resume via cold recovery after Harness crashes. SDK TypeScript v0.1.36 bundles CLI 0.28.6.",
      "breakingChanges": [],
      "securityFixes": []
    },
    "v0.28.6-nightly.20261126.6b0cd79b": {
      "summary": "Nightly build including the CLI package on Harness kernel integration.",
      "breakingChanges": [],
      "securityFixes": []
    }
  },
  "section3_HotIssues": [
    {
      "number": 18486,
      "title": "Desktop AppImage: gray window on current Mesa — bundled libwayland-client lacks wl_fixes_interface",
      "url": "https://github.com/QwenLM/qwen-code/issues/18486",
      "priority": "P2",
      "status": "OPEN",
      "whyItMatters": "Linux desktop users on modern Mesa drivers (Bluefin/Fedora) encounter gray window rendering failures due to bundled outdated libwayland-client library conflicting with host EGL. This affects a significant portion of Linux desktop users.",
      "communityReaction": "3 comments reported; PR #18491 opened to fail AppImage smoke checks when host libraries are bundled."
    },
    {
      "number": 17889,
      "title": "bug(serve): transcript pagination reparses full JSONL on every request — limit=1 costs same as limit=500",
      "url": "https://github.com/QwenLM/qwen-code/issues/17889",
      "priority": "P1",
      "status": "OPEN",
      "whyItMatters": "Critical performance bug causing event loop stalls on large sessions. Every transcript request incurs full JSONL reparse cost regardless of pagination parameters, severely degrading daemon responsiveness under load.",
      "communityReaction": "3 comments; PR #18480 addresses index rebuild storms and incremental transcript indexing."
    },
    {
      "number": 17851,
      "title": "Main CI failed: Managed Agent full tier — Hosted failover E2E runtime_preparation_timeout (chronic since >=2026-11-11)",
      "url": "https://github.com/QwenLM/qwen-code/issues/17851",
      "priority": "P1",
      "status": "OPEN",
      "whyItMatters": "Managed Agent full tier has been chronically failing on main for over two weeks, indicating systemic infrastructure issues affecting production-grade deployments.",
      "communityReaction": "4 comments; actively investigated by wenshao."
    },
    {
      "number": 18475,
      "title": "fix(serve): fail closed on unreadable worktree sidecars during session deletion",
      "url": "https://github.com/QwenLM/qwen-code/issues/18475",
      "priority": "P2",
      "status": "OPEN",
      "whyItMatters": "Session deletion can silently leave unreadable worktree sidecars and orphaned checkouts, creating data inconsistency and potential storage leaks in multi-workspace environments.",
      "communityReaction": "3 comments; PR opened by wenshao to implement fail-closed behavior."
    },
    {
      "number": 16259,
      "title": "Single user message buried by system-reminder / memory catalog (60KB+) — model responds with 'no task'",
      "url": "https://github.com/QwenLM/qwen-code/issues/16259",
      "priority": "P2",
      "status": "OPEN",
      "whyItMatters": "Users' actual task instructions get lost in lengthy system reminders and memory catalogs exceeding 60KB, causing the model to ignore user requests entirely. This is a critical UX failure for task-oriented workflows.",
      "communityReaction": "4 comments discussing context window management and instruction prioritization."
    },
    {
      "number": 18030,
      "title": "feat(memory): share project auto-memory between workspace and Git worktrees",
      "url": "https://github.com/QwenLM/qwen-code/issues/18030",
      "priority": "P2",
      "status": "OPEN",
      "whyItMatters": "Each Git worktree currently gets isolated project auto-memory, breaking knowledge continuity when developers create worktrees for bug fixes. Lessons learned in worktrees don't transfer back to main workspace.",
      "communityReaction": "4 comments; feature request for shared auto-memory across worktrees."
    },
    {
      "number": 17446,
      "title": "feat(cli): discover models during custom provider setup",
      "url": "https://github.com/QwenLM/qwen-code/issues/17446",
      "priority": "P2",
      "status": "OPEN",
      "whyItMatters": "Users setting up custom providers (OpenAI, Anthropic-compatible) lack model discovery during configuration, forcing manual model ID entry. This adds friction to the provider setup workflow.",
      "communityReaction": "8 comments; PR #17692 implements model discovery for custom providers."
    },
    {
      "number": 15649,
      "title": "MCP OAuth: access token pinned at connect time — session loses tools when token expires",
      "url": "https://github.com/QwenLM/qwen-code/issues/15649",
      "priority": "P2",
      "status": "OPEN",
      "whyItMatters": "HTTP MCP servers using OAuth lose all tools once the access token expires because tokens are cached at connection time rather than being refreshed dynamically.",
      "communityReaction": "3 comments; requires token refresh mechanism implementation."
    },
    {
      "number": 18422,
      "title": "proposal(harness): kernel seams for product plugins to host Mods",
      "url": "https://github.com/QwenLM/qwen-code/issues/18422",
      "priority": "P2",
      "status": "OPEN",
      "whyItMatters": "Proposal for extending Harness kernel with host-neutral extension points that allow product plugins to integrate the Mod runtime, enabling broader ecosystem extensibility.",
      "communityReaction": "3 comments; architectural discussion ongoing."
    },
    {
      "number": 11680,
      "title": "Main CI failed: E2E Tests — no test identified",
      "url": "https://github.com/QwenLM/qwen-code/issues/11680",
      "priority": "P2",
      "status": "CLOSED",
      "whyItMatters": "Long-running CI reliability issue with 107 comments. E2E tests failing before reporting any results makes debugging difficult and slows development velocity.",
      "communityReaction": "107 comments accumulated; tracked per-commit with ongoing triage."
    }
  ],
  "section4_KeyPRProgress": [
    {
      "number": 18491,
      "title": "fix(desktop): fail the AppImage smoke check when a host library is bundled",
      "url": "https://github.com/QwenLM/qwen-code/pull/18491",
      "status": "OPEN",
      "description": "Strengthens AppImage release validation to detect when bundled libraries should come from the host, preventing the Mesa/EGL rendering issues reported in issue #18486."
    },
    {
      "number": 18215,
      "title": "fix(serve): recover detached background-shell liveness for persisted sessions",
      "url": "https://github.com/QwenLM/qwen-code/pull/18215",
      "status": "OPEN",
      "description": "Enables web shell to detect whether detached background shells are still running for sessions not owned by the connected daemon (e.g., after daemon restart), improving session state reliability."
    },
    {
      "number": 18370,
      "title": "fix(ci): fail closed on authority-surface PRs and ambient credential probes",
      "url": "https://github.com/QwenLM/qwen-code/pull/18370",
      "status": "OPEN",
      "description": "Improves automated review triage to assess what a PR can actually reach, rather than just pattern-matching suspicious phrases, preventing credential exposure in PR workflows."
    },
    {
      "number": 18483,
      "title": "perf(web-shell): defer offscreen transcript highlighting and rendering",
      "url": "https://github.com/QwenLM/qwen-code/pull/18483",
      "status": "OPEN",
      "description": "Implements lazy syntax highlighting that only renders content approaching the scroll container, reducing initial load time and memory usage for large transcripts."
    },
    {
      "number": 18470,
      "title": "fix(ci): isolate fork review model credentials",
      "url": "https://github.com/QwenLM/qwen-code/pull/18470",
      "status": "OPEN",
      "description": "Fork lifecycle reviews now use GitHub Actions token instead of maintainer PAT, with model credentials served via loopback proxy to prevent exposure in untrusted contexts."
    },
    {
      "number": 18490,
      "title": "feat(web-shell): add scoped model defaults for new tasks",
      "url": "https://github.com/QwenLM/qwen-code/pull/18490",
      "status": "OPEN",
      "description": "Allows per-model default configuration for new tasks including context window limits, thinking settings, and effort levels, with separate User and Workspace tab configurations."
    },
    {
      "number": 18476,
      "title": "feat(web-shell): switch ChatPane onto shared ChatSurface (slice 4)",
      "url": "https://github.com/QwenLM/qwen-code/pull/18476",
      "status": "OPEN",
      "description": "Migrates daemon split-view and side-task chat pane to the shared backend-neutral chat surface, retiring duplicated transcript, tool-approval, and composer orchestration code."
    },
    {
      "number": 18112,
      "title": "feat(web-shell): surface and control session scheduled tasks in-session",
      "url": "https://github.com/QwenLM/qwen-code/pull/18112",
      "status": "OPEN",
      "description": "Exposes durable scheduled tasks and in-memory session schedules (cron jobs, loop wakeups) within Web Shell conversation view, with inline pause, run-now, delete, and stop controls."
    },
    {
      "number": 18480,
      "title": "perf(core): persist prompt-time sidecar, bound cold scans, and extend transcript index incrementally",
      "url": "https://github.com/QwenLM/qwen-code/pull/18480",
      "status": "OPEN",
      "description": "Addresses the critical transcript pagination performance issue (#17889) by eliminating repeated full-index rebuilds and implementing incremental index updates."
    },
    {
      "number": 18488,
      "title": "feat(mods): let Mods read environment and settings, and log telemetry",
      "url": "https://github.com/QwenLM/qwen-code/pull/18488",
      "status": "OPEN",
      "description": "Extends Mod runtime capabilities with environment variable access ($.env.get), settings reading ($.settings.read), and telemetry logging ($.telemetry.log/mark) for all Mod hosts."
    }
  ],
  "section5_HotDiscussions": null,
  "section6_FeatureRequestTrends": [
    {
      "category": "CLI & Provider Management",
      "requests": [
        "Model discovery during custom provider setup (OpenAI, Anthropic-compatible)",
        "Extended CLI availability across kernel environments",
        "Improved credential handling and isolation"
      ],
      "frequency": "High"
    },
    {
      "category": "Memory & Context Management",
      "requests": [
        "Shared project auto-memory across Git worktrees",
        "Better handling of lengthy system reminders that obscure user instructions",
        "Incremental transcript indexing for performance"
      ],
      "frequency": "High"
    },
    {
      "category": "Session & Workflow Management",
      "requests": [
        "In-session scheduled task visualization and control",
        "Cold recovery for managed sessions",
        "Scoped model defaults per workspace/task"
      ],
      "frequency": "Medium"
    },
    {
      "category": "Platform & Integration",
      "requests": [
        "Mod runtime extensibility via kernel seams",
        "MCP OAuth token refresh mechanisms",
        "Cross-platform compatibility fixes (Linux AppImage)"
      ],
      "frequency": "Medium"
    }
  ],
  "section7_DeveloperPainPoints": [
    {
      "issue": "CI Flakiness",
      "description": "E2E tests and Managed Agent gates fail intermittently with 'no test identified' or timeout issues, accumulating 100+ comment threads and slowing development velocity.",
      "frequency": "High"
    },
    {
      "issue": "Transcript Performance",
      "description": "Full JSONL reparse on every transcript request regardless of pagination limits, causing event loop stalls on large sessions.",
      "frequency": "High"
    },
    {
      "issue": "Linux Desktop Rendering",
      "description": "AppImage gray window issues on Mesa drivers due to bundled library conflicts, affecting significant Linux user base.",
      "frequency": "High"
    },
    {
      "issue": "Context Overflow",
      "description": "System reminders and memory catalogs exceeding 60KB bury actual user instructions, causing model to miss task directives entirely.",
      "frequency": "Medium"
    },
    {
      "issue": "Worktree Isolation",
      "description": "Git worktrees receive isolated auto-memory, preventing learned lessons from propagating back to main workspace.",
      "frequency": "Medium"
    },
    {
      "issue": "MCP OAuth Token Expiry",
      "description": "Access tokens cached at connection time cause complete tool loss when expired, requiring reconnection.",
      "frequency": "Medium"
    },
    {
      "issue": "Session Deletion Data Integrity",
      "description": "Unreadable worktree sidecars can be left behind during session deletion, creating orphaned state.",
      "frequency": "Low"
    }
  ]
}
```

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*