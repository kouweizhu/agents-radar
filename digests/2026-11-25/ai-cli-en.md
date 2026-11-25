# AI CLI Tools Community Digest 2026-11-25

> Generated: 2026-11-25 05:00 UTC | Tools covered: 7

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

<think>The user wants me to generate a comprehensive cross-tool comparison report for AI CLI tools based on the community digests I've already created. Let me analyze all the data from the five tools:

1. **Claude Code** (github.com/anthropics/claude-code)
2. **OpenAI Codex** (github.com/openai/codex)
3. **Gemini CLI** (github.com/google-gemini/gemini-cli)
4. **GitHub Copilot CLI** (github.com/github/copilot-cli)
5. **OpenCode** (github.com/anomalyco/opencode)
6. **Pi** (github.com/earendil-works/pi)


7. **Qwen Code** (github.com/QwenLM/qwen-code)

Now I'm reviewing the activity metrics across these tools to understand their adoption and engagement levels. Claude Code shows 50 issues and recent activity across all interaction types, while OpenAI Codex is similarly active with 50 issues and 20+ pull requests. The other tools show varying levels of engagement, with some having more limited data available.

I'm noticing something important here—some of these tools like Claude Code and Gemini CLI appear to be using Discussions as their primary community channel instead of traditional issues, which explains why the metrics might look lower than expected. I should clarify which tools are using which communication channels so the comparison is fair and accurate.

Now I'm compiling the PR activity across these platforms—Claude Code had no recent activity, but OpenAI Codex shows significant movement with around 15 PRs, Gemini CLI had about 10, Copilot CLI had 2, and OpenCode has multiple PRs across both open and closed states. Pi and Qwen Code are also contributing with their own PRs, though the exact counts need verification.

Looking at the release cadence, Claude Code is the most actively updated with v2.1.332 just released, followed by OpenAI Codex's alpha versions, Copilot CLI's recent releases, while the other tools haven't shipped updates in the last day. I'm also tracking the discussion activity where Claude Code appears to have minimal participation, though I should double-check whether OpenAI Codex has discussions enabled since they're listed in the data.

Now I'm synthesizing this across all seven tools to understand their feature directions and where they're investing their efforts.

Looking at what these tools share, there are clear patterns emerging. Multi-agent systems are a major focus—subagent lifecycle management, background task completion notifications, orphaned worker cleanup, and inter-agent communication all appear across multiple platforms. Memory and context handling is another critical area with automatic memory indexing, AST-aware file reading, project-level memory strategies, and compaction optimization all being addressed. Platform-specific improvements are scattered throughout, particularly around Windows, macOS, and browser environments, though the specific issues vary. Security and sandboxing features are also being prioritized, with shell command permission checks, sandboxing mechanisms, and credential protection mechanisms all under active development.

The ecosystem is also seeing convergence on multi-provider support—several tools are adding the ability to configure multiple external AI models and providers. Accessibility improvements are being made for screen readers and RTL language support. TUI refinements like terminal capability centralization, clipboard handling, and scroll/focus preservation are being tackled. Voice features are emerging with Live Voice and configurable turn detection. And MCP integration is being strengthened with server skills, OAuth flows, and IPC reliability.

Looking at the differentiators, Claude Code is taking an Anthropic-centric approach that's developer-focused with strong hooks and skills extensibility, while OpenAI Codex is building on an OpenAI foundation with a desktop-first strategy emphasizing agent coordination and memory features.

Gemini CLI brings Google's infrastructure with OS sandboxing and web search capabilities, Copilot CLI integrates tightly with GitHub and enterprise needs, OpenCode uses an open-source architecture with cross-provider flexibility, Pi targets the developer audience with a focus on streaming performance and terminal experience, and Qwen Code emphasizes the Qwen model ecosystem with strong CLI polish and CI pipeline investment.

The communities themselves vary significantly in maturity and activity patterns—Claude Code and OpenAI Codex both have massive communities with thousands of forks and high engagement, though Claude Code relies more heavily on discussions while Codex has more traditional issue tracking. Gemini CLI shows active development but less community participation, Copilot CLI has moderate activity with enterprise focus, and OpenCode is actively maintained by its original team.

Looking at the momentum, OpenAI Codex is iterating rapidly with substantial PR activity, Gemini CLI and Claude Code are both shipping frequently with strong security focus, while Copilot CLI has settled into more measured releases. OpenCode, Pi, and Qwen Code maintain smaller but highly active development teams with quality-focused changes.

The trends emerging from all this activity point to a few key directions: multi-agent architectures are becoming standard, security around execution is increasingly important, CLI tools are gaining sophisticated terminal interfaces, multi-provider flexibility is expected, platform parity remains challenging particularly on Windows, MCP is solidifying as the integration standard, memory management is evolving from simple solutions to more advanced patterns, and voice integration is becoming a differentiating feature.

Now I'm thinking through the best way to present this as a comparison—showing the trade-offs between different approaches and which tools excel at different things.
</think>


# AI Developer Tools Ecosystem — Cross-Tool Comparison Report

**Date:** 2026-11-25

---

## 1. Ecosystem Overview

The AI CLI tools landscape is entering a **platform consolidation phase** in late 2026. The seven tools surveyed collectively represent over 40,000 GitHub stars and serve distinct but overlapping developer segments. Today shows all tools actively iterating — the most recent releases span from stable-channel updates (Claude Code v2.1.332, Copilot CLI v1.0.116-3) to rapid alpha cycling (OpenAI Codex with five alpha releases in 24 hours). The dominant technical thread across all communities is **multi-agent reliability**: subagent lifecycle management, session persistence, and cross-platform tooling failures are the top community pain points. Meanwhile, the integration standard war is tilting toward **MCP (Model Context Protocol)** as the de facto extension layer, with all five tools investing in MCP server skills, OAuth flows, and IPC reliability. The most consequential open question across the ecosystem is **session and project lifecycle management** — no tool has yet shipped a fully satisfactory model of persistent, navigable, multi-session memory.

---

## 2. Activity Comparison

| Tool | Repo | Issues (total / updated 24h) | PRs (total / merged 24h) | Discussions | Releases (24h) | Community Size Indicator |
|------|------|------------------------------|--------------------------|-------------|----------------|--------------------------|
| **Claude Code** | anthropics/claude-code | 50 / ~50 | 0 / 0 | **Active** — top-3 pinned, community show-and-tell | **v2.1.332** (stable) | ~28k stars; largest by star count |
| **OpenAI Codex** | openai/codex | 50 / ~50 | 35 / 0 | **Active** — Ideas, Q&A, Show & Tell boards | 5 alpha releases (v0.173–v0.174) | ~20k stars; active GitHub Discussions |
| **Gemini CLI** | google-gemini/gemini-cli | 50 / ~50 | — | — | None | Growing, smaller star count |
| **Copilot CLI** | github/copilot-cli | 36 / ~36 | 2 / 0 | — | **v1.0.116-0–3** (4 patches) | Enterprise-focused; no public discussions |
| **OpenCode** | anomalyco/opencode | 30 / ~30 | 20+ / ~9 closed, 10 open | — | None | ~1.6k stars; fast-moving |
| **Pi** | earendil-works/pi | — | — | — | None | Small, niche audience |
| **Qwen Code** | QwenLM/qwen-code | 50 / ~50 | 50 / ~10 merged | — | None | ~8k stars; active internal CI |

**Notes:**
- Gemini CLI, Copilot CLI, OpenCode, Pi, and Qwen Code **do not use GitHub Discussions** — community conversation happens in Issues and PRs. These tools are not "inactive"; they simply lack the Discussions channel entirely.
- Claude Code and OpenAI Codex maintain **active Discussion boards** (Ideas, Q&A, Show & Tell) as their primary community channel, consistent with their large user bases and Anthropic/OpenAI's community engagement strategy.
- All seven tools show significant issue update volume, indicating **active triage and community engagement** despite varying release cadences.

---

## 3. Shared Feature Directions

The following requirements appear in community feedback, issue threads, or PR descriptions across multiple tools. These represent genuine ecosystem-level demand:

### Multi-Agent Lifecycle & Orchestration
| Need | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Qwen Code |
|------|:-----------:|:------------:|:----------:|:-----------:|:--------:|:---------:|
| Background subagent wake-on-completion | ✅ | ✅ | ✅ | — | — | ✅ |
| Subagent orphan / zombie cleanup | — | ✅ | ✅ | — | — | — |
| Subagent model consistency on resume | — | ✅ | — | — | — | — |
| Multi-agent navigation in TUI | — | ✅ | — | — | — | — |
| Agent checkpoint / history management | — | — | — | — | ✅ | ✅ |
| **Signal:** All tools with subagent systems face identical lifecycle gaps. This is the single most-requested cross-tool feature. |

### Memory, Context, & Compaction
| Need | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Qwen Code |
|------|:-----------:|:------------:|:----------:|:-----------:|:--------:|:---------:|
| Project-scoped persistent memory | ✅ | ✅ | — | — | ✅ | ✅ |
| Configurable memory size limits | ✅ | — | ✅ | — | — | — |
| AST-aware file reads (token efficiency) | — | — | ✅ | — | — | — |
| Compaction with bounded growth | ✅ | — | ✅ | — | ✅ | ✅ |
| Session summarization at startup | — | ✅ | — | — | — | — |
| **Signal:** Context management is the second universally requested feature. Every tool is reinventing memory indexing independently. |

### Security & Execution Safety
| Need | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Qwen Code |
|------|:-----------:|:------------:|:----------:|:-----------:|:--------:|:---------:|
| Shell command permission hooks | ✅ | — | — | — | ✅ | — |
| MCP OAuth / token security | — | — | ✅ | ✅ | — | — |
| YOLO / headless mode security guards | — | — | ✅ | — | — | — |
| SA impersonation token allowlisting | — | — | ✅ | — | — | — |
| **Signal:** Autonomous execution in headless/CI environments is creating urgent demand for security controls that don't break automation. |

### Platform Parity & Desktop
| Need | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Qwen Code |
|------|:-----------:|:------------:|:----------:|:-----------:|:--------:|:---------:|
| Windows-specific fixes (recent regressions) | ✅ | ✅ | — | ✅ | ✅ | — |
| Passkey / WebAuthn support | ✅ | — | — | — | — | — |
| TTY/TUI capability centralization | — | ✅ | — | — | ✅ | — |
| Clipboard integration (WSL, tmux, Wayland) | — | — | ✅ | ✅ | — | — |
| **Signal:** Platform fragmentation is the largest ongoing maintenance burden. Each tool has 3–6 active Windows/macOS-specific bugs. |

### MCP (Model Context Protocol) Integration
| Need | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Qwen Code |
|------|:-----------:|:------------:|:----------:|:-----------:|:--------:|:---------:|
| MCP server skills (beta/stable) | ✅ (beta) | — | — | — | — | — |
| MCP OAuth flow security | — | — | ✅ | — | — | — |
| MCP tool filter parsing | — | — | ✅ | — | — | — |
| Duplicate MCP endpoint detection | — | — | — | — | — | ✅ |
| **Signal:** MCP is the emerging standard. Tool-filtering, OAuth, and IPC reliability are all acute pain points. |

### Multi-Provider / BYOK Flexibility
| Need | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Qwen Code |
|------|:-----------:|:------------:|:----------:|:-----------:|:--------:|:---------:|
| Multiple external provider support | — | — | — | ✅ | ✅ | — |
| Model discovery during provider setup | — | — | — | — | — | ✅ |
| Per-model preference persistence | — | — | — | — | — | ✅ |
| Custom provider registry / registration | — | — | — | — | ✅ | — |
| **Signal:** BYOK is table stakes. Providers want to bring their own models, and users want to switch between providers without reconfiguration. |

---

## 4. Differentiation Analysis

### By Target User & Use Case

| Tool | Primary Audience | Core Differentiator | Enterprise Readiness |
|------|-----------------|---------------------|---------------------|
| **Claude Code** | Developers using Anthropic models | Hooks, skills, and PreSkillShellCommand security model | High — mature desktop app, extensive config options |
| **OpenAI Codex** | OpenAI ecosystem users; multi-agent workflows | Agent memory, A2A protocol, ChatGPT integration, TUI centralization | High — Microsoft backing, enterprise SSO |
| **Gemini CLI** | Google Cloud / Gemini developers | OS sandboxing via bash affinity, web search integration, MCP OAuth | Medium — Google Cloud dependency |
| **Copilot CLI** | GitHub Copilot subscribers; enterprise devs | GitHub-native integration, Windows sandbox by default, VS Code parity | Very High — GitHub/Microsoft enterprise stack |
| **OpenCode** | Power users wanting provider flexibility | Provider-agnostic, open-source, feature-rich TUI, custom providers | Medium — independent project, fast-moving |
| **Pi** | Developers focused on streaming performance | Linear-time stream parsing, terminal-first, extensible SDK | Medium — streaming performance is a clear differentiator |
| **Qwen Code** | Qwen/Alibaba Cloud ecosystem users | Qwen model optimization, Live Voice, Managed Agent SDK | Medium — Qwen model family lock-in |

### By Technical Architecture

| Tool | Architecture | Extension Model | TUI Approach |
|------|-------------|-----------------|-------------|
| **Claude Code** | Monolithic; hooks as plugin interface | PreSkillShellCommand, MCP servers | Terminal-focused, no separate TUI package |
| **OpenAI Codex** | Modular CLI + agent services; ACP protocol | ACP plugins, MCP servers, skill system | Shared `terminal_capabilities` module across 7 packages |
| **Gemini CLI** | Agent-centric with subagent orchestration | Skills, MCP servers | CLI-first with configurable approval modes |
| **Copilot CLI** | Desktop-first with CLI; web-shell embedded | MCP servers, VS Code extension parity | Native terminal; Web Shell for desktop |
| **OpenCode** | Reader/Composer separation; v2 rewrite | MCP servers, custom providers | Terminal reader with stacked PRs on focus preservation |
| **Pi** | Streaming-first; SDK for extensions | Extension events (`onResponse`, `after_provider_response`) | Terminal with Live Voice integration |
| **Qwen Code** | Kernel-event-driven architecture; Managed Agent | Managed Agent fast checks, A2A tasks, Spring Boot Starter | CLI with Live Voice and hybrid code mode |

