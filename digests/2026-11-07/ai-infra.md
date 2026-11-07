# AI 基础设施日报 2026-11-07

> 生成时间: 2026-11-07 02:18 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this English technical report into Simplified Chinese. They've given me detailed rules about how to translate it. Let me translate this carefully, maintaining the structure, technical accuracy, and natural Chinese technical register.

Key things to preserve:
- Markdown structure (headings, tables, lists, blockquotes, horizontal rules, bold/italic, emojis)
- Project names, slugs, version tags, file paths, API identifiers
- Numbers, dates, issue/PR references
- URLs
- Code spans and blocks

Let me translate section by section, being careful with technical terminology.

Title: "AI Infrastructure Ecosystem — Cross-Project Comparison Report" → "AI 基础设施生态——跨项目对比报告"

I'll use natural technical Chinese register throughout.
</think>


# AI 基础设施生态——跨项目对比报告
**日期：2026-11-07**

---

## 1. 生态总览

当前的 AI 推理技术栈正沿着成本-性能-可及性这一轴线发生分化。企业级推理引擎（vLLM、SGLang）正在 Blackwell（SM120）和多节点张量并行上殊途同归，以 FP8/NVFP4 KV 缓存和投机解码作为基础能力，同时在压缩张量量化路径的正确性上持续加码。而 llama.cpp 生态则继续扮演通用硬件适配层的角色，如今已支持 Kimi-K3.1-Pro 的 DSA-indexer 和 RAG embedding 48 倍速摄取，表明本地运行时绝非止步不前。Ollama 和 Unsloth 各据一隅——前者聚焦 MLX 并发本地推理，后者专注训练与微调——但两者正朝着同一个根本挑战收敛：规模化下的显存效率。LiteLLM 作为网关层，映射着其下游技术栈的多样性：470 个活跃 PR 追踪着 Claude 加密推理修复、Bedrock 结构化输出默认值、以及按密钥粒度的支出控制——多提供商路由的运维复杂度正在追赶底层模型服务的复杂性。

---

## 2. 活跃度对比

| 项目 | 层级 | Issues（活跃） | PRs（活跃） | Releases（24 h） | 备注 |
|---------|-------|:---------------:|:------------:|:---------------:|---------|
| **vLLM** | 推理引擎 | ~200+ | ~180+ | 0 | 无 release；FP4+TP 正确性相关 PR 处于关键阶段 |
| **SGLang** | 推理引擎 | ~140+ | ~250+ | 0 | PR 数量最多；ROCm/XPU/Blackwell 内核工作量大 |
| **llama.cpp** | 本地运行时 | 77 | 131 | **11**（b12180→b12170） | Release 最频繁；硬件覆盖最广 |
| **Ollama** | 本地推理 | ~60+ | ~80+ | 0 | MLX 并发生成 PR 日趋成熟 |
| **LiteLLM** | API 网关 | 68 | 470 | 1（v1.108.2 LTS） | 活跃 PR 数量最多；网关复杂度持续增长 |
| **Unsloth** | 微调 | 42 | 213 | 1（v0.1.916-beta） | 训练 + 媒体生成；RAG 摄取 48 倍提速 |

**关键观察：**

- **SGLang** 在推理引擎中 PR 吞吐量最高，印证了其"按模型推送融合内核"而非等待上游后端就绪的策略。
- **llama.cpp** 按 release 频率遥遥领先——单日 24 小时内 11 个提交被标记为 release，反映的是其持续集成式发布模式，而非语义化版本控制门控。
- **LiteLLM** 470 个活跃 PR 表明，随着模型多样性的爆炸式增长，多提供商网关层正承受巨大的运维压力。
- **Unsloth** 是对比集中唯一涉足媒体生成（图像/视频）的项目，位居训练与多模态推理的交叉点。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------|:----:|:------:|:---------:|:------:|:-------:|:-------:|
| **Kimi-K3 / K3.1**（DSA attention） | 🔶 ROCm FP8 MLA | ✅ TP-sharding + KDA 融合 | ✅ K3.1-Pro（DSA，文本） | — | ✅ 原生支持 | — |
| **DeepSeek-V4 / V4.1** | 🔶 Block-size bug 待解 | 🔶 性能调查（SM120） | — | — | — | — |
| **GLM-5.3 / GLM-5.3-Flash** | 🔶 优化中 | 🔶 输出退化 bug | ✅ 推理支持 | — | — | — |
| **Gemma-4** | — | — | ✅ 图优化（E2B/E4B） | ✅ 解析器修复 | — | — |
| **Qwen3.8 Flash Next** | — | — | ✅ MXFP8/BF16 混合 | ✅ MLX 显存高效版 | — | — |
| **LFM3-Audio-2B** | — | — | — | — | — | ✅ 训练 + 导出 |
| **Cosmos3-Nano**（视频） | — | — | — | — | — | ✅ 续训 |
| **Nemotron 3.5 ASR** | 🔶 功能请求 | — | — | ✅ MLX 支持 | — | — |
| **Intel XPU FP8** | — | ✅ W8A16 路径（Xe2） | — | — | — | — |
| **AMD gfx950 / MI355X** | ✅ MoE + Qwen3-Next | ✅ 解码内核优化 | — | — | — | — |
| **Apple Silicon（MLX）** | — | 🔶 RFC 进行中 | — | ✅ 并发生成 | — | — |

**图例**：✅ 已发布 / 🔶 进行中 / — 未涉及

**分析**：SGLang 在企业级推理竞赛中以最广泛的跨厂商覆盖（NVIDIA/AMD/Intel XPU）领先。llama.cpp 以最快的发布节奏在模型广度上领先。vLLM 和 SGLang 均在 DeepSeek-V4 和 GLM-5.3 上积极推进，表明这些架构正成为推理层竞争的关键基准。Ollama 的优势在于 MLX 优先的本地部署；Unsloth 是对比集中唯一支持音频训练和多模态生成端到端能力的项目。

---

## 4. 性能前沿

优化工作集中于四大方向：

### 4.1 KV 缓存压缩
| 项目 | 方案 | 效果 |
|---------|----------|--------|
| **vLLM** | 有界 NVFP4 → BF16 页面扩展（Blackwell 预填充） | 冷预填充输入 token 吞吐 +10.1% |
| **SGLang** | HiCache 多级（L1/L2 设备，L3 Mooncake 远端）；混合 SWA 池大小自动调整 | 正确性 + 可配置命中率 |
| **llama.cpp** | MoE-cache LRFU/MQ 混合驱逐策略（按实际 token 数时钟） | MoE 模型专家复用更优 |

### 4.2 量化正确性
| 项目 | 问题 | 状态 |
|---------|-------|--------|
| **vLLM** | FP4/TP scale group 边界 bug —— 错误 rank 的 scale 被应用到当前 rank | 修复 PR 待合并 |
| **vLLM** | GDN 混合架构上带前缀缓存的 Qwen3.8-27B Xid 31 | 待处理 |
| **llama.cpp** | Marlin MoE 输出顺序依赖 expert 内部 token 顺序 | 待处理 |
| **Unsloth** | S3 音频数据集 manifest 冲突（静默 transcript 不匹配） | **已修复** |

### 4.3 投机解码
| 项目 | 变更 |
|---------|-------|
| **SGLang** | DSpark 紧凑验证（每次 launch 一个 kernel）、DFLASH 单 kernel 提交、KDA ReplaySSM（每步减少约 17 次 launch） |
| **llama.cpp** | dense q8_0 和 MoE q4_k/q5_1 的 OpenCL small-n GEMV（用于投机验证） |
| **vLLM** | DeepSeek-V4-Pro TP 模式下 MTP 投机解码 hang |

### 4.4 分布式推理
| 项目 | 焦点 |
|---------|-------|
| **SGLang** | Weight Cache Daemon（阶段一）：Qwen3-235B FP8 权重加载 <1 s vs 冷加载 306–327 s |
| **SGLang** | PD 分离路线图（Q4）；Mooncake L3 offload |
| **llama.cpp** | 预填充/解码分离路线图（35 条评论的 issue） |
| **vLLM** | BYOG 可复现基准测试用于 PR 评估 |
| **LiteLLM** | Router retry/fallback hop 记录；单部署组 404 cooldown 修复 |

### 4.5 内核工程
| 项目 | 收益 |
|---------|-----|
| **SGLang** | DeepSeek-V4 MegaMoE：3×GEMMs → 1×GEMM（ROCm 上堆叠 WKV 投影） |
| **SGLang** | Kimi-K3.1 MoE：AITER sort 融合到 radix-4 router；KDA 输入投影融合 |
| **llama.cpp** | Hexagon RMS_NORM 融合（每层节省 1 次 op launch + 1 次 DDR 往返） |
| **llama.cpp** | Gemma-4 图优化：在 KV 共享层之前丢弃未使用的 prompt token |
| **Unsloth** | Diffusion 编译缓存回读：每次重新打开节省约 9.5 s |
| **Unsloth** | RAG 批量 embedding：99 ms/chunk → 2.07 ms/chunk（48×） |

---

## 5. 层级定位

```
┌─────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                 │
│  Agent 框架、IDE、多模态流水线                        │
└─────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────┐
│                  GATEWAY / ROUTING LAYER             │
│  LiteLLM — 多提供商代理、支出管理、重试               │
│  OpenAI SDK 3 迁移进行中                             │
└─────────────────────────────────────────────────────┘
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
┌──────────────────┐ ┌────────────┐ ┌──────────────────┐
│   SERVING ENGINE │ │LOCAL RUNTIME│ │ FINE-TUNING      │
│                  │ │            │ │                  │
│ vLLM             │ │llama.cpp   │ │ Unsloth          │
│  - Blackwell SM120│ │ - 全 GPU   │ │  - LFM3-Audio-2B │
│  - NVFP4 KV 缓存 │ │ - Hexagon  │ │  - RAG 48×       │
│  - DeepSeek/GLM  │ │ - Apple    │ │  - Diffusion     │
│                  │ │   MLX      │ │    multi-GPU     │
│ SGLang           │ │            │ │                  │
│  - AMD MI355X    │ │Ollama      │ │                  │
│  - Intel XPU     │ │ - MLX 并发 │ │                  │
│  - Weight Cache  │ │ - Vulkan   │ │                  │
│    Daemon        │ │   crash    │ │                  │
└──────────────────┘ └────────────┘ └──────────────────┘
```

**关键差异化因素：**

| 层级 | 项目 | 差异化优势 |
|-------|----------|-----------|
| **推理引擎** | vLLM, SGLang | 多节点 TP/PP、FP8 页面扩展、投机解码、权重热切换。SGLang 在 ROCm/XPU 内核覆盖上领先；vLLM 在 Blackwell 预填充优化上领先。 |
| **本地运行时** | llama.cpp, Ollama | llama.cpp 覆盖最广硬件（Hexagon、RDNA4、Apple MLX、Vulkan、ROCm、CUDA）；Ollama 以开发者体验和管理模型库为目标。 |
| **网关** | LiteLLM | 运维复杂度：多提供商路由、支出日志、护栏、按密钥/团队粒度的控制。470 个活跃 PR 反映了其必须抽象的提供商多样性。 |
| **微调** | Unsloth | 训练 + 推理 + 媒体生成统一工具链。对比集中唯一从数据到部署 checkpoint 全链路覆盖的项目。 |

