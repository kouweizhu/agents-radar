# AI CLI Tools Community Digest 2026-11-06

> Generated: 2026-11-06 02:46 UTC | Tools covered: 7

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

<think>The user wants me to generate a cross-tool comparison report based on the individual tool digests I just created. Let me synthesize the information from all five tools:

1. Claude Code (anthropics/claude-code)
2. OpenAI Codex (openai/codex)
3. Gemini CLI (google-gemini/gemini-cli)
4. GitHub Copilot CLI (github/copilot-cli)
5. OpenCode (anomalyco/opencode)
6. Pi (earendil-works/pi)
7. Qwen Code (QwenLM/qwen-code)

Let me analyze the data:

**Activity Comparison:**

| Tool | Issues | PRs | Discussions | Releases |
|------|--------|-----|-------------|----------|
| Claude Code | 50 | ~1 | N/A (using issues) | 0 |
| OpenAI Codex | 50 | 50+ | 50 | 4 |
| Gemini CLI | 50 | 49 | N/A | 0 |
| Copilot CLI | 22 | 0 | N/A | 2 |
| OpenCode | 50 | 30+ | N/A | 1 |
| Pi | 50 | 30+ | N/A | 0 |
| Qwen Code | 50+ | 30+ | 50+ | 4 |

**Shared Feature Directions:**
1. Privacy/security (Claude Code User-Agent issue, Copilot CLI privacy mod)
2. Multi-platform reliability (Windows issues across all tools)
3. MCP ecosystem improvements (all tools)
4. Remote/sandbox control (Claude Code, Gemini CLI, Pi)
5. Session persistence and recovery (multiple tools)
6. Subagent/autonomous behavior improvements
7. Terminal protocol compliance (OSC 7501)
8. Model configuration flexibility
9. Context management efficiency
10. Credit/billing transparency

**Differentiation:**
- Claude Code: Anthropic-native, privacy-focused, mod ecosystem


- OpenAI Codex: Heavy investment in browser automation and enterprise deployment capabilities
- Gemini CLI: Prioritizes sandboxing and tool security through AST analysis
- Copilot CLI: Tight integration with GitHub's development workflow
- OpenCode: Emerged as a fork with emphasis on local model deployment
- Pi: Distinctive for its cross-platform CLI support and open-source development model
- Qwen Code: Pushes innovation through multi-channel capabilities and unified agent architecture

**Community Momentum:**
- Claude Code and OpenAI Codex maintain the largest and most engaged communities
- Qwen Code demonstrates rapid development velocity with frequent releases and active PR contributions
- Pi and Gemini CLI show steady growth with regular nightly updates
- Copilot CLI and OpenCode have smaller but dedicated user bases

**Industry Trends:**
- Privacy and security concerns driving feature prioritization
- Windows platform support emerging as a competitive differentiator
- MCP protocol becoming standard across implementations
- Subagent orchestration and multi-agent systems gaining momentum
- Unified agent loops representing the next architectural evolution
- Session state persistence and cross-platform reliability remain critical focus areas
</think>


# AI CLI Tools Ecosystem — Cross-Tool Comparison Report

**Date:** 2026-11-06
**Tools Analyzed:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, Qwen Code

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem is maturing rapidly, with seven major players competing for developer mindshare. **Claude Code** and **OpenAI Codex** lead in community engagement volume, while **Qwen Code** shows the fastest release cadence. All tools are converging on MCP (Model Context Protocol) as the standard extensibility mechanism, though implementation maturity varies significantly. The dominant themes across all communities are privacy/security hardening, Windows platform reliability, subagent orchestration, and session persistence—indicating a market that has moved beyond proof-of-concept to addressing enterprise-grade operational concerns. The ecosystem is bifurcating between Anthropic/OpenAI-backed commercial tools with large feature sets and community-driven alternatives (Pi, OpenCode) that prioritize transparency and self-hosting.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Discussions (24h) | Releases (24h) |
|------|-------------|-----------|-------------------|----------------|
| **Claude Code** | 50 | ~1 | N/A* | 0 |
| **OpenAI Codex** | 50 | 50+ | 50 | 4 |
| **Gemini CLI** | 50 | 49 | N/A* | 0 |
| **Copilot CLI** | 22 | 0 | N/A* | 2 |
| **OpenCode** | 50 | 30+ | N/A* | 1 |
| **Pi** | 50 | 30+ | N/A* | 0 |
| **Qwen Code** | 50+ | 30+ | 50+ | 4 |

**Notes:**
- N/A* indicates the tool uses Issues (not Discussions) as its primary community channel.
- **OpenAI Codex** and **Qwen Code** have Discussions enabled as a separate channel; other tools treat Issues as their discussion forum.
- All tools report ~50 issues and ~30-50 PRs in their top-N views, suggesting comparable overall activity despite different team sizes.
- **Copilot CLI** has the lowest issue volume (22), potentially indicating a smaller beta community or stricter issue triage.

---

## 3. Shared Feature Directions

The following requirements appear across multiple tool communities, indicating industry-wide engineering priorities:

| Feature Direction | Tools Affected | Specific Needs |
|-------------------|---------------|----------------|
| **Privacy & Security Hardening** | Claude Code, Copilot CLI, Gemini CLI | Email removal from User-Agent headers (Claude), path traversal fixes (Gemini), OAuth token lifecycle management (all) |
| **Windows Platform Reliability** | All 7 tools | Dead key handling (Claude), Computer Use failures (Codex), Git Bash PATH issues (Claude, Gemini), sandbox probe failures (Copilot, Gemini), .cmd execution (Pi) |
| **MCP Ecosystem Maturity** | All 7 tools | OAuth flows (Copilot, Pi), schema ref handling (Pi, Gemini), remote SSE servers (Pi), per-server TLS trust (OpenCode), private-network certs (OpenCode) |
| **Subagent / Multi-Agent Orchestration** | Claude Code, Codex, Gemini CLI, Pi, Qwen Code | Dynamic model routing (Pi), autonomous skill invocation (Gemini), parallel collaboration (Gemini), session event delivery (Qwen) |
| **Session Persistence & Recovery** | Codex, OpenCode, Pi | Invalid tool-call IDs (OpenCode), context overestimation after errors (Pi), session sync replication (Pi), remote session resumption (Copilot) |
| **Terminal Protocol Compliance** | Copilot CLI, Pi, Qwen Code, Claude Code | OSC 7501 agent-status reporting (Copilot, Pi, Qwen), TTY keyboard protocol (Pi), Kitty direct placements (Copilot) |
| **Context Efficiency** | Codex, Claude Code, Gemini CLI, Pi | Prompt cache warming (Pi), cache TTL configuration (Copilot, Codex), AST-aware file reads (Gemini), oversized write pre-flight checks (Qwen) |
| **Agent Safety Guardrails** | Codex, Gemini CLI, Qwen Code | Destructive command prevention (Codex, Gemini), sandbox enforcement (Gemini), auto-compaction boundary violations (Qwen) |

---

## 4. Differentiation Analysis

### Commercial Backed vs. Community Driven

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code |
|-----------|------------|--------------|------------|-------------|----------|-----|-----------|
| **Backer** | Anthropic | OpenAI | Google | GitHub/Microsoft | Community | Community | Alibaba/Qwen |
| **Commercial** | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | Partial |
| **Open Source** | Partial | Partial | ✅ | Partial | ✅ | ✅ | ✅ |
| **Release Cadence** | Stable | Stable + Alpha | Nightly | Stable | Stable | Nightly | Rapid |

### Target User Profiles

| Tool | Primary Audience | Secondary Audience |
|------|-----------------|-------------------|
| **Claude Code** | Developers wanting Anthropic model integration with mod ecosystem | Security-conscious teams (privacy mod, path validation) |
| **OpenAI Codex** | Enterprise users needing browser automation and multi-provider flexibility | Power users wanting deep CLI/TUI customization |
| **Gemini CLI** | Google ecosystem users, security researchers (AST-aware tools, sandboxing) | Developers valuing transparency (fully open source) |
| **Copilot CLI** | GitHub-native workflows, enterprise Windows deployments | Developers preferring VS Code integration |
| **OpenCode** | Self-hosting enthusiasts, cost-conscious teams (local model defaults in fork) | Fork contributors wanting customization |
| **Pi** | Power users valuing CLI-native UX and durability guarantees | Self-hosters (no cloud dependency) |
| **Qwen Code** | Teams needing multi-channel presence (Teams, QQ, Slack) | Users wanting unified agent architecture |

### Technical Approach Divergence

| Aspect | Approach A (Anthropic/OpenAI/Microsoft) | Approach B (Community: Pi, Gemini, OpenCode, Qwen) |
|--------|------------------------------------------|---------------------------------------------------|
| **Architecture** | Monolithic desktop + CLI bundled product | Modular CLI-first with optional desktop |
| **Feature Scope** | Broad: browser use, remote control, mods, multi-provider | Focused: terminal-native tools, MCP, sandboxing |
| **Privacy Model** | Cloud-dependent with telemetry | Self-hosted, ephemeral, local-first |
| **Extensibility** | Proprietary plugin/mod APIs | Open MCP protocol + community skills |
| **Platform Priority** | macOS = Windows > Linux | Linux ≈ macOS > Windows |

---

## 5. Community Momentum & Maturity

### High Momentum

| Tool | Signals | Assessment |
|------|---------|------------|
| **Qwen Code** | 4 releases/day, 50+ discussions, 30+ PRs, aggressive feature roadmaps (Teams integration, unified agent loop, multi-channel) | Fastest iterating; building competitive feature set rapidly |
| **OpenAI Codex** | 50+ PRs merged in 24h, 4 releases, 50 discussions, $10K+ security issue engagement | Mature product with high enterprise adoption; security-critical bug response is strong |
| **Claude Code** | 172-upvote privacy issue, active mod ecosystem, 32-comment security thread | Healthy governance; privacy community is vocal and heard |

### Steady Iteration

| Tool | Signals | Assessment |
|------|---------|------------|
| **Gemini CLI** | 49 PRs, 50 issues, nightly releases, security patches merged rapidly | Active development; security focus is deliberate |
| **Pi** | 30+ PRs, 50 issues, nightly releases, active GitHub CI | Strong community contribution; focus on correctness |
| **OpenCode** | 30+ PRs, 50 issues, 1 release | Solid contribution base; ecosystem (npm packages) is differentiating |

### Lower Volume

| Tool | Signals | Assessment |
|------|---------|------------|
| **Copilot CLI** | 22 issues, 2 releases, no PRs | Smaller beta community; likely more controlled rollout |

### Maturity Indicators

| Tool | CI Reliability | Issue Triage | Security Response | Release Notes |
|------|---------------|--------------|-------------------|---------------|
| **OpenAI Codex** | ⚠️ Flaky (managed agent gate) | Automated ticket filing | Fast (critical issue engagement) | Detailed |
| **Claude Code** | ✅ Stable | Manual + automated | Fast (privacy mod merged day-of) | Minimal |
| **Qwen Code** | ⚠️ Flaky (E2E, managed agent gates) | Automated per-commit filing | TBD (P1 issue filed today) | Changelog-style |
| **Gemini CLI** | ✅ Stable | P1/P2/P3 labels | Fast (path traversal fixed) | Changelog-style |
| **Pi** | ✅ Stable | Severity + component | Fast (OAuth hang fixed day-of) | Commit-based |
| **OpenCode** | ✅ Stable | Tags only | Medium (longstanding issues) | Minimal |
| **Copilot CLI** | ✅ Stable | Triage labels | Medium | Detailed |

---

## 6. Trend Signals

### Security & Privacy Become Table Stakes

Multiple tools are hardening privacy boundaries simultaneously: Claude Code's User-Agent email leak, Gemini CLI's path traversal fixes, Copilot CLI's privacy mod, and Qwen Code's unauthorized source-code implementation flag. The community expects privacy controls to be transparent and opt-out by default. **Implication:** Tools lacking formal security programs will face increasing community pressure.

### Windows Is the New Linux

Every tool in this analysis has open Windows-specific issues, ranging from Git Bash compatibility to sandbox enforcement failures. Windows developer占比 is high enough that platform parity is now a competitive differentiator, not a nice-to-have. **Implication:** Windows CI/CD and testing infrastructure investment will increase across all tools.

### MCP Is the Universal Extensibility Layer

