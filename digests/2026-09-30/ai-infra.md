# AI 基础设施日报 2026-09-30

> 生成时间: 2026-09-30 01:28 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>用户要求将报告翻译成中文。我需要：
1. 翻译所有内容，但保持Markdown结构完全一致
2. 保留所有URL、链接、项目名称、版本标签等不变
3. 使用自然的技术中文，像中文开发者技术通讯的语调
4. 保持表格、列表、标题等格式

让我逐段翻译：

标题：AI 基础设施生态系统报告 — 2026-09-30

第一部分：生态系统概述
- 保持项目名称
- 翻译描述性文字

第二部分：活动比较
- 翻译表格内容
- 保持项目名称
- 翻译观察

第三部分：模型支持竞争
- 翻译表格
- 翻译说明

第四部分：性能前沿
- 翻译表格和说明

第五部分：层级定位
- 翻译表格和说明

第六部分：趋势信号
- 翻译所有内容
- 保持项目名称和引用

最后是用户应该关注的内容。

让我开始翻译：</think>

# AI 基础设施生态系统报告 — 2026-09-30

## 1. 生态系统概述

AI 推理基础设施领域呈现出明显的分层专业化格局。**vLLM** 和 **SGLang** 在高性能服务引擎层展开直接竞争，两者均在投机解码和前缀缓存方面持续推进。**llama.cpp** 凭借 Vulkan/OpenCL/Metal 多后端支持主导本地/嵌入式运行时。**Ollama** 专注于本地 LLM 使用的开发者体验。**LiteLLM** 提供网关/翻译层，聚合 100+ 提供商。**Unsloth** 占据微调层，主导 LoRA/QLoRA 训练。当日活动显示，多模态模型（GLM-5.3、Qwen Image）、AMD ROCm 加速和 KV 缓存优化策略成为竞争焦点。

---

## 2. 活动对比

| 项目 | Issue（开放） | PR（开放） | 发布（24h） | 专注领域 |
|------|---------------|------------|-------------|----------|
| **vLLM** | ~163 | ~500 | 0 | 服务引擎 |
| **SGLang** | ~200+ | ~400+ | 0 | 服务引擎 |
| **llama.cpp** | ~200+ | ~300+ | 11 commits | 本地运行时 |
| **Ollama** | ~180 | ~190 | 1 (v0.35.1) | 本地 UX 封装 |
| **LiteLLM** | ~300+ | ~400+ | 5 (v1.100–v1.104) | 网关/翻译 |
| **Unsloth** | ~300+ | ~199 | 0 | 微调 |

**观察：**
- **LiteLLM** 发布频率最高（5 个版本，含 Docker cosign 签名验证）
- **llama.cpp** 尽管无正式发布，但提交活动最活跃
- **vLLM** 和 **SGLang** 的开放 Issue/PR 数量相当，表明并行开发强度接近

---

## 3. 模型支持竞争

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|-----------|------|--------|-----------|--------|---------|
| **GLM-5.3-Flash** | ✅ (W4A16, MXFP4, sparse-MLA) | ✅ (MI30x accuracy gate) | ❌ | ❌ | ❌ |
| **Qwen3-Next / Qwen3.8 Flash** | ✅ (MTP) | ✅ (FlyDSL GDN) | ✅ (MTP) | ❌ | ✅ (MLX) |
| **Qwen Image 2.1** | ❌ | ❌ | ❌ | ❌ | ✅ (GGUF bug) |
| **DeepSeek-V4.1** | ✅ | ✅ (TRTLLM attention) | ❌ | ❌ | ✅ (gradient ckpt) |
| **Gemma 4 26B A4B QAT** | ❌ | ❌ | ❌ | ❌ | ✅ (memory issue) |
| **System One (Kev/Laya)** | ❌ | ❌ | ❌ | ✅ (MLX + API) | ❌ |
| **GraniteForCausalLM** | ❌ | ❌ | ❌ | ✅ (MLX) | ❌ |
| **GraniteSpeech5ForCTC** | ❌ | ❌ | ✅ | ❌ | ❌ |
| **LFM (LiquidAI)** | ❌ | ❌ | ❌ | ❌ | 🚧 (fast inference RFC) |
| **T5** | ❌ | ❌ | ❌ | ❌ | 🚧 (requested) |
| **Whisper** | ✅ (tracking) | ❌ | ❌ | ❌ | ❌ |

**胜出者：Unsloth** — 模型覆盖最广，包括 Qwen Image 2.1、Gemma 4 QAT、DeepSeek-V4.1，以及进行中的 LFM/T5 支持。

**次席：llama.cpp** — 独有的 GraniteSpeech5ForCTC（编码器-only CTC）和最长的模型支持尾巴。

---

## 4. 性能前沿

| 优化领域 | 活跃项目 | 关键焦点 |
|---------|---------|----------|
| **KV Cache / 前缀缓存** | vLLM, SGLang, llama.cpp | 可编程 KV 策略 (vLLM)、LoRA 感知哈希 (vLLM)、RPC 缓存增长 (llama.cpp) |
| **投机解码** | vLLM, SGLang, llama.cpp | MTP 集成 (vLLM/llama.cpp)、DFlash 修复 (llama.cpp)、prompt logprobs 损坏 (vLLM) |
| **MoE / 专家卸载** | vLLM, SGLang, llama.cpp | 增量 MoE 卸载 RFC (vLLM)、DeepEP v2 调度 (vLLM)、MoE 瓦片选择 (llama.cpp) |
| **量化 (NVFP4/MXFP4)** | vLLM, SGLang | 每 token CuTe-DSL MoE (vLLM)、Kimi-K3 MXFP4 (SGLang)、Marlin INT4 修复 (Unsloth) |
| **AMD ROCm / gfx950** | vLLM, SGLang, llama.cpp | MI355X 优化 (vLLM)、FlyDSL GDN (SGLang)、zdnn 后端 (llama.cpp) |
| **Vulkan GDN / Kernel** | llama.cpp | Intel GDN 调优、F32 加载、MoE 感知瓦片选择 |
| **CUDA Graphs** | vLLM, SGLang | ViT Full CUDA Graph (vLLM)、零 null KV (vLLM)、DeepSeek V4.1 kernel (vLLM) |

**最活跃前沿：量化 + MoE** — 三个项目（vLLM、SGLang、Unsloth）均有活跃的 INT4/NVFP4/MXFP4 量化内核修复，反映出在消费级 GPU 上实现 dense-8B 级吞吐量的需求。

---

## 5. 层级定位

| 层级 | 项目 | 定位 |
|------|------|------|
| **网关 / 翻译** | LiteLLM | 聚合 100+ LLM API；当务之急：认证管理、流式传输修复 |
| **服务引擎（远程）** | vLLM, SGLang | 高吞吐服务器；vLLM 在 KV 卸载/前缀缓存方面领先；SGLang 在 AMD ROCm 方面领先 |
| **本地运行时** | llama.cpp | 多后端 (Vulkan/OpenCL/Metal/CUDA)；GGML 核心库 |
| **本地 UX 封装** | Ollama | 端用户 CLI/UI；专注 export/import、System One、网络搜索 |
| **微调** | Unsloth | LoRA/QLoRA 训练；独有的 BatchNorm 和 FP8Linear 修复 |
| **训练 / 微调** | — | *空白：当日无跨项目活动* |

