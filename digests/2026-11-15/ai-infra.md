# AI 基础设施日报 2026-11-15

> 生成时间: 2026-11-15 02:05 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to translate it accurately while maintaining all the Markdown structure, tables, links, code references, etc. Let me translate it section by section, keeping the technical register natural in Chinese.

Let me work through this carefully:

1. Title and header
2. Section 1: Ecosystem Overview
3. Section 2: Activity Comparison (table)
4. Section 3: Model Support Race (table)
5. Section 4: Performance Frontier (with subsections and table)
6. Section 5: Layer Positioning (with ASCII diagram and table)
7. Section 6: Trend Signals (with subsections and table)

Key technical terms to translate:
- KV cache → KV缓存
- speculative decoding → 投机解码
- PagedAttention → PagedAttention
- batch/batching → 批处理
- fine-tuning → 微调
- quantization → 量化
- pipeline parallelism → 流水线并行
- tensor parallelism → 张量并行
- data parallelism → 数据并行
- MoE (Mixture of Experts) → MoE
- ROCm → ROCm
- firmware → 固件
- hot path → 热路径
- edge case → 边界情况
- regression → 回归
- throughput → 吞吐

Let me translate this now.
</think>


# AI 基础设施生态全景报告——跨项目对比分析

**报告日期：** 2026-11-15 | **覆盖范围：** vLLM · SGLang · llama.cpp · Ollama · LiteLLM · Unsloth

---

## 1. 生态全景

当前 AI 推理基础设施领域的核心驱动力来自三个维度的交汇：**Blackwell 硬件稳定化**（SM120 / RTX 50 系列 / B300 / GB300）、**热路径 Rust 重写**（日志、指标、限流、服务层），以及**多后端量化格式统一扩展**（ROCm MI300X/MI355X、Intel NPU、Qualcomm Hexagon、PowerVR）。没有任何单一项目能够覆盖完整技术栈——vLLM 在 NVIDIA 数据中心硬件的生产级服务方面领先，SGLang 正在追赶 Rust 原生生产级对等性，llama.cpp 在边缘/嵌入式及 CPU 优先场景占据主导，Ollama 面向零门槛本地部署，LiteLLM 提供网关/代理抽象层，Unsloth 则是微调到服务的完整闭环。当前的关键张力在于**服务吞吐量**（批处理不变性、KV 卸载、投机解码）与**训练稳定性**（QAT 正确性、权重加载、多维并行）之间的权衡，而当前最活跃的工程投入集中在前者。

---

## 2. 项目活跃度对比

| 项目 | 更新中的 Issue | PR 总量 | 24 h 内发布 | 关键进行中工作 |
|---------|:----------------:|:-----------:|:---------------:|--------------------|
| **vLLM** | 59 | ~500 | 0 | Rust 前端对等性、SM120 CUDA Graph、批处理不变性、Marlin→Humming 迁移 |
| **SGLang** | 27 | ~400 | 0 | SGLang 1.0 稳定化、Rust 服务端栈（15 个 PR）、HiCache PP 同步 drain |
| **llama.cpp** | 38 | ~300 | 7 | Batch API 废弃、MiniMax-M3.1、Metal Gemma4 融合、PowerVR Vulkan |
| **Ollama** | 20 | ~300 | 0 | VRAM/GPU 分片修复、MLX 批量投机验证、digest-length panic |
| **LiteLLM** | 15 | ~350 | 3（RC / stable） | 优先级队列控制器、Rust Prometheus 回调、S3 日志重构 |
| **Unsloth** | 29 | ~173 | 0 | DeepSeek-V4.1 原生支持、FSDP2/TP/PP、语音模式、NVFP4/MXFP4 权重加载 |

**观察：** vLLM 以 Issue 数量计活跃度最高，这与其更广泛的多后端范围和数据平面特性集相符。llama.cpp 发布频率最高（24 h 内 7 个 commit），反映出其 C++/C 变更节奏比 Python/Rust 项目更为轻量。LiteLLM 维护着严格的 RC/stable 双轨发布机制，并引入 cosign 签名验证，是本批次中唯一具备正式制品校验机制的项目。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth | LiteLLM |
|---------------------|:----:|:------:|:---------:|:------:|:-------:|:-------:|
| **DeepSeek-V4.1** | Beta（FP8、NVFP4） | — | KV 损坏已知 | — | **原生**（稀疏注意力、fp8/MXFP4） | 通过代理 |
| **DeepSeek-V4.1-Flash** | ✅ | — | ⚠️ KV 损坏（open） | — | ✅ | 通过代理 |
| **Qwen3.8-Flash-Next** | 通过 vLLM | 通过 SGLang | 通过 GGUF | 通过 Ollama | **FSDP2/TP/PP** | 通过代理 |
| **Qwen3.5 / Qwen3-Coder** | ✅ | ✅ | ✅ | ✅ | 通过 GGUF | ✅ |
| **Qwen2VL** | ✅ | ✅ | ✅ **今日已修复** | ✅ | 通过 GGUF | ✅ |
| **Kimi-K3.1-Pro** | ✅（B300/GB300 AgentX） | ✅（B300/GB300 AgentX） | — | — | — | 通过代理 |
| **MiniMax-M3.1** | ✅ | ✅ | ✅（今日） | — | — | 通过代理 |
| **ZAQERIS AXIOM** | ✅（今日） | — | — | — | — | 通过代理 |
| **FLUX.2-klein** | — | ✅（text encoder RoPE 卸载） | — | — | — | — |
| **SANA-Sprint** | — | ✅（今日） | — | — | — | — |
| **GLM-5.3-Flash** | ✅（SM120） | — | ⚠️ 性能退化（open） | — | — | — |
| **Rec. Ripple-65B-Preview** | — | — | ✅（DFlash2） | — | — | — |
| **Flint（AMD）** | ✅（gfx942、gfx950） | — | — | — | — | — |
| **Intel NPU（Lunar/Arrow Lake）** | — | — | — | ❌ 已关闭 | — | — |

**广度之冠：** vLLM 和 llama.cpp 支持的模型数量最多。**原生质量之冠：** Unsloth 在微调优先模型的原生移植上领先（DeepSeek-V4.1 原生支持含稀疏注意力、engram 表、fp8/MXFP4，无需社区 transformers fallback）。**服务多样性之冠：** LiteLLM 通过代理路由提供覆盖，但依赖上游引擎的正确性保证。

---

## 4. 性能前沿

优化版图按层级分化为若干不同战线：

### KV 缓存与内存管理
- **vLLM：** KV 卸载（TP 无感知，help-wanted）、HiCache 风格主机侧缓存、FlashInfer 竞态条件修复待合入
- **SGLang：** HiCache Mamba 主机池容量配置（`--hicache-mamba-size-gb`）、PP 同步 drain 优化、L2/L3 压力下 prefix cache 命中率
- **llama.cpp：** 统一 KV 缓存 Qwen4-Exp 解码（-37% 减速）、CPU→GPU prompt-cache 停滞（open）
- **Ollama：** 多 GPU 分片 VRAM 统计修复（4 个关联 Issue 合并）
- **Unsloth：** NVFP4/MXFP4 权重加载修复（非量化张量被随机初始化）

### 批处理与调度
- **vLLM：** 批处理不变性文档更新（面向 RL 工作流，零差异训练）、spec decode 验证阶段 top-k/top-p 截断
- **SGLang：** 新 slot 调度系统（服务端）、通过 Mooncake 实现优先级队列控制器以支持 EP 缩容
- **llama.cpp：** Batch API 废弃（旧 API → `llama_batch_ext`）
- **LiteLLM：** 优先级队列控制器应对提供商拥塞（P0 顺序、Redis 协调的 429/529 恢复）

### 量化与 Kernel
| 项目 | 活跃中的量化工作 |
|---------|--------------------------|
| **vLLM** | Marlin→Humming 迁移（INT4/INT8 GPTQ/AWQ、FP8、MXFP8/4、NVFP4、MXFP6）；MI355X 上 MXFP8 GEMM（+21–31%）；gfx942 上 NVFP4 MoE |
| **llama.cpp** | Hexagon IQ2_XXS + NVFP4；NVFP4/MXFP4 压缩张量修复；Metal NORM/L2_NORM 融合 |
| **Unsloth** | NVFP4/MXFP4 权重加载修复；QAT bypass 缓存解码；grouped Linears 排除 QAT |

### 分布式服务
- **Unsloth：** Qwen3.8-Flash-Next 和 DeepSeek-V4.1 的 FSDP2 + TP + PP；冻结 n-gram/engram 表从不分片（正确性保证）
- **SGLang：** 通过 Mooncake 实现 Elastic EP 缩容；Rust 服务端控制 API 补全（Anthropic、Ollama 路由）
- **vLLM：** EP16 上 DP>1 数据并行 MoE 崩溃（open）、DeepSeek-V4.1-Flash DP2 MoE 崩溃（open）

### 投机解码
- **vLLM：** DSpark 单核融合启动（70 个 kernel → 1 个持久化 FlyDSL 启动）
- **SGLang：** PP + EAGME/MTP 混合 chunk 崩溃（open）
- **Ollama：** MLX 批量投机验证（MTP/Dflash/Dflash2 在并发负载下仍需验证）
- **Unsloth：** Qwen3.8-Flash-Next MTP 接受率从 74% 退化至 56–66%（UD 3.1 GGUFs，open）
- **llama.cpp：** Rec. Ripple-65B-Preview 的 DFlash2

---

## 5. 层级定位

```
┌─────────────────────────────────────────────────────────────────────────┐
│  网关 / 代理 / 路由             ─────────────────────────────────────  │
│  ┌─────────────┐                                                          │
│  │  LiteLLM    │  代理层，多提供商路由，密钥管理，                         │
│  │             │  费用日志，限流，模型防护，MCP 服务                       │
│  └─────────────┘                                                          │
│                              ──────────────────────────────────────────  │
│  本地运行时 / CLI             ────                                       │
│  ┌─────────────┐ ┌─────────────┐                                         │
│  │  Ollama     │ │  llama.cpp  │  Ollama: 开箱即用本地服务，              │
│  │             │ │             │  MLX（Apple Silicon）、WSL2、Windows；    │
│  └─────────────┘ └─────────────┘  llama.cpp: 可嵌入 C/C++ 引擎，          │
│                                    硬件覆盖最广（CPU/GPU/NPU/FPGA），      │
│                                    量化格式最全，GGUF 模型生态             │
│                              ──────────────────────────────────────────  │
│  服务引擎                     ────                                       │
│  ┌─────────────┐ ┌─────────────┐                                         │
│  │  vLLM       │ │  SGLang     │  vLLM: 数据中心 NVIDIA 优先，PagedAttention，  │
│  │             │ │             │  投机解码，多后端 ROCm 支持；                     │
│  └─────────────┘ └─────────────┘  SGLang: Rust 优先，流水线并行，                 │
│                                    HiCache，RadixAttention，DSpark，1.0 稳定化    │
│                              ──────────────────────────────────────────  │
│  微调 → 服务闭环              ────                                       │
│  ┌─────────────┐                                                          │
│  │  Unsloth    │  微调（LoRA/QLoRA/QAT），多维并行（FSDP2/TP/PP），        │
│  │             │  语音模式，DeepSeek-V4.1 原生移植，NVFP4/MXFP4，          │
│  └─────────────┘  DeepSeek-V4.1-Flash 支持                               │
└─────────────────────────────────────────────────────────────────────────┘
```

