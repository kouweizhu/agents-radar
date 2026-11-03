# AI 基础设施日报 2026-11-03

> 生成时间: 2026-11-03 03:40 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the English report into Chinese. I need to follow the detailed translation rules provided:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, code spans, project names, version tags, etc. as-is
4. Use natural technical Chinese - the register of a Chinese developer newsletter
5. Keep headings, tables, lists, blockquotes, formatting intact
6. Maintain English proper nouns that are standard in Chinese technical writing (like vLLM, SGLang, llama.cpp, Ollama, LiteLLM, Unsloth)
7. Use Chinese punctuation throughout (，。：；？！""『』) except inside code blocks
8. Preserve the horizontal rule formatting with --- 

Let me translate the report now, being careful to maintain all the structure and use natural technical Chinese.</think>

# 跨项目对比报告：AI 推理与服务基础设施

## 1. 生态概览

AI 推理栈正在围绕**三个架构层级**收敛：（1）针对多 GPU 集群优化的分布式服务引擎（vLLM、SGLang），（2）面向边缘/消费级硬件的可移植本地运行时（llama.cpp、Ollama），（3）抽象提供商异构性的网关/编排层（LiteLLM）。训练基础设施仍是独立的垂直领域（Unsloth），而所有引擎都在竞相支持同一代数的混合专家模型——DeepSeek-V4 系列、Mistral Large 4 以及 Clover 等全新纯注意力架构。所有项目面临的**核心技本张力是确定性**：vLLM、SGLang 和 llama.cpp 在各种配置下（前缀缓存、稀疏注意力、CUDA 图）都存在非确定性贪婪解码问题，这对依赖可复现输出的智能体工作流造成了正确性风险。

---

## 2. 活跃度对比

| 项目 | Issue（当前 → 最新） | 合并 PR（24h） | 发布版本（24h） | 贡献者（版本） |
|------|---------------------|----------------|-----------------|----------------|
| **vLLM** | 10 个追踪；最高 127 条评论 | 10+ PR | v0.33.0 | 389（122 新） |
| **SGLang** | 12 个追踪；#42752 有 165 条评论 | 31 PR | v0.5.23 | 257 |
| **llama.cpp** | 10 个追踪；#27845（21 条评论） | 20+ PR | 10 个版本（b12050–b12063） | ~100+（滚动） |
| **Ollama** | 14 个追踪；#19461（VRAM bug 严重） | 31 PR | v0.40.14-rc0 | ~50（滚动） |
| **LiteLLM** | 10 个追踪；#31263（Rust 迁移，33 条评论） | 31 PR | 无 | ~100（滚动） |
| **Unsloth** | 7 个追踪；#14487（内存泄漏） | 10+ PR | 无 | ~30（滚动） |

**观察：**
- **SGLang 和 llama.cpp** 在 PR 总量上领先；llama.cpp 保持最快速的发布节奏（24 小时内 10 个版本）。
- **vLLM 和 SGLang** 的社区互动最活跃（100+ 评论的 issue）。
- **LiteLLM** 是唯一有专门架构迁移路线图的项目（Rust 重写）。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|--------------|------|--------|-----------|--------|---------|
| **DeepSeek-V4 / V4.1** | ✅ Flash + VL | ✅ Flash + NPU HiCache | — | — | — |
| **Mistral Large 4**（1T MoE）| — | ✅ | — | — | — |
| **Reflection Beam-1.0**（501B MoE）| ✅ | ✅ | — | — | — |
| **Clover**（纯注意力 MoE）| — | — | ✅ | — | — |
| **LFM3-1.7B** | — | — | — | — | 🚧（已请求） |
| **Muse Spark** | ✅ | ✅ | — | — | — |
| **Qwen3.8-Flash-Next** | ✅（SM10x）| ✅（gfx950）| — | — | — |
| **Pocket TTS** | — | — | ✅ | — | — |
| **Rockchip NPU** | — | — | — | ✅（RK3588）| — |

**胜出者：SGLang** — 最广泛的硬件覆盖（Intel XPU、AMD gfx950、NVIDIA Hopper、NPU）结合首发 Mistral Large 4 和先进调度（Mixed ChunkPrefill、Adaptive Speculative Decoding）。llama.cpp 在**可移植模型支持**上领先（TTS、Clover、Rockchip NPU），覆盖最广泛的硬件多样性。vLLM 在**大规模分布式服务**上领先（P/D 分离、Mooncake 弹性 EP）。

---

## 4. 性能前沿

| 优化领域 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM |
|----------|------|--------|-----------|--------|---------|
| **KV Cache / 卸载** | Mooncake TENT，按组异步查找 | Mooncake 弹性 EP，KV 传输 | flash_attn_ext_rows（多序列）| — | — |
| **批处理 / 调度** | 单一预填充块调度修复 | Mixed ChunkPrefill（路线图）| — | — | — |
| **量化** | FP8 融合逆 RoPE | NVFP4 融合 gate/up + GLU | Q5_K/Q6_K RDNA2 瓦片，DPAS SYCL | — | — |
| **分布式服务** | P/D 分离，弹性 EP | P/D + Mooncake | NCCL 多节点 TP | — | — |
| **内核优化** | CuTe DSL 解码注意力（1.6–2.15x）| DeepSeek MLA K 对齐放宽 | Vulkan split-K，RISC-V gemm | MLX top-k 分块排序 | — |
| **投机解码** | MTP 崩溃（阻塞中）| 自适应 SD 路线图 | — | — | — |
| **内存管理** | — | — | vm_allocate（Apple），KV 缓存自动 CPU 共享 | — | — |

**前沿集中度：**
- **vLLM 和 SGLang** 在 KV 卸载和 P/D 分离上并驾齐驱；两者都以多租户集群的 P99 延迟为目标。
- **llama.cpp** 掌控边缘/内核优化层——最多元化的后端组合（Vulkan、SYCL、Metal、HIP、CPU、NPU）。
- **LiteLLM** 处于编排层——其性能工作专注于速率限制正确性和提供商抽象开销。

---

## 5. 层级定位

| 项目 | 主层级 | 范围 | 关键差异化 |
|------|--------|------|------------|
| **vLLM** | 服务引擎 | 分布式、多 GPU、P/D 分离 | 100B+ 模型的生产级吞吐量 |
| **SGLang** | 服务引擎 | 先进调度、多模态、NPU | Mixed ChunkPrefill + 自适应投机解码 |
| **llama.cpp** | 本地运行时 | 独立推理，无需服务器依赖 | 单二进制可移植性，最广硬件支持 |
| **Ollama** | 本地运行时 | 终端用户部署，易用性 | 一键模型服务，消费级硬件优先 |
| **LiteLLM** | 网关 / 编排 | 提供商抽象、代理、密钥管理 | 100+ 提供商统一，成本控制 |
| **Unsloth** | 训练 / 微调 | QLoRA、LoRA 训练、GGUF 转换 | 消费级 GPU 内存高效微调 |

**竞争边界：**
- **vLLM ↔ SGLang**：集群推理的直接竞争对手；SGLang 的 NPU 和多模态优势，vLLM 的 Mooncake 生态。
- **llama.cpp ↔ Ollama**：不同的部署理念——llama.cpp 是库，Ollama 是产品；均面向本地推理。
- **LiteLLM** 位于所有项目之上，包装 vLLM/SGLang/llama.cpp/Ollama 提供统一的 OpenAI 兼容 API。

