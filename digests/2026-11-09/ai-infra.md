# AI 基础设施日报 2026-11-09

> 生成时间: 2026-11-09 01:54 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the technical report into Simplified Chinese. Let me translate this carefully, following the rules:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences.
2. Preserve the Markdown structure exactly.
3. Keep URLs, code spans, numbers, dates, project names, issue/PR numbers as-is.
4. Use natural technical Chinese - the register of a Chinese developer newsletter.

Let me go through section by section and translate while maintaining the exact structure.

Key terms to translate:
- "Cross-Project Report" → 跨项目对比报告
- "Ecosystem Overview" → 生态概览
- "Activity Comparison" → 活跃度对比
- "Model Support Race" → 模型支持竞赛
- "Performance Frontier" → 性能前沿
- "Layer Positioning" → 分层定位
- "Trend Signals" → 趋势信号

I need to maintain the technical register throughout and be careful with:
- Tables (keep column alignment)
- Code references
- Issue/PR numbers
- Project names

Let me translate section by section.
</think>


# AI Infrastructure 生态系统跨项目报告 — 2026-11-09

## 1. 生态概览

AI推理基础设施生态系统正处于多向量剧烈演进期，驱动力来自三个汇聚压力：Blackwell 代硬件（SM120/SM121）进入生产就绪状态、投机解码作为标准生产特性的成熟，以及多模态和混合专家架构的爆发式增长——这些架构对 serving 技术栈的每一层都带来了严峻考验。今天 vLLM、SGLang、llama.cpp、LiteLLM 和 Unsloth 的活动表明，没有任何单一项目能独占全栈——格局正在分化为互补层级（裸金属推理引擎、本地运行时、云网关、微调工作室），每个层级都有明确的性能和正确性优先级。主导主题是可靠性加固：几个关键回归——GB10 上的提示词截断、L4 上的 CUDA graph 挂起、llama.cpp 中的递归 NaN 持久化——正在随着这些引擎从 beta 迈向规模化生产工作负载而浮出水面。

---

## 2. 活跃度对比

| 项目 | Issues (24h) | PRs (24h) | Releases (24h) | 活跃 RFCs |
|---------|:------------:|:---------:|:--------------:|:-----------:|
| **vLLM** | 59 | 331 | 0 | ViT CUDA Graph, Marlin→Humming, Octave KV, Specialized MonoKernels |
| **SGLang** | ~59 | 331 | 0 | PD Disaggregation, SGLang-Diffusion |
| **llama.cpp** | ~20 (按评论密度) | ~10 次提交 | 12 次提交（无 semver 标签） | — |
| **LiteLLM** | 59 | 331 | 1 个 dev 发布 (v1.110.0-dev.2) | LiteFlow gateway |
| **Unsloth** | 12 | 160 | 0 | — |

**解读：** vLLM、SGLang 和 LiteLLM 呈现出完全相同的 GitHub 活动特征——这是更广泛开源推理生态系统中贡献者高度重叠和同步发布节奏的有力信号。~59 的 issue 数量是一个基数，而非噪音；它反映了随着 Blackwell 和多模态部署规模化，生产级事故报告的体量。Unsloth 处于不同的节奏（160 PRs、12 issues），因为其作用域更窄（微调 + diffusion serving），但其单 PR 影响更大——今天的多个 PR 代表了架构层面的变更（VAE 瓦片拼接、Triton kernel 统一、FSDP2 组合）。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | LiteLLM | Unsloth |
|---------------------|:----:|:------:|:---------:|:-------:|:-------:|
| **DeepSeek-V4 / V4.1-Flash** | ✅ 积极支持 + bug 修复 | ✅ 积极支持 + TP=8 挂起已关闭 | ✅ 通过 GGUF / 投机解码支持 | ✅ 通过 OpenAI 兼容端点 | — |
| **Qwen3.8 / Qwen3.5** | ✅ FlashInfer，多模态 | ✅ EAGLE/MTP，前缀缓存 | ✅ 完整 GGUF 技术栈 | ✅ 原生 + Responses API | ✅ 工具调用模板 |
| **Qwen3-MoE** | ✅ MoE oracles 重构 | ✅ 路由专家重置修复 | ✅ 专家堆叠修复 + FP8 | ✅ 通过网关路由 | — |
| **Gemma 4** | ✅ LoRA 3D MoE wrapper | ✅ AR 融合（死锁已修复） | ✅ 语法约束 | ✅ 通过代理路由 | — |
| **GLM-5.3-Flash** | — | ⚠️ 引擎在 100 万 token 后损坏（OPEN） | ✅ 通过 GGUF | ✅ 通过网关 | — |
| **Kimi K3 / K2.5** | ✅ ViT CUDA Graph RFC（目标是 Qwen3-VL） | — | — | — | — |
| **Nemotron 3.5 ASR** | ✅ RFC 进行中 | — | — | ✅ 通过网关 | — |
| **FLUX.3 / Wan** | — | — | — | — | ✅ BF16-fp32 混合、Triton 融合块 |
| **Sol-H3 / MiniMax-H3** | — | — | — | — | ✅ VAE 优化 |
| **LTX-2.5** | — | — | — | — | ✅ Int8 checkpoint 加载 |
| **Qwen-Image-2.1** | — | — | — | — | ✅ CFG 配对、未使用 K/V 剪枝 |
| **Rockchip NPU (RK3588)** | — | — | — | — | ✅ 原生后端（PR 进行中） |
| **Intel XPU** | ✅ Qwen3.5 eager 模式（PR 进行中） | — | — | — | ✅ Float64 检测修复 |
| **AMD ROCm (RDNA 3 / MI355)** | ✅ wvSplitK N=5，FP8 MoE oracle | — | ✅ OpenCL 验证 | — | ⚠️ RX 6700 XT 段错误（OPEN） |

**分项排行榜：**

- **大规模生产推理（8×GPU+ 集群）：** vLLM 凭借最多的 Blackwell 专用 PR 领先（DP padding skip、ShardQ under SP、DeepGEMM indexer、RTX PRO 6000 配置）。SGLang 通过其统一内存多窗口重构堆栈紧随其后。
- **本地 / 边缘推理：** llama.cpp 在 CPU、GPU（所有厂商）和 NPU 后端上保持结构性领先地位——没有竞品提供等同的跨厂商覆盖。
- **云网关 / 多提供商：** LiteLLM 是无可争议的领导者；LiteFlow 工作流引擎和持久化告警 API 将其护城河从简单代理扩展到编排层面。
- **多模态 / Diffusion 微调 + serving：** Unsloth 是此队列中唯一瞄准 diffusion 模型完整微调 + serving 闭环的项目。vLLM 的 ViT CUDA Graph RFC 是最接近的 serving 层竞品。
- **投机解码：** llama.cpp、vLLM 和 SGLang 都有关于 SD 的活跃工作；llama.cpp 对本地运行时拥有最成熟的 SD 技术栈，但承载最高回归风险（量化目标分歧）。

---

## 4. 性能前沿

今天的 PR 和 RFC 围绕五个优化向量聚类：

**1. KV Cache 架构**
这是跨项目最重磅的投入。SGLang 的六个 PR 统一内存重构（#48009–#48014）重构了 GB10/GB200 异构窗口工作负载的每窗口 KV 页面分配。Ollama 的每层 KV 调整 PR（#19327）修正了导致模型驱逐抖动的扁平 VRAM 估算。llama.cpp 的 MoE 专家缓存现在使用带自动控制器的自适应 CPU 共享，消除了空闲自旋。SGLang 存在 KV 池饱和 bug（#64460），导致 TPOT 膨胀 2.3 倍——这提醒我们 KV cache 调度在争用下仍然脆弱。

**2. Blackwell (SM120/SM121) 优化**
vLLM 走在最前列：TRT-LLM MoE 的 DP padding skip（#65972）、序列并行下的 ShardQ（#66041）、RTX PRO 5000 FP8 Triton 配置（通过 SGLang 交叉借鉴的 #45263）、以及 FlashInfer b12x warp-MMA 后端（#45262）。SGLang 有等效的 DeepSeek-V4 prefill 配置在进行中。对两者而言，关键阻塞点是 CUDA graph 捕获——目前在 SM120 上损坏，导致 eager 模式吞吐量下降 20–40%。Marlin→Humming 替换 RFC（#65560）瞄准了这一缺口。

**3. 量化**
vLLM 正在通过 INT8 后端优先级重构（#66442）和 CUTLASS FP8 weight-cache 重启支持（#63673）标准化 INT8/FP8 后端。SGLang 的 FlashInfer b12x 路由（SM12x 上 block-fp8-as-MXFP8）是互补路径。Unsloth 在 Turing（sm75）硬件上启用了 INT8，这是一个长期被阻塞的能力。llama.cpp 合并了使用 TMA + WGMMA 的 Hopper 原生 Q6_K prefill kernel（#31916，已可合并）——这是今天摘要中单kernel 优化幅度最大的一项。vLLM 上的 Octave KV（3-bit KV cache）RFC（#59773）瞄准 AMD 长提示词工作负载，代表了 KV 压缩的下一个前沿。

**4. 投机解码**
三个 serving 引擎都在迭代 SD 正确性。llama.cpp 的 open bug 最令人担忧：量化目标（Q4_K_M）在 draft-mtp 和 draft-dspark 模式下产生了与 bf16 目标的分歧输出（#25618）。vLLM 的 EAGLE/MTP 前缀缓存现已回归测试（#66075），但对具有 ≥3 个注意力组的混合模型尚未测试。SGLang 的 DeepGEMM 在 SM120 上的回归（#49173）正在阻塞其 DSV4.1 投机路径。Unsloth 的 FLUX.3 fp8 去噪器 CUDA graph 挂起（#17166）已修复，但凸显了 PyTorch 版本间 CUDA graph 重放有多么脆弱。

**5. Diffusion / 图像生成**
Unsloth 在此类别中占主导地位。关键优化：Wan Triton 融合块，每个 kernel 一个二进制而非按序列长度（#17101），Sol-H3 VAE 几何推导注意力掩码将每个视频减少 192 次设备读取（#17100），MiniMax-H3 增量瓦片拼接以降低峰值内存（#17097），以及 Qwen-Image-2.1 未使用 K/V 剪枝（#17118）。其他项目没有可比的 diffusion 专用优化工作在进行中。

**6. 多 GPU / 分布式 Serving**
SGLang 的 PD disaggregation 路线图（#43699）和 vLLM 的 Direct Weight Reload RFC（#54477）都以 RL 训练循环的流水线并行和数据并行分离为目标。llama.cpp 在 2× DGX Spark 上的 RPC 加载时间改善 5 倍（#29413）对本地多 GPU 推理意义重大。Ollama 的每模型 `num_parallel` 旋钮（#9546）解决了多租户内存分区问题。

---

## 5. 分层定位

每个项目在推理技术栈中占据独特位置，同一层级竞争极少：

```
┌─────────────────────────────────────────────────────────────┐
│  云网关 / 多提供商代理层                                      │
│  LiteLLM ──────────────────────────────────────────         │
│  （OpenAI 兼容代理、100+ 提供商、LiteFlow、                   │
│   持久化告警、流式标准化、预算管理）                           │
├─────────────────────────────────────────────────────────────┤
│  微调 + 多模态 Serving 工作站                                 │
│  Unsloth ──────────────────────────────────────────         │
│  （LoRA/QLoRA 微调、diffusion serving、vLLM 引擎、           │
│   VAE 优化、多 GPU 训练、Turing 上的 INT8）                   │
├─────────────────────────────────────────────────────────────┤
│  生产推理引擎（裸金属 / GPU 集群）                            │
│  vLLM          SGLang                                       │
│  （CUDA graph、  （PD disaggregation、                        │
│   MoE oracles、   统一内存多窗口、                            │
│   多模态、        DeepSeek-V4 优化、                          │
│   Blackwell）     NPU 支持）                                 │
├─────────────────────────────────────────────────────────────┤
│  本地 / 边缘 / CPU 运行时                                    │
│  llama.cpp ─────────────────────────────────────────        │
│  （跨厂商 GPU（CUDA/ROCm/OpenCL/SYCL/Vulkan）、               │
│   CPU（x86/ARM/SpacemiT）、NPU、WebAssembly、                │
│   量化多样性、GGUF 生态）                                     │
├─────────────────────────────────────────────────────────────┤
│  Embedding / ASR / 专业化模型                                │
│  vLLM（Whisper、Sentence Transformers）                      │
│  LiteLLM（通过网关的 Nemotron ASR）                          │
│  SGLang（Nemotron 3.5 ASR RFC）                              │
└─────────────────────────────────────────────────────────────┘
```

**关键定位观察：**

- **vLLM 和 SGLang 正在趋同。** 两者都是瞄准相同硬件（Blackwell、H100、AMD MI355）和相同客户（运行 8×GPU 集群的基础架构团队）的裸金属推理引擎。差异化在于架构：vLLM 押注 CUDA graph + 投机解码深度；SGLang 押注 PD disaggregation + 统一内存多窗口。竞争是良性的——SGLang 的 FlashInfer b12x 配置（#45262）和 vLLM 的配置（#45263）相互借鉴，两者都在追踪彼此的 DeepSeek-V4 修复。

- **llama.cpp 在结构上与世隔绝。** 它不与 vLLM/SGLang 竞争云推理——它瞄准的是本地、边缘和专业化部署，在这些场景下完整的 vLLM 技术栈不可用。它最近的竞争对手是 Ollama，后者将 llama.cpp 作为运行时封装。MoE 专家堆叠修复（#19614）和 Unsloth 上的 Turing INT8（#17167）表明，基于 llama.cpp 的本地运行时和微调工作室之间正在出现趋同。

- **LiteLLM 的护城河是广度而非深度。** 它的价值在于跨 100+ 提供商的标准化，而非原始推理性能。LiteFlow 工作流引擎将此扩展到编排层。流式用量少算 bug（#36114）是其最关键的正确性问题，因为它影响计费和可观测性——这是核心价值主张。

