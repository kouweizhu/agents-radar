# AI CLI Tools Community Digest 2026-11-28

> Generated: 2026-11-28 04:09 UTC | Tools covered: 7

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

<think>The user wants me to create a comprehensive cross-tool comparison report analyzing the five AI CLI tools based on the data provided:

1. Claude Code
2. OpenAI Codex
3. Gemini CLI
4. GitHub Copilot CLI
5. OpenCode
6. Pi
7. Qwen Code

I need to analyze the data from all seven tools and create a structured report with:

1. Ecosystem Overview
2. Activity Comparison (table)
3. Shared Feature Directions
4. Differentiation Analysis
5. Community Momentum & Maturity
6. Trend Signals

Let me compile the data:

**Activity Comparison:**

| Tool | Issues (24h) | PRs (24h) | Discussions (24h) | Releases | Notes |
|------|-------------|-----------|-------------------|----------|-------|
| Claude Code | 50 | 3 | 0 | 0 | |
| OpenAI Codex | 31 | 24 | 6 | 1 (rust-v0.174.0-alpha.9) | |
| Gemini CLI | 50 | 24 | 0 | 0 | |
| GitHub Copilot CLI | 31 | 0 | 0 | 4 (v1.0.118-2 series) | |
| OpenCode | 50 | 50 | 0 | 0 | Very high activity |
| Pi | 50 | 11 | 1 | 1 (v1.7.0) | |
| Qwen Code | 50 | 50 | 0 | 1 (sdk-typescript-v0.1.39) | |

Let me now create the cross-tool comparison report.

**Shared Feature Directions appearing across multiple tools:**