---

## 6. 趋势信号

**智能体/应用开发者应关注：**

1. **确定性回归问题普遍存在** — 在前缀缓存、稀疏注意力或 CUDA 图配置下，`temperature=0` 的贪婪解码在 vLLM、SGLang 和 llama.cpp 上都是非确定性的。这是**智能体循环的正确性风险**，因为它们依赖可复现的工具调用输出。关注：vLLM #54521、SGLang #39597、llama.cpp 进行中。

2. **NPU 支持正在加速** — Rockchip（Ollama）、Intel XPU（SGLang）和 Ascend（SGLang）后端正从开发中走向生产。边缘部署选项正在扩展到 CPU/移动端之外。

3. **混合专家是 100B+ 模型的默认配置** — Reflection Beam-1.0（501B/23A）、Mistral Large 4（1T/52A）、Recursive Flint（40B/2.5A）、Clover（纯注意力 MoE）。所有服务引擎都在优化 MoE 路由、延迟最终化和专家缓存。

4. **Rust 迁移是跨项目主题** — LiteLLM 的 #31263（33 条评论）和 vLLM 的 Rust 前端路线图（#44280）都将 Rust 用于生产服务器组件。预计 2026–2027 年会有更快的迭代周期和更好的内存安全性。

5. **内存管理 bug 正在累积** — llama.cpp 内存泄漏（Windows，#14487）、Ollama VRAM 过度计数（#19463）、Unsloth 内存泄漏（#14487）。多后端内存跟踪尚不成熟；在这些问题稳定之前，预期会有不一致的行为。

6. **网关/编排层正在整合** — LiteLLM 正在成为多提供商部署的事实抽象层。如果你在构建在 OpenAI、Anthropic、Bedrock 和开源模型之间切换的智能体，LiteLLM 可以减少集成面。

**战略建议：** 对于生产集群部署，首选 **vLLM**（Mooncake 生态，成熟的 P/D）或 **SGLang**（NPU 路径，多模态）。对于可移植/本地推理，**llama.cpp** 仍是最久经考验的。无论使用何种后端，将 **LiteLLM** 用作门面层，以保持提供商的可移植性。避免将 **Unsloth** 用于推理——它仅专注于训练。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM digest into Chinese. I need to:
1. Translate all the text while preserving the exact Markdown structure
2. Keep URLs, issue/PR numbers, code references, and technical terms as-is
3. Use natural technical Chinese suitable for a developer newsletter
4. Not add any preamble, explanation, or markdown fences

Let me translate this carefully, preserving all formatting:

Title: vLLM Digest — 2026-11-03

I'll translate the body section by section.</think>

# vLLM 速报 — 2026-11-03

## 1. 今日要点

vLLM **v0.33.0** 已正式发布，包含 927 次提交，来自 389 位贡献者（其中 122 位首次贡献）。本次更新新增了对多个 MoE 模型的支持，包括 Reflection Beam-1.0（501B MoE，采用 DFlash2 投机draft模型）、Yandex AliceAI-Foundation-80B-A3B 和 Recursive Flint。当前社区关注焦点仍集中在 Blackwell（SM12x）GPU 上 DeepSeek-V4 系列模型的支持，存在多个关键性能和正确性问题待解决。

---

## 2. 版本发布与破坏性变更

| 版本 | 变更内容 |
|---------|---------|
| **v0.33.0** | 稳定版本；927 次提交，来自 389 位贡献者（122 位新贡献者）。新增模型支持：Reflection Beam-1.0、Yandex AliceAI-Foundation-80B-A3B、Recursive Flint、Muse Spark。 |

---

## 3. 新模型与硬件支持