| 维度 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-----------|:----:|:------:|:---------:|:------:|:-------:|:-------:|
| **核心角色** | 服务引擎 | 服务引擎 | 可嵌入运行时 | 本地服务 CLI | 网关/代理 | 微调 + 服务 |
| **部署目标** | 数据中心 GPU 集群 | 数据中心 GPU 集群 | 边缘 / 嵌入式 / CPU | 笔记本 / 工作站 | 云端代理 / 多云 | 工作站 / 单节点 GPU |
| **硬件覆盖** | NVIDIA（主力）、ROCm（增长中） | NVIDIA（主力）、ROCm（增长中） | 全平台（CPU/GPU/NPU/FPGA） | Apple MLX、NVIDIA、AMD | 提供商无关 | NVIDIA、ROCm |
| **量化支持** | INT4/INT8/FP8/NVFP4/MXFP8/MXFP4/MXFP6 | INT4/INT8/FP8/NVFP4 | 各后端均支持 INT2–INT8/FP4–FP16 | 模型级（GGUF） | 直通 | INT4/INT8/FP8/NVFP4/MXFP4 |
| **多节点** | ✅ TP/PP/EP | ✅ TP/PP/EP | ❌（单节点） | ❌（单节点） | ✅（通过代理） | ✅ FSDP2/TP/PP（训练） |
| **Rust 迁移** | 前端进行中 | 控制 API 接近完成 | ❌（C++） | ❌（Go） | 核心热路径已迁移 | ❌（Python/Triton） |
| **投机解码** | DSpark、Eagle、MTP | Eagle、MTP、Medusa | DFlash/DFlash2 | MTP/Dflash | 通过上游 | MTP |
| **配置稳定性** | 稳定 | SGLang 1.0 即将发布 | 稳定 | 稳定 | 稳定 | 稳定（beta） |

---

## 6. 趋势信号

### 从今日活跃度中读出的信号

**1. Blackwell（SM120）是前沿试验场，而非生产级可用平台。**
三家以 NVIDIA 数据中心为核心的服务引擎项目——vLLM（CUDA Graph 崩溃、非法内存访问）、SGLang（sm_120 在 CUDA 13 wheel 下开箱即坏）、llama.cpp（DeepSeek-V4.1-Flash KV 损坏）——均在 2025 年发布的 Blackwell 硬件上存在未解决正确性问题。面向 B300/GB300/RTX PRO 6000 的团队应在关键路径上预留额外的验证时间，或暂缓上线。

**2. Rust 正在蚕食所有项目中的热路径。**
LiteLLM 将 Prometheus 指标、动态限流和 S3 日志迁移到了 Rust 回调。SGLang 正在进行 Rust 服务端控制 API（15 个 PR）。vLLM 的 Rust 前端对等性路线图也在推进中。模式是清晰的：Python 可调用的 Rust 用于可观测性、并发和内存敏感路径。应用开发者应提前准备 Go/Rust 工具链集成。

**3. 多后端对等性（ROCm、Intel NPU、Qualcomm Hexagon）正在加速但仍不稳定。**
- ROCm 7.14/MI300X：vLLM 的 NVFP4 MoE 和 MXFP8 GEMM 已可用；Unsloth 遭遇 stride assertion 回退到 MATH fallback。
- Qualcomm Hexagon：llama.cpp 今日合入了 IQ2_XXS + NVFP4 支持。
- Intel NPU：Ollama 在未实现的情况下关闭了功能请求。
- PowerVR Vulkan：llama.cpp 获得初步支持。
- AMD gfx1151/gfx942：多个项目正在积极调试，但仍有未解决回归。

建立多供应商硬件策略的团队应预期比 NVIDIA 落后 1–2 个季度才能达到同等稳定性，并为此配置专门的验证基础设施。

**4. 量化格式正沿着硬件路线分裂。**
格式爆炸——NVFP4、MXFP4、MXFP6、IQ2_XXS、FP4——由 Blackwell 和 AMD MI300X 的 tensor core 能力驱动。vLLM 的 Marlin→Humming 迁移（Humming 覆盖 3 个厂商的 7 种格式）是最雄心勃勃的统一努力。llama.cpp 的方法覆盖最广（全格式、全后端），但自动 kernel 选择较少。

**5. 投机解码在并发和分布式场景下正在成熟但仍脆弱。**
MTP 接受率回归、PP + 投机解码崩溃、MLX 并发草稿问题均于今日暴露。模式清晰：投机解码在单序列、单引擎条件下运行良好；在多请求批处理、流水线并行或数据并行下会失效。在生产环境部署 Eagle/MTP/DSpark 前，应在真实并发负载下进行测试。

**6. SGLang 1.0 和 vLLM 的 Rust 前端标志着平台稳定性的转折点。**
两个项目都在快速特性迭代期后收敛到正式的兼容性策略。这是一个领先指标：推理引擎层正在走向成熟——预计未来两个季度生态系统将从"我该用哪个引擎？"转向"我如何在选定引擎上标准化并扩展？"

### 应用 / Agent 开发者应关注的事项