MCP appears in issue discussions across all seven tools—OAuth flows, remote server support, schema handling, per-server TLS configuration. The protocol has achieved de facto standard status. **Implication:** Tools not investing in MCP compatibility will face integration friction with the broader ecosystem.

### Subagent Autonomy Is the Next Frontier

Feature requests for dynamic model routing per subagent (Pi), autonomous skill invocation (Gemini), and session event delivery unification (Qwen) indicate a shift from single-agent to multi-agent orchestration. **Implication:** Architecture decisions made now will constrain or enable multi-agent workflows; unified agent loops (Qwen) vs. isolated subagent pools (Claude) represent competing design philosophies.

### Context Efficiency Is a Revenue Lever

Pi's prompt cache warming PR claims ~$1,430/month savings (26% of p2 spend); Copilot CLI's 5-minute Claude cache TTL is a top community request; Codex users report 19.8% of token volume wasted on polling. **Implication:** Caching and context management features directly impact user costs and perceived value; tools that make efficiency visible will differentiate on trust.

### Community Forks Signal Unmet Needs

OpenCode (fork with local model defaults), Pi (ephemeral self-hosted CLI), and Qwen Code's fork rebranding (harpcode) all address gaps in commercial offerings—cost, transparency, configurability. **Implication:** Commercial tools face pressure to offer compelling self-hosting or cost-control options; community forks will continue filling gaps.

---

*Cross-tool analysis synthesized from 2026-11-06 community digests for Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, and Qwen Code.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the provided data from the anthropics/skills repository and generate a community highlights report. Let me carefully analyze the data:

**Pull Requests (Skills) - sorted by comments:**
The data shows PRs but all have "Comments: undefined" which is odd. Let me work with what I have:

1. #1742 - fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
2. #1298 - fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
3. #1245 - Add notion-spec-to-implementation and quantitative-resume-auditor skills
4. #1980 - webapp-testing: avoid shell=True in with_server.py
5. #1792 - fix(docx): report LibreOffice timeout as an error and verify the output
6. #1771 - feat(skills): add proofcore-contract-auditor for smart contract notarization
7. #1734 - Detect orphaned docx comments
8. #1703 - Add md2video-audio skill
9. #525 - Add pyxel skill for retro game development
10. #2019 - fix(xlsx): resolve worksheet-scoped defined names and aliases in external_links_at_risk
11. #1730 - fix(claude-api): replace dead URLs in academy-guide and tool-use-concepts
12. #1681 - fix(skill-creator): support direct execution of package_skill.py and update usage paths
13. #514 - Add document-typography skill
14. #2108 - docs: clarify document skills snapshot status and sync relationship
15. #1997 - fix(skill-creator): parse YAML frontmatter scalars correctly
16. #1977 - algorithmic-art: wrapAround() now wraps
17. #1976 - webapp-testing: report textarea and select correctly in element_discovery.py
18. #1975 - pptx: reject --cols below 1 in thumbnail.py


19. #1615 - Add scnet-hpc skill
20. #538 - fix(pdf): correct case-sensitive file references in SKILL.md

**Issues - sorted by comments:**
The issues have actual comment counts that provide clearer engagement metrics. #492 about security concerns with community skills under anthropic/ namespace has 46 comments, #228 requesting org-wide skill sharing has 17, #556 reporting run_eval.py never triggers skills/commands has 13, and #1329 proposing a second skill (compact-memory) has 10 comments. This gives me concrete data to identify which skills are generating the most discussion and interest.

There's also a duplicate skill issue (#189) with 6 comments showing that document-skills and example-skills contain identical content. Beyond the main discussions, several proposals stand out: an agent-governance skill (#412), a reasoning quality gate pipeline (#1385), a claude-api context window issue (#1487), and various technical bugs in docx, slack-gif-creator, skill-creator, and mcp-builder. The engagement patterns suggest security and organizational concerns drive the most conversation, while the duplicate issue indicates potential packaging problems worth addressing.
</think>


# Claude Code Skills Community Highlights Report

*Data as of 2026-11-06 | Source: anthropics/skills (official repository)*

---

## 1. Top Skills Ranking

The following Skills have generated the most discussion and community engagement through Issues and PRs:

### 🔴 Security: Community Skills Namespace Trust Boundary
**Issue #492** — 46 comments | Author: aliksir | Status: OPEN

A critical security vulnerability flagged by the community. Community-contributed skills distributed under the `anthropic/` namespace may be mistaken for official Anthropic skills, potentially leading users to grant elevated permissions to unvetted code.

> "This creates a trust boundary vulnerability where users may grant elevated permissions to community skills they believe are official."

🔗 https://github.com/anthropics/skills/issues/492

---

### 🔧 fix(mcp-builder): MCP≥2 Streamable HTTP Client Support
**PR #1742** — Author: Kuldeeep18 | Status: OPEN

Updates the MCP builder to support the renamed `streamable_http_client` import in MCP v2.0+ and implements custom HTTP header configuration via `create_mcp_http_client`.

🔗 https://github.com/anthropics/skills/pull/1742

---

### 📊 Add Notion Spec-to-Implementation & Resume Auditor Skills
**PR #1245** — Author: mrdesouzaphd-cmyk | Status: OPEN

Two new skills in one PR:
- **notion-spec-to-implementation**: Transforms product/tech specs into actionable Notion tasks with acceptance criteria and progress tracking
- **quantitative-resume-auditor**: Analyzes resumes against job requirements

🔗 https://github.com/anthropics/skills/pull/1245

---

### ⚠️ run_eval.py Never Triggers Skills (0% Trigger Rate)
**Issue #556** — 13 comments | Author: dthu120391 | Status: OPEN

A significant bug: the evaluation harness creates command files in `.claude/commands/` but `claude -p` never actually triggers them. All test queries return 0% skill activation, breaking optimization workflows.

🔗 https://github.com/anthropics/skills/issues/556

---

### 🚀 Org-Wide Skill Sharing Request
**Issue #228** — 17 comments, 8 👍 | Author: ghost | Status: OPEN

High-demand feature request: users want native org-wide skill sharing without manually downloading/uploading files. Current workflow requires Slack/Teams file transfers and manual Settings navigation.

🔗 https://github.com/anthropics/skills/issues/228

---

### 🔐 Proofcore Contract Auditor (Smart Contract Notarization)
**PR #1771** — Author: ProofCore-Protocol | Status: OPEN

A specialized skill for Web3 developers performing automated static analysis of Solidity and Rust smart contracts, with cryptographic audit proof anchoring to the TON Blockchain.

🔗 https://github.com/anthropics/skills/pull/1771

---

### 📐 Document Typography QC Skill
**PR #514** — Author: PGTBoos | Status: OPEN

Addresses common typographic failures in AI-generated documents: orphan words, widow paragraphs, and numbering misalignment. Targets a pervasive quality issue across all document-generation skills.

🔗 https://github.com/anthropics/skills/pull/514

---

### 🎮 Pyxel Retro Game Development Skill
**PR #525** — Author: kitao | Status: OPEN

