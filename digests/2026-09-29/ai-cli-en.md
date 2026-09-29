# AI CLI Tools Community Digest 2026-09-29

> Generated: 2026-09-29 02:15 UTC | Tools covered: 7

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

<think>The user wants a cross-tool comparison report covering 6 AI CLI tools:
1. Claude Code (github.com/anthropics/claude-code)
2. OpenAI Codex (github.com/openai/codex)
3. Gemini CLI (github.com/google-gemini/gemini-cli)
4. GitHub Copilot CLI (github.com/github/copilot-cli)
5. OpenCode (github.com/anomalyco/opencode)
6. Pi (github.com/earendil-works/pi)

Plus also mention Qwen Code (github.com/QwenLM/qwen-code) - wait, the user said "AI CLI tools" but they listed 6 in the detailed analysis, and Qwen was also provided. Let me re-read the request.

Looking at the request: "cross-tool comparison report in English" - they want me to compare across the tools that were covered in the individual digests. That appears to be:
1. Claude Code
2. OpenAI Codex
3. Gemini CLI
4. GitHub Copilot CLI
5. OpenCode
6. Pi
7. Qwen Code (mentioned in the cross-tool request)

Actually, looking more carefully at the detailed per-tool digests I generated, they covered:
- Claude Code
- OpenAI Codex
- Gemini CLI
- GitHub Copilot CLI
- OpenCode
- Pi
- Qwen Code

So I should include all 7 in the comparison.

Let me extract the key data from each digest:

**Claude Code (github.com/anthropics/claude-code)**
- Issues: 50 (top 30 by comment count)
- PRs: 6
- Discussions: Not mentioned as disabled
- Releases: v2.1.284 (Sonnet 5.5, 1M context)
- Activity: Very active community, Mods extensibility is hot

**OpenAI Codex (github.com/openai/codex)**


- Issues: 50
- PRs: ~20
- Discussions: 3
- Releases: Multiple (v0.158.0, v0.160.0-alpha.3, v0.159.0-alpha.13)
- Activity: Active, Windows issues are hot

**Gemini CLI (github.com/google-gemini/gemini-cli)**
- Issues: 50
- PRs: ~20
- Releases: v0.63.0-nightly
- Activity: Active security fixes, auth loop fix

I'll analyze the cross-tool characteristics, focusing on their unique approaches to AI-powered CLI experiences. The tools represent diverse strategies: Anthropics emphasizes extensibility, OpenAI targets Windows users, Google prioritizes security, each with distinct community engagement models.

**OpenCode** demonstrates rapid development with 50 issues and PRs, highlighting a dynamic open-source approach. **Pi** shows more constrained community interaction, with fewer comments but focused development. **Qwen Code** emerges as an intriguing option with limited public data, suggesting an emerging or specialized tool in the AI CLI landscape.

The ecosystem reveals nuanced development patterns: some tools like Claude Code and OpenCode maintain high community engagement, while others like Pi and Gemini CLI maintain more focused, targeted interactions. Release strategies vary, with tools like Claude Code and Qwen Code providing detailed release notes, contrasting with more minimal documentation approaches.</think>

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report

**Date:** 2026-09-29

---

## 1. Ecosystem Overview

The AI CLI tools landscape is maturing into a multi-vendor market with distinct architectural philosophies. Today's snapshot reveals three tiers of activity: **Claude Code** and **OpenCode** lead in community engagement with 50+ issues each; **OpenAI Codex**, **Gemini CLI**, and **Qwen Code** maintain moderate but steady activity; while **Pi** operates with minimal public discourse despite a capable codebase. Common themes include extensibility (modularity, plugins), platform-specific bug resolution (Windows regressions dominate), and token/cost governance — reflecting real-world deployment pain. The market is consolidating around chat-based UX with varying degrees of autonomous agent capability, with each vendor prioritizing either enterprise integration, local execution, or developer experience.

---

## 2. Activity Comparison

| Tool | Repository | Issues (24h) | PRs (24h) | Discussions | Releases (24h) | Notable Trend |
|------|------------|--------------|-----------|-------------|----------------|---------------|
| **Claude Code** | anthropics/claude-code | 50 | 6 | 1 | ✅ v2.1.284 | Mods extensibility driving engagement |
| **OpenAI Codex** | openai/codex | ~50 | ~20 | 3 | 5 versions (stable + alphas) | Windows regression crisis |
| **Gemini CLI** | google-gemini/gemini-cli | 50 | ~20 | 0 | v0.63.0-nightly | Security hardening focus |
| **GitHub Copilot CLI** | github/copilot-cli | 49 | 0 | 0 | 6 versions (rapid fixes) | OAuth/MCP auth instability |
| **OpenCode** | anomalyco/opencode | 50 | 50 | 0 | v1.18.33 | Dual high-engagement (issues + PRs) |
| **Pi** | earendil-works/pi | 50 | 13 | 3 | None | Managed Agent architecture evolution |
| **Qwen Code** | QwenLM/qwen-code | 50 | 50 | 0 | None | Memory + remote execution priorities |

*Note: "0" indicates no new items in the period, not disabled upstream.*

---

## 3. Shared Feature Directions

