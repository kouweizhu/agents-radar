# AI 基础设施日报 2026-10-25

> 生成时间: 2026-10-25 00:29 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the Cross-Project Comparison Report from English to Chinese (Simplified Chinese). They have provided very specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form - do not translate them
5. Use natural technical Chinese, the register of a Chinese developer newsletter - not literal word-for-word

Let me translate this carefully while preserving all formatting and technical terms:

## 1. Ecosystem Overview
## 2. Activity Comparison (table)
## 3. Model Support Race (table)
## 4. Performance Frontier (table)
## 5. Layer Positioning (table)
## 6. Trend Signals (tables)

I need to:
- Translate headings
- Translate body text
- Keep technical terms like vLLM, SGLang, llama.cpp, Ollama, LiteLLM, Unsloth in original form
- Keep version numbers like v0.40.11, v1.107.0 etc.
- Keep GitHub references like #12345
- Keep URLs
- Keep all table structures including alignment rows (|---|---|)
- Use Chinese punctuation but keep English punctuation within code/technical terms
- Translate lists properly
- Make it read like a Chinese developer newsletter

Let me start:</think>

# 跨项目对比报告 — 2026-10-25

---

## 1. 生态概览

AI推理基础设施领域正在经历激进的垂直整合。当前的活动呈现出三个趋同的方向：**硬件抽象层正在整合**（ROCm支持现已覆盖vLLM、SGLang、llama.cpp和Unsloth），**模型特定优化正在加速**（DeepSeek V4.1变体在所有服务引擎的提交队列中占据主导），**多模态和思维链能力正在成为标配**（Qwen3-VL、SANA扩散模型、语音生成）。与此同时，网关/代理层（LiteLLM）正在应对安全事件，这些事件凸显了更广泛生态系统中快速功能迭代所带来的风险。

---

## 2. 活动对比

| 项目 | Issues（24h） | PRs（24h） | Releases（24h） | 重点动态 |
|---------|-------------|-----------|----------------|------------------|
| **vLLM** | 24+ | 30+ | 无 | DeepSeek V4.1优化、NVFP4 KV缓存、ROCm修复 |
| **SGLang** | 21 | 23 | 无 | SANA扩散模型、管道并行、RDNA支持跟踪 |
| **llama.cpp** | 8 | 10+ | ~10次提交 | Hexagon HMX、Metal清理、KV缓存轮换 |
| **Ollama** | 8 | 23 | **v0.40.11** | 语音生成（macOS）、MLX停止序列修复 |
| **LiteLLM** | 10+ | 20+ | **4个版本** | 安全事件（v1.107.0被篡改）、成本追踪修复 |
| **Unsloth** | 21 | 180 | 无 | 管道+张量并行v2正在review中 |

*注：Unsloth的PR数量为总开放PR数；过去24h内有约10个处于活跃状态。*

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM |
|---------------------|------|--------|-----------|--------|---------|
| **DeepSeek V4.1 Flash** | ✅（ROCm） | ✅ | ✅ | — | — |
| **DeepSeek V4.1** | ✅ | — | — | — | — |
| **DeepSeek V4.1 NVFP4** | ✅（Dense MLA） | — | — | — | — |
| **Qwen3-VL** | ✅ | — | — | — | — |
| **Qwen3（通过LiteLLM）** | — | — | — | — | ✅ |
| **Kimi-K3 / MI355X** | ✅ | — | — | — | — |
| **MiniMax-M3** | — | — | ✅ | — | — |
| **Nemotron 3.5 Bolt（MLX）** | — | — | — | ✅ | — |
| **Nemotron 3.5 Super VL** | — | — | — | — | ✅ |
| **SANA-Sprint 0.6B** | — | ✅ | — | — | — |
| **Gemma 4 Vision** | — | — | — | ✅ | — |
| **Cerebras Llama 3.1** | — | — | — | — | ✅ |

**领先者：** vLLM在dense/MoE dense架构方面覆盖最广，并在硬件特定的KV缓存优化（NVFP4）方面处于领先地位。SGLang和llama.cpp正在DeepSeek变体方面追赶。

---

## 4. 性能前沿

| 优化领域 | 活跃项目 | 关键工作 |
|--------------------|-----------------|----------|
| **KV缓存** | vLLM、SGLang、llama.cpp | Dense MLA的NVFP4（vLLM）、并行聊天的KV抢占（SGLang/Unsloth）、GPU驻留轮换常量（llama.cpp） |
| **量化** | vLLM、llama.cpp、Unsloth | NVFP4 MMVQ（llama.cpp）、gfx942上的MXFP4（vLLM）、混合精度专家堆叠（Unsloth） |
| **并行性** | vLLM、SGLang、Unsloth | 管道并行v1（Unsloth）、分片加载的张量并行v2（Unsloth）、数据并行+投机解码（vLLM、SGLang） |
| **内核** | vLLM、SGLang、llama.cpp | Engram reduce-scatter（SGLang）、单体Triton top-k（vLLM）、Hexagon HMX flash attention（llama.cpp） |
| **内存** | vLLM、SGLang、Unsloth | 固定主机内存的MoE缓存（llama.cpp）、GPU驻留KV常量、DSpark/DFlash sidecar预留（Unsloth） |
| **批处理** | vLLM、SGLang、LiteLLM | DBO + spec decode（vLLM）、num_held_rows追踪（SGLang）、异步NaN验证（SGLang） |

**前沿聚焦：** 最高迭代速度的优化工作集中在**KV缓存设计**（新dtype支持、抢占、驻留）和**分布式并行性**（管道+张量）。这些领域最有可能在未来2-4周内产生延迟/成本突破。

---

## 5. 层级定位

| 层级 | 主要项目 | 角色 |
|-------|------------------|------|
| **训练 / 微调** | Unsloth | 多GPU并行LoRA/DPO训练 |
| **本地运行时** | llama.cpp、Ollama、Unsloth | 设备端/笔记本推理；Rust服务器（llama.cpp、Ollama） |
| **服务引擎** | vLLM、SGLang | 生产级HTTP/API推理；KV缓存、批处理、投机解码 |
| **网关 / 代理** | LiteLLM | API标准化、成本追踪、密钥管理、多供应商路由 |
| **Studio / UI** | Unsloth、Ollama | 面向用户的模型管理、聊天、embedding端点GUI |

**生态映射：**

- **vLLM + SGLang** 作为生产服务引擎直接竞争，SGLang在扩散和多模态特性上略有领先，vLLM在模型覆盖广度和KV dtype创新上略有领先。
- **llama.cpp** 占据嵌入式/本地运行时 niche，但正在向服务器级功能扩展（RPC、管道并行）。
- **Ollama** 针对消费级/macOS用户，提供最简入门体验；MLX后端是Apple Silicon的独特优势。
- **LiteLLM** 位于所有引擎之上作为API网关——其安全事件（v1.107.0）展示了水平整合层中供应链被篡改的波及范围。
- **Unsloth** 桥接训练和服务——其并行工作可能实现端到端的Unsloth → vLLM工作流。

---

