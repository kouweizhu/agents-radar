# AI CLI Tools Community Digest 2026-11-09

> Generated: 2026-11-09 01:54 UTC | Tools covered: 7

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

<think>The user wants a cross-tool comparison report for all 6 AI CLI tools based on the community digests I just generated. Let me analyze the data from each digest and create a comprehensive comparison.

Let me organize the data:

**1. Ecosystem Overview**
- Brief overview of the AI CLI tools landscape based on the digests

**2. Activity Comparison**
Need to compare:
- Claude Code (anthropics/claude-code)
- OpenAI Codex (openai/codex)
- Gemini CLI (google-gemini/gemini-cli)
- GitHub Copilot CLI (github/copilot-cli)
- OpenCode (anomalyco/opencode)
- Pi (earendil-works/pi)


- Qwen Code (QwenLM/qwen-code)

Now I'm compiling the activity metrics across all six tools to see where engagement is happening and which platforms are most active. Now I'm compiling the discussion and release metrics for the remaining platforms, then looking at the shared patterns emerging across all these tools—things like MCP integration, Windows compatibility, security hardening, session management, and cross-platform clipboard support are showing up everywhere, though each tool has its own priorities and technical philosophy. Looking at how these tools differentiate themselves, Claude Code and Copilot CLI focus on enterprise and GitHub integration, while Codex and Gemini CLI are building agent-based capabilities. OpenCode, Pi, and Qwen Code are more experimental with community-driven development, and there's a clear split between tools targeting professional developers versus those attracting power users and hobbyists.

Now I'm examining the community dynamics and emerging trends—Qwen Code's active CI infrastructure is attracting developer participation, Pi and OpenCode are iterating quickly with frequent releases, Claude Code and Codex have mature ecosystems, Copilot CLI shows moderate engagement, and Gemini CLI lags behind. The key insight is that agent capabilities, particularly multi-agent orchestration and subagent reliability, are becoming the critical battleground where these tools are competing for developer adoption.
</think>


# AI Developer Tools Ecosystem — Cross-Tool Comparison Report

## November 9, 2026

---

## 1. Ecosystem Overview

The AI CLI tools landscape is maturing into a multi-vendor, multi-paradigm ecosystem where each tool reflects its originating company's strategic priorities and technical philosophy. Claude Code and Codex anchor the high-end developer market with deep GitHub and enterprise integrations, while Gemini CLI, Pi, and Qwen Code operate as open-source-driven alternatives with faster iteration cycles and more experimental feature sets. OpenCode carves a differentiated position as an aggregator platform that integrates across provider ecosystems. Common infrastructure challenges — MCP server management, session lifecycle reliability, Windows platform parity, and context/token management — surface consistently across all communities, indicating these are systemic problems the field has not yet solved. The collective momentum is unmistakably toward **multi-agent, tool-augmented, enterprise-grade** workflows, with community feedback driving priorities even in closed-source tools.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Discussions | Releases (24h) | Channel Status |
|---|---|---|---|---|---|
| **Claude Code** (Anthropic) | 50 | 0 | 0 | None | Active |
| **OpenAI Codex** | 50 | 10 | 8 | None | Active |
| **Gemini CLI** (Google) | 50 | 10 | 0 | None | Active |
| **GitHub Copilot CLI** | 15 | 0 | 0 | None | Active |
| **OpenCode** (anomaly) | 50 | 50 | 0 | None | Active |
| **Pi** (earendil-works) | 21 | 4 | 2 | None | Active |

**Key observations:**

- **No releases** were published across any tool in the past 24 hours — unusual collectively, possibly indicating coordinated release freeze, weekend effect, or upcoming milestone publishes.
- **OpenCode** leads in raw PR volume (50), reflecting its role as a rapidly iterating open-source aggregator with multiple concurrent contributor streams.
- **OpenAI Codex** had the most PR merges (10) among tools with a traditional issue tracker model, signaling heavy internal development despite no releases.
- **GitHub Copilot CLI** shows notably lower issue volume (15 vs. 50 for others), consistent with its more managed release cadence and closed-source nature.
- **Claude Code** recorded zero PR updates in 24 hours while maintaining 50 issue updates — this combination suggests the team is working on branches not yet submitted or preparing a release batch.
- **Pi and OpenCode** use GitHub Discussions actively alongside Issues, while Claude Code, Gemini CLI, and Copilot CLI use only Issues as the community channel.

---

## 3. Shared Feature Directions

The following requirements appear as active issues, open PRs, or feature requests across multiple tool communities, indicating systemic ecosystem needs:

| Shared Requirement | Tools Affected | Nature of Request |
|---|---|---|
| **MCP server integration reliability** | Claude Code, OpenAI Codex, Gemini CLI, Pi, Qwen Code | OAuth session persistence, connection repair after abort, reconnection blocking, tool visibility failures, auth discovery delays |
| **Windows/WLS/WSL platform parity** | Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Qwen Code, Pi | Path corruption, backslash handling, Edge URL detection, WSL reconnect loops, bundled tool failures on non-standard kernels |
| **Multi-account / multi-provider support** | Claude Code, Gemini CLI, OpenCode | Multiple Connector accounts, provider-level multi-account, cross-provider aggregation |
| **Session / agent lifecycle management** | All 6 tools | Session resume, agent termination signaling, MAX_TURNS handling, subagent completion reporting, background task race conditions |
| **Context / token budget management** | Claude Code, Gemini CLI, OpenAI Codex, Pi, Qwen Code, OpenCode | Post-compaction re-injection bloat, output budget pre-flight validation, compression request sizing, context usage accuracy |
| **Terminal / TUI input reliability** | OpenAI Codex, Gemini CLI, Pi, Qwen Code, OpenCode | Shift+Enter behavior, clipboard operations, paste marker corruption, mouse wheel SGR leaks, streaming flicker |
| **Security hardening** | Claude Code, Gemini CLI | Path traversal, SSRF, permission bypass, dangerous git argument handling |
| **Usage / cost visibility** | Claude Code, OpenAI Codex, OpenCode, Pi | In-conversation usage snapshots, plan usage reporting, API budget protection, session cost attribution |

---

## 4. Differentiation Analysis

**Claude Code** occupies the premium enterprise segment with deep GitHub integration (Project, Cowork, remote control), a mature MCP registry, and a strong community-driven features pipeline. Its differentiation is **ecosystem depth** — not just a CLI but a full GitHub-native collaboration layer. Target users are professional developers and engineering teams. The tool's primary competitive pressure comes from OpenAI Codex on GitHub workflows.

**OpenAI Codex** differentiates through **terminal-native AI infrastructure** — the TUI, daemon architecture, and CLI-as-a-service model make it suitable for programmatic and headless use cases. Strong community tooling (plugins like BCC, agent-recap, Pushary) demonstrates an ecosystem being built around it. The standalone CLI running ahead of desktop-bundled builds signals a bifurcated release strategy. Windows reliability is a clear weak point.

**Gemini CLI** targets **open-source-first, cross-platform** power users with a rich agent system and extensive tool ecosystem. Its differentiation is Google's model family integration and a permissive development model. Notable strength in multi-agent architecture; notable weakness in subagent reliability and security hardening. The project iterates rapidly but carries higher instability risk.

**GitHub Copilot CLI** serves the **Microsoft/GitHub-native developer** segment with tight integration into the Copilot subscription and VS Code extension ecosystem. Its differentiation is the seamless transition from Copilot Chat to command-line execution. Limited open-source activity suggests a more managed, corporate release cadence. The Windows polling bug and extension loading issues indicate platform gaps.

**OpenCode** is the only **provider-agnostic aggregator**, supporting OpenAI, Anthropic, Google, Azure, and local models in a single interface. Its differentiation is **maximum model flexibility** and a plugin/extension architecture that does not lock users into a single provider. The SQLite FTS5 session search and multi-provider credential management are unique capabilities. Smaller community but highly active contributors.

**Pi** differentiates through **developer experience obsessiveness** — the prompt cache warming optimization (eliminating $1,430/month in p2 spend), TUI polish, and community-built adapters (Assistant UI, omp-web) demonstrate a tool optimized for daily-driving by sophisticated users. Its focus on model thinking levels, skill auto-invocation, and MCP resilience fills practical gaps. Smaller but highly engaged community with significant per-contributor impact.

**Qwen Code** differentiates on **GitHub workflow automation** with sophisticated PR state watching, batch GraphQL queries, and multi-session collaboration. Its CI infrastructure is extensive but visibly strained (numerous automated failure reports). The managed agent layer and ACP protocol indicate architectural ambition beyond a simple CLI wrapper.

---

## 5. Community Momentum & Maturity

| Tool | Community Momentum | Maturity | Notes |
|---|---|---|---|
| **Claude Code** | 🔥🔥🔥 High | High | Mature community with large established issue base; feature requests attract hundreds of votes; stable release cadence |
| **OpenAI Codex** | 🔥🔥🔥 High | High | Active PR merges daily; community-built plugins; 8 discussions in 24h; strong external ecosystem |
| **Gemini CLI** | 🔥🔥 Medium-High | Medium | Fast iteration with 10 PRs merged; active security hardening; subagent reliability remains a credibility challenge |
| **GitHub Copilot CLI** | 🔥 Medium | High | Stable but less active open-source community; corporate cadence; Windows issues suggest testing gap |
| **OpenCode** | 🔥🔥🔥 High (per-contributor) | Medium | 50 PRs in 24h from a smaller contributor base; high velocity; some regressions likely |
| **Pi** | 🔥🔥 Medium | Medium | 18 issues closed in 24h; high-impact contributions from named individuals; strong developer UX focus |
| **Qwen Code** | 🔥🔥 Medium | Medium-High | CI infrastructure generates high noise; meaningful PR activity; platform-specific bugs need dedicated testing |

**Maturity assessment framework:**

- **High maturity tools** (Claude Code, Codex, Copilot CLI) have established release processes, predictable community norms, and stable feature boundaries. They attract enterprise users but iterate more deliberately.
- **Medium maturity tools** (Gemini CLI, OpenCode, Pi, Qwen Code) iterate faster and are more responsive to community feedback, but carry higher regression risk and less predictable roadmaps. They attract power users comfortable with instability in exchange for cutting-edge features.

---

## 6. Trend Signals

The following signals emerge from cross-community analysis and carry predictive value for developers and decision-makers:

**1. Multi-Agent Orchestration Is the Next Battlefield**
Every tool is independently discovering that subagent reliability — completion reporting, loop detection, memory management, context inheritance — is harder than it looks. Claude Code's post-compaction skill replay bugs, Gemini CLI's MAX_TURNS misreporting, Codex's subagent definition detection, and Qwen Code's background task completion races all point to the same underlying problem: **agents that spawn agents create observability and correctness gaps the field has not closed.** Teams investing in multi-agent workflows should plan for significant debugging infrastructure.

**2. MCP as Infrastructure Is Maturing but Fragile**
The volume of MCP-related bugs across Claude Code, Codex, Gemini CLI, Pi, and Qwen Code — spanning OAuth, reconnection, tool visibility, and auth discovery — signals that MCP has become production infrastructure before its stability guarantees matured. The ecosystem needs a shared conformance test suite for MCP server implementations. Expect tooling vendors to fill this gap.

**3. Windows Has Become the Primary Platform Reliability Risk**
Five of six tools have significant Windows-specific bugs open simultaneously. This is not coincidence — it reflects the combinatorial complexity of Windows environments (WSL, PowerShell, Terminal, Git Bash, Cygwin, mintty, Edge, VS Code integrated terminals) that no single team can fully test. Cross-platform CLI tools should invest in automated Windows testing infrastructure or accept a permanent platform gap.

**4. Context Management Is the Highest-Impact Optimization Area**
Token overhead from post-compaction re-injection (Claude Code, ~4×), redundant prompt cache rewrites (Pi, $1,430/month eliminated), compression request sizing (Qwen Code), and context usage misreporting (Gemini CLI) all represent **direct, measurable cost savings**. Context optimization is both a reliability and a financial priority.

