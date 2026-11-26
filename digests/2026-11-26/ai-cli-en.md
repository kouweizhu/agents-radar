# AI CLI Tools Community Digest 2026-11-26

> Generated: 2026-11-26 04:19 UTC | Tools covered: 7

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

<think>The user wants a cross-tool comparison report synthesizing all five AI CLI tool community digests I've already generated. Let me analyze the data from each digest:

1. **Claude Code (anthropics/claude-code)**
- Issues: 50 total, top 30 shown
- PRs: 2 PRs (both about open-sourcing)
- Discussions: N/A (not provided)
- Releases: None in last 24h
- Active community, high engagement on features like multi-account management

2. **OpenAI Codex (openai/codex)**
- Issues: ~40+ mentioned
- PRs: 20 merged PRs
- Discussions: Active with Ideas, Q&A, Show and Tell
- Releases: rust-v0.174.0-alpha.6
- Windows regressions dominate, TUI improvements

3. **Gemini CLI (google-gemini/gemini-cli)**
- Issues: 50 total, top 30 shown
- PRs: 30 total, top 20 shown
- Discussions: N/A (not provided)
- Releases: None in last 24h
- Security-focused, ACP improvements, stability fixes

4. **GitHub Copilot CLI (github/copilot-cli)**
- Issues: ~40+ mentioned
- PRs: N/A (not provided in data)
- Discussions: N/A (not provided)
- Releases: v1.0.117-0/1/2
- Plugin ecosystem, session management, Windows fixes

5. **OpenCode (anomalyco/opencode)**
- Issues: ~50 mentioned
- PRs: ~10+ mentioned
- Discussions: N/A (not provided)
- Releases: v2.4.2
- Windows security bug, session management

6. **Pi (earendil-works/pi)**


- Issues: 50 total, top 30 shown
- PRs: 25 total, top 20 shown
- Discussions: 3 active (Ideas, Show & Tell)
- Releases: v1.6.1
- Decision models, Windows terminal cleanup, cache warming

7. **Qwen Code (QwenLM/qwen-code)**
- Issues: ~30 shown
- PRs: ~10 mentioned
- Discussions: N/A (not provided)
- Releases: v1.0.0-preview.2
- P1 security issue, CI flakiness, Qwen4-Max subscription

Now I'm seeing patterns across these tools. Multi-account management and session handling come up repeatedly—Claude Code, Copilot CLI, and Pi all have feature requests around this. Windows support and stability is another major theme, with most tools mentioning Windows-related fixes or improvements. The plugin/extension ecosystem is growing, particularly in Claude Code, Copilot CLI, and OpenCode. Security concerns are emerging too—Gemini CLI's SSRF prevention and OpenCode's Windows vulnerability show this is becoming a priority. Finally, MCP (Model Context Protocol) appears in multiple tools' PRs and discussions, suggesting it's becoming a standard approach.

Looking at how these tools differentiate themselves, Claude Code emphasizes multi-account management and desktop integration with Cowork. OpenAI Codex is building out TUI improvements and ACP mode features. Gemini CLI prioritizes ACP for agent collaboration and security hardening. Copilot CLI is developing an extension ecosystem with JSON Schema validation. OpenCode focuses on security fixes and session archival capabilities. Pi brings decision models and graceful shutdown handling. Qwen Code is iterating quickly on subscriptions and internationalization. The maturity and community patterns vary significantly—some tools have active PR reviews while others are still establishing their release cadence.
</think>


# AI CLI Tools Ecosystem — Cross-Tool Comparison Report

**Date:** 2026-11-26
**Period:** 24-hour window

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in an active consolidation phase, with all major providers (Anthropic, OpenAI, Google, GitHub, and emerging players) racing to add enterprise-grade features—multi-account management, session durability, and cross-platform stability. Security vulnerabilities are receiving heightened attention across the board, with Gemini CLI merging SSRF prevention and OpenCode patching a critical Windows shell-escaping flaw. Platform-specific regressions (particularly on Windows) dominate issue trackers, reflecting the complexity of supporting TUI interactions across Windows Terminal, PowerShell, cmd.exe, Kitty, Ghostty, and WSL environments. The community is increasingly vocal about token efficiency, with cache warming, AST-aware file reading, and output truncation emerging as cross-cutting concerns.

---

## 2. Activity Comparison

| Tool | Repository | Issues | PRs | Discussions | Releases (24h) |
|------|------------|--------|-----|-------------|----------------|
| **Claude Code** | anthropics/claude-code | 50 | 2 | N/A | 0 |
| **OpenAI Codex** | openai/codex | ~40 | 20 | 3 categories | 1 (rust-v0.174.0-alpha.6) |
| **Gemini CLI** | google-gemini/gemini-cli | 50 | 30 | N/A | 0 |
| **GitHub Copilot CLI** | github/copilot-cli | ~40 | N/A | N/A | 3 (v1.0.117-0/1/2) |
| **OpenCode** | anomalyco/opencode | ~50 | ~10 | N/A | 1 (v2.4.2) |
| **Pi** | earendil-works/pi | 50 | 25 | 3 | 1 (v1.6.1) |
| **Qwen Code** | QwenLM/qwen-code | ~30 | ~10 | N/A | 1 (v1.0.0-preview.2) |

**Observations:**

- **Most active PR engines:** Gemini CLI (30 PRs) and OpenAI Codex (20 PRs) lead in code throughput, indicating rapid iteration cycles.
- **Release cadence:** GitHub Copilot CLI shipped the most releases in 24 hours (3 patches), reflecting a fast-moving stabilization effort.
- **Community channels:** OpenAI Codex and Pi maintain active Discussions sections alongside Issues; others rely solely on Issues.
- **Issue volume parity:** Claude Code, Gemini CLI, OpenCode, and Pi all report ~50 issues, suggesting comparable community engagement despite different maturity levels.

---

## 3. Shared Feature Directions

The following requirements appear across multiple tool communities, indicating ecosystem-wide demand:

