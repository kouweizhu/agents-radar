# AI CLI Tools Community Digest 2026-09-26

> Generated: 2026-09-26 00:49 UTC | Tools covered: 7

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

<think>The user wants a cross-tool comparison report covering the AI CLI tools ecosystems that were analyzed in the digests. Let me synthesize the information from all the digests I created:

1. Claude Code (github.com/anthropics/claude-code)
2. OpenAI Codex (github.com/openai/codex)
3. Gemini CLI (github.com/google-gemini/gemini-cli)
4. GitHub Copilot CLI (github.com/github/copilot-cli)
5. OpenCode (github.com/anomalyco/opencode)
6. Pi (github.com/earendil-works/pi)
7. Qwen Code (github.com/QwenLM/qwen-code)

Let me organize the data:

**Ecosystem Overview:**
- Multiple AI companies competing in the CLI/developer tool space
- Major players: Anthropic (Claude Code), OpenAI (Codex), Google (Gemini CLI), GitHub (Copilot CLI)
- Open-source alternatives: OpenCode, Pi, Qwen Code
- Common themes: authentication handling, multi-agent support, extensibility, model flexibility

**Activity Comparison:**
Let me compile the data:

| Tool | Issues | PRs | Discussions | Releases Today |
|------|--------|-----|-------------|----------------|
| Claude Code | 50 | 6 | N/A (Issues enabled) | 1 (v2.1.283) |
| OpenAI Codex | 50 | 50 | 9 | 4 (rust-v0.157.0 + alphas) |
| Gemini CLI | ~50 | ~50 | N/A | 1 (v0.62.0-nightly) |
| Copilot CLI | 50 | 0 | 0 | 1 (v1.0.89-4) |
| OpenCode | 50 | 50 | N/A | 0 |
| Pi | 50 | 13 | N/A | 0 |


| Qwen Code | 44 | 50 | N/A | 2 (v0.24.6 + nightly) |

I'll analyze the diverse feature requests across AI CLI tools, focusing on emerging technical requirements and platform-specific needs. The ecosystem shows significant variation in development approaches, with tools targeting different developer workflows and technical requirements.

Key shared technical priorities include:
- Authentication and credential management
- Multi-account and provider flexibility
- Subagent and multi-agent system development
- TUI and interface refinement
- Cross-platform compatibility

The analysis reveals a dynamic landscape where each tool potentially addresses unique developer challenges while sharing common architectural aspirations. Emerging themes suggest a trend toward more flexible, extensible CLI interfaces with sophisticated agent coordination capabilities.</think>

# Cross-Tool Comparison: AI CLI Developer Tools Landscape

## Ecosystem Overview

The AI CLI tools landscape in late 2026 shows a maturing but highly competitive market. Major providers (Anthropic, OpenAI, Google, GitHub) dominate with enterprise-grade offerings, while open-source alternatives (OpenCode, Pi, Qwen Code) drive innovation in extensibility and self-hosting. Common themes across all tools include authentication reliability, multi-agent coordination, model flexibility, and cross-platform consistency. The emergence of "Managed Agent" architectures and extensibility frameworks (e.g., Claude's Mods, Qwen's dual-path architecture) signals a shift toward deeper IDE integration and team-oriented workflows.

---

## Activity Comparison

| Tool | Issues (Open/Visible) | PRs (Last 24h) | Discussions | Releases (Last 24h) |
|------|----------------------|----------------|-------------|---------------------|
| **Claude Code** | 50 | 6 | N/A* | 1 (v2.1.283) |
| **OpenAI Codex** | 50 | 50 | 9 | 4 (v0.157.0 + alphas) |
| **Gemini CLI** | ~50 | ~50 | N/A* | 1 (v0.62.0-nightly) |
| **Copilot CLI** | 50 | 0 | 0 | 1 (v1.0.89-4) |
| **OpenCode** | 50 | 50 | N/A* | 0 |
| **Pi** | 50 | 13 | N/A* | 0 |
| **Qwen Code** | 44 | 50 | N/A* | 2 (v0.24.6 + nightly) |

*Marked "N/A" where Issues are enabled as the primary community channel; Discussions exist but are not the sole communication method.

**Key Observations:**
- **Highest Activity**: OpenAI Codex and Qwen Code lead in PR volume (50 each), indicating rapid iteration.
- **Release Cadence**: OpenAI (4 releases), Qwen (2), and Claude (1) shipped within 24 hours.
- **Copilot CLI** had 0 PRs but shipped a release—suggesting a more stable release cadence rather than active development.
- **Discussions**: Only Codex actively uses Discussions (9 topics); others rely on Issues.

---

## Shared Feature Directions

| Feature Direction | Tools Requesting It | Specific Needs |
|-------------------|---------------------|----------------|
| **Multi-account / Multi-provider support** | Claude Code, Copilot CLI | Same connector (GitHub, etc.) with different accounts; enterprise plans with multiple orgs |
| **Subagent / Multi-agent coordination** | Claude Code, Gemini CLI, Qwen Code, Pi | Background task recovery, duplicate work prevention, coordination gaps |
| **Extensibility / Plugin APIs** | Claude Code (Mods), Qwen Code (Managed Agent), OpenCode | Hooks, custom tools, declarative configurations |
| **Model flexibility / Custom providers** | All tools | Custom OpenAI-compatible endpoints, local models, provider-specific quirks |
| **Authentication reliability** | All tools | OAuth token refresh, headless/Win/WSL handling, credential persistence |
| **Cross-platform parity** | Claude Code, Gemini CLI, Copilot CLI, Qwen Code | Consistent TUI, permissions, behavior across Windows/macOS/Linux |
| **TUI/UX improvements** | Gemini CLI, OpenCode, Pi | Thinking level controls, scroll behavior, mouse tracking, color modes |

---

## Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|------|---------------|--------------|-------------------|
| **Claude Code** | Enterprise extensibility via Mods, gateway hint headers for LLM gateways | Enterprise developers, teams using custom LLM infrastructure | Declarative hook system, security-focused design |
| **OpenAI Codex** | Deep VS Code/terminal integration, auth with ChatGPT | Pro/Plus subscribers needing IDE-integrated coding | Rust-based, WebSocket streaming, tight OpenAI coupling |
| **Gemini CLI** | Agent behavior, file operation safety, AST-aware tooling | Developers wanting AI-assisted exploration | Subagent architecture, serializable file ops |
| **Copilot CLI** | Model switching, plugin marketplace | GitHub users wanting CLI AI assistance | Lightweight, npm-based distribution |
| **OpenCode** | Provider diversity, custom model support | Developers using multiple LLM providers | Multi-provider abstraction, MCP integration |
| **Pi** | Pricing accuracy, reasoning/thinking controls, compaction | Price-conscious users, reasoning model enthusiasts | Thinking display controls, cost tracking |
| **Qwen Code** | Managed Agent architecture, desktop relay, durable sessions | Teams needing multi-agent orchestration, enterprise deployments | Dual-path architecture, workspace bindings, durable journals |

---

## Community Momentum & Maturity

| Tool | Community Activity | Iteration Speed | Maturity Signal |
|------|-------------------|-----------------|------------------|
| **OpenAI Codex** | Highest (50 PRs, 9 discussions) | Very fast (4 releases) | Active development, but auth regression indicates rapid growth trade-offs |
| **Qwen Code** | High (50 PRs) | Fast (2 releases) | Managed Agent proposal shows architectural maturity |
| **Claude Code** | Moderate (6 PRs, 1 release) | Stable | Enterprise stability focus; 390+ 👍 on multi-account request shows demand |
| **Gemini CLI** | Moderate | Fast | Feature-rich but subagent bugs indicate complexity |
| **OpenCode** | High PR volume | No recent releases | Active bug-fixing; community-driven |
| **Pi** | Moderate (13 PRs) | No recent releases | Niche focus on reasoning models; price/cost tracking |
| **Copilot CLI** | Low (0 PRs) | Slow but stable | Minimal recent development; mature product |

---

## Trend Signals

1. **Authentication as a Primary Pain Point** — Every tool community reports auth issues (token refresh, OAuth failures, 401 errors). This is the highest-impact friction across the ecosystem.

2. **Multi-Agent Coordination is the Next Frontier** — Claude (Mods), Gemini (subagents), Qwen (Managed Agent), and Pi all have active work on background task handling, coordination, and recovery. The industry is moving beyond single-turn interactions.

3. **Enterprise Features Maturing** — Multi-account support, workspace bindings, and durable sessions signal a shift from individual developer tools to team-oriented workflows.

4. **Extensibility Models Diverging** — Claude Code uses declarative hooks (Mods), Qwen uses contract-based architecture (W0a/W0b slices), while others rely on plugin marketplaces. The best model hasn't converged.

5. **Cross-Platform Consistency Remains Elusive** — Windows-specific issues appear in nearly every tool's bug tracker. The macOS/Linux bias in AI tooling remains a pain point for enterprise Windows adoption.

6. **Cost/Pricing Visibility Growing** — Pi's OpenRouter pricing fixes and Claude's gateway hint headers suggest providers are optimizing for cost control and multi-provider routing.

---

*Data sourced from GitHub public APIs on 2026-09-26. Activity counts reflect visible community contributions; private or Discord-based discussions are not captured.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills repository data and create a community highlights report. Let me analyze the data provided:

**Pull Requests (sorted by comments - but all show "undefined" for comments):**
Looking at the PR data, I notice all PRs show "Comments: undefined" - so I cannot rank by comments. However, the PRs are listed in order, and I should look at the content to understand what skills are most notable.

