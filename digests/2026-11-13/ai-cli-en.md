# AI CLI Tools Community Digest 2026-11-13

> Generated: 2026-11-13 02:51 UTC | Tools covered: 7

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

<think>The user wants me to generate a cross-tool comparison report based on all five AI CLI tool community digests I just created. Let me analyze the data from each digest and create a comprehensive comparison report.

Let me gather the key metrics from each tool:

1. **Claude Code (github.com/anthropics/claude-code)**
   - Issues: 50 total issues shown, top 30 by comment count
   - PRs: 1 PR in last 24h
   - Discussions: No discussion data provided
   - Releases: v2.1.323 - Code Mode, plugin.json validation

2. **OpenAI Codex (github.com/openai/codex)**
   - Issues: 50 total issues shown, top 30 by comment count
   - PRs: 20+ PRs in last 24h (mostly from copyberry[bot])
   - Discussions: 8 discussions (Show and tell, Q&A)
   - Releases: rust-v0.170.0-alpha.4, rust-v0.170.0-alpha.3

3. **Gemini CLI (github.com/google-gemini/gemini-cli)**
   - Issues: 50 total issues shown, top 30 by comment count
   - PRs: 30 PRs total, top 20 by comment count
   - Discussions: No discussion data provided
   - Releases: None in last 24h

4. **GitHub Copilot CLI (github.com/github/copilot-cli)**
   - Issues: 42 issues updated in last 24h
   - PRs: 0 PRs updated in last 24h
   - Discussions: No discussion data provided
   - Releases: v1.0.111-0 (regex shell permissions, host-allow-session-creation)

5. **OpenCode (github.com/anomalyco/opencode)**
   - Issues: 50 total issues shown, top 30 by comment count
   - PRs: 50 PRs total, top 20 by comment count
   - Discussions: No discussion data provided
   - Releases: None in last 24h

6. **Pi (github.com/earendil-works/pi)**
   - Issues: 50 total issues shown, top 30 by comment count
   - PRs: 50 PRs total, top 20 by comment count
   - Discussions: No discussion data provided
   - Releases: None in last 24h

7. **Qwen Code (github.com/QwenLM/qwen-code)**
   - Issues: 50 total issues shown, top 30 by comment count
   - PRs: (data incomplete)
   - Discussions: No discussion data provided
   - Releases: v0.27.3, sdk-typescript-v0.1.33, v0.27.2-nightly, v1.0.0-preview.1, desktop-v0.27.3

I notice the Qwen Code PR data is missing from the digest, so I'll need to carefully review the original source data to fill in the gaps. I'll prepare a structured comparison table that highlights the key metrics across all tools, ensuring I capture the full scope of community engagement and release activity.
</think>


# AI CLI Tools Ecosystem — Cross-Tool Comparison Report

**Report Date:** 2026-11-13
**Scope:** Five major AI CLI tools operating in the developer tooling ecosystem

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a phase of rapid iteration and architectural evolution, with all five tools converging on multi-agent orchestration, enhanced permission models, and cross-platform reliability as primary engineering focus areas. **Claude Code** is pioneering agentic tool execution with Code Mode, **OpenAI Codex** is strengthening its enterprise and SSH-remote workflows, **Gemini CLI** is improving session durability and AST-aware tooling, **GitHub Copilot CLI** is advancing enterprise policy controls and MCP ecosystem maturity, and **Qwen Code** is undergoing a major loop kernel refactor toward v1.0.0. The community discourse reflects a maturing ecosystem where basic chat functionality is table stakes; differentiation now centers on platform stability, extensibility, and intelligent automation.

---

## 2. Activity Comparison

| Tool | Repository | Issues (24h) | PRs (24h) | Discussions | Releases (24h) | Community Signal |
|------|------------|:------------:|:---------:|:-----------:|:--------------:|------------------|
| **Claude Code** | anthropics/claude-code | 50 issues shown | 1 PR | N/A | v2.1.323 (Code Mode, plugin validation) | 🔴 Regression concern (subagentStatusLine removed) |
| **OpenAI Codex** | openai/codex | 50 issues shown | 20+ PRs | 8 discussions | 2 alpha releases (rust-v0.170.0-alpha.3/4) | 🟡 Windows stability crisis |
| **Gemini CLI** | google-gemini/gemini-cli | 50 issues shown | 30 PRs | N/A | None | 🟢 Active stabilization cycle |
| **GitHub Copilot CLI** | github/copilot-cli | 42 issues | 0 PRs | N/A | v1.0.111-0 (shell regex rules, session creation flag) | 🟡 MCP ecosystem maturity push |
| **OpenCode** | anomalyco/opencode | 50 issues shown | 50 PRs | N/A | None | 🟢 Strong community contribution |
| **Pi** | earendil-works/pi | 50 issues shown | 50 PRs | N/A | None | 🟡 Critical v1.5.2 crash bug |
| **Qwen Code** | QwenLM/qwen-code | 50 issues shown | Not tracked | N/A | 5 releases (v1.0.0-preview.1, v0.27.3, etc.) | 🔴 CI pipeline instability |

**Note on N/A:** Claude Code, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, and Qwen Code either do not expose Discussions as a public community channel or did not surface discussion data in this reporting period. OpenAI Codex is the only tool with active Discussions usage (8 items, primarily "Show and tell" and "Q&A" formats), suggesting a more community-driven feature sharing culture.

---

## 3. Shared Feature Directions

The following capability requirements appear across multiple tool communities, indicating ecosystem-wide engineering priorities:

### Multi-Agent Orchestration
| Tool | Specific Need |
|------|---------------|
| Claude Code | `subagentStatusLine` for per-agent cost/context tracking (regression in v2.1.323) |
| Gemini CLI | Subagent autonomous invocation, trajectory visibility, and recovery on MAX_TURNS |
| Qwen Code | ACP session child management, background-view UX, multi-agent workflow support |
| OpenCode | Advisor tool for session model to consult a secondary model |

### Enhanced Permission & Security Models
| Tool | Specific Need |
|------|---------------|
| Claude Code | Prompt-injection surface on UserPromptSubmit hook (agent-injected messages); `DISABLE_TELEMETRY` side effects |
| Gemini CLI | `.env` file injection vulnerability for `GIT_*` variables; sandboxing approaches |
| GitHub Copilot CLI | Regex support for shell permission rules; MCP OAuth security (Google trailing-slash mismatch) |
| OpenCode | Amend-guard inert proof extension; fail-closed on undecodable shell paths |

### Platform Reliability & Regression Control
| Tool | Specific Need |
|------|---------------|
| OpenAI Codex | Windows UI lag from Computer Use; sandbox logon session leaks; lsass.exe growth |
| Qwen Code | Managed Agent gate CI failures (342 comments on single issue); E2E test flakiness |
| Pi | Direct terminal writes corrupting TUI display; signal-terminated exec reporting as success |
| Claude Code | `subagentStatusLine` removed without migration path; auto-compaction at 12% instead of 80% |

### Session & Context Durability
| Tool | Specific Need |
|------|---------------|
| Gemini CLI | Workspace directory cleanup on failed resume; session history preservation with masked outputs |
| OpenCode | Collapsible compaction summaries; session deletion API; project deletion |
| GitHub Copilot CLI | Event storage exhaustion in long-running sessions; worktree accumulation |
| Qwen Code | Shared resident external workspace across sessions; turn limit transparency |

### MCP Ecosystem Maturity
| Tool | Specific Need |
|------|---------------|
| GitHub Copilot CLI | OAuth refresh token gaps (Google MCP); dual content/structuredContent exposure; delegated child authentication |
| Gemini CLI | Tool scoping for >128 tools (400 errors); AST-aware precise tool discovery |
| OpenAI Codex | MCP server icons; workspace-scoped MCP contexts |
| OpenCode | Auth check visibility for extension-registered providers; namespace-scoped tool_search |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Qwen Code | OpenCode | Pi |
|-----------|------------|--------------|------------|-------------------|-----------|----------|-----|
| **Primary Focus** | Agentic tool execution (Code Mode) | Enterprise reliability, SSH-remote workflows | Session durability, AST-aware tooling | Enterprise policy, MCP ecosystem | Unified agent loop architecture | Extensibility, multimodal support | Terminal integrity, minimal footprint |
| **Target User** | Advanced developers, AI-first workflows | Enterprise teams, remote development | Power users, local deployment | Enterprise IT, security-conscious orgs | Chinese market, subscription users | Extensibility enthusiasts | Minimalist terminal users |
| **Technical Approach** | JavaScript-based agentic tool execution | Rust SDK with native integrations | TypeScript, AST-aware discovery | TypeScript, enterprise policy engine | TypeScript, subscription catalog | TypeScript, plugin architecture | TypeScript, TUI-first |
| **Key Differentiator** | Model writes its own tool invocation code | SPIFFE workload identity, SSH-remote sessions | Agent trajectory sharing, skill invocation | Policy-driven plugin activation, regex permissions | v1.0 loop kernel refactor | Hybrid Code Mode, multimodal audio/video | Direct terminal write protection, XDG compliance |
| **Platform Depth** | Cross-platform with cloud sessions | Strong Windows/SSH-remote emphasis | Browser agent, Wayland support | Windows Entra, enterprise MDM | Desktop app, Web Shell | Desktop app, browser profile persistence | Terminal-native, minimal dependencies |
| **Release Cadence** | Rapid (v2.1.323 today) | Moderate (alpha releases) | Moderate (stabilization) | Moderate (v1.0.111-0) | Fast (5 releases today) | Fast (50 PRs merged) | Fast (50 PRs merged) |

---

## 5. Community Momentum & Maturity

### High Velocity Communities

**Qwen Code** shows the highest raw output volume (50 issues, 5 releases in one day), reflecting aggressive iteration toward v1.0.0 and a large contributor base. However, the 342-comment CI failure thread indicates technical debt accumulation and infrastructure strain rather than healthy growth.

**OpenCode and Pi** both demonstrate strong community contribution cultures with 50 PRs each in the reporting period, suggesting healthy open-source momentum. OpenCode's focus on extensibility (plugin architecture, multimodal support) attracts external contributors, while Pi's TUI-centric design appeals to minimalist developers.

### Stable but Challenged Communities

**OpenAI Codex** has the most mature enterprise story (SPIFFE, Windows reliability, SSH-remote) but is battling a Windows stability crisis that has produced multiple 20+ comment threads on UI lag and resource leaks. The 8 active discussions indicate a healthy community engagement layer beyond issue tracking.

**GitHub Copilot CLI** shows moderate activity with no PRs merged today, suggesting a team focused on stabilization and enterprise features rather than rapid feature expansion. The MCP ecosystem maturity push (OAuth fixes, plugin activation bugs) indicates a "crossing the chasm" phase from early adopters to enterprise.

**Claude Code** has low PR activity (1 in 24h) but high issue engagement, with the `subagentStatusLine` regression producing immediate community backlash. The Code Mode launch today is a significant bet on agentic execution that will shape ecosystem direction.

### Low-Engagement Community

