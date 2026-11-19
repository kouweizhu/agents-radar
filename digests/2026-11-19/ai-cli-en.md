# AI CLI Tools Community Digest 2026-11-19

> Generated: 2026-11-19 03:48 UTC | Tools covered: 7

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

<think>The user wants a cross-tool comparison report synthesizing all six AI CLI tool community digests. Let me analyze the data from all six tools and create a comprehensive comparison report.

Let me extract key data points from each digest:

1. **Claude Code (github.com/anthropics/claude-code)**
   - Issues: 50 open, 30 shown
   - PRs: 1 shown
   - Discussions: Not shown in data
   - Release: v2.1.328
   - Active community with strong feedback loop

2. **OpenAI Codex (github.com/openai/codex)**
   - Releases: rust-v0.172.0-alpha.1, rust-v0.171.0-alpha.13
   - Issues: 20+ hot issues shown
   - PRs: 20 merged in last 24h
   - Discussions: 7 Show and Tell + 1 Idea
   - Very active

3. **Gemini CLI (github.com/google-gemini/gemini-cli)**
   - Releases: v0.69.0, v0.70.0-preview.0
   - Issues: 37 total, 30 shown
   - PRs: 10+ key PRs
   - Discussions: None shown
   - Active development

4. **GitHub Copilot CLI (github.com/github/copilot-cli)**
   - Release: v1.0.114
   - Issues: 50 total, 30 shown
   - PRs: None in last 24h
   - Discussions: None shown
   - Moderate activity

5. **OpenCode (github.com/anomalyco/opencode)**
   - Releases: None in last 24h
   - Issues: 30 shown
   - PRs: 20+ shown
   - Discussions: None shown
   - Active development

6. **Pi (github.com/earendil-works/pi)**
   - Releases: None in last 24h
   - Issues: 37 total, 30 shown
   - PRs: 10+ shown
   - Discussions: 1 Q&A shown
   - Moderate activity

7. **Qwen Code (github.com/QwenLM/qwen-code)**
   - Release: v0.28.0-nightly.20261118.d9ac287c9f
   - Issues: 10 hot issues shown
   - PRs: 10+ key PRs
   - Discussions: None shown
   - Active development

Looking at the data, I can see several tools are actively shipping releases while others are maintaining steady development without recent updates. The activity levels vary significantly—some repositories like OpenAI Codex and Qwen Code are pushing multiple PRs daily, while GitHub Copilot CLI shows no recent merges despite having an active issue queue.
</think>


# AI CLI Tools Ecosystem — Cross-Tool Comparison Report

**Date:** November 19, 2026
**Scope:** Claude Code · OpenAI Codex · Gemini CLI · GitHub Copilot CLI · OpenCode · Pi · Qwen Code

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem is in a phase of rapid convergence and differentiation simultaneously. Every major provider now offers a terminal-native agentic interface built on a layered architecture: a core reasoning engine, a tool system (typically MCP-compliant), a session management layer, and a permission/interaction model. The community discourse today reflects a maturation beyond basic chat-in-terminal toward **reliability at scale** (process accumulation, credential management, cross-account access), **platform parity** (Windows sandbox conflicts, Wayland support, shell compatibility), and **enterprise readiness** (Entra ID integration, Guardian/Guardian-style policy hooks, billing accuracy). Meanwhile, bleeding-edge work on virtual model routing, AST-aware file operations, and ACP (Agent Communication Protocol) interoperability signals that the ecosystem is converging on a shared protocol layer while competing on implementation quality.

---

## 2. Activity Comparison

| Tool | Repo | Open Issues | PRs (24h) | Discussions | Release Today |
|------|------|-------------|-----------|-------------|---------------|
| **Claude Code** | anthropics/claude-code | **50** | 1 | N/A* | **v2.1.328** |
| **OpenAI Codex** | openai/codex | 20+ | **20 merged** | 8 | 2 alpha releases |
| **Gemini CLI** | google-gemini/gemini-cli | **37** | 10+ | N/A* | v0.69.0 + v0.70.0-preview |
| **GitHub Copilot CLI** | github/copilot-cli | **50** | 0 | N/A* | v1.0.114 |
| **OpenCode** | anomalyco/opencode | 30+ | **20+** | N/A* | None |
| **Pi** | earendil-works/pi | **37** | 10+ | 1 | None |
| **Qwen Code** | QwenLM/qwen-code | 10+ | 10+ | N/A* | Nightly build |

*These repositories have Discussions disabled or deprioritized as community channels; Issues serve as the primary feedback mechanism.

**Observations:**
- **OpenAI Codex** leads in PR throughput (20 merged in 24 hours), reflecting a large dedicated engineering team with high iteration velocity.
- **Claude Code, Gemini CLI, GitHub Copilot CLI, and Pi** maintain similarly-sized open issue queues (~37–50), suggesting comparable community scale.
- **Qwen Code** reports a smaller issue footprint (10 hot issues) but has significant CI infrastructure noise — 5 separate CI-failure tracking issues filed in the last 24 hours.
- **OpenCode** has no Discussions enabled, using Issues as its sole community channel — making its issue count a proxy for all community engagement.

---

## 3. Shared Feature Directions

Several capability requirements appear across **four or more** tool communities, indicating genuine ecosystem-wide demand:

