# AI 基础设施日报 2026-10-30

> 生成时间: 2026-10-30 02:07 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this English technical report into Chinese. I need to:
1. Translate all the content while preserving the exact Markdown structure
2. Keep all technical identifiers, project names, URLs, numbers, code references as-is
3. Use natural technical Chinese (the register of a Chinese developer newsletter)
4. Output ONLY the translation, no preamble or explanation

Let me go through and translate while maintaining the structure and technical accuracy.</think>

# 跨项目 AI 基础设施摘要 — 2026-10-30

---

## 1. 生态系统概览

今日的开发活动反映出 AI 推理栈正在走向成熟，各层职责分明。**vLLM 和 SGLang** 持续竞速优化分布式部署的 serving 吞吐量，在 KV 缓存管理和调度器上投入巨大。**llama.cpp** 推动本地推理在异构硬件（Metal、SYCL、Hexagon）上的可移植性。**Ollama** 通过 MLX 改进和更精细的内存调度简化本地部署。**LiteLLM** 专注多提供商网关的可靠性和成本追踪。**Unsloth** 通过 EXL3 量化和多模型 GGUF 支持桥接训练优化与推理服务。该领域正在围绕多后端支持（AMD ROCm、Intel XPU、NPU）进行整合，以满足边缘和数据中心多样化的推理需求。

---

## 2. 活动对比

| 项目 | 发布 (24h) | 重要 Issue | PR 合并 | 发布状态 |
|---------|----------------|----------------|------------|-----------------|
| **vLLM** | 0 | 13 (热门: ViT CUDA graph RFC, DeepSeek SM120 bug, GLM-5.3 性能) | 8+ | 无发布 |
| **SGLang** | 0 | 19 (热门: CI 稳定性, GLM-5.3 FA4 崩溃, DeepSeek-V4 调度器) | 26 | 无发布 |
| **llama.cpp** | 9 | 10 (热门: Metal vs Vulkan, SYCL bf16 Arrow Lake, 混合 LFM2) | 7 | 持续发布 |
| **Ollama** | 0 | 19 (热门: ROCm KV 泄漏, 5s ls 延迟, Claude tool calls) | 26 | 无发布 |
| **LiteLLM** | 1 (v1.108.0-rc.1) | 10 (热门: 流式成本丢失, Claude 清理, Gemini 损坏) | 17 | RC 可用 |
| **Unsloth** | 0 | 7 (热门: 上下文压缩, 核心转储, Windows AMD 提交) | 20+ | 无发布 |

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek V4.1** | ✅ ROCm gfx950 GEMM | ✅ DSC/DSv4 支持 | — | — | — | — |
| **GLM-5.3** | ✅ ROCm Flash 性能 | ✅ 多模态 | — | — | — | — |
| **Qwen3-Next/3.5** | ✅ 融合 QK-Norm+RoPE | — | — | ✅ MLX tool_calls | — | — |
| **Gemma 4** | ✅ MTP 推测 | — | ✅ 支持 | ✅ Embedding 修复 | — | ✅ Flex attention |
| **MiniMax-M3** | ✅ ROCm 层复用 | — | — | — | — | — |
| **LFM3 (Liquid AI)** | — | — | — | ✅ 音频/视频 | — | ✅ 1.7B 请求中 |
| **Mistral Le Chonk** | — | — | ✅ 新模型 | — | — | — |
| **Limite 1B (Violetto)** | — | — | ✅ 新模型 | — | — | — |
| **Sensenova Loop** | — | ✅ 多模态 | — | — | — | — |
| **T-Head PPU** | — | ✅ 路线图 | — | — | — | — |
| **EXL3 量化** | — | — | — | — | — | ✅ 2-8 bit + MoE |
| **Azure AI Foundry Agents v2** | — | — | — | — | ✅ | — |
| **Z.AI** | — | — | — | — | ✅ | — |
| **多 Resident GGUF** | — | — | ✅ Studio 多进程 | — | — | ✅ |

**领先者:** vLLM 在企业模型覆盖上领先；Unsloth 在量化创新上领先（EXL3）；llama.cpp 在硬件可移植性上领先。

---

## 4. 性能前沿

| 优化领域 | 活跃项目 | 重点方向 |
|------------------|-----------------|------------|
| **KV 缓存 / Paged Attention** | vLLM, SGLang, llama.cpp | DiffKV prefill 切片（200K ctx 上 3.0x），分层 offload，P2P 错误处理 |
| **调度器 / 批处理** | vLLM, SGLang | DP prefill 延迟器，PP decode 均衡，优先级驱逐，最少负载路由 |
| **量化** | llama.cpp, Unsloth | MXFP4 Metal, SYCL DPAS q4_0/q8_0, EXL3 2-8 bit + MoE, 融合 NF4 decode |
| **分布式 / PP** | vLLM | 多 GPU PP 微批处理，跨 DP prefill 协调 |
| **NPU / 边缘** | SGLang, llama.cpp | Ascend 混合分块，T-Head PPU 路线图，Hexagon CONCAT |
| **本地 / MLX** | Ollama, Unsloth | 并发生成，MLX 内存估算，语音上下文 |
| **网关 / 路由** | LiteLLM | OTPM 预留上限，流式开销消除，跨 API 桥接 |
| **注意力内核** | vLLM, SGLang, Unsloth | Gemma3 flex attention，GDN 混合，Triton 融合内核 |

**热点区域:** KV 缓存优化（全栈），量化多样性（llama.cpp/Unsloth），NPU 扩展（SGLang）。

---

## 5. 层位定位

