# AI 基础设施日报 2026-11-08

> 生成时间: 2026-11-08 01:45 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate a comprehensive English technical report into Simplified Chinese. Let me carefully translate this following the rules provided:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Use natural technical Chinese register

Let me translate section by section carefully.

The report is about an AI infrastructure ecosystem digest covering vLLM, SGLang, llama.cpp, Ollama, and Unsloth projects. 

Now I'm working through the remaining sections of this report, translating the technical content about hardware acceleration, performance metrics, and deployment considerations while maintaining the original structure and formatting conventions.
</think>


# AI 基础设施生态系统双周简报 — 2026-11-08

---

## 1. 生态系统全景

AI 推理基础设施生态正沿两条轴线同时经历碎片化与整合：硬件后端和部署拓扑。Blackwell（SM120）已先于成熟软件支持提前到来——每一个主流 Serving 引擎都在积极处理 CUDA Graph 修复、 eager 模式性能补丁以及 Blackwell 专用 kernel 路径。与此同时，社区正围绕一组共同关切趋同：KV Offloading 以应对上下文窗口增长、量化以降低异构硬件的显存占用、以及扩散模型加速——因为图/视频生成正从尝鲜用例转向生产级工作负载。vLLM 的主导地位与 SGLang 在 Agent 特定优化上的差异化定位之间的博弈日益显著：SGLang 在投机解码、Ulysses 上下文并行和 RL 训练权重热重载集成方面开辟了独特赛道，这些领域 vLLM 尚未追赶。

---

## 2. 活跃度对比

| 项目 | Issues（开放） | PRs（开放） | Releases（24 h） | 提交活跃度 |
|---------|:---:|:---:|:---:|---|
| **vLLM** | ~51 shown / ~8.8k total | ~20 shown / ~7.5k total | **0** | 4–6 commits（主要是 PR 合并） |
| **SGLang** | ~51 shown / ~5.2k total | ~20 shown / ~2.5k total | **0** | 11+ commits，高迭代频率 |
| **llama.cpp** | ~30 shown / ~9.5k total | ~98 total / ~22k total | **0**（仅 commits） | ~12 commits |
| **Ollama** | ~14 shown / ~3k total | ~14 shown / ~1.5k total | **0** | ~10 commits |
| **Unsloth** | ~21 shown / ~2k total | ~25 shown / ~2k total | **0** | ~12 commits |

**解读：** 五个项目均呈现高提交频率，24 小时内无 Release Tag——生态系统处于持续发布节奏。llama.cpp 和 vLLM 的 Issues/PRs 总量最大，反映其作为基础设施工具的定位。SGLang 和 vLLM 在项目级提交密度上最为活跃，SGLang 的 PR/Issue 比值较高，表明社区更倾向于直接提交代码而非发起功能讨论。Ollama 和 Unsloth 的待处理项规模较小，与其定位一致——它们是单语言（Go / Python）的有主见封装层，而非多后端引擎。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------|:----:|:------:|:---------:|:------:|:-------:|
| **DeepSeek-V4.1 / V3.2**（MoE，MLA） | ⚠️ Blackwell 性能降级 | ✅ DFLASH MLA 草案 + DCP8 indexer | — | — | ✅ Ulysses CP（PR #15882） |
| **GLM-5.3-Flash**（MoE，HiCache） | 🔄 sparse MLA opt-in | ✅ B300 TP4 AgentX tuned | — | — | — |
| **Qwen3.8**（QSA，MoE，FP8） | 🔄 batch-invariant RFC | ✅ gfx950 FP8 fusion，MXFP4 QAT | — | ✅ MLX dense 支持 | — |
| **Kimi-K3.1**（DSpark，SWA） | — | ✅ DCP8 + DFLASH trtllm_mla/cutedsl_mla | — | — | — |
| **FLUX.3**（扩散，CFG） | — | ✅ CFG 并行 copy on 2-GPU | — | — | ✅ modulation projection caching |
| **SANA-Video / HiDream / Anima** | — | ✅ fused RoPE + BCG kernel 降低开销 | — | — | ✅ LTX-2 tiled VAE |
| **Mamba2 / SSM** | 🔄 ReplaySSM Triton 移植 | — | — | — | — |
| **Ripple** | — | — | — | ✅ MLX runner（新增） | — |
| **Nemotron 3.5 / Nemotron dense** | — | — | — | ✅ MLX tokenizer+forward | — |
| **MageVL-Cowork**（VLM） | — | — | ✅ MTMD 支持（新增） | — | — |
| **Intel Arc B-series（Battlemage）** | — | — | ✅ WebGPU GROUP_NORM 已合入 | — | — |
| **AMD gfx950** | ✅ persistent_topk kernel 已合入 | ✅ FP8 RMSNorm+SiLU fusion | — | — | — |

**谁领先：**
- **SGLang 在 Blackwell Agent 调优和扩散模型上领先** —— B300 TP4 AgentX 调优结果（吞吐量提升 26–36%）以及大量扩散专用 kernel PR（SANA-Video、HiDream-O1-Image、Anima、ERNIE-Image、FLUX）无可匹敌。SGLang 还在 DeepSeek 系列模型的 Ulysses 上下文并行上领先。
- **vLLM 在 Blackwell 正确性上领先** —— 尽管性能降级，vLLM 是其他项目对标的参考实现。V2 runner CC 解码移植和 MoE oracle 统一工作是架构层面最重要的进展。
- **llama.cpp 在硬件后端覆盖广度上领先** —— SYCL（Intel）、WebGPU（Apple/Windows）、Vulkan（全平台）、Metal（Apple）和 Hexagon（Qualcomm）均有活跃修复。没有其他项目覆盖这一范围。
- **Unsloth 在训练-微调-推理全链路整合上领先** —— 本次对比中唯一一个端到端覆盖：数据集准备、FSDP2/DDP 微调（含 PPO/RLOO RL）、评估，以及通过 Studio 或 API 一键推理。
- **Ollama 在开发者体验上领先** —— VRAM 按 context 分摊（#18866）和并发 MLX 生成（#19197）是面向用户的体验改进，其他项目尚未优先考虑。

---

## 4. 性能前沿

当前优化工作集中在五个明确的发力点上：

### KV 缓存管理
vLLM 的 KV Offloading 基础设施最为成熟——TP 无感知共享、 PCP engine ID 同步和数据完整性 RFC 均在推进中。SGLang 的 HiCache load-back 正确性修复（现已关闭）表明共享 KV 基础设施已生产成熟到可以提交 Bug 报告的阶段。llama.cpp 的 MoE 缓存 CPU 回退（`--moe-cache-cpu-share`）和 Unsloth 的 SDXL VAE 可扩展分配器代表同一问题的不同解决思路：管理超出显存的内存。

### Kernel 融合与量化
量化生态正按厂商和硬件代际分裂。vLLM 追踪 Marlin→Humming 在各 NVIDIA 架构间的迁移（#65560），而 SGLang 正在为 Linear 层探索 batch-invariant cuBLAS 路径而非 Triton。llama.cpp 合入了 SYCL 融合 ADD/RMS_NORM（+3.4% 吞吐量）和 Q4_1/Q5_1/Q8_0 CPY 精确舍入。Unsloth 通过单个可扩展分配器将 SDXL VAE 显存减少 2.3 GiB。共同趋势：单一日志式量化格式的时代正在终结；每个部署场景现在都从格式、块大小和 kernel 后端的厂商特定矩阵中做选择。

### 投机解码
vLLM 的 ReplaySSM Triton 移植（Mamba2）和 SGLang 的 trtllm_mla/cutedsl_mla DFLASH MLA 草案代表两条不同的投机解码赌注——状态空间模型 vs. 滑动窗口注意力草稿。两者均瞄准 Blackwell 和 MI355 硬件，表明下一代投机解码将是后端专用的，而非架构无关的。

### 分布式 Serving 拓扑
最显著的跨项目趋同出现在长上下文推理的上下文并行上。SGLang 的 DeepSeek V2/V3 MLA Ulysses 实现和 V4 sink attention，以及 Unsloth 的并行实现，表明 Ulysses 正在成为 Megatron 风格 TP 的事实标准。Unsloth 发现的 eval loss 在 Ulysses 下被 cp_size 放大的关键 Bug（#17049）提醒我们：上下文并行在生产中仍然脆弱。

### 前端与桌面性能
Ollama 的 VRAM 按 context 分摊和 Unsloth 的 CSS 重构 + 玻璃模糊渲染修复是本次唯二关注客户端基础设施质量的项目。CSS 工作（规范化 Tailwind 类名、零值去单位化回退）尤其值得注意，因为它面向 WebView2 和 SwiftShader 环境——这是大多数 Windows AI 桌面应用所使用的渲染栈。

---

## 5. 分层定位

| 层级 | 项目 | 主要角色 |
|-------|----------|-------------|
| **高性能 Serving 引擎** | vLLM，SGLang | 批处理 LLM 推理，支持张量并行、投机解码、KV Offloading 和量化。面向云端和本地 GPU 集群。 |
| **本地 / 边缘推理运行时** | llama.cpp | 硬件无关、单文件推理，覆盖 CPU、GPU、Vulkan、Metal、WebGPU、SYCL 和 Hexagon。无需服务端组件。 |
| **本地推理平台 + API** | Ollama | 面向最终用户的部署平台，含模型管理、API 代理和多模型编排。以单节点为主，MLX 支持增长中。 |
| **训练 / 微调 + 推理** | Unsloth | 端到端：从数据集准备、FSDP2/DDP 微调（含 PPO/RLOO RL）、评估到通过 Studio 或 API 一键推理。 |
| **LLM 网关 / 代理** | LiteLLM | 跨 100+ 模型和后端的提供商无关 API 翻译层。提供降级、重试、预算控制和可观测性，适用于多提供商部署。 |
| **推理引擎 + Agent 路由** | SGLang（部分） | 独特定位：同时充当推理引擎和 Agent 编排器，通过原生工具调用、约束解码和 RL 训练权重热重载集成实现。 |

