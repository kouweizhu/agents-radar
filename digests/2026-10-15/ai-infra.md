# AI 基础设施日报 2026-10-15

> 生成时间: 2026-10-15 00:47 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this entire report into Simplified Chinese, following the specific rules provided:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, code spans, file paths, project names, version tags exactly as-is
4. Use natural technical Chinese register (Chinese developer newsletter style) - not literal word-for-word

Let me translate this carefully while maintaining the exact structure:

## 1. Ecosystem Overview
## 2. Activity Comparison  
## 3. Model Support Race
## 4. Performance Frontier
## 5. Layer Positioning
## 6. Trend Signals

I need to:
- Keep all headings
- Keep all tables (including alignment rows)
- Keep all lists
- Keep bold/italic
- Keep horizontal rules
- Keep emojis
- Keep URLs
- Keep code spans and blocks
- Keep numbers and dates
- Keep project names, version numbers, issue numbers as-is

Let me do the translation:</think>

# 跨项目对比报告 — 2026-10-15

---

## 1. 生态概览

AI 推理生态正在围绕不同的操作层进行整合。当前的活动呈现出明显的分化：生产级服务引擎（vLLM、SGLang）竞相解决 Blackwell/RTX 5090 稳定性问题并优化 DeepSeek V4.1，而本地运行时（llama.cpp、Ollama）则推进多模态模型覆盖和安全加固。网关层（LiteLLM）完善了其 MCP 框架，训练推理混合方案（Unsloth）扩展到多机 GGUF 服务。所有项目的共同点是：**量化回归、新 NVIDIA 硬件上的 CUDA Graph 不稳定以及多后端 ROCm 支持** 是消耗维护者精力的主要工程瓶颈。

---

## 2. 活动对比

| 项目 | 开放 Issues（约） | 近期 PRs | 发布（24h） | 回归缺陷数 |
|---------|----------------------|------------|----------------|------------------|
| **vLLM** | 8+ critical/high | 15+ 进行中 | 无 | 3 个活跃回归 |
| **SGLang** | 6+ critical/high | 12+ 进行中 | 无 | 2 个活跃回归 |
| **llama.cpp** | 10+ issues | 10+ commits | 无 | 3 个关键（RTX 5090、Strix Halo） |
| **Ollama** | 15+ issues | v0.40.5-rc0 | v0.40.5-rc0 | 1 个确认（延迟） |
| **LiteLLM** | 8+ issues | 10+ PRs | v1.105.1 stable | 0 critical |
| **Unsloth** | 10+ issues | 10+ PRs | 无 | 2 个 Windows 回归 |

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------|------|--------|-----------|--------|---------|
| **DeepSeek V4.1** | — | ✅ 发布首日支持，全面优化 | — | ⚠️ 大图 500 错误 | — |
| **Gemma-4** | ✅ FA4 FP8 MMA | — | — | ⚠️ 需要 ctx_other (12b) | — |
| **Qwen3.8-Flash-Next** | ✅ MI355X | ✅ CUDA graphs | — | — | — |
| **Nemotron Super 3.5 VL** | — | — | ✅ 新架构 | — | ✅ MiniMax-H3 AMD |
| **Maion-Coder** | — | — | ✅ 原生支持 | — | — |
| **GLiNER2.5-Decide** | — | — | ✅ /v1/systemone API | — | — |
| **K2 Horizon** | — | — | — | ✅ 已请求 | — |
| **d1 (LiquidAI)** | — | — | — | ⚠️ 编码阻塞 | — |

**领先者**：**SGLang** 在 DeepSeek V4.1 上领先——在发布后 48 小时内交付了完整的优化栈（decoder bounded replay、BCG、MegaMoE、权重缓存守护进程）。llama.cpp 在本地模型覆盖上领先（Maion-Coder、Nemotron VL）。Ollama 在新模型采用上落后，但在易用性上领先。

---

## 4. 性能前沿

| 优化领域 | 主要项目 | 当前重点 |
|-------------------|------------------|----------------|
| **KV Cache / 前缀缓存** | vLLM、SGLang | 混合 Mamba/GDN 损坏修复；agentic 缓存调度路线图 |
| **推测解码** | vLLM、SGLang | MTP + 前缀缓存交互；DSv4.1 的 BCG bounded replay |
| **量化** | llama.cpp、vLLM | INT8 GEMM 调度（Triton）、NVFP4 KV 缓存、W4A8 MXFP4 |
| **分布式服务** | SGLang、Unsloth | RPC 多机 GGUF；权重缓存守护进程（<1s 加载） |
| **内核融合** | vLLM、llama.cpp | 融合 QK-norm+RoPE+gate（ROCm）、AMD 上 conv2d SIMT |
| **内存规划** | Unsloth | 扩散模型学习到的激活峰值 vs 扁平预留 |

**前沿转变**：SGLang 的权重缓存守护进程（306s→<1s 加载）和 Unsloth 的扩散内存规划器是当天最具影响力的单一优化。vLLM 的前缀缓存在混合模型上仍存在 bug 困扰。

---

## 5. 层级定位

| 层级 | 项目 | 价值主张 |
|-------|----------|-------------------|
| **生产服务引擎** | vLLM、SGLang | 最高吞吐量、多后端、推测解码、前缀缓存 |
| **本地运行时** | llama.cpp | 仅 GGUF、CPU/Metal/OpenCL/Vulkan、最广模型支持、无服务器 |
| **网关 / 代理** | LiteLLM | 多提供商聚合、MCP 网关、成本追踪、可观测性 |
| **一体化本地方案** | Ollama | 零配置、单二进制、模型库、HTTP API |
| **训练 + 推理混合** | Unsloth | 微调 + 推理、GGUF 生成、多 GPU、扩散模型 |

**定位洞察**：生态系统正在垂直分离。vLLM/SGLang 在生产功能上竞争；llama.cpp 主导本地/无 GPU 场景；LiteLLM 抽象所有模型提供商。Unsloth 占据独特位置——是唯一将训练和推理结合在统一 UI 中的项目。

---

## 6. 趋势信号

### 基础设施工程师应关注