**竞争边界：**
- **vLLM ↔ SGLang**：服务性能正面竞争；vLLM 前缀缓存略占优势，SGLang AMD ROCm 领先
- **llama.cpp ↔ Ollama**：llama.cpp 提供运行时，Ollama 包装为 UX；llama.cpp 是上游引擎
- **LiteLLM ↔ vLLM**：LiteLLM 常路由到 vLLM 部署；当日的 LiteLLM 认证修复影响 vLLM 后端用户

---

## 6. 趋势信号

### 基础设施工程师应关注

1. **可编程 KV 缓存正在成为下一个前沿** — vLLM 的 RFC (#57103) 提出了针对代理服务的可组合策略。预计更丰富的缓存策略（淘汰、优先级、多租户隔离）将成为标准。

2. **AMD ROCm 不再是二等公民** — SGLang 在 gfx950 上实现了 1.4–1.74x GDN 加速；vLLM 开启了 MI355X 优化追踪。如果在 AMD Instinct 上部署，软件栈正在快速成熟。

3. **多模态（ViT + LLM）正在转向 CUDA Graphs** — vLLM RFC #38175 提议为视觉语言模型提供完整的 CUDA Graph 支持。这预示着 VLM 推理性能将与纯文本模型持平。

4. **细粒度量化（NVFP4、MXFP4、Marlin）处于动荡期** — 三个项目的内核正确性修复正在活跃中。在修复落地之前（vLLM 0.29、SGLang MLX、Unsloth Marlin），避免在生产环境中升级量化后端。

5. **LiteLLM 的 Docker cosign 采用表明供应链安全已成为必备条件** — 所有五个版本都包含签名镜像。预计其他项目也将出现类似要求。

6. **代理服务 + 前缀缓存 bug 聚集** — 多个项目（vLLM、SGLang、Unsloth）在前缀缓存 + 投机解码或 MTP 导致输出损坏方面存在开放 Issue。如果构建长对话代理，请彻底测试前缀缓存。

### 应用开发者应关注

| 信号 | 行动 |
|------|------|
| GLM-5.3 长解码退化 (vLLM) | 生产环境中避免 W4A16 + 累积推理 |
| Ollama export/import 上线 | 用于离线模型传输；v0.35.2 前测试 |
| llama.cpp Vulkan A770 长时间运行退化 | 为 7h+ 解码工作负载规划重启 |
| LiteLLM `reasoning_effort` 静默降级 | 验证你的模型映射包含能力信息 |
| Unsloth BatchNorm 修复 | 如果冻结了编码器，请重新训练 LoRA |

---

*跨项目分析基于 GitHub 数据 — 2026-09-30*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate this English digest into Chinese, following specific rules. Let me translate it carefully:

1. Keep all Markdown structure
2. Keep URLs, issue/PR numbers, code names, etc. as-is
3. Use natural technical Chinese (the register of a Chinese developer newsletter)
4. Don't add any preamble, explanation, or markdown fences
5. Preserve formatting exactly

Let me translate section by section:

## 1. Today's Highlights
→ 今日要闻

## 2. Releases & Breaking Changes
→ 发布与重大变更

## 3. New Model & Hardware Support
→ 新模型与硬件支持

## 4. Performance & Optimization
→ 性能与优化

## 5. Stability & Regressions
→ 稳定性与回归问题

## 6. What This Means for Application Developers
→ 对应用开发者的影响

Let me go through the whole translation now.</think>

# vLLM 每日简报 — 2026-09-30

## 1. 今日要闻

vLLM 项目今日继续活跃开发。围绕 ViT（视觉 Transformer）CUDA Graph 支持多模态模型以及可编程 KV Cache 策略，出现了重要的 RFC 提案。在稳定性方面，若干高优先级的 bug 影响 GLM-5.3-Flash 和 DeepSeek-V4.1-Flash 在特定配置下的运行。AMD ROCm（MI355X）和 NVFP4 量化后端的性能优化工作正在进行中。

---

## 2. 发布与重大变更

过去 24 小时内无新版本发布。

---

## 3. 新模型与硬件支持

- **GLM-5.3-Flash**：正在进行稀疏 MLA 注意力路径的适配工作，支持 Ada (RTX 4090)（[#54059](https://github.com/vllm-project/vllm/issues/54059)）以及 MXFP4 量化（[#57406](https://github.com/vllm-project/vllm/issues/57406)）
- **Qwen3.8-2.4T-A95B**：ROCm/AMD gfx950 和 MI355X 性能优化跟踪 issue 已开启（[#57149](https://github.com/vllm-project/vllm/issues/57149)）
- **DeepSeek-V4.1-Flash**：调查 MoE 路由内核在 NVIDIA H20 上的非法内存访问问题（[#56389](https://github.com/vllm-project/vllm/issues/56389)）
- **Whisper**：功能需求跟踪 issue 已开启，计划后续支持（[#25750](https://github.com/vllm-project/vllm/issues/25750)）

---

## 4. 性能与优化

| PR/Issue | 描述 | 状态 |
|----------|-------------|--------|
| [#59337](https://github.com/vllm-project/vllm/pull/59337) | 每次前向动态选择 DeepEP v2 分发布局（避免 CUDA Graph 中最差情况布局） | OPEN |
| [#50030](https://github.com/vllm-project/vllm/pull/50030) | 通过 FlashInfer 添加 per-token NVFP4 CuTe-DSL MoE 后端 | OPEN |
| [#57158](https://github.com/vllm-project/vllm/pull/57158) | CUDA Graph 捕获后置零空 KV 块（修复 masked/padded 条目正确性问题） | OPEN |
| [#58411](https://github.com/vllm-project/vllm/pull/58411) | Model Runner V2：使用随机虚拟输入防止内存分析时 MoE Expert 负载不均 | OPEN |
| [#57149](https://github.com/vllm-project/vllm/issues/57149) | AMD MI355X 性能优化跟踪（计划堆叠多个 PR） | OPEN |
| [#57103](https://github.com/vllm-project/vllm/issues/57103) | RFC：可编程 KV Cache — 面向 Agent 服务的可组合策略 | OPEN |
| [#38256](https://github.com/vllm-project/vllm/issues/38256) | RFC：增量式 MoE Expert Offloading，支持 GPU 缓存 + 异步流水线 | OPEN |

---

## 5. 稳定性与回归问题

**严重（高优先级）：**

- [#56868](https://github.com/vllm-project/vllm/issues/56868) — **GLM-5.3-Flash 长序列解码退化**问题，在累计推理解码后出现（W4A16 量化，B300，TP1）。33 条评论。尚无修复 PR。
- [#59115](https://github.com/vllm-project/vllm/issues/59115) — GLM-5.3-Flash 长上下文 Chunked Prefill + MTP 场景下非法内存访问（B200，TP4+EP）。v0.30.0 版本可复现。6 条评论。
- [#56389](https://github.com/vllm-project/vllm/issues/56389) — DeepSeek-V4.1-Flash Triton `dsv4_topk` MoE 内核在高并发下非法内存访问（H20，max_num_seqs > 256）。11 条评论。

**中等优先级：**

- [#53912](https://github.com/vllm-project/vllm/issues/53912) — Prefix Caching + MTP 导致混合 Mamba/GDN 模型输出损坏（v0.28.0 版本，回归自 #43559）。20 条评论。
- [#53488](https://github.com/vllm-project/vllm/issues/53488) — MTP 投机解码时 `prompt_logprobs` 数据静默损坏（Qwen3.5 系列，Chunked Prefill）。7 条评论。
- [#47194](https://github.com/vllm-project/vllm/issues/47194) — Qwen3.6 混合模型 Prefix Caching + MTP3 导致 Tool Call 泄漏。7 条评论。
- [#57032](https://github.com/vllm-project/vllm/issues/57032) — Drafter KV 组在 dflash 中始终无法被识别，Prefix Caching 对 Mamba 组静默失效。8 条评论。

**已修复/合并：**

- [#51899](https://github.com/vllm-project/vllm/pull/51899) — 按来源为 Prefix Cache 额外键打标签（已关闭）
- [#59329](https://github.com/vllm-project/vllm/pull/59329) — KV Offload P2P：丢弃超时存储任务块，不参与本轮供应
- [#59335](https://github.com/vllm-project/vllm/pull/59335) — 将 LoRA 路径纳入 Prefix Cache 块哈希（堆叠于 #51899 之上）

---

## 6. 对应用开发者的影响

1. **Tool-calling 回归**：若在 Qwen3.6/Qwen3.5 混合模型上使用 MTP + Prefix Caching，需注意潜在的 Tool Call 泄漏问题（[#47194](https://github.com/vllm-project/vllm/issues/47194)）。作为临时规避方案，可关闭 Prefix Caching。

2. **GLM-5.3 生产环境谨慎**：长序列解码退化 bug（[#56868](https://github.com/vllm-project/vllm/issues/56868)）影响 W4A16 量化配置的生产部署。修复前应避免累计推理工作负载。

3. **LoRA + Prefix Caching**：修复（[#59335](https://github.com/vllm-project/vllm/pull/59335)）确保 LoRA 适配器变更能被正确检测到缓存查找中。使用 LoRA + Prefix Caching 的场景在合并后将获得更准确的缓存行为。

4. **DeepSeek-V4.1 在 H20 上部署**：若在 H20 GPU 上部署，建议将 `max_num_seqs` 设置为 256 以规避 MoE 内核崩溃问题（[#56389](https://github.com/vllm-project/vllm/issues/56389)）。

5. **可观测性改进**：引擎阶段卡顿的可选诊断功能（[#49628](https://github.com/vllm-project/vllm/pull/49628)）将有助于排查生产环境中的请求挂起问题。合并后可开启诊断。

6. **KV Offload 可靠性**：P2P 超时处理修复（[#59329](https://github.com/vllm-project/vllm/pull/59329)）提升了多 GPU 部署使用 KV Offload 分层时的稳定性。

---

*数据来源：GitHub — vllm-project/vllm | 2026-09-30*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang digest into Chinese, following specific rules about how to handle various elements. Let me analyze what needs to be preserved and how to translate the content naturally.

Key points to follow:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, code spans, numbers, dates verbatim
4. Keep project names, issue/PR references, API identifiers in original form
5. Use natural technical Chinese, register of Chinese developer newsletter

Let me translate section by section:

## Releases & Breaking Changes
- No releases in the last 24 hours
-> 最近24小时无版本发布

## New Model & Hardware Support
-> 新模型与硬件支持

- AMD Kimi-K3 MXFP4 on ROCm — PR #40811 introduces support for serving AMD Quark's Kimi-K3 checkpoint with MXFP4 quantization on ROCm. The PR also adds corresponding nightly accuracy gates.
-> AMD Kimi-K3 MXFP4 (ROCm) — PR #40811 新增了对在 ROCm 上使用 MXFP4 量化加载 AMD Quark Kimi-K3 模型的支持。该 PR 同时添加了对应的夜间精度测试门禁。

- AMD GLM-5.3-Flash MI30x — PR #41475 adds a GSM8K accuracy gate for GLM-5.3-Flash on MI30x (gfx942), completing the ROCm coverage for this model.
-> AMD GLM-5.3-Flash MI30x — PR #41475 为 MI30x (gfx942) 上的 GLM-5.3-Flash 添加了 GSM8K 精度门禁，完善了该模型在 ROCm 上的覆盖。


- Moore Threads (MUSA) GPU support emerges as an open roadmap item, with community interest showing 14 upvotes for first-class integration (Issue #16565). NVIDIA SM90 also gains attention for Q8KV8 FP8 sparse MLA prefill kernel development, signaling emerging hardware optimization opportunities.

The performance work focuses on AMD's FlyDSL GDN Prefill Backend through PR #39595, integrating AITER's fused implementations of GDN operations to enhance ROCm compatibility.

For the Qwen3.5-397B model with 45 Gated DeltaNet layers at tensor-parallelism level 4, the FlyDSL implementation delivers 1.4-1.74x speedup on prefill batch processing. AMD's Qwen3-Next optimizations include PR #39140 combining tensor-parallel all-reduce with Gemma RMSNorm and per-group FP8 quantization on gfx950, while PRs #39554 and #39873 integrate GDN decode and prefill kernels to reduce the four-kernel chain to a fused implementation. FLUX.3 FP8 rowwise quantization is also being addressed.

Additional optimizations target AMD Quark weight layout for faster ROCm decoding, KDA prefill synchronization by reusing host lengths, and speculative decoding attention setup to reduce repeated initialization overhead for GLM-5.3-Flash. Several high and medium severity bugs remain open, including a double-free issue with `--strip-thinking-cache` and KV cache slot tracking problems.

Logprobs drift in GLM-5.3-Flash-NVFP4 appears linked to KDA fusion, while long-context NIAH needle corruption affects GLM-5.3-Flash DSA. LoRA adapters using `use_rslora=True` have incorrect scaling, and `--max-total-tokens` crashes on hybrid mamba/GDN models. The `--enable-linear-replayssm` flag forces no_buffer mode, degrading prefix caching significantly. Worker launcher cleanup and stop sequence detection also need fixes.

For hybrid Mamba/GDN deployments, avoid `--enable-linear-replayssm` in production—it forces no_buffer and can inflate TTFT substantially. The radix-tree double-free bug when using `--strip-thinking-cache` with retraction warrants close monitoring. ROCm users should see improvements from the Qwen3-Next and GLM-5.3-Flash optimizations landing this week on MI300x and MI350 hardware. LoRA with RSLora is currently broken due to incorrect scaling, and the `/v1/messages` endpoint has a stop sequence detection bug that may require workarounds. CI remains reasonably stable despite some flaky tests.</think>

# SGLang 要闻 — 2026-09-30

## 今日要点

SGLang 项目正在积极推进 AMD GPU 支持，多个 PR 针对 ROCm 上的 Qwen3-Next 和 GLM-5.3-Flash 进行优化，同时持续改进 CI 基础设施。AITER 升级依赖项的跟踪 issue (#21302) 已收到 31 条社区评论，表明下个发布周期前有大量协调工作正在进行。

---

## 版本发布与破坏性变更

- **最近 24 小时无版本发布**

---

## 新模型与硬件支持

- **AMD Kimi-K3 MXFP4 (ROCm)** — PR #40811 新增了对在 ROCm 上使用 MXFP4 量化加载 AMD Quark Kimi-K3 模型的支持。该 PR 同时添加了对应的夜间精度测试门禁。

- **AMD GLM-5.3-Flash MI30x** — PR #41475 为 MI30x (gfx942) 上的 GLM-5.3-Flash 添加了 GSM8K 精度门禁，完善了该模型在 ROCm 上的覆盖。

- **摩尔线程 (MUSA) GPU 路线图** — Issue #16565 跟踪一等公民支持，收到 14 个 👍 社区关注。

- **SM90 Q8KV8 FP8 稀疏 MLA Prefill** — Issue #25746 提出针对 NVIDIA SM90 硬件的稀疏 MLA Prefill 内核集成路线图。

---

## 性能优化

- **AMD FlyDSL GDN Prefill 后端** — PR #39595 集成了 AITER 的 GDN prepare 阶段和 K5 状态扫描的融合 FlyDSL 实现。针对 TP4 下 45 层 Gated DeltaNet 的 Qwen3.5-397B，FlyDSL 路径在 prefill 批处理上实现了 **1.4–1.74 倍加速**。

- **AMD Qwen3-Next：融合 TP4 All-Reduce + Gemma RMSNorm + 分组 FP8 量化** — PR #39140 在 gfx950 上引入融合集体操作，将张量并行 all-reduce 与 RMSNorm 和分组 FP8 量化融合到单一内核中。

- **AMD Qwen3-Next GDN 内核** — 两个 PR 集成 AITER 融合内核：
  - PR #39554：gfx950 的 GDN decode 内核
  - PR #39873：GDN prefill 内核，将四内核链融合为单一实现

- **FLUX.3 FP8 行-wise 量化** — PR #41671 使用 Triton 融合 Flux3 行-wise FP8 量化，优化扩散流水线。

- **AMD Quark 权重布局** — PR #41794 优化权重布局，加速 ROCm 上 Quark 量化模型的解码。

- **KDA Prefill 同步优化** — PR #38431 复用 host lengths 避免 KDA prefill 同步开销。

- **Speculative Decoding Attention 初始化** — PR #38213 减少 GLM-5.3-Flash speculative decoding 中重复的 attention 初始化。

---

## 稳定性与回归问题

| 严重程度 | Issue | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **高** | #41617 — `--strip-thinking-cache` + 回缩导致仍在 radix tree 中持有的 KV cache 槽发生 **double-free** | Open | — |
| **高** | #41609 — GLM-5.3-Flash-NVFP4 teacher-forced logprobs 相比 v0.5.20 在 SM100 上出现漂移（疑似 KDA 融合门控问题，#39688） | Open | — |
| **高** | #41494 — GLM-5.3-Flash DSA k-pool indexer 在长上下文 (16K) NIAH needle 上损坏数字 | Open | — |
| **中** | #40835 — 使用 `use_rslora=True` 的 LoRA adapter 缩放错误 | Open | — |
| **中** | #41654 — 混合 mamba/GDN 模型上 `--max-total-tokens` 崩溃，提示 `TypeError: NoneType // int` | Open | — |
| **中** | #37834 — `--enable-linear-replayssm` 强制 `no_buffer`，导致 mamba 前缀缓存退化，TTFT 最高膨胀至 **4.7 倍** | Open | — |
| **中** | #41539 — 启动期间 launcher 退出的 Worker 向 PID 1 发送 SIGQUIT（进程清理问题） | Open | — |
| **低** | #41731 — `/v1/messages`：`stop_sequences` 命中报告为 `end_turn` 且 `stop_sequence: null` | Open | — |

**CI 状态**（依据 #17050）：1 个 broken 测试，10 个 flaky 测试，1108 个近期修复。

---

## 这对应用开发者意味着什么

1. **如果你运行混合 Mamba/GDN 模型**：在生产环境中避免使用 `--enable-replayssm` — 它会强制 `no_buffer` 模式，可能将 TTFT 膨胀至 4.7 倍。使用 `--strip-thinking-cache` 配合回缩时的 radix-tree double-free bug (#41617) 也值得关注；请监控内存问题。

2. **如果你使用 AMD ROCm**：本周落地的 Qwen3-Next 和 GLM-5.3-Flash 优化在 MI300x (gfx942) 和 MI350 (gfx950) 上应能提供显著的吞吐提升。如果你服务 Kimi-K3，MXFP4 支持现已可用。

3. **如果你使用 LoRA 配合 RSLora**：Bug #40835 意味着当前使用 `use_rslora=True` 的 LoRA adapter 缩放不正确——请在此问题修复前避免此配置。

4. **如果你依赖 stop sequence 检测**：Chat API 存在 bug，stop sequence 命中会报告 `stop_sequence: null`——你可能需要在 agent 逻辑中处理此问题。

5. **如果你基于 SGLang 的 Chat API 构建**：CI 相当稳定（仅 1 个 broken 测试），尽管 10 个 flaky 测试可能导致 CI 运行中偶尔出现假失败。

---

*基于 2026-09-30 的 GitHub 数据生成*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate this English digest about llama.cpp into Chinese. I need to:

1. Translate the text content
2. Keep all Markdown structure (headings, tables, lists, etc.)
3. Keep URLs, issue numbers, code identifiers as-is
4. Use natural technical Chinese

Let me translate section by section:

## 1. Today's Highlights
- Continue with active optimization of the Vulkan backend
- Intel-specific GDN shader tuning
- F32 matrix loading optimization
- MoE tile selection
- GGML core ODR fix and AVX512-FP16 improvements
- Notable RFC proposes adding diffusion-based image/video/audio generation support via LTX-2 GGUF models

## 2. Releases & Breaking Changes
- GGML C++ ODR fix — proper use of GGML_COMMON_DECL_CPP to prevent one-definition-rule violations
- GGML tensor validation — now requires input tensors to be GGML_OP_NONE
- CI: added zdnn backend build (not yet tested)

Migration note: Projects linking against GGML as a shared library should verify no ODR violations remain after b11264.

## 3. New Model & Hardware Support

## 4. Performance & Optimization

## 5. Stability & Regressions

## 6. What This Means for Application Developers

Let me translate this now, maintaining the exact Markdown structure and formatting.</think>

# llama.cpp 动态 — 2026-09-30

## 1. 今日要闻

项目持续推进 Vulkan 后端优化，针对 Intel 的 GDN 着色器、F32 矩阵加载和 MoE 瓦片选择进行了多项调优。GGML 核心修复了 ODR 问题并改进了 AVX512-FP16。值得关注的 RFC 提议通过 LTX-2 GGUF 模型新增基于扩散的图像/视频/音频生成能力。

## 2. 版本更新与破坏性变更

| 提交 | 描述 | 链接 |
|------|------|------|
| b11264 | **GGML C++ ODR 修复** — 正确使用 `GGML_COMMON_DECL_CPP` 防止单一定义规则违规 | [#29504](https://github.com/ggml-org/llama.cpp/pull/29504) |
| b11261 | **GGML 张量验证** — 现要求输入张量为 `GGML_OP_NONE` | [#29647](https://github.com/ggml-org/llama.cpp/issues/29647) |
| b11269 | CI：新增 zdnn 后端构建（尚未测试） | [#29541](https://github.com/ggml-org/llama.cpp/pull/29541) |

**迁移注意：** 使用 GGML 作为共享库的项目应在 b11264 后验证是否仍存在 ODR 违规。

## 3. 新模型与硬件支持

| 领域 | 更新 | PR/Issue |
|------|------|----------|
| **模型** | GraniteSpeech5ForCTC（Turbo CTC）— 非自回归纯编码器架构 | [#29446](https://github.com/ggml-org/llama.cpp/pull/29446) |
| **模型** | Qwen3.8-Flash-Next MTP 支持（共享 MTP 模块可实现 1.3–2 倍推理加速） | [#28243](https://github.com/ggml-org/llama.cpp/pull/28243) |
| **对话格式** | 新增 LLM-jp-4.1 解析器用于 `--jinja` | [#29681](https://github.com/ggml-org/llama.cpp/pull/29681) |
| **量化** | Bonsai 8B 的 OpenVINO Q1/Q2 格式 | [#29185](https://github.com/ggml-org/llama.cpp/pull/29185) |
| **硬件** | Hexagon：支持 FP32 GELU_ERF 和 GEGLU_ERF | [#29631](https://github.com/ggml-org/llama.cpp/issues/29631) |
| **硬件** | AMD zdnn 后端（IBM Power AI）加入 CI | [#29541](https://github.com/ggml-org/llama.cpp/pull/29541) |

## 4. 性能优化

| 后端 | 变更 | 影响 |
|------|------|------|
| **Vulkan** | Intel GDN 着色器调优 | 提升 Intel GPU 性能 |
| **Vulkan** | F32 A 矩阵 2 对齐加载（此前为单元素） | Intel 性能提升 |
| **Vulkan** | MoE 感知的 mat_mul_id 瓦片选择 — 修复低行数专家调度时错误的瓦片选取 | 大幅提升多专家 MoE 吞吐量修复（如 Qwen3-Coder-Next 30B-A3B 512 专家） |
| **Vulkan** | Adreno 750 matvec 兼容性保护（可选开启） | 解决着色器编译器段错误的临时方案 |
| **Vulkan** | AMD RDNA3 专有驱动：8 列时仅使用 4 行 MMVQ | 驱动特定回退 |
| **GGML** | AVX512-FP16：使用 f32 累加 f16 点积 | [#29545](https://github.com/ggml-org/llama.cpp/pull/29545) |
| **Metal** | MoE 和 SSM_CONV 融合优化（top-k 路由、加权归约、RMS_NORM+SCALE） | Apple Silicon 新融合路径 |
| **CUDA** | iq4_nl 反量化内核增加短行保护 | 防止潜在卡死的 bug 修复 |
| **OpenCL** | 修复 GEMV 权重预取过fetch导致卡死 | Q4_K split-K decode 修复 |

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | Vulkan：多专家 MoE 上 n_tokens=9 时批处理解码吞吐量骤降（AMD Strix Halo）— TG 从 B=8 降至 B=9 下降 35% | 待解决 — [#25356](https://github.com/ggml-org/llama.cpp/issues/25356) |
| **高** | Vulkan A770 长时间运行解码性能下降 — 7–8 小时后出现空 EOS 回复，GPU fence 超时 | 待解决 — [#29526](https://github.com/ggml-org/llama.cpp/issues/29526) |
| **高** | Qwen3.8 DFlash/MTP 推测解码时 Vulkan 上出现越界 token（248320 = n_vocab） | 待解决 — [#28158](https://github.com/ggml-org/llama.cpp/issues/28158) |
| **中** | ggml-hexagon 在 Snapdragon 7 Gen 4 上：n≥5 时 MUL_MAT 返回 inf，FLASH_ATTN_EXT 失败 | 待解决 — [#29473](https://github.com/ggml-org/llama.cpp/issues/29473) |
| **中** | RPC 节点缓存无限增长 | 待解决 — [#26143](https://github.com/ggml-org/llama.cpp/issues/26143) |
| **中** | CUDA 在 Qwen3.5 hybrid 深层 KV 位置时 decode+prefill 崩溃（RTX 5060 Ti Blackwell） | 待解决 — [#29172](https://github.com/ggml-org/llama.cpp/issues/29172) |
| **中** | CUDA 性能回退 b10655 → b11140（Blackwell） | 待解决 — [#29341](https://github.com/ggml-org/llama.cpp/issues/29341) |
| **已修复** | 不带 "-dev" 标志构建会崩溃（b11222+） | 已关闭 — [#29551](https://github.com/ggml-org/llama.cpp/issues/29551) |

## 6. 应用开发者需要关注的事项

- **Intel Vulkan 用户**：预计解码性能将因 GDN 着色器和 F32 加载优化而提升。
- **MoE 模型用户**：瓦片选择修复（b11265）应显著改善 Qwen3-Coder-Next 等多专家模型的吞吐量。
- **Qualcomm Adreno 750 用户**：如遇着色器编译器崩溃，请开启兼容性保护标志。
- **Vulkan 生产部署**：监控 A770 长时间运行性能下降问题；可能需要定期重启。
- **Metal 用户**：新的 MoE/SSM_CONV 融合路径应提升 Apple Silicon 吞吐量。
- **服务器部署**：RAM 缓冲的 prompt cache 存在 bug，非相关对话的内容可能泄漏到新槽位 — 在修复前请避免在多租户场景使用 `--cache-ram`。
- **Qwen3.8 + MTP 用户**：请避开 Vulkan 后端，直至越界 token bug 修复。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest from English to Chinese (Simplified). I need to:
1. Only output the translation
2. No preamble, no explanation, no markdown fences
3. Preserve all Markdown structure exactly
4. Keep URLs, numbers, code references, issue/PR numbers as-is
5. Use natural technical Chinese register

Let me translate this digest:

---

# Ollama 摘要 — 2026-09-30

## 今日重点

Ollama 发布 **v0.35.1**，包含 llama.cpp 升级至 b11232、MLX 版本更新，以及新功能：每次响应支持 10 次网络搜索。团队正在积极开发 System One 模型支持，已有多个 PR 合并（MLX 后端、API 文档、显式功能声明）。值得注意的是，一个新的 PR 引入了 `ollama export` 和 `ollama import` 命令用于离线模型传输。

---

## 发布与重大变更

| 版本 | 变更 | 链接 |
|---------|---------|-------|
| **v0.35.1** | llama.cpp 升级至 b11232；MLX 版本升级；每次响应现支持 10 次网络搜索 | [PR #18651](https://github.com/ollama/ollama/pull/18651), [PR #18652](https://github.com/ollama/ollama/pull/18652), [PR #18602](https://github.com/ollama/ollama/pull/18602) |

**注意：** v0.35.0 错误地被标记为预发布版本且未带 `-rc` 后缀（[Issue #18706](https://github.com/ollama/ollama/issues/18706)）。

---

## 新模型与硬件支持

| 类别 | 详情 | 链接 |
|----------|---------|-------|
| **System One 模型** | MLX 后端支持已合并；API 文档已添加；Modelfile 显式功能声明 | [PR #18701](https://github.com/ollama/ollama/pull/18701), [PR #18702](https://github.com/ollama/ollama/pull/18702), [PR #18708](https://github.com/ollama/ollama/pull/18708) |
| **Granite (MLX)** | GraniteForCausalLM 密集架构现已支持 MLX 后端部署 | [PR #17972](https://github.com/ollama/ollama/pull/17972) |
| **VRAM 动态上下文** | 文档更新：默认上下文长度根据 VRAM 动态调整至 4k/32k/256k，而非固定 4096 | [PR #18710](https://github.com/ollama/ollama/pull/18710) |

---

## 性能与优化

过去 24 小时内未报告重大性能基准或吞吐量改进。正在处理运行时行为的活跃 PR：

- **思考预算边界**：建议限制每次请求或每个模型的思考 token 数量以防止失控推理（[PR #17566](https://github.com/ollama/ollama/pull/17566)）
- **模型导出/导入**：新的 CLI 命令支持离线模型在设备间传输（[PR #18578](https://github.com/ollama/ollama/pull/18578)）

---

## 稳定性与回归

### 高严重性

| 问题 | 描述 | 状态 |
|-------|-------------|--------|
| [#18685](https://github.com/ollama/ollama/issues/18685) | **CUDA/Linux**：llama-server 在缓存命中任务上卡死；后续所有请求均挂起直至模型卸载 | 待处理 |
| [#18505](https://github.com/ollama/ollama/issues/18505) | **MLX nvfp4**：单槽持续负载下预填充阶段请求停滞；仅 SIGTERM 可恢复 | 待处理 |
| [#18683](https://github.com/ollama/ollama/issues/18683) | **计费**：账户陷入自动化 Stripe 循环，阻止访问 Ollama Cloud | 待处理 |

### 中等严重性

| 问题 | 描述 | 状态 |
|-------|-------------|--------|
| [#18368](https://github.com/ollama/ollama/issues/18368) | **macOS GUI**：60 秒后聊天处理静默失败，无任何通知 | 待处理 |
| [#17428](https://github.com/ollama/ollama/issues/17428) | **Apple Silicon**：嵌入运行器在"Stopping..."状态卡住，/api/embed 请求挂起 | 待处理 |
| [#18704](https://github.com/ollama/ollama/issues/18704) | **Windows CUDA**：`--list-devices` 偶发返回空 stdout 但退出码为 0 | 待处理 |
| [#18193](https://github.com/ollama/ollama/issues/18193) | **glm-5.3 云端**：无限推理循环导致任务中止 | 待处理 |

### 已合并修复

- **#18288**：修复思考关闭标签解析泄露
- **#17567**：修复 Linux 上 libdl 链接问题（glibc < 2.34）

---

## 这对应用开发者的意义

1. **导出/导入即将推出**：新的 `ollama export` 和 `ollama import` 命令（[PR #18578](https://github.com/ollama/ollama/pull/18578)）将支持手动模型传输，适用于气隙或离线环境——对企业部署至关重要。

2. **System One 模型就绪**：MLX 后端支持现已合并，开发者可以开始集成快速"决策"模型（如 Kev、Laya）以及完整 LLMs。

3. **macOS 稳定性问题**：报告了多个 macOS 应用相关问题（60 秒静默失败、嵌入运行器卡死）。如果在 Apple Silicon 上运行嵌入任务，请监控运行器是否卡住。

4. **Windows CUDA 用户**：设备发现间歇性问题（[#18704](https://github.com/ollama/ollama/issues/18704)）可能影响 GPU 选择——考虑使用显式设备配置。

5. **VRAM 规划**：默认上下文长度现在随可用 VRAM 扩展（高端显卡最高 256k token）。请确保您的部署文档反映新的默认值。

6. **计费**：如果使用 Ollama Cloud，请关注 Stripe 问题（[#18683](https://github.com/ollama/ollama/issues/18683)）——变通方案是直接联系支持团队。</think>

# Ollama 摘要 — 2026-09-30

## 今日重点

Ollama 发布 **v0.35.1**，包含 llama.cpp 升级至 b11232、MLX 版本更新，以及新功能：每次响应支持 10 次网络搜索。团队正在积极开发 System One 模型支持，已有多个 PR 合并（MLX 后端、API 文档、显式功能声明）。值得注意的是，一个新的 PR 引入了 `ollama export` 和 `ollama import` 命令用于离线模型传输。

---

## 发布与重大变更

| 版本 | 变更 | 链接 |
|---------|---------|-------|
| **v0.35.1** | llama.cpp 升级至 b11232；MLX 版本升级；每次响应现支持 10 次网络搜索 | [PR #18651](https://github.com/ollama/ollama/pull/18651), [PR #18652](https://github.com/ollama/ollama/pull/18652), [PR #18602](https://github.com/ollama/ollama/pull/18602) |

**注意：** v0.35.0 错误地被标记为预发布版本且未带 `-rc` 后缀（[Issue #18706](https://github.com/ollama/ollama/issues/18706)）。

---

## 新模型与硬件支持

| 类别 | 详情 | 链接 |
|----------|---------|-------|
| **System One 模型** | MLX 后端支持已合并；API 文档已添加；Modelfile 显式功能声明 | [PR #18701](https://github.com/ollama/ollama/pull/18701), [PR #18702](https://github.com/ollama/ollama/pull/18702), [PR #18708](https://github.com/ollama/ollama/pull/18708) |
| **Granite (MLX)** | GraniteForCausalLM 密集架构现已支持 MLX 后端 | [PR #17972](https://github.com/ollama/ollama/pull/17972) |
| **VRAM 动态上下文** | 文档更新：默认上下文长度根据 VRAM 调整为 4k/32k/256k，而非固定 4096 | [PR #18710](https://github.com/ollama/ollama/pull/18710) |

---

## 性能与优化

过去 24 小时内未报告重大性能基准或吞吐量改进。正在处理运行时行为的活跃 PR：

- **思考 token 预算边界**：提议限制每次请求或每个模型的思考 token 数量以防止失控推理（[PR #17566](https://github.com/ollama/ollama/pull/17566)）
- **模型导出/导入**：新的 CLI 命令支持离线模型在设备间传输（[PR #18578](https://github.com/ollama/ollama/pull/18578)）

---

## 稳定性与回归

### 高严重性

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#18685](https://github.com/ollama/ollama/issues/18685) | **CUDA/Linux**：llama-server 在缓存命中任务上卡死；后续所有请求均挂起直至模型卸载 | Open |
| [#18505](https://github.com/ollama/ollama/issues/18505) | **MLX nvfp4**：单槽持续负载下预填充阶段请求停滞；仅 SIGTERM 可恢复 | Open |
| [#18683](https://github.com/ollama/ollama/issues/18683) | **计费**：账户陷入自动化 Stripe 循环，阻止访问 Ollama Cloud | Open |

### 中等严重性

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#18368](https://github.com/ollama/ollama/issues/18368) | **macOS GUI**：60 秒后聊天处理静默失败，无任何通知 | Open |
| [#17428](https://github.com/ollama/ollama/issues/17428) | **Apple Silicon**：嵌入运行器在"Stopping..."状态卡住，/api/embed 请求挂起 | Open |
| [#18704](https://github.com/ollama/ollama/issues/18704) | **Windows CUDA**：`--list-devices` 偶发返回空 stdout 但退出码为 0 | Open |
| [#18193](https://github.com/ollama/ollama/issues/18193) | **glm-5.3 云端**：无限推理循环导致任务中止 | Open |

### 已合并修复

- **#18288**：修复思考关闭标签解析泄露
- **#17567**：修复 Linux 上 libdl 链接问题（glibc < 2.34）

---

## 这对应用开发者的意义

1. **导出/导入即将推出**：新的 `ollama export` 和 `ollama import` 命令（[PR #18578](https://github.com/ollama/ollama/pull/18578)）将支持手动模型传输，适用于气隙或离线环境——对企业部署至关重要。

2. **System One 模型就绪**：MLX 后端支持现已合并，开发者可以开始集成快速"决策"模型（如 Kev、Laya）以及完整 LLMs。

3. **macOS 稳定性问题**：报告了多个 macOS 应用相关问题（60 秒静默失败、嵌入运行器卡死）。如果在 Apple Silicon 上运行嵌入任务，请监控运行器是否卡住。

4. **Windows CUDA 用户**：设备发现间歇性问题（[#18704](https://github.com/ollama/ollama/issues/18704)）可能影响 GPU 选择——考虑使用显式设备配置。

5. **VRAM 规划**：默认上下文长度现在随可用 VRAM 扩展（高端显卡最高 256k token）。请确保您的部署文档反映新的默认值。

6. **计费**：如果使用 Ollama Cloud，请关注 Stripe 问题（[#18683](https://github.com/ollama/ollama/issues/18683)）——变通方案是直接联系支持团队。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the English LiteLLM digest into Chinese. I need to:
1. Translate all the content while preserving the exact Markdown structure
2. Keep all technical identifiers, URLs, issue numbers, version tags as-is
3. Use natural technical Chinese, like a Chinese developer newsletter
4. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate section by section, maintaining the format exactly.</think>

# LiteLLM 速报 — 2026-09-30

## 今日要闻

LiteLLM 项目在过去 24 小时内发布了五个版本（v1.100.4 到 v1.104.0-rc.2），全部集成了 cosign 镜像签名验证以保障供应链安全。当前开发活动主要集中在路由、认证和 LLM 翻译层的 bug 修复上，在代理权限执行和 OpenTelemetry v2 排除方面取得了显著进展。流式块处理和推理工作量验证方面仍有一些正确性问题尚未解决。

---

## 版本发布与重大变更

| 版本 | 说明 | 参考 |
|------|------|------|
| **v1.104.0-rc.2** | 发布候选版；Docker 镜像使用 `0112e53` 密钥进行 cosign 签名 | [GitHub](https://github.com/BerriAI/litellm/releases/tag/v1.104.0-rc.2) |
| **v1.103.1** | 稳定版，镜像已签名 | [GitHub](https://github.com/BerriAI/litellm/releases/tag/v1.103.1) |
| **v1.102.2** | 稳定版，镜像已签名 | [GitHub](https://github.com/BerriAI/litellm/releases/tag/v1.102.2) |
| **v1.101.3** | 稳定版，镜像已签名 | [GitHub](https://github.com/BerriAI/litellm/releases/tag/v1.101.3) |
| **v1.100.4** | 稳定版，镜像已签名 | [GitHub](https://github.com/BerriAI/litellm/releases/tag/v1.100.4) |

**所有 LiteLLM Docker 镜像现均已使用 cosign 签名** — 请使用 `0112e53` 密钥进行验证。

---

## 新模型与硬件支持

过去 24 小时内无新模型或硬件支持公告。

---

## 性能与优化

| 领域 | 变更 | PR/参考 |
|------|------|---------|
| **认证管理** | 通过 Redis 管道刷新认证管理对象，而非 16 次串行调用 | [#43776](https://github.com/BerriAI/litellm/pull/43776)（已关闭） |
| **OTel v2** | `excluded_services` 允许租户目标选择退出数据存储跨度追踪 | [#43278](https://github.com/BerriAI/litellm/pull/43278) |
| **批处理** | 在回调中存储批量 JSONL 行项目，用于提供商过期的记录 | [#41691](https://github.com/BerriAI/litellm/pull/41691) |
| **UI 日志** | 在日志搜索、表格和详情面板中显示 `x-litellm-call-id`，便于追踪关联 | [#42436](https://github.com/BerriAI/litellm/pull/42436) |

---

## 稳定性与回归问题

### 高优先级

| 问题 | 严重程度 | 状态 | 修复 PR |
|------|----------|------|---------|
| **函数工具在 OpenAI gpt-5.6 系列模型上因 `reasoning_effort` 错误失败** — gpt-5.6-sol/luna/terra 的 `/chat/completions` 在使用函数工具时中断 | 高 | 已关闭 | — |
| **"模型重复相同块"回调泛滥** — 安全检查器未终止，向遥测发送数千条回调 | 高 | 已关闭 | — |
| **A2A message/send 丢弃允许列表中的 `x-litellm-api-key`** — 头部未转发到代理 | 中 | 待解决 | — |
| **`reasoning_effort=xhigh` 被静默降级为基础值** — 模型映射缺少能力时 | 中 | 待解决 | [#40471](https://github.com/BerriAI/litellm/issues/40471) |
| **部分通用流式块通过验证后抛出 KeyError** — 缺少 `text`/`is_finished`/`finish_reason` 仍通过校验 | 中 | 待解决 | [#43487](https://github.com/BerriAI/litellm/issues/43487) |

### 中优先级

| 问题 | 严重程度 | 状态 |
|------|----------|------|
| **默认访问权限不一致** — 空 `models` 授予全部访问权限，空 `mcp_servers` 则拒绝全部（安全风险） | 中 | [#21540](https://github.com/BerriAI/litellm/issues/21540) |
| **`max_iterations`/`max_budget_per_session` 在同一追踪中的代理间共享** — 计数器仅基于会话 ID | 中 | [#43190](https://github.com/BerriAI/litellm/issues/43190) |
| **并发增量时消费缓存丢失更新** — user/team/end-user/tag 消费更新存在竞态条件 | 中 | [#43491](https://github.com/BerriAI/litellm/issues/43491) |
| **Azure AI 模型路由无成本追踪** | 中 | [#40728](https://github.com/BerriAI/litellm/issues/40728) |
| **PromptTokensDetailsWrapper 在 DashScope 首轮请求时抛出 AttributeError** — 缓存 token 未设置 | 中 | [#43756](https://github.com/BerriAI/litellm/issues/43756) |

### 已修复的问题

- **MCP OAuth 凭证管理 UI** — 在 `/chat` 路由重构时被移除；现仅在团队设置中可用（[#31222](https://github.com/BerriAI/litellm/issues/31222)）
- **多个日志回调** — 仅最后一个回调的凭证被使用（[#30825](https://github.com/BerriAI/litellm/issues/30825)）
- **Docker OTEL 工具** — 官方镜像缺少 `opentelemetry-instrumentation` 包（[#22762](https://github.com/BerriAI/litellm/issues/22762)）

---

## 这对应用开发者意味着什么

1. **验证你的 Docker 部署** — 所有新镜像均已签名。拉取前请更新验证脚本使用 `0112e53` 密钥。

2. **警惕流式回归** — 如果你在 OpenAI 的 gpt-5.6 系列模型上使用函数工具和 `reasoning_effort`，请彻底测试；该 bug 已关闭，但请确认你的版本包含修复。

3. **认证令牌行为变更** — UI/CLI 会话令牌现使用独立的 AES-GCM 上下文和头部安全格式。如果你使用 Basic 认证或 WebSocket 子协议，且遇到以 `sk-` 开头的令牌间歇性返回 401，该问题应已解决。

4. **成本追踪缺口** — Azure AI 模型路由用户：成本追踪仍然不可用。在问题解决前，请勿依赖 Azure AI 部署的消费日志。

5. **MCP 凭证管理** — 如果你依赖 MCP 服务器的每用户 OAuth 凭证，UI 路径已变更。请检查团队设置作为新的入口点。

6. **OTel 用户** — 新的 `excluded_services` 设置允许租户目标选择退出 Redis/Postgres 内部跨度追踪，减少摄入量和暴露面。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the entire digest into Simplified Chinese, following the specific rules provided. Let me go through each section carefully and translate it naturally while preserving the structure, formatting, and all technical details exactly as they are.

Let me translate section by section:

## 1. Today's Highlights
今天的主要更新

## 2. Releases & Breaking Changes
发布与重大变更

## 3. New Model & Hardware Support
新模型与硬件支持

## 4. Performance & Optimization
性能与优化

## 5. Stability & Regressions
稳定性与回归问题

## 6. What This Means for Application Developers
这对于应用开发者意味着什么

Now let me translate the content of each section, maintaining the technical register and natural Chinese flow.</think>

# Unsloth 速报 — 2026-09-30

## 1. 今日要闻

多个 Studio UI 改进于今日合入，聚焦 Windows/macOS 桌面端优化（更新期间的窗口拖拽、布局修复、代码块缩进保留），同时修复了关键推理内核问题，包括 vLLM 0.29 Marlin INT4 崩溃以及 LoRA 训练期间 BatchNorm 运行时统计量损坏。项目还关闭了 GGUF 视觉模型透明度渲染和混合 NVIDIA+AMD GPU 检测方面的多个长期功能缺口。

---

## 2. 发布与重大变更

| 变更 | 描述 | PR/Issue |
|------|------|-----------|
| **vLLM 0.29 INT4 推理** | 使用块 FP8 内核进行打包 INT4 推理（compressed-tensors 检查点保持打包格式）时，在 vLLM 0.29 上取道 Marlin 快速路径会因 `marlin_gemm()` 中错误的 `perm_or_none` 张量参数而崩溃。正在修复中。 | [#12320](https://github.com/unslothai/unsloth/pull/12320) |
| **ShareGPT 映射回归** | Llama 3.1、Qwen 和 Gemma 的聊天模板在 `get_chat_template` 接收 ShareGPT 映射（`from/value`、`human/gpt`）时会静默错误渲染对话。已修复并合入。 | [#12314](https://github.com/unslothai/unsloth/pull/12314) |
| **Ollama Modelfile 导出** | 将训练好的基础模型保存为 GGUF 时，控制台输出"No Ollama template mapping found"并跳过 Modelfile 生成。已修复并合入。 | [#12311](https://github.com/unslothai/unsloth/pull/12311) |

---

## 3. 新模型与硬件支持

| 模型/架构 | 支持状态 | 备注 |
|--------------------|----------------|-------|
| **LFM (LiquidAI) 模型** | *进行中* — 功能请求：LFM2.5（`Lfm2ForCausalLM`）的 `FastLanguageModel.from_pretrained(fast_inference=True)` 支持。当前在 vLLM 加载后的 state dict 提取阶段崩溃。 | [#4073](https://github.com/unslothai/unsloth/issues/4073) |
| **Qwen Image 2.1 GGUF** | *问题* — Q4_K_M 变体在 M5 Max（48 GB）上尽管内存充足仍报 OOM。 | [#11792](https://github.com/unslothai/unsloth/issues/11792) |
| **Qwen 3.8 Flash Next (MLX)** | *问题* — 无法在 M5 Ultra 上加载。 | [#12257](https://github.com/unslothai/unsloth/issues/12257) |
| **Gemma 4 26B A4B QAT** | *问题* — 在 16 GB 内存系统上使用 llama.cpp-b11067 占用 >15 GB 内存。 | [#11435](https://github.com/unslothai/unsloth/issues/11435) |
| **T5 模型** | *请求中* — T5 支持的功能请求仍在开放中。 | [#719](https://github.com/unslothai/unsloth/issues/719) |
| **混合 NVIDIA+AMD 主机** | *改进* — 现在可以检测到 ROCm torch；训练时会尝试使用更大的 AMD 卡。 | [#10450](https://github.com/unslothai/unsloth/issues/10450), [#12248](https://github.com/unslothai/unsloth/issues/12248) |

---

## 4. 性能与优化

| 领域 | 详情 | PR/Issue |
|------|---------|----------|
| **FP8Linear 块大小** | 修补后的 forward 方法未将 `block_size` 传递给块-FP8 内核；内核从 weight 属性读取，导致 32x32 块检查点失败。已修复并合入。 | [#12317](https://github.com/unslothai/unsloth/pull/12317) |
| **BatchNorm 运行时统计量** | LoRA 训练期间，`model.train()` 将冻结的编码器 BatchNorm 层置于训练模式，覆盖了 `running_mean`/`running_var`。已修复并合入 — 现在统计量得到保留。 | [#12319](https://github.com/unslothai/unsloth/pull/12319) |
| **DeepSeek-V4.1 梯度检查点** | 对 `deepseek_v41`（DeepSeek-V4.1-Flash）强制使用非重入梯度检查点，原因是 CSA2 源层在检查点层内部发布 keys。 | [#12318](https://github.com/unslothai/unsloth/pull/12318) |
| **Prefill 进度 API** | 通过 API monitor 端点暴露实时 prefill 计数器和推理阶段，供外部客户端追踪长提示处理进度。 | [#11161](https://github.com/unslothai/unsloth/pull/11161) |
| **MCP 小部件渲染** | 来自 MCP 服务器的交互式 HTML UI 现已在聊天线程的沙箱 iframe 中渲染。 | [#9301](https://github.com/unslothai/unsloth/pull/9301) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|-----------|
| **高** | **vLLM 0.29 Marlin INT4 崩溃** — `RuntimeError: marlin_gemm() Expected a value of type 'Optional[Tensor]'` | 开放中 | [#12320](https://github.com/unslothai/unsloth/pull/12320) |
| **高** | **BatchNorm 运行时统计量损坏** — LoRA 训练期间冻结编码器上的 BatchNorm | 已合入 | [#12319](https://github.com/unslothai/unsloth/pull/12319) |
| **中** | **GGUF 视觉模型透明度** — 透明 PNG/WebP/GIF 背景渲染为黑色，导致深色文字无法辨认 | 开放中 | — |
| **中** | **Java/Gradle 失败** — Linux 工具沙箱中 `/etc/java*` 不可见，`user.home` 接线错误 | 已合入 | [#12294](https://github.com/unslothai/unsloth/pull/12294) |
| **中** | **Qwen-Image-2.1 重复下载** — GGUF 下载显示完成后，"Required assets" 又拉取约 19 GB | 开放中 | — |
| **低** | **终端工具递归冻结** — 包含两个 `VAR=$VAR` 赋值的命令导致无界递归 | 已合入 | — |
| **低** | **HTML 预览错误吞没** — 渲染 HTML 中的 JS 错误对用户不可见 | 开放中 | — |

---

## 6. 这对应用开发者意味着什么

1. **避免 vLLM 0.29 搭配打包 INT4** — 如果使用块 FP8 量化的 `compressed-tensors` 检查点，请暂缓升级 vLLM 0.29，直至 [#12320](https://github.com/unslothai/unsloth/pull/12320) 合入。

2. **GGUF 视觉模型透明度** — 透明图片在模型中显示为黑色；使用 Excalidraw 等导出时，考虑在发送给模型前添加白色/浅色背景层。

3. **冻结编码器上的 LoRA 训练** — BatchNorm 修复（[#12319](https://github.com/unslothai/unsloth/pull/12319)）确保训练后推理不再受损坏的运行时统计量影响。请使用当前版本重新训练使用此模式的模型。

4. **混合 GPU 配置** — ROCm 检测已改进；拥有 NVIDIA+AMD 卡的用户现在应该能看到训练时可用的 AMD 卡（如果它比 NVIDIA 卡更大的话）。

5. **CLI token 限制** — `unsloth start pi` 和 `dsh` 代理将回复限制在 8,192 token，无论上下文大小如何。使用长上下文时，请留意截断的输出。

6. **Ollama 导出** — 如果将微调模型导出到 Ollama，请验证 Modelfile 现在能正确生成（之前会静默跳过）。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*