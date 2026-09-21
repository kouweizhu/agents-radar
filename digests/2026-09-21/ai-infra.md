# AI 基础设施日报 2026-09-21

> 生成时间: 2026-09-21 00:27 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the entire English report into Chinese. Let me translate it while preserving the exact Markdown structure, tables, formatting, and all technical elements as specified in the rules.

Let me go through and translate carefully:

1. The title and all headings
2. All tables (preserving alignment)
3. All lists
4. All body text
5. All technical terms should be in natural technical Chinese

Key terms to translate:
- Weight caching → 权重缓存
- Decode context parallelism → 解码上下文并行
- GGUF → 保持不变 (it's a format name)
- LoRA → 保持不变 (it's a technique name)
- GRPO → 保持不变 (technique name)
- MoE → MoE (Mixture of Experts)
- KV cache → KV 缓存
- tensor parallelism → 张量并行
- cold start → 冷启动
- throughput → 吞吐量
- quantization → 量化
- kernel → 内核
- router → 路由器/路由
- gateway → 网关
- serving → 服务/推理服务
- fine-tuning → 微调
- training → 训练

Let me translate now...</think>

# 跨项目生态报告 — 2026-09-21

## 1. 生态概览

AI 推理服务领域正在经历一轮密集的内核级优化和多后端融合期。从今日动态可以看出，这个领域正沿着两条路线分化：**大规模分布式服务**（vLLM、SGLang）竞相实现生产级权重缓存和解码并行，而**本地与嵌入式运行时**（llama.cpp、Ollama）则推进量化边界和跨平台兼容性。两条路线上，模型正确性问题——尤其是长上下文前沿模型的多轮对话退化——正成为主要的稳定性风险。关键路径的 Rust 化（分词、token 计数）已在 LiteLLM 中启动，并开始渗透到推理引擎，体现了性能工程的成熟度。

---

## 2. 活跃度对比

| 项目 | 公开 Issues | 近期 PRs | 发布 (24h) | 关键指标 |
|------|------------|----------|------------|----------|
| **vLLM** | 74 | 361 总数，显示 20 | v0.28.1rc1 | 8 PR 已就绪/合并 |
| **SGLang** | 显著（路线图驱动） | 重大路线图项目 | 无 | 权重缓存守护进程上线 |
| **llama.cpp** | ~25+ | ~220 总数 | 6 个版本 (b11059–b11065) | 2 个 CUDA + 1 个 Metal 内核 PR |
| **Ollama** | 8 个新 | 10 | 无 | 1 个修复已合并 |
| **LiteLLM** | 20+ | 10+ 活跃 | v1.103.0-rc.1 | Cosign 签名 Docker |
| **Unsloth** | 26 | 220 总数 | 无 | 2 个回归问题调查中 |

---

## 3. 模型支持竞赛

| 模型 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|------|------|--------|-----------|--------|---------|
| **MiniMax-M3** | ✅ ROCm TP>1 稀疏 | — | — | — | — |
| **DeepSeek V4.1** | ✅ ROCm 融合解码 | — | — | — | — |
| **Qwen3.8-Next (Qwen4-Exp)** | — | ✅ PD MTP 流水线并行 | ✅ 稀疏 FA CUDA | — | — |
| **GLM-5.3-Flash** | ✅ 混合注意力 | ✅ KDA/KPool 融合 | — | — | — |
| **Gemma 4** | — | — | ✅ CUDA FA 调优 | ✅ (视觉broken) | — |
| **Kimi-K3** | — | ✅ 原生 Dynamo | ✅ 任意 hc 支持 | — | — |
| **DeepSeek V4** | — | — | — | ✅ reasoning_effort | — |
| **Prism 三元 GGUF** | — | — | — | ❌ 导入失败 | — |
| **MiCA 适配器** | — | — | — | — | ✅ 功能请求 |

**领跑者**：vLLM 和 SGLang 在前沿模型覆盖上并驾齐驱，vLLM 在 Intel XPU 上领先，SGLang 在路由器/网关功能上领先。llama.cpp 在 GGUF 广度上占优，但在前沿架构上落后。

---

## 4. 性能前沿

| 优化方向 | 活跃项目 | 关键进展 |
|----------|----------|----------|
| **权重缓存/快速恢复** | vLLM、SGLang | 权重缓存守护进程：Qwen3-235B FP8 加载从 306s 降至 <1s |
| **解码上下文并行** | vLLM、SGLang | Helix 并行 + FlashInfer-MNNVL A2A 后端 |
| **量化** | llama.cpp、vLLM | RDNA3 int8 coopmat (llama.cpp)；CUTLASS FP8 内核选择 (vLLM，有 bug) |
| **稀疏/MoE 内核** | vLLM、SGLang、llama.cpp | MiniMax-M3 稀疏索引器；DeepSeek V4.1 融合解码；Qwen4 稀疏 FA |
| **分词** | LiteLLM、llama.cpp | Rust 分词器迁移 (LiteLLM)，分离 token 计数后端 |
| **路由/服务策略** | SGLang、LiteLLM | SLO 排序、缓存感知路由、会话亲和性 |

**主要聚焦点**：性能前沿高度集中在**大模型和长上下文模型的服务的吞吐量**上——具体而言，通过权重缓存降低冷启动延迟，通过上下文并行提升解码吞吐量。这些都是生产基础设施相关的优化。

---

## 5. 层级定位

| 层级 | 项目 | 角色 |
|------|------|------|
| **推理服务引擎** | **vLLM**、**SGLang** | KV 缓存管理、P/D 分解、张量并行、权重缓存 |
| **本地/嵌入式运行时** | **llama.cpp**、**Ollama** | GGUF/GGML 执行、跨平台（CPU/GPU/Vulkan/Metal/SYCL）、独立二进制 |
| **网关/代理** | **LiteLLM** | 统一 API 层、密钥管理、成本追踪、护栏、多供应商路由 |
| **训练/微调** | **Unsloth** | LoRA/QLoRA 微调、GRPO 训练、模型导出、Unsloth Studio |

**竞争边界**：vLLM 和 SGLang 在高吞吐量服务层直接竞争（两者都使用 FlashInfer，都在做解码并行）。llama.cpp 和 Ollama 占据本地/嵌入式层，但理念不同（llama.cpp = 极致灵活性，Ollama = 开箱即用）。LiteLLM 位于两者之上作为网关。Unsloth 是正交的——专注于训练层。

---

## 6. 趋势信号

### 基础设施工程师应关注

1. **权重缓存将成为标配** — vLLM 和 SGLang 本周都上线了权重缓存守护进程。预计大模型冷启动将在 Q4 降至 1 秒以内。如果你的服务层缺少这个功能，就已经落后了。

2. **多轮模型正确性是新不稳定因素** — GLM-5.3-Flash 退化、Qwen MoE + torch.compile 损坏、GGUF 推理回归（Unsloth、llama.cpp）表明前沿模型正确性已落后于优化速度。生产环境中使用长对话的应用存在风险。

3. **Rust 正在吞噬分词层** — LiteLLM 的完整分词器重写和 vLLM 内部的 Rust 工作表明，基于 Python 的分词已成为瓶颈。预计下个季度的发布将带来 2-3 倍的分词提速。

4. **ROCm 不再是二等公民** — MiniMax-M3、DeepSeek V4.1 和 GLM 优化本周登陆 ROCm。AMD GPU 用户应重新评估 CUDA 对等假设。

5. **网关层功能正在商品化** — LiteLLM 的 SLO 路由、成本追踪和护栏功能正在 SGLang 的路由器中被复制。如果你在构建服务层，请为此功能做好预算或使用网关。

6. **Blackwell/RTX 5090 支持不稳定** — 多个项目报告 Blackwell 上的断言错误和内核选择 bug。2027 年 Q1 前避免用于生产。

### 决策框架

| 如果你需要... | 选择... |
|--------------|----------|
| 最大吞吐量，TP>8，P/D 分解 | vLLM |
| 灵活路由 + 多模型服务 | SGLang |
| 本地 GGUF，最大硬件覆盖 | llama.cpp |
| 最小化配置，本地 CLI | Ollama |
| 统一 API，多供应商，成本控制 | LiteLLM |
| 微调、LoRA、GRPO 训练 | Unsloth |

---

*数据来源于 2026-09-21 GitHub 活动，涵盖 vllm-project/vllm、sgl-project/sglang、ggml-org/llama.cpp、ollama/ollama、BerriAI/litellm 和 unslothai/unsloth。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>Let me translate this digest into Chinese while preserving the structure and technical terms as instructed.

The rules are:
- Output ONLY the translation
- Preserve Markdown structure exactly
- Keep URLs, numbers, dates, issue/PR references verbatim
- Keep project names, repository slugs, etc. in original form
- Use natural technical Chinese - the register of a Chinese developer newsletter</think>

# vLLM 每日简报 — 2026-09-21

## 1. 今日要闻

vLLM 开发持续活跃，重点关注多轮模型正确性（GLM-5.3-Flash 退化问题）、MiniMax-M3 的 ROCm 优化以及 DeepSeek V4.1 性能工作。过去 24 小时内无新版本发布，但有多项性能 PR 进入 "ready" 状态，量化后端和模型系列也出现了多个正确性 bug。

## 2. 版本发布与重大变更

- **过去 24 小时内无新版本发布**
- v0.28.1rc1 为当前候选版本（构建号：`g44fe2a392`）

## 3. 新模型与硬件支持

**ROCm / AMD:**
- **MiniMax-M3** 上下文并行稀疏索引器支持已合并（#57832, #57840）—— 为 AITER fp8 索引器和稀疏闪电索引器添加了 gfx950 上的 TP>1 支持
- **DeepSeek V4.1** 解码优化：ROCm 上融合了元数据和最终归一化（#57756），TP all-reduce 与 mHC 输入准备融合（#57643）

**Intel XPU:**
- 为 MoE 模型添加了 `VLLM_BATCH_INVARIANT=1` 支持（#55881）—— 使 XPU 行为与 CUDA 对齐，支持确定性归约

**多模态:**
- Rust 前端现在可向 llm-multimodal 传递视觉预处理上下文（#57634）

## 4. 性能与优化

| PR | 描述 | 状态 |
|----|-------------|--------|
| [#57832](https://github.com/vllm-project/vllm/pull/57832) | MiniMax-M3 稀疏闪电索引器（Triton, TP>1） | Open |
| [#57840](https://github.com/vllm-project/vllm/pull/57840) | MiniMax-M3 AITER fp8 索引器（ROCm, TP>1） | Open |
| [#57756](https://github.com/vllm-project/vllm/pull/57756) | DeepSeek V4.1 解码元数据 + 最终归一化融合（ROCm） | Open |
| [#57643](https://github.com/vllm-project/vllm/pull/57643) | 将 TP all-reduce 与 mHC 输入准备融合（DSv4.1） | Open |
| [#57603](https://github.com/vllm-project/vllm/pull/57603) | 小 TP 批次下重叠 mHC 系数 | **Ready** |
| [#53423](https://github.com/vllm-project/vllm/pull/53423) | KV hints 请求封装，实现可编程 KV 管理 | **Ready** |
| [#57498](https://github.com/vllm-project/vllm/pull/57498) | 修复分块长文本嵌入的归一化 | **Ready** |
| [#56520](https://github.com/vllm-project/vllm/pull/56520) | 修复基于编码器的分词器的内联系统消息（Anthropic API） | **Ready** |

## 5. 稳定性与回归问题

**高严重性:**
- **GLM-5.3-Flash 退化** — 多轮 agentic 使用时出现重复 token 的"词 salad"（#56605，17 条评论），以及累积推理后的长解码退化（#56868，14 条评论）
- **Qwen1.5-MoE-A2.7B-Chat** 使用 `torch.compile` 时输出退化（#56900）—— 不用 VLLM_COMPILE 时正常，影响 H100 上的 v0.28.0
- **DFlash2** 确定性累积 OOB 在约 11k 步解码后导致 CUDA IMA/Xid 31（#55279）

**中严重性:**
- **CUTLASS FP8 内核误选**: 在 Ampere (SM80) 上选择了 FP8 线性内核，但该架构仅支持 INT8（#55008）
- **GLM5.3-Flash** 不支持 Hopper 上的 fp8 KV cache dtype（#57713）
- **prompt_embeds + penalty** 触发设备端断言（"scatter gather kernel index out of bounds"）（#57719）
- **RTX 5090 / Blackwell** 上的 2 张卡出现 AssertionError：服务 FP8 模型时覆盖 `weight_loader`（#47005）
- **Intel XPU TP=2** 在双 Arc Pro B70 上：GP 故障 + xe BCS 引擎重置（#41663，已关闭，38 条评论）

**低严重性 / 文档问题:**
- RFC: 强化学习训练的 LoRA 适配器生命周期（#48297）
- RFC: 将 Flashinfer GQA 分离为 TRTLLM 和 flashinfer 后端（#47790）
- 文档: pip 安装文档缺少 `--index-strategy` 选项（#39462）

## 6. 这对应用开发者意味着什么

1. **GLM-5.3 用户**: 在修复退化问题前，避免在 Flash 变体上使用多轮 agentic 工作流；累积上下文时流式和非流式模式都会受影响。

2. **torch.compile 用户**: 如果使用 Qwen MoE 模型，禁用 `VLLM_COMPILE` —— 当前集成在 v0.28.0 的 H100 上会产生无意义输出。

3. **生产环境 DeepSeek 部署**: ROCm 用户受益于融合解码内核；密切关注应包含这些优化的 v0.28.1 版本发布。

4. **多模态开发者**: 新的视觉预处理上下文 API（#57634）支持请求相关的图像处理，无需编写特定于模型的 vLLM 代码——如果构建自定义多模态管道，这很有用。

5. **RTX 5090 / Blackwell 早期采用者**: FP8 服务目前不稳定；在解决 weight_loader 断言问题前避免使用（#47005）。

6. **Anthropic API 用户**: 内联系统消息和基于编码器的分词器现在可正确使用前缀缓存（#56520 ready）。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Digest into Simplified Chinese, following the specific rules provided. Let me go through the translation carefully:

1. Only output the translation - no preamble, no explanation, no markdown fences
2. Keep the Markdown structure exactly - headings, tables, lists, etc.
3. Preserve URLs, numbers, dates, issue/PR references
4. Keep project names, file paths, API identifiers in original form
5. Use natural technical Chinese - register of a Chinese developer newsletter

Let me translate section by section:

## 1. Today's Highlights

SGLang's router and inference stack continues rapid evolution with several infrastructure PRs landing around admission control, cache-aware routing, and streaming session handling. On the model side, InstantTensor loader support and GLM-5.3-Flash optimizations dominate the PR landscape, while the Weight Cache Daemon for fast engine recovery is now live, cutting weight load from ~306–327s to under 1s on Qwen3-235B FP8.

SGLang 的路由和推理栈持续快速演进，多个基础设施 PR 已在准入控制、缓存感知路由和流式会话处理方面落地。模型侧，InstantTensor loader 支持和 GLM-5.3-Flash 优化成为 PR 的重点，而快速引擎恢复的 Weight Cache Daemon 已上线，将 Qwen3-235B FP8 的权重加载时间从约 306–327 秒缩短至 1 秒以内。

---

## 2. Releases & Breaking Changes

| Item | Description | Link |
|------|-------------|------|
| **No new releases** | None in last 24h | — |

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **暂无新版本** | 过去24小时内无更新 | — |

---

## 3. New Model & Hardware Support

## 3. 新模型与硬件支持

| Model / Hardware | Details | Reference |
|------------------|---------|-----------|
| **Kimi-K3** | Enabled via native Dynamo support in sgl-router | [#40390](https://github.com/sgl-project/sglang/pull/40390) |
| **SenseNova-U1 / U1.5** | Feature & performance tracking underway | [#37742](https://github.com/sgl-project/sglang/issues/37742) |
| **Qwen3.8-Flash-Next (Qwen4-Exp)** | Pipeline-parallel serving + PD-prefill MTP | [#40501](https://github.com/sgl-project/sglang/pull/40501) |
| **GLM-5.3-Flash** | Hybrid attention CPU offload + PD index mapping support | [#40310](https://github.com/sgl-project/sglang/pull/40310) |

I'm tracking the latest model and hardware support across different frameworks, highlighting key updates in pipeline parallelism, attention mechanisms, and performance optimizations for emerging AI models like Qwen and GLM series. E4A16** | Opt-in support in FlashInfer MegaMoE via `SGLANG_FLASHINFER_CUTEDSL_NVFP4_W4A16=1` | [#39210](https://github.com/sgl-project/sglang/pull/39210) |
| **Diffusion VAE slicing** | `--vae-slicing` now honored in native pipelines | [#40493](https://github.com/sgl-project/sglang/pull/40493) |

我在优化关键性能领域，包括权重缓存守护程序的加载时间大幅缩短，以及分布式消息传递中的解码上下文并行处理。路由器层面实现了服务级别目标排序和缓存感知路由的改进，同时引入了新的会话感知路由机制。

流式处理增加了空闲超时配置。在 GLM-5.3 中集成了核心投影融合和 CUDA 内存优化，包括分块激活融合和预取同步重叠。通过 pinned memory 异步传输采样元数据，NVFP4 也提供了可选支持。

VAE 切片功能现已在原生管道中得到支持。

存在几个严重稳定性问题需要关注：CUDA 在 8 个并发请求时出现非法内存访问，特别是在 Qwen3.8-Flash-Next-FP8 和 H20 TP8 配置下，已通过特定参数临时规避。

GLM-5.3-Flash 长上下文预fill 阶段发生 CUDA OOM 导致所有 TP 进程崩溃。Humming 量化在权重加载时崩溃，原因是 `BlockQuantScaleParameter` 缺少 `format_ue8m0` 属性。transformers 库版本 5.12.1 与主版本不兼容，导致 `import sglang` 失败。

HiCache 分阶段回写向 `cudaMemcpyBatchAsync` 传递未注册的 host VA，当 `CanUseHostPointerForRegisteredMem` 为 0 时会触发错误。EAGLE spec-decode 中 draft 批次的 `num_token_non_padded` 为 0，导致所有 draft topk id 被遮罩为 -1，破坏 MoE 分发逻辑。DP 调度器收到 SIGQUIT 时直接终止 DataParallelController，而非通知 Engine。

强每通道衰减场景下，KDA 融合路径因 exp2 因子化中的 ±126 限制而失效。sgl_kernel AOT 中 rmsnorm 在 sm_75 缺失内核镜像，但 silu/gelu 正常（Turing per-op cubin 差距）。CI 测试状态：1 个损坏，9 个不稳定，1072 个近期修复。

快速冷启动方面，Weight Cache Daemon 已可用于生产环境。

Qwen3-235B FP8 等大型模型的引擎恢复时间从 5 分钟以上缩短至亚秒级。路由器改进包括新的 SLO 感知、缓存感知和会话感知路由策略，为 TTFT 和吞吐量提供更精细的控制。InstantTensor 现已支持分布式检查点加载，可通过 `--load-format instanttensor` 选项使用。GLM-5.3 和 Qwen3.8-Next 是当前积极优化的前沿模型，密切跟踪相关路线图问题。

需要注意的是，GLM-5.3-Flash 长上下文预fill 的 CUDA OOM 和 H20 并发问题仍待解决。在这些问题修复前，避免在 H20 TP8 上使用 8 个以上并发请求，并在 GLM-5.3-Flash 中考虑使用 `--cpu-offload-gb 0` 来避免 CUDA graph 初始化失败。</think>

# SGLang digest — 2026-09-21

## 1. 今日要点

SGLang 的路由和推理栈持续快速演进，多个基础设施 PR 已在准入控制、缓存感知路由和流式会话处理方面落地。模型侧，InstantTensor loader 支持和 GLM-5.3-Flash 优化成为 PR 的重点，而快速引擎恢复的 Weight Cache Daemon 已上线，将 Qwen3-235B FP8 的权重加载时间从约 306–327 秒缩短至 1 秒以内。

---

## 2. 版本发布与破坏性变更

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **暂无新版本** | 过去 24 小时内无更新 | — |

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 详情 | 参考 |
|------------------|---------|------------|
| **Kimi-K3** | 通过 sgl-router 原生 Dynamo 支持启用 | [#40390](https://github.com/sgl-project/sglang/pull/40390) |
| **SenseNova-U1 / U1.5** | 功能与性能跟踪中 | [#37742](https://github.com/sgl-project/sglang/issues/37742) |
| **Qwen3.8-Flash-Next (Qwen4-Exp)** | 流水线并行服务 + PD-prefill MTP | [#40501](https://github.com/sgl-project/sglang/pull/40501) |
| **GLM-5.3-Flash** | 混合注意力 CPU 卸载 + PD 索引映射支持 | [#40310](https://github.com/sgl-project/sglang/pull/40310) |
| **GLM-5.2 (AMD MI355X)** | MXFP4 dense experts 与 MoE/MLA 启动修复 (ROCm) | [#40189](https://github.com/sgl-project/sglang/pull/40189) |
| **InstantTensor loader** | 新增 `--load-format instanttensor` 支持高性能 Safetensors 加载 | [#40453](https://github.com/sgl-project/sglang/pull/40453) |
| **AMD aiter asm** | Kimi K3 目标验证 (ROCm) | [#34537](https://github.com/sgl-project/sglang/pull/34537) |

---

## 4. 性能与优化

| 领域 | 变更 | 参考 |
|------|--------|-----------|
| **Weight Cache Daemon** | 每 rank 守护进程通过 CUDA IPC 持有后量化权重；权重加载从约 306–327s 降至 Qwen3-235B FP8 的 <1s | [#33522](https://github.com/sgl-project/sglang/issues/33522) |
| **Decode Context Parallelism** | A2A + FlashInfer-MNNVL 通信后端与查询复制 (Helix) 已落地；`fi_a2a` / `a2a` 作为默认 `--dcp-comm-backend` | [#29736](https://github.com/sgl-project/sglang/issues/29736), [#39165](https://github.com/sgl-project/sglang/pull/39165), [#37767](https://github.com/sgl-project/sglang/pull/37767) |
| **Router SLO 排序** | 桶选择中新增可选的 TTFT 和 token 吞吐量偏好 | [#40292](https://github.com/sgl-project/sglang/pull/40292) |
| **Router 准入策略** | 通用准入限制：`max_running_requests`、`max_waiting_requests`、`max_kv_tokens` | [#40271](https://github.com/sgl-project/sglang/pull/40271) |
| **缓存感知路由** | 优先选择持有可用前缀的 worker；回退到 power-of-two 选择 | [#40366](https://github.com/sgl-project/sglang/pull/40366) |
| **会话感知路由** | 相同 session key 的请求复用已准入的绑定 | [#40379](https://github.com/sgl-project/sglang/pull/40379) (已关闭) |
| **流式空闲超时** | 新增 `--stream-idle-timeout-secs`（默认 180s）用于 SSE | [#40391](https://github.com/sgl-project/sglang/pull/40391) |
| **GLM-5.3 KDA** | 融合投影 + prefill 元数据；beta 激活融合到 gate/cumsum | [#39688](https://github.com/sgl-project/sglang/pull/39688) |
| **GLM-5.3 KPool** | 减少 planning 同步；交错进行索引器准备 | [#39695](https://github.com/sgl-project/sglang/pull/39695) |
| **Pinned memory 传输** | 通过 pinned memory 异步传输采样元数据 | [#39777](https://github.com/sgl-project/sglang/pull/39777) |
| **NVFP4 W4A16** | 通过 `SGLANG_FLASHINFER_CUTEDSL_NVFP4_W4A16=1` 在 FlashInfer MegaMoE 中可选支持 | [#39210](https://github.com/sgl-project/sglang/pull/39210) |
| **Diffusion VAE slicing** | 原生管道中现支持 `--vae-slicing` | [#40493](https://github.com/sgl-project/sglang/pull/40493) |

---

## 5. 稳定性与回归

| 严重程度 | 问题 | 状态 | 已修复？ |
|----------|-------|--------|------|
| **高** | CUDA 非法内存访问：QSA extend forward 在 8 个并发请求时 (Qwen3.8-Flash-Next-FP8, H20 TP8)；可通过 `CUDA_LAUNCH_BLOCKING=1` 和 `--disable-overlap-schedule` 规避 | 进行中 | [#37633](https://github.com/sgl-project/sglang/issues/37633) |
| **高** | GLM-5.3-Flash：长上下文 prefill 时 CUDA OOM 导致所有 TP rank 崩溃 | 进行中 | [#37712](https://github.com/sgl-project/sglang/issues/37712) |
| **高** | Humming 量化在权重加载时崩溃 — `BlockQuantScaleParameter` 缺少属性 `format_ue8m0` (v0.5.20, DeepSeek/GLM MLA) | 进行中 | [#40393](https://github.com/sgl-project/sglang/issues/40393) |
| **中** | transformers pin (5.12.1) 与 main 不兼容：`import sglang` 失败 | 进行中 | [#38183](https://github.com/sgl-project/sglang/issues/38183) |
| **中** | HiCache 分阶段回写传递未注册的 host VA 给 `cudaMemcpyBatchAsync`，当 `CanUseHostPointerForRegisteredMem == 0` 时 fault | 进行中 | [#40232](https://github.com/sgl-project/sglang/issues/40232) |
| **中** | EAGLE spec-decode：draft batch 的 `num_token_non_padded = 0`，将所有 draft topk id 遮罩为 -1，破坏 MoE 分发 | 进行中 | [#40156](https://github.com/sgl-project/sglang/issues/40156) |
| **中** | DP scheduler SIGQUIT 终止 DataParallelController 而非通知 Engine | 进行中 | [#40364](https://github.com/sgl-project/sglang/issues/40364) |
| **低** | KDA 融合 intra-chunk 路径在强每通道衰减下失效，原因是 exp2 因子化中的 ±126 限制 | 进行中 | [#39971](https://github.com/sgl-project/sglang/issues/39971) |
| **低** | sgl_kernel AOT：rmsnorm 在 sm_75 无 KernelImage，但 silu/gelu 正常 (Turing per-op cubin 差距) | 进行中 | [#38515](https://github.com/sgl-project/sglang/issues/38515) |
| **跟踪中** | CI：1 个损坏，9 个 flaky，1072 个近期修复的测试 | 进行中 | [#17050](https://github.com/sgl-project/sglang/issues/17050) |

---

## 6. 这对应用开发者意味着什么

- **更快的冷启动**：Weight Cache Daemon 现已可用于生产环境——如果你运行 Qwen3-235B FP8 或类似的大模型，预计引擎恢复时间将从 5 分钟以上缩短至亚秒级。
- **路由改进**：新的 SLO 感知、缓存感知和会话感知路由策略在 sgl-router 中提供了更精细的 TTFT 和吞吐量控制。如果处理长连接流式请求，考虑调优 `--stream-idle-timeout-secs`。
- **新加载器**：InstantTensor 现已通过 `--load-format instanttensor` 支持——如果你在分布式 checkpoint 加载场景下运行，请测试此功能。
- **GLM-5.3 / Qwen3.8-Next**：这些是正在积极优化的前沿模型。如果你正在部署它们，请密切关注路线图 issues——多个 kernel 融合和内存优化已于本周落地。
- **注意风险**：GLM-5.3-Flash 长上下文 prefill 的 CUDA OOM 问题 和 H20 并发 bug 正在修复中。在修复前，避免在 H20 TP8 上使用 8 个以上并发请求，并对 GLM-5.3-Flash 考虑使用 `--cpu-offload-gb 0` 以避免 CUDA graph 初始化失败。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English digest about llama.cpp into Chinese. I need to:
1. Translate all the content while keeping the Markdown structure exactly the same
2. Keep URLs, issue numbers, code references, etc. as-is
3. Use natural technical Chinese appropriate for a developer newsletter
4. Not add any preamble, explanation, or markdown fences

Let me go through and translate this carefully while preserving all formatting.</think>

# llama.cpp 每日简报 — 2026-09-21

## 1. 今日要闻

今日开发重点集中在**后端和模型特定优化**。值得关注的 CUDA 提交包括：为 Ampere+ GPU 上的 Gemma 4 闪速注意力调优，以及为 Qwen4 启用稀疏 FA。Metal 层面则在 dsv4_hc_pre 内核中增加了对任意 head channel 配置的支持。社区继续处理 SYCL 多 GPU 设置的稳定性问题以及 RDNA3 上 Vulkan 的性能回退。

---

## 2. 版本发布与重大变更

| 版本 | 变更 | 链接 |
|---------|--------|-------|
| **b11065** | CUDA: 为 Ampere+ 上的 Gemma 4 调优 FA | [#29152](https://github.com/ggml-org/llama.cpp/pull/29152) |
| **b11064** | Metal: 支持 dsv4_hc_pre 中的任意 hc (修复 Kimi-K3 回退到 CPU) | [#29169](https://github.com/ggml-org/llama.cpp/pull/29169) |
| **b11063** | common/peg: 处理 AST 中的无效 UTF-8 序列 | [#29161](https://github.com/ggml-org/llama.cpp/pull/29161) |
| **b11062** | CUDA: 为 Qwen4 启用稀疏 FA | [#28770](https://github.com/ggml-org/llama.cpp/pull/28770) |
| **b11060** | Mamba: 修复时间步投影的输入连续性 | [#28832](https://github.com/ggml-org/llama.cpp/pull/28832) |
| **b11059** | Metal: 为 FWHT 添加 F16 输入 | [#29094](https://github.com/ggml-org/llama.cpp/pull/29094) |

---

## 3. 新模型与硬件支持

- **Gemma 4**: CUDA FlashAttention 针对 Ampere+ 优化，头大小 256/512，优化的 block size 和 batch=1 的 mma 内核 (b11065)
- **Qwen4**: CUDA 启用稀疏闪速注意力 (b11062)
- **Kimi-K3**: Metal dsv4_hc_pre 现支持任意头通道数，而非硬编码 hc=4 (b11064)
- **Qwen 3.8 MoE**: 支持通过 `--load-mode streaming` 和 `--gpu-pill` 流式加载专家 (Vulkan/HIP) (PR #29191) — 在 24GB VRAM + NVMe 交换下启用 >85GB 的 Q6_K 模型

---

## 4. 性能与优化

| 领域 | 变更 | 状态 |
|------|--------|--------|
| **Gemma 4 CUDA** | 为 Ampere+ 调优 FA，优化 block size 和 batch=1 的 mma 内核 | 已合并 b11065 |
| **Qwen4 CUDA** | 启用稀疏闪速注意力 | 已合并 b11062 |
| **Metal FWHT** | F16 输入支持消除 F32 转换拷贝 | 已合并 b11059 |
| **Mamba** | 时间步投影连续性修复 + 归一化后跳过拷贝 | 已合并 b11060 |
| **Vulkan int8** | AMD RDNA3/4 的 Coopmat1 矩阵乘法，支持 q4_0–q6_k, mxfp4, nvfp4, iq4_nl | 开放 PR #27952 |
| **Intel Xe Flash Attention** | Xe-LPG Plus/Xe2/Xe3 新内核 (PR 2/3) | 开放 PR #24406 |
| **NCCL TP** | 通过 NCCL 实现多节点张量并行 (CUDA) | 开放 PR #28967 |
| **--fit 稠密模型** | CPU 卸载优化的层优先级策略 | 开放 PR #29027 |

---

## 5. 稳定性与回退问题

### 高优先级

| 问题 | 描述 | 严重程度 | 状态 |
|-------|-------------|----------|--------|
| [#27595](https://github.com/ggml-org/llama.cpp/issues/27595) | SYCL `--fit` 内存计算不足，导致 Arc B70 运行时溢出 | **高** | 开放，22 条评论 |
| [#27547](https://github.com/ggml-org/llama.cpp/issues/27547) | SYCL 双 GPU (2x Arc Pro B60) 在模型加载时卡死 | **高** | 开放，12 条评论 |
| [#25664](https://github.com/ggml-org/llama.cpp/issues/25664) | Vulkan DeviceLostError on RADV_STRIXHALO (Linux 7.x) | **高** | 开放，24 条评论 |
| [#28752](https://github.com/ggml-org/llama.cpp/issues/28752) | Vulkan RDNA3 自 b10780 起提示处理速度下降约 5 倍 | **高** | 开放，9 条评论 |

### 中优先级

| 问题 | 描述 | 严重程度 | 状态 |
|-------|-------------|----------|--------|
| [#29092](https://github.com/ggml-org/llama.cpp/issues/29092) | HIP/ROCm: 门控 DeltaNet 状态跨请求泄漏 (Qwen35) | **中** | 开放，7 条评论 |
| [#29164](https://github.com/ggml-org/llama.cpp/issues/29164) | 移动 GPU: 模型加载到 dGPU CUDA0，推理运行在 iGPU | **中** | 开放，4 条评论 |
| [#28734](https://github.com/ggml-org/llama.cpp/issues/28734) | Qwen4exp 解码随上下文线性减速 (CUDA) | **中** | 开放，5 条评论 |

### 获得关注的功能请求

- **#21725**: XDNA 后端请求 (30 条评论，35 👍)
- **#20697**: 磁盘上下文检查点卸载 `--cache-disk` (20 条评论，55 👍)

---

## 6. 这对应用开发者意味着什么

1. **混合系统上的 GPU 选择很重要**: 如果在移动设备或笔记本 dGPU+iGPU 配置上部署，请验证推理运行在预期设备上 — issue #29164 报告模型加载到 dGPU 但执行在 iGPU 上。

2. **SYCL 稳定性仍然令人担忧**: 多 GPU SYCL 设置 (Arc B70, 双 Arc Pro B60) 正在经历卡死和内存计算问题。如果运行 Intel GPU，请考虑 CPU 回退或关注 PR #28990 和 #27595 中的修复。

3. **Vulkan RDNA3 回退**: 如果在 AMD RDNA3 (RX 7000 系列) 上使用 Vulkan，b10780+ 的提示处理速度下降会影响吞吐量。请关注 PR #28752 的更新。

4. **新的量化选项**: RDNA3/4 int8 coopmat1 矩阵乘法 (PR #27952) 扩展了量化格式支持 — 对 AMD 消费级 GPU 上的 Q4–Q6 量化很有用。

5. **长上下文 Qwen 模型**: 混合门控 DeltaNet 在 >80K 上下文时的解码崩溃 (issue #27623) 影响长上下文应用。请评估您的用例是否受此影响。

6. **Server 改进即将推出**: 跨槽保存/恢复的上下文检查点保留 (PR #26004) 将提高 SWA 和混合模型的槽位重用效率 — 对多租户部署至关重要。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the provided English digest into Chinese, following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this digest while preserving all the formatting and technical terms:

---

## 今日要闻

Ollama 在多个方面都有活跃开发：MLX 后端获得了重要的内核优化（#18550），而 NVIDIA RTX 3090 GPU 上的内存回归问题（#18225）仍在调查中。Vulkan 后端持续存在稳定性问题，AMD GPU 上出现访问违规（#18557），同时还发现了多个模型兼容性问题，包括视觉模型收到空白图片以及不支持的三元量化格式。

---

## 版本更新与重大变更

| 项目 | 描述 | 链接 |
|------|-------------|------|
| `typical_p` 参数处理 | 之前会返回 400 错误拒绝请求；现在会发出警告并忽略，提高了与 SillyTavern 等客户端的兼容性 | [#18551](https://github.com/ollama/ollama/pull/18551) |

---

## 新模型与硬件支持

| 功能 | 详情 | 链接 |
|---------|---------|------|
| Prism 三元 GGUFs | 对 PQ2_0（类型 142）和 PTQ1_0（类型 143）量化的支持跟踪 — 当前导入失败 | [#18521](https://github.com/ollama/ollama/issues/18521) |


| gemma4 视觉模型 | 模型声明支持视觉功能，但所有接收到的图片均为空白/全零 — 正在调查中 | [#18560](https://github.com/ollama/ollama/issues/18560) |

---

## 性能与优化

| 领域 | 变更 | 影响 | 链接 |
|------|--------|--------|------|
| MLX 预填充 | 新增预填充形状的门控增量内核 | 提升了 Apple Silicon 上的提示词处理速度 | [#18550](https://github.com/ollama/ollama/pull/18550) |
| CUDA 内核优化 | 优化了内存访问模式并减少了计算冗余 | 提高了 GPU 利用率 | [#18225](https://github.com/ollama/ollama/issues/18225) |
| 量化性能 | 改进了动态量化的处理效率 | 降低了内存占用并加快了推理速度 | [#18521](https://github.com/ollama/ollama/issues/18521) |

---

## 稳定性与回归测试

| 严重程度 | 问题 | 状态 | 链接 |
|----------|-------|--------|------|
| **严重** | AMD RX 6800 XT 上的 Vulkan 访问违规（0xc0000005） | 进行中 — 任何 GPU 模型都会崩溃 | [#18557](https://github.com/ollama/ollama/issues/18557) |
| **高** | RTX 3090 上的推理速度下降（约 5 倍，从 0.32.13 降至 0.33.2） | 进行中 — CUDA 性能回归 | [#18225](https://github.com/ollama/ollama/issues/18225) |
| **中** | 图片处理中的内存泄漏（RAM 无限增长） | 进行中 | [#18558](https://github.com/ollama/ollama/issues/18558) |
| **中** | 上下文长度超过时的静默截断 | 进行中 | [#18559](https://github.com/ollama/ollama/issues/18559) |
| **低** | 在线搜索中的 JSON 解析错误 | 已修复 | [#18441](https://github.com/ollama/ollama/issues/18441) |

---

## 应用程序开发者的注意事项

使用 MLX 结构化输出的开发者需要注意，已解决 JSON 前缀问题（#18441），但应验证 JSON 解析能否处理边界情况。发送 `typical_p` 参数的开发者不再需要移除它，因为 Ollama 现在会忽略该参数并发出警告（#18551），提升了与现有客户端的兼容性。在 Vulkan/AMD 环境下运行时应避免 GPU 推理直至 #18557 解决，CPU 模式可作为后备方案。使用 16GB Apple Silicon 设备的用户可调整新的前缀缓存内存预算设置（#18556）以防止系统无响应。构建视觉功能时需注意 gemma4:e4b 目前无法正确处理图片（#18560）。进行长对话时需了解消息超长时会静默删除旧消息，且 API 不会给出提示（#14259）。</think>

## 今日要闻

Ollama 在多个方面都有活跃开发：MLX 后端获得了重要的内核优化（#18550），而 NVIDIA RTX 3090 GPU 上的内存回归问题（#18225）仍在调查中。Vulkan 后端持续存在稳定性问题，AMD GPU 上出现访问违规（#18557），同时还发现了多个模型兼容性问题，包括视觉模型收到空白图片以及不支持的三元量化格式。

---

## 版本更新与重大变更

| 项目 | 描述 | 链接 |
|------|-------------|------|
| `typical_p` 参数处理 | 之前会返回 400 错误拒绝请求；现在会发出警告并忽略，提高了与 SillyTavern 等客户端的兼容性 | [#18551](https://github.com/ollama/ollama/pull/18551) |

---

## 新模型与硬件支持

| 功能 | 详情 | 链接 |
|---------|---------|------|
| Prism 三元 GGUFs | 对 PQ2_0（类型 142）和 PTQ1_0（类型 143）量化的支持跟踪 — 当前导入失败 | [#18521](https://github.com/ollama/ollama/issues/18521) |
| gemma4 视觉 | 模型声明支持视觉功能，但所有接收到的图片均为空白/全零 — 正在调查中 | [#18560](https://github.com/ollama/ollama/issues/18560) |

---

## 性能与优化

| 领域 | 变更 | 影响 | 链接 |
|------|--------|--------|------|
| MLX 预填充 | 新增预填充形状的门控增量内核 | 提升 Apple Silicon 上的提示词处理吞吐 | [#18550](https://github.com/ollama/ollama/pull/18550) |
| MLX 内存 | 前缀缓存分页内存预算改为可配置 | 防止 16GB Mac 机器出现内存耗尽 | [#18556](https://github.com/ollama/ollama/pull/18556) |
| GPU 功率报告 | 当 SMCount/ClockMHz 不可用时处理 NaN 值 | 防止探测数据不完整的 GPU 导致调度器崩溃 | [#18552](https://github.com/ollama/ollama/pull/18552) |
| Docker Vulkan | 在容器中暴露 NVIDIA 图形能力 | 使 Vulkan 后端能在 Docker 内运行 | [#18562](https://github.com/ollama/ollama/pull/18562) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 链接 |
|----------|-------|--------|------|
| **严重** | AMD RX 6800 XT 上的 Vulkan 访问违规（0xc0000005） | 待解决 — 任何 GPU 模型都会崩溃 | [#18557](https://github.com/ollama/ollama/issues/18557) |
| **高** | RTX 3090 上 Token 生成速度下降约 5 倍（0.33.2 vs 0.32.13） | 待解决 — CUDA 回归问题 | [#18225](https://github.com/ollama/ollama/issues/18225) |
| **中** | 图片处理内存泄漏（RAM 无限增长） | 待解决 | [#18558](https://github.com/ollama/ollama/issues/18558) |
| **中** | 上下文超长时的静默截断（仅 debug 日志可见） | 待解决 | [#14259](https://github.com/ollama/ollama/issues/14259) |
| **低** | MLX 结构化输出时 JSON 前缀多出一个 "." | 已关闭 | [#18441](https://github.com/ollama/ollama/issues/18441) |

---

## 这对应用开发者意味着什么

- **如果你在 MLX 上使用结构化输出**：JSON 前缀问题现已修复（#18441），但请验证你的 JSON 解析逻辑是否能处理边界情况。
- **如果你在 API 请求中发送 `typical_p`**：不再需要移除该参数 — Ollama 现在会忽略它并发出警告（#18551），提升了与现有客户端的兼容性。
- **如果你在 Vulkan/AMD 上运行**：请使用 CPU 推理直到 #18557 修复；GPU 模式会崩溃。
- **如果你使用 16GB Apple Silicon**：考虑调整新的前缀缓存内存预算设置（#18556）以防止系统无响应。
- **如果你在构建视觉功能**：请注意 gemma4:e4b 视觉模型目前无法正确处理图片（#18560）。
- **如果你进行长对话**：请注意旧消息在上下文填满时会静默被删除 — API 不会给出任何提示（#14259）。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM Daily Digest into Simplified Chinese, following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the exact structure:</think>

# LiteLLM 每日简报 — 2026-09-21

## 今日要闻

LiteLLM v1.103.0-rc.1 现已发布，Docker 镜像已通过 **cosign 签名** 验证后方可部署。分词器栈正在向 Rust 迁移，以消除 Python 依赖的重复问题。与此同时，几个关键问题影响流式请求的成本计算（模型别名被解析为 0 美元消费）和 Gemini 提示缓存（会话中插入 system 消息会破坏前缀缓存）。一个重要的安全修复解决了 Helm chart 默认以 root 身份运行容器的问题。

---

## 发布与破坏性变更

| 项目 | 描述 | 链接 |
|------|------|------|
| **v1.103.0-rc.1 发布** | v1.103.0 的发布候选版本 | [GitHub Release](https://github.com/BerriAI/litellm/releases/tag/v1.103.0-rc.1) |
| **Docker 镜像现已支持 cosign 签名** | 所有 LiteLLM Docker 镜像均已使用 commit `0112e53` 中的密钥通过 cosign 签名 — 可使用 `cosign verify` 验证 | [docs.sigstore.dev](https://docs.sigstore.dev/cosign/overview/) |

---

## 新模型与硬件支持

| 模型/功能 | 详情 | 链接 |
|-----------|------|------|
| **DeepSeek V4 reasoning_effort** | 支持 `reasoning_effort: "high"/"max"` 参数（V4 Pro/Flash，2026-04-24 发布） | [#27439](https://github.com/BerriAI/litellm/issues/27439) |
| **Vertex AI mREP 端点** | 多区域端点 URL 生成功能请求 | [#23766](https://github.com/BerriAI/litellm/issues/23766) |
| **OpenRouter 价格同步** | 更新了 4+ 个 DeepSeek 及其他模型的价格 | [#42178](https://github.com/BerriAI/litellm/pull/42178), [#42175](https://github.com/BerriAI/litellm/pull/42175), [#42169](https://github.com/BerriAI/litellm/pull/42169) |

---

## 性能与优化

| 领域 | 变更 | 影响 | 链接 |
|------|------|------|------|
| **分词器** | 基于 Rust 的分词器替换 Python 依赖 | 消除重复的分词器栈；修复 Unicode 和自定义分词器的回归问题 | [#42174](https://github.com/BerriAI/litellm/pull/42174) |
| **Token 计数后端** | 拆分为 fast、HuggingFace 和 tiktoken 后端 crate | 解耦各实现；修复因保留合并等级导致的静默计数错误 | [#42165](https://github.com/BerriAI/litellm/pull/42165) |
| **密钥管理器** | 面向 Rust 的类型化密钥管理器接口 + AWS/GCP 实现 | 为 Rust 调用者提供类型化认证；将提供者认证从门面模式中解耦 | [#42173](https://github.com/BerriAI/litellm/pull/42173) |
| **MLflow 集成** | 修复未调用 `model_dump()`（传递了方法引用而非调用结果） | 修复块事件序列化问题 | [#30401](https://github.com/BerriAI/litellm/pull/30401) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 描述 | 状态 | 修复 PR |
|----------|------|------|------|---------|
| 🔴 **高** | [#42161](https://github.com/BerriAI/litellm/issues/42161) | 使用 `model_name` 别名时流式请求计费为 0 美元 — 74/89 次调用被记录为免费 | 待处理 | [#42176](https://github.com/BerriAI/litellm/pull/42176) |
| 🔴 **高** | [#42104](https://github.com/BerriAI/litellm/issues/42104) | 会话中插入 `system` 消息会破坏 Gemini/Vertex 提示缓存 — 每次调用都报告 `cache_read_input_tokens: 0` | 待处理 | [#42126](https://github.com/BerriAI/litellm/pull/42126) |
| 🟠 **中** | [#42005](https://github.com/BerriAI/litellm/issues/42005) | Responses-to-Chat 桥接在多轮重放时丢失原生工具调用；将 reasoning 泄漏为 assistant 文本 | 待处理 | — |
| 🟠 **中** | [#40583](https://github.com/BerriAI/litellm/issues/40583) | Guardrails 无法看到或阻止通过 Anthropic `/v1/messages` 格式发送的 MCP 工具 | 待处理 | — |
| 🟠 **中** | [#27735](https://github.com/BerriAI/litellm/issues/27735) | 虚拟密钥 `BudgetExceededError` 使用过时的消费数据，而 `/key/info` 显示消费低于 max_budget | 待处理 | — |
| 🟠 **中** | [#40822](https://github.com/BerriAI/litellm/issues/40822) | Helm chart 缺少 `securityContext` 配置 — Pod 默认以 root 身份运行 | 待处理 | — |
| 🟡 **低** | [#41913](https://github.com/BerriAI/litellm/issues/41913) | 六个字段（`const`、`strict`、`parallel_tool_calls` 等）在 LLM 翻译中被丢弃 | 待处理 | — |
| 🟡 **低** | [#30731](https://github.com/BerriAI/litellm/issues/30731) | `llm_as_a_judge` guardrail 默认缺少 `overall_score` 时设为 100（通过）— 应该默认失败 | 待处理 | — |

---

## 这对应用开发者意味着什么

1. **验证你的部署** — 如果使用 LiteLLM Docker，请升级到 v1.103.0-rc.1 并在生产使用前通过 cosign 验证镜像。

2. **流式请求时避免使用模型别名** — 如果使用 `model_name` 别名，流式请求当前会被记录为 0 美元消费。修复在 [#42176](https://github.com/BerriAI/litellm/pull/42176) 中待处理；在问题解决前请使用直接模型名称。

3. **不要在 Gemini 对话中插入 system 消息** — 在 `messages[]` 中插入会话中间的 `system` 角色消息会破坏 Vertex AI 前缀缓存。请将 system 提示保持在开头位置。

4. **Guardrails 对 Anthropic MCP 存在盲区** — 如果在 Anthropic `/v1/messages` 中使用 MCP 工具，自定义 guardrails 无法检查或阻止这些工具。请考虑使用其他方案直到问题解决。

5. **检查 Helm 安全上下文** — 当前默认部署以 root 身份运行。请在 values.yaml 中添加显式的 `runAsNonRoot`、`runAsUser` 和 `capabilities.drop`。

6. **DeepSeek V4 用户** — `reasoning_effort` 现已正确传递给 Pro/Flash 模型，可控制扩展思考预算。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>I need to translate the Unsloth digest into Simplified Chinese, following all the rules provided. Let me carefully translate each section while preserving the structure and formatting.

Key points:
- Keep all Markdown structure
- Keep URLs, issue numbers, code, file paths as-is
- Use natural technical Chinese register
- No preamble, no explanation, just the translation
- No markdown fences around the whole output

Let me translate section by section:

## Today's Highlights
- "Several significant performance and stability issues have emerged around Unsloth Studio's GGUF inference pipeline."
- "A critical regression in v0.1.810-beta shows measurably slower inference throughput"
- "while a parallel report details the bundled llama.cpp build (CUDA 13.4) running 5-6x slower than the official ggml-org CUDA 12 build on RTX 5070 Ti (Blackwell sm_120)"
- "On the development side, active PR work continues on Windows tool isolation via Microsoft MXC and expanded file format support for chat attachments."

Let me translate the entire document now.</think>

# Unsloth 动态 — 2026年9月21日

## 今日要闻

Unsloth Studio 的 GGUF 推理管线近期出现了若干重要的性能与稳定性问题。v0.1.810-beta 版本存在明显的推理吞吐量回退问题，另一份报告则指出，在 RTX 5070 Ti（Blackwell sm_120）上，绑定的 llama.cpp（CUDA 13.4）比官方 ggml-org CUDA 12 版本慢 5-6 倍。开发方面，Windows 工具隔离（通过 Microsoft MXC）和聊天附件格式扩展的工作仍在积极推进中。

---

## 版本发布与重大变更

过去 24 小时内无新版本发布。

---

## 新模型与硬件支持

- **MiCA（次要组件自适应）**：已在 `FastLanguageModel.get_peft_model()` 中添加 MiCA 支持的功能请求。MiCA 已被合并至 Hugging Face PEFT，作为一种与 LoRA 兼容的初始化方法。— [#6730](https://github.com/unslothai/unsloth/issues/6730)

- **社区 SDXL 微调模型**：新增功能请求，支持在 Images 页面加载单文件 GGUF/safetensors 格式的 SDXL 微调模型。— [#11391](https://github.com/unslothai/unsloth/issues/11391)

---

## 性能与优化

**正在调查中的回退问题：**

- **GGUF 推理吞吐量回退**：更新至 v0.1.810-beta 后，在相同硬件和配置下，本地 GGUF 模型的推理速度明显变慢。这是一个推理吞吐量回退问题，而非仅涉及 UI。— [#11221](https://github.com/unslothai/unsloth/issues/11221)

- **绑定的 llama.cpp CUDA 13.4 性能问题**：在 NVIDIA RTX 5070 Ti（sm_120 / Blackwell）上使用 CUDA 13.4 驱动时，绑定的 llama.cpp（`b11030-mix-5ff778e`）比官方 ggml-org CUDA 12 版本慢约 5-6 倍。— [#11349](https://github.com/unslothai/unsloth/issues/11349)

**推进性能和正确性的 PR：**

- **GRPO Eval Loss 修复**：PR #11337 修复了 GRPO 运行中 `eval_loss` 比 train loss 小恰好 `gradient_accumulation_steps` 倍、且随该设置变化而移动的问题。修复方案是无论条件如何都读取 `self.current_gradient_accumulation_steps`。— [#11337](https://github.com/unslothai/unsloth/pull/11337)

- **Windows VRAM 溢出检测**：PR #11368 防止 Windows 主机内存溢出被显示为健康负载——在 Windows 上，`cudaMalloc` 在 VRAM 耗尽后仍可能从主机内存分配成功（自驱动 536.40 起），而不是返回内存不足错误。— [#11368](https://github.com/unslothai/unsloth/pull/11368)

- **Metal GPU 队列恢复**：PR #11383 添加了从已终止的 Metal GPU 队列恢复的功能，而非让每个后续请求都失败。Apple 的 GPU 看门狗会终止卡死的命令缓冲区，使推理工作进程陷入损坏状态。— [#11383](https://github.com/unslothai/unsloth/pull/11383)

---

## 稳定性与回退

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **高** | v0.1.810-beta 中 GGUF 推理吞吐量回退 | OPEN | — |
| **高** | 绑定的 llama.cpp 在 RTX 5070 Ti 上比官方慢 5-6 倍 | OPEN | — |
| **中** | Studio 传递 `-H 0.0.0.0` 时未绑定到 `0.0.0.0` | OPEN | — |
| **中** | GGUF 加载合成文件名时返回 500（变体解析器猜错名称） | OPEN | — |
| **中** | PowerShell 安装脚本因 Windows 用户名包含空格而在回滚时失败 | OPEN | — |
| **低** | Firefox/Brave（Linux）下无法复制 API Keys | OPEN | — |
| **低** | 远程访问密码失败时显示路径信息（信息泄露） | OPEN | — |
| **已修复** | Windows 安装程序以非致命错误失败 | CLOSED | — |
| **已修复** | 驱动过旧 — CUDA 13 需要驱动 ≤580 | CLOSED | — |

---

## 这对应用开发者意味着什么

1. **生产环境避免使用 v0.1.810-beta 运行 GGUF 推理** — 如果在 Studio 中运行本地 GGUF 模型，请注意吞吐量回退问题。在修复发布前，建议停留在前一版本。

2. **关注 CUDA 驱动兼容性问题** — CUDA 13 需要驱动 ≤580。如果您在更新驱动后遇到问题，这是已知的限制。

3. **Windows 部署注意事项** — Windows 工具隔离的 MXC 沙箱工作（PR #11390、#11357）正在推进中。在 Studio 中使用 Python/终端工具的 Windows 用户，安全态势将得到改善。

4. **即将支持更多附件格式** — PR #11379 扩展了聊天附件支持范围，包括 Excel、PowerPoint、RTF、Pages/Numbers/Keynote、HEIC、AVIF/BMP/TIFF 以及数据文件（.parquet、.sqlite、.zip）。请为聊天工作流中更丰富的文件处理做好准备。

5. **GRPO 训练用户** — #11337 中的 eval loss 归一化修复将影响训练指标。如果您的自动化流程涉及 GRPO loss 监控，请在更新后验证您的仪表盘。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*