| Feature Direction | Tools Affected | Specific Needs |
|-------------------|----------------|----------------|
| **Multi-account / Multi-profile management** | Claude Code (#18435, 1,112 👍), Copilot CLI | Native profile switching, account isolation within desktop apps |
| **Session persistence & recovery** | Gemini CLI (OSC 7577), Pi (session resume), Claude Code (cowork), OpenCode (archive/unarchive) | Graceful shutdown, cross-restart continuity, session archival |
| **Cross-platform terminal reliability** | OpenAI Codex (Linux middle-click, Kitty/Ghostty), Pi (Windows mouse reporting), Qwen Code (ARM64 CI), OpenCode (Windows shell escaping) | Consistent keyboard/mouse behavior across terminals |
| **MCP ecosystem expansion** | Gemini CLI (OAuth binding, tool approvals, elicitation fields), Claude Code (plugin API cache pre-warm), Copilot CLI (MCP compatibility) | Multi-version protocol support, credential management, permission granularity |
| **Cache / token optimization** | Claude Code (prompt cache invalidation), Gemini CLI (cache warming fixes), OpenAI Codex (output truncation), Pi (idle cache horizon config) | Intelligent pre-warming, output bounds, cross-model cache preservation |
| **Plugin / extension APIs** | Copilot CLI (extension manifest JSON Schema), Claude Code (skills, subagents), OpenCode (custom tools via scripts) | Discovery mechanisms, permission models, marketplace reliability |
| **Security hardening** | Gemini CLI (SSRF, OAuth binding, telemetry hijacking), OpenCode (Windows path traversal) | Input sanitization, credential isolation, trusted-workspace controls |
| **ACP (Agent Communication Protocol)** | Gemini CLI (session management, parallel tools), OpenAI Codex (Fusion tier config), Pi (durable execution) | Cross-agent coordination, session lifecycle, human-in-the-loop approval |
| **Windows-first stability** | OpenAI Codex (startup hangs, ARM64), Qwen Code (hot-reload), Copilot CLI (PowerShell), Pi (terminal cleanup) | Consistent behavior across PowerShell, cmd.exe, WSL |
| **Internationalization** | Qwen Code (Russian i18n), Claude Code (Japanese language drift), OpenCode (WCAG 2.2 themes) | Locale-aware model behavior, UI accessibility, pluralization |

---

## 4. Differentiation Analysis

| Tool | Primary Differentiator | Target User | Technical Focus |
|------|------------------------|-------------|-----------------|
| **Claude Code** | Cowork collaborative sessions, multi-account demand | Professional developers, teams | Agent delegation, context management, desktop integration |
| **OpenAI Codex** | ACP mode, Fusion tier, Rust SDK alpha | Enterprise + CLI power users | Cross-platform TUI parity, MCP stdio resilience, slash command ecosystem |
| **Gemini CLI** | ACP-first architecture, Pi Durable for client-side execution | Advanced agents, external orchestrators | Security hardening (SSRF/OAuth), parallel tool batching, session lifecycle |
| **Copilot CLI** | Extension marketplace with JSON Schema validation | Plugin developers, IDE-centric teams | Extension loading, session wedge recovery, VS Code integration |
| **OpenCode** | Model-agnostic flexibility, session archival | Multi-model users, security-conscious teams | Security patches (Windows shell), WCAG accessibility, cross-provider fallback |
| **Pi** | Decision models (`models.classify()`), graceful terminal shutdown | Performance-obsessed developers, local inference users | Cache warming intelligence, reasoning effort handling, OSC protocols |
| **Qwen Code** | Qwen4-Max subscription (1M context), rapid-preview cadence | Chinese-market developers, cost-sensitive users | Subscription UX, credit management, ARM64 CI reliability |

**Key technical divergences:**

- **Protocol adoption:** Gemini CLI and OpenAI Codex invest heavily in ACP/agent-to-agent protocols; Claude Code and Copilot CLI focus on IDE/desktop integration; Pi pioneers decision model integration.
- **Platform prioritization:** OpenAI Codex and Qwen Code struggle with Windows stability; Gemini CLI and Claude Code face Linux TUI edge cases; Copilot CLI addresses PowerShell ConstrainedLanguage mode.
- **Release philosophy:** GitHub Copilot CLI ships frequent micro-patches; Claude Code and Gemini CLI operate on longer release cycles; Qwen Code uses preview versioning.

---

## 5. Community Momentum & Maturity

### High-Momentum Communities

**Gemini CLI** — 30 PRs merged in 24 hours demonstrates exceptional code throughput. Security-focused development (multiple SSRF/OAuth fixes) signals mature DevOps practices. The Pi Durable feature set indicates ambitious long-term architecture planning.

**OpenAI Codex** — 20 merged PRs and active Discussions (Awesome Codex CLI list with 15 comments) show healthy community contribution. The Windows regression (#62943) generating 34 comments indicates strong user engagement around reliability.

**Pi** — 25 PRs with a mix of feature work (decision models, OSC 7577 session resume) and bug fixes (Anthropic SSE CRLF parser) shows balanced iteration. Active discussions on privacy (DO_NOT_TRACK) and local inference reflect a thoughtful community.

### Maturing Communities

**Claude Code** — Community-driven open-sourcing efforts (#41518, #41447) indicate user investment despite no official open-source commitment. The 1,112 👍 on multi-account feature (#18435) shows strong demand but slow official response.

**Qwen Code** — P1 security disclosure and rapid-preview releases (v1.0.0-preview.2) suggest active development. CI reliability issues (#18252 with 73+ sub-issues) indicate scaling challenges.

**OpenCode** — Security patching pace and session archival features show growing enterprise relevance. WCAG 2.2 accessibility work indicates maturity.

### Stable/Established Communities

**Copilot CLI** — Three rapid patches (v1.0.117-0/1/2) indicate a stabilization sprint following extension manifest work. Plugin ecosystem growth (18 skills) shows steady adoption.

---

## 6. Trend Signals

### For Tool Developers

1. **Windows is the new frontier of pain.** Every tool struggles with Windows stability—shell escaping, terminal reporting, hot-reload, and startup hangs appear across all communities. Investing in Windows CI infrastructure and PowerShell/cmd.exe compatibility testing is table stakes.

2. **MCP protocol fragmentation is real.** Gemini CLI, Copilot CLI, and Claude Code all report MCP version negotiation issues (legacy vs. modern SDKs). Tool authors should implement version detection and graceful degradation rather than assuming spec compliance.

3. **Security is no longer optional.** Gemini CLI's proactive SSRF prevention, OAuth binding, and telemetry hijacking fixes—merged in a single cycle—set a new baseline. OpenCode's Windows shell-escaping vulnerability (#66449) deleting 270k files is a cautionary tale.

4. **Cache intelligence is a competitive differentiator.** Claude Code, Gemini CLI, and Pi all address cache warming in different ways. The tools that let users configure cache horizons, preserve cache across model switches, and provide visibility into cache state will win developer trust.

5. **ACP/agent-to-agent protocols are converging.** Multiple tools independently developed session management, parallel tool execution, and human-in-the-loop approval patterns. The emergence of standardized protocols (OSC 7577 for session resume, ACP for agent coordination) suggests eventual interoperability.

### For Decision-Makers

1. **Enterprise features lag community demand.** Multi-account management (1,112 👍 on Claude Code) has been requested for months with no resolution. Organizations should evaluate whether current tools meet multi-tenant requirements before committing.

2. **CI reliability is a proxy for code quality.** Qwen Code's 73+ E2E test failures and Gemini CLI's doom-loop detection regression (#12318) indicate that rapid iteration can degrade reliability. Tools with slower release cycles (Claude Code, Gemini CLI) may offer more stability.

3. **Local inference is gaining traction.** Pi's focus on Ollama output capping, local decision models, and `AGENTS.local.md` support indicates growing demand for offline-capable AI tooling. This trend may reshape competitive positioning.

4. **Accessibility is becoming a requirement.** OpenCode's WCAG 2.2 calibration effort across 35 themes and Pi's keyboard repeat race condition fix signal that accessibility is moving from nice-to-have to baseline expectation.

5. **Internationalization gaps persist.** Claude Code's Japanese language drift bug (#96326) and Qwen Code's Russian pluralization fixes (#18320) indicate that multilingual support remains uneven. Global teams should validate language fidelity before deployment.

---

*Report generated 2026-11-26 | Data sources: GitHub community digests for Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, Qwen Code*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community activity data and generate a highlights report. Let me parse through the data carefully.

Looking at the PR data:
- All PRs are OPEN status
- They're sorted by comments but all show "undefined" for comments
- The top 20 PRs include various skill additions and fixes

Looking at the Issues data:
- #492: Security issue about community skills in anthropic/ namespace - 46 comments, 3 👍
- #228: Enable org-wide skill sharing - 17 comments, 8 👍
- #556: Bug in run_eval.py not triggering skills - 13 comments, 7 👍
- #1329: Proposal for compact-memory skill - 10 comments, 0 👍
- #62: Skills disappeared issue - 10 comments, 2 👍
- #1385: Reasoning Quality Gate Pipeline proposal - 8 comments, 1 👍
- #202: Skill-creator best practice - 8 comments, 1 👍 (CLOSED)
- #1143: Feature request for email change - 7 comments, 20 👍
- #1352: run_eval.py parallel workers bug - 6 comments, 3 👍
- #412: Agent governance skill proposal - 6 comments, 0 👍 (CLOSED)
- #189: document-skills and example-skills duplicate - 6 comments, 9 👍
- #2064: theme-factory description issue - 5 comments, 0 👍
- #1487: claude-api skill context window exhaustion - 5 comments, 0 👍
- #2018: docx merge_runs.py XML issue - 4 comments, 0 👍
- #1868: gradient background bug - 4 comments, 0 👍

Now let me categorize the PRs into skill types:

Top skills by attention (based on activity, discussion, and functionality breadth):


The PRs span multiple domains - MCP builder improvements for tool integration, skill creation and evaluation enhancements, productivity tools like Notion integration, and specialized capabilities for document processing and testing. These represent the most active areas of development and community interest. Looking at the GitHub links, I need to provide the proper URLs for each issue and pull request so they're directly accessible. The base repository is `https://github.com/anthropics/skills`, and from there I can construct the specific links for issues using `/issues/{number}` and pull requests using `/pull/{number}`. This gives me all the URLs needed to reference these tracked items.
</think>


# Claude Code Skills Community Highlights Report

*Data as of 2026-11-26 | Source: anthropics/skills repository*

---

## 1. Top Skills Ranking

The following Skills (PRs) represent the highest community engagement through discussion breadth, cross-functional impact, or novel capability additions:

| # | PR | Author | Summary | Status |
|---|-----|--------|---------|--------|
| 1 | **fix(mcp-builder): support mcp≥2 streamable_http_client import and custom headers** (#1742) | Kuldeeep18 | Fixes `streamablehttp_client` → `streamable_http_client` rename in MCP ≥2.0 and re-routes custom HTTP headers through `create_mcp_http_client`. Restores compatibility for MCP-based tool integrations. | Open |
| 2 | **fix(skill-creator): isolate trigger evals and handle Windows and runtime failures** (#1298) | MartinCajiao | Improves evaluation reliability by isolating per-worker command probes, fixing `select()` subprocess pipe failures on Windows, preventing unrelated tools from stopping scans, and correctly treating runtime failures as non-triggers. | Open |
| 3 | **Add notion-spec-to-implementation and quantitative-resume-auditor skills** (#1245) | mrdesouzaphd-cmyk | Two new skills: (1) converts product/tech specs into actionable Notion tasks with acceptance criteria; (2) performs quantitative auditing of resumes for ATS optimization. | Open |
| 4 | **webapp-testing: avoid shell=True in with_server.py** (#1980) | Pcmhacker-piro | Eliminates command injection risk (CWE-78) by removing `shell=True` from server subprocess spawning. Directly addresses a security-critical vulnerability in the webapp-testing workflow. | Open |
| 5 | **Add proofcore-contract-auditor for smart contract notarization** (#1771) | ProofCore-Protocol | Adds automated static analysis for Solidity/Rust smart contracts, anchoring cryptographic audit proofs onto the TON Blockchain via a zero-storage Merkle protocol. Targets Web3 developers. | Open |
| 6 | **Add md2video-audio skill** (#1703) | 70v-Yoyo | Compiles Markdown documents into MP4 videos with realistic voiceovers using Marp for slide generation. Zero-cost professional video output from plain text. | Open |
| 7 | **Add pyxel skill for retro game development** (#525) | kitao | Guides creation, debugging, and verification of retro games in Python using the Pyxel library. Covers headless input-driven runs, frame inspection, and task-specific state checks. | Open |
| 8 | **Add document-typography skill** (#514) | PGTBoos | Prevents typographic failures in AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. Addresses a pervasive quality issue across all document-generation Skills. | Open |

**Discussion Highlights:**
- **Security focus:** PR #1980 (CWE-78 remediation) and PR #1771 (Web3 contract auditing) indicate growing attention to adversarial use cases.
- **Evaluation reliability:** PR #1298 targets fundamental tooling bugs affecting Skill quality measurement—critical for the community's CI/CD practices.
- **Cross-domain expansion:** The PRs span MCP infrastructure, productivity tooling (Notion, video, typography), and domain-specific automation (Web3, retro gaming).

---

## 2. Community Demand Trends

Issues reveal the following high-demand directions for new or improved Skills:

### a) Collaboration & Sharing Infrastructure
- **Org-wide skill sharing** (#228, 17 comments, 8 👍) — Users want a native mechanism to distribute Skills within organizations without manual file handoff. This is the most-requested structural feature.
- **Duplicate skill conflict** (#189, 6 comments, 9 👍) — `document-skills` and `example-skills` plugins ship identical content, causing context pollution.

### b) Evaluation & Quality Assurance
- **run_eval.py trigger failures** (#556, 13 comments, 7 👍) — A critical bug where `claude -p` never triggers Skills/commands, producing 0% trigger rates across all queries.
- **Parallel worker UUID collision** (#1352, 6 comments, 3 👍) — Silent false negatives in trigger evaluation when `--num-workers > 1`.

### c) Governance & Trust
- **Security: namespace impersonation** (#492, 46 comments, 3 👍) — Community Skills distributed under `anthropic/` namespace blur the trust boundary; users may grant elevated permissions to unofficial Skills.
- **Agent governance skill proposal** (#412, 6 comments, closed) — Request for safety patterns, threat detection, and audit trails in AI agent systems.

### d) Workflow Automation
- **compact-memory notation** (#1329, 10 comments) — Symbolic notation for compact agent state, reducing context overhead for long-running agents.
- **Reasoning Quality Gate Pipeline** (#1385, 8 comments) — Three-stage pre-task calibration, adversarial review, and delivery verification pipeline.

### e) Context & Resource Management
- **claude-api Skill context exhaustion** (#1487, 5 comments) — Bundled `claude-api` Skill injects ~156k tokens, exhausting context windows in a single tool call.
- **Email change capability** (#1143, 7 comments, 20 👍) — Platform feature request to prevent workspace data loss; highest 👍 count for non-Skill issues.

**Trend Summary:** The community's most active demand centers on **evaluation tooling reliability**, **collaborative sharing infrastructure**, and **trust/security governance**—indicating a maturation phase where workflow-scale concerns outweigh feature-scale additions.

---

## 3. High-Potential Pending Skills

These PRs have active engagement or represent significant new capabilities; they are strong candidates for near-term merging:

| PR | Skill | Why It May Land Soon |
|----|-------|----------------------|
| #1742 | **mcp-builder fix** | Directly unblocks MCP ≥2.0 compatibility; critical infrastructure fix with clear problem statement |
| #1980 | **webapp-testing security fix** | Addresses CWE-78 with a focused, well-scoped remediation |
| #1703 | **md2video-audio** | Zero-cost, broad utility for documentation and presentation workflows |
| #525 | **pyxel retro game dev** | Niche but well-defined; long-open with consistent updates (latest 2026-11-01) |
| #1298 | **skill-creator eval isolation** | Improves core tooling used by all contributors; multi-platform (Windows) impact |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for reliable evaluation tooling, cross-organization sharing infrastructure, and security hardening—indicating the ecosystem is maturing from feature proliferation toward operational maturity and trust governance.**

---

**GitHub Links:**
- Repository: https://github.com/anthropics/skills
- All PRs above: `https://github.com/anthropics/skills/pull/{number}`
- All Issues above: `https://github.com/anthropics/skills/issues/{number}`

---

<think>The user wants me to generate a structured GitHub community digest for Claude Code based on the provided data from 2026-11-26. Let me analyze the data and create a comprehensive digest.

Key observations:
1. **Latest Releases**: None in the last 24h
2. **Latest Issues**: 50 total items, showing top 30 by comment count
3. **Latest Pull Requests**: 2 items (both about open-sourcing Claude Code)
4. **No Discussion data provided** - so I'll omit section 5

Let me structure this properly:

## Today's Highlights
- Need to summarize the most important updates in 2-3 sentences

## Releases
- None to report

## Hot Issues
- Pick 10 noteworthy issues and explain why they matter
- Looking at the data sorted by comments:
  1. #18435 - Multi-account management (256 comments, 1112 👍)
  2. #40043 - Cowork project folder removal (34 comments, 109 👍)
  3. #96326 - Language drift bug (26 comments, 42 👍)
  4. #100114 - Windows Remote Control bug (18 comments, 11 👍)
  5. #44657 - Subagent Write tool rejects .md files (16 comments, 35 👍)
  6. #107077 - Cowork deprecated mode (15 comments)
  7. #101755 - Plugin API cache pre-warm (5 comments)
  8. #112264 - Code Mode event nonces bug (5 comments)
  9. #94484 - update-config skill dumps schema (3 comments)
  10. #109756 - Desktop app dictation hotkey (2 comments)

## Key PR Progress
- Only 2 PRs, both about open-sourcing Claude Code
  - #41518 and #41447

## Feature Request Trends
- Multi-account switching
- Cowork improvements
- Plugin API enhancements
- Desktop app features
- Model behavior improvements

## Developer Pain Points
- Language handling issues
- Timeout problems (especially on macOS)
- MCP tool issues
- Permissions and authentication problems
- Remote Control functionality issues

Let me write this up professionally.
</think>


# Claude Code Community Digest — November 26, 2026

## Today's Highlights

The community continues to drive significant feature discussions around multi-account management and desktop app improvements, with Issue #18435 accumulating 256 comments from developers requesting easier profile switching. Platform-specific bugs on Windows, macOS, and Linux dominate recent activity, including critical issues with Remote Control session restoration and timeout handling during system sleep states.

---

## Releases

**No new releases in the last 24 hours.** The team appears to be in a quiet period following recent updates.

---

## Hot Issues

### 1. [FEATURE] Add the ability to manage multiple Claude accounts within the Claude Desktop app [#18435](https://github.com/anthropics/claude-code/issues/18435)
**256 comments · 1,112 👍**

The single most-requested feature in the repository's history. Users want native profile switching within Claude Desktop to seamlessly work with multiple Anthropic accounts. This is critical for developers who separate work/personal usage or manage client accounts. The high engagement signals a fundamental UX gap that the team needs to address.

### 2. [FEATURE] Allow removal of local folders from a Cowork project's context [#40043](https://github.com/anthropics/claude-code/issues/40043)
**34 comments · 109 👍**

Cowork users are frustrated by the inability to selectively exclude folders from context, leading to unnecessary token usage and irrelevant context pollution. This enhancement would give teams better control over what gets included in collaborative sessions.

### 3. [BUG] Replies drift into English despite CLAUDE.md rule requiring Japanese [#96326](https://github.com/anthropics/claude-code/issues/96326)
**26 comments · 42 👍**

A language fidelity bug affecting multilingual developers. Despite explicit CLAUDE.md configuration and session settings enforcing Japanese, the model reverts to English after processing English tool output. This undermines localization workflows and international team collaboration.

### 4. [BUG] Windows desktop: Remote Control not restored after app relaunch [#100114](https://github.com/anthropics/claude-code/issues/100114)
**18 comments · 11 👍**

Windows users experience broken Remote Control sessions after app updates or restarts, with connected sessions incorrectly archived on mobile. This disrupts cross-device workflows that rely on seamless session continuity.

### 5. [BUG] Subagent Write tool rejects .md files named "report"/"summary"/"findings"/"analysis" [#44657](https://github.com/anthropics/claude-code/issues/44657)
**16 comments · 35 👍**

Overly restrictive filename filtering prevents subagents from creating documentation files with common naming conventions. Users cannot opt out, forcing workarounds that complicate automated workflows.

### 6. [BUG] Cowork cloud sessions launch in "deprecated mode" — hooks and slash commands broken [#107077](https://github.com/anthropics/claude-code/issues/107077)
**15 comments**

A critical Cowork bug where plugin hooks and slash commands fail to execute in certain cloud session modes. The deterministic behavior (100% failure in one mode) suggests a configuration or initialization issue that needs immediate attention.

### 7. [BUG] Code Mode: event nonces re-minted with per-process key, rewrites prompt cache [#112264](https://github.com/anthropics/claude-code/issues/112264)
**5 comments · Has reproduction**

A caching bug where event nonce regeneration breaks prompt cache integrity on every session resume, causing unnecessary recomputation and increased API costs. Affects cost-conscious developers using Code Mode extensively.

### 8. [BUG] macOS: timeouts count time the Mac was asleep [#112366](https://github.com/anthropics/claude-code/issues/112366)
**1 comment · Has reproduction**

Timeout mechanisms incorrectly count system sleep duration, causing premature failures for long-running operations on Macs that enter sleep states. Impacts MCP timeouts, hook timeouts, and Bash limits.

### 9. [FEATURE] Plugin API: replay main thread's last request for cache pre-warm [#101755](https://github.com/anthropics/claude-code/issues/101755)
**5 comments**

Plugin developers want a cache pre-warm mechanism to maintain session responsiveness during idle periods. This would improve the developer experience for keepalive modifications.

### 10. [BUG] VS Code: Renaming idle session fails with ENOENT when CLAUDE_CONFIG_DIR is set [#112381](https://github.com/anthropics/claude-code/issues/112381)
**1 comment · Has reproduction**

A configuration path resolution bug in the VS Code extension that prevents session renaming when custom config directories are used, breaking workflows for developers with non-standard setups.

---

## Key PR Progress

### 1. [OPEN] Fully Open Source Claude Code [#41518](https://github.com/anthropics/claude-code/pull/41518)
**Author: BH3GEI**

An ambitious reverse-engineering effort that extracted 1,906 TypeScript source files from the shipped `cli.js.map` and created a build configuration using Bun bundler. Successfully builds and runs basic commands. This community-driven initiative reflects strong demand for open-source access to Claude Code internals.

### 2. [OPEN] feat: open source claude code ✨ [#41447](https://github.com/anthropics/claude-code/pull/41447)
**Author: gameroman**

Another community attempt at open-sourcing Claude Code, claiming to close multiple related issues. While the PR suggests progress toward open-source availability, community verification is still pending.

---

## Feature Request Trends

Analysis of recent issues reveals these dominant feature directions:

| Category | Key Requests | Community Interest |
|----------|--------------|-------------------|
| **Multi-account Management** | Profile switching, account isolation | 🔥🔥🔥 (1,112+ 👍) |
| **Cowork Enhancements** | Selective folder exclusion, session mode fixes | 🔥🔥 |
| **Plugin API Extensions** | Cache control, request metadata, microcompact hooks | 🔥🔥 |
| **Desktop App Features** | Dictation hotkeys, slash command palette | 🔥 |
| **Authentication** | MCP OAuth improvements, multi-account support | 🔥 |
| **Platform Consistency** | Cross-platform parity for Remote Control, permissions | 🔥 |

---

## Developer Pain Points

### Authentication & Account Management
- Multi-account switching remains the top pain point with no native solution
- MCP OAuth implementation drops RFC 8707 `resource` parameters, causing sign-in failures
- Identity verification issues remain unresolved despite multiple support submissions

### Platform-Specific Instability
- **Windows**: Remote Control session persistence broken after relaunch; git fsmonitor polling forces full tree scans
- **macOS**: Sleep-aware timeout handling fails; permissions bypass doesn't stick
- **Linux**: Language drift bugs; Write tool over-restricts filenames

### Tool & MCP Ecosystem
- Tools discovered via search lose schemas after compaction
- Subagent Write tool has inflexible filename restrictions
- MultiEdit removal left no batch-edit replacement

### Performance & Cost
- Event nonce regeneration invalidates prompt caches on resume
- Auto-compaction runs silently in Projects beta with no user notification
- update-config skill dumps full 3,000+ line schema on every invocation

### Model Behavior
- Safety checks incorrectly flag legitimate scientific work (computational chemistry)
- Model ignores brief/style instructions and over-engineers solutions
- Parallel agents in long sessions cause accumulated untested changes

---

*Generated from GitHub data · [anthropics/claude-code](https://github.com/anthropics/claude-code) · 2026-11-26*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate an OpenAI Codex community digest for 2026-11-26 based on the provided GitHub data. Let me analyze the data and structure it according to the requested format.

Let me go through the data:

**Releases:**
- rust-v0.174.0-alpha.6: 0.174.0-alpha.6

**Issues (showing top 30 by comment count):**
1. #62943 - Windows regression bug (34 comments)
2. #62234 - macOS bottom panel settings (25 comments, CLOSED)
3. #63783 - Windows ARM64 startup issue (10 comments)
4. #49162 - Linux mouse selection regression (9 comments)
5. #39260 - Credit usage ledger frozen (8 comments)
6. #14099 - Pasting slow on Windows CLI (8 comments)
7. #63035 - Windows ChatGPT Work cannot run locally (7 comments)
8. #60484 - Windows Desktop hangs on startup (5 comments)
9. #63705 - Pet flickers in tmux (5 comments, CLOSED)
10. #55727 - CLI sandbox escalation issue (5 comments, CLOSED)
11. #52003 - Garbled characters in JetBrains terminal (5 comments, CLOSED)
12. #63869 - ChatGPT desktop app error (4 comments)
13. #31783 - Expose Goal controls (4 comments)
14. #63306 - Skills missing from slash menu (4 comments)
15. #59608 - Mouse-selection copy fails in Ghostty (4 comments)
16. #60717 - Browser Use denies loopback origin (3 comments)
17. #42421 - Input lag over SSH/Mosh (3 comments, CLOSED)
18. #40260 - Alt+numeric keypad input (3 comments)
19. #35599 - Ctrl+C/D not recognized with Cyrillic (3 comments)


20. #24908 - Image paste fails on GNOME Wayland (3 comments)
21. #60410 - CLI image paste fails (3 comments)
22. #63913 - Windows hangs on launch (3 comments)
23. #64073 - Windows Codex freezes after 18 images (2 comments)
24. #40835 - Bug in Powershell (2 comments, CLOSED)
25. #51579 - Managed networking rejects sandbox (2 comments)
26. #46881 - Codex CLI in Warp jumps (2 comments, CLOSED)
27. #59289 - App Server MCP connection issue (2 comments)
28. #60588 - File search highlights wrong (2 comments)
29. #56062 - TUI prompt edit after resume (2 comments)
30. #59559 - TUI hangs on WebSocket reset (2 comments)

**Pull Requests:**
The repository shows 20 recent pull requests, all marked as closed. Notable PRs include improvements to TUI image attachment handling relative to file search roots, fixes for pet animation flickering in tmux, and code fence tracking in TUI streaming previews. Additional work addresses Unicode fuzzy matching, slash popup activation, and mouse controls for sidebar management.

Further refinements span sidebar chooser input handling, TUI sidebar input routing, per-executor plugin settings in capability discovery, status display for subagent waits, Command Center shortcut matching, and TUI shortcut hints. Numeric MCP elicitation fields are now supported, interrupt guidance persists during streaming, the Statsig client key is bundled in release builds, and background command launches display properly in the TUI.

Session lookup errors surface in the TUI, Windows PowerShell hooks preserve native exit codes, and environment selection tests move into a dedicated file. MCP sessions clean up during HTTP recovery, and custom statuslines gain inline badges.

A discussion on the Awesome Codex CLI list generated significant engagement with 15 comments, while the VS Code extension session management question received 5 comments. Several items show activity with 2 comments each—ChatGPT Business transparency, exec command specifications, and recall memory—though some entries appear incomplete. The digest should highlight the Windows regression bug affecting new conversations as a key issue to address.
</think>


# OpenAI Codex Community Digest

**Date:** 2026-11-26  
**Repository:** github.com/openai/codex

---

## 1. Today's Highlights

The community is actively addressing critical Windows regressions following the November 21st update, with Issue #62943 (affecting conversation permissions and execution-location selectors) accumulating 34 comments as the most active ticket. A Rust alpha release (v0.174.0-alpha.6) shipped alongside 20 merged PRs focused on TUI improvements, MCP enhancements, and cross-platform compatibility fixes. Credit usage ledger freezing (#39260) continues to concern business users, with 85.4% of purchased credits showing no usage records since August 8th.

---

## 2. Releases

### Rust SDK Alpha
**Release:** `rust-v0.174.0-alpha.6`  
**URL:** https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.6

This alpha release continues the rapid iteration cycle for the Rust SDK, with no additional changelog details provided in the release notes.

---

## 3. Hot Issues

### 1. **[Windows] Nov 21 Update Regression — Conversations Lose Permissions & Selectors** (#62943)  
**Status:** OPEN | **Comments:** 34 | **👍:** 17  
**URL:** https://github.com/openai/codex/issues/62943

New conversations after the November 21st update are missing permission and execution-location selectors, and the "Max reasoning effort" option has disappeared entirely. Affects Windows x64 users on build 26200. This is the highest-traffic issue today, indicating a significant regression for ChatGPT Work users.

---

### 2. **macOS: Bottom Panel Settings Disappear After Update** (#62234)  
**Status:** CLOSED | **Comments:** 25 | **👍:** 25  
**URL:** https://github.com/openai/codex/issues/62234

Terminal placement was forced to the right and bottom panel settings became inaccessible on macOS 27.0.1 with Apple M5. The high engagement (25 👍 reactions) suggests this was a widespread annoyance for Pro users on the unified desktop app.

---

### 3. **[Windows ARM64] Missing Scope Instance on Startup** (#63783)  
**Status:** OPEN | **Comments:** 10 | **👍:** 4  
**URL:** https://github.com/openai/codex/issues/63783

ChatGPT desktop app crashes immediately on launch for Windows ARM64 users after updating to build 26.1120.6357.0. Affects Business tier users and blocks core functionality.

---

### 4. **Linux Regression: Mouse Selection No Longer Supports Middle-Click Paste** (#49162)  
**Status:** OPEN | **Comments:** 9 | **👍:** 6  
**URL:** https://github.com/openai/codex/issues/49162

Since Codex CLI 0.158.0, selecting text in the TUI no longer makes it available for middle-click paste on Linux. Users report the copy confirmation message displays, but the clipboard never receives the content. Long-standing issue since September.

---

### 5. **Credit Usage Ledger Frozen Since Aug 8 — 85.4% of Credits Unaccounted** (#39260)  
**Status:** OPEN | **Comments:** 8 | **👍:** 0  
**URL:** https://github.com/openai/codex/issues/39260

The Analytics credit usage log stopped recording entries on August 8th, 2026. Of 53,000 purchased credits, 45,252 (85.4%) show as consumed with zero corresponding usage records. Critical business transparency issue with no resolution after 3+ months.

---

### 6. **Pasting is Really Slow on Windows CLI** (#14099)  
**Status:** OPEN | **Comments:** 8 | **👍:** 2  
**URL:** https://github.com/openai/codex/issues/14099

Codex CLI 0.112.0 exhibits significant paste latency on Windows NT 10.0.26100.0. Despite being open since March 2026, this performance issue persists and impacts daily workflow efficiency.

---

### 7. **[Windows] ChatGPT Work Cannot Run Locally** (#63035)  
**Status:** OPEN | **Comments:** 7 | **👍:** 3  
**URL:** https://github.com/openai/codex/issues/63035

Windows 11 Pro users report that ChatGPT Work exclusively runs in the cloud, with no option for local execution despite having the appropriate subscription tier. This limits offline productivity and data privacy options.

---

### 8. **Windows Desktop Hangs on Startup: WSL PATH Probe Has No Timeout** (#60484)  
**Status:** OPEN | **Comments:** 5 | **👍:** 2  
**URL:** https://github.com/openai/codex/issues/60484

The Windows desktop application hangs indefinitely during startup due to a `spawnSync bash -ilc` call probing WSL PATH with no timeout protection on the main thread. Users must kill the process manually.

---

### 9. **CLI Image Paste Fails: No Numbered Image Marker** (#60410)  
**Status:** OPEN | **Comments:** 3 | **👍:** 0  
**URL:** https://github.com/openai/codex/issues/60410

Image paste via clipboard fails silently in Codex CLI 0.167.0 on Linux aarch64—no numbered image marker appears and no attachment is sent to the model. Affects users who rely on visual context sharing.

---

### 10. **Windows Hangs on Every Launch After Update** (#63913)  
**Status:** OPEN | **Comments:** 3 | **👍:** 0  
**URL:** https://github.com/openai/codex/issues/63913

ChatGPT desktop app hangs immediately after launch on Windows 11 x64 (build 26.1120.6357.0). Consistent reproduction blocks any productive use of the application.

---

## 4. Key PR Progress

| PR | Title | Summary |
|----|-------|---------|
| [#64071](https://github.com/openai/codex/pull/64071) | Resolve TUI image attachments relative to file search root | Fixed image selection via `@` completion failing when file search root differs from working directory |
| [#64069](https://github.com/openai/codex/pull/64069) | Prevent Kitty pet animation flicker in tmux | Mitigated animation flicker by alternating between two Kitty images during tmux passthrough |
| [#64067](https://github.com/openai/codex/pull/64067) | Fix code fence tracking in TUI streaming preview | Prevented fence markers in blockquotes from prematurely ending unquoted code blocks |
| [#64058](https://github.com/openai/codex/pull/64058) | Fix Unicode fuzzy matching and slash popup activation | Resolved Greek sigma variant matching failures and incorrect slash popup behavior |
| [#64055](https://github.com/openai/codex/pull/64055) | Add mouse controls to hide/restore TUI sidebar | Implemented click controls (`›`/`‹`) for sidebar visibility without keyboard navigation |
| [#64054](https://github.com/openai/codex/pull/64054) | Refactor TUI sidebar chooser input handling | Modularized chooser event handling with improved row visibility checks |
| [#64053](https://github.com/openai/codex/pull/64053) | Extract TUI sidebar input routing into its own module | Improved pointer event resolution and input dispatching architecture |
| [#64052](https://github.com/openai/codex/pull/64052) | Honor per-executor plugin settings in capability discovery | Plugin disabling now respects executor-specific installations independently |
| [#64023](https://github.com/openai/codex/pull/64023) | Support numeric MCP elicitation fields in TUI | MCP forms with numeric fields now render proper input UI instead of generic approval prompts |
| [#64013](https://github.com/openai/codex/pull/64013) | Preserve native exit codes in Windows PowerShell hooks | Fixed `$LASTEXITCODE` forwarding so `PreToolUse` hooks correctly detect command failures |

---

## 5. Hot Discussions

### Ideas
| # | Title | Comments | URL |
|---|-------|----------|-----|
| #63915 | What if spare GPU time could earn Codex credits? | 0 | [Link](https://github.com/openai/codex/discussions/63915) |
| #63850 | Surface Unix signal-termination info on shell tool results | 0 | [Link](https://github.com/openai/codex/discussions/63850) |

### Q&A
| # | Title | Comments | URL |
|---|-------|----------|-----|
| #22829 | Why codex extension shows all previous sessions instead of just the project session? | 1 | [Link](https://github.com/openai/codex/discussions/22829) |
| #56409 | exec_command / write_stdin: documented guarantees on capture, termination, and duration? | 1 | [Link](https://github.com/openai/codex/discussions/56409) |

### Show and Tell
| # | Title | Comments | URL |
|---|-------|----------|-----|
| #16329 | Awesome Codex CLI — curated list of 150+ ecosystem tools | 15 | [Link](https://github.com/openai/codex/discussions/16329) |
| #58220 | recall: give Codex Claude Code's memories (MCP, zero deps) | 1 | [Link](https://github.com/openai/codex/discussions/58220) |
| #63921 | A Codex workflow for playtesting a browser-game build | 0 | [Link](https://github.com/openai/codex/discussions/63921) |
| #63395 | Codex Desk: find past answers and continue tasks | 0 | [Link](https://github.com/openai/codex/discussions/63395) |
| #63884 | Testing plausible wrong answers with Codex in geometry lessons | 0 | [Link](https://github.com/openai/codex/discussions/63884) |

---

## 6. Feature Request Trends

Analysis of today's Issues and Discussions reveals these emerging demand patterns:

1. **Cross-Platform Input Reliability** — Multiple reports of keyboard/mouse behavior regressions across Linux (middle-click paste, Cyrillic layouts, Kitty/Ghostty integration) and Windows (Alt+numeric keypad, paste performance). Users expect consistent terminal interaction regardless of environment.

2. **Enhanced CLI Automation** — Requests for exposing Goal controls via command-line (#31783) and surfacing Unix signal termination info (#63850) indicate demand for deeper scripting and reliability benchmarking capabilities.

3. **Memory & Session Management** — Community-built tools like `recall` and `Codex Desk` highlight the need for better conversation history, session switching, and memory persistence features.

4. **MCP Ecosystem Expansion** — Multiple MCP-related PRs and discussions suggest growing interest in Model Context Protocol integrations, particularly for numeric elicitation fields and session recovery.

5. **Windows-First Development Concerns** — 40%+ of active issues target Windows-specific problems (startup hangs, ARM64 support, local execution, sandbox networking), signaling that Windows users may feel underserved.

---

## 7. Developer Pain Points

The most frequently occurring frustrations in today's data:

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Windows startup/hang failures** | High | #63783, #63913, #60484, #63035 |
| **TUI mouse/selection behavior** | Medium-High | #49162, #59608, #60588, #24908 |
| **Image/clipboard operations** | Medium | #60410, #24908, #64071 (fixed) |
| **Credit/usage transparency** | Medium | #39260 |
| **Terminal emulator compatibility** | Medium | #52003, #46881, #63705 (fixed), #42421 |
| **MCP connection resilience** | Low-Medium | #59289, #64011 (fixed) |

**Bottom line:** Windows stability remains the dominant concern, while Linux users report scattered but persistent TUI interaction issues. The credit ledger freeze has gone unaddressed for 3+ months, eroding trust among paid business users. The positive signal: the team is actively merging fixes (20 PRs today), particularly around TUI UX refinements and MCP robustness.

---

*Generated from GitHub data • github.com/openai/codex • 2026-11-26*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a structured digest for the Gemini CLI community based on GitHub data for 2026-11-26. Let me analyze the data and create a comprehensive digest.

Key observations from the data:
1. **Releases**: None in the last 24h
2. **Issues**: 50 total, top 30 shown by comment count
3. **Pull Requests**: 30 total, showing top 20 by comment count

Let me organize this into the requested sections:

**1. Today's Highlights**
Looking at the most active and recent items:
- Several P1 issues around agent hangs, subagent recovery, and crash issues
- Security fixes being merged (SSRF prevention, MCP token binding)
- ACP improvements (session management, token tracking)
- Core stability fixes

**2. Releases**
None in the last 24h

**3. Hot Issues**
I need to pick 10 noteworthy issues based on priority, comment count, and relevance:
- #22323: Subagent recovery after MAX_TURNS (14 comments, P1)
- #19873: Zero-Dependency OS Sandboxing (9 comments, P2, enhancement)
- #21409: Generalist agent hangs (8 comments, P1)
- #22745: AST-aware file reads (7 comments, P2)
- #21968: Gemini not using skills/subagents enough (7 comments, P2)
- #22267: Browser Agent ignores settings.json (5 comments, P2)
- #24246: 400 error with > 128 tools (3 comments, P2)
- #22186: get-shit-done output hook crash (3 comments, P1)
- #20079: Symlink agent recognition (4 comments, P2)
- #21763: Bugreport doesn't provide subagent context (2 comments, P1)


- #30239: Tier alias config preservation, closed
- #30246: Windows cmd.exe path quoting fix, closed
- #30230: Synthetic binary ack for audio/video, closed
- #30232: ACP session/close support, closed
- #30247: PowerShell blocking fix, closed
- #30241: Binary data truncation fix, closed
- #30234: ACP large tool output truncation, closed
- #30236: ACP parallelizable tool calls, closed
- #30353: Token usage tracking standardization, open
- #30363: Pending prompt duplication fix, open
- #30362: Stopped agent reasons, open
- #30349: Bolt optimization, open
- #30348: DevTools copy feedback, open
- #30477: SSRF prevention, open
- #30478: MCP tool approval binding, open
- #30475: MCP OAuth token binding, open
- #30476: Telemetry export redirect fix, open
- #30473: Binary payload eviction, open
- #30454: Origin consistency in MCP OAuth, closed

The feature requests cluster around AST-aware tooling, subagent optimization, and security hardening. There's also work happening on ACP mode stability and MCP integration. Cross-platform compatibility issues like the PowerShell blocking and Windows path quoting are being addressed alongside core functionality improvements.
</think>


# Gemini CLI Community Digest — 2026-11-26

---

## 1. Today's Highlights

The Gemini CLI project shows intense activity focused on **core stability and security hardening**. Multiple P1 bugs affecting subagent behavior and agent hangs are driving priority fixes, while the team is actively merging critical security patches for SSRF prevention and OAuth token binding vulnerabilities. ACP (Agent Protocol) mode improvements dominate recent PRs, with session management, token tracking, and parallel tool execution enhancements reaching closure.

---

## 2. Releases

**No new releases** were published in the last 24 hours. The project continues to merge fixes into the main branch.

---

## 3. Hot Issues

### 🔴 Priority 1 — Critical Bugs

| # | Issue | Summary | Impact |
|---|-------|---------|--------|
| **#22323** | [Subagent recovery after MAX_TURNS reports GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent hits max turn limit but reports `status: "success"` and `Termination Reason: "GOAL"` instead of properly signaling interruption. | **14 comments** — Users lose visibility into when subagents are cut off prematurely. Affects reliability of codebase investigation tasks. |
| **#21409** | [Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409) | When Gemini CLI defers to the generalist agent, it hangs forever (tested up to 1 hour). Simple operations like folder creation block. | **8 comments, 8 👍** — Blocks basic workflows. Workaround exists (instruct model to skip subagents). |
| **#22186** | [get-shit-done output hook causes crash](https://github.com/google-gemini/gemini-cli/issues/22186) | Crash occurs when get-shit-done output finishes printing user summary. | **3 comments** — Interrupts end-of-task reporting. |
| **#21763** | [Bugreport missing subagent context](https://github.com/google-gemini/gemini-cli/issues/21763) | `/bug` report only captures main session, not subagent activity. | **2 comments** — Hinders debugging when subagents fail. |

### 🟡 Priority 2 — Notable Bugs & Enhancements

| # | Issue | Summary | Impact |
|---|-------|---------|--------|
| **#19873** | [Zero-Dependency OS Sandboxing via model's bash affinity](https://github.com/google-gemini/gemini-cli/issues/19873) | Proposes leveraging Gemini 3's native bash capabilities for secure sandboxing without external dependencies. | **9 comments** — Ambitious security/UX proposal; could reduce attack surface significantly. |
| **#22745** | [AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | Epic to evaluate AST-aware tooling for precise method-bounded reads and surgical navigation. | **7 comments** — Could dramatically reduce token usage and improve accuracy. |
| **#21968** | [Gemini doesn't use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968) | Model ignores custom skills/sub-agents even when task is highly relevant (e.g., git/gradle skills). | **7 comments** — Limits value of skill customization. |
| **#22267** | [Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267) | Global/project-level `settings.json` config (e.g., `maxTurns`) ignored by browser agent. | **5 comments** — Breaks user configuration expectations. |
| **#24246** | [400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246) | Gemini CLI throws 400 error when >128 tools available. | **3 comments** — Limits extensibility with MCP servers. |
| **#20079** | [Symlink agents not recognized](https://github.com/google-gemini/gemini-cli/issues/20079) | `~/.gemini/agents/filename.md` symlinks fail to register as subagents. | **4 comments** — Hinders modular agent organization. |

---

## 4. Key PR Progress

### ✅ Recently Merged (Closed)

| PR | Title | Area | Significance |
|----|-------|------|--------------|
| **#30247** | [fix(core): avoid blocking PowerShell parsing during shell checks](https://github.com/google-gemini/gemini-cli/pull/30247) | Core | **P2** — Fixes UI freeze on Windows during shell policy checks. Synchronous PowerShell AST parsing was blocking the event loop. |
| **#30246** | [fix(core): quote IDE CLI path for cmd.exe on Windows](https://github.com/google-gemini/gemini-cli/pull/30246) | Core | Fixes `/ide install` failure when VS Code path contains spaces (default install location). |
| **#30239** | [fix(core): keep tier alias config when tier resolves](https://github.com/google-gemini/gemini-cli/pull/30239) | Core | Custom aliases on tiers (`flash-lite`, `flash`, `pro`) now preserve `generateContentConfig`. |
| **#30230** | [fix(core): keep synthetic binary ack for audio/video](https://github.com/google-gemini/gemini-cli/pull/30230) | Agent | **P1** — Fixes 400 error when `read_file` on audio/video with Code Assist (Google Login). |
| **#30234** | [fix(acp): truncate large tool outputs for model](https://github.com/google-gemini/gemini-cli/pull/30234) | ACP | ACP now bounds large tool outputs like CLI does; one test case dropped from 369k input tokens. |
| **#30236** | [fix(acp): run parallelizable tool calls together](https://github.com/google-gemini/gemini-cli/pull/30236) | ACP | ACP now parallelizes independent tool calls per turn, matching CLI scheduler behavior. |
| **#30232** | [feat(acp): support session/close](https://github.com/google-gemini/gemini-cli/pull/30232) | ACP | ACP clients can now release sessions, freeing config, chat, and MCP connections. |
| **#30241** | [fix(core): keep injected binary data intact when truncating](https://github.com/google-gemini/gemini-cli/pull/30241) | Core | Fixes base64 corruption when truncating tool responses containing `__binary_injection__`. |
| **#30454** | [fix(core): enforce origin consistency in MCP OAuth](https://github.com/google-gemini/gemini-cli/pull/30454) | Core | **P1** — RFC 8414 issuer matching and origin consistency for MCP OAuth flow. |

### 🔄 Open & Under Review

| PR | Title | Area | Status |
|----|-------|------|--------|
| **#30479** | [Resolvendo issue #30474](https://github.com/google-gemini/gemini-cli/pull/30479) | — | **P1, XL** — Community contribution; details pending. |
| **#30477** | [fix(web-fetch): prevent SSRF via DNS hostnames and redirects](https://github.com/google-gemini/gemini-cli/pull/30477) | Security | Revival of #27739 — Fixes proxy-redirect SSRF (R5). URL passing private-IP check can redirect to loopback/private targets. |
| **#30478** | [Fix: bind MCP tool approvals to tool definition](https://github.com/google-gemini/gemini-cli/pull/30478) | MCP | Approval by name only was lost on `tools/list_changed`; now bound to tool definition. |
| **#30475** | [Fix: bind MCP OAuth tokens to server URL](https://github.com/google-gemini/gemini-cli/pull/30475) | MCP | Stored OAuth tokens withheld when server URL repointed; forces re-auth instead of silent replay. |
| **#30476** | [fix(cli): stop trusted-workspace settings from redirecting telemetry](https://github.com/google-gemini/gemini-cli/pull/30476) | CLI | **P2** — Trusted workspace settings.json was overriding telemetry config, enabling repo to redirect user data. |
| **#30353** | [fix(acp): standardize token usage tracking and quota metadata](https://github.com/google-gemini/gemini-cli/pull/30353) | ACP | Resolves #24280 and #27985 — preserves `PromptResponse.usage` on cancelled turns. |
| **#30363** | [fix(core): avoid duplicating pending prompt in managed history](https://github.com/google-gemini/gemini-cli/pull/30363) | Core | Fixes #30069 — prevents re-appending raw prompt when history hardening already coalesced it. |
| **#30362** | [fix(acp): report stopped agent reasons](https://github.com/google-gemini/gemini-cli/pull/30362) | ACP | Fixes #30199 — sends stop reason as assistant message instead of silent empty turn. |
| **#30349** | [⚡ Bolt: optimize tool argument sanitization hot path](https://github.com/google-gemini/gemini-cli/pull/30349) | Performance | Pre-compiles regexes (`KEY_WITH_DELIMITER_REGEX`, etc.) and pre-computes sensitive patterns at module scope. |
| **#30348** | [🎨 Palette: DevTools copy feedback and accessible icon buttons](https://github.com/google-gemini/gemini-cli/pull/30348) | UX | Visual confirmation (checkmark, green color) when copying payload/response JSON; improved aria-labels. |

---

## 5. Hot Discussions

*No discussion data was provided in this data source.*

---

## 6. Feature Request Trends

Analysis of all 50 issues reveals five dominant feature directions:

| Theme | Frequency | Key Issues |
|-------|-----------|------------|
| **🔬 AST-Aware Tooling** | High | #22745, #22746, #22747, #19561 — Surgical code discovery via AST grep, method-bounded reads, token-frugal extraction |
| **🤖 Subagent Intelligence** | High | #19873, #21968, #20195, #18282, #18283, #18285, #18287 — Better skill invocation, parallel collaboration, shared memory, discovery mechanisms |
| **🛡️ Security & Sandboxing** | High | #19873 (OS sandboxing), #30477 (SSRF), #30475/#30478 (MCP OAuth/tokens), #30476 (telemetry hijacking) |
| **📊 ACP Mode Parity** | Medium | #30232, #30234, #30236, #30353, #30362 — Session management, output truncation, token tracking, stop reasons |
| **🌐 Browser Agent Reliability** | Medium | #22267, #22232, #21983 — Settings overrides, session takeover, Wayland compatibility |

---

## 7. Developer Pain Points

The following frustrations appear repeatedly across issues and PRs:

| Pain Point | Evidence | Priority |
|------------|----------|----------|
| **Agent hangs on subagent delegation** | #21409 — generalist agent blocks indefinitely; users forced to disable subagents | 🔴 High |
| **Inconsistent settings inheritance** | #22267 — browser agent ignores global/project settings.json | 🟡 Medium |
| **Token bloat from large file reads** | #19561 — context baseline ~36.6k tokens/turn; large reads add +15k | 🟡 Medium |
| **Symlink agent discovery broken** | #20079 — modular agent organization via symlinks fails silently | 🟡 Medium |
| **Windows PowerShell UI freeze** | #30247 (merged) — synchronous parsing blocked event loop | 🟡 Medium (now fixed) |
| **MCP OAuth token reuse vulnerability** | #30475/#30478 (open) — tokens replayed to different origins | 🔴 High |
| **Tool count ceiling** | #24246 — 400 error with >128 tools limits MCP extensibility | 🟡 Medium |
| **Missing subagent context in bug reports** | #21763 — debugging subagent failures requires manual context gathering | 🟡 Medium |

---

**End of Digest** | Generated 2026-11-26 | Data source: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest for 2026-11-26 based on the provided GitHub data. Let me analyze the data and structure it according to the requested format.

Let me break down what I have:

**Releases (last 24h):**
- v1.0.117-2: Fixed extension loading behavior and built-in searches
- v1.0.117-1: Improved model picker, error handling for unavailable providers
- v1.0.117-0: Added tool exposure for custom agents, fixed session resuming
- v1.0.116: Added JSON Schema for extension manifests, timeline improvements
- v1.0.116-5: Fixed parallel-work help text, shell approval prompts
- v1.0.116-4: Added JSON Schema for extension manifests, PowerShell fixes

**Issues (41 total, showing top 30 by comment count):**
Let me pick 10 noteworthy ones:

1. #5323 - Agent checkpoint refs (refs/agents/*) - Feature request to disable - 8 comments, 6 👍
2. #1826 - Multi-root workspaces via .code-workspace - Feature request - 6 comments, 22 👍
3. #2073 - Request failed errors - Bug - 6 comments, 13 👍
4. #4755 - Session wedges permanently - Bug - 5 comments
5. #2753 - Plugin skills not included in available_skills - Bug - 5 comments
6. #4888 - MCP client sends legacy initialize - Fixed/Closed - 5 comments
7. #4683 - PowerShell ConstrainedLanguage mode error - Bug - 4 comments
8. #5222 - Startup reports disabled MCP servers as blocked - Bug - 3 comments
9. #5354 - ACP doesn't advertise Copilot Fusion - Bug - 3 comments, 11 👍


10. #5440 - Agent Plugins 1.0 .instructions.md ignored - Bug - 2 comments

Additional issues worth tracking include session storage problems with CloudQueryError, MCP server connection timeouts, and plugin hook execution gaps. Recent marketplace and platform issues show up in the latest reports—marketplace downloads and Perforce depot handling are causing problems, along with GHE authentication and remote CLI stability concerns. Model configuration and Windows Terminal compatibility also need attention.

No pull requests or discussions appear in the data, so those sections can be skipped.
</think>


# GitHub Copilot CLI Community Digest

**Date:** 2026-11-26
**Repository:** github.com/github/copilot-cli

---

## 1. Today's Highlights

The Copilot CLI team shipped **v1.0.117** across three patch releases, introducing explicit tool exposure for custom agents and significant improvements to the model picker with service notices and retiring model warnings. Critical fixes include proper session resumption when GitHub sign-in is still completing and corrected PowerShell parameter handling in constrained environments. The community continues to report issues around MCP protocol compatibility, session state management, and plugin marketplace reliability.

---

## 2. Releases

### v1.0.117-2 (2026-11-26)
**Fixed:**
- Extension loading now correctly identifies only pre-approved extensions in `copilot help extensions` output
- Built-in searches no longer fail when Copilot sends line-related flags

### v1.0.117-1 (2026-11-26)
**Improved:**
- Model picker now displays service notices and marks retiring models with warnings before selection

**Fixed:**
- Shows explicit error instead of silent provider switching when repository pins to unavailable provider
- New session checkpoint announcement timing corrected

### v1.0.117-0 (2026-11-26)
**Added:**
- Explicit tool exposure API allowing custom agents to opt in to specific tools

**Fixed:**
- CLI session resumption properly loads connected Copilot Connectors during pending GitHub sign-in
- Background agents can continue conversations after CLI restart and session resume

### v1.0.116-4/5 (2026-11-25)
**Added:**
- Build-time JSON Schema validation for extension manifests

**Fixed:**
- PowerShell commands with numeric parameter names (e.g., `-n1`, `-ExpectedSha256`) honor allow rules again
- Shell approval prompts in ACP clients display the actual command being authorized
- Plan approval no longer incorrectly offers `/fleet` autopilot continuation

---

## 3. Hot Issues

### 🔴 High Priority

**#5323 - Feature Request: Add setting to disable agent checkpoint refs (refs/agents/*)**
- **Why it matters:** Every agent turn creates git commits under `refs/agents/<session-id>/checkpoints/turn/N` authored with the user's identity, polluting repository history and appearing in git tools
- **Community reaction:** 6 👍 | 8 comments
- **Link:** https://github.com/github/copilot-cli/issues/5323

**#2073 - [Bug] Request failed due to transient API error**
- **Why it matters:** Users report frequent retry loops causing degraded UX and potential rate limit issues
- **Community reaction:** 13 👍 | 6 comments
- **Link:** https://github.com/github/copilot-cli/issues/2073

**#4755 - [Bug] Session wedges permanently when queued-lane message lands at turn end**
- **Why it matters:** Sessions become completely unresponsive—no input accepted, app shows stopped, only process kill recovers. Critical reliability issue for long-running workflows
- **Community reaction:** 5 comments (no 👍 shown)
- **Link:** https://github.com/github/copilot-cli/issues/4755

**#4683 - [Bug] PowerShell ConstrainedLanguage mode emits spurious $host.SetShouldExit() error**
- **Why it matters:** Affects enterprise Windows environments using AppLocker or WDAC policies—every shell command generates error output, polluting logs and indicating potential security boundary issues
- **Community reaction:** 1 👍 | 4 comments
- **Link:** https://github.com/github/copilot-cli/issues/4683

**#2753 - [Bug] Plugin skills not included in available_skills for main agent**
- **Why it matters:** Marketplace plugins visible in `/skills` UI (18 skills shown) but not injected into agent's system prompt, breaking skill-based workflows
- **Community reaction:** 1 👍 | 5 comments
- **Link:** https://github.com/github/copilot-cli/issues/2753

### 🟡 Notable

**#1826 - Feature Request: Support multi-root workspaces via .code-workspace file**
- **Why it matters:** CLI doesn't discover additional root folders from `.code-workspace` files when connected via `/ide`, preventing instruction files (AGENTS.md) in secondary folders from loading
- **Community reaction:** 22 👍 | 6 comments
- **Link:** https://github.com/github/copilot-cli/issues/1826

**#5354 - [Bug] ACP does not advertise Copilot Fusion or its tier configuration**
- **Why it matters:** ACP clients like T3 Code cannot display Fusion or offer its tier selector, breaking the AI provider experience for non-interactive workflows
- **Community reaction:** 11 👍 | 3 comments
- **Link:** https://github.com/github/copilot-cli/issues/5354

**#5440 - [Bug] Agent Plugins 1.0 .instructions.md files silently ignored**
- **Why it matters:** New plugin format's instruction files and `applyTo` frontmatter in `com.github.copilot/rules/` don't load, breaking declarative plugin configuration
- **Community reaction:** 1 👍 | 2 comments
- **Link:** https://github.com/github/copilot-cli/issues/5440

**#5574 - [Bug] -p mode fails if agent succeeds but does not print conclusion**
- **Why it matters:** Automation scripts relying on `-p` (programmatic) mode now fail with error exit codes since 1.0.115, breaking CI/CD integrations
- **Community reaction:** 0 👍 | 0 comments
- **Link:** https://github.com/github/copilot-cli/issues/5574

**#3904 - [Bug] CloudQueryError prevents /chronicle standup despite local fallback data**
- **Why it matters:** Standup command fails on cloud errors even when local session data exists, forcing users to maintain cloud connectivity unnecessarily
- **Community reaction:** 0 👍 | 2 comments
- **Link:** https://github.com/github/copilot-cli/issues/3904

---

## 4. Key PR Progress

No new pull requests were merged or opened in the last 24 hours. The team appears to be in a stabilization period following the v1.0.116 and v1.0.117 release cycles.

---

## 5. Hot Discussions

*No discussion data was provided for this period.*

---

## 6. Feature Request Trends

Analysis of open issues reveals these dominant feature directions:

| Theme | Description | Frequency |
|-------|-------------|-----------|
| **Workspace Intelligence** | Multi-root workspace support, .code-workspace file parsing, AGENTS.md discovery across folders | High |
| **Plugin Ecosystem** | Extension manifest schemas, `.instructions.md` loading, managed plugin pre-approval, marketplace reliability | High |
| **MCP Protocol** | Multi-version MCP compatibility, stdio connection handling, disabled server warnings | High |
| **Session Management** | Checkpoint refs control, session wedge recovery, prompt history scoping | Medium |
| **Model/Fusion Control** | Fusion routing to local servers, tier configuration in ACP, dynamic Auto tier flags | Medium |
| **Enterprise Compliance** | PowerShell ConstrainedLanguage support, Perforce depot path handling, Windows sandbox rules | Medium |
| **Automation Reliability** | `-p` mode robustness, error exit codes, background agent persistence | Medium |

---

## 7. Developer Pain Points

### Recurring Frustrations

1. **MCP Protocol Version Mismatch** — Multiple issues (#4888, #5464) highlight dual-era MCP SDK compatibility: CLI sends `2026-07-28` discovery then falls back to legacy `initialize`, causing connection rejections on strict servers

2. **Plugin Marketplace Reliability** — Large marketplace downloads clone entire repos with no progress indication, ignore cancellation, and leave orphan git state (#5491). Marketplace JSON validation failures block installation (#5582)

3. **Session State Instability** — Sessions entering permanent wedge states (#4755), memory leaks during remote session switching (#5577), and failed resumptions create unpredictable developer experiences

4. **Enterprise Environment Gaps** — PowerShell ConstrainedLanguage errors (#4683), Windows sandbox TCP blocking (#5580), and GHE authentication failures (#5571) prevent adoption in managed corporate environments

5. **ACP/Non-Interactive Parity** — Fusion not advertised in ACP (#5354), tool call titles hiding shell commands in approval modals (#4335), and context size settings not configurable without changing defaults indicate feature gaps between interactive and programmatic modes

6. **Checkpoint/History Pollution** — Agent checkpoint refs authored with user identity (#5323) and prompt history including unrelated session entries (#5576) create noisy developer workflows

---

*End of digest. Next update: 2026-11-27*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data for the OpenCode community digest for 2026-11-26.

**Today's Highlights:**
- v2.4.2 released with GPT-6.2 system prompt updates
- Several critical bugs fixed including Windows bash tool dangerous command execution
- Session management improvements with archive/unarchive features
- Theme accessibility improvements (WCAG 2.2 compliance)
- TUI enhancements

**Releases:**
- v2.4.2 with GPT-6.2 System Prompt updates

**Hot Issues (10 most noteworthy):**
1. #59387 - Free tier issues (410 comments, highly active)
2. #12711 - Agent Teams feature (closed, 17 comments)
3. #33704 - GUI options for custom providers
4. #50979 - Session move bug in empty git repos
5. #51191 - Session in nested project folder bug
6. #66389 - v1→v2 session migration bug (closed)
7. #66449 - Windows bash tool deleted entire drive (critical, closed)
8. #60702 - Copilot models sync failure
9. #41355 - Desktop notification sounds configurability
10. #57051 - Invalid arguments for edit tool

**Key PR Progress (10 important):**
1. #66525 - Reusable saved Code Mode scripts as custom tools
2. #66505 - Session history days setting
3. #66521 - WCAG 2.2 contrast and elevation calibration
4. #66276 - Cap Ollama output on agent steps
5. #66503 - Session archive state management
6. #62915 - Surface plugin error causes (closed)
7. #66451 - Push data for question/answer/error/permission details (closed)


8. #57358 - Local sessions in selected directory fix (closed)
9. #66498 - Gate VCS/Snapshot/Worktree/Project on Environment (closed)
10. #66515 - TUI question form selection background (open)

I'll highlight the next set of improvements focusing on terminal controls and authentication fixes. These PRs address critical usability and compatibility issues across different platforms:

Terminal toggling gets more flexible with Ctrl+J support, enabling easier pane management. The Google authentication library update ensures more robust AWS Web Identity Federation integration. Doom loop detection restoration maintains system stability by preventing recursive execution scenarios.

**Feature Request Trends:**
I'm identifying key user-driven enhancement directions across multiple domains:

User interface refinements include custom notification sounds, desktop file preview capabilities, and session management flexibility. Advanced configuration options emerge for custom provider management and permission pattern generation. Cross-platform improvements target SSH connection resilience, multi-display TUI interactions, and internationalization through dictation language settings.

**Developer Pain Points:**
The development community faces nuanced technical challenges:

Complex migration paths create friction, particularly in session transitions between versions. Free tier limitations generate significant user dissatisfaction. Platform-specific bugs persist, including Windows command execution risks and multi-display rendering inconsistencies.

Git integration challenges continue to impact nested directory interactions. Session management problems, from archive handling to project picker freezing, highlight underlying architectural complexities in session lifecycle management.
</think>


# OpenCode Community Digest — 2026-11-26

## Today's Highlights

The v2.4.2 release brings GPT-6.2 system prompt support for Sol and Astra models. A critical **Windows security vulnerability** was addressed where malformed bash commands could delete entire drives—a stark reminder of cross-platform shell escaping complexities. The community is actively improving session management with new archive/unarchive CLI commands and restoring doom-loop detection from v1.

---

## Releases

### v2.4.2
**Release Date:** 2026-11-26

- **GPT-6.2 System Prompt:** Updated system prompts for GPT-6.2 Sol and Astra models, including `gpt-latest` aliases.
- **OpenCode Go Onboarding Fix:** Model picker now correctly lists OpenCode Go after connection.

[Release #66297](https://github.com/anomalyco/opencode/pull/66297)

---

## Hot Issues

### 1. Free Tier Issues Mega-Thread 📌
**Issue [#59387](https://github.com/anomalyco/opencode/issues/59387)** | 410 comments | 👍 31

The community's most-active issue documents widespread free tier problems: usage limits that don't reset, "subscribe to Go" prompts, and version compatibility errors. With 410 comments, this represents significant user friction and potential churn risk.

---

### 2. Agent Teams — Parallel Multi-Model Support
**Issue [#12711](https://github.com/anomalyco/opencode/issues/12711)** | 17 comments | 👍 24 | **CLOSED**

Proposes flat agent teams with named messaging, multi-model support, and TUI integration. Currently, the `task` tool spawns sequential subagents only. The 24 👍 signal strong demand for concurrent agent orchestration—a fundamental shift in OpenCode's architecture.

---

### 3. GUI Options for Custom Providers
**Issue [#33704](https://github.com/anomalyco/opencode/issues/33704)** | 13 comments | 👍 4

Requests GUI-based management for custom providers (LM Studio, Jan AI, etc.) instead of manual JSON configuration. Currently requires editing provider definitions directly—a friction point for non-technical users.

---

### 4. Session Move in Empty Git Repo Corrupts Worktree
**Issue [#50979](https://github.com/anomalyco/opencode/issues/50979)** | 11 comments | 👍 3

Moving a session into an empty git repository silently re-points the global project's worktree to the target directory, causing data loss and path confusion. Affects users working with new repositories.

---

### 5. Session Opens at Git Root Instead of Subdirectory
**Issue [#51191](https://github.com/anomalyco/opencode/issues/51191)** | 9 comments | 👍 4

Starting a session in a nested project folder defaults to the repository root, breaking `.opencode/skills` discovery and local context. A fix is merged in [#57358](https://github.com/anomalyco/opencode/pull/57358).

---

### 6. Critical: Windows `rd /s /q` Deleted Entire Drive
**Issue [#66449](https://github.com/anomalyco/opencode/issues/66449)** | 7 comments | **CLOSED**

A critical security/correctness bug where Windows bash tool commands with escaped quotes were misinterpreted, causing `rd /s /q` to recursively delete the current drive root (270k files). Demonstrates fragile PowerShell/CMD escaping.

---

### 7. Copilot Models Fail to Sync in Shared Service
**Issue [#60702](https://github.com/anomalyco/opencode/issues/60702)** | 6 comments

GitHub Copilot models only sync in `--standalone` mode; intermittent failures occur in the shared background service used by desktop and TUI. Impacts users relying on Copilot integrations.

---

### 8. Desktop Notification Sounds Unconfigurable
**Issue [#41355](https://github.com/anomalyco/opencode/issues/41355)** | 5 comments | **CLOSED**

Every failure triggers OS error sounds with no mute/per-event control. On unstable networks, this becomes a "wall of beeps." Related feature request in [#66524](https://github.com/anomalyco/opencode/issues/66524) extends this to custom audio files.

---

### 9. Edit Tool "Missing key" Errors
**Issue [#57051](https://github.com/anomalyco/opencode/issues/57051)** | 5 comments

Users receive "Missing key" errors for the `edit` tool across different LLMs and projects. The tool description may be insufficient, causing models to generate malformed arguments.

---

### 10. Session Pause/Snooze Feature Request
**Issue [#64249](https://github.com/anomalyco/opencode/issues/64249)** | 2 comments

Requests ability to pause a session until a future time with a clock indicator in the switcher. Useful for scheduled workflows and deferred context restoration.

---

## Key PR Progress

| PR | Author | Type | Status | Summary |
|----|--------|------|--------|---------|
| [#66525](https://github.com/anomalyco/opencode/pull/66525) | hearnadam | Feature | Open | **Reusable Code Mode scripts as custom tools** — Save `.js` scripts in `.opencode/tools/` with typed arguments for session reuse. Behind `codemode_tools` flag. |
| [#66521](https://github.com/anomalyco/opencode/pull/66521) | Hona | Feature | Open | **WCAG 2.2 theme calibration** — Calibrates all 35 bundled GUI themes against accessibility standards and perceptual uniformity (OKLCH). |
| [#66505](https://github.com/anomalyco/opencode/pull/66505) | 1107186916 | Feature | Open | **Session history days setting** — Adds `session_history_days` to `cli.json` for TUI session list retention control. |
| [#66503](https://github.com/anomalyco/opencode/pull/66503) | oliver-mee | Feature | Open | **Session archive CLI commands** — Adds `session archive <id>` and `session unarchive <id>` subcommands for better session lifecycle management. |
| [#66276](https://github.com/anomalyco/opencode/pull/66276) | ErOr-0 | Bug Fix | Open | **Cap Ollama output** — Limits Ollama provider output on agent steps, titles, and generate requests to prevent unbounded loops. |
| [#62915](https://github.com/anomalyco/opencode/pull/62915) | kraso | Bug Fix | Closed | **Surface plugin error causes** — Shows actionable npm `ERESOLVE` details instead of bare `NpmInstallFailedError`. |
| [#66451](https://github.com/anomalyco/opencode/pull/66451) | Tarquinen | Feature | Closed | **Push question/answer/error details** — Sends structured data for phone app notifications instead of relying on screenshots. |
| [#66498](https://github.com/anomalyco/opencode/pull/66498) | kitlangton | Refactor | Closed | **Gate VCS/Snapshot/Worktree on Environment** — Prevents remote workspaces from probing host disk; security and isolation improvement. |
| [#66515](https://github.com/anomalyco/opencode/pull/66515) | WlnJBrn09 | Bug Fix | Open | **TUI question form selection styling** — Uses proper selection background colors instead of hardcoded raised base. |
| [#66516](https://github.com/anomalyco/opencode/pull/66516) | WlnJBrn09 | Bug Fix | Open | **Bump google-auth-library to 10.6.1** — Fixes AWS Web Identity Federation authentication with Google Vertex. |

---

## Feature Request Trends

Analysis of issues and PRs reveals these recurring feature directions:

| Category | Requests | Examples |
|----------|----------|----------|
| **Session Management** | 6+ | Archive/unarchive, pause/snooze, history retention, session state persistence across forks |
| **UI/UX Polish** | 5+ | Custom notification sounds, file tree outside sessions, collapsible question popups, theme contrast fixes |
| **Custom Provider Management** | 3+ | GUI for provider configuration, model list management, local inference engine support |
| **Agent Orchestration** | 2+ | Parallel agents (Agent Teams), doom-loop detection restoration, multi-model coordination |
| **Permission/Shell Granularity** | 2+ | Finer-grained shell permission patterns, plan mode enforcement via bash tool |
| **Cross-Platform Stability** | 4+ | SSH connection persistence, multi-display TUI, Windows path handling |

---

## Developer Pain Points

1. **Free Tier Friction:** The #1 community frustration—usage limits not resetting, subscribe prompts, and no clear upgrade path. 410 comments on the mega-thread.

2. **Git/Nested Directory Edge Cases:** Session/project behavior breaks down with empty repos, subdirectories, and worktree configurations. Multiple related bugs filed simultaneously.

3. **Windows Shell Escaping:** Critical data loss incident (#66449) highlights fragile PowerShell/CMD handling. Requires systemic fix, not one-off patch.

4. **Plugin Error Opacity:** npm install failures show generic errors with no actionable detail. Being addressed (#62915), but broader error surfacing needed.

5. **Session Forking Side Effects:** Forked sessions retain stale configurations (model limits, provider settings) and don't pick up changes—a mental model mismatch.

6. **Remote Workspace Isolation:** Current architecture allows remote workspaces to probe host disk; the #66498 refactor addresses this security/architecture concern.

7. **E2E Test Fragility:** Recent `GET /api/experimental/flag` unmocked errors caused hundreds of test failures, indicating test infrastructure gaps.

---

*Digest generated from GitHub data for anomalyco/opencode on 2026-11-26*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Pi community digest for 2026-11-26 based on the GitHub data provided. Let me analyze the data and structure it according to the requested format.

Let me go through the data:

**Latest Releases (last 24h)**
- v1.6.1: Decision models in codemode - GitHub Copilot's `gpt-6-luna-decisions` and Radius decision models can be called from codemode `models.classify()`

**Latest Issues (updated in last 24h)** - Total: 50 items, showing top 30 by comment count
Key issues to highlight:
1. #10956 - cacheWarming "idle" stops silently (19 comments, open) - important for users relying on cache warming
2. #8834 - Opt-in package namespace for skills and prompt templates (18 comments, closed)
3. #12133 - Windows terminal mouse/Kitty input issues (11 comments, closed)
4. #10390 - Anthropic SSE parser CRLF issue (11 comments, closed)
5. #12464 - openai-responses GPT-6 medium effort issue (10 comments, closed)
6. #4399 - Fresh install on Windows fails (9 comments, closed)
7. #11071 - preserve structured provider failure metadata (8 comments, open)
8. #8829 - wrapUIPromptContext copying issue (7 comments, open)
9. #11127 - Allow configuring idle cache-warming horizon (6 comments, open)
10. #12318 - Anthropic /login fails on Claude Team/Enterprise (5 comments, closed)
11. #11519 - TUI working status disappears in Rex (5 comments, closed)
12. #7219 - Cloudflare Workers bundler warning (4 comments, closed)
13. #10852 - Pi Durable support for client-side tool execution (4 comments, open)


14. #12471 - Pi Durable: batching independent tool calls (4 comments, open)
15. #12414 - pi-durable returns done for truncated tool call (3 comments, open)
16. #12466 - openai ChatGPT sign-in lists unsupported models (3 comments, open)
17. #12480 - Pass session cwd to providers via StreamOptions (3 comments, closed)
18. #12462 - Bedrock Kimi K3.1 max reasoning effort (3 comments, closed)
19. #11655 - Symlinked auth.json paths bypass OAuth refresh lock (3 comments, closed)
20. #12219 - npm 12

: allowScripts for git-installed packages (3 comments, open)
21. #12395 - Add gpt-6-luna-decisions model (3 comments, closed)
22. #12420 - Function Call Error switching Claude to Gemini 4 (3 comments, open)
23. #12482 - Recheck output budget after mid-turn compaction (3 comments, open)
24. #12564 - Windows pi dies leaves Kitty keyboard reporting on (2 comments, closed)
25. #12560 - Built-in footer flashes during /new (2 comments, closed)
26. #12483 - Failed auto-compaction resumes work indefinitely (2 comments, open)
27. #12316 - claude-opus-5.5 missing promptCache and compat flags (2 comments, closed)
28. #12201 - Update Ant Ling models to Ling 3.x (2 comments, closed)
29. #12550 - Project-local skill exclusion writes both plain path and minus entry (2 comments, closed)

I should focus on the most impactful issues for the digest. The ones affecting multiple users or causing workflow interruptions stand out: cacheWarming failures, Windows-specific problems, SSE parsing bugs, and issues with provider metadata and tool execution are likely to resonate most with the community. The npm 12 compatibility issue and authentication-related problems also warrant attention given their broader impact on development workflows.

**Latest Pull Requests (updated in last 24h)** - Total: 25 items, showing top 20 by comment count
Notable PRs include session resume functionality via OSC 7577, conversation deletion for durability, reasoning replay fixes across different providers, cache handling improvements, telemetry tracking, local file support, and documentation updates covering terminal recovery, node version compatibility, and keybinding refinements.

**Latest Discussions (updated in last 24h)** - Total: 3 items
The discussions center on VS Code integration as a native agent harness, local decision-making capabilities, and privacy/security considerations alongside context management optimization.
</think>


# Pi Community Digest — 2026-11-26

## Today's Highlights

Pi v1.6.1 shipped with decision model integration in codemode, enabling `models.classify()` calls to GitHub Copilot's `gpt-6-luna-decisions` and Radius decision models. The community saw high activity around Windows terminal cleanup issues and cache warming behavior, with multiple PRs landing to improve graceful shutdown, reasoning effort handling, and prompt cache preservation across model switches.

## Releases

### v1.6.1 (latest)
- **Decision models in codemode**: `models.classify()` now supports GitHub Copilot's `gpt-6-luna-decisions` and Radius decision models, returning the provider's `responseId` in results. This enables more sophisticated tool-call gating workflows.

## Hot Issues

1. **[#10956](https://github.com/earendil-works/pi/issues/10956)** — `cacheWarming: "idle"` stops silently once an extension handles `turn_end` — **19 comments, OPEN**  
   Idle cache warming never fires when a custom or compaction message is in context, with all 507 `cache_warming_decision` events since September showing `continuationProbability: 1`. Users on long conversations lose cache refresh benefits entirely.

2. **[#8834](https://github.com/earendil-works/pi/issues/8834)** — Opt-in `pi.namespace` package field for skills and prompt templates — **18 comments, CLOSED**  
   Proposes a unified namespace surface for package resources, loading skills and templates under `<namespace>:<name>` for clearer composition and isolation.

3. **[#12133](https://github.com/earendil-works/pi/issues/12133)** — Windows terminal left with mouse/Kitty input reporting enabled after stop/exit — **11 comments, CLOSED**  
   Exiting Pi floods PowerShell with SGR mouse reports and garbage characters. Multiple follow-up issues confirm regression on 1.6.0; related fix PRs (#12553, #12564) address graceful shutdown paths.

4. **[#10390](https://github.com/earendil-works/pi/issues/10390)** — Anthropic SSE parser mishandles CRLF split across network chunks — **11 comments, CLOSED**  
   When `\r` and `\n` arrive separately, `iterateSseMessages` treats them as two line breaks, flushing an empty event that throws `Unexpected end of JSON input`. Fixed upstream.

5. **[#12464](https://github.com/earendil-works/pi/issues/12464)** — GPT-6 requests still send medium effort + `configuration_update` on direct OpenAI provider — **10 comments, CLOSED**  
   Follow-up to #12361/#12437: while `openai-codex` was fixed, the direct `openai` provider (Responses API) still sends incorrect effort levels and extra request fields that suppress reasoning on tool turns.

6. **[#4399](https://github.com/earendil-works/pi/issues/4399)** — Fresh install of pi on Windows fails to run the agent — **9 comments, CLOSED**  
   Both `npm` and `pnpm` global installs on Windows 11 result in silent exit with no error message, blocking new users. Long-standing issue now being addressed.

7. **[#11071](https://github.com/earendil-works/pi/issues/11071)** — Preserve structured provider failure metadata through `AssistantMessage` — **8 comments, OPEN**  
   Requests a typed contract for HTTP status, provider error codes, and retryability on terminal errors. Needed by clients like Cherry Studio Mobile for intelligent retry logic.

8. **[#8829](https://github.com/earendil-works/pi/issues/8829)** — `wrapUIPromptContext` copies by spread and loses UI prototype methods — **7 comments, OPEN**  
   The context wrapper uses spread which only copies own enumerable fields, breaking class instances with prototype methods. Pi's own TUI, RPC, and no-op UIs work because they're plain objects.

9. **[#11127](https://github.com/earendil-works/pi/issues/11127)** — Allow configuring the idle cache-warming horizon — **6 comments, OPEN**  
   Current 30-minute default doesn't align with 27/54-minute refresh cycles for standard prompt-cache TTLs. Users want configurable horizons (60–120 min) for longer-running sessions.

10. **[#12420](https://github.com/earendil-works/pi/issues/12420)** — Function Call Error when switching from Claude to Gemini 4 on google-vertex — **3 comments, OPEN**  
    Mid-conversation model switches trigger Vertex's `400` error: "Function call is missing a `thought_signature` in functionCall parts." A p0 bug affecting multi-provider workflows.

## Key PR Progress

1. **[#12557](https://github.com/earendil-works/pi/pull/12557)** — `feat(tui,coding-agent)`: report session resume command via OSC 7577 — **CLOSED**  
   Implements Program Resume Protocol (OSC 7577): terminals setting `OSC7577_TOKEN` can automatically restore Pi sessions after restart, eliminating manual recovery.

2. **[#12562](https://github.com/earendil-works/pi/pull/12562)** — `feat(durable)!`: delete conversations for good — **OPEN**  
   Adds `Harness.deleteConversations(ids, context)` which aborts all work (including background) and removes conversations and their owned subagents permanently.

3. **[#12505](https://github.com/earendil-works/pi/pull/12505)** — `fix(ai)`: replay GitHub Copilot `reasoning_opaque` in openai-completions — **OPEN**  
   Fixes #12418: Copilot's `claude-opus-5.5` streams `reasoning_text` deltas followed by a single `reasoning_opaque` delta; Pi was dropping the opaque value, breaking replay.

4. **[#12539](https://github.com/earendil-works/pi/pull/12539)** — `feat(ai)`: keep the prompt cache across effort and tool changes on GitHub Copilot — **CLOSED**  
   Closes #12316: Copilot now preserves prompt cache when changing thinking level or tool set, matching the behavior already supported for direct Anthropic and OpenAI models.

5. **[#12556](https://github.com/earendil-works/pi/pull/12556)** — `feat(coding-agent)`: honor `DO_NOT_TRACK` for install telemetry and attribution — **OPEN** (Draft)  
   Addresses public telemetry audit rating Pi C: adds `DO_NOT_TRACK=1` support for install-time telemetry and attribution, aligning with cross-tool privacy standards.

6. **[#12543](https://github.com/earendil-works/pi/pull/12543)** — support `AGENTS.local.md` in the coding agent — **CLOSED**  
   Extends #7681: Pi now checks `AGENTS.local.md` after `AGENTS.override.md` and before `AGENTS.md` in each directory, enabling per-project local overrides.

7. **[#12553](https://github.com/earendil-works/pi/pull/12553)** — `fix(coding-agent)`: shut down gracefully on Ctrl+Break on Windows — **CLOSED**  
   Pi was listening for SIGTERM and SIGHUP but not SIGBREAK; Ctrl+Break killed the process immediately, leaving the terminal in alternate screen mode with mouse reporting enabled.

8. **[#12551](https://github.com/earendil-works/pi/pull/12551)** — `fix(ai)`: send `models.dev` reasoning effort for Bedrock flat `reasoning_effort` models — **CLOSED**  
   Fixes #12462: Bedrock Kimi K3.1 profiles lacked `thinkingLevelMap`, causing Pi to offer generic effort levels and clamp `--thinking max` to `high`.

9. **[#12552](https://github.com/earendil-works/pi/pull/12552)** — `fix(ai,coding-agent)`: replace models removed from the upstream catalog — **CLOSED**  
   CI was failing because upstream dropped referenced models: Qwen Token Plan retired `qwen4-max-preview` (preview) while `qwen4-max` went GA.

10. **[#12538](https://github.com/earendil-works/pi/pull/12538)** — `fix(tui)`: keep `@` file completion responsive on slow searches — **CLOSED**  
    Recursive searches left stale suggestions visible; accepting a suggestion only replaced the old prefix. Now shows direct matches if search is slow and properly replaces the token.

## Hot Discussions

### Ideas

1. **[#12528](https://github.com/earendil-works/pi/discussions/12528)** — VS Code native Agent Harness integration — **2 👍**  
   Proposes integrating Pi as a native Agent Harness in VS Code alongside Claude Code, Codex, and GitHub Copilot, leveraging VS Code's unified agent harness selection interface.

### Show & Tell

2. **[#12559](https://github.com/earendil-works/pi/discussions/12559)** — `local-decider`: guard Pi's tool calls with a decision model on your own GPU — **1 👍**  
   Community extension that runs a small decision model in front of tool calls, letting users approve or block risky operations like `rm -rf` or force-pushes without leaving Pi's autonomous workflow.

3. **[#12530](https://github.com/earendil-works/pi/discussions/12530)** — Pre-send PII sanitizer + dynamic `models.json` context sizing for local 27B runs — **1 👍**  
   Documents two sharp edges running local models (Qwen3.5-9B, Qwen3.8-27B) on 16GB MacBooks: static 32K context windows can clamp `max_tokens` to 1, requiring dynamic adjustment based on available memory.

## Feature Request Trends

Analysis of open issues and discussions reveals these dominant request vectors:

| Theme | Signal | Description |
|-------|--------|-------------|
| **Cache warming control** | #10956, #11127 | Users want configurable idle cache-warming horizons and fixes for silent stops when extensions handle turn events |
| **Windows terminal hygiene** | #12133, #12564, #12553 | Recurring issues with mouse/keyboard reporting and alternate screen cleanup on crash or Ctrl+Break |
| **Provider metadata preservation** | #11071 | Typed contracts needed for provider error codes and retryability to support mobile/CLI clients |
| **Pi Durable extensibility** | #10852, #12471 | Client-side tool execution, human approval workflows, and batching guidance for independent tool calls |
| **Namespace/package isolation** | #8834 | Opt-in namespacing for skills and templates to enable cleaner package composition |
| **Model switching robustness** | #12420, #12464 | Mid-conversation provider switches need better handling of schema differences and effort parameters |
| **Telemetry opt-out** | #12556 | `DO_NOT_TRACK` support for install-time telemetry aligned with cross-platform privacy standards |

## Developer Pain Points

1. **Windows shutdown chaos**: Pi's death (kill -9, OOM, Ctrl+Break) leaves terminals in broken states with garbage in prompts. Multiple users hit this repeatedly; fix coverage is improving but edge cases remain.

2. **Prompt cache fragility**: Cache warming behaves inconsistently with extensions, effort changes, and tool set modifications, especially on GitHub Copilot. The fix in #12539 helps but cache behavior across providers remains complex.

3. **SSE chunk boundary bugs**: The Anthropic SSE parser's handling of CRLF across network chunks caused silent turn aborts. A reminder that streaming parsers need careful state management.

4. **Windows installation friction**: Fresh installs failing silently on Windows 11 with npm/pnpm blocks onboarding. The error visibility is poor.

5. **Static model catalog assumptions**: Hardcoded context windows break local model runs where memory-constrained hardware needs dynamic `max_tokens` calculation. The `models.json` schema needs flexibility.

6. **Auth symlink race conditions**: Concurrent Pi processes opening `auth.json` through different paths (symlinks) can race on OAuth refresh tokens, a security and reliability concern.

---

*Digest generated from [earendil-works/pi](https://github.com/earendil-works/pi) activity on 2026-11-26.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a Qwen Code community digest for 2026-11-26 based on the provided GitHub data. Let me analyze the data carefully:

**Release:**
- v1.0.0-preview.2: Added Qwen4-Max to subscription catalog, reset countdown for credits, /upgrade command, and subscription request changes.

**Issues (Top 30 by comment count):**
1. #18252 - Main CI failed: E2E Tests (73+ comments)
2. #18271 - Main CI failed: Qwen Code CI (13 comments)
3. #18342 - Main CI failed: E2E Tests - no test identified (9 comments)
4. #18258 - Main CI failed: Managed Agent gate (7 comments)
5. #15686 - Active Goal holds user input (7 comments) - P2 priority, bug
6. #13015 - Main CI failed: E2E Tests (6 comments) - CLOSED
7. #17781 - test(serve) coverage (6 comments) - CLOSED
8. #18350 - Main CI failed: Managed Agent gate (5 comments)
9. #16708 - FileChangedWatcher bug (5 comments) - P2 priority
10. #18264 - Main CI failed: Qwen Code CI (4 comments)
11. #18298 - Web Shell boolean setting bug (4 comments) - CLOSED
12. #18356 - Main CI failed: Managed Agent gate (3 comments)
13. #17772 - Archived conversations panel lacks features (3 comments)
14. #17142 - Web Shell workspace filter (3 comments)
15. #17489 - Windows project settings hot-reload bug (3 comments) - P2
16. #12928 - Remove hard-coded temperature (3 comments) - P2


17. #18295 - Main CI failed: Qwen Code CI (3 comments) - CLOSED
18. #18402 - deflake capture-tui test (2 comments) - P1
19. #18401 - /btw command queued issue (2 comments) - P2
20. #18096 - Git status badges visibility (2 comments) - CLOSED
21. #18287 - Main CI failed: SDK Java (2 comments)
22. #18379 - Security: qwen -p reads files outside workspace (2 comments) - P1
23. #18374 - Keyboard repeat cancels prompt (2 comments) - P2
24. #18341 - Main CI failed: Qwen Code CI (2 comments) - CLOSED
25. #18339 - Workspace-level extension installation (2 comments)
26. #18240 - Ecosystem listing: Niro iPhone companion (2 comments)
27. #18394 - E2E smoke fails on ARM64 (1 comment) - P2
28. #18352 - Main CI failed: Managed Agent gate (1 comment)
29. #18391 - /language ui --global bug (1 comment) - P2
30. #18386 - Support embedded external Runtime (1 comment)

I notice a pattern of recurring CI failures across multiple components, including E2E tests, Managed Agent gates, and SDK Java. Several issues are marked as closed, indicating ongoing problem resolution. Critical priorities include P1 and P2 issues, with security vulnerabilities and test reliability being key concerns. The community is actively addressing performance, UI, and functionality improvements across various system components. I notice several pull requests and project developments that expand Qwen Code's capabilities. Multiple PRs address internationalization, error handling, security, and performance enhancements. Key initiatives include adding Russian language support, improving JSON error handling, and introducing a new optional prompt history feature. The project continues to evolve with targeted improvements across different components like web shell, CLI, and core system functionality.
</think>


# Qwen Code Community Digest

**Date:** 2026-11-26
**Source:** [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

## 1. Today's Highlights

The Qwen Code team released **v1.0.0-preview.2**, introducing Qwen4-Max (1M context window with image/video support) to the subscription catalog, along with credit countdown and upgrade UX improvements. A **P1 security issue** (#18379) was disclosed regarding file access permissions in non-interactive mode, requiring immediate attention. CI infrastructure continues experiencing flakiness, with the capture-tui test (#18402) flagged for deflake work and ARM64 network instability (#18394) persisting despite previous mitigations.

---

## 2. Releases

### v1.0.0-preview.2
**Link:** Release artifacts on [GitHub Releases](https://github.com/QwenLM/qwen-code/releases)

- **Qwen4-Max added to subscription catalog**: 1M context window with image and video input capabilities
- **Credit reset UX**: Visual countdown when subscription credits run low
- **Upgrade command**: New `/upgrade` command opens subscription plans page
- **Subscription request headers**: Updated request payload structure for QwenCode u

---

## 3. Hot Issues

| # | Issue | Priority | Comments | Why It Matters |
|---|-------|----------|----------|----------------|
| **#18252** | [Main CI failed: E2E Tests – cron tools test](https://github.com/QwenLM/qwen-code/issues/18252) | Triage | 51 | Highest-traffic CI failure; 73+ sub-issues flagged; impacts release readiness |
| **#18379** | [`qwen -p` reads files outside workspace despite `--approval-mode=default`](https://github.com/QwenLM/qwen-code/issues/18379) | **P1** | 2 | **Security vulnerability**: Non-interactive mode bypasses trusted-folder boundaries |
| **#15686** | [Active Goal queues user input until turn completes](https://github.com/QwenLM/qwen-code/issues/15686) | P2 | 7 | UX regression: Enter-steered and pasted messages blocked during active tool execution |
| **#16708** | [FileChangedWatcher permanently misses files in new subdirectories](https://github.com/QwenLM/qwen-code/issues/16708) | P2 | 5 | Silent file loss bug in chokidar 4.0.3; affects hook/event workflows |
| **#17489** | [Windows: project settings never hot-reloaded after startup](https://github.com/QwenLM/qwen-code/issues/17489) | P2 | 3 | Windows-only regression; `qwen mcp add --scope project` ineffective post-startup |
| **#12928** | [Remove hard-coded temperature from internal model requests](https://github.com/QwenLM/qwen-code/issues/12928) | P2 | 3 | Provider API compatibility; current `temperature: 0.2` causes HTTP 400 errors |
| **#18402** | [deflake: capture-tui test dies on signal timing](https://github.com/QwenLM/qwen-code/issues/18402) | **P1** | 2 | Flaky test blocking reliable CI; automated deflake approved |
| **#18401** | [`/btw` queued until turn ends during tool execution](https://github.com/QwenLM/qwen-code/issues/18401) | P2 | 2 | Side-question command ignores tip guidance; queues unexpectedly |
| **#18374** | [Keyboard repeat cancels prompt immediately after submission](https://github.com/QwenLM/qwen-code/issues/18374) | P2 | 2 | Race condition: Send→Stop button transition + key repeat = double-fire |
| **#18394** | [E2E smoke fails on ARM64 from ERR_NETWORK_CHANGED storms](https://github.com/QwenLM/qwen-code/issues/18394) | P2 | 1 | 22 specs skip bootRetry; previous mitigations insufficient; blocks ARM64 CI |

---

## 4. Key PR Progress

| # | PR | Category | Status | Summary |
|---|-----|----------|--------|---------|
| **#18399** | [feat: make arrow-key prompt history optional](https://github.com/QwenLM/qwen-code/pull/18399) | web-shell | OPEN | New setting "Recall history with arrow keys" defaults ON; Ctrl+R opens history; Off enables caret/completion navigation |
| **#18112** | [feat: surface and control session scheduled tasks in-session](https://github.com/QwenLM/qwen-code/pull/18112) | web-shell | OPEN | In-conversation UI for cron jobs, loop wakeups, scheduled tasks; inline pause/run-now/delete/stop controls |
| **#18346** | [fix: point at the JSON error when tool arg arrives as broken text](https://github.com/QwenLM/qwen-code/pull/18346) | core | OPEN | Parse error now shows exact failure position with markers; improves model debugging |
| **#18370** | [fix(ci): fail closed on authority-surface PRs and ambient credential probes](https://github.com/QwenLM/qwen-code/pull/18370) | ci-cd | OPEN | Hardens automated triage/review logic; judges PR reachability not just phrase matching |
| **#18373** | [perf: shallow-checkout prepare job and fetch version tags without trees](https://github.com/QwenLM/qwen-code/pull/18373) | release | OPEN | Shallow clones for release prep; tag fetch without blob download; faster CI |
| **#18099** | [fix(managed-agent): admit session skills on external Workspace creation](https://github.com/QwenLM/qwen-code/pull/18099) | managed-agent | OPEN | External Workspace creation now accepts caller-supplied skill catalogs |
| **#18389** | [feat: support embedded external Runtime and Workspace execution](https://github.com/QwenLM/qwen-code/pull/18389) | managed-agent | **MERGED** | External Runtime client support for embedded hosts; Workspace recovery tied to materialization receipt |
| **#18390** | [fix: preserve inherited approval modes](https://github.com/QwenLM/qwen-code/pull/18390) | managed-agent | **MERGED** | Null approval-mode now produces empty policy; explicit values validated; inheritance preserved |
| **#18359** | [fix: keep compact Git status badges visible](https://github.com/QwenLM/qwen-code/pull/18359) | web-shell | **MERGED** | Restores missing severity badges; 3-tier responsive branch indicators; aligned status bar typography |
| **#18320** | [fix(i18n): correct Russian counts and settings descriptions](https://github.com/QwenLM/qwen-code/pull/18320) | i18n | OPEN | Proper Russian plural forms (one/few/many); singular capability names; distinct task list labels |

---

## 5. Feature Request Trends

### Web Shell & UI Enhancements
- **#17772**: Archived conversations panel needs search, workspace filter, sorting, archive timestamp
- **#17142**: Workspace picker and sidebar should filter by name
- **#18339**: Support workspace-level extension installation under `.qwen/extensions/`
- **#18399**: Arrow-key prompt history toggle (implemented in PR #18399)

### Core Functionality
- **#18386**: Embed external Runtime and Workspace execution in managed-agent
- **#15686**: Deliver user input at next safe sampling boundary during active turns
- **#12928**: Remove hard-coded temperature from internal classification requests

### Platform & Integration
- **#18240**: Ecosystem listing proposal for Niro iPhone companion app
- **#18298**: Boolean settings should not render as OFF when schema default is undefined (partially addressed)

---

## 6. Developer Pain Points

### CI Reliability (Recurring)
The most discussed theme this cycle is **CI flakiness**:
- E2E tests failing without identifiable test (#18342)
- capture-tui test timing out on signal handling (#18271, #18402)
- ARM64 runner pool suffering `ERR_NETWORK_CHANGED` abort storms (#18394)
- 20+ CI failure issues auto-filed in 48 hours

### Windows-Specific Issues
- Project settings hot-reload broken post-startup (#17489)
- Suggests platform-specific path watching divergence

### Permission & Security Boundary Confusion
- `qwen -p` security gap (#18379) where non-interactive mode reads outside trusted folders
- Approval mode inheritance inconsistent across managed-agent definitions (#18390)

### Interactive CLI UX Gaps
- `/btw` command queuing unexpectedly (#18401)
- Keyboard repeat race condition on prompt submission (#18374)
- Language switch command affecting wrong scope (#18391)

### File Watching Silent Failures
- Chokidar snapshot-then-watch gap causes permanent missed file notifications (#16708)

---

**End of Digest**

*Generated: 2026-11-26 | Data window: 24h*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*