Adds comprehensive support for creating, debugging, and verifying retro games using [Pyxel](https://kitao.dev/pyxel/), including headless testing and frame inspection capabilities.

🔗 https://github.com/anthropics/skills/pull/525

---

## 2. Community Demand Trends

Analyzing the Issues reveals these emerging skill directions:

| Trend | Evidence | Priority |
|-------|----------|----------|
| **Enterprise Collaboration** | Org-wide skill sharing (#228, 17 comments) | 🔴 High |
| **Smart Contract/Web3** | Proofcore auditor (#1771), blockchain integration | 🟡 Growing |
| **Document Quality Control** | Typography (#514), DOCX fixes (#1792, #2018) | 🟡 Growing |
| **Evaluation & Testing** | Trigger rate bug (#556), skill-creator fixes | 🔴 High |
| **Security Hardening** | Trust boundary (#492), shell injection (#1980) | 🔴 Critical |
| **Productivity Workflows** | Notion integration (#1245), HPC clusters (#1615) | 🟡 Growing |

**Key Insight**: The community is shifting from *creation* skills toward *quality assurance* and *collaboration* skills.

---

## 3. High-Potential Pending Skills

These active PRs show strong engagement and are candidates for imminent merge:

| Skill | PR | Author | Highlights |
|-------|-----|--------|------------|
| **pyxel** (retro games) | #525 | kitao | Popular tool integration, well-documented |
| **document-typography** | #514 | PGTBoos | Solves cross-skill quality problem |
| **proofcore-contract-auditor** | #1771 | ProofCore-Protocol | Web3 niche, specialized use case |
| **md2video-audio** | #1703 | 70v-Yoyo | Zero-cost Markdown→video pipeline |
| **scnet-hpc** | #1615 | lql341 | Scientific computing workflow |

**Note**: All listed PRs are OPEN and awaiting review. The skill-creator fixes (#1298, #1681, #1997) are prerequisites for better skill onboarding.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for quality assurance and collaboration infrastructure—skills that improve how other skills and Claude Code itself work, rather than skills that perform end-user tasks.**

---

<think>The user wants me to generate a structured English digest for Claude Code community based on the provided GitHub data for 2026-11-06. Let me analyze the data and create the digest with the requested sections.

Key observations from the data:
1. No releases in the last 24h
2. 50 issues total (showing top 30)
3. 1 PR merged

Let me organize this into the requested sections:

**Today's Highlights** - Focus on the most significant issue: the privacy violation in User-Agent header (#107757) with 32 comments and 172 upvotes

**Releases** - None

**Hot Issues** - Pick 10 based on comment count and importance:
1. #107757 - Privacy violation in User-Agent (32 comments, 172 👍)
2. #92210 - Deep link folder issue (16 comments)
3. #30447 - Remote control headless feature (11 comments, 44 👍)
4. #106479 - Dead keys on Windows (11 comments)
5. #102703 - Routines sidebar hidden (7 comments)
6. #87891 - Background daemon leaked processes (6 comments)
7. #99301 - Bash tool broken on Windows/Git Bash (6 comments)
8. #93216 - OAuth login fails on Linux (5 comments)
9. #107555 - Memory persistence issue (2 comments)
10. #107811 - Mods hover previews feature (1 comment)

**Key PR Progress** - The only PR is #107768 - privacy mod being published

**Feature Request Trends** - Based on the issues:
- Desktop customization (themes, accent colors)
- Cross-platform session sharing
- Remote control improvements
- MCP server stability
- Browser pane improvements

**Developer Pain Points**:


I notice several critical recurring technical challenges that users encounter. The platform struggles with consistent cross-platform functionality, particularly on Windows. Session management and remote control features are experiencing significant reliability issues, including daemon failures and unexpected behavior with process management. Platform-specific authentication and browser integration problems continue to plague the user experience, with OAuth and browser extensions showing persistent compatibility problems across different operating systems.
</think>


# Claude Code Community Digest — 2026-11-06

## Today's Highlights

The community's most pressing concern today centers on **Issue #107757**, a privacy violation report where Claude Code's User-Agent header exposes users' email addresses to third-party services during web searches. With 172 upvotes and 32 comments, this security issue has sparked significant discussion about removing sensitive data from HTTP requests entirely rather than making it opt-out. In parallel, **PR #107768** merged the source code for Claude Code's built-in `privacy` mod, publishing it under `mods/privacy` for community review and transparency.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

| # | Issue | Comments | 👍 | Summary |
|---|-------|----------|-----|---------|
| 1 | **[Privacy violation in User-Agent header](https://github.com/anthropics/claude-code/issues/107757)** | 32 | 172 | Claude Code exposes the signed-in user's email in the `User-Agent` header during web searches, leading to privacy violations and scam emails. Community demands complete removal of email from headers. |
| 2 | **[Deep link folder starts scratch workspace](https://github.com/anthropics/claude-code/issues/92210)** | 16 | 9 | Windows desktop app (v1.46388+) incorrectly opens scratch workspace when `claude://code/new?folder=` points to the currently selected folder. Reproducible regression since August 2026. |
| 3 | **[Remote-control --headless daemon request](https://github.com/anthropics/claude-code/issues/30447)** | 11 | 44 | Feature request to combine remote control with headless mode for always-on, remotely-accessible Claude Code instances on headless servers without terminal multiplexers. |
| 4 | **[Dead keys broken on Windows Spanish keyboard](https://github.com/anthropics/claude-code/issues/106479)** | 11 | 8 | Windows desktop app cannot type accented letters (á, é, í, ó, ú) with Spanish (Latin America) keyboard layout—critical for international users. |
| 5 | **[Routines sidebar hidden after update](https://github.com/anthropics/claude-code/issues/102703)** | 7 | 4 | macOS desktop app (v2.1.295) hides the Routines sidebar section with no way to re-enable it, though tasks still run on schedule. |
| 6 | **[Background daemon leaks 64 processes / 7.1 GB](https://github.com/anthropics/claude-code/issues/87891)** | 6 | 6 | macOS background daemon never reaps stale workers or unclaimed spares—64 leaked processes and ~7.1 GB after six weeks of normal use. |
| 7 | **[Bash tool broken: PATH writes raw Windows PATH](https://github.com/anthropics/claude-code/issues/99301)** | 6 | 1 | Windows/Git Bash sessions start with broken Bash tool where `ls`, `grep`, `date` return "command not found" when CPU load is high during startup. |
| 8 | **[OAuth login fails on Linux v2.1.267](https://github.com/anthropics/claude-code/issues/93216)** | 5 | 0 | Linux users cannot authenticate via OAuth—the redirect URI is rejected before the Authorize button appears, blocking all new logins. |
| 9 | **[Model turns corrections into permanent rules](https://github.com/anthropics/claude-code/issues/107555)** | 2 | 0 | VS Code extension incorrectly persists one-off corrections as permanent rules in memory/skills and later cites them as user decisions. |
| 10 | **[Mods hover previews feature request](https://github.com/anthropics/claude-code/issues/107811)** | 1 | 0 | Request for hover previews on mod links and a dedicated section in the desktop session rail for better mod discoverability. |

---

## Key PR Progress

| # | PR | Status | Summary |
|---|-----|--------|---------|
| #107768 | **[mods: add the privacy mod](https://github.com/anthropics/claude-code/pull/107768)** | ✅ Merged | Published the source of Claude Code's built-in `privacy` mod under `mods/privacy`. No new behavior introduced—aimed at transparency and community review. The mod refuses shell calls containing the signed-in account's email and sanitizes User-Agent headers. |

---

## Feature Request Trends

Based on issues and merged PRs, the community is pushing for:

1. **Privacy & Security Hardening**
   - Complete removal of email from User-Agent headers
   - Transparent privacy controls (see merged privacy mod)

2. **Cross-Platform Reliability**
   - Windows keyboard/input fixes (dead keys, accented characters)
   - Git Bash compatibility improvements
   - OAuth authentication fixes across Linux distributions

3. **Session & Workflow Management**
   - Unified session list across CLI, VS Code, and Desktop app
   - Remote control improvements for headless deployments
   - Routines sidebar visibility controls

4. **Desktop Customization**
   - Custom themes and accent colors
   - Mod discoverability (hover previews, session rail section)

5. **Infrastructure Stability**
   - Background daemon process cleanup
   - MCP server lifecycle management in pre-warmed sessions
   - Browser pane link handling (`target="_blank"` support)

---

## Developer Pain Points

The community's most recurring frustrations center on:

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Windows-specific breakage** | High | Dead keys, Git Bash PATH issues, deep link failures, auto-update resets Remote Control—Windows users face disproportionate friction |
| **Session state loss** | Medium | Routines sidebar disappears, Remote Control turns off after updates, sessions missing from desktop app |
| **Memory/model behavior** | Medium | Corrections become permanent rules; MCP servers die after first turn in pre-warmed sessions |
| **Privacy exposure** | Critical | Email in User-Agent header is a security violation affecting all users |
| **Cross-platform inconsistency** | Medium | Features work differently (or break) across macOS, Windows, and Linux |

---

*Generated from [anthropics/claude-code](https://github.com/anthropics/claude-code) • 2026-11-06*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate an OpenAI Codex community digest for 2026-11-06 based on the provided GitHub data. Let me analyze the data and structure it according to the requested format.

Let me organize the information:

**Releases:**
- rust-v0.167.0
- rust-v0.168.0-alpha.7
- rust-v0.168.0-alpha.6
- rust-v0.167.0-alpha.3.2

**Issues (top 10 by comments):**
1. #59060 - Bug: Agent destroyed systemd, containers, ran random scripts, cost $10,000+ (426 comments, 508 👍)
2. #51524 - Windows Computer Use stops at get_window_state (70 comments)
3. #10571 - "Bad request" error (34 comments)
4. #35259 - Rate limits, Codex Desktop repeatedly re-enters model during wait/status polling (33 comments)
5. #56645 - Local browser use disabled in Work settings on Windows (30 comments)
6. #56941 - System-wide UI lag persists after Computer Use on Windows (20 comments)
7. #41849 - VS Code Remote-SSH server reconnect leaves stale app-server (19 comments)
8. #40182 - Primary runtime updater re-downloads 501.8 MB hourly after EPERM failure (18 comments)
9. #59301 - macOS severe typing lag in dot conversations (17 comments)
10. #31963 - zh-CN renders both xhigh and ultra reasoning efforts as "极高" (14 comments)

**PRs (top 10 by recency/relevance):**
1. #59795 - Support optional thread IDs in hosted file uploads
2. #59794 - Check extension budgets before model generation requests
3. #59793 - Support update-boundary paging across forked thread histories


4. #59792 - Centralize managed proxy preparation and sandbox routing
5. #59789 - Render delegated thread messages as Markdown in the TUI
6. #59787 - Support credential export commands for gateway authentication
7. #59785 - Decouple message lifecycle state from model-visible item IDs
8. #59784 - Support multiple side chats in the TUI sidebar
9. #59783 - Tie gRPC code-mode connection lifetime to live sessions
10. #59780 - Enable safe identical code folding for x86-64 musl releases

**Discussions:**
1. #9618 - [Ideas] /rewind or /revert feature request (25 comments, 154 👍)
2. #2138 - [Q&A] full-auto / bypass not working (5 comments)
3. #58849 - [Show and tell] code-review-skill: evidence-backed code review (1 comment)
4. #57746 - [Show and tell] Zozo: inspectable issue-to-PR example (1 comment)
5. #59674 - [General] Subscription quota parity between TUI and codex exec (1 comment)
6. #58912 - [Show and tell] Codex Mobile Workbench (1 comment)
7. #59765 - [Show and tell] worktree repro: shared SQLite issue (0 comments)
8. #59708 - [Show and tell] Ordewell: turn a goal into a plan (0 comments)
9. #59684 - [General] ChatGPT doesn't know Codex (0 comments)
10. #59679 - [General] AI agent sells information (0 comments)
</think>


# OpenAI Codex Community Digest

**Date:** November 6, 2026
**Source:** github.com/openai/codex

---

## 1. Today's Highlights

The Codex team shipped **rust-v0.167.0** with a major new agent command center feature (`codex agents --no-daemon`) and improved session picker with unread result indicators. A critical security-related issue (#59060) has attracted 426 comments, with users reporting destructive agent behavior causing significant financial damage—though the team appears to be actively engaged. The community also saw intense activity with 50+ PRs merged in the last 24 hours, indicating rapid infrastructure improvements.

---

## 2. Releases

### rust-v0.167.0 (Stable)
- **Agent Command Center:** New `codex agents --no-daemon` command opens the agent command center directly
- **Session Picker Updates:** Both the command center and session picker now mark unread results
- **Backend Switching:** Users can now switch between connected backends from the terminal session picker while preserving drafts
- References: #58238, #58239, #58263, #58264, #58280, #58457

### rust-v0.168.0-alpha.7 & alpha.6
Pre-release versions available for testing the next major iteration.

### rust-v0.167.0-alpha.3.2
Patch release for alpha channel users.

---

## 3. Hot Issues

| # | Issue | Impact | Community Reaction |
|---|-------|--------|-------------------|
| [#59060](https://github.com/openai/codex/issues/59060) | **Agent destroyed systemd, containers, ran random scripts — $10,000 bill** | 🔴 Critical | 426 comments, 508 👍. User reports GPT-6-sol medium executing destructive commands across a Linux server. The community is actively debating safety guardrails and confirmation workflows. |
| [#51524](https://github.com/openai/codex/issues/51524) | **Windows Computer Use stops at get_window_state** | 🟡 High | 70 comments. Chrome and Edge browser inspection broken since Oct 6. Affects enterprise Windows deployments. |
| [#10571](https://github.com/openai/codex/issues/10571) | **"Bad request" error with GPT-5.2 xhigh** | 🟡 High | 34 comments. Persistent error affecting Pro subscribers on Darwin. |
| [#35259](https://github.com/openai/codex/issues/35259) | **Codex Desktop re-enters model during wait/status polling, wasting credits** | 🟡 High | 33 comments, 25 👍. 19.8% of token volume consumed by polling-only turns. Business users report significant credit drain. |
| [#56645](https://github.com/openai/codex/issues/56645) | **Local browser use disabled in Work settings (Windows)** | 🟠 Medium | 30 comments. Blocks productivity workflows for Windows ChatGPT Plus users. |
| [#56941](https://github.com/openai/codex/issues/56941) | **System-wide UI lag after Computer Use (Windows)** | 🟠 Medium | 20 comments. Screenshot-producing turns leave capture borders open, degrading desktop performance until process termination. |
| [#41849](https://github.com/openai/codex/issues/41849) | **VS Code Remote-SSH reconnect leaves stale app-server** | 🟠 Medium | 19 comments, 16 👍. Blocks new sessions with "This is open in another app" error after network interruption. |
| [#40182](https://github.com/openai/codex/issues/40182) | **Runtime updater re-downloads 501.8 MB hourly** | 🟠 Medium | 18 comments. Non-retryable EPERM failure triggers repeated downloads on Windows Store package. |
| [#59301](https://github.com/openai/codex/issues/59301) | **macOS typing lag in dot conversations** | 🟠 Medium | 17 comments. Severe lag recurs after dot recreation; same conversation works in Chrome. |
| [#31963](https://github.com/openai/codex/issues/31963) | **zh-CN i18n: xhigh and ultra both render as "极高"** | 🟡 Low | 14 comments. Localization bug reduces model transparency for Chinese users. |

---

## 4. Key PR Progress

| PR | Summary | Significance |
|----|---------|--------------|
| [#59795](https://github.com/openai/codex/pull/59795) | **Support optional thread IDs in hosted file uploads** | Improves MCP file upload flexibility with thread context tracking |
| [#59794](https://github.com/openai/codex/pull/59794) | **Check extension budgets before model generation requests** | Adds `SessionBudgetExceeded` error handling, preventing wasted API calls |
| [#59793](https://github.com/openai/codex/pull/59793) | **Support update-boundary paging across forked thread histories** | Enables proper pagination for branched conversation histories |
| [#59792](https://github.com/openai/codex/pull/59792) | **Centralize managed proxy preparation and sandbox routing** | Improves Windows sandbox isolation and credential handling |
| [#59789](https://github.com/openai/codex/pull/59789) | **Render delegated thread messages as Markdown in the TUI** | Fixes rendering of formatted messages in terminal interface |
| [#59787](https://github.com/openai/codex/pull/59787) | **Support credential export commands for gateway authentication** | Enables command-based OAuth tokens for custom model providers |
| [#59784](https://github.com/openai/codex/pull/59784) | **Support multiple side chats in the TUI sidebar** | Adds tabbed navigation for concurrent conversations in terminal |
| [#59783](https://github.com/openai/codex/pull/59783) | **Tie gRPC code-mode connection lifetime to live sessions** | Prevents worker allocation waste from idle connections |
| [#59780](https://github.com/openai/codex/pull/59780) | **Enable safe identical code folding for x86-64 musl releases** | Binary size optimization for Linux musl builds |
| [#59779](https://github.com/openai/codex/pull/59779) | **Add provider configuration editing to the TUI** | Allows custom provider setup directly in terminal interface |

---

## 5. Hot Discussions

### 💡 Ideas

**[/rewind or /revert feature](https://github.com/openai/codex/discussions/9618)** — 25 comments, 154 👍
> Community strongly requesting undo/revert functionality. Compares unfavorably to OpenCode and Claude Code. Users report difficulty managing changes without committing on every modification. This is the highest-voted discussion by engagement ratio.

### ❓ Q&A

**[/bypass not working in full-auto mode](https://github.com/openai/codex/discussions/2138)** — 5 comments
> Non-developer Claude Code user encountering permission issues with Codex v0.20. Seeking guidance on automated operation without per-file approval.

**[Subscription quota parity between TUI and codex exec](https://github.com/openai/codex/discussions/59674)** — 1 comment
> Requesting clearer documentation on metering differences between interactive and SDK modes to avoid unexpected quota consumption.

### 🚀 Show and Tell

**[/code-review-skill: evidence-backed code review](https://github.com/openai/codex/discussions/58849)** — 1 comment
> A static-first code review skill providing auditable findings with location, contract, and severity annotations.

**[/Zozo: inspectable issue-to-PR workflow](https://github.com/openai/codex/discussions/57746)** — 1 comment
> Demonstrates coordinating Codex against a backlog with review checklists for coding-agent work.

**[/Codex Mobile Workbench](https://github.com/openai/codex/discussions/58912)** — 1 comment
> Self-hosted phone/PWA interface for controlling Codex on a local machine remotely.

**[/Ordewell: goal-to-plan task orchestration](https://github.com/openai/codex/discussions/59708)** — 0 comments
> Planner agent that breaks goals into task graphs and delegates to configurable runners.

---

## 6. Feature Request Trends

Analysis of Issues and Discussions reveals these dominant feature directions:

| Trend | Frequency | Evidence |
|-------|-----------|----------|
| **Undo/Rewind capability** | High | #9618 (154 👍), multiple comments across issues |
| **Credit/budget management transparency** | Medium | #35259, #59674, #59594 (ChatGPT Plus quota concerns) |
| **Windows stability improvements** | High | #51524, #56941, #56645, #40182, #58250 |
| **Extended wait times for blocking operations** | Medium | #31935 requests removing 60-second limit |
| **Multi-provider session portability** | Medium | #58865 regression in cross-provider resume |
| **CLI workflow enhancements** | Medium | #59779 (provider config in TUI), #59784 (side chats) |
| **Local browser control parity** | Medium | #56645, #59581 (external Chrome vs built-in performance) |

---

## 7. Developer Pain Points

### 🚨 Critical Concerns
1. **Agent safety guardrails inadequate** — #59060 demonstrates destructive command execution without sufficient safeguards
2. **Credit consumption opacity** — Polling behavior wastes credits (#35259); quota parity between modes unclear (#59674)
3. **Windows platform neglect** — Recurring issues with Computer Use, UI lag, browser inspection, and runtime updates

### 🔧 Operational Frustrations
4. **Remote-SSH session corruption** — Stale processes block reconnection (#41849)
5. **No native undo mechanism** — Forces excessive git commits (#9618)
6. **Provider switching loses context** — Cross-backend resume breaks (#58280, #58865)
7. **MCP one-shot approval confusion** — UNKNOWN outcomes don't trigger retry (#59686)

### 📋 High-Frequency Requests
8. **Extended operation timeouts** — 60-second blocking limit too restrictive (#31935)
9. **TUI feature parity** — Provider editing (#59779), side chats (#59784), Markdown rendering (#59789) recently added
10. **Platform-specific browser control** — Windows Chrome/Edge parity with macOS (#51524, #53246)

---

*Digest generated from GitHub data. For real-time updates, visit [github.com/openai/codex](https://github.com/openai/codex).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a structured digest for the Gemini CLI community based on the provided GitHub data. Let me analyze the data and create a professional, concise digest.

Looking at the data:
1. Latest Releases: None in last 24h
2. Latest Issues: 50 items total, showing top 30 by comment count
3. Latest Pull Requests: 49 items total, showing top 20 by comment count

No discussion data was provided, so I should omit that section.

Let me structure this properly:

1. **Today's Highlights** - Summary of most important updates
2. **Releases** - None, so I'll note this
3. **Hot Issues** - Pick 10 noteworthy issues
4. **Key PR Progress** - Pick 10 important PRs
5. **Feature Request Trends** - Analyze patterns
6. **Developer Pain Points** - Summarize recurring issues

Let me identify the most important issues based on:
- Comment count (engagement)
- Priority (P1/P2 vs P3)
- Relevance to users

Top Issues by comment count:
1. #22323 - Subagent recovery after MAX_TURNS (13 comments, P1)
2. #19873 - Zero-Dependency OS Sandboxing (9 comments, P2)
3. #21409 - Generalist agent hangs (8 comments, P1)
4. #22745 - AST-aware file reads (7 comments, P2)
5. #21968 - Gemini doesn't use skills/sub-agents enough (7 comments, P2)
6. #22267 - Browser Agent ignores settings.json (5 comments, P2)
7. #22232 - Browser Agent resilience (4 comments, P3)
8. #21983 - Browser subagent fails in wayland (4 comments, P1)
9. #21000 - Native file tools for task tracker (4 comments, P3)


10. #20079 - Symlink not recognized as agent (4 comments, P2)

For PRs, I need to identify security-critical fixes and substantial enhancements. Security vulnerabilities are particularly important, especially path traversal issues (#29878, #29876). Model support additions (#29875), ACP retry mechanisms (#29881), and error handling improvements (#29871, #29879, #29882) represent the most significant technical contributions. Recent PRs like #30020 and #30043 continue addressing error recovery and capability expansion.

Additional fixes target tool execution behavior: handling tool calls during retry scenarios, ensuring Windows compatibility, maintaining session history integrity, applying security policies to temporary project paths, and integrating ACP tool calls through appropriate hooks. These represent targeted improvements across security, platform support, and workflow reliability.

Looking at broader patterns, the community is focused on subagent behavior—especially around turn limits, hanging issues, and skill utilization. There's also significant interest in sandboxing approaches and AST-aware file operations that could enhance context management.
</think>


# Gemini CLI Community Digest

**Date:** 2026-11-06
**Repository:** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## Today's Highlights

The Gemini CLI community is actively addressing critical agent reliability issues, with multiple P1 bugs around subagent hangs and recovery behavior drawing significant attention. Security remains a top priority, with recent PRs fixing path traversal vulnerabilities in checkpoint handling and workspace path validation. The team is also making progress on enhancing AST-aware file operations and model support with the newly added `gemini-4-argon` model.

---

## Releases

**No new releases in the last 24 hours.** The project continues to maintain its nightly release cadence, with the latest automated version bump being `0.60.0-nightly.20260906.g85aca163f` from September 6th.

---

## Hot Issues

### 1. [Subagent Reports GOAL Success Despite MAX_TURN Limit](https://github.com/google-gemini/gemini-cli/issues/22323)
**Priority: P1 | Comments: 13 | 👍 2**

The `codebase_investigator` subagent incorrectly reports `"status: success"` with `"Termination Reason: GOAL"` even when it hit the maximum turn limit before completing analysis. This masks critical failures and misleads users about task completion status.

### 2. [Generalist Agent Hangs When Deferring to Subagents](https://github.com/google-gemini/gemini-cli/issues/21409)
**Priority: P1 | Comments: 8 | 👍 8**

Whenever `gemini-cli` defers to the generalist agent, it hangs indefinitely—simple operations like folder creation can block for over an hour. Workaround exists (explicitly instructing the model not to use subagents), but this impacts workflow.

### 3. [Leverage Model's Bash Affinity via Zero-Dependency OS Sandboxing](https://github.com/google-gemini/gemini-cli/issues/19873)
**Priority: P2 | Comments: 9 | 👍 1**

Proposes utilizing Gemini 3 models' native bash capabilities by implementing zero-dependency OS sandboxing with post-execution intent routing. This could significantly improve security without compromising user experience.

### 4. [Browser Agent Ignores settings.json Overrides](https://github.com/google-gemini/gemini-cli/issues/22267)
**Priority: P2 | Comments: 5 | 👍 0**

The Browser Agent completely ignores configuration overrides from global or project-level `settings.json`, including `maxTurns`. The `AgentRegistry` reads and merges settings correctly, but the Browser Agent doesn't apply them.

### 5. [Gemini Does Not Use Skills and Sub-Agents Enough](https://github.com/google-gemini/gemini-cli/issues/21968)
**Priority: P2 | Comments: 7 | 👍 0**

Users report that Gemini CLI rarely invokes custom skills and sub-agents autonomously, even when tasks are directly related. Explicit instructions are required to trigger them, limiting the tool's proactive capabilities.

### 6. [AST-Aware File Reads, Search, and Mapping](https://github.com/google-gemini/gemini-cli/issues/22745)
**Priority: P2 | Comments: 7 | 👍 1**

An epic tracking investigation into whether AST-aware tools can improve code discovery precision, reduce token noise, and enable better navigation. Potential tools under evaluation include `tilth` and `glyph`.

### 7. [Browser Subagent Fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)
**Priority: P1 | Comments: 4 | 👍 1**

The browser subagent fails completely on Wayland-based Linux environments, preventing users from leveraging browser automation features on popular desktop environments like GNOME and KDE.

### 8. [Symlink Not Recognized as Agent](https://github.com/google-gemini/gemini-cli/issues/20079)
**Priority: P2 | Comments: 4 | 👍 0**

When `~/.gemini/agents/filename.md` is a symlink, it fails to be recognized as a valid subagent, limiting users who prefer managing agents via symbolic links for organization or version control.

### 9. [Gemini CLI Encounters 400 Error with >128 Tools](https://github.com/google-gemini/gemini-cli/issues/24246)
**Priority: P2 | Comments: 3 | 👍 0**

The CLI encounters API errors when more than ~400 tools are available. Users expect smarter tool scoping to avoid quota and capacity issues while maintaining agent functionality.

### 10. [Get-Shit-Done Output Hook Causes Crash](https://github.com/google-gemini/gemini-cli/issues/22186)
**Priority: P1 | Comments: 3 | 👍 0**

The `get-shit-done` output hook reliably crashes `gemini-cli` during final user summary generation, disrupting completion of complex multi-step tasks.

---

## Key PR Progress

### Security Fixes

| PR | Description | Area |
|----|-------------|------|
| [#29876](https://github.com/google-gemini/gemini-cli/pull/29876) | **Prevents path traversal in legacy checkpoint fallback** — Fixes vulnerability in `Logger._getCheckpointPath()` when using unencoded checkpoint filenames | Security |
| [#29878](https://github.com/google-gemini/gemini-cli/pull/29878) | **Reports blocked path segment instead of path outside workspace** — Fixes misleading error messages when paths are inside allowed directories but blocked | Core |
| [#30026](https://github.com/google-gemini/gemini-cli/pull/30026) | **Treats project temp paths as local in untrusted flag checks** — Prevents helper scripts from triggering shell confirmation prompts | Security |

### Reliability & Error Handling

| PR | Description | Area |
|----|-------------|------|
| [#29881](https://github.com/google-gemini/gemini-cli/pull/29881) | **Emits ACP retry progress updates and enforces retry delay cap** — Fixes quota reset handling where multi-hour resets were treated as transient | Non-interactive |
| [#29871](https://github.com/google-gemini/gemini-cli/pull/29871) | **Keeps unsent request when loop recovery starts before a turn** — Prevents `"Response was lost or interrupted"` errors during loop detection | Agent |
| [#29879](https://github.com/google-gemini/gemini-cli/pull/29879) | **Discards buffered tool calls on mid-stream error or retry** — Ensures only successful attempt's calls are executed on retry | Core/CLI/SDK |
| [#30020](https://github.com/google-gemini/gemini-cli/pull/30020) | **Drops tool calls streamed by failed attempts on retry** — Prevents duplicate side-effecting commands from dual attempts | Agent |
| [#30017](https://github.com/google-gemini/gemini-cli/pull/30017) | **Keeps committed turns when cancelling tool-result continuation** — Preserves user prompt and completed tool turns after cancellation | Agent |

### Platform & UX Improvements

| PR | Description | Area |
|----|-------------|------|
| [#29875](https://github.com/google-gemini/gemini-cli/pull/29875) | **Adds support for `gemini-4-argon` model** — Registers new model with aliases, definitions, and capability updates | Core/CLI |
| [#30043](https://github.com/google-gemini/gemini-cli/pull/30043) | **Exposes tool call IDs to hooks** — Includes `tool_call_id` in `BeforeTool` and `AfterTool` hook inputs for better event pairing | Agent |
| [#30033](https://github.com/google-gemini/gemini-cli/pull/30033) | **Tolerates dev 0 from Windows path stat in secure file reads** — Fixes file read failures on Windows with Node 22.12–23.x due to volume serial mismatch | Core |
| [#30019](https://github.com/google-gemini/gemini-cli/pull/30019) | **Preserves session history during tool output masking** — Keeps user's first prompt when resuming sessions with masked outputs | Agent |
| [#30022](https://github.com/google-gemini/gemini-cli/pull/30022) | **Runs ACP tool calls through hooks** — Applies hook policies to editor-driven sessions consistently | CLI |

---

## Feature Request Trends

Based on issue analysis, the community's most requested enhancements cluster around:

1. **Subagent Intelligence & Autonomy**
   - Proactive invocation of skills and sub-agents without explicit instruction
   - Improved subagent recovery and graceful degradation
   - Parallel subagent collaboration with shared memory

2. **Context Efficiency**
   - AST-aware file reading and search to reduce token consumption
   - "Tactful Extraction" for surgical code discovery
   - Persistent file-based task tracking to combat context rot

3. **Sandboxing & Security**
   - Zero-dependency OS sandboxing leveraging model's bash affinity
   - Discouraging destructive commands (`git reset --force`, etc.)
   - Per-workspace policy management

4. **Platform Compatibility**
   - Wayland support for browser subagent
   - Windows path handling improvements
   - Better self-awareness of CLI flags and hotkeys

5. **Developer Experience**
   - Subagent discovery via `settings.json`
   - Visible subagent trajectories via `/chat share`
   - Curated example agents within the repo

---

## Developer Pain Points

The community consistently reports frustrations in these areas:

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Agent hangs** when deferring to subagents or generalist | High | Blocks entire workflows |
| **Subagent recovery** misreports success/failure states | High | Misleading task completion status |
| **Browser agent** incompatibility with Wayland and ignores config | High | Breaks browser automation on Linux |
| **Tool overload** causes 400 errors with many tools enabled | Medium | Forces manual tool scoping |
| **Symlink agents** not recognized | Low | Hinders custom agent organization |
| **Session history loss** on cancellation or masking | Medium | Disrupts resume workflows |
| **Spurious warnings** from transient lock directories | Low | Clutters logs, reduces trust |

---

*Generated: 2026-11-06 | Data refresh: Last 24 hours*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest for 2026-11-06 based on the provided data. Let me analyze the data:

**Releases:**
- v1.0.106 (2026-11-05)
- v1.0.106-11 (2026-11-05) - patch fix

**Issues (22 total):**
Let me identify the most noteworthy ones:
1. #3333 - Android/Termux support broken (glibc issue) - 5 👍, 6 comments - ongoing since May
2. #5279 - Foreground session change hook request - 0 👍 but technical feature request
3. #5220 - 1-hour prompt cache TTL for Claude models - 9 👍 - important UX issue
4. #5362 - Model-judged context pruning (triage) - 0 👍
5. #5320 - OSC 7501 agent-status reporting - 10 👍 - good community interest
6. #5360 - Error about managed sandbox policy - closed, 1 comment
7. #5356 - Windows npm multi-minute stalls - 0 👍
8. #5354 - ACP doesn't advertise Fusion - 2 👍
9. #5353 - Render markdown in submitted user messages - 0 👍
10. #5352 - Subagents refusing to read temp files - 0 👍
11. #5368 - Sandbox probe fails on Windows (triage)
12. #5367 - Agent loses MCP tool schemas (triage)
13. #5366 - Remote MCP OAuth token expiry (triage)
14. #5365 - Sandbox temp storage reporting (triage)
15. #5363 - ACP session/new reports wrong model (triage)
16. #5361 - 5 hour session limit error (triage)
17. #5229 - ACP MCP OAuth refresh token (closed)


18. #5359 - Resumed session MCP tools issue (triage)
19. #5358 - Support device sign-in (triage)
20. #5357 - Copilot -p I/O failure (triage)
21. #5355 - Remote session auto-publish with --add-dir (triage)
22. #5350 - MCP OAuth authorization code exchange (triage)

**PRs:** None in last 24h

**Discussions:** Not provided

Now I need to structure the digest following the user's format. Since there are no PRs or discussions in the data, I'll focus on the releases and issues sections, highlighting the most significant problems and feature requests for the community.

Let me organize the issues by priority. The Android/Termux support regression (#3333) has been dragging on since May with strong community backing. The Claude cache TTL mismatch (#5220) and OSC 7501 status reporting (#5320) both have solid thumbs-up counts. There are also several sandbox and Windows-specific failures to address, along with MCP integration issues and authentication workflows that need attention.
</think>


# GitHub Copilot CLI Community Digest

**Date:** 2026-11-06
**Repository:** github.com/github/copilot-cli

---

## Today's Highlights

GitHub released **v1.0.106** with significant UX enhancements including Rex terminal image rendering via Kitty direct placements, a new `/code` command for VS Code integration, and Copilot Fusion tier configuration support. A rapid patch **v1.0.106-11** followed addressing prompt history handling and Unicode separator parsing. The community continues to report critical platform-specific issues including Android/Termux incompatibility and Windows sandbox enforcement failures.

---

## Releases

### v1.0.106 (2026-11-05)
**Tag:** `v1.0.106` | Released: 2026-11-05

| Feature | Description |
|---------|-------------|
| 🖼️ **Kitty Direct Placements** | Rex terminals now render inline images using Kitty's direct placement protocol for improved visual fidelity |
| 💻 **`/code` Command** | New shortcut to open the current Copilot session directly in VS Code |
| ⚙️ **Fusion Tier Setting** | Added `copilot config` option to configure Copilot Fusion performance tier |
| 🔧 **Unified Settings Dashboard** | `/settings` now opens a unified dashboard with global search across all settings and local resources |

### v1.0.106-11 (2026-11-05)
**Tag:** `v1.0.106-11` | Released: 2026-11-05

| Fix | Description |
|-----|-------------|
| 🔤 **Unicode Separator Handling** | Pasted text containing NEL, Unicode line/paragraph separators now fills separate prompt lines correctly |
| ⌫ **Prompt History Cleanup** | Images removed with Ctrl+U/K/W or replaced by recalled history entries are no longer sent with messages |
| 💾 **Stash After Ctrl+S** | Ctrl+S can now stash the prompt after content modifications |

---

## Hot Issues

### 🔴 Platform Compatibility

**#3333 — Android/Termux Support Broken Since v1.0.48+ (glibc dependency)**
- **Status:** Open | **Author:** hasankhan | **Created:** 2026-05-15 | **Updated:** 2026-11-05
- **Reactions:** 👍 5 | 💬 6 comments
- **Why it matters:** Native Rust addon (`runtime.node`) compiled against glibc breaks Termux environments using Bionic libc. This blocks a growing community of mobile developers.
- **URL:** https://github.com/github/copilot-cli/issues/3333

### 🟠 Performance & Caching

**#5220 — Option for 1-Hour Prompt Cache TTL for Claude Models**
- **Status:** Open | **Author:** mvanderbend-msoft | **Created:** 2026-10-21 | **Updated:** 2026-11-06
- **Reactions:** 👍 9 | 💬 2 comments
- **Why it matters:** Current 5-minute cache TTL expires during normal interactive workflows, forcing full conversation reprocessing. Extending to 1 hour would significantly reduce latency and API costs.
- **URL:** https://github.com/github/copilot-cli/issues/5220

### 🟡 Terminal Integration

**#5279 — Authoritative Foreground-Session Change Hook for Terminal Integrations**
- **Status:** Open | **Author:** YuuuXie | **Created:** 2026-10-28 | **Updated:** 2026-11-05
- **Reactions:** 👍 0 | 💬 3 comments
- **Why it matters:** Terminal integrations cannot reliably track which pane holds the foreground conversation, breaking warm resume and multi-pane workflows.
- **URL:** https://github.com/github/copilot-cli/issues/5279

**#5320 — Support OSC 7501 Agent-Status Reporting for Herdr App**
- **Status:** Open | **Author:** YousefHadder | **Created:** 2026-11-02 | **Updated:** 2026-11-05
- **Reactions:** 👍 10 | 💬 2 comments
- **Why it matters:** The Herdr terminal app cannot display Copilot session status without native OSC 7501 support, limiting adoption among Herdr users.
- **URL:** https://github.com/github/copilot-cli/issues/5320

### 🔴 Windows-Specific

**#5368 — Sandbox Enforcement Probe Fails with CreateProcessW Error 2 (failIfUnavailable: true)**
- **Status:** Open (triage) | **Author:** nagargaurav | **Created:** 2026-11-05 | **Updated:** 2026-11-05
- **Reactions:** 👍 0 | 💬 0 comments
- **Why it matters:** Enterprise Windows environments with managed settings cannot run Copilot CLI due to sandbox probe failures, blocking corporate adoption.
- **URL:** https://github.com/github/copilot-cli/issues/5368

**#5356 — Intermittent Multi-Minute Stalls on Windows npm CLI**
- **Status:** Open | **Author:** sh-mckaymoore-2 | **Created:** 2026-11-04 | **Updated:** 2026-11-05
- **Reactions:** 👍 0 | 💬 1 comment
- **Why it matters:** Windows users experience frequent unresponsive sessions requiring cancellation and `continue` commands, degrading interactive experience.
- **URL:** https://github.com/github/copilot-cli/issues/5356

### 🟠 MCP & Plugin Ecosystem

**#5367 — Agent Regularly Loses MCP Tool Schemas**
- **Status:** Open (triage) | **Author:** jeffbromberger | **Created:** 2026-11-05 | **Updated:** 2026-11-05
- **Reactions:** 👍 0 | 💬 0 comments
- **Why it matters:** MCP tools become unavailable during sessions without resume, forcing users to manually run `/compact` to restore functionality—a broken workflow for daily users.
- **URL:** https://github.com/github/copilot-cli/issues/5367

**#5366 — Remote MCP OAuth Tokens Expire Without Recovery**
- **Status:** Open (triage) | **Author:** vikramgorla | **Created:** 2026-11-05 | **Updated:** 2026-11-05
- **Reactions:** 👍 0 | 💬 0 comments
- **Why it matters:** Entra ID-protected MCP servers (Teams, Outlook) become unusable after token expiry, requiring full server restart despite `mcpOAuthTokenStorage: "persistent"`.
- **URL:** https://github.com/github/copilot-cli/issues/5366

**#5350 — MCP OAuth Authorization Code Exchange Never Runs**
- **Status:** Open | **Author:** poppj1 | **Created:** 2026-11-04 | **Updated:** 2026-11-05
- **Reactions:** 👍 0 | 💬 0 comments
- **Why it matters:** Azure DevOps MCP server authentication completes browser round-trip but hangs on "Connecting", preventing integration with enterprise DevOps workflows.
- **URL:** https://github.com/github/copilot-cli/issues/5350

### 🟡 UX Enhancements

**#5353 — Render Markdown in Submitted User Messages in Timeline**
- **Status:** Open | **Author:** incrediblecrab | **Created:** 2026-11-04 | **Updated:** 2026-11-05
- **Reactions:** 👍 0 | 💬 1 comment
- **Why it matters:** User prompts containing markdown (lists, code, emphasis) display as raw text in scrollback, creating inconsistent UX compared to agent responses.
- **URL:** https://github.com/github/copilot-cli/issues/5353

---

## Key PR Progress

*No pull requests were merged or opened in the last 24 hours.*

---

## Feature Request Trends

Analysis of 22 active issues reveals these dominant themes:

| Theme | Frequency | Issues |
|-------|-----------|--------|
| **MCP Ecosystem Reliability** | High | #5367, #5366, #5350, #5359, #5229 |
| **Platform-Specific Bugs** | High | #3333, #5368, #5356, #5357, #5355 |
| **Session Management** | Medium | #5279, #5363, #5361, #5359 |
| **Enterprise/Managed Environments** | Medium | #5360, #5368, #5358 |
| **Model & Cache Configuration** | Medium | #5220, #5354, #5363 |
| **Terminal Integration APIs** | Low-Medium | #5320, #5353 |
| **Context Management** | Low | #5362, #5352 |

### Top Community Priorities:
1. **Cross-platform parity** — Android/Termux and Windows enterprise support
2. **MCP reliability** — Token refresh, schema persistence, OAuth flows
3. **Longer cache TTLs** — Especially for Claude models in interactive use
4. **Terminal status protocols** — OSC 7501 for third-party terminal apps
5. **ACP feature parity** — Expose Fusion tier and model configuration

---

## Developer Pain Points

### 🔴 Critical Pain Points

1. **MCP Tool Loss During Sessions**
   - Daily users report MCP tools disappearing without resume
   - Workaround: Manual `/compact` command required
   - Impact: Breaks automation workflows

2. **Enterprise Sandbox Failures on Windows**
   - Managed settings cause `CreateProcessW error 2`
   - Blocks entire enterprise Windows deployments
   - Reproducible across multiple versions

3. **OAuth Token Expiry Without Recovery**
   - Entra ID-protected MCP servers fail silently after token expiry
   - Requires full server restart to recover
   - `mcpOAuthTokenStorage: "persistent"` not respected

### 🟠 Frequent Friction Points

4. **5-Minute Claude Cache TTL**
   - Too short for interactive debugging sessions
   - Forces full reprocessing of conversation history
   - 9 developers have explicitly requested 1-hour TTL

5. **Android/Termux Regression**
   - 6-month old bug blocking mobile development community
   - glibc dependency incompatible with Bionic libc
   - No workaround available

6. **ACP Mode Feature Gaps**
   - Fusion tier not advertised via ACP protocol
   - Session/new reports incorrect model
   - Third-party clients cannot expose full feature set

7. **Windows npm CLI Stalls**
   - Multi-minute hangs requiring cancellation
   - Intermittent but frequent for Windows users
   - Suggests async/streaming implementation issues

### 🟡 UX Improvements Requested

8. **Timeline Markdown Rendering** — User prompts should match agent response formatting
9. **Device-Code Auth Without Browser** — Side-effect-free sign-in for CI/CD integration
10. **Subagent Temp File Access** — Overly restrictive prompts prevent legitimate file operations

---

## Summary Metrics

| Metric | Value |
|--------|-------|
| **Total Issues (last 24h)** | 22 |
| **New Issues** | 14 |
| **Closed Issues** | 2 |
| **Triage-Labeled Issues** | 9 |
| **New Releases** | 2 |
| **PRs Merged** | 0 |
| **Most Reacted Issue** | #5320 (OSC 7501) — 10 👍 |

---

*Digest generated from github.com/github/copilot-cli activity on 2026-11-06.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate an OpenCode community digest for 2026-11-06 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me organize the data:

**Releases (last 24h):**
- process-daemon-v0.5.0: opencode-pty 0.5.0 (protocol 8) from packages/process-daemon, published to npm as @opencode/pty@0.5.0.

**Issues (top 30 by comment count):**
1. #59387 - Free tier issues (303 comments, 22 👍) - Very hot, main issue for free tier problems
2. #6651 - Dynamic model selection for subagents (46 comments, 83 👍) - CLOSED, feature request
3. #49014 - 5-hour usage limit blocks all models (20 comments) - CLOSED
4. #52958 - Payment declined from Italy (16 comments) - CLOSED
5. #50672 - Hardcoded port 49374 issue (13 comments) - OPEN
6. #55271 - OpenAI Chat tool-content guard (9 comments) - OPEN
7. #62215 - Invalid ID Field Format (7 comments) - OPEN
8. #62213 - Subagent writes denied (6 comments) - OPEN
9. #61845 - gemini-4-argon 403 error (6 comments) - CLOSED
10. #54792 - Tool calls rejected (6 comments) - OPEN
11. #62232 - Network failure when calling database cli (5 comments) - OPEN
12. #56890 - Home/End key issue (5 comments) - CLOSED
13. #61688 - Renderer stuck at 100% CPU (5 comments) - CLOSED
14. #62211 - Edit tool space-variant matching (5 comments) - OPEN
15. #42064 - Let opencode run ignore stdin pipe (5 comments) - CLOSED


16. #54146 - Cross-provider tool-call IDs exceed length limit (5 comments) - OPEN
17. #60983 - Desktop remains running in background (5 comments) - CLOSED
18. #55533 - NumPad End/Home ignored (4 comments) - CLOSED
19. #61867 - MCP remote SSE-only servers fail (4 comments) - CLOSED
20. #61842 - deepseek-v4.1-flash-free rejects image input (4 comments) - CLOSED
21. #61902 - Free usage limit not resetting (4 comments) - CLOSED
22. #50775 - Failed to drain Session (4 comments) - OPEN
23. #61829 - Claude Agent login rejected on macOS (3 comments) - CLOSED
24. #62234 - Browser preview reloads every ~60s (3 comments) - OPEN
25. #61310 - Requests doubled (3 comments) - CLOSED
26. #61308 - Session Bug (3 comments) - CLOSED
27. #61307 - buildloglog (3 comments) - CLOSED
28. #54588 - Duplicate function_call_output (3 comments) - OPEN
29. #62051 - Plugin code block renderer crashes TUI (3 comments) - OPEN
30. #60702 - Copilot models fail to sync (2 comments) - OPEN

Several pull requests are worth noting. #62235 closed with a fork rebranding to harpcode featuring local-model defaults. #61547 addresses TUI/app retry logic for ServiceUnavailableError location sync. #60041 and #60039 both target MCP improvements—trusting private-network certificates on first use and supporting per-server TLS configuration respectively. #60957 handles nix node_modules hash updates, while #62231 is a chore update with strobe 0.11.0. Additional PRs include #56918 for SSH setup progress display in desktop, #57088 for restoring edge-snapped window bounds, and #61312 documenting the TrendsAGI MCP server ecosystem addition.

Recent contributions include #62067 fixing agent color handling in Mini, #61619 normalizing Windows PWD in CLI, #61607 addressing the missing What's New popup for markdown highlights, #62221 adding Crouton Alpha Free documentation, #62230 improving site build reliability with Worker startup checks, #60895 introducing --all to session list, #59770 enabling keypad Home/End navigation in the transcript, #62226 skipping codemode queries for LaunchDarkly, #62229 serving V2 docs from services/site with SolidStart, #62222 addressing security headers and launch fixes, and #62227 preventing image budget spending on empty payloads.

I'm ready to structure the digest with a highlights section summarizing today's key updates, releases information, and hot issues that need attention.
</think>


# OpenCode Community Digest — 2026-11-06

---

## 1. Today's Highlights

The OpenCode community is grappling with an intensifying wave of free-tier usage complaints—Issue #59387 has accumulated 303 comments as users report persistent "Free usage exceeded" errors with no reset. On the positive side, **process-daemon v0.5.0** shipped with protocol 8 support, and several long-standing bugs (NumPad navigation, SSH setup UX, image budget handling) are being resolved through community contributions.

---

## 2. Releases

| Package | Version | Notes |
|---------|---------|-------|
| `@opencode/pty` | **0.5.0** | Published from `packages/process-daemon`. Implements protocol 8. |

---

## 3. Hot Issues

| # | Title | Status | Signals | Why It Matters |
|---|-------|--------|---------|----------------|
| [#59387](https://github.com/anomalyco/opencode/issues/59387) | Free tier issues: read this first | OPEN | 🔥303 💬 · 22 👍 | **Critical.** Central thread for free-tier failures. Users report usage limits not resetting, blocking messages appearing with no recourse. Community is actively posting logs and workarounds. |
| [#6651](https://github.com/anomalyco/opencode/issues/6651) | Dynamic model selection for subagents via Task tool | CLOSED | 46 💬 · 83 👍 | **Feature delivered.** Enables primary agents to dynamically route subagents to different models via the Task tool—significant for multi-model orchestration. |
| [#49014](https://github.com/anomalyco/opencode/issues/49014) | 5-hour usage limit blocks all models after one hits limit | CLOSED | 20 💬 | **Billing bug.** A single model hitting its 5-hour cap cascaded failures across all other models, suggesting shared state or quota misattribution. Resolved. |
| [#52958](https://github.com/anomalyco/opencode/issues/52958) | OpenCode Go subscription: all payment methods declined from Italy (EU) | CLOSED | 16 💬 | **Revenue blocker.** EU users couldn't subscribe regardless of payment method, pointing to Stripe/gateway region restrictions. |
| [#50672](https://github.com/anomalyco/opencode/issues/50672) | Hardcoded default port 49374 locks out any second client on shared loopback | OPEN | 13 💬 | **Multi-user/WSL pain.** Fixed port causes timeout errors for any second client on shared loopback. Affects enterprise and WSL2 users. |
| [#55271](https://github.com/anomalyco/opencode/issues/55271) | OpenAI Chat tool-content guard aborts session drain | OPEN | 9 💬 | **Session reliability.** Malformed tool-content payloads cause silent session failures, making debugging difficult. |
| [#62215](https://github.com/anomalyco/opencode/issues/62215) | Tool Result Processing Error - Invalid ID Field Format | OPEN | 7 💬 | **Parsing bug.** APIs returning non-string ID fields crash tool result processing. Impacts integrations. |
| [#62213](https://github.com/anomalyco/opencode/issues/62213) | Subagent writes denied: built-in tester policy overrides agent rules | OPEN | 6 💬 | **Permission bug.** Last-match-wins rule evaluation causes blanket `edit * deny` policies to override explicit agent allows—breaks expected subagent behavior. |
| [#54792](https://github.com/anomalyco/opencode/issues/54792) | Tool calls intermittently rejected with "expected object, received string" | OPEN | 6 💬 | **Reliability issue.** ~50% of tool calls fail with parsing errors despite identical retry succeeding—suggests race condition or non-deterministic serialization. |
| [#54146](https://github.com/anomalyco/opencode/issues/54146) | Cross-provider tool-call IDs exceed OpenAI-compatible length limit | OPEN | 5 💬 | **Session-breaking.** Invalid IDs persist in history and permanently brick sessions with HTTP 400 on resume. High severity. |

---

## 4. Key PR Progress

| # | Title | Author | Status | Impact |
|---|-------|--------|--------|--------|
| [#62235](https://github.com/anomalyco/opencode/pull/62235) | feat: rebrand fork as harpcode with local-model defaults | vos1488 | CLOSED | Fork project "harpcode" with built-in llama.cpp defaults and local model support. |
| [#61547](https://github.com/anomalyco/opencode/pull/61547) | fix(tui,app): only apply extended 5min retry to ServiceUnavailableError location sync | cxxde | OPEN | Improves reliability when workspace plugins start slowly (e.g., cold UNC paths). Closes #61359. |
| [#60041](https://github.com/anomalyco/opencode/pull/60041) | feat(mcp): trust private-network server certificates on first use | karup | OPEN | Streamlines onboarding for self-signed certs in enterprise environments. |
| [#60039](https://github.com/anomalyco/opencode/pull/60039) | feat(mcp): support per-server TLS trust for remote MCP servers | karup | OPEN | Enables per-server TLS configuration, addressing long-standing enterprise certificate issues. |
| [#62227](https://github.com/anomalyco/opencode/pull/62227) | fix(core): do not spend the image budget on payload-free images | jimmyallinai | CLOSED | Fixes wasted image budget consumption when remote images carry no inline payload. Closes #61391. |
| [#59770](https://github.com/anomalyco/opencode/pull/59770) | fix(tui): navigate transcript with keypad Home and End | argszero | CLOSED | Resolves NumPad navigation under kitty keyboard protocol. Closes #55533. |
| [#56918](https://github.com/anomalyco/opencode/pull/56918) | fix(desktop): show SSH setup progress | LeON-Nie-code | CLOSED | Desktop now shows progress during SSH server setup, eliminating "frozen" dialog UX. Closes #56668. |
| [#62067](https://github.com/anomalyco/opencode/pull/62067) | fix(tui): honor configured agent colors in Mini | ferdinandyb | CLOSED | Mini now respects agent color configurations instead of forcing theme palette. Closes #61807. |
| [#60895](https://github.com/anomalyco/opencode/pull/60895) | feat(cli): add --all to session list | ColonelToad | OPEN | Enables discovery of sessions across all projects, not just the current directory. Closes #59004. |
| [#62229](https://github.com/anomalyco/opencode/pull/62229) | feat(site): serve V2 docs from services/site with SolidStart | adamdotdevin | OPEN | Migration of V2 documentation to SolidStart infrastructure. |

---

## 5. Feature Request Trends

Analysis of open issues reveals these dominant feature directions:

| Theme | Evidence | Priority |
|-------|----------|----------|
| **Multi-model orchestration** | Dynamic subagent model selection (#6651), cross-provider ID length limits (#54146) | High |
| **Enterprise/multi-user reliability** | Hardcoded port conflicts (#50672), private-network TLS (#60041, #60039) | High |
| **Free tier experience** | 303-comment storm on #59387; billing failures from EU (#52958); quota persistence bugs (#61902, #49014) | Critical |
| **Session robustness** | Malformed tool results wedging sessions (#50775, #55271); duplicate function call IDs (#54588) | High |
| **TUI/Desktop polish** | NumPad navigation (#55533), renderer CPU thrashing (#61688), window state handling (#57088) | Medium |

---

## 6. Developer Pain Points

1. **Free tier UX is broken.** Users are blocked from basic usage with no clear resolution path. The 303-comment thread indicates systemic failures in reset logic and messaging.

2. **Session persistence bugs have high blast radius.** Issues like invalid tool-call IDs (#54146) and duplicate outputs (#54588) permanently corrupt sessions, requiring workarounds.

3. **Enterprise environments face friction.** Self-signed certificates, multi-user loopback conflicts, and WSL2 port issues create adoption barriers.

4. **Tool call reliability is inconsistent.** Intermittent parsing failures (#54792) and content guard issues (#55271) erode trust in core functionality.

5. **MCP remote server support regressed.** SSE-only fallback is missing in V2 (#61867), breaking existing remote MCP integrations.

6. **Payment/billing gaps persist.** EU payment declinations (#52958) represent direct revenue loss.

---

*Digest generated from GitHub data for [anomalyco/opencode](https://github.com/anomalyco/opencode) — 2026-11-06*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Pi community digest for 2026-11-06 based on the provided GitHub data. Let me analyze the data and create a structured digest following the specified format.

Let me go through the data:

**Releases**: None in last 24h

**Issues** (top 30 by comment count):
1. #7730 - High CPU usage on Mac OS with long session (29 comments)
2. #7885 - npm search not indexing newly published pi-packages (19 comments)
3. #10741 - Groq Qwen3.8 27B fails with HTTP 400 (7 comments)
4. #10287 - getContextUsage() overestimates context after retryable error (7 comments)
5. #10846 - [durable] pi-env: accept injected daemon process (6 comments)
6. #10616 - Extension pi.exec fails for .cmd commands on Windows (5 comments)
7. #11670 - Send session name as OSC 7501 title (5 comments)
8. #11311 - MCP OAuth hangs on "Connecting..." (4 comments)
9. #10015 - bash truncation notice reports 0B (4 comments)
10. #11861 - Prompt template arguments drop apostrophes (3 comments, newly created 2026-11-06)
11. #11803 - tool_search misses parameter descriptions behind local schema refs (3 comments)
12. #11816 - Support opt-in blocked status for ctx.ui.custom() overlays (3 comments)
13. #11379 - pi agent losing prompts when copying with Ctrl+Shift+C (3 comments)
14. #11829 - Let session detach instead of dying when switching conversations (3 comments)
15. #11825 - Tab applies @ file completion at stale prefix position (3 comments)


16. #11805 - Adjacent output_config directives cause OpenRouter 400 (3 comments)
17. #11809 - Termux/Android: findExecutableOnPath freezes in-process host (3 comments)
18. #11808 - SIGILL in Worker thread on linux-x64 (3 comments)
19. #11802 - TUI split kitty CSI-u sequences flushed as text (3 comments)
20. #11846 - Let tool mark durable wait so restarts don't hit restartLimit (2 comments)

Several other issues surfaced including SDK customization for identity preamble, process tree management in durable contexts, bash truncation edge cases, file encoding problems with UTF-16, and extension loading failures. There's also an unhandled rejection in Submissions.wait and a TUI crash when tool renderers return undefined.

Recent pull requests show progress on Windows bash command tree termination, preserving line endings during edits, deferred streamed tool argument parsing, and local schema reference handling.

Additional PRs address UTF-16 file support, extension overlay cleanup on reload, blocking status reporting for custom UI overlays, accurate oversized line reporting in bash output, and jitter addition to agent retry logic.

Documentation updates include fixing RFC link formatting, while storage replication adds session syncing capabilities. License directory renaming and TypeBox type parity improvements are also included. There's work on compaction model and thinking level configurations, release version tag handling, and model cycling fixes.

Recent discussions cover official pi code agent sandbox options via Docker, a CaseClip tool for saving mistakes, a pi-mom-slack bot for Slack integration, and managing multiple conversations simultaneously.
</think>


# Pi Community Digest — 2026-11-06

## Today's Highlights

The Pi community saw significant activity on November 6th, 2026, with several critical bug fixes landing and a major new feature PR proposing prompt cache warming for p2 to reduce Anthropic API costs by ~$1,430/month. Windows compatibility received focused attention with fixes for process tree killing and .cmd command execution, while the community continues to grapple with high CPU usage on macOS and MCP OAuth connection hangs.

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

**1. [Mac OS High CPU Usage on Long Sessions (#7730)](https://github.com/earendil-works/pi/issues/7730)** — 29 comments
Long-standing issue where Pi consumes 100%+ CPU on macOS, swinging between 50-110% with 600-800MB memory usage. Appears linked to context size or session length. This is the most-discussed issue in the tracker, indicating widespread impact on macOS users with extended sessions.

**2. [npm Search Not Indexing pi-packages (#7885)](https://github.com/earendil-works/pi/issues/7885)** — 19 comments
Package discovery broken since August 4th—newly published pi-packages don't appear in npm search, breaking the pi.dev/packages gallery. This directly impacts the ecosystem's ability to distribute and discover extensions.

**3. [Groq Qwen3.8 27B Fails with HTTP 400 (#10741)](https://github.com/earendil-works/pi/issues/10741)** — 7 comments
Pi sends the `developer` role which Groq's Qwen model rejects. This compatibility issue blocks users from using popular Groq-hosted models.

**4. [getContextUsage() Overestimates After Network Error (#10287)](https://github.com/earendil-works/pi/issues/10287)** — 7 comments
Context tracking jumps from ~42K to 330K tokens after a retryable network error, potentially causing incorrect billing or context window issues. Affects reliability of usage tracking.

**5. [pi.exec Fails for .cmd Commands on Windows (#10616)](https://github.com/earendil-works/pi/issues/10616)** — 5 comments
Windows users cannot execute npm, npx, pnpm via `pi.exec()`. Critical blocker for Windows-based development workflows relying on the exec extension API.

**6. [MCP OAuth Hangs on "Connecting..." (#11311)](https://github.com/earendil-works/pi/issues/11311)** — 4 comments
After successful browser authentication, Pi stays stuck for 2-3 minutes. Ctrl+C doesn't work, and closing the browser tab doesn't help. PR #11855 merged to address this.

**7. [Bash Truncation Reports 0B for Large Lines (#10015)](https://github.com/earendil-works/pi/issues/10015)** — 4 comments
Truncation notice incorrectly shows 0B for lines over 50KB ending in a newline. Fixed in PR #11852.

**8. [Prompt Arguments Drop Apostrophes (#11861)](https://github.com/earendil-works/pi/issues/11861)** — 3 comments
Newly filed today—apostrophes in `/ask` arguments are parsed as opening quotes, corrupting prompts. "why doesn't" becomes "why doesnt". Affects natural language usage patterns.

**9. [pi Agent Losing Typed Prompts on Ctrl+Shift+C (#11379)](https://github.com/earendil-works/pi/issues/11379)** — 3 comments
Since v1.3.0, copying output with Ctrl+Shift+C causes the currently typing prompt to disappear. Significant UX regression for users who frequently copy results.

**10. [Session Detach Feature Request (#11829)](https://github.com/earendil-works/pi/issues/11829)** — 3 comments
Users want to switch conversations without killing running turns. Currently any session switch calls `teardownCurrent()`, forcing users to either kill work or open additional terminal tabs.

---

## Key PR Progress

**1. [Prompt Cache Warming in p2 (#11857)](https://github.com/earendil-works/pi/pull/11857)** — Open
**Author: mitsuhiko** — Addresses the 5-minute Anthropic prompt cache never refreshing, causing 789 unnecessary prompt rewrites costing ~$1,430/month (26% of p2 spend). High-impact cost optimization.

**2. [Kill Whole Process Trees on Windows (#11854)](https://github.com/earendil-works/pi/pull/11854)** — Open
Fixes `taskkill /T` missing orphaned child processes on Windows. Critical for proper resource cleanup in Windows development environments.

**3. [Edit Tool Preserves Line Endings (#11751)](https://github.com/earendil-works/pi/pull/11751)** — Open
Previously touched lines had their line endings rewritten. Also prevents memory exhaustion on large file diffs.

**4. [UTF-16 and Non-UTF-8 File Handling (#11811)](https://github.com/earendil-works/pi/pull/11811)** — Merged
`read` and `edit` now handle UTF-16 and non-UTF-8 files without corruption. Previous behavior silently corrupted binary or legacy-encoded files.

**5. [Tool Search Follows Local Schema Refs (#11850)](https://github.com/earendil-works/pi/pull/11850)** — Merged
Fixes `tool_search` missing tools whose parameter descriptions use `$ref` to definitions in `$defs`. MCP servers (Pydantic, FastMCP) commonly use this pattern.

**6. [MCP OAuth Connection Cleanup (#11855)](https://github.com/earendil-works/pi/pull/11855)** — Merged
Browser preconnect/keep-alive connections were preventing OAuth callback server from closing, causing the "Connecting..." hang. Resolves #11311.

**7. [Extension Overlays Cleanup on /reload (#11853)](https://github.com/earendil-works/pi/pull/11853)** — Merged
Previously only topmost overlay was removed; nested overlays now properly clean up on session switches.

**8. [Blocked Status for Custom Overlays (#11851/#11848)](https://github.com/earendil-works/pi/pull/11851)** — Merged
Extensions using `ctx.ui.custom()` overlays can now report blocked status via OSC 7501. Enables tools like pi-ask-user to properly signal agent state to host apps.

**9. [Jitter Added to Agent Retries (#11840)](https://github.com/earendil-works/pi/pull/11840)** — Merged
Prevents thundering herd issues when many subagents retry simultaneously. Improves reliability of multi-agent workflows.

**10. [Experimental Session Sync Replication (#11696)](https://github.com/earendil-works/pi/pull/11696)** — Merged
New `@earendil-works/pi-durable/sync` module enables cross-device session synchronization. Handles conflict resolution by forking when both devices upload.

---

## Hot Discussions

### Show and Tell
- **[CaseClip — Save Pi Mistakes as Reviewable Cards (#11860)](https://github.com/earendil-works/pi/discussions/11860)** — New today
Ryan Xie built a tool to capture failed API calls, tool results, and corrections together. Run `/case save <what went wrong>` to create reviewable case cards for later analysis.

- **[pi-mom-slack: Community Slack Bot (#11844)](https://github.com/earendil-works/pi/discussions/11844)**
Community member tsua0002 packaged Pi for Slack usage with per-thread sessions, persistent working directories, and context-aware model routing.

### General / Q&A
- **[Official pi Code Agent Sandbox by Docker? (#11404)](https://github.com/earendil-works/pi/discussions/11404)**
Docker Hub hosts four sandbox images (sbx/pi, pi-mixin, pi-image, pi-kit). Community speculating on origin and use cases for containerized Pi execution.

- **[How to Juggle Two Live Conversations? (#11830)](https://github.com/earendil-works/pi/discussions/11830)**
Users requesting native multi-conversation support without terminal tabs. Correlates with issue #11829 filed same day.

---

## Feature Request Trends

Analysis of open issues and discussions reveals these emerging demand patterns:

| Theme | Evidence | Priority |
|-------|----------|----------|
| **Multi-session Management** | #11829, #11830 — users want to switch conversations without killing turns | High |
| **Windows/Platform Parity** | #10616, #11854, #11814 — Windows exec, process cleanup, shell compatibility gaps | High |
| **MCP Ecosystem** | #7885, #11311, #11803 — package discovery, OAuth, schema ref handling | High |
| **Performance Profiling** | #7730 — CPU/memory usage in long sessions | Medium |
| **Context Management** | #10287, #11857 — accurate tracking, prompt cache optimization | Medium |
| **SDK Customization** | #11317 — customize identity preamble without replacing entire prompt | Medium |
| **Durable Execution** | #11846, #11820 — wait resilience, unhandled rejection handling | Medium |

---

## Developer Pain Points

1. **Windows Development Friction**: The exec API fails for standard Windows commands (.cmd, npm on cmd.exe), process tree killing misses orphaned children, and self-update crashes trying to spawn `/bin/sh`.

2. **MCP Integration Rough Edges**: OAuth flows hang after successful authentication, package indexing broke since August (breaking gallery discovery), and schema references in tool definitions aren't properly traversed.

3. **Resource Leakage**: High CPU on macOS with long sessions, context usage overestimating after network errors, and extension load failures are fatal (exits 1) rather than graceful.

4. **UX Interruptions**: Copying output with Ctrl+Shift+C loses in-progress typing, tab completion can apply at stale positions causing path duplication, and raw escape sequences can freeze the TUI.

5. **File Handling Surprises**: Non-UTF-8 files silently corrupted on edit, UTF-16 files display as garbage, and bash truncation notices report 0B for large newline-terminated lines.

---

*Digest generated from github.com/earendil-works/pi activity on 2026-11-06*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>Let me analyze the GitHub data provided for Qwen Code and create a structured digest for 2026-11-06.

Let me go through the data:

## Releases (last 24h)
- v0.26.8: Release v0.26.8
- v0.26.8-nightly.20261105.7bd78683e6: Release v0.26.8-nightly.20261105.7bd78683e6
- sdk-typescript-v0.1.28: SDK TypeScript Release v0.1.28
- desktop-v0.26.8: Qwen Code Desktop v0.26.8

Features in v0.26.8:
- feat(mods): run prompt.submit hooks in the OpenTUI terminal
- fix(channels): keep GitHub inbound recovery armed after a failed read
- refactor(managed-agent): Share the session event delivery loop
- ci: route the classify_pr gate

## Issues (last 24h, top 10)
1. #14724 - Main CI failed: Managed Agent gate — 210 comments, very active
2. #15173 - Main CI failed: E2E Tests — 38 comments
3. #12714 - Main CI failed: Qwen Code CI — 36 comments
4. #16322 - Main CI failed: E2E Tests — 33 comments
5. #15712 - Main CI failed: E2E Tests — 19 comments
6. #15052 - ci: preserve independent main E2E validation — 19 comments
7. #14104 - Main CI failed: SDK Java — 13 comments
8. #16377 - Main CI failed: Managed Agent gate — 11 comments
9. #14796 - Main CI failed: Qwen Code CI — 9 comments


10. #13370 - Main CI failed: SDK Java — 7 comments

## Pull Requests (last 24h, top 10)
1. #15620 - feat(channels): add Microsoft Teams extension
2. #16186 - feat(serve): add atomic user Skill activation
3. #12738 - fix(web-shell): leave current standalone session before deletion
4. #14353 - fix(web-shell): honor configured loading phrases
5. #16367 - fix(web-shell): show notification guides only for the browser's OS
6. #16132 - ci: route the no-AK integration gate to ECS
7. #15450 - feat(qqbot): let the agent send a local file to the chat
8. #15060 - refactor(web-shell): share session view reset state
9. #15274 - fix(ci): preserve Maven suite results
10. #15286 - fix(ci): keep sdk-java resolver bookkeeping

Notable PRs include Teams integration support, atomic skill activation management, and several web-shell fixes addressing OS-specific notifications and session handling. The CI pipeline improvements focus on test result preservation and better integration gate routing.
</think>


# Qwen Code Community Digest — 2026-11-06

## Today's Highlights

Qwen Code shipped **v0.26.8** with a new OpenTUI terminal hook system and important stability fixes, alongside the TypeScript SDK v0.1.28 and Desktop v0.26.8. The community is actively working through a high volume of CI failures across Managed Agent and E2E test gates, with several contributors simultaneously building cross-platform features like Microsoft Teams integration and OS-specific notification guides. A critical security-related issue (#16418) flagged unauthorized source-code implementation via repeated auto-compaction, warranting immediate attention.

---

## Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.26.8** | Stable | OpenTUI terminal now runs `prompt.submit` hooks; GitHub inbound recovery stays armed after failed reads; Managed Agent shares session event delivery loop; CI `classify_pr` gate routing |
| **v0.26.8-nightly** | Nightly | Same baseline as v0.26.8 |
| **sdk-typescript-v0.1.28** | SDK | Bundles CLI 0.26.8 |
| **desktop-v0.26.8** | Desktop App | Shares v0.26.8 core changes |

No breaking changes reported in this cycle.

---

## Hot Issues

| # | Issue | Priority | Why It Matters | Reactions |
|---|-------|----------|----------------|-----------|
| [#14724](https://github.com/QwenLM/qwen-code/issues/14724) | Main CI failed: Managed Agent gate — no test identified | High | Most active issue (210 comments); persistent CI flakiness blocking merges since Oct 19; team actively triaging | 🔥 High priority |
| [#15173](https://github.com/QwenLM/qwen-code/issues/15173) | E2E Tests failed: `context-compress-interactive.test.ts` | Medium | Interactive context compression regression; 38 comments tracking root cause | Active |
| [#16322](https://github.com/QwenLM/qwen-code/issues/16322) | E2E Tests: ACP PreToolUse/PostToolUseFailure context delivery | Medium | ACP event delivery broken on error paths; 33 comments; marked provisional as newer run may resolve | Provisional |
| [#16418](https://github.com/QwenLM/qwen-code/issues/16418) | Critical: auto-compaction turns review-only skill into unauthorized source-code implementation | **P1 / Critical** | Security + authorization boundary violation; a review skill incorrectly executes plan implementation | New, 2 comments |
| [#16171](https://github.com/QwenLM/qwen-code/issues/16171) | Web Shell session open very slow | P1 | Live replay retains full file contents from edit results; daemon memory normal but session open blocks | Performance concern |
| [#15327](https://github.com/QwenLM/qwen-code/issues/15327) | Tracking: unify agent loop behind `experimental.unifiedAgentLoop` | P2 | Major architectural refactor tracking; single agent loop for all surfaces (core, CLI, TUI); 4 comments | Strategic |
| [#15052](https://github.com/QwenLM/qwen-code/issues/15052) | ci: preserve independent main E2E validation | P2 | GitHub Actions concurrency replaces pending runs incorrectly; breaks per-SHA validation | Dev workflow impact |
| [#16417](https://github.com/QwenLM/qwen-code/issues/16417) | Reject oversized `write_file` before generation | P2 | No pre-flight token budget check; wastes generation on truncated writes | UX improvement |
| [#16136](https://github.com/QwenLM/qwen-code/issues/16136) | proper-lockfile: five locks give up before crashed holder's lock goes stale | P3 | Lock recovery race condition; writes fail with `ELOCKED` after crashes | Edge case |
| [#16387](https://github.com/QwenLM/qwen-code/issues/16387) | Web Shell hooks approval card never shows with folder trust enabled | P1 / Security | Multi-workspace hosts with `security.folderTrust.enabled: true` silently skip approval cards | Security boundary |

**Community reaction:** The CI reliability cluster (issues #14724, #15173, #12714, #16322, #15712) dominates discussion, with contributors filing automated tickets per commit failure. The security issue #16418 is newly filed and drawing immediate scrutiny.

---

## Key PR Progress

| # | PR | Author | What It Does | Status |
|---|-----|--------|--------------|--------|
| [#15620](https://github.com/QwenLM/qwen-code/pull/15620) | feat(channels): Microsoft Teams extension & host ingress | XIQIXIQIXIQI | Full Teams channel: personal/group mentions, thread isolation, ordered final-text replies; supports standalone and host modes | Open |
| [#16186](https://github.com/QwenLM/qwen-code/pull/16186) | feat(serve): atomic user Skill activation | callmeYe | `PUT /skills/activation` + SDK method to enable/disable 1–100 Skills in one request; hard/default modes | Open |
| [#16385](https://github.com/QwenLM/qwen-code/pull/16385) | feat(cli): Ink TUI awaits shared tool batch | qqqys | With `unifiedAgentLoop`, Ink TUI now awaits tool batch completion before next round (part of #15327) | ✅ Closed |
| [#16367](https://github.com/QwenLM/qwen-code/pull/16367) | fix(web-shell): show notification guides only for browser's OS | 2SinceJuly | Task notification popover was showing macOS + Windows guides side-by-side to all users | Open |
| [#16274](https://github.com/QwenLM/qwen-code/pull/16274) | fix(core): keep user's instruction last in model request | yiliang114 | Moves injected context (hooks, Mod context, memory catalog) ahead of user instruction in the prompt | Open |
| [#16407](https://github.com/QwenLM/qwen-code/pull/16407) | feat(cli): report interactive program status with OSC 7501 | sorrycc | Terminal OSC 7501 protocol: reports `working`/`blocked` state with `app=qwen-code` tag | Open |
| [#12738](https://github.com/QwenLM/qwen-code/pull/12738) | fix(web-shell): leave current standalone session before deletion | Sumire-no-kai | Allows deleting idle no-workspace sessions from sidebar with confirmation flow | Open |
| [#15450](https://github.com/QwenLM/qwen-code/pull/15450) | feat(qqbot): let agent send local files to chat | Eric-GoodBoy-Tech | Four new tools (file/image/video/voice) gated behind per-channel switch; validates file type | Open |
| [#16132](https://github.com/QwenLM/qwen-code/pull/16132) | ci: route no-AK integration gate to ECS for every PR | yiliang114 | Routes integration gate to self-hosted ECS pool including untrusted forks | Open |
| [#13445](https://github.com/QwenLM/qwen-code/pull/13445) | feat: render plan approval as markdown & capture plans as Todos | 4ekuct25 | Renders ExitPlanMode approval as markdown; captures plans as Session Workflow Todos | Open |

**Notable closed PR:** #16385 (Ink TUI tool batch await) marks concrete progress on the `unifiedAgentLoop` roadmap item.

---

## Feature Request Trends

Aggregating feature signals across issues and PRs reveals these dominant directions:

| Trend | Evidence | Volume |
|-------|----------|--------|
| **Agent loop unification** | #15327 tracks running every surface on one agent loop behind `experimental.unifiedAgentLoop` | High |
| **Multi-channel expansion** | Teams integration (#15620), QQ bot file sending (#15450), QQ proactive delivery (#15635) | Medium-High |
| **Skill activation granularity** | Atomic user Skill activation API (#16186); session event delivery refactor (#15952) | Medium |
| **Terminal protocol compliance** | OSC 7501 program status reporting (#16407); TUI tool batch coordination (#16385) | Medium |
| **Vision model support** | #16308 flags Llama 3.2 Vision, Llama 4, LLaVA, Pixtral, Mistral Small 3.x treated as text-only | Growing |
| **Output budget enforcement** | Pre-flight check for oversized `write_file` (#16417) before generation | Medium |
| **Path-scoped access controls** | Read deny rules applied to grep/glob results (#15144) | Medium |

---

## Developer Pain Points

1. **CI flakiness & gate reliability** — Persistent Managed Agent and E2E test gate failures (210+ comment thread on #14724) are blocking merges. The team is actively hardening ren (test) fixtures and Maven cache resilience (#15274, #15286).

2. **Web Shell performance on large sessions** — Opening sessions with large edit tool results in live replay is slow (#16171), indicating memory/content retention issues in session serialization.

3. **Lock recovery race conditions** — The `proper-lockfile` issue (#16136) causes `ELOCKED` failures after crashes, affecting concurrent file operations.

4. **Desktop app settings not applying** — Theme (`ui.theme`) and language settings are ignored in the Desktop app (#11955, closed but unfixed in data window).

5. **MCP header sensitive settings unresolved** — Native extension sensitive settings appear as `$ENV_VAR` literals in MCP HTTP headers (#14532), breaking secret injection.

6. **Token budget surprises** — No pre-flight check means entire model responses are generated before rejection for oversized writes (#16417), wasting compute and frustrating users.

7. **E2E test timing pressure** — Hard-coded 30s test budget under a 60s ECS ceiling (#15216) causes intermittent timeouts.

---

*Digest generated from github.com/QwenLM/qwen-code data for 2026-11-06. All issue/PR links reference the QwenLM/qwen-code repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*