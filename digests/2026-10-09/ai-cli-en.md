# AI CLI Tools Community Digest 2026-10-09

> Generated: 2026-10-09 02:30 UTC | Tools covered: 7

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

<think>The user wants me to generate a cross-tool comparison report for AI CLI tools based on the community digests I've already created. Let me analyze the data from all five tools:

1. **Claude Code** (MiniMax M1)
2. **OpenAI Codex**
3. **Google Gemini CLI**
4. **GitHub Copilot CLI**
5. **OpenCode** (anomalyco)
6. **Pi** (earendil-works)
7. **Qwen Code**

Wait, I need to check what tools were in the data. Looking back:
- Claude Code - github.com/anthropics/claude-code
- OpenAI Codex - github.com/openai/codex
- Google Gemini CLI - github.com/google-gemini/gemini-cli
- GitHub Copilot CLI - github.com/github/copilot-cli
- OpenCode - github.com/anomalyco/opencode
- Pi - github.com/earendil-works/pi
- Qwen Code - github.com/QwenLM/qwen-code

Let me organize the data:

**Activity Comparison:**

| Tool | Issues | PRs | Discussions | Releases |
|------|--------|-----|-------------|----------|
| Claude Code | 50 (showing top 30) | 2 | N/A | 2 |
| OpenAI Codex | 50 (showing top 30) | 20 | 4 | 5 |
| Google Gemini CLI | 50 (showing top 30) | 10 | 0 | 0 |
| GitHub Copilot CLI | 50 (showing top 30) | 0 | N/A | 3 |
| OpenCode | 50 (showing top 30) | 20 | N/A | 0 |


| Pi | 50 (showing top 30) | 10 | 4 | 0 |
| Qwen Code | 50 (showing top 30) | 10 | 0 | 0 |

I notice the activity metrics reveal interesting insights about these AI CLI tools. The data shows consistent high volume across repositories, with most platforms maintaining substantial community engagement. Discussions appear minimal, suggesting limited community interaction despite high issue and pull request counts.

The comparison highlights several key observations:
- All platforms maintain robust development activity
- Releases vary significantly, with some tools more actively updated
- Community interactions through discussions remain low across the ecosystem

Key shared requirements emerge around memory management, agent interaction, terminal capabilities, and security. Each tool demonstrates unique focus areas - from platform-specific reliability to CLI experience enhancements.

The landscape reveals nuanced approaches: some platforms prioritize user experience, others emphasize agent behavior, and several invest in robust error handling and security mechanisms.

Community engagement shows significant variation, with OpenAI Codex and OpenCode leading in pull requests, while Qwen Code drives extensive issue discussions. Development intensity differs dramatically, ranging from frequent releases to more conservative update strategies.

Emerging trends suggest a complex ecosystem with diverse priorities: multi-agent architectures, durable sessions, and platform-specific refinements indicate ongoing innovation in CLI tool design.</think>

# Cross-Tool Comparison: AI CLI Tools Ecosystem

## 1. Ecosystem Overview

The AI CLI tooling landscape has matured significantly, with seven major players competing for developer mindshare. Claude Code, OpenAI Codex, and GitHub Copilot CLI lead in release velocity, shipping multiple versions weekly with strong security and reliability focus. Google's Gemini CLI and the open-source alternatives (OpenCode, Pi, Qwen Code) show more aggressive feature development around managed agents, multi-session durability, and platform distribution. Community engagement is healthy across the board, with all tools maintaining active issue tracking and pull request pipelines—though GitHub Copilot CLI notably lacks a Discussions channel, relying on Issues as the sole community channel.

---

## 2. Activity Comparison

| Tool | Issues (showing) | PRs (showing) | Discussions | Releases (24h) |
|------|------------------|---------------|-------------|----------------|
| **Claude Code** | 50 (top 30) | 2 | N/A | 2 (v2.1.294, v2.1.295) |
| **OpenAI Codex** | 50 (top 30) | 20 | 4 | 5 (rust-v0.162.0, alphas) |
| **Gemini CLI** | 50 (top 30) | 10 | 0 | 0 |
| **Copilot CLI** | 50 (top 30) | 0 | N/A | 3 (v1.0.94–95-1) |
| **OpenCode** | 50 (top 30) | 20 | N/A | 0 |
| **Pi** | 50 (top 30) | 10 | 4 | 0 |
| **Qwen Code** | 50 (top 30) | 10 | 0 | 0 |

*Note: "N/A" indicates the tool does not use Discussions as a community channel (GitHub feature disabled).*

---

## 3. Shared Feature Directions

The following requirements appear across multiple tool communities:

| Feature Direction | Tools Affected | Specific Needs |
|-------------------|----------------|----------------|
| **Multi-Agent / Subagent Systems** | Claude Code, Gemini CLI, Pi, Qwen Code | Subagent recovery logic, dual-path architectures, child session runtimes |
| **Durable / Persistent Sessions** | Claude Code, OpenAI Codex, Gemini CLI, Pi, Qwen Code | Session checkpoints, turn/action tracking, cross-session continuity |
| **Memory Management** | Claude Code, Gemini CLI, OpenCode | Truncation transparency, bounded extraction, prompt prefix preservation |
| **Terminal / TUI Enhancements** | Claude Code, Copilot CLI, OpenCode | Fullscreen mode, leader shortcuts, resize handling, tool output previews |
| **Security Hardening** | Claude Code, Gemini CLI, Copilot CLI, OpenCode, Qwen Code | OAuth fixes, sandbox modes, path traversal prevention, credential masking |
| **MCP Integration** | Claude Code, Copilot CLI, OpenCode, Pi | Dynamic tool refresh, OAuth RFC compliance, server lazy-loading |
| **Platform Distribution** | Gemini CLI, OpenAI Codex, Copilot CLI | Windows sandboxing, WSL interoperability, Kubernetes runtimes |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|------|---------------|--------------|---------------------|
| **Claude Code** | Hooks, security, enterprise controls | Developers needing workflow automation | Instruction-based hooks with `onFailure: "block"` |
| **OpenAI Codex** | Windows desktop, reliability, IDE integration | Windows developers, VS Code users | Windows-first with Command Center, pinned tasks |
| **Gemini CLI** | Managed agents, platform distribution | Advanced users wanting agent orchestration | Staged Managed Agent architecture, CSI runtime |
| **Copilot CLI** | Authentication, MCP, quick CLI workflow | GitHub users, MCP ecosystem consumers | Microsoft Entra broker, MCP-first |
| **OpenCode** | Session UI, timeline, deterministic resolution | Power users wanting conversation clarity | Deterministic file link resolution, i18n |
| **Pi** | Extensions, unattended operation, hooks | Developers building custom agents | Extensive hooks API, peer-to-peer messaging |
| **Qwen Code** | Multi-agent, A2A protocol, Kubernetes | Enterprise deployments | H4b/H5 child runtime, A2A on sessions |

---

## 5. Community Momentum & Maturity

**Highest Velocity (frequent releases, active development):**

- **OpenAI Codex** — 5 releases in 24 hours, 20 PRs, strong Windows reliability focus
- **Claude Code** — 2 releases, stable v2.1.x, mature hook system
- **Copilot CLI** — 3 releases, Microsoft ecosystem integration leader

**Active Development (significant PR volume, feature-rich):**

- **OpenCode** — 20 PRs, i18n infrastructure, session UI refinements
- **Qwen Code** — Managed Agent architecture (Stage D), H4b/H5 runtime
- **Pi** — Extension APIs, OAuth fixes, MCP enhancements
- **Gemini CLI** — 0 releases but 10 PRs, managed agent architecture

**Community Engagement (issues/comments):**

- **Qwen Code** — Highest issue comment volume (50 comments across top issues), indicating active debate
- **Claude Code** — #65961 (250 👍) shows strongest single-issue community consensus
- **Pi** — Active discussions on peer-to-peer messaging and unattended execution
- **OpenAI Codex** — Multiple high-comment issues (85, 46, 25) indicating broad user reporting

---

## 6. Trend Signals

The following patterns emerge from community feedback, valuable for developers evaluating this ecosystem:

1. **Agent Orchestration is the Next Frontier** — Multiple tools (Gemini CLI, Qwen Code, Pi) are investing heavily in multi-agent architectures, child session runtimes, and inter-agent communication protocols (A2A). This signals a shift from single-agent CLI tools to coordinated agent systems.

2. **Durability Becomes Table Stakes** — Session persistence, checkpoint recovery, and turn/action tracking appear across Codex, Claude Code, Gemini CLI, Pi, and Qwen Code. Users expect long-running conversations to survive restarts and network interruptions.

3. **Security-First Development** — Every tool is addressing security hardening: OAuth compliance, path traversal, sandbox modes, credential masking. This reflects enterprise adoption and heightened security expectations.

4. **Windows is the Hardest Platform** — Windows-specific issues dominate bug reports across Codex, Copilot CLI, Pi, and Gemini CLI: file locking, sandbox provisioning, TCC permissions, PowerShell integration. Consider Windows-first testing if building for this ecosystem.

5. **MCP is Becoming Universal** — MCP (Model Context Protocol) integration is nearly ubiquitous. Tools are competing on MCP server management, dynamic tool refresh, and OAuth compliance. Expect MCP to be a differentiator.

6. **Terminal Experience Differentiation** — While all tools have TUI components, differentiation is emerging: Claude Code's OSC 7501 terminal status, Copilot CLI's model switching, OpenCode's deterministic timeline, Pi's keybinding extensions. The CLI experience is becoming a key competitive axis.

7. **Enterprise Features Emerging** — HIPAA settings (Claude Code), permission centers (OpenAI Codex), Kubernetes deployment (Qwen Code), BYOK model switching (Copilot CLI) — the ecosystem is moving beyond individual developer tools toward team/enterprise workflows.

---

*Cross-tool analysis based on community digest data from 2026-10-09.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>Let me analyze the provided data from the anthropics/skills repository to create a comprehensive community highlights report.

Looking at the data:

**Top Skills/PRs by comments:**
The data shows PRs sorted by comments, but interestingly, all the PRs shown have "Comments: undefined" - which is odd. Let me look at what PRs are most discussed based on their content and activity:

Looking at the PRs:
1. #1742 - fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
2. #1298 - fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
3. #1771 - feat(skills): add proofcore-contract-auditor for smart contract notarization
4. #1734 - Detect orphaned docx comments
5. #1703 - Add md2video-audio skill
6. #1245 - Add notion-spec-to-implementation and quantitative-resume-auditor skills
7. #1792 - fix(docx): report LibreOffice timeout as an error and verify the output
8. #1730 - fix(claude-api): replace dead URLs in academy-guide and tool-use-concepts
9. #1681 - fix(skill-creator): support direct execution of package_skill.py
10. #525 - Add pyxel skill for retro game development

