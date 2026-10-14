# AI 基础设施日报 2026-10-14

> 生成时间: 2026-10-14 01:21 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this entire report from English to Chinese. Looking at the context, they want me to:
1. Translate ONLY the text content (not headings themselves if they're already Chinese-looking)
2. Preserve the exact Markdown structure
3. Keep technical terms, project names, code references as-is
4. Use natural technical Chinese register

Let me go through the report and translate it while preserving all structure:

The headings are in English. Looking at the context again - the system says "M1在构思如何编写代码、完成科学研究这类生产级别任务时，极少会对效果做出让步..." which is in Chinese. 

But looking at the user's prompt - they say "Output ONLY the translation" and the "Rules" section says to keep headings as-is. Wait, actually, I need to check if the headings need translation or not. The rules say "Preserve the Markdown structure exactly" and "Keep URLs, link targets, code spans..." etc.

Actually looking more carefully - the headings are in English! So they should remain in English based on the rules. Let me translate the body content while keeping headings and structure intact.

Wait, actually re-reading the rules more carefully: "Translate the following English report to Simplified Chinese" - so I DO need to translate everything to Chinese. The headings are in English so I should keep them in English? Let me re-read...

The rules say:
- Output ONLY the translation
- Preserve the Markdown structure exactly
- Keep project names, issue/PR references etc in original form
- Use natural technical Chinese

So headings should remain in English since they're structural markers, and I translate the body content. Let me proceed.</think>

# 跨项目对比：AI 推理基础设施版图

## 1. 生态系统概览

今日活跃度反映出 AI 推理基础设施生态系统正处于快速成熟期。主要的 serving 引擎——vLLM、SGLang 和 llama.cpp——正在聚焦于共同优先项：激进的 KV 缓存优化（MoE 缓存放置、HiCache、权重缓存）、AMD ROCm 与 NVIDIA 的能力对标，以及多模态模型支持的扩展。与此同时，LiteLLM 继续巩固其网关/编排层定位，Unsloth 则在训练与推理的边界地带推动以 LoRA 为核心的服务能力。今天可见的关键张力：性能提升（据报道达 5x–10x）与严重的稳定性回退（CUDA Graph 死锁、Blackwell 崩溃、吞吐量骤降）并存，表明前沿进展的速度已超出回归测试的跟进能力。

---

## 2. 活跃度对比

| 项目 | Issues（活跃） | PRs（合并/开启） | Releases（24h） | 核心关注点 |
|---------|----------------|-------------------|----------------|------------|
| **vLLM** | 132（显示前30） | 500+（显示前20） | 无 | Serving 引擎，MoE 优化 |
| **SGLang** | 50+ | 50+（活跃） | 无 | PD 分离，权重缓存 |
| **llama.cpp** | 30+ | 15+（今日合并） | 9 次提交 | 本地运行时，跨后端对标 |
| **Ollama** | 25+ | 12+ | 无 | 本地/云网关，易用性 |
| **LiteLLM** | 30+ | 20+ | v1.106.0-rc.2 | API 网关，多供应商 |
| **Unsloth** | 15+ | 15+ | v0.1.907-beta | 训练+推理，LoRA 服务 |

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------|------|--------|-----------|--------|---------|
| **DeepSeek V4 / V4.1** | 🔥 SM8x 需求（110 条评论） | 活跃优化 | — | — | — |
| **Qwen4Exp** | — | — | ✅ 已支持（64位数组，多模态 MTP） | — | — |
| **GLM-5.3** | ✅ Bug 修复 | ✅ DCP 支持 | ✅ Tile/layout 匹配 | — | — |
| **MiniMax-M3 / M4** | AITER 索引器修复 | — | — | — | — |
| **Wan2.2-TI2V-5B** | — | — | — | — | ✅ LoRA 训练 |
| **LTX-2.5** | — | — | — | — | ✅ ComfyUI 默认配置 |
| **LFM2-VL / d1-omni** | — | — | ✅ Tile/layout 匹配 | — | — |
| **K2 Horizon (MoE)** | — | — | — | ✅ 功能需求 | — |
| **Voxtral** | — | — | — | — | ✅ 已请求 |
| **OpenInfer** | — | — | — | — | — |
| **MiniMax 视频** | — | — | — | — | ✅ LiteLLM |

**领先者：** SGLang 和 llama.cpp 在模型覆盖广度上领先；vLLM 在社区需求信号上领先（DeepSeek SM8x 有 110 条评论——异常高的关注度）。Unsloth 掌控了从训练到服务的 LoRA 垂直领域。

---

## 4. 性能前沿

| 优化领域 | 活跃项目 | 关键进展 |
|-------------------|-----------------|------------------|
| **KV Cache / 前缀缓存** | vLLM, SGLang, llama.cpp | YaRN 缓存大小修正（llama.cpp）；HiCache THP 后端池（SGLang）；前缀 + MTP 损坏 bug（vLLM） |
| **MoE / 专家路由** | vLLM, SGLang | DeepGEMM MegaMoE 统一（vLLM）；MoE 缓存放置守卫（SGLang）；HiCache 路由专家（SGLang） |
| **权重加载** | SGLang, Ollama | 权重缓存守护进程：306s → <1s 加载（SGLang） |
| **量化** | vLLM, llama.cpp, Ollama | NVFP4 Triton 后端（vLLM）；sgl-deep-gemm 修正（Ollama）；Kleidiai SME2 Q4_K/Q6_K（llama.cpp） |
| **Prefill / Decode 并行** | vLLM, SGLang | BCG 自动启用 prefill CP（SGLang）；PD 分离作为默认（SGLang） |
| **CUDA Graphs** | vLLM | 启动时 BCG 预热；fused-MoE LoRA 死锁 bug（回归） |
| **Spec Decode / 投机** | vLLM, SGLang | MRV2 异构词表（vLLM）；token 预算修正（SGLang） |
| **UI / 网关** | Unsloth | 10x UI 提速（v0.1.907） |

**推理吞吐量领导者：** SGLang（权重缓存守护进程 + PD 分离），Unsloth（95% 缓存命中实现 5x 推理），llama.cpp（Vulkan 优化）。

---

## 5. 层级定位

| 层级 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-------|------|--------|-----------|--------|---------|---------|
| **Serving 引擎** | ✅ 核心 | ✅ 核心 | — | — | — | — |
| **本地运行时** | — | — | ✅ 核心 | ✅ 核心 | — | — |
| **API 网关** | — | — | — | — | ✅ 核心 | — |
| **编排** | — | — | — | ✅ | ✅ | — |
| **训练 / 微调** | — | — | — | — | — | ✅ 核心 |
| **LoRA 服务** | — | — | — | — | — | ✅ 专精 |
| **多供应商抽象** | — | — | — | — | ✅ | — |

**定位洞察：** 生态系统划分清晰。**llama.cpp** 占据本地/离线/跨平台推理；**vLLM 和 SGLang** 在 GPU 加速 serving 引擎领域正面竞争（架构差异：vLLM 单体式，SGLang 分离式）；**Ollama** 以易用性桥接本地与云；**LiteLLM** 统一供应商访问；**Unsloth** 占据训练↔推理的边界地带，以 LoRA 见长。

---

## 6. 趋势信号

### 基础设施工程师应关注的方向

1. **MoE 推理进入生产就绪阶段**
   - vLLM 的 DeepGEMM MegaMoE 统一、SGLang 的 MoE 缓存放置、llama.cpp 的 Qwen4Exp 支持
   - 信号：MoE 模型（DeepSeek、Qwen、LLaMa-MoE）正从研究走向服务；基础设施必须高效处理专家路由

2. **AMD ROCm 不再是次要选择**
   - vLLM、SGLang、llama.cpp 均在 ROCm 上有活跃工作（MI355X、RDNA4、XPU MLA）
   - 信号：多 GPU 供应商部署正在变得可行；新部署不要只考虑 NVIDIA

3. **权重缓存将成为下一个主要延迟战场**
   - SGLang 的亚秒级权重加载、llama.cpp 的主机内存 KV 缓存、Ollama 的内存限制修复
   - 信号：冷启动延迟是瓶颈；无服务器/函数调用推理将在此收敛

4. **PD 分离正在走向默认成熟**
   - SGLang：现已规模化默认；vLLM：虽无明确默认但 spec decode 持续推进
   - 信号：如果工作负载混合了 prefill 密集型和 decode 密集型查询，考虑分离式架构

5. **稳定性回归正在加速**
   - CUDA Graph + LoRA 死锁（vLLM）、RTX 5060 Ti 崩溃（Ollama）、25–30% 吞吐量回退（Ollama）、H100 xformers 崩溃（Unsloth）
   - 信号：新功能集成速度超出回归测试跟进能力；生产环境锁定版本，特别是 Blackwell/AMD 平台

6. **Agent 工具链是日益增长的故障点**
   - LiteLLM 的 JSON 格式 + tool calls bug、MCP 导入错误、SGLang 的前缀缓存 + MTP 损坏
   - 信号：随着 Agent 主流化，tool-call → 流式输出 → JSON 管道是脆弱的集成层

7. **Unsloth 正在搭建训练到服务的桥梁**
   - Wan2.2-TI2V LoRA、LoRA 种子修正、多 Spark 集群
   - 信号：微调 LoRA 服务正在形成为独立产品类别；关注 LoRA 注册/编排功能

---

*基于 2026-10-14 摘要数据的跨项目分析。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM Daily Digest from English to Chinese, following very specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - not literal word-for-word

Let me translate this carefully while maintaining the exact structure:

# vLLM Daily Digest — 2026-10-14

## 1. Today's Highlights

The vLLM project is seeing significant activity around AMD ROCm optimization (multiple PRs targeting MI355X/gfx950), while DeepSeek model support on older Ampere hardware (SM8x) remains a high-priority community request with 110 comments. A new MonoKernel abstraction RFC (#60904) proposes standardizing persistent kernel implementations across model backends.

---

## 2. Releases & Breaking Changes

*No new releases in the last 24 hours.*

---

## 3. New Model & Hardware Support

| Feature | Status | Reference |
|---------|--------|-----------|
| DeepSeek-V4-Flash / V4-Flash-0731 on SM8x (Ampere A100/A800) | **Open** — high community interest (110 comments) | [#50576](https://github.com/vllm-project/vllm/issues/50576) |
| XPU MLA integration into FLASH_ATTN_MLA backend | In Progress — PR under review | [#58297](https://github.com/vllm-project/vllm/pull/58297) |


| GLM-5.3-Flash on ROCm — kpool indexer bug fixed | **Closed** — bugfix merged | [#54359](https://github.com/vllm-project/vllm/issues/54359) |
| MiniMax-M3 AITER indexer — rejects unsupported index-head counts | In Progress — bugfix PR | [#60990](https://github.com/vllm-project/vllm/pull/60990) |
| Kimi K3 hybrid MLA P/D with non-divisible block sizes (P TP2 / D TP1) | In Progress — bugfix PR | [#61002](https://github.com/vllm-project/vllm/pull/61002) |

I'm tracking several model support and hardware enablement efforts. GLM-5.3-Flash has been resolved on ROCm with a merged bugfix, while MiniMax-M3 and Kimi K3 are both in progress. DeepSeek-V4-Flash remains open with strong community interest. XPU MLA integration is under review for the FLASH_ATTN_MLA backend.

Performance optimizations are advancing across several fronts. DeepGEMM's MegaMoE layer unification adds NVFP4 support, and a MonoKernel RFC aims to standardize persistent kernel design. ROCm now supports native per-token FP8 with RDNA4 tuning, while YaRN cache fixes address sizing calculations. Qwen4Exp implements checkpoint-mapped PLE with cold-page readahead, and AMD MI355X optimizations are tracking for Qwen3.8 variants.

Spec Decode improvements include eliminating draft slot reservations in the scheduler and warming top-k/top-p kernels at startup for MRV2. Heterogeneous-vocab draft models are also now supported.

Stability issues remain significant. CUDA graphs deadlock when combining fully-sharded fused-MoE LoRA across tensor-parallel ranks in TP=2/4 configurations with Qwen3.5 35B-A3B MoE. GLM-5.2-FP8 with prefix caching and FP8 KV cache produces empty or corrupted content on repeated prompts. Prefix caching with MTP breaks output on hybrid Mamba/GDN models in v0.28.0, while TP Worker hangs in DeepSeek-V4-Pro with TP=8 and MTP speculative decoding cause EngineDeadErrors. DFlash2 acceptance degrades by approximately 5.5 points under certain conditions.

Performance gaps persist—NVFP4 KV cache causal prefill runs 1.7-1.8x slower than FP8 on SM120 (Blackwell). The V1 multiprocess engine occasionally freezes for 0.7–2 seconds during generation. DeepSeek-V4.1-Flash Triton memory access issues on H20 have been mitigated by capping max_num_seqs to 256.

For deployment, prefix caching requires careful validation against known bugs—specifically, MTP, GLM-5.2-FPU, and hybrid Mamba/GDN combinations are problematic. AMD ROCm is improving with MI355X optimizations and the Triton FP8 backend, while Intel XPU support expands through MLA integration. Speculative decoding benefits from MRV2's heterogeneous-vocab drafts and reduced first-request latency via kernel warmup. Ampere hardware users should monitor #50576 for DeepSeek model support progress. CUDA graph deployments need vigilance around LoRA and tensor-parallel configurations.</think>

# vLLM 每日简报 — 2026-10-14

## 1. 今日焦点

vLLM 项目近期在 AMD ROCm 优化方面活动频繁（多个 PR 针对 MI355X/gfx950），而旧款 Ampere 硬件（SM8x）上的 DeepSeek 模型支持仍是社区高度关注的需求，评论数达 110 条。新增的 MonoKernel 抽象 RFC（#60904）提议在模型后端中标准化持久化内核的实现。

---

## 2. 版本发布与重大变更

*过去 24 小时内无新版本发布。*

---

## 3. 新模型与硬件支持

| 功能 | 状态 | 参考 |
|---------|--------|-----------|
| DeepSeek-V4-Flash / V4-Flash-0731 在 SM8x（Ampere A100/A800）上 | **待解决** — 社区关注度高（110 条评论） | [#50576](https://github.com/vllm-project/vllm/issues/50576) |
| XPU MLA 集成到 FLASH_ATTN_MLA 后端 | 进行中 — PR 审核中 | [#58297](https://github.com/vllm-project/vllm/pull/58297) |
| GLM-5.3-Flash 在 ROCm 上 — kpool indexer 修复 | **已关闭** — bugfix 已合并 | [#54359](https://github.com/vllm-project/vllm/issues/54359) |
| MiniMax-M3 AITER indexer — 拒绝不支持的 index-head 数量 | 进行中 — bugfix PR | [#60990](https://github.com/vllm-project/vllm/pull/60990) |
| Kimi K3 混合 MLA P/D 不可整除块大小（P TP2 / D TP1） | 进行中 — bugfix PR | [#61002](https://github.com/vllm-project/vllm/pull/61002) |

---

## 4. 性能与优化

| 领域 | 描述 | PR / Issue |
|------|-------------|------------|
| **MoE 统一** | 统一 DeepGEMM MegaMoE 专家到一个 feature-matrix 层；新增 NVFP4 支持 | [#61538](https://github.com/vllm-project/vllm/pull/61538) |
| **MonoKernel RFC** | 提议在 `vllm/models/<model>/<vendor>/` 下标准化 MonoKernel 设计 | [#60904](https://github.com/vllm-project/vllm/issues/60904) |
| **ROCm FP8** | 原生 per-token FP8 Triton 线性后端 + RDNA4 调优（Radeon AI PRO R9700 / gfx1201） | [#61091](https://github.com/vllm-project/vllm/pull/61091) |
| **YaRN Cache** | 修复 cos/sin 缓存大小计算 — 现在覆盖 `max_position` 而非 `original_max_position_embeddings × factor` | [#61495](https://github.com/vllm-project/vllm/pull/61495) |
| **Qwen4Exp PLE** | Checkpoint-mapped PLE：decode 步骤的冷页预读 | [#58835](https://github.com/vllm-project/vllm/pull/58835) |
| **AMD MI355X** | Qwen3.8-2.4T-A95B 性能优化追踪 | [#57149](https://github.com/vllm-project/vllm/issues/57149) |
| **AMD MI355X** | Qwen3.8-Flash-Next 性能优化追踪 | [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **Spec Decode** | DFlash/DSpark 不再在调度器令牌预算中保留 draft 槽位 | [#59468](https://github.com/vllm-project/vllm/pull/59468) |
| **Spec Decode** | 启动时预热 top-k/top-p 内核，用于 MRV2 推测解码 | [#59260](https://github.com/vllm-project/vllm/pull/59260) |
| **MRV2** | 支持异构词表 draft 模型 | [#61536](https://github.com/vllm-project/vllm/pull/61536) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | CUDA graphs 死锁 — 跨 TP ranks（TP=2/4，Qwen3.5 35B-A3B MoE）的 fully-sharded fused-MoE LoRA | [#60845](https://github.com/vllm-project/vllm/issues/60845) |
| **高** | GLM-5.2-FP8 + 前缀缓存 + FP8 KV 缓存在重复提示时返回空/乱码内容 | [#60494](https://github.com/vllm-project/vllm/issues/60494) |
| **中** | 前缀缓存 + MTP 在混合 Mamba/GDN 模型上损坏输出（v0.28.0） | [#53912](https://github.com/vllm-project/vllm/issues/53912) |
| **中** | TP Worker 挂起导致 EngineDeadError — DeepSeek-V4-Pro，TP=8，MTP 推测解码 | [#41530](https://github.com/vllm-project/vllm/issues/41530) |
| **中** | DFlash2 接受率下降约 5.5 点，当混合 KV 缓存管理器将滑动窗口 draft 设为真实 SWA 组时 | [#60560](https://github.com/vllm-project/vllm/issues/60560) |
| **中** | NVFP4 KV 缓存 causal prefill 比 FP8 慢约 1.7-1.8 倍（SM120 Blackwell） | [#50416](https://github.com/vllm-project/vllm/issues/50416) |
| **低** | V1 多进程引擎：偶发 0.7–2s 冻结引擎步骤（每批生成约一次） | [#48229](https://github.com/vllm-project/vllm/issues/48229) |
| **已解决** | DeepSeek-V4.1-Flash Triton 在 H20 高并发下非法内存访问（通过 `max_num_seqs=256` 缓解） | [#56389](https://github.com/vllm-project/vllm/issues/56389) |

---

## 6. 这对应用开发者意味着什么

1. **前缀缓存用户需谨慎** — MTP、GLM-5.2-FP8 和混合 Mamba/GDN 模型上均存在已报告的 bug。如果重复提示时出现损坏输出，请检查您的模型和量化组合是否在问题列表中。

2. **AMD ROCm 部署正在改善** — MI355X（gfx950）优化和新 Triton FP8 后端的积极工作表明，更好的 AMD 性能即将到来。XPU MLA 集成也扩展了 Intel GPU 支持。

3. **推测解码正变得更稳健** — MRV2 现在支持异构词表 draft 模型，并在启动时预热采样内核，减少了首次请求延迟。调度器令牌预算修复应该能提高吞吐量。

4. **Ampere 硬件上的 DeepSeek 模型用户** — 社区正在积极请求 SM8x 上的 DeepSeek-V4-Flash 支持；请关注 #50576 了解进展。DeepSeek-V4.1-Flash 内存访问问题的修复工作正在进行中。

5. **警惕 CUDA graph + LoRA + TP 组合** — 死锁 bug（#60845）影响特定的模型拓扑；如果您在跨 tensor-parallel ranks 的 fused-MoE LoRA 上遇到超时，这可能是原因。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang digest into Chinese. Let me follow the rules carefully:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate while preserving all the structure:

## 1. Today's Highlights → ## 1. 今日要点

SGLang's Q4 2026 roadmap is advancing on multiple fronts → SGLang 的 2026 年 Q4 路线图在多个方向上稳步推进

Prefill Context Parallelism is expanding its support matrix → 前缀解码上下文并行正在扩展其支持矩阵

Flashinfer backend work in progress → Flashinfer 后端工作进行中

Weight Cache Daemon (Phase 1) has achieved sub-second weight loading → 权重缓存守护进程（第一阶段）已实现亚秒级权重加载

A new RFC proposes a **monokernel plugin framework** → 新的 RFC 提议了**单内核插件框架**

CI infrastructure continues to be a focus → CI 基础设施仍是关注重点

flaky test tracking now at 53 comments → 不稳定测试跟踪已有 53 条评论

---

## 2. Releases & Breaking Changes → ## 2. 版本发布与重大变更

No releases in the last 24 hours. → 过去 24 小时内无版本发布。

---

## 3. New Model & Hardware Support → ## 3. 新模型与硬件支持


| Item → 项目 | Description → 描述 | Ref → 参考 |
|------|-------------|-----|

I'll focus on the key technical details from the DeepSeek-V4.1 Optimization section. The project is actively developing for DSV4.1 in SGLang, with mHC code cleanup already completed. Prefill optimizations are currently in progress, specifically involving mHC SP + engram fusion work. This represents a significant technical advancement in the project's optimization efforts.

The T-Head PPU Support is creating a comprehensive roadmap to integrate first-class support for Zhenwu 810/810E/M890P (T-Head SAIL) directly within SGLang. This strategic initiative aims to enhance hardware compatibility and performance for these specific processor models.

The SM120 (RTX PRO 6000) configuration shows promising results, with a working setup for DeepSeek-V4.1-Flash across 8× RTX PRO 6000 using PCIe without NVLink. There's a notable technical constraint: the triton backend remains the sole option for GLM-5.3-Flash due to fa4 crashes.

ROCm DCP introduces innovative Decode Context Parallel support for AMD ROCm, effectively eliminating KV cache duplication under pure Tensor Parallelism. The AMD DSV4 FP8 verification represents the third PR in a comprehensive series targeting DeepSeek V4 optimization on AMD hardware.

Performance and optimization efforts are making significant strides, particularly in the Weight Cache Daemon's first phase. By leveraging per-rank daemons with post-quantized weights via CUDA IPC, weight loading has dramatically accelerated from 306–327 seconds to under 1 second on Qwen3-235B FP8.

I'm dynamically enabling breakable CUDA graphs for supported prefill CP configurations, with DSV4 temporarily excluded. A new parallel, THP-backed host pool allocation is being developed as an opt-in feature to minimize page fault contention. The project also aims to preserve routed-expert metadata across HiCache KV page migrations between GPU and host environments.

Performance optimizations continue with middle chunk skipping for Mamba states, reducing unnecessary radix cache overhead. A custom all-reduce mechanism is being refined to prevent potential deadlocks when CUDA streams interact on the same communicator.

Critical stability concerns emerge with prefix decoding and HiCache interactions, where premature KV transfer can lead to stale cache during decoding stages. Additionally, backend-specific crashes are occurring with NVFP4 W4A4 checkpoints on certain hardware architectures.

Medium-severity issues include a non-owning alias problem in the weight-scale transform and token generation limitations in native gRPC implementations. Bench serving configurations are also revealing potential token counting discrepancies with recent transformer updates.

Ongoing tracking involves monitoring CI test stability, with current metrics indicating one broken test and four flaky tests identified.

For application developers targeting large-scale deployments, PD Disaggregation emerges as a recommended default approach. The new THP-backed host pools offer promising improvements for multi-tenant performance scenarios. DeepSeek V4.1 users can anticipate ongoing optimization efforts, while AMD/ROCm users gain Decode Context Parallel support, reducing KV memory overhead. Developers should be aware of potential 128-token generation limit regressions and carefully select appropriate attention backends for specific hardware configurations. The KVPress integration presents an intriguing option for exploring sub-linear KV memory scaling in long-context workloads.</think>

# SGLang Digest — 2026-10-14

## 1. 今日要点

SGLang 的 2026 年 Q4 路线图在多个方向上稳步推进：前缀解码上下文并行（Prefill Context Parallelism）正在扩展其支持矩阵，Flashinfer 后端工作正在进行中，而权重缓存守护进程（第一阶段）已在 Qwen3-235B FP8 上实现了亚秒级权重加载。新的 RFC 提议了**单内核插件框架**（monokernel plugin framework）用于持久化解码内核。CI 基础设施仍是关注重点，不稳定测试跟踪已有 53 条评论。

---

## 2. 版本发布与重大变更

过去 24 小时内无版本发布。

---

## 3. 新模型与硬件支持

| 项目 | 描述 | 参考 |
|------|-------------|-----|
| **DeepSeek-V4.1 优化** | 正在 SGLang 中积极开发 DSV4.1，mHC 代码清理已合并。前缀解码优化进行中，包括 mHC SP + engram 融合。 | [#42170](https://github.com/sgl-project/sglang/issues/42170) |
| **T-Head PPU 支持** | 在 SGLang 中实现对 Zhenwu 810/810E/M890P（T-Head SAIL）原生支持的路线图。 | [#37519](https://github.com/sgl-project/sglang/issues/37519) |
| **SM120 (RTX PRO 6000) 现场报告** | 8× RTX PRO 6000（PCIe，无 NVLink）上 DeepSeek-V4.1-Flash 的可用配置。已知限制：GLM-5.3-Flash 因 fa4 崩溃仅支持 triton 后端。 | [#40877](https://github.com/sgl-project/sglang/issues/40877), [#42012](https://github.com/sgl-project/sglang/issues/42012) |
| **ROCm DCP for GLM-5/DeepSeek-V3.2** | AMD ROCm 的解码上下文并行支持，在纯张量并行下消除 KV 缓存重复。 | [#42618](https://github.com/sgl-project/sglang/pull/42618) |
| **AMD DSV4 FP8 验证** | DeepSeek V4 在 AMD 硬件上的 FP8 目标验证系列第三 PR。 | [#44003](https://github.com/sgl-project/sglang/pull/44003) |

---

## 4. 性能与优化

| 领域 | 状态 | 详情 | 参考 |
|------|--------|---------|-----|
| **权重缓存守护进程** | **第一阶段已发布** | 每 rank 守护进程通过 CUDA IPC 持有后量化权重。Qwen3-235B FP8 上权重加载：**306–327s → <1s**。 | [#33522](https://github.com/sgl-project/sglang/issues/33522) |
| **Prefill CP + BCG 自动启用** | **进行中** | 为支持的前缀解码 CP 配置自动启用可中断 CUDA 图。DSV4 暂时排除。 | [#44022](https://github.com/sgl-project/sglang/pull/44022) |
| **HiCache 主机池分配** | **开放 PR** | 并行、THP 支持的主机池分配（可选），减少页错误竞争。 | [#43978](https://github.com/sgl-project/sglang/pull/43978) |
| **HiCache 路由专家** | **开放 PR** | 在 HiCache KV 页面在 GPU/主机间移动时保留路由专家元数据。 | [#39027](https://github.com/sgl-project/sglang/pull/39027) |
| **Mamba 中间块跳过** | **已合并** | 跳过跟踪中间前缀解码块的 mamba 状态——减少不必要的基数缓存开销。 | [#30369](https://github.com/sgl-project/sglang/pull/30369) |
| **自定义 All-Reduce 死锁修复** | **已合并** | 修复两个 CUDA 流在同一通信器上发出 all-reduce 时的死锁问题。 | [#31135](https://github.com/sgl-project/sglang/pull/31135) |

---

## 5. 稳定性与回归

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | PD 前缀解码 + HiCache：早期缓存前缀可能在 HiCache 回载完成前传输 KV → 解码时 **KV 陈旧** | [#44070](https://github.com/sgl-project/sglang/issues/44070) |
| **高** | `--fp4-gemm-backend marlin` 在 SM100 上使用 NVFP4 W4A4 检查点时崩溃：`mm_fp4` 无 marlin 后端 | [#43988](https://github.com/sgl-project/sglang/issues/43988) |
| **中** | sgl-deep-gemm 0.2.0：SM90 权重缩放变换返回非自有别名（#32188 后续） | [#39684](https://github.com/sgl-project/sglang/issues/39684) |
| **中** | 原生 gRPC Generate 在未设置 `max_new_tokens` 时输出上限为 128 tokens | [#44121](https://github.com/sgl-project/sglang/issues/44121) |
| **中** | bench_serving `--dataset-name openai` 将每个 prompt 计为 2 个输入 tokens（transformers 5） | [#43929](https://github.com/sgl-project/sglang/issues/43929) |
| **跟踪中** | CI 不稳定测试：截至 2026-10-10，1 个损坏，4 个不稳定 | [#17050](https://github.com/sgl-project/sglang/issues/17050), [#42752](https://github.com/sgl-project/sglang/issues/42752) |

---

## 6. 这对应用开发者意味着什么

- **如果你运行大规模部署**：PD 分解现在已是默认值，几乎支持每个模型系列。考虑启用 HiCache 配合新的 THP 支持主机池（#43978）以获得更好的多租户性能。

- **如果你使用 DeepSeek V4.1**：积极的优化工作正在进行中。mHC 重构和 prefuse 优化已合并；请关注上游更新。

- **如果你使用 AMD/ROCm**：GLM-5 和 DeepSeek-V3.2 的 DCP（解码上下文并行）支持现已可用，减少了 KV 内存重复。

- **如果你遇到 128-token 生成限制**：原生 gRPC 中的一个 bug（#44121）在未设置 `max_new_tokens` 时会限制输出——这是一个需要留意的回归问题。

- **如果你在 RTX PRO 6000（SM120）上运行**：GLM-5.3-Flash 使用 triton 注意力后端；混合 extend 模式下 fa4 会崩溃。

- **如果你集成 KV 缓存**：KVPress 集成（#10585）现在是尝试长上下文工作负载下亚线性 KV 内存缩放的一个不错的入门 issue。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate this English newsletter into Chinese. Let me analyze the content:

1. This is a technical newsletter digest about llama.cpp project updates
2. It's dated 2026-10-14
3. It contains multiple sections: Highlights, Releases & Breaking Changes, New Model & Hardware Support, Performance & Optimization, Stability & Regressions, and "What This Means for Application Developers"

I need to:
- Translate into Simplified Chinese (based on the system prompt mentioning Chinese developer newsletter)
- Preserve the exact Markdown structure
- Keep all technical identifiers, URLs, issue/PR numbers as-is
- Use natural technical Chinese register
- Output ONLY the translation without preamble

Let me translate section by section:

---

# llama.cpp Digest — 2026-10-14

## 今日要闻

llama.cpp 项目今日继续快速推进，多个后端优化和模型支持新增值得关注：服务器安全修复（通过 regex DoS 防止崩溃，#30243，已合并），Vulkan pool_2d 大窗口优化（#30119），以及支持 Qwen4Exp 的 64 位数组元数据和多模态 MTP（#30316）。服务器缓存系统进行了硬性内存限制修复（#25070，已合并），解决了长期以来的行为问题。

---

## 发布与重大变更

| 提交 | 描述 | PR |
|--------|-------------|-----|
| b11608 | **Server: 移除 std::regex 转义特殊 token** — 修复处理 d1-omni/kev 模型时长 token 名称时使用 `std::regex_replace` 导致的栈溢出崩溃（DoS 漏洞）。改用迭代解析。 | [#30243](https://github.com/ggml-org/llama.cpp/pull/30243) |


| b11607 | **Chat: 用 parts 替换输出字符串** — 格式化的聊天现在返回 parts 数组而非简单字符串，支持选择性特殊 token 解析。 | [#30389](https://github.com/ggml-org/llama.cpp/pull/30389) |
| b11602 | **Meta: 重新分配 arena 时重建所有子图** — 修复图内存管理问题。 | [#30453](https://github.com/ggml-org/llama.cpp/pull/30453) |

**迁移注意：** 聊天输出格式变更可能会影响依赖字符串类型的下游消费者。

I need to continue translating the model and hardware support section, focusing on technical accuracy and maintaining the original structure. The new models like Qwen4Exp, MiniCPM-V 4.7, and Maion-Coder represent significant advancements in model architectures and capabilities. The support includes 3D RoPE handling and specialized architectures that expand the library's flexibility.

For hardware acceleration, the Vulkan optimization for large pooling windows is particularly interesting, as it leverages subgroup-level processing when the window exceeds certain size thresholds. The new FA kernel for prefill targeting Intel platforms suggests continued performance improvements across different hardware configurations.

The technical details highlight ongoing work in graph optimization, memory management, and backend-specific enhancements for platforms like Vulkan, SYCL, and GGML-CPU.

The Vulkan stability issues are significant, with long-context prompt processing on Strix Halo showing critical failure modes like "device lost" errors. The SYCL performance regression also indicates potential optimization challenges in processor pipeline implementations.

Key recommendations include updating to the latest version for security patches, verifying cache RAM limit changes, adapting to new chat output formats, and testing Vulkan performance on RDNA3 graphics cards. Developers using SYCL backend should prioritize testing memory safety improvements to ensure robust performance across different hardware configurations.</think>

# llama.cpp 动态 — 2026-10-14

## 今日要闻

llama.cpp 项目今日继续快速推进，多个后端优化和模型支持更新值得关注：服务器安全修复（通过 regex DoS 防止崩溃，#30243，已合并），Vulkan pool_2d 大窗口优化（#30119），以及支持 Qwen4Exp 的 64 位数组元数据和多模态 MTP（#30316）。服务器缓存系统进行了硬性内存限制修复（#25070，已合并），解决了长期行为问题。

---

## 发布与重大变更

| 提交 | 描述 | PR |
|--------|-------------|-----|
| b11608 | **Server: 移除 std::regex 转义特殊 token** — 修复处理 d1-omni/kev 模型时长 token 名称时使用 `std::regex_replace` 导致的栈溢出崩溃（DoS 漏洞）。改用迭代解析。 | [#30243](https://github.com/ggml-org/llama.cpp/pull/30243) |
| b11607 | **Chat: 用 parts 替换输出字符串** — 格式化的聊天现在返回 parts 数组而非简单字符串，支持选择性特殊 token 解析。 | [#30389](https://github.com/ggml-org/llama.cpp/pull/30389) |
| b11602 | **Meta: 重新分配 arena 时重建所有子图** — 修复图内存管理问题。 | [#30453](https://github.com/ggml-org/llama.cpp/pull/30453) |

**迁移注意：** 聊天输出格式变更（#30389）可能导致下游消费者需要更新，预期为 parts 数组而非字符串。

---

## 新模型与硬件支持

- **Qwen4Exp** — 新增支持填充、64 位数组元数据和多模态 MTP（#30316）
- **MiniCPM-V 4.7** — 模型支持已添加，含 3D RoPE 处理（#29416）
- **Maion-Coder** — 新架构支持（#29778）
- **LFM2-VL / LFM2.5-VL / d1-omni** — Tile 和 layout 匹配的 transformers（#30261）
- **Laguna 模型** — YaRN beta 元数据加载支持（#11598）
- **Kleidiai SME2** — Q4_K 和 Q6_K 矩阵乘法支持（#29219，b11604）
- **Hexagon 后端** — 可配置 HTP DCVS/HMX 电源模式（#30423，b11601）

---

## 性能优化

| 领域 | 变更 | PR |
|------|--------|-----|
| **Vulkan** | 大窗口 pool_2d 优化 — 当窗口大于子组大小时，使用完整子组计算单个输出 | [#30119](https://github.com/ggml-org/llama.cpp/pull/30119) |
| **Vulkan (Intel)** | 面向 Intel 平台的新 FA 内核用于 prefill | [#29357](https://github.com/ggml-org/llama.cpp/pull/29357) |
| **Graph** | 为无缓存注意力填充 KQ 偏置以处理 T5 相对位置偏置 | [#30446](https://github.com/ggml-org/llama.cpp/pull/30446) |
| **SYCL** | 修复 mul_mat、split buffer、host pool 的内存错误 | [#29889](https://github.com/ggml-org/llama.cpp/pull/29889) |
| **GGML-CPU** | 修复原地别名下 rms_norm_back 错误输出 | [#24305](https://github.com/ggml-org/llama.cpp/pull/24305) |
| **量化** | 修复 qkx3 scale 搜索中的无效舍入（避免 NaN） | [#29817](https://github.com/ggml-org/llama.cpp/pull/29817) |
| **WebGPU** | 修复重复 expert ID 的 mul_mat_id 问题 | [#30451](https://github.com/ggml-org/llama.cpp/pull/30451) |

---

## 稳定性与回归问题

**高优先级：**

| 问题 | 描述 | 状态 |
|-------|-------------|--------|
| [#25593](https://github.com/ggml-org/llama.cpp/issues/25593) | **SM_60 (Tesla P100) 质量损失** — FP32 计算静默使用 FP16 执行；两个分支已修复 | 已关闭 |
| [#28752](https://github.com/ggml-org/llama.cpp/issues/28752) | Vulkan 上 b10780 后严重的提示处理速度下降，RDNA3 | 已关闭 |
| [#30364](https://github.com/ggml-org/llama.cpp/issues/30364) | **Vulkan: MiniMax-M2 长上下文提示崩溃**，ubatch >128 时 Strix Halo；"device lost" 错误 | 已关闭，6 评论 |
| [#30010](https://github.com/ggml-org/llama.cpp/issues/30010) | **Vulkan decode() 失败**：RX 7900 XTX 上 vk::Queue::submit ErrorDeviceLost | 已关闭，8 评论 |

**中优先级：**

- [#27638] — Flash Attention 回退到 SCALAR 导致 Intel Arc B580 PP 时 O(N²) 性能下降
- [#27546] — i5 1345u GPU 上 OpenVINO 抛出异常
- [#28234] — Termux 上 Vulkan 构建失败："Invalid capability operand: 5447"
- [#30248] — SYCL PP 性能回归（B580 + 5700X3D）

---

## 这对应用开发者的意义

1. **安全修复已应用** — 服务器不再受 d1-omni/kev 模型长 token 名称导致的 regex 栈溢出崩溃影响。建议更新。

2. **缓存内存限制现已强制执行** — `--cache-ram` 现为硬性限制（#25070）。如果您之前依赖旧行为（始终保留至少一个条目），请验证工作负载。

3. **聊天输出格式已更改** — 使用聊天 API 时，请预期 parts 数组响应结构而非纯字符串。

4. **Qwen4Exp 已可用** — 新 MoE 模型支持现已推出，具备多模态 MTP 能力。

5. **RDNA3 Vulkan 用户应测试** — b10780 回归问题在新版本中似乎已解决；请在您的工作负载上验证提示处理性能。

6. **SYCL 后端获得内存安全修复** — 如果通过 SYCL 在 Intel GPU 上运行，mul_mat 修复（#29889）改善了非连续张量操作的正确性。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Chinese. I need to:
1. Translate the content into Chinese
2. Keep all Markdown structure exactly as-is
3. Keep URLs, issue numbers, project names, etc. in their original form
4. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me go through and translate while preserving the structure:

- Headings stay as-is (I should translate the text but keep the # symbols)
- Tables need their structure preserved
- Lists need to be preserved
- Bold/italic stays
- Horizontal rules stay
- Emoji stays
- URLs stay
- Issue/PR references stay

Let me translate section by section:

Title: Ollama Digest — 2026-10-14 -> Ollama 每日简报 — 2026-10-14

## Today's Highlights -> 今日要闻

The rest... let me translate naturally.

I'll translate while maintaining the exact structure.</think>

# Ollama 每日简报 — 2026-10-14

## 今日要闻

Ollama 项目今日在决策模型和云端基础设施方面有重要进展。多个相关 PR 已合并，包括在 `ollama run` 中启用决策模型支持、修复 MLX 决策模型评分不一致等问题。不过，值得注意的是有用户报告了明显的性能回归（相比 v0.40.1 吞吐量下降 25-30%），同时多个平台特定问题持续存在，包括 Windows CUDA、树莓派和 ARM 系统。

---

## 版本发布与重大变更

过去 24 小时内无新版本发布。

---

## 新模型与硬件支持

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **K2 Horizon 模型** | MBZUAI IFM 模型系列（0.9B–36B MoE，Apache 2.0 许可）的功能请求，支持 GGUF 格式 | [#18698](https://github.com/ollama/ollama/issues/18698) |
| **骁龙 X Elite** | 请求在基于 ARM 的 Windows AIPC 笔记本上支持 NPU 和 Adreno GPU | [#5360](https://github.com/ollama/ollama/issues/5360) |
| **思考模式默认值** | PR 允许模型元数据禁用思考模式默认值（例如较小的 Qwen3.5 容易陷入循环） | [#18991](https://github.com/ollama/ollama/pull/18991) |
| **空系统提示词** | PR 确保 `SYSTEM ""` 显式清除基础模型提示词，而非继承 | [#18990](https://github.com/ollama/ollama/pull/18990) |
| **MLX 版本更新** | 更新 MLX 库；可能影响 Qwen 3.5 思考循环行为 | [#18993](https://github.com/ollama/ollama/pull/18993) |

---

## 性能与优化

| 项目 | 影响 | 链接 |
|------|--------|------|
| **25–30% 吞吐量回退** | 所有模型性能相比 v0.40.1 下降；TPS 显著降低 | [#18968](https://github.com/ollama/ollama/issues/18968) |
| **cgroup CPU 配额被忽略** | `n_threads` 使用主机核心数，忽略 cgroup v2 的 `cpu.max` 和 `cpuset` → 容器中吞吐量下降约 45 倍 | [#17916](https://github.com/ollama/ollama/issues/17916) |
| **LLama.cpp 遗留迁移** | 移除兼容补丁，加载时迁移遗留 GGUFs；同步上游更新 | [#18882](https://github.com/ollama/ollama/pull/18882) |
| **Metal M5 崩溃修复** | 解决 Apple M5 MTLGPUFamilyApple10 设备上的 static_assert 崩溃 | [#14604](https://github.com/ollama/ollama/pull/14604) |
| **MLX CUDA 内核** | 将 Metal 自定义内核（mamba2_scan、depthwise_conv_silu、gated_delta）移植到 CUDA | [#18657](https://github.com/ollama/ollama/pull/18657) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 详情 |
|----------|-------|---------|
| **高** | **RTX 5060 Ti (Blackwell) CUDA 崩溃** | 根本原因：`num_ctx` 影响 Flash Attention MMA 内核共享内存分配；`0xc0000409` 崩溃 | [#18232](https://github.com/ollama/ollama/issues/18232) |
| **高** | **大量生成异常** | 自 10-12 日起，5–8% 的 `glm-5.3-flash:cloud` 请求生成退化输出；host 端数据显示全零 | [#18980](https://github.com/ollama/ollama/issues/18980) |
| **高** | **工具调用 + JSON 格式不兼容** | 当设置 `format: "json"` 时模型无法使用工具调用；要么产生无效 JSON，要么幻觉工具使用 | [#18944](https://github.com/ollama/ollama/issues/18944) |
| **中** | **RPi 5 第二次运行卡死** | Debian 13 systemd 服务在后续 `ollama run` 时卡死；首次运行正常 | [#18796](https://github.com/ollama/ollama/issues/18796) |
| **中** | **CUDA 预热失败 (RTX 5070 Ti)** | 偶发"共享对象初始化失败"，Windows 上静默回退到 CPU | [#17380](https://github.com/ollama/ollama/issues/17380) |
| **中** | **模型拉取重定向错误** | 拉取模型时报错 "redirect target not allowed"；Cloudflare R2 存储解析问题 | [#18716](https://github.com/ollama/ollama/issues/18716) |
| **中** | **MiniCPM-V CLIP 失败** | Windows 上 `openbmb/minicpm-v4.7:35b-a3b` 报错 "unknown projector type: minicpmv4_7" | [#18983](https://github.com/ollama/ollama/issues/18983) |
| **低** | **MLX 徽章显示** | 部分 `embeddinggemma-2` 标签在 ollama.com 上缺少 MLX 徽章，尽管实际是 MLX 专属 | [#18971](https://github.com/ollama/ollama/issues/18971) |

---

## 应用开发者需要注意的事项

1. **避免同时使用 JSON 格式和工具调用** — 如果你的 Agent 依赖结构化输出*和*函数调用，你需要解决这个限制直到修复。可考虑使用单独的请求周期或后处理。

2. **性能回归值得测试** — 如果你最近升级并注意到推理变慢，可能需要与 v0.40.1 进行基准对比。该回归影响所有后端。

3. **决策模型现在可通过 CLI 使用** — `ollama run nimble --ask "question"` 适用于决策模型。非常适合轻量级 yes/no 分类 Agent。

4. **容器部署：验证 CPU 线程设置** — 如果在 Kubernetes/Docker 中运行 Ollama 并设置了 CPU 限制，请明确设置 `OLLAMA_NUM_THREAD` 以避免 cgroup 配额忽略导致的 45 倍吞吐量下降。

5. **Blackwell/RTX 5060 Ti 用户：避免大上下文** — CUDA 崩溃与上下文大小相关；减小 `num_ctx` 可能作为临时解决方案，直到修复上线。

---

*简报基于 GitHub 数据生成 — 2026-10-14*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate this LiteLLM digest into Chinese. I need to:
1. Translate all the text content
2. Keep all Markdown structure (headings, tables, lists, etc.)
3. Keep URLs, code references, issue numbers, etc. as-is
4. Use natural technical Chinese suitable for a developer newsletter

Let me translate section by section, preserving the structure exactly.

Key points:
- Headings need translation
- Tables need translation for content
- Lists need translation
- Keep code, URLs, issue numbers as-is
- Use proper Chinese punctuation within translated text</think>

# LiteLLM 速报 — 2026-10-14

## 今日要闻

LiteLLM 项目发布了 **v1.106.0-rc.2**，现已通过 cosign 完成 Docker 镜像签名，提升了空隔离部署的安全性。多个高优先级问题浮现：非管理员用户无法在代理 UI 中查看模型列表 (#17475)，`ModuleNotFoundError: No module named 'mcp'` 错误 (#46045) 导致部署受阻。在功能方面，遥测系统正在进行重大重构，新增聚合接收器和直方图，以及 Admin UI 设置页面。

---

## 版本发布与重大变更

| 版本 | 变更说明 | 链接 |
|------|----------|------|
| v1.106.0-rc.2 | Docker 镜像现通过 cosign 签名 — 可使用 `cosign verify` 及提交 `0112e53` 中的密钥进行验证 | [Release](https://github.com/BerriAI/litellm/releases/tag/v1.106.0-rc.2) |
| — | gunicorn 上限从 `<24.0` 提升至 `<26.0`，修复 HTTP 请求走私漏洞 (AIKIDO-2026-10742) | [#33405](https://github.com/BerriAI/litellm/issues/33405) |
| — | 项目创建现返回通用 500 错误而非原始数据库异常（安全加固） | [#46330](https://github.com/BerriAI/litellm/pull/46330) |

---

## 新模型与硬件支持

- **OpenInfer** — 新增 OpenAI 兼容提供商，`openinfer/<model>` 路由支持独立消耗追踪 ([#41034](https://github.com/BerriAI/litellm/pull/41034))
- **MiniMax-H3 / H3-Max** — 新增 `/v1/videos` 视频生成支持，按秒和按分钟计费 ([#43705](https://github.com/BerriAI/litellm/pull/43705))
- **Laya 与 Bespoke Nimble** — 已添加至 Add Model 表单及 Decisions 路由 ([#45260](https://github.com/BerriAI/litellm/pull/45260))
- **Claude Code** — `installationPreference` 现已在 `marketplace.json` 条目中输出 ([#41430](https://github.com/BerriAI/litellm/pull/41430))
- **Bedrock 跨区域配置** — 定价现正确使用部署费率而非全局入口 ([#46288](https://github.com/BerriAI/litellm/pull/46288))

---

## 性能优化

- **遥测管道重构** — `AggregatingSink` 将高频事件聚合为包含 token 求和与固定桶直方图的行；`TelemetryMiddleware` 现记录每次请求的延迟、MCP/A2A 耗时及提供商尝试结果 ([#45487](https://github.com/BerriAI/litellm/pull/45487), [#45489](https://github.com/BerriAI/litellm/pull/45489))
- **Azure PTU 共享** — `model_info.ptu_shares` 按团队划分 PTU 容量，含每团队上限和 PTU 小时报告 ([#43043](https://github.com/BerriAI/litellm/pull/43043))
- **vLLM 透传消耗日志** — `/vllm/chat/completions` 和 `/vllm/completions` 现正确为路由模型记录消耗 ([#45733](https://github.com/BerriAI/litellm/pull/45733))
- **MCP 自动执行计费** — 非流式 `/v1/responses` 现为每轮执行记录和计费 ([#43667](https://github.com/BerriAI/litellm/pull/43667))
- **Gemini 4 长解码续传** — 代理现处理 `continuationToken` 以在单次客户端调用中完成 >32K token 的输出 ([#46240](https://github.com/BerriAI/litellm/pull/46240))

---

## 稳定性问题与回归

| 严重程度 | 问题描述 | 状态 |
|----------|----------|------|
| **高** | 非管理员用户在代理 UI 中看到空白模型列表 — 管理员权限限制导致 | [Open #17475](https://github.com/BerriAI/litellm/issues/17475) |
| **高** | `ModuleNotFoundError: No module named 'mcp'` 在配置 tools 时导致代理启动失败 | [Open #46045](https://github.com/BerriAI/litellm/issues/46045) |
| **高** | `/key/update` 拒绝包含 `allowed_routes` 或 `permissions` 的非管理员请求 (v1.92.0 回归) | [Open #33277](https://github.com/BerriAI/litellm/issues/33277) |
| **中** | MCP 工具 pin 忽略 `annotations` 和 `outputSchema`，导致只读提示的变更检测失效 | [Open #44093](https://github.com/BerriAI/litellm/issues/44093) |
| **中** | `token_counter` 对无 `items` schema 的数组工具参数抛出 `KeyError: 'items'` | [Open #46052](https://github.com/BerriAI/litellm/issues/46052) |
| **中** | OpenRouter 流式传输报告上游模型名而非路由模型名 | [Open #46095](https://github.com/BerriAI/litellm/issues/46095) |
| **中** | Bedrock 音频转录失败 HTTP 400 — 系统消息与音频块不兼容 | [Open #41544](https://github.com/BerriAI/litellm/issues/41544) |
| **低** | Dashboard 对非管理员许可证端点调用疯狂输出 ERROR 堆栈 | [Open #46198](https://github.com/BerriAI/litellm/issues/46198) |
| **低** | 管理端点在 500 响应中泄露原始 Postgres 异常文本 | [Open #46076](https://github.com/BerriAI/litellm/issues/46076) |
| **已修复** | MCP 工具转换丢失 `function` 包装键导致 vLLM 400 错误 | [Closed #32281](https://github.com/BerriAI/litellm/issues/32281) |
| **已修复** | `usage-based-routing-v2` 找不到部署 | [Closed #16060](https://github.com/BerriAI/litellm/issues/16060) |
| **已修复** | Prometheus 自定义元数据标签与现有指标标签重复，破坏指标导出 | [Closed #46267](https://github.com/BerriAI/litellm/pull/46267) |

---

## 应用开发者需注意的事项

1. **谨慎升级** — v1.106.0-rc.2 为发布候选版；若您依赖代理 UI，请在生产部署前进行充分测试，管理员专属模型列表回归问题 (#17475) 可能影响使用。

2. **MCP 用户请检查依赖** — `mcp` 导入错误 (#46045) 表明环境中缺少或版本不匹配的 `mcp` 包；若使用工具透传，请确保在 requirements 中明确声明 `mcp`。

3. **成本追踪改进** — 若您使用 vLLM 透传、Azure PTU 共享或 Bedrock 跨区域配置，消耗现应被准确记录 (#45733, #43043, #46288)。

4. **遥测功能即将推出** — 带 Admin UI 控制的新遥测系统即将上线；预计将在 `/ui/telemetry` 页面提供设置选项，控制哪些数据离开您的代理 (#45494)。

5. **安全加固** — 项目创建错误不再向客户端暴露数据库详情 (#46330)，gunicorn 已升级至 26.x 以防范 HTTP 请求走私。

6. **RAG 改进** — 团队提供商凭证现可用于 `/rag/ingest` 和 `/rag/query`，查看者角色可访问 RAG 端点 (#45497)。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the Unsloth Digest into Chinese (Simplified Chinese - 简体中文). I need to:

1. Translate all the content into Chinese
2. Keep all Markdown structure exactly the same
3. Keep technical terms, URLs, issue numbers, code references, etc. as-is
4. Use natural technical Chinese register (like a Chinese developer newsletter)

Let me translate section by section:

## 1. Today's Highlights
Chinese: 今日要闻

## 2. Releases & Breaking Changes
Chinese: 版本更新与重大变更

## 3. New Model & Hardware Support
Chinese: 新模型与硬件支持

## 4. Performance & Optimization
Chinese: 性能与优化

## 5. Stability & Regressions
Chinese: 稳定性与回归问题

## 6. What This Means for Application Developers
Chinese: 对应用开发者的意义

Let me go through each section carefully and translate while preserving the structure.</think>

# Unsloth 速报 — 2026-10-14

## 1. 今日要闻

Unsloth 发布 **v0.1.907-beta** 版本，带来重大性能提升，多并发聊天场景下 **UI/UX 速度提升至 10 倍**，推理速度提升 **5 倍**（通过 95% 缓存命中率优化）。Studio 持续快速迭代，新增 MoE 缓存修复、多节点集群支持及视频模型训练能力（Wan2.2-TI2V-5B LoRA 训练）。

---

## 2. 版本更新与重大变更

| 版本 | 变更 | 说明 |
|---------|--------|-------|
| **v0.1.907-beta** | 大幅性能提升 + 浏览器使用增强 | UI 速度提升最高 10 倍；推理速度提升 5 倍（95% 缓存命中率）；MoE Strata 修复；所有 API 压缩效果更佳 |

*本周期未报告重大变更。*

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 类型 | 状态 |
|------------------|------|--------|
| **Wan2.2-TI2V-5B** | 视频生成（LoRA 训练） | PR #13654 — Studio DiT 训练器支持 |
| **LTX-2.5** | 视频生成 | PR #13618 — 默认配置现在与 ComfyUI 一致（托管 INT8-ConvRot DiT） |
| **Voxtral** | 多模态模型 | Issue #3013 — 功能请求，12 个 👍 |
| **Ling 3.0** | 模型支持 | Issue #8532 — 已关闭 |
| **AMD RX 5700XT** | GPU 支持 | Issue #8529 — 已关闭 |
| **H100 (sm_90a)** | xformers FA3 跳过 | PR #13619 — 当编译版本无 sm_90a 内核时跳过以避免崩溃 |
| **Windows 旧版 NVIDIA 驱动** | CPU/Vulkan 回退 | PR #13671 — 安装 Vulkan 或 CPU llama.cpp 套件 |

---

## 4. 性能与优化

| 领域 | 改进 | 参考 |
|------|-------------|-----------|
| **UI 响应速度** | 最高 **10 倍** 提升（多并发聊天场景） | v0.1.907-beta |
| **推理吞吐量** | **5 倍** 提升（95% 缓存命中率） | v0.1.907-beta |
| **MoE 模型** | 类 Strata 缓存放置保护；溢出微批次处理恢复 | PR #13674 |
| **H100 xformers** | 当无 sm_90a 内核时跳过 FA3（修复崩溃） | PR #13619 |
| **DGX Spark 集群** | 双节点支持，异步副本路由 | PR #10323 |
| **LoRA 可复现性** | 随机种子现可正确遵循 Random Seed 设置（此前固定为 3407） | PR #13637 |

---

## 5. 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 修复 |
|-------|----------|--------|-----|
| **H100 xformers 崩溃**（wgmma.fence 无 sm_90a） | 高 | 待处理 | PR #13619 待合并 |
| **长上下文聊天延迟** (#12552) | 中 | 已关闭 | — |
| **多账号模型同步** (#12365) | 中 | 已关闭 | — |
| **Gemma4 2B Windows 问题** (#13388) | 中 | 已关闭 | — |
| **Steam Deck GPU 识别** (#5091) | 低 | 已关闭 | — |

---

## 6. 对应用开发者的意义

- **推理服务**：5 倍推理速度提升直接提升生产部署吞吐量；结合 MoE 缓存修复，可进一步优化混合专家模型的推理性能。
- **工作流自动化**：Studio Routines（#13539）支持定时数据配方执行——可用于自动化微调管道。
- **视频生成**：Wan2.2-TI2V-5B LoRA 训练支持扩展了 Unsloth 在视频 DiT 微调领域的工作流能力。
- **企业多用户场景**：多账号 LAN 访问改进（#12365）解决了共享推理服务器的模型同步问题。
- **可复现性**：LoRA 适配器现可正确遵循随机种子设置——对可控实验至关重要。

**重点关注的 PR：**
- #13674 — MoE 缓存放置稳定性
- #10323 — 双节点服务编排
- #13619 — H100 xformers 兼容性

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*