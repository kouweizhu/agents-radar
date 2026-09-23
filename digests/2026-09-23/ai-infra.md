# AI 基础设施日报 2026-09-23

> 生成时间: 2026-09-23 00:53 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the cross-project comparison report into Chinese. I need to:
1. Translate all text content while keeping technical terms in English
2. Preserve the markdown structure exactly
3. Use natural technical Chinese suitable for a developer newsletter

Let me go through the document and translate it while maintaining the structure and technical accuracy.

I'll translate the headings, table content, lists, and narrative text while:
- Keeping project names, version numbers, issue/PR numbers in English
- Keeping URLs and code identifiers as-is
- Using natural Chinese technical writing style
- Preserving the exact markdown structure including tables

Let me do this translation carefully.</think>

# 跨项目对比报告 — AI 推理生态

## 1. 生态概览

今日的发布活动反映了推理技术栈的成熟度提升，各层定位日益清晰。最值得关注的是 **DeepSeek-V4.1 支持同时在 vLLM 和 SGLang 落地**，两者选择了不同的量化路线（vLLM 采用 MXFP8，SGLang 采用候选索引器）。与此同时，llama.cpp 继续推进 Vulkan/SYCL 后端的本地推理能力，Ollama 强化 Apple Silicon 优化，LiteLLM 通过安全加固巩固其网关地位。Unsloth 则作为训练到推理的桥梁，推出了 NVFP4 和 bitsandbytes 集成。

统一的主题：**量化 + 分布式 + 多模态** 是所有六个项目的交汇点。

---

## 2. 活动对比

| 项目 | 关键问题（开放） | 合并 PR（24h） | 发布（24h） |
|---------|-------------------|------------------|----------------|
| **vLLM** | 15+（GLM-5.3 解码回退、XPU TP2、Hybrid Mamba） | 15+ | ✅ v0.30.0 |
| **SGLang** | 10+（EAGLE + MoE 崩溃、DFlash KV、RL 死锁） | 12+ | ❌ 无 |
| **llama.cpp** | 6（Qwen3.5 崩溃、投机解码分歧） | 15 commits | ❌ 无 |
| **Ollama** | 10+（Qwen 流式输出、RTX 50 CUDA、MLX 结构化输出） | 8+ | ❌ 无 |
| **LiteLLM** | 10（速率限制重复计数、指标 PII、预算重置） | 10+ | ✅ v1.102.0 |
| **Unsloth** | 8（AMD RDNA1、多 GPU、ROCm VM 错误） | 8+ | ✅ 3 个 beta |

**要点**：vLLM 发布速度领先；llama.cpp 提交量居首。LiteLLM 和 Unsloth 各发布了一个版本。SGLang 今日处于维护模式，未正式发布。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------|------|--------|-----------|--------|---------|
| **DeepSeek-V4.1-Flash** | ✅ MXFP8 KV | ✅ 候选索引器 | — | — | — |
| **DeepSeek-V4.1** | — | ✅ TRT-LLM attention | — | — | — |
| **Kimi-K3 / K3** | ✅ MI355X 测试组 | ✅ MXFP4 via Quark | — | — | — |
| **Qwen-Image-2.1** | — | — | — | — | ✅ 本地执行 |
| **Gemma 4** | ✅ 共享内存限制 | — | — | ✅ 动态分辨率 | — |
| **GLM-5.3-Flash** | ⚠️ 解码回退 | ✅ Vision 支持 | — | — | — |
| **IQ4_NL** | — | — | ✅ Flash attention | — | — |
| **LongCat-Flash-Lite-Sparse** | — | — | — | — | ✅ 加载中 |
| **MIMO v2.5** | — | — | — | 📋 已请求 | — |

**领先者**：**vLLM 和 SGLang 并列领先**前沿模型支持，两者采取不同的优化路径。Unsloth 在 DiT/视频模型的训练到推理桥接方面独占优势（NVFP4、VAE 编译）。

---

## 4. 性能前沿

| 优化领域 | 领先项目 | 关键工作 |
|------------------|------------------|----------|
| **KV Cache 量化（MXFP8/FP4）** | vLLM、SGLang、Unsloth | DeepSeek-V4.1 MXFP8 KV、NVFP4 每层策略 |
| **分布式服务（TP/EP/DCP）** | vLLM、SGLang | Helix 并行化、all-to-all EP、DCP 目标索引 |
| **内核优化（Triton/CUDA）** | vLLM、llama.cpp、Unsloth | Triton prefill-attention tile、IQ1_M 前缀和、推理块 2× |
| **Vulkan/SYCL（AMD/Intel）** | llama.cpp | Xe flash attention（Xe2/Xe3）、IQ3 重排序、MoE XMX |
| **MLX（Apple Silicon）** | Ollama、Unsloth | Qwen 3.8 prompt +18%、动态图像 token |
| **成本/预算追踪** | LiteLLM | Redis pipeline await、Rust 成本计算 |

**前沿集中度**：今日最高频的优化工作集中在 **KV cache 量化 + 分布式并行**——两者都需要模型架构与服务基础设施的紧密协同设计。

---

## 5. 层级定位

| 层级 | 项目 | 主要角色 |
|-------|----------|----------|
| **生产服务引擎** | vLLM、SGLang | 高吞吐量多 GPU 推理、PD 分离 |
| **本地推理运行时** | llama.cpp | 跨平台 CPU/GPU/Metal/Vulkan，无服务器 |
| **本地应用运行时** | Ollama | 面向终端用户的嵌入式服务器、MLX 加速 |
| **网关 / 代理** | LiteLLM | 多提供商路由、成本追踪、认证 |
| **训练 / 微调** | Unsloth | QLoRA、DPO、NVFP4 训练 + 检查点转换 |

**澄清说明**：vLLM 和 SGLang 处于同一层级但优化方向不同——vLLM 侧重广度（CUDA、TGI 兼容），SGLang 侧重深度（DeepSeek-V4 优化、DCP/Helix）。

---

## 6. 趋势信号

### 应用/代理开发者应关注

