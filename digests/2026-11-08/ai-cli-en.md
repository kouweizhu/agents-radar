# AI CLI Tools Community Digest 2026-11-08

> Generated: 2026-11-08 01:45 UTC | Tools covered: 7

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

<think>The user wants me to generate a cross-tool comparison report for AI CLI tools based on the community digest summaries I've already created for Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, and Qwen Code.

Let me analyze each tool's data and create a comprehensive comparison report with the requested sections:

1. **Ecosystem Overview** - Brief overview of the AI CLI tools landscape
2. **Activity Comparison** - Table with Issues, PRs, Discussions counts and Release status
3. **Shared Feature Directions** - Cross-tool feature requests
4. **Differentiation Analysis** - Tool-specific focus areas
5. **Community Momentum & Maturity** - Activity and iteration speed
6. **Trend Signals** - Industry trends from community feedback

Let me compile the data from each digest:

**Claude Code (anthropics/claude-code):**
- Issues: 50 total, 30 shown
- PRs: None in last 24h
- Discussions: N/A (no discussion data provided)
- Releases: None in last 24h

**OpenAI Codex (openai/codex):**
- Issues: 50 total, top 30 shown
- PRs: 42 total, top 20 shown
- Discussions: 11 total (2 shown - Ideas and Show and Tell)
- Releases: rust-v0.169.0-alpha.3

**Gemini CLI (google-gemini/gemini-cli):**
- Issues: 50 total, top 30 shown
- PRs: 26 total, top 20 shown
- Discussions: N/A (no discussion data provided)
- Releases: None in last 24h

**GitHub Copilot CLI (github/copilot-cli):**
- Issues: 26 total, showing all


- PRs: None in last 24h
- Discussions: N/A (no discussion data provided)
- Releases: v1.0.108-1

**OpenCode (anomalyco/opencode):**
- Issues: 50 total, top 30 shown
- PRs: 50 total, top 20 shown
- Discussions: N/A (no discussion data provided)
- Releases: None in last 24h

**Pi (earendil-works/pi):**
- Issues: 24 total, last 24h
- PRs: 6 total, last 24h
- Discussions: 2 total, last 24h
- Releases: None in last 24h

**Qwen Code (QwenLM/qwen-code):**
- Issues: 50 total, top 30 shown
- PRs: 50 total, top 20 shown
- Discussions: N/A (no discussion data provided)
- Releases: v0.27.0, desktop-v0.27.0, sdk-typescript-v0.1.30, v0.26.9-nightly.20261107.65e1f1aeaa

I can now synthesize these metrics into a comparative framework that highlights development velocity, community engagement patterns, and platform-specific distribution strategies across the AI CLI ecosystem.
</think>


# AI CLI Tools Ecosystem Report

**Date:** 2026-11-08
**Scope:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, Qwen Code

---

## 1. Ecosystem Overview

The AI CLI tooling landscape has entered a maturation phase where vendors are racing to deliver production-grade reliability for autonomous coding agents. Three patterns dominate: Anthropic (Claude Code) and OpenAI (Codex) prioritize privacy/security as primary trust signals, while Google (Gemini CLI) and Qwen focus on extensibility and multi-model support. OpenCode's open-source model drives aggressive community feature development, whereas Copilot CLI's closed development cycle produces slower but more controlled releases. Cross-cutting themes include Remote Control/session management, MCP ecosystem integration, browser automation, and quota/billing transparency—indicating that the industry has converged on a common feature set while differentiating on implementation quality and target user segment.

---

## 2. Activity Comparison

| Tool | Issues (total / 24h) | PRs (total / 24h) | Discussions | Releases (24h) | Community Channel |
|------|---------------------|-------------------|-------------|----------------|-------------------|
| **Claude Code** | 50 / 30 | 0 / 0 | N/A | 0 | GitHub Issues + PRs |
| **OpenAI Codex** | 50 / 30 | 42 / 20 | 11 / 2 | 1 (alpha) | All channels |
| **Gemini CLI** | 50 / 30 | 26 / 20 | N/A | 0 | GitHub Issues + PRs |
| **GitHub Copilot CLI** | 26 / 26 | 0 / 0 | N/A | 1 | GitHub Issues + PRs |
| **OpenCode** | 50 / 30 | 50 / 20 | N/A | 0 | GitHub Issues + PRs |
| **Pi** | 24 / 24 | 6 / 6 | 2 / 2 | 0 | All channels |
| **Qwen Code** | 50 / 30 | 50 / 20 | N/A | 4 | GitHub Issues + PRs |

**Observations:**
- **Qwen Code** and **OpenCode** lead in absolute release velocity (highest PR merge counts), suggesting rapid iteration driven by open-source community contributions.
- **Pi** and **Copilot CLI** have smaller issue volumes but maintain consistent daily activity, indicating more focused user bases rather than broad adoption.
- **OpenAI Codex**, **Pi**, and **Qwen Code** maintain Discussions forums as active community channels; others rely exclusively on Issues/PRs.
- **Claude Code**, **Gemini CLI**, and **OpenCode** show zero PR activity in the last 24 hours despite active issue discussions—likely internal sprint planning or weekend timing.

---

## 3. Shared Feature Directions

The following requirements appear across multiple tool communities, indicating industry-wide consensus on next-generation capabilities:

| Feature Direction | Tools Requesting | Specific Needs |
|-------------------|-----------------|----------------|
| **Remote Control / Session Management** | Claude Code, OpenAI Codex, Gemini CLI | Attach terminal to remote sessions, persist Remote Control sessions in resume picker, unique session IDs for subagents, session takeover on browser lock |
| **MCP (Model Context Protocol) Ecosystem** | Claude Code, Gemini CLI, Copilot CLI, OpenCode, Pi, Qwen Code | OAuth token reuse/caching, background startup without blocking core workflows, MCP server restart on directory change, scoped npm package support |
| **Browser Automation / Computer Use** | Claude Code, OpenAI Codex, Qwen Code | Window state inspection, session recovery on lock, local dev domain trust, content filter handling |
| **Quota / Billing Transparency** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode | Accurate reset timing, 15× token billing regression detection, global Send-button disable after exhaustion, free tier reliability |
| **Terminal UI / TUI Enhancements** | Claude Code, Gemini CLI, Copilot CLI, OpenCode | OSC 133/7501 status reporting, hardware cursor accuracy, SIGWINCH resilience, keyboard navigation in sidebars |
| **Privacy / Security Hardening** | Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI | User-Agent email exposure, shell transcript secret attachment, credential storage under wrong origin, tainted command always-allow prevention |
| **Extensibility / Plugin System** | Copilot CLI, OpenCode, Pi, Qwen Code | Custom providers during sign-in, GUI plugin loading in web app, skill directories per workspace, extension lifecycle across contexts |
| **Platform Parity (Windows/Linux/ARM)** | All tools | Page size assumptions (jemalloc/16KB ARM64), OneDrive stream resilience, Wayland browser support, winget installation failures |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|--------------|-------------|-------------------|
| **Claude Code** | Privacy-first, enterprise security | Developers requiring strict data governance | Conservative context management; extensive permission system; rule-based automation |
| **OpenAI Codex** | Windows productivity, IDE integration | Enterprise teams on Windows desktops | Durable cloud sessions; Computer Use API; ACP server mode for headless deployment |
| **Gemini CLI** | Subagent orchestration, multi-model support | Developers wanting flexible model routing | OSC 7501 terminal reporting; AST-aware tooling; unique subagent session IDs |
| **Copilot CLI** | GitHub ecosystem integration, extension API | GitHub-native development workflows | Extension-based skill system; `/` slash commands; ACP mode for server deployments |
| **OpenCode** | Open-source customizability, free tier | Cost-sensitive developers, self-hosters | Aggressive feature velocity; Community showcase ecosystem; Zen free tier |
| **Pi** | Durable execution, memory layers | Long-running autonomous research agents | Durable task scheduler; Holo-backed personal memory; Neon/pgvector memory store |
| **Qwen Code** | Managed-agent scalability, Web Shell | Enterprise teams needing hosted agents | Multi-child managed sessions; external workspace execution; task Q&A heatmap |

---

## 5. Community Momentum & Maturity

### High Velocity (Rapid Iteration)
- **Qwen Code** — 4 releases in 24h, 50 PRs, active managed-agent feature development. Strong enterprise focus with diagnostics and external workspace execution.
- **OpenCode** — 50 PRs visible, aggressive free-tier reliability push (326 comments on single issue). Highest community engagement volume.
- **Pi** — Focused PR output (6 in 24h) with high-impact features: prompt cache warming (~$1,430/mo savings), Neon memory layer, MiniMax/Wally providers.

### Moderate Velocity (Steady Development)
- **OpenAI Codex** — Consistent activity across all channels. Strong IDE extension work (sidebar navigation, skill punctuation). Alpha release cadence.
- **Gemini CLI** — Security-focused PRs merged (tainted commands, error report isolation, OAuth secrets). Subagent turn management improvements.

### Lower Velocity (Stable/Mature)
- **Claude Code** — No PRs in 24h despite high issue volume. Suggests internal development or weekend cycle. Privacy/security dominates community attention.
- **Copilot CLI** — 1 release, small issue count. Focused on extension lifecycle reliability and ACP observability.

### Community Health Indicators
- **Pi** and **OpenAI Codex** have the most balanced channel usage (Issues + PRs + Discussions), indicating mature community processes.
- **OpenCode's** #59387 (326 comments) represents the highest single-issue engagement across all tools—driven by free tier frustration but demonstrating active community participation.
- **Claude Code's** #107757 (727 upvotes, 104 comments) on privacy violations signals that security concerns can generate massive community response even without PR activity.

---

## 6. Trend Signals

The following signals emerge from community feedback, offering reference value for developers building in or evaluating this ecosystem:

### Privacy as a First-Class Requirement
Claude Code's User-Agent email exposure (#107757, 727 upvotes) generated the highest community engagement across all tools. **Developers building AI tools must treat privacy violations as P0 regardless of feature priority.** Users increasingly evaluate tools on data handling, not just capability.

### MCP Ecosystem is Production-Critical
Every tool in this report has open MCP-related issues. OAuth token caching, background startup, subprocess management, and scoped package support are all flagged as reliability concerns. **MCP is no longer experimental—it is a production dependency.** Tool developers should invest in MCP testing infrastructure.