1. **Multi-account/workspace management** - Claude Code (#18435), OpenCode (#51197)
2. **Session persistence and resume** - Claude Code (#31992), Pi (v1.7.0), Gemini CLI (ACP session closing)


3. **Context management and compaction** - Claude Code, Pi, Gemini CLI all grapple with context optimization challenges. Claude Code and OpenCode discuss Projects migration concerns, while OpenCode, Claude Code, and Copilot CLI focus on sidebar and TUI improvements. Security remains paramount across platforms, with Claude Code (#112492), Gemini CLI (#30268), and OpenCode addressing permission bypass vulnerabilities. Cross-device synchronization and Windows platform support emerge as critical differentiators, particularly for Claude Code's cross-machine session resume capability.

4. **Agent autonomy and tool orchestration** - Each tool takes a distinct approach: Claude Code prioritizes tool management, Gemini CLI emphasizes subagent recovery, OpenCode introduces tools calling tools, and Pi explores compaction reliability. Context efficiency drives innovation through AST-aware reads (Gemini CLI), transcript management (Pi), and context tier controls (Copilot CLI). MCP integration represents a key extensibility vector, with Gemini CLI implementing protocol versioning, OpenCode advancing connection pooling, and Pi supporting stateless MCP.

5. **Platform-specific adaptations** - Windows Remote Control (Claude Code) and browser tools (OpenCode) represent specialized workflow integrations that enhance platform-native functionality.
</think>


# AI Developer CLI Tools Ecosystem Report

**Date:** November 28, 2026
**Scope:** Cross-platform analysis of seven major AI coding assistant CLIs

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem continues to mature with distinct strategic trajectories across providers. Anthropic's Claude Code and OpenAI's Codex focus on enterprise-grade reliability with security hardening around sandbox and permission models. Google's Gemini CLI prioritizes agent orchestration and subagent collaboration, while GitHub's Copilot CLI emphasizes tight IDE integration and ACP protocol expansion. OpenCode demonstrates the highest community velocity with 50 issues and 50 PRs in 24 hours, signaling aggressive iteration. Emerging players like Pi and Qwen Code target specialized niches—Pi with durable session management and multimodal input support, Qwen Code with managed agent infrastructure and verification workflows. The ecosystem shows convergence on MCP protocol standardization, cross-platform sandbox security, and session continuity features, while diverging on autonomy models (agent teams vs. single-agent focus) and platform targeting.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs Merged (24h) | Discussions (24h) | Releases (24h) | Community Health |
|------|-------------|------------------|-------------------|----------------|------------------|
| **Claude Code** | 50 | 3 | 0 | 0 | Active, bug-focused |
| **OpenAI Codex** | 31 | 0 | 6 | 1 (alpha) | Active, security-focused |
| **Gemini CLI** | 50 | 0 | 0 | 0 | Active, feature-rich |
| **GitHub Copilot CLI** | 31 | 0 | 0 | 4 (patch series) | Active, stable releases |
| **OpenCode** | 50 | 50 | 0 | 0 | Highest velocity |
| **Pi** | 50 | 11 | 1 | 1 (minor) | Active, multimodal |
| **Qwen Code** | 50 | 50 | 0 | 1 (SDK) | Very high velocity |

*All seven tools show strong 24-hour activity. OpenCode and Qwen Code lead in PR throughput, indicating rapid internal development or community contribution. Discussions activity is minimal across most tools, with OpenAI Codex being the primary exception—this appears to be an intentional channel design rather than inactivity.*

---

## 3. Shared Feature Directions

The following capabilities appear as active requirements across multiple tool communities:

### Session Persistence & Continuity

| Tool | Specific Need |
|------|---------------|
| Claude Code | Cross-machine session resume (#31992, 24 👍) |
| Pi | Terminal session resume (released in v1.7.0) |
| Gemini CLI | ACP session closing support (PR #30368) |
| OpenCode | Project removal and session import/export |
| Copilot CLI | `/verify-pr` microVM session isolation |

**Implication:** Multi-device developer workflows are a universal priority. Tools lacking sync capabilities will face competitive pressure.

### Context Efficiency & Memory Management

| Tool | Specific Need |
|------|---------------|
| Claude Code | Projects upgrade lost classic organization (#101369) |
| Pi | Compaction drops unconsumed image results (#66826); pre-compaction visibility (#12565) |
| Gemini CLI | AST-aware file reads investigation (#22745); reasoning token counting (#5607) |
| OpenCode | Auto-compaction infinite loop (#12483); transcript history preservation |
| Copilot CLI | Context tier visibility in `/tasks` footer |

**Implication:** Token economics drive adoption. Tools without proactive context management will experience user friction as project complexity grows.

### MCP Protocol Standardization

| Tool | Specific Need |
|------|---------------|
| Gemini CLI | MCP protocol version forwarding fix (PR #30504) |
| OpenCode | MCP connection pooling (#66914); TLS trust per server (#60039) |
| Pi | MCP 2026-07-28 stateless support (PR #12479) |
| Copilot CLI | MCP server enable/disable race condition fix |

**Implication:** MCP is becoming the de facto plugin standard. Interoperability and protocol compliance are now table stakes.

### Multi-Account & Workspace Management

| Tool | Specific Need |
|------|---------------|
| Claude Code | Multiple Claude account management (#18435, 1,119 👍 — highest request) |
| OpenCode | Project removal API (#51197, closed) |
| Copilot CLI | ACP feature parity with interactive mode (#5354, #5604) |
| Gemini CLI | Skills and sub-agent discoverability (#21968) |

**Implication:** Enterprise users with multiple identities (work/personal, client projects) demand native workspace isolation.

### Windows Platform Parity

| Tool | Specific Need |
|------|---------------|
| Claude Code | Remote Control regression (#92276); computer use approval failures (#103373); bashEditDiff bug (#97146) |
| OpenAI Codex | Message sending disabled (#54564); network access false positives (#53278); taskbar occlusion (#45369) |
| OpenCode | AppImage rendering on Mesa (#18486); UNC path handling (#5586) |
| Copilot CLI | Credential Manager flood (#5591); Entra sign-in caching (#5600) |
| Gemini CLI | Browser subagent fails on Wayland (#21983) |
| Qwen Code | Windows settings hot-reload (#17489) |

**Implication:** Windows represents the largest developer desktop share but consistently receives platform-specific bugs. Tools without dedicated Windows QA will accumulate technical debt.

### Security & Permission Boundaries

| Tool | Specific Concern |
|------|------------------|
| Claude Code | Third-party API keys without consent (#112492); sandbox bypass prompts (#5601) |
| Gemini CLI | YOLO mode security (#30268); sandbox permission denial detection (#30277) |
| OpenCode | Browser tools bypass deny rules (#54044); "ask" permission silently allowed (#66861) |
| Copilot CLI | ACP feature advertisement gaps (#5354) |
| Qwen Code | destructive-diff adversarial protocol (PR #18549) |

**Implication:** Agent autonomy creates attack surface. Security hardening—particularly around sandbox boundaries and permission escalation—is becoming a competitive differentiator.

---

## 4. Differentiation Analysis

### Claude Code (Anthropic)
**Target:** Individual developers and enterprise teams prioritizing reliability
**Focus:** CLI maturity, cross-platform consistency, desktop integration
**Approach:** Conservative feature rollout; high investment in regression testing
**Signature Differentiator:** Multi-account management (1,119 👍, highest-requested feature across entire ecosystem)
**Technical Stance:** Desktop-first with Remote Control as key differentiator; slow on agent teams features

### OpenAI Codex
**Target:** Enterprise with existing OpenAI API investments
**Focus:** ACP protocol expansion, sandbox security, TUI polish
**Approach:** Structured release cadence with alpha/beta channels; security-first
**Signature Differentiator:** ACP (Agent Control Protocol) as integration layer; strong MCP compliance
**Technical Stance:** Heavy investment in Windows platform issues; Rust-based core for performance

### Gemini CLI (Google)
**Target:** Google Cloud users; developers favoring open-source toolchains
**Focus:** Agent orchestration, subagent collaboration, context efficiency
**Approach:** Aggressive feature development; experimental "local subagent sprint"
**Signature Differentiator:** Skills/sub-agent ecosystem with auto-discovery; zero-dependency sandbox proposals
**Technical Stance:** AST-aware context optimization as long-term bet; Node 26 compatibility priority

### GitHub Copilot CLI
**Target:** GitHub ecosystem users; developers already in Microsoft/Azure stack
**Focus:** IDE integration parity, ACP parity, verification workflows
**Approach:** Small patch releases; high regression protection; plugin ecosystem
**Signature Differentiator:** `/verify-pr` with hardware-isolated microVMs; Fusion routing intelligence
**Technical Stance:** Agent Plugins 1.0 as extension model; local/cloud execution control

### OpenCode
**Target:** Power users and developers wanting open-source extensibility
**Focus:** Customization, plugin architecture, rapid iteration
**Approach:** Highest community velocity; aggressive feature merging; open governance
**Signature Differentiator:** Tools calling tools via `context.tool.call`; session import/export
**Technical Stance:** Plugin-first architecture; Rust client in progress; Web Shell as web-based alternative

### Pi
**Target:** Developers prioritizing durability and multimodal input
**Focus:** Session persistence, compaction reliability, video/audio prompts
**Approach:** Thoughtful feature design; multimodal as primary differentiator
**Signature Differentiator:** Terminal session resume (v1.7.0); pi-image generation API; p3 documentation
**Technical Stance:** Cross-provider abstraction; strong documentation culture

### Qwen Code
**Target:** Chinese developer ecosystem; teams needing managed agent infrastructure
**Focus:** Managed agent scheduling, verification workflows, CI reliability
**Approach:** High-velocity internal development; enterprise infrastructure focus
**Signature Differentiator:** Pull scheduling for hosted harnesses; destructive-diff adversarial protocol
**Technical Stance:** Managed services integration; RocketMQ-based resource GC; hardware-isolated verification

---

## 5. Community Momentum & Maturity

### High Velocity / Rapid Iteration

| Tool | Indicators |
|------|------------|
| **OpenCode** | 50 PRs merged in 24h; aggressive feature pipeline; tools calling tools landed |
| **Qwen Code** | 50 PRs merged in 24h; managed agent infrastructure; adversarial verification |
| **Gemini CLI** | 24 PRs in 24h; 11 recently closed; active security hardening cycle |

### Stable Release Cadence

| Tool | Indicators |
|------|------------|
| **GitHub Copilot CLI** | 4 patches in 24h (v1.0.118-0/1/2 series); predictable release cadence |
| **OpenAI Codex** | Alpha release rust-v0.174.0-alpha.9; structured versioning |
| **Pi** | v1.7.0 with session resume; thoughtful feature releases |

### Maturing Community

| Tool | Indicators |
|------|------------|
| **Claude Code** | 1,119 👍 on single feature request; 260-comment threads; established issue taxonomy |

### Community Health Signals

| Tool | Bug:Feature Ratio | Security Focus | Platform Coverage |
|------|-------------------|----------------|-------------------|
| Claude Code | High bug ratio (~60% bugs) | Permission boundaries, auth delays | macOS/Linux strong; Windows lagging |
| OpenAI Codex | Balanced | Sandbox security, MCP compliance | Windows focus; macOS stable |
| Gemini CLI | Balanced | YOLO mode, sandbox permissions | Linux strong; Wayland gaps |
| GitHub Copilot CLI | Low bug ratio | ACP feature parity | macOS focus; Windows CI issues |
| OpenCode | Lower bug ratio (features dominate) | Browser tool bypass, permission scanner | Cross-platform push |
| Pi | Balanced | Durability, transcript integrity | Multimodal parity |
| Qwen Code | High PR volume (features dominate) | Adversarial verification | Windows hot-reload gaps |

---

## 6. Trend Signals

### Industry Trends from Community Feedback

**1. Agent Autonomy is Accelerating**
Across all tools, the community is pushing for agents that operate more independently:
- OpenCode's `context.tool.call` enabling tools to orchestrate other tools
- Gemini CLI's Agent Teams design for parallel multi-model execution
- Pi's video/audio multimodal input support
- Claude Code's cross-machine session resume

*Decision signal: Tools without autonomous subagent capabilities will be perceived as limited for complex workflows.*

**2. Security Hardening is Non-Negotiable**
Permission boundary violations, sandbox bypasses, and credential leaks appear in every tool's issue tracker:
- Claude Code's API key consent issue
- OpenCode's browser tools bypass despite explicit deny rules
- Gemini CLI's YOLO mode respecting safety checks
- Qwen Code's adversarial diff protocol

*Decision signal: Enterprises will demand formal security auditing. Open-source tools should prioritize documented threat models.*

**3. Windows is the Problem Platform**
Every tool shows Windows-specific bugs dominating issue counts:
- Remote Control regressions (Claude Code)
- Network access misreporting (Codex)
- Credential Manager floods (Copilot CLI)
- Settings hot-reload failures (Qwen Code)

*Decision signal: Windows parity requires dedicated platform QA investment. Tools treating Windows as secondary will accumulate technical debt.*

**4. MCP is the Standard Extension Model**
MCP appears in every tool's roadmap:
- Gemini CLI's protocol version forwarding
- OpenCode's connection pooling and TLS trust
- Pi's stateless MCP support
- Copilot CLI's MCP server management

*Decision signal: MCP competency is now table stakes. Tools should invest in MCP server hosting, connection pooling, and protocol compliance testing.*

**5. Context Economics Drive UX**
Token costs and context limits are forcing architectural innovation:
- Pi's compaction reliability fixes
- Gemini CLI's AST-aware file reads investigation
- Claude Code's Projects migration issues
- Copilot CLI's context tier visibility

*Decision signal: Context management is a competitive differentiator. Tools should build proactive context budgeting, compaction summaries, and surgical file reading capabilities.*

**6. Session Persistence is a Core Expectation**
Multi-device workflows require session continuity:
- Pi's terminal session resume (v1.7.0)
- Claude Code's cross-machine session request
- Gemini CLI's ACP session closing
- OpenCode's session import/export

*Decision signal: Single-session-per-process is an architectural limitation. Tools should design for session serialization, remote resume, and cross-device handoff.*

---

## Strategic Summary for Decision-Makers

| Consideration | Leading Tool(s) | Lagging Tool(s) |
|---------------|-----------------|-----------------|
| **Enterprise Security** | OpenAI Codex, Qwen Code | OpenCode (permission bypasses) |
| **Windows Developer Experience** | GitHub Copilot CLI | Claude Code, Gemini CLI |
| **Context Efficiency** | Pi, Gemini CLI | Claude Code (Projects migration) |
| **Plugin Ecosystem** | GitHub Copilot CLI, Gemini CLI | Claude Code |
| **Community Velocity** | OpenCode, Qwen Code | Claude Code |
| **Multimodal Input** | Pi | Claude Code, Copilot CLI |
| **Session Continuity** | Pi | Gemini CLI |
| **Cross-Platform Parity** | OpenCode | Claude Code, Gemini CLI |

**Recommendation:** For teams prioritizing stability and security, OpenAI Codex and GitHub Copilot CLI offer mature release cadences with strong platform testing. For teams wanting maximum customization and cutting-edge features, OpenCode and Gemini CLI provide higher iteration velocity. Pi represents the best option for multimodal-heavy workflows requiring durable session management.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community activity based on the provided data from the anthropics/skills repository. Let me organize the analysis into the requested sections.

Key observations from the data:

**Pull Requests (sorted by comments - but all show "undefined" comments):**
1. #1742 - mcp-builder: support mcp>=2 streamable_http_client import and custom headers
2. #1298 - skill-creator: isolate trigger evals and handle Windows and runtime failures
3. #1245 - Add notion-spec-to-implementation and quantitative-resume-auditor skills
4. #1980 - webapp-testing: avoid shell=True in with_server.py
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


18. #1975 - pptx: reject --cols below 1
19. #1950 - docs(claude-api): update Python pause_turn runner guidance
20. #1615 - Add scnet-hpc skill

The most active discussions are happening on GitHub Issues rather than PRs. Issue #492 about security vulnerabilities in community skills has generated 46 comments, making it the most discussed topic. Issue #228 regarding org-wide skill sharing has 17 comments and appears to be a feature request. Issue #556 about a run_eval.py bug also has significant engagement with comments still being tracked.
</think>


# Claude Code Skills Community Highlights Report

**Repository:** [anthropics/skills](https://github.com/anthropics/skills)
**Data Snapshot:** 2026-11-28

---

## 1. Top Skills Ranking

The following PRs represent the most active or impactful Skill proposals and improvements currently under discussion. While comment counts are unavailable in this dataset, these items are prioritized by recency, technical scope, and community engagement patterns.

| # | PR | Author | Skill | Status | Key Focus |
|---|-----|---------|-------|--------|-----------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) | Kuldeeep18 | `mcp-builder` | OPEN | Fixes MCP v2.0 breaking change — `streamablehttp_client` renamed to `streamable_http_client`, custom HTTP headers now require `create_mcp_http_client` / `http_client` kwargs instead of direct passthrough. Resolves #1668. |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) | MartinCajiao | `skill-creator` | OPEN | Isolates trigger evaluations and fixes Windows compatibility. Addresses per-worker subprocess conflicts, `select()` failures on Windows pipes, and false negatives where unrelated tools interrupt scanning. |
| 3 | [#1245](https://github.com/anthropics/skills/pull/1245) | mrdesouzaphd-cmyk | `notion-spec-to-implementation` + `quantitative-resume-auditor` | OPEN | Dual-skill submission: (1) transforms product/tech specs into actionable Notion task hierarchies with acceptance criteria; (2) performs quantitative resume audits with structured scoring. |
| 4 | [#1980](https://github.com/anthropics/skills/pull/1980) | Pcmhacker-piro | `webapp-testing` | OPEN | **Security fix** — eliminates `shell=True` in `with_server.py` subprocess spawning to prevent command injection (CWE-78) when handling unsanitized user/agent command strings. |
| 5 | [#1792](https://github.com/anthropics/skills/pull/1792) | TINGyu123644 | `docx` | OPEN | Returns an Error on LibreOffice timeout instead of false success; verifies output DOCX contains no revision marks (`w:ins`/`w:del`/`w:moveFrom`/`w:moveTo`) before claiming completion. |
| 6 | [#1771](https://github.com/anthropics/skills/pull/1771) | ProofCore-Protocol | `proofcore-contract-auditor` | OPEN | New skill for Web3 developers: performs automated static analysis of Solidity and Rust smart contracts, anchoring cryptographic audit proofs onto the TON Blockchain via zero-storage Merkle protocol. |
| 7 | [#1703](https://github.com/anthropics/skills/pull/1703) | 70v-Yoyo | `md2video-audio` | OPEN | Zero-cost skill compiling Markdown → professional MP4 videos with realistic voiceovers using Marp for slide conversion and text-to-speech pipeline. |
| 8 | [#525](https://github.com/anthropics/skills/pull/525) | kitao | `pyxel` | OPEN | Enables retro game development and debugging in Python via Pyxel; includes headless input-driven runs, frame inspection, and task-specific state verification. |

---

## 2. Community Demand Trends

Analysis of the Issues board reveals concentrated demand across four vectors:

### 🔧 Platform & Infrastructure
- **Org-wide skill sharing** (#228, 17 comments) — Users need a native mechanism to distribute skills within organizations without manual file handoff.
- **Skill sync reliability** (#62, #2108) — Skills disappearing or syncing incorrectly remains a persistent pain point.

### 🛡️ Security & Trust
- **Namespace trust boundary abuse** (#492, 46 comments — highest engagement) — Community skills distributed under `anthropic/` namespace masquerade as official offerings, enabling elevated permission escalation. This is the single most-discussed topic in the dataset.
- **Command injection vulnerabilities** (#1980) — `shell=True` usage in skill scripts flagged as CWE-78 risk.

### 🐛 Evaluation & Quality Assurance
- **Trigger rate failures** (#556, 13 comments) — `run_eval.py` reports 0% trigger rates across all queries; parallel worker UUID collisions (#1352, 6 comments) compound false negatives.
- **YAML frontmatter parsing errors** (#1997) — Metadata divergence between SKILL.md YAML and parsed scalars corrupts optimization commands.

### 📄 Document Processing
- **DOCX revision mark handling** (#1792, #1734, #2018) — Multiple fixes addressing timeout reporting, orphaned comments, and namespace preservation during run merging.
- **Context window exhaustion** (#1487, 5 comments) — `claude-api` skill injects ~156k tokens in a single call.

---

## 3. High-Potential Pending Skills

These PRs show substantive feature additions with active development momentum and are candidates for near-term merge:

| PR | Skill | Author | Rationale |
|----|-------|--------|-----------|
| [#1771](https://github.com/anthropics/skills/pull/1771) | `proofcore-contract-auditor` | ProofCore-Protocol | Targets Web3 audit market; cryptographic proof anchoring on TON blockchain is novel and differentiated. |
| [#1703](https://github.com/anthropics/skills/pull/1703) | `md2video-audio` | 70v-Yoyo | Low-cost, high-utility content repurposing tool; addresses creator economy use case. |
| [#525](https://github.com/anthropics/skills/pull/525) | `pyxel` | kitao | Targets retro gaming niche with dedicated debugging and verification workflows. |
| [#1615](https://github.com/anthropics/skills/pull/1615) | `scnet-hpc` | lql341 | Enables HPC cluster operations via SSH/Slurm; addresses scientific computing audience. |
| [#1245](https://github.com/anthropics/skills/pull/1245) | `notion-spec-to-implementation` | mrdesouzaphd-cmyk | Bridges product management and implementation; dual-skill approach maximizes utility. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for security-hardened, production-grade skill infrastructure** — spanning trust boundary enforcement (namespace abuse), secure subprocess handling (command injection), reliable evaluation pipelines (trigger rate accuracy), and robust sync mechanisms — reflecting a maturation from experimental adoption to enterprise deployment readiness.

---

<think>The user wants me to generate a structured English digest for the Claude Code community based on the provided GitHub data for 2026-11-28. Let me analyze the data and create a comprehensive digest.

Looking at the data:

1. **Latest Releases**: None in the last 24h
2. **Latest Issues**: 50 items, showing top 30 by comment count
3. **Latest Pull Requests**: 3 items

Let me structure this into the requested sections:

1. **Today's Highlights** - 2-3 sentences
2. **Releases** - None mentioned
3. **Hot Issues** - Pick 10 noteworthy
4. **Key PR Progress** - Pick 10 important PRs (but there are only 3)
5. **Hot Discussions** - No discussion data provided
6. **Feature Request Trends**
7. **Developer Pain Points**

Let me identify the most important issues:

1. #18435 - Multiple Claude accounts management (260 comments, 1119 👍) - HUGE feature request
2. #82049 - Magic link email delays (24 comments, 43 👍) - Auth issue
3. #92276 - Windows Remote Control regression (18 comments, 14 👍) - Bug/regression
4. #31992 - Cross-machine session resume (18 comments, 24 👍) - Enhancement
5. #101369 - Broken Projects upgrade (13 comments, 12 👍) - Regression
6. #97146 - Linux bashEditDiff concurrent session bug (11 comments, 8 👍)
7. #103373 - Computer use auto-denied on Windows (8 comments, 2 👍)
8. #107851 - Desktop start_session over Remote Control (7 comments, 4 👍)
9. #102108 - Sidebar subgroups/headers enhancement (5 comments, 5 👍)
10. #107436 - Computer use approval on Windows (5 comments, 1 👍)


11. #112804 - Desktop sidebar styling
12. #112800 - Extension slot removed in Desktop app

For PRs, I have:
1. #106972 - Run dedupe agents in foreground (CLOSED)
2. #112684 - Comment on issues when sweep marks them stale (OPEN)
3. #112436 - Don't mark reproducible/high-impact issues as stale (CLOSED)

Key themes emerging: multi-account management dominates feature requests, auth problems are persistent (magic links), Windows platform has multiple regressions and platform-specific issues, Projects feature is undergoing major changes, and cost/usage tracking concerns are becoming more prominent.
</think>


# Claude Code Community Digest — 2026-11-28

---

## 1. Today's Highlights

The community's most-requested feature—**multi-account management in Claude Desktop**—continues gaining momentum with 1,119 👍 and 260 comments on issue #18435. A critical Windows regression affecting Remote Control scheduled tasks has emerged alongside multiple reports of computer use approval failures on Windows platforms. The internal sweep automation received improvements to better protect high-impact issues from being marked stale.

---

## 2. Releases

**No new releases** were published in the last 24 hours.

---

## 3. Hot Issues

### 🔥 #18435 — Multiple Claude Account Management *(CRITICAL FEATURE REQUEST)*
**Author:** Agentic-Marketer | **Comments:** 260 | **👍:** 1,119

The community's top-requested feature asks for easy profile switching between multiple Claude accounts within the Desktop app. Users currently lack a native way to manage work/personal accounts or switch contexts without manual re-authentication.

🔗 [View Issue #18435](https://github.com/anthropics/claude-code/issues/18435)

---

### 🔥 #82049 — Magic Link Sign-in Delays 2–5 Minutes
**Author:** leojianliu-dot | **Comments:** 24 | **👍:** 43 | **Area:** auth

Claude.ai magic link emails have become progressively slower since mid-July 2026, now taking 2–5 minutes instead of seconds. This directly impacts workflow when sessions expire and users need to re-authenticate.

🔗 [View Issue #82049](https://github.com/anthropics/claude-code/issues/82049)

---

### 🐛 #92276 — Windows Remote Control Auto-Enable Regression
**Author:** l1204366 | **Comments:** 18 | **👍:** 14 | **Regression**

A regression between Desktop versions 1.40609.0 and 1.44121.4 causes Remote Control to never auto-enable for scheduled-task sessions on Windows 11 Pro. Still present in version 1.46388.3.

🔗 [View Issue #92276](https://github.com/anthropics/claude-code/issues/92276)

---

### 💡 #31992 — Cross-Machine Session Resume
**Author:** noctilust | **Comments:** 18 | **👍:** 24 | **Area:** cli

Feature request to sync session state for CLI-to-CLI handoff across machines. This would enable developers to start work on one machine and seamlessly continue on another without losing context.

🔗 [View Issue #31992](https://github.com/anthropics/claude-code/issues/31992)

---

### 🐛 #101369 — Projects Upgrade Wiped Classic Projects
**Author:** voidfreud | **Comments:** 13 | **👍:** 12 | **Regression** | **Platform:** web

Users report that the "Projects" feature upgrade converted classic claude.ai chat projects without consent, warning, or opt-out. The previous sealed-folder organization model is reportedly lost with no way to restore it.

🔗 [View Issue #101369](https://github.com/anthropics/claude-code/issues/101369)

---

### 🐛 #97146 — Linux bashEditDiff Shows Concurrent Session's Edits
**Author:** balint-korcsmar | **Comments:** 11 | **👍:** 8 | **Platform:** linux

A concurrency bug on Linux causes `bashEditDiff` to display edits from another active Claude session, including changes made before the command started. Related to similar issues on macOS.

🔗 [View Issue #97146](https://github.com/anthropics/claude-code/issues/97146)

---

### 🐛 #103373 — Computer Use Auto-Denied Without Prompt (Windows)
**Author:** happycrelab-web | **Comments:** 8 | **👍:** 2 | **Platform:** Windows

`request_access` calls from project threads via Remote Control are auto-denied without any user prompt on Windows 11 Home, preventing legitimate computer use workflows.

🔗 [View Issue #103373](https://github.com/anthropics/claude-code/issues/103373)

---

### 💡 #107851 — Desktop start_session Over Remote Control
**Author:** nicholas-toulouse-ahh | **Comments:** 7 | **👍:** 4 | **Platform:** macOS

Feature request to allow `start_session` to work when triggered via Remote Control, enabling more flexible session initialization in remote workflows.

🔗 [View Issue #107851](https://github.com/anthropics/claude-code/issues/107851)

---

### 💡 #102108 — Sidebar Subgroups and Session Indicators
**Author:** hebessa | **Comments:** 5 | **👍:** 5 | **Platform:** Windows

Enhancement request for the Desktop app sidebar to include subgroups, stronger group headers, indented sessions, and unread indicators—improving navigation for power users with many sessions.

🔗 [View Issue #102108](https://github.com/anthropics/claude-code/issues/102108)

---

### 🐛 #107436 — Computer Use Approval Never Shown in Remote Control
**Author:** Maxwellwr | **Comments:** 5 | **👍:** 1 | **Platform:** Windows | **Status:** CLOSED

This regression report (now closed) documented computer use approval dialogs failing to appear during Remote Control sessions on Windows, blocking automated workflows.

🔗 [View Issue #107436](https://github.com/anthropics/claude-code/issues/107436)

---

## 4. Key PR Progress

### #106972 — Run Dedupe Agents in Foreground ✅ CLOSED
**Author:** bpasero-ant

Fixes a bug where dedupe runs would cut off agents started in the background. Sets `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1` on dedupe steps to ensure agents complete fully.

🔗 [View PR #106972](https://github.com/anthropics/claude-code/pull/106972)

---

### #112684 — Comment on Issues When Sweep Marks Them Stale 🔄 OPEN
**Author:** bpasero-ant

Enhancement to the stale-sweep automation that now posts a comment when marking issues stale. Processes up to 100 issues per run, improving community notification.

🔗 [View PR #112684](https://github.com/anthropics/claude-code/pull/112684)

---

### #112436 — Don't Mark Reproducible or High-Impact Issues as Stale ✅ CLOSED
**Author:** bpasero-ant

Improvement to the stale sweep to preserve issues with labels: `has repro`, `reproduced`, `data-loss`, `high-priority`. Prevents accidental closure of critical bug reports.

🔗 [View PR #112436](https://github.com/anthropics/claude-code/pull/112436)

---

## 5. Feature Request Trends

Analysis of open issues reveals these dominant feature directions:

| Trend | Description | Representative Issues |
|-------|-------------|----------------------|
| **Multi-Account Management** | Native profile switching for personal/work accounts | #18435 |
| **Cross-Device Continuity** | Session sync and resume across machines | #31992 |
| **Sidebar Improvements** | Custom styling, subgroups, visual hierarchy | #102108, #112804 |
| **Cost Visibility** | Token usage estimates, confirmation dialogs | #112458, #108851 |
| **Remote Control Enhancements** | Better session initialization over RC | #107851, #103373 |
| **Projects Control** | Opt-out toggles, account memory settings | #101369, #112801 |

---

## 6. Developer Pain Points

### Authentication & Access
- **Magic link delays** causing workflow interruptions (#82049)
- **GitHub integration failures** in cloud sessions (#112802)
- **Auto-denied access requests** blocking computer use on Windows (#103373)

### Windows Platform Issues
- Remote Control regressions breaking scheduled tasks (#92276)
- Computer use approval dialogs failing in project threads (#107436)
- Extension slot removal affecting sidebar plugins (#112800)

### Cost & Resource Management
- **No usage warnings** before launching large agentic workflows (#112458)
- **Token upload bloat** in long sessions (1 MB+ per request) (#111552)
- **Weekly limits not resetting** properly after plan changes (#112755)

### Projects Migration
- Unwanted conversion from classic projects with no opt-out (#101369)
- Loss of "toggle to opt out of coordinator" functionality (#112801)

### Data & Security
- Third-party API keys used without user consent (#112492)
- Session state corruption showing concurrent edits (#97146)

---

*Digest generated from GitHub data for [anthropics/claude-code](https://github.com/anthropics/claude-code) — 2026-11-28*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate an OpenAI Codex community digest for 2026-11-28 based on the provided GitHub data. Let me analyze the data and structure it according to the requested format.

Let me go through the data:

1. **Latest Releases**: rust-v0.174.0-alpha.9 released

2. **Latest Issues**: 50 items total, showing top 30 by comment count. Let me pick 10 noteworthy ones:
   - #45163: TUI palette cache issue (39 comments, 46 👍) - high engagement
   - #54564: Windows cannot send messages (35 comments)
   - #54989: Windows browser toggle issue (35 comments)
   - #53278: Windows networkAccess issue (30 comments)
   - #45369: Windows taskbar issue (23 comments)
   - #63869: "ChatGPT hit a snag" error (18 comments)
   - #63093: macOS local/cloud selector missing (14 comments)
   - #59344: Windows workspace routing fails (13 comments)
   - #42963: Windows composer disappears (12 comments)
   - #38762: migrate-rollouts subagent issue (11 comments)

3. **Latest Pull Requests**: 24 items total, showing top 20 by comment count (but comments are undefined for all). Let me pick 10 important ones:
   - #64416: Honor declared filesystem permissions in Windows sandboxes
   - #64415: Preserve Linux sandbox restrictions across writable symlink aliases
   - #64411: Fit the Agent Command Center grouping header to the panel
   - #64400: Fix TUI Markdown line breaks before inline code
   - #64398: Seal synthetic mounts in read-restricted Linux sandboxes
   - #64396: Show confirmed thread permissions in TUI status
   - #64393: Track server-confirmed thread permissions in the TUI
   - #64391: Remove dim styling from hook details in the TUI
   - #64388: Bind Linux sandbox paths before shell snapshot replay
   - #64384: Report pending startup dialogs through terminal program status

4. **Latest Discussions**: 6 items total across different categories. Notable ones include discussions about memory integration in Codex, a demonstration of Codexless capabilities, and a question about Go subscription access.

Now I'll structure this into a comprehensive digest.
</think>


# OpenAI Codex Community Digest

## 2026-11-28

---

## Today's Highlights

The Codex team shipped **rust-v0.174.0-alpha.9**, while a significant number of Windows-specific issues dominated community discussion—particularly around message sending failures, browser toggle inconsistencies, and sandbox permission handling. On the PR front, multiple security-focused changes landed in the sandbox and permissions subsystems, addressing long-standing concerns about filesystem restrictions across both Linux and Windows environments.

---

## Releases

### rust-v0.174.0-alpha.9
**Release Summary**: This alpha release continues the Rust codebase iteration cycle. No changelog details were provided in the release notes.

---

## Hot Issues

| # | Issue | Key Points | Community Reaction |
|---|-------|------------|-------------------|
| [#45163](https://github.com/openai/codex/issues/45163) | **TUI palette cache breaks after system theme change** | Startup-only cache leaves input unreadable when system light/dark mode changes. Affects CLI v0.154.0 and upstream `main`. | **39 comments, 46 👍** — High-impact UX bug affecting terminal users. Users report complete loss of input visibility. |
| [#54564](https://github.com/openai/codex/issues/54564) | **[Windows] Cannot send messages in new Work threads** | Send button remains permanently disabled in new Work sessions. Version 26.1013.3656.0 affected. | **35 comments, 1 👍** — Blocks core workflow for Windows Work users. Multiple affected users confirmed. |
| [#54989](https://github.com/openai/codex/issues/54989) | **Windows browser-use reports disabled despite toggle being on** | Browser tools repeatedly fail with "disabled" error even when Browser setting is enabled. Full app restart temporarily fixes. | **35 comments, 1 👍** — Intermittent but frequent. Suggests state sync issue between settings and runtime. |
| [#53278](https://github.com/openai/codex/issues/53278) | **Windows applies `networkAccess=false` despite enabled network access** | Codex Desktop on Windows incorrectly applies network restrictions even when explicitly allowed. | **30 comments, 6 👍** — Security boundary concern. Users unable to access network resources despite permissions. |
| [#45369](https://github.com/openai/codex/issues/45369) | **Windows auto-hidden taskbar cannot be revealed while app is maximized** | Maximized ChatGPT Desktop prevents mouse-triggered taskbar reveal on Windows. | **23 comments, 9 👍** — OS integration regression affecting daily workflow. |
| [#63869](https://github.com/openai/codex/issues/63869) | **ChatGPT repeatedly displays "hit a snag" after loading home screen** | macOS-specific crash/restart loop. Affects Intel MacBook Pro on macOS 15.7.5. | **18 comments, 7 👍** — Critical stability issue. Discovered Nov 25, 2026. |
| [#63093](https://github.com/openai/codex/issues/63093) | **macOS Work: local/cloud run selector missing in new chats** | Users cannot select execution location (local vs cloud) in new Work sessions. v26.1117.41037. | **14 comments, 8 👍** — Loss of key functionality. Chinese user report highlights confusion. |
| [#59344](https://github.com/openai/codex/issues/59344) | **Windows workspace routing fails during active use** | HTTP 432 / `account/read -32603` errors during browser OAuth login. | **13 comments, 1 👍** — Authentication flow broken for Windows Desktop users. |
| [#42963](https://github.com/openai/codex/issues/42963) | **Windows composer disappears after assistant response** | Message input area vanishes after first assistant reply in Chat mode. | **12 comments, 4 👍** — Persistent UI regression across multiple versions. |
| [#38762](https://github.com/openai/codex/issues/38762) | **migrate-rollouts leaves persisted subagent threads with empty history** | Migration tool breaks subagent session continuity. Affects offline local-store migrations. | **11 comments, 1 👍** — Data integrity concern during migration scenarios. |

---

## Key PR Progress

| # | PR Title | Impact |
|---|----------|--------|
| [#64416](https://github.com/openai/codex/pull/64416) | **Honor declared filesystem permissions in Windows sandboxes** | Fixes MXC volume expansion overriding directory alias restrictions. Improves Windows sandbox security boundaries. |
| [#64415](https://github.com/openai/codex/pull/64415) | **Preserve Linux sandbox restrictions across writable symlink aliases** | Prevents parent mounts from being overridden by child mounts when symlinks are involved. |
| [#64411](https://github.com/openai/codex/pull/64411) | **Fit Agent Command Center grouping header to the panel** | UI polish: prevents header clipping in narrow panels with responsive label shortening. |
| [#64400](https://github.com/openai/codex/pull/64400) | **Fix TUI Markdown line breaks before inline code** | Fixes rendering bug where inline code after headings in list items appended incorrectly to heading lines. |
| [#64398](https://github.com/openai/codex/pull/64398) | **Seal synthetic mounts in read-restricted Linux sandboxes** | Prevents commands from modifying synthetic directories outside explicitly writable paths. |
| [#64396](https://github.com/openai/codex/pull/64396) | **Show confirmed thread permissions in TUI status** | TUI now displays server-confirmed permissions instead of local config values, improving accuracy. |
| [#64393](https://github.com/openai/codex/pull/64393) | **Track server-confirmed thread permissions in the TUI** | Infrastructure change enabling TUI to receive sandbox policy snapshots from app server. |
| [#64391](https://github.com/openai/codex/pull/64391) | **Remove dim styling from hook details in the TUI** | Accessibility/UX improvement for hooks browser detail pane readability. |
| [#64388](https://github.com/openai/codex/pull/64388) | **Bind Linux sandbox paths before shell snapshot replay** | Ensures `TMPDIR` and `HOME`-dependent filesystem rules maintain meaning across command environment changes. |
| [#64384](https://github.com/openai/codex/pull/64384) | **Report pending startup dialogs through terminal program status** | Terminal hosts can now detect when Codex is blocked waiting for directory trust or startup hooks. |

**Additional Notable Fixes**:
- [#64382](https://github.com/openai/codex/pull/64382): Clean up unused TUI image paste files on exit
- [#64369](https://github.com/openai/codex/pull/64369): Respect sandbox read restrictions in remote plugin approvals
- [#64368](https://github.com/openai/codex/pull/64368): Interrupt running commands promptly when approval is canceled
- [#64355](https://github.com/openai/codex/pull/64355): Share tool approval logic across initial attempts and retries

---

## Hot Discussions

### 💡 Ideas
| # | Topic | Summary |
|---|-------|---------|
| [#12567](https://github.com/openai/codex/discussions/12567) | **Memories in Codex** | Proposal for Codex to retain and cite information from previous threads. Author asks about citation necessity (1-5 scale) and privacy preferences. |
| [#64264](https://github.com/openai/codex/discussions/64264) | **Keeping long-running Codex conversations on track** | Discussion on maintaining conversation direction across many turns during software development, research, and planning tasks. |

### ❓ Q&A
| # | Topic | Summary |
|---|-------|---------|
| [#64406](https://github.com/openai/codex/discussions/64406) | **Go subscription in Codex** | Question about Go subscription quota benefits compared to free tier. |

### 🎨 Show and Tell
| # | Topic | Summary |
|---|-------|---------|
| [#38868](https://github.com/openai/codex/discussions/38868) | **Codexless** | Open-source tool letting ChatGPT reuse local Codex capabilities and only invoke full Codex Agent when needed. |
| [#64414](https://github.com/openai/codex/discussions/64414) | **Straitjacket - Filter noisy test output** | MCP sidecar that captures test results without bloating context while retaining evidence for retrieval. |
| [#64280](https://github.com/openai/codex/discussions/64280) | **Agent Cat - Menu bar quota monitor** | Free menu bar/tray monitor showing Codex CLI remaining quota, reset times, and run state. |

---

## Feature Request Trends

Based on aggregated issue and discussion analysis:

| Trend | Description | Evidence |
|-------|-------------|----------|
| **Improved Session Persistence** | Users want reliable state preservation across migrations, restarts, and long-running sessions. | [#38762](#38762), [#12567](#12567) |
| **Cross-Platform Consistency** | Windows platform lags macOS in stability and features (composer, voice mode, Work selector). | [#63093](#63093), [#63526](#63526), [#54564](#54564) |
| **Better Sandbox Visibility** | Developers want clearer feedback on what permissions are active and confirmed. | [#64396](#64396), [#64393](#64393) |
| **Conversation Memory** | Strong interest in Codex maintaining context and memories across threads without manual context injection. | [#12567](#12567) |
| **Quota & Usage Transparency** | Users want real-time visibility into usage limits and reset schedules. | [#64280](#64280) |
| **Context Management** | Community-built tools to filter/manage context bloat from test output and large artifacts. | [#64414](#64414) |

---

## Developer Pain Points

1. **Windows Platform Instability**: The Windows desktop app experiences a disproportionate share of bugs—message sending failures, browser toggle failures, network restriction misapplication, taskbar conflicts, and composer disappearing. This creates a frustrating experience for Windows-based developers.

2. **TUI/CLI Rendering Issues**: Palette caching in the TUI fails on theme changes, and Markdown rendering has edge cases with inline code formatting. These terminal-focused issues affect CLI power users.

3. **Sandbox Permission Confusion**: Multiple issues highlight unclear permission states—the TUI reports local config permissions that may differ from server-confirmed sandbox policies. Remote plugin approvals can also incorrectly attribute commands.

4. **Missing UI Controls**: macOS Work users lost the local/cloud run selector, preventing execution location selection. Windows users lack voice mode in Projects.

5. **Intermittent Failures**: Several issues (browser toggle, "hit a snag" errors) describe bugs that temporarily resolve without configuration changes, making debugging difficult and suggesting race conditions or state sync issues.

6. **MCP Server Lifecycle Issues**: Global stdio MCP servers start in the thread's folder, causing failures when project folders are deleted between sessions.

---

*Digest generated from GitHub data • [openai/codex](https://github.com/openai/codex)*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the GitHub data provided and generate a structured digest for the Gemini CLI community.

Looking at the data:

**Releases:** None in the last 24h

**Issues:** 50 total items shown, top 30 by comment count. Let me pick the 10 most noteworthy:
1. #22323 - Subagent recovery after MAX_TURNS (14 comments) - P1 bug
2. #19873 - Zero-Dependency OS Sandboxing (9 comments) - P2 enhancement
3. #21409 - Generalist agent hangs (8 comments) - P1 bug
4. #22745 - AST-aware file reads investigation (7 comments) - P2 feature
5. #21968 - Gemini doesn't use skills and sub-agents enough (7 comments) - P2 bug
6. #22232 - Browser agent resilience enhancement (6 comments) - P3 feature
7. #22267 - Browser Agent ignores settings.json (5 comments) - P2 bug
8. #21983 - Browser subagent fails in wayland (4 comments) - P1 bug
9. #20079 - Symlink agent filename issue (4 comments) - P2 bug
10. #24246 - 400 error with >128 tools (3 comments) - P2 bug

**Pull Requests:** 24 total items. Let me pick the 10 most important:

1. #30504 - MCP protocol version fix (today, Nov 28)
2. #30503 - CI release patch comment auth (today, Nov 28)
3. #30498 - Honor abort signal in background output reads (priority/p2)
4. #30489 - Normalize CRLF line endings
5. #30493 - GOOGLE_CLOUD_PROJECT_ID fallback
6. #30368 - ACP session closing support


7. #30268 - YOLO mode security fix (CLOSED)
8. #30277 - Sandbox permission denial handling (CLOSED)
9. #30273 - Exit codes mapping (CLOSED)
10. #30281 - Fetch timeouts on Node 26 (CLOSED)

I'll synthesize a technical digest focusing on critical development insights, highlighting key improvements and unresolved challenges in the Gemini CLI ecosystem.

The digest will prioritize technical depth, emphasizing architectural enhancements, performance optimizations, and critical bug resolutions that impact system reliability and developer experience.
</think>


# Gemini CLI Community Digest — 2026-11-28

## Today's Highlights

The Gemini CLI project shows continued momentum with active development across agent behavior, MCP protocol compliance, and platform stability. Two new PRs landed today addressing MCP transport protocol versioning and CI authentication fixes, while the community continues to grapple with several P1 agent reliability issues including subagent recovery logic and generalist agent hangs. Platform improvements targeting Node 26 compatibility, sandbox permission handling, and YOLO mode security were merged this cycle.

---

## Releases

No new releases in the last 24 hours. The project continues to ship nightly builds (latest: `0.63.0-nightly.*`).

---

## Hot Issues

### 1. [Subagent Recovery Logic Fails After MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323) — 14 comments, 👍 2
**Priority: P1 | Area: Agent**

The `codebase_investigator` subagent incorrectly reports `status: "success"` with termination reason `"GOAL"` even when it hits the maximum turn limit before completing analysis. This masks failures and can mislead users about task completion. The community debate centers on whether the termination status should reflect the turn limit hit or remain a success if partial progress was made.

### 2. [Generalist Agent Hangs Indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409) — 8 comments, 👍 8
**Priority: P1 | Area: Agent**

Whenever Gemini CLI defers to the generalist agent, execution hangs permanently—sometimes for hours—regardless of task complexity (even simple folder creation). Users have found a workaround by instructing the model not to use subagents. This is a critical UX blocker affecting core functionality.

### 3. [Zero-Dependency OS Sandboxing via Model's Bash Affinity](https://github.com/google-gemini/gemini-cli/issues/19873) — 9 comments, 👍 1
**Priority: P2 | Area: Agent**

Proposes leveraging Gemini 3's native POSIX tool chaining capabilities for zero-dependency OS sandboxing with post-execution intent routing. This ambitious enhancement could reduce dependency overhead while maintaining security boundaries, though it requires careful architectural planning.

### 4. [AST-Aware File Reads, Search, and Mapping Investigation](https://github.com/google-gemini/gemini-cli/issues/22745) — 7 comments, 👍 1
**Priority: P2 | Area: Agent**

An epic tracking investigation into whether AST-aware tools can improve precision of file reads, reduce token noise, and enable syntax-aware navigation. Success here could significantly reduce context bloat (currently ~36.6k tokens/turn baseline) and improve surgical code discovery.

### 5. [Gemini Doesn't Leverage Skills and Sub-Agents Autonomously](https://github.com/google-gemini/gemini-cli/issues/21968) — 7 comments, 👍 0
**Priority: P2 | Area: Agent**

Despite having custom skills and sub-agents defined, Gemini rarely invokes them unless explicitly instructed. Users report manually prompting for skill usage even when tasks are clearly aligned with available capabilities. This underutilization limits the tool's effectiveness.

### 6. [Browser Agent Resilience: Session Takeover and Lock Recovery](https://github.com/google-gemini/gemini-cli/issues/22232) — 6 comments, 👍 0
**Priority: P3 | Area: Agent**

The `BrowserManager` currently employs a fail-fast strategy when encountering locked profiles in persistent session mode. This issue requests automatic session takeover and lock recovery to improve robustness in long-running workflows.

### 7. [Browser Agent Ignores settings.json Overrides](https://github.com/google-gemini/gemini-cli/issues/22267) — 5 comments, 👍 0
**Priority: P2 | Area: Agent**

The Browser Agent completely disregards configuration overrides in global or project-level `settings.json`, including critical settings like `maxTurns`. While `AgentRegistry` correctly reads and merges settings, they aren't applied to browser agent invocations.

### 8. [Browser Subagent Fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983) — 4 comments, 👍 1
**Priority: P1 | Area: Agent**

The browser subagent fails on Wayland-based Linux environments, terminating prematurely without clear error messaging. This platform compatibility issue limits adoption among Linux users on modern desktop environments.

### 9. [Symlink Agents Not Recognized](https://github.com/google-gemini/gemini-cli/issues/20079) — 4 comments, 👍 0
**Priority: P2 | Area: Agent**

Agents defined via symlinks in `~/.gemini/agents/` are not recognized by the system, breaking workflows where developers want to reference agents from different locations or manage them in a central directory.

### 10. [400 Error with >128 Tools](https://github.com/google-gemini/gemini-cli/issues/24246) — 3 comments, 👍 0
**Priority: P2 | Area: Agent**

Gemini CLI encounters HTTP 400 errors when more than ~400 tools are available. The agent should smarter scope enabled tools, but currently lacks dynamic tool limiting logic, causing failures in tool-rich environments.

---

## Key PR Progress

### Open PRs (Active Development)

| PR | Description | Impact |
|----|-------------|--------|
| [#30504](https://github.com/google-gemini/gemini-cli/pull/30504) | **MCP protocol version forwarding fix** — Fixes `setProtocolVersion` and `sessionId` not being forwarded from `McpComplianceTransport` to `StreamableHTTPClientTransport`, causing MCP-Protocol-Version header to be missing on subsequent requests. | **High** — Critical for MCP server compatibility |
| [#30503](https://github.com/google-gemini/gemini-cli/pull/30503) | **CI release patch comment auth fix** — Addresses authentication issues in CI release workflows. | **P1** — Unblocks release pipeline |
| [#30498](https://github.com/google-gemini/gemini-cli/pull/30498) | **Honor abort signal in background output reads** — Makes `ReadBackgroundOutputInvocation` respect `AbortSignal` for proper cancellation of background task output streaming. | **Medium** — Improves cancellation reliability |
| [#30493](https://github.com/google-gemini/gemini-cli/pull/30493) | **GOOGLE_CLOUD_PROJECT_ID fallback support** — Consistently supports `GOOGLE_CLOUD_PROJECT_ID` as fallback for `GOOGLE_CLOUD_PROJECT` across core, CLI, and a2a-server. | **Medium** — Improves auth consistency |
| [#30489](https://github.com/google-gemini/gemini-cli/pull/30489) | **CRLF line ending normalization** — Normalizes `\r\n` to `\n` when computing write_file diffs and `getDiffStat`, fixing cross-platform diff display issues. | **Medium** — Cross-platform compatibility |
| [#30368](https://github.com/google-gemini/gemini-cli/pull/30368) | **ACP session closing support** — Implements `session/close` capability for ACP clients to release sessions before process exit. | **Medium** — Improves resource management |

### Recently Merged (This Cycle)

| PR | Description | Impact |
|----|-------------|--------|
| [#30268](https://github.com/google-gemini/gemini-cli/pull/30268) | **YOLO mode security fix** — Respects `--approval-mode=yolo` in shell taint/build-file risk checks and `PolicyEngine` protections, preventing confirmation prompts in headless YOLO runs. | **Security** |
| [#30277](https://github.com/google-gemini/gemini-cli/pull/30277) | **Sandbox permission denial detection** — Improves POSIX sandbox denial detection and unsupported environment handling for containerized/restricted environments. | **High** — Container compatibility |
| [#30273](https://github.com/google-gemini/gemini-cli/pull/30273) | **Exit codes unification** — Centralizes CLI process exit codes, adding missing fatal error codes previously hardcoded as raw literals. | **Medium** — Developer experience |
| [#30281](https://github.com/google-gemini/gemini-cli/pull/30281) | **Node 26 fetch timeout fix** — Upgrades Undici to 7.30.2 for proper timeout configuration on Node 26. | **High** — Node 26 compatibility |
| [#30279](https://github.com/google-gemini/gemini-cli/pull/30279) | **Function call name trimming fix** — Preserves trimmed function-call names in history to prevent 400 INVALID_ARGUMENT errors. | **High** — Prevents API errors |
| [#30267](https://github.com/google-gemini/gemini-cli/pull/30267) | **Source checkout detection fix** — Fixes misclassification of local git clones as global npm installs, preventing spurious auto-update attempts. | **Medium** — DX improvement |

---

## Feature Request Trends

Analysis of open issues reveals several dominant feature directions:

### 1. **Agent Reliability & Robustness**
Multiple P1/P2 issues target fundamental agent hang, crash, and misreporting behaviors. The community prioritizes fixing the generalist agent hangs, subagent recovery logic, and browser agent failures as blockers for production adoption.

### 2. **Subagent Ecosystem Expansion**
Strong interest in improving subagent discoverability (`settings.json` discovery), trajectory visibility (`/chat share`), backgroundable execution, and parallel collaboration. The "local subagent sprint" (#20195) signals official roadmap commitment.

### 3. **Context Efficiency**
Several proposals target token reduction: AST-aware file reads (#22745, #22747), "Tactful Extraction" surgical reads (#19561), and persistent file-based task tracking (#18836) to replace in-context todos that cause context rot.

### 4. **Platform & Environment Compatibility**
Wayland browser support, Node 26 compatibility (now addressed), sandbox permission handling, and CRLF normalization indicate growing focus on diverse development environments.

### 5. **Security & Safety**
Zero-dependency sandboxing (#19873), destructive behavior discouragement (#22672), and YOLO mode respect (#30268) show community investment in balancing autonomy with safety.

---

## Developer Pain Points

### 🔴 Critical (P1 Issues)
- **Generalist agent hangs indefinitely** — Blocks core functionality for any user relying on subagents
- **Subagent recovery misreporting** — Masks failures, erodes trust in task completion status
- **Browser subagent Wayland failures** — Platform incompatibility limits Linux adoption

### 🟠 High-Frequency Frustrations
- **Browser Agent config bypass** — Settings.json overrides ignored, forcing workarounds
- **Tool limit errors** — 400 errors with tool-rich environments forces manual tool scoping
- **Skills/sub-agent underutilization** — Model doesn't invoke available capabilities autonomously
- **Symlink agent detection** — Common workflow broken for symlink-based agent management
- **Temporary script sprawl** — Model creates cleanup-resistant scripts across directories

### 🟡 UX Friction
- **Bug reports lack subagent context** — `/bug` command doesn't include subagent session details
- **Interactive prompt hangs** — Vite app creation and similar interactive workflows get stuck
- **Self-awareness gaps** — Agent can't reliably explain its own flags, hotkeys, or execution modes

---

*Digest generated from GitHub data for `google-gemini/gemini-cli` — 2026-11-28*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest for 2026-11-28 based on the provided GitHub data. Let me analyze the data and create a structured digest following the specified sections.

Let me organize the data:

**Releases (last 24h):**
- v1.0.118-2: Fixed Ctrl+R history navigation
- v1.0.118-1: Fixed MCP server enable/disable
- v1.0.118-0: Fixed CA certificates in sandbox policy, reasoning effort in /tasks footer
- v1.0.117: Added custom CA certificates support, explicit tool exposure for custom agents, fixed Page Down stalling

**Issues (31 total, showing top 30 by comment count):**
Looking at the issues by comment count:
1. #5354 (4 comments, 12 👍) - ACP does not advertise Copilot Fusion
2. #4381 (3 comments) - Notification badge count persists
3. #5440 (3 comments) - Agent Plugins 1.0 instructions ignored
4. #4670 (3 comments, CLOSED) - Tool call hangs after extension startup fails
5. #4740 (2 comments, CLOSED) - Voice server deadlock
6. #4536 (2 comments, CLOSED) - MCP image content blocks not surfaced
7. #5571 (2 comments) - Updater fails with GHE.com
8. #5589 (1 comment) - CLI ignores commit instruction
9. #5607 (0 comments) - Reasoning models compact at 30-40%
10. #5606 (0 comments) - User extensions never start with PR linked
11. #5605 (0 comments) - Fork PRs can't enable "Allow edits by maintainers"
12. #5604 (0 comments) - ACP mode ignores fusionTier=high


13. #5603 (0 comments) - Browser Use activation fails on Unicode paths
14. #5602 (0 comments) - Content-filtered model response issue
15. #5601 (1 👍) - Sandbox bypass prompt issue
16. #5600 (0 comments) - Entra broker MCP sign-in never cached
17. #5599 (0 comments) - CLI refuses session.metadata.setWorkingDirectory
18. #5598 (0 comments) - Korean filename issue (spam?)
19. #5597 (0 comments) - SIGTERM vs drained exits telemetry
20. #5596 (0 comments) - No disposition observability for notifications
21. #5595 (0 comments) - Settings/hooks changes require full CLI restart
22. #5594 (0 comments) - ahp.connections.refresh retries forever
23. #5593 (0 comments) - Local sandbox blocks git submodule update
24. #5592 (0 comments) - getMessages on large session kills stdio
25. #5591 (0 comments) - Windows Credential Manager flood
26. #5590 (0 comments) - Gemini 4 Neon tool calls timeout
27. #5588 (0 comments) - Cypress crashes in macOS sandbox
28. #5587 (0 comments) - ACP should allow reading quota
29. #5586 (0 comments) - Windows UNC paths denied
30. #5585 (0 comments) - Org-level custom agents ignore model

**Pull Requests:** None in last 24h

**Discussions:** None provided

Now let me create the digest following the required sections. I'll pick the most important and interesting issues for the Hot Issues section.
</think>


# GitHub Copilot CLI Community Digest

**Date:** November 28, 2026  
**Repository:** github.com/github/copilot-cli

---

## 1. Today's Highlights

GitHub released **v1.0.118** across three patch iterations, bringing critical fixes for MCP server management, sandbox certificate handling, and interactive prompt navigation. A notable cross-version theme is the growing sophistication of Agent Plugins 1.0 support, including explicit tool exposure for custom agents and improved handling of subagent reasoning visibility. Community attention is heavily focused on ACP (Agent Control Protocol) gaps, particularly around Copilot Fusion configuration and routing transparency.

---

## 2. Releases

### v1.0.118-2 (2026-11-28)
- **Fixed:** Up/Down arrow keys now correctly navigate prompt history after a Ctrl+R search match without applying hidden suggestions.

### v1.0.118-1 (2026-11-28)
- **Fixed:** Concurrent `copilot mcp enable` or `copilot mcp disable` commands no longer inadvertently overwrite changes to different MCP servers.

### v1.0.118-0 (2026-11-28)
- **Fixed:** `/sandbox policy` now displays paths to all additional CA certificates trusted by the sandbox, including those from managed settings.
- **Fixed:** Reasoning effort and context tier are now shown in the `/tasks` footer for subagents that spawn their own subagents.
- **Fixed:** Detailed transcripts now include match counts for relevant queries.

### v1.0.117 (2026-11-27)
- **Added:** `sandbox.userPolicy.network.extraCaCertificates` configuration to trust custom CA certificates for sandboxed commands through TLS-intercepting proxies.
- **Added:** Explicit tool exposure allowing custom agents to opt in to specific tools.
- **Fixed:** Page Down key no longer stalls at a pinned prompt in 10-column layouts.

**Full release notes:** https://github.com/github/copilot-cli/releases

---

## 3. Hot Issues

### 🔴 Critical / High Priority

**1. ACP does not advertise Copilot Fusion or its tier configuration**  
Issue [#5354](https://github.com/github/copilot-cli/issues/5354) | Author: simonsteiner | 4 comments | 12 👍  
Copilot Fusion is available in interactive CLI but ACP clients see "Auto" routing with no Fusion configuration. This blocks T3 Code and similar ACP-based tools from exposing Fusion features to users. Community impact: High—the gap affects all non-interactive integrations.  
*Status: Open*

**2. Reasoning models compact at 30–40% of the window**  
Issue [#5607](https://github.com/github/copilot-cli/issues/5607) | Author: felipecrs | 0 comments | 0 👍  
When using bring-your-own-key reasoning models, sessions compact excessively (19 compactions in 107 minutes) because the context estimator keeps counting old reasoning tokens. This severely impacts tool-heavy workflows.  
*Status: Open, triaged*

**3. ACP mode ignores fusionTier=high and uses Standard routing**  
Issue [#5604](https://github.com/github/copilot-cli/issues/5604) | Author: idocinthebox | 0 comments | 0 👍  
Interactive CLI correctly routes to HydraFusion with `fusionTier: high`, but `copilot --acp` routes via `auto_v2` instead. This creates inconsistent behavior between modes for advanced users.  
*Status: Open, triaged*

**4. CLI repeatedly ignores commit instruction, tool rejections, and reminders**  
Issue [#5589](https://github.com/github/copilot-cli/issues/5589) | Author: hanssv | 1 comment | 0 👍  
Copilot CLI continued proposing `Co-authored-by` trailers despite explicit user instruction not to, requiring three rejections before compliance. This highlights persistent instruction-following reliability issues.  
*Status: Open*

**5. getMessages on large session kills the stdio transport**  
Issue [#5592](https://github.com/github/copilot-cli/issues/5592) | Author: evanl666 | 0 comments | 0 👍  
Sessions with ~808 MB event logs (including screenshots) cause `write EINVAL` errors and CLI hangs when `session.get_events()` is called. This breaks SDK-based integrations handling large contexts.  
*Status: Open*

### 🟡 Medium Priority

**6. Agent Plugins 1.0: `.instructions.md` and `applyTo` frontmatter silently ignored**  
Issue [#5440](https://github.com/github/copilot-cli/issues/5440) | Author: jdeboscker | 3 comments | 1 👍  
The Agent Plugins 1.0.0 schema format fails to load plugin rules from `com.github.copilot/rules/`, silently skipping custom agent configurations. This undermines the new plugin packaging format.  
*Status: Open*

**7. Local sandbox blocks `git submodule update` even as no-op**  
Issue [#5593](https://github.com/github/copilot-cli/issues/5593) | Author: chalin | 0 comments | 0 👍  
Regression from v1.0.99-2: sandbox now blocks `git submodule update` even when submodules are already initialized, breaking CI/CD workflows that rely on this command.  
*Status: Open*

**8. Windows Credential Manager flood causes CredWrite error 8**  
Issue [#5591](https://github.com/github/copilot-cli/issues/5591) | Author: jessehouwing | 0 comments | 0 👍  
CLI accumulates hundreds of `copilot-mcp-oauth` entries in Windows Credential Manager and never removes them, eventually preventing all apps from writing credentials. Affects Azure DevOps and system-level authentication.  
*Status: Open*

**9. macOS: Entra broker MCP sign-in never cached**  
Issue [#5600](https://github.com/github/copilot-cli/issues/5600) | Author: kunukn | 0 comments | 0 👍  
MSAL keychain save fails with `-34018` on macOS for Azure DevOps MCP, causing the account picker to appear every session despite successful authentication.  
*Status: Open, triaged*

**10. Cypress crashes in the macOS sandbox with SIGSEGV**  
Issue [#5588](https://github.com/github/copilot-cli/issues/5588) | Author: JonasSeibert1234 | 0 comments | 0 👍  
Component tests exit with SIGSEGV when run inside the macOS sandbox but succeed outside it. Read/write access to Cypress cache does not resolve the issue.  
*Status: Open*

---

## 4. Key PR Progress

No pull requests were merged or updated in the last 24 hours.

---

## 5. Feature Request Trends

Based on issue analysis, the following feature directions dominate community requests:

### Agent Configuration & Control
- **ACP feature parity:** Requests for ACP to expose the same configuration options as interactive CLI (#5354, #5604, #5587)—notably Copilot Fusion tiers, quota information, and routing model selection.
- **Custom agent flexibility:** Org-level custom agents should respect `model` frontmatter (#5585); custom agents need opt-in tool exposure for explicit control (#5587).

### Plugin & Extension Ecosystem
- **Agent Plugins 1.0 completeness:** Full support for `.instructions.md`, `applyTo` frontmatter in rules directories (#5440), and hot-reload for settings/hooks changes (#5595).
- **Extension lifecycle reliability:** User extensions should start in PR-linked sessions (#5606); extensions should be able to call `session.metadata.setWorkingDirectory` (#5599).

### Context & Reasoning Management
- **Efficient context utilization:** Reasoning token counting should exclude completed reasoning from context estimates (#5607); large session handling needs streaming optimization (#5592).
- **Notification observability:** Disposition tracking for queued/surfaced/dropped notifications with reasons (#5596).

### Platform & Integration
- **Windows integration health:** UNC path handling regressions (#5586), Credential Manager cleanup (#5591), Entra/MSAL keychain persistence (#5600).
- **macOS sandbox compatibility:** Cypress and other complex native tools need full compatibility (#5588); Unicode profile path support (#5603).

---

## 6. Developer Pain Points

### 🐛 Recurring Bugs & Regressions
1. **Instruction following reliability:** CLI ignores explicit user instructions and rules across multiple turn cycles (#5589).
2. **Sandbox permission overreach:** Blocking legitimate operations like `git submodule update` despite explicit grants (#5593, #5601).
3. **Session lifecycle failures:** Extensions failing to start or tool calls hanging after startup failures (#4670, #5606, #5599).

### ⚙️ Configuration & Flexibility Gaps
1. **ACP/CLI parity:** ACP mode lacks routing transparency, quota access, and Fusion configuration available in interactive mode.
2. **Hot-reload absence:** Settings and hooks changes require full CLI restart with no notification (#5595).
3. **Custom CA certificates:** Complex deployment scenarios (TLS-intercepting proxies) require better certificate chaining visibility.

### 📦 Ecosystem Integration Challenges
1. **MCP server reliability:** Concurrent enable/disable races, Entra sign-in caching failures, image content blocks not surfacing.
2. **Native tool compatibility:** Cypress, git submodules, and other common development tools face sandbox restrictions.
3. **Large-scale session degradation:** SDK users with extensive session histories encounter transport failures.

### 🔧 Observability & Debugging Gaps
1. **Telemetry ambiguity:** SIGTERM vs drained exits conflated (#5597); no disposition observability for notifications (#5596).
2. **Network resilience:** AHP connection refresh retries forever without backoff (#5594); model-specific timeouts with Gemini 4 Neon (#5590).

---

## 7. Community Metrics

| Metric | Value |
|--------|-------|
| Total Issues (last 24h) | 31 |
| Issues Opened | 26 |
| Issues Closed | 5 |
| Pull Requests Merged | 0 |
| Releases | 4 (v1.0.117, v1.0.118-0/1/2) |

---

*Digest generated for 2026-11-28. For real-time updates, watch the repository at https://github.com/github/copilot-cli.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a community digest for OpenCode based on the GitHub data provided. Let me analyze the data and structure it according to the requested format.

Let me organize the information:

**Releases**: None in the last 24h

**Issues**: 50 total, showing top 30 by comment count
Key issues:
1. #59387 - Free tier issues (417 comments!) - Very hot
2. #12711 - Agent Teams design (CLOSED, 19 comments)
3. #49723 - Subagent free tier bug (14 comments)
4. #51197 - Project removal API (CLOSED, 11 comments)
5. #54044 - Browser tools security issue (7 comments)
6. #66555 - Critical regression (6 comments)
7. #54173 - TUI text invisible on Windows (5 comments)
8. #54220 - Execute tool no timeout (5 comments)
9. #66840 - Inkling 2 mini edit tool issue (5 comments)
10. #45498 - Multi-repo change tracking feature (5 comments)
11. #66826 - Compaction drops images (4 comments)
12. #52240 - Plugin hot-reload issue (4 comments)
13. #62636 - CLI run hangs (4 comments)
14. #66534 - Sessions pinned issue (4 comments)
15. #66533 - iOS pairing fails (3 comments)
16. #57278 - Git Bash quote mangling (3 comments)
17. #54861 - Reasoning v2 issues (3 comments)
18. #66861 - Ask permissions silently allowed (3 comments) - HIGH severity, CLOSED
19. #66771 - Shell permission scanner bypass (3 comments)
20. #64905 - DriveCrypt path issue (3 comments)
21. #66824 - Esc deletes messages (3 comments) - HIGH severity, CLOSED


22. #66773 - Mermaid renderer issues (3 comments)
23. #63888 - WebFetch XHTML issue (3 comments)
24. #61039 - Changed-files footer missing (3 comments)
25. #62854 - SDK pulls Node >=26.4 dependency (2 comments)
26. #53356 - Subagent tool at max depth (2 comments)
27. #66885 - opencode run background jobs (2 comments)
28. #66868 - Windows cleanup not called (2 comments)
29. #60176 - Web search rotation (2 comments)
30. #66804 - Ctrl+V bug (2 comments) - CLOSED

Looking at the pull requests, there are 50 total with 20 visible. Several stand out as significant: the grep match display fix in core, the Code Mode execute tool refactor, MCP authentication state fixes, and the CLI Rust client update that includes TUI improvements. The macOS LC_UUID fix for desktop is notable, along with the subagent idle termination feature which is now merged.

Recent merges include the OpenMono 1.001 updates to both data and site, native Windows machine worker support, app channel lookup guard, tool choice forcing correction, and MCP connection pooling improvements. The context.tool.call feature allowing tools to invoke other tools appears to be a substantial architectural change. There's also work on enabling the OpenCode API by default in development environments and TLS trust configuration for remote MCP servers.

Additional fixes address MCP SDK import optimization, session import error handling, and preventing Code Mode agents from leaving jobs running. The MCP trust improvements for private networks are still in progress.
</think>


# OpenCode Community Digest

**Date:** 2026-11-28
**Repository:** github.com/anomalyco/opencode

---

## 1. Today's Highlights

The community continues to see strong engagement with the free tier issue thread reaching 417 comments, signaling ongoing pain points for non-subscribers. Several critical security and regression bugs were addressed, including a permission bypass where "ask" rules silently allowed execution, and an Esc key bug causing message deletion. On the positive side, a major architectural PR landed: tools can now call other tools via `context.tool.call`, opening new possibilities for plugin composition.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

### 1. Free Tier Problems Overflow ([#59387](https://github.com/anomalyco/opencode/issues/59387))
**Status:** Open | **Comments:** 417 | **👍:** 31

The consolidated free tier issue has become a mega-thread with 417 comments, indicating widespread frustration. Users report inconsistent "Free usage exceeded" messages, broken reset timers, and desktop app-specific errors. **This is the primary entry point for free user support.**

---

### 2. Agent Teams Design — Multi-Model Parallel Support ([#12711](https://github.com/anomalyco/opencode/issues/12711))
**Status:** Closed | **Comments:** 19 | **👍:** 24

A major design proposal for flat agent teams with named messaging, multi-model support, and TUI integration. The closure suggests the design has been accepted or incorporated into planning. **This signals future direction for subagent orchestration.**

---

### 3. Subagent Free Tier Restrictions Inconsistent ([#49723](https://github.com/anomalyco/opencode/issues/49723))
**Status:** Open | **Comments:** 14 | **👍:** 2

Bug report indicating the `explore` subagent is denied on free tier but only when running inside the CLI session; the same agent works identically with matching models elsewhere. **Highlights edge cases in free tier enforcement.**

---

### 4. Project Removal API Missing ([#51197](https://github.com/anomalyco/opencode/issues/49723))
**Status:** Closed | **Comments:** 11 | **👍:** 1

Users had no API or UI to remove phantom projects (e.g., "gabri", "Default Project") from the desktop app. The API only exposes GET and PATCH—no DELETE. **Closure suggests this is being addressed.**

---

### 5. Browser Tools Bypass Agent Deny Rules ([#54044](https://github.com/anomalyco/opencode/issues/54044))
**Status:** Open | **Comments:** 7 | **👍:** 0

A security-relevant bug: subagents with explicit `deny browser` in their markdown frontmatter still receive all 44 browser tools when also granted the `execute` (Code Mode) tool. **This is a permission boundary violation.**

---

### 6. Critical Regression: Foreground Subagent Execution Removed ([#66555](https://github.com/anomalyco/opencode/issues/66555))
**Status:** Open | **Comments:** 6 | **👍:** 0

PRs #63382 and #63223 removed foreground subagent execution, forcing all subagents into background mode. Users report excessive parent-agent wakeups, context pollution, and degraded performance. **A high-impact regression affecting daily workflows.**

---

### 7. Execute/Plugin Tool Calls Have No Timeout ([#54220](https://github.com/anomalyco/opencode/issues/54220))
**Status:** Open | **Comments:** 5 | **👍:** 1

Code Mode `execute` and plugin tool calls hang indefinitely—a slow plugin tool blocks the session until user interruption. MCP calls have a 12-hour default timeout, but native tools do not. **A reliability issue for production use.**

---

### 8. Inkling 2 Mini Cannot Call Edit Tool ([#66840](https://github.com/anomalyco/opencode/issues/66840))
**Status:** Open | **Comments:** 5 | **👍:** 0

Inkling 2 mini enters an infinite loop calling `shell` instead of `edit`, potentially a model-specific system prompt issue. **Raises questions about model compatibility testing.**

---

### 9. Auto-Compaction Drops Unconsumed Image Results ([#66826](https://github.com/anomalyco/opencode/issues/66826))
**Status:** Open | **Comments:** 4 | **👍:** 0

When auto-compaction precomputes summaries, `SessionRecentText.messageToText` silently drops image tool results, causing repeated image reads and wasted context. **A subtle memory/context efficiency bug.**

---

### 10. Permission Scanner Bypass on Windows ([#66771](https://github.com/anomalyco/opencode/issues/66771))
**Status:** Open | **Comments:** 3 | **👍:** 0

A shell command like `cmd /c "rmdir /s /q \"$p\""` passes through PowerShell and cmd quote-stripping, potentially executing as a recursive delete of the drive root. **A serious security issue requiring prompt attention.**

---

## 4. Key PR Progress

### Merged

| PR | Title | Significance |
|----|-------|--------------|
| [#66919](https://github.com/anomalyco/opencode/pull/66919) | **Let tools call other tools through `context.tool.call`** | Major architecture change enabling tool composition within scripts |
| [#66912](https://github.com/anomalyco/opencode/pull/66912) | **Support native Windows machine workers on the home** | Enables proper Windows worker deployment |
| [#66229](https://github.com/anomalyco/opencode/pull/66229) | **Stop a subagent's Claude process once it goes idle** | Reduces memory footprint by terminating idle subagents (~200MB each) |
| [#66696](https://github.com/anomalyco/opencode/pull/66696) | **Keep Code Mode agent() children from notifying parent** | Fixes job cleanup and notification leaks in scripts with many `agent()` calls |
| [#66914](https://github.com/anomalyco/opencode/pull/66914) | **Share pooled MCP connections across equivalent configs** | Connection reuse improvement for MCP integrations |
| [#66915](https://github.com/anomalyco/opencode/pull/66915) | **Keep MCP SDK out of startup** | Reduces startup time by lazy-loading the MCP SDK |
| [#66924](https://github.com/anomalyco/opencode/pull/66924) | **Enable OpenCode API in dev by default** | Improves developer experience |
| [#66926](https://github.com/anomalyco/opencode/pull/66926) | **Guard channel lookup in settings catalog** | Fixes dev e2e test failure |
| [#66546](https://github.com/anomalyco/opencode/pull/66546) | **Give macOS main executable its own LC_UUID** | Fixes Local Network privacy tracking conflict with other Electron apps |
| [#66927](https://github.com/anomalyco/opencode/pull/66927) | **Return whole lines from read; show grep matches in long lines** | Fixes truncated markers written back into files, breaking JSON |

### Open

| PR | Title | Significance |
|----|-------|--------------|
| [#60039](https://github.com/anomalyco/opencode/pull/60039) | **Support per-server TLS trust for remote MCP servers** | Enables self-signed certificate usage per server |
| [#60041](https://github.com/anomalyco/opencode/pull/60041) | **Trust private-network server certificates on first use** | UX improvement for private MCP server onboarding |
| [#66925](https://github.com/anomalyco/opencode/pull/66925) | **Do not force tool_choice where the model rejects it** | Fixes Claude Sonnet 5.5 / Opus 5.5 structured output errors |
| [#66928](https://github.com/anomalyco/opencode/pull/66928) | **Register Code Mode's execute tool from a plugin** | Refactor moving execute into a proper plugin architecture |
| [#66875](https://github.com/anomalyco/opencode/pull/66875) | **Find in session (Rust client), TUI fixes** | Ports TS find-in-session feature to Rust client |
| [#66920](https://github.com/anomalyco/opencode/pull/66920) | **Pin expanded activity summary** | New TUI feature for better activity visibility |
| [#66922](https://github.com/anomalyco/opencode/pull/66922) | **Print session import errors without stack trace** | Cleaner error messages for session import failures |

---

## 5. Developer Pain Points

The following themes emerged as recurring frustrations:

### Free Tier Experience (Issue #59387 — 417 comments)
- Inconsistent quota enforcement and broken reset timers
- Desktop app-specific restrictions not clearly documented
- Users feeling forced to subscribe for basic functionality

### Security Boundary Leaks
- Browser tools exposed despite explicit deny rules ([#54044](https://github.com/anomalyco/opencode/issues/54044))
- "Ask" permissions silently allowed ([#66861](https://github.com/anomalyco/opencode/issues/66861))
- Permission scanner bypass via nested quote mangling ([#66771](https://github.com/anomalyco/opencode/issues/66771))

### Windows Platform Gaps
- TUI text rendering issues on native Windows ([#54173](https://github.com/anomalyco/opencode/issues/54173))
- Git Bash quote manipulation breaking commands ([#57278](https://github.com/anomalyco/opencode/issues/57278))
- DriveCrypt virtual drive path failures ([#64905](https://github.com/anomalyco/opencode/issues/64905))
- Plugin cleanup not called on standalone exit ([#66868](https://github.com/anomalyco/opencode/issues/66868))

### Timeout and Resource Management
- Execute and plugin tools have no timeout ([#54220](https://github.com/anomalyco/opencode/issues/54220))
- Subagent processes held for 5 minutes after idle ([fixed in #66229](https://github.com/anomalyco/opencode/pull/66229))
- MCP calls default to 12-hour timeout ([#54220](https://github.com/anomalyco/opencode/issues/54220))

### MCP Integration Rough Edges
- SDK pulled into startup unnecessarily ([fixed in #66915](https://github.com/anomalyco/opencode/pull/66915))
- No TLS trust configuration for self-signed certificates ([#60039](https://github.com/anomalyco/opencode/pull/60039) open)
- Connection pooling issues with skills ([fixed in #66914](https://github.com/anomalyco/opencode/pull/66914))

### CLI Session Management
- `opencode run` hangs on background jobs ([#66885](https://github.com/anomalyco/opencode/issues/66885))
- `opencode run` hangs if child session busy ([#62636](https://github.com/anomalyco/opencode/issues/62636))

---

## 6. Feature Request Trends

Based on issue analysis, the community is advocating for:

### Multi-Agent Orchestration
- **Agent Teams** with parallel execution, inter-agent messaging, and multi-model support ([#12711](https://github.com/anomalyco/opencode/issues/12711)) — CLOSED (likely in progress)
- **Subagent depth visibility** improvements ([#53356](https://github.com/anomalyco/opencode/issues/53356))

### Repository Management
- **Multi-repository change tracking** for workspace subdirectories ([#45498](https://github.com/anomalyco/opencode/issues/45498))

### Model Compatibility
- Better **structured output / tool_choice handling** across model providers ([#66925](https://github.com/anomalyco/opencode/pull/66925))
- System prompt adjustments for non-OpenAI models (Inkling 2 mini issue [#66840](https://github.com/anomalyco/opencode/issues/66840))

### Security & Permissions
- **Project deletion API** ([#51197](https://github.com/anomalyco/opencode/issues/51197)) — CLOSED
- Better permission scanner for nested shell commands ([#66771](https://github.com/anomalyco/opencode/issues/66771))

### Developer Experience
- **Plugin hot-reload** fixes for symlinked config directories ([#52240](https://github.com/anomalyco/opencode/issues/52240))
- **Find in session** for transcript navigation ([#66875](https://github.com/anomalyco/opencode/pull/66875)) — merged to Rust
- **Session import/export error handling** ([#66922](https://github.com/anomalyco/opencode/pull/66922))

### Web Search Reliability
- **Provider rotation on quota failures** beyond HTTP 429 ([#60176](https://github.com/anomalyco/opencode/issues/60176))

---

## Summary Stats

| Category | Count |
|----------|-------|
| New Releases (24h) | 0 |
| Issues Updated (24h) | 50 |
| PRs Updated (24h) | 50 |
| Critical Bugs | 3 |
| High-Severity Bugs (Closed) | 2 |
| Platform-Specific Issues | 8+ |
| Security Issues | 3 |

---

*Digest generated from GitHub data for anomalyco/opencode on 2026-11-28*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>Let me analyze this GitHub data for the Pi project and create a structured digest for 2026-11-28.

Looking at the data:

1. **Releases**: There's a v1.7.0 release with "Terminal session resume" feature mentioned, but the description is cut off.

2. **Issues**: There are 50 total issues, showing top 30 by comment count. I need to pick 10 noteworthy ones.

3. **PRs**: 11 total PRs in the last 24h.

4. **Discussions**: Only 1 discussion mentioned.

Let me structure this properly:

**Today's Highlights**:
- v1.7.0 released with terminal session resume feature
- Several bug fixes merged
- Active discussions on compaction issues, MCP protocol support

**Releases**:
- v1.7.0 with terminal session resume capability

**Hot Issues** (10):
1. #3200 - Support video/audio content in prompt command (13 comments) - multimodal enhancement
2. #7010 - Normalize optional object tool schemas for OpenAI-compatible providers (9 comments) - provider compatibility
3. #9534 - OpenRouter: signature-only reasoning chunks dropped for Claude (5 comments) - reasoning preservation
4. #11123 - Support streamFunctionCallArguments for Google Vertex (5 comments) - Vertex provider support
5. #11114 - codemode `only`: deactivating a hidden direct tool re-declares it (4 comments) - prompt-cache miss
6. #12633 - OpenAI policy violation isn't auto retried (3 comments) - resilience issue
7. #12607 - Optional wrap width for assistant prose only (3 comments) - UX improvement
8. #12594 - pi-durable: codemode drops truncation notice (3 comments) - durability concern
9. #12565 - Option to keep pre-compaction messages visible (3 comments) - transcript management


10. #12483 - Failed auto-compaction resumes work and retries indefinitely (3 comments) - critical bug

**Key PR Progress** (10):
I'll focus on the most impactful pull requests that address critical functionality and provider integration. The list highlights improvements in error handling, cross-platform support, and advanced AI interaction capabilities. These PRs demonstrate ongoing efforts to enhance Pi's robustness and flexibility across different environments and use cases.

The PRs cover diverse areas like fixing HTML export issues, improving WSL detection, supporting local agent configurations, and implementing emerging protocols like MCP 2026-07-28. Each PR addresses specific technical challenges, from resource management to expanding platform compatibility.

Feature requests reveal a strong community interest in more nuanced interaction modes, particularly around text rendering, context preservation, and cross-platform flexibility. Users want granular control over display settings and enhanced session management capabilities.

Developers are encountering challenges with file watching efficiency, timestamp visibility, and complex integration scenarios across different platforms and AI providers. The issues highlight the need for more robust, flexible tooling that can handle diverse development environments and edge cases.

The community is particularly focused on expanding AI interaction capabilities, including support for multimodal inputs, improving tool schema handling, and implementing more intelligent error recovery mechanisms. There's a clear trend towards creating more adaptive, context-aware development tools.
</think>


# Pi Community Digest

**Date:** 2026-11-28
**Repository:** github.com/earendil-works/pi

---

## Today's Highlights

Pi v1.7.0 is live with **terminal session resume**, allowing compatible terminals to restore sessions with original profiles, tool restrictions, and instructions after restarts. The community closed 13 issues and merged 11 pull requests in the last 24 hours, with active work on compaction reliability, MCP protocol 2026-07-28 support, and cross-platform process lock fixes for macOS/BSD systems.

---

## Releases

### v1.7.0
- **Terminal session resume**: Compatible terminals can now reopen the current pi session after a restart, preserving its original profile, tool restrictions, and instructions. See the [terminal-setup documentation](https://github.com/earendil-works/pi/blob/v1.7.0/packages/coding-agent/docs/terminal-setup.md#program-resume) for integration details.

---

## Hot Issues

### 1. Support video/audio content in prompt command
[#3200](https://github.com/earendil-works/pi/issues/3200) | Author: louis030195 | 13 comments | 👍 8
Extend the `prompt` RPC command to forward video and audio content alongside existing `images` support, enabling multimodal models (Gemma 4, GPT-4o) to process richer media. This is the highest-discussed issue and reflects strong demand for first-class multimodal input handling.

### 2. Normalize optional object tool schemas for OpenAI-compatible providers
[#7010](https://github.com/earendil-works/pi/issues/7010) | Author: hsm-lv | 9 comments | 👍 1
The `@earendil-works/pi-ai@0.81.1` OpenAI completions adapter doesn't normalize `required` on object schemas, potentially causing schema validation failures with third-party providers. Fixing this would improve compatibility across the growing OpenAI-compatible ecosystem.

### 3. OpenRouter: signature-only reasoning chunks dropped for Claude
[#9534](https://github.com/earendil-works/pi/issues/9534) | Author: rohangandhi | 5 comments | 👍 0
When routing Claude (Sonnet 4.6, Sonnet 5) through OpenRouter, Pi drops signature-only reasoning chunks. This may affect reasoning preservation—important for models relying on extended thinking traces.

### 4. Support streamFunctionCallArguments for Google Vertex
[#11123](https://github.com/earendil-works/pi/issues/11123) | Author: huajiaaa | 5 comments | 👍 1
The Vertex provider adapter lacks support for Google's incremental `streamFunctionCallArguments` format (`partialArgs`, `willContinue` fields). Adding this would align Vertex with other streaming function call implementations.

### 5. codemode `only`: deactivating a hidden direct tool re-declares it (prompt-cache miss)
[#11114](https://github.com/earendil-works/pi/issues/11114) | Author: xulongwu4 | 4 comments | 👍 1
When using `codemode.mode: "only"`, extensions that deactivate a direct tool cause it to be re-declared in the initial tool list, resulting in prompt-cache misses and inefficient context usage.

### 6. OpenAI policy violation isn't auto retried
[#12633](https://github.com/earendil-works/pi/issues/12633) | Author: finnvyrn | 3 comments | 👍 0
Pi doesn't automatically retry when OpenAI returns a policy violation error, forcing manual intervention. A retry mechanism would improve resilience in automated workflows.

### 7. Optional wrap width for assistant prose only
[#12607](https://github.com/earendil-works/pi/issues/12607) | Author: plopezlpz | 3 comments | 👍 0
Requested feature to wrap assistant prose at 88 columns (like Claude Code's `maxProseWidth`) without affecting code blocks or tables—balances readability with code-centric workflows.

### 8. pi-durable: codemode drops the truncation notice from a tool's text
[#12594](https://github.com/earendil-works/pi/issues/12594) | Author: paulomarg | 3 comments | 👍 0
When codemode scripts call tools with long outputs, the model never receives the truncation notice it would normally get in interactive mode, potentially leading to incorrect assumptions about context completeness.

### 9. Option to keep pre-compaction messages visible in the interactive transcript
[#12565](https://github.com/earendil-works/pi/issues/12665) | Author: ringleader3 | 3 comments | 👍 0
Users want an opt-in `transcriptHistory` setting to preserve full conversation history with compaction summaries inline, rather than losing access to pre-compaction context.

### 10. Failed auto-compaction resumes work and retries indefinitely
[#12483](https://github.com/earendil-works/pi/issues/12483) | Author: naw | 3 comments | 👍 0 | Priority: P0
Critical bug where auto-compaction failures trigger an endless loop: hitting the 128k output limit causes compaction to fail, work continues, and compaction immediately fires again. Needs immediate attention.

---

## Key PR Progress

### 1. feat(mcp): support stateless MCP protocol 2026-07-28
[#12479](https://github.com/earendil-works/pi/pull/12479) | Author: dmmulroy | Status: IN PROGRESS
Adds MCP protocol revision 2026-07-28 (stateless) to `pi-mcp` and pi's MCP extension. Prior versions remain compatible. This enables leaner HTTP-based MCP connections without session overhead.

### 2. fix(chord): process locks on macOS and BSDs are kernel locks
[#12635](https://github.com/earendil-works/pi/pull/12635) | Author: christianklotz | Status: OPEN
On macOS and BSDs, socket-based chord process locks left orphaned files when killed by signals, causing all subsequent lock attempts to fail until manual cleanup. Fixes reliability on these platforms.

### 3. feat(ai): add pi-image API
[#12535](https://github.com/earendil-works/pi/pull/12535) | Author: vegarsti | Status: CLOSED
Introduces a common `pi-image` image-generation protocol analogous to `pi-messages` and `pi-decision`, providing a unified API across providers (OpenAI, Google Gemini, OpenRouter).

### 4. fix(coding-agent): keep $ in exported HTML
[#12609](https://github.com/earendil-works/pi/pull/12609) | Author: acmerfight | Status: CLOSED
Fixed HTML export where `String.prototype.replace` converted `$$` to `$`, dropping the currency symbol from session cost displays (`$0.300` became `0.300`).

### 5. fix(coding-agent): detect WSL without the WSL environment variables
[#12634](https://github.com/earendil-works/pi/pull/12634) | Author: petrroll | Status: CLOSED
Consolidated WSL detection across the codebase—previously `utils/wsl.ts` and `core/keybindings.ts` used different checks, causing inconsistent behavior in certain WSL configurations.

### 6. support AGENTS.local.md in the coding agent
[#12543](https://github.com/earendil-works/pi/pull/12543) | Author: julien-c | Status: CLOSED
Extends agent loading to check `AGENTS.local.md` after `AGENTS.override.md` and before `AGENTS.md` in each directory, enabling better per-project agent configuration.

### 7. Add CTYUN Token Plan provider with OpenAI-compatible models
[#12611](https://github.com/earendil-works/pi/pull/12611) | Author: atorber | Status: CLOSED
New built-in provider for CTYUN Token Plan subscription gateway, adding seven OpenAI-compatible models authenticated via `CTYUN_TOKEN_PLAN_API_KEY`.

### 8. feat(interactive): auto-reload resources on file change
[#12610](https://github.com/earendil-works/pi/pull/12610) | Author: balmacefa | Status: CLOSED
File watcher for agent and project resource directories (`~/.pi/agent/{extensions,skills,prompts,themes}` and `<cwd>/.pi/...`) eliminates the need for manual `/reload` when iterating on extensions or prompts.

### 9. fix(coding-agent): cap codemode's nested call rows to bound progress
[#12623](https://github.com/earendil-works/pi/pull/12623) | Author: simonamtoft | Status: CLOSED
Prevents V8 OOM crashes when codemode scripts make many nested calls—previously `executeCodemode` accumulated rows indefinitely, hitting 4 GB heap limits with ~1700 blocked reads.

### 10. docs(p3): link reference artifacts
[#12628](https://github.com/earendil-works/pi/pull/12628) | Author: earendilpixi | Status: CLOSED
Added "Reference artifacts" section to p3 documentation, linking org-visible Radius artifacts shared on Discord (how-to-work deck, product definition, concepts, component specs).

---

## Hot Discussions

### Show and Tell
- **[pi-config-palette](https://github.com/leohenon/pi-config-palette) — toggle skills, extensions, tools, and MCP in Pi**
  [#12629](https://github.com/earendil-works/pi/discussions/12629) | Author: leohenon | 0 comments | 👍 1
  A new extension enabling in-session toggling of skills, extensions, tools, and MCP servers via `/config-palette`—a more organized alternative to `$ pi config` for quick configuration changes.

---

## Feature Request Trends

Analysis of recent issues and discussions reveals these dominant feature directions:

| Theme | Frequency | Examples |
|-------|-----------|----------|
| **Multimodal Input** | High | Video/audio in prompts (#3200), image generation API (#12535) |
| **Context Management** | High | Transcript history preservation (#12565), compaction reliability (#12483, #12572), message iteration without retention (#12616) |
| **Provider Compatibility** | Medium | Vertex streaming (#11123), OpenAI schema normalization (#7010), CTYUN provider (#12619) |
| **UI/UX Customization** | Medium | Prose wrap width (#12607), wall-clock timestamps (#12575), browser-based web UI (#12630) |
| **Durability & State** | Medium | Conversation export/import (#12568), session resume (#11123), MCP stateless protocol (#12479) |
| **Developer Experience** | Medium | Auto-reload resources (#12610), MCP extension hooks (#12600), editor/footer registration (#12631) |

---

## Developer Pain Points

### 1. Compaction Reliability
Multiple issues (#12483, #12572, #12594) highlight compaction failures causing infinite loops, token estimation mismatches with CJK content, and missing truncation notices. Developers need deterministic compaction behavior, especially with large contexts.

### 2. Provider Inconsistencies
Schema handling varies across OpenAI-compatible providers (#7010), reasoning chunk preservation differs by routing path (#9534), and streaming formats like Vertex's `streamFunctionCallArguments` lack support (#11123). This fragments the provider ecosystem.

### 3. Cross-Platform Issues
Recent fixes address WSL detection inconsistencies (#12634), macOS/BSD process lock behavior (#12635), and NixOS Node.js version pinning (#12627). Developers on non-Linux platforms encounter friction.

### 4. File Watching Performance
The Harness workspace watcher creates unbounded `fs.watch` handles per directory (#12580), causing resource exhaustion on large codebases (~50,700 directories / ~264,000 files in reported case).

### 5. Extension & Tool Lifecycle
Issues with hidden tool re-declaration (#11114), MCP file transfer hooks (#12600), and editor/footer registration timing (#12631) indicate complexity in extension architecture that affects extension authors.

### 6. Multimodal Limitations
Current prompt command only supports images (#3200). Developers integrating video/audio models need parity with existing image handling for Gemma 4, GPT-4o, and similar multimodal models.

---

*Generated 2026-11-28 | Data sourced from github.com/earendil-works/pi*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a Qwen Code community digest for 2026-11-28 based on GitHub data. Let me analyze the provided data:

**Releases:**
- sdk-typescript-v0.1.39 with bundled CLI 0.28.7 and 0.28.6

**Issues (50 total, showing top 30):**
- Multiple CI failures (E2E tests, Managed Agent gate, SDK Java, etc.)
- Feature requests like pull scheduling for Hosted Harness
- Bug reports including Windows hot-reload issues, performance issues, UI bugs
- Desktop AppImage rendering issues
- SDK release failures

**Pull Requests (50 total, showing top 20):**
- Multiple PRs related to managed agent, CI fixes, verification workflows
- Web shell improvements
- Core fixes and features
- Testing improvements

Now let me structure this into the requested format:

1. **Today's Highlights** - Summary of key updates
2. **Releases** - SDK TypeScript v0.1.39 details
3. **Hot Issues** - 10 noteworthy issues
4. **Key PR Progress** - 10 important PRs
5. **Hot Discussions** - No discussion data provided, so I'll omit this
6. **Feature Request Trends** - Common feature directions
7. **Developer Pain Points** - Recurring issues

Let me pick the most significant items:

**Hot Issues (10):**
1. #18342 - E2E Tests CI failure (61 comments) - major CI issue
2. #18252 - E2E Tests cron-tools failure (58 comments)
3. #18258 - Managed Agent gate failure (38 comments)
4. #18514 - Pull scheduling for Hosted Harness (feature request)
5. #17489 - Windows settings hot-reload bug
6. #18508 - Artifacts UI bug


7. #18489 - Event loop freeze bug (P1 performance issue)
8. #18486 - Desktop AppImage gray window bug
9. #18475 - Worktree sidecar deletion fix
10. #18397 - CVE audit failure

**Key PR Progress (10):**
1. #18561 - Design Harness pull for released Sessions
2. #18568 - Integration test fix
3. #18546 - autofix-pr harden
4. #18579 - CI fix for fork-PR reviews
5. #18549 - destructive-diff adversarial protocol
6. #18155 - confined Hosted Workspace Shell
7. #18570 - Core worktree snapshot recovery improvements and fixes for agent task recovery mechanisms. These updates address critical reliability issues and enhance system stability across various components.

Comprehensive system enhancements focusing on verification protocols, web shell improvements, and platform-specific optimizations. Key developments include advanced sandboxing strategies, CLI capability gates, and expanded model support for Google GenAI and OpenAI multimodal interfaces.

Addressing critical performance and UI/UX challenges in the web shell environment. Resolving complex event loop freeze issues, TUI rendering problems, and session management complications that impact user experience.

Identifying feature request patterns across managed agent scheduling, Windows platform support, and web shell functionality. Developers are advocating for enhanced session management capabilities, improved workspace controls, and more robust system integration features.

Recurring pain points center on CI reliability, performance optimization, and cross-platform compatibility. Specific attention needed for event loop management, worktree handling, and test infrastructure stability.
</think>


# Qwen Code Community Digest

**Date:** 2026-11-28
**Source:** github.com/QwenLM/qwen-code

---

## 1. Today's Highlights

The Qwen Code community saw significant activity around CI reliability and managed agent infrastructure. A critical P1 performance regression in v0.28.7 causes 6-8 minute event-loop freezes on large workspaces, demanding immediate attention. Meanwhile, the team is advancing pull-scheduling designs for hosted harnesses and hardening the PR verification pipeline with adversarial diff protocols.

---

## 2. Releases

### SDK TypeScript v0.1.39

**Bundled CLI versions:** 0.28.7 and 0.28.6

This SDK release packages the TypeScript client library with corresponding CLI versions. No changelog details provided for breaking changes or new API surface.

🔗 [Release sdk-typescript-v0.1.39](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.39)

---

## 3. Hot Issues

### 🔴 P1 Critical

| # | Title | Comments | Why It Matters |
|---|-------|----------|----------------|
| **#18489** | **bug(serve): v0.28.7 worktree retention freezes event loop for 6-8 min via O(N²) regularFiles.includes on 300k-file .qwen snapshots** | 3 | **Critical regression.** Upgrading to v0.28.7 causes full event-loop freezes starving `/health` and all routes. Affects multi-workspace daemons with 23+ workspaces on Node v26.12.1. Multi-GB snapshot churn observed. |
| **#18342** | Main CI failed: E2E Tests — no test identified | 61 | Highest-traffic CI failure with 61 comments. E2E test suite failing intermittently across multiple environments, indicating systemic flakiness. |

### 🟠 P2 High Priority

| # | Title | Comments | Why It Matters |
|---|-------|----------|----------------|
| **#18252** | Main CI failed: E2E Tests — cli/cron-tools.test.ts | 58 | Related E2E flakiness affecting cron tools registration tests. Community actively debugging. |
| **#18258** | Main CI failed: Managed Agent gate — HostedMonitorRunFaultGatesIT | 38 | Managed Agent gate failures across fault tolerance test suites, impacting release confidence. |
| **#18514** | proposal(managed-agent): Enable pull scheduling for Hosted Harness | 7 | **Feature proposal:** Would allow hosted harness instances to claim runnable session work via HTTP long polling, improving resource utilization. |
| **#18508** | fix(web-shell): opening Artifacts should show the list, not a restored artifact preview tab | 6 | UI regression where artifact library navigation defaults incorrectly. Affects user workflow in web-shell. |
| **#17489** | Windows: project settings created after startup are never hot-reloaded | 6 | Windows-specific bug where `.qwen/settings.json` created post-startup is ignored by running sessions. Affects MCP server connections. |
| **#18287** | Main CI failed: SDK Java — HostedMonitorRunFaultGatesIT | 4 | Additional Managed Agent gate failures in Java SDK pipeline. |
| **#18475** | fix(serve): fail closed on unreadable worktree sidecars during session deletion | 3 | **Recently closed.** Session deletion could leave dangling symlinks and unreadable sidecar directories, risking data integrity. |

### 🟡 P3 / Notable

| # | Title | Comments | Why It Matters |
|---|-------|----------|----------------|
| **#18486** | Desktop AppImage: gray window on current Mesa — bundled libwayland-client lacks wl_fixes_interface | 3 | Desktop AppImage fails to render on modern Linux with Mesa drivers due to outdated wayland library. Affects Bluefin/Fedora users. |
| **#18397** | Daily dependency CVE audit failed | 2 | Automated security scanning failing, potentially masking vulnerabilities. |
| **#18552** | feat(verify-pr): add host capability probes and per-round VM staging | — | **Recently merged.** Closes host-side Phase 2 gaps for hardware-isolated `/verify-pr` microVM rounds. |

---

## 4. Key PR Progress

| # | Title | Author | Status | What It Does |
|----|-------|--------|--------|--------------|
| **#18561** | docs(managed-agent): Design Harness pull for released Sessions (P1) | doudouOUC | OPEN | Designs phase P1 of pull scheduling for hosted harnesses, enabling released sessions to claim work via outbound HTTP long polling. |
| **#18549** | feat(verify-pr): add destructive-diff adversarial protocol, top-level review capture, and mechanical publish guard | wenshao | OPEN | Hardens PR verification with adversarial diff protocol, independent recovery oracle, and mechanical publish guard to prevent silent data-loss bugs. |
| **#18579** | fix(ci): keep fork-PR reviews off the unreachable canary endpoint | wenshao | OPEN | Fixes CI routing so fork PR reviews on `ubuntu-latest` runners don't attempt to reach CN MaaS gateway (unreachable from GitHub-hosted runners). |
| **#18546** | fix(autofix-pr): harden tracked-state guard, watch consent, and in-place skill rules | wenshao | CLOSED | Addresses 11 review findings (3 Critical, 8 Suggestion) from PR #18521—blocks forged git-tracked watch state files, requires explicit watch consent. |
| **#18568** | test(integration): keep the distribution process observer off the PTY loop | yiliang114 | OPEN | Optimizes distribution test suite by limiting process table walks to every 500ms, probing max 32 descendants per walk. |
| **#18155** | feat(managed-agent): confine selected Hosted Workspace Shell | water-in-stone | OPEN | Adds opt-in foreground shell profile for built-in Hosted Agent Sessions using Bubblewrap for read-only isolation. |
| **#18570** | fix(core): skip incomplete worktree snapshot pairs in unkeyed recovery | LyleLiu666 | OPEN | Improves worktree recovery robustness by skipping snapshot candidates with missing members during unkeyed search. |
| **#17823** | fix(agents): keep A2A tasks recoverable after transcript read errors | water-in-stone | OPEN | Returns retryable JSON-RPC error `-32012` when filesystem errors prevent reply lookup, enabling task recovery. |
| **#18523** | feat(core,cli): support OpenAI Responses multimodal/dialects and auto-select Chat Completions audio encoding | HaveAnApplePie | OPEN | Adds native multimodal input handling, wire dialect descriptors, plaintext reasoning replay, and SSE framing hardening for OpenAI Responses API. |
| **#18522** | feat(core): fix Gemini/Vertex long-stream transport and support native multimodal tool outputs | HaveAnApplePie | OPEN | Improves Google GenAI/Vertex AI transport routing through bundled `undici` dispatcher with header tracking. |
| **#18543** | feat(web-shell): decouple ChatEditor daemon toolbar and upload imports (slice 6b) | wenshao | OPEN | Implements slice 6b of unified chat surface roadmap, decoupling shared composer editor from daemon-only toolbar imports. |
| **#18559** | feat(managed-agent): Wake MySQL session resource GC via RocketMQ | doudouOUC | CLOSED | Adds opt-in MySQL session resource garbage collection via RocketMQ messaging. |

---

## 5. Feature Request Trends

The community's most-requested enhancements cluster around four themes:

| Theme | Evidence | Priority |
|-------|----------|----------|
| **Managed Agent Scheduling** | #18514 (pull scheduling), #18561 (design doc), #18544 (worker sharing) | P2 |
| **Session Management** | #18541 (branch/fork for trusted workspaces), #18527 (session color groups) | P2 |
| **Windows Platform Parity** | #17489 (settings hot-reload), general Windows CI failures | P2 |
| **Web Shell UX** | #18508 (artifact navigation), #18553 (branch warnings), #18515 (draft saving) | P2-P3 |

---

## 6. Developer Pain Points

### 🔴 CI Reliability Crisis

The repository is experiencing widespread CI flakiness:
- **E2E test failures** across multiple suites (61+ comments on #18342)
- **Managed Agent gate failures** in Java SDK pipeline
- **CVE audit automation** failing (#18397)
- **Test distribution observer** causing PTY loop contention (#18568)

**Impact:** PR turnaround time degraded; developers spending significant cycles triaging vs. building.

### 🟠 Performance Regressions

- **v0.28.7 event-loop freezes** (#18489): O(N²) algorithm in worktree retention causes 6-8 minute freezes on large projects
- **Worktree snapshot churn**: Multi-GB background I/O during retention

### 🟡 Cross-Platform Gaps

- **Windows**: Settings hot-reload broken (#17489)
- **Linux Desktop**: AppImage fails to render on modern Mesa (#18486)

### 🟢 UX Friction

- **Ink TUI state loss** (#18492): Checked options and typed text forgotten when scrolling
- **Web shell session colors** missing in secondary workspaces (#18527)
- **Developer guide using npm** instead of pnpm (#18524)

---

## 7. Quick Stats

| Metric | Value |
|--------|-------|
| Total Issues | 50 |
| Total PRs | 50 |
| Closed Issues (24h) | 9 |
| Merged PRs (24h) | 5 |
| P1 Issues | 1 |
| P2 Issues | 8 |
| Active CI Failures | 12+ |

---

*Digest generated from github.com/QwenLM/qwen-code activity on 2026-11-28*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*