**关键差异化：** 生态系统并非在收敛——而是在分层。vLLM 和 SGLang 在云端 Serving 层的直接竞争，差异化日趋缩小。llama.cpp 占据完全不同的赛道（可移植、无依赖的本地推理），vLLM 和 SGLang 不进行重大范围变更则无法匹配。Ollama 处于 llama.cpp 和 vLLM 之间，以有主见的开发者体验层著称。Unsloth 是唯一一个打通了训练到推理闭环的项目，对于微调而非单纯 Serving 基座模型的组织而言价值独特。LiteLLM 占据栈顶，作为路由和可靠性层，与其他项目基本正交，仅在将 vLLM/SGLang 作为后端目标时产生交集。

---

## 6. 趋势信号

### 1. Blackwell 是优先级，但尚未就绪
每个 Serving 引擎（vLLM、SGLang）都有活跃的 SM120 Issues。CUDA Graph 捕获损坏、eager 模式性能降级，影响 MTP 验证、NVFP4 MoE 和 Mamba 状态管理的关键 Bug 均存在。计划 Blackwell 部署的组织应在下一个 vLLM 次版本发布后预留 6–8 周稳定期。

### 2. 扩散模型正在进入 Serving 层
SGLang 和 Unsloth 本周期均发布了重大扩散模型专项性能工作——SANA-Video、HiDream-O1-Image、Anima 的 RoPE 和 BCG kernel launch 减少 50–100 倍，FLUX.3 的 CFG 并行 copy。这是一个转折：此前 2024–2025 年以纯 LLM 为中心的优化方向正在分化。预期 Serving 引擎将把扩散模型专用调度、CFG 并行和 VAE 分块渲染作为一等公民功能来开发。

### 3. KV Offloading 正在走向生产成熟
vLLM 的 TP 无感知 KV Offloading、SGLang 的 HiCache load-back 修复和 llama.cpp 的 MoE 缓存 CPU 回退的趋同表明，KV Offloading 已走出实验阶段。剩余工作重心在正确性（数据完整性、engine ID 同步）而非可行性。

### 4. 量化格式正在超越 FP8/INT8 增殖
NVFP4、MXFP4 QAT、Marlin→Humming 迁移，以及按架构验证 GPTQ group size 的实践表明，量化格局正按硬件代际分裂。应用开发者应将量化配方视为硬件专用的、版本绑定的——在不同架构之间甚至同一架构代际内部都不可移植。

### 5. 上下文并行正在成为长上下文的标准配置
Ulysses 正在成为 Serving（SGLang）和训练（Unsloth）的首选上下文并行策略。Ulysses 下 eval loss 膨胀 Bug（Unsloth #17049）是一个警示：CP 实现在生产中暴露出正确性缺陷，正是因为采用率正在加速。

### 6. MCP 和工具调用基础设施仍脆弱
Ollama RTX 5090 上的 MCP 工具调用断连、SGLang DeepSeek V3.1 流式函数调用 Bug，以及 Unsloth Qwen 混合模型上的重复全量 prompt 重处理，共同指向一个共同模式：结构化输出 + 多轮工具调用 + 长上下文是当前推理栈中复杂度最高的路径，自动化测试覆盖最少，边界情况最多。

### 7. SYCL / Intel GPU 支持正在提速
llama.cpp 为 Arc A 系列的一站式 flash attention、 SGLang 的 Intel XPU all-to-all EP 后端，以及 Unsloth 在 llama-server 中对 OneAPI SYCL 的功能请求，共同表明 Intel GPU 软件栈正在达到开发者愿意投入的质量阈值。关注其与 AMD ROCm 的生产级平价。

---

**面向 Agent 和应用开发者的建议：** 当前生态系统为 Hopper 和 AMD RDNA3+ 上的纯 LLM 工作负载提供了稳健的生产级 Serving。任何涉及 Blackwell 硬件、扩散模型、长上下文 Ulysses 并行、MoE + Expert 并行、或结构化工具调用多轮连续性的场景，都需要谨慎的版本锁定、积极的 Issue Tracker 监控，以及到 Hopper 或 CPU 后端的降级预案。本生态系统当前最高置信度的部署路径是：**在 H200 上使用 vLLM 或 SGLang、FP8 量化、TP4 或 TP8 张量并行、保守的上下文长度配置**。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate this English technical report about vLLM into Simplified Chinese. I need to:

1. Translate all the text while keeping the Markdown structure exactly
2. Keep URLs, code spans, numbers, dates, issue/PR references verbatim
3. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
4. Use natural technical Chinese - the register of a Chinese developer newsletter
5. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate section by section:

Title: "vLLM Daily Digest — 2026-11-08"
→ "vLLM 每日速报 — 2026-11-08"

Section 1: Today's Highlights
Translation needs to convey the meaning naturally. Let me work through this carefully.

"Blackwell/SM120 hardware continues to dominate the issue queue with critical performance and correctness problems — most notably, DeepSeek-V4.1 on RTX PRO 6000 Blackwell achieves 'extremely low decode throughput' with CUDA graphs unusable, demanding urgent graph capture fixes for SM120. Meanwhile, the community is actively advancing KV offloading infrastructure with RFCs on data integrity and TP-agnostic sharing, plus a draft PR synchronizing engine IDs across PCP ranks for multi-node PP deployments."

→ "Blackwell/SM120 硬件问题持续占据 issue 队列的主导地位，伴随着严重的性能与正确性问题——其中最突出的是，DeepSeek-V4.1 在 RTX PRO 6000 Blackwell 上的 decode 吞吐'几乎为零'，CUDA graphs 无法使用，急需针对 SM120 的图捕获修复。与此同时，社区正积极推进 KV offloading 基础设施，包括数据完整性和 TP 无感知共享的 RFC，以及一个同步 engine ID 跨 PCP rank 的 draft PR，用于多节点 PP 部署。"

Section 2: Releases & Breaking Changes


No releases landed in the last 24 hours. An RFC is proposed to consolidate environment variables from undocumented settings into proper configuration fields, including attention backend, all2all kernel backend, and KV cache layout flags. This represents a breaking change for users currently relying on undocumented environment variables, and the comment period is now open.

For new model and hardware support, SM120 hardware (RTX PRO 6000 Blackwell, B300) has broken CUDA graph capture with severely degraded eager mode performance. ROCm gfx950 support has been merged for persistent_topk kernel, while Intel XPU support for all-to-all EP backend in batched MoE is currently in progress.

Several models and quantization methods are in development or have known issues: Nemotron 3.5 ASR Streaming is being requested as a feature, NVFP4 MoE with CUTLASS backend produces empty completions on SM120, and there's an RFC tracking the migration from Marlin to Humming across NVIDIA architectures. Exllama GPTQ W4A16 has incorrect outputs when group_size isn't divisible by 32.

For performance improvements, a V2 runner decode optimization for NVIDIA Confidential Computing has landed, resolving a UVA incoherence bug that caused corruption under Confidential Computing mode and is now ready and verified.

Additional performance work includes a ROCm CI lock contention fix that adjusts the lock acquisition timeout from immediate failure to waiting up to 10 minutes with 5-second retries on busy DPX devices. Sparse MLA optimization for GLM-5.3 is being refined with index-group workspace reductions and opt-in masked-MHA prefill for quantized KV, targeting TP8 nvfp4_ds_mla serving of the 743B model on B300. Torch.compile improvements refine cudagraph buffer assignment checks to specifically flag _buffers.update operations in Dynamo bytecode, while sampling in log space avoids computing full vocabulary softmax in TopKTopPSampler.forward_native using argmax(logits - log q). There's also an RFC for batch-invariant mode on Hopper and Blackwell proposing cuBLAS as an alternative to Triton.

For infrastructure, ReplaySSM is being ported to Triton to enable FlashInfer-only Mamba2 speculative decoding on MI355. Quantization weight bytes for MFU metrics are being added to provide out-of-tree quantization methods with accurate MFU estimates. Confident Decoding phase 1 for Llama implements entropy-guided conservative backward search using near-final intermediate layers.

Stability issues include critical regressions on SM120: CUDA illegal memory access at the first MTP verify step in v0.33.0 compared to v0.32.0, DeepSeek-V4.1-Flash decode throughput dropping to near-zero with enforce-eager mode, and NVFP4 MoE with CUTLASS backend producing empty completions. Medium severity issues include MiniMAXGemmaRMSNorm unconditionally calling FlashInfer CUDA kernels on Intel GPUs and scheduler livelock with multi-module speculative decoding.

Additional problems involve Mamba align prefix caching on CPU requiring verification, Exllama GPTQ W4A16 producing incorrect outputs when group_size modulo 32 isn't zero across multiple architectures, MRV2 AutoRegressiveSpeculator ignoring dynamic K from the scheduler in the V2 runner, and the /inference/v1/generate endpoint bypassing output-token limits when max_tokens is null. Several fixes are underway including proper FlashInfer one-sided workspace cleanup on teardown to prevent resource leaks, KVConnector Mooncake save offset stalling when remotely existing keys are counted as saved with unavailable local sources, and KV Connector engine ID synchronization across PCP ranks to resolve PP2/PCP8/TP2 multi-node startup failures.

