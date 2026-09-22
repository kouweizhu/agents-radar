# AI CLI Tools Community Digest 2026-09-22

> Generated: 2026-09-22 01:04 UTC | Tools covered: 7

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

<think>The user wants me to generate a cross-tool comparison report for AI CLI tools based on the digest data I've already generated. Let me analyze the information across all the tools:

1. **Claude Code** (github.com/anthropics/claude-code)
2. **OpenAI Codex** (github.com/openai/codex)
3. **Gemini CLI** (github.com/google-gemini/gemini-cli)
4. **GitHub Copilot CLI** (github.com/github/copilot-cli)
5. **OpenCode** (github.com/anomalyco/opencode)
6. **Pi** (github.com/earendil-works/pi)
7. **Qwen Code** (github.com/QwenLM/qwen-code)

Let me gather the key metrics from each digest:

**Claude Code:**
- Releases: 0 in last 24h
- Issues: 50 total (top 30 by comments shown)
- PRs: 2 items
- Discussions: 0 (not mentioned)
- Status: Active

**OpenAI Codex:**
- Releases: 7 (v0.155-0.157 alphas)
- Issues: Not specified (50 total mentioned)
- PRs: 50 closed
- Discussions: 11
- Status: Active

**Gemini CLI:**
- Releases: 1 (v0.62.0-nightly)
- Issues: 50 total (top 30 shown)
- PRs: 10 highlighted
- Discussions: Not mentioned
- Status: Active

**GitHub Copilot CLI:**
- Releases: 3 (v1.0.87, v1.0.88-0, v1.0.88-1)
- Issues: Not specified
- PRs: 2 open
- Discussions: 3
- Status: Active

**OpenCode:**
- Releases: 1 (v1.18.32)
- Issues: 50 total


- PRs: 10 highlighted
- Discussions: Not mentioned
- Status: Active

**Pi:**
- Releases: 1 (v0.87.0)
- Issues: 50 total (top 20 shown)
- PRs: 18 closed
- Discussions: 2
- Status: Active

**Qwen Code:**
- Releases: 4 (v0.24.3, nightly, SDK, desktop)
- Issues: Not specified
- PRs: 20 highlighted
- Discussions: Not mentioned
- Status: Active

I notice the AI CLI ecosystem shows consistent activity across most tools, with Pi and Qwen Code having the most visible pull request engagement. OpenAI Codex stands out with multiple alpha releases, while Claude Code hasn't published recently. The discussion count remains low across most platforms, suggesting limited community interaction beyond issue tracking.</think>

# Cross-Tool Comparison: AI CLI Tools Ecosystem Report

## 1. Ecosystem Overview

The AI CLI tooling landscape has matured significantly, with seven active projects competing for developer mindshare. Today's activity reflects a mature market where differentiation hinges on platform coverage (Windows/WSL, macOS, Linux), enterprise features (MCP, OAuth, rate limiting), and developer experience (session management, permission flows). All tools are actively shipping releases on daily or weekly cadences, with the major vendors (Anthropic, OpenAI, Google, GitHub) maintaining rapid iteration alongside community-driven alternatives (OpenCode, Pi, Qwen). The space is defined by feature parity battles around session persistence, cost control, and sandboxing—while emerging directions like agent orchestration, remote control, and cross-session governance signal where the next competitive frontier lies.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Issues | PRs | Discussions | Status |
|------|----------------|--------|-----|-------------|--------|
| **Claude Code** | 0 | 50 | 2 | 0 | Active |
| **OpenAI Codex** | 7 | ~50 | 50 (closed) | 11 | Active |
| **Gemini CLI** | 1 | 50 | 10 | N/A | Active |
| **Copilot CLI** | 3 | ~30 | 2 | 3 | Active |
| **OpenCode** | 1 | 50 | 10 | N/A | Active |
| **Pi** | 1 | 50 | 18 (closed) | 2 | Active |
| **Qwen Code** | 4 | ~30 | 20 | N/A | Active |

*Note: "N/A" for Discussions indicates the channel is either not used or not tracked in the provided data.*

---

## 3. Shared Feature Directions

| Feature Direction | Tools Requesting | Specific Needs |
|-------------------|------------------|----------------|
| **Cost control / rate limiting** | Claude Code, Codex, Copilot CLI | Per-model rate limits in statusline, usage visibility, quota enforcement, expensive-agent confirmation prompts |
| **Session branching / persistence** | Codex, Copilot CLI, OpenCode | Branch sessions while preserving history, resume reliability, cross-session state |
| **Remote / headless control** | Claude Code, Codex, Copilot CLI, Pi | Daemon mode, remote control from mobile/ChatGPT, SSH workspace support |
| **Platform parity (Windows/WSL)** | All tools | UNC paths, sandboxing on WSL, clipboard in SSH, terminal rendering consistency |
| **MCP / plugin ecosystem** | Claude Code, Copilot CLI, OpenCode, Pi | MCP policy enforcement, scoped tool calls, custom headers for BYOK, extension API extensibility |
| **AST-aware tooling** | Gemini CLI, Pi | Reduce token bloat from firehose file reads; precise code navigation |
| **Memory / compaction robustness** | Codex, Gemini CLI, Pi | Prevent data loss on compaction, handle thinking messages, persist across sessions |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|------|---------------|--------------|---------------------|
| **Claude Code** | Reliability, enterprise sandbox, cross-platform | Enterprise devs, security-conscious teams | Strong sandbox isolation, extensive permission system, desktop parity |
| **OpenAI Codex** | Rapid AI-native development, agentic workflows | Developers seeking full-agent autonomy | High release velocity (7 alphas/day), extensive MCP support, integrated web search |
| **Gemini CLI** | Tool-use precision, AST-aware operations | Developers optimizing token usage | Novel sandboxing approach using POSIX tools, Epic tracking for architectural changes |
| **Copilot CLI** | CLI-first workflow, enterprise integration | GitHub power users, CLI enthusiasts | Tight GitHub integration, organizational policy enforcement |
| **OpenCode** | Self-hosting, local-first | Self-hosted deployments, privacy-sensitive users | Local LLM focus, community-contributed models (Zen marketplace) |
| **Pi** | Extension architecture, lifecycle hooks | Extension developers, advanced users | Canonical session context, actionable lifecycle hooks, vendor-agnostic design |
| **Qwen Code** | Multi-session hosts, SSH workflows | Remote development, enterprise teams | Dual-path managed agent architecture, cross-session governance |

---

## 5. Community Momentum & Maturity

| Tool | Issue Engagement | PR Velocity | Maturity Signal |
|------|------------------|-------------|-----------------|
| **OpenAI Codex** | High — 50 PRs closed, 11 active discussions | Very High (7 releases/24h) | Rapid iteration; breaking changes common |
| **Pi** | High — 18 PRs closed in snapshot | High | Architectural refinement; v0.87 shows maturity |
| **Qwen Code** | Moderate — 20 PRs highlighted | High (4 releases) | Active feature expansion; some regressions |
| **Gemini CLI** | Moderate — 50 issues tracked | Moderate | Nightly cadence; still evolving core APIs |
| **Claude Code** | Moderate — 50 issues, 2 PRs | Low | Stable; fewer but higher-stakes changes |
| **Copilot CLI** | Low — ~30 issues, 2 PRs | Low | Mature; incremental improvements |
| **OpenCode** | Moderate — 50 issues, 10 PRs | Moderate | Community-driven; rapid community contributions |

**Most active community:** OpenAI Codex — highest PR closure rate, active discussion forum, and aggressive release cadence indicate strong momentum.

**Fastest-growing capability areas:** Remote/SSH workflows (Qwen, Copilot, Pi), MCP extensibility (all tools), and cost governance (pervasive theme across all ecosystems).

---

## 6. Trend Signals

1. **Enterprise readiness is table stakes** — Every tool is investing in permission scoping, organizational policies, rate limiting, and sandboxing. The market has moved beyond "does it work" to "does it meet enterprise compliance."

2. **Session persistence is a battleground** — Resumability, compaction safety, and session branching appear in four of seven tools as active development areas. This reflects real user pain with long-running agentic workflows.

3. **Remote/headless control is emerging** — Three different tools (Codex, Copilot, Pi) have active RFCs or implementations for remote control. This suggests a shift toward daemon-style operation for CI/CD and mobile integration.

4. **Platform coverage remains a differentiator** — WSL and Windows-specific bugs persist across all tools. The tool that solves Windows/WSL reliability first gains a significant market segment.

5. **MCP ecosystem is consolidating** — MCP is now a first-class concern across Claude Code, Copilot CLI, OpenCode, and Pi. Tool providers must support it to remain competitive.

6. **Cost transparency is universally requested** — Per-model limits, quota visibility, and confirmation before expensive operations are requested across all tool communities. This reflects the shift toward metered AI usage in professional workflows.

7. **Community alternatives are viable** — OpenCode, Pi, and Qwen Code ship competitive features faster than some major vendors, indicating the open-core model is working. Community contributions (model support, bug fixes) appear in every digest.

---

*Report generated from 2026-09-22 community digest data across 7 AI CLI tools.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>Let me analyze the provided data from the anthropics/skills repository and create a comprehensive report.

Looking at the data:

**Pull Requests (sorted by comments, but all show "undefined" for comments):**

The PRs listed are all [OPEN] status. Let me identify the most notable ones based on their content and recency:

1. #1298 - fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
2. #1771 - feat(skills): add proofcore-contract-auditor for smart contract notarization
3. #1742 - fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
4. #1703 - Add md2video-audio skill
5. #1734 - Detect orphaned docx comments
6. #525 - Add pyxel skill for retro game development
7. #514 - Add document-typography skill
8. #1615 - Add scnet-hpc skill
9. #822 - feat: add AWT (AI Watch Tester) — AI-powered E2E testing skill
10. #538 - fix(pdf): correct case-sensitive file references in SKILL.md

**Issues (sorted by comments):**

1. #492 - Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse - 43 comments
2. #228 - Enable org-wide skill sharing in Claude.ai - 16 comments
3. #556 - run_eval.py: claude -p never triggers skills/commands (0% trigger rate) - 12 comments
4. #62 - All my skills have disappeared and now i get errors - 10 comments
5. #1329 - Proposing a second skill: compact-memory - 9 comments
6. #202 - skill-creator should be updated to best practice - 8 comments


7. #412 - Skill proposal: agent-governance — safety patterns - 6 comments
8. #189 - document-skills and example-skills plugins install identical content - 6 comments
9. #1487 - `claude-api` skill eagerly injects ~156k tokens - 4 comments
10. #1390 - mcp-builder: evaluation.py scores 0/N - 4 comments

Now I'll organize this into the requested format. For the Top Skills Ranking section, I notice that none of the PRs actually have comment counts displayed (they all show "undefined"), so I need to determine which ones to feature based on their content, recency, and engagement potential.

