# AI 基础设施日报 2026-10-07

> 生成时间: 2026-10-07 01:46 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the cross-project AI infrastructure digest into Simplified Chinese. I need to follow the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, numbers, dates, code spans, code blocks verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in their original form
5. Use natural technical Chinese - register of a Chinese developer newsletter

Let me translate section by section, keeping the structure intact:

## 1. Ecosystem Overview → ## 1. 生态系统概览
## 2. Activity Comparison → ## 2. 活跃度对比
## 3. Model Support Race → ## 3. 模型支持竞赛
## 4. Performance Frontier → ## 4. 性能前沿
## 5. Layer Positioning → ## 5. 层定位
## 6. Trend Signals → ## 6. 趋势信号

Let me do the full translation now.</think>

# 跨项目AI基础设施摘要 — 2026-10-07

---

## 1. 生态系统概览

AI推理栈正处于快速横向扩展阶段。今日活跃度呈现明显分化：**服务引擎**（vLLM、SGLang）在KV缓存可靠性和前缀缓存正确性上展开性能竞赛，而**本地运行时**（llama.cpp、Ollama）则在多样化硬件目标上推进模型覆盖。与此同时，**网关层**（LiteLLM）整合多提供商抽象，**微调层**（Unsloth）向多模态和语音工作流扩展。总体效果：开发者现可将同一模型部署到云GPU、Apple Silicon、AMD RDNA和NPU——但每层都有各自的稳定性边界。

---

## 2. 活跃度对比

| 项目 | 开放Issue | 近 期PR | 发布（24h） | 状态 |
|---------|-------------|------------|----------------|--------|
| **vLLM** | 10+（严重：前缀缓存损坏） | 11 | 0 | 高迭代；聚焦稳定性 |
| **SGLang** | 9（高：HiCache死锁） | 10+ | 0 | 高迭代；调度器重构 |
| **llama.cpp** | 8 | 20+ | 9 commits | 高迭代；模型/硬件扩展 |
| **Ollama** | 17（MLX性能回退） | 25 | 0 | 中等迭代；UX和MLX聚焦 |
| **LiteLLM** | 10+（GPT-5.4、DeepSeek视觉） | 15+ | 0 | 中等迭代；网关整合 |
| **Unsloth** | 5 | 19 | 1（v0.1.903-beta） | 高迭代；Audio + 多模态推进 |

---

## 3. 模型支持竞赛

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------|:----:|:------:|:---------:|:------:|:-------:|:-------:|
| **GLM-5.3-Flash** | ✅（SM120调查中） | ✅（可断CUDA图） | — | — | — | — |
| **DeepSeek V4.1** | ✅（ROCm解码） | ✅（PD解码节点） | — | — | — | — |
| **K2 Horizon** | — | — | ✅（0.9B–36B MoVA） | 🔲（需求） | — | — |
| **Qwen4Exp / Qwen3-Next** | ✅（ROCm融合核） | — | — | — | — | — |
| **EmbeddingGemma 2** | — | — | — | — | — | ✅（多模态） |
| **Maion-Coder** | — | — | ✅ | — | — | — |
| **PLaMo-3** | — | — | ✅（tokenizer） | — | — | — |
| **Cohere2 Vision** | — | — | ✅（MTMD） | — | — | — |
| **Gemma 4** | — | — | — | ✅（渲染器修复） | — | — |
| **Gemini 3.x** | — | — | — | — | ✅（温度处理） | — |

**领先者**：llama.cpp在原始模型覆盖上领先（本周期新增6种架构）。vLLM和SGLang在云GPU生产级模型支持上持平。

---

## 4. 性能前沿

| 优化领域 | 领先项目 | 关键工作 |
|------------------|-------------------|----------|
| **KV缓存/前缀缓存** | vLLM 🔴, SGLang | vLLM：DSpark/DFlash2缓存损坏严重bug修复（#60174）。SGLang：调度器重构含`prefix_len`追踪 |
| **量化** | llama.cpp | q4_0/q5_0 V解量化Blackwell修复；Vulkan MoE密度门（+21–36%吞吐） |
| **核融合** | llama.cpp, vLLM | ROCm：Qwen3-Next融合QK-norm+RoPE+gate（vLLM）。Vulkan：RMS Norm子组归约 |
| **分布式/数据并行** | SGLang | Helix并行路线图；DeepSeek V4.1 PD解码节点 |
| **MLX/Apple Silicon** | Ollama | 性能回退调试中（Gemma 4 bf16约1 tok/s） |
| **内存管理** | llama.cpp | MoE专家GPU缓存（LRU，batch≤32）；MLX拉取OOM保护 |
| **CUDA图** | vLLM | ViT完整CUDA图RFC（#38175）—多模态推进 |

**最热门话题**：KV缓存正确性。vLLM（#60174）和SGLang（#41579）均有影响生产前缀缓存的活锁/损坏bug。

---

## 5. 层定位

| 层级 | 项目 | 定位 |
|-------|----------|------------|
| **服务引擎** | **vLLM**, **SGLang** | vLLM=稳定性优先（PyTorch 2.15，严格类型）。SGLang=调度器创新（prefix_len，helix DP）。均面向云GPU。 |
| **本地运行时** | **llama.cpp** | 边缘/嵌入式推理，覆盖CUDA/Vulkan/Metal/OpenCL/ROCm。无服务端——作为库或通过`llama-server`运行。 |
| **本地UI+运行时** | **Ollama** | llama.cpp/llama-server消费级封装。Homebrew可用，内嵌浏览器于Unsloth，MLX运行器。 |
| **网关/代理** | **LiteLLM** | 多提供商归一化（OpenAI兼容，100+后端）。路由、缓存、预算控制。 |
| **微调** | **Unsloth** | LoRA/QLoRA微调Studio UI+运行时。现扩展至Audio API、视觉数据集训练、EmbeddingGemma。 |

**竞争线**：vLLM ↔ SGLang（云服务）。llama.cpp ↔ O Ollama（本地推理）。LiteLLM ↔ vLLM（均做推理，抽象层不同）。Unsloth正交（训练层）。

---

## 6. 趋势信号

### Agent开发者应关注

1. **前缀缓存尚未达到生产就绪状态** — 两大服务引擎均有活bug。若你的agent依赖前缀缓存（如系统提示复用、RAG共享上下文），在生产部署前请在特定引擎版本上验证。

2. **多模态正在跨越鸿沟** — vLLM ViT完整CUDA图、Unsloth EmbeddingGemma 2、llama.cpp Cohere2 Vision。各栈视觉语言模型正成为一等公民。

3. **Agent工具调用bug广泛存在** — Gemma 4校验失败（vLLM）、qwen3_xml解析器边缘情况（vLLM）、Minicpm5工具调用解析（Ollama）、MCP工具转换（LiteLLM）。若构建含function calling的agent，需做好摩擦准备。

4. **硬件碎片化正在加速** — Blackwell（sm_120）、AMD RDNA4、Intel Gaudi、NPU（Apple Neural Engine通过MLX，SGLang NPU HiCache）。每个目标有独立核路径和bug表面。

5. **投机解码热度上升** — Ollama最高需求（68👍）、Unsloth Decision API playground、SGLang EAGLE修复。早期阶段但活跃推进中。

6. **语音正在成为新前沿** — Unsloth Audio API、Ollama语音克隆路径、llama.cpp GigaAM量化选择。语音agent pipeline正变得更容易端到端构建。

### 决策点

| 场景 | 推荐技术栈 |
|----------|-------------------|
| **云GPU推理** | vLLM（稳定）或 SGLang（吞吐实验） |
| **Apple Silicon本地** | Ollama（易用）或 llama.cpp（掌控） |
| **多提供商网关** | LiteLLM |
| **微调+部署** | Unsloth → vLLM/Ollama |
| **边缘/跨平台** | llama.cpp（Vulkan覆盖大多数GPU） |

---

*跨项目综合整理（vLLM、SGLang、llama.cpp、Ollama、LiteLLM、Unsloth）— 2026-10-07数据。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the digest into Chinese. I need to:
1. Translate all the content into Chinese
2. Keep the exact Markdown structure
3. Keep technical terms, URLs, issue/PR numbers as-is
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through and translate while preserving structure.</think>

# vLLM 速报 — 2026-10-07

## 1. 今日要闻

vLLM 项目正在处理 DFlash2/DSpark 前缀缓存的一个关键稳定性问题（Issue #60174），同时推进多模态支持——RFC for ViT Full CUDA Graph（#38175）已提上日程。PyTorch 升级到 2.15.0 的工作正在进行中（PR #60324），ROCm 优化也在持续，Qwen3-Next 和 DeepSeek V4.1 的融合内核支持已就绪。

---

## 2. 发布与重大变更

| 项目 | 描述 | 链接 |
|------|------|------|
| **暂无新发布** | 过去 24 小时内无发布 | — |

---

## 3. 新模型与硬件支持

