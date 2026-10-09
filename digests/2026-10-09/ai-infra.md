# AI 基础设施日报 2026-10-09

> 生成时间: 2026-10-09 02:30 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this entire report into Simplified Chinese, maintaining the exact Markdown structure while using natural technical Chinese register. Let me go through it carefully.

Key points for translation:
- Keep all project names, version numbers, numbers, URLs as-is
- Keep headings, tables, lists exactly as original
- Use natural technical Chinese - not literal translation
- Keep code references, issue numbers, etc. as-is

Let me translate section by section:

1. Ecosystem Overview - translate naturally
2. Activity Comparison - translate table headers and descriptions
3. Model Support Race - translate table, keep model names
4. Performance Frontier - translate table
5. Layer Positioning - translate, keep as-is for ASCII art
6. Trend Signals - translate all subsections

I need to be careful about:
- Technical terms: KV cache, speculative decoding, quantization, fine-tuning - these are commonly used in Chinese
- GPU terminology: VRAM, GPU memory, CUDA, etc.
- "who is ahead" section - translate naturally

Let me do this translation:</think>

# 跨项目对比报告：AI 基础设施生态

## 1. 生态概览

2025年10月9日的AI推理基础设施领域呈现出明显的分层专业化。**vLLM 和 SGLang** 凭借激进的 Blackwell/SM120 优化和投机解码改进在高吞吐量服务层占据主导。**llama.cpp** 继续在独立推理场景保持优势，同时推进 CUDA/Vulkan/SYCL 多后端工作。**Ollama** 专注于本地部署的开发者体验。**LiteLLM** 作为关键抽象层统一了100+提供商，而 **Unsloth** 掌控了微调民主化这一层级。所有项目的共同主题：每个项目都在竞相处理更长的上下文（512K–1M token）、更大的批量和多GPU分布，同时优化 KV 缓存和内存管理。

---

## 2. 活动对比

| 项目 | 热门 Issue | 热门 PR | 发布 (24h) | 重点领域 |
|------|------------|---------|------------|----------|
| **vLLM** | ~17 | ~17 | 0 | GPU 服务引擎 |
| **SGLang** | ~30 | ~47 | 0 | GPU 服务 + 运行时 |
| **llama.cpp** | ~30 | ~10+ | **10** | CPU/GPU 独立引擎 |
| **Ollama** | ~28 | ~47 | 1 (v0.40.2) | 本地运行时 |
| **LiteLLM** | ~30 | ~20 | 5 | 网关 / 统一层 |
| **Unsloth** | ~30 | ~20 | 1 (beta) | 微调 |

**关键观察：** llama.cpp 在发布活跃度上领先（10个带版本号的提交），反映了其作为 llama.cpp-server 和下游消费者快速迭代引擎的角色。SGLang 和 Ollama 的 PR 数量最高，表明功能开发正在加速。

---

## 3. 模型支持竞速

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|-------------|------|--------|-----------|--------|---------|
| **Blackwell (SM120)** | ✅ NVFP4 解码, XQA | — | — | — | — |
| **DeepSeek V4.1** | ⚠️ SM120 受阻 | ✅ DeepGEMM MegaGate | — | — | — |
| **GPT-6.1 Sol (Bedrock)** | — | — | — | — | — |
| **Gemma 4** | — | ✅ FA4 SM90 | — | ✅ | ✅ safetensors |
| **Qwen 4 Exp / Flash-Next** | ✅ FP8 QSA Ampere | ✅ 解码优化 | — | — | — |
| **MiniMax-M3 / DSpark** | ✅ 前缀缓存 | — | — | — | ✅ DSpark |
| **GLM-5.3 Flash** | ⚠️ 解码退化 | — | — | — | — |
| **决策模型 (Jev-style)** | — | — | — | — | ✅ 新增 |
| **MUSA** | — | — | ✅ FWHT 修复 | — | — |
| **Intel XPU** | ✅ KV 卸载 mmap | ✅ XPU 支持 | — | — | — |

**谁领先：** vLLM 在 Blackwell GPU 支持上领先；SGLang 在 DeepSeek V4.1 优化上领先；llama.cpp 在硬件多样性（MUSA、Vulkan RDNA、SYCL）上领先；Unsloth 在新兴架构（决策模型）上领先。值得注意的是 Ollama 在前沿模型支持上较为保守，优先考虑稳定性。

---

## 4. 性能前沿

| 优化领域 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------|------|--------|-----------|--------|---------|---------|
| **KV 缓存** | ✅ XQA 解码, 分片 | ✅ DSA 索引器, MTP | ✅ Vulkan 拼接 | — | — | ✅ MoE 缓存 |
| **量化** | ✅ NVFP4, FP8 | ✅ Q8_0 优化 | ✅ FP8 解码 | — | — | ✅ 4位bnb |
| **投机解码** | ✅ MTP + 混合 GDN | ✅ DSpark | — | — | — | ✅ 决策模型 |
| **批处理 / 服务** | ✅ CP8+TP8 请求 | ✅ 调度器重叠 | ✅ PAD 内核 | — | ✅ 遥测 | — |
| **多GPU / 分布式** | ✅ 流水线并行 | ✅ A2A 回退 | ✅ MoE 多GPU | — | — | — |
| **内核融合** | ✅ GDN 预填充 | ✅ GDN | ✅ RMSNorm+gate | — | — | ✅ LoRA |
| **上下文长度** | ✅ 512K ISL | ✅ 512K ISL | ✅ 50K+ | — | — | — |

**投入重点方向：** 跨所有项目的主导主题是 **KV 缓存优化**——无论是通过分片（vLLM、SGLang）、新布局（llama.cpp Vulkan 拼接）还是缓存策略（Unsloth MoE）。投机解码是第二大重点，vLLM 推进 MTP，SGLang 迭代 DSpark，Unsloth 开发决策模型。Blackwell (SM120) 支持是当前的尖端竞争焦点。

---

## 5. 层级定位

```
┌─────────────────────────────────────────────────────────────────┐
│  网关 / 抽象层                                                  │
│  LiteLLM ───────────────────────────────────────── 100+ 提供商统一接入 │
├─────────────────────────────────────────────────────────────────┤
│  本地运行时                                                     │
│  Ollama ─────────────────────────────── 一键部署本地 LLM        │
├─────────────────────────────────────────────────────────────────┤
│  高性能服务                                                     │
│  vLLM  ─────────────────────────────── 生产级 GPU 推理服务     │
│  SGLang ─────────────────────────────── 多后端服务 + SRT 运行时 │
│  llama.cpp ──────────────────────────── 独立引擎 / CPU-GPU     │
├─────────────────────────────────────────────────────────────────┤
│  微调 / 训练                                                   │
│  Unsloth  ───────────────────────────── 微调民主化              │
└─────────────────────────────────────────────────────────────────┘
```

| 项目 | 层级 | 目标用户 | 价值主张 |
|------|------|----------|----------|
| **LiteLLM** | 网关 | 平台工程师 | 统一100+ LLM 提供商，单一 API 接口 |
| **Ollama** | 本地运行时 | 开发者、爱好者 | 一条命令本地运行 LLM |
| **vLLM** | 服务引擎 | MLOps、推理 infra | 生产级吞吐量、P99 延迟 |
| **SGLang** | 服务 + 运行时 | 高级用户 | 灵活的服务 + SRT 运行时 |
| **llama.cpp** | 独立引擎 | 嵌入式、边缘、CLI | 无服务器、最大可移植性 |
| **Unsloth** | 微调 | ML 从业者 | 2倍快微调、更少显存 |

---

## 6. 趋势信号

### 基础设施工程师应关注什么

1. **Blackwell (SM120) 是新的主战场** — vLLM 的 XQA NVFP4 解码工作和 SGLang 的 DeepSeek V4.1 优化表明，整个生态正在竞相支持 NVIDIA 最新架构。预计 SM120 在 30–60 天内达到生产就绪状态。

2. **投机解码进入成熟期** — vLLM 的 MTP + 混合 GDN、SGLang 的 DSpark 和 Unsloth 的决策模型都指向多 token 投机作为吞吐量提升的主要杠杆。问题从"能不能用"转变为"精度损失多少，换来多少提速"。

