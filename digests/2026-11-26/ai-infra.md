# AI 基础设施日报 2026-11-26

> 生成时间: 2026-11-26 04:19 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate it naturally while preserving all the technical details, markdown structure, tables, URLs, code references, etc.

Let me translate this carefully, maintaining the technical register appropriate for Chinese developers.
</think>


# AI 基础设施生态摘要 — 2026-11-26

## 1. 生态总览

AI 推理基础设施生态正处于高速收敛阶段：六大项目今日均推送了重要变更，集体重心在 **硬件多元化**（vLLM/SGLang/llama.cpp/Ollama 上的 AMD ROCm，SGLang/Unsloth 上的 Intel XPU/MLU，Ollama/Unsloth 上的 Apple MLX，SGLang/llama.cpp 上的 Blackwell sm_120）和 **量化成熟度**（全栈 MXFP4/MXFP8，各项目均已落地 FP8 融合内核）之间分配。Rust 前端竞赛（vLLM #68784，LiteLLM #54625/54622）表明推理层正在向 Rust 内核 + Python/shell 接口的模式收敛——这是一次对内存效率和冷启动延迟有长期影响的技术架构转型。与此同时，微调和推理之间的边界正在模糊：Unsloth 的多 GPU 并行 PR 和 llama.cpp 的训练模式支持，意味着开发者越来越需要将整个技术栈视为一个统一系统，而非离散的工具链。

---

## 2. 活动度对比

| 项目 | Issues（开放） | PRs（开放） | 发布（24h） | 发布说明 |
|---------|:---:|:---:|:---:|---|
| **vLLM** | 135 | ~500 | 0 | — |
| **SGLang** | 高 | 高 | 0 | — |
| **llama.cpp** | ~47 | ~383 | **6** | v1.1.0、Hy4 flash、scratch 内存预留、async copies、Metal graph、SYCL F8、Windows SIGINT |
| **Ollama** | 高 | 高 | 0 | 仅 llama-server 版本号更新 |
| **LiteLLM** | ~40 | ~25+ | 0 | — |
| **Unsloth** | 47 | 383 | **1 β** | v0.1.925-beta：Inkling 2 Mini 微调、multi-GPU、注释预算强制 |

**解读：** llama.cpp 今日发布量居首（6 个 commits 入库，含 v1.1.0 版本号更新），而 vLLM 和 SGLang 仍处于大体量 bugfix/feature PR 漩涡中。LiteLLM 和 Ollama 活动量稳定但较低，与成熟 proxy/runtime 层的特征一致。Unsloth 仅发布一个 beta 版本，说明正围绕 Inkling 2 Mini 进行聚焦式交付冲刺。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------|:----:|:------:|:---------:|:------:|:-------:|:-------:|
| **Qwen3.8（Flash-Next, 2.4T）** | ✅ ROCm/MI355X (gfx950) | — | — | ✅ | — | — |
| **Qwen3.5** | ✅ ROCm/MI325X (gfx942) | — | — | ✅ | — | — |
| **Tencent Hy4（flash, iHC）** | — | ✅ SM89 sparse MLA | ✅ (b12755) | — | — | — |
| **Inkling 2 / Inkling 2 Mini** | ✅ Intel XPU (RFC) | — | ✅ DFlash2 drafter | ✅ CUDA/ROCm | — | ✅ LoRA/QLoRA (v0.1.925-β) |
| **Kimi K3（2.8T MXFP4, SiTU MoE）** | ✅ ROCm/gfx950 | — | — | — | — | — |
| **GLM 5.3** | ✅ CUDA | — | — | — | — | — |
| **Muse Spark 816B** | ✅ ROCm/MI325X | — | — | — | — | — |
| **ColUltraVBERT（encoder CUDA graph）** | ✅ | — | — | — | — | — |
| **HunyuanVideo** | — | ✅ CFG batching 优化 | — | — | — | — |
| **FLUX.2 Klein（FP8）** | — | — | — | — | — | ✅ Windows x64/Arm |
| **GigaChat 3.5** | — | — | ✅ | — | — | — |
| **Hindsight Decision Model** | — | — | — | ✅ | — | — |
| **phi4** | — | — | — | ✅（Metal bug） | — | — |
| **Physical AI / dVLA** | — | ✅ RFC | — | — | — | — |
| **Fireworks Kimi K3.1 Pro Ultra-fast** | — | — | — | — | ✅ | — |
| **Volcengine Ark Seedream** | — | — | — | — | ✅ | — |
| **Cambricon MLU（GQA/MLA）** | — | ✅ | — | — | — | — |
| **Intel Arc Pro B60（SYCL）** | — | — | ✅（已修复） | — | — | ❌（中断） |

**覆盖广度之冠：** vLLM 今日覆盖了最广泛的生产级模型组合，尤其在 AMD ROCm 和 Intel XPU 上优势明显。
**前沿探索之冠：** SGLang（Physical AI RFC）和 Unsloth（Inkling 2 Mini 微调）进入了其他项目尚未触及的领域。
**发布速度之冠：** llama.cpp 每日持续发布；今日 6 个 commits 的节奏遥遥领先所有项目。

---

## 4. 性能前沿

整个生态的优化工作在六个方向上集中发力，每个方向均横跨多个项目：

### KV Cache 与内存管理