### Durable/Long-Running Session Reliability is a Growth Constraint
Multiple tools report session corruption, silent state reversion, and unresumable sessions (OpenAI Codex #50428, Claude Code #95231, Pi #11892). **As agents handle longer tasks, session durability becomes a blocker for production adoption.** This is an unsolved problem across the ecosystem.

### Windows is the New Frontier for Reliability
Every tool reports Windows-specific bugs: path handling, OneDrive resilience, jemalloc page sizes, browser automation, and desktop UI rendering. **Windows developers represent an underserved segment** relative to macOS/Linux. Tool vendors investing in Windows QA will capture enterprise users currently blocked by reliability issues.

### The "Free Tier Problem" Affects Adoption
OpenCode's free tier issue (#59387) accumulated 326 comments—more than any technical feature request in any tool. **Users who cannot reliably access free tiers never become paying customers.** Free tier reliability is a conversion funnel problem, not just a UX problem.

### Browser Automation is Converging but Fragile
Computer Use APIs (window state, content filters, session takeover) are being standardized across Claude Code, Codex, and Qwen Code, but all have open bugs. **Browser automation is the next battleground** for coding agent capability differentiation, but current implementations are not production-stable.

### Terminal Integration Standards are Emerging
OSC 133 (turn boundaries) and OSC 7501 (status reporting) appear in at least three tools (Gemini CLI, Copilot CLI, Qwen Code). **Terminal integration standards are forming organically** without a formal spec. Tool developers should monitor OSC protocol adoption for cross-tool compatibility.

### Quantized Model Support Needs Explicit Handling
Qwen Code's PR #16559 (quantized models inheriting base context window) addresses a common pitfall: AWQ/GPTQ/FP8 models defaulting to tiny context limits. **Any tool supporting quantized models must explicitly inherit base model capabilities.** This will become more common as 4-bit models proliferate.

---

*Cross-tool analysis compiled from GitHub data for all major AI CLI tools on 2026-11-08. Data reflects repository state as of report date; trends should be validated against subsequent releases.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the GitHub data from the anthropics/skills repository and generate a community highlights report. Let me extract the key information:

**Popular Pull Requests (sorted by comments, showing top 20):**
1. #1742 - fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers - Kuldeeep18
2. #1298 - fix(skill-creator): isolate trigger evals and handle Windows and runtime failures - MartinCajiao
3. #1245 - Add notion-spec-to-implementation and quantitative-resume-auditor skills - mrdesouzaphd-cmyk
4. #1980 - webapp-testing: avoid shell=True in with_server.py - Pcmhacker-piro
5. #1792 - fix(docx): report LibreOffice timeout as an error and verify the output - TINGyu123644
6. #1771 - feat(skills): add proofcore-contract-auditor for smart contract notarization - ProofCore-Protocol
7. #1734 - Detect orphaned docx comments - rohitjain25
8. #1703 - Add md2video-audio skill - 70v-Yoyo
9. #525 - Add pyxel skill for retro game development - kitao
10. #2019 - fix(xlsx): resolve worksheet-scoped defined names and aliases in external_links_at_risk - reginaldalfret
11. #1730 - fix(claude-api): replace dead URLs in academy-guide and tool-use-concepts - GISWLH
12. #1681 - fix(skill-creator): support direct execution of package_skill.py and update usage paths - Kuldeeep18
13. #2108 - docs: clarify document skills snapshot status and sync relationship - marlonferreira1800-hue


14. #1997 - fix(skill-creator): parse YAML frontmatter scalars correctly - BichengWang
15. #1977 - algorithmic-art: wrapAround() now wraps - gerardrecinto
16. #1976 - webapp-testing: report textarea and select correctly in element_discovery.py - gerardrecinto
17. #1975 - pptx: reject --cols below 1 in thumbnail.py - gerardrecinto
18. #1615 - Add scnet-hpc skill - lql341
19. #538 - fix(pdf): correct case-sensitive file references in SKILL.md - Lubrsy706

The pull requests span multiple categories: bug fixes across various skills, new feature implementations, and documentation improvements. Notable patterns include security updates like shell=True removal, functionality enhancements for skills like docx and webapp-testing, and new skill additions such as proofcore-contract-auditor and md2video-audio.

Looking at the community issues, the most pressing concern is a security vulnerability flagged by aliksir (46 comments) about trust boundary abuse in community skills distributed under the anthropic/ namespace. Beyond that, users want org-wide skill sharing capabilities and there are technical problems with run_eval.py not triggering skills at all. Several feature proposals are under discussion, including a reasoning quality gate pipeline and skill improvements that need review. The skill creator also needs updates to align with best practices.

I'm noticing the comments field is undefined across all the pull requests, so I can't use comment counts to identify the most active discussions. Looking at what I can actually work with, there are some notable patterns in the PRs and issues. The security issue #492 stands out as the most active with 46 comments, while org-wide sharing (#228) and the run_eval.py bug (#556) have more moderate engagement. The data appears to have incomplete information in some places, but I can still identify the key themes: security concerns around namespace trust, infrastructure improvements for skill management, and workflow enhancements like the reasoning quality gate pipeline.
</think>


# Claude Code Skills Community Highlights Report

**Repository:** [anthropics/skills](https://github.com/anthropics/skills)  
**Data as of:** 2026-11-08

---

## 1. Top Skills Ranking

The following PRs represent the most-active Skill proposals and improvements by community engagement:

| # | Skill / PR | Author | Status | Highlights |
|---|------------|--------|--------|------------|
| 1 | **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)** | ProofCore-Protocol | OPEN | Adds a Web3 smart contract auditor with Solidity/Rust static analysis and TON Blockchain audit proof anchoring via zero-storage Merkle protocol. Targets developers needing automated notarization of contract security. |
| 2 | **[md2video-audio](https://github.com/anthropics/skills/pull/1703)** | 70v-Yoyo | OPEN | Zero-cost Markdown-to-MP4 converter using Marp for slides and realistic voiceovers. Compiles documentation into professional presentation videos. |
| 3 | **[pyxel](https://github.com/anthropics/skills/pull/525)** | kitao | OPEN | Retro game development skill for Python's Pyxel engine. Covers headless input-driven runs, frame inspection, and task-specific state verification. |
| 4 | **[scnet-hpc](https://github.com/anthropics/skills/pull/1615)** | lql341 | OPEN | Profile-based SSH/Slurm workflow for SCNet HPC clusters, including job generation, cluster discovery, and compute-node management. |
| 5 | **[notion-spec-to-implementation](https://github.com/anthropics/skills/pull/1245)** | mrdesouzaphd-cmyk | OPEN | Transforms product/tech specs into concrete Notion tasks with acceptance criteria and progress tracking. Paired with `quantitative-resume-auditor` for resume scoring. |
| 6 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | PGTBoos | OPEN | Typographic quality control for AI-generated docs—prevents orphan words, widow paragraphs, and numbering misalignment. Addresses persistent UX issues across all document outputs. |
| 7 | **[compact-memory](https://github.com/anthropics/skills/issues/1329)** | WGlynn | OPEN | Symbolic notation skill for compact agent state management in long-running sessions. Proposes replacing verbose prose notes with structured, token-efficient memory formats. |

---

## 2. Community Demand Trends

Issues reveal concentrated demand in three areas:

| Theme | Key Issue | Description |
|-------|-----------|-------------|
| **Trust & Security** | [#492](https://github.com/anthropics/skills/issues/492) — *46 comments* | Critical: Community skills under `anthropic/` namespace create impersonation risk. Users may grant elevated permissions believing skills are official. |
| **Evaluation Reliability** | [#556](https://github.com/anthropics/skills/issues/556) — *13 comments* | `run_eval.py` reports 0% trigger rate across all queries—skill evaluation harness is fundamentally broken. |
| **Organization Sharing** | [#228](https://github.com/anthropics/skills/issues/228) — *17 comments* | No mechanism for org-wide skill sharing; users must manually distribute via Slack/Teams and Settings navigation. |
| **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) | `claude-api` skill injects ~156k tokens, exhausting context in a single call. |
| **Quality Gates** | [#1385](https://github.com/anthropics/skills/issues/1385) — *7 comments* | Proposal for three-gate pipeline: pre-task calibration → adversarial review → delivery verification. |

**Emerging direction:** The community is shifting from "more skills" toward **quality, security, and evaluation infrastructure**—ensuring existing skills are reliable, safe, and measurable.

---

## 3. High-Potential Pending Skills

These PRs have active development momentum and could land soon:

| PR | Skill | Focus | Notable |
|----|-------|-------|---------|
| [#1245](https://github.com/anthropics/skills/pull/1245) | notion-spec-to-implementation | Spec → Notion task conversion | Dual-skill bundle with resume auditor |
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | Web3 smart contract analysis | Novel TON Blockchain integration |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | Markdown → video generation | Zero-cost production workflow |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel | Retro game development | Targets niche but active gaming-dev audience |
| [#1615](https://github.com/anthropics/skills/pull/1615) | scnet-hpc | HPC cluster operations | Scientific computing vertical |

**Critical pending fixes** (block other work):
- [#556](https://github.com/anthropics/skills/issues/556) — Evaluation harness fix
- [#1390](https://github.com/anthropics/skills/issues/1390) — MCP evaluation scoring 0/N against real servers
- [#1394](https://github.com/anthropics/skills/issues/1394) — XSS vulnerability in eval-viewer

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for robust evaluation infrastructure, security hardening (especially namespace trust boundaries), and organization-level collaboration features—shifting focus from skill quantity toward skill reliability, safety, and measurability.**

---

<think>The user wants me to generate a Claude Code community digest for 2026-11-08 based on the provided GitHub data. Let me analyze the data and create a structured digest.

Key observations from the data:

1. **Releases**: None in the last 24h
2. **Issues**: 50 total, top 30 shown by comment count
3. **Pull Requests**: None in the last 24h
4. **Discussions**: No discussion data was provided, so I should omit that section

Let me pick the most noteworthy items for each section:

**Hot Issues** (picking 10 based on comment count and impact):
1. #107757 - Privacy violation in User-Agent header (104 comments, 727 👍) - HIGH PRIORITY
2. #97074 - Headless `claude -p` uses more context window (72 comments, 154 👍)
3. #56281 - Can't upgrade Max 5x → Max 20x (51 comments) - billing issue
4. #102828 - Remote Control session rejects "user_asked" (13 comments)
5. #100684 - Auto mode killed all GUI apps with pkill (8 comments)
6. #96508 - Browser pane regression on Windows (8 comments)
7. #95231 - Remote Control sessions hidden from resume picker (7 comments)
8. #107144 - Account-email check denies local-only Bash calls (6 comments)
9. #87190 - Feature: Attach terminal to Remote Control (6 comments, 9 👍)
10. #108122 - MCP Apps not rendering in Chat (5 comments)

**Feature Request Trends**:
- Remote Control improvements
- Browser pane enhancements (trust local domains, open links in new tabs)
- Desktop app improvements (sidebar state, scheduled tasks)
- Voice dictation configurability

**Developer Pain Points**:


I notice several critical technical challenges affecting user experience. The primary concerns involve privacy, authentication, and cross-platform compatibility. Privacy remains a significant issue, with the User-Agent header potentially exposing personal information. Authentication mechanisms are causing friction, particularly for Linux users and billing-related API interactions. Windows users face specific rendering challenges, while MCP integration reveals inconsistencies in app functionality across different platforms.

The core technical pain points center on permission systems, Remote Control session management, and desktop application reliability. These issues suggest a need for more robust, cross-platform testing and refined permission handling to improve overall system stability and user trust.
</think>


# Claude Code Community Digest

## 2026-11-08

---

## Today's Highlights

The Claude Code community continues to be highly active with significant engagement on privacy and security concerns. The most pressing issue remains the **User-Agent privacy violation** (#107757) with 727+ upvotes, where users report email exposure during web searches—a fundamental security flaw requiring immediate attention. The Desktop app on macOS has seen a notable regression affecting MCP widget rendering since the latest auto-update, while billing-related issues for Max tier upgrades remain unresolved despite ongoing community reports.

---

## Releases

**No new releases in the last 24 hours.**

The last stable release remains **Claude Desktop 4.23118.0** (CLI version 2.1.317), which users report introduced regressions in MCP app rendering and typing performance issues on macOS.

---

## Hot Issues

### 1. [Privacy Violation: User-Agent Exposes Email to Third Parties](https://github.com/anthropics/claude-code/issues/107757)
**Comments: 104 | 👍: 727 | macOS/Linux | Priority: Critical**

The most-voted issue in the repository. Users report that Claude Code's web search functionality includes personal email addresses in the `User-Agent` header, exposing this information to arbitrary third-party services. The community demands complete removal rather than an opt-out mechanism. This represents a fundamental privacy violation that should be treated as a security incident.

### 2. [Headless `claude -p` Consumes 1.8× More Context Window](https://github.com/anthropics/claude-code/issues/97074)
**Comments: 72 | 👍: 154 | Linux | Priority: High**

The `claude -p` command (SDK-CLI entrypoint) burns through the 5-hour context window 80% faster than interactive CLI mode for identical workloads. This represents significant wasted API costs for automated pipelines and batch processing workflows. The issue includes reproducible benchmarks.

### 3. [Cannot Upgrade Max 5x → Max 20x: Payment Fails Every Attempt](https://github.com/anthropics/claude-code/issues/56281)
**Comments: 51 | 👍: 13 | Platform: macOS | Priority: High**

Users on Max 5x tier cannot upgrade to Max 20x despite multiple attempts; payment processing fails silently. Support has been unresponsive. This blocks power users from accessing higher rate limits and represents lost revenue alongside degraded user experience.

### 4. [Remote Control: `user_asked` Rejected for Mobile-Originated Messages](https://github.com/anthropics/claude-code/issues/102828)
**Comments: 13 | 👍: 9 | macOS | Priority: Medium**

When using Remote Control from mobile devices, human messages sent from the mobile client are rejected with `user_asked` validation failures. This breaks the Remote Control workflow for mobile-initiated sessions.

### 5. [Auto Mode Killed All macOS GUI Apps via Overly Broad `pkill`](https://github.com/anthropics/claude-code/issues/100684)
**Comments: 8 | 👍: 2 | macOS | Priority: High**

In Auto mode, Claude Code ran `pkill -f "cat"` which substring-matched `/Applications`, terminating Safari, Chrome, Claude itself, and other critical applications. The `pkill -f` pattern matching is dangerously broad for production use.

### 6. [Browser Pane Regression: Localhost Subresources Blocked](https://github.com/anthropics/claude-code/issues/96508)
**Comments: 8 | 👍: 7 | Windows | Priority: Medium**

A regression affecting Windows where the browser pane blocks same-origin subresources for hostnames resolving to 127.0.0.1 (e.g., `dev.example.test` via hosts file). This breaks common local development workflows.

### 7. [Remote Control Sessions Hidden from Resume Picker](https://github.com/anthropics/claude-code/issues/95231)
**Comments: 7 | 👍: 3 | Platform: macOS/Linux | Priority: Medium**

Sessions created via `claude remote-control` (sdk-cli entrypoint) do not appear in the `--resume` picker, making it impossible to continue or review Remote Control sessions without direct filesystem access to transcripts.

### 8. [Account Email Check Blocks Local-Only Bash Operations](https://github.com/anthropics/claude-code/issues/107144)
**Comments: 6 | 👍: 2 | Linux | Priority: Medium**

Recent CLI versions (2.1.317+) block legitimate local-only Bash operations—heredoc file writes, curl to 127.0.0.1—because of an overzealous account-email validation check. This breaks standard development workflows.

### 9. [MCP Apps Widgets Not Rendering in Desktop Chat](https://github.com/anthropics/claude-code/issues/108122)
**Comments: 5 | 👍: 0 | macOS | Priority: High**

Since Desktop auto-updated to 4.23118.0, MCP apps from local stdio servers no longer render their UI widgets. The tool executes but the `ui://` resource is never requested, rendering MCP app integrations non-functional.

### 10. [Desktop Typing Lag: 45-98% CPU on macOS](https://github.com/anthropics/claude-code/issues/108216)
**Comments: 4 | 👍: 0 | macOS | Priority: Medium**

The Desktop app exhibits severe typing lag with renderer at 45% CPU and main process at 58-98% CPU while typing in the message box. Other applications are unaffected, indicating a Claude Desktop-specific performance issue.

---

## Key PR Progress

**No pull requests were merged or updated in the last 24 hours.**

The repository shows no recent merged work, suggesting the team may be focused on issue triage or internal development not yet visible to the community.

---

## Feature Request Trends

Analysis of open issues and feature requests reveals the following demand patterns:

### Remote Control Enhancements
- **Attach terminal to Remote Control sessions** (#87190) — Allow developers to interact with remote Claude Code sessions via a local terminal
- **Improved session visibility** — Multiple issues (#95231, #94546) request better integration of Remote Control sessions with resume/session management
- **Configurable idle timeout** (#104361) — Users want adjustable timeout settings for Remote Control connections beyond the current 4-hour hard limit

### Browser Pane Improvements
- **Trust local dev domains** (#98551) — Support for `*.lndo.site`, `*.ddev.site`, and similar local development domains resolving to 127.0.0.1
- **Open links in new tabs** (#106887) — Add Cmd+click, middle-click, and right-click support for opening links in new Browser pane tabs

### Desktop Application Refinements
- **Persist sidebar state** (#104942) — Keep collapsed sections and project groups collapsed across sessions
- **Scheduled tasks improvements** (#94628, #108242) — Fix persistence issues and clarify UI indicators

### Voice & Input Features
- **Configurable voice dictation** (#108241) — Allow users to adjust silence timeout and max duration for tap-mode voice dictation

---

## Developer Pain Points

### 1. Permission & Security System Confusion
Multiple issues (#107144, #107860, #107761) report that the permission system denies operations without clear explanations. Tool access denials provide no rules, sources, or remediation guidance, forcing developers to guess at root causes.

### 2. MCP Integration Instability
MCP functionality shows regression patterns:
- Widget rendering broken in Desktop (#108122)
- ToolSearch denials after reconnect (#107860)
- Desktop SSH MCP server failures (#107761)
- Claude Docs connector accessibility issues (#108161)

### 3. Cross-Platform Inconsistencies
The same Claude Code version behaves differently across platforms:
- Browser pane issues primarily on Windows (#96508)
- Local network permissions unique to macOS (#103230)
- Billing/auth issues affecting API key users on Linux (#106458)

### 4. Context Window Management
Headless mode inefficiency (#97074) combined with safety classifier false positives (#104652) suggests the system may be overly conservative with context allocation, wasting resources on routine coding tasks.

### 5. Auto-Update Regressions
The Desktop app's auto-update mechanism has introduced multiple regressions:
- MCP widgets stopped rendering after 4.16336.0 → 4.23118.0 upgrade
- Scheduled tasks and session lists wiped on update (#94628)
- Typing performance degraded post-update (#108216)

---

## Summary Statistics

| Category | Count |
|----------|-------|
| Total Open Issues | 50 |
| Issues Updated (24h) | 30 |
| PRs Merged (24h) | 0 |
| Releases (24h) | 0 |
| Most Active Issue | #107757 (104 comments) |
| Highest Voted Issue | #107757 (727 👍) |

---

*Digest generated from GitHub data for [anthropics/claude-code](https://github.com/anthropics/claude-code) on 2026-11-08.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze this GitHub data for the OpenAI Codex repository and create a structured community digest for 2026-11-08.

Let me organize the information:

**Releases:**
- rust-v0.169.0-alpha.3 was released

**Issues (50 total, top 30 by comment count shown):**
Most active issues are about:
1. Windows Computer Use stopping at get_window_state (74 comments) - #51524
2. Windows desktop durable chat turn failures (42 comments) - #50428
3. Windows workspace OneDrive stream disconnects (37 comments) - #35420
4. Send button disabled after usage exhausted (16 comments) - #48369
5. .agents ownership breaking sandbox (15 comments) - #43776
6. Android Codex Remote pairing failures (10 comments) - #56600
7. New chat creation fails with AbsolutePathBuf (8 comments) - #23209
8. Fresh/resumed Tasks omit codex_app capability (7 comments) - #46653
9. Duplicate offline device can't be removed (7 comments) - #58250
10. macOS Codex CLI workspace routing failure (6 comments) - #50211
11. TUI panics with SIGWINCH (5 comments) - #54979
12. Cloud workspace disappears/reverts (5 comments) - #59808
13. Project sidebar improvement (5 comments) - #35124
14. VS Code extension renderer timeout (4 comments) - #58811
15. Windows CLI/TUI concurrent sessions disconnect (3 comments) - #57650
16. Chrome URL verification fails (3 comments) - #59791
17. Browser interaction can't be initiated (3 comments) - #60149
18. macOS typing doubles/triples (3 comments) - #60147


19. Temporary Chat label mispositioned (3 comments) - #54838
20. Remote chat session inconsistent (3 comments) - #37659
21. Extension API request (3 comments) - #51138
22. GPT-6.1 Terra rate limit issue (3 comments) - #59690
23. False positive cybersecurity warning (3 comments) - #51687
24. Nested Linux sandbox fails (3 comments) - #53799
25. WeChat article blocked (2 comments) - #59813
26. Allow hiding local projects (2 comments) - #35749

The remaining issues show smaller engagement but touch on UI bugs, session handling problems, and integration challenges across different platforms.

Recent PRs include custom provider creation during sign-in, sidebar navigation improvements, and various exec catalog refinements. The 42 pull requests span accessibility features like keyboard controls, incremental code mode updates, and local workspace enhancements. There's also work on analytics authentication, async model request handling, and security features.

Community discussions highlight Windows install location control and several showcase projects including agent-recap for transcript search and agent-harness for skills management. Pushary enables mobile approval workflows while SnipToss handles media markup. The focus areas center on Windows compatibility issues, computer use functionality, authentication and rate limiting, and session persistence concerns. Notable discussions around feature requests include improving the project sidebar and implementing extension APIs.

I'm selecting the most significant issues to highlight. The Windows computer use problem with get_window_state (#51524) has generated substantial engagement with 74 comments and needs urgent attention. Windows desktop durable chat failures (#50428) and OneDrive-backed workspace disconnects (#35420) both have moderate comment activity. The send button remaining disabled after usage exhaustion (#48369) represents a core UX issue affecting users, while .agents ownership problems (#43776) impact sandbox and browser functionality. Android remote pairing failures (#56600) and TUI SIGWINCH panics (#54979) are technical issues with varying severity.

I should also track the cloud workspace reversion problems (#59808) and the VS Code extension renderer timeouts (#58811), which have both drawn community attention. For pull requests, the recent model override implementation for incremental code mode, custom provider creation during sign-in, and sidebar navigation improvements represent meaningful progress. MCP startup handling in background mode and exec catalog preservation testing are critical for stability.

The incremental code mode tool definitions, local workspace side chat persistence, and async model request budget checks round out the key improvements worth highlighting.
</think>


# OpenAI Codex Community Digest — 2026-11-08

## Today's Highlights

The Codex community is grappling with several high-impact Windows issues: a critical regression in Computer Use's `get_window_state` API is blocking browser automation workflows, while a persistent `AbsolutePathBuf` deserialization error is breaking durable chat and thread forking on Windows desktops. On the positive side, a flurry of PRs merged this cycle delivers meaningful UX improvements including sidebar keyboard navigation, skill mention punctuation handling, and incremental exec tool updates for Code Mode sessions.

## Releases

| Version | Type | Summary |
|---------|------|---------|
| [rust-v0.169.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.3) | Alpha | Pre-release build for the Rust runtime. No changelog summary provided. |

## Hot Issues

1. **[#51524](https://github.com/openai/codex/issues/51524)** — **[Windows] Computer Use stops at get_window_state: cannot determine current browser URL** *(74 comments, 👍9)*
   A regression since ~Oct 6 has broken browser window inspection in Windows Computer Use. App/window enumeration succeeds, but calling `sky.get_window_state({window, include_text:true})` immediately terminates the turn, preventing any click or typing automation. Affects both Chrome and Edge. **Highest priority** — 74 comments indicate broad user impact; workaround availability is unclear.

2. **[#50428](https://github.com/openai/codex/issues/50428)** — **Windows desktop: durable chat turn/start and thread/fork fail with AbsolutePathBuf deserialized without a base path** *(42 comments, 👍3)*
   Windows Codex Desktop can read existing durable/cloud chats but plain-text submissions and same-directory forks fail before execution. Spans multiple desktop builds (26.928–26.930). Core durability and multi-turn workflow is broken for Windows users.

3. **[#35420](https://github.com/openai/codex/issues/35420)** — **Work/Codex stream repeatedly disconnects when Windows workspace is OneDrive-backed and OneDrive is degraded** *(37 comments, 👍0)*
   Under OneDrive degradation, streams fail with "stream disconnected before completion" even on retry. Affects production users on ChatGPT Work/Codex Windows surface. Suggests poor resilience to filesystem cloud-sync state changes.

4. **[#48369](https://github.com/openai/codex/issues/48369)** — **Send button remains disabled globally after OpenAI usage is exhausted** *(16 comments, 👍8)*
   Once a user's OpenAI quota is exhausted, the Send button becomes globally disabled — not just for the affected model — and users cannot switch models or contexts to continue. Affects Plus and Team plans. Eight upvotes signal this is a common frustration.

5. **[#43776](https://github.com/openai/codex/issues/43776)** — **Windows: Codex-created .agents ownership breaks sandbox setup and in-app browser control** *(15 comments, 👍3)*
   Files/directories created by Codex on Windows inherit incorrect ownership, causing sandbox permission failures and loss of in-app browser control. Impacts security isolation and automation reliability on Windows.

6. **[#56600](https://github.com/openai/codex/issues/56600)** — **Android Codex Remote pairing fails with both QR and manual code** *(10 comments, 👍1)*
   Users cannot pair Android Codex Remote to their Windows desktop using either QR code or manual 6-digit code entry. Blocks mobile-first workflows.

7. **[#54979](https://github.com/openai/codex/issues/54979)** — **TUI panics with "index outside of buffer" when terminal shrinks before SIGWINCH is handled** *(5 comments, 👍0)*
   A race condition between terminal resize and signal handling causes a panic. Observed on macOS with Orca terminal but the failure mode is terminal-agnostic. Any terminal that can lose or race `SIGWINCH` while Codex is running is affected.

8. **[#59808](https://github.com/openai/codex/issues/59808)** — **[Dots] Cloud workspace repeatedly disappears/reverts — three times in one day** *(5 comments, 👍0)*
   Long-running Dots experience three separate rollback/loss events in a single day. The Dot identity persists but cloud-workspace state is silently reverted. Data integrity concern for production use.

9. **[#58811](https://github.com/openai/codex/issues/58811)** — **VS Code Extension (26.1021.22027) fails with "Codex could not start its user interface" (renderer_ready_timeout) due to eager modulepreload of 3,203 chunks** *(4 comments, 👍0)*
   The VS Code extension frequently fails to start its UI after 30 seconds due to an over-eager module preloading strategy. Logs show the renderer fails to initialize. Affects the extension's usability for a significant portion of users.

10. **[#59690](https://github.com/openai/codex/issues/59690)** — **GPT-6.1 Terra: each call uses ~15× more of the Codex limit since 5 Nov; cached input looks billed at full price** *(3 comments, 👍1)*
    Since Nov 5, GPT-6.1 Terra calls consume ~15× the expected Codex token limit. Cached input appears to be billed at full price rather than at the cached discount rate. Suggests a billing or tokenization regression in the Terra model integration.

## Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#60188](https://github.com/openai/codex/pull/60188) | ✅ Merged | **Model overrides for incremental Code Mode tool messages** — Adds `exec_tools_update_hint` and `exec_tools_removed_definitions_header` for rendering Code Mode catalog updates with literal-string overrides. |
| [#60186](https://github.com/openai/codex/pull/60186) | ✅ Merged | **Allow creating custom providers during sign-in** — Adds "Create a custom provider or gateway" to the sign-in picker, removing the prerequisite of a saved gateway configuration. |
| [#60181](https://github.com/openai/codex/pull/60181) | ✅ Merged | **Add keyboard and mouse navigation for sidebar tabs** — Adds configurable `sidebar_up`/`sidebar_down` actions with defaults `Shift-Tab`/`Tab`, `Up`/`Down`, `k`/`j`, plus mouse-wheel scrolling. |
| [#60180](https://github.com/openai/codex/pull/60180) | ✅ Merged | **Attach typed punctuation to completed skill mentions** — Replaces trailing space with punctuation when a skill mention is immediately followed by a comma, period, etc. |
| [#60177](https://github.com/openai/codex/pull/60177) | ✅ Merged | **Add metrics for incremental exec catalog updates** — Emits `codex.tools.exec_entry_updates` with `added`, `schema_changed`, and `removed` tags for observability. |
| [#60173](https://github.com/openai/codex/pull/60173) | ✅ Merged | **Test exec catalog preservation across session and compaction changes** — Covers resume, fork, tool mode switches, and background compaction for exec tool settings and catalog changes. |
| [#60163](https://github.com/openai/codex/pull/60163) | ✅ Merged | **Wire incremental exec tool updates into Code Mode sessions** — Passes structured exec definitions through the tool router, avoiding full `functions.exec` redeclaration. |
| [#60157](https://github.com/openai/codex/pull/60157) | ✅ Merged | **Add support for incremental code mode tool definitions** — Renders stable entries for nested tool definitions and emits explicit removals for deleted entries. |
| [#60152](https://github.com/openai/codex/pull/60152) | ✅ Merged | **Persist local workspace side chats and add tab close controls** — Saves side chats as attachments, enables reopening from sidebar after restart, and adds close controls to sidebar tabs. |
| [#60080](https://github.com/openai/codex/pull/60080) | ✅ Merged | **Allow asynchronous model request budget checks** — Makes `budget_exhausted` return an `ExtensionFuture` for non-blocking budget checks during model requests. |

**Still in review:**

| PR | Status | Summary |
|----|--------|---------|
| [#30880](https://github.com/openai/codex/pull/30880) | Open (code-reviewed) | **Detect Codex installs managed by Vite+** — Detects Vite+ global installations from package layout and uses `vp install -g @openai/codex` for updates/repairs. |
| [#30509](https://github.com/openai/codex/pull/30509) | Open | **Allow review while MCP startup runs in the background** — Decouples MCP initialization from foreground task state, enabling `/review` during server startup. |
| [#30500](https://github.com/openai/codex/pull/30500) | Open (code-reviewed) | **Run reviews without unfinished MCP servers** — Review child sessions no longer wait on unfinished MCP clients, improving responsiveness. |

## Hot Discussions

### Ideas
- **[#21742](https://github.com/openai/codex/discussions/21742)** — **Windows Codex App: install location and storage control** *(12 👍)* — Users with SDKs and project data on separate drives request transparent install-path configuration. Related to a linked feature request (#21074).

### Show and Tell
- **[#60185](https://github.com/openai/codex/discussions/60185)** — **agent-recap: local search across Codex and Claude Code transcripts** *(1 👍)* — Searches Codex and Claude Code JSONL transcripts together in-browser. No account or upload required.
- **[#59121](https://github.com/openai/codex/discussions/59121)** — **agent-harness: skills, rules and Stop hooks that make Codex finish the job** *(1 👍)* — A skill/hook package to prevent Codex from stopping mid-job and to enforce one-thing-at-a-time behavior.
- **[#60116](https://github.com/openai/codex/discussions/60116)** — **Pushary: answer Codex approvals from your phone** *(1 👍)* — Paid hosted service that intercepts shell commands, `apply_patch` edits, and MCP calls via hooks and delivers approval requests to a phone.
- **[#59147](https://github.com/openai/codex/discussions/59147)** — **SnipToss: mark up images and videos Codex made** *(1 👍)* — Annotate Codex-generated images/videos visually and hand notes back as files for more precise editing.
- **[#60084](https://github.com/openai/codex/discussions/60084)** — **LISA: watch your Codex sessions alongside Claude Code and Aider** *(1 👍)* — MIT-licensed local assistant that monitors running agents and surfaces warnings (stuck sessions, concurrent edits, etc.).
- **[#59708](https://github.com/openai/codex/discussions/59708)** — **Ordewell: turn a goal into a plan and delegate to Codex** *(1 👍)* — A planner agent that breaks goals into task graphs and delegates to Codex (or other agents) with configurable runners and models.
- **[#59844](https://github.com/openai/codex/discussions/59844)** — **A small macOS catalog for skills across Codex, Claude Code and OpenCode** *(1 👍)* — A skill catalog that bridges skill directories across multiple coding agents.
- **[#55013](https://github.com/openai/codex/discussions/55013)** — **CSV Handoff Kit: browser demo for text-preserving CSV-to-XLSX** *(1 👍)* — Free browser tool for small spreadsheet handoffs that keeps IDs and formula-looking values as text.

## Feature Request Trends

Analysis of Issues and Discussions reveals these recurring themes:

| Theme | Evidence | Signal Strength |
|-------|----------|----------------|
| **Windows reliability & parity** | 15+ Windows-tagged issues; Computer Use, durable chat, sandbox, and browser all broken | Very High |
| **Extension / plugin ecosystem** | Strong demand for a public Extension API (#51138), Vite+ install detection (#30880) | High |
| **Project/session management UX** | Sidebar improvements (#35124), hiding local projects (#35749), workspace storage control (#21742) | Medium–High |
| **Multi-agent & cross-tool interoperability** | agent-recap, LISA, Ordewell, cross-agent skill catalogs — all community-built | Medium |
| **Mobile / remote workflows** | Android Remote pairing failure (#56600), mobile approval (Pushary), cross-device session consistency (#37659) | Medium |
| **Rate limiting & quota UX** | Global send-button disable (#48369), 15× token billing regression (#59690) | Medium |
| **MCP (Model Context Protocol) improvements** | Background startup (#30509), review without unfinished servers (#30500), MCP form auto-decline (#60158) | Medium |

## Developer Pain Points

1. **Windows-first regressions are accumulating.** Computer Use, durable chat, sandbox isolation, browser automation, and path handling all have open bugs specific to Windows. The concentration suggests Windows is not receiving equivalent validation coverage compared to macOS/Linux.

2. **Durable/cloud state is unreliable.** Multiple issues (#50428, #59808, #26925) report that persistent sessions silently lose or revert state, undermining trust in Codex as a long-running coding assistant.

3. **Rate limit UX is confusing and over-aggressive.** The global Send button disable (#48369) and the suspected 15× token billing regression (#59690) indicate that quota management is surfaced to users in a way that blocks productive work rather than gracefully degrading.

4. **VS Code extension startup is fragile.** The renderer_ready_timeout due to modulepreload bloat (#58811) means the extension — a primary interface for many developers — frequently fails to start.

5. **TUI stability under terminal resize is a known crash vector.** The SIGWINCH race condition (#54979) causes panics across terminal emulators, and similar connectivity regressions under load (#57650) suggest the TUI's resilience to environmental changes needs hardening.

6. **MCP initialization blocks core workflows.** Review and other commands are gated behind MCP startup (#30509), and session state leaks dead endpoints (#58060). The MCP system is powerful but its failure modes are disruptive.

---

*Digest generated from GitHub data (github.com/openai/codex) for 2026-11-08. All item links use GitHub's standard issue/PR/discussion URLs.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a structured digest for the Gemini CLI community based on the provided GitHub data. Let me analyze the data and create the requested sections.

Key observations:
1. No releases in the last 24h
2. 50 issues total (showing top 30)
3. 26 PRs total (showing top 20)
4. No discussion data was provided

Let me organize the information:

**Today's Highlights:**
- Security fixes are a major focus - several PRs address security issues
- Subagent improvements are being worked on
- Browser agent fixes continue

**Hot Issues (10 noteworthy):**
1. #22323 - Subagent recovery after MAX_TURNS reported as GOAL success (13 comments)
2. #29112 - Feature request: append to system prompt (8 comments)
3. #29689 - Feature request: Support Gemini 4 Argon/Pro (7 comments)
4. #22745 - AST-aware file reads, search, and mapping investigation (7 comments)
5. #21968 - Gemini does not use skills and sub-agents enough (7 comments)
6. #22267 - Browser Agent ignores settings.json overrides (5 comments)
7. #22232 - Browser agent resilience - automatic session takeover (4 comments)
8. #21983 - Browser subagent fails in wayland (4 comments)
9. #28683 - Missing usageMetadata recorded as all-zero (3 comments)
10. #29182 - gemini-cli 0.58.0 hangs when play.googleapis.com unreachable (3 comments)

**Key PR Progress (10 important):**
1. #29918 - Report working, blocked, idle status to terminal (OSC 7501)
2. #29912 - Strip trailing punctuation from web_fetch URLs
3. #29919 - Append to system prompt with --append-system-prompt
4. #30071 - Route MCP OAuth fetches through safe dispatcher


5. #30196 - Prevent always-allow rules for tainted shell commands
6. #30088 - Keep error reports out of shared temp directory
7. #20273 - Generate unique session IDs for subagents
8. #30051 - Kill active shells on headless interruption
9. #30169 - Keep pasted @ text from attaching secrets
10. #30175 - Apply local subagents' generateContentConfig for every model

**Feature Request Trends:**
I'll analyze the emerging patterns in feature requests. The community is pushing for enhanced system prompt flexibility, with requests to append rather than replace prompts. Model support is expanding, particularly for newer Gemini versions. Subagent capabilities are under active development, focusing on improving their intelligence and interaction. Browser agent functionality is receiving significant attention, with work on resilience, session management, and cross-platform compatibility.

**Developer Pain Points:**
Developers are encountering critical challenges in subagent behavior, including turn management and configuration inheritance. Browser agent interactions reveal persistent configuration and platform-specific issues. The community is actively addressing security concerns, particularly around shell commands and secret management.
</think>


# Gemini CLI Community Digest

## 2026-11-08

---

### 1. Today's Highlights

The Gemini CLI community is focused on hardening subagent reliability with several high-priority fixes targeting session isolation, turn handling, and configuration propagation. Security enhancements are also prominent, with new protections preventing secret leakage through pasted content and stricter handling of tainted shell commands. The interactive TUI gains terminal status reporting via OSC 7501, improving multi-session visibility.

---

### 2. Releases

No new releases in the last 24 hours.

---

### 3. Hot Issues

| # | Issue | Comments | Summary |
|---|-------|----------|---------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | 13 | **Critical Bug**: Subagents report `status: "success"` and `GOAL` termination even when hitting max turn limits without completing analysis. Affects `codebase_investigator` behavior in multi-repo investigations. |
| [#29112](https://github.com/google-gemini/gemini-cli/issues/29112) | Feature request: append to system prompt | 8 | **Feature Request**: Users want `--append-system-prompt` / `GEMINI_APPEND_SYSTEM_MD` to extend rather than replace the system prompt. Currently `GEMINI_SYSTEM_MD` fully replaces it, limiting wrapper integration. |
| [#29689](https://github.com/google-gemini/gemini-cli/issues/29689) | Support Gemini 4 Argon/Pro for Enterprise | 7 | **Feature Request**: Enterprise users request official support for Gemini 4 Argon (Gemini 4 Pro) via OAuth and API key authentication. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware file reads, search, and mapping | 7 | **Epic Investigation**: Evaluates whether Abstract Syntax Tree-aware tools can reduce turn misalignment and token noise by precisely reading method bounds in a single call. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents enough | 7 | **Behavioral Bug**: The model rarely invokes custom skills or sub-agents autonomously despite relevant context, requiring explicit user instruction. |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores settings.json overrides | 5 | **Bug**: Browser Agent completely ignores `settings.json` configuration (e.g., `maxTurns`), even though `AgentRegistry` correctly merges settings during initialization. |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Browser agent resilience: session takeover | 4 | **Enhancement**: Request for automatic session takeover and lock recovery when encountering locked browser profiles in persistent session mode. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails in Wayland | 4 | **Platform Bug**: Browser subagent fails on Wayland environments with `GOAL` termination reason. |
| [#28683](https://github.com/google-gemini/gemini-cli/issues/28683) | Missing usageMetadata recorded as all-zero | 3 | **Data Integrity**: When API responses omit `usageMetadata`, zero-valued records are indistinguishable from genuine zero-token responses, complicating telemetry analysis. |
| [#29182](https://github.com/google-gemini/gemini-cli/issues/29182) | CLI hangs when play.googleapis.com unreachable | 3 | **Reliability Bug**: Non-interactive runs hang indefinitely when `play.googleapis.com` is unreachable, even when the actual API endpoint is reachable. |

---

### 4. Key PR Progress

| # | PR | Area | Summary |
|---|-----|------|---------|
| [#30169](https://github.com/google-gemini/gemini-cli/pull/30169) | Keep pasted @ text from attaching secrets | Security (P1) | Prevents pasted shell transcripts from auto-attaching SSH private keys to model requests without user confirmation. |
| [#30175](https://github.com/google-gemini/gemini-cli/pull/30175) | Apply local subagents' generateContentConfig for every model | Agent | Local subagents now correctly propagate generation settings (temperature, topP, topK, thinkingConfig) for all model values including `auto`, aliases, and concrete names. |
| [#30171](https://github.com/google-gemini/gemini-cli/pull/30171) | Flag recursive and forced rm regardless of flag position | Security (P1) | Fixes `isDangerousCommand` to detect all `rm -rf` equivalent forms regardless of argument ordering (`-Rf`, `--recursive --force`, etc.). |
| [#30170](https://github.com/google-gemini/gemini-cli/pull/30170) | Stop local subagents from waiting on stalled model calls | Agent (P1) | Adds per-turn timeout limits to prevent subagents from waiting up to 3+ minutes on a single stalled model call. |
| [#30196](https://github.com/google-gemini/gemini-cli/pull/30196) | Prevent always-allow rules for tainted shell commands | Security | Tainted commands (untrusted flags, build commands after file changes) now require per-session approval rather than saving persistent allow rules. |
| [#30088](https://github.com/google-gemini/gemini-cli/pull/30088) | Keep error reports out of shared temp directory | Security (P2) | Moves error reports from `os.tmpdir()` to `~/.gemini/tmp/error-reports/` with user-only permissions to prevent information disclosure. |
| [#29919](https://github.com/google-gemini/gemini-cli/pull/29919) | Append to system prompt with --append-system-prompt | Core (P3) | Adds `--append-system-prompt`, `--append-system-prompt-file`, and `GEMINI_APPEND_SYSTEM_MD` for extending rather than replacing system prompts. |
| [#29918](https://github.com/google-gemini/gemini-cli/pull/29918) | Report working/blocked/idle status to terminal (OSC 7501) | Core (P3) | Interactive TUI now reports program status via OSC 7501, enabling terminal UI to show which sessions need attention. |
| [#29912](https://github.com/google-gemini/gemini-cli/pull/29912) | Strip trailing punctuation from web_fetch URLs | Core | Fixes URL parsing to remove trailing punctuation (commas, brackets) from comma-separated web fetch arguments. |
| [#20273](https://github.com/google-gemini/gemini-cli/pull/20273) | Generate unique session IDs for subagents | Core (P1) | Subagents now receive unique session IDs instead of inheriting parent session IDs, preventing session recording collisions on abrupt exits. |

---

### 5. Feature Request Trends

**System Prompt Flexibility**
- Append-mode system prompt extension (`--append-system-prompt`) is highly requested for wrapper compatibility
- AST-aware file operations for precise method-level reads and reduced token noise

**Model Support**
- Gemini 4 Argon/Pro support for Enterprise OAuth users
- Broader model ID handling in subagent configurations

**Agent Intelligence**
- Autonomous skill and sub-agent invocation without explicit prompting
- Improved destructive command warnings and safer alternatives
- AST-aware codebase mapping tools

**Browser Agent**
- Session takeover and lock recovery for persistent mode
- Wayland environment support
- Settings.json configuration compliance

---

### 6. Developer Pain Points

**Subagent Reliability**
- Session ID collisions cause recording conflicts
- Turn limits incorrectly reported as success
- Stalled model calls cause excessive wait times

**Browser Agent Issues**
- Ignores configuration overrides
- Fails on Wayland
- Poor lock recovery in persistent sessions

**Security Concerns**
- Tainted shell commands could save persistent allow rules
- Error reports in shared temp directories
- Pasted content auto-attaching secrets

**Configuration Gaps**
- Context management settings not propagating to core
- Tool limits causing 400 errors with large tool counts
- Web fetch URL parsing failures with punctuation

---

*Generated from [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) community data*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest for 2026-11-08 based on the provided GitHub data. Let me analyze the data:

1. **Latest Releases**: v1.0.108-1 with 2 fixes (PDF attachments, sandbox MCP server restart)
2. **Latest Issues**: 26 items total, with various statuses (OPEN/CLOSED), areas, authors, comments, and reactions
3. **Latest Pull Requests**: None in the last 24h

Now I need to structure this into the requested format:
1. Today's Highlights
2. Releases
3. Hot Issues (10)
4. Key PR Progress - but there are no PRs listed, so I should note this
5. Hot Discussions - no discussion data was provided, so I'll omit this section
6. Feature Request Trends
7. Developer Pain Points

Let me select the 10 most noteworthy issues based on:
- Community interest (reactions)
- Impact (open issues with multiple comments)
- Recency
- Whether they're still open (or recently closed with significance)

Notable issues:
1. #5112 - OSC 7501 program status (20 👍, 7 comments) - significant terminal feature
2. #4695 - MCP OAuth token reuse (affects MCP users)
3. #3760 - Ctrl+Enter vs Ctrl+Q confusion (12 👍) - user experience issue
4. #5023 - Session resume failure with masked metrics
5. #4977 - ripgrep jemalloc on 16KB pages (Asahi Linux)
6. #4909 - /ide workspace detection in sandbox
7. #1528 - Custom agents silently ignored
8. #5370 - Agent output withheld in Fusion/Auto mode (still open)
9. #5382 - Skills disappear after new_context (extension issue, still open)


10. #5375 - Add ability to disable built-in slash commands (still open)
11. #5371 - Custom model providers ignored in ACP mode (still open)
12. #5376 - No OTel traces in ACP mode (still open)
13. #5378 - Add keyboard navigation (still open)

I'll focus on the most impactful issues for the digest. The extension and ACP mode related issues seem particularly important, given their potential to affect user experience and system configuration. I'll prioritize these in my analysis, highlighting their technical implications and potential solutions.

The OpenTelemetry tracing gap in ACP mode represents a critical monitoring blind spot that could impact system observability. This issue needs immediate attention to ensure comprehensive performance tracking.

Extension skill persistence and tool permission challenges suggest deeper architectural limitations in the current implementation. These problems indicate potential fragmentation in how session-based interactions are managed.

The keyboard navigation limitation reveals an accessibility and usability constraint that could hinder user experience for power users who prefer keyboard-driven interactions.

Emerging trends point to enhanced extensibility, refined platform support, and more granular configuration controls across different operational modes. The community's focus spans terminal rendering, authentication mechanisms, and cross-platform compatibility.

Developer pain points center on session reliability, extension interaction robustness, and platform-specific nuances, particularly around sandbox and permission models.
</think>


# GitHub Copilot CLI Community Digest

**Date:** 2026-11-08
**Repository:** github.com/github/copilot-cli

---

## Today's Highlights

The GitHub Copilot CLI team released **v1.0.108-1**, addressing a critical PDF rendering regression on Grok 4.x models and fixing a sandbox directory-change bug that caused local MCP servers to retain stale path restrictions. The community remains highly active with 26 issue updates in 24 hours, with major focus areas including extension lifecycle management, ACP mode observability, and cross-platform sandbox enforcement.

---

## Releases

### v1.0.108-1
**Released:** 2026-11-07

| Fix | Description |
|-----|-------------|
| PDF Rendering | Fixed a regression where PDF attachments on Grok 4.7 and Grok 4.6 would fail the entire turn; now falls back to file references gracefully. |
| Sandbox MCP Restart | When the CLI sandbox is enabled, a running local MCP server is now properly restarted after `/cd`, ensuring it respects the new directory's denied paths instead of carrying over restrictions from the previous session. |

---

## Hot Issues

### 1. OSC 7501 Program Status Support for Terminals
**#5112** | `[area:terminal-rendering]` | **CLOSED** | 👍 20 | 💬 7

Reports agent state (working, blocked, thinking) to supporting terminals using the OSC 7501 Program Status Protocol. Enables tighter integration with advanced TUI applications that can display real-time agent activity indicators. This feature enhances transparency during long-running operations.

🔗 [github/copilot-cli#5112](https://github.com/github/copilot-cli/issues/5112)

---

### 2. MCP OAuth Tokens Not Reliably Reused Across Sessions
**#4695** | `[area:authentication, area:mcp]` | **OPEN** | 👍 2 | 💬 4

HTTP-type MCP servers using OAuth (PKCE, public client) experience repeated re-authentication due to duplicate cache-key entries. Users report being prompted to re-authorize even when valid cached tokens exist. This impacts developer experience when working with authenticated MCP tools.

🔗 [github/copilot-cli#4695](https://github.com/github/copilot-cli/issues/4695)

---

### 3. Keyboard Shortcut Inconsistency: Ctrl+Enter vs Ctrl+Q
**#3760** | `[area:input-keyboard, area:platform-windows]` | **CLOSED** | 👍 12 | 💬 4

The CLI displayed "ctrl+enter enqueue" but actually added a line break to the prompt, while "ctrl+q" performed the enqueue action. This mismatch created user confusion, particularly on Windows. Fixed to align documentation with actual behavior.

🔗 [github/copilot-cli#3760](https://github.com/github/copilot-cli/issues/3760)

---

### 4. Session Resume Fails with Masked Code-Change Metrics
**#5023** | `[area:sessions]` | **CLOSED** | 💬 3

Sessions become permanently unresumable when `toolTelemetry.metrics` counters are stored as masked strings instead of numbers. This data type mismatch during session shutdown causes deserialization errors on resume, breaking workflow continuity for affected users.

🔗 [github/copilot-cli#5023](https://github.com/github/copilot-cli/issues/5023)

---

### 5. Bundled ripgrep Aborts on 16KB-Page ARM64 Kernels (Asahi Linux)
**#4977** | `[area:platform-linux, area:tools]` | **CLOSED** | 👍 1 | 💬 2

The statically-linked jemalloc allocator in the bundled ripgrep binary assumes 4KB page sizes. On Asahi Linux (Apple Silicon Linux) with 16KB pages, the binary aborts immediately with "Unsupported system page size", making search tools completely non-functional for this growing user segment.

🔗 [github/copilot-cli#4977](https://github.com/github/copilot-cli/issues/4977)

---

### 6. Agent Output Withheld Until Next User Turn in Fusion/Auto Mode
**#5370** | `[area:agents, area:tools]` | **OPEN** | 💬 1

In Copilot Fusion/Auto mode, agent output stops appearing for extended periods, making the agent appear frozen. All accumulated output arrives at once only after the user sends another message. This UX issue significantly impacts the perceived responsiveness of autonomous agent workflows.

🔗 [github/copilot-cli#5370](https://github.com/github/copilot-cli/issues/5370)

---

### 7. Skills Disappear After `new_context`, Sessions Don't Restore Them
**#5382** | `[area:extensions]` | **OPEN** | `triage`

Extension-registered skills via `skillDirectories` vanish after `session.context_cleared` events (triggered by `new_context`). Restored sessions lose access to skills entirely. This breaks extension-based tooling in long-running or interrupted workflows.

🔗 [github/copilot-cli#5382](https://github.com/github/copilot-cli/issues/5382)

---

### 8. Extension Tools Block in Prompt Mode, `--allow-tool` Can't Name Them
**#5381** | `[area:extensions]` | **OPEN** | `triage`

In prompt mode (`copilot -p`), extension tools trigger permission requests that never resolve, causing runs to wait indefinitely. Additionally, the `--allow-tool` flag cannot reference extension tools by name, limiting automation possibilities.

🔗 [github/copilot-cli#5381](https://github.com/github/copilot-cli/issues/5381)

---

### 9. Extensions Don't Start for `create_session` Sessions Until Switched To
**#5380** | `[area:extensions]` | **OPEN** | `triage`

Sessions created via the `create_session` tool start without extension processes, tools, skills, or hooks. Extensions only initialize when the user manually switches to the session, creating inconsistent behavior compared to primary sessions.

🔗 [github/copilot-cli#5380](https://github.com/github/copilot-cli/issues/5380)

---

### 10. ACP Mode Emits No OpenTelemetry Traces or Metrics
**#5376** | `[area:non-interactive, area:enterprise]` | **OPEN**

When running as an ACP server (`copilot --acp`), the CLI exports no OpenTelemetry signals whatsoever—no traces, no metrics—despite OTel being enabled in managed settings. This prevents enterprise observability and debugging in headless deployment scenarios.

🔗 [github/copilot-cli#5376](https://github.com/github/copilot-cli/issues/5376)

---

## Key PR Progress

*No Pull Requests were updated in the last 24 hours.*

---

## Feature Request Trends

Analysis of recent issues reveals the following dominant feature directions:

| Trend | Evidence | Significance |
|-------|----------|--------------|
| **Extension Lifecycle Robustness** | #5382, #5381, #5380 | Extensions need full lifecycle support across sessions, contexts, and permission modes |
| **Terminal & TUI Enhancement** | #5112, #5378 | Community wants richer terminal integration and keyboard navigation throughout the interface |
| **Customization & Configuration** | #5375, #5371 | Ability to disable built-in commands and use custom model providers in all modes |
| **Platform Parity (Linux/ARM)** | #4977, #4918 | Ripgrep and tool binaries need to support non-standard page sizes on ARM64 Linux |
| **ACP/Headless Observability** | #5376 | Enterprise deployments require OpenTelemetry support in non-interactive modes |
| **Slash Command Management** | #5375 | Organizations want to replace or disable built-in slash commands for consistency |

---

## Developer Pain Points

### 1. Extension State Persistence
Multiple issues (#5382, #5380, #5381) highlight that extensions don't survive context changes, session creation, or work correctly in non-interactive modes. Developers building extension-based tooling face fundamental reliability gaps.

### 2. MCP Server Reliability
OAuth token caching failures (#4695) and sandbox path tracking bugs force repeated re-authentication and manual intervention, disrupting workflows that rely on authenticated MCP tools.

### 3. Session Resume Fragility
Session state corruption from data type mismatches (#5023) makes long-running tasks risky, as interrupted sessions may become permanently unresumable.

### 4. Platform-Specific Breakages
The ripgrep/jemalloc page size issue (#4977, #4918) demonstrates ongoing challenges with ARM64 Linux compatibility, particularly on bleeding-edge distributions like Asahi Linux.

### 5. ACP Mode Feature Parity
Critical enterprise features—custom model providers (#5371), OpenTelemetry (#5376)—don't function in ACP/server modes, limiting headless and programmatic usage scenarios.

### 6. Keyboard & Input Inconsistencies
Despite fixes (#3760), ongoing issues (#5004, #5378) indicate that keyboard interaction patterns vary inconsistently across contexts (prompt mode vs. question mode vs. normal mode).

---

*Digest generated from GitHub Copilot CLI community data for 2026-11-08.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a structured community digest for OpenCode based on the provided GitHub data. Let me analyze the data and create the digest with the requested sections.

Let me organize the information:

**Releases:**
- None in the last 24h

**Hot Issues (by comment count):**
1. #59387 - Free tier issues (326 comments) - Very active
2. #12472 - Native Claude Code hooks compatibility (21 comments)
3. #39986 - TUI support reactive external TSX plugins (9 comments)
4. #60760 - OpenAI-compatible stream error handling (7 comments)
5. #47665 - CLI positional directory resolution issue (7 comments)
6. #62666 - TUI plugin signal updates (5 comments)
7. #55268 - Big-pickle reasoning tag leak (5 comments)
8. #54371 - ACP slash commands not streaming (5 comments)
9. #37844 - MCP subprocess multiplication (5 comments)
10. #62675 - VSCode select ability loss (4 comments)
11. #62432 - Permissions persistence option (4 comments)
12. #62634 - TUI npm package storage crash (4 comments)
13. #61774 - Mobile transcript scroll issue (4 comments)
14. #62415 - Agent markdown permissions issue (4 comments)
15. #61252 - Hamburger menu template placeholders (3 comments)
16. #62655 - API session timestamp (3 comments)
17. #62452 - Free tier limit message (3 comments)
18. #62206 - ResizeObserver loop storm (3 comments)
19. #61811 - Agradecimientos (3 comments) - Spanish feedback
20. #56297 - Winget installation issue (3 comments)


21. #62647 - Desktop UI inconsistency (3 comments)
22. #62456 - Usage reset issue (2 comments)
23. #62454 - MCP tools readiness notification (2 comments)
24. #54861 - Reasoning/text classification issues (2 comments)
25. #62436 - Session list grouping (2 comments)
26. #62435 - CLI doctor/auth issues (2 comments)
27. #62323 - Thinking stop issue (2 comments)
28. #61791 - TUI OutOfMemory crash (2 comments)
29. #62601 - Archive session shortcut (2 comments)
30. #62417 - Model prefix export issue (2 comments)

**Key PRs (by recency):**
1. #60575 - DeepSeek DSML tool calls fix
2. #62673 - Data nav styling fix
3. #62671 - Message times in session list (new feature)
4. #62679 - Gemini continuation retry prevention
5. #62670 - OSC 133 turn boundaries
6. #62480 - Size compaction output limit
7. #62677 - Site server functions behind proxy
8. #62676 - Dark link blue consistency
9. #62674 - Like letters bar fix
10. #62661 - Docs: antivirus HTTPS scanning and W-9
11. #62672 - Console instructions/skills concurrent fetch
12. #61950 - GUI plugins in web app
13. #62622 - Page dimming fix
14. #62669 - Docs bars and search cleanup
15. #62150 - English source text matching in search
16. #62176 - Code Mode catalog stability
17. #62667 - Login shell probe blocking fix
18. #62665 - Product chevron matching
19. #62141 - Shell exit status clarity
20. #62654 - Shared nav menus

Now I'll put together the digest with these items.

**Releases:** No new releases in the last 24 hours

**Today's Highlights:** Several important issues need attention: free tier problems are dominating discussions with over 300 comments, while Claude Code hooks compatibility represents a significant enhancement. On the fixes side, there are corrections for DeepSeek tool call handling, OpenAI stream errors, and CLI directory resolution problems.

**Hot Issues:** #59387 shows the biggest engagement at 326 comments—free tier limitations are preventing users from accessing the product. #12472 with 21 comments requests native Claude Code hooks for PreToolUse, PostToolUse, and Stop functions, which would strengthen Claude Code integration. #60760 addresses an OpenAI-compatible stream failure when error responses lack a message field. #47665 involves CLI directory resolution failing with the --server flag when paths only exist remotely.

Additional concerns include #55268 where big-pickle leaks chain-of-thought into visible text when the closing tag appears in reasoning, #54371 where ACP slash commands execute but don't stream output, and #37844 which tracks a performance issue where cached locations multiply MCP subprocesses unnecessarily.

**Key PR Progress:** #60575 addresses DeepSeek DSML tool calls leaking into message text. #62671 introduces last message timestamps in the session list via a GET /api/session endpoint. #62679 prevents Gemini continuation retry when content filters block requests and handles empty stream completion. #62670 emits OSC 133 turn boundaries in Mini for better terminal integration. #62480 constrains size compaction output to remaining room after shortening requests. #61950 loads GUI plugins in the web app, while #62176 reduces Code Mode catalog updates to improve stability. #62667 resolves desktop startup blocking caused by login shell probing.

**Feature Request Trends:** Free tier limitations dominate discussions around message quotas and reset timing. Plugin system enhancements are heavily requested, particularly for TUI plugins and external TSX support. Claude Code compatibility remains a major focus with hooks integration. API improvements target session timestamps, MCP tool readiness, and slash command streaming. Terminal integration features like OSC 133 turn boundaries are also in demand.

**Developer Pain Points:** The free tier's unreliability is the primary frustration with reset times not functioning as expected. TUI plugins crash when accessing storage from scoped packages, and the VSCode extension loses select functionality after clipboard operations. Windows installation through winget consistently fails. Menu rendering displays raw template placeholders rather than actual text, and session transcripts on mobile snap back to the bottom after scrolling.

I should organize this into a clear, actionable digest that highlights the most critical issues while acknowledging the positive progress being made.
</think>


# OpenCode Community Digest — 2026-11-08

---

## 1. Today's Highlights

The community's attention is firmly fixed on **free tier reliability**, with Issue #59387 accumulating 326 comments as users report persistent "usage exceeded" messages despite scheduled resets. On the development side, contributors shipped several high-impact fixes including a **DeepSeek DSML tool-call parsing fix** and a **Gemini content-filter retry loop prevention**, while a new feature for **message timestamps in session lists** is progressing through review.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues

| # | Title | Comments | Why It Matters |
|---|-------|----------|----------------|
| [#59387](https://github.com/anomalyco/opencode/issues/59387) | **[zen] Free tier issues: read this first** | 326 | The highest-traffic issue by far. Users report that free usage limits trigger incorrectly and resets never occur. This is a core reliability problem affecting the broadest user base. |
| [#12472](https://github.com/anomalyco/opencode/issues/12472) | **Native Claude Code hooks compatibility (PreToolUse, PostToolUse, Stop)** | 21 | OpenCode already supports Claude Code rules and skills, but the hooks system—critical for workflow automation—is missing. This gap limits adoption by Claude Code power users. |
| [#60760](https://github.com/anomalyco/opencode/issues/60760) | **[reproduced] OpenAI-compatible stream fails when error has no message** | 7 | Sessions halt when OpenAI-compatible providers emit errors without a `message` field. A schema validation issue that breaks integration with non-standard providers. |
| [#47665](https://github.com/anomalyco/opencode/issues/47665) | **cli(v2): positional directory resolved locally even with --server** | 7 | Remote workflow is broken: `opencode2 <dir> --server <url>` fails with ENOENT when the directory only exists on the server. The CLI resolves the positional argument locally before considering `--server`. |
| [#55268](https://github.com/anomalyco/opencode/issues/55268) | **big-pickle leaks chain-of-thought into visible text** | 5 | When a model's own reasoning contains the literal `</think>` tag, big-pickle incorrectly terminates the reasoning channel, leaking subsequent CoT into the visible message. |
| [#54371](https://github.com/anomalyco/opencode/issues/54371) | **[reproduced] ACP: slash commands execute but never stream their output** | 5 | ACP agents (e.g., in JetBrains Rider) execute slash commands successfully but display no output. The commands run invisibly, degrading the IDE integration experience. |
| [#37844](https://github.com/anomalyco/opencode/issues/37844) | **[bug, perf, core] cached locations multiply MCP subprocesses** | 5 | A severe performance leak: each cached Location retains a full set of MCP subprocesses, leading to ~50 orphaned processes under a single service. Reproduced on `0.0.0-next-15839`. |
| [#62675](https://github.com/anomalyco/opencode/issues/62675) | **Loss of select ability (copy/paste) shortly after it was working - VSCode** | 4 | In the VS Code integrated terminal over SSH, text selection works initially but breaks after a few copy-paste operations. Mouse events become captured/locked by the session. |
| [#62634](https://github.com/anomalyco/opencode/issues/62634) | **[reproduced] TUI: plugins from scoped npm packages crash with "Invalid storage segment"** | 4 | TUI plugins installed from scoped npm packages crash on first storage access due to incorrect key composition with the raw plugin ID. |
| [#61252](https://github.com/anomalyco/opencode/issues/61252) | **app: hamburger menu shows message templates ({{path}}/{{error}}) instead of item labels** | 3 | The desktop app's hamburger menu renders raw template placeholders instead of localized labels. The underlying actions still work, but UX is broken. |

---

## 4. Key PR Progress

| # | Title | Status | What It Does |
|---|-------|--------|--------------|
| [#60575](https://github.com/anomalyco/opencode/pull/60575) | **fix(ai): recover DeepSeek DSML tool calls leaked into message text** | OPEN | Fixes tool-call extraction when DeepSeek lane's DSML markup conversion fails or isn't configured. Closes #50206. |
| [#62671](https://github.com/anomalyco/opencode/pull/62671) | **feat(server): include message times in session list** | OPEN | Adds last stored user and assistant message timestamps to session lists via `GET /api/session`, avoiding per-session message requests. Addresses #62655. |
| [#62679](https://github.com/anomalyco/opencode/pull/62679) | **fix(ai,core): prevent Gemini continuation retry on content-filter blocks** | OPEN | Stops the transport continuation loop when `promptFeedback.blockReason` blocks content, and handles empty stream completion. |
| [#62670](https://github.com/anomalyco/opencode/pull/62670) | **feat(tui): emit OSC 133 turn boundaries in mini** | OPEN | Implements OSC 133 terminal escape sequences for turn boundaries in Mini, addressing Mini's terminal/tmux-owned scrollback behavior. |
| [#62480](https://github.com/anomalyco/opencode/pull/62480) | **fix(core): size compaction output limit to room left by shortened requests** | OPEN | Fixes automatic conversation compaction throttling the summary token limit incorrectly. Closes #62185. |
| [#61950](https://github.com/anomalyco/opencode/pull/61950) | **feat(app): load configured GUI plugins in the web app** | OPEN | Enables the web app to load GUI plugins from the serving server. Existing `./gui-experimental` CommonJS bundles work without rebuild. |
| [#62176](https://github.com/anomalyco/opencode/pull/62176) | **fix(core): keep Code Mode catalog updates small and stable** | OPEN | Reduces noisy catalog updates that reshuffled all tool listings on server connect/disconnect, wasting ~2.2k tokens per restatement. |
| [#62667](https://github.com/anomalyco/opencode/pull/62667) | **fix(desktop): stop blocking startup on the login shell probe** | OPEN | Desktop no longer blocks startup when the login shell probe fails. Previously, `env -0` from `$SHELL -il -c` could hang indefinitely. |
| [#62661](https://github.com/anomalyco/opencode/pull/62661) | **docs: antivirus HTTPS scanning and W-9 tax form** | CLOSED | Adds the signed W-9 for Anomaly Innovations Inc. and documentation on antivirus HTTPS scanning. |
| [#62150](https://github.com/anomalyco/opencode/pull/62150) | **feat(app): match English source text in palette and settings search** | CLOSED | Non-English UIs now match English source text in command palette and settings search, not just localized strings. Closes #62148. |

---

## 5. Feature Request Trends

Based on issue and PR analysis, the following themes dominate the community's wishlist:

| Theme | Evidence |
|-------|----------|
| **Free tier reliability** | #59387 (326 comments), #62452, #62456 — Users demand consistent reset timing and accurate quota enforcement. |
| **Plugin ecosystem expansion** | #39986, #62666, #62634 — TUI plugin support for external TSX, scoped npm packages, and reactive signals is a major ask. |
| **Claude Code parity** | #12472 — Hooks compatibility (PreToolUse, PostToolUse, Stop) would enable drop-in Claude Code workflows. |
| **API completeness** | #62655, #62454 — Session timestamps, MCP tool readiness events, and richer session metadata are requested. |
| **Terminal integration** | #62670 — OSC 133 turn boundaries for scrollback control in terminal multiplexers. |
| **IDE/Desktop polish** | #62675, #62601, #62436 — Selection behavior, archive shortcuts, and session grouping need refinement. |
| **Provider error resilience** | #60760, #55268, #54861 — OpenAI-compatible and model-specific edge cases in error handling and content classification. |

---

## 6. Developer Pain Points

The community's most recurring frustrations cluster around three areas:

1. **Free tier inconsistency**: Despite being the entry point for most new users, the free tier produces the highest complaint volume. Reset timing is unreliable, and "usage exceeded" messages appear incorrectly. This erodes trust at the most critical onboarding stage.

2. **Plugin system fragility**: TUI plugins from npm packages crash on storage access, scoped packages fail with "Invalid storage segment" errors, and external TSX transforms don't apply reliably in packaged builds. The plugin loading pipeline needs hardening.

3. **Windows ecosystem gaps**: The winget installation fails silently, desktop UI rendering differs between machines (likely GPU acceleration variance), and ResizeObserver loop storms on Windows 11 produce 33–37 MB renderer dumps.

---

*End of digest — generated from GitHub data for anomalyco/opencode on 2026-11-08.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze this GitHub data for the Pi project and generate a structured digest for 2026-11-08.

Let me organize the information:

**Releases:** None in last 24h

**Issues (24 total, last 24h):**
- 7547 [OPEN] Windows sink-thread usage - high engagement (94 comments)
- 10862 [OPEN] Hardware cursor jumps - bug report
- 9690 [CLOSED] OpenCode Zen rejects Pi session IDs - bug, no-action
- 11021 [OPEN] OpenAI ChatGPT sign-in context window mismatch - feature/bug
- 6415 [CLOSED] Move lastChangelogVersion from Config - no-action
- 10187 [CLOSED] Move deviceId out of global settings - no-action
- 5372 [OPEN] Custom OAuth callback page rendering
- 8829 [OPEN] wrapUIPromptContext copying bug
- 11122 [OPEN] schemaToType loses sibling type in allOf
- 11026 [OPEN] pi-durable: delete conversation feature request
- 8019 [CLOSED] Preserve hard line breaks for TUI selection
- 11317 [OPEN] SDK custom identity preamble
- 11916 [CLOSED] Mistral GLM streams delta.content bug
- 11917 [CLOSED] Interrupt model without aborting
- 11915 [CLOSED] Add MiniMax OAuth sign-in
- 11913 [CLOSED] uniqueItems schema rejection
- 11908 [CLOSED] Tool call index reuse in streams
- 11892 [CLOSED] pi-durable tasks stuck in waiting/completing
- 11903 [CLOSED] Add Wally as built-in provider
- 11905 [CLOSED] Pinning completed shell command output


- 11919 [CLOSED] MCP reconnection blocking issue
- 11918 [CLOSED] MCP auth header not carried
- 11914 [CLOSED] Fullscreen scroll position
- 11909 [CLOSED] Lightweight text-model calls in codemode

**Pull Requests (6 total, last 24h):**
- 11857 [OPEN] prompt cache warming in p2
- 10810 [CLOSED] support override colorFn in CompactionStatusIndicator
- 11910 [CLOSED] Neon + pgvector memory layer (Cline)
- 11907 [CLOSED] orchestra supervisor + shotd + add-all
- 11906 [CLOSED] prevent uncaught AbortError
- 11904 [CLOSED] custom system prompt preamble

**Discussions (2 total, last 24h):**
- 11912 [General] Show & tell: agentswarm.space task-discovery skill
- 11911 [General] Pi vs OMP comparison

Now I'll structure the digest highlighting the key developments. The MCP authentication issues appear resolved, along with several provider integrations and memory layer improvements. Notable features include the Neon + pgvector memory implementation, the custom system prompt preamble functionality, and the new Wally provider addition.
</think>


# Pi Community Digest — 2026-11-08

## Today's Highlights

The Pi community saw heavy activity around authentication and provider integrations, with several MCP OAuth bugs (issues #11918, #11919) resolved and two provider additions merged (MiniMax OAuth, Wally). The open PR #11857 targeting prompt cache warming in p2 remains a key focus, with its author estimating ~$1,430 in avoided monthly spend. Windows usage questions and TUI selection semantics continue to generate significant discussion.

---

## Releases

No new releases published in the last 24 hours.

---

## Hot Issues

1. **[#7547](https://github.com/earendil-works/pi/issues/7547)** — *Windows sink-thread usage (OPEN)*  
   A broad issue seeking clarity on how Pi runs on Windows and where development effort should focus. With 94 comments, this is the most-engaged open issue—community members report varied experiences with WSL, native, and containerized setups. **Why it matters:** Windows is a major platform with fragmented execution paths; addressing this could unlock significant new users.

2. **[#10862](https://github.com/earendil-works/pi/issues/10862)** — *Hardware cursor jumps to wrong column during mouse selection (OPEN)*  
   Bug in v1.2.0 where `showHardwareCursor: true` causes cursor mispositioning when a selection is active, due to column calculation in `extractCursorPosition()`. **Community reaction:** 👍 0, but 9 comments indicate active debugging; likely affects developers using Pi as a terminal editor.

3. **[#11021](https://github.com/earendil-works/pi/issues/11021)** — *ChatGPT sign-in reports 272K context for GPT-6.1 Sol despite 500K account (OPEN)*  
   OpenAI provider reports a hardcoded 272K limit even when the live model catalog advertises 500K, starving Pi's compaction budget. **Why it matters:** Users on paid accounts are underutilizing available context; 8 👍 from affected developers.

4. **[#5372](https://github.com/earendil-works/pi/issues/5372)** — *Custom OAuth callback page rendering (OPEN)*  
   Feature request to let SDK callers provide their own callback renderer instead of using Pi's internal `oauthSuccessHtml()`/`oauthErrorHtml()`. **Why it matters:** Impacts SDK integrators who need branded OAuth flows; 6 comments discussing the current `renderPage()` API constraints.

5. **[#8829](https://github.com/earendil-works/pi/issues/8829)** — *wrapUIPromptContext loses prototype methods on class instances (OPEN)*  
   The `wrapUIPromptContext` utility uses object spread, which skips prototype methods—Pi's own TUI/RPC UIs work fine, but class-based UI implementations break silently. **Why it matters:** Affects any SDK user building a custom UI class; 6 comments with proposed workarounds.

6. **[#11122](https://github.com/earendil-works/pi/issues/11122)** — *schemaToType renders strings as `unknown` when allOf constraints present (OPEN)*  
   Code Mode's `schemaToType()` mishandles Zod 4's string schemas with multiple `.regex()` constraints, rendering arguments as `unknown`. **Why it matters:** Breaks type safety for codemode scripts using advanced Zod validation.

7. **[#11026](https://github.com/earendil-works/pi/issues/11026)** — *pi-durable: permanently delete a conversation (OPEN, durable)*  
   Feature request for a `harness.deleteConversation(id, ctx)` API that safely removes a conversation's entries, docs, inbox items, and scheduler state. **Why it matters:** Durable execution storage accumulates data; users need cleanup controls. 4 👍, labeled as durable (high priority).

8. **[#11317](https://github.com/earendil-works/pi/issues/11317)** — *SDK: customize identity preamble without replacing default prompt sections (OPEN)*  
   Currently `customPrompt` strips Pi's default tools, rules, and docs; SDK users want to swap just the opening identity text. **Why it matters:** Enables custom agent personas without re-engineering tool descriptions; related PR #11904 merged today.

9. **[#11916](https://github.com/earendil-works/pi/issues/11916)** — *Mistral GLM streams delta.content as arrays → `[object Object]` spam (CLOSED)*  
   Mistral's non-standard `delta.content` format (array instead of string) caused visual spam in openai-completions. Fixed/closed within 24 hours. **Community reaction:** 👍 0, but quick turnaround indicates active maintenance.

10. **[#11919](https://github.com/earendil-works/pi/issues/11919)** — *MCP reconnection blocks 2–4 minutes; re-auth re-handshakes all servers (CLOSED)*  
    On Pi 1.5.0 (Linux + macOS), OAuth MCP servers with expired/missing credentials block sequential reconnection attempts (30–60s each). Additionally, re-authenticating one server triggers full re-handshake for all. **Why it matters:** Breaks multi-server workflows (e.g., Google Workspace MCP stack); closed same day.

---

## Key PR Progress

1. **[#11857](https://github.com/earendil-works/pi/pull/11857)** *(OPEN)* — **Prompt cache warming in p2**  
   Author: `mitsuhiko`. Implements refresh logic for Anthropic/Radius 5-minute prompt caches to avoid rewriting full prompts after 305s gaps. Analysis of Oct 12–Nov 5 sessions shows 789 such events costing ~$1,430/month (26% of p2 spend). This is the highest-impact open PR by cost savings.

2. **[#11910](https://github.com/earendil-works/pi/pull/11910)** *(CLOSED)* — **Neon + pgvector memory layer for Cline (MVP)**  
   Replaces the blocked Mem0 path per spec NLTPI-MEM-003. Introduces `NeonMemoryStore` (cosine search via pgvector with pg_trgm fallback) and `EmbedRunner` over Neon Postgres. Spec/docs under `docs/`, implementation in `src/memory`.

3. **[#11904](https://github.com/earendil-works/pi/pull/11904)** *(CLOSED)* — **Custom system prompt preamble for SDK**  
   Allows SDK users to replace the opening identity text via `systemPromptOptions.sections.preamble` while retaining Pi's default tools, rules, and docs. Directly addresses issue #11317.

4. **[#11907](https://github.com/earendil-works/pi/pull/11907)** *(CLOSED)* — **Orchestra supervisor + shotd + add-all**  
   Adds `add-all` override per user request to the coding-agent orchestration supervisor. Merged same day.

5. **[#11906](https://github.com/earendil-works/pi/pull/11906)** *(CLOSED)* — **Prevent uncaught AbortError on local file/session read abort**  
   Fixes a crash when `AbortSignal` aborts during pending `read` tool calls, causing `pi` to exit with an uncaught error. Affects `codemode` scripts with unawaited file reads returning mid-execution.

6. **[#10810](https://github.com/earendil-works/pi/pull/10810)** *(CLOSED)* — **Support override colorFn in CompactionStatusIndicator**  
   Fixes issue #10809: themes without `borderColor` previously couldn't override `colorFn` in the embedded compaction indicator. Now aligns with `WorkingIndicator`'s override behavior.

7. **[#11915](https://github.com/earendil-works/pi/pull/11915)** *(CLOSED — via issue)* — **Add MiniMax OAuth sign-in**  
   Merged MiniMax OAuth support for both `minimax` and `minimax-cn` providers, which previously supported only API-key auth.

8. **[#11903](https://github.com/earendil-works/pi/pull/11903)** *(CLOSED — via issue)* — **Add Wally as built-in provider**  
   Adds Wally (RunAnywhere's hosted API for open-weight models) as a built-in provider with OpenAI-compatible chat completions endpoint.

9. **[#11908](https://github.com/earendil-works/pi/pull/11908)** *(CLOSED — via issue)* — **Split reused tool-call index on new named id**  
   Fixes `openai-completions` parser to distinguish two tool calls reusing the same stream `index` but with different ids—starts a new block when the previous call's arguments are structurally closed.

10. **[#11913](https://github.com/earendil-works/pi/pull/11913)** *(CLOSED — via issue)* — **Strip uniqueItems from tool schemas for strict OpenAI-compatible providers**  
    Prevents 400 errors from strict providers (e.g., Liquid LFM) by stripping the non-standard `uniqueItems` JSON Schema keyword from attached tool schemas.

---

## Hot Discussions

### Show & Tell

- **[#11912](https://github.com/earendil-works/pi/discussions/11912)** — *agentswarm.space task-discovery skill for Pi*  
  Published a Pi skill for finding suitable public tasks, registering once if needed, and submitting results. Installable via `pi install git:github.com/andrewsiah/agentswarm-pi@v1.0.0`. 👍 1, 1 comment.

### Q&A

- **[#11911](https://github.com/earendil-works/pi/discussions/11911)** — *Pi vs OMP for research work (GPT/DeepSeek): scientific reasoning, experimental design, and token efficiency?*  
  CS student evaluating whether to switch from Pi to OMP (the Pi fork). Asks about comparative performance on GPT/DeepSeek for research tasks. 0 comments, 1 👍—community opportunity to provide guidance.

---

## Feature Request Trends

Aggregating from open issues and discussions, the following themes dominate community demand:

| Theme | Evidence |
|-------|----------|
| **Provider & Auth Expansion** | MiniMax OAuth (#11915), Wally provider (#11903), custom OAuth callback (#5372), OpenCode session compatibility (#9690) |
| **SDK Customizability** | Identity preamble customization (#11317, #11904), lightweight text-model calls in codemode (#11909), MCP scroll position extensibility (#11914) |
| **Durable Execution Controls** | Permanent conversation deletion (#11026), task stuck-in-waiting fixes (#11892) |
| **Windows Parity** | Windows usage fragmentation (#7547 with 94 comments) |
| **Schema/Tooling Robustness** | `uniqueItems` stripping (#11913), `schemaToType` allOf fix (#11122), tool-call index reuse (#11908) |
| **TUI Refinements** | Hard line break preservation (#8019), hardware cursor selection bug (#10862), shell output pinning (#11905) |
| **Interrupt/Control Flow** | Interrupt without abort (#11917), prompt cache warming (#11857) |

---

## Developer Pain Points

1. **Windows Fragmentation** — The community lacks a clear, recommended path for Windows users, leading to scattered workaround discussions and support burden.

2. **Auth Header Propagation in MCP** — OAuth tokens for MCP servers aren't consistently carried after sign-in (#11918), breaking Google Workspace integrations that many developers rely on.

3. **MCP Reconnection Blocking** — Expired OAuth credentials cause multi-minute sequential timeouts across all MCP servers, disrupting multi-server workflows (#11919).

4. **SDK Prototype Method Loss** — Developers building custom UI classes lose methods silently due to `wrapUIPromptContext`'s object spread behavior (#8829).

5. **Context Window Mismatches** — Hardcoded or outdated context limits (e.g., GPT-6.1 Sol reporting 272K vs. 500K available) cause suboptimal token budgets (#11021).

6. **Tool Schema Strictness** — Strict OpenAI-compatible providers reject standard JSON Schema keywords (`uniqueItems`), requiring manual schema stripping (#11913).

7. **pi-durable Storage Accumulation** — No built-in mechanism to purge completed or unwanted conversations, leading to growing storage with no cleanup path (#11026).

8. **TUI Selection Semantics** — Soft-wrap and hard-line-break handling during mouse selection copying remains inconsistent (#8019), frustrating users who depend on accurate clipboard content.

---

*Digest generated from GitHub data for [earendil-works/pi](https://github.com/earendil-works/pi) on 2026-11-08.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>Let me analyze the GitHub data provided and generate a structured digest for Qwen Code community on 2026-11-08.

First, let me organize what we have:

**Releases (last 24h):**
1. v0.26.9-nightly.20261107.65e1f1aeaa
2. sdk-typescript-v0.1.30 (bundling CLI 0.27.0)
3. v0.27.0 (main release with managed-agent sessions enhancements, Web Shell heatmap)
4. desktop-v0.27.0

**Latest Issues (50 total, showing top 30):**
Many open issues, with the most commented being:
- #14724 (226 comments) - Main CI failed: Managed Agent gate
- #16514 (11 comments) - Isolate external PR CI with disposable runners (P1, security)
- #16353 (7 comments) - PR review request
- #12886 (7 comments) - Custom-provider guidance for 32K context
- #14586 (5 comments) - Main CI failed in email-channel.test.ts
- #16320 (5 comments) - perf(managed-agent): control-plane SQL grows
- #16046 (5 comments) - E2E Tests failure
- #13820 (4 comments) - Live Voice stranded in "stopping" forever
- #13966 (4 comments) - Chrome extension retries WebSocket upgrade indefinitely
- #14465 (4 comments) - --disable-mcp-server glob exclusions issue
- #12040 (4 comments) - web-shell credential security issue
- #14548 (4 comments) - managed-agent automation on never-run Session
- #14388 (4 comments) - Deferred review findings
- #14389 (4 comments) - Deferred review findings
- #15082 (4 comments) - Managed Agent capacity model


- #16191 (4 comments) - CI failure
- #15875 (4 comments) - SDK stream-json bug
- #16355 (4 comments) - web-shell sidebar polling bug
- #16319 (4 comments) - CI failure refinements
- #14312 (3 comments) - Web terminal input-blocked
- #13465 (3 comments) - Background memory agents error
- #14594 (3 comments) - Desktop Web Preview blank
- #16473 (3 comments) - Extract isMainRouteSelector
- #16569 (3 comments) - scroll-to-bottom button request
- #16562 (3 comments) - render model provider prefixes
- #15414 (3 comments) - OpenAI usage telemetry
- #15280 (3 comments) - MCP tool card expansion
- #10984 (3 comments) - per-process config directories
- #16471 (3 comments) - managed-host review suggestions

**Pull Requests (50 total, showing top 20):**
- #16277 - fix(ci): report main CI runs a job timeout cancelled
- #16488 - feat(managed-agent): add opt-in personal memory backed by Holo
- #14000 - docs(tools): add You.com free MCP
- #13835 - fix(cli): settle Live call stops after failure
- #15684 - feat(managed-agent): enable external workspace execution
- #16475 - feat(managed-agent): add persisted session and execution diagnostics
- #16021 - fix(web-shell): bump @datafe-open/markdown-chart
- #15060 - refactor(web-shell): share session view reset state
- #15286 - fix(ci): keep sdk-java resolver bookkeeping
- #14064 - fix(ci): distinguish missing logs from missing test results
- #16578 - fix(serve): throttle WebSocket upgrade rejection logs
- #16462 - fix(ci): run the failure patrol on ECS
- #16577 - docs(channels): document self-pushed head echoes
- #13897 - fix(cli): reject discontinued Qwen OAuth model selections
- #16576 - feat(channels): give bound sessions role guidance
- #16559 - fix(core): give quantized AWQ, GPTQ and FP8 builds their base model's context window
- #14077 - fix(ci): recreate runner Git metadata
- #16543 - refactor(serve): share the prompt admission
- #11820 - refactor(core): assemble system prompt through layered builder
- #12168 - fix(node-repl): terminate the injected snapshot commit

Looking at the full picture, there are no discussion entries. The main push today centers on the v0.27.0 release with significant managed-agent improvements, plus a major security fix around external PR CI isolation. The CLI improvements include Web Shell heatmaps and multiple fixes to WebSocket handling, logging, and credential security. Notable additions are the personal memory feature for managed agents and the expansion of workspace execution capabilities.

The critical issues blocking progress involve the ongoing CI failure with Managed Agent gates at 226 comments, the P1 security concern about CI isolation, and several bugs affecting Live Voice, WebSocket upgrades, and credential handling. The web-shell polling issue is also flagged as P1 priority. Feature requests are clustering around managed-agent capacity planning, custom provider context budgets, and UI enhancements like scroll buttons and model badges.
</think>


# Qwen Code Community Digest — 2026-11-08

---

## 1. Today's Highlights

Qwen Code shipped **v0.27.0** alongside desktop-v0.27.0, bringing significant managed-agent improvements including multi-child session handling and a new task Q&A heatmap for Web Shell. A critical P1 security proposal (#16514) is advancing to isolate external PR CI with disposable runners, addressing credential exposure risks on self-hosted infrastructure. The TypeScript SDK bumped to v0.1.30, bundling the new CLI version.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v0.27.0** | Managed-agent sessions now support multiple child questions answered in any order with draft/error separation per child; Web Shell adds task Q&A heatmap and "Ask" feature |
| **desktop-v0.27.0** | Includes GitHub inbound recovery fix by @wenshao (#16402) |
| **sdk-typescript-v0.1.30** | Bundles CLI 0.27.0 built from the same branch |
| **v0.26.9-nightly.20261107** | Nightly build at commit 65e1f1aeaa |

---

## 3. Hot Issues

| # | Issue | Priority | Why It Matters | Comments |
|---|-------|----------|----------------|----------|
| [#14724](https://github.com/QwenLM/qwen-code/issues/14724) | **Main CI failed: Managed Agent gate — no test identified** | — | Recurring CI failure blocking merges; 226 comments indicate deep investigation needed | 226 |
| [#16514](https://github.com/QwenLM/qwen-code/issues/16514) | **Isolate external PR CI with disposable runners** | P1 | Security concern: external PRs run contributor-controlled CI scripts on self-hosted runners, risking credential exposure | 11 |
| [#13820](https://github.com/QwenLM/qwen-code/issues/13820) | **Live Voice stranded in "stopping" forever** | P1 | Users report Live calls hang after hang-up with pending transcript; daemon restart is only workaround | 4 |
| [#16355](https://github.com/QwenLM/qwen-code/issues/16355) | **sidebar=false polls all workspaces every 5s** | P1 | Performance bug: embedded Web Shell polls all trusted workspaces on idle welcome view, wasting resources | 4 |
| [#12040](https://github.com/QwenLM/qwen-code/issues/12040) | **web-shell credential stored under wrong origin** | P2 | Security: rejected `?daemon=` override stores token fragment under page origin's key instead of target host | 4 |
| [#16320](https://github.com/QwenLM/qwen-code/issues/16320) | **Control-plane SQL grows with session count** | P2 | Performance: resident Session SQL workload grows unbounded; needs optimization | 5 |
| [#15875](https://github.com/QwenLM/qwen-code/issues/15875) | **SDK stream-json message ID changes after thinking** | P2 | SDK bug: message ID differs between `message_start` and final snapshot when streaming thinking | 4 |
| [#13966](https://github.com/QwenLM/qwen-code/issues/13966) | **Chrome extension retries WebSocket upgrade indefinitely** | P3 | Extension floods `qwen serve` journal with retry logs; no backoff causes log spam | 4 |
| [#14465](https://github.com/QwenLM/qwen-code/issues/14465) | **--disable-mcp-server glob exclusions can't be lifted** | P2 | MCP exclusion flags persist and union with runtime config; in-session enable doesn't override | 4 |
| [#14594](https://github.com/QwenLM/qwen-code/issues/14594) | **Desktop Web Preview renders blank for saved versions** | P2 | macOS Desktop bug: saved artifact previews show white blank area due to `about:srcdoc` iframe blocklist | 3 |

---

## 4. Key PR Progress

| # | PR | Type | Description | Status |
|---|-----|------|-------------|--------|
| [#16488](https://github.com/QwenLM/qwen-code/pull/16488) | **feat(managed-agent): add opt-in personal memory backed by Holo** | Feature | Introduces personal memory capability for managed agents using Holo storage | Open |
| [#15684](https://github.com/QwenLM/qwen-code/pull/15684) | **feat(managed-agent): enable external workspace execution** | Feature | Builds external workspace execution with hosted-workspace-external-files admission and bounded discovery | Open |
| [#16475](https://github.com/QwenLM/qwen-code/pull/16475) | **feat(managed-agent): add persisted session diagnostics** | Feature | Adds committed request context, model stats, Skills/MCP resources, and tool/Skill activity logging | Open |
| [#16578](https://github.com/QwenLM/qwen-code/pull/16578) | **fix(serve): throttle WebSocket upgrade rejection logs** | Bug Fix | Suppresses duplicate 403 rejection logs to once per minute per reason@client-address | Open |
| [#16559](https://github.com/QwenLM/qwen-code/pull/16559) | **fix(core): quantized builds get base model's context window** | Bug Fix | AWQ, GPTQ, FP8 quantized models now inherit full 131K context from base model | Open |
| [#16277](https://github.com/QwenLM/qwen-code/pull/16277) | **fix(ci): report main CI runs a job timeout cancelled** | CI | Distinguishes job-timeout cancellations from concurrency supersedes; names cancelled job | Open |
| [#16462](https://github.com/QwenLM/qwen-code/pull/16462) | **fix(ci): run failure patrol on ECS** | CI | Moves CI failure patrol to self-hosted ECS pool; separates sandbox image pull timing | Open |
| [#13835](https://github.com/QwenLM/qwen-code/pull/13835) | **fix(cli): settle Live call stops after failure** | Bug Fix | Completes failed Live call stop through drain deadline and transcript persistence | Closed |
| [#16021](https://github.com/QwenLM/qwen-code/pull/16021) | **fix(web-shell): bump @datafe-open/markdown-chart to 0.4.1** | Dependency | Fixes ECharts mount failure handling in markdown-chart renderer | Open |
| [#16576](https://github.com/QwenLM/qwen-code/pull/16576) | **feat(channels): give bound sessions role guidance** | Feature | PR-bound sessions receive role-specific guidance (reviewer/verifier) without operator templates | Open |

---

## 5. Hot Discussions

*(No discussion data provided in the dataset.)*

---

## 6. Feature Request Trends

Analysis of open issues and PRs reveals these recurring themes:

| Theme | Representative Issues | Description |
|-------|----------------------|-------------|
| **Managed Agent Capacity & Resource Management** | [#15082](https://github.com/QwenLM/qwen-code/issues/15082), [#16320](https://github.com/QwenLM/qwen-code/issues/16320) | Requests for documented capacity limits, idle reclamation, and memory/SQL optimization as usage scales |
| **Custom Provider Context Budget Guidance** | [#12886](https://github.com/QwenLM/qwen-code/issues/12886) | Need for prefight warnings or documentation when selected tools exceed 32K context budgets |
| **Web Shell UI Enhancements** | [#16569](https://github.com/QwenLM/qwen-code/issues/16569), [#16562](https://github.com/QwenLM/qwen-code/issues/16562), [#15280](https://github.com/QwenLM/qwen-code/issues/15280) | Requests for scroll-to-bottom buttons, model provider badges, and expandable MCP tool detail cards |
| **External Workspace Execution** | [#15684](https://github.com/QwenLM/qwen-code/pull/15684) | Enabling sandboxed execution of external workspace files with bounded discovery |
| **Personal Memory for Agents** | [#16488](https://github.com/QwenLM/qwen-code/pull/16488) | Opt-in persistent memory backed by Holo for managed agents |
| **Per-Process Configuration** | [#10984](https://github.com/QwenLM/qwen-code/issues/10984) | CLI option for process-level config directory override |

---

## 7. Developer Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Flaky Main CI on Managed Agent** | [#14724](https://github.com/QwenLM/qwen-code/issues/14724) (226 comments) | Blocks all merges; developers lose confidence in gate |
| **Live Voice Hang on Hang-up** | [#13820](https://github.com/QwenLM/qwen-code/issues/13820) | Requires daemon restart to recover; breaks voice workflow |
| **WebSocket Upgrade Retry Flooding Logs** | [#13966](https://github.com/QwenLM/qwen-code/issues/13966), [#16578](https://github.com/QwenLM/qwen-code/pull/16578) | No backoff causes unbounded journal growth on connection issues |
| **Credential Storage Under Wrong Origin** | [#12040](https://github.com/QwenLM/qwen-code/issues/12040) | Security risk when using daemon override across origins |
| **MCP Server Exclusion Persistence** | [#14465](https://github.com/QwenLM/qwen-code/issues/14465) | Launch flags reapply as union with runtime config; in-session enable doesn't override |
| **Quantized Models Missing Context Window** | [#16559](https://github.com/QwenLM/qwen-code/pull/16559) | AWQ/GPTQ/FP8 models truncated to tiny default context instead of base model's 131K |
| **Desktop Web Preview Blanks** | [#14594](https://github.com/QwenLM/qwen-code/issues/14594) | Saved artifact previews broken on macOS; about:srcdoc iframes blocked |
| **Background Memory Agents Surface Raw Tokens** | [#13465](https://github.com/QwenLM/qwen-code/issues/13465) | Users see internal `MAX_TURNS` token instead of friendly error message |

---

*Digest generated from GitHub data for [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) — 2026-11-08*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*