3. **KV 缓存成为新的内存层级** — 每个项目都在重新设计缓存策略：分片、分阶段写回、GPU 驻留 LRU、多 GPU 池。这反映了向 1M+ 上下文窗口的转变——KV 内存已超过 GPU 显存。

4. **统一模型加载正在整合** — llama.cpp 的 GGUF 迁移、Ollama 的自动转换和 LiteLLM 的提供商抽象都表明，模型格式多样性正在被服务层吸收。开发者可以越来越多地在推理时忽略量化选择和格式。

5. **微调正在民主化** — Unsloth 的决策模型训练和 MoE 优化降低了定制模型适配的门槛。预计更多"自己训练"的工作流将从研究进入生产流水线。

6. **遥测和可观测性正在成为一等公民** — LiteLLM 的 AggregatingSink 和 vLLM 的异步预填充索引器改进表明，推理即服务运营商在规模化部署前需要企业级可见性。

### Agent / 应用开发者的信号

- **目前生产环境暂不推荐 GLM-5.3-Flash** — vLLM 中的解码退化问题会影响工具调用场景。
- **关注 LiteLLM 的提供商稳定性** — GitHub BYOK bug 表明抽象层会引入微妙回归；请测试你特定的提供商配置。
- **Unsloth 决策模型可能颠覆 agent 工作流** — 如果你需要从 LLM 获取结构化决策，30→80% 准确率提升的说法值得实验。
- **长上下文 (512K+) 现已可行** — 多个项目展示了 512K ISL 性能改进；如果你的场景涉及长文档，基础设施已就绪。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM Daily Digest into Simplified Chinese. I need to:
1. Translate all text (not code/URLs/numbers)
2. Keep headings, tables, lists, formatting as-is
3. Use natural technical Chinese
4. Keep all technical identifiers (issue numbers, PR numbers, model names, etc.) unchanged
5. Output ONLY the translation, no preamble

Let me translate this digest:

Title: # vLLM Daily Digest — 2026-10-09

Section 1: Today's Highlights
- Translate the content about GLM-5.3-Flash issues, Blackwell support, and RFC for fast-track merging

Section 2: Releases & Breaking Changes - simple, translate

Section 3: New Model & Hardware Support - translate table content

Section 4: Performance & Optimization - translate table and bullet points

Section 5: Stability & Regressions - translate table

Section 6: What This Means for Application Developers - translate the numbered points

Let me do this carefully, keeping the format and translating naturally.</think>

# vLLM 每日简报 — 2026-10-09

## 1. 今日要点

vLLM 项目今日在多个方向保持活跃开发。一个值得注意的新 RFC 是关于 **PR 快速通道合并** 的提议，旨在解决模型推理内核贡献者众多但 reviewer 人力有限的问题。在缺陷修复方面，**GLM-5.3-Flash 模型在长解码任务中出现退化** 的问题持续受到关注（Issue #56868、#56605），社区正在积极调查根本原因。与此同时，**Blackwell (SM120) 支持正在推进**，新增了通过 XQA 实现 NVFP4 KV 缓存解码的 PR，并修复了 DeepSeek-V4.1 的兼容性问题。

---

## 2. 版本发布与重大变更

过去 24 小时内无新版本发布。

---

