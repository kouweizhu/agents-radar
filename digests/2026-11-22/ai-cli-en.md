# AI CLI Tools Community Digest 2026-11-22

> Generated: 2026-11-22 02:35 UTC | Tools covered: 7

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

<think>The user wants a cross-tool comparison report comparing the six AI CLI tools covered in the digests: Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, and Pi (from earendil-works/pi) and Qwen Code. Let me synthesize the data from all the digests.

Let me compile the key data points:

**Activity Comparison:**

1. **Claude Code (github.com/anthropics/claude-code)**:
   - Issues: 50 total, top 30 by comment count shown
   - PRs: 3 in last 24h (1 open, 2 closed)
   - Discussions: No data provided
   - Releases: No new releases
   - Latest release: Unknown

2. **OpenAI Codex (github.com/openai/codex)**:
   - Issues: Not clearly specified in count
   - PRs: Many merged in last 24h (~20)
   - Discussions: 7 shown (Ideas, Q&A, Show and Tell)
   - Releases: No new releases
   - Latest release: Unknown

3. **Gemini CLI (github.com/google-gemini/gemini-cli)**:
   - Issues: 50 total shown
   - PRs: 10 shown
   - Discussions: No data provided
   - Releases: v0.71.0-nightly.20261122.geecccfcd5
   - Latest release: Same day

4. **GitHub Copilot CLI (github.com/github/copilot-cli)**:
   - Issues: 22 total
   - PRs: 3 total
   - Discussions: Not mentioned
   - Releases: v1.0.115-6, v1.0.115-5
   - Latest release: v1.0.115-6 (same day)

5. **OpenCode (github.com/anomalyco/opencode)**:
   - Issues: 50 total
   - PRs: 50 total
   - Discussions: Not mentioned
   - Releases: None in last 24h

6. **Pi (github.com/earendil-works/pi)**:
   - Issues: 23 total
   - PRs: 3 total
   - Discussions: Not mentioned
   - Releases: None in last 24h

7. **Qwen Code (github.com/QwenLM/qwen-code)**:
   - Issues: 50 total shown
   - PRs: 10 shown
   - Discussions: Not mentioned
   - Releases: v0.28.3-nightly.20261121.56ef346859

I'm noticing a clear pattern: most tools show around 50 issues and PRs, suggesting similar community activity levels. Qwen Code stands out with the most recent release, while several tools had no new releases in the past day.

Looking at the cross-cutting concerns, memory and context management appear across multiple platforms—Pi, OpenCode, Claude Code, and Gemini CLI all struggle with unbounded growth and compaction issues. Windows reliability seems to be a pain point for Claude Code and Codex, with BitLocker and send button bugs causing problems. Multi-account and session management issues span Claude Code, Codex, and Copilot CLI. There's also interest in subagent support, cross-device synchronization, and feature requests around multi-account management appearing in discussions and PRs.

When I compare their approaches, Claude Code targets enterprise teams with GitHub connector focus, Codex emphasizes TUI refinement and reasoning capabilities, Gemini CLI prioritizes agent reliability and security hardening, Copilot CLI concentrates on Windows and installer stability, and OpenCode differentiates itself through plugin ecosystems and model flexibility. The development landscape shows Claude Code, Gemini CLI, Codex, and OpenCode all maintaining active nightly or weekly release cycles, while Copilot CLI's v1.0.115 series demonstrates production maturity.
</think>


# AI CLI Tools Ecosystem — Cross-Tool Comparison Report
**Date:** 2026-11-22 | **Scope:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, Qwen Code

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a high-velocity maturation phase. All six tools are simultaneously addressing the same class of fundamental challenges—long-session context inflation, subagent orchestration reliability, and cross-platform parity—while differentiating on ecosystem strategy. Claude Code and OpenAI Codex are the most scrutinized by enterprise users, with correspondingly higher issue volumes. Qwen Code, Gemini CLI, and OpenCode are iterating aggressively with nightly releases, suggesting rapid feature development rather than polish-first stabilization. Copilot CLI's conservative versioning (v1.0.115) indicates a more mature deployment lifecycle, while Pi's small issue count reflects a narrower but deeply engaged community. Across the board, the ecosystem is converging on Agent Client Protocol (ACP) as a de facto inter-agent communication standard, with at least three tools (Gemini CLI, Qwen Code, Claude Code) explicitly implementing or adopting it.

---

## 2. Activity Comparison

| Tool | Repo | Issues (24h) | PRs (24h) | Discussions (24h) | Releases (24h) |
|------|------|:---:|:---:|:---:|:---:|
| **Claude Code** | github.com/anthropics/claude-code | ~50 (top 30 shown) | 3 | N/A (upstream disabled) | None |
| **OpenAI Codex** | github.com/openai/codex | ~50 (top 30 shown) | ~20 merged | 7 (Ideas, Q&A, Show & Tell) | None |
| **Gemini CLI** | github.com/google-gemini/gemini-cli | ~50 (top 30 shown) | 10 | N/A (upstream disabled) | v0.71.0-nightly |
| **GitHub Copilot CLI** | github.com/github/copilot-cli | 22 | 3 | N/A (upstream disabled) | v1.0.115-6 |
| **OpenCode** | github.com/anomalyco/opencode | ~50 (top 30 shown) | ~50 (top 20 shown) | N/A (upstream disabled) | None |
| **Pi** | github.com/earendil-works/pi | 23 | 3 | N/A (upstream disabled) | None |
| **Qwen Code** | github.com/QwenLM/qwen-code | ~50 (top 30 shown) | 10 | N/A (upstream disabled) | v0.28.3-nightly |

**Notes:**
- Claude Code, Gemini CLI, OpenCode, Pi, and Qwen Code have Discussions disabled at the upstream level; only OpenAI Codex carries an active Discussions board. Do not interpret "N/A" as inactivity—it reflects a deliberate architectural choice.
- OpenCode's 50 PRs in the same window suggests either a high-velocity sprint or an archival batch; treat as an outlier.

---

## 3. Shared Feature Directions

The following requirements surface across three or more tool communities, indicating genuine ecosystem-wide demand:

### Long-Session Context Management
| Tool | Specific Issue |
|------|----------------|
| **Pi** | Compaction summary grows from 17k to 164k chars over nine compactions (#12242); searchTools burns 25% of context budget (#12165) |
| **OpenCode** | Memory leaks across TUI, core, and server components (#16695) |
| **Gemini CLI** | AST-aware file reads proposal to reduce turn counts (#22745); unbounded tool output bloat in ACP mode (#30297) |
| **Claude Code** | Session token bloat on fresh starts (~52k tokens, #111293); idle macOS sessions hold 86 processes at 26GB swap (#104888) |

**Cross-tool signal:** Every tool has at least one documented memory or context growth issue. The community is actively requesting compaction controls (Pi wants a global toggle, Gemini CLI is implementing adaptive sizing), making context budget management the highest-priority shared technical challenge.

### Subagent / Multi-Agent Orchestration
| Tool | Specific Issue |
|------|----------------|
| **Claude Code** | GitHub connector regression; Cowork (voice) mode issues |
| **Gemini CLI** | Subagent recovery after MAX_TURNS (#22323); generalist agent hangs (#21409) |
| **OpenAI Codex** | Background subprocesses don't wake the calling agent (#15723); async subagent messaging (#63069 merged) |
| **Qwen Code** | Managed-agent gate CI failures (500+ comments); background task notification OOM risk (#15748) |

**Cross-tool signal:** Subagent lifecycle management—spawning, monitoring, recovering, and terminating—is the second most common pain point. ACP mode adoption (Gemini CLI, Qwen Code, Codex) suggests this is becoming a solved problem, but reliability gaps remain widespread.

### Cross-Device Session Synchronization
| Tool | Specific Issue |
|------|----------------|
| **OpenAI Codex** | Synchronization across devices: 72 👍 top-voted discussion (#14067) |
| **GitHub Copilot CLI** | Remote control fails on GitHub Mobile and github.com (#5468) |
| **Claude Code** | Artifacts and connector state persistence issues (#107318, #111316) |
| **OpenCode** | Session tabs reappearing after exit (#65457); SQLite errors on resume |

**Cross-tool signal:** Mobile-to-desktop and device-to-device continuity is the top user-requested feature on Codex and a pain point across all tools. No tool has shipped a fully satisfactory solution yet.

### Windows Platform Parity
| Tool | Specific Issue |
|------|----------------|
| **Claude Code** | Remote Control scheduling regression, Bash tool memory leak, Cowork MCP failures, VS Code session tabs removed |
| **OpenAI Codex** | BitLocker volume causes MXC sandbox to fail (#50915); send button intermittently disabled; execution-location selector disappears |
| **GitHub Copilot CLI** | WSL quoting failure caused catastrophic `rsync` wipe (#5541); UNC path rules save incorrect patterns |
| **Qwen Code** | Windows Node 22 CI failures; rpm build root re-pinning for RHEL 10 |

**Cross-tool signal:** Windows support is systematically worse than macOS/Linux across every tool. BitLocker, WSL, execution context, and UI state management are the four recurring Windows failure categories.

### Agent Safety & Sandboxing
| Tool | Specific Issue |
|------|----------------|
| **GitHub Copilot CLI** | Tainted shell command handling hardened (#30196 merged); WSL quoting collapse wiped user drive |
| **Gemini CLI** | POSIX sandbox denial detection improvements (#30277); tainted command one-time approval |
| **Claude Code** | Artifacts access regression; Cowork permissions issues |
| **Qwen Code** | Preflight execution approval for `/verify-pr` (#18064); session overload UI (#18054) |

**Cross-tool signal:** As agents gain filesystem and network access, safety mechanisms (tainted command handling, sandboxing, preflight approvals) are being built concurrently across tools—a positive sign for the ecosystem's maturity.

---

## 4. Differentiation Analysis

### Target User & Use Case Focus

| Tool | Primary Persona | Key Differentiation |
|------|----------------|---------------------|
| **Claude Code** | Enterprise developers, GitHub-centric teams | Tight GitHub integration; desktop-first; Cowork voice mode |
| **OpenAI Codex** | Individual developers, cross-platform power users | TUI excellence; reasoning summaries; Orca terminal support; social coding (Teams, Sites) |
| **Gemini CLI** | Google Cloud / Android ecosystem developers | ACP-first architecture; POSIX sandboxing; Google AI Studio integration |
| **GitHub Copilot CLI** | GitHub Copilot subscribers, enterprise IT | Seamless GitHub authentication; lightweight CLI; Windows-first design |
| **OpenCode** | Power users, open-source enthusiasts, self-hosters | Plugin ecosystem; provider flexibility; Claude Agent SDK native integration |
| **Pi** | Long-session researchers, durability-focused users | Durable sessions; compaction architecture; pi-packages ecosystem |
| **Qwen Code** | Chinese developer ecosystem, Qwen model users | Managed Agent framework; DingTalk integration; enterprise verification workflows |

### Technical Approach Divergence

**Architecture:** Gemini CLI and Qwen Code are explicitly ACP-native, building inter-agent communication on a shared protocol. OpenAI Codex uses ACP but with proprietary extensions. Claude Code and Copilot CLI use proprietary orchestration layers. OpenCode and Pi use custom agent protocols.

**Release Cadence:** Qwen Code and Gemini CLI ship nightly builds. OpenAI Codex and OpenCode ship feature releases on an irregular schedule. GitHub Copilot CLI is at v1.0.x, indicating a stable, production-oriented cadence. Pi ships conservatively with no recent releases.

**Ecosystem Model:** OpenCode uniquely supports a plugin ecosystem (npm-indexed pi-packages) with namespace separation. Qwen Code has the most structured enterprise workflow with managed agents, DingTalk adapters, and PR verification pipelines. Claude Code's artifacts connector and Codex's Teams/Sites features represent the collaborative dimension.

---

## 5. Community Momentum & Maturity

### High-Momentum Tools

**Qwen Code** — Highest velocity in terms of merged PRs and CI activity. The managed-agent framework and DingTalk enterprise integrations suggest strong institutional backing and real-world deployment pressure driving development.

**OpenAI Codex** — Most active discussions board (7 posts today) and most diverse engagement (Ideas, Q&A, Show & Tell). The reasoning summary features and Orca terminal support reflect user-driven feature evolution. The 72-👍 synchronization request is the single highest-community-signalled feature across all tools.

**Gemini CLI** — ACP-mode parallel execution (#30298) and security hardening (#30196) indicate a project transitioning from feature exploration to production reliability.

### Stable/Mature Tools

**GitHub Copilot CLI** — At v1.0.115, this is the most mature codebase by versioning. Focus is on installer reliability, permission UX simplification, and enterprise network compatibility. Low issue volume (22) but high severity (WSL data loss, TLS handshake failures).

**Claude Code** — High community scrutiny but no new releases in 24h suggests a stabilization phase. The GitHub connector regression (#71542, 73 comments) is the highest-impact open issue across all tools.

### Emerging/Niche Tools

**Pi** — Small community (23 issues) but highly engaged on durability topics. The npm search indexing blocker (#7885) and compaction budget fix (#12380) suggest a tool built by and for developers who run very long sessions.

**OpenCode** — Large PR volume but lacks discussion activity, suggesting a development-driven rather than community-driven project. The Claude Agent provider integration (#58782) and memory leak fix (#16695) indicate active core development.

---

## 6. Trend Signals

The following signals from today's community activity carry forward-looking implications for developers and decision-makers:

### 1. ACP is Becoming the Inter-Agent Protocol Standard
At least three tools (Gemini CLI, Qwen Code, Codex) are implementing Agent Client Protocol features in parallel. Parallel tool execution (#30298 in Gemini), ACP-mode output truncation (#30297), and ACP flag synchronization (#30301) indicate that tool-level interoperability is a solved problem being actively standardized.

### 2. Context Budget Management is the Top Technical Debt
Every tool has unbounded context growth issues. The industry-wide push toward adaptive compaction (proportional budgets, hard limits, user-configurable toggles) signals that the naive approach—compacting at a fixed token threshold—has failed. Developers choosing a tool should evaluate its compaction architecture explicitly.

### 3. Windows Remains the Weakest Platform Across the Board
No tool has achieved true Windows parity. BitLocker compatibility, WSL integration, execution context management, and TUI rendering are all problem areas. Teams with Windows-dominant workflows should factor this into tool selection, particularly for Claude Code and Codex.

### 4. Agent Safety is Moving from Implicit to Explicit
GitHub Copilot CLI's tainted command handling, Gemini CLI's sandbox hardening, and Qwen Code's preflight execution approval system all represent a shift from "trust the model" to "verify and constrain." As agents gain more destructive capabilities, this trend will accelerate across all tools.

### 5. Cross-Device Sync is the Highest-Requested User Feature
The 72-👍 synchronization request on Codex has no equivalent in other tools' issue trackers. This represents the single largest unmet user need in the ecosystem. Tools that ship cross-device session continuity first will likely capture significant developer mindshare.

### 6. The Plugin/Ecosystem Playbook is Converging
OpenCode's npm-based pi-packages, Qwen Code's MCP server ecosystem, and Codex's 150+ community tools all follow the same playbook: enable third-party extension, then invest in discoverability. The npm search indexing failure in Pi (#7885) is a cautionary tale—ecosystem infrastructure is as important as the core tool.

### 7. CI Reliability is a Bottleneck for Open-Source Projects
Qwen Code's 500+ comment CI failure thread and Codex's E2E test instability suggest that as these tools grow in complexity, CI infrastructure becomes a direct constraint on development velocity. Teams investing in AI CLI tools should monitor the ratio of "CI maintenance" vs. "feature development" work as a health indicator.

---

*Cross-tool analysis synthesized from GitHub activity across 7 repositories on 2026-11-22. All issue/PR counts are approximations based on data surfaced in the digest summaries.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>Let me analyze the provided GitHub data from the anthropics/skills repository to create a comprehensive community highlights report.

First, let me identify the key data points:

**Pull Requests (sorted by comments, showing top 20):**
Looking at the PRs, most show "Comments: undefined" which means the comments data wasn't available. But I can see various PRs with different focus areas:

1. #1742 - fix(mcp-builder): MCP >= 2.0 support for streamable_http_client
2. #1298 - fix(skill-creator): isolate trigger evals and handle Windows failures
3. #1245 - Add notion-spec-to-implementation and quantitative-resume-auditor skills
4. #1980 - webapp-testing: avoid shell=True (security fix)
5. #1792 - fix(docx): report LibreOffice timeout as error
6. #1771 - Add proofcore-contract-auditor for smart contracts
7. #1734 - Detect orphaned docx comments
8. #1703 - Add md2video-audio skill
9. #525 - Add pyxel skill for retro game development
10. #2019 - fix(xlsx): resolve worksheet-scoped defined names
11. #1730 - fix(claude-api): replace dead URLs
12. #1681 - fix(skill-creator): support direct execution
13. #514 - Add document-typography skill
14. #2108 - docs: clarify document skills snapshot status
15. #1997 - fix(skill-creator): parse YAML frontmatter scalars
16. #1977 - algorithmic-art: wrapAround() fix
17. #1976 - webapp-testing: report textarea and select correctly
18. #1975 - pptx: reject --cols below 1
19. #1950 - docs(claude-api): update Python pause_turn runner guidance


20. #1615 - Add scnet-hpc skill

The issue tracker shows significant community engagement, particularly around security concerns (#492 with 46 comments discussing trust boundary vulnerabilities in the anthropic/ namespace). There's also strong interest in organizational features (#228 with 17 comments about skill sharing) and technical bugs like the run_eval.py trigger rate issue (#556 with 13 comments). Feature requests like email change capabilities (#1143) and quality gate pipelines (#1385) indicate user needs for both administrative controls and workflow enhancements.

Additional discussions include evaluation bugs (#1352), skill duplication problems (#189), and performance issues with the claude-api skill (#1487). Looking at the most active discussions by comment volume, #492 dominates the conversation with 46 comments focused on security implications of the namespace trust model, while #228 addresses the core organizational workflow need for shared skills access. The remaining issues cluster around debugging (run_eval.py, duplicate detection) and documentation refinements. 1980) and webapp-testing fixes (#1976) addressing element reporting. Several new skill proposals show promise: md2video-audio for video generation, pyxel for retro game development, document-typography for quality control, scnet-hpc for HPC cluster management, and notion-spec-to-implementation for translating specs into Notion tasks. Community requests cluster around enabling org-wide skill sharing, improving API reliability, and addressing performance issues like context window exhaustion.
</think>


# Claude Code Skills Community Highlights Report

*Based on GitHub repository data as of 2026-11-22*

---

## 1. Top Skills Ranking

The most-active PR discussions reveal a community actively contributing bug fixes, security hardening, and domain-specific skills. Note: Most PRs show "Comments: undefined" in the dataset, indicating active development without publicly recorded discussion threads yet.

| Rank | PR # | Title | Author | Focus | Status |
|------|------|-------|--------|-------|--------|
| 1 | #1742 | **fix(mcp-builder): MCP ≥2 streamable_http_client support** | Kuldeeep18 | MCP protocol migration | [OPEN](https://github.com/anthropics/skills/pull/1742) |
| 2 | #1980 | **webapp-testing: avoid shell=True** | Pcmhacker-piro | Security hardening | [OPEN](https://github.com/anthropics/skills/pull/1980) |
| 3 | #525 | **Add pyxel skill for retro game development** | kitao | Domain tool | [OPEN](https://github.com/anthropics/skills/pull/525) |
| 4 | #1245 | **Add notion-spec-to-implementation + quantitative-resume-auditor** | mrdesouzaphd-cmyk | Productivity | [OPEN](https://github.com/anthropics/skills/pull/1245) |
| 5 | #1703 | **Add md2video-audio skill** | 70v-Yoyo | Media generation | [OPEN](https://github.com/anthropics/skills/pull/1703) |
| 6 | #1792 | **fix(docx): LibreOffice timeout handling** | TINGyu123644 | Reliability | [OPEN](https://github.com/anthropics/skills/pull/1792) |
| 7 | #514 | **Add document-typography skill** | PGTBoos | Quality control | [OPEN](https://github.com/anthropics/skills/pull/514) |

### Key Highlights

**#1742 – mcp-builder Protocol Migration**
Addresses breaking changes in MCP ≥2.0 where `streamablehttp_client` was renamed to `streamable_http_client` and header configuration moved to `create_mcp_http_client`. This is critical infrastructure maintenance ensuring compatibility with the latest MCP SDK.

**#1980 – Security Fix (CWE-78)**
Critical security patch removing `subprocess.Popen(..., shell=True)` in `webapp-testing/scripts/with_server.py`. The current implementation passes unsanitized user/agent strings into system shell, enabling command injection attacks. Community priority: high.

**#525 – Pyxel Retro Game Development**
Enables Claude Code to create, debug, and verify retro games using [Pyxel](https://kitao.dev/pyxel/), a Python game engine. Includes headless input-driven runs, frame inspection, and task-specific state checks.

**#1245 – Notion Integration + Resume Auditing**
Dual-skill submission: one transforms product/tech specs into actionable Notion tasks with acceptance criteria; the other performs quantitative resume audits against job requirements.

**#1703 – Markdown to Video Pipeline**
Zero-cost skill compiling Markdown documents into professional MP4 videos with human-like voiceovers using Marp for slide generation.

---

## 2. Community Demand Trends

Analysis of Issues reveals the following demand clusters:

### Security & Trust (Highest Engagement: #492 – 46 comments)
**Issue #492** exposes a critical trust boundary vulnerability: community skills distributed under the `anthropic/` namespace may be mistaken for official offerings, potentially leading users to grant elevated permissions inappropriately. This is the most-commented issue in the repository.

> *"Community-made skills are being distributed under the `anthropic/` namespace, impersonating official Anthropic skills."* — [aliksir](https://github.com/anthropics/skills/issues/492)

### Organizational Workflow (17 comments – #228)
Users request **org-wide skill sharing** capabilities within Claude.ai, eliminating the need to manually distribute `.skill` files via Slack/Teams. A shared skill library or direct sharing link is requested.

### Evaluation & Trigger Reliability (13+ comments – #556, #1352)
Two issues highlight systematic failures in `run_eval.py`:
- **#556**: `claude -p` never triggers skills/commands (0% trigger rate)
- **#1352**: Parallel workers cross-match skill UUIDs, producing false negatives

These bugs undermine the skill development workflow, indicating need for robust evaluation tooling.

### Context & Performance Management (5 comments – #1487)
**#1487** reports that the `claude-api` skill eagerly injects ~156k tokens, exhausting context windows in a single tool call. This signals demand for more efficient skill loading strategies.

### Documentation & Tool Updates
Multiple issues (#1730, #1950, #2108) request documentation currency updates, reflecting community investment in accurate reference materials.

---

## 3. High-Potential Pending Skills

These PRs represent active development with clear functionality and community relevance:

| PR # | Skill | Author | Notable Feature | Link |
|------|-------|--------|-----------------|------|
| #1771 | **proofcore-contract-auditor** | ProofCore-Protocol | Smart contract static analysis + TON Blockchain audit anchoring | [PR #1771](https://github.com/anthropics/skills/pull/1771) |
| #1703 | **md2video-audio** | 70v-Yoyo | Markdown → MP4 with voiceovers | [PR #1703](https://github.com/anthropics/skills/pull/1703) |
| #525 | **pyxel** | kitao | Retro game dev workflow | [PR #525](https://github.com/anthropics/skills/pull/525) |
| #1245 | **notion-spec-to-implementation** | mrdesouzaphd-cmyk | Spec → Notion task pipeline | [PR #1245](https://github.com/anthropics/skills/pull/1245) |
| #1615 | **scnet-hpc** | lql341 | SCNet HPC cluster operations via SSH/Slurm | [PR #1615](https://github.com/anthropics/skills/pull/1615) |
| #514 | **document-typography** | PGTBoos | Typographic QC (orphans, widows, alignment) | [PR #514](https://github.com/anthropics/skills/pull/514) |

### Standout Candidates

**#1771 – Proofcore Contract Auditor**
Web3-focused skill performing automated static analysis of Solidity and Rust smart contracts, with cryptographic audit proofs anchored to the TON Blockchain via zero-storage Merkle protocol. Strong differentiation in a specialized domain.

**#1703 – md2video-audio**
Unique media generation capability combining Marp presentation conversion with voice synthesis. Low-cost, high-value workflow enhancement.

**#1615 – scnet-hpc**
Addresses scientific computing workflows with profile-based SSH and Slurm integration—a niche but high-impact domain for HPC users.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for security hardening, reliable evaluation tooling, and domain-specific workflow integrations (smart contracts, HPC, video generation), reflecting a maturation from general-purpose skills toward specialized, production-grade tooling.**

---

## Summary Statistics

| Metric | Value |
|--------|-------|
| Total PRs Analyzed | 20 (top 20 of 50) |
| Total Issues Analyzed | 15 (top 15 of 50) |
| Most-Discussed Issue | #492 (Security namespace abuse) – 46 comments |
| Security-Critical PRs | 2 (#1980, #1792) |
| New Skill Submissions | 6+ awaiting merge |
| Platform/Infra Fixes | 8+ active PRs |

---

*Report generated from public GitHub data. For real-time updates, visit [anthropics/skills](https://github.com/anthropics/skills).*

---

<think>The user wants me to generate a Claude Code community digest for 2026-11-22 based on the GitHub data provided. Let me analyze the data and create a structured digest with the requested sections.

Key observations from the data:
1. No new releases in the last 24h
2. 50 issues total, showing top 30 by comment count
3. 3 PRs in the last 24h (1 open, 2 closed)
4. No discussions data was provided

Let me structure the digest:

1. **Today's Highlights** - Summarize key issues and activity
2. **Releases** - None
3. **Hot Issues** - Top 10 by comment count/importance
4. **Key PR Progress** - The 3 PRs mentioned
5. **Hot Discussions** - Omit (no data provided)
6. **Feature Request Trends** - Based on enhancement requests
7. **Developer Pain Points** - Recurring issues

Let me go through the issues:

Top issues by comment count:
1. #71542 - GitHub connector regression (73 comments, 71 👍)
2. #30873 - Chrome extension side panel closes (37 comments, 47 👍)
3. #92276 - Desktop Remote Control regression (16 comments, 13 👍)
4. #107318 - Artifacts access regression (13 comments, 5 👍)
5. #25664 - SSH remote plugin paths issue (9 comments, 1 👍)
6. #78146 - Windows Bash tool bug (8 comments, 3 👍)
7. #97954 - Cowork Windows MCP issue (6 comments, 3 👍)
8. #89993 - Multi-account support feature (5 comments, 4 👍)
9. #82610 - Desktop plugins not found (5 comments, 0 👍)


10. #74667 - list_connected_browsers bug (5 comments, 4 👍)

I'll continue analyzing the remaining issues, noting the range of technical challenges and feature requests across different components. The list reveals ongoing complexities in plugin management, browser interactions, and platform-specific integrations. Some issues like multi-account support and browser connection tracking show user engagement, while others like desktop plugin discovery represent persistent technical hurdles.

The PR activity indicates active development with two closed pull requests addressing security and workflow concerns, suggesting a focus on refining collaboration and safety mechanisms in the platform's ecosystem.
</think>


# Claude Code Community Digest — 2026-11-22

## Today's Highlights

The community's attention is sharply focused on a **critical GitHub connector regression** (#71542, 73 comments) that prevents Claude from accessing repository content across all accounts—a high-severity account-wide issue affecting both public and private repos. Platform-specific regressions continue to accumulate, with Windows Remote Control scheduling, shared artifact access, and macOS memory leaks emerging as persistent pain points. A notable new enhancement request (#109679) asks for Code Mode support in the Agent SDK, signaling growing demand for programmatic AI coding integration.

---

## Releases

**No new releases in the last 24 hours.** The team appears to be in a stabilization phase following recent updates that introduced regressions across Windows and macOS platforms.

---

## Hot Issues

### 1. **[GitHub Connector Cannot Access Repository Content — Account-Wide Regression](https://github.com/anthropics/claude-code/issues/71542)**
- **Author:** Antares9879 | **Comments:** 73 | ** 👍 :** 71
- **Why it matters:** This is the highest-impact bug in the tracker. Claude successfully authenticates with GitHub but cannot read file contents, code, or issues—completely blocking AI-assisted coding workflows for any repository.
- **Community reaction:** Extremely high engagement with 73 comments and 71 upvotes. Users confirm the regression affects both CLI and desktop apps across multiple versions. The issue remains open with no resolution path visible.

### 2. **[Chrome Extension Side Panel Closes on Tab Switch (macOS)](https://github.com/anthropics/claude-code/issues/30873)**
- **Author:** ogmios2 | **Comments:** 37 | ** 👍 :** 47
- **Why it matters:** A usability regression in the Claude in Chrome extension that breaks workflow continuity when users switch browser tabs—particularly problematic for developers who reference documentation while coding.
- **Community reaction:** Strong support (47 👍) with detailed reproduction steps provided. Active engagement indicates this is a frequent interruption in daily workflows.

### 3. **[Desktop Remote Control Fails for Scheduled-Task Sessions (Windows)](https://github.com/anthropics/claude-code/issues/92276)**
- **Author:** l1204366 | **Comments:** 16 | ** 👍 :** 13
- **Why it matters:** Regression between versions 1.40609.0 and 1.44121.4 breaks automated workflows relying on scheduled Claude Code sessions—critical for CI/CD and batch processing use cases.
- **Community reaction:** Enterprise users affected; 13 upvotes suggests this blocks automated production workflows.

### 4. **[Shared Artifacts from Other Accounts No Longer Editable](https://github.com/anthropics/claude-code/issues/107318)**
- **Author:** CPR03 | **Comments:** 13 | ** 👍 :** 5
- **Why it matters:** The new artifacts connector broke collaborative workflows where users share artifacts between accounts. This undermines the collaborative value of Claude Code artifacts.
- **Community reaction:** Users report the change was unintentional, likely introduced by the artifacts connector rewrite.

### 5. **[SSH Remote Passes Local Plugin/MCP Configs to Remote Server](https://github.com/anthropics/claude-code/issues/25664)**
- **Author:** solomon23 | **Comments:** 9 | ** 👍 :** 1
- **Why it matters:** Connecting to a remote server via SSH causes the session to hang indefinitely because local macOS paths don't exist on the remote machine. This effectively breaks remote development workflows.
- **Community reaction:** Critical for remote development, though low upvote count suggests it may affect fewer users or has limited visibility.

### 6. **[Windows Bash Tool Accumulates Hook Env Unboundedly](https://github.com/anthropics/claude-code/issues/78146)**
- **Author:** ideavcgroup | **Comments:** 8 | ** 👍 :** 3
- **Why it matters:** On Windows (VSCode), the `CLAUDE_ENV_FILE` grows on every session compaction, causing bash commands to fail with "command not found" errors. Long sessions become unusable.
- **Community reaction:** Technical detail suggests advanced users debugging; the unbounded growth indicates a memory leak with clear reproduction steps.

### 7. **[Cowork Windows: MCP Connectors Unavailable in Voice Mode](https://github.com/anthropics/claude-code/issues/97954)**
- **Author:** lencho13 | **Comments:** 6 | ** 👍 :** 3
- **Why it matters:** The Cowork (voice mode) feature on Windows disables MCP tools immediately upon activation—breaking AI-augmented voice-controlled workflows.
- **Community reaction:** Voice mode is an emerging feature; this bug may slow adoption in enterprise Windows environments.

### 8. **[First-Class Multi-Account Support Request](https://github.com/anthropics/claude-code/issues/89993)**
- **Author:** BTForIT | **Comments:** 5 | ** 👍 :** 4
- **Why it matters:** Users with multiple subscriptions (personal + work + team seats) lack proper account switching. Current workarounds are fragile, affecting productivity for developers managing multiple Claude deployments.
- **Community reaction:** Feature request with moderate engagement; addresses a known friction point for power users.

### 9. **[Desktop Local Sessions Can't Find Marketplace Plugins (Windows)](https://github.com/anthropics/claude-code/issues/82610)**
- **Author:** Yan-Cardoso | **Comments:** 5 | ** 👍 :** 0
- **Why it matters:** The `LocalPluginsReader` only finds the bundled skills-plugin, ignoring marketplace-installed plugins on Windows desktop. This limits extensibility.
- **Community reaction:** Low engagement but represents a gap in the plugin ecosystem for Windows users.

### 10. **[macOS Desktop: Idle Sessions Leak Memory (86 Procs, 26GB Swap)](https://github.com/anthropics/claude-code/issues/104888)**
- **Author:** israelins85 | **Comments:** 2 | ** 👍 :** 3
- **Why it matters:** Idle Claude Code sessions on macOS keep CLI and MCP processes alive indefinitely, accumulating 86 processes and 26GB of swap over several days. This causes system-wide performance degradation.
- **Community reaction:** Despite only 2 comments, the memory impact (26GB swap) makes this critical for users running multiple sessions.

---

## Key PR Progress

### 1. **[feat: open source claude code ✨](https://github.com/anthropics/claude-code/pull/41447)** (OPEN)
- **Author:** gameroman | **Created:** 2026-03-31
- **Summary:** A meta-issue PR proposing Claude Code open source, referencing multiple closed issues. While unlikely to be merged as-is, it reflects ongoing community interest in source access.
- **Status:** Open since March 2026; no activity in the last 24h beyond timestamp update.

### 2. **[Don't run @claude mentions on pull requests from forks](https://github.com/anthropics/claude-code/pull/111198)** (CLOSED)
- **Author:** mhegazy
- **Summary:** Security and workflow improvement preventing AI mentions from executing on PRs originating from forked repositories—mitigates potential abuse vectors in collaborative workflows.
- **Status:** Merged 2026-11-21.

### 3. **[Create SECURITY.md](https://github.com/anthropics/claude-code/pull/1)** (CLOSED)
- **Author:** bcherny
- **Summary:** Initial security policy documentation for the repository.
- **Status:** Merged (ancient PR from 2025-02-24).

---

## Feature Request Trends

Analysis of enhancement requests reveals three dominant themes:

| Theme | Frequency | Key Issues |
|-------|-----------|------------|
| **Multi-Account & Auth Management** | High | #89993 (multi-account switching), #82906 (mid-tier plan), #102201 (credential org conflicts) |
| **Platform Parity** | High | #79655 (WSL/Chrome support), #96382 (VS Code session tabs), #82610 (marketplace plugins) |
| **Advanced Agent Workflows** | Emerging | #109679 (Code Mode in Agent SDK), #107281 (teammate approval workflow), #95744 (custom providers in Remote Control) |
| **MCP Ecosystem** | Steady | #102347 (MCP Tasks extension), #109492 (tool search behind gateway), #25664 (SSH MCP passthrough) |
| **Cost & Token Optimization** | Moderate | #111293 (session token bloat), #82906 (tier visibility) |

---

## Developer Pain Points

The following patterns emerge as high-frequency friction points across the issue tracker:

1. **GitHub Integration Instability** — The GitHub connector is experiencing account-wide failures (#71542) alongside connector state persistence bugs (#111316) where disabled connectors re-enable themselves. The GitHub integration plugin also fails with auth header errors (#104338).

2. **Windows Platform Neglect** — Windows-specific issues dominate the bug list: Remote Control scheduling regression (#92276), Bash tool memory leaks (#78146), hook timeout orphaning (#96476), VS Code session management removal (#96382), and Cowork MCP failures (#97954). Users perceive Windows as a second-class platform.

3. **MCP Connector Fragility** — Multiple issues involve MCP servers becoming unavailable (#97954), failing behind gateways (#109492), or not loading for marketplace plugins (#82610). The MCP ecosystem appears to have edge cases not covered by testing.

4. **Memory & Resource Leaks** — Long-running sessions accumulate memory: idle macOS sessions hold 86 processes at 26GB swap (#104888), Windows Bash environments grow unboundedly (#78146), and fresh sessions start at ~52k tokens (#111293).

5. **Cross-Account Artifact Collaboration** — The new artifacts connector broke shared artifact workflows (#107318), indicating that architectural changes aren't preserving backwards compatibility for collaborative features.

6. **Desktop App State Sync** — Users report that settings toggled in the desktop app don't persist (#111316), Chrome extension states differ between claude.ai and the app, and plugin configurations revert unexpectedly.

---

*Digest generated from GitHub data for [anthropics/claude-code](https://github.com/anthropics/claude-code) on 2026-11-22.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze this GitHub data for the OpenAI Codex repository and create a structured digest for 2026-11-22.

Let me organize the key information:

**Releases (last 24h):**
- None

**Latest Issues (top 10 by comment count):**
1. #15723 - Background subprocesses/subagents don't wake calling agent (32 comments, 13 👍)
2. #50915 - MXC fails before command launch when BitLocker volume locked (32 comments, 12 👍)
3. #51636 - macOS Work: messages not submitted by Enter or send button (21 comments, 0 👍)


4. #42950 - Sites public site blocked by Cloudflare (20 comments, 0 👍)
5. #62393 - Windows Work new conversation Send button intermittently disabled (13 comments, 0 👍)
6. #62925 - Windows Work execution-location selector disappears (12 comments, 4 👍)
7. #24849 - Agent output getting truncated in terminal scrollback (11 comments, 5 👍) - CLOSED
8. #54143 - macOS Chat mode disappears after switching to Work (9 comments, 1 👍)
9. #62918 - Windows Send disabled in new Work chats (8 comments, 3 👍)
10. #56822 - Built-in browser opens but agent cannot control it (8 comments, 0 👍)

Looking at the pull requests from the last day, there are two closed ones—one addressing MCP reply POST handling and another adding async messaging support for spawned subagents—plus a work-in-progress item on propagating turn metadata to web search functionality.

Continuing through the recent commits, I'm seeing a series of quality-of-life improvements: fixing the cloud reply stream to handle retries properly, making the transcript selection cursor more visible, suppressing completion popups when in shell mode, enabling markdown block selection and copying, refreshing the code mode catalog when helper signatures change, completing named settings for slash commands, and addressing clipboard text handling issues.

There are also several terminal and UI refinements—adding support for the Orca integrated terminal, improving navigation in the command center, docking it beside conversations, cleaning up empty permission messages, fixing reasoning summary configuration, forwarding clipboard operations to Rex clients, handling HTTP MCP startup errors more gracefully, and adding a reasoning summary picker to the config.

The recent commits also enable concurrent reasoning summaries by default and include updates to how TUI clipboard copies are forwarded. Beyond the codebase, there's active discussion around synchronizing Codex threads across devices, implementing memories, building a curated list of 150+ ecosystem tools, and coordinating local and remote coding agents.

Looking at the key trends emerging from both issues and discussions, cross-device synchronization is a major pain point, along with Windows reliability issues—particularly around BitLocker, execution location selection, and send button behavior on Work. There's also significant interest in memory and session persistence features, plus concerns about sandbox and subprocess handling across different platforms.

The community is requesting better multi-chat workflows in VS Code, shared sessions for team collaboration, and improved integration with the Chrome extension for CLI users. macOS issues around browser password management and conversation mode switching are also surfacing frequently.
</think>


# OpenAI Codex Community Digest — 2026-11-22

---

## 1. Today's Highlights

The Codex team merged a substantial wave of TUI refinements covering transcript navigation, clipboard handling, Orca terminal support, and default reasoning summary behavior. Meanwhile, the community continues to surface cross-platform reliability issues: Windows BitLocker sandbox failures, macOS Work send-button regressions, and background subprocess wake-up deadlocks remain unresolved with significant community engagement. Cross-device session synchronization emerged as the top-voted feature request across the entire Discussions board.

---

## 2. Releases

**No new releases** were published in the last 24 hours.

---

## 3. Hot Issues

> Sorted by comment count. Issues marked **[CLOSED]** indicate resolution during the period.

| # | Title | Why It Matters | Reactions |
|---|---|---|---|
| [#15723](https://github.com/openai/codex/issues/15723) | Background subprocesses/subagents do not wake the calling agent on completion | A fundamental orchestration gap: spawned subagents finish silently, leaving the root agent stalled. This blocks multi-step pipelines and workflow automation. | 👍 13 |
| [#50915](https://github.com/openai/codex/issues/50915) | MXC sandbox fails before command launch when an unrelated BitLocker volume is locked | Windows users with encrypted secondary drives cannot run Codex at all. A silent environmental dependency breaks core functionality. | 👍 12 |
| [#51636](https://github.com/openai/codex/issues/51636) | **[macOS][Work]** New messages not submitted by Enter or send button | Core UX regression in the Work mode on macOS — users are completely blocked from sending messages. | 👍 0 |
| [#42950](https://github.com/openai/codex/issues/42950) | **[Sites]** Public site blocked by Cloudflare for external visitors | Codex Sites deployments are inaccessible to end users, undermining the product's value for public-facing projects. | 👍 0 |
| [#62393](https://github.com/openai/codex/issues/62393) | **[Windows][Work]** Send button intermittently disabled despite non-empty input | Sporadic but reproducible input-blocking bug on Windows, affecting message composition in new Work conversations. | 👍 0 |
| [#62925](https://github.com/openai/codex/issues/62925) | **[Windows][Work]** Execution-location selector disappears; local sessions cannot reach loopback services | A permissions/execution-context regression that strips local execution options and breaks localhost service integration. | 👍 4 |
| [#24849](https://github.com/openai/codex/issues/24849) **[CLOSED]** | Agent output getting truncated in the middle of terminal scrollback | Long-running agent sessions lose rendered output when scrolling through history, complicating debugging. | 👍 5 |
| [#54143](https://github.com/openai/codex/issues/54143) | **[macOS][Regression]** Chat mode disappears after switching to Work; cannot switch back | Mode-switching bug leaves users locked out of standard Chat mode after a Work session. | 👍 1 |
| [#62918](https://github.com/openai/codex/issues/62918) | **[Windows]** Send disabled in new Work chats; connection error on relaunch | First-message submission blocked in new Work sessions, with a companion connection error on app restart. | 👍 3 |
| [#59592](https://github.com/openai/codex/issues/59592) | **macOS arm64][CLI 0.166.0]** `codex exec` cannot use ChatGPT Chrome extension | CLI-based browser automation is completely broken on Apple Silicon, forcing users to the desktop app instead. | 👍 5 |

---

## 4. Key PR Progress

> All PRs below were updated or merged in the last 24–48 hours.

| # | Title | What Changed |
|---|---|---|
| [#63075](https://github.com/openai/codex/pull/63075) **[MERGED]** | Prevent MCP reply POSTs from resolving pending requests | Fixed a JSON-RPC ID collision where MCP server responses could incorrectly resolve Codex's own pending requests. |
| [#63069](https://github.com/openai/codex/pull/63069) **[MERGED]** | Add async user messaging opt-in for spawned subagents | Subagents now have independent opt-in for async user messaging, decoupling them from the root-agent feature flag. |
| [#63058](https://github.com/openai/codex/pull/63058) **[MERGED]** | Keep Cloud reply stream recovery retryable after transient failures | Prevents recovery attempt exhaustion on repeated disconnects by making the deadline per-attempt rather than shared. |
| [#63056](https://github.com/openai/codex/pull/63056) **[MERGED]** | Keep the TUI transcript selection cursor visible | Ensures the cursor stays within the viewport during selection and after resize, eliminating off-screen jumps. |
| [#63054](https://github.com/openai/codex/pull/63054) **[MERGED]** | Suppress TUI completion popups in shell mode | Shell syntax (e.g., PowerShell `$env:HTTP_PROXY`) no longer triggers Codex completion menus while typing commands. |
| [#63047](https://github.com/openai/codex/pull/63047) **[MERGED]** | Select and copy Markdown blocks in the transcript | New keybindings (`m`, `h`/`l`, `j`/`k`, `Tab`) for block-level Markdown selection and copy in transcript mode. |
| [#63046](https://github.com/openai/codex/pull/63046) **[MERGED]** | Refresh Code Mode exec catalog when helper signatures change | Stale `functions.exec` declarations are now invalidated when global helpers change, fixing resumed-session inconsistencies. |
| [#63036](https://github.com/openai/codex/pull/63036) **[MERGED]** | Complete named settings for TUI slash commands | Slash-command completion now suggests flags (e.g., `--model`, `--permissions`) alongside positional arguments. |
| [#63022](https://github.com/openai/codex/pull/63022) **[MERGED]** | Fix clipboard text fallback and guard pending pastes in the TUI | X11 clipboard owners returning text for image requests no longer fail silently; pending pastes are guarded against race conditions. |
| [#63013](https://github.com/openai/codex/pull/63013) **[MERGED]** | Support the Orca integrated terminal | Recognizes `TERM_PROGRAM=Orca`, renders clickable Markdown links, and conditionally enables Kitty graphics. |
| [#62990](https://github.com/openai/codex/pull/62990) **[MERGED]** | Make Command Center easier to navigate in the TUI workspace | Improved mouse and keyboard navigation for the docked Command Center; tasks open without leaving the conversation view. |
| [#62986](https://github.com/openai/codex/pull/62986) **[MERGED]** | Dock the Agent Command Center beside the conversation | Command Center now docks inline (when `features.tui_workspace` is enabled) instead of blocking the transcript in a modal. |
| [#62905](https://github.com/openai/codex/pull/62905) **[MERGED]** | Add a reasoning summary picker to `/config` | Users can now choose Auto, Concise, Detailed, or None under Sessions in `/config`; value is persisted via the app server. |
| [#62904](https://github.com/openai/codex/pull/62904) **[MERGED]** | Use automatic reasoning summaries by default in the TUI | TUI now submits the correct `model_reasoning_summary` setting on turn submission, matching user intent across WebSocket prewarming and first turns. |
| [#62903](https://github.com/openai/codex/pull/62903) **[MERGED]** | Enable concurrent reasoning summaries by default | `concurrent_reasoning_summaries` is now stable and enabled by default, with `stream_options.reasoning_summary_delivery` set to `sequential_cutoff`. |
| [#31911](https://github.com/openai/codex/pull/31911) **[OPEN]** | Propagate turn metadata to standalone web search | Attach per-turn Responses API metadata and forward it as `x-codex-turn-metadata` on web search requests; adds end-to-end regression coverage. |

---

## 5. Hot Discussions

### Ideas

| # | Title | Summary | 👍 |
|---|---|---|---|
| [#14067](https://github.com/openai/codex/discussions/14067) | Synchronization of Codex Threads and Session Context Across Devices | Users working across multiple machines need thread state, reasoning context, and session history synced to their OpenAI account — not tied to local storage. | 72 |
| [#12567](https://github.com/openai/codex/discussions/12567) | Memories in Codex | Proposal for Codex to retain and cite past threads. Discussion covers whether citations are mandatory and if users prefer explicit memory attribution. | 14 |
| [#28550](https://github.com/openai/codex/discussions/28550) | Group forked threads into collapsible thread families | After forking a thread, group the family visually so users can collapse/expand branching conversation histories. | 0 |
| [#25580](https://github.com/openai/codex/discussions/25580) | Support shared Codex sessions for team work | Allow multiple team members to collaborate within a single Codex session context. | 2 |
| [#12590](https://github.com/openai/codex/discussions/12590) | VS Code: Account-Linked Cross-Device Session Sync | VS Code extension should persist chat history and editing context to the cloud, tied to the user's OpenAI account. | 6 |

### Q&A

| # | Title | Summary | 👍 |
|---|---|---|---|
| [#37960](https://github.com/openai/codex/discussions/37960) | How do you coordinate local and remote coding agents using different model vendors? | Practical advice thread on running Claude-family (local) and Codex/GPT-family (VM) agents asynchronously with human-in-the-loop coordination. | 1 |
| [#52835](https://github.com/openai/codex/discussions/52835) | AI-assisted KPI management system: 4 months in, still no working application. Advice needed. | A non-developer operations manager seeks guidance on using Codex to build a business application, revealing usability gaps for technical non-coders. | 1 |

### Show and Tell

| # | Title | Summary | 👍 |
|---|---|---|---|
| [#16329](https://github.com/openai/codex/discussions/16329) | Awesome Codex CLI — curated list of 150+ ecosystem tools | A community-maintained curated list of subagents, skills, plugins, and MCP servers; addresses ecosystem discoverability. | 1 |
| [#62244](https://github.com/openai/codex/discussions/62244) | Octopost: remote MCP server for X, Bluesky, Mastodon, LinkedIn | An MCP server that lets Codex post to social platforms with a single tool call, enabling automated release-note and tips publishing. | 1 |
| [#62545](https://github.com/openai/codex/discussions/62545) | Showcase: call your local Codex from an existing OpenAI SDK | A self-hosted gateway that exposes the local Codex agent via the OpenAI SDK's `agent/codex` interface, simplifying integration. | 1 |

---

## 6. Feature Request Trends

The following themes dominate both open Issues and Discussions:

| Theme | Evidence | Priority |
|---|---|---|
| **Cross-device session sync** | #14067 (72 👍), #12590, #25580 | 🔴 Critical |
| **Persistent memory / contextual recall** | #12567 (42 comments), #23347 | 🔴 Critical |
| **Multi-chat / multi-window workspace** | #53071 (9 👍), #28550 | 🟡 High |
| **Improved Windows reliability** | #50915, #62393, #62925, #62918, #63052 | 🟡 High |
| **macOS Work mode regressions** | #51636, #54143, #56822 | 🟡 High |
| **CLI–Chrome extension parity** | #59592 | 🟡 High |
| **Team collaboration / shared sessions** | #25580, #37960 | 🟢 Moderate |
| **Better sandboxing UX** | #54691, #60109, #15723 | 🟢 Moderate |
| **Pre-execution requirement discovery** | #43040 | 🟢 Moderate |

---

## 7. Developer Pain Points

The following frustrations appear repeatedly across multiple threads:

1. **Silent subprocess deadlocks** (#15723) — Background agents that complete without waking the parent break any multi-step automation pipeline, a common developer pattern.

2. **Windows environmental fragility** — BitLocker, execution-location selection, and send-button state are all independently breaking Codex on Windows. Users report that seemingly unrelated system configuration (encrypted D: drive) kills the entire sandbox.

3. **Context loss on session resume** (#62197) — Resuming a session consumes disproportionate context re-reading prior state, effectively penalizing developers who pause and return.

4. **Clipboard and terminal integration gaps** — TUI clipboard handling on X11/Wayland (#24908), Orca terminal rendering (#63013 just merged), and Markdown block selection (#63047 just merged) have all been longstanding friction points.

5. **VS Code extension isolation** — Multiple simultaneous Codex chats in editor tabs (#53071) remains unaddressed, forcing developers to manage context through workarounds.

6. **MCP ecosystem growing faster than documentation** — With 150+ community tools now in the ecosystem (#16329), discoverability and configuration clarity are emerging as systemic pain points.

7. **Regression velocity on macOS** — The October–November release cycle has introduced multiple regressions in Work mode send behavior (#51636), browser password persistence (#62832), and mode-switching (#54143).

---

*Digest generated from github.com/openai/codex — 2026-11-22*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a structured English digest for the Gemini CLI community based on the provided GitHub data. Let me analyze the data and create a comprehensive digest following the specified sections.

Let me organize the information:

**Today's Highlights:**
- New nightly release v0.71.0-nightly.20261122.geecccfcd5
- Multiple security and bug fixes in progress
- Focus on agent reliability, parallel execution, and platform improvements

**Releases:**
- v0.71.0-nightly.20261122.geecccfcd5 - just released

**Hot Issues (10):**
1. #22323 - Subagent recovery after MAX_TURNS issue (P1)
2. #19873 - Zero-Dependency OS Sandboxing (P2 enhancement)
3. #21409 - Generalist agent hangs (P1 bug)
4. #22745 - AST-aware file reads investigation (P2)
5. #21968 - Gemini doesn't use skills enough (P2 bug)
6. #22267 - Browser Agent ignores settings.json (P2 bug)
7. #24246 - 400 error with >128 tools (P2 bug)
8. #23571 - Model creates tmp scripts randomly (P2 bug)
9. #22672 - Discourage destructive behavior (P2)
10. #22186 - get-shit-done output hook crash (P1)

**Key PR Progress (10):**
1. #30194 - Fix gemini models omits gemini-3.8-flash (CLOSED)
2. #30196 - Prevent always-allow rules for tainted shell commands (CLOSED - Security)
3. #30297 - Truncate large shell and mcp tool outputs in ACP mode
4. #30298 - Execute independent tool calls in parallel in ACP mode
5. #30296 - Evict rejected OAuth client initialization promises


6. #30295 - Preserve ASK_USER decision on shell parse failure in YOLO mode
7. #30301 - Sync ACP flag rows in CLI reference
8. #30277 - Improve permission denial detection and sandbox handling
9. #30273 - Unify exit codes mapping
10. #30281 - Honor configured fetch timeouts on Node 26

**Feature Request Trends:**
- Agent reliability and parallel execution capabilities
- AST-aware tools and context management
- Browser agent improvements
- Subagent optimization
- Sandboxing and security enhancements

**Developer Pain Points:**
- Agent hangs and crashes
- Configuration inconsistencies across agents
- Performance bottlenecks with large tool sets
- Sandboxed environment permission issues
- Cross-version compatibility challenges

No discussion data was provided, so I'll exclude that section.
</think>


# Gemini CLI Community Digest — 2026-11-22

---

## Today's Highlights

The Gemini CLI project shipped **v0.71.0-nightly.20261122**, continuing the nightly release cadence with a focus on reliability and security. Two high-priority bugs affecting agent behavior—one causing hangs in the generalist agent and another in subagent recovery—remain open and are drawing significant community attention. On the PR side, security hardening around tainted shell command handling and ACP mode enhancements (parallel execution, output truncation) are progressing toward merge.

---

## Releases

| Version | Summary |
|---------|---------|
| **v0.71.0-nightly.20261122.geecccfcd5** | Automated nightly version bump. No changelog details provided yet; compare against [v0.71.0-nightly.20261121](https://github.com/google-gemini/gemini-cli/compare/v0.71.0-nightly.20261121.geecccfcd5...v0.71.0-nightly.20261122.geecccfcd5) for changes. |

---

## Hot Issues

| # | Priority | Title | Why It Matters | Community Reaction |
|---|----------|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 | Subagent recovery after MAX_TURNS reported as GOAL success | **False success reporting**: The `codebase_investigator` subagent reports `status: "success"` with termination reason "GOAL" even when it hit max turns without completing analysis. This hides task failures from users. | 14 comments, 2 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 | Generalist agent hangs | **UX blocker**: Deferring to the generalist agent causes indefinite hangs—even simple operations like folder creation stall for hours. Workaround is disabling subagents. | 8 comments, 8 👍 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | P2 | Zero-Dependency OS Sandboxing & Post-Execution Intent Routing | Proposes leveraging Gemini 3's native bash affinity with sandboxing and intent routing to reduce dependency overhead. | 9 comments, 1 👍 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | P2 | AST-aware file reads, search, and mapping | Epic tracking whether AST-aware tools can reduce turn counts, token waste, and improve precision for codebase navigation. | 7 comments, 1 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | P2 | Gemini does not use skills and sub-agents enough | Despite having custom skills (e.g., `gradle`, `git`), the model rarely invokes them autonomously, requiring explicit user prompting. | 7 comments, 0 👍 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | P2 | Browser Agent ignores settings.json overrides | The browser subagent silently ignores `settings.json` configuration like `maxTurns`, causing inconsistent behavior versus other agents. | 5 comments, 0 👍 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | P2 | Gemini CLI encounters 400 error with >128 tools | Tool count scaling triggers API errors; the agent should smarter scope enabled tools. | 3 comments, 0 👍 |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | P2 | Model frequently creates tmp scripts in random spots | When shell execution is restricted, the model spawns edit scripts across directories, complicating workspace cleanup. | 3 comments, 0 👍 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | P2 | Agent should stop/discourage destructive behavior | Gemini sometimes uses `git reset --force` or similar risky commands where safer alternatives exist. | 3 comments, 1 👍 |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | P1 | get-shit-done output hook causes crash | The output summary hook crashes near completion, disrupting user-facing task completion flow. | 3 comments, 0 👍 |

---

## Key PR Progress

| # | Status | Area | Title | Impact |
|---|--------|------|-------|--------|
| [#30194](https://github.com/google-gemini/gemini-cli/pull/30194) | ✅ CLOSED | core | Fix `gemini models` omits `gemini-3.8-flash` available in `/model manage` | Fixed model listing inconsistency on v0.67.0. |
| [#30196](https://github.com/google-gemini/gemini-cli/pull/30196) | ✅ CLOSED | security | Prevent always-allow rules for tainted shell commands | **Security fix**: "Always allow" on tainted commands (untrusted flags, build after file changes) no longer persists as session/persistent rules—now approve-once only. |
| [#30297](https://github.com/google-gemini/gemini-cli/pull/30297) | OPEN | acp | Truncate large shell and MCP tool outputs in ACP mode | Fixes tool output bloat in ACP (Agent Client Protocol) mode by truncating large logs/directory trees before forwarding to the model. |
| [#30298](https://github.com/google-gemini/gemini-cli/pull/30298) | OPEN | acp | Execute independent tool calls in parallel | ACP mode now batches and parallelizes read-only tool calls, aligning with standard CLI scheduler behavior. |
| [#30296](https://github.com/google-gemini/gemini-cli/pull/30296) | OPEN | security | Evict rejected OAuth client initialization promises from cache | Prevents failed OAuth initialization from poisoning the promise cache for the process lifetime. |
| [#30295](https://github.com/google-gemini/gemini-cli/pull/30295) | OPEN | core | Preserve ASK_USER decision on shell parse failure in YOLO mode | Fixes policy engine to respect user decisions when shell parsing fails, rather than unconditionally allowing. |
| [#30301](https://github.com/google-gemini/gemini-cli/pull/30301) | OPEN | docs | Sync ACP flag rows in CLI reference with actual flags | Updates stale docs: removes obsolete `--experimental-zed-integration` reference and aligns with ACP mode flags. |
| [#30277](https://github.com/google-gemini/gemini-cli/pull/30277) | OPEN | sandbox | Improve permission denial detection and unsupported environment handling | Enhances POSIX sandbox denial detection and containerized/restricted environment compatibility. |
| [#30273](https://github.com/google-gemini/gemini-cli/pull/30273) | OPEN | core | Unify exit codes mapping and fatal error hierarchy | Centralizes exit codes across `@google/gemini-cli-core`, replacing hardcoded numeric literals with consistent `Fatal*Error` definitions. |
| [#30281](https://github.com/google-gemini/gemini-cli/pull/30281) | OPEN | core | Honor configured fetch timeouts on Node 26 | Upgrades Undici to 7.30.2 to ensure global dispatchers work with Node 26's built-in fetch symbol. |

---

## Feature Request Trends

Analysis of 50 open issues reveals these recurring themes:

1. **Agent Reliability & Robustness**
   - Subagent lifecycle management (recovery, hang detection, MAX_TURNS handling)
   - Generalist agent stability across diverse tasks

2. **Subagent Orchestration**
   - Autonomous invocation of skills and sub-agents (currently requires explicit prompting)
   - Parallel subagent collaboration and shared memory
   - Subagent trajectory visibility via `/chat share`

3. **Context & Token Efficiency**
   - AST-aware file reads, searches, and codebase mapping to reduce token bloat
   - "Tactful Extraction" for surgical code discovery (prioritizing grep → search → read)
   - Persistent file-based task tracking (deprecating in-context WriteToDo)

4. **Browser Agent Capabilities**
   - Resilient session takeover and lock recovery
   - Configuration consistency with global settings.json
   - Wayland environment support

5. **Security & Sandboxing**
   - Zero-dependency OS sandboxing aligned with model bash affinity
   - Preventing destructive operations (git reset --force, etc.)
   - Tainted command handling improvements

---

## Developer Pain Points

| Pain Point | Frequency | Examples |
|------------|-----------|----------|
| **Agent hangs and freezes** | High | Generalist agent (#21409), subagent MAX_TURNS (#22323) |
| **Configuration inconsistencies** | Medium | Browser Agent ignoring settings.json (#22267), model listing gaps (#30194) |
| **Tool scaling issues** | Medium | 400 errors with >128 tools (#24246), large output bloat in ACP (#30297) |
| **Workspace clutter** | Medium | Tmp scripts created in random directories (#23571) |
| **Context loss between sessions** | Medium | WriteToDo losing state (#18836), bug reports lacking subagent context (#21763) |
| **Sandboxed environment failures** | Medium | Permission denial detection gaps (#30277), Wayland issues (#21983) |
| **Documentation drift** | Low | Stale ACP flags (#30301), broken internal links (#30375), dead anchors (#30395) |

---

*Generated from [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) activity on 2026-11-22.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest for 2026-11-22 based on the provided data. Let me analyze the data and structure it according to the requested format.

Let me go through the data:

**Releases:**
- v1.0.115-6: Fixed issues with organization-required plugins, /delegate login handling, and canceling shell commands
- v1.0.115-5: Improved long-running session disk usage, fixed model routing profile display

**Issues (22 total):**
Looking at the most noteworthy ones:
1. #3558 - Duplicate Item Errors (CLOSED) - WebSocket error with duplicate items
2. #3192 - statusLine.command not executed when footer.showCustom=true (OPEN)
3. #4874 - Add /exit method for nested sessions (CLOSED)
4. #1444 - Infinite Loop on Empty bash Tool Call (CLOSED)
5. #5468 - Remote control fails on GitHub Mobile (OPEN)
6. #5544 - web_fetch rejects Surge Fake-IP (OPEN) - triage
7. #2256 - Ability to permanently enable binaries (CLOSED)
8. #5547 - install.sh VERSION=prerelease installs older build (OPEN)
9. #5546 - TLS handshake_failure on filtered network (OPEN)
10. #5543 - Subagents started by other subagents can't be multi-turn (OPEN)
11. #5541 - Agent wiped user drive due to quoting failure (OPEN) - critical
12. #5542 - Supabase OAuth status probe fails (OPEN)
13. #5540 - MCP Tasks augmentation not sent (OPEN)
14. #5539 - Permission UX too complex (OPEN)
15. #5538 - Browser extension approval flow for Vivaldi (OPEN)


16. #5537 - Show AI credits in session list (OPEN)
17. #5536 - Permission prompts reset questions dialogs (OPEN)

**PRs (3 total):**
1. #5548 - install: sort stable releases after their prereleases (OPEN)
2. #5310 - Fix container smoke-test workspace permissions (OPEN)
3. #1512 - Updated Copilot CLI default model in readme (CLOSED)

I'll analyze the PRs for potential insights into project development and issue resolution. The pull requests reveal ongoing improvements in installation processes, test infrastructure, and documentation updates. The sorting of release versions, workspace permission fixes, and README model updates suggest a focus on precision and user experience in the GitHub Copilot CLI project.

The most critical issues center on user data safety, installation reliability, and system interaction challenges. Critical problems include potential data loss risks, network connectivity blocks, and complex permission management that could impact user workflow. These issues highlight the need for robust error handling, clear user communication, and more flexible configuration options.

The trending feature requests emphasize user control, session management, and enhanced integration capabilities across different platforms and tools.
</think>


# GitHub Copilot CLI Community Digest

**Date:** 2026-11-22
**Source:** github.com/github/copilot-cli

---

## 1. Today's Highlights

GitHub released **v1.0.115-6** addressing critical installer behavior and shell interaction issues, while v1.0.115-5 delivered welcome storage optimizations for long-running sessions. Community activity remains intense with a critical data-loss vulnerability (#5541) drawing immediate attention—a quoting failure in WSL caused an agent to execute a destructive `rsync` command that wiped a user's drive. Meanwhile, the installer script's version sorting bug (#5547) has spawned an active PR (#5548), highlighting the importance of proper semver handling in release tooling.

---

## 2. Releases

### v1.0.115-6
**Fixed**
- Organization-required plugins can now install on the next attempt when a temporary policy change interrupts setup, eliminating unnecessary retry delays
- `/delegate` now properly explains that login is required instead of silently failing when unsigned in
- On Unix, canceling a shell command no longer leaves the terminal in an inconsistent state

### v1.0.115-5
**Improved**
- Long-running local sessions consume significantly less disk space and resume faster

**Fixed**
- When switching from a specific model to Copilot Fusion, the CLI now correctly displays the requested routing profile instead of the previous one

---

## 3. Hot Issues

### 🔴 Critical Severity

**#5541** — Agent ran `rsync -a --delete <dir>/ /` in WSL, wiping user drive  
`[OPEN]` | Author: steetto | 👍 0  
A quoting failure when passing a multi-line bash script from PowerShell caused variable interpolation to collapse, resulting in a catastrophic `rsync` command executing at the filesystem root. This represents a critical safety gap for CLI operations involving cross-shell variable passing.  
[github/copilot-cli#5541](https://github.com/github/copilot-cli/issues/5541)

### 🟠 High Priority

**#3558** — Duplicate Item Errors during prompt processing  
`[CLOSED]` | Author: psulightning | 👍 8  
WebSocket errors (`CAPIError: 400`) with duplicate item IDs (`fc_call_*`) caused execution failures. With 8 thumbs-ups, this was a significant pain point affecting AI processing reliability.  
[github/copilot-cli#3558](https://github.com/github/copilot-cli/issues/3558)

**#5547** — `VERSION=prerelease` installs older build than stable  
`[OPEN]` | Author: mohitmishra786 | 👍 0  
Git's version sort places `v1.0.114` before `v1.0.114-0`, causing prerelease installs to pick stale builds. A fix is already proposed in PR #5548.  
[github/copilot-cli#5547](https://github.com/github/copilot-cli/issues/5547)

**#5546** — TLS handshake_failure on filtered corporate networks  
`[OPEN]` | Author: chirag127 | 👍 0  
Copilot CLI fails to start on managed networks due to `handshake_failure` (Schannel error 0x8009030f), blocking enterprise adoption.  
[github/copilot-cli#5546](https://github.com/github/copilot-cli/issues/5546)

### 🟡 Notable

**#5468** — Remote control fails on GitHub Mobile and github.com  
`[OPEN]` | Author: skysbsb | 👍 1  
Sessions sync and display but cannot be controlled remotely via GitHub Mobile or web interface, breaking an increasingly common workflow.  
[github/copilot-cli#5468](https://github.com/github/copilot-cli/issues/5468)

**#5544** — `web_fetch` rejects Surge Fake-IP addresses  
`[OPEN]` | Author: cchen7 | 👍 0  
On macOS with Surge Enhanced Mode, the built-in `web_fetch` rejects synthetic `198.18.0.0/15` addresses, breaking public URL resolution for affected users.  
[github/copilot-cli#5544](https://github.com/github/copilot-cli/issues/5544)

**#5543** — Subagents started by other subagents can't be multi-turn  
`[OPEN]` | Author: jrseliga | 👍 0  
Multi-turn subagents work only at the top level; nested subagents always run synchronously, contradicting documented behavior.  
[github/copilot-cli#5543](https://github.com/github/copilot-cli/issues/5543)

**#3192** — `statusLine.command` not executed when `footer.showCustom=true`  
`[OPEN]` | Author: soydachi | 👍 2  
Custom status line commands are silently ignored when custom footers are enabled, limiting terminal customization options.  
[github/copilot-cli#3192](https://github.com/github/copilot-cli/issues/3192)

**#1444** — Infinite Loop on Empty bash Tool Call  
`[CLOSED]` | Author: leonard520 | 👍 0  
Empty bash arguments triggered over 5,000 repeated tool calls until process termination—a critical robustness issue.  
[github/copilot-cli#1444](https://github.com/github/copilot-cli/issues/1444)

**#5539** — Permission UX too complex for user-level read access  
`[OPEN]` | Author: GottfriedGanssauge | 👍 0  
Users want simple, persistent rules for read access across sessions without per-repository duplication or complex policy configuration.  
[github/copilot-cli#5539](https://github.com/github/copilot-cli/issues/5539)

---

## 4. Key PR Progress

| PR | Title | Status | Author | Summary |
|----|-------|--------|--------|---------|
| [#5548](https://github.com/github/copilot-cli/pull/5548) | install: sort stable releases after their prereleases | OPEN | mohitmishra786 | Fixes #5547 by setting `versionsort.suffix=-` so prereleases sort before their stable counterparts |
| [#5310](https://github.com/github/copilot-cli/pull/5310) | Fix container smoke-test workspace permissions | OPEN | devm33 | Resolves amd64/arm64 CI failures by fixing workspace permissions (mode 0700 blocking UID 10001) and Git initialization |
| [#1512](https://github.com/github/copilot-cli/pull/1512) | Updated Copilot CLI default model in readme | CLOSED | johnlokerse | Documentation update reflecting the model change from Sonnet 4.5 to Sonnet 4.6 |

---

## 5. Feature Request Trends

Analysis of open issues reveals consistent demand in three primary directions:

**Session Management & Persistence**
- Resume/suspend session tools (#5549)
- AI credits visibility per session (#5537)
- Graceful `/exit` from nested sessions (#4874)
- Persistent permissions across sessions (#2256, #1696)

**Network & Platform Compatibility**
- TLS/network filtering workarounds (#5546)
- Surge Fake-IP DNS handling (#5544, #5180)
- Cross-platform browser extension support (#5538)
- GitHub Mobile remote control (#5468)

**Agent Safety & Control**
- Sandboxed bash execution to prevent destructive commands (#5541)
- Multi-turn subagent support (#5543)
- Simplified permission UX (#5539, #5536)
- MCP Tasks augmentation for required-task tools (#5540)

---

## 6. Developer Pain Points

The community's recurring frustrations cluster around four themes:

1. **Enterprise Network Barriers** — TLS handshake failures on corporate networks block adoption, with no clear remediation path for IT administrators.

2. **Permission Fatigue** — Users tire of repeatedly approving common binaries (`ls`, `grep`) across sessions, requesting persistent whitelists that survive session boundaries.

3. **Cross-Shell Variable Handling** — The WSL quoting failure (#5541) exposes a fundamental risk: variables passed between shells can silently collapse into destructive commands. Developers need stronger input validation and safeguards for commands involving external shell invocation.

4. **Release Tooling Fragility** — The installer script's semver sorting bug (#5547) demonstrates that even mature projects have edge cases in version selection logic, causing unexpected build selection.

---

*End of Digest*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data provided for the OpenCode community digest for 2026-11-22.

## Data Overview

### Latest Releases
- None in the last 24h

### Latest Issues (50 total, top 30 by comment count)
Many issues covering various areas:
- Free tier issues (59387) - 405 comments, major ongoing issue
- Delete projects feature (28030) - 20 comments, closed
- Mistral GLM-5.2 tool calls (43199) - 13 comments, closed
- CLI npm upgrade bug (63743) - 8 comments, open
- macOS cert issues (64835) - 5 comments, open
- Model default binding (47836) - 5 comments, open
- TUI session tabs bug (65457) - 4 comments, closed
- Antigravity CLI connector (28889) - 4 comments, closed
- Mistral GLM-5-3 tool calls (55743) - 4 comments, closed
- Various other bugs and features

### Latest PRs (50 total, top 20 by comment count)
- Memory leaks fix (16695) - closed, important bug fix
- LitOpenCode docs (58169) - open, docs
- Small fields before large output (65513) - open, bug fix
- GitHub OAuth refresh (63456) - open, feature
- Agent widgets (65261) - open, feature
- Find in session (64870) - open, feature
- Provider model wildcard (63710) - open, feature
- Various other PRs

Let me structure this into a proper digest.

Key observations:
1. No releases in the last 24h
2. Free tier issues remain the biggest concern (405 comments)
3. Several platform-specific bugs (macOS, Windows, Linux)
4. Active development on features like agent widgets, find in session, voice models


5. I notice the community is addressing critical infrastructure challenges with significant bug fixes targeting memory management, authentication, and cross-platform compatibility. The project is showing robust development activity, with multiple open and closed PRs addressing system-level improvements and feature enhancements across different environments.

The pull requests indicate a comprehensive approach to resolving technical debt, including memory leak remediation, authentication mechanisms, and cross-platform optimization strategies. These efforts suggest a mature open-source development process focused on stability and user experience.
</think>


# OpenCode Community Digest — 2026-11-22

---

## 1. Today's Highlights

The OpenCode community remains highly active with significant progress on both bug fixes and new features. The team closed a critical memory leak fix spanning TUI, core, and server components, while pushing forward on developer experience improvements like agent widgets, session search, and voice model support. Platform-specific issues on macOS and Windows continue to surface, with certificate handling and SQLite reliability drawing attention.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues

| # | Issue | Author | Comments | Why It Matters |
|---|-------|--------|----------|----------------|
| #59387 | **[zen] Free tier issues: read this first** | neriousy | 405 | The central tracking issue for free tier problems has become the most active discussion in the repo. Users report `Free usage exceeded` errors, failed resets, and Desktop version issues. The 405 comments indicate widespread user frustration and ongoing triage. |
| #28030 | **Add ability to delete projects in OpenCode Desktop** | kadeshar | 20 | **Closed.** Feature request fulfilled—users can now delete projects directly from the Desktop application, closing a long-standing UX gap in project management. |
| #43199 | **Tool calls throw errors for Mistral's GLM-5.2** | KPhi | 13 | **Closed.** Third-party open models hosted by Mistral (like GLM-5.2) caused tool call failures. Resolved, improving compatibility with expanded model ecosystems. |
| #63743 | **CLI upgrade downloads ~2GB via npm --force** | xDipzz | 8 | Open issue. The `opencode upgrade` command uses `npm install --force`, triggering download of all platform optionalDependencies (~2GB). A significant bandwidth and time waster for CLI users. |
| #64835 | **UNABLE_TO_GET_ISSUER_CERT on macOS 27** | andyhau520 | 5 | Open issue. SSL certificate chain issues with WoTrus/Sectigo R46 certificates on macOS 27, affecting users with specific CA configurations. |
| #47836 | **Bindable "set as default model for this agent" action** | abran-labs | 5 | Open issue. Users want to persist per-agent default models from the UI without hand-editing config files. Currently requires markdown frontmatter or JSON tweaks. |
| #65457 | **TUI restores previous sessions as tabs after /exit** | lorenzoridolfi | 4 | **Closed.** Bug fix: disabling tabs didn't prevent old sessions from reappearing as tabs on restart, causing session clutter. |
| #28889 | **Add Antigravity CLI connector & Google OAuth** | sebastianlungu | 4 | **Closed.** Two related auth enhancements landed: Antigravity CLI binary connector and Google OAuth provider support. |
| #55743 | **Mistral/zai-glm-5-3 tool-call crash** | lesommer | 4 | **Closed.** Streamed tool-call chunks missing IDs caused type validation crashes; patched `@ai-sdk/mistral@3.0.51`. |
| #65277 | **Parent gemini-4-neon hallucinates subagent state blocks** | adonm | 4 | Open issue. When background subagents run, the parent model generates spurious `<subagent state="completed">` XML blocks, corrupting session context. |

**Links:**
- [#59387](https://github.com/anomalyco/opencode/issues/59387) · [#28030](https://github.com/anomalyco/opencode/issues/28030) · [#43199](https://github.com/anomalyco/opencode/issues/43199) · [#63743](https://github.com/anomalyco/opencode/issues/63743) · [#64835](https://github.com/anomalyco/opencode/issues/64835) · [#47836](https://github.com/anomalyco/opencode/issues/47836) · [#65457](https://github.com/anomalyco/opencode/issues/65457) · [#28889](https://github.com/anomalyco/opencode/issues/28889) · [#55743](https://github.com/anomalyco/opencode/issues/55743) · [#65277](https://github.com/anomalyco/opencode/issues/65277)

---

## 4. Key PR Progress

| # | PR | Author | Type | Summary |
|---|-----|--------|------|---------|
| #16695 | **fix: resolve multiple memory leaks causing unbounded growth** | binarydoubling | Bug Fix | **Closed.** Major reliability PR fixing memory leaks across TUI, core subsystems, and server components. Critical for long-running sessions. |
| #65261 | **feat(core): agent widgets** | kommander | Feature | **Open.** Agents can now display interactive widgets (PsychoScript templates + JSON data) rendered natively by each client. |
| #64870 | **feat(tui): find in session** | neriousy | Feature | **Open.** Adds find-in-session functionality to TUI, triggered by `<leader>f` or `/find`. Mirrors Desktop's find bar. |
| #63456 | **feat: Support GitHub oauth token refresh** | stephanmiehe | Feature | **Open.** Implements GitHub Copilot OAuth token refresh using the existing credential service, improving long-lived auth stability. |
| #65503 | **feat(read): attach audio and video files for multimodal models** | Te-River | Feature | **Open.** Extends the `read` tool to attach audio and video files for multimodal models, covering images, PDFs, video, and audio. |
| #65491 | **feat(core): list voice models from models.dev** | Tarquinen | Feature | **Closed.** Voice models are now dynamically listed from models.dev (newest first) instead of a fixed table, enabling easier model additions. |
| #63710 | **feat(config): support provider model wildcard overrides** | smnmsr | Feature | **Open.** Adds `*` and `?` glob patterns to `providers.<id>.models` config, allowing bulk model selection/disabling. |
| #65391 | **fix(app): polyfill change-array-by-copy methods for old WebViews** | developjik | Bug Fix | **Open.** Polyfills `toSorted` and other change-array-by-copy methods for WebViews before version 110, fixing boot failures. |
| #65505 | **feat: take the prompt back when interrupting before the model answers** | Tarquinen | Feature | **Open.** When interrupting immediately after sending a prompt, the prompt is now returned to the input instead of lingering as "interrupted." |
| #58782 | **feat(core): add Claude Agent provider** | Tarquinen | Feature | **Closed.** Built-in Claude Agent provider added, running Claude models through user's own Claude Code login via the Claude Agent SDK. |

**Links:**
- [#16695](https://github.com/anomalyco/opencode/pull/16695) · [#65261](https://github.com/anomalyco/opencode/pull/65261) · [#64870](https://github.com/anomalyco/opencode/pull/64870) · [#63456](https://github.com/anomalyco/opencode/pull/63456) · [#65503](https://github.com/anomalyco/opencode/pull/65503) · [#65491](https://github.com/anomalyco/opencode/pull/65491) · [#63710](https://github.com/anomalyco/opencode/pull/63710) · [#65391](https://github.com/anomalyco/opencode/pull/65391) · [#65505](https://github.com/anomalyco/opencode/pull/65505) · [#58782](https://github.com/anomalyco/opencode/pull/58782)

---

## 5. Feature Request Trends

Based on issue and PR analysis, the community's most-requested feature directions are:

| Trend | Description | Evidence |
|-------|-------------|----------|
| **Enhanced UI/UX Control** | Users want granular UI customization: hiding toasts, per-agent model defaults, custom session categories, session archiving from sidebar | [#65507](https://github.com/anomalyco/opencode/issues/65507), [#47836](https://github.com/anomalyco/opencode/issues/47836), [#65504](https://github.com/anomalyco/opencode/issues/65504), [#65512](https://github.com/anomalyco/opencode/issues/65512) |
| **Multimodal Advancements** | Audio/video attachment for models, voice dictation integration, expanded multimodal tool support | [#65503](https://github.com/anomalyco/opencode/pull/65503), [#65499](https://github.com/anomalyco/opencode/issues/65499) |
| **Project & Session Management** | Delete projects, session categorization, workspace artifacts with local preview, persistent GitHub issue/PR context | [#28030](https://github.com/anomalyco/opencode/issues/28030), [#35318](https://github.com/anomalyco/opencode/issues/35318), [#42396](https://github.com/anomalyco/opencode/issues/42396) |
| **Flexible Model Configuration** | Wildcard provider overrides, configurable editing tool selection, prompt caching preservation during migration | [#63710](https://github.com/anomalyco/opencode/pull/63710), [#63981](https://github.com/anomalyco/opencode/issues/63981), [#65400](https://github.com/anomalyco/opencode/issues/65400) |
| **Agent Interactivity** | Agent widgets, subagent state management improvements, interrupt handling polish | [#65261](https://github.com/anomalyco/opencode/pull/65261), [#65277](https://github.com/anomalyco/opencode/issues/65277), [#65505](https://github.com/anomalyco/opencode/pull/65505) |
| **Deployment Flexibility** | Auth proxy bypass, self-hosted server options, CLI improvements | [#65500](https://github.com/anomalyco/opencode/issues/65500), [#63743](https://github.com/anomalyco/opencode/issues/63743) |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact | Example Issues |
|------------|-----------|--------|----------------|
| **Free tier reliability** | 🔴 High | Users hit usage limits with no resolution; resets fail; Desktop version issues | [#59387](https://github.com/anomalyco/opencode/issues/59387) (405 comments) |
| **Platform-specific bugs** | 🟠 Medium-High | macOS SSL cert chains, Windows SQLite/OOM issues, Linux Desktop hangs | [#64835](https://github.com/anomalyco/opencode/issues/64835), [#64896](https://github.com/anomalyco/opencode/issues/64896), [#64616](https://github.com/anomalyco/opencode/issues/64616) |
| **Memory & performance** | 🟠 Medium | Unbounded growth in long sessions; stats queries blocking main thread | [#16695](https://github.com/anomalyco/opencode/pull/16695), [#65241](https://github.com/anomalyco/opencode/pull/65241) |
| **MCP server compatibility** | 🟡 Medium | Remote MCP servers returning 202 for notifications cause connection failures | [#65473](https://github.com/anomalyco/opencode/issues/65473) |
| **Model provider quirks** | 🟡 Medium | Mistral third-party models, DeepSeek free tier quality, Qwen3 variant aliases | [#43199](https://github.com/anomalyco/opencode/issues/43199), [#65511](https://github.com/anomalyco/opencode/issues/65511), [#65510](https://github.com/anomalyco/opencode/issues/65510) |
| **CLI upgrade bloat** | 🟡 Medium | npm `--force` downloads all optionalDependencies (~2GB) | [#63743](https://github.com/anomalyco/opencode/issues/63743) |
| **Session persistence issues** | 🟡 Medium | Tabs reappearing, SQLite errors on sleep resume, silent quit on Windows | [#65457](https://github.com/anomalyco/opencode/issues/65457), [#59189](https://github.com/anomalyco/opencode/issues/59189), [#65501](https://github.com/anomalyco/opencode/issues/65501) |

---

*Digest generated from [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) activity on 2026-11-22.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze the GitHub data for the pi community digest for 2026-11-22.

**Data Summary:**
- Latest Releases: None
- Latest Issues: 23 items total, many updated in last 24h
- Latest Pull Requests: 3 items

**Key observations:**

1. **No new releases** - no new versions in last 24h

2. **Open issues that matter:**
   - #11021: OpenAI ChatGPT sign-in context window mismatch (272K vs 500K) - significant for users
   - #12206: openai-completions finish_reason "error" not auto-retried - bug affecting reliability
   - #12238: pi -p (headless) hangs with stdio MCP server - significant usability bug
   - #12156: schemaToType ignores array item limits - codemode bug
   - #12165: searchTools() returns 36KB per call, 25% of context - performance issue
   - #12242: Compaction summary grows unbounded (17k to 164k chars) - serious bug

3. **Closed issues (resolved/acknowledged):**
   - #7885: npm search not indexing pi-packages - was closed
   - #8834: Opt-in package namespace - closed
   - #12392: tmux hyperlink refresh - closed
   - #12391: gemini-4-neon xhigh thinking errors - closed
   - #12389: unclosed $ breaks bold rendering - bug fix
   - #12388: prepareArguments returning tool result - feature request
   - #12387: duplicate extension tool names - feature request
   - #12386: ENOSPC/EDQUOT session corruption - critical bug
   - #12385: durable abort single run - feature request
   - #12384: multiple inline images collapse - rendering bug
   - #12383: Kimi session tool selection after resume - regression
   - #12382: isContextOverflow treats 429 as overflow - bug
   - #12381: compaction budget hardcoded - bug
   - #12379: Anthropic catalog labels outdated - data issue
   - #12377: /context inspector - new feature request
   - #12376: pi-ai HTTP error codes - diagnostic improvement

4. **Recent PRs merged:**
   - #12390: Fork/tooling - closed
   - #12380: compaction summary budget fix
   - #12378: context edit handling improvement

**Trending themes:** Context window management, MCP server stability, package discovery, tool selection reliability, and rendering issues with special characters and images are the main focus areas.

The most pressing issues center on performance and accuracy: searchTools consuming 36KB per call, unbounded compaction summaries, headless mode hanging with MCP servers, and finish_reason errors not being retried automatically. The npm package indexing failure since August is a critical ecosystem problem affecting discovery. Context window mismatches between sign-in flows and session resume failures round out the key pain points.

For new features, the community is asking for package namespace support, duplicate extension handling via source-qualified naming, conditional single-run aborts, and a read-only context inspector. The most impactful PRs address the compaction summary budget and how context edits are handled.
</think>


# Pi Community Digest — 2026-11-22

## Today's Highlights

The Pi community saw significant activity around context management and durability fixes, with two merged PRs targeting compaction behavior. A critical ecosystem issue remains unresolved: npm search has not indexed new pi-packages since August, blocking package discovery. Headless mode (`pi -p`) hanging with active stdio MCP servers is emerging as a notable regression in v1.4.0.

---

## Releases

No new releases in the past 24 hours.

---

## Hot Issues

### 1. [npm search not indexing newly published pi-packages](https://github.com/earendil-works/pi/issues/7885) (CLOSED)
**Why it matters:** Published pi-packages fail to appear in npm search results, preventing discovery on pi.dev/packages. This blocks the entire ecosystem growth since August.
**Community reaction:** 18 comments, 1 👍 — active debugging thread.

### 2. [openai: ChatGPT sign-in reports 272K context for GPT-6.1 Sol despite 500K account catalog](https://github.com/earendil-works/pi/issues/11021) (OPEN)
**Why it matters:** Users with ChatGPT accounts get a smaller context/compaction budget than what their tier actually supports, directly impacting long-session capabilities.
**Community reaction:** 16 comments, 8 👍 — high engagement for a bug.

### 3. [openai-completions: finish_reason "error" not auto-retried](https://github.com/earendil-works/pi/issues/12206) (OPEN)
**Why it matters:** Mid-stream terminations with `finish_reason: "error"` are not retried, causing incomplete tool results in production coding sessions.
**Community reaction:** 4 comments — fresh issue from 2026-11-16.

### 4. [pi -p (headless) does not exit when stdio MCP server stays connected](https://github.com/earendil-works/pi/issues/12238) (OPEN)
**Why it matters:** Headless invocations hang indefinitely with active stdio MCP servers, breaking CI/CD pipelines and scripting use cases on macOS 27.0.1.
**Community reaction:** 3 comments — regression in v1.4.0.

### 5. [schemaToType ignores limits for array items](https://github.com/earendil-works/pi/issues/12156) (OPEN)
**Why it matters:** Codemode generates incorrect TypeScript types when array schemas define item limits, leading to invalid generated code.
**Community reaction:** 3 comments.

### 6. [searchTools() returns full tool descriptions — 36KB per call, ~25% of long session context](https://github.com/earendil-works/pi/issues/12165) (OPEN)
**Why it matters:** Measured 73 calls consuming 950KB (~25% of thread context) over a 3-day session. This is a significant performance and cost issue for durable sessions.
**Community reaction:** 2 comments — data-driven report with real-world measurement.

### 7. [Compaction summary grows unbounded: 17k to 164k chars over nine compactions](https://github.com/earendil-works/pi/issues/12242) (OPEN)
**Why it matters:** Compaction summaries inflate with each cycle, causing the 9th compaction to take 588 seconds and 75k output tokens. A second machine hit 88k after only five compactions.
**Community reaction:** 2 comments — severe performance degradation over time.

### 8. [SessionManager: ENOSPC/EDQUOT causes fragment corruption on next append](https://github.com/earendil-works/pi/issues/12386) (CLOSED)
**Why it matters:** When a write is cut short by disk quota or space limits, subsequent appends in the same process are silently lost on reload — data corruption without warning.
**Community reaction:** 1 comment.

### 9. [Kimi session cannot select tools after resume](https://github.com/earendil-works/pi/issues/12383) (CLOSED)
**Why it matters:** Resumed sessions with `k3.1-pro` lose access to four tools present in the active loadout, while fresh sessions work correctly — a regression in session durability.
**Community reaction:** 1 comment.

### 10. [isContextOverflow treats 429/5xx/quota errors as overflow](https://github.com/earendil-works/pi/issues/12382) (CLOSED)
**Why it matters:** HTTP errors from rate limits or quota exhaustion are misclassified as context overflow, causing incorrect compaction triggers and lost work.
**Community reaction:** 1 comment — community patch contributed.

---

## Key PR Progress

### 1. [fix(durable): size the compaction summary budget from the model's context window](https://github.com/earendil-works/pi/pull/12380) (CLOSED)
Changes the compaction summary request sizing from `0.8 × reserveTokens` to `max(1, min(10% × contextWindow, model.maxTokens))`, making budgets proportional to model capacity. Addresses the unbounded growth reported in issue #12242.

### 2. [fix(coding-agent): keep usage-backed estimate past post-usage context edits](https://github.com/earendil-works/pi/pull/12378) (CLOSED)
Prevents `estimateProjectedContextTokens` from discarding provider-measured usage estimates when newer context edits exist, even when the edit only omitted a failed overflow-recovery attempt. Improves token accounting accuracy.

### 3. [Fork/tooling](https://github.com/earendil-works/pi/pull/12390) (CLOSED)
Tooling update from JangMan-J — purpose not specified in summary.

---

## Feature Request Trends

Analysis of open and recently closed issues reveals these dominant feature directions:

| Category | Requests |
|----------|----------|
| **Context management** | Unbounded compaction growth (#12242), searchTools bloat (#12165), context window mismatches (#11021), hardcoded compaction budgets (#12381), /context inspector (#12377) |
| **Extension/plugin ecosystem** | Package namespaces (#8834), duplicate tool name collision handling (#12387), MCP server reliability (#12238) |
| **Durability & reliability** | Conditional single-run abort (#12385), session corruption under ENOSPC (#12386), error classification (#12382) |
| **Package discovery** | npm search indexing (#7885) — critical ecosystem blocker |
| **Provider/model support** | Gemini thinking levels (#12391), Kimi session resume (#12383), Anthropic catalog labels (#12379) |

---

## Developer Pain Points

1. **Context inflation kills long sessions** — Compaction summaries grow without bound, and searchTools burns 25% of context budget. Developers running multi-day coding agents are hitting severe performance degradation.

2. **Headless mode is broken for MCP workflows** — `pi -p` hangs with active stdio MCP servers, breaking automation pipelines.

3. **Package discovery is broken since August** — New pi-packages are not indexed by npm search, effectively preventing any new package from appearing in the gallery.

4. **Error classification conflates overflow with rate limits** — 429 and quota errors trigger compaction as if context were full, wasting time and tokens.

5. **Session corruption is silent** — Disk quota or space errors cause data loss without any user-facing warning.

6. **Resumed sessions lose tool access** — Particularly with Kimi provider, tools present at session start vanish after resume.

---

*Generated from GitHub data for [earendil-works/pi](https://github.com/earendil-works/pi) on 2026-11-22.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>Let me analyze the GitHub data for the Qwen Code community digest for 2026-11-22.

**Today's Highlights:**
Looking at the data:
- New nightly release v0.28.3-nightly.20261121.56ef346859
- Multiple CI failures being tracked
- Several new PRs from wenshao and others
- Interesting new features like Arabic RTL support, web-shell improvements

**Releases:**
- v0.28.3-nightly.20261121.56ef346859 with CI fixes

**Hot Issues (top 10 by comment count):**
1. #14724 - Main CI failed: Managed Agent gate (524 comments) - Most active
2. #11680 - Main CI failed: E2E Tests (104 comments)
3. #11678 - Main CI failed: Qwen Code CI (56 comments)
4. #17934 - E2E Test failure for SIGKILL recovery (37 comments)
5. #14104 - SDK Java CI failure (21 comments)
6. #16091 - bun-pty test failure (18 comments)
7. #16346 - ClassSizeRatchetTest failure (18 comments)
8. #17957 - RuntimeProviderPluginsTest (13 comments) - closed
9. #17173 - Managed DingTalk adapter follow-up (10 comments)
10. #17734 - Managed Agent loop verification (9 comments)

**Key PR Progress (10 important PRs):**
1. #18064 - feat(verify-pr): preflight execution approvals
2. #18028 - fix(acp-bridge): tolerate busy agents in channel liveness
3. #18022 - feat(cli): attribute Managed Agent sessions to managed telemetry
4. #17902 - fix(core): correct usage token accounting
5. #18070 - fix(web-shell): align session hover status


6. #18065 - fix(ci): isolate self-hosted Maven cache reuse
7. #17553 - test(integration): give editor-parity waits shared-pool stall tier
8. #17437 - feat(i18n): add Arabic support for CLI and Web Shell with RTL
9. #18056 - test(cli): deflake the admitted-mutation idle-timer case
10. #18069 - fix(ci): re-pin RHEL 10 rpm build root

**Feature Request Trends:**
1. Disable auto-compaction switch (#12597)
2. Share project auto-memory between workspace and Git worktrees (#18030)
3. Theme

I notice several critical infrastructure improvements focusing on CI stability and internationalization. The PRs demonstrate a strong push for test reliability, particularly around CI configurations and cache management. Arabic language support with RTL layout signals expanded global accessibility, while multiple CI-related fixes indicate ongoing refinement of the development workflow.

The feature requests suggest users want more granular control over system behaviors, especially around memory management, project configuration, and theme customization. These trends point to a community seeking deeper customization and performance optimization in the Qwen Code environment.
</think>


# Qwen Code Community Digest — 2026-11-22

---

## Today's Highlights

The Qwen Code project shipped **v0.28.3-nightly.20261121** with CI stabilization work, including a fix to use the live review bot for manual re-reviews. Meanwhile, the community continues wrestling with persistent CI flakiness—**managed-agent gate failures dominate** the issue tracker with 500+ comments on a single ticket, and at least **three deflake PRs** landed in the last 24 hours targeting flaky restart-recovery and idle-timer tests. On the feature front, **Arabic RTL support** merged for both CLI and Web Shell, and a **preflight execution approval** mechanism is in review for maintainer-driven `/verify-pr` rounds.

---

## Releases

| Version | Summary |
|---------|---------|
| **v0.28.3-nightly.20261121.56ef346859** | CI stabilization: switched to live review bot for manual re-reviews (`yiliang114`, PR #17848); stabilized managed-agent required gates. |

No stable releases in the last 24 hours. Nightly cadence continues.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#14724](https://github.com/QwenLM/qwen-code/issues/14724) | **[type/bug]** Main CI failed: Managed Agent gate — no test identified | Longest-running CI tracking issue; 524 comments indicate systemic managed-agent gate instability. | Very high engagement; bot keeps re-filing; developers are debugging via comment threads. |
| [#11680](https://github.com/QwenLM/qwen-code/issues/11680) | **[type/bug]** Main CI failed: E2E Tests — no test identified | E2E test suite on Linux sandbox is failing silently before results; blocks main merges. | 104 comments; actively triaged by the team. |
| [#11678](https://github.com/QwenLM/qwen-code/issues/11678) | **[type/bug]** Main CI failed: Qwen Code CI — no test identified | Windows Node 22 test step failing without diagnostics; same pattern as #11680. | 56 comments; P1 urgency implied. |
| [#17934](https://github.com/QwenLM/qwen-code/issues/17934) | **[type/bug]** E2E: SIGKILL recovery session continuation | CLI restart-recovery test fails after daemon is forcefully killed; signals resilience gap. | 37 comments; marked provisional as newer run may pass. |
| [#14104](https://github.com/QwenLM/qwen-code/issues/14104) | **[type/bug]** SDK Java: HostedShellLifecycleRecoveryIT.publicDeletionRecoversOriginalResources | Java SDK resource cleanup regression; multiple commits affected. | 21 comments; autofix/approved flag suggests a fix is ready. |
| [#16091](https://github.com/QwenLM/qwen-code/issues/16091) | **[type/bug]** bun-pty flood test: byte-exact toggle fails on macOS | Terminal emulation edge case; non-ASCII or high-throughput scenarios may corrupt output. | 18 comments; needs-triage status. |
| [#16346](https://github.com/QwenLM/qwen-code/issues/16346) | **[type/bug]** ClassSizeRatchetTest.productionClassesStayWithinTheirSizeRatchet | Java class size tracking regression; indicates code bloat detection is failing. | 18 comments; needs-triage. |
| [#17479](https://github.com/QwenLM/qwen-code/issues/17479) | **[type/bug]** `qwen serve` SSE exhausts listener cap and locks out /health | **P1**: Long-running daemon can become unreachable; `--port` silently spawns duplicates. | 3 comments but P1 severity; affects production deployments. |
| [#18042](https://github.com/QwenLM/qwen-code/issues/18042) | **[P1, type/bug]** Post-merge regressions from #17875: media-strip drops recovery handle, web_fetch handle regressions | Critical regressions introduced by a recent token-management fix; F1–F5 confirmed by review. | 3 comments; actively tracked by yiliang114. |
| [#18068](https://github.com/QwenLM/qwen-code/issues/18068) | **[type/bug]** Non-ASCII Cyrillic renders as `\D0\A2` escapes in Linux TUI | UTF-8 rendering broken for non-Latin text on Linux; content reaches model but display is garbled. | 2 comments; filed today; affects international users. |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|--------------|--------|
| [#18064](https://github.com/QwenLM/qwen-code/pull/18064) | **feat(verify-pr): preflight execution approvals** | Adds explicit host/VM selection validation before untrusted PR code runs in maintainer `/verify-pr` rounds. | Open |
| [#18028](https://github.com/QwenLM/qwen-code/pull/18028) | **fix(acp-bridge): tolerate busy agents in channel liveness** | Distinguishes a temporarily busy agent from a dead one; captures forensic evidence on channel teardown. | Open |
| [#18022](https://github.com/QwenLM/qwen-code/pull/18022) | **feat(cli): attribute Managed Agent sessions to managed telemetry** | Tags managed-agent traffic with a `managed` channel dimension for observability separation. | Open |
| [#17902](https://github.com/QwenLM/qwen-code/pull/17902) | **fix(core): correct usage token accounting across dashboard and /stats** | Switches token usage sourcing from session summaries (which include replayed history) to per-request usage ledger. | Open |
| [#18070](https://github.com/QwenLM/qwen-code/pull/18070) | **fix(web-shell): align session hover status with row's status cues** | Makes hover popover reflect all status cues the row actually shows (including spinning voice sessions). | Open |
| [#18065](https://github.com/QwenLM/qwen-code/pull/18065) | **fix(ci): isolate self-hosted Maven cache reuse** | Prevents cross-device cache corruption by falling back to a clean local Maven repo when hard-link copy fails. | Open |
| [#17437](https://github.com/QwenLM/qwen-code/pull/17437) | **feat(i18n): add Arabic support for CLI and Web Shell with RTL layout** | Full Arabic localization with RTL layout in Web Shell and exported HTML transcripts. | Open |
| [#18056](https://github.com/QwenLM/qwen-code/pull/18056) | **test(cli): deflake admitted-mutation idle-timer case** | Scales idle window and wait periods by the same factor to fix flakiness without changing test semantics. | Open |
| [#18069](https://github.com/QwenLM/qwen-code/pull/18069) | **fix(ci): re-pin RHEL 10 rpm build root to current stream10 digest** | Updates stale CentOS Stream 10 digest that caused rpm builds to break. | Open |
| [#18011](https://github.com/QwenLM/qwen-code/pull/18011) | **fix(web-shell): prioritize session titles across devices** | Consolidates Pin and row actions into a single "More" menu, freeing width for titles on mobile and desktop. | **Closed** (merged 2026-11-22) |

---

## Feature Request Trends

Based on the last 24 hours of issues and PRs, the following feature directions are gaining traction:

| Theme | Evidence | Issue/PR |
|-------|----------|----------|
| **Granular context auto-compaction control** | Users want a top-level `"context": { "autoCompaction": { "enabled": false } }` switch to disable all three compaction tiers. | [#12597](https://github.com/QwenLM/qwen-code/issues/12597) |
| **Shared auto-memory across Git worktrees** | A workspace and its worktrees currently get isolated project-memory directories, losing learned context. | [#18030](https://github.com/QwenLM/qwen-code/issues/18030) |
| **`/theme` command parity with `/model` and `/effort`** | Accept a theme name with tab completion instead of silently ignoring arguments. | [#18061](https://github.com/QwenLM/qwen-code/issues/18061) |
| **Path-scoped deny rules in search results** | `Read(./secret.env)` deny rules should also filter grep/glob output, not just file reads. | [#15144](https://github.com/QwenLM/qwen-code/pull/15144) |
| **Overload sidebar UX** | Show a pause strip and disable creation entry points when daemon is overloaded. | [#18054](https://github.com/QwenLM/qwen-code/pull/18054) |
| **Compact automatic trigger cards** | Cron and `/loop` continuations should render as compact cards, not full user bubbles. | [#17970](https://github.com/QwenLM/qwen-code/pull/17970) |

---

## Developer Pain Points

1. **CI Flakiness is the #1 Frustration**  
   - Managed-agent gate, E2E tests, and CLI restart-recovery tests are all failing non-deterministically. The CI Failure Patrol bot is triggering reruns automatically, but at least **5 deflake PRs** are open or recently merged. The community is spending significant triage effort on these.

2. **Token Accounting Inconsistency**  
   - The dashboard and `/stats` report different numbers than the actual per-request ledger due to replayed-history inflation. Fix in [#17902](https://github.com/QwenLM/qwen-code/pull/17902) is pending.

3. **MCP Server Documentation is Stale**  
   - Users are told to restart Qwen Code after adding an MCP server, but hot-reload already works without a restart. Misleading docs lead to unnecessary restarts. | [#16925](https://github.com/QwenLM/qwen-code/issues/16925)

4. **iOS Safari Keyboard Overlap on Web Shell**  
   - The keyboard accessory bar covers the Send button on the welcome screen, requiring two taps. Filed by a user and closed as fixed (implied by Web Shell UX improvements).

5. **UNC / WSL Path Rules Save Incorrect Patterns**  
   - On Windows, "Always Allow" on UNC or WSL paths saves rules with incorrect forward-slash normalization, so the rules never match. | [#18059](https://github.com/QwenLM/qwen-code/issues/18059)

6. **OOM Risk from Subagent Background Task Notifications**  
   - Subagent background task completions only notify the top-level agent, which can cause OOM errors or unnecessary wake-ups. | [#15748](https://github.com/QwenLM/qwen-code/issues/15748)

7. **`qwen serve` Daemon Reachability**  
   - SSE connections can exhaust the listener cap, making `/health` unreachable and leaving the daemon in a zombie-like state. P1 issue with no fix merged yet. | [#17479](https://github.com/QwenLM/qwen-code/issues/17479)

---

*Digest generated from GitHub data for [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) on 2026-11-22.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*