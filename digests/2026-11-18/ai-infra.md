# AI 基础设施日报 2026-11-18

> 生成时间: 2026-11-18 03:49 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the entire English technical report into Simplified Chinese. Let me go through it carefully, preserving all markdown structure, tables, and formatting while translating the content into natural technical Chinese.

Let me work through this section by section.

Key things to preserve:
- All markdown formatting
- All tables
- All headings
- Emojis
- URLs
- Project names, repo slugs, version tags
- Issue/PR numbers
- Technical terminology

Let me translate this carefully, making sure the Chinese sounds natural and professional.
</think>


# AI 推理基础设施 — 跨项目对比报告

**日期：** 2026-11-18 | **范围：** vLLM · SGLang · llama.cpp · Ollama · LiteLLM · Unsloth

---

## 1. 生态全景

AI 推理基础设施层正在分化为三个明确的层级——**高吞吐服务引擎**（vLLM、SGLang）、**可移植本地运行时**（llama.cpp、Ollama、Unsloth）和**网关抽象层**（LiteLLM）——各自争夺部署栈的不同区块。当日的简报揭示了一个核心矛盾：服务引擎竞相支持相同的前沿模型（DeepSeek-V4.1、Qwen3.8、Kimi-K3、Mistral Large 4）在相同的新硬件上（NVIDIA Blackwell SM120、AMD MI355X gfx950、Ascend NPU），而本地运行时正在开辟服务层尚未触及的差异化工作负载（TTS、图像生成、Apple Silicon MLX）。与此同时，Rust 迁移潮正在波及 LiteLLM 的热路径，vLLM 的 Rust 前端对标工作也表明，纯 Python 架构正接近其性能天花板。

---

## 2. 活跃度对比

| 项目 | Issues（open） | PRs（open） | Releases（24 h） | 仓库定位 |
|---------|:---:|:---:|:---:|------------|
| **vLLM** | 101 | 500 | 0 个 tag | 推理服务引擎 |
| **SGLang** | 63 | 165 | 0 个 tag | 推理 + 调度器 |
| **llama.cpp** | 13 | 20 | 10 个 commits 已合并 | 可移植本地运行时 |
| **Ollama** | 13 | 20 | 0 个 tag | 本地运行时 + 应用体验 |
| **LiteLLM** | ~50（推断值） | ~50（推断值） | 3 个版本（RC/Stable/LTS） | LLM 网关 / 代理 |
| **Unsloth** | 36（推断值） | 223（推断值） | 1 个 beta | 推理 + 微调框架 |

**分析：**

- **vLLM** 在 issue 和 PR 总量上领先——其 500 个 open PR 反映出它同时支持的硬件后端（CUDA、ROCm、OpenCL、Metal）和模型架构覆盖范围极广。
- **SGLang** 保持了更紧凑的 PR/issue 比率，说明其合入门槛更严格，与其 v1.0 发布规范一致。
- **llama.cpp** 尽管 issue 体量较小，但在提交频率上领先（24 小时内 10 个 commits）——这是其"早合入、快发布"文化以及纯 C++/C 内核导向的典型特征。
- **Unsloth** 的 PR/issue 比率异常高（223 vs 36），说明自动化贡献（模型添加、量化配置）与功能开发并行推进。
- **LiteLLM** 是唯一一个采用多版本发布策略的项目（RC / stable / LTS），反映出其面向生产环境网关用户、需要版本升级可预测性的定位。

---

## 3. 模型支持格局

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth | LiteLLM |
|---------------------|:----:|:------:|:---------:|:------:|:-------:|:-------:|
| **DeepSeek-V4.1** | ✅ 图片输入（NVIDIA） | ✅ 文本+图片（MI355X） | — | — | — | 通过桥接支持 |
| **Qwen3.8** | ✅ MXFP4（gfx950） | ✅ MXFP4（MI355X） | — | — | ✅ GGUF | 通过桥接支持 |
| **Kimi-K3 / K3.1** | ✅ PD 分离 | ✅ AMD + Ascend NPU | — | — | — | 通过桥接支持 |
| **Mistral Large 4** | — | ✅ DSpark + YaRN 1M | — | — | — | 通过桥接支持 |
| **GLM-5.3** | ✅ 优化赛道 | ✅ SM120 FA4 崩溃 | — | — | — | 通过桥接支持 |
| **Kokoro TTS** | — | — | ✅ | — | — | — |
| **Qwen3-TTS** | — | — | ✅ ICL 模式 | — | — | — |
| **MiniMax-H3-Image** | — | — | — | — | ✅ GGUF/FP8/INT8 | — |
| **FLUX.3 Klein** | — | — | — | — | ✅ L4 减少 3.3% / A100 减少 1.9% | — |
| **PPLX Decider v1.3** | — | — | — | ✅ MLX | — | — |
| **GigaChat 3.5（432B MoE）** | — | — | ✅ Open PR | — | — | — |
| **Gemma 4 26B** | — | — | — | — | ✅ MLX（有 bug） | 通过桥接支持 |

**各赛道胜出者：**

- **前沿 LLM 服务：** **SGLang** 以最广泛的多厂商覆盖（NVIDIA + AMD + Ascend NPU）领先，同一模型家族可跨硬件部署，并具备 DSpark 投机解码。
- **本地 TTS / 图像生成：** **llama.cpp**（Kokoro、Qwen3-TTS、FLUX）和 **Unsloth**（MiniMax-H3-Image、FLUX.3）在服务引擎中无对应竞品。
- **Apple Silicon：** **Ollama + Unsloth**（MLX）主导；vLLM 和 SGLang 均无 MLX 路径。
- **网关覆盖：** **LiteLLM** 不直接添加模型支持，但通过后端桥接打通所有模型。

---

## 4. 性能前沿

各项目的优化工作聚焦于四个主战场：

### 4.1 KV Cache 架构

| 项目 | 进展 | 详情 |
|---------|--------|--------|
| **vLLM** | Octave KV（RDNA4）、KV Offload 提权 RFC | 长上下文内存效率；请求级 KV 淘汰 |
| **SGLang** | HiCache 预取 + Mooncake 租约优化 | PD 分离路径间 KV cache 预热 |
| **SGLang** | Fused FP8 prefix-valid commit kernel（SM89+） | 减少 prefix-cached 请求的内核启动开销 |
| **llama.cpp** | MX scale byte 保留（MXFP4/MXFP8/Quark/INC） | 跨量化格式统一的 KV dtype 处理 |
| **Ollama** | Runner 跨 context-shift 模式共享 | 消除每个请求的 KV 重计算 |

### 4.2 量化 MoE 内核

| 项目 | 目标 | 详情 |
|---------|--------|--------|
| **vLLM** | DeepGEMM batched SwiGLU clamp | 修复关键 logprob 错误；MI355X MXFP4 MoE 优化栈 |
| **vLLM** | Block-FP8 Triton GEMM 64 位偏移 | 修复大矩阵（>2³¹ 元素）溢出 |
| **SGLang** | FlashInfer CuTe DSL MoE prefill CUDA graphs | 扩展图捕获至 W4A16 MegaMoE 路径 |
| **llama.cpp** | Few-row MMQ for MUL_MAT_ID（V100） | 处理老旧 tensor-core 硬件上的 2-token batch |
| **llama.cpp** | Grouped XMX GEMM（SYCL） | 减少 iGPU MoE 的 SLM 暂存开销 |

### 4.3 投机解码与 Draft 策略

| 项目 | 架构 | 状态 |
|---------|-------------|--------|
| **SGLang** | DSpark（DeepSeek 风格多 draft） | SM90 活跃回归（v0.5.22→v0.5.23 decode 回归 +33–45%） |
| **SGLang** | EAGLE-3 aux hidden states | EXAONE 4 和 DeciLM 支持 |
| **vLLM** | 直接权重重载用于 RL 训练 | RFC v2 在 17 个家族上验证；packed NCCL/IPC layout 已合入 |
| **vLLM** | MTP re-prefill 溢出修复 | 防止跨请求 hidden-state 泄漏 |

### 4.4 硬件专属内核后端

| 后端 | 活跃项目 | 优先级 |
|---------|----------------|----------|
| **NVIDIA Blackwell（SM120）** | vLLM、SGLang | 🔴 关键 — decode 吞吐受损；CUDA graph 捕获崩溃 |
| **AMD MI355X（gfx950）** | vLLM、SGLang | 🟠 高 — 优化 PR 堆积；MXFP4 MoE 内核融合 |
| **AMD GCN（gfx10xx）** | llama.cpp | ✅ Stream_k 已启用；OpenCL DP4A 内核落地中 |
| **AMD RDNA4（gfx1200）** | vLLM | 🟠 高 — Octave KV HIP 内核 open |
| **Ascend NPU** | SGLang | 🟡 中 — DSA attention 路径已路由；Ollama 的 CANN 后端提案中 |
| **Intel IGPU Vulkan** | Ollama | 🟡 中 — OOB 启用进行中 |
| **Apple MLX** | Ollama、Unsloth | ✅ 成熟 — 缓存、前缀复用、优雅关闭 |
| **SYCL iGPU** | llama.cpp | 🟡 中 — logprobs 非确定性、内存泄漏 workaround |

---

## 5. 层级定位

```
┌──────────────────────────────────────────────────────────────────────┐
│  APPLICATION / AGENT LAYER                                            │
│                                                                      │
│  ┌─────────────────────────┐    ┌─────────────────────────────────┐  │
│  │  Unsloth                │    │  LiteLLM                        │  │
│  │  （推理 +               │    │  （LLM 网关 / 代理）             │  │
│  │   微调框架）            │    │  多后端：vLLM、SGLang、          │  │
│  │  本地推理、             │    │  OpenAI 兼容、Anthropic、        │  │
│  │  LoRA 训练、            │    │  Bedrock、Vertex、Ollama        │  │
│  │  TTS、图像生成          │    │  Rust 迁移：auth 热路径         │  │
│  │  MLX / CUDA / Vulkan    │    │  Router 队列、流式输出          │  │
│  └─────────────────────────┘    └─────────────────────────────────┘  │
│                                                                      │
│  ┌─────────────────────────┐    ┌─────────────────────────────────┐  │
│  │  Ollama                 │    │  llama.cpp                      │  │
│  │  （本地运行时 + UX）    │    │  （可移植 C++/C 运行时）        │  │
│  │  桌面应用、             │    │  跨平台：CUDA、ROCm、            │  │
│  │  模型发现、             │    │  Vulkan、Metal、SYCL、           │  │
│  │  API server             │    │  OpenCL、CPU。                  │  │
│  │  MLX、Vulkan、CUDA      │    │  TTS、图像生成、MoE             │  │
│  │  VRAM 核算、            │    │  内核优先，GGUF 原生             │  │
│  │  computer use（beta）   │    │  最高提交频率                   │  │
│  └─────────────────────────┘    └─────────────────────────────────┘  │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────────┐  │
│  │  vLLM / SGLang                                                  │  │
│  │  （高吞吐服务引擎）                                             │  │
│  │                                                                  │  │
│  │  SGLang：调度器 + 投机解码 + PD 分离                           │  │
│  │  vLLM：PagedAttention + MoE + RL 训练集成                      │  │
│  │                                                                  │  │
│  │  两者：NVIDIA、AMD ROCm、多卡、张量并行、                      │  │
│  │  前缀缓存、量化感知内核、OpenAI 兼容 API                        │  │
│  └────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────┘
```

**各层级核心差异：**

- **服务引擎（vLLM、SGLang）** 以吞吐量和多卡利用率为核心优化目标，牺牲可移植性——面向运行着数千并发请求的 GPU 集群。它们在相同硬件目标和模型家族上竞争，但在调度器设计上分化（vLLM 的 PagedAttention vs SGLang 的 RadixAttention + DSpark）。

