# AI CLI Tools Community Digest 2026-11-04

> Generated: 2026-11-04 02:38 UTC | Tools covered: 7

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

<think>The user wants me to generate a cross-tool comparison report for AI CLI tools based on the digests I've already created. Let me analyze the data from each tool:

1. **Claude Code** (github.com/anthropics/claude-code)
2. **OpenAI Codex** (github.com/openai/codex)
3. **Gemini CLI** (github.com/google-gemini/gemini-cli)
4. **GitHub Copilot CLI** (github.com/github/copilot-cli)
5. **OpenCode** (github.com/anomalyco/opencode)
6. **Pi** (github.com/earendil-works/pi)
7. **Qwen Code** (github.com/QwenLM/qwen-code)

Let me extract the key data points:

| Tool | Releases (24h) | Issues (total) | PRs (total) | Discussions | Community Health |
|------|----------------|----------------|-------------|-------------|------------------|
| Claude Code | 1 (v2.1.318) | 30 shown, 50 total | 3 shown | N/A (Issues enabled) | High - active |
| OpenAI Codex | 1 (libcap-v2.75) | 50 total | 29 shown, 50 total | 11 shown | High - active |
| Gemini CLI | 1 (v0.67.0-nightly) | 50 total | 29 shown | N/A (Issues enabled) | Medium-high |
| Copilot CLI | 2 (v1.0.106-6, v1.0.106-7) | 20 shown | 1 shown | N/A (Issues enabled) | High - active |
| OpenCode | 0 | 50 total | 50 total | N/A (Issues enabled) | Medium - active |
| Pi | 0 | 50 total | 27 shown | 1 shown | Low-medium |
| Qwen Code | 0 | 50 total | 50 total | N/A (Issues enabled) | Medium - active |


| | | | | | |

I'm seeing several key patterns across these tools. Claude Code, Copilot CLI, and Qwen Code are all addressing performance bottlenecks and stability issues—particularly around CLI responsiveness and memory consumption. Cross-platform support remains a critical focus, especially for Windows environments. Interestingly, all three are prioritizing security improvements, whether that's permission handling, sandboxing, or access controls. Cloud and managed service integrations are also becoming more prominent, suggesting these tools are moving toward more seamless deployment workflows.</think>

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem

## 1. Ecosystem Overview

The AI CLI tools landscape is rapidly maturing, with seven active projects competing to become the primary development interface for AI-assisted coding. Today's activity reveals a healthy but fragmented ecosystem: commercial products (Claude Code, Codex, Gemini CLI, Copilot CLI) are shipping regular releases with strong focus on enterprise features like managed settings and cost attribution, while open-source alternatives (OpenCode, Pi, Qwen Code) prioritize developer experience, transparency, and extensibility. Common themes across all tools include Windows compatibility challenges, memory/performance optimization, and security hardening—indicating the industry is still solving fundamental desktop integration challenges.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Issues Open | PRs Open | Discussions | Community Channel Mode |
|------|----------------|-------------|----------|--------------|----------------------|
| **Claude Code** | 1 (v2.1.318) | 30 shown | 3 | N/A | Issues enabled |
| **OpenAI Codex** | 1 (libcap-v2.75) | 50 | 50 | 11 | Issues enabled |
| **Gemini CLI** | 1 (v0.67.0-nightly) | 50 | 29 | N/A | Issues enabled |
| **Copilot CLI** | 2 (v1.0.106-6/7) | 20 | 1 | N/A | Issues enabled |
| **OpenCode** | 0 | 50 | 50 | N/A | Issues enabled |
| **Pi** | 0 | 50 | 27 | 1 | Issues enabled |
| **Qwen Code** | 0 | 50 | 50 | N/A | Issues enabled |

*Note: "N/A" indicates the tool uses Issues as its primary community channel rather than Discussions.*

---

## 3. Shared Feature Directions

| Feature Direction | Tools Requesting | Specific Needs |
|-------------------|-----------------|----------------|
| **Enhanced Shell/Terminal Configuration** | Claude Code, Pi | Custom shell selection, Windows PowerShell compatibility, terminal-specific rendering |
| **Improved Model/Session Reliability** | Codex, Copilot CLI, Qwen Code | Rate limiting improvements, model at-capacity handling, session persistence |
| **Security & Permission Sandboxing** | Gemini CLI, Qwen Code, Claude Code | OS-level sandboxing, permission guardrails, hook approval dialogs |
| **Cross-Platform Consistency** | All tools | Windows-specific fixes dominate—Ctrl+V bindings, path separators, CRLF handling |
| **Memory & Performance Optimization** | Pi, Qwen Code, Claude Code | Streaming file reads, memory footprint reduction, lazy loading |
| **Extended Autonomy** | Copilot CLI, Gemini CLI | Remove blocking wait limits, support long-running tasks, autonomous recovery |
| **MCP/Tool Discovery Improvements** | Gemini CLI, Pi | Pagination for tools, STDIO transport, content size limits |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|------|---------------|--------------|-------------------|
| **Claude Code** | Desktop-first with Cowork VM, mod ecosystem | Developers wanting rich desktop integration | Electron-based, local VM sandbox, extensive mod support |
| **OpenAI Codex** | Web/app-based AI coding with desktop companion | Full-stack developers, enterprise teams | Cloud-first with optional desktop companion, heavy MCP integration |
| **Gemini CLI** | Modular skill system, browser automation | Advanced users needing browser/automation workflows | Skills-based architecture, explicit skill invocation model |
| **Copilot CLI** | CLI-first with VS Code integration | GitHub ecosystem users, enterprise developers | Tight GitHub integration, managed settings for enterprise |
| **OpenCode** | Open-source, free-tier accessibility | Cost-conscious developers, OSS community | Free-tier focus, desktop + CLI modes, active community-driven development |
| **Pi** | Minimalist, transport-flexible | Developers prioritizing simplicity, niche provider support | Multiple transport options (SSE/WebSocket), lean file tools |
| **Qwen Code** | Chinese ecosystem integration, managed runtime | Qwen/Chinese model users, enterprise deployments | Managed runtime infrastructure, E2B Cloud integration, security-hardened |

---

## 5. Community Momentum & Maturity