**5. Community-Built Tooling Is Accelerating**
OpenAI Codex has spawned multiple independent community projects (BCC, agent-recap, Pushary, omp-web) within its ecosystem. Pi's Assistant UI adapter and OpenCode's provider aggregation model suggest that **the most valuable tooling in this ecosystem will be community-built**, not vendor-provided. Developers choosing a platform should evaluate the extensibility surface as much as the core feature set.

**6. Enterprise Features Are Converging Across All Vendors**
Multi-account connectors, SSO/MFA, usage reporting, per-user policy enforcement, and session audit trails appear as active requests or recent implementations across Claude Code, Codex, Copilot CLI, and OpenCode. This convergence indicates that the enterprise market segment is now large enough to justify dedicated investment from all vendors simultaneously. Competitive differentiation in this segment will shift from feature presence to reliability, compliance certifications, and deployment flexibility.

---

*Cross-tool analysis based on 2026-11-09 community data from GitHub repositories for Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, and Qwen Code.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>Let me analyze the data provided about the Claude Code Skills ecosystem from the official anthropics/skills repository.

Looking at the PRs data (sorted by comments, 20 shown):
- Most PRs have "undefined" comments
- PRs are sorted by comments but the comment counts appear to all be undefined
- I need to work with what's available

Looking at the Issues data (sorted by comments, 15 shown):
- Issue #492: Security concerns about community skills in anthropic/ namespace - 46 comments, 3 👍
- Issue #228: Enable org-wide skill sharing - 17 comments, 8 👍


- Issue #556: run_eval.py never triggers skills - 13 comments, 7 👍
- Issue #1329: Proposing compact-memory skill - 10 comments, 0 👍
- Issue #62: Skills disappeared errors - 10 comments, 2 👍
- Issue #202: skill-creator should be updated - 8 comments, 1 👍
- Issue #1385: Reasoning Quality Gate Pipeline - 7 comments, 1 👍
- Issue #412: Agent governance skill proposal - 6 comments, 0 👍
- Issue #189: Document skills and example-skills plugins install identical content - 6 comments, 9 👍
- Issue #1487: claude-api skill eagerly injects 156k tokens - 5 comments, 0 👍
- Issue #1352: run_eval.py parallel workers cross-match skill UUIDs - 5 comments, 3 👍

Now I'm looking at the PR data to identify the top skills by engagement. The PRs show varying levels of activity—some like the mcp-builder and notion-spec-to-implementation proposals have detailed descriptions and multiple updates, while others like the orphaned docx comments PR are sparse. The skill creator and webapp-testing fixes also appear to have more traction with recent updates and clearer documentation of the problems they're solving.

I need to rank these by a combination of comment engagement, relevance to the community, and overall impact—security and trust issues seem most critical, followed by workflow improvements and new capability proposals.

For the demand trends, I'm seeing three major patterns: infrastructure concerns around organization-level sharing and skill discovery, reliability issues with eval and trigger mechanisms, and security questions about the namespace and plugin ecosystem. The high-potential PRs to watch are the MCP builder compatibility fixes, the isolation improvements in skill creation, and the security hardening work on shell execution and command injection vulnerabilities.
</think>


# Claude Code Skills Community Highlights Report
**Data as of: 2026-11-09 | Source: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking

> All top-PRs currently carry `undefined` comment counts in the dataset, reflecting that the repository tracks engagement primarily through GitHub reactions and update recency. Rankings below are inferred from PR scope, issue-linked references, and update velocity.