- **本地运行时（llama.cpp、Ollama）** 以可移植性和零依赖部署为核心优化目标。llama.cpp 掌控内核级性能层；Ollama 掌控开发者体验层。Unsloth 占据了服务引擎和运行时都未覆盖的微调细分市场。

- **网关（LiteLLM）** 本身不提供推理服务——负责路由、协议翻译和可观测性包装，调用后端引擎。其 Rust 迁移表明网关层已从单纯的路由薄片演变为性能关键路径。

---

## 6. 趋势信号

### 信号一：Blackwell（SM120）在所有服务引擎上尚未达到生产就绪状态
vLLM 和 SGLang 均报告了 NVIDIA RTX PRO 6000（SM120）上的严重 decode 吞吐量回退和 CUDA-graph 捕获崩溃。应用开发者应**推迟 Blackwell 推理部署至少一个发布周期**。这是今日可见的最紧迫部署风险。

### 信号二：AMD MI355X（gfx950）正成为一级服务目标
vLLM 和 SGLang 在 AMD MI355X 上的协同优化——涵盖 MXFP4 MoE 内核融合、Octave KV cache、QSA decode-row scoring 和 ROCm stream_k——表明 AMD 已不再是次要选择。评估 AMD 成本/性能比的团队应预期在未来 1–2 个版本内获得生产级支持。

### 信号三：Rust 正在渗透每个 Python 优先项目的热路径
vLLM 的 Rust 前端对标工作、LiteLLM 的 auth 和数据库 Rust 仓库，以及 llama.cpp 的核心 C/C++ 代码库，代表了三种不同的迁移哲学——但都指向同一结论：Python 的 GIL 和对象模型开销在高频率推理路径上已不再可接受。构建编排层的应用开发者应预期 API 表面的变更。

### 信号四：多模态和 Agentic 原语正在渗透推理引擎
TTS（llama.cpp 中的 Kokoro、Qwen3-TTS）、图像生成（Unsloth 中的 FLUX、MiniMax-H3-Image）和 computer use（Unsloth v0.1.919-beta）的汇聚表明，"LLM 推理引擎"和"多模态 Agent 运行时"之间的边界正在消融。这对应用开发者有直接影响：今天选择的推理引擎将决定明天可以接入哪些 Agentic 能力。

### 信号五：PD 分离正在加速走向生产
vLLM 和 SGLang 均展示了大量 PD 分离工作——vLLM 的 KV Offload 请求级提权 RFC 和 SGLang 的 Mooncake 传输抽象正趋向一个共同模式：prefill worker 处理长上下文，decode worker 处理流式输出，KV cache 传输作为 stage 间协议。构建延迟敏感或成本优化部署的团队应开始评估 PD 路径。

### 信号六：本地推理正在缩小与云端的差距
Ollama 的 computer use beta、llama.cpp 扩展的后端覆盖（Vulkan、SYCL、OpenCL、Metal）以及 Unsloth 的微调集成，意味着本地推理已不再是云端的降级替代品——它正在成为一条具有独特优势（隐私、大规模成本、离线运行）的并行赛道。当下在本地运行时上落地的 Agentic 和微调功能，将决定哪个层级赢得下一波开发者采用。

---

*跨项目数据来源于 2026-11-18 的 github.com/vllm-project/vllm、github.com/sgl-project/sglang、github.com/ggml-org/llama.cpp、github.com/ollama/ollama、github.com/BerriAI/litellm、github.com/unslothai/unsloth。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate a technical digest from English to Simplified Chinese. I need to:
1. Translate the content while preserving all Markdown structure
2. Keep technical terms, URLs, code references, issue numbers as-is
3. Use natural technical Chinese, not literal word-for-word
4. Output ONLY the translation, no preamble or explanation
5. No markdown fences around the output

Let me translate section by section:

**Title**: vLLM Project Digest — 2026-11-18
→ vLLM 项目日报 — 2026-11-18

**Section 1: Today's Highlights**
Need to translate the paragraph about AMD ROCm, NVIDIA Blackwell, SwiGLU clamp issue, etc.

**Section 2: Releases & Breaking Changes**
Translate table and migration notes.

**Section 3: New Model & Hardware Support**
Translate table.

**Section 4: Performance & Optimization**
Translate subsections.

**Section 5: Stability & Regressions**
Translate table and CI status.

**Section 6: What This Means for Application Developers**
Translate the numbered list.

Let me work through this carefully, maintaining the technical register appropriate for Chinese developers.
</think>


# vLLM 项目日报 — 2026-11-18

## 1. 今日要点

vLLM 项目在**硬件专项优化赛道**上呈现高度活跃态势：AMD ROCm 工程师正在密集提交 gfx950/MI355X 和 RDNA4 Octave KV 支持的堆叠式 PR，而 NVIDIA 用户则在报告 DeepSeek-V4.1-Flash 在 SM120（Blackwell）上的 decode 吞吐严重回退。从正确性角度看，大批量 DeepGEMM 中缺失 **SwiGLU clamp** 导致 logprob 偏差超过 30 个数量级，目前已被修复；同时 Rust/Python 前端在 `tool_choice="auto"` 行为上的差异正在通过 RFC 推进解决。RL 权重传输基础设施随 packed buffer layout（支持 NCCL/IPC）持续成熟。

---

## 2. 版本发布与破坏性变更

| 项目 | 详情 | 链接 |
|------|---------|------|
| **无新版本发布** | 过去 24 小时内无标签版本。 | — |

