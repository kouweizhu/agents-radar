# AI 基础设施日报 2026-11-22

> 生成时间: 2026-11-22 02:35 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this technical report into Simplified Chinese. I need to follow the rules carefully:
- Output ONLY the translation, no preamble or explanation
- Preserve the Markdown structure exactly
- Keep URLs, numbers, dates, project names, etc. verbatim
- Use natural technical Chinese register

Let me translate this carefully, section by section.

Title: AI Inference Infrastructure — Cross-Project Digest
Date: 2026-11-22

I need to be careful with technical terms and keep them consistent. Let me translate this now.

Key terms I need to handle:
- Inference infrastructure - 推理基础设施
- Cross-project comparison - 跨项目对比
- digest - 摘要/简报
- serving engine - 服务引擎
- local runtime - 本地运行时
- KV cache - KV 缓存
- speculative decoding - 投机解码/推测解码
- quantization - 量化
- MoE (Mixture of Experts) - MoE (混合专家模型)
- LoRA - LoRA
- Blackwell (SM120) - Blackwell (SM120)
- ROCm - ROCm
- CUDA - CUDA
- tensor parallelism - 张量并行
- prefix caching - 前缀缓存
- batch/批处理
- kernel fusion - 算子融合


- distributed serving - 分布式服务

Now I'll begin the translation, maintaining the formal technical register and ensuring all terminology is consistent throughout.
</think>


# AI 推理基础设施 — 跨项目简报
**日期：2026-11-22 | 面向受众：基础设施工程师与技术决策者**

---

## 1. 生态概览

AI 推理基础设施技术栈正处于多线并行的收敛与分化之中。两款主流服务端推理引擎 — **vLLM** 和 **SGLang** — 正在同时竞相填补 Blackwell（SM120）支持的空白，同时积极扩展 ROCm/AMD 硬件覆盖范围：vLLM 在 MoE 专家并行路由上领先，SGLang 在量化 LoRA 集成到量化 MoE 栈上领先。**llama.cpp** 以 24 小时内 10 个构建版本的频率维持着最活跃的发布节奏，稳步推进 SYCL 后端与 Intel Arc 和 WebGPU 的功能对等，并将 Inkling 2 投机解码的实际吞吐量推升至 80 tok/s（16 GB 显卡）。**Ollama** 仍是上手最简单本地运行时，但背负着两个未修复的回归问题——Windows 上 embedding 失效和 Jetson 上多模态故障。**LiteLLM** 持续扩张 provider 覆盖范围，同时修复持续存在的流式输出和成本计量正确性问题，而 **Unsloth** 在关闭多个关键 ROCm 缺陷后正成熟为多卡扩散训练平台。总体来看，这是一幅新兴硬件（Blackwell、RDNA4、Strix Halo、NPU）与激增的模型架构（MoE、混合循环、投机解码栈）正面碰撞的画面。

---

## 2. 活跃度对比

| 项目 | Issues（总计 / 展示数） | PRs（总计 / 展示数） | Releases（24h） | 发布节奏信号 |
|---------|--------------------------------|------------------------------|----------------|------------------------|
| **vLLM** | 86 / 30 shown | 486 / 20 shown | **0** | 无正式 Release；在 `main` 上活跃 |
| **SGLang** | 53 / 30 shown | 500 / 30+ shown | **0** | 无正式 Release；在 `main` 上活跃 |
| **llama.cpp** | 25 / 25 shown | 25 / 25 shown | **10 builds（b12617–b12626）** | 发布最频繁；保守版本管理 |
| **Ollama** | 30 / 15 shown | 20 / 10 shown | **0** | 无正式 Release；稳定发布周期约两周一次 |
| **LiteLLM** | 60 / 30 shown | 500 / 30+ shown | **2**（v1.112.0-dev.2, v1.108.15 LTS） | 双轨：dev + LTS |
| **Unsloth** | 24 / 20 shown | 115 / 20 shown | **0** | 通过 Studio 发布 Beta；无 tag releases |

**解读：** llama.cpp 按构建速度最为活跃，但 Issue 体量最低——这是一个成熟、快速迭代的项目。vLLM 和 SGLang 背负最高的 Issue/PR 压力，与其作为生产推理引擎拥有更广泛外部采纳的定位一致。LiteLLM 的双轨发布模式反映了其网关站位：LTS 轨给企业稳定性保障，dev 轨快速吸收新 provider 集成。

---

## 3. 模型支持竞赛

### 架构覆盖快照

| 架构 / 模型 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------|------|--------|-----------|--------|---------|---------|
| **Inkling 2 / Inkling 2 Mini** | — | — | ✅ 完整支持（b12622+） | 🚧 版本待更新（#19826） | — | 🚧 Training PR 进行中（#18812） |
| **DeepSeek-V4.1-Flash** | — | ✅ Overlap decode（#51636） | — | — | — | — |
| **Qwen3.8-27B（hybrid GDN）** | 🚧 Prefix caching 过时 | ✅ Hybrid-GDN + ReplaySSM（#52062） | 🚧 Decode collapse >80K（#27623） | — | — | — |
| **MiniCPM5-15B MoE** | ✅ 原生支持（#69127） | — | ✅ LoRA 支持（#32644） | — | — | — |
| **Hy4-Flash** | ✅ ROCm（#68839） | — | — | — | ✅ Cost map（#53484） | — |
| **Maxwell-V1 MoE** | — | — | ✅ 完整支持（#32643） | — | — | — |
| **LFM2.5-24B-A2B** | — | — | — | — | — | ✅ 修复进行中（#18820） |
| **MiniMax MXFP4（XPU/ROCm）** | ✅ AITER Triton 后端（#69179） | — | — | — | — | — |
| **Gemma4** | — | ✅ FA4 image mask 修复（#51884） | — | — | — | — |
| **Nemotron 3.6 Academia** | — | — | ✅ 完整支持（#32766） | — | — | — |
| **Qwen-Image 2.1** | — | — | — | — | — | 🚧 多卡 split（#18822） |

**竞赛评估：**
- **vLLM** 在**服务端生产特性**上领先（KV offload 调度、Blackwell 张量并行、MoE 专家并行路由），但在投机解码和量化 LoRA 上落后
- **SGLang** 在**投机解码集成**上领先（DSV4.1、DSpark、EAGLE、hybrid-GDN ReplaySSM）以及**量化 LoRA MoE**（8-part 栈，面向 Blackwell）
- **llama.cpp** 在**硬件后端广度**上领先（SYCL、Vulkan、Metal、WebGPU、HIP、CPU）以及**本地推理的投机解码**（DSpark Inkling 2，16 GB 80 tok/s）
- **Ollama** 是**严格的快速追随者** — 在上游支持之前不暴露任何模型
- **Unsloth** 在**多卡扩散训练**上领先（DiT data-parallel、Inkling 2 LoRA 训练），但不是推理引擎
- **LiteLLM** 在 **provider 广度**上领先（iFlytek Spark、GMI Cloud、OpenRouter image gen），但自身不运行推理

---

## 4. 性能前沿

优化工作集中在四个明显的区域：

### 区域 A：KV 缓存与内存管理
| 项目 | 重点 | 详情 |
|---------|-------|---------|
| **vLLM** | V1 Scheduler KV Offload 重新入队 | 通过队首重新入队消除 1.0–1.8 秒的重复排队延迟（#62532） |
| **vLLM** | HF3FS connector 修复 | 静默加载失败 → 正确错误传播（#69095） |
| **llama.cpp** | Vulkan 未对齐 memset 修复 | 非 UMA 独显正确性损坏问题已解决（b12626） |
| **SGLang** | PD disaggregation 输出混淆 | Decode 重用了 live `bootstrap_room`，返回了错误请求的输出（#51980） |
| **Unsloth** | ROCm nf4/int8 反量化缓存 | CUDA 独有优化扩展至 AMD ROCm（#18825） |

### 区域 B：投机解码与草稿验证
| 项目 | 重点 | 详情 |
|---------|-------|---------|
| **SGLang** | 投机解码调度器 host 计算 | batch-1 DSpark decode 每步延迟降低（#50032） |
| **llama.cpp** | Inkling 2 DSpark | 16 GB 显卡上 80 tok/s vs 47.6 基线（#32218） |
| **SGLang** | Hybrid-GDN ReplaySSM | Hybrid GDN 层的紧凑 ragged 投机验证（#52062） |
| **llama.cpp** | Qwen3.8 DFlash/MTP OOB | Vulkan decode 初始化时 token ID == n_vocab（#28158）— 已损坏 |

### 区域 C：量化与算子融合
| 项目 | 重点 | 详情 |
|---------|-------|---------|
| **vLLM** | MoE AITER Triton 路由 | 通过本地专家 EP 路由实现 1.1–2.6× 吞吐提升（#63800） |
| **vLLM** | W4A16 延迟 scale bf16 kernel | gfx1151 上的 decode 规模 GEMM（M 6–128）（#67388） |
| **SGLang** | 量化 LoRA MoE（8-part） | FP8/MXFP4/NVFP4 专家 → Blackwell 上的显式 LoRA runner（#48319 系列） |
| **SGLang** | MoE SiLU+Quant 融合 | 带 blockwise FP8 量化的 fused SiLU-and-mul in Triton（#52029） |
| **llama.cpp** | AVX-512 iq3_s / iq2_s vec_dot | Intel Xeon Platinum 8573C 上约 2× 加速（#32774, #32775） |
| **Unsloth** | Frozen fp8 base（sm89+） | A100/H100 上 1.15×–2.3× vs int8/bf16（#18770） |
| **Unsloth** | Frozen W8A8 int8 base | A100 上 1.7× vs 编译 bf16（#18782） |

### 区域 D：多卡与分布式服务
| 项目 | 重点 | 详情 |
|---------|-------|---------|
| **SGLang** | GDN Triton prefill graph | GDN 层可中断的 prefill CUDA graphs（#51815） |
| **SGLang** | PD disaggregation（NIXL） | 跨主机 prefill/decode 分离 — 但已损坏（#51980） |
| **llama.cpp** | Inkling 2 tensor split | 多卡 KV 缓存分布（`-sm tensor`）（#32751） |
| **Unsloth** | DiT LoRA data-parallel | 扩散训练启用第二块 GPU（#18771） |
| **Unsloth** | Video render 多卡 | 单分支渲染的 token 跨卡 split（#18789） |
| **Unsloth** | Qwen-Image 2.1 layer split | 处理 text-encoder 状态跨 GPU 边界（#18822） |

**观察：** 优化密度最高的集中在 vLLM 和 SGLang（生产推理引擎），两者在 MoE 路由、投机解码和多卡编排上趋同。llama.cpp 是唯一认真优化 CPU 后端的（AVX-512 量化 kernel）。Unsloth 独树一帜，专注于训练时优化（扩散、多卡 LoRA、量化感知训练）。

---

## 5. 层级定位

