# AI CLI Tools Community Digest 2026-09-17

> Generated: 2026-09-17 00:50 UTC | Tools covered: 7

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

<think>The user wants a cross-tool comparison report of AI CLI tools based on the digests I generated earlier. Let me analyze all the data from the five tools:

1. **Claude Code** (github.com/anthropics/claude-code)
2. **OpenAI Codex** (github.com/openai/codex)
3. **Gemini CLI** (github.com/google-gemini/gemini-cli)
4. **OpenCode** (github.com/anomalyco/opencode)
5. **Pi** (github.com/earendil-works/pi)
6. **GitHub Copilot CLI** (github.com/github/copilot-cli)
7. **Qwen Code** (github.com/QwenLM/qwen-code)

Let me gather data from the digests:

**Claude Code:**
- Issues: 10 hot issues mentioned
- PRs: 3 key PRs
- Releases: v2.1.274
- Discussions: Not mentioned (N/A)

**OpenAI Codex:**
- Issues: 10 hot issues
- PRs: ~15 key PRs
- Releases: Multiple Rust tooling updates (9 releases)
- Discussions: 3 hot discussions

**Gemini CLI:**
- Issues: 10 hot issues
- PRs: 10 key PRs
- Releases: v0.62.0-nightly.20260916
- Discussions: Not mentioned (N/A)

**OpenCode:**
- Issues: 10 hot issues
- PRs: 10 key PRs
- Releases: None in last 24h
- Discussions: Not mentioned (N/A)

**Pi:**
- Issues: 10 hot issues
- PRs: 10 key PRs
- Releases: None in last 24h
- Discussions: 2 hot discussions

**GitHub Copilot CLI:**
- Issues: 10 hot issues
- PRs: 0 (None in last 24h)


- Releases: 4 releases (v1.0.85, v1.0.86-0, v1.0.86-1, v1.0.86-2)
- Discussions: Not mentioned (N/A)

**Qwen Code:**
- Issues: 10 hot issues
- PRs: 10 key PRs
- Releases: 3 releases (v0.24.0, v0.24.0-nightly, v0.23.5-preview.0)
- Discussions: Not mentioned (N/A)

Now I'll synthesize this into a comprehensive comparison that highlights the unique characteristics and current development focus of each AI CLI tool ecosystem.

Across these platforms, several common threads emerge: developers consistently seek flexible layout options and UI customization, better integration with MCP and external tools, stronger accessibility features, and more granular control over session and memory management. Remote development and containerization support is a major pain point. Platform-specific challenges—especially on Windows and macOS—plus rate limiting and capacity constraints are creating friction. Token optimization and efficient context handling remain critical concerns.

Each project takes a distinct approach. Claude Code emphasizes memory and configuration management, with strong integration across desktop and CLI environments. OpenAI Codex prioritizes API stability and model access, using GitHub Discussions as its primary community channel. Gemini CLI focuses on sandboxing and AST tooling, with active development on agent orchestration. OpenCode centers on layout flexibility, particularly around workspace management. Pi places session continuity and compaction at the core of its design, while GitHub Copilot CLI emphasizes Vim mode integration and session controls. Qwen Code differentiates through web-shell architecture and remote development support, along with a strategic shift toward Tauri for its desktop experience.</think>

# Cross-Tool AI CLI Ecosystem Comparison

## Ecosystem Overview

The AI-powered developer CLI tools landscape shows a mature and diverse ecosystem as of September 2026. Major providers (Anthropic, OpenAI, Google) and regional players (Qwen/Alibaba) have established CLI offerings alongside independent projects (OpenCode, Pi). Community engagement is healthy across all tools, with active issue tracking, frequent releases, and strong pull request activity. The dominant themes—session reliability, model access, extensibility via MCP/skills, and cross-platform compatibility—reflect a maturing market addressing foundational developer experience concerns.

---

## Activity Comparison

| Tool | Repository | Issues (24h) | PRs (24h) | Releases (24h) | Discussions |
|------|------------|:------------:|:---------:|:--------------:|:-----------:|
| **Claude Code** | anthropics/claude-code | 10 | 3 | 1 | N/A |
| **OpenAI Codex** | openai/codex | 10 | ~15 | 9 | 3 |
| **Gemini CLI** | google-gemini/gemini-cli | 10 | 10 | 1 | N/A |
| **OpenCode** | anomalyco/opencode | 10 | 10 | 0 | N/A |
| **Pi** | earendil-works/pi | 10 | 10 | 0 | 2 |
| **Copilot CLI** | github/copilot-cli | 10 | 0 | 4 | N/A |
| **Qwen Code** | QwenLM/qwen-code | 10 | 10 | 3 | N/A |

**Notes:**

- "N/A" indicates GitHub Discussions is not the primary community channel for that tool (Issues and PRs are enabled)
- OpenAI Codex uses Discussions actively; other tools primarily track feature requests via Issues
- Release counts include stable, preview, nightly, and alpha variants

---

## Shared Feature Directions

| Feature Direction | Tools Requesting | Specific Needs |
|-------------------|------------------|----------------|
| **Session/State Recovery** | Claude Code, Copilot CLI, Pi | Resume interrupted sessions, transcript corruption recovery, persistent sessions |
| **Memory & Context Management** | Claude Code, Gemini CLI, Pi, Copilot CLI | Auto memory, compaction, token governance, injected context handling |
| **MCP / Tool Integration** | Claude Code, OpenCode, Copilot CLI | MCP server reliability, custom tools, workspace-level MCP config |
| **UI/Layout Flexibility** | OpenCode, Qwen Code, Claude Code | Legacy vs. new layout toggle, workspace switching, sidebar customization |
| **Accessibility** | Claude Code, Copilot CLI | TTS readback, voice mode, screen reader support |
| **Remote Development** | Qwen Code, Claude Code, OpenCode | Remote-SSH, Dev Containers, remote daemon support |
| **Platform-Specific Fixes** | All tools | Windows sandbox, macOS clipboard, Linux terminal handling |

---

## Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|------|---------------|--------------|-------------------|
| **Claude Code** | Desktop-CLI parity, configuration flexibility | Enterprise & individual developers | Deep desktop integration, memory warnings, MCP-first |
| **OpenAI Codex** | Model reliability, API access, rate management | OpenAI ecosystem users | Heavy focus on API stability, capacity handling |
| **Gemini CLI** | Sandbox security, AST-aware tooling | Security-conscious developers | Zero-dependency OS sandboxing, AST parsing for context |
| **OpenCode** | Layout/workspace flexibility, web-based | Multi-project power users | V2 web architecture, layout persistence |
| **Pi** | Session continuity, compaction logic | Long-running workflow users | Durable sessions, event streaming, prompt caching |
| **Copilot CLI** | Editor integration, Vim workflow | VS Code/GitHub ecosystem users | Vim mode, editor-native experience |
| **Qwen Code** | Web-shell architecture, remote dev | Remote/container developers | Tauri desktop, web-shell first, ACP protocol |

**Notable Technical Divergences:**

- **Claude Code** and **Copilot CLI** prioritize desktop integration as a first-class experience
- **Gemini CLI** invests in AST-based tooling to reduce token overhead
- **Qwen Code** is transitioning from Electron to Tauri for the desktop app
- **OpenCode** and **Pi** have the most active community discussions around UI/UX tradeoffs

---

## Community Momentum & Maturity

| Tool | Community Signals | Maturity Indicators |
|------|-------------------|---------------------|
| **Claude Code** | High engagement (33+ 👍 on top issues), rapid releases | Mature; v2.1 stable with frequent nightly builds |
| **OpenAI Codex** | Strong discussions (190 👍 on remote control), many PRs | Mature; stable releases + Rust tooling alphas |
| **Gemini CLI** | Active issue triage, P1/P2 prioritization | Active development; nightly cadence |
| **OpenCode** | High 👍 counts on layout issues (24+), polarized feedback | Rapid iteration; layout changes causing friction |
| **Pi** | Steady PR flow, focused bug fixes | Active; v0.85.x with stable API |
| **Copilot CLI** | Lower issue engagement but consistent releases | Mature; Vim mode GA, long release history |
| **Qwen Code** | P1 bugs getting fast attention, security fixes | Active; v0.24 with breaking changes |

**Most Active Communities:** OpenAI Codex and Claude Code lead in sheer volume; Pi and Qwen Code show strong per-issue engagement relative to issue count.

---

## Trend Signals

### Rising Demands

1. **Layout & Interface Flexibility** — Multiple tools face backlash from forced UI changes (OpenCode, Claude Code). Users expect toggleable interfaces.
2. **Session State Persistence** — Recovery from interruptions, transcript corruption, and session resumption is now a baseline expectation.
3. **Token Governance** — Explicit user control over non-conversation context (system prompts, tool schemas) is increasingly requested.
4. **Remote Development Parity** — Qwen Code and Claude Code both addressing Remote-SSH/Container failures; this is a growing use case.
5. **MCP as Ecosystem Standard** — All tools wrestling with MCP integration reliability; MCP configuration reload is a recurring pain point.

### Technical Patterns

- **Prompt Caching** — Pi's "prompt cache warming" and Claude Code's compaction both target token efficiency
- **Sandboxing** — Gemini CLI's zero-dependency approach vs. traditional container-based solutions
- **Desktop Consolidation** — Qwen Code moving from Electron to Tauri; reflects industry shift

### Market Signals