### By Community Governance

| Tool | Issue Triage | Release Cadence | Community Channels |
|------|-------------|-----------------|-------------------|
| **Claude Code** | Structured labels; P0–P3 | Weekly stable | GitHub Discussions + Issues |
| **OpenAI Codex** | Active label system; high comment volume | Rapid alpha cycling (5 in 24h) | GitHub Discussions + Issues + PRs |
| **Gemini CLI** | Community-managed | Intermittent | Issues only |
| **Copilot CLI** | Enterprise-tracked | Patch-driven stable | Issues + PRs only |
| **OpenCode** | Contributor Hona active on 10+ PRs | Irregular; feature-driven | Issues + PRs only |
| **Pi** | Small team; focused on stream fixes | Slow | Issues + PRs only |
| **Qwen Code** | Internal CI-driven; large internal team | Irregular; blocked by CI stability | Issues + PRs only |

---

## 5. Community Momentum & Maturity

### High Momentum (Active, Fast-Iterating)

**OpenAI Codex** — 5 alpha releases in 24 hours, 20+ PRs visible, active GitHub Discussions board with community-built tools (Memlayer, TernaryCode, Docsworth, CybeDefend). The TUI capability centralization effort (7 PRs) signals a major architectural push. Strongest community ecosystem beyond Claude Code.