```
┌─────────────────────────────────────────────────────────────┐
│                      LITEllM                                 │  ← API Gateway / 多 Provider 代理
│         (路由、成本计量、透传)                               │    （非推理引擎）
├─────────────┬─────────────┬─────────────┬───────────────────┤
│   vLLM      │   SGLang    │  llama.cpp  │     Unsloth       │
│             │             │             │                   │
│  推理       │  推理       │ 本地/边缘   │  训练 /           │
│  服务引擎   │  服务引擎   │  运行时     │  微调             │
│  (CUDA,     │  (CUDA,     │  (全        │  (CUDA, ROCm,     │
│  ROCm,      │  ROCm,      │  后端)      │  Apple Silicon)   │
│  XPU)       │  TPU)       │             │                   │
├─────────────┴─────────────┴─────────────┴───────────────────┤
│                       OLLAMA                                  │  ← 本地运行时 / 桌面端
│              (捆绑 llama.cpp，简洁 UX)                       │    （薄封装，非引擎）
└─────────────────────────────────────────────────────────────┘
```

| 层级 | 主要项目 | 核心差异化 |
|-------|-------------------|-------------------|
| **推理服务引擎（数据中心）** | vLLM, SGLang | vLLM 在 KV offload 和 Blackwell TP 上领先；SGLang 在投机解码和量化 LoRA 上领先 |
| **网关 / 代理** | LiteLLM | Provider 抽象、成本计量、重试逻辑 — 自身不运行推理 |
| **本地运行时（桌面/边缘）** | Ollama | 一键安装的简洁性；在上游引擎支持之前不暴露模型 |
| **推理运行时（全后端）** | llama.cpp | 无处不在：嵌入 Ollama、浏览器（WebGPU）、移动端、纯 CPU 服务器；无托管云服务 |
| **训练 / 微调** | Unsloth | 非推理引擎；桥接预训练量化 checkpoint → 消费级/企业级 GPU 微调模型 |

**关键洞察：** "推理服务引擎"与"本地运行时"的边界正在模糊。SGLang 的 NIXL PD disaggregation 和 vLLM 的 SageMaker 集成都在瞄准云原生部署模式，而 Ollama 的多文件 GGUF 导入（PR #19825）则将服务端级模型管理带入了本地环境。llama.cpp 坐镇两者底层，成为事实上的参考实现。

---

## 6. 趋势信号

### 信号 1：Blackwell（SM120）仍是生产雷区
vLLM（#56892）和 SGLang（#49209）在 RTX 5090/GB300 类硬件上都有未修复的关键问题。vLLM 的 CUDA graph 捕获在部分模型上失效；SGLang 的 CUDA 13 wheel 开箱无法运行任何模型。这是当前生态中最大的稳定性缺口。**行动建议：在两款引擎的 Blackwell 级推理投入生产前，必须进行充分的预上线测试。**

### 信号 2：AMD ROCm 正在成熟但仍脆弱
vLLM 随 torch 2.14 / triton 3.8.0 发布了 ROCm 10.0（#62530）；Unsloth 将 CUDA nf4/int8 反量化缓存扩展至 ROCm（#18825）；SGLang 落地了 gfx942 的 CK block-FP8 GEMM（#51746）。然而，Unsloth 的 RX 9060 XT QLoRA abort（#18403）、双 RX 6700 XT crash（#18622）和 SGLang 的 AMD CI 不稳定性（#45847）表明 ROCm 存在 CUDA 不具有的平台特定故障模式。**行动建议：ROCm 在大规模 MoE（MI300X/MI325X）上可行，但在 RDNA4 消费级显卡上避免用于微调。**

### 信号 3：投机解码正在各推理引擎中收敛
今日动态显示 llama.cpp 中的 DSpark（16 GB 80 tok/s）、SGLang 的多方案投机栈（DSV4.1、DSpark、EAGLE、hybrid-GDN ReplaySSM）以及 vLLM 的 DeepSeek 模型 DFlash 路径。收敛围绕两种模式：(a) 草稿模型对 LLM 解码的投机，(b) 混合模型的分块循环（GDN/ReplaySSM）。**行动建议：投机解码在 llama.cpp 本地推理上已可投产；在 Blackwell 上对 vLLM 和 SGLang 仍属预览阶段。**

### 信号 4：混合循环模型（GDN、Looped MoE）是下一波移植浪潮
Nemotron 3.6 Academia（llama.cpp #32766）、DeepSeek-V4.1-Flash（SGLang）、Qwen3.8 的 Gated DeltaNet（vLLM、llama.cpp、SGLang）以及 Inkling 2 的循环架构都共享一个模式：每层或每循环的状态必须作为一等 KV 缓存类对象来管理。目前没有任何引擎完全解决这些模型的前缀缓存。**行动建议：预计 2026 年 Q1 各引擎对混合模型的支持将趋于稳定；今日的 prefix caching 问题（SGLang #52897）将持续到架构共识形成。**

### 信号 5：MoE 量化 LoRA 即将进入生产
SGLang 针对 Blackwell 的 8-part 量化 LoRA MoE 栈（#48319 系列）是近期最重要的功能开发——它支持对 FP8/NVFP4/MXFP4 专家权重进行微调，而无需加载完整 bf16 基座。Unsloth 的 frozen fp8/QAT base 支持（#18770, #18823）和 vLLM 的 ModelOpt MXFP8 格式（#68858）确认生态正将量化微调作为一等用例对齐。**行动建议：如果你有 8×A100/H100 或 2×GB200 用于微调，将 SGLang 即将发布的 1.0 作为量化 MoE 微调平台进行评估。**

### 信号 6：安全暴露面正在扩大
LiteLLM 的 GHSA-74p5-rgj8-w57v（无界 `max_new_tokens` 导致调度器垄断）和 Ollama 的公开暴露实例（#14003 中的 GHSA-adw5-xxxx 模式）都凸显推理栈正成为网络攻击面。随着这些引擎越来越多地部署在 HTTP 网关之后，安全边界正从"你能不能跑一个模型"转向"你能不能 DoS 调度器或窃取其他用户数据"。**行动建议：始终部署在强制执行单请求资源限制的网关之后；不要将 vLLM/SGLang/llama.cpp 服务端口直接暴露到公网。**

### 信号 7：多卡编排在训练侧已解决，在推理侧仍是难题
Unsloth 的 data-parallel DiT 训练（#18771）和 token-split 视频渲染（#18789）都是已解决的工程问题。但 SGLang 的 PD disaggregation 输出混淆 bug（#51980）、llama.cpp 投机解码下的多卡 layer split（#27428, #32718）以及 Unsloth 的 Qwen-Image 2.1 text-encoder 状态跨 GPU 边界（#18822，现已修复）都表明多卡推理引入了单卡设置中不存在的正确性故障模式。**行动建议：将多卡推理作为独立的质保关卡；不要假设单卡正确性可以线性扩展到多卡。**

---

*本跨项目简报综合自 vLLM、SGLang、llama.cpp、Ollama、LiteLLM 和 Unsloth 于 2026-11-22 的公开活动数据。所有关联的 Issues 和 PR 均为 GitHub 公开数据。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Translate all the headings, paragraphs, and list items
2. Preserve all Markdown structure exactly
3. Keep all URLs, link targets, code spans, numbers, dates, and identifiers verbatim
4. Keep issue/PR references and their link text as-is
5. Use natural technical Chinese suitable for a developer newsletter
6. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me go through this section by section:

**Title:** vLLM Digest — 2026-11-22
→ vLLM 技术速报 — 2026-11-22

**Section 1: Today's Highlights**
→ 今日要点

Key terms to translate:
- "Highlights" → "要点" or "重点速递"
- "continues active development" → "持续活跃开发"
- "ROCm and NVIDIA Blackwell platforms" → "AMD ROCm 和 NVIDIA Blackwell 平台"
- "Major Rust frontend feature parity roadmap" → "Rust 前端功能对齐路线图取得重要进展"
- "New MiniCPM5 model support merged" → "新增 MiniCPM5 模型支持已合并"
- "Multiple ROCm kernel optimizations" → "多项 ROCm 内核优化"
- "Critical HF3FS KV connector bug" → "严重 HF3FS KV 连接器 Bug"
- "failed loads silently swallowed" → "加载失败被静默吞没"
- "corresponding fix PR" → "对应修复 PR"

**Section 2: Releases & Breaking Changes**
→ 版本发布与重大变更

"Releases & Breaking Changes" → "版本发布与重大变更"
"No new releases" → "暂无新版本"


"No tagged releases in the last 24 hours" → "过去 24 小时内无标签版本发布"
"Migration Notes" → "迁移说明"
"SageMaker HTTP integration can now be explicitly disabled via `--disable-sagemaker-integration` flag in the Python frontend" → "SageMaker HTTP 集成现可通过 Python 前端的 `--disable-sagemaker-integration` 参数显式禁用"
"Existing SageMaker deployments retain current behavior" → "现有 SageMaker 部署保持当前行为不变"

**Section 3: New Model & Hardware Support**
→ 新增模型与硬件支持

"New Model & Hardware Support" → "新增模型与硬件支持"
"MiniCPM5-15B-A2.5B" → 保持不变
"Native inference support added with gated GQA, FP32 sigmoid MoE routing, BF16 and compressed-tensors INT4 W4A16" → "新增原生推理支持，包括门控 GQA、FP32 sigmoid MoE 路由、BF16 和 compressed-tensors INT4 W4A16"
"Hy4-Flash (ROCm)" → 保持不变
"ROCm implementation for `tencent/Hy4-flash` and `tencent/Hy4-flash-FP8` with DFly speculative decoding on MI355X" → "ROCm 实现支持 `tencent/Hy4-flash` 和 `tencent/Hy4-flash-FP8`，在 MI355X 上启用 DFly 投机解码"
"MiniMax MXFP4 (XPU/ROCm)" → 保持不变
"Support in AITER Triton W4A16 backend for MI300X/MI325X (gfx942)" → "在 MI300X/MI325X (gfx942) 的 AITER Triton W4A16 后端中提供支持"
"ModelOpt MXFP8 (XPU)" → 保持不变
"New `modelopt_mxfp8` quantization format with kernel dispatch" → "新增 `modelopt_mxfp8` 量化格式及内核调度"
"SM100+ int8 scaled_mm" → 保持不变
"CUTLASS int8 kernels now correctly declined on SM100+; Triton fallback reachable" → "CUTLASS int8 内核现已在 SM100+ 上正确禁用，可回退至 Triton"

**Performance & Optimization**
→ 性能与优化

"Moe (AITER Triton)" → "MoE (AITER Triton)"
"EP routing over local experts: 1.1–2.6× throughput vs global routing" → "本地专家 EP 路由：相比全局路由吞吐量提升 1.1–2.6 倍"
"W4A16 kernel" → "W4A16 内核"
"Deferred-scale bf16 kernel for decode-sized GEMMs (M 6–128)" → "解码尺寸 GEMM (M 6–128) 的延迟缩放 bf16 内核"
"Mamba2 NVFP4" → "Mamba2 NVFP4"
"Marlin selection and Bolt-specific tuning for SM120/SM121" → "SM120/SM121 的 Marlin 选择与 Bolt 专项调优"
"Muse Spark attention" → "Muse Spark 注意力机制"
"Boundary-layer attention as fragment launches (monokernel)" → "分片启动的边界层注意力机制 (单内核)"
"ROCm CI" → "ROCm CI"
"ROCm 10.0 image bumped to torch 2.14 / triton 3.8.0" → "ROCm 10.0 镜像升级至 torch 2.14 / triton 3.8.0"

**Active RFCs / Tracking Issues**
→ 活跃 RFC / 追踪问题