| 层级 | 项目 | 职责 |
|-------|----------|------|
| **Serving 引擎** | vLLM, SGLang | 生产级高吞吐量推理，P/D 分离，推测解码，KV offload |
| **本地运行时** | llama.cpp, Ollama | 设备端/离线推理，跨平台（Windows/macOS/Linux），嵌入式部署 |
| **网关 / 代理** | LiteLLM | 多提供商 API 统一，成本追踪，重试/限流处理，OpenAI 兼容性 |
| **训练 / 微调** | Unsloth | 量化感知训练，LoRA 微调，GGUF 导出，多模型服务 |
| **Studio / UI** | Ollama, Unsloth | 桌面 GUI，模型管理，嵌入式部署 |

**边界模糊:** Unsloth 现在通过 EXL3 + 多模型 GGUF 桥接训练 → 服务。Ollama 通过 OpenAI 兼容端点桥接本地 → 网关。LiteLLM 增加缓存/路由但不自行执行推理。

---

## 6. 趋势信号

1. **多后端对等已成为标配。** 每个项目现在都明确支持 ≥3 个硬件后端（NVIDIA、AMD ROCm、Intel XPU、Apple MLX、NPU）。差异化现在取决于各后端的性能调优水平，而不仅仅是可用性。

2. **量化碎片化正在加速。** EXL3（Unsloth）、MXFP4（llama.cpp）、IQ2（llama.cpp）以及各种 MoE 感知方案（vLLM）表明不会有单一量化格式主导。应用开发者应该准备好针对每个模型/量化组合评估精度。

3. **流式成本追踪整个行业都有问题。** LiteLLM、vLLM 等在流式成本归属上都有公开 issue。如果您正在构建按请求计费的多租户 SaaS，这是一个全网关层面的已知缺口。

4. **NPU 支持正在加速。** SGLang 的 Ascend 混合分块/EPLB、llama.cpp 的 Hexagon 算子，以及 T-Head PPU 路线图表明生态系统正在为边缘 NPU 芯片上的推理做准备——而不仅仅是 GPU 云。

5. **调度器复杂性正在分化。** vLLM 投资于 PP 均衡 decode、跨 DP prefill 延迟器和优先级驱逐；LiteLLM 投资于最少负载路由和 OTPM 上限。这代表了两种理念：引擎级调度（vLLM）vs 网关级路由（LiteLLM）。

6. **本地 + 多模型正在兴起。** Unsloth 的多 resident GGUF（#10876）和 Ollama 的 MLX 并发生成表明本地推理正在从单一模型 CLI 用法走向多模型编排。

**关注重点:**

- **vLLM:** ViT CUDA graph RFC 结果 → 将定义 Qwen3-VL、Kimi K2.5 的多模态 serving 性能
- **SGLang:** T-Head PPU 支持时间表 → 首个非 NVIDIA/NPU 推理路径
- **llama.cpp:** EXL3 量化精度基准 → 可能改变本地推理质量曲线
- **LiteLLM:** 流式成本追踪修复 → 生产计费准确性关键
- **Ollama:** ROCm Strix Halo 修复 → AMD iGPU 推理可信度
- **Unsloth:** 融合 NF4 decode 生产就绪 → 可接受精度下 2x 吞吐量？

*跨项目摘要基于 2026-10-30 GitHub 活动，涵盖 vLLM、SGLang、llama.cpp、Ollama、LiteLLM 和 Unsloth。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the provided English technical digest about vLLM into Chinese. I need to follow the rules:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate while keeping the structure and technical terms intact.</think>

# vLLM 技术摘要 — 2026-10-30

## 1. 今日要闻

vLLM 在 ROCm/AMD 硬件优化和多模态推理方面持续活跃开发。多个重要的 RFC 已开启，包括 ViT CUDA 图支持和多模态模型，以及针对 DeepSeek V4.1（gfx950）和 GLM-5.3 Flash on ROCm 的多项性能 PR 已合并。Pipeline 并行下的 Qwen3.8-27B 存在关键 bug，调度器也在修复优先级驱逐的边界情况。

---

## 2. 发布版本与破坏性变更

**过去 24 小时内无新版本发布。**

---

## 3. 新模型与硬件支持