| 趋势 | 证据 | 影响 |
|-------|----------|-------------|
| **Blackwell (SM120) 不稳定** | 3 个项目报告 RTX 5090 / GB300 上 CUDA Graph 挂起 | 生产级 Blackwell 部署需要 `GGML_CUDA_DISABLE_GRAPHS=1`；预计 6-8 周后内核修复 |
| **MCP 成为标准 API** | LiteLLM: 3 个 PR 关于 OAuth 作用域、工具解析、能力广告 | MCP 是新的 OpenAI 兼容抽象；预计网关供应商将标准化 |
| **ROCm 10.0 进入生产** | vLLM、Unsloth: MI355X、RDNA4、Strix Halo 优化 | AMD GPU 推理可用于生产；ROCm 7.2 进入维护 |
| **发布首日模型支持竞赛** | SGLang: DeepSeek V4.1 优化在发布后 48h 内交付 | 下游项目必须投资模型集成管线，否则失去竞争优势 |
| **量化回归周期** | llama.cpp: MMVQ 回归；vLLM: NVFP4 比 FP8 慢 1.7x | 低比特量化需要每个架构持续的内核调优；不要假设"开箱即用" |
| **多机服务兴起** | SGLang: N 机 RPC；Unsloth: GGUF 网络传输 | 单节点以上的水平扩展正从研究走向生产功能 |

### Agent / 应用开发者应关注

- **避免在 pip 安装的捆绑包上使用推测解码**（Ollama、SGLang）—— CUDA 工具包不匹配导致崩溃。
- **混合模型上的前缀缓存不稳定**（Mamba + GDN）—— 仔细测试或禁用。
- **LiteLLM MCP 网关已可用于生产**—— 用于多工具、多提供商的 agentic 应用。
- **Unsloth 多机 GGUF 支持大规模批处理推理**—— 适用于离线批处理工作负载。
- **Windows 支持滞后**—— Ollama、llama.cpp 和 Unsloth 都有 Windows 特定回归；建议生产使用 macOS/Linux。

---

*跨项目分析基于 GitHub 数据 — 2026-10-15*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the English vLLM Daily Digest into Chinese. Let me go through it carefully:

1. **Today's Highlights** - Keep as is
2. **Releases & Breaking Changes** - Translate
3. **New Model & Hardware Support** - Keep tables as-is but translate content
4. **Performance & Optimization** - Translate
5. **Stability & Regressions** - Keep tables as-is but translate content
6. **What This Means for Application Developers** - Translate

Let me translate maintaining the structure exactly:

## 1. 今日要闻

vLLM 项目今日在多个方向上持续活跃开发。Mamba2 chunk scan 内核的关键 bug 已修复（#61718），解决了 Hopper 上的 NaN 输出问题。AMD ROCm 支持持续扩展，新增了 MI355 的新 CI 任务和原生 FP8 Triton 线性层后端。社区正在解决混合 Mamba/GDN 模型的 prefix caching 问题和推测解码场景下的相关问题。

## 2. 版本发布与重大变更

过去 24 小时内无新版本发布。

**近期变更迁移说明：**
- PR #61701 移除了 Medusa 和 MLP speculator 支持（`method="medusa"` 和 `method="mlp_speculator"` 现已被拒绝）。这简化了代码库，但使用这些已弃用方法的用户可能需要迁移。

## 3. 新模型与硬件支持

| 模型/功能 | 状态 | PR/Issue |
|---------------|--------|----------|
| **NemotronLabsDiffusion** | 进行中 — 三模推理（masked block diffusion + 自回归）| #58387 |


| **Gemma4ForSequenceClassification** | 请求中 — 新模型支持 | #43726 |
| **ROCm 10.0 (TheRock)** | 正在成为默认值；ROCm 7.2 可用 `-rocm72` | #58761 |
| **AMD MI355X / gfx950** | 进行中 — 正在优化 Qwen3.8-Flash-Next 性能 | #59575 |
| **RDNA4 (gfx1201)** | Per-token FP8 Triton 线性层后端，支持调优 | #61091 |
| **RDNA3/RDNA3.5 (gfx11)** | W4A8 int8

-dot MXFP4 GEMV 内核 | #60413 |

## 4. 性能与优化

### 已合并 / 审核中
- **#61716** — `silu_and_mul_quant` 内核：修复了静态 FP8 模型的向量化循环执行问题
- **#60372** — 为 Gemma-4 全注意力启用 FA4 SM90 FP8 MMA（保留 FP8 KV-cache）
- **#51406** — ROCm：为 Qwen3-Next/Qwen3.5 融合 QK-norm+RoPE+gate Triton 内核

### 进行中
- **#50416** — **FlashInfer NVFP4 KV cache 回归**：SM120 (Blackwell) 上比 FP8 慢约 1.7-1.8 倍

。48 个因果 paged-prefill 内核耗时 145.8ms，而 FP8 更快
- **#60008** — 混合 Mamba prefix caching 导致 Nemotron-3.5-Lightning 吞吐量下降 11-16%（按组的 eager block-table ops，每步 align 内核在 CUDA graphs 外）
- **#59575** — AMD MI355X 针对 Qwen3.8-Flash-Next 配合 MXFP4 MoE 的优化追踪
- **#57406** — GLM 5.3 性能优化后续

### RFC 与设计
- **#43224** — RFC：将编译器融合迁移到手动融合（追踪从 `torch.compile` 到直接模型代码融合的转变）
- **#61406** — RFC：vLLM Simulator — 基于 CPU 的 CI 和硬件感知性能模拟

## 5. 稳定性与回归

### 严重（活跃 Bug）
| Issue | Severity | Status |
|-------|----------|--------|
| **#54521** — Qwen3.8-Flash-Next greedy 解码在 prompt 长度接近 `indexer_budget` 时非确定性（SM121/GB10）| High — 错误输出 | Open，50 条评论 |
| **#60660** — FlashInfer MNNVL 崩溃：GLM-5.3-Flash 多块长 prefill 期间 `CUDA_ILLEGAL_ADDRESS` | High — 崩溃 | Open |
| **#61229** — NIXLConnector：KV 块在远程 READ 进行中时被释放，decode 消费被覆盖的 KV | High — 数据损坏 | Open，6 条评论 |
| **#61160** — 通过 PD disaggregation 中共享前缀 KV 重用导致跨请求上下文污染 | High — 安全/正确性 | Open，5 条评论 |

### 可用修复
| Issue | 修复 PR | 状态 |
|-------|--------|--------|
| Mamba2 chunk scan 在 sm90 上 NaN | #61718 | Open（同一天）|
| NIXL handshake 对纯 SSM 模型崩溃 | #61619 | Open |
| MTP 下混合 GDN prefix-cache 命中 | #52244 | Open |
| Rope hf_overrides 传播到 MTP draft | #58094 | Open |
| Prefix caching + MTP 破坏输出（混合 GDN）| #53912 | Open |

### 已确认回归
- **#51663** — 自 v0.24.0 以来 Qwen3.6-35B-A3B-FP8 的输出 token 吞吐量下降（v0.26.0 仍存在）