"ViT Full CUDA Graph" → "ViT 完整 CUDA Graph"
"Support for Vision Transformer full CUDA graphs (Qwen3-VL, GLM-V, Kimi K2.5)" → "支持 Vision Transformer 完整 CUDA graphs (Qwen3-VL, GLM-V, Kimi K2.5)"
"Qwen3.8-2.4T A95B" → 保持不变
"gfx950 / MI355X performance optimization tracker" → "gfx950 / MI355X 性能优化追踪"
"Qwen3.8-Flash-Next" → 保持不变
"Muse Spark" → 保持不变
"gfx942 PTPC-FP8 performance optimization" → "gfx942 PTPC-FP8 性能优化"
"V1 Scheduler KV Offload" → "V1 调度器 KV Offload"
"Eliminate 1.0–1.8s re-queuing stall via front-of-queue re-admission" → "通过队列头部重新入队消除 1.0–1.8 秒的重新排队延迟"

**Section 5: Stability & Regressions**
→ 稳定性与回退问题

"Critical Bugs (Active)" → "严重缺陷（活跃）"
"HF3FS load failures" → "HF3FS 加载失败"
"KV connector reports failed loads as finished, never returns failed block IDs → silent prefix-cache corruption" → "KV 连接器将加载失败报告为完成，从未返回失败的 block ID → 前缀缓存静默损坏"
"SM120 CUDA graphs" → "SM120 CUDA Graphs"
"DeepSeek-V4.1-Flash extremely low decode throughput with `--enforce-eager`; CUDA graphs unusable" → "DeepSeek-V4.1-Flash 在 `--enforce-eager` 下解码吞吐量极低；CUDA graphs 无法使用"
"Block size (v0.32.0)" → "Block Size (v0.32.0)"
"No working block size on release tag (64 and 128 fail)" → "发布版本中无有效的 block size（64 和 128 均失败）"
"Prefix caching (priority)" → "前缀缓存（优先级调度）"
"Align-mode prefix caching never hits with `--scheduling-policy priority` on hybrid GDN models" → "混合 GDN 模型在 `--scheduling-policy priority` 下对齐模式前缀缓存永远无法命中"
"DSpark broken" → "DSpark 损坏"
"DSpark speculative decoding broken on H200 nightly (assumes `dflash` paths)" → "H200 夜间测试中 DSpark 投机解码损坏（假定 `dflash` 路径）"

**Stale Bugs (Needs Triage)**
→ 待处理积压缺陷

"`<turn|>` token regression" → "`<turn|>` token 回退"
"Trailing special token appearing in v0.26.0 (gemma-4-31b-it)" → "v0.26.0 中出现尾部特殊 token (gemma-4-31b-it)"
"Host-memory leak" → "宿主机内存泄漏"
"Eager `reshape_and_cache_flash` path leaks host memory" → "eager 模式的 `reshape_and_cache_flash` 路径存在宿主机内存泄漏"
"Hybrid KV crash" → "混合 KV 崩溃"
"`_update_requests_with_invalid_blocks` unpacking error" → "`_update_requests_with_invalid_blocks` 解包错误"
"SM120 FlashInfer JIT" → "SM120 FlashInfer JIT"
"JIT failures kill engine init instead of falling back" → "JIT 失败直接导致引擎初始化失败而非回退"

**Section 6: What This Means for Application Developers**
→ 应用开发者须知

"Blackwell (SM120) users: expect rough edges" → "Blackwell (SM120) 用户：需注意稳定性问题"
"CUDA graph capture remains broken for some models; forced-eager mode suffers significant throughput regression" → "部分模型的 CUDA graph 捕获仍然存在问题；强制 eager 模式会导致显著的性能回退"
"Track [#56892] for resolution" → "关注 [#56892] 获取修复进展"
"AMD ROCm deployments are gaining parity" → "AMD ROCm 部署正在快速追赶"
"Multiple PRs landing for MI355X/gfx950/gfx942: MoE routing, FP8 attention kernels, W4A16 kernels" → "针对 MI355X/gfx950/gfx942 的多个 PR 正在合并：MoE 路由、FP8 注意力内核、W4A16 内核"
"If running Qwen3.8 or Muse Spark on AMD, expect measurable gains from upcoming releases" → "在 AMD 上运行 Qwen3.8 或 Muse Spark 的用户，可期待后续版本中的性能提升"
"HF3FS KV offload users: upgrade soon" → "HF3FS KV offload 用户：请尽快升级"
"The bug in [#69058] silently corrupts prefix caching on load failures" → "[#69058] 中的缺陷在加载失败时静默损坏前缀缓存"
"Pull [#69095] once merged to get the fix" → "合并后拉取 [#69095] 即可获得修复"
"New model options available" → "新增模型选项"
"MiniCPM5-15B-A2.5B support enables a new compact MoE variant; Hy4-Flash adds a DFly-speculative-decoding-capable ROCm model" → "MiniCPM5-15B-A2.5B 支持解锁了新型紧凑 MoE 变体；Hy4-Flash 则带来支持 DFly 投机解码的 ROCm 模型"
"Structured output improvements" → "结构化输出改进"
"Tokenizers without `eos_token` now handled gracefully in the outlines backend (#69188), avoiding 500 errors for edge-case tokenizers" → "outlines 后端现已妥善处理缺少 `eos_token` 的分词器 (#69188)，避免了边缘情况分词器引发的 500 错误"

**Footer:**
→ 脚注

"Generated from github.com/vllm-project/vllm activity on 2026-11-22" → "数据来源：2026-11-22 github.com/vllm-project/vllm 活动记录"

I should maintain natural Chinese technical language throughout and use Chinese punctuation (，。：；？！"") instead of English punctuation.

需要用中文冒号来标记说明部分，例如：数据来源：2026-11-22。保持术语的一致性，比如 CUDA graphs、V1 Scheduler、KV offload 等关键词的翻译风格。代码片段如 `--disable-sagemaker-integration` 和 `reshape_and_cache_flash` 应该保留原样，不做翻译。
</think>


# vLLM 技术速报 — 2026-11-22

## 1. 今日要点

vLLM 项目在 AMD ROCm 和 NVIDIA Blackwell 平台上的开发持续保持活跃。今日要点包括：Rust 前端功能对齐路线图引发热议（64 条评论），新增 MiniCPM5 模型支持已合并，以及针对 MI355X 和 gfx950 的多项 ROCm 内核优化。HF3FS KV 连接器存在一个严重缺陷（加载失败被静默吞没），对应修复 PR（#69095）已就绪待审。

---

## 2. 版本发布与重大变更

| 项目 | 说明 | 链接 |
|------|-------------|------|
| **暂无新版本** | 过去 24 小时内无标签版本发布 | — |

**迁移说明：**

- SageMaker HTTP 集成现可通过 Python 前端的 `--disable-sagemaker-integration` 参数显式禁用（#68638）。现有 SageMaker 部署保持当前行为。

---

## 3. 新增模型与硬件支持