## 3. 新模型与硬件支持

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **Ampere 上的 FP8 QSA 主 KV** | Qwen4Exp (Qwen3.8-Flash-Next) 现已在 sm_80/sm_86 (Ampere) 上支持 FP8 主 KV 缓存 — 此前仅在 sm_89+ 上可用 | [PR #60602](https://github.com/vllm-project/vllm/pull/60602) |
| **XPU KV 卸载 mmap** | Intel XPU 现支持将 KV 卸载 mmap 区域注册为 pinned 主机内存 | [PR #51956](https://github.com/vllm-project/vllm/pull/51956) |
| **DCP A2A 回退** | 不支持的直接 A2A 布局现会优雅地回退到 NCCL 实现 | [PR #54472](https://github.com/vllm-project/vllm/pull/54472) |

---

## 4. 性能优化

| 项目 | 描述 | 影响 | 链接 |
|------|-------------|--------|------|
| **SM12x 上使用 XQA 的 NVFP4 KV 解码** | 解码路径现为 Blackwell (sm_120, sm_121) 上的 NVFP4 KV 缓存使用 XQA，而非通过 fa2 处理预填充和解码 | 修复了投机解码中 CUDA graph 的问题 | [PR #60452](https://github.com/vllm-project/vllm/pull/60452) |
| **GLM-5.3-Flash 长上下文索引器分片** | 将分区稀疏索引器预填充评分跨 TP 排名分布；消除每排名冗余的 MQA 评分 | 在 512k ISL 上下文下加速 | [PR #54951](https://github.com/vllm-project/vllm/pull/54951) |
| **ROCm AITER 预填充索引器 topk** | 为 GLM-5.3-Flash 稀疏 MLA 层优化了 AITER 后端；将每 chunk 的索引器 topk 调用从 16 次优化 | 512k ISL 下节省约 350ms | [PR #60753](https://github.com/vllm-project/vllm/pull/60753) |
| **Qwen3-Next 融合 QK-norm+RoPE+gate** | Triton 内核实现 QKV 分割、NeoX RoPE 和门控的融合 | ROCm 性能提升 | [PR #51406](https://github.com/vllm-project/vllm/pull/51406) |
| **GDN 内部预填充检查点** | 为 Triton/FLA 和 AITER GDN 后端启用跨块边界的连续预填充执行 | 提升预填充吞吐量 | [PR #60659](https://github.com/vllm-project/vllm/pull/60659) |
| **混合 GDN 的 MTP 前缀缓存恢复** | 修复混合 GDN 在 MTP 投机解码下前缀缓存命中的问题；此前特定长度的提示词缓存命中率为零 | 改善 MTP 缓存利用率 | [PR #52244](https://github.com/vllm-project/vllm/pull/52244) |

**进行中工作 (RFC / 追踪项)：**
- **ViT 完整 CUDA Graph** — 多模态模型 (Qwen3-VL、GLM-V、Kimi K2.5) 中视觉 Transformer 编码器支持 CUDA Graph 的 RFC — [Issue #38175](https://github.com/vllm-project/vllm/issues/38175)
- **ROCm Qwen3.8-2.4T-A95B 优化** — gfx950/MI355X 性能路线图 — [Issue #57149](https://github.com/vllm-project/vllm/issues/57149)
- **模型运行器 v2 预填充上下文并行** — 请求支持 cp8+tp8=worldsize8 — [Issue #47846](https://github.com/vllm-project/vllm/issues/47846)

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 描述 | 状态 |
|----------|-------|-------------|--------|
| **高** | **GLM-5.3-Flash 解码退化** | 长解码在累积推理后退化为重复 token；在多轮智能体使用场景中也表现为"词沙拉"现象 | 待解决 — [Issue #56868](https://github.com/vllm-project/vllm/issues/56868), [Issue #56605](https://github.com/vllm-project/vllm/issues/56605) |
| **高** | **DSpark 前缀缓存损坏** | DFlash2/DSpark 带前缀缓存在 Qwen3.8-27B NVFP4 上缓存命中后产生错误输出；0.29、FP8、MTP 版本正常 | 待解决 — [Issue #60174](https://github.com/vllm-project/vllm/issues/60174) |
| **高** | **DeepSeek-V4.1 在 SM120 上运行失败** | 在 RTX PRO 6000 Blackwell 上无法运行，原因是缺少 page_block_size=32 的 FlashInfer 稀疏 MLA 解码内核（仅支持 pbs=64） | 待解决 — [Issue #59203](https://github.com/vllm-project/vllm/issues/59203) |
| **中** | **FP8 KV 自动选择无 FlashInfer JIT 时崩溃** | `kv_cache_dtype="fp8"` 自动选择 FLASHINFER 后端但在无可用 JIT 时崩溃；应回退到 TRITON_ATTN | 待解决 — [Issue #60262](https://github.com/vllm-project/vllm/issues/60262) |
| **中** | **FP8 KV 缓存启动 OOM** | CUDA graph 内存未计入 FP8 KV 缓存预算，导致小型 GPU 启动时 OOM | 待解决 — [Issue #60350](https://github.com/vllm-project/vllm/issues/60350) |
| **中** | **Nemotron-3.5-Lightning 回归** | 自 v0.29.0 以来在 DGX Spark (GB10/SM121) 上解码速度下降约 16% | 待解决 — [Issue #59770](https://github.com/vllm-project/vllm/issues/59770) |
| **中** | **ROCm RDNA4 FP8 线性内核** | RowWiseTorchFP8ScaledMMLinearKernel 在 gfx1201 上被错误选中，导致解码性能损失 5-24% | 待解决 — [Issue #57838](https://github.com/vllm-project/vllm/issues/57838) |
| **低** | **logprob_token_ids 排名语义** | 返回请求列表中的位置而非词表排名 | 待解决 — [Issue #60357](https://github.com/vllm-project/vllm/issues/60357) |
| **已修复** | **MTP + 多模态编码器缓存崩溃** | MTP + 多模态在高并发下编码器缓存未命中时触发 AssertionError | 已关闭 — [Issue #38551](https://github.com/vllm-project/vllm/issues/38551) |
| **已修复** | **x86 docker 构建** | RUN 指令中的 sudo 模式导致构建失败 | 已关闭 — [PR #60488](https://github.com/vllm-project/vllm/pull/60488) |

---

## 6. 这对应用开发者意味着什么

1. **Blackwell 部署注意事项**：在 RTX PRO 6000 (SM120) 上运行 DeepSeek-V4.1-Flash 时，由于缺少 FlashInfer 内核，预期启动会失败 — 请关注 [Issue #59203](https://github.com/vllm-project/vllm/issues/59203) 获取修复进展。PR [#60452](https://github.com/vllm-project/vllm/pull/60452) 已通过 XQA 改进了 Blackwell 上的 NVFP4 解码。

2. **GLM-5.3-Flash 智能体工作负载**：长时间运行的工具调用或推理密集型工作流可能出现输出退化（重复 token）。请考虑变通方案或关注 [Issue #56868](https://github.com/vllm-project/vllm/issues/56868) — 目前尚无修复。

3. **无 JIT 时的 FP8 + FlashInfer**：如果没有 CUDA 工具链或 `flashinfer-cubin`，请避免使用 `kv_cache_dtype="fp8"`，直到 [Issue #60262](https://github.com/vllm-project/vllm/issues/60262) 解决 — 自动后端选择可能导致崩溃。

4. **前缀缓存 + 投机解码**：DSpark 用户在升级后使用前缀缓存时应仔细测试；[Issue #60174](https://github.com/vllm-project/vllm/issues/60174) 报告 0.30/0.31 版本存在损坏问题，但 0.29 版本正常。

5. **Ampere 上的 Qwen4Exp**：FP8 KV 缓存现已在较旧的 Ampere GPU (sm_80/sm_86) 上工作 — 如果此前受阻，可以升级。

6. **ROCm 用户**：Qwen3.8 模型在 MI355X/gfx950 上的优化工作持续进行；请关注 [Issue #57149](https://github.com/vllm-project/vllm/issues/57149) 了解即将推出的改进。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang digest into Chinese (Simplified Chinese based on the context). Let me translate this while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate:

---

# SGLang 速报 — 2026-10-09

## 今日要闻

SGLang 项目持续在多个方向积极开发。主要包括 DeepSeek V4.1 优化工作（DeepGEMM MegaGate 路由集成，#43244）、NPU 改进（Ascend DSA 的 KV 缓存布局解析，#41875），以及多个影响确定性推理和流式行为的正确性修复。CI 基础设施仍是关注重点，目前有 78 个开放 issue 和松散测试追踪（#42752）。

---

## 发布与破坏性变更

过去 24 小时内无新版本发布。

---

## 新模型与硬件支持

- **Gemma4 FA4 on SM90**：PR [#42019](https://github.com/sgl-project/sglang/pull/42019) 为 Gemma4 模型在 SM90 上启用 FlashAttention4，支持 head-dim 512。
- **MiniMax-M3 DSpark**：PR [#33673](https://github.com/sgl-project/sglang/pull/33673) 添加了 DSpark 投机解码支持，使用 MiniMax-M3 作为目标模型，MiniMax-M3-DSpark 作为草稿模型。

- **SM100/SM103 TP8 FlashInfer**：PR [#36766](https://github.com/sgl-project/sglang/pull/36766) 为 Llama 3.1 70B 在新 GPU 架构上添加序列并行支持。
- **XPU 支持**：PR [#39817](https://github.com/sgl-project/sglang/pull/39817) 引入了各种 Intel XPU 支持变更（量化、后端适配）。
- **AMD ROCm Flux2 修复**：PR [#43103](https://github.com/sgl-project/sglang/pull/43103) 在 ROCm 上跳过 Flux2 相关的底层指令优化。

---

## 性能与优化

- **DeepSeek V4.1 优化**：Issue [#42170](https://github.com/sgl-project/sglang/issues/42170) 追踪正在进行的工作，包括 mHC SP + engram 融合（#43065）、q_rope_store 折叠（#41657）和预填充优化。
- **DeepGEMM MegaGate 路由**：PR [#43244](https://github.com/sgl-project/sglang/pull/43244) 集成了 DSv41 的 DeepGEMM MegaGate 路由（2/N）。
- **KV 缓存分片**：PR [#40925](https://github.com/sgl-project/sglang/pull/40925) 和 [#40929](https://github.com/sgl-project/sglang/pull/40929) 为 DSA 索引器和 MTP 添加了池级 KV 缓存分片支持。
- **调度器启动重叠**：PR [#43177](https://github.com/sgl-project/sglang/pull/43177) 将调度器启动与数据并行控制器初始化重叠，以降低冷启动延迟。
- **HiCache 分阶段回写**：PR [#39606](https://github.com/sgl-project/sglang/pull/39606) 为统一页面 KV 缓存布局添加了分阶段回写机制。
- **LoRA 只读映射**：PR [#43261](https://github.com/sgl-project/sglang/pull/43261) 将合并的 LoRA 缓存映射为只读，以减少共享 CPU/GPU 池的内存开销。
- **Qwen4Exp 性能**：Issue [#36796](https://github.com/sgl-project/sglang/issues/36796) 记录了 DGX Spark（SM121）上 QSA/PLE/GDN 内核的主导地位，请求 SM121 调优。

---

## 稳定性与回归问题

| 严重程度 | Issue | 描述 | 状态 |
|----------|-------|-------------|--------|
| **高** | [#43061](https://github.com/sgl-project/sglang/issues/43061) | 在 granite-4.0-h 上，`--enable-deterministic-inference` 配合 `repetition_penalty` 会导致调度器崩溃（`apply_scaling_penalties` 中 torch.compile 错误） | 待处理 |
| **高** | [#40843](https://github.com/sgl-project/sglang/issues/40843) | GLM-5.3 使用 DFLASH 投机解码时出现严重重复和退化循环 | 待处理 |
| **中** | [#43142](https://github.com/sgl-project/sglang/issues/43142) | 当平台回退选择 torch_native attention 时，CUDA graphs 仍保持启用状态 | 待处理；修复在 [#42177](https://github.com/sgl-project/sglang/pull/42177) |
| **中** | [#36333](https://github.com/sgl-project/sglang/issues/36333) | 断开的流式客户端留下僵尸请求，解码至 max_tokens（#34160 回退后的回归） | 待处理 |
| **中** | [#40320](https://github.com/sgl-project/sglang/issues/40320) | MoE EP>1 时，FlashInfer 自动调优缓存在每次启动时被丢弃 | 待处理 |
| **中** | [#41227](https://github.com/sgl-project/sglang/issues/41227) | `--json-model-override-args` 的 rope_scaling 会为缺少备选方案的模型丢弃 `rope_theta`（Llama-3.2-3B GSM8K 回归） | 待处理 |
| **低** | [#43094](https://github.com/sgl-project/sglang/issues/43094) | 缓存无关策略（fcfs、lof、random、routing-key）的 `num_matched_prefix_tokens` 始终为 0 | 待处理 |

**CI/基础设施**：Issue [#42752](https://github.com/sgl-project/sglang/issues/42752) 追踪松散测试和 CI 基础设施故障（47 条评论）。追踪 issue [#17050](https://github.com/sgl-project/sglang/issues/17050) 报告主分支有 1 个损坏、4 个松散测试。

---

## 这对应用开发者意味着什么

1. **确定性推理用户**：在 [#43061](https://github.com/sgl-project/sglang/issues/43061) 修复前，避免在 granite-4.0-h 上同时使用 `--enable-deterministic-inference` 和 `repetition_penalty`——这会导致调度器崩溃。

2. **GLM-5.3 投机解码用户**：注意 DFLASH 投机解码的潜在重复问题（#40843）；监控输出质量是否下降。

3. **Apple Silicon 部署**：RFC [#32321](https://github.com/sgl-project/sglang/issues/32321) 概述了使用 Torch 自有 SRT 路径（带导出的 MLX 区域）进行 Apple Silicon 服务重建的方案——欢迎对路线图提供反馈。

4. **DeepSeek V4.1 即将推出**：正在进行的优化工作（#42170）将提升性能；关注进度以确定生产就绪状态。

5. **流式应用**：使用带工具调用的流式传输时，监控客户端断开时可能出现的僵尸请求（#36333）。

6. **LoRA 用户**：#43028 中的修复确保 LoRA delta 最多只乘以一次 scale——如果使用自定义 LoRA 配置，这一点很重要。</think>

# SGLang 速报 — 2026-10-09

## 今日要闻

SGLang 项目持续在多个方向积极开发。主要包括 DeepSeek V4.1 优化工作（DeepGEMM MegaGate 路由集成，#43244）、NPU 改进（Ascend DSA 的 KV 缓存布局解析，#41875），以及多个影响确定性推理和流式行为的正确性修复。CI 基础设施仍是关注重点，目前有 78 个开放 issue 和松散测试追踪（#42752）。

---

## 发布与破坏性变更

过去 24 小时内无新版本发布。

---

## 新模型与硬件支持

- **Gemma4 FA4 on SM90**：PR [#42019](https://github.com/sgl-project/sglang/pull/42019) 为 Gemma4 模型在 SM90 上启用 FlashAttention4，支持 head-dim 512。
- **MiniMax-M3 DSpark**：PR [#33673](https://github.com/sgl-project/sglang/pull/33673) 添加了 DSpark 投机解码支持，使用 MiniMax-M3 作为目标模型，MiniMax-M3-DSpark 作为草稿模型。
- **SM100/SM103 TP8 FlashInfer**：PR [#36766](https://github.com/sgl-project/sglang/pull/36766) 为 Llama 3.1 70B 在新 GPU 架构上添加序列并行支持。
- **XPU 支持**：PR [#39817](https://github.com/sgl-project/sglang/pull/39817) 引入了各种 Intel XPU 支持变更（量化、后端适配）。
- **AMD ROCm Flux2 修复**：PR [#43103](https://github.com/sgl-project/sglang/pull/43103) 在 ROCm 上跳过 Flux2 residual_gate_add PTX 以解决 MI355 崩溃问题。

---

## 性能与优化

- **DeepSeek V4.1 优化**：Issue [#42170](https://github.com/sgl-project/sglang/issues/42170) 追踪正在进行的工作，包括 mHC SP + engram 融合（#43065）、q_rope_store 折叠（#41657）和预填充优化。
- **DeepGEMM MegaGate 路由**：PR [#43244](https://github.com/sgl-project/sglang/pull/43244) 集成了 DSv41 的 DeepGEMM MegaGate 路由（2/N）。
- **KV 缓存分片**：PR [#40925](https://github.com/sgl-project/sglang/pull/40925) 和 [#40929](https://github.com/sgl-project/sglang/pull/40929) 为 DSA 索引器和 MTP 添加了池级 KV 缓存分片支持。
- **调度器启动重叠**：PR [#43177](https://github.com/sgl-project/sglang/pull/43177) 将调度器启动与数据并行控制器初始化重叠，以降低冷启动延迟。
- **HiCache 分阶段回写**：PR [#39606](https://github.com/sgl-project/sglang/pull/39606) 为统一页面 KV 缓存布局添加了分阶段回写机制。
- **LoRA 只读映射**：PR [#43261](https://github.com/sgl-project/sglang/pull/43261) 将合并的 LoRA 缓存映射为只读，以减少共享 CPU/GPU 池的内存开销。
- **Qwen4Exp 性能**：Issue [#36796](https://github.com/sgl-project/sglang/issues/36796) 记录了 DGX Spark（SM121）上 QSA/PLE/GDN 内核的主导地位，请求 SM121 调优。

---

## 稳定性与回归问题

| 严重程度 | Issue | 描述 | 状态 |
|----------|-------|-------------|--------|
| **高** | [#43061](https://github.com/sgl-project/sglang/issues/43061) | 在 granite-4.0-h 上，`--enable-deterministic-inference` 配合 `repetition_penalty` 会导致调度器崩溃（`apply_scaling_penalties` 中 torch.compile 错误） | 开放 |
| **高** | [#40843](https://github.com/sgl-project/sglang/issues/40843) | GLM-5.3 使用 DFLASH 投机解码时出现严重重复和退化循环 | 开放 |
| **中** | [#43142](https://github.com/sgl-project/sglang/issues/43142) | 当平台回退选择 torch_native attention 时，CUDA graphs 仍保持启用状态 | 开放；修复在 [#42177](https://github.com/sgl-project/sglang/pull/42177) |
| **中** | [#36333](https://github.com/sgl-project/sglang/issues/36333) | 断开的流式客户端留下僵尸请求，解码至 max_tokens（#34160 回退后的回归） | 开放 |
| **中** | [#40320](https://github.com/sgl-project/sglang/issues/40320) | MoE EP>1 时，FlashInfer 自动调优缓存在每次启动时被丢弃 | 开放 |
| **中** | [#41227](https://github.com/sgl-project/sglang/issues/41227) | `--json-model-override-args` 的 rope_scaling 会为缺少备选方案的模型丢弃 `rope_theta`（Llama-3.2-3B GSM8K 回归） | 开放 |
| **低** | [#43094](https://github.com/sgl-project/sglang/issues/43094) | 缓存无关策略（fcfs、lof、random、routing-key）的 `num_matched_prefix_tokens` 始终为 0 | 开放 |

**CI/基础设施**：Issue [#42752](https://github.com/sgl-project/sglang/issues/42752) 追踪松散测试和 CI 基础设施故障（47 条评论）。追踪 issue [#17050](https://github.com/sgl-project/sglang/issues/17050) 报告主分支有 1 个损坏、4 个松散测试。

---

## 这对应用开发者意味着什么

1. **确定性推理用户**：在 [#43061](https://github.com/sgl-project/sglang/issues/43061) 修复前，避免在 granite-4.0-h 上同时使用 `--enable-deterministic-inference` 和 `repetition_penalty`——这会导致调度器崩溃。

2. **GLM-5.3 投机解码用户**：注意 DFLASH 投机解码的潜在重复问题（[#40843](https://github.com/sgl-project/sglang/issues/40843)）；监控输出质量是否下降。

3. **Apple Silicon 部署**：RFC [#32321](https://github.com/sgl-project/sglang/issues/32321) 概述了使用 Torch 自有 SRT 路径（带导出的 MLX 区域）进行 Apple Silicon 服务重建的方案——欢迎对路线图提供反馈。

4. **DeepSeek V4.1 即将推出**：正在进行的优化工作（[#42170](https://github.com/sgl-project/sglang/issues/42170)）将提升性能；关注进度以确定生产就绪状态。

5. **流式应用**：使用带工具调用的流式传输时，监控客户端断开时可能出现的僵尸请求（[#36333](https://github.com/sgl-project/sglang/issues/36333)）。

6. **LoRA 用户**：PR [#43028](https://github.com/sgl-project/sglang/pull/43028) 中的修复确保 LoRA delta 最多只乘以一次 scale——如果使用自定义 LoRA 配置，这一点很重要。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the llama.cpp digest from English to Chinese (Simplified). I need to:

1. Keep all Markdown structure exactly the same (headings, tables, lists, etc.)
2. Keep URLs, issue/PR numbers, code identifiers, file paths, version tags as-is
3. Translate naturally in technical Chinese register
4. Output ONLY the translation with no preamble or explanation
5. No markdown fences around the output

Let me translate section by section while preserving structure:

---

# llama.cpp 摘要 — 2026-10-09

## 今日要闻

过去 24 小时内有大量 CUDA 后端工作，包括针对大 token 数的 top-k 算法改进（显著减少内核启动次数），以及支持多 GPU 的 MoE 缓存用于跨 GPU 的专家路由。Vulkan 修复了关于无穷大/NaN 输入的 TOP_K 边缘情况，SYCL 后端则收到了 FWHT 优化。

---

## 版本更新与破坏性变更

| 版本 | 提交 | 变更 |
|---------|--------|--------|
| b11514 | `b11514` | Musa FWHT 修复 — 解决 MUSA `mp_21` 上的共享内存溢出问题（需要 ≤28672 字节，原先分配 33300） |
| b11513 | `b11513` | CUDA：改进 top-k 算法选择；大行数时切换为基数选择 |
| b11512 | `b11512` | 修复 DFlash 输出头共享；确保从 GGUF 元数据正确读取共享的词嵌入权重 |
| b11511 | `b11511` | CUDA：修复 MMQ 越界读取 (#29953) |
| b11510 | `b11510` | CUDA：针对超过 65535 行/分片的矩阵使用循环 PAD 内核 |
| b11509 | `b11509` | CUDA：修复 CCCL 版本守卫的主版本回滚边界情况 |


| b11507 | `b11507` | **多 GPU MoE 缓存支持** — 专家缓存现可跨 GPU 分发 |
| b11505 | `b11505` | Vulkan：修复 +inf/NaN 输入及负值 k=1 时的 TOP_K 处理 |
| b11503 | `b11503` | 更新 cpp-httplib 至 0.60.1 |
| b11501 | `b11501` | SYCL：FWHT 优化 |

## 新模型与硬件支持

- **MiniCPM-V 4.7** — PR #29416 添加支持；使用现有的 MiniCPM-V 4.6 路径扩展了 3D RoPE 处理
- **MUSA 后端** — 修复了 FWHT 内核兼容性（共享内存大小问题）

---

## 性能与优化

| 领域 | 变更 | 影响 |
|------|--------|--------|
| **CUDA top-k** | 用网格跨越行的基数选择替换每行 `DeviceTopKKernel`（基于 `GGML_CUDA_TOPK_RADIX_MIN_ROWS` 门控） | qwen4exp 在 34,816 tokens 时：**1,671,253 → ~5,761 次启动**（减少 99.6%）；具体加速未提及但消除了内核启动开销 |
| **SYCL FWHT** | FWHT 优化 (#29605) | 提升 SYCL 后端吞吐量 |
| **多 GPU MoE** | 专家缓存现可跨 GPU 分发 (#30112) | 2× RTX 4090（层切分）上 Qwen3.8-Flash-Next Q4_0（93.7 GiB，65 GiB 专家）的基准测试 — 见 PR 获取 t/s 收益 |
| **CUDA PAD 内核** | 超过 65535 行的循环调度 | 消除大批量场景下的失败 |
| **Vulkan concat** | 用于转置 dim-0 concat 的新 32×32 LDS 磁贴着色器 (#30149) | 优化循环架构（gated delta net, Mamba2） |
| **OpenCL** | 将 fused residual add 融合到 rms_norm*w；分块 gated delta net 预填充；mamba2 ssm_scan 行折叠 | 针对 Adreno A6x 改进 (#30182–#30185) |

---

## 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 备注 |
|-------|----------|--------|-------|
| **#25593**：SM_60 (Tesla P100) 精度丢失 — FP32 计算在 FP16 中静默执行 | **高** | 开放 | 影响旧 Volta 卡的 CUDA；两个分支已有修复；需要上游解决 |
| **#29811**：使用 MTP 启动 Qwen 3.8 Flash 时在启动时断言失败 | **高** | 开放 | 投机解码路径中的回归 |
| **#26447**：Vulkan 上下文 >50K tokens 在 Vega 8 iGPU 上触发 `ErrorDeviceLost` | **中** | 开放 | GTT 回退静默降级性能 |
| **#25992**：并行负载下服务器在集成 HIP GPU (gfx1151) 上返回其他请求的响应 | **中** | 已关闭（过期） | 追溯到 commit c7d87229；跨请求数据泄漏 |
| **#27282**：MTP 保留单独的 CUDA 计算区域 → OOM；共享 gallocr 修复 | **中** | 已关闭（过期） | 不必要地减小了适配的上下文大小 |
| **#30033**：自 #29622 以来在双 Intel B70 上运行 Qwen3.8-Flash-Next 性能下降 | **中** | 开放 | SYCL 后端回归 |
| **#30000**：自 #25773 以来 Vulkan Q8_0 提示处理在 RTX 5060 Ti 上慢 16–19% | **中** | 开放 | 正在二分查找 |
| **#27638**：Flash Attention scalar 回退导致 Intel Arc B580 上 PP O(N²) 降级 | **低** | 开放 | ANV/Vulkan 后端问题 |

---

## 应用开发者需要关注的事项

1. **多 GPU MoE 部署** — 如果在多 GPU 上运行 MoE 模型（如 Mixtral、Qwen-MoE），b11507 中的新缓存共享应能提升专家 token 路由效率。更新您的部署配置以利用层切分。

2. **旧硬件上的 CUDA 用户** — b11513 中的 top-k 算法变更显著减少了大批量的内核启动开销。然而，**issue #25593** 关于 SM_60（Tesla P100、旧版 Quadro）需要在升级生产环境前进行测试 — FP16 精度丢失可能静默破坏输出。

3. **Vulkan 用户** — TOP_K 修复 (#30107) 解决了畸形输入的边缘情况。如果您处理不受信任的模型输出，请确保升级到 b11505 或更高版本。

4. **服务器运维人员** — 默认端口变更至 9931 (#30159) 正在进行中；更新任何预期端口 8080 的自动化脚本。

5. **SYCL/OpenCL 用户** — 多个针对 Intel GPU 和 Adreno 解码和预填充闪存注意力进行了优化。如果您使用较旧的 SYCL 版本，升级可能会带来显著的吞吐量提升。

---

*本摘录基于 ggml-org/llama.cpp 在 2026-10-09 的活动生成。*</think>

# llama.cpp 摘要 — 2026-10-09

## 今日要闻

过去 24 小时内有大量 CUDA 后端工作，包括针对大 token 数的 top-k 算法改进（显著减少内核启动次数），以及支持多 GPU 的 MoE 缓存用于跨 GPU 的专家路由。Vulkan 修复了关于无穷大/NaN 输入的 TOP_K 边缘情况，SYCL 后端则收到了 FWHT 优化。

---

## 版本更新与破坏性变更

| 版本 | 提交 | 变更 |
|---------|--------|--------|
| b11514 | `b11514` | Musa FWHT 修复 — 解决 MUSA `mp_21` 上的共享内存溢出问题（需要 ≤28672 字节，原先分配 33300） |
| b11513 | `b11513` | CUDA：改进 top-k 算法选择；大行数时切换为基数选择 |
| b11512 | `b11512` | 修复 DFlash 输出头共享；确保从 GGUF 元数据正确读取共享的词嵌入权重 |
| b11511 | `b11511` | CUDA：修复 MMQ 越界读取 (#29953) |
| b11510 | `b11510` | CUDA：针对超过 65535 行/分片的矩阵使用循环 PAD 内核 |
| b11509 | `b11509` | CUDA：修复 CCCL 版本守卫的主版本回滚边界情况 |
| b11507 | `b11507` | **多 GPU MoE 缓存支持** — 专家缓存现可跨 GPU 分发 |
| b11505 | `b11505` | Vulkan：修复 +inf/NaN 输入及负值 k=1 时的 TOP_K 处理 |
| b11503 | `b11503` | 更新 cpp-httplib 至 0.60.1 |
| b11501 | `b11501` | SYCL：FWHT 优化 |

---

## 新模型与硬件支持

- **MiniCPM-V 4.7** — PR #29416 添加支持；使用现有的 MiniCPM-V 4.6 路径扩展了 3D RoPE 处理
- **MUSA 后端** — 修复了 FWHT 内核兼容性（共享内存大小问题）

---

## 性能与优化

| 领域 | 变更 | 影响 |
|------|--------|--------|
| **CUDA top-k** | 用网格跨越行的基数选择替换每行 `DeviceTopKKernel`（基于 `GGML_CUDA_TOPK_RADIX_MIN_ROWS` 门控） | qwen4exp 在 34,816 tokens 时：**1,671,253 → ~5,761 次启动**（减少 99.6%）；具体加速未提及但消除了内核启动开销 |
| **SYCL FWHT** | FWHT 优化 (#29605) | 提升 SYCL 后端吞吐量 |
| **多 GPU MoE** | 专家缓存现可跨 GPU 分发 (#30112) | 2× RTX 4090（层切分）上 Qwen3.8-Flash-Next Q4_0（93.7 GiB，65 GiB 专家）的基准测试 — 见 PR 获取 t/s 收益 |
| **CUDA PAD 内核** | 超过 65535 行的循环调度 | 消除大批量场景下的失败 |
| **Vulkan concat** | 用于转置 dim-0 concat 的新 32×32 LDS 磁贴着色器 (#30149) | 优化循环架构（gated delta net, Mamba2） |
| **OpenCL** | 将 fused residual add 融合到 rms_norm*w；分块 gated delta net 预填充；mamba2 ssm_scan 行折叠 | 针对 Adreno A6x 改进 (#30182–#30185) |

---

## 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 备注 |
|-------|----------|--------|-------|
| **#25593**：SM_60 (Tesla P100) 精度丢失 — FP32 计算在 FP16 中静默执行 | **高** | 开放 | 影响旧 Volta 卡的 CUDA；两个分支已有修复；需要上游解决 |
| **#29811**：使用 MTP 启动 Qwen 3.8 Flash 时在启动时断言失败 | **高** | 开放 | 投机解码路径中的回归 |
| **#26447**：Vulkan 上下文 >50K tokens 在 Vega 8 iGPU 上触发 `ErrorDeviceLost` | **中** | 开放 | GTT 回退静默降级性能 |
| **#25992**：并行负载下服务器在集成 HIP GPU (gfx1151) 上返回其他请求的响应 | **中** | 已关闭（过期） | 追溯到 commit c7d87229；跨请求数据泄漏 |
| **#27282**：MTP 保留单独的 CUDA 计算区域 → OOM；共享 gallocr 修复 | **中** | 已关闭（过期） | 不必要地减小了适配的上下文大小 |
| **#30033**：自 #29622 以来在双 Intel B70 上运行 Qwen3.8-Flash-Next 性能下降 | **中** | 开放 | SYCL 后端回归 |
| **#30000**：自 #25773 以来 Vulkan Q8_0 提示处理在 RTX 5060 Ti 上慢 16–19% | **中** | 开放 | 正在二分查找 |
| **#27638**：Flash Attention scalar 回退导致 Intel Arc B580 上 PP O(N²) 降级 | **低** | 开放 | ANV/Vulkan 后端问题 |

---

## 应用开发者需要关注的事项

1. **多 GPU MoE 部署** — 如果在多 GPU 上运行 MoE 模型（如 Mixtral、Qwen-MoE），b11507 中的新缓存共享应能提升专家 token 路由效率。更新您的部署配置以利用层切分。

2. **旧硬件上的 CUDA 用户** — b11513 中的 top-k 算法变更显著减少了大批量的内核启动开销。然而，**issue #25593** 关于 SM_60（Tesla P100、旧版 Quadro）需要在升级生产环境前进行测试 — FP16 精度丢失可能静默破坏输出。

3. **Vulkan 用户** — TOP_K 修复 (#30107) 解决了畸形输入的边缘情况。如果您处理不受信任的模型输出，请确保升级到 b11505 或更高版本。

4. **服务器运维人员** — 默认端口变更至 9931 (#30159) 正在进行中；更新任何预期端口 8080 的自动化脚本。

5. **SYCL/OpenCL 用户** — 多个针对 Intel GPU 和 Adreno 解码和预填充闪存注意力进行了优化。如果您使用较旧的 SYCL 版本，升级可能会带来显著的吞吐量提升。

---

*本摘录基于 ggml-org/llama.cpp 在 2026-10-09 的活动生成。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest from English to Chinese. I need to:
1. Translate all headings, body text, and table content
2. Keep all technical elements, URLs, code, numbers, issue/PR references exactly as-is
3. Preserve the Markdown structure including tables, lists, etc.
4. Use natural technical Chinese suitable for a developer newsletter

Let me translate this carefully while maintaining all the technical integrity.</think>

# Ollama 速报 — 2026-10-09

## 1. 今日要闻

Ollama 项目发布了 **v0.40.2** 版本，主要包含文档和服务器端的改进。一个重要的 PR (#18882) 合并上线，移除了遗留的 llama.cpp 兼容性补丁并在加载时迁移 GGUF 模型，这标志着向上游兼容性的进展。然而，针对 Apple Silicon 用户的多个 MLX 回归问题在 0.40.x 中出现，qwen3.6:35b-mlx 和 gemma4:e2b-mlx 模型均出现故障——这些问题在 0.35.x 中并不存在。

---

## 2. 发布与破坏性变更

| 版本 | 变更内容 | 链接 |
|------|----------|------|
| **v0.40.2** | README: 将 oxi 添加到社区集成；server: 从列表中隐藏重复和降级保护 | [Release](https://github.com/ollama/ollama/releases/tag/v0.40.2) |

**迁移说明：** PR #18882 引入了旧版 GGUF 模型的磁盘迁移功能。运行旧版 GGUF 文件的用户在首次加载时可能会经历转换过程。

---

## 3. 新模型与硬件支持

- **OpenVINO 支持请求（进行中）：** Issue #2169 (95 👍) 追踪通过 OpenVINO 实现 Intel GPU/NPU 推理的需求。相关功能请求 #15917 也要求实现 Intel 硬件的 Vulkan 自动检测。
- **Ministral-3 Reasoning 变体：** Issue #13310 请求在 Ollama 上新增Ministral-3 模型的推理变体。
- **Index-Translate 系列：** Issue #18871 请求引入 HuggingFace IndexTeam 的翻译模型。

---

## 4. 性能与优化

| 领域 | PR/Issue | 状态 |
|------|----------|------|
| **CI 可靠性** | #18883: 为下载步骤增加重试机制 | OPEN |
| **模型加载** | #18882: 移除 llama.cpp 补丁，迁移旧版 GGUF | OPEN |
| **Token 处理** | #18881: 在原始生成响应中包含 EOS token | OPEN |
| **内存/缓存** | #18886: 在清理期间保留 MLX 生成panic | OPEN |

---

## 5. 稳定性与回归问题

### 严重 / 高优先级

| Issue | 描述 | 严重程度 | 状态 |
|-------|------|----------|------|
| [#18856](https://github.com/ollama/ollama/issues/18856) | MLX runner panic：qwen3.6:35b-mlx — 0.35.0 回归问题 | **严重** | OPEN |
| [#18885](https://github.com/ollama/ollama/issues/18885) | gemma4:e2b-mlx 上 MLX panic（Mac Mini M6） | **严重** | OPEN |
| [#18846](https://github.com/ollama/ollama/issues/18846) | macOS MLX "Maximum threads" 错误（0.40.0） | **严重** | OPEN |
| [#18869](https://github.com/ollama/ollama/issues/18869) | gpt-oss:latest 上 `ffn_down_exps.weight size overflows` | **严重** | OPEN |

### 中等优先级

| Issue | 描述 | 状态 |
|-------|------|------|
| [#18123](https://github.com/ollama/ollama/issues/18123) | 回归：等待 llama-server 超时（virtio-gpu VM） | OPEN |
| [#18796](https://github.com/ollama/ollama/issues/18796) | 第二次 `ollama run` 卡住（RPI 5, systemd） | OPEN |
| [#18865](https://github.com/ollama/ollama/issues/18865) | Clef：n_ubatch 强制设为 n_ctx 导致 OOM | OPEN |
| [#18830](https://github.com/ollama/ollama/issues/18830) | GGUF 迁移后出现重复模型条目 | OPEN |

### 云端特定问题

| Issue | 描述 | 状态 |
|-------|------|------|
| [#18880](https://github.com/ollama/ollama/issues/18880) | 云模型返回空响应 | OPEN |
| [#18853](https://github.com/ollama/ollama/issues/18853) | deepseek-v4.1-flash:cloud 大图输入时返回 500 | OPEN |
| [#12362](https://github.com/ollama/ollama/issues/12362) | 云模型忽略 JSON 回复 schema | OPEN |

---

## 6. 这对应用开发者的意义

1. **稳定性优先的场景请避免在 0.40.x 上使用 MLX 模型。** 多位用户报告 qwen3.6:35b-mlx 和 gemma4:e2b-mlx 在 Apple Silicon 上出现 panic。在修复上线前，建议降级到 0.35.x 作为临时方案。

2. **GGUF 迁移现在自动完成。** 旧版 GGUF 模型将在首次加载时转换。首次运行延迟可能增加，但兼容性得到改善。

3. **响应 ID 空间受限。** Issue #18665 指出 OpenAI 兼容端点仅使用 999 个唯一 ID（`chatcmpl-0` 到 `chatcmpl-998`）。高吞吐量应用可能出现冲突。

4. **工具循环的上下文窗口问题持续存在。** PR #17894 解决了多步工具调用超出上下文时返回 "no user query found" 错误的问题。

5. **Codex 集成改进。** PR #18887 将把已安装模型纳入 Codex 选择器，#18875 添加了模型/代理选择的主菜单。

---

*基于 2026-10-09 的 GitHub 数据生成*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate this LiteLLM digest into Chinese, preserving the exact Markdown structure while using natural technical Chinese register. Let me go through and translate carefully.

Key points:
1. Keep all Markdown structure exactly the same
2. Keep URLs, code references, issue numbers as-is
3. Use natural technical Chinese - like a Chinese developer newsletter
4. No preamble, no explanation, just the translation
5. Preserve formatting like tables, lists, etc.

Let me translate section by section:

## 1. Today's Highlights

**RAM leak remains the dominant issue** — two high-comment issues (#12685 closed with 61 comments, #27954 open with 12 comments) document progressive memory growth requiring pod restarts. The team shipped new telemetry infrastructure (`AggregatingSink`, fixed-bucket histograms) to improve observability into request patterns that may help diagnose such issues. Meanwhile, the project continues expanding multi-provider support with Microsoft 365 Copilot OAuth and per-user GitHub OAuth now in progress.

## 2. Releases & Breaking Changes

## 3. New Model & Hardware Support

## 4. Performance & Optimization

## 5. Stability & Regressions

## 6. What This Means for Application Developers

Let me translate each part now.</think>

# LiteLLM 速报 — 2026-10-09

## 1. 今日焦点

**内存泄漏仍是首要问题** — 两个高评论量 issue（#12685 已关闭，61 条评论；#27954 进行中，12 条评论）记录了持续增长的内存占用，需要重启 Pod 才能恢复。团队发布了新的遥测基础设施（`AggregatingSink`、固定桶直方图）来增强请求模式的可观测性，有助于诊断此类问题。同时，项目继续扩展多提供商支持，Microsoft 365 Copilot OAuth 和 GitHub 按用户 OAuth 正在推进中。

---

## 2. 版本发布与破坏性变更

| 版本 | 说明 |
|------|------|
| [v1.106.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.106.0-dev.2) | 开发版 |
| [v1.105.0-rc.3](https://github.com/BerriAI/litellm/releases/tag/v1.105.0-rc.3) | 发布候选版 |
| [v1.104.2](https://github.com/BerriAI/litellm/releases/tag/v1.104.2) | 稳定版 |
| [v1.102.4](https://github.com/BerriAI/litellm/releases/tag/v1.102.4) | 稳定版 |
| [v1.101.6](https://github.com/BerriAI/litellm/releases/tag/v1.101.6) | 稳定版 |

**所有 Docker 镜像现已使用 cosign 签名** — 可使用 commit `0112e53` 中的公钥验证。本周期无破坏性变更。

---

## 3. 新模型与硬件支持

- **GPT-6.1 Sol (AWS Bedrock)** — 从 Bedrock 模型卡片读取上下文窗口（100 万输入 token），添加 ultrafast 层级定价（[PR #45488](https://github.com/BerriAI/litellm/pull/45488)、[PR #45482](https://github.com/BerriAI/litellm/pull/45482)）
- **Grok 4.7 Claude Code on Bedrock** — 修复 Converse 和原生 Chat Completions 的工具结果处理（[PR #45473](https://github.com/BerriAI/litellm/pull/45473)）
- **Vertex AI Model Garden** — 改由 `generateContent` 适配器路由（[PR #41836](https://github.com/BerriAI/litellm/pull/41836)）
- **Gemma 4** — 已加入 `model_prices_and_context_window.json`（[Issue #26973](https://github.com/BerriAI/litellm/issues/26973)）

---

## 4. 性能与优化

- **遥测聚合** — 新增 `AggregatingSink` 将每个请求事件折叠为维度键控的行，保留 token 汇总和固定桶延迟直方图，在保持流量形态可见性的同时降低数据量（[PR #45487](https://github.com/BerriAI/litellm/pull/45487)）
- **遥测接收器协议** — 新增 `litellm/telemetry/` 目录，使用冻结记录类型作为稳定的白名单接口（[PR #45484](https://github.com/BerriAI/litellm/pull/45484)）
- **路由器时钟注入** — `LowestCostLoggingHandler` 现支持注入时间，避免测试中跨分钟边界的竞态条件（[PR #45486](https://github.com/BerriAI/litellm/pull/45486)）
- **按调用 TLS 配置** — SSL 验证现应用于 HTTP 客户端而非泄漏到请求体（[PR #38245](https://github.com/BerriAI/litellm/pull/38245)）
- **扩容指南** — 开放请求文档：500M TPM + PostgreSQL 重度流量场景（[Issue #38081](https://github.com/BerriAI/litellm/issues/38081)）

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| **高** | 运行时内存泄漏 — 重负载下数天后 Pod 崩溃 | [#12685](https://github.com/BerriAI/litellm/issues/12685) 已关闭，[#27954](https://github.com/BerriAI/litellm/issues/27954) 进行中 | — |
| **高** | GitHub BYOK token 计数返回零（v1.103.1 → v1.104.2 回归） | [#45422](https://github.com/BerriAI/litellm/issues/45422) 进行中 | — |
| **中** | Mistral 内容作为列表分块返回时被截断为最后一个 `text` 块 | [#45378](https://github.com/BerriAI/litellm/issues/45378) 进行中 | — |
| **中** | Bedrock `CountTokens` 不支持 Claude Opus/Sonnet 5 → token 数低估 | [#37102](https://github.com/BerriAI/litellm/issues/37102) 进行中 | — |
| **中** | Spend 缓存丢失并发增量 — 用户/团队/标签消费统计不足 | [#43491](https://github.com/BerriAI/litellm/issues/43491) 进行中 | — |
| **中** | Budget 限制重置可能拆分计数器与重置时间戳状态 | [#36941](https://github.com/BerriAI/litellm/issues/36941) 进行中 | — |
| **低** | 启用 `turn_off_message_logging` 时缺少 OTel `gen_ai.operation.name` | [#45284](https://github.com/BerriAI/litellm/issues/45284) 进行中 | — |
| **低** | Google GenAI 流式响应首块之前被丢弃时不重试 | [#45457](https://github.com/BerriAI/litellm/issues/45457) 进行中 | — |

---

## 6. 这对应用开发者意味着什么

1. **如果你在生产环境运行 LiteLLM** — 密切监控内存使用；内存泄漏可能在大量请求持续数天后显现。做好 Pod 重启计划或等待 v1.106 修复。

2. **如果你使用 GitHub Copilot BYOK** — v1.104.2 中 token 计数功能损坏；继续使用 v1.103.1 或在依赖消费日志前等待修复。

3. **如果你使用 Bedrock 模型** — GPT-6.1 Sol 现已修正上下文窗口（100 万 token）和 ultrafast 定价；确保配置读取了更新的模型卡片值。

4. **如果你需要 Microsoft 365 Copilot** — 基于 OAuth 的新提供商即将上线（[PR #45158](https://github.com/BerriAI/litellm/pull/45158）），支持用于 Graph Copilot Chat API 的委托用户令牌。

5. **如果你使用流式响应 + `logprobs`** — vLLM 后端的流式 bug 已关闭；如果遇到 `PydanticSerializationError`，请确认版本包含该修复。

6. **如果你依赖消费统计** — spend 缓存并发 bug 意味着并发请求可能少计；如需精确的按用户消费，请检查日志。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the Unsloth digest from English to Chinese. Let me analyze the content and translate it while:

1. Preserving all the Markdown structure exactly
2. Keeping all URLs, numbers, issue/PR references, code identifiers as-is
3. Using natural technical Chinese register
4. Not adding any preamble or explanation

Let me go through each section:

## 1. Today's Highlights
- Need to translate "Decision Model training" - 决策模型训练
- "native ComfyUI models" - 原生 ComfyUI 模型
- "diffusion improvements" - 扩散模型改进
- "enhanced browser" - 增强的浏览器
- "TRL PPOTrainer compatibility" - TRL PPOTrainer 兼容性
- "MoE expert memory management" - MoE 专家内存管理
- "React/TypeScript live previews" - React/TypeScript 实时预览

## 2. Releases & Breaking Changes
- Table needs to be preserved with translated content

## 3. New Model & Hardware Support
- Table translation

## 4. Performance & Optimization
- Table translation

## 5. Stability & Regressions
- Table translation with proper Chinese technical terms

## 6. What This Means for Application Developers
- Translate this section with natural Chinese technical writing

Let me translate this now:</think>

# Unsloth 动态速览 — 2026-10-09

## 1. 今日焦点

v0.1.905-beta 版本推出了**决策模型训练**功能，支持将任意文本或视觉 LLM 转化为 Jev 风格的决策模型，准确率从 30% 提升至 80%。Studio 同时获得原生 ComfyUI 模型支持、扩散模型改进以及增强的桌面浏览器功能。PR 方面，大量工作集中在 TRL PPOTrainer 兼容性修复 (#13108)、MoE 专家内存管理 (#12950, #12951) 以及聊天中的 React/TypeScript 实时预览 (#13039)。

## 2. 版本更新与破坏性变更

| 版本 | 变更内容 | 链接 |
|------|----------|------|
| v0.1.905-beta | **决策模型训练** — 将任意文本/视觉 LLM 转化为决策模型；原生 ComfyUI 模型支持；扩散模型改进；更好的桌面浏览器 | [Release](https://github.com/unslothai/unsloth/releases) |

本 24 小时窗口内未标记明确的破坏性变更。

## 3. 新模型与硬件支持

| 功能 | 详情 | 链接 |
|------|------|------|
| 决策模型 | 全新微调路径，支持 Jev 风格决策模型，含训练/测试/导出/服务流程 | [Release](https://github.com/unslothai/unsloth/releases) |
| ComfyUI 模型 | Desktop/Studio 原生支持 | [Release](https://github.com/unslothai/unsloth/releases) |
| Gemma 4 safetensors 格式 | 网络搜索和工具结果现已可用 | [#13096](https://github.com/unslothai/unsloth/pull/13096) |
| M5 Max (48 GB) | Qwen Image 2.1 Q4_K_M 测试 — 反馈内存不足（待处理） | [#11792](https://github.com/unslothai/unsloth/issues/11792) |

## 4. 性能与优化

| 领域 | 变更内容 | PR / Issue |
|------|----------|------------|
| **MoE 专家内存** | 当 MoE 专家溢出到 RAM 时，`--ubatch-size` 设为 2048（原为 512） | [#12950](https://github.com/unslothai/unsloth/pull/12950) |
| **MoE GPU 缓存** | `--moe-cache-mib auto` 用于将路由专家固定在 VRAM 中 | [#12951](https://github.com/unslothai/unsloth/pull/12951) |
| **PPO 缓冲区泄漏** | 释放 PPO 非必要保留的 1.2 GB 缓冲区 | [#13108](https://github.com/unslothai/unsloth/pull/13108) |
| **滚动性能** | 长对话中鼠标滚轮滚动时消息悬停稳定性改进 | [#13077](https://github.com/unslothai/unsloth/pull/13077) |
| **上下文栏** | 现支持 Ollama 连接填充 | [#13106](https://github.com/unslothai/unsloth/pull/13106) |

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 评论 |
|----------|------|------|------|
| **高** | VLLM 动态量化模型服务 — `AssertionError` 形状不匹配 | [Open](https://github.com/unslothai/unsloth/issues/1886) | 35 条评论；影响量化模型推理 |
| **高** | T4 GPU 训练时 `RuntimeError: PassManager::run failed` | [Closed](https://github.com/unslothai/unsloth/issues/2482) | 19 条评论；Colab T4 特定问题 |
| **中** | GRPO 训练输出乱码/垃圾内容 | [Closed](https://github.com/unslothai/unsloth/issues/1672) | 16 条评论；疑似 EOS token 处理问题 |
| **中** | "LlamaForCausalLM does not accept 'num_items_in_batch'" 修复后 VRAM 激增 | [Closed](https://github.com/unslothai/unsloth/issues/1801) | 15 条评论 |
| **中** | CodeLlama-13b 加载失败 | [Closed](https://github.com/unslothai/unsloth/issues/638) | 15 条评论 |
| **中** | conda 安装后 LLVM `nvvm.shfl.sync.bfly.i32` 错误 | [Closed](https://github.com/unslothai/unsloth/issues/512) | 22 条评论；CUDA/xFormers 版本不匹配 |
| **中** | WSL 24G VRAM 环境下 OOM，显存利用率仅 2/3 | [Closed](https://github.com/unslothai/unsloth/issues/1797) | 7 条评论 |

**已修复问题：**
- TRL PPOTrainer 崩溃、KL 惩罚和重要性比率计算问题 — [#13108](https://github.com/unslothai/unsloth/pull/13108)
- 刷新时导入分支对话父消息优先于子消息 — [#13113](https://github.com/unslothai/unsloth/pull/13113)
- Deep Research 现使用 MCP 服务器搜索工具 — [#13103](https://github.com/unslothai/unsloth/pull/13103)

## 6. 对应用开发者的意义

1. **决策模型现已原生支持** — 如果你正在构建需要结构化决策的智能体工作流，v0.1.905-beta 提供了端到端训练流程，官方声称准确率提升 30%→80%。通过 Unsloth 内置导出功能服务这些模型时，预期延迟会更低。

2. **MoE 推理更加可预测** — 结合 `--ubatch-size 2048` 和 `--moe-cache-mib auto`，在有限 VRAM 下运行 Mixtral 类模型时应能降低尾延迟。如果你正在运行 Qwen-Image-2.1 或类似 MoE 视觉模型，请测试最新的 Studio 构建版本。

3. **PPO/GRPO 训练更加稳定** — #13108 修复解决了 rollout 崩溃、KL 惩罚计算错误以及 1.2 GB 缓冲区泄漏问题。如果你正在使用 TRL 的 PPOTrainer 或 GRPOTrainer，请升级；这消除了 RL 训练期间常见的 OOM 根源。

4. **关注 VLLM 量化问题** — Issue #1886 仍待解决。如果你通过 VLLM 提供量化模型（4-bitbnb、GGUF），在生产使用前请验证你的服务流程。直接使用 HuggingFace pull 路径可行；自定义量化权重可能需要调试。

5. **Studio 用户体验优化** — 长对话滚动性能改进 (#13077)、Ollama 上下文栏 (#13106) 以及 React 实时预览 (#13039) 提升了桌面应用体验。如果你正在构建交互式演示，实时预览功能可实现更丰富的聊天 UI。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*