## 6. 这对应用开发者意味着什么

1. **在混合模型上使用 prefix caching 的用户**：多个 bug（#53912, #54360, #51250）影响了 Mamba-2/GDN 混合和推测解码的 prefix cache 效果。若使用这些架构，考虑禁用 prefix caching 或仔细测试。

2. **Anthropic Messages API 用户**：#61721 为不支持的非文本 system content blocks 添加警告——请检查日志以避免静默数据丢失。

3. **Medusa/MLP speculator 用户**：这些方法现已移除（#61701）。请迁移到支持的推测解码方法（MTP、dflash）。

4. **AMD ROCm 用户**：ROCm 10.0 正在成为默认版本。如使用 ROCm 7.2，请准备过渡。Qwen3.8-Flash-Next 的新 MI355X 支持即将推出。

5. **Gemma-4 用户**：现已为全注意力启用 FP8 MMA 优化——在 Hopper 上预期吞吐量提升。

6. **CPU 推理**：Triton 无关 CPU 模型运行器的工作持续进行（#60924），以支持 ARM/macOS 兼容性。</think>

# vLLM 每日简报 — 2026-10-15

## 1. 今日要闻

vLLM 项目今日在多个方向上持续活跃开发。Mamba2 chunk scan 内核的关键 bug 已修复（#61718），解决了 Hopper 上的 NaN 输出问题。AMD ROCm 支持持续扩展，新增了 MI355 的新 CI 任务和原生 FP8 Triton 线性层后端。社区正在解决混合 Mamba/GDN 模型的 prefix caching 问题和推测解码场景下的相关问题。

---

## 2. 版本发布与重大变更

过去 24 小时内无新版本发布。

**近期变更迁移说明：**
- PR #61701 移除了 Medusa 和 MLP speculator 支持（`method="medusa"` 和 `method="mlp_speculator"` 现已被拒绝）。这简化了代码库，但使用这些已弃用方法的用户可能需要迁移。

---

## 3. 新模型与硬件支持

| 模型/功能 | 状态 | PR/Issue |
|---------------|--------|----------|
| **NemotronLabsDiffusion** | 进行中 — 三模推理（masked block diffusion + 自回归）| #58387 |
| **Gemma4ForSequenceClassification** | 请求中 — 新模型支持 | #43726 |
| **ROCm 10.0 (TheRock)** | 正在成为默认值；ROCm 7.2 可用 `-rocm72` | #58761 |
| **AMD MI355X / gfx950** | 进行中 — 正在优化 Qwen3.8-Flash-Next 性能 | #59575 |
| **RDNA4 (gfx1201)** | Per-token FP8 Triton 线性层后端，支持调优 | #61091 |
| **RDNA3/RDNA3.5 (gfx11)** | W4A8 int8-dot MXFP4 GEMV 内核 | #60413 |

---

## 4. 性能与优化

### 已合并 / 审核中
- **#61716** — `silu_and_mul_quant` 内核：修复了静态 FP8 模型的向量化循环执行问题
- **#60372** — 为 Gemma-4 全注意力启用 FA4 SM90 FP8 MMA（保留 FP8 KV-cache）
- **#51406** — ROCm：为 Qwen3-Next/Qwen3.5 融合 QK-norm+RoPE+gate Triton 内核

### 进行中
- **#50416** — **FlashInfer NVFP4 KV cache 回归**：SM120 (Blackwell) 上比 FP8 慢约 1.7-1.8 倍。48 个因果 paged-prefill 内核耗时 145.8ms vs FP8
- **#60008** — 混合 Mamba prefix caching 导致 Nemotron-3.5-Lightning 吞吐量下降 11-16%（按组的 eager block-table ops，每步 align 内核在 CUDA graphs 外）
- **#59575** — AMD MI355X 针对 Qwen3.8-Flash-Next 配合 MXFP4 MoE 的优化追踪
- **#57406** — GLM 5.3 性能优化后续

### RFC 与设计
- **#43224** — RFC：将编译器融合迁移到手动融合（追踪从 `torch.compile` 到直接模型代码融合的转变）
- **#61406** — RFC：vLLM Simulator — 基于 CPU 的 CI 和硬件感知性能模拟

---

## 5. 稳定性与回归

### 严重（活跃 Bug）
| Issue | 严重程度 | 状态 |
|-------|----------|--------|
| **#54521** — Qwen3.8-Flash-Next greedy 解码在 prompt 长度接近 `indexer_budget` 时非确定性（SM121/GB10）| 高 — 错误输出 | Open，50 条评论 |
| **#60660** — FlashInfer MNNVL 崩溃：GLM-5.3-Flash 多块长 prefill 期间 `CUDA_ILLEGAL_ADDRESS` | 高 — 崩溃 | Open |
| **#61229** — NIXLConnector：KV 块在远程 READ 进行中时被释放，decode 消费被覆盖的 KV | 高 — 数据损坏 | Open，6 条评论 |
| **#61160** — 通过 PD disaggregation 中共享前缀 KV 重用导致跨请求上下文污染 | 高 — 安全/正确性 | Open，5 条评论 |

### 可用修复
| Issue | 修复 PR | 状态 |
|-------|--------|--------|
| Mamba2 chunk scan 在 sm90 上 NaN | #61718 | Open（同一天）|
| NIXL handshake 对纯 SSM 模型崩溃 | #61619 | Open |
| MTP 下混合 GDN prefix-cache 命中 | #52244 | Open |
| Rope hf_overrides 传播到 MTP draft | #58094 | Open |
| Prefix caching + MTP 破坏输出（混合 GDN）| #53912 | Open |

### 已确认回归
- **#51663** — 自 v0.24.0 以来 Qwen3.6-35B-A3B-FP8 的输出 token 吞吐量下降（v0.26.0 仍存在）

---

## 6. 这对应用开发者意味着什么

1. **在混合模型上使用 prefix caching 的用户**：多个 bug（#53912, #54360, #51250）影响了 Mamba-2/GDN 混合和推测解码的 prefix cache 效果。若使用这些架构，考虑禁用 prefix caching 或仔细测试。

2. **Anthropic Messages API 用户**：#61721 为不支持的非文本 system content blocks 添加警告——请检查日志以避免静默数据丢失。

3. **Medusa/MLP speculator 用户**：这些方法现已移除（#61701）。请迁移到支持的推测解码方法（MTP、dflash）。

4. **AMD ROCm 用户**：ROCm 10.0 正在成为默认版本。如使用 ROCm 7.2，请准备过渡。Qwen3.8-Flash-Next 的新 MI355X 支持即将推出。

