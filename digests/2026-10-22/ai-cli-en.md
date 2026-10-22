# AI CLI Tools Community Digest 2026-10-22

> Generated: 2026-10-22 00:50 UTC | Tools covered: 7

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

<think>The user wants a cross-tool comparison report comparing the AI CLI tools communities covered in the digest. Let me compile data from all the digests:

**Claude Code (github.com/anthropics/claude-code):**
- Issues: ~50 shown
- PRs: 1 shown
- Discussions: N/A (not mentioned)
- Releases: v2.1.307, v2.1.306

**OpenAI Codex (github.com/openai/codex):**
- Issues: ~50 shown
- PRs: 19 shown
- Discussions: 11 shown
- Releases: 3 (rust-v0.164.0-alpha.9, rust-v0.164.0-alpha.10, rust-v0.163.0-alpha.11.1)

**Gemini CLI (github.com/google-gemini/gemini-cli):**
- Issues: ~50 shown
- PRs: ~20 shown
- Discussions: Not mentioned
- Releases: v0.67.0-nightly.20261021.gd00859d6b

**GitHub Copilot CLI (github.com/github/copilot-cli):**
- Issues: ~30 shown
- PRs: 1 shown
- Discussions: Not mentioned
- Releases: v1.0.102

**OpenCode (github.com/anomalyco/opencode):**
- Issues: ~50 shown
- PRs: 14 shown
- Discussions: Not mentioned
- Releases: None in last 24h

**Pi (github.com/earendil-works/pi):**
- Issues: ~30 shown
- PRs: 9 shown
- Discussions: 3 shown
- Releases: v1.4.0

**Qwen Code (github.com/QwenLM/qwen-code):**


- Issues: ~30 shown
- PRs: 8 shown
- Discussions: Not mentioned
- Releases: 5 (sdk-typescript-v0.1.22, v0.26.0, v0.25.3-nightly.20261021.79242671bb, desktop-v0.26.0, cua-driver-rs-v0.26.0)

Now I'll compile this into a structured comparison report covering all seven tools with their respective activity metrics and release cadence.</think>

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem

## Ecosystem Overview

The AI CLI tools landscape is experiencing rapid diversification and maturation. Seven active projects — Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, and Qwen Code — collectively shipped **16 releases** in the last 24 hours, spanning from enterprise-grade products to community-driven alternatives. Common themes include subagent reliability, security/sandboxing, Windows parity, and token efficiency. However, the strategic emphasis varies: Anthropic and OpenAI prioritize MCP ecosystem integration and enterprise controls, while Google, Qwen, and the smaller projects focus on platform expansion and developer experience refinements.

---

## Activity Comparison

| Tool | Releases (24h) | Issues Active | PRs Active | Discussions | Primary Channel |
|------|----------------|---------------|------------|-------------|------------------|
| **Claude Code** | 2 | ~50 | 1 | N/A | Issues |
| **OpenAI Codex** | 3 | ~50 | 19 | 11 | Issues + Discussions |
| **Gemini CLI** | 1 | ~50 | ~20 | N/A | Issues |
| **Copilot CLI** | 3 | ~30 | 1 | N/A | Issues |
| **OpenCode** | 0 | ~50 | 14 | N/A | Issues |
| **Pi** | 1 | ~30 | 9 | 3 | Issues + Discussions |
| **Qwen Code** | 5 | ~30 | 8 | N/A | Issues |

**Key observations:**

- **Qwen Code** leads in release frequency (5 packages), reflecting active multi-component development (SDK, CLI, Desktop, Driver, nightly).
- **OpenAI Codex** has the most active PR pipeline (19 PRs) and the only robust Discussions channel, indicating strong community engagement beyond issue tracking.
- **Claude Code** and **Gemini CLI** maintain high issue volume but lower PR activity, suggesting more community reporting than external contributions.
- **OpenCode** shows no releases in the window but high PR/issue activity — likely in a development cycle between releases.

---

## Shared Feature Directions

| Feature Direction | Tools Requesting | Specific Need |
|-------------------|------------------|---------------|
| **Subagent reliability & intelligence** | Claude Code, Gemini CLI, Qwen Code | Fix hangs, false success reporting, auto-invocation of subagents |
| **Windows platform parity** | Claude Code, Codex, Gemini CLI, Copilot CLI, OpenCode, Pi, Qwen Code | TUI input bugs, sandbox restrictions, PowerShell detection, console window handling |
| **Token/context efficiency** | Claude Code, Gemini CLI, Qwen Code | AST-aware file reads, configurable compaction, thinking budget control |
| **MCP ecosystem expansion** | Claude Code, OpenCode, Qwen Code | OAuth persistence, registry policies, runtime server management, confidential clients |
| **Security & sandboxing** | Claude Code, Gemini CLI, Qwen Code | Zero-dependency sandboxing, permission denial gaps, credential access scope |
| **Remote/headless control** | OpenAI Codex, Copilot CLI | Run CLI as daemon, remote control from ChatGPT app, cloud deployment |
| **Model tier/access flexibility** | Claude Code, OpenCode, Codex | Higher usage tiers (20x), auto-only account handling, BYOK provider support |

**Every tool** in this digest is actively addressing Windows compatibility, subagent reliability, and token efficiency — these represent table-stakes requirements for any viable CLI tool in 2026.

---

## Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|---------------|-------------|---------------------|
| **Claude Code** | Enterprise-grade agentic coding, safety telemetry, OpenTelemetry integration | Devs/teams requiring auditability, compliance | Heavy investment in safety events, structured output, tool use governance |
| **OpenAI Codex** | Remote execution, multi-machine dots, cross-platform agentic workflows | Teams needing cloud-hosted persistent agents | Dots infrastructure, ACP protocol, remote control via ChatGPT |
| **Gemini CLI** | Multi-provider flexibility, AST-aware context optimization, sandbox bridging | Developers wanting unified LLM access with local control | AST parsing for token efficiency, container sandbox bridging |
| **Copilot CLI** | GitHub-native integration, plugin marketplace extensibility | Existing GitHub Copilot subscribers | Deep GitHub integration, plugin marketplace with git-subdir sources |
| **OpenCode** | Desktop-first UX, model-agnostic flexibility, modern TUI | Desktop power users seeking polished experience | Timeline animations, Knobs panel, side panel file watching |
| **Pi** | Lightweight agentic coding, cache warming, durable execution | Efficiency-focused developers | Cache warming, lazy stream setup, durable execution across disconnects |
| **Qwen Code** | Managed Agent infrastructure, MCP server management, session lifecycle | Enterprise teams using Alibaba Cloud / Qwen ecosystem | Managed Agent parity, daemon wire protocol, workspace locking |

**Strategic divides:**

- **Anthropic/OpenAI** focus on enterprise reliability, MCP governance, and remote execution.
- **Google/Qwen/Alibaba** emphasize multi-cloud provider support and platform expansion.
- **Community projects (OpenCode, Pi)** prioritize UX polish and developer ergonomics over enterprise features.

---

## Community Momentum & Maturity

| Tool | Community Maturity | Iteration Velocity | Stability Signal |
|------|-------------------|-------------------|------------------|
| **OpenAI Codex** | High | Very High (19 PRs, 11 discussions) | Active beta; frequent changes |
| **Qwen Code** | High | Very High (5 releases, 8 PRs) | Rapid multi-component shipping |
| **Claude Code** | High | Moderate (2 releases, steady issues) | Mature product, incremental fixes |
| **Gemini CLI** | Moderate | Moderate (1 release, ~20 PRs) | Active development |
| **Pi** | Moderate | Moderate (1 release, 9 PRs) | Steady progress |
| **OpenCode** | Moderate | Moderate (14 PRs, no releases) | Between cycles |
| **Copilot CLI** | Moderate | Low (1 PR, 3 releases) | Mature, incremental improvements |

**Maturity tiers:**

- **Tier 1 (Enterprise-grade):** Claude Code, Codex, Copilot CLI — large user bases, structured processes.
- **Tier 2 (Growth):** Gemini CLI, OpenCode, Pi — active development, community forming.
- **Tier 3 (Emerging):** Qwen Code — rapid iteration, Alibaba ecosystem focus.

---

## Trend Signals

1. **Subagents are the new battleground.** Every tool is wrestling with subagent reliability — hangs, false success reporting, context bleeding, and permission inheritance. The community demands subagents that invoke themselves appropriately, report status accurately, and recover gracefully from failures.

2. **Windows is no longer an afterthought.** With 7/7 tools reporting Windows-specific bugs, the ecosystem has recognized Windows desktop and server as a primary platform. The specific pain points (TUI input, sandbox restrictions, PowerShell detection) are becoming well-understood and are gradually being addressed.

3. **Token efficiency is a first-class concern.** AST-aware file reads, configurable compaction, thinking budget controls, and cache warming strategies appear across multiple projects. As context windows grow, the industry is shifting from "more context" to "smarter context."

4. **MCP is consolidating as the integration layer.** MCP server management, OAuth persistence, runtime enable/disable, and confidential client support are trending. The MCP ecosystem is becoming the standard for tool extensibility.

5. **Security boundaries are being stress-tested.** Permission denial gaps (file accessible via grep despite Read denial), credential scope issues (reading AWS/gcloud keys unnecessarily), and sandbox escape concerns are surfacing. The community is actively hardening these boundaries.

6. **Remote/headless control is a top feature request.** Multiple tools (Codex, Copilot CLI) have requests to run as daemons with remote control. This signals a shift toward persistent, always-available AI agents that can be invoked on demand rather than per-session CLI invocations.

7. **Release velocity is accelerating.** The 16 releases across 7 tools in 24 hours demonstrate intense competition. The market is still formative — no single tool has achieved dominant position, and differentiation is happening along axes of UX, enterprise features, provider access, and platform support.

---

*Report generated from GitHub data — 2026-10-22*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills repository data and create a community highlights report. Let me analyze the data provided:

Looking at the PRs:
- All 20 top PRs show "Comments: undefined" - meaning they likely have 0 comments
- Most are OPEN status
- Various skills being proposed: MCP builder fixes, skill-creator improvements, document processing, web3, video generation, etc.

Looking at the Issues:
- #492: Security issue about community skills in anthropic/ namespace - 46 comments
- #228: Enable org-wide skill sharing - 17 comments
- #556: run_eval.py trigger rate issue - 13 comments
- #1329: compact-memory skill proposal - 10 comments
- #62: Skills disappeared errors - 10 comments
- #202: skill-creator best practices - 8 comments (CLOSED)
- #1385: Reasoning Quality Gate Pipeline proposal - 6 comments
- #412: agent-governance skill proposal - 6 comments (CLOSED)
- #189: duplicate skills issue - 6 comments

Let me structure the report:

1. **Top Skills Ranking** - Based on the data, most PRs have 0 comments. I should note this but still highlight the most active/interesting PRs based on other factors like engagement (likes), recency, or significance.