Looking at the PRs:
1. #1298 - fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
2. #1771 - feat(skills): add proofcore-contract-auditor for smart contract notarization
3. #1742 - fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
4. #1734 - Detect orphaned docx comments
5. #1703 - Add md2video-audio skill
6. #1792 - fix(docx): report LibreOffice timeout as an error and verify the output
7. #525 - Add pyxel skill for retro game development
8. #514 - Add document-typography skill
9. #1615 - Add scnet-hpc skill
10. #822 - feat: add AWT (AI Watch Tester)
11. #538 - fix(pdf): correct case-sensitive file references
12. #486 - Add ODT skill
13. #210 - Improve frontend-design skill clarity
14. #83 - Add skill-quality-analyzer and skill-security-analyzer
15. #1776 - Add blast-radius skill
16. #1245 - Add notion-spec-to-implementation and quantitative-resume-auditor skills
17. #723 - feat: add testing-patterns skill
18. #541 - fix(docx): prevent tracked change w:id collision


19. #539 - fix(skill-creator): warn on unquoted description
20. #1790 - fix(docx): create document.xml.rels when missing

**Issues (sorted by comments):**
1. #492 - Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse - 43 comments
2. #228 - Enable org-wide skill sharing in Claude.ai - 16 comments
3. #556 - run_eval.py: claude -p never triggers skills/commands - 12 comments
4. #62 - All my skills have disappeared - 10 comments
5. #1329 - Proposing a second skill: compact-memory - 9 comments
6. #2 - Need a way to import/export skills - 7 comments (not in top 20 but referenced)
7. #202 - skill-creator should be updated to best practice - 8 comments
8. #412 - Skill proposal: agent-governance — safety patterns - 6 comments
9. #189 - document-skills and example-skills plugins install identical content - 6 comments
10. #1487 - claude-api skill eagerly injects ~156k tokens - 4 comments
11. #1390 - mcp-builder evaluation.py scores 0/N - 4 comments
12. #1385 - Reasoning Quality Gate Pipeline - 4 comments
13. #1175 - Concerns regarding Security and Context Window for SharePoint - 4 comments
14. #29 - Usage with bedrock - 4 comments
15. #16 - Expose Skills as MCPs - 4 comments
16. #1362 - web-artifacts-builder issues - 3 comments

Most discussions center on security implications when skills run under the anthropic namespace, followed by organizational features like shared skill libraries and skill discovery mechanisms. There's also significant attention to evaluation and testing frameworks, particularly around trigger detection and skill validation. Infrastructure-level concerns emerge around context window constraints, MCP exposure, and cross-platform deployment, while domain-specific needs appear in areas like SharePoint integration and governance patterns.</think>

# Claude Code Skills Community Highlights Report

**Data as of: 2026-09-26**

---

## 1. Top Skills Ranking

Since PR comment counts are uniformly undefined in this dataset, ranking is based on recency, activity indicators, and functional significance. The following represent the most notable Skill submissions:

| # | PR | Skill | Functionality | Status |
|---|----|----|---------------|--------|
| 1 | [#1771](https://github.com/anthropics/skills/pull/1771) | `proofcore-contract-auditor` | Agent Skill for Web3 developers performing automated static analysis of Solidity/Rust smart contracts, anchoring cryptographic audit proofs onto the TON Blockchain via ProofCore's zero-storage Merkle protocol | OPEN |
| 2 | [#1703](https://github.com/anthropics/skills/pull/1703) | `md2video-audio` | Zero-cost skill that compiles Markdown documents into professional MP4 videos with realistic human-like voiceovers using Marp for slide conversion | OPEN |
| 3 | [#822](https://github.com/anthropics/skills/pull/822) | `AWT` (AI Watch Tester) | Open-source E2E testing skill providing Claude with vision and browser control for zero-code automated test generation | OPEN |
| 4 | [#1776](https://github.com/anthropics/skills/pull/1776) | `blast-radius` | Checklist skill for bulk/destructive operations—archive users, revoke access, delete rows, batch mail—bridging query correctness to world-state correctness | OPEN |
| 5 | [#1742](https://github.com/anthropics/skills/pull/1742) | `mcp-builder` fix | Fixes MCP≥2.0.0 `streamable_http_client` rename and custom header configuration via `create_mcp_http_client` | OPEN |
| 6 | [#1245](https://github.com/anthropics/skills/pull/1245) | `notion-spec-to-implementation` + `quantitative-resume-auditor` | Transforms product/tech specs into concrete Notion tasks; audits resumes for quantifiable metrics | OPEN |
| 7 | [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | Comprehensive testing skill covering Testing Trophy philosophy, unit testing (AAA pattern), React component testing, and full testing stack | OPEN |
| 8 | [#83](https://github.com/anthropics/skills/pull/83) | `skill-quality-analyzer` + `skill-security-analyzer` | Meta skills evaluating Claude Skills across Structure/Documentation (20%), Security, and other quality dimensions | OPEN |

**Key Observations:**
- All top PRs are currently **OPEN** — no merges visible in this dataset
- Web3/Smart contract auditing represents a new vertical (`proofcore-contract-auditor`)
- Multimedia generation (`md2video-audio`) and E2E testing (`AWT`) show expanding scope beyond code tasks

---

## 2. Community Demand Trends

From Issue discussions, the following themes emerge as most-anticipated:

### Primary Demands

| Theme | Issue | Description |
|-------|-------|-------------|
| **Security & Trust** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments) | **Critical:** Community skills under `anthropic/` namespace impersonate official skills, creating trust boundary abuse — users may grant elevated permissions to deceptive community skills |
| **Org-Wide Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments) | Demand for organization-level skill sharing directly in Claude.ai without manual file distribution |
| **Evaluation/Rigging** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments) | `run_eval.py` reports 0% trigger rate — skills never activate in evaluation, blocking PR validation |

### Secondary Demands

| Theme | Issue | Description |
|-------|-------|-------------|
| **Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) | Proposal for `agent-governance` skill: policy enforcement, threat detection, trust scoring, audit trails |
| **Plugin Conflicts** | [#189](https://github.com/anthropics/skills/issues/189) | `document-skills` and `example-skills` contain identical content, creating duplicates |
| **Context Exhaustion** | [#1487](https://github.com/anthropics/skills/issues/1487) | `claude-api` skill injects ~156k tokens, exhausting context in one call |
| **MCP Integration** | [#16](https://github.com/anthropics/skills/issues/16) | Expose Skills as MCPs for standardized API packaging |

### Emerging Direction
- **Symbolic memory** (`compact-memory`, Issue #1329): Notation for compact agent state in long-running contexts

---

## 3. High-Potential Pending Skills

These PRs have active development and may merge soon:

| PR | Skill | Rationale |
|----|----|-----------|
| [#1792](https://github.com/anthropics/skills/pull/1792) | `docx` fix | LibreOffice timeout error handling + output verification — practical defect fix |
| [#1790](https://github.com/anthropics/skills/pull/1790) | `docx` fix | Creates missing `document.xml.rels` for comments — resolves document corruption |
| [#1742](https://github.com/anthropics/skills/pull/1742) | `mcp-builder` | Critical compatibility fix for MCP≥2.0.0 — addresses breaking changes |
| [#1734](https://github.com/anthropics/skills/pull/1734) | `docx` orphan detection | Detects orphaned Word comments — quality-of-life improvement |
| [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` | Isolation of trigger evaluations, Windows support, runtime failure handling — foundational infrastructure |

---

## 4. Skills Ecosystem Insight

**One-sentence summary:** The community's most concentrated demand is for **security governance** (trust boundaries in skill namespaces) paired with **organizational infrastructure** (team-wide skill sharing and evaluation tooling), while the skill portfolio rapidly expands into Web3, multimedia, and E2E testing verticals.

---

*Report generated from GitHub data at anthropics/skills (PRs & Issues, 50 each, top 20 shown)*

---

<think>Let me analyze this GitHub data and create a structured digest for the Claude Code community.

Looking at the data provided:

1. **Latest Releases**: v2.1.283 - with two changes:
   - Added `x-claude-code-prompt-id` to gateway hint headers for LLM gateways to group requests
   - Added `availableModelsMatch` managed setting

2. **Latest Issues**: 50 total, showing top 30. I need to pick 10 noteworthy ones:
   - #27302: Support multiple Connector accounts - 256 comments, 390 👍
   - #91870: Mods - make Claude 10x more extensible - 216 comments, 126 👍
   - #43477: Copying text (Ctrl+C) from Claude Code window in VS Code fails - 16 comments
   - #74589: Allow deleting/unpublishing an Artifact - 6 comments
   - #97305: Model writes "falsifiable" when "verifiable" is intended - 5 comments
   - #97117: Opus 5.5: Severe scope creep and task focus regression - 3 comments
   - #73325 (CLOSED): Permission prompt inconsistencies - 3 comments
   - #72234 (CLOSED): VS Code plan-review comments not forwarded - 3 comments
   - #94804: MCP OAuth prompt=consent hardcoded - 2 comments
   - #94041: /goal Stop hook re-fires indefinitely - 2 comments

3. **Latest Pull Requests**: 6 total:
   - #41611: add missing source to claude code
   - #97293: mods declarations for process.run truncation flags
   - #97241: sec-default system prompt sections
   - #96953 (CLOSED): diff focus hook
   - #96930 (CLOSED): telemetry test plugins
   - #96917 (CLOSED): telemetry log and mark

I'll focus on the closed PRs, noting their specific modifications. The closed pull requests reveal targeted improvements in telemetry testing, focus hooks, and plugin configurations. Each PR addresses distinct technical aspects of the Claude Code system, indicating ongoing refinement of its core functionality.</think>

# Claude Code Community Digest — 2026-09-26

## 1. Today's Highlights

The v2.1.283 release introduces gateway hint headers for request grouping and a new `availableModelsMatch` setting for model validation. The community is buzzing around the Mods extensibility initiative (#91870, 216 comments) and a major feature request for multi-account Connector support (#27302, 390 👍). Several regression bugs affecting Windows VS Code integration and model behavior (Opus 5.5 task focus) are generating significant attention.

---

## 2. Releases

**v2.1.283** — [View Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.283)

- **`x-claude-code-prompt-id` header**: Added to gateway hint headers, enabling LLM gateways to group requests serving a single user prompt. Enable via `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1`.
- **`availableModelsMatch` managed setting**: New setting with `"exact"` value to enforce strict model matching against `availableModels` entries.

---

## 3. Hot Issues

| # | Issue | Summary | Reaction |
|---|-------|---------|----------|
| **#27302** | [Support multiple Connector accounts](https://github.com/anthropics/claude-code/issues/27302) | Feature request to allow same connector (e.g., GitHub) with different accounts in Claude Code and claude.ai/web. Critical for developers using multiple orgs. | 🔥 390 👍, 256 comments |
| **#91870** | [Mods - make Claude 10x more extensible](https://github.com/anthropics/claude-code/issues/91870) | Major extensibility initiative shipping function hooks. Community feedback actively shaping design. | 🔥 126 👍, 216 comments |
| **#43477** | [Ctrl+C copy fails in VS Code](https://github.com/anthropics/claude-code/issues/43477) | Copying text via Ctrl+C from Claude Code window in VS Code fails on Windows. | 16 comments, 6 👍 |
| **#97305** | ["falsifiable" vs "verifiable" word substitution](https://github.com/anthropics/claude-code/issues/97305) | Model consistently writes "falsifiable" when "verifiable" is clearly intended. Reproduced 4x over 4 months; project-scoped correction doesn't transfer. | 5 comments |
| **#97117** | [Opus 5.5 scope creep regression](https://github.com/anthropics/claude-code/issues/97117) | Opus 5.5 exhibits severe scope creep and task focus loss compared to Opus 4.6. User had to revert mid-project. | 3 comments |
| **#96096** | [MCP "Always allow" ignored](https://github.com/anthropics/claude-code/issues/96096) | Regression in 2.1.280: MCP tools prompt on every call in Bypass mode, "Always allow" has no lasting effect on Windows desktop. | 2 comments, 1 👍 |
| **#94804** | [MCP OAuth hardcoded prompt=consent](https://github.com/anthropics/claude-code/issues/94804) | Breaks Entra tenants with user consent disabled. Affects CLI, web connector, and desktop app. #49722 was closed without fix. | 2 comments |
| **#94041** | [/goal Stop hook re-fires indefinitely](https://github.com/anthropics/claude-code/issues/94041) | On Linux, session-scoped /goal Stop hook re-fires with no way to acknowledge hold. | 2 comments |
| **#87739** | [CLI 100% CPU on startup](https://github.com/anthropics/claude-code/issues/87739) | Claude Code CLI native binary spins at ~100% CPU on VS Code Remote-SSH, Ubuntu 26.04. | 2 comments |
| **#73325** | [Permission prompt inconsistencies](https://github.com/anthropics/claude-code/issues/73325) | Key '1' = Approve in terminal CLI but Deny in Windows desktop app—muscle memory causes accidental denials. | 3 comments (Closed) |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|-----|---------|
| **#97293** | [mods: process.run truncation flags + mtimeMs](https://github.com/anthropics/claude-code/pull/97293) | Adds `isStdoutTruncated`/`isStderrTruncated` to `$.process.run` results and `mtimeMs` to `$.fs.list` entries in mod declarations. |
| **#97241** | [sec-default: system prompt sections](https://github.com/anthropics/claude-code/pull/97241) | Extends system prompt's sections past the user tier for security defaults. |
| **#96953** | [diff: focus hook element naming](https://github.com/anthropics/claude-code/pull/96953) | Fixes diff mod's `ui.focus` hook to match elements by registered plugin name (`cc-plugin-diff`). **(Closed)** |
| **#96930** | [telemetry test plugins](https://github.com/anthropics/claude-code/pull/96930) | Test plugins hook and call collector stream by name, stand in for telemetry through events. **(Closed)** |
| **#96917** | [telemetry: log and mark hooks](https://github.com/anthropics/claude-code/pull/96917) | Refactors telemetry to use hooks on `telemetry.log` and `telemetry.mark` events. **(Closed)** |
| **#41611** | [add missing source](https://github.com/anthropics/claude-code/pull/41611) | Adds missing source to Claude Code. |

---

## 5. Feature Request Trends

From the issues analyzed, the most requested feature directions are:

1. **Multi-account Connector support** — Critical for developers managing multiple orgs/accounts (GitHub, etc.)
2. **Mods / Plugin extensibility** — Function hooks, deeper customization (high community interest)
3. **Artifact management** — Delete/unpublish capability for Artifacts
4. **Cross-platform consistency** — Unified permission prompts, keyboard shortcuts across CLI/Desktop
5. **MCP improvements** — OAuth consent handling, permission bypass reliability, machine-wide failure caching fixes
6. **Model behavior refinements** — Vocabulary consistency (verifiable/falsifiable), task focus retention

---

## 6. Developer Pain Points

- **Permission prompt chaos**: Inconsistent behavior across surfaces (CLI vs Desktop vs Bypass mode), "Always allow" ignored
- **Windows/VS Code integration bugs**: Ctrl+C copy fails, Browser pane rendered twice, 100% CPU on Remote-SSH
- **Model regressions**: Opus 5.5 scope creep, repeated model downgrade messages, word substitution issues
- **MCP reliability**: OAuth consent breaking Entra tenants, tool prompts firing every call despite settings
- **Session/thread bugs**: Task chips injecting into wrong thread, session transcript data loss after /compact, stuck running-task badges
- **Cross-account state**: Chrome browser recognition lost after switching Claude accounts

---

*Generated from GitHub data — github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a structured digest for the OpenAI Codex community based on the provided GitHub data. Let me analyze what's available:

1. **Releases**: 
   - rust-v0.157.0 with new features
   - Several alpha releases (0.158.0-alpha.x, 0.159.0-alpha.x)

2. **Issues** (50 total, showing top 30):
   - Lots of 401 Unauthorized issues related to auth problems
   - Windows-specific issues
   - macOS issues
   - Connectivity issues
   - Various bugs

3. **PRs** (50 total, showing top 20):
   - Various closed PRs fixing bugs and adding features

4. **Discussions** (9 total):
   - Feature requests
   - Show and tell
   - Q&A

Let me structure this properly:

**Today's Highlights**: Should capture the most important news - looks like there are major auth issues (401 errors) affecting many users.

**Releases**: Need to summarize the new releases

**Hot Issues**: Pick 10 important ones - clearly the 401 auth issues are hot

**Key PR Progress**: Pick 10 important PRs

**Hot Discussions**: Up to 10 discussions

**Feature Request Trends**: From issues and discussions

**Developer Pain Points**: Common frustrations

Let me write this out professionally.</think>

# OpenAI Codex Community Digest — 2026-09-26

## Today's Highlights

The past 24 hours have been dominated by a significant authentication incident affecting Codex users across platforms. Multiple issues report that ChatGPT-authenticated users are receiving 401 Unauthorized errors with an invalid `sk-svcac...` API key, rendering Codex completely unusable for many Pro and Plus subscribers. The team has shipped rust-v0.157.0 with GPT-6 Sol and Luna model support, but the widespread auth regression is overshadowing the release. Windows users also face persistent terminal window spawning issues following recent updates.

---

## Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.157.0** | Stable | Added GPT-6 Sol and Luna models with Amazon Bedrock support and migration prompts. Enabled fullscreen transcripts by default. Added Shift-click for extending text selections. Enabled automatic background-server startup for eligible configurations. |
| **rust-v0.159.0-alpha.1/2/3** | Alpha | Progressive alpha releases for 0.159.0 |
| **rust-v0.158.0-alpha.13/14/15** | Alpha | Progressive alpha releases for 0.158.0 |

---

## Hot Issues

### 1. 🔴 Authentication Regression — 401 with Invalid `sk-svcac` Credential
**Issue #48237** | [Open in GitHub](https://github.com/openai/codex/issues/48237)  
93 comments | 101 👍

Users across Windows, macOS, and Linux are experiencing `401 Unauthorized` errors despite being logged in via ChatGPT OAuth. Codex incorrectly sends a malformed `sk-svcac...` API key instead of the proper OAuth token. This is the highest-engagement issue and appears to be a systemic auth bug introduced in recent releases.

### 2. 🔴 Frequent WebSocket Reconnect Loop
**Issue #18960** | [Open in GitHub](https://github.com/openai/codex/issues/18960)  
62 comments | 54 👍

macOS Pro users report the Codex App repeatedly disconnects with "websocket closed by server before response.completed," rendering the app unusable for extended sessions.

### 3. 🔴 Windows: Sandbox Startup Fails with TIOCSTI
**Issue #45119** | [Open in GitHub](https://github.com/openai/codex/issues/45119)  
27 comments

macOS 14.2 (Apple Silicon) users cannot start the sandbox, blocking code execution entirely.

### 4. 🔴 Windows: Codex CLI 0.157.0 Daemon Privilege Error
**Issue #48043** | [Open in GitHub](https://github.com/openai/codex/issues/48043)  
9 comments | 10 👍

Windows users report CLI 0.157.0 fails to start with a daemon privilege error, while 0.156.1 works correctly—a clear regression.

### 5. 🔴 Windows: Terminal Windows Proliferate After Update
**Issue #48059** | [Open in GitHub](https://github.com/openai/codex/issues/48059)  
4 comments | 12 👍

Codex CLI on Windows spawns ~20 persistent terminal windows that remain open instead of closing, with more appearing as users manually close them.

### 6. 🟡 VS Code Server / serve-web Activation Fails
**Issue #47357** | [Open in GitHub](https://github.com/openai/codex/issues/47357)  
13 comments | 20 👍

Codex cannot activate in VS Code Server because the required Codex Audio extension is desktop-only, blocking remote development workflows.

### 7. 🟡 OAuth Fallback Uses Hardcoded Dummy API Key
**Issue #37192** | [Open in GitHub](https://github.com/openai/codex/issues/37192)  
12 comments

After network changes, Codex silently falls back to a hardcoded dummy API key instead of prompting re-authentication, causing 401 errors.

### 8. 🟡 Windows: Browser Request-Header Policy Load Failure
**Issue #46129** | [Open in GitHub](https://github.com/openai/codex/issues/46129)  
4 comments

Windows users see "Unable to load browser request-header policy" — the Statsig payload (~4.8MB) exceeds the nodeRepl.fetch response limit.

### 9. 🟡 Linux Desktop: Tasks Stuck on "Starting your task"
**Issue #48212** | [Open in GitHub](https://github.com/openai/codex/issues/48212)  
3 comments | 2 👍

Linux Desktop 26.924.20706 shows tasks stuck indefinitely while the CLI works fine, indicating a desktop-specific regression.

### 10. 🟢 Windows: Corrupted CODEX_HOME State
**Issue #46987** | [Open in GitHub](https://github.com/openai/codex/issues/46987)  
5 comments | 3 👍

Windows Desktop experiences corrupted global state that resets project/thread groupings while preserving individual sessions, causing significant UX disruption.

---

## Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| **#48272** | Closed | Prevent Windows daemon launches from retaining launcher stdio |
| **#48238** | Closed | Suppress console windows for local Windows MCP servers using `CREATE_NO_WINDOW` flag |
| **#48229** | Closed | Extract Responses failure parsing into a dedicated module (`responses_error.rs`) |
| **#48224** | Closed | Preserve model and access program pairs during compaction to prevent server rejections |
| **#48222** | Closed | Preserve late result metadata for truncated code-mode calls |
| **#48213** | Closed | Isolate executable fixture copies in CLI tests on Linux to prevent `ETXTBSY` errors |
| **#48211** | Closed | Keep Codex visible during external editor handoff by preserving the last frame |
| **#48207** | Closed | Preserve queued output for observers during code-mode termination |
| **#48206** | Closed | Add "keep-and-next" action (`k` key) to warnings viewer |
| **#48205** | Closed | Dismiss viewed TUI warnings when closing the viewer |

---

## Hot Discussions

### Ideas

**#14067 — Feature Request: Synchronization of Codex Threads and Session Context Across Devices**  
[Open in GitHub](https://github.com/openai/codex/discussions/14067)  
12 comments | 63 👍

Users request cross-device sync for Codex threads and session context. Currently, threads are tied to the local environment, forcing developers to recreate context when switching machines.

### Show and Tell

**#47730 — ghfs: GitHub Issues as Read-Only Local Files**  
[Open in GitHub](https://github.com/openai/codex/discussions/47730)  
1 comment | 1 👍

ghfs mounts GitHub issues as Markdown files at `.ghfs/` in the repo, allowing Codex to read issues via `cat` rather than calling the GitHub API during tasks.

**#42876 — Codex Managed Channel: Remote macOS SSH Sessions**  
[Open in GitHub](https://github.com/openai/codex/discussions/42876)  
1 comment | 1 👍

An open-source SSH boundary enabling Codex Desktop with existing remote Macs while preserving official authentication and plugins.

**#47986 — Crest: Answer Codex Approval Requests from the MacBook Notch**  
[Open in GitHub](https://github.com/openai/codex/discussions/47986)  
0 comments | 1 👍

A Mac app living in the notch that displays Codex approval requests with Deny/Allow options across all displays.

### Q&A

**#48032 — Feature Request: Persistent Google Drive Instructions and File Creation**  
[Open in GitHub](https://github.com/openai/codex/discussions/48032)  
0 comments | 1 👍

Request for Codex to maintain persistent Google Drive instructions and file creation capabilities on Windows for team workflows using Drive as the source of truth.

---

## Feature Request Trends

Based on Issues and Discussions, the following themes emerge:

1. **Cross-Device Synchronization** — Strong demand for threads/sessions to persist across machines
2. **Remote Development** — VS Code Server support and SSH-based workflows are increasingly important
3. **Enhanced Platform Parity** — Linux Desktop and Windows issues suggest users need consistent behavior across all platforms
4. **External Integration** — Google Drive, GitHub, and other cloud storage integrations need persistent configuration

---

## Developer Pain Points

1. **Authentication is Unstable** — The 401/credential issue is blocking entire workflows; users cannot rely on Codex for production work
2. **Windows Experience Lags** — Terminal window spawning, sandbox failures, and privilege errors make Windows a frustrating platform
3. **macOS Regressions** — WebSocket disconnects and OAuth token revocation issues persist
4. **Platform-Specific Bugs** — Many bugs are scoped to single platforms (Windows, macOS, Linux), indicating insufficient cross-platform testing
5. **Token/Session Management** — Refresh token revocation isn't handled gracefully; users face auth loops without clear recovery paths

---

*Digest generated from GitHub data — github.com/openai/codex | 2026-09-26*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Gemini CLI community digest for 2026-09-26 based on the provided GitHub data. Let me analyze the data and create a structured digest following the specified format.

Let me organize the information:

1. **Today's Highlights** - Summarize the most important updates
2. **Releases** - New versions
3. **Hot Issues** - 10 noteworthy issues
4. **Key PR Progress** - 10 important PRs
5. **Hot Discussions** - No discussion data provided, so I'll omit this
6. **Feature Request Trends** - Most-requested feature directions
7. **Developer Pain Points** - Recurring frustrations

Let me analyze the data:

**Releases:**
- v0.62.0-nightly.20260925.gbedef96ef - with changelog PRs for v0.61.0-preview.1 and v0.61.0, plus a fix for MCP config

**Hot Issues (top 10 by comment count):**
1. #22323 - Subagent recovery after MAX_TURNS (13 comments, P1)
2. #19873 - Zero-Dependency OS Sandboxing (9 comments, P2)
3. #21409 - Generalist agent hangs (8 comments, P1)
4. #22745 - AST-aware file reads (7 comments, P2)
5. #21968 - Gemini doesn't use skills/sub-agents (6 comments, P2)
6. #26525 - Auto Memory redaction (5 comments, P2)
7. #26522 - Auto Memory retry (4 comments, P2)
8. #22267 - Browser Agent ignores settings.json (4 comments, P2)
9. #22232 - Browser agent resilience (4 comments, P3)
10. #21983 - Browser subagent in wayland (4 comments, P1)


11. 
I'll focus on the most critical pull requests that address key development challenges. The top 10 PRs reveal significant technical improvements across multiple areas:

1. #29506 - Policy redirection and workflow parsing
2. #28450 - Dependency updates
3. #29448 - Authentication loop fix
4. #29463 - ACP session resolution
5. #29499 - File operation serialization
6. #29437 - Temporary directory cleanup
7. #29508 - NPM dependency updates
8. #29137 - Additional NPM updates
9. #29476 - Interactive mode hang resolution
10. #29470 - Changelog documentation

These PRs represent crucial refinements in authentication, session management, file handling, and overall system stability.

The issues highlight complex technical challenges:
1. Subagent recovery mechanisms
2. OS sandboxing strategies
3. Agent hang prevention
4. AST-aware file processing
5. Skill and sub-agent integration
6. Auto memory redaction
7. Retry mechanisms
8. Configuration management
9. Browser agent resilience
10. Wayland compatibility

The PRs demonstrate a systematic approach to addressing authentication loops, session resolution, file operation safety, and interactive mode improvements, indicating a mature development strategy focused on robust system design.</think>

# Gemini CLI Community Digest — 2026-09-26

## Today's Highlights

The Gemini CLI project continues rapid iteration with v0.62.0-nightly.20260925.gbedef96ef, which includes changelog entries for the recent v0.61.0 and v0.61.0-preview.1 releases. A notable P1 auth fix merged (#29448) addresses infinite authentication loops in Windows/WSL/headless environments—a high-impact user-facing issue. Meanwhile, the community is actively debating fundamental agent improvements: AST-aware file operations, OS sandboxing strategies, and subagent behavior remain hot topics.

---

## Releases

**v0.62.0-nightly.20260925.gbedef96ef**  
[Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260925.gbedef96ef) | [Changelog PR #29469](https://github.com/google-gemini/gemini-cli/pull/29469) | [Changelog PR #29472](https://github.com/google-gemini/gemini-cli/pull/29472)

Changes include:
- Changelog entries for v0.61.0-preview.1 and v0.61.0
- Fix: distinguish missing MCP enablement config from malformed config

---

## Hot Issues

### 1. Subagent Recovery After MAX_TURNS Hides Interruption
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — P1 Bug | 13 comments  
**Why it matters:** The `codebase_investigator` subagent reports GOAL success even when hitting max turns without completing analysis, masking actual failures. This creates false positives in task completion tracking.  
**Community reaction:** 2 👍; flagged for retesting.

### 2. Zero-Dependency OS Sandboxing & Post-Execution Intent Routing
[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — P2 Enhancement | 9 comments  
**Why it matters:** Proposes leveraging Gemini 3's native bash affinity through zero-dependency OS sandboxing, potentially improving both security and UX without external toolchains.  
**Community reaction:** 1 👍; marked as large effort.

### 3. Generalist Agent Hangs
[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — P1 Bug | 8 comments  
**Why it matters:** When Gemini CLI defers to the generalist agent, it hangs indefinitely—even on trivial operations like folder creation. Users report waiting up to an hour. A workaround is to explicitly disable subagents.  
**Community reaction:** 8 👍; flagged for retesting.

### 4. Assess Impact of AST-Aware File Reads
[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — P2 Feature | 7 comments  
**Why it matters:** Epic tracking investigation into AST-aware tools for precise method boundary reads, reducing token waste from misaligned file reads.  
**Community reaction:** 1 👍

### 5. Gemini Does Not Use Skills and Sub-Agents Enough
[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — P2 Bug | 6 comments  
**Why it matters:** Despite custom skills (e.g., gradle, git) with clear descriptions, Gemini rarely invokes them autonomously—only when explicitly instructed, limiting automation potential.

### 6. Add Deterministic Redaction and Reduce Auto Memory Logging
[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — P2 Bug | 5 comments  
**Why it matters:** Auto Memory sends transcript content to the model before redaction occurs, creating a security gap. Secrets may already be in context before the extraction agent processes them.

### 7. Stop Auto Memory from Retrying Low-Signal Sessions Indefinitely
[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — P2 Bug | 4 comments  
**Why it matters:** Sessions skipped as "low-signal" remain unprocessed indefinitely, potentially surfacing repeatedly and wasting extraction cycles.

### 8. Browser Agent Ignores settings.json Overrides
[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — P2 Bug | 4 comments  
**Why it matters:** The Browser Agent completely ignores configuration overrides in `settings.json` (e.g., `maxTurns`), limiting user control over browser subagent behavior.

### 9. Enhance Browser Agent Resilience: Automatic Session Takeover
[#22232](https://github.com/google-gemini/gemini-cli/issues/22232) — P3 Feature | 4 comments  
**Why it matters:** Proposes lock recovery for persistent browser sessions, reducing fail-fast behavior when encountering orphaned processes.

### 10. Browser Subagent Fails in Wayland
[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — P1 Bug | 4 comments  
**Why it matters:** Browser subagent fails in Wayland environments, limiting CLI usability on Linux desktops running Wayland display server.

---

## Key PR Progress

### 1. Fix Auth: Prevent Infinite Auth Loop
[#29448](https://github.com/google-gemini/gemini-cli/pull/29448) — P1 | Merged  
Fixes infinite authentication loops on Windows/WSL/headless environments caused by file contention with companion tools (VS Code extension) and keyring issues.

### 2. Fix Core: Serialize File Tool Operations
[#29499](https://github.com/google-gemini/gemini-cli/pull/29499) — P1 | Open  
Addresses race conditions in concurrent file operations across parallel sub-agents, making writes atomic to prevent silent lost updates.

### 3. Fix CLI: Resolve Hang on Enter Keypress
[#29476](https://github.com/google-gemini/gemini-cli/pull/29429476) — P1 | Open  
Fixes unresponsive Enter key on tool confirmation prompts in IDE-integrated terminals.

### 4. Fix Core: Replace Fuzzy Matching with Glob in Read-Many-Files
[#29457](https://github.com/google-gemini/gemini-cli/pull/29457) — P1 | Open  
Fixes critical context-bloat bug where binary assets (images, PDFs) were incorrectly included due to fuzzy substring matching.

### 5. Fix ACP: Resolve Session Before Config Initialization
[#29463](https://github.com/google-gemini/gemini-cli/pull/29463) — P1 | Closed  
Resolves session lookup failures when `session/load` is invoked in the same UTC minute as `session/new`.

### 6. Fix: Support Rootless Podman with keep-id
[#29505](https://github.com/google-gemini/gemini-cli/pull/29505) — P1 | Open  
Enables sandbox startup for rootless Podman by preserving host UID/GID mappings.

### 7. Fix Core: Clean Up Temp Directory on Shell Exit
[#29437](https://github.com/google-gemini/gemini-cli/pull/29437) — P1 | Closed  
Ensures temporary directories created for background process tracking are properly cleaned up.

### 8. Fix Core: Remove Invalid diff.external Override
[#29467](https://github.com/google-gemini/gemini-cli/pull/29467) — P1 | Closed  
Removes invalid Git diff configuration causing fatal "cannot spawn" errors in execution sandbox.

### 9. Refactor A2A Server: V1 to V2 Settings Migration
[#29450](https://github.com/google-gemini/gemini-cli/pull/29450) — P1 | Open  
Implements backward-compatible V1→V2 settings migration in a2a-server configuration loader.

### 10. Fix CLI: Add Homebrew Deprecation Notice
[#28844](https://github.com/google-gemini/gemini-cli/pull/28844) — Closed  
Adds deprecation notice for Homebrew installation; directs users to npm for updates.

---

## Feature Request Trends

| Theme | Related Issues | Signal |
|-------|----------------|--------|
| **AST-aware tooling** | #22745, #22746 | Epic tracking; investigates precise code navigation |
| **Agent self-awareness** | #21968, #21432 | Skills/sub-agents underutilized; CLI flags/hotkeys documentation needed |
| **Security hardening** | #26525, #26522 | Auto Memory redaction and retry logic |
| **OS sandboxing** | #19873 | Zero-dependency sandboxing leveraging model bash affinity |
| **Browser agent robustness** | #22267, #22232, #21983 | Wayland support, settings overrides, session recovery |

---

## Developer Pain Points

1. **Agent hangs in interactive mode** — Multiple reports of generalist agent and browser subagent hanging indefinitely; users resort to workarounds like disabling subagents entirely.

2. **Authentication failures in headless/WSL environments** — The auth loop bug (#29448) highlights persistent friction for developers on non-standard setups.

3. **File operation race conditions** — Concurrent writes from parallel sub-agents cause silent data loss; the serialization fix (#29499) is a critical incoming improvement.

4. **Context bloat from binary assets** — Fuzzy matching in `read-many-files` inadvertently includes images/PDFs, inflating token usage significantly.

5. **Browser subagent environment gaps** — Wayland and configuration override issues limit cross-platform reliability.

6. **Auto Memory reliability** — Low-signal session handling and redaction timing create both security and efficiency concerns.

---

*Digest generated from GitHub data for 2026-09-26. Subject to all data limitations in source.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest for 2026-09-26 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Looking at the data:
1. **Latest Releases**: v1.0.89-4 - Added routing tier suggestions and quick feedback prompts
2. **Latest Issues**: 44 total, showing 30 top by comment count
3. **Latest Pull Requests**: None in the last 24h

I need to create a structured digest with:
1. Today's Highlights (2-3 sentences)
2. Releases (if any)
3. Hot Issues (10 noteworthy)
4. Key PR Progress (10 important - but there are 0 PRs, so I may need to note this)
5. Hot Discussions (up to 10 - no discussion data provided)
6. Feature Request Trends
7. Developer Pain Points

Since there are no PRs in the last 24h and no discussion data, I'll note those accordingly.

Let me select the top 10 issues based on comment count and importance:
1. #4438 - disable-model-invocation makes skill unreachable (8 comments, 11 👍)
2. #232 - Add System Prompt parameter (6 comments, 11 👍)
3. #4929 - Auth token stops refreshing (6 comments, 0 👍)
4. #4775 - Mission Control dashboard links 404 (6 comments, 2 👍)
5. #3501 - Scroll bar text alignment (6 comments, 9 👍) - CLOSED
6. #3123 - /research can't write research report (6 comments, 6 👍) - CLOSED
7. #2627 - Configurable system prompt (5 comments, 20 👍) - high thumbs up!
8. #4089 - Atlassian MCP OAuth succeeds but no tools (5 comments, 0 👍) - CLOSED


9. #2199 - Add Ctrl+Backspace (5 comments, 7 👍) - CLOSED
10. #4103 - Plugin marketplace breaks git credentials (4 comments, 4 👍) - CLOSED

I'll prioritize open issues to highlight the most pressing concerns for developers. The open issues reveal critical problems with skill invocation, authentication, and system configuration that need immediate attention. Key themes include model invocation limitations, authentication challenges, and user interface improvements.

The most significant issues involve:
- Skill invocation restrictions
- Authentication token problems
- System prompt flexibility
- Dashboard functionality
- User input controls

These open issues suggest ongoing development challenges in Copilot CLI's core functionality and user experience.</think>

# GitHub Copilot CLI Community Digest

**Date:** 2026-09-26

---

## 1. Today's Highlights

GitHub Copilot CLI v1.0.89-4 shipped with routing tier auto-suggestions and post-switch feedback prompts, improving model switching UX. Meanwhile, the community is actively debugging a critical authentication regression where long-running sessions permanently lose auth tokens (#4929), and developers are requesting system prompt configurability to reduce token overhead (#2627, 20 👍).

---

## 2. Releases

**v1.0.89-4** (2026-09-26)

**Added:**
- Auto suggests a routing tier with shortcut/click switching
- Quick feedback prompt appears after switching away from a manually selected model

**Improved:**
- Direct plugin installs can now be enabled and disabled; disabled plugins stop loading

---

## 3. Hot Issues

| # | Issue | Summary | Reactions |
|---|-------|---------|-----------|
| **#4438** | [disable-model-invocation makes skill unreachable](https://github.com/github/copilot-cli/issues/4438) | Skills with `disable-model-invocation: true` are completely inaccessible via `copilot skill list` and model tool—even explicit invocation returns "Skill not found" | 👍 11 |
| **#232** | [Add System Prompt parameter for Copilot-CLI](https://github.com/github/copilot-cli/issues/232) | Request for `--system-prompt` flag to pass global instructions outside repo-specific files | 👍 11 |
| **#4929** | [Process-local auth token stops refreshing](https://github.com/github/copilot-cli/issues/4929) | Long-running CLI processes permanently lose authentication; `/login` doesn't recover; requires full restart | 👍 0 |
| **#4775** | [Mission Control dashboard links 404](https://github.com/github/copilot-cli/issues/4775) | Dashboard links to `/copilot/tasks/<uuid>` but sessions actually live at `/agents/tasks/<uuid>` | 👍 2 |
| **#2627** | [Configurable system prompt](https://github.com/github/copilot-cli/issues/2627) | System prompt consumes ~20,500 tokens at session start (~10% of 200K window); request to reduce overhead | 👍 **20** |
| **#4680** | [CLI sends wrong model ID to custom OpenAI endpoint](https://github.com/github/copilot-cli/issues/4680) | CLI sends `gpt-5.4-nano` instead of configured custom model name, killing sessions | 👍 0 |
| **#4960** | [Enterprise-managed custom model listed but not selectable](https://github.com/github/copilot-cli/issues/4960) | Custom enterprise models show in `/model` picker but cannot be selected | 👍 0 |
| **#4710** | [Runaway file-search thread consumes CPU while idle](https://github.com/github/copilot-cli/issues/4710) | Background `copilot-file-search` thread pins CPU and writes unbounded logs during idle sessions | 👍 0 |
| **#4907** | [MCP reconnect notifications flood conversation](https://github.com/github/copilot-cli/issues/4907) | Periodic MCP reconnection messages spam conversation history even when idle | 👍 0 |
| **#4969** | [Plugin marketplace add fails if description > 1024 chars](https://github.com/github/copilot-cli/issues/4969) | Strict Zod validation rejects entire marketplace if any single plugin description exceeds 1024 chars | 👍 0 |

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

---

## 5. Hot Discussions

No discussion data was provided in the source data.

---

## 6. Feature Request Trends

Based on issue analysis, the community is primarily requesting:

| Theme | Related Issues |
|-------|----------------|
| **System Prompt Customization** | #232, #2627 — Reduce token overhead; add global `--system-prompt` flag |
| **Model/Agent Flexibility** | #4438, #4637, #3138, #3053 — Better skill invocation control; model switching without losing drafts; reasoning effort selection |
| **Cross-Platform/Integration** | #4082 — Session sync between CLI and Desktop app; #4089 Atlassian MCP tool exposure |
| **Input/UX Improvements** | #2199 — Ctrl+Backspace word deletion; #3501 scroll bar alignment fixes |
| **Plugin/Extension System** | #4103, #4969 — Git credential handling for private repos; marketplace validation robustness |

---

## 7. Developer Pain Points

1. **Authentication Failures** — Long-running sessions lose auth permanently; no recovery without restart (#4929)
2. **Token Overhead** — System prompt + tool definitions consume ~29K tokens before user content, limiting context for large projects (#2627)
3. **Broken Dashboard Links** — Mission Control shows 404 URLs, blocking remote session access (#4775)
4. **Skill Invocation Bugs** — `disable-model-invocation` makes skills unreachable entirely, not just non-automatic (#4438)
5. **Custom Model Misconfiguration** — Wrong model ID sent to OpenAI-compatible endpoints, breaking custom setups (#4680)
6. **MCP Integration Issues** — OAuth succeeds but zero tools exposed; periodic reconnects spam conversation (#4089, #4907)
7. **Resource Leaks** — Idle sessions maintain runaway CPU/disk usage from background threads (#4710)

---

*Generated from github.com/github/copilot-cli data — 2026-09-26*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a community digest for OpenCode based on the GitHub data provided. Let me analyze the data and structure it according to the requirements.

From the data:
- Latest Releases: None in the last 24h
- Latest Issues: 50 items total, showing top 30 by comment count
- Latest PRs: 50 items total, showing top 20

Let me organize this into the requested sections:

1. **Today's Highlights** - Key takeaways
2. **Releases** - None
3. **Hot Issues** - 10 noteworthy issues
4. **Key PR Progress** - 10 important PRs
5. **Hot Discussions** - No discussion data provided, so I'll omit this section
6. **Feature Request Trends** - From issues
7. **Developer Pain Points** - Recurring issues

Let me identify the most important items:

**Hot Issues to highlight:**
1. #6169 - Model TUI picker not displaying all custom provider models (13 comments)
2. #42094 - TUI SIGILL crash when compositor scale jumps to 4 (8 comments)
3. #41249 - Live Subagents sidebar feature request (8 comments)
4. #50236 - ACP session/new catalog ignores config since 2.0.4 (7 comments)
5. #51419 - Incorrect API key error (7 comments, 12 👍)
6. #49847 - ChatGPT OAuth uses wrong API key (7 comments)
7. #41206 - OpenCode Go quota mismatch (6 comments)
8. #34644 - GitHub Copilot provider not found for Student plan (5 comments, 21 👍)
9. #42759 - Grok-4.5 fails via /chat/completions (4 comments)
10. #48826 - Subagent background work marked completed early (4 comments)


11. #50751 - Background subagent completion notification missing (4 comments)
12. #33732 - Desktop installer fails on Windows ARM64 (4 comments)
13. #47553 - Sidecar OOM crash (4 comments)

**Key PRs to highlight:**
1. #51422 - fix(core): resolve configured instructions
2. #49691 - fix(shell): unescape backslash-escaped chars
3. #46225 - fix(app): encode server credentials as UTF-8
4. #46131 - fix(opencode): write auth.json atomically
5. #40149 - fix(opencode): match absolute permission patterns
6. #50955 - fix(core): count websocket stream failures
7. #50994 - fix(core): serialize MCP OAuth refreshes
8. #50911 - fix(config): retain numeric MCP timeout entries
9. #50899 - fix(core): ignore file references in JSONC comments
10. #51414 - refactor(core): share browser opener
11. #51409 - fix(core): decode legacy media
12. #51418 - fix(session-ui): align grouped tool rows
13. #51412 - refactor(util): share browser opener
14. #51417 - fix(tui): honor thinking opacity
15. #51407 - fix(codemode): bound replacement strings
16. #44889 - fix(llm): detect litellm context window exceeded
17. #51413 - fix(core): recover stale event sequence

I've identified several critical areas: problems with the TUI and model picker, challenges around subagent background operations, installer failures, memory issues, and authentication concerns. The PRs indicate ongoing work on configuration handling, OAuth processes, and UI refinements. Now I'll organize these into a structured digest.</think>

# OpenCode Community Digest — 2026-09-26

## Today's Highlights

Today's activity shows intense focus on stability and user experience issues. The most pressing concerns are a TUI crash triggered by display scaling, model picker visibility problems, and background subagent behavior bugs. Multiple PRs are targeting configuration loading, OAuth handling, and UI polish—indicating active refinement ahead of the next release.

**No new releases** were published in the last 24 hours.

---

## Hot Issues

| # | Issue | Summary | Comments | 👍 |
|---|-------|---------|----------|-----|
| **#6169** | [Model TUI picker doesn't display all custom provider models](/anomalyco/opencode/issues/6169) | Custom models defined in `opencode.jsonc` load correctly but don't appear in the `/model` TUI picker—only recently-used models show up. | 13 | 1 |
| **#42094** | [TUI SIGILL crash when compositor scale jumps to 4](/anomalyco/opencode/issues/42094) | OpenCode TUI aborts with `SIGILL` (`ud2`) when the monitor scale changes to 4. Happens at the same instruction pointer each time—a serious runtime crash. | 8 | 3 |
| **#41249** | [Live Subagents sidebar in TUI](/anomalyco/opencode/issues/41249) | Feature request for a live "Subagents" sidebar section as a TUI plugin. Already built as an external npm package; requesting native integration. | 8 | 1 |
| **#50236** | [ACP session/new catalog ignores config providers since 2.0.4](/anomalyco/opencode/issues/50236) | Since v2.0.4, `opencode acp` stops loading custom providers, agents, and default model—only built-in models appear in the catalog. | 7 | 3 |
| **#51419** | [Incorrect API key provided: sk](/anomalyco/opencode/issues/51419) | OpenCode returns 401 errors with "Incorrect API key" when sending prompts. Community is actively debugging credential handling. | 7 | 12 |
| **#49847** | [ChatGPT OAuth uses Zen API key](/anomalyco/opencode/issues/49847) | OpenAI provider is incorrectly bound to the Zen integration, sending a Zen API key to ChatGPT's OAuth-only endpoint. | 7 | 2 |
| **#41206** | [Go quota doesn't match usage history](/anomalyco/opencode/issues/41206) | OpenCode Go weekly/monthly quota display doesn't align with actual usage history—confusing billing visibility. | 6 | 1 |
| **#34644** | [GitHub Copilot provider not found for Student plan](/anomalyco/opencode/issues/34644) | After OAuth, the `github-copilot` provider doesn't appear in the model selector for Copilot Student (Auto-only) plans. | 5 | 21 |
| **#48826** | [Subagent background work marked completed early](/anomalyco/opencode/issues/48826) | V2 subagent with `background: true` reports as completed while work is still running—parent receives premature reply. | 4 | 0 |
| **#47553** | [Sidecar OOM crash](/anomalyco/opencode/issues/47553) | Desktop app sidecar process crashes repeatedly with JavaScript heap out of memory (~3GB+). | 4 | 0 |

---

## Key PR Progress

| # | PR | Summary |
|---|-----|---------|
| **#51422** | [fix(core): resolve configured instructions](/anomalyco/opencode/pull/51422) | Restores the `instructions` config field resolver from V1 that was missing in V2. Closes #51341. |
| **#49691** | [fix(shell): unescape backslash-escaped chars](/anomalyco/opencode/pull/49691) | Fixes shell tool to properly handle backslash-escaped characters in bash path arguments. |
| **#50994** | [fix(core): serialize MCP OAuth refreshes](/anomalyco/opencode/pull/50994) | Prevents race conditions when multiple processes refresh the same MCP OAuth token simultaneously. |
| **#51417** | [fix(tui): honor thinking opacity on collapsed reasoning](/anomalyco/opencode/pull/51417) | Collapsed reasoning now respects `theme.thinkingOpacity` consistently. |
| **#51413** | [fix(core): recover stale event sequence](/anomalyco/opencode/pull/51413) | Fixes durable aggregates becoming permanently unwritable when event sequence falls behind. |
| **#50955** | [fix(core): count websocket stream failures](/anomalyco/opencode/pull/50955) | Improves WebSocket stream failure tracking for idle timeouts and response parsing. |
| **#46225** | [fix(app): encode server credentials as UTF-8](/anomalyco/opencode/pull/46225) | Fixes non-ASCII credential encoding in basic auth headers. |
| **#46131** | [fix(opencode): write auth.json atomically](/anomalyco/opencode/pull/46131) | Prevents credential loss by writing `auth.json` atomically under a lock. |
| **#50911** | [fix(config): retain numeric MCP timeout entries](/anomalyco/opencode/pull/50911) | Preserves numeric timeout values in MCP server entries. |
| **#50899** | [fix(core): ignore file references in JSONC comments](/anomalyco/opencode/pull/50899) | Prevents V2 from parsing `{file:...}` inside JSONC comments as actual file references. |

---

## Feature Request Trends

| Direction | Related Issues |
|-----------|----------------|
| **TUI Enhancements** | Live Subagents sidebar (#41249), Expose V2 composer to plugins (#51209), Element annotation queue (#51421) |
| **Provider Integration** | GitHub Copilot Student support (#34644), OAuth credential handling fixes (#49847, #51419) |
| **Subagent Improvements** | Background work completion handling (#48826, #50751), Main/sub model alignment (#51361) |
| **Local Model Support** | Subagent tool definitions for local models (#51268) |

---

## Developer Pain Points

1. **TUI Stability** — The SIGILL crash on compositor scale changes (#42094) is a critical reliability issue affecting users with high-DPI displays.
2. **Model Picker Visibility** — Custom models not appearing in the picker (#6169) creates confusion despite correct backend loading.
3. **Background Subagent Behavior** — Multiple issues (#48826, #50751) around background task completion and notification indicate architectural gaps in V2 subagent handling.
4. **Configuration Regression** — The ACP catalog ignoring user config (#50236) breaks workflow integrations since 2.0.4.
5. **Memory Issues** — Sidecar OOM crashes (#47553) on desktop hinder long-running sessions.
6. **Credential Handling** — API key and OAuth issues (#51419, #49847) point to ongoing complexity in multi-provider auth.

---

*Generated from GitHub data — anomalyco/opencode*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Pi community digest for 2026-09-26 based on GitHub data. Let me analyze the data provided:

1. **Latest Releases**: None in the last 24h
2. **Latest Issues**: 50 total, showing top 30 by comment count
3. **Latest Pull Requests**: 13 items

I need to create a structured digest with:
1. Today's Highlights
2. Releases (none)
3. Hot Issues (10 noteworthy)
4. Key PR Progress (10 important PRs)
5. Hot Discussions - no discussion data was provided, so I'll omit this
6. Feature Request Trends
7. Developer Pain Points

Let me identify the most important issues and PRs:

**Hot Issues (by comment count and severity):**
1. #10031 - Pi stuck in "Working..." when thinking is stopped with ESC (15 comments) - regression since v0.84.0
2. #7885 - npm search not indexing newly published pi-packages (15 comments) - affects package discovery
3. #9803 - 0.86.0 regression: RPC steer success cannot be correlated (11 comments)
4. #9674 - mistral-conversations: empty content deltas open text blocks (7 comments)
5. #8913 - Fullscreen renderer mouse tracking issue (6 comments)
6. #9980 - OpenRouter cost calculation off by 2-3x (5 comments)
7. #9974 - Pi mishandles Responses API tool calls (5 comments)
8. #9579 - Overflow image recovery exceeds smaller provider limits (5 comments)
9. #10033 - Compaction prompt includes all thinking text (5 comments)
10. #9918 - Codex replays empty signed final answers (5 comments)

**Key PRs:**


I've identified several critical pull requests addressing significant technical challenges. These PRs cover a range of improvements from fixing core exit processes to enhancing OAuth handling and introducing new experimental features. The list includes fixes for terminal output, OAuth client registration, console rendering, and some innovative additions like virtual models and codemode integration.

**Feature Request Trends:**
The feature requests reveal ongoing needs for improved interaction models. Developers are seeking more flexible thinking level controls, enhanced provider integrations, and refined user interface interactions. Key themes include bidirectional thinking level cycling, mouse scroll customization, and comprehensive prompt disposition exposure in RPC responses.

**Developer Pain Points:**
The pain points highlight complex technical challenges in AI interaction. Developers face difficulties with stream handling, context management, and pricing accuracy. Specific areas of frustration include managing thinking text, maintaining streaming robustness, and ensuring accurate cost calculations across different provider models.</think>

# Pi Community Digest — 2026-09-26

## Today's Highlights

The Pi project sees intense bug-fixing activity today with fixes landing for terminal exit behavior and pricing calculations, while several long-standing issues around thinking text handling and compaction continue to generate discussion. A major new PR introduces experimental virtual models and MCP integration.

**No releases** were published in the last 24 hours.

---

## Hot Issues

| # | Issue | Why It Matters | Comments |
|---|-------|----------------|----------|
| [#10031](https://github.com/earendil-works/pi/issues/10031) | **Pi sporadically stuck in "Working..." when thinking is stopped with ESC** — Regression since ~v0.84.0 causing Pi to hang indefinitely. Users must kill with `CTRL+c` and resume via `pi -c`. | [15] |
| [#7885](https://github.com/earendil-works/pi/issues/7885) | **npm search not indexing newly published pi-packages** — Published packages don't appear in `npm search` or the pi.dev/packages gallery, breaking discovery. | [15] |
| [#9803](https://github.com/earendil-works/pi/issues/9803) | **0.86.0 regression: RPC steer success cannot be correlated with extension-handled input** — RPC clients cannot reliably identify which input was queued after steer passes through extension handlers. | [11] |
| [#9674](https://github.com/earendil-works/pi/issues/9674) | **mistral-conversations: empty content deltas open text blocks (GLM 5.x)** — Zero-length content deltas create empty text blocks, causing whitespace issues and 400 errors on replay. | [7] |
| [#8913](https://github.com/earendil-works/pi/issues/8913) | **Fullscreen renderer unconditionally enables mouse tracking with no way to opt out** — The `mouse` option exists internally but is never passed; no CLI flag to disable `?1003` any-event tracking. | [6] |
| [#9980](https://github.com/earendil-works/pi/issues/9980) | **OpenRouter model pricing off by 2-3x for popular open-weights models** — Uses cheapest provider pricing, but actual costs are 2-3x higher when using other providers. | [5] |
| [#9974](https://github.com/earendil-works/pi/issues/9974) | **Pi mishandles Responses API tool calls from llama.cpp** — Executing duplicated and corrupted tool calls due to malformed SSE stream handling. | [5] |
| [#10033](https://github.com/earendil-works/pi/issues/10033) | **Compaction prompt includes all thinking text and exceeds context window** — Serialization includes full thinking blocks, making auto-compaction impossible for long sessions with reasoning models. | [5] |
| [#9918](https://github.com/earendil-works/pi/issues/9918) | **Codex replays empty signed final answers** — Empty or whitespace final-answer items are persisted and replayed, breaking session continuity. | [5] |
| [#9905](https://github.com/earendil-users/pi/issues/9905) | **Anthropic thinking.display always sent as "summarized" with no CLI override** — Users cannot change to "omitted" or omit the field entirely from the CLI. | [4] |

---

## Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| [#10057](https://github.com/earendil-works/pi/pull/10057) | **fix(tui): do not exit process when stdout goes away** — Fixes EPIPE/ECONNRESET handling to avoid false crash reports when terminal disappears. |
| [#10051](https://github.com/earendil-works/pi/pull/10051) | **feat(client): add actionable error mapping for MCP OAuth dynamic client registration** — Detects unsupported OAuth servers and provides user-actionable guidance. |
| [#10050](https://github.com/earendil-works/pi/pull/10050) | **fix(coding-agent): keep extension console output off the interactive TUI** — Prevents `console.error()`/logs from extension code garbling the TUI display. |
| [#10044](https://github.com/earendil-works/pi/pull/10044) | **fix(ai): upgrade openai SDK to 7.19.0** — Adds "fast" service tier support for GPT-6 Fast mode pricing; fixes cost recording at 1x instead of 2x. |
| [#10040](https://github.com/earendil-works/pi/pull/10040) | **feat(coding-agent): Codemode and MCP** — Large PR adding codemode functionality and MCP integration to Pi. |
| [#10039](https://github.com/earendil-works/pi/pull/10039) | **fix(coding-agent): honor truecolor in custom themes** — Resolves color mode from environment before theme construction. |
| [#10037](https://github.com/earendil-works/pi/pull/10037) | **Perf/collapse historical tool output** — Performance optimization for tool output rendering. |
| [#10035](https://github.com/earendil-works/pi/pull/10035) | **Virtual models** — Experimental support for virtual models. |
| [#10027](https://github.com/earendil-works/pi/pull/10027) | **fix(ai,coding-agent): streaming robustness, reasoning clamp, compaction validity, edit recovery** — Series of robustness fixes for OpenAI-compatible providers. |
| [#6933](https://github.com/earendil-works/pi/pull/6933) | **fix(coding-agent): disable undici idle timeout by default for local LLMs** — Changes default from 5 min to disabled to support slow local backends (vLLM, LM Studio, Ollama). |

---

## Feature Request Trends

1. **Configurable TUI behavior** — Mouse scroll step configuration (#9758), fullscreen mouse tracking toggle (#8913), hidden tool rows in transcript (#10011)
2. **Bidirectional thinking level cycling** — Multiple requests (#3790, #6281) for backward-direction shortcut when cycling reasoning levels
3. **Provider pricing accuracy** — OpenRouter cost calculation uses cheapest provider, leading to 2-3x underestimation (#9980)
4. **Prompt/RPC disposition visibility** — Request for `data.disposition` field in RPC responses to distinguish handled vs queued prompts (#9098)
5. **TypeScript 7 migration** — Replace `@typescript/native-preview` and deprecated packages with stable TypeScript 7 (#9965)

---

## Developer Pain Points

- **Thinking text in compaction** — Serialization includes all thinking blocks, making auto-compaction fail for long sessions with reasoning models (#10033)
- **Session persistence gaps** — Session files not written until first assistant message; first-turn failures lose entire session (#10000)
- **Pricing errors** — OpenRouter cost calculation inaccurate; GPT-6 Fast tier records wrong price (#9980, #10034)
- **Terminal/stdout handling** — Process exits on stdout failure, making lost terminals look like crashes (#10056, fixed in #10057)
- **Tool call rendering bugs** — String concatenation instead of numeric addition for `read` tool line numbers (#9887)
- **Streaming robustness** — Multiple issues with SSE stream handling, empty responses, and turn boundary errors (#9974, #9918, #10048)

---

*Generated from GitHub data — 2026-09-26*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a Qwen Code community digest based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

1. **Latest Releases (last 24h)**
- v0.24.6: Release v0.24.6
- v0.24.5-nightly.20260925.c3a4058a0c: Release v0.24.5-nightly

2. **Features**
- feat(sdk-java): Add the Hosted Harness private client (#12654)
- Other nightly release details

3. **Latest Issues** (44 total, showing top 30):
Let me pick 10 noteworthy ones:
- #12380: proposal(serve): Define Managed Agent dual-path architecture and staged delivery (21 comments)
- #472: is_background missing property and isn't boolean (14 comments)
- #11872: Web Terminal shows "[Error: PTY not available]" (14 comments)
- #12416: Remote-SSH: every POST /session fails with `write EPIPE` / `BridgeChannelClosedError` (12 comments)
- #8586: Track activeWork and background Agent recovery (10 comments)
- #8097: Background agent coordination gap (9 comments)
- #12589: Feature request: optional System One Decision Gate (6 comments)
- #12169: Batch API uploads bypass the pinned dispatcher (5 comments)
- #10603: ToolSearch will trigger full-prompt reprocessing (5 comments)
- #12679: Fresh global install ships vendored ripgrep at 0644 (4 comments)
- #12699: web_fetch: https-upgrade fallback misses EHOSTUNREACH/ENETUNREACH (4 comments)
- #12683: PreToolUse hook decisions race (4 comments)


- #12668: Self-update drops execute bit on vendored ripgrep binaries (4 comments)
- #12687: Update failed (4 comments)
- #11069: Show Agent Team teammates in the existing live agent roster (4 comments)

4. **Pull Requests** (50 total):
I notice a significant number of recent pull requests addressing security and system improvements. The PRs focus on enhancing system robustness, fixing critical bugs, and introducing new features across different components. Key highlights include the v0.24.6 release, managed agent enhancements, and several critical bug fixes targeting core functionality and system reliability.

The recent PRs demonstrate a comprehensive approach to system improvement, addressing issues like permission handling, workspace management, and performance optimizations. Notably, there are multiple fixes related to ripgrep execution, hook permissions, and runtime environment configurations.</think>

# Qwen Code Community Digest — 2026-09-26

## 1. Today's Highlights

The Qwen Code project shipped **v0.24.6** alongside a batch of managed-agent architecture improvements. The Java SDK now supports Hosted Harness private clients, while the core team closed multiple P1 bugs around execution bit handling for vendored tools (ripgrep) and PreToolUse hook race conditions. The Managed Agent proposal (#12380) continues to advance with dual-path architecture definitions and workspace binding contracts now merged.

---

## 2. Releases

| Version | Summary |
|---------|---------|
| **v0.24.6** | Standard release — see changelog for full details. |
| **v0.24.5-nightly.20260925.c3a4058a0c** | Nightly build from 2026-09-25. |

**SDK Updates:**
- `sdk-typescript` v0.1.15 released on 2026-09-24.

---

## 3. Hot Issues

| # | Issue | Priority | Why It Matters | Comments |
|---|-------|----------|----------------|----------|
| [#12380](https://github.com/QwenLM/qwen-code/issues/12380) | **proposal(serve): Define Managed Agent dual-path architecture and staged delivery** | P2 | Proposes a staged Managed Agent architecture with durable sessions, workspace bindings, and recoverable tool executions. This is a foundational design for multi-agent orchestration. | 21 |
| [#472](https://github.com/QwenLM/qwen-code/issues/472) | **is_background missing property and isn't boolean** | — | Long-standing bug where `is_background` validation fails even after updating memory documentation. Affects tool configuration. | 14 |
| [#11872](https://github.com/QwenLM/qwen-code/issues/11872) | **Web Terminal: PTY not available on macOS** | P1 | Web Terminal's PTY creation fails because `@lydell/node-pty` is declared but not bundled, and macOS code signing blocks locally installed prebuilds. | 14 |
| [#12416](https://github.com/QwenLM/qwen-code/issues/12416) | **Remote-SSH: POST /session fails with `write EPIPE` / `BridgeChannelClosedError`** | P1 | Every session creation via the chat panel fails in Remote-SSH companion mode (v0.24.2), while the bundled CLI works standalone. | 12 |
| [#8586](https://github.com/QwenLM/qwen-code/issues/8586) | **Track activeWork and background Agent recovery** | P2 | Requests explicit `activeWork` tracking for deep daemon health and recovery paths for background agents that outlive their foreground prompt. | 10 |
| [#8097](https://github.com/QwenLM/qwen-code/issues/8097) | **Background agent coordination gap** | P2 | Multiple background Explore subagents suffer duplicate work, premature completion, and non-interactive `send_message` failures. | 9 |
| [#12589](https://github.com/QwenLM/qwen-code/issues/12589) | **Feature request: optional System One Decision Gate** | P3 | Proposes a fast classification layer (von-install + /superfast) to avoid waking the full System Two LLM for cheap decisions like "is this a chat message?" | 6 |
| [#12679](https://github.com/QwenLM/qwen-code/issues/12679) | **Fresh global install ships vendored ripgrep at 0644** | P1 | Fresh installs ship ripgrep binaries without execute bits, and no self-update heal path restores them. | 4 |
| [#12683](https://github.com/QwenLM/qwen-code/issues/12683) | **PreToolUse hook decisions race: last-completed hook wins** | P1 | When multiple hooks match a tool call, a `deny` can be silently overridden by another hook's `allow` — security race condition. | 4 |
| [#12699](https://github.com/QwenLM/qwen-code/issues/12699) | **web_fetch: https-upgrade fallback misses EHOSTUNREACH/ENETUNREACH** | P3 | Plain-http hosts unreachable on port 443 are never retried after https upgrade fails. | 4 |

---

## 4. Key PR Progress

| PR | Title | Type | Significance |
|----|-------|------|---------------|
| [#12722](https://github.com/QwenLM/qwen-code/pull/12722) | **chore(release): v0.24.6** | Release | Automated release syncing package.json and CHANGELOG.md. |
| [#12709](https://github.com/QwenLM/qwen-code/pull/12709) | **feat(managed-agent): admit workspace-bound sessions without execution** | Feature | Adds W0b admission slice for Managed Agent Sessions — allows creating sessions bound to a workspace without immediate execution. |
| [#11799](https://github.com/QwenLM/qwen-code/pull/11799) | **feat(computer-use): let a remote session use your desktop through a node_repl relay** | Feature | Enables Qwen Code on a headless Linux server to use Computer Use on a user's Mac via a node_repl relay. |
| [#12693](https://github.com/QwenLM/qwen-code/pull/12693) | **feat(core): Durable Managed Session journal and failover** | Feature | Adds semantic session authority, JSONL/HTTP storage adapters, checkpoints, and transcript projection for durable sessions. |
| [#12692](https://github.com/QwenLM/qwen-code/pull/12692) | **feat(managed-agent): Spring control plane and dual-path WebShell** | Feature | Splits the Spring Managed Agent control plane and opt-in Java Managed WebShell panel; persists tenant-scoped sessions. |
| [#12689](https://github.com/QwenLM/qwen-code/pull/12689) | **fix(core): rank PreToolUse permissionDecision most-restrictive in hook aggregation** | Bug Fix | Fixes hook aggregation to use most-restrictive decision (deny > ask > allow) instead of last-config-wins. |
| [#12681](https://github.com/QwenLM/qwen-code/pull/12681) | **feat(sdk-java): Add the W0a Managed Workspace binding contract** | Feature | Implements slice W0a of Managed Agent proposal — binds a new Session to a Workspace. |
| [#12673](https://github.com/QwenLM/qwen-code/pull/12673) | **fix(cli): restore ripgrep exec bit on managed npm update activation** | Bug Fix | Fixes vendored ripgrep arriving non-executable after self-update by restoring the exec bit on activation. |
| [#12680](https://github.com/QwenLM/qwen-code/pull/12680) | **perf(cli): keep running in place when env files only hold model credentials** | Perf | CLI no longer reboots itself when `.env` files contain only model credentials/endpoints. |
| [#12559](https://github.com/QwenLM/qwen-code/pull/12559) | **fix(cli): match ink's OpenTUI popup geometry and completion truncation** | Bug Fix | Aligns OpenTUI popup rendering with ink's clipped geometry and truncates completion dropdowns properly. |

---

## 5. Hot Discussions

*(No discussion data provided in the source.)*

---

## 6. Feature Request Trends

Based on the issue and PR activity, the following feature directions are in highest demand:

1. **Managed Agent Architecture** — Dual-path session management, workspace bindings, durable journal/failover, and background agent recovery are the dominant theme. The W0a/W0b contract definitions are actively being implemented.

2. **Multi-Agent Coordination** — Handling duplicate work, premature completion, and `send_message` failures across background subagents remains an open challenge (#8097).

3. **System One Decision Gate** — Lightweight classification to avoid waking the full LLM for cheap decisions (#12589).

4. **Agent Team Visibility** — Request to show Agent Team teammates in the live agent roster (#11069).

5. **Desktop Relay for Computer Use** — Remote session access to local desktop through node_repl relay (#11799).

---

## 7. Developer Pain Points

| Pain Point | Frequency | Root Cause |
|------------|-----------|------------|
| **Ripgrep exec bit lost on install/self-update** | High (multiple issues) | npm/pnpm pack preserves exec bit only for `bin` entries; fresh installs and self-updates both fail to restore it. |
| **PreToolUse hook race condition** | High | Multiple hooks on one tool call result in last-finished wins — a deny can be silently overridden by an allow. |
| **Remote-SSH session failures** | Medium | `write EPIPE` / `BridgeChannelClosedError` on every POST /session in companion mode; works in standalone CLI. |
| **Web Terminal PTY unavailable on macOS** | Medium | `@lydell/node-pty` not bundled, and macOS code signing blocks prebuilds. |
| **Batch API bypasses pinned dispatcher** | Medium | Batch API uploads call global `fetch` directly, ignoring the configured dispatcher — fails behind proxies/TLS interception. |
| **VP mode content cutoff** | Low | Terminal buffer mode cuts off content at bottom, no scroll. |

---

*Generated from GitHub data — 2026-09-26*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*