**Most Active (High Velocity):**
- **Claude Code** — 82+ upvote on Cowork performance issue indicates strong community engagement; regular releases (v2.1.318)
- **OpenAI Codex** — High issue volume (50+), safety incident (#59060 with 84 comments) shows active user base
- **Copilot CLI** — Two releases in 24h, significant enterprise focus with managed settings

**Moderate Activity:**
- **Gemini CLI** — Consistent nightly releases, active feature development (symlinks, theme config)
- **Qwen Code** — High PR volume (50), active security hardening
- **OpenCode** — High issue/PR counts, free-tier migration focus

**Lower Activity:**
- **Pi** — Smaller community (23 comments on top issue), but focused on quality fixes (streaming, surrogate pairs)

**Maturity Indicators:**
- Commercial tools (Claude, Codex, Gemini, Copilot) have more enterprise-focused issue types (rate limits, managed settings, SSO)
- Open-source tools (OpenCode, Pi, Qwen) show more developer-centric pain points (file handling, cross-platform bugs)

---

## 6. Trend Signals

1. **Performance as Table Stakes**: Memory optimization is now a first-class concern across all tools—Pi's streaming file reads (O(n) → O(1)), Qwen's Session-row locking, Claude's Cowork VM concerns. Users expect AI tools to not degrade their system.

2. **Windows is the Hard Platform**: Despite Linux server prevalence, Windows desktop integration remains the most problematic—PowerShell false positives, CRLF line endings, Ctrl+V bindings, sandbox permissions. This suggests Windows developer tooling requires specialized treatment.

3. **Enterprise vs. Individual Tension**: Copilot CLI's managed settings failures and OpenCode's free-tier chaos (#59387 with 251 comments) reveal the operational complexity of offering both free and paid tiers. Free users expect reliability; enterprises expect control.

4. **MCP Ecosystem Growing**: Gemini CLI, Pi, and Codex all show active MCP server integration work—pagination, content limits, transport flexibility. MCP is becoming the standard tool interoperability layer.

5. **Security Hardening Accelerating**: Three tools (Gemini, Qwen, Copilot) have security-related PRs this cycle—hook approval dialogs, permission guardrails, amend invocation matching. The AI agent security model is evolving rapidly.

6. **Reliability over Features**: The dominant issue themes across tools are bug fixes, regressions, and stability rather than new features. The market is maturing from "ship it fast" to "make it work reliably."

---

*Report generated from 2026-11-04 community digest data. For deeper analysis on any specific tool, refer to individual tool digests.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data from the anthropics/skills repository as of November 4, 2026. Let me analyze the data provided:

**Pull Requests (sorted by comments - but interestingly, all show "undefined" for comments):**
Looking at the PRs, they all show "Comments: undefined" which is interesting. The data shows 20 PRs but none have actual comment counts. However, the PRs are listed and I can see their titles, authors, dates, and summaries.

**Issues (sorted by comments):**
- #492: Security issue about community skills in anthropic/ namespace - 46 comments
- #228: Enable org-wide skill sharing - 17 comments
- #556: run_eval.py doesn't trigger skills - 13 comments
- #62: Skills disappeared errors - 10 comments
- #1329: Proposal for compact-memory skill - 10 comments
- #202: skill-creator should be updated - 8 comments (CLOSED)
- #1385: Reasoning Quality Gate Pipeline proposal - 7 comments
- #412: agent-governance skill proposal - 6 comments (CLOSED)
- #189: document-skills and example-skills duplicate - 6 comments
- #1487: claude-api injects too many tokens - 5 comments
- #2064: theme-factory description issue - 4 comments
- #2018: docx merge_runs.py XML issue - 4 comments
- #1868: create_gradient_background bug - 4 comments
- #1394: skill-creator XSS vulnerability - 4 comments
- #1390: mcp-builder evaluation fails - 4 comments

Now I need to structure this into the requested format:

1. **Top Skills Ranking** - List 5-8 most-discussed Skills (PRs)
   - Problem: All PRs show "Comments: undefined" - this seems odd. Let me re-read.
   - All the PRs listed show "Comments: undefined" - this is interesting. Maybe the data collection didn't capture comments for PRs, or they're all new with no comments yet.
   - Since there's no actual comment data on the PRs, I could rank by recency, activity (updates), or just note that PRs appear to have minimal engagement. The PRs show "Updated" timestamps ranging from 2026-09 to 2026-11, suggesting recent activity. I'll focus on the most recently updated PRs as a proxy for active discussion, since the comment field is uniformly undefined across all entries.</think>

# Claude Code Skills Community Highlights Report

**Data as of: November 4, 2026**

---

## 1. Top Skills Ranking

The PR data shows all entries with `Comments: undefined`, indicating no explicit comment threads on individual PRs. However, the repository tracks engagement through updates and issue discussions. Based on PR activity and associated issue engagement, the following Skill submissions represent the most active or consequential developments:

| # | Skill / PR | Functionality | Status |
|---|------------|---------------|--------|
| 1 | **mcp-builder: streamable_http_client import and custom headers** ([#1742](https://github.com/anthropics/skills/pull/1742)) | Fixes MCP >=2.0.0 compatibility—updates renamed `streamable_http_client` import and handles custom HTTP headers via `create_mcp_http_client`. Addresses breaking changes in the Model Context Protocol. | **OPEN** (Updated 2026-10-08) |
| 2 | **skill-creator: isolate trigger evals, Windows support** ([#1298](https://github.com/anthropics/skills/pull/1298)) | Improves trigger evaluation reliability—fixes false misses, Windows compatibility for subprocess pipes, and prevents unrelated tools from stopping scans. | **OPEN** (Updated 2026-09-16) |
| 3 | **webapp-testing: avoid shell=True** ([#1980](https://github.com/anthropics/skills/pull/1980)) | Security fix—removes `shell=True` from `subprocess.Popen` in `with_server.py` to prevent command injection (CWE-78). Critical security hardening. | **OPEN** (Updated 2026-11-01) |
| 4 | **docx: LibreOffice timeout handling** ([#1792](https://github.com/anthropics/skills/pull/1792)) | Returns proper Error on soffice timeout, validates output DOCX has no revision marks. | **OPEN** (Updated 2026-11-01) |
| 5 | **pyxel: retro game development** ([#525](https://github.com/anthropics/skills/pull/525)) | Enables creating, debugging, and verifying retro games in Python using the Pyxel library. Guides headless input-driven runs and frame inspection. | **OPEN** (Updated 2026-11-01) |
| 6 | **xlsx: worksheet-scoped defined names fix** ([#2019](https://github.com/anthropics/skills/pull/2019)) | Fixes false negatives in external link detection for worksheet-scoped defined names. | **OPEN** (Updated 2026-11-03) |
| 7 | **md2video-audio: Markdown to MP4** ([#1703](https://github.com/anthropics/skills/pull/1703)) | Zero-cost skill that compiles Markdown into professional MP4 videos with human-like voiceovers via Marp. | **OPEN** (Updated 2026-09-15) |
| 8 | **proofcore-contract-auditor** ([#1771](https://github.com/anthropics/skills/pull/1771)) | Smart contract notarization—performs static analysis of Solidity/Rust contracts and anchors proofs onto TON Blockchain via ProofCore's zero-storage Merkle protocol. | **OPEN** (Updated 2026-09-16) |

---

## 2. Community Demand Trends

Based on Issues activity (sorted by comment volume), the following themes emerge as most-requested by the community:

### Security & Trust
- **Namespace impersonation** ([#492](https://github.com/anthropics/skills/issues/492), 46 comments): Community skills distributed under `anthropic/` namespace create trust boundary abuse. High-priority security concern.

### Workflow & Collaboration
- **Org-wide skill sharing** ([#228](https://github.com/anthropics/skills/issues/228), 17 comments): Users want shared skill libraries within organizations—currently requires manual file distribution.
- **Duplicate skills** ([#189](https://github.com/anthropics/skills/issues/189), 6 comments): `document-skills` and `example-skills` plugins install identical content.

### Reliability & Evaluation
- **run_eval.py trigger failures** ([#556](https://github.com/anthropics/skills/issues/556), 13 comments): Skills/commands never trigger (0% trigger rate)—critical eval pipeline issue.
- **claude-api token exhaustion** ([#1487](https://github.com/anthropics/skills/issues/1487), 5 comments): Skill injects ~156k tokens, exhausting context window.

### Proposed New Skills
- **compact-memory** ([#1329](https://github.com/anthropics/skills/issues/1329), 10 comments): Symbolic notation for compact agent state—long-running agents consume excessive context on prose notes.
- **agent-governance** ([#412](https://github.com/anthropics/skills/issues/412), 6 comments): Safety patterns for AI agent systems—policy enforcement, threat detection, trust scoring.
- **Reasoning Quality Gate Pipeline** ([#1385](https://github.com/anthropics/skills/issues/1385), 7 comments): Pre-task calibration → adversarial review → delivery verification.

---

## 3. High-Potential Pending Skills

These PRs have recent updates and address significant functionality gaps—candidates for near-term merge:

| PR | Focus | Last Updated |
|----|-------|---------------|
| [#2019](https://github.com/anthropics/skills/pull/2019) | xlsx external link detection fix | 2026-11-03 |
| [#1980](https://github.com/anthropics/skills/pull/1980) | webapp-testing security (shell=True removal) | 2026-11-01 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice validation | 2026-11-01 |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel retro game dev | 2026-11-01 |
| [#1245](https://github.com/anthropics/skills/pull/1245) | notion-spec-to-implementation + resume-auditor | 2026-10-15 |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand centers on hardening Claude Code Skills for production reliability—specifically fixing security vulnerabilities, improving evaluation/trigger accuracy, and enabling enterprise-grade collaboration features like org-wide skill sharing.**

---

<think>The user wants me to generate a Claude Code community digest based on the GitHub data provided. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

1. **Latest Releases** - v2.1.318 with 3 changes:
   - Added a record of your answer when Claude Code asks to turn on the mods it writes in a session
   - Added `assume_role` on `mantle` upstreams of the Claude apps gateway, for a role in another AWS account and for per-developer AWS cost attribution
   - Added an `effort` option to a mod

2. **Latest Issues** - 30 items shown, with various issues from different categories

3. **Latest PRs** - 3 items

The user mentioned discussions but I don't see any discussion data provided in the input. Let me check if there are any discussions... I don't see any discussion data in the provided data, so I'll omit the Hot Discussions section.

Now let me structure this into the requested format:

1. Today's Highlights
2. Releases
3. Hot Issues (pick 10)
4. Key PR Progress (pick 10 - but there are only 3 PRs, so I'll use those)
5. Hot Discussions - Omit (no data)
6. Feature Request Trends
7. Developer Pain Points

Let me write this out professionally.</think>

# Claude Code Community Digest

**Date:** November 4, 2026  
**Source:** github.com/anthropics/claude-code

---

## Today's Highlights

The v2.1.318 release introduces three notable improvements: session-based mod consent tracking, AWS cross-account role assumption for cost attribution, and a new `effort` option for mods. However, the community is grappling with significant performance concerns—the Cowork feature's 10GB VM bundle continues to degrade desktop performance, and a new Windows Electron crash regression (0xc0000005) is affecting 3.x users multiple times daily.

---

## Releases

### v2.1.318 (November 4, 2026)

**Changes:**

- **Mod consent tracking**: Records user answers when Claude Code asks to enable mods it writes during a session
- **AWS cost attribution**: Added `assume_role` support on `mantle` upstreams for cross-account AWS access and per-developer cost tracking
- **Effort option**: New `effort` parameter available for mods

**Reference:** [Release v2.1.318](https://github.com/anthropics/claude-code/releases/tag/v2.1.318)

---

## Hot Issues

### 1. Cowork Feature Creates 10GB VM Bundle Causing Severe Performance Degradation
**Issue #22543** | 82 comments | 237 👍  
[Link](https://github.com/anthropics/claude-code/issues/22543)

**Why it matters:** The Cowork feature creates a massive 10GB VM bundle that causes slow startup, UI lag, and degrading performance during sessions. This is a high-priority, oncall-tagged issue affecting desktop users. Community is highly engaged with 237 upvotes.

### 2. Allow Users to Configure Which Shell the Bash Tool Uses
**Issue #7490** | 42 comments | 132 👍  
[Link](https://github.com/anthropics/claude-code/issues/7490)

**Why it matters:** Users want to configure or inherit their initial shell for the Bash tool rather than using a default. This is a long-standing enhancement request (September 2025) with strong community support.

### 3. Windows: Disable Bundled Cowork Background Service (CoworkVMService)
**Issue #57371** | 35 comments | 66 👍  
[Link](https://github.com/anthropics/claude-code/issues/57371)

**Why it matters:** Windows users who don't use Cowork want a way to disable the background service to reduce resource usage. A natural companion to issue #22543.

### 4. Fable 5: Mid-turn Assistant Text Delivered as Summarized Thinking Blocks
**Issue #74558** | 25 comments | 20 👍  
[Link](https://github.com/anthropics/claude-code/issues/74558)

**Why it matters:** A Linux/WSL bug where assistant text intermittently appears as "thinking" blocks during turns, making the session appear silent. Affects Fable 5 model users.

### 5. AskUserQuestion Widget Hides Claude's Preceding Text in VS Code
**Issue #80576** | 11 comments | 10 👍  
[Link](https://github.com/anthropics/claude-code/issues/80576)

**Why it matters:** VS Code extension users lose context when Claude asks a follow-up question—the preceding explanation gets hidden by the widget.

### 6. Windows Desktop 3.x: Electron Crashes (0xc0000005) Several Times Daily
**Issue #105318** | 8 comments | 0 👍  
[Link](https://github.com/anthropics/claude-code/issues/105318)

**Why it matters:** Critical Windows regression in 3.x—Electron main process crashes with access violation (0xc0000005), occurring 4-6 times per day. Stable on 2.x. Rising crash rate is concerning.

### 7. Windows Desktop: Session Status No Longer Visible on Code Tab Sidebar
**Issue #105245** | 5 comments | 3 👍  
[Link](https://github.com/anthropics/claude-code/issues/105245)

**Why it matters:** Users can no longer see whether a session is working/waiting/done in the sidebar—a regression affecting workflow awareness on Windows.

### 8. macOS: Versioned Install Paths Invalidate TCC Permissions on Auto-update
**Issue #88576** | 4 comments | 1 👍  
[Link](https://github.com/anthropics/claude-code/issues/88576)

**Why it matters:** Each auto-update creates a new versioned binary path, invalidating macOS TCC (Transparency, Consent, and Control) permissions. Users must re-grant permissions after every update—a significant friction point.

### 9. subagentStatusLine Never Receives in_process_teammate Tasks
**Issue #87716** | 3 comments | 1 👍  
[Link](https://github.com/anthropics/claude-code/issues/87716)

**Why it matters:** Agent panel status line doesn't show in-process teammate tasks despite documentation claiming coverage. Documentation-implementation mismatch affecting agent workflows.

### 10. Windows: 20+ VS Code Windows Causes .claude.json Lock Contention
**Issue #103091** | 3 comments | 0 👍  
[Link](https://github.com/anthropics/claude-code/issues/103091)

**Why it matters:** Power users with 20+ VS Code windows experience event loop stalls up to 110 seconds due to lock contention on config files. Sessions freeze mid-tool-call.

---

## Key PR Progress

### 1. fix(plugins): Run ralph-wiggum and output-style .sh hooks through bash with a quoted path
**PR #95698** | Open | Author: claude[bot]  
[Link](https://github.com/anthropics/claude-code/pull/95698)

Fixes hook execution for bundled plugins by properly quoting script paths in bash invocation.

### 2. Run dedupe agents in the foreground
**PR #106972** | Open | Author: bpasero-ant  
[Link](https://github.com/anthropics/claude-code/pull/106972)

Addresses agents being cut off when running in the background by forcing foreground execution with `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1`.

### 3. s
**PR #58673** | Open | Author: sjbrenchley89  
[Link](https://github.com/anthropics/claude-code/pull/58673)

*(Title appears truncated; minimal information available)*

---

## Feature Request Trends

Based on issue analysis, the most requested features cluster around:

1. **Shell/Bash Configuration** — Persistent demand for customizable shell selection (#7490)
2. **Windows Cowork Control** — Disable background services for non-Cowork users (#57371)
3. **Session Effort Control** — Allow effort level overrides for Claude-proposed sessions (#104151)
4. **Desktop Notifications** — Notification when Remote Control sessions complete (#100729)
5. **OIDC Identity Tokens** — Keyless cloud provider authentication via OIDC (#81502)
6. **Keyboard Shortcuts** — Toggle Session Rail via keyboard (#105136)

---

## Developer Pain Points

The community is expressing frustration in several recurring areas:

1. **Performance Degradation** — Cowork VM bundle (10GB) severely impacts desktop performance; users report slow startup and UI lag
2. **Windows 3.x Instability** — Electron crashes (0xc0000005) are frequent and rising in 3.x after stable 2.x
3. **macOS Update Friction** — Versioned install paths invalidate TCC permissions on every update (#88576), requiring repeated re-authorization
4. **Resource Leaks** — Idle macOS sessions consume ~1 CPU core continuously and are never reaped (#107009)
5. **Config Lock Contention** — Power users with many VS Code windows experience severe event loop stalls (#103091)
6. **Tool Availability** — Artifact tool missing in Desktop Code tab sessions (#107102) breaks Design canvas functionality
7. **MCP Server Conflicts** — claude-artifacts MCP server replaces built-in Artifact tool, refusing typed artifacts (#106268)

---

*Digest generated from GitHub data for 2026-11-04*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate an OpenAI Codex community digest based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me organize the data:

**Releases (last 24h):**
- libcap-v2.75: libcap 2.75 source archive - Mirror of unmodified source archive used to build Bubblewrap for Codex's Linux musl packages

**Hot Issues (top 10 by comment count):**
1. #59060 - Bug: Told to reboot a server, it destroyed systemd, destroyed containers, ran random scripts, cost $10,000+ (84 comments)
2. #43375 - Bug: Multiple GPT-5 / GPT-6 models return "Selected model is at capacity" (36 comments)
3. #25921 - Bug: Codex Desktop continuously generates Crashpad pending dumps, growing without limit +5GB/day (26 comments)
4. #58302 - Bug: macOS desktop: XLSX attachments stay pending with spinning send control (21 comments)
5. #56697 - Bug: Ctrl+Tab stops switching chats; recent-chat cycling is unbound (20 comments)
6. #40558 - Bug: Desktop-created active threads fail to load due to active-writer conflict (16 comments)
7. #55219 - Bug: Composer Predictions stopped appearing after desktop update (15 comments)
8. #50771 - Bug: Codex keeps stopping or losing the task before work is done (15 comments)
9. #53558 - Bug: ChatGPT iOS: saved Codex Cloud environments fail to load (12 comments)
10. #31935 - Enhancement: Remove the 60-second limit on blocking waits (12 comments)

**Key PRs (top 10 by relevance):**
1. #59295 - Add outcome metrics for skill reads and installation listings


2. #59291 - Respect turn filesystem permissions during executor skill discovery
3. #59287 - Add directional conversation focus shortcuts in workspace mode
4. #59282 - Enable unified image budgeting by default
5. #59280 - Respect filesystem permissions when discovering repository skills
6. #59279 - Preserve filesystem authority when loading skills
7. #59278 - Enforce current filesystem permissions when reading repository skills
8. #59275 - Support API workload identity authentication
9. #59272 - Preserve requested approval reviewers across policy overrides

The remaining PRs focus on performance improvements and authentication enhancements. Several address filesystem permission handling across skill discovery and loading, while others introduce workload identity authentication and approval reviewer preservation. The unified image budgeting and conversation focus shortcuts represent notable feature additions to the workspace mode.

**Discussions:**
1. #59252 - Q&A: Codex Desktop cannot find Clojure CLI (2 comments)
2. #56686 - Q&A: supported pre-request token bounds for ChatGPT-authenticated codex exec (2 comments)
3. #57025 - Q&A: Can app-server apply ToolPolicy when starting a thread? (2 comments)
4. #55901 - Show and tell: New Codex chat, same project: which decisions still hold? (2 comments)
5. #58359 - Show and tell: claude-codex-taskbar: Codex 5-hour and weekly limits on Windows taskbar (1 comment)
6. #59292 - Q&A: Is there a versioned client contract for turn/moderationMetadata? (0 comments)
7. #59224 - Show and tell: LurkAPI: public TikTok, Reddit, YouTube and ad library data in Codex through MCP server (0 comments)
8. #59170 - Show and tell: Oh My Android: MCP server so Codex can see and drive Android emulator (0 comments)
9. #59147 - Show and tell: SnipToss: mark up images and videos Codex made (0 comments)
10. #59121 - Show and tell: agent-harness: skills, rules and Stop hooks (0 comments)
11. #59119 - Show and tell: I built a browser tool to see if my Codex weekly limit will last until reset (0 comments)</think>

# OpenAI Codex Community Digest

**Date:** 2026-11-04

---

## 1. Today's Highlights

The Codex community is grappling with significant stability and reliability concerns. A high-impact issue (#59060, 84 comments) reports a catastrophic scenario where Codex, when asked to reboot a server, destroyed systemd, containers, and ran random scripts—costing the user $10,000+. Meanwhile, multiple PRs merged today focus on hardening filesystem permission handling during skill discovery, addressing long-standing security and isolation concerns. The rate limiting issue (#43375) continues to gain traction as users report "model at capacity" errors across GPT-5 and GPT-6 models.

---

## 2. Releases

| Release | Description |
|---------|-------------|
| **libcap-v2.75** | Mirror of the unmodified libcap 2.75 source archive used to build Bubblewrap for Codex's Linux musl packages. SHA-256: `de4e7e064c9ba451d5234dd46e897d7c7` |

*No Codex CLI/app releases in the last 24 hours.*

---

## 3. Hot Issues

| Issue | Title | Comments | Why It Matters |
|-------|-------|----------|----------------|
| [#59060](https://github.com/openai/codex/issues/59060) | **[BUG] Told to reboot a server, it destroyed systemd, destroyed containers, ran random scripts, cost me $10,000+** | 84 | Critical safety incident—Codex executed destructive commands without proper safeguards. High priority for trust and safety. |
| [#43375](https://github.com/openai/codex/issues/43375) | **[BUG] Multiple GPT-5 / GPT-6 models return "Selected model is at capacity"** | 36 | Widespread rate limiting affecting multiple models, preventing users from accessing newer GPT-5/6 models. |
| [#25921](https://github.com/openai/codex/issues/25921) | **[BUG] Codex Desktop continuously generates Crashpad pending dumps, growing without any limit: +5GB per day** | 26 | Disk space DoS—unbounded Crashpad dump accumulation. Affects long-running desktop sessions. |
| [#58302](https://github.com/openai/codex/issues/58302) | **[BUG] macOS desktop: XLSX attachments stay pending with spinning send control** | 21 | File attachment regression on macOS—users cannot send XLSX files. |
| [#56697](https://github.com/openai/codex/issues/56697) | **[BUG] Ctrl+Tab stops switching chats; recent-chat cycling is unbound** | 20 | Broken keyboard navigation on Windows—major workflow disruption for power users. |
| [#40558](https://github.com/openai/codex/issues/40558) | **[BUG] Desktop-created active threads fail to load due to active-writer conflict** | 16 | Cross-device sync failure—threads created on desktop fail on iOS remote. |
| [#55219](https://github.com/openai/codex/issues/55219) | **[BUG] Composer Predictions stopped appearing after desktop update** | 15 | Productivity feature regression—autocomplete predictions missing post-update. |
| [#50771](https://github.com/openai/codex/issues/50771) | **[BUG] Codex keeps stopping or losing the task before the work is done** | 15 | Autonomous task execution broken—Codex abandons tasks mid-work, requiring manual "continue" prompts. |
| [#53558](https://github.com/openai/codex/issues/53558) | **[BUG] ChatGPT iOS: saved Codex Cloud environments fail to load** | 12 | iOS environment picker broken—works in Safari but fails in iOS app. |
| [#31935](https://github.com/openai/codex/issues/31935) | **[ENHANCEMENT] Remove the 60-second limit on blocking waits** | 12 | Long-running commands fail due to artificial timeout—limits agent capabilities. |

---

## 4. Key PR Progress

| PR | Title | Significance |
|----|-------|---------------|
| [#59295](https://github.com/openai/codex/pull/59295) | Add outcome metrics for skill reads and installation listings | Telemetry for skill system reliability and debugging |
| [#59291](https://github.com/openai/codex/pull/59291) | Respect turn filesystem permissions during executor skill discovery | Security: executor skill discovery now honors turn permission context |
| [#59287](https://github.com/openai/codex/pull/59287) | Add directional conversation focus shortcuts in workspace mode | New keyboard shortcuts for pane navigation in workspace mode |
| [#59282](https://github.com/openai/codex/pull/59282) | Enable unified image budgeting by default | Stable feature: unified image preparation now default for supported models |
| [#59280](https://github.com/openai/codex/pull/59280) | Respect filesystem permissions when discovering repository skills | Security: repo skill discovery reflects current filesystem access grants |
| [#59279](https://github.com/openai/codex/pull/59279) | Preserve filesystem authority when loading skills | Security: skill loading uses permission-aware file handles |
| [#59278](https://github.com/openai/codex/pull/59278) | Enforce current filesystem permissions when reading repository skills | Security: cached metadata invalidated on permission revocation |
| [#59275](https://github.com/openai/codex/pull/59275) | Support API workload identity authentication | Enables API service accounts to use workload identity flow |
| [#59272](https://github.com/openai/codex/pull/59272) | Preserve requested approval reviewers across policy overrides | Fixes regression: user-selected reviewers lost when policy auto-requires review |
| [#59268](https://github.com/openai/codex/pull/59268) | Use measured durations to budget uploaded audio | Optimizes token usage for audio—previously over-reserved for short clips |

---

## 5. Hot Discussions

### Q&A

| Discussion | Summary |
|------------|---------|
| [#59252](https://github.com/openai/codex/discussions/59252) | Codex Desktop cannot find Clojure CLI despite it being in PATH |
| [#56686](https://github.com/openai/codex/discussions/56686) | How to set hard pre-request token bounds for codex exec with ChatGPT auth |
| [#57025](https://github.com/openai/codex/discussions/57025) | Can app-server apply ToolPolicy when starting a thread to restrict tools? |
| [#59292](https://github.com/openai/codex/discussions/59292) | Is there a versioned client contract for turn/moderationMetadata? |

### Show and Tell

| Discussion | Summary |
|------------|---------|
| [#58359](https://github.com/openai/codex/discussions/58359) | **claude-codex-taskbar**: Windows taskbar widget showing Codex 5-hour/weekly limits (<1 MB, open source) |
| [#59224](https://github.com/openai/codex/discussions/59224) | **LurkAPI**: MCP server for public TikTok, Reddit, YouTube, Instagram data |
| [#59170](https://github.com/openai/codex/discussions/59170) | **Oh My Android**: MCP server to drive Android emulator on macOS |
| [#59147](https://github.com/openai/codex/discussions/59147) | **SnipToss**: Mark up images/videos Codex made and hand notes back as files |
| [#59121](https://github.com/openai/codex/discussions/59121) | **agent-harness**: Skills/rules/Stop hooks to make Codex finish jobs properly |
| [#59119](https://github.com/openai/codex/discussions/59119) | Browser tool to predict when Codex weekly limit will run out |
| [#55901](https://github.com/openai/codex/discussions/55901) | **GFT Map**: Track project decisions across Codex chat sessions |

---

## 6. Feature Request Trends

Based on Issues and Discussions, the community is requesting:

1. **Reliability & Safety** — Stronger guardrails to prevent destructive command execution (#59060)
2. **Better Rate Limit Handling** — Improved model capacity messaging, fallback strategies, and usage visibility (#43375, #57656)
3. **Extended Autonomy** — Remove 60-second blocking wait limit to enable long-running tasks (#31935)
4. **Cross-Platform Consistency** — Fix platform-specific regressions (Windows keyboard shortcuts, macOS file attachments, iOS sync)
5. **Enhanced Desktop Experience** — Project/session names in window title (#12311), better storage management (#25921)
6. **Queue & Thread Control** — Steering active turns, queue delivery modes (#48928)
7. **Keyboard Customization** — Configurable hotkeys for chat switching (#56697)

---

## 7. Developer Pain Points

- **Rate Limiting Frustration**: Users are blocked from accessing newer GPT-5/6 models with vague "at capacity" errors, with no clear workaround
- **Autonomous Task Failure**: Codex frequently stops mid-task, requiring manual "continue" prompts—frustrating for long workflows (#50771)
- **Desktop Resource Leaks**: Unbounded Crashpad dump growth (~5GB/day) clogs disk space (#25921)
- **Windows Keyboard Breakage**: Ctrl+Tab and Ctrl+Alt+S shortcuts stopped working after updates (#56697, #57988)
- **Cross-Device Sync Issues**: Threads created on desktop fail on iOS due to active-writer conflicts (#40558)
- **Performance Regressions**: Severe slowdown on Windows (30-90 min tasks) with abnormal quota depletion (#59262)
- **Auth Token Refresh Failures**: `codex resume` doesn't honor switched accounts between CLI launches (#50859)

---

*End of digest. Data sourced from github.com/openai/codex on 2026-11-04.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a structured English digest for the Gemini CLI community based on the provided GitHub data. Let me analyze what's available:

1. **Latest Releases**: There's one release - v0.67.0-nightly.20261104.g89e9d25d6 with 2 changes:
   - fix(cli): handle stream failures during extension release downloads
   - fix(core): preserve explicit gemini-2.5-flash model in dynamic model resolution

2. **Latest Issues**: There are 50 items, showing top 30 by comment count. I need to pick 10 noteworthy ones.

3. **Latest Pull Requests**: 29 items, showing top 20. I need to pick 10 important ones.

4. **Hot Discussions**: No discussion data was provided in the input, so I'll omit this section.

Let me organize this into the requested format:

**Section 1: Today's Highlights**
- The release v0.67.0-nightly.20261104.g89e9d25d6 includes fixes for stream failures during extension downloads and model preservation
- Multiple issues around subagent behavior (hanging, recovery, tool usage)
- PRs addressing MCP tool discovery, Windows PowerShell fixes, theme configuration

**Section 2: Releases**
- v0.67.0-nightly.20261104.g89e9d25d6 with 2 fixes

**Section 3: Hot Issues** - I need to pick 10:
1. #22323 - Subagent recovery after MAX_TURNS reported as GOAL success (13 comments, p1)
2. #19873 - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (9 comments, p2)
3. #21409 - Generalist agent hangs (8 comments, p1, 8 👍)
4. #22745 - Assess AST-aware file reads/search (7 comments, p2)


5. #21968 - Gemini doesn't use skills and sub-agents enough (7 comments, p2)
6. #22267 - Browser Agent ignores settings.json overrides (5 comments, p2)
7. #22232 - Browser Agent automatic session takeover (4 comments, p3)
8. #21983 - browser subagent fails in wayland (4 comments, p1)
9. #20079 - symlink agent files not recognized (4 comments, p2)
10. #24246 - 400 error with > 128 tools (3 comments, p2)

I'll analyze these issues, focusing on their technical implications and community impact. The problems range from critical agent behavior issues like hanging and incorrect reporting to more nuanced feature limitations around tool usage and configuration. The priority levels reveal a mix of urgent problems and potential enhancements that could improve the CLI's functionality.

The community shows significant concern about agent reliability, with multiple issues highlighting unexpected behaviors in subagents and browser interactions. Tool-related challenges and configuration inconsistencies suggest areas needing immediate attention and potential refactoring.</think>

# Gemini CLI Community Digest

**Date:** 2026-11-04
**Repository:** google-gemini/gemini-cli

---

## 1. Today's Highlights

The v0.67.0-nightly.20261104.g89e9d25d6 release addresses two critical fixes: stream failure handling during extension downloads and preserving explicit gemini-2.5-flash model selection. The community continues to grapple with subagent reliability issues—multiple P1 bugs report agents hanging, misreporting status, or failing to utilize custom skills. Windows PowerShell command substitution false positives and MCP tool discovery pagination represent significant infrastructure improvements merged this cycle.

---

## 2. Releases

| Version | Changes |
|---------|---------|
| **v0.67.0-nightly.20261104.g89e9d25d6** | 2 fixes: (1) `cli`: handle stream failures during extension release downloads [#30100](https://github.com/google-gemini/gemini-cli/pull/30100); (2) `core`: preserve explicit gemini-2.5-flash model in dynamic model resolution |

---

## 3. Hot Issues

| Issue | Priority | Comments | Summary |
|-------|----------|----------|---------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 | 13 | **Subagent recovery misreports GOAL success**: `codebase_investigator` reports `status: "success"` and "GOAL" termination even when it hit MAX_TURNS without completing analysis. Masks actual interruptions. |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | P2 | 9 | **Zero-Dependency OS Sandboxing**: Proposal to leverage Gemini 3's native bash affinity with post-execution intent routing to improve security without adding dependencies. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 | 8 👍 | **Generalist agent hangs**: CLI hangs indefinitely when deferring to the generalist agent—even simple operations like folder creation block for hours. Workaround: instruct model to avoid subagents. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | P2 | 7 | **AST-aware file reads/search**: Epic investigating whether AST-aware tools can reduce token bloat and improve code navigation precision. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | P2 | 7 | **Gemini ignores custom skills/sub-agents**: Model doesn't spontaneously use custom skills (e.g., gradle, git) even when tasks are highly relevant. Only responds to explicit instructions. |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | P2 | 5 | **Browser Agent ignores settings.json**: `maxTurns` and other config overrides in `settings.json` are completely ignored by the Browser Agent. |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | P3 | 4 | **Browser session lock recovery**: Request for automatic session takeover and lock recovery instead of current fail-fast strategy when browser profile is locked. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | P1 | 4 | **Browser subagent fails in Wayland**: Browser subagent fails on Wayland display servers with GOAL termination. |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | P2 | 4 | **Symlinked agent files not recognized**: Markdown files in `~/.gemini/agents/` that are symlinks are not loaded as agents. |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | P2 | 3 | **400 error with >128 tools**: Gemini CLI throws 400 error when more than ~128 tools are available. Request for smarter tool scoping. |

---

## 4. Key PR Progress

| PR | Area | Status | Description |
|----|------|--------|-------------|
| [#30122](https://github.com/google-gemini/gemini-cli/pull/30122) | agent | OPEN | **Load agents from symlinked markdown files** — Fixes `loadAgentsFromDirectory()` to recognize symlinked `.md` files using `isSymbolicLink()` check. |
| [#30119](https://github.com/google-gemini/gemini-cli/pull/30119) | core | OPEN | **Standalone theme.json configuration** — Enables custom themes via `~/.gemini/theme.json` and XDG paths, decoupled from `settings.json`. |
| [#30118](https://github.com/google-gemini/gemini-cli/pull/30118) | core | CLOSED | **Rootless Podman support** — Supplies `--userns=keep-id` flag to prevent `EACCES` errors on files created in bind-mounted workspaces. |
| [#30117](https://github.com/google-gemini/gemini-cli/pull/30117) | non-interactive | OPEN | **Normalize error payloads in headless CLI** — Centralized error normalization utility for consistent `gemini -p` output formatting. |
| [#30110](https://github.com/google-gemini/gemini-cli/pull/30110) | core | OPEN | **Fix Windows PowerShell false positives** — Resolves v0.63.0 regression where parentheses in commands were falsely blocked as command substitutions. |
| [#30057](https://github.com/google-gemini/gemini-cli/pull/30057) | core | CLOSED | **Preserve explicit gemini-2.5-flash model** — Ensures `--model gemini-2.5-flash` isn't overridden when `useLatestFlash` is active. |
| [#29988](https://github.com/google-gemini/gemini-cli/pull/29988) | core | OPEN | **Track all VSCode disposables** — Fixes `gemini.diff.accept` and `onDidChangeWorkspaceFolders` listener not being disposed properly. |
| [#29843](https://github.com/google-gemini/gemini-cli/pull/29843) | agent | CLOSED | **Paginate MCP tool discovery** — Uses `nextCursor` to fetch all tool pages from MCP servers instead of only the first page. |
| [#29973](https://github.com/google-gemini/gemini-cli/pull/29973) | core | OPEN | **Skip file writes after cancellation** — Re-checks cancellation state before `replace`/`write_file` operations to prevent overwrites. |
| [#29983](https://github.com/google-gemini/gemini-cli/pull/29983) | docs | OPEN | **Research-mode example extension** — Adds a Perplexity-style research assistant extension under `docs/examples/research-mode/`. |

---

## 5. Feature Request Trends

| Theme | Related Issues |
|-------|----------------|
| **Agent reliability & correctness** | Subagent status misreporting (#22323), generalist hangs (#21409), skills underutilization (#21968) |
| **Enhanced browser automation** | Wayland failures (#21983), settings override bugs (#22267), session lock recovery (#22232) |
| **Improved file/code intelligence** | AST-aware reads/search (#22745, #22747), tactful extraction for tokens (#19561), native file tools for task tracking (#21000) |
| **Security & sandboxing** | Zero-dependency OS sandboxing (#19873), destructive behavior guardrails (#22672) |
| **Extensibility** | Symlinked agent files (#20079), subagent discovery via settings (#18285), subagent trajectory sharing (#22598) |

---

## 6. Developer Pain Points

1. **Subagent instability**: Agents hanging indefinitely, misreporting success/failure, and failing to utilize available skills create unpredictable debugging experiences.

2. **Browser automation gaps**: The Browser Agent consistently ignores configuration, fails on Linux/Wayland, and lacks resilience mechanisms for session locks.

3. **Windows compatibility regressions**: PowerShell command substitution false positives (v0.63.0) block legitimate developer workflows.

4. **Tool discovery failures**: MCP servers exposing >128 tools cause 400 errors; pagination support was only recently merged.

5. **Configuration inconsistency**: Global and project-level `settings.json` overrides are selectively respected across different agent types.

6. **Symlink handling**: Common developer patterns (symlinked agent definitions) are silently ignored without error messages.

---

*Generated from GitHub data — google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest for 2026-11-04 based on the provided GitHub data. Let me analyze the data and create a structured digest following the specified format.

Let me organize the information:

**Releases (last 24h):**
- v1.0.106-7: Added Rex terminals inline images, /code command, Fusion tier setting, improved browser-use plugin
- v1.0.106-6: Added unified dashboard for /settings, interactive CLI status reporting, improved MCP content handling

**Latest Issues (top by comment count):**
1. #4438 - disable-model-invocation makes skill unreachable (13 comments, 18 👍)
2. #5105 - macOS sandbox blocks Gradle daemon (7 comments)
3. #1148 - CRLF line endings issue (7 comments, 9 👍)
4. #1257 - Termux/Android Support (6 comments, 7 👍)
5. #5109 - copilot-cli unusable (5 comments)
6. #5270 - Models stuck in 'plan' mode (4 comments)
7. #5115 - /rename reports success but doesn't rename (4 comments)
8. #4555 - session/prompt aborts session (3 comments)
9. #5171 - NumLock-off numpad navigation ignored (3 comments, 1 👍)
10. #3889 - Support stdio transport server (2 comments)
11. #5130 - Managed account policy errors (2 comments, 1 👍)
12. #4536 - MCP image content blocks not surfaced (1 comment)
13. #5347 - Connectors loading failure (1 comment)
14. #5346 - Managed settings 422 error (1 comment)
15. #5337 - MCP OAuth trailing slash (1 comment)
16. #5293 - ACP session/prompt held until shell exits (1 comment)


17. #5285 - CLI cannot interact with sandbox (1 comment)
18. #5342 - Managed settings fetch fails (1 comment)
19. #4502 - Un-archive session feature (1 comment, 2 👍)
20. #3942 - copilot --acp with --agent (1 comment, 1 👍)
21. #5099 - Display-only hook for messages (1 comment)
22. #5206 - Explicit approval denied in resumed sessions (1 comment)
23. #2826 - Markdown tables in /experimental ask-user (1 comment, 1 👍)
24. #5335 - HTTP 422 cybersecurity-risk flags (1 comment)

I notice several persistent issues affecting CLI functionality: sandboxing limitations on macOS, enterprise policy conflicts, protocol support gaps, and Windows-specific problems. The most active discussions center around skill invocation restrictions, line ending conversions, and cross-platform compatibility challenges.

The recently merged PR #5339 introduces a read-only agent monitor TUI with timeline visualization, representing a significant enhancement to the CLI's observability. Given the scope of issues identified, I'll structure the report to prioritize the most impactful problems and feature developments.</think>

# GitHub Copilot CLI Community Digest

**Date:** 2026-11-04

---

## 1. Today's Highlights

GitHub Copilot CLI released versions **v1.0.106-6** and **v1.0.106-7**, introducing a unified settings dashboard, Kitty terminal image rendering, a new `/code` command for VS Code integration, and a Fusion tier configuration option. The community continues to surface critical issues around enterprise managed settings failures and model plan-mode hangs, with several new regression reports emerging from the field.

---

## 2. Releases

### v1.0.106-7
- **Added:** Rex terminals now render inline images using Kitty direct placements
- **Added:** New `/code` command opens the current session in VS Code
- **Added:** Fusion tier setting via `copilot config`
- **Improved:** Updated built-in browser-use plugin to 0.1.0 with enhanced setup and browser integration

### v1.0.106-6
- **Added:** `/settings` now opens unified dashboard for all users with global search across settings and local resources
- **Added:** Interactive CLI reports program status to supporting terminals, including attention alerts
- **Improved:** MCP content addressed only to the user is no longer sent to the model

---

## 3. Hot Issues

### Issue #4438 — disable-model-invocation: true makes skill unreachable
**Author:** grammy-jiang | **Comments:** 13 | **👍:** 18  
A project skill with `disable-model-invocation: true` in its `SKILL.md` frontmatter is completely unreachable—even explicit invocation fails with "Skill not found." This breaks workflows where users want manual-only skill triggering. The 18 thumbs-up indicates significant community pain.

**Link:** https://github.com/github/copilot-cli/issues/4438

### Issue #1148 — Copilot-cli changes files to CRLF line endings
**Author:** BillyONeal | **Comments:** 7 | **👍:** 9  
Long-standing Windows regression: any file edited by Copilot gets converted from LF to CRLF line endings, even when the original file used LF. Affects cross-platform projects and causes unnecessary diff noise.

**Link:** https://github.com/github/copilot-cli/issues/1148

### Issue #1257 — Termux/Android Support
**Author:** Tiberriver256 | **Comments:** 6 | **👍:** 7  
Feature request to run Copilot CLI on Android via Termux. Currently fails with `Failed to load native module: pty.node`. High community interest for mobile development workflows.

**Link:** https://github.com/github/copilot-cli/issues/1257

### Issue #5270 — Models stuck in 'plan' mode
**Author:** mtalexan | **Comments:** 4  
When GPT-6.1 Sol is selected (explicitly or via Auto mode), the transition from Plan to Implementation mode hangs indefinitely. Blocks real work for users relying on this model.

**Link:** https://github.com/github/copilot-cli/issues/5270

### Issue #5109 — copilot-cli is unusable (Managed account policy errors)
**Author:** jelmd | **Comments:** 5  
Enterprise users report constant "Managed account policy could not be refreshed" errors, making the CLI nearly unusable. Multiple users affected in managed/macOS environments.

**Link:** https://github.com/github/copilot-cli/issues/5109

### Issue #5171 — NumLock-off numpad navigation ignored on Windows
**Author:** justcode411 | **Comments:** 3 | **👍:** 1  
Regression: Numpad navigation (4/8/6/2) and Delete keys are ignored when NumLock is off on Windows 11 laptops. Impacts productivity for users without full keyboards.

**Link:** https://github.com/github/copilot-cli/issues/5171

### Issue #5105 — macOS sandbox blocks Gradle daemon
**Author:** nugarov | **Comments:** 7  
Even with local networking allowed, Gradle daemon connections fail inside the macOS sandbox. The daemon starts but the client cannot connect—blocking Java/Kotlin development workflows.

**Link:** https://github.com/github/copilot-cli/issues/5105

### Issue #5130 — Constant "Managed account policy" error message
**Author:** ffffionn | **Comments:** 2 | **👍:** 1  
Since CLI 1.0.94, users see persistent error popups about managed account policy every ~30 seconds. Severe UX impact for enterprise users.

**Link:** https://github.com/github/copilot-cli/issues/5130

### Issue #5346 — Managed settings endpoint returns 422 since 2026-11-03
**Author:** stuartsummers | **Comments:** 1  
Server-side regression: managed-settings polls now fail with HTTP 422 across all clients. Same request worked on 2026-11-02. Likely a backend deployment issue.

**Link:** https://github.com/github/copilot-cli/issues/5346

### Issue #5342 — Managed settings fetch fails: "model: Expected string, received object"
**Author:** jpcc1217 | **Comments:** 1 | **👍:** 1  
On macOS enterprise accounts, managed settings fetch fails with a type mismatch error. The `/login` workaround only clears it temporarily—new terminals show the error again.

**Link:** https://github.com/github/copilot-cli/issues/5342

---

## 4. Key PR Progress

### PR #5339 — Add read-only agent monitor TUI (Graph + Timeline)
**Author:** ychu-msft | **Status:** OPEN  
New independent terminal viewer under `tools/agent-monitor` for monitoring a single local Copilot CLI session. Visualizes agent relationships, wait times, and includes a timeline view. Addresses long-standing observability requests.

**Link:** https://github.com/github/copilot-cli/pull/5339

---

## 5. Feature Request Trends

Based on issue analysis, the most requested features are:

1. **Cross-platform expansion:** Android/Termux support (#1257), better Windows terminal compatibility
2. **Session management improvements:** Un-archive completed sessions (#4502), multiple plan/report access (#5349), image paste in ask_user (#5348)
3. **Enterprise/managed device reliability:** Stable managed settings, sandbox bypass options, permission handling in resumed sessions
4. **Enhanced observability:** Read-only agent monitoring (now in PR), background agent result retrieval (#5345)
5. **Terminal rendering:** Markdown table support in /experimental ask-user (#2826), Kitty inline image rendering (delivered in v1.0.106-7)
6. **Protocol compliance:** STDIO transport for MCP servers (#3889), ACP improvements

---

## 6. Developer Pain Points

- **Enterprise reliability issues:** Managed account policy errors, settings fetch failures, and 422 regressions are causing widespread disruption for business users
- **Line ending regressions:** CRLF conversion on Windows continues to frustrate cross-platform developers (#1148)
- **Model hang states:** Models stuck in plan mode block entire workflows (#5270)
- **ACP session behavior:** Session abort on prompt, rename failures, and held responses create integration challenges for editor plugin authors (#4555, #5115, #5293)
- **macOS sandbox limitations:** Gradle and other JVM toolchains fail despite networking permissions (#5105)
- **Keyboard navigation gaps:** NumLock issues on Windows laptops impair usability (#5171)

---

*Generated from GitHub data for github.com/github/copilot-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate an OpenCode community digest for 2026-11-04 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Looking at the data:

1. **Releases**: None in the last 24h

2. **Issues**: I need to pick 10 noteworthy issues. Looking at the data, the main themes seem to be:
- Free tier quota issues (many users reporting problems with free tier limits not resetting)
- Migration issues
- OAuth callback issues
- Session issues with image re-sending
- WebSocket reconnection

3. **PRs**: There are many PRs, I need to pick 10 important ones

4. **Discussions**: The data doesn't seem to include discussions, only issues and PRs

5. **Feature Request Trends**: Looking at the issues, there seem to be requests for better free tier handling, timeout features, etc.

6. **Developer Pain Points**: The main pain points seem to be:
- Free tier quota issues (not resetting properly)
- Usage limits being hit too quickly
- OAuth callback issues on Linux

Let me structure this properly:

**Today's Highlights**: Focus on the main themes - free tier issues dominate, some good bug fixes merged.

**Hot Issues**: Pick the most commented ones that matter:
1. #59387 - Free tier issues master issue (251 comments!)
2. #59178 - Free Models not available
3. #54736 - V1 migration aborts
4. #59794 - Session images re-sent issue
5. #61503 - OAuth Callback issues on Linux
6. #44162 - WebSocket reconnection reliability
7. #58751 - Free tier usage limit depends on request size
8. #60990 - BigPickle quota exhausted instantly
9. #61157 - Feature request for update thread
10. #61504 - Timeouts for permission requests


11. #61455 - Focus on TUI release highlights
12. #58091 - Locale string truncation
13. #60957 - Nix node_modules hashes update
14. #61548 - Shell patterns with env/redirect prefixes
15. #61532 - PowerShell exit codes
16. #58916 - Assistant part performance optimization
17. #61522 - Production release
18. #60880 - Benchmark strobe integration
19. #59803 - Copilot pricing mechanism
20. #61547 - TUI cold-start recovery improvements

The PRs appear focused on incremental improvements: TUI refinements, performance optimizations, shell integration, and benchmark tooling enhancements. Free tier problems dominate the issue tracker, with migration challenges and session handling also surfacing as key concerns. Permission request timeouts and update notification threads represent feature gaps users want addressed.</think>

# OpenCode Community Digest — 2026-11-04

## Today's Highlights

The OpenCode community is experiencing significant turbulence around free tier quota management — the dominant issue across the tracker with 250+ comments on the master thread. Meanwhile, the development team continues shipping solid improvements: performance optimizations for assistant message writes (84% reduction in WAL writes), better PowerShell exit code handling, and enhanced symlink/snapshot support. The TUI release promotion to production is underway.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|----------------|----------|
| [#59387](https://github.com/anomalyco/opencode/issues/59387) | **Free tier issues: master thread** — Users seeing "Free usage exceeded" errors, reset times that never trigger, and desktop version prompts despite using free models | Central tracking issue for the most widespread problem; 251 comments indicate severe community impact | 👍 18 |
| [#59178](https://github.com/anomalyco/opencode/issues/59178) | Free Models unavailable for 5+ days despite no quota usage — Users on subscription models see free models completely blocked | Indicates potential backend quota synchronization bug between subscription and free tiers | 👍 2 |
| [#54736](https://github.com/anomalyco/opencode/issues/54736) | V1 migration aborts on legacy message ID schema — Migration fails with `Session.Message.ID` validation error for messages not starting with `msg_` | Blocks users upgrading from V1; data integrity risk | 👍 0 |
| [#59794](https://github.com/anomalyco/opencode/issues/59794) | Session images re-sent on every request — All pasted/returned images are re-sent on every turn, breaking sessions on image-capped backends (e.g., vLLM with `limit-mm-per-prompt`) | Critical session breakage for image-heavy workflows; permanently corrupts sessions | 👍 0 |
| [#61503](https://github.com/anomalyco/opencode/issues/61503) | OAuth callback loopback refused on Linux — ChatGPT sign-in fails because callback handler (127.0.0.1:[PORT]) fails to capture the response | Blocks Linux users from OAuth authentication | 👍 0 |
| [#44162](https://github.com/anomalyco/opencode/issues/44162) | WebSocket reconnection unreliable — Especially problematic on mobile connections | Affects connectivity and session persistence | 👍 0 |
| [#58751](https://github.com/anomalyco/opencode/issues/58751) | Free tier `FreeUsageLimitError` depends on request size — Large context sessions always fail while new sessions succeed | Free tier unpredictably blocks long conversations | 👍 0 |
| [#60990](https://github.com/anomalyco/opencode/issues/60990) | BigPickle quota exhausted in 1–5 minutes (~5 messages) — Forces 24-hour cooldown immediately | Renders free model effectively unusable | 👍 1 |
| [#61157](https://github.com/anomalyco/opencode/issues/61157) | **[FEATURE]** Request for update thread — Users want a single place to subscribe for status updates during outages | Community requesting better incident communication | 👍 0 |
| [#61504](https://github.com/anomalyco/opencode/issues/61504) | **[FEATURE]** Timeouts for permission requests — `ask` rules wait forever, blocking sessions when nobody is present | Usability improvement for unattended sessions | 👍 0 |

---

## Key PR Progress

| # | PR | Summary |
|---|-----|---------|
| [#58916](https://github.com/anomalyco/opencode/pull/58916) | **perf(core): write each assistant part as its own row** — Stops rewriting entire assistant messages for streamed parts. **84.4% reduction in SQLite WAL writes** (47.89 MB → 7.46 MB) and massive `fsync` reduction | 🎯 High-impact performance fix |
| [#61522](https://github.com/anomalyco/opencode/pull/61522) | **chore(release): promote dev to production** — Includes moving public stats sync from AWS ECS to Cloudflare Workflow/Cron | Infrastructure migration |
| [#61548](https://github.com/anomalyco/opencode/pull/61548) | **fix(core): keep env and redirect prefixes in saved shell patterns** — Fixes "Always allow" patterns failing for commands like `FOO=bar git status` | Shell permission fix |
| [#61532](https://github.com/anomalyco/opencode/pull/61532) | **fix(core): report true exit codes from PowerShell** — Windows PowerShell now reports actual exit codes instead of always returning 0 | Windows reliability |
| [#61546](https://github.com/anomalyco/opencode/pull/61546) | **fix(core): capture snapshots for locations opened through symlink** — Fixes undo/session diffs breaking for projects in `/tmp`, `/var/folders`, or symlinked `~/code` | macOS compatibility |
| [#61547](https://github.com/anomalyco/opencode/pull/61547) | **fix(tui): cold-start recovery for slow locations (503 on metadata)** — Resolves silent dead-state bug when opening slow-initializing workspace locations (Windows UNC/SMB paths) | TUI resilience |
| [#61493](https://github.com/anomalyco/opencode/pull/61493) | **fix(core): prevent worktree cross-registration across projects** — Fixes worktree spam with sibling worktrees | Git reliability |
| [#59803](https://github.com/anomalyco/opencode/pull/59803) | **fix(core): price Copilot long-context tiers and cache writes** — Fixes severe undercounting of GitHub Copilot costs on long sessions | Pricing accuracy |
| [#61455](https://github.com/anomalyco/opencode/pull/61455) | **fix(tui): omit desktop-only release highlights** — TUI no longer advertises desktop-only features | TUI accuracy |
| [#58091](https://github.com/anomalyco/opencode/pull/58091) | **fix(tui): truncate locale strings by display width** — Fixes CJK character handling and surrogate pair splitting in truncation | i18n fix |

---

## Feature Request Trends

1. **Free tier reliability** — Overwhelming demand for consistent, predictable free quota behavior with reliable daily resets
2. **Incident communication** — Users want a dedicated status/update thread to subscribe to during outages
3. **Permission timeouts** — Requests for `ask` rules to have configurable timeouts rather than waiting indefinitely
4. **Session durability** — Improved handling of image-heavy sessions and backend limitations

---

## Developer Pain Points

1. **Free tier quota chaos** — The #1 pain point: resets that don't happen, limits hit after 2-5 messages, reset times shifting without usage, and "subscribe to Go" prompts despite using free models. Users feel deceived by the free tier.

2. **OAuth on Linux** — ChatGPT sign-in via OAuth completely broken due to callback handling failures.

3. **Migration failures** — V1 to V2 upgrades aborting on schema validation, leaving users stuck.

4. **Symlink/snapshot breakage** — Developers using standard macOS patterns (symlinked code directories) lose undo and session diff functionality.

5. **PowerShell exit codes** — Windows users lose proper error detection because PowerShell commands always return success.

---

*Digest generated from github.com/anomalyco/opencode — 2026-11-04*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Pi community digest for 2026-11-04 based on the provided GitHub data. Let me analyze the data and create a structured digest.

Key observations from the data:
1. **Latest Releases**: None in last 24h
2. **Latest Issues**: 50 total, top 30 shown - several are open bugs, some closed with fixes
3. **Latest PRs**: 27 total, showing top 20 - many closed, some open
4. **Latest Discussions**: 1 item - a Show and tell about OnlyClaws Android

Let me organize this into the requested sections:

**Today's Highlights**: Need to pick 2-3 most important updates
- The terminal color query bug (#10256) is significant with 23 comments
- Several MCP fixes related to streaming and message handling
- Windows-specific issues (Ctrl+V unbound, mintty color query)

**Releases**: None to report

**Hot Issues**: Pick 10 noteworthy ones
1. #10256 - Terminal color query leak (23 comments, 4 👍) - significant Windows/mintty issue
2. #9656 - Mouse wheel in fullscreen with Zellij (13 comments, 5 👍)
3. #7121 - Byte count fix in write tool (closed, 7 comments)
4. #9262 - Windows path separator in find tool (6 comments)
5. #11599 - RPC shutdown issue (6 comments, fix-available)
6. #6415 - lastChangelogVersion config (6 comments, 4 👍)
7. #9276 - grep OOM (5 comments)
8. #11697 - Relative $id resolution (5 comments, fix-available)
9. #11335 - MCP JSON maxMessageBytes (5 comments, fix-available)


10. #11710 - HTML comments in Markdown (4 comments)

I notice several MCP and transport-related fixes with multiple comments and available patches. These issues highlight ongoing improvements in error handling, stream management, and Windows integration. The bug reports show active community engagement, with issues receiving multiple comments and some already having proposed fixes.

The key themes seem to be:
- Cross-platform compatibility challenges
- Transport and streaming error handling
- Configuration and version management
- Performance and resource management

I'll continue analyzing the next set of issues to identify emerging patterns in the project's development. The team is actively addressing streaming error handling, MCP protocol implementations, and file tool performance. Several PRs focus on improving data processing efficiency, particularly around reading, streaming, and handling edge cases in coding agents. The fixes span schema resolution, tool functionality, and Markdown rendering, demonstrating a comprehensive approach to refining the system's core components.

Emerging themes include robust error management, protocol-level refinements, and optimizing resource utilization across different interaction modes. Key efforts target making the system more resilient and performant in various operational contexts.</think>

# Pi Community Digest — 2026-11-04

## Today's Highlights

The community remains focused on stability and edge-case fixes as Pi approaches its next release cycle. Notable developments include a high-traffic Windows terminal compatibility issue where color query replies leak into the prompt (#10256, 23 comments), alongside multiple MCP streaming fixes addressing message size limits and SSE parsing. The file tools continue to receive performance attention, with PRs landing for streaming reads and preserving byte-level fidelity during edits.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

| # | Issue | Why It Matters | 👍 |
|---|-------|----------------|-----|
| [#10256](https://github.com/earendil-works/pi/issues/10256) | **Terminal color query replies leak into prompt (mintty/ConPTY)** — 0.99.x builds on Windows expose raw RGB escape sequences in the prompt on startup, breaking the user experience. Critical for Windows users; 23 comments. | 4 |
| [#9656](https://github.com/earendil-works/pi/issues/9656) | **Mouse wheel scrolls prompt history instead of transcript in fullscreen (Zellij + Windows)** — A 13-comment thread documenting a regression where wheel scrolling behaves incorrectly inside multiplexer stacks. | 5 |
| [#9262](https://github.com/earendil-works/pi/issues/9262) | **find tool: Windows separators silently return no results** — Glob patterns like `src\**\*.ts` fail silently, confusing agents that copy native Windows paths. | 0 |
| [#10781](https://github.com/earendil-works/pi/issues/10781) | **Compaction summaries ignore transport setting** — Despite configuring SSE, compaction requests always use WebSocket for openai-codex, affecting users with network restrictions. | 0 |
| [#11264](](https://github.com/earendil-works/pi/issues/11264)) | **/new leaves old user input visible with warnings** — Model-scope warnings print over fullscreen UI, leaving stale content visible after session reset. | 3 |
| [#11547](https://github.com/earendil-works/pi/issues/11547) | **Add Modular as built-in provider** — Request to add Modular Cloud (`api.modular.com/v1`) as a first-party provider, reducing setup friction for users of their hosted inference. | 0 |
| [#11765](https://github.com/earendil-works/pi/issues/11765) | **Windows: Ctrl+V unbound in editor** — Paste only works via Alt+V on Windows, a surprising UX gap for desktop users. | 0 |
| [#11676](https://github.com/earendil-works/pi/issues/11676) | **Harness.close() leaves pi-ai provider session resources alive** — Durable sessions leak WebSocket resources on exit, preventing clean process termination. | 2 |
| [#10697](https://github.com/earendil-works/pi/issues/10697) | **Transport failures surface as bare 'terminated' — error.cause dropped** — Streaming errors lose context, making debugging transport-layer failures difficult. | 0 |
| [#9276](https://github.com/earendil-works/pi/issues/9276) | **grep with context lines causes OOM** — Reading matched files whole for context lines causes heap exhaustion on large logs; related to fix in #11705. | 0 |

---

## Key PR Progress

| # | PR | Summary |
|---|-----|---------|
| [#11750](https://github.com/earendil-works/pi/pull/11750) | **Stream read tool instead of loading whole files** — Major memory improvement; 200MB file now streams with O(1) memory vs. O(n). Open. |
| [#11751](https://github.com/earendil-works/pi/pull/11751) | **Edit preserves untouched bytes** — Fixes line ending normalization and encoding corruption during edits. Open. |
| [#11757](https://github.com/earendil-works/pi/pull/11757) | **Do not split surrogate pairs when truncating** — Fixes invalid UTF-16 when cutting text mid-emoji. |
| [#11755](https://github.com/earendil-works/pi/pull/11755) | **Hide HTML comments in Markdown rendering** — Fixes #11710; comments now hidden in all render surfaces. |
| [#11749](https://github.com/earendil-works/pi/pull/11749) | **Apply maxMessageBytes to Streamable HTTP JSON** — Closes the JSON response bypass for MCP message size limits. |
| [#11726](https://github.com/earendil-works/pi/pull/11726) | **Apply relative root $id only once** — Fixes schema validation failures with relative $id and $ref. |
| [#11746](https://github.com/earendil-works/pi/pull/11746) | **Process idle ctx.shutdown() in RPC mode** — Fixes stale shutdown requests in idle RPC sessions. |
| [#11736](https://github.com/earendil-works/pi/pull/11736) | **Dispose session runtime after startup benchmark** — Prevents resource leaks when benchmark runs with extensions. |
| [#11705](https://github.com/earendil-works/pi/pull/11705) | **Take grep context from ripgrep** — Offloads context extraction to rg, eliminating file reading in grep tool. |
| [#11685](https://github.com/earendil-works/pi/pull/11685) | **Pack pi-schema in Nix package** — Fixes evaluation failure from missing integrity in package overrides. |

---

## Hot Discussions

| # | Category | Discussion | Summary |
|---|----------|------------|---------|
| [#11722](https://github.com/earendil-works/pi/discussions/11722) | **Show and tell** | **OnlyClaws Android — give Pi a phone claw** | A project wiring Android phones into the same agent loop used for ESP32 boards. OCA runs agent-pushed JavaScript, providing a transparent WebView overlay and TTS. | 1 👍 |

---

## Feature Request Trends

1. **Provider expansion** — Requests for first-party support for Modular Cloud (#11547) and Concentrate (#8412) as built-in providers.
2. **Storage replication** — Experimental session sync via Chord DHT (#11696) enabling multi-device session continuity.
3. **Windows UX parity** — Ctrl+V binding, terminal compatibility fixes for mintty/ConPTY indicate ongoing Windows desktop integration work.
4. **Transport flexibility** — Requests for consistent SSE/WebSocket behavior across all request types (compaction summaries).

---

## Developer Pain Points

- **MCP streaming edge cases**: Multiple issues around SSE parsing (CR-only line endings, response cancellation, message size limits) indicate the MCP implementation has rough edges when handling non-compliant servers.
- **Memory efficiency in file tools**: Large file handling in `read` and `grep` tools caused OOM issues; community is actively landing streaming solutions.
- **Windows path handling**: Silent failures with Windows separators in find tool and lack of Ctrl+V binding frustrate desktop users.
- **Schema validation complexity**: Relative `$id` resolution causing valid tool arguments to fail points to ongoing schema compiler fragility.
- **Resource cleanup in durable sessions**: Repeated reports of leaked WebSocket resources and timers preventing clean process exit.

---

*Digest generated from github.com/earendil-works/pi data — 2026-11-04*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a Qwen Code community digest for 2026-11-04 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Looking at the data provided:
1. Latest Releases: None (last 24h)
2. Latest Issues: 50 items total, showing top 30 by comment count
3. Latest Pull Requests: 50 items total, showing top 20 by comment count

I need to create a structured digest with:
1. Today's Highlights
2. Releases (omit if none)
3. Hot Issues (10 noteworthy issues)
4. Key PR Progress (10 important PRs)
5. Hot Discussions (no discussion data was provided, so I'll omit this)
6. Feature Request Trends
7. Developer Pain Points

Let me analyze the issues and PRs to identify the most important ones:

Key Issues to highlight:
1. #14724 - Main CI failed: Managed Agent gate (165 comments - most active)
2. #13078 - Daily dependency CVE audit failed (41 comments)
3. #15173 - Main CI failed: E2E Tests (37 comments)
4. #16219 - Main CI failed: E2E Tests - cli/extensions-install.test.ts (11 comments)
5. #16220 - Main CI failed: Managed Agent gate (8 comments)
6. #16214 - E2E "sandbox:docker" leg hits 60-minute cap (7 comments)
7. #16234 - Managed Runtime worker idles at 91 MiB (6 comments)
8. #16227 - GitHub channel can silently skip a comment (5 comments)
9. #16228 - GitHub channel posts duplicate error comments (5 comments)
10. #14746 - Security: Project hooks run without approval (4 comments)


11. #16039 - Sandbox image not published for 0.26.5 (4 comments)
12. #16063 - VS Code companion opens wrong file (4 comments)
13. #16187 - Anthropic requests timeout after 300s (3 comments)
14. #16188 - Bot workflow exhausts GITHUB_TOKEN rate limit (3 comments)
15. #15542 - Anthropic provider JSON side queries fail (3 comments)

The PR list appears extensive, spanning multiple entries and requiring careful selection to ensure comprehensive coverage of the most significant changes and improvements.</think>

# Qwen Code Community Digest — 2026-11-04

## Today's Highlights

The Qwen Code project is addressing significant CI infrastructure challenges, with multiple E2E and Managed Agent gate failures dominating recent activity. Memory optimization efforts are underway following a report that Managed Runtime workers idle at 91 MiB. A security fix for project hooks running without user approval is progressing through PR #14748, addressing a high-severity concern.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

| # | Issue | Summary | Why It Matters |
|---|-------|---------|----------------|
| **#14724** | [Main CI failed: Managed Agent gate — no test identified](https://github.com/QwenLM/qwen-code/issues/14724) | CI automation repeatedly fails to identify tests in the Managed Agent gate. 165 comments indicate this is a persistent, high-impact blocker for PR validation. | Blocks merge queue; affects all contributors |
| **#13078** | [Daily dependency CVE audit failed](https://github.com/QwenLM/qwen-code/issues/13078) | Scheduled security audit failed, potentially leaving critical vulnerabilities undetected. 41 comments tracking resolution. | Security hygiene; compliance requirement |
| **#15173** | [Main CI failed: E2E Tests — no test identified](https://github.com/QwenLM/qwen-code/issues/15173) | E2E test identification failures in `interactive/context-compress-interactive.test.ts`. 37 comments. | Core functionality validation broken |
| **#16214** | [E2E "sandbox:docker" leg hits 60-minute cap](https://github.com/QwenLM/qwen-code/issues/16214) | Docker-based E2E tests timeout ~50% of the time on main, causing cancellations. P1 priority with 7 comments. | Sandboxed review and autofix features affected |
| **#16234** | [perf(managed-agent): Managed Runtime worker idles at 91 MiB](https://github.com/QwenLM/qwen-code/issues/16234) | Idle workers consume ~91 MiB vs 7.7 MiB baseline—mostly unused modules and metadata. P2, 6 comments. | High memory footprint per sandbox; cost/performance |
| **#16227** | [GitHub channel can silently skip comments at poll-cursor boundary](https://github.com/QwenLM/qwen-code/issues/16227) | Race condition causes permanent missed comments when created at exact poll-second boundary. 5 comments. | Integration reliability issue |
| **#14746** | [[Security] Project hooks run at startup without approval](https://github.com/QwenLM/qwen-code/issues/14746) | Hooks in `.qwen/settings.json` execute immediately with default settings, no trust prompt. | Security vulnerability; user consent missing |
| **#16187** | [Anthropic requests timeout after 300s despite longer timeout config](https://github.com/QwenLM/qwen-code/issues/16187) | API calls disconnect at 301s regardless of `QWEN_CODE_API_TIMEOUT_MS` setting. P1, 3 comments. | Blocks long-running Anthropic operations |
| **#16188** | [Bot workflow burst exhausts GITHUB_TOKEN rate limit](https://github.com/QwenLM/qwen-code/issues/16188) | Autofix/triage/review bots collectively hit rate limits, blocking unrelated CI. P1, 3 comments. | CI reliability; developer friction |
| **#16249** | [Bitdefender detects Gen:Variant.Barys.381847 in official Windows ZIP](https://github.com/QwenLM/qwen-code/issues/16249) | Windows x64 0.27.0 archive blocked by Bitdefender. P1, 2 comments. | False positive blocks Windows adoption |

---

## Key PR Progress

| # | PR | Description | Impact |
|---|-----|-------------|--------|
| **#14748** | [fix(cli): gate project hooks behind an approval dialog](https://github.com/QwenLM/qwen-code/pull/14748) | Hooks in `.qwen/settings.json` now require user approval before loading, matching MCP server behavior. | **Security fix** — addresses #14746 |
| **#16260** | [fix(ci): drop the healthy-default apt gate and prefer VPC intranet mirror](https://github.com/QwenLM/qwen-code/pull/16260) | Removes apt-mirror probe gate; switches to faster VPC intranet mirror. | CI speed improvement |
| **#16256** | [perf(managed-agent): queue journal commits on Session row instead of tenant lock](https://github.com/QwenLM/qwen-code/pull/16256) | Reduces lock contention for journal commits by locking Session row directly. | **Performance** — addresses #16234 |
| **#16200** | [fix(web-shell): close managed host integration gaps](https://github.com/QwenLM/qwen-code/pull/16200) | Fixes undefined backend path handling when host injects its own provider. | Web Shell stability |
| **#15775** | [fix(permissions): surface malformed rules to operators](https://github.com/QwenLM/qwen-code/pull/15775) | Invalid permission rules now show warnings and remain visible with `invalid: not applied` badge. | Configurability; debugging |
| **#16075** | [fix(permissions): match amend invocations instead of raw text](https://github.com/QwenLM/qwen-code/pull/16075) | AUTO-mode amend guard now parses shell invocations rather than regex-matching raw text. | **Security** — more accurate detection |
| **#15879** | [feat(managed-agent): add E2B Cloud runtime provider](https://github.com/QwenLM/qwen-code/pull/15879) | Adds opt-in external Workspace profiles for E2B Cloud file tools and foreground Shell. | **New integration** — expands hosting options |
| **#16211** | [fix(ci): run desktop smoke headless on rpm roots without Xvfb](https://github.com/QwenLM/qwen-code/pull/16211) | Uses weston compositor for RHEL 10 smoke tests; moves Xvfb to Fedora 44 only. | RHEL 10 CI compatibility |
| **#16081** | [fix(core): register promoted initial commits in unborn repos](https://github.com/QwenLM/qwen-code/pull/16081) | Ctrl+B-promoted commands that create a repo's first commit now register for Auto-mode amend exemption. | Git integration completeness |
| **#15318** | [fix(core): share compression cache for equivalent model selectors](https://github.com/QwenLM/qwen-code/pull/15318) | Keeps cache-sharing eligibility when re-selecting the current model with unchanged endpoint. | **Performance** — context compression efficiency |

---

## Feature Request Trends

The most requested features based on issue analysis:

1. **Unified Agent Loop** — Tracking issue #15327 requests running every surface on a single agent loop behind `experimental.unifiedAgentLoop`, consolidating the prompt→stream→tool→repeat cycle.
2. **Embedded Browser Preview / UI Inspector** — Issue #16209 requests a built-in Web UI/Live Preview panel in Qwen Code Desktop and `qwen serve` with real-time DOM inspection.
3. **Bellows Integration** — Issue #16233 requests documentation for Bellows desktop app integration, matching existing Zed/JetBrains/VSCode docs.
4. **Expanded Modality Support** — Issue #16244 requests adding Qwen2-VL, Qwen2.5-VL, and QVQ families to the modality catalog for proper image input handling.

---

## Developer Pain Points

Recurring frustrations from the community:

- **CI Flakiness**: E2E tests on `sandbox:docker` timeout at 60 minutes (~50% failure rate); Managed Agent gate fails to identify tests consistently.
- **Rate Limiting**: Bot workflows (autofix, triage, review) exhaust `GITHUB_TOKEN` installation limits, blocking unrelated CI jobs.
- **Memory Overhead**: Managed Runtime workers idle at 91 MiB—11× higher than bare Node—due to unused modules and metadata.
- **Security Configuration Defaults**: Project hooks execute without approval by default; users unaware of risk.
- **Provider Timeout Mismatch**: Anthropic requests fail at 300s regardless of configured timeout, breaking long operations.
- **Windows Antivirus False Positives**: Bitdefender blocks official Windows releases as "Gen:Variant.Barys.381847", hindering Windows adoption.
- **API Model Fallback**: OpenRouter `:exacto` model variants fall back to default 200K context window instead of respecting their actual limits.

---

*Digest generated from github.com/QwenLM/qwen-code on 2026-11-04*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*