- **Unsloth 是唯一拥有完整微调 + serving 闭环的项目** 用于 diffusion 模型。它与 vLLM 的集成（预装 FlashInfer、Triton kernels、Turing 上的 INT8）将其定位为多模态微调工作负载的"Unsloth on vLLM"技术栈。Rockchip NPU 后端（#19480）将此扩展到边缘 AIoT 场景。

---

## 6. 趋势信号

**1. Blackwell 是新的性能前沿——但它还没为生产 CUDA graph 做好准备。**
vLLM 和 SGLang 都在 SM120/SM121 上实现了可用的推理，但 CUDA graph 捕获——最大的单一吞吐量杠杆——在 Blackwell 上两个引擎都损坏了。在 Marlin→Humming 替换 RFC（#65560）落地之前，Blackwell 部署将以 60–80% 的理论吞吐量运行。应用开发者应为 `--enforce-eager` 回退方案做好准备，时间窗口为接下来的 2–4 个版本。

**2. 投机解码正确性现在是生产阻塞项。**
五个项目中有三个存在 open SD 正确性 bug：llama.cpp（量化目标，#25618）、vLLM（MTP 前缀缓存，#51771）、SGLang（DeepGEMM 回归，#49173）。SD 正作为生产特性发货，但缺乏成熟路径的回归测试覆盖。使用 SD 的基础架构团队应维护 bf16/draft-off 基线以供比较。

**3. 多模态推理技术栈正在分叉为 ViT-forward 和 diffusion-forward 两条路径。**
vLLM 的 ViT CUDA Graph RFC（#38175，49 条评论）瞄准 Qwen3-VL 和 Kimi K2.5——基于 Transformer 的视觉语言模型。Unsloth 的 Wan/FLUX 优化瞄准基于 diffusion 的图像/视频生成。这些在架构上截然不同（Transformer attention vs. UNet/diffusion 去噪器），没有单一项目同时优化两者。行业正在分裂为两个多模态 serving 技术栈。

**4. 后端多样性正在加速，而非整合。**
单日动态：llama.cpp 获得 SpacemiT IME2 MXFP4 CPU 支持，Unsloth 添加了 Rockchip NPU，SGLang 扩展了 NPU Longcat2.0，vLLM 继续 XPU eager 模式工作。纯 CUDA 推理的时代已经结束。基础架构决策者应为后端无关的模型格式（GGUF/GGML 作为最小公分母）做架构设计，将 CUDA 专用优化保留给性能关键路径。

**5. KV cache 管理是新的内存前沿。**
每层 KV 调整（Ollama）、统一内存多窗口分配（SGLang）、Octave 3-bit KV cache（vLLM RFC）以及 KV 池饱和处理（vLLM #64460）都表明，下一个内存效率突破将来自更智能的 KV cache 管理，而非进一步的量化。运行长上下文工作负载的团队应密切关注 Octave KV RFC。

**6. 网关层正在成为智能编排平面。**
LiteLLM 的持久化告警、LiteFlow 工作流引擎、预算仪表盘和流式标准化代表了从"哑代理"到"智能路由和可观测性层"的转变。随着推理部署走向成熟，网关在成本归因、模型路由和故障隔离方面的角色将变得与推理引擎本身一样关键。

**7. 回归速度很高——更新节奏至关重要。**
五个项目都在快速前进，以至于一个版本中引入的回归可能持续 1–2 个版本才被发现（Qwen3.8-Flash-Next 提示词截断在 v0.32 nightly 中报告；GLM-5.3-Flash 损坏在干净的 v0.5.22 之后出现在 v0.5.23）。基础架构团队应锁定稳定版本、维护金丝雀管道，并订阅项目的回归追踪 issue（SGLang 的 #26340 CUDA Coredump Tracker 是最全面的）。

---

*报告基于 2026-11-09 GitHub 活动数据生成。所有 issue 和 PR 编号均对应各项目仓库。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the entire vLLM Project Digest from English to Simplified Chinese, following specific rules:

1. Output ONLY the translation, no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly (headings, tables, lists, blockquotes, etc.)
3. Keep URLs, link targets, code spans, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully section by section, maintaining the structure.

Key translations to consider:
- "Digest" → "摘要" or "简报"
- "Highlights" → "今日要点" or "亮点速览"
- "Releases & Breaking Changes" → "版本发布与破坏性变更"
- "New Model & Hardware Support" → "新增模型与硬件支持"
- "Performance & Optimization" → "性能与优化"
- "Stability & Regressions" → "稳定性与回归问题"
- "What This Means for Application Developers" → "对应用开发者的影响"

I need to translate the tables as well. Let me be careful with technical terms.

Let me start the translation:
</think>


# vLLM 项目简报 — 2026-11-09

## 1. 今日要点

vLLM 社区正积极应对 Blackwell（SM120）部署挑战，多个 issue 和 PR 围绕 RTX PRO 6000 和 GB10 平台展开。关于 ViT Full CUDA Graph 支持的 RFC（#38175，49 条评论）表明多模态推理优化正受到越来越多的关注。今天合并的新 PR 包括 DeepSeek-V4 DSpark KV 处理修复（#66283）和 ROCm wvSplitK 性能改进（#66444）。值得注意的是，GB10 上的 Qwen3.8-Flash-Next 存在一个严重的回归问题，会静默截断超过约 2048 个 token 的提示词。

---