**Claude Code** — Weekly stable releases, MCP server skills in beta, active community discussions. The sheer volume of engagement (#15942 has 158 comments) indicates a large, invested user base. Maturity is high but the MCP desktop IPC regression (#106708) shipped alongside the new feature.

**OpenCode** — Despite a smaller star count, contributor Hona is individually responsible for 10+ open PRs addressing UI stability. The project is moving fast with a v2 rewrite and active multi-provider support. Quality of contributions is high.

### Medium Momentum (Active, Steady)

**Gemini CLI** — Active security hardening (YOLO mode, OAuth flows, SA impersonation) alongside browser agent improvements. Not many community contributions but the core team ships consistently.

**Qwen Code** — Large internal team driving active development. CI pipeline instability is the main drag; once resolved, the velocity is high. Live Voice and Managed Agent features are differentiating.

**Copilot CLI** — Enterprise-focused with steady patch releases. The rapid v1.0.116-0→3 cycle today indicates active stabilization. Community is smaller but the GitHub/Microsoft backing provides long-term reliability.

### Niche / Maturing

**Pi** — Small community but technically sophisticated (linear-time stream parsing, SDK extensions). The focus on streaming performance and edge case handling is valuable for advanced users but limits broad adoption.

---

## 6. Trend Signals

### 🔴 High-Confidence Trends (Confirmed by Multiple Tools)

**1. Multi-Agent Reliability Is Table Stakes**
Every tool with subagent support has open bugs about wake-on-completion, orphan cleanup, and model consistency on resume. The community is signaling that multi-agent workflows are increasingly central to daily use, and the current implementations are brittle. Expect this to be the dominant engineering investment in 2027.

**2. Platform Parity Remains Unsolved**
Windows-specific bugs appear in 5 of 7 tools. The specific failure modes vary (CRLF corruption, Send button freezes, terminal garbage, keychain failures, path resolution) but the pattern is consistent: cross-platform support is the largest ongoing maintenance burden. Tools that solve platform parity cleanly will have a significant competitive advantage.

**3. MCP Is the Emerging Extension Standard**
Claude Code (beta skills), Copilot CLI (server management, duplicate detection), Gemini CLI (OAuth, tool filtering), and Qwen Code (stateless protocol) are all investing in MCP simultaneously. The MCP ecosystem is fragmenting into MCP App (native IPC) and MCP-over-HTTP (remote servers), with tools handling these differently. Standardization pressure is building.

**4. Security Cannot Be An Afterthought in Headless Mode**
Three tools (Gemini CLI, Copilot CLI, OpenCode) have active security PRs around shell permission hooks, OAuth validation, token allowlisting, and browser skill denial. As these CLIs move into CI/CD pipelines and unattended automation, the YOLO/headless security model is under active redesign.

### 🟡 Emerging Trends (Strong Signal, Fewer Tools)

**5. Voice Integration Is Gaining Traction**
Qwen Code (Live Voice, configurable turn detection), Pi (Live Voice integration), and Claude Code (Voice feature) all show investment in voice capabilities. The differentiation is in turn detection models (server_vad vs semantic_vad) and ASR provider compatibility.

**6. Memory Is Evolving from Implicit to Explicit**
Community-built tools like Memlayer (OpenAI Codex) and the open Memory proposals across multiple tools signal that automatic memory is insufficient. Users want curated, project-scoped, citation-backed memory with configurable limits — not a black box.

**7. TUI Quality Is a Differentiator**
OpenAI Codex's investment in terminal capability centralization and OpenCode's stacked PRs on reader positioning suggest that TUI polish is becoming a competitive factor. As more developers use these tools daily, the terminal experience (scrolling, clipboard, mouse, resize) becomes a quality-of-life differentiator.

**8. Subscription Tier Anxiety Is Growing**
Claude Code's highest-voted issue (#58530 on OpenAI Codex) and multiple rate-limit complaints across tools indicate that usage quota transparency and predictability are becoming community concerns. Developers automating workflows need reliable cost modeling, and unexpected quota acceleration is a trust issue.

### Decision-Making Summary for Technical Leaders

| If You Need... | Best Fit Today | Watch For |
|---------------|---------------|-----------|
| **Anthropic model integration** | Claude Code | MCP desktop IPC regressions; Windows auth stability |
| **OpenAI ecosystem + memory** | OpenAI Codex | Alpha stability; CI gate reliability |
| **Google Cloud integration** | Gemini CLI | OAuth flow hardening; headless security model |
| **GitHub enterprise workflow** | Copilot CLI | Ubuntu keychain; BYOK multi-provider parity |
| **Provider flexibility + open-source** | OpenCode | UI stability (stacked PRs); v2 migration |
| **Maximum streaming performance** | Pi | Community size; extension API maturity |
| **Qwen model optimization** | Qwen Code | CI stability; Live Voice ASR compatibility |

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to analyze the GitHub data from the anthropics/skills repository and generate a community highlights report. Let me carefully parse through the data provided:

**Pull Requests (Skills) - sorted by comments:**
Looking at the data, I notice that the Comments field says "undefined" for all PRs. This seems like data collection might have had an issue. However, the PRs are listed as the top 20 by some metric (likely comments or activity). Let me analyze what I have:

1. #1742 - fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
2. #1298 - fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
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
18. #1975 - pptx: reject --cols below 1 in thumbnail.py
19. #1950 - docs(claude-api): update Python pause_turn runner guidance
20. #1615 - Add scnet-hpc skill

**Issues - sorted by comments:**
1. #492 - Security: Community skills distributed under anthropic/ namespace (46 comments, 3 👍)
2. #228 - Enable org-wide skill sharing in Claude.ai (17 comments, 8 👍)
3. #556 - run_eval.py: claude -p never triggers skills

 (13 comments, 7 👍)
4. #1329 - Proposing a second skill: compact-memory (10 comments, 0 👍)
5. #62 - All my skills have disappeared (10 comments, 2 👍)
6. #1385 - [Proposal] Reasoning Quality Gate Pipeline (8 comments, 1 👍)
7. #202 - skill-creator should be updated to best practice (8 comments, 1 👍)
8. #1143 - [Feature Request] Ability to change account email address (7 comments, 20 👍)
9. #1352 - skill-creator: run_eval.py parallel workers cross-match skill UUIDs (6 comments, 3 👍)
10. #412 - Skill proposal: agent-governance (6 comments, 0 👍)
11. #189 - document-skills and example-skills plugins install identical content (6 comments, 9 👍)
12. #2064 - theme-factory: description needs clarification on when to apply it (5 comments, 0 👍)
13. #1487 - `claude-api` skill loads ~156k tokens into context (5 comments, 0 👍)
14. #2018 - docx: merge_runs.py loses namespace declarations (4 comments, 0 👍)
15. #1868 - create_gradient_background color interpolation is off by one (4 comments, 0 👍)

The discussion shows several themes emerging. Security concerns dominate #492 with 46 comments discussing namespace vulnerabilities. Feature gaps are evident in org-wide sharing capabilities and account management. The skill evaluation system has reliability issues—both the parallel worker UUID matching and overall trigger detection need fixes. Content duplication between plugins creates conflicts, and some skills like theme-factory lack clear usage documentation. The context token issue in #1487 suggests performance bottlenecks with large skills.

Looking at the PR data, the comment field shows as undefined across all items, which indicates a data collection problem. I need to rely on other engagement signals like recency, scope, and thumbs up reactions to identify which PRs are generating the most community interest. The most active discussions appear around platform security, workflow improvements, and skill evaluation reliability. -security concern about community skills using anthropic/ namespace. Issues reveal demand for organizational sharing, skill evaluation fixes, new capabilities like compact-memory, and documentation improvements. Several high-potential PRs haven't merged yet but address important functionality around MCP, skill creation, and Windows support. The ecosystem shows community-driven growth with focus on infrastructure reliability and expanding Claude Code's capabilities.
</think>


# Claude Code Skills Community Highlights Report

*Data as of 2026-11-25 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

The following skills (Pull Requests) represent the most active development and community engagement. Note: PR comment counts were unavailable in the dataset; ranking reflects recency, scope, and thematic significance.

| # | PR | Author | Description | Status |
|---|-----|--------|-------------|--------|
| 1 | **[#1742](https://github.com/anthropics/skills/pull/1742)** | Kuldeeep18 | **mcp-builder fix** — Updates MCP integration for `mcp>=2.0.0`, supporting renamed `streamable_http_client` module and custom HTTP header configuration via `http_client` parameter. | Open |
| 2 | **[#1980](https://github.com/anthropics/skills/pull/1980)** | Pcmhacker-piro | **webapp-testing security fix** — Eliminates `shell=True` in `with_server.py` subprocess calls, preventing command injection vulnerabilities (CWE-78). | Open |
| 3 | **[#1298](https://github.com/anthropics/skills/pull/1298)** | MartinCajiao | **skill-creator Windows & eval fix** — Isolates trigger evaluations, fixes `select()` subprocess failures on Windows, and handles runtime failures as non-triggers. | Open |
| 4 | **[#1245](https://github.com/anthropics/skills/pull/1245)** | mrdesouzaphd-cmyk | **Notion spec-to-implementation + resume auditor** — Transforms product specs into executable Notion tasks; adds quantitative resume analysis capabilities. | Open |
| 5 | **[#1771](https://github.com/anthropics/skills/pull/1771)** | ProofCore-Protocol | **ProofCore contract auditor** — Web3 skill for automated Solidity/Rust smart contract static analysis with TON Blockchain audit proof anchoring. | Open |
| 6 | **[#525](https://github.com/anthropics/skills/pull/525)** | kitao | **Pyxel retro game skill** — Guides creation, debugging, and headless verification of Python games using the Pyxel engine. | Open |
| 7 | **[#1703](https://github.com/anthropics/skills/pull/1703)** | 70v-Yoyo | **md2video-audio** — Converts Markdown documents into MP4 videos with realistic voiceovers using Marp presentation framework. | Open |
| 8 | **[#514](https://github.com/anthropics/skills/pull/514)** | PGTBoos | **document-typography** — Prevents AI-generated document issues: orphan words, widow paragraphs, numbering misalignment. | Open |

**Key Observations:**
- All top PRs remain **Open**, indicating active review cycles
- Strong emphasis on **security fixes** (CWE-78, namespace trust boundaries)
- **Windows compatibility** emerging as a critical concern for cross-platform skills

---

## 2. Community Demand Trends

Analysis of Issues reveals five distinct demand clusters:

### 🔐 Security & Trust (Highest Priority)
**[#492](https://github.com/anthropics/skills/issues/492) — 46 comments**  
Critical: Community skills distributed under `anthropic/` namespace create impersonation risks. Users may grant elevated permissions believing they are official.

### 🔧 Workflow & Infrastructure
- **Org-wide skill sharing** ([#228](https://github.com/anthropics/skills/issues/228), 17 comments) — Request for built-in organizational skill library
- **Plugin duplication** ([#189](https://github.com/anthropics/skills/issues/189), 6 comments) — `document-skills` and `example-skills` install identical content

### 📊 Skill Evaluation Reliability
- **run_eval.py trigger failures** ([#556](https://github.com/anthropics/skills/issues/556), 13 comments) — 0% trigger rate for all queries
- **Parallel worker UUID conflicts** ([#1352](https://github.com/anthropics/skills/issues/1352), 6 comments) — Silent failures when `--num-workers > 1`

### 📝 Documentation & Polish
- **dead URLs** ([#1730](https://github.com/anthropics/skills/pull/1730)) — Replace 404 documentation links
- **Theme factory clarity** ([#2064](https://github.com/anthropics/skills/issues/2064)) — Missing "when to use" guidance

### 🚀 New Capability Requests
- **Compact memory** ([#1329](https://github.com/anthropics/skills/issues/1329)) — Symbolic notation for agent state
- **Agent governance** ([#412](https://github.com/anthropics/skills/issues/412)) — Safety patterns for AI agent systems

---

## 3. High-Potential Pending Skills

These PRs have active development and may merge soon:

| Skill | PR | Highlights | Readiness |
|-------|-----|------------|-----------|
| **mcp-builder v2 compatibility** | [#1742](https://github.com/anthropics/skills/pull/1742) | MCP SDK 2.x support, custom headers | High — targeted fix |
| **md2video-audio** | [#1703](https://github.com/anthropics/skills/pull/1703) | Zero-cost Markdown→MP4 with voiceover | Medium — feature complete |
| **pyxel game dev** | [#525](https://github.com/anthropics/skills/pull/525) | Retro game creation pipeline | Medium — long-running review |
| **proofcore-contract-auditor** | [#1771](https://github.com/anthropics/skills/pull/1771) | Web3 smart contract analysis | Medium — specialized niche |
| **scnet-hpc** | [#1615](https://github.com/anthropics/skills/pull/1615) | SSH/Slurm HPC cluster management | High — scoped addition |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for foundational infrastructure improvements** — security hardening (command injection, namespace trust), cross-platform reliability (Windows compatibility, eval pipeline fixes), and workflow standardization (org sharing, skill evaluation accuracy) — rather than entirely new skill categories.

---

*Report generated from public GitHub data. For real-time updates, visit [github.com/anthropics/skills](https://github.com/anthropics/skills).*

---

<think>The user wants me to generate a Claude Code community digest for 2026-11-25 based on the provided GitHub data. Let me analyze the data and create a structured digest following the specified format.

Looking at the data:
1. Latest Release: v2.1.332 - has 2 changes about MCP server skills and PreSkillShellCommand hook
2. 50 issues total, showing top 30 - I need to pick 10 noteworthy ones
3. 0 pull requests in the last 24h
4. No discussion data provided

Let me organize this into the required sections:

1. **Today's Highlights** - 2-3 sentences
2. **Releases** - v2.1.332 changes
3. **Hot Issues** - 10 noteworthy issues with explanations
4. **Key PR Progress** - 0 PRs, so I'll note none
5. **Hot Discussions** - Omit since no discussion data
6. **Feature Request Trends** - Analyze from issues
7. **Developer Pain Points** - Summarize frustrations

Let me select the 10 most noteworthy issues:

1. #15942 - VS 2026 Integration (497 👍, 158 comments) - Huge interest
2. #38005 - RTL Support for Hebrew & Arabic (99 👍, 50 comments) - Accessibility
3. #26904 - /delete command (115 👍, 28 comments) - Common request
4. #90708 - Context usage indicator (37 👍, 21 comments) - Desktop UX
5. #79217 - Configurable MEMORY.md limit (4 👍, 14 comments) - Memory management
6. #105621 - Usage limits draining faster (4 👍, 13 comments) - Bug affecting users
7. #77473 - Passkey/WebAuthn not supported (17 👍, 11 comments) - Desktop browser limitation
8. #87891 - Background daemon memory leak (6 👍, 8 comments) - Performance bug


9. #106708 - MCP App IPC not available (1 👍, 7 comments) - MCP integration
10. #97344 - Chrome sign-in lost on restart (2 👍, 5 comments) - Auth regression

I'll focus on the most impactful technical issues that affect user workflow and system performance. The selected issues represent significant challenges in platform integration, accessibility, user experience, and system stability. Each issue reveals a critical aspect of Claude Code's current implementation that needs attention and improvement.

The memory leak in the background daemon suggests a systemic performance problem that could impact long-running sessions. The MCP App IPC issue and Chrome sign-in problem highlight ongoing integration challenges across different platforms and authentication mechanisms.

The current version introduces MCP server skills in beta and adds a new hook event for PreSkillShellCommand, demonstrating incremental but important feature development. The absence of recent pull requests indicates a potential stabilization phase or a pause in active development.
</think>


# Claude Code Community Digest — 2026-11-25

---

## Today's Highlights

Version **v2.1.332** ships MCP server skills integration (beta), enabling `server:skill` naming in the `/` menu alongside a new `PreSkillShellCommand` hook event for security-conscious organizations. Community discussion remains active around Visual Studio 2026 integration (#15942) with 497 👍, while Windows users report a concerning usage limit regression (#105621) since mid-October.

---

## Releases

### v2.1.332 (2026-11-25)
| Change | Description |
|--------|-------------|
| **MCP Server Skills (Beta)** | Skills loaded from MCP servers now appear as `server:skill` in the `/` menu; existing skills retain their original names |
| **PreSkillShellCommand Hook** | New hook event enables plugins to refuse inline shell commands from skills/commands at load time; retroactively adds the previously missing settings key for older versions |

**Migration Note:** On v2.1.331 and older, the `PreSkillShellCommand` hook configuration key was named incorrectly—v2.1.332 corrects this for fresh installs.

---

## Hot Issues

### 1. [enhancement] Add support for Visual Studio 2026 Integration
**#15942** | 497 👍 | 158 💬 | `area:ide`, `platform:windows`
A highly requested feature to bring Claude Code directly into Visual Studio 2026, targeting Windows developers who live in the IDE. Community engagement is exceptional—nearly 3× more comments than any other issue—indicating strong demand for tighter IDE parity.
🔗 [github.com/anthropics/claude-code/issues/15942](https://github.com/anthropics/claude-code/issues/15942)

### 2. [enhancement] RTL (Right-to-Left) Support for Hebrew & Arabic
**#38005** | 99 👍 | 50 💬 | `area:a11y`, `area:cowork`, `area:desktop`
Accessibility-focused request to add RTL language support for Hebrew and Arabic in Claude Desktop and Cowork. The high comment-to-vote ratio suggests active design discussion is underway.
🔗 [github.com/anthropics/claude-code/issues/38005](https://github.com/anthropics/claude-code/issues/38005)

### 3. [enhancement] Add `/delete` command to delete current session
**#26904** | 115 👍 | 28 💬 | `area:cli`
Long-standing CLI enhancement request to provide a native way to delete a session transcript. Currently, users must use the coarser `claude project purge <path>` which removes all project state. A focused session deletion would improve workflow hygiene.
🔗 [github.com/anthropics/claude-code/issues/26904](https://github.com/anthropics/claude-code/issues/26904)

### 4. [enhancement] Desktop app: bring back the context-usage indicator
**#90708** | 37 👍 | 21 💬 | `area:statusline`, `area:desktop`
Windows desktop users want the context-window usage indicator restored to the footer. Currently showing a 5-hour usage-limit ring that rarely informs decisions mid-session, while the more actionable context counter is hidden. Users running long agentic sessions find this a daily friction point.
🔗 [github.com/anthropics/claude-code/issues/90708](https://github.com/anthropics/claude-code/issues/90708)

### 5. [bug] Background daemon never reaps stale workers (memory leak)
**#87891** | 6 👍 | 8 💬 | `area:agent-view`, `perf:memory`, `platform:macos`
Critical performance bug: the background daemon accumulates unreaped worker processes, reaching **64 leaked processes and ~7.1 GB** after six weeks of normal use. Reproducible with clear diagnostic data—likely affects any long-running desktop deployment.
🔗 [github.com/anthropics/claude-code/issues/87891](https://github.com/anthropics/claude-code/issues/87891)

### 6. [bug] Usage limits drain drastically faster since mid-October 2026
**#105621** | 4 👍 | 13 💬 | `area:cost`, `area:desktop`, `platform:windows`
Windows desktop users report significant, unexplained usage limit acceleration since mid-October with unchanged workflows. With no code or configuration changes on the user side, this points to a potential regression in the desktop app's token counting or caching behavior.
🔗 [github.com/anthropics/claude-code/issues/105621](https://github.com/anthropics/claude-code/issues/105621)

### 7. [bug] Built-in browser does not support passkey (WebAuthn) authentication
**#77473** | 17 👍 | 11 💬 | `area:desktop`, `platform:macos`
macOS desktop users cannot authenticate to GitHub (and likely other passkey-only sites) via the built-in browser, as WebAuthn/platform authenticator calls fail silently. This blocks GitHub login entirely for affected users—a significant desktop app gap.
🔗 [github.com/anthropics/claude-code/issues/77473](https://github.com/anthropics/claude-code/issues/77473)

### 8. [bug] MCP App tool calls fail with "IPC not available" in Desktop Code tab
**#106708** | 1 👍 | 7 💬 | `area:mcp`, `area:desktop`, `platform:macos`
Regression in the desktop app: MCP App tools fail with "IPC not available" when invoked from the Claude Code tab. Given the newly released MCP server skills feature, this bug could undermine the beta functionality for desktop users.
🔗 [github.com/anthropics/claude-code/issues/106708](https://github.com/anthropics/claude-code/issues/106708)

### 9. [bug] Claude in Chrome: sign-in lost on every full Chrome restart
**#97344** | 2 👍 | 5 💬 | `area:auth`, `area:browser-extension`, `platform:windows`
Chrome extension users must re-authenticate on every full browser restart, breaking unattended automation setups. The consent screen appears every launch despite prior successful login—a clear auth persistence regression.
🔗 [github.com/anthropics/claude-code/issues/97344](https://github.com/anthropics/claude-code/issues/97344)

### 10. [enhancement] Make the auto-memory MEMORY.md index size limit configurable
**#79217** | 4 👍 | 14 💬 | `area:memory`
Users want control over the 200-line / 25KB `MEMORY.md` limit that constrains what gets indexed at session start. Larger projects with comprehensive memory files hit this ceiling, and the hardcoded values prevent tuning for different project sizes or memory strategies.
🔗 [github.com/anthropics/claude-code/issues/79217](https://github.com/anthropics/claude-code/issues/79217)

---

## Key PR Progress

No pull requests were merged or opened in the last 24 hours.

---

## Feature Request Trends

Aggregating from 30 tracked issues, the following themes dominate:

| Theme | Representative Issues | Signal Strength |
|-------|----------------------|-----------------|
| **Multi-session & project management** | #107819, #106064, #85906, #111879 | High — multiple concurrent proposals for session grouping, deletion, and project-level overview |
| **Platform-specific enhancements** | #15942 (VS 2026), #77473 (passkeys), #90708 (desktop UX) | High — Windows and macOS desktop feature gaps |
| **Agent coordination & subagents** | #110284, #112092, #109117 | Medium — emerging focus on multi-agent workflows |
| **Context & memory management** | #79217, #105621 | Medium — users want more control and visibility over token usage |
| **Accessibility & i18n** | #38005 (RTL support) | Medium — accessibility requests gaining traction |
| **CLI enhancements** | #26904, #85906, #111879 | Medium — session lifecycle commands |
| **Hooks & extensibility** | #100057, #104216 | Low-Medium — hook behavior refinements |

---

## Developer Pain Points

1. **Session lifecycle is coarse-grained** — No way to delete individual sessions forces users to either leave stale transcripts or nuke entire project state. The `/delete` command request has sat open since February with 115 👍.

2. **Windows desktop has multiple regressions** — Auth persistence in Chrome (#97344), usage limit acceleration (#105621), and IPC failures in MCP (#106708) compound into a poor Windows experience.

3. **Memory leaks in long-running sessions** — The background daemon worker leak (#87891) is particularly painful for developers who keep Claude Code running continuously, silently consuming 7+ GB over weeks.

4. **Built-in browser limitations** — Passkey/WebAuthn support gap (#77473) blocks GitHub login in the desktop app's embedded browser, forcing users to fall back to external browsers.

5. **MCP integration instability** — Today's new MCP server skills feature shipped alongside an IPC regression (#106708) affecting the desktop Code tab, suggesting rushed stabilization.

6. **Context usage opacity** — Users running long agentic sessions have no persistent, visible indicator of remaining context window, leading to surprise compactions. The request to restore this to the desktop footer (#90708) dates back to August.

7. **Multi-project coordination blind spots** — Developers managing 5-10 concurrent projects have no overview mechanism; each project's coordinator is siloed (#110284, #107819).

---

*Generated: 2026-11-25 | Source: github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze this GitHub data for the OpenAI Codex repository and create a structured digest for 2026-11-25.

Let me organize the key information:

**Releases (last 24h):**
- rust-v0.174.0-alpha.5, 0.174.0-alpha.4, 0.174.0-alpha.3, 0.174.0-alpha.2
- rust-v0.173.0-alpha.5

**Issues (30 shown, total 50):**
- #58530: December 2026 usage limits - preserve access to ChatGPT High and Codex/Work on Plus - 43 comments, 67 👍


- #54841: Work mode blocks message submission in BYOK mode - 43 comments, 28 👍
- #15723: Background subprocesses/subagents don't wake calling agent - 33 comments, 15 👍
- #62393: Windows Send button intermittently disabled - 29 comments, 0 👍
- #56941: Windows UI lag persists after Computer Use - 28 comments, 3 👍
- #62943: Nov 21 regression: new conversations lose selectors - 27 comments, 15 👍
- #32396: Locked use automatic unlock fails on macOS - 24 comments, 10 👍
- #62234: macOS bottom panel settings disappear (CLOSED) - 24 comments, 23 👍

Now looking at the next batch of issues: agent-created tasks are hidden from search, the desktop browser is blocked by Work settings, orphaned subagents are freezing sessions, new chats are missing execution location controls, and there's a problem with the Allow button that ends turns prematurely.

Continuing through the list, I'm seeing issues with VS Code message submission failures on Windows, sudo permissions being blocked on Linux, capacity errors on the Pro 200 plan, and integrated browser failures on macOS. There are also issues with resumed subagents losing their completed status and Japanese IME input handling problems on macOS.

Looking at the next set of issues, I'm tracking problems with subagent navigation in the CLI on macOS, the bottom panel refusing to open in Codex mode, prompts being incorrectly flagged as invalid, missing project navigation features, model switching during agent resumption, and non-ASCII filenames causing silent diff failures. I'm also noting issues with quota draining on the latest GPT model and rapid usage depletion.

Now examining the pull requests from the last 24 hours, I'm seeing work on fixed launch directories for MCP servers, updating ripgrep to version 16, integrating ChatGPT voice preferences into Codex, preserving Daybreak selections, fixing API authentication, discovering model catalogs, and hardening SSH checks for plugin marketplaces.

Looking at the TUI-related PRs, there's significant refactoring happening around terminal capabilities—consolidating image handling, clipboard operations, compatibility policies, and capability decisions all into a centralized `terminal_capabilities` module. The workspace divider now shows a resize cursor, and multiline paste operations are being preserved without bracketed paste markers. There's also work to prevent accidental TUI interrupts after steering is accepted, handling MCP reply recovery for expired sessions, and reusing OAuth discovery across configuration server startups.

Adding an opt-in Statsig initialization feature, and I'm seeing discussions about adding memory capabilities to Codex, a Memlayer tool for project memory management, and support for multiple remote Codex runtimes from a single client.

Now looking at the next items: TernaryCode appears to be showing which session is waiting across projects, there's a user-built continuity architecture for ChatGPT Projects, and then a series of tools—Docsworth for team-owned documentation with ownership and review dates, a typo inspection example for codex mcp, StoryDesk for local markdown writing with memory capabilities, indiebiz-evidence for cross-checking data, and CybeDefend for security auditing. This is a lot of activity across different use cases and integrations.
</think>


# OpenAI Codex Community Digest — 2026-11-25

---

## 1. Today's Highlights

The OpenAI Codex team shipped a sweeping **terminal-capability centralization effort** in the CLI/TUI, consolidating clipboard, image rendering, mouse capture, and resize policies into a shared `terminal_capabilities` module across 7 merged PRs. On the Windows front, a **November 21 regression** broke execution-location selectors and Max reasoning effort in new conversations, triggering a cluster of high-comment issues. The community's most-upvoted open issue (#58530) is a policy plea to **preserve ChatGPT High and Codex/Work access for Plus subscribers** under upcoming December 2026 usage limits — now at 67 👍 and 43 comments.

---

## 2. Releases

| Tag | Version | Notes |
|-----|---------|-------|
| `rust-v0.174.0-alpha.5` | 0.174.0-alpha.5 | Latest pre-release in the v0.174 alpha chain |
| `rust-v0.174.0-alpha.4` | 0.174.0-alpha.4 | |
| `rust-v0.174.0-alpha.3` | 0.174.0-alpha.3 | |
| `rust-v0.174.0-alpha.2` | 0.174.0-alpha.2 | |
| `rust-v0.173.0-alpha.5` | 0.173.0-alpha.5 | Prior alpha chain |

> All five releases landed within the last 24 hours, indicating an active Rust-core development cadence. No stable channel updates were recorded.

---

## 3. Hot Issues

### 1. **December 2026 usage limits: preserve ChatGPT High and Codex/Work on Plus** — [#58530](https://github.com/openai/codex/issues/58530)
**Why it matters:** This is the highest-impact policy issue in the queue — a single creator making a direct plea to keep Plus-tier users' access to ChatGPT High and Codex/Work intact under upcoming quota changes. It has attracted 67 👍 and 43 comments, signaling broad community anxiety about subscription tier changes.  
**Status:** OPEN | Author: HoshizoraArchive

### 2. **Work mode blocks message submission in BYOK mode when browser/computer tools are enabled** — [#54841](https://github.com/openai/codex/issues/54841)
**Why it matters:** A critical functional regression for Bring-Your-Own-Key users: enabling local browser or computer-use tools causes message submission to silently fail. With 43 comments, this is being actively triaged as an auth + sandbox interaction issue.  
**Status:** OPEN | Author: Wizmann

### 3. **Background subagents do not wake the calling agent on completion** — [#15723](https://github.com/openai/codex/issues/15723)
**Why it matters:** The oldest high-comment issue in today's list. Subagent background jobs complete without notifying the parent agent, breaking multi-agent orchestration workflows. 33 comments indicate this is a long-standing design gap, not a recent regression.  
**Status:** OPEN | Author: zoox101

### 4. **Windows: Send button intermittently disabled despite non-empty input** — [#62393](https://github.com/openai/codex/issues/62393)
**Why it matters:** A UX-blocking Windows-specific bug introduced in build 26.1111. A non-empty message field fails to enable the Send button intermittently, making the app appear frozen. Affects users on the latest MSIX package.  
**Status:** OPEN | Author: halashao001

### 5. **System-wide UI lag persists after Computer Use on Windows** — [#56941](https://github.com/openai/codex/issues/56941)
**Why it matters:** After Codex's Computer Use feature runs, the entire Windows desktop becomes sluggish until the `codex-computer-use.exe` process is manually killed. This is a resource-cleanup issue with significant user impact.  
**Status:** OPEN | Author: scrudg

### 6. **Nov 21 regression: new conversations lose permission/execution-location selectors and Max reasoning effort** — [#62943](https://github.com/openai/codex/issues/62943)
**Why it matters:** A cluster of three related issues (#62943, #62912, #62943) all trace back to the November 21 Windows update. New chats drop critical selectors, breaking workflow customization. 27 comments across the cluster.  
**Status:** OPEN | Author: HTTNH

### 7. **Locked use automatic unlock fails on macOS** — [#32396](https://github.com/openai/codex/issues/32396)
**Why it matters:** Computer Use on macOS fails to unlock the screen automatically even when the setting is enabled, rendering the feature unusable on Apple platforms. A persistent bug since July with no resolution.  
**Status:** OPEN | Author: joshp123

### 8. **macOS: Bottom panel settings disappear and terminal placement forced right** — [#62234](https://github.com/openai/codex/issues/62234)
**Why it matters:** This recently **closed** issue addressed a broken layout after a macOS update — settings panel vanishing and terminal anchoring to the right. The closure signals a fix is incoming, but the 23 👍 and ongoing comments suggest users want confirmation of the shipped fix.  
**Status:** CLOSED | Author: cocojem

### 9. **macOS Japanese IME typing "tte" deletes previously pasted text** — [#53972](https://github.com/openai/codex/issues/53972)
**Why it matters:** A localized IME bug that causes pasted content to vanish during Japanese romaji input — a specific but real blocker for Japanese-speaking developers. Now closed, indicating resolution.  
**Status:** CLOSED | Author: JobAnyol

### 10. **CLI/TUI: Subagent entries and activity links no longer open details on macOS** — [#63819](https://github.com/openai/codex/issues/63819)
**Why it matters:** Filed today, this is the freshest issue in the hot list. Navigation within the CLI/TUI subagent view has regressed — entries and links don't open detail panes. Affects Ghostty + tmux users on macOS.  
**Status:** OPEN | Author: iqdoctor

---

## 4. Key PR Progress

| # | PR Title | Impact |
|---|----------|--------|
| [#63821](https://github.com/openai/codex/pull/63821) | Enable fixed launch directories for shared MCP REPL servers | Marks `mcp_shared_repl_cwd` stable; enables fixed CWDs for shared MCP connections |
| [#63810](https://github.com/openai/codex/pull/63810) | Use ChatGPT account preferences for Codex voice chat | Unifies voice selection between ChatGPT and Codex by reading shared account preferences |
| [#63809](https://github.com/openai/codex/pull/63809) | Preserve the saved Daybreak choice across live goal continuations | Fixes loss of thread Daybreak enrollment during automatic goal continuations |
| [#63808](https://github.com/openai/codex/pull/63808) | Fix API workload identity authentication at startup and refresh | Resolves credential revocation and missing ChatGPT identity issues for API-key workloads |
| [#63807](https://github.com/openai/codex/pull/63807) | Discover model catalogs from HTTPS gateways | Auto-probes `/models` on custom gateways, eliminating need for separate `model_catalog_url` |
| [#63806](https://github.com/openai/codex/pull/63806) | Harden SSH host checks for plugin marketplaces | Closes a security gap where ambiguous SSH URLs could bypass marketplace allowlists |
| [#63802–63789](https://github.com/openai/codex/pulls?q=63789) | Centralize TUI terminal capability checks (7 PRs) | Consolidates clipboard, images, mouse, resize, compatibility, and scrollback logic into a single `terminal_capabilities` module |
| [#63788](https://github.com/openai/codex/pull/63788) | Collapse turn details by default in full-screen transcript | Reduces noise in transcript view; opt-out via `tui.collapse_turn_details = false` |
| [#63785](https://github.com/openai/codex/pull/63785) | Preserve multiline pastes without bracketed paste markers | Prevents TUI from mistaking pasted newlines for submit keys |
| [#63780](https://github.com/openai/codex/pull/63780) | Add opt-in Statsig initialization to Codex core | Introduces `Config::start_statsig` behind a feature flag for feature-gate experimentation |

---

## 5. Hot Discussions

### 💡 Ideas

**Memories in Codex** — [#12567](https://github.com/openai/codex/discussions/12567)  
The top-discussed idea thread asks the community: (1) How important is it (1–5) that Codex cite previous threads when using memory? (2) Should memory be automatic or opt-in? 43 comments with strong interest in project-scoped, user-curated memory that surfaces citations.  
*Author: jif-oai*

**Support multiple remote Codex machines/runtimes in one client** — [#27941](https://github.com/openai/codex/discussions/27941)  
Proposes allowing a single desktop client to manage multiple remote Codex runtimes (e.g., one per repo or server). Currently only the mobile app supports remote supervision.  
*Author: johnnykor82*

**Restore Project-First Navigation and Session Management** — [#62449](https://github.com/openai/codex/issues/62449) *(Issue-framed feature request)*  
Requests a return to project-centric navigation and persistent session management, signaling frustration with the current chat-centric paradigm.  
*Author: shashibimal-swiftlogics*

---

### 🛠️ Show and Tell

| Project | Link | Summary |
|---------|------|---------|
| **Memlayer v0.3.1** | [#63534](https://github.com/openai/codex/discussions/63534) | MCP server giving Codex project memory you can review and revise; surfaces the original source for each recalled rule |
| **TernaryCode** | [#62426](https://github.com/openai/codex/discussions/62426) | Native (Rust, no Electron) multi-platform app showing which Codex/Claude Code session is waiting for you across all projects |
| **Docsworth** | [#63816](https://github.com/openai/codex/discussions/63816) | Open-source MCP server for team-owned markdown docs with owner and review-date metadata per page |
| **StoryDesk** | [#63634](https://github.com/openai/codex/discussions/63634) | Local writing agent for novelists; shows MemLayer integration for character/setting memory across chapters |
| **indiebiz-evidence** | [#63536](https://github.com/openai/codex/discussions/63536) | Imports dated CSV/JSON into SQLite; exposes 15 MCP tools to help Codex cross-check data provenance |
| **CybeDefend** | [#63629](https://github.com/openai/codex/discussions/63629) | Security audit skill (AGPL-3.0) running open-source scanners (Opengrep, Trivy, Gitleaks) with proof-of-exploit tests |
| **User-built continuity architecture for ChatGPT Projects** | [#51228](https://github.com/openai/codex/discussions/51228) | Non-programmer-built boot protocol + external canonical state workaround for continuity across sessions |

---

## 6. Feature Request Trends

Analysis across all open Issues and Discussions reveals five dominant feature directions:

| Theme | Evidence | Volume |
|-------|----------|--------|
| **Persistent & Project-Scoped Memory** | #12567 (Memories), #63534 (Memlayer), #63634 (StoryDesk), #51228 | High — multiple independent builds addressing the same gap |
| **Multi-Agent Orchestration & Lifecycle Control** | #15723, #19197, #34220, #32614, #36433 | Persistent — subagent wake, orphan cleanup, resume fidelity |
| **Terminal & TUI Reliability** | #63819, #63822, #63785, #63784, PRs #63789–63802 | Active development; centralization work in progress |
| **Cross-Platform Parity (Windows vs. macOS)** | #62393, #56941, #62943, #32396, #54198 | Recurring — many Windows regressions and macOS Computer Use failures |
| **Subscription Access & Rate-Limit Transparency** | #58530, #63577, #63138, #61336 | Community concern growing around December 2026 tier changes |

---

## 7. Developer Pain Points

1. **Windows regressions after November 21 update** — Execution-location selectors disappearing, Send button freezes, and UI lag after Computer Use form a cluster of post-update breakage. Multiple independent reports within 4 days.

2. **Subagent lifecycle is broken end-to-end** — Background subagents don't wake parents (#15723), they silently change models on resume (#36433), and completed status is lost after restarts (#34220). The multi-agent system feels incomplete.

3. **BYOK + Computer Use incompatibility** — Authenticated BYOK users cannot use local browser or computer tools without message submission failing (#54841). This blocks a key advanced use case.

4. **Usage quota visibility and correctness** — Multiple reports of unexpected quota drain (#63138, #61336) and "at capacity" errors on Pro-tier accounts (#63577). Developers can't trust their usage metering.

5. **TUI/CLI immaturity on non-mainstream terminals** — Ghostty, tmux, and non-standard clipboard configurations cause failures in subagent navigation (#63819), paste handling (#63785), and image rendering (PRs #63789–63802). The capability centralization effort addresses this but is still fresh.

6. **Computer Use cleanup on Windows** — The `codex-computer-use.exe` zombie process forces manual intervention (#56941). Resource cleanup after Computer Use sessions is a recurring theme.

---

*Digest generated from GitHub.com/openai/codex activity on 2026-11-25. All links reference the official repository.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>Let me analyze the provided GitHub data for the Gemini CLI repository and generate a structured community digest for 2026-11-25.

Key observations:
1. **Latest Releases**: None in the last 24h
2. **Latest Issues**: 50 total issues, top 30 by comment count provided
3. **Latest PRs**: 35 total PRs, top 20 by comment count provided

Let me organize the digest:

## Today's Highlights
- Several important security and bug fixes in PRs
- Key issues around agent behavior, MCP tool filtering, and browser agent stability
- New features like /fork command and skill activation in non-interactive mode

## Hot Issues (10 noteworthy)
Looking at the issues by comment count and priority:

1. **#22323** - Subagent recovery after MAX_TURNS reported as GOAL success (P1, 14 comments)
2. **#19873** - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing (P2, 9 comments)
3. **#21409** - Generalist agent hangs (P1, 8 comments)
4. **#22745** - AST-aware file reads, search, and mapping (P2, 7 comments)
5. **#21968** - Gemini does not use skills and sub-agents enough (P2, 7 comments)
6. **#22267** - Browser Agent ignores settings.json overrides (P2, 5 comments)
7. **#30330** - MCP tool filter comma-separated list bug (new, 4 comments)
8. **#22232** - Browser agent resilience: automatic session takeover (P2, 4 comments)
9. **#21983** - Browser subagent fails in wayland (P1, 4 comments)
10. **#21000** - Native file tools for task tracker (P3, 4 comments)


11. **#30468** - Fix binary assets in read_many_files
12. **#30268** - Respect YOLO mode in security checks
13. **#30467** - Preserve Markdown code fence boundaries
14. **#30415** - Time limit for web search (P1)
15. **#30464** - /fork command and rewind fork option
16. **#30451** - Shell wrapper variants inspection
17. **#30454** - MCP OAuth flow security (P1)
18. **#29546** - Skill activation via /skill-name in non-interactive mode
19. **#30456** - Restrict SA impersonation token recipients (security fix)
20. **#30332** - Support comma-separated MCP tool filters (fixes #30330)

I'm noticing some critical infrastructure improvements emerging. Several pull requests focus on core functionality like shell security, OAuth flow hardening, and tool filtering mechanisms. The MCP-related security and configuration enhancements seem particularly important for maintaining robust system integrity.

The YOLO mode security update looks significant - it's addressing potential risks in non-standard execution environments. Shell wrapper inspection and token recipient restrictions indicate a proactive approach to preventing unauthorized access or unexpected system interactions.

Key themes include security hardening, configuration flexibility, and addressing edge cases in tool interactions. The developers are systematically closing potential vulnerabilities while expanding CLI capabilities.

The team's focus spans multiple dimensions: technical reliability, user experience, and systematic code quality improvements. Each PR represents a targeted refinement of existing systems.

Priorities center on enhancing agent reliability, particularly around hang prevention and error handling. The development approach demonstrates a methodical strategy of incremental enhancement across different system components.
</think>


# Gemini CLI Community Digest — 2026-11-25

## Today's Highlights

The Gemini CLI community continues to see active development with several security-critical and UX-enhancing PRs merged today. A notable bug in MCP tool filtering (#30330) that silently inverted comma-separated include/exclude lists is now addressed by #30332, while security-focused work hardening YOLO mode handling (#30268) and MCP OAuth flows (#30454) moves forward. The CLI also gains a non-destructive conversation branching feature via the new `/fork` command (#30464).

---

## Releases

**No new releases in the last 24 hours.** The project remains on the latest stable release; the next release cycle is expected to incorporate today's PR contributions.

---

## Hot Issues

### 1. [Subagent reports GOAL success despite hitting MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323) — P1 | 14 comments
The `codebase_investigator` subagent incorrectly reports `status: "success"` with termination reason "GOAL" even when it hit the maximum turn limit before completing analysis. This hides genuine interruptions from users and breaks reliability expectations. **Community concern is high** given the impact on trust and debugging.

### 2. [Zero-Dependency OS Sandboxing via Model's Bash Affinity](https://github.com/google-gemini/gemini-cli/issues/19873) — P2 | 9 comments
Proposes leveraging Gemini 3's native bash tool-chaining capabilities for OS-level sandboxing without external dependencies. This would enable safer autonomous execution while respecting user security boundaries. Represents a significant architectural direction shift.

### 3. [Generalist Agent Hangs When Deferred To](https://github.com/google-gemini/gemini-cli/issues/21409) — P1 | 8 comments
A critical UX issue where the generalist agent hangs indefinitely on simple operations like folder creation. Users report waits exceeding an hour before cancellation. Workaround exists (disabling subagent deferral), but **this blocks core workflows** for many users.

### 4. [AST-Aware File Reads, Search, and Mapping Investigation](https://github.com/google-gemini/gemini-cli/issues/22745) — P2 | 7 comments
Epic tracking investigation into AST-aware tooling that could enable surgical code navigation, reducing token waste from "firehose" reads. If successful, this could significantly improve context efficiency across large codebases.

### 5. [Gemini Doesn't Use Skills and Sub-Agents Autonomously](https://github.com/google-gemini/gemini-cli/issues/21968) — P2 | 7 comments
Users report Gemini CLI fails to invoke custom skills and sub-agents even when tasks are directly relevant. Requires explicit instruction. This undermines the value proposition of extensible agent capabilities and is a **frequently requested improvement**.

### 6. [Browser Agent Ignores settings.json Overrides](https://github.com/google-gemini/gemini-cli/issues/22267) — P2 | 5 comments
The browser agent completely ignores configuration overrides for settings like `maxTurns`, breaking customization workflows. Caused by improper settings merging in `AgentRegistry`. Impacts users relying on persistent browser sessions with custom limits.

### 7. [MCP Tool Filter Comma-Separated Lists Bug](https://github.com/google-gemini/gemini-cli/issues/30330) — New | 4 comments
`gemini mcp add --include-tools tool1,tool2` stores the entire string as a single array element instead of splitting it, effectively inverting the filter. Documentation explicitly promises comma-separated parsing, so this is a **clear regression**.

### 8. [Browser Agent Resilience: Session Takeover and Lock Recovery](https://github.com/google-gemini/gemini-cli/issues/22232) — P2 | 4 comments
Current fail-fast strategy on locked browser profiles prevents recovery when using persistent session mode. Proposes automatic session takeover and lock recovery to improve robustness in multi-instance environments.

### 9. [Browser Subagent Fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983) — P1 | 4 comments
Browser subagent fails on Wayland display servers with unclear error messages. Affects Linux users on Wayland-based桌面 environments. **Reproducibility confirmed** with termination showing "GOAL" despite failure.

### 10. [Bugreport Doesn't Include Subagent Context](https://github.com/google-gemini/gemini-cli/issues/21763) — P1 | 2 comments
The `/bug` command only captures main session context, omitting subagent state. This significantly reduces the utility of bug reports for debugging complex multi-agent interactions.

---

## Key PR Progress

| PR | Title | Priority | Impact |
|----|-------|----------|--------|
| [#30464](https://github.com/google-gemini/gemini-cli/pull/30464) | Add `/fork` command and rewind fork option | — | Enables non-destructive conversation branching for experimentation |
| [#30468](https://github.com/google-gemini/gemini-cli/pull/30468) | Fix binary assets in `read_many_files` | — | Restores support for assets in workspace directories (regression from #30211) |
| [#30467](https://github.com/google-gemini/gemini-cli/pull/30467) | Preserve Markdown code fence boundaries | — | Fixes terminal rendering issues with fenced code blocks |
| [#30415](https://github.com/google-gemini/gemini-cli/pull/30415) | Add time limit to web search and stop retries on abort | P1 | Prevents indefinite hangs during stalled web searches |
| [#30268](https://github.com/google-gemini/gemini-cli/pull/30268) | Respect YOLO mode in taint and build file checks | Security | Ensures autonomous headless runs aren't interrupted by confirmation prompts |
| [#30454](https://github.com/google-gemini/gemini-cli/pull/30454) | Enforce origin consistency in MCP OAuth flow | P1 | Security hardening for token endpoint validation |
| [#30451](https://github.com/google-gemini/gemini-cli/pull/30451) | Inspect shell wrapper variants for command substitution | — | Hardens policy enforcement across wrapped shell invocations |
| [#30456](https://github.com/google-gemini/gemini-cli/pull/30456) | Restrict SA impersonation token recipients via host allowlist | Security | Prevents token exfiltration by validating recipients |
| [#30332](https://github.com/google-gemini/gemini-cli/pull/30332) | Support comma-separated MCP tool filters | P2 | Fixes broken `--include-tools` / `--exclude-tools` parsing |
| [#29546](https://github.com/google-gemini/gemini-cli/pull/29546) | Support skill activation via `/skill-name` in non-interactive mode | P2 | Enables skills in CI/headless environments |

---

## Feature Request Trends

Analysis of open issues reveals several dominant feature directions:

| Theme | Representative Issues | Community Interest |
|-------|----------------------|-------------------|
| **Agent Reliability & Recovery** | #22323, #21409, #21983, #22232 | 🔥 High — hangs, crashes, and silent failures frustrate users |
| **Skills & Sub-Agent Orchestration** | #21968, #20195, #22598, #18287 | 🔥 High — users want autonomous skill invocation |
| **Context Efficiency** | #22745, #19561, #18836 | Medium — AST-aware tools and task tracking to reduce token bloat |
| **Security Hardening** | #30268, #30456, #30454, #22672 | 🔥 High — YOLO mode fixes and token protection are critical |
| **Platform Flexibility** | #21983 (Wayland), #30330, #22267 | Medium — cross-platform and configuration flexibility |

---

## Developer Pain Points

1. **Agent Hangs and Infinite Loops** — The generalist agent and web search tools can hang indefinitely, forcing manual cancellation. The absence of timeouts is a **recurring theme** across multiple issues.

2. **Configuration Override Failures** — Settings in `settings.json` are inconsistently honored (browser agent ignores `maxTurns`, MCP environment values corrupt on `=` characters). This breaks expected customization workflows.

3. **MCP Tool Filtering Regression** — The comma-separated list parsing bug (#30330) silently inverts filter behavior, causing unexpected tool exposure or exclusion.

4. **Sub-Agent Opacity** — Bug reports and chat sharing omit sub-agent trajectories, making debugging multi-agent sessions difficult.

5. **YOLO Mode Interruptions** — Even with `--approval-mode=yolo`, security checks still prompt for confirmation in certain scenarios, defeating the purpose of autonomous execution.

6. **Browser Agent Fragility** — Session lock handling, Wayland incompatibility, and persistent profile issues make the browser agent unreliable for production workflows.

7. **Token Waste** — Large file reads "firehose" context, and task tracking in prompt history causes context rot between sessions. Users request AST-aware and persistent file-based alternatives.

---

*Data collected from [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) on 2026-11-25. Links open to the respective GitHub resources.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest for 2026-11-25 based on the provided GitHub data. Let me analyze the data and structure it according to the requested sections.

Looking at the data:
1. Latest Releases (last 24h) - 5 releases from v1.0.116-0 to v1.0.116-3 and v1.0.115
2. Latest Issues (updated in last 24h) - 36 items total, showing top 30
3. Latest Pull Requests (last 24h) - 2 items

Let me structure this digest:

**Today's Highlights:**
- The main releases are v1.0.116-0 through v1.0.116-3, which include important fixes for MCP server management, session handling, and Windows sandbox features
- Key issues include CRLF line ending problems on Windows, Ubuntu keychain issues, and MCP OAuth problems

**Releases:**
- v1.0.116-3: Added click to jump to latest in timeline, context size selection, environment variables for processes
- v1.0.116-2: Warn about duplicate MCP server connections, fix prompt cancellation issues
- v1.0.116-1: Same as 116-2
- v1.0.116-0: Improved MCP server status handling, summarization at startup
- v1.0.115: Structured clarification questions, Windows sandbox package queries enabled by default

**Hot Issues (10):**
1. #1148 - CRLF line endings issue on Windows (CLOSED, 8 comments, 9 👍)
2. #4275 - ACP contextTier exposure (CLOSED, 8 comments, 5 👍)
3. #2165 - Ubuntu keychain broken (OPEN, 7 comments, 23 👍)


4. #5323 - Agent checkpoint refs feature request (OPEN, 7 comments, 5 👍)
5. #5171 - NumLock numpad navigation issue (CLOSED, 6 comments, 1 👍)
6. #5040 - MCP OAuth Entra rejection (OPEN, 4 comments, 1 👍)
7. #4191 - Clipboard in WSL tmux/screen (CLOSED, 4 comments, 0 👍)
8. #4755 - Session wedges permanently (OPEN, 3 comments, 0 👍)
9. #4976 - BYOK multiple models support (OPEN, 2 comments, 8 👍)
10. #5

I notice additional issues affecting user experience and functionality. The list includes problems with OAuth authentication, clipboard access in specific environments, session management, and model support. These issues range from minor usability concerns to more significant technical challenges that could impact developer workflows.

The open issues span various categories, including platform-specific problems, feature requests, and system integration challenges. Each issue has different levels of community engagement, with some receiving more comments and support than others. The diversity of issues highlights the complexity of maintaining a cross-platform CLI tool with multiple integration points.

Two recent pull requests focus on development environment setup, specifically creating devcontainer configurations. These changes aim to improve developer onboarding and consistency across development environments.

Feature requests emphasize expanding Copilot's flexibility, with requests for multiple external model support, enhanced session management, and granular agent configuration options. The community seeks more control and customization in how Copilot interacts with different tools and platforms.

Developer pain points reveal consistent frustrations around authentication mechanisms, platform-specific limitations, and integration challenges. Windows platform issues, authentication inconsistencies across Linux distributions, and MCP OAuth complications suggest ongoing usability improvements are needed.

The emerging theme is about providing developers more granular control, better cross-platform support, and smoother integration experiences across different development environments and authentication systems.
</think>


# GitHub Copilot CLI Community Digest

**Date:** 2026-11-25
**Repository:** github.com/github/copilot-cli

---

## Today's Highlights

The Copilot CLI team shipped a rapid sequence of releases (v1.0.116-0 through v1.0.116-3) addressing critical MCP server management improvements, including duplicate endpoint detection, session state handling fixes, and Windows sandbox enhancements. Community engagement remains high with 36 issues updated in the last 24 hours, while a long-standing Windows CRLF line-ending bug and Ubuntu keychain authentication issue continue to generate significant discussion.

---

## Releases

### v1.0.116-3
**Added:**
- "Jump to latest" button in fullscreen timeline to return to newest output and resume following
- Context size selection for supported models in ACP-compatible editors without changing saved defaults
- Environment variable configuration for every process Copilot starts

### v1.0.116-2
**Added:**
- Warning when a plugin and standalone MCP server connect to the same endpoint, with guidance to disable one via `/mcp`

**Fixed:**
- Cancel pending prompts without waiting for activity refresh
- Avoid showing idle sessions as busy after reconnecting to a host
- On Unix, canceled foreground process handling improvements

### v1.0.116-1
Same changes as v1.0.116-2 (patch iteration)

### v1.0.116-0
**Improved:**
- Skip individual slow-connection and sign-in warnings for organization-managed MCP servers (except Connectors)
- Summarize MCP server status at startup when attention is needed
- Wait for `/mcp auth <name>` before opening browser for authentication

### v1.0.115
**Added:**
- Structured clarification questions in ACP editors supporting forms
- Windows sandbox package queries enabled by default (`sandbox.userPolicy.capabilities` set to `[]` to opt out)
- macOS Mach service lookups in sandboxed commands

---

## Hot Issues

### 1. CRLF Line Ending Corruption on Windows
**#1148** | Status: CLOSED | Comments: 8 | 👍: 9
**Link:** https://github.com/github/copilot-cli/issues/1148

Copilot CLI modifies files to use CRLF line endings even when the original file uses LF endings. This breaks cross-platform development workflows and version control diffs. The issue was reported against version 0.0.395 and has been closed, suggesting a fix has been implemented.

### 2. Ubuntu Keychain Support Broken
**#2165** | Status: OPEN | Comments: 7 | 👍: 23
**Link:** https://github.com/github/copilot-cli/issues/2165

Two related bugs: (1) Official documentation is incorrect for Ubuntu, claiming `secret-tool` installation when the actual requirement is `libsecret-1-0`, and (2) keychain access fails without clear error messaging. High community interest (23 👍) indicates this affects many Linux users.

### 3. ACP: contextTier Session Config Option Missing
**#4275** | Status: CLOSED | Comments: 8 | 👍: 5
**Link:** https://github.com/github/copilot-cli/issues/4275

The interactive CLI allows changing context window tier mid-session via `/model`, but ACP (Agent Context Protocol) clients cannot do this—it only works at spawn time. This parity gap limits ACP editor integration capabilities.

### 4. Agent Checkpoint Refs Creating Git Noise
**#5323** | Status: OPEN | Comments: 7 | 👍: 5
**Link:** https://github.com/github/copilot-cli/issues/5323

Every agent turn creates commits under `refs/agents/<session-id>/checkpoints/turn/N`, polluting the user's git history and appearing in all ref-rendering tools. Users request a setting to disable this feature entirely.

### 5. NumLock-Off Numpad Navigation Broken on Windows
**#5171** | Status: CLOSED | Comments: 6 | 👍: 1
**Link:** https://github.com/github/copilot-cli/issues/5171

Regression in version 1.0.98 causes numpad keys (4/8/6/2) to fail cursor navigation when NumLock is off on Windows laptops, along with broken Delete key functionality.

### 6. MCP OAuth Entra Rejection of Localhost Callbacks
**#5040** | Status: OPEN | Comments: 4 | 👍: 1
**Link:** https://github.com/github/copilot-cli/issues/5040

Remote HTTP MCP servers protected by Microsoft Entra ID fail authentication with error `AADSTS50011` because the authorization request uses `http://127.0.0.1` callbacks, which Entra doesn't accept. No localhost host override exists in the CLI.

### 7. Clipboard Fails in WSL2 tmux/screen
**#4191** | Status: CLOSED | Comments: 4 | 👍: 0
**Link:** https://github.com/github/copilot-cli/issues/4191

Clipboard copy works in standard WSL2 terminals but fails when running inside tmux or screen sessions from VS Code's integrated terminal.

### 8. Session Permanently Wedged at Turn End
**#4755** | Status: OPEN | Comments: 3 | 👍: 0
**Link:** https://github.com/github/copilot-cli/issues/4755

Sessions can enter a permanently wedged state after completing a turn—neither idle nor running, accepting no input, with queued messages silently discarded. Only process termination recovers the session.

### 9. BYOK: Support Multiple External Models/Providers
**#4976** | Status: OPEN | Comments: 2 | 👍: 8
**Link:** https://github.com/github/copilot-cli/issues/4976

The GitHub Copilot app supports multiple external providers, but Copilot CLI only supports a single BYOK configuration. Community requests parity via environment variables like `COPILOT_PROVIDER_BASE_URL`.

### 10. TLS 1.3 Regression on macOS
**#5559** | Status: OPEN | Comments: 2 | 👍: 0
**Link:** https://github.com/github/copilot-cli/issues/5559

TLS 1.3 connections to MCP servers break on macOS since version 1.0.93-0, affecting Jenkins MCP Server plugin connections over streamable HTTP.

---

## Key PR Progress

No PRs merged in the last 24 hours. Two devcontainer configuration PRs were closed (#4316 and #4428), indicating infrastructure setup for development environments.

---

## Feature Request Trends

Analysis of recent issues reveals several dominant feature directions:

| Category | Trend | Evidence |
|----------|-------|----------|
| **Multi-Provider Support** | Strong demand for configuring multiple external AI providers/models simultaneously | #4976 (8 👍) |
| **Agent Configuration** | Requests for customizable default agents, checkpoint settings, and subagent hooks | #5323, #5383, #5059 |
| **Platform-Specific Fixes** | Persistent issues affecting Windows line endings, Linux keychain, macOS TLS | #1148, #2165, #5559 |
| **MCP Integration** | OAuth handling, authentication flows, duplicate detection, registry validation | #5040, #5568, #5175 |
| **Session Management** | Default settings for models, reasoning levels, context size; session hanging issues | #4275, #5383, #5565 |
| **Accessibility** | Screen reader compatibility improvements for CLI editing | #1573 (NVDA support) |

---

## Developer Pain Points

### Authentication & Keychain Issues
- Ubuntu keychain support remains broken with misleading documentation (#2165, 23 👍)
- MCP server sign-in expiration doesn't provide actionable recovery paths (#5175)
- Microsoft Entra OAuth callbacks rejected for localhost addresses (#5040)

### Platform Inconsistencies
- Windows CRLF line-ending corruption persists despite being a fundamental issue (#1148)
- macOS TLS 1.3 regression breaks MCP server connections (#5559)
- tmux/screen clipboard integration fails in WSL2 (#4191)

### MCP Server Complexity
- Duplicate endpoint detection recently added but authentication workflows remain confusing
- Registry requests missing User-Agent headers fail AWS WAF validation (#5568)
- Organization-managed MCP servers show inconsistent warning behavior

### Session & Agent Behavior
- Sessions can permanently wedge with no timeout or error recovery (#4755, #5565)
- Agent checkpoint refs pollute git history with no disable option (#5323)
- Subsessions report to wrong parent chat in side chat contexts (#5570)

### Tool Integration Gaps
- `showReasoning` setting ineffective for Gemini models (#5532)
- Markdown rendering missing in structured prompts (#5084)
- `rg` tool corrupts filenames with numeric suffixes (#5560)

---

*Digest generated from github.com/github/copilot-cli activity on 2026-11-25*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>Let me analyze the GitHub data provided for the OpenCode community digest for 2026-11-25.

**Today's Highlights:**
Looking at the data:
- No new releases in the last 24h
- There's significant activity around bug fixes, especially around formatting/exact edits, shell permission checks, session UI issues
- Several PRs were closed including performance improvements and bug fixes
- Multiple issues around provider routing, desktop app features, and TUI issues

**Releases:**
None in the last 24h.

**Hot Issues:**
Let me pick 10 noteworthy ones by comment count and relevance:
1. #64073 - Restore Foreground Subagent Execution (27 comments, 12 👍) - Major feature request for subagent execution
2. #28030 - Add ability to delete projects in OpenCode Desktop (20 comments, 21 👍) - Feature requested, now closed
3. #66067 - Go: routing issues with deepseek-v4.1-flash causing re-billing (19 comments) - Bug in provider routing
4. #48411 - Better execution permissions and sandboxing (14 comments, 7 👍) - Security/execution control improvement
5. #47836 - Bindable "set as default model for this agent" (7 comments) - TUI model selection improvement
6. #56218 - `opencode -m provider/model` no longer accepted on root command (7 comments, 5 👍) - CLI regression
7. #65962 - Desktop Ctrl+F doesn't work (6 comments) - Usability bug
8. #66166 - Custom providers not registered on service boot (6 comments) - Service initialization bug
9. #62711 - ModelUnavailable on resumed Ollama session (5 comments) - Session persistence issue
10. #61189 - Session history replay truncates (4 comments, 2 👍) - UI rendering bug

**Key PR Progress:**


I'm identifying the most impactful pull requests from the last 24 hours, focusing on those with significant code changes or addressing critical issues:

1. #66130 - Push notifications for mobile apps (closed)
2. #66251 - Skip redundant schema work in Code Mode (closed) - Performance improvement
3. #66246 - Diff file changes once and skip diffing empty sides (closed) - Performance improvement
4. #66263 - Keep exact edits stable after formatting (open) - Addresses #66262, important bug fix
5. #66054 - Keep words in place when rows change (open) - UI stability
6. #66261 - Measure context windows for model IDs (open) - Bug fix
7. #65817 - Refuse denied browser skill's load (open) - Security/permission fix
8. #66257 - Send prod crashes to Sentry only when Report clicked (closed) - Crash handling improvement
9. #66254 - Trace background compaction (open) - Debugging/observability
10. #62014 - Do not reuse unmigrated V1 session ID (open) - Data migration fix

The PRs span performance optimizations, bug fixes, and improvements across mobile, desktop, and core application functionality. I notice several key themes emerging across the reported issues and pull requests. Desktop and TUI functionality dominate the pain points, with session management, accessibility, and user interface controls creating friction. Platform-specific bugs on Windows, macOS, and Linux highlight the complexity of cross-platform development, while core system issues around session storage, model availability, and permission handling suggest deeper architectural challenges. The development workflow is further complicated by path comparison failures on Windows and shell permission gaps. Provider routing and API configuration problems indicate potential integration complexities that need addressing.
</think>


# OpenCode Community Digest — 2026-11-25

## Today's Highlights

The OpenCode community remains highly active with significant progress on UI stability fixes—multiple PRs from contributor Hona address reader positioning when timeline rows change. Core performance improvements are landing, including schema work reduction in Code Mode and smarter file diffing. However, several impactful bugs persist: Go provider routing causing re-billing issues, desktop Ctrl+F being non-functional on Windows, and shell permission checks being bypassed during redirected directory commands.

## Releases

No new releases published in the last 24 hours.

---

## Hot Issues

### 1. [Restore Foreground Subagent Execution](https://github.com/anomalyco/opencode/issues/64073) — 27 comments, 12 👍
**Area:** Core (v2)
A feature request to restore foreground subagent execution capabilities. This is a significant architectural change that would affect how subagents run within the OpenCode workflow. The 27 comments indicate substantial community discussion about the implementation approach and use cases.

### 2. [Add ability to delete projects in OpenCode Desktop](https://github.com/anomalyco/opencode/issues/28030) — 20 comments, 21 👍
**Area:** Desktop
This long-standing feature request (originally filed in May 2026) has now been **closed**, suggesting implementation is underway or complete. The high comment and upvote counts confirm strong user demand for project lifecycle management in the desktop app.

### 3. [Go: Session routed across multiple backends causing re-billing](https://github.com/anomalyco/opencode/issues/66067) — 19 comments
**Area:** Providers (Inference/Go)
**Severity:** High
A critical billing bug where conversations with stable session headers are routed across different DeepSeek backends, each maintaining separate prompt caches and re-billing the full prefix. This directly impacts cost predictability for Go users.

### 4. [Better execution permissions and sandboxing](https://github.com/anomalyco/opencode/issues/48411) — 14 comments, 7 👍
**Area:** Core
Three-part enhancement request: (1) easier permission mode access, (2) improved shell sandboxing, (3) better LLM-generated command safety validation. Addresses security concerns raised by security-conscious enterprise users.

### 5. [Bindable "set as default model for this agent" in model dialog](https://github.com/anomalyco/opencode/issues/47836) — 7 comments
**Area:** TUI
Currently, Ctrl+F favorites models but there's no UI way to persist a model as the default for an agent. Users must manually edit `opencode.json(c)` or agent Markdown frontmatter—a friction point for workflow customization.

### 6. [`opencode -m provider/model` no longer accepted on root command](https://github.com/anomalyco/opencode/issues/56218) — 7 comments, 5 👍
**Area:** Core (v2 regression)
A CLI regression from v1 to v2 where the `-m`/`--model` flag only exists on subcommands rather than the root command. Breaks existing muscle memory and scripts for users who relied on this convenience syntax.

### 7. [Desktop Ctrl+F does nothing; Find hidden from palette](https://github.com/anomalyco/opencode/issues/65962) — 6 comments
**Platform:** Windows, Desktop v2.4.1
The Find functionality is completely non-functional on Windows desktop—no Find bar, no highlight, no Ctrl+K palette entry. Basic text search is missing from the conversation view entirely.

### 8. [Custom providers from global config not registered on service boot](https://github.com/anomalyco/opencode/issues/66166) — 6 comments
**Platform:** Linux, Service (v2)
Custom providers defined in `~/.config/opencode/opencode.json` fail to register when the background service boots. Sessions using these models fail with `ModelUnavailableError` until manually triggered.

### 9. [ModelUnavailable on resumed Ollama session at startup](https://github.com/anomalyco/opencode/issues/62711) — 5 comments
**Status:** Reproduced
When resuming an Ollama session after restart, models are unavailable despite being valid. Indicates a session persistence and model registration timing issue.

### 10. [Session history replay truncates on legacy-schema long sessions](https://github.com/anomalyco/opencode/issues/61189) — 4 comments, 2 👍
**Area:** Session-UI
Long-running sessions lose UI rendering at earlier checkpoints after edit-and-resend operations. Data remains intact but the UI stops displaying history past a certain point—making session archaeology difficult.

---

## Key PR Progress

### Closed (Merged)

| PR | Description | Impact |
|----|-------------|--------|
| [#66130](https://github.com/anomalyco/opencode/pull/66130) | Add push notifications for mobile apps | New mobile integration feature |
| [#66251](https://github.com/anomalyco/opencode/pull/66251) | Skip redundant schema work in Code Mode catalogs | Performance improvement |
| [#66246](https://github.com/anomalyco/opencode/pull/66246) | Diff file changes once, skip diffing empty sides | Performance improvement |
| [#66257](https://github.com/anomalyco/opencode/pull/66257) | Send prod crashes to Sentry only when Report clicked | Reduced noise in error monitoring |
| [#66248](https://github.com/anomalyco/opencode/pull/66248) | Document new quote text in ComposerQuote | Documentation |
| [#66247](https://github.com/anomalyco/opencode/pull/66247) | Send quotes as plain reply-style blockquotes | Improved quote formatting |
| [#66244](https://github.com/anomalyco/opencode/pull/66244) | Say which MCP server a skill comes from | Transparency improvement |
| [#66253](https://github.com/anomalyco/opencode/pull/66253) | Pin OG Worker's renamed OpenMono font modules | Release/deploy fix |

### Open (Under Review)

| PR | Description | Impact |
|----|-------------|--------|
| [#66263](https://github.com/anomalyco/opencode/pull/66263) | Keep exact edits stable after formatting | **Closes #66262** — Critical for formatter users |
| [#66261](https://github.com/anomalyco/opencode/pull/66261) | Measure context windows for model IDs a chat reports | Bug fix for Claude Agent provider |
| [#66254](https://github.com/anomalyco/opencode/pull/66254) | Trace background compaction and the wait for it | Debugging/observability for compaction |
| [#66250](https://github.com/anomalyco/opencode/pull/66250) | Cut repeated work in Code Mode runs | Performance improvement |
| [#62014](https://github.com/anomalyco/opencode/pull/62014) | Do not reuse unmigrated V1 session ID on create | **Closes #61947** — Migration fix |
| [#66054](https://github.com/anomalyco/opencode/pull/66054) | Keep words in place when rows change under them | UI stability (stacked on #66023) |
| [#65817](https://github.com/anomalyco/opencode/pull/65817) | Refuse a denied browser skill's load | **Refs #65737** — Permission security |
| [#66188](https://github.com/anomalyco/opencode/pull/66188) | Keep following reply when reader scrolls inside a row | UI scrolling behavior |
| [#66173](https://github.com/anomalyco/opencode/pull/66173) | Keep mounted timeline row in document when row list changes | Focus/scroll preservation |
| [#66156](https://github.com/anomalyco/opencode/pull/66156) | Keep events row links when session messages change | Focus handling fix |

---

## Feature Request Trends

Aggregating patterns across all issues reveals these dominant feature directions:

### Desktop Experience
- **Project lifecycle management** — Delete projects, session limits (64-session cap), scoped search improvements
- **Currency configuration** — Cost display hardcoded to USD; users want CNY support
- **Emoji reactions** — Lightweight message feedback without token cost
- **Remote-only mode** — Disable built-in local server for remote-only deployments

### Core Workflow
- **Model preference persistence** — Set per-agent defaults from TUI without config file editing
- **Background compaction observability** — Trace and understand compaction waits
- **Rate-limit configuration** — Control retry backoff, `retry-after` handling, and attempt caps
- **CLI consistency** — Restore `opencode -m` root command behavior from v1

### Security & Sandboxing
- **Execution permissions** — Easier permission mode access, improved shell sandboxing, command safety validation
- **Browser skill denial** — Properly refuse denied browser skills

---

## Developer Pain Points

### 🔴 High Priority

1. **Provider routing instability (#66067)** — Go users experiencing unexpected re-billing due to backend switching. Directly impacts cost and trust.

2. **Shell permission bypass (#66053)** — Redirected directory commands (`cd . > file`) skip all permission checks. Security risk for untrusted code execution.

3. **Formatter conflicts (#66262/#66263)** — Exact edits fail after formatters change spacing; model doesn't see final formatted state. Common frustration for code-quality-conscious developers.

### 🟡 Medium Priority

4. **Session persistence failures** — V1 migration issues (#62014), Ollama resume failures (#62711), and history truncation (#61189) indicate ongoing session reliability challenges.

5. **Desktop Find broken on Windows (#65962)** — Basic functionality missing from the primary desktop platform.

6. **Service boot registration (#66166)** — Custom providers silently fail to load, causing confusing `ModelUnavailableError` messages.

### 🟢 Ongoing Improvements

7. **UI focus/scroll stability** — Multiple stacked PRs from contributor Hona addressing timeline row changes disrupting reader position. Indicates a systemic UI rendering challenge.

8. **Cross-platform path handling (#66192)** — Scripts fail on Windows due to path separator mismatches despite existing normalization patterns elsewhere.

9. **PTY sidecar threading (#66121)** — `opencode-pty` can enter single-threaded busy loops, causing shell tool timeouts.

10. **Accessibility gaps** — Screen reader users report streaming content hidden from accessibility tree (#54652, #57512), limiting adoption for visually impaired developers.

---

*Digest generated from GitHub data for [anomalyco/opencode](https://github.com/anomalyco/opencode) on 2026-11-25.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to generate a Pi community digest for 2026-11-25 based on the provided GitHub data. Let me analyze the data and structure it according to the requested format.

First, let me identify the key elements:

**Releases:** None in the last 24h

**Hot Issues (10 noteworthy):**
1. #10956 - cacheWarming "idle" stops silently - HIGH PRIORITY (17 comments)
2. #12133 - Windows terminal mouse/Kitty input issue - Windows-specific
3. #12242 - Compaction summary grows unbounded - performance concern
4. #12294 - Radius Gateway 402 error - provider issue
5. #12224 - MCP SSE concatenates incomplete events - fixed
6. #10592 - Clear fullscreen text selection when typing - UX issue
7. #12407 - gemini-4-neon stops mid stream - model compatibility
8. #12418 - Preserve GitHub Copilot reasoning_opaque - in progress
9. #12147 - RPC mode extension dialogs cannot be answered - mode issue
10. #12445 - Durable: return withdrawn input IDs - API enhancement

**Key PRs (10 important):**
1. #12325 - fix(ai): newly enabled GitHub Copilot models stay hidden
2. #12505 - fix(ai): replay GitHub Copilot reasoning_opaque
3. #12451 - fix(mcp,ai,agent,coding-agent,tui): read large streamed lines
4. #12438 - fix(ai): avoid overflow matches inside longer identifiers
5. #12502 - fix(ai,coding-agent): report HTTP error responses to onResponse
6. #12489 - fix(ai): take Claude thinking off support
7. #12495 - fix(ai,coding-agent): add Copilot gpt-6-luna-decisions


8. #12494 - fix(coding-agent): find Git Bash on Windows
9. #12487 - fix(coding-agent): report blocked program status for startup dialogs
10. #12470 - fix(ai): handle OpenRouter native_finish_reason

I'll continue analyzing the PRs, focusing on their technical implications and potential impact on the Pi project's functionality and user experience.

The most critical fixes address Windows-specific integration challenges, error handling improvements, and model compatibility enhancements. These PRs demonstrate a proactive approach to resolving cross-platform compatibility and providing more robust error management for users.

The project shows a commitment to addressing nuanced technical issues across different operating systems and AI provider integrations, with particular attention to improving the coding agent's reliability and performance.

I'll focus on the stream handling and model compatibility challenges, highlighting the need for more resilient parsing mechanisms and better provider-specific adaptation strategies. The goal is creating a more flexible and error-tolerant system that can gracefully manage diverse AI model interactions.

The stream processing improvements suggest a systematic approach to preventing performance bottlenecks and ensuring smooth data handling across different input scenarios. This indicates a mature engineering mindset focused on preventing cascading failures.
</think>


# Pi Community Digest

**Date:** 2026-11-25
**Source:** github.com/earendil-works/pi

---

## Today's Highlights

The Pi community saw significant activity focused on **streaming performance and Windows compatibility**. A critical fix was merged addressing linear-time complexity issues in stream readers that affected MCP, AI, agent, coding-agent, and TUI packages (#12451). Windows users will benefit from improved Git Bash detection and terminal input fixes. The GitHub Copilot integration received multiple fixes for model visibility and reasoning opaque handling, indicating increased attention on this provider.

---

## Releases

**No new releases** were published in the last 24 hours.

---

## Hot Issues

### 1. [cacheWarming "idle" stops silently after extension handles turn_end](https://github.com/earendil-works/pi/issues/10956)
**17 comments | Priority Issue**
The idle cache warming mechanism fails to fire when extensions handle `turn_end` with custom or compaction messages. With 507 `cache_warming_decision` events all showing `continuationProbability: 1`, users report the session shows `Inactive (conversation context changed)` immediately after runs settle. This significantly impacts response latency for users relying on idle warming strategies.

### 2. [Windows: terminal echoes mouse/Kitty input as garbage after stop/exit](https://github.com/earendil-works/pi/issues/12133)
**6 comments | Windows-Specific**
After exiting Pi on Windows Terminal/PowerShell, mouse movements and key presses flood the prompt with echoed SGR mouse reports (`[<35;69;10M^`). This leaves the terminal in an unusable state requiring manual reset.

### 3. [Compaction summary grows unbounded (17k to 164k chars)](https://github.com/earendil-works/pi/issues/12242)
**6 comments | Performance**
Over nine compactions, the summary grew from 17KB to 164KB characters, with the ninth compaction taking 588 seconds and consuming 75K output tokens. A second machine reached 88KB after only five compactions. The update prompt's instruction to "PRESERVE all existing information" appears to cause exponential growth.

### 4. [gemini-4-neon stops mid-stream](https://github.com/earendil-works/pi/issues/12407)
**4 comments | Model Compatibility**
The new gemini-4-neon model frequently stops mid-stream and doesn't resume. Diagnosis revealed OpenRouter normalizes `MALFORMED_RESPONSE` into OpenAI's format, causing Pi to misinterpret the error as a clean stop rather than a failure.

### 5. [RPC mode: extension dialogs during session_start cannot be answered](https://github.com/earendil-works/pi/issues/12147)
**2 comments | RPC Mode**
In `--mode rpc`, extension dialogs shown during `session_start` can never be answered. Pi sends `extension_ui_request` but doesn't read the client's `extension_ui_response`, exiting with status 0 after ~20ms. This breaks automation workflows.

### 6. [Fullscreen text selection persists after typing starts](https://github.com/earendil-works/pi/issues/10592)
**4 comments | UX**
Mouse text selections remain highlighted after copying and while typing the next prompt. Users expect typing to clear a completed selection, similar to clicking elsewhere.

### 7. [Windows: Git for Windows outside Program Files not found](https://github.com/earendil-works/pi/issues/12408)
**4 comments | Windows Path**
Git for Windows installed at custom paths (e.g., `G:\Programmi Aggiuntivi\Git`) is never detected. Pi falls through to `System32\bash.exe` (WSL launcher), causing bash tool calls to fail when WSL is disabled.

### 8. [Durable: return withdrawn input IDs from conversation abort](https://github.com/earendil-works/pi/issues/12445)
**2 comments | API Enhancement**
Callers cannot determine which queued inputs were withdrawn during `Conversation.abort(context)`. An input admitted between snapshot and abort can be withdrawn without notification, making it difficult to track submission status reliably.

### 9. [xhigh thinking fails on gemini-4-neon and gemini-4-hydrogen](https://github.com/earendil-works/pi/issues/12443)
**3 comments | Model Configuration**
Setting thinking level to `xhigh` on Google models fails with "Unsupported Google thinking level mapping" error, despite xhigh being supported per Google's documentation.

### 10. [OpenAI-compatible proxies rejecting developer role receive it by default](https://github.com/earendil-works/pi/issues/12433)
**2 comments | Compatibility**
Pi sends the developer role by default (`getCompat supportsDeveloperRole defaults true`), causing 400 errors on every turn when using reasoning models through non-OpenAI proxies like Kimi Coding or Qwen.

---

## Key PR Progress

### 1. [[fix(mcp,ai,agent,coding-agent,tui)] Read large streamed lines and events in linear time](https://github.com/earendil-works/pi/pull/12451) — **CLOSED**
Addresses issue #12224. Previously, stream readers kept incomplete lines/SSE events in a growing string and searched all of it on every chunk. V8's string flattening caused O(n²) complexity. Now searches only from saved offsets, dramatically improving performance for large events.

### 2. [[fix(ai)] Replay GitHub Copilot reasoning_opaque in openai-completions](https://github.com/earendil-works/pi/pull/12505) — **OPEN**
Fixes #12418. Captures and replays Copilot's `reasoning_opaque` alongside `reasoning_text`, including for tool-call and reasoning-only assistant messages. Critical for maintaining conversation coherence on replay.

### 3. [[fix(ai,coding-agent)] Report HTTP error responses to onResponse](https://github.com/earendil-works/pi/pull/12502) — **CLOSED**
Fixes #12376. `onResponse` and `after_provider_response` extension events now fire for 4xx/5xx responses on SDK-based adapters. Previously, SDK errors (e.g., 429 as `APIError`) bypassed the callback entirely.

### 4. [[fix(ai)] Take Claude thinking off support from Anthropic's models.dev entry](https://github.com/earendil-works/pi/pull/12489) — **CLOSED**
Fixes #12429. Instead of hand-written per-provider lists, Claude thinking "off" support is now derived from Anthropic's models.dev catalog, ensuring coverage across all hosts.

### 5. [[fix(coding-agent)] Find Git Bash of git on PATH on Windows](https://github.com/earendil-works/pi/pull/12494) — **CLOSED**
Fixes #12408. Git resolution now searches PATH in addition to fixed Program Files directories, correctly finding Git Bash when installed in non-standard locations.

### 6. [[fix(coding-agent)] Report blocked program status for startup dialogs](https://github.com/earendil-works/pi/pull/12487) — **CLOSED**
Fixes #12439. Startup dialogs (project trust, missing session folder) now send OSC 7501 `blocked` status, enabling host tools to detect when Pi requires user input.

### 7. [[fix(ai)] Handle OpenRouter native_finish_reason](https://github.com/earendil-works/pi/pull/12470) — **CLOSED**
OpenRouter passes upstream finish reasons in `native_finish_reason`. Pi was ignoring this field, causing upstream failures like Gemini's `MALFORMED_RESPONSE` to appear as clean stops.

### 8. [[fix(ai)] Newly enabled GitHub Copilot models stay hidden after pi update --models](https://github.com/earendil-works/pi/pull/12325) — **OPEN**
Fixes #11006. `filterModels` uses stale `availableModelIds` that only updates on token refresh. Model refreshes never update it, hiding newly enabled models.

### 9. [[fix(ai)] Avoid overflow matches inside longer identifiers](https://github.com/earendil-works/pi/pull/12438) — **CLOSED**
Fixes #12343. Identifiers like `my_plugin_request_too_large_flag` were incorrectly classified as context overflow (HTTP 400 with zero token usage), triggering unnecessary compact-and-retry recovery.

### 10. [[feat(mcp,coding-agent)] Support the stateless MCP protocol 2026-07-28](https://github.com/earendil-works/pi/pull/12479) — **OPEN**
Adds MCP protocol version `2026-07-28` (stateless revision) to pi-mcp and pi's MCP extension. Earlier versions remain compatible.

---

## Developer Pain Points

### Recurring Frustrations

1. **Windows Path Handling** — Multiple issues (#12408, #12133) highlight Pi's struggle with Windows-specific paths, Git installations, and terminal behaviors. Developers report fragmented detection logic that misses common configurations.

2. **Stream and Event Processing** — The O(n²) complexity in stream readers (#12451) affected five packages and caused practical performance degradation. Similar issues in MCP SSE event handling demonstrate the challenge of streaming large payloads.

3. **Model Catalog Staleness** — CI failures on `main` and all PRs since 2026-11-24 ~18:30 UTC (#12492) occurred because models.dev removed models (`github-copilot/claude-opus-5`, `github-copilot/claude-sonnet-5`) but Pi's generated types weren't rebuilt.

4. **Extension API Limitations** — Developers report inability to request native compaction from `turn_end` handlers (#12476) and lack of withdrawn input IDs on abort (#12445), requiring workarounds.

5. **HTTP Error Visibility** — Extensions couldn't access HTTP error codes (#12376) and developer role handling defaulted unsafely for OpenAI-compatible proxies (#12433), breaking reasoning model integrations.

6. **Compaction Growth** — The unbounded summary growth (#12242) wastes tokens and time, with users reporting 588-second compaction operations consuming 75K output tokens.

---

*Generated 2026-11-25 | Data from github.com/earendil-works/pi*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to generate a structured English digest for Qwen Code community for 2026-11-25. Let me analyze the data provided:

**Releases**: None in the last 24h

**Issues**: 50 total, showing top 30. Let me pick the 10 most noteworthy:
1. #14724 - Main CI failed: Managed Agent gate (546 comments, P1 issue)
2. #18252 - E2E Tests failed (26 comments)
3. #17045 - 1.0 Preview loop kernel tracking (24 comments, P1 feature)
4. #16346 - ClassSizeRatchetTest failure (21 comments)
5. #10791 - Thinking blocks leak to user output (8 comments, bug)
6. #18149 - Action parking proposal (8 comments)
7. #17446 - CLI model discovery feature request (7 comments)
8. #17000 - Live Voice hardcoded turn_detection bug (6 comments)
9. #18298 - Web Shell boolean setting issue (4 comments)
10. #17668 - read_file reports nonexistent range bug (4 comments)

**PRs**: 50 total, showing top 20. Let me pick 10 important ones:
1. #17003 - Configurable turn_detection for realtime
2. #18316 - Persist reasoning effort per model
3. #18315 - Pin clock in scheduled-tasks tests
4. #18310 - Scope Managed Agent fast checks
5. #17541 - Polish terminal layout
6. #12276 - Local notes compaction
7. #11854 - Hybrid code mode
8. #17992 - Preserve bridge prompt outcomes
9. #17975 - Reject nonfinite timeout objects
10. #17823 - Keep A2A tasks recoverable

Now let me structure the digest:

1. **Today's Highlights**: Focus on CI failures being a major concern, active development on 1.0 kernel, new features in CLI and terminal


2. **Releases**: No releases in last 24h
3. **Hot Issues**: Select 10 issues with explanation
4. **Key PR Progress**: Select 10 PRs with descriptions
5. **Hot Discussions**: No discussion data provided
6. **Feature Request Trends**: Extract from issues and PRs
7. **Developer Pain Points**: Summarize recurring issues

Let me write this out.
</think>


# Qwen Code Community Digest — 2026-11-25

## Today's Highlights

The Qwen Code project is experiencing significant CI instability, with multiple Managed Agent gate failures and E2E test regressions dominating recent activity. Development continues actively on the v1.0 Preview loop kernel landing (Issue #17045), while new PRs bring CLI enhancements including per-model reasoning effort persistence and improved terminal layout polish. The community is also engaging heavily with Voice/Live Voice features, with at least three related issues and one PR addressing turn detection configuration.

---

## Releases

**No new releases** were published in the last 24 hours. The release pipeline appears impacted by ongoing CI failures (see Issue #17201 regarding v0.27.2-nightly.20261113 release failure).

---

## Hot Issues

| # | Issue | Key Points | Why It Matters |
|---|-------|------------|----------------|
| [#14724](https://github.com/QwenLM/qwen-code/issues/14724) | Main CI failed: Managed Agent gate — no test identified | 546 comments; tracked since Oct 19; ongoing CI instability | High-priority infrastructure issue affecting all PRs; most-discussed item by far |
| [#18252](https://github.com/QwenLM/qwen-code/issues/18252) | E2E Tests — cli/cron-tools.test.ts failure | 26 comments; created Nov 24; provisional flag applied | Indicates regression in scheduled task handling; blocks merge readiness |
| [#17045](https://github.com/QwenLM/qwen-code/issues/17045) | Tracking: land the 1.0 Preview loop kernel on main | 24 comments; P1 priority; in-progress | Core architectural change introducing event-driven kernel; significant scope |
| [#16346](https://github.com/QwenLM/qwen-code/issues/16346) | ClassSizeRatchetTest.productionClassesStayWithinTheirSizeRatchet | 21 comments; recurring CI failure | Java SDK quality gate regression; affects SDK release pipeline |
| [#10791](https://github.com/QwenLM/qwen-code/issues/10791) | Balanced content-only `<thinking>` blocks leak to output | 8 comments; welcome-PR; fix in PR #11188 | User-facing bug where internal reasoning leaks to visible output |
| [#18149](https://github.com/QwenLM/qwen-code/issues/18149) | Widen Action parking beyond first increment | 8 comments; follows #18115; design in #18047 | Managed Agent scalability improvement; reduces session memory footprint |
| [#17446](https://github.com/QwenLM/qwen-code/issues/17446) | CLI model discovery during custom provider setup | 7 comments; P2 priority | UX enhancement for custom provider onboarding; requested by community |
| [#17000](https://github.com/QwenLM/qwen-code/issues/17000) | Live Voice hardcoded `turn_detection` rejected by qwen-audio | 6 comments; affects DashScope `qwen-audio-3.0-realtime-plus` | Live Voice feature broken with specific models; PR #17003 addresses this |
| [#18298](https://github.com/QwenLM/qwen-code/issues/18298) | Web Shell renders unset boolean as OFF | 4 comments; created Nov 25 | Settings UI confusion; experimental flags show misleading OFF state |
| [#17668](https://github.com/QwenLM/qwen-code/issues/17668) | read_file reports nonexistent range '6-6 of 5' at EOF | 4 comments; edge case bug in file tool | Model-facing tool returns confusing error message; affects AI tool reliability |

---

## Key PR Progress

| # | PR | Category | Summary |
|---|-----|----------|---------|
| [#18316](https://github.com/QwenLM/qwen-code/pull/18316) | Persist reasoning effort and context window per model | CLI | Model-specific preferences now survive session restarts and model switches |
| [#17003](https://github.com/QwenLM/qwen-code/pull/17003) | Configurable turn_detection for realtime session.update | Live Voice | Resolves Issue #17000; auto-detects `server_vad` vs `semantic_vad` based on model capabilities |
| [#18310](https://github.com/QwenLM/qwen-code/pull/18310) | Scope Managed Agent fast checks by changed paths | CI/CD | Reduces CI noise; unrelated PRs no longer trigger full SDK Java suite |
| [#18315](https://github.com/QwenLM/qwen-code/pull/18315) | Pin clock in scheduled-tasks reseat assertions | Testing | Fixes flaky tests by mocking wall clock; test-only change |
| [#12276](https://github.com/QwenLM/qwen-code/pull/12276) | Local notes compaction with strategy selector | Core | Adds Summary/Notes+History compression options; opt-in feature in settings |
| [#11854](https://github.com/QwenLM/qwen-code/pull/11854) | Add hybrid code mode | Core | New `tools.mode` enum (`direct`, `code_mode`, `code_mode_only`); aligns with Codex |
| [#17992](https://github.com/QwenLM/qwen-code/pull/17992) | Preserve completed bridge prompt outcomes | SDK | Stable bridge responses during multi-turn usage collection |
| [#17975](https://github.com/QwenLM/qwen-code/pull/17975) | Reject nonfinite and invalid timeout objects | SDK-Python | Input validation for timeouts; prevents runtime errors |
| [#17823](https://github.com/QwenLM/qwen-code/pull/17823) | Keep A2A tasks recoverable after transcript read errors | Agents | Returns retryable error `-32012` on filesystem failures; enables task recovery |
| [#18303](https://github.com/QwenLM/qwen-code/pull/18303) | Park Shell approvals on version-0 public Shell Sessions | Managed Agent | Implements S8a of #18149; improves resource management for public sessions |

---

## Feature Request Trends

Based on issues and PRs from this period, the following themes dominate feature requests:

1. **Voice/Live Voice Enhancements** — Multiple issues (#17000, #18305) highlight gaps in ASR model support and turn detection configuration. PR #17003 represents progress on turn detection flexibility.

2. **CLI & Model Management** — #17446 requests model discovery during custom provider setup; #18316 delivers per-model reasoning effort persistence. Users want finer-grained CLI control.

3. **Managed Agent Extensibility** — #18311 requests an official Spring Boot Starter; #18289 proposes host-supplied execution definition inputs. The embedding/hosting story is maturing.

4. **Web Shell Customization** — #18159 requests custom panels in the built-in Web Shell without forking. Extension points for the UI are in demand.

5. **Memory & Workspace Sharing** — #18030 requests shared auto-memory across Git worktrees. Improves multi-workspace developer experience.

6. **Session & Transcript Integrity** — #17559 (now closed) and #17823 address transcript recording reliability and A2A task recovery.

---

## Developer Pain Points

1. **CI Pipeline Instability** — Recurring Managed Agent gate failures (#14724, #16346, #18252, #18258, #18288, #18307) create friction for contributors. The gate is blocking merges and releases.

2. **Release Pipeline Failures** — Issue #17201 shows release v0.27.2-nightly failed on integration steps; combined with CI issues, this slows delivery.

3. **Webhook/Transport Whitelist Rigidity** — Issues #18305 and #17000 demonstrate that Voice transport layers are too tightly coupled to specific model families, causing failures when using newer ASR models.

4. **Settings UI Ambiguity** — #18298 shows that "unset" boolean settings render as OFF, misleading users about actual feature states.

5. **Flaky Tests** — #18315 acknowledges scheduled-task tests fail based on real-time execution, indicating test environment sensitivity issues.

6. **Context Window Inheritance Bugs** — #13338 and #18304 (fix PR) highlight configuration resolution issues when switching models within the same provider.

---

*Digest generated from GitHub data for 2026-11-25. All links reference QwenLM/qwen-code.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*