---

## 6. 趋势信号

### 6.1 压缩张量正确性已成为生产级阻塞项
vLLM 和 llama.cpp 同时在生产级量化正确性 bug 上苦苦挣扎。vLLM 的 FP4+TP scale group 边界 bug 和 llama.cpp 的 Marlin MoE 排序依赖代表了同一类底层失效模式：专为单 GPU 推理设计的量化方案，在并行切分穿过量化粒度边界时会静默出错。使用 NVFP4/MXFP4 配合张量并行的团队应将这些视为**上线前必修补丁**。

### 6.2 多厂商推理之战正在加速
SGLang 的 AMD MI355X、Intel XPU FP8 和 ROCm 进展，加上 vLLM 的 ROCm Kimi-K3 FP8 MLA 支持，释放出一个信号：市场正在从 CUDA 独占推理中分化。**H200 vs MI355X vs Intel Gaudi 3 的成本动态**正在驱动非 CUDA 后端投资。基础设施团队应密切关注 ROCm 内核质量——两个项目仍在收尾正确性差距（vLLM 的 DeepSeek-V4 block-size 回归、SGLang 的 Hopper 上 GLM-5.3-Flash 输出退化）。

### 6.3 投机解码正在收敛到紧凑验证内核
SGLang 的 DSpark/DFLASH 工作（单 kernel 验证提交、每轮 draft 约减少 17 次 launch）和 llama.cpp 的 OpenCL small-n GEMV 验证指向一个共同优化方向：投机验证期间启动多个小 kernel 的开销超过单次融合内核的成本。预计这一模式将在未来一个季度传播到 vLLM 和 Ollama。

### 6.4 Apple Silicon 正在成为成熟的推理目标
SGLang 的 MLX RFC（#32321）、Ollama 的并发 MLX 生成，以及 llama.cpp 持续的 MLX 工作，代表了迈向同一目标的三个独立向量：在 Apple Silicon 上进行原生推理、绕过 Rosetta 2 开销。三方项目在 MLX 整模型导出上的收敛暗示着一个事实上的标准正在形成，但 SRT-based（SGLang）和直接 MLX（Ollama/llama.cpp）路径之间存在碎片化风险。

### 6.5 Agent 基础设施正在推动协议复杂度
LiteLLM 的 470 个活跃 PR 和多个流式 bug 报告（Claude 工具参数截断、Gemini `native_finish_reason` 丢失、加密推理往返失败）揭示了一个真相：**Agent 工作负载暴露了流式 API 的每一个边界情况**。构建多轮工具调用 Agent 的团队应预期网关层将随着提供商在流式事件 schema、finish reason 和推理签名格式上的分歧而持续动荡。

### 6.6 权重热切换正从实验走向生产
SGLang 的 Weight Cache Daemon（阶段一）在 Qwen3-235B FP8 上实现亚秒级权重加载是一个门槛事件。它使**频繁发布微调模型、A/B 部署和多租户模型变体**在不中断服务的情况下变得经济可行。这一能力可能在 2–3 个季度内成为所有推理引擎的差异化标配。

### Agent / 应用开发者行动建议

| 优先级 | 行动 | 理由 |
|----------|--------|--------|
| 🔴 **立即** | 审查 vLLM 上 TP 正确性的 FP4/NVFP4 部署 | Scale 边界 bug 导致静默错误输出 |
| 🔴 **立即** | AMD iGPU / Arc 硬件上固定 Ollama 至 v0.34.4 | v0.40.x 中 Vulkan 回归未解决 |
| 🟠 **本周** | 在 Apple Silicon MLX 工作负载上启用 `OLLAMA_NUM_PARALLEL` | 并发生成现已稳定 |
| 🟠 **本周** | 在 48× 批量修复后测试 Unsloth 上的 RAG 摄取 | 显著吞吐量提升 |
| 🟡 **本季度** | 评估 SGLang Weight Cache Daemon 用于频繁微调发布 | <1 s 加载开启新型部署模式 |
| 🟡 **本季度** | 关注 SGLang 的 PD 分离和 llama.cpp 的预填充/解码切分 | 将支持异构集群设计 |
| 🟡 **本季度** | 密切跟进 LiteLLM 的 OpenAI SDK 3 迁移 | 传输行为变更可能影响 Agent 重试逻辑 |

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:
1. Translate all the content while preserving the Markdown structure
2. Keep technical terms, URLs, code references, version numbers, etc. in their original form
3. Use natural technical Chinese register
4. Output ONLY the translation, no preamble or explanation

Let me carefully translate each section:

Title: "vLLM Project Digest — 2026-11-07" → "vLLM 项目摘要 — 2026-11-07"

Section 1: Today's Highlights
- Translate naturally, keeping technical terms

Section 2: Releases & Breaking Changes
- Keep version numbers like "v0.32.0" as-is
- Keep issue references like "#44280"

Section 3: New Model & Hardware Support
- Keep model names
- Keep issue/PR numbers
- Translate descriptions naturally

Section 4: Performance & Optimization
- Keep numbers and percentages
- Keep hardware names like "SM120", "Blackwell"
- Keep config names

Section 5: Stability & Regressions
- Keep issue numbers
- Translate severity labels
- Keep PR references

Section 6: What This Means for Application Developers
- Keep numbers, config names, version numbers
- Translate recommendations naturally

Let me do the translation:
</think>


# vLLM 项目摘要 — 2026-11-07

## 1. 今日要点