| 模型/架构 | 详情 | 链接 |
|-----------|------|------|
| **GLM-5.3-Flash (glm5_next)** | 正在调查 SM120（RTX PRO 6000 Blackwell）支持——无 RoPE 稀疏 MLA 有三种失败模式 | [#53963](https://github.com/vllm-project/vllm/issues/53963) |
| **DeepSeek-V4.1** | 新的 ROCm 解码候选掩码优化：单次启动 DSA 内核 | [#59668](https://github.com/vllm-project/vllm/pull/59668) |
| **Qwen4Exp** | 融合 PLE Triton 内核现已移植到 AMD/ROCm 后端 | [#60021](https://github.com/vllm-project/vllm/pull/60021) |
| **MiniMax-M3** | 修复了解码索引器共享内存阶段复用问题 | [#60194](https://github.com/vllm-project/vllm/pull/60194) |
| **AMD Zen CPU** | CI 镜像构建现已在 AMD CI 流水线启用 | [#60016](https://github.com/vllm-project/vllm/pull/60016) |

---

## 4. 性能与优化

| 领域 | 变更 | 影响 | 链接 |
|------|------|------|------|
| **PyTorch 升级** | 更新至 2.15.0，torchvision 0.29.1，triton 3.9.0（测试通道） | 最新框架特性与修复 | [#60324](https://github.com/vllm-project/vllm/pull/60324) |
| **DeepSeek V4.1 ROCm** | 单次启动 DSA 解码候选掩码 | 减少每层内核数量 | [#59668](https://github.com/vllm-project/vllm/pull/59668) |
| **Qwen3-Next ROCm** | 启用融合 QK-norm+RoPE+gate Triton 内核 | AMD 性能优化 | [#51406](https://github.com/vllm-project/vllm/pull/51406) |
| **P/D 传输** | 提前一个 prompt token 停止 prefill/decode 传输 | 内存/布局正确性修复 | [#59330](https://github.com/vllm-project/vllm/pull/59330) |
| **Model Runner V2** | 通用张量转储器用于调试 | 提升可观测性 | [#52558](https://github.com/vllm-project/vllm/pull/52558) |
| **Spec Decode EAGLE** | 修复 Llama 4 和 Mistral Large 3 drafter 中多模态嵌入合并问题 | 回归问题修复 | [#57633](https://github.com/vllm-project/vllm/pull/57633) |

---

## 5. 稳定性与回归问题

### 严重

| 严重程度 | 问题 | 描述 | 状态 |
|----------|------|------|------|
| 🔴 **严重** | [#60174](https://github.com/vllm-project/vllm/issues/60174) | **DFlash2/DSpark + 前缀缓存输出错误** — Qwen3.8-27B NVFP4（compressed-tensors）在 v0.30/0.31 上缓存命中后出现损坏；v0.29 和 FP8 target/MTP 正常 | 待处理，12 条评论 |
| 🔴 **严重** | [#59770](https://github.com/vllm-project/vllm/issues/59770) | **Nemotron-3.5-Lightning NVFP4 解码慢约 16%** — 自 v0.29.0 起在 DGX Spark（GB10/SM121）上出现 | 待处理，6 条评论 |

### 高

| 严重程度 | 问题 | 描述 | 状态 |
|----------|------|------|------|
| 🟠 **高** | [#39072](https://github.com/vllm-project/vllm/issues/39072) | **Gemma4 + PI coding agent**：工具 "edit" 验证失败 — 缺少 'path' 属性 | 待处理，28 条评论 |
| 🟠 **高** | [#45268](https://github.com/vllm-project/vllm/issues/45268) | **L1 睡眠/唤醒循环后 EngineDeadError** — 配合 `--kv-offloading-backend native + --enable-sleep-mode` 使用 | 待处理，12 条评论 |
| 🟠 **高** | [#55080](https://github.com/vllm-project/vllm/issues/55080) | **tool_choice='none'** 会静默删除形似工具调用的内容 | 待处理，9 条评论 |
| 🟠 **高** | [#53051](https://github.com/vllm-project/vllm/issues/53051) | **Prefill 被错误调度** 到 spec-decode FULL cudagraph，当 prompt 长度 == 1 + num_speculative_tokens 时 — 静默 GDN 状态丢失 | 待处理，7 条评论 |

### 中

| 严重程度 | 问题 | 描述 | 状态 |
|----------|------|------|------|
| 🟡 **中** | [#51679](https://github.com/vllm-project/vllm/issues/51679) | **qwen3_xml 工具解析器** 吞掉 `<|im_end|>` 分隔符，导致 reasoning 与 content 合并 | 待处理，12 条评论 |
| 🟡 **中** | [#57423](https://github.com/vllm-project/vllm/issues/57423) | **FlashInfer 自动调优配置缓存** 仅在 rank 0 命中，导致引擎启动死锁（已关闭） | 已关闭 |

---

## 6. 这对应用开发者意味着什么

**立即行动：**
- **避免在 DFlash2/DSpark 上使用前缀缓存** — Qwen3.8-27B NVFP4 的问题（#60174）解决前，生产环境中可能产生难以察觉的错误输出。
- **延迟升级到 v0.30+** — Nemotron-3.5-Lightning NVFP4 部署在 DGX Spark 上存在约 16% 的性能回归，影响显著。

**即将改进：**
- **工具调用可靠性**：Gemma4 验证错误和 qwen3_xml 解析器边界情况的修复已在路上。
- **新 API**：Rust 生成式评分路由（PR #46427）填补了 API 层面的功能差距。
- **更好的调试能力**：Model Runner V2 的通用张量转储器（PR #52558）有助于故障排查。

**长期方向：**
- 多模态是重点方向 — ViT Full CUDA Graph 支持已在 RFC #38175 中跟踪，将显著提升视觉语言模型的吞吐量。
- ROCm 优化持续成熟，Qwen4Exp 和 DeepSeek V4.1 内核已登陆 AMD 硬件。

---

*基于 vllm-project/vllm 在 2026-10-07 的活动生成*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang digest into Simplified Chinese. I need to:
1. Translate the content while keeping technical terms, code references, URLs, and numbers as-is
2. Preserve the Markdown structure exactly
3. Use natural technical Chinese register

Let me go through and translate this carefully:

## Today's Highlights - 今日要点

SGLang developers are driving forward with significant scheduler refactoring around prefix caching and state management (issues #42824, #42825, #42822), alongside active DeepSeek V4.1 optimization work and Blackwell performance improvements for NVIDIA Confidential Computing. CI infrastructure remains a focus with maintenance mode active and flaky test tracking in place.

SGLang 开发团队正在推进重要的调度器重构工作，围绕前缀缓存和状态管理展开（issues #42824, #42825, #42822），同时进行 DeepSeek V4.1 优化和 NVIDIA Confidential Computing 的 Blackwell 性能改进。CI 基础设施仍是重点，维护模式已启动，flaky test 追踪也在进行中。

## Releases & Breaking Changes - 发布与重大变更

No new releases in the last 24 hours.

过去 24 小时内无新发布。

## New Model & Hardware Support - 新模型与硬件支持

- **GLM-5.3-Flash**: Breakable prefill CUDA graph now enabled by default (#42845)
- **DeepSeek-V4.1**: Active development on PD decode node DP attention support (#40177)
- **RTX PRO 6000 (SM120)**: Field validation complete on 8× RTX PRO 6000 Blackwell Max-Q (PCIe-only, no NVLink) — working configurations and throughput measurements reported (#40877)

- **GLM-5.3-Flash**: 可中断 prefill CUDA graph 现已默认启用 (#42845)


- **DeepSeek-V4.1**: 正在开发 PD decode node DP attention 支持 (#40177)
- **RTX PRO 6000 (SM120)**: 在 8× RTX PRO 6000 Blackwell Max-Q (仅 PCIe，无 NVLink) 上完成现场验证 — 已报告工作配置和吞吐量数据 (#40877)

## Performance & Optimization - 性能与优化

- **DeepSeek V4.1 Optimization**: Ongoing work tracked in roadmap #42170; mHC code cleanup complete, prefill optimizations landed
- **NVIDIA CC on Blackwell**: Fix for overlap scheduling when `cudaMemopyAsync` is forced synchronous under Confidential Computing, which was serializing decode steps (#36810)
- **KDA Kernel Fix**: Sigmoid implementation now bit-identical to `torch.sigmoid` (#42611)
- **FLUX.2**: Eliminated unnecessary cat operation in output projection (#41943)
- **Scheduler Refactoring**: Prefix tracking moved to `prefix_len` field, removing `Req.prefix_indices` and `extend_range` for cleaner prefix cache logic (#42824, #42825, #42822)
- **FDFO Block Handling**: Request rows now persist across FDFO blocks to fix KV cache leak (#42846)
- **Transformers Bump**: Dependency update to transformers 5.19.0 (#42784)

- **DeepSeek V4.1 优化**: 路线图 #42170 跟踪进行中；mHC 代码清理完成，prefill 优化已落地
- **NVIDIA CC on Blackwell**: 修复了 Confidential Computing 下 `cudaMemopyAsync` 被强制同步时的 overlap scheduling 问题，该问题导致 decode 步骤被串行化 (#36810)
- **KDA 内核修复**: Sigmoid 实现现在与 `torch.sigmoid` 位相等同 (#42611)
- **FLUX.2**: 消除了输出投影中不必要的 cat 操作 (#41943)
- **调度器重构**: 前缀追踪移至 `prefix_len` 字段，移除 `Req.prefix_indices` 和 `extend_range`，简化前缀缓存逻辑 (#42824, #42825, #42822)
- **FDFO 块处理**: 请求行现在跨 FDFO 块持久化，修复 KV 缓存泄漏 (#42846)
- **Transformers 更新**: 依赖升级至 transformers 5.19.0 (#42784)

## Stability & Regressions - 稳定性与回归

| Severity | Issue | Status |
|----------|-------|--------|
| **High** | DeepSeek-V4 + HiCache TP deadlock under concurrent long prefills — scheduler and detokenizer go silent, `/health` 503 | Open — #42465 |
| **High** | Hybrid-SWA + radix cache admission livelock — GPU idle with waiting requests | Open — #41579 |
| **Medium** | DeepSeek-V4-Pro decode ~5% slower at concurrency 1 on GB300 after #39704 | Open — #42074 |
| **Medium** | GLM-5.3 with DFLASH: severe repetition and degenerate loops in reasoning output | Open — #40843 |
| **Medium** | NPU HiCache crash in `MHATokenToKVPoolHost` with single-tensor device buffer | Open — #42672 |
| **Low** | Page-split kernel wraps at ~3.67M tokens/rank on large SM120 KV pools (int32 overflow) | Closed — #34025 |
| **Low** | `response_format` + tools on GLM-47: tool calls silently dropped | Open — #42269 |

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | DeepSeek-V4 + HiCache TP 在并发长 prefill 时死锁 — scheduler 和 detokenizer 无响应，`/health` 返回 503 | Open — #42465 |
| **高** | Hybrid-SWA + radix cache 录取时出现活锁 — GPU 空闲但有请求等待 | Open — #41579 |
| **中** | DeepSeek-V4-Pro 在 GB300 上并发度为 1 时 decode 慢约 5%（#39704 之后） | Open — #42074 |
| **中** | GLM-5.3 配合 DFLASH：推理输出出现严重重复和退化循环 | Open — #40843 |
| **中** | NPU HiCache 在 `MHATokenToKVPoolHost` 中使用单张量设备缓冲区时崩溃 | Open — #42672 |
| **低** | 大型 SM120 KV 池中 page-split 内核在约 3.67M tokens/rank 时回绕（int32 溢出） | Closed — #34025 |
| **低** | GLM-47 上 `response_format` + tools：tool 调用被静默丢弃 | Open — #42269 |

**CI 状态**: 维护模式已启动 (#21065)；截至 2026-10-07，有 2 个 broken 测试和 9 个 flaky 测试 (#17050)

## What This Means for Application Developers - 这对应用开发者意味着什么

1. **If you're serving DeepSeek-V4/V4.1**: Be aware of the HiCache deadlock issue under heavy prefills — avoid concurrent long prompts with `--enable-hierarchical-cache --hicache-write-policy write_through` until fixed. DeepSeek V4.1 optimizations are landing progressively.

1. **如果你在服务 DeepSeek-V4/V4.1**: 注意在重 prefill 负载下的 HiCache 死锁问题 — 避免使用 `--enable-hierarchical-cache --hicache-write-policy write_through` 进行并发长提示，直到问题修复。DeepSeek V4.1 优化正在逐步落地。

2. **If you're using GLM-5.3-Flash**: You now get breakable prefill CUDA graphs by default, which should improve scheduling flexibility for variable-length inputs.

2. **如果你使用 GLM-5.3-Flash**: 你现在默认获得可中断 prefill CUDA graph，这应该能改善变长输入的调度灵活性。

3. **If you're on Blackwell (GB300/B300) with NVIDIA CC**: The overlap scheduling fix should improve decode throughput significantly — test your workloads after the fix merges.

3. **如果你在 Blackwell (GB300/B300) 上使用 NVIDIA CC**: Overlap scheduling 修复应该显著提升 decode 吞吐量 — 修复合并后请测试你的工作负载。

4. **If you're hitting prefix cache issues**: The scheduler refactoring (prefix_len, dropping prefix_indices) is a structural change that may affect edge cases; monitor for regressions.

4. **如果你遇到前缀缓存问题**: 调度器重构（prefix_len，移除 prefix_indices）是结构性变更，可能影响边界情况；请监控回归。

5. **Watch**: The adaptive speculative decoding roadmap (#23705) is in progress — upcoming changes will handle variable acceptance patterns in agentic workloads better.

5. **关注**: 自适应投机解码路线图 (#23705) 正在进行中 — 即将推出的变更将更好地处理 agentic 工作负载中的可变接受模式。

Rules:
- Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
- Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
- Issue/PR references like #12345 and their link text stay as-is.
- Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.</think>

# SGLang 动态 — 2026-10-07

## 今日要点

SGLang 开发团队正在推进重要的调度器重构工作，围绕前缀缓存和状态管理展开（issues #42824, #42825, #42822），同时进行 DeepSeek V4.1 优化和 NVIDIA Confidential Computing 的 Blackwell 性能改进。CI 基础设施仍是重点，维护模式已启动，flaky test 追踪也在进行中。

## 发布与重大变更

过去 24 小时内无新发布。

## 新模型与硬件支持

- **GLM-5.3-Flash**: 可中断 prefill CUDA graph 现已默认启用 ([#42845](https://github.com/sgl-project/sglang/pull/42845))
- **DeepSeek-V4.1**: 正在开发 PD decode node DP attention 支持 ([#40177](https://github.com/sgl-project/sglang/pull/40177))
- **RTX PRO 6000 (SM120)**: 在 8× RTX PRO 6000 Blackwell Max-Q (仅 PCIe，无 NVLink) 上完成现场验证 — 已报告工作配置和吞吐量数据 ([#40877](https://github.com/sgl-project/sglang/issues/40877))

## 性能与优化

- **DeepSeek V4.1 优化**: 路线图 [#42170](https://github.com/sgl-project/sglang/issues/42170) 跟踪进行中；mHC 代码清理完成，prefill 优化已落地
- **NVIDIA CC on Blackwell**: 修复了 Confidential Computing 下 `cudaMemcpyAsync` 被强制同步时的 overlap scheduling 问题，该问题导致 decode 步骤被串行化 ([#36810](https://github.com/sgl-project/sglang/pull/36810))
- **KDA 内核修复**: Sigmoid 实现现在与 `torch.sigmoid` 位相等同 ([#42611](https://github.com/sgl-project/sglang/pull/42611))
- **FLUX.2**: 消除了输出投影中不必要的 cat 操作 ([#41943](https://github.com/sgl-project/sglang/pull/41943))
- **调度器重构**: 前缀追踪移至 `prefix_len` 字段，移除 `Req.prefix_indices` 和 `extend_range`，简化前缀缓存逻辑 ([#42824](https://github.com/sgl-project/sglang/pull/42824), [#42825](https://github.com/sgl-project/sglang/pull/42825), [#42822](https://github.com/sgl-project/sglang/pull/42822))
- **FDFO 块处理**: 请求行现在跨 FDFO 块持久化，修复 KV 缓存泄漏 ([#42846](https://github.com/sgl-project/sglang/pull/42846))
- **Transformers 更新**: 依赖升级至 transformers 5.19.0 ([#42784](https://github.com/sgl-project/sglang/pull/42784))

## 稳定性与回归

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | DeepSeek-V4 + HiCache TP 在并发长 prefill 时死锁 — scheduler 和 detokenizer 无响应，`/health` 返回 503 | Open — [#42465](https://github.com/sgl-project/sglang/issues/42465) |
| **高** | Hybrid-SWA + radix cache 录取时出现活锁 — GPU 空闲但有请求等待 | Open — [#41579](https://github.com/sgl-project/sglang/issues/41579) |
| **中** | DeepSeek-V4-Pro 在 GB300 上并发度为 1 时 decode 慢约 5%（#39704 之后） | Open — [#42074](https://github.com/sgl-project/sglang/issues/42074) |
| **中** | GLM-5.3 配合 DFLASH：推理输出出现严重重复和退化循环 | Open — [#40843](https://github.com/sgl-project/sglang/issues/40843) |
| **中** | NPU HiCache 在 `MHATokenToKVPoolHost` 中使用单张量设备缓冲区时崩溃 | Open — [#42672](https://github.com/sgl-project/sglang/issues/42672) |
| **低** | 大型 SM120 KV 池中 page-split 内核在约 3.67M tokens/rank 时回绕（int32 溢出） | Closed — [#34025](https://github.com/sgl-project/sglang/issues/34025) |
| **低** | GLM-47 上 `response_format` + tools：tool 调用被静默丢弃 | Open — [#42269](https://github.com/sgl-project/sglang/issues/42269) |

**CI 状态**: 维护模式已启动 ([#21065](https://github.com/sgl-project/sglang/issues/21065))；截至 2026-10-07，有 2 个 broken 测试和 9 个 flaky 测试 ([#17050](https://github.com/sgl-project/sglang/issues/17050))

## 这对应用开发者意味着什么

1. **如果你在服务 DeepSeek-V4/V4.1**: 注意在重 prefill 负载下的 HiCache 死锁问题 — 避免使用 `--enable-hierarchical-cache --hicache-write-policy write_through` 进行并发长提示，直到问题修复。DeepSeek V4.1 优化正在逐步落地。

2. **如果你使用 GLM-5.3-Flash**: 你现在默认获得可中断 prefill CUDA graph，这应该能改善变长输入的调度灵活性。

3. **如果你在 Blackwell (GB300/B300) 上使用 NVIDIA CC**: Overlap scheduling 修复应该显著提升 decode 吞吐量 — 修复合并后请测试你的工作负载。

4. **如果你遇到前缀缓存问题**: 调度器重构（prefix_len，移除 prefix_indices）是结构性变更，可能影响边界情况；请监控回归。

5. **关注**: 自适应投机解码路线图 ([#23705](https://github.com/sgl-project/sglang/issues/23705)) 正在进行中 — 即将推出的变更将更好地处理 agentic 工作负载中的可变接受模式。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate this llama.cpp digest into Simplified Chinese, following the detailed translation rules provided. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully:

# llama.cpp Digest — 2026-10-07

## 1. 今日要闻

llama.cpp 项目今日继续保持活跃开发，覆盖 CUDA、Vulkan 和 Metal 后端。值得关注的更新包括：K2 Horizon 模型支持已合并（包含 dense 和 MoVA 变体），PLaMo-3 分词器新增预分段功能，以及多项后端特定性能修复已发布，包括 CUDA Blackwell 反量化优化和 Metal 量化闪光注意力机制的线程组内存修复。RPC 系统新增张量支持（`-sm tensor`），进一步扩展了分布式推理能力。

## 2. 版本更新与破坏性变更

| 提交 | 描述 | 影响 |
|--------|-------------|--------|
| [b11455](https://github.com/ggml-org/llama.cpp/commit/b11455) | **PLaMo-3 分词器预分段** — 在 `<|plamo:...|>` 标记前实现硬边界，并在连续4个以上相同字符前运行 Unigram DP | 新的分词器行为 |
| [b11454](https://github.com/ggml-org/llama.cpp/commit/b11454) | **K2 Horizon dense 和 MoVA 支持** — 0.9B/3.7B/7B/32B/36B MoVA 变体的完整 GGUF 转换、加载和计算图 | 新的模型系列 |

| [b11450](https://github.com/ggml-org/llama.cpp/commit/b11450) | **RPC：新增 `-sm tensor`** — 支持张量分割 RPC 模式，版本号升级 | RPC 协议变更 |

## 3. 新模型与硬件支持

- **K2 Horizon** — 0.9B、3.7B、7B、32B、36B 的 dense 和 MoVA 变体现已支持。包含 GGUF 转换代码、hparams/tensor 加载和计算图。详见 PR [#29535](https://github.com/ggml-org/llama.cpp/pull/29535)。

- **PLaMo-3** — 新分词器支持特殊标记的预分段逻辑和字符重复处理。

- **Maion-Coder** — 新增架构支持。

- **Cohere2 Vision** — MTMD 支持已添加。

- **CUDA BF16** — XIELU 内核现已支持 `nv_bfloat16`。

- **GLM5Next MTP** — 多标记预测功能已实现。

---

## 4. 性能与优化

| PR/提交 | 领域 | 变更 | 指标 |
|-----------|------|--------|--------|
| [#30077](https://github.com/ggml-org/llama.cpp/pull/30077) | CUDA Blackwell | 修复 q4_0/q5_0 V 反量化问题 — 消除 sm_120a/sm_100a/sm_101a 在 CUDA 12.8 上的 128-336 字节堆栈帧 | 内核效率 |
| [#29910](https://github.com/ggml-org/llama.cpp/pull/29910) | CUDA (Q2_K) | 通过调整展开策略修复大量 VGPR 溢出 | AMD MI50 性能 |
| [#27332](https://github.com/ggml-org/llama.cpp/pull/27332) | Vulkan MoE | 用密度门替代固定的 8 token 截止值 — 在 gfx1151、RDNA3、gfx1013 上验证 | B=9 时 +36%，B=16 时 +27%，B=64 时 +21% |
| [#29882](https://github.com/ggml-org/llama.cpp/pull/29882) | Vulkan RMS Norm | 子组规约替代工作组规约 | Intel B70、RTX 4060 Ti |
| [#29887](https://github.com/ggml-org/llama.cpp/pull/29887) | MoE | 主机驻留专家的 GPU 缓存配合 LRU — 仅缓存未命中时上传到 GPU | 小批次 ≤32 tokens |
| [#11446](https://github.com/ggml-org/llama.cpp/commit/b11446) | Metal | 修复量化闪光注意力中线程组内存超用 | 内存效率 |
| [#29977](https://github.com/ggml-org/llama.cpp/pull/29977) | Hexagon | 64 字节步长用于 dccleaninva（原来为 128） | 缓存一致性 |

---

## 5. 稳定性与回归问题

| Issue | Severity | Status | Notes |
|-------|----------|--------|-------|
| [#19466](https://github.com/ggml-org/llama.cpp/issues/19466) | **High** | Closed | 视觉模型的 KV 缓存保存失效 — 45 条评论，7 👍 |
| [#28734](https://github.com/ggml-org/llama.cpp/issues/28734) | **High** | Open | Qwen4exp（Qwen3.8-Flash-Next）CUDA 解码速度随上下文长度线性下降 |
| [#29967](https://github.com/ggml-org/llama.cpp/issues/29967) | **Medium** | Open | llama-server 上调用名为"call"的工具时发生段错误 |
| [#30004](https://github.com/ggml-org/llama.cpp/issues/30004) | **Medium** | Open | 自 PDL 提交以来 B200 上的 CUDA ADD/GELU 变慢 — 7b28f950 后的回归 |
| [#29932](https://github.com/ggml-org/llama.cpp/issues/29932) | **Medium** | Open | Qwen4exp per_layer_token_embd CPU-pinned — Q8 模型无法在 2×96 GiB Vulkan+RPC 上加载 |
| [#28282](https://github.com/ggml-org/llama.cpp/issues/28282) | **Medium** | Open | CUDA 非法内存访问：GLM-5.3-Flash 长预填充 at -ub 2048 (Blackwell/sm_120) |
| [#24415](https://github.com/ggml-org/llama.cpp/issues/24415) | **Low** | Open | 无法使用 OpenVINO 加载 gemma-4-12B — 13 条评论 |

---

## 6. 这对应用开发者的意义

- **新模型选项**：K2 Horizon（0.9B–36B）和 Maion-Coder 现已可加载。PLaMo-3 分词器支持开启了新的日语/英语模型。
- **CUDA Blackwell 用户**：如果在 B200/B100（sm_120）上运行 q4_0/q5_0 量化模型，[#30077](https://github.com/ggml-org/llama.cpp/pull/30077) 中的反量化修复应该能提升内核效率——建议更新。
- **Vulkan/MoE 工作负载**：MoE 批量解码在 AMD RDNA3/4 上的密度门优化可带来 20–36% 的吞吐量提升。
- **Metal Mac 用户**：量化闪光注意力的内存修复（[#11446](https://github.com/ggml-org/llama.cpp/commit/b11446)）应能减少内存受限的 Apple Silicon 上的崩溃。
- **服务器运维**：[#27760](https://github.com/ggml-org/llama.cpp/pull/27760) 在 `/metrics` 中添加了实时生成吞吐量报告。
- **分布式推理**：RPC 张量分割模式（`-sm tensor`）支持大模型的细粒度模型并行。

---

*数据来源：github.com/ggml-org/llama.cpp — 2026-10-07*

I need to verify the translation follows the rules precisely. Looking at the output: URLs stay as-is, code elements like -sm tensor remain unchanged, issue references like #12345 are preserved, and the Markdown formatting matches the original. The technical Chinese reads naturally, maintaining the developer newsletter tone throughout.</think>

# llama.cpp 摘要 — 2026-10-07

## 1. 今日要闻

llama.cpp 项目今日继续保持活跃开发，覆盖 CUDA、Vulkan 和 Metal 后端。值得关注的更新包括：K2 Horizon 模型支持已合并（包含 dense 和 MoVA 变体），PLaMo-3 分词器新增预分段功能，以及多项后端特定性能修复已发布，包括 CUDA Blackwell 反量化优化和 Metal 量化闪光注意力机制的线程组内存修复。RPC 系统新增张量支持（`-sm tensor`），进一步扩展了分布式推理能力。

---

## 2. 版本更新与破坏性变更

| 提交 | 描述 | 影响 |
|--------|-------------|--------|
| [b11455](https://github.com/ggml-org/llama.cpp/commit/b11455) | **PLaMo-3 分词器预分段** — 在 `<|plamo:...|>` 标记前实现硬边界，并在连续 4 个以上相同字符前运行 Unigram DP | 新的分词器行为 |
| [b11454](https://github.com/ggml-org/llama.cpp/commit/b11454) | **K2 Horizon dense 和 MoVA 支持** — 0.9B/3.7B/7B/32B/36B MoVA 变体的完整 GGUF 转换、加载和计算图 | 新的模型系列 |
| [b11450](https://github.com/ggml-org/llama.cpp/commit/b11450) | **RPC：新增 `-sm tensor`** — 支持张量分割 RPC 模式，版本号升级 | RPC 协议变更 |

---

## 3. 新模型与硬件支持

- **K2 Horizon** — 0.9B、3.7B、7B、32B、36B 的 dense 和 MoVA 变体现已支持。包含 GGUF 转换代码、hparams/tensor 加载和计算图。详见 PR [#29535](https://github.com/ggml-org/llama.cpp/pull/29535)。

- **PLaMo-3** — 新分词器支持特殊标记的预分段逻辑和字符重复处理。

- **Maion-Coder** — 架构支持已添加。详见 PR [#29778](https://github.com/ggml-org/llama.cpp/pull/29778)。

- **Cohere2 Vision** — MTMD 支持已添加。详见 PR [#30062](https://github.com/ggml-org/llama.cpp/pull/30062)。

- **CUDA BF16** — XIELU 内核现已支持 `nv_bfloat16`。详见 [#29955](https://github.com/ggml-org/llama.cpp/pull/29955)。

- **GLM5Next MTP** — 多标记预测功能已实现。详见 PR [#29928](https://github.com/ggml-org/llama.cpp/pull/29928)。

---

## 4. 性能与优化

| PR/提交 | 领域 | 变更 | 指标 |
|-----------|------|--------|--------|
| [#30077](https://github.com/ggml-org/llama.cpp/pull/30077) | CUDA Blackwell | 修复 q4_0/q5_0 V 反量化问题 — 消除 sm_120a/sm_100a/sm_101a 在 CUDA 12.8 上的 128-336 字节堆栈帧 | 内核效率 |
| [#29910](https://github.com/ggml-org/llama.cpp/pull/29910) | CUDA (Q2_K) | 通过调整展开策略修复大量 VGPR 溢出 | AMD MI50 性能 |
| [#27332](https://github.com/ggml-org/llama.cpp/pull/27332) | Vulkan MoE | 用密度门替代固定的 8 token 截止值 — 在 gfx1151、RDNA3、gfx1013 上验证 | B=9 时 +36%，B=16 时 +27%，B=64 时 +21% |
| [#29882](https://github.com/ggml-org/llama.cpp/pull/29882) | Vulkan RMS Norm | 子组规约替代工作组规约 | Intel B70、RTX 4060 Ti |
| [#29887](https://github.com/ggml-org/llama.cpp/pull/29887) | MoE | 主机驻留专家的 GPU 缓存配合 LRU — 仅缓存未命中时上传到 GPU | 小批次 ≤32 tokens |
| [#11446](https://github.com/ggml-org/llama.cpp/commit/b11446) | Metal | 修复量化闪光注意力中线程组内存超用 | 内存效率 |
| [#29977](https://github.com/ggml-org/llama.cpp/pull/29977) | Hexagon | 64 字节步长用于 dccleaninva（原来为 128） | 缓存一致性 |

---

## 5. 稳定性与回归问题

| Issue | 严重程度 | 状态 | 备注 |
|-------|----------|--------|-------|
| [#19466](https://github.com/ggml-org/llama.cpp/issues/19466) | **高** | 已关闭 | 视觉模型的 KV 缓存保存失效 — 45 条评论，7 个 👍 |
| [#28734](https://github.com/ggml-org/llama.cpp/issues/28734) | **高** | 开启中 | Qwen4exp（Qwen3.8-Flash-Next）CUDA 解码速度随上下文长度线性下降 |
| [#29967](https://github.com/ggml-org/llama.cpp/issues/29967) | **中** | 开启中 | llama-server 上调用名为"call"的工具时发生段错误 |
| [#30004](https://github.com/ggml-org/llama.cpp/issues/30004) | **中** | 开启中 | 自 PDL 提交以来 B200 上的 CUDA ADD/GELU 变慢 — 7b28f950 后的回归 |
| [#29932](https://github.com/ggml-org/llama.cpp/issues/29932) | **中** | 开启中 | Qwen4exp per_layer_token_embd CPU-pinned — Q8 模型无法在 2×96 GiB Vulkan+RPC 上加载 |
| [#28282](https://github.com/ggml-org/llama.cpp/issues/28282) | **中** | 开启中 | CUDA 非法内存访问：GLM-5.3-Flash 长预填充 at -ub 2048 (Blackwell/sm_120) |
| [#24415](https://github.com/ggml-org/llama.cpp/issues/24415) | **低** | 开启中 | 无法使用 OpenVINO 加载 gemma-4-12B — 13 条评论 |

---

## 6. 这对应用开发者的意义

- **新模型选项**：K2 Horizon（0.9B–36B）和 Maion-Coder 现已可加载。PLaMo-3 分词器支持开启了新的日语/英语模型。

- **CUDA Blackwell 用户**：如果在 B200/B100（sm_120）上运行 q4_0/q5_0 量化模型，[#30077](https://github.com/ggml-org/llama.cpp/pull/30077) 中的反量化修复应该能提升内核效率——建议更新。

- **Vulkan/MoE 工作负载**：MoE 批量解码在 AMD RDNA3/4 上的密度门优化可带来 20–36% 的吞吐量提升。如果服务 MoE 模型，建议更新。

- **Metal Mac 用户**：量化闪光注意力的内存修复（[#11446](https://github.com/ggml-org/llama.cpp/commit/b11446)）应能减少内存受限的 Apple Silicon 上的崩溃。

- **服务器运维**：PR [#27760](https://github.com/ggml-org/llama.cpp/pull/27760) 在 `/metrics` 中添加了实时生成吞吐量报告——有助于实时监控。

- **分布式推理**：RPC 张量分割模式（`-sm tensor`）支持大模型的细粒度模型并行。

---

*摘要数据来源：github.com/ggml-org/llama.cpp — 2026-10-07*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest from English to Chinese (Simplified Chinese - 简体中文). Let me carefully translate this while preserving:

1. The Markdown structure exactly (headings, tables, lists, etc.)
2. URLs, issue/PR references (#xxxxx), code spans, numbers, dates
3. Project names, repository names, version tags, file paths
4. Technical terminology - use natural Chinese technical register

Let me translate section by section:

---

# Ollama Digest — 2026-10-07

# Ollama 速报 — 2026年10月7日

---

## Today's Highlights

## 今日要闻

A mix of new feature work and bug fixes today. The team landed a fix for the Gemma 4 11.9B renderer misclassification and closed a PR for proxying cloud usage/balance APIs. However, several high-impact issues remain open: speculative decoding is still the most-upvoted feature request (68 👍), the MLX runner shows significant performance degradation on Apple Silicon for certain models (~1 tok/s), and duplicate model entries are appearing after the local compat GGUF migration.

今天主要涉及新功能开发和 bug 修复。团队修复了 Gemma 4 11.9B 渲染器误分类的问题，并合并了云用量/余额 API 代理的 PR。但仍有多项高优先级问题待解决：推测解码仍是呼声最高的功能请求（68 👍），MLX runner 在 Apple Silicon 某些型号上性能明显下降（约 1 tok/s），本地兼容 GGUF 迁移后出现了重复模型条目。

---

## Releases & Breaking Changes

## 版本发布与重大变更

- **No new releases in the last 24 hours.**

- **过去 24 小时内无新版本发布。**

---

## New Model & Hardware Support

## 新模型与硬件支持

| Item | Description | PR/Issue |


|------|-------------|----------|
| **K2 Horizon models** | Feature request for MBZUAI IFM's K2 Horizon family (0.9B–36B MoE), Apache 2.0 license | [#18698](https://github.com/ollama/ollama/issues/18698) |
| **LLM-jp-4 harmony format** | Parser support needed for spaces after special tokens in the harmony output format | [#18728](https://github.com/ollama/ollama/issues/18728) |
| **Gemma 4 renderer threshold** |

| 项目 | 描述 | PR/Issue |
|------|-------------|----------|
| **K2 Horizon 模型** | MBZUAI IFM 的 K2 Horizon 系列 (0.9B–36B MoE) 功能请求，Apache 2.0 许可 | [#18698](https://github.com/ollama/ollama/issues/18698) |
| **LLM-jp-4 harmony 格式** | 解析器需要支持 harmony 输出格式中特殊令牌后的空格 | [#18728](https://github.com/ollama/ollama/issues/18728) |
| **Gemma 4 渲染器阈值** | 11.9B 规模模型被错误识别为小型的问题已修复，阈值从 12.0B 调整至 11.5B | [#18827](https://github.com/ollama/ollama/pull/18827), [#18824](https://github.com/ollama/ollama/issues/18824) |
| **多模态嵌入** | MLX runner 现已支持 EmbeddingGemma2Model 架构 | [#18820](https://github.com/ollama/ollama/pull/18820) |
| **Qwen3.5 工具调用解析** | 解析器在 `<tool_call>` 后接部分标签时保留工具调用 | [#18802](https://github.com/ollama/ollama/pull/18802) |
| **Ornith/Qwen35 自动检测** | 对 ornith-1.5 和 qwen35 相关模型实现渲染器和解析器的自动识别 | [#17965](https://github.com/ollama/ollama/pull/17965) |
| **Minicpm5-2b 原生工具调用** | 修复了原生工具调用无法解析的问题（根因：特殊令牌在去标记化时被剥离）| [#18499](https://github.com/ollama/ollama/pull/18499) |

---

## Performance & Optimization

## 性能与优化

| Item | Details | PR/Issue |
|------|---------|----------|
| **Speculative decoding** | Long-standing feature request to add draft model support from llama.cpp — would massively speed up inference | [#5800](https://github.com/ollama/ollama/issues/5800) (65 comments, 68 👍) |
| **MLX runner: Gemma 4 bf16 degradation** | `gemma4:26b-mlx-bf16` and `gemma4:31b-mlx-bf16` decode at 0.8–1.6 tok/s on M2 Ultra (192 GB) — prompt processing normal, GPU idle ~96% of each step | [#18823](https://github.com/ollama/ollama/issues/18823) |
| **MLX runner: not using full GPU** | M4 Pro 48GB shows underutilization with Qwen 3.8 27B; regression vs 0.35.1-rc2 | [#18754](https://github.com/ollama/ollama/issues/18754) |
| **MLX runner: num_ctx not enforced** | `num_ctx` from Modelfile ignored, allowing prompts up to architecture max — causes Metal watchdog panic on long prefill | [#18125](https://github.com/ollama/ollama/issues/18125) |
| **Profiling support** | Enhanced bench.go to run against underlying runners (mlx/llama-server) directly for GPU tooling profiling | [#16611](https://github.com/ollama/ollama/pull/16611) |
| **Oversized pull rejection** | MLX-only implementation to block pulls of models too large to run by default (user can bypass with `--force`) | [#18243](https://github.com/ollama/ollama/pull/18243) |
| **Chat truncation fix** | Preserves most recent user message during truncation; fixes `500: no user query found` in multi-step tool loops | [#18697](https://github.com/ollama/ollama/pull/18697) |

| 项目 | 详情 | PR/Issue |
|------|---------|----------|
| **推测解码** | 来自 llama.cpp 的草稿模型支持功能请求已开放 — 将显著加速推理速度 | [#5800](https://github.com/ollama/ollama/issues/5800) (65 条评论, 68 👍) |
| **MLX runner: Gemma 4 bf16 性能下降** | `gemma4:26b-mlx-bf16` 和 `gemma4:31b-mlx-bf16` 在 M2 Ultra (192 GB) 上解码速度为 0.8–1.6 tok/s — 提示词处理正常，但 GPU 在每个步骤中约 96% 时间处于空闲状态 | [#18823](https://github.com/ollama/ollama/issues/18823) |
| **MLX runner: 未充分利用 GPU** | M4 Pro 48GB 在运行 Qwen 3.8 27B 时显示利用不足；相比 0.35.1-rc2 存在回归问题 | [#18754](https://github.com/ollama/ollama/issues/18754) |
| **MLX runner: num_ctx 未强制执行** | Modelfile 中的 `num_ctx` 被忽略，允许提示词达到架构最大值 — 在长预填充时导致 Metal 看门狗超时 | [#18125](https://github.com/ollama/ollama/issues/18125) |
| **性能分析支持** | 增强 bench.go 以直接针对底层 runner (mlx/llama-server) 运行，方便 GPU 工具进行性能分析 | [#16611](https://github.com/ollama/ollama/pull/16611) |
| **超大模型拉取拦截** | MLX 专用实现，阻止默认情况下无法运行的大模型拉取（用户可使用 `--force` 绕过）| [#18243](https://github.com/ollama/ollama/pull/18243) |
| **聊天截断修复** | 截断时保留最近的用户消息；修复多步工具调用循环中 `500: no user query found` 的问题 | [#18697](https://github.com/ollama/ollama/pull/18697) |

---

## Stability & Regressions

## 稳定性与回归问题

| Severity | Issue | Details | PR/Fix |
|----------|-------|---------|--------|
| **High** | **clef-flash `/v1/systemone` failure** | HTTP 500 "Clef: non-finite logit" on first forward pass; same model works on `/v1/chat/completions`; 27B works on same machine | [#18769](https://github.com/ollama/ollama/issues/18769), [#18815](https://github.com/ollama/ollama/issues/18815) (CLOSED) |
| **High** | **llama-server segfault** | SIGSEGV in `ggml_gallocr_alloc_graph` during `clip_encode` for `qwen3-vl:8b` when another large model is loaded; CUDA "resource allocation failed" | [#18821](https://github.com/ollama/ollama/issues/18821) |
| **High** | **2nd 'ollama run' hangs** | RPi 5, Debian 13 — first run works, subsequent runs stuck with no output | [#18796](https://github.com/ollama/ollama/issues/18796) |
| **Medium** | **Duplicate model entries** | `ollama list` shows duplicate model + bogus `llamacpp:<sha>` tag after local compat GGUF migration (v0.40.0, macOS M5) | [#18830](https://github.com/ollama/ollama/issues/18830) |
| **Medium** | **Model pull redirect error** | `ollama pull` fails with "redirect target not allowed" — cloudflare R2 storage issue | [#18716](https://github.com/ollama/ollama/issues/18716) |
| **Medium** | **GSQ-RCO quantization import fails** | "unsupported tensor size overflows" when importing Qwen3.8-Flash-Next with GSQ-RCO quantization | [#18817](https://github.com/ollama/ollama/issues/18817) |
| **Low** | **embeddinggemma-2:740m pull on Linux** | Fails with "this model requires MLX support, but the MLX runtime is not available" — likely misdetection | [#18825](https://github.com/ollama/ollama/issues/18825) |
| **Low** | **Windows "View Logs" with spaces** | Opening logs fails if username contains a space — path quoting issue | [#10915](https://github.com/ollama/ollama/issues/10915), [#18818](https://github.com/ollama/ollama/pull/18818) |
| **Low** | **Disk-full errors during MLX pulls** | Write errors ignored during blob download, misleading progress; fixed in [#18813](https://github.com/ollama/ollama/pull/18813) | [#18644](https://github.com/ollama/ollama/issues/18644) |

| 严重程度 | 问题 | 详情 | PR/修复 |
|----------|-------|---------|--------|
| **高** | **clef-flash `/v1/systemone` 失败** | 首次前向传播时返回 HTTP 500 "Clef: non-finite logit"；相同模型在 `/v1/chat/completions` 上正常工作；27B 在同一机器上可运行 | [#18769](https://github.com/ollama/ollama/issues/18769), [#18815](https://github.com/ollama/ollama/issues/18815) (已关闭) |
| **高** | **llama-server 段错误** | 加载其他大模型时，`qwen3-vl:8b` 在 `clip_encode` 过程中于 `ggml_gallocr_alloc_graph` 发生 SIGSEGV；CUDA 报 "resource allocation failed" | [#18821](https://github.com/ollama/ollama/issues/18821) |
| **高** | **第二次 'ollama run' 卡住** | RPi 5, Debian 13 — 首次运行正常，后续运行无输出并卡住 | [#18796](https://github.com/ollama/ollama/issues/18796) |
| **中** | **重复模型条目** | 本地兼容 GGUF 迁移后（v0.40.0, macOS M5），`ollama list` 显示重复模型 + 虚假的 `llamacpp:<sha>` 标签 | [#18830](https://github.com/ollama/ollama/issues/18830) |
| **中** | **模型拉取重定向错误** | `ollama pull` 失败，提示 "redirect target not allowed" — cloudflare R2 存储问题 | [#18716](https://github.com/ollama/ollama/issues/18716) |
| **中** | **GSQ-RCO 量化导入失败** | 导入使用 GSQ-RCO 量化的 Qwen3.8-Flash-Next 时报错 "unsupported tensor size overflows" | [#18817](https://github.com/ollama/ollama/issues/18817) |
| **低** | **Linux 上拉取 embeddinggemma-2:740m 失败** | 报错 "this model requires MLX support, but the MLX runtime is not available" — 可能是误检测 | [#18825](https://github.com/ollama/ollama/issues/18825) |
| **低** | **Windows 用户名含空格时"查看日志"失败** | 用户名中包含空格时无法打开日志 — 路径引号问题 | [#10915](https://github.com/ollama/ollama/issues/10915), [#18818](https://github.com/ollama/ollama/pull/18818) |
| **低** | **MLX 拉取时磁盘满错误被忽略** | Blob 下载期间写入错误被忽略，导致进度显示错误；已在 [#18813](https://github.com/ollama/ollama/pull/18813) 中修复 | [#18644](https://github.com/ollama/ollama/issues/18644) |

---

## What This Means for Application Developers

## 这对应用开发者意味着什么

1. **Watch the MLX runner** — If you're running on Apple Silicon with Gemma 4 bf16 or Qwen 3.8 models, expect significantly degraded token throughput (~1 tok/s in some configs). The root cause appears to be command-buffer submit bottlenecks, not GPU utilization. Consider using 4-bit MLX or GGUF builds for now.

1. **关注 MLX runner** — 如果在 Apple Silicon 上运行 Gemma 4 bf16 或 Qwen 3.8 模型，预期 token 吞吐量会显著下降（某些配置下约 1 tok/s）。根本原因似乎是命令缓冲区提交瓶颈，而非 GPU 利用率。目前建议使用 4-bit MLX 或 GGUF 构建版本。

2. **Avoid `/v1/systemone` with clef-flash** — The decision model consistently fails on that endpoint with non-finite logit errors. Use `/v1/chat/completions` as a workaround.

2. **避免对 clef-flash 使用 `/v1/systemone`** — 决策模型在该端点持续出现 non-finite logit 错误。建议改用 `/v1/chat/completions` 作为临时方案。

3. **Mind your model naming** — Gemma 4 models at ~11.9B parameters need "12b" in the name to get the large renderer. The recent fix ([#18827](https://github.com/ollama/ollama/pull/18827)) lowers the threshold but legacy models may still be misclassified.

3. **注意模型命名** — 约 11.9B 参数的 Gemma 4 模型需要在名称中包含 "12b" 才能获得大型渲染器。最近的修复（[#18827](https://github.com/ollama/ollama/pull/18827)）降低了阈值，但旧模型可能仍被误分类。

4. **CLI onboarding streamlined** — The account step is now removed from CLI welcome screen, making `ollama launch` faster for new users.

4. **CLI 入门流程简化** — 账户步骤已从 CLI 欢迎屏幕移除，使新用户的 `ollama launch` 更快完成。

5. **Cloud integration progress** — Usage and balance APIs are now proxied through the local server for signed-in accounts ([#18829](https://github.com/ollama/ollama/pull/18829) closed).

5. **云集成进展** — 用量和余额 API 现已通过本地服务器为已登录账户代理（[#18829](https://github.com/ollama/ollama/pull/18829) 已合并）。

6. **Duplicate model entries post-migration** — If you pulled `embeddinggemma:latest` after a recent Ollama update, you may see duplicates in `ollama list`. A restart or model prune may be needed.

6. **迁移后出现重复模型条目** — 如果在近期 Ollama 更新后拉取了 `embeddinggemma:latest`，可能会在 `ollama list` 中看到重复项。可能需要重启或执行 model prune。

7. **OOM safeguard incoming** — The team is rolling out oversized-pull rejection for MLX models; this will prevent pulling models that can't run on available hardware.

7. **OOM 保护即将推出** — 团队正在为 MLX 模型推出超大模型拉取拦截功能；这将阻止拉取在当前硬件上无法运行的模型。</think>

# Ollama 速报 — 2026年10月7日

## 今日要闻

今天主要涉及新功能开发和 bug 修复。团队修复了 Gemma 4 11.9B 渲染器误分类的问题，并合并了云用量/余额 API 代理的 PR。但仍有多项高优先级问题待解决：推测解码仍是呼声最高的功能请求（68 👍），MLX runner 在 Apple Silicon 某些型号上性能明显下降（约 1 tok/s），本地兼容 GGUF 迁移后出现了重复模型条目。

---

## 版本发布与重大变更

- **过去 24 小时内无新版本发布。**

---

## 新模型与硬件支持

| 项目 | 描述 | PR/Issue |
|------|-------------|----------|
| **K2 Horizon 模型** | MBZUAI IFM 的 K2 Horizon 系列 (0.9B–36B MoE) 功能请求，Apache 2.0 许可 | [#18698](https://github.com/ollama/ollama/issues/18698) |
| **LLM-jp-4 harmony 格式** | 解析器需要支持 harmony 输出格式中特殊令牌后的空格 | [#18728](https://github.com/ollama/ollama/issues/18728) |
| **Gemma 4 渲染器阈值** | 修复 11.9B 模型被误分类为"小型"的问题 — 阈值从 12.0B 降至 11.5B | [#18827](https://github.com/ollama/ollama/pull/18827), [#18824](https://github.com/ollama/ollama/issues/18824) |
| **多模态嵌入** | EmbeddingGemma2Model 架构现已在 MLX runner 上实现 | [#18820](https://github.com/ollama/ollama/pull/18820) |
| **Qwen3.5 工具调用解析** | 解析器在 `<tool_call>` 后接部分标签时保留工具调用 | [#18802](https://github.com/ollama/ollama/pull/18802) |
| **Ornith/Qwen35 自动检测** | 自动识别 ornith-1.5 和 qwen35 系列模型的渲染器和解析器 | [#17965](https://github.com/ollama/ollama/pull/17965) |
| **Minicpm5-2b 原生工具调用** | 修复了原生工具调用无法解析的问题（根因：特殊令牌在去标记化时被剥离）| [#18499](https://github.com/ollama/ollama/pull/18499) |

---

## 性能与优化

| 项目 | 详情 | PR/Issue |
|------|---------|----------|
| **推测解码** | 来自 llama.cpp 的草稿模型支持功能请求已开放 — 将显著加速推理 | [#5800](https://github.com/ollama/ollama/issues/5800) (65 条评论, 68 👍) |
| **MLX runner: Gemma 4 bf16 性能下降** | `gemma4:26b-mlx-bf16` 和 `gemma4:31b-mlx-bf16` 在 M2 Ultra (192 GB) 上解码速度为 0.8–1.6 tok/s — 提示词处理正常，但 GPU 在每个步骤中约 96% 时间处于空闲 | [#18823](https://github.com/ollama/ollama/issues/18823) |
| **MLX runner: 未充分利用 GPU** | M4 Pro 48GB 在运行 Qwen 3.8 27B 时显示利用不足；相比 0.35.1-rc2 存在回归 | [#18754](https://github.com/ollama/ollama/issues/18754) |
| **MLX runner: num_ctx 未强制执行** | Modelfile 中的 `num_ctx` 被忽略，允许提示词达到架构最大值 — 在长预填充时导致 Metal 看门狗超时 | [#18125](https://github.com/ollama/ollama/issues/18125) |
| **性能分析支持** | 增强 bench.go 以直接针对底层 runner (mlx/llama-server) 运行，方便 GPU 工具进行性能分析 | [#16611](https://github.com/ollama/ollama/pull/16611) |
| **超大模型拉取拦截** | MLX 专用实现，阻止默认情况下无法运行的大模型拉取（用户可使用 `--force` 绕过）| [#18243](https://github.com/ollama/ollama/pull/18243) |
| **聊天截断修复** | 截断时保留最近的用户消息；修复多步工具调用循环中 `500: no user query found` 的问题 | [#18697](https://github.com/ollama/ollama/pull/18697) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 详情 | PR/修复 |
|----------|-------|---------|--------|
| **高** | **clef-flash `/v1/systemone` 失败** | 首次前向传播时返回 HTTP 500 "Clef: non-finite logit"；相同模型在 `/v1/chat/completions` 上正常工作；27B 在同一机器上可运行 | [#18769](https://github.com/ollama/ollama/issues/18769), [#18815](https://github.com/ollama/ollama/issues/18815) (已关闭) |
| **高** | **llama-server 段错误** | 加载其他大模型时，`qwen3-vl:8b` 在 `clip_encode` 过程中于 `ggml_gallocr_alloc_graph` 发生 SIGSEGV；CUDA 报 "resource allocation failed" | [#18821](https://github.com/ollama/ollama/issues/18821) |
| **高** | **第二次 'ollama run' 卡住** | RPi 5, Debian 13 — 首次运行正常，后续运行无输出并卡住 | [#18796](https://github.com/ollama/ollama/issues/18796) |
| **中** | **重复模型条目** | 本地兼容 GGUF 迁移后（v0.40.0, macOS M5），`ollama list` 显示重复模型 + 虚假的 `llamacpp:<sha>` 标签 | [#18830](https://github.com/ollama/ollama/issues/18830) |
| **中** | **模型拉取重定向错误** | `ollama pull` 失败，提示 "redirect target not allowed" — cloudflare R2 存储问题 | [#18716](https://github.com/ollama/ollama/issues/18716) |
| **中** | **GSQ-RCO 量化导入失败** | 导入使用 GSQ-RCO 量化的 Qwen3.8-Flash-Next 时报错 "unsupported tensor size overflows" | [#18817](https://github.com/ollama/ollama/issues/18817) |
| **低** | **Linux 上拉取 embeddinggemma-2:740m 失败** | 报错 "this model requires MLX support, but the MLX runtime is not available" — 可能是误检测 | [#18825](https://github.com/ollama/ollama/issues/18825) |
| **低** | **Windows 用户名含空格时"查看日志"失败** | 用户名中包含空格时无法打开日志 — 路径引号问题 | [#10915](https://github.com/ollama/ollama/issues/10915), [#18818](https://github.com/ollama/ollama/pull/18818) |
| **低** | **MLX 拉取时磁盘满错误被忽略** | Blob 下载期间写入错误被忽略，导致进度显示误导；已在 [#18813](https://github.com/ollama/ollama/pull/18813) 中修复 | [#18644](https://github.com/ollama/ollama/issues/18644) |

---

## 这对应用开发者意味着什么

1. **关注 MLX runner** — 如果在 Apple Silicon 上运行 Gemma 4 bf16 或 Qwen 3.8 模型，预期 token 吞吐量会显著下降（某些配置下约 1 tok/s）。根本原因似乎是命令缓冲区提交瓶颈，而非 GPU 利用率。目前建议使用 4-bit MLX 或 GGUF 构建版本。

2. **避免对 clef-flash 使用 `/v1/systemone`** — 决策模型在该端点持续出现 non-finite logit 错误。建议改用 `/v1/chat/completions` 作为临时方案。

3. **注意模型命名** — 约 11.9B 参数的 Gemma 4 模型需要在名称中包含 "12b" 才能获得大型渲染器。最近的修复（[#18827](https://github.com/ollama/ollama/pull/18827)）降低了阈值，但旧模型可能仍被误分类。

4. **CLI 入门流程简化** — 账户步骤已从 CLI 欢迎屏幕移除，使新用户的 `ollama launch` 更快完成。

5. **云集成进展** — 用量和余额 API 现已通过本地服务器为已登录账户代理（[#18829](https://github.com/ollama/ollama/pull/18829) 已合并）。

6. **迁移后出现重复模型条目** — 如果在近期 Ollama 更新后拉取了 `embeddinggemma:latest`，可能会在 `ollama list` 中看到重复项。可能需要重启或执行 model prune。

7. **OOM 保护即将推出** — 团队正在为 MLX 模型推出超大模型拉取拦截功能；这将阻止拉取在当前硬件上无法运行的模型。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM Daily Digest into Simplified Chinese, following specific rules:
- Output ONLY the translation
- No preamble, no explanation, no markdown fences
- Preserve Markdown structure exactly
- Keep URLs, numbers, dates, code, issue/PR references verbatim
- Use natural technical Chinese, not literal word-for-word

Let me translate this while maintaining all the formatting and keeping technical terms in their original form where appropriate.</think>

# LiteLLM 每日简报 — 2026-10-07

## 今日要闻

LiteLLM 项目在多个方向持续活跃开发。Rust 迁移工作（#31263）仍是最高优先级的项目，目前已有 27 条 beta 测试用户的反馈。核心基础设施方面包括 SDK 依赖拆分（#44447, #44606）以实现更精简的核心包，同时多个影响 GPT-5 翻译、DeepSeek 视觉和预算追踪的正确性 bug 需要关注。过去 24 小时内未发布新版本。

---

## 发布与破坏性变更

| 项目 | 描述 | 链接 |
|------|-------------|------|
| 无发布 | 过去 24 小时内无版本发布 | — |

---

## 新模型与硬件支持

| 模型/后端 | 说明 | 链接 |
|--------------|-------|------|
| Gemini 3.x 温度处理 | 修复防止在未指定温度时注入默认值（与 Google 新默认值冲突） | [#38663](https://github.com/BerriAI/litellm/issues/38663) |
| Bedrock 区域保留 | 修复在 Invoke Claude 响应中保留 `region_name` 和模型 ID 以实现精确成本计算 | [#44152](https://github.com/BerriAI/litellm/pull/44152) |
| Qwen3-TTS 支持 | `/v1/audio/speech` 端点修复，支持语音参数处理 | [#20078](https://github.com/BerriAI/litellm/issues/20078) |

---

## 性能与优化

| 领域 | 变更 | 影响 |
|------|--------|--------|
| **路由器缓存基线** | 估算跨供应商缓存历史基线（#44948），保留原生基线标识（#44960） | 提升跨供应商缓存命中率 |
| **SDK 依赖** | 分离核心 AWS 和 tokenizer 依赖（#44447, #44606） | 更精简的安装；核心包无需 AWS/HuggingFace 包 |
| **MCP 目录分页** | 网关列表的可移植目录分页（#44446） | 支持跨网关副本恢复列表 |
| **调度器队列** | 请求不再等待时移除队列条目（#43061） | 修复基于 Redis 的优先级请求失败并报 TypeError 的问题 |

---

## 稳定性与回归

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | **GPT-5.4 空响应** — `chatgpt/gpt-5.4` 非流式返回空输出，桥接器报错 "Unknown items in responses API response" | 待处理 [#25429](https://github.com/BerriAI/litellm/issues/25429) |
| **高** | **DeepSeek 视觉丢弃** — `role=tool` 消息中的图片内容被静默丢弃（`_is_vision_forwardable_content` 对非用户角色返回 False） | 待处理 [#44211](https://github.com/BerriAI/litellm/issues/44211) |
| **高** | **预算竞态条件** — Spend 缓存丢失并发增量（#43491）；`budget_limits` 重置在提交前清除计数器（#36941） | 待处理 [#43491](https://github.com/BerriAI/litellm/issues/43491), [#36941](https://github.com/BerriAI/litellm/issues/36941) |
| **中** | **Anthropic 直通 bug** — `/v1/messages` 路由到 OpenAI/Azure 时多个问题（#23841）；缺少 usage 对象导致 500 错误（#44535） | 待处理 [#23841](https://github.com/BerriAI/litellm/issues/23841), [#44535](https://github.com/BerriAI/litellm/issues/44535) |
| **中** | **请求超时永不触发** — `litellm_settings.request_timeout` 在上游首次字节沉默时不触发 | 待处理 [#38358](https://github.com/BerriAI/litellm/issues/38358) |
| **中** | **MCP 工具转换 bug** — 在 `/v1/chat/completions` 时丢弃 `function` 包装键，导致托管 vLLM 返回 400 | 待处理 [#32281](https://github.com/BerriAI/litellm/issues/32281) |
| **低** | **JWT 团队 ID 未验证** — JWT 中的团队 ID 未在认证时验证 | 待处理 [#44182](https://github.com/BerriAI/litellm/issues/44182) |
| **低** | **Windows Prisma 崩溃** — 首次查询时查询引擎崩溃（Python 3.12，LiteLLM 1.82+/1.83.0） | 待处理 [#25260](https://github.com/BerriAI/litellm/issues/25260) |

---

## 这对应用开发者的意义

1. **GPT-5 用户**：目前非流式补全使用 `chatgpt/gpt-5.4` 无法正常工作——在 #25429 解决前请避免生产使用或锁定到更早的 LiteLLM 版本。

2. **多供应商部署**：路由器缓存改进（#44948, #44960）应能提升跨供应商路由的成本效率；请留意缓存行为的任何回归。

3. **使用 DeepSeek 的视觉工作流**：如果您在工具消息中将图片输入与 DeepSeek 配合使用，请验证内容是否正在传递——目前会被静默丢弃（#44211）。

4. **预算强制执行**：使用消费限额的团队应注意并发增量 bug（#43491）——如果精确的预算强制执行很关键，请考虑临时缓解措施。

5. **精简安装**：正在进行的 SDK 重构（#44447, #44606）最终将允许安装 LiteLLM 核心而不依赖 AWS/HuggingFace；请关注由此产生的包变更。

6. **MCP 集成**：YAML OpenAPI 规范支持已上线（#38952）——为自定义 MCP 服务器定义提供了更好的灵活性。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate this Unsloth digest from English to Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully while preserving all the formatting:

## 1. Today's Highlights

## 2. Releases & Breaking Changes

## 3. New Model & Hardware Support

## 4. Performance & Optimization

## 5. Stability & Regressions

## 6. What This Means for Application Developers

Let me go through each section and translate naturally:</think>

# Unsloth 要闻 — 2026年10月7日

## 1. 今日亮点

Unsloth Studio v0.1.903-beta 来了，内置浏览器可在聊天窗口旁同时查看文件/网页，还带来了 Google 最新的多模态Embedding模型 **EmbeddingGemma 2**，以及用于语音克隆的新 Audio 页面。多项 PR 涉及 Studio UI/UX、视觉数据集训练和 API 改进——包括引用链接、LAN 地址显示和 shell 变量渲染修复。

---

## 2. 版本发布与重大变更

| 版本 | 变更说明 | 链接 |
|------|----------|------|
| **v0.1.903-beta** | 内置浏览器支持文件/网页侧边查看；支持 EmbeddingGemma 2；新增 Audio 页面 | [Release](https://github.com/unslothai/unsloth/releases) |

未报告重大变更或迁移说明。

---

## 3. 新模型与硬件支持

- **EmbeddingGemma 2** — Google 新推出的多模态Embedding模型现已支持。[Docs](https://unslothai.ai/docs/models/embeddinggemma-2)
- **GGUF 听写模型量化选择** — 语音设置现在允许用户为 GigaAM 等提供多量化版本的模型选择特定量化规格（附带大小信息）。[#12900](https://github.com/unslothai/unsloth/pull/12900)
- **Audio API** — 新的 Settings 卡片提供 Speak、Clone、Transcribe 和 `/v1/audio/run` 端点的 curl/Python/JS 示例代码。[#12821](https://github.com/unslothai/unsloth/pull/12821)

---

## 4. 性能优化

- **托管运行时流处理** — 修复了聊天流断开时模型仍在后台生成回复并占用模型的问题（Intel Arc 需等待 30 秒）。[#12266](https://github.com/unslothai/unsloth/pull/12266)
- **CI 并行化** — Shell 套件和 Windows 浏览器检查现支持最高 4 倍并行执行，耗时从约 6 分钟/9 分钟大幅降低。[#12899](https://github.com/unslothai/unsloth/pull/12899)
- **编码器 Embedding max_seq_length** — 修复了 FastSentenceTransformer 忽略用户指定的 BERT 类模型序列长度问题；现在加载时正确应用 `max_seq_length`。[#12915](https://github.com/unslothai/unsloth/pull/12915)

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | macOS 预构建安装未设置 `llama-fit-params` 可执行权限 → 上下文长度降至 8K | 已修复：[#12917](https://github.com/unslothai/unsloth/pull/12917)（PR 已打开）|
| **高** | 最新更新后模型无法加载 | 待解决：[#12842](https://github.com/unslothai/unsloth/issues/12842) |
| **中** | Windows 10 长上下文聊天卡顿 | 待解决：[#12552](https://github.com/unslothai/unsloth/issues/12552) |
| **中** | 多账户 LAN 访问 — 辅助用户模型同步失败 | 待解决：[#12365](https://github.com/unslothai/unsloth/issues/12365) |
| **低** | 听写功能无法访问麦克风 | 待解决：[#11939](https://github.com/unslothai/unsloth/issues/11939) |
| **低** | ARM64 下载显示 macOS 构建而非 Linux | 已关闭：[#12680](https://github.com/unslothai/unsloth/issues/12680) |

---

## 6. 这对应用开发者意味着什么

- **Audio 工作流现已支持 API 优先** — 新的 Audio API 卡片提供即用型 curl、Python 和 JS 代码片段；无需逆向工程 UI 即可集成语音克隆/合成功能。
- **Decision API 调试更方便** — Settings → API 中新增 "Try it" 按钮，可直接在界面上测试 Decision 模型，无需手动构造请求。[#12916](https://github.com/unslothai/unsloth/pull/12916)
- **聊天导出现在包含系统提示词** — 训练数据导出（JSONL、ShareGPT、CSV 等）现在会捕获聊天的系统提示词和项目指令，提升微调数据质量。[#12913](https://github.com/unslothai/unsloth/pull/12913)
- **视觉数据集训练已修复** — `problem`、`input`、`Question` 等列名现在在训练时正确保留（此前仅支持精确的 `question`/`query`/`prompt` 名称）。[#12909](https://github.com/unslothai/unsloth/pull/12909)
- **Shell 变量渲染** — `$PATH` 和 `$HOME` 现以文本形式渲染，不再显示为数学斜体——这对使用环境变量的文档/教程很重要。[#12911](https://github.com/unslothai/unsloth/pull/12911)
- **LAN 访问可在 API 页面使用** — 启用 LAN 访问后，API 页面现在显示 LAN 地址（如 `http://192.168.x.x:port`），而不仅是 localhost。[#12906](https://github.com/unslothai/unsloth/pull/12906)

---

*本期基于 2026年10月7日 GitHub 数据生成。随着新 Issue/PR 的出现可能会有更新。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*