**迁移注意事项：**
- Rust 前端（`VLLM_USE_RUST_FRONTEND=1`）仍为**实验性功能**，功能对等缺口正在 [#44280](https://github.com/vllm-project/vllm/issues/44280) 中跟踪 roadmap——生产环境中使用它的团队应密切关注该 issue。
- `MoeWNA16Config` 现已接受 AWQ 格式的 key 名（`w_bit`、`q_group_size`），与 GPTQ key 共存——现有 AWQ MoE checkpoint 不会再抛出 `ValueError`（[#66488](https://github.com/vllm-project/vllm/pull/66488)）。

---

## 3. 新模型与硬件支持

| 类别 | 项目 | 状态 | 链接 |
|----------|------|--------|------|
| **硬件** | AMD RDNA4（gfx1200/gfx1201）— Octave KV 原生 HIP kernels（dense + QSA） | PR 开放中，target main | [#67844](https://github.com/vllm-project/vllm/pull/67844) |
| **硬件** | AMD gfx950 / MI355X — ROCm 性能使能栈，面向 Qwen3.8-2.4T-A95B 和 Qwen3.8-Flash-Next（MXFP4） | Issue 跟踪中 | [#57149](https://github.com/vllm-project/vllm/issues/57149)、[#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **硬件** | NVIDIA SM120（RTX PRO 6000 Blackwell）— decode 吞吐在调查中回退；CUDA graph 捕获失效 | Bug 已报告 | [#56892](https://github.com/vllm-project/vllm/issues/56892) |
| **模型** | DeepSeek-V4.1 图像输入（NVIDIA 上通过 MRV2 PCP） | PR 开放中 | [#64435](https://github.com/vllm-project/vllm/pull/64435) |
| **模型** | EAGLE-3 aux hidden states for EXAONE 4 and DeciLM（Llama-Nemotron Super/Ultra） | PR 开放中 | [#68289](https://github.com/vllm-project/vllm/pull/68289) |
| **模型** | NVIDIA Nemotron 3.5 ASR Streaming（`nemotron-3.5-asr-streaming-0.6b`） | Feature request | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **模型** | GLM-5.3 性能优化 | Issue 跟踪中 | [#57406](https://github.com/vllm-project/vllm/issues/57406) |
| **Kernel** | FlashInfer CuTe-DSL 非量化 MoE 后端 for Hopper（SM90） | PR 开放中 | [#66749](https://github.com/vllm-project/vllm/pull/66749) |
| **量化** | MX scale 加载到 uint8 参数时的 byte 保留（MXFP4/MXFP8/Quark/INC） | PR 开放中 | [#65256](https://github.com/vllm-project/vllm/pull/65256) |

---

## 4. 性能与优化

### 已合入（过去 24 h）

| 优化项 | 描述 | PR |
|---|---|---|
| **MoE SwiGLU clamp 修复（DeepGEMM）** | 大批量 DeepGEMM 缺失 `swiglu_limit`（DeepSeek-V4-Flash-Base 设为 10），导致 8×H200 上 `deepep_low_latency` 场景 logprob 与基准偏差从 −0.31 到 −31.68。已修复。 | [#68084](https://github.com/vllm-project/vllm/pull/68084) |
| **Block-FP8 Triton GEMM 64-bit 行偏移** | `_w8a8_triton_block_scaled_mm` 以 int32 计算行偏移，当 M×K 或 M×N > 2³¹ 时产生错误的内存地址。已强制转换为 int64。 | [#66200](https://github.com/vllm-project/vllm/pull/66200) |
| **DeepSeek DSML 解析器性能** | 流式 `parse()` 中跳过对非 JSON 工具参数值的逐 tick 重复转换（markup strings）；消除二次复杂度行为。 | [#68070](https://github.com/vllm-project/vllm/pull/68070) |
| **Load plan 快速重叠检查** | Direct weight-reload 路径现将 copy-time cast 和 setitem write 规划为直接操作；属于 #54477 的一部分。 | [#67836](https://github.com/vllm-project/vllm/pull/67836) |

### 进行中 / 讨论中

| 领域 | 项目 | 评论数 | 链接 |
|------|------|----------|------|
| **Blackwell SM120 decode** | DeepSeek-V4.1-Flash 在 `--enforce-eager` 下 decode 吞吐极低；CUDA graphs 不可用。优先修复 SM120 graph capture。 | 33 | [#56892](https://github.com/vllm-project/vllm/issues/56892) |
| **ROCm MoE 性能提升** | gfx950/MI355X Qwen3.8 MoE（MXFP4）堆叠式优化 PR——任务包括 kernel fusion、memory layout、scheduler tuning。 | 36 | [#57149](https://github.com/vllm-project/vllm/issues/57149) |
| **DeepSeek-V4 ROCm** | AMD ROCm 后端多模块支持（mHC/HCA/CSA/MoE/MTP）——含 checklist 的跟踪 issue。 | 20 | [#41820](https://github.com/vllm-project/vllm/issues/41820) |
| **Prefix caching 混合模型** | `--prefix-match-unit` 恢复混合模型 prefix 命中，但在 Triton/FLA GDN 后端（L40）上导致 TTFT 增加约 30 ms。 | 6 | [#67674](https://github.com/vllm-project/vllm/issues/67674) |
| **V1 Scheduler 重入队 stall** | 已完成的 async KV pull 重入队 stall 1.0–1.8 s——RFC 提议队首重准入机制。 | 8 | [#62532](https://github.com/vllm-project/vllm/issues/62532) |
| **Direct weight reload（RL）** | 88+ PWAL 实现跨版本 direct reload RFC；修订版 2 在 17 个旗舰模型族上验证；packed NCCL/IPC chunk layout 已合入。 | 17 | [#54477](https://github.com/vllm-project/vllm/issues/54477) |

---

## 5. 稳定性与回归

按严重程度排序：

| 严重级别 | 问题 | 描述 | 修复 PR | 链接 |
|----------|-------|-------------|--------|------|
| 🔴 **严重** | MoE logprob 不匹配 | 大批量 DeepGEMM 缺失 SwiGLU clamp——DeepSeek-V4-Flash-Base 上 token 概率误差巨大，足以影响 reward model 评估流水线 | [#68084](https://github.com/vllm-project/vllm/pull/68084)（已合入） | [#68084](https://github.com/vllm-project/vllm/pull/68084) |
| 🔴 **严重** | Blackwell SM120 decode | RTX PRO 6000（SM120）上 CUDA graph 捕获失效；eager 模式下 decode 吞吐严重下降 | 调查中 | [#56892](https://github.com/vllm-project/vllm/issues/56892) |
| 🔴 **严重** | MTP re-prefill 溢出 | 多模块 MTP 在短请求上重新 prefill 前一个占用者的 tokens/hidden states → 生成结果错误 | [#66951](https://github.com/vllm-project/vllm/pull/66951) | [#66951](https://github.com/vllm-project/vllm/pull/66951) |
| 🟠 **高** | gpt-oss tool-call 500 | 当上一轮 tool call name 包含特殊 token 文本时，chat completions 返回 500 | [#65771](https://github.com/vllm-project/vllm/pull/65771)（已合入） | [#65770](https://github.com/vllm-project/vllm/issues/65770) |
| 🟠 **高** | Ray worker 回收 | `CoreEngineProcManager` 重复回收 EngineCore 进程导致 `ECHILD` / 僵尸 worker | [#68288](https://github.com/vllm-project/vllm/pull/68288) | [#68288](https://github.com/vllm-project/vllm/pull/68288) |
| 🟡 **中** | DFlash TP>1 失效 | DFlash 接受率在 tensor parallel > 1 时降至 0%（MiMo-V2.6-Flash-MOPD；TP1 正常） | 调查中 | [#66387](https://github.com/vllm-project/vllm/issues/66387) |
| 🟡 **中** | Qwen3.5-9B tool choice 性能 | A100 上强制 named tool choice 在 v0.27.1 vs v0.31.0 慢约 11 倍 | 调查中 | [#65564](https://github.com/vllm-project/vllm/issues/65564) |
| 🟡 **中** | Hybrid Mamba prefix cache | `align` 模式下 Mamba checkpoint 在 checkpoint 落入请求私有 tokens 时 prefix cache 命中率降为 0% | 调查中 | [#45238](https://github.com/vllm-project/vllm/issues/45238) |

**CI 状态：** NVIDIA nightly 失败跟踪于 [#67307](https://github.com/vllm-project/vllm/issues/67307)——CPU arm64 镜像构建受 Launchpad API 超时影响（修复见 [#67087](https://github.com/vllm-project/vllm/pull/67087)，已关闭）。

---

## 6. 对应用开发者的影响

1. **Blackwell（SM120）上的 DeepSeek-V4.1——当前避免 eager 模式。** 如果你在 RTX PRO 6000 Blackwell 硬件上运行 DeepSeek-V4.1-Flash，CUDA graph 捕获已失效且 eager 模式下 decode 吞吐严重下降。请关注 [#56892](https://github.com/vllm-project/vllm/issues/56892) 获取 SM120 graph capture 修复进展；作为临时方案，在该修复合入前请暂缓在此硬件上部署该模型。

2. **MoE 用户（DeepSeek、Qwen、GLM）：修复 PR 合入后请升级。** 大批量 DeepGEMM 中的 SwiGLU clamp 回归会产生足以影响 reward model 评估流水线的静默 logprob 误差。如果你在 H200/H100 上使用 `deepep_low_latency` 或任何 FP8 MoE 后端，请在 [#68084](https://github.com/vllm-project/vllm/pull/68084) 合入后拉取更新。

3. **使用 gpt-oss 遗留 header 的 tool-calling：打补丁或升级。** 当上一轮 tool-call name 包含特殊 token 文本时，chat completion 端点返回 HTTP 500。修复（[#65771](https://github.com/vllm-project/vllm/pull/65771)）已合入；如无法立即升级，可降级至 v0.31.0 或 cherry-pick 该修复。

4. **Rust 前端：仍为实验性。** 正在评估 `VLLM_USE_RUST_FRONTEND=1` 的团队请注意功能对等缺口（见 [#44280](https://github.com/vllm-project/vllm/issues/44280)）。尤其在 tool + response_format 场景下，`tool_choice="auto"` 的行为在 Python 和 Rust 前端之间存在差异——在 [#66858](https://github.com/vllm-project/vllm/issues/66858) 解决前，请避免在同一部署中混用两者。

5. **RL / 权重传输流水线：早期基础设施已就绪。** Direct weight reload RFC（#54477）正在走向成熟——packed NCCL/IPC chunk layout 已合入（[#68043](https://github.com/vllm-project/vllm/pull/68043)），load plan 也已提速（[#67836](https://github.com/vllm-project/vllm/pull/67836)）。基于 vLLM 构建 RL 训练循环的团队可以开始审慎评估非标准 MoE 架构上的 `use_load_plan`。

6. **AMD ROCm 就绪度持续提升。** RDNA4 Octave KV 支持（[#67844](https://github.com/vllm-project/vllm/pull/67844)）和 gfx950 Qwen3.8 优化追踪（[#57149](https://github.com/vllm-project/vllm/issues/57149)）表明 AMD GPU 用户将在接下来 1–2 个 release 周期内获得生产级 MoE serving 路径。请持续关注相关 tracker issue 以获取阶段性 PR 合入动态。

---

*数据来源：vllm-project/vllm GitHub · 2026-11-18*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the entire SGLang Digest document from English to Simplified Chinese. Let me translate it carefully, maintaining the Markdown structure, tables, and technical terminology.

Key things to preserve:
- Markdown structure (headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji)
- URLs, issue/PR references (#12345)
- Project names, repository slugs, usernames, version tags, file paths
- API/config identifiers

I need to use natural technical Chinese, not literal word-for-word translation. Let me go through section by section.

Title: SGLang Digest — 2026-11-18 → SGLang 每日动态 — 2026-11-18

Let me translate carefully, maintaining the professional technical Chinese register.
</think>


# SGLang 每日动态 — 2026-11-18

## 1. 今日要闻

SGLang 1.0 版本的准备工作正在加速推进，一项重大重构（[PR #51074](https://github.com/sgl-project/sglang/pull/51074)）已移除废弃的 CLI 参数和环境变量，现这些配置项会明确抛出迁移错误。两个关键回归问题正在积极排查中：一是 DSpark 投机解码场景下 Hopper（SM90）上 **v0.5.22 → v0.5.23 版本的 decode 延迟增加 33–45%**（[#49336](https://github.com/sgl-project/sglang/issues/49336)），二是 GLM-5.3-Flash 在 SM120（RTX PRO 6000）上使用 FA4 注意力后端时 **CUDA-graph 捕获崩溃**（[#42012](https://github.com/sgl-project/sglang/issues/42012)）。跨硬件厂商支持持续扩展，Kimi-K3/K3.1 的 AMD ROCm 和 Ascend NPU 内核已合入，Intel XPU 的编码器-解码器 disaggregation 集成也在推进中。

---

## 2. 版本发布与破坏性变更

| 变更类型 | 详情 | PR/Issue |
|----------|------|----------|
| **废弃配置清理** | `server_args.py` 移除所有在 0.5.x 周期中标记为废弃的 CLI 参数、选项值及环境变量；每项配置现在都会抛出错误并提示替代方案 | [PR #51074](https://github.com/sgl-project/sglang/pull/51074) |
| **SGLang 1.0 追踪** | 路线图 issue 跟踪硬化工作、silent-config 向显式错误的迁移，以及正式的 1.x 兼容性策略；0.5.x 升级可能需要额外的适配改动 | [#50045](https://github.com/sgl-project/sglang/issues/50045) |

过去 24 小时内无新标签版本发布。

---

## 3. 新模型与硬件支持

| 模型 / 架构 | 硬件 | 说明 |
|---------------------|----------|-------|
| **Mistral Large 4**（`mistralai/Mistral-Large-4-1T-A52B`） | CUDA | 1T 参数 / 52B 激活量 MoE、Pixtral 视觉编码、MLA + DSA 稀疏注意力（top-k 2048）、跨层 KV 共享、YaRN 1M 上下文、内置 DSpark 投机解码 draft 头（每次 draft 3 个 token） | [PR #47271](https://github.com/sgl-project/sglang/pull/47271) |
| **Kimi-K3.1**（remote-code 权重） | **AMD MI350X / MI355X（gfx950）** | 混合 KDA 线性注意力 + DSA 稀疏 MLA、MXFP4 MoE；AMD 内核栈：DSA（[#50997](https://github.com/sgl-project/sglang/pull/50997)）、Kimi-K3 层（[#50998](https://github.com/sgl-project/sglang/pull/50998)）、投机解码（[#50999](https://github.com/sgl-project/sglang/pull/50999)） | [PR #51000](https://github.com/sgl-project/sglang/pull/51000) |
| **Kimi-K3.1**（remote-code 权重） | **Ascend NPU** | DSA 稀疏注意力路径在 Ascend 上路由；remote-code 配置现在正确识别为 DSA；混合 KV pool 构造已修复 | [PR #48420](https://github.com/sgl-project/sglang/pull/48420) |
| **Kimi-K3 PD prefill** | NVIDIA GB300（Blackwell） | KDA 和 shared-expert 权重的 DWDP 支持；`--kda-dwdp` 参数启用 8× GB300 配置 | [PR #50842](https://github.com/sgl-project/sglang/pull/50842) |
| **DeepSeek-V4.1-Flash** | AMD MI355X（gfx950） | ROCm 优化跟踪；文本 + 图片输入、TP4、开/关 DSpark | [#49327](https://github.com/sgl-project/sglang/issues/49327) |
| **Qwen3.8-27B** | AMD MI355X（gfx950） | MXFP4 权重 + FP8 KV cache；TP1/TP2 优化跟踪 | [#49324](https://github.com/sgl-project/sglang/issues/49324) |
| **Intel XPU** | 编码器-解码器 disaggregation（EPD） | Landing buffer 和 `EmbeddingPool` 从硬编码 CUDA 迁移为 XPU 兼容分配 | [PR #47961](https://github.com/sgl-project/sglang/pull/47961) |

---

## 4. 性能与优化

| 领域 | 优化项 | 影响 | PR/Issue |
|--------|-------------|--------|----------|
| **CUDA graphs** | 为 FlashInfer CuTe DSL MoE（`flashinfer_cutedsl`）和 FlashInfer MegaMoE（W4A16）启用 prefill CUDA graphs | 目前通过 `--cuda-graph-backend-prefill disabled` 验证；本 PR 将 CUDA graph 捕获扩展到这些内核 | [PR #50684](https://github.com/sgl-project/sglang/pull/50684) |
| **ROCm QSA** | 在 MI355X 上使用分组 Triton 内核做 QSA decode-row 评分 | 替换并发 48 时逐行调用的 `tilelang_qsa_mqa_decode`；每个 verify 步骤 4 draft tokens × 44 requests = 176 行 | [PR #50702](https://github.com/sgl-project/sglang/pull/50702) |
| **Beam search** | 在 SM120（RTX PRO 6000）上加速 trie 约束 beam search | 基于 eager beam decode（[#44349](https://github.com/sgl-project/sglang/pull/44349)）重新合入；记录了 GPU 空闲和输出对比结果 | [PR #49429](https://github.com/sgl-project/sglang/pull/49429) |
| **PD disaggregation** | 将 MooncakeTransport 抽象为通用 `Transport` 接口 | 完成 [#34510](https://github.com/sgl-project/sglang/issues/34510) 的第二步；统一了 Mooncake 和 Ascend 的传输方案 | [PR #46460](https://github.com/sgl-project/sglang/pull/46460) |
| **HiCache prefetch** | 在 Linker prefetch 中避免不必要的 Mooncake lease 续租 | 减少主动 KV cache prefetch 期间的 lease 开销 | [PR #50304](https://github.com/sgl-project/sglang/pull/50304) |
| **KV cache** | 将 fused FP8 prefix-valid commit 内核限制在 SM89+ | 修复 SM86（Ampere）编译失败；fp8e4nv Triton 内核现通过 SM89（Ada/Hopper）检查门控 | [PR #45488](https://github.com/sgl-project/sglang/pull/45488) |
| **Router** | 新增 `--dp-rank-policy least_tokens` 选项，按 engine 报告的 token 数量做 KV 负载均衡 | 对 `--dp-aware` 路由的增强；以 token 数量而非 in-flight 请求数或 round-robin 选择 DP rank | [PR #51147](https://github.com/sgl-project/sglang/pull/51147) |
| **Weight cache** | `vmm_fd` 作为 weight cache daemon 的新传输后端 | 替换原有占位实现；使用 VMM 文件描述符替代 CUDA IPC handles | [PR #46953](https://github.com/sgl-project/sglang/pull/46953) |

---

## 5. 稳定性与回归问题

> **⚠️ 正在处理中的回归问题 — 请优先关注**

| 严重程度 | 问题 | 详情 | 临时方案 / 状态 |
|----------|-------|--------|---------------------|
| **🔴 严重** | Hopper decode 回归 | SM90：并发 12（8K–64K 上下文）、DSpark 投机解码 + `use_deep_select_decode` 场景下，v0.5.22 → v0.5.23 每步 decode 时间增加 33–45% | 暂无已知临时方案，正在排查中 | [#49336](https://github.com/sgl-project/sglang/issues/49336) |
| **🔴 严重** | SM120 CUDA-graph 崩溃 | FA4 注意力后端在混合 extend reshape 阶段 CUDA-graph 捕获崩溃，影响 GLM-5.3-Flash | 临时方案：使用 `--attention-backend triton` | [#42012](https://github.com/sgl-project/sglang/issues/42012) |
| **🔴 严重** | MHA fp16 decode 输出 NaN | `decode_attention_fwd` 在某个 q×k 乘积超过 65504（fp16 上限）时返回 NaN；影响 MHA 模型（`kv_group_num == 1`） | 修复 PR 尚未提交 | [#51095](https://github.com/sgl-project/sglang/issues/51095) |
| **🟡 高** | macOS `--device cpu` 崩溃 | `get_cpu_ids_by_node` 中执行 `lscpu` 报错 `RuntimeError`；在 macOS 上 server 解析 CPU ID 逻辑有误 | 修复 PR 尚未提交 | [#50915](https://github.com/sgl-project/sglang/issues/50915) |
| **🟡 高** | 推理解析器截断问题 | CoT 中带引号的 `</think>` 会触发过早的 end-of-reasoning 定界符，导致后续思维链内容泄露到 content 字段 | 修复 PR 尚未提交 | [#48791](https://github.com/sgl-project/sglang/issues/48791) |
| **🟡 高** | Qwen3.8-27B 数值差异 | 评分结果受 batch shape 影响；边界决策可能在 FP8 和 BF16 运行之间翻转 | 可复现的数值行为差异；修复 PR 尚未提交 | [#43956](https://github.com/sgl-project/sglang/issues/43956) |
| **🟡 高** | Anthropic 流式输出丢失 `}` | 多工具调用场景下，工具调用参数间的空白符导致闭合 `}` 被丢弃 | 修复 PR 尚未提交 | [#42260](https://github.com/sgl-project/sglang/issues/42260) |
| **🟢 中** | CI  flaky tests（211 条评论） | 跟踪 `PR Test Base` / `PR Test Extra` 运行中的 flaky tests 和 CI 基础设施故障 | `@sglang-pr-babysit` Claude Code 工作流已启用 | [#42752](https://github.com/sgl-project/sglang/issues/42752) |

**已解决 / 已关闭（inactive）：** 2026-11-18 标记为 `[CLOSED] [inactive]` 的 issue 包括 DeepSeek V4/V3.2 工具调用解析（[#40236](https://github.com/sgl-project/sglang/issues/40236)）、Qwen3CoderDetector 正则截断（[#39836](https://github.com/sgl-project/sglang/issues/39836)）、Python vs Rust prompt 渲染不一致（[#39843](https://github.com/sgl-project/sglang/issues/39843)）、chunked-prefill 下 decode 饥饿问题（[#32549](https://github.com/sgl-project/sglang/issues/32549)）等。

---

## 6. 对应用开发者的影响

1. **Hopper 用户升级需谨慎**：如果在 H100/H200/H20（SM90）上使用 DSpark 投机解码，请在 [#49336](https://github.com/sgl-project/sglang/issues/49336) 解决之前暂缓从 v0.5.22 升级至 v0.5.23 — 在生产并发量级下 33–45% 的 decode 延迟回退影响显著。

2. **SM120 用户：避免 FA4 + CUDA graphs 组合使用 GLM 模型**：如果在 RTX PRO 6000（SM120）上部署 GLM-5.3-Flash，请显式设置 `--attention-backend triton`，直至 FA4 CUDA-graph 捕获崩溃修复（[#42012](https://github.com/sgl-project/sglang/issues/42012)）。

3. **macOS CPU serving 目前不可用**：`lscpu` 驱动的 CPU ID 检测在 macOS 上会崩溃（[#50915](https://github.com/sgl-project/sglang/issues/50915)）；如果您在 Apple Silicon 上使用 `--device cpu` 评估 SGLang，当前会报错。

4. **Structured output 示例文档已修复**：sampling 文档已更新为使用 `--grammar-backend xgrammar`（[PR #51150](https://github.com/sgl-project/sglang/pull/51150)）；请更新您复制粘贴的 server 启动命令。

5. **新模型可用**：Mistral Large 4 现已支持完整的 DSpark 投机解码和 YaRN 1M 上下文（[PR #47271](https://github.com/sgl-project/sglang/pull/47271)）。Kimi-K3.1 已登陆 AMD MI350X/MI355X 和 Ascend NPU，为 NVIDIA 以外的部署场景提供了新的选择。

6. **Router 策略更新**：如果您使用 PD disaggregation 并启用了 `--dp-aware`，新的 `--dp-rank-policy least_tokens` 选项（[PR #51147](https://github.com/sgl-project/sglang/pull/51147)）相比默认的 in-flight 请求数策略可能改善 KV cache 负载均衡效果。

7. **为 SGLang 1.0 做准备**：1.0 版本追踪（[#50045](https://github.com/sgl-project/sglang/issues/50045)）表明废弃配置项将替换为显式错误。请在升级到 1.0 之前审计您的启动脚本中是否有废弃参数；[PR #51074](https://github.com/sgl-project/sglang/pull/51074) 中的重构已开始在当前版本中暴露这些错误。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English technical digest about llama.cpp into Simplified Chinese. Let me translate this following the guidelines:

1. Output ONLY the translation - no preamble or explanation
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate section by section:

Title: "llama.cpp Digest — 2026-11-18" stays as-is for the date, but I should translate "Digest" - but actually dates stay as-is, and the title can be translated.

Section 1: Today's Highlights
"continued momentum across GPU backends" - 持续推进
"AMD GCN receiving stream_k optimizations" - AMD GCN 获得 stream_k 优化
"new OpenCL binary kernel for Q5_K on A7 hardware" - 新的 A7 Q5_K 非 MoE 二进制内核
"Multi-modal support expanded with Kokoro TTS integration and Qwen3-TTS reference mode" - 多模态支持扩展，新增 Kokoro TTS 集成和 Qwen3-TTS 参考模式
"critical server fix" - 关键服务端修复
"returns HTTP 400" - 返回 HTTP 400
"grammar constraints conflict with ignore_eos" - 语法约束与 ignore_eos 冲突
"prevent silent correctness issues" - 防止静默的正确性问题

Section 2: Releases & Breaking Changes
- keep URLs and PR numbers
- Translate descriptions naturally

Section 3: New Model & Hardware Support
- Keep model names, hardware names, status, etc.
- Translate Chinese naturally

Section 4: Performance & Optimization
- Keep all technical terms
- Translate descriptions


- Section 5: Stability & Regressions - need to handle emoji severity indicators carefully in Chinese context
- Section 6: What This Means for Application Developers - translate the implications for developers while maintaining technical precision

I need to be careful about:
1. Technical terms that are commonly used in English in Chinese tech communities (GPU backend, kernel, merge, PR, etc.)
2. Emoji usage - some are universal but context matters
3. Column alignment in tables - this is tricky in Chinese but I should preserve the structure
4. Code spans and references like #12345 stay as-is

Let me translate:

# llama.cpp 技术周报 — 2026-11-18 (or 日期)

Actually, "Digest" could be translated as "技术周报" or "动态摘要" or kept as "Digest". Let me use "技术周报" for a more natural Chinese developer newsletter feel.

Actually looking at the rules again: "Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output." So I just output the Chinese translation directly.

Let me do this carefully:

---

# llama.cpp 技术周报 — 2026-11-18

## 1. 今日要闻

各 GPU 后端持续推进，AMD GCN 获得 stream_k 优化并新增 A7 Q5_K 非 MoE 二进制内核（OpenCL）。多模态支持扩展，新增 Kokoro TTS 集成和 Qwen3-TTS 参考模式。关键服务端修复：grammar 与 ignore_eos 冲突时现在返回 HTTP 400，防止静默正确性问题。

## 2. 版本发布与破坏性变更

| Commit | 变更内容 | 备注 |
|--------|---------|------|
| [#32377](https://github.com/ggml-org/llama.cpp/pull/32377) | `server`: 当启用 grammar 且 `ignore_eos` 为真时返回 HTTP 400 | 防止采样错误；将验证移至 sampler 层 |
| [#32483](https://github.com/ggml-org/llama.cpp/commit/32483) | `qwen4exp`: 修复 n-gram 表规模导致的图重分配 | 正确应用 ggml_scale 并在加载后单次读取 |

**今日无新发布标签。** 构建版本仍处于 `1.0.0-dev` 阶段。

---

## 3. 新模型与硬件支持

| 领域 | 项目 | PR/Commit | 状态 |
|------|------|-----------|------|
| **TTS** | Kokoro TTS 集成（`mtmd`）| [#32413](https://github.com/ggml-org/llama.cpp/pull/32413) | 已合并（b12494）|
| **TTS** | Qwen3-TTS ICL/参考模式 | [#32438](https://github.com/ggml-org/llama.cpp/pull/32438) | 已合并（b12491）|
| **模型** | Flint（`FlintForCausalLM`）| [#30928](https://github.com/ggml-org/llama.cpp/pull/30928) | 已合并 |
| **模型** | MiniCPM5 MoE（门控 GQA + 共享专家）| [#32386](https://github.com/ggml-org/llama.cpp/pull/32386) | 已合并 |
| **模型** | GigaChat 3.5（432B MoE，MLA + DeepSeek MoE）| [#25342](https://github.com/ggml-org/llama.cpp/pull/25342) | Open |
| **量化** | Prism PQ2_0（type 142）和 PTQ1_0（type 143）| [#29058](https://github.com/ggml-org/llama.cpp/issues/29058) | 功能需求 |
| **后端** | AMD GCN：HIP 启用 stream_k | [#30022](https://github.com/ggml-org/llama.cpp/pull/30022) | 已合并（b12496）|
| **后端** | OpenCL：A7 Q5_K 非 MoE 二进制内核 | [#31002](https://github.com/ggml-org/llama.cpp/pull/31002) | 已合并（b12492）|
| **后端** | OpenCL：A7 DP4A 内核（Q4_0/K、Q5_K、Q6_K、Q8_0）| [#32510](https://github.com/ggml-org/llama.cpp/pull/32510) | Open |

---

## 4. 性能与优化

### 今日合并

| 类别 | 变更 | 影响 | PR/Commit |
|------|------|------|-----------|
| **CUDA MMQ** | `MUL_MAT_ID` 的 few-row MMQ（DGX Spark 上 2+ token）| 提升低 batch 量化 MoE 吞吐 | [#32065](https://github.com/ggml-org/llama.cpp/pull/32065)（b12487）|
| **CUDA conv2d** | F32 内核的隐式 GEMM 路径（原仅支持 F16）| F32 卷积显著加速；避免朴素直接卷积 | [#32482](https://github.com/ggml-org/llama.cpp/pull/32482)（b12493）|
| **CUDA pool** | 整行 `pool_1d` 使用块归约 | 池化操作更快 | [#31855](https://github.com/ggml-org/llama.cpp/pull/31855)（b12485）|
| **CUDA MMQ** | conv2d patch 索引的 Fastdiv 解码 | 长归约可达 1.6×（如 768ch，k=7）| [#32492](https://github.com/ggml-org/llama.cpp/pull/32492)|
| **CPU** | 大型 `GET_ROWS`（>262K 元素）使用全部线程 | GPU 卸载时 CPU 利用率更好 | [#32514](https://github.com/ggml-org/llama.cpp/pull/32514)|
| **CPU MoE** | `-n-cpu-moe` 下单 token MoE 的特殊门控激活路径 | 单 token MoE 推理加速 | [#20596](https://github.com/ggml-org/llama.cpp/pull/20596)|

### 进行中（Open PRs）

| 类别 | 变更 | 备注 |
|------|------|------|
| **SYCL GEMM** | 改进 Grouped XMX GEMM（避免 SLM 暂存）| 需先完成 #30156；减少内存流量 |
| **CUDA MoE** | V100 上 MoE 的 MMQ（FP16 tensor core，无 int8）| V100 专用内核选择修复 |
| **Vulkan INT8** | 缩小 AMDVLK 与 RADV 的 MMQ 性能差距 | 差距缩小约 15% |
| **CUDA FA** | `flash_attn_tile` 原生支持量化/bf16 KV | tile load 中支持 q4_0/1、q5_0/1、q8_0、bf16 |
| **多 GPU** | 混合 tensor/layer 模式原型 | Prefill 吞吐约 2× 提升（~700→1500 t/s）；尚未就绪可合并 |

---

## 5. 稳定性与回归

### 已合并关键修复

| 问题 | 严重性 | 修复方案 | 链接 |
|------|--------|----------|------|
| AMD Windows（RDNA3）上 Vulkan FA 崩溃 | 🔴 高 | 禁用 AMD Windows 驱动的 flip FA shader | PR [#32415](https://github.com/ggml-org/llama.cpp/pull/32415)（已合并）|
| SYCL `-sm tensor` 内存泄漏 | 🟡 中 | 已关闭/过期；正在进行 workaround | Issue [#27845](https://github.com/ggml-org/llama.cpp/issues/27845)|

### 待解决公开问题

| 问题 | 严重性 | 描述 | 临时方案/状态 |
|------|--------|------|---------------|
| [#31509](https://github.com/ggml-org/llama.cpp/issues/31509) | 🟡 中 | Vulkan：Radeon 680M 上随机全 NaN logits；禁用整数点积后消失 | 自 b10343 起可复现；驱动/容差问题 |
| [#32370](https://github.com/ggml-org/llama.cpp/issues/32370) | 🟡 中 | i915 Vulkan：多 ubatch 损坏（GPU 队列 >20s）| 根因调查中 |
| [#31206](https://github.com/ggml-org/llama.cpp/issues/31206) | 🟡 中 | `/v1/completions` 在 SYCL iGPU MoE 上 logprobs 非确定性；seed 字段无法固定分布 | Request 级别的 seed 未正确传递 |
| [#32493](https://github.com/ggml-org/llama.cpp/issues/32493) | 🟡 中 | 实时转录会话丢失 ASR 指令；Gemma 回答音频而非转录 | 修复 PR [#32507](https://github.com/ggml-org/llama.cpp/pull/32507) 开放中 |
| [#32503](https://github.com/ggml-org/llama.cpp/issues/32503) | 🟡 中 | `llama-cvector-generator`：direction.N 在上游一个 block 测量；最深 steering depth 无法测量 | qwen35moe 验证受影响 |
| [#32496](https://github.com/ggml-org/llama.cpp/issues/32496) | 🟢 低 | 裸 JSON tool call（Llama 3.x）不触发延迟 grammar | 修复 PR [#32497](https://github.com/ggml-org/llama.cpp/pull/32497) 开放中 |

### 已关闭陈旧问题

- [#28037](https://github.com/ggml-org/llama.cpp/issues/28037)：Volta SM70/SM72 Flash Attention 分析 → 自动关闭；Ampere 回退已接近最优
- [#29935](https://github.com/ggml-org/llama.cpp/issues/29935)：Ampere KV 流式性能 ~2× 低于理论值 → 陈旧
- [#31675](https://github.com/ggml-org/llama.cpp/issues/31675)：ROCm/HIP 上 MoE 缓存中止 → 已关闭

---

## 6. 对应用开发者的影响

### 立即部署
- **AMD GCN 用户**：通过新配置调优启用 HIP stream_k，以改善 MI100/MI200/gfx10xx 吞吐
- **AMD Windows Vulkan 用户**：Flash Attention flip 路径现已禁用；回退到非 flip 路径保证正确性
- **服务端运维**：Grammar + `ignore_eos` 现在返回 HTTP 400 而非静默采样错误——请审查现有工作负载

### 下个周期评估
- **SYCL 部署**：iGPU MoE 上非确定性 `logprobs` 问题（Issue #31206）影响可复现性；在问题解决前，生产环境 MoE 推理不要依赖 seed 固定
- **多 GPU**：混合 tensor/layer 原型（PR #32508）显示 2× prefill 收益，但尚未生产就绪；关注合并就绪状态
- **量化模型**：带 MoE 的 V100 用户应关注 PR #32504 以获得正确的 MMQ 分发

### 关注列表
- Vulkan INT8 MMQ AMDVLK  parity 工作（PR #32395）可能为 AMD Vulkan 用户消除约 15% 的性能差距
- Hadamard 旋转三值权重（Issue #32160）和 Prism PQ2_0/PTQ1_0（Issue #29058）代表即将推出的量化格式补充
- Kokoro TTS 集成支持在生产构建中进行设备端语音合成管道</think>



</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the technical digest from English to Simplified Chinese. Let me carefully translate this following all the rules specified.

I need to:
1. Translate everything to natural Simplified Chinese
2. Preserve all Markdown structure exactly
3. Keep URLs, links, numbers, code spans, etc. verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers as-is
5. Use natural technical Chinese register - like a Chinese developer newsletter
6. Output ONLY the translation, no preamble or explanation

Let me translate section by section:

Title: "Ollama Digest — 2026-11-18"
- This stays as-is or I translate "Digest" but keep the date

Section 1: Today's Highlights
- "landed" → 合并/落地
- Infrastructure improvements → 基础设施改进
- VRAM accounting correctness → VRAM 计量准确性
- GPU splitting logic → GPU 切分逻辑
- MLX runner resilience → MLX runner 稳定性
- Apple Silicon → Apple Silicon
- Ascend NPU support via CANN backend integration → 通过 CANN 后端集成支持 Ascend NPU
- Vulkan performance regressions on RDNA1 AMD GPUs surfaced as high-priority → RDNA1 AMD 显卡的 Vulkan 性能回退成为高优先级问题
- GCC 15 compatibility and streaming buffer allocation were resolved → GCC 15 兼容性问题及流式缓冲分配问题已解决

Section 2: Releases & Breaking Changes
- "No new releases" → 无新版本发布
- "Resolved build regressions" → 已解决的构建回归问题
- "missing `#include <cstdint>` in `llama-mmap.h` causing `uint32_t` errors" → `llama-mmap.h` 中缺少 `#include <cstdint>` 导致 `uint32_t` 报错


- "enables Go tree builds without cgo" → 允许不依赖 cgo 构建 Go 树

Section 3: New Model & Hardware Support
- I'll maintain the table structure while translating descriptions
- "CANN backend build and device discovery" → CANN 后端构建与设备发现
- "Vulkan enabled out-of-box" → 出厂即启用 Vulkan
- "Intel Ultra Series 1+ (MTL+)" stays as-is
- "driver version 32.0.101.9150+ and 16 GB+ RAM" stays as-is

, with Chinese phrasing: 需 32.0.101.9150+ 驱动及 16 GB+ 内存
- "OpenVINO-based NPU backend" → 基于 OpenVINO 的 NPU 后端
- "Core Ultra support" → Core Ultra 支持
- "Vulkan performance regression (~13× slower)" → Vulkan 性能回退（慢约 13 倍）
- "RDNA1" stays as-is
- "PPLX Decider v1.3 support added to MLX runner" → MLX runner 新增 PPLX Decider v1.3 支持 (27B, Flash 架构)
- "batch sizing fix for non-causal architectures" → 非因果架构的批处理大小修复

Continuing with the performance and optimization sections. The VRAM accounting fix resolves several related issues: incorrect model eviction, load refusals, and unnecessary GPU spreading. GPU splitting logic prevents unnecessary model distribution across GPUs. MLX runner caching preserves inactive conversation state to disk, while memory management adapts history retention under memory pressure with bounded staging and shutdown draining. Runner sharing eliminates per-request model reloads when clients toggle between shift modes. Streaming buffer allocation switches from fixed 8 MB pre-allocation to on-demand growth, and decision model batching ensures whole-prompt batches align with `decision.type` model requirements.

For stability, AMD RX 5700 XT (RDNA1) shows the highest severity with open status. The Qwen tool call XML parsing failure on `qwen3-coder:30b` remains open as a medium-priority issue since March 2025. GLM-OCR generation halt and port 11434 bind failures are medium severity, while GCC 15 build failure and Windows sleep prevention are lower priority but still open. Application developers should prioritize GPU resource management improvements, noting that the VRAM accounting and GPU splitting fixes directly impact multi-GPU deployments.

Context shift overhead elimination removes per-request model reloads when clients alternate shift modes. Streaming API memory overhead is reduced by pre-allocating 8 MB per call rather than on-demand. MLX runner state durability benefits Apple Silicon with long conversation threads by reducing reprocessing. Decision model batch sizing corrects issues with `d1-2B` and similar architectures on multi-turn agentic tasks. Intel IGPU Vulkan out-of-box experience improves once the relevant PR lands. AMD RDNA1 Vulkan regression should be monitored.
</think>


# Ollama Digest — 2026-11-18

## 1. 今日要点

Ollama 贡献者们落地了多项重要的基础设施改进，重点解决 VRAM 计量准确性、GPU 切分逻辑以及 Apple Silicon 上 MLX runner 的稳定性问题。一条新 PR 提议通过 CANN 后端集成支持 Ascend NPU。与此同时，RDNA1 AMD 显卡上的 Vulkan 性能回退问题浮出水面，成为高优先级事项。在稳定性方面，GCC 15 兼容性问题及流式缓冲分配问题已得到解决。

## 2. 版本发布与重大变更

过去 24 小时内无新版本发布。

**已解决的构建回归问题：**

- **[GCC 15 编译失败](https://github.com/ollama/ollama/issues/19714)** — `llama-mmap.h` 中缺少 `#include <cstdint>` 导致 `uint32_t` 报错；问题已关闭。
- **MLX Windows 构建** — [PR #18675](https://github.com/ollama/ollama/pull/18675) 允许不依赖 cgo 构建 Go 树，解决了 Windows（无 C 工具链环境）上的构建失败。已关闭。

## 3. 新模型与硬件支持

| 领域 | 项目 | 状态 | 链接 |
|------|------|--------|-------|
| **Ascend NPU** | 面向华为 Ascend NPU 的 CANN 后端构建与设备发现 | 提议中 | [#19735](https://github.com/ollama/ollama/issues/19735) |
| **Intel 集显** | Intel Ultra 系列 1 代及以上（MTL+）出厂即启用 Vulkan，需 32.0.101.9150+ 驱动及 16 GB+ 内存 | 进行中 | [#19568](https://github.com/ollama/ollama/pull/19568) |
| **Intel NPU** | 基于 OpenVINO 的 NPU 后端请求（Core Ultra 支持） | 已关闭（未实现） | [#19535](https://github.com/ollama/ollama/issues/19535) |
| **AMD RDNA1** | RX 5700 XT Vulkan 性能回退（比上游 llama.cpp 慢约 13 倍） | 待解决调查中 | [#19747](https://github.com/ollama/ollama/issues/19747) |
| **AMD RDNA2** | RX 6750 XT tensile 初始化失败 | 已关闭 | [#6003](https://github.com/ollama/ollama/issues/6003) |
| **Apple Silicon** | MLX runner 新增 PPLX Decider v1.3 支持（27B、Flash 架构） | 待合并 | [#19734](https://github.com/ollama/ollama/pull/19734) |
| **决策模型** | `d1-2B` 非因果架构批处理大小修复 | 待合并 | [#19740](https://github.com/ollama/ollama/issues/19740), [#19743](https://github.com/ollama/ollama/pull/19743) |

## 4. 性能与优化

| 类别 | 变更内容 | PR / Issue |
|----------|--------|------------|
| **VRAM 计量** | 修复了模型驱逐错误、加载被拒以及不必要的 GPU 分散问题。解决了 #19463、#18679、#18349、#16599。 | [#19632](https://github.com/ollama/ollama/pull/19632) |
| **GPU 切分** | 改进逻辑，避免在非必要时将模型分散到多个 GPU。 | [#19632](https://github.com/ollama/ollama/pull/19632) |
| **MLX runner — 缓存** | 将非活跃对话缓存持久化到磁盘；在内存回收、模型切换或 runner 重启后恢复状态。 | [#19745](https://github.com/ollama/ollama/pull/19745), [#19744](https://github.com/ollama/ollama/pull/19744), [#19678](https://github.com/ollama/ollama/pull/19678) |
| **MLX runner — 内存** | 内存压力下自适应调整历史记录保留策略；暂存区有界，关闭时优雅排空。 | [#19678](https://github.com/ollama/ollama/pull/19678) |
| **MLX runner — 前缀复用** | 在繁忙请求槽之间复用已保存的提示前缀，适用于有重叠对话的场景。 | [#19677](https://github.com/ollama/ollama/pull/19677)（已关闭） |
| **Runner 共享** | 单一 runner 在 `--context-shift` 不同设置间共享；消除客户端切换 shift 模式时的逐请求模型重载。 | [#19748](https://github.com/ollama/ollama/pull/19748) |
| **流式缓冲** | API 流式响应改为按需增长缓冲，而非预先分配 8 MB。 | [#19736](https://github.com/ollama/ollama/pull/19736) |
| **决策模型批处理** | 为 `decision.type` 类模型（如 `d1-2B`）整段提示批处理正确设置大小，防止多图请求超过 512 token 时出现误导性的上下文长度错误。 | [#19743](https://github.com/ollama/ollama/pull/19743) |

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **高** | **AMD RX 5700 XT（RDNA1）Vulkan 问题** — 提示处理速度比上游 llama.cpp 慢约 13 倍，生成阶段慢 17%。 | 待解决 | — |
| **中** | **Qwen 工具调用 XML 解析失败**（`qwen3-coder:30b`）— 代理场景中间歇性出现 "unexpected EOF" 错误。 | 待解决（自 2025 年 3 月起） | — |
| **中** | **`glm-ocr` 生成永不停止** — 0.40.15/0.40.16 上的 EOS token 处理回归。 | 已关闭 | — |
| **中** | **端口 11434 绑定失败** — API 启动时报地址已被占用。 | 待解决 | — |
| **低** | **GCC 15 构建失败** — `llama-mmap.h` 中缺少 `#include <cstdint>`。 | 已关闭 | 隐式 |
| **低** | **端口绑定 / Windows 休眠阻止** — 自 2024 年起跟踪的功能请求。 | 待解决 | — |

## 6. 对应用开发者的意义

**基础设施工程师应注意：**

1. **GPU 资源管理正在改善。** VRAM 计量和 GPU 切分修复（[#19632](https://github.com/ollama/ollama/pull/19632)）直接影响多 GPU 部署——如果你一直遇到原因不明的模型驱逐或加载失败，一旦该 PR 合入，此类问题应该会得到解决。

2. **Context shift 开销已被消除。** 之前客户端在请求间切换 `--context-shift` 会导致每次切换都重新加载模型。[PR #19748](https://github.com/ollama/ollama/pull/19748) 使单一 runner 能够同时处理两种模式，减少了使用滑动窗口上下文管理的代理应用的延迟。

3. **流式 API 内存开销降低。** 之前每个流式调用预分配 8 MB（[#19736](https://github.com/ollama/ollama/pull/19736)），对短响应浪费严重。高请求量、小输出场景的应用将看到内存压力下降。

4. **MLX runner 状态持久性提升。** 如果你在 Apple Silicon 上运行带有长对话线程的 Ollama，新增的缓存持久化（[#19745](https://github.com/ollama/ollama/pull/19745)）意味着在内存压力事件或 runner 重启后需要重新处理的内容更少。

5. **决策模型批处理大小已修正。** 使用 `d1-2B` 或类似架构进行多轮代理任务的应用，应在使用超过 512 token 的图片请求进行重测——误导性的"上下文长度"错误已在 [#19743](https://github.com/ollama/ollama/pull/19743) 中解决。

6. **Intel 集显 Vulkan 开箱即用体验将改善。** 一旦 [#19568](https://github.com/ollama/ollama/pull/19568) 落地，Core Ultra 系统上的 Intel 集成显卡将默认使用 Vulkan（此前经常回退到 CPU）。

**持续关注：** AMD RDNA1 Vulkan 回归（[#19747](https://github.com/ollama/ollama/issues/19747)）对使用较旧 AMD 显卡的用户影响重大——在问题解决前，请避免在 RX 5700 XT 上使用 Vulkan 模式。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:
1. Translate all the content to Simplified Chinese
2. Keep the Markdown structure intact
3. Keep URLs, version numbers, issue/PR references, and technical identifiers in their original form
4. Use natural technical Chinese register
5. Output ONLY the translation, no preamble or explanation

Let me translate section by section:

Title: LiteLLM Digest — 2026-11-18 → LiteLLM 速报 — 2026-11-18

## Today's Highlights → 今日要点

The LiteLLM team continues its Rust migration push... → LiteLLM 团队持续推进 Rust 迁移工作，通过两个新 PR（#52170, #52173）将认证和数据库查询从 Prisma 迁移到 Rust 存储，旨在降低高频认证路径的延迟。与此同时，Anthropic `/v1/messages` 到 OpenAI 兼容后端的流式传输相关 bug——包括 reasoning_content 类型处理（#50893）、工具调用参数丢失（#45348）和提示缓存计量（#41067）——仍在修复或近期已关闭，表明翻译层的持续完善。

## Releases & Breaking Changes → 版本发布与破坏性变更

| Version | Type | Notes |
|---------|------|-------|
| [v1.111.0-rc.1](...) | Release Candidate | Latest RC; verify with cosign |
| [v1.110.0](...) | Stable | Current stable |
| [v1.108.11](...) | LTS | Pull `ghcr.io/berriai/litellm:lts` for latest LTS |

→

| 版本 | 类型 | 说明 |
|---------|------|-------|
| [v1.111.0-rc.1](...) | 候选版 | 最新 RC；请用 cosign 校验 |
| [v1.110.0](...) | 稳定版 | 当前稳定版 |
| [v1.108.11](...) | 长期支持版 | 拉取 `ghcr.io/berriai/litellm:lts` 获取最新 LTS |

No breaking config/API changes reported in today's releases. → 今日版本未报告配置或 API 破坏性变更。

## New Model & Hardware Support → 新模型与硬件支持

- **Claude on Vertex AI `/v1/messages`**: → **Vertex AI Claude `/v1/messages`**：→ 路由已从 Python 迁移到 Rust，与现有的 Anthropic、Azure AI 和 Bedrock 实现保持一致。
- **Bedrock GPT native structured output**: → **Bedrock GPT 原生结构化输出**：→ 通过 Converse API 为 GPT 模型添加 `text.format.strict` 参数，解决了 Bedrock 上的 JSON schema 强制校验问题。
- **Feature request**: Salt key rotation... → **功能需求**：盐值密钥轮换（#12448），参考现有 `master_key_rotations` 机制实现。

## Performance & Optimization → 性能与优化

| Area | Issue | Status | Details |
|------|-------|--------|---------|
| Auth lookups | O(n²) credential sync blocking event loop | [PR #52173](https://github.com/BerriAI/litellm/pull/52173) | Moves virtual key reads to Rust repositories; `RUST_RESERVED_CONNECTIONS` bumped 0→2 |
| Streaming memory | `FallbackStreamWrapper` class per call causes GC retention | [Issue #51936](https://github.com/BerriAI/litellm/issues/51936) | Class defined inside `_acompletion_streaming_iterator`; reference cycles prevent timely cleanup |
| Cache key computation | Full request stringification for image-heavy payloads | [Issue #51935](https://github.com/BerriAI/litellm/issues/51935) | `cache_key += f"{param}: {param_value}"` on large base64 inputs can block event loop for seconds |
| Router queuing | Opt-in congestion queuing for async non-streaming | [PR #51892](https://github.com/BerriAI/litellm/pull/51892) | Activates after upstream 429/529; returns 503 for full queues, 408 for timeout |

→

| 领域 | 问题 | 状态 | 详情 |
|------|-------|--------|---------|
| 认证查询 | O(n²) 凭证同步阻塞事件循环 | [PR #52173](https://github.com/BerriAI/litellm/pull/52173) | 将虚拟密钥读取迁移到 Rust repositories；`RUST_RESERVED_CONNECTIONS` 从 0 提升至 2 |
| 流式内存 | 每次调用生成 `FallbackStreamWrapper` 类导致 GC 留存 | [Issue #51936](https://github.com/BerriAI/litellm/issues/51936) | 类在 `_acompletion_streaming_iterator` 内部定义；引用循环阻止及时清理 |
| 缓存键计算 | 图片负载的完整请求字符串化 | [Issue #51935](https://github.com/BerriAI/litellm/issues/51935) | 对大段 base64 输入执行 `cache_key += f"{param}: {param_value}"` 可能阻塞事件循环数秒 |
| 路由器队列 | 异步非流式的可选拥塞排队 | [PR #51892](https://github.com/BerriAI/litellm/pull/51892) | 上游返回 429/529 后激活；队列满返回 503，超时返回 408 |

## Stability & Regressions → 稳定性与回归

| Severity | Issue | ID | Fix PR |
|----------|-------|-----|--------|
| 🔴 High | Database read-replica failover deadlocks after timeout | [#52284](https://github.com/BerriAI/litellm/issues/52284) | — |
| 🔴 High | SQL_ASCII encoding causes crash on startup | [#52247](https://github.com/BerriAI/litellm/issues/52247) | — |
| 🔴 High | Budget reservation leak on abandoned streams | [#52362](https://github.com/BerriAI/litellm/issues/52362) | — |
| 🟡 Medium | `reasoning_content` as list crashes `stream_chunk_builder` | [#50893](https://github.com/BerriAI/litellm/issues/50893) | — |
| 🟡 Medium | Parallel tool-call args dropped when streaming `/v1/messages` | [#45348](https://github.com/BerriAI/litellm/issues/45348) | — |
| 🟡 Medium | Audit logs 500 when `before_value` stored as JSON string | [#50905](https://github.com/BerriAI/litellm/issues/50905) | — |
| 🟡 Medium | Failed requests not counted toward RPM limits | [#21312](https://github.com/BerriAI/litellm/issues/21312) | — |
| 🟢 Low | OpenAPI spec missing `config.yaml` endpoint | [#16623](https://github.com/BerriAI/litellm/issues/16623) | — |
| 🟢 Low | Vertex Gemini image edits misprice token usage | [#52220](https://github.com/BerriAI/litellm/issues/52220) | — |

→

| 严重程度 | 问题 | ID | 修复 PR |
|----------|-------|-----|--------|
| 🔴 高 | 数据库只读副本故障转移后超时死锁 | [#52284](https://github.com/BerriAI/litellm/issues/52284) | — |
| 🔴 高 | SQL_ASCII 编码导致启动崩溃 | [#52247](https://github.com/BerriAI/litellm/issues/52247) | — |
| 🔴 高 | 放弃的流式请求预算预留泄漏 | [#52362](https://github.com/BerriAI/litellm/issues/52362) | — |
| 🟡 中 | `reasoning_content` 为列表时 `stream_chunk_builder` 崩溃 | [#50893](https://github.com/BerriAI/litellm/issues/50893) | — |
| 🟡 中 | 流式 `/v1/messages` 中并行工具调用参数丢失 | [#45348](https://github.com/BerriAI/litellm/issues/45348) | — |
| 🟡 中 | `before_value` 存储为 JSON 字符串时审计日志返回 500 | [#50905](https://github.com/BerriAI/litellm/issues/50905) | — |
| 🟡 中 | 失败的请求未计入 RPM 限制 | [#21312](https://github.com/BerriAI/litellm/issues/21312) | — |
| 🟢 低 | OpenAPI 规范缺少 `config.yaml` 端点 | [#16623](https://github.com/BerriAI/litellm/issues/16623) | — |
| 🟢 低 | Vertex Gemini 图片编辑 token 用量计费错误 | [#52220](https://github.com/BerriAI/litellm/issues/52220) | — |

**Recently closed (fixes landed):** → **近期关闭（修复已合并）：**

- [#50701](https://github.com/BerriAI/litellm/pull/50701) — Bedrock Claude 5.x empty last user turn prefill 400; backported to LTS in [#51845](https://github.com/BerriAI/litellm/pull/51845) → Bedrock Claude 5.x 空最后用户轮次 prefill 导致 400 错误；已在 [#51845](https://github.com/BerriAI/litellm/pull/51845) 中 backport 至 LTS
- [#51954](https://github.com/BerriAI/litellm/pull/51954) — Anthropic translation rejects concatenated JSON tool-call arguments → Anthropic 翻译拒绝拼接的 JSON 工具调用参数
- [#51139](https://github.com/BerriAI/litellm/pull/51139) — Gemini `snake_case` generation_config honored on `generateContent` → Gemini `snake_case` generation_config 在 `generateContent` 中生效
- [#51259](https://github.com/BerriAI/litellm/pull/51259) — Paging params forwarded on `GET /v1/responses/{id}/input_items` → `GET /v1/responses/{id}/input_items` 正确转发分页参数

## What This Means for Application Developers → 对应用开发者的影响

1. **Rust migration in progress**: Auth hot paths are moving to Rust; expect lower p99 latency on key validation and model access checks in upcoming releases. Monitor for any behavioral differences if you're on edge cases.

→ **Rust 迁移进行中**：认证热路径正在迁移到 Rust；预计后续版本中密钥验证和模型访问检查的 p99 延迟将有所降低。请关注边界场景下的行为差异。

2. **Streaming edge cases**: If you're bridging OpenAI-compatible reasoning models to Anthropic `/v1/messages` (e.g., DeepSeek-R1 via vLLM/SGLang), be aware that `reasoning_content` type handling and prompt-cache accounting are still stabilizing — test streaming paths explicitly.

→ **流式边界情况**：如果你是将 OpenAI 兼容的推理模型桥接到 Anthropic `/v1/messages`（例如通过 vLLM/SGLang 调用 DeepSeek-R1），请注意 `reasoning_content` 类型处理和提示缓存计量仍在完善中——请务必对流式路径进行专项测试。

3. **Database configuration**: If running with `SQL_ASCII` encoding or read replicas, today's data shows both scenarios can cause silent failures or crashes. Consider migrating to `UTF8` and review your replica failover configuration.

→ **数据库配置**：如果你使用 `SQL_ASCII` 编码或只读副本，当前的数据显示这两种场景都可能导致静默失败或崩溃。建议迁移到 `UTF8` 并检查副本故障转移配置。

4. **LTS strategy**: v1.108.11 remains the stable LTS target; if you're on older LTS, the Claude 5.x Bedrock fix ([#50701](https://github.com/BerriAI/litellm/pull/50701)) is worth backporting.

→ **LTS 策略**：v1.108.11 仍是稳定 LTS 目标；如果你的 LTS 版本较旧，值得将 Claude 5.x Bedrock 修复（[#50701](https://github.com/BerriAI/litellm/pull/50701)）backport 过来。

5. **Budget tracking caution**: Abandoned streaming requests can cause spend counter drift ([#52362](https://github.com/BerriAI/litellm/issues/52362)); monitor for false `budget_exceeded` errors if you have clients that frequently disconnect early.

→ **预算追踪注意事项**：放弃的流式请求可能导致消费计数器漂移（[#52362](https://github.com/BerriAI/litellm/issues/52362)）；如果你的客户端频繁提前断开连接，请留意虚假的 `budget_exceeded` 错误。

---

Now I need to output ONLY the translation, no markdown fences, no preamble.
</think>


# LiteLLM 速报 — 2026-11-18

## 今日要点

LiteLLM 团队持续推进 Rust 迁移工作，通过两个新 PR（#52170, #52173）将认证和数据库查询从 Prisma 迁移到 Rust 存储，旨在降低高频认证路径的延迟。与此同时，Anthropic `/v1/messages` 到 OpenAI 兼容后端的流式传输相关 bug——包括 reasoning_content 类型处理（#50893）、工具调用参数丢失（#45348）和提示缓存计量（#41067）——仍在修复或近期已关闭，表明翻译层的持续完善。

## 版本发布与破坏性变更

| 版本 | 类型 | 说明 |
|---------|------|-------|
| [v1.111.0-rc.1](https://github.com/BerriAI/litellm/releases/tag/v1.111.0-rc.1) | 候选版 | 最新 RC；请用 cosign 校验 |
| [v1.110.0](https://github.com/BerriAI/litellm/releases/tag/v1.110.0) | 稳定版 | 当前稳定版 |
| [v1.108.11](https://github.com/BerriAI/litellm/releases/tag/v1.108.11) | 长期支持版 | 拉取 `ghcr.io/berriai/litellm:lts` 获取最新 LTS |

今日版本未报告配置或 API 破坏性变更。

## 新模型与硬件支持

- **Vertex AI Claude `/v1/messages`**：PR [#52314](https://github.com/BerriAI/litellm/pull/52314) 将路由从 Python 迁移到 Rust，与现有的 Anthropic、Azure AI 和 Bedrock 实现保持一致。
- **Bedrock GPT 原生结构化输出**：PR [#52419](https://github.com/BerriAI/litellm/pull/52419) 为 GPT 模型通过 Converse API 添加 `text.format.strict` 参数，解决了 Bedrock 上的 JSON schema 强制校验问题。
- **功能需求**：盐值密钥轮换（[#12448](https://github.com/BerriAI/litellm/issues/12448)），参考现有的 `master_key_rotations` 机制实现。

## 性能与优化

| 领域 | 问题 | 状态 | 详情 |
|------|-------|--------|---------|
| 认证查询 | O(n²) 凭证同步阻塞事件循环 | [PR #52173](https://github.com/BerriAI/litellm/pull/52173) | 将虚拟密钥读取迁移到 Rust repositories；`RUST_RESERVED_CONNECTIONS` 从 0 提升至 2 |
| 流式内存 | 每次调用生成 `FallbackStreamWrapper` 类导致 GC 留存 | [Issue #51936](https://github.com/BerriAI/litellm/issues/51936) | 类在 `_acompletion_streaming_iterator` 内部定义；引用循环阻止及时清理 |
| 缓存键计算 | 图片负载的完整请求字符串化 | [Issue #51935](https://github.com/BerriAI/litellm/issues/51935) | 对大段 base64 输入执行 `cache_key += f"{param}: {param_value}"` 可能阻塞事件循环数秒 |
| 路由器队列 | 异步非流式的可选拥塞排队 | [PR #51892](https://github.com/BerriAI/litellm/pull/51892) | 上游返回 429/529 后激活；队列满返回 503，超时返回 408 |

## 稳定性与回归

| 严重程度 | 问题 | ID | 修复 PR |
|----------|-------|-----|--------|
| 🔴 高 | 数据库只读副本故障转移后超时死锁 | [#52284](https://github.com/BerriAI/litellm/issues/52284) | — |
| 🔴 高 | SQL_ASCII 编码导致启动崩溃 | [#52247](https://github.com/BerriAI/litellm/issues/52247) | — |
| 🔴 高 | 放弃的流式请求预算预留泄漏 | [#52362](https://github.com/BerriAI/litellm/issues/52362) | — |
| 🟡 中 | `reasoning_content` 为列表时 `stream_chunk_builder` 崩溃 | [#50893](https://github.com/BerriAI/litellm/issues/50893) | — |
| 🟡 中 | 流式 `/v1/messages` 中并行工具调用参数丢失 | [#45348](https://github.com/BerriAI/litellm/issues/45348) | — |
| 🟡 中 | `before_value` 存储为 JSON 字符串时审计日志返回 500 | [#50905](https://github.com/BerriAI/litellm/issues/50905) | — |
| 🟡 中 | 失败的请求未计入 RPM 限制 | [#21312](https://github.com/BerriAI/litellm/issues/21312) | — |
| 🟢 低 | OpenAPI 规范缺少 `config.yaml` 端点 | [#16623](https://github.com/BerriAI/litellm/issues/16623) | — |
| 🟢 低 | Vertex Gemini 图片编辑 token 用量计费错误 | [#52220](https://github.com/BerriAI/litellm/issues/52220) | — |

**近期关闭（修复已合并）：**

- [#50701](https://github.com/BerriAI/litellm/pull/50701) — Bedrock Claude 5.x 空最后用户轮次 prefill 导致 400 错误；已在 [#51845](https://github.com/BerriAI/litellm/pull/51845) 中 backport 至 LTS
- [#51954](https://github.com/BerriAI/litellm/pull/51954) — Anthropic 翻译拒绝拼接的 JSON 工具调用参数
- [#51139](https://github.com/BerriAI/litellm/pull/51139) — Gemini `snake_case` generation_config 在 `generateContent` 中生效
- [#51259](https://github.com/BerriAI/litellm/pull/51259) — `GET /v1/responses/{id}/input_items` 正确转发分页参数

## 对应用开发者的影响

1. **Rust 迁移进行中**：认证热路径正在迁移到 Rust；预计后续版本中密钥验证和模型访问检查的 p99 延迟将有所降低。请关注边界场景下的行为差异。

2. **流式边界情况**：如果你是将 OpenAI 兼容的推理模型桥接到 Anthropic `/v1/messages`（例如通过 vLLM/SGLang 调用 DeepSeek-R1），请注意 `reasoning_content` 类型处理和提示缓存计量仍在完善中——请务必对流式路径进行专项测试。

3. **数据库配置**：如果你使用 `SQL_ASCII` 编码或只读副本，当前的数据显示这两种场景都可能导致静默失败或崩溃。建议迁移到 `UTF8` 并检查副本故障转移配置。

4. **LTS 策略**：v1.108.11 仍是稳定 LTS 目标；如果你的 LTS 版本较旧，值得将 Claude 5.x Bedrock 修复（[#50701](https://github.com/BerriAI/litellm/pull/50701)）backport 过来。

5. **预算追踪注意事项**：放弃的流式请求可能导致消费计数器漂移（[#52362](https://github.com/BerriAI/litellm/issues/52362)）；如果你的客户端频繁提前断开连接，请留意虚假的 `budget_exceeded` 错误。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the entire technical digest from English to Simplified Chinese. I need to:

1. Translate all text content while keeping the Markdown structure intact
2. Preserve all tables, lists, headings, formatting
3. Keep URLs, version tags, issue numbers, code, config identifiers as-is
4. Use natural technical Chinese suitable for a developer newsletter
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me work through this section by section:

Title: "Unsloth Digest — 2026-11-18" → Keep as-is for dates, translate the rest
"Today's Highlights" → 今日要点
"Releases & Breaking Changes" → 版本更新与破坏性变更
"New Model & Hardware Support" → 新模型与硬件支持
"Performance & Optimization" → 性能与优化
"Stability & Regressions" → 稳定性与回归问题
"What This Means for Application Developers" → 这对应用开发者意味着什么

Let me translate carefully, maintaining technical accuracy and natural Chinese flow.
</think>


# Unsloth 每日简报 — 2026-11-18

## 1. 今日要点

Unsloth 发布了 **v0.1.919-beta**，引入了 beta 阶段的 **computer use** 功能，允许本地模型与桌面环境交互，同时带来 **MCP 集成**，支持 Unity、Unreal Engine、Blender 和 Roblox。该版本还新增了 MiniMax-H3-Image 支持，涵盖 GGUF、FP8 和 INT8 量化并支持 LoRA 训练，并重新设计了模型选择器。与此同时，社区活跃度显示当前重点在 UI 打磨和 MCP/OAuth 正确性修复上，多个 PR 涉及 Wayland、AMD ROCm 和 Ollama 模型发现等功能。

## 2. 版本更新与破坏性变更

| 版本 | 变更概要 | 影响 |
|---------|---------------|--------|
| **v0.1.919-beta** | Computer use（beta）、MiniMax-H3-Image（GGUF/FP8/INT8 + LoRA）、新模型选择器、MCP 工具集成（Unity/Unreal/Blender/Roblox） | 新功能开关；无需数据迁移 |
| v0.1.918-beta（上一版） | 模型加载回退：用户反映被强制使用默认模型而非上次选择的模型 | **受影响范围**：MacOS/Linux 桌面用户 — 见 [#18002](https://github.com/unslothai/unsloth/issues/18002)（已关闭，修复进行中） |

**配置变更：**
- 自定义目录下的 GGUF 构建现在在模型选择器中与标准量化显示效果一致 — [#18242](https://github.com/unslothai/unsloth/pull/18242)（已合并）
- 模型别名现在可以携带逐别名级别的加载设置（上下文长度、KV 缓存类型、推测解码）— [#18217](https://github.com/unslothai/unsloth/pull/18217)（开放中）

## 3. 新模型与硬件支持

| 模型 / 后端 | 量化方式 | 状态 | 说明 |
|-----------------|-------------|--------|-------|
| **MiniMax-H3-Image** | GGUF、FP8、INT8 | **新增** | 现已支持 LoRA 训练 |
| **Gemma 4 26B（MLX）** | — | 存在 bug | Vision 模式下输出 `<unused6226>` 令牌 — [#15473](https://github.com/unslothai/unsloth/issues/15473)（已关闭，修复待发布） |
| **Qwen3.8 27B GGUF** | GGUF | 已支持 | 混合模型含推理能力；使用大型 MCP 工具目录时报告重复完整提示词处理问题 — [#17015](https://github.com/unslothai/unsloth/issues/17015)（开放中） |
| **FLUX.3 Klein** | — | 性能优化中 | 每步耗时降低已合并：L4 上 **减少 3.3%，A100 上减少 1.9%**；修复了进程间确定性 — [#18245](https://github.com/unslothai/unsloth/pull/18245)（开放中） |
| **Zonos3-Mini** | — | 请求中 | 语音克隆支持功能请求 — [#18234](https://github.com/unslothai/unsloth/issues/18234)（开放中） |
| **AMD ROCm（Ryzen AI Max+ 395 / Radeon 8060S，gfx1151）** | — | 部分支持 | GPU 监控显示 0% 利用率；VAE 解码出现 NaN，可通过 `UNSLOTH_VAE_ATTN_HALF_MATH=0` 规避 — [#18005](https://github.com/unslothai/unsloth/issues/18005)、[#18016](https://github.com/unslothai/unsloth/issues/18016)（开放中） |
| **Apple Metal** | — | 已支持 | Gemma 4 26B MLX Vision bug — [#15473](https://github.com/unslothai/unsloth/issues/15473) |
| **NVIDIA Wayland** | — | 已修复 | 自动 GPU 渲染误报 CPU 绘制；修复见 [#18186](https://github.com/unslothai/unsloth/pull/18186)（已合并） |
| **使用 OCI manifest-reference 层的 Ollama 模型** | — | 存在 bug | 当 legacy manifest 包含 OCI 层时，新版 Ollama 模型被静默忽略 — [#18058](https://github.com/unslothai/unsloth/issues/18058)（开放中） |

## 4. 性能与优化

| 领域 | 变更 | 指标 / 详情 |
|------|--------|-----------------|
| **FLUX.3 Klein 推理** | 每步延迟降低 | L4：0.9851 → 0.9526 秒/步（−3.3%，波动 0.11%）；A100：−1.9% — [#18245](https://github.com/unslothai/unsloth/pull/18245) |
| **FLUX.3 渲染确定性** | 跨进程位级一致输出 | 修复主分支回归问题 — [#18245](https://github.com/unslothai/unsloth/pull/18245) |
| **模型选择器（横版窄屏）** | 最小高度提升 | 380px → 400px — [#18240](https://github.com/unslothai/unsloth/pull/18240)（已合并） |
| **MCP OAuth 令牌刷新** | 修复端点查找逻辑 | 刷新现正确请求服务器真实令牌端点而非 `/token` — [#18203](https://github.com/unslothai/unsloth/pull/18203)（开放中） |
| **DDP 可训练嵌入** | 跳过 worker 中的解释器清理 | 修复可重入检查点保存时的测试挂起 — [#18238](https://github.com/unslothai/unsloth/pull/18238)（已合并） |
| **凭证脱敏** | JSON 日志消息清洗 | 嵌套 JSON 字符串现已被屏蔽；关闭 [#18174](https://github.com/unslothai/unsloth/pull/18174)（已合并） |
| **fast_qk_norm_rope 后备路径** | 位置 ID 广播修复 | 修复 `[1, seq_len]` 形状下的越界读 — [#18232](https://github.com/unslothai/unsloth/issues/18232)（开放中 bug） |

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **高** | Gemma 4 26B MLX Vision 模式输出 `<unused6226>` 令牌 | 已关闭（修复待发布） | — |
| **高** | Qwen 混合模型在工具调用后跨轮次重新发送完整提示词（65K 上下文 + MCP 目录） | 开放中 | — |
| **中** | v0.1.918-beta 模型加载：强制使用默认模型而非上次选择；UI 响应迟钝 | 已关闭 | 已在 v0.1.919-beta 中修复 |
| **中** | 启动时固定聊天同步失败 toast；界面卡顿（Linux） | 已关闭 | 已在 v0.1.919-beta 中修复 |
| **中** | 约 8 次 computer use 调用后 KV 缓存失效（`MAX_TOTAL_MODEL_IMAGES = 8` 硬上限） | 开放中 | — |
| **中** | 含 OCI manifest-reference 层的 Ollama 模型被静默排除在模型列表外 | 开放中 | — |
| **中** | AMD ROCm GPU 监控显示 0% 利用率；ROCm Linux 上 VAE NaN（变通方案：`UNSLOTH_VAE_ATTN_HALF_MATH=0`） | 开放中 | 变通方案已记录；修复进行中 |
| **低** | `fast_qk_norm_rope` 后备路径越界读 | 开放中 bug | — |
| **低** | NVIDIA 驱动 620.70.06 → Web UI 显示"可用显存不可用"（Debian，RTX 3060） | 开放中 | — |
| **低** | 窄边栏下运行设置上下文滑块缩小为滑块头（16px） | 开放中 | [#18235](https://github.com/unslothai/unsloth/pull/18235)（开放中） |

## 6. 这对应用开发者意味着什么

**Computer Use 与 Agent：** v0.1.919 中的 computer use beta 为能与主机桌面交互的 agent 打开了大门（点击、输入、读取屏幕）。面向 Windows/Linux 开发时需注意，目前需要 **X11**，不支持 Wayland — Wayland 用户会看到开关灰显且有硬性阻止（[#18221](https://github.com/unslothai/unsloth/issues/18221)）。KV 缓存上限 8 张图片是一个硬限制，在长时间运行的 agent 会话中会暴露出来（[#18231](https://github.com/unslothai/unsloth/issues/18231)）。

**MCP 与 OAuth：** 两个修复已合并/审核中，修复了 MCP OAuth 重新授权循环：一个是纠正令牌刷新端点（[#18203](https://github.com/unslothai/unsloth/pull/18203)），另一个处理了与 Notion 等服务器的并发刷新竞态（[#18171](https://github.com/unslothai/unsloth/pull/18171)）。使用带 OAuth 的 MCP 服务器的应用应在这些 PR 合并后及时升级。

**模型服务灵活性：** 通过 [#17885](https://github.com/unslothai/unsloth/pull/17885) 实现了在同一模型别名下注册多个 GGUF 启动配置（上下文长度、KV 缓存类型、推测解码）的能力，使 API 级路由无需复制模型文件 — 这对暴露逐请求配置旋钮的网关尤为相关。

**AMD 图像生成：** ROCm 用户应设置 `UNSLOTH_VAE_ATTN_HALF_MATH=0` 作为变通方案来解决图像生成中的 VAE NaN 伪影。正式修复正在开发中。

**角色与 Persona 聊天：** 即将来临的角色卡导入功能（[#16729](https://github.com/unslothai/unsloth/pull/16729)，开放中）将支持 V1/V2/V3 PNG+JSON 和 CHARX 格式，为群聊场景中的开发者定义 agent persona 提供可能。

**聊天中的定时任务：** PR [#18244](https://github.com/unslothai/unsloth/pull/18244) 新增了"安排任务"动作，直接回复到发起聊天的会话中 — 这对于以最小编排开销构建提醒/后台作业 agent 非常有用。

---

*本简报汇总自过去 24 小时内的 36 个 issue 和 223 个 PR。链接均指向 `github.com/unslothai/unsloth`.*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*