I'll select the most compelling PRs that showcase different skill categories and have the most developed descriptions. Looking at the list, these stand out: #1771 (smart contract auditor), #1703 (md2video-audio), #525 (pyxel retro game dev), #514 (document-typography), #822 (E2E testing), #1615 (HPC clusters), and #486 (ODT skill). For Community Demand Trends, I can draw from the Issues section which has actual comment counts to identify what users are requesting most. Looking at the active PRs with substantive content, several stand out as likely to land soon: the MCP builder fix (#1742) addresses a real compatibility issue, the md2video-audio skill (#1703) offers clear value, the proofcore-contract-auditor (#1771) targets a specific niche, and the HPC skill (#1615) fills a technical gap. The core demand seems to center on document processing capabilities—several PRs target Word documents specifically—alongside testing and development tooling.</think>

# Claude Code Skills Community Highlights Report

**Data: anthropics/skills as of 2026-09-22**

---

## 1. Top Skills Ranking

The repository shows 50 PRs, all currently open. The most substantial Skill proposals by functionality and completeness:

| PR # | Skill | Functionality | Status |
|------|-------|---------------|--------|
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | Agent Skill for Web3 developers performing automated static analysis of Solidity/Rust smart contracts, anchoring cryptographic audit proofs onto the TON Blockchain via ProofCore's zero-storage Merkle protocol | Open |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | Zero-cost skill that compiles Markdown documents into professional MP4 videos with realistic human-like voiceovers (via Marp conversion) | Open |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | Retro game development skill for Python—guides implementation, deterministic headless runs, frame inspection, and state verification | Open |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Prevents typographic problems in AI-generated documents: orphan words, widow paragraphs, numbering misalignment | Open |
| [#822](https://github.com/anthropics/skills/pull/822) | **AWT (AI Watch Tester)** | Open-source E2E testing skill giving Claude vision and browser control—zero-code test generation | Open |
| [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | Profile-based SSH/Slurm workflow skill for SCNet HPC cluster operations | Open |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT** | OpenDocument Format (.odt, .ods, .odf) creation, template filling, and HTML conversion | Open |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive testing stack: philosophy (Testing Trophy), unit testing (AAA pattern), React component testing | Open |

---

## 2. Community Demand Trends

Based on Issues (by comment volume):

| Issue # | Topic | Demand Signal |
|---------|-------|---------------|
| [#492](https://github.com/anthropics/skills/issues/492) | **Security & Trust** — Community skills under anthropic/ namespace impersonating official skills | 43 comments — **Highest priority**: trust boundary vulnerability |
| [#228](https://github.com/anthropics/skills/issues/228) | **Org-wide skill sharing** — Enable team/library sharing without manual upload | 16 comments — Enterprise collaboration gap |
| [#556](https://github.com/anthropics/skills/issues/556) | **Trigger evaluation failure** — run_eval.py reports 0% trigger rate | 12 comments — Core tooling bug |
| [#1329](https://github.com/anthropics/skills/issues/1329) | **compact-memory** skill proposal — Symbolic notation for compact agent state | 9 comments — Agent memory efficiency |
| [#202](https://github.com/anthropics/skills/issues/202) | **skill-creator best practices** — Verbose/educational tone undermines token efficiency | 8 comments — Skill quality standards |

**Key Demand Themes:**
- **Security & Trust Boundaries** (most-discussed issue)
- **Enterprise Collaboration** (org-wide sharing)
- **Developer Experience** (trigger evaluation reliability)
- **Agent Efficiency** (memory, token usage)

---

## 3. High-Potential Pending Skills

These active PRs show strong functionality and may merge soon:

| PR # | Skill | Why It May Land |
|------|-------|-----------------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder fix** | Fixes #1668—critical compatibility with mcp>=2.0.0 (streamable_http_client rename, custom headers) |
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | Web3 niche demand, well-scoped static analysis + blockchain notarization |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | Zero-cost video generation addresses common content creation need |
| [#1769](https://github.com/anthropics/skills/pull/1769) | **skill-creator fix** | Fixes #1721—corrects 0% recall bug in trigger detection |
| [#1790](https://github.com/anthropics/skills/pull/1790) | **docx fix** | Creates missing document.xml.rels for comments—defect fix |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for robust, production-ready document processing skills (DOCX, PDF, ODT, typography) combined with enterprise-grade security and collaboration features—reflecting Claude Code's evolution from experimental tool to workplace productivity platform.**

---

*Report generated from GitHub PR/Issue data. All PRs remain open as of 2026-09-22.*

---

<think>The user wants me to generate a Claude Code community digest based on the GitHub data provided. Let me analyze the data and create a structured digest.

Looking at the data:
1. Latest Releases: None in the last 24h
2. Latest Issues: 50 total, showing top 30 by comment count
3. Latest Pull Requests: 2 items

I need to create sections:
1. Today's Highlights
2. Releases (skip since none)
3. Hot Issues (pick 10)
4. Key PR Progress (pick 10)
5. Hot Discussions (no discussion data provided, so skip)
6. Feature Request Trends
7. Developer Pain Points

Let me identify the most notable issues:

Top by comments:
1. #45297 - UNC path support on Windows (29 comments, 30 👍)
2. #58693 - Spell checking cannot be turned off (18 comments, 10 👍)
3. #73468 - macOS sandbox ARG_MAX issue (11 comments, 6 👍) - CLOSED
4. #66269 - CJK text mojibake (9 comments, 1 👍) - CLOSED
5. #79305 - Custom themes for desktop app (9 comments, 19 👍)
6. #87647 - Auto-closed "has repro" issues (8 comments, 59 👍)
7. #79174 - MCP elicitation auto-decline (7 comments, 3 👍) - CLOSED
8. #86279 - send_message cross-session issue (6 comments, 1 👍) - CLOSED
9. #73770 - Per-model rate limits in statusline (6 comments, 18 👍)
10. #95313 - User confirmation for expensive agents (6 comments, 0 👍)


11. #78818 - Git worktree config.lock issue (6 comments, 1 👍)
12. #94830 - Local hosts permissions (5 comments, 5 👍)

Now for PRs:
1. #95932 - Issue template for GitHub connection problems (CLOSED)
2. #95423 - diff tool read-only optimization (OPEN)

I'll synthesize these findings into a comprehensive digest that highlights key technical challenges and community-driven improvements. The focus will be on Windows compatibility, macOS sandbox constraints, and emerging feature requests that demonstrate user engagement and potential platform enhancements.

The digest will critically examine the most pressing issues, including platform-specific limitations like UNC path support, spell check configuration, and sandbox restrictions. I'll prioritize issues with significant community interaction, emphasizing technical nuances and potential workarounds for developers encountering these challenges.</think>

# Claude Code Community Digest — 2026-09-22

## Today's Highlights

The past 24 hours saw significant community activity focused on cross-platform compatibility issues, with Windows receiving particular attention around UNC path support and sandbox constraints. A notable macOS sandbox regression affecting git worktrees was closed, while several high-impact feature requests around cost controls and theming gained momentum.

**No new releases** were published in the last 24 hours.

---

## Hot Issues

### 1. [UNC path support missing on Windows](https://github.com/anthropics/claude-code/issues/45297) — 29 comments, 30 👍
**Priority:** High | **Status:** OPEN | **Area:** cowork, Windows

The Cowork folder feature does not support UNC paths (\\server\share) on Windows, limiting enterprise environments that rely on network shares. This is a long-standing gap with 29 comments indicating sustained user pain.

### 2. [Spell checking cannot be turned off](https://github.com/anthropics/claude-code/issues/58693) — 18 comments, 10 👍
**Priority:** Medium | **Status:** OPEN | **Area:** desktop, Windows

Users report being unable to disable spell checking in the desktop app, making all entered text difficult to read for those who prefer to rely on their own proofreading or external tools.

### 3. [macOS sandbox ARG_MAX exceeded with git worktrees](https://github.com/anthropics/claude-code/issues/73468) — 11 comments, 6 👍
**Priority:** High | **Status:** CLOSED | **Area:** sandbox, macOS

A critical regression where the sandbox profile passed inline via `sandbox-exec -p` exceeds ARG_MAX when many git worktrees exist, rendering the sandbox completely unusable. **Status: Closed** — indicates a fix was merged.

### 4. [CJK text mojibake in fullscreen renderer](https://github.com/anthropics/claude-code/issues/66269) — 9 comments, 1 👍
**Priority:** Medium | **Status:** CLOSED | **Area:** tui, macOS

Copying Chinese/Japanese/Korean text from the terminal produces mojibake when using the no-flicker/fullscreen renderer. Setting `tui: "default"` works around it. **Status: Closed.**

### 5. [Desktop app: custom themes / accent colors](https://github.com/anthropics/claude-code/issues/79305) — 9 comments, 19 👍
**Priority:** High | **Status:** OPEN | **Area:** desktop, UI

Users request parity with the CLI's custom theme system. Currently the desktop app only offers light/dark/high-contrast, making Claude windows indistinguishable from other apps across multiple monitors. Strong community support (19 👍).

### 6. [6k+ "has repro" issues auto-closed since March 2026](https://github.com/anthropics/claude-code/issues/87647) — 8 comments, 59 👍
**Priority:** High | **Status:** OPEN | **Area:** process

A meta-issue highlighting that over 6,000 issues labeled "has repro" have been auto-closed. Community members argue this automation is too aggressive and loses valuable bug reports. Strongest reaction in the digest (59 👍).

### 7. [MCP elicitation auto-declined in VSCode](https://github.com/anthropics/claude-code/issues/79174) — 7 comments, 3 👍
**Priority:** Medium | **Status:** CLOSED | **Area:** MCP, VSCode

The MCP `elicitation` capability is declared but requests are auto-declined without UI in interactive VSCode sessions, despite the session being able to render other permission prompts. **Status: Closed.**

### 8. [Cross-session send_message never delivers](https://github.com/anthropics/claude-code/issues/86279) — 6 comments, 1 👍
**Priority:** High | **Status:** CLOSED | **Area:** core, Windows

The `mcp__ccd_session_mgmt__send_message` function returns success but the target session hangs indefinitely with no turn created. **Status: Closed** — fix likely deployed.

### 9. [Statusline: expose per-model weekly rate limits](https://github.com/anthropics/claude-code/issues/73770) — 6 comments, 18 👍
**Priority:** Medium | **Status:** OPEN | **Area:** cost, statusline

Feature request to expose Opus/Sonnet/Fable rate limits to the status line command's stdin JSON, enabling custom status lines to display the same meters as `/status`. Solid community interest.

### 10. [Request: user confirmation before spawning expensive agents](https://github.com/anthropics/claude-code/issues/95313) — 6 comments, 0 👍
**Priority:** High | **Status:** OPEN | **Area:** agents, permissions

Users want confirmation prompts before Claude spawns expensive background agents that can consume significant tokens without approval.

---

## Key PR Progress

### 1. [#95932](https://github.com/anthropics/claude-code/pull/95932) — Issue template for GitHub connection problems
**Status:** CLOSED | **Author:** dicksontsai

Adds a dedicated issue form for problems connecting GitHub on claude.ai. Includes the existing `github-integration` label and captures screenshot, intended action, actual outcome, and diagnostics.

### 2. [#95423](https://github.com/anthropics/claude-code/pull/95423) — diff: skip refetch on read-only shell commands
**Status:** OPEN | **Author:** poteat

Optimizes the diff panel to avoid unnecessary refetches. Previously, the panel refetched after every Bash/PowerShell call. Now it reads `isReadOnly` from the shell and skips refetching for read-only commands (`ls`, `git status`, `cat`, grep), improving performance.

---

## Feature Request Trends

Based on issue analysis, the following themes emerge as most requested:

1. **Cross-platform parity** — Desktop app theming, UNC path support, multi-language spell check
2. **Cost transparency & control** — Per-model rate limits in statusline, user confirmation for expensive agents, token/turn/time caps for background subagents
3. **Sandbox improvements** — macOS ARG_MAX handling, git worktree compatibility
4. **Headless/CI support** — Non-interactive auth paths (DesignSync), CI-compatible workflows
5. **TUI enhancements** — Markdown rendering fixes (ordered list renumbering), discussion mode for read-only sessions

---

## Developer Pain Points

The most recurring frustrations from the issue tracker:

- **Platform-specific regressions:** Windows UNC paths, macOS sandbox failures with worktrees, CJK text corruption
- **Auto-closure of bug reports:** The mass auto-closing of "has repro" issues (6,000+) is drawing significant community backlash
- **Cost unpredictability:** Background subagents consuming 1.7M tokens with no visible cost or approval process
- **VSCode extension limitations:** Multi-root workspace file picker broken, MCP elicitation not working in interactive sessions
- **Desktop-plugin discovery:** Local sessions never surface marketplace-installed plugins

---

*Generated from GitHub data — anthropics/claude-code | 2026-09-22*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate an OpenAI Codex community digest for 2026-09-22 based on the provided GitHub data. Let me analyze the data and create a structured digest following the specified format.

Let me organize the information:

**Releases (last 24h):**
- rust-v0.157.0-alpha.2
- rust-v0.157.0-alpha.1
- rust-v0.156.0-alpha.17
- rust-v0.156.0-alpha.16
- rust-v0.156.0-alpha.14
- rust-v0.156.0-alpha.13
- rust-v0.155.0-alpha.16.1

**Top Issues by comments:**
1. #42987 - GPT-6 Astra quota depleted (26 comments, 15 👍)
2. #42739 - Local projects disappear from sidebar (22 comments)
3. #18115 - Repository-scoped marketplace (16 comments, 67 👍)
4. #32614 - Agent-created tasks hidden from search (14 comments)
5. #40880 - 5-hour usage limit consumed faster (11 comments)
6. #39178 - Hidden avatarOverlay UI issue (11 comments)
7. #46613 - Windows sign-in stuck (9 comments)
8. #32315 - Windows sandbox setup error (9 comments)
9. #31864 - MultiAgentV2 reserved tool error (8 comments, 18 👍)
10. #24191 - Remote compact creates huge records (7 comments) - CLOSED
11. #44363 - Context compaction destroys transcript (7 comments)
12. #43573 - Computer Use SIGTRAP (7 comments)
13. #46960 - Linux MCP file descriptor leak (6 comments)


14. #28866 - codex resume OOM (5 comments)
15. #45353 - Windows Appshots timeout (5 comments)

**Top PRs (all closed, 50 total):**
- #47143 - Extract exec-server CLI startup
- #47142 - Honor system proxy settings for standalone web search
- #47137 - Prevent horizontal transcript selection from triggering autoscroll
- #47132 - Support caller-provided MITM CAs
- #47130 - Remove ultrafast service tier from gpt-5.6-sol
- #47129 - Preserve foreign working directories
- #47125 - Add extra policy configuration for Guardian reviews
- #47122 - Increase file upload timeout to 5 minutes
- #47121 - Pass thread IDs to attachment uploads
- #47118 - Support model-catalog overrides for Code Mode tool messages

**Discussions (11 total):**
1. #9200 - Remote control codex from ChatGPT app (51 comments, 191 👍)
2. #7782 - Deprecating chat/completions support (15 comments, 21 👍)
3. #8503 - Usage limit reached despite remaining (20 comments, 9 👍)
4. #38815 - Built with Codex: quality-adjusted LLM API cost (3 comments, 1 👍)
5. #39832 - Experimental rollback/safety wrapper (1 comment, 1 👍)
6. #47058 - Make instruction loading visible (1 comment, 1 👍)
7. #47020 - Browser extension problems (1 comment, 1 👍)
8. #46967 - ClawBridge for WeChat (1 comment, 1 👍)
9. #47107 - Sarge rule check (0 comments, 1 👍)
10. #47057 - Reduced Astra usage (0 comments, 1 👍)
11. #47027 - Per-pane Codex status line (0 comments, 1 👍)

Now I'll organize this into a structured digest.</think>

# OpenAI Codex Community Digest — 2026-09-22

## Today's Highlights

Codex saw heavy activity around quota and usage limit concerns, with multiple users reporting GPT-6 Astra depleting their 5-hour Plus quotas far faster than expected. The team shipped seven new Rust alpha releases (v0.155–v0.157) and closed 50 PRs, including proxy improvements for web search and realtime connections. Windows desktop issues dominate the issue tracker, while the community continues to push for remote control capabilities and better secret management.

---

## Releases

| Version | Notes |
|---------|-------|
| **rust-v0.157.0-alpha.2** | Latest alpha in the v0.157 series |
| **rust-v0.157.0-alpha.1** | Initial v0.157 alpha |
| **rust-v0.156.0-alpha.17** | Continued iteration on v0.156 |
| **rust-v0.156.0-alpha.16** | — |
| **rust-v0.156.0-alpha.14** | — |
| **rust-v0.156.0-alpha.13** | — |
| **rust-v0.155.0-alpha.16.1** | Patch release for v0.155 series |

All releases are Rust CLI alphas. No changelogs were attached; users consuming these versions should expect rapid iteration and potential breaking changes.

---

## Hot Issues

| # | Issue | Why It Matters | Sentiment |
|---|-------|----------------|-----------|
| **#42987** | **[bug, windows-os, rate-limits, CLI] GPT-6 Astra Medium depleted 100% of Plus 5-hour quota in two short turns** — 26 comments, 15 👍 | Users report Astra consuming quotas in minutes rather than hours. Critical for paying Plus subscribers. | ⚠️ High priority |
| **#42739** | **[bug, windows-os, app, session] Local projects disappear from sidebar after Windows desktop update** — 22 comments | Windows update wipes local projects from the sidebar, breaking workflow continuity. | ⚠️ |
| **#18115** | **[enhancement, skills] Repository-scoped marketplace and plugin configuration in project config** — 16 comments, 67 👍 | Highly requested feature: teams want to ship plugins/marketplace config alongside repos, not just user-scoped. | ✅ Popular request |
| **#32614** | **[bug, app, subagent, remote] Agent-created top-level task is hidden from desktop search and Codex Mobile Remote** — 14 comments | Subagent tasks don't appear in search, breaking discoverability in remote workflows. | ⚠️ |
| **#40880** | **[bug, windows-os, rate-limits, CLI] Codex 5-hour usage limit is being consumed significantly faster since reintroduction** — 11 comments | Follows #42987 — usage limits behaving unexpectedly on Windows. | ⚠️ |
| **#39178** | **[bug, windows-os, app, pets] Hidden avatarOverlay owns completed thread; primary UI stays "Thinking"** — 11 comments | UI stuck in "Thinking" state after thread completes, confusing users. | 🐛 |
| **#46613** | **[bug, windows-os, auth, app] ChatGPT Desktop stuck on "Unable to load sign-in requirements" after reset/reinstall** — 9 comments | Fresh Windows install can't sign in — blocks all usage. | 🔴 Blocking |
| **#32315** | **[bug, windows-os, sandbox, CLI] Windows elevated sandbox setup helper hits os error 206 when Base64 payload exceeds CreateProcessW limit** — 9 comments | Sandbox fails on complex payloads, blocking secure execution. | 🐛 |
| **#31864** | **[bug, CLI, subagent, Papercuts 2026] All GPT-5.6 Sol turns fail because MultiAgentV2 uses reserved collaboration.spawn_agent** — 8 comments, 18 👍 | Blocks all GPT-5.6 Sol sessions with a reserved tool error. | 🔴 Critical |
| **#44363** | **[bug, context, app, session] Context compaction rewrites stored rollout in place and permanently destroys conversation transcript** — 7 comments | Compaction destroys history — serious data integrity issue. | 🔴 Data loss |

**Full links:** [#42987](https://github.com/openai/codex/issues/42987) · [#42739](https://github.com/openai/codex/issues/42739) · [#18115](https://github.com/openai/codex/issues/18115) · [#32614](https://github.com/openai/codex/issues/32614) · [#40880](https://github.com/openai/codex/issues/40880) · [#39178](https://github.com/openai/codex/issues/39178) · [#46613](https://github.com/openai/codex/issues/46613) · [#32315](https://github.com/openai/codex/issues/32315) · [#31864](https://github.com/openai/codex/issues/31864) · [#44363](https://github.com/openai/codex/issues/44363)

---

## Key PR Progress

| # | PR | What Changed |
|---|----|--------------|
| **#47142** | Honor system proxy settings for standalone web search | Web search now respects configured system proxy (`respect_system_proxy`). |
| **#47132** | Support caller-provided MITM CAs in the network proxy | Added `network.mitm_ca` config for custom certificate/key files. |
| **#47130** | Remove the `ultrafast` service tier from `gpt-5.6-sol` | `gpt-5.6-sol` now only advertises `priority` tier. |
| **#47129** | Preserve foreign working directories in extension tool environments | Extension tools now receive environments even when working directories are non-native paths. |
| **#47122** | Increase OpenAI file blob upload timeout from 60s to 5min | Large file uploads no longer timeout prematurely. |
| **#47121** | Pass thread IDs to attachment uploads | Attachment stores now support thread-based placement. |
| **#47118** | Support model-catalog overrides for Code Mode tool messages | Code Mode tool messages now use catalog overrides, enabling custom `exec`/`wait` descriptions. |
| **#47116** | Honor configured product SKU in remote plugin requests | Remote plugins now respect `apps_mcp_product_sku` setting instead of hardcoding `codex`. |
| **#47114** | Preserve and expose thread item lifecycle timestamps | Added `startedAtMs` / `completedAtMs` to thread items. |
| **#47101** | Honor configured proxies for realtime WebSocket connections | Voice realtime WebSockets now use the proxy pipeline. |

**Full links:** [#47142](https://github.com/openai/codex/pull/47142) · [#47132](https://github.com/openai/codex/pull/47132) · [#47130](https://github.com/openai/codex/pull/47130) · [#47129](https://github.com/openai/codex/pull/47129) · [#47122](https://github.com/openai/codex/pull/47122) · [#47121](https://github.com/openai/codex/pull/47121) · [#47118](https://github.com/openai/codex/pull/47118) · [#47116](https://github.com/openai/codex/pull/47116) · [#47114](https://github.com/openai/codex/pull/47114) · [#47101](https://github.com/openai/codex/pull/47101)

---

## Hot Discussions

### Ideas

| # | Discussion | Summary |
|---|------------|---------|
| **#9200** | **[Ideas] Add the ability to remote control codex from ChatGPT app** — 51 comments, 191 👍 | Request for headless/daemon mode with remote control from the ChatGPT mobile app. Very popular. |
| **#47058** | **Make instruction loading, available capabilities, and execution evidence visible and auditable** — 1 comment, 1 👍 | Users want audit trails for what instructions were loaded and what work was performed. |
| **#47107** | **Sarge: a rule check that refuses the run, instead of another line in the instructions file** — 0 comments, 1 👍 | Enforceable rule-checking rather than advisory instruction files. |

### General

| # | Discussion | Summary |
|---|------------|---------|
| **#7782** | **Deprecating `chat/completions` support in Codex** — 15 comments, 21 👍 | Official deprecation notice for the older `chat/completions` API in favor of `responses`. |
| **#8503** | **"usage limit reached" despite Code Review usage showing 100% remaining** — 20 comments, 9 👍 | GitHub Connector reports usage limits hit even when quota shows full — persistent confusion. |
| **#47057** | **I reduced my Astra usage by 94% on a 23-hour build by making V4.1 Flash a native sub agent** — 0 comments, 1 👍 | Community workaround for Astra quota issues using Flash as a sub-agent. |

### Show and Tell

| # | Discussion | Summary |
|---|------------|---------|
| **#38815** | **Built with Codex: quality-adjusted LLM API cost comparisons across nine providers** — 3 comments, 1 👍 | TokenGauge Workbench — independent cost comparison tool built with Codex. |
| **#46967** | **ClawBridge for WeChat — ChatGPT Work, project chat, and explicit read-only Codex from WeChat** — 1 comment, 1 👍 | Local bridge for WeChat integration with Codex/Work. |
| **#47027** | **I made a per-pane Codex status line for WezTerm** — 0 comments, 1 👍 | WezTerm pane status indicator for multi-pane Codex usage. |

**Full links:** [#9200](https://github.com/openai/codex/discussions/9200) · [#47058](https://github.com/openai/codex/discussions/47058) · [#47107](https://github.com/openai/codex/discussions/47107) · [#7782](https://github.com/openai/codex/discussions/7782) · [#8503](https://github.com/openai/codex/discussions/8503) · [#47057](https://github.com/openai/codex/discussions/47057) · [#38815](https://github.com/openai/codex/discussions/38815) · [#46967](https://github.com/openai/codex/discussions/46967) · [#47027](https://github.com/openai/codex/discussions/47027)

---

## Feature Request Trends

1. **Repository-scoped plugin/marketplace configuration** — Teams want to bundle plugins and marketplace definitions in `.codex/`, not just user-scoped.
2. **Remote control / headless daemon mode** — Strong demand for running Codex as a background service controllable from mobile (191 👍 on #9200).
3. **Local secret store** — Secure credential management for API keys, SSH, database passwords.
4. **Auditability / instruction loading visibility** — Users want to see what instructions were loaded, what capabilities are active, and what work was performed.
5. **Enforceable rule checks** — Beyond advisory instruction files (Sarge concept).
6. **Per-pane / multi-instance UI indicators** — Status lines for terminal multiplexers (WezTerm, tmux).
7. **Activity summary expansion** — Default-expanded tool call summaries in the desktop app.

---

## Developer Pain Points

- **Quota/usage tracking inconsistency** — Users seeing "usage limit reached" when quota appears full; Astra consuming 5-hour limits in minutes (#42987, #40880, #8503).
- **Windows desktop instability** — Projects disappearing after updates, sign-in failures, UI bugs with "Thinking" state, selector unclickable.
- **Context compaction data loss** — Transcripts being permanently destroyed by compaction (#44363).
- **OOM / memory issues** — `codex resume` exhausting memory on large session JSONL (#28866, #30932).
- **MCP on Linux** — File descriptor leaks from `app-server` into MCP processes (#46960).
- **GPT-5.6 Sol breaking** — Reserved tool error blocking all Sol sessions (#31864).
- **Browser/computer-use crashes** — SIGTRAP errors in UIElementTreeTransformation, macOS Browser blocking authenticated sites.
- **Remote missing slash commands** — Android missing `/compact`, `/side`, `/fork`, `/feedback`, `/review`.

---

*Generated from GitHub data — 2026-09-22*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a GitHub community digest for the Gemini CLI project based on the provided data. Let me analyze the information and create a structured digest.

Looking at the data:
1. **Latest Releases**: There's one release - v0.62.0-nightly.20260921.gcfbcaa8df
2. **Latest Issues**: 50 total, showing top 30 by comment count
3. **Latest Pull Requests**: 23 total, showing top 20 by comment count

I need to create sections:
1. Today's Highlights - 2-3 sentences
2. Releases - summarize changes
3. Hot Issues - pick 10 noteworthy issues with explanations
4. Key PR Progress - pick 10 important PRs
5. Hot Discussions - no discussion data provided, so I'll omit this
6. Feature Request Trends - from issues
7. Developer Pain Points - recurring frustrations

Let me select the most important and interesting items:

**Releases:**
- v0.62.0-nightly.20260921.gcfbcaa8df - compare to previous night

**Hot Issues (selecting 10 most significant):**
1. #22323 - Subagent recovery after MAX_TURNS - 13 comments - P1 bug - this is critical
2. #19873 - Zero-Dependency OS Sandboxing - 9 comments - P2 enhancement - interesting technical approach
3. #21409 - Generalist agent hangs - 8 comments - P1 bug - user-blocking
4. #22745 - AST-aware file reads - 7 comments - P2 feature - technical enhancement
5. #21968 - Gemini does not use skills and sub-agents - 6 comments - P2 bug - behavior issue
6. #26525 - Add deterministic redaction and reduce Auto Memory logging - 5 comments - P2 security


7. #26522 - Stop Auto Memory from retrying low-signal sessions - 4 comments - P2 bug
8. #22232 - Enhance browser_agent resilience - 4 comments - P3 feature
9. #21983 - browser subagent fails in wayland - 4 comments - P1 bug
10. #21000 - Experiment with native file tools for task tracker - 4 comments - P3

I'm focusing on identifying the most impactful and relevant issues for the digest. The list includes critical bugs, technical enhancements, and user-experience problems that are likely to be of interest to developers working with the Gemini CLI project.

**Key PRs to watch:**
1. #29440 - UTF-8 offsets for web-fetch citations - core fix
2. #28422 - resolve reference ambiguity during extension checkout
3. #29244 - make tool file writes atomic and serialize same-path writes - P1 critical
4. #29439 - emit tool_call update prior to request_permission in ACP mode
5. #29437 - clean up temporary directory when background shell execution exits
6. #29436 - prevent 100% CPU hang from @ within quotes in stdin
7. #29432 - settle queued tool calls on scheduler disposal
8. #29435 - prevent process hang on session exit
9. #29429 - surface the limit and reset window the server reports
10. #29423 - persist folder trust in sandbox</think>

# Gemini CLI Community Digest — 2026-09-22

## Today's Highlights

The project continues shipping rapid nightly fixes with **v0.62.0-nightly.20260921.gcfbcaa8df**. Several high-priority issues are being addressed: a critical P1 fix for atomic file writes (#29244) prevents silent data loss during parallel tool execution, while another P1 fix (#29436) resolves a 100% CPU hang caused by `@` references within quoted strings in stdin. The community is also actively discussing AST-aware tooling (#22745) and zero-dependency OS sandboxing (#19873) as longer-term architectural improvements.

---

## Releases

| Version | Changes |
|---------|---------|
| **v0.62.0-nightly.20260921.gcfbcaa8df** | Nightly build. Compare against [v0.62.0-nightly.20260920.gcfbcaa8df](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260920.gcfbcaa8df...v0.62.0-nightly.20260921.gcfbcaa8df) for incremental changes. |

---

## Hot Issues

| # | Issue | Priority | Why It Matters | Reaction |
|---|-------|----------|----------------|----------|
| **#22323** | [Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 | Subagents report success (`Termination Reason: "GOAL"`) even when hitting max turns without completing analysis—masking actual failures. | 13 comments, 2 👍 |
| **#19873** | [Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873) | P2 | Proposes leveraging Gemini 3's native bash affinity with a novel zero-dependency sandboxing approach using POSIX tools. | 9 comments, 1 👍 |
| **#21409** | [Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 | **User-blocking:** CLI hangs indefinitely when deferring to the generalist agent—even simple folder creation hangs for up to an hour. | 8 comments, 8 👍 |
| **#22745** | [Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | P2 | Epic tracking whether AST-aware tooling could reduce token usage and improve precision for method-boundary reads. | 7 comments, 1 👍 |
| **#21968** | [Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968) | P2 | Model fails to autonomously invoke custom skills/sub-agents even when highly relevant—requires explicit user instruction. | 6 comments |
| **#26525** | [Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525) | P2 | **Security concern:** Auto Memory sends transcript content to model context before redaction; secrets may leak via logs. | 5 comments |
| **#26522** | [Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-wgemini/gemini-cli/issues/26522) | P2 | Auto Memory keeps resurfacing unprocessed low-signal sessions, creating infinite retry loops. | 4 comments |
| **#21983** | [browser subagent fails in wayland](https://github.com/google-gemini/gemini-cli/issues/21983) | P1 | Browser agent fails on Wayland display servers—a notable platform compatibility gap. | 4 comments, 1 👍 |
| **#20079** | [~/.gemini/agents/filename.md symlinks not recognized](https://github.com/google-gemini/gemini-cli/issues/20079) | P2 | Symlinked agent files in `~/.gemini/agents/` are not recognized as valid subagents. | 4 comments |
| **#22672** | [Agent should discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672) | P2 | Model occasionally uses risky commands like `git reset --force` when safer alternatives exist. | 3 comments, 1 👍 |

---

## Key PR Progress

| # | PR | Area | Summary |
|---|-----|------|---------|
| **#29244** | [fix(core): make tool file writes atomic and serialize same-path writes](https://github.com/google-gemini/gemini-cli/pull/29244) | core | **Critical P1 fix:** Parallel tool execution was silently losing edits when two operations targeted the same file—now serializes writes to same-path. |
| **#29436** | [fix(cli): prevent 100% CPU hang from @ within quotes in stdin](https://github.com/google-gemini/gemini-cli/pull/29436) | core | Fixes infinite loop when piped/pasted content contains `@` inside double quotes (e.g., `@scope/pkg` imports). |
| **#29440** | [fix(core): use UTF-8 offsets for web-fetch citations](https://github.com/google-gemini/gemini-cli/pull/29440) | agent | Fixes misplaced citations in `web-fetch` for non-ASCII responses by properly handling UTF-8 byte offsets. |
| **#29435** | [fix(cli,core): prevent process hang on session exit](https://github.com/google-gemini/gemini-cli/pull/29435) | cli/core | Properly cleans up stdin, fixes MCP transport termination, prevents process from hanging on session exit. |
| **#29437** | [fix(core): clean up temporary directory when background shell execution exits](https://github.com/google-gemini/gemini-cli/pull/29437) | core | Ensures `gemini-shell-*` temp directories are auto-cleaned after background process completion. |
| **#29432** | [fix(core): settle queued tool calls on scheduler disposal](https://github.com/google-gemini/gemini-cli/pull/29432) | core | Rejects queued tool batches and stops remaining tools from starting when scheduler is disposed. |
| **#29429** | [fix(quota): surface the limit and reset window the server reports](https://github.com/google-gemini/gemini-cli/pull/29429) | enterprise | Now displays quota limit and reset window to users when `RESOURCE_EXHAUSTED` errors occur. |
| **#29423** | [fix(cli): persist folder trust in sandbox](https://github.com/google-gemini/gemini-cli/pull/29423) | platform | Folder trust decisions in podman/docker sandboxes now persist to host's `trustedFolders.json`. |
| **#28422** | [fix(cli): resolve reference ambiguity during extension checkout](https://github.com/google-gemini/gemini-cli/pull/28422) | cli | Improves extension clone/checkout robustness by resolving references to concrete commit SHAs. |
| **#29319** | [fix(sdk): guard JSON.parse on tool-call args in sendStream](https://github.com/google-gemini/gemini-cli/pull/29319) | sdk | Guards `JSON.parse` in `sendStream` to prevent crashes from malformed tool-call arguments. |

---

## Feature Request Trends

1. **AST-aware tooling** — Multiple issues (#22745, #22746, #19561) request Abstract Syntax Tree support for precise code navigation, reducing token bloat from "firehose" file reads.
2. **Subagent autonomy** — Strong desire for the model to autonomously invoke skills and sub-agents without explicit prompting (#21968).
3. **Persistent task tracking** — Requests to replace in-context todo tracking with file-based CRUD operations (#18836).
4. **Security hardening** — Deterministic redaction for Auto Memory (#26525) and better handling of destructive operations (#22672).
5. **Platform compatibility** — Wayland support for browser agent (#21983), improved terminal resize performance (#21924).

---

## Developer Pain Points

- **Agent hangs** — Generalist agent (#21409) and interactive prompts (#22465) causing indefinite hangs remain unresolved.
- **Memory leaks / session persistence** — `/compress` command not persisting across sessions (#21335), session resume losing state.
- **Tool write conflicts** — Parallel file edits silently losing data (now being fixed in #29244).
- **Quota visibility** — Users unaware of rate limits until requests fail—now being surfaced (#29429).
- **Environment setup friction** — Folder trust prompts reappearing on every sandbox launch (#29423).

---

*Digest generated from [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) activity on 2026-09-22.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest for 2026-09-22 based on the provided GitHub data. Let me analyze the data and create a structured digest.

Let me organize the information:

**Releases (last 24h):**
- v1.0.88-1: Fixed issues with /allow-all during managed-settings refresh failures, exact session approvals, sandboxed network denials from proxy tunnel failures
- v1.0.88-0: Added OSC 777 terminal notifications for Ghostty and WezTerm, support for namespaced custom skills, MCP and plugin views show server display names, improved resumability
- v1.0.87: Added user and managed startup defaults for Auto routing tier, consecutive steering prompts combine into one pending message

**Issues (30 shown, I need to pick 10 noteworthy ones):**
Looking at the issues with most comments and reactions:
1. #3385 - Can't running copilot cli 1.0.49 on WSL after upgrade (14 comments, 9 👍) - Windows/WSL issue
2. #2486 - MCP server blocked by policy (8 comments) - MCP issue
3. #1313 - Session Branching (8 comments, 13 👍) - Feature request
4. #3399 - Allow custom headers for BYOK (6 comments, 14 👍) - Feature request
5. #3749 - Terminal streaming renderer corrupts output (6 comments, 8 👍) - Bug
6. #4211 - Can't handle BigInt in structured MCP response (6 comments, 3 👍) - Bug
7. #4699 - OOM crash on long --resume sessions (6 comments, 6 👍) - Bug, OPEN
8. #1663 - Agent implements changes during Plan Mode (4 comments, 6 👍) - Bug


9. #1425 - update hook payload to send session id (4 comments) - Feature request
10. #2629 - /instructions command doesn't show user-level files (3 comments, 2 👍) - Bug

**PRs (2 items):**
- #4739 - docs: propose terminal-owned macOS notifications
- #4770 - Document the WebSocket responses opt-out

Now I need to structure this into the digest format. I'll organize the most impactful issues by severity and community interest, then create a clear breakdown of what's fixed, what's broken, and what the community wants next.</think>

# GitHub Copilot CLI Community Digest

**Date:** 2026-09-22

---

## 1. Today's Highlights

GitHub released **v1.0.88-0** and **v1.0.88-1**, bringing terminal notification support for Ghostty and WezTerm, improved skill discovery with namespaced custom skills, and several fixes for permission handling and session management. The community continues to surface memory and streaming issues in long-running sessions, while feature requests around custom model configuration and session branching remain popular.

---

## 2. Releases

### v1.0.88-1 (2026-09-22)
**Fixed:**
- Preserve `/allow-all` during managed-settings refresh failures and remember exact session approvals for missing paths without granting parent directories; exact grants visible in `/list-dirs` and cleared by `/reset-allowed-tools`
- Sandboxed network denials from proxy tunnel failures

### v1.0.88-0 (2026-09-22)
**Added:**
- Optional OSC 777 terminal notifications for direct Ghostty and WezTerm sessions
- Support for namespaced custom skills and ignored skill directories during skill discovery
- MCP and plugin views show server display names and plugin descriptions for clearer status

**Improved:**
- Resumability improvements

### v1.0.87 (2026-09-21)
**Added:**
- User and managed startup defaults for the Auto routing tier, including strict and user-overridable organization policy
- Consecutive steering prompts in the same mode combine into one pending message; press Up in empty chat input to take it back for editing, including pasted text

---

## 3. Hot Issues

| # | Issue | Summary | Why It Matters | Reactions |
|---|-------|---------|----------------|-----------|
| **#3385** | [Can't running copilot cli on WSL after upgrade](https://github.com/github/copilot-cli/issues/3385) | CLI stuck on WSL version 6.6.114.1 after upgrading Copilot | Windows/WSL users unable to use CLI after updates; 14 comments, ongoing since May | 👍 9 |
| **#1313** | [Session Branching](https://github.com/github/copilot-cli/issues/1313) | Request to allow branching sessions while preserving conversation history | Highly requested workflow feature for experimenting with alternative approaches | 👍 13 |
| **#3399** | [Allow custom headers for BYOK](https://github.com/github/copilot-cli/issues/3399) | Allow configuring custom HTTP headers (e.g., X-Tenant-ID) for BYOK LLM servers | Enterprise users need multi-tenant header support; strong community demand | 👍 14 |
| **#3749** | [Terminal streaming renderer corrupts output](https://github.com/github/copilot-cli/issues/3749) | Doubled characters, truncated tokens, repeated lines during streaming | Affects daily usability; both thinking/reasoning and final output corrupted | 👍 8 |
| **#4699** | [OOM crash on long --resume sessions](https://github.com/github/copilot-cli/issues/4699) | V8 heap OOM during long resumed sessions; crash dumps written to cwd | Critical stability issue for power users; diagnostic files pollute working directory | 👍 6 |
| **#4211** | [Can't handle BigInt in structured MCP response](https://github.com/github/copilot-cli/issues/4211) | MCP servers returning large numbers cause `TypeError: Do not know how to serialize a BigInt` | Breaks MCP integration with numeric-heavy tools | 👍 3 |
| **#2486** | [MCP server blocked by policy](https://github.com/github/copilot-cli/issues/2486) | Personal Pro+ account suddenly blocked MCP server despite prior working usage | Frustrating policy enforcement without clear resolution path | 👍 0 |
| **#4218** | [Allow users to configure model pool used by Auto mode](https://github.com/github/copilot-cli/issues/4218) | Users cannot define which models Auto mode is allowed to use | Cost and behavior predictability concern; 16 👍 shows strong demand | 👍 16 |
| **#3704** | [Hebrew text should be RTL but displayed LTR](https://github.com/github/copilot-cli/issues/3704) | RTL languages like Hebrew and Arabic display incorrectly | Accessibility issue for non-LTR language users | 👍 0 |
| **#4844** | [--yolo launch flag swallowed by pre-auth fail-closed bypass](https://github.com/github/copilot-cli/issues/4844) | `--yolo`/`--allow-all` not persisted after policy resolves | Bypass permissions not reliably applied in enterprise environments | 👍 0 |

---

## 4. Key PR Progress

| # | PR | Summary | Status |
|---|-----|---------|--------|
| **#4739** | [docs: propose terminal-owned macOS notifications](https://github.com/github/copilot-cli/pull/4739) | Document macOS notification click problem with MIT-licensed terminal notification example and portable regression tests | OPEN |
| **#4770** | [Document the WebSocket responses opt-out](https://github.com/github/copilot-cli/pull/4770) | Document escape hatch for when WebSocket transport is unusable (network blocks WS or session fails with 400 input item ID error) | OPEN |

---

## 5. Feature Request Trends

**Top Requested Directions:**

1. **Model Configuration Flexibility** — Users want granular control over which models Auto mode can use, custom headers for BYOK setups, and ability to configure model pools for cost/behavior predictability.

2. **Session Management** — Branching sessions while preserving history, improved session ID tracking for debugging, and better handling of long/resumed sessions without OOM crashes.

3. **MCP Enhancements** — Better error handling for BigInt values, clearer policy messaging, and re-enumeration behavior changes.

4. **Terminal/Platform Improvements** — RTL language support, Windows/WSL reliability, terminal notification customization, and streaming output fixes.

5. **Permission & Policy Controls** — Granular organizational policies for tools (bash, file access), better bypass flag persistence, and plugin enablement state management.

---

## 6. Developer Pain Points

- **Memory Stability**: Long resumed sessions repeatedly crash with V8 heap OOM, dumping diagnostics into the working directory — disruptive to workflows.
- **Streaming Output Corruption**: Terminal renderer produces doubled characters, truncated tokens, and repeated lines, degrading the CLI experience daily.
- **WSL/Windows Reliability**: Upgrades break CLI functionality on WSL with no clear resolution path.
- **MCP Integration Gaps**: Policy blocks, BigInt serialization failures, and schema validation errors with GPT models create friction.
- **Configuration Discovery**: User-level instruction files not appearing in `/instructions`, symlink behavior undocumented on Windows, custom agent discovery fails in fresh worktree sessions.
- **Permission Persistence**: `--yolo` and `--allow-all` flags get swallowed during pre-auth, and plugin enablement states don't self-correct on restart.

---

*Generated from github.com/github/copilot-cli data — 2026-09-22*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze this GitHub data to create a comprehensive digest for the OpenCode community.

First, let me identify the key information:

## Latest Releases
- v1.18.32 released
- Bugfixes: Bedrock image attachments hoisting fixed for specific models, Together AI streaming usage reporting fixed
- Community contributor: @dc85 added DeepSeek V4.1 Flash and Grok 4.7 to Zen

## Latest Issues (showing top 30 by comment count)
Looking at the most commented issues:

1. #2773 - [CLOSED] Clipboard copy not works in remote SSH console (28 comments)
2. #29748 - [OPEN] Error: Unexpected server error (18 comments)
3. #48973 - [OPEN] reasoning `encrypted_content` was not issued to this caller (12 comments)
4. #48811 - [CLOSED] macOS: every prompt fails with "undefined is not an object" (10 comments) - 47 👍
5. #48645 - [CLOSED] Regression in 1.18.30: every prompt crashes with TypeError (10 comments) - 18 👍
6. #4734 - [CLOSED] [discussion] Refresh models manually (10 comments)
7. #49158 - [CLOSED] TypeError: undefined is not an object (9 comments) - 35 👍
8. #48372 - [CLOSED] SystemPrompt.environment (9 comments) - 27 👍
9. #36877 - [CLOSED] Reasoning thoughts not being shown (9 comments)
10. #45011 - [OPEN] Sessions created from CLI/TUI never appear in web Home (8 comments)
11. #50093 - [OPEN] Free usage exceeded and there's long retry timers (8 comments)
12. #39864 - [OPEN] Codex OAuth Fast models run at standard throughput (6 comments)


13. #46444 - [OPEN] Web Home hides global-project sessions (6 comments)
14. #42264 - [OPEN] TUI: text disappears during LLM streaming (5 comments)
15. #48803 - [CLOSED] v1.18.30: every prompt fails with TypeError (5 comments)
16. #37077 - [OPEN] [FEATURE] tab shortcuts (5 comments)
17. #50452 - [OPEN] Credits disappeared (4 comments)
18. #22252 - [CLOSED] Task subagent hangs (4 comments)
19. #38835 - [OPEN] compaction.reserved silently ignored (4 comments)

The issue tracker reveals several persistent problems affecting user experience. SSH clipboard functionality remains problematic, while various system prompt errors are causing widespread crashes across different versions. Model behavior inconsistencies and OAuth implementation gaps continue to surface. Multiple UI/UX problems persist, including session visibility issues and streaming complications in the terminal interface. Some feature requests like tab shortcuts and manual model refreshing are gaining traction, though core functionality bugs remain the primary concern.</think>

# OpenCode Community Digest — 2026-09-22

## Today's Highlights

The v1.18.32 release delivers two targeted bugfixes: Bedrock image attachment hoisting now correctly targets only Claude, Nova, and Llama 4 models, and Together AI streaming usage reporting is fixed. Community contributor @dc85 continues expanding model support with DeepSeek V4.1 Flash and Grok 4.7 additions. Meanwhile, the community is actively debugging a wave of "SystemPrompt.environment" crashes affecting v1.18.30 users, with multiple duplicate issues filed.

---

## Releases

### v1.18.32
**Release Date:** 2026-09-22

**Core Bugfixes:**
- Fixed Bedrock image attachments so they are only hoisted for Claude, Nova, and Llama 4 models
- Fixed Together AI streaming usage reporting

**Community Contributions:**
- @dc85 added DeepSeek V4.1 Flash to Zen (#49897)
- @dc85 added Grok 4.7 to Zen

**GitHub Release:** [anomalyco/opencode/releases/tag/v1.18.32](https://github.com/anomalyco/opencode/releases/tag/v1.18.32)

---

## Hot Issues

### 1. macOS Prompt Failures: "undefined is not an object (evaluating 'a.name')"
**#48811** | Status: CLOSED | Comments: 10 | 👍: 47

A critical regression in v1.18.30 caused every prompt to fail on macOS with `TypeError: undefined is not an object (evaluating 'a.name')` in `SystemPrompt.environment`. The error occurred on session startup with no special input required. Multiple duplicate issues were filed, indicating widespread impact. **Fixed in subsequent versions.**

[Issue #48811](https://github.com/anomalyco/opencode/issues/48811)

### 2. SystemPrompt.environment TypeError — v1.18.18 Works Fine
**#48645** | Status: CLOSED | Comments: 10 | 👍: 18

Users reported that after upgrading to v1.18.30 via pacman, every prompt fails immediately with "Unexpected server error." This regression was confirmed to work on v1.18.18, suggesting a recent change broke the system prompt assembly. **Now resolved.**

[Issue #48645](https://github.com/anomalyco/opencode/issues/48645)

### 3. Clipboard Copy Not Working in Remote SSH Console
**#2773** | Status: CLOSED | Comments: 28 | 👍: 3

Long-running issue (created 2025-09-25) where OpenCode running in a remote SSH console lacks clipboard copy functionality that Claude Code provides. Users cannot copy selected text in remote sessions. This remains an open feature gap for remote development workflows.

[Issue #2773](https://github.com/anomalyco/opencode/issues/2773)

### 4. "Unexpected Server Error" After Adding OpenRouter API
**#29748** | Status: OPEN | Comments: 18 | 👍: 2

After adding the OpenRouter API directly and switching projects, users encounter an "Unexpected server error" that persists even after restarting the app. This blocking issue prevents normal usage for affected users.

[Issue #29748](https://github.com/anomalyco/opencode/issues/29748)

### 5. Reasoning `encrypted_content` Not Issued to Caller
**#48973** | Status: OPEN | Comments: 12 | 👍: 8

When using Muse Spark 1.3 Free with OpenCode Zen, users receive: "Upstream request failed: [invalid_request_error] reasoning `encrypted_content` was not issued to this caller." This appears to be a provider/API mismatch issue affecting free tier usage.

[Issue #48973](https://github.com/anomalyco/opencode/issues/48973)

### 6. Feature Request: Refresh Models Manually
**#4734** | Status: CLOSED | Comments: 10 | 👍: 9

Users requested the ability to manually refresh the models list. Currently, there's no UI option to trigger a model list refresh, which is needed when new models are added or when the cache becomes stale. **Now implemented via PR #50456.**

[Issue #4734](https://github.com/anomalyco/opencode/issues/4734)

### 7. Sessions Created from CLI/TUI Never Appear in Web Home
**#45011** | Status: OPEN | Comments: 8 | 👍: 2

Sessions created via `opencode run`, TUI, or agents never appear in the web UI Home. The Projects sidebar shows empty even though sessions exist. This appears to be a client-side-only project registration issue when projects aren't manually added in the browser.

[Issue #45011](https://github.com/anomalyco/opencode/issues/45011)

### 8. Free Usage Exceeded — Long Retry Timers Escalating
**#50093** | Status: OPEN | Comments: 8 | 👍: 5

Free tier users report that after exceeding usage limits, retry timers escalate dramatically. Waiting 6+ hours and switching to a different free model results in even longer wait times (e.g., 6h16m → longer). This creates a frustrating user experience for free tier users.

[Issue #50093](https://github.com/anomalyco/opencode/issues/50093)

### 9. Web Home Hides Global-Project Sessions
**#46444** | Status: OPEN | Comments: 6 | 👍: 0

When running `opencode web` from a non-git repository directory, the Home page displays an empty session list despite CLI showing dozens of sessions. Sessions created outside git repos are invisible in the web UI.

[Issue #46444](https://github.com/anomalyco/opencode/issues/46444)

### 10. TUI Text Disappears During LLM Streaming — TreeSitter Worker Stack Overflow
**#42264** | Status: OPEN | Comments: 5 | 👍: 4

During LLM streaming, the syntax highlighting worker crashes with a WASM stack overflow in tree-sitter's `captures()`. Because the streaming code path doesn't update the text buffer independently of the highlight result, worker crashes leave displayed code frozen at a previous state.

[Issue #42264](https://github.com/anomalyco/opencode/issues/42264)

---

## Key PR Progress

### 1. feat(tui): add automatic tabs mode
**#50456** | Status: CLOSED | Contributor: opencode-agent[bot]

Replaced the boolean tab setting with `tabs.mode`: `auto`, `on`, or `off`. Defaults to `auto`, disabling session tabs when `HERDR_ENV=1`. Maintains backward compatibility with `tabs.enabled`. This implements the feature request from issue #4734.

[PR #50456](https://github.com/anomalyco/opencode/pull/50456)

### 2. feat(app): sign in to OpenCode Go and Console through the browser
**#50267** | Status: OPEN | Contributor: Hona

Desktop onboarding for OpenCode Go / OpenCode Console now redirects directly to browser-based Console sign-in. The API key path is now a small link at the bottom. This streamlines the authentication flow for new users.

[PR #50267](https://github.com/anomalyco/opencode/pull/50267)

### 3. feat: chat.model hook
**#50448** | Status: CLOSED | Contributor: dmouse

Adds a `chat.model` hook that lets plugins dynamically select the model before each provider turn, instead of using one model for the entire task. Enables runtime model switching for multi-model workflows.

[PR #50448](https://github.com/anomalyco/opencode/pull/50448)

### 4. fix(client): preserve service startup failures
**#50462** | Status: OPEN | Contributor: abpai

Preserves the first startup failure in both service clients. When overlapping processes fail to bind a port, the captured error is now shown to users instead of being lost.

[PR #50462](https://github.com/anomalyco/opencode/pull/50462)

### 5. fix(app): keep shortcuts filter focused while typing
**#49815** | Status: OPEN | Contributor: fschrhunt

Fixed a bug where typing in Settings → Shortcuts filter input caused the filter to lose focus after the first character. Now the filter stays focused for continuous typing.

[PR #49815](https://github.com/anomalyco/opencode/pull/49815)

### 6. fix(codemode): live Map/Set forEach, generator prototypes, repeated function declarations
**#50450** | Status: CLOSED | Contributor: rekram1-node

Five small JS-conformance fixes for codemode: live Map/Set forEach iteration, generator prototype handling, repeated function declarations, and delete on non-references.

[PR #50450](https://github.com/anomalyco/opencode/pull/50450)

### 7. feat(codemode): name the closest tool in unknown-tool errors
**#50455** | Status: CLOSED | Contributor: rekram1-node

Calling a non-existent tool now suggests the closest real one: `Unknown tool 'github.get-me'. Did you mean tools.github.get_me?`

[PR #50455](https://github.com/anomalyco/opencode/pull/50455)

### 8. fix(cli): flush missed parts when run goes idle
**#50453** | Status: OPEN | Contributor: BoYanZh

Fixes intermittent empty stdout in non-interactive `opencode run --format json` even when the backend recorded output. Addresses a data integrity issue for programmatic usage.

[PR #50453](https://github.com/anomalyco/opencode/pull/50453)

### 9. feat(core): restore GitLab workflow discovery and add OAuth login
**#50422** | Status: OPEN | Contributor: vglafirov

Restores GitLab workflow discovery functionality and adds OAuth login support for the built-in GitLab Duo provider.

[PR #50422](https://github.com/anomalyco/opencode/pull/50422)

### 10. docs(ecosystem): add opencode-mesh plugin
**#50460** | Status: CLOSED | Contributor: divisionseven

Adds opencode-mesh to the ecosystem Plugins table. Enables live messaging between sessions across different users and machines.

[PR #50460](https://github.com/anomalyco/opencode/pull/50460)

---

## Hot Discussions

*(No discussion data provided in the source.)*

---

## Feature Request Trends

Based on issue analysis, the most-requested feature directions are:

| Category | Requests | Examples |
|----------|----------|----------|
| **UI/UX Improvements** | Multiple | Manual model refresh (#4734), tab shortcuts (#37077), web UI session visibility (#45011, #46444) |
| **Model/Provider Flexibility** | Growing | Dynamic model selection per turn (#50448), free tier usability (#50093), OAuth throughput (#39864) |
| **Remote/Headless Support** | Persistent | SSH clipboard (#2773), headless server project registration (#44216, #37096) |
| **Developer Experience** | Ongoing | Shortcuts filter focus (#49815), tool suggestions (#50455) |

---

## Developer Pain Points

### High-Impact Bugs
1. **SystemPrompt.environment crashes** — Multiple duplicate issues filed (10+ comments each, 30-47 👍) indicate this regression in v1.18.30 severely impacted production usage. Users rolled back to v1.18.18/v1.18.20 to restore functionality.

2. **Web UI session visibility** — Sessions created via CLI/TUI don't appear in web Home, creating confusion about where work is stored. Affects both git and non-git project scenarios.

3. **Free tier UX** — Usage limit enforcement with escalating retry timers creates poor user experience; users report waiting 6+ hours with no clarity on reset timing.

### Recurring Frustrations
- **Platform-specific issues**: Windows (TUI streaming, clipboard, project registration), macOS (prompt crashes), Linux/SSH (clipboard) each have distinct problems
- **Model/provider compatibility**: Reasoning content encryption errors, tool calling failures on DeepSeek V4/MiMo, OAuth throughput discrepancies
- **Data integrity**: Bash tool stdout corruption on multi-byte outputs (#50458), JSON mode empty stdout (#50453)

---

*Generated from GitHub data — anomalyco/opencode*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data and create a structured digest for the Pi community.

First, let me identify the key information:

## Latest Releases
- v0.87.0 was released with new features around canonical session context and extension boundaries, including ContextEditEntry

## Latest Issues (showing top ones by comment count)
Let me identify the most significant issues:

1. #7730 - High CPU usage on Mac OS with long session (17 comments, 10 👍)
2. #8684 - PI_OFFLINE silently disables all provider model discovery (12 comments)
3. #9803 - RPC steer success cannot be correlated with extension-handled input (9 comments)
4. #5105 - Compaction summarization ignores configured transport (7 comments, closed)
5. #9169 - Images rendered incorrectly in fullscreen TUI mode (6 comments, closed)
6. #9602 - Compaction can overflow by including thinking messages (6 comments)
7. #9549 - Large transcripts re-render every frame (6 comments)
8. #9773 - before_provider_request does not fire for summarization (5 comments)
9. #9822 - Codex tool calls leak as raw harmony text (5 comments, closed)
10. #9255 - TuiMainScreen full-screen redraw storm (5 comments)
11. #8667 - Stale compaction entry bricks session (4 comments, closed)
12. #9843 - 0.86.x regression: litellm.APIConnectionError (4 comments, closed)
13. #5921 - Pi creates toolResult for empty/malformed tool calls (4 comments, closed)
14. #9678 - mistral-conversations: GLM reasoning dispatch drops effort level (3 comments)


15. #9828 - Fullscreen exit corrupts scrollback (3 comments, closed)
16. #9358 - docs(tui): document Component.invalidate() as required (3 comments)
17. #9784 - Meta-Issue: Allow extensions to access vendor-specific fields (3 comments)
18. #9819 - Contribution: use auth.kimi.ai for Kimi Code OAuth (3 comments, closed)
19. #9354 - Prompt templates with invalid frontmatter silently dropped (3 comments, closed)
20. #9829 - Extensions cannot observe per-attempt provider retries (3 comments, closed)

I notice several provider and configuration issues emerging. The Kimi Code OAuth endpoint needs updating, and there are problems with how prompt templates handle invalid metadata. Extensions also lack visibility into retry mechanisms, which could impact debugging and monitoring.

Several fixes landed across different components: validating tool arguments before replay, implementing Google retry delays, adding Grok 4.7 support, cleaning up the Bedrock catalog, and improving Ollama integration. The TUI layer received attention too—documenting Component.invalidate() as required, preventing UI shifts when scrollbars hide, and repainting content properly on Windows 10.

Extensions and agent behavior saw meaningful improvements. Prompt and tool state now persist across context handlers, invalid frontmatter gets reported correctly, offline bug reports can now export, and custom CWD resolution works with ctx.cwd fallback. RPC input dispositions are now correlated with queued messages, and Azure Foundry Chat Completions deployments are supported.

Two community discussions are active: one about building a CursorAI Agent CLI custom provider for Pi, and another exploring pi-agent-core as a runtime for customer-hosted scheduled agents. The main pain points are performance-related—Mac OS CPU spikes with extended sessions, rendering issues in fullscreen TUI mode with image display problems, and scroll-based rendering issues.

Several workflow problems stand out: PI_OFFLINE behaves unexpectedly by disabling model discovery, compaction can overflow with thinking messages, the RPC steer mechanism can't correlate success with input, and before_provider_request hooks don't trigger for summarization. Tool handling has gaps too—empty tool calls generate toolResults incorrectly, per-attempt retries aren't visible to extensions, and vendor-specific response fields remain inaccessible. There's also session persistence timing issues and prompt template validation problems to address.</think>

# Pi Community Digest — 2026-09-22

## Today's Highlights

v0.87.0 introduces canonical session context editing with actionable lifecycle hooks, enabling edit model context without rewriting history. Meanwhile, the community tackles significant performance regressions in 0.86.x—particularly around fullscreen TUI rendering storms and RPC steering correlation failures—while contributors rapidly close 18 PRs addressing bugs and new provider support.

---

## Releases

**v0.87.0** — *2026-09-22*
> [Release notes](https://github.com/earendil-works/pi/blob/v0.87.0/packages/coding-agent/docs/session-format.md#contexteditentry)

- **Canonical session context and extension boundaries** — Introduces `ContextEditEntry` for editing model context without rewriting history, plus actionable lifecycle hooks for extension developers to intercept and modify session state changes.

---

## Hot Issues

| # | Title | Why It Matters | Community |
|---|-------|----------------|-----------|
| [#7730](https://github.com/earendil-works/pi/issues/7730) | High CPU usage on Mac OS with long sessions | Users report 50-110% CPU spikes tied to session length; 600-800MB memory usage. | 17 comments, 10 👍 |
| [#8684](https://github.com/earendil-works/pi/issues/8684) | `PI_OFFLINE` silently disables all provider model discovery | Undocumented behavior: PI_OFFLINE was meant to only disable startup housekeeping, but it also blocks entire session model-catalog discovery. | 12 comments |
| [#9803](https://github.com/earendil-works/pi/issues/9803) | RPC steer success cannot be correlated with extension-handled input | Since 0.86.0, RPC steer passes through extension handlers but success responses don't identify what was queued—clients can't reliably correlate. | 9 comments |
| [#9602](https://github.com/earendil-works/pi/issues/9602) | Compaction overflows with thinking messages | Local Qwen3.8 sessions hit 16K-token output limits while still "thinking," causing compaction to include messages never actually requested. | 6 comments |
| [#9549](https://github.com/earendil-works/pi/issues/9549) | Large transcripts re-render every frame; resize re-emits whole transcript | Windows 11 with 2 cores sees 1 core saturated on long transcripts—every frame triggers full transcript re-emission. | 6 comments |
| [#9773](https://github.com/earendil-works/pi/issues/9773) | `before_provider_request` does not fire for summarization/compaction | Extension hook documented to fire before any provider request never triggers for compaction/branch-summary, limiting extension observability. | 5 comments |
| [#9255](https://github.com/earendil-works/pi/issues/9255) | Fullscreen TUI redraw storm when changed rows sit above viewport | Long transcripts cause violent jumping and doubled text; nearly every frame takes the fullRender path. | 5 comments, 1 👍 |
| [#9784](https://github.com/earendil-works/pi/issues/9784) | Meta-Issue: Allow extensions to access vendor-specific response fields | Repeated request for provider-specific fields in responses—`AssistantMessage` is a "Procrustean bed" that strips vendor data extensions need. | 3 comments |
| [#9829](https://github.com/earendil-works/pi/issues/9829) | Extensions cannot observe per-attempt provider retries | Rate limit retries are invisible to extension events; pi-ai has retry callbacks but coding-agent only wires them for compaction. | 3 comments |
| [#9792](https://github.com/earendil-works/pi/issues/9792) | `SessionManager.create()` does not write session file until first assistant message | Returns `isPersisted() === true` with a path, but no `.jsonl` actually exists on disk—process crash loses the session. | 2 comments |

---

## Key PR Progress

| # | Author | Summary |
|---|--------|---------|
| [#9866](https://github.com/earendil-works/pi/pull/9866) | YxinMiracle | Fix: validate persisted tool arguments before replay—prevents legacy schema values from executing after schema changes. |
| [#9861](https://github.com/earendil-works/pi/pull/9861) | beantownbytes | Fix: honor Google retry delay on rate limit 429s (RESOURCE_EXHAUSTED). |
| [#9859](https://github.com/earendil-works/pi/pull/9859) | SASUKE40 | Feature: add Grok 4.7 support via xAI Responses catalog (500K context, image input). |
| [#9851](https://github.com/earendil-works/pi/pull/9851) | jubingainwell | Fix: remove bare Anthropic model IDs from Bedrock catalog—AWS no longer supports on-demand invocation. |
| [#9850](https://github.com/earendil-works/pi/pull/9850) | kedarpotdar-nv | WIP: native Ollama provider (in progress). |
| [#9848](https://github.com/earendil-works/pi/pull/9848) | Frank-zhu0404 | Docs: document `Component.invalidate()` as required in TUI README. |
| [#9846](https://github.com/earendil-works/pi/pull/9846) | mitsuhiko | Fix: keep prompt and tool state across context handlers—prevents extension compaction from dropping tool declarations. |
| [#9842](https://github.com/earendil-works/pi/pull/9842) | rwachtler | Fix: center jump-to-end label independently of scrollbar visibility (fixes #9136). |
| [#9830](https://github.com/earendil-works/pi/pull/9830) | christianklotz | Fix: report invalid prompt frontmatter with diagnostics instead of silently dropping templates. |
| [#9829](https://github.com/earendil-works/pi/pull/9829) | Jeyapaul | Fix: expose provider retry attempts to extensions (addresses #9829). |
| [#9714](https://github.com/earendil-works/pi/pull/9714) | jsanter27 | Feature: support Azure Foundry Chat Completions deployments (DeepSeek V4 Pro). |

---

## Hot Discussions

**Show and Tell**
- [#1558](https://github.com/earendil-works/pi/discussions/1558) — **CursorAI Agent CLI custom provider for Pi** — Community member released `@netandreus/pi-cursor-provider`, seeking visibility alongside other providers. | 4 comments, 9 👍

**Ideas / Q&A**
- [#3337](https://github.com/earendil-works/pi/discussions/3337) — **Using pi-agent-core as runtime for customer-hosted scheduled-agent platform** — Product team evaluating pi-agent-core for scheduled-agent features; seeking guidance on whether this direction is welcomed. | 1 comment, 5 👍

---

## Feature Request Trends

1. **Extension API extensibility** — Multiple requests for extensions to access vendor-specific response fields, observe provider retries, and intercept compaction/summarization requests.
2. **Provider model discovery control** — Users want PI_OFFLINE to truly disable only startup checks, not all network-based model catalog operations.
3. **Native provider expansion** — Active development on Ollama native provider; community contributed Grok 4.7 and Azure Foundry support.
4. **TUI performance at scale** — Long transcript rendering, scrollback handling, and fullscreen mode reliability are recurring themes.
5. **Session persistence robustness** — Better handling of file-write timing, child session organization in /resume picker, and scrollback integrity on exit.

---

## Developer Pain Points

- **0.86.x regressions** — Mid-stream errors via LiteLLM, Codex tool calls leaking as raw text, RPC correlation broken for extension-handled inputs.
- **Compaction fragility** — Overflow issues with thinking messages, stale entries corrupting sessions, transport options lost during summarization.
- **Tool argument validation** — Empty/malformed tool calls cause 400 error spirals; persisted arguments aren't validated against current schema on replay.
- **Cross-platform TUI bugs** — Image rendering in fullscreen, repaint issues on Windows 10, scrollbar-related UI shifts.
- **Provider-specific quirks** — Anthropic blocking Pi subscriptions, Kimi hanging on exit, GLM reasoning effort dispatch failures.

---

*Generated from github.com/earendil-works/pi — 2026-09-22*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a Qwen Code community digest for 2026-09-22 based on the provided GitHub data. Let me analyze the data and create a structured digest.

Let me organize the information:

## Releases (last 24h)
- v0.24.3: Main release
- v0.24.3-nightly.20260921.2800e9bb4f: Nightly release
- sdk-typescript-v0.1.14: TypeScript SDK
- desktop-v0.24.3: Desktop app

## Hot Issues (top 10 by comment count)
1. #11872 - Web Terminal PTY issue on macOS (13 comments) - P1 bug
2. #12287 - Workflow retry-from-history hardening (9 comments) - P2
3. #11847 - Session recap always in English (8 comments) - P3
4. #12303 - Cross-session gate issues (8 comments) - P2
5. #12416 - Remote-SSH EPIPE error (7 comments) - P1
6. #12414 - Windows build failure (6 comments) - P1, closed
7. #11878 - Session Overview table issues (6 comments) - P2
8. #12381 - Session-create timeout recovery (6 comments) - P2
9. #8835 - Repo hygiene findings (6 comments) - P2
10. #11815 - Command splitting bug (6 comments) - P3

## Key PRs
1. #12322 - QR pairing on non-loopback
2. #7120 - PowerShell fallback (stale)
3. #7046 - LanguageTool integration (stale)
4. #6829 - Clipboard paste on WSL2 (stale)
5. #12183 - Managed extensions


6. #12134 - Session plan pin
7. #12255 - SSH workspaces without remote daemon
8. #12429 - Fix CodeModeOnly tool search
9. #12345 - Host controls for model management
10. #12258 - MCP app fixes
11. #9305 - UI bottom-align
12. #12154 - Worktrees in git dialog
13. #12222 - toolParametersMandatory
14. #12364 - Wildcard export verification
15. #12421 - Notebook pagination (closed)
16. #11816 - Optional worktrees for branch sessions
17. #10

949 - Background session commands
18. #12412 - Remote workspace browsing
19. #12391 - Java managed tool state
20. #12404 - Reference tags preservation

Now I'll organize this into the requested format.</think>

# Qwen Code Community Digest — 2026-09-22

## Today's Highlights

Qwen Code v0.24.3 shipped with structured shell results in Web Shell, optional trajectory metrics, host settings allowlists, and mobile navigation fixes. The release bundle includes SDK TypeScript v0.1.14 (CLI 0.24.3) and Desktop v0.24.3. A critical P1 issue (#11872) affects macOS users: the Web Terminal shows "PTY not available" because `@lydell/node-pty` is declared but not bundled, and macOS code signing blocks locally installed prebuilds. Remote-SSH users on version 0.24.2 are hit by a regression causing `write EPIPE` errors on every `POST /session` call (#12416).

---

## Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.24.3** | Stable | Structured shell results, trajectory metrics, host allowlists, mobile nav fixes |
| **v0.24.3-nightly.20260921** | Nightly | Same as v0.24.3 |
| **sdk-typescript-v0.1.14** | SDK | Bundles CLI 0.24.3 |
| **desktop-v0.24.3** | Desktop | ACP permission queue scoping, shared output modes |

*No breaking changes reported.*

---

## Hot Issues

| # | Priority | Title | Why It Matters | Comments |
|---|----------|-------|----------------|----------|
| **#11872** | P1 | Web Terminal shows "[Error: PTY not available]" on macOS | Terminal functionality broken on macOS; `@lydell/node-pty` not bundled and code signing blocks prebuilds | 13 |
| **#12287** | P2 | Workflow retry-from-history: hardening follow-ups | Large PR (1000→1900 lines) split for reviewability; touches runner resume, checkpoint schema | 9 |
| **#11847** | P3 | Session recap always generated in English | Recap ignores conversation language—no localization support | 8 |
| **#12303** | P2 | Cross-session gate: capping and naming sessions in multi-session hosts | Open questions on session management in hosts holding several sessions | 8 |
| **#12416** | P1 | Remote-SSH: `write EPIPE` / `BridgeChannelClosedError` on every `POST /session` in 0.24.2 | Critical regression breaks all Remote-SSH session creation | 7 |
| **#12414** | P1 | Windows build failed—no artifact published | CI ran bash install under pwsh; v0.24.2 Windows release missing | 6 |
| **#11878** | P2 | Session Overview table never shows no-workspace sessions | Missing session type in UI; row-click opens wrong context | 6 |
| **#12381** | P2 | Recover session-create result after HTTP gateway timeout | Session ID lost on timeout; client cannot safely retry or prompt | 6 |
| **#8835** | P2 | 2026-W33 report-only findings (8 items) | Security containment bugs in ACP session cwd / allowed-roots validation | 6 |
| **#11815** | P3 | `splitCompoundCommandSegments` splits on operator inside trailing `#` comment | Command parsing misbehaves on comments; permission prompts incorrect | 6 |

---

## Key PR Progress

| # | Author | Title | Impact |
|---|--------|-------|--------|
| **#12429** | holny | Fix CodeModeOnly tool search guard | Fixes #12425 — prevents workflow keyword bridge from emitting hidden tools |
| **#12412** | yiliang114 | Browse remote workspace folders without page refresh | Improves UX in Add Workspace dialog; fetches suggestions in-place |
| **#12322** | wenshao | Enable expiring QR pairing on non-loopback listeners | Mobile QR access on authenticated non-loopback; 60s expiry, 45s refresh |
| **#12255** | wenshao | Support SSH workspaces without a remote daemon | Work over SSH with local daemon; credentials/history stay local |
| **#12183** | jkxiao | Load deployment-managed extensions from directory | `--managed-extensions` CLI flag; deployment-controlled extensions |
| **#12134** | holny | Pin session plan above transcript | Collapsible plan strip with step counter; reuses terminal sticky-todo |
| **#12345** | Lilian0122 | Add host controls for model management | `modelManagement={{ allowAdd, allowDelete }}` for embedded shells |
| **#12258** | samuelhsin | Support larger MCP Apps, scoped tool calls, isolated origins | Fixes Tableau App rendering; bounded resources, server-initiated tools |
| **#12391** | doudouOUC | Add managed tool execution state | Private state contract for managed Tool: idempotent creation, dispatch ownership |
| **#12404** | ytahdn | Preserve reference tags across reloads | File/MCP/extension references retain tags after refresh/reopen |

---

## Feature Request Trends

1. **UI Customization** — Users request adjustable UI font size (#12406), model management controls for embedded shells (#12345)
2. **Session Management** — Multi-workspace session catalog API (#12249), cross-session governance (#12303), session timeout recovery (#12381)
3. **Platform Coverage** — Improved Windows daemon guard for PowerShell (#12375), WSL2 clipboard fixes (#6829)
4. **Managed Agent Architecture** — Proposal for dual-path architecture with durable session ownership (#12380)
5. **Performance Optimization** — One-shot headless latency and memory baseline (#12405)
6. **SSH Workflows** — Remote workspace access without daemon (#12255), worktree management (#12154)

---

## Developer Pain Points

- **macOS Web Terminal broken** — P1 issue #11872 blocks terminal usage; workaround unclear
- **Remote-SSH session creation fails** — P1 regression #12416 in 0.24.2 prevents all remote sessions
- **Windows builds failing** — CI configuration bug (#12414) 导致 artifact 缺失
- **Session recap language lock** — English-only recap (#11847) frustrates non-English users
- **Command parsing false positives** — Trailing comments trigger incorrect splits (#11815), leading to spurious permission prompts
- **Release pipeline instability** — Multiple nightly releases failed quality gates (#12401, #12382)
- **MCP integration gaps** — Media/context loss in Feishu channel (#11554), unbounded mime label admission (#12290)

---

*Generated from GitHub data — github.com/QwenLM/qwen-code*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*