5. **Gemma-4 用户**：现已为全注意力启用 FP8 MMA 优化——在 Hopper 上预期吞吐量提升。

6. **CPU 推理**：Triton 无关 CPU 模型运行器的工作持续进行（#60924），以支持 ARM/macOS 兼容性。

---

*基于 2026-10-15 的 GitHub 数据生成*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Digest into Chinese. I need to:
1. Translate all headings, body text, and table content
2. Keep all technical terms, code, URLs, issue numbers, and identifiers in their original form
3. Preserve the Markdown structure exactly (tables, headings, lists, etc.)
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through and translate while maintaining the structure:

Title: SGLang Digest — 2026-10-15 → SGLang 每日简报 — 2026-10-15

Section 1: Today's Highlights
Section 2: Releases & Breaking Changes
Section 3: New Model & Hardware Support
Section 4: Performance & Optimization
Section 5: Stability & Regressions
Section 6: What This Means for Application Developers

Let me translate each section carefully.</think>

# SGLang 每日简报 — 2026-10-15

## 1. 今日要闻

SGLang 持续推进 DeepSeek V4.1 优化，包括解码器受限重放（decoder bounded replay）和 BCG（可中断 CUDA 图）覆盖。项目同时在修复多后端稳定性问题——尤其是 Blackwell（SM120）上的 CUDA Graph 正确性，以及 pip 安装包上投机解码崩溃的问题。Intel XPU HiCache L1↔L2 支持正在开发中，彰显更广泛的加速器多样性。

---

## 2. 发布与破坏性变更

过去 24 小时内无发布。

---

## 3. 新模型与硬件支持