| 项目 | 工作内容 | 状态 |
|---------|------|--------|
| **vLLM** | Octave KV（3-bit KV cache）for AMD | RFC + PR [#59773](https://github.com/vllm-project/vllm/issues/59773) |
| **vLLM** | 请求级 KV offload 提升策略 | RFC [#48193](https://github.com/vllm-project/vllm/issues/48193) |
| **llama.cpp** | `ggml_backend_graph_optimize()` 中的 scratch 内存预留 | 已合入（b12728） |
| **SGLang** | 与 vLLM 对齐的 KV cache 事件对齐机制 | RFC [#39991](https://github.com/sgl-project/sglang/issues/39991) |
| **Ollama** | Qwen3.8-flash-next MLX 前缀缓存内存泄漏 | 待处理 [#19891](https://github.com/ollama/ollama/issues/19891) |
| **Ollama** | MLX kernel 报告的内存统计修复 | 已合入 [#19907](https://github.com/ollama/ollama/pull/19907) |

### 量化与 GEMM 内核

| 项目 | 工作内容 | 状态 |
|---------|------|--------|
| **vLLM** | ROCm gfx950 上 MXFP4/MXFP8 MoE | PR [#66564](https://github.com/vllm-project/vllm/pull/66564) |
| **vLLM** | torch.compile 下 AWQ 修复 | PR [#67494](https://github.com/vllm-project/vllm/pull/67494) |
| **SGLang** | 融合 SiLU-mul + per-token FP8 量化 | PRs [#52029](https://github.com/sgl-project/sglang/pull/52029), [#51842](https://github.com/sgl-project/sglang/pull/51842) |
| **SGLang** | SM120 FP8 GEMM 小 M 场景路由至 PyTorch | PR [#51610](https://github.com/sgl-project/sglang/pull/51610) |
| **llama.cpp** | SYCL F8 e4m3 支持（CPY、ADD、MUL_MAT 等） | 已合入（b12726） |
| **llama.cpp** | RDNA3.5（HIP）WMMA few-row MMQ | PR [#32224](https://github.com/ggml-org/llama.cpp/pull/32224) |
| **Unsloth** | LoRA 导出 norm 诊断（FP8/FP4 存活） | PR [#19676](https://github.com/unslothai/unsloth/pull/19676) |

### Batch 不变 / 确定性数值

| 项目 | 工作内容 | 状态 |
|---------|------|--------|
| **vLLM** | Batch 不变特性（107 条评论的 RFC） | 进行中 [#27433](https://github.com/vllm-project/vllm/issues/27433) |
| **vLLM** | Qwen3.6 GDN 贪婪 DFlash2 发散（batch 依赖） | 待处理 [#62851](https://github.com/vllm-project/vllm/issues/62851) |
| **llama.cpp** | SYCL MoE 上 logprobs 非确定性 | 待处理 [#31206](https://github.com/ggml-org/llama.cpp/issues/31206) |

### 分布式 / 拆分解聚

| 项目 | 工作内容 | 状态 |
|---------|------|--------|
| **SGLang** | PD 拆分解：多节点 `bootstrap_room` 重用污染 | 待处理 [#51980](https://github.com/sgl-project/sglang/issues/51980) |
| **SGLang** | `routed_experts_start_len` clamp 修复 | 已合入 [#51942](https://github.com/sgl-project/sglang/pull/51942) |
| **vLLM** | PD 拆分解 Q4 2026 路线图 | 进行中 [#43699](https://github.com/sgl-project/sglang/issues/43699) |
| **Unsloth** | 不同 GPU 布局下 TP/PP/EP checkpoint 恢复 | 已合入 [#19685](https://github.com/unslothai/unsloth/pull/19685) |

### 多 GPU / 硬件级并行

| 项目 | 工作内容 | 状态 |
|---------|------|--------|
| **Unsloth** | Block compile + packed LoRA（减少 11–14% GPU 空闲） | PR [#19623](https://github.com/unslothai/unsloth/pull/19623) |
| **Unsloth** | Wan 2.2 TI2V 5B 多 GPU text encoder 放置策略 | 已合入 [#19671](https://github.com/unslothai/unsloth/pull/19671) |
| **Unsloth** | FLUX.2 Klein 2× GPU token-count 拆分 | 已合入 [#19691](https://github.com/unslothai/unsloth/pull/19691) |
| **SGLang** | AMD ROCm 上 DP pad-row 消除 | PR [#51266](https://github.com/sgl-project/sglang/pull/51266) |
| **SGLang** | 分词器管理器中 anchor-count 二分查找 | PR [#46697](https://github.com/sgl-project/sglang/pull/46697) |

### Rust / 语言重构

| 项目 | 工作内容 | 状态 |
|---------|------|--------|
| **vLLM** | Rust 前端趋近默认启用 | 进行中 [#68784](https://github.com/vllm-project/vllm/issues/68784) |
| **LiteLLM** | Rust gateway：限流器前的预算检查 | PRs [#54625](https://github.com/BerriAI/litellm/pull/54625), [#54622](https://github.com/BerriAI/litellm/pull/54622) |

---

## 5. 分层定位

六大项目在推理技术栈中占据不同且部分重叠的位置：

```
┌─────────────────────────────────────────────────────┐
│           GATEWAY / 路由 / 微调                      │
│  ┌─────────────┐                    ┌────────────┐  │
│  │   LiteLLM   │  （代理、路由、     │  Unsloth   │  │
│  │  (gateway)  │   多后端统一接口）  │ (微调)    │  │
│  └──────┬──────┘                    └─────┬──────┘  │
│         │                                  │         │
│  ┌──────▼──────────────────────────────────▼──────┐  │
│  │              本地 / 嵌入式运行时                 │
│  │  ┌─────────────┐         ┌─────────────────┐  │  │
│  │  │   Ollama    │         │    llama.cpp    │  │  │
│  │  │（开箱即用    │         │  (C/C++/GPU     │  │  │
│  │  │  开发/生产） │         │   后端库）      │  │  │
│  │  └──────┬──────┘         └────────┬────────┘  │  │
│  └─────────┼──────────────────────────┼──────────┘  │
│            │                          │             │
│  ┌─────────▼──────────────────────────▼──────────┐  │
│  │              推理引擎                          │
│  │  ┌─────────────────┐   ┌────────────────────┐ │  │
│  │  │     vLLM        │   │      SGLang        │ │  │
│  │  │（生产级          │   │（多模态、          │ │  │
│  │  │  PyTorch 推理）  │   │  图优化/Rust）     │ │  │
│  │  └─────────────────┘   └────────────────────┘ │  │
│  └───────────────────────────────────────────────┘  │
│                 硬件抽象层                           │
│     CUDA / ROCm / Metal / XPU / MLU / Vulkan         │
└─────────────────────────────────────────────────────┘
```

| 层级 | 项目 | 职责 |
|-------|----------|------|
| **微调** | **Unsloth** | LoRA/QLoRA 训练、多 GPU 并行、GGUF/合并模型导出。训练好的模型可交给下层任意项目部署推理。 |
| **网关 / 代理** | **LiteLLM** | 统一 API 网关，对接 100+ 推理提供商。处理鉴权、限流、成本追踪、多模型路由。 |
| **本地运行时** | **Ollama**、**llama.cpp** | Ollama = 开箱即用的本地推理平台；llama.cpp = 便携式 C/C++ 推理库，硬件覆盖最广（CPU → GPU → NPU → DSP）。 |
| **推理引擎** | **vLLM**、**SGLang** | 高吞吐、低延迟生产级推理服务。两者面向相同硬件和模型；SGLang 在多模态图调度层有差异化，vLLM 在批调度研究上更领先。 |

**重叠区域：** Ollama 以 llama.cpp 为核心引擎。vLLM 和 SGLang 服务的生产场景高度重叠。Unsloth 导出的 GGUF 文件可被 llama.cpp 和 Ollama 下游消费。

---

## 6. 趋势信号

### 1. Rust 正在吞噬推理服务层
vLLM 和 LiteLLM 正在独立地将核心热路径迁移到 Rust（vLLM 前端，LiteLLM gateway）。这将收敛到一个共同架构：Python 是控制面，Rust 是数据面——一次对内存效率、冷启动延迟和多租户隔离有长期影响的技术架构转型。**Agent 和应用开发者现在就应该测试 Rust 前端化的推理服务栈**，趁切换尚未成为默认行为之前。

### 2. AMD ROCm 不再是二等公民
vLLM 在 MI355X（gfx950）和 MI325X（gfx942）上的堆叠 PR、SGLang 的 AMD ROCm DP pad-row 优化、llama.cpp 的 RDNA3.5 WMMA 工作和 Ollama 的 Inkling 2 ROCm 后端均于今日合入。AMD 正在各内核层级——GEMM、Attention、MoE、KV cache——获得全面优化。**持有 AMD 硬件的部署方应重新评估 2024 年 ROCm 的能力差距是否依然存在。**

### 3. Batch 不变确定性正在成为一等特性
vLLM 中 107 条评论的 RFC（#27433）表明，batch 依赖的数值发散问题——长期被视为已知缺陷——正在被正式处理。这对于需要同一输入在任意并发负载下产生相同输出的 Agent 流水线意义重大。**构建确定性流水线的 Agent 开发者应跟踪此线程。**

### 4. Physical AI 和机器人学正在进入服务技术栈
SGLang 新路线图统一 Diffusion、miles_diffusion 和 miles 的 Physical AI / 机器人服务（Issue #53203），以及 Unsloth 的 Wan 2.2 TI2V 多 GPU 工作，都表明生态正在从语言模型向 dVLA、世界模型和具身 AI 延伸。**机器人与仿真团队现在应开始评估这些工具链** —— 具身 AI 的服务基础设施正在当下构建。

### 5. FP8 量化正在渗透每个层级
SGLang 融合 SiLU-mul + FP8 量化、vLLM MXFP4/MXFP8 MoE、llama.cpp SYCL F8 e4m3、LiteLLM Fireworks Kimi K3.1 Pro Ultra-fast，以及 Unsloth LoRA norm 诊断（FP8 存活检测）均汇聚同一个信号：FP8 正在成为新的 BF16。**仍在使用 FP16 的团队应规划量化迁移路线；各主要项目的工具链现已成熟。**

### 6. 多模态正在分叉为专业化服务路径
SGLang 的 HunyuanVideo CFG batching、vLLM 的轻量级渲染 API RFC、Ollama 的图像占位符解析修复，以及 SGLang 的 Diffusion CFG batching，都指向图/视频生成的处理方式与语言模型推理有本质区别。KV cache 语义、批处理策略和延迟剖面都存在显著分歧。**构建多模态流水线的应用开发者不应假设语言模型的推理模式可以直接套用。**

### 7. 前缀缓存正确性在跨实现间仍很脆弱
今日集中出现的前缀缓存 bug——vLLM 前缀缓存命中后 NaN logit（#55766）、Ollama `[img-` 误检（#19911）、Ollama Qwen3.8 前缀缓存内存泄漏（#19891）和 SGLang anchor-count 线性扫描（#46697）——说明前缀缓存在不同实现间的不一致性问题非常突出，并与模型架构（GDN、DeltaNet、滑动窗口注意力）产生非显而易见的交互。**使用前缀缓存的生产部署应在任何引擎升级后验证输出正确性。**

---

*数据综合来源：vLLM、SGLang、llama.cpp、Ollama、LiteLLM 及 Unsloth GitHub 2026-11-26 活动。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the technical digest from English to Simplified Chinese. I need to:
1. Translate all the text while preserving the Markdown structure
2. Keep technical terms, URLs, issue numbers, etc. as-is
3. Use natural technical Chinese in the register of a Chinese developer newsletter
4. Output ONLY the translation, no preamble or explanation

Let me translate section by section:

## 1. Today's Highlights

The vLLM community is tackling two major infrastructure themes today: **batch-invariant determinism** (issue #27433 gathering 107 comments, aiming to eliminate numerical divergence across batch configurations) and **ROCm/AMD GPU performance maturity** (multiple stacked PRs targeting gfx950/MI355X and gfx942/MI325X for Qwen3.8 and Muse Spark models). Meanwhile, the Rust frontend is approaching default-enablement status (#68784), signaling a significant serving-layer shift.

变成：

## 1. 今日要点

今天 vLLM 社区重点解决两大基础设施层面的问题：**batch-invariant 确定性**（issue #27433 收到 107 条评论，旨在消除不同 batch 配置下的数值分歧）和 **ROCm/AMD GPU 性能成熟度**（多个堆叠的 PR 针对 Qwen3.8 和 Muse Spark 模型优化 gfx950/MI355X 和 gfx942/MI325X）。同时，Rust 前端正在接近默认启用的状态（#68784），这标志着 serving 层的重大转变。

Let me continue with the rest...

## 2. Releases & Breaking Changes

变成：

## 2. 版本发布与破坏性变更

I need to be careful with technical terms. Some should stay in English (like "batch", "PR", "CUDA", "FP8", etc.) because they're commonly used in Chinese technical contexts. I should also watch for the tables - they need to be formatted properly with the correct Chinese punctuation and natural phrasing.

Let me translate the rest of the document now, making sure to handle the tables, blockquotes, and other elements correctly.
</think>


# vLLM 项目日报 — 2026-11-26

## 1. 今日要点

今天 vLLM 社区重点解决两大基础设施层面的问题：**batch-invariant 确定性**（issue #27433 收到 107 条评论，旨在消除不同 batch 配置下的数值分歧）和 **ROCm/AMD GPU 性能成熟度**（多个堆叠的 PR 针对 Qwen3.8 和 Muse Spark 模型优化 gfx950/MI355X 和 gfx942/MI325X）。同时，Rust 前端正在接近默认启用的状态（#68784），这标志着 serving 层的重大转变。

---

## 2. 版本发布与破坏性变更

| 项目 | 详情 | 链接 |
|------|---------|-------|
| **无新版本** | 过去 24 小时内无标签发布。 | — |
| **Rust 前端默认启用计划** | 正在推进将 Rust 前端设为 `vllm serve` 默认选项的工作，待清单项完成后在后续版本中落地。 | [#68784](https://github.com/vllm-project/vllm/issues/68784) |

---

## 3. 新模型与硬件支持

| 模型 / 架构 | 支持类型 | 说明 | 链接 |
|----------------------|--------------|-------|-------|
| **Qwen3.8-2.4T-A95B (Quark-MXFP4)** | ROCm/gfx950 (MI355X) 优化 | AMD 跟踪的性能提升计划；`main` 分支上的堆叠 PR。 | [#57149](https://github.com/vllm-project/vllm/issues/57149) |
| **Qwen3.8-Flash-Next (Quark-MXFP4)** | ROCm/gfx950 (MI355X) 优化 | GatedDeltaNet (36L)、QuerySparse Attention (12L)、HyperConnection、MXFP4 MoE。 | [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **GLM-5.3** | CUDA 优化 | 与 GLM-5.2 共用 `glm_moe_dsa` 基座；进一步推进量化和 CUDA kernel 工作。 | [#57406](https://github.com/vllm-project/vllm/issues/57406) |
| **Muse Spark Open 816B (PTPC-FP8)** | ROCm/gfx942 (MI325X) 优化 | 规划在 GEMM、attention 和 MoE 层面进行优化。 | [#64018](https://github.com/vllm-project/vllm/issues/64018) |
| **Kimi-K3 (2.8T MXFP4, SiTU MoE)** | ROCm/gfx950 (MI350X) 缺陷修复 | 缺少 AITER 标志时产生静默垃圾输出；需要修复。 | [#52442](https://github.com/vllm-project/vllm/issues/52442) |
| **Inkling 2 (Mini + Base)** | Intel XPU (Arc Pro B60/B70, Battlemage) | RFC 提议将共享的 `inkling2/common/` 实现贡献到上游。 | [#69712](https://github.com/vllm-project/vllm/issues/69712) |
| **ColUltraVBERT** | 多模态 CUDA graphs | 新增 encoder CUDA graph replay 支持。 | [#69925](https://github.com/vllm-project/vllm/pull/69925) |
| **Qwen 3.x (GDN)** | Varlen 支持 | 功能请求：为 GDN 架构启用可变长度批处理。 | [#51869](https://github.com/vllm-project/vllm/issues/51869) |

---

## 4. 性能与优化

| 领域 | 工作内容 | 状态 | 链接 |
|------|------|--------|-------|
| **Batch-invariant 数值一致性** | 功能请求：使模型输出不因 batch 组成而异，消除 batch 相关的抢占/重算导致的数值分歧。 | 活跃中（107 条评论） | [#27433](https://github.com/vllm-project/vllm/issues/27433) |
| **ROCm MXFP4 + 动态 MXFP8 MoE** | 在 gfx950 上通过 AITER `moe_gemm_a8w4` 实现新的 `w_mxfp4_a_mxfp8` 方案（GEMM1 → SwiGLU-OAI → MXFP8；GEMM2 消费配对结果）。 | PR 已提交 | [#66564](https://github.com/vllm-project/vllm/pull/66564) |
| **torch.compile 下 AWQ** | 修复 decode 路径错误地走 dequantize+matmul 路线（绕过了 `awq_gemm`）。 | PR 已提交 | [#67494](https://github.com/vllm-project/vllm/pull/67494) |
| **Octave KV（3-bit KV 缓存）** | 针对 AMD RX 7900 XTX (TP4) 的原生 3-bit KV 缓存压缩。 | RFC + PR | [#59773](https://github.com/vllm-project/vllm/issues/59773) |
| **GDN ReplaySSM 投机解码** | 将 TensorRT-LLM 的 GDN cached replay 移植到 vLLM，用于 Qwen3.5/3.6 投机解码。 | PR 已提交 | [#69180](https://github.com/vllm-project/vllm/pull/69180) |
| **DeepSeek V4.1 Engram prefetch** | 可选的 CPU-offload 行预取（`--engram-config.host_prefetch_threads 8`）用于 eager prefill。 | PR 已提交 | [#64500](https://github.com/vllm-project/vllm/pull/64500) |
| **Weight-loading 启动优化** | 路线图：通过预置权重共享实现亚秒级副本激活。 | RFC 活跃中 | [#48193](https://github.com/vllm-project/vllm/issues/48193) |
| **PR 流水线耗时** | CI P50 耗时从 73.2 分钟降至 53.9 分钟；目标约 30 分钟。 | 进行中 | [#66411](https://github.com/vllm-project/vllm/issues/66411) |
| **Rust 前端性能** | 随着默认启用临近，持续改进内存和延迟表现。 | 跟踪中 | [#68784](https://github.com/vllm-project/vllm/issues/68784) |
| **libtorch Stable ABI (ROCm)** | 与 CUDA 功能对等：为 ROCm 启用 libtorch-ABI-stable wheels。 | RFC | [#67551](https://github.com/vllm-project/vllm/issues/67551) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 描述 | 临时方案 / 修复 | 链接 |
|----------|-----|-------------|------------------|-------|
| **🔴 高** | Qwen3.6 GDN greedy DFlash2 数值分歧 | 数值与 batch 相关的参考结果出现分歧；抢占/重算导致结果损坏。 | 无记录 | [#62851](https://github.com/vllm-project/vllm/issues/62851) |
| **🔴 高** | Qwen3.5/3.8 prefix-cache 命中后出现 NaN logits | 当前置 prefill 在 block 边界后 4–10 个 token 处结束时触发；Mamba cache mode align 受影响。 | 无记录 | [#55766](https://github.com/vllm-project/vllm/issues/55766) |
| **🔴 高** | Kimi-K3 静默垃圾输出 | 在 ROCm/gfx950 上，AITER a8w4 fp8-activation MoE 在缺少 `VLLM_ROCM_USE_AITER_MOE_SITUV2_A8W4` 标志时产生垃圾。 | 设置该标志 | [#52442](https://github.com/vllm-project/vllm/issues/52442) |
| **🟡 中** | GLM-5.2-FP8 首次请求输出垃圾 | 冷启动 CUDA graph replay 在 MI325X 上导致 prefill 损坏；decode-only 模式正常。 | `--cudagraph_mode=FULL_DECODE_ONLY` | [#52150](https://github.com/vllm-project/vllm/issues/52150) |
| **🟡 中** | Qwen3.8-Flash-Next decode 饥饿 | 长 prefill 工作负载在 DGX Spark TP2 上周期性饿死活跃 decode 3–7 分钟。 | 无记录 | [#54919](https://github.com/vllm-project/vllm/issues/54919) |
| **🟢 低** | Ripple parser tool-call 丢失 | 当 tool-call/think 标签出现在普通散文中时，parser 会丢弃其后的全部文本。 | 无记录 | [#69243](https://github.com/vllm-project/vllm/issues/69243) |
| **🟢 已修复** | NUMA 绑定竞态 | 自动 NUMA 绑定在并发 worker 启动前已完成解析。 | PR #69978 | [#69978](https://github.com/vllm-project/vllm/pull/69978) |
| **🟢 已修复** | llguidance 导入与 glibc 兼容性 | 延迟导入并放宽版本限制，支持 glibc < 2.31（RHEL 8）。 | PR #67751 | [#67751](https://github.com/vllm-project/vllm/pull/67751) |

---

## 6. 对应用开发者的影响

| 结论 | 说明 |
|----------|--------|
| **Rust 前端即将默认启用** | 如果你运行 `vllm serve`，现在就在你的工作负载上测试 Rust 前端。迁移到默认启用还有数周时间；功能对等的差距正在快速收拢。 |
| **Prefix caching 边界情况** | 如果在 Qwen3.5/3.8 GDN 模型上使用 `--enable-prefix-caching`，请注意特定的 block 边界对齐会触发 NaN logits；在 #55766 修复前，考虑禁用 prefix caching 或密切监控输出。 |
| **AMD ROCm 已接近生产可用** | 堆叠的 ROCm 优化 PR（MXFP4/MXFP8 MoE、Octave KV）表明 AMD MI300/MI350 系列正在成为一等公民；早期使用者应关注 AMD 专项 issue 以获取已知临时方案（如 Kimi-K3 的 AITER 标志）。 |
| **Tool-calling 改进即将合入** | DSML 参数解析修复（#62259）和 Ripple parser 缺陷修复（#69243）即将合入；这些 PR 合并后更新，以获得更可靠的 structure 输出。 |
| **多模态预处理 offload** | 轻量级 Render API 的 RFC（#56172）提议将重计算的多模态预处理移出 CPU sidecar；对于视觉密集型 agent 工作负载，这可能显著改善延迟。 |
| **量化方法 MFU 指标** | 自定义量化方法很快将能上报准确的 weight-byte 大小用于 MFU 计算（#65143），改善了非官方量化方案的可见性。 |
| **Glibc 2.28 兼容性已恢复** | RHEL 8 / Rocky 8 用户现在可以正常使用 structure output 功能而无版本冲突（#67751）。 |

---

*日报基于 2026-11-26 vllm-project/vllm GitHub 活动生成。*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the entire technical report from English to Simplified Chinese, maintaining the exact Markdown structure while using natural technical Chinese register. I need to be careful to:

1. Only output the translation - no preamble or explanation
2. Preserve all Markdown formatting exactly
3. Keep URLs, links, version numbers, issue numbers, etc. as-is
4. Use natural technical Chinese - not literal word-for-word
5. Maintain the same tone and register as a Chinese developer newsletter

Let me translate section by section:

## 1. Today's Highlights

SGLang contributors are driving forward on two parallel tracks: hardening the 1.0 stability release while simultaneously shipping new hardware backends and performance kernels. Today's activity features a new PyTorch 2.14.1+cu130 compatibility regression that blocks JIT-compiled kernels on sm_89, an ongoing PD disaggregation correctness bug, and fresh MLU (Cambricon) GQA/MLA attention support landing in PR #49214.

SGLang 贡献者目前正双线并进：一方面强化 1.0 稳定版的核心质量，另一方面同步交付新的硬件后端和性能内核。今日动态聚焦于一个新出现的 PyTorch 2.14.1+cu130 兼容性回归问题——它导致 sm_89 上的 JIT 编译内核无法启动；此外 PD  disaggregation 的正确性缺陷仍在修复中，同时 PR #49214 引入了 MLU（寒武纪）GQA/MLA 注意力支持。

## 2. Releases & Breaking Changes

| Item | Details |
|------|---------|
| **No new releases** | The 0.5.x series continues; no tags published in the last 24 hours. |
| **SGLang 1.0 tracker active** | Issue #50045 tracks hardening work for the upcoming stability release. The focus is replacing silent configuration changes with explicit errors and defining a 1.x compatibility policy. Upgrading from 0.5.x may require changes. |


| 项目 | 详情 |
|------|---------|
| **暂无新版本** | 0.5.x 系列持续迭代，过去 24 小时内无新标签发布。 |
| **SGLang 1.0 追踪已启动** | Issue #50045 记录了即将发布的稳定版硬化工作。重点是将静默的配置变更改为显式报错，并制定 1.x 兼容性策略。从 0.5.x 升级可能涉及变更。 |

## 3. New Model & Hardware Support

| Feature | Description | Link |
|---------|-------------|------|
| **MLU GQA/MLA Attention** | Added first-class support for Cambricon MLU accelerators via a new MHA attention backend supporting causal prefill, cached-prefix prefill, decode, mixed batches, and sliding-window attention. | [PR #49214](https://github.com/sgl-project/sglang/pull/49214) |
| **Hy4-flash Sparse MLA on Ada (SM89)** | Opt-in attention compatibility for L40 (SM89) where the sparse prefill op previously rejected the hardware and the Triton fallback was blocked by configuration guards. | [PR #53242](https://github.com/sgl-project/sglang/pull/53242) |
| **Physical AI / Robotics Serving** | New roadmap issue for unifying SGLang Diffusion, `miles_diffusion`, and `miles` into a shared stack for dVLA, WAM, and interactive world models. | [Issue #53203](https://github.com/sgl-project/sglang/issues/53203) |

| 特性 | 描述 | 链接 |
|---------|-------------|------|
| **MLU GQA/MLA Attention** | 通过全新的 MHA attention 后端，添加了对寒武纪 MLU 加速卡的一级支持，涵盖 causal prefill、cached-prefix prefill、decode、混合批处理及滑动窗口注意力。 | [PR #49214](https://github.com/sgl-project/sglang/pull/49214) |
| **Ada (SM89) 上的 Hy4-flash Sparse MLA** | 为 L40（SM89）提供可选的注意力兼容性支持。在此之前，sparse prefill 算子会拒绝该硬件，而 Triton 回退方案则被配置守卫阻挡。 | [PR #53242](https://github.com/sgl-project/sglang/pull/53242) |
| **Physical AI / 机器人服务** | 新增路线图议题，计划将 SGLang Diffusion、`miles_diffusion` 和 `miles` 统一为共享技术栈，以支持 dVLA、WAM 和交互式世界模型。 | [Issue #53203](https://github.com/sgl-project/sglang/issues/53203) |

## 4. Performance & Optimization

| Category | Change | Impact | Link |
|----------|--------|--------|------|
| **DSV4 paged decode** | Score only candidate blocks in paged consumer decode; enable grouped verify on SM120. Eliminates full-context scans in `publish_decode` / `consume_decode` on Hopper and Blackwell. | Latency/throughput on long-context decode | [PR #53245](https://github.com/sgl-project/sglang/pull/53245) |
| **Fused SiLU-and-mul + FP8 quant** | Fused kernel combining `silu_and_mul` with per-token FP8 quantization, eliminating an HBM write + 2× HBM read of the intermediate activation in every SwiGLU MLP layer. | ~1 kernel reduction per MoE/MLP layer | [PR #52029](https://github.com/sgl-project/sglang/pull/52029), [PR #51842](https://github.com/sgl-project/sglang/pull/51842) |
| **SM120 FP8 GEMM routing** | Routes small-M rowwise GEMMs to PyTorch's native FP8 path instead of CUTLASS's fixed 128×128×128 tile, which underfills Blackwell SM120 on narrow decode shapes. | Throughput on SM120 decode | [PR #51610](https://github.com/sgl-project/sglang/pull/51610) |
| **DP pad-row elimination on AMD** | `SGLANG_HIP_DP_FUSED_PAD_GATHER` keeps DP padding rows out of the aiter MoE gather/sort on ROCm, removing masked_fill overhead and expert-load imbalance. | Throughput on AMD MI300/MI350 | [PR #51266](https://github.com/sgl-project/sglang/pull/51266) |
| **Diffusion CFG batching** | Batches the two CFG branches into a single DiT forward pass when the model is layerwise-offloaded from host memory, eliminating redundant streaming copies. Profile shows copies dominate 24-GPU 10-step serial runs. | Memory bandwidth / throughput on large DiT | [PR #52121](https://github.com/sgl-project/sglang/pull/52121) |
| **Anchor-count binary search** | Replaces linear scan of anchor_positions per item boundary with binary search in `TokenizerManagerScoreMixin._anchor_counts_per_item`. | Tokenizer manager throughput on high-frequency score requests | [PR #46697](https://github.com/sgl-project/sglang/pull/46697) |

| 类别 | 变更 | 影响 | 链接 |
|----------|--------|--------|------|
| **DSV4 分页 decode** | 在分页 consumer decode 中仅对候选块进行评分；在 SM120 上启用 grouped verify。消除了 Hopper 和 Blackwell 上 `publish_decode`/`consume_decode` 中的全量上下文扫描。 | 长上下文 decode 延迟/吞吐 | [PR #53245](https://github.com/sgl-project/sglang/pull/53245) |
| **Fused SiLU-and-mul + FP8 量化** | 融合算子将 `silu_and_mul` 与 per-token FP8 量化合并，消除了每个 SwiGLU MLP 层中中间激活的一次 HBM 写和两次 HBM 读。 | 每个 MoE/MLP 层减少约 1 个 kernel | [PR #52029](https://github.com/sgl-project/sglang/pull/52029), [PR #51842](https://github.com/sgl-project/sglang/pull/51842) |
| **SM120 FP8 GEMM 路由** | 将小 M 的 rowwise GEMM 路由到 PyTorch 原生 FP8 路径，而非 CUTLASS 固定的 128×128×128 tile（该 tile 在窄 decode shape 下对 Blackwell SM120 利用不足）。 | SM120 decode 吞吐 | [PR #51610](https://github.com/sgl-project/sglang/pull/51610) |
| **AMD DP pad-row 消除** | `SGLANG_HIP_DP_FUSED_PAD_GATHER` 将 DP 填充行排除在 aiter MoE gather/sort 之外，消除了 masked_fill 开销和 expert 负载不均。 | AMD MI300/MI350 吞吐 | [PR #51266](https://github.com/sgl-project/sglang/pull/51266) |
| **Diffusion CFG 批处理** | 当模型按层从 host 内存 offload 时，将两条 CFG 分支合并为单次 DiT forward pass，消除冗余的流式拷贝。Profile 显示在 24-GPU 10 步串行推理中拷贝操作占主导。 | 大型 DiT 内存带宽/吞吐 | [PR #52121](https://github.com/sgl-project/sglang/pull/52121) |
| **锚点计数的二分查找** | 在 `TokenizerManagerScoreMixin._anchor_counts_per_item` 中用二分查找替代逐 item boundary 的线性扫描遍历 anchor_positions。 | 高频 score 请求场景下 tokenizer manager 吞吐 | [PR #46697](https://github.com/sgl-project/sglang/pull/46697) |

## 5. Stability & Regressions

| Severity | Issue | Impact | Status | Link |
|----------|-------|--------|--------|------|
| 🔴 **Regression** | JIT kernels fail with `CUDA error: invalid resource handle` on PyTorch 2.14.1+cu130 at launch (works on +cu126). Affects all JIT-compiled kernels at sm_89 on default sglang[all]==0.5.23. | Server fails to start | Open | [Issue #50887](https://github.com/sgl-project/sglang/issues/50887) |
| 🔴 **Correctness** | PD disaggregation: a decode request reusing a live `bootstrap_room` receives another request's output with HTTP 200. Follow-up to #40125. | Request contamination | Open | [Issue #51980](https://github.com/sgl-project/sglang/issues/51980) |
| 🟠 **Flakiness** | CI infrastructure failures and flaky tests reported across NVIDIA `PR Test Base` / `PR Test Extra` runs (271 comments on tracker). 2 broken + 26 flaky tests on main branch at last check. | Delayed reviews, CI waste | Active | [Issue #42752](https://github.com/sgl-project/sglang/issues/42752), [Issue #17050](https://github.com/sgl-project/sglang/issues/17050) |
| 🟠 **Regression** | NVFP4 KV cache regresses Qwen4Exp decode ~29% on DGX Spark (SM121) vs fp8_e4m3 KV cache. The new default `NVFP4_KV_CACHE=1` causes this. | Throughput drop on Blackwell | Closed (inactive) | [Issue #36797](https://github.com/sgl-project/sglang/issues/36797) |
| 🟡 **Bug fix (merged)** | `routed_experts_start_len` clamped to prompt length on PD decode; fixes downstream R3 + PD disaggregation failures. | Correctness in disaggregated serving | [PR #51942](https://github.com/sgl-project/sglang/pull/51942) |
| 🟡 **Bug fix (merged)** | MXFP4 CUTLASS MoE weight buffers padded to whole mxfp4 blocks; fixes server crash on `--tp 4/8` with `flashinfer_mxfp4` runner. | Stability on MoE MXFP4 | [PR #52877](https://github.com/sgl-project/sglang/pull/52877) |
| 🟡 **Bug fix (merged)** | `SGLANG_CPU_QUANTIZATION` wired into `DefaultModelLoader` for on-device quantization of oversized checkpoints. | Memory feasibility on constrained GPUs | [PR #51887](https://github.com/sgl-project/sglang/pull/51887) |
| 🟡 **Bug fix (open)** | sgl-kernel 0.3.21 FA3 import fails with nvidia-cutlass-dsl>=4.8 due to FA4 guard only catching `ImportError`. Fixed on main (file removed), but legacy release affected. | Compatibility with newer CUTLASS DSL | [Issue #53215](https://github.com/sgl-project/sglang/issues/53215) |

| 严重程度 | 问题 | 影响 | 状态 | 链接 |
|----------|-------|--------|--------|------|
| 🔴 **回归** | 在 PyTorch 2.14.1+cu130 上 JIT 内核启动时抛出 `CUDA error: invalid resource handle`（+cu126 正常）。影响默认 sglang[all]==0.5.23 下 sm_89 上所有 JIT 编译内核。 | 服务启动失败 | Open | [Issue #50887](https://github.com/sgl-project/sglang/issues/50887) |
| 🔴 **正确性** | PD disaggregation：复用中的 `bootstrap_room` 收到新 decode 请求后，返回了另一请求的输出但 HTTP 状态码为 200。是 #40125 的后续。 | 请求结果污染 | Open | [Issue #51980](https://github.com/sgl-project/sglang/issues/51980) |
| 🟠 **不稳定** | CI 基础设施故障及测试不稳定问题遍布 NVIDIA `PR Test Base` / `PR Test Extra` 运行（追踪帖已有 271 条评论）。主分支最近一次检查有 2 个 broken + 26 个 flaky。 | 评审延迟、CI 资源浪费 | Active | [Issue #42752](https://github.com/sgl-project/sglang/issues/42752), [Issue #17050](https://github.com/sgl-project/sglang/issues/17050) |
| 🟠 **回归** | NVFP4 KV cache 导致 DGX Spark (SM121) 上 Qwen4Exp decode 吞吐相比 fp8_e4m3 KV cache 下降约 29%。新默认值 `NVFP4_KV_CACHE=1` 引起。 | Blackwell 吞吐下降 | Closed (inactive) | [Issue #36797](https://github.com/sgl-project/sglang/issues/36797) |
| 🟡 **Bug 修复（已合并）** | PD decode 中 `routed_experts_start_len` 被钳制到 prompt 长度；修复了下游 R3 + PD disaggregation 故障。 | Disaggregated serving 正确性 | [PR #51942](https://github.com/sgl-project/sglang/pull/51942) |
| 🟡 **Bug 修复（已合并）** | MXFP4 CUTLASS MoE 权重缓冲区对齐到完整的 mxfp4 block 大小；修复了 `--tp 4/8` 配合 `flashinfer_mxfp4` runner 时的服务崩溃。 | MoE MXFP4 稳定性 | [PR #52877](https://github.com/sgl-project/sglang/pull/52877) |
| 🟡 **Bug 修复（已合并）** | `SGLANG_CPU_QUANTIZATION` 接入 `DefaultModelLoader`，支持对超大 checkpoint 做设备端量化。 | 显存受限 GPU 的可行性 | [PR #51887](https://github.com/sgl-project/sglang/pull/51887) |
| 🟡 **Bug 修复（待合入）** | sgl-kernel 0.3.21 FA3 导入在与 nvidia-cutlass-dsl>=4.8 共存时失败，原因是 FA4 guard 仅捕获 `ImportError`。main 分支已修复（文件已移除），但旧版 release 仍受影响。 | 与新版 CUTLASS DSL 兼容性 | [Issue #53215](https://github.com/sgl-project/sglang/issues/53215) |

## 6. What This Means for Application Developers

| Takeaway | Detail |
|----------|--------|
| **Avoid PyTorch 2.14.1 + cu130 for now** if you rely on JIT-compiled kernels (FlashAttention, MoE, custom Triton kernels). Pin to `+cu126` or wait for a fix to land in a patch release. | [Issue #50887](https://github.com/sgl-project/sglang/issues/50887) |
| **PD disaggregation correctness concern** for production deployments: the `bootstrap_room` reuse bug can silently return wrong outputs. If you run prefill-decode disaggregation, monitor for this and check the linked fix PR #51942. | [Issue #51980](https://github.com/sgl-project/sglang/issues/51980), [PR #51942](https://github.com/sgl-project/sglang/pull/51942) |
| **New MLU backend available** for Cambricon hardware — teams running on MLU can now use SGLang with GQA and MLA models natively. | [PR #49214](https://github.com/sgl-project/sglang/pull/49214) |
| **SGLang 1.0 migration coming**: the 1.0 stability release will introduce breaking configuration changes (silent fallbacks becoming explicit errors). Review the upgrade notes when the release candidate ships. | [Issue #50045](https://github.com/sgl-project/sglang/issues/50045) |
| **Performance gains incoming** for FP8 MoE and SM120 deployments — the fused SiLU+FP8 quant kernels and Blackwell GEMM routing changes should improve throughput noticeably once merged. | [PR #52029](https://github.com/sgl-project/sglang/pull/52029), [PR #51610](https://github.com/sgl-project/sglang/pull/51610) |
| **Diffusion serving on constrained memory**: CFG batching reduces host→GPU streaming overhead for large DiT models; relevant for Qwen-Image and HunyuanVideo deployments. | [PR #52121](https://github.com/sgl-project/sglang/pull/52121) |

## 6. 对应用开发者的影响

| 建议 | 详情 |
|----------|--------|
| **暂避 PyTorch 2.14.1 + cu130** — 若你依赖 JIT 编译内核（FlashAttention、MoE、自定义 Triton 内核等），请锁定到 `+cu126`，或等待 patch release 中的修复。 | [Issue #50887](https://github.com/sgl-project/sglang/issues/50887) |
| **PD disaggregation 正确性风险** — 生产环境若使用 prefill-decode disaggregation，`bootstrap_room` 复用 bug 会静默返回错误输出。请留意并关注关联修复 PR #51942 的进展。 | [Issue #51980](https://github.com/sgl-project/sglang/issues/51980), [PR #51942](https://github.com/sgl-project/sglang/pull/51942) |
| **MLU 新后端已就绪** — 寒武纪 MLU 用户现在可直接在 SGLang 中使用 GQA 和 MLA 模型。 | [PR #49214](https://github.com/sgl-project/sglang/pull/49214) |
| **SGLang 1.0 迁移将至**：1.0 稳定版将引入破坏性配置变更（静默回退改为显式报错）。RC 发布时请仔细阅读升级指南。 | [Issue #50045](https://github.com/sgl-project/sglang/issues/50045) |
| **性能提升即将到来** — FP8 MoE 和 SM120 部署将受益于融合 SiLU+FP8 量化内核及 Blackwell GEMM 路由优化，合入后吞吐将有显著改善。 | [PR #52029](https://github.com/sgl-project/sglang/pull/52029), [PR #51610](https://github.com/sgl-project/sglang/pull/51610) |
| **显存受限场景下的 Diffusion 服务**：CFG 批处理可降低大型 DiT 模型 host→GPU 流式拷贝开销，对 Qwen-Image 和 HunyuanVideo 部署尤为相关。 | [PR #52121](https://github.com/sgl-project/sglang/pull/52121) |

---

*Digest generated from SGLang repository activity on 2026-11-26. Data covers issues and PRs updated in the prior 24-hour window.*

---

*本简报基于 2026-11-26 SGLang 仓库活动生成。数据范围为过去 24 小时内有更新的 issues 和 PRs。*</think>



</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Translate all the English text to Simplified Chinese
2. Keep all Markdown structure (headings, tables, lists, etc.)
3. Keep URLs, numbers, dates, code references, version numbers, etc. as-is
4. Keep project names, repository slugs, usernames, file paths, API identifiers in original form
5. Use natural technical Chinese register
6. Output ONLY the translation, no preamble or explanation
7. No markdown fences around the output

Let me carefully translate this section by section.

Title: "llama.cpp Digest — 2026-11-26" - keep as-is or translate the word "Digest"? I think "Digest" is a publication type, but given this is a Chinese developer newsletter style, I should translate it. Let me use "llama.cpp 技术简报" or keep "Digest" as-is? The rules say "Keep project names... do not translate them" but this is a heading. I'll translate it naturally: "llama.cpp 简报 — 2026-11-26"

Let me go through it carefully:

## 1. Today's Highlights

"Today's Highlights" → "今日要点"

"llama.cpp v1.1.0 released" → "llama.cpp v1.1.0 正式发布"

"marking a new minor version milestone" → "标志着一个新的次版本里程碑"

"Key additions include improved async input copies for CUDA, scratch memory reservation during graph optimization, and initial SYCL F8 e4m3 quantization support." → "主要更新包括：改进了 CUDA 异步输入复制、图优化期间的 scratch memory 预留，以及初步支持 SYCL F8 e4m3 量化。"

"Windows users gain clean shutdown via CTRL_BREAK_EVENT handling, and Tencent's Hy4 flash model (with sparse/sliding-window MLA and DeepSeek41 Engram tables) is now supported." → "Windows 用户可通过 CTRL_BREAK_EVENT 处理器实现干净退出，同时现已支持腾讯的 Hy4 flash 模型（含稀疏/滑动窗口 MLA 和 DeepSeek41 Engram 表）。"


Now moving to the second section on releases and breaking changes. I need to establish a table format with headers for Commit, Change, and Notes, then populate it with the relevant entries. The table should capture version bumps and any breaking changes that developers need to be aware of. I should also include notes about the BPE tokenizer changes and how they might affect users' existing setups.

The breaking change section requires attention since it affects how models are tokenized and stored. This is important enough to warrant a separate note to developers, highlighting that they should test their existing workflows when upgrading.

Moving into model and hardware support, I'm organizing this by model type and then backend/quantization improvements. For the model support section, I need to list out the major models with their commit identifiers and details about their capabilities or fixes. The backend support section should capture CUDA improvements and other quantization-related changes that affect performance or compatibility.

Continuing with backend improvements: **SYCL F8 e4m3** quantization support across multiple operations including SET_ROWS, CPY, ADD, MUL_MAT, and MUL_MAT_ID. **SYCL MMQ re-enabled** for various quantization formats like Q4_0, Q4_1, Q5_0, Q5_1, and Q8_0. **Hexagon ggml 2.0** introduces new int-hmx modes for w8a8 and w8a16 configurations, automatic precision conversion from f32 to f16, and generic DMA pipelines.

Moving into performance and optimization work, I'm tracking several optimizations that have landed in the latest commit. The CUDA async input copies optimization consolidates multiple blocking operations into a single copy per split, reducing unnecessary overhead. GGML scratch reservation allows backends to pre-allocate compute buffers before executing specific nodes during graph optimization. Metal chunked graph commit uses a single command buffer thread to minimize GPU pipeline delays on Apple Silicon. The SYCL comm_exchange_fast V2 version scales efficiently with allreduce frequency, providing better throughput gains for tensor-parallel preprocessing and throughput configurations.

There are several optimization projects currently in development targeting different backends. Flash attention with indexed bias support is being implemented for CUDA and HIP. An integer overflow fix for MMF matrix offsets is needed on CUDA to prevent out-of-bounds reads when processing large element counts in f16 and bf16 formats from models like DeepSeek-V3. GPU architecture-specific work includes few-row MMQ with WMMA optimization for RDNA3.5 on HIP, Vulkan int8 MMQ accumulate folding for AMD to improve shader compiler performance, vectorized exponential operations for GDN KDA paths, and tiling adjustments for Intel Xe2 on ANV to prevent GPU engine timeouts on the Arc B60. Benchmark data shows the SYCL gated DeltaNet ESIMD kernel achieves approximately 12% improvement in inference performance on Qwen3.8-27B with Q3_K_P quantization at batch size 1024 and 1024 units.

Several stability and regression issues are being tracked with varying severity levels. A high-priority closed issue involves out-of-memory errors from abnormal RAM consumption in Gemma 4 models. Medium-priority open issues include log probability nondeterminism in SYCL MoE implementations, prefill performance regression on V100 for hybrid models starting in version 1.0, and speculative decoding slowdowns on Qwen3.5 hybrid configurations.

Additional open medium-priority items involve token generation quality degradation in SYCL DeltaNet with longer prompts, and UI asset validation failures during builds. Several closed issues have been resolved, including Vulkan nondeterminism on Intel Arc Pro B70, WebUI responsiveness problems with larger Chrome font sizes, and KV cache quantization study results. A separate action items section outlines recommendations for Windows server deployments and Intel Arc B60 users.

For hybrid model deployments on CUDA, the V100 prefill regression and speculative decoding slowdown warrant testing before upgrading from 0.4.1 to 1.1.0. Tokenizer migrations may introduce behavioral changes due to prepend_scheme enforcement that need validation against existing test cases. Several optimizations present opportunities for macOS Apple Silicon users with Metal improvements, CUDA deployments benefiting from async input copies, and Intel SYCL backends gaining F8 e4m3 quantization and MMQ re-enablement. Key areas to monitor include DFlash2 draft acceptance fixes, GroveMoE adjugate expert corrections, and KV cache quantization impacts on model quality.

The document closes with a data attribution note and publication date.
</think>


# llama.cpp 简报 — 2026-11-26

## 1. 今日要点

**llama.cpp v1.1.0 正式发布**（commit b12752），标志着一个新的次版本里程碑。主要更新包括：改进了 CUDA 异步输入复制、图优化期间的 scratch memory 预留，以及初步支持 SYCL F8 e4m3 量化。Windows 用户现在可以通过 CTRL_BREAK_EVENT 处理器实现干净的进程退出；同时，腾讯的 Hy4 flash 模型（含稀疏/滑动窗口 MLA 和 DeepSeek41 Engram 表）现已得到支持。

## 2. 版本更新与破坏性变更

| Commit | 变更 | 说明 |
|--------|------|------|
| **b12752** | **版本号升至 1.1.0** | 新的次版本发布 |
| b12753 | 修复了 `ON_DEVICE` 场景下的序列状态恢复 | 修复了卸载模型到设备后可能出现的回归问题 |
| b12751 | 对 BPE 分词器强制实现 `prepend_scheme` 行为 | 分词器行为变更 |
| b12738 | 在 Windows 上添加 `CTRL_BREAK_EVENT` 处理器 | 支持父进程向子进程发送干净的关闭信号 |

**破坏性变更提醒：** 升级后，BPE 分词器的用户应验证 `prepend_scheme` 行为是否符合预期；此次改动强制统一了 Metaspace 的处理逻辑。

## 3. 新增模型与硬件支持

### 模型支持
| 模型 | 类型 | Commit | 详情 |
|------|------|--------|------|
| **Tencent Hy4 (hy_v4_flash)** | Draft 模型 | b12755 | 主干网络含 iHC、门控 MLA、稀疏/滑动窗口 MLA、三明治 Norm、Latent Routed Experts、DeepSeek41 Engram 表 |
| **Inkling-2-Mini DFlash2** | Draft 模型 | #33073 | 新 drafter 架构支持 |
| **Youtu-Parsing-Omni** | 视觉/音频/视频多模态 | #33078 | 腾讯多模态模型，支持交错的音频轨道 |
| **GigaChat 3.5** | MoE (432B/28B 激活) | #25342 | DeepSeek-V3 风格主干网络，含 MLA + DeepSeek MoE |
| **Spark2.5 DSpark** | Draft 模型 | #31372 | 与 Spark2.5 共享架构 |

### 后端与量化
- **SYCL F8 e4m3** — `SET_ROWS`、`CPY`、`ADD`、`MUL_MAT`、`MUL_MAT_ID` 操作初步支持（#32726）
- **SYCL MMQ 重新启用** — Q4_0/Q4_1/Q5_0/Q5_1/Q8_0 量化在 scratch buffer 修复后现已恢复正常（#32961）
- **Hexagon ggml 2.0** — 新增 int-hmx 模式（w8a8、w8a16）、自动 f32→f16 降级、通用 DMA 流水线（#32582）

## 4. 性能与优化

### 已合并的优化
| 领域 | Commit | 效果 |
|------|--------|------|
| **CUDA 异步输入复制** | b12732 | 每个 split 仅需一次阻塞复制，而非每个输入一次；通过 `async_host_input` 能力可选启用 |
| **GGML scratch 预留** | b12728 | 后端可在 `ggml_backend_graph_optimize()` 期间为特定节点预留计算缓冲区 |
| **Metal 分块图提交** | b12734 | 单命令缓冲区线程模式；减少 Apple Silicon 上的 GPU 流水线停顿 |
| **SYCL comm_exchange_fast V2** | #32058 | 随 allreduce 频率线性扩展；在 TP PP/TG 场景下提升吞吐 |

### 进行中的优化（待合并 PR）
| PR | 描述 | 目标平台 |
|----|------|----------|
| #33063 | 基于索引偏置的 Flash Attention | CUDA + HIP |
| #33044 | 修复 MMF 矩阵偏移的整数溢出 | CUDA — 防止 DeepSeek-V3 等 F16/BF16 大模型（>2^31 元素）越界读 |
| #32224 | RDNA3.5 Few-row MMQ + WMMA | HIP |
| #32528 | Vulkan int8 MMQ 累加折叠 | AMD（缩小着色器编译器性能差距） |
| #33077 | `ggml_vec_exp_f32` 向量化 | GDN KDA 路径加速 |
| #33076 | 在 Intel Xe2 (ANV) 上将 Vulkan 矩阵乘法 tile 限制为 medium | 防止 Arc B60 上的 GPU 引擎超时 |

### 基准测试备注
- SYCL 门控 DeltaNet ESIMD kernel（#31762）：Qwen3.8-27B Q3_K_P 在 `-fa on -ctk q4_0 -ctv q4_0 -b 1024 -ub 1024` 条件下推理性能提升约 12%

## 5. 稳定性与回归问题

### 活跃问题（按讨论量排序）
| Issue | 严重程度 | 状态 | 摘要 | 修复 PR |
|-------|----------|------|------|----------|
| [#21690](https://github.com/ggml-org/llama.cpp/issues/21690) | **高** | 已关闭 | Gemma 4 检查点/MMProj 导致 OOM — RAM 消耗异常 | — |
| [#31206](https://github.com/ggml-org/llama.cpp/issues/31206) | 中 | 进行中 | SYCL MoE 上 logprobs 不确定性；seed 无法固定分布 | — |
| [#32810](https://github.com/ggml-org/llama.cpp/issues/32810) | 中 | 进行中 | V100 (sm_70) 混合模型预填充回归；v1.0 中 FATTN 的 `nbatch_V2` 相比 0.4.1 减半 | — |
| [#32776](https://github.com/ggml-org/llama.cpp/issues/32776) | 中 | 进行中 | Qwen3.5 混合模型（CUDA）投机解码慢 2.2–2.4 倍 | — |
| [#29183](https://github.com/ggml-org/llama.cpp/issues/29183) | 中 | 进行中 | SYCL DeltaNet 长 prompt 出现 token soup（Qwen3.6/3.8、Nemotron） | — |
| [#32780](https://github.com/ggml-org/llama.cpp/issues/32780) | 低 | 进行中 | 构建时 UI 资源校验失败（v1.0.0、v0.7.0） | — |

### 已关闭的重要问题
- **#31560** — Intel Arc Pro B70 上的 Vulkan `KHR_coopmat` 不确定性问题已解决（Mesa 26.2.5）
- **#32361** — Chrome 字体大小 ≥24 时 WebUI 无响应的问题已修复
- **#21385** — KV 缓存量化研究结论：q4_0 在混合模型上无损；标准模型上按头自适应分配可提升质量约 8%

## 6. 应用开发者行动指南

### 需要立即关注
1. **Windows 服务器部署：** 升级以获取 CTRL_BREAK_EVENT 修复——通过父进程启动 `llama-server` 的脚本现在将收到干净的退出信号，而非被强制终止（#32080，纳入 b12738）。

2. **Intel Arc B60 用户：** 避免使用过大的 Vulkan 矩阵乘法 tile（`-ub > 64`）；#33076 中的修复正在等待合并，旨在防止 GPU 引擎超时。

3. **SYCL MoE 用户：** logprobs 不确定性问题（#31206）意味着在 SYCL + MoE 配置下无法依赖 `seed` 实现可重现的概率输出。请关注修复进展。

4. **混合模型用户（Qwen3.5、GDN 系列）：** V100 预填充回归（#32810）和投机解码减速（#32776）建议在从 0.4.1 升级到 1.1.0 之前进行测试。

5. **分词器迁移：** 如果使用 BPE 分词器，b12751 中的 `prepend_scheme` 强制执行可能会改变分词结果；请用已知的测试用例进行验证。

### 可选升级
- **macOS Apple Silicon** — Metal 分块图提交（b12734）提升了性能
- **CUDA 部署** — 异步输入复制（b12732）减少了多输入图场景下 host 到 device 的传输开销
- **Intel SYCL** — F8 e4m3 量化支持及 MMQ 重新启用（#32961）扩展了支持的精度选项

### 持续关注
- DFlash2 draft 接受率修复（#33049）——如果使用 Inkling-2-Mini，之前的接受率极低（约 0.1%）
- GroveMoE 伴随矩阵专家修复（#33071）——如果使用 inclusionAI/GroveMoE，输出与参考实现的分歧问题

---

*数据来源：github.com/ggml-org/llama.cpp @ 2026-11-26*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate an English technical report into Simplified Chinese. I need to:

1. Translate all the English text to Simplified Chinese
2. Preserve the Markdown structure exactly (headings, tables, lists, blockquotes, etc.)
3. Keep URLs, numbers, dates, code, project names, version tags, etc. verbatim
4. Use natural technical Chinese suitable for a Chinese developer newsletter
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me go through this systematically and translate it section by section.
</think>


# Ollama Digest — 2026-11-26

## 今日要点

Ollama 开发继续聚焦于 Inkling 2 模型支持，新版 CUDA 后端支持 NVFP4 张量已合入（PR #19909），同时升级上游 llama.cpp 至 b12701，修复了长对话断言失败问题（PR #19916）。关键 bug 修复涵盖工具调用参数解析（嵌套 `<tool_call>` 字面量导致静默截断）和图片占位符检测（错误地拒绝包含 `[img-` 子串的提示词）。

---

## 发布版本与破坏性变更

| 条目 | 描述 | 链接 |
|------|-------------|------|
| PR #19917 | `llama-server` 版本号更新（合并详情待定） | [ollama/ollama#19917](https://github.com/ollama/ollama/pull/19917) |
| PR #19916 | llama.cpp 升级 **b12651 → b12701** — 修复 Inkling-2-mini 长对话期间的 `GGML_ASSERT(s2 <= uint32_t::max())` 整数溢出断言；上游修复见 [ggml-org/llama.cpp#32804](https://github.com/ggml-org/llama.cpp/issues/32804) | [ollama/ollama#19916](https://github.com/ollama/ollama/pull/19916) |

**迁移注意：** 如果在 DGX Spark 或类似硬件上使用 Inkling-2-mini 运行超长对话，此次升级将解决 KV 缓存操作期间的整数溢出断言。

---

## 新模型与硬件支持

| 模型 / 硬件 | 详情 | 状态 | 链接 |
|------------------|---------|--------|------|
| **Inkling 2 Mini — CUDA 后端** | NVFP4 激活内核（SM120/121），BF16 张量核专家聚合；MXFP8 支持；非 SM120 GPU 上回退到通用计算图 | 开放 PR，**#19909** | [ollama/ollama#19909](https://github.com/ollama/ollama/pull/19909) |
| **Inkling 2 Mini — ROCm/GFX1101** | AMD RX 7800 XT（16 GB）上的进行中后端支持；#19899 报告了高主机内存占用问题 | 活跃 bug | [ollama/ollama#19899](https://github.com/ollama/ollama/issues/19899) |
| **Inkling-2-Mini-GGUF (unsloth)** | 通过 unsloth/Inkling-2-Mini-GGUF 加载架构；25 层配置中未找到张量 `blk.24.attn_q.weight` | 上游已修复 | [ollama/ollama#19888](https://github.com/ollama/ollama/issues/19888) |
| **Hindsight Decision Model** | `hindsight-decision-v1`，用于 hs-decide-1-flash；Qwen 决策格式，因果单程回答 | 已合并，PR #19555 | [ollama/ollama#19555](https://github.com/ollama/ollama/pull/19555) |
| **Qwen3.8 / Qwen3.5** | 27B MoE 变体（qwen3.8:27b-mtp_q8、qwen3.8-flash-next、qwen35），支持 Unsloth GGUF 导入 | 活跃 issue | [ollama/ollama#19833](https://github.com/ollama/ollama/issues/19833) |
| **phi4** | Metal/CPU 在 `OLLAMA_KV_CACHE_TYPE=q8_0` 时崩溃；融合操作探测期间 ggml 调度器哈希溢出 | 修复 PR **#19914** | [ollama/ollama#19905](https://github.com/ollama/ollama/issues/19905) |

---

## 性能与优化

| 类别 | 变更 | 影响 | 链接 |
|----------|--------|--------|------|
| **Inkling 2 — 短历史记录** | Metal 分组注意力内核扩展至历史 < 1024 keys 的场景；移除 FP32 扩展 + 密集掩码开销 | 短对话轮次响应更快 | [ollama/ollama#19881](https://github.com/ollama/ollama/pull/19881)（已关闭） |
| **MLX 前缀缓存** | Engram 历史缓冲区压缩，减小快照开销 | 重复提示词下内存抖动降低 | [ollama/ollama#19913](https://github.com/ollama/ollama/pull/19913) |
| **MLX 分词器** | `Prepend` 归一化器（如 Llama 2/CodeLlama/Phi-3 的 `▁` 前缀）现在在 `Sequence` 归一化器内部应用 | 受影响词表的分词结果正确 | [ollama/ollama#19910](https://github.com/ollama/ollama/pull/19910) |
| **MLX — 内存统计** | `getMemoryHeadroom` 现在统计 macOS 上的非活跃匿名页，而非仅统计空闲 + 可 purge 页 | 前缀缓存驱逐阈值更准确 | [ollama/ollama#19907](https://github.com/ollama/ollama/pull/19907) |
| **MLX — Qwen3.8 前缀缓存** | `qwen3.8-flash-next` 上前缀缓存快照每个不同提示词增长约 0.6 GiB（65k ctx，M5 Ultra 256 GB）；`OLLAMA_KEEP_ALIVE=-1` 下从不驱逐 | 内存泄漏 bug，见 #19891 | [ollama/ollama#19891](https://github.com/ollama/ollama/issues/19891) |
| **MLX — Inkling 2 缓存驱逐** | Inkling 2 Mini 在 ~64k tokens 后前缀缓存被完全驱逐；相对注意力预填充随上下文增长 | 超过 64k 的每轮对话都需要重新预填充 | [ollama/ollama#19819](https://github.com/ollama/ollama/issues/19819) |
| **DGX Spark 基准测试** | Qwen3.8 Flash-Next 和 Hermes Agent 工作负载，在 GB10（128 GB 统一内存）上；Ollama 0.32.1 与 Strata 对比，75 次运行 | 性能研究，优化机会 | [ollama/ollama#19887](https://github.com/ollama/ollama/issues/19887) |
| **显存统计** | 投机解码 / MoE 的多模型加载内存归属；混合注意力 K-cache 统计 | `ollama ps` 报告准确 | [ollama/ollama#17857](https://github.com/ollama/ollama/pull/17857)，[ollama/ollama#19632](https://github.com/ollama/ollama/pull/19632) |

---

## 稳定性与回归问题

| 严重性 | Issue | 描述 | 修复 PR |
|----------|-------|-------------|--------|
| 🔴 **严重** | #19918 | 0.40.18 ROCm/Windows 回归：JSON Schema 语法请求在加载中途失败，报 `"Unexpected empty grammar stack after accepting piece: @ (31)"`，返回 HTTP 200 空响应体 | — |
| 🔴 **严重** | #19879 | Inkling-2-mini OOM + 高 CPU → DGX Spark 机器无响应（需硬重启） | — |
| 🔴 **严重** | #19866 | macOS M4 Pro MLX Qwen3.8 27b 在 0.40.17 上出现严重性能回退；已设置 `OLLAMA_KEEP_ALIVE=8h` | — |
| 🔴 **严重** | #19833 | Qwen3.8:27b-mtp_q8 升级到 0.40.2 后显存从 51 GB 飙升至 127 GB（Windows 11）；回退到旧版本问题消失 | — |
| 🟠 **高** | #19902 | Laguna 解析器丢失包含字面 `<tool_call>` 开头的工具调用参数；返回 `say({})` 而非完整参数 | **#19904**，**#19919** |
| 🟠 **高** | #19911 | `/api/chat` 发送图片时若消息文本包含 `[img-`（如 `arr[img-1]`）则 HTTP 400 失败；渲染器误判为占位符 | **#19912** |
| 🟠 **高** | #19905 | phi4 `q8_0` 缓存类型在 Metal 上 abort（ggml 调度器哈希溢出） | **#19914** |
| 🟠 **高** | #19915 | Inkling-2-mini llama-cpp 后端长对话时 `GGML_ASSERT(s2 <= uint32_t::max())` | **#19916** |
| 🟠 **高** | #19891 | Qwen3.8-flash-next MLX 前缀缓存每个提示词增长约 0.6 GiB，从不驱逐（M5 Ultra 256 GB） | — |
| 🟠 **高** | #19899 | ROCm/Windows RX 7800 XT：100% GPU 卸载后映射模型页的主机内存占用高（0.40.18） | — |
| 🟡 **中** | #19767 | Qwen3.8 双智能体会话在默认单槽上从 token 0 重新读取提示词；并行槽丢失提示词缓存 | — |
| 🟡 **中** | #19851 | 0.40.15 能正常加载的模型在 0.40.17 上 OOM | — |
| 🟡 **中** | #19900 | M2 Pro 上 MLX Inkling-2-mini panic：缺少 `custom_kernel_relative_attention_bf16_probabilities` | — |
| 🟢 **低** | #18274 | 模型名验证 80 字符限制对 HuggingFace 路径长度不够 | — |
| 🟢 **低** | #7703 | 文档说明：流式 JSON 对象为换行分隔的 JSON（JSONL）需要明确 | — |

---

## 对应用开发者的影响

1. **工具调用用户：** 如果你的智能体在 JSON 参数字符串中输出 `<tool_call>` 字面量，请在 PR #19904/#19919 合并后立即升级——目前参数会被静默丢弃。

2. **视觉模型用户：** 发送图片时请避免附带包含 `[img-` 模式的 C 代码或任何文本；等待 PR #19912 合入或对输入进行清洗。

3. **DGX Spark / Inkling 2 用户：** llama.cpp b12701 升级（PR #19916）是最高优先级的补丁——它修复了长对话期间的整数溢出崩溃。请关注 PR #19909 的 CUDA NVFP4 支持进展，作为 Metal 的替代方案。

4. **macOS MLX Qwen3.8 用户：** 0.40.17 的性能回退（#19866）尚未修复；如果需要稳定性，社区反馈 0.40.15 是已知的稳定版本。

5. **ROCm/Windows 用户：** 0.40.18 中 JSON Schema 约束生成已损坏（#19918）；请暂定到 0.40.17 或等待补丁。

6. **内存敏感部署：** Qwen3.8-flash-next 的 MLX 前缀缓存内存泄漏和 Inkling 2 上下文增长问题，意味着长时间运行的聊天应用应监控 `ollama ps`，并考虑定期重启或设置较低的 `OLLAMA_KEEP_ALIVE` 值，直到修复上线。

7. **多模型 / 显存监控：** PRs #17857 和 #19632 改进了 MoE 和混合注意力模型的 `ollama ps` 准确性——对多租户场景下的容量规划很有帮助。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese while preserving all the formatting, links, and technical terms exactly as they are. I need to translate the content naturally while keeping technical terminology consistent with how Chinese developers would understand it.

Let me translate section by section, making sure to:
1. Keep all Markdown structure
2. Keep URLs and issue references as-is
3. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
4. Use natural technical Chinese register
5. Preserve emojis and tables
6. No preamble or explanation, just the translation

Let me go through this carefully:

**1. Today's Highlights** - Translate the summary section

**2. Releases & Breaking Changes** - Translate the table content

**3. New Model & Hardware Support** - Translate the table

**4. Performance & Optimization** - Translate the table

**5. Stability & Regressions** - Translate the table

**6. What This Means for Application Developers** - Translate the numbered list

Let me start translating:
</think>


# LiteLLM 每日简报 — 2026-11-26

## 1. 今日要点

LiteLLM 社区正积极处理一系列正确性和可靠性问题，项目进入高密度交付阶段。尤需关注的是，防护规则（guardrail）同步中发现了一个性能缺陷，当防护规则条目累积时可能导致 O(N³) 复杂度的阻塞事件循环（PR #54435）。功能方面，Rust 网关现已支持预算键强制检查，通过新的 PR 链实现（#54625, #54622）；此外，通过将 realtime 和 provider-cost 模块延迟到首次使用时加载，导入性能得到提升（#54344）。Prisma Python 客户端弃用通知仍在讨论中，已获 22 条评论，依赖数据库后端的团队应开始规划迁移方案。

---

## 2. 版本发布与破坏性变更

| 项目 | 详情 | 链接 |
|------|---------|-------|
| 无版本发布 | 过去 24 小时内无新版本 tag。 | — |
| Prisma Python 客户端弃用 | 社区正在讨论迁移出 Prisma。尚未公布时间表或替代方案。 | [#9753](https://github.com/BerriAI/litellm/issues/9753) |

**迁移提示：** 使用 Prisma 后端进行 LiteLLM 代理键管理和消费追踪的团队，应关注 [#9753](https://github.com/BerriAI/litellm/issues/9753) 获取迁移指南和时间安排。

---

## 3. 新模型与硬件支持

| 供应商 | 模型 / 功能 | 状态 | 链接 |
|----------|-----------------|--------|-------|
| **Fireworks AI** | Kimi K3.1 Pro Ultra-fast (`fireworks_ai/accounts/fireworks/routers/kimi-k3p1-pro-ultrafast`) | 已加入成本映射 | [#54627](https://github.com/BerriAI/litellm/pull/54627) |
| **Volcengine** | Ark Seedream 图片生成、编辑及定价 | 进行中 | [#54076](https://github.com/BerriAI/litellm/pull/54076) |
| **Together** | 成本映射清理：移除 5 个仅在专属端点提供的模型（此前会导致 400 "Unable to access non-serverless model"） | 已修复 | [#54618](https://github.com/BerriAI/litellm/pull/54618)（LTS: [#54624](https://github.com/BerriAI/litellm/pull/54624)） |

今日未公布新的硬件支持（CUDA/ROCm/Metal）或量化格式。

---

## 4. 性能与优化

| 类别 | 变更 | 影响 | 链接 |
|----------|--------|--------|-------|
| **导入时延迟加载** | `realtime` 和 `provider_cost` 模块改为首次使用时加载，而非 `import litellm` 时加载 | 启动更快；减少冷启动延迟 | [#54344](https://github.com/BerriAI/litellm/pull/54344) |
| **布尔值环境变量开关** | 所有 on/off 代理设置现在除 `true`/`false` 外还接受 `1`、`yes`、`on`；Rust 网关同步实现此行为 | 配置更简洁；管理员误配 `1` 时不再静默使用默认值 | [#54574](https://github.com/BerriAI/litellm/pull/54574) |
| **Rust 网关预算强制执行** | 新 PR 链在限流器计数请求前增加原生调用者的预算检查 | 修复了 Rust 网关流量永远不会触发密钥预算的漏洞 | [#54625](https://github.com/BerriAI/litellm/pull/54625), [#54622](https://github.com/BerriAI/litellm/pull/54622) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| 🔴 **高** | **O(N³) 防护规则同步阻塞事件循环** — `_sync_guardrail_info_to_logging_obj` 在请求中累积防护规则条目，每个条目又遍历完整列表，造成指数级开销 | 待处理 | — |
| 🔴 **高** | **`import litellm` 时成本映射获取失败导致崩溃** — 当模型成本映射在导入时因 DNS、429、5xx 等可重试错误获取失败时，导入可能崩溃并抛出 "cannot import name 'LoggerContext' from partially initialized module" | 待处理 | — |
| 🟠 **中** | **Ollama 转换层 JSONDecodeError** — `litellm/llms/ollama/chat/transformation.py` 在未知条件下抛出 `JSONDecodeError`（报告缺少错误文本） | 待处理 | — |
| 🟠 **中** | **Azure AI 模型超出上下文窗口限制** — 通过 LiteLLM 代理与 OpenWebUI 使用 Azure AI 模型时报 ContextWindowExceededError，尽管使用了默认模型参数 | 待处理 | [#53716](https://github.com/BerriAI/litellm/issues/53716) |
| 🟠 **中** | **OpenRouter reasoning_details-only 流式块被丢弃** — 仅包含 `delta.reasoning_details`（仅含签名的思维块）的块被静默丢弃 | 待处理 | [#48401](https://github.com/BerriAI/litellm/issues/48401) |
| 🟠 **中** | **中断的流式请求记录部分消费** — 客户端中途断开时，仅计入断开前消费的块，但提供商按完整输出计费 | 待处理 | [#46499](https://github.com/BerriAI/litellm/issues/46499) |
| 🟡 **低** | **Vertex/Gemini 上下文缓存重排对话** — 缓存控制块不在前缀位置导致消息重排并丢失 `system_instruction` | **已关闭** | — |
| 🟡 **低** | **Watsonx 流式 usage 丢失** — 代理报告自身估算的 token 数而非读取提供商发送的 usage | **已关闭** | — |
| 🟡 **低** | **仅日志模式 Presidio 防护规则遮蔽客户端响应** — 仅意图记录日志时，流式和非流式响应都被遮蔽 | **已关闭** | — |
| 🟡 **低** | **审计日志异步发送导致工作进程关闭时丢记录** — 使用 `asyncio.create_task` 异步写入审计记录时，已返回 200 的调用记录可能丢失 | **已关闭** | — |

---

## 6. 对应用开发者的影响

1. **导入可靠性风险**：如果你的部署在容器启动时网络间歇性异常，请升级出 LiteLLM 1.105.3 以避免导入崩溃。请关注 [#54369](https://github.com/BerriAI/litellm/issues/54369) 获取修复进展。

2. **流式 finish_reason 回归（LTS）**：如果你运行 LTS 代理（1.108.x），流式聊天现在会在每个进行中块上包含 `finish_reason: null`，与主线行为一致。此前 Mistral SDK 和 Mistral Vibe 用户在第一个块就会出错。LTS 修复在 [#54623](https://github.com/BerriAI/litellm/pull/54623)。

3. **防护规则密集型部署**：如果你在每个请求中使用多条防护规则，请在高负载下监控事件循环阻塞。 [#54435](https://github.com/BerriAI/litellm/issues/54435) 中的 O(N³) 问题在修复发布前需有临时缓解方案（例如减少每请求防护规则条目数）。

4. **Prisma 用户**：开始评估替代方案或关注迁移指南。 [#9753](https://github.com/BerriAI/litellm/issues/9753) 的讨论是追踪进展的信号。

5. **布尔配置简化**：你现在可以在环境变量中使用 `LITELLM_MY_FLAG=1` 或 `LITELLM_MY_FLAG=yes`——这在 Kubernetes Secret 或 Ansible 模板中使用 `true`/`false` 字符串不方便的场景下很有用。

6. **新模型可用**：Fireworks Kimi K3.1 Pro Ultra-fast 已加入成本映射；如果你路由到该模型，计费将开箱即用。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate an English technical report about GitHub data for "Unsloth" into Simplified Chinese. I need to follow the rules strictly:
- Output ONLY the translation
- No preamble, no explanation, no markdown fences
- Preserve the Markdown structure exactly
- Keep URLs, issue/PR references, code, numbers, dates verbatim
- Keep project names, repository slugs, usernames, version tags, file paths as-is
- Use natural technical Chinese register

Let me translate this carefully section by section, maintaining the format and making it read naturally in Chinese.

The report is about Unsloth, a fine-tuning library, covering releases, model support, performance, regressions, and implications for developers.

Let me translate:
</think>


# Unsloth 每日简报 — 2026-11-26

## 1. 今日要闻

Unsloth 发布了 **v0.1.925-beta**，新增 Inkling 2 Mini 微调支持，训练速度提升 1.8–3.1 倍，显存占用减少 50%（通过 LoRA/QLoRA），并支持多 GPU 并行（tensor/pipeline/context parallelism）。同时项目正在清理一批回归问题——包括 Inkling 2 Mini GPU 卸载回归（吞吐量从 40 tokens/s 降至 12 tokens/s，#19137）、Windows 上 FP8 行式 GEMM 缺失问题（#19665），以及 Studio venv 中 torch/pyarrow SIGSEGV 崩溃（#19660）。PR 方面有五条并发分支在同步压缩代码注释预算（削减约 90%），另有一条新诊断 PR 展示了 LoRA 更新量在 FP8/FP4 合并导出后的存活情况（#19676）。

---

## 2. 版本发布与破坏性变更

| 项目 | 详情 | 链接 |
|------|------|------|
| **v0.1.925-beta** | Inkling 2 Mini 微调支持、性能修复、多 GPU 并行（tensor/pipeline/context）。可在 Kaggle 免费 2× T4 上训练，支持导出为 GGUF 或合并 16 位权重。 | [#19660](https://github.com/unslothai/unsloth/issues/19660) |
| **注释预算强制执行** | 五个 PR（#19653–#19657）将 studio、core、CLI、tests、installers 的文档字符串/注释压缩至非空行的 10% 以内。对功能无影响，但影响开发期代码可读性。 | [#19657](https://github.com/unslothai/unsloth/pull/19657) |
| **LoRA 导出诊断** | PR #19676 新增只读诊断视图，展示 LoRA 更新量的 norm 在 FP8/FP4 合并导出后残存多少——此前这种静默的舍入丢失完全不可见。 | [#19676](https://github.com/unslothai/unsloth/pull/19676) |
| **Windows 应用内更新 UX** | PR #19480 使 Windows 应用内更新后 Unsloth 窗口可见，正常登录启动时保留 `--hidden`。 | [#19480](https://github.com/unslothai/unsloth/pull/19480) |

---

## 3. 新模型与硬件支持

| 模型 / 架构 | 变更 | 详情 |
|--------------|------|------|
| **Inkling 2 Mini（1.8–3.1B）** | 新增支持 | LoRA/QLoRA 微调、GGUF 导出、合并 16 位导出。支持 Kaggle 免费 T4。 |
| **AMD RDNA4（gfx1200 / RX 9060 XT）** | 确认存在 Bug | QLoRA 在三个 fused kernel 中以 `HIP error: illegal memory access` 中止；使用原生 PyTorch/PEFT 可正常工作。 | [#18403](https://github.com/unslothai/unsloth/issues/18403) |
| **AMD ROCm 10.1** | 部分损坏 | `llama-server` 由 Studio 启动时崩溃，原因是加载了系统的 `libamdhip64`（#18948）。 |
| **Intel Arc 140V（XPU/Vulkan）** | 确认存在 Bug | 与 Inkling-2-mini 联用时输出生成失败（#19239）。 |
| **NVIDIA B300 / GB300（sm_103）** | 优化 | 自动量化顺序现改为尝试 FP8 → MXFP8 → INT8，而非优先尝试 INT8（#19688）。 |
| **Apple Silicon Metal** | 回归问题 | DiffusionGemma 在 GPU（`-ngl 99`）上生成空内容或乱码；CPU（`-ngl 0`）正常（#6336）。 |
| **FLUX.2 Klein（FP8）** | 已添加回退 | Windows x64（RTX 5090）和 Windows on Arm（RTX Spark）现在在缺失行式 GEMM 时回退到 tensorwise FP8（#19665）。 |

---

## 4. 性能与优化

| 领域 | 指标 | 链接 |
|------|------|------|
| **Inkling 2 Mini 训练** | 速度提升 1.8–3.1 倍，显存减少 50% | v0.1.925-beta |
| **Packed LoRA（sm80+ GPU）** | GPU 空闲约占 step 时间的 50%；block compile 将空闲减少 11–14%（Colab L4，Qwen3-4B QLoRA：819 ms → ~700 ms；Llama-3.2-3B LoRA：573 ms → ~490 ms） | [#19623](https://github.com/unslothai/unsloth/pull/19623) |
| **多 GPU 视频（Wan 2.2 TI2V 5B）** | 1.01–1.03× → 改善后的 placement；文本编码器不再在 GPU 2 上阻塞 CFG 副本（#19671） | [#19671](https://github.com/unslothai/unsloth/pull/19671) |
| **Krea 2 多 GPU（2× T4）** | 当 streaming 会导致第二张卡空闲时，现在通过 tensor parallel 利用第二张卡（#19689） | [#19689](https://github.com/unslothai/unsloth/pull/19689) |
| **FLUX.2 蒸馏（2× GPU）** | 按 token 数量将蒸馏步骤拆分到两张卡；修复第二张卡空闲问题（#19691） | [#19691](https://github.com/unslothai/unsloth/pull/19691) |
| **TP/PP/EP checkpoint 断点续训** | LoRA checkpoint 在 tensor/pipeline/expert parallel 模式下保存，现可在不同 GPU 布局下恢复（如 2 GPU → 1 GPU）（#19685） | [#19685](https://github.com/unslothai/unsloth/pull/19685) |
| **图片请求批处理** | 合并跨用户的相同并发图片请求为共享批处理 pipeline（#19667） | [#19667](https://github.com/unslothai/unsloth/pull/19667) |
| **视频队列统一** | `/v1/videos`、视频页面和聊天工具共用同一个服务端队列；消除 `409 A video generation is already in progress` 错误（#19677） | [#19677](https://github.com/unslothai/unsloth/pull/19677) |

---

## 5. 稳定性与回归问题

按严重程度排序：

| 严重程度 | 问题 | 状态 | 链接 |
|----------|------|------|------|
| 🔴 **严重** | Studio venv 中 `torch` + `pyarrow` 导入时 SIGSEGV（exit 139），Linux x86_64，Python 3.13，torch 2.13.0+cu130 | **待处理，0 条评论** | [#19660](https://github.com/unslothai/unsloth/issues/19660) |
| 🔴 **严重** | AMD RDNA4（RX 9060 XT）上 QLoRA 在三个 fused kernel 中以 `HIP error: illegal memory access` 中止 | **待处理** | [#18403](https://github.com/unslothai/unsloth/issues/18403) |
| 🟠 **高** | Inkling 2 Mini GPU 卸载回归：v0.1.923-beta 后吞吐量从 40 → 12 tokens/s（Windows 11 Pro） | **待处理** | [#19137](https://github.com/unslothai/unsloth/issues/19137) |
| 🟠 **高** | v0.1.920-beta 加载模型时崩溃 | **待处理** | [#18563](https://github.com/unslothai/unsloth/issues/18563) |
| 🟠 **高** | Apple Silicon Metal GPU 上 DiffusionGemma 输出空内容或乱码 | **待处理**（自 2025-06 起确认） | [#6336](https://github.com/unslothai/unsloth/issues/6336) |
| 🟡 **中** | ROCm `llama-server` 由 Studio 启动时崩溃（系统 `libamdhip64` 冲突） | **待处理** | [#18948](https://github.com/unslothai/unsloth/issues/18948) |
| 🟡 **中** | Decision 模型（Clef）：JSON 状态在 train/predict 中重新解析并按 key 排序，但 GGUF 导出时原样使用（训练/服务不一致） | **待处理** | [#19423](https://github.com/unslothai/unsloth/issues/19423) |
| 🟡 **中** | Inkling 2 Mini：Windows NVIDIA 上"Failed to process regex"（`std::regex error_stack`） | **待处理** | [#19376](https://github.com/unslothai/unsloth/issues/19376) |
| 🟡 **中** | `SFTConfig.pad_to_multiple_of` 在使用 padded batch 时被静默丢弃 | **待处理，1 条评论** | [#19567](https://github.com/unslothai/unsloth/issues/19567) |
| 🟡 **中** | `@skill` 内容仅在提及轮次后追加 → 导致整段对话被重新处理（prompt 缓存未命中） | **待处理** | [#19212](https://github.com/unslothai/unsloth/issues/19212) |

**已修复的回归问题：**
- Block compile `CheckpointError` 现已正确重新抛出（#19675）
- Windows 应用内更新后窗口可见性（#19480）
- 新增 LoRA 导出 norm 诊断（#19676）

---

## 6. 对应用开发者的影响

| 建议 | 详情 |
|------|------|
| **Inkling 2 Mini 已可用于生产微调** | v0.1.925-beta 使其成为 Unsloth 上速度最快的支持模型（1.8–3.1× 加速，显存减少 50%）。在 Kaggle T4 免费档或 多 GPU 环境下进行 LoRA/QLoRA 成本效益极高。 |
| **Checkpoint 断点续训现已支持跨布局恢复** | 如果你在分布式 LoRA（TP/PP/EP）模式下运行并存在任务抢占，现在可以在更少或不同的 GPU 上续训，无需手动重新布局。对云端 spot 实例使用场景至关重要。 |
| **FP8/FP4 导出时务必关注 LoRA 导出诊断** | arXiv 2611.32064 表明 93% 的 LoRA 更新 norm 可能在激进量化中丢失。PR #19676 现在提供了导出前的警告——在部署量化合并模型前务必检查此项。 |
| **多 GPU 图片/视频批处理已上线** | 跨用户的相同配置图片请求现在会合并为批处理 pipeline，显著提升多用户 Studio 部署的吞吐量。 |
| **当前 beta 版请避开 AMD RDNA4 + QLoRA** | 如需在 RX 9060 XT / gfx1200 上使用 QLoRA，请回退到原生 PEFT 或等待修复——fused kernel 会触发非法内存访问。 |
| **在 Linux 上验证 torch + pyarrow 联合导入** | Studio venv 中的 SIGSEGV 表明 torch 2.13.0+cu130 与 pyarrow 23.0.1 在 Python 3.13 上存在二进制兼容问题。如使用自定义 Python 环境，升级前请测试此组合。 |
| **Apple Silicon 用户：对 DiffusionGemma 使用 CPU 卸载** | Metal GPU（`-ngl 99`）输出乱码；`-ngl 0`（CPU）正常工作。请关注 #6336 获取 Metal 修复。 |
| **多 GPU Studio 部署应重新测试吞吐量** | FLUX.2 Klein、Krea 2 和 Wan 2.2 视频模型现在能更好地利用辅助 GPU。如运行 2-GPU Studio 实例，请今天在 main 分支重新测试吞吐量。 |

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*