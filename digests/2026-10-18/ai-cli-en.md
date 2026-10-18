# AI CLI Tools Community Digest 2026-10-18

> Generated: 2026-10-18 00:13 UTC | Tools covered: 7

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

<think>The user wants me to create a cross-tool comparison report across the different AI CLI tool communities I've been tracking. Let me analyze the data from each tool and create a comprehensive comparison report.

Let me compile the data from each tool:

1. **Claude Code (MiniMax M1)** - github.com/anthropics/claude-code
   - Releases: 0 (none in last 24h)
   - Issues: 50 total, 30 shown - mostly open
   - PRs: 3 total
   - Discussions: Not provided in data

2. **OpenAI Codex** - github.com/openai/codex
   - Releases: 1 (rust-v0.164.0-alpha.3)
   - Issues: 30 shown
   - PRs: 9 total, all closed
   - Discussions: 6 items shown

3. **Gemini CLI** - github.com/google-gemini/gemini-cli
   - Releases: 1 (v0.66.0-nightly.20261017.ged96faedf)
   - Issues: 50 total, 30 shown
   - PRs: 23 total
   - Discussions: Not provided

4. **GitHub Copilot CLI** - github.com/github/copilot-cli
   - Releases: 0 (none in last 24h)
   - Issues: 19 total, all open
   - PRs: 0
   - Discussions: Not provided

5. **OpenCode** - github.com/anomalyco/opencode
   - Releases: 0 (none in last 24h)
   - Issues: 30 shown
   - PRs: 10 shown
   - Discussions: Not provided

6. **Pi** - github.com/earendil-works/pi
   - Releases: 0 (none in last 24h)
   - Issues: 30 shown
   - PRs: 9 total
   - Discussions: 2 items shown

7. **Qwen Code** - github.com/QwenLM/qwen-code
   - Releases: 1 (v0.25.2-nightly.20261017.39c237af3b)
   - Issues: 30 shown
   - PRs: 20 total
   - Discussions: Not provided

Now I'll structure the comparison report with the requested sections and format.</think>

# AI CLI Tools Ecosystem Report — 2026-10-18

---

## 1. Ecosystem Overview

The AI-powered CLI developer tools landscape is experiencing a period of intense feature expansion and platform-specific hardening. Today's snapshot reveals a clear bifurcation: some tools (OpenAI Codex, Qwen Code) are shipping releases with performance optimizations, while others (Claude Code, Copilot CLI) are managing stability regressions. Across all ecosystems, four convergent themes dominate: **multi-agent session resilience**, **MCP (Model Context Protocol) lifecycle management**, **terminal UI performance under long sessions**, and **human-in-the-loop approval workflows**. The majority of tools are navigating the tension between adding sophisticated agent capabilities and maintaining CLI responsiveness—particularly on Windows and Linux sandbox environments where platform-specific constraints are driving significant engineering investment.

---

## 2. Activity Comparison

| Tool | Repository | Releases (24h) | Issues (Open/Total) | PRs (24h) | Discussions |
|------|------------|----------------|---------------------|-----------|-------------|
| **Claude Code** | anthropics/claude-code | 0 | 50 (50/50) | 3 | N/A* |
| **OpenAI Codex** | openai/codex | 1 | 30 (~30/30) | 9 | 6 |
| **Gemini CLI** | google-gemini/gemini-cli | 1 | 50 (50/50) | 23 | N/A* |
| **Copilot CLI** | github/copilot-cli | 0 | 19 (19/19) | 0 | N/A* |
| **OpenCode** | anomalyco/opencode | 0 | ~30 (~30/30) | 10 | N/A* |
| **Pi** | earendil-works/pi | 0 | ~30 (~30/30) | 9 | 2 |
| **Qwen Code** | QwenLM/qwen-code | 1 | ~30 (~30/30) | 20 | N/A* |

*Indicates Discussions data not captured in today's source data, not that the channel is unavailable.

---

## 3. Shared Feature Directions

The following requirements appear across multiple tool communities, indicating industry-wide engineering priorities:

| Feature Direction | Tools Affected | Specific Needs |
|-------------------|----------------|----------------|
| **Multi-agent session management** | Claude Code, Gemini CLI, Qwen Code, Pi | Programmatic session/thread renaming, goal tracking, autonomous subagent orchestration, trajectory visibility |
| **MCP server lifecycle & containment** | Claude Code, Copilot CLI, OpenCode, Pi, Qwen Code | Orphaned process cleanup, per-session registration, containerization for stdio MCP servers, graceful shutdown on worker death |
| **Terminal UI performance optimization** | Claude Code, OpenCode, Pi | Large transcript re-rendering, unbounded file watcher enumeration, selector window height limits, fullscreen mode CPU spikes |
| **Human-in-the-loop approval workflows** | OpenCode, Qwen Code, Pi | Durable pause at tool-call boundaries, approval modes, task cancellation with child task-event streams |
| **Platform-specific stability (Windows/macOS/Linux)** | All tools | Windows: MSIX updates, sandbox timeouts, elevated app handling; macOS: renderer white-screens, clipboard over SSH; Linux: sandbox process kills |
| **Model routing & quota resilience** | Copilot CLI, Gemini CLI, Claude Code | Fallback across model tiers, quota-interrupted session preservation, silent model substitution awareness |
| **AST-aware code tooling** | Claude Code, Gemini CLI | Abstract Syntax Tree support for precise file reads, navigation, and token reduction |
| **Privacy-preserving session handling** | OpenCode, Claude Code | Local session naming computation, governed-git handling, explicit trust decisions |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|------|---------------|--------------|---------------------|
| **Claude Code** | Enterprise productivity, tool-use reliability | Developers needing deep IDE integration | Emphasis on permissions system, settings persistence, Windows desktop stability |
| **OpenAI Codex** | Web-based development, extension ecosystem | Teams using VS Code + extensions, web developers | Aggressive compression optimization, app-server WebSocket zstd negotiation, plugin architecture |
| **Gemini CLI** | Native CLI experience, cross-platform parity | CLI-first developers, Google ecosystem users | TUI-centric with `/goal` commands, AST-aware tooling roadmap, skill system |
| **Copilot CLI** | Enterprise GitHub integration, approval workflows | GitHub Enterprise users, security-conscious teams | Dual-harness architecture (hosted vs. local), approval mode allowlists, OTEL telemetry |
| **OpenCode** | Flexible agentic workflows, session durability | Power users, self-hosted deployments | Rich session controls, native goals feature, privacy-conscious local computation |
| **Pi** | Durable agents, mobile companion | Mobile-first users, multi-device workflows | PWA mobile client, durable execution with client-side tool approval, PTY backend for Bun |
| **Qwen Code** | Multi-agent orchestration, fault tolerance | Enterprise teams, complex CI/CD pipelines | Staged Managed Agent delivery, fault gate testing (FG series), Workspace CSI storage |

---

## 5. Community Momentum & Maturity

**High-velocity repositories** (20+ PRs, active releases):
- **Qwen Code** — 20 PRs today, one release, most active on fault-tolerance and multi-agent staging
- **Gemini CLI** — 23 PRs, one nightly release, heavy focus on quota handling and AST tooling

**Moderate activity, stability-focused** (5-10 PRs, bug-fix driven):
- **OpenCode** — 10 PRs, focused on accessibility and console fixes
- **Pi** — 9 PRs, addressing PowerShell detection and selector performance
- **OpenAI Codex** — 9 PRs (all merged today), heavy on compression and memory optimization

**Low activity, issue-driven** (fewer PRs, reactive):
- **Copilot CLI** — 0 PRs today, 19 open issues dominated by HydraFusion routing regressions
- **Claude Code** — 3 PRs, 50 open issues with Windows regression #102088 (62 comments) indicating high community engagement on a single issue

**Community engagement signals:**
- Claude Code: 62 comments on single Windows regression issue → highly engaged user base, rapid issue escalation
- Qwen Code: Structured fault-gate testing (FG12a, FG13c) indicates mature CI/CD and reliability engineering
- Gemini CLI: 154 👍 on `/goal` feature request → strong user demand for native session goals

---

## 6. Trend Signals

1. **Multi-agent orchestration is the defining capability frontier.** Every tool is investing in subagent management, session goals, and task decomposition. The variance is in execution: Claude Code prioritizes permission guards; Qwen Code invests in fault gates; Pi focuses on mobile companion apps.

2. **Platform-specific debt is consuming significant engineering cycles.** Windows (sandbox, MSIX, elevated apps, clipboard) and macOS (renderer CPU, SSH clipboard, background priority) represent recurring cost centers across all tools—notable given most development likely occurs on Linux servers.

3. **MCP protocol adoption is accelerating but lifecycle management is immature.** Orphaned MCP processes, lack of per-session registration, and containment failures appear across 5/7 tools. This represents a systemic gap as MCP becomes the standard tool-integration layer.

4. **Privacy and local computation are becoming competitive differentiators.** OpenCode's session naming concerns (#10416, 63 comments) and Claude Code's governed-git handling indicate users are increasingly sensitive to data exfiltration in agent workflows.

5. **Compression and memory optimization are priority engineering investments.** OpenAI Codex's WebSocket zstd negotiation, Claude Code's unbounded file watcher fixes, Pi's selector height limits, and Qwen Code's transcript size limits all address resource consumption at scale.

6. **Enterprise features (SSO, approval workflows, telemetry) are converging.** Copilot CLI's approval mode allowlists, Qwen Code's OTEL instrumentation, and Gemini CLI's quota warnings suggest the market is transitioning from individual-developer tools to team/department solutions.