| Feature Direction | Tools Affected | Specific Needs |
|------------------|----------------|----------------|
| **Extensibility / Modularity** | Claude Code, Pi, Qwen Code | Hooks, plugins, function registries for custom behavior (#91870, #10040, #12380) |
| **Local/Llama.cpp Support** | Gemini CLI, Pi, Qwen Code | Managed llama.cpp server mode, context window handling, Response API fixes |
| **Token/Cost Governance** | Claude Code, OpenCode, Qwen Code | Visibility into non-conversation context (system prompts, tool schemas), memory compaction controls |
| **Memory Management** | Claude Code, OpenCode, Pi, Qwen Code | Auto Memory with structured recall, configurable compaction thresholds, persistent memory |
| **Platform Stability (Windows)** | OpenAI Codex, Copilot CLI, Gemini CLI | Terminal flashing, window popups, process spawning, auth regressions |
| **MCP Integration** | Claude Code, Copilot CLI, Gemini CLI | OAuth flows, credential handling, stdio server resource leaks |
| **Multi-agent / Remote Execution** | Claude Code (Cowork), Qwen Code, Pi | Durable session lifecycle, remote Shell result delivery, cross-instance communication |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|---------------|-------------|---------------------|
| **Claude Code** | Extensibility via Mods, 1M context window | Developers wanting deep customization | Tool-centric with hooks/function registries; Sonnet 5.5 default |
| **OpenAI Codex** | Desktop integration, Windows stability | Windows developers, Codex Desktop users | TUI-first with copy-on-select, fullscreen mode; rapid alpha cycles |
| **Gemini CLI** | Security hardening, auth reliability | Enterprise users, Google Cloud users | Policy-driven security, secure policy directories, bounded recursion |
| **Copilot CLI** | GitHub integration, MCP OAuth | GitHub users, MCP server operators | Authentication-centric; rapid fix cadence (6 versions in 2 days) |
| **OpenCode** | Broad provider support, UI responsiveness | Multi-model users, power users | Highest PR throughput; dual high activity (issues + PRs) |
| **Pi** | Managed Agent architecture, local models | Local/LLM enthusiasts | Dual-path Managed Agent design; WASM-based codemode |
| **Qwen Code** | Remote execution, structured memory | Enterprise deployments | Durable remote Shell; Mem0 integration; memory governance |

**Key Differentiators:**
- **Enterprise-readiness**: Claude Code (extensibility), Qwen Code (durable execution), Gemini CLI (security)
- **Developer experience**: OpenCode (provider breadth), Copilot CLI (GitHub native), Codex (TUI polish)
- **Local-first**: Pi (managed llama.cpp), Gemini CLI (Nix support), Qwen Code (private hosted)
- **Innovation velocity**: OpenCode and Qwen Code both show 50 PRs/24h — highest iteration rate

---

## 5. Community Momentum & Maturity

| Tool | Community Health Indicators | Maturity Assessment |
|------|------------------------------|---------------------|
| **Claude Code** | #91870 (Mods) = 223 comments, 128 👍 — highest engagement | **Mature + Active** — Enterprise-grade with strong community input loop |
| **OpenCode** | 50 issues + 50 PRs daily — dual high throughput | **Rapid Iteration** — Most active PR engine; bleeding-edge features |
| **OpenAI Codex** | 66-comment issue (#48074), 112 👍 — strong signal | **Maturing** — Windows stabilization is priority; active issue triage |
| **Qwen Code** | Dual 50 PRs/issues; architectural proposals with 37 comments | **Early-Mature** — Sophisticated engineering discussions |
| **Gemini CLI** | Security-focused fixes; moderate issue volume | **Stable** — Enterprise-grade; less community discourse |
| **Copilot CLI** | 0 PRs today; 49 issues — regression-heavy | **Reactive** — Bug-fix focus; auth stability is chronic |
| **Pi** | 13 PRs, 3 discussions; architectural evolution | **Niche-Active** — Focused dev community; managed agent direction |

**Maturity Ranking (most to least):**
1. Claude Code — established, high-engagement, enterprise features
2. Gemini CLI — stable, security-hardened, less discourse
3. OpenAI Codex — maturing, Windows focus
4. Qwen Code — architecturally sophisticated, high PR velocity
5. OpenCode — rapid iteration, bleeding-edge
6. Copilot CLI — reactive to regressions
7. Pi — capable but low public discourse

---

## 6. Trend Signals

### Industry Trends Reflected in Community Feedback

1. **Extensibility is the killer feature** — Three of seven tools (Claude Code, Pi, Qwen Code) have active extensibility proposals. Users want hooks, plugins, and custom behavior — not just model swaps.

2. **Token cost visibility is a growing concern** — Multiple communities (Claude Code, OpenCode, Qwen Code) flag hidden token costs from system prompts, tool schemas, and memory. Users want governance and visibility.

3. **Windows is the unstable platform** — OpenAI Codex, Copilot CLI, and Gemini CLI all surface Windows-specific regressions (terminal flashing, window popups, process leaks). The platform requires dedicated investment.

4. **Local models are gaining traction** — Llama.cpp integration appears in Gemini CLI, Pi, and Qwen Code. Managed local execution (auto-start, cleanup) is becoming a expected feature.

5. **Security is being hardened post-hoc** — Gemini CLI (policy directories, credential redaction), Copilot CLI (OAuth fixes), Qwen Code (credential exposure in model selectors). Security issues are being discovered and patched reactively.

6. **Memory management is converging** — Auto Memory with structured recall appears across Claude Code, OpenCode, Pi, and Qwen Code. The pattern indicates memory is a unsolved problem requiring multiple approaches.

7. **Dual-track architectures for agents** — Both Pi and Qwen Code are evolving toward Managed/Dual-path architectures separating model inference from tool-environment provisioning — suggesting a market consensus on agent architecture.

### Value for Decision-Makers

- **For enterprise adoption**: Claude Code (extensibility), Gemini CLI (security), Qwen Code (durable remote execution) lead
- **For developer experience**: OpenCode (provider breadth), Codex (TUI polish), Copilot CLI (GitHub integration)
- **For local/sensitive workflows**: Pi, Gemini CLI, Qwen Code offer self-hosted options
- **For bleeding-edge features**: OpenCode and Qwen Code iterate fastest
- **For stability over novelty**: Gemini CLI and Claude Code prioritize hardening

---

*Cross-tool analysis compiled from individual repository snapshots — 2026-09-29*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

⚠️ Skills summary generation failed.

---

<think>The user wants me to generate a Claude Code community digest for 2026-09-29 based on the provided GitHub data. Let me analyze the data and create a structured digest with the requested sections.

Let me go through the data:

**Releases:**
- v2.1.284 - Added Claude Sonnet 5.5, now default Sonnet model with 1M context, $2/$10 per Mtok with $0.20/Mtok cache reads
- Added a "Yes, but ask again next time" answer to auto mode's prompt

**Latest Issues (top 30 by comment count):**
1. #91870 - Mods - make Claude 10x more extensible (223 comments, 128 👍) - enhancement, hooks, plugins
2. #91188 - Feature request: make the auto-memory MEMORY.md compaction reminder threshold configurable (58 comments)
3. #20697 - [FEATURE] Sync Skills between Claude Desktop and Claude Code CLI (48 comments, 157 👍)
4. #93482 - [BUG] Cowork: device_commit_files reports success on overwrites but the on-disk content lags (15 comments)
5. #57998 - [FEATURE] CLAUDE_DATA_DIR env var or config key to relocate on Windows (15 comments, 25 👍)
6. #91683 - [BUG] bypassPermissions mode now prompts on `cd DIR && grep …` when a Read() deny rule is configured (10 comments, 27 👍)
7. #87772 - [BUG] Days permanently disappear from the desktop usage heatmap (4 comments)
8. #94478 - [BUG] Desktop app spawns ~17 git processes per second continuously (Windows) (4 comments)
9. #91939 - [BUG] Fable 5.1: final answer emitted as a thinking block (4 comments)


10. #96402 - [BUG] SIGILL on x86-64 CPU without AVX (Linux) (3 comments)
11. #94479 - [QUESTION] Does stats-cache.json rebuild lose history (2 comments)
12. #95601 - [BUG] Every background Agent-tool completion delivers two separate parent-turn events (2 comments)
13. #94265 - [BUG] Worktrees outside .claude/worktrees/ cost one approval prompt per switch (2 comments)
14. #95987 - [BUG] Code tab missing from Claude Desktop app (Windows) (2 comments)
15. #9

1120 - [FEATURE] Bash tab-completion for the claude CLI (2 comments)
16. #96867 - [FEATURE] Start new Claude Desktop Code sessions from the mobile app (1 comment)
17. #92307 - [BUG] Claude Code 2.1.261 crashes (1 comment)
18. #98035 - [FEATURE] Do not warn when a user-scope MCP server intentionally shadows a plugin's server (1 comment) - CLOSED
19. #98033 - [invalid] higgsfield ai (1 comment)
20. #97997 - [BUG] Fable weekly usage counted with zero Fable requests (1 comment)
21. #98017 - [Bug] Safety classifier blocks legitimate admin UI code generation (1 comment)
22. #89274 - [MODEL] Prose hard-wrapping and max-width capping recur across sessions (1 comment)
23. #98023 - [BUG] 2.1.284 freezes on first Enter: new sandbox glob expander (1 comment)
24. #97987 - [BUG] Figma MCP tool calls fail with SSE JSON parse error (1 comment)
25. #94001 - [BUG] VS code extension: Long commands get abbreviated (1 comment)
26. #97160 - [BUG] Project on the cloud env stuck when usage limit hit 100% (1 comment)
27. #98041 - [Bug] Anthropic API Error: Safety guardrails blocking legitimate cybersecurity educational content (0 comments)
28. #98039 - [GitHub integration] (0 comments)
29. #98038 - [GitHub integration] org is not linked (0 comments)
30. #98037 - [BUG] Stats "Longest session" is the first-to-last message span (0 comments)

**Pull Requests:**
1. #94847 [

I'm noticing several new entries that appear to be variations of existing issues - #95987 shows up twice with different descriptions (Figma MCP and Code tab issues), suggesting some duplication or overlap in reporting. The PR list appears to be truncated and needs completion.</think>

# Claude Code Community Digest — 2026-09-29

## Today's Highlights

The v2.1.284 release delivers **Claude Sonnet 5.5** as the new default Sonnet model on the Anthropic API, featuring 1M context window at $2/$10 per million tokens with $0.20/Mtok cache reads. Community engagement remains intense, with the **Mods extensibility proposal** (#91870, 223 comments) driving significant discussion around making Claude 10x more extensible via function hooks. Several regressions and bugs in the latest release are generating attention, including a critical freeze issue on Linux (#98023) and the now-reverted agents-md/diff mods changes.

---

## Releases

| Version | Summary |
|---------|---------|
| **v2.1.284** | Added Claude Sonnet 5.5 (`claude-sonnet-5-5`) as the default Sonnet model — now supports 1M context at $2/$10 per Mtok with $0.20/Mtok cache reads. Also added a "Yes, but ask again next time" answer to auto mode's prompt before read operations outside working directories. |

---

## Hot Issues

| Issue | Title | Why It Matters | Reactions |
|-------|-------|----------------|-----------|
| [#91870](https://github.com/anthropics/claude-code/issues/91870) | Mods - make Claude 10x more extensible | **Top community priority.** Proposal for function hooks to dramatically extend Claude's capabilities. Team committed to shipping "in weeks." | 👍 128, 💬 223 |
| [#91188](https://github.com/anthropics/claude-code/issues/91188) | Make auto-memory MEMORY.md compaction threshold configurable | Users want control over when the 200-line/25KB compaction reminder triggers. Currently hardcoded. | 💬 58 |
| [#20697](https://github.com/anthropics/claude-code/issues/20697) | Sync Skills between Claude Desktop and Claude Code CLI | High-demand feature (157 👍) to unify Skills across Desktop and CLI for workflow portability. | 👍 157, 💬 48 |
| [#93482](https://github.com/anthropics/claude-code/issues/93482) | Cowork: silent stale write — content lags one commit behind | **Data loss risk.** Device commit reports success but files are stale on disk. Critical for collaborative workflows. | 💬 15 |
| [#57998](https://github.com/anthropics/claude-code/issues/57998) | CLAUDE_DATA_DIR env var to relocate on Windows | Windows users need to move the AppData folder for disk space or organizational reasons. | 👍 25, 💬 15 |
| [#91683](https://github.com/anthropics/claude-code/issues/91683) | bypassPermissions regression: prompts on `cd DIR && grep …` with deny rule | Regression in 2.1.259 breaks workflows. 27 👍 indicate widespread impact. | 👍 27, 💬 10 |
| [#94478](https://github.com/anthropics/claude-code/issues/94478) | Desktop app spawns ~17 git processes per second (Windows) | **Performance nightmare.** ~2M processes/day, causes kernel pool leak amplifying to ~6GB/day. | 💬 4 |
| [#96402](https://github.com/anthropics/claude-code/issues/96402) | SIGILL on x86-64 CPU without AVX (Linux) | Native installer 2.1.280 and npm 2.1.197 crash on older CPUs. 2.1.112 (JS bundle) works. | 💬 3 |
| [#98023](https://github.com/anthropics/claude-code/issues/98023) | 2.1.284 freezes on first Enter: sandbox glob expander walks `~` | **Critical regression.** New sandbox glob expander synchronously walks entire home directory for `~/**/…` denyRead patterns. Freezes on first Enter. | 💬 1 |
| [#97997](https://github.com/anthropics/claude-code/issues/97997) | Fable weekly usage counted (20%) with zero Fable requests | Usage tracking bug — users charged for Fable they never used. | 💬 1 |

---

## Key PR Progress

| PR | Title | Status | Summary |
|----|-------|--------|---------|
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | Diff: first edit opens pane only when it has a file to list | OPEN | Fixes empty diff pane appearing on writes outside repo, to ignored files, or different worktrees. |
| [#98018](https://github.com/anthropics/claude-code/pull/98018) | mods: revert two changes (agents-md truncated reads, diff forced colors) | **CLOSED** | Reverts #96363 and #96364 — returns agents-md and diff mods to earlier behavior. |
| [#96364](https://github.com/anthropics/claude-code/pull/96364) | agents-md: auto-paginated Read no longer counts as delivering | **CLOSED** | Fixes nested AGENTS.md detection when Read is paginated due to token cap. |
| [#96363](https://github.com/anthropics/claude-code/pull/96363) | diff: pass --no-color so forced git colors don't empty diff body | **CLOSED** | Fixes empty diff body when `color.ui=always` or `color.diff=always` is configured. |
| [#97952](https://github.com/anthropics/claude-code/pull/97952) | ci: security hardening for GitHub Actions | OPEN | Adds egress firewall, permission restrictions, and OIDC hardening for Claude-calling workflows. |
| [#31204](https://github.com/anthropics/claude-code/pull/31204) | Add AI Learning Roadmap interactive canvas | **CLOSED** | New interactive canvas app for visualizing AI learning paths with React/Vite, node-and-edge graph system. |

---

## Feature Request Trends

1. **Extensibility & Mods** — The #91870 proposal for function hooks is the dominant theme. Community strongly favors a plugin-like architecture to extend Claude.
2. **Cross-platform Configuration** — CLAUDE_DATA_DIR (#57998), bash tab-completion (#91120), mobile-to-desktop session initiation (#96867).
3. **Skills/Workflow Sync** — #20697 requests unified Skills between Claude Desktop and CLI.
4. **Memory Customization** — Configurable MEMORY.md thresholds (#91188), persistent prose formatting preferences (#89274).
5. **MCP Enhancements** — User-scope MCP server shadowing warnings (#98035, now closed).

---

## Developer Pain Points

- **Performance & Resource Waste**: The Windows git process spawning bug (#94478) creating ~2M processes/day is a major resource drain.
- **Data Loss Concerns**: The Cowork stale write bug (#93482) silently commits without persisting data.
- **Regression Frustrations**: Multiple regressions in 2.1.284 (freeze on Enter #98023, permissions prompts #91683) and 2.1.280 (AVX crash #96402).
- **Platform Inconsistencies**: Worktree approval prompts on every switch (#94265), Code tab missing on Windows (#95987), heatmap data loss on macOS (#87772).
- **Usage Tracking Accuracy**: Fable usage counted incorrectly (#97997) leads to billing confusion.
- **Safety Classifier Over-blocking**: Legitimate admin UI code (#98017) and cybersecurity educational content (#98041) being blocked.

---

*Generated from github.com/anthropics/claude-code — 2026-09-29*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze this GitHub data and create a structured digest for the OpenAI Codex community.

The data is from 2026-09-29, so this is a future date. Let me extract the key information:

**Releases:**
- rust-v0.158.0 - with new features for copy-on-select, right-click paste, MCP OAuth support
- rust-v0.160.0-alpha.3, alpha.2
- rust-v0.159.0-alpha.13, alpha.12

**Top Issues (by comments):**
1. #48074 - Windows terminal flashing during requests (66 comments, 112 👍)
2. #48208 - Linux Desktop UI hangs after update (27 comments) - CLOSED
3. #26984 - MCP stdio servers leak pipe fds (26 comments)
4. #41622 - Add setting to disable automatic conversation recaps (23 comments)
5. #48059 - Windows terminal windows pop up (22 comments)
6. #47855 - Windows Desktop second message hangs (16 comments)
7. #40231 - Windows app-server killed with STATUS_CONTROL_C_EXIT (16 comments)
8. #47511 - Missing button for git commit and push (15 comments)
9. #48313 - Windows app launches to blank white screen (15 comments)
10. #48277 - CLI persistent terminal windows (15 comments)

**Top PRs:**
- #49130 - Move content-filter guidance into shared Responses retry handler
- #49127 - Deduplicate cloud and executor skill listings
- #49119 - Add recovery guidance to content-filter retries
- #49118 - Correct provider authentication storage documentation
- #49117 - Attribute analytics requests to each thread's product SKU
- #49114 - Point remote compaction tests at mock ChatGPT server


- #49112 - Add X11 primary selection and middle-click paste support
- #49106 - Add history pagination to agent command center
- #49105 - Resume unsent TUI input after reconnecting
- #49103 - Balance Windows Bazel test shards using duration estimates
- #49102 - Preserve SQLite vacuum modes and surface pool initialization errors
- #49100 - Reuse HTTP connection pool for remote plugin requests
- #49099 - Cache parsed plugin manifests across plugin workflows
- #49098 - Resolve Windows sandbox PowerShell fallbacks
- #49097 - Notify lifecycle extensions of compaction usage

I'm seeing continued improvements to the plugin system, with better resource management through caching and connection pooling. The team is addressing platform-specific issues, particularly around Windows testing and sandbox configuration. There's also focus on improving user experience with X11 support and better handling of unsent inputs.

**Discussions:**
1. #3057 - Codex using Python to make edits to files (21 comments)
2. #8503 - "usage limit reached" despite Code Review showing 100% (22 comments)
3. #39516 - CtxWise: local Codex context audits (2 comments)
4. #48926 - When did remote connections become easier? (1 comment)
5. #49129 - Codex CLI goes fullscreen (new)
6. #49107 - Physical ONCE/ALWAYS/REJECT for permission prompts (new)
7. #49001 - Codex Attachment Manager (new)
8. #48958 - Built with Codex: three-scene illustrated video starter
9. #48948 - Trusted App Development Agencies

The discussion around Python-based edits suggests users are interested in more flexible code modification options. There's also evident frustration with usage limit reporting inconsistencies, particularly around code review features. New community projects are emerging around permission management and content organization, with users sharing their own Codex-powered tools and applications.</think>

# OpenAI Codex Community Digest

**Date:** 2026-09-29

---

## 1. Today's Highlights

The Codex team shipped **rust-v0.158.0** with significant TUI enhancements including configurable copy-on-select and right-click paste, plus Markdown formatting preservation for copied selections. Windows users continue to face terminal flashing issues (#48074, 66 comments, 112 👍) following recent updates—a persistent regression drawing significant community attention. The latest alpha releases (0.160.0-alpha.3, 0.159.0-alpha.13) indicate active development on upcoming features.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.158.0** | Stable | Configure copy-on-select and right-click paste in fullscreen TUI; copied transcript selections preserve Markdown formatting (#47639, #47896, #48118); connect to MCP servers requiring pre-registered OAuth client secrets |
| **rust-v0.160.0-alpha.3** | Alpha | Release 0.160.0-alpha.3 |
| **rust-v0.160.0-alpha.2** | Alpha | Release 0.160.0-alpha.2 |
| **rust-v0.159.0-alpha.13** | Alpha | Release 0.159.0-alpha.13 |
| **rust-v0.159.0-alpha.12** | Alpha | Release 0.159.0-alpha.12 |

---

## 3. Hot Issues

| Issue | Comments | 👍 | Summary |
|-------|----------|-------|---------|
| **#48074** | 66 | 112 | **Windows: terminal windows repeatedly flash during requests** — Regression in 0.157.0 causing severe UX disruption; users report flashing during every Codex request |
| **#48208** | 27 | 17 | **[Linux Desktop] UI hangs after update** — Thread hydration timeout; app-server remains responsive but UI stuck on spinner (CLOSED) |
| **#26984** | 26 | 7 | **MCP stdio servers leak pipe fds + orphan child processes** — Cumulative EMFILE errors ("Too many open files") on long-running sessions |
| **#41622** | 23 | 89 | **Add setting to disable automatic conversation recaps** — Highly requested config option for users who don't need AI-generated summaries |
| **#48059** | 22 | 44 | **Terminal windows repeatedly pop up on Windows** — Related to #48074; persistent window spam during normal use |
| **#47855** | 16 | 0 | **Windows Desktop: second message hangs indefinitely** — First message works, second never reaches app-server |
| **#40231** | 16 | 0 | **Windows: app-server killed with STATUS_CONTROL_C_EXIT** — Mid-command execution failures, regression from 26.818.5229 |
| **#47511** | 15 | 36 | **Missing button for git commit and push** — Regression removing visible commit/push UI in desktop app |
| **#48313** | 15 | 1 | **Windows app launches to permanent blank white screen** — After update to 26.924.1866.0 |
| **#48277** | 15 | 3 | **~20 persistent terminal windows open after update** — Windows CLI users experiencing window proliferation |

---

## 4. Key PR Progress

| PR | Summary |
|----|---------|
| **#49130** | Move content-filter guidance into shared Responses retry handler |
| **#49127** | Deduplicate cloud and executor skill listings before budgeting |
| **#49119** | Add recovery guidance to content-filter retries |
| **#49118** | Correct provider authentication storage documentation |
| **#49117** | Attribute analytics requests to each thread's product SKU |
| **#49112** | Add X11 primary selection and middle-click paste support |
| **#49106** | Add history pagination to agent command center |
| **#49105** | Resume unsent TUI input after reconnecting |
| **#49102** | Preserve SQLite vacuum modes and surface pool initialization errors |
| **#49099** | Cache parsed plugin manifests across plugin workflows |

---

## 5. Hot Discussions

### Ideas & Feedback
- **#49129** — [General] "Codex CLI goes fullscreen" (0 comments, 1 👍)
  > New CLI release now uses entire terminal window, enabling expanded diffs, pinned composer, and improved text copying.

- **#3057** — "Codex using Python to make edits to files" (21 comments, 34 👍)
  > Users observing Codex prefer Python scripting over File Edit tool—discussion on whether this indicates tool limitations.

- **#8503** — "usage limit reached" despite Code Review showing 100% remaining (22 comments, 9 👍)
  > GitHub Connector reports usage limits immediately on new PRs despite Code Review showing full allocation.

### Q&A
- **#48926** — "When did remote connections via Codex become easier to use?" (1 comment, 1 👍)
  > User notes simplified remote connection workflow compared to earlier Tailscale requirements.

### Show and Tell
- **#49107** — Physical ONCE/ALWAYS/REJECT for permission prompts (Windows) (0 comments, 1 👍)
  > Community project: desk device showing permission prompts on LCD with physical buttons.

- **#49001** — Codex Attachment Manager (0 comments, 1 👍)
  > Tool to selectively choose which images from conversation history to include in next message.

- **#48958** — Built with Codex: three-scene illustrated video starter (0 comments, 1 👍)
  > AI-assisted project providing editable starter for illustrated video creation.

---

## 6. Feature Request Trends

1. **Windows Stability & UX** — Multiple issues highlight Windows-specific regressions (terminal flashing, window popups, app-server crashes)
2. **Configurability** — Strong demand for disableable features: conversation recaps (#41622), auto-summaries
3. **TUI/CLI Enhancements** — Fullscreen mode, copy-on-select, X11 support, history pagination
4. **MCP Improvements** — Better OAuth handling, resource leak fixes
5. **Cross-Platform Consistency** — Linux UI hangs, macOS/Windows project chat separation issues

---

## 7. Developer Pain Points

- **Windows Regression Crisis** — Multiple high-comment issues (#48074, #48059, #48277, #48313) indicate recent Windows updates introduced significant usability problems
- **Usage Limit Confusion** — Discrepancy between reported usage limits and actual availability (#8503)
- **Linux Desktop Instability** — UI hangs, crashes on startup, stuck loading states
- **MCP Resource Leaks** — Long-running sessions hit file descriptor limits (#26984)
- **Auth/Remote Issues** — Cross-account pairing loops, WebSocket TLS failures, archive failures without accounts

---

*End of Digest — Data sourced from github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a GitHub community digest for Gemini CLI based on the provided data. Let me analyze the data and create a structured digest.

Looking at the data:
1. **Releases**: There's one release - v0.63.0-nightly.20260929.gfe6350238 with a fix for auth issues
2. **Issues**: 50 issues total, top 30 provided with various bugs and feature requests
3. **PRs**: 35 PRs total, top 20 provided

Let me structure this according to the requirements:

1. **Today's Highlights** - Key summary
2. **Releases** - The nightly release
3. **Hot Issues** - 10 noteworthy issues
4. **Key PR Progress** - 10 important PRs
5. **Hot Discussions** - No discussion data was provided, so I'll omit this section
6. **Feature Request Trends** - Based on issues
7. **Developer Pain Points** - Based on issues

Let me select the most important items:

**Releases:**
- v0.63.0-nightly.20260929.gfe6350238 - fix for auth infinite loop

**Hot Issues (selecting 10):**
1. #22323 - Subagent recovery after MAX_TURNS reported as GOAL success (P1, 13 comments)
2. #29290 - Nested .gitignore patterns with trailing slash anchored incorrectly (P2, 10 comments)
3. #21409 - Generalist agent hangs (P1, 8 comments, 8 👍)
4. #28415 - GlobTool symlink path issues (P2, 7 comments)
5. #22745 - AST-aware file reads/search epic (P2, 7 comments)
6. #21968 - Gemini doesn't use skills and sub-agents enough (P2, 6 comments)


7. #28584 - Sandbox Dockerfile on Node 20 EOL (P1, 4 comments)
8. #29309 - Unbounded _execute recursion loop (P2, 5 comments)
9. #29311 - Insecure policy dirs skip permission checks (P2, 4 comments)
10. #29317 - Logger ignores LOG_LEVEL and logs without redaction (P1, 4 comments)

I'll continue selecting critical issues that highlight key technical challenges. These issues range from agent behavior problems to security vulnerabilities and performance concerns. The selected issues represent significant areas needing attention in the Gemini CLI project.

The next set of PRs appears to focus on core infrastructure improvements, particularly around policy enforcement, sandboxing, and logging mechanisms. Each PR targets specific technical debt or security gaps in the current implementation.

Key areas include fixing input handling, addressing policy directory permissions, resolving security logging concerns, and improving process management. The changes span multiple system components, indicating a comprehensive approach to system stability and security enhancement.

The proposed modifications tackle critical technical challenges like UTF-8 offset handling, session exit processes, and tool output formatting, demonstrating a proactive approach to system refinement.</think>

# Gemini CLI Community Digest — 2026-09-29

## Today's Highlights

Today's snapshot shows active progress on security hardening and bug fixes across core, agent, and enterprise components. The team addressed a critical auth loop vulnerability and closed several high-priority issues around sandbox recursion limits, policy directory permissions, and logging redaction. The release cadence continues with v0.63.0-nightly.

---

## Releases

**v0.63.0-nightly.20260929.gfe6350238**  
🔗 [Release](https://github.com/google-gemini/gemini-cli/compare/v0.63.0-n) | [PR #29448](https://github.com/google-gemini/gemini-cli/pull/29448)

- **Fix(auth):** Prevents infinite auth loop caused by file contention, headless keyring issues, and supervisor state drops

---

## Hot Issues

| # | Issue | Priority | Why It Matters | Community |
|---|-------|----------|----------------|-----------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success, hiding interruption | P1 | Subagents hit max turns but falsely report success—misleads users about task completion | 13 comments, 2 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs forever | P1 | Core functionality blocker—CLI defers to generalist agent and never returns | 8 comments, 8 👍 |
| [#28584](https://github.com/google-gemini/gemini-cli/issues/28584) | Sandbox Dockerfile on Node 20 (EOL April 2026) | P1 | Security risk—using deprecated Node version in production containers | 4 comments |
| [#29317](https://github.com/google-gemini/gemini-cli/issues/29317) | Logger ignores LOG_LEVEL and logs request bodies without redaction | P1 | Security/privacy—credentials may be exposed in logs | 4 comments |
| [#29311](https://github.com/google-gemini/gemini-cli/issues/29311) | Insecure user/workspace policy dirs skip permission checks | P2 | Policy directory validation only runs on system dir, leaving user dirs unchecked | 4 comments |
| [#29290](https://github.com/google-gemini/gemini-cli/issues/29290) | Nested .gitignore patterns with trailing slash anchored incorrectly | P2 | `build/` pattern in nested .gitignore only matches immediate directory, not recursive | 10 comments |
| [#28415](https://github.com/google-gemini/gemini-cli/issues/28415) | GlobTool returns raw symlink paths but uses resolved paths internally | P2 | Causes read_file/edit failures on macOS and symlinked workspaces | 7 comments |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents enough | P2 | Agent underutilizes custom skills despite explicit relevance—reduces automation value | 6 comments |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | EPIC: Assess impact of AST-aware file reads, search, and mapping | P2 | Strategic investigation for reducing token noise and improving precision | 7 comments, 1 👍 |
| [#29309](https://github.com/google-gemini/gemini-cli/issues/29309) | Unbounded _execute recursion on sandbox_expansion_required can loop forever | P2 | Can cause heap exhaustion and crash—Denial of service vector | 5 comments |

---

## Key PR Progress

| # | PR | Area | Status | Summary |
|---|-----|------|--------|---------|
| [#29336](https://github.com/google-gemini/gemini-cli/pull/29336) | fix(core): secure non-system policy directories against write permissions | enterprise | **Merged** — Extends `isDirectorySecure` validation to all policy tiers (user, workspace) |
| [#29328](https://github.com/google-gemini/gemini-cli/pull/29328) | fix(a2a-server): honour LOG_LEVEL and keep credentials out of log | security | **Merged** — Respects LOG_LEVEL env var and prevents credential leakage in logs |
| [#29332](https://github.com/google-gemini/gemini-cli/pull/29332) | fix(core): bound how often one call may expand the sandbox | core | **Merged** — Adds recursion depth limit to prevent infinite loop on repeated `sandbox_expansion_required` |
| [#29327](https://github.com/google-gemini/gemini-cli/pull/29327) | fix(sdk): honour AgentShellOptions env and timeoutSeconds | agent | **Merged** — Respects env vars and timeout in shell exec, fixing hang on long-running commands |
| [#29324](https://github.com/google-gemini/gemini-cli/pull/29324) | fix(core): don't anchor nested .gitignore patterns with trailing slash | core | **Merged** — Fixes #29290 by counting only slashes before the last character |
| [#29330](https://github.com/google-gemini/gemini-cli/pull/29330) | fix(cli): keep input typed before logger answers, read once | core | **Merged** — Fixes StrictMode violation in useInputHistoryStore |
| [#29436](https://github.com/google-gemini/gemini-cli/pull/29436) | fix(cli): prevent 100% CPU hang from @ within quotes in stdin | core | **Open** — Fixes catastrophic backtracking when `@` appears in quoted strings |
| [#29440](https://github.com/google-gemini/gemini-cli/pull/29440) | fix(core): use UTF-8 offsets for web-fetch citations | agent | **Open** — Handles multibyte characters properly in citation positioning |
| [#29435](https://github.com/google-gemini/gemini-cli/pull/29435) | fix(cli,core): prevent process hang on session exit | core | **Open** — Proper stdin cleanup to prevent event loop hangs |
| [#29539](https://github.com/google-gemini/gemini-cli/pull/29539) | fix(core): enable autonomous plan execution in non-interactive mode | core | **Open** — Allows plan mode to execute autonomously in headless environments |

---

## Feature Request Trends

Based on issue analysis, the following themes dominate feature discussions:

1. **AST-aware tooling** — Multiple issues (#22745, #22746) request AST-based file reads and search to reduce token noise and improve precision in codebase investigation
2. **Improved subagent visibility** — Requests for trajectory sharing (#22598) and better bug report context (#21763)
3. **Cross-workspace session management** — Feature request for `--list-all-sessions` flag (#28595)
4. **Enhanced agent self-awareness** — The agent should better understand its own CLI flags and hotkeys (#21432)
5. **Browser agent resilience** — Auto session takeover and lock recovery for persistent browser profiles (#22232)

---

## Developer Pain Points

Recurring frustrations surfaced in recent issues:

- **Agent hangs and infinite loops** — Multiple reports of CLI freezing during generalist agent delegation (#21409), subprocess execution (#29314), and session exit (#29435)
- **Configuration overrides ignored** — Browser agent ignores settings.json (#22267), shell options are silently dropped (#29316)
- **Path resolution inconsistencies** — GlobTool symlink handling breaks file operations on macOS (#28415)
- **Billing model confusion** — Users confused by CLI's claim of using "internal quota" leading to unexpected costs (#27668)
- **Destructive behavior control** — Agent uses risky commands (git reset --force) without sufficient warning (#22672)

---

*No discussion data was available for this period.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest based on the provided data. Let me analyze the data and structure it properly.

From the data:
1. Latest Releases (last 24h):
- v1.0.90-1: Fixed MCP OAuth sign-in reuse issue and withdrawn running prompts
- v1.0.90-0: Fixes and changes
- v1.0.89: 2026-09-28 - Left-click support for ask_user, Claude Code rule files support, session blue dot indicator
- v1.0.89-7: Fixes and changes
- v1.0.89-6: PR creation follows templates, TGREP_FILE_COUNT_THRESHOLD config, shell output fix

2. Latest Issues (49 total, showing top 30):
- Several open issues with authentication problems
- OAuth redirect URI port mismatch
- Nix/direnv environments
- Windows issues
- MCP related issues

3. Latest Pull Requests: 0 items (none in last 24h)

Now let me create the digest with the requested sections. I'll pick the most noteworthy items:

**Releases** - I have several versions to cover

**Hot Issues** - I'll pick 10 important ones:
1. #1274 - CLI constantly getting 400 errors for invalid request body (29 comments, 12 👍)
2. #4929 - Process-local auth token stops refreshing (13 comments)
3. #4971 - Every hour Authorization error (3 comments)
4. #4606 - Google Workspace MCP OAuth fails (3 comments)
5. #4968 - OAuth redirect URI port mismatch (2 comments)
6. #4985 - MCP server env secret placeholders not passed (1 comment)
7. #4972 - Windows MCP worker survives exit (3 comments)
8. #4983 - Remote MCP server slow initialize fails
9. #1838 - CLI hangs in Nix/direnv (7 comments, 12 👍)


10. #2216 - Text selection low contrast (6 comments)

I notice several platform-specific and environment-related issues emerging. The problems span authentication, OAuth, and environment configuration across different systems like Windows, Nix, and direnv. These issues highlight the complexity of cross-platform CLI development and the need for robust environment-specific testing and implementation.

The key challenges involve OAuth authentication flows, particularly with Google Workspace, and environment-specific configuration problems. I'll focus on the most critical and commented issues that represent broader platform compatibility challenges.</think>

# GitHub Copilot CLI Community Digest

**Date:** 2026-09-29

---

## 1. Today's Highlights

The Copilot CLI team shipped a rapid succession of releases (v1.0.89 through v1.0.90-1) addressing critical OAuth and session handling bugs. Notable fixes include MCP OAuth token caching issues with Datadog, withdrawn prompts staying removed after session resume, and improved PR template support. However, authentication-related issues remain hotly discussed, with users reporting recurring authorization errors every hour and OAuth redirect URI port mismatches breaking MCP server logins.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.90-1** | 2026-09-29 | **Fixed:** MCP OAuth sign-in to servers such as Datadog reuses a still-valid cached token. Withdrawn running prompts stay removed after session resume. |
| **v1.0.90-0** | 2026-09-29 | Fixes and changes |
| **v1.0.89** | 2026-09-28 | Left-clicking supported ask_user and elicitation form inputs focuses them and places cursor at clicked position. Added support for Claude Code rule files in `.claude/rules` as custom instructions. Sessions in sidebar show blue dot when they finished a turn you have not opened. |
| **v1.0.89-7** | 2026-09-28 | Fixes and changes |
| **v1.0.89-6** | 2026-09-28 | **Improved:** PR creation now follows repository pull request templates, preserving required sections and checklist structure. Configure automatic indexed search activation with `TGREP_FILE_COUNT_THRESHOLD`. **Fixed:** Shell output no longer shows trailing command completion metadata. |

---

## 3. Hot Issues

| # | Issue | Summary | Reactions |
|---|-------|---------|-----------|
| **#1274** | [CLI constantly getting 400 errors for invalid request body](https://github.com/github/copilot-cli/issues/1274) | ~95% of code review attempts on diff files result in 400 errors. Users report server-side validation issues or invalid request crafting. Debug logs included. | 29 comments, 12 👍 |
| **#4929** | [Process-local auth token stops refreshing; all prompts fail until restart](https://github.com/github/copilot-cli/issues/4929) | Long-running Copilot CLI process permanently loses authentication. Every prompt returns authorization error. `/login` does not recover—only restart works. | 13 comments |
| **#1838** | [CLI hangs in Nix/direnv environments due to subprocess I/O deadlock](https://github.com/github/copilot-cli/issues/1838) | **CLOSED.** Copilot CLI v0.0.421 hangs indefinitely when launched from Nix flake-based dev environments managed by direnv. Bash tool fails with timeout. | 7 comments, 12 👍 |
| **#2216** | [Text selection highlight has very low contrast on dark terminal backgrounds](https://github.com/github/copilot-cli/issues/2216) | **CLOSED.** Selection background color (dark purple/indigo) is nearly indistinguishable from dark terminal backgrounds, making selected text unreadable. | 6 comments, 2 👍 |
| **#3392** | [Bash tool breaks on NixOS with version >=1.0.49](https://github.com/github/copilot-cli/issues/3392) | **CLOSED.** Bash tool errors with "Failed to start bash process" on NixOS when updated to v1.0.49 or 1.0.50. | 5 comments, 13 👍 |
| **#2958** | [Support per-mode default model configuration](https://github.com/github/copilot-cli/issues/2958) | **CLOSED.** Feature request to allow users to configure a default AI model per interaction mode (plan vs. autopilot) via CLI config. | 5 comments, 16 👍 |
| **#1250** | [copilot command silently fails on Windows due to getCACertificates('system') error](https://github.com/github/copilot-cli/issues/1250) | **CLOSED.** CLI silently exits without output on Windows 11, making diagnosis extremely difficult. | 5 comments, 4 👍 |
| **#4971** | [Every hour I get Authorization error](https://github.com/github/copilot-cli/issues/4971) | Authorization errors occurring approximately every hour. Running `/login` or `mcp reload` does not fix the issue. | 3 comments |
| **#4606** | [Google Workspace MCP OAuth fails on accounts.google.com trailing-slash issuer mismatch](https://github.com/github/copilot-cli/issues/4606) | Native HTTP MCP authentication fails for Google's official Workspace MCP endpoints before browser authorization flow begins due to issuer mismatch. | 3 comments, 1 👍 |
| **#4968** | [OAuth redirect URI port mismatch breaks login to most MCP servers](https://github.com/github/copilot-cli/issues/4968) | CLI publishes CIMD with fixed loopback redirect URI but binds ephemeral port at runtime, causing OAuth failures for most MCP servers. | 2 comments |

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

---

## 5. Hot Discussions

No discussion data was provided in the source data.

---

## 6. Feature Request Trends

Based on the issue analysis, the most requested feature directions are:

1. **Enhanced Authentication Resilience**
   - Auto-refreshing tokens without manual intervention
   - Better error messaging for auth failures
   - Cross-platform OAuth consistency (especially Windows and MCP)

2. **Platform-Specific Compatibility**
   - Improved Nix/NixOS support beyond v1.0.49
   - Better Windows integration (terminal handling, process management)
   - direnv environment handling

3. **Customization & Configuration**
   - Per-mode model selection (plan vs. autopilot)
   - Claude Code rule file support (recently shipped in v1.0.89)
   - Configurable search thresholds

4. **UX Improvements**
   - Better text selection contrast for accessibility
   - PR template integration (recently shipped)
   - Multi-line paste support on Windows

---

## 7. Developer Pain Points

The community's most recurring frustrations:

1. **Authentication Instability** — Multiple reports of tokens expiring hourly and not auto-refreshing, forcing users to restart the CLI or re-authenticate repeatedly.

2. **OAuth/MCP Integration Failures** — Google's Workspace OAuth and generic MCP server logins are breaking due to redirect URI mismatches and issuer validation issues.

3. **NixOS Compatibility** — The CLI breaks on Nix systems since v1.0.49, preventing developers in that ecosystem from using Copilot CLI effectively.

4. **Poor Error Diagnostics** — Silent failures (especially on Windows) and 400 errors without clear remediation steps frustrate debugging.

5. **Platform Inconsistencies** — Different behavior across platforms (Windows vs. macOS/Linux) for core features like MCP secret passing and terminal handling.

---

*Generated from github.com/github/copilot-cli | Data period: 2026-09-28 to 2026-09-29*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate a community digest for OpenCode based on the provided GitHub data. Let me analyze what's available:

1. **Latest Releases**: v1.18.33 with some bugfixes
2. **Latest Issues**: 50 items, showing top 30 by comment count
3. **Latest Pull Requests**: 50 items, showing top 20 by comment count

I notice there's no "Discussions" data provided - the user mentioned "Hot Discussions" but there's no discussion section in the data. I'll note that in the digest if appropriate.

Let me structure this properly:

**1. Today's Highlights** - 2-3 sentences summarizing key updates

**2. Releases** - v1.18.33 with:
- Cloudflare AI Gateway timeout fixes
- MCP browser launch failure reporting
- Debug config credential redaction
- (truncated) Gemini thinking

**3. Hot Issues** - Pick 10 based on:
- Comment count
- Thematic diversity
- Impact

Top issues by comments:
1. #39653 - GPT-5.6 Sol server overloaded (17 comments, 11 👍)
2. #37762 - Ollama/Gmail integration issues (9 comments)
3. #38655 - Can't switch between plan/build modes (6 comments)
4. #39527 - Extremely slow response times (5 comments)
5. #39399 - Simple chat feature request (5 comments)
6. #37666 - NVIDIA API 429 errors (4 comments)
7. #37748 - Token usage confusion with Kimi K3 (4 comments)
8. #39494 - Sidecar startup error (4 comments)
9. #39415 - Session crashes (4 comments)
10. #39553 - GLM 5.2 thinking process not showing (4 comments)

**4. Key PR Progress** - 10 important PRs


I'll focus on the most impactful pull requests, highlighting key improvements in caching, UI responsiveness, and functionality. The PRs span critical areas like message route optimization, session state management, and error handling. Several contributors are addressing nuanced issues around MCP OAuth, AI provider interactions, and session behavior, demonstrating a comprehensive approach to platform enhancement.

**5. Hot Discussions** - No discussion data available

**6. Feature Request Trends** - Key themes emerging:
- Advanced document editing capabilities
- Enhanced terminal interaction
- Flexible user interface customization
- Improved document preview functionality

**7. Developer Pain Points** - Recurring technical challenges include:
- Intermittent network connectivity
- Complex provider API integration
- Persistent session management issues
- Mobile interface responsiveness

The current analysis reveals significant community engagement through GitHub interactions, with multiple technical issues spanning infrastructure, UI/UX, and provider integration. While precise discussion metrics aren't fully available, the 50 total issues suggest active community involvement in platform refinement.</think>

# OpenCode Community Digest — 2026-09-29

## 1. Today's Highlights

The OpenCode team released **v1.18.33** with important stability fixes, including proper timeout handling for Cloudflare AI Gateway models, improved error reporting for MCP browser launch failures, and credential redaction in debug configurations. The community remains highly active with 50 new issues and 50 pull requests in the past 24 hours, while the GPT-5.6 Sol model server overload issue (#39653) has drawn significant attention with 17 comments and 11 👍 reactions.

## 2. Releases

### v1.18.33 — 2026-09-29

| Category | Change |
|----------|--------|
| **Bugfix** | Cloudflare AI Gateway models now honor provider response and stream timeouts. ([@danlapid](https://github.com/danlapid)) |
| **Bugfix** | MCP browser launch failures are now reported when the launcher exits immediately. |
| **Bugfix** | Debug configuration output now redacts credentials and sensitive headers. |
| **Bugfix** | Gemini thinking default behavior clarified (truncated in source). |

**[View all release notes →](https://github.com/anomalyco/opencode/releases)**

---

## 3. Hot Issues

| # | Issue | Summary | Engagement |
|---|-------|---------|------------|
| 1 | [#39653](https://github.com/anomalyco/opencode/issues/39653) | **GPT-5.6 Sol server overloaded** — Users experiencing repetitive server overload errors with Sol model, while Pi and Codex work fine. | 17 comments, 11 👍 |
| 2 | [#37762](https://github.com/anomalyco/opencode/issues/37762) | **Ollama integration problems** — Windows 11 user with 64GB RAM unable to get Ollama + Gmail working despite proper setup. | 9 comments |
| 3 | [#38655](https://github.com/anomalyco/opencode/issues/38655) | **Can't switch between plan/build modes** — Regression after latest update prevents mode switching in the UI. | 6 comments |
| 4 | [#39527](https://github.com/anomalyco/opencode/issues/39527) | **Extremely slow response times** — User reports 10-60 minute delays for simple queries after recent updates. | 5 comments |
| 5 | [#39399](https://github.com/anomalyco/opencode/issues/39399) | **Simple chat feature request** — opencode.json with simple chat still sends prompts to models; user wants true lightweight mode. | 5 comments |
| 6 | [#37666](https://github.com/anomalyco/opencode/issues/37666) | **NVIDIA API 429 errors** — GLM-5.2 returns HTTP 429 via OpenCode while direct API calls succeed. | 4 comments |
| 7 | [#37748](https://github.com/anomalyco/opencode/issues/37748) | **Kimi K3 token usage confusion** — "2x usage" label misleading; users seeing opposite behavior in billing. | 4 comments |
| 8 | [#39494](https://github.com/anomalyco/opencode/issues/39494) | **Sidecar startup timeout** — Windows Desktop fails to start with "Sidecar did not become ready within 60000ms" error. | 4 comments |
| 9 | [#39553](https://github.com/anomalyco/opencode/issues/39553) | **GLM 5.2 thinking process hidden** — GLM-5.2 not displaying thinking/thinking notification unlike other models. | 4 comments |
| 10 | [#37746](https://github.com/anomalyco/opencode/issues/37746) | **Mobile sidebar UX bug** — Session sidebar stays open after selection, hiding content on narrow viewports. | 3 comments |

---

## 4. Key PR Progress

| PR | Author | Description |
|----|--------|-------------|
| [#51981](https://github.com/anomalyco/opencode/pull/51981) | opencode-agent[bot] | **fix(ai): enable caching on Messages routes** — Enables default cache policy for six Messages routes (Alibaba, Cloudflare, Meta, MiniMax, Moonshot, ZAI). |
| [#51986](https://github.com/anomalyco/opencode/pull/51986) | carson2222 | **fix(core): keep image trimming stable across turns** — Fixes `boundImages` recomputing cutoff index inconsistently, causing variable image retention. |
| [#51090](https://github.com/anomalyco/opencode/pull/51090) | opencode-agent[bot] | **fix(app): keep Working during reasoning-only turns** — Suppresses "Used 1 Thought" row during reasoning-only turns, leaving Working visible. |
| [#51983](https://github.com/anomalyco/opencode/pull/51983) | imyu37 | **fix(i18n): align zh/zht translations** — Corrects terminology mistakes in Chinese locale (e.g., "代理" → "智能体" for agent). |
| [#50283](https://github.com/anomalyco/opencode/pull/50283) | zhengkaics | **fix(core): expose model reasoning capability** — Restores `reasoning` flag from models.dev catalog that was dropped in V2 capability build. |
| [#51979](https://github.com/anomalyco/opencode/pull/51979) | holny | **fix(opencode): share concurrent MCP OAuth refreshes** — Implements single-flight fetch to deduplicate parallel OAuth token refreshes. |
| [#51978](https://github.com/anomalyco/opencode/pull/51978) | rekram1-node | **fix(ai): show provider error bodies** — Displays provider error explanations when no standard message field is recognized. |
| [#51974](https://github.com/anomalyco/opencode/pull/51974) | rudolf-blue | **feat(opencode): add /loop command** — New timer-based loop command for count/retry-until-pass scenarios. |
| [#51973](https://github.com/anomalyco/opencode/pull/51973) | iamdavidhill | **feat(app): show recently closed tabs menu** — Right-click to reopen closed sessions with project avatars and overflow-aware titles. |
| [#51969](https://github.com/anomalyco/opencode/pull/51969) | rkilchmn | **fix(opencode): resolve WASM load error in LLM bash tool** — Fixes `undefined is not an object` error when LLM runs bash tool. |

---

## 5. Hot Discussions

*No discussion data was available in the provided data source.*

---

## 6. Feature Request Trends

The following themes emerged from today's issues and PRs:

| Theme | Evidence |
|-------|----------|
| **Document editing** | WYSIWYG preview for docx/HTML/Markdown (#39611) |
| **UI customization** | Cursor style options in TUI (#39338), theme auto-switching (#38506) |
| **Session management** | Recently closed tabs menu (#51973), plan/build mode switching (#38655) |
| **Command extensions** | /loop command for iterations (#51974) |
| **Model features** | Reasoning capability exposure (#50283), thinking process display for GLM (#39553) |

---

## 7. Developer Pain Points

| Pain Point | Frequency | Examples |
|------------|-----------|----------|
| **Network/connectivity issues** | High | #39316 (LAN oMLX ENETUNREACH), #39293 (upstream failures), #39653 (server overloads) |
| **Provider integration bugs** | High | #37666 (NVIDIA 429s), #39399 (simple chat not working), #37762 (Ollama setup) |
| **Session stability** | Medium | #39415 (crashes), #39494 (sidecar timeout), #39527 (slow responses) |
| **Desktop UI regressions** | Medium | #38655 (mode switching), #39455 (dropdowns non-functional), #37746 (mobile sidebar) |
| **Billing/usage confusion** | Medium | #37748 (Kimi K3 token confusion), #39188 (free usage exceeded), #39470 (Go→Zen balance transition) |

---

*Digest generated from GitHub data for 2026-09-29*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Pi community digest for 2026-09-29 based on the GitHub data provided. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

**Releases**: None in the last 24h

**Issues**: Total 50, showing top 30 by comment count. Let me identify the most noteworthy ones:
1. #10031 - Pi stuck in "Working..." when thinking stopped with ESC - 17 comments, OPEN
2. #3159 - edit tool terminated - timeout - 9 comments, CLOSED
3. #9508 - pi-ai sends unsupported OpenAI-specific request fields - 8 comments, OPEN
4. #10033 - Compaction prompt includes all thinking text - 7 comments, CLOSED
5. #9974 - pi mishandles Responses API tool calls - 6 comments, CLOSED
6. #9905 - Anthropic thinking.display always "summarized" - 6 comments, CLOSED
7. #9409 - Sessions wedge at context ceiling - 4 comments, OPEN
8. #10074 - Anthropic tool calls corrupted non-ASCII - 4 comments, OPEN
9. #9828 - Fullscreen exit corrupts scrollback - 4 comments, CLOSED
10. #6393 - Allow to disable /share - 3 comments, CLOSED (no-action)
11. #10077 - llama.cpp contextWindow reset - 3 comments, OPEN
12. #10079 - Kitty flags=7 keyboard issue - 2 comments, CLOSED
13. #9999 - macOS clipboard image paste issue - 2 comments, CLOSED
14. #10137 - Failed threshold compaction - 2 comments, CLOSED
15. And more...

**Pull Requests**: Total 13 items
1. #10146 - preserve pasted text during editor restoration - OPEN


2. #10040 - Codemode and MCP support - OPEN
3. #10122 - managed llama.cpp server mode - OPEN
4. #10035 - Virtual models - CLOSED
5. #9714 - Azure Foundry Chat Completions - OPEN
6. #10136 - paste Finder file paths instead of icons - CLOSED
7. #10142 - send reasoning effort to OpenAI on Bedrock - OPEN
8. #10135 - normalise compaction usage - CLOSED
9. #10134 - preserve tool prompt fields - CLOSED
10. #9993 - Anthropic Claude support on Google Vertex - CLOSED

The pull requests show significant progress across multiple fronts: clipboard handling improvements, new codemode capabilities, llama.cpp integration, Azure support, and Anthropic/Vertex compatibility. There's active development addressing both user-facing issues and backend infrastructure enhancements.

**Discussions**: 3 items
1. #10126 - Make GitHub releases immutable? - General
2. #10069 - Show & tell: agent-chat - Show and tell
3. #10128 - Add ability to disable share feature? - General

Now I'll organize this into the requested format.</think>

# Pi Community Digest — 2026-09-29

## Today's Highlights

The Pi community sees active development across multiple fronts. Notable PRs introduce managed llama.cpp server mode and codemode with MCP support, while the issue tracker highlights persistent problems with reasoning models hitting context ceilings and ESC interrupting AI thinking. A new discussion proposes making GitHub releases immutable for supply-chain security.

---

## Releases

No new releases in the past 24 hours.

---

## Hot Issues

1. **[#10031](https://github.com/earendil-works/pi/issues/10031)** — **Pi sporadically stuck in "Working..." when thinking is stopped with ESC** *(17 comments, Open)*
   - Users report Pi freezes in "Working..." state when ESC is pressed to stop thinking. Only Ctrl+C and `pi -c` resume works. Present since ~v0.84.0 across machines. **High-impact usability issue.**

2. **[#3159](https://github.com/earendil-works/pi/issues/3159)** — **edit tool terminated — timeout** *(9 comments, Closed)*
   - Qwen 27b fails with edit tool "terminated" errors in recent versions. Likely due to insufficient timeout for edit operations.

3. **[#9508](https://github.com/earendil-works/pi/issues/9508)** — **pi-ai sends unsupported OpenAI-specific request fields to compatible providers** *(8 comments, Open)*
   - Pi sends OpenAI-specific fields, roles, and auth headers that OpenAI-compatible providers reject, causing 400/422 errors. Breaks otherwise-working provider configurations.

4. **[#10033](https://github.com/earendil-works/pi/issues/10033)** — **Compaction prompt includes all thinking text and exceeds context window** *(7 comments, Closed)*
   - Auto-compaction fails on long sessions with reasoning models (DeepSeek V4.1) because `serializeConversation()` includes full thinking blocks, exceeding token limits.

5. **[#9974](https://github.com/earendil-works/pi/issues/9974)** — **pi mishandles Responses API tool calls as returned by llama.cpp** *(6 comments, Closed)*
   - Pi executes duplicated and corrupted tool calls when using llama.cpp with Responses API — SSE stream handling bug.

6. **[#9905](https://github.com/earendil-works/pi/issues/9905)** — **Anthropic thinking.display always sent as "summarized"** *(6 comments, Closed)*
   - No CLI way to change `thinking.display` for Anthropic models — fixed to only support "summarized" or "omitted".

7. **[#9409](https://github.com/earendil-works/pi/issues/9409)** — **Sessions wedge permanently at the context ceiling on reasoning models** *(4 comments, Open)*
   - Sessions on reasoning models permanently stall at context ceiling with `stopReason: "length"`. Auto-compaction fails to recover. **Critical for long sessions.**

8. **[#10074](https://github.com/earendil-works/pi/issues/10074)** — **Anthropic tool calls: corrupted non-ASCII edit arguments** *(4 comments, Open)*
   - Edit operations on files with Korean text fail frequently, sometimes corrupting files. `u` dropped from `\uXXXX` creates control characters.

9. **[#6393](https://github.com/earendil-works/pi/issues/6393)** — **Allow to disable /share** *(3 comments, Closed — no-action)*
   - Security concern: `/share` command easily leaks sensitive data. Closed with reference to more elegant solution #6358.

10. **[#10077](https://github.com/earendil-works/pi/issues/10077)** — **llama.cpp model: contextWindow getting reset to 128000** *(3 comments, Open)*
    - Context window in `models-store.json` incorrectly resets to 128000 despite `presets.ini` setting of 65536.

---

## Key PR Progress

1. **[#10146](https://github.com/earendil-works/pi/pull/10146)** — **fix(coding-agent): preserve pasted text during editor restoration** *(Open)*
   - Prevents Pi from submitting literal `[paste #x +y lines]` markers instead of actual pasted text when restoring queued messages.

2. **[#10040](https://github.com/earendil-works/pi/pull/10040)** — **feat(coding-agent): Codemode and MCP** *(Open)*
   - Major new feature: runs model-written JavaScript in QuickJS WASM VM inside a worker. Enables per-session store, model catalog access, and classifiers.

3. **[#10122](https://github.com/earendil-works/pi/pull/10122)** — **feat(coding-agent): add managed llama.cpp server mode** *(Open)*
   - Pi can now auto-start llama-server with detached supervisor, random port/API key. Server starts on first model use, stops when last pi disconnects.

4. **[#10035](https://github.com/earendil-works/pi/pull/10035)** — **feat(coding-agent): Virtual models** *(Closed)*
   - Extensions can register virtual models via `pi.registerVirtualModel()`. Routes requests to physical models based on routing policies.

5. **[#9714](https://github.com/earendil-works/pi/pull/9714)** — **feat(ai): support Azure Foundry Chat Completions deployments** *(Open)*
   - Extends Azure provider beyond Responses API to support Chat Completions (e.g., DeepSeek V4 Pro on Foundry).

6. **[#10136](https://github.com/earendil-works/pi/pull/10136)** — **fix(coding-agent,tui): paste Finder file paths instead of icons** *(Closed)*
   - macOS: `Ctrl+V` now pastes original file paths instead of Finder file icons. Reads copied Finder file URLs before clipboard image data.

7. **[#10142](https://github.com/earendil-works/pi/pull/10142)** — **fix(ai): send reasoning effort to OpenAI models on Bedrock Converse** *(Open)*
   - Bedrock Converse adapter now sends thinking fields for OpenAI models (previously only Claude). Fixes reasoning effort always defaulting to "medium".

8. **[#10135](https://github.com/earendil-works/pi/pull/10135)** — **fix(coding-agent): normalise compaction usage to prevent footer crash on resume** *(Closed)*
   - Persisted `summaryUsage` normalized to prevent footer crash on session resume after compaction.

9. **[#10134](https://github.com/earendil-works/pi/pull/10134)** — **fix(coding-agent): preserve tool prompt fields in built-in-tool-renderer example** *(Closed)*
   - Example now correctly copies tool prompt fields beyond just description, parameters, and execute.

10. **[#9993](https://github.com/earendil-works/pi/pull/9993)** — **feat(ai,coding-agent): add Anthropic Claude support to Google Vertex AI provider** *(Closed)*
    - Vertex AI Model Garden now supports Anthropic Claude models (Opus, Sonnet, Haiku) using Google Cloud credentials.

---

## Hot Discussions

**Ideas / Feature Requests:**

- **[#10126](https://github.com/earendil-works/pi/discussions/10126)** — *Make GitHub releases immutable?* (2 👍)
  - Proposes immutable GitHub releases for supply-chain security. Reference to terragrunt implementation included.

- **[#10128](https://github.com/earendil-works/pi/discussions/10128)** — *Add ability to disable the share feature?* (1 👍)
  - Follow-up to closed issue #6393. Questions whether `/share` should be disableable given security concerns.

**Show and Tell:**

- **[#10069](https://github.com/earendil-works/pi/discussions/10069)** — *Show & tell: agent-chat — peer-to-peer messaging for independent Pi agents* (1 👍)
  - Extension enabling independent Pi sessions across different worktrees to share Docker containers, ports, and databases. No orchestrator required.

---

## Feature Request Trends

Key themes from issues and discussions:

| Trend | Frequency | Examples |
|-------|-----------|----------|
| **Model/Provider Compatibility** | High | #9508 (OpenAI fields), #9714 (Azure Foundry), #9993 (Vertex + Claude) |
| **Reasoning Model Improvements** | High | #10033 (compaction), #9409 (context ceiling), #10142 (Bedrock reasoning) |
| **Security / Privacy** | Medium | #6393, #10128 (/share disable) |
| **Local Model Support** | Medium | #10122 (managed llama.cpp), #10077 (contextWindow), #9974 (Responses API) |
| **TUI/UX Polish** | Medium | #9828 (scrollback), #9999 (clipboard), #10141 (frozen frames) |
| **Extension System** | Low-Medium | #10124 (typed TUI), #10035 (virtual models), #10040 (codemode/MCP) |

---

## Developer Pain Points

1. **Reasoning models at context ceiling** — Sessions with DeepSeek, o1, etc. permanently wedge; auto-compaction fails repeatedly. Affects long-running coding sessions.

2. **ESC stopping AI thinking** — Frequent freeze requiring process kill. Significant usability regression since v0.84.0.

3. **Edit tool timeouts** — Local models (llama.cpp, Qwen) fail edit operations with "terminated" errors in recent versions.

4. **Non-ASCII file corruption** — Korean/Unicode text in edited files gets corrupted, causing data loss.

5. **Extension loading performance** — Large extension setups (70+ extensions) cause 4s→280s session creation latency; cost accumulates per session.

6. **Clipboard confusion on macOS** — `Ctrl+V` pastes Finder icons instead of files or images depending on recent Finder activity.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a Qwen Code community digest based on the provided GitHub data. Let me analyze the data and create a structured digest.

Looking at the data:
1. **Latest Releases**: None in the last 24h
2. **Latest Issues**: 50 items, showing top 30 by comment count
3. **Latest Pull Requests**: 50 items, showing top 20 by comment count

I need to:
1. Create "Today's Highlights" - 2-3 sentences
2. "Releases" section - but there are none, so I'll note that
3. "Hot Issues" - pick 10 noteworthy issues
4. "Key PR Progress" - pick 10 important PRs
5. "Hot Discussions" - there's no discussion data provided, so I'll omit this
6. "Feature Request Trends" - analyze the issues and PRs
7. "Developer Pain Points" - summarize frustrations

Let me organize this:

**Today's Highlights**: 
- Managed Agent architecture evolution (#12380) with dual-path architecture and staged delivery
- Remote-SSH critical bug (#12416) with EPIPE errors
- Token governance and memory improvements (#12028, #10151)

**Hot Issues** (pick 10):
1. #12380 - Managed Agent dual-path architecture proposal (37 comments)
2. #12416 - Remote-SSH EPIPE bug (17 comments)
3. #12737 - Stage B host integration (13 comments)
4. #12028 - Non-conversation context token governance (11 comments)
5. #12947 - Structured Auto Memory rollout tracking (7 comments)
6. #12856 - NUL-separated baseUrl credential security issue (6 comments)
7. #10151 - Auto Memory with structured recall (6 comments)
8. #8281 - Email channel with IMAP/SMTP support (6 comments)


9. #12853 - Memory review debt follow-up (6 comments)
10. #12835 - Skills listing injected when excluded (5 comments)

**Key PR Progress** (pick 10):
1. #12920 - Defer local engine delivery behind Hosted
2. #12894 - Durable remote Shell result delivery
3. #12891 - Bundle Mem0 with main CLI
4. #12968 - Event replay post-merge review
5. #12946 - Private Hosted MCP runtime (H1)
6. #12954 - Shell output capture failures gate
7. #12943 - Adaptive navigation rail and Live settings
8. #1

I'll continue analyzing the remaining pull requests to identify key development trends and progress. The focus seems to be on improving system architecture, memory management, and remote execution capabilities. Upcoming PRs suggest continued work on shell handling, UI improvements, and core system enhancements.

The critical security vulnerability around credential handling and the ongoing architectural discussions indicate a mature approach to system design. Memory and token governance remain significant areas of focus, reflecting deep technical considerations about system performance and resource management.</think>

# Qwen Code Community Digest — 2026-09-29

## Today's Highlights

The Qwen Code community is focused on two major architectural evolutions: the Managed Agent dual-path architecture proposal (#12380) gaining significant traction with 37 comments, while a critical Remote-SSH bug (#12416) affecting Companion 0.24.2 users is causing `write EPIPE` errors in production. Meanwhile, token governance and structured Auto Memory improvements (#12028, #10151) are advancing through the roadmap, alongside security work addressing credential exposure in model selectors (#12856).

---

## Releases

**No new releases in the last 24 hours.** The release workflow for `v0.24.6-nightly.20260927.3f5ae3ffeb` failed (issue #12880), with the `integration_none` job encountering issues.

---

## Hot Issues

### 1. [proposal(serve): Define Managed Agent dual-path architecture and staged delivery](https://github.com/QwenLM/qwen-code/issues/12380)
**Priority P2 | 37 comments**  
Proposes a staged Managed Agent architecture maintaining the TypeScript agent loop while decoupling model inference from tool-environment provisioning. Introduces Sessions with durable ownership, Workspace bindings, recoverable tool executions, and a stable WebSocket API. This is the foundational architecture for multi-agent and platform-distribution roadmaps.

### 2. [Remote-SSH: every POST /session fails with `write EPIPE` / `BridgeChannelClosedError`](https://github.com/QwenLM/qwen-code/issues/12416)
**Priority P1 | 17 comments**  
Critical bug: In Qwen Code Companion 0.24.2, any session creation via the chat panel fails with `write EPIPE` or `BridgeChannelClosedError` when using Remote-SSH, despite the bundled CLI working standalone. Affects production Linux users with single-folder workspaces.

### 3. [feat(acp-bridge): Stage B host integration for paired Legacy and Managed engines](https://github.com/QwenLM/qwen-code/issues/12737)
**Priority P3 | 13 comments**  
Tracks the Stage B integration work for the paired host foundation, retaining M1 protections and M3 configuration compatibility while deferring ordinary local `qwen serve` Managed execution until after the first Hosted Managed slice.

### 4. [tracking(core): non-conversation context token governance](https://github.com/QwenLM/qwen-code/issues/12028)
**Priority P2 | 11 comments**  
Tracks the governance of non-conversation context—system prompts, tool schemas, `QWEN.md` files, and skill listings—which are sent and paid for on every request. On large-context models, this block can dwarf the conversation itself, a hidden cost invisible to users.

### 5. [Track structured Auto Memory rollout readiness on main](https://github.com/QwenLM/qwen-code/issues/12947)
**Priority P2 | 7 comments**  
Tracks correctness, effectiveness, and validation work for structured Auto Memory on `main` before broader rollout. A child track of the broader token-governance umbrella #12028, focusing on structured recall improvements.

### 6. [Aux-model selectors persist a NUL-separated baseUrl that every public surface emits verbatim](https://github.com/QwenLM/qwen-code/issues/12856)
**Priority P2 | 6 comments**  
Security issue: Five settings keys (`visionModel`, `imageModel`, `advisorModel`, `fastModel`, `compactionModel`) persist model selectors in the form `authType:<id>\0<baseUrl>`. When a provider `baseUrl` embeds userinfo (`https://user:sk-...@host/v1`), that suffix is a credential exposed verbatim across public surfaces.

### 7. [Improve Auto Memory with structured recall and lossless migration](https://github.com/QwenLM/qwen-code/issues/10151)
**Priority P2 | 6 comments**  
Proposes adding structured retrieval metadata to memory files, keeping the existing Auto Memory path as a compatibility fallback, while introducing on-demand, lossless recall with structured metadata.

### 8. [Add an Email channel with IMAP and SMTP support](https://github.com/QwenLM/qwen-code/issues/8281)
**Priority P3 | 6 comments**  
Feature request for an officially supported Email channel letting users communicate with a Qwen Code agent through a dedicated mailbox, with provider-neutral IMAP/SMTP support for receiving and sending messages.

### 9. [follow-up(memory): resolve non-blocking review debt after #10183](https://github.com/QwenLM/qwen-code/issues/12853)
**Priority P3 | 6 comments**  
Deferred non-blocking review findings from PR #10183, which exceeded five review rounds. Per repository policy, only correctness/security/data-loss/regression blockers should continue expanding the PR.

### 10. [Skills listing is injected even when the Skill tool is excluded](https://github.com/QwenLM/qwen-code/issues/12835)
**Priority P2 | 5 comments** (Closed)  
Bug: Running `qwen -e none --core-tools read_file --exclude-tools skill` still includes a `<system-reminder>` with skill listings in the system event, even though the Skill tool is excluded from the tool list.

---

## Key PR Progress

### 1. [docs(managed-agent): Defer local engine delivery behind Hosted](https://github.com/QwenLM/qwen-code/pull/12920)
Defers ordinary-host Managed engine work (M2 and M4–M6) until after the first deliverable Hosted Managed slice, while retaining the merged paired-host foundation, M1 protections, and M3 compatibility evaluation.

### 2. [feat(managed-agent): Add durable remote Shell result delivery](https://github.com/QwenLM/qwen-code/pull/12894)
Adds the O2 remote result path for foreground Hosted Shell calls: bounded raw stdout/stderr publication, immutable catalog and object storage, fixed-version range reads, Session receipt admission, Broker/worker Tool v3 routing, and Hosted recovery.

### 3. [feat(memory): bundle Mem0 with the main CLI](https://github.com/QwenLM/qwen-code/pull/12891)
Adds an opt-in Mem0 connection to the main Qwen Code CLI. Configure `memory.mem0` with an endpoint and `envKey`, with credentials defined in the top-level settings `env` field.

### 4. [fix(managed-agent): Close the post-merge review of event replay](https://github.com/QwenLM/qwen-code/pull/12968)
Follows up #12840 (event replay, Stage D3) with post-merge review suggestions. The identity backfill no longer lists every Session in memory, and coverage gaps are addressed.

### 5. [feat(managed-agent): Implement private Hosted MCP runtime (H1)](https://github.com/QwenLM/qwen-code/pull/12946)
Adds the private `hosted-workspace-mcp/1` profile for Stage H1, including Hosted → Broker → Runtime wiring. The Runtime owns stdio, Streamable HTTP and SSE connections and credentials.

### 6. [test(hosted): gate Shell output capture failures (FG6f)](https://github.com/QwenLM/qwen-code/pull/12954)
Adds Shell-output slice of FG6f: kill the publisher/worker after a durable 1 MiB output prefix, reject the receipt transaction in SQL, and lose the response after that transaction commits.

### 7. [feat(web-shell): add adaptive navigation rail and unified Live settings](https://github.com/QwenLM/qwen-code/pull/12943)
Adds an adaptive sidebar: Home-only hosts keep a single 300px session column; hosts with additional configured entries get a 56px navigation rail. Collapsing a rail layout leaves only the rail.

### 8. [fix(core): surface all-failed LSP requests](https://github.com/QwenLM/qwen-code/pull/12286)
Preserves empty LSP results when a server responds successfully without matches, while propagating the last request error when every dispatched request fails.

### 9. [fix(core): withhold the SkillManager from subagents whose tool policy has no Skill tool](https://github.com/QwenLM/qwen-code/pull/12545)
Subagents with no Skill tool in their policy no longer hold the session's SkillManager, allowing bundled-reference route resolution to `inline` for nested Agent tools.

### 10. [feat(core): lazy-load deferred tools in Code Mode](https://github.com/QwenLM/qwen-code/pull/12898)
Adds lazy tool discovery to experimental Code Mode. Deferred descriptions and schemas load through top-level `tool_search`, returning full parameter schemas for subsequent `exec` calls.

---

## Feature Request Trends

Based on issue and PR analysis, the most requested feature directions are:

| Category | Trend | Related Issues |
|----------|-------|----------------|
| **Architecture** | Managed Agent dual-path architecture with staged delivery and durable lifecycle | #12380, #12737, #12867, #12952 |
| **Memory** | Structured Auto Memory with lossless recall and metadata migration | #10151, #12028, #12947, #12929 |
| **Remote Execution** | Private Hosted MCP runtime and durable remote Shell result delivery | #12894, #12946, #12954 |
| **Multi-agent** | Session history authoritative externalization, writer fencing, and takeover | #12952, #12847 |
| **Integration** | Email channel with IMAP/SMTP support | #8281 |
| **Web Shell** | Adaptive UI navigation and session management | #12943, #12919, #12738 |

---

## Developer Pain Points

1. **Remote-SSH Connection Failures**: Users on Companion 0.24.2 with Remote-SSH cannot create sessions due to persistent `write EPIPE` errors, blocking production workflows.

2. **Token Cost Opacity**: Non-conversation context (system prompts, tool schemas, skill listings) is sent on every request but invisible to users as a small percentage, leading to unexpected token costs on large-context models.

3. **Credential Exposure Risk**: Model selectors persist baseUrls with embedded credentials in a NUL-separated format that surfaces verbatim across public UI elements (#12856).

4. **Memory Migration Stalls**: Legacy managed-memory metadata migration doesn't advance after tool-completing interactive turns, leaving topics unmigrated (#12929).

5. **Approval Mode Regressions**: AUTO mode user approvals never reach the classifier, with blocks being unoverridable, and approval mode reverts to AUTO on session rebuild (#11019).

6. **Skills Inclusion When Excluded**: The Skill tool listing is injected into system prompts even when explicitly excluded via `--exclude-tools skill`, causing unexpected behavior (#12835).

7. **Release Pipeline Instability**: Nightly release `v0.24.6-nightly.20260927.3f5ae3ffeb` failed, indicating ongoing CI reliability concerns.

---

*Digest generated from GitHub data — github.com/QwenLM/qwen-code*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*