| 模型/功能 | 详情 | PR/Issue |
|-----------|------|----------|
| **MiniMax-M3 层** | ROCm：避免在重用 top-k 索引的层中使用未使用的索引缓存 | [PR #64403](https://github.com/vllm-project/vllm/pull/64403) |
| **Intel XPU** | 修复 MooncakeStoreConnector 兼容性 | [PR #62546](https://github.com/vllm-project/vllm/pull/62546) |
| **Qwen3-Next/Qwen3.5** | ROCm：启用融合 QK-norm+RoPE+gate Triton 内核 | [PR #51406](https://github.com/vllm-project/vllm/pull/51406) |
| **DeepSeek V4.1** | ROCm gfx950：针对 32x32 MXFP8 线性层使用 AITER FlyDSL GEMM | [PR #60169](https://github.com/vllm-project/vllm/pull/60169) |
| **GLM-5.3 Flash** | ROCm：消除 kpool 稀疏索引器中的 int32/int64 拷贝 | [PR #63910](https://github.com/vllm-project/vllm/pull/63910) |
| **CPU (MRv2)** | 为非 Triton CPU 后端（Arm, IBM Z）启用 Model Runner V2 | [PR #61995](https://github.com/vllm-project/vllm/pull/61995) |

---

## 4. 性能与优化

| 领域 | 变更 | 影响 | 参考 |
|------|------|------|------|
| **DeepSeek V4.1 MXFP8** | gfx950 上使用 AITER FlyDSL GEMM | **整体吞吐量 +3.7%** | [PR #60169](https://github.com/vllm-project/vllm/pull/60169) |
| **MoE 分组** | 当分组无效果时使用 Triton sigmoid+bias top-k | ROCm 优化 | [PR #63076](https://github.com/vllm-project/vllm/pull/63076) |
| **注意力元数据** | 从 `kv_cache_spec` 源 Triton 元数据构建器几何信息 | 异构模型（如 Gemma 4）现使用更快的 2D 内核 | [PR #56996](https://github.com/vllm-project/vllm/pull/56996) |
| **DiffKV prefill** | SM80 分块：BLOCK_M=128 + KV 分块 64 | 200K 上下文块上 **3.0x 加速** | [Issue #61095](https://github.com/vllm-project/vllm/issues/61095) |
| **调度器 (PP)** | 跨 PP 微批次平衡 decode 批次 | 减少 prefill 对 decode 的干扰 | [PR #50410](https://github.com/vllm-project/vllm/pull/50410) |
| **DP prefill** | 跨 DP prefill 延迟器 (`--dp-prefill-delayer`) | 降低 MoE 混合步骤频率 | [PR #61834](https://github.com/vllm-project/vllm/pull/61834) |
| **NVFP4 量化** | 为 `silu_and_mul_nvfp4_quant` 添加 size-gated PDL | sm90+ 内核优化 | [PR #64494](https://github.com/vllm-project/vllm/pull/64494) |
| **KV cache 性能分析** | 在 KV 缓存大小调整前分析分块 all-to-all | 修复内存预算低估问题 | [PR #61025](https://github.com/vllm-project/vllm/pull/61025) |

**进行中的 RFC：**
- [Issue #38175](https://github.com/vllm-project/vllm/issues/38175)：多模态模型的 ViT 完整 CUDA 图支持（Qwen3-VL、GLM-V、Kimi K2.5）
- [Issue #57406](https://github.com/vllm-project/vllm/issues/57406)：GLM 5.3 性能优化

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 |
|----------|------|------|------|
| **高** | Qwen3.8-27B（GDN 混合）在 PP=3、sm_86 上：前缀缓存时发生非法内存访问（Xid 31） | 待处理 | [Issue #63505](https://github.com/vllm-project/vllm/issues/63505) |
| **高** | Gemma4 MTP 投机解码在引擎初始化时崩溃 — "a and b must have same reduction dim" | 待处理 | [Issue #48848](https://github.com/vllm-project/vllm/issues/48848) |
| **高** | P2P KV 卸载层未在 peer 故障时快速失败 | 待处理 | [Issue #63602](https://github.com/vllm-project/vllm/issues/63602) |
| **中** | 分层 KV 卸载提升每个等待请求（填满 DRAM 池） | 待处理 | [Issue #49902](https://github.com/vllm-project/vllm/issues/49902) |
| **中** | Qwen3.5/Qwen3-Next GDN 预热时使用 torch.compile 崩溃 | 待处理 | [Issue #50046](https://github.com/vllm-project/vllm/issues/50046) |
| **中** | 优先级调度在同一步骤取消已调度的请求 | **已修复** | [PR #59963](https://github.com/vllm-project/vllm/pull/59963) |
| **中** | GLM-5.x（DSA）在 PP 下：重用层读取过期的 top-k 索引 | 待处理 | [Issue #63170](https://github.com/vllm-project/vllm/issues/63170) |
| **低** | 正常关闭期间出现虚假的 EngineDeadError 回溯 | 待处理 | [Issue #48745](https://github.com/vllm-project/vllm/issues/48745) |
| **低** | Kimi-K3 前缀缓存在 1536-token 边界处未命中 | 待处理 | [Issue #50235](https://github.com/vllm-project/vllm/issues/50235) |

---

## 6. 这对应用开发者意味着什么

1. **多模态工作负载**：ViT CUDA 图支持的 RFC（[#38175](https://github.com/vllm-project/vllm/issues/38175））预示着多模态 LLM Serving 即将迎来改进——如果您正在运行 Qwen3-VL 或 Kimi K2.5，请保持关注。

2. **AMD/ROCm 用户**：多项 ROCm 性能提升已合并——DeepSeek V4.1 在 gfx950 上吞吐量提升 +3.7%，GLM-5.3 Flash 优化消除了不必要的类型转换。如果您使用 MI355X 或 gfx950，请考虑升级。

3. **Pipeline 并行用户**：Decode 批次平衡修复（[#50410](https://github.com/vllm-project/vllm/pull/50410)）在使用 PP 时减少了 prefill 干扰——有利于高吞吐量多 GPU 部署。

4. **结构化输出 + 投机解码**：正在审查的 RFC（[#62818](https://github.com/vllm-project/vllm/issues/62818)）解决了输出分布保持问题——如果您同时使用这两个功能，请关注此 RFC。

5. **Intel XPU**：MooncakeConnector 修复已合并（[#62546](https://github.com/vllm-project/vllm/pull/62546)）——Intel 硬件上的分离式 P/D 推理更加稳定。

6. **关注回归问题**：Qwen3.8-27B 配合 PP=3 和前缀缓存存在已确认的正确性 bug（[#63505](https://github.com/vllm-project/vllm/issues/63505)）——在此问题修复前请避免此配置。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate this SGLang digest into Chinese. Let me carefully translate it while:
1. Keeping all Markdown structure (headings, tables, lists, etc.)
2. Preserving all URLs, issue numbers, code references
3. Using natural technical Chinese register
4. Keeping the translation technical and accurate

Let me go through it section by section.</think>

# SGLang 动态 — 2026-10-30

## 1. 今日要闻

今日 SGLang 在后端扩展方面取得重要进展：Ascend NPU 新增多项能力（mixed-chunk 稀疏注意力、动态专家负载均衡），XPU FP8 MoE 支持也已合入。社区正在积极解决 CI 稳定性问题（140+ 条关于 flaky 测试追踪的讨论），同时多个影响 DeepSeek-V4、GLM 模型和 diffusion 流程的正确性 bug 被报告。

## 2. 发布与破坏性变更

过去 24 小时内无新版本发布。

## 3. 新模型与硬件支持

- **T-Head PPU 支持**：路线图 issue（[#37519](https://github.com/sgl-project/sglang/issues/37519)）列出了对 T-Head SAIL（ Zhenwu 810/810E/M890P）的一级支持计划——这是超越 NVIDIA/AMD/Intel 后端的重要扩展。
- **Sensenova Loop 多模态**：新 PR（[#47281](https://github.com/sgl-project/sglang/pull/47281)）为 `sensenova_loop` 添加了原生文本、图像和视频推理支持，这是基于 Qwen3.5 的模型，具备共享权重层重复和多流超连接特性。
- **AMD RDNA3/RDN4**：追踪 issue（[#46900](https://github.com/sgl-project/sglang/issues/46900)）用于 CI 和 gfx1100/gfx1201 上游计划。

## 4. 性能优化

- **XPU 完整 Prefill 图**：PR [#30980](https://github.com/sgl-project/sglang/pull/30980) 为 XPU 添加了完整 prefill 图捕获/回放支持，与 decode 后端契约对齐。
- **XPU FP8 MoE**：PR [#43994](https://github.com/sgl-project/sglang/pull/43994) 通过 `sgl-kernel-xpu` Xe2 W8A16 分组 GEMM 启用 FP8 MoE 分发。
- **AMD DSA 优化**：PR [#39085](https://github.com/sgl-project/sglang/pull/39085) 复用 AITER prefill 元数据跨层，消除 EXTEND 阶段的冗余计算。
- **NPU 混合分块**：PR [#47367](https://github.com/sgl-project/sglang/pull/47367) 在 Ascend DSA 稀疏注意力路径上启用混合分块模式。
- **NPU 动态 EPLB**：PR [#47266](https://github.com/sgl-project/sglang/pull/47266) 在 Ascend 上启用动态专家负载均衡，支持 NZ 布局处理。
- **解码器效率**：PR [#47260](https://github.com/sgl-project/sglang/pull/47260) 通过一次性发送 decode 输入而非每个 emit 行重复，减少每步调度器开销。
- **NPU 注意力优化**：PR [#40890](https://github.com/sgl-project/sglang/pull/40890) 将 `attention_value_scale` 融入 O_proj 权重，消除 MiMo-V2.5-Pro decode/verify 步骤每层约 2ms 的开销。

## 5. 稳定性与回归

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | DeepSeek-V4 调度器在多模态 embedding 路径中 `items_offset_list` 为 `None` 时崩溃（[#47218](https://github.com/sgl-project/sglang/issues/47218)） | OPEN |
| **高** | GLM-5.3-Flash 在 SM120（RTX PRO 6000）上：FA4 注意力在 hybrid extend 崩溃，需使用 Triton 后端（[#42012](https://github.com/sgl-project/sglang/issues/42012)） | OPEN |
| **中** | HiCache 当工作集超过约 3 个长前缀时主机层命中降至零（[#45400](https://github.com/sgl-project/sglang/issues/45400)） | OPEN |
| **中** | Diffusion：LingBot-Video-MoE 在默认层卸载下文本编码崩溃（[#47297](https://github.com/sgl-project/sglang/issues/47297)） | OPEN |
| **中** | `/start_profile` 配合 `profile_by_stage=true` 时 TypeError 崩溃（[#47294](https://github.com/sgl-project/sglang/issues/47294)） | OPEN |
| **中** | Python 3.13 因 `outlines==0.1.11` 固定需要 Rust 工具链（[#47242](https://github.com/sgl-project/sglang/issues/47242)） | OPEN |
| **低** | 当 think-end 标记在 `split_special_tokens` 下拆分时推理语法门失败（[#47205](https://github.com/sgl-project/sglang/issues/47205)） | OPEN |
| **低** | 并行采样流量后 LoRA 适配器卸载死锁（[#36894](https://github.com/sgl-project/sglang/issues/36894)） | CLOSED/inactive |

**CI 稳定性**：Issue [#42752](https://github.com/sgl-project/sglang/issues/42752) 追踪 flaky 测试和 CI 基础设施故障——已有 140+ 条调查讨论。

## 6. 这对应用开发者意味着什么

- **新后端选项**：如果目标是 T-Head 硬件，路线图显示未来会有 SGLang 支持——暂不可用但值得关注。
- **NPU 推理改进**：Ascend 用户受益于混合分块和 EPLB 功能；运行 GLM-5.2/5.3 模型时请验证是否启用了 Triton 后端，因为 FA4 在新版 SM 架构上存在已知问题。
- **XPU 达到对等**：Intel XPU 现已支持完整 prefill 图和 FP8 MoE——适用于 Xe2 部署的生产环境。
- **注意 Python 版本**：Python 3.13 用户因 `outlines` 隐含 Rust 依赖而受阻——建议暂时固定为 3.12。
- **DeepSeek-V4 用户**：多模态偏移崩溃（[#47218](https://github.com/sgl-project/sglang/issues/47218)）影响并发中止流——如果在生产环境中使用 DSV4.1-Flash 配合 VLM 流程，请密切监控日志。

---

*基于 GitHub 数据生成于 2026-10-30*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate this GitHub digest about llama.cpp into Chinese. I need to:
1. Translate all the content into Chinese
2. Keep all Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, issue/PR numbers, code references, and technical terms as-is
4. Use natural technical Chinese register

Let me go through and translate while preserving the structure.</think>

# llama.cpp 速报 — 2026-10-30

## 1. 今日重点

本次发布周期带来了 Metal、SYCL 和 Hexagon 后端的大量优化，同时新增了对 Mistral Le Chonk 和 Limite 1B 等新模型架构的支持。团队持续修复 SYCL 性能回退问题，并继续调查 Metal/Vulkan 跨平台性能差异。

## 2. 发布与变更

| 提交 | 描述 |
|------|------|
| [b11998](https://github.com/ggml-org/llama.cpp/commit/b11998) | Mistral Le Chonk 模型支持；DSA/sdpark 架构扩展 |
| [b11997](https://github.com/ggml-org/llama.cpp/commit/b11997) | 张量暂存缓冲区复用；跳过直接 I/O 弹跳缓冲区 |
| [b11988](https://github.com/ggml-org/llama.cpp/commit/b11988) | Limite 1B (Violetto) 模型支持 |
| [b11978](https://github.com/ggml-org/llama.cpp/commit/b11978) | CUDA 图 comp_padding 修复（仅测试修复） |

未检测到破坏性 API 变更。

## 3. 新模型与硬件支持

- **模型**：Mistral Le Chonk、Limite 1B (Violetto)、Gemma3N、Gemma4
- **量化**：OpenCL IQ2 初始支持（[b11986](https://github.com/ggml-org/llama.cpp/commit/b11986)）
- **后端**：
  - Hexagon：UPSCALE 算子支持（[b11982](https://github.com/ggml-org/llama.cpp/commit/b11982)）
  - SYCL：量化 KV 缓存的 DPAS 闪存注意力（q4_0、q8_0）（[b11980](https://github.com/ggml-org/llama.cpp/commit/b11980)）

## 4. 性能优化

| 领域 | 变更 | 详情 |
|------|------|------|
| **Metal** | MXFP4 矩阵-向量 | 一元/二元/GLU 使用完整线程组；通过 fp16 位技巧解码 fp4（[b11985](https://github.com/ggml-org/llama.cpp/commit/b11985)） |
| **SYCL** | 量化 KV 闪存注意力 | q4_0/q8_0 的 DPAS 内核；小批次解码（1-31 tokens）直接运行闪存注意力（[b11980](https://github.com/ggml-org/llama.cpp/commit/b11980)） |
| **SYCL** | 解量化向量化 | 扩展 Q4_0、K-quants、IQ3、MXFP4 存储（[b11979](https://github.com/ggml-org/llama.cpp/commit/b11979)） |
| **Hexagon** | CONCAT DDR 带宽 | 倍增行块大小；分块 src1 行；vgather 优化（[b11981](https://github.com/ggml-org/llama.cpp/commit/b11981)） |
| **CPU (x86)** | 量化 vec_dot 循环展开 | Q4_0、Q4_K、Q5_K、IQ3_S、IQ3_XXS 内核已展开（[PR #31061](https://github.com/ggml-org/llama.cpp/pull/31061)） |
| **OpenCL** | IQ2 支持 | Adreno 的 AOS/SOA mv、平铺 mm、dp4a（[b11986](https://github.com/ggml-org/llama.cpp/commit/b11986)） |

**进行中**：
- CPU 闪存注意力与 q8_0 KV 缓存平铺内核（[PR #31399](https://github.com/ggml-org/llama.cpp/pull/31399)）
- CUDA 哈达玛/旋转融合（棱镜模型）（[PR #31398](https://github.com/ggml-org/llama.cpp/pull/31398)）

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| **高** | LFM3 response_format + reasoning budget 导致 500 错误 | 已修复 | [PR #31374](https://github.com/ggml-org/llama.cpp/pull/31374) |
| **中** | SYCL 提示词处理在 MoE 场景下比 b11804 慢约 35% | 待处理 | — |
| **中** | SYCL XMX-ESIMD 路径在 Arc Pro B70 上 MoE 提示词慢约 35% | 待处理 | — |
| **中** | Metal bfloat constexpr 转换在 M2 Ultra (macOS 14) 上报错 | 已关闭 | — |
| **低** | JSON schema pattern 配合 minLength/maxLength 被静默丢弃 | 待处理 | [PR #31358](https://github.com/ggml-org/llama.cpp/pull/31358) |
| **低** | 混合 LFM2 协同批处理破坏循环状态 | 待处理 | — |

## 6. 对应用开发者的意义

- **SYCL 用户（Intel GPU）**：闪存注意力和解量化的最新变更可能带来可观的吞吐量提升；若使用 MoE 模型，请留意 Arc Pro B70 上约 35% 的 MoE 回退问题。
- **Metal 用户**：MXFP4 优化应能改善 Apple Silicon 上的令牌生成延迟；请验证自定义内核修改是否保持兼容。
- **JSON schema 用户**：若在工具中使用 `response_format`，请关注 [PR #31395](https://github.com/ggml-org/llama.cpp/pull/31395) 以获取语法冲突修复。
- **混合模型用户**：LFM2/LFM2.5 的协同批处理可能产生错误输出；请运行单序列解码直至问题修复。
- **llama-server 运维**：模型缓存管理功能（[#16393](https://github.com/ggml-org/llama.cpp/issues/16393)）已合并，提供内置方式列出/删除缓存模型。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Simplified Chinese, following the detailed translation rules provided. Let me go through the content carefully and translate it appropriately.

Key points to remember:
- Use Simplified Chinese characters throughout
- Use Chinese punctuation (，。：；""『』)
- Preserve all Markdown structure exactly
- Keep URLs, numbers, issue/PR numbers as-is
- Keep technical terms in English where they're standard in Chinese tech writing
- Use natural technical Chinese register
- No preamble or explanation - just the translation

Let me translate section by section:

Title: # Ollama Digest — 2026-10-30

## 今日要闻
(No translation for "Highlights" - I'll use Chinese)

## Releases & Breaking Changes
- **No new releases** in the last 24 hours.

## 新模型与硬件支持
- Keep the table format

## 性能与优化
- Keep the table format

## 稳定性与回归问题
- Keep the table format

## 这对应用开发者意味着什么
- Keep the numbered list

Let me do the full translation now:</think>

# Ollama 速报 — 2026-10-30

## 今日要闻

Ollama 生态在多后端改进方面持续活跃——MLX 新增并发生成支持和更精细的内存核算，同时多个 OpenAI 兼容性问题（reasoning 保留、空数组响应）正在修复中。值得关注的是，AMD Strix Halo iGPU 上存在 ROCm KV-cache 污染 bug，交互式终端中存在 5 秒超时问题，影响相关平台用户。

---

## 版本发布与破坏性变更

- **过去 24 小时内无新版本发布。**

---

## 新模型与硬件支持

| 主题 | 描述 | 链接 |
|------|------|------|
| **TTS 多语种支持** | 为 `phonon:40m-multilingual` 模型添加韩语支持的特性请求 | [#19295](https://github.com/ollama/ollama/issues/19295) |
| **三元量化** | 请求支持 Bonsai 2 三元量化 | [#19388](https://github.com/ollama/ollama/issues/19388) |
| **原生视频 I/O** | Windows 原生音频/视频输入输出特性请求（用于 LFM3-Omni、phonon） | [#19390](https://github.com/ollama/ollama/issues/19390) |
| **LFM3-Omni 流式音频** | 通过 `/api/chat` 和 `ollama run --audio` 实现原生文本到音频流式输出提案 | [#19396](https://github.com/ollama/ollama/issues/19396) |

---

## 性能与优化

| 领域 | 变更 | PR |
|------|------|-----|
| **MLX 并发生成** | 在 MLX 后端支持通过 `OLLAMA_NUM_PARALLEL` 实现多并行请求 | [#19197](https://github.com/ollama/ollama/pull/19197) |
| **MLX top-k 排序** | 对长 top-k 行（>2048 值）分块排序，减少 Metal 上的多轮归并开销 | [#19392](https://github.com/ollama/ollama/pull/19392) |
| **MLX draft 控制** | 新增 `draft_num_predict=0` 用于禁用投机解码以进行基准测试 | [#19391](https://github.com/ollama/ollama/pull/19391) |
| **MLX 重复限制** | 出现 101 个相同 token 后中止生成，防止无限流式循环 | [#19398](https://github.com/ollama/ollama/pull/19398) |
| **MLX 加载进度** | 为长时间模型加载实现进度报告和卡顿检测 | [#17834](https://github.com/ollama/ollama/pull/17834) |
| **VRAM 预测修正** | 不再将 CPU 驻留的输入张量计入 VRAM 估算，提升内存调度精度 | [#19393](https://github.com/ollama/ollama/pull/19393) |
| **多模型内存核算** | 修复了投机草稿模型和混合注意力模型在多模型场景下的内存核算 | [#17857](https://github.com/ollama/ollama/pull/17857) |
| **CPU-only runner 保护** | 永不将 CPU-only runner 驱逐以满足 GPU 内存预测 | [#19284](https://github.com/ollama/ollama/pull/19284) |
| **Embedding 媒体顺序** | 修复了 Gemma 4 多模态 Embedding——媒体 token 现已在正确位置交错 | [#19334](https://github.com/ollama/ollama/pull/19334) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 链接 |
|----------|------|------|------|
| **高** | **ROCm KV-cache 污染** — 在 AMD Strix Halo iGPU（gfx1151）上，顺序调用时响应会被前一个请求的内容污染 | Open | [#17847](https://github.com/ollama/ollama/issues/17847) |
| **高** | **5 秒 `ollama ls` 延迟** — stdout 上的 `pselect6` 超时导致交互式终端中 5 秒延迟，管道输出时约 14ms | Open | [#15597](https://github.com/ollama/ollama/issues/15597) |
| **中** | **CUDA 预热失败** — Windows RTX 5070 Ti 上偶发"共享对象初始化失败"，静默回退到 CPU buffer | Open | [#17380](https://github.com/ollama/ollama/issues/17380) |
| **中** | **模型回滚** — 更新后没有 UI 机制将模型恢复到之前的版本 | Open | [#19385](https://github.com/ollama/ollama/issues/19385) |
| **中** | **MXFP4 GGUF 溢出** | 已关闭（已在近期版本修复） | [#19375](https://github.com/ollama/ollama/issues/19375), [#18869](https://github.com/ollama/ollama/issues/18869) |
| **中** | **Tool call 回归** — `go_template` 为 Qwen3 tool call 静默丢弃 assistant turns；`llama.cpp` 模板正常工作 | Open | [#19377](https://github.com/ollama/ollama/issues/19377) |
| **中** | **MLX tool_calls bug** — Qwen3 MLX 模型仅在 `content` 为空时输出 tool_calls | Open | [#19353](https://github.com/ollama/ollama/issues/19353) |
| **低** | **OLLAMA_NUM_PARALLEL 被忽略** — 设置 `OLLAMA_NUM_PARALLEL=1` 无法阻止并行会话 | Open（需要更多信息） | [#19262](https://github.com/ollama/ollama/issues/19262) |

---

## 这对应用开发者意味着什么

1. **MLX 后端日趋成熟** — 并发生成、草稿控制和加载进度报告使 MLX 更适用于生产环境的 Apple Silicon 部署。如果你在 M 系列 Mac 上运行，新加入的并行选项可降低高负载下的首 token 延迟。

2. **OpenAI 兼容层正在加固** — 多个 PR 修复了边缘情况：空 embedding 数组现在返回 `[]` 而非 `null`（#19387），content 数组中的 reasoning 被保留（#19384），无效 content 类型与 tool call 组合现被拒绝并返回错误（#19389）。如果你使用 LangChain、LiteLLM 或 OpenAI SDK 封装器，这些修复减少了静默数据丢失。

3. **内存调度更加精确** — VRAM 预测修正（#19393）和 CPU-runner 保护（#19284）应减少多 GPU 和混合 CPU/GPU 设置中的意外模型卸载。如果你曾遇到意外的模型卸载问题，可能已得到解决。

4. **关注 ROCm bug** — 在 AMD Strix Halo iGPU 上运行时，请注意当前请求隔离功能失效；响应可能在会话间泄露。在修复前请避免在该配置上进行敏感工作。

5. **Audio 字段被静默忽略** — `/api/chat` 端点当前会丢弃多模态模型的 `audio` 字段且不报错（#19378）；暂时使用 `images` 字段作为解决方案。修复正在开发中（#19397）。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the provided English LiteLLM Daily Digest into Chinese, following specific rules:
- Output ONLY the translation, no preamble, no explanation, no markdown fences
- Preserve the Markdown structure exactly
- Keep technical terms, URLs, issue/PR references, code blocks, numbers, dates as-is
- Use natural technical Chinese register

Let me translate this carefully while preserving all formatting.</think>

# LiteLLM 每日简报 — 2026-10-30

## 今日要闻

LiteLLM v1.108.0-rc.1 已发布，现已支持通过 cosign 验证 Docker 镜像。性能优化工作已合并，消除了流式传输期间 pydantic 中虚假 AttributeError 的抛出；与此同时，多个与流式响应成本跟踪相关的问题仍然活跃——包括 OpenRouter 成本丢失和零成本日志记录 bug，影响了支出/预算计算。

---

## 版本发布与破坏性变更

| 版本 | 说明 |
|------|------|
| **v1.108.0-rc.1** | 发布候选版，现已支持通过 cosign 验证 Docker 镜像（密钥：`e82a3c6`）。 |

- **破坏性变更：** PR #35600 改变了按秒计费的转录方式 — Deepgram、Groq Whisper 和 Vertex Chirp 等模型现在按秒计费，而非之前的 $0.006/分钟。如果你的成本仪表盘使用了这些提供商，请确保已更新计费逻辑。
- **破坏性变更：** PR #49167 将 MCP token 准入修复回填到 rc/1.108.0；依赖项中 ddtrace 从 4.11.0 升级到 4.15.6。

---

## 新模型与硬件支持

| 功能 | PR | 详情 |
|------|-----|------|
| **Azure AI Foundry Agents v2** | #25372 | 支持 Responses API 的 `agent_reference` — 按名称/版本引用代理。 |
| **Z.AI 模型** | #48335 | 新增 `response_format` 和 `max_completion_tokens` 支持；已添加 GLM-5-V-Turbo 定价。 |
| **CLF AI Gateway** | #39324 | 新增 OpenAI 兼容提供商，提供 10 个开放权重模型。 |
| **Kimi K3、Inkling、Tinker** | #33921 | 功能请求：原生支持（Moonshot AI、Thinking Machines Lab 平台）。 |
| **Soniox STT-RT-V5** | #43677 | 功能请求：实时流式 STT（WebSocket）。 |
| **Vertex AI Claude 批处理** | #45715 | Vertex 上的 Claude 模型现使用 Anthropic 原生行格式进行批处理推理。 |

---

## 性能与优化

| PR | 领域 | 变更 |
|----|------|------|
| **#49166** | 流式传输 | **停止在 pydantic 中抛出已捕获的 AttributeError** — 来自 OpenAI/Azure 的每个流式块之前都会在 pydantic 内部因慢路径字段写入而抛出/捕获约 12 个 Python 异常。这是纯粹的 CPU 开销，现已消除。 |
| **#49054** | 路由器 | 当未指定 `max_tokens` 时，将 OTPM 预留上限设为 otpm（或部署上限）的 1/4；在每次调用后协调 token 计数器，防止高 max-output 模型出现 429 错误。 |
| **#47484** | 最低负载路由 | 立即预留选中的部署，使突发请求分布在多个部署上，而非堆积在单一部署。 |
| **#46707** | 跨 API 桥接 | 重构为调用原生执行器，而非重新进入 `acompletion`/`aresponses`，减少 hook/重试重复。 |

---

## 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 备注 |
|------|----------|------|------|
| **#16021** OpenRouter 流式传输成本丢失 | 高 | 开放 | 18 条评论。`usage.cost` 中的成本在流式传输时未保留 — 非流式传输正常工作。 |
| **#48937** 上游报告 `usage.cost: 0` 时流式完成记录为 $0 | 高 | 开放 | 即使实际成本在其他地方报告，支出/预算仍读取 $0。 |
| **#47533** 忽略非流式调用中 provider 报告的 `usage.cost` | 高 | 开放 | 带成本的 OpenAI 兼容上游导致记录 $0 支出。 |
| **#35829** 未验证成本单位导致的幻影支出 | 中 | 已关闭 | 非美元计价的成本值导致天文数字的幻影支出；现已验证单位。 |
| **#25869** `stream_chunk_builder` 破坏 Gemini `server_side_tool_invocations` | 中 | 开放 | Gemini + 流式 + 工具的后续轮次导致"工具调用上下文损坏"。 |
| **#22159** 模块导入时发起 HTTP GET | 中 | 已关闭 | 延迟初始化现已可用 — 避免导入时的慢速网络调用。 |
| **#34805** 内存支出缓冲区在代理关闭时丢弃 | 中 | 开放 | 无 Redis 时 `update_spend` 数据静默丢失。 |
| **#38180** n>1 流式请求被记录为一条合并完成 | 中 | 已关闭 | 流式中的多个完成现已在日志中正确分离。 |

**已合并修复：**
- #48080 — LiteAdmin MCP 路由权限现已强制执行
- #31610 — Redis 语义缓存已修复（#6954 引入的回归）

---

## 这对应用开发者意味着什么

1. **流式传输中的成本跟踪不可靠。** 如果你依赖 LiteLLM 内置的流式请求成本跟踪（OpenRouter、OpenAI 兼容网关），预期值将为 $0或不准确。这会影响预算执行。在 #16021/#48937 解决之前，请在应用层跟踪成本。

2. **Docker 镜像验证可用。** 部署前使用 cosign 验证 LiteLLM 镜像：
   ```bash
   cosign verify --key <pubkey> ghcr.io/berriai/litellm:v1.108.0-rc.1
   ```

3. **最低负载路由改进。** 如果使用 `routing_strategy: least_busy`，突发请求现在分布更好 — 高并发下争用更少。

4. **按秒计费的 STT 账单变更。** 如果你通过 LiteLLM 使用 Deepgram/Groq Whisper/Vertex Chirp，你需要更新仪表盘中的成本计算 — 现已改为按秒计费。

5. **支持 Azure AI Foundry v2 代理。** 如果你部署 Microsoft Foundry Agents，你现在可以通过 LiteLLM 路由，并使用 `agent_reference` 支持。

6. **Claude 工具调用可能损坏**（#19858、#24498）。如果通过 OpenRouter/Vertex 使用 Claude + 工具，请验证响应 — 报告了空内容或净化消息。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the Unsloth digest to Chinese. Let me analyze the content and translate it while preserving the structure and technical accuracy.

Key points to translate:
- Keep headings, lists, tables as-is
- Keep code blocks, URLs, issue/PR references, file paths, API identifiers in original form
- Use natural technical Chinese, like a Chinese developer newsletter
- Output ONLY the translation, no preamble or explanation

Let me translate section by section:</think>

# Unsloth 要闻 — 2026-10-30

## 今日要闻

Gemma 3 的 flex attention 路径完成了重要的性能优化工作，涉及两个 PR，针对 L4/A10/RTX 3090/4090/L40S 等显卡上短 prompt（17-127 tokens）的共享内存 tile 配置进行了调整。EXL3（ExLlamaV3）量化后端 PR (#7115) 持续推进，新增 2/3/4/6/8 位及分数位宽量化，支持 MoE 模型（transformers 5 下 bitsandbytes 无法处理此类模型）。多 GGUF 模型常驻功能已合并 (#10876)，现在支持在独立的 llama-server 进程中并行托管多个 GGUF 模型。

---

## 版本发布与破坏性变更

过去 24 小时内无版本发布。

---

## 新模型与硬件支持

- **LFM3-1.7B 支持请求** — 新 Liquid AI LFM3 系列，使用表达性骨干架构 (#15588) | 👍 10
- **EXL3 量化后端** — 支持 2/3/4/6/8 位及分数位宽量化；支持 MoE 模型，而 bitsandbytes 无法处理 (#7115)
- **多 GGUF 模型常驻** — Studio 现在可让多个不同的 GGUF 模型同时常驻，各自运行在独立的 llama-server 进程中 (#10876) | 已关闭
- **MiniCPM-V-4.7-1B Vulkan** — 文本生成失败问题修复 (#14987) | 已关闭
- **VibeVoice GGUF 加载** — 移除了 audio.cpp 无法加载的 q4-ios 变体 (#16048)

---

## 性能与优化

- **Gemma 3 flex attention** — 短 prompt（17-127 tokens）现在在 sm86/sm89 卡上使用编译后的 flex attention，而不是回退到 eager math_attention (#16041, #16049)
- **融合 NF4 解码** — 通过 `UNSLOTH_DECODE_FUSED_NF4=1` 启用，可为 4 位 Llama 模型在 batch size 为 1 时带来 1.6-2.3 倍的每 token 提速 (#16032)
- **Qwen3-ASR 内存降低** — 新增"语音上下文"设置（Auto、1K-64K），可将典型录音场景的内存从约 8.7 GiB 降至约 2.0 GiB (#15810)
- **MLX 内存估算修复** — 现在即使 KV cache 已量化，也会正确计算注意力分数的全宽度内存 (#16021)
- **混合 token 计数** — 密集估计保护 + 大型对话的超时缩放读取 (#15857)

---

## 稳定性与回归问题

- **更新后核心转储** — 模型在几轮后停止响应；弹出时触发核心转储。调查进行中 (#14411) | 已关闭
- **上下文压缩失败** — 长对话停止压缩，导致约 2 分钟后超时出现"消息过长"错误 (#15800) | 修复见 #15857
- **Windows AMD 提交费用** — llama-server 即使 GGUF 已在 VRAM 中，仍在 32 GiB 机器上保持约 16 GiB 提交，耗尽页面文件 (#16015) | 修复 PR #16046
- **MLX 内存高估** — 报告显示 69.7 GiB，但模型实际可在 24 GiB Mac 上加载 (#15935)

---

## 这对应用开发者意味着什么

1. **多模型 GGUF 服务** — 应用现在可以并发运行多个 GGUF 模型，各自在独立进程中，支持热切换而无需重新加载。

2. **EXL3 量化即将到来** — 将提供更细粒度的量化控制（2-8 位 + 分数位宽）和 MoE 支持，适用于内存受限的部署场景。

3. **4 位 Llama 解码提速** — 设置 `UNSLOTH_DECODE_FUSED_NF4=1` 可使 batch-1 推理吞吐量接近翻倍；生产使用前请评估准确性。

4. **Apple Silicon 内存预算** — MLX 内存估算现在会计入注意力分数存储；如果之前依赖旧估算，请重新验证 VRAM 预算。

5. **语音输入内存** — 如使用 Qwen3-ASR，新的语音上下文设置可将 ASR 内存降低超过 75%（针对短录音）。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*