## 6. 趋势信号

### 代理/应用开发者应关注什么

| 信号 | 影响 |
|-----------|-------------|
| **所有引擎的ROCm/AMD加速** | AMD MI355X和RDNA3/RDNA4支持正在全面落地。如果此前受限于CUDA，现在是时候测试AMD以实现成本敏感型部署了。 |
| **DeepSeek V4.1全面铺开** | 该模型变体正在成为MoE + MLA优化的参考实现。预计未来2-4周内将持续进行内核优化。 |
| **Unsloth的管道+张量并行** | 合并后，Unsloth将提供最简单的多GPU LoRA训练路径。结合vLLM推理，这将形成完整的Unsloth → vLLM管道。 |
| **LiteLLM安全事件** | 凭证窃取版本的发布凸显了Python/ML生态系统中的供应链风险。验证你的依赖项；考虑将LiteLLM固定到特定版本。 |
| **新模态：语音（Ollama）、扩散（SGLang）、NVFP4** | 多模态推理不再只是视觉——音频生成和扩散模型正在进入服务层。规划异构工作负载。 |
| **投机解码 + DBO结合** | vLLM现已支持带spec decode的动态批处理优化。对于高吞吐量场景，这是延迟方面的突破。 |

### 基础设施工程师需注意

- **如果你在使用vLLM：** 如果内存受限，测试DeepSeek/Kimi的NVFP4；关注Qwen4Exp回归修复。
- **如果你在使用SGLang：** 管道并行和扩散功能正在成熟——适合多GPU视觉/图像工作负载。
- **如果你在使用llama.cpp：** Hexagon和Metal工作正在推进——适合移动/边缘+服务器部署。
- **如果你在使用Ollama：** 语音生成是macOS应用的差异化优势；关注MLX停止序列修复。
- **如果你在使用LiteLLM：** 立即审计你的版本；考虑固定到v1.106.3并重新评估与LiteLLM一起使用的任何凭证。

---

*跨项目摘要基于GitHub活动整理 — 2026-10-25*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM Daily Digest from English to Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, issue/PR numbers, project names, etc. in their original form
4. Use natural technical Chinese, like a Chinese developer newsletter

Let me translate this carefully while maintaining the exact structure and formatting.

The content includes:
- A main heading with date
- 6 sections with subheadings
- Tables with multiple columns
- Bullet lists
- URLs and issue references