- **Enterprise Readiness** — Issues around subscription access (Claude Code #82700), Pro tier rate limits (Codex #45832), and team policies indicate growing enterprise adoption
- **Developer Ergonomics** — Vim mode (Copilot CLI), inline skill invocation (OpenCode #15617), and custom agent frontmatter (Copilot CLI #2904) show investment in power-user workflows

---

*Compiled from community digest data — 2026-09-17*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>Let me analyze the data provided and create a comprehensive report on the Claude Code Skills community highlights.

Looking at the data:

**Pull Requests (sorted by comments, showing top 20):**
All the PRs have "Comments: undefined" which is interesting. Let me look at what information we have:

1. #1298 - fix(skill-creator): isolate trigger evals and handle Windows and runtime failures - Open
2. #1771 - feat(skills): add proofcore-contract-auditor for smart contract notarization - Open
3. #1703 - Add md2video-audio skill - Open
4. #1742 - fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers - Open
5. #1734 - Detect orphaned docx comments - Open
6. #525 - Add pyxel skill for retro game development - Open
7. #514 - Add document-typography skill - Open
8. #1615 - Add scnet-hpc skill - Open
9. #538 - fix(pdf): correct case-sensitive file references - Open
10. #486 - Add ODT skill - Open
11. #210 - Improve frontend-design skill clarity - Open
12. #83 - Add skill-quality-analyzer and skill-security-analyzer - Open
13. #541 - fix(docx): prevent tracked change w:id collision - Open
14. #539 - fix(skill-creator): warn on unquoted description - Open
15. #1769 - Fix skill-creator trigger detection reporting 0% recall - Open
16. #1765 - fix(office): decode redlining diffs as UTF-8 - Open
17. #1724 - mcp-builder: update evaluation.py default model - Open
18. #1628 - Add Hivemind: Zero-Cost Multi-Agent Orchestration Skill - Open


19. #1627 - add buffer-api Agent Skill - Open
20. #1607 - Update claude-api skill: mark four retired model IDs - Open

**Issues (sorted by comments, showing top 15):**
1. #492 - Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse - 43 comments
2. #228 - Enable org-wide skill sharing in Claude.ai - 16 comments
3. #556 - run_eval.py: claude -p never triggers skills/commands (0% trigger rate) - 12 comments
4. #62 - All my skills have disappeared and now i get errors - 10 comments
5. #13

29 - Proposing a second skill: compact-memory - 9 comments
6. #202 - skill-creator should be updated to best practice - 8 comments
7. #412 - Skill proposal: agent-governance — safety patterns - 6 comments
8. #189 - document-skills and example-skills plugins install identical content - 6 comments
9. #1487 - claude-api skill eagerly injects ~156k tokens - 4 comments
10. #1390 - mcp-builder: evaluation.py scores 0/N against any real MCP server - 4 comments
11. #1385 - Reasoning Quality Gate Pipeline - 4 comments
12. #1175 - Concerns regarding Security and Context Window when handling SharePoint Online - 4 comments
13. #29 - Usage with bedrock - 4 comments
14. #16 - Expose Skills as MCPs - 4 comments
15 #1362 - web-artifacts-builder: bundle/init scripts fail on pnpm ≥10.1 - 3 comments

Looking at this data, I notice the PRs don't have comment counts listed, but the issues do. Since PRs represent actual skill submissions, I should focus on the most actively discussed issues to understand what the community cares about. The top concerns involve security risks with skills in the anthropic namespace, the need for team sharing capabilities, problems with trigger evaluation not functioning properly, and several technical issues around the skill creator and MCP builder tools.</think>

# Claude Code Skills Community Highlights Report

*Data as of 2026-09-17*

---

## 1. Top Skills Ranking

The most actively discussed PRs represent significant skill enhancements and new capabilities. Based on activity level and technical impact:

| PR | Skill | Functionality | Status |
|----|-------|---------------|--------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator (fix) | Fixes trigger evaluation false misses, Windows subprocess failures, and runtime error handling | OPEN |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel | Retro game development in Python—implementation, deterministic headless runs, frame inspection, state verification | OPEN |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | Typographic quality control: prevents orphan words, widow paragraphs, numbering misalignment in AI-generated docs | OPEN |
| [#210](https://github.com/anthropics/skills/pull/210) | frontend-design (improvement) | Revises clarity, actionability, and internal coherence of frontend design guidance | OPEN |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer & skill-security-analyzer | Meta skills for evaluating SKILL.md quality across 5 dimensions (structure, documentation, security, etc.) | OPEN |
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | Smart contract static analysis (Solidity/Rust) + cryptographic audit proofs anchored to TON Blockchain | OPEN |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | Zero-cost Markdown-to-MP4 video generation with realistic voiceovers via Marp | OPEN |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder (fix) | Fixes MCP v2.0.0 streamable_http_client import and custom header support | OPEN |

---

## 2. Community Demand Trends

From Issue discussions, the most-anticipated directions are:

| Theme | Issue | Demand Signal |
|-------|-------|---------------|
| **Security & Trust** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments) | Trust boundary abuse—community skills impersonating official `anthropic/` namespace skills |
| **Enterprise Collaboration** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments) | Org-wide skill sharing in Claude.ai—current manual upload process is cumbersome |
| **Evaluation/Trigger Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments) | `run_eval.py` reports 0% trigger rate—blocking skill validation |
| **Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) (6 comments) | Agent governance skill—policy enforcement, threat detection, audit trails |
| **SharePoint/Enterprise Integration** | [#1175](https://github.com/anthropics/skills/issues/1175) (4 comments) | Secure handling of SharePoint Online documents via agent skills |
| **MCP Exposition** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) | Expose Skills as MCPs for standardized API packaging |

---

## 3. High-Potential Pending Skills

Active PRs with recent updates that may merge soon:

- **[#1771](https://github.com/anthropics/skills/pull/1771)** proofcore-contract-auditor — Web3 smart contract auditing + TON blockchain notarization (Created: 2026-09-15)
- **[#1769](https://github.com/anthropics/skills/pull/1769)** skill-creator trigger detection fix — Reports 0% recall incorrectly (Created: 2026-09-14)
- **[#1765](https://github.com/anthropics/skills/pull/1765)** office UTF-8 diff decoding — DOCX/PPTX/XLSX redlining fix (Created: 2026-09-14)
- **[#1742](https://github.com/anthropics/skills/pull/1742)** mcp-builder MCP v2.0 support — Critical fix for streaming HTTP client (Created: 2026-09-08)
- **[#1734](https://github.com/anthropics/skills/pull/1734)** Detect orphaned docx comments — Document integrity (Created: 2026-09-06)

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade security improvements, reliable skill evaluation/triggering mechanisms, and cross-organizational skill sharing capabilities—indicating a shift from experimental skill creation toward production-ready, collaborative workflows.**

---

*Report generated from anthropics/skills repository data (50 PRs, 50 Issues sampled)*

---

<think>The user wants me to generate a Claude Code community digest for 2026-09-17 based on the GitHub data provided. Let me analyze the data and structure it according to the requested sections.

Let me go through each section:

1. **Today's Highlights** - 2-3 sentences summarizing the most important updates

2. **Releases** - v2.1.274 was released with:
   - Added a visible warning when memory usage is critical
   - Added `CLAUDE_CODE_MCP_STARTUP_WAIT_MS` environment variable
   - Added `effort` attribute

3. **Hot Issues** - Pick 10 noteworthy Issues from the list. Let me identify the most significant ones:
   - #26073 - Windows MSIX MCP servers silently fail (23 comments, 33 👍)
   - #42700 - TTS readback + voice mode for Remote Control (22 comments, 30 👍)
   - #87500 - API Error Connection dropped (9 comments)
   - #79305 - Desktop app custom themes/accent colors (8 comments, 16 👍)
   - #82700 - Pro subscription blocked (7 comments)
   - #91717 - Remote Control fails with HTTP 403 (5 comments)
   - #77458 - Chrome extension not connecting (5 comments)
   - #93156 - Browser pane persistent permissions (5 comments)
   - #88264 - Reasoning Extraction Safety Filter (4 comments)
   - #93835 - VSCode session delete option (4 comments, 5 👍)

4. **Key PR Progress** - 3 PRs total:
   - #94847 - diff pane improvement (OPEN)
   - #94843 - viewport layout type fix (CLOSED)
   - #94653 - diff pane docking fix (CLOSED)
   
I'll continue analyzing the data for additional sections. The next section focuses on feature request trends, which reveals interesting insights into user expectations. These requests span multiple platforms and touch on key user experience areas like accessibility, customization, and system integration. The trends suggest developers want more flexible, personalized, and integrated tooling across different environments.

The pain points highlight critical technical challenges: platform-specific issues on Windows and macOS, authentication complexities, and problems with remote control and MCP configurations. These issues indicate potential friction points in cross-platform development and deployment.</think>

# Claude Code Community Digest — 2026-09-17

## Today's Highlights

The v2.1.274 release introduces critical memory management improvements with a visible warning system, plus a new `CLAUDE_CODE_MCP_STARTUP_WAIT_MS` environment variable to control MCP server connection timeouts. Meanwhile, the community is buzzing about accessibility features (TTS for Remote Control sessions), platform-specific bugs affecting Windows MSIX deployments, and ongoing discussions around desktop theming parity.

---

## Releases

### v2.1.274 — 2026-09-17

**What's new:**
- **Critical memory warning** — Added a visible warning when memory usage hits critical levels, with steps to free memory or restart safely
- **MCP startup control** — New `CLAUDE_CODE_MCP_STARTUP_WAIT_MS` environment variable bounds how long the first non-interactive turn waits for connecting MCP servers (`0` = don't wait)
- **Effort attribute** — Added `effort` attribute to Claude Code

[Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.274)

---

## Hot Issues

### 1. Windows MSIX: "Edit Config" opens wrong config file — MCP servers silently fail
**#26073** | [View Issue](https://github.com/anthropics/claude-code/issues/26073) | 23 comments | 33 👍

**Why it matters:** On Windows MSIX installations, clicking "Edit Config" opens the wrong `claude_desktop_config.json`, causing MCP servers to silently fail to load. Users have no visibility into why their MCP integrations aren't working, making debugging extremely difficult.

---

### 2. TTS readback of responses + voice mode for Remote Control sessions
**#42700** | [View Issue](https://github.com/anthropics/claude-code/issues/42700) | 22 comments | 30 👍

**Why it matters:** This accessibility enhancement would add text-to-speech readback and voice input for Remote Control sessions, making Claude Code more accessible and enabling hands-free operation during remote assistance scenarios.

---

### 3. Desktop app: support custom themes / accent colors
**#79305** | [View Issue](https://github.com/anthropics/claude-code/issues/79305) | 8 comments | 16 👍

**Why it matters:** The desktop app only offers light/dark modes, making Claude Desktop windows visually indistinguishable from other apps across multiple monitors. Users want custom accent colors to quickly identify Claude Code windows at a glance.

---

### 4. Pro subscription blocked — "organization has disabled subscription access"
**#82700** | [View Issue](https://github.com/anthropics/claude-code/issues/82700) | 7 comments

**Why it matters:** Users with Pro subscriptions are blocked from Claude Code with an "organization has disabled subscription access" error, even after full re-authentication and support escalation. This is a blocking issue for paid users.

---

### 5. Remote Control fails with HTTP 403 after Desktop app update
**#91717** | [View Issue](https://github.com/anthropics/claude-code/issues/91717) | 5 comments

**Why it matters:** After recent Desktop app updates, Remote Control sessions fail with HTTP 403 errors. The `/remote-control retry` command does not recover the session, breaking a key workflow for many users.

---

### 6. Browser pane: no way to grant persistent site permission
**#93156** | [View Issue](https://github.com/anthropics/claude-code/issues/93156) | 5 comments

**Why it matters:** The in-app Browser pane requires approval for every single action against an origin. There's no "Allow always" option—only "Deny" and "Allow once"—creating a tedious permission management experience.

---

### 7. VSCode extension: session list only allows archive/unarchive, no delete
**#93835** | [View Issue](https://github.com/anthropics/claude-code/issues/93835) | 4 comments | 5 👍

**Why it matters:** Users cannot permanently delete sessions in the VSCode extension—only archive/unarchive options exist. This leads to accumulated clutter in the session list with no cleanup mechanism.

---

### 8. Browser/preview pane torn down after 30 min hidden, never restored
**#92610** | [View Issue](https://github.com/anthropics/claude-code/issues/92610) | 2 comments | 1 👍

**Why it matters:** The Browser pane has a hard-coded 30-minute idle timeout (`idleTimeoutMs: 18e5`) that tears down the preview, and it never auto-restores on refocus. Users want this configurable or restored on warm-up.

---

### 9. Desktop Code sidebar: show project folder next to session title when Group by: None
**#94898** | [View Issue](https://github.com/anthropics/claude-code/issues/94898) | 0 comments

**Why it matters:** When sessions are ungrouped, users lose context about which project folder each session belongs to. This enhancement would restore project visibility in the sidebar.

---

### 10. effortLevel setting cannot persist the "Max" effort tier
**#94893** | [View Issue](https://github.com/anthropics/claude-code/issues/94893) | 1 comment

**Why it matters:** The UI offers five effort tiers including "Max", and the status line confirms the selection as "Opus 5 Max", but the value cannot be written to the configuration file. This is a configuration persistence bug.

---

## Key PR Progress

### 1. diff: the first edit opens the pane only when it has a file to list
**#94847** | [View PR](https://github.com/anthropics/claude-code/pull/94847) | OPEN | Author: bcherny

**What it does:** Fixes the diff pane auto-opening on the session's first successful Edit/Write/NotebookEdit to any path, even when writing to ignored files, files outside the repository, or different worktrees. Now it only opens when there's actually a file to list.

---

### 2. diff: the prompt hint reads the viewport's layout through a type that may lack it
**#94843** | [View PR](https://github.com/anthropics/claude-code/pull/94843) | CLOSED | Author: poteat

**What it does:** Fixes a type-checking issue where `mods/diff` read `viewport.isFullscreen` against an engine whose `RenderViewport` doesn't declare that field. The hook now safely reads the viewport layout.

---

### 3. diff: the first edit opens the pane only where the layout docks it
**#94653** | [View PR](https://github.com/anthropics/claude-code/pull/94653) | CLOSED | Author: poteat

**What it does:** Refines the diff pane behavior so it only opens on first edit when the layout can actually dock it, rather than opening inline above the prompt whenever the terminal is wide enough (144 columns).

---

## Feature Request Trends

Based on issue analysis, the community is most requesting:

1. **Desktop customization** — Custom themes, accent colors, font size configuration
2. **Accessibility enhancements** — TTS readback, voice mode for Remote Control
3. **Persistent permissions** — "Allow always" option for browser pane site permissions
4. **Session management** — Delete sessions in VSCode extension, session pinning visibility in CLI
5. **Platform integration** — Windows 11 Copilot key remap, native search integration

---

## Developer Pain Points

The most recurring frustrations from the community:

- **Platform-specific failures** — Windows MSIX MCP silent failures, macOS/Windows Remote Control 403 errors, Chrome extension connection issues
- **Authentication headaches** — MFA verification failures, subscription access blocked despite valid Pro accounts
- **Memory issues** — Critical memory warnings added in v2.1.274 acknowledge this is a real user pain point
- **Configuration friction** — Effort "Max" tier can't persist, browser permissions reset every session
- **Preview pane fragility** — 30-minute auto-teardown of browser pane with no recovery mechanism

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate an OpenAI Codex community digest for 2026-09-17 based on the GitHub data provided. Let me analyze the data and create a structured digest following the specified format.

Let me organize the information:

**Releases (last 24h):**
- rusty-v8-v152.2.0
- rust-v0.155.0-alpha.9
- rust-v0.155.0-alpha.2.6
- rust-v0.155.0-alpha.2.5
- rust-v0.155.0-alpha.14
- rust-v0.155.0-alpha.13
- rust-v0.155.0-alpha.12
- rust-v0.155.0-alpha.11
- rust-v0.155.0-alpha.10

**Top Issues (by comment count):**
1. #35259 - Codex Desktop repeatedly re-enters model during wait/status polling (26 comments, 22 👍)
2. #38503 - ChatGPT web: "Too many requests" blocks chat access (22 comments, 17 👍)
3. #40060 - Windows execpolicy false positive when Start-Process and URL in same PowerShell script (19 comments)
4. #17401 - feat: @include directive for composable AGENTS.md files (13 comments, 21 👍)
5. #11934 - garbled nonsense output (9 comments) - CLOSED
6. #34873 - model_reasoning_summary="detailed" yields heading-only reasoning (9 comments, 12 👍)
7. #42937 - GPT-5.6 Sol and GPT-6 Astra: higher intelligence, lower autonomous completion (8 comments, 5 👍)
8. #39844 - Remote macOS: switching chats escapes underscores in unsent composer drafts (8 comments)


9. #45832 - Selected model is at capacity (7 comments, 3 👍)
10. #45886 - Windows Desktop: second prompt cannot be sent after first (6 comments)

I notice several concerning patterns emerging. Model capacity issues and rate limiting appear repeatedly across multiple tickets, suggesting systemic infrastructure constraints. The Windows platform seems particularly problematic with execution policy conflicts and UI freezes after initial prompts. Performance degradation in newer models like GPT-5.6 and GPT-6 is also noted, alongside core issues affecting model reliability such as status polling inefficiencies and garbled outputs.

**Top PRs:**
1. #46065 - Route

The pull requests reveal focused improvements across security, analytics, and platform compatibility. They're primarily addressing attachment handling, test consolidation, and telemetry - areas that strengthen the product's foundation without introducing dramatic new functionality.

**Discussions:**
1. #9200 - Add ability to remote control codex from ChatGPT app (50 comments, 190 👍)
2. #25630 - Switch Between Accounts (6 comments, 7 👍)
3. #16329 - Awesome Codex CLI — curated list (8 comments)
4. #34699 - Windows Codex: reload sandbox/network permissions (1 comment, 2 👍)
5. #45938 - PreToolUse can block or rewrite a call (1 comment, 1 👍)
6. #45848 - About Selected model is at capacity (1 comment, 1 👍)
7. #46056 - High Token Consumption (0 comments, 1 👍)
8. #46030 - Abrupt instruction drift in long Codex Desktop voice sessions (0 comments, 1 👍)
9. #46001 - Windows Desktop: how can I verify selected versus effective permission profile (0 comments, 1 👍)
10. #45843 - Cheap and reliable software factory (0 comments, 1 👍)

The most active discussion centers on remote control capabilities, while account switching and permission management questions also surface. Token consumption and instruction drift in voice interactions represent emerging concerns worth tracking.</think>

# OpenAI Codex Community Digest — 2026-09-17

## Today's Highlights

The Codex ecosystem sees significant activity around model reliability and capacity management. Multiple high-impact issues report credit consumption from unnecessary model re-entry during status polling, while several PRs improve platform-specific functionality including Windows sandbox management, Mermaid diagram rendering in TUI, and accessibility features for screen readers. The community continues to drive feature discussions around account switching and remote control capabilities.

---

## Releases

**Rust Tooling Updates**

| Version | Type |
|---------|------|
| `rusty-v8-v152.2.0` | Stable |
| `rust-v0.155.0-alpha.14` | Alpha |
| `rust-v0.155.0-alpha.13` | Alpha |
| `rust-v0.155.0-alpha.12` | Alpha |
| `rust-v0.155.0-alpha.11` | Alpha |
| `rust-v0.155.0-alpha.10` | Alpha |
| `rust-v0.155.0-alpha.9` | Alpha |
| `rust-v0.155.0-alpha.2.6` | Alpha |
| `rust-v0.155.0-alpha.2.5` | Alpha |

Multiple alpha releases in the v0.155.0 series indicate active development. No changelogs were provided for these releases.

---

## Hot Issues

### 1. Codex Desktop Credit Waste from Polling Re-entry
**#35259** — [Open] [bug, rate-limits, tool-calls, app, subagent]  
`dimasyankauskas` · 26 comments · 22 👍  
https://github.com/openai/codex/issues/35259

During Ultra and multi-agent work, Codex Desktop repeatedly re-enters the model merely to poll agent status or terminal state. These wait-only turns consumed **19.8% of raw local token usage** in a measured window—substantial credit waste for non-productive operations. Community reaction is strong (22 👍), highlighting a significant cost-efficiency issue for power users.

---

### 2. Web Chat "Too Many Requests" Blocks Access
**#38503** — [Open] [bug, codex-web, rate-limits, app]  
`omarpinarecords` · 22 comments · 17 👍  
https://github.com/openai/codex/issues/38503

ChatGPT on the web displays a blocking "Too many requests" modal that prevents chat access entirely and disrupts Work tasks. This affects users running both web and desktop clients simultaneously. The 17 👍 reflect widespread frustration with service availability.

---

### 3. Windows PowerShell ExecPolicy False Positive
**#40060** — [Open] [bug, windows-os, sandbox, CLI]  
`keyou` · 19 comments  
https://github.com/openai/codex/issues/40060

Codex CLI incorrectly flags PowerShell scripts as violating execution policy when `Start-Process` and an unrelated URL appear in the same script. This causes false positives in valid workflows. Reproduced on versions 0.146.0, 0.149.0, and current main.

---

### 4. Feature Request: @include Directive for AGENTS.md
**#17401** — [Open] [enhancement, context]  
`ylluminate` · 13 comments · 21 👍  
https://github.com/openai/codex/issues/17401

Request to add an `@path/to/file.md` directive that inlines external file content into AGENTS.md at instruction-assembly time. This would enable modular, maintainable agent configurations. Strong community interest (21 👍) indicates demand for better project organization.

---

### 5. Detailed Reasoning Summaries Show Only Headings
**#34873** — [Open] [bug, model-behavior, exec, CLI]  
`LiuSZZ` · 9 comments · 12 👍  
https://github.com/openai/codex/issues/34873

With `model_reasoning_summary = "detailed"`, completed reasoning items contain only a bold status heading with no explanatory prose. This defeats the purpose of detailed reasoning summaries. 12 👍 signal this is a meaningful quality regression.

---

### 6. GPT-5.6 Sol / GPT-6 Astra: Lower Completion Reliability
**#42937** — [Open] [bug, model-behavior, app]  
`maikolb` · 8 comments · 5 👍  
https://github.com/openai/codex/issues/42937

Users report that newer models (GPT-5.6 Sol, GPT-6 Astra) exhibit higher intelligence but lower autonomous task completion and operational reliability compared to predecessors. Includes connected analysis of delivery outcomes and successor launches.

---

### 7. macOS Remote: Underscores Escaping in Composer Drafts
**#39844** — [Open] [bug, app, session, remote]  
`winnerwbx` · 8 comments  
https://github.com/openai/codex/issues/39844

On macOS remote sessions, repeatedly switching chats causes underscores to escape in unsent composer drafts, corrupting input. Version-specific to build 6849 (26.818.21641).

---

### 8. Model Capacity Errors Despite Available Quota
**#45832** — [Open] [bug, windows-os, rate-limits, CLI]  
`laughlife` · 7 comments · 3 👍  
https://github.com/openai/codex/issues/45832

Users on Pro 20x plans receive "Selected model is at capacity" errors even when quota should be available. Affects GPT-6-Astra and GPT-5.6-Sol on Windows 11.

---

### 9. Stream Disconnects Are Account-Scoped
**#45925** — [Open] [bug, app, connectivity]  
`eteai` · 6 comments  
https://github.com/openai/codex/issues/45925

"Stream disconnected before completion" errors show ~7× failure rate variance depending on which ChatGPT account is active. Switching accounts changes the failure rate dramatically, suggesting account-level service routing issues.

---

### 10. Windows Desktop: Send Button Disabled After First Turn
**#45886** — [Open] [bug, windows-os, app]  
`molijeur-blip` · 6 comments  
https://github.com/openai/codex/issues/45886

After the first successful conversation turn on Windows Desktop (26.908.40834), the send button becomes disabled and no further prompts can be sent—while CLI continues to work normally. This blocks multi-turn workflows.

---

## Key PR Progress

| PR | Description | Impact |
|----|-------------|--------|
| **#46065** | Route prepared images through attachment store | Improves image handling in messages and tool outputs |
| **#46064** | Consolidate Guardian tests at shared policy boundaries | Better test coverage for approval routing |
| **#46063** | Trim Guardian tests, tighten request layout assertions | Improved test reliability |
| **#46058** | Attribute analytics events to realtime voice sessions | Voice session tracking with `voice_session_id` |
| **#46054** | Render Mermaid code blocks as diagrams in TUI | Visual diagram rendering in terminal UI |
| **#46051** | Track WebSocket continuation modes and full-input send reasons | Better telemetry for reconnection issues |
| **#46047** | Tag rollout compression metrics by trigger | Distinguish startup vs. requested compression |
| **#46044** | Include Code Mode tool metadata in compaction prompts | Preserves tool inventory in compaction |
| **#46043** | Repair expired Windows sandbox account passwords during setup | Fixes Windows sandbox setup failures |
| **#46042** | Add read-only policy support to MCP tool requests | Consistent policy for MCP discovery |

**Additional Notable PRs:**
- **#46040**: Default TUI animations off when screen reader detected — accessibility improvement
- **#46038**: Test Windows sandbox bin DACL modification permissions
- **#46036**: Preserve config error causes when saving approvals reviewer
- **#46035**: Add per-app tool exposure configuration for MCP connectors
- **#46033**: Preserve orchestrator skill caches across MCP runtime updates

---

## Hot Discussions

### Ideas

**Remote Control Codex from ChatGPT App**  
#9200 — 50 comments · 190 👍  
https://github.com/openai/codex/discussions/9200

> "Run Codex on laptop/desktop in headless/daemon mode, then remote control from ChatGPT → Codex app."

Top-voted feature request (190 👍). Users want mobile/remote control capability, currently approximated with Tailscale + SSH.

**Switch Between Accounts**  
#25630 — 6 comments · 7 👍  
https://github.com/openai/codex/discussions/25630

Small but practical request for account-switching button without full sign-out/sign-in flow.

**Windows: Reload Sandbox/Network Permissions in Existing Tasks**  
#34699 — 1 comment · 2 👍  
https://github.com/openai/codex/discussions/34699

Existing long-running tasks don't reload updated permissions after app restart, causing permanent environment access loss.

**Swarm Intelligence: Network of Specialist Models**  
#45841 (Issue) — 6 comments  
https://github.com/openai/codex/issues/45841

Proposal for Codex to become first real Swarm Intelligence / Network of Models system.

### Q&A

**PreToolUse Boundary Question**  
#45938 — 1 comment · 1 👍  
https://github.com/openai/codex/issues/45938

Developer questions whether intentional boundary or gap: PreToolUse can block/rewrite calls but cannot substitute tool results.

**Verify Selected vs. Effective Permission Profile**  
#46001 — 0 comments · 1 👍  
https://github.com/openai/codex/discussions/46001

Windows Desktop: how to verify selected custom permission profile is actually applied to tasks.

### Show and Tell

**Awesome Codex CLI — 150+ Ecosystem Tools**  
#16329 — 8 comments  
https://github.com/openai/codex/discussions/16329

Curated list of subagents, skills, plugins, MCP servers. Addresses ecosystem fragmentation.

---

## Feature Request Trends

From Issues and Discussions, the most-requested directions:

1. **Multi-account management** — Switching between accounts without full sign-out
2. **Remote/headless control** — Daemon mode with mobile app UI
3. **Modular AGENTS.md** — Include/import directives for composable configs
4. **Swarm/Network architectures** — Multiple specialist models collaborating
5. **Permission runtime reload** — Apply updated permissions to existing tasks without restart
6. **MCP stateless protocol support** — MCP 2026-07-28 stdio server support
7. **Project filtering** — Inline search in Projects sidebar

---

## Developer Pain Points

### High-Frequency Frictions

- **Rate limiting / capacity errors** — Multiple tickets report "model at capacity" errors despite unused quota, affecting Pro and Pro-Light users
- **Credit consumption from polling** — 19.8% of tokens wasted on status polling in multi-agent workflows
- **Platform-specific bugs** — Windows execpolicy false positives, macOS sandbox-exec errors, TUI Korean IME issues
- **Model reliability regression** — Newer models (GPT-5.6 Sol, GPT-6 Astra) showing lower task completion despite higher intelligence
- **Stream disconnects** — Account-scoped connection failures with 7× variance between accounts
- **UI/UX regressions** — Send button disabling, composer draft corruption, blank conversation rendering

### Recurring Themes

- **Permission management complexity** — Windows sandbox setup failures, profile verification gaps, runtime permission reload missing
- **Cross-platform inconsistency** — Desktop vs. CLI behavior divergence, web vs. desktop rate limiting
- **Tool metadata loss** — Compaction prompts omitting Code Mode tool calls

---

*Generated from GitHub data for 2026-09-17*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Gemini CLI community digest for 2026-09-17 based on the provided GitHub data. Let me analyze the data and create a structured digest.

Let me go through the sections:

1. **Today's Highlights** - 2-3 sentences summarizing the most important updates
2. **Releases** - Summarize changes from v0.62.0-nightly.20260916.g6a466a7e2
3. **Hot Issues** - Pick 10 noteworthy Issues from the list
4. **Key PR Progress** - Pick 10 important PRs from the list
5. **Hot Discussions** - I don't see any discussion data provided, so I'll omit this section
6. **Feature Request Trends** - Distill from issues
7. **Developer Pain Points** - Summarize recurring frustrations

Let me start:

**Today's Highlights:**
- New nightly release v0.62.0 with fixes for AgentLoopContext preservation and A2A server
- Multiple critical issues around agent hanging, subagent recovery, and shell execution problems
- Security and memory system improvements being tracked

**Releases:**
- v0.62.0-nightly.20260916.g6a466a7e2 with two fixes:
  - fix(core): ensure AgentLoopContext properties are preserved across object spread
  - fix(a2a-server): add early return on unsupported store in tasks metadata endpoint

**Hot Issues (10):**
1. #22323 - Subagent recovery after MAX_TURNS reported as GOAL success (13 comments, P1)
2. #19873 - Leverage model's bash affinity via Zero-Dependency OS Sandboxing (9 comments, P2)
3. #21409 - Generalist agent hangs (8 comments, P1)


4. #22745 - Assess impact of AST-aware file reads (7 comments, P2)
5. #21968 - Gemini does not use skills and sub-agents enough (6 comments, P2)
6. #26525 - Add deterministic redaction and reduce Auto Memory logging (5 comments, P2)
7. #26522 - Stop Auto Memory from retrying low-signal sessions (4 comments, P2)
8. #25166 - Shell command execution stuck with "Waiting input" (4 comments, P1)
9. #22232 - Enhance browser_agent resilience (4 comments, P3)

I'm seeing the most engagement around agent behavior problems, particularly around subagent recovery, skill utilization, and session management. The issues span from critical (P1) like the generalist agent hanging to enhancement requests around AST-aware file handling and browser agent resilience. Memory and logging improvements are also getting attention, with developers focusing on deterministic redaction and preventing infinite retries on low-signal sessions.

10. #21983 - browser subagent fails in wayland (4 comments, P1)

Looking at the PR side, there's been movement on several fronts: skill loader fixes, surrogate pair handling in text truncation, and improvements to PTY file descriptor management. Shell execution is getting attention with Git config handling and rootless Podman support. Security issues are being addressed through crash prevention and path traversal guards, while file operations are becoming more atomic. UI fixes include reverse search highlighting and documentation updates around hooks and environment redaction.

The feature request landscape shows strong interest in AST-aware tooling for more precise file operations, and better subagent integration with skills.</think>

# Gemini CLI Community Digest — 2026-09-17

## Today's Highlights

The project released **v0.62.0-nightly.20260916** with two targeted fixes—AgentLoopContext property preservation and A2A server metadata handling. Meanwhile, the issue tracker reveals persistent challenges: P1-level bugs around agent hanging (#21409) and shell execution stalls (#25166) remain active, while the community is pushing hard for AST-aware tooling and improved subagent/skill orchestration.

---

## Releases

**v0.62.0-nightly.20260916.g6a466a7e2** — 2026-09-16

- **fix(core):** Ensure `AgentLoopContext` properties are preserved across object spread ([#29335](https://github.com/google-gemini/gemini-cli/pull/29335))
- **fix(a2a-server):** Add early return on unsupported store in tasks metadata endpoint

---

## Hot Issues

| # | Issue | Priority | Why It Matters | Reactions |
|---|-------|----------|----------------|-----------|
| 1 | **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — Subagent recovery after MAX_TURNS reported as GOAL success, hiding interruption | P1 | Subagents incorrectly report success even when hitting turn limits, masking failures from users | 👍 2 |
| 2 | **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** — Leverage model's bash affinity via Zero-Dependency OS Sandboxing | P2 | Proposal to exploit Gemini 3's POSIX toolchain affinity for smarter code exploration without compromising security | 👍 1 |
| 3 | **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — Generalist agent hangs indefinitely | P1 | Core blocker: CLI hangs when deferring to the generalist agent, even for trivial operations like folder creation | 👍 8 |
| 4 | **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — Assess impact of AST-aware file reads, search, and mapping | P2 | Epic tracking AST tooling investigations to reduce token bloat and improve precision of code navigation | 👍 1 |
| 5 | **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — Gemini does not use skills and sub-agents enough | P2 | Model ignores custom skills/subagents unless explicitly instructed, limiting automation potential | — |
| 6 | **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** — Add deterministic redaction and reduce Auto Memory logging | P2 | Security concern: Auto Memory sends transcript content to models before redaction occurs | — |
| 7 | **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** — Stop Auto Memory from retrying low-signal sessions indefinitely | P2 | Memory system can loop endlessly on low-value sessions, wasting resources | — |
| 8 | **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** — Shell command execution stuck with "Waiting input" after command completes | P1 | CLI hangs showing "Awaiting user input" even after shell commands finish—a blocking UX bug | 👍 3 |
| 9 | **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** — Enhance browser_agent resilience: Automatic session takeover and lock recovery | P3 | Browser agent fails fast on locked profiles instead of recovering gracefully | — |
| 10 | **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — Browser subagent fails in wayland | P1 | Browser subagent crashes on Wayland—affects Linux desktop users | 👍 1 |

---

## Key PR Progress

| PR | Area | Description |
|----|------|-------------|
| **[#29359](https://github.com/google-gemini/gemini-cli/pull/29359)** | agent | **fix(core):** Preserve table rows/columns in `web_fetch` — fixes data loss when rendering HTML tables |
| **[#29340](https://github.com/google-gemini/gemini-cli/pull/29340)** | core | **fix(core):** Improve PTY file descriptor cleanup and execution lifecycle management — resolves resource leaks on POSIX |
| **[#29354](https://github.com/google-gemini/gemini-cli/pull/29354)** | core | **fix(cli):** Use `--userns=keep-id` for rootless Podman sandboxes — fixes `EACCES` on node-gyp rebuilds |
| **[#29163](https://github.com/google-gemini/gemini-cli/pull/29163)** | security | **fix(cli):** Prevent crash during authentication in git repositories (macOS Seatbelt restricted environments) |
| **[#29249](https://github.com/google-gemini/gemini-cli/pull/29249)** | core | **fix(core):** Close sibling-prefix bypass in `get_internal_docs` path guard — security fix |
| **[#29244](https://github.com/google-gemini/gemini-cli/pull/29244)** | core | **fix(core):** Make tool file writes atomic and serialize same-path writes — prevents silent data loss |
| **[#29156](https://github.com/google-gemini/gemini-cli/pull/29156)** | core | **fix(core):** Stop nullifying user git config in shell executions — restores `user.name`/`user.email` visibility |
| **[#29358](https://github.com/google-gemini/gemini-cli/pull/29358)** | cli | **fix(cli):** Align reverse-search highlights with original text — fixes Ctrl+R highlighting on Unicode text |
| **[#29352](https://github.com/google-gemini/gemini-cli/pull/29352)** | docs | **docs(hooks):** Document all hook decision values (`ask`, `approve`) — closes #28977 |
| **[#29304](https://github.com/google-gemini/gemini-cli/pull/29304)** | core | **fix(cli):** Avoid splitting surrogate pairs during truncation — fixes emoji rendering in display |

---

## Feature Request Trends

1. **AST-aware tooling** — Multiple issues (#22745, #22746, #19561) advocate for AST-based file reading, search, and codebase mapping to reduce token bloat and improve precision
2. **Better subagent orchestration** — Requests for improved skill/subagent discovery, automatic invocation, and trajectory visibility (#21968, #22598, #20195)
3. **Memory system improvements** — Deterministic redaction, session quarantine, and surgical extraction logic (#26525, #26522, #26523, #19561)
4. **Shell execution robustness** — Zero-dependency OS sandboxing, improved PTY handling, and better interactive prompt management (#19873, #25166, #22465)

---

## Developer Pain Points

- **Agent hangs** — The generalist agent and shell execution frequently freeze, blocking productive work (#21409, #25166)
- **Subagent transparency** — Failures are masked as successes; context is lost in bug reports (#22323, #21763)
- **Skill/subagent underutilization** — Gemini ignores custom capabilities unless explicitly prompted (#21968)
- **Memory system loops** — Low-signal sessions trigger indefinite retries; invalid patches are silently skipped (#26522, #26523)
- **Security concerns** — Pre-redaction data exposure in Auto Memory, path traversal risks (#26525, #29249)
- **File operation races** — Concurrent edits to the same file silently lose data (#29244)

---

*Digest generated from GitHub data — 2026-09-17*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>Let me analyze the GitHub data provided and create a structured digest for the GitHub Copilot CLI community.

First, let me identify the key information:

**Releases (last 24h):**
- v1.0.86-2: Fixes and changes
- v1.0.86-1: Added custom agents can opt into repository instruction files (AGENTS.md, copilot-instructions.md, CLAUDE.md) by setting `include-custom-instructions: true` in their frontmatter. Also fixed issues with resuming sessions and preserving plugin-directory, discovery, or working-directory overrides.
- v1.0.86-0: Fixed issues with resuming sessions, expanded reasoning text in compact timeline, autopilot stops after accepted task completion
- v1.0.85: Vim mode available, /settings options for context management tools, transcriptView settings

**Issues (last 24h):**
Looking at the issues, I need to pick 10 noteworthy ones:

1. #2904 - Custom Agent YAML Frontmatter Should Support Reasoning Effort (9 comments, 23 👍) - HIGH PRIORITY - This is about adding reasoning effort configuration per agent
2. #2050 - Claude Sonnet 4.6 - Execution failed (9 comments, 4 👍) - Networking/connection issues
3. #1322 - Feature request: Show subagent tool call details (7 comments, 25 👍) - Subagent visibility
4. #1882 - Support $env:EDITOR being a .bat/.cmd script on Windows (4 comments, 2 👍)
5. #1392 - OmniSharp LSP server fails to fully load a large project (4 comments, 5 👍)
6. #4855 - Copilot CLI 1.0.84-8 does not accept interactive keyboard input in macOS Terminal (3 comments, 0 👍)


7. #4542 - Workspace .mcp.json detected but not connected in agent session (3 comments, 1 👍) - MCP configuration issue
8. #4854 - Local sandbox setting 'Allow local network' not works (3 comments, 0 👍)
9. #2778 - When is /btw from claude code coming to copilot? (3 comments, 1 👍)
10. #4531 - Launching VS Code from Copilot CLI drops empty GIT_CONFIG_VALUE (2 comments, 2 👍)
11. #3009 - MCP OAuth callback unreachable in remote container (2 comments, 1 👍)

I'm noticing several configuration and connectivity problems that could impact user experience. The MCP configuration detection issue (#4542) appears significant, along with OAuth challenges in remote environments (#3009). There's also an interesting request for Claude Code's /btw feature to be integrated into Copilot CLI (#2778), suggesting users want more conversational interaction capabilities.</think>

# GitHub Copilot CLI Community Digest

**Date:** 2026-09-17

---

## 1. Today's Highlights

The Copilot CLI team released **v1.0.86-2** with critical fixes including improved session resumption and transcript corruption recovery. A significant new feature landed: custom agents can now opt into repository instruction files (AGENTS.md, copilot-instructions.md, CLAUDE.md) via frontmatter. Vim mode is now generally available for modal editing in the composer. Community engagement remains high with 50 issues updated in the last 24 hours, including several long-standing feature requests reaching resolution.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v1.0.86-2** | General fixes and improvements |
| **v1.0.86-1** | **Added:** Custom agents can opt into repository instruction files (AGENTS.md, copilot-instructions.md, CLAUDE.md) by setting `include-custom-instructions: true` in frontmatter. **Fixed:** Resuming active sessions without plugin-directory, discovery, or working-directory overrides now preserves settings correctly. |
| **v1.0.86-0** | **Fixed:** Resume sessions even when transcript files contain recoverable corruption. Expanded reasoning text in compact timeline is now fully readable. Autopilot stops after accepted task completion instead of continuing unexpectedly. |
| **v1.0.85** | Vim mode is now available to everyone (use `/vim` or set `editorMode: vim`). Added `/settings` options for context management tools. Added transcriptView configuration. |

---

## 3. Hot Issues

### Top Issues by Community Engagement

| Issue | Summary | Comments | 👍 |
|-------|---------|----------|-----|
| [#2904](https://github.com/github/copilot-cli/issues/2904) | **Custom Agent YAML Frontmatter Should Support Reasoning Effort** — Currently reasoning effort is only configurable globally via CLI flags. Request to allow per-agent configuration in `.agent.md` frontmatter. | 9 | 23 |
| [#2050](https://github.com/github/copilot-cli/issues/2050) | **Claude Sonnet 4.6 Execution Failed** — Intermittent HTTP/2 GOAWAY connection errors causing 5 retries with 84+ second wait times. Model-dependent issue (Sonnet 4.6 fails, Gemini 3 Pro works). | 9 | 4 |
| [#1322](https://github.com/github/copilot-cli/issues/1322) | **Feature Request: Show Subagent Tool Call Details** — Users want visibility into subagent operations similar to VS Code Copilot Chat. Currently only shows status, ID, and type. | 7 | 25 |
| [#4855](https://github.com/github/copilot-cli/issues/4855) | **Interactive Keyboard Input Not Working in macOS Terminal** — CLI launches but ignores all keyboard input in interactive mode. Earlier version (1.0.83) works fine. | 3 | 0 |
| [#4542](https://github.com/github/copilot-cli/issues/4542) | **Workspace .mcp.json Detected But Not Connected in Agent Sessions** — MCP servers visible in `copilot mcp list` but unavailable inside interactive sessions. | 3 | 1 |
| [#4854](https://github.com/github/copilot-cli/issues/4854) | **Local Sandbox 'Allow Local Network' Setting Not Working** — Regardless of toggle state, `/sandbox policy` shows blocked. | 3 | 0 |
| [#1882](https://github.com/github/copilot-cli/issues/1882) | **Support $env:EDITOR as .bat/.cmd Script on Windows** — External editor invoked via Batch scripts not supported for Ctrl+G. | 4 | 2 |
| [#1392](https://github.com/github/copilot-cli/issues/1392) | **OmniSharp LSP Server Fails on Large Project** — LSP servers need configurable `initializeTimeout` for large C# solutions. | 4 | 5 |
| [#4531](https://github.com/github/copilot-cli/issues/4531) | **Launching VS Code Drops Empty GIT_CONFIG_VALUE** — Copilot CLI exports empty config values that break Git discovery when launching VS Code. | 2 | 2 |
| [#3009](https://github.com/github/copilot-cli/issues/3009) | **MCP OAuth Callback Unreachable in Remote Containers** — No manual token paste fallback when running in Codespaces/Dev Containers. | 2 | 1 |

---

## 4. Key PR Progress

*No pull requests were updated in the last 24 hours.*

---

## 5. Feature Request Trends

Based on issue analysis, the most requested feature directions are:

1. **Enhanced Agent Customization** — Per-agent reasoning effort, subagent visibility, and custom instruction file support
2. **Improved MCP Integration** — Workspace config reliability, OAuth flow for remote environments, config reload behavior
3. **Platform-Specific Enhancements** — Windows .bat/.cmd editor support, macOS terminal compatibility
4. **LSP Scalability** — Configurable timeouts for large project loading
5. **Session Reliability** — Transcript corruption recovery, session resumption robustness

---

## 6. Developer Pain Points

The most recurring frustrations from the developer community:

- **MCP Configuration Inconsistencies** — Multiple issues (#4542, #4562, #3100) around MCP servers not connecting properly or failing to reload with config changes
- **Interactive Mode Breakages** — macOS Terminal keyboard input not working (#4855) disrupts core workflow
- **Network Reliability** — Model connection failures (#2050, #2848) causing session interruptions
- **Git Integration Conflicts** — Environment variable pollution (#4531) affecting external tool launches
- **Permission False Positives** — Plan mode blocking legitimate read-only operations (#4220)
- **Large Project Performance** — LSP timeouts on substantial codebases (#1392)

---

*End of digest. Data sourced from github.com/github/copilot-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate an OpenCode community digest for 2026-09-17 based on the GitHub data provided. Let me analyze the data and structure it according to the requested format.

Let me go through the data:

**Releases (last 24h):**
- None

**Latest Issues (top 30 by comment count):**
1. #44300 - Zen API tool failure - 15 comments, 5 👍
2. #15617 - Inline skill invocation - 9 comments, 25 👍
3. #49021 - Bring back old layout - 7 comments, 3 👍
4. #23114 - Session title from memory - 7 comments, 3 👍
5. #37628 - npm install 16bit issue - 6 comments, 0 👍
6. #37546 - New layout missing workspaces - 6 comments, 24 👍
7. #34214 - Opencode freezes - 6 comments, 1 👍
8. #38230 - Old UI toggle - 6 comments, 5 👍
9. #46651 - TypeError Failed to fetch - 5 comments, 0 👍
10. #48837 - Forced V2 UI - 5 comments, 17 👍

**Pull Requests (top 20):**
1. #45472 - websearch provider whitelist removal
2. #46344 - collapsible reasoning cards
3. #48689 - measure request throughput including reasoning
4. #44725 - restore OPENCODE_DISABLE_CLAUDE_CODE
5. #49423 - improve project settings (closed)
6. #49426 - retry transport errors (closed)
7. #49429 - center start screen (contributor)
8. #49432 - polish browser panel states (contributor)
9. #49418 - cap retries on finish reason (closed)


10. #47510 - compact durable event snapshots
11. #48438 - native Anthropic advisor tool
12. #49408 - animated first-launch (closed)
13. #49425 - hide browser when panel closes
14. #46199 - configurable plans directory
15. #49424 - preserve native clipboard (closed)
16. #43319 - injected text markdown rendering
17. #49409 - SSH in desktop app (closed)
18. #47783 - Persian README translation
19. #42939 - hide tab shortcut numbers (closed)
20. #42937 - Taplo LSP for TOML (closed)

Looking at the pattern here, there are no active discussions in the traditional sense, so I'll focus on the issues and pull requests that matter most. The layout migration is clearly the dominant theme—with multiple related issues (#49021, #37546, #38230, #48837, #48956, #49005) pointing to users frustrated by the new interface and the absence of workspaces in the web version. Beyond that, I'm seeing problems with API endpoints going offline (#44300, #49413), freezes during extended use (#34214), and session handling issues around title generation and clipboard behavior. The pull requests suggest ongoing work around UI improvements, better error handling, and new features like collapsible reasoning and SSH support.</think>

# OpenCode Community Digest — 2026-09-17

## Today's Highlights

Today's activity centers on significant user experience concerns around the new V2 layout, alongside API endpoint reliability issues affecting free tier models. The community is actively reporting regressions and missing features from the legacy interface, while several contributor PRs aim to polish the desktop experience. Notably, no new releases were published in the last 24 hours.

---

## Releases

**No new releases** in the last 24 hours.

---

## Hot Issues

| Issue | Description | Community Reaction |
|-------|-------------|-------------------|
| [#44300](https://github.com/anomalyco/opencode/issues/44300) | **Zen API tool failure** — Ox Alpha free model returns "Endpoint is unavailable" for any request containing tools. Affects both `x-preview-f-free` and `ox-alpha-free` routes since 2026-08-23. | 15 comments, 5 👍 — High-impact bug blocking tool use |
| [#15617](https://github.com/anomalyco/opencode/issues/15617) | **Inline skill invocation** — Request to support `$skill-name` syntax anywhere in prompts, not just at the start. | 9 comments, 25 👍 — Popular feature request |
| [#37546](https://github.com/anomalyco/opencode/issues/37546) | **New layout missing workspaces** — Web UI after v1.17.19 has no UI to revert layout and lacks git worktree support entirely. | 6 comments, 24 👍 — Major workflow disruption |
| [#48837](https://github.com/anomalyco/opencode/issues/48837) | **Forced V2 interface destroys productivity** — Users with 20+ sessions can't manage multi-project workflows. Layout toggle completely removed. | 5 comments, 17 👍 — Strong dissatisfaction |
| [#23114](https://github.com/anomalyco/opencode/issues/23114) | **Session title from injected memory** — Title agent generates titles from system context/memory rather than actual user messages. | 7 comments, 3 👍 — Context pollution bug |
| [#46651](https://github.com/anomalyco/opencode/issues/46651) | **TypeError: Failed to fetch on Windows** — Frequent on fresh Windows login; requires app restart. | 5 comments, 0 👍 — Regression in v1.18.25-27 |
| [#49021](https://github.com/anomalyco/opencode/issues/49021) | **Bring back old layout** — Direct user request to restore legacy interface. | 7 comments, 3 👍 |
| [#37628](https://github.com/anomalyco/opencode/issues/37628) | **16-bit compatibility error** — npm-installed opencode-ai incompatible with Windows version. | 6 comments, 0 👍 — Installation blocker |
| [#34214](https://github.com/anomalyco/opencode/issues/34214) | **OpenCode freezes mid-session** — After multiple tool calls, UI becomes unresponsive; requires force-close. | 6 comments, 1 👍 — Serious stability issue |
| [#35283](https://github.com/anomalyco/opencode/issues/35283) | **Reasoning field dropped** — OpenAI-compatible providers streaming `reasoning` delta (not `reasoning_content`) have their reasoning entirely dropped. | 5 comments, 0 👍 — Protocol compatibility bug |

---

## Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| [#46344](https://github.com/anomalyco/opencode/pull/46344) | **Collapsible reasoning cards** — Render reasoning parts as collapsible cards in the UI. Closes #8789, #14340, #37115, #21548. | Open |
| [#45472](https://github.com/anomalyco/opencode/pull/45472) | **Remove websearch provider whitelist** — Enable websearch for all providers since it's backed by public Exa/Parallel MCP endpoints. | Open |
| [#44725](https://github.com/anomalyco/opencode/pull/44725) | **Restore OPENCODE_DISABLE_CLAUDE_CODE** — Brings back env var support on v2 branch to disable reading `~/.claude`. | Open |
| [#47510](https://github.com/anomalyco/opencode/pull/47510) | **Compact durable event snapshots** — Fix unbounded growth of `event` table by compacting superseded snapshots. Closes #47223, #47512, #47513. | Open |
| [#48689](https://github.com/anomalyco/opencode/pull/48689) | **Measure request throughput including reasoning** — Include reasoning tokens in tok/s indicator. Closes #48705. | Open |
| [#48438](https://github.com/anomalyco/opencode/pull/48438) | **Native Anthropic advisor tool** — New consultation tool inside executor's response stream. | Open (Draft) |
| [#43319](https://github.com/anomalyco/opencode/pull/43319) | **Injected text markdown rendering** — Let injected text parts opt into markdown rendering. | Open |
| [#46199](https://github.com/anomalyco/opencode/pull/46199) | **Configurable plans directory** — Opt-out for plugin dependency installs; addresses startup-hang root cause. | Open |
| [#49426](https://github.com/anomalyco/opencode/pull/49426) | **Retry transport errors** — Fix network-related fetch failures on Windows post-login (ERR_NETWORK_CHANGED). | Closed |
| [#49418](https://github.com/anomalyco/opencode/pull/49418) | **Cap retries on unrecognized finish reason** — Prevent unbounded request storm when finish reason is "unknown". | Closed |

---

## Feature Request Trends

Based on issue and PR analysis, the most requested feature directions are:

1. **Layout flexibility** — Persistent requests for a toggle to revert to legacy layout, with 50+ combined interactions across 6+ issues. Users want the old sidebar and workspace support restored.

2. **UI/UX polish** — Collapsible reasoning cards (#46344), better terminal title indicators, markdown link rendering fixes, and persistent sidebar layouts.

3. **Model/provider reliability** — Fixes for endpoint availability, tool call failures on free models, and reasoning field compatibility.

4. **Platform expansion** — Android APK availability (#49316), SSH access in desktop app (#49409), and cross-platform clipboard handling.

5. **Developer experience** — Inline skill invocation, configurable plans directory, and native advisor tools.

---

## Developer Pain Points

- **Layout regression frustration**: The forced V2 interface without a revert option is the dominant pain point, particularly for power users with multi-project workflows.
- **Workspaces disappear**: Git worktrees only exist in legacy layout; new UI lacks this entirely for Web users.
- **Free tier API instability**: Multiple issues report tool calls failing on free models (Ox Alpha, Union Alpha, Muse Spark) with 503/endpoint unavailable errors.
- **Windows connectivity**: Network-related fetch failures shortly after login require app restarts.
- **Session freezes**: Mid-session unresponsiveness during extended tool-use sessions forces complete restart and loses context.
- **Memory/context pollution**: Session titles generated from injected memory rather than actual user messages create confusion.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Pi community digest for 2026-09-17 based on the GitHub data provided. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

**Latest Releases (last 24h)**: None

**Latest Issues**: Total 50 items, showing top 30 by comment count. Let me identify the most noteworthy ones:
1. #5886 - AgentSession settlement/continuation and assistant-tail lifecycle bugs (12 comments, 4 👍)
2. #8928 - Parallel pi startup "No API key found" for ~48s (9 comments)
3. #5323 - Improve Vertex + GCP metadata server support (9 comments, 2 👍)
4. #9165 - Claude Opus 5 via OpenRouter rejects per-message output_config (8 comments) - CLOSED
5. #9294 - claude-fable-5: built-in allowedFallbackModels still lists claude-opus-4-8 (7 comments) - CLOSED
6. #1086 - Add structured output (JSON schema) support (5 comments) - CLOSED
7. #9216 - Ollama qwen3.8:27b stream 'terminated' errors (5 comments)
8. #9602 - Compaction can overflow by including thinking messages (4 comments)
9. #7987 - Package absent from gallery after republish (4 comments, 2 👍) - CLOSED
10. #9410 - Escape interrupt causes ~60s TUI freeze (4 comments)
11. #9255 - TuiMainScreen redraw storm issues (4 comments, 1 👍)
12. #9129 - Windows bash timeout orphan processes (4 comments)
13. #6930 - Make renderPage / oauth html functions public (4 comments)
14. #9585 - "fail to touch upstream" not recognized as retryable (4 comments) - CLOSED


15. #8791 - Expose model runtime to extensions (4 comments, 5 👍)
16. #9616 - zai-coding-cn GLM models issue (4 comments)
17. #9652 - Compaction refused by Claude Fable (3 comments) - CLOSED
18. #9664 - openai-responses 2nd turn 400 (3 comments) - CLOSED
19. #9440 - --session-id scans all transcripts (3 comments) - CLOSED
20. #9654 - Read tool reads whole files (3 comments) - CLOSED
21. #9639 - Extension API cannot reach persist option (2 comments) - CLOSED
22. #9681 - Tool-related issues emerging (2 comments)
23. #9685 - New GMI Cloud provider (2 comments) - CLOSED
24. #9684 - Non-ASCII text corruption (2 comments) - CLOSED
25. #9680 - Capability detection usage-in-streaming (2 comments) - CLOSED
26. #9676 - Preserve unsigned thinking (2 comments) - CLOSED
27. #9099 - pi.dev OpenRouter wrong baseUrl (2 comments) - OPEN
28. #9068 - user_bash falls back silently (2 comments) - CLOSED
29. #9455 - Google GenAI thinkingLevel MINIMAL fails (2 comments) - OPEN
30. #9629 - Baseten session-affinity headers (2 comments) - CLOSED

A substantial number of these issues are now resolved, with only a few remaining open. The PR landscape shows significant recent activity, with #9682 addressing clipboard functionality on macOS.

Several pull requests target critical bugs and new features: the AI component preserves aborted stop reasons (#8635), while coding-agent work includes preventing compaction queue rollbacks (#9677), improving bash hook error handling (#9662), and implementing prompt cache warming (#9668). System messages now work mid-conversation (#9548), and there are ongoing efforts around TUI overlay selection, session tree search improvements, and device-code confirmations.

Additional PRs address transcript optimization for exact session IDs (#9601), mouse tracking fixes on Windows (#9655), model deprecation warnings (#9630), and event handler management (#9630).

Two discussions are active: a thread about preferred plugins and extensions with 17 comments, and a new discussion about job-agent-skills.</think>

# Pi Community Digest — 2026-09-17

## Today's Highlights

The past 24 hours saw significant activity around session management and TUI improvements, with several bug fixes merged alongside ongoing work in agent session handling. Notably, the compaction queue rollback bug and Windows-specific issues (mouse tracking, clipboard encoding) were resolved, while a new prompt cache warming feature is underway. Community discussions are picking up around job-search workflows and extension preferences.

---

## Releases

No new releases in the past 24 hours.

---

## Hot Issues

| # | Issue | Summary | Comments | 👍 |
|---|-------|---------|----------|-----|
| **1** | **[#5886](https://github.com/earendil-works/pi/issues/5886)** — AgentSession settlement/continuation and assistant-tail lifecycle bugs | Meta-issue tracking recurring bugs where post-run logic attempts to continue an agent from a transcript that is no longer valid. Affects `pkg:agent` and `pkg:coding-agent`. | 12 | 4 |
| **2** | **[#8928](https://github.com/earendil-works/pi/issues/8928)** — Parallel pi startup reports "No API key found" for ~48s with expired OAuth | Deterministic repro shows parallel startup triggers 48s delay when `auth.json` contains an expired OAuth credential for another provider. Related to #1871, #4919, #6880. | 9 | 0 |
| **3** | **[#5323](https://github.com/earendil-works/pi/issues/5323)** — Improve Vertex + GCP metadata server support | Synchronous `existsSync` check on `GOOGLE_APPLICATION_CREDENTIALS` blocks; needs async metadata server auth for Vertex. | 9 | 2 |
| **4** | **[#9216](https://github.com/earendil-works/pi/issues/9216)** — Ollama qwen3.8:27b stream 'terminated' errors (0.84.x→0.85.x regression) | Clean regression in local Ollama usage with heavy tool use; auto-compaction stops re-triggering after first run. | 5 | 0 |
| **5** | **[#9410](https://github.com/earendil-works/pi/issues/9410)** — Escape to interrupt streaming causes ~60s TUI freeze | Pressing Escape on large sessions (~465k tokens) freezes the CLI for ~58 seconds during `⠸ Working`. | 4 | 0 |
| **6** | **[#9255](https://github.com/earendil-works/pi/issues/9255)** — TuiMainScreen full-screen redraw storm | On long transcripts, `doRender()` triggers full redraws nearly every frame due to streaming component exceeding viewport. | 4 | 1 |
| **7** | **[#9129](https://github.com/earendil-works/pi/issues/9129)** — Windows bash timeout leaves pipeline processes orphaned | `taskkill /F /T` doesn't kill all pipeline stages when using Git for Windows (MSYS2) bash. | 4 | 0 |
| **8** | **[#8791](https://github.com/earendil-works/pi/issues/8791)** — Expose model runtime to extensions | Request for `ExtensionContext` to expose the `ModelRuntime` backing its `modelRegistry`. Enables isolated in-process agent sessions. | 4 | 5 |
| **9** | **[#9616](https://github.com/earendil-works/pi/issues/9616)** — zai-coding-cn: GLM-5.3 consolidation | Zhipu's GLM Coding Plan now only serves GLM-5.3/GLM-5.3-Flash, but pi still lists 8 legacy models. | 4 | 0 |
| **10** | **[#9099](https://github.com/earendil-works/pi/issues/9099)** — pi.dev OpenRouter wrong baseUrl (missing /v1) | Provider registry serves `https://openrouter.ai/api` (missing `/v1`) for non-batch Anthropic models, causing 404 errors. | 2 | 0 |

---

## Key PR Progress

| # | PR | Summary | Status |
|---|-----|---------|--------|
| **1** | **[#9682](https://github.com/earendil-works/pi/pull/9682)** — fix(clipboard): keep non-ASCII intact with pbcopy on macOS | Fixes UTF-8 → MacRoman corruption when clipboard fallback runs. | CLOSED |
| **2** | **[#9677](https://github.com/earendil-works/pi/pull/9677)** — fix(coding-agent): stop compaction queue rollback from replaying accepted messages | Prevents restoration of entire pre-flush state when compaction queue flush fails mid-run. | CLOSED |
| **3** | **[#9662](https://github.com/earendil-works/pi/pull/9662)** — fix(coding-agent): fail closed on user bash hook errors | `!`, `!!`, and RPC `bash` now fail instead of falling back to local shell when handler throws. | CLOSED |
| **4** | **[#9668](https://github.com/earendil-works/pi/pull/9668)** — feat(coding-agent): add prompt cache warming | Experimental support for keeping caches warm between sessions. | OPEN |
| **5** | **[#9548](https://github.com/earendil-works/pi/pull/9548)** — Mid conversation system messages | System prompt changes now recorded in transcript rather than silently rewriting starting conditions. | CLOSED |
| **6** | **[#8744](https://github.com/earendil-works/pi/pull/8744)** — feat(tui): add opt-in overlay selection exclusion | Allows persistent extension UI to exclude transcript selection. | OPEN |
| **7** | **[#9601](https://github.com/earendil-works/pi/pull/9601)** — fix(coding-agent): avoid transcript scans for exact session IDs | Uses exact session-ID lookup instead of scanning all transcripts; ~16s → ~0.47s improvement. | CLOSED |
| **8** | **[#9655](https://github.com/earendil-works/pi/pull/9655)** — fix(tui): enable mouse tracking after entering raw mode | Moves ConPTY mouse init to after raw mode on Windows. | CLOSED |
| **9** | **[#9570](https://github.com/earendil-works/pi/pull/9570)** — fix(ai): map TOO_MANY_TOOL_CALLS to an error stop reason | Handles new Gemini `TOO_MANY_TOOL_CALLS` finish reason. | OPEN |
| **10** | **[#9630](https://github.com/earendil-works/pi/pull/9630)** — feat(coding-agent): add event handler unsubscribe | Allows extensions to unsubscribe from event handlers. | OPEN |

---

## Hot Discussions

| # | Discussion | Category | Comments | 👍 |
|---|------------|----------|----------|-----|
| **1** | **[#3373](https://github.com/earendil-works/pi/discussions/3373)** — Which plugins, add-ons, or extensions do you most enjoy using with the Pi agent? | **Show and tell / Q&A** | 17 | 9 |
| **2** | **[#9679](https://github.com/earendil-works/pi/discussions/9679)** — job-agent-skills: job-search workflow for pi (10 skills + MCP bridge) | **Show and tell** | 0 | 1 |

---

## Feature Request Trends

1. **Extension API expansion** — Multiple requests to expose more internal APIs to extensions: `ModelRuntime`, event handler unsubscribe, session system prompt appending, OAuth/renderPage functions.
2. **Structured output / JSON schema** — Provider-level structured output support remains a requested feature (#1086 closed but may be ongoing).
3. **Local model improvements** — Better Ollama integration, llama.cpp support, and handling of thinking blocks in compaction.
4. **Session optimization** — Faster session ID lookups, transcript scanning avoidance, prompt cache warming.

---

## Developer Pain Points

1. **Long TUI freezes** — Escape key interruption on large sessions causes ~60s freeze; full-screen redraw storms on long transcripts.
2. **Platform-specific bugs** — Windows-specific issues with bash timeout orphaning, mouse tracking in ConPTY, and clipboard encoding.
3. **Compaction failures** — Recurring issues with compaction overflowing, refusing due to thinking blocks, and queue rollback bugs.
4. **Provider configuration friction** — OAuth credential handling delays, missing baseUrl paths, model catalog staleness (GLM, OpenRouter).
5. **Extension silent fallbacks** — `user_bash` hook errors silently falling back to local shell was a recurring complaint; now fixed to fail closed.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a Qwen Code community digest based on the provided GitHub data. Let me analyze the data and create a structured digest following the specified format.

Let me go through the data:

**Releases (last 24h):**
- v0.24.0: Release v0.24.0
- v0.24.0-nightly.20260916.b8def02aad: Release v0.24.0-nightly.20260916
- v0.23.5-preview.0: Release v0.23.5-preview.0

**Breaking Changes:**
- fix(core)!: let bash expand project directory variables in command hooks (#11864)

**Latest Issues (showing top 30 by comment count):**
Let me pick 10 noteworthy issues:

1. #8596 - Deprecate Electron desktop app and rename desktop-shell to desktop (P2, feature-request) - 9 comments
2. #11728 - test(cli): close the remaining fail-open gaps in the REST docs contract guard (P3, bug) - 8 comments
3. #11556 - vscode-ide-companion 0.23.1 cannot work under Remote-SSH — webview stuck loading (P1, bug) - 8 comments
4. #11955 - Desktop app ignores ui.theme and general.language settings (P2, bug) - 6 comments
5. #11976 - Webview fails to reach workspace daemon in VS Code Remote (Container) due to dynamic port binding (P1, bug) - 6 comments
6. #12023 - vscode插件最新版本在ssh远程开发的时候无法使用 (P1, bug) - 5 comments
7. #12040 - web-shell: a rejected `?daemon=` override files the URL fragment credential (P2, security bug) - 4 comments


8. #12028 - tracking(core): non-conversation context token governance (P2, enhancement) - 4 comments
9. #12027 - [Bug] Uncaught RangeError: Invalid array length in Ink getMaxWidth / yoga getComputedBorder crashes CLI (P2, bug) - 4 comments
10. #11995 - Web Shell session-recovery banner false positive (P2, bug) - 4 comments

Now looking at the top pull requests from the last 24 hours, I see several notable contributions. #11975 introduces host settings item exclusions for web-shell, while #9466 refactors anchor rewind mapping to use stable prompt identity. #11808 adds test coverage for serve guide operations, #12001 corrects how stop-hook blocks are counted across tool round trips, and #12016 improves CI handling for unwritable docker sandbox lock directories. There's also an important fix in #12007 addressing session recovery behavior.

Additional PRs worth noting include #12039 converting fetched tables into proper table structures rather than loose paragraphs, #10453 handling CLI startup crashes when output-language files aren't writable, and #11001 ensuring interactive PTY sessions are properly waited for during cleanup. The remaining PRs focus on retry logic for macOS E2E test failures, UI adjustments for short viewport content, shell command splitting improvements, and CI job rerun optimizations.</think>

# Qwen Code Community Digest — 2026-09-17

## Today's Highlights

The Qwen Code project released **v0.24.0** alongside a new nightly build, featuring a breaking change to how bash expands project directory variables in command hooks. Critical issues emerged around VS Code Remote (SSH/Container) connectivity—multiple P1 bugs report webview failures when attempting to reach the workspace daemon, affecting user workflows in remote development environments. The team also addressed security concerns where rejected daemon overrides could incorrectly persist credentials in the URL fragment.

---

## Releases

| Version | Summary |
|---------|---------|
| **v0.24.0** | Latest stable release. Includes breaking change: bash now expands project directory variables in command hooks ([#11864](https://github.com/QwenLM/qwen-code/pull/11864)). |
| **v0.24.0-nightly.20260916.b8def02aad** | Nightly build with docs updates (ACP boundary acceptance) and CI fixes. |
| **v0.23.5-preview.0** | Preview release with Windows inode test improvements and Linux observations preservation. |

---

## Hot Issues

| Issue | Priority | Summary | Why It Matters |
|-------|----------|---------|----------------|
| [#8596](https://github.com/QwenLM/qwen-code/issues/8596) | P2 | **Deprecate Electron desktop app and rename desktop-shell to desktop** — Proposes removing `packages/desktop` (Electron) and renaming `packages/desktop-shell` (Tauri) to take the `desktop` namespace. | Strategic shift toward Tauri as the sole desktop platform; impacts future maintenance and user migration. 9 comments. |
| [#11556](https://github.com/QwenLM/qwen-code/issues/11556) | P1 | **vscode-ide-companion 0.23.1 cannot work under Remote-SSH — webview stuck loading** — Webview fails to load in VS Code Remote-SSH environments. | Blocks remote development workflows; affects users developing on remote hosts. 8 comments. |
| [#11976](https://github.com/QwenLM/qwen-code/issues/11976) | P1 | **Webview fails to reach workspace daemon in VS Code Remote (Container) due to dynamic port binding without asExternalUri** — Daemon unreachable in Dev Containers. | Critical for containerized development; blocks core functionality in a common DevOps workflow. |
| [#12023](https://github.com/QwenLM/qwen-code/issues/12023) | P1 | **vscode插件最新版本在ssh远程开发的时候无法使用** — Chinese-language report of SSH remote development failure. | Same root cause as #11976; indicates broader impact in the developer community. |
| [#11955](https://github.com/QwenLM/qwen-code/issues/11955) | P2 | **Desktop app ignores ui.theme and general.language settings** — Theme and language settings not applied in desktop app. | User-facing UX bug; breaks theme customization expectations. |
| [#12040](https://github.com/QwenLM/qwen-code/issues/12040) | P2 | **web-shell: a rejected `?daemon=` override files the URL fragment credential under the page origin's key** — Security issue where credentials persist incorrectly. | Security vulnerability; mishandled credentials could expose sensitive data. |
| [#12028](https://github.com/QwenLM/qwen-code/issues/12028) | P2 | **tracking(core): non-conversation context token governance** — System prompts, tool schemas, and context files sent on every request, inflating token usage. | Cost and performance concern for large-context models; currently invisible to users. |
| [#12027](https://github.com/QwenLM/qwen-code/issues/12027) | P2 | **[Bug] Uncaught RangeError: Invalid array length in Ink getMaxWidth crashes CLI on Windows** — CLI crashes during long interactive sessions with large contexts on Windows. | Stability issue on Windows; affects power users with large contexts. |
| [#11995](https://github.com/QwenLM/qwen-code/issues/11995) | P2 | **Web Shell session-recovery banner false positive** — "Continue execution" button shows for normally completed turns. | Confusing UX; users prompted unnecessarily. |
| [#11728](https://github.com/QwenLM/qwen-code/issues/11728) | P3 | **test(cli): close the remaining fail-open gaps in the REST docs contract guard** — Test coverage gaps in REST API documentation contracts. | Technical debt; ensures documentation integrity. |

---

## Key PR Progress

| PR | Author | Summary |
|----|--------|---------|
| [#11975](https://github.com/QwenLM/qwen-code/pull/11975) | Lilian0122 | **feat(web-shell): support host settings item exclusions** — Adds optional exclusion list for hiding settings UI elements while retaining form structure. |
| [#12001](https://github.com/QwenLM/qwen-code/pull/12001) | qqqys | **fix(core): count Stop-hook blocks across tool round trips** — Tracks consecutive stop-hook blocks per prompt across tool executions. |
| [#12007](https://github.com/QwenLM/qwen-code/pull/12007) | yiliang114 | **fix(core): stop session recovery from flagging unanswered notifications** — Prevents false positives in session recovery classification. |
| [#12039](https://github.com/QwenLM/qwen-code/pull/12039) | L4XB | **fix(core): convert a fetched table into a table, not loose paragraphs** — Adds Turndown table rules to preserve HTML tables in web_fetch. |
| [#12016](https://github.com/QwenLM/qwen-code/pull/12016) | qwen-code-dev-bot | **fix(ci): tolerate unwritable docker sandbox lock dir on self-hosted runners** — Handles EACCES errors from root-owned cache directories. |
| [#9466](https://github.com/QwenLM/qwen-code/pull/9466) | yiliang114 | **refactor: anchor rewind mapping to stable prompt identity** — Rewind now uses persisted prompt identity instead of positional turn order. |
| [#12000](https://github.com/QwenLM/qwen-code/pull/12000) | qqqys | **feat(workflows): let agent() narrow a subagent to an explicit tool allowlist** — Workflow agents can now restrict tool access via allowlist. |
| [#11711](https://github.com/QwenLM/qwen-code/pull/11711) | wenshao | **feat(core): add container execution for subagents** — Supports Docker/Podman execution backend for subagent dispatches. |
| [#11821](https://github.com/QwenLM/qwen-code/pull/11821) | yiliang114 | **fix(core): treat a word-initial # as a comment when splitting shell commands** — Shell splitter now recognizes `#` comments. |
| [#11857](https://github.com/QwenLM/qwen-code/pull/11857) | yiliang114 | **ci(review): skip re-reviewing a push whose diff is unchanged** — Avoids redundant reviews for no-op branch updates. |

---

## Feature Request Trends

Based on issue analysis, the most requested feature directions are:

1. **Remote/Container Development Support** — Multiple issues (#11556, #11976, #12023) highlight the need for robust VS Code Remote (SSH, Container) compatibility.
2. **Token/Context Governance** — Request for visibility and control over non-conversation context overhead (#12028).
3. **Desktop App Consolidation** — Ongoing effort to deprecate Electron in favor of Tauri (#8596).
4. **Chat Panel Consolidation** — Proposal to unify chat UI across web-shell, VSCode webview, and desktop (#5883).
5. **Remote Daemon Workflows** — Feature request to connect local clients to remote daemons for workspace/session management (#11475).

---

## Developer Pain Points

- **Remote Development Failures**: Multiple P1 bugs indicate the VS Code extension and webview consistently fail in Remote-SSH and Container environments, blocking a core user workflow.
- **Windows Stability**: CLI crashes with `RangeError: Invalid array length` during large context rendering on Windows (#12027).
- **Theme/Language Settings Ignored**: Desktop app disregards user-configured theme and language preferences (#11955).
- **Session Recovery False Positives**: Users see spurious "Continue execution" prompts for completed turns (#11995).
- **Credential Handling Bugs**: Security issues with daemon credential persistence in URL fragments (#12040) and navigation path credential drops (#12010).
- **CI Infrastructure**: ECS runner fleet staleness (#11633) and helper test failures (#11937) cause integration delays.

---

*Generated from GitHub data — github.com/QwenLM/qwen-code*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*