7. **CLI vs. desktop app role clarity is emerging.** Users are expressing preference for lean CLI experiences (Copilot CLI discussion #54390: "leave bloatware for GUI"). This tension will shape feature distribution between interfaces.

---

*Cross-tool analysis compiled from seven AI CLI tool repositories — 2026-10-18*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data from the anthropics/skills repository. Let me extract the most relevant information from the data provided.

Looking at the data:
- 50 PRs total, top 20 shown
- 50 Issues total, top 15 shown

For the analysis, I need to:
1. Identify most-discussed PRs by comments - but I notice all the PRs show "Comments: undefined" - so I should look at other engagement signals like recent activity, author reputation, or focus on the Issues which do have comment counts
2. Identify community demand trends from Issues
3. Identify high-potential pending skills from active PRs
4. Provide ecosystem insights

Let me analyze what's available:

**PRs (sorted by comments - but all show undefined):**
Looking at the PRs, they're sorted by comments but all show "undefined". This might mean there are no comments, or the data wasn't collected. Let me look at other signals:
- #1742: MCP builder fix for streamable_http_client - updated 2026-10-08
- #1298: skill-creator Windows fixes - updated 2026-09-16
- #1245: notion-spec-to-implementation and quantitative-resume-auditor - updated 2026-10-15 (most recent)
- #1771: proofcore-contract-auditor for smart contracts - 2026-09-16
- #1961: skill-creator security hardening - 2026-10-11
- #2040, #2039: architecture-advisor and harness SDD suite - 2026-10-16 (most recent)

**Issues with comments:**
- #492: Security issue about community skills in anthropic/ namespace - 46 comments (highest!)
- #228: Enable org-wide skill sharing - 16 comments
- #556: run_eval.py trigger rate bug - 12 comments


- #62: Skills disappeared error - 10 comments
- #1329: compact-memory skill proposal - 9 comments

The most engaging discussions center around security concerns with namespace impersonation, followed by organizational sharing limitations and evaluation script bugs. Several skill proposals are emerging around memory management and system architecture, with recent activity focusing on MCP compatibility fixes and security hardening for the skill creation workflow.</think>

# Claude Code Skills Community Highlights Report

**Data: anthropics/skills | As of 2026-10-18**

---

## 1. Top Skills Ranking

The PR data shows "Comments: undefined" across all entries, indicating no public discussion activity captured. The most active signals are recent updates and novelty. Ranking by recency and apparent community interest:

| PR | Skill | Functionality | Status |
|----|-------|---------------|--------|
| [#2040](https://github.com/anthropics/skills/pull/2040) | **architecture-advisor** | Pattern selection with written justification; SDD suite covering architecture decision records | OPEN |
| [#2039](https://github.com/anthropics/skills/pull/2039) | **harness SDD suite** | Spec-driven development, dispatch discipline, adversarial review — battle-tested multi-agent workflow | OPEN |
| [#1961](https://github.com/anthropics/skills/pull/1961) | **skill-creator security hardening** | Hardens eval viewer against script breakout, DNS rebinding, cross-site POST, escaping vulnerabilities | OPEN |
| [#1245](https://github.com/anthropics/skills/pull/1245) | **notion-spec-to-implementation** + **quantitative-resume-auditor** | Transforms product specs into Notion tasks; audits resumes quantitatively | OPEN |
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | Automated static analysis of Solidity/Rust smart contracts; anchors cryptographic proofs to TON Blockchain | OPEN |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | Zero-cost Markdown-to-MP4 video generation with realistic voiceovers via Marp | OPEN |
| [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | Profile-based SSH/Slurm workflows for SCNet HPC cluster operations | OPEN |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Typographic quality control — prevents orphan words, widows, numbering misalignment in AI-generated docs | OPEN |

---

## 2. Community Demand Trends

From Issues, the most active discussions reveal clear demand vectors:

| Issue | Topic | Signals |
|-------|-------|---------|
| [#492](https://github.com/anthropics/skills/issues/492) | **Security: Trust boundary abuse** | 46 comments — Community skills impersonating official `anthropic/` namespace; users may grant elevated permissions unknowingly |
| [#228](https://github.com/anthropics/skills/issues/228) | **Org-wide skill sharing** | 16 comments — No direct sharing mechanism; users manually upload .skill files |
| [#556](https://github.com/anthropics/skills/issues/556) | **run_eval.py trigger bug** | 12 comments, 7 👍 — 0% trigger rate across all queries; skill invocation broken |
| [#1329](https://github.com/anthropics/skills/issues/1329) | **compact-memory proposal** | 9 comments — Symbolic notation for compact agent state; high independent utility |
| [#412](https://github.com/anthropics/skills/issues/412) | **agent-governance skill** | 6 comments — Policy enforcement, threat detection, trust scoring, audit trails for AI agents |

**Key Demand Themes:**
- **Enterprise/Team Workflows**: Org sharing, skill governance, multi-agent coordination
- **Developer Experience**: Debugging eval tooling, security hardening, Windows compatibility
- **Specialized Domains**: Smart contracts, HPC clusters, document quality, video generation

---

## 3. High-Potential Pending Skills

Active PRs with recent updates (Oct 2026) signaling imminent merge potential:

| PR | Skill | Why It's Promising |
|----|-------|---------------------|
| [#1961](https://github.com/anthropics/skills/pull/1961) | **skill-creator eval-viewer security** | Critical security fixes; addresses XSS, script breakout |
| [#2040](https://github.com/anthropics/skills/pull/2040) | **architecture-advisor** | Part of SDD suite; formal methodology for design decisions |
| [#2039](https://github.com/anthropics/skills/pull/2039) | **harness SDD suite** | 3-process skill set; spec-driven development pipeline |
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder fix** | Fixes MCP ≥2.0 `streamable_http_client` import; critical for MCP ecosystem |
| [#1792](https://github.com/anthropics/skills/pull/1792) | **docx LibreOffice timeout fix** | Production reliability; verifies DOCX output correctness |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade workflow orchestration and security** — evidenced by the highest-discussed issue (#492: trust boundary abuse), active proposals for org-wide sharing (#228), and multiple security-focused PRs (eval-viewer hardening, MCP fixes). The ecosystem is maturing from experimental skill snippets toward production-ready, governance-aware automation tooling.

---

*Report generated from GitHub data: anthropics/skills (50 PRs, 50 Issues)*

---

<think>The user wants me to generate a Claude Code community digest for 2026-10-18 based on the provided GitHub data. Let me analyze the data and structure it according to the requirements.

Looking at the data:
1. **Latest Releases**: None in the last 24h
2. **Latest Issues**: 50 items total, showing top 30. I need to pick 10 noteworthy ones
3. **Latest Pull Requests**: 3 items total
4. **No Discussions data** was provided (the data source only has Issues and PRs)

Let me select the most noteworthy issues:

1. #102088 - "Group by" option removed from Code tab sidebar - 62 comments, 41 👍 - This is a regression bug affecting Windows desktop
2. #89599 - Windows MSIX idle stealth update issues - 14 comments - Windows desktop issue
3. #40346 - Feature: Programmatic session/thread renaming via hooks or tools - 9 comments, 15 👍 - Enhancement request
4. #78119 - Repo-committed extraKnownMarketplaces + enabledPlugins not processed - 4 comments - Cloud sandbox issue
5. #82619 - Model fabricated a user-approval turn - 4 comments - Closed/stale but notable
6. #83280 - Headless CLI memory leak in WSL2 - 4 comments - Closed/stale but significant
7. #86935 - Settings-file watcher enumerates parent directory - 3 comments - Performance issue
8. #84424 - Bash tool stdin redirect detection fails on quoted arguments - 3 comments - Bug
9. #102667 - Possible Usage Accounting Regression - 1 comment - Cost concern
10. #100526 - Remote Control sessions fail with HTTP 403 - 1 comment - Windows issue

For PRs:
1. #27140 - Add memory-bridge plugin - CLOSED


2. #97688 - sec-default: collector records continue past the user tier - OPEN
3. #57888 - Scope child_process_exec to JS/TS files - CLOSED

I'll focus on the open PR and its implications for data access and security. The collector records extension represents a critical modification to user tier data handling, potentially expanding data visibility and access controls.</think>

# Claude Code Community Digest

**Date:** 2026-10-18

---

## 1. Today's Highlights

The Claude Code community is actively addressing a significant Windows desktop regression where the "Group by" feature was removed from the Code tab sidebar (#102088, 62 comments). Meanwhile, a security-related PR (#97688) is advancing to allow organization plugins to manage collector records beyond the user tier. No new releases were published in the last 24 hours.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Summary | Reaction |
|---|-------|---------|----------|
| **#102088** | [[BUG] Desktop 2.37337.1: "Group by" option removed from Code tab sidebar](https://github.com/anthropics/claude-code/issues/102088) | Windows desktop regression where sessions now only group by environment, removing the popular "Group by" project functionality. | **62 comments, 41 👍** — High-impact regression affecting workflow organization |
| **#89599** | [[BUG] Windows MSIX: idle stealth update quits app, child process survives](https://github.com/anthropics/claude-code/issues/89599) | Idle stealth update terminates the app but leaves a child process running, causing register failures (0x80073D02) and rendering the app unlaunchable. | **14 comments** — Critical Windows installation issue |
| **#40346** | [Feature: Programmatic session/thread renaming via hooks or tools](https://github.com/anthropics/claude-code/issues/40346) | Request to add the ability to auto-rename sessions based on GitHub issues/PRs being worked on, rather than manual `/rename` commands. | **9 comments, 15 👍** — Popular enhancement for workflow automation |
| **#78119** | [[BUG] Repo-committed extraKnownMarketplaces + enabledPlugins never processed in cloud sandboxes](https://github.com/anthropics/claude-code/issues/78119) | Repository-committed plugin settings work locally but are ignored in Claude.ai cloud sandboxes. | **4 comments, 6 👍** — Dev environment inconsistency |
| **#86935** | [[BUG] Settings-file watcher enumerates parent directory with no bound](https://github.com/anthropics/claude-code/issues/86935) | Settings watcher recursively scans parent directories, causing severe CPU/memory issues on large codebases. | **3 comments** — Performance regression on macOS |
| **#84424** | [[Bug] Bash tool stdin redirect detection fails on quoted arguments containing `<`](https://github.com/anthropics/claude-code/issues/84424) | Regex-based stdin detection doesn't understand shell quoting, causing commands with `<` in quoted arguments to hang. | **3 comments** — CLI tool bug affecting complex commands |
| **#102667** | [Possible Usage Accounting Regression: Weekly Limit Depletes Much Faster](https://github.com/anthropics/claude-code/issues/102667) | Users report weekly quota consumption has significantly increased without changes to usage patterns. | **1 comment** — Cost concern for users |
| **#100526** | [[BUG] Remote Control: resumed sessions created before Trusted Devices fail with HTTP 403](https://github.com/anthropics/claude-code/issues/100526) | Pre-existing sessions fail permanently after enabling Trusted Devices; `/remote-control` retries dead sessions instead of creating new ones. | **1 comment** — Windows remote control workflow broken |
| **#96856** | [[BUG] Self-hosted runner: nested `claude` process overwrites parent session's governed-git config](https://github.com/anthropics/claude-code/issues/96856) | Nested Claude processes overwrite parent session's git configuration, pointing git/gh to a closed relay port. | **1 comment** — Self-hosted environment issue |
| **#103077** | [[BUG] permissions.ask rules do not prompt in auto mode (Windows)](https://github.com/anthropics/claude-code/issues/103077) | Permission ask rules load but don't trigger prompts in auto mode; deny rules still work. Regression from #88604. | **1 comment** — Permission system broken on Windows |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|-----|--------|---------|
| **#97688** | [sec-default: collector records continue past the user tier](https://github.com/anthropics/claude-code/pull/97688) | **OPEN** | Allows organization plugins to drop or rewrite records sent to collectors beyond the user tier when sec-default is seat-installed. |
| **#27140** | [Add memory-bridge plugin for session context consolidation](https://github.com/anthropics/claude-code/pull/27140) | CLOSED | Added `memory-bridge` plugin with `/bridge` command to consolidate learnings into persistent memory (MEMORY.md, CLAUDE.md, skills). |
| **#57888** | [Scope child_process_exec to JS/TS files (fix Python false-positive)](https://github.com/anthropics/claude-code/pull/57888) | CLOSED | Fixed security hook false-positive by limiting `child_process_exec` detection to JS/TS files, excluding Python's `asyncio.create_subprocess_exec`. |

---

## 5. Feature Request Trends

Based on issue analysis, the most requested feature directions are:

1. **Session/Thread Management** — Programmatic renaming, better grouping options (project-based), and session lifecycle controls
2. **Enhanced Permissions System** — More granular permission rules with proper auto-mode prompting
3. **UI/UX Improvements** — Inline image pasting, font zoom in file viewer, line position preservation across view modes
4. **Plugin Marketplace Enhancements** — Better documentation and cloud sandbox support for marketplace configurations
5. **Self-hosted Features** — Improved governed-git handling for nested processes

---

## 6. Developer Pain Points

The most recurring frustrations from the community:

1. **Windows Platform Instability** — Multiple issues with MSIX installations, remote control, permissions, and UI rendering on Windows
2. **Memory & Performance** — CLI memory leaks in WSL2, unbounded file watcher enumeration causing CPU spikes
3. **Plugin Settings Inconsistency** — Settings work locally but fail in cloud sandboxes, creating dev environment mismatches
4. **Regression Concerns** — Loss of existing features (Group by removed), unexpected quota depletion, output quality changes
5. **Permission System Bugs** — Rules loading but not executing correctly in auto mode

---

*Generated from GitHub data for claude-code repository. Issues and PRs sorted by comment count and relevance.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate an OpenAI Codex community digest for 2026-10-18 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

**Releases (last 24h):**
- rust-v0.164.0-alpha.3: 0.164.0-alpha.3 - Release 0.164.0-alpha.3

**Issues (30 shown, sorted by comment count):**
1. #30408 - MCP server processes leak (57 comments) - HIGH PRIORITY
2. #49383 - Windows Computer Use screenshot capture fails (27 comments)
3. #46641 - macOS Codex renderer white-screens (23 comments)
4. #24550 - WebSocket fallback with large inline images (20 comments)
5. #40902 - Windows Java NIO Selector.open fails (17 comments)
6. #51731 - Dot cannot connect to codex conversations (16 comments)
7. #47506 - macOS Browser Use permission block (13 comments)
8. #53178 - macOS access-denied background hydration (12 comments)
9. #48139 - CLI TUI copy/paste shortcuts changed (12 comments)
10. #40579 - MCP process-batch accumulation on Windows (11 comments)

**Pull Requests (9 total, all closed):**
1. #54949 - Gate app-server WebSocket compression behind feature flag
2. #54946 - Preserve model catalog caches across header credential rotation
3. #54945 - Share additional tool declarations across response item clones
4. #54930 - Add negotiated zstd compression to app-server WebSockets
5. #54776 - Support typed content in contextual prompt fragments
6. #54766 - Defer unknown TUI config fields


7. #54763 - Stop applying macOS background priority to managed daemons
8. #54761 - Upgrade zip to 9.0.0
9. #54754 - Reduce memory overhead in tool JSON schemas

**Discussions:**
1. #54894 - Gooo first program: a Codex-discoverable skill
2. #54546 - Separate read-only monitoring from public writes in MCP service
3. #54390 - Latest CLI version feels like a step backwards
4. #54515 - Q&A about Codex 0.160.0 app-server registration
5. #54863 - Sqwakie: see every Codex session

Now I'll structure this into a comprehensive digest covering the most significant changes, technical challenges, and community developments from the past 24 hours.</think>

# OpenAI Codex Community Digest — 2026-10-18

## Today's Highlights

The Codex project saw significant backend progress with WebSocket compression optimizations and memory improvements merged, while the community continues to grapple with persistent platform-specific issues—particularly Windows MCP process leaks and macOS renderer performance. A new Rust alpha release (v0.164.0-alpha.3) dropped, and developer discussions reveal growing concern over CLI complexity versus the desktop app's feature set.

---

## Releases

**rust-v0.164.0-alpha.3** — New alpha release available. No changelog provided in the release notes. [View release →](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.3)

---

## Hot Issues

| # | Issue | Why It Matters | Reactions |
|---|-------|----------------|-----------|
| **#30408** | **[MCP server processes leak: per-thread processes never cleaned up](https://github.com/openai/codex/issues/30408)** | Critical memory leak—orphaned MCP server processes accumulate unboundedly, consuming 9+ GB RSS over time. App-server spawns full MCP process sets per thread/conversation but never kills them on thread archival. | 👍 18 |
| **#49383** | **[Windows Computer Use screenshot capture fails](https://github.com/openai/codex/issues/49383)** | Windows-specific: FrameArrived timeout and E_INVALIDARG errors prevent reliable window capture, blocking core Computer Use functionality. | 👍 1 |
| **#46641** | **[macOS Codex renderer repeatedly white-screens](https://github.com/openai/codex/issues/46641)** | Renderer reaches ~120% CPU, causing repeated white-screen lockups. Workaround requires force-quitting the high-usage Codex Renderer process. | 👍 0 |
| **#24550** | **[WebSocket falls back with large inline images in compacted history](https://github.com/openai/codex/issues/24550)** | Responses WebSocket falls back to HTTP when replacement_history contains large inline images, affecting CLI connectivity. | 👍 2 |
| **#40902** | **[Windows Java NIO Selector.open fails](https://github.com/openai/codex/issues/40902)** | Regression in 26.820.60940: Java NIO fails with "Unable to establish loopback connection" on Windows. | 👍 5 |
| **#51731** | **[Dot cannot connect to codex conversations](https://github.com/openai/codex/issues/51731)** | Dot reports "Error unsupported placement format version 3", blocking integration with Codex conversations on Windows. | 👍 0 |
| **#47506** | **[macOS Browser Use permission block](https://github.com/openai/codex/issues/47506)** | Browser Use reports saved permission block despite site access being allowed—intermittent read failures from already-open windows. | 👍 0 |
| **#53178** | **[macOS access-denied background hydration retries](https://github.com/openai/codex/issues/53178)** | Persistent access-denied background hydration retries alongside high renderer CPU; restart does not resolve. | 👍 1 |
| **#48139** | **[CLI TUI copy/paste shortcuts changed on Debian Linux](https://github.com/openai/codex/issues/48139)** | TUI keyboard shortcuts for copy/paste behave differently on Debian Linux, breaking established workflows. | 👍 7 |
| **#40579** | **[Windows MCP process-batch accumulation](https://github.com/openai/codex/issues/40579)** | Windows-specific: MCP process accumulation and incomplete cleanup still reproducible with 5 MCP servers. | 👍 2 |

---

## Key PR Progress

| # | PR | Summary |
|---|-----|---------|
| **#54949** | **[Gate app-server WebSocket compression behind feature flag](https://github.com/openai/codex/pull/54949)** | Adds `features.app_server_websocket_compression`, disabled by default. TCP and Unix-domain socket listeners now negotiate zstd compression only when enabled and client supports it. |
| **#54946** | **[Preserve model catalog caches across header credential rotation](https://github.com/openai/codex/pull/54946)** | Uses account ID from `CodexAuth::Headers` instead of opaque auth headers in catalog cache identity, preventing unnecessary cache eviction on credential rotation. |
| **#54945** | **[Share additional tool declarations across response item clones](https://github.com/openai/codex/pull/54945)** | Stores `tools` in an `Arc<[serde_json::Value]>` so clones share immutable declarations instead of deep-copying, reducing memory churn. |
| **#54930** | **[Add negotiated zstd compression to app-server WebSockets](https://github.com/openai/codex/pull/54930)** | Negotiates compression over TCP and local sockets with `x-codex-app-server-compression: zstd-stream-v1`. Sends compressed JSON as binary messages. |
| **#54776** | **[Support typed content in contextual prompt fragments](https://github.com/openai/codex/pull/54776)** | Returns `ContentItem` from fragment bodies, preserving classification and attribution (previously limited to strings). |
| **#54766** | **[Defer unknown TUI config fields](https://github.com/openai/codex/pull/54766)** | Removes Serde's `deny_unknown_fields` from TUI settings so unknown fields are ignored when strict config validation is disabled. |
| **#54763** | **[Stop applying macOS background priority to managed daemons](https://github.com/openai/codex/pull/54763)** | Removes macOS `taskpolicy -b` wrapper for managed app-server and updater processes; launches directly through shared background command helper. |
| **#54761** | **[Upgrade zip to 9.0.0](https://github.com/openai/codex/pull/54761)** | Upgrades zip crate from 2.4.2 to 9.0.0; updates plugin archive extraction to preserve executable permissions without applying setuid/setgid/sticky bits. |
| **#54754** | **[Reduce memory overhead in tool JSON schemas](https://github.com/openai/codex/pull/54754)** | Optimizes `JsonSchema` storage—removes unnecessary collection capacity retention and inline optional maps for reduced memory footprint. |
| **#54763** | **[Support typed content in contextual prompt fragments](https://github.com/openai/codex/pull/54776)** | *(Listed above)* |

---

## Hot Discussions

### 💡 Ideas

- **[Latest CLI version feels like a step backwards](https://github.com/openai/codex/discussions/54390)** — User argues sessions/threads add bloat to CLI; suggests preserving CLI simplicity and leaving "bloatware features" for the GUI app. | 👍 1
- **[Proposal: ChatGPT Deep ($50/month)](https://github.com/openai/codex/discussions/54847)** — Proposes an intermediate subscription tier between Plus and Pro for individual developers in markets like Japan. | 👍 1

### ❓ Q&A

- **[Codex 0.160.0 app-server: supported registration acknowledgment and recovery boundary?](https://github.com/openai/codex/discussions/54515)** — Clarifying supported behavior for app-server registration and recovery boundaries on Windows x64 with VS Code extension. | 👍 1

### 🛠️ Show and tell

- **[Gooo first program: a Codex-discoverable skill](https://github.com/openai/codex/discussions/54894)** — A Codex skill for source edits and saved replay with the Gooo language. | 👍 1
- **[Separate read-only monitoring from public writes in Codex MCP service](https://github.com/openai/codex/discussions/54546)** — Pattern for separating health checks (GET + tools/list) from production writes in MCP services. | 👍 1
- **[Sqwakie: see every Codex session on your team live](https://github.com/openai/codex/discussions/54863)** — Tool to monitor all Codex and Claude Code sessions across team machines in real time; lets agents ask each other questions. | 👍 1
- **[Ahed: compose the next instruction in Codex](https://github.com/openai/codex/discussions/54688)** — macOS app that drafts possible next requests from context and autocompletes instructions you've started. | 👍 1
- **[Octuo: hand a goal to Codex, get the result back](https://github.com/openai/codex/discussions/54813)** — Personal assistant that acts as courier between Codex, Claude Code, and other tools—gives agents goals and returns results. | 👍 1
- **[ArtiGram: publish what Codex builds as a live page](https://github.com/openai/codex/discussions/54811)** — Free service to publish AI-built outputs (HTML, React, SVG, Markdown, Mermaid) as shareable live pages with a hosted MCP server. | 👍 1

---

## Feature Request Trends

From Issues and Discussions, the most-requested feature directions are:

1. **Process lifecycle management** — Automated cleanup of MCP server processes, especially on thread/conversation closure
2. **Platform-specific stability** — Windows: improved Java NIO, sandbox, and elevated app handling; macOS: renderer performance fixes
3. **CLI simplicity** — Calls for a leaner CLI without "session/thread bloat," leaving advanced features to the desktop app
4. **Browser Use reliability** — Permission handling fixes, especially for sites explicitly allowed by users
5. **Pricing accessibility** — Community-proposed intermediate tiers (e.g., $50/month "ChatGPT Deep") for individual developers
6. **Cross-agent collaboration** — Tools to enable Codex sessions to communicate with each other (emerging as a pattern in community projects)

---

## Developer Pain Points

The most recurring frustrations expressed across Issues and Discussions:

- **MCP process leaks** — Multiple Issues (#30408, #40579, #42740) report unbounded process accumulation consuming gigabytes of memory
- **Windows instability** — Persistent issues with screenshot capture, sandbox, Java NIO, and elevated app interaction
- **macOS renderer degradation** — White-screen lockups, 120% CPU usage, and V8 memory footprints reaching 4.5GB
- **CLI perceived bloat** — Users argue session/thread management belongs in terminal multiplexers (tmux/zellij), not the CLI itself
- **Message delivery delays** — Reports of messages queued 5–10 minutes before sending, even on idle sessions
- **Browser Use permission friction** — Sites explicitly allowed by users still blocked; intermittent read failures

---

*Digest generated from GitHub data — openai/codex | 2026-10-18*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the GitHub data provided and create a structured digest for the Gemini CLI community.

## Data Analysis:

### Latest Releases (last 24h)
- v0.66.0-nightly.20261017.ged96faedf
  - Add Banner about Gemini CLI not being optimized for Gemini 4
  - Update README to remove obsolete content
  - fix(ci): remove unsupported

### Latest Issues (updated in last 24h)
Total: 50 items; showing top 30

Key issues to highlight:
1. #22323 - Subagent recovery after MAX_TURNS reported as GOAL success (P1, bug)
2. #19873 - Leverage model's bash affinity via Zero-Dependency OS Sandboxing (P2, enhancement)
3. #21409 - Generalist agent hangs (P1, bug) - 8 👍
4. #22745 - Assess the impact of AST-aware file reads (P2, feature)
5. #21968 - Gemini does not use skills and sub-agents enough (P2, bug)
6. #22267 - Browser Agent ignores settings.json overrides (P2, bug)
7. #22232 - Enhance browser_agent resilience (P3, feature)
8. #21983 - browser subagent fails in wayland (P1, bug)
9. #21000 - Experiment with native file tools for task tracker (P3, bug)
10. #20079 - ~/.gemini/agents/filename.md symlink not recognized (P2, bug)
11. #24246 - Gemini CLI encounters 400 error with > 128 tools (P2, bug)
12. #23571 - Model frequently creates tmp scripts in random spots (P2, bug)
13. #22672 - Agent should stop/discourage destructive behavior (P2, feature)
14. #22186 - get-shit-done output hook causes crash (P1, bug)


15. #20195 - Local Subagent - Sprint 1 (P3, enhancement)
16. #22746 - Investigate using AST aware CLI tools (P3, enhancement)
17. #22598 - Subagent trajectory visibility via /chat share (P3, feature)
18. #22466 - Fix instances of incorrect \n escape behavior (P2, bug)
19. #22465 - Gemini CLI gets stuck at interactive prompt creating vite app (P2, bug)
20. #21924 - High performance and flicker free behavior on terminal resize (P2, bug)

Several performance and usability issues are emerging. Terminal rendering needs optimization for resize events, while the CLI hangs during interactive prompts like vite app creation. There are also ongoing efforts around subagent functionality and AST-based tooling.

### Latest Pull Requests (last 24h)
Total: 23 items

Top PRs:
1. #29807 - fix(cli): count Thai/Lao SARA AM as one column in string width (OPEN, size/s)
2. #29800 - fix(core): fall back across model tiers only when Auto quota is exhausted (OPEN, size/xl)
3. #28054 - fix(auth): strip URL punctuation in sign-in errors (OPEN, size/m, help wanted)
4. #29806 - fix(cli): support WSL2 clipboard display server fallbacks (OPEN, size/m)
5. #29786 - feat: human-like-ui skill (OPEN, size/xl)
6. #29797 - fix(auth): remove trailing period from antigravity URL (OPEN, size/m)
7. #29802 - Show a warning when quota information is unavailable (OPEN, size/m)
8. #28042 - fix(skills): handle single-line descriptions in SKILL.md frontmatter (CLOSED, size/m)
9. #29762 - fix(settings): preserve disk edits when changing authentication (OPEN, size/l)
10. #29801 - fix(mcp): pair proxy fetch with its Undici dispatcher (OPEN, size/l)
11. #29799 - fix(cli): preserve quota-interrupted sessions and stop on Escape (OPEN, size/l)
12. #29798 - fix(cli): restore approval focus after cancelling editor selection (OPEN, size/l)
13. #29679 - ORVIA: adopt cross-project execution workflow (OPEN, size/s)
14. #29795 - chore/release: bump version to 0.66.0-nightly (OPEN)
15. #29608 - fix(core): time out hanging web searches after 30 seconds (CLOSED, size/l)
16. #29606 - fix(core): split custom headers only before a valid RFC 9110 token (CLOSED, size/s)
17. #29607 - fix(scripts): fail the nightly eval summary when no reports exist (CLOSED, size/m)
18. #29611 - fix(core): support multimodal function response for dotted Gemini 3 models (CLOSED, size/m)
19. #29615 - fix(ci): gate chained E2E on trigger success (CLOSED, size/xs)
20. #29700 - build(deps): synchronize workspace package.json versions (OPEN, size/l)

No discussion data was provided in the source, so I'll skip that section. Now I'll organize the digest with today's highlights, recent releases, key issues, and active PRs.</think>

# Gemini CLI Community Digest

**Date:** 2026-10-18
**Source:** github.com/google-gemini/gemini-cli

---

## 1. Today's Highlights

The v0.66.0-nightly.20261017 release introduces a clarification banner noting that Gemini CLI is not optimized for Gemini 4, along with cleanup of obsolete README content. Several critical bugs are being addressed, including generalist agent hangs (P1), quota handling improvements for Auto mode, and session preservation when quota errors interrupt requests.

---

## 2. Releases

**v0.66.0-nightly.20261017.ged96faedf** — [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.66.0-nightly.20261017.ged96faedf)

- Add Banner about Gemini CLI not being optimized for Gemini 4 (#29774)
- Update README to remove obsolete content (#29775)
- fix(ci): remove unsupported configurations

---

## 3. Hot Issues

| # | Issue | Priority | Why It Matters | Reactions |
|---|-------|----------|----------------|-----------|
| 1 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) - Generalist agent hangs | P1 | Causes indefinite hangs when deferring to subagents; blocks basic workflows for hours | 👍 8 |
| 2 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) - Subagent reports GOAL success despite hitting MAX_TURNS | P1 | Masks true failure state; hides interruption from users | 👍 2 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) - Leverage model's bash affinity via Zero-Dependency OS Sandboxing | P2 | Proposes using native POSIX toolchains for better security/UX | 👍 1 |
| 4 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) - Gemini does not use skills and sub-agents enough | P2 | Custom skills are ignored unless explicitly instructed; reduces automation value | 👍 0 |
| 5 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) - 400 error with > 128 tools | P2 | Hard limit breaks large tool-enabled workflows | 👍 0 |
| 6 | [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) - Model creates tmp scripts in random spots | P2 | Creates cleanup overhead; pollutes workspaces | 👍 0 |
| 7 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) - AST-aware file reads/search/mapping | P2 | Epic tracking potential for precise code navigation and token reduction | 👍 1 |
| 8 | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) - Discourage destructive behavior (git --force, etc.) | P2 | Safety enhancement; prevents data loss | 👍 1 |
| 9 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) - Browser Agent ignores settings.json overrides | P2 | maxTurns and other configs are ineffective for browser agent | 👍 0 |
| 10 | [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) - Symlinked agent files not recognized | P2 | Breaks workflows using symlinks in ~/.gemini/agents/ | 👍 0 |

---

## 4. Key PR Progress

| # | PR | Size | Status | Description |
|---|-----|------|--------|-------------|
| 1 | [#29800](https://github.com/google-gemini/gemini-cli/pull/29800) | XL | OPEN | **fix(core):** Fall back across model tiers only when Auto quota is exhausted — rebuilds quota handling for Pro ↔ Flash routing |
| 2 | [#29799](https://github.com/google-gemini/gemini-cli/pull/29799) | L | OPEN | **fix(cli):** Preserve quota-interrupted sessions and stop on Escape — keeps history on cancellation/quota errors |
| 3 | [#29762](https://github.com/google-gemini/gemini-cli/pull/29762) | L | OPEN | **fix(settings):** Preserve disk edits when changing authentication — prevents MCP servers/themes from disappearing |
| 4 | [#29801](https://github.com/google-gemini/gemini-cli/pull/29801) | L | OPEN | **fix(mcp):** Pair proxy fetch with its Undici dispatcher — fixes `Unexpected content type: null` on Node 26 |
| 5 | [#29802](https://github.com/google-gemini/gemini-cli/pull/29802) | M | OPEN | Show a warning when quota information is unavailable — surfaces failures to users |
| 6 | [#29786](https://github.com/google-gemini/gemini-cli/pull/29786) | XL | OPEN | **feat:** human-like-ui skill — creates distinctive, production-quality interfaces avoiding generic AI design |
| 7 | [#29807](https://github.com/google-gemini/gemini-cli/pull/29807) | S | OPEN | **fix(cli):** Count Thai/Lao SARA AM as one column — fixes cursor desync in tmux |
| 8 | [#29806](https://github.com/google-gemini/gemini-cli/pull/29806) | M | OPEN | **fix(cli):** Support WSL2 clipboard display server fallbacks and non-PNG formats |
| 9 | [#29797](https://github.com/google-gemini/gemini-cli/pull/29797) | M | OPEN | **fix(auth):** Remove trailing period from antigravity URL in sign-in errors |
| 10 | [#29608](https://github.com/google-gemini/gemini-cli/pull/29608) | L | CLOSED | **fix(core):** Time out hanging web searches after 30 seconds — resolves 30+ minute hangs |

---

## 5. Feature Request Trends

Based on issue analysis, the following themes dominate feature requests:

1. **AST-aware tooling** — Multiple issues (#22745, #22746, #22747, #19561) request Abstract Syntax Tree support for surgical code reads, precise navigation, and token reduction
2. **Subagent autonomy** — Requests for improved subagent discovery (#20195, #18285), trajectory visibility (#22598), and automatic skill utilization (#21968)
3. **Security hardening** — Zero-dependency OS sandboxing (#19873), destructive command guards (#22672), and session lock recovery (#22232)
4. **UX improvements** — Terminal resize performance (#21924), persistent task tracking (#18836), and self-awareness of CLI capabilities (#21432)
5. **Quota/resilience** — Auto-tier fallback, session preservation, and graceful degradation under resource constraints

---

## 6. Developer Pain Points

- **Agent hangs** — Generalist agent and browser subagent freeze indefinitely (#21409, #21983)
- **Configuration inconsistency** — Settings.json overrides ignored by browser agent (#22267); symlinks not recognized (#20079)
- **Token/context bloat** — Firehose file reads, tmp script pollution (#23571), naive \n escape handling (#22466)
- **Quota UX** — Silent failures, session loss on quota errors, confusing error messages
- **Tool scaling** — 400 error when >128 tools enabled (#24246) limits extensibility

---

*Generated from GitHub data — 2026-10-18*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest for 2026-10-18 based on the provided GitHub data. Let me analyze the data and structure it according to the requested format.

Looking at the data:
- **Latest Releases**: None in the last 24h
- **Latest Issues**: 19 items total, all OPEN
- **Latest PRs**: None in the last 24h

I need to create sections:
1. Today's Highlights
2. Releases (skip since none)
3. Hot Issues (pick 10)
4. Key PR Progress (none to report)
5. Hot Discussions (no discussion data provided, so I'll skip)
6. Feature Request Trends
7. Developer Pain Points

Let me identify the most notable issues:

1. #4849 - Latency/review-loop overhead in subagent workflows - This is about performance
2. #4551 - SSH clipboard issue on macOS - A real usability bug
3. #5042 - HydraFusion model routing issue - Mid-session context problems
4. #5112 - OSC 7501 program status support - Terminal feature request
5. #5097 - HydraFusion router returns wrong models - Routing bug
6. #4825 - HydraFusion telemetry - Observability request
7. #5165 - Enterprise auth 401 issue - Authentication problem
8. #5177 - Manual Approval regression - Git commands issue
9. #5176 - Linux sandbox timeout - 10s kill issue
10. #5175 - MCP server sign-in issue - Auth flow problem
11. #5173 - CD directory permission issue
12. #5172 - Rewind file tracking backs up gitignored secrets
13. #5171 - NumLock numpad navigation issue
14. #5168 - Markdown table line breaks stripped
15. #5167 - Plugin uninstallation hook issue


16. #5166 - Model allowlist bypass
17. #5164 - Session switching memory leak
18. #5151 - Default-context Sol models rejected

I'll focus on the most critical and impactful issues for the digest. The key areas of concern are routing and model selection problems, performance bottlenecks, and authentication challenges. I'll prioritize the issues that significantly impact user experience and workflow efficiency.

The digest will highlight the most pressing technical challenges facing the Copilot CLI development team, emphasizing system reliability, security, and seamless integration across different platforms and workflows.</think>

# GitHub Copilot CLI Community Digest
**Date:** 2026-10-18

---

## Today's Highlights

The GitHub Copilot CLI community is grappling with significant HydraFusion routing inconsistencies and authentication regressions. Critical issues include model selection falling back silently to lower-tier models, enterprise authentication 401 errors despite valid tokens, and a Linux sandbox timeout regression killing long-running commands after ~10 seconds. With no new releases in the last 24h, the team appears focused on stabilizing the October 2026 harness migration.

---

## Releases

**No new releases in the last 24 hours.** The last stable release remains v1.0.99-0.

---

## Hot Issues

| # | Issue | Impact | Reaction |
|---|-------|--------|----------|
| [#5176](https://github.com/github/copilot-cli/issues/5176) | **Linux sandbox: shell commands killed after ~10s** — bwrap parent-death signal bound to an exited thread causes SIGKILL on longer commands. | **Critical** — Breaks any command exceeding 10s in sandboxed environments; no error message shown. | 0 👍 |
| [#5165](https://github.com/github/copilot-cli/issues/5165) | **Enterprise auth routed to wrong API endpoint** — 401 on model catalog despite valid token; Copilot Enterprise account incorrectly routed to `api.business.githubcopilot.com`. | **Critical** — Blocks enterprise users from model access entirely. | 0 👍 |
| [#5097](https://github.com/github/copilot-cli/issues/5097) | **HydraFusion (policy max): router returns models outside policy, silently falls back to gpt-5.6-luna** | **High** — Most turns fail at routing, silently degrade to lower-tier model without user awareness. | 1 👍 |
| [#5177](https://github.com/github/copilot-cli/issues/5177) | **Regression: Manual Approval no longer prompts for repository-mutating Git commands** after October 2026 harness migration. | **High** — Security regression; Git mutations execute without explicit approval. | 0 👍 |
| [#4849](https://github.com/github/copilot-cli/issues/4849) | **Reduce latency and review-loop overhead in subagent workflows** — Minutes per round trip for modest changes. | **High** — Major productivity drain; 6 comments indicating community interest. | 0 👍 |
| [#4551](https://github.com/github/copilot-cli/issues/4551) | **SSH clipboard: reports "Copied" but macOS clipboard remains empty** when using Copilot CLI on remote Linux over SSH. | **Medium** — UX annoyance; affects macOS SSH users specifically. | 1 👍 |
| [#5042](https://github.com/github/copilot-cli/issues/5042) | **HydraFusion session re-routed to small-context model that cannot load static prompt** after 400 error on routed model. | **Medium** — Context window mismatch breaks long-running sessions. | 0 👍 |
| [#5173](https://github.com/github/copilot-cli/issues/5173) | **Bash commands that `cd` into directory created in same command hard-denied without prompt** since 1.0.99-0. | **Medium** — Breaks legitimate workflow patterns; no permission prompt shown. | 0 👍 |
| [#5164](https://github.com/github/copilot-cli/issues/5164) | **Session switching in sidebar leaks plugin MCP servers and extension hosts, causing OOM** | **Medium** — Memory leak leads to out-of-memory crashes over time. | 0 👍 |
| [#5151](https://github.com/github/copilot-cli/issues/5151) | **Regression: default-context Sol models rejected before first prompt** after tool definitions grew from 15K to ~260K tokens. | **Medium** — Breaks default model selection for Sol models. | 0 👍 |

---

## Key PR Progress

**No pull requests updated in the last 24 hours.**

---

## Feature Request Trends

Based on the issue landscape, the most-requested feature directions are:

1. **HydraFusion Observability** — Multiple requests for per-phase model/verdict/credit attribution in OpenTelemetry ([#4825](https://github.com/github/copilot-cli/issues/4825))
2. **Terminal Integration Enhancement** — OSC 7501 Program Status Protocol support for agent state reporting ([#5112](https://github.com/github/copilot-cli/issues/5112))
3. **Improved Model Routing** — Better handling of context window mismatches and explicit routing failure communication ([#5097](https://github.com/github/copilot-cli/issues/5097), [#5042](https://github.com/github/copilot-cli/issues/5042))
4. **Session Rewind Controls** — Exclude gitignored secret files from backups, add off switch ([#5172](https://github.com/github/copilot-cli/issues/5172))
5. **MCP Authentication UX** — Fix `/mcp auth hint` and MCP server re-authentication flow ([#5175](https://github.com/github/copilot-cli/issues/5175))

---

## Developer Pain Points

The community is experiencing frustration in these recurring areas:

1. **HydraFusion Instability** — Silent fallbacks to lower-tier models without user notification; routing failures on most turns with `max` policy; context window mismatches mid-session
2. **Authentication regressions** — Enterprise 401 errors despite valid tokens; MCP server sign-in expired with no recovery path
3. **Linux Sandbox Regression** — Commands killed after ~10 seconds; no useful error message
4. **Permission Prompt Suppression** — Commands hard-denied without prompts since 1.0.99-0, breaking legitimate workflows
5. **Performance in Subagent Workflows** — Minutes per review cycle; excessive latency in task handoffs
6. **Memory Leaks** — Session switching leaks MCP servers and extension hosts, causing OOM

---

*Generated from github.com/github/copilot-cli | Data refreshed: 2026-10-18*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate an OpenCode community digest for 2026-10-18 based on the provided GitHub data. Let me analyze the data and structure it according to the requirements.

Let me go through each section:

1. **Today's Highlights** - 2-3 sentences summarizing the most important updates
2. **Releases** - None in the last 24h
3. **Hot Issues** - Need to pick 10 noteworthy issues
4. **Key PR Progress** - Need to pick 10 important PRs
5. **Hot Discussions** - No discussion data provided, so I'll omit this section
6. **Feature Request Trends** - Analyze from issues
7. **Developer Pain Points** - Summarize recurring frustrations

Let me start organizing:

**Today's Highlights:**
Looking at the issues, the main themes are:
- Free tier models failing with "can only be used from within OpenCode" error (multiple reports)
- Privacy concerns about session naming being computed outside user's network
- Session goal feature request with high engagement (82 comments, 154 👍)
- Go API key issues in v2 Console

**Hot Issues (10 noteworthy):**
1. #27167 - Native session goals with /goal (82 comments, 154 👍) - Feature request
2. #10416 - OpenCode is not private by default? (63 comments, 59 👍) - Privacy concern
3. #56324 - Free models fail with "free tier" error (40 comments, 18 👍) - High severity bug
4. #56442 - Unable to log into Opencode web console (14 comments, 6 👍) - Auth issue
5. #50363 - Orphaned MCP server processes (9 comments, 1 👍) - Bug
6. #52227 - Go API key not available in v2 Console (7 comments, 2 👍) - Missing feature


7. #56256 - Project name not updating (6 comments, 0 👍) - Bug
8. #54603 - npm package ships .exe on all platforms (4 comments, 0 👍) - Packaging bug
9. #56560 - API Key Expired (4 comments, 0 👍) - Auth issue
10. #52794 - /sessions shows no pin option (4 comments, 0 👍) - UI issue

**Key PR Progress (10 important):**
1. #56592 - fix(www): scroll wide docs tables and label the docs search
2. #56589 - fix(console): fix marketing copy

, stale stats and redirected links
3. #56593 - fix(console): redirect /en URLs to the unprefixed English pages
4. #56591 - fix(console): make the mobile menu and copy buttons keyboard accessible
5. #56588 - docs(www): fix contradictions and typos in the v2 docs
6. #56595 - perf(console): load only the IBM Plex Mono faces the site uses
7. #56594 - feat(console): redirect /llms.txt to the docs index
8. #56587 - fix(console): show an error when newsletter signup fails
9. #56273 - fix(app): focus the composer when switching session tabs
10. #55597 - fix(core): bound skill discovery and watches

The PRs are primarily addressing console and documentation improvements, with accessibility fixes for mobile menus and copy buttons, URL redirection cleanup for localized content, and performance optimizations around font loading. Some core functionality is also being refined—skill discovery bounds and session tab focus behavior—both from contributor kitlangton.

Additional PRs are tackling plugin documentation corrections, session list exposure, code mode policy enforcement, workspace environment tool output storage, and a new UI feature to display session transcript scrollbars. The overall focus spans accessibility, documentation accuracy, developer experience enhancements, and bug fixes across the platform.</think>

# OpenCode Community Digest — 2026-10-18

## Today's Highlights

The OpenCode community is dealing with a significant surge in **free tier authentication issues** — multiple users report that free models (Big Pickle, Beam Free, Nemotron) fail with "OpenCode's free tier can only be used from within OpenCode" errors across both CLI and desktop apps. Meanwhile, a highly-requested **native session goals feature** (#27167) continues to gain traction with 154 👍, and privacy concerns around session naming computed externally (#10416) remain active with 63 comments.

---

## Releases

**No new releases in the last 24 hours.**

---

## Hot Issues

| # | Issue | Summary | Reaction |
|---|-------|---------|----------|
| [#27167](https://github.com/anomalyco/opencode/issues/27167) | **[FEATURE]: Add native session goals with /goal** | Proposal to add persistent session goal/lifecycle feature with custom slash commands. Currently no native way to track session objectives. | 🔥 82 comments, 154 👍 |
| [#10416](https://github.com/anomalyco/opencode/issues/10416) | **OpenCode is not private by default?** | Session titles are computed outside user's network/local LLM — blocked by nftables rules. Privacy concern about data exfiltration. | 🔥 63 comments, 59 👍 |
| [#56324](https://github.com/anomalyco/opencode/issues/56324) | **[severity:high] Free models fail inside official OpenCode TUI** | Free tier models return error "can only be used from within OpenCode" on Windows v2.0.32. High-severity widespread bug. | 🔥 40 comments, 18 👍 |
| [#56442](https://github.com/anomalyco/opencode/issues/56442) | **Unable to log into Opencode web console** | GitHub OAuth fails on web console — users across 2 computers/browsers cannot authenticate. | 14 comments, 6 👍 |
| [#50363](https://github.com/anomalyco/opencode/issues/50363) | **MCP: orphaned local MCP server processes accumulate** | Local MCP servers spawned via `npx` are not terminated when sessions end, accumulating as orphaned processes. | 9 comments, 1 👍 |
| [#52227](https://github.com/anomalyco/opencode/issues/52227) | **Go API key is not available in the new v2 Console** | Go subscription works in CLI but v2 Console has no way to create/view/copy Go API keys for external use. | 7 comments, 2 👍 |
| [#56560](https://github.com/anomalyco/opencode/issues/56560) | **API Key Expired** | Users report API keys disappearing from accounts unexpectedly, causing agent failures. | 4 comments, 0 👍 |
| [#52794](https://github.com/anomalyco/opencode/issues/52794) | **tui: /sessions shows no pin option in 2.0.21 on Windows** | Session pinning UI (ctrl+f) missing in Windows TUI despite docs listing the feature. | 4 comments, 0 👍 |
| [#56479](https://github.com/anomalyco/opencode/issues/56479) | **desktop: macOS app silently denied ~/Documents** | Missing `NSDocumentsFolderUsageDescription` causes silent EPERM when workspace is under ~/Documents. | 2 comments, 0 👍 |
| [#56502](https://github.com/anomalyco/opencode/issues/56502) | **session permissions: deny rules don't bind API-created sessions** | Session-level permissions passed to `/api/session` not reliably enforced — deny rules don't constrain actual toolset. | 2 comments, 0 👍 |

---

## Key PR Progress

| # | PR | Summary |
|---|-----|---------|
| [#55597](https://github.com/anomalyco/opencode/pull/55597) | **fix(core): bound skill discovery and watches** | Major fix superseding two prior PRs; addresses skill discovery issues (#55367, #45961, #51080). |
| [#56273](https://github.com/anomalyco/opencode/pull/56273) | **fix(app): focus the composer when switching session tabs** | Fixes UX issue where destination session's composer loses focus after tab switch. |
| [#56567](https://github.com/anomalyco/opencode/pull/56567) | **feat(tui): show session transcript scrollbar by default** | New feature enabling transcript scrollbar by default (closes #46654). |
| [#56511](https://github.com/anomalyco/opencode/pull/56511) | **fix(core): enforce Code Mode deny policies** | Fixes permission denial rules not being applied in Code Mode. |
| [#56524](https://github.com/anomalyco/opencode/pull/56524) | **fix(core): store tool output in workspace environments** | Shell capture and truncated output now use Location's environment filesystem. |
| [#52681](https://github.com/anomalyco/opencode/pull/52681) | **feat(plugin): expose session list** | Exposes `session.list` on Promise and Effect plugin contexts with filters and pagination. |
| [#56577](https://github.com/anomalyco/opencode/pull/56577) | **docs(plugin): fix Session interrupt field in example** | Documentation fix: `continue` → `resume` in session interrupt example. |
| [#56588](https://github.com/anomalyco/opencode/pull/56588) | **docs(www): fix contradictions and typos in v2 docs** | Comprehensive docs pass fixing incorrect config keys, permission prompts, and deprecated references. |
| [#56591](https://github.com/anomalyco/opencode/pull/56591) | **fix(console): make mobile menu and copy buttons keyboard accessible** | Accessibility fix for marketing pages — mobile menu and buttons now properly accessible. |
| [#56589](https://github.com/anomalyco/opencode/pull/56589) | **fix(console): fix marketing copy, stale stats and redirected links** | Corrects inaccurate claims about "open-source models" on /go page and fixes inconsistent numbers. |

---

## Feature Request Trends

Based on issue analysis, the community is requesting:

1. **Session Goals & Lifecycle Management** — Persistent goal-tracking native to the TUI (#27167)
2. **Enhanced Plugin Capabilities** — Allow plugins to call tools and read resources on engine's MCP connections (#53514)
3. **V2 Background Context Preparation** — Pre-prepare summaries with validated context swap (#55896)
4. **Model Variant Limits Override** — Allow variants to override context/output token limits (#56582)
5. **Rate Limit Timers** — Display wait time when free usage is exceeded (#56266)

---

## Developer Pain Points

- **Free Tier Authentication Failures**: Multiple users blocked from using free models — appears to be a platform-side issue causing widespread impact
- **API Key Management Confusion**: Go API keys missing from v2 Console, expired keys give no recovery path, keys disappearing from accounts
- **Privacy Concerns**: Session naming computed externally raises surveillance worries for security-conscious users
- **MCP Process Leaks**: Orphaned MCP server processes accumulate over time, degrading system performance
- **Cross-Platform Permission Issues**: macOS silent folder access denials, permission prompts repeating even after "Always Allow"
- **Session Folder Renaming**: Sessions break when project folders are renamed externally with no repair path

---

*Generated from GitHub data — anomalyco/opencode | 2026-10-18*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Pi community digest for 2026-10-18 based on the provided GitHub data. Let me analyze the data and structure it according to the requirements.

Let me go through the data:

**Latest Releases**: None in last 24h

**Latest Issues** (showing top 30 by comment count):
1. #7730 - High CPU usage on Mac OS with long session (20 comments, 11 👍)
2. #9549 - Large transcripts re-render every frame (16 comments)
3. #10895 - Support system level configuration (MDM) (10 comments) - CLOSED
4. #10645 - resizeImage resolves null in compiled Bun executables (10 comments)
5. #10074 - Anthropic tool calls: corrupted non-ASCII edit arguments (9 comments)
6. #10884 - keyboard input stops after unterminated terminal reply (8 comments)
7. #10976 - powershell tool falls back to Windows PowerShell 5.1 (6 comments)
8. #10953 - OpenAI login fails with ChatGPT Business (6 comments) - CLOSED
9. #11033 - Pi subscription login fails (5 comments) - CLOSED
10. #10919 - Skills: make invalid-name warnings actionable (5 comments)
11. #10947 - isProjectTrusted() ignores saved Do-not-trust decisions (4 comments)
12. #7756 - detectInstallMethod mislabels non-pnpm installs (4 comments)
13. #10442 - Pi starts with weird characters (4 comments) - CLOSED
14. #9945 - Compaction file lists grow without bound (3 comments) - CLOSED
15. #10492 - A tool row that draws nothing leaves blank line (3 comments) - CLOSED


16. #11067 - RPC mode has no per-session MCP server registration (3 comments) - CLOSED
17. #11026 - pi-durable: permanently delete a conversation (3 comments)
18. #10995 - Don't send another model's thinking as plain text (3 comments) - CLOSED
19. #10623 - pi -p silently uses another model when extension provider's catalog stale (3 comments)
20. #10984 - Chat session throws errors when sending images to non-image models (3 comments) - CLOSED
21. #10852 - Pi Durable support for client-side tool execution

I'm seeing a pattern across the issues: there are several problems related to authentication and login mechanisms, particularly around OAuth flows and provider configurations. The non-ASCII character handling and image processing issues suggest some internationalization and media handling challenges. Performance concerns are evident with the transcript rendering and compaction file growth problems. The durable agents feature appears to be generating discussion around execution models and server registration capabilities.

22. #11090 - Preserve model attribution for auxiliary token usage (2 comments) - CLOSED
23. #11087 - Provider request errors drop error.cause (2 comments) - CLOSED
24. #11089 - Removed opencode-go model stays listed (2 comments) - CLOSED
25. #11084 - Add supportsContentArray compat flag (2 comments) - CLOSED
26. #11086 - Symbols leaking into input on Windows terminal (2 comments) - CLOSED
27. #11083 - Resumed MCP tools lose activation (2 comments) - CLOSED
28. #11076 - Extensions cannot reuse host ModelRuntime (2 comments) - CLOSED
29. #11078 - subagent example: getPiInvocation spawns stale process.execPath (2 comments) - CLOSED
30. #10982 - pi.sendMessage(triggerTurn) starts run while manual compaction in progress (2 comments)

There's a notable cleanup happening with many issues being closed, particularly around model handling and compatibility flags. The provider error handling and MCP tool activation issues suggest there are some edge cases in the extension and provider integration layers that need addressing.

**Latest Pull Requests** (9 items):
1. #11039 - docs(coding-agent): restore extension guide details - CLOSED
2. #11079 - feat(durable): inject a timer for task sleeps - CLOSED
3. #11082 - feat(coding-agent): register per-session MCP servers over RPC - CLOSED
4. #11081 - fix(tui): keep ~ joined in double-click word selection - CLOSED
5. #11080 - fix(powershell): accept Microsoft Store app-execution aliases - CLOSED
6. #11077 - fix(coding-agent): defer sendMessage triggerTurn until compaction ends - CLOSED
7. #10716 - fix(env): include stderr in pi-env startup errors - OPEN
8. #11074 - fix(coding-agent): honor saved trust decision when project has no trust-requiring resources - CLOSED
9. #11072 - fix: limit selector window height - OPEN

The PRs show progress on fixing bugs, adding features like per-session MCP server registration, and improving documentation. Two remain open for review.

**Latest Discussions** (2 items):
1. #10632 - Pausing a run on a tool call until a human approves (3 comments, 1 👍)
2. #11068 - Show & tell: ColliePWA 1.22.0, the phone client for Pi Durable agent (0 comments, 1 👍)

One discussion addresses human-in-the-loop approval workflows, while the other highlights a new mobile client for durable agents.</think>

# Pi Community Digest — 2026-10-18

## Today's Highlights

The Pi community addresses several high-impact bugs this week, including a fix for trust decisions being ignored when projects lack trust-requiring resources (#10947), and a solution for the PowerShell tool incorrectly falling back to Windows PowerShell 5.1 when the Microsoft Store version of pwsh 7 is installed (#10976). Meanwhile, two new features land: per-session MCP server registration over RPC and a selector window height limit to improve performance with long extension-provided lists.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|----------------|----------|
| [#7730](https://github.com/earendil-works/pi/issues/7730) | **[bug] High CPU usage on Mac OS with long session** — CPU swings 50-110% with 600-800MB memory in long sessions, seemingly tied to context size. | Affects developer productivity on macOS; 20 comments and 11 👍 indicate widespread impact. | Open |
| [#9549](https://github.com/earendil-works/pi/issues/9549) | **[fullscreen] Large transcripts re-render every frame; every resize re-emits the whole transcript** — 1 core saturated on Windows 11 with 2 logical cores. | Severe performance regression in fullscreen mode; transcript grows unbounded. | Open |
| [#10645](https://github.com/earendil-works/pi/issues/10645) | **[inprogress] resizeImage resolves null in compiled (Bun) executables — all image attachments omitted since 0.87.x** | Breaks image handling in production builds; affects all Bun-compiled binaries. | In Progress |
| [#10074](https://github.com/earendil-works/pi/issues/10074) | **Anthropic tool calls: corrupted non-ASCII edit arguments (Korean text fails, occasional file corruption)** | Data integrity risk; causes session retries and potential file damage. | Open |
| [#10884](https://github.com/earendil-works/pi/issues/10884) | **[inprogress] 1.2.0: keyboard input stops after an unterminated terminal reply (StdinBuffer waits forever)** | Blocks user input after startup; pressing arrow key "fixes" but loses typed content. | In Progress |
| [#10976](https://github.com/earendil-works/pi/issues/10976) | **powershell tool falls back to Windows PowerShell 5.1 when pwsh 7 is the Microsoft Store build** | Compatibility issue for Windows Store PowerShell 7 users; now fixed in PR #11080. | Open |
| [#10919](https://github.com/earendil-works/pi/issues/10919) | **Skills: make invalid-name warnings actionable and clarify whether the skill loaded** | Poor UX when skill with invalid frontmatter fails silently; needs clearer error messages. | Open |
| [#10947](https://github.com/earendil-works/pi/issues/10947) | **[bug] isProjectTrusted() ignores saved Do-not-trust decisions for projects without trust-requiring resources** | Security concern: explicit "Do not trust" decisions are overridden; fixed in PR #11074. | Open |
| [#10852](https://github.com/earendil-works/pi/issues/10852) | **[durable] Pi Durable support for client-side tool execution and tool approval** | Key feature gap: tools requiring human approval mid-run cannot pause and resume durably. | Open |
| [#10623](https://github.com/earendil-works/pi/issues/10623) | **`pi -p` silently uses another model when an extension provider's catalog is stale; `pi update --models` skips extension catalogs** | Silent model substitution breaks user expectations; no feedback when provider catalog is outdated. | Open |

---

## Key PR Progress

| # | PR | Change Summary |
|---|-----|----------------|
| [#11082](https://github.com/earendil-works/pi/pull/11082) | **feat(coding-agent): register per-session MCP servers over RPC** | Adds `register_mcp_server`, `unregister_mcp_server`, `get_mcp_servers` RPC commands; closes #11067. |
| [#11079](https://github.com/earendil-works/pi/pull/11079) | **feat(durable): inject a timer for task sleeps** | Injects clock for `TaskRuntime.sleep()` to support long retry backoffs in Cloudflare Durable Objects without holding memory. |
| [#11080](https://github.com/earendil-works/pi/pull/11080) | **fix(powershell): accept Microsoft Store app-execution aliases** | Resolves pwsh 7 detection for Microsoft Store installs by accepting zero-length reparse points on PATH. |
| [#11077](https://github.com/earendil-works/pi/pull/11077) | **fix(coding-agent): defer sendMessage triggerTurn until compaction ends** | Prevents concurrent runs during manual compaction; fixes message ordering corruption. |
| [#11074](https://github.com/earendil-works/pi/pull/11074) | **fix(coding-agent): honor saved trust decision when project has no trust-requiring resources** | Corrects `isProjectTrusted()` to respect explicit "Do not trust" decisions. |
| [#11081](https://github.com/earendil-works/pi/pull/11081) | **fix(tui): keep ~ joined in double-click word selection** | Adds `~` to word-selection joiners for home-path paths in fullscreen mode. |
| [#11072](https://github.com/earendil-works/pi/pull/11072) | **fix: limit selector window height** | Renders max 10 options in selector window with `(selection/total)` for overflow; prevents rendering entire lists. |
| [#11039](https://github.com/earendil-works/pi/pull/11039) | **docs(coding-agent): restore extension guide details** | Restores hook-aware diagrams, documents event selection, adds curated extension examples and provider recipes. |
| [#10716](https://github.com/earendil-works/pi/pull/10716) | **fix(env): include stderr in pi-env startup errors** | Captures daemon stderr for better debugging of loginShell profile failures (e.g., missing files). |

---

## Hot Discussions

### Ideas

| # | Discussion | Summary |
|---|------------|---------|
| [#10632](https://github.com/earendil-works/pi/discussions/10632) | **Pausing a run on a tool call until a human approves or client-side results arrive** | Proposes durable pause at tool-call boundary with persistence; enables human-in-the-loop workflows. (1 👍) |

### Show and Tell

| # | Discussion | Summary |
|---|------------|---------|
| [#11068](https://github.com/earendil-works/pi/discussions/11068) | **ColliePWA 1.22.0, the phone client for your Pi Durable agent** | New PWA brings Pi Durable agents to mobile; users can approve/deny or resume agents from phone. (1 👍) |

---

## Feature Request Trends

From issue and discussion analysis, the most-requested directions are:

1. **Human-in-the-loop tooling** — Durable pause/resume for approval workflows and client-side tool execution (#10852, #10632)
2. **Enhanced model attribution** — Track token usage per model for auxiliary operations (#11090)
3. **System-level configuration (MDM)** — Global `/etc/pi/models.json`-style config for enterprise deployments (#10895)
4. **Model catalog robustness** — Stale extension provider catalogs silently substitute models (#10623)
5. **Improved trust model** — Honor explicit trust decisions consistently (#10947)
6. **Mobile/remote agent control** — Client apps for remote agent interaction (#11068)

---

## Developer Pain Points

- **Performance regressions**: High CPU on macOS long sessions (#7730), fullscreen transcript re-rendering (#9549)
- **Cross-platform tool failures**: PowerShell 7 detection on Windows Store installs (#10976), non-ASCII file editing corruption (#10074)
- **Image handling in builds**: `resizeImage` returns null in Bun-compiled binaries (#10645)
- **Input handling bugs**: Keyboard input freezes after startup color query (#10884), symbols leaking under CPU load (#11086)
- **Trust model confusion**: Explicit "Do not trust" decisions ignored when project has no trust-requiring resources (#10947)
- **Selector performance**: Rendering entire extension-provided option lists causes UI lag (#11072)

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a Qwen Code community digest for 2026-10-18 based on the provided GitHub data. Let me analyze the data and create a structured digest following the specified sections.

Let me go through the data:

**Releases:**
- v0.25.2-nightly.20261017.39c237af3b - One fix for managed-agent journal-only interrupted-turn settle

**Latest Issues (showing top 30):**
1. #12380 - proposal(serve): Define Managed Agent dual-path architecture and staged delivery (71 comments, P2, feature-request)
2. #12952 - feat(managed-agent): Stage G authoritative Session history, writer fencing and takeover (10 comments, P2)
3. #14166 - feat(managed-agent): D7-2 original-command reconciliation for java_durable operations (8 comments, P2)
4. #13333 - fix(managed-agent): ≥8 concurrent Turns stall after the model answers on modest hardware (6 comments, P1, bug)
5. #13746 - feat(managed-agent): H4f public task cancel and child task-event streams (6 comments, P2, closed)
6. #13113 - Session becomes unopenable: "Transcript snapshot is too large to index" (6 comments, P1, bug)
7. #14054 - test(managed-agent): Stage F fault gates FG8-FG10 (6 comments, P2)
8. #14419 - fix(cli): the Hosted Harness answers the relay's answered verb's store failures as 400 (5 comments, P2, bug)
9. #13930 - H3 enablement follow-ups: restart-proof the held-Runtime drain (5 comments, P2, bug)
10. #12886 - Custom-provider guidance for models with a 32K context budget (5 comments, P3)


11. #14494 - test(managed-agent): WorkspaceCsiSqlWorkerMySqlIT gets 400 runtime_broker_invalid_request (5 comments, P1, closed)
12. #13869 - Deferred review findings from PR #13737 (4 comments, P2)
13. #14495 - test(managed-agent): HostedBackgroundPublicationGate's wedge driver parses a half-written wire line (4 comments, P2, bug)
14. #14408 - Deferred review findings from PR #14317: operator-recovery discards the bound key ring (4 comments, P2, bug)

I've compiled a comprehensive list of issues spanning critical bugs, feature requests, and technical debt items across the Qwen Code project. The most pressing concerns include concurrent turn handling, session management, and storage worker integration problems.

15. #14453 - fix(managed-agent): native storage registration refuses a root whose marker lands in its creation clock tick (4 comments, P1, bug)
16. #14446 - test(managed-agent): Stage F fault gates FG11 for the schedule and automation_run domains (4 comments, P2)
17. #14167 - feat(managed-agent): D7-3 the opt-in java_durable admission profile and its switch (4 comments, P2, closed)
18. #14127 - Deferred review findings from PR #13902: feat: project agent identity and Agent Team delivery (4 comments, P3)
19. #14466 - Telemetry: OTLP/HTTP export (otlpProtocol "http") sends empty POST bodies (4 comments, P2, documentation)
20. #14508 - Telemetry: emit reasoning effort as a span attribute (3 comments, P3)
21. #14507 - Feature Request: a supported way to enable LSP in the Qwen Code Desktop client (3 comments, P3)
22. #14504 - managed-agent: R1-1 from #13109 (a Hosted MCP close after a lost owner release) (3 comments, P2, bug)
23. #14503 - managed-agent: Hosted stdio MCP servers run uncontained (3 comments, P2, bug)
24. #14502 - managed-agent: a Runtime worker killed mid-Hook leaves Hook processes running (3 comments, P2, bug)

The remaining issues cover additional bug fixes, test coverage gaps, and feature enhancements across multiple subsystems. Several items address runtime behavior, storage constraints, and integration testing scenarios that need attention.

**Latest Pull Requests (top 20):**
1. #14345 - feat(web-shell): add approval mode allowlist
2. #14281 - feat(memory): add scoped external import jobs for CLI and HTTP
3. #14493 - fix(ci): report Java failures on PRs and manual main runs
4. #14172 - feat(cli): paste clipboard text with Ctrl+V on Linux
5. #14511 - fix(cli): preserve answered command store error classification
6. #14083 - fix(cli): keep --disable-mcp-server exclusions across settings reload and ACP workspace reload
7. #14046 - feat(core): add a real PTY backend for the Bun runtime
8. #12560 - test(review): pin ghApiAllNested's paginated nested-array request
9. #14297 - feat(web-shell): delete selected message groups from session history
10. #11562 - fix(cli): keep one-shot system reminders out of the user's own message

The pull requests focus on web-shell enhancements, CLI improvements, and core functionality fixes. Approval mode allowlists, clipboard handling on Linux, and memory import capabilities represent the most substantial additions. CI reporting and error classification fixes address longstanding developer experience issues.

Now I'll generate the digest in the requested format.</think>

# Qwen Code Community Digest — 2026-10-18

## 1. Today's Highlights

The Qwen Code project is advancing its multi-agent session management architecture with significant progress on the Managed Agent dual-path design (#12380) and Stage G session history authority. A critical P1 bug affecting sessions with large transcript files (#13113) is generating attention—sessions become unopenable once the 256 MiB index limit is exceeded. The nightly build `v0.25.2-nightly.20261017` shipped a fix for journal-only interrupted-turn settlement in the managed-agent.

---

## 2. Releases

| Version | Summary |
|---------|---------|
| **v0.25.2-nightly.20261017.39c237af3b** | Fixed `managed-agent`: admitted `team_plan_approval` into the journal-only interrupted-turn settle path. Full release notes at [#13847](https://github.com/QwenLM/qwen-code/pull/13847). |

---

## 3. Hot Issues

| # | Issue | Priority | Why It Matters |
|---|-------|----------|----------------|
| **#12380** | **[proposal(serve): Define Managed Agent dual-path architecture and staged delivery](https://github.com/QwenLM/qwen-code/issues/12380)** | P2 | Core architecture proposal defining a staged Managed Agent design with dual-path execution, durable session ownership, and Workspace bindings. 71 comments—active design discussion. |
| **#13113** | **[Session becomes unopenable: "Transcript snapshot is too large to index"](https://github.com/QwenLM/qwen-code/issues/13113)** | P1 | Critical bug: long-running sessions with many file touches grow unbounded `.jsonl` transcripts, hitting a hardcoded 256 MiB index limit. Sessions become completely unopenable. |
| **#13333** | **[fix(managed-agent): ≥8 concurrent Turns stall after the model answers (lock convoy)](https://github.com/QwenLM/qwen-code/issues/13333)** | P1 | Concurrency bug on modest hardware: 8+ concurrent turns deadlock in the store path after the model responds. Bisected with new `--list-pagination` mode. |
| **#14453** | **[fix(managed-agent): native storage registration refuses root with marker in creation tick](https://github.com/QwenLM/qwen-code/issues/14453)** | P1 | Linux-specific race condition: `WorkspaceStorageGuardTest.nativeRegistrationSurvivesNewGuardAndMtimeChangesButRefusesRootReplacement` fails intermittently due to ambiguous birth time. |
| **#14419** | **[fix(cli): Hosted Harness answers relay's answered verb store failures as 400](https://github.com/QwenLM/qwen-code/issues/14419)** | P2 | Inconsistency bug: `answered` verb returns 400 `invalid_command_operation` while sibling `execute` returns 503 for the same store failure. |
| **#12952** | **[feat(managed-agent): Stage G authoritative Session history, writer fencing](https://github.com/QwenLM/qwen-code/issues/12952)** | P2 | Tracks Stage G of #12380: externalizing authoritative Session history/checkpoints and proving writer fencing before removing owner affinity. |
| **#14166** | **[feat(managed-agent): D7-2 original-command reconciliation for java_durable](https://github.com/QwenLM/qwen-code/issues/14166)** | P2 | Second slice of D7 umbrella: implements original-command reconciliation for `java_durable` operations. Hard precondition per #12380. |
| **#14503** | **[managed-agent: Hosted stdio MCP servers run uncontained](https://github.com/QwenLM/qwen-code/issues/14503)** | P2 | Process containment bug: stdio MCP servers spawned as plain children can outlive dead Runtime workers and survive graceful closes. |
| **#14502** | **[managed-agent: Runtime worker killed mid-Hook leaves Hook processes running](https://github.com/QwenLM/qwen-code/issues/14502)** | P2 | Process leak bug: Hook processes continue running in cgroup after Runtime worker is killed mid-Hook (SIGKILL, V8 heap-OOM, or native crash). |
| **#14466** | **[Telemetry: OTLP/HTTP export sends empty POST bodies](https://github.com/QwenLM/qwen-code/issues/14466)** | P2 | Telemetry regression: OTLP/HTTP exporter sends empty POST bodies despite spans being produced. No spans reach the receiver. |

---

## 4. Key PR Progress

| # | PR | Author | What It Does |
|---|-----|--------|--------------|
| **#14345** | **[feat(web-shell): add approval mode allowlist](https://github.com/QwenLM/qwen-code/pull/14345)** | ytahdn | Adds optional `ui.allowedApprovalModes` setting and host Prop for approval-mode allowlist. Explicit Prop (including `[]`) overrides settings. |
| **#14281** | **[feat(memory): add scoped external import jobs for CLI and HTTP](https://github.com/QwenLM/qwen-code/pull/14281)** | callmeYe | Introduces Qwen-owned external memory import service for CLI/cloud integrations. Clients submit relative Markdown paths, preview deterministically, select sections, and start durable consolidation. |
| **#14493** | **[fix(ci): report Java failures on PRs and manual main runs](https://github.com/QwenLM/qwen-code/pull/14493)** | yiliang114 | Reports failed Java checks directly on PRs with failed job links, steps, test names, and commit info. Updates bot comments for repeated failures. |
| **#14172** | **[feat(cli): paste clipboard text with Ctrl+V on Linux](https://github.com/QwenLM/qwen-code/pull/14172)** | qwen-code-dev-bot | Linux TUI now reads text clipboard on Ctrl+V when no image is present. Previously only read image paths. |
| **#14511** | **[fix(cli): preserve answered command store error classification](https://github.com/QwenLM/qwen-code/pull/14511)** | GoldArowana | Draft PR addressing #14419: preserves error classification for answered command store failures instead of converting to 400. |
| **#14083** | **[fix(cli): keep --disable-mcp-server exclusions across settings reload](https://github.com/QwenLM/qwen-code/pull/14083)** | VitaliBabkin | Makes `--disable-mcp-server` exclusions durable at runtime. Previous behavior re-enabled excluded servers on settings hot-reload. |
| **#14046** | **[feat(core): add a real PTY backend for the Bun runtime](https://github.com/QwenLM/qwen-code/pull/14046)** | chiga0 | Enables POSIX PTY backend for Bun runtime—shell tools and Web Terminal sessions get proper terminal output, resize, and exit observation. |
| **#14297** | **[feat(web-shell): delete selected message groups from session history](https://github.com/QwenLM/qwen-code/pull/14297)** | ytahdn | Adds grouped message deletion to Web Shell. Selects current prompt + complete reply group, supports linked checkboxes and non-contiguous earlier groups. |
| **#14499** | **[test(managed-agent): add FG12a MCP reply-loss fault gates](https://github.com/QwenLM/qwen-code/pull/14499)** | wenshao | Adds FG12a fault gate for Hosted MCP control path: three lost-reply cases (mcp-configure replacement, resource_read mcp-invoke, prompt_get mcp-invoke). |
| **#14490** | **[test(managed-agent): add FG13c Hook owner-restart fault gates](https://github.com/QwenLM/qwen-code/pull/14490)** | wenshao | Adds FG13c owner-restart fault gates for Hosted command-Hook domain. Hooks run in Runtime worker's delegated cgroup v2 unit. |

---

## 5. Hot Discussions

*No discussion data was provided in the source.*

---

## 6. Feature Request Trends

| Trend | Related Issues | Description |
|-------|----------------|-------------|
| **Multi-agent session architecture** | #12380, #12952, #14166, #14167, #13746 | Extensive work on staged Managed Agent delivery: dual-path architecture, authoritative session history, writer fencing, task cancellation, child task streams. |
| **Enhanced telemetry & observability** | #14466, #14508 | Requests for OTLP/HTTP export fixes and adding `gen_ai.request.reasoning_effort` span attributes. |
| **Desktop client enhancements** | #14507 | Demand for supported LSP enablement in Qwen Code Desktop client via settings (e.g., `experimental.lsp`). |
| **MCP (Model Context Protocol) hardening** | #14504, #14503, #14502 | Multiple issues on MCP server containment, process lifecycle, and recovery after lost owner release. |
| **Custom provider compatibility** | #12886 | Need for documented guidance for custom OpenAI-compatible providers with limited (32K) context budgets. |
| **Clipboard & TUI improvements** | #14172 | Linux clipboard text paste support in CLI. |

---

## 7. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Session corruption/unopenability** (#13113) | High | Users with long-running sessions lose access entirely once transcript exceeds 256 MiB—no recovery path. |
| **Concurrent turn stalling** (#13333) | High | 8+ concurrent turns deadlock on modest hardware after model response—affects multi-agent workloads. |
| **Process containment leaks** (#14503, #14502) | Medium | stdio MCP servers and Hook processes escape containment, persisting after Runtime worker death. |
| **CI Java failure visibility** (#14493) | Medium | Java test failures on main/PRs difficult to trace; new PR aims to surface directly on GitHub. |
| **Settings hot-reload side effects** (#14083) | Medium | `--disable-mcp-server` exclusions lost on settings reload—re-enables excluded servers unexpectedly. |
| **OTLP/HTTP telemetry broken** (#14466) | Medium | Telemetry exporter sends empty bodies—observability blind spot for production debugging. |
| **Transcript snapshot growth** (#13113) | Ongoing | Quadratic growth in `.jsonl` transcript files needs bounds or streaming approach. |

---

*Digest generated from GitHub data — 2026-10-18*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*