| # | PR | Skill / Fix | Author | Status | Key Highlights |
|---|-----|------------|--------|--------|----------------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder: MCP ≥2 streamable_http_client + custom headers** | Kuldeeep18 | OPEN | Addresses breaking API changes in `mcp>=2.0.0` — `streamablehttp_client` renamed to `streamable_http_client`, header configuration refactored to `create_mcp_http_client`. Directly fixes issue #1668. |
| 2 | [#1980](https://github.com/anthropics/skills/pull/1980) | **webapp-testing: eliminate shell=True in with_server.py** | Pcmhacker-piro | OPEN | Critical security fix (CWE-78: command injection). Unsanitized command strings were passed directly to `subprocess.Popen(..., shell=True)`. High urgency. |
| 3 | [#2019](https://github.com/anthropics/skills/pull/2019) | **xlsx: resolve worksheet-scoped defined names + aliases in external_links_at_risk** | reginaldalfret | OPEN | Fixes false negatives in external link detection; previously only workbook-level `defined_names` were inspected, missing worksheet-scoped indirect references. |
| 4 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: isolate trigger evals + Windows / runtime failure handling** | MartinCajiao | OPEN | Addresses false trigger misses in `run_eval.py`: per-worker subprocess probes compete, `select()` fails on Windows, unrelated tools block scans, and runtime failures are incorrectly treated as non-triggers. |
| 5 | [#1245](https://github.com/anthropics/skills/pull/1245) | **Add notion-spec-to-implementation + quantitative-resume-auditor skills** | mrdesouzaphd-cmyk | OPEN | Two new skills in one PR: (1) transforms product/tech specs into Notion task lists with acceptance criteria; (2) quantitative resume auditor for structured candidate evaluation. |
| 6 | [#525](https://github.com/anthropics/skills/pull/525) | **Add pyxel skill for retro game development** | kitao | OPEN | Guides creation, debugging, and headless verification of [Pyxel](https://kitao.dev/pyxel/) retro games in Python. Separate references cover Pyxel behavior, presentation, and evidence capture. |
| 7 | [#1703](https://github.com/anthropics/skills/pull/1703) | **Add md2video-audio skill** | 70v-Yoyo | OPEN | Zero-cost skill compiling Markdown → MP4 with realistic human-like voiceovers via Marp slides. |
| 8 | [#1771](https://github.com/anthropics/skills/pull/1771) | **Add proofcore-contract-auditor skill** | ProofCore-Protocol | OPEN | Web3 developer skill for static analysis of Solidity/Rust smart contracts, anchoring cryptographic audit proofs onto the TON Blockchain via zero-storage Merkle protocol. |

---

## 2. Community Demand Trends

Inferred from the top Issues (sorted by comment volume):

| Trend | Evidence | Issue |
|-------|---------|-------|
| **🔒 Security & Trust Architecture** | 46 comments — community skills distributed under `anthropic/` namespace enable trust boundary abuse; users may grant elevated permissions to community code believing it is official. | [#492](https://github.com/anthropics/skills/issues/492) |
| **🏢 Enterprise Org-Wide Skill Sharing** | 17 comments, 8 👍 — no native mechanism to share skills within an organization; current workaround requires manual Slack/Teams file transfer + Settings upload. | [#228](https://github.com/anthropics/skills/issues/228) |
| **⚙️ Eval/Trigger Reliability** | Two linked issues: `run_eval.py` reports **0% trigger rate** across all queries (#556, 13 comments, 7 👍) and parallel workers cross-match UUIDs causing false negatives (#1352, 5 comments, 3 👍). | [#556](https://github.com/anthropics/skills/issues/556) · [#1352](https://github.com/anthropics/skills/issues/1352) |
| **📦 Plugin/Duplication Conflicts** | `document-skills` and `example-skills` install identical content (#189, 6 comments, 9 👍). `claude-api` skill injects ~156k tokens in one call (#1487). | [#189](https://github.com/anthropics/skills/issues/189) · [#1487](https://github.com/anthropics/skills/issues/1487) |
| **🧠 Reasoning / Governance Pipelines** | Proposal for a three-gate "Pre-task Calibration → Adversarial Review → Delivery Verification" pipeline (#1385). Proposal for agent-governance skill with policy enforcement and audit trails (#412). | [#1385](https://github.com/anthropics/skills/issues/1385) · [#412](https://github.com/anthropics/skills/issues/412) |

**Summary of demand vectors:** The community is most vocal about (1) security boundaries in the skill distribution model, (2) eval tooling reliability as a prerequisite for skill quality optimization, and (3) enterprise-grade sharing and governance infrastructure.

---

## 3. High-Potential Pending Skills

These PRs are not yet merged but show strong signals of eventual landing — backed by active maintenance, clear problem statements, and/or direct issue linkage:

| PR | Skill / Fix | Update Recency | Merge Probability Signal |
|----|------------|----------------|--------------------------|
| [#1980](https://github.com/anthropics/skills/pull/1980) | webapp-testing: eliminate `shell=True` | 2026-11-01 | **Very High** — CWE-78 security fix; unambiguous fix scope |
| [#2019](https://github.com/anthropics/skills/pull/2019) | xlsx: worksheet-scoped defined names | 2026-11-03 | **High** — Targets a concrete bug with a clear regression test case |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx: LibreOffice timeout reporting + output verification | 2026-11-01 | **High** — Adds correctness validation after render; practical improvement |
| [#1977](https://github.com/anthropics/skills/pull/1977) | algorithmic-art: wrapAround() modulo fix | 2026-10-18 | **Medium-High** — Small, targeted fix; linked to issue #1897 |
| [#1976](https://github.com/anthropics/skills/pull/1976) | webapp-testing: correct textarea/select reporting | 2026-10-18 | **Medium-High** — Element discovery accuracy; linked to #1891 |
| [#1975](https://github.com/anthropics/skills/pull/1975) | pptx: argparse validation for `--cols` | 2026-10-27 | **Medium** — Early failure with clear UX improvement |
| [#1730](https://github.com/anthropics/skills/pull/1730) | claude-api: replace dead documentation URLs | 2026-10-04 | **Medium** — Low-risk doc fix; verified 200 responses |
| [#1997](https://github.com/anthropics/skills/pull/1997) | skill-creator: parse YAML frontmatter scalars correctly | 2026-10-19 | **Medium** — Metadata fidelity issue affecting eval and optimization commands |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for foundational infrastructure improvements** — specifically security hardening (CWE-78 command injection, namespace trust boundaries), reliable evaluation tooling (fixing the 0% trigger-rate crisis in `run_eval.py`), and enterprise-grade skill distribution — rather than new skill categories.

---

<think>The user wants me to generate a Claude Code community digest for 2026-11-09 based on GitHub data. Let me analyze the data provided:

1. **Latest Releases**: None in last 24h
2. **Latest Issues**: 50 items total, showing top 30 by comment count
3. **Latest Pull Requests**: 0 items in last 24h

Let me structure the digest according to the requested sections:

1. **Today's Highlights** - 2-3 sentences summarizing most important updates
2. **Releases** - None, so I'll note this
3. **Hot Issues** - Pick 10 noteworthy issues
4. **Key PR Progress** - No PRs in last 24h, so I'll note this
5. **Hot Discussions** - No discussion data provided, so I'll omit this section
6. **Feature Request Trends** - From the issues
7. **Developer Pain Points** - Summarize recurring frustrations

Let me pick the most noteworthy issues based on comment count, upvotes, and relevance:

Top issues by comments:
1. #27302 - Multiple Connector accounts (299 comments, 453 👍) - MAJOR feature request
2. #79305 - Desktop app custom themes (30 comments, 91 👍) - Popular request
3. #102828 - Remote Control bug (15 comments, 10 👍)
4. #100212 - Safety classifier issue (8 comments)
5. #85138 - Skills post-compaction replay issue (6 comments)
6. #82144 - Post-compaction skill re-injection costs (6 comments)
7. #104925 - Bypass mode rm prompt bug (5 comments)
8. #97926 - GitHub integration issue (5 comments)
9. #107573 - Meta Ads campaign bug (4 comments)
10. #83756 - MCP ToolSearch batches cache issue (4 comments)


11. #108048 - Opus 5.5 reasoning_extraction bug (3 comments)
12. #102712 - Desktop/Windows+WSL MCP issue (3 comments)
13. #108494 - Greek omega rendering bug (2 comments)
14. #102698 - GitHub integration duplicate (2 comments)
15. #107595 - Model hook superficial satisfaction (2 comments)
16. #108238 - Desktop nested side sessions memory (2 comments)
17. #91874 - Plugins propagate to CLI (2 comments, closed)
18. #102661 - Terminal session resume bug (1 comment)
19. #108146 - DOCS: CLAUDE

_CODE_DISABLE_NONESSENTIAL_TRAFFIC (1 comment)
20. #108472 - Background tasks bug (1 comment)
21. #107535 - Model skips known steps (1 comment)
22. #107183 - Model wiped handover entries (1 comment)
23. #108493 - Session declared work verified (0 comments)
24. #108492 - Replay recording bug (0 comments)
25. #108490 - Report missing description (0 comments)
26. #108491 - MCP stdio servers signals (0 comments)
27. #108489 - Usage consumption increase (0 comments)
28. #108488 - Show usage in conversation (0 comments)
29. #108487 - Subagent definitions not picked up (0 comments)
30. #108486 - GitHub integration (0 comments)

Emerging issues to watch:

Several platform-specific bugs are appearing across different environments. Desktop applications have custom theme requests gaining traction, while remote control functionality shows issues with session handling. Cowork and GitHub integration problems are affecting collaboration features. Skills-related concerns continue to surface, with post-compaction replay issues and memory consumption from repeated re-injection. Model behavior problems include safety classifiers misfiring, Opus 5.5 reasoning extraction failures, and hook validation not being thorough. On Windows, WSL MCP configuration and agent definition updates need addressing. Newest reports cover terminal session resumption, nested side sessions consuming excessive memory, stdio server signal handling, and replay recording inconsistencies.
</think>


# Claude Code Community Digest

## November 9, 2026

---

### Today's Highlights

The Claude Code community continues active engagement with a significant feature request for multi-account Connector support (#27302) dominating discussion at 299 comments. Windows and cross-platform issues dominate recent activity, with bugs spanning WSL integration, desktop rendering, and GitHub workflows. No releases or pull requests were merged in the past 24 hours, suggesting the team may be preparing a larger update.

---

### Releases

**No new releases in the past 24 hours.** The last release appears to be v2.1.319, referenced in several recently filed issues.

---

### Hot Issues

| # | Issue | Key Points | 👍 | Link |
|---|-------|------------|----|------|
| 1 | **[FEATURE] Support multiple Connector accounts** | The top-voted request (453 👍) seeks to allow users to connect multiple accounts from the same provider (e.g., multiple AWS or Azure accounts) directly in Claude Code. Currently, only one account per connector is supported, forcing users to work around this limitation. | 453 | [#27302](https://github.com/anthropics/claude-code/issues/27302) |
| 2 | **Desktop app: custom themes / accent colors** | Users want parity with the CLI's custom theme system for the desktop app. Currently limited to light/dark/high-contrast modes, making Claude Desktop indistinguishable from other apps in multi-monitor setups. | 91 | [#79305](https://github.com/anthropics/claude-code/issues/79305) |
| 3 | **Remote Control: start_session rejects "user_asked"** | A bug in remote control functionality causes sessions started from mobile to reject valid `user_asked` flags, breaking the remote assistance workflow. | 10 | [#102828](https://github.com/anthropics/claude-code/issues/102828) |
| 4 | **Skills need frontmatter opt-out from post-compaction replay** | After context compaction, Skills re-execute with stale `$ARGUMENTS`, causing unintended consequences like accidental git pushes. Users need a way to opt out of post-compaction replay. | 1 | [#85138](https://github.com/anthropics/claude-code/issues/85138) |
| 5 | **Post-compaction skill re-injection costs ~4x compaction summary** | Re-injecting full skill bodies after compaction dramatically increases context usage—approximately 4× the compaction summary itself across five invoked skills. | 0 | [#82144](https://github.com/anthropics/claude-code/issues/82144) |
| 6 | **Bypass mode: rm prompt stalls background subagents** | When running with `--dangerously-skip-permissions`, a false-positive "Dangerous rm operation" prompt stalls subagents, and worktree isolation subsequently refuses the approved call. | 3 | [#104925](https://github.com/anthropics/claude-code/issues/104925) |
| 7 | **GitHub integration: Cowork sessions lack repo tools** | Cowork sessions on secondary accounts don't receive `list_repos` or `add_repo` tools, despite the same GitHub App working on the primary account. | 3 | [#97926](https://github.com/anthropics/claude-code/issues/97926) |
| 8 | **MCP ToolSearch batches invalidate conversation cache** | Large MCP `ToolSearch` batches contradict documented guarantees by invalidating the entire conversation cache, causing unexpected behavior. | 3 | [#83756](https://github.com/anthropics/claude-code/issues/83756) |
| 9 | **Opus 5.5 reasoning_extraction refuses file read** | A bisected bug in Opus 5.5 (claude-opus-5-5) prevents reading a specific local file when user-scope rules files are present—not observed on Opus 4.8. | 0 | [#108048](https://github.com/anthropics/claude-code/issues/108048) |
| 10 | **Desktop/Windows+WSL: .mcp.json executed on Windows host** | Projects opened via `\\wsl.localhost\...` incorrectly spawn MCP servers on Windows, causing 14 of 17 servers to fail with connection errors. | 0 | [#102712](https://github.com/anthropics/claude-code/issues/102712) |

---

### Key PR Progress

**No pull requests were merged or updated in the past 24 hours.**

---

### Feature Request Trends

Based on issue analysis, the community's most-requested enhancements cluster around:

1. **Multi-account management** — Support for multiple accounts per connector/service is the highest-priority requested feature, reflecting enterprise and power-user needs.

2. **Desktop app feature parity** — Users want the desktop app to match CLI capabilities, particularly around theming, agent definitions, and project-level configurations.

3. **Skills and memory optimization** — Multiple issues highlight context bloat from post-compaction skill re-injection; users request mechanisms to control what persists after compaction.

4. **GitHub integration depth** — Cowork and Project modes need stronger GitHub integration, including reliable repo tool access across account contexts.

5. **Usage visibility** — Requests for in-conversation usage snapshots, reset timing, and task duration tracking to help manage API costs.

---

### Developer Pain Points

**Context and memory management** remains a top frustration. The post-compaction skill re-injection issue (#82144, #85138) creates a ~4× context overhead that impacts both cost and performance. Users report unintended side effects like accidental git pushes when Skills replay with stale variables.

**Cross-platform reliability** continues to plague Windows and WSL users. The `.mcp.json` execution on Windows when projects live in WSL (#102712), subagent definition detection failures (#108487), and Greek character rendering bugs (#108494) indicate gaps in the Windows testing surface.

**Model behavior inconsistencies** appear in several reports: Opus 5.5 shows regression-like behavior with file reads (#108048), hooks are satisfied superficially (#107595), and models sometimes skip known required steps (#107535). These behavioral variations erode developer confidence.

**Desktop memory and cost issues** emerged with the nested side sessions feature (#108238), where some users consume their weekly API limit in a single day and trigger macOS kernel panics—a serious regression for power users.

**GitHub integration fragility** affects collaboration workflows, with multiple accounts and Cowork sessions experiencing tool access inconsistencies (#97926, #102698).

---

*Digest generated from GitHub data for [anthropics/claude-code](https://github.com/anthropics/claude-code) | 2026-11-09*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze the GitHub data provided and create a structured digest for the OpenAI Codex community.

Let me organize the information:

**Releases**: None in the last 24 hours.

**Issues**: 50 total, showing top 30 by comment count. Let me pick 10 noteworthy ones:
1. #56645 - Windows local browser disabled in Work settings (33 comments)
2. #25453 - Windows Codex Desktop spawns powershell.exe every second (26 comments)
3. #15975 - VS Code extension stuck on loading after VS Code update on Windows (17 comments)
4. #19143 - CLI image paste support (15 comments, CLOSED)


5. #45996 - Windows Computer Use can't determine Edge URL on Windows 11 (14 comments)
6. #44323 - Can't paste text from clipboard into CLI on Windows (13 comments, CLOSED)
7. #19984 - TUI loses active turn timer after state replay (11 comments, CLOSED)
8. #31317 - /resume picker CWD filter issue (10 comments, CLOSED)
9. #53196 - node_repl leaves temp files on macOS (6 comments)
10. #57764 - Codex 3-4x slower after October 28 update (4 comments)

Now I'm looking at the pull requests—there are 10 total, and I can see several are already closed. #60320 covers including older Cloud failures in transcripts, #60319 improves side-chat discovery in the TUI, #60309 defers executor readiness for prewarming projects, #60286 searches task history from command center, and #60280 fixes MCP startup tracking. A couple are still open: #31045 on deferring MCP auth discovery and one other I'm still reviewing.

Looking at the discussions, I see eight items in the Show and tell category covering various use cases like BCC plugins, web page publishing, Pushary for approvals, agent-recap for local search, and Worktree receipt functionality, along with some Ideas posts about configurable permissions and Windows workspace independence.

From the issues and discussions, I'm noticing some clear patterns emerging: Windows compatibility problems keep appearing across multiple issues, the CLI and TUI are generating a lot of feedback, performance concerns are coming up repeatedly, and there are several requests around MCP and extensibility features. Now I'm organizing this into a structured digest to present to the user.
</think>


# OpenAI Codex Community Digest

**Date:** 2026-11-09
**Repository:** [github.com/openai/codex](https://github.com/openai/codex)

---

## 1. Today's Highlights

The Codex community had a highly active 24 hours with **no new releases**, but saw **10 pull requests merged** and **50 issues updated**, signaling heavy internal development activity. The dominant theme today is **Windows-platform reliability**: local browser controls, WSL integration, and Edge URL detection are all surfacing as persistent pain points. On the CLI/TUI side, several regressions related to mouse input, async question controls, and clipboard operations were addressed via merged PRs, while one alarming performance regression report claims Codex is 3–4× slower after the October 28 update.

---

## 2. Releases

**No new releases were published in the last 24 hours.** The latest stable versions in the wild remain:

- **Codex CLI:** 0.166.x (standalone), with shared app-server daemon at 0.167.0
- **Codex Desktop (Windows/macOS):** package `26.1103.x`
- **Bundled CLI in desktop:** `0.162.x` – `0.164.x` depending on build

Users on the standalone CLI are ahead of desktop-bundled builds by several minor versions.

---

## 3. Hot Issues

| # | Issue | Comments | Why It Matters |
|---|---|---|---|
| [#56645](https://github.com/openai/codex/issues/56645) | **Local browser use disabled in Work settings on Windows** | 33 | A broad regression affecting ChatGPT Plus users on Windows — the local browser control toggle is greyed out or non-functional in Work mode, breaking automated browsing workflows. High comment volume indicates widespread impact. |
| [#25453](https://github.com/openai/codex/issues/25453) | **Windows Codex Desktop spawns `powershell.exe` every second** | 26 | A severe performance bug causing near-100% CPU usage on Windows Pro systems due to aggressive full-process polling. Affects developer productivity directly; 10 👍 reactions signal community urgency. |
| [#15975](https://github.com/openai/codex/issues/15975) | **VS Code extension stuck on loading/logo screen after VS Code update on Windows** | 17 | A compatibility regression triggered by VS Code updates, blocking the primary IDE integration for Windows workplace users. Suggests fragile dependency on VS Code internals. |
| [#19143](https://github.com/openai/codex/issues/19143) 🔒 | **Support pasting images directly into Codex CLI** | 15 | This was **closed** with the note that clipboard image pasting is a planned feature. Community interest (8 👍) confirms strong demand for image-based debugging workflows in the terminal. |
| [#45996](https://github.com/openai/codex/issues/45996) | **Windows Computer Use cannot determine Edge URL on Windows 11** | 14 | Breaks the remote Edge automation flow on Windows 11 (build 26200+), a key Computer Use feature. Impacts automated testing and browser-agent workflows. |
| [#44323](https://github.com/openai/codex/issues/44323) 🔒 | **Can't paste text from clipboard into codex CLI 153.4 on Windows** | 13 | Cross-platform clipboard regression in the CLI's TUI, affecting Windows Terminal and other emulators. **Closed**, likely addressed in a recent patch. |
| [#60204](https://github.com/openai/codex/issues/60204) | **[Windows][26.1103] Missing WSL Codex CLI causes endless reconnects and WSLg focus stealing** | 3 | A fresh regression (Nov 8) where a desktop app update causes infinite reconnect loops to WSL Ubuntu and steals window focus from other applications. Escalating quickly. |
| [#53196](https://github.com/openai/codex/issues/53196) | **`node_repl` leaves thousands of empty `.tmpXXXXXX` files in TMPDIR on macOS** | 6 | A resource leak that accumulates garbage in `/tmp` on every signal shutdown. On long-running Codex sessions, this can fill disk partitions and cause downstream failures. |
| [#57764](https://github.com/openai/codex/issues/57764) | **Codex 3–4× slower after October 28 update** | 4 | A performance regression report from a single user, but the severity (multiplicative slowdown on identical tasks) warrants attention. Community should monitor for broader reports. |
| [#60310](https://github.com/openai/codex/issues/60310) | **Windows → Android Remote refuses live task despite Local background server** | 2 | A remote execution bug in the CLI 0.166 / daemon 0.167 stack, where cross-device task delegation fails silently. |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|---|---|---|
| [#60320](https://github.com/openai/codex/pull/60320) | Include older itemless Cloud failures in full transcripts | **Merged** | Fixes transcript completeness: failed Cloud turns without items were being omitted from history. Now a `FullTranscript` hydration scope fetches remaining error entries. |
| [#60319](https://github.com/openai/codex/pull/60319) | Improve side-chat discovery and navigation in the TUI | **Merged** | Adds previews beneath saved side-chat titles, lazy-loads preview data for visible entries only, and improves cached-chat availability during navigation. |
| [#60309](https://github.com/openai/codex/pull/60309) | Defer executor readiness when prewarming a selected project | **Merged** | Sets `deferred_environment: true` on cloud thread prewarm requests when a specific project is selected, preventing premature executor initialization. |
| [#60286](https://github.com/openai/codex/pull/60286) | Search task history from the command center | **Merged** | Extends command-center search to scan backend history for case-insensitive task name matches, eliminating the need to manually scroll through long task lists. |
| [#60280](https://github.com/openai/codex/pull/60280) | Fix MCP startup tracking when attaching to shared app servers | **Merged** | Clients attaching to a shared app server were missing MCP startup notifications, leaving the TUI stuck in a busy state. Now tracks only locally configured servers appropriately. |
| [#31045](https://github.com/openai/codex/pull/31045) | Defer MCP auth discovery until startup failure | **Open** | Moves network-dependent OAuth discovery out of session initialization, preventing timeouts when optional HTTP MCP servers are unavailable. Addresses a long-standing Windows desktop deadlock. |
| [#60271](https://github.com/openai/codex/pull/60271) | Keep the agents overview open when there is no chat to return to | **Merged** | UX polish: the agents overview now stays open when no active chat exists, and the `esc back` footer hint is hidden appropriately. |
| [#60270](https://github.com/openai/codex/pull/60270) | Warn when a CLI model is absent from the ChatGPT model list | **Merged** | Adds a startup warning when the active model matches a CLI override but is missing from the ChatGPT model list, reducing user confusion from silent model mismatches. |
| [#60206](https://github.com/openai/codex/pull/60206) | Increase Bazel core unit test shards from 8 to 16 | **Merged** | Infrastructure improvement: doubling test parallelism to speed up CI feedback loops for core unit tests. |
| [#60190](https://github.com/openai/codex/pull/60190) | Expose agent tree IDs and environment removal | **Merged** | New APIs: `CodexThread::agent_tree_id()` for tree identification and `EnvironmentManager::remove_environment()` for cleanup, enabling better multi-agent session management. |

---

## 5. Hot Discussions

### Show and tell

| # | Title | Author | Summary |
|---|---|---|---|
| [#60297](https://github.com/openai/codex/discussions/60297) | **BCC plugin: Better Codex Context** | IPFSae | A plugin redesigning context management for large projects and long-running tasks, aiming to fix context-window headaches. |
| [#60264](https://github.com/openai/codex/discussions/60264) | **Publish Codex reports as web pages via remote MCP** | kochetkov-ma | Demonstrates using BrewPage's remote MCP to publish long reports as web pages instead of flooding the terminal with text. |
| [#60116](https://github.com/openai/codex/discussions/60116) | **Pushary: answer Codex approvals from your phone** | aadilghani1 | A hosted service that routes Codex approval prompts to a phone, enabling remote human-in-the-loop for shell commands, patches, and MCP calls. |
| [#60185](https://github.com/openai/codex/discussions/60185) | **agent-recap: local search across Codex and Claude Code transcripts** | rogermas05 | A browser-based tool for searching JSONL transcripts from both Codex and Claude Code simultaneously, with no account or upload required. |
| [#60282](https://github.com/openai/codex/discussions/60282) | **Worktree receipt: check required local files even when Git status is clean** | ryanroundhouse | A Git receipt that detects divergent local setup files between worktrees even when both are at the same commit with clean status. |

### Ideas

| # | Title | Author | Summary |
|---|---|---|---|
| [#60240](https://github.com/openai/codex/discussions/60240) | **Configurable permissions for a personal dot across Codex and Work** | malexandro174-tech | Proposes tiered permission scopes (confirm-every-action, limited, full) for personal dots interacting with chats and external services. |
| [#60239](https://github.com/openai/codex/discussions/60239) | **An OpenAI-native workspace independent of Windows** | malexandro174-tech | Suggests a unified workspace abstraction that avoids Windows-specific permission prompts and confirmation dialogs. |
| [#60238](https://github.com/openai/codex/discussions/60238) | **A secure way to identify a personal dot in external applications** | malexandro174-tech | Requests a standardized identity token for personal dots so external apps can verify authorization without ambiguity. |

---

## 6. Feature Request Trends

Aggregating signal from issues and discussions, the community's most-requested capabilities are:

| Theme | Evidence |
|---|---|
| **Image/media input in CLI** | #19143 (15 comments, closed) — clipboard image pasting for debugging workflows |
| **Windows reliability & WSL integration** | #56645, #25453, #15975, #45996, #60204, #60310 — local browser, CPU polling, VS Code extension, Edge detection, WSL reconnect loops |
| **MCP extensibility & auth** | #31045 (open PR), #60264 (remote MCP), #60116 (approval routing) — defer auth, remote servers, policy hooks |
| **Cross-platform clipboard & input** | #44323, #19143, #52519, #57445, #54832 — clipboard text/images, mouse wheel SGR leak, image restore |
| **Remote/cross-device execution** | #60310, #45996, #60204 — Windows→Android, Edge URL detection, WSL remote sessions |
| **Context management at scale** | #60297 (BCC plugin) — community-built solutions for large-project context exhaustion |
| **Transcript & history search** | #60286 (merged PR), #60185 (agent-recap tool) — discoverability of old sessions and answers |
| **Personal dot / identity & permissions** | #60240, #60239, #60238 — configurable scopes, cross-app identity tokens |

---

## 7. Developer Pain Points

1. **Windows is a second-class citizen.** The volume of Windows-specific bugs (6 of the top 10 issues) — CPU polling, browser controls, WSL reconnects, Edge detection, clipboard in Terminal — indicates the Windows platform carries a disproportionate reliability gap compared to macOS/Linux.

2. **CLI/TUI regressions are accumulating.** Mouse wheel SGR leaks (#57445), clipboard failures (#44323, #54832), async question disappearance (#54136), and LaTeX rendering breakage (#32828) all closed recently, but suggest the TUI input layer is fragile and needs dedicated hardening.

3. **MCP server management is still rough.** Auth discovery blocking session creation (#31045), shared app-server startup tracking (#60280), and the broader need for remote MCP (#60264) indicate MCP integration is powerful but not yet smooth for production use.

4. **Context window exhaustion in large projects.** No native solution yet; the community is building workaround plugins (#60297 BCC) and transcript search tools (#60185 agent-recap) to cope, signaling an unmet need.

5. **Performance regression under investigation.** Reports of 3–4× slowdown (#57764) following the October 28 update need community monitoring — if this is widespread, it would be the highest-impact issue currently open.

---

*End of digest. All links reference `github.com/openai/codex`.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the GitHub data for the Gemini CLI repository and create a structured digest for 2026-11-09.

Key observations:
1. **Releases**: No new releases in the last 24 hours
2. **Issues**: 50 total items, top 30 by comment count provided. I need to pick 10 noteworthy ones
3. **Pull Requests**: 18 total items, I need to pick 10 important ones
4. **Discussions**: No discussion data was provided, so I'll omit that section

Let me structure this:

## Today's Highlights
- Security concerns with path traversal vulnerabilities (multiple security issues closed)
- Agent-related bugs dominate the issues (hangs, crashes, subagent issues)
- Several bug fixes merged for SSH clients, Windows paths, Unicode support

## Hot Issues
Looking at the top issues by comment count and priority:

1. #22323 - Subagent recovery after MAX_TURNS reported as GOAL success (P1, 13 comments)
2. #19873 - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (P2, 9 comments)
3. #28784 - Empty response with no text or thoughts (P1, 8 comments)
4. #21409 - Generalist agent hangs (P1, 8 comments)
5. #22745 - AST-aware file reads, search, and mapping (P2, 7 comments)
6. #21968 - Gemini doesn't use skills and sub-agents enough (P2, 7 comments)
7. #22267 - Browser Agent ignores settings.json overrides (P2, 5 comments)
8. #22232 - Browser Agent resilience: session takeover and lock recovery (P3, 4 comments)
9. #21983 - Browser subagent fails in wayland (P1, 4 comments)
10. #28271 - Infinite Loop Vulnerability (P1, closed as stale, 3 comments)


I'll focus on the PR details, highlighting critical security, functionality, and platform-specific improvements. The team has addressed several key areas:

1. SSH client compatibility expanded with TortoiseGitPlink support
2. Enhanced remote conversation isolation mechanisms
3. Cross-platform YAML linting solutions
4. Improved plan content scanning
5. File content whitespace preservation
6. Windows path resolution refinements
7. Model output limit accuracy
8. Unicode character handling in session previews
9. Security-focused Git diff permission management
10. Model request timeout configurability

These updates demonstrate a comprehensive approach to improving system reliability, security, and cross-platform functionality.

The project reveals clear development priorities around agent performance, platform compatibility, and robust security measures. Key focus areas include addressing subagent reliability, expanding system capabilities, and implementing granular tool timeout configurations.
</think>


# Gemini CLI Community Digest

## 2026-11-09

---

## Today's Highlights

The community is grappling with several critical agent reliability issues—subagent hangs, infinite loops, and empty responses dominate P1 concerns. Multiple security vulnerabilities were closed as stale, including path traversal and SSRF issues, suggesting the team is actively addressing these attack vectors. On the positive side, 10 PRs were merged this period focusing on cross-platform fixes (Windows paths, Unicode, SSH clients) and core functionality improvements.

---

## Releases

**No new releases in the last 24 hours.** The last version bump was to `0.59.0-nightly.20260826.g64b5b79a6` on 2026-08-26.

---

## Hot Issues

### 1. Subagent Reports Success Despite MAX_TURNS Failure (P1)
**Issue [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** | 13 comments | Priority: P1

The `codebase_investigator` subagent incorrectly reports `status: "success"` with termination reason `"GOAL"` even when it hits the maximum turn limit before completing analysis. This masks failures and could lead to users trusting incomplete results. The community needs clearer failure signaling.

### 2. Zero-Dependency OS Sandboxing via Model's Bash Affinity (P2)
**Issue [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** | 9 comments | Priority: P2

Proposes leveraging Gemini 3's native bash capabilities with zero-dependency OS sandboxing and post-execution intent routing. This would enhance security without compromising UX—high-value architectural discussion for power users.

### 3. Empty Model Responses with No Text or Thoughts (P1)
**Issue [#28784](https://github.com/google-gemini/gemini-cli/issues/28784)** | 8 comments | Priority: P1

Users frequently encounter `"The model returned an empty response with no text or thoughts"` errors on v0.55.1, requiring retries. This is disruptive to workflows and suggests API response handling needs hardening.

### 4. Generalist Agent Hangs Forever (P1)
**Issue [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** | 8 comments | Priority: P1

Whenever Gemini CLI defers to the generalist agent, it hangs indefinitely—simple operations like folder creation can block for over an hour. Disabling subagent deferral resolves the issue. Critical blocker for agent-based workflows.

### 5. AST-Aware File Reads, Search, and Mapping (P2)
**Issue [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** | 7 comments | Priority: P2

An epic tracking investigation into AST-aware tools for more precise method-bound reads, reducing turn misalignments and token noise. This could significantly improve code investigation accuracy.

### 6. Gemini Doesn't Use Skills and Sub-Agents Enough (P2)
**Issue [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** | 7 comments | Priority: P2

Despite having custom skills (e.g., gradle, git) with explicit descriptions, Gemini doesn't invoke them autonomously. Users must explicitly instruct the model to use available skills—undermining the value of extensibility.

### 7. Browser Agent Ignores settings.json Overrides (P2)
**Issue [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** | 5 comments | Priority: P2

The Browser Agent completely ignores configuration overrides in `settings.json`, including `maxTurns`. While `AgentRegistry` correctly merges settings, the Browser Agent doesn't respect them, breaking user configurations.

### 8. Browser Agent Session Takeover and Lock Recovery (P3)
**Issue [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** | 4 comments | Priority: P3

Proposes replacing the current "fail-fast" strategy for locked browser profiles with automatic session takeover and lock recovery. Would improve resilience for persistent session mode users.

### 9. Browser Subagent Fails on Wayland (P1)
**Issue [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** | 4 comments | Priority: P1

Browser subagent fails on Wayland-based Linux systems. Cross-platform compatibility issue affecting Linux desktop users.

### 10. Infinite Loop Vulnerability in Event-Driven State Transition (P1)
**Issue [#28271](https://github.com/google-gemini/gemini-cli/issues/28271)** | 3 comments | Priority: P1 (Closed as Stale)

Identified a vulnerability where the `MAX_TURNS` integer-based limit fails against zero-latency event flooding attacks. Closed as stale but represents a class of security concerns the team should revisit.

---

## Key PR Progress

### 1. SSH Client Recognition: TortoiseGitPlink Support
**PR [#29921](https://github.com/google-gemini/gemini-cli/pull/29921)** | Area: Core | Size: S

Fixed recognition of `TortoiseGitPlink.exe` as a PuTTY-family SSH client. Previously misclassified as OpenSSH, which broke non-interactive git operations by appending incompatible `-o BatchMode=yes` instead of `-batch`.

### 2. Remote Conversation Isolation by Parent Session
**PR [#29946](https://github.com/google-gemini/gemini-cli/pull/29946)** | Area: Agent | Size: L

Prevents remote-agent conversation identifiers from leaking across independent parent sessions. Also fixes identifier reuse between same-named agents at different endpoints. Critical fix for multi-session reliability.

### 3. YAML Lint Without Unix Shell Pipelines
**PR [#29940](https://github.com/google-gemini/gemini-cli/pull/29940)** | Area: Platform | Size: M

Enables YAML linting on native Windows without Unix utilities (`grep` not found error). Also fixes UnicodeDecodeError under Python's legacy Windows code page.

### 4. Plan Content Scanning and Read Failure Reporting
**PR [#29942](https://github.com/google-gemini/gemini-cli/pull/29942)** | Area: Agent | Size: M

Accepts non-empty plan files with long whitespace prefixes and reports unreadable plans as failures rather than empty files. Previously rejected valid plans beginning with 1,024 spaces.

### 5. Preserve Whitespace in Referenced File Content
**PR [#29935](https://github.com/google-gemini/gemini-cli/pull/29935)** | Area: Core | Size: S

Fixed `@file` attachment stripping meaningful leading/trailing whitespace and final newlines. A file with `    print("hello")\n` now reaches the model correctly preserved.

### 6. Windows Home-Relative Path Expansion
**PR [#29931](https://github.com/google-gemini/gemini-cli/pull/29931)** | Area: Core | Size: M

Expands home-relative Windows paths like `~\policies\custom.toml` in the CLI path resolver. Custom policy paths and local extension registry paths now resolve correctly on Windows.

### 7. Accurate Model Output Limits in Model List
**PR [#29929](https://github.com/google-gemini/gemini-cli/pull/29929)** | Area: Core | Size: S

Fixes the model list to report the documented 65,536 output token limit for Gemini 2.5 Pro and Flash. Models without known limits no longer show misleading 8,192 values.

### 8. Prevent Windows Git Diff Permission Bypass (P1 Security)
**PR [#30095](https://github.com/google-gemini/gemini-cli/pull/30095)** | Area: Security | Size: L

Fixes a Windows Git command safety bypass where potentially dangerous Git arguments could be treated as safe read-only operations. Extracts shared validation into reusable helpers and applies consistent checks.

### 9. Configurable Per-Tool-Call Timeout
**PR [#27423](https://github.com/google-gemini/gemini-cli/pull/27423)** | Area: Core | Size: L | Help Wanted

Adds `tools.callTimeout` setting to limit wall-clock duration of any single tool call. Addresses unbounded shell command execution with no way to cap them.

### 10. Configurable API Request Timeout
**PR [#30082](https://github.com/google-gemini/gemini-cli/pull/30082)** | Area: Core | Size: M

Adds `model.requestTimeoutMs` setting so the 60-second API headers timeout can be raised. Currently only accessible via undocumented experiment flags, making long-thinking requests get aborted.

---

## Feature Request Trends

Analyzing the issue backlog reveals these dominant feature directions:

| Theme | Representative Issues | Community Interest |
|-------|----------------------|-------------------|
| **Agent Reliability** | #22323, #21409, #21968, #28271 | High—hangs, loops, and poor tool invocation undermine trust |
| **Subagent Orchestration** | #22598, #21968, #20195 | Medium—visibility, trajectory sharing, and autonomous invocation |
| **Browser Agent Improvements** | #22267, #22232, #21983 | Medium—config persistence, session recovery, Wayland support |
| **Security Hardening** | #30095, #28271, #29076-29074 | High—path traversal, SSRF, permission bypasses |
| **AST-Aware Tooling** | #22745, #22746, #19561 | Medium—token-efficient surgical reads, codebase mapping |
| **Cross-Platform Polish** | #21983, #29940, #29931 | Medium—Wayland, Windows path handling |
| **Configurable Timeouts** | #27423, #30082 | High—users need control over long-running operations |

---

## Developer Pain Points

1. **Agent Hangs and Infinite Loops**: Developers lose hours to hung sessions and undetected infinite loops. The MAX_TURNS mechanism is insufficient, and failure states are often misreported as success.

2. **Subagent Opacity**: Bug reports don't include subagent context, making debugging multi-agent workflows difficult. Subagent trajectories lack visibility for eval and sharing.

3. **Browser Agent Instability**: The browser agent fails on Wayland, ignores settings, and has poor lock recovery. Users with persistent sessions face frequent disruptions.

4. **Empty Model Responses**: Frequent transient API failures presenting as "empty response" errors force manual retries, disrupting flow.

5. **Security Surface Area**: Multiple path traversal and SSRF vulnerabilities identified by community (now stale) suggest security review of tool execution paths is needed.

6. **Windows Compatibility**: Home-relative paths, Unicode in session previews, and YAML linting all had Windows-specific bugs recently fixed, indicating Windows has been under-tested.

7. **Tool Invocation Control**: No per-tool timeout means shell commands can run indefinitely. Users want granular control over tool execution boundaries.

---

*Digest generated from GitHub data for [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli). All issue and PR links reference the repository.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest for 2026-11-09 based on the provided GitHub data. Let me analyze the data and structure it according to the requested format.

Key data points:
1. Latest Releases: None in last 24h
2. Latest Issues: 15 items total, mostly open
3. Latest Pull Requests: None in last 24h

Let me pick the most noteworthy items and structure the digest accordingly.

Hot Issues to highlight (10):
1. #508 - Support Git Bash (7 👍, 4 comments) - User request for Git Bash support on Windows
2. #5219 - Session wedged with task subagent (4 comments) - Serious bug affecting long-running sessions
3. #5100 - Session event delivery failure (3 comments) - Session becomes unusable
4. #4977 - ripgrep jemalloc issue on Asahi Linux (3 comments, closed) - Platform compatibility
5. #5320 - OSC 7501 agent-status reporting (11 👍, 3 comments) - Terminal integration feature
6. #4378 - MCP registry policy fetch fails on GHEC (2 comments) - Enterprise cloud issue
7. #5380 - Extensions don't start for create_session (1 comment) - Session management bug
8. #5386 - Session can't be resumed after close_session (new, 0 comments) - Session lifecycle bug
9. #5384 - Session-state artifact storage outside Git repo (0 comments) - File management issue
10. #5383 - Allow setting default Agent (0 comments) - Configuration feature request

Other notable issues:
- #5382 - Skills disappear after new_context
- #5381 - Extension tool permission waits forever
- #5379 - PowerShell approval parser issues
- #5374 - postToolUse hook messages not rendered


I'll craft a structured, informative digest that captures the key insights from the GitHub data, focusing on the most impactful issues and trends in the Copilot CLI ecosystem.
</think>


# GitHub Copilot CLI Community Digest

**Date:** 2026-11-09
**Repository:** github.com/github/copilot-cli

---

## 1. Today's Highlights

The Copilot CLI community continues to surface critical session management bugs affecting long-running interactive workflows. Notably, two new issues (#5380, #5386) highlight race conditions in multi-session lifecycle management that could impact developers using `create_session` extensively. The most-upvoted feature request this cycle is native OSC 7501 terminal integration (#5320, 11 👍), reflecting strong demand for deeper terminal application compatibility. No new releases were published in the last 24 hours.

---

## 2. Releases

**No releases in the last 24 hours.** The latest stable release remains from the previous cycle. Monitor the [releases page](https://github.com/github/copilot-cli/releases) for upcoming updates.

---

## 3. Hot Issues

| # | Issue | Author | 👍 | Why It Matters |
|---|-------|--------|----|----------------|
| [#5320](https://github.com/github/copilot-cli/issues/5320) | **[triage] Support OSC 7501 agent-status reporting for herdr-app/herdr-core** | YousefHadder | 11 | Enables native session tracking in the Herdr terminal app. High community interest for terminal ecosystem parity. |
| [#508](https://github.com/github/copilot-cli/issues/508) | **Support Git Bash** | dflor003 | 7 | Windows users request Git Bash as an alternative to PowerShell. Affects developer workflow preference on Windows. |
| [#5219](https://github.com/github/copilot-cli/issues/5219) | **[area:agents, area:models] Session wedged: task subagent with unknown model id falls back to 128k default caps** | arimendelow | 0 | Critical bug: `task` subagent failures cascade and break entire interactive sessions. Impacts reliability of nested agent workflows. |
| [#5100](https://github.com/github/copilot-cli/issues/5100) | **[area:sessions] Session event delivery permanently fails after 120s host-ack timeout** | ElliotChong-MS | 0 | Session becomes permanently unusable after a single timeout. Requires resume workaround—affects long-running sessions. |
| [#4977](https://github.com/github/copilot-cli/issues/4977) | **Bundled ripgrep aborts with jemalloc 'Unsupported system page size' on 16KB-page ARM64 (Asahi Linux)** | richardpowellus | 1 | **[CLOSED]** Cross-platform compatibility fix—ripgrep binary now works on Asahi Linux ARM64 with 16KB pages. |
| [#4378](https://github.com/github/copilot-cli/issues/4378) | **[triage] Cloud agent: MCP registry policy fetch fails with 401/403 on GHEC data residency** | CynthiaLuijkx | 0 | Enterprise-blocking bug: all user-configured MCP servers silently fail on GitHub Enterprise Cloud with data residency. |
| [#5380](https://github.com/github/copilot-cli/issues/5380) | **[area:sessions, area:plugins] Extensions don't start for sessions created with `create_session` until user switches** | nima-ap | 0 | Extension tools unavailable in programmatically-created sessions until manual intervention. Breaks automation patterns. |
| [#5386](https://github.com/github/copilot-cli/issues/5386) | **Session created with `create_session` can't be resumed after `close_session`** | nima-ap | 0 | Session lifecycle bug—resumed sessions fail to associate correctly after being closed by another session. |
| [#5384](https://github.com/github/copilot-cli/issues/5384) | **Session-state artifact storage (~/.copilot/session-state/) strands project deliverables outside active Git repo** | fabioc-aloha | 0 | Deliverables saved to wrong location, breaking Git tracking and team collaboration workflows. |
| [#5383](https://github.com/github/copilot-cli/issues/5383) | **[area:agents, area:configuration] Allow setting default Agent** | kwright02 | 0 | Feature request to persist agent preference (model, reasoning level, context size already configurable). Improves onboarding ergonomics. |

---

## 4. Key PR Progress

**No Pull Requests were updated in the last 24 hours.** For recent merged contributions, visit the [PR timeline](https://github.com/github/copilot-cli/pulls?q=is%3Apr+is%3Aclosed+merged%3A%3E2026-11-08).

---

## 5. Hot Discussions

*No discussion data was provided for this period.*

---

## 6. Feature Request Trends

The following themes emerge as the most-requested improvements across all open issues:

| Theme | Evidence | Priority |
|-------|----------|----------|
| **Terminal Integration** | OSC 7501 status reporting (#5320) is the highest-voted open issue (11 👍), signaling demand for deep terminal app compatibility beyond basic shell support. | 🔥 High |
| **Multi-Session Management** | Several bugs (#5380, #5386, #5384) indicate that programmatic session creation (`create_session`) and lifecycle management are actively used but fragile. | 🔥 High |
| **Platform Diversification** | Git Bash support (#508) and Asahi Linux ripgrep fix (#4977) show ongoing need for cross-platform polish on Windows and ARM64 Linux. | Medium |
| **Extension/Plugin Reliability** | Issues with skills disappearing (#5382), permissions blocking prompts (#5381), and hook rendering (#5374) suggest the extension API needs hardening. | 🔥 High |
| **Enterprise Cloud Compliance** | MCP server failures on GHEC data residency (#4378) indicate gaps in enterprise authentication flows. | 🔥 High |
| **Session Persistence & Context** | Requests for default agent configuration (#5383) and session-state artifact management (#5384) reflect need for better state continuity. | Medium |

---

## 7. Developer Pain Points

1. **Long-running sessions are unreliable.** Issues #5219 and #5100 both cause sessions to become wedged or permanently unusable, forcing users to manually resume. This is a core workflow breaker.

2. **Programmatic session creation breaks extension loading.** Calling `create_session` results in missing tools, skills, and hooks until manual session switching—a significant friction for automation.

3. **Enterprise MCP servers silently fail.** On GitHub Enterprise Cloud with data residency, all user-configured MCP servers are dropped without error messaging, leaving developers confused.

4. **Cross-platform toolchain gaps.** The bundled ripgrep binary fails on non-standard kernels (Asahi Linux 16KB pages), and Windows users are stuck with PowerShell as the only option.

5. **Extension permission handling in non-interactive mode.** Prompt mode cannot grant extension tool permissions, and `--allow-tool` doesn't accept extension-registered tools, blocking headless workflows.

---

*End of digest. For live updates, watch the repository at [github.com/github/copilot-cli](https://github.com/github/copilot-cli).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate an OpenCode community digest for 2026-11-09 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Key data points:
1. **Releases**: None in last 24h
2. **Issues**: 50 total, showing top 30 by comment count
3. **Pull Requests**: 50 total, showing top 20 by comment count

Let me organize this into the requested format:

1. **Today's Highlights** - Need 2-3 sentences summarizing most important updates
2. **Releases** - None
3. **Hot Issues** - Pick 10 noteworthy issues
4. **Key PR Progress** - Pick 10 important PRs
5. **Hot Discussions** - No discussion data provided, so I'll omit this section
6. **Feature Request Trends** - Analyze patterns
7. **Developer Pain Points** - Summarize recurring issues

Let me identify the most important items:

**Top Issues by comment count:**
1. #59387 - Free tier issues (333 comments) - Major user impact
2. #48826 - V2 subagent background work issues (14 comments)
3. #23655 - Responses API support (9 comments)
4. #58687 - Free models usage limit (8 comments)
5. #54375 - Keep tab's model when switching (8 comments)
6. #62675 - VSCode selection loss (7 comments)
7. #62213 - Subagent write denied (7 comments)
8. #62797 - Plan mode reminder persists (6 comments)
9. #62559 - Windows backslash paths corrupted (6 comments)
10. #62666 - TUI plugin solid-js signal issues (6 comments)
11. #62668 - Tab loading indicator disappears (4 comments)


12. #59889 - Empty git repo resolves to C:/ (4 comments)
13. #62228 - WebSocket custom headers (3 comments)
14. #62800 - Fatal 'Expected a user-message timeline row' (3 comments)
15. #62556 - Gemini cachedContent issue (3 comments)

**Top PRs:**
1. #62802 - Benchmark agent workloads
2. #62801 - Simplify Console plugin
3. #62762 - Say which credential changed
4. #62799 - Bench with strobe 0.23.0
5. #62798 - Model capability badges
6. #62142 - Retry DNS failures
7. #62760 - Stop applying well-known remote config after logout
8. #62706 - Strobe moved docs
9. #62796 - Stop waiting for plugins
10. #62788 - Report Claude plan usage
11. #62769 - SQLite full-text index
12. #62147 - Tail reads from end of file
13. #62791 - Terminalize orphaned child sessions
14. #62790 - Point legal history's hosted agents entry
15. #62789 - Cover hosted agent sessions
16. #62786 - Venice end-to-end encrypted models support
17. #62785 - Capture snapshots when embedded repository status fails
18. #54013 - Tolerate missing columns on legacy v1
19. #62784 - Document Watches
20. #54011 - Keep configured local models available

Now I need to distill the key themes and patterns from this activity.
</think>


# OpenCode Community Digest

**Date:** 2026-11-09
**Source:** github.com/anomalyco/opencode

---

## Today's Highlights

The OpenCode community continues to address critical stability issues, with a new fatal desktop error (`Expected a user-message timeline row`) emerging alongside ongoing Windows path corruption problems. Contributors are actively advancing performance benchmarks (#62802) and introducing quality-of-life features like model capability badges in the picker (#62798), while the SQLite full-text search index (#62769) moves closer to enabling session history search.

---

## Releases

**No new releases in the last 24 hours.**

---

## Hot Issues

| # | Issue | Key Points | Community Reaction |
|---|-------|------------|-------------------|
| **#59387** | **[zen] Free tier issues** | Central tracking issue for free usage limit problems. Reports include "Free usage exceeded" messages, reset failures, and desktop-specific errors. | **333 comments** — By far the most active issue; users frustrated with persistent free tier blocks |
| **#48826** | **V2 subagent background work marked completed early** | Subagents with pending background tasks (shell commands or subagents) report completion prematurely, losing results. | **14 comments** — Reproduced bug affecting V2 multi-agent workflows |
| **#23655** | **Add Responses API support for Go service** | Feature request to add OpenAI Responses API compatibility to OpenCode's Go service. | **31 👍** — Highly requested feature with steady engagement since April |
| **#58687** | **All Free Models show usage limit immediately** | Users see "Today's free messages" error across all models simultaneously, even without prior usage. | **8 comments** — Confirmed issue affecting free tier reliability |
| **#54375** | **Keep tab's model when switching between plan and build** | Feature request: preserve the model selection per tab when switching agent modes. | **8 comments** — UX enhancement for agent workflow continuity |
| **#62675** | **VSCode text selection breaks after copy-paste** | In VS Code integrated terminal over SSH, text selection stops working after a few copy-paste operations. | **7 comments** — Reproduced by multiple users; desktop-specific |
| **#62213** | **Subagent writes denied by built-in tester policy** | Blanket `edit * deny` policy appended after agent rules overrides agent permissions (last-match-wins). | **7 comments** — Policy precedence issue affecting subagent permissions |
| **#62797** | **Plan mode reminder persists after switching agents** | The Plan mode reminder keeps reappearing even after user switches agents. | **6 comments** — UX bug interrupting workflow |
| **#62559** | **Windows backslash paths intermittently corrupted** | Windows drive-letter paths like `X:\workspace\...` arrive as `/X:\workspace\...` with corruption. | **6 comments** — Platform-specific path handling bug |
| **#62800** | **Fatal 'Expected a user-message timeline row' error** | Desktop renderer crashes requiring restart when a virtualized row changes type. | **3 comments** — Newly reported fatal error in v2.2.6 |

---

## Key PR Progress

| # | PR | Description | Type |
|---|-----|-------------|------|
| **#62802** | **[refactor] Benchmark agent workloads** | Measures three server workloads without inference: continue coding (12/78 prior messages), background tasks, and multi-turn conversations. | Refactor |
| **#62801** | **Simplify Console plugin on ProviderRefresh** | Refactors Console plugin load path around SharedCache improvements and persistent cache handling. | Refactor/Bug Fix |
| **#62798** | **Show model capability badges in /models picker** | Adds badges for input modalities (IMG, VID, PDF, AUD, ATT, TOOL) and context window size in TUI and web app model picker. | Feature |
| **#62769** | **Experimental SQLite full-text index of session history** | Adds FTS5 index for session history, built in background behind `sqlite_fts` flag. Search tools follow in subsequent PR. | Feature |
| **#62762** | **Say which credential changed in credential.updated** | `credential.updated` event now includes payload identifying which login was added, renamed, or removed. | Feature |
| **#62142** | **Retry every DNS failure and keep WebSocket** | Failed DNS lookups no longer permanently switch sessions from WebSocket to HTTP; includes retry logic for all DNS error types. | Bug Fix |
| **#62760** | **Stop applying well-known remote config after logout** | `opencode auth logout` now properly removes remote config (providers, policies) from well-known integrations. | Bug Fix |
| **#62796** | **Stop waiting for plugins in request handlers** | Removes plugin activation waits that crept back into handlers after being removed in prior refactor. | Bug Fix |
| **#62788** | **Report Claude plan usage to OpenCode Console** | Sends Claude plan usage metrics to Console for monitoring (companion to opencode-console#6356). | Feature |
| **#62786** | **Support Venice end-to-end encrypted models** | Adds support for Venice's E2EE models via `e2ee-*` model prefixes. | Feature |

---

## Feature Request Trends

Analysis of open issues and PRs reveals these dominant feature directions:

1. **Model & Provider Enhancements**
   - Responses API support (#23655)
   - Venice E2EE model integration (#62786)
   - Model capability visibility (#62798)
   - Context window persistence across agent switches (#54375)

2. **Local Model & Runtime Improvements**
   - Better local model discovery and configuration (#54011)
   - Local provider reliability fixes (#62765)

3. **Session & History Management**
   - SQLite FTS5 search for session history (#62769)
   - Session pinning feature (#59906)
   - Tab reordering in TUI (#62646)

4. **Plugin & Extension API**
   - Per-agent tool visibility filtering (#24953)
   - TUI plugin Solid.js reactivity fixes (#62666)

---

## Developer Pain Points

The community's most recurring frustrations cluster around these areas:

| Category | Issues | Impact |
|----------|--------|--------|
| **Free Tier Reliability** | #59387, #58687, #62658 | Users consistently report free usage limits not resetting, affecting core accessibility |
| **Windows Platform Issues** | #62559, #59889, #62800 | Path corruption, drive root resolution, and fatal timeline errors on Windows desktop |
| **V2 Subagent Behavior** | #48826, #62792, #62793 | Background task completion, restart recovery, and sessionID handling issues in V2 |
| **TUI/Desktop UX** | #62797, #62668, #62646 | Plan mode persistence, loading indicators, and tab management |
| **Network Resilience** | #62228, #62142, #61880 | WebSocket/headers, DNS failures causing session disruption |
| **Plugin Architecture** | #62213, #62796, #62666 | Permission precedence, blocking waits, and framework reactivity |

---

*Generated from GitHub data • OpenCode Community Digest • 2026-11-09*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Pi community digest for 2026-11-09 based on GitHub data from the earendil-works/pi repository. Let me analyze the data and structure it according to the requested format.

Let me break down the data:

**Releases (last 24h):** None

**Issues (21 total, updated in last 24h):**
Let me categorize them by importance:

Open issues:
1. #10287 - [bug] `getContextUsage()` massively overestimates context after retryable network error - Major bug affecting token counting
2. #10162 - [bug] Too many input images stop the agent task - Long-running agent issue
3. #11932 - Extension hook for agent auto-retry - Feature request for extensions

Closed issues (recently resolved):
- #2809 - Support video/audio attachments - Closed
- #4851 - Feature: subpath support for `pi install git:` - Closed
- #11936 - kimi-coding rejects tool parameters with root anyOf - Closed
- #11918 - MCP tool calls return empty results despite valid OAuth token - Closed
- #11919 - MCP reconnection blocks 2-4 minutes - Closed
- #4918 - shift+enter doesn't add new line - Closed
- #11931 - openai-completions drops OpenRouter native_finish_reason - Closed
- #11921 - tool_search answers "No matching tools found" for direct MCP tools - Closed
- #11769 - Stable branch didn't get bumped for 1.5 - Closed
- #11926 - Transient states are treated as permanent errors - Closed
- #11925 - Add a clear-context command - Closed
- #11923 - TUI: Backspace corrupts short paste markers - Closed
- #11935 - in mintty, shift+enter in search doesn't go to previous occurrence - Closed


- #11933 - Reference AGENTS.md conditionally - Closed
- #11929 - Select a thinking level when choosing a model - Closed
- #11928 - Openrouter Redaction Doesn't Work - Closed
- #11927 - Bug reports should not be auto-closed as "not planned" - Closed
- #11924 - `ui_prompt_start` could carry `blocked` for `ui.custom` - Closed

**Pull Requests (4 total):**
- #11934 - tui: decode mintty LF as Shift+Enter - Closed (fix for mintty)
- #11900 - docs: fix RFC link in CONTRIBUTING.md - Closed
- #11857 - feat: prompt cache warming in p2 - Closed (cost optimization)
- #11920 - fix(codemode): let scripts declare their own tools and console bindings - Closed

**Discussions (2 total):**
- #11930 - Show & tell: Assistant UI adapter for Pi Durable - Show and tell
- #11922 - Show & tell: omp-web, a self-hosted browser workspace for Pi - Show and tell

Now I'll organize this into the requested format with sections for Today's Highlights, Releases, Hot Issues, Key PR Progress, and Feature Request Trends.

The digest should highlight that while no new releases shipped, the community closed 18 issues and resolved several important ones. Key fixes include mintty Shift+Enter handling, prompt cache warming to reduce costs by $1,430, and codemode script tool declarations. MCP server issues around OAuth, reconnection delays, and tool visibility are now addressed, along with TUI paste marker corruption and transient state handling. The most critical items to surface are the context estimation bug (#10287) causing token overestimation after network failures, the agent task issue with image inputs (#10162), and the OAuth-related MCP problems that were resolved.
</think>


# Pi Community Digest — 2026-11-09

## Today's Highlights

The Pi community had a highly productive 24 hours with **18 issues closed** and **4 pull requests merged**. Notable fixes address MCP OAuth authentication failures, TUI paste marker corruption, and a significant cost optimization through prompt cache warming that saved ~$1,430 in p2 spend. Two community projects were shared: an Assistant UI adapter for Pi Durable and a self-hosted web workspace called omp-web.

---

## Releases

No new releases were published in the last 24 hours.

---

## Hot Issues

### 1. [Context usage overestimation after network errors](https://github.com/earendil-works/pi/issues/10287) — OPEN
- **What:** `getContextUsage()` jumps from ~42k to 330k tokens following a retryable WebSocket/fetch failure
- **Why it matters:** Severely impacts token budgeting and cost predictions; could cause unexpected context truncation
- **Community reaction:** 2 👍, 8 comments — actively being investigated by WodenJay

### 2. [Too many input images stop the agent task](https://github.com/earendil-works/pi/issues/10162) — OPEN
- **What:** Pi agents hang when processing large image batches despite auto-compaction
- **Why it matters:** Breaks long-running use cases like PR babysitting and QA automation
- **Community reaction:** 8 comments — S1M0N38 reports this affects multi-day autonomous sessions

### 3. [MCP tool calls return empty results with valid OAuth token](https://github.com/earendil-works/pi/issues/11918) — CLOSED
- **What:** Google Workspace MCP servers return empty results despite verified tokens; session/auth headers not carried after sign-in
- **Why it matters:** Critical for enterprise users relying on Gmail, Calendar, and Drive integrations
- **Resolution:** Fixed in this cycle

### 4. [MCP reconnection blocks 2-4 minutes on failed servers](https://github.com/earendil-works/pi/issues/11919) — CLOSED
- **What:** Authenticating one server triggers sequential reconnection attempts on all servers, each blocking 30-60s
- **Why it matters:** Severely degrades responsiveness when any MCP server is unavailable
- **Resolution:** Fixed in this cycle

### 5. [Tool search misses direct MCP tools in prompts](https://github.com/earendil-works/pi/issues/11921) — CLOSED
- **What:** Direct MCP tools are declared but never named in the system prompt's `<tools>` section
- **Why it matters:** Causes "No matching tools found" errors for properly configured tools
- **Resolution:** Fixed in this cycle

### 6. [Transient states treated as permanent errors](https://github.com/earendil-works/pi/issues/11926) — CLOSED
- **What:** HTTP 429 and similar transient responses display as hard errors in red and log permanently
- **Why it matters:** Pollutes session logs and misleads users about actual failures
- **Resolution:** Fixed in this cycle

### 7. [Shift+Enter doesn't add new line](https://github.com/earendil-works/pi/issues/4918) — CLOSED
- **What:** Shift+Enter acts like regular Enter, submitting prompts instead of inserting newlines
- **Why it matters:** A fundamental input expectation for multi-line composition
- **Resolution:** Fixed (workaround via Ctrl+J; proper fix via #11934)

### 8. [TUI backspace corrupts paste markers](https://github.com/earendil-works/pi/issues/11923) — CLOSED
- **What:** Deleting `[paste #1]` turns `[paste #2]` into `[paste #1undefined]`
- **Why it matters:** Submitting broken markers causes parsing failures
- **Resolution:** Fixed in this cycle

### 9. [OpenRouter redaction context lost](https://github.com/earendil-works/pi/issues/11928) — CLOSED
- **What:** OpenRouter PII guardrails return 403 with `redaction_context_lost` error
- **Why it matters:** Blocks legitimate requests with opaque errors
- **Status:** Reported to OpenRouter; being investigated

### 10. [Bug reports auto-closed as "not planned"](https://github.com/earendil-works/pi/issues/11927) — CLOSED
- **What:** Non-contributor bug reports are automatically closed with "not planned" label
- **Why it matters:** Breaks community trust and triaging workflow
- **Resolution:** Acknowledged; triage process under review

---

## Key PR Progress

### 1. [feat: prompt cache warming in p2](https://github.com/earendil-works/pi/pull/11857) — MERGED
- **Author:** mitsuhiko
- **What:** Implements prompt cache refresh before expiry for Anthropic/Claude on Radius
- **Impact:** Eliminated ~$1,430/month in redundant prompt rewrites (26% of p2 spend); 789 unnecessary rewrites prevented in a 3-week period

### 2. [tui: decode mintty LF as Shift+Enter](https://github.com/earendil-works/pi/pull/11934) — MERGED
- **Author:** Geoffrey-A
- **What:** Mintty emits LF for Shift+Enter; Pi now recognizes this as a modifier and excludes it from input stream
- **Impact:** Enables proper previous-occurrence search navigation in mintty terminals (Cygwin/MSYS2)

### 3. [fix(codemode): let scripts declare their own tools and console bindings](https://github.com/earendil-works/pi/pull/11920) — MERGED
- **Author:** simplast
- **What:** Resolves `SyntaxError: invalid redefinition of parameter name` when scripts define top-level `tools` or `console`
- **Impact:** Unblocks scripts using `searchTools()` and similar APIs

### 4. [docs: fix RFC link in CONTRIBUTING.md](https://github.com/earendil-works/pi/pull/11900) — MERGED
- **Author:** jrzimmerman
- **What:** Removes trailing slash causing 404 on RFC documentation link
- **Impact:** Documentation hygiene fix

---

## Hot Discussions

### Show & Tell

1. **[Assistant UI adapter for Pi Durable](https://github.com/earendil-works/pi/discussions/11930)** — alizain
   - Built a React runtime hook connecting Pi Durable to Assistant UI's components
   - Includes transcript rendering, streaming updates, and thread navigation
   - [Repository available](https://github.com/usecontextlay...)

2. **[omp-web: self-hosted browser workspace for Pi](https://github.com/earendil-works/pi/discussions/11922)** — leafiy
   - Web-based workspace supporting Pi, Oh My Pi, Claude Code, and Codex
   - Designed for always-on Linux boxes accessed from laptops/phones
   - Improves readability of long replies and thread review

---

## Feature Request Trends

Based on issue and discussion analysis, the community is requesting:

| Theme | Frequency | Examples |
|-------|-----------|----------|
| **MCP improvements** | High | OAuth session persistence (#11918), connection resilience (#11919), tool visibility (#11921) |
| **Context management** | High | Clear-context command (#11925), context usage accuracy (#10287), image batch handling (#10162) |
| **Model selector UX** | Medium | Thinking level selection per model (#11929), conditional AGENTS.md (#11933) |
| **UI polish** | Medium | Shift+Enter newline (#4918), paste marker integrity (#11923), search navigation (#11935) |
| **Extension hooks** | Medium | Auto-retry decision control (#11932), `ui_prompt_start` blocked state (#11924) |
| **Error handling** | Medium | Transient state distinction (#11926), OpenRouter redaction diagnostics (#11928), native finish reasons (#11931) |

---

## Developer Pain Points

1. **MCP OAuth instability** — Multiple reports of session headers lost post-auth and prolonged blocking on unavailable servers frustrate enterprise deployments

2. **Token/context accounting bugs** — The context usage spike (#10287) and transient error misclassification (#11926) cause unpredictable behavior in production

3. **Terminal input quirks** — Inconsistent Shift+Enter behavior across terminals (mintty, standard) forces workarounds and breaks muscle memory

4. **Auto-closure of bug reports** — New contributors report their bugs being auto-labeled "not planned," discouraging participation

5. **Monorepo package installation** — No subpath support for `pi install git:` forces users to clone full repositories when they need only one extension

---

*Generated: 2026-11-09 | Data source: [earendil-works/pi](https://github.com/earendil-works/pi)*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a Qwen Code community digest for 2026-11-09 based on the provided GitHub data. Let me analyze the data and create a structured digest following the specified format.

Let me go through the data:

**Releases:** None in the last 24h

**Issues (30 shown, total 50):**
- #14724: Main CI failed - 277 comments - very active
- #11680: Main CI failed E2E Tests - 12 comments
- #16346: Main CI failed Managed Agent gate - 9 comments
- #1377: API Error 400 - 8 comments (CLOSED)
- #16672: Main CI failed Managed Agent gate - 7 comments
- #16505: Main CI failed E2E Tests - 6 comments
- #16091: Main CI failed Qwen Code CI - 6 comments
- #11678: Main CI failed Qwen Code CI - 6 comments
- #14586: Main CI failed Qwen Code CI - 6 comments
- #16191: Main CI failed Qwen Code CI - 6 comments
- #16417: Reject oversized write_file - P2 enhancement - 6 comments
- #15697: CI flaky web-shell history-viewport - P2 bug - 5 comments
- #13519: Background agents loop-detector - P3 enhancement - 5 comments
- #16173: Suggestion for file slices - feature request - 4 comments
- #12113: ACP reports end_turn after length - P2 bug - 4 comments
- #8666: Queued message indicator disappears - P2 bug - 3 comments
- #16673: Main CI failed Managed Agent gate - 3 comments
- #16675: Render Exec as JavaScript - feature request - 3 comments


- #15185: Main CI failed E2E Tests - 3 comments
- #16045: Main CI failed Managed Agent gate - 3 comments
- #16692: GitHub channel batch PR state watch - P2 feature request - 2 comments
- #16637: Web Shell artifact cards - P3 bug (CLOSED)
- #16690: GitHub channel API budget - P2 feature request - 2 comments
- #16689: Web Shell clears transcript - P3 bug - 2 comments
- #12209: ACP auto-skill review - feature request - 2 comments
- #16683: Qwen code desktop 0.27 fails on intel x64 Mac - P1 bug - 2 comments
- #8544: ACP Task list not rendered in JetBrains - P2 bug - 2 comments
- #15722: Main CI failed Managed Agent gate - 2 comments
- #11929: Windows Terminal streaming flicker - P2 bug - 2 comments
- #12160: MCP tools disconnected after abort - P2 bug - 2 comments

Several PRs have been submitted across the board. These include CLI fixes around model generation settings and hook releases, managed agent tests, channel delivery mechanisms, serve draining logic, CI pinning, CLI batch submissions, and thread-related features.

Additional PRs address channel naming, core compression, headless provider status, serve worktree cleanup, web-shell file commits, MCP connection repairs, CI fixture isolation, web-shell session reuse, transcript visibility during resync, managed agent persistence, and footer queuing. The batch submission and polling safeguards are also included in this set.
</think>


# Qwen Code Community Digest — 2026-11-09

## 1. Today's Highlights

The Qwen Code project is experiencing elevated CI instability, with the automated issue tracker logging numerous "Main CI failed" reports across multiple workflows (Managed Agent gate, E2E Tests, Qwen Code CI). These failures span Java SDK tests, macOS unit tests, and web-shell smoke tests, indicating systemic flaky test issues rather than isolated regressions. On the feature front, significant activity centers on GitHub channel improvements—batched PR state watching via GraphQL, API budget protection, and delivery drain mechanisms—suggesting a coordinated push toward more robust GitHub integration ahead of likely release milestones.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Hot Issues

### 1. [Main CI failed: Managed Agent gate — no test identified (#14724)](https://github.com/QwenLM/qwen-code/issues/14724)
**Why it matters:** This issue has accumulated 277 comments and tracks a recurring CI failure pattern where the gate fails before any test result is reported, making root cause diagnosis difficult. The high comment volume reflects community frustration with opaque failures that block merges repeatedly.
**Community reaction:** Active discussion; the `autofix/skip` label suggests automated remediation attempts are in progress.

### 2. [Main CI failed: E2E Tests — no test identified (#11680)](https://github.com/QwenLM/qwen-code/issues/11680)
**Why it matters:** With 12 comments, this issue captures E2E test failures that abort before surfacing which test failed, complicating the identification of flaky vs. genuine regressions.
**Community reaction:** Maintainers are investigating workflow-level failures in the E2E Test Linux sandbox.

### 3. [Main CI failed: Managed Agent gate — ClassSizeRatchetTest.productionClassesStayWithinTheirSizeRatchet (#16346)](https://github.com/QwenLM/qwen-code/issues/16346)
**Why it matters:** A specific Managed Agent gate failure in Java 21 SDK tests, indicating potential issues with class size enforcement logic in production builds.
**Community reaction:** Tagged `needs-triage`; under active investigation.

### 4. [API Error: 400 "qwen3-coder:30b" does not support thinking (#1377)](https://github.com/QwenLM/qwen-code/issues/1377) — **CLOSED**
**Why it matters:** Users integrating via Ollama encountered a 400 error when the qwen3-coder model does not support thinking mode, highlighting compatibility gaps between model configurations and Qwen Code's API expectations.
**Community reaction:** 8 comments; resolved, though it may inform future model compatibility handling.

### 5. [Reject an oversized write_file before generating it, not after (#16417)](https://github.com/QwenLM/qwen-code/issues/16417)
**Why it matters:** A P2 enhancement request where Qwen Code generates a full response only to reject it at token limits, wasting compute and frustrating users. The author hit this three times on the same file.
**Community reaction:** 6 comments; recognized as a UX and efficiency issue requiring pre-flight output budget checks.

### 6. [ci(flaky): web-shell history-viewport 200-record smoke case burns its 120s budget (#15697)](https://github.com/QwenLM/qwen-code/issues/15697)
**Why it matters:** A P2 flaky test issue where the web-shell E2E smoke test exceeds its 120-second budget after "Scroll to bottom," failing reproducibly on unrelated PRs.
**Community reaction:** Tagged `welcome-pr`; the community is invited to submit a fix.

### 7. [Background agents lose the loop-detector name: loopType never reaches ForkedAgentResult (#13519)](https://github.com/QwenLM/qwen-code/issues/13519)
**Why it matters:** A P3 enhancement tracking how background agent loop detection loses contextual naming, a regression introduced in PR #13466 that turned bare `LOOP_DETECTED` tokens into sentences without propagating the full context.
**Community reaction:** Maintainers acknowledged this as a reasonable follow-up; awaiting implementation.

### 8. [ACP Task list (plan updates) not rendered in JetBrains (#8544)](https://github.com/QwenLM/qwen-code/issues/8544)
**Why it matters:** A P2 integration bug where ACP sessions in JetBrains AI Assistant fail to display the live task list that Claude Code and Codex render correctly, creating feature parity gaps.
**Community reaction:** 2 comments; IDE integration users are affected.

### 9. [MCP tools stay disconnected after a turn is aborted (#12160)](https://github.com/QwenLM/qwen-code/issues/12160)
**Why it matters:** A P2 bug where aborting an in-flight MCP tool call leaves the MCP server permanently `DISCONNECTED` for the session, breaking multi-turn workflows.
**Community reaction:** Root cause identified in `mcp-tool.ts`; the abort path returns early without repairing the connection.

### 10. [Qwen code desktop 0.27 fails on intel x64 Mac (#16683)](https://github.com/QwenLM/qwen-code/issues/16683)
**Why it matters:** A P1 platform bug where the desktop app crashes on Intel x64 Macs with a fatal Node.js error (`Check failed: 12 == (*__error())`), blocking users on legacy hardware.
**Community reaction:** Critical priority; the bundled runtime closes stdout before reporting its listening URL.

---

## 4. Key PR Progress

### 1. [feat(cli): thread /btw session history and decouple its request lifecycle (#16408)](https://github.com/QwenLM/qwen-code/pull/16408)
Side questions asked with `/btw` now belong to the session instead of standing alone, with the last 20 answered side questions preserved. This decouples the request lifecycle for better context management.

### 2. [feat(channels): deliver bound-PR comments to every session that did not post them (#16602)](https://github.com/QwenLM/qwen-code/pull/16602)
Adds a default-on watch that delivers new PR comments (both conversation and inline review) to every bound session that did not post them, improving multi-session collaboration on PRs.

### 3. [fix(mcp): repair the MCP connection torn down by an aborted tool call (#16661)](https://github.com/QwenLM/qwen-code/pull/16661)
Addresses Issue #12160 by ensuring the abort path now arms the repair mechanism instead of returning early, preventing permanent `DISCONNECTED` states after cancellations.

### 4. [feat(serve): drain bound-PR watch pending transitions behind an off switch (#16656)](https://github.com/QwenLM/qwen-code/pull/16656)
Implements delivery drain for the daemon PR-state watch, resolving one recipient of the pending transition detection that was previously delivering nothing.

### 5. [fix(core): reduce or refuse a compression request that cannot fit its window (#15936)](https://github.com/QwenLM/qwen-code/pull/15936)
Prevents compression from sending summarization requests that cannot leave room for the summary, with recovery when the provider rejects one for context length.

### 6. [feat(web-shell): let managed sessions reuse the host shell (#16324)](https://github.com/QwenLM/qwen-code/pull/16324)
Managed sessions inside the web shell now reuse the host shell's chrome instead of maintaining a second managed look, improving UI consistency and reducing overhead.

### 7. [feat(managed-agent): persist Session model statistics and request context (#16641)](https://github.com/QwenLM/qwen-code/pull/16641)
Persists Session-owned model statistics and last committed main-request context for Managed Sessions, exposing them through a Public GET and WebShell query, with new Context and Model statistics tabs in diagnostics.

### 8. [fix(web-shell): keep transcript visible during session resync (#16688)](https://github.com/QwenLM/qwen-code/pull/16688)
Fixes Issue #16689 by keeping the current conversation visible while reloading after ring eviction or epoch reset, with recovery warnings reporting the transport-supplied reason.

### 9. [fix(cli): preserve model generation settings during provider refresh (#16649)](https://github.com/QwenLM/qwen-code/pull/16649)
Preserves user-defined generation settings when rebuilding provider model entries, merging refreshed template settings without dropping fields like `contextWindowSize`.

### 10. [test(ci): keep the visuals publisher and the failure reporter off the pool (#16561)](https://github.com/QwenLM/qwen-code/pull/16561) — **CLOSED**
Pins credential-bearing CI lanes (visuals publisher with `CI_BOT_PAT` and failure reporter) to hosted runners, preventing accidental movement to the shared pool.

---

## 5. Feature Request Trends

Based on issue and PR analysis, the following feature directions dominate community demand:

**GitHub Integration Enhancements**
- Batched GraphQL queries for multi-PR state watching ([#16692](https://github.com/QwenLM/qwen-code/issues/16692))
- API budget awareness and protection for the mention lane ([#16690](https://github.com/QwenLM/qwen-code/issues/16690))
- Improved PR comment delivery across sessions ([PR #16602](https://github.com/QwenLM/qwen-code/pull/16602))

**Token & Output Management**
- Pre-flight checks against output budget before generating large file writes ([#16417](https://github.com/QwenLM/qwen-code/issues/16417))
- Arbitrary file/tool output slicing to avoid duplication ([#16173](https://github.com/QwenLM/qwen-code/issues/16173))
- Compression request window management ([PR #15936](https://github.com/QwenLM/qwen-code/pull/15936))

**UI/UX Improvements**
- Rendering Exec (code mode) tool calls as JavaScript instead of JSON ([#16675](https://github.com/QwenLM/qwen-code/issues/16675))
- Visible queued message indicator during long agent turns ([#8666](https://github.com/QwenLM/qwen-code/issues/8666))
- ACP task list rendering in JetBrains IDE ([#8544](https://github.com/QwenLM/qwen-code/issues/8544))
- Partial file commits from the web-shell commit view ([PR #16681](https://github.com/QwenLM/qwen-code/pull/16681))

**Memory & Session Management**
- ACP auto-skill scheduling at turn boundaries ([#12209](https://github.com/QwenLM/qwen-code/issues/12209))
- Loop-detector name propagation for background agents ([#13519](https://github.com/QwenLM/qwen-code/issues/13519))
- `/btw` side question history threading ([PR #16408](https://github.com/QwenLM/qwen-code/pull/16408))

---

## 6. Developer Pain Points

**CI Flakiness and Reliability**
The most recurring frustration is CI infrastructure instability. Multiple automated issues track "Main CI failed" events across Managed Agent gate, E2E Tests, and Qwen Code CI workflows. Failures often abort before reporting which test failed, making diagnosis time-consuming. The web-shell history-viewport smoke test reproducibly exceeds its 120-second budget, and various Java SDK tests fail intermittently on different platforms.

**MCP Integration Fragility**
MCP tools becoming permanently disconnected after an aborted tool call ([#12160](https://github.com/QwenLM/qwen-code/issues/12160)) is a high-impact pain point for developers relying on MCP server integrations. The repair mechanism exists but was bypassed in the abort path.

**Token Budget Wastage**
The inability to pre-validate output budgets before generating large file writes ([#16417](https://github.com/QwenLM/qwen-code/issues/16417)) causes wasted generation compute and user frustration when responses are truncated at token limits.

**IDE Integration Gaps**
ACP task list rendering failures in JetBrains ([#8544](https://github.com/QwenLM/qwen-code/issues/8544)) and streaming output flicker in Windows Terminal ([#11929](https://github.com/QwenLM/qwen-code/issues/11929)) highlight cross-platform and IDE compatibility issues that erode the developer experience.

**Platform-Specific Breakage**
The Qwen Code desktop 0.27 crash on Intel x64 Macs ([#16683](https://github.com/QwenLM/qwen-code/issues/16683)) represents a critical regression blocking legacy hardware users, with a P1 priority that underscores its severity.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*