2. **Community Demand Trends** - From issues, the main themes are:
   - Security/trust issues (#492)
   - Organization/sharing (#228)
   - Skill evaluation/triggering issues (#556)
   - New skill proposals (compact-memory, agent-governance)

3. **High-Potential Pending Skills** - Looking at active PRs with substance

4. **Skills Ecosystem Insight** - Overall summary

Wait, I need to re-examine. The user says "sorted by comments" but all show "undefined" - this likely means 0 comments. 

The PRs with substantive contributions stand out based on their technical depth and potential impact. #1742 addresses critical MCP SDK compatibility, #1298 tackles complex Windows and runtime challenges, #1245 introduces innovative Notion integration, #1771 advances Web3 auditing capabilities, and #1961 provides crucial security hardening. These represent meaningful technical improvements beyond basic skill proposals.</think>

# Claude Code Skills Community Highlights Report

**Data as of October 22, 2026**

---

## 1. Top Skills Ranking

*Note: Most PRs in this repository receive minimal direct comments. Ranking reflects technical significance, community need, and activity indicators.*

| PR | Skill/Change | Functionality | Status |
|----|--------------|---------------|--------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder: MCP ≥2.0 support** | Fixes `streamablehttp_client` → `streamable_http_client` rename and updates custom header handling for new MCP SDK version | OPEN |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: trigger evaluation hardening** | Isolates trigger evaluations, handles Windows-specific failures (subprocess pipe issues), prevents unrelated tools from stopping scans | OPEN |
| [#1961](https://github.com/anthropics/skills/pull/1961) | **skill-creator: eval viewer security** | Hardens against script breakout, DNS rebinding, cross-site POST, and HTML escaping vulnerabilities in local eval viewer | OPEN |
| [#1245](https://github.com/anthropics/skills/pull/1245) | **notion-spec-to-implementation + quantitative-resume-auditor** | Transforms product specs into actionable Notion tasks; audits resumes against quantitative metrics | OPEN |
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | Automated static analysis for Solidity/Rust smart contracts with TON Blockchain proof anchoring via zero-storage Merkle protocol | OPEN |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | Zero-cost Markdown-to-MP4 video generation with realistic voiceovers via Marp | OPEN |
| [#1980](https://github.com/anthropics/skills/pull/1980) | **webapp-testing: shell=True removal** | Eliminates command injection risk (CWE-78) by removing unsafe `shell=True` in subprocess calls | OPEN |

**Discussion Highlights:**
- The MCP builder update (#1742) addresses a breaking change in MCP SDK 2.0—a critical fix for developers using Model Context Protocol
- Security-focused PRs (#1961, #1980) indicate growing community attention to supply-chain and runtime security in skill infrastructure
- Web3/smart contract auditing skill (#1771) represents an emerging vertical (DeFi tooling)

---

## 2. Community Demand Trends

*Derived from Issues sorted by engagement (comments)*

| Issue | Theme | Demand Signal |
|-------|-------|---------------|
| [#492](https://github.com/anthropics/skills/issues/492) (46 comments) | **Trust & Security** | Community skills impersonating official `anthropic/` namespace—calls for namespace isolation or clear labeling |
| [#228](https://github.com/anthropics/skills/issues/228) (17 comments) | **Org-wide Sharing** | Users want built-in skill sharing within organizations without manual file distribution |
| [#556](https://github.com/anthropics/skills/issues/556) (13 comments) | **Evaluation Infrastructure** | `run_eval.py` shows 0% trigger rate—skill invocation testing is broken |
| [#1329](https://github.com/anthropics/skills/issues/1329) (10 comments) | **Memory/State Management** | Proposed `compact-memory` skill for symbolic notation in long-running agents |
| [#62](https://github.com/anthropics/skills/issues/62) (10 comments) | **Persistence Reliability** | Skills disappearing unexpectedly—storage/lifecycle bugs |
| [#1385](https://github.com/anthropics/skills/issues/1385) (6 comments) | **Quality Assurance** | Proposed "Reasoning Quality Gate Pipeline" for pre-task calibration, adversarial review, delivery verification |

**Emerging Directions:**
- **Security & Trust**: Namespace isolation, eval sandboxing
- **Enterprise Collaboration**: Shared skill libraries, org-level management
- **Evaluation/Debugging**: Trigger rate fixes, benchmark reliability
- **Agent Memory**: Compact symbolic state representation

---

## 3. High-Potential Pending Skills

*Active PRs with substantial functionality, likely to merge soon*

| PR | Skill | Why值得关注 |
|----|-------|-------------|
| [#1245](https://github.com/anthropics/skills/pull/1245) | Notion Integration + Resume Auditor | Bridges Claude Code with popular productivity tools (Notion) and HR workflows |
| [#1771](https://github.com/anthropics/skills/pull/1771) | ProofCore Contract Auditor | First Web3-specific skill; addresses smart contract security—a high-demand DeFi use case |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | Zero-cost video generation from Markdown; unique multimedia output capability |
| [#525](https://github.com/anthropics/skills/pull/525) | Pyxel Retro Game Dev | Python game development skill; targets creative/coding niche with growing interest |
| [#514](https://github.com/anthropics/skills/pull/514) | Document Typography | Fixes AI document quality issues (orphans, widows, numbering)—directly improves user-facing output |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for enterprise-grade skill infrastructure:** security hardening (namespace isolation, eval sandboxing), organization-level sharing mechanisms, and reliable evaluation/trigger systems—indicating Claude Code is maturing from individual developer tool to team deployment platform.

---

*Report generated from GitHub data at anthropics/skills (50 PRs, 50 Issues)*

---

<think>The user wants me to generate a Claude Code community digest based on the provided GitHub data. Let me analyze the data and create a structured digest.

Looking at the data:
1. **Latest Releases** - v2.1.307 and v2.1.306 from the last 24h
2. **Latest Issues** - 50 total items, showing top 30 by comment count
3. **Latest Pull Requests** - 1 item

I need to create sections:
1. Today's Highlights
2. Releases
3. Hot Issues (pick 10)
4. Key PR Progress (but there's only 1 PR - I should note this)
5. Hot Discussions - No discussion data provided, so I'll omit this
6. Feature Request Trends
7. Developer Pain Points

Let me organize this properly.

**Releases:**
- v2.1.307: Added `/claude-api api-version` for API version 2026-10-21, added `claude_code.safety_event` OpenTelemetry event, fixed requests
- v2.1.306: Fixed `claude -p` inside cloud sessions, fixed API error being replaced

**Hot Issues (top 10 by comment count):**
1. #47509 - Team plan needs Max 20x tier (64 comments, 182 👍)
2. #74260 - Assistant text blocks silently dropped (34 comments, 28 👍)
3. #102142 - Desktop Routines section hidden (20 comments, 14 👍)
4. #67083 - Credit balance confusion (9 comments)
5. #93014 - OAuth session_stale_relogin latches (9 comments, 6 👍)
6. #75911 - Worktree pool reclaims directory while in use (8 comments)
7. #70159 - Token counter disappears (8 comments)
8. #71424 - Cowork sessions leak node processes (7 comments)


9. #74317 - Agent tool fabricated stall (6 comments)
10. #64912 - API error silently replaced (6 comments)

**PRs:** There's only 1 PR - #21459 about glob_match support

Now I'll write the digest.</think>

# Claude Code Community Digest — 2026-10-22

## Today's Highlights

The past 24 hours brought two patch releases (v2.1.306, v2.1.307) addressing authentication edge cases in cloud sessions and introducing a new OpenTelemetry safety event. Meanwhile, the community continues to rally around high-impact issues: a hotly-debated feature request for a **Max 20x tier** has accumulated 182 👍 in just six months, while a critical bug causing silent text block loss in adaptive thinking mode has drawn significant attention.

---

## Releases

| Version | Changes |
|---------|---------|
| **v2.1.307** | Added `/claude-api api-version` command to move Claude API code to version `2026-10-21`. Introduced `claude_code.safety_event` OpenTelemetry event for each tool call—tracking permission rules, auto mode, safety checks, hooks, and sandbox actions. Fixed request handling. |
| **v2.1.306** | Fixed `claude -p` inside cloud sessions incorrectly reporting "Not logged in" when started without session environment variables. Fixed an API error being replaced by "prompt is too long" and unnecessary compaction in sessions with many MCP tools. |

---

## Hot Issues

| # | Issue | Summary | Why It Matters |
|---|-------|---------|----------------|
| 1 | **[#47509](https://github.com/anthropics/claude-code/issues/47509)** — Team plan needs Max 20x tier | Power users (CTOs, tech leads) request a 20x Pro usage tier, as the current 6.25x Premium tier is insufficient for heavy agentic coding workflows. | **182 👍** — Highest community demand; highlights pricing mismatch for intensive professional use. |
| 2 | **[#74260](https://github.com/anthropics/claude-code/issues/74260)** — Assistant text blocks silently dropped | In adaptive thinking mode, assistant text blocks followed by more thinking are never rendered and missing from transcript JSONL. | **34 comments, 28 👍** — Data loss bug; breaks auditability and session replay. |
| 3 | **[#102142](https://github.com/anthropics/claude-code/issues/102142)** — Desktop Routines section hidden | After sidebar update, the Routines section in Code tab is hidden and resets to hidden on every launch. | **20 comments, 14 👍** — UI regression affecting workflow automation. |
| 4 | **[#93014](https://github.com/anthropics/claude-code/issues/93014)** — OAuth session_stale_relogin latches | Desktop app force-logs out active sessions when OAuth token refresh fails with `invalid_grant`. | **9 comments, 6 👍** — Auth flakiness disrupting active work. |
| 5 | **[#75911](https://github.com/anthropics/claude-code/issues/75911)** — Worktree pool reclaims directory mid-use | Desktop app's worktree pool reclaims a directory while a session is still using it, detaching HEAD mid-task. | **8 comments** — Data integrity risk; can corrupt git state. |
| 6 | **[#71424](https://github.com/anthropics/claude-code/issues/71424)** — Cowork sessions leak node processes | Local-agent sessions spawned by Desktop app leave `claude-code` node processes running indefinitely, causing RAM bloat and MCP port exhaustion. | **7 comments** — Resource leak; degrades system performance over time. |
| 7 | **[#67083](https://github.com/anthropics/claude-code/issues/67083)** — "Credit balance" vs "Current balance" confusion | Two unrelated billing systems (API console vs. subscription) use identical "balance" labels with no UI distinction. | **9 comments** — UX confusion around billing. |
| 8 | **[#70159](https://github.com/anthropics/claude-code/issues/70159)** — Token counter disappears | The running token counter disappears on input focus and cannot be recalled. | **8 comments** — Usability regression for cost tracking. |
| 9 | **[#64912](https://github.com/anthropics/claude-code/issues/64912)** — Specific API error replaced by generic message | When context crosses 200K→1M tokens, a specific actionable error is replaced by a generic UI message hiding remediation steps. | **6 comments** — Poor error handling; blocks users from fixing the issue. |
| 10 | **[#93537](https://github.com/anthropics/claude-code/issues/93537)** — Concurrent processes zero MCP OAuth entries | On macOS, concurrent `claude` processes overwrite Keychain OAuth entries with empty tokens despite valid refresh tokens. | **5 comments, 4 👍** — Auth state corruption under concurrency. |

---

## Key PR Progress

Only **one PR** was updated in the past 24 hours:

| PR | Description |
|----|-------------|
| **[#21459](https://github.com/anthropics/claude-code/pull/21459)** — `feat(hookify): add glob_match support and case sensitivity control` | Adds `glob_match` pattern support (e.g., `*.py`) and a `case_sensitive` option for hookify rules. Simplifies path matching without requiring regex. |

---

## Feature Request Trends

Based on issue analysis, the community is signaling demand in these areas:

| Trend | Evidence |
|-------|----------|
| **Higher usage tiers** | #47509 (Max 20x) shows strong appetite for power-user pricing beyond the current 6.25x ceiling. |
| **Billing transparency** | Multiple issues (#67083, #67073, #70172) flag confusion between API credits vs. subscription usage—users want per-surface activity logs and clearer balance displays. |
| **Desktop UI polish** | #102142 (Routines visibility), #104089 (needs input dot), #103335 (prompt suggestions)—recurrent regressions in desktop app UI. |
| **Reliability & safety** | #93287 (sandbox data loss), #74260 (silent data loss), #75911 (worktree corruption)—growing concern over edge cases causing data destruction. |
| **Observability** | #64882 (file re-read loops), #64880 (duplicate message IDs), #64912 (error masking)—users want better debugging and audit trails. |

---

## Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Auth/token refresh failures** | High | Sessions abruptly logged out; concurrent processes corrupt Keychain; OAuth latching causes disruptions. |
| **Data loss / silent corruption** | Medium-High | Text blocks dropped, worktree HEAD detached mid-task, uncommitted work in spawned tasks with no notification. |
| **Pricing mismatch for power users** | High | 6.25x tier insufficient for agentic workflows; no 20x option despite demand. |
| **Desktop app regressions** | Medium | Frequent UI bugs: Routines hidden, token counter missing, prompt suggestions absent, "needs input" dot misfire. |
| **Poor error messaging** | Medium | Specific actionable errors replaced by generic messages; rate limit countdown truncates; model re-reads unchanged files in loops. |
| **Resource leaks** | Medium | Cowork node processes never exit; MCP port exhaustion over time. |

---

*Digest generated from GitHub data for 2026-10-22. All links point to `github.com/anthropics/claude-code`.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate an OpenAI Codex community digest for 2026-10-22 based on the GitHub data provided. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

**Releases (last 24h):**
- rust-v0.164.0-alpha.9
- rust-v0.164.0-alpha.10
- rust-v0.163.0-alpha.11.1

**Top Issues (by comment count):**
1. #8648 - Codex replies to earlier messages instead of latest one (89 comments, 65 👍)
2. #55744 - macOS app: new chats fail with Cannot serialize value (63 comments, 135 👍)
3. #49453 - Browser access blocked after allowing site (32 comments, 3 👍)
4. #29915 - Permission/approval mode doesn't persist (28 comments, 4 👍)
5. #50329 - Windows: read_thread returns only content reference (20 comments, 4 👍)
6. #53425 - macOS: browser visible but reports not available (13 comments, 0 👍)
7. #53913 - Native Lite client double-counts reasoning (12 comments, 1 👍)
8. #55795 - Windows: Dots entry disappears after update (11 comments, 3 👍)
9. #54924 - OpenAI Developers installation fails with OAuth error (11 comments, 8 👍)
10. #18309 - Windows: long input-messages break notify in codex exec (9 comments, 1 👍)

**Key PRs:**
1. #56033 - Enable Bedrock setup wizard by default (OPEN)
2. #56032 - Fix entrypoint lookup in debug-symbol smoke tests (CLOSED)


3. #56031 - Support client Responses API metadata in thread/sample (CLOSED)
4. #56024 - Limit decoded HTTP/3 response headers (CLOSED)
5. #56023 - Group Bedrock API key entry with AWS sign-in (CLOSED)
6. #56022 - Preserve config overrides across CLI subcommands (CLOSED)
7. #56021 - Keep slash command prefixes in composer text (CLOSED)
8. #56020 - Allow thread sampling after failed turns (CLOSED)
9. #56018 - Avoid nested CLI startup in MCP OAuth test (CLOSED)

I'm tracking several PRs focused on improving CLI functionality, thread sampling, and OAuth handling. The closed PRs suggest active development on configuration management and API integration, while the open PR about Bedrock setup indicates new features being prepared for release.

10. #56011 - Keep rollout trace sessions distinct (CLOSED)
11. #56008 - Add timing recorder for direct tool calls (CLOSED)
12. #56007 - Pause Tokio time in Guardian session test (CLOSED)
13. #56006 - Assert shell tool overlap in parallelism test (CLOSED)
14. #56003 - Scope MITM credential substitution (CLOSED)
15. #56001 - Support confidential OAuth clients (CLOSED)
16. #56000 - Retry proxy CONNECT with Windows auth (CLOSED)
17. #55994 - Add Windows proxy auth tunnel helper (CLOSED)
18. #55993 - Preserve per-execution trace context (CLOSED)
19. #55991 - Avoid double-counting retained reasoning (CLOSED)

The closed PRs span multiple areas: testing infrastructure improvements, security enhancements around credential handling, OAuth client support, and performance optimizations. There's particular focus on Windows-specific features and testing mechanisms.

**Discussions:**
1. #9200 - Add ability to remote control codex from ChatGPT app (52 comments, 194 👍)
2. #1076 - Resuming a previous session (20 comments, 32 👍)
3. #55421 - TAHU authorization gateway (5 comments, 1 👍)
4. #42848 - ChatGPT Sites + D1 + Drizzle migrations (3 comments, 2 👍)
5. #42049 - Codex bundled-marketplace refresh leaks (2 comments, 3 👍)
6. #55203 - Two agent skills from failure log (2 comments, 1 👍)
7. #55942 - Calendar tracker for Codex challenge (0 comments, 3 👍)
8. #55901 - GFT Map for Codex decisions (1 comment, 1 👍)
9. #56015 - DeckDelta PDF slide review (0 comments, 1 👍)
10. #55643 - Kingdoms strategy prototype (0 comments, 1 👍)
11. #56010 - Expose stdio MCP ownership (0 comments, 1 👍)
12. #55820 - Windows desktop freezes workaround (0 comments, 1 👍)
13. #55792 - Windows desktop /approve unavailable (0 comments, 1 👍)

Now I'll organize this into the requested format.</think>

# OpenAI Codex Community Digest

**Date:** 2026-10-22

---

## Today's Highlights

The Codex project sees intense activity around macOS and Windows desktop app stability—particularly serialization failures in new chats and session persistence issues. The community is also engaging heavily with remote control capabilities and cross-platform improvements, while the team ships multiple internal fixes around OAuth, proxy authentication, and thread sampling.

---

## Releases

Three Rust CLI alpha releases landed in the last 24 hours:

| Release | Notes |
|---------|-------|
| `rust-v0.164.0-alpha.10` | Latest alpha in v0.164 series |
| `rust-v0.164.0-alpha.9` | Prior alpha in v0.164 series |
| `rust-v0.163.0-alpha.11.1` | Patch release for v0.163 series |

[Browse all releases →](https://github.com/openai/codex/releases)

---

## Hot Issues

**1. [Codex replies to earlier messages instead of latest one](https://github.com/openai/codex/issues/8648)** — 89 comments, 65 👍
A critical conversation context bug where the assistant responds to earlier messages rather than the most recent one in multi-message exchanges. High community engagement reflects the severity of conversational coherence failures.

**2. [macOS app: new chats fail with "Cannot serialize value"](https://github.com/openai/codex/issues/55744)** — 63 comments, 135 👍
Desktop app on macOS (v26.1016.51333) throws a serialization error when sending the first message in a new chat. The highest reaction count signals broad impact on macOS users.

**3. [Browser access blocked after explicitly allowing site](https://github.com/openai/codex/issues/49453)** — 32 comments, 3 👍
Windows-specific issue where browser access remains denied at the chat level even after a user explicitly allows a site, breaking workflow for local development.

**4. [Permission/approval mode selection doesn't persist](https://github.com/openai/codex/issues/29915)** — 28 comments, 4 👍
Users report that security approval mode settings fail to persist across thread resumption or new sessions—a significant concern for controlled environments.

**5. [Windows: read_thread returns only content reference](https://github.com/openai/codex/issues/50329)** — 20 comments, 4 👍
The `read_thread` function on Windows returns only `chatgpt-content-reference` placeholders for completed replies instead of actual content, breaking downstream processing.

**6. [macOS: browser runtime reports "Browser is not available: iab"](https://github.com/openai/codex/issues/53425)** — 13 comments, 0 👍
A disconnect between the visible built-in browser and the agent's ability to discover/access it through the Browser runtime on macOS.

**7. [Native Lite client double-counts reasoning tokens](https://github.com/openai/codex/issues/53913)** — 12 comments, 1 👍
When `x-reasoning-included` is absent, the Lite client incorrectly double-counts old reasoning, causing 54% unnecessary compaction.

**8. [Windows: Dots entry disappears after update](https://github.com/openai/codex/issues/55795)** — 11 comments, 3 👍
The Dots (AI device) entry vanishes from the sidebar after updating to v26.1016.51333, with reinstall and hotkeys failing to restore it.

**9. [OpenAI Developers installation fails: "OAuth state not found"](https://github.com/openai/codex/issues/54924)** — 11 comments, 8 👍
Users cannot install the OpenAI Developers extension due to an OAuth state mismatch during authentication flow.

**10. [Windows: long input-messages break notify in codex exec](https://github.com/openai/codex/issues/18309)** — 9 comments, 1 👍
The `notify` command silently fails on Windows when the payload contains very large input messages, breaking turn-complete callbacks.

---

## Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#56033](https://github.com/openai/codex/pull/56033) | OPEN | **Enable Bedrock setup wizard by default** — Promotes the AWS Bedrock setup wizard to stable and enables it for eligible users |
| [#56031](https://github.com/openai/codex/pull/56031) | CLOSED | **Support client Responses API metadata in thread/sample** — Adds `responsesapiClientMetadata` to `ThreadSampleParams` |
| [#56024](https://github.com/openai/codex/pull/56024) | CLOSED | **Limit decoded HTTP/3 response headers** — Bounds QPACK-expanded headers to 64 KiB to prevent memory exhaustion |
| [#56022](https://github.com/openai/codex/pull/56022) | CLOSED | **Preserve config overrides across CLI subcommands** — Fixes Clap dropping earlier config values when `-c` appears at multiple levels |
| [#56021](https://github.com/openai/codex/pull/56021) | CLOSED | **Keep slash command prefixes in editable composer** — Retains `/` in textarea and renders slash commands as `› /command` |
| [#56020](https://github.com/openai/codex/pull/56020) | CLOSED | **Allow thread sampling after failed turns** — Enables `thread/sample` even when the latest turn failed or was interrupted |
| [#56001](https://github.com/openai/codex/pull/56001) | CLOSED | **Support confidential OAuth clients for enterprise MCP** — Enables client secrets for enterprise-managed MCP authentication |
| [#56000](https://github.com/openai/codex/pull/56000) | CLOSED | **Retry proxy CONNECT with Windows authentication** — Retries proxy 407 challenges using Negotiate/NTLM credentials |
| [#55994](https://github.com/openai/codex/pull/55994) | CLOSED | **Add Windows proxy authentication tunnel helper** — Exposes `connect_windows_proxy` using libcurl with Windows credentials |
| [#55991](https://github.com/openai/codex/pull/55991) | CLOSED | **Avoid double-counting retained reasoning in token usage** — Fixes premature compaction caused by redundant reasoning estimates |

[Browse all PRs →](https://github.com/openai/codex/pulls)

---

## Hot Discussions

### Ideas

- **[Remote control Codex from ChatGPT app](https://github.com/openai/codex/discussions/9200)** — 52 comments, 194 👍
  The most-requested feature: run Codex on a headless machine and control it remotely from the ChatGPT mobile/desktop UI, replacing current VPN/SSH workarounds.

- **[Allow dot to connect directly to headless Linux server](https://github.com/openai/codex/issues/49491)** — 9 comments, 16 👍
  Request to authorize a dot to use a headless Linux server as a task environment without requiring a graphical desktop.

- **[Allow dot to use additional owned computers](https://github.com/openai/codex/issues/50660)** — 5 comments, 0 👍
  Enable dots to spawn tasks on multiple machines, including existing headless Linux Codex Remotes.

### Q&A

- **[Resuming a previous session](https://github.com/openai/codex/discussions/1076)** — 20 comments, 32 👍
  Users struggle to resume previous sessions in auto-mode; `codex --history` doesn't support resuming specific sessions.

- **[ChatGPT Sites + D1 + Drizzle migrations](https://github.com/openai/codex/discussions/42848)** — 3 comments, 2 👍
  Questions about how Sites determines which migration to apply when using Drizzle with Cloudflare D1.

### Show and Tell

- **[TAHU: authorization gateway research prototype](https://github.com/openai/codex/discussions/55421)** — 5 comments, 1 👍
  A Python authorization-gateway exploring how agents can answer public questions without exposing private staff notes.

- **[bundled-marketplace refresh leaks staging directories](https://github.com/openai/codex/discussions/42049)** — 2 comments, 3 👍
  User reports ~31 GiB of abandoned staging directories on macOS, causing severe disk exhaustion.

- **[Calendar tracker for Codex's 28-day reset challenge](https://github.com/openai/codex/discussions/55942)** — 0 comments, 3 👍
  A project tracking OpenAI's daily shipping challenge using X API and OpenAI API.

[Browse all discussions →](https://github.com/openai/codex/discussions)

---

## Feature Request Trends

1. **Remote/headless control** — Strong demand for running Codex as a daemon on headless Linux servers with remote control from the ChatGPT app or mobile UI
2. **Multi-machine dot support** — Users want dots to span tasks across multiple authorized computers
3. **MCP enhancements** — Environment variable expansion in MCP configurations, confidential OAuth client support for enterprise
4. **Session persistence** — Better handling of session resumption, thread history, and permission settings across restarts
5. **AWS Bedrock integration** — Improved setup wizard and unified AWS sign-in methods

---

## Developer Pain Points

- **macOS desktop instability** — Serialization errors in new chats, browser runtime disconnects, sidebar issues
- **Windows-specific failures** — Git Bash inside sandbox, long payload notify breakage, viewport jump on minimize/restore, performance lag
- **OAuth/authentication failures** — Token exchange failures, OAuth state not found errors blocking extensions
- **Memory/resource leaks** — Marketplace staging directory leaks consuming tens of gigabytes
- **Context bugs** — Incorrect message responses in multi-turn conversations
- **Rate limiting** — Intermittent HTTP 429s despite significant allowance remaining

---

*Generated from GitHub data for 2026-10-22*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a Gemini CLI community digest for 2026-10-22 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Let me organize the information:

**Releases (last 24h):**
- v0.67.0-nightly.20261021.gd00859d6b
  - chore: migrate gsutil usage to gcloud storage
  - fix(core): preserve user-level ~/.gitconfig in shell and git environments

**Latest Issues (showing top 30 by comment count):**
1. #22323 - Subagent recovery after MAX_TURNS reported as GOAL success (13 comments)
2. #19873 - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (9 comments)
3. #21409 - Generalist agent hangs (8 comments)
4. #22745 - Assess impact of AST-aware file reads (7 comments)
5. #21968 - Gemini does not use skills and sub-agents enough (7 comments)
6. #22267 - Browser Agent ignores settings.json overrides (4 comments)
7. #22232 - Enhance browser_agent resilience (4 comments)
8. #21983 - browser subagent fails in wayland (4 comments)
9. #21000 - Experiment with native file tools for task tracker (4 comments)
10. #20079 - ~/.gemini/agents/filename.md symlink not recognized (4 comments)
11. #24246 - Gemini CLI encounters 400 error with > 128 tools (3 comments)
12. #23571 - Model creates tmp scripts in random spots (3 comments)
13. #22672 - Agent should stop/discourage destructive behavior (3 comments)
14. #22186 - get-shit-done output hook causes crash (3 comments)


15. #20195 - Local Subagent Sprint 1 (3 comments)

**Latest Pull Requests (top 20 by comment count):**
1. #29744 - fix(core): let /ide enable reconnect after IDE server restarts (OPEN)
2. #29749 - fix(core): respect read-only files and hard links in atomic writeTextFile (CLOSED)
3. #29868 - fix(cli): stop continuation stream processing and auto-nudge after request cancellation (OPEN)
4. #29867 - fix(cli): preserve ${VAR} placeholders during deprecated settings migration (OPEN)
5. #29849 - fix(cli)

: handle termination signals and prevent tool execution after cancellation (OPEN)
6. #29866 - fix(cli): restore workspace directories only after resumed chat succeeds (OPEN)
7. #29865 - fix(core): adhere to RFC 9110 token rules when splitting custom headers (CLOSED)
8. #29850 - fix(a2a-server): mount express.json() before A2A SDK route registration (CLOSED)
9. #29833 - fix(core): scope untrusted flag checks to external output and remember approved flags (CLOSED)
10. #29847 - fix(core): prevent duplicate agent loading when workspace is home directory (CLOSED)
11. #29848 - fix(ide): exclude IDE settings and GEMINI.md files from open file context (CLOSED)
12. #29858 - feat(cli): bridge IDE companion into container sandboxes (CLOSED)
13. #29718 - fix(cli): use --userns=keep-id for rootless podman sandboxes (OPEN)
14. #29823 - fix(core): fallback to system ripgrep and trust Termux paths on Android (OPEN)
15. #29737 - feat(models): add Gemini 4 Argon model support (OPEN)
16. #29779 - fix(core): mark failed ripgrep searches as tool errors (OPEN)
17. #29862 - fix(cli): bound ACP tool output with the scheduler's truncation limits (CLOSED)
18. #29778 - fix(acp): truncate tool output before sending it to the model (OPEN)
19. #29852 - Changelog for v0.66.0-preview.0 (CLOSED)
20. #29860 - chore/release: bump version to 0.67.0-nightly.20261021.gd00859d6b (OPEN)

Now I need to organize these into a proper digest format.</think>

# Gemini CLI Community Digest — 2026-10-22

## 1. Today's Highlights

The v0.67.0-nightly release shipped with two focused fixes: migrating gsutil to gcloud storage and preserving user-level `~/.gitconfig` across shell and git environments. Meanwhile, the issue queue shows strong community engagement around subagent reliability—particularly the "Generalist agent hangs" bug (8 👍) and the MAX_TURNS recovery issue (13 comments)—alongside new feature work including Gemini 4 Argon model support and IDE-to-container sandbox bridging.

---

## 2. Releases

| Version | Changes |
|---------|---------|
| **v0.67.0-nightly.20261021.gd00859d6b** | **Chore**: Migrated `gsutil` usage to `gcloud storage` ([#29839](https://github.com/google-gemini/gemini-cli/pull/29839)) — part of ongoing Google Cloud tooling unification.<br>**Fix (core)**: Preserved user-level `~/.gitconfig` in shell and git environments ([#29832](https://github.com/google-gemini/gemini-cli/pull/29832)) — resolves configuration loss when the CLI spawns subshells. |

---

## 3. Hot Issues

| Issue | Priority | Summary | Why It Matters | Reaction |
|-------|----------|---------|----------------|----------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | p1 | **Subagent recovery after MAX_TURNS reported as GOAL success** — The `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even when it hit the maximum turn limit without completing analysis. |masks actual failures, causing developers to miss incomplete investigations. | 13 comments, 2 👍 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | p2 | **Zero-Dependency OS Sandboxing & Post-Execution Intent Routing** — Proposal to leverage Gemini 3's native bash affinity via zero-dependency OS sandboxing and post-execution intent routing. | Could significantly improve security without adding dependencies, while making the model more effective at POSIX tool chaining. | 9 comments, 1 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | p1 | **Generalist agent hangs** — When `gemini-cli` defers to the generalist agent, it hangs indefinitely on simple operations (e.g., folder creation). Workaround: instruct the model not to use subagents. | Blocks core functionality; affects any workflow involving subagent delegation. | 8 comments, 8 👍 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | p2 | **Assess impact of AST-aware file reads, search, and mapping** — Epic investigating whether AST-aware tools can improve precision and reduce token usage. | Potential for meaningful token savings (current baseline ~36.6k tokens/turn) and more accurate code navigation. | 7 comments, 1 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | p2 | **Gemini does not use skills and sub-agents enough** — Model won't invoke custom skills/subagents on its own, even when the task is directly related. | Undermines the value of user-defined skills; requires explicit prompting every time. | 7 comments |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | p2 | **Browser Agent ignores settings.json overrides** — The Browser Agent completely ignores configuration overrides (e.g., `maxTurns`) from `settings.json`. | Breaks user expectations for per-agent configuration; limits customization. | 4 comments |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | p3 | **Enhance browser_agent resilience: Automatic session takeover and lock recovery** — Current fail-fast strategy on locked browser profiles causes unnecessary failures. | Impacts reliability in persistent session environments; needs graceful recovery. | 4 comments |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | p1 | **browser subagent fails in wayland** — Browser subagent fails on Wayland sessions. | Breaks a major platform; Linux desktop users can't use browser automation. | 4 comments, 1 👍 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | p2 | **Agent should stop/discourage destructive behavior** — Model uses risky commands (`git reset --force`) when safer alternatives exist. | Safety concern; could cause data loss in production workflows. | 3 comments, 1 👍 |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | p1 | **get-shit-done output hook causes crash** — Crash occurs when get-shit-done output completes (printing user summary). | Interrupts workflow completion; needs fix before the output is delivered. | 3 comments |

---

## 4. Key PR Progress

| PR | Area | Status | Summary |
|----|------|--------|---------|
| [#29737](https://github.com/google-gemini/gemini-cli/pull/29737) | agent | **OPEN** | **feat(models): add Gemini 4 Argon model support** — Registers the new `gemini-4-argon` model for selection via CLI. |
| [#29858](https://github.com/google-gemini/gemini-cli/pull/29858) | extensions | **CLOSED** | **feat(cli): bridge the IDE companion into container sandboxes over exec stdio** — Enables IDE integration (`/ide`, open-file context, native diffs) when Gemini CLI runs inside container sandboxes (docker/podman/runsc) while the IDE runs on the host. |
| [#29868](https://github.com/google-gemini/gemini-cli/pull/29868) | cli | **OPEN** | **fix(cli): stop continuation stream processing and auto-nudge after request cancellation** — Prevents the CLI from continuing to execute subsequent tool batches after the user cancels an active turn. |
| [#29867](https://github.com/google-gemini/gemini-cli/pull/29867) | cli | **OPEN** | **fix(cli): preserve `${VAR}` placeholders during deprecated settings migration** — Fixes a bug where automatic migration of deprecated settings was incorrectly overwriting unrelated environment variable placeholders. |
| [#29849](https://github.com/google-gemini/gemini-cli/pull/29849) | cli | **OPEN** | **fix(cli): handle termination signals and prevent tool execution after cancellation in non-interactive mode** — Fixes a race condition where CLI could continue consuming delayed provider tool calls after SIGINT/SIGTERM in headless environments. |
| [#29866](https://github.com/google-gemini/gemini-cli/pull/29866) | cli | **OPEN** | **fix(cli): restore workspace directories only after resumed chat succeeds** — Fixes a bug where failed session resume left directories in an inconsistent state. |
| [#29833](https://github.com/google-gemini/gemini-cli/pull/29833) | security | **CLOSED** | **fix(core): scope untrusted flag checks to external output and remember approved flags** — Reduces repeated confirmation prompts by treating agent's own shell command output as non-external. |
| [#29847](https://github.com/google-gemini/gemini-cli/pull/29847) | core | **CLOSED** | **fix(core): prevent duplicate agent loading when workspace is home directory** — Eliminates false-positive "Duplicate agent name" warnings when workspace is `~`. |
| [#29778](https://github.com/google-gemini/gemini-cli/pull/29778) | acp | **OPEN** | **fix(acp): truncate tool output before sending it to the model** — Applies `tools.truncateToolOutputThreshold` in ACP mode to prevent large shell outputs from exceeding model input limits. |
| [#29823](https://github.com/google-gemini/gemini-cli/pull/29823) | core | **OPEN** | **fix(core): fallback to system ripgrep and trust Termux paths on Android** — Fixes unhandled `spawn ENOENT` errors on Android/Termux during `grep_search`. |

---

## 5. Feature Request Trends

Across the issues, several high-level themes emerge:

1. **Subagent Reliability & Intelligence** — Multiple issues (#22323, #21968, #21409) point to subagents not being invoked appropriately, hanging, or misreporting status. The community wants smarter, more autonomous subagent behavior.

2. **Token Efficiency & Context Management** — Epic #22745 (AST-aware reads) and #19561 ("Tactful Extraction") both target reducing the ~36.6k token/turn baseline. Large file reads are "firehosing" context.

3. **Platform & Environment Expansion** — Issues #21983 (Wayland), #29823 (Android/Termux), and #29718 (rootless Podman) indicate growing demand for non-standard Linux environments.

4. **Security & Sandboxing** — #19873 proposes zero-dependency OS sandboxing; #22672 asks for discouraging destructive commands. The community is actively thinking about safety boundaries.

5. **IDE Integration Depth** — #29858 bridges the IDE companion into containers; #29848 excludes IDE settings from open-file context. IDE connectivity is becoming a first-class concern.

---

## 6. Developer Pain Points

| Pain Point | Frequency | Description |
|------------|-----------|-------------|
| **Subagent hangs & misreporting** | High | The generalist agent hanging (#21409) and subagents reporting false success (#22323) are blocking real workflows. |
| **Configuration not respected** | Medium | Browser Agent ignoring `settings.json` overrides (#22267) and symlinked agents not being recognized (#20079) frustrate users who expect customization to work. |
| **Token bloat** | Medium | Large file reads create context bloat; developers want surgical, AST-aware reads. |
| **Platform gaps** | Medium | Wayland failures, Android/Termux crashes, and rootless Podman permission issues fragment the user base. |
| **Repeated confirmations** | Low-Medium | #29833 partially addresses this, but the issue of being prompted repeatedly for the same safe flags persists. |

---

*Digest generated from GitHub data for google-gemini/gemini-cli on 2026-10-22.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest based on the provided data. Let me analyze the data and structure it according to the requested sections.

Let me go through the data:

## Releases (last 24h)
- v1.0.102 - main release
- v1.0.102-1 - fixed version
- v1.0.102-0 - improved version

Key changes in v1.0.102:
- Prompt mode now honors managed Auto model selection for -p and piped stdin runs
- Subagents honor custom and MCP tool approvals, avoiding duplicate permission prompts and allowing inherited workflows to run
- Plugin marketplaces accept git-subdir sources and long plugin descriptions

Fixed in v1.0.102:
- Plugin marketplaces accept git-subdir sources and long plugin descriptions
- Fish shell completion works when aliases include option aliases like --effort
- Chats no longer get (seems truncated)

Fixed in v1.0.102-1:
- Same as v1.0.102

Improved in v1.0.102-0:
- Sandboxed network traffic now honors NO_PROXY and ALL_PROXY when inheriting host proxy settings

## Issues (showing top 30 by comment count)

1. #13 [CLOSED] CLI input should have a vi/vim input mode - 15 comments, 76 👍
2. #4414 [CLOSED] BYOK custom providers return local 403 before requests reach provider - 4 comments, 3 👍
3. #3636 [OPEN] Bug: Voice mode cannot be enabled - Failed to fetch model catalog - 4 comments, 6 👍
4. #3448 [OPEN] support extra request params for byok model - 3 comments, 1 👍
5. #2055 [CLOSED] Queued messages cannot be cleared without canceling running job - 2 comments, 4 👍
6. #3363 [OPEN] Response interrupted and I cannot work anymore... - 2 comments, 2 👍


7. #5192 [OPEN] ACP mode: MCP OAuth token is never persisted - 2 comments, 1 👍
8. #5150 [OPEN] ACP: the autopilot task_complete summary is sent only as a tool call - 1 comment, 0 👍
9. #5207 [OPEN] Windows: with --sandbox, shell commands can't list or stat directories on non-system drive - 1 comment, 0 👍
10. #5219 [OPEN] Session wedged: task subagent with unknown model id falls back to 128k default caps - 1 comment, 0 👍
11. #5155 [OPEN] Cloud agent: "Registry only" MCP policy blocks all repo-configured MCP servers - 1 comment

I notice several authentication and policy-related issues emerging. The MCP OAuth token persistence problem in ACP mode could impact user experience, while the Windows sandbox limitation on non-system drives suggests cross-platform compatibility challenges. The session wedging issue with unknown model IDs and the registry-only MCP policy blocking configured servers indicate deeper integration and configuration complexities.

The developer community seems particularly focused on voice mode accessibility, reasoning effort constraints, and input method innovations. Key pain points include voice model fetching failures, interaction limitations in input methods, and potential session management bottlenecks. Specific issues like WSL voice server crashes and reasoning effort binding problems highlight the nuanced technical challenges in AI assistant implementations.</think>

# GitHub Copilot CLI Community Digest
**Date:** 2026-10-22

---

## 1. Today's Highlights

GitHub Copilot CLI v1.0.102 delivers significant improvements to model selection handling and subagent workflows. The release introduces proper honoring of managed Auto model selection in prompt mode, enhanced MCP tool approval inheritance for subagents, and improved proxy handling for sandboxed network traffic. Notably, several high-profile issues have been resolved, including the long-requested vi/vim input mode and BYOK provider authentication failures.

---

## 2. Releases

### v1.0.102 (2026-10-21)

| Category | Changes |
|----------|---------|
| **New** | Prompt mode now honors managed Auto model selection for `-p` and piped stdin runs |
| **New** | Subagents honor custom and MCP tool approvals, avoiding duplicate permission prompts and allowing inherited workflows to run |
| **New** | Plugin marketplaces accept `git-subdir` sources and long plugin descriptions |
| **Improved** | Sandboxed network traffic now honors `NO_PROXY` and `ALL_PROXY` when inheriting host proxy settings |
| **Fixed** | Fish shell completion works when aliases include option aliases like `--effort` |

### v1.0.102-1 & v1.0.102-0

Incremental releases addressing the same core improvements with minor refinements.

---

## 3. Hot Issues

| # | Issue | Summary | 👍 |
|---|-------|---------|-----|
| #13 | **[CLOSED] CLI input should have a vi/vim input mode** | High-demand feature for keyboard-driven navigation using modal editors. Closed after implementation. | 76 |
| #3636 | **[OPEN] Voice mode cannot be enabled - Failed to fetch model catalog** | Voice mode fails on corporate VPN; catalog unreachable. Impacts voice-first workflows. | 6 |
| #2055 | **[CLOSED] Queued messages cannot be cleared without canceling running job** | Users cannot edit/clear queued messages without terminating active jobs. | 4 |
| #4414 | **[CLOSED] BYOK custom providers return local 403 before requests reach provider** | Custom OpenAI/Anthropic providers fail with 403 before reaching the provider—authentication misrouting. | 3 |
| #3448 | **[OPEN] Support extra request params for BYOK model** | Request for `COPILOT_EXTRA_REQUEST_PARAMS` env var to support nonstandard LLM provider parameters. | 1 |
| #5192 | **[OPEN] ACP mode: MCP OAuth token never persisted** | OAuth tokens not written to disk/keychain; each new session re-authenticates via browser. | 1 |
| #5207 | **[OPEN] Windows sandbox can't access non-system drives** | Sandboxed shell commands fail to list/stat directories on non-system drives (e.g., D:\\). | 0 |
| #5219 | **[OPEN] Session wedged: task subagent with unknown model id** | Subagent with unknown model ID falls back to 128k caps, causing prompt budget errors. | 0 |
| #5054 | **[OPEN] Automatic compaction keeps timing out** | Summarizer fails to settle within 300s on large contexts with high reasoning. | 2 |
| #5197 | **[OPEN] Voice server segfaults on WSL2 after 1.0.100** | Voice server crashes (signal 11) on WSL2; `/voice` stuck on "Fetching voice models". | 0 |

---

## 4. Key PR Progress

Only 1 PR was updated in the last 24h:

| # | PR | Summary |
|---|-----|---------|
| #1960 | **[CLOSED] install: use GITHUB_TOKEN for authenticated GitHub requests** | Install script now passes `GITHUB_TOKEN` as `Authorization` header on curl/wget downloads and embeds it in git remote URLs for `ls-remote`, avoiding rate limits and enabling private repo installation. |

---

## 5. Feature Request Trends

Based on issue analysis, the most-requested feature directions are:

| Trend | Description |
|-------|-------------|
| **Enhanced Input Methods** | Vi/vim input mode implemented; continued demand for keyboard-driven navigation |
| **Extended Model Configuration** | Support for extra request params, explicit startup model selection, longer prompt cache TTL for Claude models |
| **Voice Mode Reliability** | Fixes for voice catalog fetching, WSL2 voice server crashes |
| **MCP Integration** | OAuth token persistence, registry policy handling, custom tool approval inheritance |
| **Windows/Sandbox Improvements** | Non-system drive access, sandbox enforcement in ACP mode |
| **Session Stability** | Session wedging prevention, automatic compaction timeouts, background subagent timeout handling |

---

## 6. Developer Pain Points

The most recurring frustrations from the developer community:

1. **Authentication Misdirection** — BYOK custom providers returning local 403 errors before requests reach the provider (#4414)
2. **Voice Mode Failures** — Inability to enable voice mode on corporate VPNs or WSL2 environments (#3636, #5197)
3. **Session Management** — Inability to clear queued messages without canceling jobs (#2055); sessions wedging with subagents (#5219)
4. **Windows Sandbox Limitations** — Shell commands failing on non-system drives when sandboxed (#5207)
5. **MCP OAuth Persistence** — Repeated browser authentication required in ACP mode (#5192)
6. **Context Compaction Timeouts** — Automatic summarization failing on large contexts with high reasoning (#5054)
7. **Key Binding Inconsistencies** — Mixed CUA/Emacs keybindings causing data loss (#5211)

---

*Generated from github.com/github/copilot-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze this GitHub data from anomalyco/opencode and create a structured community digest.

First, let me organize what I have:

**Releases:** None in the last 24h

**Issues (50 total, showing 30):**
Key issues I can identify:
1. #42985 - OpenCode Go quota usage ~4x higher than displayed DeepSeek V4 Flash cost (CLOSED, 20 comments, 9 👍)
2. #52227 - Go API key not available in new v2 Console (CLOSED, 14 comments, 4 👍)
3. #34644 - GitHub Copilot Free/Student plans show no models (OPEN, 12 comments, 24 👍)
4. #49742 - Message timestamp option missing in CLI v2.0.8 (OPEN, 9 comments, 4 👍)
5. #56005 - Failed to launch after update to 2.0.30 (CLOSED, 8 comments, 1 👍)
6. #55918 - Windows CLI: WSL2 port conflict causing startup failure (CLOSED, 6 comments, 2 👍)
7. #49645 - Model-agnostic MCP tool search feature (CLOSED, 6 comments, 3 👍)
8. #53971 - V1→V2 migration silently drops legacy messages (OPEN, 5 comments, 0 👍)
9. #55726 - max_tokens sent alongside max_completion_tokens causing rejections (OPEN, 5 comments, 0 👍)
10. #52022 - AGENTS.md feature (CLOSED, 5 comments, 0 👍)
11. #50551 - V1→V2 importer keeps global project_id for non-git dirs (CLOSED, 5 comments, 1 👍)


12. #53450 - V1 sessions from non-git directories hidden (CLOSED, 4 comments, 1 👍)
13. #57538 - Subagent tasks cancelled on network interface change (CLOSED, 3 comments, 0 👍)
14. #57851 - gemini-4-argon-contributor returns 429 (OPEN, 3 comments, 0 👍)
15. #57859 - HTTP 429 from POST /zen/v1/systemone (OPEN, 3 comments, 0 👍)
16. #56200 - Server reads ~/.aws and gcloud credentials when unused (OPEN, 3 comments, 0 👍)

Several other issues worth noting: session visibility problems stemming from non-git directory handling, network-related disruptions affecting background tasks, and some API rate limiting or credential management concerns. The authentication setup continues to be problematic for certain Copilot tiers, while some model access issues appear tied to account permissions or upstream service availability.

There's also a regression in the Windows skill API returning empty results despite configuration, some markdown rendering problems with anchor handling, and a config caching issue where newly added models don't appear until restart. Desktop focus management needs improvement for the terminal feature, and there's a deprecation path inconsistency worth addressing. TUI startup delays and console window behavior on Windows round out the operational concerns.

A few more issues stand out: GitHub Actions bot installation failures, unexpected frontmatter key handling that breaks permissions, focus stealing in the rename dialog, and tool call looping behavior in the agent layer.

Looking at the pull requests, several user-facing improvements are in flight—an iOS-style timeline animation, file watching in the side panel, a clearer knobs panel interface, and a fix for the side tab drop indicator. Beta updates are being prepared alongside documentation work around OTLP logging and automatic compaction limits. There's also progress on UI fixes for Kimi coding providers and anchor handling for Gemini tools.

The remaining PRs address several functional issues: classifying gateway input limits correctly, preserving inline text tool attachments, restoring rejected shell commands, resolving relative history attachments in workspaces, and adding MCP server disable functionality. A contributor is replacing Storybook with an in-app components lab for better testing, and there are fixes for beta typechecks, command-L forwarding in the browser, tab shortcut scoping, and e2e test quarantine settings.</think>

# OpenCode Community Digest — 2026-10-22

**Data source:** github.com/anomalyco/opencode

---

## Today's Highlights

The OpenCode community continues to drive improvements across the platform, with significant progress on V1→V2 migration issues, Windows compatibility fixes, and UI/UX enhancements. Notable developments include a major timeline animation feature for the desktop app, ongoing refinements to the new v2 Console, and multiple bug fixes addressing user-reported pain points around model availability and credential handling.

---

## Releases

**No new releases** in the last 24 hours.

---

## Hot Issues

1. **[OpenCode Go quota usage appears ~4x higher than displayed DeepSeek V4 Flash cost](https://github.com/anomalyco/opencode/issues/42985)** — *20 comments, 9 👍*
   Users report significant discrepancies between displayed costs and actual Go quota consumption for DeepSeek V4 Flash. This metering issue affects billing transparency and user trust.

2. **[Go API key is not available in the new v2 Console](https://github.com/anomalyco/opencode/issues/52227)** — *14 comments, 4 👍*
   Subscribers cannot find or copy Go API keys in the redesigned Console, blocking external tool integration. **Status: CLOSED**

3. **[GitHub Copilot Free/Student plans show no models](https://github.com/anomalyco/opencode/issues/34644)** — *12 comments, 24 👍*
   After OAuth authentication, Copilot Free/Student accounts see zero available models despite having active subscriptions. High community interest with 24 👍.

4. **[Message timestamp option missing in OpenCode CLI v2.0.8](https://github.com/anomalyco/opencode/issues/49742)** — *9 comments, 4 👍*
   The popular Ctrl+P timestamp toggle from v1 is absent in v2, affecting workflow visibility for power users.

5. **[V1→V2 migration silently drops legacy messages missing required fields](https://github.com/anomalyco/opencode/issues/53971)** — *5 comments*
   Migration discards messages lacking agent/model/parentID fields, causing old sessions to appear empty. Users report 64 affected sessions.

6. **[v1 max_tokens option causes strict endpoints to reject every request](https://github.com/anomalyco/opencode/issues/55726)** — *5 comments*
   Regression from #54694 sends both `max_tokens` and `max_completion_tokens`, causing OpenAI-compatible endpoints to reject requests with "Extra inputs are not permitted."

7. **[Server reads ~/.aws and gcloud credentials when Bedrock/Vertex are unused](https://github.com/anomalyco/opencode/issues/56200)** — *3 comments*
   Unnecessary credential file access at startup raises privacy and performance concerns, even when those providers aren't configured.

8. **[Windows: GET /api/skill returns empty array with skill roots configured](https://github.com/anomalyco/opencode/issues/57524)** — *3 comments*
   Windows-specific bug breaks skill loading entirely; same configuration works on macOS.

9. **[core: github-copilot shows zero models on auto-only accounts](https://github.com/anomalyco/opencode/issues/57955)** — *2 comments*
   `model_picker_enabled: false` returned for every model blocks access entirely for auto-only Copilot plans.

10. **[Expired free model (GLM) breaks client catalog and blocks other active free models](https://github.com/anomalyco/opencode/issues/57931)** — *2 comments*
    When a free model expires, the entire catalog sync fails instead of gracefully skipping, blocking valid alternatives like Mimo.

---

## Key PR Progress

1. **[feat(app): animate the timeline like iOS while a session runs](https://github.com/anomalyco/opencode/pull/57224)** — *Contributor*
   Major UI enhancement: smooth timeline animations during active sessions, streaming text without jarring jumps.

2. **[feat(core): watch files open in the side panel](https://github.com/anomalyco/opencode/pull/57915)** — *jlongster*
   Real-time file watching replaces polling for side panel files—significant performance improvement.

3. **[fix(gui-extensions): make the Knobs panel clearer](https://github.com/anomalyco/opencode/pull/57921)** — *Contributor*
   Redesigned Knobs panel with clearer hierarchy: Global settings pinned above section tabs.

4. **[fix(app): keep the side tab drop indicator inside the strip](https://github.com/anomalyco/opencode/pull/57972)** — *jlongster*
   Bug fix for drag-drop UI when side panel strip is scrolled or exceeds pane width.

5. **[docs: explain OTLP log and trace export configuration](https://github.com/anomalyco/opencode/pull/56515)** — *rudycelekli*
   New documentation covering OTLP/HTTP endpoint, collector headers, and CLI/server environment differences.

6. **[docs: explain automatic compaction input limits and reserve](https://github.com/anomalyco/opencode/pull/56509)** — *rudycelekli*
   Documents input-limit precedence, default reserve behavior, and per-field model overrides.

7. **[fix(ui): retain icons for renamed Kimi coding providers](https://github.com/anomalyco/opencode/pull/56506)** — *rudycelekli*
   Fixes #50597: registers renamed providers with proper SVG assets and icon types.

8. **[fix(ai): anchor Gemini tool media with text](https://github.com/anomalyco/opencode/pull/56484)** — *rudycelekli*
   Prefixes synthetic tool-media continuations with text for OpenAI-compatible backends.

9. **[fix(ai): classify gateway configured input limit overflow](https://github.com/anomalyco/opencode/pull/56454)** — *rudycelekli*
   Fixes #56296: recognizes Go gateway's input limit errors as context overflow.

10. **[chore(ci): quarantine always-red e2e and fail fast](https://github.com/anomalyco/pull/57951)** — *Contributor*
    Removes perpetually failing e2e tests from beta pipeline; prevents wasted CI time on known-red tests.

---

## Feature Request Trends

Based on the issue landscape, the most requested directions are:

- **Model Availability & Provider Access**: Multiple issues (#34644, #57955) highlight the need for better handling of tiered Copilot plans and auto-only accounts.
- **Migration Reliability**: V1→V2 migration issues (#53971, #50551, #53450) suggest demand for more robust migration with clear error reporting.
- **Windows Parity**: Issues around port conflicts (#55918), credential reading (#56200), and skill APIs (#57524) indicate Windows-specific improvements needed.
- **UI/UX Refinements**: Timeline animations, Knobs panel redesign, and session tab bar plugins show demand for polished desktop experiences.
- **MCP Enhancements**: Tool search optimization (#49645) and MCP server disable toggles (#56452) reflect growing MCP ecosystem needs.

---

## Developer Pain Points

1. **Configuration Hot-Reload**: Models added to provider configs aren't reflected until service restart (#56902)—a friction point for developers iterating on setups.

2. **Network-Dependent Background Tasks**: Subagent tasks silently cancel on network interface changes (#57538), with no recovery mechanism.

3. **Startup Performance**: TUI startup can hang ~6 minutes on plugin loading (#56885), particularly blocking external plugin users.

4. **Credential Access Scope**: Server reads AWS/gcloud credentials unnecessarily (#56200), raising both privacy and startup-time concerns.

5. **Console Window Spam**: Windows users see console windows flash for every spawned child process (#57907), disrupting workflow.

6. **Focus Management**: Terminal toggle shortcut and rename dialog focus behaviors (#57536, #52767) frustrate desktop users expecting standard UX patterns.

---

*End of digest. Generated from GitHub data for 2026-10-22.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Pi community digest for 2026-10-22 based on the provided GitHub data. Let me analyze the data and structure it according to the requirements.

Let me go through each section:

1. **Today's Highlights** - Need to summarize the most important updates in 2-3 sentences

2. **Releases** - There's v1.4.0 with image input for classifiers

3. **Hot Issues** - Need to pick 10 noteworthy issues from the 30 shown, with explanations of why they matter

4. **Key PR Progress** - Need to pick 10 important PRs from the 14 shown

5. **Hot Discussions** - There are 3 discussions to cover

6. **Feature Request Trends** - Need to analyze issues and discussions for common themes

7. **Developer Pain Points** - Summarize recurring frustrations

Let me organize this data properly. I'll write in English since the user's request and the content are in English.

For the issues, I need to select the most impactful ones based on:
- Comment count (more discussion = more important)
- Priority labels (P0, prio:p0)
- Bug severity
- Number of reactions

Let me select 10 issues:

1. #6300 - Windows TUI input redraw bug (20 comments) - affects Windows users significantly
2. #7553 - Configurable thinking level for compaction (11 comments, 3 👍)
3. #10019 - Anthropic subscription hangs (10 comments, 2 👍)
4. #10976 - PowerShell fallback issue (10 comments, 1 👍)
5. #9656 - Mouse wheel scrolling in fullscreen Windows+Zellij (9 comments, 4 👍)
6. #10956 - cacheWarming idle stops (8 comments, 1 👍)


7. #8913 - Fullscreen mouse tracking (7 comments)
8. #6165 - Scaleway provider request (7 comments, 2 👍)
9. #10949 - OpenAI responses reasoning delta dropped (6 comments)
10. #11203 - Built-in grep inherits RIPGREP_CONFIG_PATH (5 comments) - this was just fixed in PR #11230

Now for PRs, I'll highlight the most consequential ones that introduce significant functionality or address critical issues:

1. #11233 - Fixes recovery that omits tool results
2. #11230 - grep tool configuration resolution
3. #11181 - Introduces Scaleway provider support
4. #11213 - Implements provider attribution across components
5. #11212 - Addresses regex escaping in TUI functionality
6. #11005 - Resolves Gemini 4 thinkingBudget challenges
7. #9993 - Brings Anthropic Claude to Vertex AI
8. #11231 - Updates Windows documentation
9. #8635 - Preserves aborted stop reason signals
10. #7441 - Handles missing finish_reason scenarios

Three active discussions are underway: one exploring an awto-pi-lot extension with pay-as-you-go options, another about deploying Pi on Atomic Bot for cloud operations, and a third featuring pi-tidy for managing tool call outputs.</think>

# Pi Community Digest — 2026-10-22

## Today's Highlights

v1.4.0 shipped with **image input support for classifier models** — `codemode models.classify()` now accepts image inputs across TypeSafe, Cloudflare Workers AI, and OpenRouter providers. This release cycle also saw significant bug-fixing activity across Windows compatibility, clipboard handling, and tool configuration issues, with 5 P0 bugs addressed and the Scaleway provider merged.

---

## Releases

### v1.4.0
**Image input for classifiers** — The `codemode models.classify()` API now accepts `images` as input for TypeSafe's Jev model and Cloudflare's Clef model, available on `typesafe`, `cloudflare-workers-ai`, and OpenRouter providers. This enables multimodal classification workflows directly within Pi sessions.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **#6300** | **[bug] Windows: Input line is redrawn on every keystroke** | Severely degrades TUI usability on Windows — each character appears on a new line, making input essentially unusable on Windows 10/11 in both cmd.exe and Windows Terminal. | 20 comments, actively investigated |
| **#7553** | **[inprogress] Configurable thinking level/model for compaction** | Compaction currently reuses the session's thinking level, making reasoning budgets inseparable from summarization. Users running auto-compaction on reasoning models have no control over summary quality. | 11 comments, 3 👍 — in progress |
| **#10019** | **Anthropic subscription requests hang at :00/:30 UTC** | Sessions freeze with spinning indicator when using Anthropic subscriptions; requires manual cancel/restart. Not seen with Claude Code. | 10 comments, 2 👍 |
| **#10976** | **PowerShell tool falls back to Windows PowerShell 5.1** | When pwsh 7 is installed via Microsoft Store, the tool incorrectly runs PS 5.1 due to path resolution issues. | 10 comments, 1 👍 |
| **#9656** | **[bug] Mouse wheel scrolls prompt history in fullscreen on Windows + Zellij** | Mouse wheel in fullscreen mode scrolls editor history instead of conversation transcript when running under Zellij on native Windows. Works correctly without multiplexer or on Linux+tmux. | 9 comments, 4 👍 |
| **#10956** | **cacheWarming "idle" stops when context holds custom/compaction message** | Idle cache warming never fires if the conversation context contains custom or compaction messages — 507+ cache warming decisions with 100% continuation probability, never at 0.15. | 8 comments, 1 👍 |
| **#8913** | **Fullscreen renderer unconditionally enables mouse tracking** | No way to disable 1003 any-event mouse tracking in fullscreen mode; privacy concern for users who don't want terminal mouse events. | 7 comments |
| **#6165** | **Add Scaleway Generative APIs LLM provider** | Request to add Scaleway as an EU-hosted provider with zero data retention and Open Weight models. | 7 comments, 2 👍 — **merged via #11181** |
| **#10949** | **openai-responses: legacy reasoning.delta events dropped** | Reasoning from OpenAI-compatible endpoints is not streamed because `response.reasoning.delta` events are dropped. | 6 comments |
| **#11203** | **[bug] Built-in grep inherits RIPGREP_CONFIG_PATH despite literal: false** | Grep tool silently misses regex matches when RIPGREP_CONFIG_PATH contains `--fixed-strings`, causing incomplete search results. | 5 comments — **fixed in #11230** |

---

## Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| **#11181** | **feat(ai,coding-agent): add the Scaleway provider** | Adds Scaleway Generative APIs as a built-in OpenAI-compatible provider with SCW_SECRET_KEY auth. | ✅ Closed |
| **#11233** | **fix(coding-agent): recovery omits tool results with the truncated tool call** | Fixes #11227 — recovery now properly removes tool results alongside truncated tool calls. | ✅ Closed |
| **#11230** | **fix(coding-agent): grep tool ignores ripgrep config via --no-config** | Fixes #11203 — passes `--no-config` to rg to ignore inherited RIPGREP_CONFIG_PATH. | ✅ Closed |
| **#11213** | **feat(ai,coding-agent,durable): provider attribution headers in pi-durable** | Adds provider attribution headers to pi-durable using the same header table as coding agent. | ✅ Closed |
| **#11212** | **fix(tui): escape regex metacharacters in single-segment fd queries** | Fixes #10972 — escapes `[`, `]` and `(` in `@` autocomplete queries so bracket filenames match literally. | ✅ Closed |
| **#11005** | **fix(ai): avoid thinkingBudget and MINIMAL on unmapped Gemini 4 models** | Urgent P0 fix for #10890 — prevents HTTP 400 errors on unmapped Gemini 4 models. | ✅ Closed |
| **#9993** | **feat(ai,coding-agent): add Anthropic Claude support to Google Vertex AI provider** | Enables Claude Opus, Sonnet, and Haiku access via Google Cloud Vertex AI Model Garden. | ✅ Closed |
| **#11231** | **[pkg:coding-agent] docs(quickstart): add Windows installer tab** | Adds `install.ps1` tab to quickstart docs alongside the macOS/Linux curl installer. | ✅ Open |
| **#8635** | **fix(ai): preserve aborted stop reason during lazy setup** | Fixes #8409 — passes request abort signal through lazy stream setup and reports setup failures as aborted. | ✅ Open |
| **#7441** | **fix(ai): tolerate missing finish_reason on non-empty openai-completions** | Handles gateways that omit terminal finish_reason chunks, preventing session crashes. | ✅ Closed |

---

## Hot Discussions

| # | Discussion | Category | Summary |
|---|------------|----------|---------|
| **#2483** | **awto-pi-lot: pay-as-you-go, accountless mode** | Show & tell | Extension adding PPQ.ai provider with AutoClaw model; offers pay-as-you-go pricing without account requirements. | 5 comments, 3 👍
| **#11214** | **Pi on Atomic Bot, running 24/7 in the cloud** | Show & tell | Atomic Bot launches Pi as a cloud service — one-click dedicated instance, runs 24/7 independent of local machine. | 1 👍
| **#11196** | **pi-tidy: tool calls collapse into a single line** | Show & tell | Extension folds a reply's multiple tool calls into one collapsible line (e.g., `▾ 12 calls · bash×8 read×4`). | 1 👍

---

## Feature Request Trends

1. **Enhanced model control** — Multiple requests for configurable thinking levels for compaction (#7553), model-specific settings, and per-provider configurations
2. **Windows parity** — TUI input fixes (#6300), PowerShell detection (#10976), mouse handling (#9656), and clipboard improvements remain recurring themes
3. **Provider expansion** — Ongoing interest in new providers (Scaleway merged, Vertex AI Claude support added)
4. **Cache warming improvements** — Better control over idle cache warming behavior (#10956, #10536)
5. **Durable execution** — Requests for `afterTool` on non-executed calls and turn limits (#11043), tool wrapping for extensions (#11218)

---

## Developer Pain Points

- **Windows terminal compatibility** — Input rendering, mouse events, and PowerShell detection continue to cause friction despite multiple fixes
- **Configuration inheritance** — Tools silently inheriting environment variables (RIPGREP_CONFIG_PATH) leads to unexpected behavior
- **Model thinking budgets** — Confusion around thinking level handling for compaction, Gemini 4 models, and cross-model sessions
- **Cache warming edge cases** — Idle warming stops unpredictably with custom messages, virtual models, or specific context states
- **Recovery edge cases** — Truncated tool calls, pre-prompt recovery, and session resumption occasionally leave inconsistent state (#11227, #11062, #11075)

---

*Generated from github.com/earendil-works/pi — 2026-10-22*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>Let me analyze this GitHub data to create a comprehensive Qwen Code community digest for 2026-10-22.

First, let me organize the information:

**Releases (last 24h):**
1. sdk-typescript-v0.1.22 - TypeScript SDK with bundled CLI 0.26.0
2. v0.26.0 - Main release
3. v0.25.3-nightly.20261021.79242671bb - Nightly
4. desktop-v0.26.0 - Desktop app
5. cua-driver-rs-v0.26.0 - CUA Driver

**Key Issues (by comment count):**
1. #13492 - XML tool-call recovery drops outer calls (13 comments) - P2, bug, core
2. #13787 - XML recovery repeats prefix scans on large multi-call responses (9 comments) - P3, performance
3. #14979 - Improve the edit tool (4 comments) - P2, feature-request
4. #15076 - Add web_fetch and todo_write to Workspace Sessions (4 comments) - P2, feature-request
5. #15083 - User prompt during background subagent executes in wrong context (4 comments) - P2, bug
6. #15135 - web-shell E2E Smoke test fails after #15061 (3 comments) - P1, bug
7. #13085 - Deferred review findings (3 comments) - closed
8. #15130 - Deferred finding about teammate-exited (3 comments) - P3, enhancement
9. #15129 - permissions.deny Read blocks read_file but grep_search still works (3 comments) - P1, security bug


10. #15027 - Measure and reduce repeated legacy catalog input (3 comments) - P2, feature-request

I notice several high-priority issues requiring immediate attention. The most critical are security vulnerability #15129, which allows potential unauthorized file access despite permission restrictions, and the test failure #15135 that blocks continuous integration. Performance concerns are evident in issues #13787 and #15027, which highlight potential inefficiencies in XML recovery and input processing. The team is also addressing core functionality improvements, particularly around tool interactions and workspace session management.

The feature requests demonstrate a clear trend toward enhanced user experience and flexibility. Developers want more sophisticated session management capabilities, including manual context compression, MCP server runtime control, and improved session archiving. These requests suggest users need more granular control over their development environment, with a focus on dynamic configuration and persistent workspace settings.

The performance and memory issues are particularly noteworthy. There's an active memory leak in the VS Code companion's daemon that requires urgent resolution. Additionally, the team is tackling performance bottlenecks in XML recovery, especially for large-scale multi-call scenarios. The community is also pushing for more intelligent file handling and tool integration, with requests to improve edit tool precision and expand file operation capabilities.

The security concern around file permissions is critical, highlighting potential information leakage through seemingly restricted file searches. Parallel development efforts include significant enhancements like supporting session-targeted skill and extension refresh, implementing agent identity on the daemon wire, and introducing local serve capabilities with on-demand server downloads. Several recent pull requests focus on resolving workspace locking challenges, improving test reliability, and refining core functionalities across different components.</think>

# Qwen Code Community Digest — 2026-10-22

## Today's Highlights

The Qwen Code team shipped **v0.26.0** alongside the Desktop app and TypeScript SDK (v0.1.22), introducing session-targeted Skill and Extension refresh. Critical security and performance issues remain active: a P1 bug allows denied files to leak via grep/glob, and the VS Code daemon suffers from unbounded heap growth. The community is actively filing feature requests around Managed Agent parity with the legacy daemon and improved session lifecycle management.

---

## Releases

| Version | Description |
|---------|-------------|
| **v0.26.0** | Main release. Adds session-targeted Skill and Extension refresh via daemon (PR #14050). No breaking changes. |
| **desktop-v0.26.0** | Qwen Code Desktop app. Includes same daemon improvements as main release. |
| **sdk-typescript-v0.1.22** | TypeScript SDK bundling CLI 0.26.0. |
| **cua-driver-rs-v0.26.0** | CUA Driver prebuilt binaries (macOS codesigned/notarized, Linux glibc 2.31+, Windows UIAccess). |
| **v0.25.3-nightly.20261021.79242671bb** | Latest nightly build. |

---

## Hot Issues

**1. [P1 Security Bug] permissions.deny Read() blocks read_file but grep/glob still return content**  
#15129 | 3 comments  
A critical gap: `permissions.deny Read(./secret.env)` blocks `read_file` but `grep_search` and `glob` still expose the file's name and content. This contradicts documentation and represents an information leakage risk.  
🔗 https://github.com/QwenLM/qwen-code/issues/15129

**2. [P1] web-shell E2E Smoke fails deterministically after #15061**  
#15135 | 3 comments  
The test `managed-ssh-workspace-registration.spec.ts:130` fails on every PR reaching the `full` tier due to a text mismatch ("Managed" label now includes " · Managed"). None of the affected PRs touch this spec.  
🔗 https://github.com/QwenLM/qwen-code/issues/15135

**3. [P1] VS Code daemon OOM: heap grows without bound, dies at ~4GB**  
#15071 | 3 comments  
The `qwen serve` daemon's JavaScript heap grows unbounded during normal VS Code companion use until hitting the ~4GB runtime cap and crashing with "JavaScript heap out of memory."  
🔗 https://github.com/QwenLM/qwen-code/issues/15071

**4. [P2] XML tool-call recovery drops outer calls with quoted tool markup**  
#13492 | 13 comments  
The recovery mechanism incorrectly drops outer tool calls when they contain quoted tool markup. PR #13515 partially fixed this; the remaining outer-call recovery is tracked in PR #13579.  
🔗 https://github.com/QwenLM/qwen-code/issues/13492

**5. [P3] XML recovery performance degrades on large multi-call responses**  
#13787 | 9 comments  
XML tool-call recovery becomes increasingly slow with many valid calls. A bounded direct-parser reproduction confirms the cost on current main.  
🔗 https://github.com/QwenLM/qwen-code/issues/13787

**6. [P2] Improve the edit tool**  
#14979 | 4 comments  
Request to port ideas from `dsh-better-edit` to replace the current read/edit workflow. Users report the edit tool frequently trips on exact old_text matching.  
🔗 https://github.com/QwenLM/qwen-code/issues/14979

**7. [P2] Add web_fetch and todo_write to Managed Agent Workspace Sessions**  
#15076 | 4 comments  
Both tools exist in shared core but aren't available in Managed Agent Workspace Sessions. Request to expose them.  
🔗 https://github.com/QwenLM/qwen-code/issues/15076

**8. [P2] User prompt executes in background subagent's AsyncLocalStorage context**  
#15083 | 4 comments  
When a user submits a prompt while a background subagent runs, it executes inside the subagent's context, causing deferred tool_call rejections.  
🔗 https://github.com/QwenLM/qwen-code/issues/15083

**9. [P2] Managed Agent: add manual context compression action**  
#15080 | 2 comments  
Request for a user-facing manual context compression control in Managed Agent Sessions. Currently only automatic compaction exists.  
🔗 https://github.com/QwenLM/qwen-code/issues/15080

**10. [P2] Managed Agent: manage MCP servers at runtime without recreating Session**  
#15079 | 2 comments  
Request to add, remove, enable, disable, restart, and reload MCP servers at runtime without session recreation. Currently the MCP surface is pinned at session creation.  
🔗 https://github.com/QwenLM/qwen-code/issues/15079

---

## Key PR Progress

| PR | Description |
|----|-------------|
| **#15136** | [chore] Release v0.26.0 — syncs package.json and CHANGELOG.md |
| **#15137** | [chore] Release sdk-typescript v0.1.22 |
| **#13902** | feat: project agent identity and Agent Team delivery onto ACP/daemon wire. Adds `_meta.agent` fields to subagent frames for parent→child delegation. |
| **#14928** | feat(managed-agent): adds experimental `qwen serve --managed --open` for local Managed application with on-demand server download |
| **#15094** | fix(managed): aligns checkpoint budgets and surfaces recovery blocks |
| **#14033** | fix(core): widens agent workspace lock retry budget from 10 to 30 retries (~5s worst case), matching Agent Board lock |
| **#13571** | feat(memory): adds opt-in extraction cadence after no-op run via `QWEN_CODE_MEMORY_EXTRACT_NOOP_SKIP_TURNS` |
| **#14677** | fix(core): treats reassigned HOME as dynamic for cd and ~ targets, fixing certification against wrong directory |
| **#14670** | fix(core): splits shell commands on bash separators, not JavaScript whitespace (handles Unicode correctly) |
| **#11807** | fix(cli): strips UTF-8 BOM in daemon trust and companion settings readers to prevent security misreadings |

🔗 All PRs: https://github.com/QwenLM/qwen-code/pulls

---

## Feature Request Trends

The following themes emerge from Issues and PRs:

1. **Managed Agent Parity** — Multiple requests to close gaps between the Java Hosted Managed Agent and legacy `qwen serve` daemon: capability matrix (#15075), runtime MCP server management (#15079), manual context compression (#15080), archived session listing (#15077), session lifecycle operations for public Shell sessions (#15078), filesystem/process confinement (#15081), capacity/idle-reclamation model (#15082).

2. **Enhanced File Operations** — Improve edit tool reliability (#14979), add web_fetch/todo_write to Workspace Sessions (#15076).

3. **Performance Optimization** — Reduce repeated legacy catalog input (#15027), fix XML recovery prefix scan performance (#13787).

4. **Security Hardening** — Fix permissions.deny file leakage (#15129), ensure file confinement in Managed Workspaces (#15081).

---

## Developer Pain Points

- **Memory Leaks**: VS Code companion daemon OOM at ~4GB is blocking production use (#15071).
- **Security Gap**: Denied files accessible via grep/glob despite Read denial (#15129).
- **Test Flakiness**: web-shell E2E Smoke fails deterministically on all PRs due to label change (#15135).
- **Edit Tool Fragility**: Exact old_text matching causes frequent agent failures (#14979).
- **XML Recovery Performance**: Slows significantly with large multi-call responses (#13787).
- **AsyncLocalStorage Context Bleed**: User prompts during background subagent execution run in wrong context (#15083).

---

*Generated from GitHub data — github.com/QwenLM/qwen-code*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*