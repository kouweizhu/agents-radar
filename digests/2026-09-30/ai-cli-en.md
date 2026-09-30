# AI CLI Tools Community Digest 2026-09-30

> Generated: 2026-09-30 01:28 UTC | Tools covered: 7

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

<think>The user wants me to generate a cross-tool comparison report comparing the AI CLI tools communities I just analyzed. Let me review what I have for each tool:

1. **Claude Code** (github.com/anthropics/claude-code)
   - Releases: v2.1.285
   - Issues: 50 total (showed top 30)
   - PRs: 9 items (showed top 9)
   - Discussions: No data provided

2. **OpenAI Codex** (github.com/openai/codex)
   - Releases: Multiple (0.159.0-0.159.2, 0.160.0-alpha versions)
   - Issues: Shown 20+ items
   - PRs: 10 items
   - Discussions: Active (usage limits, feature requests)

3. **Gemini CLI** (github.com/google-gemini/gemini-cli)
   - Releases: v0.62.0, v0.63.0-preview.0
   - Issues: 50 items
   - PRs: 49 items
   - Discussions: No data provided

4. **GitHub Copilot CLI** (github.com/github/copilot-cli)
   - Releases: v1.0.90 series (5 releases)
   - Issues: Showed top issues
   - PRs: 1 item (#5000)
   - Discussions: Active

5. **OpenCode** (github.com/anomalyco/opencode)
   - Releases: No releases in last 24h
   - Issues: 50 items
   - PRs: 20 items
   - Discussions: Not shown

6. **Pi** (github.com/earendil-works/pi)
   - Releases: v0.99.0, v0.99.1
   - Issues: Multiple issues
   - PRs: ~15 items
   - Discussions: Active (1 item)
   
7. **Qwen Code** (github.com/QwenLM/qwen-code)
   - Releases: v0.24.7, v0.24.7-nightly
   - Issues: 50 items
   - PRs: 10 items
   - Discussions: No data provided

Now I need to create a structured comparison report with the sections requested: Ecosystem Overview, Activity Comparison Table, Shared Feature Directions, Differentiation Analysis, Community Momentum & Maturity, and Trend Signals.</think>

# Cross-Tool AI CLI Ecosystem Report — 2026-09-30

## 1. Ecosystem Overview

The AI CLI tools landscape shows mature, production-grade ecosystems across all major providers, with Anthropic's Claude Code, OpenAI's Codex, Google's Gemini CLI, GitHub's Copilot CLI, and emerging players like OpenCode, Pi, and Qwen Code all actively shipping. Today's snapshot reveals a sector in strong competition: vendors are racing to implement extensibility (mods/plugins), improve multi-account management, and optimize token/context governance—driven largely by enterprise developer feedback. Platform reliability (especially Windows) remains a consistent pain point, while the shift toward autonomous agentic workflows is reshaping architectural discussions across all communities.

---

## 2. Activity Comparison

| Tool | Issues | PRs | Discussions | Releases (24h) |
|------|--------|-----|-------------|----------------|
| **Claude Code** | 50 | 9 | N/A* | 1 (v2.1.285) |
| **OpenAI Codex** | 20+ | 10 | 3+ | 5 (v1.0.90 series) |
| **Gemini CLI** | 50 | 49 | N/A* | 2 (v0.62.0, v0.63.0-preview.0) |
| **Copilot CLI** | 15+ | 1 | 3+ | 5 (v1.0.90-1 to v1.0.90-5) |
| **OpenCode** | 50 | 20 | N/A* | 0 |
| **Pi** | 20+ | ~15 | 1 | 2 (v0.99.0, v0.99.1) |
| **Qwen Code** | 50 | 10 | N/A* | 2 (v0.24.7, nightly) |

*These repositories use Issues and PRs as primary channels; Discussions are not the dominant medium.

---

## 3. Shared Feature Directions

| Feature Direction | Tools Requesting | Specific Needs |
|------------------|------------------|----------------|
| **Extensibility / Mods / Plugins** | Claude Code, Copilot CLI, Pi, Qwen Code | Function hooks, plugin lifecycle events, allowlist-based tool selection, third-party plugin support |
| **Multi-Account / Profile Management** | Claude Code, Copilot CLI | Native profile switching, session management across teams |
| **Token / Context Cost Controls** | Claude Code, Codex, Gemini CLI, Qwen Code | Visibility into system prompt/tool schema overhead, prompt caching improvements, token metering transparency |
| **Memory & State Management** | OpenCode, Pi, Gemini CLI, Qwen Code | Bounded memory growth, session compaction, transcript pruning, persistent storage lifecycle |
| **Windows Platform Parity** | Claude Code, Codex, Copilot CLI, Pi | Console handling, daemon privileges, WSL2 integration, MSIX/sandbox reliability |
| **MCP Ecosystem Expansion** | Claude Code, Copilot CLI, Pi, Qwen Code | Server authentication, OAuth flows, managed local servers, tool discovery |
| **Agent Autonomy** | Claude Code, Gemini CLI, Qwen Code | Subagent resilience, automatic recovery, staged/dual-path architectures |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|------|---------------|--------------|---------------------|
| **Claude Code** | Extensibility via mods, enterprise security defaults | Developers needing customizable AI workflows | System prompt composition, permission deny-rules, plugin architecture |
| **OpenAI Codex** | Windows stability, usage transparency, CLI UX | Windows developers, enterprise teams | Console suppression, compact welcome, rate limit visibility |
| **Gemini CLI** | Agent reliability, AST-aware tooling, sandboxing | Advanced developers needing code intelligence | Zero-dependency OS sandboxing, append-only delta patching, atomic state |
| **Copilot CLI** | MCP integration, session management, npm publishing | DevOps and automation-focused users | MCP OAuth caching, session-scoped approvals, npm tarball publishing |
| **OpenCode** | Provider flexibility, memory optimization | Multi-model users, cost-conscious developers | Multi-provider support, usage bridging, memory-bounded caching |
| **Pi** | Codemode & MCP, working memory, long-context governance | Power users needing persistent context | Session-bound indexes, token governance tracking, managed llama.cpp |
| **Qwen Code** | Managed agents, A2A multi-agent, memory optimization | Enterprise teams with agentic workflows | Dual-path managed architecture, Mem0 integration, bounded cooldown |

---

## 5. Community Momentum & Maturity

### High Velocity
- **Gemini CLI**: 49 PRs in the queue indicates heavy active development; strong engineering investment.
- **OpenCode**: 20 PRs with a focus on performance fixes—rapid iteration on stability.
- **Claude Code**: Consistent release cadence with security hardening focus (deny rules, security guidance CI).

### Active & Engaged
- **Copilot CLI**: Despite only 1 PR, community engagement is high in discussions—users actively requesting features.
- **Qwen Code**: 10 PRs with architectural proposals (dual-path managed agents) showing ambitious roadmap.
- **Pi**: 15 PRs addressing OAuth flows and TUI polish—responsive to UX feedback.

### Emerging / Narrower Focus
- **OpenCode**: Lower discussion activity but strong issue tracking; appears more engineer-driven than community-driven.

---

## 6. Trend Signals

| Signal | Evidence | Implication |
|--------|----------|-------------|
| **Enterprise Demands Are Dominating** | Multi-account, org-level permission defaults, security deny-rules, SSO/OAuth features | AI CLI tools are maturing from personal assistants to team/deviceda platform components |
| **Windows Is the Primary Pain Point** | 4 of 7 tools have active Windows issues (console flashing, daemon failures, sandbox incompatibility) | Windows developer experience is a competitive differentiator—vendors investing heavily here |
| **Token Cost Opacity Is a Top User Complaint** | Codex, Claude Code, Qwen Code, Gemini all have usage/visibility issues | Without transparent metering, enterprise adoption stalls—this is becoming a table-stakes requirement |
| **Agentic Architecture Is Reshaping Roadmaps** | Qwen's dual-path proposal, Claude's mods, Gemini's agent lifecycle | The shift from chat-toolk to autonomous agents requires new architectural patterns (durable sessions, background tasks, state recovery) |
| **MCP Is Emerging as a Standard** | Multiple tools racing to support MCP servers, OAuth, managed local servers | Model Context Protocol gaining traction as the plugin/integration layer—vendor lock-in avoidance |
| **Memory Management Is a Cross-Cutting Concern** | OpenCode (13GB+ DB), Claude (OOM), Gemini (compaction), Pi (bounded indexes) | Long-running sessions expose fundamental engineering challenges—likely to see more investment here |

---

*Report compiled from GitHub data across 7 AI CLI tools — 2026-09-30*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data and create a highlights report. Let me examine the data provided:

**Pull Requests (sorted by comments, showing top 20):**
Looking at the data, I notice all PRs have "Comments: undefined" - this is interesting. The PRs listed are:
- #1298 - fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- #1742 - fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- #1771 - feat(skills): add proofcore-contract-auditor for smart contract notarization
- #1734 - Detect orphaned docx comments
- #1703 - Add md2video-audio skill
- #1792 - fix(docx): report LibreOffice timeout as an error and verify the output
- #1245 - Add notion-spec-to-implementation and quantitative-resume-auditor skills
- #525 - Add pyxel skill for retro game development
- #514 - Add document-typography skill
- #1681 - fix(skill-creator): support direct execution of package_skill.py and update usage paths
- #1615 - Add scnet-hpc skill
- #1607 - Update claude-api skill: mark four retired model IDs as retired
- #822 - feat: add AWT (AI Watch Tester) — AI-powered E2E testing skill
- #538 - fix(pdf): correct case-sensitive file references in SKILL.md
- #486 - Add ODT skill
- #210 - Improve frontend-design skill clarity and actionability
- #83 - Add skill-quality-analyzer and skill-security-analyzer to marketplace
- #1776 - Add blast-radius skill
- #723 - feat: add testing-patterns skill
- #541 - fix(docx): prevent tracked change w:id collision with existing bookmarks
 
I realize that while these PRs are presented as "top 20" by comments, the comment data is actually undefined. Instead, I'll focus on analyzing the Issues section, which provides more meaningful insights into community engagement and discussions.

The Issues section reveals several critical topics:
- Security concerns about community skills in the anthropic namespace
- Requests for organization-wide skill sharing
- A significant bug in skill/command trigger evaluation
- Issues with skill management and potential skill-related proposals

Key observations include a security vulnerability, user interface challenges, and potential skill development opportunities. The top issues highlight systemic problems in skill management and community interaction.</think>

# Claude Code Skills Community Highlights Report

**Data as of 2026-09-30 | Source: anthropics/skills**

---

## 1. Top Skills Ranking

The PR data shows undefined comment counts, but the most substantive activity appears in these Skills:

| PR | Skill | Functionality | Status |
|----|-------|---------------|--------|
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | Agent Skill for Web3 developers performing automated static analysis of Solidity/Rust smart contracts, anchoring cryptographic audit proofs onto the TON Blockchain via ProofCore's zero-storage Merkle protocol. | OPEN |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | Zero-cost skill that compiles Markdown documents into professional MP4 videos with realistic human-like voiceovers via Marp. | OPEN |
| [#822](https://github.com/anthropics/skills/pull/822) | **AWT (AI Watch Tester)** | Open-source E2E testing tool giving Claude vision and browser control — zero-code test generation from pointed URLs. | OPEN |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | Retro game development skill for creating, debugging, and verifying Pyxel games in Python with headless input-driven runs. | OPEN |
| [#1245](https://github.com/anthropics/skills/pull/1245) | **notion-spec-to-implementation** | Transforms product/tech specs into concrete Notion tasks with implementation plans, acceptance criteria, and progress tracking. | OPEN |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive testing skill covering Testing Trophy, unit testing (AAA pattern), React component testing with Testing Library. | OPEN |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Prevents typographic problems in AI-generated docs: orphan words, widow paragraphs, numbering misalignment. | OPEN |

---

## 2. Community Demand Trends

From Issues, the most-anticipated directions are:

| Issue | Demand Theme | Summary |
|-------|--------------|---------|
| [#492](https://github.com/anthropics/skills/issues/492) (43 comments) | **Security & Trust** | Community skills under `anthropic/` namespace impersonate official skills — creates trust boundary abuse where users grant elevated permissions unknowingly. |
| [#228](https://github.com/anthropics/skills/issues/228) (16 comments) | **Org-wide Sharing** | Request for shared skill library within organizations — currently requires manual file distribution. |
| [#556](https://github.com/anthropics/skills/issues/556) (12 comments) | **Evaluation Infrastructure** | `run_eval.py` has 0% skill trigger rate — blocks proper skill testing. |
| [#189](https://github.com/anthropics/skills/issues/189) (6 comments) | **Plugin De-duplication** | `document-skills` and `example-skills` contain identical content, exhausting context windows. |

**Emerging Direction:** Governance, security, and enterprise integration skills (e.g., agent-governance patterns, SharePoint document handling).

---

## 3. High-Potential Pending Skills

These active PRs show strong functional differentiation and may merge soon:

- **[#1771](https://github.com/anthropics/skills/pull/1771)** — proofcore-contract-auditor — Web3/Blockchain audit tooling
- **[#1703](https://github.com/anthropics/skills/pull/1703)** — md2video-audio — Markdown-to-video with voiceover
- **[#1245](https://github.com/anthropics/skills/pull/1245)** — notion-spec-to-implementation + quantitative-resume-auditor — Productivity/HR workflows
- **[#1615](https://github.com/anthropics/skills/pull/1615)** — scnet-hpc — HPC cluster operations (SSH/Slurm)
- **[#1776](https://github.com/anthropics/skills/pull/1776)** — blast-radius — Bulk destructive write safety checklists

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-ready, security-hardened skills with better evaluation infrastructure — fixing trust boundaries, trigger evaluation reliability, and enabling org-wide skill distribution.**

---

<think>The user wants me to generate a Claude Code community digest based on the GitHub data provided. Let me analyze the data and create a structured English digest.

Let me organize the information:

1. **Releases** - v2.1.285 has some new features:
   - Added `CLAUDE_CODE_DISABLE_WEB_FETCH` environment variable
   - Added `claude --desktop` to open Claude desktop app
   - Added `claude plugin configure <plugin>` command

2. **Issues** - There are 50 total issues, showing top 30. Let me pick 10 noteworthy ones:
   - #91870: Mods - make Claude 10x more extensible (225 comments, 128 👍)
   - #18435: Multiple Claude accounts in Desktop app (198 comments, 841 👍)
   - #97854: Auto mode classifier blocking Bash/ScheduleWakeup (25 comments, 33 👍)
   - #98145: Korean language not respected in tool call middle guidance (16 comments)
   - #89599: Windows MSIX idle stealth update issues (13 comments)
   - #97665: Subagent compaction bug (8 comments)
   - #95566: Native binary hangs on kvm64 CPU (7 comments)
   - #91775: /usage Stats tab counts incorrectly (5 comments)
   - #91395: Artifact tool loads ~12k tokens eagerly (4 comments)
   - #98292: GitHub integration issue (3 comments)

3. **Pull Requests** - 9 items, let me pick 10 important ones (there are only 9):
   - #98275: agents-md debug log (CLOSED)
   - #97241: sec-default system prompt (CLOSED)
   - #97334: sec-default rows continuation (OPEN)
   - #97293: mods declarations (OPEN)
   - #98080: settings deny rule (CLOSED)
   - #98083: allowManagedModsOnly (CLOSED)
   - #96434: security-guidance (OPEN)
   - #97952: CI security hardening (OPEN)
   - #94847: diff pane first edit (OPEN)

4. **Discussions** - No discussion data provided, so I'll omit this section.

Now let me create the digest with the requested structure, focusing on the most impactful items and their technical implications.</think>

# Claude Code Community Digest — 2026-09-30

## Today's Highlights

The v2.1.285 release introduces three notable additions: a `CLAUDE_CODE_DISABLE_WEB_FETCH` environment variable for security-conscious users, the `claude --desktop` command for streamlined desktop app launching, and a new `claude plugin configure` subcommand. Meanwhile, the community continues to drive significant feature discussions—particularly around extensibility via mods (225 comments) and multi-account management (198 comments, 841 👍), both signaling strong demand for deeper customization of the Claude Code experience.

---

## Releases

**v2.1.285** — Released: 2026-09-30

- **`CLAUDE_CODE_DISABLE_WEB_FETCH`**: New environment variable to disable the WebFetch tool entirely
- **`claude --desktop`**: New CLI flag to open the Claude desktop app on the current directory, or resume a session with `--continue` / `--resume <id>`
- **`claude plugin configure <plugin>`**: New subcommand to display plugin configuration details

---

## Hot Issues

| # | Issue | Summary | Why It Matters | Reactions |
|---|-------|---------|----------------|-----------|
| **#91870** | [Mods - make Claude 10x more extensible](https://github.com/anthropics/claude-code/issues/91870) | Community update: function hooks shipping "in weeks, not days." This is the flagship extensibility initiative. | Would enable third-party plugin developers to hook into Claude's execution pipeline—arguably the most requested capability. | 225 comments, 128 👍 |
| **#18435** | [Multiple Claude accounts management](https://github.com/anthropics/claude-code/issues/18435) | Feature request to manage multiple Claude accounts within the Desktop app with easy profile switching. | High-valence ask from power users and teams; 841 👍 makes this one of the most demanded features. | 198 comments, 841 👍 |
| **#97854** | [Auto mode: server-side classifier blocks Bash/ScheduleWakeup](https://github.com/anthropics/claude-code/issues/97854) | Auto mode returns no verdict 100% of the time for Bash and ScheduleWakeup, blocking trivial commands like `echo ok`. | Critical reliability issue in Auto mode—completely breaks core functionality. | 25 comments, 33 👍 |
| **#98145** | [Korean language not respected in tool call middle guidance](https://github.com/anthropics/claude-code/issues/98145) | Model repeatedly ignores explicit Korean language instruction in intermediate guidance between tool calls. | Localization/i18n bug affecting non-English users; demonstrates persistent instruction-following gaps. | 16 comments, 0 👍 |
| **#89599** | [Windows MSIX: idle stealth update quits app, process survives](https://github.com/anthropics/claude-code/issues/89599) | MSIX update leaves orphaned process, registration fails, app becomes unlaunchable until process killed. | Windows deployment blocker; affects enterprise/MSIX distribution scenarios. | 13 comments, 1 👍 |
| **#97665** | [Subagent compaction: tail record never written](https://github.com/anthropics/claude-code/issues/97665) | When subagent auto-compacts, the preserved segment's final record is referenced but never actually written to the transcript. | Data integrity bug; can cause conversation history loss in long-running agent sessions. | 8 comments, 0 👍 |
| **#95566** | [Binary hangs on kvm64 CPU (no SSE4/POPCNT)](https://github.com/anthropics/claude-code/issues/95566) | Native binary hangs at 100% CPU on VMs with kvm64 CPU model due to missing CPU features—needs pre-flight check. | Installation blocker for Linux VM users; affects containerized/cloud environments. | 7 comments, 1 👍 |
| **#91775** | [/usage Stats tab inflates token totals ~2x](https://github.com/anthropics/claude-code/issues/91775) | Counts `message.usage` per transcript row instead of per `message.id`, doubling reported token usage. | Cost tracking inaccuracy; users cannot rely on built-in usage stats. | 5 comments, 0 👍 |
| **#91395** | [Artifact tool loads ~12k tokens eagerly](https://github.com/anthropics/claude-code/issues/91395) | Artifact schema loaded into every session unconditionally, no opt-out except deny rule. | Context bloat for users not using Artifact; contributes to token overhead. | 4 comments, 2 👍 |
| **#98292** | [GitHub integration "no connector available"](https://github.com/anthropics/claude-code/issues/98292) | Chat reports no GitHub connector despite connected account and installed GitHub App. | Integration reliability issue; blocks workflow automation. | 3 comments, 0 👍 |

---

## Key PR Progress

| # | PR | Status | Summary |
|---|-----|--------|---------|
| **#98275** | [agents-md: send AGENTS.md loaded line to debug log](https://github.com/anthropics/claude-code/pull/98275) | ✅ Closed | Projects with AGENTS.md but no CLAUDE.md now log the loaded path to debug output. |
| **#97241** | [sec-default: system prompt sections continue past user tier](https://github.com/anthropics/claude-code/pull/97241) | ✅ Closed | Organization-level `sec-default` now properly overrides user-tier plugin influence on system prompt composition. |
| **#97334** | [sec-default: rows a conversation keeps continue past user tier](https://github.com/anthropics/claude-code/pull/97334) | 🔵 Open | Extends row retention logic beyond user tier for enterprise deployments. |
| **#97293** | [mods: declarations carry process.run truncation flags and list entries' mtimeMs](https://github.com/anthropics/claude-code/pull/97293) | 🔵 Open | Adds `isStdoutTruncated`/`isStderrTruncated` to process results and `mtimeMs` to file listings—enables mod-level file/process introspection. |
| **#98080** | [sec-default: settings deny rule holds over plugin allow/ask](https://github.com/anthropics/claude-code/pull/98080) | ✅ Closed | Security hardening: organization deny rules now take precedence over user-installed plugin permissions. |
| **#98083** | [sec-default: allowManagedModsOnly option](https://github.com/anthropics/claude-code/pull/98083) | ✅ Closed | New managed option allowing organizations to permit only org-managed mods while blocking user-installed ones. |
| **#96434** | [security-guidance: keep denied/secret files out of reviewer reach](https://github.com/anthropics/claude-code/pull/96434) | 🔵 Open | Fixes vulnerability where security reviewer could access files blocked by session permissions via git diff/show. |
| **#97952** | [CI: security hardening for GitHub Actions](https://github.com/anthropics/claude-code/pull/97952) | 🔵 Open | Adds egress-firewall runner and input validation to Claude-triggered workflows. |
| **#94847** | [diff: first edit opens pane only when it has files](https://github.com/anthropics/claude-code/pull/94847) | 🔵 Open | Diff pane no longer opens empty on first edit—prevents confusion when editing outside repo/ignored files. |

---

## Feature Request Trends

1. **Extensibility & Plugin System**: The #91870 mods initiative is the dominant theme—community wants function hooks, plugin lifecycle events, and deeper integration points. Multiple PRs (#97293, #98080, #98083) are laying groundwork.

2. **Multi-Account & Profile Management**: #18435 shows strong demand for native multi-account switching in Desktop app. Related: workspace/folder management (#98285) and session resumption.

3. **Context/Token Cost Controls**: Repeated requests to reduce eager loading of unused tool schemas (#91395, #91775, #79504, #92554, #94907)—users want allowlist-based tool selection and explicit opt-outs.

4. **Platform-Specific Reliability**: Windows MSIX update issues (#89599), Linux VM compatibility (#95566), ARM64 hangs (#98291), and macOS permissions (#98169) indicate platform QA gaps.

5. **Permission/Auth Refinements**: Auto mode classifier false positives (#97854, #98169), sign-in persistence (#97344), and security default overrides (#98080) reflect growing permission system complexity.

---

## Developer Pain Points

- **Auto Mode Reliability**: Classifier returning no verdict is blocking core tools entirely—high-severity regressions affecting daily workflows.
- **Token/Cost Opacity**: Multiple issues (#91775, #91395) point to users unable to understand or control their context consumption.
- **Cross-Platform Inconsistency**: Platform-specific bugs (Windows/MSIX, Linux/kvm64, ARM64, macOS permissions) suggest fragmented testing coverage.
- **Integration Friction**: GitHub connector showing as unavailable despite valid setup (#98277, #98292) and Chrome sign-in lost on restart (#97344) frustrate automation workflows.
- **Data Loss Risks**: Subagent compaction bug (#97665), git reset without confirmation (#84660), and Cowork sandbox disk fill (#91680) represent serious data integrity concerns.

---

*Generated from GitHub data — anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate an OpenAI Codex community digest for 2026-09-30 based on the provided GitHub data. Let me analyze the data and create a structured digest following the specified format.

Let me organize the information:

**Releases (last 24h):**
- rust-v0.160.0-alpha.6.1 - Release
- rust-v0.159.2 - Bug fix: Suppressed console windows flashing on Windows
- rust-v0.159.1 - New Features: Added GPT-6.1 Sol as default model
- rust-v0.159.0 - New Features: instant_interrupt, compact welcome screen, warnings
- rust-v0.161.0-alpha.2 - Release
- rust-v0.161.0-alpha.1 - Release
- rust-v0.160.0-alpha.6 - Release
- rust-v0.160.0-alpha.3 - Release

**Top Issues (by comment count):**
1. #48074 - Windows terminal windows flash during requests - 117 comments, 139 👍
2. #25826 - Windows Desktop maximized window spills onto adjacent monitors - 39 comments, 22 👍
3. #48043 - Codex CLI 0.157.0 fails to start on Windows with daemon privilege error - 37 comments, 36 👍
4. #44768 - Windows app-server daemon opens visible console window for hooks - 24 comments, 8 👍
5. #48324 - ChatGPT Windows Desktop "Unable to load organization settings" - 24 comments, 4 👍
6. #42243 - Codex Pet overlay reappears after being tucked away - 23 comments, 31 👍
7. #45835 - "Selected model is at capacity" despite healthy connectivity - 21 comments, 6 👍


8. #25799 - Windows Codex app cannot launch sandboxed commands for WSL2 - 19 comments, 9 👍
9. #41779 - Codex Windows local API launch rejected with "blocked by policy" - 15 comments, 0 👍
10. #48777 - Android Codex Remote repeatedly returns to "Authorize this phone" - 7 comments, 0 👍

I've compiled the top 10 most active issues by comment engagement. There's a clear pattern of Windows-related problems dominating the discussion, particularly around console behavior, daemon privilege errors, and API launch restrictions. The Windows platform seems to be experiencing significant friction points that are drawing the most community attention and feedback.

The remaining issues expand into platform-specific challenges: authentication failures on Android, thread synchronization problems, usability preferences around greeting messages, cross-platform sandbox constraints, and rate limiting complications. Each represents a different dimension of user friction with the system.

Looking at the pull requests, I'm seeing infrastructure work focused on path handling across Windows and POSIX systems, logging improvements through payload truncation and ANSI filtering, and session recovery mechanisms for exec-servers.

There are also quality-of-life enhancements around telemetry for MCP OAuth, test serialization for Windows sandbox environments, and credential management refinements. A couple of notable changes include removing the randomized TUI greetings that users found distracting and adding support for cyber access programs with OpenAI API keys.

In the discussions, I'm noticing users are asking about usage limits between Plus tier and Codex, reporting false "usage limit reached" errors even when Code Review shows available quota, and raising concerns about Codex CLI now taking over the full terminal window. There's also interest in verifying permission profiles on Windows Desktop, debugging local executor failures on Windows 11, and some community projects like Lunavect for session management and Mobile Codex for Android integration.</think>

# OpenAI Codex Community Digest — 2026-09-30

## Today's Highlights

The Codex team shipped three point releases this cycle (0.159.0–0.159.2), introducing GPT-6.1 Sol as the default model and backporting a critical Windows console-flashing fix that had generated over 100 comments. Community discussion is dominated by Windows platform issues—particularly around daemon privilege errors, sandboxed command execution failures, and CLI fullscreen behavior—while a PR merged today removes randomized TUI greetings in response to user backlash.

---

## Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **0.159.2** | Patch | Suppressed console window flashing on Windows when Codex launches background processes and sandboxed commands. Fixes [#48074](https://github.com/openai/codex/issues/48074). |
| **0.159.1** | Minor | Added GPT-6.1 Sol as the default model in bundled, Amazon Bedrock Mantle, and Runtime catalogs. |
| **0.159.0** | Minor | New `instant_interrupt` feature allows steering Codex during model responses. New sessions receive a compact welcome screen with consistent headers and occasional tips. |
| **0.160.0-alpha.6.1** | Alpha | Point release for alpha track. |
| **0.161.0-alpha.1 / alpha.2** | Alpha | Early preview releases. |

---

## Hot Issues

### Platform & Stability

1. **[#48074](https://github.com/openai/codex/issues/48074)** — **Windows: terminal windows repeatedly flash during requests** (117 comments, 139 👍)  
   *The top issue by engagement.* Users on Windows 11 report persistent console flashing when the Codex daemon runs background processes. Backported in 0.159.2, but users on earlier versions still affected.

2. **[#48043](https://github.com/openai/codex/issues/48043)** — **Codex CLI 0.157.0 fails to start on Windows with daemon privilege error** (37 comments, 36 👍)  
   Regression in 0.157.0; 0.156.1 works. Users report daemon privilege errors blocking CLI startup entirely.

3. **[#44768](https://github.com/openai/codex/issues/44768)** — **app-server daemon opens visible console window for every hook and shell command** (24 comments, 8 👍)  
   Related to #48074. On Windows, every hook and shell command spawns a visible console window, disrupting workflow.

4. **[#25799](https://github.com/openai/codex/issues/25799)** — **Windows Codex app cannot launch sandboxed commands for WSL2 projects** (19 comments, 9 👍)  
   Cross-platform friction: sandboxed commands fail when Codex runs on Windows but targets WSL2 projects.

5. **[#41779](https://github.com/openai/codex/issues/41779)** — **Windows: local API launch rejected with "blocked by policy"** (15 comments, 0 👍)  
   PowerShell commands blocked before execution by Windows policy, preventing local dev API launches.

### UX & Behavior

6. **[#48913](https://github.com/openai/codex/issues/48913)** — **Add a setting to disable random session greetings** (6 comments, 18 👍)  
   Users want to disable the randomly selected greeting phrases ("Speak, friend, and enter a prompt") that appear in every new CLI session. See PR #49395 for resolution.

7. **[#42243](https://github.com/openai/codex/issues/42243)** — **Codex Pet overlay reappears after being tucked away** (23 comments, 31 👍)  
   The floating Pet overlay resurfaces after users explicitly tuck it away, disrupting focused work.

8. **[#48324](https://github.com/openai/codex/issues/48324)** — **ChatGPT Windows Desktop: "Unable to load organization settings"** (24 comments, 4 👍)  
   Codex fails to load within the ChatGPT Windows desktop app, blocking composer access entirely.

### Rate Limits & Auth

9. **[#45835](https://github.com/openai/codex/issues/45835)** — **"Selected model is at capacity" despite healthy connectivity** (21 comments, 6 👍)  
   Users see repeated capacity errors even when network and account status are healthy—potential false positives in capacity detection.

10. **[#48777](https://github.com/openai/codex/issues/48777)** — **Android: Codex Remote repeatedly returns to "Authorize this phone"** (7 comments, 0 👍)  
    Android pairing with Codex running in WSL fails after browser authorization, blocking mobile remote workflows.

---

## Key PR Progress

| PR | Summary |
|----|---------|
| **[#49395](https://github.com/openai/codex/pull/49395)** | **Remove randomized greetings from TUI session headers** — Merged. Responds to community feedback (issues #48913, #48991). |
| **[#49424](https://github.com/openai/codex/pull/49424)** | Infer Windows UNC paths with forward and mixed slashes. Fixes path interpretation on Windows. |
| **[#49416](https://github.com/openai/codex/pull/49416)** | Omit payloads from multiline ANSI warnings. Reduces log bloat from large rendered content. |
| **[#49415](https://github.com/openai/codex/pull/49415)** | Truncate input text in protocol debug output. Limits `ContentItem::InputText` debug formatting to 512-byte prefixes. |
| **[#49407](https://github.com/openai/codex/pull/49407)** | Recover exec-server sessions after environment info timeouts. Wraps metadata RPC in 30-sec timeout to prevent stuck transports. |
| **[#49406](https://github.com/openai/codex/pull/49406)** | Support explicit cyber access programs with OpenAI API keys. New disabled-by-default feature for `cyberAccessProgram` selections. |
| **[#49403](https://github.com/openai/codex/pull/49403)** | Add experimental flag for bundled tools in login shells. New `login_shell_package_path` feature. |
| **[#49386](https://github.com/openai/codex/pull/49386)** | **[0.160] Backport Windows console fix to alpha.6** — Cherry-picks console suppression for 0.160 track. |
| **[#49385](https://github.com/openai/codex/pull/49385)** | **[0.159] Backport Windows console suppression for 0.159.2** — Fixes #48074 in stable release. |
| **[#49392](https://github.com/openai/codex/pull/49392)** | Add attributed MCP OAuth credential storage telemetry. Instruments credential load/save/delete operations. |

---

## Hot Discussions

### General

- **[#2251](https://github.com/openai/codex/discussions/2251)** — **Codex Usage Limits** (58 comments, 56 👍)  
  Users asking whether Plus tier limits (3000 Thinking/week) differ between ChatGPT app and Codex CLI.

- **[#8503](https://github.com/openai/codex/discussions/8503)** — **"usage limit reached" despite Code Review showing 100% remaining** (22 comments, 9 👍)  
  GitHub Connector reports usage limits immediately on new PRs even when quota appears available. Potential quota-tracking mismatch.

- **[#49129](https://github.com/openai/codex/discussions/49129)** — **Codex CLI goes fullscreen** (2 comments, 4 👍)  
  Users surprised that the latest CLI release takes over the entire terminal window. Some prefer scrolling behavior.

- **[#49282](https://github.com/openai/codex/discussions/49282)** — **Codex is hijacking right-click in Terminal on MacOS** (0 comments, 1 👍)  
  User reports loss of macOS Services menu in Terminal right-click. No response yet.

### Q&A

- **[#46001](https://github.com/openai/codex/discussions/46001)** — **Windows Desktop: verify selected versus effective permission profile** (3 comments, 1 👍)  
  User asks how to confirm which permission profile is actually active vs. what's selected in the UI.

- **[#49259](https://github.com/openai/codex/discussions/49259)** — **Codex Desktop local executor fails on Windows 11** (1 comment, 1 👍)  
  User debugging ACL/sandbox failures with `helper_unknown_error` and `SetNamedSecurityInfoW` errors.

### Show and tell

- **[#49253](https://github.com/openai/codex/discussions/49253)** — **Lunavect: a Mac menu bar list of Codex sessions** (1 comment, 1 👍)  
  Open-source macOS menu bar app showing active Codex/Claude Code sessions with state (working, waiting for approval) and rate limit timers.

- **[#47231](https://github.com/openai/codex/discussions/47231)** — **Mobile Codex — run Codex directly on Android** (1 comment, 1 👍)  
  Community-built Android app bundling a Codex port for on-device use without requiring a remote PC.

---

## Feature Request Trends

From Issues and Discussions, the following themes emerge:

1. **Windows Platform Parity** — Multiple requests for Windows console handling, WSL2 sandbox compatibility, and daemon privilege management. Windows users are hitting friction points that macOS/Linux users aren't.
2. **Customization & Control** — Users want to disable TUI greetings (#48913), control session headers, and verify effective permission profiles (#46001).
3. **Usage & Rate Limit Transparency** — Confusion over usage tracking (#8503, #49322), capacity error false positives (#45835), and tier limit differences between ChatGPT and Codex (#2251).
4. **Mobile & Remote Workflows** — Android remote pairing issues (#48777), mobile session accessibility (#49090), and community mobile Codex experiments (#47231).
5. **UI Stability** — Pet overlay behavior (#42243), fullscreen CLI changes (#49129), and right-click hijacking (#49282).

---

## Developer Pain Points

- **Windows console flashing & daemon failures** — The #1 pain point. Backported fixes are shipping, but users on older versions remain affected.
- **Unclear usage limits** — Developers report being blocked by "usage limit reached" when quota appears available, suggesting metering logic is opaque or inconsistent.
- **CLI fullscreen behavior** — A recent change to take over the full terminal window is divisive; some users prefer traditional scrolling.
- **Sandboxed command execution on Windows/WSL2** — Cross-environment tool calls frequently fail with policy or sandbox errors.
- **Credential & auth state confusion** — Users struggle to understand whether they're authenticated, which permission profile is active, and where credentials are actually stored.

---

*Digest generated from GitHub data for 2026-09-30.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the provided GitHub data for the Gemini CLI repository and create a structured community digest.

The data includes:
- Latest Releases (last 24h): v0.63.0-preview.0 and v0.62.0
- Latest Issues (50 items, top 30 shown)
- Latest Pull Requests (49 items, top 20 shown)

Let me organize this into the requested format:

1. **Today's Highlights** - Summarize key updates
2. **Releases** - Version changes
3. **Hot Issues** - 10 noteworthy issues
4. **Key PR Progress** - 10 important PRs
5. **Hot Discussions** - No discussion data provided
6. **Feature Request Trends** - Common requests
7. **Developer Pain Points** - Recurring frustrations

Let me pick the most important items:

**Releases:**
- v0.63.0-preview.0 - includes fix for connection recovery progress indicator
- v0.62.0 - includes fix for A2A server store metadata endpoint

**Hot Issues (10 noteworthy):**
1. #22323 - Subagent recovery after MAX_TURNS reported as GOAL success (P1, 13 comments)
2. #19873 - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (P2, 9 comments)
3. #21409 - Generalist agent hangs (P1, 8 comments, 8 👍)
4. #22745 - AST-aware file reads/search (P2, 7 comments)
5. #21968 - Gemini does not use skills and sub-agents enough (P2, 6 comments)
6. #22267 - Browser Agent ignores settings.json overrides (P2, 4 comments)
7. #22232 - Browser Agent resilience: Automatic session takeover (P3, 4 comments)


8. #21983 - browser subagent fails in wayland (P1, 4 comments)
9. #21000 - Experiment with native file tools for task tracker (P3, 4 comments)
10. #20079 - symlink agent recognition issue (P2, 4 comments)

**Key PRs (10 important):**
1. #29568 - append-only delta patching in ChatRecordingService (P1, XL)
2. #29573 - handle registry port in sandbox image name parsing
3. #29508 - npm-dependencies update (76 updates)
4. #29557 - prevent CPU hang on @ within code (P1)
5. #29570 - markdown-it update
6. #29528 - propagate resolved folder trust state in headless mode (P1)
7. #29560 - Windows ConPTY forwards IME cursor position (P2)
8. #29549 - bridge PromptResponse.usage in ACP mode
9. #29564 - preserve env placeholders during settings migration
10. #29563 - keep line terminators when truncating

Now I'll generate the digest with this information.</think>

# Gemini CLI Community Digest — 2026-09-30

## 1. Today's Highlights

The Gemini CLI team has shipped two new releases (v0.62.0 and v0.63.0-preview.0), addressing critical stability issues including a CPU hang bug when processing `@` in scoped packages and improved connection recovery progress indicators. The community is actively wrestling with agent behavior problems—multiple P1 issues report subagent recovery failures and generalist agent hangs that block productive workflows.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v0.63.0-preview.0** | Fixed CLI display of retry progress indicator during connection recovery ([#28340](https://github.com/google-gemini/gemini-cli/pull/29468)); includes changelog updates |
| **v0.62.0** | Fixed A2A server early return for unsupported store in tasks metadata endpoint ([#29334](https://github.com/google-gemini/gemini-cli/pull/29334)) |

---

## 3. Hot Issues

| Issue | Priority | Why It Matters | Community Reaction |
|-------|----------|-----------------|-------------------|
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)**: Subagent recovery after MAX_TURNS reported as GOAL success | P1 | Subagents incorrectly report success status even when hitting turn limits, hiding interruptions from users | 13 comments, 2 👍 |
| **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)**: Leverage model's bash affinity via Zero-Dependency OS Sandboxing | P2 | Proposes security-enhanced OS sandboxing aligned with model's native POSIX tool preferences | 9 comments |
| **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)**: Generalist agent hangs | P1 | **High-impact**: Defers to subagents and hangs indefinitely; blocks all operations | 8 comments, **8 👍** |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)**: Assess AST-aware file reads, search, and mapping | P2 | Epic tracking potential for precise code navigation and reduced token usage | 7 comments |
| **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)**: Gemini does not use skills and sub-agents enough | P2 | Model fails to invoke custom skills/subagents autonomously, requiring explicit user prompting | 6 comments |
| **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)**: Browser Agent ignores settings.json overrides | P2 | Browser Agent bypasses user config (e.g., maxTurns), causing unpredictable behavior | 4 comments |
| **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)**: Browser Agent resilience—Automatic session takeover | P3 | Proposes lock recovery for persistent browser sessions instead of fail-fast | 4 comments |
| **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)**: browser subagent fails in Wayland | P1 | Browser agent crashes on Wayland display servers | 4 comments, 1 👍 |
| **[#21000](https://github.com/google-gemini/gemini-cli/issues/21000)**: Native file tools for task tracker | P3 | Proposes persistent file-based todo tracking to replace in-context tracking | 4 comments |
| **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)**: Symlinked agent files not recognized | P2 | Symlinks in `~/.gemini/agents/` fail to load as subagents | 4 comments |

---

## 4. Key PR Progress

| PR | Priority | Description |
|----|----------|-------------|
| **[#29568](https://github.com/google-gemini/gemini-cli/pull/29568)** | P1 | **Major**: Implements append-only delta patching and bounded history windowing in ChatRecordingService to replace full-history rewrites |
| **[#29557](https://github.com/google-gemini/gemini-cli/pull/29557)** | P1 | **Critical fix**: Prevents 100% CPU hang when code contains `@scope/pkg` followed by quoted strings in headless mode |
| **[#29573](https://github.com/google-gemini/gemini-cli/pull/29573)** | — | Fixes registry port parsing in sandbox image names—prevents tag loss and invalid container names |
| **[#29528](https://github.com/google-gemini/gemini-cli/pull/29528)** | P1 | Fixes folder trust state propagation in headless mode, resolving split-brain state |
| **[#29560](https://github.com/google-gemini/gemini-cli/pull/29560)** | P2 | Windows ConPTY IME cursor position forwarding—fixes CJK character misalignment |
| **[#29558](https://github.com/google-gemini/gemini-cli/pull/29558)** | P1 | Atomic state persistence with backup recovery—prevents `state.json` corruption |
| **[#29564](https://github.com/google-gemini/gemini-cli/pull/29564)** | — | Preserves `${VAR}` environment placeholders during settings migration |
| **[#29563](https://github.com/google-gemini/gemini-cli/pull/29563)** | — | Keeps line terminators when truncating strings—fixes silent `\n` deletion |
| **[#29559](https://github.com/google-gemini/gemini-cli/pull/29559)** | — | Normalizes CRLF before diff computation—fixes false positive "every line changed" |
| **[#29549](https://github.com/google-gemini/gemini-cli/pull/29549)** | — | Bridges `PromptResponse.usage` in ACP mode—fixes ~3x billing overestimation |

---

## 5. Feature Request Trends

*(No discussion data provided in source)*

---

## 6. Feature Request Trends (from Issues)

| Theme | Related Issues |
|-------|----------------|
| **Improved Agent Autonomy** | #21968 (skills/sub-agents underutilized), #22598 (subagent trajectory visibility), #22741 (backgroundable subagents) |
| **AST/Codebase Intelligence** | #22745, #22746, #22747 (AST-aware reads, searches, mapping tools) |
| **Security & Sandboxing** | #19873 (Zero-Dependency OS Sandboxing), #22672 (discourage destructive commands) |
| **Persistent Task Tracking** | #21000, #18836 (file-based vs. in-context todos) |
| **Platform Reliability** | #21983 (Wayland), #21409 (generalist hangs), #22323 (subagent recovery) |

---

## 7. Developer Pain Points

1. **Agent Hangs & Interactivity Blocks** — Multiple reports of the generalist agent hanging indefinitely when deferring to subagents; browser agent failing on Wayland
2. **Configuration Ignored** — Browser Agent and other subagents bypass user settings (maxTurns, trust state), leading to unpredictable behavior
3. **Context Bloat & Token Waste** — Binary assets incorrectly included via fuzzy matching; large file reads "firehose" context; no surgical code-discovery hierarchy
4. **State Corruption** — `state.json` corruption causes data loss; lack of atomic writes
5. **Symlink Support** — Cannot use symlinks for agent definitions, limiting workspace organization
6. **Billing Overestimation** — ACP mode was overcharging ~3x due to missing usage metadata bridging (now fixed in #29549)

---

*Generated from github.com/google-gemini/gemini-cli — 2026-09-30*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>Let me analyze the provided GitHub data and create a structured digest for the GitHub Copilot CLI community.

First, let me organize what I have:

**Releases (last 24h):**
- v1.0.90-5: Fixed model picker issue, MCP tool call progress updates
- v1.0.90-4: Fixed "Failed to read model provider attribution" errors
- v1.0.90-3: Added --mcp-github-auth, session-scoped read-only directory approvals
- v1.0.90-2: Fixes and changes
- v1.0.90-1: Fixed MCP OAuth token reuse, withdrawn prompts persistence

**Issues (showing top 30 by comment count):**
I need to pick 10 noteworthy issues. Let me identify the most important ones:

1. #1274 - CLI constantly getting 400 errors for invalid request body (31 comments, 13 👍)
2. #1285 - Organisation level Agent not showing up (11 comments, 14 👍)
3. #4870 - MCP: Figma remote server fails to load (8 comments, 12 👍) - CLOSED
4. #3281 - CLI no longer usable after upgrading to v1.0.46 (7 comments, 0 👍) - CLOSED
5. #2861 - Compaction failed: empty response from model (7 comments, 5 👍) - CLOSED
6. #3589 - Multiple sessionStart hooks only last one injected (4 comments, 2 👍) - CLOSED
7. #4919 - /ask does not work with auto models (4 comments, 0 👍) - CLOSED
8. #2581 - MCP tools with dots cause 400 Bad Request (3 comments, 3 👍) - CLOSED
9. #4807 - Idle CLI enters FileWatch event storm, consumes 2 CPU cores (3 comments, 1 👍) - CLOSED


10. #4515 - CLI exposes both MCP content and structuredContent (2 comments, 0 👍) - OPEN
11. #4805 - Sessions become unrevivable due to stale lock (2 comments, 0 👍) - OPEN
12. #3393 - Cannot authorize MCP server using OAuth (2 comments, 0 👍) - CLOSED

I'm noticing a pattern of critical issues affecting core functionality. The 400 error problem appears most frequently with 31 comments, suggesting it's a widespread issue. MCP integration continues to be problematic, with OAuth authorization and tool handling causing significant problems. The CLI seems unstable in several scenarios: during idle states, after upgrades, and when handling multiple session hooks. Enterprise features like organization-level agents also need attention.

**Pull Requests:**
- #5000 - Publish npm tarballs from published Copilot CLI releases

The pull request focuses on improving the release process by enabling npm publishing from GitHub releases. This indicates a push towards more streamlined distribution.

I'll concentrate on the most impactful issues:

1. #1274 - 400 errors on code review attempts
2. #1285 - Organization-level agents missing
3. #4870 - Figma MCP server registration failures
4. #4807 - FileWatch event storm consuming CPU
5. #2581 - MCP tools with dots causing 400 errors
6. #4515 - MCP content and structuredContent exposure
7. #4805 - Unrevivable sessions due to stale lock
8. #4982 - AI model stuck with Read Search View/Rg
9. #4985 - MCP server env secrets not passed to spawned process
10. #4919 - /ask incompatible with auto models

For PRs, I'll prioritize:
1. #5000 - Publishing npm tarballs from releases

No discussion data was provided, so I'll skip that section.</think>

# GitHub Copilot CLI Community Digest

**Date:** 2026-09-30

---

## 1. Today's Highlights

GitHub released five incremental versions (v1.0.90-1 through v1.0.90-5) addressing MCP improvements, OAuth token caching, and session state management. The community is actively reporting 400 error issues during code reviews and Figma MCP server failures, while a new PR proposes automated npm publishing from GitHub releases.

---

## 2. Releases

| Version | Changes |
|---------|---------|
| **v1.0.90-5** | Fixed: Model picker no longer shows "No supported model available" when a provider is configured. MCP tool calls now complete properly even when servers send progress updates after responding. |
| **v1.0.90-4** | Fixed: Fresh launch no longer prints "Failed to read model provider attribution" errors during sign-in. |
| **v1.0.90-3** | Added: `--mcp-github-auth` flag to scope GitHub account auth to approved MCP server origins. Added session-scoped read-only directory approvals to path access prompts. |
| **v1.0.90-2** | Various fixes and changes. |
| **v1.0.90-1** | Fixed: MCP OAuth sign-in reuses valid cached tokens. Withdrawn running prompts stay removed after session resume. |

---

## 3. Hot Issues

### 🔴 Critical Stability

**#1274 — CLI constantly getting 400 errors for invalid request body**  
31 comments · 13 👍  
Affects ~95% of code review attempts on diff files. Users report server-side validation issues or invalid request crafting. [View Issue](https://github.com/github/copilot-cli/issues/1274)

**#4807 — Idle Copilot CLI enters FileWatch event storm, consumes two CPU cores**  
3 comments · 1 👍  
An idle CLI process consumed 221% CPU for 35+ hours and wrote 33+ GB of debug logs. Potentially severe resource leak. [View Issue](https://github.com/github/copilot-cli/issues/4807)

### 🔧 MCP Integration

**#4870 — Figma remote server fails to load — `-32601` on `server/discover` treated as fatal**  
8 comments · 12 👍  
Figma MCP server (`mcp.figma.com`) initializes but CLI never registers its tools. The discovery probe receives `-32601` error code which CLI treats as fatal. Works in VS Code. [View Issue](https://github.com/github/copilot-cli/issues/4870)

**#2581 — MCP tools with dots in names cause 400 Bad Request**  
3 comments · 3 👍  
Tools with dots (e.g., `custom.tool.name`) are rejected with pattern mismatch `^[a-zA-Z0-9_-]{1,128}$`, despite MCP spec allowing dots. [View Issue](https://github.com/github/copilot-cli/issues/2581)

**#4985 — MCP server env secret placeholders are not passed to spawned process**  
1 comment · 0 👍  
`${secret:...}` placeholders don't reach spawned stdio MCP server processes on macOS, while normal env vars work fine. [View Issue](https://github.com/github/copilot-cli/issues/4985)

### 🏢 Enterprise & Organization

**#1285 — Organisation level Agent not showing up**  
11 comments · 14 👍  
Agents created under `{org}/.github-private` don't appear in CLI or VS Code despite proper namespace and templates. [View Issue](https://github.com/github/copilot-cli/issues/1285)

### 🧠 Model & Context

**#2861 — Compaction failed: received empty response from model (3x retry)**  
7 comments · 5 👍  
Running `/compact` manually on Claude Opus 4.6 in short sessions produces three consecutive failures with empty model responses. [View Issue](https://github.com/github/copilot-cli/issues/2861)

**#4919 — /ask does not work with auto models**  
4 comments · 0 👍  
Users in auto mode get "model not supported" errors when using /ask for tangents. [View Issue](https://github.com/github/copilot-cli/issues/4919)

### 📜 Session Management

**#4805 — Sessions become unrevivable: stale `inuse.<pid>.lock` from crashed host**  
2 comments · 0 👍  
Sessions blocked by runtime/lifecycle lock files from crashed hosts, preventing resume even though session data is intact. [View Issue](https://github.com/github/copilot-cli/issues/4805)

---

## 4. Key PR Progress

| PR | Description |
|----|-------------|
| **#5000** [OPEN] — Publish npm tarballs from published Copilot CLI releases | Proposes triggering npm publishing from GitHub releases with explicit-tag manual recovery path. Uses trusted publishing (OIDC) instead of npm tokens. [View PR](https://github.com/github/copilot-cli/pull/5000) |

---

## 5. Feature Request Trends

Based on issue analysis, the most requested feature directions are:

| Category | Requests |
|----------|----------|
| **MCP Enhancements** | PDF file upload support, easier MCP toggling (like skills), BYOK for ACP server mode |
| **Tool UX** | Enum/oneOf fields should offer "Other / custom answer" escape hatch |
| **Session/UI** | Conversation scrollback improvements (highlight request/response turns, collapse in-between), scrollbar behavior fixes on resume |
| **Authentication** | OAuth improvements for MCP servers, better keyboard input handling |

---

## 6. Developer Pain Points

1. **Reliability Issues**: High-frequency 400 errors during code reviews and MCP tool invocations frustrate users. The 95% failure rate on diff-based reviews is particularly alarming.

2. **MCP Integration Friction**: Multiple MCP-related issues—Figma server failures, OAuth stuck on authentication, dots in tool names causing rejections, secrets not passing to processes.

3. **Resource Consumption**: Idle CLI consuming 2 CPU cores and generating 33GB+ logs indicates a serious bug.

4. **Enterprise Gaps**: Organization-level agents not appearing in CLI prevents team-wide adoption.

5. **Session Lifecycle**: Sessions becoming unrevivable after crashes due to stale lock files, plus scrollback issues on resume.

---

*End of Digest*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate an OpenCode community digest for 2026-09-30 based on the GitHub data provided. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

**Releases:** None in the last 24h

**Issues (showing top 30 by comment count):**
1. #20695 - Memory Megathread - 147 comments, 112 👍 - Memory issues, collecting heap snapshots
2. #33356 - Unbounded growth of event table (13GB+) - 37 comments, 12 👍
3. #43379 - Streaming responses for muse-* models - 9 comments, 1 👍
4. #52042 - session: provider image rejection bricks session - 8 comments
5. #51761 - TUI OOM: intermittent 24-28GB memory exhaustion - 6 comments
6. #39399 - [FEATURE]: SIMPLE CHAT - 6 comments
7. #44821 - fix(openai): OAuth transform treats Codex product budget - 5 comments, 5 👍
8. #51424 - OpenCode Go models return "Insufficient account funds" - 5 comments
9. #25170 - Subscription Question - 4 comments
10. #51850 - GitHub Copilot GPT-6 models do not send selected reasoning effort - 4 comments
11. #51481 - bedrock: Opus 5.5 thinking blocks rejected - 4 comments
12. #51466 - multiple reasoning_opaque values received - 3 comments
13. #38986 - SIGILL crash on AMD Ryzen Zen 3 - 3 comments
14. #52178 - Zen API: CORS headers only served on /zen/v1/models - 3 comments
15. #51726 - openrouter: Anthropic models still get no prompt caching - 3 comments


16. #52167 - Free usage exceeded - 3 comments
17. #47515 - [FEATURE]:NOUS PORTAL INTEGRATION - 3 comments
18. #51330 - desktop: custom providers rejected - 3 comments
19. #49926 - model Big Pickle showing corrupt output - 3 comments
20. #52196 - TUI crash: undefined is not an object - 2 comments

**Pull Requests (top 20):**
1. #52195 - fix(core): keep commands whose model is not provider/model
2. #46770 - docs(ecosystem): add opencode-twg plugin
3. #52193 - fix

(opencode): identify agent creation requests
4. #50490 - fix(opencode): skip plugin system transform for title generation
5. #52190 - fix(core): tolerate multiple reasoning_opaque values from Copilot
6. #49909 - fix(cli): move the default service port past WSL-held and reserved ports
7. #51625 - fix(tui): preserve alpha when tinting theme colors
8. #51664 - fix(core): empty resources list no longer resolves to allow
9. #52188 - fix(ai): allocate system update cache markers once
10. #52187 - fix(tui): release oversized session message caches on switch
11. #52185 - fix(console): answer CORS preflight on every Zen API route
12. #52110 - fix(ai): place prompt cache breakpoints on OpenRouter Anthropic and Qwen requests
13. #52183 - fix(opencode): ad-hoc re-sign darwin binaries after local compile
14. #52182 - fix(core): pass through Copilot Responses settings
15. #52119 - fix(ai): select OpenRouter auto cache markers by model
16. #49815 - fix(app): keep shortcuts filter focused while typing
17. #52145 - fix(core): show structured provider error details
18. #46196 - feat(desktop): allow configuring dev remote-debugging-port
19. #46188 - fix(core): keep healthy well-known origins when one is unreachable
20. #46185 - feat(app): upload managed attachments before prompt submit

I should prioritize the issues and PRs that are currently active or high-impact. Memory problems are clearly the most pressing concern, appearing in multiple threads (#20695 with 147 comments and #51761). Database growth (#33356) and streaming complications (#43379) also need attention. On the PR side, fixes addressing reasoning opacity values and provider error handling look promising for improving stability.</think>

# OpenCode Community Digest — 2026-09-30

## Today's Highlights

Memory and performance issues dominate today's activity. A major megathread (#20695) for memory problems has attracted 147 comments as the team collects heap snapshots, while a separate TUI OOM issue (#51761) reports 24-28GB memory exhaustion. The community is also tracking a critical database bloat issue where `opencode.db` reaches 13GB+ due to unbounded event table growth (#33356). On the positive side, several high-impact PRs merged today address CORS issues, prompt caching for OpenRouter, and Copilot integration fixes.

---

## Hot Issues

| # | Issue | Key Details | 👍 |
|---|-------|-------------|-----|
| **#20695** | **[Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** | Central tracking for all memory issues. Team requests heap snapshots via manual flow—explicitly asks not to run LLMs for solutions. 147 comments, 112 👍 | 112 |
| **#33356** | **[Unbounded event table growth](https://github.com/anomalyco/opencode/issues/33356)** | SQLite store grows to 13GB+ on long-lived instances. Event-sourcing table never pruned/capped. Affects production systems at 97–99% disk usage. | 12 |
| **#52042** | **[Provider image rejection bricks session](https://github.com/anomalyco/opencode/issues/52042)** | Custom provider rejecting image input bricks the session. Every subsequent request replays the failing image with no recovery path. | 0 |
| **#51761** | **[TUI OOM: 24-28GB memory exhaustion](https://github.com/anomalyco/opencode/issues/51761)** | Intermittent memory growth at 500MB/s–1GB/s with no GC sawtooth. Process OOM-killed in under a minute. No reliable trigger identified. | 1 |
| **#43379** | **[Streaming muse-* models missing finish_reason](https://github.com/anomalyco/opencode/issues/43379)** | Zen gateway streaming responses never send `finish_reason` chunk, causing strict OpenAI-compatible clients to enter retry loops. | 1 |
| **#51424** | **[Go subscription shows "Insufficient funds"](https://github.com/anomalyco/opencode/issues/51424)** | Active subscription with 0% usage returns "Insufficient account funds" error when trying to use Kimi models. | 2 |
| **#44821** | **[OAuth Codex budget misread as endpoint limit](https://github.com/anomalyco/opencode/issues/44821)** | OpenAI OAuth transform treats Codex product budget as physical endpoint limit, triggering premature compaction hundreds of thousands of tokens early. | 5 |
| **#51466** | **[Multiple reasoning_opaque values error](https://github.com/anomalyco/opencode/issues/51466)** | Error message "multiple reasoning_opaque values received in a single response" appears frequently with GitHub/Copilot + Opus 5.5. | 0 |
| **#38986** | **[SIGILL crash on AMD Ryzen Zen 3](https://github.com/anomalyco/opencode/issues/38986)** | OpenCode Desktop crashes with Illegal Instruction on AMD Ryzen 5 5600H (Zen 3) due to AVX-512 instructions in binary. | 0 |
| **#52178** | **[Zen API CORS only on /models endpoint](https://github.com/anomalyco/opencode/issues/52178)** | Zen gateway serves CORS headers only on `/zen/v1/models`—all inference endpoints fail preflight with 404, blocking third-party browser clients. | 0 |

---

## Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| **#52190** | **[fix(core): tolerate multiple reasoning_opaque values from Copilot](https://github.com/anomalyco/opencode/pull/52190)** | Fixes `AI_InvalidResponseDataError`—Copilot models with interleaved thinking emit fresh `reasoning_opaque` before each tool call. |
| **#52185** | **[fix(console): answer CORS preflight on every Zen API route](https://github.com/anomalyco/opencode/pull/52185)** | Resolves #52178—serves CORS headers on all Zen routes, not just model-list endpoints. |
| **#52145** | **[fix(core): show structured provider error details](https://github.com/anomalyco/opencode/pull/52145)** | Shows decoded provider messages from structured error objects when AI SDK supplies generic HTTP errors. Refs #52042. |
| **#52110** | **[fix(ai): place prompt cache breakpoints on OpenRouter Anthropic and Qwen](https://github.com/anomalyco/opencode/pull/52110)** | Enables prompt caching for OpenRouter Anthropic and Qwen requests—fixes #51726 regression. |
| **#52187** | **[fix(tui): release oversized session message caches on switch](https://github.com/anomalyco/opencode/pull/52187)** | Releases memory when switching sessions with large message caches. Closes #39380. |
| **#52182** | **[fix(core): pass through Copilot Responses settings](https://github.com/anomalyco/opencode/pull/52182)** | Fixes #51850—GPT-6 reasoning effort now properly included in requests. |
| **#52188** | **[fix(ai): allocate system update cache markers once](https://github.com/anomalyco/opencode/pull/52188)** | Resolves cache-slot accounting issue by reusing cache markers across system updates. |
| **#51664** | **[fix(core): empty resources list no longer resolves to allow](https://github.com/anomalyco/opencode/pull/51664)** | Permission check with empty resources no longer falls through to `allow`. Closes #51648. |
| **#51625** | **[fix(tui): preserve alpha when tinting theme colors](https://github.com/anomalyco/opencode/pull/51625)** | Fixes transparent themes—tint() was dropping alpha channel. Closes #51555. |
| **#52195** | **[fix(core): keep commands whose model is not provider/model](https://github.com/anomalyco/opencode/pull/52195)** | Fixes regression where command `.md` files with short model names (e.g., `model: opus`) were incorrectly dropped. |

---

## Feature Request Trends

From today's issue activity, the most requested enhancements are:

1. **Memory Management** — Users increasingly demand better memory controls: explicit cleanup, session pruning, and resource limits.
2. **Local Database Lifecycle** — Requests for compaction, retention policies, and size limits on SQLite stores.
3. **Provider Flexibility** — More custom provider integrations (e.g., Nous Portal #47515) and robust error handling when providers reject inputs.
4. **Enhanced Caching** — Persistent requests for prompt caching across providers (OpenRouter, Anthropic, etc.).
5. **Desktop Experience** — Better attachment picker behavior, custom provider support on Desktop, and UI polish.

---

## Developer Pain Points

The community is frustrated with several recurring problems:

- **Memory Bloat**: Both the megathread and OOM issue indicate systemic memory problems causing production failures.
- **Database Growth**: Unbounded SQLite growth to 13GB+ is a major operational pain point.
- **Provider Reliability**: Image rejection (#52042) and generic 400 errors with no recovery path leave users stuck.
- **CORS Blocking Development**: Zen gateway CORS issues prevent third-party browser integrations entirely.
- **Subscription/Billing Confusion**: Multiple issues around Go subscription billing and fund management.
- **Platform Compatibility**: SIGILL crashes on non-AVX-512 CPUs limit OpenCode's reach.

---

*Digest generated from GitHub data for 2026-09-30*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Pi community digest for 2026-09-30 based on the GitHub data provided. Let me analyze the data and create a structured digest with the requested sections.

Let me organize the information:

## Latest Releases
- v0.99.1: GPT-6.1 Sol model support, added to OpenAI, Azure OpenAI, and OpenAI Codex
- v0.99.0: Codemode and MCP support

## Latest Issues (showing top by comment count)
1. #7547 - Windows usage issues (69 comments)
2. #8643 - Bedrock OpenAI image handling (9 comments)
3. #10033 - Compaction prompt issue (8 comments)
4. #9962 - registerNativeProvider race condition (6 comments)
5. #10011 - Hide tool rows proposal (6 comments)
6. #10074 - Anthropic tool calls corrupted (5 comments)
7. #10045 - Auto compaction blocked (4 comments)
8. #6339 - Auto-compaction threshold (4 comments)
9. #10144 - Queued prompts batching (4 comments)
10. #10019 - Anthropic subscription hang (4 comments)

## Latest PRs
- #10200 - test(ai): cover reasoning summary separation
- #10199 - docs(coding-agent): improve MCP server guide
- #10197 - feat: unify package artifact validation
- #10194 - feat(ai): add copy code login method to Anthropic OAuth
- #10193 - fix(coding-agent): preserve renderer example prompt guidance
- #10190 - fix(coding-agent): mark native providers with stored credentials
- #10179 - docs(coding-agent): update llama.cpp setup for llama.app
- #10176 - feat(ai,coding-agent): add alternative sign in for the openai provider
- #10175 - edit llama-cpp


- #10174 - fix(extensions): show warning when replaceable builtin replaced
- #9329 - fix(tui): detect Orca terminals as Kitty-image capable
- #10122 - feat(coding-agent): add managed llama.cpp server mode
- #10165 - fix(coding-agent): track discarded user bash output

## Latest Discussions
- #10151 - Idea: working memory as prompt sections

Now I'll structure this into the digest with the requested sections.</think>

# Pi Community Digest — 2026-09-30

## Today's Highlights

Two notable releases landed: **v0.99.1** introduces GPT-6.1 Sol as the new default OpenAI Codex model, while **v0.99.0** brings Codemode and MCP server integration, enabling parallel tool execution via JavaScript. Community activity remains high with 50 active issues and 21 PRs, particularly around Windows compatibility, model provider behavior, and TUI performance.

---

## Releases

### v0.99.1
- **GPT-6.1 Sol** is now available on OpenAI, Azure OpenAI, and OpenAI Codex — set as the new default for OpenAI Codex
- Added support documentation: [Select a model](https://github.com/earendil-works/pi/blob/v0.99.1/packages/coding-agent/docs/models.md#select-a-model)

### v0.99.0
- **Codemode and MCP** — Connect MCP servers and run JavaScript that calls tools in parallel
- New docs: [MCP Servers](https://github.com/earendil-works/pi/blob/v0.99.0/packages/coding-agent/docs/mcp.md) and [Enable codemode](https://github.com/earendil-works/pi/blob/v0.99.0/pa)

---

## Hot Issues

| # | Issue | Why It Matters | Reactions |
|---|-------|----------------|-----------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **[Windows] How do you use Pi on windows? What issues are you seeing?** | High-priority Windows compatibility gap — many developers affected, unclear which paths to prioritize | 👍 2 (69 comments) |
| [#8643](https://github.com/earendil-works/pi/issues/8643) | **Bedrock: OpenAI models reject images nested in toolResult.content** | Breaks image handling on AWS Bedrock; fix ready on fork | 👍 3 (9 comments) |
| [#10033](https://github.com/earendil-works/pi/issues/10033) | **Compaction prompt includes all thinking text and exceeds context window** | Auto-compaction fails for reasoning models (DeepSeek V4.1) — core reliability issue | 👍 1 (8 comments) |
| [#10074](https://github.com/earendil-works/pi/issues/10074) | **Anthropic tool calls: corrupted non-ASCII edit arguments silently accepted** | Korean text in files causes edit corruption — causes retries and data loss | 👍 0 (5 comments) |
| [#10144](https://github.com/earendil-works/pi/issues/10144) | **Queued prompts are sent one by one instead of batching** | User expects prompt batching; currently serializes execution | 👍 0 (4 comments) |
| [#10184](https://github.com/earendil-works/pi/issues/10184) | **Sign in with ChatGPT: OpenAI consent page rejects Pi with invalid_client** | Blocks OAuth login flow for ChatGPT users | 👍 6 (3 comments) |
| [#10154](https://github.com/earendil-works/pi/issues/10154) | **Chinese bold renders literally when closing ** sits between CJK punctuation** | Markdown rendering bug in Chinese — long-standing regression (#3353) | 👍 0 (4 comments) |
| [#10143](https://github.com/earendil-works/pi/issues/10143) | **TUI: syntax highlight lost for highlight tokens spanning multiple lines** | Multiline code blocks lose syntax coloring — degrades readability | 👍 0 (2 comments) |
| [#10157](https://github.com/earendil-works/pi/issues/10157) | **Gemini tool-call thought signatures dropped with AI Studio endpoint** | Missing thought signatures break Gemini Flash Lite on Google AI Studio | 👍 0 (2 comments) |
| [#10202](https://github.com/earendil-works/pi/issues/10202) | **`pi remove` runs pnpm without proper flags, flipping autoInstallPeers** | Lockfile corruption risk on package removal — affects managed projects | 👍 0 (1 comment) |

---

## Key PR Progress

| # | PR | What's Changing |
|---|----|-----------------|
| [#10200](https://github.com/earendil-works/pi/pull/10200) | **test(ai): cover reasoning summary separation** | Adds regression test for reasoning summary events vs. final output |
| [#10199](https://github.com/earendil-works/pi/pull/10199) | **docs(coding-agent): improve MCP server guide** | Quick setup lead, consolidated config/troubleshooting tables |
| [#10197](https://github.com/earendil-works/pi/pull/10197) | **feat: unify package artifact validation** | Single manifest-backed artifact set for consistent local/published validation |
| [#10194](https://github.com/earendil-works/pi/pull/10194) | **feat(ai): add copy code login method to Anthropic OAuth** | Code-based login for remote pi usage (vs. localhost redirect) |
| [#10190](https://github.com/earendil-works/pi/pull/10190) | **fix(coding-agent): mark native providers with stored credentials as configured** | Fixes race where initial model selection saw providers as unconfigured |
| [#10176](https://github.com/earendil-works/pi/pull/10176) | **feat(ai,coding-agent): add alternative sign in for openai provider** | New OAuth flow for OpenAI provider |
| [#10174](https://github.com/earendil-works/pi/pull/10174) | **fix(extensions): show warning when replaceable builtin replaced** | Warns users when built-in `/mcp` is overridden by user extension |
| [#10165](https://github.com/earendil-works/pi/pull/10165) | **fix(coding-agent): track discarded user bash output** | Fixes truncation detection when user `!` command discards output |
| [#10122](https://github.com/earendil-works/pi/pull/10122) | **feat(coding-agent): add managed llama.cpp server mode** | pi auto-starts llama-server on first model use, shuts down when last pi disconnects |
| [#9329](https://github.com/earendil-works/pi/pull/9329) | **fix(tui): detect Orca terminals as Kitty-image capable** | Renders inline images in Orca terminal emulator |

---

## Hot Discussions

| # | Discussion | Category |
|---|------------|----------|
| [#10151](https://github.com/earendil-works/pi/discussions/10151) | **Idea: working memory as prompt sections (tasks + past sessions), with the session log closing the loop** | Ideas |

---

## Feature Request Trends

Based on issue and discussion analysis, the following themes dominate:

1. **Enhanced Model Provider Flexibility** — Multiple issues around provider selection fallback, auth flow improvements, and handling provider-specific quirks (Bedrock images, Gemini thought signatures, Anthropic policy blocking)
2. **MCP Ecosystem Expansion** — Strong interest in MCP server integration, authentication link improvements, and managed local server modes
3. **Windows Parity** — Active discussion on unifying Windows developer experience across different installation paths
4. **Interactive TUI Refinements** — Requests for cursor hiding, multiline syntax highlighting fixes, and mouse-wheel scrolling customization
5. **Performance Optimization** — Concerns around prompt submit latency scaling with session length and idle CPU usage in interactive mode

---

## Developer Pain Points

- **Windows compatibility fragmentation** — Unclear which installation methods are officially supported
- **Auto-compaction reliability** — Fails with reasoning models due to thinking text inclusion; blocked by provider policies
- **Auth flow friction** — OAuth redirects fail in remote environments; missing bundled modules (#10182)
- **Session memory management** — Inconsistencies between in-memory and JSONL transcript after failed appends
- **Package resolution gaps** — Extensions can't resolve npm packages using `package.json` exports field
- **Model catalog performance** — Re-merging model catalog on every prompt submit causes latency scaling

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a Qwen Code community digest based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me organize the key information:

## Releases (last 24h)
- v0.24.7: Main release
- v0.24.7-nightly.20260929.b906f937ec: Nightly release
- sdk-typescript-v0.1.17: TypeScript SDK
- desktop-v0.24.7: Desktop version

## Key Issues (by comment count)
1. #12380 - Managed Agent dual-path architecture proposal (37 comments) - P2, feature-request
2. #12028 - Non-conversation context token governance (15 comments) - P2, long-context
3. #12326 - Eager tool surface feature request (8 comments) - P2, blocked
4. #13030 - Read-only search tools in Hosted Workspace (7 comments) - P2, feature-request
5. #12333 - Token work benchmarking (7 comments) - P2, need-discussion
6. #12867 - Stage D follow-ups for durable lifecycle (5 comments) - P2, feature-request
7. #13016 - SDK abort leaves CLI worker running (5 comments) - P1, bug
8. #12889 - Deferred tool_call schema issue (5 comments) - P2, bug, ready-for-human
9. #13004 - Memory bounded cooldown (5 comments) - P3, enhancement
10. #13003 - Skip selector after strong recall (5 comments) - P3, enhancement
11. #13068 - Ctrl+a key issue (4 comments) - P2, bug
12. #13062 - Speculative accept telemetry (4 comments) - P3, bug


13. #13059 - Runtime Broker provider start issue (4 comments) - P2, bug
14. #13042 - Session indexes bound (4 comments) - P2, bug
15. #13017 - Flaky SDK Java test (4 comments) - P2, bug
16. #13019 - Recover expired tool publication (4 comments) - P2, enhancement
17. #12999 - Deferred tool_call bridge issue (4 comments) - P2, bug
18. #13031 - Flaky SDK Java turn-claim tests (3 comments) - P2, bug

The issue list continues with several P2-level bugs and enhancements, particularly around the Runtime Broker, SDK Java testing, and tool publication mechanics. These items represent the most active discussion points in the repository right now.</think>

# Qwen Code Community Digest — 2026-09-30

## 1. Today's Highlights

The Qwen Code team shipped **v0.24.7** with fixes for Code Mode text alignment and permission handling, while the TypeScript SDK received a minor update to v0.1.17. A significant architectural proposal (#12380) is gaining traction with 37 comments, proposing a dual-path Managed Agent architecture with staged delivery. Community attention is also focused on token governance issues (#12028) as long-context models expose hidden cost inefficiencies in system prompts and tool schemas.

---

## 2. Releases

| Release | Summary |
|---------|---------|
| **v0.24.7** | Core CLI release with fixes: align Code Mode text with lazy tool discovery (#12990), honor approved permissions. |
| **v0.24.7-nightly.20260929.b906f937ec** | Nightly build from same commit. |
| **sdk-typescript-v0.1.17** | TypeScript SDK bundling CLI v0.24.7. |
| **desktop-v0.24.7** | Desktop client with fix for session creation failure diagnostics and Java managed runtime support. |

---

## 3. Hot Issues

| # | Issue | Priority | Why It Matters | Comments |
|---|-------|----------|----------------|----------|
| **#12380** | [proposal(serve): Define Managed Agent dual-path architecture and staged delivery](https://github.com/QwenLM/qwen-code/issues/12380) | P2 | Proposes a staged architecture keeping the existing TypeScript agent loop, running model inference independently of tool-environment provisioning, with durable Session ownership and Workspace bindings. | **37** |
| **#12028** | [tracking(core): non-conversation context token governance](https://github.com/QwenLM/qwen-code/issues/12028) | P2 | Exposes that system prompts, tool schemas, context files, and skill listings are sent on every request—easily dwarfing the actual conversation in long-context models without visibility. | **15** |
| **#13016** | [SDK abort or close leaves the relaunched CLI worker running](https://github.com/QwenLM/qwen-code/issues/13016) | P1 | **Bug**: SIGTERM/SIGKILL from SDK doesn't reach the child supervisor process, leaving orphaned CLI workers. | **5** |
| **#13030** | [feat(managed-agent): Admit read-only search tools in a new Hosted Workspace profile](https://github.com/QwenLM/qwen-code/issues/13030) | P2 | Proposes adding `list_directory`, `glob`, and `grep_search` to Hosted Workspace tools—key for read-only workspace access. | **7** |
| **#12889** | [Deferred `tool_call` schema allows empty arguments for tools with required fields](https://github.com/QwenLM/qwen-code/issues/12889) | P2 | ToolSearch calls `tool_search` with wrong query instead of the user's actual request, causing irrelevant results. | **5** |
| **#13059** | [fix(runtime-broker): provider start refused answers `200 prepared`, client waits forever](https://github.com/QwenLM/qwen-code/issues/13059) | P2 | Runtime Broker returns 200 with "prepared" for refused dispatches, causing provider clients to hang indefinitely. | **4** |
| **#13042** | [fix(serve): bound the per-Session indexes that grow with every released provider Session](https://github.com/QwenLM/qwen-code/issues/13042) | P2 | Memory leak: `closedSessions` and other indexes grow unbounded as Sessions are released but never cleaned up. | **4** |
| **#13068** | [Ctrl + a sends raw C0 byte instead of escape sequence in shell mode](https://github.com/QwenLM/qwen-code/issues/13068) | P2 | Modifier keys with arrow/function keys send incorrect bytes to PTY, causing shell misbehavior. | **4** |
| **#13004** | [perf(memory): add a bounded cooldown after no-op extraction](https://github.com/QwenLM/qwen-code/issues/13004) | P3 | Proposes rate-limiting auto-memory extraction after successful no-op turns to reduce overhead. | **5** |
| **#12999** | [core: the deferred tool_call bridge enforces a declaration-schema layer that 8 tool families never enforce](https://github.com/QwenLM/qwen-code/issues/12999) | P2 | Bridge pre-validates arguments against schema, but 8 tool families already validate internally—causing double validation failures. | **4** |

---

## 4. Key PR Progress

| PR | Title | Status | Significance |
|----|-------|--------|---------------|
| **#12901** | [fix(core): pre-validate bridged tool_call arguments against the target schema](https://github.com/QwenLM/qwen-code/pull/12901) | Open | Improves error messages by attaching tool name to validation failures instead of unlabeled errors. |
| **#13071** | [feat(managed-agent): ask for Hosted tool approvals (D6a)](https://github.com/QwenLM/qwen-code/pull/13071) | Open | Implements approval prompts for non-pre-approved tools in Hosted Harness—slice D6a of the managed-agent roadmap. |
| **#13023** | [fix(core): honor NO_PROXY for usage-statistics RUM uploads](https://github.com/QwenLM/qwen-code/pull/13023) | Closed | Fixes RUM uploads ignoring `NO_PROXY` environment variable, unlike the session's own egress. |
| **#13029** | [fix(core): keep delivered notification turns out of ACP rewind ordinals](https://github.com/QwenLM/qwen-code/pull/13029) | Open | Fixes ACP rewind incorrectly counting background notification turns that never produced client-visible turns. |
| **#12998** | [fix(managed-agent): Settle task event and cancel semantics](https://github.com/QwenLM/qwen-code/pull/12998) | Open | Settles A1–A8 of #12847 before task event routes become available; defines durable retention floor and stable cursor identities. |
| **#13064** | [fix(runtime-broker): answer a refused provider start as unknown instead of prepared](https://github.com/QwenLM/qwen-code/pull/13064) | Open | Changes refused provider execution to return 409 instead of 200 with misleading "prepared" state. |
| **#12891** | [feat(memory): bundle Mem0 with the main CLI](https://github.com/QwenLM/qwen-code/pull/12891) | Open | Adds opt-in Mem0 connection to CLI via `memory.mem0` config with endpoint and envKey support. |
| **#12946** | [feat(managed-agent): Implement private Hosted MCP runtime (H1)](https://github.com/QwenLM/qwen-code/pull/12946) | Open | Implements the private `hosted-workspace-mcp/1` profile with Runtime-owned stdio, Streamable HTTP, and SSE connections. |
| **#12982** | [fix(core): stop misdiagnosing malformed tool-call args as max_tokens truncation](https://github.com/QwenLM/qwen-code/pull/12982) | Open | Prevents streaming parser from rewriting `finish_reason` to `length` when JSON is malformed vs. truncated. |
| **#12851** | [feat(agents): add A2A access and sharing for workspace agents](https://github.com/QwenLM/qwen-code/pull/12851) | Open | Adds opt-in A2A 1.0 JSON-RPC access to persistent workspace agents with Web Shell sharing flow. |

---

## 5. Hot Discussions

*No discussion data was provided in the source.*

---

## 6. Feature Request Trends

| Theme | Related Issues | Signal |
|-------|----------------|--------|
| **Managed Agent Architecture** | #12380, #12867, #13030, #13071 | Strong community interest in dual-path architecture, staged delivery, and Hosted Workspace tool profiles. |
| **Token/Context Governance** | #12028, #12326, #12333 | Long-context cost visibility is a growing concern; requests for measurement tooling and dynamic tool surface selection. |
| **Memory Optimization** | #13004, #13003, #13063 | Performance tuning for auto-memory extraction and recall during autonomous tool runs. |
| **A2A & Multi-Agent** | #12851, #12380 | Workspace agent sharing and multi-agent orchestration gaining momentum. |
| **MCP Runtime** | #12946, #13039 | Private Hosted MCP runtime and media delivery through Managed Runtime worker. |

---

## 7. Developer Pain Points

1. **SDK Process Leak (#13016)**: Aborting/closing SDK leaves orphaned CLI worker processes running—requires manual cleanup.
2. **Runtime Broker Hangs (#13059, #13060)**: Provider start refusals return misleading status, causing clients to wait indefinitely.
3. **Memory Leaks in Session Management (#13042)**: Per-Session indexes grow unbounded as Sessions are released.
4. **Tool Schema Double Validation (#12999)**: Deferred tool_call bridge enforces schema validation on tools that already validate internally.
5. **Non-Conversation Token Bloat (#12028)**: System prompts and tool schemas sent on every request invisibly inflate costs for long-context models.
6. **Flaky Tests**: Multiple SDK Java tests (#13017, #13031) exhibiting race conditions with recovery scanners.
7. **Shell Key Handling (#13068)**: Modifier keys with special keys send incorrect bytes, breaking expected shell behavior.

---

*Generated from GitHub data — github.com/QwenLM/qwen-code*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*