vLLM 项目今日在**量化正确性**和 **ROCm/Kimi-K3 支持**方面高度活跃。一项关键修复防止了张量并行切分压缩张量 scale 组时导致的错误 FP4 scale 乘法（[#66213](https://github.com/vllm-project/vllm/pull/66213)）。与此同时，ROCm 后端新增了 Kimi-K3 在 gfx1250 上的 FP8 MLA 支持（[#66208](https://github.com/vllm-project/vllm/pull/66208)），RL 训练的直接权重重载机制也在加固中，增加了显式的模型 opt-in 和静默路径拒绝机制（[#66002](https://github.com/vllm-project/vllm/pull/66002)）。

---

## 2. 版本发布与破坏性变更

| 项目 | 详情 | 参考 |
|------|--------|-----------|
| **过去 24 小时内无新版本发布** | v0.32.0 仍为当前稳定版本 | — |

**迁移提示：** Rust 前端（`VLLM_USE_RUST_FRONTEND=1`）仍为实验性功能，尚未达到功能完整。正在使用该前端的团队应关注 [#44280](https://github.com/vllm-project/vllm/issues/44280) 了解功能对齐进展。

---

## 3. 新模型与硬件支持

| 模型 / 架构 | 支持类型 | 参考 |
|---------------------|--------------|-----------|
| **NVIDIA Nemotron 3.5 ASR Streaming**（`nemotron-3.5-asr-streaming-0.6b`）| 需求提案已开启 — 多语言流式 ASR，OpenMDW-1.1 许可证 | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **Kimi-K3** 在 **gfx1250**（ROCm）上 | PR：通过 AITER `mha_fwd_mla_varlen` 内核支持 FP8 MLA prefill/decode | [#66208](https://github.com/vllm-project/vllm/pull/66208) |
| **DeepSeek-V4 / V4.1** 在 **ROCm** 上 | PR：将堆叠的 WKV 投影 GEMM 从 3 次 N=`q_lora_rank+head_dim` 的 GEMM 合并为 1 次 N=`3*head_dim` 的 GEMM | [#66212](https://github.com/vllm-project/vllm/pull/66212) |
| **GLM-5.3** | DSA-indexer 架构优化工作进行中 | [#57406](https://github.com/vllm-project/vllm/issues/57406) |

---

## 4. 性能与优化

| 领域 | 变更 | 影响 | 参考 |
|--------|--------|--------|--------|
| **FlashInfer prefill on SM120 (Blackwell)** | 原生 prefill 的有界 FP8 → BF16 页面扩展 | 冷 prefill 基准测试中 **+10.1%** 输入 token 吞吐 | [#64942](https://github.com/vllm-project/vllm/pull/64942) |
| **ROCm MoE (AITER fused)** | 将 `quant_config.gemm1_clamp_limit` 前传给 AITER fused MoE（修复了 GPT-OSS MXFP4 clamp 值为 7.0 的问题）| 提升 AMD 上量化 MoE 的正确性及潜在性能 | [#66210](https://github.com/vllm-project/vllm/pull/66210) |
| **DSpark / DFlash** | 仅对尾部行而非整个序列计算滑动窗口 draft context | 长上下文输入上仅使用滑动窗口的 drafter 减少计算量 | [#60320](https://github.com/vllm-project/vllm/pull/60320) |
| **TRT-LLM MoE on Blackwell** | 使用 FlashInfer 单体 MoE 内核时跳过 DP 填充行 | 消除多节点 DP 中填充 token 的不必要路由计算 | [#65972](https://github.com/vllm-project/vllm/pull/65972) |
| **DeepGEMM on SM12x** | 通过 `kernel_config` opt-in DeepSeek-V4 MegaMoE locality placement | GB200 NVL72 系统上更好的权重局部性 | [#64835](https://github.com/vllm-project/vllm/pull/64835) |
| **Encoder (ViT) CUDA graphs** | 更细粒度的图预算（最高至 `max_num_batched_tokens`）；每个 batch 一次 replay 而非多次填充 replay | 多模态 prefill 的 host 启动开销减少 | [#65227](https://github.com/vllm-project/vllm/pull/65227) |
| **GLM-5.3 P/D on GB200** | NIXL KV descriptor batching 调查 — 每个 TP rank 传输 91k–120k 个 descriptor 被识别为瓶颈 | 性能调查进行中 | [#55434](https://github.com/vllm-project/vllm/issues/55434) |
| **SM12x MoE decode** | *发现性能回退*：DeepGEMM 对齐变更（128 vs 64）导致 decode 减速约 15% | 问题已记录；修复待定 | [#58624](https://github.com/vllm-project/vllm/issues/58624) |

---

## 5. 稳定性与回退问题

| 严重级别 | 问题 | 详情 | 修复 PR |
|----------|-------|---------|--------|
| 🔴 **严重** | **TP 下 FP4 输出错误** | 张量并行切分压缩张量 NVFP4/MXFP4 行并行层和 MoE `w2` 时，乘以了*其他 rank 的 scale* | [#66213](https://github.com/vllm-project/vllm/pull/66213) |
| 🔴 **严重** | **Qwen3.8-27B 非法内存访问** | sm_86、PP=3、GDN hybrid 场景下前缀缓存触发 `Xid 31`；无前缀缓存时输出乱码；自 v0.28.0 回退 | 暂无修复 PR | [#63505](https://github.com/vllm-project/vllm/issues/63505) |
| 🟠 **高** | **NixlConnector KV 租约 bug** | KV block 在远程 READ 进行中时被释放；decode 静默消费被覆写的 KV 数据 | 暂无修复 PR | [#61229](https://github.com/vllm-project/vllm/issues/61229) |
| 🟠 **高** | **DeepSeek-V4-Pro TP hang** | TP=8、MTP 投机解码场景下 RPC `sample_tokens` 超时导致 EngineDeadError | 暂无修复 PR | [#41530](https://github.com/vllm-project/vllm/issues/41530) |
| 🟠 **高** | **Marlin MoE 输出顺序依赖** | Marlin MoE 输出依赖于 expert 内的 token 顺序（非预期行为）| 暂无修复 PR | [#52525](https://github.com/vllm-project/vllm/issues/52525) |
| 🟡 **中** | **ROCm test_block_fp8 回退** | `tests/kernels/moe/test_block_fp8.py` 中四个测试开始失败 | CI 修复 PR 已提交 | [#66205](https://github.com/vllm-project/vllm/pull/66205) |
| 🟡 **中** | **B200 夜间 gsm8k 评估失败** | 近期默认变更 (#63231, #63406) 导致的三个回退 + DeepEP LL 评估中间歇性 NVSHMEM hang | 修复 PR 已提交 | [#66207](https://github.com/vllm-project/vllm/pull/66207) |
| 🟡 **中** | **MiMo-V2 视频网格时间戳 bug** | 视频网格无论实际片段长度均标注为 `00:00–00:30` | 修复 PR 已提交 | [#66201](https://github.com/vllm-project/vllm/pull/66201) |

---

## 6. 对应用开发者的影响

1. **如果你使用张量并行的 FP4/NVFP4/MXFP4 量化**，请在 [#66213](https://github.com/vllm-project/vllm/pull/66213) 合入后尽快部署 — 当前构建在 TP 切分落在 scale 组边界时会产生静默错误输出。

2. **如果你运行 Blackwell (SM120) 部署**，[#64942](https://github.com/vllm-project/vllm/pull/64942) 中的有界 FP8 页面扩展可带来 **10% 的 prefill 吞吐提升**，无需修改模型或配置；在即将推出的 nightly build 中关注此项。

3. **如果你在 sm_86 硬件上使用 Qwen3.5/GDN hybrid 模型配合流水线并行**，由于 Xid 31 回退问题（[#63505](https://github.com/vllm-project/vllm/issues/63505)），请避免使用 v0.28.0–v0.32.0；考虑回退至 v0.27.x 或等待修复。

4. **如果你在 Blackwell 上运行多节点数据并行工作负载**，[#65972](https://github.com/vllm-project/vllm/pull/65972) 中的 DP 填充行跳过可提升 block-FP8/MXFP8 checkpoint 的吞吐。

5. **如果你在构建 RL 训练 pipeline**，[#66002](https://github.com/vllm-project/vllm/pull/66002) 中直接重载模式的加固正在向更安全的默认方向发展；在最终默认切换前，测试你的模型族是否兼容 `VLLM_RELOAD_MODE=direct`。

6. **如果你在混合注意力架构（≥3 个 attention group）中使用前缀缓存**，EAGLE/MTP 与前缀缓存的组合在这些架构上尚未经过测试（[#51771](https://github.com/vllm-project/vllm/issues/51771)）— 关注静默正确性问题。

---

*本摘要基于 2026-11-07 的 GitHub 数据生成，来源为 [vllm-project/vllm](https://github.com/vllm-project/vllm)。*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese while preserving the Markdown structure, URLs, issue references, and using natural technical Chinese. Let me translate this carefully.
</think>


# SGLang 技术周报 — 2026-11-07

## 1. 今日要闻

本期 SGLang 的核心动态集中在**跨架构内核优化**（AMD MI355X/gfx950、Intel XPU、Blackwell SM120）和**基础设施加固**两大方向——CI 脆弱测试追踪（#42752，186 条评论）和 CUDA 核心转储追踪（#26340，356 条评论）持续活跃，同时新增了 Kandinsky6 空间分片 decode 回归问题（#48892）。功能层面，**Weight Cache Daemon**（第一阶段）已投入生产，Qwen3-235B FP8 权重加载从约 306–327 秒降至 1 秒以内；**Apple Silicon 重构** RFC（#32321）提出了以 Torch 为中心的 SRT 路径与 MLX 全模型导出方案。

---

## 2. 版本发布与破坏性变更

过去 24 小时内无新版本发布。

> **迁移提醒：** `AttentionBackend.resolve_prefill_shared_read_ends` 在 #48993 中进行了重构，DeepSeek-V4 后端计数查询行的逻辑有所变化。若有下游代码继承 `AttentionBackend`，请确认 API 兼容性。

---

## 3. 新模型与硬件支持

| 项目 | 详情 | 参考 |
|------|------|------|
| **Kimi-K3.1 MoE TP 分片** | 每个 TP rank 的路由器（12.9 MB）和 latent 投影改为分片存储，而非全复制 | [#48584](https://github.com/sgl-project/sglang/pull/48584) |
| **Intel XPU FP8（Xe2/Battlemage）** | FP8 稠密层改经 `sgl_kernel.fp8_linear`（W8A16）而非 `torch._scaled_mm`，解决 Xe2 无 FP8 矩阵引擎问题 | [#48787](https://github.com/sgl-project/sglang/pull/48787) |
| **AMD gfx950 bf16 矩阵乘法** | 分段式 Split-K bf16 GEMM，目标是 MI350X 上的 decode 批次 | [#45599](https://github.com/sgl-project/sglang/pull/45599) |
| **ModelExpress 权重热迁移** | 原生 `POST /update_weights_from_modelexpress` 后端，支持将训练后的权重热插拔到 serving worker | [#42103](https://github.com/sgl-project/sglang/pull/42103) |
| **Mooncake L3 卸载 + HiCache** | 多级前缀缓存（L1/L2 设备层，L3 远程 Mooncake 层）已投入生产，但在 L2/L3 压力下出现可复现的缓存命中率骤降（#47481） | [#47481](https://github.com/sgl-project/sglang/issues/47481) |
| **Apple Silicon 重构（RFC）** | 提出以 Torch 为中心的 SRT 路径，支持导出的全模型 MLX 分区；实现 PR：#36164 | [#32321](https://github.com/sgl-project/sglang/issues/32321) |

---

## 4. 性能与优化

| 类别 | 变更 | 硬件 | 影响 | 参考 |
|----------|--------|----------|--------|-----|
| **权重加载** | Weight Cache Daemon（第一阶段）：每 rank 守护进程持有后量化权重，通过 CUDA IPC 服务 | 通用 | **306–327s → <1s**（Qwen3-235B FP8） | [#33522](https://github.com/sgl-project/sglang/issues/33522) |
| **Kimi-K3 MoE** | 将 AITER MoE 排序融合进 radix-4 路由器 kernel launch；FP8 kernel 上运行 KDA in-proj + MLA absorb | AMD MI355X | Decode 延迟 ↓ | [#43126](https://github.com/sgl-project/sglang/pull/43126), [#44362](https://github.com/sgl-project/sglang/pull/44362) |
| **DeepSeek-V4.1 verify** | 紧凑 verify：ratio 1 和 2 的压缩器现在走融合 kernel | NVIDIA（H100/B200） | Kernel launch 次数 ↓ | [#48832](https://github.com/sgl-project/sglang/pull/48832) |
| **DSpark 投机解码** | 一个 launch 内构建并提交紧凑 verify 窗口 | NVIDIA | 单步开销 ↓ | [#48833](https://github.com/sgl-project/sglang/pull/48833) |
| **DFLASH verify** | 侧流 context 投影 + 单 kernel verify 提交 | NVIDIA | 关键路径 ↓ | [#48948](https://github.com/sgl-project/sglang/pull/48948) |
| **KDA ReplaySSM** | 复用 verify 融合的提交步索引（之前每步约 17 次 eager kernel launch 需重新计算） | NVIDIA | 每步减少 ~17 次 kernel launch | [#44396](https://github.com/sgl-project/sglang/pull/44396) |
| **拒绝采样** | 小批次下末 token 的词表平铺遍历 | NVIDIA | 设备利用率不足 ↓ | [#48949](https://github.com/sgl-project/sglang/pull/48949) |
| **HiCache + 混合 SWA** | 修复 `--kv-cache-dtype nvfp4` 在混合滑动窗口池上的问题；新增 `--hicache-swa-host-ratio` 和 `--hicache-mamba-size-gb` 用于显式池容量配置 | 通用 | 正确性 + 可调性 | [#48950](https://github.com/sgl-project/sglang/pull/48950), [#47867](https://github.com/sgl-project/sglang/pull/47867) |
| **LayerNorm SP** | 新增 `--layernum-sp-min-tokens` 以在小批次 EXTEND 时采用复制策略而非完整序列并行 | NVIDIA | 小批次效率 ↑ | [#48947](https://github.com/sgl-project/sglang/pull/48947) |
| **Qwen3-Next 全注意力** | 在 gfx950 上将 Q/K GemmaRMSNorm + 部分 RoPE 融合为单 Triton kernel | AMD gfx950 | HIP launch 次数 ↓ | [#48044](https://github.com/sgl-project/sglang/pull/48044) |
| **GLM-5.3-Flash on Hopper** | 持续优化追踪（Q4 路线图项） | NVIDIA Hopper（SM90） | 追踪中 | [#45373](https://github.com/sgl-project/sglang/issues/45373) |

---

## 5. 稳定性与回归问题

| 严重级别 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| 🔴 **正确性** | `fast_topk_v2` 在 radix 阈值桶超过 4096 条目缓冲区时静默返回错误 top-k 集合（k=2048，长行） | **已关闭** | —（已失活） |
| 🔴 **回归** | Kandinsky6 空间分片 decode 测试在 #48366 后于 H100 上失败：`Tensor-likes are not close`（spatial-2 变体） | **待处理** | [#48903](https://github.com/sgl-project/sglang/pull/48903) 已提交 |
| 🟠 **正确性** | 推理解析器在引用的 CoT 内部也会在第一个 `</think>` 处截断，导致链式思维其余内容泄漏到 content | **待处理** | — |
| 🟠 **正确性** | FP8 KV-cache scale 在 GLM-4.5、Llama 4、Qwen3-MoE、GPT-OSS、HunYuan、HY3、K-EXAONE、LFM2 上被忽略；注意力构建时未传入 `quant_config` | **待处理** | — |
| 🟠 **性能** | DeepSeek-V4 在 SM120（4× RTX PRO 6000，TP=4）上 prefill 约 2–7K tok/s，而 vLLM/marlin 报告同硬件下约 12.5K | **待处理** | 内核覆盖情况在 #19637、#30272 追踪 |
| 🟡 **正确性** | GLM-5.3-Flash thinking 输出在多工具 agent 场景下退化为重复 `!` | **待处理** | — |
| 🟡 **正确性** | Model Gateway 在向 worker 转发请求前静默丢弃 chat completions 的 `cache_salt` | **待处理** | — |
| 🟡 **API 不一致** | `/v1/responses`：流式事件中 `created_at` 为 float，非流式响应中为 int | **已关闭** | 失活 |
| 🟡 **缓存异常** | HiCache + Mooncake 在 L2/L3 容量压力下（约 8 轮后）出现可复现的短暂缓存命中率骤降（从 87.4% 降至更低） | **待处理** | — |

---

## 6. 对应用开发者的建议

| 建议 | 说明 |
|----------|--------|
| **权重热迁移已实现亚秒级** | Weight Cache Daemon（第一阶段）使频繁发布权重成为可能，适用于 A/B 测试、微调回滚和多租户模型变体，且无需服务中断。若使用 Qwen3-235B FP8 或类似后量化 checkpoint，请评估 `--enable-weight-cache-daemon`。 |
| **Apple Silicon 支持正在重构** | 提议的 Torch/MLX 互操作路径（#32321）旨在通过 SRT 原生服务 MLX 导出的全模型。若目标为 Mac 推理，请关注 #36164；现有 MLX 路径可能发生变化。 |
| **混合 SWA 模型需显式调优 HiCache** | 具有混合全注意力 + 滑动窗口层的模型（如 Muse Spark）在使用 `nvfp4` KV dtype 时需要配置 `--hicache-swa-host-ratio` 和 `--hicache-mamba-size-gb`，以避免池碎片化。 |
| **Intel Xe2 用户请使用 W8A16 FP8 路径** | PR #48787 修复了 Xe2 上因无 FP8 矩阵引擎导致的性能悬崖，改经 `sgl_kernel.fp8_linear` 而非 `torch._scaled_mm`。合入后请升级。 |
| **扩散模型：关注 MindIE-SD RFC** | Ascend 用户可跟进 #48582——MindIE-SD 将作为 FlashInfer 等效组件服务于华为硬件上的扩散 pipeline。 |
| **留意 CI 脆弱性问题** | 贡献代码前请查看 #42752 的最新脆弱测试列表及 #17050 的 CI 健康大盘，再提交高风险变更。 |

---

*数据来源于 sgl-project/sglang 2026-11-07 的活动记录。所有 issue/PR 链接指向 `https://github.com/sgl-project/sglang`。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me carefully translate this following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers as-is
5. Use natural technical Chinese, not literal word-for-word

Let me translate section by section:

# llama.cpp Daily Digest — 2026-11-07

---

## 1. Today's Highlights

The llama.cpp project landed a notable wave of backend optimizations and model support: the **Kimi-K3.1-Pro** text model was merged (b12180, #31779), bringing DSA-based attention to the K3 family; the **MoE-cache LRFU/MQ hybrid** eviction strategy shipped in b12170 (#31233), promising better expert reuse; and the **Hexagon backend** gained conv_3d support and an RMS_NORM post-norm fusion optimization (#31822) that eliminates redundant DDR round-trips per transformer layer. On the stability front, a CLI crash on invalid UTF-8 inputs was fixed (#31563), and a critical ROCm/HIP BLAS workspace regression causing HSA memory faults was addressed in PR #31838.

---

## 2. Releases & Breaking Changes

...

Let me translate this properly now, maintaining the structure and using natural Chinese technical terminology.

Key translations:
- llama.cpp - stays as-is
- daily digest - 每日简报
- highlights - 今日亮点
- releases & breaking changes - 发布与变更
- new model & hardware support - 新增模型与硬件支持
- performance & optimization - 性能与优化


- stability & regressions - 稳定性与回退
- what this means for application developers - 对应用开发者的影响

I'll focus on the structural elements and key translation points for the next sections. The document maintains a consistent technical report format with clear, concise sections that provide insights into the llama.cpp project's recent developments. The translation will preserve the original's technical precision and informative style, ensuring Chinese developers can understand the latest updates in the llama.cpp ecosystem.

The technical documentation covers critical aspects like performance optimizations, hardware support, and potential compatibility issues across different platforms and architectures. Each section provides targeted information about recent changes, bug fixes, and strategic development directions.

Key focus areas include backend optimizations for specific hardware platforms like Qualcomm Hexagon and Kimi-K3.1-Pro text models, with specific attention to memory management, cache eviction strategies, and potential regression risks. The technical team has addressed significant memory allocation challenges in ROCm/HIP environments, particularly around BLAS workspace management.

Notable improvements include preventing out-of-memory errors through enhanced Vulkan resource allocation detection, particularly for newer integrated graphics solutions. Developers are recommended to upgrade to leverage these performance enhancements and resolve critical memory-related stability issues.
</think>


# llama.cpp 每日简报 — 2026-11-07

---

## 1. 今日亮点

llama.cpp 项目本次更新了大量后端优化与模型支持：**Kimi-K3.1-Pro** 文本模型合并（b12180, #31779），为 K3 系列带来了 DSA 注意力机制；**MoE 缓存 LRFU/MQ 混合** 驱逐策略随 b12170 发版（#31233），有望改善专家复用效果；**Hexagon 后端** 获得 conv_3d 支持以及 RMS_NORM 后归一化融合优化（#31822），消除了每个 Transformer 层中冗余的 DDR 往返访问。稳定性方面，CLI 因非法 UTF-8 输入导致的崩溃已修复（#31563），ROCm/HIP BLAS 工作区导致 HSA 内存故障的关键回退问题已在 PR #31838 中解决。

---

## 2. 发布与变更

| Commit | 描述 | PR |
|--------|------|-----|
| b12180 | **模型**：新增 Kimi-K3.1-Pro 文本模型；使用 DSA（top-k 2048, 32 heads × 128, 无 RoPE）替代 MLA 层 | [#31779](https://github.com/ggml-org/llama.cpp/pull/31779) |
| b12179 | **Hexagon**：将 conv_2d 泛化以支持 conv_3d，通过 HTP_OP_CONV_3D op | [#31814](https://github.com/ggml-org/llama.cpp/pull/31814) |
| b12177 | **CLI**：修复提示词或文件中含非法 UTF-8 时的崩溃问题 | [#31563](https://github.com/ggml-org/llama.cpp/pull/31563) |
| b12173 | **OpenCL**：为 f16、i32、i16、bf16 新增 repeat kernel 支持 | [#31782](https://github.com/ggml-org/llama.cpp/pull/31782) |
| b12172 | **WebGPU**：新增批量 tensor API（`get_tensor_n`、`set_tensor_n`） | [#31473](https://github.com/ggml-org/llama.cpp/pull/31473) |
| b12171 | **Vulkan**：检测 Resizable BAR 支持；对不支持的硬件避免 BAR 分配 | [#31658](https://github.com/ggml-org/llama.cpp/pull/31658) |
| b12170 | **MoE 缓存**：LRFU/MQ 类混合驱逐策略——时钟按实际 token 数前进；`sel` 为 RESHAPE 节点 | [#31233](https://github.com/ggml-org/llama.cpp/pull/31233) |

> 过去 24 小时内**未检测到 API 破坏性变更**。CMake 构建改进（b12176、b12174）和测试基础设施加固均为非破坏性变更。

---

## 3. 新增模型与硬件支持

### 模型
| 模型 | Commit | 关键信息 |
|------|--------|----------|
| **Kimi-K3.1-Pro** | b12180 | DSA 注意力（93 层中的 24 层使用 lightning indexer）；全注意力 MLA 层被替换；top-k 2048 | [#31779](https://github.com/ggml-org/llama.cpp/pull/31779) |

### 硬件 / 后端
| 后端 | 变更 | PR |
|------|------|-----|
| **Qualcomm Hexagon** | 通过 HTP_OP_CONV_3D 支持 Conv_3d（复用现有 HMX 路径的 tiling）；RMS_NORM_MUL 后归一化残差融合消除了每层额外的 op 启动 + DDR 往返 | [#31814](https://github.com/ggml-org/llama.cpp/pull/31814), [#31822](https://github.com/ggml-org/llama.cpp/pull/31822) |
| **OpenCL** | 为 f16、i32、i16、bf16 新增 repeat kernel | [#31782](https://github.com/ggml-org/llama.cpp/pull/31782) |
| **WebGPU** | 批量 tensor API（`get_tensor_n`、`set_tensor_n`），适用于多 tensor 工作负载 | [#31473](https://github.com/ggml-org/llama.cpp/pull/31473) |
| **ROCm/HIP** | 修复 BLAS 工作区分配（固定 32 MB 替代每次调用 rocBLAS scratch）；解决 HSA_STATUS_ERROR_MEMORY_FAULT | [#31838](https://github.com/ggml-org/llama.cpp/pull/31838) |
| **RDNA4（gfx1200/gfx1201）** | 新增 HIP 构建支持文档 | [#26745](https://github.com/ggml-org/llama.cpp/pull/26745) |

> **Vulkan ReBAR 检测**现已对不支持 Resizable BAR 的硬件规避 BAR 分配，从而避免 Intel Arc B580 等平台上的 OOM 问题。

---

## 4. 性能与优化

| 领域 | 优化 | 影响 | PR |
|------|------|------|-----|
| **Gemma-4（E2B/E4B）** | 图优化——在 KV 共享层之前丢弃未使用的 prompt token | **大规模 prefill 提速**（E2B 和 E4B） | [#31356](https://github.com/ggml-org/llama.cpp/pull/31356) |
| **Hexagon** | 将后归一化残差加法融合到 RMS_NORM_MUL 中（`y = ADD(MUL(RMS_NORM(x), w), r)`） | 每层节省 1 次 op 启动 + 1 次 DDR 往返，**每个后归一化层各节省一次** | [#31822](https://github.com/ggml-org/llama.cpp/pull/31822) |
| **Hexagon** | Conv_3d 支持（通过现有 HMX 路径进行 tiling） | 在 Hexagon 上启用 3D 模型推理 | [#31814](https://github.com/ggml-org/llama.cpp/pull/31814) |
| **ROCm/HIP** | 修复 32 MB BLAS 工作区（对比按调用分配方式） | 24/24 solve ops 现已通过；消除内存故障 | [#31838](https://github.com/ggml-org/llama.cpp/pull/31838) |
| **Vulkan（Intel）** | Intel Flash Attention kernel 用于 prefill | Intel 平台 prefill 性能定向提升 | [#29357](https://github.com/ggml-org/llama.cpp/pull/29357) |
| **OpenCL** | 小规模 GEMV 变体用于 dense q8_0 和 MoE q4_k/q5_1 | 提升投机解码验证吞吐量 | [#31831](https://github.com/ggml-org/llama.cpp/pull/31831) |
| **Vulkan** | 在 decodeBuf 声明上使用 `readonly` 修饰符 | 配合未来驱动预期获得性能收益 | [#31833](https://github.com/ggml-org/llama.cpp/pull/31833) |
| **MoE 缓存** | LRFU/MQ 混合驱逐策略（时钟按实际 token 数前进） | 改善 MoE 模型中的专家复用效果 | [#31233](https://github.com/ggml-org/llama.cpp/pull/31233) |
| **Grammar** | 匹配算法左因子化优化 | 减少约束生成中的回溯 | [#29557](https://github.com/ggml-org/llama.cpp/pull/29557) |

---

## 5. 稳定性与回退

### 活跃问题（按严重程度）

| 严重程度 | 问题 | 后端 | 摘要 | 链接 |
|----------|------|------|------|------|
| 🔴 高 | **分离式 prefill/decode** | server | 路线图项目——在专用设备上处理 prompt 推理；35 条评论 | [#21266](https://github.com/ggml-org/llama.cpp/issues/21266) |
| 🔴 高 | **Vulkan/ANV Flash Attention → O(N²) PP 退化 + 设备丢失** | Vulkan | Flash Attention 回退到 Intel Arc B580 上的 SCALAR | [#27638](https://github.com/ggml-org/llama.cpp/issues/27638) |
| 🔴 高 | **Vulkan KHR_coopmat 非确定性结果** | Vulkan | Intel Arc Pro B70（BMG G31）对相同输入每次返回不同答案 | [#31560](https://github.com/ggml-org/llama.cpp/issues/31560) |
| 🟡 中 | **内存泄漏** | CUDA | CUDA 后端 eval bug（commit 47c786924） | [#27725](https://github.com/ggml-org/llama.cpp/issues/27725) |
| 🟡 中 | **SYCL 双 Arc Pro B60 MoE 100–1000× 性能骤降** | SYCL | `--cpu-moe` 配合 `--split-mode layer` 出现停滞；15,000 MiB 缓存正常，40,000 MiB 停滞 | [#31510](https://github.com/ggml-org/llama.cpp/issues/31510) |
| 🟡 中 | **Prompt cache 跨会话污染** | server | RAM 缓存（`--cache-ram`）在并发负载下将无关会话内容混入新 slot | [#27148](https://github.com/ggml-org/llama.cpp/issues/27148) |
| 🟡 中 | **DFlash2 在 post_decode seq_rm 中 abort** | 通用 | 使用 `--parallel 8` 运行混合 Qwen3.8-27B 时 draft-dflash abort | [#31656](https://github.com/ggml-org/llama.cpp/issues/31656) |
| 🟢 低 | **CUDA 非法内存访问** | CUDA | Turing sm_75 配合 `-cmoe` 在恰好 94 个 prompt token 时触发 | [#28241](https://github.com/ggml-org/llama.cpp/issues/28241) |
| 🟢 低 | **SIGSEGV 于 unicode_regex_split_stl** | server | 约 26,000 字符的单一字符类连续串使栈溢出 | [#27783](https://github.com/ggml-org/llama.cpp/issues/27783) |

### 今日修复 / 关闭的问题
- **#20697** 基于磁盘的上下文检查点卸载（`--cache-disk`）——已关闭
- **#23335** Draft-MTP 在 Qwen3.6 上的确定性行为——已关闭
- **#27097** AMD 独显禁用 ReBAR 时 Vulkan token 生成缓慢——已关闭
- **#28843** RDNA3.5 Vulkan coopmat/MMQ 重调——已关闭
- **#28241** Turing sm_75 CUDA 非法内存访问——已关闭

---

## 6. 对应用开发者的影响

### 立即行动项
1. **如果你运行 Gemma-4 E2B/E4B**：请拉取最新版本——图优化 PR #31356 通过在 KV 共享层之前跳过未使用 prompt token 的计算，显著提升 prefill 速度。
2. **如果你使用 Hexagon 硬件**：RMS_NORM_MUL 融合（#31822）降低了每层延迟；如果你运行视觉模型，请升级以使用 conv_3d 支持。
3. **如果你使用 MoE 模型**：新的 LRFU/MQ 混合缓存（#31233, b12170）应该能改善专家复用效果——请监控你的 token 吞吐量变化。
4. **如果你提供混合内容模型**：Discover UI 现已为带音频编码器的模型（如 Gemma 4、LFM 3 Omni）显示音频能力——请相应更新你的模型目录（#31837）。

### 关注事项
- **ROCm/HIP 用户**：BLAS 工作区修复（#31838）解决了 HIP 构建中长期存在的内存故障问题。如果你之前遇到 HSA 错误，现在已经修复。
- **Intel Arc Vulkan 用户**：问题 #31560（Arc Pro B70 上 coopmat 非确定性结果）和 #27638（Flash Attention SCALAR 回退）均处于活跃状态。在问题解决前，请避免在 Arc Pro B70 上使用 `--cache-kv`。
- **SYCL 多 GPU 用户**：双 Arc Pro B60 MoE 性能骤降（#31510）在大缓存量下非常严重（100–1000×）。目前请使用单 GPU 或将缓存限制在 15,000 MiB。

### 战略提示
**分离式 prefill/decode** 讨论（#21266）已达 35 条评论，表明 llama-server 正在向异构部署演进——prefill 在 GPU 上运行，decode 在 CPU/FPGA 上运行。这将是基于 llama.cpp 构建推理网关和 agent 框架的重大架构转变。对延迟敏感的流式工作负载团队应持续关注此路线图项目。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate the content to natural Simplified Chinese
2. Keep all Markdown structure intact
3. Keep URLs, numbers, issue references, code spans, etc. as-is
4. Keep project names like "Ollama", "CUDA", "Vulkan", etc. in their original form
5. Use natural technical Chinese register
6. Output ONLY the translation, no preamble or explanation
7. No markdown fences around the whole output

Let me translate section by section:

**Section 1: Today's Highlights**
- "The scheduler's idle-runner cleanup path received a targeted fix" → 调度器的空闲运行器清理路径获得了一个针对性修复
- "when `keep_alive` expiry fails to stop a `llama-server` process" → 当 `keep_alive` 到期无法停止 `llama-server` 进程时
- "the runner is now retained in the loaded set instead of silently leaking VRAM" → 运行器现在会被保留在已加载集合中，而非静默泄漏显存
- "On the MLX front" → MLX 方面
- "concurrent multi-request serving via `OLLAMA_NUM_PARALLEL` is moving toward mainline" → 通过 `OLLAMA_NUM_PARALLEL` 实现并发多请求服务正在向主线推进
- "a memory-efficient Qwen3.8 Flash Next variant" → 一个内存高效的 Qwen3.8 Flash Next 变体
- "Vulkan-backend instability" → Vulkan 后端不稳定
- "generating fresh bug reports" → 引发新的 bug 报告


- "SIGBUS on device enumeration" → 设备枚举时出现 SIGBUS

**Section 2: Releases**
- "No new releases in last 24 h" → 过去 24 小时无新版本发布
- "The last stable is v0.40.15" → 最新稳定版为 v0.40.15
- "no new tags or release artifacts landed today" → 今日无新的标签或发布产物

**Section 3: New Model & Hardware Support**
- "MLX: dense Nemotron / Luciole Safetensors" → MLX：密集型 Nemotron / Luciole Safetensors
- "The MLX runner now registers the dense `NemotronForCausalLM` variant" → MLX 运行器现已注册密集型 `NemotronForCausalLM` 变体
- "unblocking direct Safetensors-to-MLX conversions" → 解锁直接从 Safetensors 转换到 MLX
- "CUDA 13.5 + SM 103 (SM_9b_128) on Windows ARM64" → Windows ARM64 上的 CUDA 13.5 + SM 103 (SM_9b_128)
- "CI now installs the separate ARM64 cross-compilation package" → CI 现已安装独立的 ARM64 交叉编译包
- "MLX concurrent generation" → MLX 并发生成
- "Ready requests share projection and feed-forward work" → 就绪请求共享投影和前向传播工作
- "while maintaining per-request attention buffers" → 同时维护每个请求的注意力缓冲区
- "Default remains single-stream" → 默认保持单流
- "higher parallelism scales memory linearly" → 更高的并行度会线性扩展内存占用

**Section 4: Performance & Optimization**
- "Memory-efficient Qwen3.8 Flash Next (MLX)" → 内存高效的 Qwen3.8 Flash Next (MLX)
- "NVFP4 blanket quantization was degrading long generations" → 全局 NVFP4 量化正在降低长序列生成的性能
- "Fix keeps QSA projections and non-expert MTP paths in BF16" → 修复将 QSA 投影和非专家 MTP 路径保留为 BF16
- "applying MXFP8 only to eligible dense and control weights" → 仅对符合条件的密集权重和控制权重应用 MXFP8
- "Both `qwen3.8-flash-next:125b-a6b-nvfp4` and `qwen3.8-flash-next:125b-mlx` are published" → `qwen3.8-flash-next:125b-a6b-nvfp4` 和 `qwen3.8-flash-next:125b-mlx` 均已发布
- "Split-log-line memory accounting" → 分割日志行的内存统计
- "`memoryParsingWriter.Write()` previously parsed each write independently" → `memoryParsingWriter.Write()` 之前独立解析每次写入
- "multi-chunk log lines caused regex misses" → 多块日志行导致正则匹配失败
- "and inaccurate VRAM bookkeeping" → 以及不准确的显存记录
- "Fix retains incomplete lines between writes" → 修复在写入之间保留未完成的行
- "Scheduler: keep failed-to-stop runner in loaded set" → 调度器：在已加载集合中保留停止失败的运行器
- "Prevents the expiry path from silently clearing a runner that refused `Close()`" → 防止到期路径静默清除拒绝 `Close()` 的运行器
- "which previously led to VRAM over-commitment" → 这之前会导致显存过度分配
- "and fallback to CPU on the next load" → 以及下次加载时回退到 CPU
- "Gemma4 parser: drop stray `</think>

` close tags" → Gemma4 解析器：丢弃游离的 `</think>` 闭合标签
- "The tokenizer emits `\n\n` as its own token after `</think>`" → 分词器在 `</think>` 后将其作为独立 token 发出
- "Fix drains trailing whitespace from the buffer on tag detection" → 修复在标签检测时清空缓冲区中的尾部空白
- "rather than losing it downstream" → 而非在下游丢失

**Section 5: Stability & Regressions**

| Severity | # | Issue | Backends Affected | Status | Fix PR |
|---|---|---|---|---|---|

| 🔴 Critical | 5.1 | **Vulkan crash on AMD Renoir iGPU (gfx90c)** — `llama-server` terminates with NTSTATUS `0xe06d7363` (unhandled C++ exception) at model load on Ryzen 7 4700U Vega iGPU. Affects every model including ~380 MB ones. Reproduced on v0.40.14 stable and v0.40.15-rc2. | Vulkan / AMD gfx90c | Open | — |
| 🔴 Critical | 5.2 | **AMD RX 5500 (Navi 14, gfx1010) — SIGBUS on device enumeration** — `llama-server --list-devices` raises `signal: bus error` (exit 135) when `GGML_BACKEND` includes Vulkan; the GPU is not detected. | Vulkan / AMD gfx1010 | Open (with proposed fix) | — |
| 🔴 Critical | 5.3 | **gemma4:12b — `ggml_vulkan: device lost` on Intel Arc 130V (Lunar Lake)** — Runner dies right after tensor upload on any GPU offload since v0.40.x; worked on v0.34.4. | Vulkan / Intel Arc 130V | Open | — |
| 🟠 High | 5.4 | **`OLLAMA_NUM_PARALLEL` + multimodal models → `failed processing images`** — Concurrent requests with LLaVA or Moondream cause generation freezes and server-log errors. Open since May 2024; 24 comments. | All multimodal | Closed | — |
| 🟠 High | 5.5 | **cuda_v13: long grammar-constrained generation → Xid 79 (GPU falls off bus)** — Same requests succeed on cuda_v12; RTX 4070 Ti SUPER + driver 595.71.05 + qwen2.5:14b. | CUDA v13 / NVIDIA | Open | — |
| 🟠 High | 5.6 | **Keep-alive runner leak** — Idle `llama-server` not terminated at `keep_alive` expiry; VRAM stays allocated, scheduler assumes it's free, next load mispredicts memory and tilts to CPU. | Scheduler | Open | [PR #19581](https://github.com/ollama/ollama/pull/19581) |
| 🟡 Medium | 5.7 | **`/api/chat` 500 after long streamed reply (macOS)** — Right after a streamed reply finishes, the next request fails with `llama-server apply-template error … write: broken pipe`; retry succeeds. Affects v0.40.8 and v0.40.11. | macOS / API layer | Open | — |
| 🟡 Medium | 5.8 | **ornith:35b parser emits raw special tokens and unparsed XML** — `RENDERER ornith` / `PARSER ornith` combination in custom Modelfile leaks raw control tokens in Claude Code / OpenAI-compat clients. | Parser / ornith | Open | — |
| 🟡 Medium | 5.9 | **TLS handshake timeout with post-quantum ClientHello (X25519MLKEM768)** — Networks that silently drop TLS 1.3 ClientHello messages with PQ cipher suites cause `ollama pull` to time out. | Networking | Open | — |
| 🟢 Low | 5.10 | **Qwen3-coder nested tool-call depth tracking** — `qwenParserState_CollectingToolContent` used naive first-match without nesting depth, so embedded tool-call blocks inside a tool's own content were misparsed. | Parser / qwen3-coder | Open | [PR #17021](https://github.com/ollama/ollama/pull/17021) |

**Section 6: What This Means for Application Developers**

| Area | Implication |
|---|---|
| **Scheduler memory accounting** | If you rely on `keep_alive` to free VRAM between batch jobs, the runner-leak fix (PR #19581) should improve GPU availability predictability once merged. Monitor your VRAM after long idle periods in the current stable build. |
| **MLX on Apple Silicon** | Concurrent generation support (PR #19197) means multi-turn or parallel-agent workloads on Apple Silicon can now overlap prefill across requests without serializing. This is a significant throughput win for latency-sensitive chat pipelines. |
| **Vulkan on AMD iGPUs — avoid for production** | Renoir (gfx90c), RX 5500 (gfx1010), and Intel Arc 130V are all exhibiting driver or backend-level crashes in the v0.40.x series. If you are running on these IGPU/APU configurations, stay on v0.34.4 or fall back to CPU until the Vulkan backend stabilizes. |
| **Grammar-constrained generation on CUDA v13** | Long JSON or regex-constrained outputs on RTX 40-series cards with CUDA 13.x drivers are at risk of GPU bus errors. Downgrade to CUDA v12 or disable grammar mode as a mitigation. |
| **Multimodal concurrency** | `OLLAMA_NUM_PARALLEL > 1` with LLaVA / Moondream is still broken (Issue #4165). Until resolved, keep multimodal inference single-threaded or use separate Ollama instances per model to avoid image-processing deadlocks. |
| **TLS / corporate proxies** | If `ollama pull` times out behind a firewall that inspects or drops post-quantum TLS ClientHellos, you will need to proxy or allowlist `registry.ollama.ai` at the network layer. |

---

*End of digest. Data sourced from github.com/ollama/ollama at 2026-11-07.*

---

Rules:
- Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
- Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
- Issue/PR references like #12345 and their link text stay as-is.
- Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

# Ollama 每日简报 — 2026-11-07

---

## 1. 今日要点

调度器的空闲运行器清理路径获得了一个针对性修复：当 `keep_alive` 到期无法停止 `llama-server` 进程时，运行器现在会被保留在已加载集合中，而非静默泄漏显存。MLX 方面，通过 `OLLAMA_NUM_PARALLEL` 实现并发多请求服务正在向主线推进，一款内存高效的 Qwen3.8 Flash Next 变体（BF16 投影 + MXFP8 密集权重）也已正式发布。与此同时，Vulkan 后端在 AMD Renoir 集显和 Intel Arc 130V 上的不稳定问题引发了新的 bug 报告，其中 AMD RX 5500（Navi 14）在设备枚举时还额外触发了 SIGBUS。

---

## 2. 版本发布与破坏性变更

| 项目 | 详情 |
|---|---|
| **过去 24 小时无新版本发布** | 最新稳定版为 v0.40.15；今日无新标签或发布产物。 |

---

## 3. 新模型与硬件支持

| # | 项目 | 链接 |
|---|---|---|
| 3.1 | **MLX：密集型 Nemotron / Luciole Safetensors** — MLX 运行器现已注册 Luciole 1B/23B 指令模型使用的密集型 `NemotronForCausalLM` 变体，解锁直接从 Safetensors 转换到 MLX 的路径。贡献通道已开启。 | [Issue #19566](https://github.com/ollama/ollama/issues/19566) |
| 3.2 | **Windows ARM64 上的 CUDA 13.5 + SM 103 (SM_9b_128)** — CI 现已安装独立的 ARM64 交叉编译包并保留 SM 121（Ada）支持，填补了 Windows-on-ARM 部署的工具链空白。 | [PR #19580](https://github.com/ollama/ollama/pull/19580) |
| 3.3 | **MLX 并发生成** — `OLLAMA_NUM_PARALLEL` 现已支持 MLX 后端模型；就绪请求共享投影和前向传播工作，同时维护每个请求的注意力缓冲区。默认保持单流；更高的并行度会线性扩展内存占用。 | [PR #19197](https://github.com/ollama/ollama/pull/19197) |

---

## 4. 性能与优化

| # | 项目 | 详情 | 链接 |
|---|---|---|---|
| 4.1 | **内存高效的 Qwen3.8 Flash Next (MLX)** | 全局 NVFP4 量化正在降低长序列生成的性能；修复将 QSA 投影和非专家 MTP 路径保留为 BF16，仅对符合条件的密集权重和控制权重应用 MXFP8。`qwen3.8-flash-next:125b-a6b-nvfp4` 和 `qwen3.8-flash-next:125b-mlx` 均已发布。 | [PR #18078](https://github.com/ollama/ollama/pull/18078) |
| 4.2 | **分割日志行的内存统计** | `memoryParsingWriter.Write()` 之前独立解析每次写入，导致多块日志行出现正则匹配失败和显存统计不准确。修复在写入之间保留未完成的行。 | [PR #19585](https://github.com/ollama/ollama/pull/19585) |
| 4.3 | **调度器：在已加载集合中保留停止失败的运行器** | 防止到期路径静默清除拒绝 `Close()` 的运行器，从而避免显存过度分配和下次加载时回退到 CPU。 | [PR #19581](https://github.com/ollama/ollama/pull/19581) 修复 [#19577](https://github.com/ollama/ollama/issues/19577) |
| 4.4 | **Gemma4 解析器：丢弃游离的 `</think>` 闭合标签** | `Gemma4CollectingContent` 未处理孤立的闭合标签，导致其作为原始内容泄漏。现已抑制。 | [PR #19574](https://github.com/ollama/ollama/pull/19574) |
| 4.5 | **DeepSeek3 解析器：修正在 `</think>` 后出现的多余标签** | 分词器在 `</think>` 后将其作为独立 token 发出，导致标签后出现多余内容。修复在标签检测时清空缓冲区中的尾部空白，而非在下游丢失。 | [PR #19590](https://github.com/ollama/ollama/pull/19590) |

---

## 5. 稳定性与回归问题

*按严重程度 / 影响范围排序。*

| 严重程度 | # | 问题 | 受影响后端 | 状态 | 修复 PR |
|---|---|---|---|---|---|
| 🔴 严重 | 5.1 | **AMD Renoir 集显 (gfx90c) 上的 Vulkan 崩溃** — 在 Ryzen 7 4700U Vega 集显上加载模型时，`llama-server` 以 NTSTATUS `0xe06d7363`（未处理的 C++ 异常）终止。影响所有模型，包括约 380 MB 的模型。在 v0.40.14 稳定版和 v0.40.15-rc2 上均可复现。 | Vulkan / AMD gfx90c | 待处理 | — |
| 🔴 严重 | 5.2 | **AMD RX 5500 (Navi 14, gfx1010) — 设备枚举时 SIGBUS** — 当 `GGML_BACKEND` 包含 Vulkan 时，`llama-server --list-devices` 触发 `signal: bus error`（退出码 135）；GPU 未被检测到。 | Vulkan / AMD gfx1010 | 待处理（有建议修复） | — |
| 🔴 严重 | 5.3 | **gemma4:12b — Intel Arc 130V (Lunar Lake) 上的 `ggml_vulkan: device lost`** — 自 v0.40.x 起，任何 GPU 卸载操作后运行器都在张量上传完成后立即崩溃；在 v0.34.4 上正常运行。 | Vulkan / Intel Arc 130V | 待处理 | — |
| 🟠 高 | 5.4 | **`OLLAMA_NUM_PARALLEL` + 多模态模型 → `failed processing images`** — 使用 LLaVA 或 Moondream 的并发请求会导致生成冻结和服务器日志错误。2024 年 5 月开放至今；24 条评论。 | 全多模态 | 已关闭 | — |
| 🟠 高 | 5.5 | **cuda_v13：长语法约束生成 → Xid 79（GPU 脱离总线）** — 相同请求在 cuda_v12 上成功；RTX 4070 Ti SUPER + 驱动 595.71.05 + qwen2.5:14b。 | CUDA v13 / NVIDIA | 待处理 | — |
| 🟠 高 | 5.6 | **Keep-alive 运行器泄漏** — 空闲 `llama-server` 在 `keep_alive` 到期时未被终止；显存保持分配状态，调度器假设其已释放，下次加载时内存预测错误并倾向于使用 CPU。 | 调度器 | 待处理 | [PR #19581](https://github.com/ollama/ollama/pull/19581) |
| 🟡 中 | 5.7 | **流式回复结束后 `/api/chat` 返回 500 (macOS)** — 流式回复完成后，下一个请求以 `llama-server apply-template error … write: broken pipe` 失败；重试成功。影响 v0.40.8 和 v0.40.11。 | macOS / API 层 | 待处理 | — |
| 🟡 中 | 5.8 | **ornith:35b 解析器发出原始特殊标记和未解析的 XML** — 自定义 Modelfile 中的 `RENDERER ornith` / `PARSER ornith` 组合在 Claude Code / OpenAI 兼容客户端中泄漏原始控制标记。 | 解析器 / ornith | 待处理 | — |
| 🟡 中 | 5.9 | **后量子 ClientHello 的 TLS 握手超时 (X25519MLKEM768)** — 静默丢弃包含 PQ 密码套件的 TLS 1.3 ClientHello 消息的网络会导致 `ollama pull` 超时。 | 网络 | 待处理 | — |
| 🟢 低 | 5.10 | **Qwen3-coder 嵌套工具调用深度跟踪** — `qwenParserState_CollectingToolContent` 使用简单的首次匹配而非嵌套深度，导致工具自身内容中的嵌入式工具调用块被错误解析。 | 解析器 / qwen3-coder | 待处理 | [PR #17021](https://github.com/ollama/ollama/pull/17021) |

---

## 6. 对应用开发者的影响

| 领域 | 影响 |
|---|---|
| **调度器显存统计** | 如果依赖 `keep_alive` 在批处理任务之间释放显存，一旦 PR #19581 合并，GPU 可用性可预测性应会改善。在当前稳定版中，监控长时间空闲后的显存使用情况。 |
| **Apple Silicon 上的 MLX** | 并发生成支持（PR #19197）意味着 Apple Silicon 上的多轮或并行 agent 工作负载现在可以重叠预填充，而无需序列化。对于延迟敏感的聊天管道来说，这是一个显著的吞吐量提升。 |
| **AMD 集显上的 Vulkan — 生产环境避免使用** | Renoir (gfx90c)、RX 5500 (gfx1010) 和 Intel Arc 130V 在 v0.40.x 系列中都出现了驱动程序或后端级崩溃。如果在这些集显/APU 配置上运行，请保持在 v0.34.4 或回退到 CPU，直到 Vulkan 后端稳定。 |
| **CUDA v13 上的语法约束生成** | 在 RTX 40 系列卡上使用 CUDA 13.x 驱动进行长 JSON 或正则约束输出有 GPU 总线错误风险。作为缓解措施，降级到 CUDA v12 或禁用语法模式。 |
| **多模态并发** | `OLLAMA_NUM_PARALLEL > 1` 与 LLaVA / Moondream 的组合仍然存在问题（Issue #4165）。在解决之前，保持多模态推理单线程或使用单独的 Ollama 实例运行每个模型，以避免图像处理死锁。 |
| **TLS / 企业代理** | 如果 `ollama pull` 在检查或丢弃后量子 TLS ClientHello 的防火墙后面超时，需要在网络层代理或允许列出 `registry.ollama.ai`。 |

---

*简报结束。数据来源：github.com/ollama/ollama，时间：2026-11-07。*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the entire English technical digest into Simplified Chinese, following all the rules specified. I need to:

1. Translate all the English content to Simplified Chinese
2. Preserve the Markdown structure exactly
3. Keep URLs, links, issue numbers, version tags, etc. in their original form
4. Use natural technical Chinese register
5. Output ONLY the translation, no preamble or explanation

Let me translate section by section:

Title: "LiteLLM Daily Digest — 2026-11-07" → "LiteLLM 每日简报 — 2026-11-07"

Section 1: Today's Highlights
- LiteLLM v1.108.2 LTS ships with cosign verification → LiteLLM v1.108.2 LTS 发布，支持 cosign 验证
- major new work → 重要新功能
- Claude structured output and Gemini tool handling → Claude 结构化输出与 Gemini 工具调用
- OpenAI SDK 3 migration → OpenAI SDK 3 迁移
- native CollieAi guardrail integration → CollieAi guardrail 原生集成
- per-key/team spend log controls → 按 Key/团队维度的消费日志控制
- SAP GenAI Hub's per-call latency tax → SAP GenAI Hub 每次调用的延迟损耗

Section 2: Releases & Breaking Changes
- LTS → 长期支持版
- Cosign verification now documented → 文档新增 cosign 验证说明
- pull via → 通过以下方式拉取
- Migration → 迁移中

Section 3: New Model & Hardware Support
- Native SDK + proxy → 原生 SDK + 代理模式


- Thinking Machines Lab → 思维机器实验室

Section 4: Performance & Optimization
- Native mode enabled by-default → 默认启用原生模式
- JSON-tool fallback on rejection → 遭拒绝时降级为 JSON-tool 格式
- Eliminates opt-in flag → 无需手动开启标志
- High-latency deployments affected → 对高延迟部署场景影响较大
- Prevents lockout from bad request shapes → 防止因请求格式错误导致的服务锁定
- Accurate load management → 精准负载管理
- Correct multi-tool responses → 确保多工具场景下响应准确
- GDPR / cost savings → 满足 GDPR 合规 / 降低存储成本
- Accurate billing → 精确计费

Section 5: Stability & Regressions
- Critical → 严重
- Medium Severity → 中等严重程度
- Lower Severity / Minor → 较低/次要
- Description → 问题描述
- Status → 状态
- Fix PR → 修复 PR

Section 6: What This Means for Application Developers
- Takeaway → 要点
- Detail → 详情

Now I'll go through the full translation carefully, keeping technical terminology consistent with Chinese technical documentation standards. I need to translate "regressions" as 回归问题, "streaming tool calls" as 流式工具调用, "structured output" as 结构化输出, "round-trip" as 往返, "opt-in" as 手动开启, "guardrail" as 安全护栏, "observability" as 可观测性, and "fallback" as 降级方案 throughout the document.
</think>


# LiteLLM 每日简报 — 2026-11-07

---

## 1. 今日要点

LiteLLM v1.108.2 LTS 发布，支持 cosign 验证。与此同时，项目正在修复 Claude 结构化输出和 Gemini 工具调用中的关键流式回归问题。本期重要新功能包括 OpenAI SDK 3 迁移、Coll ieAi 安全护栏原生集成，以及按 Key/团队维度的消费日志控制。性能优化方向涵盖 Bedrock 结构化输出默认启用，以及 SAP GenAI Hub 每次调用的延迟损耗问题。

---

## 2. 版本发布与破坏性变更

| 版本 | 类型 | 说明 |
|------|------|------|
| **v1.108.2** | LTS | cosign 验证已在文档中说明；通过 `ghcr.io/berriai/litellm:lts` 拉取 |
| **OpenAI SDK 3** | 迁移中 | [#47762](https://github.com/BerriAI/litellm/pull/47762) 将 `uv.lock` 和 Docker 镜像从 SDK 2.33.0 迁移至 3；包含传输层修复 |

---

## 3. 新模型与硬件支持

| 模型 / 平台 | 范围 | PR / Issue |
|-------------|------|------------|
| **Kimi K3**（月之暗面） | 原生 SDK + 代理模式 | [#33921](https://github.com/BerriAI/litellm/issues/33921)（已关闭） |
| **Inkling**（思维机器实验室） | 原生 SDK + 代理模式 | [#33921](https://github.com/BerriAI/litellm/issues/33921)（已关闭） |
| **Tinker** 平台 | 原生 SDK + 代理模式 | [#33921](https://github.com/BerriAI/litellm/issues/33921)（已关闭） |
| **NVIDIA NIM** 模型目录刷新 | Add Model UI + 内置降级方案 | [#50439](https://github.com/BerriAI/litellm/pull/50439) |

---

## 4. 性能与优化

| 领域 | 变更 | 影响 | PR / Issue |
|------|------|------|------------|
| **Bedrock 结构化输出** | 默认启用原生模式；遭拒绝时降级为 JSON-tool | 无需手动开启标志；与 Claude 行为一致 | [#50492](https://github.com/BerriAI/litellm/pull/50492) |
| **SAP GenAI Hub** | 每次调用约 870 ms HTTP GET 开销（2 次阻塞式获取） | 对高延迟部署场景影响较大 | [#47096](https://github.com/BerriAI/litellm/issues/47096)（开放中） |
| **Router 冷却机制** | 404 不再触发单部署分组的冷却 | 防止因错误请求格式导致的服务锁定 | [#50432](https://github.com/BerriAI/litellm/pull/50432) |
| **Router 重试追踪** | 重试和降级跳转现已计入 `allowed_fails`、冷却时间与 RPM | 精准负载管理 | [#50445](https://github.com/BerriAI/litellm/pull/50445) |
| **Ollama 流式工具调用** | 每条流式工具调用现拥有唯一索引 | 确保多工具场景下响应正确 | [#49183](https://github.com/BerriAI/litellm/pull/49183) |
| **消费日志控制** | 按 Key / 按团队开关提示词存储 | GDPR 合规 / 降低存储成本 | [#50135](https://github.com/BerriAI/litellm/pull/50135) |
| **xAI 图片成本** | `deployment input_cost_per_pixel` 现已正确生效 | 精确计费 | [#50490](https://github.com/BerriAI/litellm/pull/50490)（已关闭） |

---

## 5. 稳定性与回归问题

### 严重

| Issue | 描述 | 状态 | 修复 PR |
|-------|------|------|---------|
| [#25869](https://github.com/BerriAI/litellm/issues/25869) | Gemini 流式输出损坏 `server_side_tool_invocations` / `thought_signatures` — 导致后续轮次出现"工具调用上下文损坏" | **已关闭** | — |
| [#50470](https://github.com/BerriAI/litellm/pull/50470) | Claude 流式工具参数在大 schema 场景下被截断/损坏（JSON 片段独立读取） | **开放中** | PR 已提交 |
| [#50456](https://github.com/BerriAI/litellm/pull/50456) | Claude 加密推理往返在 `chatgpt/` 经 `/v1/messages` 调用时中断；需 backport 至 LTS/1.108.x | **开放中** | PR 已提交 |
| [#50317](https://github.com/BerriAI/litellm/issues/50317) | Redis 出队后、PostgreSQL 提交前 writer 退出，导致日度标签消费批次丢失 | **开放中** | — |

### 中等严重程度

| Issue | 描述 | 状态 | 修复 PR |
|-------|------|------|---------|
| [#48145](https://github.com/BerriAI/litellm/issues/48145) | JSON 定义的 openai-like 提供商在模型不在目录中时丢失工具（v1.81→1.106 回归） | **开放中** | — |
| [#47924](https://github.com/BerriAI/litellm/issues/47924) | 在默认启用推理的 Claude 模型上，`reasoning_effort="none"` 省略推理块而非关闭推理 | **开放中** | — |
| [#47046](https://github.com/BerriAI/litellm/issues/47046) | Vertex/Gemini 上下文缓存当 `cache_control` 不在前缀位置时重排对话；丢弃 `system_instruction` | **开放中** | — |
| [#47577](https://github.com/BerriAI/litellm/issues/47577) | Gemini 流式输出在中途 MALFORMED_FUNCTION_CALL 时丢失 `native_finish_reason` | **开放中** | — |
| [#47822](https://github.com/BerriAI/litellm/issues/47822) | 非 OpenAI 提供商的 `httpx.Timeout` 连接超时未生效（白名单范围过窄） | **开放中** | — |
| [#50248](https://github.com/BerriAI/litellm/issues/50248) | Cohere 嵌入调用忽略 `COHERE_API_BASE`（重排路径正常） | **开放中** | — |

### 较低/次要

| Issue | 描述 | 状态 |
|-------|------|------|
| [#46999](https://github.com/BerriAI/litellm/issues/46999) | 带 `budget_id` 的标签调用 `/tag/update` 返回 500 | 已关闭 |
| [#49969](https://github.com/BerriAI/litellm/issues/49969) | Bedrock Converse 将 reasoningText.signature 回传给非 Anthropic 的 GLM 模型导致 Bad Request | 已关闭 |
| [#50024](https://github.com/BerriAI/litellm/issues/50024) | Azure Messages-to-Responses 路径在恢复工具调用历史时丢失加密推理内容 | 已关闭 |
| [#50489](https://github.com/BerriAI/litellm/pull/50489) | 安全护栏释放了未脱敏的缓冲流式内容 | **开放中**，PR 已提交 |

---

## 6. 对应用开发者的影响

| 要点 | 详情 |
|------|------|
| **升级至 v1.108.2 LTS** | 拉取 `ghcr.io/berriai/litellm:lts` 获取最新 LTS 补丁版本，支持 cosign 验证。 |
| **验证 Claude/Gemini 流式工具调用** | 若在 Claude（Anthropic、Vertex、Azure、Bedrock）或 Gemini 上使用流式输出 + 结构化输出/工具调用，请在 [#50470](https://github.com/BerriAI/litellm/pull/50470) 合入后进行测试 — 大 schema 场景下参数可能遭截断。 |
| **`chatgpt/` 上的 Claude Code 会话需测试** | 加密推理往返修复（[#50456](https://github.com/BerriAI/litellm/pull/50456)）正在等待 backport；部署前工具调用会话可能每轮都重新推理。 |
| **关注 SAP GenAI Hub 延迟** | 每次调用因两次管理 API 阻塞式获取产生约 870 ms 开销；若延迟敏感，考虑在外部缓存部署 URL。 |
| **OpenAI SDK 3 迁移进行中** | 若您依赖特定传输层行为，请关注 [#47762](https://github.com/BerriAI/litellm/pull/47762)；升级生产镜像前充分测试。 |
| **Coll ieAi 安全护栏现已可用** | PR [#49224](https://github.com/BerriAI/litellm/pull/49224) 新增 Coll ieAi 原生集成，用于提示词/响应策略执行 — 默认为可观测性优先，按需启用。 |
| **可按 Key 关闭消费日志存储** | 管理员现可为单个 Key 或团队禁用提示词/响应存储（[#50135](https://github.com/BerriAI/litellm/pull/50135)）— 有助于 GDPR 合规或降低成本。 |
| **单部署分组不再因 404 而锁定** | [#50432](https://github.com/BerriAI/litellm/pull/50432) 改变了 Router 行为 — 若您依赖冷却信号进行单部署容错，请验证降级逻辑。 |

---

*数据来源：[BerriAI/litellm](https://github.com/BerriAI/litellm) GitHub 公开数据 — 2026-11-07*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the entire English technical digest into Simplified Chinese. Let me carefully translate each section while maintaining the exact Markdown structure, tables, formatting, and all technical elements exactly as they are.

Key rules:
1. Output ONLY the translation, no preamble or fences
2. Preserve Markdown structure exactly
3. Keep URLs, numbers, version tags, IDs as-is
4. Use natural technical Chinese
5. Keep project names, slugs, etc. in original form

Let me translate section by section:

## 1. Today's Highlights
## 2. Releases & Breaking Changes
## 3. New Model & Hardware Support
## 4. Performance & Optimization
## 5. Stability & Regressions
## 6. What This Means for Application Developers

I'll maintain the table structures, emojis, bold text, links, etc.
</think>


# Unsloth 速报 — 2026-11-07

## 1. 今日要闻

Unsloth 发布 **v0.1.916-beta**，带来大规模性能修复，包括长对话中打字/搜索速度提升 2–3 倍、图片/视频加载加速，以及双 GPU 图片/视频生成。一项重要 PR 合入，解决了 S3 数据集文件因命名冲突被静默覆盖的问题，避免了音频训练流程中的数据损坏。Studio 新增实验性 **Claude Agent 集成**，可通过 Anthropic 的 Agent SDK 连接 Claude Pro/Max 计划，无需 API Key。

---

## 2. 版本更新与破坏性变更

| 版本 | 变更内容 | 影响 |
|---------|--------|------|
| **v0.1.916-beta** | 大幅性能修复；每个对话独立的浏览器；浮动浏览器窗口 | ✅ 非破坏性变更；推荐升级 |
| **transformers 5.23** | `gradient_checkpointing` 重命名为 `activation_checkpointing`；Trainer 仅读取新名称 | ⚠️ **破坏性** — 4 处代码行为变更；旧名称在 v6 之前仍可使用但已废弃；审计代码见 [`f5adb36642`](https://github.com/unslothai/unsloth/commit/f5adb36642) |

**迁移提示**：训练配置中依赖 `gradient_checkpointing` 的应用需在升级到 transformers 5.23+ 之前更新为 `activation_checkpointing`。

---

## 3. 新模型与硬件支持

| 模型 / 功能 | 详情 | 链接 |
|--------------------|---------|------|
| **LFM3-Audio-2B** | Studio 现已全面支持训练、推理及导出（LoRA / 合并 16-bit / GGUF） | [#16973](https://github.com/unslothai/unsloth/pull/16973) |
| **Krea 2 Turbo** (`unsloth/Krea-2-Turbo`) | 图片生成模型现已可在 Studio 的图片生成标签页中选择使用 | [#16892](https://github.com/unslothai/unsloth/issues/16892) |
| **Cosmos3-Nano** | 新增视频续接工作流（可从视频的首帧或尾帧开始延展） | [#16741](https://github.com/unslothai/unsloth/pull/16741) |
| **Cosmos3 256p** | 新增 NVIDIA 帧范围设置及按模型指定的帧率选择器 | [#16737](https://github.com/unslothai/unsloth/pull/16737) |
| **DiffusionGemma 多 GPU** | 双 GPU 图片生成现已正常工作（此前在约 1792 tokens 处因 `GGML_ASSERT n_ubatch >= n_tokens` 而中止） | [#16925](https://github.com/unslothai/unsloth/issues/16925) |
| **Claude Agent** | 实验性集成：通过 `claude` CLI 和 Anthropic Agent SDK 连接 Studio（Claude Pro/Max 无需 API Key） | [#16963](https://github.com/unslothai/unsloth/pull/16963) |

---

## 4. 性能与优化

| 领域 | 变更内容 | 量化影响 | 链接 |
|------|--------|-------------------|------|
| **UI 响应速度** | v0.1.916-beta 性能修复（打字、搜索、媒体加载） | 长对话场景提速 2–3 倍 | [发布说明](https://github.com/unslothai/unsloth/releases) |
| **多 GPU 媒体生成** | 双 GPU 图片/视频生成 | v0.1.916-beta 中已启用 | [发布说明](https://github.com/unslothai/unsloth/releases) |
| **WebKit 页面重绘** | 对话框/菜单打开/关闭时不再重绘整个页面 | macOS/Linux WebKit：5–7 秒 → 约 230 毫秒；Linux WebKit 浏览器面板：20+ 秒 → 已解决 | [#16961](https://github.com/unslothai/unsloth/pull/16961) |
| **减弱动态效果** | 切换亮/暗色主题时不再为每个元素执行动画 | Windows（减弱动态效果开启）：**2.5 秒 → 230 毫秒** | [#16977](https://github.com/unslothai/unsloth/pull/16977) |
| **RAG 导入** | 跨文档批量执行 `_embed_all`；修复批大小为 1 的处理路径 | **99 毫秒/块 → 2.07 毫秒/块**（提速 48 倍） | [#16715](https://github.com/unslothai/unsloth/issues/16715) |
| **Diffusion 编译缓存** | 热启动时回读自动调优结果（SDXL/L4） | 首次渲染约 22 秒的情况下，每次重新打开可节省约 9.5 秒 | [#16981](https://github.com/unslothai/unsloth/pull/16981) |
| **主机内存** | 图片加载完成后将释放的堆内存归还给操作系统 | 降低图片加载后的常驻内存占用 | [#16934](https://github.com/unslothai/unsloth/pull/16934) |
| **内联图片超时** | 为慢速沙箱加载添加宽限期，并显示描述性错误信息 | 体验优化 | [#16923](https://github.com/unslothai/unsloth/pull/16923) |

---

## 5. 稳定性与回归问题

按严重程度排序（🔴 严重 → 🟡 中等）：

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| 🔴 **严重** | **Windows 崩溃**：加载 Krea 2 Turbo 时发生访问冲突（`0xc0000005`） | 待解决 | — |
| 🔴 **严重** | **DiffusionGemma 多 GPU**：提示词超过约 1792 tokens 时中止（`GGML_ASSERT n_ubatch >= n_tokens`） | 待解决 | — |
| 🔴 **严重** | **S3 音频数据集**：静默地将转录文本与错误的音频文件配对；清单分片相互覆盖 | **已关闭** | [#16830](https://github.com/unslothai/unsloth/pull/16830) |
| 🟠 **高** | **Blender MCP** 因 MCP SDK 2.3.0 与 v0.1.915-beta 不兼容而启动失败 | 已关闭 | — |
| 🟠 **高** | **Beta 更新**在 Windows 上无法完成（Tauri 诊断：`elevated=false`） | 待解决 | — |
| 🟡 **中等** | **网页搜索**始终返回"未找到结果"（DuckDuckGo 缺少 `Accept` 请求头；Yandex 未在白名单中） | 待解决 | — |
| 🟡 **中等** | **CLI 流处理**：将截断的流（无 finish reason）视为成功的回复；导致下一轮对话历史损坏 | 已关闭 | — |
| 🟡 **中等** | **RAG 索引**：嵌入模型下载期间对每个文件的索引操作永久失败 | 已关闭 | — |
| 🟡 **中等** | **毛玻璃主题**：UI 中应用不一致；背景模糊效果表现不一 | 已关闭（多个相关问题） | — |
| 🟡 **中等** | **长对话**：导致 Web 版和桌面版 UI 卡顿（回归问题） | 已关闭 | — |

---

## 6. 对应用开发者的影响

**1. 使用 S3 音频数据集的训练流程应重新验证现有清单。** [#16830](https://github.com/unslothai/unsloth/pull/16830) 中的静默文件冲突 bug 可能导致此前的音频数据集中转录文本与音频错配。更新后重新下载并验证清单。

**2. 多 GPU 用户现在可以充分利用双 GPU 图片/视频生成能力。** 在双 GPU Windows/Linux 环境中部署时，预计 diffusion 工作负载将显著加速。

**3. RAG 密集型应用的嵌入吞吐提升 48 倍。** 如果采用批量文档导入，这将大幅缩短索引时间。请审查自定义工作流中的 `_embed_all` 使用情况。

**4. WebKitGTK/Linux 应用开发者**：浏览器面板打开时 20+ 秒的卡顿问题已解决。在无头或 Linux 服务器环境中运行 Studio 时，强烈建议升级。

**5. Transformers 5.23 兼容性**：如果微调代码引用了 `gradient_checkpointing`，在升级依赖前请审查相关配置。四个代码路径的行为已变更。

**6. Claude Agent 集成**提供了一种在 Studio 工作流中路由任务至 Claude Pro/Max 的新方式，无需管理 API Key。适用于需要在复杂任务上利用 Claude 更强推理能力的 Agent 场景。

**7. 面向 Windows 的开发者**：Windows 11 上 Krea 2 Turbo 的崩溃问题尚未解决。在修复发布前，请避免在 Windows 上生产使用该模型，或进行充分测试。

---

*数据来源：github.com/unslothai/unsloth — 2026-11-07*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*