| 信号 | 影响 |
|-----------|----------|
| **GLM-5.3-Flash 解码退化** | 在修复前，避免在长时间多轮代理场景中使用 GLM——影响 vLLM 和 SGLang |
| **MXFP8/FP4 KV 成为标准** | 前沿模型（DeepSeek、Kimi）越来越多使用块浮点格式；确保你的服务层支持 |
| **AMD ROCm 热度上升** | Kimi-K3 MXFP4 on ROCm、Intel Xe Vulkan 内核——多样化正在推进但稳定性参差不齐 |
| **EAGLE + MoE 崩溃** | 投机解码 + 融合 MoE 不稳定；生产环境中 GLM 部署避免使用 |
| **LiteLLM 指标 PII 泄露** | 多租户代理安全加固——检查你的 `/metrics` 端点 |
| **多 GPU 微调仍不成熟** | Unsloth Studio 和 vLLM MTP 都有多 GPU 缺口；单 GPU 或 TGI 仍更安全 |
| **Apple Silicon 推理持续改进** | Ollama/Unsloth MLX 收益（prompt 速度提升 18%+）使本地 MacBook 推理日益可行 |

### 行业走向

生态正在向三个极点收敛：

1. **规模化极点**（vLLM/SGLang）——针对集群服务的量化与分布式优化
2. **本地化极点**（llama.cpp/Ollama）——针对单机和边缘部署的优化
3. **网关极点**（LiteLLM）——针对多云路由和成本可观测性的优化

Unsloth 作为训练到推理之间的基础设施层重要性日增，随着量化检查点流程（ModelOpt FP8 → bitsandbytes）日益成为标准。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM digest into Simplified Chinese. I need to:
1. Translate all headings, body text, and table content
2. Keep all technical identifiers (issue numbers, PR numbers, file paths, config options, version numbers, model names, etc.) as-is
3. Preserve the exact markdown structure including tables, lists, bold, etc.
4. Use natural technical Chinese register

Let me go through and translate:

Title: vLLM Digest — 2026-09-23 → vLLM 动态 — 2026年9月23日

First section about highlights - translate naturally

Release & Breaking Changes section - keep the table structure but translate descriptions

New Model & Hardware Support - translate

Stability & Regressions - translate

What This Means for Application Developers - translate

Let me do this carefully:</think>

# vLLM 动态 — 2026年9月23日

## 今日要点

vLLM v0.30.0 正式发布，包含 762 次提交、315 位贡献者（104 位新贡献者）。新增支持 DeepSeek-V4.1-Flash（通过 SM100 上的 FlashMLA V4.1 将完整 KV 存储为 MXFP8）、DeepGEMM Mega-mHC 以及异步 Engram 预取。该版本延续了 AMD ROCm 优化的推进势头，为 RDNA3/4 新增了 Triton 注意力瓦片优化，并添加了 MI355X Kimi-K3 测试组。稳定性方面重点修复了混合 Mamba 前缀缓存的回归问题以及 GLM-5.3-Flash 解码退化问题。

---

## 版本发布与破坏性变更