| 项目 | 说明 | 参考 |
|------|------|------|
| **DeepSeek V4.1** | 通过 PR #44356 添加首发支持 | [#44356](https://github.com/sgl-project/sglang/pull/44356) |
| **RTX PRO 6000 (SM120)** | 8× RTX PRO 6000（PCIe，无 NVLink）上的 DeepSeek-V4.1-Flash 现场配置已文档化 | [#40877](https://github.com/sgl-project/sglang/issues/40877) |
| **GLM-5.3-Flash on SM120** | 需要 Triton attention 后端；FA4 在 hybrid extend reshape 时崩溃 | [#42012](https://github.com/sgl-project/sglang/issues/42012) |
| **T-Head SAIL (震武 810/M890P)** | 首批 PPU 支持路线图已开启 | [#37519](https://github.com/sgl-project/sglang/issues/37519) |
| **Intel XPU HiCache** | 启用 L1↔L2 分层（PR 推进中） | [#32503](https://github.com/sgl-project/sglang/pull/32503) |

---

## 4. 性能与优化

| 领域 | 变更 | 影响 | 参考 |
|------|------|------|------|
| **Weight Cache Daemon** | 每进程守护进程持有后量化权重，通过 CUDA IPC 服务 | 权重加载：**306–327s → <1s**（Qwen3-235B FP8） | [#33522](https://github.com/sgl-project/sglang/issues/33522) |
| **DSv4.1 TRT-LLM 解码器** | BCG（可中断 CUDA 图）受限重放 | 启用长序列投机解码 | [#44326](https://github.com/sgl-project/sglang/pull/44326) |
| **MegaMoE Top-K Reduce** | 持久化内核消除解码延迟开销 | 消除每 token 的 reduce 过程 | [#39832](https://github.com/sgl-project/sglang/pull/39832) |
| **SWA 窗口裁剪** | 新增 `--swa-max-states-per-path` 用于统一缓存 radix 路径 | 控制混合 SWA 模型内存 | [#39694](https://github.com/sgl-project/sglang/pull/39694) |
| **Encoder SWA 重放** | 折叠到 extend forward（消除额外 eager forward） | GB300 上每次前缀命中可节省约 240ms | [#43166](https://github.com/sgl-project/sglang/pull/43166) |
| **AMD GDN Prefill** | FlyDSL GDN prefill 后端（gfx95） | Qwen3.5-397B TP4 上约 1.4–1.5× 加速 | [#39595](https://github.com/sgl-project/sglang/pull/39595) |
| **LoRA Buffer 插槽** | 融合模块成员加载到独立 buffer 插槽 | 支持灵活的适配器定位 | [#44332](https://github.com/sgl-project/sglang/pull/44332) |

---

## 5. 稳定性与回归

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| **Critical** | 投机解码在首个非贪婪请求时崩溃（flashinfer JIT 在 bundle CCCL vs pip cu13 下失败） | 待处理 | — |
| **Critical** | 收集 PR 测试中的 CUDA coredump（自动追踪，326 条评论） | 待处理 | — |
| **High** | 测试不稳定 / CI 基础设施故障（60 条评论） | 待处理 | — |
| **High** | GLM-5.3-Flash thinking 输出在多工具 agentic prompt 下退化为重复的 '!' | 待处理 | — |
| **Medium** | `--fp4-gemm-backend marlin` 在 SM100 上崩溃（mm_fp4 无 marlin 后端） | 待处理 | — |
| **Medium** | NPU HiCache 在 device k_buffer 为单一 tensor 时崩溃（自 #40326） | 待处理 | — |
| **Medium** | `--enable-symm-mem`: 4 GiB 池未从 `--mem-fraction-static` 中扣除 | 待处理 | — |
| **Medium** | Dumper 过滤器 eval() 启用调度器进程 RCE（安全风险） | 待处理 | — |
| **Low** | Mistral 流式输出删除普通文本的闭合括号 | 待处理 | — |
| **Low** | DeepSeek V4/V3.2 工具调用解析器用多余键包装参数 | 待处理 | — |

---

## 6. 这对应用开发者意味着什么

1. **DeepSeek V4.1 已可投入生产** — 优化路线图已落地；配合投机解码和可中断 prefill CUDA 图，预期吞吐量强劲。请关注追踪 issue 了解剩余项目。

2. **Blackwell（SM120）需要 Triton attention** — 在 RTX PRO 6000 上运行 GLM-5.3-Flash 时，使用 `--attention-backend triton`。FA4 在 hybrid extend 时会崩溃。

3. **投机解码需要 CUDA toolkit** — 若使用 pip 安装包，避免在采样请求（temperature > 0）时使用投机解码。贪婪解码正常工作。

4. **LoRA merge/unmerge 即将推出** — PR #44354 添加了多 LoRA 与基础模型推理之间的动态切换，适用于批处理平衡。

5. **Agentic 缓存调度扩展** — Q4 路线图（#43098）目标是跨 GPU 和 host 层级的超级节点 KV 缓存共享。

6. **需要安全修复** — dumper 过滤器 eval() 中的 RCE 漏洞（#44188）应在下一版本中修复；在修复前避免将 dumper 端点暴露到外部。

---

*基于 sgl-project/sglang 数据生成 — 2026-10-15*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English digest into Simplified Chinese while preserving all the formatting, links, code references, and technical terms. Let me translate this carefully, maintaining the exact structure and using natural technical Chinese.

Key points:
1. Keep all markdown structure (headings, tables, lists, blockquotes)
2. Keep URLs, issue numbers, commit hashes, file paths as-is
3. Use natural technical Chinese
4. No preamble or explanation
5. No markdown fences around the output</think>

# llama.cpp Digest — 2026-10-15

## 1. 今日亮点

项目继续对 CUDA、OpenCL 和 Vulkan 进行多后端修复。Jinja 模板引擎的一个值得注意的更改现在以 Python 兼容的精度写入浮点数，这将影响工具定义和模板输出。多条 PR 针对 MoE 模型和低位量化进行了内存和计算优化。

## 2. 版本发布与破坏性变更

| Commit | 描述 |
|--------|-------------|
| [b11622](https://github.com/ggml-org/llama.cpp/commit/b11622) | **Jinja 浮点数格式化：** 在 `tojson` 中以 Python 方式写入浮点数（最短的往返数字），影响工具定义和模板输出 |
| [b11612](https://github.com/ggml-org/llama.cpp/commit/b11612) | Unicode：为 Unigram 分词器添加可选的 NFC 归一化 |

过去 24 小时内无新标签版本发布。

## 3. 新模型与硬件支持

- **[#29778](https://github.com/ggml-org/llama.cpp/pull/29778)** — 添加 **Maion-Coder** 架构原生支持（`general.architecture = maion-coder`）
- **[#30520](https://github.com/ggml-org/llama.cpp/pull/30520)** — 添加 **Nemotron Super 3.5 VL** 和 **Nemotron Bolt 74B A9B** 支持，包含新的 `NemotronH_Omni_Reasoning_V3` 架构和视觉图
- **[#30504](https://github.com/ggml-org/llama.cpp/pull/30504)** — 添加 **GLiNER2.5-Decide** 分类支持，通过 `/v1/systemone` 决策 API
- **[#30555](https://github.com/ggml-org/llama.cpp/pull/30555)** — OpenCL：将未解析编译器版本的 Adreno 850 视为 E17

## 4. 性能与优化

| PR | 变更 | 影响 |
|----|--------|--------|
| [#30517](https://github.com/ggml-org/llama.cpp/pull/30517) | CUDA：低位类型更快 MMVQ | 内核加速已报告；q4_K 和 q8_0 未变（噪声阈值） |
| [#30553](https://github.com/ggml-org/llama.cpp/pull/30553) | CUDA：将 MMQ Stream-K 块上限设为可用工作项 | 减少 launch 开销并修复 fixup 内核的 backward scan 长度 |
| [#30542](https://github.com/ggml-org/llama.cpp/pull/30542) | CUDA：统一内存 GPU 上降低 VMM 池预留至 8 GB | 修复集成 GPU 显存溢出（如 gemma4:26b） |
| [#30325](https://github.com/ggml-org/llama.cpp/pull/30325) | CUDA：AMD 无 WMMA 时使用 SIMT 隐式 GEMM conv2d | 在缺乏 WMMA 支持的 AMD GPU 上启用 conv2d |
| [#28414](https://github.com/ggml-org/llama.cpp/pull/28414) | `--prefetch-experts-slots`：MoE 专家权重主机端预取 H2D 预取 | 降低 MoE 专家加载延迟 |

## 5. 稳定性与回归

| Issue | 严重程度 | 状态 | 备注 |
|-------|----------|--------|-------|
| [#27330](https://github.com/ggml-org/llama.cpp/issues/27330) — CUDA graphs 在 RTX 5090 Laptop (sm_120) 上挂起，RC 看门狗 + Xid 8 | **高** | OPEN | `GGML_CUDA_DISABLE_GRAPHS=1` 可行；影响新硬件 |
| [#30364](https://github.com/ggml-org/llama.cpp/issues/30364) — Vulkan：Strix Halo (gfx1151) 长上下文崩溃，ubatch > 128 触发 amdgpu "device lost" | **高** | OPEN | AMD Strix Halo 长提交有问题 |
| [#30010](https://github.com/ggml-org/llama.cpp/issues/30010) — Vulkan 解码失败：`vk::Queue::submit: ErrorDeviceLost` | **高** | OPEN | 受影响：RX 7900 XTX |
| [#30404](https://github.com/ggml-org/llama.cpp/issues/30404) — RTX 5090 cohere2moe 上 CUDA 非法内存访问 (MUL_MAT) | **中** | OPEN | |
| [#29419](https://github.com/ggml-org/llama.cpp/issues/29419) — gemma4-assistant 中 Flash-Attention 崩溃：查询头维度不匹配 | **中** | OPEN | SYLTCH 后端；修复 PR [#30286](https://github.com/ggml-org/llama.cpp/pull/30286) |
| [#30018](https://github.com/ggml-org/llama.cpp/issues/30018) — Gemma-4 解码 -5% 回归，自 #29622 以来（Vulkan/Arc B580） | **中** | OPEN | 定位到 commit 0bb496db |

**本窗口已修复：**
- [#30507](https://github.com/ggml-org/llama.cpp/issues/30507) — 安装路径问题（共享库在 `/usr/bin`）— 已关闭
- [#23335](https://github.com/ggml-org/llama.cpp/issues/23335) — Qwen3.6 上 MTP 确定性输出 — 已关闭

## 6. 这对应用开发者意味着什么

- **模板中浮点数精度变化：** 如果你在工具调用或 JSON 输出中使用 Jinja 模板，浮点数格式会略有不同（例如 `1.0` 现在渲染为 `1.0` 而非 `1`）。请测试你的下游解析器。
- **新视觉模型：** Nemotron Super 3.5 VL 和 Maion-Coder 扩展了模型库 — 预计即将发布的 converter 版本将支持 GGUF 转换。
- **AMD 上的 Vulkan：** 长上下文（>128 ubatch）在 Strix Halo 上不稳定；建议使用较小的 ubatch 大小或回退到 CPU 处理超长提示词。
- **RTX 5090 用户：** CUDA graph 挂起问题正在跟踪中；如遇问题，可通过 `GGML_CUDA_DISABLE_GRAPHS=1` 禁用 graphs。
- **Adreno 850 上的 OpenCL：** 新的 E17 分类启用了之前跳过的代码路径；请在你的设备上验证 MoE 专家排序行为。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the English digest into Chinese, following the specific rules provided. Let me carefully translate while:

1. Keeping all Markdown structure (headings, tables, lists, etc.)
2. Keeping URLs, issue/PR references (#12345), version tags, file paths, API identifiers as-is
3. Using natural technical Chinese suitable for a developer newsletter
4. Preserving exact formatting including table alignment

Let me translate section by section:

## 1. Today's Highlights
## 今日要闻

The v0.40.5 release candidate landed with Metal custom kernels now ported to CUDA, and the OpenAI Responses API gained support for custom tool calls in conversation history. However, several high-impact bugs surfaced: a generation failure affecting 5-8% of glm-5.3-flash:cloud users since October 12, CUDA illegal memory access crashes on RTX 5090 with Cohere MoE models, and a regression where models run slower on 0.40.4 compared to 0.40.3.

v0.40.5 发布候选版已推出，Metal 自定义内核已移植到 CUDA，OpenAI Responses API 现在支持在对话历史中传入自定义 tool calls。然而几个高影响力问题浮现：自 10 月 12 日起影响 5-8% glm-5.3-flash:cloud 用户的生成失败问题、RTX 5090 上 Cohere MoE 模型的 CUDA 非法内存访问崩溃，以及 0.40.4 上模型运行比 0.40.3 慢的回归问题。

## 2. Releases & Breaking Changes
## 2. 发布与破坏性变更

Let me continue translating the rest...</think>

# Ollama 每日简报 — 2026-10-15

## 1. 今日要闻

v0.40.5 发布候选版已推出，Metal 自定义内核已移植到 CUDA，OpenAI Responses API 现在支持在对话历史中传入自定义 tool calls。然而几个高影响力问题浮现：自 10 月 12 日起影响 5-8% glm-5.3-flash:cloud 用户的生成失败问题、RTX 5090 上 Cohere MoE 模型的 CUDA 非法内存访问崩溃，以及 0.40.4 上模型运行比 0.40.3 慢的回归问题。

---

## 2. 发布与破坏性变更

| 版本 | 变更 | PR |
|------|------|-----|
| **v0.40.5-rc0** | MLX：将 Metal 自定义内核移植到 CUDA | [#18657](https://github.com/ollama/ollama/pull/18657) |
| **v0.40.5-rc0** | OpenAI：在 Responses 历史中接受自定义 tool calls | [#18911](https://github.com/ollama/ollama/pull/18911) |
| **v0.40.4** | ⚠️ **破坏性变更**：模型格式变更导致 nimble:latest 等模型出现"下载的格式已不再支持"错误 | [#18998](https://github.com/ollama/ollama/issues/18998) |

**迁移注意**：从 0.40.3 升级到 0.40.4 的用户可能需要重新下载某些以旧格式下载的模型（nimble、tev、clef-flash）。

---

## 3. 新模型与硬件支持

- **K2 Horizon 模型** — 已提交功能请求，支持 MBZUAI IFM 模型系列 (0.9B、3.7B、7B、32B、36B MoE)。请求 GGUF 支持。| [#18698](https://github.com/ollama/ollama/issues/18698)
- **d1-3B 与 d1-omni-600M** — LiquidAI 决策模型，支持图像/音频；目前被不支持的编码 `lfm2-d1` 阻塞 | [#18890](https://github.com/ollama/ollama/issues/18890)
- **NVIDIA nvfp4** — 请求 NVFP4 量化支持功能（GGUF）| [#16056](https://github.com/ollama/ollama/issues/16056)

---

## 4. 性能与优化

| 领域 | 状态 | 详情 |
|------|------|------|
| **MLX → CUDA 内核移植** | ✅ 已合并 | Metal 自定义内核现已支持 CUDA 后端 | [#18657](https://github.com/ollama/ollama/pull/18657) |
| **Thinking 默认值** | ✅ 已合并 | 模型元数据现在控制默认 thinking 行为；小模型（qwen3.5 0.8B/2B）已重新发布并禁用 thinking 以减少循环 | [#18991](https://github.com/ollama/ollama/pull/18991) |
| **Prompt eval 计时修复** | 进行中 | 缓存命中时 `PromptEvalDuration` 被放大；命中缓存的 tokens 被错误计入 eval 时间 | [#18964](https://github.com/ollama/ollama/pull/18964) |
| **模型性能回归** | ⚠️ 调查中 | 多名用户报告 0.40.4 上 nimble、clef-flash、tev1 响应时间比 0.40.3 慢 20-30% | [#19002](https://github.com/ollama/ollama/issues/19002) |

---

## 5. 稳定性与回归问题

### 严重（需立即处理）

| 问题 | 严重程度 | 状态 | 备注 |
|------|----------|------|------|
| **glm-5.3-flash:cloud 生成失败 (5-8%)** | 🔴 严重 | 待处理 | 自 10-12 起；确认是宿端集群问题：probe2.img 数据区全为零。"the the the..." 退化模式 | [#18980](https://github.com/ollama/ollama/issues/18980) |
| **RTX 5090 上 CUDA 非法内存访问** | 🔴 严重 | 待处理 | Windows 11 上 Cohere MoE 架构；提示词评估时崩溃，退出状态 0xc0000409 | [#18642](https://github.com/ollama/ollama/issues/18642) |
| **A100 Qwen35 预热错误** | 🔴 严重 | 待处理 | 0.35.0 上模型预热时出现 Xid79 或 AMD-Vi IOMMU 页错误；0.34.4 正常 | [#19006](https://github.com/ollama/ollama/issues/19006) |

### 高（影响生产工作负载）

| 问题 | 严重程度 | 状态 | 备注 |
|------|----------|------|------|
| **RX 9060 XT 上 TensileLibrary 错误** | 🟠 高 | 待处理 | ROCm/AMD："Could not load TensileLibrary_lazy_gfx1200.dat" 短暂工作后失败 | [#17782](https://github.com/ollama/ollama/issues/17782) |
| **virtio-gpu 回归 (0.32.10+)** | 🟠 高 | 待处理 | 带 virtio-gpu drm 原生上下文的 VM 中等待 llama-server 超时；0.32.9 正常 | [#18123](https://github.com/ollama/ollama/issues/18123) |
| **Clef 模型：n_ubatch 被强制为 n_ctx** | 🟠 高 | 待处理 | 默认 num_ctx 16384 导致 clef-flash 上 OOM/GGML_ASSERT；需要手动覆盖 ctx 作为变通方案 | [#18865](https://github.com/ollama/ollama/issues/18865) |

### 中（有变通方案）

| 问题 | 严重程度 | 状态 | 变通方案 |
|------|----------|------|----------|
| **rnj-1: GGML_ASSERT(hparams.is_swa_any())** | 🟡 中 | 待处理 | 模型在 Ollama >0.3x 无法加载 |
| **Gemma4:12b: 需要 ctx_other** | 🟡 中 | 待处理 | gemma4:latest 正常；12b 变体失败 |
| **deepseek-v4.1-flash:cloud 500 错误** | 🟡 中 | 待处理 | 图像提示词 >655K tokens 触发内部服务器错误 |
| **OLLAMA_CONTEXT_LENGTH 未生效** | 🟡 中 | 待处理 | /api/show 和 /api/tags 报告原生 context，而非有效 context |
| **Response ID 冲突** | 🟡 中 | 待处理 | 仅有 999 个唯一 response ID；高并发下导致 LiteLLM 等客户端崩溃 |

---

## 6. 这对应用开发者的意义

1. **对延迟敏感的工作负载避免使用 v0.40.4** — 文本分类器模型的性能回归已有多名用户确认。坚守 0.40.3 或等待 0.40.5 稳定版。

2. **升级后重新下载模型** — 如果你使用 nimble、tev 或 clef-flash 并已升级到 0.40.4，预期会出现"格式不再支持"错误。升级到 0.40.5 后重新拉取。

3. **RTX 5090 + Cohere MoE 用户：避免生产环境** — CUDA 非法内存访问崩溃会阻塞进程。请关注 [#18642](https://github.com/ollama/ollama/issues/18642) 获取修复。

4. **OpenAI 兼容 API 消费者：注意 response ID 冲突** — 如果你的应用以 `id` 字段做去重或日志，高并发下会出现 ID 冲突。999 个值的高速公路很快就会拥堵。

5. **长图像提示词：保持在 655K tokens 以下** — 大图像输入时 deepseek-v4.1-flash:cloud 必定返回 500 错误。将图像密集型请求分批或拆分。

6. **关注 context length 配置** — `OLLAMA_CONTEXT_LENGTH` 不会反映在 API 响应中；如果需要精确限制，考虑通过 chat completion 查询有效 context 并手动处理截断。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate this LiteLLM digest into Chinese, following specific rules:
- Only output the translation, no preamble, no explanation, no markdown fences
- Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
- Keep URLs, numbers, dates verbatim
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in original form
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the exact structure and formatting.</think>

# LiteLLM 速报 — 2026-10-15

## 1. 今日要点

LiteLLM 项目今日的 PR 继续围绕 MCP（Model Context Protocol）网关改进展开，涉及 OAuth 权限范围、工具解析性能和功能声明三个方面。yarl URL 解析器的安全修复（CVE 相关 SSRF 漏洞）已标记待升级。项目同时修正了 AgentCore 网络搜索的费用为 $7/1000 次查询。

## 2. 版本发布与重大变更

| 版本 | 类型 | 备注 |
|---------|------|-------|
| [v1.107.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-dev.1) | 开发版 | 开发快照 |
| [v1.106.0-rc.3](https://github.com/BerriAI/litellm/releases/tag/v1.106.0-rc.3) | 候选版 | 发布候选 |
| [v1.105.1](https://github.com/BerriAI/litellm/releases/tag/v1.105.1) | 稳定版 | 最新稳定版 |

所有 Docker 镜像均已使用 cosign 签名。使用 commit `0112e53` 中的密钥进行验证。

## 3. 新模型与硬件支持

过去 24 小时内无新模型或硬件支持公告。

## 4. 性能与优化

| PR | 领域 | 描述 |
|----|------|-------------|
| [#46545](https://github.com/BerriAI/litellm/pull/46545) | MCP | 从所属服务器解析 `/mcp/proxy` 工具 ID，而非每次工具调用都重新列出所有服务器 — 消除了等待最慢服务器的问题 |
| [#46533](https://github.com/BerriAI/litellm/pull/46533) | Responses | 修复伪流式项目在已完成状态下仍被打开的问题，防止重复传输参数/文本导致 Claude Code 拒绝工具调用 |
| [#46299](https://github.com/BerriAI/litellm/pull/46299) | Rust bridge | 重构执行生命周期 — 原生入口点返回未启动的 Execution，在 Python 端统一驱动 |

## 5. 稳定性与回归问题

### 高优先级

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#38358](https://github.com/BerriAI/litellm/issues/38358) | `request_timeout` 在上游首字节沉默时永不触发 — 流式请求无限挂起 | OPEN |
| [#33410](https://github.com/BerriAI/litellm/issues/33410) | yarl URL 解析器安全修复需求 — `AIKIDO-2026-10912` 公告报告 ≤1.23.0 版本存在主机名混淆漏洞（SSRF 风格绕过） | OPEN |
| [#30118](https://github.com/BerriAI/litellm/issues/30118) | v1.88.x 管理后台登录回归 — 重定向到 nginx 反向代理背后的内部 Docker 容器 IP | OPEN |

### 中优先级

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#46407](https://github.com/BerriAI/litellm/issues/46407) | gpt-image 费用忽略欧盟数据驻留附加费（10%）和部署级 `output_cost_per_image_token` | OPEN |
| [#25390](https://github.com/BerriAI/litellm/issues/25390) | 流式传输为 gemini/gemma-4-31b-it 丢弃 `tool_use.input` — 非流式模式下正常 | OPEN |
| [#19858](https://github.com/BerriAI/litellm/issues/19858) | 通过 OpenRouter/Vertex 调用 Claude 模型的工具调用损坏 | OPEN |
| [#46404](https://github.com/BerriAI/litellm/issues/46404) | 预算重置在 `LiteLLM_EndUserTable` 达到数百万行后永不提交 — 30 秒后失败回滚，无法推进 | OPEN |

### 已修复

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#46492](https://github.com/BerriAI/litellm/pull/46492) | Anthropic 流式传输：当数据块携带多个并行工具调用时，每个调用发出一个 tool_use 块（防止 `{...}{...}` 非法 JSON） | OPEN PR |
| [#46444](https://github.com/BerriAI/litellm/pull/46444) | Responses 桥接：在轮次间往返 `tool_search_call` 和 `tool_search_output`（修复 GPT-5.5 重复搜索问题） | OPEN PR |
| [#45645](https://github.com/BerriAI/litellm/issues/45645) | 流式传输中的 429 错误被错误地记录到备用部署上 | OPEN |

## 6. 对应用开发者的意义

- **MCP 网关变更**：如果你的 MCP 服务器部署在 LiteLLM 网关后，工具调用的延迟将会降低 — #46545 的修复消除了向所有服务器广播的开销。同时，#46563 中的 `mcp_disabled_capabilities` 允许你隐藏上游不支持的 prompts/resources。

- **工具调用修复**：Mistral/Anthropic 的流式工具调用现在应该正常工作 — 之前版本会发送客户端无法解析的拼接 JSON。#46533 对 Claude Code 用户特别有益。

- **费用核算**：AgentCore 网络搜索现已正确计费为 $7/1000 次查询（#46558）。如果你使用此功能，请检查你的支出日志 — 之前的查询记录为 $0。

- **安全建议**：v1.106+ 稳定版发布后请计划升级，以获取修复 SSRF 风格 URL 验证绕过的 yarl 安全补丁。

- **代理部署**：如果你升级到 v1.88.x 并使用 nginx 反向代理，管理后台可能无法访问（#30118）。考虑回滚或等待修复。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the Unsloth digest into Chinese, following specific rules:
- Output ONLY the translation, no preamble, no explanation, no markdown fences
- Preserve the Markdown structure exactly
- Keep URLs, numbers, code references, issue/PR numbers as-is
- Use natural technical Chinese register

Let me translate this carefully while preserving the structure.</think>

# Unsloth 速报 — 2026-10-15

## 今日要闻

Unsloth 团队完成了多项基础设施层面的改进：ROCm GPU 用户现在支持区域级 diffusion `torch.compile` 探测（此前被硬编码拒绝），多 GPU Serving 现在支持 N 机器通过 llama.cpp RPC 分布 GGUF。Windows 稳定性问题得到针对性修复，Studio 音频流水线完成了从 whisper.cpp 到 audio.cpp Qwen3-ASR 的迁移。

---

## 发布与重大变更

- **过去 24 小时内无新版本发布。**

---

## 新模型与硬件支持

| 项目 | 描述 | PR/Issue |
|------|-------------|----------|
| ROCm diffusion 支持 | Studio 现在为 AMD GPU 探测区域级 `torch.compile` 而非直接拒绝 | [PR #13774](https://github.com/unslothai/unsloth/pull/13774) |
| 多机 GGUF Serving | N 机器 RPC 分布——突破了此前 2-DGX Spark 的单主机限制 | [PR #13726](https://github.com/unslothai/unsloth/pull/13726) |
| MiniMax-H3 集成 AMD | 固定权重现从 sd.cpp 预算中预留，Strix Halo/Point/Phoenix GPU 适用 | [PR #13786](https://github.com/unslothai/unsloth/pull/13786) |
| 外部连接图像生成 | OpenAI 兼容图像服务器（Gufo、sd-server、vLLM、llama.cpp、Ollama）现可在图像选择器中选取 | [PR #13756](https://github.com/unslothai/unsloth/pull/13756) |

---

## 性能与优化

| 领域 | 变更 | 详情 |
|------|-----------|---------|
| Diffusion 内存规划 | 学习激活峰值 | 规划器现使用实测峰值表而非固定的 8 GiB/百万像素预留；修复 <24GB 显卡上 FLUX.2-klein 流式处理问题 | [PR #13724](https://github.com/unslothai/unsloth/pull/13724) |
| INT8 GEMM (Triton 3.8) | 延迟门控调度 | 恢复 torch 2.14 引入的 A100/L4 性能回退；cuBLAS `_int_mm` 仍为基线 | [PR #13772](https://github.com/unslothai/unsloth/pull/13772) |
| 多模型卸载 | 溢出 vs llama.cpp fitter 加权 | 卸载规划器现于 `UNSLOTH_SMART_OFFLOAD` 下权衡溢出成本与 llama.cpp 自身 fitter | [PR #9872](https://github.com/unslothai/unsloth/pull/9872) |
| macOS Metal | 图像加载尺寸 | 现基于 Metal 工作集而非 RAM 减 20% 调整大小；修复 24GB MacBook Air 上 Z-Image Turbo/FLUX.2 Klein 拒绝问题 | [PR #13776](https://github.com/unslothai/unsloth/pull/13776) |
| 音频转录 | 鲁棒性 | 遭遇损坏音频帧时继续转录而非首次出错即停止 | [PR #13757](https://github.com/unslothai/unsloth/pull/13757) |

---

## 稳定性与回退

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | Windows: Gemma4 e2b 训练成功但生成无输出 | [Issue #13696](https://github.com/unslothai/unsloth/issues/13696) — 6 条评论 |
| **高** | Windows: Qwen-Image-2.1 GGUF 生成失败，1-D norm 权重从未反量化 | [Issue #12445](https://github.com/unslothai/unsloth/issues/12445) — 5 条评论 |
| **高** | Windows: FP8 text-encoder 预量化耗尽提交限额，级联至分片加载失败 | [Issue #12860](https://github.com/unslothai/unsloth/issues/12860) — 3 条评论 |
| **中** | Windows: 首次回复后聊天输入消失 (v0.1.905 → v0.1.906 回退) | [Issue #13604](https://github.com/unslothai/unsloth/issues/13604) — 2 条评论 |
| **中** | Windows: 最大化模式下输入框隐藏在任务栏后 | [Issue #13616](https://github.com/unslothai/unsloth/issues/13616) — 1 条评论 |
| **中** | macOS: llama-server Ctrl+C 时崩溃 | [PR #13782](https://github.com/unslothai/unsloth/pull/13782) — 修复中 |

---

## 对应用开发者的意义

1. **多模型部署** — 若运行多个 GGUF 模型（如 27B + 3B），新增的 N 机器 RPC 支持实现了超越单机限制的水平扩展。

2. **AMD GPU 用户** — ROCm diffusion 不再回退到 CPU；区域编译探测在 RDNA3+ 显卡上启用真正的 GPU 加速。

3. **Windows 桌面用户** — v0.1.906-beta 仍存在多项 UI 和生成 bug；若依赖 Gemma4 或 Qwen-Image-2.1 GGUF 工作流，建议暂缓更新。

4. **音频工作流** — whisper.cpp 到 audio.cpp Qwen3-ASR 的迁移已完成；请确保转录端点使用新引擎。

5. **内存受限环境** — Diffusion 内存规划改进减少了 <24GB 显卡的过度预留；在更低显存预算下测试 FLUX.2-klein。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*