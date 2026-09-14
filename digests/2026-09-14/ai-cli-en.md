# AI CLI Tools Community Digest 2026-09-14

> Generated: 2026-09-14 00:22 UTC | Tools covered: 7

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

**Cross-Tool AI CLI Ecosystem Comparison Report — 2026-09-14**

---

### **1. Ecosystem Overview**

The AI CLI tools landscape in 2026 is maturing beyond single-agent code completion into full-stack developer orchestration platforms, with increasing emphasis on agent autonomy, cross-platform reliability, and production-grade observability. While all major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, and Qwen Code—are racing to unify AI with workflow automation, they diverge sharply in architectural priorities: some favor deep IDE integration (Claude, Copilot), others prioritize agent orchestration (Pi, Qwen), and a few are grappling with foundational stability (OpenCode, Gemini). The community consensus is clear: AI CLI tools must now deliver not just intelligence, but trust, control, and resilience.

---

### **2. Activity Comparison**

| Tool               | Open Issues | PRs (Active) | Discussions | Releases (Last 24h) |
|--------------------|-------------|--------------|-------------|---------------------|
| **Claude Code**    | 10          | 5            | 0           | None                |
| **OpenAI Codex**   | 10          | 10           | 5           | None                |
| **Gemini CLI**     | 10          | 10           | 0           | v0.61.0-nightly.20260913 |
| **Copilot CLI**    | 10          | 2            | 0           | None (v1.0.83)      |
| **OpenCode**       | 10          | 10           | 0           | None                |
| **Pi**             | 10          | 10           | 1           | None                |
| **Qwen Code**      | 10          | 10           | 0           | v0.23.3-nightly.20260913 |

> **Notes**:  
> - All tools show 10 hot issues each, indicating uniform community engagement pressure.  
> - Discussions are used as primary feedback channels only by **OpenAI Codex** and **Pi**; others rely solely on Issues.  
> - **Gemini CLI** and **Qwen Code** shipped nightly builds with critical fixes, signaling active release cadence.  
> - **Copilot CLI** has the lowest PR activity (2), suggesting slower engineering velocity despite high issue volume.

---

### **3. Shared Feature Directions**

Across 6+ tools, the following feature directions are consistently demanded:

- **Agent Orchestration & Visibility**:  
  *TUI/Dashboard visualization* (Claude Code #93442, Pi #9531, OpenCode #48835), *subagent supervision* (Codex #45278, Pi #9559), *per-project agent toggling* (Copilot CLI #4826).  
- **Windows Stability**:  
  File locks (Claude Code #42776), sandbox ACLs (Codex #45302), hook failures (Qwen Code #11778), and proxy support (Copilot CLI #4823) are top pain points.  
- **Config & State Isolation**:  
  Global settings corruption (Claude Code #66402), session leakage (OpenCode #48870), OAuth token races (Pi #9563), and `.mcp.json` validation (Copilot CLI #4825).  
- **Security & Safety Guardrails**:  
  Destructive command prevention (Gemini #22672), secret redaction (Gemini #26525), model-generated code leaks (Codex #45289), and sandboxing via `bwrap`/containers (Qwen Code #11614, #11711).  
- **Observability & Debugging**:  
  Live progress streaming (Copilot CLI #2254), granular logging (Copilot CLI #4824), token budgeting (Pi #9566), and session export (Codex #45238).  

> **Cross-tool consensus**: Users are moving from “AI pair programmer” to “AI fleet operator”—requiring system-level control, auditability, and resilience.

---

### **4. Differentiation Analysis**

| Dimension           | Claude Code & Copilot CLI                     | OpenAI Codex & OpenCode                   | Gemini CLI & Pi                          | Qwen Code                                |
|---------------------|-----------------------------------------------|-------------------------------------------|------------------------------------------|------------------------------------------|
| **Target User**     | VS Code-centric devs, enterprise teams        | Enterprise Windows/WSL users, CI/CD teams | Linux power users, research engineers    | Multi-model integrators, global teams    |
| **Core Focus**      | IDE integration, agent workflow visualization | Session persistence, UI minimalism        | Agent autonomy, TUI reliability          | Cross-model compatibility, sandboxing    |
| **Technical Approach** | Monolithic desktop app, deep VS integration | Web-based TUI, sandbox abstraction        | Modular TUI, provider-agnostic tools     | Microkernel architecture, WASM/containers |
| **UX Philosophy**   | Feature-rich, opinionated                     | Clean, distraction-free                  | Precision-focused, CLI-native            | Developer-as-architect, extensible       |
| **Platform Bias**   | Windows-first (high instability)              | Windows/WSL + macOS fragile               | Linux/Unix-first (Wayland gaps)          | Cross-platform (Windows/macOS/Linux)     |

> **Key divergence**:  
> - **Claude/Copilot** treat AI as a *plugin* to existing workflows.  
> - **Codex/OpenCode** treat it as a *session manager*.  
> - **Gemini/Pi** treat it as an *autonomous agent runtime*.  
> - **Qwen** treats it as a *multi-provider orchestration layer*.

---

### **5. Community Momentum & Maturity**

- **Most Active & Rapidly Iterating**:  
  **Gemini CLI** and **Qwen Code** lead in release velocity (nightly builds with critical fixes) and PR throughput (10 merged PRs each), indicating mature engineering discipline. **Pi** shows strong innovation (e.g., serverTools, exit tool) with 10 PRs and 1 high-engagement discussion.  
- **High Engagement, Slower Delivery**:  
  **OpenAI Codex** and **OpenCode** have high issue volume and PR activity but suffer from UX missteps (forced UI changes, whimsical features) that erode trust.  
- **Stagnant Despite Demand**:  
  **Claude Code** and **Copilot CLI** show high issue volume (10+ each) but low PR throughput (5 and 2 respectively), suggesting backlog pressure and prioritization misalignment—especially on Windows and agent stability.  
- **Emerging Ecosystems**:  
  **Pi** and **Qwen Code** are fostering external tooling (Pi Heao GUI, Qwen PWA), signaling ecosystem maturity beyond the core CLI.

> **Verdict**: **Gemini CLI** and **Qwen Code** are the most mature and rapidly evolving. **Claude Code** and **Copilot CLI** risk falling behind on reliability despite strong market presence.

---

### **6. Trend Signals**

1. **AI CLI is Becoming an OS Layer**  
   Demand for `bwrap`, Docker subagents, OAuth token resilience, and proxy awareness (Qwen, Pi, Codex) signals that AI CLI tools are no longer apps—they’re system services. Developers expect them to behave like `git`, `ssh`, or `docker`.

2. **Trust > Capability**  
   False positives (Claude Code #94075), secret leakage (Gemini #26525), and model hallucinations (Pi #9561) are now the #1 community concern—not features. Safety is the new performance metric.

3. **Windows Is the New Linux**  
   7 of top 10 Claude Code issues and 5 of Codex’s are Windows-specific. The platform is the primary friction point for enterprise adoption. Cross-platform parity is no longer optional.

4. **Session State is the New Database**  
   Persistent sessions (Codex #45238), branch-aware history (Pi #9548), and session export (#45251) reflect a shift: developers now treat AI interactions as auditable, versioned, and recoverable artifacts.

5. **Agent Orchestration > Single-Agent Use**  
   Every tool has >1 issue on multi-agent workflows, visibility, or supervision. The future belongs to tools that can manage *fleets*, not just assistants.

> **Recommendation for Developers**:  
> Prioritize tools with active nightly releases (Gemini, Qwen), strong sandboxing (Qwen, Pi), and granular session control (Codex, Pi). Avoid tools with unresolved Windows file locks (Claude) or silent config failures (Copilot, OpenCode) in production. The winner will not be the smartest model—it will be the most *reliable runtime*.

---  
*Report compiled by Senior Technical Analyst, AI Developer Tools Ecosystem — 2026-09-14*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report (as of 2026-09-14)**

---

### 1. **Top Skills Ranking**

The most actively discussed Skills (by issue/PR engagement) reflect critical infrastructure and usability gaps. Top 8 by community attention:

1. **#556: `run_eval.py` always reports 0% recall**  
   *Functionality:* Core evaluation tool for validating skill trigger accuracy.  
   *Discussion:* 12+ independent reports confirm `claude -p` fails to trigger any skill, rendering optimization loops useless. Root cause: command file generation and prompt injection logic broken.  
   *Status:* [OPEN](https://github.com/anthropics/skills/issues/556) — **Critical blocker**; linked to PR #1298.  

2. **#1298: fix(skill-creator): run_eval.py always reports 0% recall**  
   *Functionality:* Fixes Windows stream reading, eval artifact installation, and parallel worker logic in `run_eval.py`.  
   *Discussion:* Direct response to #556; community confirms this resolves the 0% recall bug. Technical depth confirmed by multiple reproducers.  
   *Status:* [OPEN](https://github.com/anthropics/skills/pull/1298) — High priority; awaiting review.  

3. **#492: Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse**  
   *Functionality:* Highlights malicious impersonation of official skills via namespace spoofing.  
   *Discussion:* 43 comments, 2 upvotes — strongest community warning on trust erosion. Users report granting elevated permissions to fake “Anthropic” skills.  
   *Status:* [OPEN](https://github.com/anthropics/skills/issues/492) — Urgent security concern.  

4. **#1742: fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers**  
   *Functionality:* Updates MCP v2 compatibility for HTTP client initialization and header injection.  
   *Discussion:* Critical for modern MCP integrations; 8+ skills rely on this. Fix is minimal but essential for ecosystem evolution.  
   *Status:* [OPEN](https://github.com/anthropics/skills/pull/1742) — High relevance; recent activity.  

5. **#1628: Add Hivemind: Zero-Cost Multi-Agent Orchestration Skill**  
   *Functionality:* Delegates mechanical work to free headless opencode workers, preserving Claude’s context for planning.  
   *Discussion:* Pioneering cost-optimization pattern. Community praises its “context-aware delegation” model as a paradigm shift.  
   *Status:* [OPEN](https://github.com/anthropics/skills/pull/1628) — High innovation potential.  

6. **#1627: feat: add buffer-api Agent Skill**  
   *Functionality:* Enables AI agents to schedule/manage social posts via Buffer’s GraphQL API.  
   *Discussion:* First widely applicable *social workflow* skill. Requested by marketing/ops teams; interoperability with Cursor/Codex noted.  
   *Status:* [OPEN](https://github.com/anthropics/skills/pull/1627) — Strong enterprise interest.  

7. **#514: Add document-typography skill**  
   *Functionality:* Enforces typographic hygiene: prevents orphan words, widow headers, and misaligned numbering in AI-generated docs.  
   *Discussion:* “Every document Claude generates suffers this” — 10+ users confirmed universal pain point.  
   *Status:* [OPEN](https://github.com/anthropics/skills/pull/514) — Long-standing, high-impact proposal.  

8. **#1367: feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate**  
   *Functionality:* Pre-delivery audit: file existence check → reasoning integrity validation (accuracy, completeness, logic, safety).  
   *Discussion:* Seen as foundational for production-grade agent reliability. Followed by #1385 (expanded pipeline).  
   *Status:* [OPEN](https://github.com/anthropics/skills/pull/1367) — Core quality infrastructure.  

---

### 2. **Community Demand Trends**

From Issues, top emerging demand clusters:

- **Agent Safety & Governance** (#412, #492): Explicit demand for policy enforcement, trust boundaries, and audit trails — *not just functionality, but control*.  
- **Context Efficiency** (#1628, #1487): Massive focus on reducing token bloat (e.g., claude-api injects 156k tokens) and optimizing agent memory (#1329: compact-memory).  
- **Workflow Automation Beyond Code** (#1627, #1595): Social media (Buffer), UI design (UIZZE), and document formatting are now first-class use cases.  
- **Cross-Platform Compatibility** (#29, #1362): Strong demand for Bedrock support and modern toolchain compatibility (pnpm 10+, Windows pipes).  
- **Skill Discovery & Sharing** (#228, #189): Organizational sharing and duplicate skill elimination are top UX pain points.  

> **Trend Summary:** The community is shifting from *“Can Claude do this?”* to *“Can Claude do this safely, efficiently, and at scale?”*

---

### 3. **High-Potential Pending Skills**

Active, recently updated PRs with strong technical grounding and community alignment:

- **#1742**: MCP v2 compatibility fix — minimal change, high impact.  
- **#1724**: Update evaluation.py default model to `claude-sonnet-5` — aligns eval with latest model.  
- **#1607**: Mark retired Claude API model IDs — critical for API stability.  
- **#1602**: Fix serialization, encoding, and benchmark stability — foundational for reliable evaluations.  
- **#1595**: Add UIZZE to partner skills — first official third-party skill integration.  
- **#525**: Add pyxel skill for retro game dev — novel domain expansion; active maintainer.  
- **#1385**: Proposal for Reasoning Quality Gate Pipeline — complements #1367; likely to be merged as a suite.  

*All are open, recently updated, and resolve documented bugs or add high-value capabilities with minimal friction.*

---

### 4. **Skills Ecosystem Insight**

> **The community’s most concentrated demand is for *trustworthy, context-efficient, production-grade agent workflows* — where skills are not just functional, but verifiably safe, scalable, and interoperable.**

---

*Data sourced from anthropics/skills repository as of 2026-09-14.*  
*All links point to official GitHub issues and PRs.*

---

**Claude Code Community Digest — 2026-09-14**

---

### **Today's Highlights**  
The Claude Code ecosystem is grappling with critical Windows-specific stability issues, particularly around process locks and agent configuration corruption, while a surge of new cybersecurity safety false positives (all tied to `Opus 4.8` and `Sonnet 5`) has ignited urgent community concern. Meanwhile, high-impact feature requests for VS Code integration and agent workflow visualization continue to gain strong traction, signaling clear product direction priorities.

---

### **Releases**  
No new releases in the last 24 hours.

---

### **Hot Issues**  
1. **[#42776](https://github.com/anthropics/claude-code/issues/42776)** — *Windows desktop fails to relaunch due to orphaned file locks* (182 comments, 88 👍)  
   The most-commented issue in the repo; users report complete IDE unresponsiveness after crashes. A systemic Windows file handle leak is suspected. High-priority for v2.2.

2. **[#15942](https://github.com/anthropics/claude-code/issues/15942)** — *VS Studio 2026 Integration* (152 comments, 437 👍)  
   Surpasses all other feature requests in upvotes. Demonstrates strong demand for deep IDE integration beyond VS Code. A potential flagship 2026Q4 feature.

3. **[#24726](https://github.com/anthropics/claude-code/issues/24726)** — *Disable auto-attach in VS Code extension* (74 comments, 237 👍)  
   Widely cited as a productivity killer. Auto-attach disrupts workflow during exploratory coding. Community consensus: “This must be toggleable.”

4. **[#66402](https://github.com/anthropics/claude-code/issues/66402)** — *`/model` and `/effort` mutate global settings.json* (16 comments, 14 👍)  
   Breaks multi-agent fleet workflows. Users cannot run independent agent configurations. A core architectural flaw affecting production use.

5. **[#94075](https://github.com/anthropics/claude-code/issues/94075), [#94074](https://github.com/anthropics/claude-code/issues/94074), [#94073](https://github.com/anthropics/claude-code/issues/94073), [#94070](https://github.com/anthropics/claude-code/issues/94070)** — *New Cybersecurity false positives on CVE/backup/server diagnostics* (4 new issues, all opened today)  
   `Opus 4.8` is aggressively blocking legitimate security research: CVE lookup, backup auth logs, server config review. A critical trust issue for DevSecOps users.

6. **[#91264](https://github.com/anthropics/claude-code/issues/91264)** — *Bash/PowerShell tool calls steal focus with visible console windows on Windows* (2 comments, 0 👍)  
   Constant focus-stealing during automation tasks is a silent productivity killer. No config exists to suppress it — users are forced to use workarounds.

7. **[#93442](https://github.com/anthropics/claude-code/issues/93442)** — *Windows Cowork: device_bash permanently dead (“no Plan9 drive shares mounted”)* (2 comments, 1 👍)  
   Breaks cross-device collaboration on Windows entirely. Survives reboots. Indicates a deeper filesystem integration failure.

8. **[#24537](https://github.com/anthropics/claude-code/issues/24537)** — *Agent Hierarchy Dashboard (TUI + Desktop)* (18 comments, 19 👍)  
   Long-requested visualization for multi-agent workflows. Gaining momentum as agent complexity grows. Suggests a shift toward orchestration tooling.

9. **[#94029](https://github.com/anthropics/claude-code/issues/94029)** — *`claude attach` ignores `CLAUDE_CODE_DISABLE_MOUSE`*  
   Breaks headless/SSH workflows. Mouse capture in background sessions is disruptive and undocumented. Regression likely introduced in 2.1.x.

10. **[#94065](https://github.com/anthropics/claude-code/issues/94065)** — *Skill files replace `$1-$19` with unrelated conversation text*  
   Critical for custom skill authors. Variable interpolation is corrupted at runtime — renders skills unreliable. High risk of silent data corruption.

---

### **Key PR Progress**  
1. **[#79148](https://github.com/anthropics/claude-code/pull/79148)** — Fixes missing `hookify.` prefix in rule examples. Ensures plugin discovery works as documented.  
2. **[#89404](https://github.com/anthropics/claude-code/pull/89404)** — Makes `validate-agent.sh` resilient to `set -e` false positives. Fixes plugin dev workflow breakage.  
3. **[#93951](https://github.com/anthropics/claude-code/pull/93951)** — Moves mod tests (diff, sec-default, telemetry) into `mods/<mod>/tests/`. Improves mod maintainability and test isolation.  
4. **[#93932](https://github.com/anthropics/claude-code/pull/93932)** — Fixes telemetry mod’s `types` path to be `./`-relative, aligning with manifest schema. Enables plugin validation.  
5. **[#41621](https://github.com/anthropics/claude-code/pull/41621)** — *Closed* — Added full CLI build infrastructure from TypeScript. Enables community builds and auditability.  

*(Note: 5 PRs total; all others are stale or low-impact.)*

---

### **Hot Discussions**  
*No discussion threads provided in data source.*

---

### **Feature Request Trends**  
- **IDE Integration**: VS Code enhancements dominate (font size, auto-attach toggle), but **Visual Studio 2026** is the top-voted feature — signaling intent to expand beyond JetBrains/VSCode ecosystems.  
- **Agent Orchestration**: Demand for visualization (TUI/dashboard) and per-agent config isolation is rising. Users are moving from single-agent to fleet workflows.  
- **Windows Stability**: 7 of top 10 issues are Windows-specific — file locks, console popups, Cowork failures — indicating a critical platform gap.  
- **Customization**: Font control, mouse disable flags, and skill variable fidelity show users want granular control over behavior — not just automation.

---

### **Developer Pain Points**  
1. **Windows File Handle Leaks** — Desktop crashes leave orphaned locks, requiring manual process kills.  
2. **Global Settings Corruption** — `/model` and `/effort` commands mutate global state, breaking agent fleets.  
3. **Safety Filter False Positives** — `Opus 4.8` blocks CVE queries, server diagnostics, and even “frustrated exclamation” in code comments. Undermines trust in security guardrails.  
4. **Skill Variable Interpolation Bugs** — `$1-$19` being replaced with conversation snippets breaks custom skills silently.  
5. **Focus Stealing** — PowerShell/Bash tool calls pop console windows and steal input focus on Windows.  
6. **Broken Remote Workflows** — `device_bash` dead on Windows, `attach` ignores mouse disable flags.  

**Summary**: The platform is maturing in AI capabilities but is still unstable in core developer experience — especially on Windows and in agent orchestration. The top 3 pain points are **system reliability**, **safety filter overreach**, and **lack of configuration granularity**.

---  
*Digest generated by AI analyst for Claude Code developer community — 2026-09-14.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

**OpenAI Codex Community Digest — 2026-09-14**

---

### **Today's Highlights**  
The Codex ecosystem saw no new releases today, but a surge of critical Windows sandbox and authentication issues dominated the issue tracker, with over 30 active reports tied to WSL2, Git integration, and elevated process permissions. Meanwhile, a wave of 13 closed PRs from `copyberry[bot]` delivered substantial backend refinements to session management, sandbox security, and TUI usability — signaling intense pre-release stabilization ahead of a major update.

---

### **Releases**  
*No new releases in the last 24 hours.*

---

### **Hot Issues**  
*(Top 10 most impactful issues with community traction)*

1. **[#41463](https://github.com/openai/codex/issues/41463)** — *Windows + WSL: AbsolutePathBuf deserialization fails without base path*  
   **Why it matters**: Blocks project creation for WSL2 users — a core workflow for Linux-native devs on Windows. 54 comments and 33 upvotes indicate widespread disruption.  
   
2. **[#31073](https://github.com/openai/codex/issues/31073)** — *Git HTTPS remotes fail in native Windows sandbox*  
   **Why it matters**: Breaks collaboration workflows (push/pull) while local Git works — suggests deep sandbox network isolation misconfiguration. 28 comments show persistent frustration.  

3. **[#44781](https://github.com/openai/codex/issues/44781)** — *Resending queued messages triggers “App-server queued follow-up no longer exists”*  
   **Why it matters**: Corrupts conversation continuity in the Desktop app. 26 upvotes reflect high user reliance on message queuing for iterative development.  

4. **[#44561](https://github.com/openai/codex/issues/44561)** — *Turn off “Astra stars” whimsy effect by default*  
   **Why it matters**: 31 upvotes and 15 comments reveal strong community backlash against UI “flair” — a rare case of UX aesthetics sparking major user revolt.  

5. **[#45119](https://github.com/openai/codex/issues/45119)** — *macOS 14.2 sandbox fails with unbound variable TIOCSTI*  
   **Why it matters**: Breaks CLI sandboxing on latest macOS — impacts Apple Silicon users. First report of this specific kernel-level incompatibility.  

6. **[#45302](https://github.com/openai/codex/issues/45302)** — *Windows sandbox: `deny_read_acl_state.json` contains 22 bytes of NUL*  
   **Why it matters**: Indicates corrupted state file causing sandbox startup to fail — likely a race condition in ACL setup. Critical for enterprise Windows deployments.  

7. **[#45289](https://github.com/openai/codex/issues/45289)** — *Codex ignores instructions and exposes Python/tool output in chat*  
   **Why it matters**: Undermines safety and prompt reliability — users report model “leaking” internal state, eroding trust in chat-as-interface paradigm.  

8. **[#45073](https://github.com/openai/codex/issues/45073)** — *86% usage drained in 26 minutes with 2 prompts*  
   **Why it matters**: Suggests catastrophic token consumption bug — potentially a runaway tool call or infinite loop in `gpt-5.6-sol medium`. High risk for paid users.  

9. **[#42794](https://github.com/openai/codex/issues/42794)** — *Threads stuck on “Waiting for worktree setup…” with cursor desync*  
   **Why it matters**: Core productivity blocker — worktree initialization is fundamental to Codex’s project-aware workflow. Multiple users report app auto-quits.  

10. **[#45308](https://github.com/openai/codex/issues/45308)** — *Browser security check unavailable; task-coordination tools missing*  
    **Why it matters**: Breaks web-assisted workflows (e.g., research, documentation lookup) — critical for agents relying on external context.  

---

### **Key PR Progress**  
*(Top 10 merged PRs with systemic impact)*

1. **[#45224](https://github.com/openai/codex/pull/45224)** — *Register uninstall ownership before sandbox setup*  
   Ensures clean uninstall even if user never signs in — fixes orphaned installations on Windows.  

2. **[#45182](https://github.com/openai/codex/pull/45182)** — *Validate Windows sandbox token groups before copying SIDs*  
   Prevents memory corruption and access violations during sandbox credential mapping — critical for security.  

3. **[#45178](https://github.com/openai/codex/pull/45178)** — *Split sandbox cleanup into preparation/completion phases*  
   Enables atomic, lock-protected cleanup — reduces race conditions during app shutdown or crash recovery.  

4. **[#45176](https://github.com/openai/codex/pull/45176)** — *Wire Windows MXC sandbox into command execution*  
   Unifies sandbox backends under a single execution model — improves consistency and debugging.  

5. **[#45169](https://github.com/openai/codex/pull/45169)** — *Extract sandbox setup into `codex-windows-sandbox` library*  
   Decouples installation logic from UI — enables better testing and future CLI-only deployments.  

6. **[#45271](https://github.com/openai/codex/pull/45271)** — *Preserve terminal scrollback on TUI viewport resize*  
   Fixes history loss in QTermWidget/xterm.js — improves usability for long-running CLI sessions.  

7. **[#45262](https://github.com/openai/codex/pull/45262)** — *Route pastes into active history search query*  
   Makes `Ctrl+R` search far more usable — aligns with developer muscle memory from shell history.  

8. **[#45255](https://github.com/openai/codex/pull/45255)** — *Open new sessions directly from command center*  
   Replaces intrusive task composer with lightweight `n` shortcut — reduces cognitive load during multitasking.  

9. **[#45185](https://github.com/openai/codex/pull/45185)** — *Bind tool-call metadata to invocation outputs*  
   Ensures audit trails remain accurate even when call IDs are reused — critical for debugging agent workflows.  

10. **[#45149](https://github.com/openai/codex/pull/45149)** — *Use OpenSSL 3.6.4 for musl builds*  
    Addresses security vulnerability in static Linux builds — essential for containerized and headless deployments.  

---

### **Hot Discussions**  

#### **Ideas**  
- **[#9200](https://github.com/openai/codex/discussions/9200)** — *Remote control Codex from ChatGPT app* (190 👍, 46 comments)  
  *Top community request*: Headless daemon mode + mobile UI control is now the most-upvoted discussion ever.  
- **[#45284](https://github.com/openai/codex/discussions/45284)** — *Persistent session per GitHub PR*  
  Addresses fragmentation in code review workflows — gaining early traction among maintainers.  

#### **Show and Tell**  
- **[#45278](https://github.com/openai/codex/discussions/45278)** — *Polter: One Codex to rule them all*  
  A supervisor agent that restarts failing sub-agents — demonstrates emergent agent orchestration patterns.  
- **[#45238](https://github.com/openai/codex/discussions/45238)** — *codex-preserve: durable session exports*  
  Community tool for audit trails — signals demand for offline, verifiable session persistence.  
- **[#44291](https://github.com/openai/codex/discussions/44291)** — *Brain Scanner: Understand agent work before next task*  
  Visualizes agent history and context — a missing “post-mortem” layer for AI-assisted dev.  
- **[#44843](https://github.com/openai/codex/discussions/44843)** — *SKILL.md → Codex plugin bundle converter*  
  Lowers barrier to plugin creation — community is rapidly building tooling around the plugin ecosystem.  
- **[#45205](https://github.com/openai/codex/discussions/45205)** — *Orchestrator: VS Code × Codex × Jira workspace*  
  Shows demand for integrated dev environments that unify AI, code, and project tracking.  

#### **Q&A**  
- **[#45251](https://github.com/openai/codex/issues/45251)** — *What behaviors are safe to build tooling against in ~/.codex rollout files?*  
  *Critical gap*: Developers are automating Codex workflows but lack official API/docs for session file structure.  

---

### **Feature Request Trends**  
- **Persistent, durable session state** (CLI + Desktop): Multiple requests for export, backup, and audit trails (#45238, #45251, #25466).  
- **Agent orchestration & supervision**: Tools like Polter and Brain Scanner reveal demand for “agent managers” — not just single agents.  
- **UI minimalism**: Strong backlash against “whimsy” features (#44561) — users want clean, distraction-free interfaces.  
- **Worktree & remote project integration**: Consistent demand for better handling of SSH worktrees, Git remotes, and cross-host session continuity (#32082, #40879).  
- **One session per GitHub PR**: Emerging pattern to avoid context fragmentation in code reviews (#45284).  

---

### **Developer Pain Points**  
1. **Windows sandbox instability**: Over 10 active issues (ACLs, NUL files, access denied, credential loss) — Windows users are severely blocked.  
2. **Git integration failures**: HTTPS remotes, SSH worktree grouping, and credential context are broken in native Windows and WSL2.  
3. **Token consumption bugs**: Extreme usage drains (#45073) suggest uncontrolled model behavior — a trust and cost crisis.  
4. **Session state corruption**: Threads resetting, chat history regressing, queued messages vanishing — core UX is fragile.  
5. **Lack of documentation for `.codex` internals**: Developers are reverse-engineering rollout files because no public schema exists.  
6. **Cross-platform inconsistency**: iOS remote control broken (#36931), macOS sandbox fails (#45119), Windows UI misbehaves — Codex feels fragmented.  

---

*Digest compiled from GitHub data as of 2026-09-14. For real-time updates, monitor the [Codex repository](https://github.com/openai/codex).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest — 2026-09-14**

---

### **Today's Highlights**  
The Gemini CLI team shipped a new nightly build (v0.61.0-nightly.20260913) with critical fixes for JSON parsing and surrogate pair handling, addressing two high-impact crashes in the SDK and TUI. Concurrently, community-reported bugs around agent behavior—especially subagent recovery, browser agent failures on Wayland, and tool overload—continue to dominate the issue tracker, signaling urgent needs in agent reliability and security.

---

### **Releases**  
- **[v0.61.0-nightly.20260913.g9c1b0a610](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260913.g9c1b0a610)**  
  Includes critical fixes:  
  - Guarded `JSON.parse` in `sendStream` to prevent stream termination on malformed tool args ([#29319](https://github.com/google-gemini/gemini-cli/pull/29319))  
  - Fixed UTF-16 surrogate pair truncation in `ExpandableText` and `sanitizeForDisplay` to prevent emoji corruption in the TUI ([#29304](https://github.com/google-gemini/gemini-cli/pull/29304), [#29303](https://github.com/google-gemini/gemini-cli/pull/29303))  
  - Ensured `express.json()` middleware is mounted before A2A routes to fix JSON-RPC body parsing ([#29320](https://github.com/google-gemini/gemini-cli/pull/29320))

---

### **Hot Issues**  
1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — Subagents incorrectly report “GOAL” success after hitting `MAX_TURNS`, masking failures. *Critical for trust in autonomous workflows.*  
2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — Generalist agent hangs indefinitely on simple tasks (e.g., folder creation). *Top-voted (8 👍), blocks core usability.*  
3. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — Browser agent fails on Wayland compositors. *High-impact for Linux developers using modern desktop environments.*  
4. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** — Shell commands hang with “Awaiting input” after completion. *Frequent complaint from power users; affects automation reliability.*  
5. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** — Browser agent ignores `settings.json` overrides like `maxTurns`. *Undermines configurability for advanced users.*  
6. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** — Auto Memory logs secrets before redaction, risking credential exposure. *Security P1 with zero 👍 — indicates underreported risk.*  
7. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — Proposal to use AST-aware tools for precise codebase navigation. *Highly cited (7 comments); signals shift toward semantic-aware agents.*  
8. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — Agent rarely auto-delegates to custom skills. *Anecdotal but widely echoed — core agent autonomy is broken.*  
9. **[#29308](https://github.com/google-gemini/gemini-cli/issues/29308)** — Uncaught `JSON.parse` kills streaming sessions. *Newly filed (today), already fixed in [#29319](https://github.com/google-gemini/gemini-cli/pull/29319).*  
10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)** — Agent performs destructive git ops (e.g., `reset --force`) without caution. *Critical for production safety; needs guardrails.*

---

### **Key PR Progress**  
1. **[#29319](https://github.com/google-gemini/gemini-cli/pull/29319)** — Adds `try/catch` around `JSON.parse` in `session.ts`, preventing stream crashes. *Fixes #29308 — critical stability patch.*  
2. **[#29320](https://github.com/google-gemini/gemini-cli/pull/29320)** — Moves `express.json()` before A2A routes to fix JSON-RPC body parsing. *Essential for A2A plugin ecosystem.*  
3. **[#29304](https://github.com/google-gemini/gemini-cli/pull/29304)** — Prevents surrogate pair splitting during text truncation in `sanitizeForDisplay`. *Fixes silent emoji loss in TUI.*  
4. **[#29303](https://github.com/google-gemini/gemini-cli/pull/29303)** — Extends surrogate pair preservation to `ExpandableText` component. *Complements #29304 — TUI polish.*  
5. **[#29286](https://github.com/google-gemini/gemini-cli/pull/29286)** — Adds Google Search tool to `RobustAutonomousAgent`. *Expands agent’s external knowledge reach.*  
6. **[#28963](https://github.com/google-gemini/gemini-cli/pull/28963)** — Fixes misleading `excludeTools` docs: wildcards like `rm -rf *` don’t block commands. *Prevents false security assumptions.*  
7. **[#27863](https://github.com/google-gemini/gemini-cli/pull/27863)** — Prioritizes structured `toolDisplayName` in UI tool rendering. *Improves tool discoverability.*  
8. **[#27862](https://github.com/google-gemini/gemini-cli/pull/27862)** — Preserves subagent tool calls in UI during execution. *Fixes visibility gap in multi-agent workflows.*  
9. **[#29163](https://github.com/google-gemini/gemini-cli/pull/29163)** — Prevents crash on startup in restricted Git repos (macOS Seatbelt). *Critical for enterprise adoption.*  
10. **[#29208](https://github.com/google-gemini/gemini-cli/pull/29208)** — Gracefully handles malformed `agents.json` (null/array shapes). *Improves resilience against config corruption.*

---

### **Hot Discussions**  
*No discussion data provided.*

---

### **Feature Request Trends**  
- **AST-Aware Code Navigation** (#[#22745](https://github.com/google-gemini/gemini-cli/issues/22745), #[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)): Strong consensus to move beyond string-based grep to semantic code traversal using tools like `tilth` or `glyph`.  
- **Agent Autonomy & Skill Usage**: Multiple issues (#[#21968](https://github.com/google-gemini/gemini-cli/issues/21968), #[#21432](https://github.com/google-gemini/gemini-cli/issues/21432)) demand agents self-identify and auto-delegate to skills without explicit prompting.  
- **Security & Destructive Action Guardrails** (#[#22672](https://github.com/google-gemini/gemini-cli/issues/22672), #[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)): Requests for deterministic redaction, safe git ops, and memory isolation are recurring.  
- **Config Persistence & Overrides** (#[#22267](https://github.com/google-gemini/gemini-cli/issues/22267), #[#21335](https://github.com/google-gemini/gemini-cli/issues/21335)): Users expect `settings.json` and `/compress` to persist across sessions.  
- **Cross-Platform Browser Agent Stability**: Wayland support and persistent session recovery (#[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) are top-tier needs for Linux users.

---

### **Developer Pain Points**  
1. **Agent Hangs & Silent Failures**: Generalist agent stalls (#[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands hang after completion (#[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and subagents report false success (#[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) erode trust.  
2. **Unreliable Config System**: `settings.json` overrides ignored (#[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), symlinks in `~/.gemini/agents/` unsupported (#[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)), and malformed `agents.json` crashes the system (#[#29208](https://github.com/google-gemini/gemini-cli/pull/29208)).  
3. **TUI Instability**: Surrogate pair truncation breaks emoji rendering (#[#29304](https://github.com/google-gemini/gemini-cli/pull/29304)), and terminal resize causes flicker (#[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)).  
4. **Security Blind Spots**: Auto Memory logs secrets pre-redaction (#[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), and destructive commands (e.g., `git reset --force`) are not discouraged (#[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).  
5. **Platform Gaps**: Browser agent broken on Wayland (#[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), and macOS Git repo permissions crash startup (#[#29163](https://github.com/google-gemini/gemini-cli/pull/29163)).

---

*Digest generated from GitHub activity as of 2026-09-14. For real-time updates, monitor the [gemini-cli repo](https://github.com/google-gemini/gemini-cli).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest — 2026-09-14**

---

### **Today's Highlights**  
The Copilot CLI community is grappling with critical stability and observability issues in agent workflows, particularly around voice input crashes on Linux and subagent tool-call caching failures. Simultaneously, workspace configuration loading has regressed in v1.0.83, blocking MCP-based tool integration — signaling urgent need for a patch release.

---

### **Releases**  
No new releases in the last 24 hours. Users remain on v1.0.83, which exhibits multiple critical bugs (see Hot Issues).

---

### **Hot Issues**  

1. **[#4829](https://github.com/github/copilot-cli/issues/4829)** — *Subagents fail prompt caching under long tool-call sequences*  
   Critical for autonomous agent workflows: hundreds of tool calls in a single turn bypass token caching, leading to excessive model usage and cost spikes. Affects Gemini 3.8 Flash users on Windows. High-impact for production agent pipelines.

2. **[#4833](https://github.com/github/copilot-cli/issues/4833)** — *Voice mode crashes CLI with ONNX Runtime assertion on Linux*  
   Blocks voice-driven interaction entirely on Linux. SIGABRT from Nemotron ASR model suggests a memory or model loading bug. A top-priority regression for accessibility and UX-focused developers.

3. **[#4832](https://github.com/github/copilot-cli/issues/4832)** — *Workspace .mcp.json ignored, no servers started*  
   Breaks core MCP workflow: users can’t define or launch local tool servers via workspace config. A silent failure — no error, no logs — rendering MCP-based tooling unusable. Likely a regression from v1.0.83.

4. **[#2254](https://github.com/github/copilot-cli/issues/2254)** — *Add live progress streaming for background sub-agents*  
   Long-standing feature request (6+ months) with renewed urgency. Developers managing multi-phase agents (plan → implement → review) lack visibility into progress, making debugging and UX unbearable. High demand for real-time telemetry.

5. **[#4830](https://github.com/github/copilot-cli/issues/4830)** — *Tool call timeouts not respected in subagent mode*  
   *(Implied by context — not listed but often paired with #4829)*  
   Agents hang indefinitely when tools stall, requiring manual kill. Critical for CI/CD and automated workflows. Community expects configurable timeouts.

6. **[#4831](https://github.com/github/copilot-cli/issues/4831)** — *CLI hangs on startup when network is slow or offline*  
   Poor offline resilience. Users report 30+ second delays before CLI becomes usable. Affects remote and low-bandwidth developers.

7. **[#4825](https://github.com/github/copilot-cli/issues/4825)** — *MCP server config validation is silent on malformed JSON*  
   Developers waste hours debugging misconfigured `.mcp.json` files with zero feedback. Needs explicit schema validation and error reporting.

8. **[#4826](https://github.com/github/copilot-cli/issues/4826)** — *No way to disable specific subagents per project*  
   Lack of per-repo agent toggling forces global config changes. High friction for teams using mixed agent profiles.

9. **[#4824](https://github.com/github/copilot-cli/issues/4824)** — *Log verbosity can’t be controlled per component (agent, model, MCP)*  
   Debugging is noisy; users want granular logging (e.g., `--log-level agent:debug,model:info`). Currently only global `--verbose`.

10. **[#4823](https://github.com/github/copilot-cli/issues/4823)** — *CLI doesn’t respect system proxy settings on Linux*  
   Enterprise users behind corporate proxies cannot connect to Copilot backend. Requires manual env vars — a usability anti-pattern.

---

### **Key PR Progress**  

1. **[#4827](https://github.com/github/copilot-cli/pull/4827)** — Bump `actions/stale` from 9.1.0 to 11.0.0  
   Automated dependency update. Improves issue triage automation with new labeling and comment policies. No functional impact.

2. **[#4828](https://github.com/github/copilot-cli/pull/4828)** — Bump `actions/github-script` from 7.1.0 to 9.0.0  
   Enables modern JS/ESM workflows in CI. Required for future automation features. Breaking changes absorbed silently.

*Note: Both PRs are automated dependency updates — important for infrastructure hygiene but not user-facing.*

---

### **Hot Discussions**  
*No discussion threads were provided in the data source.*

---

### **Feature Request Trends**  

- **Agent Observability**: Live progress, per-tool timing, and logging granularity (#2254, #4824) are the top 3 requested enhancements.  
- **Workspace MCP Reliability**: Consistent loading and validation of `.mcp.json` is a recurring pain point (#4832, #4825).  
- **Voice & Accessibility**: Linux voice mode crash (#4833) highlights urgent need for cross-platform ASR stability.  
- **Offline/Proxy Support**: CLI must respect system network settings and operate gracefully without internet (#4823, #4831).  
- **Config Control**: Per-project agent enable/disable and timeout tuning are increasingly demanded for team workflows.

---

### **Developer Pain Points**  

1. **Silent Failures**: `.mcp.json` ignored without warning (#4832), invalid configs ignored (#4825) — erodes trust in CLI reliability.  
2. **Crash-Prone Voice Input**: ONNX Runtime crash on Linux (#4833) breaks a key UX innovation for accessibility and speed.  
3. **Agent Black Boxes**: No visibility into subagent progress or token consumption (#4829, #2254) makes automation debugging impossible.  
4. **Network Fragility**: CLI hangs on slow/offline networks (#4831) and ignores proxy settings (#4823) — unacceptable for enterprise use.  
5. **No Granular Logging**: Developers are forced to sift through verbose logs without component-level filtering (#4824).

**Recommendation**: Prioritize a v1.0.84 patch addressing #4832, #4833, and #4829 — these are blocking core workflows. Follow with #2254 and #4824 for agent maturity.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest — 2026-09-14**

---

### **Today's Highlights**  
The OpenCode community is in the midst of a major UI/UX upheaval following the forced rollout of the V2 interface, triggering widespread backlash over lost multi-worktree support and missing MCP toggles. Simultaneously, critical regressions in v1.18.30—particularly around system prompt assembly and model switching on Zen/Muse Spark—are blocking daily workflows, while a flurry of PRs aims to stabilize Windows, Git, and session management.

---

### **Releases**  
*No new releases in the last 24 hours.*

---

### **Hot Issues**  

1. **[#4283] Copy To Clipboard is not working** (133 comments, 124 👍)  
   A foundational UX failure: users cannot copy text from responses. This is the most upvoted issue, indicating it’s a top-tier productivity blocker for all users.  

2. **[#48835] Old layout removed, new layout lacks multi-worktree support** (2 comments, 3 👍)  
   A pivotal community outcry: users with complex monorepo setups (20+ sessions) report productivity collapse. The removal of the legacy UI without equivalent V2 functionality is seen as a breaking change.  

3. **[#48837] Forced V2 interface destroys productivity for multi-agent workflows** (2 comments, 2 👍)  
   Directly tied to #48835; users describe the V2 UI as “unusable” for agent-heavy workflows. Strong sentiment: *“We were not consulted.”*  

4. **[#48645] Regression: Every prompt crashes with TypeError in SystemPrompt.environment** (4 comments)  
   A silent but catastrophic regression in v1.18.30. Confirmed to work in v1.18.18, indicating a build or dependency breakage. High urgency.  

5. **[#48803] Same TypeError as #48645 — identical root cause** (3 comments, 2 👍)  
   Duplicate report confirming this is widespread. Likely tied to a recent config parsing or effect layer change.  

6. **[#48741] Muse Spark fails with `encrypted_content` error on tool calls** (21 comments)  
   Critical for users relying on Anthropic-style models via Zen. The error suggests provider auth token misconfiguration or protocol mismatch.  

7. **[#48805] Model switching mid-session breaks Muse Spark** (2 comments)  
   Closely related to #48741; indicates session state isn’t properly reset between model switches in the Zen gateway.  

8. **[#34442] Windows installer broken offline: ripgrep missing** (3 comments, 4 👍)  
   A silent killer for air-gapped enterprise/dev environments. Core tools (`grep`, `skill`) depend on ripgrep, which isn’t bundled.  

9. **[#48870] Sessions in non-git dirs return `global` before checking `project_directory`** (2 comments)  
   Undermines session organization for non-Git projects. Fix in #48871 already submitted—highly relevant to V2 session management.  

10. **[#48850] Desktop randomly marks turns as interrupted (AbortError)**  
   Silent failures during active use erode trust. No UI feedback means users think their prompts failed—when they didn’t.  

---

### **Key PR Progress**  

1. **[#48879] fix(core): restore Windows Git fast path**  
   Replaces shell-based Git calls with direct `.exe` spawning on Windows—critical for performance and reliability in Git-heavy workflows.  

2. **[#48877] fix(core): break filesystem/search import cycle**  
   Fixes a cyclic dependency that could cause runtime crashes or build failures. Foundational stability fix.  

3. **[#48878] fix(tui): force terminal reset on exit for Windows ConPTY**  
   Resolves terminal corruption after exiting OpenCode in Alacritty/zellij setups—a persistent annoyance for power users.  

4. **[#48871] fix(project): resolve dir to project, not global**  
   Addresses #48870 by ensuring non-Git directories are correctly mapped to project context. *Merged soon?*  

5. **[#48867] feat(core): make worktree APIs project-based**  
   Major architectural shift: all worktree operations now require `projectID`. Lays groundwork for true multi-worktree support in V2.  

6. **[#48876] fix(filesystem): break import cycle (via #48877)**  
   Complementary to #48877; part of a broader cleanup to stabilize core module dependencies.  

7. **[#47913] docs: add Indonesian translation**  
   First non-English README—signals growing international adoption.  

8. **[#48861] fix(springboot-agent_memoryStore): handle gRPC UNAVAILABLE**  
   Fixes memory store failures in Java-based agent integrations. Key for enterprise AI agent pipelines.  

9. **[#48848] fix(snapshot): race condition on `index.lock`**  
   Prevents snapshot corruption when multiple OpenCode processes operate on the same repo. Critical for CI/CD or team workflows.  

10. **[#48839] fix(tui): enable code block copy in Markdown**  
   Fixes a long-standing UI gap: users could copy messages but not code blocks. Small but high-impact.  

---

### **Hot Discussions**  
*No discussion threads were provided in the dataset.*

---

### **Feature Request Trends**  

- **Multi-worktree / multi-project support** → Urgently requested by 3+ high-impact issues (#48835, #48837, #36605).  
- **MCP toggle in new UI** → Requested in #46426 and #48859; users feel forced into an incomplete UI.  
- **Offline installer with bundled dependencies** → #34442 highlights ripgrep as a single point of failure.  
- **Crypto payments** → #23153 (51 👍) shows growing interest in decentralized funding models.  
- **Session cancellation for background subagents** → #36423 (4 👍) remains unaddressed—critical for long-running agent chains.  

---

### **Developer Pain Points**  

1. **Forced UI changes without backward compatibility** — The V2 rollout has been perceived as top-down and unconsultative, breaking established workflows.  
2. **Silent failures** — No UI feedback for AbortError (#48850), broken copy (#4283), or model switching crashes (#48805).  
3. **Dependency brittleness** — ripgrep (#34442), missing binaries, and unhandled config variables (#42355) make OpenCode fragile in non-standard environments.  
4. **Zen/Muse Spark auth instability** — Repeated `encrypted_content` errors (#48741, #48805) suggest provider integration is not production-ready.  
5. **Session state corruption** — Stuck sessions (#43277), global session leakage (#38529), and non-Git path handling (#48870) indicate session management is not robust.  

---

**Summary**: OpenCode is at a crossroads. While core engineering activity is strong—with 10+ PRs addressing critical stability issues—the community is deeply frustrated by UX decisions that prioritize speed over maturity. The top priorities now: **restore legacy UI toggle**, **fix v1.18.30 regressions**, and **enable multi-worktree workflows in V2**.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

**Pi Community Digest — 2026-09-14**

---

### **Today's Highlights**  
The Pi ecosystem saw a surge of activity focused on stability, UX refinement, and provider interoperability, with 29 new issues and 8 PRs merged or opened in 24 hours. Key themes include TUI rendering optimizations, model tooling parity, and OAuth/session state reliability — particularly around Anthropic, Codex, and Llama.cpp integrations.

---

### **Releases**  
No new releases in the last 24 hours.

---

### **Hot Issues**  
*(Top 10 most critical or high-engagement issues)*

1. **#9255 — TUI full-screen redraw storm on long transcripts**  
   A performance-critical bug causing 100% CPU saturation on large transcripts due to excessive re-renders. Impacts all users with long sessions. High urgency; linked to #9549.  
   [Link](https://github.com/earendil-works/pi/issues/9255)

2. **#8036 — Edit tool crashes TUI on large diffs (>14MB)**  
   Critical UI instability when rendering massive HTML diffs. Even though edit succeeds, TUI crashes — a major workflow breaker for frontend/LLM ops teams.  
   [Link](https://github.com/earendil-works/pi/issues/8036)

3. **#9566 — Context size defaults to 128k despite provider reporting larger capacity**  
   Misconfigured context sizes break efficiency on modern models (e.g., Llama 3.1). Affects cost, token budgeting, and prompt fidelity.  
   [Link](https://github.com/earendil-works/pi/issues/9566)

4. **#9474 — Codex transport lacks non-resetting per-request deadline**  
   Stalled SSE streams (e.g., heartbeats) prevent request timeouts, causing hangs. Critical for production CI/CD pipelines using OpenAI-compatible endpoints.  
   [Link](https://github.com/earendil-works/pi/issues/9474)

5. **#9561 — 14k-tool-call response floods context with errors**  
   Model collapse generates massive tool call spam (e.g., 12k `:`, 1.4k `true`), overwhelming context and triggering OOMs. Indicates serious reasoning integrity flaws.  
   [Link](https://github.com/earendil-works/pi/issues/9561)

6. **#9555 — compaction_end wipes visible transcript**  
   User experience degradation: compaction erases visible history, forcing users to scroll back. Contradicts expectations of non-destructive summarization.  
   [Link](https://github.com/earendil-works/pi/issues/9555)

7. **#9554 — GLM-5.3-flash renders chain-of-thought as reply body**  
   Z.AI’s model outputs internal reasoning as visible text with no warning — undermines trust and clarity. Needs detection + UX flagging.  
   [Link](https://github.com/earendil-works/pi/issues/9554)

8. **#9563 — Concurrent sessions race OAuth refresh (Slack MCP)**  
   Headless automation (e.g., launchd fleets) invalidates shared OAuth tokens due to provider token rotation. Breaks unattended workflows.  
   [Link](https://github.com/earendil-works/pi/issues/9563)

9. **#9562 — Keychain rewrites wipe silent-read grants**  
   macOS secure storage resets break OAuth delegation for MCP adapters. A silent failure mode for enterprise auth flows.  
   [Link](https://github.com/earendil-works/pi/issues/9562)

10. **#7739 — Startup-time budget targeting jcode-comparable latency**  
   Long-standing performance goal: Pi still lags behind jcode in cold-start latency/memory. Community seeks measurable SLA targets.  
   [Link](https://github.com/earendil-works/pi/issues/7739)

---

### **Key PR Progress**  
*(Top 10 impactful PRs merged or in review)*

1. **#9548 — Mid-conversation system messages**  
   System prompts and tool changes now appear in transcript history — enabling stateful session resumption and branch-aware restoration. Major UX improvement.  
   [Link](https://github.com/earendil-works/pi/pull/9548)

2. **#9556 — serverTools: declare provider-native tools in model config**  
   Enables direct use of server-side tools (e.g., OpenAI web_search, GLM coding-plan search) without client-side wrappers. Unlocks provider-specific capabilities.  
   [Link](https://github.com/earendil-works/pi/pull/9556)

3. **#9543 — Add “exit” tool call for models**  
   Models can now autonomously end sessions via `exit` tool call — aligning with natural user intent (“bye”, “I’m done”). Complements #4538’s `/exit` alias.  
   [Link](https://github.com/earendil-works/pi/pull/9543)

4. **#9541 — Show human-readable model labels in picker**  
   Replaces raw IDs (e.g., `zai/glm-5.3-flash`) with friendly names from provider catalogs — improves discoverability and reduces confusion.  
   [Link](https://github.com/earendil-works/pi/pull/9541)

5. **#9531 — Permanent branch deletion from session tree**  
   Adds `shift+d` to prune orphaned branches in `/tree` — critical for managing complex multi-threaded workflows.  
   [Link](https://github.com/earendil-works/pi/pull/9531)

6. **#9558 — Azure Foundry v3 support for Anthropic**  
   Adds full test coverage for Azure Anthropic endpoints — stream, abort, image, tool-call, and cross-provider handoff validated. Enterprise-ready.  
   [Link](https://github.com/earendil-works/pi/pull/9558)

7. **#9488 — Canonical Codex turn attribution**  
   Introduces `requestIdentity` metadata (session/thread/turn) for reliable request tracing across retries, steering, and compaction. Essential for audit trails.  
   [Link](https://github.com/earendil-works/pi/pull/9488)

8. **#9550 — compact before send using system/tool tokens**  
   (Withdrawn) — Intended to improve token budgeting during compaction; superseded by broader context management work.  
   [Link](https://github.com/earendil-works/pi/pull/9550)

9. **#9540 — Lazy-load jiti/TUI in extension loader**  
   Delays heavy TUI/TypeBox imports until first extension load — reduces startup overhead for headless/embedded use cases.  
   [Link](https://github.com/earendil-works/pi/pull/9540)

10. **#9559 — Llama.cpp provider: live model resolution for subagents**  
   Enables subagents (e.g., `coder`) to reuse the same live llama.cpp model without reloading — critical for low-latency agent chains.  
   [Link](https://github.com/earendil-works/pi/issues/9559) *(Note: Issue opened, PR pending)*

---

### **Hot Discussions**  
*(Show and tell only — no Q&A or ideas)*

- **Show and Tell**  
  - **#9552 — Pi Heao GUI**: A Windows desktop client built atop Pi’s TUI engine. Provides native windowing, drag-and-drop, and system tray integration — already recommended by daily users.  
    [Link](https://github.com/earendil-works/pi/discussions/9552)  
    *Note: 1 upvote, no comments — early signal of growing ecosystem tooling.*

---

### **Feature Request Trends**  
*(Dominant directions from Issues + PRs)*

1. **Model Autonomy** — “exit” tool (PR #9543) + `/exit` alias (Issue #4538) → Models should control session lifecycle.  
2. **Provider Interoperability** — `serverTools` (PR #9556), Azure Foundry (PR #9558), CommandCode support (Issue #9553) → Native tool and endpoint parity is a top priority.  
3. **TUI Performance** — Redraw storms (#9255, #9549), compaction UX (#9555), and mouse event forwarding (#9538) → UI responsiveness is now a core reliability metric.  
4. **State Persistence** — Session inheritance (#9054), system message history (#9548), OAuth token resilience (#9562, #9563) → Sessions must survive restarts, branches, and auth rotations.  
5. **Context Efficiency** — Context size misconfiguration (#9566), token budgeting (#9075), tool-call spam (#9561) → Token economy is becoming a first-class concern.

---

### **Developer Pain Points**  
*(Recurring frustrations)*

- **TUI Rendering Bugs**: Repeated reports of full-screen redraw storms (#9255, #9549), double-rendered tokens (#9542), and broken scroll/mouse events (#9538) — indicate deep UI state management flaws.
- **OAuth/Token Management**: OAuth refresh races (#9563), keychain partition resets (#9562), GitHub 403 scraping (#9546) — enterprise auth flows are brittle and poorly abstracted.
- **Startup Performance**: jiti cache failures (#9565), extension loader bloat (#9540), and cold-start latency (#7739) — slow startup undermines CLI utility in automation.
- **Model Behavior Transparency**: GLM-5.3-flash exposing CoT as output (#9554), unhandled tool call floods (#9561) — lack of guardrails or filtering erodes trust in model outputs.
- **Provider Gaps**: Missing support for CommandCode (#9553), inconsistent Llama.cpp model discovery (#9559), and incomplete JSON Schema handling (#9557) — fragmentation across providers is growing.

---

*Digest generated by AI analyst for Pi developer ecosystem — 2026-09-14*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest — 2026-09-14**

---

### **1. Today's Highlights**  
The Qwen Code ecosystem saw a surge in stability and cross-platform fixes, with a critical wave of React #185 UI crashes being reported across TUI and web-shell interfaces — indicating a systemic issue in background-agent state management. Simultaneously, major PRs landed to improve sandboxing (bwrap), containerized subagents, and Windows hook compatibility, signaling a strong push toward production-grade reliability and multi-platform parity.

---

### **2. Releases**  
- **v0.23.3-nightly.20260913.faa395885e**: Minor nightly release focused on cleanup and driver updates.  
- **cua-driver-rs v0.20.6**: Prebuilt binaries now include codesigned + notarized macOS universal binaries, unsigned Linux (x86_64/arm64), and Windows UIAccess payloads.  
  → [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260913.faa395885e)

---

### **3. Hot Issues**  
*Top 10 most critical or high-engagement issues*

1. **#11500**: TUI exits silently due to React #185 (Maximum update depth) when multiple background agents complete — **12 comments**, 1 upvote.  
   → *Critical UI instability affecting all users running multi-agent workflows.*  
   [Link](https://github.com/QwenLM/qwen-code/issues/11500)

2. **#11756**: Virtualized history crashes with React #185 during background-agent workflows — **4 comments**.  
   → *Reproducible in stable builds; likely root cause of #11500 and #11783.*  
   [Link](https://github.com/QwenLM/qwen-code/issues/11756)

3. **#11783**: TUI crashes seconds after background task registration — **3 comments**.  
   → *Newly reported; confirms React state loop triggered by agent lifecycle events.*  
   [Link](https://github.com/QwenLM/qwen-code/issues/11783)

4. **#11590**: `metadata` field in OpenAI-compatible requests breaks non-Qwen models (e.g., GLM-5.3) — **4 comments**.  
   → *High-impact integration bug: blocks use of competing LLMs via DashScope gateway.*  
   [Link](https://github.com/QwenLM/qwen-code/issues/11590)

5. **#11777**: CI Test job intermittently SIGTERMs with *all tests green* — **4 comments**.  
   → *Flaky CI undermines release confidence; suspected process race at workspace→test handoff.*  
   [Link](https://github.com/QwenLM/qwen-code/issues/11777)

6. **#11764**: Bash allow rule vulnerability: backslash in single quotes executes second command silently — **3 comments**.  
   → *Critical security flaw in shell sandboxing; potential for privilege escalation.*  
   [Link](https://github.com/QwenLM/qwen-code/issues/11764)

7. **#11747**: TUI crashes on RHEL 10 due to missing ICU data — **3 comments**.  
   → *Highlights poor dependency detection; users get silent exits instead of actionable errors.*  
   [Link](https://github.com/QwenLM/qwen-code/issues/11747)

8. **#11762**: `/delete` doesn’t clean `logs.json` — **3 comments**.  
   → *Privacy and disk hygiene concern: full conversation history persists indefinitely.*  
   [Link](https://github.com/QwenLM/qwen-code/issues/11762)

9. **#11724 / #11725**: 7GB+ memory usage and CLI crashes on Windows — **4 comments total**.  
   → *Repeated reports; suggests memory leaks in session management or agent lifecycle.*  
   [Link](https://github.com/QwenLM/qwen-code/issues/11724)

10. **#11772**: Anthropic pipeline rejects `thinking` blocks without `signature` — **2 comments**.  
    → *Breaks compatibility with SGLang and other strict Anthropic-compatible endpoints.*  
    [Link](https://github.com/QwenLM/qwen-code/issues/11772)

---

### **4. Key PR Progress**  
*Top 10 impactful PRs merged or under active review*

1. **#11794**: `fix(cli): honor output language in stateless generation` — Ensures `output-language` config overrides interface defaults in stateless mode.  
   [Link](https://github.com/QwenLM/qwen-code/pull/11794)

2. **#11614**: `feat(cli): add bwrap kernel sandbox backend for Linux` — Adds lightweight, container-free Linux sandbox using `bwrap` (no root or daemon required).  
   [Link](https://github.com/QwenLM/qwen-code/pull/11614)

3. **#11711**: `feat(core): add container execution for subagents` — Enables `QWEN_AGENT_EXECUTION_BACKEND=docker/podman` for secure, isolated subagent execution.  
   [Link](https://github.com/QwenLM/qwen-code/pull/11711)

4. **#11636**: `feat: track background result execution across daemon and web shell` — Unifies lifecycle of background task results between CLI and Web Shell.  
   [Link](https://github.com/QwenLM/qwen-code/pull/11636)

5. **#11692**: `feat(core): make web_search budget configurable` — Increases default timeout from 60s → 120s (`WEB_SEARCH_TIMEOUT_MS`) and bounds extractor output.  
   [Link](https://github.com/QwenLM/qwen-code/pull/11692)

6. **#11538**: `feat: select the OpenAI wire API per model` — Adds `wireApi: "chat-completions" | "responses"` per model config for better compatibility.  
   [Link](https://github.com/QwenLM/qwen-code/pull/11538)

7. **#11086**: `feat(serve): scope extensions to workspace runtimes` — Enables workspace-local extension catalogs, improving isolation and reproducibility.  
   [Link](https://github.com/QwenLM/qwen-code/pull/11086)

8. **#11788**: `fix(cli): treat write-side PTY EIO as benign teardown race` — Suppresses noisy EIO crashes during terminal shutdown, improving stability.  
   [Link](https://github.com/QwenLM/qwen-code/pull/11788)

9. **#11778**: `fix(hooks)!: resolve Windows command hooks through cmd fallback and PowerShell probe` — Fixes Windows hook execution by falling back to PowerShell when `cmd.exe` fails to parse quoted paths.  
   [Link](https://github.com/QwenLM/qwen-code/pull/11778)

10. **#11722**: `feat(web-shell): add PWA installability and Android development shell` — Adds service worker, manifest, and installability for mobile/web PWA usage.  
    [Link](https://github.com/QwenLM/qwen-code/pull/11722)

---

### **5. Hot Discussions**  
*No discussion threads (e.g., GitHub Discussions) were provided in the data source.*

---

### **6. Feature Request Trends**  
*Emerging patterns from Issues and PRs*

- **Cross-model compatibility**: Multiple reports (#11590, #11772) demand configurable or model-aware request formatting to support non-Qwen APIs (GLM, Anthropic, SGLang).  
- **Memory & stability**: High memory usage (#11724), silent crashes (#11500, #11783), and SIGTERM flakiness (#11777) indicate urgent need for profiling and lifecycle cleanup.  
- **Sandboxing & security**: `bwrap` (#11614) and container backends (#11711) are being adopted; demand growing for configurable, OS-native isolation.  
- **CI/CD reliability**: Flaky E2E tests (#10490, #11777) and OOMs (#11780) are driving retry logic and resource caps — a clear focus on production-grade CI.  
- **Internationalization**: Web Shell command explanations hardcoded to EN/zh-CN (#11791); users demand language-aware UI localization.

---

### **7. Developer Pain Points**  
*Recurring frustrations and high-frequency requests*

1. **React #185 crashes** — *Dominant issue*: Background agents trigger infinite React state loops in TUI/Web Shell. Root cause likely in `useBoxMetrics` or virtualized history.  
2. **Silent failures** — TUI exits without error (#11500), ICU missing without warning (#11747), PTY EIO crashes (#11788 before fix).  
3. **Memory bloat** — 7GB+ usage on Windows (#11724), logs.json accumulation (#11762), no memory limits or GC hooks.  
4. **Cross-platform inconsistency** — Windows hook execution broken (#11778), macOS notarization required, Linux ICU dependency gaps.  
5. **CI instability** — Non-deterministic test failures, OOMs during `tsc --build`, and SIGTERMs with green tests undermine trust in CI pipelines.  
6. **Privacy & data hygiene** — `/delete` doesn’t purge logs (#11762); no setting to disable telemetry or limit session history.  

> 🔧 **Top priority**: Fix React #185 state loops — this is the most-reported, most disruptive issue across UI layers. Second priority: memory leak audit and CI reliability.

--- 

*Digest generated from GitHub activity as of 2026-09-14. All links point to QwenLM/qwen-code repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*