- **Reflection Beam-1.0**：501B MoE 模型（23B 活跃参数），支持 DFlash2 投机draft —— [#62074](https://github.com/vllm-project/vllm/pull/62074)
- **Yandex AliceAI-Foundation-80B-A3B**：新模型集成 —— [#57963](https://github.com/vllm-project/vllm/pull/57963)
- **Recursive Flint**：40B MoE（2.5B 活跃参数）—— [#62938](https://github.com/vllm-project/vllm/pull/62938)
- **SM12x (Blackwell)**：RTX PRO 6000 上 DeepSeek-V4.1-Flash 的开发进行中 —— [#56892](https://github.com/vllm-project/vllm/issues/56892)
- **SM8x (Ampere A100/A800)**：DeepSeek-V4-Flash 支持需求 —— [#50576](https://github.com/vllm-project/vllm/issues/50576) *（127 条评论）*

---

## 4. 性能与优化

| 领域 | 变更内容 | PR/Issue |
|------|---------|----------|
| **DeepSeek-V4.1 解码注意力** | 在 TP2/TP4 场景下 ≤16 token 时通过 swap-AB CuTe DSL 内核实现 1.6–2.15 倍加速（SM10x） | [#62633](https://github.com/vllm-project/vllm/pull/62633) |
| **KV Offload** | 按请求组发布异步查找结果以降低延迟 | [#57474](https://github.com/vllm-project/vllm/pull/57474) |
| **调度器** | 修复无上限的单独 prefill chunk 调度问题 | [#60485](https://github.com/vllm-project/vllm/pull/60485) |
| **Mooncake KV 连接器** | 传输后端重构 + TENT 支持 | [#64486](https://github.com/vllm-project/vllm/pull/64486) |
| **GLM 5.3** | 性能优化追踪 | [#57406](https://github.com/vllm-project/vllm/issues/57406) |
| **ROCm/Qwen3.8-Flash-Next** | gfx950 / MI355X 优化追踪 | [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **批次不变性** | 功能与性能优化追踪 | [#27433](https://github.com/vllm-project/vllm/issues/27433) *（104 条评论，24 👍）* |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 详情 |
|----------|-------|---------|
| **高** | DeepSeek-V4-Flash 在 temperature=0 时非确定性 | 当 `prompt length > indexer_budget` 时，贪婪解码在 SM12x/GB10 上产生不一致输出 —— [#54521](https://github.com/vllm-project/vllm/issues/54521) |
| **高** | DeepSeek-V4.1-Flash 在 SM120 上解码吞吐量极低 | CUDA graphs 无法使用，使用 `--enforce-eager` 仍慢约 2 倍 —— [#56892](https://github.com/vllm-project/vllm/issues/56892) |
| **高** | DeepSeek-V4-Flash 在 SM12x 上挂起 | `cudagraph_mode=FULL_AND_PIECEWISE` + chunked prefill 在约 6 个请求后导致挂起 —— [#40969](https://github.com/vllm-project/vllm/issues/40969) |
| **高** | MTP 投机解码崩溃 | Qwen3.6-27B-FP8 长序列上发生非法内存访问 —— [#40756](https://github.com/vllm-project/vllm/issues/40756) |
| **中** | 前缀缓存导致输出一致性问题 | 使用 `--enable-prefix-caching` 时输出非确定性 —— [#5543](https://github.com/vllm-project/vllm/issues/5543) |
| **中** | 批次不变性在 torch.compile/CUDA graphs 下对 SM<90 失效 | 影响 Ampere、Ada Lovelace —— [#39096](https://github.com/vllm-project/vllm/issues/39096) |
| **中** | fork 前 libgomp 工作线程挂起 | 已修复 —— [#65286](https://github.com/vllm-project/vllm/pull/65286) |

---

## 6. 这对应用开发者的意义

1. **升级到 v0.33.0**：获取最新的模型集成和 389 位贡献者数周的改进成果。本次发布包含新的 MoE 模型支持，可能对高吞吐量工作负载有重要价值。

2. **Blackwell (SM12x) 用户需谨慎**——DeepSeek-V4 和 V4.1 系列在 RTX PRO 6000 和 DGX Spark 上存在已知的吞吐量和确定性问题。如果稳定性至关重要，考虑在 SM10x 上运行，或等待 [#56892](https://github.com/vllm-project/vllm/issues/56892) 修复。

3. **确定性问题持续存在**——多个问题（#54521、#53257、#40896）报告了 `temperature=0` 时结合前缀缓存和稀疏注意力的非确定性输出。在这些问题解决前，对于需要可复现性的应用应避免这些组合。

4. **Rust 前端正在推进**但尚未达到功能完整——[#44280](https://github.com/vllm-project/vllm/issues/44280) 追踪 parity 进度。当前 Python 前端仍是生产环境的默认选择。

5. **调度器改进已合并**——[#60485](https://github.com/vllm-project/vllm/pull/60485) 修复了长 prefill 在并发工作负载下可能导致延迟峰值的调度边缘情况。

6. **Mooncake P/D  disaggregation 正在推进**——新的 TENT 支持和异步查找优化（#64486、#57474）改进了分布式部署中的 KV 传输。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Digest into Chinese. I need to:
1. Translate all the text content
2. Keep all formatting (headings, tables, lists, bold, etc.)
3. Keep URLs, issue numbers, version tags, code identifiers as-is
4. Use natural technical Chinese, not literal translation
5. Output ONLY the translation, no preamble or explanation

Let me go through and translate this carefully.</think>

# SGLang 速报 — 2026-11-03

## 今日要闻

SGLang v0.5.23 正式发布，带来 **257 位贡献者提交的 1007 个 PR**，是一个重要的里程碑。本次更新新增了对 **Mistral Large 4**（1T 参数 MoE）和 **DeepSeek-V4** 性能优化的原生支持，包括将逆 RoPE 融合到 `wo_a` 的 FP8 量化。同时，关键的 CI 稳定性工作仍在继续（flaky 测试跟踪issue有165条评论），NPU 后端也在快速推进，DeepSeek V4 L3 HiCache 支持和 DSpark 紧凑模式已合入。

---

## 发布与重大变更

| 版本 | 亮点 | 链接 |
|--------|------------|-------|
| **v0.5.23** | 合并 1007 个 PR；257 位贡献者；新模型：Muse Spark Open、Beam-1.0 | [Release](https://github.com/sgl-project/sglang/releases/tag/v0.5.23) |

---

## 新模型与硬件支持

| 模型 | 类型 | 说明 |
|-------|------|-------|
| **Muse Spark Open** | LLM / VLM |  Cookbook 已提供 |
| **Beam-1.0** | LLM / VLM | Cookbook 已提供 |
| **Mistral Large 4** (mistralai/Mistral-Large-4-1T-A52B) | 1T 参数 / 52B 活跃 MoE + Pixtral 视觉 | MLA + DSA 稀疏注意力，跨层 KV 共享，YaRN 扩展至 1M 上下文 |
| **DeepSeek-V4** | NPU | 通过 `npu_memcache` 后端支持 HiCache L3 |

**后端更新：**
- **Intel XPU**：面向 iGPU 的 paged-experts 与 Lookahead Expert Scheduling (LES) 及 SSD 层级的 RFC 已合并（[#46520](https://github.com/sgl-project/sglang/issues/46520)）
- **AMD gfx950 / MI355X**：Qwen3.8-Flash-Next 性能优化跟踪（[#44304](https://github.com/sgl-project/sglang/issues/44304)）
- **NVIDIA Hopper (SM90)**：GLM-5.3-Flash 性能优化跟踪（[#45373](https://github.com/sgl-project/sglang/issues/45373)）

---

## 性能与优化

| 领域 | 变更 | 影响 |
|------|--------|--------|
| **DeepSeek-V4 FP8** | 将逆 RoPE 融合到 `wo_a` 投影 | 消除独立的逆 RoPE 内核和内存往返；激活量化现在可直接看到旋转后的值 |
| **DeepSeek-V4 MLA** | 放宽 CuTe DSL 内核 K 对齐从 1024 到 256 | 隐藏层大小为 3584 或 2560（DeepSeek 风格 MLA）的模型现在可使用融合 A GEMM，而非回退 |
| **Diffusion: FLUX.2 Klein** | 跨步骤缓存参考 K/V | 在单块 B200 上：**4.572 → 4.433 秒（延迟降低 3.03%）** |
| **Diffusion: LTX Video VAE** | 将归一化和填充融合到 channels-last 格式 | 启用 cuDNN 卷积；改善两阶段服务延迟 |
| **Diffusion: Cosmos-Dreams** | 每层前缀 K/V 缓冲区 | 消除每层每步骤 2 次完整 K/V 复制 + 每次提交 O(T) 复制 |
| **AMD ROCm** | diffusion FlyDSL 归一化的 wave 数量自动选择 | 更充分利用 AMD GPU 资源 |
| **MoE (Mooncake)** | 弹性 EP 扩容支持 | 允许在保留容量内添加 rank，同时推理继续进行 |
| **NPU: GLM-5.2** | 2P2D PD 分离精度用例 | 4 节点评估的新 DCP/PCP 变体 |
| **NPU: Ascend 950** | 标准化硬件术语 | 代码库中统一从 A5/Atlas A5 更名为 Ascend 950 |

**进行中：**
- **自适应投机解码**（[#23705](https://github.com/sgl-project/sglang/issues/23705)）——面向可变接受模式的多代理/混合工作负载路线图
- **混合 ChunkPrefill**（[#13626](https://github.com/sgl-project/sglang/issues/13626)）——并发 prefill/decode 批次的高级调度

---

## 稳定性与回归

| 严重程度 | 问题 | 状态 |
|----------|-------|-------|
| **高** | Flaky 测试 / PR 守护期间的 CI 基础设施故障 | [跟踪 #42752](https://github.com/sgl-project/sglang/issues/42752)（165 条评论） |
| **高** | 使用 FlashInfer autotune 时贪婪解码无法跨服务器重启复现（DFLASH） | [Issue #39597](https://github.com/sgl-project/sglang/issues/39597) |
| **中** | Mamba hybrid：`copy_from` 收集所有时间状态 → 并行突发时 CUDA OOM | [Issue #47916](https://github.com/sgl-project/sglang/issues/47916) |
| **中** | Hybrid Mamba + EAGLE：KV-cache 大小估算错误导致误导 `--mem-fraction-static` | [Issue #47830](https://github.com/sgl-project/sglang/issues/47830) |
| **中** | `qwen_vl`：消息文本中包含字面量 `"<image>"` 导致请求以 500 中止 | [Issue #43979](https://github.com/sgl-project/sglang/issues/43979) |
| **低** | LoRA adapter 配置格式错误 → 裸 `KeyError` 缺少文件名 | 在 [PR #48058](https://github.com/sgl-project/sglang/pull/48058) 中修复 |
| **已解决** | Qwen3.8-Flash-Next QSA 与 FP8 KV cache 崩溃（BF16 q vs FP8 k dtype） | [Issue #36545](https://github.com/sgl-project/sglang/issues/36545) |
| **已解决** | Spark2.5 attention 输出门硬编码 sigmoid，忽略配置 | [Issue #37639](https://github.com/sgl-project/sglang/issues/37639) |

---

## 这对应用开发者意味着什么

1. **新的大容量模型可用**：Mistral Large 4（1T 参数，52B 活跃）通过 YaRN 支持 1M 上下文现已可服务——适用于大上下文 RAG 和多代理工作流程。

2. **Rust 服务器多模态 parity**：图像预处理移至 `sglang-processor`，与 Python CPU 路径结果位一致；支持通过 Rust 服务器（`SGLANG_RUST_SERVER=1`）使用 `/v1/chat/completions` 处理图像。

3. **Diffusion 服务改进**：FLUX.2 Klein 和 LTX video VAE 优化已合入；如果您正在运行图像/视频生成，在 B200 硬件上预期延迟降低约 3%。

4. **NPU 生产就绪轨迹**：2026 年下半年 NPU 路线图强调完整的 P/D 分解、并行化、投机解码和分层缓存兼容性——面向 Ascend 硬件的生产部署目标。

5. **注意避坑**：FlashInfer autotune 的贪婪解码复现问题（[#39597](https://github.com/sgl-project/sglang/issues/39597)）——如果需要确定性输出，在修复前请避免使用启用了 autotune 的 `FLASHINFER_TRTLLM_ROUTED` 路径。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English digest about llama.cpp into Chinese. I need to:
1. Translate all headings, body text, and table content
2. Preserve the Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, PR/issue references (#xxxxx), code identifiers, model names, etc. as-is
4. Use natural technical Chinese, the register of a Chinese developer newsletter
5. Output ONLY the translation, no preamble or explanation

Let me go through and translate section by section:

**Heading:** # llama.cpp Digest — 2026-11-03
→ # llama.cpp 动态 — 2026-11-03

**Section 1: Today's Highlights**
The project continues its rapid pace with significant performance work across multiple backends. Notable additions include **Clover model support** (GGUF conversion, model loading, causal hybrid attention), **Pocket TTS voices without voice cloning**, and a major **flash_attn_ext_rows optimization** for multi-sequence inference that reduces unified KV-cache penalties by eliminating mask filtering overhead. Apple platform memory allocation also shifts to `vm_allocate` for better performance.

→ 项目继续快速迭代，多个后端都有重要的性能改进。值得注意的新增功能包括 **Clover 模型支持**（GGUF 转换、模型加载、因果混合注意力）、**Pocket TTS 无需语音克隆的音色**，以及针对多序列推理的 **flash_attn_ext_rows 优化**，通过消除 mask 过滤开销来降低统一 KV-cache 的开销。Apple 平台的内存分配也改为使用 `vm_allocate` 以提升性能。

**Section 2: Releases & Breaking Changes**
The table stays as-is but I'll translate the description and PR columns:

| Release | Description | PR |
|---------|-------------|-----|
| **b12063** | Copy hidden features via device copies | [#31506](https://github.com/ggml-org/llama.cpp/pull/31506) |
| **b12061** | Pocket TTS — support for voices without voice cloning | [#31429](https://github.com/ggml-org/llama.cpp/pull/31429) |
| **b12060** | Add **Clover** model support (AR-only MoE, GGUF conversion, causal hybrid attention) | [#31306](https://github.com/ggml-org/llama.cpp/pull/31306) |

我注意到 PR 表格中包含了多个重要的更新，涵盖了模型支持、内存管理和性能优化。这些更新展示了 llama.cpp 项目在多模型支持和硬件优化方面的持续进步。

新增功能包括内存优化、KV-cache 改进和崩溃修复，涵盖了从设备复制、文本转语音模型到内存分配等多个技术领域。每个 PR 都针对特定的技术挑战，提供了精细的解决方案。

新增了对话框接受 Qwen3-Coder/Nemotron JSON 工具参数密钥的灵活排序，以及 Vulkan 添加 TOP_K_MASK 的改进。摩尔缓存自动共享 CPU 资源，并在 RISC-V vlenb=16 架构上实现了 Q4_0 8x8 矩阵运算优化。

重点关注硬件和模型支持，包括 Clover MoE 架构和 Pocket TTS 语音模型。开发者应重点关注多序列推理优化的潜在应用场景。

SYCL 后端性能显著提升，Intel 处理器通过 DPAS 闪存注意力机制增强了量化 KV 缓存处理能力。新增模型支持扩展了系统应用范围，特别是在多模态领域。

Apple 平台的内存管理改进和 GPU 层级分配修复为系统稳定性带来重要突破。服务器容错性也得到了进一步加强。

建议开发者重点关注 SYCL 在 Intel 显卡上的测试、oneAPI 2026.2 版本的重新构建，以及 MoE 模型在 `--fit` 参数下的兼容性验证。</think>

# llama.cpp 动态 — 2026-11-03

## 1. 今日亮点

项目继续快速迭代，多个后端都有重要的性能改进。值得注意的新增功能包括 **Clover 模型支持**（GGUF 转换、模型加载、因果混合注意力）、**Pocket TTS 无需语音克隆的音色**，以及针对多序列推理的 **flash_attn_ext_rows 优化**，通过消除 mask 过滤开销来降低统一 KV-cache 的开销。Apple 平台的内存分配也改为使用 `vm_allocate` 以提升性能。

---

## 2. 版本发布与破坏性变更

| 版本 | 描述 | PR |
|------|------|-----|
| **b12063** | 通过设备复制复制隐藏特征 | [#31506](https://github.com/ggml-org/llama.cpp/pull/31506) |
| **b12061** | Pocket TTS — 支持无需语音克隆的音色 | [#31429](https://github.com/ggml-org/llama.cpp/pull/31429) |
| **b12060** | 新增 **Clover** 模型支持（纯 AR MoE，GGUF 转换，因果混合注意力） | [#31306](https://github.com/ggml-org/llama.cpp/pull/31306) |
| **b12059** | flash_attn_ext_rows — 多序列统一 KV 高效实现 | [#29510](https://github.com/ggml-org/llama.cpp/pull/29510) |
| **b12058** | 修复 imatrix `--nextn` 崩溃问题 | [#31522](https://github.com/ggml-org/llama.cpp/pull/31522) |
| **b12057** | 简化 context 设置器 | [#29730](https://github.com/ggml-org/llama.cpp/pull/29730) |
| **b12054** | ggml-zdnn 与主机共享缓冲区 | [#31481](https://github.com/ggml-org/llama.cpp/pull/31481) |
| **b12053** | Apple 平台改用 `vm_allocate` 替代 `posix_memalign` | [#31437](https://github.com/ggml-org/llama.cpp/pull/31437) |
| **b12052** | OpenCL 新增 topk_mask | [#31441](https://github.com/ggml-org/llama.cpp/pull/31441) |
| **b12050** | Vulkan 改进 RDNA3/RDNA4 小规模场景的 split-K 选择策略 | [#30146](https://github.com/ggml-org/llama.cpp/pull/30146) |

---

## 3. 新模型与硬件支持

- **Clover** — 纯 AR 架构 MoE，支持 GGUF 转换、共享注意力、循环状态、MoE 和 LoRA 辅助模块
- **Pocket TTS** — 支持预定义音色（直接附带 backbone KV 状态，无需语音克隆）
- **Chatterbox TTS** — 新增模型支持（开发中）— PR [#30993](https://github.com/ggml-org/llama.cpp/pull/30993)

---

## 4. 性能优化

| 领域 | 改进内容 | PR/Issue |
|------|----------|----------|
| **多序列 KV-cache** | 新增 `flash_attn_ext_rows` 扩展，消除多序列推理时的 mask 过滤开销 | [#29510](https://github.com/ggml-org/llama.cpp/pull/29510) |
| **Vulkan** | 改进 RDNA3/RDNA4 小规模场景的 split-K 选择策略 | [#30146](https://github.com/ggml-org/llama.cpp/pull/30146) |
| **OpenCL** | 新增 `topk_mask` 支持 | [#31441](https://github.com/ggml-org/llama.cpp/pull/31441) |
| **Vulkan** | 修复 TOP_K_MASK RPC 处理问题 | [#31544](https://github.com/ggml-org/llama.cpp/pull/31544) |
| **RISC-V** | Q4_0 8×8 gemv/gemm 现已支持 `vlenb=16` | [#28642](https://github.com/ggml-org/llama.cpp/pull/28642) |
| **Intel Vulkan** | 新增 Prefill 阶段 FA 内核 | [#29357](https://github.com/ggml-org/llama.cpp/pull/29357) |
| **HIP/RDNA2** | 扩展 Q5_K 和 Q6_K 瓦片宽度（J=128） | [#27558](https://github.com/ggml-org/llama.cpp/pull/27558) |
| **SYCL** | 针对 Xe2（B580、B570、B70、Lunar Lake、Panther Lake）的 DPAS 闪存注意力内核现已支持量化 KV cache（q4_0、q8_0） | [#31125](https://github.com/ggml-org/llama.cpp/pull/31125) |
| **CUDA** | 防止高并发场景下即将使用的图被提前驱逐 | [#30662](https://github.com/ggml-org/llama.cpp/pull/30662) |
| **CUDA** | 融合 MMQ 中的 NVFP4 gate/up 矩阵乘法和 GLU 操作 | [#31296](https://github.com/ggml-org/llama.cpp/pull/31296) |
| **NCCL** | 多节点 tensor parallelism 支持 | [#28967](https://github.com/ggml-org/llama.cpp/pull/28967) |
| **MoE cache** | 自动 CPU 共享，配合 CRF 机制处理 CPU 未命中场景 | [#31286](https://github.com/ggml-org/llama.cpp/pull/31286) |
| **CI** | SYCL 升级至 oneAPI 2026.2、oneDNN 2026.1、Level Zero 1.34.0 | [#31540](https://github.com/ggml-org/llama.cpp/pull/31540) |

---

## 5. 稳定性与回归问题

| 问题 | 严重程度 | 描述 | 状态 |
|------|----------|------|------|
| [#27845](https://github.com/ggml-org/llama.cpp/issues/27845) | **高** | 双 Intel B70 SYCL 后端使用 `-sm tensor` 时可能存在内存泄漏 | 待处理 — 21 条评论 |
| [#31029](https://github.com/ggml-org/llama.cpp/issues/31029) | **高** | SYCL bf 转换指令在 Arrow Lake 核显上不受支持 | 待处理 — 14 条评论 |
| [#30697](https://github.com/ggml-org/llama.cpp/issues/30697) | **中** | `--moe-cache-mib` 在 Vulkan 环境下崩溃（RX 6900 XT，Windows） | 待处理 — 8 条评论 |
| [#27910](https://github.com/ggml-org/llama.cpp/issues/27910) | **高** | Qwen3.8-27B Q6_K 在 CUDA 下出现显示丢失/GSP 重置（RTX 5090） | 已关闭 — 8 条评论 |
| [#31538](https://github.com/ggml-org/llama.cpp/issues/31538) | **中** | MSVC 编译问题（2026-11-02 报告） | 待处理 — 4 条评论 |
| [#31445](https://github.com/ggml-org/llama.cpp/issues/31445) | **中** | Vulkan 后端自 #27512 起编译失败（GCC 16.2 / Clang 22） | 待处理 — 2 条评论 |

**已合并的修复：**
- [#31570](https://github.com/ggml-org/llama.cpp/pull/31570): 空 kv_rows 序列不再错误返回 0
- [#31569](https://github.com/ggml-org/llama.cpp/pull/31569): 设置 `n_gpu_layers` 时将跳过的 NextN 层纳入计算（修复 `--fit` 导致的 CPU 残留层问题）
- [#31478](https://github.com/ggml-org/llama.cpp/pull/31478): 对超出范围的 `grammar_triggers` 类型抛出明确错误而非直接终止

---

## 6. 应用开发者需要关注的事项

1. **多序列推理效率提升** — `flash_attn_ext_rows` 优化直接惠及处理并发对话或批量请求的智能体应用，通过消除 KV-cache mask 过滤开销提升吞吐量。

2. **SYCL 后端日趋成熟** — Intel 的 DPAS 闪存注意力内核现已支持量化 KV cache（q4_0、q8_0）在 Xe2 硬件上运行，显著提升了小批量场景下的解码性能。

3. **新模型支持** — Clover（纯 AR MoE）以及扩展的 TTS 功能（Pocket TTS 无需克隆、Chatterbox）扩大了多模态应用对模型的支持范围。

4. **Metal/CPU 内存优化** — 在所有 Apple 平台改用 `vm_allocate` 优化了 iOS/macOS 部署场景下的内存管理。

5. **--fit 标志修复** — 使用自动 GPU 卸载时，MoE 模型的层级分配现已正确处理 MTP 层，解决了之前 [#31531](https://github.com/ggml-org/llama.cpp/issues/31531) 报告中残留 CPU 瓶颈的问题。

6. **服务端鲁棒性增强** — 语法触发器验证现在会抛出规范的错误信息而非直接终止，避免单个畸形请求导致整个服务崩溃。

**部署人员行动项：**
- 如在使用 Intel Arc B70/B580 等 Xe2 硬件的 SYCL 场景，请测试新的 DPAS 闪存注意力内核
- 使用最新版 oneAPI（2026.2）重新构建以获得 SYCL 性能提升
- 验证 MoE 模型在 `--fit` 模式下的行为（n_gpu_layers 计算缺陷已修复）

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Chinese, following specific rules:
- Output ONLY the translation, no preamble or explanation
- Preserve the Markdown structure exactly
- Keep URLs, numbers, identifiers as-is
- Use natural technical Chinese, like a Chinese developer newsletter
- Keep issue/PR references and project names in original form

Let me translate this carefully while maintaining the structure and technical accuracy.</think>

# Ollama 速报 — 2026-11-03

## 1. 今日要闻

Ollama 新增 Rockchip NPU 原生支持，通过全新的 `rocket`/`rknpu` 后端支持 RK3588/RK3586 SoC，可在 Linux 上实现 GGUF 提示词处理的 NPU 卸载。一个关键的 VRAM 预测 bug 被发现：对混合模型（ recurrent/SSM 块如 Qwen3.5/3.8）的 KV cache 计数高出 4–8 倍，导致运行器过早被驱逐。v0.40.14 发布候选版带来 OpenAI 兼容改进和 MLX 优化。

---

## 2. 版本发布与破坏性变更

| 版本 | 变更 | PR |
|------|------|-----|
| **v0.40.14-rc0 → v0.40.14** | CI: 锁定 buildx 版本以解决死锁问题 | [#19373](https://github.com/ollama/ollama/pull/19373) |
| | OpenAI: 保留 Responses 输入内容的可读性 | [#19192](https://github.com/ollama/ollama/pull/19192) |
| | MLX: 对长 top-k 行分块排序 | [#193...](https://github.com/ollama/ollama/pull/193) |

**注意：** 本次发布无破坏性 API 变更。

---

## 3. 新模型与硬件支持

- **Rockchip NPU 后端** — 新增 `rocket`/`rknpu` 后端，为 Linux 上的 RK3588 和 RK3576 SoC 提供原生支持。支持将提示词处理（预填充、MoE、flash attention）卸载到 NPU，同时保留单 token 解码在 CPU 上运行。| [#19480](https://github.com/ollama/ollama/pull/19480)

- **MiMo V2.6 模型支持** — 新增 MiMo V2.6 模型支持。测试模型可通过 `./ollama pull dhiltgen/mimo-v2.6` 获取。| [#19400](https://github.com/ollama/ollama/pull/19400)

- **Qwen3.5 0.8B Q4_K_M 量化** — 请求为 0.8B 模型添加缺失的 `q4_K_M` 量化（目前仅支持 Q8）。CPU 推理将受益于 2 倍加速。| [#19436](https://github.com/ollama/ollama/issues/19436)

---

## 4. 性能与优化

- **MLX Top-K 排序** — 针对 Apple Silicon 优化了长 top-k 行的分块排序。| [#193...](https://github.com/ollama/ollama/pull/193)

- **LLM 日志过滤** — 进行中：除非启用 debug 模式，否则过滤按请求的 `llama-server` 日志。减少每个请求约 20 行插槽记录日志。| [#17913](https://github.com/ollama/ollama/pull/17913)

- **MLX CUDA 库加载** — 修复了在 Linux 上进程内加载捆绑 CUDA 库的问题，避免与主机库冲突。| [#19433](https://github.com/ollama/ollama/pull/19433)

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| **高** | **VRAM 预测对混合模型**（Qwen3.5/3.8 等 recurrent/SSM 块）的 KV cache 计数高出 4–8 倍，无论 `OLLAMA_KV_CACHE_TYPE` 如何设置，始终按 f16 计费。导致即使使用 `keep_alive=-1` 也会过早驱逐运行器。| 进行中 | — |
| **高** | **云端付费订阅无法使用** — 订阅用户支付后仍无法访问 API，多个支持渠道无响应。| 进行中 | — |
| **中** | **qwen2.5vl:3b 视觉推理在 NVIDIA GPU 上失败**，返回 HTTP 500 "token repeat limit reached"；CPU 和纯文本模式正常。| 进行中（重新打开）| — |
| **中** | **Qwen3.5 JSON Schema 约束失效** — 禁用 thinking 后产生异常延续而非受限 JSON。| 进行中 | — |
| **中** | **纯 Vulkan 系统下载 CUDA 驱动** 作为冗余；该社区群体不支持 Vulkan 后端。| 进行中 | — |
| **低** | **macOS 应用 "Restart to update" 循环**，请求管理员权限更改应用所有权。| 进行中 | — |

**已解决：**
- Qwen3.8-27B 混合注意力 GGUFs 现可正常加载（之前缺少第 64 层投影）| [#19459](https://github.com/ollama/ollama/issues/19459)
- lfm2:24b "python" token 解码为空字符串 | [#18785](https://github.com/ollama/ollama/issues/18785)

---

## 6. 对应用开发者的意义

- **Rockchip NPU 支持** 使 Ollama 能够在新型边缘设备（基于 RK3588 的开发板、Android TV、工业控制器）上运行。标准 GGUF 模型在这些 SoC 上推理将降低功耗。

- **VRAM bug 影响混合模型部署** — 如使用 `keep_alive=-1` 运行 Qwen3.5/3.8，运行器可能意外被驱逐。请监控 VRAM 预测值；修复待发布。

- **OpenAI 兼容性改进** — Response ID 现使用更大的随机范围（之前仅 999 个不同值），减少高吞吐量应用中的 ID 冲突。| [#19401](https://github.com/ollama/ollama/pull/19401)

- **新 CLI 功能** — `ollama ls --cloud` 让用户无需拉取即可发现云端模型。| [#19153](https://github.com/ollama/ollama/pull/19153)

- **云端集成修复** — Claude Code 的网页搜索响应现可正确解码（修复了 gzip 压缩处理）。| [#19476](https://github.com/ollama/ollama/pull/19476)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate this LiteLLM Digest from English to Chinese. I need to:

1. Preserve the Markdown structure exactly (headings, tables, lists, etc.)
2. Keep URLs, issue/PR numbers, code references, etc. as-is
3. Use natural technical Chinese suitable for a Chinese developer newsletter
4. No preamble, no explanation, no markdown fences

Let me translate section by section, maintaining the exact structure:

## 1. Today's Highlights

## 2. Releases & Breaking Changes

## 3. New Model & Hardware Support

## 4. Performance & Optimization

## 5. Stability & Regressions

## 6. What This Means for Application Developers

Let me translate carefully:

---

# LiteLLM 每日简报 — 2026-11-03

## 1. 今日要点

LiteLLM 项目正在推进 **Rust 迁移计划**（Issue #31263，33 条评论），目标是实现低于 1ms 的网关延迟。同时，多个流式传输和预算追踪问题正在积极处理中，新增了 **百度千帆** 作为 OpenAI 兼容的接入方式（PR #49777）。

---

## 2. 版本更新与重大变更

- **过去 24 小时内无新版本发布**
- **配置许可证加载变更**：PR #49745 现在在配置加载阶段读取 `general_settings.litellm_license`（在 `allowed_ips` 校验之前），并修复了许可证错误信息中的拼写错误（"envionment" → "environment"）。
  - https://github.com/BerriAI/litellm/pull/49745

---

## 3. 新模型与硬件支持

- **百度千帆 (ModelBuilder)** — PR #49777 新增了 OpenAI 兼容的提供商支持，可用于部署托管的 DeepSeek-V4 模型，并正确控制 thinking 行为。
  - https://github.com/BerriAI/litellm/pull/49777
- **Bedrock Converse 上下文窗口修复** — PR #49768 提升了四个模型的输入窗口限制（Kimi K2.5、Qwen3 Coder Next、Qwen3 Next 80B、Nemotron Nano 3 30B），从 256,000 扩展到更多 tokens。
  - https://github.com/BerriAI/litellm/pull/49768

---

## 4. 性能与优化

- **S3 存储桶名称支持** — PR #37180 将 `s3_bucket_name` 添加到 `OPTIONAL_KWARGS_KEYS`，支持通过配置指定 Bedrock 批处理的输出下载路径（此前仅 `gcs_bucket_name` 可用）。
  - https://github.com/BerriAI/litellm/pull/37180
- **LM Studio 上下文同步** — PR #49597 支持从 LM Studio 本地 API 读取实际上下文窗口限制，提升了自定义实例 ID 的模型检测精度。
  - https://github.com/BerriAI/litellm/pull/49597

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 概述 | PR/修复 |
|----------|-------|---------|--------|
| **高** | #30765 | `/v1/messages` 流式传输在 `thinking` → `text` 块转换后丢失首个 `text_delta`（Anthropic 兼容代理） | — |
| **高** | #49179 | `/key/update` 在请求进行中调用时，会从 `LiteLLM_BudgetWindowSpend` 中扣除该请求的成本 | — |
| **高** | #49675 | v3 限流器：当上游返回 429 时，TPM 计数器未随窗口重置，导致低于 TPM 限制时仍被拒绝 | — |
| **中** | #25214 | Bedrock 推理模型（minimax、kimik2.5、Claude 扩展思考）的内容块转换时流式传输丢失首个块 | — |
| **中** | #49479 | `pass_through_endpoints` 从 JSON-RPC 2.0 请求体中移除 `id` 字段（破坏 JSON-RPC 合规性） | — |
| **中** | #18060 | 使用虚拟 API 密钥时，未授权/错误请求导致无限循环 | — |
| **中** | #46701 | Azure AI Foundry Anthropic 端点在 `azure_ad_token` 泄漏到请求体时返回 400 | — |
| **低** | #49585 | CONTRIBUTING.md 中的 CLA 链接返回 "Bad credentials" 错误 | — |

---

## 6. 对应用开发者的影响

1. **流式传输边界情况**：如果通过 LiteLLM 作为 Anthropic 兼容代理使用 Claude Code 或 Bedrock 推理模型，需注意 thinking 块后的首个内容块可能被丢弃。这会影响依赖持续流式输出的应用。

2. **预算追踪**：在活跃请求进行中，避免调用 `/key/update` 修改预算限额——该请求的成本不会计入窗口总额，导致支出追踪不准确。

3. **JSON-RPC 透传**：如果通过 `pass_through_endpoints` 路由 JSON-RPC 2.0 请求，当前会丢失 `id` 字段。这会导致标准 JSON-RPC 客户端在响应中无法获取该字段。

4. **新提供商**：百度千帆现已成为原生提供商——部署不再需要使用通用的 `openai/` 基础路径，避免了 DeepSeek-V4 thinking 行为的问题。

5. **限流器行为**：在使用 Redis 驱动的 v3 限流且上游返回 429 时，基于 TPM 的拒绝可能会提前触发。请密切监控限流指标。

---

*数据来源：GitHub — BerriAI/litellm | 2026-11-03*</think>

# LiteLLM 每日简报 — 2026-11-03

## 1. 今日要点

LiteLLM 项目正在推进 **Rust 迁移计划**（Issue #31263，33 条评论），目标是实现低于 1ms 的网关延迟。同时，多个流式传输和预算追踪问题正在积极处理中，新增了 **百度千帆** 作为 OpenAI 兼容的接入方式（PR #49777）。

---

## 2. 版本更新与重大变更

- **过去 24 小时内无新版本发布**
- **配置许可证加载变更**：PR #49745 现在在配置加载阶段读取 `general_settings.litellm_license`（在 `allowed_ips` 校验之前），并修复了许可证错误信息中的拼写错误（"envionment" → "environment"）。
  - https://github.com/BerriAI/litellm/pull/49745

---

## 3. 新模型与硬件支持

- **百度千帆 (ModelBuilder)** — PR #49777 新增了 OpenAI 兼容的提供商支持，可用于部署托管的 DeepSeek-V4 模型，并正确控制 thinking 行为。
  - https://github.com/BerriAI/litellm/pull/49777
- **Bedrock Converse 上下文窗口修复** — PR #49768 提升了四个模型（Kimi K2.5、Qwen3 Coder Next、Qwen3 Next 80B、Nemotron Nano 3 30B）的输入窗口限制，从 256,000 提升至 262,144 tokens。
  - https://github.com/BerriAI/litellm/pull/49768

---

## 4. 性能与优化

- **S3 存储桶名称支持** — PR #37180 将 `s3_bucket_name` 添加到 `OPTIONAL_KWARGS_KEYS`，支持通过配置指定 Bedrock 批处理的输出下载路径（此前仅 `gcs_bucket_name` 可用）。
  - https://github.com/BerriAI/litellm/pull/37180
- **LM Studio 上下文同步** — PR #49597 支持从 LM Studio 本地 API 读取实际上下文窗口限制，提升了自定义实例 ID 的模型检测精度。
  - https://github.com/BerriAI/litellm/pull/49597

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 概述 | PR/修复 |
|----------|-------|---------|--------|
| **高** | #30765 | `/v1/messages` 流式传输在 `thinking` → `text` 块转换后丢失首个 `text_delta`（Anthropic 兼容代理） | — |
| **高** | #49179 | `/key/update` 在请求进行中调用时，会从 `LiteLLM_BudgetWindowSpend` 中扣除该请求的成本 | — |
| **高** | #49675 | v3 限流器：当上游返回 429 时，TPM 计数器未随窗口重置，导致低于 TPM 限制时仍被拒绝 | — |
| **中** | #25214 | Bedrock 推理模型（minimax、kimik2.5、Claude 扩展思考）的内容块转换时流式传输丢失首个块 | — |
| **中** | #49479 | `pass_through_endpoints` 从 JSON-RPC 2.0 请求体中移除 `id` 字段（破坏 JSON-RPC 合规性） | — |
| **中** | #18060 | 使用虚拟 API 密钥时，未授权/错误请求导致无限循环 | — |
| **中** | #46701 | Azure AI Foundry Anthropic 端点在 `azure_ad_token` 泄漏到请求体时返回 400 | — |
| **低** | #49585 | CONTRIBUTING.md 中的 CLA 链接返回 "Bad credentials" 错误 | — |

---

## 6. 对应用开发者的影响

1. **流式传输边界情况**：如果通过 LiteLLM 作为 Anthropic 兼容代理使用 Claude Code 或 Bedrock 推理模型，需注意 thinking 块后的首个内容块可能被丢弃。这会影响依赖持续流式输出的应用。

2. **预算追踪**：在活跃请求进行中，避免调用 `/key/update` 修改预算限额——该请求的成本不会计入窗口总额，导致支出追踪不准确。

3. **JSON-RPC 透传**：如果通过 `pass_through_endpoints` 路由 JSON-RPC 2.0 请求，当前会丢失 `id` 字段。这会导致标准 JSON-RPC 客户端在响应中无法获取该字段。

4. **新提供商**：百度千帆现已成为原生提供商——部署不再需要使用通用的 `openai/` 基础路径，避免了 DeepSeek-V4 thinking 行为的问题。

5. **限流器行为**：在使用 Redis 驱动的 v3 限流且上游返回 429 时，基于 TPM 的拒绝可能会提前触发。请密切监控限流指标。

---

*数据来源：GitHub — BerriAI/litellm | 2026-11-03*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate this GitHub digest about Unsloth into Simplified Chinese. I need to:

1. Translate the content while preserving all Markdown structure exactly
2. Keep all technical identifiers, URLs, issue numbers, etc. as-is
3. Use natural technical Chinese register (like a Chinese developer newsletter)
4. Output ONLY the translation, no preamble or explanation

Let me translate section by section:

**Section 1: Today's Highlights**
- "Unsloth continues active development across model support and infrastructure." - 继续在新模型支持与底层基础设施方面保持活跃开发
- "A notable feature request emerged for LiquidAI's LFM3-1.7B model family" - 值得关注的功能请求：为 LiquidAI 新推出的 LFM3-1.7B 模型系列添加支持
- "On the stability front" - 稳定性方面
- "a memory leak on Windows" - Windows 端内存泄漏问题
- "the missing 'thinking' display in v0.1.913-beta" - v0.1.913-beta 中"思考中"显示缺失的问题
- "Backend work includes FSDP2 gradient handling improvements and FlexAttention tile fixes for sm86/sm89 GPUs" - 后端工作包括 FSDP2 梯度处理优化，以及针对 sm86/sm89 GPU 的 FlexAttention tile 修复

**Section 2: Releases & Breaking Changes**
- "No releases were published in the last 24 hours." - 过去 24 小时内未发布新版本。

**Section 3: New Model & Hardware Support**
- The table needs to be translated while keeping the structure
- Item -> 项目/描述
- Description -> 描述
- Link -> 链接

**Section 4: Performance & Optimization**
- Translate while keeping technical terms and PR numbers


- Use Chinese punctuation while maintaining English formatting

**Section 5: Stability & Regressions**
- Translate the severity descriptions: High -> 高, Medium -> 中, Low -> 低
- Keep the table structure with proper Chinese translations

**Section 6: What This Means for Application Developers**
- Translate the implications and recommendations
- Keep technical terms in English or with proper Chinese equivalents
- Maintain the bullet points and technical details

Let me write out the full translation now:</think>

# Unsloth 开发动态 — 2026-11-03

## 1. 今日要点

Unsloth 继续在新模型支持与底层基础设施方面保持活跃开发。值得关注的功能请求：为 **LiquidAI 新推出的 LFM3-1.7B** 模型系列 (#15588) 添加支持，该系列采用了更富有表现力的新型主干架构。稳定性方面存在多个回归问题，包括 Windows 端内存泄漏以及 v0.1.913-beta 中"思考中"显示缺失的问题。后端工作包括 FSDP2 梯度处理优化，以及针对 sm86/sm89 GPU 的 FlexAttention tile 修复。

---

## 2. 版本发布与重大变更

过去 24 小时内未发布新版本。

---

## 3. 新模型与硬件支持

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **LFM3-1.7B** | 功能请求：为 LiquidAI 新推出的 LFM3 系列（采用更富有表现力的主干架构）添加支持 | [#15588](https://github.com/unslothai/unsloth/issues/15588) |
| **Vulkan on RX 5700 XT** | 缺陷报告：RX 5700 XT (Windows 10 22H2) 无法使用 Vulkan | [#16395](https://github.com/unslothai/unsloth/issues/16395) |
| **DeepSeek V4.1 Flash GGUF** | 模板修复：修正了对话历史中图片标记的处理逻辑 | [#15285](https://github.com/unslothai/unsloth/issues/15285) |
| **DeepSeek 4.1 1017 models** | 用户反馈：无法加载 hub 上任何 DeepSeek 4.1 1017 未审查版本模型 | [#15412](https://github.com/unslothai/unsloth/issues/15412) |

---

## 4. 性能优化

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **FSDP2 梯度处理** | 将未同步 micro-batch 上的 FP16 复制梯度以 float32 求和，确保精度 | [#16173](https://github.com/unslothai/unsloth/pull/16173) |
| **Packing 元数据修复** | 防止编译后的 `inference_mode` 元数据被错误传递给训练步骤 | [#16183](https://github.com/unslothai/unsloth/pull/16183) |
| **FlexAttention tile 修复** | 保留 float32 调用在默认 tile 上以避免共享内存限制（sm86/sm89 GPU，L4 head-dim 256 修复：需要 147456 vs 硬件限制 101376） | [#16172](https://github.com/unslothai/unsloth/pull/16172) |
| **Decode graph 增长策略** | Eager KV cache 改为按 eager 增量增长（1,536 → 2,048 而非 3,072），而非图加倍策略 | [#16191](https://github.com/unslothai/unsloth/pull/16191) |
| **RoPE 缓存索引** | 编译后的 stock-model RoPE 调用现可索引缓存而无需主机读取开销 | [#16182](https://github.com/unslothai/unsloth/pull/16182) |
| **FP8/NVFP4 缓存标签** | 将编译缓存标签传递给渲染和编译线程（torch 2.12+） | [#16158](https://github.com/unslothai/unsloth/pull/16158) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 描述 | 链接 |
|----------|-------|-------------|------|
| **高** | Windows 内存泄漏 | 每次使用后 Drive C 丢失 200-400 MB，无清理残余数据的方法 | [#14487](https://github.com/unslothai/unsloth/issues/14487) |
| **高** | Thinking 显示缺失 | v0.1.913-beta 中"思考中"显示区在 Windows 11 上消失 | [#16467](https://github.com/unslothai/unsloth/issues/16467) |
| **中** | 自动卸载失效 | 空闲时自动卸载功能无法正常工作 | [#16484](https://github.com/unslothai/unsloth/issues/16484) |
| **中** | 模型加载失败 | 桌面更新后之前可用的模型现在无法加载（macOS 15.0.1） | [#15932](https://github.com/unslothai/unsloth/issues/15932) |
| **中** | MiniMax-H3 崩溃 | Studio 视频：Windows 上 MiniMax-H3 使用 Auto attention 时因"No available kernel"崩溃（torch 未含 flash attention） | [#16294](https://github.com/unslothai/unsloth/issues/16294) |
| **中** | 误导性内存错误 | 生成过程中加载另一个模型时显示误导性的"GPU 内存未释放"错误 | [#16436](https://github.com/unslothai/unsloth/issues/16436) |
| **低** | 模型 hub 分页 | Gemini 连接仅加载前 20 个模型的第一页 | [#16432](https://github.com/unslothai/unsloth/issues/16432) |

---

## 6. 对应用开发者的意义

- **生产环境慎用 Windows 部署** — 内存泄漏问题 (#14487) 修复前，每次推理会话都会在 Drive C 上遗留 200-400 MB 无法释放。
- **DeepSeek 4.1 用户**：GGUF 模板修复已合入 #15285，但模型 hub 加载问题依然存在 (#15412)。如遇错误，可尝试直接通过路径加载模型而非从 hub 拉取。
- **高吞吐 workloads**：FSDP2 梯度修复 (#16173) 与 decode graph 增长优化 (#16191) 应能提升长文本生成场景下的训练稳定性和推理延迟。
- **GPU 显存管理**：若在 sm86/sm89 GPU（如 L4）上运行，FlexAttention tile 修复 (#16172) 解决了 head-dim 256 配置下的编译失败问题。
- **8GB GPU TTS**：近期 PR (#16514) 改进了 TTS 模型尺寸判断 — 之前因过大被拒绝的模型现在可回退到 CPU RAM 运行而非直接报错。
- **关注会话刷新**：PR #16468 改善了并发会话处理 — 如运行多个 Studio 窗口，token 刷新不应再导致其他窗口意外登出。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*