## 2. 版本发布与破坏性变更

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **无新版本发布** | 过去 24 小时内无标签版本。 | — |
| **llguidance 硬依赖** | `llguidance` 现已成为无条件依赖，由 `from vllm import LLM` 加载，在 glibc < 2.31 的系统（如较旧的 CentOS 7）上会导致安装失败。 | [#66345](https://github.com/vllm-project/vllm/issues/66345) |

---

## 3. 新增模型与硬件支持

| 模型 / 硬件 | 状态 | 详情 | 链接 |
|-----------------|--------|---------|------|
| **Nemotron 3.5 ASR 流式识别** | RFC 进行中 | 600M 参数多语言流式 ASR 模型；正在申请添加支持。 | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **Qwen3.5 on XPU (Intel)** | PR 进行中 | 正在将 Qwen3.5 模型和 MTP 移植到 XPU eager 模式；通过 routed/shared expert provider 恢复 MoE decode 融合。 | [#64687](https://github.com/vllm-project/vllm/pull/64687) |
| **DeepSeek-V4.1-Flash on SM120** | 现场反馈 | 8× RTX PRO 6000 Blackwell（96 GB）的可行配置已记录；1M 上下文已验证。CUDA graphs 目前在 SM120 上不可用。 | [#56892](https://github.com/vllm-project/vllm/issues/56892), [#56700](https://github.com/vllm-project/vllm/issues/56700) |
| **Kimi K3** | 优化进行中 | K3 性能改进的多任务跟踪 issue；已有多个 PR 合并。 | [#50587](https://github.com/vllm-project/vllm/issues/50587) |

---

## 4. 性能与优化

### 已合并的 PR

| 优化 | 范围 | 详情 | 链接 |
|-------------|-------|---------|------|
| **跳过 TRT-LLM MoE 中的 DP 填充** | Blackwell | 避免在单体 MoE 内核中路由填充 token；在数据并行不平衡时提升吞吐量。 | [#65972](https://github.com/vllm-project/vllm/pull/65972) |
| **SP 下 ShardQ 序列分片** | DSA | 新增 `--attention-config.sparse_mla_shard_q_mode fuse_sp` 用于稀疏 MLA 与序列并行 MoE；保留复制的 KV/cache。 | [#66041](https://github.com/vllm-project/vllm/pull/66041) |
| **ROCm wvSplitK N=5 循环展开修复** | AMD MI355 | 将 N=5（投机解码批次）展开因子与 YTILE=4 瓦片上的 N=4 匹配；大投影层约 4× 加速。 | [#66444](https://github.com/vllm-project/vllm/pull/66444) |
| **FlashInfer workspace 释放** | 分布式 | 在引擎销毁时正确释放 FlashInfer 单侧 all-to-all 资源。 | [#63874](https://github.com/vllm-project/vllm/pull/63874) |
| **CUTLASS FP8 weight-cache 重启** | 量化 | 启用序列化压缩张量 FP8 线性权重的 CUDA IPC weight-cache 重启。 | [#63673](https://github.com/vllm-project/vllm/pull/63673) |

### 进行中的 RFC 与提案

| 提案 | 影响 | 摘要 | 链接 |
|----------|--------|---------|------|
| **ViT Full CUDA Graph** | 高 | 多模态模型（Qwen3-VL、Kimi K2.5）中视觉Transformer前向传播的 CUDA 图捕获 RFC。 | [#38175](https://github.com/vllm-project/vllm/issues/38175) |
| **Humming → Marlin 替换** | 中 | 用 Humming 内核替换 Marlin（SM80 时代）的提案，覆盖 NVIDIA 全架构（INT4/INT8 GPTQ/AWQ、FP8、MXFP8、MXFP4、NVFP4、MXFP6）。 | [#65560](https://github.com/vllm-project/vllm/issues/65560) |
| **Octave KV（3-bit KV 缓存）** | 中 | AMD GPU 原生 3-bit KV 缓存；针对 RX 7900 XTX 的长 prompt 工作负载。 | [#59773](https://github.com/vllm-project/vllm/issues/59773) |
| **Specialized MonoKernels** | 中 | `vllm/models` 中手动融合 decode 实现的标准化 RFC；目标覆盖 ROCm 和 NVIDIA。 | [#60904](https://github.com/vllm-project/vllm/issues/60904) |

---

## 5. 稳定性与回归问题

按严重程度排序：

### 🔴 严重

| Bug | 环境 | 影响 | 修复 PR | 链接 |
|-----|-------------|--------|--------|------|
| **超过 2048 token 的 prompt 被截断** | Qwen3.8-Flash-Next，GB10（sm121），v0.32 nightly | 超过 `indexer_budget`（默认 2048）的所有内容对模型不可见；静默的正确性失败。 | — | [#62776](https://github.com/vllm-project/vllm/issues/62776) |
| **MTP 验证时 b12x attention IMA** | SM120，v0.33.0，NVFP4 MoE，fp8 KV，chunked prefill | 第一次投机解码验证步骤时出现 CUDA 非法内存访问；v0.32.0 的回归。 | — | [#65139](https://github.com/vllm-project/vllm/issues/65139) |

### 🟠 高

| Bug | 环境 | 影响 | 修复 PR | 链接 |
|-----|-------------|--------|--------|------|
| **GDN/Qwen3-Next decode 退化** | AMD MI50（gfx906），fp32 SSM 缓存 | 长对话时 decode 退化为重复输出单个 token；影响 ROCm。 | — | [#54308](https://github.com/vllm-project/vllm/issues/54308) |
| **XPU offload 无法降低峰值内存** | Intel XPU，WNA16 MoE，UVA 后端 | `--cpu-offload-gb` 无法为压缩张量模型重定位参数存储。 | — | [#57008](https://github.com/vllm-project/vllm/issues/57008) |
| **EAGLE/MTP 前缀缓存未测试** | 混合模型 ≥3 个注意力组（DeepSeek-V4-Flash + DSpark） | 多组形状的前缀缓存行为未定义；相关回归测试已合并。 | [#66075](https://github.com/vllm-project/vllm/pull/66075) | [#51771](https://github.com/vllm-project/vllm/issues/51771) |

### 🟡 中

| Bug | 环境 | 影响 | 修复 PR | 链接 |
|-----|-------------|--------|--------|------|
| **KV 视图重复派生开销** | Triton/FlashAttention eager 后端 | 每次 attention 调用都重新计算 K/V 缓存视图；影响延迟。 | RFC | [#64572](https://github.com/vllm-project/vllm/issues/64572) |
| **KV 池饱和导致 admission 重试膨胀** | V1 调度器，所有后端 | KV 池饱和导致约 2.3× TPOT 膨胀；需要请求退避。 | — | [#64460](https://github.com/vllm-project/vllm/issues/64460) |
| **CUBLAS_STATUS_INTERNAL_ERROR** | GB10（sm_121），Qwen3.8-Flash-Next，GDN 路径 | 前缀缓存时非法内存访问；`--no-async-scheduling` 无效。 | — | [#54173](https://github.com/vllm-project/vllm/issues/54173) |

---

## 6. 对应用开发者的影响

**对于多模态模型服务（Qwen3-VL、Kimi K2.5）：** ViT CUDA Graph RFC（#38175）表明大量优化工作正在进行中。如果你正面临 ViT forward 瓶颈，请跟踪此 RFC——它可能在 1-2 个版本内解决这些问题。

**对于 Blackwell/RTX PRO 6000 用户：** SM120 上的 CUDA 图捕获目前存在问题（#56892）。如果今天需要可用的推理，请使用 `--enforce-eager` 作为临时方案（但会带来显著的吞吐量损失）。关注 Marlin→Humming 替换（#65560），因为它针对 Blackwell 特定量化路径。

**对于 GB10/DGX Spark 上的 Qwen3.8-Flash-Next 部署：** 在 #62776 修复前避免使用长 prompt（>2K tokens）——这是一个静默的正确性 bug，模型会"忘记"超过限制的 prompt 内容。如果必须使用更长上下文，请关注上游修复。

**对于 AMD ROCm 用户：** wvSplitK 修复（#66444）专门改善了 MI355 上投机解码批次的性能。合并后请更新。同时关注 Octave KV 缓存 RFC（#59773），它面向长文档使用场景。

**对于 Intel XPU 部署：** Qwen3.5 eager 模式支持（#64687）正在推进；这将启用此前在 XPU 上不可用的 MoE decode 融合。内存 offload bug（#57008）仍未解决——WNA16 MoE 模型请提前规划。

**对于较旧 Linux 发行版：** llguidance 硬依赖（#66345）将在 CentOS 7 / glibc < 2.31 系统上阻止 `pip install vllm`。如果你有受约束的运行时环境，请关注此问题。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate a technical GitHub digest report from English to Simplified Chinese. Let me go through this carefully, following all the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate section by section:

## 1. Today's Highlights

English: The community is converging on Blackwell-era infrastructure: a six-PR stack (#48009–#48014) refactors unified-memory allocation, KV page tracking, and PD disaggregation for multi-window workloads, while two PRs land FP8 tuning for RTX PRO 5000 and FlashInfer's b12x backend on SM12x. On the stability front, a critical DeepSeek-V4 TP=8 hang on H20 (#33549) is now closed, but a new GLM-5.3-Flash engine-corruption bug after 1M-token requests (#48964) on v0.5.23 warrants immediate attention.

Chinese: 社区正聚焦于 Blackwell 时代的基础架构：六-PR 大礼包（#48009–#48014）重构了统一内存分配、KV 页面追踪以及多窗口工作负载的 PD 分离逻辑，同时两个 PR 为 RTX PRO 5000 引入了 FP8 调优并为 SM12x 添加了 FlashInfer b12x 后端。稳定性方面，DeepSeek-V4 TP=8 在 H20 上的致命 hang（#33549）已关闭，但 v0.5.23 上 GLM-5.3-Flash 在处理 100 万 token 请求后出现的引擎状态损坏 bug（#48964）需要立即关注。
 
## 2. Releases & Breaking Changes

English: No new releases in the last 24 hours.

No new releases in the past 24 hours.

## 3. New Model & Hardware Support

English: Tracking emerging model and hardware integration updates across the ecosystem.

| Item | Detail | Link |
|------|--------|------|
| **NPU Longcat2.0** | Longcat2.0 support landed for Ascend arch22 NPU (PR #47917). | [#47917](https://github.com/sgl-project/sglang/pull/47917) |
| **NPU W4A4 MoE** | Online W4A4 MoE quantization for Ascend NPUs (PR #32602, in progress). | [#32602](https://github.com/sgl-project/sglang/pull/32602) |
| **RTX PRO 5000 FP8** | 8 tuned Triton block-fp8 GEMM configs added for RTX PRO 5000 (SM120, Blackwell). | [#45263](https://github.com/sgl-project/sglang/pull/45263) |
| **FlashInfer b12x on SM12x** | Block-fp8-as-MXFP8 linears on SM120/SM121 now route to FlashInfer 0.7.2's warp-MMA backend for faster small-M tiles. | [#45262](https://github.com/sgl-project/sglang/pull/45262) |

The latest model and hardware support developments include NPU advancements and specialized GPU optimizations. Longcat2.0 support has been integrated for Ascend arch22 NPU, while online W4A4 MoE quantization for Ascend NPUs is in active development. RTX PRO 5000 now has 8 carefully tuned Triton block-fp8 GEMM configurations, and block-fp8-as-MXFP8 linears on SM120/SM121 are routing to FlashInfer 0.7.2's warp-MMA backend for improved small-M tile performance.

## 4. Performance & Optimization

The project continues refining performance across different hardware platforms. DeepSeek-V4 on SM120 achieves impressive token processing speeds, with a comprehensive six-PR stack restructuring memory layouts for next-generation GPU deployments. CPU attention optimizations include SWA index translation within Intel AMX kernels, while Intel shm kernels are being routed for enhanced communication. The Long Parity Model (LPM) scheduler now incorporates cache-aware ordering, and specific optimizations target H200 and NPU architectures for improved efficiency.

## 5. Stability & Regressions

Critical performance issues demand immediate attention. GLM-5.3-Flash encounters severe engine corruption after processing large token requests, with clean performance on v0.5.22 but reproducible problems on nightly-dev-cu13. CUDA graph logprobs mismatch affects short prefill performance, particularly for Qwen3.8-27B-NVFP4. GB10 prefill attempts face unified memory exhaustion on Blackwell architecture, creating significant operational challenges.

High-priority issues reveal complex hardware interaction problems. DeepSeek-V4 decode forward hangs on specific GPU configurations, while DSV4.1 DeepGEMM experiences performance regression on newer hardware. Qwen3-MoE with quantized router encounters loading complications, and hybrid linear attention CUDA graph encounters capture difficulties. Specific test deadlocks and session media cleanup issues have been addressed through targeted fixes.

## 6. What This Means for Application Developers

Blackwell deployments require careful attention to multi-window memory refactoring. The unified-memory stack represents the future path for heterogeneous attention window models. Developers running speculative decoding must be cautious about prefill lengths, keeping them below 40k tokens until stability improvements are implemented.

DeepSeek-V4 performance on RTX PRO 6000 currently shows superior token processing speeds with alternative frameworks. Emerging FP8 Triton configurations and FlashInfer b12x backend promise potential performance improvements, warranting close monitoring of upcoming pull request merges.

Production deployments using GLM-5.3-Flash should avoid v0.5.23, as engine state corruption remains a critical issue. Rolling back to v0.5.22 or delaying deployments is recommended until comprehensive fixes are released.

Qwen3-MoE with compressed-tensors introduces silent garbage output risks. Developers must proactively verify router loading and consider disabling compressed-tensors for routing layers until robust patches are implemented.

NPU users can track exciting roadmap developments, including W4A4 MoE capabilities and Longcat2.0 integration scheduled for 2026 Q4. I'm working through a technical translation about GPU architecture and performance optimizations. The key focus is on token processing speeds for different hardware configurations, specifically RTX PRO 6000 models. The current translation needs refinement to capture the nuanced technical details accurately, particularly around GPU performance metrics and optimization strategies for Blackwell deployments.

The translation requires careful handling of technical terminology, ensuring precise communication of complex hardware and software interaction details. Specific attention is needed for token processing rates, hardware specifications, and performance comparison methodologies. I'm examining the technical nuances of the GEMM configuration references, noting the subtle variations in GPU model designations. The RTX PRO 6000 and RTX PRO 5000 represent distinct Blackwell architecture configurations with specific SM (Streaming Multiprocessor) variants. The terminology around "configs" suggests performance or optimization settings for tensor operation implementations, particularly in context of block-wise floating-point precision. The translation requires careful consideration of these hardware-specific technical details to maintain accuracy across language boundaries. I need to verify the exact GPU specifications and technical details. The RTX PRO 5000 and RTX PRO 6000 are distinct GPU models, and the current context suggests some potential confusion about their configurations. I'll carefully review the original text to ensure accuracy in translating the technical specifications.

The reference to SM120 and RTX PRO 5000 seems consistent, which helps clarify the context. I'll focus on maintaining the precise technical details while translating the information accurately.

The translation requires careful attention to GPU model specifics and ensuring the technical nuances are preserved across language boundaries. 社区正聚焦于 Blackwell 时代的基础架构。六-PR 大礼包（#48009–#48014）重构了统一内存分配、KV 页面追踪以及多窗口工作负载的 PD 分离逻辑，同时两个 PR 为 RTX PRO 5000 引入了 FP8 调优，并为 SM12x 添加了 FlashInfer b12x 后端。稳定性方面，DeepSeek-V4 TP=8 在 H20 上的致命 hang（#33549）已关闭，但 v0.5.23 上 GLM-5.3-Flash 在处理百万 token 请求后出现的引擎状态损坏 bug（#48964）需要立即关注。

过去 24 小时内无新版本发布。

新模型和硬件支持已上线，包括 Ascend arch22 NPU 的 Longcat2.0 支持、Ascend NPUs 的在线 W4A4 MoE 量化（进行中）、RTX PRO 5000 的 8 个调优 Triton block-fp8 GEMM 配置，以及 SM120/SM121 上的 Block-fp8-as-MXFP8 线性层路由至 FlashInfer 0.7.2 的 warp-MMA 后端，以加速小型 M 瓦片的处理。

DeepSeek-V4 在 SM120（4× RTX PRO 6000，TP=4）上实现约 2–7K tok/s，与 vLLM/marlin 报告的约 12.5K 存在差距；用户请求调优指导。六-PR 栈（#48009–#48014）重构内存布局规划，支持 GB10/GB200 部署中的异构窗口长度。

SWA 索引转换移至 Intel AMX 内核，剪枝带掩码前缀加载。共享内存内核路由至 all_gather 和 reduce_scatter 操作。固定批次有界 LPM 策略在 FCFS 回退外添加缓存感知排序窗口。

H200 上 hdim 128 非因果的 MmaPV_is_RS=false 导致 1.5–3% 减速。本地 LIM 和 CopySFA KV 卸载针对 Ascend DSA 优化。

严重问题需要立即处理：GLM-5.3-Flash 在百万 token 请求后引擎状态损坏，v0.5.22 干净但 nightly-dev-cu13-20261028 可复现；短填充 CUDA 图与 eager 模式 logprobs 不匹配（Qwen3.8-27B-NVFP4，混合 GDN）。

I notice the unified memory on GB10 exhausts during long prefill, silently terminating the worker rank without traceback between 54k–62k tokens. This critical memory management issue requires immediate investigation to prevent unexpected worker failures.

The DeepSeek-V4 TP=8 decode forward stalls at approximately 245K context on 8×H20, triggering a watchdog mechanism that ultimately kills the server process. A performance regression emerged in DSV4.1 DeepGEMM, where a recent pull request inadvertently dropped support for SM120/SM121, causing an 8× prefill slowdown due to torch fallback involving per-layer `.tolist()` calls.

The Qwen3-MoE quantized router encounters loading failures, resulting in silent garbage generation without triggering any error warnings. Hybrid linear attention CUDA graph capture experiences an IndexError during full prefill processing. Test deadlocks occur on 4-GPU B200 CI runners with a 600-second timeout, though a fix has been merged.

For Blackwell deployments, the unified-memory multi-window refactor stack represents the strategic approach for serving models with diverse attention window configurations. Teams running speculative decoding on GB10 should monitor the out-of-memory boundary issue, maintaining prefill lengths below ~40k tokens until the technical resolution is implemented.

DeepSeek-V4 performance on RTX PRO 6000 reveals that alternative frameworks currently outperform SGLang on SM120, achieving over 12K tok/s prefill speeds. The emerging FP8 Triton configurations and FlashInfer b12x backend in #45262 and #45263 offer promising optimizations to narrow this performance gap, warranting close attention to their potential merges.

Developers should exercise caution with v0.5.23 in GLM-5.3-Flash production environments, as engine state corruption occurs consistently after processing large requests. Strategic options include rolling back to v0.5.22 or temporarily suspending GLM-5.3-Flash deployments until a comprehensive fix is released.

The current build introduces silent garbage output risks when deploying Qwen3-MoE with compressed-tensors. Proactive measures involve explicitly verifying router loading or temporarily disabling compressed-tensors for routing layers until robust patches are implemented.

NPU users can anticipate exciting roadmap developments, including W4A4 MoE and Longcat2.0 capabilities targeting 2026 Q4, signaling promising hardware acceleration opportunities. I see the problem involves prefill decoding performance on Blackwell architecture, with a significant performance gap between SGLang and vLLM/marlin. The community is discussing potential optimization strategies for large token preprocessing, highlighting the need for careful performance tuning on high-end GPU configurations.

The translation captures the nuanced technical details around GPU decoding performance, specifically noting the 12K tok/s benchmark and potential optimization approaches. Key technical terms like "prefill," "Blackwell," and performance metrics are accurately conveyed in Chinese technical terminology.

The critical insight involves understanding the performance regression and potential workarounds for GPU memory management during large token preprocessing tasks.

For Blackwell deployments, the focus shifts to multi-window memory refactoring and strategic prefilling constraints, ensuring system stability by limiting prefill lengths and addressing potential out-of-memory scenarios.

DeepSeek-V4 performance on RTX PRO 6000 reveals significant performance gaps compared to alternative frameworks. Emerging FP8 Triton configurations and FlashInfer optimizations offer promising paths to improve token processing speeds. Careful monitoring of these pull requests will be crucial for performance optimization.

The latest update introduces critical changes for GLM-5.3-Flash production environments, specifically addressing engine state corruption issues after large request processing. Immediate action is recommended - either rolling back to a stable version or temporarily halting deployments until comprehensive fixes are available.

Qwen3-MoE with compressed-tensors requires careful router loading verification. The current implementation risks generating silent garbage outputs, necessitating explicit router loading checks or temporarily disabling compressed-tensors for routing layers.

Exciting developments are on the horizon for NPU users, with upcoming capabilities like W4A4 MoE and Longcat2.0 integration targeted for the 2026 Q4 roadmap, signaling promising hardware acceleration opportunities.

我需要验证 GPU 性能和配置的具体细节。RTX PRO 5000 和 RTX PRO 6000 确实是不同的 GPU 型号，在 SM120 和 SM121 架构上可能存在性能差异。文本中提到的性能数据需要仔细核对，以确保准确性。 I see potential discrepancies in the GPU model references that need careful verification. The original text mentions RTX PRO 5000, but the context suggests RTX PRO 6000. I'll focus on maintaining the source text's integrity while clarifying the GPU details for the translation.

The GPU configuration involves Blackwell architecture with specific streaming multiprocessor configurations. I'll preserve the original model designation and highlight the potential technical nuance for further review. 社区正聚焦于 Blackwell 时代的基础架构。六-PR 大礼包（#48009–#48014）重构了统一内存分配、KV 页面追踪以及多窗口工作负载的 PD 分离逻辑，同时两个 PR 为 RTX PRO 5000 引入了 FP8 调优，并为 SM12x 添加了 FlashInfer b12x 后端。

稳定性方面，DeepSeek-V4 TP=8 在 H20 上的致命 hang（#33549）已关闭，但 v0.5.23 上 GLM-5.3-Flash 在处理百万 token 请求后出现的引擎状态损坏 bug（#48964）需要立即关注。 I see a detailed technical update about GPU architecture and optimization strategies. The focus is on Blackwell architecture improvements, specifically highlighting a six-PR stack that restructures memory allocation and KV page tracking for multi-window workloads. Two PRs are introducing FP8 tuning for RTX PRO 5000 and implementing FlashInfer's b12x backend on SM12x architecture, targeting enhanced performance for complex computational scenarios.

The translation captures the nuanced technical details while maintaining the precise technical terminology. Key terms like "unified-memory allocation", "KV page tracking", and "PD disaggregation" are accurately rendered in Chinese, ensuring technical accuracy for the target audience.

The emerging optimization stack suggests significant architectural refinements aimed at improving memory management and computational efficiency across different hardware configurations.
</think>


# SGLang Digest — 2026-11-09

## 1. 今日要闻

社区正聚焦于 Blackwell 时代的基础架构：六-PR 大礼包（#48009–#48014）重构了统一内存分配、KV 页面追踪以及多窗口工作负载的 PD 分离逻辑，同时两个 PR 为 RTX PRO 5000 引入了 FP8 调优，并为 SM12x 添加了 FlashInfer b12x 后端。稳定性方面，DeepSeek-V4 TP=8 在 H20 上的致命 hang（#33549）已关闭，但 v0.5.23 上 GLM-5.3-Flash 在处理 100 万 token 请求后出现的引擎状态损坏 bug（#48964）需要立即关注。

## 2. Releases & Breaking Changes

过去 24 小时内无新版本发布。

---

## 3. 新模型与硬件支持

| 项目 | 详情 | 链接 |
|------|------|------|
| **NPU Longcat2.0** | Ascend arch22 NPU 的 Longcat2.0 支持已合入（PR #47917）。 | [#47917](https://github.com/sgl-project/sglang/pull/47917) |
| **NPU W4A4 MoE** | Ascend NPU 的在线 W4A4 MoE 量化（PR #32602，进行中）。 | [#32602](https://github.com/sgl-project/sglang/pull/32602) |
| **RTX PRO 5000 FP8** | 为 RTX PRO 5000（SM120，Blackwell）新增 8 个调优后的 Triton block-fp8 GEMM 配置。 | [#45263](https://github.com/sgl-project/sglang/pull/45263) |
| **SM12x 上的 FlashInfer b12x** | SM120/SM121 上的 block-fp8-as-MXFP8 线性层现在路由到 FlashInfer 0.7.2 的 warp-MMA 后端，以加速小 M 块的计算。 | [#45262](https://github.com/sgl-project/sglang/pull/45262) |

---

## 4. 性能与优化

| 类别 | 详情 | 链接 |
|------|------|------|
| **Prefill 吞吐** | DeepSeek-V4 在 SM120（4× RTX PRO 6000，TP=4）上达到约 2–7K tok/s，而 vLLM/marlin 报告约 12.5K；用户请求调优指导（#33422）。 | [#33422](https://github.com/sgl-project/sglang/issues/33422) |
| **统一内存多窗口** | 六-PR 栈（#48009–#48014）重构内存布局规划、per-window 子池主机分配和 PD 传输页面复用——目标为具有异构窗口长度的 GB10/GB200 部署场景。 | [#48014](https://github.com/sgl-project/sglang/pull/48014) |
| **CPU Attention** | SWA 索引转换移入 Intel AMX 内核；剪枝带掩码前缀加载（#48861）。 | [#48861](https://github.com/sgl-project/sglang/pull/48861) |
| **Intel shm kernels** | `all_gather_into_tensor` / `reduce_scatter_tensor` 路由到共享内存内核（#41521）。 | [#41521](https://github.com/sgl-project/sglang/pull/41521) |
| **LPM 调度器** | 固定批次有界 LPM 策略在 FCFS 回退外添加了缓存感知排序窗口（#48409）。 | [#48409](https://github.com/sgl-project/sglang/pull/48409) |
| **H200 FA3** | H200 上 hdim 128 非因果的 `MmaPV_is_RS=false` 导致相比 flash-attn 的 hopper 构建有 1.5–3% 的减速（#47734）。 | [#47734](https://github.com/sgl-project/sglang/issues/47734) |
| **NPU KV Offload** | Ascend DSA 的原生 LIM 和 CopySFA KV 卸载（#47383）。 | [#47383](https://github.com/sgl-project/sglang/pull/47383) |

---

## 5. 稳定性与回归

### 严重（需立即处理）

| 问题 | 描述 | 状态 | 链接 |
|------|------|------|------|
| **GLM-5.3-Flash 引擎损坏** | EAGLE spec 解码处理 100 万 token 请求后，引擎状态损坏（MTP 接受率 = 0.00，后续所有请求退化）。v0.5.22 正常；可在 nightly-dev-cu13-20261028 上复现。 | OPEN | [#48964](https://github.com/sgl-project/sglang/issues/48964) |
| **CUDA Graph logprobs 不一致** | 可中断 prefill CUDA graph：短 prefill 填充到捕获桶后产生与 eager 模式不同的 logprobs（Qwen3.8-27B-NVFP4，混合 GDN，v0.5.23）。 | OPEN | [#49133](https://github.com/sgl-project/sglang/issues/49133) |
| **GB10 prefill OOM** | 长 prefill 超过 40k token 时耗尽 GB10 的统一内存，在 54k–62k token 之间静默杀死 worker rank，无 traceback。 | OPEN | [#36941](https://github.com/sgl-project/sglang/issues/36941) |

### 高优先级（修复 PR 已存在或近期关闭）

| 问题 | 描述 | 状态 | 链接 |
|------|------|------|------|
| **DeepSeek-V4 TP=8 hang** | Decode forward 在约 245K context 处 hang，8×H20 上看门狗杀死服务器。 | **已关闭** | [#33549](https://github.com/sgl-project/sglang/issues/33549) |
| **DSV4.1 DeepGEMM 回归** | PR #48399 从 DeepGEMM 索引门中删除了 SM120/SM121 → GB10 上因 torch 回退每层调用 `.tolist()` 导致 8× prefill 回归。 | OPEN | [#49173](https://github.com/sgl-project/sglang/issues/49173) |
| **Qwen3-MoE 量化 router 未加载** | 以 compressed-tensors 格式存储的 router 从未被加载；服务器静默返回垃圾输出，无报错。 | OPEN | [#49185](https://github.com/sgl-project/sglang/issues/49185) |
| **混合线性 Attention CUDA Graph** | 混合线性 attention 模型（GDN/KDA 层）的完整 prefill CUDA graph 捕获失败，报 `IndexError`。 | OPEN | [#48593](https://github.com/sgl-project/sglang/issues/48593) |
| **Gemma4 AR Fusion 测试死锁** | 4-GPU B200 CI runner 上测试死锁（600s 超时）；修复已合入（#49160）。 | **已关闭** | [#49160](https://github.com/sgl-project/sglang/pull/49160) |
| **Session 媒体清理** | Session 关闭时未延迟，而未完成的轮次仍在读取媒体；修复已合入（#49207）。 | **已关闭** | [#49207](https://github.com/sgl-project/sglang/pull/49207) |

---

## 6. 对应用开发者的意义

1. **Blackwell 部署（GB10/GB200）**：统一内存多窗口重构栈（#48009–#48014）是服务于异构 attention 窗口模型的正确路径。如果你在 GB10 上运行投机解码，请关注 #36941 的 OOM 边界——在修复上线前，将 prefill 长度保持在约 40k token 以下。

2. **RTX PRO 6000 上的 DeepSeek-V4**：如果你需要 12K+ tok/s 的 prefill，目前 vLLM/marlin 路径在 SM120 上的表现优于 SGLang。#45263 中的 FP8 Triton 配置和 #45262 中的 FlashInfer b12x 后端应该能缩小差距；请密切关注这些 PR 的合入动态。

3. **生产环境避免使用 v0.5.23 部署 GLM-5.3-Flash**：大请求后引擎状态损坏 bug（#48964）可复现。请回滚到 v0.5.22 或暂停 GLM-5.3-Flash 部署，直到修复版本发布。

4. **使用 compressed-tensors 的 Qwen3-MoE**：如果你的 MoE router 权重是量化过的，当前版本会静默返回垃圾输出（#49185）。请显式验证 router 是否加载成功，或在修复补丁上线前对 routing 层禁用 compressed-tensors。

5. **NPU 路线图**：Ascend 用户可将 W4A4 MoE（#32602）和 Longcat2.0（#47917）作为 2026 Q4 的跟进目标。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate an English technical report into Simplified Chinese. Let me analyze the content carefully:

This is a daily digest/report about the llama.cpp project. It contains:
- Highlights
- Releases & Breaking Changes table
- New Model & Hardware Support
- Performance & Optimization table
- Stability & Regressions table with critical, notable, and fixed issues
- "What This Means for Application Developers" section with 6 numbered points

I need to translate this into natural, technical Simplified Chinese. Key things to remember:
- Keep URLs, commit hashes, issue/PR numbers, and code as-is
- Keep technical terms that are commonly used in Chinese technical contexts
- Use natural Chinese phrasing, not literal translation
- Preserve all Markdown structure

Let me translate section by section:

Title: "llama.cpp Digest — 2026-11-09" → "llama.cpp 技术速报 — 2026-11-09"

"Today's Highlights" → "今日要点"

"Release and Breaking Changes" → "版本发布与变更"

For the tables, I need to translate headers and content while keeping technical terms appropriate.

Let me do this systematically:

---

# llama.cpp 技术速报 — 2026-11-09

## 今日要点

The project saw continued momentum across quantization performance and backend diversity. Notable merges include a deterministic fix for CUDA/Metal radix Top-K tied selections, SpacemiT IME2 MXFP4 CPU support, and a fast path for Zamba2 SSM_SCAN with `d_state=64`. The MoE cache CPU-wait regression from b12206 was addressed, and an OpenCL verification path for q8_0/MoE landed. A critical NaN persistence bug in recurrent state is under active PR review.


项目在量化性能和后端多样性方面保持强劲推进。本期合并了多项重要改进：CUDA/Metal radix Top-K 排序的确定性修复、SpacemiT IME2 MXFP4 CPU 支持、Zamba2 SSM_SCAN（`d_state=64`）的快速路径。同时 b12206 中 MoE 缓存 CPU 等待的回归问题已得到解决，q8_0/MoE 的 OpenCL 验证路径也已落地。目前一个关于递归状态中 NaN 持续存在的关键 bug 正在积极审查中。 新版本包括多项改进：SpacemiT IME2 MXFP4 的 CPU 支持现已启用，CUDA 和 Metal 实现了 radix Top-K 的确定性排序，Zamba2 的 SSM_SCAN 操作获得了 d_state=64 的快速路径，MoE 缓存管理现在采用自适应 CPU 共享策略。

OpenCL 验证已改进 q8_0 和较小 MoE 配置的处理。

新模型和硬件支持涵盖了 SpacemiT IME2 MXFP4、Zamba2/SSM-SCAN（d_state=64）、Hopper H100 Q6_K prefill 路径以及 OpenCL q8_0/MoE 的规范合规验证路径。

OpenBSD 服务器路径解析使用 `getexecpath(3)` 来定位可执行文件。

性能优化方面，IQ2 量化创建通过模式缓存加速了量化文件生成（字节级一致的输出），H100 prefill 路径利用 TMA/WGMMA 实现了原生 Hopper 支持。

MoE expert copies 可通过 `GGML_CUDA_UPLOAD_STREAM=1` 选择分离 CUDA 流，CPU 等待问题已消除。后端语法采样在 GPU 上进行 token 掩码，Qwen4 QSA 分块在 8192 ub 下减少内存约 4 GiB。RPC 加载时间在 2× DGX Spark（DeepSeek-V4-Flash）上实现了 5 倍改进，CUDA 调试缓冲区池通过 `GGML_CUDA_POOL_DEBUG=1` 进行精确大小跟踪。

SYCL MoE 调度在设备端保持 GPU 图的完整性。

在稳定性方面，存在一个关键问题：当量化目标使用 Q4_K_M 等格式时，推理性解码会产生与 bf16 不同的输出，这影响了 draft-mtp 和 draft-dspark 场景。此外，递归层状态中的 NaN 不会清除，会污染后续所有请求，需要重启实例。长时间运行的嵌入操作被取消时不会释放资源，导致服务器返回空响应但健康检查仍报告正常。

中等优先级的问题包括 Vulkan 在 Intel Arc B 系列上的输出损坏（长上下文/RAG 场景下持续出现，即使禁用合作矩阵也无改善）、AMD HIP/ROCm 上的断言失败，以及启用 draft-mtp 时的中止问题。

此外还有图重新分配导致的 ggml 崩溃、QSA kpool 缓存占用过多内存（约 400 MiB/GPU），以及服务器声称使用 Keep-Alive 但实际关闭连接导致的客户端读取错误。已解决的问题包括 SYCL 在双 B70 配置上的内存泄漏和 Qwen3.6-27B 在混合 GPU CUDA 上的输出错误。

对于应用开发者来说，如果使用量化的 Q4_K_M、Q8_0 等格式运行 draft-model 推理性解码，输出可能会与非推理性运行产生分歧，应跟踪 #25618 的进展或改用 bf16 目标。Qwen3.8-flash-next 等递归架构中，任何层的 NaN 都会永久保留，污染该服务器实例上的所有后续推理，需要监控输出中的 NaN 标记并考虑设置看门狗进程在检测到问题时重启服务器。SYCL 后端在双 B70 配置上的内存泄漏已关闭，多设备 SYCL 设置的用户应更新。

对于 MoE expert 缓存，`--moe-cache-cpu-share` 参数现在有自动控制器，draft model 不再参与 MoE 缓存决策，这可能会改变推理性解码管道的延迟曲线。H100 用户应评估 Q6_K prefill 内核在密集 prefill 工作负载上的表现，MoE 算子可以尝试使用 `GGML_CUDA_UPLOAD_STREAM=1` 来重叠 expert H2D 副本与计算。使用 Gemma 4 工具架构时，PR #31612 强制执行架构约束的语法生成，改善了对用户提供的参数规范的遵守。

我需要确保技术术语的一致性，比如 "speculative decoding" 统一翻译为 "推理性解码"，"quantized targets" 为 "量化目标"，"recurrent state" 为 "递归状态"，"MoE expert cache" 为 "MoE expert 缓存"，以及 "draft model" 为 "draft model"。现在开始逐句翻译，生成最终的自然中文版本。
</think>


# llama.cpp 技术速报 — 2026-11-09

## 今日要点

项目在量化性能和后端多样性方面保持强劲推进。本期合并了多项重要改进：CUDA/Metal radix Top-K 排序的确定性修复、SpacemiT IME2 MXFP4 CPU 支持、Zamba2 SSM_SCAN（`d_state=64`）的快速路径。b12206 中的 MoE cache CPU 等待回归问题已修复，q8_0/MoE 的 OpenCL 验证路径也已落地。一个关键的递归状态 NaN 持久化 bug 正在 PR 审查中。

## 版本发布与变更

| Commit | 描述 | 备注 |
|--------|------|------|
| [b12211](https://github.com/ggml-org/llama.cpp/commit/b12211) | **mtmd: 移除 clip.h，整合到 mtmd** | 内部重构 |
| [b12210](https://github.com/ggml-org/llama.cpp/commit/b12210) | **CPU: 启用 SpacemiT IME2 MXFP4 dense repack** | 新 CPU ISA 扩展支持 |
| [b12209](https://github.com/ggml-org/llama.cpp/commit/b12209) | **llamafile: 实现 bf16 和 q8_0 vxe** | llamafile 可移植性修复 |
| [b12208](https://github.com/ggml-org/llama.cpp/commit/b12208) | **CUDA/Metal: radix Top-K 排序实现确定性** | 解决平局时的排名稳定性问题 |
| [b12207](https://github.com/ggml-org/llama.cpp/commit/b12207) | **ggml-cuda: 为 SSM_SCAN 添加 d_state=64 快速路径** | Zamba2 类架构 |
| [b12206](https://github.com/ggml-org/llama.cpp/commit/b12206) | **moe-cache: CPU 部分不再等待缓存的 expert** | 修复之前版本的回归 |
| [b12202](https://github.com/ggml-org/llama.cpp/commit/b12202) | **llama/mtmd: 遵循 ggml_prec_set_acc 的参考精度** | GLM4 家族正确性 |
| [b12201](https://github.com/ggml-org/llama.cpp/commit/b12201) | **speculative: 不对 draft model 应用 MoE cache** | 正确性隔离 |
| [b12200](https://github.com/ggml-org/llama.cpp/commit/b12200) | **OpenCL: q8_0 和 MoE small-n 验证** | 符合规范 |
| [b12199](https://github.com/ggml-org/llama.cpp/commit/b12199) | **common: 对 PEG 工具调用参数中的无效 UTF-8 进行清理** | 健壮性 |

无语义版本号变更；所有修改已合入 `master`。

## 新模型与硬件支持

- **SpacemiT IME2 MXFP4** — CPU 后端现已支持 MXFP4 dense repack ISA 扩展（[b12210](https://github.com/ggml-org/llama.cpp/commit/b12210)）
- **Zamba2 / SSM-SCAN (d_state=64)** — CUDA 内核快速路径已添加；此前会回退到 CPU（[b12207](https://github.com/ggml-org/llama.cpp/commit/b12207)）
- **Hopper H100 Q6_K prefill** — 原生 TMA + WGMMA prefill 内核处于 PR 审查中（[#31916](https://github.com/ggml-org/llama.cpp/pull/31916)）
- **OpenCL q8_0 / MoE small-n** — 符合规范的验证路径已落地（[b12200](https://github.com/ggml-org/llama.cpp/commit/b12200)）
- **OpenBSD 服务端路径解析** — 使用 `getexecpath(3)` 获取可执行文件路径（[#31885](https://github.com/ggml-org/llama.cpp/pull/31885)）

## 性能与优化

| 领域 | 变更 | 来源 |
|------|------|------|
| **IQ2 量化生成** | 模式缓存加速量化文件生成（字节级一致输出） | [#31910](https://github.com/ggml-org/llama.cpp/pull/31910) |
| **H100 prefill** | 使用 TMA/WGMMA 的原生 Hopper Q6_K 路径 | [#31916](https://github.com/ggml-org/llama.cpp/pull/31916)（待合入） |
| **MoE expert 复制** | 可选通过 `GGML_CUDA_UPLOAD_STREAM=1` 分离 CUDA 流 | [#31850](https://github.com/ggml-org/llama.cpp/pull/31850) |
| **MoE cache CPU 等待** | 消除缓存 expert 可用性前的空转 | [b12206](https://github.com/ggml-org/llama.cpp/commit/b12206) |
| **后端 grammar 采样** | 在 GPU 上对标准 LLGuidance grammar 进行 token 掩码 | [#31912](https://github.com/ggml-org/llama.cpp/pull/31912) |
| **Qwen4 QSA chunking** | 8192 ub 下内存减少约 4 GiB（原型） | [#30815](https://github.com/ggml-org/llama.cpp/pull/30815) |
| **RPC 加载时间** | 2× DGX Spark（DeepSeek-V4-Flash）上提升 5 倍 | [#29413](https://github.com/ggml-org/llama.cpp/pull/29413) |
| **CUDA 调试 buffer pool** | `GGML_CUDA_POOL_DEBUG=1` 追踪精确大小的 scratch | [#31919](https://github.com/ggml-org/llama.cpp/pull/31919) |
| **SYCL MoE 调度** | 设备端调度器保持 GPU 图的完整性 | [#30156](https://github.com/ggml-org/llama.cpp/pull/30156) |

## 稳定性与回归

**🔴 严重（已产生影响）**

| Issue | 描述 | 严重程度 | 状态 | 修复 PR |
|-------|------|----------|------|----------|
| [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) | 量化目标（Q4_K_M）上推理性解码输出与 bf16 不一致 — 影响 draft-mtp 和 draft-dspark | **高** | OPEN | — |
| [#29830](https://github.com/ggml-org/llama.cpp/issues/29830) | 递归状态中的 NaN 不会被清除，污染该服务器实例上所有后续请求 | **高** | OPEN | [#31913](https://github.com/ggml-org/llama.cpp/pull/31913) |
| [#31704](https://github.com/ggml-org/llama.cpp/issues/31704) | 被取消的长文本 embedding 任务永不释放 → 服务器返回空响应，而 /health 显示正常 | **高** | OPEN | — |

**🟡 值得关注**

| Issue | 描述 | 严重程度 | 状态 | 修复 PR |
|-------|------|----------|------|----------|
| [#31828](https://github.com/ggml-org/llama.cpp/issues/31828) | Intel Arc B 系列上 Vulkan 输出损坏，在长上下文/RAG 场景下持续出现，即使设置 `GGML_VK_DISABLE_COOPMAT` 也无效 | 中 | OPEN | — |
| [#27674](https://github.com/ggml-org/llama.cpp/issues/27674) | AMD HIP/ROCm（RX6950XT）上 `launch_fattn` 断言失败 | 中 | OPEN | — |
| [#30860](https://github.com/ggml-org/llama.cpp/issues/30860) | qwen4exp + `--spec-type draft-mtp` 启动时因 GGML_ASSERT(buffer) 中止 | 中 | OPEN | — |
| [#28753](https://github.com/ggml-org/llama.cpp/issues/28753) | ggml 崩溃：`ggml_backend_sched_alloc_splits` 中意外触发图重新分配 | 中 | OPEN | — |
| [#30005](https://github.com/ggml-org/llama.cpp/issues/30005) | `-sm tensor` 下 QSA kpool 缓存翻倍（约 400 MiB/GPU） | 低 | OPEN | — |
| [#29680](https://github.com/ggml-org/llama.cpp/issues/29680) | 服务端声明 Keep-Alive 但关闭连接，导致池化 HTTP 客户端 ReadError | 低 | OPEN | — |

**✅ 已修复/关闭**

- [#27845](https://github.com/ggml-org/llama.cpp/issues/27845) SYCL + 双 Intel B70 内存泄漏 — CLOSED
- [#26257](https://github.com/ggml-org/llama.cpp/issues/26257) 混合 GPU CUDA 上 Qwen3.6-27B 输出乱码 — CLOSED
- [b12206](https://github.com/ggml-org/llama.cpp/commit/b12206) MoE cache CPU 回归 — 当日解决

## 对应用开发者的影响

1. **推理性解码 + 量化**：如果对量化目标（Q4_K_M、Q8_0 等）运行 draft-model 推理性解码，输出会与非推理版本产生分歧。跟踪 [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) 的进展；在修复前，对量化模型请使用非推理模式或改用 bf16 目标。

2. **递归模型 NaN 风险**：对于 Qwen3.8-flash-next 等递归架构，任何递归层状态中的 NaN 会永久保留，污染该服务器实例上所有后续推理。监控输出中的 NaN token；建议设置看门狗，在检测到时重启服务器进程。PR [#31913](https://github.com/ggml-org/llama.cpp/pull/31913) 正在等待合入。

3. **SYCL + Intel Arc B 系列**：SYCL 后端在双 B70 配置上的内存泄漏已关闭；如果你在多设备 SYCL 环境中遇到 OOM，请更新到最新版本。

4. **MoE expert cache 行为变化**：`--moe-cache-cpu-share` 参数现在有自动控制器（[#31286](https://github.com/ggml-org/llama.cpp/pull/31286)）。Draft model 不再参与 MoE cache 决策（[b12201](https://github.com/ggml-org/llama.cpp/commit/b12201)），这可能改变推理性解码流水线的延迟特征。

5. **新性能调优选项**：H100 用户应评估 Q6_K prefill 内核（[#31916](https://github.com/ggml-org/llama.cpp/pull/31916)）在密集 prefill 工作负载上的表现。MoE 算子可以尝试 `GGML_CUDA_UPLOAD_STREAM=1` 来重叠 expert H2D 复制与计算。

6. **Gemma 4 工具调用**：如果你使用带工具 schema 的 Gemma 4，PR [#31612](https://github.com/ggml-org/llama.cpp/pull/31612) 强制执行 schema 约束的语法生成，改善了对用户提供的参数规范的遵循度。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate a technical report from English to Simplified Chinese. I need to:

1. Translate the entire content while preserving the Markdown structure
2. Keep URLs, link targets, code spans, numbers, dates, issue references as-is
3. Keep project names, repository slugs, version tags, file paths, API/config identifiers in original form
4. Use natural technical Chinese - not a literal word-for-word translation
5. Output ONLY the translation, no preamble or explanation

Let me translate section by section:

**Title**: Ollama Digest — 2026-11-09
→ Ollama 速报 — 2026-11-09

**Section 1**: Today's Highlights
→ 今日要点

"No new releases shipped in the last 24 hours. The dominant theme today is backend and infrastructure hardening: a Rockchip NPU (`rocket`/`rknpu`) backend landed for RK3588/RK3576 SoCs, a long-standing MoE expert-stacking bug was fixed with lossless FP8 import, and a critical KV-cache sizing PR moved forward to correct VRAM estimates that have been causing model eviction thrashing. On the reliability side, a Vulkan regression on AMD Radeon 780M (introduced in 0.32.10) remains open and unresolved."
→ 
过去 24 小时内没有新版本发布。今日的主题是后端和基础设施的加固：一个面向 RK3588/RK3576 SoC 的 Rockchip NPU（`rocket`/`rknpu`）后端已落地，一个长期存在的 MoE 专家堆叠 Bug 配合无损 FP8 导入得到修复，同时一个关键的 KV-cache 容量调整 PR 取得进展，旨在修正导致模型驱逐震荡的 VRAM 估算偏差。可靠性方面，AMD Radeon 780M 上的 Vulkan 回归问题（始于 0.32.10）仍处于开放状态，尚未解决。

**Section 2**: Releases & Breaking Changes


→ 版本发布与破坏性变更

No releases in the last 24 hours.
→ 过去 24 小时内无新版本发布。

**Pending config change**: `PARAMETER env` in Modelfiles (PR [#16711](https://github.com/ollama/ollama/pull/16711)) would allow per-model environment variable injection into the runner — this is a new capability, not a breaking change, but requires documentation once merged.
→ 
**待生效配置变更**：Modelfile 中的 `PARAMETER env`（PR [#16711](https://github.com/ollama/ollama/pull/16711)）将允许向 runner 注入每个模型的环

境内变量——这是一项新功能，而非破坏性变更，但合并后需要补充文档。

**Section 3**: New Model & Hardware Support
→ 新模型与硬件支持

I'll translate the table content, focusing on the Rockchip NPU backend and its technical specifications. The table reveals support for RK3588 & RK3576 SoCs on Linux, with a specialized NPU backend that handles complex computational tasks. The backend can offload prompt processing and multi-layer operations to the neural processing unit, leaving single-token decoding to the CPU. This represents a sophisticated hardware integration strategy for AI model deployment.

The status indicates an open pull request, suggesting ongoing development and potential future integration into the Ollama framework.

The content highlights auto-detection capabilities for ornith and qwen35 renderers, enabling more intelligent model selection without manual intervention. This suggests a push towards more adaptive and user-friendly AI model management.

Docker support for MLX and Vulkan with Nvidia GPUs indicates expanded hardware compatibility. The pull request demonstrates active work on multi-platform AI inference infrastructure.

Per-model `num_parallel` configuration provides granular control over parallel processing, addressing specific feature requests and enabling more flexible model execution strategies.

A model metadata typo in `gemma4:12b-it-qat` was identified and resolved, improving documentation accuracy.

Performance optimization efforts include:

1. Per-layer KV cache sizing to prevent VRAM thrashing during model scheduling
2. Consistent expert stacking and lossless FP8 import for mixed-expert models
3. Reducing memory bookkeeping overhead through up-repeated buffer line aggregation
4. Improving numerical representation rounding for clearer display

These targeted optimizations enhance multi-model server performance, ensuring smoother resource allocation and more predictable model execution.

Addressing memory estimation accuracy and providing context-fill mode flexibility further streamline AI model inference workflows.

Critical issues involve AMD Vulkan rendering problems and corporate proxy authentication challenges that require immediate attention and resolution.

The ongoing development focuses on stabilizing core functionality, addressing potential model corruption risks, and ensuring robust system performance across different hardware and network environments.

Specific concerns include spurious warning texts, memory management complexities, and potential tensor loading inconsistencies that could impact model reliability and user experience.

The developer recommendations emphasize careful version management, particularly for specific hardware configurations, with strategic approaches to model deployment and server workload optimization.

Key focus areas include monitoring critical hardware compatibility issues, preparing for anticipated improvements in parallel processing capabilities, and ensuring smooth model interactions across different hardware platforms. The translation maintains technical precision while adapting language nuances for Chinese developers.
</think>


# Ollama 速报 — 2026-11-09

## 1. 今日要点

过去 24 小时内没有新版本发布。今日的主题是后端和基础设施的加固：一个面向 RK3588/RK3576 SoC 的 Rockchip NPU（`rocket`/`rknpu`）后端已落地，一个长期存在的 MoE 专家堆叠 Bug 配合无损 FP8 导入得到修复，同时一个关键的 KV-cache 容量调整 PR 取得进展，旨在修正导致模型驱逐震荡的 VRAM 估算偏差。可靠性方面，AMD Radeon 780M 上的 Vulkan 回归问题（始于 0.32.10）仍处于开放状态，尚未解决。

## 2. 版本发布与破坏性变更

过去 24 小时内无新版本发布。

- **待生效配置变更**：Modelfile 中的 `PARAMETER env`（PR [#16711](https://github.com/ollama/ollama/pull/16711)）将允许向 runner 注入每个模型的环境变量——这是一项新功能，而非破坏性变更，但合并后需要补充文档。

## 3. 新模型与硬件支持

| 项目 | 详情 | 状态 |
|------|------|------|
| **Rockchip NPU 后端**（`rocket`/`rknpu`） | 新增 RK3588 及 RK3576 SoC 的原生支持，Linux 平台可用。在 Linux 上运行时，将 prompt 处理（`GGML_OP_MUL_MAT`、`MoE GGML_OP_MUL_MAT_ID`、`GGML_OP_FLASH_ATTN_EXT`）卸载到 NPU，单 token 解码仍回退至 CPU。 | PR [#19480](https://github.com/ollama/ollama/pull/19480) — Open |
| **自动识别 ornith/qwen35 渲染器** | 未指定渲染器时，Ollama 现已默认对 `ornith-1.5:35b` 及 `qwen35`/`qwen35moe` 系列架构使用 `gguf_chat_template`。 | PR [#17965](https://github.com/ollama/ollama/pull/17965) — Open |
| **Docker MLX + Vulkan（Nvidia）支持** | Docker 容器现已打包 MLX runner 和 Vulkan 驱动所需的 libs 及配置，可配合 `--gpus all` 使用。 | PR [#18592](https://github.com/ollama/ollama/pull/18592) — Open |
| **模型级 `num_parallel` 配置** | 新增 Modelfile/环境变量选项，可覆盖全局 `OLLAMA_NUM_PARALLEL`，实现模型级别的并行度控制——直接回应了 issues [#11977](https://github.com/ollama/ollama/issues/11977) 和 [#5693](https://github.com/ollama/ollama/issues/5693) 中的功能请求。 | PR [#9546](https://github.com/ollama/ollama/pull/9546) — Open |

**模型元数据修复**：`gemma4:12b-it-qat` Modelfile 中的拼写错误（`toos` → `tools`）已关闭。

## 4. 性能与优化

| PR | 变更内容 | 影响 |
|----|----------|------|
| [#19327](https://github.com/ollama/ollama/pull/19327) — `llm: 按层估算 KV 缓存大小` | 将平坦的 `head_count_kv × embedding_length / head_count` 容量估算替换为逐层 `head_count_kv` 计算。原逻辑低估了高 `head_count_kv` 层，导致调度器在负载估算与实际 `llama-server` 分配不一致时频繁驱逐模型。 | 高 — 降低多模型服务器的意外模型驱逐频率 |
| [#19614](https://github.com/ollama/ollama/pull/19614) — `create, mlxrunner: 统一 MoE 专家堆叠逻辑与无损 FP8 导入` | 标准化了各来源类型（llama.cpp、MLX 等）的 MoE 专家堆叠逻辑（此前各 planner 实现不一致）。修复了有损 FP8 导入问题：block FP8 不再二次量化为 mxfp8，现已支持 per-tensor FP8。 | 中 — Apple Silicon 上 MoE 模型的正确性与质量 |
| [#19324](https://github.com/ollama/ollama/pull/19324) — `llm: 合并单次加载中重复的 buffer 行` | 将单次加载过程中 `llama.cpp` 发出的重复 buffer key 聚合，减少冗余日志并提升内存账本准确性。 | 中 — 内存估算保真度 |
| [#19500](https://github.com/ollama/ollama/pull/19500) / [#19617](https://github.com/ollama/ollama/pull/19617) — `HumanNumber` / `HumanBytes2` 单位边界舍入 | 当数值在单位边界发生向上舍入时（如 `999500` 应为 `1000K` 而非 `1M`），现在正确提升至上一级单位。影响日志和 CLI 输出中的数值显示。 | 低 — 用户体验/可观测性 |
| [#9547](https://github.com/ollama/ollama/pull/9547) — `num_predict==-2` 上下文填充模式 | 与 `llama.cpp` 行为对齐：`-2` 模式将填充整个上下文窗口，而非无限生成或固定上限生成。 | 中 — 长上下文使用场景的灵活性 |

## 5. 稳定性与回归问题

| 严重度 | 问题 | 详情 | 是否有修复 PR？ |
|--------|------|------|-----------------|
| 🔴 **高** | **AMD Radeon 780M Vulkan 回归** | Ollama ≥0.32.10 在 780M 上失败，报错 `radv/amdgpu: Not enough memory for command submission` / `vk::Queue::submit: ErrorDeviceLost`。相同硬件在早期版本上正常运行。 | 无 — [#17748](https://github.com/ollama/ollama/issues/17748) |
| 🔴 **高** | **企业代理环境下 `ollama pull` 返回 403 Forbidden** | `ollama pull` 报 403，但 `curl` 正常。受影响环境：RHEL 9.2 + Blue Coat CA 企业代理 + systemd 服务。疑似 Ollama HTTP 客户端未正确传递代理证书或请求头。 | 无 — [#19604](https://github.com/ollama/ollama/issues/19604) |
| 🟡 **中** | **`ollama -v` 输出多余警告文本** | 版本标志在版本号前输出了 `Warning: could not connect to a running Ollama instance`，导致脚本化解析失败。 | 无 — [#19613](https://github.com/ollama/ollama/issues/19613) |
| 🟡 **中** | **API 字段差异引发的 OOM 级震荡** | 未设置的 API 可选字段导致模型被重新加载，不必要地驱逐其他模型。PR [#10003](https://github.com/ollama/ollama/pull/10003) 正在解决此问题。 | Open PR — [#10003](https://github.com/ollama/ollama/pull/10003) |
| 🟢 **低** | **Gemma4 工具调用数据损坏** | 当模型含有 ≥45 个标量字符串参数后接一个两元素字符串数组时，可能产生损坏的 JSON——原因是占位符碰撞（`NUL + 逗号 + NUL` 与数组边界标记匹配）。 | PR [#18355](https://github.com/ollama/ollama/pull/18355) — Open |
| 🟢 **低** | **GGUF 重复 tensor 名称未在早期拒绝** | 含有重复 tensor 名称的文件能通过元数据解析，但在 `Open()` 时失败。现已改为在元数据解析阶段检测。 | PR [#19571](https://github.com/ollama/ollama/pull/19571) — Open |

## 6. 对应用开发者的建议

1. **密切关注 AMD Vulkan 回归问题。** 如果你在配备 AMD Radeon 780M 集成显卡的笔记本电脑或台式机上运行 Ollama，在 [#17748](https://github.com/ollama/ollama/issues/17748) 解决之前，请避免升级至 0.32.9 之后的版本。CPU 回退可用但性能较低。

2. **企业网络用户：模型拉取可能失败。** 如果你在启用了 SSL 检查的企业代理后部署 Ollama，原生 pull 命令可能返回 403 而 curl 正常——这说明 Ollama HTTP 客户端未正确传递代理所需的请求头或证书。请关注 [#19604](https://github.com/ollama/ollama/issues/19604) 的修复进展。

3. **多模型 VRAM 管理正在改善。** KV-cache 按层 sizing 的 PR（[#19327](https://github.com/ollama/ollama/pull/19327)）将减少混合负载服务器上不必要的模型驱逐。如果你运行多个并发模型，这会使内存估算更加可靠。

4. **模型级并行度控制即将到来。** PR [#9546](https://github.com/ollama/ollama/pull/9546) 将 `num_parallel` 引入 Modelfile。合并后，嵌入模型（需高并行、低单请求内存）与大型对话模型（需低并行、高单请求内存）可以共存，无需在全局层面做出妥协。

5. **Apple Silicon 上的 MoE 模型现已更加正确。** [#19614](https://github.com/ollama/ollama/pull/19614) 中的专家堆叠修复确保所有 MoE 专家一致加载，FP8 导入现为无损——如果你正在量化自定义 MoE 模型，这一点至关重要。

6. **`num_predict==-2` 待合并。** 对于需要最大程度利用上下文的任务（如长文档摘要），新的 `-2` 模式将填充完整上下文窗口，无需手动计算静态 token 上限。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate an English technical report about LiteLLM into Simplified Chinese. I need to follow the rules:
- Output ONLY the translation, no preamble or explanation
- Preserve the Markdown structure exactly
- Keep URLs, code, numbers, dates, etc. verbatim
- Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
- Use natural technical Chinese register

Let me translate section by section:

# LiteLLM Digest — 2026-11-09

# LiteLLM 动态简报 — 2026-11-09

## Today's Highlights

## 今日要点

- LiteLLM v1.110.0-dev.2 shipped with verified Docker image signing via cosign (commit `e82a3c6`), while the community continues to address streaming reliability issues—a critical Bedrock stream closure bug and a streaming usage undercounting regression both received targeted fixes. The project also expanded its observability story with new persisted alerts APIs and Activity tabs for resource monitoring, alongside a Rust-backed pip binary initiative to accelerate the SDK path.

LiteLLM v1.110.0-dev.2 已发布，Docker 镜像通过 cosign 进行了签名校验（commit `e82a3c6`）。与此同时，社区持续解决流式处理的可靠性问题——一个关键的 Bedrock 流关闭 bug 和流式使用量少算的回归问题均已获得针对性修复。项目还扩展了可观测性能力，新增持久化告警 API 和 Activity 监控标签页，并推进了 Rust 后端的 pip 二进制包计划，以加速 SDK 安装。

## Releases & Breaking Changes

## 版本发布与破坏性变更

- **v1.110.0-dev.2** released with cosign-signed Docker images (key: `e82a3c6`); verify via `cosign verify` per [release docs](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065). No migration notes for this dev release.

- **v1.110.0-dev.2** 已发布，Docker 镜像通过 cosign 签名校验（key: `e82a3c6`）；请参照[发布文档](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065)通过 `cosign verify` 进行验签。此为开发版本，无迁移说明。

- **PR #50622** extends `turn_off_message_logging` to redact prompt/completion text in process/debug logs (including `--detailed_debug`), not just callback sinks—callers still receive full responses; model metadata remains visible. ([#50622](https://github.com/BerriAI/litellm/pull/50622))

- **PR #50622** 将 `turn_off_message_logging` 的遮蔽范围扩展至 process/debug 日志（包括 `--detailed_debug`）中的 prompt/completion 文本，而不仅限于 callback 接收端——调用方仍收到完整响应，模型元数据保持可见。 ([#50622](https://github.com/BerriAI/litellm/pull/50622))

- **PR #50618** adds DeepSeek `Fetch` tool support and proxy routes (`/fetch`, `/tools/fetch`) alongside the existing Search tool. ([#50618](https://github.com/BerriAI/litellm/pull/50618))

- **PR #50618** 新增 DeepSeek `Fetch` 工具支持及对应的代理路由（`/fetch`、`/tools/fetch`），与现有的 Search 工具并列提供。 ([#50618](https://github.com/BerriAI/litellm/pull/50618))

- **PR #50624** propagates per-call `ssl_verify` (False/True/CA path/SSLContext) into OpenAI and Azure HTTP clients; different values get separate cached clients. ([#50624](https://github.com/BerriAI/litellm/pull/50624))

- **PR #50624** 将每次调用的 `ssl_verify` 参数（False/True/CA 路径/SSLContext）传递至 OpenAI 和 Azure HTTP 客户端；不同配置值使用各自独立的缓存客户端实例。 ([#50624](https://github.com/BerriAI/litellm/pull/50624))

## New Model & Hardware Support

## 新模型与硬件支持

- **TopxAI** added as a named provider with environment credentials, Chat Completions and Responses routing, and cost tracking for 11 text models ([#41919](https://github.com/BerriAI/litellm/pull/41919))

- **TopxAI** 新增为命名 provider，支持环境变量凭证、Chat Completions 与 Responses 路由，并对 11 个文本模型提供成本追踪 ([#41919](https://github.com/BerriAI/litellm/pull/41919))

- **Kitani** added as an OpenAI-compatible provider for open-weight models ([#50656](https://github.com/BerriAI/litellm/pull/50656))

- **Kitani** 新增为 OpenAI 兼容 provider，用于开源权重模型 ([#50656](https://github.com/BerriAI/litellm/pull/50656))

- **LiteFlow SDK integration**: team-scoped workflow registration, publication, and execution via `model="workflow/<name>"` with run traces ([#50384](https://github.com/BerriAI/litellm/pull/50384))

- **LiteFlow SDK 集成**：支持团队级别的 workflow 注册、发布与执行，通过 `model="workflow/<name>"` 调用并附带运行追踪 ([#50384](https://github.com/BerriAI/litellm/pull/50384))

## Performance & Optimization

## 性能与优化

- **PR #50641** skips unused deployment reads in the router's callback filter step and caches Anthropic capability probes—a hot path running on every request; Rust core now handles 1,000 deployments without reading every deployment back into Python. ([#50641](https://github.com/BerriAI/litellm/pull/50641))

- **PR #50641** 在 router 的 callback 过滤步骤中跳过未使用的 deployment 读取，并对 Anthropic 能力探测结果进行缓存——这是一条在每个请求上都执行的热点路径；Rust core 现可处理 1,000 个 deployment 而无需将每个 deployment 重新读回 Python。 ([#50641](https://github.com/BerriAI/litellm/pull/50641))

- **Issue #31880**: Rate limiter unconditionally writes Redis counters for keys with no rate limits configured; proposed fix to skip post-call Redis writes when no limits exist. ([#31880](https://github.com/BerriAI/litellm/issues/31880))

- **Issue #31880**：限流器对未配置限流的 key 无条件写入 Redis 计数器；建议修复为在无限制配置时跳过调用后的 Redis 写入。 ([#31880](https://github.com/BerriAI/litellm/issues/31880))

- **Issue #26611**: Prometheus/Grafana spend metrics diverge from LiteLLM UI—investigation ongoing for dashboard alignment. ([#26611](https://github.com/BerriAI/litellm/issues/26611))

- **Issue #26611**：Prometheus/Grafana 的消费指标与 LiteLLM UI 存在偏差——仪表盘对齐调查仍在进行中。 ([#26611](https://github.com/BerriAI/litellm/issues/26611))

## Stability & Regressions

## 稳定性与回归问题

**High Severity**

**高严重性**

- **Streaming usage undercounting** (provider-independent): root cause in stream aggregation layer, not provider transformation—affects chained proxy setups (Front-Proxy → Upstream-Proxy → Bedrock). Filed as [#36114](https://github.com/BerriAI/litellm/issues/36114); no fix PR yet.

- **流式使用量少算**（provider 无关）：根本原因在流聚合层而非 provider 转换层——影响链式代理部署（前端代理 → 上游代理 → Bedrock）。已在 [#36114](https://github.com/BerriAI/litellm/issues/36114) 登记；尚无修复 PR。

- **Bedrock `/v1/messages` stream not closed on abort** (httpx response leaks): when `ANTHROPIC_MESSAGES_MAX_DETACHED_STREAM_DRAINS=0` and client disconnects, `_abort_upstream` only closes the outer generator. Fix PR [#50657](https://github.com/BerriAI/litellm/pull/50657) filed by `princejain756`. ([#50514](https://github.com/BerriAI/litellm/issues/50514))

- **Bedrock `/v1/messages` 流在中断时未关闭**（httpx response 泄漏）：当 `ANTHROPIC_MESSAGES_MAX_DETACHED_STREAM_DRAINS=0` 且客户端断开连接时，`_abort_upstream` 仅关闭外层生成器。修复 PR [#50657](https://github.com/BerriAI/litellm/pull/50657) 由 `princejain756` 提交。 ([#50514](https://github.com/BerriAI/litellm/issues/50514))

**Medium Severity**

**中严重性**

- **Xiaomi MiMo models `output_config` parameter failure**: closed with 12 comments; appears resolved. ([#24549](https://github.com/BerriAI/litellm/issues/24549))

- **小米 MiMo 模型 `output_config` 参数故障**：已关闭，12 条评论；问题已解决。 ([#24549](https://github.com/BerriAI/litellm/issues/24549))

- **`completion_model` in `general_settings` overrides client-specified model** instead of acting as fallback—fix pending. ([#21554](https://github.com/BerriAI/litellm/issues/21554))

- **`general_settings` 中的 `completion_model` 覆盖客户端指定的模型**，而非作为备选方案——修复待处理。 ([#21554](https://github.com/BerriAI/litellm/issues/21554))

- **`max_budget` admits calls after spend crossed it**: 11 calls on a budget fitting 9 (+10.3% overspend); fix needed in budget enforcement logic. ([#50125](https://github.com/BerriAI/litellm/issues/50125))

- **`max_budget` 在消费超限后仍接纳调用**：预算只够 9 次调用却执行了 11 次（超出 10.3%）；预算强制执行逻辑需修复。 ([#50125](https://github.com/BerriAI/litellm/issues/50125))

- **Router retries ignore caller timeout**: `x-litellm-timeout` only bounds each attempt; Retry-After sleeps don't check remaining budget. ([#49751](https://github.com/BerriAI/litellm/issues/49751))

- **Router 重试忽略调用方超时**：`x-litellm-timeout` 仅约束单次尝试；Retry-After 等待期间不检查剩余时间预算。 ([#49751](https://github.com/BerriAI/litellm/issues/49751))

**Low Severity / Stale**

**低严重性 / 积压问题**

- **Z.AI `glm-5.2[1m]` returns `Unknown Model`**: documented variant not mapped. ([#32218](https://github.com/BerriAI/litellm/issues/32218))

- **Z.AI `glm-5.2[1m]` 返回 `Unknown Model`**：文档中列出的变体未做映射。 ([#32218](https://github.com/BerriAI/litellm/issues/32218))

- **VSCode native Model-Provider incompatibility**: investigation ongoing. ([#35775](https://github.com/BerriAI/litellm/issues/35775))

- **VSCode 原生 Model-Provider 不兼容**：调查进行中。 ([#35775](https://github.com/BerriAI/litellm/issues/35775))

- **Windows wheel ships tiktoken caches with CRLF**, requiring network on `import litellm`. ([#41855](https://github.com/BerriAI/litellm/issues/41855))

- **Windows  wheel 内置 tiktoken 缓存采用 CRLF**，导致 `import litellm` 时需要网络。 ([#41855](https://github.com/BerriAI/litellm/issues/41855))

## What This Means for Application Developers

## 对应用开发者的意义

1. **Streaming correctness**: If you're running chained LiteLLM proxies or using Bedrock streaming with client disconnection, monitor for usage undercounting and httpx resource leaks—both are addressed by PRs in flight; consider applying [#50657](https://github.com/BerriAI/litellm/pull/50657) and [#50641](https://github.com/BerriAI/litellm/pull/50641) once merged.

1. **流式正确性**：如果你在运行链式 LiteLLM 代理或使用 Bedrock 流式处理且存在客户端断连场景，请关注使用量少算和 httpx 资源泄漏问题——两个问题均有 PR 在推进修复；待合并后可考虑应用 [#50657](https://github.com/BerriAI/litellm/pull/50657) 和 [#50641](https://github.com/BerriAI/litellm/pull/50641)。

2. **Budget enforcement**: Applications relying on `max_budget` for cost control should add their own overspend guards—the current implementation allows ~10% overrun in edge cases ([#50125](https://github.com/BerriAI/litellm/issues/50125)).

2. **预算强制执行**：依赖 `max_budget` 进行成本控制的应用应自行增加超支防护——当前实现在边缘情况下允许约 10% 的超支 ([#50125](https://github.com/BerriAI/litellm/issues/50125))。

3. **New providers**: TopxAI and Kitani integrations reduce boilerplate for teams using these backends—no more custom `openai/` + `api_base` workarounds.

3. **新 provider 支持**：TopxAI 和 Kitani 的集成降低了使用这些后端的团队的配置复杂度——无需再通过自定义 `openai/` + `api_base` 方案绕过。

4. **Debug logging**: The expanded `turn_off_message_logging` redaction in [#50622](https://github.com/BerriAI/litellm/pull/50622) enables safe verbose logging in production without leaking prompt/completion data.

4. **调试日志**：[#50622](https://github.com/BerriAI/litellm/pull/50622) 中扩展的 `turn_off_message_logging` 遮蔽功能使得在生产环境中安全开启详细日志成为可能，而不会泄露 prompt/completion 数据。

5. **Workflows**: The LiteFlow gateway integration enables structured multi-step agent workflows with native tracing—worth evaluating for complex orchestration needs.

5. **工作流**：LiteFlow 网关集成支持结构化的多步骤 Agent 工作流并提供原生追踪能力——复杂编排场景值得评估采用。
</think>


# LiteLLM 动态简报 — 2026-11-09

## 今日要点

LiteLLM v1.110.0-dev.2 已发布，Docker 镜像通过 cosign 进行了签名校验（commit `e82a3c6`）。与此同时，社区持续解决流式处理的可靠性问题——一个关键的 Bedrock 流关闭 bug 和流式使用量少算的回归问题均已获得针对性修复。项目还扩展了可观测性能力，新增持久化告警 API 和 Activity 监控标签页，并推进了 Rust 后端的 pip 二进制包计划以加速 SDK 安装。

---

## 版本发布与破坏性变更

- **v1.110.0-dev.2** 已发布，Docker 镜像通过 cosign 签名校验（key: `e82a3c6`）；请参照[发布文档](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065)通过 `cosign verify` 进行验签。此为开发版本，无迁移说明。
- **PR #50622** 将 `turn_off_message_logging` 的遮蔽范围扩展至 process/debug 日志（包括 `--detailed_debug`）中的 prompt/completion 文本，而不仅限于 callback 接收端——调用方仍收到完整响应，模型元数据保持可见。 ([#50622](https://github.com/BerriAI/litellm/pull/50622))
- **PR #50618** 新增 DeepSeek `Fetch` 工具支持及对应的代理路由（`/fetch`、`/tools/fetch`），与现有的 Search 工具并列提供。 ([#50618](https://github.com/BerriAI/litellm/pull/50618))
- **PR #50624** 将每次调用的 `ssl_verify` 参数（False/True/CA 路径/SSLContext）传递至 OpenAI 和 Azure HTTP 客户端；不同配置值使用各自独立的缓存客户端实例。 ([#50624](https://github.com/BerriAI/litellm/pull/50624))

---

## 新模型与硬件支持

- **TopxAI** 新增为命名 provider，支持环境变量凭证、Chat Completions 与 Responses 路由，并对 11 个文本模型提供成本追踪 ([#41919](https://github.com/BerriAI/litellm/pull/41919))
- **Kitani** 新增为 OpenAI 兼容 provider，用于开源权重模型 ([#50656](https://github.com/BerriAI/litellm/pull/50656))
- **LiteFlow SDK 集成**：支持团队级别的 workflow 注册、发布与执行，通过 `model="workflow/<name>"` 调用并附带运行追踪 ([#50384](https://github.com/BerriAI/litellm/pull/50384))

---

## 性能与优化

- **PR #50641** 在 router 的 callback 过滤步骤中跳过未使用的 deployment 读取，并对 Anthropic 能力探测结果进行缓存——这是一条在每个请求上都执行的热点路径；Rust core 现可处理 1,000 个 deployment 而无需将每个 deployment 重新读回 Python。 ([#50641](https://github.com/BerriAI/litellm/pull/50641))
- **Issue #31880**：限流器对未配置限流的 key 无条件写入 Redis 计数器；建议修复为在无限制配置时跳过调用后的 Redis 写入。 ([#31880](https://github.com/BerriAI/litellm/issues/31880))
- **Issue #26611**：Prometheus/Grafana 的消费指标与 LiteLLM UI 存在偏差——仪表盘对齐调查仍在进行中。 ([#26611](https://github.com/BerriAI/litellm/issues/26611))

---

## 稳定性与回归问题

**高严重性**

- **流式使用量少算**（provider 无关）：根本原因在流聚合层而非 provider 转换层——影响链式代理部署（前端代理 → 上游代理 → Bedrock）。已在 [#36114](https://github.com/BerriAI/litellm/issues/36114) 登记；尚无修复 PR。
- **Bedrock `/v1/messages` 流在中断时未关闭**（httpx response 泄漏）：当 `ANTHROPIC_MESSAGES_MAX_DETACHED_STREAM_DRAINS=0` 且客户端断开连接时，`_abort_upstream` 仅关闭外层生成器。修复 PR [#50657](https://github.com/BerriAI/litellm/pull/50657) 由 `princejain756` 提交。 ([#50514](https://github.com/BerriAI/litellm/issues/50514))

**中严重性**

- **小米 MiMo 模型 `output_config` 参数故障**：已关闭，12 条评论；问题已解决。 ([#24549](https://github.com/BerriAI/litellm/issues/24549))
- **`general_settings` 中的 `completion_model` 覆盖客户端指定的模型**，而非作为备选方案——修复待处理。 ([#21554](https://github.com/BerriAI/litellm/issues/21554))
- **`max_budget` 在消费超限后仍接纳调用**：预算只够 9 次调用却执行了 11 次（超出 10.3%）；预算强制执行逻辑需修复。 ([#50125](https://github.com/BerriAI/litellm/issues/50125))
- **Router 重试忽略调用方超时**：`x-litellm-timeout` 仅约束单次尝试；Retry-After 等待期间不检查剩余时间预算。 ([#49751](https://github.com/BerriAI/litellm/issues/49751))

**低严重性 / 积压问题**

- **Z.AI `glm-5.2[1m]` 返回 `Unknown Model`**：文档中列出的变体未做映射。 ([#32218](https://github.com/BerriAI/litellm/issues/32218))
- **VSCode 原生 Model-Provider 不兼容**：调查进行中。 ([#35775](https://github.com/BerriAI/litellm/issues/35775))
- **Windows wheel 内置 tiktoken 缓存采用 CRLF**，导致 `import litellm` 时需要网络。 ([#41855](https://github.com/BerriAI/litellm/issues/41855))

---

## 对应用开发者的意义

1. **流式正确性**：如果你在运行链式 LiteLLM 代理或使用 Bedrock 流式处理且存在客户端断连场景，请关注使用量少算和 httpx 资源泄漏问题——两个问题均有 PR 在推进修复；待合并后可考虑应用 [#50657](https://github.com/BerriAI/litellm/pull/50657) 和 [#50641](https://github.com/BerriAI/litellm/pull/50641)。

2. **预算强制执行**：依赖 `max_budget` 进行成本控制的应用应自行增加超支防护——当前实现在边缘情况下允许约 10% 的超支 ([#50125](https://github.com/BerriAI/litellm/issues/50125))。

3. **新 provider 支持**：TopxAI 和 Kitani 的集成降低了使用这些后端的团队的配置复杂度——无需再通过自定义 `openai/` + `api_base` 方案绕过。

4. **调试日志**：[#50622](https://github.com/BerriAI/litellm/pull/50622) 中扩展的 `turn_off_message_logging` 遮蔽功能使得在生产环境中安全开启详细日志成为可能，而不会泄露 prompt/completion 数据。

5. **工作流**：LiteFlow 网关集成支持结构化的多步骤 Agent 工作流并提供原生追踪能力——复杂编排场景值得评估采用。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:
1. Translate the content accurately while maintaining the Markdown structure
2. Keep all technical terms, URLs, issue numbers, PR numbers, code references as-is
3. Use natural technical Chinese appropriate for a developer newsletter
4. Preserve all formatting: headings, tables, lists, blockquotes, bold/italic, emojis, horizontal rules

Let me translate section by section carefully.
</think>


# Unsloth 技术简报 — 2026-11-09

## 1. 今日要点

Unsloth 本次密集发布了一系列针对扩散/图像工作负载的稳定性和性能修复，亮点包括：正式支持 Turing GPU（T4、sm75）启用 INT8量化、解决了 L4 上 fp8 去噪器在 torch < 2.12 时的 CUDA graph 回放卡死问题，以及在 vLLM 引擎环境中预装 FlashInfer 预编译内核以消除首次运行的 JIT 编译开销。与此同时，Studio Appearance 标签页中暴露了若干 UI 体验问题，另有两条硬件兼容性 bug 涉及 AMD RDNA 2（ROCm）和 Intel Arc 140V。

---

## 2. 版本发布与破坏性变更

过去 24 小时内无新版本 tag。

**迁移注意事项：**
- **Turing（sm75）上的 INT8 现已开放。** Studio 此前在 T4 等 sm75 显卡上会拒绝 `transformer_quant="int8"`，[#17167](https://github.com/unslothai/unsloth/pull/17167) 移除了该限制。被卡在 Turing 硬件上的用户现在可以尝试加载 int8 量化模型。
- **FlashInfer 预编译内核已在引擎构建时预装。** PR [#17063](https://github.com/unslothai/unsloth/pull/17063) 省去了每次全新引擎环境首次启动时的 `nvcc` JIT 编译高峰。对用户透明，无需任何操作。

---

## 3. 新模型与硬件支持

| 领域 | 变更 | PR / Issue |
|------|--------|------------|
| **Turing INT8** | INT8（torchao dense 量化）现可在 T4 及所有 sm75 GPU 上运行，不再在加载时被拒绝。 | [#17167](https://github.com/unslothai/unsloth/pull/17167) |
| **FLUX.3 + fp16-only GPU** | 在 fp16-only 硬件上，FLUX.3 bf16 权重保持原样存储，逐层使用 float32 计算，而非将整个模型在 host 端升宽至 float32。 | [#17173](https://github.com/unslothai/unsloth/pull/17173) |
| **Intel XPU float64 检测** | Studio 现在从设备读取 Arc A 系列 fp64 能力，不再假设所有 Intel GPU 均支持。修复了 Arc 140V 等显卡上的 RoPE 错误。 | [#17070](https://github.com/unslothai/unsloth/pull/17070) |
| **Qwen-Image-2.1 CFG 配对** | CFG（无分类器引导）配对信息现在在首次去噪步编译过程中保留不变，修复了编译后的分块流加载在首次渲染时计算未配对对的回归问题。 | [#17177](https://github.com/unslothai/unsloth/pull/17177) |
| **LTX-2.5 int8 checkpoint 加载** | 修复了一种场景：自动精度 LTX-2.5 加载时从托管 int8 checkpoint 规划了驻留种子，但随后因其自身规划选择了全模块 CPU offload 而放弃该种子。 | [#17143](https://github.com/unslothai/unsloth/pull/17143) |
| **Qwen-Image-2.1 prompt 编码** | 编码 prompt 时排除 Text Encoder 中未使用的 K/V 缓存，降低显存压力，消除了 diffusers 0.42.1 引入的正确性隐患。 | [#17118](https://github.com/unslothai/unsloth/pull/17118) |
| **Llama 3.x / GPT-OSS tool_calls None** | 聊天模板现将 `tool_calls: null` 视为不存在，而非抛出 `TypeError` 或 `UndefinedError`，兼容标准工具调用数据集格式。 | [#17176](https://github.com/unslothai/unsloth/pull/17176) |

---

## 4. 性能与优化

| 组件 | 优化内容 | 影响 | PR |
|-----------|-------------|--------|-----|
| **vLLM 引擎首次启动** | 预装 FlashInfer 预编译内核（top-k/top-p sampler），而非在运行时用 `nvcc` JIT 编译。 | 全新引擎环境下首次请求延迟大幅降低。 | [#17063](https://github.com/unslothai/unsloth/pull/17063) |
| **Wan fused blocks（Triton）** | 每个融合 kernel（`_modnorm`、`_gate_residual`、`_rope`）现将 sequence length 作为运行时参数，而非 `@triton.jit` 编译时参数。 | 减少跨分辨率/clip 长度重复编译 Triton 二进制；每个 kernel 仅生成一个二进制而非每个 sequence length 一个。 | [#17101](https://github.com/unslothai/unsloth/pull/17101) |
| **int8 GEMV（weight-only）** | 宽尺度组现调度至共享内存内；分组的 layer miss 不再降级为逐行 Linear。修复了分组权重污染同设备后续布局的显存回归问题。 | 提升 int8 扩散加载吞吐；避免布局切换时显存膨胀。 | [#17106](https://github.com/unslothai/unsloth/pull/17106) |
| **int8 GEMM（未收录显卡）** | 未收录显卡竞速切换（测量 sm80+ 上 Triton tile 但无 table 时）在加载之间执行一次，而非每次调用执行一次。 | 未收录 GPU 获得一致的 tile 选择和更快的预热。 | [#17084](https://github.com/unslothai/unsloth/pull/17084) |
| **Sol-H3 VAE decoder** | Window attention mask 现由几何信息推导，而非每次从 GPU 读取；每个 RoPE 表在每轮 decode batch 中仅构建一次。 | 37 latent 视频消除了最多 192 次 device-to-host 读取；MiniMax-H3 视频生成延迟显著降低。 | [#17100](https://github.com/unslothai/unsloth/pull/17100) |
| **MiniMax-H3 VAE tile 拼接** | 分批 decoder tile 在到达时即拼入帧，而非积累所有 tile 后再统一拼接。 | 降低视频解码期间峰值显存；避免 `_stitch_tiles` 中冗余分配。 | [#17097](https://github.com/unslothai/unsloth/pull/17097) |
| **MiniMax-H3 Sol VAE** | 移除 `_window_attn` 中每次 window 的 device 读取；Q/K/V slot 上限为两个。 | 减少 Sol 变体 decoder 中 host/device 同步开销。 | [#17085](https://github.com/unslothai/unsloth/pull/17085) |
| **FSDP2 save（组合 mesh）** | Checkpoint writer 组合逻辑现可在等价的 `init_device_mesh` 实例之间工作（reload、第二模型、notebook 重跑），不再要求 mesh 对象完全相同。 | 支持多会话和多模型场景下的正确 FSDP2 checkpoint 保存。 | [#17158](https://github.com/unslothai/unsloth/pull/17158) |
| **Qwen3.5 GatedDeltaNet** | 为混合卷积 + gated-delta 架构添加 FSDP2 分片和 Ulysses 上下文并行。卷积层和 gated-delta 层内部使用完整时间线分片。 | 支持 Qwen3.5 带上下文并行的序列分片训练。 | [#12052](https://github.com/unslothai/unsloth/pull/12052) |
| **Gemma 4 text（Ulysses）** | Ulysses attention exchange 扩展至 `Gemma4TextAttention`，每层滑动窗口抵达 attention dispatcher。 | 支持 Gemma 4 text 模型序列分片推理。 | [#15883](https://github.com/unslothai/unsloth/pull/15883) |

---

## 5. 稳定性与回归问题

按严重程度排序：

### 🔴 严重（修复 PR 已合并或进行中）

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| **L4 fp8 去噪器卡死** | FLUX.3 klein（蒸馏版）在 L4 上以 fp8 transformer 运行，首次渲染（1024px、16 步、6 GiB 预算）时永远卡住。最后一条日志：`captured Flux3Transformer2DModel graph 1/4`。由 torch < 2.12 时的 CUDA graph 回放触发。 | 已修复 [#17166](https://github.com/unslothai/unsloth/pull/17166) |
| **ROCm RX 6700 XT 段错误** | gfx1031（RX 6700 XT）通过 RDNA-2 启动检测后，Docker 容器内首次 GPU 操作触发 PyTorch 段错误（Debian 13、kernel 6.12、in-tree amdgpu）。 | 待解决 — [#17147](https://github.com/unslothai/unsloth/issues/17147) |
| **Intel Arc 140V 图像模型加载失败** | 图像生成模型在 Intel Arc 140V（XPU 后端）上加载失败。可能与 fp64 支持检测相关（见 #17070，该 PR 部分解决了 RoPE 问题）。 | 待解决 — [#17137](https://github.com/unslothai/unsloth/issues/17137) |

### 🟠 高（影响正确性或可用性）

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| **托管账户 HF token 无效** | Unsloth Studio 托管账户可能使用了无效的 Hugging Face token，导致门控模型或私有仓库认证失败。 | 待解决 — [#17156](https://github.com/unslothai/unsloth/issues/17156) |
| **LocalStorage 偏好设置重置** | 部分账户级偏好仍仅存储在浏览器 `localStorage` 中，在跨会话或 Studio 服务端切换 origin 时静默重置。 | 待解决 — [#16912](https://github.com/unslothai/unsloth/issues/16912) |
| **模型大小不一致（Hub vs Picker）** | Model Hub "On device" 标签页显示的模型大小与 Model Picker 下拉菜单中的显示不一致，Windows 11、2 GiB VRAM 环境。 | 待解决 — [#17074](https://github.com/unslothai/unsloth/issues/17074) |
| **Multi-LoRA 批处理分页竞态** | fine-tuning jobs 接口在列表请求期间启动 Multi-LoRA 批次时，分页竞态可能导致排队任务被异常移除出页面。 | 已修复 [#16836](https://github.com/unslothai/unsloth/pull/16836)（Stanford CS146S 贡献） |

### 🟡 中等（UI/体验）

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| **Appearance 选择器每次选中后关闭** | 玻璃主题、背景及其他视觉选择器（Radix `Select` 组件）在首次选中后即关闭，无法并排浏览选项。 | 待解决 — [#17169](https://github.com/unslothai/unsloth/issues/17169)、[#17161](https://github.com/unslothai/unsloth/issues/17161) |
| **玻璃材质设置重复暴露** | `useMaterialStore.material` 在 Appearance 标签页中有两个控件，标签文案和选项集不同，容易造成困惑。 | 待解决 — [#17162](https://github.com/unslothai/unsloth/issues/17162) |
| **Composer 设置分散在多个标签页** | 聊天宽度、composer 位置、outline、已发送附件位于 Appearance；其他 composer 默认值位于 Chat——无单一负责人。 | 待解决 — [#17163](https://github.com/unslothai/unsloth/issues/17163) |

---

## 6. 对应用开发者的意义

**推理与服务：**
- 如果你通过 Unsloth Studio 运行基于 vLLM 的引擎，全新引擎环境下的首次请求延迟将显著改善——FlashInfer 内核现已预装，不再按需 JIT 编译。
- INT8 现已在 T4 及同类 Turing GPU 上可用。T4 是 Colab 和低价云虚拟机中的常见配置，现在可以在这些实例上加载更密集的 int8 量化模型，而不必退回 fp16。

**扩散 / 图像 / 视频工作负载：**
- Sol-H3 和 MiniMax-H3 VAE 优化（减少 device 读取、增量 tile 拼接、几何推导 mask）直接降低了端到端视频生成延迟，尤其在 decoder 成为瓶颈的长片段场景中效果明显。
- Qwen-Image-2.1 prompt 编码不再分配未使用的 K/V 缓存，为扩散管线本身释放了 VRAM。
- FLUX.3 在 fp16-only Turing GPU（T4）上现已正确运行，通过逐层 float32 计算替代全模型黑图。

**微调与训练：**
- Multi-LoRA 分页竞态修复（[#16836](https://github.com/unslothai/unsloth/pull/16836)）解决了一个可能导致并发批次启动期间排队任务被静默丢弃的竞态条件——依赖任务队列的生产训练流水线应确认已升级至修复后版本。
- FSDP2 save 组合逻辑现可在等价的 device mesh 之间正确工作，对于 reload 和多模型场景尤为重要。

**需关注事项：**
- AMD RX 6700 XT ROCm 段错误（[#17147](https://github.com/unslothai/unsloth/issues/17147)）表明 RDNA 2 检测可能通过但运行时仍会失败。若在 AMD GPU 上通过 ROCm 运行 Unsloth，请监控首次 GPU 操作是否崩溃；在问题解决前建议在 CUDA 环境中运行。
- Intel Arc 140V 用户应关注 [#17137](https://github.com/unslothai/unsloth/issues/17137)—— [#17070](https://github.com/unslothai/unsloth/pull/17070) 中的 float64 检测修复可能部分有效，但完整解决方案尚未确认。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*