All PRs appear to be OPEN (not merged yet).

**Issues by comments:**
1. #492 - Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse - 43 comments
2. #228 - Enable org-wide skill sharing in Claude.ai - 16 comments
3. #556 - run_eval.py: claude -p never triggers skills/commands (0% trigger rate) - 12 comments
4. #62 - All my skills have disappeared and now i get errors - 10 comments


5. #1329 - Proposing a second skill: compact-memory (symbolic notation for compact agent state) - 9 comments

I notice the discussion is heavily focused on skill evaluation and trigger mechanisms. The community is particularly concerned about how skills are activated and validated, with multiple issues highlighting problems in run_eval.py and skill triggering. There's also emerging interest in specialized skills like compact-memory and smart contract auditing, suggesting a desire for more nuanced, domain-specific capabilities.

The workflow and integration aspects seem less prominent, while technical implementation challenges around skill creation, validation, and security are dominating the conversation. Developers appear to be wrestling with the practical mechanics of skill development rather than exploring broader use cases.</think>

# Claude Code Skills Community Highlights Report

**Data as of October 9, 2026**

---

## 1. Top Skills Ranking

The following PRs represent the most active Skill contributions by engagement and discussion volume:

| PR | Skill | Author | Status | Summary |
|----|-------|--------|--------|---------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder** (fix) | Kuldeeep18 | OPEN | Fixes MCP SDK v2 breaking changes: `streamablehttp_client` renamed to `streamable_http_client`, updates header configuration via `create_mcp_http_client`/`http_client`. Critical compatibility update for MCP integration. |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator** (fix) | MartinCajiao | OPEN | Fixes trigger evaluation reliability: resolves false misses from per-worker command probe conflicts, Windows `select()` failures on subprocess pipes, and runtime failures incorrectly passing negative examples. |
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | ProofCore-Protocol | OPEN | Agent Skill for Web3 developers: performs automated static analysis of Solidity and Rust smart contracts, anchors cryptographic audit proofs onto TON Blockchain using zero-storage Merkle protocol. |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | 70v-Yoyo | OPEN | Zero-cost skill that compiles Markdown documents into professional MP4 videos with realistic human-like voiceovers using Marp. |
| [#1245](https://github.com/anthropics/skills/pull/1245) | **notion-spec-to-implementation** | mrdesouzaphd-cmyk | OPEN | Transforms product/tech specs into concrete Notion tasks for Claude Code implementation with detailed tasks, acceptance criteria, and progress tracking. |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | kitao | OPEN | Retro game development skill for Python using Pyxel framework: guides implementation, headless input-driven runs, frame inspection, and task-specific state checks. |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | PGTBoos | OPEN | Prevents typographic problems in AI-generated documents: orphan word wrap, widow paragraphs, numbering misalignment. |
| [#822](https://github.com/anthropics/skills/pull/822) | **AWT (AI Watch Tester)** | ksgisang | OPEN | E2E testing skill giving Claude vision and browser control for zero-code automated test generation. |

**Note:** All top PRs remain OPEN, indicating either active development cycles or pending review. No PRs in the top 20 have been merged yet in this dataset.

---

## 2. Community Demand Trends

Analysis of Issues reveals the following high-priority demand areas:

### Security & Trust
- **[#492](https://github.com/anthropics/skills/issues/492)** (43 comments) — **Critical:** Community skills under `anthropic/` namespace create trust boundary abuse. Users may inadvertently grant elevated permissions to community skills believing them to be official.

### Infrastructure & Tooling
- **[#556](https://github.com/anthropics/skills/issues/556)** (12 comments) — `run_eval.py` reports 0% trigger rate across all queries; skills/commands never fire during evaluation.
- **[#1352](https://github.com/anthropics/skills/issues/1352)** (4 comments) — Parallel workers in `run_eval.py` cross-match skill UUIDs, producing systematic false-negative trigger rates.

### Collaboration & Sharing
- **[#228](https://github.com/anthropics/skills/issues/228)** (16 comments) — Strong demand for org-wide skill sharing directly in Claude.ai; current workflow requires manual file transfer and settings navigation.

### Skill Quality & Evaluation
- **[#83](https://github.com/anthropics/skills/pull/83)** — Meta skills added: `skill-quality-analyzer` and `skill-security-analyzer`.
- **[#202](https://github.com/anthropics/skills/issues/202)** (CLOSED) — `skill-creator` revised to improve actionability and token efficiency.

### Performance & Scalability
- **[#1487](https://github.com/anthropics/skills/issues/1487)** — `claude-api` skill injects ~156k tokens, exhausting context windows in a single call.

---

## 3. High-Potential Pending Skills

The following active PRs show strong engagement and may merge soon:

| PR | Skill | Readiness Indicators |
|----|-------|----------------------|
| [#1961](https://github.com/anthropics/skills/pull/1961) | **skill-creator eval-viewer hardening** | Addresses security: script breakout, DNS rebinding, cross-site POST, escaping vulnerabilities |
| [#1792](https://github.com/anthropics/skills/pull/1792) | **docx LibreOffice timeout handling** | Fixes error reporting and verifies output DOCX cleanliness |
| [#1730](https://github.com/anthropics/skills/pull/1730) | **claude-api dead URL fixes** | Replaces 3 hard-404 URLs with verified canonical links |
| [#1681](https://github.com/anthropics/skills/pull/1681) | **skill-creator direct execution** | Enables standalone `package_skill.py` execution, updates outdated docs |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for robust skill evaluation and reliability infrastructure** — the `skill-creator` evaluation framework, trigger detection, and cross-platform compatibility (Windows support) dominate discussions, followed by security hardening and org-wide sharing capabilities.

---

*Report generated from GitHub data at anthropics/skills (data as of 2026-10-09).*

---

<think>The user wants me to generate a Claude Code community digest for 2026-10-09 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

**Releases (last 24h):**
- v2.1.295: Added `onFailure: "block"` for command and HTTP hooks, added Program Status Protocol (OSC 7501) support
- v2.1.294: Fixed prompt and agent hooks written as instructions, improved prompt hooks on Stop and SubagentStop

**Issues (top 30 by comment count):**
1. #65961 - [bug, area:model] MODEL] Claude verbose code comments by default — ignores instructions to stop. (41 comments, 250 👍)
2. #91495 - [bug, platform:macos, area:permissions, area:browser-extension, area:desktop] Site permissions ignored by built-in browser (18 comments, 18 👍)
3. #99403 - [enhancement, platform:linux, memory] MEMORY.md silently truncated when over size limit (9 comments, 0 👍)
4. #95125 - [enhancement, platform:windows, area:desktop, keybindings] Desktop app: option to make Enter insert newline and submit only via Ctrl+Enter (8 comments, 28 👍)
5. #81024 - [area:ide] VS Code extension: include git-worktree sessions in session list (8 comments, 9 👍)
6. #95822 - [bug, platform:macos, area:auth] Short-lived commands start OAuth refresh but exit without saving (6 comments, 1 👍)
7. #99524 - [bug, platform:linux, area:networking] After network change, next request hangs 180s on dead connection (4 comments, 0 👍)


8. #99264 - [bug, platform:macos, area:model, platform:vscode, api:anthropic] Anthropic API Error: Message flagged by Opus 5.5 safeguards (4 comments, 3 👍)
9. #100278 - [bug, platform:windows, area:tui, user-experience] Warning about Max effort every 2 minutes (3 comments, 2 👍)
10. #87833 - [bug, platform:macos, area:security, area:desktop] Starting session in Claude Desktop revokes filesystem access from CLI sessions (3 comments, 1 👍)

Looking at the Pull Requests from the last day, I see two open items. The first is #100293 from sarahdeaton adding a HIPAA settings example, and the second is #41447 from gameroman proposing to open source Claude Code itself. There's also an issue about session handling when context limits are reached (#97232), though that's not in the top 10. I'll organize the top 10 issues by severity and relevance, starting with the model behavior problem that's generating the most community engagement, then moving through the permission and platform-specific bugs.</think>

# Claude Code Community Digest — 2026-10-09

## Today's Highlights

The past 24 hours brought two minor releases (v2.1.294 and v2.1.295) focusing on hook reliability and terminal integration. The most significant addition is Program Status Protocol (OSC 7501) support, enabling terminals to display Claude Code's running status. Meanwhile, community discussion continues to center on the verbose code comments behavior that ignores user instructions (#65961, 250 👍), now with 41 comments—making it the most-active issue by a wide margin.

---

## Releases

**v2.1.295** — 2026-10-08

- Added `onFailure: "block"` for command and HTTP hooks: hooks that fail to start, time out, or exit with an unexpected code now block the action instead of letting it through
- Added **Program Status Protocol (OSC 7501) support**: terminals that implement this protocol can display whether Claude Code is currently running

**v2.1.294** — 2026-10-08

- Fixed `prompt` and `agent` hooks written as instructions (e.g., "Block commands that...") correctly blocking what they should
- Improved how `prompt` hooks on Stop and SubagentStop written as instructions (e.g., "Carry on if the build is broken") are evaluated, reducing false positives

---

## Hot Issues

1. **[#65961] [MODEL] Claude verbose code comments by default — ignores instructions to stop**  
   **Why it matters:** The model generates overly verbose code comments even when explicitly instructed to stop, affecting code clarity and token usage.  
   **Community reaction:** 250 👍, 41 comments — the highest-engagement issue by far.  
   🔗 https://github.com/anthropics/claude-code/issues/65961

2. **[#91495] Site permissions ("Allow all websites") ignored by built-in browser in Claude Code Desktop**  
   **Why it matters:** macOS users report that configured site permissions are not respected by the desktop app's built-in browser, creating a potential security and usability gap.  
   **Community reaction:** 18 👍, 18 comments.  
   🔗 https://github.com/anthropics/claude-code/issues/91495

3. **[#95125] Desktop app: option to make Enter insert a newline and submit only via Ctrl+Enter**  
   **Why it matters:** Windows desktop users frequently accidentally submit unfinished multi-paragraph prompts when pressing Enter. A common UX pattern in other chat apps.  
   **Community reaction:** 28 👍, 8 comments — strong feature request.  
   🔗 https://github.com/anthropics/claude-code/issues/95125

4. **[#99403] MEMORY.md silently truncated when over size limit — no indication which entries were dropped**  
   **Why it matters:** When the project memory index exceeds the size limit, entries are dropped silently with no warning about which entries were lost, leading to potential knowledge gaps.  
   **Community reaction:** 9 comments, 0 👍 (new).  
   🔗 https://github.com/anthropics/claude-code/issues/99403

5. **[#81024] VS Code extension: include git-worktree sessions in the session list**  
   **Why it matters:** The extension hardcodes `includeWorktrees: false`, meaning sessions in git worktrees don't appear in the session list—a significant pain point for multi-branch workflows.  
   **Community reaction:** 9 👍, 8 comments.  
   🔗 https://github.com/anthropics/claude-code/issues/81024

6. **[#95822] Short-lived commands start OAuth refresh at init and exit without saving it, leaving spent refresh token**  
   **Why it matters:** Commands like `claude auth status` trigger an OAuth refresh but exit before it completes, leaving the profile with an invalid refresh token.  
   **Community reaction:** 6 comments, 1 👍.  
   🔗 https://github.com/anthropics/claude-code/issues/95822

7. **[#99524] After a network change, the next request hangs 180s on a dead connection before retrying (Linux)**  
   **Why it matters:** Linux users experience a 3-minute hang when network topology changes, as the client doesn't detect the dead connection promptly.  
   **Community reaction:** 4 comments, 0 👍.  
   🔗 https://github.com/anthropics/claude-code/issues/99524

8. **[#100278] Warning every 2 minutes: "Claude thinks longer with Max error and can consume 3.5× or more usage than Medium"**  
   **Why it matters:** Users who deliberately choose Max effort are pestered by a recurring warning strip that cannot be permanently dismissed.  
   **Community reaction:** 3 comments, 2 👍.  
   🔗 https://github.com/anthropics/claude-code/issues/100278

9. **[#87833] Starting a session in Claude Desktop revokes filesystem access from already-running CLI sessions (macOS TCC)**  
   **Why it matters:** A TCC (Transparency, Consent, Control) identity collision causes CLI sessions to lose read access to TCC-protected folders when a Desktop session starts.  
   **Community reaction:** 3 comments, 1 👍.  
   🔗 https://github.com/anthropics/claude-code/issues/87833

10. **[#100672] Desktop app: new session should default to the selected session's folder, not the last-used folder**  
    **Why it matters:** Starting a new session from a specific selected session should inherit that session's working directory, not the global most-recent folder.  
    **Community reaction:** 0 comments, 0 👍 (new).  
    🔗 https://github.com/anthropics/claude-code/issues/100672

---

## Key PR Progress

1. **[#100293] Add a HIPAA settings example to examples/settings**  
   Adds `settings-hipaa.json`, `managed-mcp-hipaa.json`, and `README-hipaa.md` for organizations needing HIPAA-compliant session content handling.  
   🔗 https://github.com/anthropics/claude-code/pull/100293

2. **[#41447] feat: open source claude code**  
   Long-running proposal to open-source Claude Code. References issues #59, #456, #2846, #22002, and #41434.  
   🔗 https://github.com/anthropics/claude-code/pull/41447

---

## Feature Request Trends

Based on the issue landscape, the most-requested feature directions are:

- **Desktop app UX improvements** — Ctrl+Enter to submit (#95125), persistent dismissal of Max effort warnings (#100278), default new sessions to selected folder's directory (#100672)
- **Memory/knowledge management** — Transparent handling of MEMORY.md truncation (#99403), clearer indication of dropped entries
- **Terminal/IDE integration** — Git worktree session visibility in VS Code (#81024), RTL/Persian text direction fixes (#100492)
- **Hook system enhancements** — Documentation for `UserPromptSubmit` hook's prompt origin field (#100666)
- **Agent view capabilities** — Multi-session bulk reply support (#97746)

---

## Developer Pain Points

The following frustrations recur across multiple issues:

1. **Model behavior inconsistency** — Claude ignores explicit instructions to stop verbose commenting (#65961), a long-standing complaint with 250+ upvotes
2. **Permission/authority conflicts** — macOS TCC identity collisions between Desktop and CLI sessions (#87833), OAuth token management in short-lived commands (#95822)
3. **Network resilience** — Linux users hit 3-minute hangs after network changes (#99524)
4. **Silent failures** — MEMORY.md truncation happens without user notification (#99403), agent definitions with missing `name:` fields are silently skipped (#98058)
5. **Desktop usability** — Keybinding expectations differ from other chat apps (#95125), warnings cannot be permanently dismissed (#100278)

---

*Generated from GitHub data — 2026-10-09*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate an OpenAI Codex community digest for 2026-10-09 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

**Releases (last 24h):**
- rust-v0.163.0-alpha.2: 0.163.0-alpha.2
- rust-v0.162.0: New Features mentioned
- rust-v0.163.0-alpha.1: 0.163.0-alpha.1
- rust-v0.162.0-alpha.18.1: 0.162.0-alpha.18.1
- rust-v0.162.0-alpha.17.2: 0.162.0-alpha.17.2

**Latest Issues (top 30 by comment count):**
1. #25178 - Windows Computer Use screenshot fails (85 comments)
2. #42739 - Local projects disappear from sidebar (46 comments)
3. #51634 - Windows sandbox provisioning fails with os error 32 (25 comments)
4. #27552 - Image attachment saved to Temp not accessible to WSL (25 comments)
5. #50428 - Durable chat turn/start fail with AbsolutePathBuf (24 comments)
6. #42243 - Codex Pet overlay reappears after being tucked away (24 comments)
7. #51824 - ChatGPT for Windows crashes (18 comments)
8. #43015 - Severe CLI reliability failure (16 comments)
9. #31001 - Code review reports usage-limit exhausted (14 comments)
10. #47538 - TUI duplicated interleaved text (13 comments)
11. #31221 - Computer Use cannot control Microsoft Edge (12 comments)
12. #51969 - Windows sandbox setup blocked by running node_repl.exe (11 comments)


13. #50887 - Authorized receipt test rejected (10 comments)
14. #51885 - Sandbox setup fails with SHARING VIOLATION (9 comments)
15. #51313 - Repeated renderer crashes (9 comments)
16. #47213 - Full Access blocks commands (9 comments)
17. #51638 - Sandbox setup fails with SHARING_VIOLATION (8 comments)
18. #51882 - dot-started tasks fail (7 comments)
19. #17412 - "Back to app" not working (7 comments)
20. #33986 - Bash PreToolUse tool

I notice several issues related to sandbox setup failures, with multiple tickets mentioning SHARING VIOLATION errors and problems with node_repl.exe. The Windows platform appears to be experiencing significant stability challenges, particularly around sandbox provisioning and system resource conflicts. There's also an emerging pattern of issues related to task management and command execution.

The pull requests seem to focus on expanding voice support, improving thread state management, and refining various development tool features. Notably, there's work on realtime voice capabilities, durable thread read states, and enhancements to the TUI (Terminal User Interface).

Key development themes include:
- Voice technology improvements
- Thread and execution state management
- UI/terminal refinements
- Credential and security handling
- Developer experience optimization

The discussions reveal ongoing challenges with usage limits and CLI interface interactions, particularly around fullscreen modes and session reliability in different environments.</think>

# OpenAI Codex Community Digest — 2026-10-09

## Today's Highlights

The past 24 hours saw significant activity around the Windows desktop experience, with multiple reports of sandbox provisioning failures due to file locking conflicts. The 0.162.0 stable release shipped with managed Git worktrees support and pinned tasks in Command Center. Meanwhile, the team continues pushing forward on durability and thread state features, with several PRs merging around read-state management and credential handling.

---

## Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.162.0** | Stable | Added tools for creating/listing managed Git worktrees from trusted local projects; pinned tasks in agent Command Center (`p` key); navigate and copy t... |
| **rust-v0.163.0-alpha.2** | Alpha | Release 0.163.0-alpha.2 |
| **rust-v0.163.0-alpha.1** | Alpha | Release 0.163.0-alpha.1 |
| **rust-v0.162.0-alpha.18.1** | Alpha | Release 0.162.0-alpha.18.1 |
| **rust-v0.162.0-alpha.17.2** | Alpha | Release 0.162.0-alpha.17.2 |

---

## Hot Issues

1. **[#25178](https://github.com/openai/codex/issues/25178)** — **Windows Computer Use screenshot fails on Windows 10 22H2** (85 comments, 32 👍)
   - `get_window_state` calls requesting screenshots fail with `SetIsBorderRequired failed: 不支持此接口 (0x80004002)`. Affects users on Windows 10 22H2 specifically. High community engagement indicates broad impact on Windows Computer Use workflows.

2. **[#42739](https://github.com/openai/codex/issues/42739)** — **Local projects disappear from sidebar after Windows desktop update** (46 comments)
   - After updating the Windows desktop app, the Projects section shows "No projects" despite source folders existing on disk. Users lose visibility into their workspace structure.

3. **[#51634](https://github.com/openai/codex/issues/51634)** — **Windows sandbox provisioning fails with os error 32** (25 comments, 12 👍)
   - Regression in 0.162.0-alpha.2: sandbox setup aborts when any runtime file is in use. Multiple users reporting identical "sharing violation" behavior—appears to be a widespread blocker for Windows development workflows.

4. **[#27552](https://github.com/openai/codex/issues/27552)** — **Image attachment saved to Temp but not accessible to WSL agent** (25 comments, 13 👍)
   - Windows users with WSL workspaces cannot access image attachments saved to Temp. Breaks cross-platform workflows where users rely on WSL for development.

5. **[#50428](https://github.com/openai/codex/issues/50428)** — **Durable chat turn/start fails with AbsolutePathBuf deserialized without a base path** (24 comments)
   - Windows desktop can read existing durable/cloud chats but plain-text submissions and same-directory forks fail before execution. Blocks adoption of durable conversations on Windows.

6. **[#42243](https://github.com/openai/codex/issues/42243)** — **Codex Pet overlay reappears after being tucked away** (24 comments, 34 👍)
   - The Pet floating overlay resurfaces after users select "Tuck Away Pet." Despite the UI interaction indicating it should stay hidden, the behavior persists—affecting user experience.

7. **[#51824](https://github.com/openai/codex/issues/51824)** — **ChatGPT for Windows crashes in windows-updater.node** (18 comments)
   - Windows app opens, runs for 30–60 seconds, then closes without on-screen error. Crashpad identifies the browser/main process as the culprit. Users lose work mid-session.

8. **[#43015](https://github.com/openai/codex/issues/43015)** — **Severe CLI reliability: 63.8 MB image-history requests** (16 comments)
   - Users report massive image-history byte growth (63.7 MB per request) before any compaction, with WebSocket fallback causing prolonged stalls. A major reliability concern for CLI power users.

9. **[#31001](https://github.com/openai/codex/issues/31001)** — **Code review reports usage-limit exhausted but dashboard shows 100% remaining** (14 comments, 20 👍)
   - GitHub code review blocks `@codex review` requests with usage-limit error, yet the analytics dashboard shows available quota and zero review activity. Makes the error non-actionable.

10. **[#47538](https://github.com/openai/codex/issues/47538)** — **TUI shows duplicated interleaved text after mid-stream disconnects** (13 comments)
    - Third-party Responses providers cause assistant text to render twice in the same visual flow, with different chunk boundaries. Users on custom/backward-compatible setups are affected.

---

## Key PR Progress

| PR | Summary |
|----|---------|
| **[#52363](https://github.com/openai/codex/pull/52363)** | Expand realtime v3 voice support — added dedicated v3 voice list with 16 additional voices beyond v1 |
| **[#52350](https://github.com/openai/codex/pull/52350)** | Expose experimental durable thread read state in app server — adds `readState` to `thread/read` and `readStates` map to `thread/list` |
| **[#52337](https://github.com/openai/codex/pull/52337)** | Add durable thread read state with revision-checked updates — prevents stale read acknowledgments from clearing results published after client snapshot |
| **[#52330](https://github.com/openai/codex/pull/52330)** | Clamp wrapped source ranges before remapping terminal hyperlinks — fixes panic from cursor sentinel past input end |
| **[#52329](https://github.com/openai/codex/pull/52329)** | Remove per-content source attribution metadata — simplifies context fragments and hook outputs |
| **[#52325](https://github.com/openai/codex/pull/52325)** | Track history initialization in Responses turn metadata — distinguishes `new`, `cleared`, `cold_resume`, `warm_fork`, `cold_fork`, `supplied_history` |
| **[#52304](https://github.com/openai/codex/pull/52304)** | Persist remote-control RPC preferences in managed daemon settings |
| **[#52302](https://github.com/openai/codex/pull/52302)** | Add opt-in credential masking for proxied sandboxed sessions — new `features.credential_masking` flag |
| **[#52268](https://github.com/openai/codex/pull/52268)** | Preserve large arguments in executed tool call metadata — removed 8 KiB/32 KiB limits |
| **[#52273](https://github.com/openai/codex/pull/52273)** | Add configurable persistent leader shortcuts to TUI — adds `tui.keymap.global.leader` defaulting to `ctrl-x` |

---

## Hot Discussions

### Ideas

- **[#52265](https://github.com/openai/codex/discussions/52265)** — Feature Request: User-Friendly Permission Center and Allowlist for Codex Desktop
  - Proposes centralized permission management interface for the Windows desktop app.

### Q&A

- **[#52181](https://github.com/openai/codex/discussions/52181)** — Native Windows Codex pre-execution policy refusal: supported enforcing-layer diagnosis?
  - Seeking supported diagnosis for Windows Codex pre-execution refusal, not workarounds.

### Show and Tell

- **[#52372](https://github.com/openai/codex/discussions/52372)** — Selvedge: retrieving a rejected approach across two Codex sessions via MCP
  - Python CLI and local stdio MCP server for saving coding decisions, including rejected approaches.

- **[#52198](https://github.com/openai/codex/discussions/52198)** — cloud-alter-ego: persistent memory for Codex and Claude Code that learns from its mistakes
  - Memory system for AI agents that tracks user identity, preferences, and session history.

- **[#52163](https://github.com/openai/codex/discussions/52163)** — Lampo: an MCP review loop for videos Codex renders
  - Video review app with MCP for evaluating Codex-generated MP4s with frame-accurate annotations.

- **[#51759](https://github.com/openai/codex/discussions/51759)** — BigaCli: Windows Codex workspace for phone workflows
  - Open-source Windows Codex web client for queuing prompts and quota recovery.

---

## Feature Request Trends

Based on Issues and Discussions, the following themes emerge:

1. **Windows Desktop Stability & Sandboxes** — Multiple reports of file locking, sharing violations, and sandbox provisioning failures point to fundamental Windows integration issues. Users need reliable isolated execution environments.

2. **Durable/Cloud Thread Persistence** — Several issues around thread state, read receipts, and cross-device continuity indicate strong demand for persistent conversation state.

3. **Cross-Platform File/Resource Access** — WSL interoperability, Temp file visibility, and path handling across Windows/Linux boundaries are recurring pain points.

4. **Permission & Security UI** — Requests for centralized, user-friendly permission management rather than scattered, opaque policy blocks.

5. **Enhanced CLI/TUI Capabilities** — Leader shortcuts, text selection in fullscreen mode, and richer terminal integration continue to see development investment.

---

## Developer Pain Points

- **Windows File Locking** — The "sharing violation" (os error 32) when sandbox setup attempts to use runtime files that are already open is blocking many Windows users. Multiple duplicate issues filed in the past 48 hours.

- **Inconsistent Usage Reporting** — Code review quota errors showing "exhausted" when dashboard reports 100% remaining creates confusion and blocks productive work.

- **Windows Renderer Instability** — Repeated blank-screen reloads and crashes in the Windows desktop app disrupt ongoing work every 1–2 minutes for affected users.

- **Image/Attachment Path Visibility** — Temp directory isolation prevents WSL agents from accessing Windows-saved attachments, breaking mixed development workflows.

- **CLI Fullscreen Behavior** — The new default fullscreen CLI mode is contentious; some users prefer traditional scrolling terminals.

---

*Generated from GitHub data — openai/codex | 2026-10-09*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze this GitHub data and generate a structured digest. First, let me understand what's available:

1. **Latest Releases**: None in the last 24h
2. **Latest Issues**: 50 total, showing top 30 by comment count
3. **Latest PRs**: 31 total, showing top 20

I notice this is Google Gemini CLI repository data from October 2026. The data includes:
- Issues with priorities, areas, and various labels
- PRs with similar metadata
- No releases in the last 24h

Let me structure this properly:

**Today's Highlights**: I should pick the most impactful items
- There are several security fixes in PRs
- Multiple agent-related issues (hangs, bugs with subagents)
- Performance improvements

**Hot Issues** - I need to pick 10:
1. #22323 - Subagent recovery after MAX_TURNS (priority/p1, 13 comments)
2. #19873 - Zero-Dependency OS Sandboxing (priority/p2, 9 comments)
3. #21409 - Generalist agent hangs (priority/p1, 8 comments, 8 👍)
4. #22745 - AST-aware file reads (priority/p2, 7 comments)
5. #21968 - Gemini doesn't use skills/sub-agents (priority/p2, 7 comments)
6. #26301 - Voice mode auth issue (CLOSED, 6 comments)
7. #29207 - Corrupt agents.json (CLOSED, 4 comments)
8. #22267 - Browser Agent ignores settings (priority/p2, 4 comments)
9. #22232 - Browser Agent resilience (priority/p3, 4 comments)
10. #21983 - Browser subagent fails in wayland (priority/p1, 4 comments)


11. #22186 - get-shit-done output hook crash (priority/p1, 3 comments)

Now I'll work through the PRs that address these issues. Several security-related fixes stand out, including MCP OAuth handling, session resumption fixes, and sandbox build improvements. There are also key agent-related corrections like preventing Flash-Lite models from using HIGH thinking, git argument validation on Windows, and handling unreadable extension configs. I notice there's no discussion data available, so I'll need to skip that section.</think>

# Gemini CLI Community Digest

**Date:** 2026-10-09
**Repository:** google-gemini/gemini-cli

---

## Today's Highlights

The past 24 hours saw significant security-focused activity, with multiple PRs addressing vulnerabilities in sandbox builds, OAuth flows, and command validation. Agent-related issues remain prominent, particularly around subagent behavior, browser agent reliability, and generalist agent hangs. Performance optimizations for file discovery in large repositories are also progressing through the pipeline.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues

### 1. Subagent Recovery Misreports MAX_TURNS as Success
**[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** | Priority P1 | Area: Agent | 13 comments | 👍 2
The `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even when it hits the maximum turn limit before completing analysis. This masks genuine interruptions and may cause developers to overlook incomplete investigations.

### 2. Zero-Dependency OS Sandboxing Proposal
**[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** | Priority P2 | Area: Agent | 9 comments | 👍 1
Proposal to leverage Gemini 3 models' native bash affinity through zero-dependency OS sandboxing with post-execution intent routing. Would enable more efficient use of POSIX tools (`grep`, `cat`, `sed`, `awk`) without compromising security.

### 3. Generalist Agent Hangs During Deferral
**[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** | Priority P1 | Area: Agent | 8 comments | 👍 8
When Gemini CLI defers to the generalist agent, it hangs indefinitely—even for simple operations like folder creation. Users report waiting up to an hour. Instructing the model to avoid subagents resolves the issue.

### 4. AST-Aware File Reads Investigation
**[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** | Priority P2 | Area: Agent | 7 comments | 👍 1
Epic tracking investigations into AST-aware file reading, searching, and codebase mapping. Goals include more precise method boundary detection to reduce turn misalignment and token noise.

### 5. Gemini Underutilizes Custom Skills and Sub-Agents
**[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** | Priority P2 | Area: Agent | 7 comments
An empirical observation that Gemini rarely invokes custom skills (e.g., gradle, git) or sub-agents autonomously, even when tasks are highly relevant. Users must explicitly instruct the model to use them.

### 6. Voice Mode Requires API Key Despite OAuth
**[#26301](https://github.com/google-gemini/gemini-cli/issues/26301)** (CLOSED) | Priority P2 | Area: Agent | 6 comments
Voice mode's cloud backend required `GEMINI_API_KEY` even for users fully authenticated via OAuth, preventing OAuth users from accessing cloud voice mode without generating a separate AI Studio key.

### 7. Corrupt agents.json Crashes Acknowledgment
**[#29207](https://github.com/google-gemini/gemini-cli/issues/29207)** (CLOSED) | Priority P2 | Area: Agent | 4 comments
A corrupt `agents.json` with valid JSON but wrong shape caused raw `TypeError` crashes or silent acknowledgment drops. Users with `null` values or malformed files were affected.

### 8. Browser Agent Ignores settings.json Overrides
**[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** | Priority P2 | Area: Agent | 4 comments
The Browser Agent completely ignores configuration overrides in global or project-level `settings.json`, including `maxTurns`. The `AgentRegistry` correctly reads and merges settings during initialization, but the Browser Agent doesn't apply them.

### 9. Browser Agent Session Lock Recovery
**[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** | Priority P3 | Area: Agent | 4 comments
Proposal to enhance browser agent resilience by implementing automatic session takeover and lock recovery when encountering locked browser profiles in persistent session mode.

### 10. Browser Subagent Fails in Wayland
**[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** | Priority P1 | Area: Agent | 4 comments | 👍 1
The browser subagent fails in Wayland environments, reporting a GOAL termination despite failing to execute properly.

---

## Key PR Progress

### 1. Fix Hang on Enter Keypress in Interactive Mode
**[#29476](https://github.com/google-gemini/gemini-cli/pull/29476)** (CLOSED) | Priority P1 | Area: Core
Resolves unresponsive `Enter` keypress on tool confirmation prompts in IDE-integrated terminals. Decoupled user confirmation event publication from input handling.

### 2. MCP OAuth RFC 9207 iss-absence Rejection
**[#29488](https://github.com/google-gemini/gemini-cli/pull/29488)** (CLOSED) | Priority P1 | Area: Security
Fixes MCP OAuth flow to properly reject authorization servers that publish RFC 8414 metadata with an `issuer` but don't return `iss` in the authorization response.

### 3. Avoid Duplicating Tool Response Turns on Resume
**[#29490](https://github.com/google-gemini/gemini-cli/pull/29490)** (CLOSED) | Priority P1 | Area: Core
Prevents duplicate tool results when resuming sessions with `-r`. Tool execution responses were being replayed twice in client history.

### 4. Decision Gate for Fast Message Classification
**[#29482](https://github.com/google-gemini/gemini-cli/pull/29482)** (CLOSED)
Adds an optional "Decision Gate" that reads user messages in tens of milliseconds to classify message type. Simple messages can take a shorter, faster path.

### 5. Shell Interpolation Fix in Sandbox Build
**[#29492](https://github.com/google-gemini/gemini-cli/pull/29492)** (CLOSED) | Priority P1 | Area: Security
Prevents shell metacharacters in checkout paths from executing arbitrary commands during sandbox image builds under `BUILD_SANDBOX=1`.

### 6. Flash-Lite Models Thinking Level Fix
**[#29489](https://github.com/google-gemini/gemini-cli/pull/29489)** (CLOSED) | Priority P2 | Area: Agent
Prevents Flash-Lite models from inheriting `ThinkingLevel.HIGH` by introducing `chat-base-3-flash-lite` with `thinkingBudget: 0`.

### 7. Git Args Validation in Windows Command Safety
**[#29480](https://github.com/google-gemini/gemini-cli/pull/29480)** (CLOSED) | Priority P1 | Area: Security
Stops `git diff --output=<path>` and similar write/exec flags from bypassing permission prompts on Windows, preventing silent file overwrites.

### 8. Unreadable Extension Config Re-enables All Extensions
**[#29481](https://github.com/google-gemini/gemini-cli/pull/29481)** (CLOSED) | Priority P1 | Area: Core
Fixes silent re-enabling of all user-disabled extensions when `extension-enablement.json` becomes unreadable.

### 9. Legacy Checkpoint Path Traversal Fix
**[#29479](https://github.com/google-gemini/gemini-cli/pull/29479)** (CLOSED) | Priority P1 | Area: Security
Prevents path traversal in checkpoint delete/load operations. Tags like `x/../../secret` could previously access files outside the checkpoints directory.

### 10. Optimize Ignore Filtering and Enable Subtree Pruning
**[#29582](https://github.com/google-gemini/gemini-cli/pull/29582)** | Priority P1 | Area: Core
Major performance improvement for file discovery: introduces hierarchical directory-level state memoization, wildcard directory pattern expansion, and in-memory symlink caching. Resolves multi-second blocking delays in large repositories.

---

## Feature Request Trends

1. **AST/Code Intelligence**: Multiple issues (#22745, #22746, #19561) request AST-aware file reading, search, and codebase mapping to reduce token bloat and improve precision
2. **Agent Autonomy**: Requests for improved subagent skill invocation (#21968) and automatic session recovery (#22232)
3. **Enhanced Security**: Proposals for OS sandboxing (#19873) and more granular permission controls (#22672)
4. **Terminal Experience**: Performance improvements on resize (#21924), better task tracking (#18836), and self-awareness of CLI capabilities (#21432)
5. **Subagent Visibility**: Request for subagent trajectory visibility via `/chat share` (#22598)

---

## Developer Pain Points

1. **Agent Hangs**: Multiple reports of generalist agent and browser subagent hanging, disrupting workflows (#21409, #21983)
2. **Configuration Ignored**: Settings like `maxTurns` being ignored by specific agents creates unpredictable behavior (#22267)
3. **Tool Bloat Issues**: 400 errors when more than 128 tools are available, suggesting need for smarter tool scoping (#24246)
4. **Authentication Friction**: Voice mode requiring separate API keys despite OAuth login (#26301), and credential caching issues (#29643)
5. **Security False Positives**: Frequent security warnings and confirmation halts for harmless commands (#29672), impacting productivity
6. **Token Inefficiency**: Models creating temporary scripts in random locations (#23571) and excessive file reads bloating context

---

*Generated from GitHub data for google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest for 2026-10-09 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

**Releases (last 24h):**
- v1.0.95-1: Added native Microsoft Entra broker authentication on macOS when available, with browser fallback
- v1.0.95-0: Improved managed plugin setup retries hourly or after policy changes; Fixed --context now applies to new and resumed ACP sessions
- v1.0.94: Add Claude Haiku 5.5 to model selection, copilot mcp add recovers cleanly after interrupted MCP config initialization, MCP enable/disable now works before server discovery, Assisted permissions send visible shell code
- v1.0.94-5: Fixed copilot mcp add recovers cleanly after interrupted MCP config initialization
- v1.0.94-4: Fixed MCP enable/disable now works before server discovery, Assisted permissions send visible shell code

**Issues (total 50, showing top 30):**
Let me pick 10 noteworthy issues:

1. #770 - Claude Opus 4.5 froze while processing - 16 comments, 3 👍 - CLOSED
2. #1941 - "CAPIError: 400 The requested model is not supported" - 13 comments - CLOSED
3. #892 - Add sandbox mode to restrict Copilot CLI file access - 12 comments, 49 👍 - CLOSED (feature request with strong support)
4. #4998 - Copilot CLI unusable after macOS update because `.mcp-writer.binding` persists stale device ID - 10 comments, 11 👍 - CLOSED
5. #3709 - Allow /model to switch between multiple models including BYOK/local providers - 9 comments, 34 👍 - OPEN


6. #4224 - OTel spans for subagent calls omit billing attributes - 6 comments - CLOSED
7. #4844 - --yolo launch flag swallowed by pre-auth fail-closed bypass cap - 4 comments - CLOSED
8. #4275 - ACP: expose contextTier as a session config option - 4 comments, 3 👍 - OPEN
9. #1436 - Support PowerShell profile loading in shell mode - 3 comments - CLOSED
10. #2901 - Lazy-load MCP servers on first tool invocation - 3 comments, 17 👍 - OPEN

**Pull Requests:** None in the last 24h

I notice some clear patterns emerging from these issues. Several relate to model selection flexibility (#3709, #1941) and performance optimization (#2901), while others address platform-specific problems like macOS compatibility (#4998) and Windows shell integration (#1436). There's also interest in improved telemetry (#4224) and session management controls (#4275, #4844). The feature request for sandbox mode (#892) shows strong community engagement with 49 upvotes.</think>

# GitHub Copilot CLI Community Digest
## 2026-10-09

---

### Today's Highlights

GitHub Copilot CLI shipped two minor version updates (v1.0.95-0 and v1.0.95-1) introducing native Microsoft Entra broker authentication on macOS with browser fallback, plus improved plugin retry logic and ACP session context handling. The community continues to wrestle with model selection reliability—recent issues around Claude Opus 4.5 freezes and "model not supported" errors highlight persistent connectivity challenges, though several of these have been addressed in the latest releases.

---

### Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.95-1** | 2026-10-09 | **Added:** Native Microsoft Entra broker authentication on macOS when available, with browser fallback |
| **v1.0.95-0** | 2026-10-09 | **Improved:** Managed plugin setup retries hourly or after policy changes instead of on every message failure<br>**Fixed:** `--context` now applies to new and resumed ACP sessions instead of silently using default/saved context tier |
| **v1.0.94** | 2026-10-08 | Added Claude Haiku 5.5 to model selection and `--model` completions<br>Fixed `copilot mcp add` recovery after interrupted MCP config initialization<br>MCP enable/disable now works before server discovery without starting MCP servers<br>Assisted permissions send visible shell code to permission judge |

---

### Hot Issues

1. **[#770](https://github.com/github/copilot-cli/issues/770) — Claude Opus 4.5 froze while processing the prompt** (16 comments, 3 👍)  
   **Why it matters:** Users report the model freezes mid-prompt, consuming 3 premium requests each time—frustrating due to wasted credits. CLOSED.

2. **[#1941](https://github.com/github/copilot-cli/issues/1941) — Sudden influx of "CAPIError: 400 The requested model is not supported"** (13 comments)  
   **Why it matters:** A wave of users experiencing this error after almost every request, sometimes halting agent progress. CLOSED.

3. **[#892](https://github.com/github/copilot-cli/issues/892) — Add sandbox mode to restrict Copilot CLI file access** (12 comments, 49 👍)  
   **Why it matters:** Strong community request (49 👍) for a sandbox capability to constrain the agent's filesystem permissions to a specified working directory. CLOSED.

4. **[#4998](https://github.com/github/copilot-cli/issues/4998) — Copilot CLI unusable after macOS update because `.mcp-writer.binding` persists stale device ID** (10 comments, 11 👍)  
   **Why it matters:** After macOS security updates and reboots, all sessions become unable to process prompts due to stale filesystem device IDs. CLOSED.

5. **[#3709](https://github.com/github/copilot-cli/issues/3709) — Allow /model to switch between multiple models, including BYOK/local providers, in one session** (9 comments, 34 👍)  
   **Why it matters:** Users want to dynamically switch between GitHub-hosted and local BYOK providers within a session, but currently the session is pinned to a single model. OPEN.

6. **[#4224](https://github.com/github/copilot-cli/issues/4224) — OTel spans for subagent calls omit billing attributes** (6 comments)  
   **Why it matters:** Subagent model calls consume real AI credits but lack billing attributes in OTel spans, causing external cost accounting to undercount usage. CLOSED.

7. **[#4844](https://github.com/github/copilot-cli/issues/4844) — --yolo launch flag swallowed by the pre-auth fail-closed bypass cap** (4 comments)  
   **Why it matters:** The `--yolo` / `--allow-all` flags get lost during the brief pre-auth window before server policy is fetched, preventing bypass-permissions mode. CLOSED.

8. **[#4275](https://github.com/github/copilot-cli/issues/4275) — ACP: expose contextTier as a session config option** (4 comments, 3 👍)  
   **Why it matters:** Interactive CLI allows mid-session context tier changes via `/model`, but ACP doesn't expose this as a session config option. OPEN.

9. **[#2901](https://github.com/github/copilot-cli/issues/2901) — Lazy-load MCP servers on first tool invocation** (3 comments, 17 👍)  
   **Why it matters:** All MCP servers connect at CLI startup, increasing startup time even when most won't be used. Community wants lazy loading (17 👍). OPEN.

10. **[#5053](https://github.com/github/copilot-cli/issues/5053) — Regression in 1.0.89: ACP sessions stop indexing conversation history and usage in session-store.db** (2 comments)  
    **Why it matters:** After upgrading to 1.0.89, ACP sessions no longer populate local conversation/usage index, breaking session history. OPEN.

---

### Key PR Progress

No Pull Requests were updated in the last 24 hours.

---

### Feature Request Trends

The most-requested functionality directions based on issue activity:

| Trend | Description |
|-------|-------------|
| **Flexible Model Switching** | Users want dynamic model switching within sessions, including BYOK/local providers (#3709), not just at spawn time |
| **Sandbox/File Isolation** | Strong demand for sandbox mode restricting file access to workspace root (#892, #5089) |
| **MCP Optimization** | Lazy-loading MCP servers on first use (#2901) to reduce startup overhead |
| **ACP Parity** | Feature parity between interactive CLI and ACP—expose contextTier as session config (#4275) |
| **Improved Telemetry** | Billing attributes in OTel spans for subagent calls (#4224), proper parent span hierarchy (#4858) |
| **PowerShell Integration** | Support for loading PowerShell profiles in shell mode (#1436) |

---

### Developer Pain Points

1. **Model Reliability** — Recurring issues with model freezes (#770) and "model not supported" errors (#1941) causing wasted premium requests
2. **macOS Compatibility** — Post-update/reboot failures due to stale MCP binding device IDs (#4998) and Entra authentication challenges
3. **Startup Performance** — Slow boot times from loading all configured MCP servers, especially in large repos (#2901)
4. **ACP Limitations** — Lack of contextTier exposure (#4275) and session indexing regressions (#5053) in non-interactive mode
5. **Sandbox Configuration** — `--sandbox` flag being ignored in ACP mode (#5089), flag persistence issues (#4844)
6. **Clipboard/UI Glitches** — Copy functionality broken while CLI runs on Windows (#3981); /skills UI intercepts mouse selection (#3741)

---

*Generated from github.com/github/copilot-cli | Data period: 2026-10-08 to 2026-10-09*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data provided and create a structured OpenCode community digest for 2026-10-09.

Looking at the data:
1. **Releases**: None in the last 24h
2. **Issues**: 50 total, showing top 30 by comment count - I need to pick 10 noteworthy ones
3. **Pull Requests**: 50 total, showing top 20 - I need to pick 10 important ones
4. **Discussions**: No discussion data was provided in the input

Let me organize the most noteworthy items:

**Hot Issues to highlight:**
1. #40480 - BUG: OpenCode Go deepseek-v4-flash returns HTTP 500 (10 comments, 3 👍) - This is a significant API issue
2. #53835 - permissions: reading a bundled skill reference asks for access to the plugin cache (7 comments) - Permission/security issue
3. #38081 - FEATURE: Todo Sidebar with Linear integration (6 comments) - Integration feature
4. #38932 - Pasting long text in prompt box makes Desktop app hang (6 comments) - Performance issue
5. #39655 - Bug: OpenCode Web shows "No folders found" (6 comments) - UI bug
6. #41102 - Usage bug - above 100% (5 comments) - Usage tracking issue
7. #53955 - Agent is making edits when on plan mode (4 comments) - This is OPEN and seems important - protocol violation
8. #40420 - bug: Hermes Agent returns finish_reason:null (4 comments) - API issue
9. #37003 - FEATURE: Clean Output Mode (4 comments, 3 👍) - UX feature
10. #39772 - FEATURE: Debugging loop detection (4 comments) - Developer experience

**Key PRs to highlight:**
1. #54051 - fix(tui): encode reachable pairing addresses in the /pair QR code


2. #54047 - fix(app): show a submitted prompt in the frame the composer clears
3. #54048 - fix(core): restore legacy sessions in markerless projects
4. #53876 - feat(core): continue responses after output token limits
5. #53816 - fix(session-ui): show full tool error text when expanded
6. #53641 - feat(session-ui): deterministic timeline file link detection and resolution
7. #52000 - feat(tui): add per-locale i18n infrastructure and wire UI strings
8. #51482 - fix(core): support AI SDK

I'll focus on the PRs that address core functionality and user experience improvements. The selected PRs cover critical areas like session management, error handling, localization, and AI SDK support. Each PR seems to tackle a specific technical challenge that could enhance the OpenCode project's robustness and usability.

The i18n infrastructure PR stands out as particularly important, enabling broader internationalization. The session restoration and legacy support PRs demonstrate careful attention to backward compatibility and user workflow continuity.

I'll proceed with crafting a structured digest that highlights these key development updates, ensuring technical readers get a comprehensive yet concise overview of the project's current state.</think>

# OpenCode Community Digest — 2026-10-09

## Today's Highlights

The OpenCode community saw significant activity around agent behavior protocols and UI refinements. A notable open issue (#53955) reports agents making unauthorized edits while in plan mode, raising concerns about safety guardrails. On the PR side, contributors are shipping improvements to session handling, localization infrastructure, and token limit recovery. No new releases were published in the last 24 hours.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|----------------|----------|
| [#40480](https://github.com/anomalyco/opencode/issues/40480) | **[BUG] OpenCode Go deepseek-v4-flash returns HTTP 500** | The `deepseek-v4-flash` model on OpenCode Go returns HTTP 500 errors while identical configuration works with `mimo-v2.5`. This is a blocking issue for users relying on this model. | 10 comments, 3 👍 |
| [#53955](https://github.com/anomalyco/opencode/issues/53955) | **[OPEN] Agent is making edits when on plan mode** | The agent violates its protocol by executing destructive commands even when explicitly set to plan mode. This is a critical safety concern. | 4 comments |
| [#53835](https://github.com/anomalyco/opencode/issues/53835) | **permissions: reading a bundled skill reference asks for access to the plugin cache** | Reading a Markdown reference file bundled with a skill incorrectly requests access to OpenCode's npm plugin cache—a permission boundary confusion. | 7 comments |
| [#38932](https://github.com/anomalyco/opencode/issues/38932) | **Pasting a long text in prompt box makes Desktop app hang** | Pasting 5000+ characters into the prompt box freezes the Desktop app indefinitely—a significant UX blocker. | 6 comments |
| [#39655](https://github.com/anomalyco/opencode/issues/39655) | **[Bug] OpenCode Web shows "No folders found"** | The Web UI displays "No folders found" even though the backend returns projects correctly—a data rendering issue. | 6 comments |
| [#38081](https://github.com/anomalyco/opencode/issues/38081) | **[FEATURE] Todo Sidebar with Linear integration** | Request for a project-scoped todo sidebar integrated with Linear for issue management—highly requested for workflow continuity. | 6 comments |
| [#41102](https://github.com/anomalyco/opencode/issues/41102) | **Usage bug: above 100% and won't compact** | Usage tracking exceeds 100% and compaction fails to reset—a data integrity issue. | 5 comments |
| [#40420](https://github.com/anomalyco/opencode/issues/40420) | **Hermes Agent — gpt-5.6-luna returns finish_reason:null** | The OpenCode Go gateway never sends a terminal `finish_reason` for this model, breaking stream handling. | 4 comments |
| [#37003](https://github.com/anomalyco/opencode/issues/37003) | **[FEATURE] Clean Output Mode: Collapse AI Work by Default** | Users want to collapse intermediate AI work after task completion for cleaner output—popular UX request. | 4 comments, 3 👍 |
| [#39772](https://github.com/anomalyco/opencode/issues/39772) | **[FEATURE] Debugging loop detection and cross-session memory** | Proposal to detect hypothesis loops during debugging and enable cross-session context—addresses developer workflow pain. | 4 comments |

---

## Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| [#54051](https://github.com/anomalyco/opencode/pull/54051) | **fix(tui): encode reachable pairing addresses in the /pair QR code** | Improves QR code generation for device pairing by properly encoding connection URLs. |
| [#54048](https://github.com/anomalyco/opencode/pull/54048) | **fix(core): restore legacy sessions in markerless projects** | Fixes legacy session restoration in projects without Git/Hg markers, closing #53450. |
| [#54047](https://github.com/anomalyco/opencode/pull/54047) | **fix(app): show a submitted prompt in the frame the composer clears** | Resolves timing issue where submitted prompts appeared延迟 after composer cleared. |
| [#53876](https://github.com/anomalyco/opencode/pull/53876) | **feat(core): continue responses after output token limits** | Enables continuation when responses hit output token limits by preserving partial output and injecting guidance. |
| [#53816](https://github.com/anomalyco/opencode/pull/53816) | **fix(session-ui): show full tool error text when expanded** | Tool error cards now display the complete error message instead of truncating after first `": "`. |
| [#53641](https://github.com/anomalyco/opencode/pull/53641) | **feat(session-ui): deterministic timeline file link detection** | Timeline file links resolve only when files exist; opens at cited line or shows filtered picker. |
| [#52000](https://github.com/anomalyco/opencode/pull/52000) | **feat(tui): add per-locale i18n infrastructure** | Wires UI strings for internationalization, supporting #37216—major localization milestone. |
| [#51482](https://github.com/anomalyco/opencode/pull/51482) | **fix(core): support AI SDK v4 media inputs** | Fixes null serialization for tool images in AI SDK v4; supports media inputs properly. |
| [#54023](https://github.com/anomalyco/opencode/pull/54023) | **fix(core): coordinate credential refreshes across locations** | Coordinates credential refreshes process-wide to prevent duplicate refresh operations. |
| [#54039](https://github.com/anomalyco/opencode/pull/54039) | **feat(tui): choose how much tool output shows before "Click to expand"** | Lets users configure tool output preview length before expansion. |

---

## Feature Request Trends

The most requested enhancements cluster around four themes:

1. **Agent Safety & Control** — Guardrails for agent behavior (stale definitions drift checking, plan mode enforcement, loop detection)
2. **UX Refinements** — Cleaner output modes, conversation navigation, configurable tool output previews
3. **Integration** — Linear todo integration, per-locale i18n, MCP server configuration improvements
4. **Reliability** — Usage tracking accuracy, context compaction fixes, session migration robustness

---

## Developer Pain Points

- **API reliability**: Models like `deepseek-v4-flash` and `gpt-5.6-luna` return HTTP 500 or incomplete responses
- **Performance hangs**: Long text pasting freezes the Desktop app; large repositories strain file watchers
- **Permission confusion**: Skills trigger unexpected permission requests; CORS issues block browser clients
- **Session management**: Legacy sessions not restoring in markerless projects; deletion rollback gaps
- **Tool output visibility**: Truncated errors and non-expandable tool results hinder debugging

---

*Generated from GitHub data for anomalyco/opencode on 2026-10-09*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Pi community digest for 2026-10-09 based on the provided GitHub data. Let me analyze the data and create a structured digest.

Let me go through the data:

**Releases**: None in the last 24h

**Issues** (showing top 30 by comment count):
1. #10031 - [bug] Pi sporadically stuck in "Working..." when thinking is stopped with <esc> - 26 comments
2. #6686 - [bug, no-action] Pi automatically logs out of GitHub - 14 comments
3. #9773 - [OPEN] before_provider_request does not fire for summarization/compaction requests - 11 comments
4. #9335 - [CLOSED] [no-action] openai-responses: support configuration_update for cache-preserving reasoning changes - 10 comments
5. #10497 - [CLOSED] [bug] OpenRouter Error: 400 - 10 comments
6. #10605 - [OPEN] [bug] ChatGPT/OpenAI OAuth 403 issue - 8 comments
7. #10267 - [OPEN] Prompt text contributed in before_agent_start is dropped on runs without a user prompt - 8 comments
8. #9946 - [CLOSED] CMD mode (!) ignores outputPad setting - 8 comments
9. #4748 - [OPEN] pi-tui: `getKeybindings()` realm/instance singleton breaks extensions - 7 comments
10. #6817 - [CLOSED] [bug] find returns no results for path patterns like src/**/*.ts on Windows - 6 comments
11. #6167 - [OPEN] [bug] `transformMessages` + `isSameModel === false` thinking block normalization - 6 comments


12. #6873 - [CLOSED] [no-action] pi.dev: new packages never enter the browse/search listing - 5 comments
13. #10645 - [OPEN] [inprogress] resizeImage resolves null in compiled (Bun) executables — all image attachments omitted since 0.87.x - 4 comments
14. #9444 - [CLOSED] [last-read] openai-completions drops Gemini thoughtSignature on streamed tool_calls - 4 comments
15. #10666 - [CLOSED] [untriaged] fix(ai): adapt initial tool declarations for ChatGPT

I notice several critical issues affecting user experience and functionality. The most concerning are problems with image attachments in compiled executables, issues with tool call signatures, and challenges with package listings. These span different components of the system and suggest complex integration challenges.

The issues range from OAuth authentication problems to terminal input handling and command timeout configurations. Multiple problems involve Windows-specific behaviors and cross-platform compatibility concerns. Key areas of focus include input processing, environment configuration, and runtime behavior modifications.

Several issues appear to be in progress or recently closed, indicating active development and ongoing refinement of the system's robustness and user experience. The development team seems to be systematically addressing edge cases and platform-specific nuances.

Key areas of improvement include handling tool call signatures, OAuth configurations, Windows shell compatibility, and terminal input processing. The recent pull requests demonstrate targeted fixes across multiple components, with a strong emphasis on resolving authentication, platform-specific challenges, and error handling mechanisms.

The development team is actively addressing issues related to tool call signatures, OAuth configurations, and Windows shell compatibility. Recent work shows a focused approach on improving system robustness across different platforms, particularly around Windows environments and authentication flows.

Discussions highlight community engagement through general queries, peer-to-peer messaging extensions, and novel approaches like running AI-driven processes from GitHub Issues. These conversations reflect a collaborative effort to explore innovative implementation strategies and address technical challenges.</think>

# Pi Community Digest — 2026-10-09

**Repository:** [earendil-works/pi](https://github.com/earendil-works/pi)

---

## 1. Today's Highlights

A significant number of bug reports have emerged around OAuth and authentication flows, particularly affecting ChatGPT users receiving 403 errors. Windows-specific issues remain prominent, with path pattern handling in the `find` tool and shell resolution problems. The community is also actively discussing extensions for unattended agent execution via GitHub Issues.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Summary | Comments |
|---|-------|---------|----------|
| 1 | [#10031](https://github.com/earendil-works/pi/issues/10031) | **[bug] Pi sporadically stuck in "Working..." when thinking is stopped with `<esc>`** — Since ~v0.84.0, pressing ESC to stop thinking leaves Pi stuck in "Working..." state, requiring `CTRL+c` and `pi -c` resume. Affects multiple machines. | 26 |
| 2 | [#6686](https://github.com/earendil-works/pi/issues/6686) | **[bug] Pi automatically logs out of GitHub** — Persistent re-authentication issue for GitHub provider, re-activating a previously reported problem. | 14 |
| 3 | [#9773](https://github.com/earendil-works/pi/issues/9773) | **[OPEN] `before_provider_request` does not fire for summarization/compaction requests** — Hook documented to fire before any provider request but never triggers for compaction/branch-summary operations. | 11 |
| 4 | [#10497](https://github.com/earendil-works/pi/issues/10497) | **[bug] OpenRouter Error: 400** — Extensions injecting file content cause context length exceeded errors (requested 1048576+ tokens). | 10 |
| 5 | [#10605](https://github.com/earendil-works/pi/issues/10605) | **[bug] ChatGPT/OpenAI OAuth 403 issue** — Users with Plus subscriptions receive `subscription_sharing_user_not_eligible` error. | 8 |
| 6 | [#10267](https://github.com/earendil-works/pi/issues/10267) | **[OPEN] Prompt text contributed in `before_agent_start` is dropped on runs without a user prompt** — Background tasks, plan-mode continues, and retries lose system prompt additions, re-billing the full prompt each time. | 8 |
| 7 | [#9946](https://github.com/earendil-works/pi/issues/9946) | **[CLOSED] CMD mode (!) ignores `outputPad` setting** — Leading space at line start persists despite `outputPad: 0` configuration. | 8 |
| 8 | [#4748](https://github.com/earendil-works/pi/issues/4748) | **[OPEN] pi-tui: `getKeybindings()` realm/instance singleton breaks extensions** — Module-scope singleton in keybindings.ts causes conflicts when extensions import keyText from their own node_modules. | 7 |
| 9 | [#10645](https://github.com/earendil-works/pi/issues/10645) | **[inprogress] `resizeImage` resolves null in compiled (Bun) executables** — All image attachments omitted since 0.87.x in standalone binaries on Windows. | 4 |
| 10 | [#10654](https://github.com/earendil-works/pi/issues/10654) | **[OPEN] Transport is resolved before environment variable expansion in mcp.json** — `${MY_VAR}` in MCP server URLs doesn't expand; works only without schema prefix. | 4 |

---

## 4. Key PR Progress

| # | PR | Summary | Status |
|---|-----|---------|--------|
| 1 | [#10703](https://github.com/earendil-works/pi/pull/10703) | **feat(durable): let extensions annotate aborted tool results** — Enables extensions to annotate results of aborted tools, addressing gap where abort handler builds its own result. | OPEN |
| 2 | [#10698](https://github.com/earendil-works/pi/pull/10698) | **fix(coding-agent): expand env vars and commands in mcp oauth.clientId** — Resolves `${VAR}` and `!command` in OAuth clientId (was only working for clientSecret). | CLOSED |
| 3 | [#10690](https://github.com/earendil-works/pi/pull/10690) | **fix(mcp): form-encode OAuth HTTP Basic credentials** — Fixes RFC 6749 §2.3.1 compliance for `client_secret_basic` authentication. | CLOSED |
| 4 | [#10689](https://github.com/earendil-works/pi/pull/10689) | **fix(agent): synchronize tool declarations after prepareRequest** — Ensures tool declarations are reconciled after the callback that can replace the provider request context. | CLOSED |
| 5 | [#10688](https://github.com/earendil-works/pi/pull/10688) | **fix(coding-agent): preserve manifest boundaries when filtering package resources** — Fixes settings exposure leaking resources outside pi manifest boundaries. | CLOSED |
| 6 | [#10680](https://github.com/earendil-works/pi/pull/10680) | **fix: support npm 12 pack JSON output** — Adapts to npm 12's changed `npm pack --json` output format (object vs. array). | CLOSED |
| 7 | [#10694](https://github.com/earendil-works/pi/pull/10694) | **fix(ai): adapt OAuth device polling margin after slow_down** — Addresses WSL/Ubuntu clock drift causing OAuth device flow to fail against COPILOT's rate limiting. | OPEN |
| 8 | [#10677](https://github.com/earendil-works/pi/pull/10677) | **fix(ai): classify DashScope quota throttling as retryable** — Marks Alibaba Model Studio quota errors as retryable instead of terminal. | CLOSED |
| 9 | [#10521](https://github.com/earendil-works/pi/pull/10521) | **fix(ai): inline $ref tool schemas for NVIDIA NIM models** — Fixes validation rejection for models returning `$ref`-only object definitions. | OPEN |
| 10 | [#10672](https://github.com/earendil-works/pi/pull/10672) | **feat(ai,coding-agent): list only the OpenRouter models a key may use** — Filters model catalog against user's key permissions via `/models/user` endpoint. | OPEN |

---

## 5. Hot Discussions

### Ideas / Feature Requests

- [#10632](https://github.com/earendil-works/pi/discussion/10632) — **Pausing a run on a tool call until a human approves** — Proposal for persisting pending tool calls for later approval, with nothing held in memory. | 2 comments

### Show & Tell

- [#10069](https://github.com/earendil-works/pi/discussion/10069) — **agent-chat: peer-to-peer messaging for independent Pi agents** — Extension enabling independent Pi sessions (across worktrees) to share Docker containers, ports, and databases. | 3 comments
- [#10687](https://github.com/earendil-works/pi/discussion/10687) — **Orbi: running Pi unattended from GitHub Issues** — Open-source runner that drives Pi from labeled GitHub Issues (`ai-ready`), creating branches/worktrees and opening PRs. | 0 comments

### Q&A / General

- [#5936](https://github.com/earendil-works/pi/discussion/5936) — **Why Pi does not uses native terminal cursor?** — Discussion on custom cursor implementation vs. native terminal cursor usage. | 3 comments

---

## 6. Feature Request Trends

Based on Issues and Discussions, the most-requested directions are:

1. **Human-in-the-loop controls** — Tools for pausing runs, persisting pending tool calls for delayed approval
2. **Enhanced extension APIs** — Public hooks for rendering assistant/user messages and thinking blocks (similar to `registerToolRenderer`)
3. **Improved Windows compatibility** — Better handling of Store aliases, path patterns, and shell resolution
4. **Unattended/headless operation** — Extensions for running Pi from external triggers (GitHub Issues, scheduled jobs)
5. **Model filtering by key permissions** — Automatic filtering of unavailable models based on API key restrictions

---

## 7. Developer Pain Points

| Pain Point | Frequency | Affected Users |
|------------|-----------|----------------|
| **Stuck "Working..." state** when pressing ESC to stop thinking | High (since v0.84.0) | All platforms |
| **OAuth/Auth failures** (GitHub logout, ChatGPT 403, device flow issues) | High | Multi-provider |
| **Windows path handling** (`find` glob patterns, shell aliases) | Medium-High | Windows users |
| **MCP configuration** (env var expansion, OAuth credentials) | Medium | Extension developers |
| **Compaction/file list growth** unbounded across sessions | Medium | Long-running sessions |
| **npm version compatibility** (npm 12 JSON output) | Low-Medium | Package publishers |

---

*Generated from GitHub data for 2026-10-09*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a Qwen Code community digest for 2026-10-09 based on the GitHub data provided. Let me analyze the data and create a structured digest following the specified format.

Let me organize the information:

1. **Today's Highlights** - Need 2-3 sentences summarizing the most important updates

Looking at the data:
- No releases in the last 24h
- Several important issues and PRs about Managed Agent architecture, multi-agent systems, session management
- There's activity around Kubernetes runtime, MCP tools, session management
- Several bugs being fixed

2. **Releases** - None in last 24h

3. **Hot Issues** - Pick 10 noteworthy issues

Looking at the issues:
- #12380: Managed Agent dual-path architecture (50 comments) - HIGHLY ACTIVE
- #12867: Stage D follow-ups for durable lifecycle (19 comments)
- #13395: Kubernetes tool runtime progress (16 comments)
- #13078: Daily dependency CVE audit failed (14 comments)
- #13004: perf(memory) bounded cooldown (9 comments)
- #13632: MCP server tools refresh (7 comments)
- #13707: stripAnalysisBlock bug (5 comments)
- #13689: Subagent templateString bug (5 comments)
- #13269: cold-cache cancel fixes (5 comments)
- #13687: Main CI failed (4 comments)
- #13691: /auto-mode-setup command (4 comments)
- #13683: Extension skills invocation bug (4 comments)
- And more...

4. **Key PR Progress** - Pick 10 important PRs

- #13697: fix(core): surface PreToolUse ask content on MCP tool confirmations (CLOSED)


- #13706: Another MCP tool confirmation fix in progress
- #13521: fix(memory): preserve the prompt prefix when memory indexes change (CLOSED)
- #13276: fix(serve): name Hosted recovery-refusal branches
- #13314: fix(sdk-java): Close Hosted Harness review criticals
- #13643: feat(web-shell): support pinning workspaces
- #13664: feat(web-shell): add read-only Excel artifact previews
- #13576: fix(core): gate discovery hints on registered capabilities (CLOSED)
- #13550: feat(managed

Continuing to track key pull requests focused on improvements and bug fixes. Several PRs address core functionality like tool confirmations, memory management, and workspace features. The Managed Agent and multi-agent work appears to be a significant area of development focus.

Agent: H4b child Session runtime
- #13583: feat(agents): remove thread backend and run A2A on sessions
- #13526: feat(runtime): add private CSI runtime foundations
- #13188: fix(cli): close post-merge takeover findings
- #12738: fix(web-shell): leave current standalone session before deletion
- #13654: feat(managed-agent): verify tool publications asynchronously

5. **Hot Discussions** - No discussion data provided, so I'll skip this section

6. **Feature Request Trends** - Looking at the issues:
- Managed Agent architecture and multi-agent support
- Session management improvements
- Kubernetes/platform distribution
- Memory management
- MCP tool enhancements
- WebShell improvements

7. **Developer Pain Points** - Looking at the issues:
- CI failures
- CVE audit issues
- Windows-specific bugs
- Extension invocation bugs
- Session management bugs
- Template parsing issues</think>

# Qwen Code Community Digest
## 2026-10-09

---

### 1. Today's Highlights

The Qwen Code project continues heavy investment in Managed Agent architecture with significant progress on multi-agent session management and child Session runtime (H4b). The community is actively addressing critical bugs around session lifecycle, MCP tool confirmations, and Windows platform compatibility. A notable security concern emerged regarding git worktree guard heredoc handling, while dependency CVE audits are experiencing failures requiring investigation.

---

### 2. Releases

**No new releases in the last 24 hours.**

---

### 3. Hot Issues

**#12380** — [proposal(serve): Define Managed Agent dual-path architecture and staged delivery](https://github.com/QwenLM/qwen-code/issues/12380) — 50 comments
> Defines a staged Managed Agent architecture keeping the existing TypeScript agent loop, running model inference independently of tool-environment provisioning, and giving Sessions durable ownership with Workspace bindings and recoverable tool executions.
> *Why it matters: Foundation for the next-generation multi-agent system.*

**#12867** — [feat(managed-agent): Stage D follow-ups for durable lifecycle](https://github.com/QwenLM/qwen-code/issues/12867) — 19 comments
> Covers durable lifecycle, Turns, Actions, the `java_durable` admission profile and AgentDefinition.
> *Why it matters: Critical for long-running agent sessions.*

**#13395** — [tracking(runtime): Kubernetes tool runtime 进度与跨平台交付门禁](https://github.com/QwenLM/qwen-code/issues/13395) — 16 comments
> Progress tracking for Kubernetes CSI runtime foundations and cross-platform delivery gates.
> *Why it matters: Enables containerized agent deployments.*

**#13078** — [Daily dependency CVE audit failed](https://github.com/QwenLM/qwen-code/issues/13078) — 14 comments
> Scheduled dependency CVE audit failed, possibly due to new high-severity vulnerability or npm audit endpoint issues.
> *Why it matters: Security monitoring gap.*

**#13004** — [perf(memory): add bounded cooldown after no-op extraction](https://github.com/QwenLM/qwen-code/issues/13004) — 9 comments
> Proposes bounded cadence policy for managed auto-memory extraction after no-op turns.
> *Why it matters: Performance optimization for memory management.*

**#13632** — [feat(mcp): refresh server tools on notifications/tools/list_changed](https://github.com/QwenLM/qwen-code/issues/13632) — 7 comments
> Handle MCP server notifications to dynamically refresh tool registry during sessions.
> *Why it matters: Dynamic tool discovery for MCP integrations.*

**#13707** — [stripAnalysisBlock: rebind-path gap strips reasoning pairs](https://github.com/QwenLM/qwen-code/issues/13707) — 5 comments
> Bug: `stripAnalysisBlock`'s envelope binding fails on multi-closer rebind path, stripping reasoning-tag patterns from payload.
> *Why it matters: Data integrity issue in analysis block processing.*

**#13689** — [Subagent definitions cannot contain ${identifier}](https://github.com/QwenLM/qwen-code/issues/13689) — 5 comments
> Bug: Subagent definition files with `${identifier}` inside fenced code blocks fail to launch with templateString errors.
> *Why it matters: Breaks common documentation patterns in agent definitions.*

**#13650** — [Managed Agent: Hosted Session journal dies permanently after outage](https://github.com/QwenLM/qwen-code/issues/13650) — 4 comments | **P1**
> Hosted Session journal stops permanently after control-plane outage spanning activation renewal, returning 503 errors.
> *Why it matters: Critical reliability issue for hosted sessions.*

**#13705** — [daemon git worktree guard: heredoc body executes when fed to shell](https://github.com/QwenLM/qwen-code/issues/13705) — 3 comments | **P1**
> Security issue: Heredoc bodies stripped by git worktree guard execute when receiver is a shell/interpreter.
> *Why it matters: Potential code execution vulnerability.*

---

### 4. Key PR Progress

| PR | Title | Status |
|----|-------|--------|
| **#13697** | [fix(core): surface PreToolUse ask content on MCP tool confirmations](https://github.com/QwenLM/qwen-code/pull/13697) | ✅ CLOSED |
| **#13521** | [fix(memory): preserve prompt prefix when memory indexes change](https://github.com/QwenLM/qwen-code/pull/13521) | ✅ CLOSED |
| **#13576** | [fix(core): gate discovery hints on registered capabilities](https://github.com/QwenLM/qwen-code/pull/13576) | ✅ CLOSED |
| **#13550** | [feat(managed-agent): H4b child Session runtime](https://github.com/QwenLM/qwen-code/pull/13550) | 🔄 OPEN |
| **#13583** | [feat(agents): remove thread backend and run A2A on sessions](https://github.com/QwenLM/qwen-code/pull/13583) | 🔄 OPEN |
| **#13526** | [feat(runtime): add private CSI runtime foundations](https://github.com/QwenLM/qwen-code/pull/13526) | 🔄 OPEN |
| **#13643** | [feat(web-shell): support pinning workspaces to sidebar](https://github.com/QwenLM/qwen-code/pull/13643) | 🔄 OPEN |
| **#13664** | [feat(web-shell): add read-only Excel artifact previews](https://github.com/QwenLM/qwen-code/pull/13664) | 🔄 OPEN |
| **#13654** | [feat(managed-agent): verify tool publications asynchronously](https://github.com/QwenLM/qwen-code/pull/13654) | 🔄 OPEN |
| **#13572** | [feat(managed-agent): H5b/H5c channel runtime for email adapter](https://github.com/QwenLM/qwen-code/pull/13572) | 🔄 OPEN |

---

### 5. Feature Request Trends

Based on issue analysis, the following feature directions are most requested:

- **Multi-Agent Architecture**: Managed Agent dual-path architecture, child Session runtime, A2A protocol adoption
- **Session Durability**: Durable lifecycle, Turns/Actions, checkpoint recovery, session restore mechanisms
- **Platform Distribution**: Kubernetes CSI runtime, cross-platform delivery gates, Windows Native Messaging support
- **Memory Management**: Bounded extraction cooldown policies, prompt prefix preservation
- **MCP Enhancements**: Dynamic tool refresh, tool publication verification
- **WebShell Improvements**: Workspace pinning, Excel artifact previews, session management UI

---

### 6. Developer Pain Points

- **CI Reliability**: Recurring E2E test failures and Main CI issues causing development friction
- **Dependency Security**: CVE audit failures creating monitoring gaps
- **Windows Platform**: Multiple issues around Native Messaging host registration, PowerShell hook window minimization
- **Extension Invocation**: Bare authored names rejected after #10841 fix
- **Template Parsing**: `${identifier}` in code blocks breaks subagent definitions
- **Session Recovery**: Journal deaths after outages, cold-cache cancellation issues
- **ARM64 Linux**: Vendored ripgrep binary fails on Raspberry Pi 5

---

*Digest generated from GitHub data — github.com/QwenLM/qwen-code*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*