| 版本 | 描述 | 链接 |
|------|------|------|
| **v0.30.0** | 重大版本：762 次提交，315 位贡献者（104 位新）。新模型：DeepSeek-V4.1-Flash（通过 SM100 上的 FlashMLA V4.1 将完整 KV 存储为 MXFP8）、DeepGEMM Mega-mHC、异步 Engram 预取。 | [发布说明](https://github.com/vllm-project/vllm/releases/tag/v0.30.0) |

---

## 新模型与硬件支持

- **DeepSeek-V4.1-Flash**：通过 SM100 上的 FlashMLA V4.1 记录将完整 KV 存储为 MXFP8（#56893, #56214, #56228, #56208）
- **DeepGEMM Mega-mHC**：新增内核支持（#56962）
- **Kimi K3**：MI355X 单元测试组已添加（#58012）；跟踪 issue 为 #50001
- **Intel XPU**：面向批量 MoE 的 All-to-all 专家并行后端正在开发中（#46871）

---

## 性能优化

| 领域 | 变更 | 详情 |
|------|------|------|
| **DiffusionGemma** | 单次采样器统计信息内核 | 针对每行 logits 一个程序的自定义 Triton 内核（#58226） |
| **AWQ 量化** | SM89 上融合反量化 + GEMM | 批不变模式（`VLLM_BATCH_INVARIANT=1`）无需实例化 FP16 即可解包 int4 权重（#57047） |
| **CUDA Graphs** | `VLLM_BATCH_INVARIANT` 下的可中断图 | 无需 torch.compile 即可在运行时实现调优的 matmul 配置（#57586） |
| **ROCm/RDNA** | 更窄的 Triton prefill-attention KV 瓦片 | 解决 gfx11xx/gfx12xx 上的 #58060（#58225） |
| **DeepSeek-V4** | Hopper 上 MXFP4→block-FP8 专家反量化（可选） | 无损转换以提升 prefill 速度（#53709） |
| **AMD MI355X** | DSA 稀疏索引器解码评分器 | 针对 gfx950 的仅候选分页 MQA 评分器（#57859） |
| **ROCm MI300** | Aiter Triton MXFP4 MoE 已启用 | 相比参考实现显著加速 gfx942（#57079） |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| **高** | **GLM-5.3-Flash 长解码退化** 累积推理后（#56868） | OPEN | — |
| **高** | **GLM-5.3-Flash 重复 token "胡言乱语"** 多轮 agentic 使用场景（#56605） | OPEN | — |
| **高** | **混合 Mamba 前缀缓存 + MTP** 损坏输出（#53912, #53142） | OPEN | — |
| **高** | **XPU TP=2** Intel Arc Pro B70 上 GP 错误 + xe BCS 引擎复位（#41663） | OPEN | — |
| **中** | **DeepSeek-V3.2 / GLM-5.x DSA 稀疏 MLA 解码垃圾** PD 分离下 CUDA graphs（#57064） | OPEN | — |
| **中** | **DiffusionGemma 张量形状不匹配** 并发解码下 post_norm（#58035） | OPEN | — |
| **中** | **Qwen3.5 原生 MTP** 尽管接受率良好但可能比 CUDA graph 基线更慢（#47277） | OPEN | — |
| **中** | **Gemma4 无限重复循环** 结构化输出（#40080） | CLOSED | — |
| **已修复** | **Qwen3.6-27B 工具调用在 MTP 上失败** Responses API（#46249） | CLOSED | [PR 待审](https://github.com/vllm-project/vllm/issues/46249) |

---

## 这对应用开发者的意义

1. **如果你运行 GLM-5.3-Flash**：在长时间多轮 agentic 会话中需注意解码退化问题；在 #53912/#53142 解决前，避免将前缀缓存与 MTP 混合用于 Mamba/GDN 模型。

2. **如果你使用 VLLM_BATCH_INVARIANT=1**：新的可中断 CUDA graphs 路径（#57586）现在可提供更好的运行时 matmul 调优而无需 torch.compile 开销——对于吞吐 workloads 建议启用。

3. **如果你部署在 AMD ROCm**：MI355X（gfx950）正在积极优化中；预计 DeepSeek-V4 和 Kimi-K3 性能将提升。Triton prefill-attention 瓦片收窄（#58225）使 RDNA3/4 用户受益。

4. **如果你使用 Intel XPU**：All-to-all EP 后端正在开发中（#46871）但仍有性能问题；目前避免在 Arc Pro B70 上使用 TP=2 配置（#41663）。

5. **如果你使用 DiffusionGemma**：单次采样器内核（#58226）改善了解码效率；并发请求处理 bug（#58035）正在跟踪中。

---

*基于 GitHub 数据生成 — 2026年9月23日*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Daily Digest into Simplified Chinese. Let me carefully translate each section while:
1. Keeping all the Markdown structure exactly
2. Preserving all URLs, issue numbers, PR numbers, code blocks
3. Using natural technical Chinese (the register of a Chinese developer newsletter)
4. Maintaining all tables and their formatting
5. Keeping bold/italic, horizontal rules, etc.

Let me go through each section:

## 1. Today's Highlights
- Translate the content but keep the structure
- Keep issue numbers as-is (#29736, #17050, etc.)

## 2. Releases & Breaking Changes
- Keep all technical terms, flags (SGLANG_USE_PICKLE_IPC=0)
- Translate context

## 3. New Model & Hardware Support
- Keep all model names, hardware names as-is
- Keep all PR/Issue numbers
- Translate descriptions

## 4. Performance & Optimization
- Keep technical terms
- Keep PR/Issue numbers

## 5. Stability & Regressions
- Keep severity levels (High, Medium, Low)
- Keep all issue numbers
- Translate descriptions

## 6. What This Means for Application Developers
- Keep all flags, configuration names
- Keep issue numbers
- Translate the narrative

Let me do the translation now:</think>

# SGLang 每日简报 — 2026-09-23

## 1. 今日要闻

SGLang 持续推进推理服务能力建设，在分布式服务、多后端支持及强化学习基础设施方面取得显著进展。本期重点包括：AMD ROCm 对 Kimi-K3 MXFP4 量化模型的支持、DeepSeek-V4 TRT-LLM 注意力机制优化，以及 Q3 2026 路线图中 Decode Context Parallelism 的持续开发。IPC 到 msgpack 的迁移已完成，移除了遗留的 pickle 方案。

---

## 2. 版本发布与破坏性变更

- **过去 24 小时内无新版本发布**。

**迁移提示**：IPC 到 msgpack 的迁移已完成（[#29465](https://github.com/sgl-project/sglang/issues/29465)）。`SGLANG_USE_PICKLE_IPC=0` 现为默认配置——升级前请确认您的部署未依赖基于 pickle 的旧版 IPC。

---

## 3. 新模型与硬件支持

| 组件 | 详情 | PR/Issue |
|-----------|---------|----------|
| **AMD ROCm** | 在 ROCm 上通过 Quark 量化Serving Kimi-K3 MXFP4 检查点 | [#40811](https://github.com/sgl-project/sglang/pull/40811) |
| **NPU (CANN)** | 从 CANN 9.0.0/Python 3.11 更新至 9.1.0/Python 3.12 | [#40524](https://github.com/sgl-project/sglang/pull/40524) |
| **DeepSeek-V4.1** | 两级候选索引器（候选源第 20 层：2048 blocks × 8 positions；消费者：top-512）| [#40574](https://github.com/sgl-project/sglang/issues/40574) |
| **SenseNova-U1/U1.5** | 功能与性能跟踪（参考：OpenSenseNova/SenseNova-U1）| [#37742](https://github.com/sgl-project/sglang/issues/37742) |
| **GLM-5.3-Flash** | 视觉支持（注：pin 的 transformers==5.12.1 缺少 glm5_next——见 [#39831](https://github.com/sgl-project/sglang/issues/39831)）| [#39831](https://github.com/sgl-project/sglang/issues/39831) |

---

## 4. 性能与优化

| 领域 | 描述 | PR/Issue |
|------|-------------|----------|
| **TRT-LLM 注意力** | DeepSeek-V4 精度 + 性能提升 | [#36652](https://github.com/sgl-project/sglang/pull/36652) |
| **JIT 内核** | 保持occupancy的L1 carveout偏好（防止PDL secondary继承GEMM的大shared-memory分区）| [#40767](https://github.com/sgl-project/sglang/pull/40767) |
| **FP8 KV-cache** | Decode减速修复：非融合的K/V量化 + 每层Q转换开销 | [#30815](https://github.com/sgl-project/sglang/issues/30815) |
| **DCP 通信** | `fi_a2a` / `a2a` 作为所有模型的默认 `--dcp-comm-backend` | [#29736](https://github.com/sgl-project/sglang/issues/29736) |
| **统一 Radix Cache** | Rust TreeCore 已成为默认；LMCache 外部 KV 后端集成 | [#39627](https://github.com/sgl-project/sglang/pull/39627), [#38652](https://github.com/sgl-project/sglang/pull/38652) |
| **LongCat MoE** | 修复shortcut中的重复residual（回归问题导致输出错误）| [#40799](https://github.com/sgl-project/sglang/pull/40799) |
| **Nemotron MTP** | 减少DP + attention TP > 1下的重复attention输出reduction | [#40800](https://github.com/sgl-project/sglang/pull/40800) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | EAGLE投机解码 + Triton融合MoE导致非法内存访问（GLM-5.2-NVFP4, sm_107）| 待解决 — [#40623](https://github.com/sgl-project/sglang/issues/40623) |
| **高** | 断开连接的流式客户端留下僵尸请求，解码至max_tokens，淹没"state was deleted"| 待解决 — [#36333](https://github.com/sgl-project/sglang/issues/36333) |
| **高** | DeepSeek-V4-Flash-0731：并发下渐进式输出损坏（DSV4 + DP attention）| 待解决 — [#33397](https://github.com/sgl-project/sglang/issues/33397) |
| **中** | NIXL传输在PD disaggregation中拒绝MXFP8 KV block scales | 修复PR待审核 — [#40792](https://github.com/sgl-project/sglang/pull/40792) |
| **中** | RL：`pause_generation` 与权重更新互相死锁 | 修复PR待审核 — [#40779](https://github.com/sgl-project/sglang/pull/40779), [#40804](https://github.com/sgl-project/sglang/pull/40804) |
| **中** | DeepSeek-V4.1-Flash + Engram：profiled SPS表在CUDA-graph capture中crash| 待解决 — [#39173](https://github.com/sgl-project/sglang/issues/39173) |
| **低** | GLM-5.3-Flash视觉损坏：transformers==5.12.1缺少glm5_next| 待解决 — [#39831](https://github.com/sgl-project/sglang/issues/39831) |

**CI 状态**（[#17050](https://github.com/sgl-project/sglang/issues/17050)）：2个broken，5个flaky，1089个已修复。

---

## 6. 这对应用开发者意味着什么

1. **在AMD GPU上部署？** — Kimi-K3 MXFP4 现已支持ROCm。测试您的工作负载并报告量化精度问题。

2. **运行RL训练循环？** — `pause_generation` 与权重更新之间的死锁正在修复中。如果您使用RL共置（如GRPO、PPO），请在 [#40779](https://github.com/sgl-project/sglang/pull/40779) 合并前暂缓更新到最新版main。

3. **将EAGLE投机解码与MoE结合使用？** — 在 [#40623](https://github.com/sgl-project/sglang/issues/40623) 解决前，避免在 GLM-5.2-NVFP4 (sm_107) 上将 Triton 融合MoE（`flashinfer_megamoe`）与EAGLE spec解码结合使用——很可能触发非法内存访问崩溃。

4. **使用流式调用+tool？** — 修复已提交，修复了 CohereCommand4Detector 流式 `tool_index` 处理（[#40810](https://github.com/sgl-project/sglang/pull/40810)）。

5. **考虑NPU部署？** — CANN 9.1.0 / Python 3.12 是 Ascend NPU 的新基准。请相应更新您的容器镜像。

6. **下一个版本可能需要迁移** — pickle→msgpack IPC 变更将翻转默认行为；如果您有依赖 pickle IPC 的自定义扩展，请在升级前使用 `SGLANG_USE_PICKLE_IPC=0` 进行测试。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English digest into Chinese, maintaining the exact Markdown structure. Let me carefully translate this following all the rules specified.

I need to:
1. Output ONLY the translation - no preamble or explanation
2. Preserve all Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, issue numbers, code references as-is
4. Use natural technical Chinese, not literal word-for-word

Let me translate section by section:

## Releases & Breaking Changes

The table content needs translation but keep the numbers and PR references.

## New Model & Hardware Support
Keep the PR numbers but translate descriptions

## Performance & Optimization
Keep PR numbers, translate descriptions

## Stability & Regressions
Keep issue numbers, translate descriptions

## What This Means for Application Developers
Translate the explanations

Let me go through and translate carefully:</think>

# llama.cpp 速报 — 2026-09-23

## 今日要闻

llama.cpp 项目继续保持高速迭代，后端优化覆盖 Intel GPU、CUDA 和 SYCL，同时修复了服务器并发与路由问题。值得注意的是，Intel Xe 系列 GPU 的 Vulkan Flash Attention 内核已合入，服务器现在支持绑定多个地址。有一起重要的正确性 bug 仍待解决：贪婪采样下，量化目标模型上的投机解码会产生分歧输出。

---

## 版本发布与破坏性变更

| Commit | 描述 | PR |
|--------|-------------|-----|
| **b11104** | 服务器：支持绑定多个地址 | [#28690](https://github.com/ggml-org/llama.cpp/pull/28690) |
| **b11113** | 服务器：不向子进程传递日志文件 | [#29212](https://github.com/ggml-org/llama.cpp/pull/29212) |
| **b11114** | 服务器：修复路由器驱逐与现有队列的竞态条件 | [#29217](https://github.com/ggml-org/llama.cpp/pull/29217) |

*暂无破坏性 API 变更。*

---

## 新模型与硬件支持

| 领域 | 更新 | 详情 |
|------|--------|---------|
| **Vulkan** | Intel Xe Flash Attention (Xe-LPG Plus、Xe2、Xe3) | 针对 Intel GPU 的 split-k 路径优化 — 解决 A770 Linux op 测试失败 | [#24406](https://github.com/ggml-org/llama.cpp/pull/24406) |
| **OpenCL** | Q4_K 非 MoE dp4a 二进制内核 | 新增 `kernel_gemm_noshuffle_q4_k_q8_1_dp4a_ila_a8_bin` 内核 | [#29056](https://github.com/ggml-org/llama.cpp/pull/29056) |
| **SYCL** | IQ3 代码重排 + 持久化布局 | Intel Arc Pro B70 注意力/解码路径优化，支持 IQ3_S 和 IQ3_XXS MMVQ | [#29107](https://github.com/ggml-org/llama.cpp/pull/29107) |
| **MUSA** | PH1 (MTT S5000) 修复 | 修复 MUSA 架构 `31` 的算子失败和构建问题 | [#29193](https://github.com/ggml-org/llama.cpp/pull/29193) |
| **CUDA** | IQ4_NL 在 Flash Attention KV Cache 中支持 | 使 IQ4_NL 量化的 Flash Attention 更高效 | [#29293](https://github.com/ggml-org/llama.cpp/pull/29293) |

---

## 性能与优化

| 类别 | 变更 | 影响 |
|----------|--------|--------|
| **Vulkan/Intel FA** | Split-k Flash Attention 内核 | Intel Xe 系列新优化路径 — 详见 PR 基准数据 |
| **GGML/IQ1** | 每个 Block 构建一次前缀和 | 减少 IQ1_M 内核的冗余计算 | [#28706](https://github.com/ggml-org/llama.cpp/pull/28706) |
| **Metal** | 将 `mul_mm_id` src1 重缩放置于 `ggml_prec` 后 | 使 Metal 行为与 CUDA/Vulkan 后端对齐 | [#29029](https://github.com/ggml-org/llama.cpp/pull/29029) |
| **CUDA/MoE** | 分组专家 top-k 融合 | 挽回因分组专家造成的大部分性能损失 — 详见 PR 表格 | [#29181](https://github.com/ggml-org/llama.cpp/pull/29181) |
| **SYCL** | Q8_0 DMMV ESIMD + MMVQ 宽加载 | 批量加载 4 个 dword 而非逐个处理 | [#29186](https://github.com/ggml-org/llama.cpp/pull/29186) |
| **SYCL** | 分组专家 XMX GEMM | 解决 MoE 模型中窄激活的低效问题 | [#29245](https://github.com/ggml-org/llama.cpp/pull/29245) |
| **Hexagon** | Flash Attention 的直接映射 DMA 缓存 | 更适合 HVX Flash Attention 掩码处理 | [#29282](https://github.com/ggml-org/llama.cpp/pull/29282) |
| **MoE/GPU** | 主机卸载专家权重的 GPU 常驻 LRU 缓存 | 从 GPU 显存中服务最近使用的专家，减少主机显存带宽瓶颈 | [#27861](https://github.com/ggml-org/llama.cpp/pull/27861) |
| **Vulkan** | 可选设备保活 (`GGML_VK_KEEPALIVE_MS`) | 防止空闲 GPU 显存被回收 | [#29267](https://github.com/ggml-org/llama.cpp/pull/29267) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | **量化目标上的投机解码分歧** — 目标为 Q4_K_M 时贪婪输出与普通运行不同（bf16 正常） | 待解决 — [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) |
| **高** | **Qwen 3.5 Checkpoint 加载崩溃** — 加载 b10780 之后创建的任意 checkpoint 都会崩溃 | 待解决 — [#20176](https://github.com/ggml-org/llama.cpp/issues/20176) |
| **中** | **服务器静默停止处理** — 当 `/metrics` 端点被 VictoriaMetrics 抓取时 | 待解决 — [#29104](https://github.com/ggml-org/llama.cpp/issues/29104) |
| **中** | **Vulkan 提示处理严重减速** — b10780 后在 RDNA3 上性能大幅下降 | 待解决 — [#28752](https://github.com/ggml-org/llama.cpp/issues/28752) |
| **中** | **Qwen4exp CUDA 解码随上下文线性变慢** | 待解决 — [#28734](https://github.com/ggml-org/llama.cpp/issues/28734) |
| **中** | **MTP 越界 token id** — Qwen3.8 + DFlash2/MTP 在 Vulkan 上发出 `token_id == n_vocab` (248320) | 待解决 — [#28158](https://github.com/ggml-org/llama.cpp/issues/28158) |

**已修复：**
- Qwen3.5 在 `function_call_output` 中的图像输入 — [#22575](https://github.com/ggml-org/llama.cpp/pull/22575)（作为 b11112 合入）
- 服务器 `/v1/models` vocab_type 布尔值序列化 — [#29091](https://github.com/ggml-org/llama.cpp/issues/29091)（已关闭）

---

## 这对应用开发者的意义

1. **多地址绑定现已可用** — 需要将 llama-server 绑定到多个接口（如内网 + 外网）的部署现在可以直接使用，无需变通方案。

2. **Intel Xe GPU 获得显著的 Vulkan 提升** — Split-k Flash Attention 内核面向 Xe-LPG Plus、Xe2 和 Xe3 架构。如果你正在 Intel 独立 GPU（A770、B580 等）上运行，预期预填充吞吐量会有改善。

3. **注意投机解码的正确性问题** — 如果使用带量化目标（Q4_K_M 等）的草稿模型投机解码且 `temperature=0`，输出可能与无投机运行不一致。考虑使用 bf16 目标或 ngram 投机，直到 #25618 解决。

4. **服务器并发改进** — 路由器驱逐竞态修复 (#29217) 和槽位预留/队列变更 (#29120) 应能改善多模型槽高并发下的可靠性。

5. **SYCL 后端日趋成熟** — 多项 PR 为 Intel Arc Pro B70（IQ3 重排、Q8_0 宽加载、MoE XMX GEMM）合入。如果你通过 SYCL 面向 Intel GPU，测试最新版在注意力和 MoE 负载上的表现。

---

*数据来源：github.com/ggml-org/llama.cpp — 提交范围：b11104–b11115*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Chinese (Simplified Chinese based on the context). I need to:

1. Translate the content while preserving the Markdown structure exactly
2. Keep technical terms, code, URLs, issue numbers, etc. as-is
3. Use natural technical Chinese register - like a Chinese developer newsletter
4. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me go through and translate:

# Ollama 摘要 — 2026-09-23

## 1. 今日要闻

今日重点关注苹果 MLX 后端的持续优化，以及多模态和结构化输出处理方面的功能完善。值得注意的是，macOS 应用已修复 ChatGPT/Codex 检测导致的 UI 卡死问题，团队还改进了 Gemma 4 的图像 token 处理。过去 24 小时内未发布新版本。

## 2. 版本发布与重大变更

- **过去 24 小时无新版本**发布。

## 3. 新模型与硬件支持

| 项目 | 状态 | 详情 |
|------|------|-------------|
| Gemma 4 动态图像分辨率 | **已合并** (#18603) | MLX 后端现根据输入分辨率动态选择图像 token 预算 (70/140/280/560/1120)，保留高分辨率文档细节 |
| MIMO v2.5 LLM | 开放请求 (#15887) | 小米百万级上下文模型，MIT 许可——社区请求加入 Ollama Cloud |
| System 1 Models (Kev, Laya) | 开放请求 (#18594) | 轻量级/快速模型功能请求 |
| RTX 50-Series (Blackwell) CUDA 支持 | **回归问题** (#18581) | Windows CUDA 检测失败；回退到 CPU |

## 4. 性能与优化

| PR | 领域 | 改进 |
|----|------|-------------|
| #18550 | MLX Qwen 3.8 提示处理 | **+18–19%** M5 Max 提示 TPS (2k–8k tokens)，通过 gated-delta kernel 实现 |
| #18078 | MLX Qwen3.8 Flash Next 内存 | 将 QSA 投影与

非专家 MTP 保持 BF16；其余使用 MXFP8 — 提升长文本生成质量 |
| #18577 | llama.cpp 版本 | 更新至 b11081；移除过时的 Laguna metal 补丁 |
| #17154 | Gemma 4 图像 token 预算 | 将 `max_soft_tokens` 暴露为运行时参数（关闭 #17152、#15626） |

## 5. 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 备注 |
|-------|----------|------|-------|
| #18593 — macOS 应用启动时 UI 冻结 | **高** | **已修复** (#18601) | ChatGPT/Codex 检测在 `System Events` 上阻塞；现直接检查运行中的程序 |
| #18225 — CUDA 上 Token 生成速度下降约 5 倍（0.33.x vs 0.32.13） | **高** | 开放 | RTX 3090 回归问题；0.32.13 不受影响 |
| #17778 — Qwen 3.8 流式传输错误："消息中未找到用户查询" | **高** | 开放 | 205k 上下文，工具调用循环触发错误 |
| #18581 — Windows CUDA 在 RTX 50-Series (Blackwell) 上失败 | **中** | 开放 | 驱动 616.92；报告 0 B VRAM |
| #16599 — 模型即使 VRAM 充足也分散到多个 GPU | **中** | 开放 | 3090 + 4060；Gemma 4 31b 不必要地分散 |
| #18597 — Homebrew MLX 结构化输出损坏 | **中** | 开放 | `xgrammar library not found` 错误 |
| #18595 — 孤立 blob 无垃圾回收（发现 21GB 孤立） | **中** | 开放 | 清单审计发现未引用的 blob |

## 6. 这对应用开发者意味着什么

- **macOS 用户**：请更新到 0.34.x（发布后）——启动时的 UI 卡死问题现已修复。
- **Qwen 3.8 用户**：`/v1/chat/completions` 端点在某些工具调用场景下可能卡死；暂时使用 `/api/chat` 或 `ollama run` 作为变通方案（#17790、#17778）。
- **视觉应用**：如果在 Gemma 4 上对高分辨率图像进行 OCR，新暴露的 `max_soft_tokens` 参数（#17154、#18603）应能显著提升准确性。
- **Apple Silicon**：MLX 持续改进——Qwen 3.8 提示处理现快约 19%。
- **Windows + 新 NVIDIA GPU**：如果你使用 RTX 50 系列卡，在 CUDA 检测问题（#18581）解决前预计只能使用 CPU 推理。
- **结构化输出 + 思考模型**：多个相关问题（#10929、#17544）已关闭；如果你结合使用 `think: true` 和 JSON schema 输出，请验证你的版本包含修复。
- **Docker + MLX/Vulkan**：缺少的库/配置已添加（#18592）；MLX runner 现可通过 `--gubes all` 在容器中运行。

---

*基于 GitHub 数据生成 — ollama/ollama (2026-09-23)*</think>

# Ollama 摘要 — 2026-09-23

## 1. 今日要闻

今日重点关注苹果 MLX 后端的持续优化，以及多模态和结构化输出处理方面的功能完善。值得注意的是，macOS 应用已修复 ChatGPT/Codex 检测导致的 UI 卡死问题，团队还改进了 Gemma 4 的图像 token 处理。过去 24 小时内未发布新版本。

## 2. 版本发布与重大变更

- **过去 24 小时无新版本**发布。

## 3. 新模型与硬件支持

| 项目 | 状态 | 详情 |
|------|------|-------------|
| Gemma 4 动态图像分辨率 | **已合并** (#18603) | MLX 后端现根据输入分辨率动态选择图像 token 预算 (70/140/280/560/1120)，保留高分辨率文档细节 |
| MIMO v2.5 LLM | 开放请求 (#15887) | 小米百万级上下文模型，MIT 许可——社区请求加入 Ollama Cloud |
| System 1 Models (Kev, Laya) | 开放请求 (#18594) | 轻量级/快速模型功能请求 |
| RTX 50-Series (Blackwell) CUDA 支持 | **回归问题** (#18581) | Windows CUDA 检测失败；回退到 CPU |

## 4. 性能与优化

| PR | 领域 | 改进 |
|----|------|-------------|
| #18550 | MLX Qwen 3.8 提示处理 | **+18–19%** M5 Max 提示 TPS (2k–8k tokens)，通过 gated-delta kernel 实现 |
| #18078 | MLX Qwen3.8 Flash Next 内存 | 将 QSA 投影与 MTP 非专家权重保持 BF16；其余使用 MXFP8 — 提升长文本生成质量 |
| #18577 | llama.cpp 版本 | 更新至 b11081；移除过时的 Laguna metal 补丁 |
| #17154 | Gemma 4 图像 token 预算 | 将 `max_soft_tokens` 暴露为运行时参数（关闭 #17152、#15626） |

## 5. 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 备注 |
|-------|----------|------|-------|
| #18593 — macOS 应用启动时 UI 冻结 | **高** | **已修复** (#18601) | ChatGPT/Codex 检测在 `System Events` 上阻塞；现直接检查运行中的程序 |
| #18225 — CUDA 上 Token 生成速度下降约 5 倍（0.33.x vs 0.32.13） | **高** | 开放 | RTX 3090 回归问题；0.32.13 不受影响 |
| #17778 — Qwen 3.8 流式传输错误："消息中未找到用户查询" | **高** | 开放 | 205k 上下文，工具调用循环触发错误 |
| #18581 — Windows CUDA 在 RTX 50-Series (Blackwell) 上失败 | **中** | 开放 | 驱动 616.92；报告 0 B VRAM |
| #16599 — 模型即使 VRAM 充足也分散到多个 GPU | **中** | 开放 | 3090 + 4060；Gemma 4 31b 不必要地分散 |
| #18597 — Homebrew MLX 结构化输出损坏 | **中** | 开放 | `xgrammar library not found` 错误 |
| #18595 — 孤立 blob 无垃圾回收（发现 21GB 孤立） | **中** | 开放 | 清单审计发现未引用的 blob |

## 6. 这对应用开发者意味着什么

- **macOS 用户**：请更新到 0.34.x（发布后）——启动时的 UI 卡死问题现已修复。
- **Qwen 3.8 用户**：`/v1/chat/completions` 端点在某些工具调用场景下可能卡死；暂时使用 `/api/chat` 或 `ollama run` 作为变通方案（#17790、#17778）。
- **视觉应用**：如果在 Gemma 4 上对高分辨率图像进行 OCR，新暴露的 `max_soft_tokens` 参数（#17154、#18603）应能显著提升准确性。
- **Apple Silicon**：MLX 持续改进——Qwen 3.8 提示处理现快约 19%。
- **Windows + 新 NVIDIA GPU**：如果你使用 RTX 50 系列卡，在 CUDA 检测问题（#18581）解决前预计只能使用 CPU 推理。
- **结构化输出 + 思考模型**：多个相关问题（#10929、#17544）已关闭；如果你结合使用 `think: true` 和 JSON schema 输出，请验证你的版本包含修复。
- **Docker + MLX/Vulkan**：缺少的库/配置已添加（#18592）；MLX runner 现可通过 `--gpus all` 在容器中运行。

---

*基于 GitHub 数据生成 — ollama/ollama (2026-09-23)*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM Daily Digest into Simplified Chinese, following the detailed rules provided. Let me go through the content and translate it appropriately, maintaining the exact structure and formatting while using natural technical Chinese.

Let me analyze the content:

1. **Title**: "LiteLLM Daily Digest — 2026-09-23" → "LiteLLM 每日摘要 — 2026-09-23"

2. **Highlights section**: Need to translate naturally while keeping the technical terms
- "verified Docker images via cosign signatures" → "通过 cosign 签名验证 Docker 镜像"
- "supply-chain security" → "供应链安全"
- "budget tracking in Redis pipelines" → "Redis 管道的预算跟踪"
- "streaming cost calculation with model aliases" → "模型别名场景下的流式费用计算"
- "unauthenticated `/metrics` endpoint" → "未认证的 `/metrics` 端点"
- "SQL IN-list binding limit" → "SQL IN 列表绑定参数限制"
- "freeze budget reset jobs" → "导致预算重置任务卡死"

3. **Releases & Breaking Changes**: Keep the table structure
- "Docker image signing with cosign" → "使用 cosign 对 Docker 镜像进行签名"
- "All images now signed with key from commit `0112e53`" → "所有镜像现在使用 commit `0112e53` 中的密钥进行签名"
- "Users should verify pulls" → "用户应在拉取时验证签名"

4. **New Model & Hardware Support**:
- Keep model names as-is
- "price catalog" → "价格目录"
- "price corrections" → "价格修正"
- "standalone pricing" → "独立计费"

5. **Performance & Optimization**: Keep the table structure
- "Redis budget sync" → "Redis 预算同步"


- "Prevents stale spend overwrites" → "防止过期消费被覆盖"
- "virtual-key model budget crashes" → "虚拟键模型预算计算崩溃"
- "SQL IN-lists" → "SQL IN 列表"
- "Postgres 32k bind-parameter limit" → "PostgreSQL 32k 绑定参数限制"
- "Python logging dispatched through Rust" → "Python 日志通过 Rust 分发"
- "shared credential redaction" → "共享凭证脱敏"
- "Byte-stable replayed prefix" → "字节稳定的重放前缀"

I'm translating technical infrastructure and database terminology, focusing on how different system components interact and the safeguards being implemented. The key themes involve preventing data corruption through better synchronization, managing resource limits, and ensuring consistent logging across language boundaries.

The translation emphasizes precise technical communication, maintaining the original's technical depth while adapting to Chinese technical writing conventions. Each term is carefully chosen to convey the specific technical mechanism being described.</think>

# LiteLLM 每日摘要 — 2026-09-23

## 今日要闻

LiteLLM 团队发布了 **v1.102.0**，通过 cosign 签名验证 Docker 镜像，提升供应链安全性。稳定性工作包括：修复 Redis 管道中的预算跟踪、模型别名场景下的流式费用计算，以及未认证 `/metrics` 端点的安全补丁。多个供应商价格同步完成（Azure：20 个模型，Fireworks：2 个模型，OpenRouter：19 个模型），同时团队修复了可能导致预算重置任务卡死的 SQL IN 列表绑定参数限制问题。

---

## 版本发布与重大变更

| 版本 | 变更 | 备注 |
|---------|--------|-------|
| **v1.102.0** | 使用 cosign 对 Docker 镜像进行签名 | 所有镜像现在使用 commit `0112e53` 中的密钥进行签名。拉取时请验证。 |

*今日无重大 API 变更。*

---

## 新模型与硬件支持

- **Azure**：20 个新模型加入价格目录，包括 GPT-5.x chat 和 Grok 变体（[PR #42594](https://github.com/BerriAI/litellm/pull/42594)）
- **Fireworks AI**：2 个新模型加入（[PR #42590](https://github.com/BerriAI/litellm/pull/42590)）
- **OpenRouter**：9 个新模型 + 19 个价格修正（[PR #42592](https://github.com/BerriAI/litellm/pull/42592)）
- **Rust 费用计算**：扩展独立计费覆盖图像、OCR、视频、批量、自定义、目录、护栏、分层和 Gemini 接地场景（[PR #42620](https://github.com/BerriAI/litellm/pull/42620)）

---

## 性能优化

| 领域 | 变更 | 影响 |
|------|--------|--------|
| **Redis 预算同步** | 同步读取前等待管道执行（[PR #32618](https://github.com/BerriAI/litellm/pull/32618)） | 防止过期消费被覆盖；修复虚拟键模型预算崩溃 |
| **SQL IN 列表** | 无界限绑定时 CI 报警（[PR #42629](https://github.com/BerriAI/litellm/pull/42629)） | 防止 PostgreSQL 32k 绑定参数限制导致预算重置任务卡死 |
| **日志系统** | Python 日志通过 Rust 诊断处理器分发（[PR #42616](https://github.com/BerriAI/litellm/pull/42616)） | 实现 Rust/Python 边界的共享凭证脱敏 |
| **Anthropic thinking** | 保持重放前缀字节稳定（[PR #42630](https://github.com/BerriAI/litellm/pull/42630)） | 修复聊天补全场景的重放一致性 |
| **Shadow eval 消费** | 评估成本计入管理员而非采样用户（[PR #42587](https://github.com/BerriAI/litellm/pull/42587)） | 管理员触发的评估正确归属预算 |

---

## 稳定性与回归问题

### 高优先级

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#34140](https://github.com/BerriAI/litellm/issues/34140) | v3 速率限制器对团队 per-model 限额重复计数 → 实际 RPM/TPM 为配置值的一半 | OPEN |
| [#24530](https://github.com/BerriAI/litellm/issues/24530) | **安全漏洞**：生产环境 `/metrics` 端点默认未认证，暴露多租户 PII | OPEN |
| [#42161](https://github.com/BerriAI/litellm/issues/42161) | 使用模型别名时流式请求费用计为 0 | OPEN |
| [#42172](https://github.com/BerriAI/litellm/issues/42172) | 第三方 `api_base` 配置下的 Anthropic 模型收到了客户端的 OAuth token 而非部署配置的密钥 | OPEN |

### 中优先级

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#13786](https://github.com/BerriAI/litellm/issues/13786) | 重复检测循环调用自定义日志回调数千次 | OPEN |
| [#39370](https://github.com/BerriAI/litellm/issues/39370) | `budget_duration=null` 且 `budget_reset_at` 过时的行，预算重置任务会永久清零消费 | OPEN |
| [#33871](https://github.com/BerriAI/litellm/issues/33871) | 项目消费从未被追踪 → 项目预算/告警无法生效 | CLOSED |
| [#41611](https://github.com/BerriAI/litellm/issues/41611) | 流式护栏：值分散在两个 SSE 块中可通过单块检查 | OPEN |

---

## 这对应用开发者的意义

1. **验证 Docker 拉取** — v1.102.0 引入 cosign 验证。更新你的拉取脚本以验证签名，否则在更严格的容器运行时部署将失败。

2. **检查 `/metrics` 暴露情况** — Prometheus 端点默认未认证。如果在生产环境运行多租户 LiteLLM Proxy，立即启用 `require_auth_for_metrics_endpoint: true` 以避免 PII 泄露。

3. **关注流式费用日志** — 如果在流式场景使用模型别名，可能一直少计费用。修复跟踪在 [#42161](https://github.com/BerriAI/litellm/issues/42161)；非流式调用不受影响。

4. **检查速率限制** — 使用团队元数据中 `model_rpm_limit` 配置 per-model 限制的团队可能发现实际限制是配置值的一半。重复计数 bug 跟踪在 [#34140](https://github.com/BerriAI/litellm/issues/34140)。

5. **预算跟踪改进** — Redis 管道修复（[PR #32618](https://github.com/BerriAI/litellm/pull/32618)）解决了一个竞态条件，实时消费可能被过期值覆盖。如果你依赖实时预算强制执行，这将提高准确性。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the Unsloth Digest from English to Chinese. I need to:
1. Translate all headings, body text, and table content
2. Keep the Markdown structure exactly as-is (tables, lists, headings, code spans, etc.)
3. Keep technical terms, URLs, issue numbers, version tags, etc. in their original form
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me go through the content and translate it properly while maintaining the exact structure.

Key things to translate:
- All heading text
- All paragraph text
- Table headers and content
- List items

Things to keep as-is:
- URLs
- Issue/PR numbers (#12345)
- Version tags
- Code spans and file paths
- Technical identifiers like device_map, ROCm, etc.
- Bold/italic formatting
- Emoji

Let me translate now:</think>

# Unsloth 速报 — 2026-09-23

## 今日要闻

Unsloth 团队连续发布了三个 beta 版本（v0.1.812–v0.1.814），核心围绕 **Qwen-Image-2.1** 支持，包括自定义 Agent Skills 和项目管理改进。后端方面也有重要工作：NVFP4 逐层图像策略、compressed-tensors 到 bitsandbytes 4-bit 加载，以及 AMD RDNA1 GPU 训练的修复。多个稳定性问题已关闭，但多 GPU 微调和 ROCm 相关问题仍在处理中。

---

## 版本发布与重大变更

| 版本 | 概要 | 链接 |
|------|------|------|
| **v0.1.814-beta** | Qwen-Image-2.1 本地执行、自定义 Agent Skills、推理块 2 倍加速（60 FPS vs 30 FPS）、Linux 安装改进 | [Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.814-beta) |
| **v0.1.813-beta** | 同上 | [Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.813-beta) |
| **v0.1.812-beta** | 同上 | [Release](https://github.com/unslothai/unsloth/releases/tag/v0.1.812-beta) |

**迁移注意：** Qwen-Image-2.1 目前需要额外的手动步骤才能运行（见 issue #11567）。预计在后续版本中会有更简化的集成方案。

---

## 新模型与硬件支持

- **Qwen-Image-2.1** — 现已支持本地执行（[指南](https://unsloth.ai/docs/models/qwen-image-2.1)）
- **LongCat-Flash-Lite-Sparse** — 通过 `longcat_flash` 支持加载（#11620）
- **NVIDIA ModelOpt FP8** — 支持通过 transformers fp8 quantizer 加载检查点（#11592）
- **Kimi-K2.7-Code** — 远程 MoE 代码训练支持（#11537）
- **AMD RDNA1 (gfx101x)** — 跟踪问题已开启；Triton buffer ops 在 RDNA1 上禁用（#11614, #11615）
- **OmniVoice TTS** — 微调笔记本需求（#11513）

---

## 性能与优化

| 领域 | 变更 | 影响 |
|------|------|------|
| **推理块** | 2 倍加速 | 60 FPS vs 30 FPS |
| **NVFP4 图像策略** | DiT 系列逐层控制（#10730） | 更优的 GPU 显存利用 |
| **Flashinfer NVFP4** | 内核项：device guard、persistent barrier、bias path、cached dispatch（#10731） | 提升 FP4 推理性能 |
| **Compressed-tensors → 4-bit** | 打包的 INT4/INT8 检查点可直接加载到 bitsandbytes（#11537） | 简化量化流程 |
| **VAE 解码** | DiT 系列编译来自 NVFP4 时间预算通道（#10889） | 降低视频生成延迟 |
| **多模型服务** | 同时保持多个模型加载（#11591） | 多模型工作流降低延迟 |

---

## 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 备注 |
|------|----------|------|------|
| **AMD GPU 检测失效**（llama.cpp） | 高 | 已关闭 #7485 | 最新 llama.cpp 构建破坏了 ROCm 检测 |
| **模型在显存中反复进出** | 高 | 已关闭 #7164 | 空闲模型被逐出导致延迟抖动 |
| **代码执行沙箱逃逸** | 严重 | 已关闭 #5191 | PowerShell subprocess 允许文件系统访问 |
| **Qwen-Image-2.1 需要额外手动步骤** | 中 | 进行中 #11567 | 本地执行需要额外配置 |
| **API Keys 无法复制** | 低 | 已关闭 #11387 | Firefox/Brave 在 Linux 上复制失败 |
| **Studio 多 GPU 微调** | 中 | 进行中 #5764 | 尽管设置了 `device_map` 仍只能使用单卡 |
| **RX 7900 XTX 上 ROCm 虚拟机错误** | 高 | 进行中 #11498 | QLoRA 训练触发 AMDGPU 虚拟机错误/复位 |
| **RDNDA1 训练无法工作** | 高 | 进行中 #11614 | RX 5700 XT (gfx1010) 上训练完全失败 |
| **XPU optimizer 崩溃** | 中 | 已关闭 #10021 | adamw_8bit 在 Intel XPU 的 optimizer.step() 时崩溃 |

---

## 这对应用开发者意味着什么

1. **Qwen-Image-2.1 现已本地可行** — 2 倍推理速度提升（60 FPS）使交互式图像工作流更加流畅，但在 #11567 解决之前需要处理额外的设置步骤。

2. **多量化路径简化** — 打包的 INT4/INT8 compressed-tensors 现在可以直接加载到 bitsandbytes 4-bit（#11537），为 Kimi-K2.7-Code 等模型简化了量化流程。

3. **AMD 训练在旧代硬件上仍不稳定** — RDNA1（RX 5700 XT）和部分 RDNA2/RDNA3 组合仍有 ROCm 问题。如果部署在 AMD 上，请验证具体 GPU 兼容性；NVIDIA 仍是生产训练的建议路径。

4. **多模型服务正在改进** — Studio 现可同时保持多个模型加载（#11591），实现更低延迟的模型切换，无需完全卸载/重新加载。

5. **关注显存抖动** — 问题 #7164 已关闭，但底层内存管理行为在某些硬件配置下仍可能导致延迟峰值。在生产部署中监控空闲状态的显存使用情况。

---

*基于 2026-09-23 的 GitHub 数据生成*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*