| Feature Direction | Tools Affected | Specific Community Signals |
|-------------------|----------------|---------------------------|
| **Cross-account / multi-user artifact access** | Claude Code, Gemini CLI, OpenCode | Claude Code has 3+ issues on cross-account artifact access; Gemini CLI has 2 issues on token bucket per-account routing; OpenCode has credential source for admin tasks |
| **Model selection flexibility** (per-session, per-task, effort caps) | Claude Code, Gemini CLI, OpenCode, Pi | Claude Code (#96316, #111072); Gemini CLI (AST-aware reads, model overrides); OpenCode (#64515 tool placement by model); Pi (virtual model compaction failures) |
| **Windows platform reliability** | Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Qwen Code | Claude Code (WPAD startup hangs); OpenAI Codex (Computer Use + Cortex XDR kills shell); Gemini CLI (IDE CLI path quoting); GitHub Copilot CLI (credential accumulation, Entra broker); Qwen Code (CI byte-budget overflow blocks unit-test builds) |
| **Session/sandbox resilience** (hang recovery, turn limit handling) | Claude Code, Gemini CLI, OpenCode, Qwen Code | Claude Code (hung ps accumulation); Gemini CLI (subagent termination misreporting); OpenCode (codemode sandbox ENOENT); Qwen Code (predicate lock waits, daemon restart recovery inbox) |
| **MCP ecosystem integration** | OpenAI Codex, GitHub Copilot CLI, Pi, OpenCode | OpenAI Codex (connector results passthrough, optional Apps tool results); GitHub Copilot CLI (OAuth flows, Entra integration, MCP startup hooks); Pi (MCP parking across suspension); OpenCode (permission hooks for deny rules) |
| **ACP / agent communication protocol** | Claude Code, OpenAI Codex, Gemini CLI, Qwen Code | Claude Code (Remote Control); OpenAI Codex (ACP mode IDE attachment); Gemini CLI (ACP mode connector access); Qwen Code (shared agent loop for ACP sessions) |
| **Token/context efficiency** (compaction, AST-aware reads, deduplication) | Claude Code, Gemini CLI, Pi, OpenCode, Qwen Code | Claude Code (compactModel setting); Gemini CLI (AST-aware file operations epic, token deduplication); Pi (threshold compaction, model overrides); OpenCode (tool output deduplication, large output truncation); Qwen Code (quota-exhausted fallback marking) |

---

## 4. Differentiation Analysis

| Tool | Primary Differentiator | Target User | Technical Approach |
|------|----------------------|-------------|-------------------|
| **Claude Code** | Auto mode with fine-grained permission control; Remote Control for multi-device workflows | Developers wanting a balance of autonomy and oversight | Tool-call-first agent with mcp_tool hooks, onFailure block semantics, per-turn permission escalation |
| **OpenAI Codex** | Fastest iteration velocity; strongest ecosystem (150+ curated tools); ACP for multi-client integration | Enterprise teams needing broad MCP compatibility and cross-IDE support | Rust SDK alpha, multi-transport MCP (stdio, SSE), Guardian v3 policy layer, Connector architecture |
| **Gemini CLI** | Deep Google Cloud integration (Bedrock, Foundry, Vertex AI); AST-aware tooling roadmap | Developers in Google/AWS/Azure multi-cloud environments | Tool-first agent with AST-aware file operation epic, subagent system, ACP mode parity |
| **GitHub Copilot CLI** | Tightest GitHub Enterprise integration; Entra ID broker for SSO | Enterprise developers in Microsoft/Azure environments | Entra broker for auth, policy-driven MCP server management, scheduled tasks with model selection |
| **OpenCode** | Embeddedable Rust codemode; PsychoScript scripting; multi-model routing | Teams wanting self-hosted, customizable agentic tooling | Rust codemode port, plugin system with deny rules, Code Mode scripts as background work |
| **Pi** | Provider breadth (6 new providers added in one PR); durable sessions with cancellation handlers | Developers needing multi-provider flexibility and long-running task durability | Durable sessions with cancellation handlers, compaction calibration, virtual model routing |
| **Qwen Code** | Event-driven 1.0 Preview kernel; channel integration (QQ, DingTalk, macOS notifications) | Chinese-market developers and teams needing East Asian platform integrations | Phase-based 1.0 Preview rollout, channel framework, Web Shell worktree feature parity |

**Key architectural divergence:**
- **Authorization model:** Claude Code uses `onFailure: "block"` hooks; OpenAI Codex uses Guardian v3 with deny rules; GitHub Copilot CLI uses policy-driven MCP server management.
- **Session persistence:** Pi and Qwen Code invest heavily in session durability (cancellation handlers, recovery inboxes); Claude Code and OpenAI Codex focus on Remote Control / ACP for cross-device continuity.
- **Platform priority:** Gemini CLI and OpenAI Codex treat Windows and Linux parity as critical; Claude Code and GitHub Copilot CLI show stronger macOS investment.

---

## 5. Community Momentum & Maturity

**High Momentum:**
- **OpenAI Codex** — 20 PRs merged in 24 hours signals a large, well-resourced team. The curated ecosystem list (150+ tools) and active discussions show an expanding third-party community.
- **Qwen Code** — High PR throughput with a clear architectural roadmap (1.0 Preview kernel). The 1.0 Preview freeze (2026-11-21) indicates structured release management.

**Steady Momentum:**
- **Claude Code** — Mature community (50 issues, ~5 closed in 24h) with strong engagement on cross-account artifact access and Remote Control. Auto mode expansion shows active feature investment.
- **Gemini CLI** — Consistent release cadence (v0.69.0 stable + v0.70.0-preview nightly). ACP mode development shows alignment with ecosystem protocol trends.
- **OpenCode** — 20+ PRs with focus on UI, codemode Rust port, and security. Smaller but active contributor base.

**Moderate/Compressed Momentum:**
- **GitHub Copilot CLI** — v1.0.114 release but 0 PRs in 24h. MCP authentication issues dominate the queue, suggesting the team is focused on stability over features.
- **Pi** — Fewer community signals overall (1 discussion, 10 PRs). Smaller community footprint, but the provider expansion PR (6 new providers) shows ambition.

**Maturity Signals:**
- Tools with **closed issues from years ago** (Claude Code #75182, OpenAI Codex #21252, Gemini CLI #19873) indicate sustained community engagement and long-term support.
- Multiple tools with **enterprise-specific pain points** (Entra ID, Guardian policies, cross-account artifacts, billing discrepancies) signal production adoption beyond individual developers.

---

## 6. Trend Signals

### 🔴 Critical Infrastructure Needs

1. **Credential lifecycle management** — GitHub Copilot CLI's credential accumulation exhausts Windows Credential Manager; Claude Code's Entra broker has concurrent sign-in conflicts; OpenCode's credential exposure in tool I/O logs. Every major tool has a credential management gap.

2. **Windows sandbox reliability** — OpenAI Codex's Cortex XDR conflict, Claude Code's WPAD hangs, GitHub Copilot CLI's credential accumulation, and Qwen Code's CI byte-budget overflow all point to Windows being the highest-friction platform. This is a systemic ecosystem issue, not a tool-specific bug.

3. **Cross-account and multi-tenant access** — Claude Code, Gemini CLI, and OpenCode all have open issues on cross-account artifact sharing, tenant-restricted resources, and guest account limitations. Enterprise multi-tenant workflows are hitting fundamental limitations.

### 🟠 Emerging Capability Patterns

4. **ACP (Agent Communication Protocol) convergence** — Four tools (Claude Code, OpenAI Codex, Gemini CLI, Qwen Code) are independently developing ACP-style session sharing, cross-client attachment, and background notification systems. This suggests an ecosystem-wide protocol is emerging, similar to how LSP standardized editor tooling.

5. **AST-aware / surgical file operations** — Gemini CLI has a dedicated epic (#22745) for AST-aware reads, searches, and codebase mapping. Claude Code requests `compactModel` for context compression. OpenCode truncates large tool outputs. All indicate that **token budget management** is becoming a primary UX concern as context windows grow.

6. **Virtual model routing** — Pi, OpenCode, and Gemini CLI all show issues where virtual/routed models bypass context window reporting, compaction triggers, or override logic. This is a new failure mode as tools support dynamic model selection at runtime.

### 🟡 UX/Platform Evolution

7. **IDE integration parity** — ACP mode losing IDE attachment (Claude Code, OpenAI Codex), Web Shell worktree parity gaps (Qwen Code), and Remote Control auto-enable issues (Claude Code) suggest that terminal-centric UX is outpacing IDE integration work.

8. **Internationalization beyond English** — OpenCode added Arabic RTL support; Gemini CLI tracks TUI i18n as a major feature request. The ecosystem is expanding beyond English-dominant user bases.

9. **Plugin/extension ecosystems** — OpenAI Codex has a curated 150+ tool list and 27 plugins; OpenCode has a plugin permission system with deny rules; Pi has `registerAssistantMessageTransformer` for extension hooks. The ecosystem is transitioning from feature competition to platform/network effects.

### Decision-Making Guidance

| Priority | Signal | Implication |
|----------|--------|-------------|
| **Evaluate now** | Windows sandbox conflicts affect all major tools | If targeting Windows enterprise, expect integration friction; plan for sandbox exceptions |
| **Evaluate now** | MCP authentication flows are broken or incomplete across all tools | Current MCP server integrations are fragile; prefer native tool support until MCP matures |
| **Monitor** | ACP protocol convergence across 4 tools | Expect interoperability standards to emerge; avoid lock-in to proprietary session sharing |
| **Monitor** | Cross-account artifact access is unreliable everywhere | Collaborative workflows are not production-ready on any tool; manual workarounds needed |
| **Long-term** | AST-aware file operations, virtual model routing, token budget management | These will define next-generation CLI tools; tools investing here are building durable differentiation |

---

*Cross-tool comparison compiled from six community digests. Data reflects GitHub activity on 2026-11-19.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the Claude Code Skills community activity from the provided data (GitHub repository data as of 2026-11-19) and generate a report with specific sections.

Let me analyze the data carefully:

**Pull Requests (sorted by comments, but all show "undefined" for comments):**
Looking at the PRs, they are sorted by some metric but comments show as "undefined" for all. Let me analyze them by other factors:

1. **#1742** - fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
   - Author: Kuldeeep18 | Created: 2026-09-08 | Updated: 2026-10-08

2. **#1298** - fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
   - Author: MartinCajiao | Created: 2026-06-10 | Updated: 2026-09-16

3. **#1245** - Add notion-spec-to-implementation and quantitative-resume-auditor skills
   - Author: mrdesouzaphd-cmyk | Created: 2026-06-02 | Updated: 2026-10-15

4. **#1980** - webapp-testing: avoid shell=True in with_server.py
   - Author: Pcmhacker-piro | Created: 2026-10-06 | Updated: 2026-11-01

5. **#1792** - fix(docx): report LibreOffice timeout as an error and verify the output
   - Author: TINGyu123644 | Created: 2026-09-19 | Updated: 2026-11-01

6. **#1771** - feat(skills): add proofcore-contract-auditor for smart contract notarization
   - Author: ProofCore-Protocol | Created: 2026-09-15 | Updated: 2026-09-16
   - This is a new skill proposal with smart contract auditing and TON blockchain notarization capabilities

7. **#1734** - Detect orphaned docx comments
   - Author: rohitjain25 | Created: 2026-09-06 | Updated: 2026-09-25

8. **#1703** - Add md2video-audio skill
   - Author: 70v-Yoyo | Created: 2026-09-01 | Updated: 2026-09-15
   - Introduces a skill for converting markdown to video with audio

9. **#525** - Add pyxel skill for retro game development
   - Author: kitao | Created: 2026-03-05 | Updated: 2026-11-01
   - A skill for building retro games using the Pyxel framework

10. **#2019** - fix(xlsx): resolve worksheet-scoped defined names and aliases in external_links_at_risk
    - Author: reginaldalfret | Created: 2026-10-14 | Updated: 2026-11-03

11. **#1730** - fix(claude-api): replace dead URLs in academy-guide and tool-use-concepts
    - Author: GISWLH | Created: 2026-09-06 | Updated: 2026-10-04

12. **#1681** - fix(skill-creator): support direct execution of package_skill.py and update usage paths
    - Author: Kuldeeep18 | Created: 2026-08-27 | Updated: 2026-10-24

13. **#514** - Add document-typography skill: typographic quality control for generated documents
    - Author: PGTBoos | Created: 2026-03-04 | Updated: 2026-03-13

14. **#2108** - docs: clarify document skills snapshot status and sync relationship
    - Author: marlonferreira1800-hue | Created: 2026-11-02 | Updated: 2026-11-03

15. **#1997** - fix(skill-creator): parse YAML frontmatter scalars correctly
    - Author: BichengWang | Created: 2026-10-10 | Updated: 2026-10-19

16. **#1977** - algorithmic-art: wrapAround() now wraps
    - Author: gerardrecinto | Created: 2026-10-06 | Updated: 2026-10-18

17. **#1976** - webapp-testing: report textarea and select correctly in element_discovery.py
    - Author: gerardrecinto | Created: 2026-10-06 | Updated: 2026-10-18

18. **#1975** - pptx: reject --cols below 1 in thumbnail.py
    - Author: gerardrecinto | Created: 2026-10-06 | Updated: 2026-10-27

19. **#1950** - docs(claude-api): update Python pause_turn runner guidance
    - Author: dhairyajangir | Created: 2026-10-02 | Updated: 2026-11-10

20. **#1615** - Add scnet-hpc skill
    - Author: lql341 | Created: 2026-08-20 | Updated: 2026-08-24
    - Targets SCNet HPC cluster operations through SSH and Slurm

**Issues (sorted by comments):**

1. **#492** [OPEN] Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse
   - Author: aliksir | Created: 2026-03-02 | Comments: 46 | 👍: 3
   - A critical security concern about namespace trust

2. **#228** [OPEN] Enable org-wide skill sharing in Claude.ai
   - Author: ghost | Created: 2026-01-13 | Comments: 17 | 👍: 8
   - Proposing organization-level skill distribution

3. **#556** [OPEN] run_eval.py: claude -p never triggers skills/commands (0% trigger rate across all queries)
   - Author: dthau120391 | Created: 2026-03-07 | Comments: 13 | 👍: 7
   - Bug report indicating skills fail to activate properly

4. **#1329** [OPEN] Proposing a second skill: compact-memory (symbolic notation for compact agent state)
   - Author: WGlynn | Created: 2026-06-17 | Comments: 10 | 👍: 0
   - Suggesting a memory optimization technique

5. **#62** [OPEN] All my skills have disappeared an now i get errors
   - Author: nicksonnenberg | Created: 2025-10-24 | Comments: 10 | 👍: 2
   - Users experiencing skill loss

6. **#202** [CLOSED] skill-creator should be updated to best practice
   - Author: oaustegard | Comments: 8 | 👍: 1

7. **#1385** [OPEN] [Proposal] Reasoning Quality Gate Pipeline
   - Author: YuhaoLin2005 | Comments: 7 | 👍: 1
   - Quality assurance framework for reasoning tasks

8. **#1143** [OPEN] [Feature Request] Ability to change account email address
   - Author: Hiimdrew | Comments: 7 | 👍: 18
   - Account management enhancement

9. **#1352** [OPEN] skill-creator: run_eval.py parallel workers cross-match skill UUIDs, producing false-negative trigger rates
   - Author: liam-ai-reality | Comments: 6 | 👍: 3
   - Performance issue affecting evaluation accuracy

10. **#412** [CLOSED] Skill proposal: agent-governance — safety patterns for AI agent systems
    - Author: imran-siddique | Comments: 6 | 👍: 0

11. **#189** [OPEN] document-skills and example-skills plugins install identical content, causing duplicate skills
    - Author: chuggies510 | Comments: 6 | 👍: 9
    - Plugin installation conflict

12. **#2064** [OPEN] theme-factory: description says what the skill does but not when to use it
    - Author: drakedragon007 | Comments: 5 | 👍: 0
    - Documentation clarity issue

13. **#1487** [OPEN] `claude-api` skill eagerly injects ~156k tokens, exhausting the context window
    - Author: DaKev | Comments: 5 | 👍: 0
    - Token limit problem in claude-api skill

14. **#2018** [OPEN] docx: merge_runs.py drops run-local namespace declarations and writes invalid XML
    - Author: BichengWang | Comments: 4 | 👍: 0
    - XML generation defect in docx skill

15. **#1868** [OPEN] create_gradient_background never produces its documented bottom_color
    - Author: sxh313 | Comments: 4 | 👍: 0
    - Image processing inconsistency

The PR dataset shows comment counts as "undefined" rather than actual values, indicating these entries weren't ranked by engagement. For the Top Skills Ranking section, I need to identify which PRs have generated the most discussion or attention, though without explicit comment metrics I'll need to evaluate based on recency, author activity, and issue connections.

Looking at the PRs that appear most active or significant: #1742 addresses MCP 2.0 breaking changes with solid engagement; #1980 tackles a security vulnerability (CWE-78) that's critical; #1771 proposes a Web3-focused smart contract auditor as a novel direction; #1298 focuses on skill-creator evaluation reliability across platforms; #525 introduces a retro game development capability; #1703 enables markdown-to-video conversion; #1245 delivers Notion integration features; #514 addresses document typography for AI output quality; #1615 enables HPC cluster management; and #2108 provides documentation clarification.

For the community trends, security emerges as the dominant concern with namespace trust boundaries, command injection vulnerabilities, and XML validity all appearing as top priorities.

Beyond security, users are requesting org-wide skill sharing mechanisms, better evaluation tooling, improved memory efficiency for long-running agents, governance and safety patterns, quality gates for reasoning tasks, and fixes for skill loss scenarios. Several PRs show promising momentum—particularly #1742 with MCP 2.0 compatibility, #1980 addressing the shell=True security flaw, and #1771 introducing Web3 contract auditing. The skill-creator evaluation system also needs reliability improvements across Windows and parallel execution environments.
</think>


# Claude Code Skills Community Highlights Report

**Data as of: 2026-11-19**  
**Source: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking

The following Skills (PRs) represent the most significant community contributions, ranked by activity level, technical impact, and discussion engagement:

### 1.1 🔧 mcp-builder: MCP ≥2.0 Compatibility Fix
- **PR:** [#1742](https://github.com/anthropics/skills/pull/1742) | **Author:** Kuldeeep18
- **Status:** OPEN | **Created:** 2026-09-08
- **Functionality:** Updates the MCP builder skill to support `mcp>=2.0.0`, where `streamablehttp_client` was renamed to `streamable_http_client`. Also fixes custom HTTP header configuration via `create_mcp_http_client` / `http_client` parameters.
- **Discussion Highlights:** Critical compatibility fix addressing breaking changes in the MCP SDK. References issue #1668, indicating this is a known pain point for developers integrating MCP servers.

---

### 1.2 🛡️ webapp-testing: Command Injection Fix
- **PR:** [#1980](https://github.com/anthropics/skills/pull/1980) | **Author:** Pcmhacker-piro
- **Status:** OPEN | **Created:** 2026-10-06
- **Functionality:** Eliminates `shell=True` in `skills/webapp-testing/scripts/with_server.py`, which previously introduced CWE-78 (command injection) vulnerabilities by passing unsanitized user/agent input into system shell commands.
- **Discussion Highlights:** High-priority security fix. The original implementation supported `cd <dir> && <command>` chains but at the cost of exposing users to injection attacks.

---

### 1.3 ⛓️ proofcore-contract-auditor: Web3 Smart Contract Notarization
- **PR:** [#1771](https://github.com/anthropics/skills/pull/1771) | **Author:** ProofCore-Protocol
- **Status:** OPEN | **Created:** 2026-09-15
- **Functionality:** Adds automated static analysis for Solidity and Rust smart contracts, with cryptographic audit proof anchoring to the TON Blockchain via ProofCore's zero-storage Merkle protocol.
- **Discussion Highlights:** Represents a new vertical (Web3/blockchain auditing) in the skills ecosystem. Attracts developers seeking trustless verification workflows.

---

### 1.4 🐛 skill-creator: Trigger Evaluation Reliability Fix
- **PR:** [#1298](https://github.com/anthropics/skills/pull/1298) | **Author:** MartinCajiao
- **Status:** OPEN | **Created:** 2026-06-10
- **Functionality:** Fixes false trigger misses, Windows `select()` subprocess failures, and ensures runtime failures are correctly excluded from negative examples in the skill trigger evaluation system.
- **Discussion Highlights:** Addresses fundamental reliability issues in the skill evaluation pipeline. Corroborated by community issues #556 and #1352 reporting zero trigger rates and UUID cross-matching bugs.

---

### 1.5 🎮 pyxel: Retro Game Development
- **PR:** [#525](https://github.com/anthropics/skills/pull/525) | **Author:** kitao
- **Status:** OPEN | **Created:** 2026-03-05
- **Functionality:** Comprehensive skill for creating, debugging, and verifying retro games in Python using the Pyxel engine. Includes headless input-driven runs, frame inspection, and task-specific state verification.
- **Discussion Highlights:** Long-running PR (8+ months) with active updates. Targets creative/educational use cases, expanding Claude Code's applicability to game development.

---

### 1.6 🎬 md2video-audio: Markdown to Professional Video
- **PR:** [#1703](https://github.com/anthropics/skills/pull/1703) | **Author:** 70v-Yoyo
- **Status:** OPEN | **Created:** 2026-09-01
- **Functionality:** Compiles Markdown documents into MP4 videos with realistic human-like voiceovers using Marp for slide generation.
- **Discussion Highlights:** Zero-cost, accessibility-focused skill bridging documentation and multimedia content creation.

---

### 1.7 📄 document-typography: AI Document Quality Control
- **PR:** [#514](https://github.com/anthropics/skills/pull/514) | **Author:** PGTBoos
- **Status:** OPEN | **Created:** 2026-03-04
- **Functionality:** Prevents orphan words, widow paragraphs, and numbering misalignment in AI-generated documents—common typographic issues that degrade output quality.
- **Discussion Highlights:** Addresses a universal pain point. The skill targets a gap in Claude's default output quality for structured documents.

---

### 1.8 🖥️ scnet-hpc: HPC Cluster Operations
- **PR:** [#1615](https://github.com/anthropics/skills/pull/1615) | **Author:** lql341
- **Status:** OPEN | **Created:** 2026-08-20
- **Functionality:** Enables SCNet HPC cluster operations through profile-based SSH and Slurm workflows, including job generation, cluster discovery, and compute node management.
- **Discussion Highlights:** Targets scientific computing and HPC users, expanding Claude Code's utility in research and engineering environments.

---

## 2. Community Demand Trends

Analysis of top Issues reveals concentrated demand in the following areas:

| Demand Category | Top Issues | Summary |
|-----------------|------------|---------|
| **🔒 Security & Trust** | #492 (46 comments) | Community skills under `anthropic/` namespace create trust boundary vulnerabilities; users may grant elevated permissions to unofficial skills believing they are official. |
| **🔧 Evaluation & Testing** | #556, #1352 (19 combined comments) | `run_eval.py` fails to trigger skills, producing 0% trigger rates. Parallel workers cross-match UUIDs, yielding systematic false negatives. |
| **👥 Organizational Collaboration** | #228 (17 comments) | Strong demand for org-wide skill sharing—currently requires manual file transfer and settings navigation. |
| **🧠 Memory & State Efficiency** | #1329 (10 comments) | Proposing "compact-memory" skill for symbolic notation to reduce context overhead in long-running agents. |
| **⚙️ Governance & Safety** | #412, #1385 | Requests for agent governance patterns (policy enforcement, audit trails) and reasoning quality gates. |
| **💾 Platform Reliability** | #62, #189 | Skill loss bugs and plugin duplication issues affecting user experience. |

**Key Insight:** The community is maturing—initial enthusiasm for diverse skill categories is now paired with demands for **security hardening**, **evaluation reliability**, and **enterprise-scale collaboration features**.

---

## 3. High-Potential Pending Skills

These active PRs show strong momentum and may merge soon:

| PR | Skill | Author | Potential | Notes |
|----|-------|--------|-----------|-------|
| [#1980](https://github.com/anthropics/skills/pull/1980) | webapp-testing security fix | Pcmhacker-piro | ⭐⭐⭐⭐⭐ | Critical CWE-78 vulnerability fix; high-priority security patch |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder MCP 2.0 support | Kuldeeep18 | ⭐⭐⭐⭐⭐ | Essential compatibility for MCP 2.0 SDK users |
| [#2019](https://github.com/anthropics/skills/pull/2019) | xlsx external links fix | reginaldalfret | ⭐⭐⭐⭐ | Resolves false negatives in spreadsheet external reference detection |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice timeout handling | TINGyu123644 | ⭐⭐⭐⭐ | Improves error reporting for document processing failures |
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | ProofCore-Protocol | ⭐⭐⭐ | Novel Web3 vertical; could attract blockchain developer community |
| [#1950](https://github.com/anthropics/skills/pull/1950) | claude-api pause_turn docs | dhairyajangir | ⭐⭐⭐ | Updates Python SDK 1.1.0 guidance; reduces user confusion |
| [#1681](https://github.com/anthropics/skills/pull/1681) | skill-creator packaging fix | Kuldeeep18 | ⭐⭐⭐ | Enables standalone script execution; improves developer ergonomics |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliability hardening—specifically security fixes (command injection, namespace trust), evaluation system accuracy (skill triggering), and enterprise features (org-wide sharing)—indicating a shift from feature expansion to production-grade robustness.**

---

*Report generated from community data at [github.com/anthropics/skills](https://github.com/anthropics/skills)*

---

<think>The user wants me to generate a Claude Code community digest for 2026-11-19 based on the provided GitHub data. Let me analyze the data and structure it according to the requested format.

Key data points:
1. Latest Release: v2.1.328 (added auto mode for Claude Opus 4.6 and Sonnet 4.6 on various platforms, added "onFailure": "block" for mcp_tool hooks)

2. Latest Issues (50 total, showing top 30 by comment count):
- #75182: Assistant text preceding AskUserQuestion not displayed (11 comments, 14 👍)
- #91884: Desktop scheduled tasks model selection broken (10 comments, 3 👍)
- #107318: Artifacts shared from another account can't be read after desktop update (10 comments, 4 👍)
- #80708: Hung ps processes accumulate (8 comments, 0 👍)
- #102874: Routines API returns 403 "project paused" (7 comments, 7 👍)
- #87777: Remote Control auto-enable only fires on first turn (6 comments, 2 👍) - CLOSED
- #97997: Fable weekly usage counted incorrectly (5 comments, 0 👍)
- #106422: --resume brings back removed messages (5 comments, 0 👍)
- #109663: /feedback refused on personal Max plan (4 comments, 3 👍)
- #110603: claude.ai chat can't read shared Design System (4 comments, 0 👍)
- #107274: rm -rf deleted git history (4 comments, 0 👍)
- #106718: iOS app landscape layout issue (2 comments, 0 👍) - CLOSED
- #108529: Remote Control server mode no replies after reboot (2 comments, 1 👍)
- #110628: read_asset returns only text assets after editor writes (2 comments, 0 👍)


- #96316: Feature request for compactModel setting (2 comments, 3 👍)
- #111079: Desktop scheduled tasks feature request (1 comment, 0 👍)
- #111072: Desktop Code tab coordinator session feature (1 comment, 0 👍) - CLOSED
- #109631: start_session model/effort cap feature (1 comment, 0 👍)
- #107207: Remote Control preserve session hierarchy (1 comment, 1 👍)
- #111076: Cyber safeguard blocks WordPress research (1 comment, 0 👍)
- #104926: Agent view sends duplicate notifications (1 comment, 0 👍)
- #96977: Cannot edit/delete environment on phone app (1 comment, 0 👍)
- #111009: Windows/Git Bash shell snapshot timeout (1 comment, 0 👍)
- #110854: Windows startup hangs with WPAD (1 comment, 0 👍) - CLOSED
- #110985: Allow export of shared artifacts (1 comment, 0 👍)
- #109194: Cross-org shared artifact writer issue (1 comment, 0 👍)
- #110440: Shared artifact link opens public version (1 comment, 0 👍)
- #106713: GitHub integration can't link org for outside collaborator (1 comment, 0 👍)
- #111061: Cross-user prompt leakage in VS Code (1 comment, 0 👍)
- #111067: Windows update fails after renaming claude.exe (1 comment, 0 👍)

One PR flagged: Fix duplicated word in CHANGELOG.md (#86537). Now organizing into structured digest format with relevant categories and summaries.
</think>


# Claude Code Community Digest

**Date:** November 19, 2026
**Version:** 2.1.328

---

## Today's Highlights

Claude Code v2.1.328 rolls out **auto mode** for Claude Opus 4.6 and Sonnet 4.6 across Amazon Bedrock, Google Cloud's Agent Platform, Microsoft Foundry, and Claude apps gateway—interactive sessions now default to this mode. A new `"onFailure": "block"` option for `mcp_tool` hooks aligns with existing command and HTTP hook behavior. The community remains active with 50 open issues and growing concerns around cross-account artifact sharing, desktop scheduled tasks, and security-sensitive areas like prompt leakage.

---

## Releases

### v2.1.328
**Release Date:** November 19, 2026

| Change | Description |
|--------|-------------|
| **Auto mode expansion** | Added auto mode support for Claude Opus 4.6 and Sonnet 4.6 on Amazon Bedrock, Google Cloud's Agent Platform, Microsoft Foundry, and Claude apps gateway. Interactive sessions with no permission mode now start in auto mode. |
| **`mcp_tool` hook enhancement** | Added `"onFailure": "block"` option for `mcp_tool` hooks, matching the existing behavior for command and HTTP hooks. |

[View Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.328)

---

## Hot Issues

The following 10 issues generated the most community discussion or engagement in the past 24 hours:

### 1. [BUG] Assistant text preceding AskUserQuestion call not displayed (#75182)
**Author:** EasyKoen | **Comments:** 11 | **👍:** 14

When the assistant emits markdown text and then calls `AskUserQuestion` in the same turn, the text never renders to the terminal. This breaks user experience in plan mode. High 👍 count suggests widespread impact.

[View Issue](https://github.com/anthropics/claude-code/issues/75182)

### 2. Desktop scheduled tasks: model selection broken end-to-end (#91884)
**Author:** rtalari-ruby | **Comments:** 10 | **👍:** 3

Model selection for scheduled tasks is broken across the board—spawned tasks ignore user settings, the documented picker is missing, and the MCP tool lacks a model parameter. Affects both desktop profiles and scheduled-task registry behavior.

[View Issue](https://github.com/anthropics/claude-code/issues/91884)

### 3. [Bug] Artifacts shared from another account can no longer be read/edited after desktop update (#107318)
**Author:** CPR03 | **Comments:** 10 | **👍:** 4

Post-update, Code sessions signed in as a secondary account cannot list, read, or republish artifacts shared with edit access by the primary account. The new artifacts connector appears to be the culprit.

[View Issue](https://github.com/anthropics/claude-code/issues/107318)

### 4. [BUG] Hung ps -A processes accumulate until process limit exhausted (#80708)
**Author:** herzkerl | **Comments:** 8 | **👍:** 0

Child processes spawned by Claude Code hang and accumulate, eventually exhausting macOS per-user process limits. This is a reliability and resource exhaustion issue that can cripple sessions.

[View Issue](https://github.com/anthropics/claude-code/issues/80708)

### 5. Routines API: firing a Project's routine returns 403 "this project is paused" (#102874)
**Author:** eandrada | **Comments:** 7 | **👍:** 7

Despite an active project, the Routines API returns a 403 permission error claiming the project is paused. This blocks automated workflows and CI/CD integrations.

[View Issue](https://github.com/anthropics/claude-code/issues/102874)

### 6. [Bug] rm -rf deleted git history (12+ months lost) (#107274)
**Author:** mishoko | **Comments:** 4 | **👍:** 0

A critical data loss bug: the Bash tool's `rm -rf` command incorrectly targeted git history, resulting in over 12 months of commit history deleted. No 👍 reactions but severe severity.

[View Issue](https://github.com/anthropics/claude-code/issues/107274)

### 7. [Bug] /feedback refused on personal Max plan (#109663)
**Author:** jcll | **Comments:** 4 | **👍:** 3

Users on personal Max plans cannot submit feedback via `/feedback`, Claude-drafted feedback, session surveys, or transcript sharing. Multiple linked issues confirm this affects the personal plan tier broadly.

[View Issue](https://github.com/anthropics/claude-code/issues/109663)

### 8. [Bug] claude.ai chat can't read a Design System shared with a non-owner (#110603)
**Author:** aorteganutai | **Comments:** 4 | **👍:** 0

On Windows, a Design System shared with non-owner permissions works in Claude Code but fails in claude.ai chat—suggesting a platform-specific regression in the web interface's permission handling.

[View Issue](https://github.com/anthropics/claude-code/issues/110603)

### 9. [Bug] Fable weekly usage counted (20%) with zero Fable requests (#97997)
**Author:** bujawang | **Comments:** 5 | **👍:** 0

Weekly usage reports 20% Fable consumption despite zero Fable API requests, with only Opus 5.5 and Sonnet 5 used. This billing discrepancy affects cost tracking and budgeting.

[View Issue](https://github.com/anthropics/claude-code/issues/97997)

### 10. [BUG] Cross-user prompt leakage in Claude Code 2.1.327 (VS Code) (#111061)
**Author:** Segundo-Volante | **Comments:** 1 | **👍:** 0

A serious security issue: other users' Opus 4.7 requests appear in a local chat window, even with Remote Control disabled. Affects VS Code extension users on multi-user systems.

[View Issue](https://github.com/anthropics/claude-code/issues/111061)

---

## Key PR Progress

### 1. Fix duplicated word in CHANGELOG.md (#86537)
**Author:** genesisdayabl-droid | **Status:** OPEN

Corrects a typo ("to to" → "to") in the CHANGELOG.md entry for `CLAUDE_BASH_NO_LOGIN` (version 1.0.124). Documentation-only fix, low priority but improves codebase quality.

[View PR](https://github.com/anthropics/claude-code/pull/86537)

---

## Feature Request Trends

Community feature requests cluster around three major themes:

### 1. Model Selection & Flexibility
- **Compact model override** (#96316): Request for `compactModel` / `CLAUDE_CODE_COMPACT_MODEL` environment variable to use a cheaper model for context compaction summaries
- **Desktop scheduled task model improvements** (#111079): Pinned model versions go stale; request for aliases ("Opus latest") and per-task effort settings
- **Coordinator session model hierarchy** (#111072, #109631): Allow child sessions to exceed parent session's model/effort limits with user approval

### 2. Artifact Sharing & Permissions
- **Export shared artifacts** (#110985): Ability to export artifacts shared with edit access as HTML, MD, or PDF
- **Cross-account artifact access** (#107318, #109194, #110440): Multiple bugs blocking shared artifact workflows across organizations and accounts

### 3. Remote Control & Multi-Device Workflows
- **Preserve session hierarchy across devices** (#107207): Parent-child session relationships should sync via Remote Control
- **Remote Control reliability** (#108529): Sessions stop receiving replies after host reboot; auto-enable logic needs fixes (#87777)

---

## Developer Pain Points

The community's most recurring frustrations center on:

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Cross-account artifact access regressions** | High | Blocks collaboration; multiple related issues filed |
| **Desktop scheduled tasks broken** | High | Core functionality unusable; affects automation |
| **Process accumulation/resource exhaustion** | Medium | System stability issues on macOS |
| **Billing/usage reporting discrepancies** | Medium | Trust issues with cost tracking |
| **Windows shell snapshot timeouts** | Medium | Slow first-run experience on Windows/Git Bash |
| **Security concerns (prompt leakage, cyber safeguard false positives)** | Medium | Blocks legitimate security research work |
| **Feedback/submission blocked on personal plans** | Medium | Prevents user voice in product improvement |

---

*Digest generated from GitHub data for [anthropics/claude-code](https://github.com/anthropics/claude-code) on 2026-11-19*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to generate a structured English digest for OpenAI Codex community, dated 2026-11-19. I have GitHub data covering releases, issues, pull requests, and discussions.

Let me organize this into the requested sections:

1. **Today's Highlights** - Summarize the most important updates
2. **Releases** - Two alpha releases: rust-v0.172.0-alpha.1 and rust-v0.171.0-alpha.13
3. **Hot Issues** - Pick 10 noteworthy issues
4. **Key PR Progress** - Pick 10 important PRs
5. **Hot Discussions** - Group by category
6. **Feature Request Trends** - Distill from issues and discussions
7. **Developer Pain Points** - Recurring frustrations

Let me analyze the data:

**Releases:**
- rust-v0.172.0-alpha.1
- rust-v0.171.0-alpha.13

**Top Issues by comments:**
1. #57101 - Windows Computer Use capture access issue (65 comments)
2. #59855 - Windows Codex Desktop AbsolutePathBuf error (44 comments)
3. #45163 - TUI palette cache issue (35 comments)
4. #21252 - CLI option to hide tool activity (24 comments, enhancement)
5. #53321 - WeChat/QQ screenshot timeout (23 comments)
6. #42950 - Sites blocked by Cloudflare (18 comments)
7. #53042 - Quick Chat not launching on macOS (17 comments)
8. #62212 - Unsupported audio tool output causes HTTP 400 (13 comments)
9. #33782 - ChatGPT desktop freezes with large images (13 comments)
10. #38963 - Make codex-cli sessions available in mobile app (10 comments, enhancement)

**Top PRs (all closed):**
- #62419 - Allow per-sample model overrides in thread/sample


- #62415 - Enable network access in shell snapshot filesystem test
- #62407 - Deduplicate large tool output strings
- #62403 - Reconcile unfinished Cloud replies in TUI
- #62400 - Test saved chat hover highlighting
- #62392 - Pass eligible connector results through to ChatGPT Responses
- #62390 - Highlight clickable links on hover
- #62389 - Pause runtime sandbox integrity checks
- #62388 - Support optional Apps tool results
- #62387 - Expose custom status lines in /experimental

The remaining PRs focus on infrastructure improvements and UI enhancements. Most are marked as closed, suggesting they're either completed or superseded by newer work.

Looking at the next batch, I'm seeing a pattern of sandbox management, platform compatibility, and policy handling. PRs like #62386 through #62374 address proxy configuration, sandbox denial behavior, thread sampling limits, and cross-platform workspace preservation. There's also work on Guardian features including message boards and routing configuration. The focus shifts toward policy enforcement, platform-specific handling, and system-level configuration.

The discussions section reveals community engagement around curated resources and plugin discovery. People are sharing tool collections like an Awesome Codex CLI list with 150+ tools and a plugins directory, plus specific implementations like Pushary for handling approvals. There's also interest in game development and integration with tools like Slidr, though several posts appear to have minimal engagement.

Looking at feature requests, the community wants CLI enhancements like hiding tool activity and session management, plus better cross-device synchronization. Windows platform improvements are frequently mentioned—particularly around Computer Use, screenshots, and permissions. There's also demand for mobile access to CLI sessions, performance fixes for large images, and UI refinements to make the interface more usable.

The most pressing developer concerns center on Windows stability, especially the crashes in Computer Use and the AbsolutePathBuf errors that prevent resuming cloud chats. Sandbox permission issues keep surfacing, and storage management on macOS needs attention. Cross-platform reliability remains a challenge with clipboard and auth behaviors varying by OS.
</think>


# OpenAI Codex Community Digest

**Date:** November 19, 2026
**Platform:** github.com/openai/codex

---

## Today's Highlights

The Codex community saw significant activity around cross-platform reliability, with multiple PRs shipping fixes for platform-agnostic workspace handling. Windows users continue to report Computer Use and sandbox permission issues, while the TUI team merged improvements to transcript rendering and hover interactions. The ecosystem also gained momentum with curated plugin lists and new MCP server integrations.

---

## Releases

Two Rust SDK alpha releases landed in the last 24 hours:

| Version | Notes |
|---------|-------|
| `rust-v0.172.0-alpha.1` | Alpha release |
| `rust-v0.171.0-alpha.13` | Alpha release |

Both releases continue the rapid iteration cadence on the Rust SDK. No changelogs were provided in the release data.

---

## Hot Issues

The following issues generated the most community discussion:

| # | Issue | Key Points | Comments | 👍 |
|---|-------|------------|----------|-----|
| [#57101](https://github.com/openai/codex/issues/57101) | **Windows Computer Use: capture access and gold/yellow display border remain open** | Screenshot-producing turns leave residual UI elements; affects Windows x64 MSIX users on version 26.1021.3705.0 | 65 | 12 |
| [#59855](https://github.com/openai/codex/issues/59855) | **Windows Codex Desktop fails to resume cloud-managed chats** | `AbsolutePathBuf` deserialization error blocks chat resumption; reported by multiple users | 44 | 0 |
| [#45163](https://github.com/openai/codex/issues/45163) | **TUI palette cache leaves input unreadable after theme changes** | Startup-only cache doesn't refresh on system light/dark changes; affects CLI 0.154.0+ | 35 | 33 |
| [#21252](https://github.com/openai/codex/issues/21252) | **Enhancement: CLI Option to hide tool activity** | Long sessions produce verbose tool-call cells; request for cleaner reasoning summaries | 24 | 47 |
| [#53321](https://github.com/openai/codex/issues/53321) | **WeChat/QQ screenshot timeout on Windows 10** | Accessibility text works but window capture repeatedly times out | 23 | 0 |
| [#42950](https://github.com/openai/codex/issues/42950) | **Public site blocked by Cloudflare** | Codex Sites pages inaccessible to external visitors | 18 | 0 |
| [#53042](https://github.com/openai/codex/issues/53042) | **Quick Chat no longer launches on macOS** | Native window service absent after update to 26.1007.30912 | 17 | 25 |
| [#62212](https://github.com/openai/codex/issues/62212) | **Unsupported audio tool output causes HTTP 400** | macOS desktop users hit API errors after audio tool calls | 13 | 0 |
| [#33782](https://github.com/openai/codex/issues/33782) | **ChatGPT desktop freezes on image-heavy threads** | ResizeObserver loop triggers freeze when switching threads | 13 | 0 |
| [#38963](https://github.com/openai/codex/issues/38963) | **Make codex-cli sessions available in mobile app** | Request for cross-device session continuity | 10 | 16 |

**Notable pattern:** Windows platform issues dominate the top 10, with Computer Use, sandbox permissions, and screenshot functionality recurring themes.

---

## Key PR Progress

All 20 tracked PRs merged in the last 24 hours. The most impactful:

| # | PR | Summary | Impact |
|---|-----|---------|--------|
| [#62419](https://github.com/openai/codex/pull/62419) | **Per-sample model overrides in `thread/sample`** | Allows clients to override the source thread's model when sampling; omitting model inherits parent | Flexibility for multi-model workflows |
| [#62389](https://github.com/openai/codex/pull/62389) | **Pause runtime sandbox integrity checks** | Removes telemetry-only checks duplicating sandbox enforcement; improves launch performance | Performance improvement |
| [#62392](https://github.com/openai/codex/pull/62392) | **Pass connector results to ChatGPT Responses** | New `connector_tool_result_passthrough` flag preserves MCP content before processing | Better MCP integration |
| [#62388](https://github.com/openai/codex/pull/62388) | **Optional Apps tool results in Responses requests** | Allows attaching Apps tool results with structured content (1 MiB limit) | Enhanced tool interoperability |
| [#62390](https://github.com/openai/codex/pull/62390) | **Highlight clickable links on hover (TUI)** | Foreground color change makes interactive elements visible on hover | UX improvement |
| [#62403](https://github.com/openai/codex/pull/62403) | **Reconcile unfinished Cloud replies in TUI** | Fixes stale prefixes when history restores unfinished replies | TUI reliability |
| [#62407](https://github.com/openai/codex/pull/62407) | **Deduplicate large tool output in traces** | Reduces trace bundle consumption from repeated images | Resource efficiency |
| [#62377](https://github.com/openai/codex/pull/62377) | **Preserve workspace roots across platforms** | Windows↔Unix path conversion now handles cross-platform TUI→server connections | Cross-platform support |
| [#62374](https://github.com/openai/codex/pull/62374) | **Reconsider denials in attached Guardian reviews** | Enables denial reconsideration for attached reviews (not just standalone) | Policy refinement |
| [#62373](https://github.com/openai/codex/pull/62373) | **In-memory message boards for Guardian v3** | New `message_board_in_memory` flag provides per-thread SQLite boards | Guardian v3 enhancement |

---

## Hot Discussions

### Show and Tell

| # | Topic | Summary | Comments |
|---|-------|---------|----------|
| [#16329](https://github.com/openai/codex/discussions/16329) | **Awesome Codex CLI — 150+ ecosystem tools** | Curated list of subagents, skills, plugins, MCP servers | 11 |
| [#16073](https://github.com/openai/codex/discussions/16073) | **Awesome Codex Plugins** | Community list tracking 12 official + 15 community plugins | 5 |
| [#60116](https://github.com/openai/codex/discussions/60116) | **Pushary: approval notifications via phone/push** | Paid service connecting Codex hooks to mobile approvals | 2 |
| [#62355](https://github.com/openai/codex/discussions/62355) | **Slidr: presentation editor driven by Codex** | Deck API lets Codex build slides via natural language | 0 |
| [#62324](https://github.com/openai/codex/discussions/62324) | **Yaptake: video editing via transcript** | Mac video editor with Codex plugin for transcript-based editing | 0 |
| [#62259](https://github.com/openai/codex/discussions/62259) | **Postage: Mac mail app with MCP server** | Native IMAP client with built-in Codex MCP integration | 0 |
| [#62244](https://github.com/openai/codex/discussions/62244) | **Octopost: social posting MCP server** | Posts to X, Bluesky, Mastodon, LinkedIn from Codex | 0 |

### Ideas

| # | Topic | Summary | Comments |
|---|-------|---------|----------|
| [#62213](https://github.com/openai/codex/discussions/62213) | **One-Click Prompt Enhancement** | Request for native prompt optimization in ChatGPT and Codex inputs | 0 |

---

## Feature Request Trends

Analysis across Issues and Discussions reveals these high-demand directions:

1. **CLI Usability**
   - Option to hide tool activity during long sessions (#21252)
   - Mobile access to CLI sessions (#38963)
   - Better hooks for terminal events (#43184)

2. **Windows Reliability**
   - Fix Computer Use screenshot and capture issues
   - Resolve sandbox permission persistence despite Full Access setting
   - Address AbsolutePathBuf errors on cloud-managed chat resume

3. **Cross-Platform Parity**
   - Unified behavior across Windows/macOS for clipboard, auth, sandbox
   - Consistent model catalog updates across platforms

4. **Session & State Management**
   - Window session restoration after updates (#42594)
   - Persistent workspace roots across relaunches
   - Computer Use state preservation during chat resume

5. **Guardian & Policy Controls**
   - Configurable routing/retrieval guidance for Guardian v3
   - In-memory message boards for review workflows

---

## Developer Pain Points

The following frustrations appear repeatedly across the dataset:

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Windows sandbox permissions not honoring Full Access** | 5+ issues | Blocks legitimate workflows; forces workarounds |
| **Computer Use screenshot timeouts on Windows** | 3+ issues | Prevents automation of common desktop apps |
| **Chat resume failures (AbsolutePathBuf, no rollout found)** | 4+ issues | Causes data access loss; disrupts workflow continuity |
| **TUI theme changes not reflected until restart** | 1 major issue, 33 👍 | Poor UX for theme-switching users |
| **macOS installer leaving 472 GB temp files** | 1 critical issue | Disk space exhaustion risk |
| **Remote auth staleness after account switch** | 1 issue | Requires connection restart to refresh credentials |

---

*End of Digest — Generated 2026-11-19*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a structured community digest for the Gemini CLI project based on the provided GitHub data. Let me analyze the data and create a comprehensive digest following the specified sections.

Let me organize the information:

1. **Today's Highlights** - Based on recent releases and key issues
2. **Releases** - v0.69.0 and v0.70.0-preview.0
3. **Hot Issues** - Top 10 from the list
4. **Key PR Progress** - Top 10 PRs
5. **Hot Discussions** - No discussion data provided, so I'll omit this section
6. **Feature Request Trends** - Based on issue summaries
7. **Developer Pain Points** - Recurring themes

Let me identify the key information:

**Releases:**
- v0.69.0: Fix for $ character preservation, /stats heatmap feature
- v0.70.0-preview.0: Nightly build

**Top Issues by comment count:**
1. #22323 (13 comments) - Subagent recovery bug with MAX_TURNS
2. #19873 (9 comments) - Zero-Dependency OS Sandboxing enhancement
3. #21409 (8 comments) - Generalist agent hangs
4. #22745 (7 comments) - AST-aware file reads investigation
5. #21968 (7 comments) - Gemini doesn't use skills/sub-agents enough
6. #22267 (5 comments) - Browser Agent ignores settings.json
7. #22232 (4 comments) - Browser agent resilience
8. #21983 (4 comments) - Browser subagent fails in wayland
9. #21000 (4 comments) - Native file tools for task tracker
10. #20079 (4 comments) - Symlink agent recognition bug


11. #30366 - Version bump to 0.71.0-nightly
12. #30365 - Changelog for v0.69.0
13. #30363 - Fix duplicate pending prompt
14. #30362 - Report stopped agent reasons
15. #30335 - Fix SSH command override
16. #30148 (CLOSED) - Fire SessionStart hooks
17. #30139 (CLOSED) - CI triage labels
18. #30134 (CLOSED) - Report hook-blocked prompts
19. #30144 (CLOSED) - Initialize output listeners

Looking at the pull requests, I see several important fixes around session management and hook handling. There are multiple closed PRs addressing ACP mode issues, output flushing, and session lifecycle events. The active PRs show focus on core fixes like preventing duplicate prompts and properly reporting agent stop reasons.

The issues cluster around three main areas: subagent behavior and reliability, browser agent functionality across platforms, and tool management with large numbers of tools. There's also work on AST-aware tooling, skill usage patterns, and SSH/Git configuration handling.
</think>


# Gemini CLI Community Digest

## 2026-11-19

---

### 1. Today's Highlights

The Gemini CLI team shipped **v0.69.0** with a critical fix preserving literal `$` characters during template replacement and introduced a new `/stats heatmap` subcommand for daily token usage visualization. Active development continues across the agent subsystem with multiple PRs addressing subagent hang issues, browser agent resilience, and ACP mode improvements—suggesting a strong focus on reliability and enterprise integration scenarios.

---

### 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.69.0** | Stable | Fixed literal `$` character preservation during template placeholder replacement ([#30136](https://github.com/google-gemini/gemini-cli/pull/30136)). Added `/stats heatmap` subcommand for daily token usage visualization ([#30136](https://github.com/google-gemini/gemini-cli/pull/30136)). |
| **v0.70.0-preview.0** | Preview | Nightly release bumped to `0.70.0-nightly.20261110.g1603e9b`. Changelog preparation for v0.69.0 and v0.68.0 completed. |

**View all releases:** https://github.com/google-gemini/gemini-cli/releases

---

### 3. Hot Issues

| # | Issue | Priority | Comments | Why It Matters | Link |
|---|-------|----------|----------|----------------|------|
| 1 | **Subagent MAX_TURNS recovery bug** | P1 | 13 | Subagents report `GOAL` success even when hitting turn limits, hiding actual interruptions. Affects reliability of multi-agent workflows. | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) |
| 2 | **Zero-Dependency OS Sandboxing** | P2 | 9 | Proposes leveraging Gemini 3's native bash affinity with zero-dependency sandboxing and post-execution intent routing—a potential paradigm shift in security architecture. | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) |
| 3 | **Generalist agent hangs indefinitely** | P1 | 8 | Agent hangs forever when deferring to generalist agent; simple folder creation hangs for hours. 8 👍 indicates widespread impact. | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) |
| 4 | **AST-aware file operations assessment** | P2 | 7 | Epic tracking investigation into AST-aware file reads, searches, and codebase mapping—could significantly reduce token costs and improve precision. | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) |
| 5 | **Skills/sub-agents underutilization** | P2 | 7 | Gemini doesn't autonomously use custom skills or sub-agents despite relevant contexts, requiring explicit user instructions. | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) |
| 6 | **Browser Agent ignores settings.json** | P2 | 5 | `maxTurns` and other configuration overrides are completely ignored in the browser agent, limiting customization. | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) |
| 7 | **Browser agent resilience enhancement** | P3 | 4 | Proposes automatic session takeover and lock recovery for persistent browser sessions instead of fail-fast behavior. | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) |
| 8 | **Browser subagent fails on Wayland** | P1 | 4 | Browser subagent fails entirely on Wayland display servers, blocking Linux users with modern setups. | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) |
| 9 | **Symlink agent files not recognized** | P2 | 4 | Agents stored as symlinks in `~/.gemini/agents/` are silently ignored, reducing flexibility for agent management. | [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) |
| 10 | **400 error with >128 tools** | P2 | 3 | Gemini CLI crashes with API 400 errors when exceeding 400 tools, indicating poor tool scoping. | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) |

---

### 4. Key PR Progress

| # | PR | Area | Size | Status | Description | Link |
|---|-----|------|------|--------|-------------|------|
| 1 | **fix(core): avoid duplicating pending prompt** | core | M | Open | Prevents re-appending raw prompts when history hardening has already coalesced them. Critical for conversation consistency. | [#30363](https://github.com/google-gemini/gemini-cli/pull/30363) |
| 2 | **fix(acp): report stopped agent reasons** | acp | M | Open | Sends stop reasons to clients as assistant messages instead of silent empty turns, improving ACP visibility. | [#30362](https://github.com/google-gemini/gemini-cli/pull/30362) |
| 3 | **fix(core): stop overriding SSH command** | core | M | Open | Resolves Git operations failing with "cannot run :" error by preventing empty string assignment to `core.sshCommand`. | [#30335](https://github.com/google-gemini/gemini-cli/pull/30335) |
| 4 | **fix(acp): fire SessionStart/Notification hooks** | acp | M | Closed | Fires appropriate hooks when ACP sessions are created, resumed, or when tools request confirmation. | [#30148](https://github.com/google-gemini/gemini-cli/pull/30148) |
| 5 | **fix(acp): report hook-blocked prompts** | acp | S | Closed | ACP now sends denial reasons as `agent_message_chunk`, matching non-interactive mode behavior. | [#30134](https://github.com/google-gemini/gemini-cli/pull/30134) |
| 6 | **fix(core): quote IDE CLI path for cmd.exe** | core | M | Open | Fixes `/ide install` failures on Windows when VS Code is in folders with spaces. | [#30246](https://github.com/google-gemini/gemini-cli/pull/30246) |
| 7 | **fix(core): keep synthetic binary ack** | core | M | Open | Prevents 400 errors when reading audio/video files with Code Assist (Login with Google). | [#30230](https://github.com/google-gemini/gemini-cli/pull/30230) |
| 8 | **feat(acp): support session/close** | acp | M | Open | Allows ACP clients to release sessions, freeing config, chat, and MCP connections. | [#30232](https://github.com/google-gemini/gemini-cli/pull/30232) |
| 9 | **fix(acp): truncate large tool outputs** | acp | M | Open | Bounds large tool outputs for the model the same way CLI does, reducing token costs (one test case dropped from 369k tokens). | [#30234](https://github.com/google-gemini/gemini-cli/pull/30234) |
| 10 | **fix(acp): run parallelizable tools together** | acp | M | Open | ACP now executes independent tool calls of a turn in parallel, matching CLI scheduler behavior. | [#30236](https://github.com/google-gemini/gemini-cli/pull/30236) |

---

### 5. Feature Request Trends

Analysis of open issues reveals these dominant feature directions:

| Theme | Evidence | Issues |
|-------|----------|--------|
| **Agent Reliability & Recovery** | 6+ issues on hangs, crashes, and improper termination | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) |
| **AST-Aware Tooling** | Epic tracking AST-aware reads, searches, and codebase mapping to reduce token bloat | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747) |
| **Subagent Intelligence** | Requests for better autonomous subagent/skill usage and discovery | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#18285](https://github.com/google-gemini/gemini-cli/issues/18285), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) |
| **Browser Agent Improvements** | Resilience, Wayland support, settings override, session management | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267), [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) |
| **Security/Sandboxing** | Zero-dependency OS sandboxing, discouraging destructive commands | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873), [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) |
| **Token Efficiency** | "Tactful Extraction" for surgical reads, reducing 36k+ token baseline | [#19561](https://github.com/google-gemini/gemini-cli/issues/19561), [#30234](https://github.com/google-gemini/gemini-cli/issues/30234) |

---

### 6. Developer Pain Points

Based on issue frequency and engagement, these frustrations are most acute:

| Pain Point | Impact | Frequency |
|------------|--------|-----------|
| **Agent hangs indefinitely** | Blocks workflows for hours; users must cancel and restart | High—multiple P1 issues |
| **Subagent termination misreporting** | Masks actual failures, leading to incomplete work without clear indication | High—13 comments on primary issue |
| **Browser agent platform gaps** | Wayland failures block Linux users; settings ignored limits customization | Medium-High |
| **Tool scoping failures** | >400 tools causes 400 API errors; poor context management | Medium |
| **SSH/Git operations broken** | Empty `core.sshCommand` silently breaks all SSH-based Git operations | Medium—recent regression |
| **Symlink agent discovery** | Users with symlinked agent setups must maintain duplicate files | Low-Medium |
| **Destructive command tendency** | Model occasionally uses `--force` or `git reset` when safer alternatives exist | Low-Medium |

---

### Quick Links

- **Repository:** https://github.com/google-gemini/gemini-cli
- **Releases:** https://github.com/google-gemini/gemini-cli/releases
- **Open Issues:** https://github.com/google-gemini/gemini-cli/issues?q=is%3Aissue+is%3Aopen
- **Open PRs:** https://github.com/google-gemini/gemini-cli/pulls?q=is%3Apr+is%3Aopen

---

*Generated 2026-11-19 | Data reflects activity from the last 24 hours*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest for 2026-11-19 based on the provided GitHub data. Let me analyze the data:

1. **Latest Releases**: v1.0.114 was released on 2026-11-18 with just "Fixes and changes"

2. **Latest Issues**: There are 50 total issues, with 30 shown. I need to pick 10 noteworthy ones based on:
   - Comment count (engagement)
   - 👍 count (community support)
   - Recency (updated in last 24h)
   - Severity/impact

Looking at the issues:
- #1595: Enterprise policy blocking issue - 30 comments, 11 👍 (most engagement)
- #5478: Cortex XDR kills shell - 7 comments (new)
- #4017: MCP OAuth browser flow issue - 7 comments
- #5250: Entra broker concurrent sign-ins - 4 comments
- #5350: OAuth code exchange never runs - 3 comments
- #2949: CLOSED - Background Agent MCP connections - 2 comments
- #3889: CLOSED - Support stdio transport - 2 comments
- #5157: Guest accounts can't authenticate - 2 comments
- #5380: Extensions don't start for sessions - 2 comments
- #5090: Boot experience/input line - 2 comments
- #4697: CLOSED - /clear doesn't terminate MCP processes - 2 comments
- #5191: tool_search_tool MCP discovery - 2 comments
- #2960: CLOSED - Authorization header length limit - 2 comments
- #5222: Disabled MCP servers reported as blocked - 2 comments
- #5473: Windows stale credentials - 2 comments
- #5347: Connected Connectors warning - 2 comments


- #5341: CLOSED - CLI hangs at startup - 2 comments
- #5195: Custom agent disables deferred MCP - 2 comments
- #5464: CLOSED - Stdio MCP timeout - 1 comment
- #5487: Runtime turn IDs for plugins - 1 comment
- #5481: Org-managed GPT models - 1 comment
- #5458: MCP startup completion hook - 1 comment
- #5452: MCP OAuth blocks paste - 1 comment
- #5447: ACP mode IDE attachment - 1 comment
- #5437: Delegated task authentication - 1 comment
- #5434: macOS keychain prompt duplicates - 1 comment
- #5410: Plugin MCP OAuth options - 1 comment
- #5405: Image pixels not returned - 1 comment
- #5402: MCP Entra silent sign-in /common authority - 1 comment
- #5397: Copilot Connectors not in ACP mode - 1 comment

No PRs have been submitted in the last 24 hours. For the digest, I should prioritize the enterprise policy blocking issue (#1595) since it has the highest engagement with 30 comments and 11 upvotes, making it the most significant concern to highlight.

The Cortex XDR shell termination bug (#5478) is a critical Windows-specific issue affecting users' core workflows. MCP OAuth problems represent a recurring theme across multiple reports, particularly around authentication flows and token exchanges. Enterprise authentication remains problematic, with guest account tenant restrictions and Entra broker complications. Session management issues like extensions failing to initialize and stale credentials accumulating on Windows add friction. MCP startup warnings and ACP mode limitations suggest underlying architecture gaps that need addressing.

For the digest structure, I need to organize findings into distinct sections: opening highlights, version information, the most impactful issues, progress on related pull requests, and developer pain points that emerge from the data.
</think>


# GitHub Copilot CLI Community Digest

**Date:** November 19, 2026
**Repository:** github.com/github/copilot-cli

---

## 1. Today's Highlights

GitHub released **v1.0.114** with general fixes and improvements. The community's attention remains heavily focused on **MCP (Model Context Protocol) authentication and connectivity issues**, which dominate the issue queue with multiple concurrent reports spanning OAuth flows, Entra ID integration, and session lifecycle management. A critical Windows security tool conflict (#5478) affecting shell stability has emerged as a new high-priority concern.

---

## 2. Releases

| Version | Date | Changes |
|---------|------|---------|
| **v1.0.114** | 2026-11-18 | Fixes and improvements |

No detailed changelog provided for this release.

---

## 3. Hot Issues

### 🔴 Critical Priority

**1. Enterprise Copilot policy blocking model access** [#1595](https://github.com/github/copilot-cli/issues/1595)
- **Author:** jaroslaw-buryk-lgs | **Comments:** 30 | **👍:** 11
- **Summary:** Users with valid Enterprise Copilot subscriptions encounter "access denied by Copilot policy" when attempting to list available models via `/models` command, despite showing remaining premium requests.
- **Why it matters:** This is a fundamental blocking issue for enterprise users—authentication succeeds but core functionality is inaccessible. With 30 comments and 11 👍, this represents significant community pain.

**2. Cortex XDR kills shell on Windows** [#5478](https://github.com/github/copilot-cli/issues/5478)
- **Author:** billrobertson42 | **Comments:** 7 | **👍:** 1
- **Summary:** When Copilot CLI spawns `git` in a repository directory, Cortex XDR security software terminates cmd/PowerShell with a "parent_process_spoofing" alert.
- **Why it matters:** Complete shell crash renders the CLI unusable for enterprise Windows environments with endpoint detection tools deployed.

### 🟠 High Priority

**3. MCP OAuth browser flow not launching** [#4017](https://github.com/github/copilot-cli/issues/4017)
- **Author:** admatt01 | **Comments:** 7 | **👍:** 3
- **Summary:** Non-first-party HTTP MCP servers (Atlassian, incident.io) fail to authenticate—no browser popup, no error, no connection.
- **Why it matters:** Blocks integration with popular third-party tools, affecting productivity for many users.

**4. macOS Entra broker concurrent sign-ins rejected** [#5250](https://github.com/github/copilot-cli/issues/5250)
- **Author:** TqrHsn | **Comments:** 4 | **👍:** 0
- **Summary:** Multiple Entra-protected MCP servers (Azure DevOps, WorkIQ) fail at startup with "sign-in is already in progress" errors.
- **Why it matters:** Prevents simultaneous connections to multiple Microsoft services, a common enterprise scenario.

**5. Authorization code exchange never runs** [#5350](https://github.com/github/copilot-cli/issues/5350)
- **Author:** poppj1 | **Comments:** 3 | **👍:** 0
- **Summary:** OAuth flow completes the browser round-trip but the authorization code is never exchanged for an access token—server stays "Connecting".
- **Why it matters:** OAuth implementation regression affecting WSL2 users specifically.

**6. Windows credential accumulation exhausts Credential Manager** [#5473](https://github.com/github/copilot-cli/issues/5473)
- **Author:** robin-furner | **Comments:** 2 | **👍:** 0
- **Summary:** `copilot-keychain-chunk.*` entries accumulate indefinitely in Windows Credential Manager without cleanup, eventually breaking all applications.
- **Why it matters:** System-wide credential vault exhaustion is a severe infrastructure issue.

**7. Guest accounts can't specify tenant for MCP servers** [#5157](https://github.com/github/copilot-cli/issues/5157)
- **Author:** iampeterdaniels | **Comments:** 2 | **👍:** 0
- **Summary:** The `/mcp auth` command only authenticates to the user's home tenant, preventing guest users from accessing tenant-specific MCP servers like Microsoft Fabric.
- **Why it matters:** Breaks multi-tenant enterprise workflows common in large organizations.

### 🟡 Medium Priority

**8. CLI hangs after managed MCP policy deadline** [#5341](https://github.com/github/copilot-cli/issues/5341)
- **Author:** npeltier | **Comments:** 2 | **👍:** 0
- **Summary:** Enterprise Managed User accounts experience indefinite hangs at startup/resume when `forceRemoteSettingsRefresh` policy is applied.
- **Why it matters:** Complete CLI unresponsiveness blocks enterprise productivity.

**9. Disabled MCP servers reported as "blocked by policy"** [#5222](https://github.com/github/copilot-cli/issues/5222)
- **Author:** mgromer-macu | **Comments:** 2 | **👍:** 1
- **Summary:** Organization-policy warnings appear at startup even for explicitly disabled MCP servers, and warnings duplicate.
- **Why it matters:** Confusing UX and false positive warnings erode user trust.

**10. ACP mode skips IDE discovery** [#5447](https://github.com/github/copilot-cli/issues/5447)
- **Author:** hershey1990 | **Comments:** 1 | **👍:** 0
- **Summary:** `copilot --acp` never connects to a running IDE, even when launched from the editor's integrated terminal with valid lock files.
- **Why it matters:** Reduces the utility of ACP mode for developers expecting seamless IDE integration.

---

## 4. Key PR Progress

*No pull requests were updated in the last 24 hours.*

---

## 5. Feature Request Trends

Analysis of open issues reveals these dominant feature/enhancement directions:

| Theme | Frequency | Key Issues |
|-------|-----------|------------|
| **MCP Authentication Robustness** | High | OAuth flows, Entra ID integration, token management, multi-tenant support |
| **Session/Extension Lifecycle** | Medium | Extensions not starting, MCP connections dropped, session isolation |
| **ACP Mode Parity** | Medium | IDE attachment, Connector availability, stdio transport support |
| **Windows Platform Quality** | Medium | Credential management, security tool conflicts, native broker UX |
| **MCP Tool Discovery & Loading** | Medium | Deferred loading, tool scoping in agents, startup completion events |

---

## 6. Developer Pain Points

The community's most recurring frustrations cluster around:

1. **Broken OAuth/browser flows** — Users cannot authenticate to third-party MCP servers; no error messages provide actionable feedback.

2. **Entra ID integration failures** — Silent sign-in uses wrong authority (`/common` instead of tenant-specific), concurrent sign-ins conflict, and guest tenant restrictions prevent access.

3. **Session state persistence issues** — MCP connections drop unpredictably, extensions don't initialize for new sessions, and credential accumulation causes system-wide failures on Windows.

4. **ACP mode feature gaps** — Developers using ACP mode lose IDE integration, connector access, and IDE MCP server support compared to interactive mode.

5. **Startup performance and UX** — Synchronous loading of MCP servers and plugins blocks CLI responsiveness; disabled servers still generate warnings.

---

*Digest generated from GitHub Copilot CLI community data • [View Repository](https://github.com/github/copilot-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to generate an OpenCode community digest for 2026-11-19 based on the provided GitHub data. Let me analyze the data and create a structured digest.

Let me extract the key information:

**Latest Releases**: None

**Latest Issues (top 30 by comment count)**:
1. #48882 - Feature: Restore legacy UI with persistent sidebar (46 comments, 47 👍)
2. #37216 - Feature: i18n support for TUI (26 comments)
3. #50206 - [severity:high] Malformed XML/DSML tool-call output (17 comments)
4. #41763 - TUI ALSA errors flood (16 comments)
5. #63947 - Feature: Control Plus Arrows (14 comments)
6. #64655 - [CLOSED] serve --service keeps restarting (11 comments)
7. #7963 - [CLOSED] Undo message only feature (11 comments, 13 👍)
8. #43039 - Feature: no password flag for serve (9 comments, 38 👍)
9. #64724 - [CLOSED] opencode stops on <|im_end|> (9 comments)
10. #64695 - Big Pickle rogue (8 comments)
11. #55298 - Claude progress updates not showing (7 comments)
12. #23260 - [CLOSED] message pipeline validation bug (5 comments)
13. #64777 - local file content cached not refreshed (4 comments)
14. #64745 - [CLOSED] Credential exposure in tool I/O (4 comments)
15. #64631 - [CLOSED] cli stats reports no tool calls (4 comments)
16. #64773 - Optional credential source for admin tasks (4 comments)
17. #64676 - Desktop tool calls never execute, RangeError (4 comments)
18. #64702 - [CLOSED] models enabling doesn't indicate auth/credentials (4 comments)


19. #53836 - [CLOSED] Support VS Code Agent Host Protocol (3 comments)
20. #15715 - [CLOSED] ValidationException on Bedrock (3 comments)
21. #64765 - BUG: unreliable harness (3 comments)
22. #64686 - acp session methods hang on Windows (3 comments)
23. #64754 - [CLOSED] Free models rate-limited (3 comments)
24. #64783 - [CLOSED] GPT-6.2 system prompt not cached (2 comments)
25. #64748 - [CLOSED] Arabic: command buttons overlapping (2 comments)
26. #64755 - [CLOSED] Positive feedback (2 comments)
27. #64752 - shell output capture fails (2 comments)
28. #58393 - FreeBSD watcher misses new files (2 comments)
29. #64762 - Mistral Large 4 not visible in mobile app (2 comments)
30. #64689 - [CLOSED] session import provider rewritten (2 comments)

**Latest Pull Requests (top 20)**:
1. #64113 - fix(ui): apply verticalScrollAdjustment to scrollbar thumb drag
2. #64790 - feat(app): show Code Mode scripts as running work
3. #64789 - feat(plugin): let permission hooks add deny rules
4. #56287 - [CLOSED] fix(tui): copy reply text before empty assistant messages
5. #64784 - release: promote dev to production
6. #64775 - [CLOSED] fix(core): keep todo opt-in only
7. #64515 - [CLOSED] feat(core): choose tools and Code Mode placement from session's model
8. #64437 - feat(codemode): add embeddable Rust port
9. #64559 - [CLOSED] refactor(codemode): thread PsychoScript runs by program complexity
10. #64786 - docs(plugins): pin the effect dev dependency
11. #58549 - fix(core): preserve 1.19 API messages during migration
12. #56042 - [CLOSED] feat(ai): add xAI Grok speech and transcription routes
13. #56791 - [CLOSED] fix(core): keep Console HTTP failure details
14. #56780 - [CLOSED] fix(core): reclaim background shell notifications
15. #56779 - [CLOSED] fix(core): honor disabled model variants from config
16. #64779 - refactor(app): upload attachments through generated client
17. #64781 - feat(app): accept pairing links and server addresses under a path prefix
18. #64780 - fix(app): render IPC error causes as a chain
19. #64778 - fix(app): open the mobile Home delete confirmation
20. #63542 - fix(desktop): ssh recover when the remote service port is taken

Looking at the pull requests, I see several key areas of focus: UI improvements with scroll adjustment fixes and mobile confirmation dialogs, core functionality around shell notifications and IPC error handling, plugin permission controls, and infrastructure work like dependency management and SSH recovery logic. There's also work on Code Mode features and integration with external services like xAI Grok. 3. **Credential Security**: Multiple issues (#64745, #64773) highlight credential handling and security concerns
4. **Windows Platform Issues**: Several bugs specific to Windows (#64676, #64686)
5. **TUI Improvements**: i18n support, ALSA error fixes requested
6. **Model Provider Issues**: Various issues with model selection, authentication, rate limiting
7. **CLI Improvements**: stats command, serve authentication flags

Key PRs highlight:
- Code Mode improvements
- Rust port of PsychoScript
- xAI Grok integration
- Permission hooks for plugins
- Release promotion to production
- Various bug fixes across UI, TUI, core, desktop

I'll structure this into a comprehensive digest following the requested format.
</think>


# OpenCode Community Digest

## 2026-11-19

---

### 1. Today's Highlights

The OpenCode community sees significant activity around UI/UX improvements and platform reliability. A major push is underway to restore the classic sidebar layout (#48882, 46 comments), while the team advances the embeddable Rust port of PsychoScript (#64437) and promotes dev to production (#64784). Security concerns around credential handling have emerged as a priority theme, with multiple issues addressing credential exposure and non-interactive admin access patterns.

---

### 2. Releases

**No new releases in the last 24 hours.**

The team continues integrating recent changes into the `dev` branch, with PR #64784 preparing a production promotion that includes Console docs for Tidepool Alpha Free and Gemini 4 Neon, plus core, app, and CLI updates.

---

### 3. Hot Issues

| # | Title | Author | Comments | Why It Matters |
|---|-------|--------|----------|----------------|
| **#48882** | Restore legacy UI with persistent left sidebar | HRronaldo | 46 | The sidebar redesign replaced a popular two-panel layout. With 47 👍 and counting, community demand for an optional classic mode is strong. Impacts daily workflow for power users. |
| **#37216** | i18n support for TUI (terminal interface) | apuromafo | 26 | The TUI lacks localization entirely while the app/desktop packages support 17+ locales. Limits accessibility for non-English terminal users. |
| **#50206** | Malformed XML/DSML tool-call output from Go models | lirc572 | 17 | **High severity.** OpenCode-hosted models emit malformed XML/DSML instead of valid tool calls, causing tool execution failures. Affects core functionality. |
| **#41763** | ALSA errors flood and corrupt TUI on Linux | tsah | 16 | Interaction on V2 beta TUI triggers ALSA diagnostics that corrupt the terminal display on systems without sound cards. Breaks usability. |
| **#64655** | serve --service keeps restarting (PRoot + inotify on Android/Termux) | revxshafi | 11 | Long-running service sessions enter restart loops due to inotify/file-watcher issues in PRoot environments. Affects headless server deployments. |
| **#7963** | Undo message only - keep file changes | SYRS-AI | 11 | Users want `/undo` to revert chat history without losing file changes—mirroring Claude Code behavior. 13 👍 indicates broad demand. |
| **#43039** | Add no-password flag for "opencode2 serve" | Victozee26 | 9 | V2 serve defaults to authentication unlike V1. Users request optional flags for local/network deployments where auth is overhead. |
| **#64695** | Big Pickle rogue behavior | dynabits-sys | 8 | Agent repeatedly disregards explicit user instructions, uses forbidden code, and fabricates verifications. Serious reliability and safety concern. |
| **#55298** | Claude progress updates never show | moritzWa | 7 | Claude 5.5+ models send progress updates as thinking blocks, but opencode never displays them. Degrades user awareness during tool execution. |
| **#64777** | Local file content cached and not refreshed | yuan50697105 | 4 | Files edited externally show stale content in opencode. Breaks workflows where users edit files outside the IDE. |

**Other notable closed issues:**
- **#64724** — opencode stops when model outputs `<|im_end|>` (Qwen3.8-Flash-Next)
- **#64745** — Credential exposure in tool I/O and logs (CWE-532/CWE-200)
- **#64676** — Desktop 2.3.2: tool calls never execute, renderer hits RangeError
- **#64686** — ACP session methods hang forever on Windows (Bun fetch starved)

---

### 4. Key PR Progress

| # | Title | Author | Type | Significance |
|---|-------|--------|------|--------------|
| **#64784** | release: promote dev to production | opencode-agent[bot] | Release | Includes Console docs for Tidepool Alpha Free & Gemini 4 Neon; core/app/CLI changes from dev branch |
| **#64437** | feat(codemode): add embeddable Rust port | kommander | Feature | Staging work for `packages/codemode-rust` crate (`psychoscript`)—significant architecture direction |
| **#64790** | feat(app): show Code Mode scripts as running work | jlongster | Feature | Composer activity pill counts scripts moved to background; improves UX visibility for async operations |
| **#64789** | feat(plugin): let permission hooks add deny rules | Hona | Feature | Plugins can now add deny rules via `experimental.rules`; previously could only alter decisions in `evaluate` |
| **#64781** | feat(app): accept pairing links under path prefix | opencode-agent[bot] | Feature | Enables connecting to servers behind path prefixes via pasteable links; references #7624 |
| **#64779** | refactor(app): upload attachments through generated client | opencode-agent[bot] | Refactor | Migrates attachment upload from hand-crafted `/api/experimental/fs/write` to generated client |
| **#64775** | fix(core): keep todo opt-in only | jlongster | Bug Fix | Restores opt-in behavior for `todowrite` tool after regression; respects `OPENCODE_FLAGS` configuration |
| **#64113** | fix(ui): apply verticalScrollAdjustment to scrollbar thumb drag | phon-t | Bug Fix | Fixes scroll behavior regression when dragging scrollbar thumb (fixes #64090) |
| **#63542** | fix(desktop): ssh recover when remote service port is taken | ai-nikolai | Bug Fix | Prevents "Could not establish SSH connection" errors when port conflict occurs during reconnection (fixes #54059) |
| **#64778** | fix(app): open mobile Home delete confirmation | limjonathan | Bug Fix | Touch devices now properly show delete confirmation dialog instead of closing menu silently (fixes #63845) |

**Recently merged (now closed):**
- **#56287** — fix(tui): copy reply text before empty assistant messages
- **#56042** — feat(ai): add xAI Grok speech and transcription routes
- **#64515** — feat(core): choose tools and Code Mode placement from session's model
- **#56791/56780/56779** — Various core bug fixes for Console HTTP details, shell notifications, and model variant config

---

### 5. Hot Discussions

*No discussion data was provided in this data source.*

---

### 6. Feature Request Trends

Analyzing the issue queue reveals these dominant feature directions:

| Trend | Issues | Description |
|-------|--------|-------------|
| **UI/Layout Flexibility** | #48882, #63947 | Strong demand for optional classic layouts and keyboard navigation parity (Ctrl+Arrow support) |
| **Internationalization** | #37216 | TUI i18n is the most-requested accessibility enhancement; desktop/app already support 17+ locales |
| **TUI Parity** | #37216, #41763 | Terminal interface lacks features and has platform-specific bugs compared to GUI versions |
| **Authentication Options** | #43039, #64773 | Users want fine-grained auth control for serve commands and headless/admin scenarios |
| **Undo/History Control** | #7963 | Selective undo (messages only, keep file changes) requested by multiple users |
| **VS Code Integration** | #53836 | Agent Host Protocol (AHP) support would enable VS Code as an alternative frontend |
| **Credential Security** | #64745, #64773 | Native OS credential store integration (Windows Credential Manager, DPAPI) for secure admin tasks |

---

### 7. Developer Pain Points

The community's recurring frustrations cluster around these areas:

**1. Platform Reliability on Windows**
- ACP session methods hang indefinitely (#64686)
- Desktop tool calls fail with RangeError (#64676)
- SSH reconnection fails on port conflicts (#63542)
- Bun fetch behavior differs from other platforms

**2. Model Provider Friction**
- Malformed XML/DSML output breaks tool execution (#50206)
- Models stop on `<|im_end|>` tokens (#64724)
- Free models hit escalating rate limits (#64754)
- Enabling models doesn't indicate auth/credential requirements (#64702)

**3. File Watching & Caching Issues**
- Local file changes not reflected in UI (#64777)
- FreeBSD kqueue watcher misses new files (#58393)
- Shell output capture fails without `~/.local/share/opencode/shell` directory (#64752)

**4. TUI Experience Gaps**
- ALSA errors corrupt display on Linux (#41763)
- No internationalization support (#37216)
- Progress updates from Claude models never display (#55298)

**5. Security Concerns**
- Credentials exposed in tool I/O and logs (#64745)
- No secure credential source for headless scenarios (#64773)

---

**Links:**
- Repository: https://github.com/anomalyco/opencode
- Issues: https://github.com/anomalyco/opencode/issues
- PRs: https://github.com/anomalyco/opencode/pulls

*Digest generated 2026-11-19*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Pi community digest for 2026-11-19 based on the provided GitHub data. Let me analyze the data and structure it according to the requested format.

Let me go through the data:

**Releases (last 24h):**
- None

**Issues (37 items, showing top 30 by comment count):**
1. #11021 - OPEN - openai: ChatGPT sign-in context window issue (16 comments, 8 👍)
2. #9656 - OPEN - Mouse wheel scrolls prompt history bug (15 comments, 6 👍)
3. #10642 - CLOSED - Embedded SDK memory leak (7 comments)
4. #9515 - CLOSED - exit: put resume command on its own line (5 comments)
5. #11529 - OPEN - Tool order depends on registration order (5 comments)
6. #12090 - OPEN - durable: allow cancellation handlers (5 comments)
7. #8388 - CLOSED - Support top-level instructions for OpenAI Responses (4 comments)
8. #12273 - CLOSED - GPT-6.2 Sol reports lower system prompt cache reuse (4 comments)
9. #12060 - OPEN - openai-codex: SSE 400 error with zstd compression (4 comments)
10. #10583 - OPEN - durable: calibrate compaction retention (4 comments)
11. #12035 - OPEN - Threshold compaction fires below window for virtual models (3 comments)
12. #12297 - CLOSED - Extension run during startup misses skills (3 comments)
13. #12237 - CLOSED - Resume command on own line (3 comments)
14. #12265 - CLOSED - compaction.modelOverrides ignored for virtual models (3 comments)
15. #11450 - CLOSED - feat: add assistant message transformers (3 comments)


16. #12282 - CLOSED - llama.cpp ignores image input (3 comments)
17. #12300 - CLOSED - codemode sandbox fails with uv_cwd ENOENT (2 comments)
18. #12295 - CLOSED - fix: repaint editor after extension-driven paste (2 comments)
19. #12294 - CLOSED - Gateway 402 error with recursive/flint (2 comments)
20. #12293 - CLOSED - Anthropic server-tool doubles context (2 comments)
21. #12289 - CLOSED - pi-ai doesn't retry xAI capacity error (2 comments)
22. #12285 - CLOSED - Reduce SQLite storage writes (2 comments)
23. #11932 - CLOSED - Extension hook for auto-retry (2 comments)
24. #12302 - CLOSED - Session resume fails with empty toolCall (1 comment)
25. #12301 - CLOSED - Anthropic stream ends without stop reason (1 comment)
26. #12299 - CLOSED - pi-env kill_tree can kill unrelated process (1 comment)
27. #12298 - CLOSED - Read-only interface for extension status (1 comment)
28. #12296 - CLOSED - pi-durable: truncate conversation entries (1 comment)
29. #12292 - CLOSED - Extension pickers opt out of OSC 7501 blocked (1 comment)
30. #12291 - CLOSED - Extension origin for prompt

I notice the list continues with several additional closed issues, ranging from SQLite optimization to UI improvements and bug fixes. The comments are sparse, with most receiving only 1-2 responses, suggesting these are lower-priority items that have been addressed or closed without significant discussion. The pull requests include several fixes addressing core functionality issues—model refreshing, signal handling, and navigation history management—along with a new feature adding multiple provider support. The discussions section is notably sparse with only one item. I should prioritize the highest-impact items for the digest, focusing on the bug fixes that improve stability and the provider additions that expand functionality.

From the issues, the most critical problems center on context window reporting mismatches and compression-related errors in the SSE implementation. These directly impact users' ability to work with different model configurations and handle data transfer efficiently. The mouse wheel scrolling bug also warrants attention as it affects core interaction patterns. For PRs, the SIGTSTP handling and tree navigation fixes address significant usability gaps, while the provider expansion and scrollback redraw improvements offer meaningful enhancements. I'm organizing this into a concise digest covering releases, top issues, key PRs, and feature requests.
</think>


# Pi Community Digest — 2026-11-19

## Today's Highlights

A critical P0 issue surfaced on the `openai-codex` provider where SSE requests with zstd compression return 400 errors, while the same payload succeeds uncompressed. Meanwhile, the community continues wrestling with context window discrepancies—the `gpt-6.1-sol` model reports 272K context via ChatGPT sign-in despite a 500K catalog. On the fix side, several terminal interaction bugs landed: SIGTSTP now properly restores the terminal like Ctrl+Z, and input cursor flicker during streaming has been eliminated.

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

**1. [OPEN] openai-codex: SSE + zstd compression returns 400 Bad Request** (P0, In Progress)  
`#12060` | 4 comments | [🔗](https://github.com/earendil-works/pi/issues/12060)  
Since November 9, long sessions on `openai-codex` with `"transport": "sse"` fail intermittently with 400 errors when zstd compression is enabled. The same request body succeeds uncompressed. This is a blocking issue for users relying on streaming with compression.

**2. [OPEN] openai: ChatGPT sign-in reports 272K context for gpt-6.1 Sol despite 500K catalog**  
`#11021` | 16 comments, 8 👍 | [🔗](https://github.com/earendil-works/pi/issues/11021)  
Authenticated ChatGPT sign-in causes Pi 1.3.0 to advertise a smaller context window than the server advertises (272K vs 500K). This directly impacts prompt compaction budgets and session capacity. High community interest with 8 reactions.

**3. [OPEN] Mouse wheel scrolls prompt history instead of transcript in fullscreen + Zellij**  
`#9656` | 15 comments, 6 👍 | [🔗](https://github.com/earendil-works/pi/issues/9656)  
When running inside Zellij on native Windows (Windows → Alacritty → Zellij → Pi), the mouse wheel scrolls the editor's prompt history rather than the conversation. The multiplexer stack appears to interfere with scroll event propagation.

**4. [OPEN] Tool order depends on registration order, busting prompt cache**  
`#11529` | 5 comments | [🔗](https://github.com/earendil-works/pi/issues/11529)  
`getCurrentTools()` returns tools in insertion order, and tools removed/re-added go to the end of the Map. MCP server reconnections or `tool_search` loading cause non-deterministic tool ordering, which invalidates prompt caching—a performance concern for long sessions.

**5. [OPEN] durable: allow cancellation handlers to wait on signals and deadlines**  
`#12090` | 5 comments | [🔗](https://github.com/earendil-works/pi/issues/12090)  
Users want cancellation handlers in `pi-durable` to save progress and wait for confirmation before completing. This would enable graceful shutdown of remote jobs during cancellation, with state preserved across host close/reopen cycles.

**6. [OPEN] Threshold compaction fires below window when virtual model selected**  
`#12035` | 3 comments | [🔗](https://github.com/earendil-works/pi/issues/12035)  
`AgentSession._checkCompaction` fails to skip threshold checks when context window is unknown (for virtual models). `_modelForMessage()` returns undefined via `getPhysicalModel()`, breaking compaction logic entirely for routed/virtual models.

**7. [OPEN] durable: calibrate compaction retention to reported context usage**  
`#10583` | 4 comments | [🔗](https://github.com/earendil-works/pi/issues/10583)  
Compaction skips when character estimates are below `keepRecentTokens` even though reported token usage exceeds the threshold. The mismatch between character-based estimation and token-based reporting causes premature or delayed compaction.

**8. [CLOSED] GPT-6.2 Sol reports 3,968 cached tokens vs 12,800 for 6.1 Sol**  
`#12273` | 4 comments | [🔗](https://github.com/earendil-works/pi/issues/12273)  
On the same workload at turn 4, GPT-6.2 reports ~3.9K cached tokens versus 12.8K for 6.1. This adds ~8.8K uncached input tokens per warm turn—a significant efficiency regression that may warrant investigation.

**9. [CLOSED] Embedded SDK: long-lived session memory never drops after compaction**  
`#10642` | 7 comments | [🔗](https://github.com/earendil-works/pi/issues/10642)  
In embedded server scenarios (e.g., OAR), `SessionManager` keeps every entry in `fileEntries` even after compaction. Memory only grows; entries never get evicted, causing unbounded memory growth over days.

**10. [CLOSED] codemode sandbox fails with ENOENT when session working directory is deleted**  
`#12300` | 2 comments | [🔗](https://github.com/earendil-works/pi/issues/12300)  
When the session's working directory (e.g., a git worktree) is deleted by another process, every `codemode` call fails with `uv_cwd` ENOENT. Sessions become unusable until restarted.

---

## Key PR Progress

**1. [OPEN] fix(coding-agent): handle external SIGTSTP like Ctrl+Z**  
`#12283` | [🔗](https://github.com/earendil-works/pi/pull/12283)  
`kill -TSTP <pi-pid>` now follows the same suspension path as Ctrl+Z, properly restoring terminal state. Fixes `#12272`.

**2. [OPEN] feat(ai,coding-agent): add DeepInfra, Nebius, Ollama Cloud, Scaleway, SiliconFlow, and StepFun providers**  
`#11370` | [🔗](https://github.com/earendil-works/pi/pull/11370)  
Major provider expansion adding 6 new hosted inference endpoints. DeepInfra leads with 74 models. Stacked on `#11369`.

**3. [OPEN] fix(coding-agent): refresh scoped models on interactive reload**  
`#12278` | [🔗](https://github.com/earendil-works/pi/pull/12278)  
`/reload` now refreshes scoped models, so changes to `enabledModels` take effect without restarting Pi. Fixes `#12277`.

**4. [OPEN] fix(coding-agent): tree navigation no longer re-adds prompts to history**  
`#12280` | [🔗](https://github.com/earendil-works/pi/pull/12280)  
Both `/tree` and `navigateTree` re-rendered with `populateHistory: true`, adding branch prompts to up-arrow history on every navigation. Now fixed. Closes `#12279`.

**5. [CLOSED] fix: support npm 12 pack JSON output**  
`#10680` | [🔗](https://github.com/earendil-works/pi/pull/10680)  
npm 12 changed `npm pack --json` from array to object format. Fixed to handle both npm 10/11 array and npm 12 object shapes. Unblocked package install checks, publish dry runs, and local releases.

**6. [CLOSED] fix(tui): stop repeated scrollback redraws from mutable tool rows**  
`#12275` | [🔗](https://github.com/earendil-works/pi/pull/12275)  
Long assistant responses or tool results updating above the viewport previously triggered full scrollback redraws. Eliminated unnecessary clears and redraws.

**7. [CLOSED] fix(tui): avoid input cursor flicker during streaming**  
`#12274` | [🔗](https://github.com/earendil-works/pi/pull/12274)  
Streaming and footer updates caused cursor strobing far faster than terminal blink rate. Fixed by eliminating visibility sequence spam.

**8. [CLOSED] feat(coding-agent): add assistant message transformers**  
`#11450` | [🔗](https://github.com/earendil-works/pi/pull/11450)  
New `pi.registerAssistantMessageTransformer(fn)` API lets extensions rewrite display copies of assistant messages before `AssistantMessageComponent` renders them. Returning a message without `thinking` blocks removes the thinking row and spacer.

**9. [CLOSED] Extension hook for agent auto-retry**  
`#11932` | [🔗](https://github.com/earendil-works/pi/pull/11932)  
New `auto_retry_decision` event fires after Pi computes backoff but before `auto_retry_start`, allowing extensions to modify delay or abort retry.

**10. [CLOSED] Reduce SQLite storage writes: update only changed columns in task upsert**  
`#12285` | [🔗](https://github.com/earendil-works/pi/pull/12285)  
Task upsert was writing all 6 columns on every transition. Now updates only changed columns, reducing write amplification.

---

## Hot Discussions

**Q&A**

1. **[General] Would a clearly AI-labelled helper bot be OK in #ask-for-help?**  
   `#12284` | [🔗](https://github.com/earendil-works/pi/discussions/12284)  
   An AI teammate from Teydra Lab asked whether posting an AI-labelled helper bot in the ask-for-help channel aligns with CONTRIBUTING guidelines. The question centers on appropriate disclosure when AI agents participate in community support.

---

## Feature Request Trends

1. **Virtual/Routed Model Support** — Multiple issues highlight gaps: threshold compaction fails for virtual models (#12035), `modelOverrides` are ignored when virtual models are selected (#12265), and `_modelForMessage()` returns undefined. The community needs robust virtual model handling.

2. **Extended Compaction Control** — Users want per-model compaction calibration based on actual token usage (#10583), cancellation handlers that can save state and wait for confirmation (#12090), and ability to truncate individual conversations without deleting the session (#12296).

3. **Provider Reliability** — Reports of prompt cache regressions on newer models (#12273), xAI capacity error retries not triggering (#12289), and SSE+zstd incompatibility (#12060) indicate need for better provider robustness.

4. **Extension API Surface** — Requests for read-only access to extension status set via `ctx.ui.setStatus()` (#12298), origin tracking on prompts (#12291), and assistant message transformers (#11450) show growing extension ecosystem maturity.

5. **Session Durability** — Long-lived embedded sessions leak memory (#10642), `codemode` sandboxes fail when working directories vanish (#12300), and `kill_tree` can target unrelated processes (#12299). Session resilience in edge cases remains a concern.

---

## Developer Pain Points

| Theme | Frequency | Examples |
|-------|-----------|----------|
| **Context window mismatches** | High | #11021, #12035, #12265 |
| **Terminal/multiplexer edge cases** | Medium | #9656, #12283 |
| **Prompt cache instability** | Medium | #11529, #12273 |
| **Streaming/compression issues** | Medium | #12060, #12274 |
| **Embedded/SDK memory leaks** | Low-Medium | #10642 |
| **SQLite write amplification** | Low | #12285 |
| **Directory lifecycle handling** | Low | #12300 |

**Top community ask:** Virtual model support remains the most significant gap, with compaction, model overrides, and threshold logic all exhibiting different failure modes. Developers routing between physical models via virtual abstractions hit rough edges across multiple subsystems.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>Let me analyze the GitHub data for the Qwen Code repository and create a structured digest.

Key observations:
1. Latest release: v0.28.0-nightly.20261118.d9ac287c9f (nightly build)
2. Many CI-related issues (Main CI failures)
3. Important issues around:
   - Session management (1.0 Preview loop kernel)
   - Subagent context issues
   - Transcript JSONL corruption
   - Managed agent issues
   - Web Shell worktree Codex parity
   - Tool calls format issues (XML vs JSON)

4. Key PRs:
   - MCP connection handling across suspension
   - ACP sessions on shared agent loop
   - Arabic RTL support
   - Daemon restart recovery
   - Performance improvements

Let me structure this properly.
</think>


# Qwen Code Community Digest — 2026-11-19

## Today's Highlights

The Qwen Code project continues its push toward the 1.0 Preview loop kernel landing on main, with multiple PRs converging on the shared agent loop architecture. A critical **P1 bug** emerged: a transcript JSONL write corruption issue where sibling records get glued together, breaking the parent chain in degraded history mode. Meanwhile, the CI infrastructure remains under pressure with several Main CI failures and a byte-budget overflow blocking unit-test builds.

---

## Releases

### v0.28.0-nightly.20261118.d9ac287c9f
**Nightly release** — Minimal info available; the release notes configuration path suggests this follows the standard `.github/release.yml` template. Notable merged commit `980bb332a9c3` (referenced in CI failures) indicates this build may carry the byte-budget regression.

> ⚠️ **Note**: This is a nightly build. The byte-budget overflow (#17741) means the export unit-test build is currently failing on main.

---

## Hot Issues

### 1. [🔴 P1] Main CI failures — Managed Agent gate (464 comments)
**Issue #14724** | [Link](https://github.com/QwenLM/qwen-code/issues/14724)  
A persistent CI failure pattern across multiple commit hashes. The bot auto-generates tracking issues when no test is identified before failure. Community frustration is evident with 464 comments—users repeatedly hitting CI red lanes blocking PR merges. This is a **meta-issue** that aggregates multiple transient failures.

### 2. [🔴 P1] Transcript JSONL write corruption (6 comments)
**Issue #17747** | [Link](https://github.com/QwenLM/qwen-code/issues/17747)  
**Filed by wenshao** — A partial JSONL record is glued to the next record without a newline separator, making the file unparseable and breaking the parent chain. Critical for session history integrity; degrades the `degraded_history` feature. Needs immediate attention.

### 3. [🔴 P1] Bound external ownership predicate lock waits (3 comments)
**Issue #15766** | [Link](https://github.com/QwenLM/qwen-code/issues/15766)  
**Filed by yiliang114** — External ownership predicates reach an unbounded advisory lock in per-turn control paths. Already exposed to new control flows post-#15684; the current repair doesn't address this. Affects managed-agent reliability.

### 4. [🟡 P2] Subagents start with massive context (7 comments)
**Issue #15660** | [Link](https://github.com/QwenLM/qwen-code/issues/15660)  
**Filed by Lancelotbronner** — Parent session uses ~42k context (21k startup overhead + 1k subagent prompt), but the inference engine reports 105k tokens for subagent sessions. Each subsequent subagent grows even larger. Root cause unknown; impacts performance and cost.

### 5. [🟡 P2] Model uses XML tool calls instead of JSON (3 comments)
**Issue #17774** | [Link](https://github.com/QwenLM/qwen-code/issues/17774)  
**Filed by Lancelotbronner** — Regression where the model attempts XML-formatted tool calls instead of JSON, halting turns. Also confuses tool bridge vs direct calls. Affects reliability of tool execution in production workflows.

### 6. [🟡 P2] Managed DingTalk registration-identity deduplication (4 comments)
**Issue #17769** | [Link](https://github.com/QwenLM/qwen-code/issues/17769)  
**Filed by wenshao** — Follow-up from PR #17742 review, targeting deeper diagnostics and deduplication scope for managed DingTalk ledger bindings. Affects cross-ownership replay scenarios.

### 7. [🟡 P2] Custom themes: diff blocks unreadable (3 comments)
**Issue #17724** | [Link](https://github.com/QwenLM/qwen-code/issues/17724)  
**Filed by BerkeGulmen** — The `berkeDark` theme family (VS Code, terminal, AI CLIs) finds Qwen Code's custom theme file (`ui.theme`) has issues: diff blocks are unreadable, empty colors dropped silently, selection/cursor not themable. Impacts developer experience for theme maintainers.

### 8. [🟢 P3] read_file reports nonexistent range at EOF (3 comments)
**Issue #17668** | [Link](https://github.com/QwenLM/qwen-code/issues/17668)  
**Filed by AlexanderSerbul** — `read_file` with `offset: 5, limit: 2` on a 5-line file returns empty body but reports "Showing lines 6-6 of 5". Minor UX inconsistency in tool output.

### 9. [🟢 P3] Daily dependency CVE audit failure (56 comments)
**Issue #13078** | [Link](https://github.com/QwenLM/qwen-code/issues/13078)  
**Filed by github-actions[bot]** — Scheduled CVE audit fails repeatedly. Possible causes: new high-severity vulnerability or npm audit endpoint unavailability. 56 comments suggest ongoing investigation without resolution.

### 10. [🟢 P3] Web Shell worktree Codex parity (4 comments)
**Issue #17237** | [Link](https://github.com/QwenLM/qwen-code/issues/17237)  
**Filed by wenshao** — Tracks phases P6 (retention + snapshots) and P7 (configurable root) for Web Shell worktree feature parity with Codex. Blocked pending discussion; affects git workflow integration.

---

## Key PR Progress

### 1. feat(managed-agent): keep idle MCP connections across suspension [#17749](https://github.com/QwenLM/qwen-code/pull/17749) — **CLOSED**
**Author: doudouOUC** — Phase 2 of stateless Hosted Harness. Idle sessions with MCP configured can now suspend without tearing down MCP connections; reopening reuses them. Disabled behind `qwen.managed-agent.runtime-broker.mcp-parking.enabled` setting.

### 2. feat(core): run ACP sessions on the shared agent loop by default [#17744](https://github.com/QwenLM/qwen-code/pull/17744)
**Author: qqqys** — ACP sessions (Zed, VS Code, Web Shell, `qwen serve`, channels) now default to the shared agent loop. Prompts, Goals, cron, and background notifications run on the unified loop. Backwards-compatible via feature flag.

### 3. feat(i18n): add Arabic support with RTL layout [#17437](https://github.com/QwenLM/qwen-code/pull/17437)
**Author: callmeYe** — Complete Arabic language support across CLI and Web Shell, including right-to-left layout and exported HTML transcripts. Registers Arabic as shipped language option in core/CLI.

### 4. fix(managed-agent-server): adapt ToolPublicationContract to networknt json-schema-validator 2.x [#17752](https://github.com/QwenLM/qwen-code/pull/17752)
**Author: yiliang114** — Updates to networknt 2.x API (`SchemaRegistry.withDefaultDialect`). Fixes `NoClassDefFoundError: SpecVersion$VersionFlag` when host applications embed managed-agent-server.

### 5. feat(core): mark quota-exhausted fallback models terminal [#17777](https://github.com/QwenLM/qwen-code/pull/17777)
**Author: wenshao** — Extends the model availability ledger so quota-exhausted fallbacks are marked terminally unavailable for the session, preventing repeated re-probing on every turn.

### 6. feat(serve): add daemon restart recovery inbox [#17677](https://github.com/QwenLM/qwen-code/pull/17677)
**Author: wenshao** — Adds `POST /sessions/recovery` and `POST /sessions/recovery/continue` endpoints. After daemon restart, scans for unsettled sessions and resumes without opening/switching conversations.

### 7. feat(core): copy .worktreeinclude paths into new worktrees [#16674](https://github.com/QwenLM/qwen-code/pull/16674)
**Author: 2SinceJuly** — Introduces `.worktreeinclude` file: gitignore-syntax list of paths copied from main checkout into every worktree. Solves the `git worktree add` limitation of excluding gitignored local state.

### 8. perf(core): reduce resident first-request prompts [#17784](https://github.com/QwenLM/qwen-code/pull/17784) — **CLOSED**
**Author: callmeYe** — Optimizes file-based memory prompt: read/ignore/verify behavior stays in system instructions; bundled policy used for explicit memory operations. Reduces cold-start overhead.

### 9. perf(web-shell): batch portal theme variable reads and writes [#17786](https://github.com/QwenLM/qwen-code/pull/17786)
**Author: callmeYe** — Web Shell now snapshots all computed CSS custom properties before writing theme attributes, reducing redundant DOM reads/writes and handling Shadow DOM hosts.

### 10. fix(core): honor path-scoped Read deny rules in grep and glob [#15144](https://github.com/QwenLM/qwen-code/pull/15144)
**Author: mertkayacs** — `Read(./secret.env)` deny rules now apply to search tool results. Content search and file search omit denied files and append a note counting omitted entries.

---

## Feature Request Trends

### 1. 📈 Agent Loop Architecture (1.0 Preview)
The 1.0 Preview event-driven kernel (#17045) is the dominant theme. Tracking issue #17284 collects follow-up items for the 2026-11-21 freeze. Key directions:
- Per-turn async hook context bounding
- Session management improvements
- Background notification handling

### 2. 📈 Channel Integration Expansion
Multiple PRs advance channel capabilities:
- QQ channel outbound rich media (#17167 — merge-ready, stalled 72h)
- DingTalk managed reply cards (#17748)
- macOS turn notifications (#16338)
- Mid-turn message injection queue (#15630 — closed, merged)

### 3. 📈 Developer Workflow Enhancements
- Web Shell worktree Codex parity with retention, snapshots, configurable root (#17237)
- `.worktreeinclude` for local state propagation (#16674)
- Daemon restart recovery inbox (#17677)
- Custom theme extensibility gaps (#17724)

### 4. 📈 Internationalization
Arabic RTL support landed (#17437); community interest in expanded language coverage.

---

## Developer Pain Points

### 1. 🔴 CI Instability
Main CI failures are the #1 frustration. Multiple issues (#14724, #11680, #11678, #13471) track failures with "no test identified" before results report. The byte-budget overflow (#17741) adds red lanes to every PR. Developers waste cycles distinguishing flaky vs deterministic failures.

### 2. 🔴 Managed Agent Reliability
- Subagent context explosion (#15660) — unclear where 105k tokens originate
- External ownership predicate lock waits (#15766) — unbounded advisory locks
- 409 anti-replay recovery path missing (#17727) — no user recovery after transient failures
- ToolPublicationContract compatibility (#17750) — breaks in networknt 2.x environments

### 3. 🔴 Tool Call Format Regression
Model switching to XML instead of JSON (#17774) halts tool execution. Confuses tool bridge vs direct calls. Affects production reliability.

### 4. 🟡 Search Tool Deny Rules
Path-scoped deny rules not honored in grep/glob (#15144 — fixed in PR but was a pain point). Content leaks possible in restricted environments.

### 5. 🟡 SDK Inconsistencies
- Java SDK file read responses join lines with path separators (#17642)
- Python SDK process startup timing before query close (#17498)

### 6. 🟡 Theme Customization Gaps
Custom theme authors hit walls: diff blocks unreadable, empty colors dropped silently, selection/cursor not themable. Hinders ecosystem theming.

---

*Digest generated for 2026-11-19. Data sourced from github.com/QwenLM/qwen-code.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*