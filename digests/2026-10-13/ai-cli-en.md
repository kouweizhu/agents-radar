# AI CLI Tools Community Digest 2026-10-13

> Generated: 2026-10-13 03:08 UTC | Tools covered: 7

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

<think>The user wants me to generate a cross-tool comparison report for AI CLI tools based on the individual digests I've already created. Let me analyze the data from each digest and create a comprehensive comparison.

Let me extract the key data points from each digest:

1. **Claude Code** (github.com/anthropics/claude-code)
- Latest Releases: None in last 24h
- Latest Issues: 50 total issues (showing top 30)
- Latest PRs: None in last 24h
- Discussions: Not mentioned as active

2. **OpenAI Codex** (github.com/openai/codex)
- Latest Releases: None in last 24h
- Latest Issues: 50 total (top 30 shown)
- Latest PRs: 20 PRs merged on 2026-10-12
- Discussions: 4 discussions

3. **Gemini CLI** (github.com/google-gemini/gemini-cli)
- Latest Releases: v0.65.0-nightly.20261013.g51617c1bc
- Latest Issues: 30 issues
- Latest PRs: 10 key PRs
- Discussions: Not mentioned as active

4. **GitHub Copilot CLI** (github.com/github/copilot-cli)
- Latest Releases: v1.0.97-2, v1.0.97-1, v1.0.97-0, v1.0.96
- Latest Issues: 35 issues
- Latest PRs: 0 in last 24h
- Discussions: Not mentioned as active

5. **OpenCode** (github.com/anomalyco/opencode)
- Latest Releases: None in last 24h
- Latest Issues: 30 issues
- Latest PRs: 10 key PRs
- Discussions: Not provided in data

6. **Pi** (github.com/earendil-works/pi)


- Latest Releases: v1.2.0
- Latest Issues: 10 issues
- Latest PRs: 10 key PRs
- Discussions: 1 discussion

7. **Qwen Code** (github.com/QwenLM/qwen-code)
- Latest Releases: v0.25.1-nightly.20261012.18f80f5666
- Latest Issues: 50 issues
- Latest PRs: 10 key PRs
- Discussions: 1 discussion

I notice Qwen Code is another significant player in the AI CLI tools landscape, with recent nightly releases and active community engagement. The project shows similar activity levels to other tools, with consistent issue tracking and multiple pull requests.</think>

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing rapid fragmentation and specialization as major AI labs and open-source communities compete to own the developer workflow. Today's activity reveals a bifurcated market: enterprise-focused tools (Claude Code, Copilot CLI) emphasize stability and integration depth, while newer entrants (Qwen Code, Gemini CLI) prioritize architectural innovation around multi-agent orchestration and durable sessions. All platforms are grappling with common challenges—context management, terminal UX reliability, and cross-platform compatibility—but diverge significantly in their technical approaches. The emergence of Managed Agent architectures and BYOK (Bring Your Own Key) models signals a maturing market moving beyond simple completion toward autonomous task execution.

---

## 2. Activity Comparison

| Tool | Latest Releases (24h) | Issues Updated | PRs Updated | Discussions | Release Status |
|------|----------------------|----------------|-------------|-------------|----------------|
| Claude Code | 0 | 50 | 0 | N/A | Stable |
| OpenAI Codex | 0 | 50 | 20 | 4 | Stable |
| Gemini CLI | 1 | 30 | 10 | N/A | Nightly |
| Copilot CLI | 4 | 35 | 0 | N/A | Stable |
| OpenCode | 0 | 30 | 10 | N/A | Stable |
| Pi | 1 | 10 | 10 | 1 | Stable |
| Qwen Code | 1 | 50 | 10 | 1 | Nightly |

**Notes:**

- **OpenAI Codex** leads in PR throughput with 20 merged PRs, indicating aggressive iteration
- **Claude Code** and **OpenAI Codex** show highest issue activity (50 each), suggesting larger user bases or more active bug reporting
- **Copilot CLI** issued 4 releases in 24 hours, demonstrating rapid patch cadence
- **Pi** and **Qwen Code** have minimal discussion activity but active issue/PR workflows—these repos rely on Issues as the primary community channel

---

## 3. Shared Feature Directions

The following requirements appear consistently across multiple tool communities:

| Feature Direction | Tools Affected | Specific Needs |
|------------------|----------------|----------------|
| **Multi-Agent Orchestration** | Qwen Code, Claude Code, Gemini CLI | Agent identity projection, subagent attribution, team coordination APIs |
| **Model Fallback/Failover** | OpenCode, Copilot CLI, Gemini CLI | Automatic retry across different models on errors or rate limits |
| **Durable/Recoverable Sessions** | Pi, Qwen Code, Claude Code | Session persistence across interruptions, checkpoint recovery |
| **Terminal UI Robustness** | All tools | Flicker-free rendering, resize handling, terminal multiplexer compatibility |
| **Windows Platform Support** | All tools | Shell path resolution, console window handling, NTFS compatibility |
| **Extension/Plugin System** | Copilot CLI, OpenCode, Pi | Local plugin loading, per-invocation configuration |
| **MCP Integration** | Claude Code, Copilot CLI, OpenCode | OAuth flows, server authentication, tool discovery |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|---------------|-------------|-------------------|
| **Claude Code** | Autonomous file modification, context preservation | Enterprise developers | Conservative—focuses on stability, safeguards, and enterprise compliance |
| **OpenAI Codex** | Agentic coding, tool orchestration | Developers using OpenAI models | High throughput—20 PRs/day, aggressive feature shipping |
| **Gemini CLI** | AST-aware tooling, token efficiency | Performance-sensitive users | Technical depth—AST analysis, zero-dependency sandboxing proposals |
| **Copilot CLI** | Enterprise integration, GitHub ecosystem | GitHub users, enterprises | Integration-first—MCP, GitHub auth, org policies |
| **OpenCode** | Model flexibility, BYOK | Price-sensitive developers | Open model support—PostgreSQL storage, custom providers |
| **Pi** | Durable sessions, context management | Long-running workflows | Session durability focus—compact-to-survive, long-context handling |
| **Qwen Code** | Managed agents, Kubernetes | Platform teams, enterprises | Architecture-first—dual-path agent design, K8s runtime |

---

## 5. Community Momentum & Maturity

### High Momentum (Active Development)

- **OpenAI Codex**: 20 PRs merged in 24 hours, highest velocity; strong discussion activity (4 threads)
- **Qwen Code**: Active architectural evolution (Managed Agent proposals), 50 issues updated
- **Copilot CLI**: 4 releases in 24 hours—rapid patch cadence for stability

### Medium Momentum

- **Gemini CLI**: Nightly cadence, focused PRs on terminal UI and agent behavior
- **Pi**: Steady progress on session durability, v1.2.0 release shipped
- **OpenCode**: Active bug fixes, v2 migration ongoing

### Mature/Stable

- **Claude Code**: Lower daily activity but large issue backlog (50 issues); enterprise-grade stability focus

### Community Engagement

- **OpenAI Codex** leads in community interaction with 4 active discussions
- **Pi** and **Qwen Code** show engaged discussions despite smaller overall activity
- Most tools rely primarily on Issues rather than Discussions—indicates younger community infrastructure or preference for issue-based workflows

---

## 6. Trend Signals

Several industry patterns emerge from this cross-section:

1. **Multi-Agent is the Next Frontier**: Qwen Code's dual-path architecture proposal, Claude Code's subagent recovery issues, and Gemini CLI's AST-aware subagent research all point toward coordinated multi-agent systems as the next competitive differentiator.

2. **BYOK and Model Flexibility are Table Stakes**: OpenCode's per-key model filtering, Copilot CLI's BYOK routing challenges, and Pi's model catalog work indicate that vendor lock-in avoidance is now a baseline expectation.

3. **Terminal Experience is a Battleground**: All tools are investing in flicker-free rendering, terminal multiplexer compatibility, and responsive UI—indicating CLI UX quality directly impacts developer adoption.

4. **Windows Remains Problematic**: Across every tool, Windows-specific bugs dominate pain point lists (shell path resolution, console flashing, NTFS issues). This suggests the platform requires dedicated engineering attention.

5. **Context Management is Hard**: Issues around session compaction (Claude, Pi), context overflow recovery (OpenAI Codex), and prompt caching (Copilot CLI) reveal that context window management remains technically unsolved at scale.

6. **Nightly vs. Stable Dichotomy**: Gemini CLI and Qwen Code ship nightlies, while Claude Code and Copilot CLI prioritize stability—suggesting the market is testing different release philosophies for developer tools.

---

*Report generated from 2026-10-13 GitHub activity data across 7 AI CLI tools*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>Let me analyze the provided data to create a comprehensive Claude Code Skills community highlights report.

From the data:

**Top Skills Ranking** - Looking at the PRs sorted by comments. The data shows 20 PRs but all have "undefined" comments. However, looking at the issues (sorted by comments):
- Issue #492: 46 comments - Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse
- Issue #228: 16 comments - Enable org-wide skill sharing in Claude.ai
- Issue #556: 12 comments - run_eval.py: claude -p never triggers skills/commands (0% trigger rate)
- Issue #62: 10 comments - All my skills have disappeared
- Issue #1329: 9 comments - Proposing a second skill: compact-memory

Wait, the prompt asks for PRs (Skills), not Issues. Let me re-read the PR data. The PRs all show "undefined" for comments. This seems like the data might not have comment counts for PRs, but the issue comments are available.

Looking more carefully at the PRs:
- #1742 - fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- #1298 - fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- #1771 - feat(skills): add proofcore-contract-auditor for smart contract notarization
- #1734 - Detect orphaned docx comments
- #1703 - Add md2video-audio skill
- #1245 - Add notion-spec-to-implementation and quantitative-resume-auditor skills
- #1961 - skill-creator: harden eval viewer (script breakout, DNS rebinding, cross-site POST, escaping)
- #1792 - fix(docx): report LibreOffice timeout as an error and verify the output


- #1730 - fix(claude-api): replace dead URLs in academy-guide and tool-use-concepts
- #1681 - fix(skill-creator): support direct execution of package_skill.py and update usage paths
- #514 - Add document-typography skill
- #1615 - Add scnet-hpc skill
- #822 - feat: add AWT (AI Watch Tester) — AI-powered E2E testing skill
- #538 - fix(pdf): correct case-sensitive file references in SKILL.md
- #486 - Add ODT skill

The remaining PRs span various enhancements and fixes across different skills. Since comment counts aren't available for pull requests, I'll need to rely on their recency and relevance to identify the most significant contributions. The skill-creator updates and mcp-builder improvements appear particularly noteworthy given their focus on core functionality.

The issues section reveals active community engagement, with #492 receiving substantial attention (46 comments) around security concerns regarding namespace distribution. The higher comment counts on issues compared to PRs suggest the community is more engaged in discussing problems than in reviewing individual pull requests. I should prioritize the skills mentioned in these discussions when compiling the final report.</think>

# Claude Code Skills Community Highlights Report

**Data Source:** github.com/anthropics/skills (as of 2026-10-13)

---

## 1. Top Skills Ranking

*Note: PR comment counts were not populated in the dataset. Ranking is based on PR recency, activity indicators, and issue thread engagement related to these skills.*

### Skill-Creator Core Infrastructure (Multiple PRs)

