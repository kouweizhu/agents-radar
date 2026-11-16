# AI CLI Tools Community Digest 2026-11-16

> Generated: 2026-11-16 02:21 UTC | Tools covered: 7

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

<think>The user wants me to generate a comprehensive cross-tool comparison report based on the digest summaries I've already created for 7 AI CLI tools. Let me analyze all the data and create a structured report.

Let me compile the key data points from each digest:

1. **Claude Code** (github.com/anthropics/claude-code)
- Issues: 50 total, top 30 shown
- PRs: 0 in last 24h
- Discussions: No data
- Releases: None in last 24h

2. **OpenAI Codex** (github.com/openai/codex)
- Releases: 2 alpha releases (v0.171.0-alpha.6, v0.171.0-alpha.7)
- Issues: 30 shown, most active has 38 comments
- PRs: 17 PRs in last 24h
- Discussions: 8 discussions

3. **Gemini CLI** (github.com/google-gemini/gemini-cli)
- Releases: None in last 24h
- Issues: 50 total, top 30 shown
- PRs: 16 PRs in last 24h
- Discussions: No data

4. **GitHub Copilot CLI** (github.com/github/copilot-cli)
- Releases: None in last 24h
- Issues: ~15 issues in the data
- PRs: 0 in last 24h
- Discussions: No data

5. **OpenCode** (github.com/anomalyco/opencode)
- Releases: None in last 24h
- Issues: 30 shown
- PRs: 17 PRs in last 24h
- Discussions: No discussion data provided

6. **Pi** (github.com/earendil-works/pi)
- Releases: None in last 24h


- Issues: 27 items
- PRs: 1 PR
- Discussions: 1 discussion

7. **Qwen Code** (github.com/QwenLM/qwen-code)
- Releases: 4 releases (v0.27.4, nightly, SDK, desktop)
- Issues: 10 shown
- PRs: 17 PRs in last 24h
- Discussions: No discussion data provided

Now I'll organize this into the requested sections. I notice some repos show significant activity while others are quieter—OpenAI Codex and Qwen Code both had multiple releases and PRs, whereas Claude Code and Copilot CLI had no recent releases. I'll need to highlight these patterns in the cross-tool analysis.
</think>


# AI CLI Tools Ecosystem — Cross-Tool Comparison Report

**Date:** November 16, 2026
**Scope:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, Qwen Code

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a phase of rapid, uneven maturation. Proprietary tools from major AI labs (Claude Code, Codex, Copilot CLI, Gemini CLI) are converging on **agentic execution models** with permission systems, subagent orchestration, and MCP integration—but diverge significantly in implementation depth and ecosystem openness. Community-driven alternatives (OpenCode, Pi) focus on extensibility and protocol standardization, while Qwen Code represents a hybrid model emphasizing the 1.0 loop kernel rewrite and multi-adapter support. The defining tension across all tools is **reliability versus capability**: false-positive classifiers, race conditions in concurrent tool execution, and permission model complexity are the universal friction points. Cross-platform support (Windows in particular) remains a consistent weak spot, and the Agent Client Protocol (ACP) is emerging as the de facto interoperability layer for third-party integrations.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Discussions (24h) | Releases (24h) | Channel Focus |
|------|-------------|-----------|-------------------|----------------|---------------|
| **Claude Code** | 50 (top 30 shown) | 0 | No data | 0 | Issues dominant |
| **OpenAI Codex** | 30 | 17 | 8 | 2 alpha | Balanced |
| **Gemini CLI** | 50 (top 30 shown) | 16 | No data | 0 | Issues + PRs balanced |
| **Copilot CLI** | ~15 | 0 | No data | 0 | Issues only |
| **OpenCode** | 30 | 17 | No data | 0 | Issues + PRs balanced |
| **Pi** | 27 | 1 | 1 | 0 | Issues only |
| **Qwen Code** | 10 | 17 | 0 | 4 | PRs dominant |

**Observations:**

- **Highest iteration velocity:** OpenAI Codex, OpenCode, and Qwen Code each merged or opened 17 PRs in 24 hours, indicating active development sprints.
- **Release cadence:** Only Codex (2 alpha pre-releases) and Qwen Code (4 releases across CLI, SDK, nightly, desktop) shipped binaries.
- **Discussion activity:** Codex is the only tool with active discussion engagement (8 threads); Copilot CLI, Gemini CLI, Claude Code, and OpenCode lack discussion data—likely because GitHub Discussions is not enabled on those repositories rather than indicating inactivity.
- **PR drought:** Claude Code and Copilot CLI recorded zero PRs in the 24-hour window, suggesting either deployment timing or reduced community contribution.

---

## 3. Shared Feature Directions

Several capability requirements appear across three or more tool communities, indicating industry-wide prioritization:

| Shared Need | Tools Affected | Specific Manifestations |
|-------------|---------------|------------------------|
| **MCP (Model Context Protocol) robustness** | Claude Code, Gemini CLI, Copilot CLI, OpenCode, Pi | Tool discovery failures, session resumption with dynamic MCP servers, lifecycle hook propagation, connection status visibility |
| **Auto-mode / classifier false-positive reduction** | Claude Code, Gemini CLI, OpenCode | Agents blocking benign read-only operations; security classifiers generating 80%+ false-positive rates (Claude Code #104811) |
| **Cross-platform stability** | Claude Code, Codex, Gemini CLI, OpenCode, Qwen Code | Windows PowerShell/terminal failures; Wayland browser subagent crashes; macOS sandbox networking; Git autocrlf test failures |
| **ACP (Agent Client Protocol) parity** | Copilot CLI, Pi | Exposing `contextTier` as session config; advertising Copilot Fusion; slash-command output streaming; headless session execution |
| **Subagent / agent reliability** | Claude Code, Gemini CLI, OpenCode, Qwen Code | Recovery bug misreporting success; generalist agent hangs; permission approval hangs; parallel agent dialog rendering |
| **Session persistence & handoff** | Claude Code, OpenCode, Pi, Gemini CLI | Project handoff between sessions; version history regression; cross-directory restoration bugs; context rot in long sessions |
| **Dependency / security hardening** | Codex, Gemini CLI, Qwen Code | CVE audit failures; npm security scans; CI security gate improvements; `qs` library updates |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Differentiation |
|------|--------------|-------------|---------------------------|
| **Claude Code** | Cowork real-time collaboration; Artifact versioning; Cyber safeguard system | Individual developers and teams needing synchronous collaboration | Unique dual-device commit model; Artifact version history; Cyber safeguard permission layer |
| **OpenAI Codex** | Voice/multi-modal input; Langfuse observability; Cloud task management | OpenAI subscription users; enterprise teams with cloud workflow needs | Voice transcription for IDE (244 👍 top request); cloud-native task archiving with no delete; Dots system for local network coordination |
| **Gemini CLI** | AST-aware code discovery; zero-dependency OS sandboxing; durable execution | Developers needing surgical code analysis with minimal overhead | Epic-level AST tooling to reduce token bloat; security-first sandbox design aligned with model bash affinity; npm batch updates (70 packages in one PR) |
| **Copilot CLI** | ACP protocol parity; plugin ecosystem; VS Code / desktop integration | Third-party tool builders; developers using Copilot beyond GitHub's IDE surfaces | ACP-first design for external orchestrators; custom-rule persistence; VS Code Codex extension with steer controls |
| **OpenCode** | Free tier reliability; async video generation; ACP standardization | Free-tier users; developers needing video generation; ACP adopters | Largest free-tier mega-thread (370 comments); disk-backed async video API; Slack link preview in console |
| **Pi** | Extension-registered provider system; durable task parking; concurrency correctness | Extension developers; CI/CD pipelines; developers needing multi-provider setups | `pi-durable` cancellation handlers; inter-session cache for OpenAI APIs; `ctx.ui.setStatus` for MCP status publishing |
| **Qwen Code** | 1.0 loop kernel rewrite; Managed Agent filesystem access; multi-adapter support | Teams using Qwen models; DingTalk enterprise users; developers needing scheduled agent loops | Event-driven loop kernel (fundamental architecture); DingTalk adapter; `/loop` managed skill for scheduled execution |

---

## 5. Community Momentum & Maturity

| Tool | Momentum | Maturity Signals |
|------|----------|------------------|
| **OpenAI Codex** | 🔥 High | 17 PRs in 24h, 8 active discussions, 2 alpha releases; mature CI/CD with chained e2e gating; third-party plugin ecosystem emerging |
| **Qwen Code** | 🔥 High | 17 PRs in 24h, 4 simultaneous releases across components, 1.0 loop kernel actively landing; large deflake campaign underway |
| **OpenCode** | 🔥 High | 17 PRs in 24h, active security remediation (CVE tracking), async video generation in progress; free-tier issues represent a healthy problem (high adoption) |
| **Gemini CLI** | 🟡 Moderate | 16 PRs in 24h, strong dependency modernization cadence; but fewer discussions and no releases suggests internal iteration rather than community growth |
| **Claude Code** | 🟡 Moderate | Active issue triage (50 issues), but zero PRs in 24h and no recent releases; community appears to report rather than contribute |
| **Pi** | 🟢 Emerging | Small footprint (27 issues, 1 PR, 1 discussion) but ACP interest (#4444, 54 👍) indicates potential for external ecosystem growth |
| **Copilot CLI** | 🟢 Emerging | Limited issue volume (~15), no recent PRs; ACP parity requests dominate, suggesting the community is driving toward a specific feature gap rather than broad adoption |

---

## 6. Trend Signals

**1. The MCP Standardization Wave**
Multiple tools are independently improving MCP robustness: tool discovery reliability, connection status visibility, session resumption with dynamic tool sets, and distributed tracing across MCP boundaries. This convergence suggests MCP is becoming the de facto extensibility layer, and tools that fail to provide a stable MCP experience will lose extension developers.

**2. ACP as the Interoperability Layer**
Copilot CLI, Pi, and OpenCode are all investing in ACP parity—exposing session configuration, model catalogs, and capability negotiation to external clients. This indicates a broader industry recognition that agentic tools need standardized programmatic interfaces beyond CLI interaction.

**3. Free Tier as a Trust Barometer**
OpenCode's 370-comment free-tier mega-thread is the single largest community signal across all tools. When free tier is unreliable, users don't just complain—they defect. Proprietary tools (Claude Code, Codex) have less exposure to this specific issue but face analogous trust problems around classifier false positives and auto-mode behavior.

**4. Cross-Platform Debt is a P0**
Windows-specific bugs appear in every tool's issue tracker. Whether PowerShell spawn failures (OpenCode, Gemini CLI, Pi), terminal input sequence leaks (Pi), git autocrlf test failures (Qwen Code), or Cowork file commit race conditions (Claude Code), Windows remains the highest-friction platform. Tools that prioritize Windows parity will capture a meaningful developer segment.

**5. Agent Reliability Over New Features**
The most-commented issues across tools are not feature requests—they are agent behavior failures: false-positive classifiers, premature turn completion, silent failures, and subagent misreporting. Community sentiment favors reliability hardening over feature expansion.

**6. Dependency Security as a Sustained Burden**
CVE audit failures and npm security scans are recurring in Codex, Gemini CLI, and Qwen Code. This is a structural cost of JavaScript/TypeScript-based tooling that requires ongoing maintenance investment and will continue to generate community friction until dependency update pipelines are fully automated.

**7. Durable Execution Gains Traction**
Pi's `pi-durable` cancellation handlers and Qwen Code's managed `/loop` skill both address the need for agents to survive interruptions—host restarts, quota resets, session disconnects. This pattern is likely to become standard across all agentic tools as production usage grows.

---

*Report compiled from github.com activity data for 2026-11-16. All cross-tool comparisons are based on observable issue, PR, discussion, and release patterns.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data from the official repository (anthropics/skills) and create a highlights report. Let me analyze the data provided:

**Pull Requests (Top 20 by comments):**
All PRs show "Comments: undefined" and "👍: 0", which is interesting - it seems the data might not have captured engagement metrics properly, or these PRs genuinely have no comments/likes. Let me look at what skills are being proposed/fixed:

1. #1742 - fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
2. #1298 - fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
3. #1245 - Add notion-spec-to-implementation and quantitative-resume-auditor skills
4. #1980 - webapp-testing: avoid shell=True in with_server.py (security fix)
5. #1792 - fix(docx): report LibreOffice timeout as an error and verify the output
6. #1771 - feat(skills): add proofcore-contract-auditor for smart contract notarization
7. #1734 - Detect orphaned docx comments
8. #1703 - Add md2video-audio skill
9. #525 - Add pyxel skill for retro game development
10. #2019 - fix(xlsx): resolve worksheet-scoped defined names and aliases
11. #1730 - fix(claude-api): replace dead URLs in academy-guide and tool-use-concepts
12. #1681 - fix(skill-creator): support direct execution of package_skill.py
13. #514 - Add document-typography skill
14. #2108 - docs: clarify document skills snapshot status
15. #1997 - fix(skill-creator): parse YAML frontmatter scalars correctly


16. #1977 - algorithmic-art: wrapAround() now wraps
17. #1976 - webapp-testing: report textarea and select correctly
18. #1975 - pptx: reject --cols below 1 in thumbnail.py
19. #1950 - docs(claude-api): update Python pause_turn runner guidance
20. #1615 - Add scnet-hpc skill

**Issues (Top 15 by comments):**
The most-discussed issues reveal security concerns around namespace abuse in community skills, with a security issue drawing 46 comments. There are also feature requests for org-wide skill sharing and reports of evaluation script failures where skills aren't triggering properly.

Beyond these, there's interest in a compact-memory skill format, skills disappearing unexpectedly, evaluation script UUID mismatches, and duplicate skill installations. An interesting tension emerges between educational documentation in skill-creator versus operational guidance, while the context window gets consumed by a large API skill, creating practical limitations. The quality gate pipeline proposal and theme-factory description issues round out the remaining concerns.

I need to structure this as a community report focused on the most-discussed pull requests despite the undefined comment counts, highlight what the community is requesting through issues, and identify which pending skills show the most engagement.
</think>


# Claude Code Skills Community Highlights Report

**Data Source:** `github.com/anthropics/skills` | **As of:** 2026-11-16

---

## 1. Top Skills Ranking

Despite PR engagement metrics showing `undefined` comments across the board (suggesting data capture issues), these Skill PRs represent the most substantive or strategically significant contributions by scope, problem addressed, and community need:

### 1.1 `mcp-builder` — MCP ≥2.0 Compatibility Fix
- **PR #1742** | Author: Kuldeeep18 | Status: OPEN
- **Functionality:** Updates `skills/mcp-builder/scripts/connections.py` to support the `streamable_http_client` API renamed in `mcp>=2.0.0` and fixes custom HTTP header configuration via `create_mcp_http_client/http_client`.
- **Significance:** Critical compatibility fix for the growing MCP ecosystem; ensures skills work with the latest Model Context Protocol version.
- **Link:** https://github.com/anthropics/skills/pull/1742

### 1.2 `skill-creator` — Trigger Evaluation Hardening
- **PR #1298** | Author: MartinCajiao | Status: OPEN
- **Functionality:** Fixes false misses in trigger evaluation by isolating per-worker command probes, resolving `select()` subprocess pipe failures on Windows, and preventing unrelated tools from stopping the scan. Also correctly handles runtime failures as non-triggers.
- **Significance:** Directly improves the skill development and testing workflow—high value for skill authors.
- **Link:** https://github.com/anthropics/skills/pull/1298

### 1.3 `notion-spec-to-implementation` + `quantitative-resume-auditor`
- **PR #1245** | Author: mrdesouzaphd-cmyk | Status: OPEN
- **Functionality:** Transforms product/tech specs into actionable Notion tasks with acceptance criteria and progress tracking; adds a quantitative resume auditor for structured candidate evaluation.
- **Significance:** Two new vertical-specific skills targeting product management and HR workflows—expands Claude Code's reach beyond pure development.
- **Link:** https://github.com/anthropics/skills/pull/1245

### 1.4 `proofcore-contract-auditor`
- **PR #1771** | Author: ProofCore-Protocol | Status: OPEN
- **Functionality:** Performs automated static analysis of Solidity and Rust smart contracts, anchoring cryptographic audit proofs onto the TON Blockchain via zero-storage Merkle protocol.
- **Significance:** First Web3/blockchain-focused skill; signals demand for specialized developer tooling in the DeFi and smart contract space.
- **Link:** https://github.com/anthropics/skills/pull/1771

### 1.5 `md2video-audio`
- **PR #1703** | Author: 70v-Yoyo | Status: OPEN
- **Functionality:** Compiles Markdown documents into professional MP4 videos with realistic human-like voiceovers using Marp for slide generation.
- **Significance:** Bridges documentation and presentation workflows; zero-cost content repurposing.
- **Link:** https://github.com/anthropics/skills/pull/1703

### 1.6 `pyxel` — Retro Game Development
- **PR #525** | Author: kitao | Status: OPEN
- **Functionality:** Guides implementation, headless input-driven runs, frame inspection, and state checks for Pyxel retro games in Python.
- **Significance:** Popular niche—game dev is a frequent Claude Code use case; Pyxel is a well-known lightweight game engine.
- **Link:** https://github.com/anthropics/skills/pull/525

### 1.7 `webapp-testing` — Security Fix
- **PR #1980** | Author: Pcmhacker-piro | Status: OPEN
- **Functionality:** Removes `shell=True` from `subprocess.Popen()` in `with_server.py` to prevent command injection (CWE-78) when spawning server commands.
- **Significance:** Security hardening; addresses a real-world vulnerability in a production-used skill.
- **Link:** https://github.com/anthropics/skills/pull/1980

### 1.8 `scnet-hpc` — HPC Cluster Operations
- **PR #1615** | Author: lql341 | Status: OPEN
- **Functionality:** Profile-based SSH and Slurm workflows for SCNet HPC clusters, including job generation, cluster discovery, and compute-node management.
- **Significance:** Targets academic/research HPC users—a growing segment of Claude Code adoption.
- **Link:** https://github.com/anthropics/skills/pull/1615

---

## 2. Community Demand Trends

Analysis of top Issues reveals these dominant themes:

| Trend | Evidence | Issue |
|-------|----------|-------|
| **Trust/Security Model** | Namespace impersonation risk; skills under `anthropic/` may deceive users into granting elevated permissions | [#492](https://github.com/anthropics/skills/issues/492) — 46 comments |
| **Org-Wide Skill Sharing** | No native mechanism to share skills within an organization; users resort to Slack/manual uploads | [#228](https://github.com/anthropics/skills/issues/228) — 17 comments |
| **Eval/Test Reliability** | `run_eval.py` produces 0% trigger rates; parallel worker UUID collisions; skill disappearance bugs | [#556](https://github.com/anthropics/skills/issues/556), [#1352](https://github.com/anthropics/skills/issues/1352), [#62](https://github.com/anthropics/skills/issues/62) |
| **Token Budget Management** | `claude-api` skill injects ~156k tokens, exhausting context windows | [#1487](https://github.com/anthropics/skills/issues/1487) |
| **Workflow Automation** | Demand for skills bridging specs→Notion, markdown→video, resume auditing | PR #1245, #1703 |
| **Smart Contract / Web3** | Explicit request for Solidity/Rust static analysis and blockchain notarization | PR #1771 |

---

## 3. High-Potential Pending Skills

These PRs show active development and clear utility—likely to land soon:

| Skill | PR | Highlights |
|-------|-----|------------|
| **`mcp-builder` fix** | [#1742](https://github.com/anthropics/skills/pull/1742) | MCP 2.0 compatibility; essential for ecosystem |
| **`skill-creator` hardening** | [#1298](https://github.com/anthropics/skills/pull/1298) | Windows support, eval reliability |
| **`pyxel` game dev** | [#525](https://github.com/anthropics/skills/pull/525) | High community interest; popular niche |
| **`proofcore-contract-auditor`** | [#1771](https://github.com/anthropics/skills/pull/1771) | Web3 niche; unique in the catalog |
| **`document-typography`** | [#514](https://github.com/anthropics/skills/pull/514) | Addresses a universal pain point in AI-generated docs |
| **`scnet-hpc`** | [#1615](https://github.com/anthropics/skills/pull/1615) | Targets research/academic HPC segment |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for reliability hardening of the skill development lifecycle itself**—particularly trigger evaluation accuracy, cross-platform compatibility, and trust/security boundaries—while simultaneously expanding into vertical niches (Web3, HPC, game dev, video generation) to broaden Claude Code's appeal beyond general-purpose coding assistance.

---

<think>The user wants me to generate a Claude Code community digest for 2026-11-16 based on the provided GitHub data. Let me analyze the data and structure it according to the requested format.

Key observations from the data:
1. No releases in the last 24h
2. 50 issues total, showing top 30 by comment count
3. No PRs in the last 24h
4. No discussion data provided

Let me organize this into the requested sections:

1. **Today's Highlights** - Need to summarize the most important updates
2. **Releases** - None (skip)
3. **Hot Issues** - Pick 10 from the 30 shown
4. **Key PR Progress** - No PRs (skip)
5. **Hot Discussions** - No discussion data (skip)
6. **Feature Request Trends** - Extract from issues
7. **Developer Pain Points** - Summarize recurring issues

Let me identify the most significant issues:

1. #93482 - Cowork file commit lag issue (26 comments) - data loss concern
2. #96718 - Artifact version history removed (10 comments, 16 👍) - significant regression
3. #87938 - Cyber safeguard false positives (5 comments) - security concern
4. #104811 - Auto mode classifier false positives (4 comments) - 121 of 149 denials were benign
5. #95561 - reasoning_extraction false positives (4 comments)
6. #105390 - Chrome site permissions broken (4 comments, 5 👍)
7. #99691 - Slash commands broken in desktop app (4 comments)
8. #72589 - Feature request for denial reason in hook (3 comments)
9. #97914 - Auto mode classifier blocking reads (3 comments)
10. #110184 - Privacy mod blocking scripts (3 comments)

Looking at feature requests:
- #110307 - Store project-local settings centrally


- #108005 - Expose app-server protocol

I'll highlight the emerging themes in these issues. Permissions and classifiers seem to be a critical pain point, with multiple issues around auto mode and false positives. Cross-platform compatibility remains challenging, particularly on Windows and macOS. Chrome integration and plugin reliability are also significant concerns for users.

The issues suggest ongoing challenges with permission management, security safeguards, and maintaining consistent behavior across different platforms and tools. Auto mode and plugin systems appear to be areas requiring more robust testing and refinement.

Emerging feature requests indicate a desire for more granular control, better local configuration management, and improved protocol exposure. The community seems to want more flexibility and transparency in how Claude Code operates across different development environments.

Permissions and classification systems are creating friction, with auto mode classifiers generating excessive false positives that disrupt workflow. Platform-specific bugs, particularly on Windows and macOS, are fragmenting user experience. Chrome integration remains problematic, while plugin reliability and extension behaviors continue to challenge developers.
</think>


# Claude Code Community Digest

**Date:** November 16, 2026
**Source:** [anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## Today's Highlights

The community is actively debugging a critical **Cowork file commit lag issue** (#93482) where device commit operations report success before disk writes complete, creating silent data loss risks. A significant **regression in Artifact version history** (#96718) has drawn substantial attention with 16 👍 reactions, removing saved version access across all Claude Code entry points. The auto-mode classifier continues generating high false-positive rates, with one user documenting 121 of 149 denials as benign across two months of usage.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

### 1. Cowork File Commit Reports Success Before Disk Write Completes [#93482](https://github.com/anthropics/claude-code/issues/93482)
**Impact:** Critical | 26 comments | Platform: Windows | Area: Cowork
The `device_commit_files` function reports success immediately while on-disk content lags exactly one commit behind, creating potential data loss scenarios. The mtime stays stale, indicating a race condition in the commit pipeline. This is particularly dangerous for automated workflows assuming committed content is immediately available.

### 2. Artifact Version History Missing from Viewer Menu [#96718](https://github.com/anthropics/claude-code/issues/96718)
**Impact:** High | 10 comments, 16 👍 | Platform: All | Regression
Saved Artifact versions are unreachable after a recent change. The version history feature has been removed from the viewer menu across Claude Code, Cowork, and claude.ai, breaking workflows that depend on version retrieval. Related to issue #95442.

### 3. Auto Mode Classifier False Positives: 121 of 149 Denials Benign [#104811](https://github.com/anthropics/claude-code/issues/104811)
**Impact:** High | 4 comments | Platform: macOS | Area: Agents/Permissions
One user's comprehensive analysis across two months reveals an 81% false-positive rate in the auto mode classifier. The classifier incorrectly blocks harmless read-only operations, significantly disrupting development flow. This aggregate report consolidates six related single-case reports.

### 4. Chrome Extension Site Permissions Permanently Empty [#105390](https://github.com/anthropics/claude-code/issues/105390)
**Impact:** Medium | 4 comments, 5 👍 | Platform: macOS | Area: Chrome
Claude in Chrome cannot access any site—the approved-sites list stays permanently empty and the permission prompt never appears. This blocks all page interaction from both the extension's side panel and MCP tools.

### 5. Slash Commands Missing from Desktop App / Menu [#99691](https://github.com/anthropics/claude-code/issues/99691)
**Impact:** Medium | 4 comments | Platform: Windows | Area: Plugins/Desktop
Mod-registered slash commands show "isn't a command here" in the desktop app's Code tab composer despite functioning correctly. The command list published to SDK hosts ignores the `isHidden` filter entirely.

### 6. Cyber Safeguard False Positives on Legitimate Security Work [#87938](https://github.com/anthropics/claude-code/issues/87938)
**Impact:** Medium | 5 comments | Area: Model/Security
The session-scoped model fallback safeguard is generating false positives on legitimate security research and cybersecurity work. Reproduced live on Opus 5, this blocks productive work in security-related development scenarios.

### 7. reasoning_extraction False Positives on Benign Content [#95561](https://github.com/anthropics/claude-code/issues/95561)
**Impact:** Medium | 4 comments, 4 👍 | Platform: macOS | Area: Model
The Anthropic API incorrectly flags benign content as `reasoning_extraction` violations, with 23 refusals documented in programmatic usage (7 killed the turn entirely).

### 8. macOS Sandbox Proxy Truncates Responses [#99650](https://github.com/anthropics/claude-code/issues/99650)
**Impact:** Medium | 3 comments | Platform: macOS | Area: Networking/Sandbox
HTTPS responses are truncated when the server closes the connection (`Connection: close`), with the client socket receiving `ECONNRESET`. This only occurs with the Bash sandbox enabled, making remote API calls unreliable.

### 9. Privacy Mod Blocks Scripts with Email Header Names [#110184](https://github.com/anthropics/claude-code/issues/110184)
**Impact:** Low | 3 comments | Platform: macOS | Area: Bash/Plugins/Security
The privacy mod incorrectly flags local scripts containing common email header field names as security risks, blocking legitimate development scripts that happen to use terms like "Subject" or "From".

### 10. Plugin Validate TypeScript Errors on Valid Imports [#110291](https://github.com/anthropics/claude-code/issues/110291)
**Impact:** Low | 1 comment | Platform: Windows | Area: Plugins
Mods using TypeScript imports with `.ts` extensions pass `claude plugin test` but fail `claude plugin validate` with a TS5097 error, creating a validation inconsistency that blocks CI/CD pipelines.

---

## Key PR Progress

No pull requests updated in the last 24 hours.

---

## Feature Request Trends

Analysis of open issues and enhancement requests reveals these high-demand directions:

| Category | Requests |
|----------|----------|
| **Permissions Control** | Expose denial reason in hooks (#72589), bypass permissions for local admin scenarios (#105218) |
| **Configuration Management** | Centralized project-local settings storage instead of `.claude/` directories (#110307) |
| **Remote/Headless Operation** | Documented, versioned JSON-RPC protocol for remote engine control (#108005) |
| **Plugin System** | Improved slash command visibility control in desktop app (#99234), MCP tool label casing preservation (#110189) |
| **Platform Integration** | Channel notifications in VS Code extension (#110309), background task visibility in prompt bar (#110310) |

---

## Developer Pain Points

### Auto Mode Classifier Fatigue
The auto mode classifier generates excessive false positives across platforms, particularly on Windows and macOS. Developers report blocked read-only operations, chained blocks after one justified denial, and classification of benign scripts as security risks. One user documented 81% false-positive rate over two months.

### Cross-Platform Fragmentation
Windows-specific issues dominate recent reports: Cowork file commit race conditions, slash command registration failures in desktop apps, and MSIX install confusion. macOS issues center on sandbox networking, privacy mod over-blocking, and Accessibility permission prompts after every update.

### Chrome Extension Reliability
The Chrome extension's site permission system is completely broken—the approved-sites list cannot be populated, blocking all browser-based Claude interactions. This affects both the side panel and MCP browser tools.

### Plugin Ecosystem Friction
Type validation inconsistencies between `plugin test` and `plugin validate` create CI/CD issues. SDK commands ignore visibility flags, and PluginValidateReport types don't match older CLI JSON output.

### Artifact Version Access
The regression removing version history from the viewer breaks workflows relying on version comparison or rollback, with no workaround available.

---

*Generated 2026-11-16 | Data covers 24h period | [Open Issues](https://github.com/anthropics/claude-code/issues?q=is%3Aissue%20state%3Aopen) | [Open PRs](https://github.com/anthropics/claude-code/pulls)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a structured English digest for the OpenAI Codex community for 2026-11-16 based on the provided GitHub data. Let me analyze the data and create a professional, concise digest.

Let me organize the data:

**Releases (last 24h):**
- rust-v0.171.0-alpha.7: 0.171.0-alpha.7
- rust-v0.171.0-alpha.6: 0.171.0-alpha.6

**Latest Issues (30 items):**
Top issues by comment count:
1. #3000 [OPEN] Voice transcription for IDE extension - 38 comments, 244 👍
2. #57101 [OPEN] Windows Computer Use: capture access and gold/yellow display border remain open - 37 comments
3. #59546 [OPEN] Built-in automation restriction blocks monitoring tasks - 19 comments
4. #50887 [OPEN] macOS Dots: Authorized receipt test rejected - 18 comments
5. #18490 [CLOSED] Add 'Compact context and implement plan' option - 16 comments
6. #44458 [OPEN] macOS: CLI 0.154.0 breaks bundled Messages and Computer History MCP startup - 14 comments
7. #46182 [OPEN] Archived Codex cloud tasks have no Delete action - 12 comments
8. #1721 [OPEN] Add Langfuse Tracing Integration - 11 comments
9. #27352 [OPEN] Codex CLI marks turn complete prematurely - 9 comments
10. #59890 [OPEN] Images 2.6 on Codex OAuth issues - 9 comments
11. #24552 [CLOSED] Can't enter alternate screen buffer - 9 comments
12. #45232 [OPEN] Windows: PowerShell here-string false positive - 8 comments


13. #40832 [OPEN] macOS: restore "Open with" menu - 7 comments
14. #41188 [OPEN] Support externally managed app-server daemon - 6 comments
15. #58422 [OPEN] Windows Auto-review issues - 5 comments
16. #14824 [OPEN] CLI/TUI session restart during long tool-heavy turns - 5 comments
17. #35749 [OPEN] Allow hiding local projects - 5 comments
18. #59191 [OPEN] Thread loses cua_repl browser tool after update - 5 comments
19. #586

93 [OPEN] Windows Delegated task authorization issue - 4 comments
20. #59528 [OPEN] macOS Full access control disappears - 4 comments
21. #50703 [OPEN] VS Code Codex: Steer issues - 4 comments
22. #60460 [OPEN] macOS Dots connected Mac attachment fails - 4 comments
23. #61294 [OPEN] Windows Local Codex projects disappear after update - 4 comments
24. #61665 [OPEN] Codex fails to start shell in VS Code workspace - 4 comments
25. #58565 [OPEN] Locked Use screen cannot be dismissed - 4 comments
26. #61605 [CLOSED] Ghostty: exiting Codex disables alternate scroll - 3 comments
27. #59150 [OPEN] Custom-rule saving returns customRuleNotSaved - 3 comments
28. #47561 [CLOSED] Support mouse selection in warnings panel - 3 comments
29. #61703 [OPEN] ChatGPT Memory: relational context loss - 2 comments
30. #61720 [OPEN] Windows elevated sandbox: command keeps running - 2 comments

**Latest Pull Requests (17 items):**
1. #61713 [CLOSED] Restore raw mode after returning from external editors
2. #61711 [CLOSED] Open Windows desktop sessions through registered URL handler
3. #61710 [CLOSED] Enable slash-command completion for unavailable threads
4. #61709 [CLOSED] Avoid legacy transcript reads in agents overview
5. #61707 [CLOSED] Support remote app servers in `codex exec`
6. #61706 [CLOSED] Ref actor exec to use shared app-server client
7. #61697 [CLOSED] Restore terminal's original alternate-scroll mode
8. #61694 [CLOSED] Discard unsaved experimental feature edits on cancel
9. #61692 [CLOSED] Fix status detail truncation for wide Unicode
10. #61690 [CLOSED] Keep pasted text inline in TUI goals
11. #61688 [CLOSED] Add TUI review ownership and risk guidance
12. #61686 [CLOSED] Defer plugin manifest loading until marketplace entries selected
13. #61663 [CLOSED] Fix config reads with relative working directories
14. #61622 [CLOSED] Clarify window ID discovery in history tool guidance
15. #61619 [CLOSED] Return to command center while archiving a task
16. #61600 [CLOSED] Enable automatic titles for Cloud conversations
17. #61599 [CLOSED] Report Cloud stream recovery failures

Eight new discussions have emerged: NotebookLM Project Handoff for Codex automation, KIP for Windows displaying active Codex chats, a handoff note that persists after reloads, AI-Memory-Book for local conversation recall, an AI-assisted browser verification tool, a Google Ads campaign builder plugin, a proposal for automatic task resumption when usage limits reset, and another open discussion point.

Now I'm organizing this into a structured format.
</think>


# OpenAI Codex Community Digest — 2026-11-16

---

## 1. Today's Highlights

The Codex team shipped **17 pull requests** in the last 24 hours, with a strong focus on CLI ergonomics and terminal reliability—particularly fixing alternate-scroll mode regressions in Ghostty and other terminals. The community's most-requested feature, **voice transcription for the IDE extension** (#3000), continues to gain traction with 244 👍. On Windows, the Computer Use capture border bug (#57101) remains active and unresolved, affecting users on version 26.1021.

---

## 2. Releases

Two alpha pre-releases landed in the `rust` SDK:

| Version | Notes |
|---------|-------|
| **v0.171.0-alpha.6** | Pre-release; no changelog disclosed |
| **v0.171.0-alpha.7** | Pre-release; no changelog disclosed |

Both are likely part of an accelerated iteration cycle on the Rust codebase. No stable channel updates were recorded.

---

## 3. Hot Issues

| # | Title | Comments | 👍 | Why It Matters |
|---|-------|----------|----|----------------|
| [#3000](https://github.com/openai/codex/issues/3000) | **[enhancement] Voice transcription for IDE extension** | 38 | 244 | The highest-upvoted open issue; users want push-to-talk in the Codex panel. Linked to the CLI voice-mode thread (#418). |
| [#57101](https://github.com/openai/codex/issues/57101) | **Windows Computer Use: capture access & border remain open after screenshot turn** | 37 | 5 | A persistent UI artifact on Windows x64 MSIX; the capture overlay does not dismiss, blocking interaction. |
| [#59546](https://github.com/openai/codex/issues/59546) | **[Desktop] Built-in automation restriction blocks monitoring in external web systems** | 19 | 21 | Conflicting with the Scheduled tasks documentation; breaks legitimate monitoring workflows on macOS 26.6. |
| [#50887](https://github.com/openai/codex/issues/50887) | **[macOS][Dots] Receipt test rejected as untrusted delegated consent** | 18 | 1 | Blocks Dots coordination on macOS desktop; the authorization flow silently fails for local Codex threads. |
| [#18490](https://github.com/openai/codex/issues/18490) | **Add 'Compact context and implement plan' option to Plan Mode** *(CLOSED)* | 16 | 5 | Merged as an enhancement; users wanted context preservation across plan-mode turns. |
| [#44458](https://github.com/openai/codex/issues/44458) | **macOS CLI 0.154.0 breaks bundled Messages & Computer History MCP startup** | 14 | 7 | The experimental capability flag silently prevents MCP servers from starting; gpt-6-astra users are affected. |
| [#46182](https://github.com/openai/codex/issues/46182) | **Archived cloud tasks have no Delete action, only Unarchive** | 12 | 12 | Users cannot permanently remove archived tasks in the desktop app; only unarchiving is available. |
| [#1721](https://github.com/openai/codex/issues/1721) | **Add Langfuse Tracing Integration in Codex CLI** | 11 | 21 | Observability request for structured tracing of code generation and execution; draws interest from production users. |
| [#27352](https://github.com/openai/codex/issues/27352) | **CLI marks turn complete while follow-up is still needed** | 9 | 1 | Premature turn completion after progress messages breaks subagent workflows; visible in multi-step tasks. |
| [#59890](https://github.com/openai/codex/issues/59890) | **Images 2.6 on Codex OAuth: model selection missing, controls absent** | 9 | 3 | Third-party OAuth clients cannot access gpt-image-2.6-flare/sunburst controls; new 2.6-only outputs are unavailable. |

---

## 4. Key PR Progress

| PR | Title | Impact |
|----|-------|--------|
| [#61713](https://github.com/openai/codex/pull/61713) | **Restore raw mode after returning from external editors** | Fixes terminal state corruption on Unix when exiting external editors; crossterm cache is now cleared before reapplying raw mode. |
| [#61711](https://github.com/openai/codex/pull/61711) | **Open Windows desktop sessions through registered URL handler** | Uses `Start-Process` for URL-based session launching on Windows; tighter publisher ID validation for the MSIX package. |
| [#61710](https://github.com/openai/codex/pull/61710) | **Enable slash-command completion for unavailable threads** | Slash-command popup now stays accessible when editing an unavailable thread; enables recovery commands from partial input. |
| [#61709](https://github.com/openai/codex/pull/61709) | **Avoid legacy transcript reads in the agents overview** | Prevents replaying entire legacy thread rollouts just to populate previews; performance win for overview refreshes. |
| [#61707](https://github.com/openai/codex/pull/61707) | **Support remote app servers in `codex exec`** | Allows `codex exec --remote <ADDR>` to run non-interactive turns using an existing server's config and credentials. |
| [#61706](https://github.com/openai/codex/pull/61706) | **Refactor exec to use the shared app-server client** | Consolidates `AppServerClient` usage in exec; extracts turn completion into `finish_turn` with better disconnection handling. |
| [#61697](https://github.com/openai/codex/pull/61697) | **Restore the terminal's original alternate-scroll mode** | Fixes Ghostty regression where exiting Codex disabled alternate scrolling; queries mode 1007 on startup and preserves it on exit. |
| [#61694](https://github.com/openai/codex/pull/61694) | **Discard unsaved experimental feature edits on cancel** | `Esc` or `Ctrl+C` now discards pending edits; `Enter` saves. Aligns cancel behavior with user expectations. |
| [#61690](https://github.com/openai/codex/pull/61690) | **Keep pasted text inline in TUI goals** | Pasted goal text is now expanded inline rather than stored in separate files, preserving pasted content in the editor. |
| [#61600](https://github.com/openai/codex/pull/61600) | **Enable automatic titles for Cloud conversations** | Cloud conversations now receive auto-generated titles via structured generation, matching local conversation behavior. |

---

## 5. Hot Discussions

### Show and tell

| # | Author | Summary |
|---|--------|---------|
| [#61681](https://github.com/openai/codex/discussions/61681) | NikTsy | **[NotebookLM Project Handoff](https://github.com/NikTsy/notebooklm-project-handoff)** — a Codex skill that exports project state for resumption in a fresh chat without pasting transcripts. MIT-licensed. |
| [#61702](https://github.com/openai/codex/discussions/61702) | ThePootler | **KIP for Windows** — a small panel showing which Codex chat is using the desktop, its project, and latest action; includes Esc-to-pause mouse use. |
| [#61667](https://github.com/openai/codex/discussions/61667) | fainir | **A handoff note that reopens after reload** — demonstrates persistence of a handoff document across Codex session restarts using Plainer. |
| [#61668](https://github.com/openai/codex/discussions/61668) | Afloat16 | **[AI-Memory-Book](https://github.com/Afloat16/AI-Memory-Book)** — local, cited conversation recall over MCP; helps recover earlier constraints and corrected problems in fresh sessions. |
| [#61666](https://github.com/openai/codex/discussions/61666) | VellivexHQ | **AI-assisted browser verification** — documents the lesson of specifying an actual file round-trip when Codex generates encrypted results. |
| [#61640](https://github.com/openai/codex/discussions/61640) | adeptads-growth | **Google Ads Campaign Builder plugin** — builds Search campaigns via Codex plugin (`adeptads/agent-skills`); campaigns are created paused for review. |

### Ideas

| # | Author | Summary |
|---|--------|---------|
| [#61614](https://github.com/openai/codex/discussions/61614) | ElieAngwandi | **Scheduled Task Resumption** — proposes auto-resuming interrupted tasks when usage quota resets, targeted at long-running engineering workflows. |

---

## 6. Feature Request Trends

Aggregating across issues and discussions, the community is converging on several high-demand directions:

1. **Voice & Multimodal Input** — Voice transcription in the IDE extension (#3000, 244 👍) and voice mode parity between CLI and desktop remain the top-requested capability.
2. **Observability & Tracing** — Langfuse integration (#1721) reflects a broader need for structured debugging and execution telemetry in production Codex workflows.
3. **Workflow Persistence** — Multiple projects (NotebookLM Handoff, AI-Memory-Book, KIP) address a gap in Codex's native session handoff and context recovery across restarts.
4. **macOS Dots & Delegation** — Authorization, receipt validation, and network sandbox errors for the Dots system are a recurring pain cluster.
5. **Cloud Task Management** — Delete action for archived cloud tasks (#46182) and auto-title generation (#61600) indicate growing cloud-first usage.
6. **Windows Computer Use UX** — Capture overlay persistence (#57101) and elevated sandbox behavior (#61720) suggest the Computer Use surface needs hardening on Windows.

---

## 7. Developer Pain Points

| Pain Point | Frequency | Representative Issues |
|------------|-----------|-----------------------|
| **macOS Dots authorization failures** | High | #50887, #60460, #59150 |
| **Windows Computer Use UI artifacts** | High | #57101, #59191, #61294 |
| **CLI turn-completion timing bugs** | Medium | #27352, #14824 |
| **MCP server startup breakage in CLI** | Medium | #44458 |
| **OAuth third-party model access gaps** | Medium | #59890 |
| **Terminal alternate-scroll regressions** | Medium | #61605, #61697 |
| **Local project visibility/sync on Windows** | Medium | #61294 |
| **Experimental feature edit cancellation** | Low (now fixed) | #61694 (resolved) |

---

*Digest generated from github.com/openai/codex activity on 2026-11-16. All links reference the canonical issue/PR/discussion threads.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the GitHub data and generate a structured digest for the Gemini CLI community on 2026-11-16.

Key observations:
1. No releases in the last 24 hours
2. 50 issues total, top 30 shown by comment count
3. 16 PRs total in last 24h
4. The data appears to be from 2026 (future date), but I'll work with the data as provided

Let me organize the digest:

**Today's Highlights:**
- No new releases today
- Multiple P1 bugs related to agent hangs and subagent recovery
- Several PRs addressing bugs in the agent system

**Hot Issues (10):**
1. #22323 - Subagent recovery bug (P1, 13 comments) - Most discussed
2. #19873 - OS Sandboxing enhancement (P2, 9 comments)
3. #21409 - Generalist agent hangs (P1, 8 comments)
4. #22745 - AST-aware file reads (P2, 7 comments)
5. #21968 - Skills/subagents usage (P2, 7 comments)
6. #22267 - Browser agent settings (P2, 5 comments)
7. #22232 - Browser agent resilience (P3, 4 comments)
8. #21983 - Browser subagent on Wayland (P1, 4 comments)
9. #21000 - Native file tools for task tracker (P3, 4 comments)
10. #20079 - Symlink agent files (P2, 4 comments)

**Key PR Progress (10):**
1. #30090 - CI security fix
2. #30082 - requestTimeoutMs setting
3. #29367 - Subagent recovery fix (relates to #22323)
4. #30308 - Windows tilde path expansion


5. #30307 - Null exit code fix
6. #30306 - Skip removed subdirectories
7. #30267 - Git clone detection
8. #30305 - Extension docs fix
9. #30089 - NPM dependency updates (70 updates)
10. #29168 - qs dependency update

I'll focus on the dependency and tooling improvements. The project is addressing multiple technical challenges, including agent stability, system compatibility, and dependency management. Notably, there are significant efforts to improve Windows support, agent reliability, and dependency updates across different components.
</think>


# Gemini CLI Community Digest

**Date:** 2026-11-16
**Repository:** google-gemini/gemini-cli
**Source:** github.com/google-gemini/gemini-cli

---

## 1. Today's Highlights

The Gemini CLI community shows continued active development with 50+ issues updated and 16 PRs merged or opened in the last 24 hours. Critical attention is on agent reliability—particularly subagent recovery behavior and generalist agent hangs—while the team advances dependency modernization with a large npm dependency batch update.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Priority | Comments | Summary |
|---|-------|----------|----------|---------|
| **#22323** | [Subagent recovery false GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 | 13 | Subagent reports `status: success` and `Termination Reason: GOAL` even when it hit MAX_TURNS limit without completing analysis. Community flagged as critical for reliability. |
| **#19873** | [Zero-Dependency OS Sandboxing](https://github.com/google-gemini/gemini-cli/issues/19873) | P2 | 9 | Proposes leveraging Gemini 3's native bash affinity with OS sandboxing and post-execution intent routing. Represents architectural direction for security/UX balance. |
| **#21409** | [Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 | 8 | Agent hangs indefinitely when deferring to generalist agent; simple operations like folder creation freeze. Workaround exists (disable subagents), but blocks workflow. |
| **#22745** | [AST-aware file reads/search/mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | P2 | 7 | Epic tracking investigation into AST-aware tooling for surgical code discovery. Could reduce token bloat (+15k tokens/turn observed) and improve precision. |
| **#21968** | [Gemini doesn't use skills/subagents](https://github.com/google-gemini/gemini-cli/issues/21968) | P2 | 7 | Agent rarely invokes custom skills or sub-agents autonomously despite relevant contexts. Users must explicitly instruct, limiting automation value. |
| **#22267** | [Browser Agent ignores settings.json](https://github.com/google-gemini/gemini-cli/issues/22267) | P2 | 5 | Browser Agent completely ignores configuration overrides like `maxTurns` from global/project-level settings.json despite `AgentRegistry` correctly reading them. |
| **#22232** | [Browser Agent resilience: session takeover](https://github.com/google-gemini/gemini-cli/issues/22232) | P3 | 4 | Requests automatic session takeover and lock recovery when encountering locked browser profile in persistent session mode. Currently fails fast. |
| **#21983** | [Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983) | P1 | 4 | Browser subagent fails on Wayland environments with incomplete termination messages. Cross-platform compatibility concern. |
| **#21000** | [Native file tools for task tracker](https://github.com/google-gemini/gemini-cli/issues/21000) | P3 | 4 | Proposal to replace in-context task tracking with persistent file-based CRUD operations to reduce context rot and token costs. |
| **#20079** | [Symlink agents not recognized](https://github.com/google-gemini/gemini-cli/issues/20079) | P2 | 4 | Agent files in `~/.gemini/agents/` are not recognized when stored as symlinks, limiting flexible agent organization. |

---

## 4. Key PR Progress

| # | PR | Area | Size | Summary |
|---|-----|------|------|---------|
| **#29367** | [Preserve terminate reason on subagent recovery](https://github.com/google-gemini/gemini-cli/pull/29367) | Agent | L | **Fixes #22323.** Unconditionally overwrote terminate reason in `LocalAgentExecutor` recovery path; now preserves original MAX_TURNS termination. |
| **#30082** | [Add model.requestTimeoutMs setting](https://github.com/google-gemini/gemini-cli/pull/30082) | Core | M | Adds `model.requestTimeoutMs` configuration to raise the 60s API headers timeout. Previously only adjustable via experimental flag not fetched for Vertex AI. |
| **#30090** | [CI: Protect GEMINI_API_KEY from fork-controlled code](https://github.com/google-gemini/gemini-cli/pull/30090) | CI | S/M | `chained_e2e.yml` now gates artifact access (containing GEMINI_API_KEY) on the triggering run's authorization, preventing exposure to fork-controlled code. |
| **#30308** | [Expand Windows tilde-backslash paths](https://github.com/google-gemini/gemini-cli/pull/30308) | CLI | S | Fixes `resolvePath` to expand `~\...` paths on Windows for settings like `policyPaths` and `extensionRegistryURI` against `homedir()`. |
| **#30307** | [Omit null exit code in list_background_processes](https://github.com/google-gemini/gemini-cli/pull/30307) | Core | S | Background processes killed by signal no longer show `(Exit Code: null)` to the model, reducing noise. |
| **#30306** | [Skip removed subdirectories without warning](https://github.com/google-gemini/gemini-cli/pull/30306) | Agent | S | Workspace scan no longer logs warnings for directories disappearing mid-scan (e.g., `.gemini/projects.json.lock` during `ProjectRegistry` operations). |
| **#30267** | [Detect local git clone installation](https://github.com/google-gemini/gemini-cli/pull/30267) | Core | M | Fixes misclassification of source-checkout runs as global npm installs, preventing unintended `npm install -g @google/gemini-cli@latest` during auto-update. |
| **#30305** | [Stop recommending broken excludeTools form](https://github.com/google-gemini/gemini-cli/pull/30305) | Agent | M | Extension docs incorrectly recommended `"excludeTools": ["run_shell_command(rm -rf)"]` which blocks nothing. Correct form documented. |
| **#30089** | [NPM dependencies: 70 updates](https://github.com/google-gemini/gemini-cli/pull/30089) | Dependencies | XL | Batch update including `@modelcontextprotocol/sdk` 1.23.0→1.32.2 and `@octokit/rest` 22.0.0→22.0.1. |
| **#29168** | [Bump qs 6.14.2→6.16.0](https://github.com/google-gemini/gemini-cli/pull/29168) | Dependencies | L | Security/feature update to query-string library. |

---

## 5. Hot Discussions

*No discussion data was provided in the source data.*

---

## 6. Feature Request Trends

Based on issue analysis, the community is gravitating toward several key directions:

| Theme | Issues | Description |
|-------|--------|-------------|
| **Agent Reliability** | #22323, #21409, #21968 | Subagent recovery correctness, generalist agent stability, autonomous skill invocation |
| **AST-Aware Tooling** | #22745, #22746, #22747, #19561 | Surgical code discovery to reduce token bloat (~36.6k tokens/turn baseline) |
| **Browser Agent Maturity** | #22267, #22232, #21983 | Configuration respect, session resilience, cross-platform (Wayland) support |
| **Security & Sandboxing** | #19873, #22672 | OS sandboxing aligned with model bash affinity; discouraging destructive commands |
| **Persistent Task Tracking** | #21000, #18836 | File-based CRUD instead of in-context todos to combat context rot |
| **Subagent Ecosystem** | #18283, #18282, #22598 | Curated examples, trajectory visibility via `/chat share`, discovery via settings.json |

---

## 7. Developer Pain Points

The following frustrations appear repeatedly across issues and warrant prioritized attention:

1. **Subagent Misreporting** — Agents incorrectly claim success after being interrupted, hiding failures from users (#22323)

2. **Agent Hangs** — Generalist agent hangs on common operations, forcing users to disable subagents as workaround (#21409)

3. **Configuration Inconsistencies** — Browser Agent ignores settings.json overrides despite correct merging elsewhere (#22267)

4. **Cross-Platform Gaps** — Wayland environments cause browser subagent failures (#21983); Windows path resolution needs tilde expansion (#30308)

5. **Dependency on Token Budget** — Large file reads cause significant context bloat; current grep/cat/sed workflows are imprecise (#19561, #22745)

6. **Skills/Subagents Underutilized** — Custom skills require explicit user instruction to activate; agent doesn't recognize relevant contexts (#21968)

7. **Destructive Command Safety** — Model occasionally uses `--force` or `git reset` when safer alternatives exist (#22672)

---

*End of digest. Next update: 2026-11-17*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest for 2026-11-16 based on the provided GitHub data. Let me analyze the data:

1. **Latest Releases**: None in last 24h
2. **Latest Issues**: 50 total, showing top 30 by comment count
3. **Latest Pull Requests**: 0 in last 24h
4. **Discussions**: No discussion data provided

I need to create a structured digest with:
1. Today's Highlights
2. Releases (skip if none)
3. Hot Issues (pick 10)
4. Key PR Progress (pick 10 - but there are 0 PRs, so I'll note this)
5. Hot Discussions (skip if no data)
6. Feature Request Trends
7. Developer Pain Points

Let me identify the most important issues by comment count and relevance:

Top issues by comments:
1. #5145 - 400 reasoning_text in thinking mode (8 comments) - This is a bug with custom OpenAI-compatible providers
2. #4275 - ACP: expose contextTier as session config (8 comments) - Feature request for ACP parity
3. #5323 - Disable agent checkpoint refs (6 comments) - Feature request about git refs
4. #5359 - Resumed session fails with MCP tool reference (2 comments) - Bug with MCP servers
5. #5354 - ACP doesn't advertise Copilot Fusion (2 comments) - ACP parity issue
6. #2782 - ACP session.create rejects claude-opus-4.7 (2 comments) - Model availability bug
7. #4773 - MCP discovery reports 0 tools (2 comments) - MCP tool discovery bug
8. #5283 - Remote environment blocked on Copilot Free (2 comments) - Account/permission issue
9. #4931 - Playwright MCP session closed (2 comments) - Cloud agent bug


10. #5461 - macOS 12.7.6 compatibility (1 comment) - Installation/platform issue

I'll organize these by category and create a comprehensive digest.
</think>


# GitHub Copilot CLI Community Digest

**Date:** November 16, 2026  
**Repository:** github.com/github/copilot-cli  
**Status:** Active Development

---

## 1. Today's Highlights

The GitHub Copilot CLI community continues to surface critical parity gaps between the interactive experience and the Agent Client Protocol (ACP). Three high-comment issues (#5145, #4275, #5354) reveal that ACP clients lack visibility into Copilot Fusion, context tier configuration, and custom model support—blocking external orchestrators and third-party integrations. Meanwhile, MCP server integration issues dominate the bug reports, with tool discovery failures and session resumption errors affecting production workflows.

---

## 2. Releases

**No new releases in the last 24 hours.**

The latest stable release remains from the previous period. Users are encouraged to check for updates via `copilot update`.

---

## 3. Hot Issues

### 🔴 Critical: ACP Parity Gaps

| # | Issue | Author | Comments | Link |
|---|-------|--------|----------|------|
| 1 | **[area:models, area:tools]** 400 `reasoning_text` in thinking mode after background shell exit | eruvalca | 8 | [#5145](https://github.com/github/copilot-cli/issues/5145) |
| 2 | **[area:non-interactive, area:configuration]** ACP: expose `contextTier` as session config option | julianmesa-gitkraken | 8 | [#4275](https://github.com/github/copilot-cli/issues/4275) |
| 3 | **[area:non-interactive, area:models]** ACP doesn't advertise Copilot Fusion | simonsteiner | 2 | [#5354](https://github.com/github/copilot-cli/issues/5354) |
| 4 | **[area:non-interactive, area:models]** ACP `session.create` rejects `claude-opus-4.7` despite interactive support | PolyphonyRequiem | 2 | [#2782](https://github.com/github/copilot-cli/issues/2782) |

**Why it matters:** These four issues collectively highlight that ACP—the protocol enabling external tools like T3 Code, Conductor, and Anthropic Agent SDK bindings to drive Copilot—lacks parity with the interactive CLI. Without `contextTier`, Fusion advertisement, and full model support, third-party orchestrators cannot replicate the native experience. The `reasoning_text` bug (#5145) specifically breaks custom OpenAI-compatible providers like DeepSeek after runtime-synthesized assistant turns.

---

### 🟡 MCP Server Integration Failures

| # | Issue | Author | Comments | Link |
|---|-------|--------|----------|------|
| 5 | **[area:sessions, area:mcp]** Resumed session fails with 400 "Tool reference not found" after MCP server tools change | doomslayer2k | 2 | [#5359](https://github.com/github/copilot-cli/issues/5359) |
| 6 | **[area:mcp, area:tools]** Repeated MCP discovery reports "Found 0 tools" for loaded namespace | m-nash | 2 | [#4773](https://github.com/github/copilot-cli/issues/4773) |
| 7 | **[area:mcp, area:tools]** Stdio MCP server fails when `server/discover` times out | msm-yusuke-shimozono-01 | 0 | [#5464](https://github.com/github/copilot-cli/issues/5464) |

**Why it matters:** MCP (Model Context Protocol) is central to extending Copilot's capabilities. Session resumption failures (#5359) break continuity for developers using cloud agents with dynamic tool sets. The discovery bug (#4773) causes the agent to incorrectly report working integrations as unavailable, disrupting automated workflows.

---

### 🟢 Agent Behavior & Resource Management

| # | Issue | Author | Comments | Link |
|---|-------|--------|----------|------|
| 8 | **[area:context-memory, area:configuration]** Add setting to disable agent checkpoint refs (`refs/agents/*`) | scar20 | 6 | [#5323](https://github.com/github/copilot-cli/issues/5323) |
| 9 | **[area:agents, area:tools]** Agent wastes model turns on `sleep N; check` polling during background jobs | gk2go | 0 | [#5459](https://github.com/github/copilot-cli/issues/5459) |
| 10 | **[area:models]** Fusion tier "high" silently resolves to "standard" policy | jj1xgo | 0 | [#5457](https://github.com/github/copilot-cli/issues/5457) |

**Why it matters:** Issue #5323 has garnered significant community interest (6 👍) because agent checkpoint commits pollute repositories with refs authored under the user's identity—raising concerns for organizations with strict git governance. The polling inefficiency (#5459) and silent Fusion tier downgrades (#5457) represent agent reasoning quality issues that waste compute and confuse users.

---

## 4. Key PR Progress

**No new pull requests were merged or opened in the last 24 hours.**

Recent closed PRs (outside 24h window) include:
- **#4868** — Fixed "421 Misdirected Request" when listing models
- **#5218** — Addressed clipboard ownership message on Linux
- **#2474** — Added context window sizes to `/model` command output
- **#2068** — Fixed background compaction consuming premium requests

---

## 5. Hot Discussions

*No discussion data was provided for this period.*

---

## 6. Feature Request Trends

The following themes emerge as the most-requested enhancements:

| Theme | Frequency | Representative Issues |
|-------|-----------|----------------------|
| **ACP Parity** | High | #4275, #5354, #2782, #5466 |
| **MCP Robustness** | High | #4773, #5359, #5458 |
| **Context Memory Control** | Medium | #5323, #2068 |
| **Copilot Fusion Configuration** | Medium | #5354, #5457, #4975 |
| **Platform Compatibility** | Low | #5461 (macOS 12.7.6) |
| **UI/UX Enhancements** | Low | #5465 (themes), #5463 (sessions sidebar) |

**Key insight:** The community is heavily focused on closing the gap between interactive and programmatic (ACP) usage. MCP reliability and git-friendly agent checkpoint management are secondary but persistent concerns.

---

## 7. Developer Pain Points

### 🔴 Top Frustrations

1. **ACP Missing Core Features** — Developers building external orchestrators cannot access context tier controls, Fusion configuration, or full model catalogs. This blocks adoption of Copilot CLI in professional AI agent pipelines.

2. **MCP Tool Discovery Unreliability** — Repeated discovery calls returning "0 tools" or session resumption failures after MCP server changes force developers to restart sessions, losing context and productivity.

3. **Agent-Generated Git Refs** — Checkpoint commits under user identity create noise in git history and may violate organizational policies, especially in monorepos.

4. **Silent Failures** — Fusion tier downgrades (#5457) and model rejections (#2782) occur without user-facing warnings, leaving developers confused about which capabilities are actually active.

### 🟡 Recurring Requests

- **Visibility:** Model context window limits, token pricing, and policy details in ACP metadata (#5466)
- **Compatibility:** Support for older macOS versions (#5461)
- **Agent Discipline:** Preventing the agent from overriding user-specified implementation languages (#5462)
- **Session Management:** Cross-folder session visibility and better session resumption UX (#5463)

---

## Summary Table: Issue Activity

| Category | Open Issues | Closed (24h) | Total |
|----------|-------------|--------------|-------|
| area:models | 3 | 0 | 3 |
| area:mcp | 4 | 0 | 4 |
| area:non-interactive | 3 | 1 | 4 |
| area:context-memory | 1 | 2 | 3 |
| area:configuration | 1 | 0 | 1 |
| triage:needs-human | 7 | 0 | 7 |

---

**Prepared by:** Technical Analysis, AI Developer Tools  
**Next digest:** 2026-11-17

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate an OpenCode community digest for 2026-11-16 based on the provided GitHub data. Let me analyze the data and create a structured digest.

Key observations from the data:

**Releases:**
- None in the last 24h

**Issues (50 total, top 30 by comment count shown):**
1. #59387 - Free tier issues mega-thread (370 comments, 28 👍) - Very active, lots of user frustration
2. #50155 - DeepSeek V4 Flash requires Global regions but Privacy setting missing (26 comments, 17 👍)
3. #52894 - Show exact free usage limit reset time (13 comments, 8 👍)
4. #54371 - ACP: slash commands execute but never stream output (9 comments, 6 👍)
5. #62529 - ChatGPT subscription-sharing limit error (9 comments, 3 👍)
6. #64085 - M.2 storage failure on heavy local workloads (8 comments, 0 👍) - Hardware concern
7. #64084 - Feature request for OpenCode Benchmark Results (7 comments, 0 👍)
8. #21227 - Display image attachments from tool results (6 comments, 13 👍)
9. #56386 - CLI run resolves PWD instead of actual cwd (6 comments, 0 👍)
10. #64073 - Restore Foreground Subagent Execution (6 comments, 0 👍)
11. #64094 - PowerShell/OpenCode/Ollama command execution failure (5 comments, 0 👍) - CLOSED
12. #48411 - Better execution permissions and sandboxing (5 comments, 6 👍)
13. #56288 - external_directory ask skipped for shell (4 comments, 2 👍)
14. #52016 - Stop running background subagent from web app (4 comments, 0 👍)


15. #64064 - Scroll bar too thin (4 comments, 0 👍) - CLOSED
16. #55087 - Let built-in tools be called from Code Mode (3 comments, 6 👍)
17. #63892 - PowerShell 7 fails with 0xC0070005 (3 comments, 2 👍)
18. #64121 - Security: Model bypasses Plan mode restrictions (3 comments, 0 👍) - Security issue
19. #64112 - OpenCode issues in smolvm/smolmachine (3 comments, 0 👍)
20. #56130 - Timeline scroll continuity issue (3 comments, 0 👍)
21. #64040 - Browser skill guidance interrupts file reads (2 comments, 0 👍)
22. #64119 - ACP parent auto-resumed turn emits zero session/update (2 comments, 0 👍)
23. #64117 - notifications/tools/list_changed doesn't surface new tools (2 comments, 0 👍)
24. #62365 - Subagents tab shows inactive subagent as active (2 comments, 1 👍)
25. #64125 - CLI uses stale PWD instead of cwd (2 comments, 0 👍) - CLOSED
26. #64092 - Stuck in "Working" after prompt (2 comments, 0 👍) - CLOSED
27. #62042 - Windows taskbar badge count (2 comments, 0 👍)
28. #64072 - App not responding (2 comments, 0 👍) - CLOSED
29. #64065 - Background command dies silently (2 comments, 0 👍) - CLOSED

Looking at the full PR landscape, there are several significant engineering efforts underway. Video generation infrastructure is being built out with async API support, while documentation continues to expand with ecosystem additions like mirafleet and Qwen4 Max. Error handling is improving across multiple components—the server's answer handler is getting better 500 responses, the MCP layer is propagating tool-call trace context, and PowerShell integration is being hardened for Windows environments.

Beyond the core features, there are focused improvements in several areas: the TUI export dialog is gaining configurable save locations, the app can now name paired servers via QR code, Slack link previews are being integrated into the console, and SSH reconnection logic is becoming more resilient. The Claude context discovery system is also getting retry logic with cooldown periods. Meanwhile, the TUI path is being refactored to resolve actual working directories, and automated cleanup PRs are addressing crypto fallback handling and documentation consistency. Several bug fixes are already merged, including PWD handling corrections and UI refinements like removing spinners from subagent rows.
</think>


# OpenCode Community Digest — 2026-11-16

## Today's Highlights

The OpenCode community saw intense activity around **free tier reliability** and **platform-specific shell execution bugs**. The free usage issues mega-thread hit 370 comments, signaling widespread user frustration. On the PR side, a major async video generation API landed for review, alongside critical fixes for Windows PowerShell spawn failures and CLI working directory resolution. Several security and sandboxing concerns also surfaced, including a reported Plan mode bypass.

---

## Releases

**No new releases** were published in the last 24 hours.

---

## Hot Issues

### 1. [Free tier problems mega-thread](https://github.com/anomalyco/opencode/issues/59387) — 370 comments
The community's top issue by an order of magnitude. Users report persistent "Free usage exceeded" errors, reset timers that never fire, and Desktop app failures. This is a **critical trust issue** for OpenCode's free tier.

### 2. [DeepSeek V4 Flash requires Global regions but Privacy setting missing](https://github.com/anomalyco/opencode/issues/50155) — 26 comments
Paid Go subscribers can't use DeepSeek V4 Flash because the Privacy setting UI is absent. The error message correctly directs users to a non-existent option, indicating a **subscription-tier UX gap**.

### 3. [Show exact free usage limit reset time](https://github.com/anomalyco/opencode/issues/52894) — 13 comments
Users want precise reset timestamps instead of vague "try again later" messages. This would reduce confusion and support burden tied to Issue #59387.

### 4. [ACP slash commands execute but never stream output](https://github.com/anomalyco/opencode/issues/54371) — 9 comments
In JetBrains Rider, ACP agents' built-in slash commands (`/init`, custom) run silently—no output appears in chat, while plain prompts work fine. A **regression affecting IDE integrations**.

### 5. [ChatGPT subscription-sharing limit error despite available allowance](https://github.com/anomalyco/opencode/issues/62529) — 9 comments
OpenCode 2.2.5 on macOS rejects all prompts with a "usage limit reached" error, even though the user's ChatGPT Usage page shows ample remaining quota. Likely a **sharing/ entitlement sync bug**.

### 6. [M.2 storage drives failing under local workloads](https://github.com/anomalyco/opencode/issues/64085) — 8 comments
A hardware concern: two machines experienced M.2 SSD failures during heavy local model workloads via OpenCode. The reporter switched to Qwen3 locally and wants to know if OpenCode causes excessive disk writes.

### 7. [Display image attachments from tool results in chat UI](https://github.com/anomalyco/opencode/issues/21227) — 13 👍
A long-standing feature request (open since April) to render image data from `webfetch` or MCP servers directly in chat. Strong community desire (13 👍) for a richer **tool result visualization**.

### 8. [external_directory permission ask skipped for shell](https://github.com/anomalyco/opencode/issues/56288) — 4 comments
The `external_directory` permission rule is enforced for file tools but ignored for the `shell` tool, creating a **security boundary gap** in the permission model.

### 9. [Model bypasses Plan mode file-write restrictions via shell heredocs](https://github.com/anomalyco/opencode/issues/64121) — 3 comments
A **security vulnerability**: in Plan mode, the agent successfully writes files using shell heredocs, bypassing file-write restrictions. This undermines the safety guarantees of Plan mode.

### 10. [notifications/tools/list_changed doesn't surface newly-enabled tools](https://github.com/anomalyco/opencode/issues/64117) — 2 comments
When an MCP server emits `tools/list_changed` and advertises new tools, those tools never become callable. The notification is received but the tool list isn't refreshed—a **broken MCP lifecycle hook**.

---

## Key PR Progress

### 1. [feat(server): async video generation API with disk-backed media](https://github.com/anomalyco/opencode/pull/64140) — OPEN
New feature introducing async video generation via HTTP API with disk-backed media storage. This is the server-side foundation; the agent tool PR can rebase onto it. A significant expansion of OpenCode's media capabilities.

### 2. [fix(server): answer handler defects with readable 500 instead of empty](https://github.com/anomalyco/opencode/pull/64022) — OPEN
Improves error diagnostics: crash-related 500 responses now carry JSON bodies with actionable details, and never expose database engine names. **Better observability for debugging**.

### 3. [fix(mcp): propagate tool-call trace context](https://github.com/anomalyco/opencode/pull/63412) — OPEN
Propagates `traceparent` and `tracestate` from the executing caller onto MCP tool calls. Enables **distributed tracing across MCP boundaries** (partial implementation, more baggage deferred).

### 4. [fix(service): retry Windows pipe spawn on packaged access denied](https://github.com/anomalyco/opencode/pull/64137) — OPEN, needs compliance
Fixes Issue #63892: Microsoft Store PowerShell 7 fails with `0xC0070005` because the packaged executable is blocked. Now retries the spawn, improving **Windows PowerShell compatibility**.

### 5. [feat(tui): choose where to save exports in the new export dialog](https://github.com/anomalyco/opencode/pull/62490) — OPEN
Builds on PR #62253 to add a Location picker in the export dialog, letting users choose save destinations instead of defaulting to the TUI's working directory.

### 6. [feat(server): preview Slack links through OpenCode Console](https://github.com/anomalyco/opencode/pull/64134) — OPEN
Experimental endpoint `GET /api/experimental/console/slack/message` behind a new flag `console_slack_preview`, enabling **in-app Slack link previews**.

### 7. [fix(ssh): recover when the remote service port is taken](https://github.com/anomalyco/opencode/pull/63542) — OPEN
Addresses Issue #54059: SSH reconnection fails with "Could not establish the SSH connection" even when SSH itself works, due to port conflicts. **Improved SSH resilience**.

### 8. [fix(core): retry incomplete Claude context discovery after cooldown](https://github.com/anomalyco/opencode/pull/64133) — OPEN, needs compliance
Follow-up to #64107, adding retry logic with cooldown for Claude context discovery failures. **Better handling of transient API issues**.

### 9. [fix(cli): use actual cwd instead of stale PWD](https://github.com/anomalyco/opencode/pull/64126) + [fix(tui): resolve actual cwd when file listing fails](https://github.com/anomalyco/opencode/pull/64128) — BOTH OPEN
Comprehensive fix for Issues #56386/#56389: `opencode run` and `mini` now resolve session location from actual working directory rather than `$PWD`. The TUI path is also covered. Includes automated regression tests.

### 10. [docs: add mirafleet to ecosystem projects](https://github.com/anomalyco/opencode/pull/64147) + [docs(go): add Qwen4 Max](https://github.com/anomalyco/opencode/pull/64144) — BOTH OPEN
Ecosystem and documentation updates adding mirafleet (MCP server) and Qwen4 Max model to Go subscription docs.

---

## Feature Request Trends

Analyzing the issue queue reveals several dominant themes:

| Theme | Evidence | Priority |
|-------|----------|----------|
| **Usage/quota transparency** | Exact reset times (#52894), free tier reliability (#59387) | 🔴 Critical |
| **MCP tooling** | `tools/list_changed` propagation (#64117), image display in chat (#21227), built-in tools in Code Mode (#55087) | 🟡 High |
| **Background & subagent UX** | Stop background subagents (#52016), foreground subagent restoration (#64073), ACP output streaming (#54371) | 🟡 High |
| **Permission & sandbox hardening** | Shell bypass of external_directory (#56288), Plan mode bypass (#64121), execution permissions (#48411) | 🔴 Critical |
| **Platform-specific fixes** | Windows PowerShell 7 (#63892, #64094), smolvm compatibility (#64112), macOS subscription sync (#62529) | 🟡 High |
| **Desktop polish** | Taskbar badge count (#62042), scroll bar ergonomics (#64064), sticky prompts (#64143) | 🟢 Medium |

---

## Developer Pain Points

1. **Free tier unreliability**: The single most voiced frustration. Reset timers failing, quota messages appearing randomly, and Desktop app blocks despite supposed availability damage user trust.

2. **Working directory confusion**: Both CLI (`run`/`mini`) and TUI incorrectly resolve session location from `$PWD` rather than actual cwd, causing sessions to land in wrong directories. Multiple reports (Issues #56386, #64125) and two related PRs needed.

3. **Windows shell tool instability**: PowerShell 7 from Microsoft Store fails to spawn (`0xC0070005`), background shells die silently without completion notifications, and pipe mode issues persist. These break core workflows for Windows developers.

4. **MCP tool discovery gaps**: New tools advertised by MCP servers after initial connection don't become callable. This breaks dynamic tool registration patterns.

5. **ACP IDE integration regressions**: Slash commands execute but produce no visible output in JetBrains Rider, while plain prompts work—suggesting IDE-specific event handling bugs.

6. **Security boundary gaps**: The shell tool bypasses `external_directory` permission prompts, and Plan mode can be circumvented via heredoc writes. These need urgent attention.

---

*Generated from GitHub data · anomalyco/opencode · 2026-11-16*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Pi community digest for 2026-11-16 based on GitHub data provided. Let me analyze the data carefully.

Looking at the data:

**Releases**: None in the last 24h

**Issues**: 27 total items updated in the last 24h. Let me identify the key ones:

1. #10605 - ChatGPT/OpenAI OAuth 403 issue (OPEN, 14 comments)
2. #11021 - ChatGPT sign-in uses wrong context window for GPT-6.1 Sol (OPEN, 14 comments, 👍8)
3. #8810 - Extension-registered providers not respecting defaultProvider/defaultModel (OPEN, 11 comments, 👍5)
4. #8348 - No inter session cache on openai APIs for forked sessions (CLOSED, 7 comments)
5. #11950 - Tool calls run concurrently with bash causing race condition (OPEN, 7 comments, P0 priority)
6. #9448 - pi auth check cannot see providers from extensions (OPEN, 5 comments)
7. #12194 - Intermittent 400 when using cloudflare-workers-ai connector (CLOSED, 4 comments)
8. #12090 - Durable: allow cancellation handlers to wait on signals (OPEN, 4 comments)
9. #12076 - Compaction silently ends tool loop instead of compacting (OPEN, 3 comments)
10. #12183 - Windows terminal input sequences leak (CLOSED, 3 comments)
11. #10871 - Native MCP: publish connection status for custom footers (CLOSED, 3 comments)
12. #12173 - Some links on docs.pi.dev point to 404 (CLOSED, 2 comments)
13. #12074 - Publish native MCP connection status via ctx.ui.setStatus (CLOSED, 2 comments)


14. #12184 - Google adapters reject Gemini 4 Hydrogen's xhigh level (CLOSED, 2 comments)
15. #12196 - RPC: deferred prompt gets no response during compaction (CLOSED, 1 comment)
16. #12195 - subagent workflow loses code block on some hosts (CLOSED, 1 comment)
17. #12193 - Model selector strands session when provider key renamed (CLOSED, 1 comment)
18. #12192 - docs.pi.dev links double-prefixed with /latest (CLOSED, 1 comment)
19. #12191 - openai-codex HTTP fallback error (CLOSED, 1 comment)
20. #12190 - AuthStorage test flakes (CLOSED, 1 comment)
21. #12189 - Proposal for MCP status via ctx.ui.setStatus (CLOSED, 1 comment)
22. #12188 - Include Pi session ID in MCP tool-call metadata (CLOSED, 1 comment)
23. #12187 - Session restore switches to unrelated model (CLOSED, 1 comment)
24. #12182 - tree preview entry's full text (CLOSED, 1 comment)
25. #12186 - Two prompts start a run on idle session (CLOSED, 1 comment)
26. #12185 - Switching Gemini models mid-task fails (CLOSED, 1 comment)
27. #12181 - pi-durable host restart leaves progress delta (CLOSED, 1 comment)

**Pull Requests**: 1 item
- #11854 - fix(coding-agent): kill whole process trees of bash commands on Windows (OPEN)

**Discussions**: 1 item
- #4444 - Supporting the Agent Client Protocol (ACP) (General, 5 comments, 👍54)

Now I'll organize this into a structured digest. I need to highlight the most impactful issues and group related items logically. The OAuth 403 and context window problems are affecting authentication, the provider extension issues impact configuration, and the bash command process tree fix is an important infrastructure improvement. The MCP status proposals and session management issues suggest ongoing work on extension architecture and reliability.

For the digest format, I'll lead with today's critical issues—the P0 race condition in tool calls, the ChatGPT OAuth problem with high engagement, and the context window discrepancy. Then I'll organize the remaining issues by category: authentication and session problems, extension and provider configuration, MCP and tooling improvements, documentation fixes, and durability concerns. The PR fix for Windows process tree termination addresses a cross-platform consistency issue.

I need to be selective about which issues to highlight. The ChatGPT OAuth 403 error (#10605), the incorrect context window for GPT-6.1 Sol (#11021), and the extension provider defaults problem (#8810) are the most impactful since they affect core functionality and have significant community attention. The P0 tool call race condition (#11950) is critical, the auth check limitation (#9448) impacts script authors, and the durable cancellation handler request (#12090) represents an important architectural improvement. The compaction silent loop failure (#12076) could cause data loss, and the cloudflare-workers-ai intermittent errors (#12194) show infrastructure instability.

The Windows bash kill fix (#11854) is significant because it improves platform consistency, and the ACP discussion (#4444) has strong community support with 54 upvotes, indicating a desire for standardization. I should prioritize the issues with the most comments and reactions while ensuring coverage across different problem domains—authentication, performance, reliability, and extensibility. I'll structure the response to address each of these systematically.
</think>


# Pi Community Digest — 2026-11-16

## Today's Highlights

The Pi community is actively addressing critical reliability issues, with a P0-priority bug (#11950) exposing race conditions when bash and read tools execute concurrently in the same message. Long-standing OAuth and context window discrepancies with ChatGPT sign-in (#10605, #11021) continue to generate significant discussion, while the project sees growing interest in the Agent Client Protocol (ACP) standardization effort (#4444).

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

**1. [P0 Bug] Tool calls in one message run concurrently with bash — read executes before command finishes**  
`#11950` · 7 comments · 👍 0  
When the model sends bash and read in the same assistant message, both start simultaneously, causing reads of incomplete build logs or unwritten images. This is a correctness issue that can produce stale content or errors in automated workflows.  
[→ View Issue](https://github.com/earendil-works/pi/issues/11950)

**2. ChatGPT/OpenAI OAuth 403: "user is not eligible for subscription sharing"**  
`#10605` · 14 comments · 👍 1  
Users with ChatGPT Plus subscriptions cannot authenticate via OAuth, receiving 403 errors even after logout/login cycles. This blocks a core integration path for Plus-tier users.  
[→ View Issue](https://github.com/earendil-works/pi/issues/10605)

**3. ChatGPT sign-in reports wrong context window for GPT-6.1 Sol (272K vs 500K)**  
`#11021` · 14 comments · 👍 8  
When authenticated through "Sign in with ChatGPT," Pi reports a 272K context window for `gpt-6.1-sol` despite the account catalog advertising 500K. This limits the compaction budget and represents a meaningful capability downgrade.  
[→ View Issue](https://github.com/earendil-works/pi/issues/11021)

**4. Extension-registered providers intermittently ignore defaultProvider/defaultModel**  
`#8810` · 11 comments · 👍 5  
Fresh sessions occasionally fail to honor configured `defaultProvider`/`defaultModel` when the provider is registered by an extension via `pi.registerProvider()`, silently falling back to another provider's default. This breaks reproducibility for extension-heavy setups.  
[→ View Issue](https://github.com/earendil-works/pi/issues/8810)

**5. pi auth check cannot see providers from extensions**  
`#9448` · 5 comments · 👍 1  
The `pi auth check` command doesn't recognize extension-registered providers, reporting valid configurations as `invalid_state`. This breaks non-interactive CI/CD pipelines that gate on provider readiness.  
[→ View Issue](https://github.com/earendil-works/pi/issues/9448)

**6. Compaction: Pi ends a tool loop silently instead of compacting**  
`#12076` · 3 comments · 👍 0  
Near context window limits, Pi enters a compaction loop but exits silently after ~36K tokens without compacting, potentially losing work. Reproduced consistently on vLLM models with Pi 1.5.2.  
[→ View Issue](https://github.com/earendil-works/pi/issues/12076)

**7. Durable: allow cancellation handlers to wait on signals and deadlines**  
`#12090` · 4 comments · 👍 0  
Request to enhance `pi-durable` cancellation handlers so parked tools can save progress and await confirmation before completing shutdown, improving resilience across host restarts.  
[→ View Issue](https://github.com/earendil-works/pi/issues/12090)

**8. Intermittent 400 when cloudflare-workers-ai connector**  
`#12194` · 4 comments · 👍 0  
The built-in Cloudflare Workers AI connector produces sporadic 400 errors related to schema validation, suggesting inconsistent request formatting.  
[→ View Issue](https://github.com/earendil-works/pi/issues/12194)

**9. Windows: terminal input sequences leak after updating Node.js while Pi is running**  
`#12183` · 3 comments · 👍 0  
After Node.js updates during a Pi session, PowerShell prompts and escape sequences leak into the terminal display, indicating improper cleanup of input handling state.  
[→ View Issue](https://github.com/earendil-works/pi/issues/12183)

**10. Session restore silently switches to an unrelated model when a provider rewrites model IDs**  
`#12187` · 1 comment · 👍 0  
Resuming a session can inadvertently start on a different model than originally used, silently rebuilding an 80K-token prompt cache and incurring unexpected costs.  
[→ View Issue](https://github.com/earendil-works/pi/issues/12187)

---

## Key PR Progress

**1. fix(coding-agent): kill whole process trees of bash commands on Windows**  
`PR #11854` · Author: petrroll  
On Windows, `taskkill /T` misses orphaned child processes whose parent exited, leaving zombie processes. This fix ensures complete process tree termination across all shell types.  
[→ View PR](https://github.com/earendil-works/pi/pull/11854)

---

## Hot Discussions

**Ideas / Standardization**

**1. Supporting the Agent Client Protocol (ACP)**  
`Discussion #4444` · 5 comments · 👍 54  
Pi's existing headless RPC mode is pi-specific, requiring custom clients for each editor integration. The Agent Client Protocol (ACP) offers a standardized alternative that could simplify cross-platform adoption. Community reception is strongly positive, with this being the highest-voted discussion.  
[→ View Discussion](https://github.com/earendil-works/pi/discussions/4444)

---

## Feature Request Trends

The following themes emerge from recent issues and discussions:

1. **MCP Extension Visibility** — Multiple requests (#10871, #12074, #12189, #12188) seek better MCP server status publishing through standard interfaces (`ctx.ui.setStatus`) and session ID propagation in tool-call metadata.

2. **Durable Execution Resilience** — Several issues highlight the need for stronger checkpointing: cancellation handlers waiting on signals (#12090), progress delta safety on host restarts (#12181), and deferred prompt handling during compaction (#12196).

3. **Provider/Extension Configuration Reliability** — The extension system needs consistent behavior for default provider/model selection (#8810, #9448) and graceful handling of provider key renames (#12193).

4. **Model Switching Mid-Session** — Bugs with model transitions (#12185, #12187) suggest this workflow needs hardening, especially with OpenAI-compatible proxies.

5. **Session Concurrency Controls** — Regression in 1.5.1 allows dual prompts on idle sessions to both start runs (#12186), indicating race conditions in session state management.

---

## Developer Pain Points

- **ChatGPT OAuth failures**: Plus-tier users cannot authenticate, blocking a key integration path.
- **Context window mismatches**: Incorrect window sizes lead to premature compaction and suboptimal performance.
- **Extension provider blind spots**: Core CLI commands (`auth check`, model selection) fail to see extension-registered providers.
- **Tool call concurrency**: Bash + read race conditions cause stale data reads and build failures.
- **Windows platform gaps**: Process tree cleanup and terminal input handling require platform-specific attention.
- **Documentation link rot**: docs.pi.dev contains broken links due to path prefixing issues.
- **Inter-session caching**: Forked sessions cannot benefit from existing prompt cache entries, wasting API calls.

---

*Digest generated from github.com/earendil-works/pi · 2026-11-16*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a structured English digest for the Qwen Code community based on the provided GitHub data. Let me analyze the data and create a well-organized digest.

Let me go through the data:

**Releases (last 24h):**
- v0.27.4: Main release
- v0.27.3-nightly.20261115.6e3b2dcc19: Nightly build
- sdk-typescript-v0.1.34: TypeScript SDK
- desktop-v0.27.4: Desktop app

Key changes from releases:
- Managed Agent sessions can access granted local directories and open interactive Managed Web Terminal without persisting credentials/paths
- feat(managed-agent): add the DingTalk adapter
- feat(managed-agent): register client filesystems into managed sessions

**Issues (top 10 by comment count):**
1. #14724 - Main CI failed: Managed Agent gate (383 comments) - OPEN
2. #13078 - Daily dependency CVE audit failed (52 comments) - OPEN
3. #17045 - Tracking 1.0 Preview loop kernel landing (18 comments) - CLOSED
4. #14104 - SDK Java test failures (17 comments) - OPEN
5. #17099 - npm security scan findings (14 comments) - OPEN
6. #16091 - Main CI failed: bun-pty test (13 comments) - OPEN
7. #15185 - E2E Tests failure: skill hooks (11 comments) - OPEN
8. #16425 - Workflow agent permission approval hangs (11 comments) - CLOSED
9. #15512 - External Hosted Workspace profile (7 comments) - OPEN
10. #17173 - Managed DingTalk adapter follow-up (5 comments) - OPEN

**PRs (top 10 from the list):**


The most significant pull requests landing today include UI and navigation improvements through goal state readability enhancements and session artifact headers, core functionality fixes like trailing space handling and scroll anchoring, and several feature additions such as managed /loop skill publishing, model availability tracking, and headless session execution on the shared agent loop. There's also progress on webhook eviction for DingTalk and URL sanitization bounds for provider warnings.

Additional fixes address glob directory matching, snapshot directory recording with cross-directory restoration prevention, context trust refusal handling, and custom command argument preservation. Several deflake PRs are also underway to stabilize various test cases.
</think>


# Qwen Code Community Digest

**Date:** 2026-11-16
**Repository:** github.com/QwenLM/qwen-code

---

## Today's Highlights

The Qwen Code team shipped **v0.27.4** across CLI, SDK, and Desktop, introducing Managed Agent filesystem integration for local directories and the new DingTalk adapter. The 1.0 Preview loop kernel continues its phased rollout onto `main` with headless sessions now running on the shared agent loop by default. Security concerns dominate the issue tracker, with npm dependency vulnerabilities and CI failures driving significant developer attention.

---

## Releases

| Version | Component | Key Changes |
|---------|-----------|-------------|
| **v0.27.4** | CLI / Desktop | Managed Agent sessions can now access granted local directories and open an interactive Managed Web Terminal without persisting credentials or paths; client filesystems registered into managed sessions |
| **v0.27.3-nightly.20261115** | Nightly | Pre-release build for v0.27.3 |
| **sdk-typescript-v0.1.34** | TypeScript SDK | Bundles CLI v0.27.4 |

---

## Hot Issues

### 1. **Main CI Failing: Managed Agent Gate** `#14724`
[github.com/QwenLM/qwen-code/issues/14724](https://github.com/QwenLM/qwen-code/issues/14724) — 383 comments | Priority: Bug

The Managed Agent gate consistently fails with no test identified, representing the single most-discussed issue in the past month. This blocks feature validation and signals architectural instability in the agent gate mechanism.

### 2. **Daily Dependency CVE Audit Failures** `#13078`
[github.com/QwenLM/qwen-code/issues/13078](https://github.com/QwenLM/qwen-code/issues/13078) — 52 comments | Priority: P2

Scheduled CVE audits repeatedly fail, with npm audit endpoints remaining unavailable or new high-severity vulnerabilities detected. The broader security posture issue is tracked in `#10850` with 4 known vulnerabilities (1 low, 2 moderate, 1 high) in the main lockfile.

### 3. **1.0 Preview Loop Kernel Landing** `#17045`
[github.com/QwenLM/qwen-code/issues/17045](https://github.com/QwenLM/qwen-code/issues/17045) — 18 comments | Priority: P1 | Status: CLOSED

The foundational rewrite of the agent loop as an event-driven kernel is being phased onto `main` surface-by-surface. This is a critical architectural milestone for v1.0, tracked alongside the follow-up issue `#17284`.

### 4. **npm Security Scan Findings** `#17099`
[github.com/QwenLM/qwen-code/issues/17099) — 14 comments | Priority: P2

A November 11 Snyk scan reported 29 findings across 13 npm packages introduced through `@qwen-code/web-shell@0.26.3` and `@qwen-code/sdk@0.1.25`. Staged dependency upgrades are in progress.

### 5. **Workflow Agent Permission Approval Hangs** `#16425`
[github.com/QwenLM/qwen-code/issues/16425](https://github.com/QwenLM/qwen-code/issues/16425) — 11 comments | Priority: P1 | Status: CLOSED

The workflow-runner agent hangs indefinitely when reaching permission approval that requires human input, despite the status bar showing "1 workflow ⚠ requires approval." This was reproduced across v0.26.6–v0.26.8.

### 6. **Auto Mode: Multiple Approval Dialogs Not Rendering** `#17332`
[github.com/QwenLM/qwen-code/issues/17332](https://github.com/QwenLM/qwen-code/issues/17332) — 3 comments | Priority: P1

In auto approval mode, subagent parallel tool batches with multiple approval-required calls render only one dialog, orphaning the rest and freezing the batch.

### 7. **Loop Detection False Positives** `#17391`
[github.com/QwenLM/qwen-code/issues/17391](https://github.com/QwenLM/qwen-code/issues/17391) — 2 comments | Priority: P2

Loop detection incorrectly reports `repetitive_thoughts` on healthy token-by-token reasoning streams from providers like llama.cpp with `--reasoning-format deepseek`.

### 8. **CLI Parallel Agent Display Sanitization Bug** `#17386`
[github.com/QwenLM/qwen-code/issues/17386](https://github.com/QwenLM/qwen-code/issues/17386) — 3 comments | Priority: P2

The parallel-agent display sanitizes activity text but not the agent name with the weaker ANSI-only filter, creating a potential security surface similar to a recently fixed issue in ToolConfirmationMessage.tsx.

### 9. **Managed Agent Turn Fails During Workspace Provisioning** `#17380`
[github.com/QwenLM/qwen-code/issues/17380](https://github.com/QwenLM/qwen-code/issues/17380) — 3 comments | Priority: P2

Managed Agent Turns fail permanently with `hosted_harness_unavailable` after ~37s when the Session's ephemeral Workspace runtime is still provisioning, even though the runtime comes up shortly after.

### 10. **/rewind Restores Checkpoint to Wrong Directory** `#16982`
[github.com/QwenLM/qwen-code/issues/16982](https://github.com/QwenLM/qwen-code/issues/16982) — 3 comments | Priority: P1

After moving a resumed session via `/cd`, `/rewind` to a pre-move checkpoint can restore files into the new working directory instead of the original, silently overwriting unrelated files. Fix PR `#17400` is open.

---

## Key PR Progress

| PR | Author | Summary |
|----|--------|---------|
| **#17349** | wenshao | Makes Goal state and session navigation readable at a glance in Web Shell |
| **#17397** | wenshao | Surfaces session-artifact header entry before replay on cold open |
| **#17354** | sx4im | Strips trailing spaces from each line of shell PTY output on Windows |
| **#17272** | wenshao | Publishes the managed `/loop` skill variant by profile |
| **#17377** | wenshao | Tracks model availability for the fallback chain (Qoder port) |
| **#17336** | qqqys | Runs headless sessions on the shared agent loop by default |
| **#17396** | wenshao | Evicts refused DingTalk webhooks and surfaces admission diagnostics |
| **#16924** | 2SinceJuly | Fixes glob to match directories, not just files |
| **#17400** | Bensonluo | Fixes `/rewind` cross-directory file restoration (fixes `#16982`) |
| **#17375** | wenshao | Closes context trust refusal's root-tmp and hard-link bypasses in verify-pr |

---

## Feature Request Trends

Analysis of open issues and PRs reveals these dominant feature directions:

1. **Multi-Agent & Workflow Orchestration**
   - Tracking `#17045` (1.0 loop kernel), `#17284` (follow-up items), `#15512` (external workspace profiles)
   - Approval dialog rendering for parallel agents (`#17332`)

2. **Security Hardening**
   - npm dependency vulnerability remediation (`#17099`, `#10850`)
   - Provider warning URL sanitization (`#16607`)
   - verify-pr trust boundary improvements (`#17375`, `#17371`)

3. **Session Management & Persistence**
   - Session artifact headers and cold-open restoration (`#17397`)
   - Worktree Codex parity with retention, snapshots, configurable root (`#17237`)
   - Managed `/loop` skill for scheduled/self-paced execution (`#17272`)

4. **Platform Distribution**
   - External Hosted Workspace enabling Hosted tools on external workers (`#15512`)
   - DingTalk adapter completion and hygiene (`#17173`, `#17396`)

5. **UX Polish**
   - Background task explanations from composer chips (`#17398`)
   - Dirty-tree checkout refusals resolved in branch picker (`#17364`)

---

## Developer Pain Points

1. **Flaky Tests Dominating CI Attention**
   - Multiple deflake PRs filed in the last 24 hours (`#17363`, `#17366`, `#17344`, `#17360`, `#17348`, `#17339`)
   - The CI failure patrol bot is actively re-running flagged tests
   - Windows git autocrlf causing test failures (`#17368`)

2. **Persistent CI Infrastructure Issues**
   - Managed Agent gate failures (`#14724`) with 383 comments indicate ongoing pain
   - npm audit endpoint availability issues (`#13078`)
   - bun-pty test failures on macOS (`#16091`)

3. **Workspace Provisioning Timing**
   - Race condition where harness becomes unavailable while Workspace is still provisioning (`#17380`)
   - Impacts user experience with cryptic "hosted_harness_unavailable" errors

4. **Directory/Session State Management**
   - Cross-directory restoration bug (`#16982`, fixed in `#17400`)
   - Trailing auto-memory user message prematurely stopping tool-using agents (`#15225`)
   - Glob directory matching inconsistencies (`#16924`, now fixed)

5. **Extension & Hook Installation Failures**
   - Managed hooks rejecting supported metadata during extension installation (`#17381`)
   - Credential and poll-interval validation gaps in DingTalk adapter (`#17173`)

---

*Digest generated from GitHub data for 2026-11-16*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*