| 模型 / 硬件 | 详情 | 链接 |
|------------------|---------|------|
| **MiniCPM5-15B-A2.5B** | 新增原生推理支持，包含门控 GQA、FP32 sigmoid MoE 路由、BF16 以及 compressed-tensors INT4 W4A16 | [#69127](https://github.com/vllm-project/vllm/pull/69127) |
| **Hy4-Flash (ROCm)** | `tencent/Hy4-flash` 和 `tencent/Hy4-flash-FP8` 的 ROCm 实现，支持 MI355X 上的 DFly 投机解码 | [#68839](https://github.com/vllm-project/vllm/pull/68839) |
| **MiniMax MXFP4 (XPU/ROCm)** | MI300X/MI325X（gfx942）AITER Triton W4A16 后端支持 | [#69179](https://github.com/vllm-project/vllm/pull/69179) |
| **ModelOpt MXFP8 (XPU)** | 新增 `modelopt_mxfp8` 量化格式及内核调度 | [#68858](https://github.com/vllm-project/vllm/pull/68858) |
| **SM100+ int8 scaled_mm** | CUTLASS int8 内核现已在 SM100+ 上正确回退；可到达 Triton 回退路径 | [#54316](https://github.com/vllm-project/vllm/pull/54316) |

---

## 4. 性能与优化

### 已合并 / 审核中 PRs

| 领域 | 优化内容 | 平台 | 链接 |
|------|-------------|----------|------|
| **MoE (AITER Triton)** | 本地专家 EP 路由：相比全局路由吞吐量提升 1.1–2.6 倍 | ROCm (gfx942) | [#63800](https://github.com/vllm-project/vllm/pull/63800) |
| **W4A16 内核** | 解码尺寸 GEMM（M 6–128）的延迟缩放 bf16 内核 | ROCm (gfx1151) | [#67388](https://github.com/vllm-project/vllm/pull/67388) |
| **Mamba2 NVFP4** | SM120/SM121 的 Marlin 选择与 Bolt 专项调优 | NVIDIA (Blackwell) | [#66675](https://github.com/vllm-project/vllm/pull/66675) |
| **Muse Spark 注意力** | 分片启动的边界层注意力机制（单内核） | ROCm (gfx950) | [#68516](https://github.com/vllm-project/vllm/pull/68516) |
| **ROCm CI** | ROCm 10.0 镜像升级至 torch 2.14 / triton 3.8.0 | ROCm | [#62530](https://github.com/vllm-project/vllm/pull/62530) |

### 活跃 RFC / 追踪 Issue

| 主题 | 详情 | 评论数 | 链接 |
|-------|---------|----------|------|
| **ViT 完整 CUDA Graph** | 支持 Vision Transformer 完整 CUDA graphs（Qwen3-VL、GLM-V、Kimi K2.5） | 50 | [#38175](https://github.com/vllm-project/vllm/issues/38175) |
| **Qwen3.8-2.4T A95B** | gfx950 / MI355X 性能优化追踪 | 38 | [#57149](https://github.com/vllm-project/vllm/issues/57149) |
| **Qwen3.8-Flash-Next** | gfx950 / MI355X 性能优化追踪 | 30 | [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **Muse Spark** | gfx942 PTPC-FP8 性能优化 | 14 | [#64018](https://github.com/vllm-project/vllm/issues/64018) |
| **V1 调度器 KV Offload** | 通过队首重新入队消除 1.0–1.8 秒的重新排队阻塞 | 10 | [#62532](https://github.com/vllm-project/vllm/issues/62532) |

---

## 5. 稳定性与回退问题

### 严重缺陷（活跃）

| 缺陷 | 描述 | 严重程度 | 状态 | 链接 |
|-----|-------------|----------|--------|------|
| **HF3FS 加载失败** | KV 连接器将加载失败报告为完成，从未返回失败的 block ID，导致前缀缓存静默损坏 | **高** | 修复 PR 已就绪（#69095） | [#69058](https://github.com/vllm-project/vllm/issues/69058) |
| **SM120 CUDA Graphs** | DeepSeek-V4.1-Flash 在 `--enforce-eager` 下解码吞吐量极低；CUDA graphs 无法使用 | **高** | 调查中 | [#56892](https://github.com/vllm-project/vllm/issues/56892) |
| **Block Size（v0.32.0）** | 发布标签上无有效 block size（64 和 128 均失败） | **高** | 修复追踪于 #60762 | [#59203](https://github.com/vllm-project/vllm/issues/59203) |
| **前缀缓存（优先级调度）** | 混合 GDN 模型在 `--scheduling-policy priority` 下对齐模式前缀缓存永不命中 | 中 | 待清理 | [#52897](https://github.com/vllm-project/vllm/issues/52897) |
| **DSpark 损坏** | H200 夜间测试中 DSpark 投机解码损坏（假定 `dflash` 路径） | 中 | 待清理 | [#50851](https://github.com/vllm-project/vllm/issues/50851) |

### 待处理积压缺陷（需分类）

| 缺陷 | 描述 | 链接 |
|-----|-------------|------|
| **`<turn\|>` token 回退** | v0.26.0 中出现尾部特殊 token（gemma-4-31b-it） | [#49955](https://github.com/vllm-project/vllm/issues/49955) |
| **宿主机内存泄漏** | Eager 模式 `reshape_and_cache_flash` 路径存在宿主机内存泄漏 | [#50150](https://github.com/vllm-project/vllm/issues/50150) |
| **混合 KV 崩溃** | `_update_requests_with_invalid_blocks` 解包错误 | [#50687](https://github.com/vllm-project/vllm/issues/50687) |
| **SM120 FlashInfer JIT** | JIT 失败直接导致引擎初始化失败而非回退 | [#50705](https://github.com/vllm-project/vllm/issues/50705) |

---

## 6. 应用开发者须知

| 要点 | 详情 |
|----------|--------|
| **Blackwell（SM120）用户：需注意稳定性问题** | 部分模型的 CUDA graph 捕获仍存在问题；强制 eager 模式会导致显著的性能回退。请关注 [#56892](https://github.com/vllm-project/vllm/issues/56892) 了解修复进展。 |
| **AMD ROCm 部署正在快速追赶** | 针对 MI355X/gfx950/gfx942 的多个 PR 正在合并：MoE 路由、FP8 注意力内核、W4A16 内核等。在 AMD 上运行 Qwen3.8 或 Muse Spark 的用户，可期待后续版本中的性能提升。 |
| **HF3FS KV offload 用户：请尽快升级** | [#69058](https://github.com/vllm-project/vllm/issues/69058) 中的缺陷在加载失败时静默损坏前缀缓存。合并后拉取 [#69095](https://github.com/vllm-project/vllm/pull/69095) 即可获得修复。 |
| **新增模型选项** | MiniCPM5-15B-A2.5B 支持开启了一种新的紧凑 MoE 变体；Hy4-Flash 带来了支持 DFly 投机解码的 ROCm 模型。 |
| **结构化输出改进** | Outlines 后端现已妥善处理缺少 `eos_token` 的分词器（#69188），避免了边缘情况分词器引发的 500 错误。 |

---

*数据来源：2026-11-22 github.com/vllm-project/vllm 活动记录。*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the English technical report about SGLang into Simplified Chinese. I need to:

1. Translate all the text content while keeping the Markdown structure
2. Preserve all tables, headings, formatting, URLs, code references, issue numbers, etc.
3. Use natural technical Chinese suitable for a Chinese developer newsletter
4. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate section by section:

**Title**: SGLang Daily Digest — 2026-11-22

**Section 1: Today's Highlights**
- The SGLang 1.0 Release Tracker (#50045) is actively progressing, marking a stability-focused release that will harden existing functionality and introduce explicit compatibility policies for the 1.x series. Active development continues on the quantized LoRA MoE stack (8-part PR series #48319) targeting Blackwell and AMD GPUs, while a critical security advisory (GHSA-74p5-rgj8-w57v) has been privately disclosed regarding unbounded request parameters that can monopolize the scheduler.

**Translation**: SGLang 1.0 Release Tracker（#50045）正在积极推进，这是一次以稳定性为核心目标的发布，将巩固现有功能并为 1.x 系列引入明确的兼容性策略。量化 LoRA MoE 技术栈（8 个 PR 的系列 #48319）针对 Blackwell 和 AMD GPU 的开发工作持续推进，同时一项关于请求参数无上限可能导致调度器被单一请求垄断的严重安全漏洞（GHSA-74p5-rgj8-w57v）已被私下披露。

**Section 2: Releases & Breaking Changes**
Table needs translation.

**Section 3: New Model & Hardware Support**
Table needs translation.

**Section 4: Performance & Optimization**
Table needs translation.

**Section 5: Stability & Regressions**
Table needs translation.

**Section 6: What This Means for Application Developers**
Bullet points need translation.

Let me proceed with the full translation:

Title: SGLang 每日摘要 — 2026-11-22

Section 1: 今日要闻
Section 2: 版本发布与重大变更


Section 3: 新模型与硬件支持
Section 4: 性能与优化
Section 5: 稳定性与回归问题
Section 6: 对应用开发者的影响

现在逐段进行翻译。
</think>


# SGLang 每日摘要 — 2026-11-22

## 1. 今日要闻

SGLang 1.0 Release Tracker（#50045）正在积极推进，这是一次以稳定性为核心目标的发布，将巩固现有功能并为 1.x 系列引入明确的兼容性策略。量化 LoRA MoE 技术栈（8 个 PR 的系列 #48319）针对 Blackwell 和 AMD GPU 的开发工作持续推进，同时一项关于请求参数无上限可能导致调度器被单一请求垄断的严重安全漏洞（GHSA-74p5-rgj8-w57v）已被私下披露并于今日公开。

## 2. 版本发布与重大变更

| 项目 | 详情 | 链接 |
|------|------|------|
| **暂无新版本** | 过去 24 小时内无正式版本发布 | — |
| **SGLang 1.0 路线图已启动** | 稳定性版本开发中；从 0.5.x 升级可能需要改动；升级说明即将发布 | [#50045](https://github.com/sgl-project/sglang/issues/50045) |

## 3. 新模型与硬件支持

| 领域 | 更新内容 | 链接 |
|------|----------|------|
| **RTX 50 系列（sm_120/Blackwell）** | **已损坏** — CUDA 13 wheel 安装后无法开箱即用地运行任何模型 | [#49209](https://github.com/sgl-project/sglang/issues/49209) |
| **AMD MI300X（gfx942）** | 正在推进为 gfx942 启用 CK `bpreshuffle` GEMM 以支持 dense block-FP8（Qwen3.5-397B-A17B-FP8 TP8） | [#51746](https://github.com/sgl-project/sglang/pull/51746) |
| **DeepSeek-V4.1-Flash** | 新增 decode 路径投影的 overlap 优化；减少 CUDA-graph 显存占用 | [#51636](https://github.com/sgl-project/sglang/pull/51636) |
| **Gemma4** | FA4 image mask 现已限定在 sliding-window 层生效（修复混合 FA3→FA4 路径问题） | [#51884](https://github.com/sgl-project/sglang/pull/51884) |
| **Hybrid-GDN 模型** | 现已支持紧凑 ragged speculative verify 配合 ReplaySSM | [#52062](https://github.com/sgl-project/sglang/pull/52062) |

## 4. 性能与优化

| 类别 | 描述 | 影响 | 链接 |
|------|------|------|------|
| **Speculative Decode Scheduler** | 削减批处理大小为 1 的 speculative decode 循环中每步的 host 工作量 | 快速栈（DeepSeek-V4.1-Flash + DSpark 在 GB300 上约 2.5ms/步）延迟降低 | [#50032](https://github.com/sgl-project/sglang/pull/50032) |
| **量化 LoRA MoE 技术栈** | 8 个 PR 的系列，将 FP8/MXFP4/NVFP4 expert 接入显式 LoRA runner；CuTeDSL GEMM for SM100；Marlin 执行调优 | 在 Blackwell/NPU 上实现量化 MoE 模型的 LoRA 微调 | [#48319](https://github.com/sgl-project/sglang/pull/48319), [#51922](https://github.com/sgl-project/sglang/pull/51922), [#51921](https://github.com/sgl-project/sglang/pull/51921), [#51920](https://github.com/sgl-project/sglang/pull/51920), [#51919](https://github.com/sgl-project/sglang/pull/51919), [#51924](https://github.com/sgl-project/sglang/pull/51924) |
| **Mamba2 JIT 编译** | 内核 `_chunk_scan_fwd_kernel` 在 serving 阶段编译，导致 NemotronH 首次 prefill 延迟约 1.45s/卡 | 需在 engine 初始化时预编译 | [#51628](https://github.com/sgl-project/sglang/issues/51628) |
| **GDN Triton Prefill Graph** | 当 prefill graph 可捕获时优先使用 Triton | 为 GDN 层启用可中断的 prefill CUDA graphs | [#51815](https://github.com/sgl-project/sglang/pull/51815) |
| **MoE SiLU+Quant Fusion** | 在 Triton MoE 中融合 SiLU-and-mul 与 blockwise FP8 量化 | 减少独立的量化 kernel 调用 | [#52029](https://github.com/sgl-project/sglang/pull/52029) |
| **DSV4.1 显存优化** | 重叠 decode 路径投影；减少 row-bucket CUDA-graph 显存占用 | 4×B200 TP4/EP4：8K/1K C16 下约 2350 tok/s | [#51636](https://github.com/sgl-project/sglang/pull/51636) |

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 链接 |
|----------|------|------|------|
| **🔴 严重** | **安全漏洞**：`max_new_tokens` 和 `n` 在服务端无上限 — 单个请求可独占调度器 | 私下提交的 GHSA-74p5-rgj8-w57v 漏洞公告今日公开披露 | [#51835](https://github.com/sgl-project/sglang/issues/51835) |
| **🔴 严重** | **PD Disaggregation**：Decode 请求复用存活 `bootstrap_room` 时返回了另一个请求的输出（HTTP 200） | 开启中 | [#51980](https://github.com/sgl-project/sglang/issues/51980) |
| **🔴 严重** | **RTX 50 系列**：sm_120（Blackwell）搭配 CUDA 13 无法开箱即用地运行任何模型 | 开启中 | [#49209](https://github.com/sgl-project/sglang/issues/49209) |
| **🟠 高** | **Diffusion Host Pin OOM**：MiniMax-H3 在 24 GB 显卡 + 32 GB 主机上触发 OOM-kill；服务端却上报 ready 并返回 503 | 开启中 | [#51188](https://github.com/sgl-project/sglang/issues/51188) |
| **🟠 高** | **Mamba SSM dtype**：`--mamba-ssm-dtype bfloat16` 导致 Qwen3.5-9B 在 MATH-500 上成绩下降约 8 分 | 开启中 | [#51531](https://github.com/sgl-project/sglang/issues/51531) |
| **🟡 中** | **FlashInfer MoE + EAGLE**：Triton fused-MoE kernel 中存在非法内存访问 | 已关闭（无响应） | [#40623](https://github.com/sgl-project/sglang/issues/40623) |
| **🟡 中** | **DSV4 并发问题**：并发条件下渐进式输出损坏（dsv4 + DP attention） | 已关闭（无响应） | [#33397](https://github.com/sgl-project/sglang/issues/33397) |
| **🟡 中** | **CUDA Graph VRAM 饥饿**：Prefill CUDA graph 预留约 1.8 GB，导致量化 KV 长上下文 prefill 显存不足 | 已关闭（无响应） | [#40094](https://github.com/sgl-project/sglang/issues/40094) |
| **🟡 中** | **HiRadixCache TP 死锁**：`writing_check` 在分歧的 write_backup/load_back 决策上可能死锁 | 已关闭（无响应） | [#28429](https://github.com/sgl-project/sglang/issues/28429) |
| **🟢 低** | **AMD CI 不稳定**：`test_torch_compile_moe.py` 在 HIP stream 上失败 | 开启中 | [#45847](https://github.com/sgl-project/sglang/issues/45847) |

**CI 健康状况**：0 个broken，5 个flaky，977 个近期已修复（来自 #17050）

## 6. 对应用开发者的影响

| 建议 | 行动项 |
|------|--------|
| **安全补丁势在必行** | 评估 GHSA-74p5-rgj8-w57v 的暴露面；在官方修复上线前，在网关层对 `max_new_tokens` 和 `n` 实现请求级上限 |
| **Mamba 避免使用 bfloat16 SSM dtype** | 在长推理任务中，`--mamba-ssm-dtype` 继续使用 `float16`，直到 #51531 被修复 |
| **RTX 5090/Blackwell 用户：暂缓** | sm_120 的 CUDA 13 wheel 兼容性损坏；关注 #49209 获取修复进展 |
| **Diffusion 部署：监控主机内存** | 在 ≤24 GB 的显卡上，关注静默 OOM-kill 导致的 503 响应（#51188）；考虑限制并发 diffusion 请求数量 |
| **量化 MoE 上的 LoRA 即将就绪生产** | 量化 LoRA MoE 技术栈（#48319）预示着 Blackwell 上 FP8/NVFP4 MoE 模型微调支持即将发布；评估对即将到来的 1.0 版本的适配情况 |
| **NPU/Ascend 用户：部分 bug 已关闭视为无响应** | 多个 NPU 相关 issue（如 #40735、#50443）已标记为无响应；报告重复问题前请先验证当前行为 |

---

*数据来源于 2026-11-22 当日 sgl-project/sglang 的活动记录。所有链接指向 GitHub issues/PRs。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the provided English technical report into Simplified Chinese. I need to:

1. Translate all the content while preserving the exact Markdown structure
2. Keep URLs, numbers, dates, issue/PR references, code identifiers as-is
3. Use natural technical Chinese suitable for a Chinese developer newsletter
4. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate section by section:

**Title**: llama.cpp Digest — 2026-11-22
- This stays as-is since it's a date and project name

**Section 1: Today's Highlights**
- SYCL backend optimizations → SYCL 后端优化
- backported → 回移植
- critical Vulkan fix → 关键的 Vulkan 修复
- unaligned memset → 非对齐 memset
- discrete GPUs → 独立 GPU
- silent correctness corruption → 静默正确性损坏
- Inkling 2 infrastructure is maturing fast → Inkling 2 基础设施快速成熟
- DSpark speculative decoding → DSpark 投机解码
- measured 80 tok/s → 实测 80 tok/s
- tensor split support → tensor 分片支持
- multi-GPU inference → 多卡推理

**Section 2: Releases & Breaking Changes**
- Releases & Breaking Changes → 版本发布与重大变更
- No breaking API changes → 无破坏性 API 变更
- Vulkan fix for unaligned memset → 修复 Vulkan 非对齐 memset
- no longer requires manual configuration → 不再需要手动配置
- correctness fix → 正确性修复

**Section 3: New Model & Hardware Support**
- New Model Architectures → 新增模型架构
- New Backend Capabilities → 新增后端能力


- MoE (Mixture of Experts) → MoE（混合专家）
- Looped hybrid → 循环混合架构
- Gated Delta Product → 门控 Delta 网络
- shared recurrent weights → 共享循环权重
- Speculative decoding → 投机解码
- Realtime full-duplex audio → 实时全双工音频
- weight reorder kernels → 权重重排内核
- CONV_TRANSPOSE_1D → CONV_TRANSPOSE_1D

I'll focus on translating technical terms precisely, ensuring the translation captures the nuanced technical language while maintaining clarity for a Chinese technical audience. I'm tracking the performance improvements and technical optimizations across different GPU architectures. The AVX-512 vector dot kernels for Intel Xeon Platinum 8573C show significant speedups. Compact FLASH_ATTN_EXT bias reduces memory overhead for Inkling 2, avoiding unnecessary intermediate activation materialization. Performance measurements reveal 80 tokens per second on code, representing a substantial improvement from the 47.6 baseline. Ongoing work focuses on Inkling 2 MoE memory optimization and reducing mixed-precision matrix multiplication latency on AMD GPUs.

Critical issues emerge with decode throughput collapse and draft-mtp prompt processing problems. CUDA performance drops dramatically at high context lengths for Qwen3.8-27B, while multi-GPU layer splits significantly degrade processing efficiency. These challenges require immediate attention to maintain inference performance across different GPU configurations.

Hardware-specific bugs manifest in CUDA and Vulkan backends, particularly on RTX 5090, where perplexity calculations become unstable. Vulkan implementations on older graphics architectures like i915 also show multi-ubatch corruption risks.

Performance regressions in SYCL MoE prompt processing and severe throughput drops on RDNA4 GPUs highlight critical backend compatibility issues. Flash Attention mechanisms struggle with specific head dimensions, indicating potential architectural optimization challenges.

The translation emphasizes backend-specific nuances, translating technical terms like "Critical", "High", and "Medium" to convey severity levels while maintaining precise technical terminology.

Key actions emerge: prioritize Vulkan updates, cautiously approach Inkling 2 deployment, verify SYCL backend functionality, rigorously test distributed inference configurations, and monitor emerging model architectures. These strategic steps mitigate emerging technical risks and ensure robust system performance across heterogeneous hardware environments.
</think>


# llama.cpp Digest — 2026-11-22

## 1. 今日要闻

项目保持高发布节奏，SYCL 后端优化领跑今日版本发布，包括 IQ4_NL/IQ4_XS 新的量化权重重排和面向 Intel Arc GPU 优化的列分块 gated_delta_net 内核。面向独立 GPU 的非对齐 memset 关键 Vulkan 修复已回移植到 b12626，解决了独立 GPU 上的静默正确性损坏问题。同时，Inkling 2 基础设施正快速成熟——DSpark 投机解码在 16 GB 显存的卡上实测代码生成达 80 tok/s（基线无投机 47.6 tok/s），新 PR 还为多卡推理添加了 tensor 分片支持。

---

## 2. 版本发布与重大变更

| 构建号 | 变更内容 | PR |
|-------|---------|-----|
| **b12626** | Vulkan：修复非 UMA 设备上非对齐区域的 `memset` — 解决独立 GPU 上的静默正确性损坏 | [#32725](https://github.com/ggml-org/llama.cpp/pull/32725) |
| **b12625** | 模型：修复 `clef` 和 `vllm-decision2` 架构的 `no_realloc` | [#32754](https://github.com/ggml-org/llama.cpp/pull/32754) |
| **b12624** | Chat：向支持的后端传递 `reasoning_effort = none` | [#32763](https://github.com/ggml-org/llama.cpp/pull/32763) |
| **b12623** | mtmd：合并 Parakeet 相对位置视图以避免越界访问 | [#32722](https://github.com/ggml-org/llama.cpp/pull/32722) |
| **b12622** | 模型：自动应用 `.scale` 张量 — 不再需要手动配置，同时修复正确性问题 | [#32669](https://github.com/ggml-org/llama.cpp/pull/32669) |

**无破坏性 API 变更**。

---

## 3. 新增模型与硬件支持

### 新增模型架构

| 模型 | 类型 | PR / Issue |
|-------|------|------------|
| **Maxwell-V1 MoE**（总计 35B / 激活 3B，45 层） | MoE，每层 256 个专家 | [#32643](https://github.com/ggml-org/llama.cpp/pull/32643) |
| **MiniCPM5 MoE** | MoE，带门控 GQA 和路由/共享专家 | [#32644](https://github.com/ggml-org/llama.cpp/pull/32644) |
| **Nemotron 3.6 Academia** | 循环混合架构：门控 Delta 网络 + dense attention + MLP，支持 `per_loop` 和共享循环权重 | [#32766](https://github.com/ggml-org/llama.cpp/pull/32766) |
| **Inkling 2 DSpark** | Inkling 2 投机解码支持 | [#32218](https://github.com/ggml-org/llama.cpp/pull/32218) |
| **Kyutai Hibiki**（mtmd） | 实时全双工音频支持 | [#32491](https://github.com/ggml-org/llama.cpp/pull/32491) |

### 新增后端能力

- **SYCL**：IQ4_NL 和 IQ4_XS 权重重排内核（#31998），列分块 gated_delta_net 内核（#32456），CONV_TRANSPOSE_1D 输入迭代边界（#31109）
- **WebGPU**：GDN `supports_op` 检查修复（#32782），Dawn 更新（#32779）
- **Inkling 2**：Tensor 分片模式（`-sm tensor`）用于多卡 KV-cache 分发（#32751）
- **GGML-CPU**：iq3_s 的 AVX-512/VBMI vec_dot 内核，iq2_s 的 AVX-512F/BW/VL vec_dot 内核（#32774，#32775）

---

## 4. 性能与优化

### 今日合并

| 优化项 | 后端 | 详情 | PR |
|--------------|---------|---------|-----|
| **mul_mat_one_chunk 内存访问模式** | GGML | 提升矩阵乘法的缓存效率 | [#30846](https://github.com/ggml-org/llama.cpp/pull/30846) |
| **IQ4_NL / IQ4_XS 权重重排** | SYCL | Intel Arc 更快去量化路径 | [#31998](https://github.com/ggml-org/llama.cpp/pull/31998) |
| **列分块 gated_delta_net 内核** | SYCL | 为 Arc Pro B70 优化 | [#32456](https://github.com/ggml-org/llama.cpp/pull/32456) |
| **AVX-512 iq3_s / iq2_s vec_dot** | CPU | Intel Xeon Platinum 8573C 上约 2 倍加速 | [#32774](https://github.com/ggml-org/llama.cpp/pull/32774)，[#32775](https://github.com/ggml-org/llama.cpp/pull/32775) |
| **紧凑型 FLASH_ATTN_EXT bias** | CUDA、ROCm、Vulkan、Metal 等 8 个后端 | 减少 Inkling 2 FA 内存占用；避免物化所有中间激活 | [#32740](https://github.com/ggml-org/llama.cpp/pull/32740) |

### Inkling 2 DSpark 性能

在长上下文场景下、16 GB 显存的 GPU 上实测：**代码生成 80 tok/s**，基线（无投机）47.6 tok/s，修复了 q4 draft KV 和图重构建开销后（#32773）。

### 进行中

- **Inkling 2 MoE 显存优化**（#32777）：优先将循环 MoE 层放置于设备显存，适配 12 GB 显存约束
- **HIP 非 wmma 架构的 MMQ**（#32266）：降低 AMD GPU 混合精度 GEMM 延迟

---

## 5. 稳定性与回归问题

### 严重（活跃中）

| Issue | 后端 | 严重度 | 详情 |
|-------|---------|----------|---------|
| **[#27623](https://github.com/ggml-org/llama.cpp/issues/27623)** 上下文 >80K 时解码吞吐骤降约 25 倍 | CUDA（Qwen3.8-27B） | 🔴 严重 | Gated DeltaNet 模型；提示处理不受影响；处理中 |
| **[#27428](https://github.com/ggml-org/llama.cpp/issues/27428)** 多卡 layer split 上 draft-mtp 使提示处理减半 | CUDA | 🔴 严重 | 单卡正常；2026 年 8 月以来引入的回归 |
| **[#32710](https://github.com/ggml-org/llama.cpp/issues/32710)** inkling2_loop perplexity 为 NaN | CUDA | 🔴 严重 | Inkling-2-Mini-GGUF:IQ4_NL，RTX 5090 |
| **[#32707](https://github.com/ggml-org/llama.cpp/issues/32707)** Inkling-2-Mini prefill 慢且在 5090 上崩溃 | CUDA | 🔴 严重 | IQ4_NL 量化；prefill 性能和稳定性问题 |

### 高（活跃中）

| Issue | 后端 | 严重度 | 详情 |
|-------|---------|----------|---------|
| **[#32778](https://github.com/ggml-org/llama.cpp/issues/32778)** Inkling 2 提示 >96 tokens 产生全 `?` 输出 | CUDA | 🟠 高 | 今日新增；模型在首次采样即输出损坏 token |
| **[#28158](https://github.com/ggml-org/llama.cpp/issues/28158)** Vulkan 上 Qwen3.8 DFlash/MTP 越界 token | Vulkan（gfx1150） | 🟠 高 | Token ID == n_vocab（248320）；解码初始化时 token 无效 |
| **[#31068](https://github.com/ggml-org/llama.cpp/issues/31068)** SYCL XMX-ESIMD MoE 约 35% 性能回退 | SYCL（Arc Pro B70） | 🟠 高 | 构建 11783 到 11851 之间的回归；影响提示处理 |
| **[#32370](https://github.com/ggml-org/llama.cpp/issues/32370)** Vulkan i915 多 ubatch 损坏 | Vulkan（i915） | 🟠 高 | GPU 队列超过 20 秒工作时输出损坏 |

### 中（活跃中）

| Issue | 后端 | 严重度 | 详情 |
|-------|---------|----------|---------|
| **[#30884](https://github.com/ggml-org/llama.cpp/issues/30884)** 长上下文 Flash Attention 输出垃圾 | ROCm（gfx1201 RDNA4） | 🟡 中 | Head_dim 256 模型立即输出 EOS；prefill 损坏 |
| **[#30838](https://github.com/ggml-org/llama.cpp/issues/30838)** Head_size 512 时 Flash Attention 效率降低 4 倍 | ROCm（gfx1201） | 🟡 中 | Gemma 4，512 head_dim；影响 prefill 吞吐 |
| **[#32753](https://github.com/ggml-org/llama.cpp/issues/32753)** `reasoning_effort: "none"` 默认为 0.9 而非 0 | Server | 🟡 中 | Inkling 2 收到错误的 effort 参数 |

### 近期关闭（已修复 / 不会修复）

- **#32725** Vulkan memset 修复 → 已合并，进入 b12626 ✓
- **#32745** Inkling 2 raw grammar 返回空内容 → 已关闭
- **#32753** `reasoning_effort: "none"` → 已关闭（b12624 中修复）
- **#29351** 非 VNNI x86 上 -128 操作数的 Q8_0 符号错误 → 已关闭

---

## 6. 对应用开发者的意义

### 对推理基础设施工程师

1. **独立 GPU 上的 Vulkan 用户应立即更新** — b12626 修复了一个静默正确性 bug：之前 `memset` 在独立 GPU 上写入 32 位字而非字节，导致输出损坏。

2. **Inkling 2 已接近生产就绪但仍有短板** — 今日多条报告指出 RTX 5090 上 prefill 崩溃和 IQ4_NL 出现 NaN perplexity。部署 Inkling-2-Mini 时，优先使用 CUDA 13.5+，在 #32707 解决前避免在 5090 上使用 IQ4_NL。DSpark 投机解码显示强劲收益（80 vs 47.6 tok/s），但需要精细的显存管理。

3. **SYCL 后端正在快速追赶 CUDA** — IQ4 量化支持和 gated_delta_net 内核今日落地。Intel Arc Pro B70 用户获得了可观的吞吐提升，但需注意 MoE 提示处理的 XMX-ESIMD 回归（#31068）。

4. **多卡 layer split + 投机解码有已知问题** — #27428（MTP）和 #32718（DSpark）都表现出多卡配置下的问题。运行带 draft 的分布式推理时，需充分测试或等待修复。

5. **新架构频繁加入** — Maxwell-V1 MoE、MiniCPM5 MoE 和 Nemotron 3.6 Academia 都在推进中。若需支持多样化模型目录，请关注转换工具的成熟度。

### 快速行动项

- **使用 Vulkan**：立即拉取 b12626+
- **使用 Inkling 2**：避免在 RTX 5090 上使用 IQ4_NL；关注 #32710 和 #32778
- **使用 SYCL**：更新后测试 MoE 工作负载，警惕 #31068
- **使用多卡 + 投机解码**：暂缓或隔离测试，直至 #27428/#32718 解决

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate a technical digest from English to Simplified Chinese. I need to:

1. Translate all the text content while keeping the markdown structure
2. Keep all technical terms, URLs, issue numbers, code, version numbers as-is
3. Use natural technical Chinese register
4. Maintain all formatting (tables, headings, lists, etc.)

Let me translate section by section:

Title: "Ollama Digest — 2026-11-22" → "Ollama 每日简报 — 2026-11-22"

Key phrases to translate carefully:
- "Today's Highlights" → "今日要点"
- "Releases & Breaking Changes" → "版本发布与破坏性变更"
- "New Model & Hardware Support" → "新模型与硬件支持"
- "Performance & Optimization" → "性能与优化"
- "Stability & Regressions" → "稳定性与回归问题"
- "High Severity" → "高严重性" or "🔴 高严重性"
- "Medium Severity" → "中严重性" or "🟡 中等严重性"
- "What This Means for Application Developers" → "这对应用开发者意味着什么"

Let me go through each section carefully.
</think>


# Ollama 每日简报 — 2026-11-22

## 今日要点

Ollama 社区正在通过 PR #19825 解决多文件 GGUF 导入的局限性，该 PR 支持引用分割模型中的单个分片。同时，Inkling 2 Mini GGUF 支持正通过 PR #19826 推进 llama.cpp 版本升级来解除限制，CLI 也新增了 `--no-animation` 标志以简化 CI/agent 日志输出（PR #19830）。然而，Windows 上的 embedding 功能仍存在问题（#19782），Jetson AGX Orin 用户在处理多模态请求时面临 CUDA OOM 崩溃（#19815）。

---

## 版本发布与破坏性变更

| 项目 | 状态 | 备注 |
|------|--------|-------|
| 过去 24 小时内无新版本发布 | — | — |

无新版本标签。macOS 用户当前版本为 v0.40.17，Windows 用户为 v0.40.16。

---

## 新模型与硬件支持

### Inkling 2 Mini GGUF — 待解除限制
- **PR #19826** 将 `LLAMA_CPP_VERSION` 升级至包含 `inkling2` 和 `inkling2_loop` 架构（llama.cpp PR #32217、#32704 于 11 月 21 日合并）。合并后，Ollama 将能在 Windows/Linux 上加载 Thinking Machines Lab 的 Inkling 2 Mini（26B）GGUF 变体。
- **Issue #19817**（已关闭）记录了此前的失败情况：`unknown architecture inkling2_loop/inkling2`，投影仪报错 `inkling2v`。

### Apple Silicon（MLX）
- **Issue #19820** — M4 Max 报告的架构标识为 `applegpu_g16s`（与 M4 Pro 相同），但 `supportsRelativeAttentionPrefill` 和 `relativeAttentionSplitParts` 内核列表中缺少该型号。当前尚无有效的 PR。
- **Issue #19819** — Inkling 2 前缀缓存在 MLX 上约 64k token 后完全失效，原因是增长的相对注意力 prefill 峰值。
- **Issue #19818** — Inkling 2 每轮回复会重新计算多达 2k token，因为保存的前缀只在批次分割边界处恢复。

### Windows Glob 修复
- **PR #19821** 修正了 `expandPaths` 函数：当 `filepath.Glob` 对带 glob 字符的路径匹配不到任何结果时，返回 `os.ErrNotExist`，而非将未展开的模式作为字面路径返回。

---

## 性能与优化

### CLI 动画（新增）
- **PR #19830** 新增全局标志 `--no-animation`。进度旋转器和进度条写入 `io.Discard`，其他 stderr 消息保持不变——适用于 CI 流水线和使用 agent 的日志记录场景。

### 前缀缓存退化（MLX / Inkling 2）
- Issue #19819 和 #19818 记录了缓存失效模式，导致 Apple Silicon 上 Inkling 2 长上下文会话的前缀复用失效。尚无解决方案，可能需要修改 `AlignPrefillToSnapshots` 或相对注意力内核边界。

### Intel Iris Xe 上的 Vulkan — 回归问题
- **Issue #18531**（11 月 21 日关闭）：`qwen2.5:14b` KV 缓存分配（`ErrorOutOfDeviceMemory`）在 Ollama 0.33.3 和 0.34.2 上失败，但在 0.32.6 上正常。7B 变体在三个版本中均可正常运行。可能是这些版本之间 Vulkan 内存分配器的变更所致。

### Windows Sysmem 回退策略被忽略
- **Issue #19824**（已关闭）：WDDM 忽略 `Prefer No Sysmem Fallback` 设置，在 RTX 3050 上将超过 2× VRAM 的数据溢出到 GPU 共享内存，导致 PCIe/共享内存流量性能下降。

---

## 稳定性与回归问题

### 🔴 高严重性

| Issue | 描述 | 链接 |
|-------|-------------|-------|
| **#19782** | Windows 上 `/api/embed` 返回 400，原因是捆绑的 `llama-server` runner 向高 ephemeral 端口发送 POST 请求时被拒绝。影响 embedding 模型（使用 `embeddinggemma:latest` 测试）。 | [Issue](https://github.com/ollama/ollama/issues/19782) |
| **#19815** | Jetson AGX Orin（JetPack 6）在每次图片请求时都会因 `cuMemAddressReserve` 报 `CUDA OOM` 而崩溃。纯文本请求正常工作。请求者希望添加 `GGML_CUDA_NO_VMM=ON` 构建标志。 | [Issue](https://github.com/ollama/ollama/issues/19815) |
| **#19823** | 安全澄清请求：尽管有 Zero Data Retention 承诺，Ollama Cloud 第三方推理提供商可能会暴露用户数据。引用 Ars Technica 关于 AI 供应链泄露的报道。 | [Issue](https://github.com/ollama/ollama/issues/19823) |

### 🟡 中等严重性

| Issue | 描述 | 链接 |
|-------|-------------|-------|
| **#17969**（已关闭） | 通过 OpenAI 兼容的 `/v1/chat/completions` 端点调用时，`/no_think` 和 `reasoning_effort` 参数被忽略。 | [Issue](https://github.com/ollama/ollama/issues/17969) |
| **#5245** | 引用单个分片时不支持多文件 GGUF 导入。**PR #19825** 修复了此问题。 | [Issue](https://github.com/ollama/ollama/issues/5245) · [PR #19825](https://github.com/ollama/ollama/pull/19825) |
| **#14003** | 功能请求：为公开暴露的服务器提供 TLS 签名证书 + API 密钥认证。目前有 17.5 万个公开暴露的 Ollama 实例。 | [Issue](https://github.com/ollama/ollama/issues/14003) |
| **#19829** | Qwen3.5 解析器：模型生成的纯文本内容若匹配解析器保留标签（`</think>`、`<tool_call>`），会导致 thinking 过早结束。 | [Issue](https://github.com/ollama/ollama/issues/19829) |
| **#19827** | `ollama launch pi` 忽略 `PI_CODING_AGENT_DIR`。**PR #19832** 修复了此问题。 | [Issue](https://github.com/ollama/ollama/issues/19827) · [PR #19832](https://github.com/ollama/ollama/pull/19832) |

---

## 这对应用开发者意味着什么

1. **Windows 上的 embedding 功能目前存在故障。** 如果在 Windows 上使用 Ollama 0.40.16 的 `/api/embed`，预计会收到 HTTP 400 错误。请关注 Issue #19782 获取修复进展。

2. **Jetson AGX Orin 上的多模态功能目前无法使用。** 如果需要在该硬件上运行视觉模型，请跟踪 Issue #19815——构建标志变更（`GGML_CUDA_NO_VMM=ON`）是提议的解决方案。

3. **多文件 GGUF 导入即将改善。** PR #19825 弥合了引用分割模型分片时需要通配符或多个 `FROM` 行的缺陷。合并后请更新你的 Modelfile。

4. **CI/agent 场景下的 CLI 用户应采用 `--no-animation`**（PR #19830），以保持日志可读性并避免旋转动画帧污染。

5. **0.33+ 版本的 Intel Arc / Vulkan 用户**应注意 14B 模型的 KV 缓存回归问题（Issue #18531）。7B 变体不受影响；如果需要 14B 模型，v0.32.6 仍保持稳定。

6. **Apple Silicon 上的 Inkling 2 Mini** 存在前缀缓存效率问题，会影响长对话吞吐量。请跟踪 Issue #19818 和 #19819 获取上游 MLX runner 修复。

7. **社区集成持续增长**：两个新集成已合并——Teemoon（移动端 iOS/Android 应用，PR #19831）和 Kera（自托管团队聊天，PR #19822）。AgentBridge 已添加到框架与 Agent 列表（PR #18693）。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate an English technical report about LiteLLM into Simplified Chinese. I need to:

1. Translate the content while preserving all Markdown structure
2. Keep URLs, version tags, issue numbers, code, etc. as-is
3. Use natural technical Chinese register
4. Output ONLY the translation, no explanations

Let me go through section by section:

**Title**: "LiteLLM Digest — 2026-11-22" - Keep as-is, dates can stay

**Section 1: Today's Highlights**
- "LiteLLM v1.112.0-dev.2 shipped alongside an LTS refresh at v1.108.15" - v1.112.0-dev.2 已发布，同时带来 v1.108.15 LTS 版本更新
- "with the dev release adding enhanced Docker image signature verification via Cosign" - dev 版本增强了 Cosign 镜像签名验证
- "The community resolved several high-impact streaming and cost-tracking bugs across providers (ElevenLabs, Watsonx, Amazon Nova, Azure)" - 社区修复了多个高影响力的流式处理和成本追踪问题，涵盖 ElevenLabs、Watsonx、Amazon Nova、Azure 等提供商
- "while a significant PR lands partial Gemini 4+ routing through the Interactions API with a noted 131-case parity gap remaining" - 一项重要 PR 通过 Interactions API 实现了部分 Gemini 4+ 路由，但仍有 131 个用例的兼容性差距待解决

**Section 2: Releases & Breaking Changes**
- Keep the table structure, translate descriptions
- Breaking Change section - translate the blockquote

**Section 3: New Model & Hardware Support**
- Translate provider/model names where appropriate
- iFlytek Spark - 科大讯飞星火 (keeping original as well or just keeping as-is)


- GMI Cloud, SambaNova, OpenRouter stay as-is

**Section 4: Performance & Optimization**
- Translate the descriptions, keep technical terms that are commonly used in Chinese

**Section 5: Stability & Regressions**
- Translate severity levels: High → 高, Medium → 中, Low → 低
- Keep issue titles mostly as-is for accuracy
- Translate descriptions where natural

**Section 6: What This Means for Application Developers**
- Translate each numbered point with natural Chinese technical language

**Note at the end**:
- Keep the rules as-is since they're instructions

Now I'll translate the full document with proper Markdown formatting and natural Chinese technical register.
</think>


# LiteLLM 技术速报 — 2026-11-22

## 1. 今日要点

LiteLLM v1.112.0-dev.2 正式发布，同时带来 v1.108.15 LTS 版本更新。dev 版本增强了 Docker 镜像的 Cosign 签名验证机制。社区修复了多个高影响力问题，涵盖流式处理和跨提供商的成本追踪（ElevenLabs、Watsonx、Amazon Nova、Azure）。此外，一项重要 PR 通过 Interactions API 实现了部分 Gemini 4+ 路由，但仍有 131 个用例的兼容性差距待解决。

## 2. 版本发布与破坏性变更

| 版本 | 类型 | 说明 |
|---------|------|-------|
| [v1.112.0-dev.2](https://github.com/BerriAI/litellm/releases/tag/v1.112.0-dev.2) | 预发布版 | 现在强制启用 Cosign 验证；通过 `ghcr.io/berriai/litellm:v1.112.0-dev.2` 拉取 |
| [v1.108.15](https://github.com/BerriAI/litellm/releases/tag/v1.108.15) | LTS | 打上 `lts` 标签；通过 `ghcr.io/berriai/litellm:lts` 更新 |

**⚠️ 破坏性变更 — Lens Gateway 成本导出 ([#53497](https://github.com/BerriAI/litellm/pull/53497))**
> Lens gateway 请求导出功能现要求已启用且已连接的消费日志账本。若您当前在未启用账本的情况下导出请求，请在升级前先启用账本。

## 3. 新模型与硬件支持

| 模型/提供商 | PR | 详情 |
|----------------|-----|---------|
| **iFlytek Spark** | [#31690](https://github.com/BerriAI/litellm/pull/31690) | 新聊天供应商集成 |
| **GMI Cloud / `gmi/tencent/hy4-flash`** | [#53484](https://github.com/BerriAI/litellm/pull/53484) | 已加入价格映射表；输入 $7e-08/token，输出 $2.81e-07/token，上下文 1M token |
| **SambaNova DeepSeek-V3.2** | [#32035](https://github.com/BerriAI/litellm/pull/32035) | 上下文窗口已修正：32k → **128k** |
| **OpenRouter 图片生成** | [#32313](https://github.com/BerriAI/litellm/pull/32313) | 迁移至专用 `/v1/images` 端点 |

## 4. 性能与优化

| 领域 | PR | 影响 |
|------|-----|--------|
| **Vertex AI OAuth 令牌缓存** | [#53338](https://github.com/BerriAI/litellm/issues/53338) | **高危缺陷**：`VertexBase` 在每次请求时为每个实例创建新凭证；图片端点每次调用都重新获取 OAuth 令牌。修复进行中。 |
| **httpx 超时透传** | [#47822](https://github.com/BerriAI/litellm/issues/47822) | 非 OpenAI/Azure/Bedrock 提供商因 allowlist 限制过窄，将 `httpx.Timeout(10.0, connect=1.0)` 压缩为单一的 10s 值。已修复。 |
| **Prompt 管理钩子** | [#32515](https://github.com/BerriAI/litellm/pull/32515) | 修复了无 prompt_id 调用时的钩子选择问题；确保 `AnthropicCacheControlHook` 优先级正确 |

## 5. 稳定性与回归问题

| 严重级别 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **高** | **ElevenLabs 成本计算异常** — 代理端报告零消费 | [已关闭](https://github.com/BerriAI/litellm/issues/18058) | — |
| **高** | **路由器重试会重新执行已被自动批准的 MCP 工具** 在后续调用失败后 | [已关闭](https://github.com/BerriAI/litellm/issues/43153) | — |
| **高** | **Amazon Nova 流式请求 100% 失败** — httpx zstd 解码器在完成后被复用 | [已关闭](https://github.com/BerriAI/litellm/issues/35589) | — |
| **中** | **OAuth `client_id` 在 GET 请求查询字符串中被拒绝**（导致 MCP 浏览器认证失败） | [已关闭](https://github.com/BerriAI/litellm/issues/53185) | — |
| **中** | **`stream_chunk_builder` TypeError** — `reasoning_content` 以结构化列表形式到达时触发 | [已关闭](https://github.com/BerriAI/litellm/issues/50893) | — |
| **中** | **Watsonx 流式输出的 usage 丢失** — 代理端报告自己的估算值而非提供商的 token 数 | [打开](https://github.com/BerriAI/litellm/issues/46059) | — |
| **中** | **消费日志重复计算** — Responses→chat 桥接层对 ≥ 256 KiB 的 prompt 产生重复记录 | [已关闭](https://github.com/BerriAI/litellm/issues/52824) | — |
| **中** | **消费日志载荷回归** — 尽管启用了 prompt 存储，请求/响应仍被省略 | [已关闭](https://github.com/BerriAI/litellm/issues/53263) | — |
| **低** | **GCP Terraform 部署失败** — 在 `compute.managed.requireOsConfig` 条件下 | [打开](https://github.com/BerriAI/litellm/issues/37987) | — |
| **低** | **MCP 工具发现遗漏认证服务器** — 当未提供上游凭证时 | [打开](https://github.com/BerriAI/litellm/issues/52849) | — |
| **低** | **UI 登录失败** — 尽管密码环境变量配置正确 | [打开](https://github.com/BerriAI/litellm/issues/23451) | — |

## 6. 对应用开发者的影响

1. **流式处理的正确性已成关键** — 三个独立的流式处理缺陷（Nova zstd 解码器、reasoning_content 列表、finish_reason 注入）同时存在。若您当前使用的版本尚未修复，在 Amazon Nova、推理模型或任何会产生分片 finish_reason 的提供商上启用流式请求前，请先升级。

2. **成本可见性缺口依然存在** — ElevenLabs 成本追踪和 Watsonx 使用量报告以不同方式损坏。如果您依赖代理消费日志进行预算控制或计费，请为这两个提供商交叉验证代理数据与提供商仪表盘数据。

3. **Lens 导出现已受限** — 若您使用 Lens gateway 的请求导出功能，在升级到 v1.112.0+ 之前必须先启用消费日志账本。这是一次性配置步骤。

4. **Vertex AI 凭证重复创建** — 每次图片生成请求都会重建凭证并获取新的 OAuth 令牌。对于高吞吐量的图片工作负载，这会增加每请求延迟并可能触发速率限制。

5. **OAuth 透传路由已变更** — 仅在查询字符串中携带 `client_id` 的 GET 请求现在可以正常工作。若您之前为此问题添加了变通方案，请将其移除。

6. **新提供商仍在完善中** — iFlytek Spark 支持已合并但 CI 尚未完全通过。早期使用者应做好应对不稳定的准备。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate a technical digest about the Unsloth GitHub repository from English to Simplified Chinese. I need to translate it accurately while maintaining all formatting, URLs, issue numbers, and technical terms. Let me carefully translate this, keeping the Chinese natural and in a technical newsletter style.
</think>


# Unsloth 每日简报 — 2026-11-22

## 1. 今日要点

Unsloth 工程团队正在大力清理 ROCm/AMD 和多 GPU 基础设施层面的技术债务：三个 PR 已合入（studio diffusion CUDA 缓存修复、Krea-2 训练填充、data-parallel DiT LoRA），同时还有六个 open 状态的 PR 正在推进，分别针对 AMD checkpoint、ROCm nf4 反量化和多 GPU Qwen-Image 2.1。在模型侧，Inkling 2 LoRA/QLoRA 训练以 open PR 形式提交，LFM2.5-24B-A2B 原始 tool-call 输出中的标记泄露问题正在修复中。在稳定性方面，两个高严重性的 AMD 问题（Strix Halo mmap 强制回退和 RX 9060 XT HIP 非法内存访问）仍为 open 状态，尚未有修复 PR。

## 2. 版本发布与破坏性变更

| 项目 | 描述 | 链接 |
|------|-------------|------|
| 无版本发布 | 过去 24 小时内无新版本发布 | — |

**迁移注意事项：**
- 打包的 `sd.cpp` 构建版本（`master-982-0518b34-u27b9ddc`）已将 `--diffusion-fa` 作为废弃别名处理，现要求使用 `--flash-attn off,diffusion=on`。现有启动脚本中若使用旧参数将静默兼容，但建议尽快迁移。([#18787](https://github.com/unslothai/unsloth/pull/18787))

## 3. 新增模型与硬件支持

| 模型 / 架构 | 支持类型 | 说明 |
|---------------------|--------------|-------|
| **Inkling 2 Mini 及 Inkling 2 Small** | **LoRA / QLoRA 训练**（open PR）| 基于 transformers 5.24.0 原生支持；需配合 `unsloth-zoo#2657` 以处理 MoE experts 和 eager attention residual。([#18812](https://github.com/unslothai/unsloth/pull/18812)) |
| **LFM2.5-24B-A2B** | 推理修复 | 原始 tool-call 标记（`<|tool_call_start|>...<|tool_call_end|>`）被暴露在聊天输出中，已在修复 PR 中剥离。([#18820](https://github.com/unslothai/unsloth/pull/18820)) |
| **Qwen-Image 2.1** | 多 GPU 层分割 | 跨 GPU 传输 text-encoder 状态的问题已修复；渲染时 replica 回退机制已在状态栏显示。([#18822](https://github.com/unslothai/unsloth/pull/18822)) |
| **Wan2.2-T2V-A14B** | LoRA 训练（已合入）| 来自 LightX2V 的 4-step 蒸馏 LoRA pairs 现已支持；images 版 Lightning presets 也已添加。([#18778](https://github.com/unslothai/unsloth/pull/18778)) |
| **LTX-2.x** | 训练修复（已合入）| 修复了全一 text mask 导致 MPS/attention bias 异常的问题。([#18804](https://github.com/unslothai/unsloth/pull/18804)) |
| **SDXL（U-Net 流水线）** | 静态步数跳过 | `install_static_step_skip` 现同时识别 `pipe.unet` 和 `pipe.transformer`。([#18826](https://github.com/unslothai/unsloth/pull/18826)) |

**后端 / 量化支持新增：**
- **ROCm nf4 / int8 反量化缓存** — 此前仅支持 CUDA；现已扩展至 AMD GPU。([#18825](https://github.com/unslothai/unsloth/pull/18825))
- **CPU 后端内存上报** — 在纯 CPU 系统上，`UNSLOTH_MEMORY_REPORT=1` 现可输出进程 RSS、峰值 RSS 和可用内存。([#18807](https://github.com/unslothai/unsloth/pull/18807))
- **Diffusion 训练冻结 int8 W8A8 基座** — 可通过 `UNSLOTH_DIFFUSION_INT8_TRAIN=w8a8` 开启；适用于无 fp8 tensor core 的 A100/RTX 30xx/T4。([#18782](https://github.com/unslothai/unsloth/pull/18782))
- **QAT nvfp4 / mxfp8** — 对冻结 bias 的 LoRA 基座层执行伪量化（修复了 Qwen2/Qwen2.5 系列模型中所有层均保持 bf16 的问题）。([#18823](https://github.com/unslothai/unsloth/pull/18823))

## 4. 性能与优化

| 类别 | 变更 | 量化影响 | PR / Issue |
|----------|--------|-------------------|------------|
| **DiT LoRA 多 GPU** | 数据并行训练跨 `num_gpus` 张相同 CUDA 卡；每卡一个进程 | 第二块 GPU 现已利用，不再空闲 | [#18771](https://github.com/unslothai/unsloth/pull/18771) |
| **视频渲染多 GPU** | 单分支视频步数（guidance=1、蒸馏模型、LoRA）按 token 均分至两张卡 | 单分支渲染时第二块卡不再空闲 | [#18789](https://github.com/unslothai/unsloth/pull/18789) |
| **Diffusion 训练（CUDA）** | 预算制梯度 checkpoint 与 nf4/int8 反量化缓存 | 显存充裕时保留 block activations；nf4 权重缓存复用 | [#18301](https://github.com/unslothai/unsloth/pull/18301), [#18345](https://github.com/unslothai/unsloth/pull/18345) |
| **Diffusion 训练（ROCm）** | 上述两项 CUDA 优化扩展至 AMD | AMD 卡不再逐 block checkpoint，也不再每次调用重新反量化 nf4 权重 | [#18825](https://github.com/unslothai/unsloth/pull/18825) |
| **冻结 fp8 基座（sm89+）** | `base_precision="auto"` 现自动在 NVIDIA sm89+（A100/H100）上选择冻结 fp8 | 相比此前 int8/bf16 行为提速 1.15x–2.3x | [#18770](https://github.com/unslothai/unsloth/pull/18770) |
| **冻结 W8A8 int8 基座** | A100/RTX 30xx/T4 可编译的 int8 基座 | A100 上比此前可编译的 bf16 快 1.7x（此前 int8 无法编译） | [#18782](https://github.com/unslothai/unsloth/pull/18782) |
| **Krea 2 训练** | 基于有效 caption 行而非 512 行 padding 训练；移除 512 行 text fusion 开销 | 典型短 caption 场景计算量大幅节省 | [#18788](https://github.com/unslothai/unsloth/pull/18788) |
| **MiniMax-H3-Image 流式分级** | 流式 int8 GEMM 路径上安装融合版 SwiGLU | MLP 在 24 GB 显存的卡（L4、3090）上不再回退到 stock forward | [#18798](https://github.com/unslothai/unsloth/pull/18798) |
| **Apple Silicon MPS** | torch < 2.13 时大 attention 调用按 query 分块处理 | 正确性修复：避免每次调用 ~0.9 × 2²⁹ score elements 之后出现错误值 | [#18783](https://github.com/unslothai/unsloth/pull/18783) |
| **Qwen-Image 2.1 多 GPU** | 层分割时 text-encoder 状态现可正确跨 GPU 边界传输 | 多 GPU 推理不再每调用必败 | [#18822](https://github.com/unslothai/unsloth/pull/18822) |

## 5. 稳定性与回退问题

按预估严重程度排序：

| # | 严重程度 | 描述 | 平台 | 状态 | 修复 PR |
|---|----------|-------------|----------|--------|--------|
| **#18403** | 🔴 高 | QLoRA 在 gfx1200（RX 9060 XT，RDNA4）上三个融合内核中触发 `HIP error: an illegal memory access`；纯 PyTorch/PEFT 无该架构 SDPA 内核 | Ubuntu 25.04, ROCm | OPEN | — |
| **#18805** | 🔴 高 | Windows Strix Halo 在 carve-out 修复（#17607）后 mmap 再次被强制；host-shortfall 检查仍绕过 lazy-mode | Windows 11, AMD Ryzen AI Max+ 395 | OPEN | — |
| **#17605** | 🟠 中高 | 0.1.917 强制使用 mmap，即使传入 `--load-mode none`，导致内存/SSD 占用过高（相比 0.1.916 退化） | Windows 11, Strix Halo | CLOSED（由 #17607 修复）| [#17607](https://github.com/unslothai/unsloth/pull/17607) |
| **#18563** | 🟠 中等 | v0.1.920-beta 模型加载时崩溃 | Unsloth Desktop | OPEN | — |
| **#18763** | 🟠 中等 | AMD NPU（FastFlowLM 1.0.13）：列出 NPU 模型时报 "Extra data: line 2025 column 1" | Unsloth Desktop | OPEN | — |
| **#18622** | 🟠 中等 | 双 RX 6700 XT ROCm 推理期间崩溃 | Linux, ROCm | OPEN | — |
| **#18759** | 🟠 中等 | Qwen-Image-Edit GGUF：`_adaln_continuous_forward` 中设备不匹配（adaln_precompute 将 modulation 移至 host） | Windows 10, Studio 2026.11.9 | OPEN | — |
| **#18757** | 🟡 中低 | 最新 Unsloth Studio Docker 无法加载 Inkling-2-Mini-GGUF | Docker | OPEN | — |
| **#18699** | 🟡 低 | macOS 更新时报告"脚本被阻止，因包含恶意软件" | macOS | OPEN | — |
| **#18732** | 🟡 低 | `GET /api/system/hardware` 在 GPU 0 上创建 CUDA context | Studio Web UI, Arch Linux | OPEN | — |
| **#18755** | 🟡 低 | UI 中 Prompt token 数据无法复制（退化） | Desktop + Web UI | OPEN | — |
| **#18722** | 🟡 低 | 无法加载微调后的 Q5_K_M GGUF：打包的 llama.cpp 不支持量化类型 36 | Windows 11, Studio v0.1.922-beta | OPEN | — |

## 6. 对应用开发者的影响

**AMD 硬件用户需密切关注。** 两个尚未修复的 ROCm 退化问题（#18403 RDNA4 HIP 非法内存访问、#18805 Strix Halo mmap 强制回退）分别影响 RX 9060 XT 和 Ryzen AI Max+ 395——两者均为相对较新的芯片。如果你当前在 AMD RDNA4 或 Strix Halo 上运行 Unsloth Studio，预计会遭遇崩溃或内存耗尽，建议暂停留在 0.1.916 或更早版本，直至修复上线。

**多 GPU 推理和训练现已显著提速。** Data-parallel DiT trainer（#18771）和 token-split 视频渲染器（#18789）解决了大多数生产工作流中第二块 GPU 空闲的问题。如果你有两块相同的 CUDA 卡，在 trainer 配置中设置 `num_gpus=2` 即可免费获得吞吐量提升。

**Inkling 2 训练即将支持。** PR #18812 为 Inkling 2 Mini/Small 系列（`thinkingmachines/Inkling-2-Mini`、`Inkling-2-Small`）添加了原生 LoRA/QLoRA 支持。如果你有基于这些模型的微调 pipeline，预计近期将可启用。

**CPU 后端内存上报现已可用。** 在纯 CPU 主机上设置 `UNSLOTH_MEMORY_REPORT=1` 可输出进程 RSS、峰值 RSS 和可用内存——对边缘或无头部署的容量规划很有帮助。

**MPS 正确性修复**（#18783）解决了 Apple Silicon 大 attention 矩阵上的静默错误输出（torch < 2.13）。如果你在 Mac 上使用 Studio 进行图像生成，请升级至 torch 2.13+ 以获取分块 attention 路径。

**对 API 集成者的提示：** `GET /api/system/hardware` 现会在 GPU 0 上创建 CUDA context（#18732）——这一副作用可能干扰多 GPU 节点上 GPU 0 预留给其他任务的无头服务场景，修复 PR 尚未提交。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*