I need to translate the text but keep:
- Issue numbers (#62383, etc.)
- URLs (github.com links)
- Project names (vLLM, DeepSeek, Qwen, etc.)
- Config/feature names (NVFP4, KV cache, etc.)
- Tables structure

Let me proceed with the translation:</think>

# vLLM 每日简报 — 2026-10-25

## 1. 今日要闻

vLLM 开发继续聚焦于 DeepSeek-V4.1 优化和 ROCm 支持，多个 PR 推进了 Flash decode 内核和 AMD MI355X 兼容性。社区还在解决关键稳定性问题，包括影响 Qwen4Exp 长前缀的回归问题以及 CUDA 非法内存访问。

## 2. 发布与重大变更

- **过去 24 小时内无新版本**发布。

## 3. 新模型与硬件支持

| 功能 | 描述 | PR/Issue |
|---------|-------------|----------|
| **DeepSeek-V4.1 on ROCm MI355X** | DSV4.1-Flash 在 gfx950 (MI355X) 上的草稿准备快速路径：共享输出去重、并行填充尾部修复、仅 KV 上下文插入 | [#63182](https://github.com/vllm-project/vllm/pull/63182) |
| **Dense MLA 的 NVFP4 KV Cache** | 为 Dense MLA 模型（DeepSeek-V3.1、Kimi-K3）在 FlashInfer Cake decode 上添加 `--kv-cache-dtype nvfp4`；使用 352 字节/令牌 vs 576 (FP8) 或 1152 (BF16) | [#63203](https://github.com/vllm-project/vllm/pull/63203) |
| **Qwen3-VL on /v1/systemone** | 将 `Qwen3VLForConditionalGeneration` 映射到现有 NextTokenStrategy 以支持多模态服务 | [#62402](https://github.com/vllm-project/vllm/pull/62402) |
| **Kimi-K3 MI355X 配方更新** | 使 AgentX 配方与 InferenceX #4393 对齐，支持 AMD MI355X | [#63520](https://github.com/vllm-project/vllm/pull/63520) |
| **gfx942 上的 MXFP4** | 在 gfx942 (MI300X) 上将 AITER Triton MXFP4 W4A16 中间大小对齐到 128 | [#63522](https://github.com/vllm-project/vllm/pull/63522) |

**进行中的 RFC：**
- **可编程 KV Cache**：用于代理服务中可组合策略的provider无关抽象（[#57103](https://github.com/vllm-project/vllm/issues/57103)）
- **torch.accelerator 迁移**：用 `torch.accelerator` 替代 `torch.cuda` API，以更好支持非 CUDA 硬件（[#30679](https://github.com/vllm-project/vllm/issues/30679)）

## 4. 性能与优化

| 领域 | 工作项 | 详情 | PR/Issue |
|------|--------|--------|----------|
| **DeepSeek-V4.1** | Flash-decode eager 元数据融合 | 内核融合和主机调度归约的追踪 PR | [#63308](https://github.com/vllm-project/vllm/pull/63308) |
| **DSv4.1 decode** | 每步主机元数据计算脱离 torch 调度 | 堆叠在 #63296 和 #63393 上 | [#63523](https://github.com/vllm-project/vllm/pull/63523) |
| **Triton top-k 内核** | 单体内核回退到全词表搜索 | 从高斯拟合到前 8192 logit 的 pivot 对 6-10% 的行过高 | [#61998](https://github.com/vllm-project/vllm/issues/61998) |
| **GLM-5.3** | 性能优化 | 继 #46654 之后的跟进，CUDA 和 MNNVL/cuda_ipc 改进 | [#57406](https://github.com/vllm-project/vllm/issues/57406) |
| **ROCm attention** | AITER 上融合的 Kimi-K3 MLA 分块上下文收集 | 四个内核 → 融合为单个内核 | [#53166](https://github.com/vllm-project/vllm/pull/53166) |
| **预处理** | Rust vs PyTorch 基准测试 | Rust 预处理 vs PyTorch 对比 | [#47601](https://github.com/vllm-project/vllm/issues/47601) |
| **Spec decode + DBO** | 支持 DBO 与投机解码和 DCP 结合 | 解除 V2 runner 对 DBO 与 spec decode 组合的限制 | [#61464](https://github.com/vllm-project/vllm/pull/61464) |

## 5. 稳定性与回归

| 严重程度 | 问题 | 描述 | 状态 |
|----------|-------|-------------|--------|
| **高** | **Qwen4Exp 单前缀崩溃** | 超过 262,144 边界的单前缀崩溃并报 CUDA 非法内存访问（v0.32.0，nightly；v0.31.1 正常） | [#62383](https://github.com/vllm-project/vllm/issues/62383) |
| **高** | **Qwen3.8-27B GDN 混合 PP=3** | 带前缀缓存时在 sm_86 上发生非法内存访问（Xid 31）；无前缀缓存时输出乱码；自 v0.28.0 回归 | [#63505](https://github.com/vllm-project/vllm/issues/63505) |
| **高** | **ROCm attention 错误结果** | `ROCM_ATTN` 在 RDNA 上对头大小 ≥96 且 KV 块大小 ≠16 时返回错误注意力，对头大小 192/256 的 MHA 也有问题 | [#62697](https://github.com/vllm-project/vllm/issues/62697) |
| **高** | **DSv4.1 SM120 自适应验证** | SM120 上拒绝 `enable_adaptive_verification` — 设备查询长度支持仅限 SM90/SM100 | [#63343](https://github.com/vllm-project/vllm/issues/63343) |
| **中** | **TP Worker 挂起** | DeepSeek-V4-Pro TP=8 带 MTP 投机解码导致 EngineDeadError | [#41530](https://github.com/vllm-project/vllm/issues/41530) |
| **中** | **Ngram 投机解码** | 混合 GDN（Qwen3.5）模型上输出损坏 | [#39273](https://github.com/vllm-project/vllm/issues/39273) |
| **中** | **v0.25.0 回归** | Qwen3.5 FP8 在 H200 上于 CUDA 图捕获期间崩溃 | [#49311](https://github.com/vllm-project/vllm/issues/49311) |
| **中** | **KV cache 首次启动** | 首次启动授予的 KV cache 比后续相同启动约小 5% | [#54383](https://github.com/vllm-project/vllm/issues/54383) |

**追踪 issue：** KV 事件正确性及跨模型架构和投机解码模式的兼容性（[#63149](https://github.com/vllm-project/vllm/issues/63149)）

## 6. 这对应用开发者的意义

1. **AMD 上的 DeepSeek-V4.1 用户**：ROCm 支持日趋成熟，MI355X (gfx950) 优化正在落地。在 AMD 硬件上运行 DSV4.1-Flash 的用户应该会看到草稿准备快速路径和融合内核带来的性能提升。

2. **长上下文 Qwen 用户**：Qwen4Exp 回归（Issue #62383）很关键——在 v0.32.0 上避免超过 262K 令牌的单前缀。受影响可降级到 v0.31.1，或等待修复。

3. **Qwen3.8 GDN 上的前缀缓存用户**：使用混合 GDN 和流水线并行（PP=3）的 Qwen3.8-27B 时，前缀缓存可能导致崩溃（Issue #63505）。这是自 v0.28.0 以来的回归。

4. **NVFP4 KV cache**：Dense MLA 模型的新选项将每令牌内存减少约 40%（352 vs 576 字节）。在 FlashInfer 后端可用——考虑用于内存受限的部署。

5. **数据并行部署**：修复了 ORCA 跨多引擎指标聚合的 bug——负载均衡现在应该能正确报告（[#63445](https://github.com/vllm-project/vllm/pull/63445)、[#61899](https://github.com/vllm-project/vllm/pull/61899)）。

6. **Spec decode + DBO**：V2 引擎中现已支持动态批处理优化与投机解码的组合（[#61464](https://github.com/vllm-project/vllm/pull/61464)）。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the English digest into Chinese (Simplified), following specific rules about translation. Let me analyze the content and translate it appropriately while maintaining the structure and technical accuracy.

Key points to remember:
- Keep headings, tables, lists, blockquotes, bold/italic, horizontal rules
- Keep URLs, numbers, dates, issue/PR references, code identifiers as-is
- Use natural technical Chinese - not literal word-for-word
- Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate section by section:

## 1. Today's Highlights

## 2. Releases & Breaking Changes

## 3. New Model & Hardware Support

## 4. Performance & Optimization

## 5. Stability & Regressions

## 6. What This Means for Application Developers

I need to be careful with:
- "flaky tests" -  flaky测试/flaky测试用例
- "prefill throughput" - prefill吞吐量
- "denoising loop" - 去噪循环
- "reduce-scatter" - 保持英文，这是技术术语
- "MoE" - 保持英文
- "scheduler" - 调度器
- "diffusion" - 扩散模型/diffusion
- "kernel" - 内核
- "JIT" - 保持英文
- "AWQ" - 保持英文
- "WSL2" - 保持英文
- "CUDA IPC" - 保持英文

Let me translate this now.</think>

# SGLang 速报 — 2026-10-25

## 1. 今日焦点

SGLang 项目在多个方向上保持活跃开发。社区正在处理一起高关注度的 flaky 测试问题（#42752，128 条评论），同时也在推进 MoE 内核和扩散模型的性能优化。新增功能包括原生 SANA-Sprint 0.6B 扩散模型支持，以及面向 AMD RDNA3/RDNA4 消费级 GPU 的支持扩展。

---

## 2. 发布与破坏性变更

- **过去 24 小时内无新版本发布**。

---

## 3. 新模型与硬件支持

| 类别 | 详情 | Issue/PR |
|----------|---------|----------|
| **扩散模型** | 原生 SGLang-Diffusion 支持 **SANA-Sprint 0.6B** 文生图模型（1024px，1-4 步推理） | [#43671](https://github.com/sgl-project/sglang/issues/43671) |
| **AMD GPU** | 官方支持 **Radeon RDNA3**（`gfx1100`/`gfx1101`）和 **RDN4**（`gfx1200`/`gfx1201`）消费级 GPU 的跟踪 Issue | [#30599](https://github.com/sgl-project/sglang/issues/30599) |
| **Rust Server** | Qwen-VL 图像现可通过 sglang-processor 在 dynamo-multultimodal 中服务，支持聊天图像输入 | [#46291](https://github.com/sgl-project/sglang/pull/46291) |
| **NPU** | PD_Disaggregation 现已支持 Mooncake 传输后端 | [#46223](https://github.com/sgl-project/sglang/pull/46223) |

---

## 4. 性能与优化

| 优化项 | 描述 | PR |
|--------------|-------------|-----|
| **Engram reduce-scatter** | 对大型统一 prefill 分片使用 reduce-scatter 替代 all-reduce + scatter | [#46338](https://github.com/sgl-project/sglang/pull/46338) |
| **Wan cross-attention** | 每个去噪循环仅投影一次 text K/V（避免重复 GEMM + norm 计算） | [#46246](https://github.com/sgl-project/sglang/pull/46246) |
| **MoE scalar scales** | 修复 Triton 3.9 上 `swap_ab` 时的标量 block scales 广播问题（SM90） | [#45889](https://github.com/sgl-project/sglang/pull/45889) |
| **Scheduler rows** | 在 prefill 批次准入时增量式追踪 `num_held_rows`（减少 O(n²) 重复计算） | [#46337](https://github.com/sgl-project/sglang/pull/46337) |
| **DSA overlap** | 在交错 CP prefill 期间，将 CP KV 收集与索引器计算重叠执行 | [#46179](https://github.com/sgl-project/sglang/pull/46179) |
| **AMD deepseek-v4** | 在 `gfx950`（MI355X）上默认启用共享专家融合（decode 提升 2.0–6.6%） | [#42496](https://github.com/sgl-project/sglang/pull/42496) |
| **Diffusion residency** | 预热后应用/验证/回滚校准后的 residency（3/4 堆叠式 PR） | [#37918](https://github.com/sgl-project/sglang/pull/37918) |
| **Async NaN validation** | 将异步 NaN 验证融合为单一内核，用于 logits/probability 检查 | [#43720](https://github.com/sgl-project/sglang/pull/43720) |

---

## 5. 稳定性与回归问题

| 严重程度 | Issue | 摘要 | 状态 |
|----------|-------|---------|--------|
| **严重** | [#42752](https://github.com/sgl-project/sglang/issues/42752) | PR 护理期间的 flaky 测试和 CI 基础设施故障（128 条评论） | 开启 |
| **高** | [#36669](https://github.com/sgl-project/sglang/issues/36669) | GLM-5.3-Flash 思考输出在多工具 agentic 提示词下退化为重复的 `!` | 开启 |
| **高** | [#36807](https://github.com/sgl-project/sglang/issues/36807) | `fast_topk_v2` 当 radix 阈值 bucket 超过 4096 条目缓冲区时返回错误的 top-k 集合（k=2048） | 开启 |
| **高** | [#42508](https://github.com/sgl-project/sglang/issues/42508) | 调度器在空闲循环不变量检查时异常终止，报 `double free or corruption` | 开启 |
| **中** | [#45367](https://github.com/sgl-project/sglang/issues/45367) | Kimi-K3 DCP a2a 在 2 节点 GB300 上产生乱码 decode 输出；`NCCL_GRAPH_REGISTER=0` 可作为变通 | 开启 |
| **中** | [#46314](https://github.com/sgl-project/sglang/issues/46314) | 扩散模型量化层存在 11 个正确性 bug（ModelSlim MXFP4、rowwise FP8/gfx1250 等） | 开启 |
| **中** | [#46312](https://github.com/sgl-project/sglang/issues/46312) | DeepSeek AWQ 检查点加载失败：报 `No module named 'sglang.kernel_api_logging'` | 开启 |
| **中** | [#46335](https://github.com/sgl-project/sglang/issues/46335) | compressed-tensors：非目标层报错 "Unable to find matching target" | 开启 |
| **已修复** | [#42533](https://github.com/sgl-project/sglang/pull/42533) | Anthropic 中途内联系统消息未正确附加（前缀缓存回归） | 已合并 |

---

## 6. 这对应用开发者意味着什么

1. **关注 CI flaky 测试**：活跃的跟踪 Issue（#42752）可能导致你的 PR 延迟合并或出现虚假失败。考虑重新运行失败的 CI 任务。

2. **避免在 GLM-5.3-Flash 上使用复杂 agentic 提示词**：当前 `tool_choice=auto` 的多工具提示词会导致输出退化。修复工作正在进行中。

3. **AMD 消费级 GPU 用户**：RDNA3/RDN4 支持正在跟踪中（#30599）。目前，数据中心 Instinct GPU（`gfx942`/`gfx950`）仍是 ROCm 上的受控路径。

4. **性能提升即将到来**：engram reduce-scatter 和调度器行追踪优化应能提升 prefill 吞吐量，尤其对大批量场景效果显著。

5. **Rust Server 现已支持 Qwen-VL 图像**：如果你在使用 Rust Server 配合 Qwen-VL 模型，现在可以直接在聊天补全请求中发送图像。

6. **WSL2 多模态警告**：WSL2 上的多模态 CUDA IPC 自动选择会崩溃。部署在此环境时请使用替代特性传输方式。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate this English llama.cpp digest into Chinese. Let me carefully follow the translation rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

---

# llama.cpp Digest — 2026-10-25

## 1. 今日要闻

llama.cpp 项目持续快速推进，过去 24 小时内约有 10 次提交。主要进展包括：Hexagon 针对多核 HMX 系统的闪存注意力优化、Metal 后端移除弃用的重缩放逻辑，以及 DeepSeek V4.1 Flash 的新模型支持。还修复了多个稳定性问题，包括 Jinja 模板解析和 RPC 边界检查。围绕 MoE 专家缓存的性能优化工作正在进行中，新增了基准测试参数和主机内存固定优化。

---

## 2. 发布与重大变更

| 提交 | 描述 | 链接 |
|--------|-------------|-------|
| **b11869** | **Jinja**: 修复了 `select` 和 `selectattr` 参数处理问题，该问题导致 Functionary v3.2 聊天模板在处理 `oneOf` 模式时失败 | [#31059](https://github.com/ggml-org/llama.cpp/pull/31059) |
| **b11867** | **Server**: 重构服务器入口点，新增 `server_role` 以更清晰地管理模式（router/single/download） | [#31113](https://github.com/ggml-org/llama.cpp/pull/31113) |


| **b11858** | **llama**: 拒绝为具有 MoE amax 重缩放的架构使用 `-sm` 张量，以防止计算错误 | [#31081](https://github.com/ggml-org/llama.cpp/pull/31081) |
| **b11857** | **GGML**: 允许在 `MUL_MAT_ID` 中使用 `-1` 索引跳过计算（适用于条件执行） | [#26631](https://github.com/ggml-org/llama.cpp/pull/26631) |

---

## 3. 新模型与硬件支持

- **DeepSeek V4.1 Flash**: 在版本迭代中获得模型支持更新

项目继续扩展其兼容性范围。新增对 DeepSeek V4.1 Flash 的支持，同时为 MiniMax-M3 引入计算图量化精度转发功能。针对不同硬件平台进行了多项优化，包括 Hexagon 的 KV-head 团队分配策略以提升多核 HMX 闪存注意力性能，以及 CUDA 对 Mistral Small 4 专家降维投影所需 FP32 激活的支持。

为 NVIDIA Kepler GPU 提供了 cuBLAS 兼容性补丁。

在性能优化方面，新增了 MoE 缓存基准测试参数 `-mcmoe`，允许用户测试不同缓存配置。通过主机专家页面固定技术，用固定内存替代可分页内存进行 MoE 专家缓存上传，从而减少 PCIe 带宽消耗。

KV 缓存方面，将旋转常量保留在 GPU 上，避免重复的主机与设备间数据传输。针对小 K 值的 NVFP4 MMVQ 路径进行了优化，Metal 则移除了已被专家令牌缩放替代的重缩放逻辑。RPC 中新增了 RDMA 接收的边界检查，防止越界访问。

稳定性方面存在多个问题：RTX 5090 笔记本上的 CUDA 图存在挂起现象，Qwen3.6 27B 的 MTP 输出出现重复，多 GPU 层分片上的提示处理性能下降约 50%，以及 Vulkan/ANV 闪存注意力回退到标量导致 O(N²) 性能下降。

SYCL F16 在密集 Qwen3.8-27B Q4_K_M 上产生 NaN，DeltaNet 在长提示下出现令牌混乱。

Jinja 栈溢出问题已通过限制深度阈值解决，服务器语法触发器类型验证和 CORS 问题也已修复。

对于 DeepSeek V4.1 用户，新模型支持已可用，建议更新到最新版本。

多 GPU 推理环境中使用 draft-MTP 时需要注意提示处理性能下降约 50% 的问题，单 GPU 部署不受影响。RTX 5090 笔记本用户应设置 `GGML_CUDA_DISABLE_GRAPHS=1` 作为临时方案。MoE 模型基准测试的新参数允许比较不同缓存大小配置。

部署方面，服务器重构改善了模式清晰度，需要验证更新后路由模式部署脚本的兼容性。SYCL 用户在遇到 NaN 输出或令牌损坏时应尝试禁用融合 GEMM 或回退到 CPU。

两个服务器端修复已部署，提高了生产环境的安全性。</think>

# llama.cpp Digest — 2026-10-25

## 1. 今日要闻

llama.cpp 项目持续快速推进，过去 24 小时内约有 10 次提交。主要进展包括：Hexagon 针对多核 HMX 系统的闪存注意力优化、Metal 后端移除弃用的重缩放逻辑，以及 DeepSeek V4.1 Flash 的新模型支持。还修复了多个稳定性问题，包括 Jinja 模板解析和 RPC 边界检查。围绕 MoE 专家缓存的性能优化工作正在进行中，新增了基准测试参数和主机内存固定优化。

---

## 2. 发布与重大变更

| 提交 | 描述 | 链接 |
|--------|-------------|-------|
| **b11869** | **Jinja**: 修复了 `select` 和 `selectattr` 参数处理问题，该问题导致 Functionary v3.2 聊天模板在处理 `oneOf` 模式时失败 | [#31059](https://github.com/ggml-org/llama.cpp/pull/31059) |
| **b11867** | **Server**: 重构服务器入口点，新增 `server_role` 以更清晰地管理模式（router/single/download） | [#31113](https://github.com/ggml-org/llama.cpp/pull/31113) |
| **b11858** | **llama**: 拒绝为具有 MoE amax 重缩放的架构使用 `-sm` 张量，以防止计算错误 | [#31081](https://github.com/ggml-org/llama.cpp/pull/31081) |
| **b11857** | **GGML**: 允许在 `MUL_MAT_ID` 中使用 `-1` 索引跳过计算（适用于条件执行） | [#26631](https://github.com/ggml-org/llama.cpp/pull/26631) |

---

## 3. 新模型与硬件支持

- **DeepSeek V4.1 Flash**: 在 [#31086](https://github.com/ggml-org/llama.cpp/pull/31086) 新增模型支持
- **MiniMax-M3**: 将量化精度转发至计算图，修复了 `#31063` — 现在可正确处理 MiniMax 模型的 NVFP4 和 MXFP8 量化 ([#31097](https://github.com/ggml-org/llama.cpp/pull/31097))
- **Hexagon**: 针对多核 HMX 闪存注意力进行 KV-head 团队划分 — 当 `n_kv_heads` 不能整除核心数时可提升利用率 ([#31055](https://github.com/ggml-org/llama.cpp/pull/31055))
- **CUDA**: 为 `MUL_MAT_ID` 添加所需的 FP32 激活支持 — 启用 Mistral Small 4 专家下投影所需的 `GGML_PREC_F32` ([#30260](https://github.com/ggml-org/llama.cpp/pull/30260))
- **Legacy GPU**: 改进了 NVIDIA Kepler GPU（计算能力 3.5）的 cuBLAS 兼容性 ([#30727](https://github.com/ggml-org/llama.cpp/pull/30727))

---

## 4. 性能与优化

| 领域 | 变更 | 详情 |
|------|--------|---------|
| **MoE 缓存** | 新增基准测试参数 | 在 `llama-bench` 中添加 `-mcmoe` / `--moe-cache-mib`，用于 A/B 测试专家缓存大小 ([#31121](https://github.com/ggml-org/llama.cpp/pull/31121)) |
| **MoE 内存** | 主机专家页固定 | 可选功能，使用固定主机内存代替分页内存上传 MoE 专家缓存 — 减少 PCIe 带宽浪费 ([#31122](https://github.com/ggml-org/llama.cpp/pull/31122)) |
| **KV 缓存** | GPU 常驻常量 | 将旋转常量保留在 GPU 上，避免重复的主机↔设备传输 ([#31073](https://github.com/ggml-org/llama.cpp/pull/31073)) |
| **NVFP4 MMVQ** | 按 lane 分组行 | 通过将输出行分配给 2 的幂次 lane 组，优化小 K 值的 NVFP4 MMVQ 路径 ([#30788](https://github.com/ggml-org/llama.cpp/pull/30788)) |
| **Metal** | 移除弃用重缩放 | 清理已被每专家 token 缩放替代的 `mul_mm_id` amx 重缩放逻辑 ([#30924](https://github.com/ggml-org/llama.cpp/pull/30924)) |
| **RPC** | 边界检查 | 在 RDMA recv 中添加边界检查，防止越界访问 ([#30399](https://github.com/ggml-org/llama.cpp/pull/30399)) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | **CUDA graphs 导致 RTX 5090 笔记本 / sm_120 GPU 挂起** — GPU 通道挂起，出现 RC 看门狗 + Xid 8 错误；`GGML_CUDA_DISABLE_GRAPHS=1` 是临时解决方案 | 待解决: [#27330](https://github.com/ggml-org/llama.cpp/issues/27330) |
| **高** | **Qwen3.6 27B 的 MTP 在长对话后输出重复的 `////`** | 待解决: [#23577](https://github.com/ggml-org/llama.cpp/issues/23577) |
| **中** | **Draft-MTP 在多 GPU 层分割时使提示处理减半** — 单 GPU 正常工作 | 待解决: [#27428](https://github.com/ggml-org/llama.cpp/issues/27428) |
| **中** | **Vulkan/ANV 闪存注意力回退到 SCALAR 导致 O(N²) 性能下降** 在 Intel Arc B580 上 | 待解决: [#27638](https://github.com/ggml-org/llama.cpp/issues/27638) |
| **中** | **SYCL F16: 密集 Qwen3.8-27B Q4_K_M 输出 NaN** 自 IQ3 代码重排后；关闭 fused GEMM 可修复 | 待解决: [#30892](https://github.com/ggml-org/llama.cpp/issues/30892) |
| **中** | **SYCL DeltaNet 在长提示下产生 token 混乱** (Qwen3.6, Qwen3.8, Nemotron) | 待解决: [#29183](https://github.com/ggml-org/llama.cpp/issues/29183) |
| **已修复** | **Jinja 中 `from_json` 栈溢出** — 深层嵌套导致崩溃；现已在深度阈值处截断 | PR: [#31032](https://github.com/ggml-org/llama.cpp/pull/31032), [#31099](https://github.com/ggml-org/llama.cpp/pull/31099) |
| **已修复** | **Server 语法触发器类型验证** — 用户提供的类型字段缺少范围检查 | PR: [#31098](https://github.com/ggml-org/llama.cpp/pull/31098) |
| **已修复** | **Server `/tools` CORS** — 跨域请求未验证 | PR: [#29834](https://github.com/ggml-org/llama.cpp/pull/29834) |

---

## 6. 应用开发者需要了解的事

1. **DeepSeek V4.1 用户**：新模型支持已上线 — 请更新到最新版本以使用最新的 DeepSeek 变体。

2. **多 GPU 推理**：如果在使用带层分割的 draft-MTP，请注意 [#27428](https://github.com/ggml-org/llama.cpp/issues/27428) 中报告的约 50% 提示处理性能回归问题；单 GPU 部署不受影响。

3. **RTX 5090 笔记本用户**：CUDA graphs 在 sm_120 上不稳定；请设置 `GGML_CUDA_DISABLE_GRAPHS=1` 作为临时解决方案，直至问题解决。

4. **MoE 模型基准测试**：`llama-bench` 中的新参数 `--moe-cache-mib` 支持不同缓存大小的性能对比 — 这对调优 Mistral Small、Qwen MoE 及类似模型非常有用。

5. **服务器部署**：服务器重构改善了模式管理；如果您使用路由模式，请在更新后验证您的部署脚本是否仍然正常工作。

6. **SYCL 用户**：在 Intel Arc GPU 上出现了多个 DeltaNet 和 F16 量化相关问题 — 如果遇到 NaN 输出或 token 损坏，请尝试关闭 fused GEMM 或回退到受影响的 CPU 操作。

7. **安全加固**：两个服务器端修复已上线 — `/tools` 端点的 CORS 验证和语法触发器类型范围检查。这些风险较低，但在生产环境中建议打上补丁。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Simplified Chinese. Let me analyze the content and translate it following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, code, issue/PR numbers verbatim
4. Keep project names, repository names, API identifiers untranslated
5. Use natural technical Chinese - register of a Chinese developer newsletter

Let me translate section by section:

## Releases & Breaking Changes

- Version → 版本
- Change → 变更
- Link → 链接
- "Speech generation on macOS" → "macOS 语音生成"
- "ollama run plays audio as it's generated" → "ollama run 可在生成时播放音频"
- "OpenAI-compatible /v1/audio/speech endpoint" → "OpenAI 兼容的 /v1/audio/speech 端点"

Let me continue with the full translation:</think>

# Ollama 动态 — 2026-10-25

## 今日焦点

Ollama v0.40.11 带来了 **macOS 原生语音生成** 功能 — `ollama run` 现在可以在生成回复时直接朗读文本，OpenAI 兼容的 `/v1/audio/speech` 端点还能向应用流式传输音频。与此同时，MLX 后端持续活跃开发中：此前导致 Apple Silicon 上 stop 序列被忽略的 bug 正在修复中（PR #19267），支持 Nemotron 3.5 Bolt 74B-A9B 混合精度专家堆叠的代码也已合并（PR #19229）。

---

## 版本发布与重大变更

| 版本 | 变更 | 链接 |
|------|------|------|
| **v0.40.11** | macOS 语音生成。`ollama run` 可在生成时播放音频。OpenAI 兼容的 `/v1/audio/speech` 端点，支持流式传输到应用。 | [Release](https://github.com/ollama/ollama/releases/tag/v0.40.11) |
| — | OpenAI 兼容的 `/v1/chat/completions` 和 `/v1/completions` 现已支持 `max_completion_tokens` 作为生成上限（此前会被静默丢弃）。 | [PR #18608](https://github.com/ollama/ollama/pull/18608) |
| — | 模型名称现在允许最多 96 个字符（此前为 80），可容纳更长的 HuggingFace GGUF 仓库名。 | [PR #18520](https://github.com/ollama/ollama/pull/18520) |
| — | 响应 ID 现使用 UUID 替代 `rand.Intn(999)`，修复了代理日志中的冲突问题。 | [PR #18656](https://github.com/ollama/ollama/pull/18656) |

---

## 新模型与硬件支持

- **MLX 后端**：新增 **Nemotron 3.5 Bolt 74B-A9B** 支持，包含每层专家配置、LiLiCorr 投机解码、预量化仿射 3 位导入与混合精度专家堆叠。 | [PR #19229](https://github.com/ollama/ollama/pull/19229)
- **Gemma 4 视觉**：修复动态尺寸计算可能将最小图像网格向下取整到低于 70 token 预算的问题，为紧凑型视觉塔保留细节。 | [PR #19247](https://github.com/ollama/ollama/pull/19247)

---

## 性能与优化

- **内存核算修复**：llama-server 中的缓冲区行去重假设每个子进程只有一个模型，导致投机草稿行替换目标模型行 — 30B dflash 模型错误报告约 2.3GB VRAM。现已修复多模型和混合注意力场景。 | [PR #17857](https://github.com/ollama/ollama/pull/17857)
- **日志分块**：管道读取现在可以拆分 llama-server 日志行，在分块边界保留内存核算。 | [PR #19263](https://github.com/ollama/ollama/pull/19263)
- **Token 估算**：用精确的 Anthropic Tokenization API 和本地缓存替换了简单的字符数/4 启发式方法，防止上下文窗口溢出。 | [PR #19265](https://github.com/ollama/ollama/pull/19265)

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | MLX 引擎忽略 `options.stop` — 生成会持续到 EOS 或 `num_predict`，而非在配置的 stop 序列处停止。 | [Issue #19268](https://github.com/ollama/ollama/issues/19268)；修复见 [PR #19267](https://github.com/ollama/ollama/pull/19267) |
| **高** | MLX 导入混合精度（4 位权重 + 每层 8 位覆盖）时 quantized_matmul 形状不匹配。 | [Issue #18789](https://github.com/ollama/ollama/issues/18789) |
| **中** | `OLLAMA_NUM_PARALLEL=1` 似乎无效 — 多个并发会话仍会同时处理，尽管已设置该参数。 | [Issue #19262](https://github.com/ollama/ollama/issues/19262) |
| **中** | Anthropic 兼容端点将 system-role 消息从 `messages` 数组提升到顶部系统块，破坏了 Claude Code 工作流的前缀缓存。 | [Issue #18431](https://github.com/ollama/ollama/issues/18431) |
| **中** | `/compact` 在长 Codex 会话（含截图）时返回 HTTP 413；现已实现重试逻辑，丢弃图片和旧历史项。 | [PR #19266](https://github.com/ollama/ollama/pull/19266) |
| **低** | JSON 工具参数将整数渲染为小数（如 `1` → `1.0`），改变了模型看到的内容。 | [PR #19252](https://github.com/ollama/ollama/pull/19252) |
| **低** | Linux 安装脚本在慢速网络下可能失败，若 `sudo` 凭据缓存在下载中途过期。 | [PR #19243](https://github.com/ollama/ollama/pull/19243) |

---

## 这对应用开发者的意义

1. **新音频能力**：如果你在开发 macOS 应用，现在可以直接通过 `/v1/audio/speech` 从 Ollama 流式输出语音，无需额外的 TTS 服务。`ollama run` 也能朗读回复 — 对无障碍或免提工作流很有用。

2. **OpenAI API 兼容性提升**：`max_completion_tokens` 现在按预期工作，`think` 参数可通过 `/v1/chat/completions` 为 Gemma 4 等思考模型禁用。基于 UUID 的响应 ID 也降低了冲突风险，如果你正在记录或以响应为键。

3. **MLX 注意事项**：如果你通过 MLX 引擎在 Apple Silicon 上运行模型，请注意 stop 序列目前会被忽略（修复进行中）。这会影响任何依赖提前终止的工作流。

4. **内存追踪改进**：多模型部署现在应在 `ollama ps` 和调度器核算中看到准确的 VRAM 报告 — 这对共享推理环境中的容量规划很重要。

5. **Token 计数更准确**：如果你正在触及上下文限制，新的 tokenization 桥接应能减少意外溢出，特别是对多模态或复杂提示。

---

*基于 GitHub 数据生成 — 2026-10-25*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM digest into Simplified Chinese. I need to follow all the rules provided:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references verbatim
4. Keep technical identifiers (project names, version tags, etc.) in original form
5. Use natural technical Chinese register

Let me translate this carefully while preserving all the formatting.</think>

# LiteLLM 速报 — 2026-10-25

## 1. 今日要闻

**🔴 严重安全通报：** LiteLLM v1.107.0 已被篡改，已从 PyPI 移除。该恶意版本包含凭证窃取程序（`cook.pth`）和远程代码执行加载器（`sitecustomize`）。所有 Docker 镜像（`latest`、`main-stable`）均已下架。**请勿使用 v1.107.0。** 用户应升级至 v1.106.3 或更高版本。所有近期版本（v1.103.8–v1.106.3）已更换新的 cosign 签名密钥 —— 请使用提交记录 `e82a3c6` 中的密钥进行验证。

**成本/预算相关 bug 占据主导：** 在 Top 30 issues 中，半数涉及成本计算、支出追踪或预算执行问题——包括缓存命中语义、过期支出计数器导致错误的 `BudgetExceededError`，以及流式传输时成本丢失等。

## 2. 发布版本与重大变更

| 版本 | 变更 | 备注 |
|---------|--------|-------|
| [v1.106.3](https://github.com/BerriAI/litellm/releases/tag/v1.106.3) | Cosign 密钥轮换 | 新签名密钥来自 `e82a3c6` |
| [v1.105.4](https://github.com/BerriAI/litellm/releases/tag/v1.105.4) | Cosign 密钥轮换 | 同上 |
| [v1.104.6](https://github.com/BerriAI/litellm/releases/tag/v1.104.6) | Cosign 密钥轮换 | 同上 |
| [v1.103.8](https://github.com/BerriAI/litellm/releases/tag/v1.103.8) | Cosign 密钥轮换 | 同上 |

⚠️ **迁移提示：** 如使用 cosign 验证 Docker 镜像，请更新信任配置以使用新密钥。新密钥对应提交 `e82a3c646908ba0a6ee0beddc4310d7a6cac4065`。

## 3. 新模型与硬件支持

- **Cerebras Llama 3.1 连字符别名** — 在价格表中新增 `cerebras/llama-3.1-8b` 和 `cerebras/llama-3.1-70b`，上下文窗口 128k（[#48178](https://github.com/BerriAI/litellm/pull/48178)、[#48158](https://github.com/BerriAI/litellm/pull/48158)）
- **NVIDIA Nemotron 3.5 Super VL** — W&B CoreWeave Forge 端点定价更新（[#48264](https://github.com/BerriAI/litellm/pull/48264)）
- **OpenAI Batch/Ultrafast 12 小时缓存** — 支持新的 12 小时提示缓存写入费率（[#48259](https://github.com/BerriAI/litellm/pull/48259)）
- **Bedrock Nova 2 Lite** — 修复无效的 `apac.geo` 推理 ID，现使用 `jp`（[#33583](https://github.com/BerriAI/litellm/pull/33583)）

## 4. 性能与优化

过去 24 小时内无重大性能相关合并。当前活跃的 PR 队列主要聚焦于正确性修复，而非吞吐量/延迟优化。

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **严重** | [#47826](https://github.com/BerriAI/litellm/issues/47826) — v1.107.0 包含凭证窃取程序 + RCE 载荷 | **OPEN** | — |
| **高** | [#8842](https://github.com/BerriAI/litellm/issues/8842) — Router 异步完成未触发 CustomLogger 回调 | [CLOSED](https://github.com/BerriAI/litellm/issues/8842) | — |
| **高** | [#26672](https://github.com/BerriAI/litellm/issues/26672) — v1.82.3 中预算执行被绕过（key/user max_budget） | **OPEN** | — |
| **高** | [#27735](https://github.com/BerriAI/litellm/issues/27735) — Virtual key BudgetExceededError 使用过期支出数据 | **OPEN** | — |
| **中** | [#16021](https://github.com/BerriAI/litellm/issues/16021) — OpenRouter 成本信息在流式传输中丢失 | [CLOSED](https://github.com/BerriAI/litellm/issues/16021) | — |
| **中** | [#48145](https://github.com/BerriAI/litellm/issues/48145) — JSON 定义的 openai-like 提供商在模型不在目录中时丢失 tools | [#48267](https://github.com/BerriAI/litellm/pull/48267) | OPEN |
| **中** | [#48226](https://github.com/BerriAI/litellm/issues/48226) — 自定义提供商的 OpenAI 别名报 ModelNotMappedError | [#48263](https://github.com/BerriAI/litellm/pull/48263)、[#48262](https://github.com/BerriAI/litellm/pull/48262) | OPEN |
| **中** | [#48147](https://github.com/BerriAI/litellm/issues/48147) — 缺失的 native usage 被报告为零 token / $0 | [#48261](https://github.com/BerriAI/litellm/pull/48261) | OPEN |
| **低** | [#26444](https://github.com/BerriAI/litellm/issues/26444) — Opus 4.7 仍列出已弃用的 `temperature` 参数 | **OPEN** | — |

## 6. 这对应用开发者意味着什么

1. **检查你的 LiteLLM 版本** — 如果使用的是 v1.107.0，请立即升级到 v1.106.3 或更高版本。重新轮换可能在 10 月 21–24 日期间暴露的凭证。

2. **重新验证 Docker 镜像签名** — 更新 cosign 验证以信任新密钥。旧密钥对任何当前版本均不再有效。

3. **预算执行存在已知漏洞** — 多项 issue 报告了虚假的 `BudgetExceededError` 或被绕过的限制，尤其是在虚拟密钥和持续负载情况下。如果你依赖严格的预算上限，建议通过 API 监控支出，并在修复发布前实现自己的防护措施。

4. **流式传输成本追踪不稳定** — 缓存命中、早期断开连接以及某些提供商的响应格式可能导致 $0 账单。这会影响计量部署的计费准确性。

5. **自定义提供商的 Tool 透传** — [#48267](https://github.com/BerriAI/litellm/pull/48267) 中的修复恢复了当模型不在 LiteLLM 目录中时 openai-like 提供商的 tool 定义——这对你在 OpenAI 兼容 API 后部署微调或自定义模型的情况很有帮助。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the Unsloth digest into Chinese, preserving the exact Markdown structure while using natural technical Chinese register. Let me go through the content carefully:

Key points:
1. Preserve all headings, tables, lists, formatting
2. Keep URLs, issue/PR numbers, version tags, file paths, project names in original form
3. Use natural technical Chinese - not literal translation
4. Output ONLY the translation, no preamble or explanation

Let me translate section by section:

Title: # Unsloth 速报 — 2026-10-25

Section 1: Today's Highlights
- Pipeline parallelism and tensor parallelism infrastructure landed
- GGUF model loading issue on Windows from v0.1.910-beta

Section 2: Releases & Breaking Changes
- v0.1.910-beta regression
- Model Hub filter regression

Section 3: New Model & Hardware Support
- Pipeline Parallelism
- Tensor Parallelism v2
- Multi-host scheduling
- AMD gfx1201 ROCm

Section 4: Performance & Optimization
- KV Preemption
- Memory recovery
- Wan video encoding
- GRPO warm-up
- Offline distillation

Section 5: Stability & Regressions
- Critical, High, Medium, Low issues

Section 6: What This Means for Application Developers

Let me translate this properly in technical Chinese register:</think>

# Unsloth 速报 — 2026-10-25

## 1. 今日要闻

重磅并行化基础设施今日提请审查：**Pipeline Parallelism v1**（流水线并行）与 **Tensor Parallelism v2**（张量并行 v2）双管齐下，均已在 PR 中。这两项功能将支持密集型解码器模型跨多 GPU 扩展，实现分片加载与数据并行训练。Studio 侧方面，Windows 用户在 GGUF 模型加载时遭遇阻塞性问题——v0.1.910-beta 更新引入了错误的"端口占用"检查，导致 llama-server 被误杀；同时该版本还造成了 Windows 下模型加载失败的回归问题。

## 2. 发布与重大变更

| 变更 | 详情 | 链接 |
|------|------|------|
| **v0.1.910-beta 回归** | Windows 桌面应用更新后 GGUF 模型加载失败 — 误判"子进程未监听"导致 llama-server 被终止 | [#15022](https://github.com/unslothai/unsloth/issues/15022)、[#15142](https://github.com/unslothai/unsloth/issues/15142) |
| **模型中心筛选回归** | Hub 筛选结果不正确；近期引入的回归问题 | [#14221](https://github.com/unslothai/unsloth/issues/14221) — *已修复* |

过去 24 小时无正式版本发布。

## 3. 新模型与硬件支持

| 领域 | 更新 | 详情 | 链接 |
|------|------|------|------|
| **流水线并行** | `apply_pipeline_parallel` 支持密集解码器模型（GPipe、1F1B），基于 `torch.distributed.pipelining` 实现，位于 `unsloth/models/pp_native.py` | [#15175](https://github.com/unslothai/unsloth/pull/15175) |
| **张量并行 v2** | 分片加载 + 数据并行 × 张量并行 + Trainer 集成；支持在 2×16GB GPU 上运行 16 位 8B LoRA | [#15174](https://github.com/unslothai/unsloth/pull/15174) |
| **多主机调度** | 跨多台机器进行推理/训练的功能请求（非仅多 GPU） | [#4858](https://github.com/unslothai/unsloth/issues/4858) |
| **AMD gfx1201 ROCm** | Windows AMD ROCm 在 llama.cpp 更新后启动失败；已修复 | [#14085](https://github.com/unslothai/unsloth/issues/14085) — *已修复* |

## 4. 性能与优化

| 组件 | 工作内容 | 详情 |
|------|----------|------|
| **KV 抢占** | 多并发聊天共享同一 llama-server 缓存（通过 `--preempt-ram`）；Studio 将抢占逻辑交由 llama-server 处理 | [#10301](https://github.com/unslothai/unsloth/pull/10301) |
| **内存恢复** | 在 `--fit-target` 中预留 DSpark/DFlash 辅助进程，Metal OOM 后恢复 | [#14431](https://github.com/unslothai/unsloth/pull/14431) |
| **Wan 视频编码** | 在 model/sequential offload 下流式处理 Wan 编码；缓存每个 prompt 的文本编码 | [#15173](https://github.com/unslothai/unsloth/pull/15173)、[#15166](https://github.com/unslothai/unsloth/pull/15166) — *已合并* |
| **GRPO 预热** | 为无聊天模板的基础模型进行格式预热 | [#13000](https://github.com/unslothai/unsloth/pull/13000) |
| **离线蒸馏** | 功能特性：使用离线的 top-k logprobs 和已部署的教师模型进行蒸馏，无需将教师模型加载到训练内存中 | [#11556](https://github.com/unslothai/unsloth/issues/11556) |

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **严重** | **GGUF 模型在 Windows 上加载失败** — 2026-10-23 更新后，llama-server 因误判端口占用被终止 | [#15022](https://github.com/unslothai/unsloth/issues/15022)、[#15142](https://github.com/unslothai/unsloth/issues/15142) — *待修复* |
| **高** | **长对话（含大量工具调用）卡顿** — 基于 CPU 的对话归档 embedding 阻塞推理数分钟；Stop 按钮无法取消归档 | [#14519](https://github.com/unslothai/unsloth/issues/14519) — *已关闭* |
| **中** | **preserve_thinking 被强制设为 true** — Studio 覆盖用户聊天模板，使 `--no-reasoning-preserve` 失效 | [#15115](https://github.com/unslothai/unsloth/issues/15115) — *待修复* |
| **中** | **Embedding 模型从 API 中消失** — 在 `/embeddings` 中可见，但 GUI 和 `v1/models` 中缺失 | [#15110](https://github.com/unslothai/unsloth/issues/15110) — *待修复* |
| **低** **低** | Thinking 设置未持久化 — 关闭 thinking 并弹出模型后重新加载会再次启用 | [#14743](https://github.com/unslothai/unsloth/issues/14743) — *待修复* |

## 6. 对应用开发者的意义

- **跨 GPU 扩展推理/训练**：两项并行化 PR（#15175、#15174）是本周焦点——合并后可在普通多 GPU 配置上运行 8B+ LoRA 模型，无需手动拆分模型。请关注合并进展；预计 `apply_tensor_parallel` 的调用方式会有 API 变更。
- **Windows GGUF 用户**：v0.1.910-beta 暂不支持 GGUF 加载。建议回滚或等待热修复——端口检查问题属于误报。
- **并发聊天用户**：KV 抢占工作（#10301）意味着 Studio 现可让多个并发聊天共享单一 llama-server KV 缓存，有助于提升多用户/多会话场景的吞吐量。
- **生产部署**：离线蒸馏提案（#11556）值得关注——若需将大型教师模型（如 DeepSeek 级）蒸馏到较小的学生模型，且受限于训练内存，让教师模型保持离线状态可能带来突破性改进。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*