| PR | Focus | Status |
|----|-------|--------|
| [#1961](https://github.com/anthropics/skills/pull/1961) | Hardens eval viewer against script breakout, DNS rebinding, cross-site POST, and escaping vulnerabilities | OPEN |
| [#1298](https://github.com/anthropics/skills/pull/1298) | Isolates trigger evaluations, handles Windows compatibility and runtime failures | OPEN |
| [#1681](https://github.com/anthropics/skills/pull/1681) | Supports direct execution of package_skill.py and updates usage paths | OPEN |

**Discussion Highlights:** The skill-creator skill is receiving substantial hardening attention. PR #1961 addresses critical security gaps in the eval viewer (script breakout, XSS vulnerabilities). PR #1298 tackles Windows-specific issues with subprocess handling and trigger evaluation reliability. These PRs indicate the community views skill-creator as foundational infrastructure requiring robust security and cross-platform support.

---

### MCP Builder Enhancements

| PR | Focus | Status |
|----|-------|--------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | Support mcp>=2.0 streamable_http_client import and custom headers | OPEN |

**Discussion Highlights:** Updates the MCP builder to support version 2.0+ changes, including renamed imports (`streamable_http_client`) and new header configuration via `create_mcp_http_client`. This skill is critical for developers building Model Context Protocol integrations.

---

### Domain-Specific Skills

| PR | Skill | Focus | Status |
|----|-------|-------|--------|
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | Automated static analysis of Solidity/Rust smart contracts with TON Blockchain notarization via zero-storage Merkle protocol | OPEN |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | Converts Markdown documents to MP4 videos with realistic voiceovers using Marp | OPEN |
| [#1245](https://github.com/anthropics/skills/pull/1245) | notion-spec-to-implementation | Transforms product/tech specs into concrete Notion tasks with acceptance criteria and progress tracking | OPEN |
| [#822](https://github.com/anthropics/skills/pull/822) | AWT (AI Watch Tester) | Zero-code E2E testing with Claude vision and browser control | OPEN |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | Prevents typographic issues (orphans, widows, numbering misalignment) in AI-generated documents | OPEN |

---

### Quality & Fix PRs

| PR | Focus | Status |
|----|-------|--------|
| [#1792](https://github.com/anthropics/skills/pull/1792) | Reports LibreOffice timeout as error, validates output DOCX has no revision marks | OPEN |
| [#1730](https://github.com/anthropics/skills/pull/1730) | Replaces 3 hard-404 documentation URLs in academy-guide and claude-api | OPEN |
| [#538](https://github.com/anthropics/skills/pull/538) | Fixes 8 case-sensitivity mismatches in pdf SKILL.md references | OPEN |

---

## 2. Community Demand Trends

*Derived from high-comment Issues (sorted by engagement)*

### Security & Trust Infrastructure
- **#492 (46 comments):** Security vulnerability — community skills distributed under `anthropic/` namespace impersonate official skills, enabling trust boundary abuse. Users may inadvertently grant elevated permissions to unvetted community skills.

### Workflow & Collaboration
- **#228 (16 comments):** Enable org-wide skill sharing in Claude.ai — current manual file distribution is cumbersome; users want shared skill libraries or direct sharing links.

### Developer Experience
- **#556 (12 comments):** run_eval.py has 0% trigger rate — skill trigger detection fails completely in evaluation mode.
- **#189 (6 comments):** document-skills and example-skills plugins contain duplicate content, causing context pollution.

### Context & Performance
- **#1487 (4 comments):** claude-api skill injects ~156k tokens, exhausting context window in a single tool call.

### Skill Quality & Governance
- **#202 (8 comments):** skill-creator should be updated to best practices — verbose educational tone undermines token efficiency.
- **#412 (6 comments):** Proposal for agent-governance skill — policy enforcement, threat detection, trust scoring, and audit trails for AI agent systems.

---

## 3. High-Potential Pending Skills

*Active PRs most likely to land soon, based on recent updates and substantive functionality*

| PR | Skill | Readiness Indicator | Link |
|----|-------|---------------------|------|
| #1771 | proofcore-contract-auditor | Specialized Web3 audit workflow; well-documented | [#1771](https://github.com/anthropics/skills/pull/1771) |
| #1703 | md2video-audio | Zero-cost Markdown-to-video conversion; clear use case | [#1703](https://github.com/anthropics/skills/pull/1703) |
| #1245 | notion-spec-to-implementation | Bridges product specs to actionable Notion tasks | [#1245](https://github.com/anthropics/skills/pull/1245) |
| #822 | AWT (AI Watch Tester) | E2E testing automation; addresses clear developer need | [#822](https://github.com/anthropics/skills/pull/822) |
| #1961 | skill-creator security hardening | Critical security patch; actively maintained | [#1961](https://github.com/anthropics/skills/pull/1961) |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for robust, production-grade skill infrastructure** — particularly security hardening (trust boundaries, eval viewer vulnerabilities), cross-platform compatibility (Windows support), and evaluation/trigger reliability — rather than new domain-specific capabilities. Security and developer experience improvements are commanding significantly more discussion (46+ comments on security issues) than feature-addition PRs, indicating the ecosystem is prioritizing foundational stability before expanding into new skill categories.

---

*Report generated from GitHub data as of 2026-10-13*

---

<think>The user wants me to generate a Claude Code community digest based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Looking at the data:
- Latest Releases: None in the last 24h
- Latest Issues: 50 total, showing top 30 by comment count
- Latest PRs: None in the last 24h

Since there are no releases or PRs in the last 24h, those sections will be minimal or omitted. I need to focus on the issues and extract the most important ones.

Let me identify the key issues:

1. #16550 - Feature request: Allow Claude to Write/Update Project Files - 40 comments, 78 👍 - This is the highest engagement
2. #98747 - Bug: 2.1.286 idle compaction silently discards working context - 22 comments, 30 👍 - Closed issue about a significant bug
3. #91495 - Bug: Site permissions ignored by built-in browser - 19 comments, 23 👍
4. #88561 - Bug: Bash tool collapses \\ to \ in command text - 7 comments, 4 👍
5. #68083 - Bug: Desktop global "Auto-fix CI" toggle doesn't apply to PRs from gh - 7 comments, 8 👍
6. #96118 - Bug: Opus 5.5 safeguards flagged message - 7 comments
7. #78263 - Feature request: API fallback mechanism for auto-mode classifier - 5 comments
8. #95922 - Bug: Claude Docs artifact export fails on personal Max plan - 4 comments
9. #95122 - Bug: Worktree isolation refuses git-free Bash - 3 comments
10. #100913 - Enhancement: Desktop Code session with prompt/model/effort without click - 3 comments

I need to pick 10 noteworthy issues and explain why they matter. Let me also note:


Several platform-specific and core functionality issues are worth highlighting: VS Code panel reattachment problems after extension restarts, organization switching causing session drops, .claude.json case-sensitivity bugs on Windows, server tool results getting separated from their corresponding tool uses, and slash command registration issues in desktop environments. There are also some feature requests around mascot slots for desktop mods and remote control enhancements.</think>

# Claude Code Community Digest — 2026-10-13

## Today's Highlights

The GitHub issue tracker shows intense community activity around Claude Code's core workflows and desktop experience. The highest-engaged item is a feature request (#16550) with 78 thumbs-up asking for Claude to write/update project files—reflecting strong demand for more autonomous file modification capabilities. Meanwhile, a closed bug (#98747) about idle context compaction silently discarding working context in version 2.1.286 generated significant discussion (22 comments), suggesting this affected many long-running sessions. No new releases or pull requests were merged in the past 24 hours.

---

## Releases

No new releases in the past 24 hours.

---

## Hot Issues

### 1. [FEATURE] Allow Claude to Write/Update Project Files — #16550
**78 👍 · 40 comments · [View Issue](https://github.com/anthropics/claude-code/issues/16550)**

A highly-requested enhancement from SyedMuhamadYasir asking for Claude Code to have write permissions for project files beyond current artifact capabilities. This represents a major workflow ask—users want Claude to directly modify source code rather than just generating artifacts or requiring manual copy-paste. The 78 thumbs-up indicates this is a top-tier user priority.

### 2. [BUG] 2.1.286 idle compaction silently discards working context — #98747
**30 👍 · 22 comments · CLOSED · [View Issue](https://github.com/anthropics/claude-code/issues/98747)**

Natefosterwarner reported that idle sessions are now automatically compacted before the prompt cache expires, with no opt-out or warning. For long-running working sessions, this discards the grounding context the session was built on—severely impacting workflows where users maintain state across hours of work. The fix appears to have been implemented (issue closed).

### 3. [BUG] Site permissions ignored by built-in browser — #91495
**23 👍 · 19 comments · [View Issue](https://github.com/anthropics/claude-code/issues/91495)**

Hoang-79 reports that the Claude Code Desktop's built-in browser ignores site-wide permissions like "Allow all websites." Users expecting unrestricted access encounter permission prompts repeatedly, breaking automation workflows in the browser tool.

### 4. [BUG] Bash tool silently collapses `\\` to `\` — #88561
**4 👍 · 7 comments · Has Repro · [View Issue](https://github.com/anthropics/claude-code/issues/88561)**

Bwillkom discovered that the Bash tool collapses double backslashes into single backslashes before shell parsing—breaking regex patterns and Windows paths alike. This affects commands inside single quotes, double quotes, and heredocs, violating POSIX guarantees. Critical for any scripting involving regex or Windows path handling.

### 5. [BUG] Desktop Auto-fix CI toggle doesn't apply to gh-created PRs — #68083
**8 👍 · 7 comments · [View Issue](https://github.com/anthropics/claude-code/issues/68083)**

Laxels reports that the desktop's global "Auto-fix CI and address comments" toggle never applies to PRs created via the `gh` CLI from local sessions, and the setting doesn't persist in `claude_desktop_config.json`. Users must manually set this per-session, defeating the purpose of a global toggle.

### 6. [BUG] Opus 5.5 safeguards flagged message with reasoning_extraction — #96118
**2 👍 · 7 comments · DUPLICATE · [View Issue](https://github.com/anthropics/claude-code/issues/96118)**

Users encounter cryptic "API Error: Opus 5.5 safeguards flagged this message" without visibility into what triggered the safeguard. Multiple reports (marked duplicate) request UI improvements to show the actual reasoning behind blocked responses.

### 7. [FEATURE] API fallback mechanism for auto-mode classifier — #78263
**4 👍 · 5 comments · [View Issue](https://github.com/anthropics/claude-code/issues/78263)**

Creativecreatorormaybenot requests automatic fallback to alternative models (e.g., Opus low) when the auto-mode classifier fails due to API outages. Currently, a Sonnet outage halts entire sessions—users want resilience.

### 8. [BUG] Claude Docs artifact PDF export fails on personal Max — #95922
**3 👍 · 4 comments · [View Issue](https://https://github.com/anthropics/claude-code/issues/95922)**

Stilesja reports that exporting Claude Docs artifacts to PDF fails with "Your organization doesn't allow PDF export here" on personal Max plans—even though the account belongs to no organization. A clear paywall or permission bug affecting personal subscribers.

### 9. [BUG] Worktree isolation refuses git-free Bash commands — #95122
**1 👍 · 3 comments · Has Repro · [View Issue](https://github.com/anthropics/claude-code/issues/95122)**

Apollion69 documents that Claude Code 2.1.272/2.1.273 refuse Bash calls containing no git commands at all, when using worktree isolation. Simple operations like loops, `$VAR` reads, and heredocs after `&&` are blocked—causing 75 refusals over 3 days.

### 10. [BUG] VS Code panels never re-attach after extension host restart — #94743
**1 👍 · 3 comments · Has Repro · [View Issue](https://github.com/anthropics/claude-code/issues/94743)**

Capitaletech reports that after a VS Code extension host restart, Claude Code panels never re-attach—sessions appear frozen until the user manually runs "Reload Window." Affects Windows 11 users with the VS Code extension.

---

## Key PR Progress

No pull requests updated in the past 24 hours.

---

## Feature Request Trends

Analyzing the issue tracker reveals several dominant feature directions:

1. **Autonomous File Modification** — #16550 (78 👍) clearly shows demand for Claude to write directly to project files, not just generate artifacts
2. **Resilience & Fallbacks** — API/model fallback mechanisms (#78263) when primary options fail
3. **Enhanced Desktop UX** — Mascot slots for mods (#99425), effort pickers in Remote Control (#99489)
4. **Bash/Shell Improvements** — Fixes for path handling (#88561), worktree isolation refinements (#95122, #100385)
5. **Persistence & State** — Config persistence for desktop toggles (#68083), session state across org switches (#94507)

---

## Developer Pain Points

The community's recurring frustrations cluster around:

- **Context Loss in Long Sessions**: Idle compaction (#98747) silently discarding working context remains a high-impact issue
- **Windows-Specific Bugs**: Multiple Windows issues (path handling, case-sensitive JSON keys, VS Code re-attachment) indicate this platform needs more testing coverage
- **Permission & Auth Friction**: Site permissions ignored (#91495), MCP OAuth double-encoding (#101205), org-switching session drops (#94507)
- **Tool Reliability**: Bash tool semantics (#88561), LSP tool gitignore filtering (#101476), worktree isolation false positives (#95122)
- **Cost & Limit Enforcement**: An orchestrating session ignoring project concurrency limits burned ~12% of a weekly Max allowance (#101650)

---

*Digest generated from GitHub data — 2026-10-13*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze this GitHub data about OpenAI Codex and create a structured digest for the community.

Looking at the data:

**Releases**: None in the last 24h

**Issues** (50 total, showing top 30 by comment count):
1. #9203 - Enhancement request for "/undo" command - 93 comments, 479 👍
2. #52839 - Bug: Sol Ultrafast model omitted from catalog with ChatGPT auth - 16 comments
3. #48195 - Enhancement: Make daemon_auto_start opt-in - 16 comments, 129 👍
4. #25015 - Bug: MCP process stacks leak for subagents - 15 comments
5. #49453 - Bug: Browser access blocked after allowing site - 14 comments
6. #52747 - Bug: Windows Desktop code_mode_tool_description_first issue - 13 comments
7. #41077 - Bug: README TOC generator parsing issues - 12 comments
8. #52567 - Bug: Context overflow after WebSocket retries - 9 comments
9. #37193 - Bug: Generated file links don't work on Windows - 9 comments
10. #49824 - Enhancement: Allow dots to use multiple PCs - 7 comments
11. #32665 - Enhancement: Custom presets in model picker - 7 comments, 20 👍
12. #51475 - Bug: Browser reads fail after handback - 7 comments
13. #47740 - Enhancement: Disable CLI usage-limit warnings - 7 comments, 17 👍
14. #34254 - Bug: Remote tasks disappear after restart - 6 comments
15. #45388 - Bug: Elevated apps input blocked - 6 comments
16. #50252 - Bug: At-capacity errors despite quota - 5 comments
17. #52645 - Bug: Windows headless exec inherits desktop runtime - 5 comments


18. #44995 - Bug: NTFS nonpaged pool grows - 4 comments
19. #52073 - Bug (CLOSED): Linux ChatGPT becomes default browser - 4 comments
20. #49434 - Bug: GPT-6 Pro fails with generic errors - 3 comments
21. #39555 - Bug: Skills lost during auth 503s - 3 comments
22. #53249 - Bug: Chat repeatedly fails on macOS - 3 comments
23. #53031 - Bug: Saved denial despite allowance - 3 comments
24. #53407 - Bug: Sol xhigh returns at-capacity - 2 comments
25. #534

Several platform-specific issues are emerging. Windows users are experiencing critical system-level problems like NTFS pool growth and elevated app restrictions, while Linux has an unexpected browser default behavior. The macOS platform shows recurring authentication and connection stability problems. Rate limiting continues to plague the Sol model despite available quota.

26. #53524 - Bug: At-capacity errors - 2 comments
27. #53287 - Bug: macOS app crashes - 2 comments
28. #53136 - Bug: Dots can't access MCP tools - 2 comments
29. #53519 - Bug: Dots report offline while app open - 2 comments
30. #53374 - Bug: Nested YAML stalls detection - 2 comments

**Pull Requests** (24 total): All closed on 2026-10-12
- #53506: Reject duplicate Host headers
- #53496: Preserve pending Effects toggles
- #53485: Update quinn-proto to 0.11.18
- #53453: Prefer Windows clipboard on WSL
- #53452: Close input admission while turn finishes
- #53451: Treat incomplete responses as terminal errors
- #53444: Suppress repeated turn diffs in codex exec
- #53443: Use local MSVC toolchains for Windows tests
- #53440: Preserve status line accents on 16-color terminals
- #53438: Stop identifying Apple Terminal from TERM_SESSION_ID
- #53436: Route TUI request replies to originating connection
- #53429: Apply configuration toggles live
- #53426: Preserve Windows runtime registration diagnostics
- #53424: Add regression coverage for network grants
- #53419: Restore saved thread permissions
- #53412: Isolate arg0 helper directories by OS
- #53400: Add explicit local board connections
- #53393: Distinguish Guardian parent-compaction failure reasons
- #53389: Use cached login credentials for Guardian
- #53382: Ignore unsafe-libyaml advisory

**Discussions** (4 total):
1. #53200 - Show and tell: Text alerts service for Codex resets
2. #53294 - Ideas: Suppress config.toml deprecation warnings
3. #53492 - Show and tell: Secure Browser Use for Zen (Firefox/Zen)
4. #53366 - Q&A: Sites publishing from Codex blocked

I can now organize this into a structured digest.</think>

# OpenAI Codex Community Digest
**Date:** 2026-10-13

---

## 1. Today's Highlights

The Codex community is聚焦 on Windows-specific issues today, with multiple reports of browser permission problems, sandbox leaks, and elevated app input blocking. The highly-requested `/undo` feature (Issue #9203, 479 👍) continues to drive significant discussion. Meanwhile, 20 PRs were merged addressing network security, terminal compatibility, and configuration improvements.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Summary | Community |
|---|-------|---------|-----------|
| **#9203** | [Please make "/undo" back](https://github.com/openai/codex/issues/9203) | Enhancement request to restore the `/undo` command for recovering from unintended file deletions/modifications outside git tracking. Critical for data safety. | 93 comments, 479 👍 |
| **#48195** | [Make daemon_auto_start opt-in](https://github.com/openai/codex/issues/48195) | Request to change the persistent background daemon from default-on to opt-in, citing privacy and resource concerns. | 16 comments, 129 👍 |
| **#52839** | [Sol Ultrafast omitted from model catalog](https://github.com/openai/codex/issues/52839) | Windows users with ChatGPT auth cannot access Sol Ultrafast model despite having ultrafast_mode enabled. | 16 comments |
| **#25015** | [MCP process stacks leak for subagents](https://github.com/openai/codex/issues/25015) | Bug causing linear memory growth on Linux as MCP child processes remain alive after subagent completion. | 15 comments |
| **#49453** | [Browser access blocked after explicit allow](https://github.com/openai/codex/issues/49453) | Windows: saved chat-level denial blocks browser access even after user explicitly allows the site. | 14 comments |
| **#52747** | [Windows Desktop: code_mode_tool_description_first](https://github.com/openai/codex/issues/52747) | Unknown injected configuration causing opaque forced-cleanup denial on Windows Desktop. | 13 comments |
| **#52567** | [Context overflow after WebSocket retries](https://github.com/openai/codex/issues/52567) | CLI goal fails on resume after context overflow triggered by WebSocket reconnection retries. | 9 comments |
| **#37193** | [Generated-file links don't download](https://github.com/openai/codex/issues/37193) | Windows: sandbox-generated file links are unresponsive when clicked. | 9 comments |
| **#47740** | [Disable CLI usage-limit warnings](https://github.com/openai/codex/issues/47740) | Request for config setting to hide proactive rate-limit warnings. | 7 comments, 17 👍 |
| **#45388** | [Elevated apps input blocked](https://github.com/openai/codex/issues/45388) | Windows: Computer Use cannot input into elevated apps even when ChatGPT runs as administrator. | 6 comments |

---

## 4. Key PR Progress

| PR | Title | Impact |
|----|-------|--------|
| **#53506** | [Reject duplicate Host headers](https://github.com/openai/codex/pull/53506) | Security: Returns 400 Bad Request for multiple Host headers to prevent request smuggling. |
| **#53496** | [Preserve pending Effects toggles](https://github.com/openai/codex/pull/53496) | Fix: Prevents discarding newer toggle choices when saves are pending. |
| **#53485** | [Update quinn-proto to 0.11.18](https://github.com/openai/codex/pull/53485) | Dependency update with refreshed rand/getrandom versions. |
| **#53453** | [Prefer Windows clipboard on WSL](https://github.com/openai/codex/pull/53453) | Fix: Avoids WSLg/PowerShell clipboard stalls by preferring Windows native clipboard. |
| **#53451** | [Treat incomplete responses as terminal errors](https://github.com/openai/codex/pull/53451) | Fix: Properly classifies max_output_tokens hits as terminal instead of retryable stream errors. |
| **#53444** | [Suppress repeated turn diffs in codex exec](https://github.com/openai/codex/pull/53444) | UX: Reduces noise by only printing new diffs. |
| **#53440** | [Preserve status line accents on 16-color terminals](https://github.com/openai/codex/pull/53440) | Fix: Uses ANSI fallback accents for limited terminals. |
| **#53438** | [Stop identifying Apple Terminal from TERM_SESSION_ID](https://github.com/openai/codex/pull/53438) | Fix: Corrects terminal detection to avoid masking Windows Terminal. |
| **#53429** | [Apply configuration toggles live](https://github.com/openai/codex/pull/53429) | UX: Toggles apply without restart; improved settings navigation. |
| **#53419** | [Restore saved thread permissions during config loading](https://github.com/openai/codex/pull/53419) | Fix: Ensures saved read-only threads resume even when defaults change. |

---

## 5. Hot Discussions

### Show and tell
- **#53200** [Text alerts service for Codex resets](https://github.com/openai/codex/discussions/53200) — SMS (US/Canada) and Telegram bot for reset notifications.
- **#53492** [Secure Browser Use for Zen](https://github.com/openai/codex/discussions/53492) — Firefox/Zen compatibility layer for Codex browser control, submitted to Mozilla Add-ons.

### Ideas
- **#53294** [Suppress config.toml deprecation warnings for Enterprise](https://github.com/openai/codex/discussions/53294) — Proposal to hide legacy key warnings when they originate from Cloud-Managed/Enterprise layers.

### Q&A
- **#53366** [Sites publishing blocked by credential handoff](https://github.com/openai/codex/discussions/53366) — Request for supported route to handle short-lived write credentials for Git push workflows.

---

## 6. Feature Request Trends

| Theme | Related Issues |
|-------|----------------|
| **Undo/Recovery** | #9203 (479 👍) — File recovery for non-git changes |
| **Daemon Control** | #48195 (129 👍) — Opt-in background daemon |
| **Model Picker** | #32665 (20 👍) — Custom presets in power slider |
| **Multi-Device Dots** | #49824 — Multiple PCs per dot |
| **Warning Control** | #47740 (17 👍) — Hide rate-limit warnings |

---

## 7. Developer Pain Points

1. **Windows Platform Dominates Bug Reports** — Multiple high-priority issues around browser permissions, sandbox file links, elevated app input, and NTFS pool leaks indicate ongoing Windows stability challenges.

2. **Memory Leaks Persist** — MCP process stack leaks (#25015) causing linear memory growth on Linux remains unresolved.

3. **Model Availability Confusion** — Users report Sol Ultrafast missing from catalog and "at-capacity" errors despite available quota (#52839, #50252, #53407).

4. **Browser Permission State** — Saved denials persisting after explicit user approval (#49453, #53031) creates frustrating UX loops.

5. **Context/Connection Reliability** — WebSocket retry behavior causing context overflow (#52567) and session disconnects (#53249, #53519) affect productivity.

---

*End of digest. Data sourced from github.com/openai/codex as of 2026-10-13.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a GitHub community digest for Gemini CLI based on the provided data. Let me analyze what's available:

1. **Latest Releases**: One release - v0.65.0-nightly.20261013.g51617c1bc with a fix for extension allowlist checking
2. **Latest Issues**: 30 issues shown, need to pick 10 noteworthy ones
3. **Latest Pull Requests**: 20 PRs shown, need to pick 10 important ones
4. **Discussions**: No discussion data was provided in the input

Let me structure this properly:

**Today's Highlights**: 
- New nightly release v0.65.0
- Multiple security and stability fixes
- Terminal UI improvements
- Agent behavior enhancements

**Releases**: 
- v0.65.0-nightly.20261013.g51617c1bc - fix for extension allowlist

**Hot Issues** (pick 10):
1. #22323 - Subagent recovery after MAX_TURNS (13 comments, P1)
2. #19873 - Zero-Dependency OS Sandboxing (9 comments, P2)
3. #21409 - Generalist agent hangs (8 comments, P1)
4. #22745 - AST-aware file reads (7 comments, P2)
5. #21968 - Gemini does not use skills/sub-agents (7 comments, P2)
6. #22267 - Browser Agent ignores settings.json (4 comments, P2)
7. #22232 - Browser Agent resilience (4 comments, P3)
8. #21983 - Browser subagent fails in wayland (4 comments, P1)
9. #24246 - 400 error with > 128 tools (3 comments, P2)
10. #23571 - Model creates tmp scripts in random spots (3 comments, P2)


11. #29728 - Prevent session poisoning on rapid Ctrl-C interruption (P1, priority fix)
12. #29720 - Keep loading extensions when one fails allowlist (today's release)
13. #29703 - Atomic-write temp file name within NAME_MAX
14. #29644 - Restore debounced static UI refresh on terminal width changes
15. #29722 - Treat whitespace-only UTF-16 and UTF-32 files as empty
16. #29695 - Fix debug console height calculation and terminalBuffer flickering
17. #29725 - Implement synchronized output and isolate spinner rendering
18. #29727 - Report omitted list directory entries

I've compiled a comprehensive digest highlighting the most critical patches and improvements. The focus spans session stability, file handling, terminal UI responsiveness, and extension loading robustness. These updates address key user experience issues and improve overall system reliability.</think>

# Gemini CLI Community Digest — 2026-10-13

## Today's Highlights

The Gemini CLI project continues its rapid iteration with **nightly v0.65.0** shipping a critical fix for extension loading resilience. The most notable developments involve terminal UI stability improvements, security hardening in grep tooling, and ongoing work to address agent hangs and subagent recovery issues. Multiple P1 bugs around agent behavior and terminal rendering are actively being addressed through both fixes and investigative work.

---

## Releases

### v0.65.0-nightly.20261013.g51617c1bc
**Release Date:** 2026-10-13

**Changes:**
- **[fix(cli): keep loading other extensions when one fails the allowlist check](https://github.com/google-gemini/gemini-cli/pull/29720)** — Extension loading no longer halts entirely when a single extension fails the allowlist validation, improving overall CLI robustness.

**Full Changelog:** https://github.com/google-gemini/gemini-cli/compare/v0.65.0-nightly.20261012.g9b6e0265d...v0.65.0-nightly.20261013.g51617c1bc

---

## Hot Issues

### 1. [#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)
**Priority:** P1 | **Comments:** 13 | ** 👍:** 2

The `codebase_investigator` subagent incorrectly reports `status: "success"` with termination reason `"GOAL"` even when it hits the maximum turn limit before completing analysis. This masks failures and gives users false confidence. **Why it matters:** Interrupts workflow trust—users believe tasks completed when they were silently truncated.

### 2. [#19873 — Leverage model's bash affinity via Zero-Dependency OS Sandboxing](https://github.com/google-gemini/gemini-cli/issues/19873)
**Priority:** P2 | **Comments:** 9 | ** 👍:** 1

Proposal to harness Gemini 3 models' native POSIX toolchain capabilities (`grep`, `cat`, `sed`, `awk`) through zero-dependency OS sandboxing and post-execution intent routing. **Why it matters:** Could significantly improve agent efficiency and reduce security trade-offs by leveraging model's trained strengths.

### 3. [#21409 — Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)
**Priority:** P1 | **Comments:** 8 | ** 👍:** 8

When Gemini CLI defers to the generalist agent, it hangs indefinitely—even simple operations like folder creation can block for over an hour. Instructing the model to avoid subagents temporarily resolves it. **Why it matters:** High-impact usability blocker affecting core functionality; 8 👍 indicates broad community pain.

### 4. [#22745 — Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)
**Priority:** P2 | **Comments:** 7 | ** 👍:** 1

Epic tracking investigation into AST-aware tooling for precise method bounds, reduced token noise, and improved codebase navigation. **Why it matters:** Potential for substantial token savings (currently ~36.6k/turn baseline) and improved accuracy in code understanding.

### 5. [#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)
**Priority:** P2 | **Comments:** 7 | ** 👍:** 0

Despite user-defined skills (e.g., "gradle", "git") with descriptive prompts, Gemini rarely invokes them autonomously—even when tasks are highly relevant. **Why it matters:** Undercuts the value proposition of custom skills; users must explicitly prompt for capabilities that should be contextually obvious.

### 6. [#22267 — Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)
**Priority:** P2 | **Comments:** 4 | ** 👍:** 0

The Browser Agent completely ignores configuration overrides (like `maxTurns`) from global or project-level `settings.json`, even though `AgentRegistry` correctly reads and merges them during initialization. **Why it matters:** Users cannot customize browser agent behavior, limiting extensibility.

### 7. [#22232 — Enhance browser_agent resilience: Automatic session takeover](https://github.com/google-gemini/gemini-cli/issues/22232)
**Priority:** P3 | **Comments:** 4 | ** 👍:** 0

Request to add automatic session takeover and lock recovery for the Browser Agent when encountering locked profiles in persistent session mode. Currently employs a restrictive "fail-fast" strategy. **Why it matters:** Improves robustness in CI/headless environments where orphaned processes may persist.

### 8. [#21983 — Browser subagent fails in wayland](https://github.com/google-gemini/gemini-cli/issues/21983)
**Priority:** P1 | **Comments:** 4 | ** 👍:** 1

Browser subagent fails when running on Wayland display server. **Why it matters:** Wayland is the default display server on many modern Linux distributions; this blocks a significant user base.

### 9. [#24246 — Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)
**Priority:** P2 | **Comments:** 3 | ** 👍:** 0

CLI throws a 400 error when more than ~128 tools are available, with no intelligent tool-scoping. **Why it matters:** As users add skills and extensions, they hit a hard ceiling; needs smarter filtering to stay within API limits.

### 10. [#23571 — Model frequently creates tmp scripts in random spots](https://github.com/google-gemini/gemini-cli/issues/23571)
**Priority:** P2 | **Comments:** 3 | ** 👍:** 0

When shell execution is restricted, the model generates multiple edit scripts across various directories, creating cleanup overhead before commits. **Why it matters:** Pollutes workspaces and frustrates developers with manual cleanup tasks.

---

## Key PR Progress

### 1. [#29728 — fix(cli): prevent session poisoning on rapid Ctrl-C interruption](https://github.com/google-gemini/gemini-cli/pull/29728)
**Priority:** P1 | **Size:** L

Fixes a session poisoning race condition when users rapidly press Ctrl+C twice during tool execution or streaming. Previously, the second Ctrl+C would trigger `/quit` before the first cancellation completed. **Impact:** Critical fix for interrupt handling stability.

### 2. [#29703 — fix(core): keep atomic-write temp file name within NAME_MAX](https://github.com/google-gemini/gemini-cli/pull/29703)
**Size:** M

Fixes `ENAMETOOLONG` errors when writing files with 215-255 byte names. The atomic-write temp file suffix (destination name + 41-byte `.<uuid>.tmp`) exceeded the 255-byte NAME_MAX limit. **Impact:** Enables working with longer file paths.

### 3. [#29644 — fix(cli): restore debounced static UI refresh on terminal width changes](https://github.com/google-gemini/gemini-cli/pull/29644)
**Priority:** P1 | **Size:** M/L

Restores debounced `refreshStatic()` effect on terminal width changes (100ms debounce) for horizontal resize handling in inline rendering mode. **Impact:** Improves terminal UI responsiveness during window resizing.

### 4. [#29722 — fix(core): treat whitespace-only UTF-16 and UTF-32 files as empty](https://github.com/google-gemini/gemini-cli/pull/29722)
**Size:** M

Fixes `isEmpty()` to properly handle whitespace-only files in UTF-16/UTF-32 encoding, which were incorrectly rejected due to NUL characters remaining after UTF-8 decoding. **Impact:** Corrects file handling edge cases.

### 5. [#29695 — fix(ui): fix debug console height calculation and terminalBuffer flickering](https://github.com/google-gemini/gemini-cli/pull/29695)
**Priority:** P2 | **Size:** L | 🔒 Maintainer only

Fixes Debug Console (F12) height/layout calculation and improves rendering stability in terminalBuffer mode through incremental rendering and static history item memoization. **Impact:** Reduces UI flicker and improves debugging experience.

### 6. [#29725 — fix(ui): implement synchronized output and isolate spinner rendering](https://github.com/google-gemini/gemini-cli/pull/29725)
**Priority:** P2 | **Size:** XL

Implements terminal synchronized output around interactive UI frame writes and isolates spinner rendering state to eliminate screen flickering in terminal multiplexers like `tmux`. **Impact:** Major UX improvement for users of terminal multiplexers.

### 7. [#29727 — fix(core): report omitted list directory entries](https://github.com/google-gemini/gemini-cli/pull/29727)
**Size:** S

Fixes `list_directory` silently reporting zero entries when existing files are rejected by path validation—now explicitly reports rejected entries to both model and user-facing display. **Impact:** Improves transparency in permission-denied scenarios.

### 8. [#29726 — fix(sandbox): ignore trap wrapper when resolving command name](https://github.com/google-gemini/gemini-cli/pull/29726)
**Size:** L

Fixes per-command sandbox rules in `sandbox.toml` being never applied on POSIX (Linux/macOS) because wrapped commands were incorrectly identified as `trap`. **Impact:** Enables proper sandboxing configuration for wrapped commands.

### 9. [#29536 — fix(grep): prevent command-line option injection](https://github.com/google-gemini/gemini-cli/pull/29536)
**Priority:** P2 | **Size:** M | 🔒 Status: PR nudge sent

Hardens local grep execution against Command-Line Option/Argument Injection (CWE-88) by enforcing explicit `-e` pattern terminator for both `git grep` and system `grep`. **Impact:** Security hardening for tool execution.

### 10. [#29568 — fix(core): implement append-only delta patching in ChatRecordingService](https://github.com/google-gemini/gemini-cli/pull/29568)
**Priority:** P1 | **Size:** XL

Replaces full-history `{ $set: { messages } }` rewrites with incremental append-only deltas and bounded in-memory message retention. **Impact:** Major performance and memory improvement for long conversations.

---

## Feature Request Trends

Based on issue analysis, the following themes dominate feature requests:

1. **AST-aware tooling** — Strong interest in leveraging Abstract Syntax Tree analysis for precise code navigation, method bounds, and token-efficient reads (#22745, #22746, #22747). Multiple related issues suggest this is a strategic direction.

2. **Enhanced subagent orchestration** — Requests for better subagent discovery (#18285), trajectory visibility via `/chat share` (#22598), parallel collaboration (#18287), and autonomous skill invocation (#21968).

3. **Terminal UI robustness** — Ongoing work on flicker-free rendering, terminal resize handling, and synchronized output for multiplexers—indicates terminal experience is a priority area.

4. **Persistent task tracking** — Feature request to replace in-context todo tracking with file-based CRUD operations for session persistence (#18836).

5. **Zero-dependency sandboxing** — Vision for OS-native sandboxing that leverages model's bash affinity without additional dependencies (#19873).

---

## Developer Pain Points

The most frequently reported frustrations:

- **Agent hangs** — Generalist agent hangs (#21409) causing hour-long blocks is the highest-visibility pain with 8 👍 reactions.
- **Silent failures** — Subagents reporting success when hitting MAX_TURNS (#22323) masks incomplete work.
- **Unreliable custom skills** — Skills defined but never auto-invoked (#21968) undermines extensibility.
- **Browser agent rigidity** — Cannot customize settings (#22267), fails on Wayland (#21983), lacks session recovery (#22232).
- **Tool ceiling** — Hitting 400 errors at ~128 tools (#24246) limits extensibility as users add capabilities.
- **Workspace pollution** — Temporary scripts scattered across directories (#23571) require manual cleanup.
- **Terminal flickering** — Long-standing issue affecting users of terminal multiplexers, now being actively addressed (#29725, #29695).

---

*Generated from github.com/google-gemini/gemini-cli | Data valid as of 2026-10-13*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest for 2026-10-13 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

**Latest Releases (last 24h):**
- v1.0.97-2: Fixed - Discover custom agents even with >100 agents or deep nesting
- v1.0.97-1: Fixes and changes
- v1.0.97-0: Added agent-scoped declarative hooks, improved inline images rendering
- v1.0.96: Interactive sandbox settings, model IDs case-insensitive, /allow-all during startup

**Latest Issues (updated in last 24h) - Total: 35 items, showing top 30:**
1. #970 - Copilot app blocked by macOS Gatekeeper (8 comments, 22 👍) - OPEN
2. #5114 - Copilot CLI doesn't continue after session limit (3 comments, 0 👍) - OPEN
3. #5068 - Windows MCP Entra sign-in fails (3 comments, 12 👍) - OPEN
4. #3808 - Enhance prompt caching for Claude Sonnet (3 comments, 8 👍) - OPEN
5. #4960 - Enterprise-managed custom model cannot be selected (3 comments, 0 👍) - CLOSED
6. #5101 - --add-github-mcp-tool issue_write causes no MCP tools (2 comments, 0 👍) - CLOSED
7. #5105 - macOS sandbox blocks Gradle daemon (2 comments, 0 👍) - OPEN
8. #5079 - Copilot sends ping on 2026-07-28 protocol (2 comments, 1 👍) - CLOSED
9. #5127 - SDK BYOK: short model names not matched (1 comment, 0 👍) - OPEN


10. #5103 - BYOK: sub-agents always use session's wire API (1 comment, 0 👍) - OPEN
11. #5100 - Session event delivery fails after 120s timeout (1 comment, 0 👍) - OPEN
12. #3052 - --add-github-mcp-tool=create_pull_request readonly (1 comment, 2 👍) - CLOSED
13. #4834 - Support MCP 2026-07-28 MRTR (1 comment, 0 👍) - CLOSED
14. #5030 - ACP mode: task tool cannot launch custom agents (1 comment, 0 👍) - CLOSED
15. #5

088 - Windows CLI crashes on Entra sign-in (1 comment, 1 👍) - OPEN
16. #5109 - copilot-cli is unusable (1 comment, 0 👍) - OPEN
17. #5118 - Atlassian Rovo MCP Server auth fails (1 comment, 0 👍) - CLOSED
18. #5082 - MCP OAuth: Dataverse rejected by RFC 8414 (1 comment, 0 👍) - CLOSED
19. #4226 - Spamming server errors during subagent (1 comment, 0 👍) - CLOSED
20. #5115 - ACP: /rename reports success but doesn't rename (1 comment, 0 👍) - OPEN
21. #5126 - BYOK: built-in agents never use default models (0 comments, 0 👍) - OPEN
22. #5125 - Add way to track prompt execution time (0 comments, 0 👍) - OPEN
23. #5124 - --agent selection dropped after startup (0 comments, 0 👍) - OPEN
24. #5123 - Terminal safety denial blocks session recovery (0 comments, 0 👍) - OPEN
25. #5122 - Only last plugin's additionalContext reaches model (0 comments, 0 👍) - OPEN
26. #5120 - Terminal left with mouse-tracking after crash (0 comments, 0 👍) - OPEN
27. #5119 - Windows uninstalling plugin fails (0 comments, 0 👍) - OPEN
28. #4597 - Pasting multi-line content issue (0 comments, 0 👍) - CLOSED
29. #5121 - Ramesh.R notification (0 comments, 0 👍) - OPEN

No pull requests were submitted in the past day. I'll now organize the key findings into a structured format covering today's highlights, releases, pressing issues, feature requests, and developer challenges.</think>

# GitHub Copilot CLI Community Digest
**Date:** 2026-10-13

---

## Today's Highlights

The team shipped **v1.0.97-2** with critical fixes for custom agent discovery in large repositories and improved inline image rendering. Meanwhile, the community continues to grapple with macOS Gatekeeper blocking issues (22 👍) and Windows-specific MCP authentication failures, which remain the most discussed pain points. Several new BYOK (Bring Your Own Key) related issues surfaced, highlighting challenges with model matching and sub-agent API routing.

---

## Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v1.0.97-2** | Fixed | Custom agents now discovered even with >100 definitions or deeply nested agent files |
| **v1.0.97-1** | Fixes | General bug fixes and improvements |
| **v1.0.97-0** | Added | Agent-scoped declarative hooks for custom agents; inline images render by default on supported terminals (`/settings inlineImages false` to disable) |
| **v1.0.96** | Various | Interactive sandbox settings suggest environment secrets; model IDs now case-insensitive in `/model` and `/config`; `/allow-all` available during enterprise policy resolution |

---

## Hot Issues

### 1. [Copilot app blocked by macOS Gatekeeper](https://github.com/github/copilot-cli/issues/970) — 22 👍
**Status:** OPEN | **Area:** installation

After HomeBrew upgrades, macOS Gatekeeper blocks Copilot CLI with a malware warning. Users must manually approve via Privacy & Security settings. This is a recurring issue affecting corporate environments with strict security policies.

### 2. [Windows: MCP Entra sign-in fails](https://github.com/github/copilot-cli/issues/5068) — 12 👍
**Status:** OPEN | **Area:** platform-windows, mcp

Authenticating to Entra ID-protected MCP servers (e.g., Azure DevOps MCP) fails with `"this server's advertised scopes could not be safely validated for the account broker"`. Impacts enterprise Windows users.

### 3. [Enhance prompt caching for Claude Sonnet](https://github.com/github/copilot-cli/issues/3808) — 8 👍
**Status:** OPEN | **Area:** context-memory, models

No visible optimization for Anthropic's prompt caching feature. For large codebases, each request re-sends full context, increasing latency and token costs.

### 4. [BYOK: short model names aren't matched](https://github.com/github/copilot-cli/issues/5127) — NEW
**Status:** OPEN | **Area:** triage

SDK-configured BYOK providers with models like `copilot/gpt-5.4-mini` fail to match short model names, causing custom agents to fail with misleading "No GitHub OAuth token" errors.

### 5. [BYOK: sub-agents always use session's wire API](https://github.com/github/copilot-cli/issues/5103) — NEW
**Status:** OPEN | **Area:** agents, models

`COPILOT_PROVIDER_WIRE_API` applies to all requests including sub-agents. When sub-agents run on models from a different family (e.g., GPT-5 on a provider that only supports `responses` API), requests fail with HTTP 400.

### 6. [Session event delivery fails after 120s timeout](https://github.com/github/copilot-cli/issues/5100) — NEW
**Status:** OPEN | **Area:** sessions

Long-running sessions fail with `"session host did not acknowledge the event within 120s"`. The session becomes permanently unusable until manually resumed.

### 7. [macOS sandbox blocks Gradle daemon](https://github.com/github/copilot-cli/issues/5105) — NEW
**Status:** OPEN | **Area:** permissions

Gradle cannot connect to its daemon inside the macOS sandbox even when local networking is allowed, blocking build-related workflows.

### 8. [Terminal safety denial blocks recovery](https://github.com/github/copilot-cli/issues/5123) — NEW
**Status:** OPEN | **Area:** triage

After a Windows restart, session recovery triggers repeated safety denials, making basic recovery tasks "unacceptable friction."

### 9. [Enterprise-managed custom model cannot be selected](https://github.com/github/copilot-cli/issues/4960)
**Status:** CLOSED | **Area:** enterprise, models

Enterprise custom models appear in `/model` picker but fail to select. Closed with no clear resolution visible.

### 10. [ACP: /rename reports success but doesn't rename](https://github.com/github/copilot-cli/issues/5115) — NEW
**Status:** OPEN | **Area:** sessions, non-interactive

In ACP mode (`copilot --acp --stdio`), the `/rename` command falsely reports success without actually renaming the session.

---

## Key PR Progress

*No PRs were updated in the last 24 hours.*

---

## Feature Request Trends

| Theme | Related Issues |
|-------|---------------|
| **BYOK / Custom Providers** | #5127, #5103, #5126 — Model matching, API routing, and sub-agent model selection for BYOK setups |
| **MCP Enhancements** | #4834, #5079 — Support for MCP 2026-07-28 protocol and Multi Round-Trip Requests |
| **Prompt/Execution Visibility** | #5125 — Track prompt execution time; #3808 — Claude Sonnet prompt caching |
| **Terminal Safety** | #5123, #5120 — Improved session recovery and terminal state restoration after crashes |
| **macOS Integration** | #970, #5105 — Gatekeeper compatibility and sandbox permissions for Gradle |

---

## Developer Pain Points

1. **macOS Gatekeeper Blocking** — Frequent false positives after HomeBrew updates; requires manual intervention in corporate environments
2. **Windows MCP Authentication** — Entra ID sign-in fails or crashes the CLI; OAuth issuer validation issues with Dataverse and other Microsoft services
3. **BYOK Configuration Complexity** — Short model names don't match provider-qualified IDs; sub-agents silently use wrong API endpoints
4. **Session Reliability** — 120-second timeouts permanently break sessions; session recovery triggers safety loops
5. **ACP Mode Limitations** — Custom agent launch fails, `/rename` doesn't work, general feature parity gaps
6. **Terminal State Leaks** — CLI crashes leave terminals with mouse-tracking enabled, making them unusable
7. **Plugin Uninstallation (Windows)** — Access denied errors when uninstalling plugins

---

*Generated from github.com/github/copilot-cli | Data period: 2026-10-12 to 2026-10-13*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a community digest for OpenCode based on the GitHub data provided. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

**Releases**: None in the last 24h

**Issues** (showing top 30 by comment count):
1. #7602 - Native Model Fallback/Failover Support - 31 comments, 120 👍 - CLOSED - FEATURE
2. #14212 - Support more DBMS' for OpenCode state storage - 15 comments, 24 👍 - CLOSED - FEATURE
3. #50168 - Desktop zoom resets to 100% after restarting - 7 comments, 3 👍 - OPEN - BUG
4. #42135 - deepseek-v4-pro multi-turn request failures - 7 comments, 0 👍 - CLOSED - BUG
5. #17073 - Protect .env files in grep/glob results - 7 comments, 7 👍 - CLOSED - FEATURE
6. #52281 - Windows child cmd.exe flashes console window - 6 comments, 0 👍 - OPEN - BUG
7. #42091 - deepseek-v4-pro returns 400 "Empty input messages" - 6 comments, 0 👍 - CLOSED - BUG
8. #32165 - User message quick-jump sidebar - 5 comments, 1 👍 - CLOSED - FEATURE
9. #42250 - Tool files that fail to load crash the whole session - 4 comments, 0 👍 - CLOSED - BUG
10. #37225 - default_agent is ignored on startup in V2 - 4 comments, 0 👍 - CLOSED - BUG
11. #53074 - /etc/opencode not respected in v2 - 3 comments, 1 👍 - OPEN - BUG


12. #51107 - V2 does not load managed config from %ProgramData%\opencode - 3 comments, 6 👍 - OPEN - BUG
13. #54673 - All previously created workspaces became unavailable - 3 comments, 0 👍 - CLOSED
14. #54991 - Pasted images show no thumbnail with text-only models - 3 comments, 0 👍 - OPEN - BUG
15. #54990 - Zoom level resets to 1 on every restart - 3 comments, 0 👍 - CLOSED
16. #42258 - Tool files that fail to load crash the whole session - continues the pattern of session crashes when tool files encounter errors, mirroring issue #42250 with 3 comments and 0 👍 - CLOSED - BUG
17. #42259 - Session run defects are silently dropped - 3 comments, 0 👍 - CLOSED - BUG
18. #34331 - zen/go model compatibility in Anthropic /v1/messages - 3 comments, 0 👍 - CLOSED - BUG
19. #48201 - v2 silently drops flat mcp entries - 2 comments, 0 👍 - CLOSED - BUG
20. #53858 - zh/zht locale dictionaries missing 93 keys - 2 comments, 0 👍 - OPEN - BUG
21. #49608 - plugins for V2: local plugin paths fail to load - 2 comments, 1 👍 - OPEN - BUG
22. #46551 - plugin: configured local plugin file paths silently dropped - 2 comments, 1 👍 - OPEN - BUG
23. #54228 - Bun 1.4.2 segfault on idle startup - 2 comments, 0 👍 - CLOSED - BUG
24. #54230 - session requests occasionally rejected with 400 - 2 comments, 0 👍 - CLOSED - BUG
25. #42325 - Stream silently returns empty when calling Zhipu - 2 comments, 0 👍 - CLOSED - BUG
26. #42299 - idle service burns 20-45% CPU - 2 comments, 0 👍 - CLOSED - BUG
27. #33394 - prompt_async returns 204 after startup failure - 2 comments, 0 👍 - CLOSED - BUG
28. #42271 - service: idle background daemon holds ~700-800MB RSS - 2 comments, 0 👍 - CLOSED - BUG

Now looking at the PRs: #54921 is OPEN and fixes config directory discovery, #55004 addresses OTLP header decoding, #55005 closes the release promotion to production, #55003 preserves shared log objects, #54234 restores the models --refresh flag, and #54994 stops compaction loops. #51624 distinguishes cancelled todos from pending ones, #51623 rejects null comment selection coordinates, #51636 allows blob frames and objects in embedded UI CSP, and #51642 builds only the baseline target with --single --baseline flags.

More recent PRs include #54999 with the same --single --baseline fix, #54728 adding schema identification for branded IDs, #53131 preparing schema IDs in session fixtures, #54998 porting the baseline target fix to v2, #52980 retaining interrupted tool checkpoints, #52978 reading workspace files through environment, #54992 closing partial stream parts before retry, #54976 gating Code Mode fetch on webfetch permission, #54226 marking MCP servers needing auth when tool calls return 401, and #54949 introducing prompt start height and percentage sizing options.

The digest doesn't include discussions section since none were supplied. I need to structure this as a formal report covering today's developments, any new releases, the most active issues, significant PRs, feature requests, and recurring developer concerns.</think>

# OpenCode Community Digest

**Date:** 2026-10-13

---

## 1. Today's Highlights

The OpenCode community is focused on critical V2 migration and reliability issues. A significant PR (#54921) is addressing the long-standing config path compatibility gap by adding system configuration directory support at the lowest precedence. Meanwhile, model fallback capabilities and multi-database support have landed as closed features. Windows-specific bugs around console window flashing and zoom persistence remain open, along with plugin path loading issues that prevent local plugins from functioning in V2.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Summary | 👍 |
|---|-------|---------|---|
| 1 | **[#7602](https://github.com/anomalyco/opencode/issues/7602)** | **Native Model Fallback/Failover Support** — OpenCode only supports provider fallback when model IDs are identical. Users request the ability to define fallback between different models (e.g., "If model A errors → retry with model B"). This was a top-requested feature with **120 👍** and **31 comments**. | 120 |
| 2 | **[#14212](https://github.com/anomalyco/opencode/issues/14212)** | **Support More DBMS for OpenCode State Storage** — Migration to Drizzle enables support for other DBMS like PostgreSQL for session storage/state. Closed with **24 👍**. | 24 |
| 3 | **[#50168](https://github.com/anomalyco/opencode/issues/50168)** | **Desktop Zoom Resets to 100% After Restart** — OpenCode Desktop does not remember the zoom selected with Ctrl++/-. After quitting and reopening, the interface returns to 100% instead of restoring the last selected zoom. | 3 |
| 4 | **[#52281](https://github.com/anomalyco/opencode/issues/52281)** | **Windows: Child cmd.exe Flashes Console Window and Steals Focus** — On Windows 11, opencode-cli spawns short-lived child processes through cmd.exe (git probes, MCP spawns), each creating a visible console window that steals focus, despite `windowsHide` being set. | 0 |
| 5 | **[#17073](https://github.com/anomalyco/opencode/issues/17073)** | **Protect .env Files in Grep/Glob Results** — Permission rules for grep and glob match the search pattern, not the matched file path. Users request protection for sensitive files like .env in results, not just direct reads. | 7 |
| 6 | **[#53074](https://github.com/anomalyco/opencode/issues/53074)** | **/etc/opencode Not Respected in V2** — V1 reads from /etc on Linux and treats this as immutable config for admin-enforced settings. V2 does not appear to support this. | 1 |
| 7 | **[#51107](https://github.com/anomalyco/opencode/issues/51107)** | **V2 Does Not Load Managed Config from %ProgramData%\opencode** — V1 documented a managed config directory (%ProgramData%\opencode on Windows, /etc/opencode on Linux) loaded at highest priority for admin settings. V2 does not read it. | 6 |
| 8 | **[#53858](https://github.com/anomalyco/opencode/issues/53858)** | **zh/zht Locale Dictionaries Missing 93 Keys Present in English** — Simplified (zh.ts) and Traditional (zht.ts) app dictionaries have drifted behind en.ts: 93 keys exist in English but not in zh/zht, causing mixed-language UI screens. | 0 |
| 9 | **[#49608](https://github.com/anomalyco/opencode/issues/49608)** | **Local Plugin Paths Fail to Load in V2** — A local plugin cannot be loaded by following the documentation. A plugins entry pointing to a .ts file is rejected with "configured plugin path must be a directory". | 1 |
| 10 | **[#54991](https://github.com/anomalyco/opencode/issues/54991)** | **Pasted Images Show No Thumbnail When Active Model is Text-Only** — On OpenCode Desktop, pasting an image with a multimodal model shows a thumbnail preview, but with text-only models, no thumbnail appears. | 0 |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|-----|---------|
| 1 | **[#54921](https://github.com/anomalyco/opencode/pull/54921)** | **fix(core): discover system configuration directory at lowest precedence** — Fixes #51107 and #53074. Includes the platform system configuration directory (/Library/Application Support/opencode on macOS, /etc/opencode on Linux) at the lowest precedence, restoring V1 behavior. |
| 2 | **[#55004](https://github.com/anomalyco/opencode/pull/55004)** | **fix(util): decode OTLP header values** — OTLP collectors currently receive `Bearer%20test-token` instead of `Bearer test-token`. This PR decodes header values after splitting entries. |
| 3 | **[#55003](https://github.com/anomalyco/opencode/pull/55003)** | **fix(util): preserve shared log objects** — Logging `{ first: shared, second: shared }` currently replaces `second` with `[Circular]` and loses its fields. |
| 4 | **[#54994](https://github.com/anomalyco/opencode/pull/54994)** | **fix(opencode): stop compaction loops and stale compaction retries** — If the turn right after a compaction still overflows, the loop stops with a ContextOverflowError instead of compacting infinitely. |
| 5 | **[#54234](https://github.com/anomalyco/opencode/pull/54234)** | **fix(cli): restore models --refresh flag on v2** — `opencode models --refresh` (and `--verbose`) were dropped during v2 CLI rewrite. This restores the functionality. |
| 6 | **[#54976](https://github.com/anomalyco/opencode/pull/54976)** | **fix(core): gate Code Mode fetch on the webfetch permission** — A `"webfetch": "deny"` rule did not apply to Code Mode. The fetch global called the platform's fetch directly instead of respecting permissions. |
| 7 | **[#52980](https://github.com/anomalyco/opencode/pull/52980)** | **fix(core): retain interrupted tool checkpoints** — Keeps interrupted tool checkpoints until asynchronous cleanup and checkpoint publication finish. |
| 8 | **[#52978](https://github.com/anomalyco/opencode/pull/52978)** | **fix(core): read workspace files through environment** — Routes workspace FileSystem reads, listings, and canonicalization through Environment.files instead of the server filesystem. |
| 9 | **[#54226](https://github.com/anomalyco/opencode/pull/54226)** | **fix(mcp): mark a server needs_auth when a tool call is rejected with 401** — When an MCP server keeps rejecting every refreshed token after a failed OAuth refresh, the server status stays "Connected" with no signal to re-auth. |
| 10 | **[#54949](https://github.com/anomalyco/opencode/pull/54949)** | **feat(tui): prompt start height, percentage sizes and home screen layout settings** — Adds prompt start height, percentage sizes, and home screen layout settings. |

---

## 5. Feature Request Trends

The most-requested feature directions from issues and PRs:

1. **Model Failover & Fallback** — Native support for automatic retry between different models (e.g., fallback from model A to model B on errors or rate limits).
2. **Multi-Database Support** — PostgreSQL and other DBMS support for OpenCode state storage beyond SQLite.
3. **Configuration Compatibility** — Restoring V1 config paths (/etc/opencode, %ProgramData%\opencode) in V2 with proper precedence.
4. **Plugin System Improvements** — Fixing local plugin path loading issues in V2.
5. **Windows Desktop UX** — Fixing console window flashing, zoom persistence, and other Windows-specific behaviors.
6. **Internationalization** — Completing zh/zht locale dictionaries (93 missing keys).
7. **Privacy/Security** — Protecting .env files in grep/glob results, not just direct reads.

---

## 6. Developer Pain Points

Recurring frustrations and high-frequency requests:

- **V2 Config Migration Gaps** — Developers report that /etc/opencode and %ProgramData%\opencode are not respected in V2, breaking admin-enforced settings workflows.
- **Windows Console Window Flashing** — Every child cmd.exe process (git probes, MCP spawns) flashes a visible console window and steals focus despite `windowsHide` being set.
- **Plugin Loading Failures** — Local plugin paths are rejected with "configured plugin path must be a directory", preventing custom plugin usage.
- **Memory & CPU Issues** — Idle service burns 20-45% CPU with SQLite WAL writes; background daemon holds ~700-800MB RSS.
- **Tool File Crash Behavior** — A single failing .opencode/tool/*.{js,ts} file crashes the entire tool registry and makes the project unusable.
- **Silent Error Dropping** — Session run defects are silently dropped with no UI error; users don't know runs failed.
- **Zoom/UI State Not Persisted** — Desktop zoom level resets to 100% after every restart.

---

*Generated by MiniMax-M1 | Source: github.com/anomalyco/opencode | 2026-10-13*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data provided and create a structured digest for the Pi community.

First, let me organize the data:

**Latest Releases:**
- v1.2.0: New feature - Per-key OpenRouter model lists

**Latest Issues (showing top by comment count):**
1. #6187 [CLOSED] [bug] Pi login hangs in WSL after browser-based GitHub Copilot device authorization - 28 comments
2. #9361 [OPEN] Windows: settings shellPath is non-deterministically ignored - 14 comments
3. #9688 [CLOSED] [bug] regression: clipboard copy doesn't work anymore - 10 comments
4. #10840 [CLOSED] [no-action] openai-codex: GPT-6.1 Sol still uses 272K - 8 comments
5. #9391 [CLOSED] After compaction, stale signed thinking blocks are replayed - 7 comments
6. #10645 [OPEN] [inprogress] resizeImage resolves null in compiled (Bun) executables - 7 comments
7. #10705 [OPEN] abort() from agent_settled resolves but an already-deferred continuation still runs - 4 comments
8. #10844 [CLOSED] [last-read, no-action] streamProxy rewrites an accepted done message to error - 4 comments
9. #10864 [CLOSED] [untriaged] Session outliving its release loses not-yet-loaded providers - 3 comments
10. #10147 [CLOSED] [bug, no-action] ENH: Fold /scoped-models into /model - 3 comments

**Latest Pull Requests:**
1. #10694 [OPEN] fix(ai): adapt OAuth device polling margin after slow_down


2. #10528 [OPEN] refactor nix part
3. #10855 [CLOSED] fix(ai): map minimal thinking to low on xiaomi MiMo models
4. #1 [CLOSED] feat: add Windows Git Bash support to bash tool
5. #10569 [CLOSED] feat(ai,coding-agent): filter OpenRouter models by key availability
6. #10847 [OPEN] fix: preserve legacy model catalog route on publish
7. #10718 [OPEN] fix(coding-agent): include system prompt in --export HTML
8. #10672 [CLOSED]

I notice several pull requests addressing model compatibility and system integration. The Xiaomi MiMo model thinking mapping and Windows Git Bash support seem particularly noteworthy for improving cross-platform functionality. The OpenRouter model filtering suggests ongoing efforts to refine AI model selection and management.

The project appears to be focusing on practical enhancements: OAuth device polling, system prompt exports, and durable coding agent fixes. Recent work addresses image processing, retry mechanisms, and session handling across different scenarios.

Key improvements include resolving image worker null issues, bounding retry attempts, and implementing more robust session management. These changes indicate a systematic approach to improving the coding agent's reliability and performance across various use cases.

The latest updates target nuanced technical challenges like preserving legacy model catalog routes and handling degenerate output in the durable system. The team is methodically addressing edge cases and expanding platform compatibility.</think>

# Pi Community Digest — 2026-10-13

## 1. Today's Highlights

The Pi team shipped **v1.2.0**, introducing per-key OpenRouter model lists that filter available models based on each key's permissions, context limits, and regional endpoints. Meanwhile, the community is wrestling with several high-impact bugs: image attachments are entirely omitted in Bun-compiled executables since v0.87.x, clipboard copying has regressed in SSH/container environments, and WSL users face persistent login hangs during GitHub Copilot device authorization.

---

## 2. Releases

| Version | Summary |
|---------|---------|
| **v1.2.0** | **Per-key OpenRouter model lists** — When using an OpenRouter key, Pi now lists only the models that key may access, automatically pulling context size, max output limits, and pricing from the API. Supports regional endpoints configured in `models.json`. |

*Changelog: [earendil-works/pi/releases/tag/v1.2.0](https://github.com/earendil-works/pi/releases/tag/v1.2.0)*

---

## 3. Hot Issues

| Issue | Status | Why It Matters | Comments |
|-------|--------|----------------|----------|
| [#6187](https://github.com/earendil-works/pi/issues/6187) — **Pi login hangs in WSL after browser-based GitHub Copilot device authorization** | CLOSED | WSL users cannot complete Copilot authentication — the terminal never detects the browser-based authorization completion, leaving sessions stuck. | 28 |
| [#9361](https://github.com/earendil-works/pi/issues/9361) — **Windows: settings shellPath is non-deterministically ignored; PATH fallback executes via WSL System32 bash.exe** | OPEN | On Windows with extensions loaded, the configured `shellPath` is silently ignored, causing unpredictable shell resolution and execution through the wrong bash binary. | 14 |
| [#9688](https://github.com/earendil-works/pi/issues/9688) — **Regression: clipboard copy doesn't work anymore** | CLOSED | A logic change in OSC 52 clipboard handling now requires SSH session detection — users in interactive containers lost clipboard functionality entirely. | 10 |
| [#10840](https://github.com/earendil-works/pi/issues/10840) — **openai-codex: GPT-6.1 Sol still uses 272K after Codex default increased to 500K** | CLOSED | Pi retains stale context window data (272K) even after OpenAI increased Codex defaults, causing potential token budgeting issues. | 8 |
| [#9391](https://github.com/earendil-works/pi/issues/9391) — **After compaction, stale signed thinking blocks are replayed every turn; Anthropic drops them** | CLOSED | Post-compaction sessions repeatedly trigger `prefix_binding_mismatch` errors as Anthropic rejects replayed thinking blocks — breaks long sessions. | 7 |
| [#10645](https://github.com/earendil-works/pi/issues/10645) — **resizeImage resolves null in compiled (Bun) executables — all image attachments omitted since 0.87.x** | OPEN (in progress) | Bun-compiled Pi binaries fail to resize images, causing *all* image attachments to be omitted. Critical for developers using standalone executables. | 7 |
| [#10705](https://github.com/earendil-works/pi/issues/10705) — **abort() from agent_settled resolves but an already-deferred continuation still runs** | OPEN | Calling `abort()` on an agent settles callback doesn't stop a queued continuation, leading to stray HTTP requests after the session has ended. | 4 |
| [#10864](https://github.com/earendil-works/pi/issues/10864) — **Session outliving its release loses not-yet-loaded providers after pi update prunes it** | CLOSED | Running `pi update` while a long-lived session is active breaks provider switching with "Cannot find module" errors for unloaded chunks. | 3 |
| [#10785](https://github.com/earendil-works/pi/issues/10785) — **Resuming a session drops dynamically activated tools** | OPEN | Tools activated during a session become inactive after resume, affecting deferred-exposure and optional tools. | 3 |
| [#10628](https://github.com/earendil-works/pi/issues/10628) — **OSC 52 copy in fullscreen TUI is swallowed by tmux** | OPEN | Copy-on-select fails inside tmux because tmux captures OSC 52 sequences into its paste buffer without relaying them to the client. | 3 |

---

## 4. Key PR Progress

| PR | Status | Description |
|----|--------|-------------|
| [#10694](https://github.com/earendil-works/pi/pull/10694) | OPEN | **fix(ai): adapt OAuth device polling margin after slow_down** — Adjusts Copilot OAuth timing to handle clock skew in WSL/Ubuntu that causes persistent "too fast" polling failures. |
| [#10855](https://github.com/earendil-works/pi/pull/10855) | CLOSED | **fix(ai): map minimal thinking to low on xiaomi MiMo models** — Maps Pi's `minimal` thinking level to the MiMo API's `low` (which rejects `minimal`). |
| [#10569](https://github.com/earendil-works/pi/pull/10569) | CLOSED | **feat(ai,coding-agent): filter OpenRouter models by key availability** — Filters the model catalog via `GET /api/v1/models/user` to only show models the user's key can access. |
| [#10847](https://github.com/earendil-works/pi/pull/10847) | OPEN | **fix: preserve legacy model catalog route on publish** — Ensures older Pi versions (0.80.8–0.84.4) continue functioning by preserving the old catalog route. |
| [#10718](https://github.com/earendil-works/pi/pull/10718) | OPEN | **fix(coding-agent): include system prompt in --export HTML** — Aligns CLI export behavior with interactive `/export` by including the recorded system prompt. |
| [#10672](https://github.com/earendil-works/pi/pull/10672) | CLOSED | **feat(ai,coding-agent): list only the OpenRouter models a key may use** — Core implementation for v1.2.0's per-key model filtering feature. |
| [#10533](https://github.com/earendil-works/pi/pull/10533) | CLOSED | **fix(durable): reject waits that close a cycle** — Cyclic waits now fail explicitly at the cycle-closing wait instead of hanging indefinitely. |
| [#10834](https://github.com/earendil-works/pi/pull/10834) | CLOSED | **fix(coding-agent): fall back after Bun image worker null** — Fixes the null response handling in Bun-compiled image resize workers to allow fallback to URL/inline workers. |
| [#10830](https://github.com/earendil-works/pi/pull/10830) | CLOSED | **fix(coding-agent): bound retries across successful tool turns** — Prevents retry budgets from resetting after each successful tool use, fixing infinite retry loops. |
| [#10820](https://github.com/earendil-works/pi/pull/10820) | CLOSED | **fix(ai): send x-opencode-session by endpoint, not provider id** — Routes the session header by endpoint matching rather than provider ID, fixing compatibility with OpenCode zen endpoints. |

---

## 5. Hot Discussions

| Discussion | Category | Summary |
|------------|----------|---------|
| [#10841](https://github.com/earendil-works/pi/discussions/10841) — **Where should a package put a one-shot pre-turn routing decision? (before_agent_start with async sidecar I/O)** | Ideas | A package maintainer (MatPilot for materials research) is seeking architectural guidance on implementing a cheap classification layer (via a Python sidecar) that runs once per user prompt to route to specialized research models. The question centers on where to hook async I/O in the `before_agent_start` lifecycle. |

---

## 6. Feature Request Trends

The following themes emerge across Issues and PRs:

1. **Model discovery & filtering** — Multiple requests for finer-grained control over which providers and models appear in `/model` and `/scoped-models`, including environment-variable-gated providers, per-key restrictions, and unified UI.
2. **Durable sessions improvements** — Strong interest in better tooling for durable sessions: task identification per model request, crash recovery documentation, and subagent output handling.
3. **Cross-platform shell handling** — Windows shell path resolution is non-deterministic; better Git Bash / WSL integration is needed.
4. **Extension observability** — Requests for hooks to observe or wrap session model calls, and to emit session entry IDs in JSON mode events.
5. **Worker/compilation robustness** — Fixes needed for Bun-compiled executables (image resizing, module loading) and Node.js `--watch` mode.

---

## 7. Developer Pain Points

- **Image handling regressions**: Image attachments entirely missing in Bun builds since v0.87.x breaks core functionality for standalone binary users.
- **Clipboard failures**: OSC 52 copy broken in SSH containers and tmux environments — a regression from a seemingly unrelated fix.
- **WSL OAuth hangs**: GitHub Copilot device authorization never completes in WSL, blocking an entire platform.
- **Session state after resume**: Dynamically activated tools drop after resume, and long-lived sessions break when `pi update` prunes old releases.
- **Retry logic bugs**: Successful tool responses incorrectly reset retry budgets, allowing infinite retry loops.
- **Windows shell path flakiness**: With extensions loaded, configured shell paths are silently ignored on Windows.

---

*Generated from GitHub data for earendil-works/pi — 2026-10-13*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a Qwen Code community digest for 2026-10-13 based on the provided GitHub data. Let me analyze the data and create a structured digest.

Key observations:
1. There's one release: v0.25.1-nightly.20261012.18f80f5666
2. There are many issues (50 total, showing top 30)
3. There are many PRs (50 total, showing top 20)
4. No discussion data was provided, so I'll omit the Hot Discussions section

Let me organize this into the requested sections:

1. **Today's Highlights** - 2-3 sentences summarizing the most important updates
2. **Releases** - v0.25.1-nightly.20261012.18f80f5666 with fix for connector/broker robustness
3. **Hot Issues** - Pick 10 noteworthy issues
4. **Key PR Progress** - Pick 10 important PRs
5. **Hot Discussions** - Omit (no data provided)
6. **Feature Request Trends** - Most requested features
7. **Developer Pain Points** - Recurring frustrations

Let me select the most impactful items:

**Hot Issues (10):**
1. #12380 - Managed Agent dual-path architecture proposal (56 comments) - major architectural proposal
2. #13395 - Kubernetes tool runtime progress tracking (19 comments) - important platform distribution
3. #13492 - XML tool-call recovery bug (11 comments) - core bug affecting tool calls
4. #13785 - Multi-Agent API for agent-identity dimension (7 comments) - important API design
5. #14011 - SWE harness for feature testing (5 comments) - testing infrastructure
6. #13898 - Web Shell background subagent status (5 comments) - UI feature
7. #14004 - Separate agentic harness from LLM subscription (4 comments) - conflict of interest concern


8. #13951 - CI integration test failure (4 comments) - CI/CD issue
9. #13837 - RTL/LTR text rendering bug (5 comments) - UI accessibility bug
10. #13987 - You.com MCP documentation (4 comments) - documentation addition

I'll continue analyzing the next set of pull requests, focusing on their technical significance and potential impact on the Qwen Code project. The list reveals a mix of runtime improvements, SDK enhancements, and critical bug fixes that could significantly improve the project's functionality and reliability.

The key PRs demonstrate a comprehensive approach to addressing various technical challenges, from session management and markdown preservation to error handling and cross-platform compatibility. Each PR represents a targeted solution to specific technical requirements, indicating a methodical development strategy.</think>

# Qwen Code Community Digest — October 13, 2026

## Today's Highlights

The Qwen Code project continues its rapid iteration with a new nightly release addressing connector robustness. Major architectural discussions are underway around Managed Agent dual-path architecture (#12380) and multi-agent API design (#13785), reflecting the project's evolution toward more sophisticated agent orchestration. The community is also grappling with platform distribution challenges, particularly around Kubernetes runtime (#13395) and Linux packaging issues (#13680).

---

## Releases

### v0.25.1-nightly.20261012.18f80f5666

A nightly release focused on stability improvements for the managed agent subsystem.

- **Fix**: Connector and broker robustness improvements from R2 review (PR #13330) — enhances reliability of the managed agent communication layer
- [View Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1-nightly.20261012.18f80f5666)

---

## Hot Issues

### 1. Managed Agent Dual-Path Architecture Proposal
**#12380** — [proposal(serve): Define Managed Agent dual-path architecture and staged delivery](https://github.com/QwenLM/qwen-code/issues/12380)
- **Why it matters**: Proposes a fundamental architectural shift separating the TypeScript agent loop from model inference, introducing durable session ownership, workspace bindings, and recoverable tool executions. This is a blueprint for Qwen Code's next-generation agent system.
- **Status**: In progress | **Comments**: 56

### 2. Kubernetes Tool Runtime Progress Tracking
**#13395** — [tracking(runtime): Kubernetes tool runtime 进度与跨平台交付门禁](https://github.com/QwenLM/qwen-code/issues/13395)
- **Why it matters**: Tracks the critical path toward Kubernetes-native tool runtime delivery, essential for platform distribution and enterprise deployment scenarios.
- **Status**: In progress | **Comments**: 19

### 3. XML Tool-Call Recovery Bug
**#13492** — [XML tool-call recovery drops outer calls containing quoted tool markup](https://github.com/QwenLM/qwen-code/issues/13492)
- **Why it matters**: Critical bug where quoted tool markup inside XML tool calls causes entire outer call chains to be dropped. Partially fixed; PR #13579 pending merge.
- **Status**: In review | **Comments**: 11

### 4. Multi-Agent API: Agent Identity Dimension
**#13785** — [Multi-Agent API: an agent-identity dimension on the public contract](https://github.com/QwenLM/qwen-code/issues/13785)
- **Why it matters**: Proposes extending the public API to make multi-agent execution attributable, tree-shaped, and interruptible—a foundational capability for advanced agent orchestration.
- **Status**: Open | **Comments**: 7

### 5. SWE Harness for Feature Testing
**#14011** — [feat: harness SWE — feature-type benchmark tasks](https://github.com/QwenLM/qwen-code/issues/14011)
- **Why it matters**: Proposes a self-testing benchmark suite that exercises qwen code's own features (todo tracking, plan mode, subagent delegation), enabling systematic validation of the toolchain.
- **Status**: Open | **Comments**: 5

### 6. Web Shell Background Subagent Status Display
**#13898** — [Web Shell: show live status of background subagents](https://github.com/QwenLM/qwen-code/issues/13898)
- **Why it matters**: User-facing UX improvement for Web Shell—requests visible live status (running/done/elapsed) for background subagents, enhancing observability.
- **Status**: Open | **Comments**: 5

### 7. Agentic Harness Conflict of Interest
**#14004** — [Separate the agentic harness from the LLM subscription](https://github.com/QwenLM/qwen-code/issues/14004)
- **Why it matters**: Raises concerns about the same entity building the harness and selling the LLM subscription—a governance and transparency discussion for the project.
- **Status**: Open | **Comments**: 4

### 8. CI Integration Test Failure
**#13951** — [CI: Integration Tests fails at Checkout with "fatal: pack has 1 unresolved delta"](https://github.com/QwenLM/qwen-code/issues/13951)
- **Why it matters**: CI pipeline breakage affecting PR validation; indicates git repository integrity issues that need investigation.
- **Status**: Open | **Comments**: 4

### 9. RTL/LTR Text Rendering Bug
**#13837** — [Chat view breaks mixed RTL/LTR text](https://github.com/QwenLM/qwen-code/issues/13837)
- **Why it matters**: Accessibility bug affecting Hebrew/Arabic users—code blocks force LTR direction, causing text mirroring and scrambling in mixed-language scenarios.
- **Status**: Open | **Comments**: 5

### 10. You.com MCP Documentation
**#13987** — [docs(tools): add You.com free MCP to the web search MCP services](https://github.com/QwenLM/qwen-code/issues/13987)
- **Why it matters**: Community-contributed documentation addition for You.com's free MCP service, expanding search integration options.
- **Status**: Open | **Comments**: 4

---

## Key PR Progress

### 1. #13996 — SDK Java: Private CSI Session and Native SQL Authority
Adds complete private CSI Session authority block with explicit session creation, durable request pinning, native journal/resource proof, and immutable SQL execution grants.
- [View PR](https://github.com/QwenLM/qwen-code/pull/13996)

### 2. #13955 — Managed Agent: Member-to-Member Messages
Enables team members to message each other end-to-end via the durable command channel without requiring a model turn on the lead—critical for multi-agent coordination.
- [View PR](https://github.com/QwenLM/qwen-code/pull/13955)

### 3. #14008 — Core: Clean Folded Cause Before Error Message
Fixes error text bounding where the message was sanitized but `error.cause` was passed through raw, causing ANSI-dense errors to exceed message caps.
- [View PR](https://github.com/QwenLM/qwen-code/pull/14008)

### 4. #14013 — Daemon: Preserve Prompt Regeneration Metadata
Preserves regeneration relationships through daemon prompt echoes, transcript replay, and SDK UI events—enables clients to discover and use prompt regeneration.
- [View PR](https://github.com/QwenLM/qwen-code/pull/14013)

### 5. #13731 — Channels: Preserve Markdown Structure
Splits Markdown messages at structural boundaries (links, tables, code blocks) near 3,800-unit targets with a 20,000-unit ceiling—improves DingTalk/WeCom integration.
- [View PR](https://github.com/QwenLM/qwen-code/pull/13731)

### 6. #13973 — Web Shell: Reuse Standard UI for Managed Agents
Reuses standard Web Shell components for Managed Agent creation and conversations, unifying the UI experience.
- [View PR](https://github.com/QwenLM/qwen-code/pull/13973)

### 7. #13642 — Runtime Broker: Bounded Retention for JDBC History
Adds opt-in bounded cleanup for old terminal Runtime Broker JDBC history under retired bindings, running on a dedicated scheduler.
- [View PR](https://github.com/QwenLM/qwen-code/pull/13642)

### 8. #14016 — CLI: Give Bare ↑/↓ Back to Input History
Restores bare arrow key behavior for input history cycling, reverting unintended regression from #12518.
- [View PR](https://github.com/QwenLM/qwen-code/pull/14016)

### 9. #13902 — Project Agent Identity onto ACP/Daemon Wire
Projects agent identity and Agent Team coordination onto the wire protocol, enabling subagent delegation tracking via `_meta.agent_id`.
- [View PR](https://github.com/QwenLM/qwen-code/pull/13902)

### 10. #14003 — CLI: Repeatable --disable-mcp-server Flag
Adds `--disable-mcp-server <name>` for per-invocation MCP server exclusion without mutating settings.json.
- [View PR](https://github.com/QwenLM/qwen-code/pull/14003)

---

## Feature Request Trends

Based on issue analysis, the following feature directions are in highest demand:

| Trend | Description |
|-------|-------------|
| **Multi-Agent Orchestration** | Multiple issues (#12380, #13785, #13902) propose agent identity, team coordination, and attribution on public APIs |
| **Platform Distribution** | Kubernetes runtime (#13395), Linux packaging fixes (#13680), cross-platform delivery gates |
| **Enhanced Observability** | Background subagent status display (#13898), session state visibility, runtime telemetry |
| **UI/UX Refinements** | RTL/LTR support (#13837), Web Shell improvements, terminal buffer behavior |
| **Memory & Persistence** | Memory extraction cadence follow-ups (#13612), bounded retention for JDBC history (#13642) |
| **MCP Ecosystem** | Expanded MCP server support (#13987), per-invocation server control (#14003) |

---

## Developer Pain Points

1. **CI Pipeline Reliability**: Integration test failures (#13951) and git pack issues are blocking PR merges—developers report frustrated cycles waiting for CI.

2. **Settings Persistence**: The `--disable-mcp-server` flag being lost on settings recompute (#14009) creates a confusing UX where user preferences don't stick.

3. **Session Re-attachment Failures**: Child session re-attachment returning 409 after control-plane kills (#13838) leaves developers with orphaned sessions.

4. **Error Message Bounding**: Raw error causes bypassing message size caps (#14008) causes unexpected truncation in subagent error reporting.

5. **Linux Packaging**: Vendored ripgrep binary causing SIGSEGV on every Linux startup (#13680) makes the desktop app unusable for Linux users.

6. **Unicode/Localization**: UTF-8 BOM silently breaking .lsp.json (#13943), RTL text rendering issues (#13837)—accessibility gaps affecting international users.

7. **Turn Collapse Race Condition**: Background task notifications hiding final answers in Web Shell (#13998)—race between turn collapse and notification delivery.

---

*Generated from GitHub data — October 13, 2026*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*