**Gemini CLI** has the second-highest PR output (30 PRs) but no releases in 24h, suggesting active internal development without public release cadence. The security vulnerability in `.env` injection (#29003) and multiple P1 agent hanging issues indicate a tool still addressing fundamental reliability concerns.

---

## 6. Trend Signals

The following signals from today's community data provide forward-looking intelligence for developers and decision-makers:

### 🔴 High-Confidence Signals (Multiple Independent Sources)

**1. Windows Platform Reliability Is a Critical Weakness**

Every tool with significant Windows usage reports platform-specific bugs: OpenAI Codex (UI lag, sandbox leaks, Chrome access), GitHub Copilot CLI (Entra token cache, browser gates), Claude Code (cloud session proxy), Qwen Code (Web Shell daemon stability). The ecosystem is collectively under-invested in Windows testing infrastructure.

**2. Multi-Agent Session Management Is the Next Frontier**

Claude Code's `subagentStatusLine`, Gemini CLI's subagent recovery, Qwen Code's ACP child management, and OpenCode's Advisor tool all point to a paradigm shift from single-agent chat to orchestrated multi-agent workflows. The technical challenges—resource cleanup, context isolation, turn accounting—are unsolved across the board.

**3. CI/CD Pipeline Reliability Is a Systemic Risk**

Qwen Code's 342-comment Managed Agent gate failure and OpenAI Codex's multiple E2E test failures indicate that CI infrastructure is not keeping pace with development velocity. Teams are shipping features faster than they can stabilize test infrastructure.

### 🟡 Medium-Confidence Signals (Emerging Patterns)

**4. MCP Ecosystem Is Maturing Faster Than Security Controls**

GitHub Copilot CLI's OAuth refresh token gaps, OAuth trailing-slash mismatches, and delegated child authentication failures suggest MCP is being adopted faster than security best practices are being codified. Organizations should expect friction in enterprise MCP deployments.

**5. Permission Models Are Converging on "Fail-Closed"**

Claude Code's prompt-injection concerns, Gemini CLI's `.env` injection vulnerability, GitHub Copilot CLI's regex shell permission rules, and OpenCode's fail-closed shell path validation all indicate a security-first permission model is becoming table stakes.

**6. Documentation Velocity Lags Feature Delivery**

Claude Code's Code Mode docs returning 404 on launch day, OpenCode's Chinese documentation gaps (now being addressed), and GitHub Copilot CLI's missing `providers.json` schema all indicate documentation is consistently under-resourced relative to feature development.

### 🟢 Forward-Looking Indicators

**7. AST-Aware Tooling Gaining Traction**

Gemini CLI's epic tracking for AST-aware file reads and search, combined with interest in precise method bounds and reduced token noise, signals a maturation beyond simple text-based tooling toward semantic awareness.

**8. Subscription and BYOK Models Driving Provider Flexibility**

Qwen Code's subscription catalog auto-follow sign-in, Claude Code's `DISABLE_TELEMETRY` behavior, and GitHub Copilot CLI's `providers.json` schema request all point to a future where users expect seamless provider switching without manual configuration.

**9. TUI Integrity as a Differentiator**

Pi's systematic effort to prevent direct terminal writes from corrupting the display, combined with OpenCode's overlay rendering fixes, indicates that TUI robustness is becoming a quality signal. Users who live in terminals are increasingly intolerant of display corruption.

---

## Summary Table: Key Takeaways

| Tool | Today's Narrative | Risk Level | Opportunity |
|------|------------------|------------|-------------|
| **Claude Code** | Code Mode launched; regression eroding trust | 🟡 Medium | Agentic execution leadership |
| **OpenAI Codex** | Windows stability crisis; enterprise features strong | 🔴 High | SSH-remote, SPIFFE identity |
| **Gemini CLI** | Security + hanging bugs; active stabilization | 🟡 Medium | AST-aware discovery |
| **GitHub Copilot CLI** | MCP ecosystem maturity; enterprise push | 🟢 Low | Policy-driven enterprise |
| **OpenCode** | Strong community; multimodal + extensibility | 🟢 Low | Plugin architecture, Hybrid Code Mode |
| **Pi** | TUI integrity focus; v1.5.2 crash bug | 🟡 Medium | Minimalist terminal experience |
| **Qwen Code** | CI instability; aggressive v1.0 push | 🔴 High | Subscription model, loop kernel |

---

*Report compiled from community digest data sourced from GitHub for each tool's primary repository. Metrics reflect the 24-hour period ending 2026-11-13.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community data from GitHub and create a highlights report. Let me extract key insights from the data provided.

Looking at the data:

**Pull Requests (Skills):**
Most of the PRs are open with 0 comments. The ones that have any activity or notable features are:

1. #1742 - fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
2. #1298 - fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
3. #1245 - Add notion-spec-to-implementation and quantitative-resume-auditor skills
4. #1980 - webapp-testing: avoid shell=True in with_server.py (security fix)
5. #1792 - fix(docx): report LibreOffice timeout as an error and verify the output
6. #1771 - feat(skills): add proofcore-contract-auditor for smart contract notarization
7. #1703 - Add md2video-audio skill
8. #525 - Add pyxel skill for retro game development
9. #2019 - fix(xlsx): resolve worksheet-scoped defined names and aliases
10. #1730 - fix(claude-api): replace dead URLs
11. #1681 - fix(skill-creator): support direct execution of package_skill.py
12. #514 - Add document-typography skill
13. #2108 - docs: clarify document skills snapshot status
14. #1997 - fix(skill-creator): parse YAML frontmatter scalars correctly
15. #1977 - algorithmic-art: wrapAround() now wraps
16. #1976 - webapp-testing: report textarea and select correctly
17. #1975 - pptx: reject --cols below 1 in thumbnail.py


18. #1950 - docs(claude-api): update Python pause_turn runner guidance
19. #1615 - Add scnet-hpc skill

I notice the Issues section reveals significant community engagement. The most discussed topics include security concerns about community skills under the anthropic/ namespace, which has attracted 46 comments. This indicates strong community interest in understanding skill distribution and potential risks. The issues highlight ongoing discussions about skill development, governance, and practical implementation challenges.

The next most pressing issues involve:
- Organizational skill sharing limitations (17 comments)
- Evaluation script trigger problems (13 comments)
- Memory compacting proposal (10 comments)

These topics suggest developers are actively seeking ways to improve skill management, evaluation, and information processing within their systems.
</think>


# Claude Code Skills Community Highlights Report

*Data as of 2026-11-13 — Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The following Skills (PRs) have attracted the most attention through discussion, complexity, or security implications:

| # | Skill / PR | Functionality | Highlights | Status |
|---|-----------|---------------|------------|--------|
| **#1742** | [fix(mcp-builder): mcp≥2 streamable_http_client import + custom headers](https://github.com/anthropics/skills/pull/1742) | Updates MCP builder Skill to support renamed `streamable_http_client` module and new header configuration API in MCP v2 | Critical compatibility fix for the MCP protocol evolution; addresses breaking changes in upstream library | **OPEN** |
| **#1298** | [fix(skill-creator): isolate trigger evals + Windows/runtime failures](https://github.com/anthropics/skills/pull/1298) | Hardens the Skill creation evaluation framework against false trigger misses, Windows `select()` crashes, and cross-worker subprocess interference | Addresses systemic reliability issues in the skill-authoring toolchain; touches CI/CD of the entire Skills ecosystem | **OPEN** |
| **#1245** | [Add notion-spec-to-implementation + quantitative-resume-auditor](https://github.com/anthropics/skills/pull/1245) | Transforms product/tech specs into actionable Notion task lists with acceptance criteria; adds a resume audit Skill for quantitative candidate assessment | Two-in-one PR covering product management and HR/recruiting use cases; notable for expanding Skills into non-code workflows | **OPEN** |
| **#1980** | [webapp-testing: avoid shell=True in with_server.py](https://github.com/anthropics/skills/pull/1980) | Removes `subprocess.Popen(..., shell=True)` from the webapp-testing Skill, closing a CWE-78 command-injection vulnerability | Security-first patch; directly mitigates risk of unsanitized agent/USER input reaching system shell | **OPEN** |
| **#1792** | [fix(docx): report LibreOffice timeout as error + verify output](https://github.com/anthropics/skills/pull/1792) | Makes docx Skill report LibreOffice timeout failures as Errors instead of silent success; validates that revision marks are gone from output DOCX | Improves reliability of document acceptance workflows; defensive programming against false positives | **OPEN** |
| **#525** | [Add pyxel skill for retro game development](https://github.com/anthropics/skills/pull/525) | Enables creating, debugging, and verifying retro games via Pyxel (Python game engine); covers headless testing, frame inspection, and state validation | Long-running open PR (since March 2026) targeting a niche but enthusiastic developer audience; includes separate Pyxel behavior references | **OPEN** |
| **#2019** | [fix(xlsx): worksheet-scoped defined names + external_links_at_risk](https://github.com/anthropics/skills/pull/2019) | Fixes false negatives in spreadsheet external-link detection by handling worksheet-scoped defined names and alias chains | Addresses a subtle but real data-integrity risk in financial/compliance spreadsheet workflows | **OPEN** |

---

## 2. Community Demand Trends

Issues reveal concentrated demand in five directions:

1. **Trust & Security Governance** — Issue #492 (46 comments) raises a critical flag: community Skills distributed under the `anthropic/` namespace may deceive users into granting elevated permissions to unofficial code. The community is calling for namespace differentiation or signing/verification mechanisms.

2. **Organizational Skill Sharing** — Issue #228 (17 comments) requests native org-wide skill sharing within Claude.ai, eliminating the current manual download/upload workflow. This is the highest-upvoted feature request (👍 8).

3. **Evaluation Reliability** — Two Issues (#556, #1352, 19 combined comments) document that `run_eval.py` produces near-zero trigger rates, especially with parallel workers. This undermines the entire skill-authoring feedback loop and is blocking quality contributions.

4. **Memory & Token Efficiency** — Issue #1329 proposes a `compact-memory` Skill for compressing agent state notation; Issue #1487 reports that the `claude-api` Skill injects ~156k tokens in a single call, exhausting context windows. Both point to demand for leaner, more efficient Skills.

5. **Cross-Platform / Robustness** — Multiple PRs (#1298, #1792, #1975) target Windows compatibility, timeout handling, and input validation, reflecting a community that is deploying Skills in heterogeneous environments and expects production-grade reliability.

---

## 3. High-Potential Pending Skills

These active PRs have substantive implementations and clear utility; they are strong candidates for near-term merge:

| # | Skill | Why It May Land Soon |
|---|-------|----------------------|
| **#525** | [pyxel — retro game development](https://github.com/anthropics/skills/pull/525) | Well-scoped, includes comprehensive behavior references; active maintenance (updated 2026-11-01) |
| **#1703** | [md2video-audio](https://github.com/anthropics/skills/pull/1703) | Zero-cost, unique use case (Markdown → MP4 with voiceover); differentiates Claude Code from pure code tools |
| **#1771** | [proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771) | Targets Web3/Solidity/Rust audience; cryptographic audit-proof anchoring on TON blockchain is a novel vertical |
| **#1615** | [scnet-hpc](https://github.com/anthropics/skills/pull/1615) | Operational tooling for HPC clusters via SSH/Slurm; fills a gap for scientific computing users |
| **#514** | [document-typography](https://github.com/anthropics/skills/pull/514) | Addresses a universal pain point (orphan/widow control, numbering alignment) affecting every document-generation workflow |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for production-grade reliability and trust infrastructure** — hardening Skills against security vulnerabilities (shell injection, namespace impersonation), cross-platform failures, and evaluation blind spots — rather than for entirely new Skill categories.

This signals a maturing ecosystem: contributors are shifting from *breadth* (new Skill types) to *depth* (security, robustness, governance), which is a healthy indicator that Claude Code Skills are moving from experimental to enterprise-ready.

---

<think>The user wants me to generate a Claude Code community digest for 2026-11-13 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Looking at the data:
1. **Latest Releases**: v2.1.323 - introduces Code Mode and plugin.json changes
2. **Latest Issues**: 50 total, showing top 30 by comment count
3. **Latest Pull Requests**: 1 item

Let me structure this into the requested format:

1. **Today's Highlights** - Summarize the key updates
2. **Releases** - v2.1.323 details
3. **Hot Issues** - Pick 10 noteworthy issues with explanations
4. **Key PR Progress** - Only 1 PR, so I'll cover that
5. **Hot Discussions** - No discussion data was provided, so I'll omit this section
6. **Feature Request Trends** - Analyze the issues for patterns
7. **Developer Pain Points** - Summarize recurring issues

Let me go through the issues to identify the most important ones:

1. **#104529** - Redesign experiment styling issues (17 comments, 10 👍) - High engagement
2. **#105770** - Android sign-in fails on rooted devices (13 comments, 10 👍)
3. **#94675** - UserPromptSubmit fires for agent messages (9 comments) - Security concern
4. **#108726** - DISABLE_TELEMETRY hides Fable 5.2 (9 comments, 23 👍) - Most upvotes
5. **#97926** - GitHub integration Cowork issues (6 comments)
6. **#108585** - Re-login kills background subagents (5 comments)
7. **#105677** - Feedback disabled by policy (4 comments)
8. **#107591** - Model asserts parity issues (3 comments)
9. **#109000** - Desktop mod MCP calls in auto mode (3 comments)


10. **#106049** - Cloud sessions can't attach images (2 comments, 7 👍)

I'll highlight the most impactful issues based on comment engagement and potential user impact. The top issues reveal critical functionality problems across different platforms and integration challenges. The most significant concerns involve styling inconsistencies, sign-in problems, security risks, and feature limitations that could affect user experience and workflow.

The emerging pattern suggests multiple platform-specific and cross-platform technical challenges requiring targeted resolution. Developers are experiencing friction points in authentication, feature accessibility, and integration scenarios that need systematic troubleshooting.
</think>


# Claude Code Community Digest

## November 13, 2026

---

### Today's Highlights

**Claude Code v2.1.323** launches **Code Mode**, an experimental feature where Claude writes JavaScript to invoke its own tools, marking a significant shift toward agentic tool execution. The release also introduces `plugin.json` validation for `engines["claude-code"]` fields. Meanwhile, the community grapples with a regression in v2.1.323 that silently removed the `subagentStatusLine` setting, rendering per-agent context and cost tracking invisible—drawing immediate pushback from multi-agent workflow users.

---

### Releases

**v2.1.323** (Latest)

- **Code Mode (Experimental)**: Claude can now write JavaScript to call its own tools, opt-in via settings with organization-level control available. Documentation link is currently returning 404 errors—see [Issue #109442](https://github.com/anthropics/claude-code/issues/109442).
- **Plugin Validation**: `plugin.json` now enforces `engines["claude-code"]` declarations; plugins outside their stated Claude Code version range will be flagged.

---

### Hot Issues

1. **#108726** — `[BUG] DISABLE_TELEMETRY hides Fable 5.2 from the /model picker` (23 👍)
   Setting `DISABLE_TELEMETRY=1` prevents feature flags from downloading or loading, silently breaking features that depend on them. Users report Fable 5.2 disappears from the model picker entirely. This impacts security-conscious developers and those in restricted environments.
   [View Issue](https://github.com/anthropics/claude-code/issues/108726)

2. **#104529** — Redesign experiment "fizzy_lake" styling broken (17 comments, 10 👍)
   Bold text is barely visible in Latin scripts and invisible in Cyrillic; inline code appears greyed out. Formatting inconsistencies appear between fresh sign-in and page reload. Workarounds no longer function after the October 24 update.
   [View Issue](https://github.com/anthropics/claude-code/issues/104529)

3. **#105770** — Android app sign-in fails on rooted/unlocked devices (13 comments, 10 👍)
   Google Sign-In succeeds but `/auth/verify_google_mobile` returns HTTP 400, blocking rooted device users. This affects developers who need root access for legitimate debugging and device customization.
   [View Issue](https://github.com/anthropics/claude-code/issues/105770)

4. **#94675** — UserPromptSubmit fires for agent-injected messages (9 comments)
   A prompt-injection surface: messages from subagents, cross-session payloads, and system injections trigger `UserPromptSubmit` hooks without `prompt_source` or `is_meta` metadata, making it impossible for hooks to distinguish user input from automated content.
   [View Issue](https://github.com/anthropics/claude-code/issues/94675)

5. **#97926** — GitHub integration unavailable in Cowork sessions (6 comments, 4 👍)
   Users cannot access `list_repos` or `add_repo` tools in Cowork sessions on certain accounts despite the GitHub App working correctly elsewhere, blocking collaborative development workflows.
   [View Issue](https://github.com/anthropics/claude-code/issues/97926)

6. **#108585** — Mandatory re-login kills background subagents (5 comments)
   Mid-session re-authentication terminates all background subagents and discards in-flight work (tests, rebases). No automatic resumption mechanism exists, forcing manual agent recovery.
   [View Issue](https://github.com/anthropics/claude-code/issues/108585)

7. **#109446** — v2.1.323 regression: subagentStatusLine removed (1 comment, 0 👍 but active)
   **Regression alert**: v2.1.323 silently removed the `subagentStatusLine` setting with no replacement, breaking multi-agent workflows that relied on per-agent context, cost, model, and effort visibility.
   [View Issue](https://github.com/anthropics/claude-code/issues/109446)

8. **#109000** — Desktop auto mode blocks mod's own MCP tool calls (3 comments, 2 👍)
   In Desktop auto mode, Claude refuses to run tools when called by a mod's own code (e.g., `ccd_sidebar`, `move_sessions`), limiting mod capabilities.
   [View Issue](https://github.com/anthropics/claude-code/issues/109000)

9. **#106049** — Cloud sessions cannot attach images to PRs/issues (2 comments, 7 👍)
   The GitHub proxy in Anthropic-hosted cloud environments rejects all GraphQL requests, preventing image uploads to pull requests and issues.
   [View Issue](https://github.com/anthropics/claude-code/issues/106049)

10. **#109439** — Auto-compaction fires at 12% instead of 80% threshold (0 comments)
    Background job sessions trigger auto-compaction far below the configured 80% context usage threshold, repeatedly dropping to ~9% and disrupting long-running tasks.
    [View Issue](https://github.com/anthropics/claude-code/issues/109439)

---

### Key PR Progress

1. **#81672** — `fix(hookify): make package import independent of the install directory name` (Open)
   Fixes #69665, #81448. Resolves an issue where hook entry points rely on the plugin directory being named exactly `hookify`, breaking marketplace installs that use different directory names.
   [View PR](https://github.com/anthropics/claude-code/pull/81672)

---

### Feature Request Trends

**Platform & Accessibility**

- Custom MCP server icons in the Claude UI ([#108788](https://github.com/anthropics/claude-code/issues/108788))
- Passkey (WebAuthn) and password manager support in the built-in browser pane ([#109441](https://github.com/anthropics/claude-code/issues/109441))
- Configurable spellcheck/autocorrect with language selection ([#108885](https://github.com/anthropics/claude-code/issues/108885))

**Agent & Workflow Enhancements**

- Let model see changes between screenshots in computer use mode ([#109444](https://github.com/anthropics/claude-code/issues/109444))
- Configurable idle session sweep duration or disable option ([#109443](https://github.com/anthropics/claude-code/issues/109443))
- Option to disable automatic list conversion in prompt input ([#108824](https://github.com/anthropics/claude-code/issues/108824))

**Model & Context**

- Allow `[bio]` safeguard override for legitimate biology-adjacent work ([#108742](https://github.com/anthropics/claude-code/issues/108742), [#109437](https://github.com/anthropics/claude-code/issues/109437))
- Fix cyber safeguard false positives blocking legitimate security tasks ([#109438](https://github.com/anthropics/claude-code/issues/109438))

---

### Developer Pain Points

**Regression & Stability Concerns**
The v2.1.323 release introduced a breaking change by removing `subagentStatusLine` without warning or migration path, directly impacting developers managing multi-agent workflows. This follows a pattern of silent breaking changes that erode trust.

**Platform Fragmentation**
Issues span Windows, macOS, Linux, Android, and web platforms with inconsistent behavior—particularly around sign-in (rooted devices, cloud sessions), GitHub integration (Cowork sessions), and UI rendering (spelling dictionaries, redesign experiments).

**Telemetry & Feature Flags**
The `DISABLE_TELEMETRY` flag has unintended side effects, blocking legitimate use cases where developers need feature flag functionality without telemetry collection.

**Documentation Gaps**
Code Mode documentation returns 404 errors on launch day, and the admission/retirement boundary for credential changes lacks clarity, forcing developers to discover behaviors through experimentation.

**Context Management**
Auto-compaction triggering well below configured thresholds disrupts long-running background jobs, while the `[bio]` safeguard's false positives prevent legitimate work in security, biology, and software development contexts.

---

*Digest generated from GitHub data • [Report issues](https://github.com/anthropics/claude-code/issues) • [View all releases](https://github.com/anthropics/claude-code/releases)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze this GitHub data for the OpenAI Codex repository and create a structured digest for 2026-11-13.

Key observations:
1. **Releases**: Two alpha releases - rust-v0.170.0-alpha.4 and rust-v0.170.0-alpha.3
2. **Issues**: 50 total issues, top issues include workspace scoping, Windows computer use bugs, memory leaks, rate limiting issues
3. **PRs**: 20+ PRs, mostly from copyberry[bot] - these are internal tooling improvements
4. **Discussions**: 8 items including show and tell projects, Q&A

Let me structure this properly.

**Today's Highlights**:
- Windows platform has significant issues with Computer Use causing system-wide UI lag
- Multiple memory/resource leak issues (sandbox logon sessions, per-thread tool servers)
- New Rust alpha releases for the codebase

**Hot Issues** (picking 10 noteworthy ones):
1. #25319 - Workspace-scoped chats (60 comments, 134 👍) - Major enhancement request
2. #57101 - Windows Computer Use UI issues (24 comments)
3. #56941 - Windows UI lag after Computer Use (24 comments)
4. #47511 - Missing git commit/push button (20 comments)
5. #55141 - macOS memory pressure issue (15 comments)
6. #59546 - Automation restrictions blocking monitoring (15 comments)
7. #35940 - Sandbox logon session leak (14 comments)
8. #59931 - SSH auto-connect issue (14 comments)
9. #60530 - Rate limits depleting faster (7 comments)
10. #59300 - Chrome access fails on Windows CLI (6 comments)

**Key PRs** (10 important ones):
1. #61228 - Missing semicolon fix
2. #61227 - Win32 error codes in MXC


3. #61224 - AppX event IDs
4. #61222 - Compressed trace payloads
5. #61221 - Signal forwarding in npm wrapper
6. #61219 - TUI status details for read-only
7. #61218 - Hide attached threads
8. #61216 - Thread input preservation
9. #61215 - Dictation usage tracking
10. #61207 - SPIFFE JWT-SVID support

The PR activity shows internal infrastructure work focused on error handling, process management, and observability improvements across Windows and npm wrapper components.

**Discussions**:
8 total, all "Show and tell" and "Q&A" - I'll select up to 10 and organize them by type. The discussions include workspace sharing tools like Commonly and agent handoff solutions such as Estafeta, alongside CSV conversion utilities, image annotation workflows, and platform-specific tools like TokenWatch for monitoring AI usage and Mons for mobile access. There's also a thread asking about thread input verification.

The core feature requests center on several key areas: keeping workspace context separate in VS Code interactions, improving session persistence across devices, strengthening sandbox security to prevent credential leakage, adding granular control options like git commit buttons and model selection, and addressing Windows stability problems particularly around Computer Use and memory consumption. Cross-platform debugging issues and rate limit visibility also appear frequently in user feedback.
</think>


# OpenAI Codex Community Digest

**Date:** 2026-11-13  
**Repository:** [openai/codex](https://github.com/openai/codex)

---

## 1. Today's Highlights

The Codex community is actively grappling with **Windows platform stability**, as multiple reports highlight system-wide UI lag and resource leaks following Computer Use operations. A major feature request to scope VS Code chats to the current workspace has garnered 134 👍, signaling strong demand for better multi-project isolation. On the infrastructure side, the Rust toolchain has been upgraded to 1.99.1, and new SPIFFE JWT-SVID authentication support enables workload identity authentication for Unix environments.

---

## 2. Releases

| Version | Summary |
|---------|---------|
| **rust-v0.170.0-alpha.4** | Latest alpha release in the v0.170 series. No changelog details provided. |
| **rust-v0.170.0-alpha.3** | Preceding alpha release in the v0.170 series. |

*Note: These are Rust SDK/preview releases; the changelog is minimal.*

---

## 3. Hot Issues

| # | Issue | Key Points | Community Reaction |
|---|-------|------------|-------------------|
| **#25319** | **[Workspace-scoped VS Code chats](https://github.com/openai/codex/issues/25319)** | Request to scope Codex VS Code extension chats to the current workspace/project, preventing cross-workspace context bleed. | **60 comments, 134 👍** — The most active enhancement request; users emphasize developer workflow isolation. |
| **#57101** | **[Windows Computer Use: UI artifacts persist](https://github.com/openai/codex/issues/57101)** | Capture access borders and yellow display borders remain after screenshot-producing turns complete. | **24 comments** — Frustrating visual regressions impacting daily workflows. |
| **#56941** | **[System-wide UI lag after Computer Use](https://github.com/openai/codex/issues/56941)** | Windows 11 experiences severe UI sluggishness after Codex Computer Use; only killing `codex-computer-use.exe` resolves it. | **24 comments** — Critical performance regression; users report unworkable delays. |
| **#47511** | **[Missing git commit/push button](https://github.com/openai/codex/issues/47511)** | Regression in v26.917.51856: the visible commit/push button is missing from the desktop app. | **20 comments, 49 👍** — Direct impact on core developer workflows; several confirmations of regression. |
| **#55141** | **[macOS memory pressure from tool servers](https://github.com/openai/codex/issues/55141)** | Per-thread tool servers accumulate after restart, causing rising memory pressure on Apple M4 MacBook Air. | **15 comments** — Memory leak affecting long-running sessions; impacts hardware-constrained users. |
| **#59546** | **[Automation restrictions block external monitoring](https://github.com/openai/codex/issues/59546)** | Built-in automation restrictions conflict with scheduled tasks documentation, blocking legitimate monitoring workflows. | **15 comments, 19 👍** — Feature incompatibility between components; workaround requests. |
| **#35940** | **[Sandbox leaks Windows logon sessions](https://github.com/openai/codex/issues/35940)** | `codex sandbox` on Windows creates a new interactive logon session per invocation, causing lsass.exe to grow until reboot. | **14 comments** — Security and resource leak with no current mitigation. |
| **#59931** | **[SSH host not auto-reconnecting](https://github.com/openai/codex/issues/59931)** | Windows Desktop fails to auto-connect an enabled SSH host after application restart. | **14 comments, 8 👍** — Breaks remote development workflows; reproducible on multiple devices. |
| **#60530** | **[Rate limits depleting faster](https://github.com/openai/codex/issues/60530)** | GPT-6.1 Sol usage limits consuming 5-hour quotas dramatically faster than expected. | **7 comments** — Financial impact; users report unexplained quota acceleration. |
| **#59300** | **[Chrome access fails on Windows CLI](https://github.com/openai/codex/issues/59300)** | Previously working Chrome browser access now returns "browser access host unavailable" error on Windows CLI, while Desktop still works. | **6 comments** — CLI/Desktop parity issue; blocks headless automation workflows. |

---

## 4. Key PR Progress

| PR | Title | Impact |
|----|-------|--------|
| **[#61207](https://github.com/openai/codex/pull/61207)** | **SPIFFE JWT-SVID support for workload identity** | Enables Unix workloads to acquire assertions directly from the SPIFFE Workload API for OpenAI token exchange. Configure via `OPENAI_IDENTITY_TOKEN_SOURCE=spiffe`. |
| **[#61205](https://github.com/openai/codex/pull/61205)** | **Upgrade Rust toolchain to 1.99.1** | Major toolchain bump; includes Clippy lint adaptations for `try_update` atomics and `as_chunks` APIs. |
| **[#61222](https://github.com/openai/codex/pull/61222)** | **Store rollout trace payloads in compressed shards** | Replaces JSON payload files with Zstandard-compressed shards; adds `PayloadReader` for cache and validation during replay. |
| **[#61221](https://github.com/openai/codex/pull/61221)** | **Forward repeated signals through npm wrapper** | Fixes signal forwarding after first signal; removes `child.killed` guard that blocked graceful shutdown on second interrupt. |
| **[#61219](https://github.com/openai/codex/pull/61219)** | **Hide TUI status details for read-only history** | Improves read-only thread viewing by hiding status line and context usage for saved/unavailable conversations. |
| **[#61218](https://github.com/openai/codex/pull/61218)** | **Hide attached threads from agents overview** | Prevents side chats with `attached_to_thread_id` from appearing as root sessions in the overview. |
| **[#61216](https://github.com/openai/codex/pull/61216)** | **Preserve thread input across TUI session resumes** | Keeps drafts, queued follow-ups, and interrupted steer retries with their original thread across session resumes. |
| **[#61215](https://github.com/openai/codex/pull/61215)** | **Track dictation usage from accepted user inputs** | Captures `codex_app_used_dictation` metadata per input; records attribution when user-origin input is accepted. |
| **[#61227](https://github.com/openai/codex/pull/61227)** | **Include Win32 error codes in MXC process launch failures** | Extracts numeric error codes from `CreateProcessW` failures for improved Windows diagnostic output. |
| **[#61224](https://github.com/openai/codex/pull/61224)** | **Include AppX event IDs in Windows runtime registration errors** | Augments managed runtime package registration failures with `appx_event_ids` from Windows Event Log. |

---

## 5. Hot Discussions

### Show and Tell

| Discussion | Summary |
|------------|---------|
| **[#61174](https://github.com/openai/codex/discussions/61174)** — **Commonly** | Open-source workspace (Apache-2.0) enabling team coding with multiple Codex instances sharing a pod. Each teammate's Codex runs locally and joins the shared conversation and task board. |
| **[#55082](https://github.com/openai/codex/discussions/55082)** — **Estafeta** | Tool for handing coding projects between Codex and other terminal agents. `session-end` saves a handoff; `session-start` reads project state and checks changes before continuing. |
| **[#61058](https://github.com/openai/codex/discussions/61058)** — **1ToolRing** | Remote MCP server providing live Google, Maps, Amazon, and exchange rate data to Codex through a single integration. |
| **[#61049](https://github.com/openai/codex/discussions/61049)** — **TokenWatch** | iOS/Android dashboard app showing Codex and Claude usage and reset times. Free through Nov 16. |
| **[#61030](https://github.com/openai/codex/discussions/61030)** — **Mons beta** | Native iPhone/iPad terminal for continuing Codex CLI sessions across devices (Mac/Linux host). |
| **[#59147](https://github.com/openai/codex/discussions/59147)** — **SnipToss** | Tool for marking up images and videos Codex generates, with notes handed back as files for precise editing feedback. |

### Q&A

| Discussion | Summary |
|------------|---------|
| **[#61177](https://github.com/openai/codex/discussions/61177)** — **Verify thread input integrity** | Question on whether `thread/start` can verify which instruction bytes were loaded and the complete startup input order before the first message is sent. |

---

## 6. Feature Request Trends

Based on issue and discussion analysis, the community is requesting:

1. **Workspace-scoped context isolation** — Keep VS Code extension chats confined to the current project, preventing unintended cross-workspace context leakage (#25319, #60228).

2. **Enhanced git/version control integration** — Restore the missing commit/push button and add per-message model/reasoning effort pickers for queued messages (#47511, #50383).

3. **Cross-device session continuity** — Continue Codex terminal sessions on mobile devices without interruption (#61030, #57676).

4. **Agent handoff and orchestration** — Native support for transferring work between Codex instances and external agents (#55082, #57676).

5. **Rich external data integration** — MCP server access to live web data (search rankings, maps, pricing) without manual research (#61058).

---

## 7. Developer Pain Points

| Category | Description | Frequency |
|----------|-------------|-----------|
| **Windows stability regressions** | Computer Use causes persistent UI lag, sandbox logon session leaks, and Chrome access failures on CLI. Affects daily productivity for Windows developers. | 🔴 High |
| **Missing UI elements** | Git commit/push button regression; TUI/CLI signal handling gaps; missing `/plan` action on Windows. | 🔴 High |
| **Resource leaks** | Memory pressure from accumulating per-thread tool servers (macOS); lsass.exe growth from sandbox invocations (Windows). | 🔴 High |
| **SSH/remote workflow breakage** | Auto-reconnect failures after restart; session attachment to wrong user directories on shared hosts. | 🟡 Medium |
| **Rate limit visibility** | Users lack clear understanding of quota consumption; usage appears faster than expected without explanation. | 🟡 Medium |
| **Automation restriction conflicts** | Built-in restrictions block legitimate external monitoring and scheduling tasks, contradicting documented capabilities. | 🟡 Medium |
| **Platform parity gaps** | CLI and Desktop behave differently (Chrome access, browser gates); Linux emoji scrolling blocked. | 🟡 Medium |

---

*End of digest. All issue and PR links reference the [openai/codex](https://github.com/openai/codex) repository.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the provided GitHub data and create a structured digest for the Gemini CLI community.

The data is from the google-gemini/gemini-cli repository, dated 2026-11-13.

Key observations:
1. No releases in the last 24h
2. 50 issues total, showing top 30 by comment count
3. 30 PRs total, showing top 20 by comment count

Let me categorize and analyze:

**Issues Analysis:**
- Priority P1 issues: #22323, #21409, #21983, #29003, #22186, #21763 - mainly agent-related bugs
- Priority P2 issues: Multiple agent and platform issues
- Security issue: #29003 - env file injection vulnerability
- Several enhancement requests around subagents, AST-aware tools, skills usage
- Browser agent issues on Wayland
- Hanging issues with generalist agent

**PRs Analysis:**
- Several core fixes merged recently
- Windows path stat fix
- Session history preservation
- Tool call IDs exposed to hooks
- Image model config added
- Various telemetry and buffer fixes
- ACP mode fixes

Let me structure this properly:

1. Today's Highlights
2. Releases (none)
3. Hot Issues (10)
4. Key PR Progress (10)
5. Hot Discussions (none provided)
6. Feature Request Trends
7. Developer Pain Points
</think>


# Gemini CLI Community Digest — 2026-11-13

## Today's Highlights

The community continues to focus heavily on agent reliability, with multiple P1 bugs related to subagent behavior, hanging issues, and session management. A notable security vulnerability (#29003) was identified in how project `.env` files inject `GIT_*` variables into internal git operations. On the PR side, significant fixes landed around Windows compatibility, session history preservation, and improved model token limit reporting.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

| # | Issue | Priority | Key Points | Community Reaction |
|---|-------|----------|------------|-------------------|
| **#22323** | [Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 | Subagent (`codebase_investigator`) incorrectly reports success status and "GOAL" termination even when hitting max turn limit without completing analysis | 13 comments, 2 👍 |
| **#19873** | [Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873) | P2 | Proposal to leverage Gemini 3's native bash affinity through OS-level sandboxing without external dependencies | 9 comments, 1 👍 |
| **#21409** | [Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 | Gemini CLI hangs forever when deferring to generalist agent; simple operations like folder creation stall for hours | 8 comments, 8 👍 |
| **#22745** | [AST-aware file reads, search, and mapping impact assessment](https://github.com/google-gemini/gemini-cli/issues/22745) | P2 | Epic tracking investigation into AST-aware tools for precise method bounds, reduced token noise, and better codebase navigation | 7 comments, 1 👍 |
| **#21968** | [Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968) | P2 | Model fails to autonomously leverage custom skills (e.g., "gradle", "git") despite descriptions; requires explicit instruction | 7 comments, 0 👍 |
| **#22267** | [Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267) | P2 | Browser Agent completely ignores configuration overrides (e.g., `maxTurns`) from global or project-level `settings.json` | 5 comments, 0 👍 |
| **#21983** | [Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983) | P1 | Browser subagent fails when running on Wayland display server | 4 comments, 1 👍 |
| **#29003** | [Security: .env file injection of GIT_* variables](https://github.com/google-gemini/gemini-cli/issues/29003) | P1 | Project `.env` files can inject `GIT_EXEC_PATH`, `GIT_SSH_COMMAND`, `GIT_PROXY_COMMAND` into internal git operations; current sanitization only strips `GIT_CONFIG_*` | 3 comments, 0 👍 |
| **#24246** | [400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246) | P2 | Gemini CLI encounters 400 API error when more than ~400 tools available; agent needs smarter tool scoping | 3 comments, 0 👍 |
| **#22186** | [get-shit-done output hook causes crash](https://github.com/google-gemini/gemini-cli/issues/22186) | P1 | Repeated crashes occur when get-shit-done output finishes (during user summary printing) | 3 comments, 0 👍 |

---

## Key PR Progress

| # | PR | Area | Summary |
|---|-----|------|---------|
| **#30259** | [Restore workspace directories only after resumeChat succeeds](https://github.com/google-gemini/gemini-cli/pull/30259) | core | Fixes issue where failed session resume leaves workspace directories active in current context |
| **#30253** | [Report accurate output token limits in models list](https://github.com/google-gemini/gemini-cli/pull/30253) | core | Corrects `gemini models list` to report 65,536 output tokens for Gemini 2.5/3 models instead of hardcoded 8,192 |
| **#30258** | [Scale undici bodyTimeout when request timeout exceeds 300s](https://github.com/google-gemini/gemini-cli/pull/30258) | core | Allows proper timeout configuration for long-running requests exceeding the 5-minute default |
| **#30159** | [Add gemini-2.5-flash-image model config](https://github.com/google-gemini/gemini-cli/pull/30159) | extensions | Registers built-in image generation model, fixing #28445 |
| **#30157** | [Only replace true cycles with [Circular] in safeJsonStringify](https://github.com/google-gemini/gemini-cli/pull/30157) | enterprise | Fixes telemetry OpenTelemetry SDK issues with shared arrays across data points |
| **#30156** | [Buffer chat compression events until OTel SDK is ready](https://github.com/google-gemini/gemini-cli/pull/30156) | enterprise | Prevents missing telemetry events when chat compression fires before SDK initialization |
| **#30154** | [Flush buffered stdio before entering ACP mode](https://github.com/google-gemini/gemini-cli/pull/30154) | cli | Ensures hook warnings reach stderr in ACP mode; prevents loss on SIGKILL/crash |
| **#30043** | [Expose tool call IDs to hooks](https://github.com/google-gemini/gemini-cli/pull/30043) | agent | Adds `tool_call_id` to BeforeTool/AfterTool hook inputs; enables event pairing |
| **#30033** | [Tolerate dev 0 from Windows path stat in secure file reads](https://github.com/google-gemini/gemini-cli/pull/30033) | core | Fixes Windows file read failures with Node 22.12-22.16 due to volume serial mismatch |
| **#30019** | [Preserve session history during tool output masking](https://github.com/google-gemini/gemini-cli/pull/30019) | core | Preserves user's first prompt when resuming sessions with masked tool outputs |

---

## Hot Discussions

*No discussion data was provided in the dataset.*

---

## Feature Request Trends

Analyzing the issue tracker reveals several dominant feature directions:

1. **Subagent Intelligence** — Multiple issues (#21968, #18283, #18282, #22598) request better autonomous subagent invocation, discovery via `settings.json`, and trajectory visibility/sharing

2. **AST-Aware Tooling** — Epic #22745 with supporting issues (#22746, #19561) proposes surgical code discovery through grep→AST→semantic search hierarchy to reduce token bloat

3. **Zero-Dependency Sandboxing** — #19873 suggests leveraging model's native bash affinity with OS-level sandboxing rather than external dependencies

4. **Persistent Task Tracking** — #18836 requests replacing in-context WriteToDo with file-based CRUD for multi-session persistence

5. **Skill Activation in Non-Interactive Mode** — PR #29546 addresses `/skill-name` support outside interactive UI

6. **Browser Agent Resilience** — Multiple issues (#22232, #22267, #21983) request automatic session takeover, lock recovery, and Wayland support

---

## Developer Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Agent Hanging** | #21409 (generalist), #21983 (browser on Wayland) | Workflows stall; users wait hours before cancelling |
| **Subagent Behavior** | #22323 (false success), #21968 (under-utilization), #21763 (missing context) | Reduced reliability and debugging difficulty |
| **Settings Ignored** | #22267 (Browser Agent ignores `maxTurns`) | Configuration unpredictability |
| **Tool Scoping** | #24246 (400 errors with >128 tools) | Blocks large tool ecosystem usage |
| **Security Vulnerability** | #29003 (env injection) | Potential for malicious `.env` exploitation |
| **Session Persistence** | #30019, #30259 (history/workspace issues) | Lost context on resume or cancellation |
| **Destructive Operations** | #22672 (git reset/--force usage) | Risk of unintended data loss |
| **Windows Compatibility** | #30033 (path stat issues) | File operations fail on Windows with Node 22.x |

---

*Generated 2026-11-13 | Data source: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest for 2026-11-13 based on the provided GitHub data. Let me analyze the data and create a structured digest with the requested sections.

Let me break down the data:

**Releases:**
- v1.0.111-0: Added regex support for shell permission rules, added --host-allow-session-creation flag
- v1.0.110: Experimental feature for masked password dialogs, improved Entra sign-in, screen reader improvements

**Issues (updated in last 24h):** 42 total items
- #5236: Windows Entra broker token cache issue (7 comments)
- #5185: Bazel cache memory usage (6 comments) - RECOVERED
- #4606: Google Workspace MCP OAuth trailing slash issue (5 comments)
- #4515: MCP content vs structuredContent exposure (4 comments) - CLOSED
- #4837: Policy-driven enabledPlugins installs but doesn't activate (3 comments)
- Several recovered issues about bazel cache memory
- #5151: Regression with Sol models rejected before first prompt (2 comments)
- #5287: Request for providers.json schema (2 comments)
- #4922: Feature request for attaching chats to Projects (2 comments)
- #5435: Out-of-memory crash during long session (1 comment)
- #5363: ACP session/new reports wrong model (1 comment)
- #5243: Subagents lack tools after exit_plan_mode approval (1 comment) - CLOSED
- #4467: Long-running sessions exhaust event storage (1 comment)
- #3996: Cannot copy output to clipboard in VSCode Server (1 comment)
- Many new triage issues from today (11/13)

**Pull Requests:** 0 items in last 24h

Let me now structure the digest:

1. **Today's Highlights** - Summarize the key updates
2. **Releases** - Cover the two releases


3. **Hot Issues** - Select 10 noteworthy issues with strong community engagement and explain their significance
4. **Key PR Progress** - Since there are no recent PRs, I'll note this section accordingly
5. **Hot Discussions** - Omit as no discussion data was provided
6. **Feature Request Trends** - Analyze patterns across issues to identify emerging needs
7. **Developer Pain Points** - Highlight recurring frustrations and high-impact problems

Let me write this digest now.
</think>


# GitHub Copilot CLI Community Digest

**Date:** 2026-11-13
**Repository:** github.com/github/copilot-cli
**Data Period:** Last 24 hours

---

## Today's Highlights

The Copilot CLI team shipped **v1.0.111-0** with significant enterprise security enhancements, including regex support for shell permission rules and a new flag to allow remote session creation on CLI hosts. Yesterday's **v1.0.110** introduced an experimental masked dialog for handling git/ssh/sudo password prompts. Meanwhile, the community surfaced multiple critical issues around Windows authentication, MCP OAuth flows, and model context limitations that require attention.

---

## Releases

### v1.0.111-0
**Released:** 2026-11-13

**Added:**
- Regular expression support for enterprise-managed Shell, Bash, and PowerShell permission rules — enables more granular control over shell execution policies
- `--host-allow-session-creation` flag — allows remote clients to create sessions on CLI hosts for a single launch without persisting settings

**Improved:**
- Organization support links now displayed in policy configuration interfaces

### v1.0.110
**Released:** 2026-11-12

- **Experimental feature:** Agent commands now answer git, ssh, and sudo password prompts from a masked dialog (enable with `/experimental on`)
- Reduced unnecessary error popups during Microsoft Entra sign-in when an organization account is available
- Screen reader accessibility improvements for session identification and announcements

---

## Hot Issues

### 1. [Windows: Entra broker token cache stays 0 bytes after MCP sign-in](https://github.com/github/copilot-cli/issues/5236)
**Status:** OPEN | **Comments:** 7 | ** 👍:** 1

After signing in via Microsoft Entra broker for an HTTP MCP server, the token cache file remains empty, causing every new process to re-prompt for account selection. This is a significant UX friction point for Windows enterprise users relying on MCP integrations. The issue reproduces consistently with `~/.copilot/entra-broker-accounts/<id>.bin` remaining empty.

### 2. [Google Workspace MCP OAuth fails due to trailing-slash issuer mismatch](https://github.com/github/copilot-cli/issues/4606)
**Status:** OPEN | **Comments:** 5 | ** 👍:** 2

Native HTTP MCP authentication fails for Google's official Workspace endpoints because the protected-resource metadata advertises `https://accounts.google.com/` (with trailing slash) while the client performs issuer validation without normalization. This blocks adoption for Google Workspace users.

### 3. [Policy-driven enabledPlugins installs but never activates](https://github.com/github/copilot-cli/issues/4837)
**Status:** OPEN | **Comments:** 3 | ** 👍:** 2

When an organization configures `enabledPlugins` via policy, the plugin installs to disk but is recorded as `"enabled": false` in `config.json`, preventing activation. Reproduces via device/MDM and repo-level settings. Enterprise deployment is effectively broken for plugin management.

### 4. [Regression: Sol models rejected before first prompt when tool definitions exceed ~260K tokens](https://github.com/github/copilot-cli/issues/5151)
**Status:** OPEN | **Comments:** 2 | ** 👍:** 0

Since 2026-10-14, `gpt-5.6-sol` and `gpt-6.1-sol` at the default context tier fail with `compaction_static_context_blocked` before accepting any user input. Users with rich MCP tool definitions are locked out of these models entirely.

### 5. [Request: Publish JSON schema for providers.json](https://github.com/github/copilot-cli/issues/5287)
**Status:** OPEN | **Comments:** 2 | ** 👍:** 0

Users configuring Bring Your Own Key (BYOK) providers lack documentation on available configuration parameters. Publishing a JSON schema would enable IDE autocomplete, validation, and discoverability for provider options.

### 6. [Feature request: Attach existing chat or session to a Project](https://github.com/github/copilot-cli/issues/4922)
**Status:** OPEN | **Comments:** 2 | ** 👍:** 0

General chats and Project sessions are treated separately with no way to associate them after creation. Users must start over, losing context. This fragments workflow continuity for users who discover mid-conversation they need project-scoped features.

### 7. [Out-of-memory crash during long interactive session in 1.0.109](https://github.com/github/copilot-cli/issues/5435)
**Status:** OPEN | **Comments:** 1 | ** 👍:** 0

A new issue from today reports recursive OOM crashes during extended interactive sessions. After crash recovery, the previous background agent is inaccessible from the resumed session, compounding data loss.

### 8. [Long-running agent sessions exhaust event storage while CLI remains active](https://github.com/github/copilot-cli/issues/4467)
**Status:** OPEN | **Comments:** 1 | ** 👍:** 1

Sessions spawning many subagents eventually exhaust the remote event store, causing sessions to appear inactive or cancelled despite the CLI process remaining alive. This creates a silent failure mode where work may be lost.

### 9. [Cannot copy Copilot CLI output to clipboard in VSCode Server](https://github.com/github/copilot-cli/issues/3996)
**Status:** OPEN | **Comments:** 1 | ** 👍:** 0

In browser-based VSCode Server environments, "copy to clipboard" silently fails with no fallback. This is particularly impactful for users developing in cloud-based or remote workspace setups.

### 10. [ACP mode never attaches to IDE despite valid conditions](https://github.com/github/copilot-cli/issues/5447)
**Status:** OPEN | **Comments:** 0 | ** 👍:** 0

`copilot --acp` skips `~/.copilot/ide` discovery entirely, so ACP sessions lack IDE MCP server connectivity even when launched from the editor's integrated terminal. The interactive CLI attaches within ~1s under identical conditions.

---

## Key PR Progress

No pull requests were updated in the last 24 hours. The team appears focused on issue triage and release stabilization following v1.0.110/111.

---

## Feature Request Trends

Analysis of open issues and recent activity reveals these dominant feature directions:

| Trend | Evidence |
|-------|----------|
| **MCP ecosystem maturity** | OAuth authentication failures (#4606), dual content/structuredContent exposure (#4515), tool cache growth (#5446), delegated child authentication failures (#5437) |
| **Enterprise configuration & policy** | Regex permission rules (in release), enabledPlugins activation bug (#4837), providers.json schema (#5287) |
| **Session & memory management** | OOM crashes (#5435), event storage exhaustion (#4467), worktree accumulation (#5443), MCP tool cache bloat (#5446) |
| **Model flexibility & selection** | Sol model regressions (#5151), ACP session model mismatch (#5363), global model persistence bug (#5445) |
| **IDE integration parity** | ACP IDE attachment (#5447), VSCode Server clipboard (#3996), Vim mode tool calls (#5442) |
| **Agent orchestration** | Child session reply routing (#5444), subagent tool inheritance after exit_plan_mode (#5243) |

---

## Developer Pain Points

### Authentication & Session Management
- **Persistent friction:** Entra token cache failures force repeated sign-ins (#5236); OAuth prompts persist after "Always Allow" on macOS (#5434)
- **ACP gaps:** ACP mode bypasses IDE discovery (#5447), reports incorrect session models (#5363)

### MCP Server Reliability
- Google Workspace OAuth blocked by trailing-slash mismatch (#4606)
- HTTP-OAuth MCP servers fail for delegated child tasks (#5437)
- Keychain prompts create duplicate entries (#5434)

### Resource Consumption
- Long sessions trigger OOM crashes (#5435) or exhaust event storage (#4467)
- Temporary workspaces bloat MCP tool cache (#5446)
- Git worktrees accumulate across inactive sessions (#5443)

### Model Context Limits
- Sol models reject prompts when tool definitions exceed ~260K tokens (#5151)
- Global model selection doesn't persist (#5445)

### Plugin & Extension System
- Policy-driven plugins install but don't activate (#4837)
- Agent Plugins 1.0 `.instructions.md` and `applyTo` frontmatter silently ignored (#5440)

### Error Visibility
- Structured 403 errors masked as generic auth failures (#5436)
- Background bash commands reported stopped without matching stop call (#5448)

---

**End of Digest**

*Data sourced from github.com/github/copilot-cli at 2026-11-13*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a structured English digest (OpenCode community digest) for 2026-11-13 based on the provided GitHub data. Let me analyze the data carefully and create a comprehensive digest.

Let me organize the key information:

**Releases**: None in the last 24h

**Issues (updated in last 24h)**: 50 total, showing top 30 by comment count

**PRs (updated in last 24h)**: 50 total, showing top 20 by comment count

Let me identify the most important items:

**Top Issues by comment count:**
1. #785 [CLOSED] Is there a way to disable streaming mode? - 37 comments, 40 👍 - This is a major feature request about disabling streaming mode
2. #49742 [OPEN] Message timestamp option is missing - 13 comments, 10 👍 - Feature regression from v1 to v2
3. #53756 [OPEN] Bedrock Nova format issue - 10 comments
4. #26915 [CLOSED] RTL language support - 10 comments, 5 👍 - Feature implemented
5. #48099 [CLOSED] MSI installer request - 7 comments
6. #63506 [OPEN] Desktop prompt footer stale model bug - 6 comments
7. #61504 [OPEN] Timeouts for permission requests - 6 comments, 1 👍
8. #63632 [OPEN] Turns are aborted (v2 report) - 5 comments - This is a serious bug
9. #52420 [OPEN] Tool names collision bug - 5 comments
10. #48596 [OPEN] Make Compaction Summary Collapsible - 5 comments, 4 👍
11. #63212 [OPEN] GitLab Duo workflow tools bug - 4 comments
12. #63001 [CLOSED] Desktop window crashes - 4 comments


13. #60940 [CLOSED] ECONNRESET on long agent turns - 4 comments
14. #54670 [CLOSED] GitHub OAuth login - 4 comments
15. #63568 [CLOSED] Rate limit bug - 4 comments
16. #59806 [OPEN] MCP console 403 error - 4 comments
17. #62948 [CLOSED] Git polling CPU saturation - 4 comments
18. #35647 [CLOSED] Tool availability per session - 4 comments
19. #35408 [CLOSED] V2 model-context plugin hook - 4 comments
20. #63312 [CLOSED] How to delete old projects - 3 comments

I notice several critical infrastructure and functionality issues emerging. The community is dealing with complex integration problems, including streaming limitations, provider-specific format challenges, and cross-platform compatibility concerns. Critical areas include authentication mechanisms, network reliability, and system performance optimization.

Key focus areas include GitLab integration, desktop application stability, API connection resilience, and advanced session management features. The discussions reflect a maturing platform addressing nuanced developer experience and system reliability challenges.

The OpenCode ecosystem demonstrates active development across multiple fronts: API design, desktop functionality, developer tooling, and cross-platform compatibility. Emerging trends suggest emphasis on flexible authentication, robust connection handling, and extensible plugin architectures.

Significant contributions include multi-language documentation, multimodal model support, and sophisticated session management. The community is progressively refining core infrastructure while expanding integration capabilities across different development environments.
</think>


# OpenCode Community Digest

**Date:** November 13, 2026
**Source:** github.com/anomalyco/opencode

---

## 1. Today's Highlights

The OpenCode community sees significant activity around v2 stability with multiple reports of turn aborts and desktop crashes being investigated. The team merged a major new feature enabling audio/video attachments for multimodal models, while contributors are actively improving documentation coverage for international users. A new "Advisor" tool feature is proposed to allow session models to consult a secondary model during work.

**No new releases** were published in the last 24 hours.

---

## 2. Releases

**No releases in the last 24 hours.**

---

## 3. Hot Issues

### Issue #785 — Streaming Mode Disable Request (CLOSED)
**Link:** https://github.com/anomalyco/opencode/issues/785 | 37 comments, 40 👍

Users are requesting a way to disable streaming mode entirely. This is critical for users behind certain proxy providers (e.g., Credal OpenAI Proxy) that don't support streaming. The issue remains a top community concern with 40 upvotes, suggesting widespread need for a non-streaming operational mode.

### Issue #49742 — Message Timestamp Option Missing in CLI v2.0.8
**Link:** https://github.com/anomalyco/opencode/issues/49742 | 13 comments, 10 👍

A regression from v1.18.31: the ability to toggle message timestamps via Ctrl+P is absent in v2.0.8. This usability gap is driving users back to older versions and represents a significant UX regression that should be addressed.

### Issue #53756 — Bedrock Application Inference Profile ARN Nova Format Bug
**Link:** https://github.com/anomalyco/opencode/issues/53756 | 10 comments

When using Bedrock application inference profile ARNs with Claude models, OpenCode generates effort variants in Amazon Nova format, causing API 400 errors on `reasoningConfig`. This breaks Claude model compatibility with inference profiles—a significant integration bug.

### Issue #63506 — Desktop Prompt Footer Shows Stale Model
**Link:** https://github.com/anomalyco/opencode/issues/63506 | 6 comments

When slash commands set a different model via frontmatter, the model switches correctly (confirmed by API and metadata), but the TUI prompt footer continues displaying the old model name. This visual inconsistency could confuse users about which model is actively running.

### Issue #61504 — Timeouts for Permission Requests
**Link:** https://github.com/anomalyco/opencode/issues/61504 | 6 comments, 1 👍

Sessions can hang indefinitely when a rule resolves to `ask` with no user present to approve. Feature request adds timeout functionality for permission dialogs to prevent abandoned sessions blocking resources.

### Issue #63632 — Turns Aborted Without Request (v2 Critical)
**Link:** https://github.com/anomalyco/opencode/issues/63506 | 5 comments

A serious v2 regression where turns abort silently with no requestor identified. The store and stream hold different truths, and critical settlement fields were lost between versions. This impacts reliability in production use.

### Issue #52420 — Tool Names Collision After Normalization
**Link:** https://github.com/anomalyco/opencode/issues/52420 | 5 comments

Tools with names differing only in normalized characters (e.g., special characters → underscore) silently collide because registrations are keyed by `effectiveName`. This can cause unpredictable tool selection behavior.

### Issue #63212 — GitLab Duo Workflow Tools Not Working in v2
**Link:** https://github.com/anomalyco/opencode/issues/63212 | 4 comments

In v2, GitLab `duo-workflow-*` models work for plain text but fail silently when attempting tool calls. The wiring for `toolExecutor`, `approvalHandler`, and `sessionConfig` appears missing compared to v1 implementation.

### Issue #59806 — MCP Console 403 Forbidden Error
**Link:** https://github.com/anomalyco/opencode/issues/59806 | 4 comments

The `opencode_console` MCP server returns 403 errors when accessing the workspace, causing silent reconnection loops every ~6 seconds for minutes without surfacing actionable error messages to users.

### Issue #48596 — Make Compaction Summary Collapsible
**Link:** https://github.com/anomalyco/opencode/issues/48596 | 5 comments, 4 👍

After automatic session compaction, the summary takes up significant screen space. Users request it be collapsed by default to reduce visual clutter, with an option to expand when needed.

---

## 4. Key PR Progress

### PR #54496 — Attach Audio and Video Files for Multimodal Models (CLOSED)
**Link:** https://github.com/anomalyco/opencode/pull/54496

Major feature delivery: the `read` tool now supports audio and video attachments for multimodal models. This closes issues #54491, #54049, and #10531, significantly expanding media handling capabilities.

### PR #63637 — Advisor Tool for Session Model Consultation
**Link:** https://github.com/anomalyco/opencode/pull/63637 | Open

Implements an "advisor" tool similar to Claude Code, allowing the session model to consult a second user-selected model for guidance during work. Closes issue #63631.

### PR #63002 — Persistent Browser Profile, Extensions & Agent Tool Fixes
**Link:** https://github.com/anomalyco/opencode/pull/63002 | Open

Transforms the desktop in-app browser from a signed-out, in-memory pane (failing 1 in 5 tool calls) to a persistent, encrypted profile with imported sign-ins, Chrome extensions support, and working in-pane links.

### PR #62743 — Connect Model Providers Over Unix Socket
**Link:** https://github.com/anomalyco/opencode/pull/62743 | Open

Adds transport settings for Unix socket connections to model providers. Eliminates the need for `socat` bridges when connecting to local servers like llama.cpp, Ollama, or vLLM.

### PR #62576 — Ignore Corrupt Cached Project ID
**Link:** https://github.com/anomalyco/opencode/pull/62576 | Open

Fixes a bug where NUL or control bytes in `.git/opencode` project ID files were incorrectly adopted as valid project IDs. Closes #53991.

### PR #63645 — Refresh Provider OAuth Tokens Only Near Expiry
**Link:** https://github.com/anomalyco/opencode/pull/63645 | Open

Optimizes OAuth token refresh to only trigger when tokens are within 5 minutes of expiry, reducing unnecessary refresh calls that could trigger rate limits. Closes #50759.

### PR #63590 — Pass Stored Message Metadata to Session Request Hooks
**Link:** https://github.com/anomalyco/opencode/pull/63590 | Closed

Fixes issue #63252 by ensuring plugins can store data on user messages via `event.metadata` in prompt hooks, restoring functionality lost after metadata field refactoring.

### PR #60895 — Add --all Flag to Session List
**Link:** https://github.com/anomalyco/opencode/pull/60895 | Open

Adds `--all` flag with cursor pagination to `opencode session list`. Currently filters to current directory's project; this change allows viewing sessions across all projects.

### PR #63647 — Expose Shell Exit Code, Elapsed Time, and Log Path
**Link:** https://github.com/anomalyco/opencode/pull/63647 | Open

Refactors shell tool to return `{ output, exitCode, wallTimeSeconds }` for completed commands and shell ID with null exit code for running background jobs, improving observability.

### PR #63612 — Unload Local Model on /clear and /exit
**Link:** https://github.com/anomalyco/opencode/pull/63612 | Open

Commands `/clear` and `/exit` now ask the server to unload local models, freeing GPU/CPU resources instead of leaving models loaded after session reset.

### PR #58030 / #58029 / #57674 — Chinese Documentation Completions (CLOSED)
**Link:** https://github.com/anomalyco/opencode/pull/58030 | https://github.com/anomalyco/opencode/pull/58029 | https://github.com/anomalyco/opencode/pull/57674

Multiple documentation PRs from contributor Kissshot-2003 complete missing Chinese translations for keybinds, permissions, troubleshooting pages, and Windows Terminal keybinding caveats.

### PR #63653 — Document parentID on Session Create (CLOSED)
**Link:** https://github.com/anomalyco/opencode/pull/63653

Documentation update explaining how to start child sessions and when they report back, clarifying the `parentID` field in the API spec.

---

## 5. Hot Discussions

*No discussion data was provided in the source data.*

---

## 6. Feature Request Trends

Based on issue and PR analysis, the following feature directions dominate community requests:

| Category | Requests | Description |
|----------|----------|-------------|
| **Provider Flexibility** | High | Non-streaming mode, Unix socket transport, more provider integrations (EVREN LLM), subscription-based API access |
| **UI/UX Polish** | High | Collapsible compaction summaries, RTL language support, message timestamps, dark theme QR code fixes |
| **Desktop Improvements** | Medium | MSI installer for enterprise deployment, persistent browser profiles, stable multi-platform behavior |
| **Model/Tool Control** | Medium | Per-session tool availability, advisor consultation tool, timeout handling for permission dialogs |
| **Multimodal Expansion** | Medium | Audio/video attachment support (delivered), clipboard image paste on Wayland |
| **Session Management** | Medium | Multi-project session listing, project deletion, model auto-balance by usage |

---

## 7. Developer Pain Points

**Critical Stability Issues:**
- **Turns aborting without clear cause** (#63632) — v2 reliability concern
- **Desktop window crashes on Windows x64** (#63001) — blocks production use
- **ECONNRESET on long agent turns** (#60940) — affects extended operations
- **Git polling CPU saturation** (#62948) — performance in large worktrees

**Integration Gaps:**
- **GitLab duo-workflow tool calls fail silently** (#63212) — broken integration
- **MCP console 403 with silent reconnection loops** (#59806) — poor error surfacing
- **Bedrock inference profile format mismatch** (#53756) — provider compatibility

**Usability Friction:**
- **Feature regression: timestamp toggle missing** (#49742) — v1→v2 regression
- **Streaming mode incompatibility** (#785) — blocks certain proxy users
- **Stale model display in TUI footer** (#63506) — visual inconsistency
- **Tool name collision after normalization** (#52420) — unpredictable behavior

**Documentation Gaps:**
- Chinese documentation previously incomplete (now being addressed)
- Windows Terminal keybinding limitations undocumented (now addressed)

---

*End of Digest*

*Generated: 2026-11-13 | Data window: last 24 hours*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the provided GitHub data for the pi project (earendil-works/pi) and generate a structured digest for 2026-11-13.

First, let me note the key data points:

**Releases (last 24h):** None

**Issues (50 total, top 30 by comment count):**
- #2870 [CLOSED] [bug] Follow XDG Base Directory - 28 comments, 75 👍
- #10628 [OPEN] OSC 52 copy in fullscreen TUI is swallowed by tmux - 14 comments
- #12019 [OPEN] [prio:p0] github-copilot: Gemini models never get reasoning_effort - 9 comments
- #11026 [OPEN] [durable] pi-durable: permanently delete a conversation - 8 comments
- #10618 [OPEN] GNU screen: inherited COLORTERM overrides the screen guard - 7 comments
- #10563 [CLOSED] [last-read] MCP OAuth: Google servers never get a refresh token - 6 comments
- #8617 [OPEN] [untriaged] Codex: Use file references for image-heavy tool results - 6 comments
- #11773 [CLOSED] [prio:p0] Upgrade Token Plan branding and gateway setup compatibly - 5 comments
- #11584 [CLOSED] tui: overlay does not cover terminal images - 5 comments
- #10650 [OPEN] [codemode] codemode: preserve nested Error messages - 5 comments
- #9411 [CLOSED] Branch summaries pay full fresh input on every navigate - 4 comments
- #12097 [CLOSED] ai: Support custom fetch in Google Gemini adapters - 4 comments
- #6930 [CLOSED] [no-action] Make renderPage / oauth html functions public - 4 comments


- #9448 [OPEN] pi auth check cannot see providers from extensions - 4 comments
- #9545 [CLOSED] [no-action] Reuse whole-file normalization during batch edit uniqueness checks - 4 comments
- #10585 [OPEN] [prio:p0] bash temp-file stream errors still crash the whole process - 4 comments
- #7740 [OPEN] [bug, untriaged] TUI after /reload does not follows custom tool's renderCall/renderResult - 4 comments
- #12118 [CLOSED] [untriaged] v1.5.2 exits with uncaught AbortError - 3 comments
- #12066 [CLOSED] [bug] find: path globs match directories above the search path - 3 comments
- #10489 [OPEN] forceSystemPrompt projection hoists later toolsAdded into the request tool list - 3 comments
- #11558 [CLOSED] [mcp] coding-agent: support namespace-scoped tool_search queries - 3 comments
- #12032 [CLOSED] pi-env daemon drops up to 64 KiB of a program's output - 3 comments
- #12120 [CLOSED] [untriaged] Fullscreen: compaction removes older messages from the scrollable transcript - 2 comments
- #11446 [OPEN] [durable] A lightweight entry point for defining extensions for pi-durable - 2 comments
- #12096 [OPEN] [bug] /login llama.cpp connection store doesn't persist across sessions - 2 comments
- #12113 [CLOSED] [untriaged] Proposal: bounded retry for Gemini MALFORMED_FUNCTION_CALL - 2 comments
- #12105 [CLOSED] [bug, no-action] Request-size rejections from a proxy leave the session resending the same oversized body - 2 comments
- #12106 [CLOSED] [bug, fix-available] /resume selects an unrelated session after deletion - 2 comments
- #12027 [CLOSED] [no-action] Record why a run was aborted: reason, run id and caller stack - 2 comments
- #10017 [CLOSED] [no-action] Follow-up queued with triggerTurn during a run is stranded when the run aborts - 2 comments

The pull requests show several closed issues with fixes addressing crashes, directory handling, and command failures. Several PRs are still open, including work on the /copy command, terminal writes, and diagnostics reporting. Key fixes include addressing signal-terminated exec commands, skipping version control directories in grep and find tools, and handling AbortError scenarios in v1.5.2.

Additional improvements target path pattern matching in find commands, custom fetch handling for Google AI, and reasoning effort tracking for GitHub Copilot. The TUI overlay functionality now properly hides terminal images, and a new CI job structure separates chord tests for better organization. Qwen Token Plan migration to current gateways was completed, along with session resume selection logic and bash call execution improvements.

Extensions received a fix to bound session shutdown dispatch, while the AI module added Neon as a gateway provider and adjusted root additionalProperties handling for non-strict Anthropic tool schemas.
</think>


# Pi Community Digest — 2026-11-13

## Today's Highlights

The pi project saw significant activity on the TUI layer this cycle—multiple fixes landed to prevent direct terminal writes from corrupting the display, and an overlay bug that left holes over terminal images was finally resolved. On the AI provider side, GitHub Copilot's Gemini models now correctly receive reasoning effort parameters, and Google Gemini adapters gained custom fetch support. A notable durability concern emerged with v1.5.2's uncaught `AbortError` crashes during stream aborts.

---

## Releases

**No new releases in the last 24 hours.** The last stable release remains v1.5.2, though users should be aware of the crash issue noted in [#12118](#12118).

---

## Hot Issues

| # | Title | Priority | Why It Matters | Community Reaction |
|---|-------|----------|----------------|-------------------|
| [#2870](https://github.com/earendil-works/pi/issues/2870) | Follow XDG Base Directory | High (75 👍) | Linux users expect `$XDG_CONFIG_HOME` compliance. The current behavior clutters `$HOME` with config/state directories, violating established standards and fragmenting user expectations. | 28 comments, 75 👍 — the highest engagement in the digest. Closed; fix expected. |
| [#10628](https://github.com/earendil-works/pi/issues/10628) | OSC 52 copy in fullscreen TUI swallowed by tmux | Medium | Copy-on-select writes raw OSC 52 escape sequences that tmux intercepts, breaking clipboard integration for headless SSH users with no display server. | 14 comments, 7 👍. |
| [#12019](https://github.com/earendil-works/pi/issues/12019) | GitHub Copilot Gemini models never get reasoning_effort | P0 | The `--thinking` flag is silently ignored for Copilot's Gemini models because the catalog hardcodes `supportsReasoningEffort: false`. Affects all extended thinking workflows. | 9 comments. Fixed in [#12110](https://github.com/earendil-works/pi/pull/12110). |
| [#11026](https://github.com/earendil-works/pi/issues/11026) | pi-durable: permanently delete a conversation | Durable track | No API exists to purge conversations from durable storage. Users accumulating sessions have no cleanup path short of manual store manipulation. | 8 comments, 6 👍. |
| [#10618](https://github.com/earendil-works/pi/issues/10618) | GNU screen: inherited COLORTERM overrides the screen guard | Medium | pi detects truecolor support via `COLORTERM`, but GNU screen passes through `COLORTERM=truecolor` while not actually supporting 24-bit colors, causing the TUI to render with no colors. | 7 comments. |
| [#10585](https://github.com/earendil-works/pi/issues/10585) | Bash temp-file stream errors crash the whole process | P0 | ENOSPC or EACCES errors during bash execution crash the process with no recovery, losing the in-flight run. Affects resource-constrained environments. | 4 comments. |
| [#8617](https://github.com/earendil-works/pi/issues/8617) | Codex: Use file references for image-heavy tool results | Enhancement | Image storage is currently coupled to provider payloads, causing redundant base64 transmission. Decoupling with `file_id` references would reduce bandwidth and improve performance. | 6 comments. Author has a local prototype. |
| [#12066](https://github.com/earendil-works/pi/issues/12066) | find: path globs match directories above the search path | Bug | `find src/**/*.ts` from `/tmp/src/app` incorrectly returns files from parent directories because `fd --full-path` matches the absolute path. | 3 comments. Fixed in [#12116](https://github.com/earendil-works/pi/pull/12116). |
| [#12118](https://github.com/earendil-works/pi/issues/12118) | v1.5.2 exits with uncaught AbortError when read tool stream is aborted | Critical | After a run finishes and a read tool stream is aborted, an uncaught `AbortError` kills the entire process. No extensions are involved—reproducible with `pi -ne`. | 3 comments. Reported same day (2026-11-13). |
| [#7740](https://github.com/earendil-works/pi/issues/7740) | TUI after /reload does not follow custom tool's renderCall/renderResult | Bug | Tools registered on `session_start` aren't rendered correctly after `/reload` due to load order issues, breaking MCP extension visibility. | 4 comments. |

---

## Key PR Progress

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#12110](https://github.com/earendil-works/pi/pull/12110) | Send reasoning_effort and read reasoning tokens for GitHub Copilot | OPEN (inprogress) | Enables `--thinking` flag for Copilot Gemini models (`gemini-4-argon`, `gemini-3.8-flash`, `gemini-4-carbon`). Closes [#12019](https://github.com/earendil-works/pi/issues/12019). |
| [#12121](https://github.com/earendil-works/pi/pull/12121) | /copy skips turns that ended without an answer | OPEN | Fixes copy-paste of assistant text that was interrupted mid-tool-call or mid-reasoning, where the last message has no text content. Closes [#12119](https://github.com/earendil-works/pi/issues/12119). |
| [#12117](https://github.com/earendil-works/pi/pull/12117) | Remove two remaining direct terminal writes | OPEN | Cleanup of `console.error` calls that leak output behind the TUI's back during startup. Related to [#11264](https://github.com/earendil-works/pi/issues/11264). |
| [#12115](https://github.com/earendil-works/pi/pull/12115) | Report diagnostics that appear on session replacement | OPEN | Ensures runtime diagnostics (warnings, errors) are surfaced on `/new`, `/resume`, `/fork`, and session switches—not just at initial startup. |
| [#12109](https://github.com/earendil-works/pi/pull/12109) | Hide terminal images covered by overlays | CLOSED | Resolves a long-standing TUI bug where overlays drawn over Kitty/iTerm2 images left visual holes. Closes [#11584](https://github.com/earendil-works/pi/issues/11584) and four duplicates. |
| [#12103](https://github.com/earendil-works/pi/pull/12103) | Pass custom fetch to the Google GenAI SDK adapters | CLOSED | Enables routing of Gemini requests through custom HTTP proxies for URL inspection and retry header handling. Closes [#12097](https://github.com/earendil-works/pi/issues/12097). |
| [#12089](https://github.com/earendil-works/pi/pull/12089) | Report signal-terminated pi.exec commands as failed | CLOSED | Previously, SIGSEGV, SIGKILL, and timeout exits returned exit code 0 (success). Now correctly reported as failures. |
| [#12087](https://github.com/earendil-works/pi/pull/12087) | Skip VCS directories in grep and find tools | CLOSED | `--hidden` flag was causing searches to include `.git/` contents (e.g., 15 of 18 `TODO` matches were from the reflog). Now excludes `.git`, `.svn`, `.hg`. |
| [#12112](https://github.com/earendil-works/pi/pull/12112) | Move Qwen Token Plan to current gateways and model lists | CLOSED | Migrates Token Plan providers to current QwenCloud gateways. Closes [#11773](https://github.com/earendil-works/pi/issues/11773). |
| [#11966](https://github.com/earendil-works/pi/pull/11966) | Stop writing to the terminal while the TUI draws on it | CLOSED | Major TUI stability fix. Direct writes to stdout/stderr during TUI operation caused garbled displays and stale content on redraws. Fixes [#11264](https://github.com/earendil-works/pi/issues/11264). |

---

## Hot Discussions

*No discussion data was provided for this period.*

---

## Feature Request Trends

Aggregating across open issues and feature-oriented discussions, the following themes dominate:

1. **Durability & Persistence**
   - Permanent conversation deletion API ([#11026](https://github.com/earendil-works/pi/issues/11026))
   - Lightweight extension entry point for pi-durable ([#11446](https://github.com/earendil-works/pi/issues/11446))
   - Llama.cpp connection store persistence ([#12096](https://github.com/earendil-works/pi/issues/12096))

2. **Terminal & TUI Robustness**
   - XDG Base Directory compliance ([#2870](https://github.com/earendil-works/pi/issues/2870))
   - tmux OSC 52 passthrough ([#10628](https://github.com/earendil-works/pi/issues/10628))
   - GNU screen truecolor guard ([#10618](https://github.com/earendil-works/pi/issues/10618))
   - Fullscreen transcript compaction behavior ([#12120](https://github.com/earendil-works/pi/issues/12120))

3. **AI Provider Parity**
   - Reasoning effort for Copilot Gemini models ([#12019](https://github.com/earendil-works/pi/issues/12019))
   - Custom fetch forwarding for Google adapters ([#12097](https://github.com/earendil-works/pi/issues/12097))
   - Namespace-scoped MCP tool_search ([#11558](https://github.com/earendil-works/pi/issues/11558))
   - Bounded retry for Gemini MALFORMED_FUNCTION_CALL ([#12113](https://github.com/earendil-works/pi/issues/12113))

4. **Extension Architecture**
   - Auth check visibility for extension-registered providers ([#9448](https://github.com/earendil-works/pi/issues/9448))
   - Public OAuth HTML rendering functions ([#6930](https://github.com/earendil-works/pi/issues/6930))
   - Codex image reference decoupling ([#8617](https://github.com/earendil-works/pi/issues/8617))

5. **Tooling Quality**
   - Nested Error preservation in codemode Promise.allSettled ([#10650](https://github.com/earendil-works/pi/issues/10650))
   - forceSystemPrompt projection correctness ([#10489](https://github.com/earendil-works/pi/issues/10489))
   - Reuse whole-file normalization in batch edits ([#9545](https://github.com/earendil-works/pi/issues/9545))

---

## Developer Pain Points

1. **Crash on Resource Exhaustion** — Bash temp-file stream errors (ENOSPC, EACCES) crash the entire process with no graceful degradation ([#10585](https://github.com/earendil-works/pi/issues/10585)).

2. **AbortError Leak in v1.5.2** — A critical regression causes uncaught `AbortError` exceptions after run completion when read tool streams abort, killing the process mid-session ([#12118](https://github.com/earendil-works/pi/issues/12118)).

3. **Signal-Terminated Exec Reporting as Success** — Until [#12089](https://github.com/earendil-works/pi/pull/12089), `pi.exec` returned exit code 0 for signal-terminated processes (timeouts, SIGSEGV, outside kills), masking failures silently.

4. **VCS Noise in Tool Searches** — `grep` and `find` included `.git/` contents by default, flooding results with reflog and hook entries.

5. **TUI Corruption from Direct Terminal Writes** — Any stdout/stderr written while the TUI owns the terminal would corrupt the display state, causing stale content on subsequent redraws. Multiple PRs ([#11966](https://github.com/earendil-works/pi/pull/11966), [#12115](https://github.com/earendil-works/pi/pull/12115), [#12117](https://github.com/earendil-works/pi/pull/12117)) are converging on a fix.

6. **OAuth Refresh Token Gap for Google MCP** — Google's MCP servers (`gmailmcp`, `calendarmcp`) only issue refresh tokens with `access_type=offline`, which pi's OAuth implementation doesn't currently support.

7. **Proxy Request-Size Rejection Loops** — When a proxy caps request bodies, pi reports the error but resends the same (now larger) body on the next turn, creating an unrecoverable loop.

8. **Session Selection Drift on Delete** — The `/resume` picker would jump to an unrelated session after deleting the currently selected one, making batch cleanup tedious.

---

*Digest generated 2026-11-13. Data sourced from github.com/earendil-works/pi. All issue and PR links use the `earendil-works/pi` namespace.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>Let me analyze the GitHub data for Qwen Code community digest for 2026-11-13.

Looking at the data provided:

## Releases (last 24h):
- v0.27.3: Release v0.27.3
- sdk-typescript-v0.1.33: SDK TypeScript Release v0.1.33
- v0.27.2-nightly.20261112.70a487be84
- v1.0.0-preview.1: Release v1.0.0-preview.1
- desktop-v0.27.3: Qwen Code Desktop v0.27.3

## Issues (50 total, top 30 by comment count):
1. #14724 - Main CI failed: Managed Agent gate (342 comments) - OPEN
2. #11680 - Main CI failed: E2E Tests (53 comments) - OPEN
3. #13078 - Daily dependency CVE audit failed (50 comments) - OPEN
4. #13009 - Main CI failed: E2E Tests - cli/cron-tools.test.ts (22 comments) - OPEN
5. #14104 - Main CI failed: SDK Java (14 comments) - OPEN
6. #16091 - Main CI failed: Qwen Code CI (10 comments) - OPEN
7. #16915 - Task reports two errors and cannot continue (9 comments) - CLOSED
8. #13570 - Auto mode blocks inert text with amend phrase (9 comments) - OPEN
9. #17045 - tracking(core): land the 1.0 Preview loop kernel on main (8 comments) - OPEN
10. #1093 - gitignore issue (6 comments) - OPEN
11. #17040 - ACP session child goes idle-unresponsive (5 comments) - OPEN
12. #16444 - cli background-view: auto-surface UX edges (5 comments) - OPEN


13. #16908 - Qwen Code always stuck and interrupted (5 comments) - CLOSED
14. #16449 - core(permissions): extend amend-guard inert proof (5 comments) - OPEN
15. #15327 - tracking(core): run every surface on one agent loop (4 comments) - OPEN
16. #17090 - deflake test issue (4 comments) - CLOSED
17. #17076 - Main CI failed: Managed Agent gate (4 comments) - OPEN
18. #17063 - deflake test issue (4 comments) - CLOSED
19. #16

I'm tracking the CI pipeline failures and test instability across multiple issues. The managed agent gate continues to show intermittent problems, with several test deflake attempts resolving or remaining open. Some critical issues like task interruption and code stalling have been closed, suggesting temporary fixes or workarounds were implemented.

The next set of issues reveals performance and infrastructure challenges. Disk space constraints on the CI runner are causing job failures, while dependency upgrades and browser-use functionality remain under active investigation. The deflake issues for CLI bootstrap and web shell components show ongoing testing refinements, with some marked as duplicates to streamline tracking.

The pull requests demonstrate active development across multiple domains. Core improvements include compression window handling, session management enhancements, and permission tightening for shell commands. Infrastructure work focuses on retry mechanisms for Docker tests, session search refinements, and webhook integration for communication platforms like Feishu. Notably, there's significant attention to read-only command classification and workspace picker usability, indicating a push toward more robust and user-friendly system behavior.

I'll synthesize the data into a comprehensive community update highlighting the key engineering efforts and user-facing improvements across the project.
</think>


# Qwen Code Community Digest — 2026-11-13

## Today's Highlights

Qwen Code shipped **v1.0.0-preview.1**, enabling subscription model catalogs to follow sign-in state automatically without manual provider configuration. The team also released v0.27.3 (desktop), v0.27.2-nightly, and SDK TypeScript v0.1.33. Meanwhile, CI infrastructure issues dominate the landscape—multiple Managed Agent gate and E2E test failures are accumulating hundreds of combined comments, signaling ongoing instability in the main pipeline.

---

## Releases

| Version | Package | Key Changes |
|---------|---------|-------------|
| **v1.0.0-preview.1** | Core | Subscription model catalog now auto-follows sign-in state; sync with Qwen Code 0.2 subscription model catalog and thinking-budget mapping |
| **v0.27.3** | Desktop | Prettier ignore set fix; Agent Host improvements |
| **v0.27.2-nightly.20261112** | Nightly | MCP owner release on Session close; Managed Agent hardening |
| **v0.1.33** | SDK TypeScript | Bundled CLI v0.27.3 |
| **v0.27.3** | CLI | Chips above Web Shell composer for unfinished background workflows, shells, monitors, and local agents |

---

## Hot Issues

### 1. [Main CI Failed: Managed Agent Gate — No Test Identified](https://github.com/QwenLM/qwen-code/issues/14724) (342 comments)
**Priority:** High | **Status:** OPEN  
A chronic CI failure with 6+ failing commits tracked. The bot auto-files issues per commit when the Managed Agent gate fails before any test results are reported. This signals systemic instability in the gate pipeline and blocks merging. Community frustration is evident—342 comments with no resolution path yet visible.

### 2. [Main CI Failed: E2E Tests — No Test Identified](https://github.com/QwenLM/qwen-code/issues/11680) (53 comments)
**Priority:** High | **Status:** OPEN  
Similar to #14724 but for E2E tests on Linux Docker shards. The test runner dies before reporting results, making root cause diagnosis difficult. Multiple commits affected, indicating a persistent infrastructure issue rather than isolated flaky tests.

### 3. [Daily Dependency CVE Audit Failed](https://github.com/QwenLM/qwen-code/issues/13078) (50 comments)
**Priority:** Medium | **Status:** OPEN  
Scheduled CVE audit failing. Potential causes include a new high-severity vulnerability or npm audit endpoint unavailability. This is a security hygiene concern—unresolved CVEs could affect published SDK packages.

### 4. [Main CI Failed: E2E Tests — Cron Tools](https://github.com/QwenLM/qwen-code/issues/13009) (22 comments)
**Priority:** High | **Status:** OPEN | **Autofix:** In-progress  
E2E tests for `cli/cron-tools.test.ts` failing consistently. The autofix is in-progress, suggesting the team has identified the failure mode and is actively working a patch.

### 5. [Task Reports Two Errors and Cannot Continue](https://github.com/QwenLM/qwen-code/issues/16915) (9 comments)
**Priority:** P2 | **Status:** CLOSED  
Users experiencing API slowness causing task interruption. The "connection to model service was interrupted" error prevents task completion. Closed after addressing, but indicates reliability concerns for long-running tasks.

### 6. [Auto Mode Blocks Inert Text Mentioning "Amend"](https://github.com/QwenLM/qwen-code/issues/13570) (9 comments)
**Priority:** P2 | **Security | **Status:** OPEN  
Auto mode incorrectly intercepts benign text containing the word "amend," overriding user-defined ask rules with no escape hatch. This is a false-positive permission issue affecting workflow usability and security posture.

### 7. [Track: Land 1.0 Preview Loop Kernel on Main](https://github.com/QwenLM/qwen-code/issues/17045) (8 comments)
**Priority:** P1 | **Status:** IN-PROGRESS  
Major architectural initiative: migrating the event-driven kernel from v1.0.0-preview to main. Landing in slices, one surface at a time, with rollback capability. This is the most significant structural change in the pipeline.

### 8. [ACP Session Child Goes Idle-Unresponsive After curl/Network Calls](https://github.com/QwenLM/qwen-code/issues/17040) (5 comments)
**Priority:** P1 | **Scope:** Windows, Web Shell | **Status:** OPEN  
On Windows Web Shell, sessions die with "agent channel closed mid-request" when running curl through a local HTTP proxy. The child process goes idle instead of crashing, suggesting a daemon stats timeout issue. Affects production usability on Windows.

### 9. [CI hz3 /tmp Out of Inodes](https://github.com/QwenLM/qwen-code/issues/17037) (4 comments)
**Priority:** P1 | **Status:** OPEN  
CI runner hz3 has 92% inode utilization from leftover verify work trees. Jobs fail at the disk floor gate before running. Infrastructure issue blocking CI on one of the primary runners.

### 10. [Hosted v1 Detach Wedges on Hook-Configured Turn](https://github.com/QwenLM/qwen-code/issues/16579) (4 comments)
**Priority:** P1 | **Scope:** Managed, Daemon | **Status:** OPEN  
Hosted detach operation wedges when a Hook-configured turn has a live background run. Needs a keep-READY drain mechanism. Affects managed runtime reliability.

---

## Key PR Progress

### 1. [fix(core): Reduce or Refuse Compression Request That Cannot Fit Window](https://github.com/QwenLM/qwen-code/pull/15936)
Prevents cold compaction requests that cannot leave room for the summary itself. Now requires at least 4,096 output tokens or 25% of context window. Recovers when provider rejects for context length. Critical fix for memory management stability.

### 2. [feat(channels): Add Feishu Custom Bot Webhook Delivery](https://github.com/QwenLM/qwen-code/pull/17012)
New Feishu custom-bot Channel for sending Markdown cards to configured groups. Supports webhook URL storage with optional signing secrets. Enables notification delivery to Feishu teams, expanding integration options beyond existing channels.

### 3. [fix(ci): Retry Release Docker Test Suites Once](https://github.com/QwenLM/qwen-code/pull/16862)
Release Docker integration script now retries failed CLI and interactive suites once within job retry budget. Containers labeled with job owner are removed before retry to avoid contamination. Reduces spurious release failures from transient infrastructure issues.

### 4. [feat(web-shell): Improve Session Search Experience](https://github.com/QwenLM/qwen-code/pull/16779)
Session search now opens in a dedicated centered dialog with stable sidebar. Shows recent sessions with clear titles, conversation snippets, and workspace context. Includes keyboard selection, focus restoration, loading/retry states, and responsive layout.

### 5. [feat: Add Hybrid Code Mode](https://github.com/QwenLM/qwen-code/pull/11854)
Adds `tools.mode` enum with `direct`, `code_mode`, and `code_mode_only` options. Code mode exposes an isolated `exec` JavaScript tool alongside ordinary tools. Each tool carries nested JavaScript declaration. Major DX enhancement for power users.

### 6. [fix(core): Treat `git remote show` as Non-Read-Only](https://github.com/QwenLM/qwen-code/pull/14360)
`git remote show` was classified read-only and auto-approved, but it queries remotes over network. Now properly classified as non-read-only, requiring permission classification. Security hardening for auto mode.

### 7. [fix(core): Fail Closed on Undecodable Shell Paths](https://github.com/QwenLM/qwen-code/pull/16784)
Undecodable shell filename words now stay unresolved instead of inheriting allow verdict. Byte-escape representation survives quote removal, fragment joins, and ANSI-C parse. Critical security fix preventing path traversal bypasses.

### 8. [feat(headless): Keep Provider HTTP Status on Terminal Error Results](https://github.com/QwenLM/qwen-code/pull/16686)
Provider failures in headless runs now preserve the upstream HTTP status (401, 429, 5xx) on the terminal result envelope. Enables better error diagnostics for API failures.

### 9. [feat(managed-agent): Share Resident External Workspace Across Sessions](https://github.com/QwenLM/qwen-code/pull/16023)
External Workspace tools now persist across session boundaries instead of being destroyed each cycle. One worker provisioned per Workspace-scoped binding, reused by later Sessions and Turns. Significant performance improvement for multi-session workflows.

### 10. [fix(web-shell): Focus Prompt Composer After Selecting Workspace](https://github.com/QwenLM/qwen-code/pull/17089)
After picking a workspace from the dropdown, focus now moves to the prompt composer instead of staying on the trigger button. Eliminates extra click to start typing after workspace selection.

---

## Feature Request Trends

Analyzing the issue and PR landscape reveals these dominant feature directions:

| Trend | Evidence | Significance |
|-------|----------|--------------|
| **Unified Agent Loop Architecture** | #17045, #15327 tracking unified kernel landing | Core architectural refactor enabling consistency across all surfaces |
| **Multi-Agent Orchestration** | #16444 (background-view UX), multi-agent roadmap tags | Moving toward multi-agent workflow support with proper UX patterns |
| **Enhanced Security/Permissions** | #13570, #16449, #16784 | Amend-guard expansions, shell path validation, permission hardening |
| **Enterprise Integration** | #17012 (Feishu), #16434 (dependency upgrades) | Growing focus on enterprise messaging and security compliance |
| **Windows/Daemon Stability** | #17040, #16579 | Web Shell daemon improvements for production Windows deployments |
| **Session Persistence & Performance** | #16023 (shared workspaces), #16525 (turn limit surfacing) | Better session lifecycle management and resource reuse |
| **CI Reliability** | #14724, #11680, #16862 | Investment in flaky test handling and infrastructure resilience |

---

## Developer Pain Points

The community is signaling these recurring frustrations:

1. **CI Pipeline Instability** — Main CI failures without actionable diagnostics (multiple issues with 50-342 comments). Developers can't merge confidently when gates fail silently or inconsistently.

2. **Subscription Model Configuration Friction** — Pre-v1.0.0-preview.1, users needed manual provider configuration for subscription models. Now resolved in v1.0.0-preview.1, but this was a significant UX pain point.

3. **Web Shell Daemon Reliability on Windows** — Sessions becoming unresponsive after network tool calls, affecting Windows users disproportionately. The stats timeout behavior creates unpredictable interruptions.

4. **Auto Mode False Positives** — Benign text containing permission-sensitive keywords (e.g., "amend") triggers interception, blocking legitimate workflows. No escape hatch for users.

5. **Flaky E2E Tests** — Multiple deflake issues filed (#17090, #17063, #17079, #17046, #16975). The CI Failure Patrol is actively catching these, but persistent flakiness slows development velocity.

6. **Directory vs. File Glob Behavior** — Previously, glob returned only files, not directories, causing inconsistent "exists" probe results depending on entry type. Fixed in #16924.

7. **Session Turn Limit Transparency** — Sessions exceeding `maxSessionTurns` silently repeated answers instead of surfacing the limit. Now properly recorded in JSON output per #16525.

---

*Digest generated from GitHub data for [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | 2026-11-13*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*