| 信号 | 时间窗口 | 行动建议 |
|--------|---------|--------|
| SGLang 1.0 发布 | 1–2 个月 | 审计 SGLang 0.5.x 配置中的静默 fallback 变报错行为；开始迁移规划 |
| vLLM Rust 前端对等性 | 2–3 个月 | 准备 Python 路径废弃通知；测试 `Platform.validate_request` 对等性 |
| Blackwell CUDA Graph 稳定化 | 1–2 个月 | 监控 vLLM [#67488](https://github.com/vllm-project/vllm/issues/67488) 和 SGLang [#49209](https://github.com/sgl-project/sglang/issues/49209)；sm_120 上暂勿上线 spec decoding |
| Ollama VRAM 统计修复 | 1–2 周 | 监控 [#19632](https://github.com/ollama/ollama/pull/19632)；升级前测试多 GPU 模型放置 |
| LiteLLM Rust Prometheus 迁移 | 2–4 周 | 更新 Prometheus scrape 配置中的重命名/变更指标名；测试 `LITELLM_RUST_PROMETHEUS=1` |
| Unsloth 语音模式 | 1–2 个月 | 准备音频集成点；llama.cpp audio.cpp 流程为目标 |
| llama.cpp Batch API 废弃 | 1–2 个月 | 审查代码库中直接使用 `llama_batch` 的地方；通过 [#32163](https://github.com/ggml-org/llama.cpp/pull/32163) 迁移到 `llama_batch_ext` |
| 多后端（ROCm/Intel/Qualcomm） | 持续进行 | 为每个硬件目标维护独立的验证矩阵；非 NVIDIA 路径预计在至少未来 2 个季度内仍有回归 |

---

*数据来源：github.com/vllm-project/vllm · github.com/sgl-project/sglang · github.com/ggml-org/llama.cpp · github.com/ollama/ollama · github.com/BerriAI/litellm · github.com/unslothai/unsloth*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate this English technical digest about vLLM into Simplified Chinese. I need to:

1. Translate all the text content while keeping all Markdown formatting intact
2. Keep all technical identifiers, URLs, PR/issue numbers, code snippets as-is
3. Use natural technical Chinese register
4. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate section by section:

## 1. Today's Highlights

The vLLM community is advancing multi-backend support with new ROCm optimizations (NVFP4 MoE on gfx942, MXFP8 GEMMs on MI355X) while tackling Blackwell SM120 stability—multiple issues flag CUDA graph capture failures and illegal memory access on RTX PRO 6000 / B300 hardware. The batch invariance feature continues to draw heavy engagement (107 comments), and the Rust frontend parity roadmap is progressing toward feature-complete status.

## 2. Releases & Breaking Changes

No releases in the last 24 hours.

**Migration Notes:**
- The Marlin→Humming quantization kernel migration is under RFC (#65560); Humming now covers INT4/INT8 GPTQ/AWQ, FP8, MXFP8, MXFP4, NVFP4, MXFP6 for both dense and MoE layers across NVIDIA architectures.
- vLLM CUDA builds recently migrated to LibTorch Stable ABI (blog); ROCm parity request filed (#67551).

## 3. New Model & Hardware Support

| Model / Hardware | Notes | PR/Issue |
|---|---|---|
| ZAQERIS AXIOM (ZaqerisAxiomForCausalLM) | 79.43B sparse MoE, 16 experts, top-2 routing, Apache 2.0 | #67412 |


| Flint on AMD (gfx942, gfx950) | ROCm support added via split common/nvidia/amd layout | #66216 |
| Kimi-K3.1-Pro — B300/GB300 AgentX presets | Disaggregated serving presets aligned with InferenceX | #67722, #67719 |
| GLM-5.3-Flash FP4-Local on SM120 | Community working toward full base support | #66218 |

## 4. Performance & Optimization

### Landed / In Review

Multiple performance improvements are being evaluated. Speculative decoding now applies top-k/top-p cutoffs at target-logit load, extending on-load masking to active rows and reducing unnecessary computation. Sparse MLA attention precomputes prefill routing in metadata builder to eliminate per-layer branching. ROCm platforms see dense MXFP8 GEMMs on MI355X via AITER FlyDSL kernels, achieving 21–31% performance gains with faster activation quantization. NVFP4 MoE operations on gfx942 leverage native support via tl.dot_scaled, requiring triton-lang/triton#10979 (merged Jul 2026).

DSpark implements monokernel launches across 5 draft layers plus final normalization, consolidating ~70 kernels into a single persistent FlyDSL launch and removing 11 all-reduce operations. Batch invariance documentation now includes a tip linking to Inferact/zero-mismatch-rl recipes for users. Multimodal processing supports configurable encoder cache size through --encoder-cache-size, allowing the scheduler to set this parameter independently.

Several optimizations are actively being developed: device-generic streams and events are replacing torch.cuda.Stream/Event with torch.Stream in D2H copy paths to enable non-CUDA accelerator compatibility, while KV offloading work continues with TP-agnostic tracking and community support needed for reviews.

### Stability & Regressions

Issues are ranked by severity. Critical problems include a FlashInfer race condition causing CUDA illegal memory access and GPU hangs in FlashInferMetadataBuilder for non-speculative models since #57214, SM120 CUDA graph crashes with Xid 31 errors during capture, and DSpark adaptive verification IMA failures under concurrent prefill scenarios. High-priority items involve DeepSeek-V4.1 decode throughput issues and MoE performance degradation.

The MoE layer with data-parallel=2 crashes at startup on flashinfer_cutlass due to illegal address errors when scaling from dp=1 to dp=2 with EP16, while DeepSeek-V4-Pro encounters division errors in kv_cache_planning when block_size is set to 64 on HCA with compress_ratio=128. Medium-severity problems include xgrammar whitespace flag handling, GLM47 tool parser dropping unknown functions, ROCm KV scale placement causing _k_scale_cpu and _v_scale_cpu to end up on GPU, and Qwen3.5-0.8B performance on AVX2 CPU backends.

CI and build infrastructure shows NVIDIA nightly failures down from 15 to 6, with extensible KV cache OOMs and H200 LM head problems appearing on H200. ROCm CI tests have a flaky signal state inheritance issue on MI250 that's being addressed in the fix.

For teams using Blackwell hardware, CUDA graph capture, LoRA, FP8, and data-parallel configurations are still experiencing crashes—enforce-eager mode can serve as a temporary workaround. The Rust frontend is progressing toward feature parity but remains incomplete; platform-level request validation currently only executes through Python paths. Quantization support is evolving with Humming replacing Marlin across INT4/INT8 GPTQ/AWQ, FP8, MXFP8, MXFP4, NVFP4, and MXFP6 for both dense and MoE layers, so monitoring #65560 is recommended. ROCm is receiving first-class support with NVFP4 MoE on MI355X and MXFP8 optimizations on MI355X demonstrating strong AMD investment.

Batch invariance documentation now covers RL workflows with links to zero-mismatch-rl recipes at Inferact/zero-mismatch-rl. Spec decode optimizations with top-k/top-p cutoffs in verification should enhance throughput for drafts using restrictive sampling parameters once merged.
</think>


# vLLM 每日简报 — 2026-11-15

## 1. 今日要点

vLLM 社区正通过新的 ROCm 优化（gfx942 上的 NVFP4 MoE、MI355X 上的 MXFP8 GEMM）推进多后端支持，同时在应对 Blackwell SM120 稳定性问题——多个 issue 报告了 RTX PRO 6000 / B300 硬件上的 CUDA 图捕获失败和非法内存访问。批量不变性（batch invariance）功能持续受到高度关注（107 条评论），Rust 前端特性对齐路线图正朝着功能完备状态推进。

---

## 2. 版本发布与破坏性变更

过去 24 小时内无版本发布。

**迁移注意事项：**
- Marlin→Humming 量化内核迁移正在进行 RFC 阶段（[#65560](https://github.com/vllm-project/vllm/issues/65560)）；Humming 现已覆盖 INT4/INT8 GPTQ/AWQ、FP8、MXFP8、MXFP4、NVFP4、MXFP6，支持 NVIDIA 架构上的 dense 层和 MoE 层。
- vLLM CUDA 构建近期已迁移至 LibTorch Stable ABI（[博客](https://vllm.ai/blog/2026-11-06-stabl)）；ROCm 对齐请求已提交（[#67551](https://github.com/vllm-project/vllm/issues/67551)）。

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 说明 | PR / Issue |
|---|---|---|
| **ZAQERIS AXIOM**（`ZaqerisAxiomForCausalLM`） | 79.43B 稀疏 MoE，16 个专家，top-2 路由，Apache 2.0 协议 | [#67412](https://github.com/vllm-project/vllm/issues/67412) |
| **Flint** 在 AMD 上（gfx942、gfx950） | 通过拆分的 `common/nvidia/amd` 布局新增 ROCm 支持 | [#66216](https://github.com/vllm-project/vllm/pull/66216) |
| **Kimi-K3.1-Pro** — B300/GB300 AgentX 预设 | 与 InferenceX 对齐的分解式服务预设 | [#67722](https://github.com/vllm-project/vllm/pull/67722)、[#67719](https://github.com/vllm-project/vllm/pull/67719) |
| **GLM-5.3-Flash** FP4-Local 在 SM120 上 | 社区正推进完整基础支持 | [#66218](https://github.com/vllm-project/vllm/issues/66218) |

---

## 4. 性能与优化

### 已合入 / 审核中

| 领域 | 变更 | 详情 | PR |
|---|---|---|---|
| **投机解码** | 在目标 logit 加载时应用 top-k/top-p 截止阈值 | 将加载时掩码扩展至具有活跃 `top_k` 的行；减少验证中浪费的计算 | [#66534](https://github.com/vllm-project/vllm/pull/66534) |
| **稀疏 MLA Attention** | 在 metadata builder 中预计算 prefill 路由 | 消除每层的 `MLAAttention._use_sparse_mha` 分支判断；三条代码路径统一 | [#67338](https://github.com/vllm-project/vllm/pull/67338) |
| **ROCm / MXFP8** | 在 MI355X 上通过 AITER FlyDSL 内核实现 Dense MXFP8 GEMM | MXFP8 峰值提升 21–31% 或更高；激活量化同步加速 | [#67377](https://github.com/vllm-project/vllm/pull/67377) |
| **ROCm / NVFP4** | 通过 `tl.dot_scaled` 在 gfx942 上实现原生 NVFP4 MoE | 需配合 triton-lang/triton#10979（已于 2026 年 7 月合入） | [#67723](https://github.com/vllm-project/vllm/pull/67723) |
| **DSpark（DeepSeek）** | 5 个 draft 层 + 最终 norm 的单核启动 | ~70 个小内核 → 1 个持久化 FlyDSL 启动；消除 11 次 all-reduce | [#65985](https://github.com/vllm-project/vllm/pull/65985) |
| **批量不变性** | 文档提示链接至 Inferact/zero-mismatch-rl 配方 | 引导用户使用基于 vLLM 批量不变性构建的 RL 训练配方 | [#66550](https://github.com/vllm-project/vllm/pull/66550) |
| **多模态** | 可配置的编码器缓存大小（`--encoder-cache-size`） | 调度器不再从 `max_num_batched_tokens` 推导；`None` 保持原有行为 | [#65534](https://github.com/vllm-project/vllm/pull/65534) |

### 进行中

- **Spec Decode 设备无关流/事件**：在 D2H 拷贝路径中将 `torch.cuda.Stream/Event` 替换为 `torch.Stream`，以支持非 CUDA 加速器（[#67724](https://github.com/vllm-project/vllm/pull/67724)）
- **KV offloading**：TP 无关的 KV offloading 追踪帖活跃中；PR review 需要社区协助（[#61886](https://github.com/vllm-project/vllm/issues/61886)）

---

## 5. 稳定性与回归问题

按严重程度排序：

### 🔴 严重（崩溃 / 数据损坏风险）

| 问题 | 描述 | 临时方案 / 修复 |
|---|---|---|
| **FlashInfer 竞态**（[#61239](https://github.com/vllm-project/vllm/issues/61239)） | 自 #57214（异步调度）以来，非投机模型的 `FlashInferMetadataBuilder` 出现 CUDA 非法内存访问 / GPU 挂死 | 等待修复 |
| **SM120 CUDA 图崩溃**（[#67488](https://github.com/vllm-project/vllm/issues/67488)） | 在 RTX PRO 6000 Blackwell（v0.33.0）上使用 LoRA + CUDA MPS 时捕获 CUDA 图时出现 Xid 31 非法内存访问 | 尚无方案 |
| **DSpark 自适应验证 IMA**（[#59970](https://github.com/vllm-project/vllm/issues/59970)） | 在 `FULL_AND_PIECEWISE` cudagraph 模式下并发 prefill 时出现非法内存访问 | 已关闭；确认修复已合入 |

### 🟠 高（功能性降级）

| 问题 | 描述 | 修复 |
|---|---|---|
| **DeepSeek-V4.1 解码吞吐**（[#56892](https://github.com/vllm-project/vllm/issues/56892)） | 使用 `--enforce-eager` 时 SM120 上解码吞吐极低；CUDA 图不可用 | 申请图捕获修复 |
| **MoE + data-parallel=2 崩溃**（[#67575](https://github.com/vllm-project/vllm/issues/67575)） | `flashinfer_cutlass` MoE 在 `--data-parallel-size 2`（EP16）启动时遇到 `cudaErrorIllegalAddress`；dp=1 时正常 | 调查中 |
| **DeepSeek-V4-Pro block_size 崩溃**（[#67631](https://github.com/vllm-project/vllm/issues/67631)） | 在 HCA `compress_ratio=128` 上 `block_size=64` 时 `kv_cache_planning` 抛出 `ZeroDivisionError` | 调查中 |

### 🟡 中（正确性 / 用户体验）

| 问题 | 描述 | 修复 |
|---|---|---|
| **xgrammar 空格标志被忽略**（[#48765](https://github.com/vllm-project/vllm/issues/48765)） | 请求级别的 `disable_any_whitespace` 被静默忽略 | 配置传参缺口；需要维护者介入 |
| **GLM47 工具解析器丢弃未知函数**（[#67684](https://github.com/vllm-project/vllm/issues/67684)） | 返回空响应，客户端陷入重试循环 | 调查中 |
| **ROCm KV scale 放置错误**（[#67718](https://github.com/vllm-project/vllm/pull/67718)） | `_k_scale_cpu` / `_v_scale_cpu` 最终落在 GPU 上；FP8 KV 缓存路径调用 `float()` 导致失败 | 修复 PR 已提交 |
| **Qwen3.5-0.8B 在 AVX2 CPU 上速度慢**（[#67598](https://github.com/vllm-project/vllm/issues/67598)） | CPU 后端性能回退 | 调查中 |

### CI / 构建

- NVIDIA 夜间测试失败追踪帖 [#67307](https://github.com/vllm-project/vllm/issues/67307)：main 分支 6 个失败（较上次的 15 个有所下降）；extensible KV cache OOM 和 H200 LM head 问题已标记。
- ROCm CI：`test_amd_ci_fast_exit` 在 MI250 上 flaky（信号状态继承问题）；修复在 [#67567](https://github.com/vllm-project/vllm/pull/67567)。

---

## 6. 对应用开发者的意义

1. **Blackwell（SM120）尚未达到生产级稳定性。** 多份报告指出 LoRA、FP8 和 data-parallel 配置下存在 CUDA 图捕获失败和非法内存访问问题。若在 RTX PRO 6000 或 B300 上运行，请在部署前充分测试，并可将 `--enforce-eager` 作为临时降级方案（会显著牺牲吞吐）。

2. **Rust 前端趋于成熟但尚不完整。** 特性对齐路线图（[#44280](https://github.com/vllm-project/vllm/issues/44280)）正在推进；然而 `Platform.validate_request` 当前仅在 Python 路径中执行（已提交修复 PR [#67623](https://github.com/vllm-project/vllm/pull/67623)）。若平台级请求验证是刚需，建议暂留 Python 前端。

3. **量化技术栈正在迁移。** Marlin→Humming 迁移将最终淘汰 Marlin（SM80 时代内核）。若您依赖 Marlin INT4/INT8 内核，请追踪 [#65560](https://github.com/vllm-project/vllm/issues/65560) 以把握迁移时间线。

4. **ROCm 正获得一等公民待遇。** MI355X/gfx942 上的 NVFP4 MoE 和 MI355X 上的 MXFP8 优化表明 AMD 投入力度可观。AMD 用户应关注 [#66699](https://github.com/vllm-project/vllm/issues/66699) 中的上游精度回归测试进展。

5. **批量不变性现已提供 RL 工作流文档。** 若您正在进行强化学习训练（如 GRPO、PPO）且遇到训练-推理不匹配问题，新文档已链接至 [Inferact/zero-mismatch-rl](https://github.com/Inferact/zero-mismatch-rl) 配方。

6. **投机解码优化即将到来。** 验证阶段的 top-k/top-p 截止阈值（[#66534](https://github.com/vllm-project/vllm/pull/66534)）应能提升使用限制性采样参数的 draft 吞吐；合入后可关注。

---

*简报数据来源：github.com/vllm-project/vllm 于 2026-11-15 的活动记录。*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate the content while preserving the Markdown structure
2. Keep all technical terms, URLs, issue numbers, code references as-is
3. Use natural technical Chinese register
4. Output ONLY the translation, no preamble or explanation
5. No markdown fences around the whole output

Let me translate section by section carefully, maintaining the exact structure.
</think>


# SGLang 每日简报 — 2026-11-15

## 1. 今日要点

Rust Server 迁移工作持续推进，多个堆叠的 PR 已添加 Anthropic Messages API、Ollama 路由和生成封装器（#49744、#49743、#49747）。与此同时，SGLang 1.0 发布追踪 issue（#50045）表明项目正在转向稳定性强化——将静默配置变更替换为显式报错，并正式定义兼容性策略。在硬件方面，RTX 50 系列（sm_120）用户在 CUDA 13 wheel 安装后遭遇开箱即用级故障（#49209），亟需关注。

## 2. 版本发布与破坏性变更

过去 24 小时内无新版本发布。

| 项目 | 详情 | 链接 |
|------|------|------|
| **SGLang 1.0 路线图已启动** | 追踪 issue 已开启；重点放在稳定性强化、静默配置变更替换为具名报错，以及定义 1.x 兼容性策略。从 0.5.x 升级可能需要修改代码。 | [#50045](https://github.com/sgl-project/sglang/issues/50045) |

**迁移提示：** SGLang 1.0 将对 0.5.x 用户引入破坏性变更。请密切关注 `main` 分支上的升级说明。

## 3. 新模型与硬件支持

| 功能 | 描述 | 状态 | 链接 |
|------|------|------|------|
| **sm_120（RTX 50 系列）— CUDA 13 故障** | 消费级 Blackwell 在当前 CUDA 13 wheel 安装下无法开箱即用地运行任何模型 | **未解决 Bug** | [#49209](https://github.com/sgl-project/sglang/issues/49209) |
| **可选启用 `toktier` 分词器后端** | RFC：精确增量 + 分块并行 CPU 分词方案 | RFC 阶段 | [#44374](https://github.com/sgl-project/sglang/issues/44374) |
| **SM12x 上 cuTile NVFP4 用于 MiniMax** | 可选启用 FlashInfer W4A4 runner，针对 Blackwell 上的 MiniMax-M3.1 路由专家 | PR 进行中 | [#49795](https://github.com/sgl-project/sglang/pull/49795) |
| **原生 SANA-Sprint 支持** | 新增 Sana Sprint 0.6B 1024px 扩散模型支持 | 已合并 | [#45960](https://github.com/sgl-project/sglang/pull/45960) |
| **Ascend NPU — GDN 混合模型** | Qwen3.8-27B 在 Ascend 910B 上崩溃，除非设置 `--mamba-ssm-dtype bfloat16` | **未解决 Bug** | [#50487](https://github.com/sgl-project/sglang/issues/50487) |

## 4. 性能与优化

### 已合并

| 优化 | 详情 | 链接 |
|------|------|------|
| **HiCache Mamba 主机池控制（AMD）** | 新增 `--hicache-mamba-size-gb` 参数固定 HiCache Mamba 主机池大小，修复检查点未命中的主机 KV 缓存命中问题 | [#47867](https://github.com/sgl-project/sglang/pull/47867) |
| **SANA-Sprint 原生支持** | 修复影响 guidance-distilled 模型的 qk_norm bug | [#45960](https://github.com/sgl-project/sglang/pull/45960) |
| **FLUX.2-klein 文本编码器 RoPE offload 修复** | 在 GPU 上构建 offload 文本编码器的 RoPE 表，使 offload 产生正确输出 | [#50441](https://github.com/sgl-project/sglang/pull/50441) |

### 进行中

| 优化 | 详情 | 目标 | 链接 |
|------|------|------|------|
| **MiniMax-H3 注意力融合残差** | 将注意力门控残差与 norm2 调制进行融合 | B300 上 kernel 时间降低约 93%→? | [#50391](https://github.com/sgl-project/sglang/pull/50391) |
| **通过 Mooncake 实现 Elastic EP 缩容** | 从服务部署中动态回收正在运行的 EP 节点 | 生产环境弹性伸缩 | [#33111](https://github.com/sgl-project/sglang/pull/33111) |
| **Prometheus 指标命名风格可配置** | 新增 `--prometheus-metric-style` 参数，支持 `sglang_` 命名风格，以兼容拒绝冒号的采集器 | 部署灵活性 | [#45551](https://github.com/sgl-project/sglang/pull/45551) |
| **Qwen3-VL 排序优化** | Qwen3-VL 排序任务的并发精确标签评分，仅 prefill 模式 | 吞吐量提升 | [#49569](https://github.com/sgl-project/sglang/issues/49569) |
| **HiCache PP-sync 排水性能优化** | 流水线并行 HiCache 导致各 rank 间步调一致；排水优化正在评审中 | PP 延迟优化 | [#45351](https://github.com/sgl-project/sglang/issues/45351) |

## 5. 稳定性与回归问题

### 严重 / 高优先级

| Bug | 严重程度 | 状态 | 修复 PR |
|-----|----------|------|---------|
| **sm_120（RTX 50）开箱即用故障** — CUDA 13 wheel 无法运行任何模型 | 🔴 严重 | 未解决 | — |
| **QwenImagePipelineConfig 缺少 `sample_sigmas`** — 图像生成时 AttributeError | 🔴 严重 | 未解决 | — |
| **Rust Server `return_hidden_states` 崩溃** — `SGLANG_RUST_SERVER=1` 时服务宕机 | 🔴 严重 | PR 进行中 | [#50555](https://github.com/sgl-project/sglang/pull/50555) |
| **DeepSeek-R1 NVFP4 解码回归（约 4%）** — Blackwell 上 tiny_gemm 路径 | 🟠 高 | 已关闭（未处理） | — |

### 中等优先级

| Bug | 描述 | 状态 | 链接 |
|-----|------|------|------|
| **HiCache 混合 GDN 主机层命中降至零** | 主机 Mamba 池耗尽，而 KV 仍停留在主机；约 3 个长前缀触发 | 未解决 | [#45400](https://github.com/sgl-project/sglang/issues/45400) |
| **sgl-router `/v1/messages` 内联 system role 返回 400** | 内联 `role="system"` 被拒绝；与 engine 行为不一致 | PR 进行中 | [#50435](https://github.com/sgl-project/sglang/pull/50435) |
| **PP + EAGLE/MTP 使用 `--enable-mixed-chunk` 崩溃** | `_pp_spec_rebuild_verify_input` 中 `'EagleDraftInput' object has no attribute 'rids'` | 未解决 | [#42648](https://github.com/sgl-project/sglang/issues/42648) |
| **HiCache 前缀缓存命中率下降** | HiCache + Mooncake 在 L2/L3 容量压力下可复现命中率下降 | 未解决 | [#47481](https://github.com/sgl-project/sglang/issues/47481) |
| **Qwen-VL 图像预处理 OOM** | `torch.cat(processed_images)` 导致峰值内存 2.87 倍增长，加上缓存不释放 | 未解决 | [#49796](https://github.com/sgl-project/sglang/issues/49796) |

### 可观测性 / CI

| 项目 | 状态 | 链接 |
|------|------|------|
| **CI 测试失败追踪** — 0 个失败，5 个 flaky，919 个近期已修复 | 持续跟踪中 | [#17050](https://github.com/sgl-project/sglang/issues/17050) |
| **AMD ROCm 测试失败** — `test_torch_compile_moe.py` 在 HIP stream 上失败 | 未解决 | [#45847](https://github.com/sgl-project/sglang/issues/45847) |

## 6. 对应用开发者的影响

**1. SGLang 1.0 即将到来。** 如果你正在使用 0.5.x，请为迁移工作做好准备。项目团队明确将转向更严格的配置校验——静默回退将变为显式报错。请随着说明文档的上线密切关注升级指南。

**2. Rust Server 功能即将完备。** 包含 Anthropic、Ollama、生成封装器的 15-PR 控制层迁移栈已进入收尾阶段。早期测试者应验证其与 Python Server 的功能一致性；近期 PR 中已包含多个一致性修复。

**3. Blackwell（sm_120）用户：请等待 CUDA 13 wheels 修复。** 如果你使用 RTX 50 系列，当前版本无法开箱即用地运行模型。请关注 [#49209](https://github.com/sgl-project/sglang/issues/49209) 以获取修复进展。

**4. HiCache + 混合模型（GDN/Mamba）需要调优。** AMD 平台上的 Mamba 主机池大小现已可通过 `--hicache-mamba-size-gb` 显式配置。对于混合架构，请验证你的主机内存分配，避免触发 [#45400](https://github.com/sgl-project/sglang/issues/45400) 中描述的零命中场景。

**5. 流水线并行 + HiCache 存在延迟问题。** 如果你正在运行 PP + HiCache，PP-sync 排水机制会导致各 rank 间步调一致的调度。请关注 [#45351](https://github.com/sgl-project/sglang/issues/45351)，等待优化上线。

**6. Qwen-VL 图像输入内存开销较大。** 如果你在多模态模型中遇到 OOM，`torch.cat` + 缓存不释放问题已在 [#49796](https://github.com/sgl-project/sglang/issues/49796) 中追踪。临时方案：限制并发图像预处理或减小 batch size，直至修复合入。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the llama.cpp digest from English to Simplified Chinese. I need to:

1. Translate all the text content into Simplified Chinese
2. Preserve the exact Markdown structure
3. Keep technical terms, URLs, commit hashes, PR numbers, and project names in their original English form
4. Use natural technical Chinese register

Let me translate section by section:

**Title and date**: "llama.cpp Digest — 2026-11-15" → "llama.cpp 速报 — 2026-11-15"

**Today's Highlights**: Keep as-is, just translate the Chinese text.

Let me work through each section:

## Today's Highlights
The project saw significant backend improvements with new quantization support for Qualcomm Hexagon (IQ2_XXS, NVFP4) and a critical bug fix for Qwen2VL FFN weight scales that was producing garbage output. The server-side received major refactoring work including a new slot scheduling system and disk cache implementation, while the batch API deprecation marks an important migration milestone.

项目本日迎来重大后端改进：新增对高通 Hexagon (IQ2_XXS, NVFP4) 量化格式的支持，并修复了 Qwen2VL FFN 权重缩放的关键 bug（此前会产生乱码输出）。服务端进行了大规模重构，包括新的 slot 调度系统和磁盘缓存实现，而旧版 batch API 的弃用则标志着一次重要的迁移里程碑。

## Releases & Breaking Changes

| Commit | Description | Links |
|--------|-------------|-------|
| `b12387` | Fix `ctz64` on 32-bit platforms | [#32273](https://github.com/ggml-org/llama.cpp/pull/32273) |


| `b12385` | **Qwen2VL**: Fix FFN weight scales not being applied (was producing PPL ~1e6 on CUDA, NaN on CPU) | [#32241](https://github.com/ggml-org/llama.cpp/pull/32241) |
| `b12376` | Hexagon: add support for IQ2_XXS and NVFP4 quantization | [#31954](https://github.com/ggml-org/llama.cpp/pull/31954) |

The table lists three commits with their descriptions and associated pull request links. The most significant is the Qwen2VL fix addressing weight scaling issues causing extreme perplexity and NaN values. I'll translate the key details carefully, ensuring technical precision and maintaining the original commit information.

| Commit | Description | Links |
|--------|-------------|-------|
| `b12387` | 修复 32 位平台的 `ctz64` 问题 | [#32273](https://github.com/ggml-org/llama.cpp/pull/32273) |
| `b12385` | **Qwen2VL**: 修复 FFN 权重缩放未生效的 bug（此前在 CUDA 上 PPL 约 1e6，CPU 上为 NaN） | [#32241](https://github.com/ggml-org/llama.cpp/pull/32241) |
| `b12376` | Hexagon: 新增对 IQ2_XXS 和 NVFP4 量化格式的支持 | [#31954](https://github.com/ggml-org/llama.cpp/pull/31954) |

**⚠️ 即将发生的破坏性变更**：

The commits highlight critical fixes and new quantization support, with a focus on improving performance and addressing specific hardware and model-related issues.

The batch API deprecation requires careful migration to the extended batch interface, signaling an important architectural transition in the project's development approach.

New model and hardware support includes advanced language and multimodal models, expanded hardware compatibility, and improved backend technologies like Metal, OpenCL, and Vulkan.

These updates demonstrate significant progress in AI model development, hardware optimization, and cross-platform compatibility. 我正在处理一个技术文档的中文翻译，关注性能优化和新模型支持。系统支持最新的语言模型，如 MiniMax-M3.1 和递归 Ripple 模型。性能优化涵盖了多个技术领域，包括音频处理、GPU 加速和新硬件支持。主要亮点包括 Jinja 模板性能提升、Whisper 音频处理改进，以及跨平台性能增强。文档展示了持续的技术创新和硬件兼容性扩展。 发现 Qwen2VL 模型存在严重输出异常问题，当前已修复。针对不同平台的关键错误状态各异，包括 CUDA、Metal 和 Hexagon 硬件平台的技术挑战。每个高优先级问题都需要谨慎处理，暂时缺乏明确的解决策略。建议相关开发者密切关注并准备应对方案。 系统性性能优化和架构改进正全面展开。API 迁移、服务端调度和 Qwen2VL 修复成为当前重点。统一 KV 缓存和 Metal 优化持续推进，PowerVR 硬件支持标志技术生态持续扩展。

Hardware acceleration strategies now encompass PowerVR Vulkan and Hexagon quantization, signaling comprehensive backend optimization efforts.
</think>


# llama.cpp 速报 — 2026-11-15

## 今日要闻

项目本日迎来重大后端改进：新增对高通 Hexagon (IQ2_XXS, NVFP4) 量化格式的支持，并修复了 Qwen2VL FFN 权重缩放的关键 bug（此前会产生乱码输出）。服务端进行了大规模重构，包括新的 slot 调度系统和磁盘缓存实现，而旧版 batch API 的弃用则标志着一次重要的迁移里程碑。

---

## Releases 与破坏性变更

| Commit | 描述 | 链接 |
|--------|------|------|
| `b12387` | 修复 32 位平台的 `ctz64` 问题 | [#32273](https://github.com/ggml-org/llama.cpp/pull/32273) |
| `b12385` | **Qwen2VL**: 修复 FFN 权重缩放未生效的 bug（此前在 CUDA 上 PPL 约 1e6，CPU 上为 NaN） | [#32241](https://github.com/ggml-org/llama.cpp/pull/32241) |
| `b12376` | Hexagon: 新增对 IQ2_XXS 和 NVFP4 量化格式的支持 | [#31954](https://github.com/ggml-org/llama.cpp/pull/31954) |

**⚠️ 即将发生的破坏性变更：**

- **[#32306](https://github.com/ggml-org/llama.cpp/pull/32306)** — `llama`: 弃用旧版 batch API — 调用方需迁移至 `llama_batch_ext`。迁移指南将通过 [#32163](https://github.com/ggml-org/llama.cpp/pull/32163) 提供。

---

## 新模型与硬件支持

| 类别 | 项目 | 详情 |
|------|------|------|
| **新模型** | MiniMax-M3.1 | 在 [#32301](https://github.com/ggml-org/llama.cpp/pull/32301) 中添加支持，基于 SGLang 的 3D RoPE 进行视觉验证 |
| **新模型** | Recursive Ripple-65B-Preview | [#31904](https://github.com/ggml-org/llama.cpp/pull/31904) 中的 DFlash2 投机解码支持 |
| **新模型** | ZONOS3-Mini TTS | [#32020](https://github.com/ggml-org/llama.cpp/pull/32020) 中的 TTS 模型支持 |
| **硬件** | Qualcomm Hexagon (Snapdragon) | 原生支持 IQ2_XXS 和 NVFP4 量化格式 |
| **硬件** | Imagination PowerVR GPU | [#29315](https://github.com/ggml-org/llama.cpp/pull/29315) 中的初始 Vulkan 后端支持 |
| **后端** | OpenCL | [#32302](https://github.com/ggml-org/llama.cpp/pull/32302) 中的 Flash Attention GMEM kernel 新增 |
| **后端** | Metal | [#30778](https://github.com/ggml-org/llama.cpp/pull/30778) 中 NORM/L2_NORM 的非连续行支持 |

---

## 性能与优化

| 领域 | 变更 | 影响 |
|------|------|------|
| **Jinja 模板** | 减少 value 分配和查找开销（[#32023](https://github.com/ggml-org/llama.cpp/pull/32023)） | 降低模板渲染 CPU 开销 |
| **mtmd/Whisper** | 避免仅含 padding 的音频块（[#30403](https://github.com/ggml-org/llama.cpp/pull/30403)） | 减少音频处理中的无效计算 |
| **Qwen4-Exp** | QSA 解码在统一 KV 缓存中独立于其他序列（[#32247](https://github.com/ggml-org/llama.cpp/pull/32247)） | 长对话场景下 DGX Spark 解码减速降低 37% |
| **Metal/LFM3** | RMS_NORM+MUL+ADD 融合 workaround（[#32296](https://github.com/ggml-org/llama.cpp/pull/32296)） | 吞吐量提升 3.3%（M5 Max 上 293.3 → 302.9 t/s） |
| **Metal/Gemma4** | 放宽 norm 链操作数顺序（[#32300](https://github.com/ggml-org/llama.cpp/pull/32300)） | M5 Max 上提升 35+ tokens/s |
| **CUDA/ggml** | Top-k 行现在按 pick 顺序返回（[#32297](https://github.com/ggml-org/llama.cpp/pull/32297)、[#32299](https://github.com/ggml-org/llama.cpp/pull/32299)） | 修正 attention 排序的正确性 |

---

## 稳定性与回归问题

| 严重度 | 问题 | 状态 | 变通/修复方案 |
|--------|------|------|---------------|
| 🔴 **严重** | Qwen2VL 输出乱码（PPL ~1e6） | **`b12385` 已修复** | 升级至 `b12385+` |
| 🔴 **严重** | CUDA VMM-pool OOM 时硬性 abort，未优雅降级 | **Open** — [#31974](https://github.com/ggml-org/llama.cpp/issues/31974) | 禁用 VMM pool 或减小 batch size |
| 🔴 **严重** | DeepSeek-V4.1-Flash 复用 prompt 时 KV 缓存损坏 | **Open** — [#30944](https://github.com/ggml-org/llama.cpp/issues/30944) | 避免复用 prompt 前缀 |
| 🟠 **高** | Hexagon HMX MUL_MAT 在 Snapdragon 7 Gen 4 上 n≥5 时返回 inf | **Open** — [#29473](https://github.com/ggml-org/llama.cpp/issues/29473) | 暂无已知方案 |
| 🟠 **高** | Metal 上 FP8 KV 缓存 abort（SET_ROWS 错误） | **Open** — [#32270](https://github.com/ggml-org/llama.cpp/issues/32270) | Metal 上避免使用 `-ctk/-ctv f8_e4m3` |
| 🟠 **高** | 并发请求下 CPU→GPU prompt-cache 与统一 KV 产生 stall | **Open** — [#32280](https://github.com/ggml-org/llama.cpp/issues/32280) | 暂时禁用统一 KV |
| 🟡 **中** | GLM-5.3-Flash 生成退化至"hmm hmm hmm"流式输出 | **Open** — [#31875](https://github.com/ggml-org/llama.cpp/issues/31875) | — |
| 🟡 **中** | Vulkan: Intel Arc 140T 回读速度比写入慢 10 倍 | **Open** — [#31900](https://github.com/ggml-org/llama.cpp/issues/31900) | — |

---

## 对应用开发者的影响

1. **Batch API 迁移**：旧版 batch API 的弃用需要提前规划。请关注 [#32163](https://github.com/ggml-org/llama.cpp/pull/32163) 获取迁移指南，并在升级前使用 `llama_batch_ext` 测试推理管线。

2. **服务端 Slot 调度**：[#32154](https://github.com/ggml-org/llama.cpp/pull/32154) 中的新 `server_slot_sched` 系统和 [#32303](https://github.com/ggml-org/llama.cpp/pull/32303) 中的磁盘缓存实现将改善多请求处理能力。预期 prompt 缓存行为将更加可预测。

3. **Qwen2VL 修复**：如果您正在运行 Qwen2VL 模型，请立即升级——此前的构建版本会产生乱码输出。

4. **统一 KV 缓存**：[#32280](https://github.com/ggml-org/llama.cpp/issues/32280) 和 [#32247](https://github.com/ggml-org/llama.cpp/pull/32247) 中的问题表明统一 KV 的工作仍在进行中。请监控长对话场景下的性能表现。

5. **Metal 优化**：融合改进使 Apple Silicon 部署受益；Gemma 和 LFM 模型有明显提速。

6. **新硬件目标**：PowerVR Vulkan 支持和扩展的 Hexagon 量化选项为边缘/嵌入式场景的部署提供了更多灵活性。

---

*数据来源：github.com/ggml-org/llama.cpp • 2026-11-15*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to follow the rules:
1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, code blocks, numbers, and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Use natural technical Chinese, not literal word-for-word translation

Let me translate section by section:

Title: "Ollama Digest — 2026-11-15" → "Ollama 动态速报 — 2026-11-15"

Section 1: Today's Highlights
- "Ollama saw substantial backend activity today" → "今天 Ollama 后端开发活动相当活跃"
- "VRAM accounting and MLX speculative decoding" → "VRAM 显存核算和 MLX 投机解码"
- "ecosystem breadth" → "生态系统广度"
- "long-standing fine-tuning request remains open" → "社区对微调的长期需求仍未得到响应"
- "Intel NPU backend feature was closed" → "Intel NPU 后端功能的相关 issue 已关闭"

Section 2: Releases & Breaking Changes - straightforward translation

Section 3: New Model & Hardware Support
- "Intel NPU Backend (OpenVINO)" → "Intel NPU 后端（OpenVINO）"
- "AI PC" → "AI PC"（keep as-is)
- "Lunar Lake or Arrow Lake" → "Lunar Lake 或 Arrow Lake"
- "format drift" → "格式漂移"
- "structured outputs" → "结构化输出"

Section 4: Performance & Optimization
- "VRAM accounting and GPU splitting fixes" → "VRAM 显存核算与 GPU 分片修复"


- "model eviction" → "模型驱逐"
- "multi-GPU or memory-constrained deployments" → "多 GPU 或显存受限的部署场景"
- "MLX batch speculative verification" → "MLX 批量投机验证"
- "drafting to remain active during concurrent inference requests" → "在并发推理请求期间保持 draft 活跃"
- "MTP, DFlash, and DFlash2 models" → "MTP、DFlash 和 DFlash2 模型"
- "speculative decoding speedups" → "投机解码加速"
- "download chunk robustness" → "下载分块的健壮性"
- "downloadChunk" → keep as-is
- "corporate proxy blocks" → "企业代理拦截"
- "model blob retrieval" → "模型 blob 拉取"

Section 5: Stability & Regressions

**高危问题:**

WSL2 环境下存在 GPU 显存分配异常。在配备 NVIDIA RTX Spark N1X 显卡（HP OmniBook X 14，128GB 统一内存）的设备上，Ollama 在 WSL2 中的显存占用被限制在客户机 RAM 而非 80GB GPU 容量。这主要影响在现代 Snapdragon X Elite 硬件上通过 WSL2 运行 Ollama 的用户。

Windows 长文本处理出现 HTTP 500 错误。

当提示词超过约 70k 字符时，系统在约 19 秒后返回"聊天提示词错误"，并伴随 `WSARecv reset`。在 20 次长对话测试中观察到 12 次失败，复现时重新发送通常能成功。

**中危问题:**

Qwen 解析器的工具调用存在数据损坏风险。`qwen3.5` 和 `qwen3-coder` 解析器根据内容长度和流分块方式可能破坏工具调用参数或丢失调用，这与当前主线版本（v0.40.15）中的 `qwenTagRegex` 行为相关。相关修复 PR（#16398）已提交。

`ollama list` 命令中的摘要长度处理存在漏洞。当模型摘要少于 12 个字符时会触发运行时 panic，已通过添加切片前的长度检查修复。除非使用非标准模型注册表，否则影响范围较小。

Anthropic 工具名称在 `tool_result` 中缺失。转换 `/v1/messages` 响应中的 `tool_result` 块时，`tool` 名称字段未被正确填充，导致聊天模板中出现无名称的工具响应。

**开发建议:**

对于多 GPU 或显存受限的环境，VRAM 核算修复至关重要。

在有碎片化 GPU 显存或多 GPU 系统中，模型加载的可预测性会显著提升，模型驱逐事件也会减少。

Snapdragon X Elite 设备上运行 WSL2 的用户应避免在 WSL2 中进行 GPU 加速推理，HP OmniBook X 系列笔记本电脑目前更适合原生 Linux 或 Windows 版 Ollama。

发送超过 70k token 提示词的 Windows 代理需要实现带指数退避的

重试逻辑来处理间歇性 500 错误。

依赖 `qwen3.5` 或 `qwen3-coder` 进行函数调用的代理应关注 #16398 中的解析器修复，在合并前流式分块边界的结构化输出可靠性可能存在波动。

原生微调支持仍不存在，对微调的请求保持开放状态。

需要微调的团队应评估 Ollama 之外的 LoRA/微调工具。
</think>


# Ollama 动态速报 — 2026-11-15

## 1. 今日要点

今天 Ollama 后端开发活动相当活跃，有两个高影响力的 PR 分别针对 VRAM 显存核算和 MLX 投机解码进行了优化。社区集成板块新增了多个工具（PipesHub、SynapCores、ForgeMind、inference-vitals），反映出生态系统的覆盖面正在持续扩大。Issue 方面，对微调的长期需求仍未得到响应，而 Intel NPU 后端功能的 issue 则已被关闭——这暗示硬件加速路线图可能正在调整。

## 2. 版本更新与破坏性变更

过去 24 小时内无新版本发布，无破坏性变更记录。

## 3. 新模型与硬件支持

- **Intel NPU 后端（OpenVINO）** — Issue [#19535](https://github.com/ollama/ollama/issues/19535) 已于今日关闭。一位用户正式提出了为 Core Ultra "AI PC" 芯片添加 Intel NPU 支持的请求，指出在 Ollama 运行期间 NPU 处于闲置状态。Issue 的关闭意味着请求已被受理，但目前没有 linked 实现时间表。针对 Intel Lunar Lake 或 Arrow Lake 硬件的基础设施团队应持续关注此事的后续进展。
- **Qwen 3.6 工具调用容错** — PR [#16398](https://github.com/ollama/ollama/pull/16398) 更新了 `qwen3.5` 解析器，以处理 `qwen3.6:27b` 和 `qwen3-coder` 变体中的格式漂移——模型有时会发出早期训练代次的工具调用封装。这提高了依赖 Qwen 变体结构化输出的 Agent 的稳定性。

## 4. 性能与优化

- **VRAM 显存核算与 GPU 分片修复** — PR [#19632](https://github.com/ollama/ollama/pull/19632) 修复了导致模型驱逐错误、加载失败和 GPU 过度分散的关键 VRAM 误算问题。该修复同时解决了 Issue [#19463](https://github.com/ollama/ollama/issues/19463)、[#18679](https://github.com/ollama/ollama/issues/18679)、[#18349](https://github.com/ollama/ollama/issues/18349) 和 [#16599](https://github.com/ollama/ollama/issues/16599)。对于多 GPU 或显存受限的部署场景，此 PR 具有高优先级，值得密切关注。
- **MLX 批量投机验证** — PR [#19663](https://github.com/ollama/ollama/pull/19663) 使得 Draft 模型在并发推理请求期间保持活跃，从而允许 MTP、DFlash 和 DFlash2 模型在多客户端场景下维持投机解码的加速效果。此 PR 建立在 [#19197](https://github.com/ollama/ollama/pull/19197) 之上。
- **下载分块健壮性** — PR [#19698](https://github.com/ollama/ollama/pull/19698) 在 `downloadChunk` 中添加了 HTTP 状态验证，以在遇到不可重试错误（例如企业代理拦截）时中止下载。这避免了模型 blob 拉取过程中静默失败的问题。

## 5. 稳定性与回归问题

**高危：**
- **WSL2 GPU 显存容量限制** — Issue [#19519](https://github.com/ollama/ollama/issues/19519) 报告，在配备 NVIDIA RTX Spark N1X 显卡（HP OmniBook X 14，128 GB 统一内存）的笔记本电脑上，Ollama 在 WSL2 下仅卸载了应该装入 GPU 显存的一小部分模型，实际以客户机 RAM 而非 80 GB GPU 分配作为上限。这影响了在现代 Snapdragon X Elite 硬件上通过 WSL2 运行 Ollama 的用户。
- **Windows 长提示词 500 错误** — Issue [#19696](https://github.com/ollama/ollama/issues/19696) 在超过约 70k 字符的提示词场景下，约 19 秒后触发间歇性 HTTP 500 "chat prompt error"，伴随 `WSARecv reset`。在 Windows 平台上 20 次长对话测试中观察到 12 次失败。立即重发通常能成功。

**中危：**
- **Qwen 解析器工具调用损坏** — Issue [#19694](https://github.com/ollama/ollama/issues/19694) 报告 `qwen3.5` 和 `qwen3-coder` 解析器会根据内容和流分块情况损坏工具调用参数或丢失调用。根本原因与当前 `main` 分支（v0.40.15）中 `qwenTagRegex` 的行为相关。修复 PR（[#16398](https://github.com/ollama/ollama/pull/16398)）已提交。
- **ollama list 中摘要长度 panic** — PR [#14251](https://github.com/ollama/ollama/pull/14251) 修复了当模型摘要少于 12 个字符时发生的运行时 panic。修复方式是在切片前添加长度检查。除非使用非标准模型注册表，否则影响范围较小。

**低危：**
- **tool_result 中 Anthropic 工具名称** — PR [#19588](https://github.com/ollama/ollama/pull/19588) 确保在转换 `/v1/messages` 响应中的 `tool_result` 块时正确填充 `tool` 名称字段。之前导致聊天模板中工具响应缺少名称。

## 6. 对应用开发者的影响

- **多 GPU / 显存受限环境**： [#19632](https://github.com/ollama/ollama/pull/19632) 中的 VRAM 显存核算修复至关重要。如果你运行 Ollama 的系统存在碎片化 GPU 显存或多 GPU 配置，一旦此 PR 合入，模型加载将更加可预测，异常的模型驱逐事件也会减少。
- **Snapdragon X Elite 上的 WSL2 用户**：在该硬件平台上，请避免在 WSL2 下运行 Ollama 进行 GPU 加速推理。HP OmniBook X 级笔记本电脑目前使用原生 Linux 或 Windows 版 Ollama 构建更为可靠，直至显存容量限制问题（[#19519](https://github.com/ollama/ollama/issues/19519)）得到解决。
- **Windows 长上下文 Agent**：如果你的 Agent 流水线在 Windows 上发送超过 70k token 的提示词，请实现带指数退避的重试逻辑以应对间歇性 500 错误（[#19696](https://github.com/ollama/ollama/issues/19696)）。
- **基于 Qwen 的工具调用**：如果你依赖 `qwen3.5` 或 `qwen3-coder` 进行函数调用 Agent，请关注 [#16398](https://github.com/ollama/ollama/pull/16398) 中的解析器修复。在该 PR 合入之前，结构化输出的可靠性可能因流式分块边界而异。
- **微调功能仍未出现**：原生微调支持的特性请求（[#156](https://github.com/ollama/ollama/issues/156)，31 个赞同，22 条评论）仍然开放，没有近期实现迹象。需要微调能力的团队应评估 Ollama 之外的 LoRA/微调工具链。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate an English technical report about LiteLLM into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, etc.
3. Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Use natural technical Chinese register - not literal word-for-word

Let me translate this carefully:

**Title:** LiteLLM Digest — 2026-11-15

"Highlights" → "今日要闻"
"Releases & Breaking Changes" → "版本发布与破坏性变更"
"New Model & Hardware Support" → "新模型与硬件支持"
"Performance & Optimization" → "性能与优化"
"Stability & Regressions" → "稳定性与回归问题"
"What This Means for Application Developers" → "对应用开发者的影响"

Let me work through the content section by section:

---

## 1. Today's Highlights

"Today's Highlights" → "今日要闻"

"The LiteLLM team is accelerating its Rust migration strategy with new callbacks for Prometheus metrics, dynamic rate limiting, and S3 logging."

LiteLLM 团队正在加速 Rust 迁移战略，推出新的 Prometheus 指标回调、动态限流回调和 S3 日志 Rust 回调。

"Three regressions from recent stable releases (v1.107.0, v1.108.0) are generating active reports: streaming cancellation failures, MCP protocol blocking, and OpenRouter trailer formatting."

近期稳定版（v1.107.0、v1.108.0）中存在三个回归问题，目前社区反馈活跃：流式取消失败、MCP 协议阻塞，以及 OpenRouter trailer 格式化问题。
 
The priority-queue controller for provider congestion is under active development to improve multi-tenant throughput under load. They're building a congestion management system that prioritizes queue handling across multiple tenants, which should help maintain performance when the system is under stress.

---

## 2. Releases & Breaking Changes

"Releases & Breaking Changes" → "版本发布与破坏性变更"

The table covers versions 1.110.0-rc.3, 1.108.9, and 1.107.0-rc.4 with their respective change types and descriptions about Docker image signing with cosign.

There's a configuration deprecation note where PR #51869 adds runtime warnings when configs load removed accounting settings like `accounting_capture` and `accounting_sync_ack`. These settings are now no-ops but still silently accepted. The new model support section lists GLM-5.1 through Z.AI provider via PR #27782.

For performance improvements, I'm looking at several PRs that are porting critical systems to Rust: Prometheus metric logic (PR #51541), dynamic rate limiter v3 (PR #51540), and parallel request limiter v3 (PR #51537). There's also a priority-queue controller being developed for router congestion management across multiple PRs (#51892, #51883). The API endpoint `/team/info` is getting pagination improvements for member rosters to handle large teams more efficiently, and the S3 logger is being refactored with a Rust backend replacing the Python implementation.

For stability, there are several high and medium severity regressions across versions 1.107.0 and later, including streaming cancellation issues, MCP protocol blocking, OpenRouter streaming format problems, and missing spend logs. Many of these fixes are being backported into the 1.110.0 release candidate. I'm consolidating the remaining action items into a cohesive response. The MCP server issues with legacy subscription clients like Open WebUI are causing significant delays, so downgrading to v1.106.x or waiting for the v1.110 RC is recommended. The Rust-based Prometheus logger is now the only supported implementation, so operators need to migrate their `LITELLM_PROMETHEUS_LOGGER` configuration accordingly. There's also a critical issue where upstream calls aren't being properly terminated when clients disconnect before the first SSE chunk arrives in v1.107.0+, which could lead to resource leaks and unexpected costs for long-running responses. Additionally, Gemini image requests aren't generating `SpendLogs` entries, making them untracked in the proxy's billing system until a fix is deployed. Finally, key-level model access controls are being enhanced to support exclusion-based policies through PR #50333.
</think>


# LiteLLM Digest — 2026-11-15

## 1. 今日要闻

LiteLLM 团队正在加速 Rust 迁移战略，新上线了 Prometheus 指标回调、动态限流回调和 S3 日志 Rust 回调。近期稳定版（v1.107.0、v1.108.0）存在三个回归问题，目前社区反馈活跃：流式取消失败、MCP 协议阻塞，以及 OpenRouter trailer 格式化问题。与此同时，路由拥塞的优先级队列控制器正在积极开发中，旨在提升多租户场景下的吞吐能力。

---

## 2. 版本发布与破坏性变更

| 版本 | 类型 | 关键变更 |
|---------|------|------------|
| [v1.110.0-rc.3](https://github.com/BerriAI/litellm/releases/tag/v1.110.0-rc.3) | RC | Docker 镜像现已启用 cosign 签名（密钥 `e82a3c6`）；向后移植 SpendLogs 兼容性修复窗口 |
| [v1.108.9](https://github.com/BerriAI/litellm/releases/tag/v1.108.9) | Stable | 追溯应用 cosign 签名 |
| [v1.107.0-rc.4](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-rc.4) | RC | 审阅通过 #5171 合并；发布为 PyPI `1.107.0rc4` |

**配置弃用：** PR [#51869](https://github.com/BerriAI/litellm/pull/51869) 对配置中加载已移除的计费设置（`accounting_capture`、`accounting_sync_ack`）添加运行时警告。这些设置当前已不再生效，但会被静默接受。

---

## 3. 新模型与硬件支持

| 项目 | 提供商 | 说明 |
|------|----------|-------|
| `glm-5.1` | Z.AI | PR [#27782](https://github.com/BerriAI/litellm/pull/27782) 为 GLM 最新模型添加定价信息，通过 Z.AI 的 Anthropic 兼容端点接入 |

过去 24 小时内无新硬件（GPU/Metal/CPU）或量化格式相关更新。

---

## 4. 性能与优化

| PR | 领域 | 变更 |
|----|------|--------|
| [#51541](https://github.com/BerriAI/litellm/pull/51541) | 可观测性 | Prometheus 指标逻辑替换为 Rust 回调（需设置 `LITELLM_RUST_PROMETHEUS=1`）；Python 实现已移除 |
| [#51540](https://github.com/BerriAI/litellm/pull/51540) | 限流 | `dynamic_rate_limiter_v3` 移植至 Rust 回调，遵循 CustomLoggerV2 契约 |
| [#51537](https://github.com/BerriAI/litellm/pull/51537) | 限流 | 并行请求限流器 v3 移植至 Rust；为 #51540 提供基础能力 |
| [#51892](https://github.com/BerriAI/litellm/pull/51892) / [#51883](https://github.com/BerriAI/litellm/pull/51883) | Router | 路由拥塞优先级队列控制器：遇 429/529 时对请求进行排队，按 P0 排序；Redis 协调的恢复探针 |
| [#51885](https://github.com/BerriAI/litellm/pull/51885) | API | `/team/info` 现对成员列表进行分页，而非加载完整列表（25k 成员团队从 3 s 降至 <100 ms） |
| [#51893](https://github.com/BerriAI/litellm/pull/51893) | 日志 | S3 日志器重构：`s3_v3.py`（Rust 后端）移至 `s3_v2` 槽位；Python 兼容层已删除 |

---

## 5. 稳定性与回归问题

| 严重性 | 问题 | 影响版本 | 状态 |
|----------|-------|-------------------|--------|
| **高** | 客户端提前断开时流式请求未被取消（`_aread_first_chunk` 变更的回归） | 1.107.0+ | 待处理 — [#51393](https://github.com/BerriAI/litellm/issues/51393) |
| **高** | MCP `tools/list` 在遗留订阅监听器（`notifications/initialized`）上阻塞 18–50 秒 | 1.108.0 | 待处理 — [#50065](https://github.com/BerriAI/litellm/issues/50065) |
| **中** | OpenRouter 流式响应在 usage 块前发出空的 post-finish choice | 1.108.0 | 待处理 — [#50156](https://github.com/BerriAI/litellm/issues/50156) |
| **中** | Gemini 图片请求返回 200 OK 但未写入 `SpendLogs` 行 | 多个版本 | 待处理 — [#49567](https://github.com/BerriAI/litellm/issues/49567) |
| **中** | `sanitize_tool_use_ids_in_anthropic_messages` 导致 vLLM/Kimi K2.7 多轮工具调用异常 | 1.91.0+ | 待处理 — [#32214](https://github.com/BerriAI/litellm/issues/32214) |
| **中** | 通过 Bedrock 调用流式 `/v1/messages` 时偶发约 16.7 s TTFB | 多个版本 | 待处理 — [#38689](https://github.com/BerriAI/litellm/issues/38689) |
| **低** | Model Armor guardrail 绕过 Responses API（`input` 与 `messages` 字段不匹配） | 1.106.6 | 待处理 — [#49909](https://github.com/BerriAI/litellm/issues/49909) |

**修复向后移植中：** [#51894](https://github.com/BerriAI/litellm/pull/51894) 将 #51868、#51869 和 #51884 合并至 `rc/1.110.0`，包含 SpendLogs 兼容性和持久计费修复。

---

## 6. 对应用开发者的影响

1. **升级建议：** 若你正在使用 v1.108.x 并通过遗留订阅客户端（如 Open WebUI）连接 MCP 服务器，`tools/list` 预计会有 18–50 秒的卡顿。建议降级至 v1.106.x 或等待 v1.110 RC 版本的修复。

2. **可观测性迁移：** 基于 Rust 的 Prometheus 日志记录器现在是唯一实现方式。使用 `LITELLM_PROMETHEUS_LOGGER=true` 的运维人员应测试新回调；该版本已删除 Python 类实现。

3. **流式可靠性：** 在 v1.107.0+ 中，若客户端在首个 SSE chunk 到达前断开连接，上游调用将不再被中止。这可能导致长耗时生成任务的资源持续占用和额外费用。

4. **成本追踪缺口：** Gemini 图片请求通过代理转发后不写入 `SpendLogs` 行。若你依赖 LiteLLM 日志进行计费归因，这些请求在修复上线前将处于不可见状态。

5. **全新访问控制：** PR [#50333](https://github.com/BerriAI/litellm/pull/50333) 引入 key 级别的 `disallowed_models`，支持基于排除规则的模型访问策略（当需要在大型模型集群中管理访问权限、且维护完整白名单成本较高时尤为有用）。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate a technical digest about Unsloth AI from English to Simplified Chinese. I need to follow the rules:
- Output ONLY the translation, no preamble or explanation
- Preserve Markdown structure exactly
- Keep URLs, version tags, issue numbers as-is
- Use natural technical Chinese register

Let me translate section by section, maintaining the structure and making it read naturally in Chinese.

Key terminology I should use consistently:
- "unsloth" stays as-is (project name)
- "release" → 发布/版本
- "issues" → 问题/议题
- "PR" → PR (pull request, keep as-is or use 拉取请求)
- "CUDA" stays as-is
- "ROCm" stays as-is
- "MI300X" stays as-is
- "Flash Attention" → Flash Attention (keep English, it's a proper noun)
- "LoRA/QLoRA" → LoRA/QLoRA (keep as-is, standard terms)
- "FSDP2" stays as-is
- "Tensor Parallel" → 张量并行
- "Pipeline Parallel" → 流水线并行
- "KV cache" → KV 缓存
- "speculative decoding" → 投机解码
- "draft acceptance rate" → 草稿接受率
- "step time" → 单步耗时
- "throughput" → 吞吐量
- "tok/s" → tok/s (token per second, keep)
- "t/s" → t/s (token per second, keep)

Let me structure this carefully:

---

## 1. 今日要点

Unsloth 合入了 DeepSeek-V4.1 的原生支持，包括稀疏注意力、词组表（engram/n-gram tables）和 fp8/MXFP4 量化，同时为 Qwen3.8-Flash-Next 和 DeepSeek-V4.1 添加了多维度并行（FSDP2、TP、PP）。

语音模式通过三个分层 PR 持续推进。ROCm 稳定性仍有问题：MI300X（gfx942）在 Flash Attention 反向传播中出现 stride 断言错误，需要降级到 MATH 实现；gfx1151 上 GDN 因果 conv1d 的 HIP 门控导致单步耗时增加 3.1 倍。

---

## 2. 发布与重大变更

过去 24 小时无新版本发布。v0.1.917-beta (2026.11.4) 为已知活跃版本。

---

## 3. 新模型与硬件支持

DeepSeek-V4.1 已在 CUDA/ROCm 上原生支持，集成稀疏注意力、词组表和 fp8/MXFP4 加载。Qwen3.8-Flash-Next (qwen4_exp) 完整支持 FSDP2、张量并行和流水线并行。ROCm 7.14 / MI300X (gfx942) 正在测试中，但 Flash Attention 反向传播中的 stride 断言阻止了生产使用。AMD gfx1151 (ROCm) 的 GDN 因果 conv1d 降级到 MIOpen，单步耗时增加 3.1 倍。混合线性注意力打包通过精确性检查但在 gfx1151 上没有净加速。AMD RX 9070 XT (ROCm) 与 Cloudflare 移动同步问题相关。NVFP4/MXFP4 量化在 CUDA 上修复了非量化张量加载和分组线性层排除在 QAT 之外的问题。

---

## 4. 性能与优化

QAT 旁路修复解决了缓存解码中的假量化问题，静态缓存修复移除了与调用方 past_key_values 冲突的无条件 static 实现。FSDP2 恢复前撤销 Zoo 的标准专家 LoRA 布局以修复专家-LoRA 适配器恢复崩溃。NVFP4/MXFP4 检查点加载防止了非量化张量的随机初始化并保持分组线性层排除在 QAT 之外。Linux 桌面 GPU 利用率在窗口不聚焦时下降 300% 的 tok/s。混合线性注意力打包在 gfx1151 上通过精确性检查但没有净加速（步骤数减半，但每步成本约翻倍）。GDN 因果 conv1d ROCm HIP 门控在 gfx1151 上降级到 MIOpen 导致 3.1 倍的单步耗时回归。

---

## 5. 稳定性与回归

### 🔴 严重（阻止生产）

ROCm 7.14 / MI300X (gfx942) 在 Flash Attention 反向传播中出现 stride 断言，需要 MATH 降级。Qwen3.8-Flash-Next UD 3.1 GGUFs 的 MTP 草稿接受率在生产温度下从约 74% 下降到 56–66%（Ryzen AI Max+ 395）。MTP 在 llama.cpp b12340-mix-6186f42 后停止工作。v0.1.917 强制使用 mmap 即使设置了 --load-mode none，导致过多 RAM/SSD 使用。

### 🟠 高（行为退化）

llama.cpp CUDA 升级后 Qwen3.8 27B 吞吐量从 60 t/s 下降到 38 t/s。GDN 因果 conv1d HIP 门控在 gfx1151 上导致 3.1 倍的单步耗时回归，尽管 Triton 内核正确。混合线性注意力打包在 gfx1151 上没有净加速。

v0.1.917 在 Windows 11 上导致 GPU 闲置后无法恢复推理，只有"恢复安装"才能恢复。Windows 11 用户应延迟更新或固定到 v0.1.916 直到补丁发布。

### 🟡 中等（用户体验/轻微）

iOS"添加到主屏幕"显示"U"文本图标而非 logo，修复 PR 已合并。SSL 证书/密钥无法通过配置文件或环境变量设置，功能请求待处理。Linux/Intel 上最小化 Unsloth Desktop GUI 时损失 300% tok/s。

---

## 6. 这对应用开发者意味着什么

1. DeepSeek-V4.1 现已正式支持。

LoRA/QLoRA 训练不再依赖不稳定的社区 transformers 移植，应迁移检查点并测试 fp8 和 MXFP4 格式。DeepSeek-V4.1 和 Qwen3.8-Flash-Next 的多 PD 并行训练已可用，冻结的 n-gram/engram 表处理正确。语音模式接近完成，三个堆叠的 PR 即将合并，应为音频代理准备集成点。

2. ROCm 7.14 / MI300X 应避免用于生产推理。

Flash Attention 反向传播中的 stride 断言是正确性阻止因素，AMD Instinct MI300X 用户应保持在 ROCm 7.13 或更早版本直到 MATH 降级路径通过验证。

3. Qwen3.8-Flash-Next MTP 用户应预期投机解码性能下降。

UD 3.1 GGUFs 的草稿接受率在生产温度下为 56–66% 而非 74%，应推迟部署直到 3.1 匹配的 MTP 头发布。

4. v0.1.917 在 Windows 上不稳定。

强制 mmap 回归和 GPU 闲置后更新问题影响 Windows 11 部署，应延迟更新或固定到 v0.1.916。

5. generate() 中的静态缓存使用已更改。

修复移除了自动 cache_implementation = "static" 赋值，如果依赖该隐式行为与外部 KV 缓存管理，应验证工作负载仍正常运行。

6. 深度学习优化需要平衡多维度性能指标。

投机解码效率受 MTP 配置影响显著，Windows 平台稳定性问题需要版本控制策略，缓存实现变更可能影响依赖隐式行为的代码路径。
</think>


# Unsloth 速报 — 2026-11-15

## 1. 今日要点

Unsloth 合入了 **DeepSeek-V4.1** 的原生支持，包括稀疏注意力、词组表（engram/n-gram tables）以及 fp8/MXFP4 量化，同时为 Qwen3.8-Flash-Next 和 DeepSeek-V4.1 添加了多维度并行（FSDP2、TP、PP）。语音模式通过三个分层 PR 持续推进，目标是无手操作的语音助手、思考填充和轮次检测。与此同时，ROCm 稳定性问题依然存在：MI300X（gfx942）在 Flash Attention 反向传播中出现 stride 断言错误，需要降级到 MATH 实现；gfx1151 上 GDN 因果 conv1d 的 HIP 门控导致单步耗时增加 3.1 倍。

---

## 2. 发布与重大变更

| 项目 | 详情 | 链接 |
|------|------|------|
| **无新发布** | 过去 24 小时零个正式版本 | — |

**当前已知活跃 Beta：** v0.1.917-beta（包 2026.11.4）— 见 §5 回归问题。

---

## 3. 新模型与硬件支持

| 模型 / 架构 | 后端 | 说明 |
|----------------------|---------|------|
| **DeepSeek-V4.1**（原生） | CUDA / ROCm | 稀疏注意力、engram/n-gram 表、fp8 / MXFP4 发布加载；LoRA/QLoRA 不再依赖社区版 transformers 移植 | [#17778](https://github.com/unslothai/unsloth/pull/17778) |
| **Qwen3.8-Flash-Next** (`qwen4_exp`) | CUDA / ROCm | 完整支持 FSDP2、张量并行和流水线并行；冻结的 engram/n-gram 表始终不被分片 | [#17785](https://github.com/unslothai/unsloth/pull/17785) |
| **ROCm 7.14 / MI300X** (gfx942) | ROCm | 正在测试；`_scaled_dot_product_flash_attention_backward` 中 stride 断言阻止生产使用（见 §5） | [#17548](https://github.com/unslothai/unsloth/issues/17548) |
| **AMD gfx1151**（ROCm） | ROCm | GDN 因果 conv1d 降级到 MIOpen，单步耗时增加 3.1 倍；混合线性注意力打包通过精确性检查但无净加速 | [#17734](https://github.com/unslothai/unsloth/issues/17734)，[#17738](https://github.com/unslothai/unsloth/issues/17738) |
| **AMD RX 9070 XT**（ROCm） | ROCm | 伴随 Cloudflare 移动端同步问题上报 | [#17689](https://github.com/unslothai/unsloth/issues/17689) |
| **NVFP4 / MXFP4** 量化 | CUDA | 修复已合入：防止未量化张量在压缩检查点下被重新初始化；分组 Linears 不参与 QAT | [#17775](https://github.com/unslothai/unsloth/pull/17775) |

---

## 4. 性能与优化

| 领域 | 变更 | 影响 | 链接 |
|------|--------|--------|------|
| **QAT 在缓存解码中绕过** | 修复 `FastModel.generate()` 在缓存解码中应用伪量化，并修复 batch-1 `lm_head` 短路逻辑 | 正确性——batch-1 → batch-2 的 logits 在修复前可能不一致 | [#17746](https://github.com/unslothai/unsloth/pull/17746) |
| **`generate()` 中的静态缓存** | 移除无条件设置 `cache_implementation = "static"` 的逻辑，该设置与调用方传入的 `past_key_values` 及辅助解码冲突 | 修复调用方自行管理 KV 缓存时崩溃的问题 | [#17784](https://github.com/unslothai/unsloth/pull/17784) |
| **FSDP2 断点续训** | 加载检查点前撤销 Zoo 的标准 expert LoRA 布局 | 修复 `UNSLOTH_FSDP2=1` 下 expert-LoRA 适配器断点续训崩溃 | [#17780](https://github.com/unslothai/unsloth/pull/17780) |
| **NVFP4/MXFP4 检查点加载** | 防止未量化张量被随机初始化；保持分组 Linears 不参与 QAT | 压缩检查点下的训练正确性 | [#17775](https://github.com/unslothai/unsloth/pull/17775) |
| **Linux 桌面 GPU 利用率** | 最小化 GUI 后恢复 300% tok/s（Intel B70） | 用户体验——窗口失去焦点时性能骤降 | [#17722](https://github.com/unslothai/unsloth/issues/17722) |
| **ROCm 混合线性注意力打包** | 可通过 `UNSLOTH_EXPERIMENTAL_HYBRID_PACKING=1` 开启，通过精确性检查 | **gfx1151 上无净加速**（步数减半，但每步成本约翻倍） | [#17738](https://github.com/unslothai/unsloth/issues/17738) |
| **GDN 因果 conv1d ROCm HIP 门控** | gfx1151 上回退到 MIOpen | **单步耗时增加 3.1 倍**——Triton 内核正确，但 ROCm 门控路径有问题 | [#17734](https://github.com/unslothai/unsloth/issues/17734) |

---

## 5. 稳定性与回归

按严重程度排序：

### 🔴 严重（阻止生产）

| 问题 | 描述 | 临时方案 / 修复 PR |
|-------|-------------|---------------------|
| [#17548](https://github.com/unslothai/unsloth/issues/17548) | ROCm 7.14 / MI300X (gfx942)：`_scaled_dot_product_flash_attention_backward` 中 stride 断言——需降级到 MATH 实现 | 暂无修复 PR |
| [#17402](https://github.com/unslothai/unsloth/issues/17402) | Qwen3.8-Flash-Next UD 3.1 GGUFs：MTP 投机草稿接受率在生产温度下从约 74% 下降至 56–66%（Ryzen AI Max+ 395） | 等候匹配的 3.1 MTP 头 |
| [#17733](https://github.com/unslothai/unsloth/issues/17733) | llama.cpp b12340-mix-6186f42 后 MTP 停止工作 | 暂无修复 PR |
| [#17605](https://github.com/unslothai/unsloth/issues/17605) | **v0.1.917** 强制 `mmap` 即使指定了 `--load-mode none`，导致 RAM/SSD 占用过高 | 暂无修复 PR |

### 🟠 高（行为退化）

| 问题 | 描述 | 临时方案 / 修复 PR |
|-------|-------------|---------------------|
| [#17728](https://github.com/unslothai/unsloth/issues/17728) | llama.cpp CUDA 升级后：Qwen3.8 27B 吞吐量从 60 t/s 降至 38 t/s | 调查中 |
| [#17734](https://github.com/unslothai/unsloth/issues/17734) | gfx1151 上 GDN 因果 conv1d HIP 门控开销 3.1× | Triton 内核正确；需修复 ROCm 门控路径 |
| [#17738](https://github.com/unslothai/unsloth/issues/17738) | 混合线性注意力打包在 gfx1151 上无净加速 | 需进一步调优或改进门控 |
| [#17663](https://github.com/unslothai/unsloth/issues/17663) | 引擎更新后 GPU 闲置——只有"恢复安装"才能恢复推理（v0.1.917） | 暂无修复 PR |

### 🟡 中（用户体验 / 轻微）

| 问题 | 描述 | 修复 PR |
|-------|-------------|--------|
| [#17773](https://github.com/unslothai/unsloth/issues/17773) | iOS"添加到主屏幕"显示"U"文本图标而非 logo | [#17776](https://github.com/unslothai/unsloth/pull/17776) 已合入 |
| [#17640](https://github.com/unslothai/unsloth/issues/17640) | 无法通过配置文件或环境变量设置 SSL 证书/密钥 | 功能请求开放中 |
| [#17722](https://github.com/unslothai/unsloth/issues/17722) | Linux/Intel 上最小化 Unsloth Desktop GUI 时损失 300% tok/s | 临时方案：在设置 → 外观中切换一次 |

---

## 6. 这对应用开发者意味着什么

1. **DeepSeek-V4.1 现已是一等公民。** 如果你依赖 Unsloth 做微调或推理，原生移植（`unsloth/models/deepseek_v41`）替代了脆弱的社区版 transformers 移植方案。迁移检查点并在 fp8 和 MXFP4 格式下测试 LoRA/QLoRA 训练——今日已合入压缩检查点加载的修复。

2. **训练场景的多 PD 并行已可用。** Qwen3.8-Flash-Next 和 DeepSeek-V4.1 的 FSDP2 + TP + PP 已合入。冻结 n-gram/engram 表的处理是正确的，这对检索增强模型的分布式训练至关重要。

3. **语音模式接近完成。** 三个堆叠的 PR（[#12384](https://github.com/unslothai/unsloth/pull/12384)、[#14084](https://github.com/unslothai/unsloth/pull/14084)、[#17069](https://github.com/unslothai/unsloth/pull/17069)）即将合入。如果你在构建具备语音能力的 agent，现在可以开始准备与 audio.cpp 流水线的集成点。

4. **今日 ROCm 7.14 / MI300X 不适合生产推理。** Flash Attention 反向传播中的 stride 断言是正确性阻断问题。如果你使用 AMD Instinct MI300X，请保持在 ROCm 7.13 或更早版本，直到 MATH 回退路径完成验证。

5. **Qwen3.8-Flash-Next MTP 用户：投机解码效果会退化。** 生产温度下草稿接受率为 56–66%，而基线是 74%。在匹配的 3.1 MTP 头发布前，请暂缓在投机解码流水线中部署 UD 3.1 GGUFs。

6. **v0.1.917 在 Windows 上不稳定。** 强制 mmap 回归和引擎更新后 GPU 闲置问题影响 Windows 11 部署。如果你使用 Windows，请推迟更新或锁定在 v0.1.916，直到有补丁版本发布。

7. **`generate()` 中的静态缓存行为已变更。** [#17784](https://github.com/unslothai/unsloth/pull/17784) 中的修复移除了自动 `cache_implementation = "static"` 赋值。如果你依赖该隐式行为且自行管理外部 KV 缓存，请验证你的工作负载仍正常。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*