Blackwell SM120 support requires caution since CUDA graph compatibility is broken and eager mode performance degrades significantly. KV offloading is nearing production readiness for multi-engine deployments with TP-agnostic offloading actively seeking reviewers. Quantization configurations need verification before serving—Exllama GPTQ W4A16 produces incorrect outputs when group_size modulo 32 doesn't equal zero. The envvar cleanup RFC will likely impact deployments, so undocumented envvars relying on attention backends or KV cache layouts should be reviewed. RL training integrations are being addressed through a bounded retry mechanism. 3.5 ASR Streaming (`nemotron-3.5-asr-streaming-0.6b`) | 🔄 功能请求 | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **量化** | NVFP4 MoE — CUTLASS 后端在 SM120 上静默返回空补全结果 | ⚠️ 缺陷 | [#51525](https://github.com/vllm-project/vllm/issues/51525) |
| **量化** | Marlin → Humming 迁移追踪（跨 NVIDIA 架构） | 🔄 RFC | [#65560](https://github.com/vllm-project/vllm/issues/65560) |
| **量化** | Exllama GPTQ W4A16 当 `group_size % 32 != 0` 时输出错误 | ⚠️ 缺陷 | [#60608](https://github.com/vllm-project/vllm/issues/60608) |

## 4. 性能与优化

**本周期已合并：**
- [V2 runner decode 优化（面向 NVIDIA 机密计算）](https://github.com/vllm-project/vllm/pull/59981) — 将 CC decode 优化移植到 V2 GPU model runner；修复了 CC 下导致数据损坏的 UVA 不一致 bug。已打 `ready`、`verified` 标签。
- [ROCm CI 锁竞争修复](https://github.com/vllm-project/vllm/pull/66189) — `_acquire_dpx_lock` 在 DPX 设备繁忙时改为等待最多 10 分钟（每 5 秒重试一次），而非直接失败。

**正在 review / RFC 阶段：**
- [性能] [Sparse MLA][GLM-5.3](https://github.com/vllm-

project/vllm/pull/65403) — 索引组工作区精简 + 量化 KV 的可选 masked-MHA prefill；目标是 B300 上 TP8 `nvfp4_ds_mla` Serving 743B 模型。
- [torch.compile] cudagraph buffer 赋值检查收紧为仅检测 Dynamo bytecode 中的 `_buffers.update` 操作（[#65446](https://github.com/vllm-project/vllm/pull/65446)）。
- [性能] [对数空间采样](https://github.com/vllm-project/vllm/pull/51526) — 在 `TopKTopPSampler.forward_native` 中跳过全词表 softmax，改用 `argmax(logits - log q)`。
- [Hopper/Blackwell 批量不变模式](https://github.com/vllm-project/vllm/issues/65569) — RFC 提议在 cuBLAS 已是批量不变的 Linear 层使用 cuBLAS 路径替代 Triton。

**基础设施工作：**
- [Triton 后端上的 ReplaySSM](https://github.com/vllm-project/vllm/pull/66318) — 将仅支持 FlashInfer 的 Mamba2 推测解码移植到 Triton，以支持 MI355。
- [用于 MFU 度量的量化 weight bytes](https://github.com/vllm-project/vllm/pull/65143) — 新增 `QuantizationConfig.get_weight_byte_size()`，使第三方量化方法能获得准确的 MFU 估算值。
- [Llama 置信解码第一阶段](https://github.com/vllm-project/vllm/pull/48083)（已关闭）—

利用接近最终层进行熵引导的保守反向搜索。

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 硬件 | 备注 |
|----------|-------|----------|-------|
| 🔴 Critical | v0.33.0 中首次 MTP 验证步骤时 CUDA 非法内存访问（相比 v0.32.0 退化） | SM120 | [#65139](https://github.com/vllm-project/vllm/issues/65139) |
| 🔴 Critical | DeepSeek-V4.1-Flash 在 SM120 上启用 `--enforce-eager` 时 decode 吞吐接近零 | SM120 | [#56892](https://github.com/vllm-project/vllm/issues/56892) |
| 🔴 Critical | NVFP4 MoE + CUTLASS 后端在 SM120 上产生空补全 | SM120 | [#51525](https://github.com/vllm-project/vllm/issues/51525) |
| 🟡 High | MiniMAXGemmaRMSNorm 无条件调用 FlashInfer CUDA kernel | Intel GPU | [#51200](https://github.com/vllm-project/vllm/issues/51200) |
| 🟡 High | 多模块 MTP + Mamba 对齐的调度器活锁 | CPU（复现） | [#61762](https://github.com/vllm-project/vllm/issues/61762) |
| 🟡 High | Exllama GPTQ W4A16 当 `group_size % 32 != 0` 时静默产生错误输出 | SM120、gfx1100 | [#60608](https://github.com/vllm-project/vllm/issues/60608) |
| 🟠 Medium | MRV2 AutoRegressiveSpeculator 忽略调度器的动态 K 值 | V2 runner | [#51510](https://github.com/vllm-project/vllm/issues/51510) |
| 🟠 Medium | `/inference/v1/generate` 传入 `"max_tokens": null` 时绕过输出 token 上限 | API | [#65592](https://github.com/vllm-project/vllm/issues/65592) |

**正在修复的问题：**
- [释放 FlashInfer 单侧工作区以防止 EP 通信器销毁时的资源泄漏](https://github.com/vllm-project/vllm/pull/63874)
- [KVConnector Mooncake 保存偏移卡顿修复：本地源不可用时，将远程已存在的 key 计入已保存状态](https://github.com/vllm-project/vllm/pull/64945)
- [KV Connector engine ID 在 PCP ranks 间同步，解决 PP2/PCP8/TP2 多节点启动失败](https://github.com/vllm-project/vllm/pull/62916)

## 6. 对应用开发者的影响

1. **Blackwell (SM120) 用户请谨慎行事。** CUDA graph 支持目前基本不可用，eager 模式性能也严重下降。如果现在需要使用 Blackwell，建议启用 `--enforce-eager` 并密切关注吞吐变化。请关注 [#56892](https://github.com/vllm-project/vllm/issues/56892) 了解最新进展。

2. **KV offloading 正在接近多引擎部署的生产就绪状态。** TP-agnostic KV offloading 追踪（[#61886](https://github.com/vllm-project/vllm/issues/61886)）正在积极为相关 PR 寻找 reviewer。如果你在运行异构 TP 部署，现在是参与进来的好时机。

3. **部署前请验证量化配置。** 当 `group_size % 32 != 0` 时，Exllama GPTQ W4A16 会静默产生错误输出（[#60608](https://github.com/vllm-project/vllm/issues/60608)）。在生产环境 serving 前请检查你的量化配方。

4. **envvar 清理 RFC（[#25700](https://github.com/vllm-project/vllm/issues/25700)）很可能会影响你的部署。** 如果你依赖非公开的 envvar 来配置 attention backend 或 KV cache layout，请参与讨论以确保迁移路径存在。

5. **对于 RL 训练集成**，有界可重试的 NCCL weight 更新 RFC（[#64374](https://github.com/vllm-project/vllm/issues/64374)）解决了训练器/worker 失步导致的永久死锁风险。如果你的训练流程有相关依赖，请发表评论。

6. **Intel GPU 用户：请暂时避开 MiniMax-M3**，直到 [#51200](https://github.com/vllm-project/vllm/issues/51200) 修复。`MiniMAXGemmaRMSNorm` 目前无条件调用 CUDA kernel。

---

*数据来源：vLLM GitHub · 2026-11-08 · v0.33.0 (tag 3a4d82f5)*</think>



</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the entire English technical digest into Simplified Chinese. I need to:

1. Translate all the text content while keeping the exact Markdown structure
2. Preserve all URLs, issue/PR numbers, code spans, etc.
3. Use natural technical Chinese register
4. Output only the translation, no preamble or fences

Let me go through this carefully, translating section by section.

**Title**: SGLang Digest — 2026-11-08
→ SGLang 技术速报 — 2026-11-08

**Section 1**: Today's Highlights
→ 今日要点

The content talks about SGLang activity around diffusion model optimization and Blackwell architecture support. Multiple performance PRs landed this cycle targeting SANA-Video, Anima, HiDream-O1-Image, and ERNIE-Image.

Let me translate this properly in natural technical Chinese.

**Section 2**: Releases & Breaking Changes
→ 版本与破坏性变更

"No releases" → "过去 24 小时内无新版本发布"

**Section 3**: New Model & Hardware Support
→ 新模型与硬件支持

**Section 4**: Performance & Optimization
→ 性能与优化

**Section 5**: Stability & Regressions
→ 稳定性与回归问题

**Section 6**: What This Means for Application Developers
→ 对应用开发者的影响

Let me be careful with technical terms:
- throughput → 吞吐/吞吐量
- kernel launches → 内核启动次数
- latency → 延迟
- Blackwell → Blackwell（保持英文）
- GB300/B300 → GB300/B300
- diffusion models → 扩散模型
- speculative decoding → 投机解码
- CUDA graph → CUDA Graph


- grammar-constrained → 语法约束
- unified memory → 统一内存
- tensor parallelism → 张量并行
- MoE / expert parallelism → MoE / 专家并行

I need to maintain the exact table structure and formatting. Let me proceed with the full translation.
</think>


# SGLang 技术速报 — 2026-11-08

## 1. 今日要点

本周期 SGLang 在扩散模型优化和 Blackwell 架构支持方面活动频繁。多个性能优化 PR 在本轮落地，涵盖 SANA-Video、Anima、HiDream-O1-Image 和 ERNIE-Image，累计减少了内核启动次数并提升了 GB300/B300 硬件上的吞吐量。多个正确性 bug 也得到修复——包括 DeepSeek V3.1 流式函数调用、FLUX.3 CFG rank 不一致问题以及 MambaPool CUDA OOM——同时一份新的 RFC 提议为 Apple Silicon serving 构建一条 Torch 主导的 SRT 路径。

---

## 2. 版本与破坏性变更

过去 24 小时内**无新版本发布**。

---

## 3. 新模型与硬件支持

| 项目 | 描述 | 链接 |
|------|------|------|
| **DFLASH MLA Drafts** | 在 `trtllm_mla` 和 `cutedsl_mla` 后端上支持滑动窗口 MLA drafts，用于 Kimi-K3.1 DFlash2 SWA 投机解码 | [#49110](https://github.com/sgl-project/sglang/pull/49110) |
| **GLM-5.3-Flash on B300** | B300 TP4 AgentX 工作负载（C64）新增调优结果，GLM-5.3-Flash 总吞吐提升 **+26.3%**，输出吞吐提升 **+35.6%** | [#49071](https://github.com/sgl-project/sglang/pull/49071) |
| **Apple Silicon 重构 RFC** | 提议构建 Torch 主导的 SRT 路径，包含导出的完整 MLX 模型分区；实现 PR #36164 | [#32321](https://github.com/sgl-project/sglang/issues/32321) |
| **QSA 缓存分片** | 新增对 Qwen3.8 混合模型的缓存分片支持（QSA 原始 K/V 历史 + 压缩缓存） | [#43527](https://github.com/sgl-project/sglang/pull/43527) |

---

## 4. 性能与优化

### 内核与吞吐改进（已合并）

| PR | 领域 | 效果 |
|----|------|------|
| [#49110](https://github.com/sgl-project/sglang/pull/49110) | **DFLASH MLA on trtllm_mla/cutedsl_mla** | 在 Kimi-K3.1 DCP 下启用 SWA drafts |
| [#49071](https://github.com/sgl-project/sglang/pull/49071) | **GLM-5.3-Flash / B300 TP4 AgentX** | **+26.3%** 总吞吐，**+35.6%** 输出吞吐 |
| [#48442](https://github.com/sgl-project/sglang/pull/48442) | **SANA-Video RoPE on SM103** | 通过 FP64→BF16 融合核，延迟降低 **8.11%** |
| [#48394](https://github.com/sgl-project/sglang/pull/48394) | **Anima 门控残差（BCG）** | 单次 50 步 CFG 请求**减少 8,400 次**内核启动 |
| [#48383](https://github.com/sgl-project/sglang/pull/48383) | **HiDream-O1-Image RoPE** | 内核启动次数从 57,600 降至 7,200（**−50,400**） |
| [#48218](https://github.com/sgl-project/sglang/pull/48218) | **ERNIE-Image 序列并行** | 启用 image-prefix 分片 + Ulysses2 |
| [#48122](https://github.com/sgl-project/sglang/pull/48122) | **MiniMax-H3 参考帧/关键帧缓存** | 消除每请求冗余的图像编码计算 |
| [#48043](https://github.com/sgl-project/sglang/pull/48043) | **AMD gfx950 FP8 RMSNorm+SiLU 融合** | 为 Qwen3 提供 1×128 FP8 输入量化融合路径 |
| [#47908](https://github.com/sgl-project/sglang/pull/47908) | **AMD MXFP4 QAT 模拟量化 scale 布局** | 匹配 aiter 列优先布局以确保 ROCm 正确性 |
| [#45891](https://github.com/sgl-project/sglang/pull/45891) | **DSA 打包 prefill top-k on CUDA** | CUDA 加速 top-k，降低 GB300/GLM-5.x/DeepSeek-V3.2 prefill 开销 |
| [#48895](https://github.com/sgl-project/sglang/pull/48895) | **DCP8 decode indexer top-k** | 为 Kimi-K3.1 提供融合的 DCP8 decode indexer |

### 进行中的性能问题

| Issue | 描述 | 硬件 |
|-------|------|------|
| [#33422](https://github.com/sgl-project/sglang/issues/33422) | DeepSeek-V4 prefill 吞吐约 2–7K tok/s，报告值为 12.5K（vLLM/marlin 基线） | SM120（4× RTX PRO 6000, TP=4） |
| [#47734](https://github.com/sgl-project/sglang/issues/47734) | FA3 为 H200 上 hdim=128 非因果配置选择 `MimaPV_is_RS=false`；比 flash-attn 慢 1.5–3% | H200 |

---

## 5. 稳定性与回归问题

### 高严重级别

| Issue | 描述 | 状态 |
|-------|------|------|
| [#26340](https://github.com/sgl-project/sglang/issues/26340) | **CUDA 核心转储追踪器** — CI 自动收集的核心转储事件（359 条评论） | Open |
| [#35241](https://github.com/sgl-project/sglang/issues/35241) | **Generation 健康检查扰动 DP 路由状态**，导致长 prefill 吞吐崩溃 | **已修复** |
| [#36941](https://github.com/sgl-project/sglang/issues/36941) | **长 prefill（>40k tokens）耗尽 GB10 统一内存**，约 54–62k tokens 时静默杀死 worker rank | Open |
| [#41449](https://github.com/sgl-project/sglang/issues/41449) | **DSpark + TP + 语法约束请求死锁所有 rank**；GPU 在集合通信中原地空转 | Open |
| [#48593](https://github.com/sgl-project/sglang/issues/48593) | **CUDA Graph 捕获失败** for hybrid linear attention models（`IndexError` in `HybridLinearAttnBackend._replay_metadata`） | Open |

### 中等严重级别（已修复/合并的正确性 bug）

| PR/Issue | 描述 | 状态 |
|----------|------|------|
| [#49107](https://github.com/sgl-project/sglang/pull/49107) | **DeepSeek V3.1 流式函数调用** — delta 分割 bug 导致参数丢失 | Open PR |
| [#46430](https://github.com/sgl-project/sglang/pull/46430) | **FLUX.3 CFG rank 不一致** — TP/SP ranks 独立选择 packed vs sequential CFG，导致挂起 | **已修复** |
| [#47916](https://github.com/sgl-project/sglang/issues/47916) | **MambaPool.copy_from CUDA OOM** — 并行准入突发时将所有时间状态收集到一个临时张量中 | **已关闭** |
| [#38031](https://github.com/sgl-project/sglang/issues/38031) | **GLM-5.3-Flash HiCache 回填损坏生成结果** — 工具调用丢失，退化为重复循环 | **已关闭** |
| [#40320](https://github.com/sgl-project/sglang/issues/40320) | **FlashInfer 自动调优缓存每次启动时被丢弃** EP>1 时 | Open |
| [#47509](https://github.com/sgl-project/sglang/issues/47509) | **RustServer 向其他节点通告 loopback/不可路由地址** | Open |

### CI/基础设施

| Issue | 描述 |
|-------|------|
| [#42752](https://github.com/sgl-project/sglang/issues/42752) | PR Test Base/Extra 运行中的不稳定测试和 CI 基础设施故障 |
| [#48311](https://github.com/sgl-project/sglang/issues/48311) | Diffusion 性能检查结果取决于任务落在哪个 runner；重试无法解决宿主机过慢的问题 |

---

## 6. 对应用开发者的影响

1. **Blackwell 上的扩散模型工作负载显著加速。** 如果你运行 SANA-Video、Anima、HiDream-O1-Image 或 ERNIE-Image，内核启动次数减少（最多 50%）直接转化为 GB300/B300 上的更低延迟和更高吞吐。

2. **GLM-5.3-Flash 上的 AgentX 工作负载受益于调优。** 新的 B300 TP4 配置为长上下文 agent 流量带来 26–36% 的吞吐提升；考虑更新你的部署配置。

3. **避免在 GB10 上使用超长 prefill（>40k tokens）。** 统一内存耗尽可能静默杀死 worker 而无回溯。如果预期有长上下文输入，考虑分块 prefill 或能降低单卡内存压力的 TP 配置。

4. **DSpark + TP 上的语法约束解码不稳定。** 在 [#41449](https://github.com/sgl-project/sglang/issues/41449) 解决之前，不要混用结构化输出（JSON schema、regex）与 DSpark + 张量并行。

5. **DeepSeek V3.1 工具调用用户：请谨慎测试流式场景。** [#49107](https://github.com/sgl-project/sglang/pull/49107) 中的修复解决了一个 bug——快速多轮调用流中参数会丢失；在即将发布的补丁中验证行为。

6. **MoE 部署且启用了专家并行时：预期冷启动较长。** 当 EP > 1 时 FlashInfer 自动调优缓存在每次启动时重建（[#40320](https://github.com/sgl-project/sglang/issues/40320)）；如果冷启动延迟敏感，考虑缓存自动调优结果。

---

*数据来源：[github.com/sgl-project/sglang](https://github.com/sgl-project/sglang) 2026-11-08 活动记录。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly
3. Keep URLs, links, code spans, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Use natural technical Chinese, in the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the technical accuracy and natural Chinese flow.

Key terms to consider:
- llama.cpp - keep as-is
- backend - 后端
- VRAM - VRAM
- CPY - CPY
- SYCL - SYCL
- MoE - MoE (or 混合专家模型)
- MTMD - MTMD
- KV cache - KV cache
- matmul - 矩阵乘法
- Flash Attention - Flash Attention
- Vulkan - Vulkan
- Metal - Metal
- CPU - CPU
- GPU - GPU
- iGPU - iGPU
- SSE - SSE
- TCP - TCP
- RPC - RPC
- RAG - RAG

Let me translate section by section:

# llama.cpp Digest — 2026-11-08

## 今日要闻
Past 24 hours saw -> 过去 24 小时

Key terms:
- commits -> 提交
- issues -> issue / 问题
- pull requests -> PR
- breaking changes -> 重大变更
- releases -> 发布

Let me write the full translation now.

The report has several tables, headings, and structured content. I need to preserve all formatting while translating the text naturally.

Let me go through it:

# llama.cpp 动态 — 2026-11-08

## 今日要闻


过去 24 小时内，团队在多个后端实现中进行了持续优化。SYCL 相关的修复解决了量化张量运算中的精度问题和显存溢出问题。MTMD（多令牌多扩散）子系统在两个提交中进行了第二次重大更新，新增了对 MageVL-Cowork 模型的支持，并将 log-mel 计算移入计算图以实现更好的调度。值得注意的是，一个新的 issue 报告了 llama-server 在 SSE 流式响应后尽管发送了 Keep-Alive 头，但仍会过早关闭 TCP 连接。

The SYCL backend shows significant precision and memory management improvements. Key advancements include exact rounding fixes for quantized tensor operations, VRAM buffer allocation strategies, Hexagon architecture parameter cleanup, and MTMD model support enhancements.

Fused operations on SYCL platforms demonstrate a 3.4% performance gain, with CPU backend introducing F32 source tensor optimizations. The development continues expanding hardware support across Intel Arc and AMD platforms while addressing critical Vulkan memory stability challenges.

For Metal, a GROUP_NORM fix is implemented. MTMD refactoring removes unnecessary dependencies, specifically the clip.h library, with complementary token management improvements. Server-side logging is being downgraded to provide more granular debugging capabilities through trace-level insights.

Hexagon library integration is being enhanced with automatic loading mechanisms, while SYCL continues advancing through precise rounding and vectorization techniques, targeting specific hardware configurations like Intel Arc A-series at 64-dimensional head representations.

Key areas of focus include CPU backend optimizations, SYCL performance improvements, and addressing potential Vulkan stability challenges on newer graphics architectures. The development trajectory suggests incremental refinements across computational backends, with particular attention to hardware-specific tuning and kernel refinements.

Preliminary recommendations emphasize careful configuration for Intel Arc B-series users, particularly around cooperative matrix management. Developers are advised to test new multi-threaded model configurations, monitor SYCL performance on Intel discrete GPUs, and explore server slot visit ordering improvements.

The next development phase appears centered on expanding multi-expert model support, with potential performance and flexibility enhancements across different computational architectures.
</think>


# llama.cpp 动态 — 2026-11-08

## 今日要闻

过去 24 小时，团队在多个后端实现上持续深耕。SYCL 修复了两项关键问题：解决了量化张量运算中的精度问题，以及修复了 VRAM 过度分配导致的崩溃。MTMD（多 Token 多扩散）子系统在两个提交中完成了第二轮重大更新，新增对 MageVL-Cowork 模型的支持，并将 log-mel 计算移入计算图以获得更好的调度效率。一个值得关注的新 issue 报告了 llama-server 在 SSE 流式响应结束后，尽管声明了 Keep-Alive 头，仍会过早关闭 TCP 连接。

---

## 发布与重大变更

| Commit | 变更内容 | 备注 |
|--------|---------|------|
| [b12196](https://github.com/ggml-org/llama.cpp/commit/b12196) | SYCL: CPY 到 Q4_1、Q5_1、Q8_0 的精确舍入 | 修复偶发测试失败；关闭 [#31140](https://github.com/ggml-org/llama.cpp/issues/31140) |
| [b12195](https://github.com/ggml-org/llama.cpp/commit/b12195) | SYCL: 拒绝超过显存的设备缓冲区分配 | 临时补丁，防止大模型加载时内核崩溃 |
| [b12191](https://github.com/ggml-org/llama.cpp/commit/b12191) | MoE cache: 未命中 expert 回退到 CPU | 新增 `--moe-cache-cpu-share F` 参数，含调优脚本 |
| [#31864](https://github.com/ggml-org/llama.cpp/pull/31864) | MTMD: 对所有动态分辨率投影器应用 `--image-min/max-tokens` | 修复 [#31131](https://github.com/ggml-org/llama.cpp/issues/31131) |

本时段未发布版本标签。所有变更已合入 master，将在下次发版时一同发布。

---

## 新模型与硬件支持

- **MageVL-Cowork** — MTMD 现已支持该视觉-语言模型，rope 频率在 clip 模型层级维护，而非逐层设置。
- **Hexagon / HTP** — 清理了 `n_hvx` 和 `n_threads` 配置与目标架构的绑定，并支持通过 `build.py` 启用 `HTP_DEBUG`。
- **Intel Arc A 系列 (Alchemist)** — SYCL Flash Attention 现对 `head_dim=64` 模型（Qwen2/Qwen2.5 系列）路由至 oneDNN 融合 SDPA 路径，绕过较慢的 TILE kernel。
- **Intel Arc B 系列 (Battlemage)** — WebGPU group norm kernel 已合入；合作矩阵（cooperative matrices）在这些 GPU 上的 Vulkan 问题仍在调查中（见稳定性一节）。

---

## 性能与优化

| PR | 领域 | 影响 |
|----|------|------|
| [#31753](https://github.com/ggml-org/llama.cpp/pull/31753) | SYCL: 融合 ADD/RMS_NORM/MUL + RMS norm 向量化 | Qwen3.8-27B Q3_K_P 吞吐量 **+3.4%**（tg128: 13.09 → 13.53 t/s） |
| [#31854](https://github.com/ggml-org/llama.cpp/pull/31854) | CPU backend: F16 矩阵乘法使用 F32 src1 | 切换默认计算路径，避免 F16 中间精度损失 |
| [#31859](https://github.com/ggml-org/llama.cpp/pull/31859) | Server: 代理日志级别降为 trace | 减少 `--models` 多实例模式下的日志噪音 |
| [#31519](https://github.com/ggml-org/llama.cpp/pull/31519) | Batched-bench: KV cache 预热基准测试 | 支持以预填充 cache 测量真实吞吐量 |
| [#30156](https://github.com/ggml-org/llama.cpp/pull/30156) | SYCL: 设备端 MoE 调度器 | 保持 GPU 图完整性，支持绕过 CPU 侧调度器 |

Meteor Lake iGPU (`mtl-m`) 的 SYCL AOT 编译仍有问题，因不支持 `dpas.nosrc0` intrinsic（[#31033](https://github.com/ggml-org/llama.cpp/issues/31033)）。

---

## 稳定性与回归

### 严重（正在影响生产环境）

1. **Vulkan 输出异常 — Intel Arc B 系列**  
   [#31828](https://github.com/ggml-org/llama.cpp/issues/31828) — 合作矩阵 workaround 无法解决 Arc Pro B65（32 GB）上长上下文/RAG 提示的输出异常。  
   相关：[#31560](https://github.com/ggml-org/llama.cpp/issues/31560) — Arc Pro B70 上 Q8_0/F16 结果非确定性。

2. **SSE 连接提前关闭**  
   [#31863](https://github.com/ggml-org/llama.cpp/issues/31863) — llama-server 在流式响应后关闭 TCP 连接，尽管声明了 `Keep-Alive`。已在 b11977 和 b12182 上 macOS arm64 环境复现。

3. **双 RPC 后端加载模型时挂起**  
   [#31847](https://github.com/ggml-org/llama.cpp/issues/31847) — 约 19 GB 的模型跨两个 RPC 后端加载时无限挂起；单后端加载正常。

### 中等（正确性或内存相关）

4. **BF16 精度损失**  
   [#31842](https://github.com/ggml-org/llama.cpp/issues/31842) — `ggml_vec_dot_bf16` 中的冗余类型转换导致精度下降和性能损耗。

5. **CPU sampling 缓冲区抖动**  
   [#31840](https://github.com/ggml-org/llama.cpp/issues/31840) — 每完成一次请求后都会重新分配 pinned host compute 缓冲区，增加长时运行服务器的开销。

6. **Metal GROUP_NORM batch > 1 时的 bug**  
   [b12189](https://github.com/ggml-org/llama.cpp/commit/b12189) 已修复 — kernel 忽略了批次维度 `ne03`。

### 低优先级 / 长期未解决

- FreeBSD Vulkan 编译错误（[#31541](https://github.com/ggml-org/llama.cpp/issues/31541)）
- Metal MTP draft 内存膨胀：M4 Max 上 96k token 会话约占用 15 GB host 内存（[#30174](https://github.com/ggml-org/llama.cpp/issues/30174)）
- SYCL SWIGLU_OAI 在 f16 张量上 abort（[#30855](https://github.com/ggml-org/llama.cpp/issues/30855)）

---

## 对应用开发者的建议

1. **Intel Arc B 系列用户应禁用合作矩阵** — 通过 `GGML_VK_DISABLE_COOPMAT=1` 避免长上下文或 RAG 工作负载中的输出异常，但根据最新报告这可能无法完全解决问题。在 Vulkan 驱动问题解决前，生产环境建议使用 CUDA 或 CPU 后端。

2. **MTMD 用户**应在使用动态分辨率投影器时测试新的 `--image-min/max-tokens` 强制执行策略；此前这些参数会被静默忽略。

3. **Intel 独立显卡上的 SYCL 用户**在 [#31575](https://github.com/ggml-org/llama.cpp/pull/31575) 合入后将看到 Qwen2/2.5 模型的注意力性能提升。如需为 Meteor Lake iGPU 构建 AOT 版本，请留意 [#31033](https://github.com/ggml-org/llama.cpp/issues/31033) 中的已知问题。

4. **多槽位 server 部署**受益于父子槽位访问顺序修复（[b12188](https://github.com/ggml-org/llama.cpp/commit/b12188)），提示前缀共享行为得到改善。

5. **MoE 模型操作者**现在可以通过 `--moe-cache-cpu-share` 将部分 cache miss 卸载到 CPU，在大 expert 模型上以带宽换显存余量。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate this technical digest from English to Simplified Chinese. I need to:
1. Translate all the text while maintaining the exact Markdown structure
2. Keep all URLs, issue/PR numbers, version tags, file paths, etc. as-is
3. Use natural technical Chinese suitable for a developer newsletter
4. Output ONLY the translation without any preamble or markdown fences

Let me translate section by section:

Title: "Ollama Digest — 2026-11-08"
→ "Ollama 技术速报 — 2026-11-08"

Section 1: Today's Highlights
- Keep technical terms like VRAM, MLX, Apple Silicon as-is
- Translate the narrative portions naturally

Section 2: Releases & Breaking Changes
- Table structure stays, translate descriptions

Section 3: New Model & Hardware Support
- Table with columns - translate descriptions, keep identifiers

Section 4: Performance & Optimization
- Table structure, technical descriptions

Section 5: Stability & Regressions
- Severity icons (🔴🟡🟢) stay
- Status (OPEN/CLOSED) stays
- Descriptions translated

Section 6: What This Means for Application Developers
- 5 numbered points, translate naturally

Footer: Keep the attribution line

Let me do the translation now:
</think>


# Ollama 技术速报 — 2026-11-08

## 1. 今日要点

Ollama 本日开发重点集中在跨平台 MLX 扩展和 GPU 显存管理两个方面：已合并的 PR 为 Apple Silicon 添加了 Ripple 模型支持，同时新 PR (#18866) 着手解决高显存显卡上的显存计数偏差问题，可能导致上下文窗口溢出。在稳定性方面，AMD Radeon 780M Vulkan 回归问题以及 Windows RTX 5090 工具调用断开问题仍未解决，今日还报告了 `gemma4:12b-it-qat` 元数据中的一个关键拼写错误。

## 2. 版本发布与破坏性变更

| 项目 | 描述 | 链接 |
|------|-------------|------|
| 无新版本发布 | 过去 24 小时内未发布任何版本 | — |

**迁移说明：** 本周期无。

---

## 3. 新模型与硬件支持

| 模型 / 架构 | 后端 | 说明 | PR / Issue |
|---------------------|---------|-------|------------|
| **Ripple**（预览版） | MLX (Apple Silicon) | 添加了渲染器、解析器和导入注册；DFlash 草稿中的逐层 NoPE、融合 MLP 激活、值混合、注意力门控 | [#19592](https://github.com/ollama/ollama/pull/19592) |
| **Dense Nemotron + Luciole** 分词器 | MLX | `NemotronForCausalLM` 前向路径、归一化序列、Split + Metaspace 分词器管道 | [#19567](https://github.com/ollama/ollama/pull/19567) |
| **MLX runner — Windows + CPU** | Windows, CPU | MLX runner 原生 Windows 执行（CPU 后端）；支持文本转语音推理（如 `phonon:en`） | [#19366](https://github.com/ollama/ollama/pull/19366) |
| **DeepSeek3 解析器空白修复** | 全部 | 修剪流式输出中 `</think>` 后的尾随空白，避免双换行 | [#19590](https://github.com/ollama/ollama/pull/19590) |
| **Gemma 4 内容保留** | 全部 | 保留工具调用前助手消息中的文本，而非追加到工具响应之后 | [#19594](https://github.com/ollama/ollama/pull/19594) |

---

## 4. 性能与优化

| 领域 | 变更 | 影响 | PR / Issue |
|------|--------|--------|------------|
| **VRAM 显存统计** | 按上下文计数显存；通过元数据预测 KV cache 大小 | 修复大显存显卡上约 19 GB 的统计偏差；防止大显存 GPU 上的上下文窗口耗尽 | [#18866](https://github.com/ollama/ollama/pull/18866) |
| **MLX 并发生成** | `OLLAMA_NUM_PARALLEL` 现已支持 MLX 模型 | 多个请求共享投影和前馈计算；在高并发下降低首 token 延迟 | [#19197](https://github.com/ollama/ollama/pull/19197) |
| **Benchmark 工具加固** | 未完成运行时以非零退出码失败；截断复用的输出文件 | 可靠的自动化性能回归追踪 | [#19600](https://github.com/ollama/ollama/pull/19600) |
| **Claude Code 路由修复** | 将路由限定在子进程；清除冲突的 provider 选择器 | `ollama launch claude` 不再静默路由到错误的 provider | [#19587](https://github.com/ollama/ollama/pull/19587)（已合并） |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR | 链接 |
|----------|-------|--------|--------|------|
| **🔴 高** | AMD Radeon 780M Vulkan 回归 — Ollama ≥ 0.32.10 下出现 `vulkan: Not enough memory for command submission` | **待处理** | — | [#17748](https://github.com/ollama/ollama/issues/17748) |
| **🔴 高** | Windows RTX 5090 runner 在工具调用期间断开连接（Ollama 0.40.13 下 `/tokenize` 返回 HTTP 500） | **待处理** | — | [#19439](https://github.com/ollama/ollama/issues/19439) |
| **🔴 高** | `gemma4:12b-it-qat` 元数据拼写错误 — `toos` 而非 `tools` | **待处理** | — | [#19596](https://github.com/ollama/ollama/issues/19596) |
| **🟡 中** | `gpt-oss:20b` HTTP 500 "error parsing tool call" — Ollama 拒绝自己模型的工具输出 | **待处理** | — | [#17638](https://github.com/ollama/ollama/issues/17638) |
| **🟡 中** | Anthropic `/v1/messages` 将 `xhigh` 映射为 `high`，导致 Qwen3.8 聊天模板失效 | **待处理** | — | [#17906](https://github.com/ollama/ollama/issues/17906) |
| **🟡 中** | Cloud `/api/chat` 在约 32 MiB 载荷时返回 HTTP 400（未记录的限制） | **待处理** | — | [#19597](https://github.com/ollama/ollama/issues/19597) |
| **🟢 低** | `ollama launch claude` 路由到错误的 provider | **已关闭** | [#19587](https://github.com/ollama/ollama/pull/19587) | — |
| **🟢 低** | `/v1/models` 对空列表返回 `null` 而非 `[]` | **已关闭** | [#19442](https://github.com/ollama/ollama/pull/19442) | — |

---

## 6. 对应用开发者的影响

1. **Windows + MLX 能力差距正在缩小。** Windows CPU 后端 PR (#19366) 使开发者现在可以在 Windows 上运行此前仅 macOS Metal 支持的模型。这拓宽了本地推理的跨平台部署选项。

2. **MLX 并行推理现已可调。** 在 Apple Silicon 上设置 `OLLAMA_NUM_PARALLEL > 1` 将允许更高的并发代理请求吞吐量，不过需注意每个额外请求的显存占用。

3. **显存统计正在收紧。** PR #18866 的修复将使 `ollama ps` 输出在容量规划中更加可信。如果你在大显存 GPU 上遇到原因不明的上下文窗口失败，该修复可能会有所帮助。

4. **工具调用稳定性在 Windows 和 AMD Vulkan 上仍较脆弱。** 依赖函数调用的应用在生产部署前应在 RTX 5090/Windows 和 AMD 780M/Vulkan 上进行充分测试。Gemma 4 拼写错误 (#19596) 将影响任何使用 `gemma4:12b-it-qat` 工具调用的流程。

5. **社区集成持续扩展。** README 新增了两个 CLI 工具 — `ollama-update`（基于摘要的模型同步检查器）和 `wowTerminal`（集成 Ollama 的 Rust/Tauri 终端）— 可能加速 CI/CD 和开发者工作流中的模型管理。

---

*本报告基于 github.com/ollama/ollama 在 2026-11-08 的活动数据生成。*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:
1. Translate all the text content while preserving the Markdown structure
2. Keep all code, URLs, version numbers, issue references, and technical identifiers as-is
3. Use natural, idiomatic Chinese technical language
4. Maintain the same formatting (tables, lists, headings, etc.)

Let me work through this section by section.
</think>


# LiteLLM 速报 — 2026-11-08

## 1. 今日要点

LiteLLM 发布了 v1.110.0-dev.1（集成了 cosign 镜像签名），并修复了大量涉及 Claude、Mistral 和 Bedrock 的 Provider 翻译层 Bug。有两个待处理问题需要重点关注：MCP `tools/list` 在 v1.108.0 升级后对旧版订阅监听器产生了 18–50 秒的延迟回退；Router 的同步 `responses()` 方法完全忽略了 `num_retries` 和 `fallbacks`，导致弹性保障机制悄然失效。

## 2. 版本发布与破坏性变更

| 版本 | 类型 | 说明 |
|---------|------|-------|
| [v1.110.0-dev.1](https://github.com/BerriAI/litellm/releases/tag/v1.110.0-dev.1) | 开发版 | Docker 镜像现已完成 cosign 签名；使用提交 `e82a3c6` 中的公钥进行验签 |
| [v1.108.3](https://github.com/BerriAI/litellm/releases/tag/v1.108.3) | LTS | 当前 LTS 基线版本；拉取 `ghcr.io/berriai/litellm:lts` |

**迁移注意事项：**
- 新的 `total_timeout` / `x-litellm-total-timeout` 请求头（PR [#50496](https://github.com/BerriAI/litellm/pull/50496)）为可选加入，不影响现有行为；现有的 `timeout`、`stream_timeout` 及部署级超时设置保持不变。
- FIPS 模式下，插件会话声明现仅由 FIPS 认证加密模块构造（PR [#50544](https://github.com/BerriAI/litellm/pull/50544)）；基于 HMAC 的旧声明在 `fips_mode` 中已废弃。

## 3. 新模型与硬件支持

| 领域 | 变更 | PR / Issue |
|------|--------|------------|
| **Bedrock S3 数据源** | `/v1/chat/completions`、`/v1/responses`、`/v1/messages` 及 Gemini `generateContent` 现将 `s3://` URI 形式图片、PDF、视频直接转发给 Bedrock Converse，不再返回 500 | [#50577](https://github.com/BerriAI/litellm/pull/50577) |
| **Azure AI Foundry Agents v2** | 基于 `agent_reference` 的 Responses API 集成已作为功能请求结项 | [#25372](https://github.com/BerriAI/litellm/issues/25372) |
| **Web Identity 会话策略** | 异步调用嵌入向量、Bedrock 批处理/文件操作、SageMaker、Polly、S3 向量存储及 OpenSearch 向量库已纳入 AWS OIDC 调用方的 STS 会话策略范围 | [#50592](https://github.com/BerriAI/litellm/pull/50592) |

本日无新增 CUDA/ROCm/Metal 后端或量化格式相关变更。

## 4. 性能与优化

| 类别 | 详情 | 参考 |
|----------|--------|-----------|
| **Router 重试一致性** | 同步 `router.responses()` 现已正确遵循 `num_retries` 和 `fallbacks`（此前总是单次尝试） | [#50599](https://github.com/BerriAI/litellm/pull/50599) |
| **OTel Span 刷新** | SIGTERM 时同步刷新 Span，确保 uvicorn worker 退出前完成遥测上报，避免重启时出现数据空洞 | [#50595](https://github.com/BerriAI/litellm/pull/50595) |
| **类型注解清理** | 在 182 个文件中清除了 1160 个 `basedpyright` `reportAny`/`reportExplicitAny` 错误；无行为变更 | [#50579](https://github.com/BerriAI/litellm/pull/50579) |
| **预算预留（无 DB 模式）** | 当 `custom_auth_run_common_checks` 在无 `database_url` 情况下预留 `max_budget` 支出时，预留现可正确释放，不再悬置至 TTL 过期 | [#45907](https://github.com/BerriAI/litellm/pull/45907) |

⚠️ **回退问题：** MCP `tools/list` 在旧版订阅监听器（发送 `notifications/initialized` 且使用 2026 年前协议的客户端，如 Python `mcp` SDK 的 `ClientSession`，或 Open WebUI）上产生 18–50 秒延迟回退。问题于 v1.108.0 引入。Issue [#50065](https://github.com/BerriAI/litellm/issues/50065) 已提交。

## 5. 稳定性与回退问题

### 严重
| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#50065](https://github.com/BerriAI/litellm/issues/50065) | MCP `tools/list` 在旧协议监听器上阻塞 18–50 秒（v1.108.0 回退） | **待处理** |
| [#34328](https://github.com/BerriAI/litellm/issues/34328) | `unpack_defs` 在递归、高扇入 JSON Schema（`$defs`/`$ref`）上无限挂起；影响 Bedrock 及 Vertex 调用方且无字节预算保护 | **待处理**（长期未处理） |

### 高优先级
| Issue | 描述 | 修复 PR |
|-------|-------------|--------|
| [#49359](https://github.com/BerriAI/litellm/issues/49359) | MCP 工具执行失败时丢失 `is_error` 标记；错误状态未传播至 Anthropic `tool_result` 消息 | — |
| [#49046](https://github.com/BerriAI/litellm/issues/49046) | `chatgpt/` provider 在 `/v1/messages` 上丢弃加密推理内容；破坏 Claude Code 连续性 | — |
| [#50070](https://github.com/BerriAI/litellm/issues/50070) | Vertex Claude `/v1/messages` 在 `system`/`tools` 前发送 `messages`；工具循环轮次产生 Prompt Cache 未命中 | — |
| [#49998](https://github.com/BerriAI/litellm/issues/49998) | `/v1/messages` 对非 `ProxyException` 的上游失败返回 503 "authentication database is temporarily unreachable"；与 `/v1/chat/completions` 行为不一致 | — |

### 中优先级（今日结项）
| Issue | 描述 | 结论 |
|-------|-------------|------------|
| [#49179](https://github.com/BerriAI/litellm/issues/49179) | `tools/list` 请求进行中时执行 `/key/update` 导致预算窗口支出丢失该次调用成本 | 已关闭 |
| [#24498](https://github.com/BerriAI/litellm/issues/24498) | Claude 模型返回 `[System: Empty message content sanitised to satisfy protocol]` | 已关闭 |
| [#47924](https://github.com/BerriAI/litellm/issues/47924) | 在默认开启思考的模型上使用 `reasoning_effort="none"` 未能禁用思考，仅省略思考块 | 已关闭 |
| [#45546](https://github.com/BerriAI/litellm/issues/45546) | Mistral `reasoning_content` 被丢弃而非在回放时作为 `thinking` chunk 发送 | 已关闭 |
| [#49969](https://github.com/BerriAI/litellm/issues/49969) | Bedrock Converse 向非 Anthropic GLM 模型回放了 `reasoningText.signature` → Bad Request | 已关闭 |

## 6. 对应用开发者的影响

1. **如果你通过 LiteLLM 代理使用 MCP**，请注意 v1.108.x 对使用 2026 年前 `notifications/initialized` 协议的客户端（Python `mcp` SDK、Open WebUI）引入了延迟回退。请监控 `tools/list` 是否出现 18–50 秒阻塞。修复补丁尚未合入，请关注 [#50065](https://github.com/BerriAI/litellm/issues/50065)。

2. **如果你在同步代码中使用 `router.responses()`**，该方法此前会静默忽略重试和降级策略。[#50599](https://github.com/BerriAI/litellm/pull/50599) 之后行为已与 `aresponses()` 对齐。如果你的业务依赖故障转移机制，请测试实际表现。

3. **如果你调用 Bedrock 并使用 S3 存储的媒体资源**，通过 `s3://` URI 引用的图片、PDF 和视频输入现可端到端通过 LiteLLM（此前返回 500）。无需修改配置；请将客户端更新为直接使用 `s3://` 路径。

4. **如果你在 FIPS 环境中运行 LiteLLM**，仪表板插件 iframe 登录声明现已兼容 FIPS 合规要求。如需合规认证，请升级至 v1.110.0-dev.1 或更高版本。

5. **如果你使用 `total_timeout`**，新请求头可约束非流式请求的完整端到端延迟。虽然为可选加入，但对于需要比部署级超时更严格 SLA 边界的场景非常有用（PR [#50496](https://github.com/BerriAI/litellm/pull/50496)）。

6. **如果你构建依赖工具连续性的 Agent**（例如 Claude Code、Bedrock/Vertex 上的多轮工具循环），今日批量修复的 Bug 中有多个涉及 `reasoning`/`thinking` 块回放和 Prompt Cache 对齐。请在当前部署拓扑下验证扩展思考状态能否正确保持。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me carefully translate this following all the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, issue references verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

**Title**: Unsloth Digest — 2026-11-08 → Unsloth 每日简报 — 2026-11-08

**Section 1 - Today's Highlights**:
- Three high-impact PRs landed on the Studio side → 三个高影响力的 PR 在 Studio 侧合入
- pre-installed FlashInfer kernels will eliminate the nvcc JIT-compilation tax on every fresh vLLM/SGLang environment's first inference run → 预装的 FlashInfer 内核将消除每次全新 vLLM/SGLang 环境首次推理时的 nvcc JIT 编译开销
- safetensors-only weight resolution closes a class of deserialization risk while recovering a hosted fast path → 仅使用 safetensors 的权重解析封堵了一类反序列化风险，同时恢复了一条托管快速路径


- SDXL VAE VRAM reservation was cut by ~2.3 GiB → SDXL VAE 的显存预留削减了约 2.3 GiB
- correctness regression surfaced on the CPU backend → CPU 后端出现了一个正确性回归
- MoE router auxiliary loss diverges under pipeline parallelism when gradient accumulation > 1 → MoE 路由器辅助 loss 在流水线并行且 gradient accumulation > 1 时出现发散
- eval-loss inflation bug was identified in the Ulysses context-parallel path → 在 Ulysses 上下文并行路径中发现了 eval-loss 膨胀的 bug

**Section 2 - Releases & Breaking Changes**:

今天没有新的标签版本发布，但出现了一些配置和行为的变化。Studio 现在在所有图像、视频和文本编码器的加载路径中拒绝打开 `.pt / .pth / .bin / .ckpt` 容器，而 `.safetensors` 文件有安全回退路径。PPO / RLOO 融合 log-probs 回退逻辑已更新，`fused_head` 现在会在注册任何 torch 全局模块钩子时回退到 TRL 的 logits 路径。

接下来是关于模型和硬件支持的新功能。FlashInfer 预构建内核在 vLLM / SGLang 引擎环境构建时预先安装，`.safetensors` 被强制作为预量化扩散模型的唯一权重容器。对于 GPU 后端，Intel OneAPI SYCL 路径支持 llama-server，允许多 GPU 配置下的 CFG 并行扩散复制，而上下文并行处理方面，Ulysses attention 已支持 DeepSeek V2 / V3 MLA 等模型。

在性能优化方面，FlashInfer top-k/top-p 采样器内核的预安装消除了每次推理运行时的 per-GPU nvcc JIT 编译开销。

现在看 VRAM 优化，SDXL VAE 解码改用单一可扩展分配器而非双缓冲，将预留显存从 ~8.95 GiB 减少约 2.3 GiB；LTX-2 / LTX-2.5 分块 VAE 解码仅在卡上保留当前打开的分块带，降低高分辨率剪辑解码的峰值显存；FLUX.3 扩散的调制头每样本投影一次，Base 重用条件流以减少冗余计算；RAG 摄取的 `_embed_all` 改用全语料库分批处理，性能提升约 48 倍。

FSDP2 分片加载现在支持 `init_lora_weights="orthogonal"` 选项，CPU BF16 AdamW 为每个参数分配独立的 `torch.Generator` 舍入流，前端渲染通过规范 Tailwind 类和 `0` 回退值减少布局抖动。

现在看到稳定性问题方面出现了几个关键缺陷，其中 MoE 路由器辅助 loss 在 CPU 上梯度累积大于 1 时发散是个严重问题，影响所有 MoE 模型的 CPU-only 训练。

评估 loss 在 Ulysses 下被 cp_size 放大了同样的倍数，而 LongRoPE 的动态 RoPE 位置编码在 Ulysses 路径中被截断，这会影响长上下文模型如 Phi-3 系列的上下文并行处理能力。

Windows 11 上的图像生成虽然有 RTX 3060 可用但仍然回退到 CPU 和 RAM，这阻止了 GPU 加速的生成能力，而 DiffusionGemma 在多 GPU 配置下对较长提示词的处理也存在 GGML 断言问题。

Qwen3.8 模型在使用工具后每次都会重新处理完整的上下文窗口，导致多轮工具调用对话产生过度延迟和 token 消耗。数据集检查工具在处理混合格式行时会报告错误的截断信息，使得被静默截断的训练行可能通过验证。

还有一个低严重性的问题涉及 Windows 上 Git Bash 的空设备处理...

现在转向桌面和 Studio 用户的工作流程。SDXL 显存使用在渲染后下降 2.3 GiB，search_conversation 工具已恢复，而图像生成队列功能现已完全可用，批量图像管道可以完全通过 REST API 驱动。

接下来是推理服务的性能改进——FlashInfer 内核预装消除了新引擎环境首次推理时的 JIT 编译开销，使首次请求延迟仅受模型加载时间限制。safetensors 格式强制执行也减少了自动管道中的攻击面，特别是对于依赖加载 .bin/.pt 权重的工具。Intel GPU 用户应该关注 SYCL 支持的进展，这可能成为 llama-server 的重要吞吐量杠杆。

对于训练团队，MoE 模型在 CPU-only 或混合 CPU-GPU 流水线并行设置中使用梯度累积时存在正确性问题——在 CPU 后端上应避免梯度累积大于 1。Ulysses 上下文并行下的评估损失被夸大了 cp_size 倍，需要除以 cp_size 才能获得真实的序列级损失用于日志记录和早停。数据集截断修复意味着现在反映实际的 SFT 标记化，混合文本/消息列的数据集需要重新运行验证。

桌面用户获得了 SDXL VRAM 减少 2.3 GiB 的好处，这为中档 GPU 上的多镜头或修复管道释放了空间，search_conversation 工具也已恢复。图像生成队列现在既可以通过 UI 也可以通过 API 使用，批量图像管道可以完全通过 REST 驱动而无需轮询循环。
</think>


## Unsloth 每日简报 — 2026-11-08

---

### 1. 今日要点

三条高影响力的 PR 在 Studio 侧合入：预装的 FlashInfer 内核将消除每次全新 vLLM/SGLang 环境首次推理时的 nvcc JIT 编译开销；仅使用 safetensors 的权重解析封堵了一类反序列化风险，同时恢复了一条托管快速路径；SDXL VAE 的显存预留削减了约 2.3 GiB。与此同时，CPU 后端出现了一个正确性回归——MoE 路由器辅助 loss 在流水线并行且 `gradient_accumulation > 1` 时出现发散，以及 Ulysses 上下文并行路径中 eval-loss 膨胀 bug 的确认。

---

### 2. 版本发布与破坏性变更

| 项目 | 详情 | 链接 |
|---|---|---|
| 过去 24 h 内无标签版本发布 | — | — |

**已落地的配置/行为变更（无版本号更新）：**
- **仅支持 safetensors 权重解析** — Studio 现在在所有图像/视频/文本编码器加载路径上拒绝打开 `.pt / .pth / .bin / .ckpt` 容器。若模型附带了 `.safetensors` 文件则走安全回退路径。除非下游工具依赖旧格式加载，否则无需迁移。 | [#17061](https://github.com/unslothai/unsloth/pull/17061)
- **PPO / RLOO 融合 log-probs 回退** — 注册了任何 torch 全局模块钩子时，`fused_head` 现在会回退到 TRL 的 logits 路径。影响在训练循环中注入自定义钩子的用户。 | [#17043](https://github.com/unslothai/unsloth/pull/17043)

---

### 3. 新模型与硬件支持

| 类别 | 条目 | 状态 | 链接 |
|---|---|---|---|
| **推理引擎** | FlashInfer 预构建内核在 vLLM / SGLang 引擎环境构建时预先安装（消除首次启动时每个 GPU 的 nvcc JIT 编译） | **OPEN** PR | [#17063](https://github.com/unslothai/unsloth/pull/17063) |
| **量化格式** | `.safetensors` 被强制作为预量化扩散模型（SD / SDXL / SD3 / FLUX / LTX / Wan / CogVideoX）的唯一权重容器 | **OPEN** PR | [#17061](https://github.com/unslothai/unsloth/pull/17061) |
| **GPU 后端** | Intel OneAPI SYCL 路径支持 llama-server — 功能请求：在启动前接受 `/opt/intel/oneapi/setvars.sh` | **OPEN** issue | [#17048](https://github.com/unslothai/unsloth/issues/17048) |
| **多 GPU** | CFG 并行扩散副拷贝不再拒绝已持有 CUDA 上下文且处于空闲状态的第二块 GPU | **OPEN** PR | [#17057](https://github.com/unslothai/unsloth/pull/17057) |
| **上下文并行** | DeepSeek V2 / V3 MLA、V3.2 索引器、V4 sink attention 的 Ulysses attention（在既有 Kimi / MiniMax 工作基础上扩展） | **OPEN** PR | [#15882](https://github.com/unslothai/unsloth/pull/15882) |

---

### 4. 性能与优化

| 领域 | 变更 | 影响 | 链接 |
|---|---|---|---|
| **引擎冷启动** | FlashInfer top-k/top-p 采样器内核在 vLLM / SGLang 环境中预装 | 消除每次新推理引擎首次请求时每个 GPU 的 nvcc JIT 编译（此前每个 GPU 首次请求耗时约数分钟） | [#17063](https://github.com/unslothai/unsloth/pull/17063) |
| **显存（SDXL）** | SDXL VAE 解码改用单一可扩展分配器段，不再持有第二份完整 clip 缓冲区 | 解码后预留显存 **减少 2.3 GiB**；实时张量保持在约 8.95 GiB | [#17045](https://github.com/unslothai/unsloth/pull/17045) |
| **显存（LTX-2）** | LTX-2 / LTX-2.5 分块 VAE 解码：分块解码期间仅在卡上保留当前打开的分块带 | 降低高分辨率 clip 解码的峰值显存（在 1280×704 分辨率下） | [#17060](https://github.com/unslothai/unsloth/pull/17060) |
| **FLUX.3 扩散** | 调制头每个样本投影一次；Base 的 offload 路径复用条件流 | 减少多样本 FLUX.3 流水线中的冗余计算 | [#17059](https://github.com/unslothai/unsloth/pull/17059) |
| **RAG 摄取** | `_embed_all` 现在对整个语料库进行分批处理，而非逐文档（回归已修复） | **提升约 48 倍**：小文件语料库从约 99 ms/块降至 2.07 ms/块 | [#16715](https://github.com/unslothai/unsloth/issues/16715) |
| **FSDP2 分片加载** | `init_lora_weights="orthogonal"` 现已接受，与 `True/False/"gaussian"` 并列 | 无需进入全量权重加载路径即可启用正交 LoRA 初始化 | [#17038](https://github.com/unslothai/unsloth/pull/17038) |
| **CPU BF16 AdamW** | 每个参数现获得独立的 `torch.Generator` 舍入流 | 修复 torch CPU 生成器 seed 32 位截断导致的 seed 冲突 | [#17046](https://github.com/unslothai/unsloth/pull/17046) |
| **前端渲染** | CSS 重构：强制使用规范 Tailwind 类 + 无单位 `0` 回退 | 减少软件合成页面（WebView2 / SwiftShader / llvmpipe）上的布局抖动 | [#17007](https://github.com/unslothai/unsloth/pull/17007), [#17008](https://github.com/unslothai/unsloth/pull/17008), [#17011](https://github.com/unslothai/unsloth/pull/17011) |

---

### 5. 稳定性与回归

> **严重程度等级：** 🔴 Critical（正确性/挂起）· 🟠 High（显著性能退化）· 🟡 Medium（存在变通方案）· ⚪ Low（外观/小众场景）

| 严重程度 | 问题 | 详情 | 链接 | 修复 PR |
|---|---|---|---|---|
| 🔴 **严重** | **MoE 路由器辅助 loss 在 CPU 上发散** — 流水线并行且 `gradient_accumulation > 1` 时，`UNSLOTH_FORCE_CPU=1` 下产生错误的 loss；校验测试失败 | 影响所有 MoE 模型（Mixtral、Qwen MoE 等）在 CPU-only FSDP 流水线阶段训练 | [#17054](https://github.com/unslothai/unsloth/issues/17054) | — |
| 🔴 **严重** | **Eval loss 被 cp_size 放大** — Ulysses 下 `trainer.evaluate()` 报告的 `eval_loss` 乘以了上下文并行大小 | 用于模型选择的 loss 值不可靠；影响所有 CP 用户 | [#17049](https://github.com/unslothai/unsloth/pull/17049) | — |
| 🟠 **高** | **LongRoPE / dynamic RoPE 接收截断的 position_ids** — Ulysses 路径向 `rotary_emb` 传递分片而非完整序列位置 | 影响启用上下文并行的 Phi-3 / 3.5 / 4-mini 长上下文模型 | [#17051](https://github.com/unslothai/unsloth/pull/17051) | — |
| 🟠 **高** | **Windows 11 图像生成回退到 CPU/RAM** — 尽管 RTX 3060 可用，扩散流水线仍路由到 CPU（macOS M1 未受影响） | 阻止受影响 Windows 配置上的 GPU 加速图像生成 | [#16803](https://github.com/unslothai/unsloth/issues/16803) | — |
| 🟡 **中等** | **DiffusionGemma 多 GPU：GGML_ASSERT n_ubatch >= n_tokens** — 约 1792 tokens 以上的提示词在 2-GPU CUDA 配置下中止视觉服务器 | 影响多 GPU 上 DiffusionGemma 的较长提示词；疑似 ubatch 尺寸缺口 | [#16925](https://github.com/unslothai/unsloth/issues/16925) | — |
| 🟡 **中等** | **工具调用后重复完整提示词重处理** — Qwen3.8 27B GGUF + MCP 工具目录，每次工具调用轮次重新发送整个 65K 上下文 | 多轮工具对话中造成过度延迟和 token 消耗 | [#17015](https://github.com/unslothai/unsloth/issues/17015) | — |
| 🟡 **中等** | **check_dataset 报告错误的截断** — 测量 token 长度在两种情况下与 `sft_prepare_dataset` 不符（行同时包含 `text` 和 `messages` 字段） | 被静默截断的训练行可能通过 dry-run 校验 | [#17047](https://github.com/unslothai/unsloth/pull/17047) | — |
| ⚪ **低** | **Windows 上 nul 文件生成** — Git Bash 将 `>nul 2>&1` 解析为真实文件写入而非 NUL 设备 | 污染工作目录产生多余文件；修复已提交 | [#17010](https://github.com/unslothai/unsloth/pull/17010) | merged |
| ⚪ **低** | **Model Hub 搜索图标模糊** — 桌面应用 UI 回归 | 外观问题；已修复 | [#16962](https://github.com/unslothai/unsloth/issues/16962) | fixed |
| ⚪ **低** | **Model Hub UI 图像重叠/错位** — 桌面应用渲染回归 | 外观问题；已修复 | [#17004](https://github.com/unslothai/unsloth/issues/17004) | fixed |

---

### 6. 对应用开发者的影响

**推理/服务团队：**
- FlashInfer 内核预装意味着新配置 vLLM 引擎的首次推理 JIT 税（约 30–120 s）已消除。新引擎环境下首次请求延迟现在只受模型加载时间约束。
- safetensors-only 强制执行减少了自动管道中摄入用户提供模型目录的攻击面；审查任何依赖加载 `.bin`/`.pt` 权重的工具链。
- Intel GPU 用户应关注 [#17048](https://github.com/unslothai/unsloth/issues/17048) — 通过 OneAPI 支持 llama-server 的 SYCL 是 Intel 独立 GPU 上的重要吞吐量杠杆。

**训练/微调团队：**
- CPU MoE 流水线发散（[#17054](https://github.com/unslothai/unsloth/issues/17054)）是 CPU-only 或混合 CPU-GPU 流水线并行且使用梯度累积场景下的正确性阻塞项。在修复前，避免在 MoE 的 CPU 后端上设置 `gradient_accumulation > 1`。
- Ulysses 上下文并行下 eval loss 被 cp_size 膨胀（[#17049](https://github.com/unslothai/unsloth/pull/17049)）——除以 cp size 可恢复真实序列级 loss，用于日志记录和早停。
- `check_dataset` 截断修复（[#17047](https://github.com/unslothai/unsloth/pull/17047)）意味着数据集 dry-run 校验现在反映实际 SFT tokenization；对同时包含 `text`/`messages` 字段的数据集重新运行校验。

**桌面/Studio 用户：**
- SDXL 渲染后显存占用下降 2.3 GiB，为中端 GPU 上的多图或 inpainting 流水线释放了余量。
- `search_conversation` 工具在三次反馈后（[#16706](https://github.com/unslothai/unsloth/issues/16706)）现已恢复。
- 图像生成队列现已从 UI 和 API 两侧均可正常工作（[#15005](https://github.com/unslothai/unsloth/pull/15005)）——批量图像流水线可以完全通过 REST 驱动，无需轮询循环。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*