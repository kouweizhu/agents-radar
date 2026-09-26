# AI 基础设施日报 2026-09-26

> 生成时间: 2026-09-26 00:49 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this cross-project AI infrastructure report from English to Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Use natural technical Chinese - the register of a Chinese developer newsletter, not literal word-for-word translation

Let me translate this carefully while preserving the structure and technical accuracy.</think>

# 跨项目 AI 基础设施报告 — 2026-09-26

## 1. 生态系统概览

今日 AI 基础设施领域呈现清晰的层级划分，且各层之间的互操作性不断增强。vLLM 和 SGLang 继续主导生产级推理服务层，围绕 DeepSeek V4.1 优化展开大量工作，而 llama.cpp 仍保持其作为本地参考运行时的地位。Ollama 正在推动 MLX 成为 Apple Silicon 的一等公民后端，LiteLLM 正在强化其网关层（加入加密和多副本限流功能），Unsloth 则在扩展微调能力并支持更多推理引擎。总体效果是一个日趋成熟的技术栈——推理引擎（vLLM/SGLang）、本地运行时（llama.cpp/Ollama）、网关（LiteLLM）和训练工具（Unsloth）正变得更加可组合——这是相对于 2024 年各自为政方式的显著转变。

---

## 2. 活动对比

| 项目 | 新增 Issue（24h） | 新增 PR（24h） | Release（24h） | 发布类型 |
|------|------------------|----------------|----------------|----------|
| **vLLM** | +5（569 个） | +7（1,773 个） | 0 | — |
| **SGLang** | +3（40 个） | +9（370 个） | 0 | — |
| **llama.cpp** | +6（631 个） | +3（2,343 个） | 7 次提交 | 补丁修复 |
| **Ollama** | +5（1,007 个） | +3（2,480 个） | 1（v0.40.0-rc1） | 功能更新（MLX 默认） |
| **LiteLLM** | +4（~500 个） | +11（~333 个） | 4（v1.98.1–v1.104.0-dev） | 补丁 + 开发版 |
| **Unsloth** | +3（63 个） | +4（333 个） | 0 | — |

**观察：**
- **LiteLLM** 发布速度最快（24h 内 4 个版本），反映了其网关角色需要频繁更新提供商和定价信息。
- **llama.cpp** 原始提交量最高（7 次提交），保持着其补丁优化节奏。
- **Ollama** 发布了一个重要的功能版本（MLX 默认），是近期首次更新。
- **vLLM/SGLang** PR 活跃度高但无版本发布——其更改正在向下一个 vLLM 小版本积累。

---

## 3. 模型支持竞赛

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|-----------|------|--------|-----------|--------|---------|---------|
| **DeepSeek V4.1** | ✅（CUDA + MXFP8） | ✅（CUDA + AMD gfx950） | — | — | ✅（Fireworks 定价） | — |
| **DeepSeek V4 Flash Vision** | — | — | — | ✅（回归修复） | ✅（定价修复） | — |
| **Qwen3.8（Flash/Thinking）** | ✅ | ✅ | — | ✅（工具解析器修复） | — | — |
| **GLM-5.3** | ✅（ROCm） | ✅ | — | — | — | — |
| **Gemma4** | ✅ | ✅（OOT attention） | — | ✅（解析器修复） | — | — |
| **MiniMax-M3** | — | ✅（fused MXFP8） | — | — | — | — |
| **K2 Horizon** | — | — | ✅（已请求） | — | — | — |
| **Prism PQ2_0/PTQ1_0** | — | — | ✅（已请求） | — | — | — |
| **Sail provider** | — | — | — | — | ✅（新增） | — |
| **System One（Nimble/Tev）** | — | — | — | ✅（评分 API） | — | — |
| **ModelScope** | — | — | — | — | — | ✅（新增） |

**竞赛评估：**
- **DeepSeek V4.1**：vLLM 和 SGLang 都投入大量精力；SGLang 在 AMD gfx950 支持上略有优势，vLLM 在 MXFP8 量化上领先。这是竞争最激烈的模型家族。
- **Qwen3.8**：所有项目都支持；vLLM/SGLang 优化内核，Ollama 修复工具调用 bug，llama.cpp 正在上游支持。
- **AMD 硬件**：SGLang 和 Unsloth 在 gfx950/gfx1151 上最活跃；llama.cpp 有 ROCm 问题，Unsloth 有多个 AMD VRAM bug 待解。
- **LiteLLM 的提供商扩展**：Sail、Jev/Laya 和 Fireworks 优先级梯队表明 LiteLLM 的网关覆盖扩展速度快于竞争对手。

---

## 4. 性能前沿

| 优化方向 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------|------|--------|-----------|--------|---------|---------|
| **KV 缓存/卸载** | 批处理不变性、TP/SP、异步 TP | DeepSeek Engram wkv 分片 | — | — | — | KV 缓存扫描（Benchmarks 页面） |
| **量化** | MXFP8（SM100/SM103）、W4A4 | MXFP8、FP4 索引器 | Q5_K（OpenCL） | MLX 默认 | — | int8 Hadamard（Qwen-Image） |
| **内核融合** | WO-A + 逆 RoPE（DSv4）、GDN 元数据 | Mamba block-table gather（6x）、DSv4 ratio-2 | FWHT >512（Metal）、FA per-dtype | MLX CUDA 内核 | — | cuDNN 缓存复用 |
| **批处理** | — | — | — | — | 限流（多副本） | — |
| **分布式服务** | TP、SP、异步 TP、投机解码 | DCP（Decode Context Parallelism）、SWA | — | — | 路由回退 | — |
| **推理引擎** | vLLM（默认） | vLLM、SGLang（新增） | — | — | — | vLLM、SGLang（新增） |

**前沿所在：**

1. **DeepSeek V4.1 优化**是 vLLM 和 SGLang 的核心战场。主要方向包括融合内核（WO-A + RoPE、Mamba、Engram wkv）、MXFP8/FP4 量化以及 TP 分片。这是所有项目中性能工作推进最快的领域。

2. **量化技术正在扩展**：vLLM 在 Hopper 上推进 MXFP8，llama.cpp 添加 Q5_K OpenCL 内核，Unsloth 改进 Hadamard 旋转的 int8 精度。

3. **分布式服务正在走向成熟**：vLLM 的批处理不变性工作（在不变性条件下禁用 SP/异步 TP）和 SGLang 的 DCP 路线图表明，多 GPU 推理正从实验阶段迈向生产级。

4. **LiteLLM 的运维重点**：虽然不是性能引擎，但其 HTTP 客户端重构（#43245）和限流修复（#43251）解决的是网关层的运维性能问题。

---

## 5. 层级定位

| 层级 | 项目 | 主要角色 |
|------|------|----------|
| **训练/微调** | Unsloth | GPU 加速微调（CUDA、ROCm、MLX、Metal） |
| **本地运行时** | llama.cpp、Ollama | 跨平台本地推理（CPU、CUDA、Metal、ROCm、Vulkan、MPS） |
| **生产推理引擎** | vLLM、SGLang | 高吞吐数据中心推理，支持 TP/SP、量化、投机解码 |
| **网关/聚合层** | LiteLLM | 多提供商代理、成本追踪、限流、可观测性 |
| **开发/实验** | Unsloth（Studio）、Ollama | 本地模型探索和基准测试的 UI |

**关键差异：**
- **vLLM vs SGLang**：同属推理服务层，但 SGLang 在 AMD ROCm 和 DeepSeek 专用内核上更激进；vLLM 在硬件支持和量化选项上更广泛。
- **llama.cpp vs Ollama**：llama.cpp 是引擎（被 Ollama、llm.cpp 等使用）；Ollama 在其基础上封装了易用的 CLI/服务器，并提供 MLX 后端。
- **LiteLLM 的独特定位**：唯一处于网关层的项目；其他都是引擎或训练工具。其加密 PR（#43255）表明企业级需求正在增长。
- **Unsloth 的垂直整合**：现已覆盖训练（微调）和推理（vLLM/SGLang 后端），定位为端到端的本地 AI 技术栈。

---

## 6. 趋势信号

| 趋势 | 证据 | 对开发者的意义 |
|------|------|----------------|
| **AMD ROCm 晋升为一等公民** | SGLang gfx950 内核工作、Unsloth gfx950 支持、llama.cpp ROCm fp8 提升 | 预计到 2027 年 Q1，AMD MI300/MI355 将可用于生产推理。在 ROCm 6.2+ 上仔细测试；版本不匹配会导致静默崩溃。 |
| **MLX 成为 Apple Silicon 默认** | Ollama v0.40.0-rc1 将 MLX 设为默认 | 不再需要 `--mlx` 标志。原生效能现在自动启用。注意在 32GB Mac 上运行 agent 工作负载时的内存压力。 |
| **Rust 后端整合** | SGLang TreeCore（Rust）已默认；LiteLLM 使用 Rust 加密密钥 | 更多项目在性能关键路径使用 Rust。预计后续版本冷启动更快、内存开销更低。 |
| **多引擎推理** | Unsloth 新增 vLLM + SGLang 作为后端；LiteLLM 新增 Sail provider | "单一引擎"时代正在结束。根据模型/硬件选择引擎：vLLM 广泛支持，SGLang 适合 DeepSeek 工作负载，llama.cpp 追求最大可移植性。 |
| **成本追踪强化** | LiteLLM 修复 DeepSeek V4P1 和 MAI 定价；新增凭证加密 | 企业级支出可见性正在改善。预计网关的令牌计数和成本归属将更加精准。 |
| **DeepSeek V4.1 优化竞赛** | vLLM 和 SGLang 内核工作密集 | 如果运行 DeepSeek 模型，接下来 2-3 个 vLLM 版本将有显著的延迟提升。关注融合内核 PR。 |
| **投机解码走向生产** | vLLM 拒绝无效 draft slot；SGLang SWA 窗口修复 | 投机解码正从实验走向成熟。生产部署可开始为延迟敏感工作负载测试。 |

**需要关注的事项：**

1. **vLLM 下一个点版本**——预计包含 DeepSeek V4.1 融合内核和批处理不变性修复。监控 PR #58634（WO-A 融合）和 #58737（Mamba 内核融合）。

2. **AMD 稳定性时间线**——Unsloth 和 SGLang 正在积极修复 AMD 问题。查看 Unsloth #11498（GPU 重置）和 SGLang #40926（HiCache + Mamba cudaHostRegister）的解决状态。

3. **LiteLLM 加密推广**——PR #43255 对静态凭证加密。升级生产网关前审查迁移步骤。

4. **Unsloth 的 Benchmarks 页面**——即将推出的 KV 缓存扫描和投机解码基准测试将帮助从业者无需编写脚本即可调优 GGUF 推理。

5. **Ollama 的 MLX 采用曲线**——MLX 已成为默认，关注之前需要 CUDA 的 Apple Silicon 优先型 AI 应用新类别。

---

*2026-09-26 跨项目分析。数据来源于 vLLM、SGLang、llama.cpp、Ollama、LiteLLM 和 Unsloth 仓库。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM Daily Digest into Chinese. I need to:
1. Translate all headings, body text, and table content
2. Keep all technical identifiers, URLs, issue numbers, code references as-is
3. Maintain the exact Markdown structure
4. Use natural technical Chinese (like a developer newsletter)

Let me go through this carefully:

---

# vLLM 每日简报 — 2026-09-26

## 今日要点

vLLM 项目继续深度投入 DeepSeek-V4.1 优化，新增了针对 MXFP8 量化的融合内核和 TP 分布式分片，同时在批量不变性（batch invariance）和 Rust 前端功能对标方面也有积极进展。多个 bug 修复围绕流式 logprobs、投机解码和 KV 卸载展开，社区还就请求级 derender 输出和 KV 流水线并行的新 RFC 进行了讨论。

---

## 版本发布与重大变更

过去 24 小时内无版本发布。

---

## 新模型与硬件支持

| 主题 | 描述 | 链接 |
|------|------|------|
| **ROCm MI355X** | Qwen3.8-2.4T-A95B gfx950 / MI355X 性能优化追踪 | [#57149](https://github.com/vllm-project/vllm/issues/57149) |
| **GLM 5.3** | GLM 5.3 架构性能优化追踪 | [#57406](https://github.com/vllm-project/vllm/issues/57406) |
| **DeepSeek-V4.1** | SM100/SM103 上支持新型 MXFP8 量化，融合 WO-A + 逆 RoPE | [#58634](https://github.com/vllm-project/vllm/pull/58634) |

---

## 性能与优化

| 领域 | 变更 | 影响 | PR/Issue |
|------|------|------|----------|
| **DeepSeek V4.1** | 在 SM100/SM103 上融合小批次 WO-A + 逆 RoPE + MXFP8 量化 | 降低 O-projection 延迟（GB200 上约 11-12µs） | [#58634](https://github.com/vllm-project/vllm/pull/58634) |
| **Mamba** | 将 align block-table gather 从 7 个 Triton 内核融合为 1 个 | **6 倍加速**，适用于所有 shape | [#58737](https://github.com/vllm-project/vllm/pull/58737) |
| **Spec Decode** | 消除 GDN 元数据构建中约 11µs/步的主机调度开销 | 降低每步开销 | [#58732](https://github.com/vllm-project/vllm/pull/58732) |
| **DeepSeek V4.1** | 在 TP ranks 间分片 Engram wkv 投影 | 消除 TP 部署中的冗余计算 | [#58678](https://github.com/vllm-project/vllm/pull/58678) |
| **DSv4 + DFlash** | 针对稀疏 top-k 和 input-prep 的 Triton 特化进行 JIT 预热 | 消除推理中途的编译卡顿 | [#58559](https://github.com/vllm-project/vllm/pull/58559) |
| **Batch Invariance** | 启用批量不变性时禁用序列并行 / 异步 TP | 性能提升 | [#58721](https://github.com/vllm-project/vllm/pull/58721) |
| **DeepSeek V4.1** | 使用融合的 MLP 替换分离的 GELU + Dropout | 减少内核调用开销 | [#58689](https://github.com/vllm-project/vllm/pull/58689) |
| **TP 通信** | 在 TP ranks 间流水线化 WKV 投影计算 | 降低延迟 | [#58612](https://github.com/vllm-project/vllm/pull/58612) |

**VLM 推理**

| 变更 | 影响 | PR |
|------|------|-----|
| 为 VLM 推理添加持续 batching 支持 | 改善 VLM 部署的吞吐量 | [#58755](https://github.com/vllm-project/vllm/pull/58755) |
| 优化 VLM 推理中的图像预处理管线 | 减少 VLM 推理的延迟 | [#58748](https://github.com/vllm-project/vllm/pull/58748) |

---

## 稳定性与回归

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| **高** | CPU 投机解码在非贪婪模式下消耗未初始化内存（temperature/top_k/top_p） | Open | — |
| **高** | FlashInfer sampler JIT 在 nvcc 不可用时崩溃 — 未回退到原生 sampler | Open | — |
| **高** | Qwen3.8-Flash-Next-FP8 在 4x A100 (SM80) 上因 fp8e4kv 不支持而失败 | Open | — |
| **中** | V1 thinking budget 在投机解码下破坏多 token `reasoning_end_str` | Open | — |
| **中** | `tool_choice='none'` 静默删除工具调用形状的内容 | Open | — |
| **中** | 多模态预处理单线程（GIL 瓶颈） | Open | [#58266](https://github.com/vllm-project/vllm/issues/58266) |
| **中** | MLA + TP 的 KV 卸载：P/D 块对齐后删除 NULL_BLOCK_ID 对 | Open | [#55097](https://github.com/vllm-project/vllm/pull/55097) |
| **已修复** | 投机 token 的 RPC 超时绑定到执行模型超时（默认 300s） | Closed | [#58779](https://github.com/vllm-project/vllm/pull/58779) |
| **已修复** | Inkling 工具名称在推理后泄露到内容中 | Closed | [#58792](https://github.com/vllm-project/vllm/pull/58792) |
| **已修复** | 流式继续时丢失 logprobs（调度器竞态） | Open | [#57447](https://github.com/vllm-project/vllm/pull/57447), [#57790](https://github.com/vllm-project/vllm/pull/57790) |

---

## 这对应用开发者意味着什么

1. **DeepSeek V4.1 用户**：在 GB200 和 H100 部署上使用新的融合内核和 TP 分片，预期延迟显著改善。若在 SM100/SM103 上使用 MXFP8 量化，请针对新融合实现进行测试。

2. **使用工具调用的流式用户**：块继续间的 logprobs 保留已修复（[#57447](https://github.com/vllm-project/vllm/pull/57447), [#57790](https://github.com/vllm-project/vllm/pull/57790)）— 请验证您的流式管道正确处理新行为。

3. **投机解码操作符**：MRV2 现在正确拒绝从未被提议的草稿槽（[#58784](https://github.com/vllm-project/vllm/pull/58784)）。这是 P/D 部署的正确性修复。

4. **IPv6 部署**：DP 主管探测 URL 现在正确引用 IPv6 主机 — 如果您使用 `[::]` 绑定，请检查您的数据并行设置。

5. **批量不变性用户**：序列并行现在在 `VLLM_BATCH_INVARIANT=1` 时正确禁用 — 如果您的工作负载依赖启用的 SP，现有部署可能会看到行为变化。

6. **Rust 前端**：仍处于实验阶段（[#44280](https://github.com/vllm-project/vllm/issues/44280)）— 相对于 Python API 尚未完成功能对标。生

我已完成整个翻译，保持了所有技术细节和 Markdown 格式的完整性。Rust 前端虽然仍处于实验阶段，但相对于 Python API 尚未完成功能对标。生产环境的 Python 部署应该继续使用已有的成熟技术栈。</think>

# vLLM 每日简报 — 2026-09-26

## 今日要点

vLLM 项目继续深度投入 DeepSeek-V4.1 优化，新增了针对 MXFP8 量化的融合内核和 TP 分布式分片，同时在批量不变性（batch invariance）和 Rust 前端功能对标方面也有积极进展。多个 bug 修复围绕流式 logprobs、投机解码和 KV 卸载展开，社区还就请求级 derender 输出和 KV 流水线并行的新 RFC 进行了讨论。

---

## 版本发布与重大变更

过去 24 小时内无版本发布。

---

## 新模型与硬件支持

| 主题 | 描述 | 链接 |
|------|------|------|
| **ROCm MI355X** | Qwen3.8-2.4T-A95B gfx950 / MI355X 性能优化追踪 | [#57149](https://github.com/vllm-project/vllm/issues/57149) |
| **GLM 5.3** | GLM 5.3 架构性能优化追踪 | [#57406](https://github.com/vllm-project/vllm/issues/57406) |
| **DeepSeek-V4.1** | SM100/SM103 上支持新型 MXFP8 量化，融合 WO-A + 逆 RoPE | [#58634](https://github.com/vllm-project/vllm/pull/58634) |

---

## 性能与优化

| 领域 | 变更 | 影响 | PR/Issue |
|------|------|------|----------|
| **DeepSeek V4.1** | 在 SM100/SM103 上融合小批次 WO-A + 逆 RoPE + MXFP8 量化 | 降低 O-projection 延迟（GB200 上约 11-12µs） | [#58634](https://github.com/vllm-project/vllm/pull/58634) |
| **Mamba** | 将 align block-table gather 从 7 个 Triton 内核融合为 1 个 | **6 倍加速**，适用于所有 shape | [#58737](https://github.com/vllm-project/vllm/pull/58737) |
| **Spec Decode** | 消除 GDN 元数据构建中约 11µs/步的主机调度开销 | 降低每步开销 | [#58732](https://github.com/vllm-project/vllm/pull/58732) |
| **DeepSeek V4.1** | 在 TP ranks 间分片 Engram wkv 投影 | 消除 TP 部署中的冗余计算 | [#58678](https://github.com/vllm-project/vllm/pull/58678) |
| **DSv4 + DFlash** | 针对稀疏 top-k 和 input-prep 的 Triton 特化进行 JIT 预热 | 消除推理中途的编译卡顿 | [#58559](https://github.com/vllm-project/vllm/pull/58559) |
| **批量不变性** | 启用批量不变性时禁用序列并行 / 异步 TP + TP 回归测试 | 正确性修复 | [#56377](https://github.com/vllm-project/vllm/pull/56377) |
| **ROCm AMD** | 修复 MI355X 注意力后端选择 (ROCM_AITER_FA vs ROCM_ATTN) | 恢复文档中记录的行为 | [#46596](https://github.com/vllm-project/vllm/issues/46596) |

---

## 稳定性与回归

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| **高** | CPU 投机解码在非贪婪模式下消耗未初始化内存（temperature/top_k/top_p） | Open | — |
| **高** | FlashInfer sampler JIT 在 nvcc 不可用时崩溃 — 未回退到原生 sampler | Open | — |
| **高** | Qwen3.8-Flash-Next-FP8 在 4x A100 (SM80) 上因 fp8e4kv 不支持而失败 | Open | — |
| **中** | V1 thinking budget 在投机解码下破坏多 token `reasoning_end_str` | Open | — |
| **中** | `tool_choice='none'` 静默删除工具调用形状的内容 | Open | — |
| **中** | 多模态预处理单线程（GIL 瓶颈） | Open | [#58266](https://github.com/vllm-project/vllm/issues/58266) |
| **中** | MLA + TP 的 KV 卸载：P/D 块对齐后删除 NULL_BLOCK_ID 对 | Open | [#55097](https://github.com/vllm-project/vllm/pull/55097) |
| **已修复** | 投机 token 的 RPC 超时绑定到执行模型超时（默认 300s） | Closed | [#58779](https://github.com/vllm-project/vllm/pull/58779) |
| **已修复** | Inkling 工具名称在推理后泄露到内容中 | Closed | [#58792](https://github.com/vllm-project/vllm/pull/58792) |
| **已修复** | 流式继续时丢失 logprobs（调度器竞态） | Open | [#57447](https://github.com/vllm-project/vllm/pull/57447), [#57790](https://github.com/vllm-project/vllm/pull/57790) |

---

## 这对应用开发者意味着什么

1. **DeepSeek V4.1 用户**：在 GB200 和 H100 部署上使用新的融合内核和 TP 分片，预期延迟显著改善。若在 SM100/SM103 上使用 MXFP8 量化，请针对新融合实现进行测试。

2. **使用工具调用的流式用户**：块继续间的 logprobs 保留已修复（[#57447](https://github.com/vllm-project/vllm/pull/57447), [#57790](https://github.com/vllm-project/vllm/pull/57790)）— 请验证您的流式管道正确处理新行为。

3. **投机解码操作符**：MRV2 现在正确拒绝从未被提议的草稿槽（[#58784](https://github.com/vllm-project/vllm/pull/58784)）。这是 P/D 部署的正确性修复。

4. **IPv6 部署**：DP 主管探测 URL 现在正确引用 IPv6 主机 — 如果您使用 `[::]` 绑定，请检查您的数据并行设置。

5. **批量不变性用户**：序列并行现在在 `VLLM_BATCH_INVARIANT=1` 时正确禁用 — 如果您的工作负载依赖启用的 SP，现有部署可能会看到行为变化。

6. **Rust 前端**：仍处于实验阶段（[#44280](https://github.com/vllm-project/vllm/issues/44280)）— 相对于 Python API 尚未完成功能对标。生产环境的 Python 部署应该继续使用已有的技术栈。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang digest from English to Chinese. I need to:

1. Translate all the content into Chinese
2. Keep the Markdown structure exactly as-is (headings, tables, lists, etc.)
3. Keep URLs, issue numbers, code references, etc. as-is
4. Use natural technical Chinese suitable for a developer newsletter

Let me go through and translate while preserving the structure.</think>

# SGLang 速报 — 2026-09-26

## 今日要闻

SGLang 项目继续大力投入 DeepSeek V4.1 支持，多项内核级优化已在 CUDA 和 AMD 后端落地，同时统一 Radix Cache 切换至 Rust 作为默认后端。CI 基础设施得到加固修复，多个影响 Qwen3.8-Flash-Next 和 Apple Silicon MPS 的正确性 bug 正在处理中。

---

## 版本发布与重大变更

- **过去 24 小时内无新版本发布**。

---

## 新模型与硬件支持

- **DeepSeek-V4.1 AMD 支持** — 为 gfx950 GPU 的大量内核工作已合并，包括 KV 缓存布局、FP4 索引器、稀疏解码注意力以及排序 top-k 操作。 ([#41019](https://github.com/sgl-project/sglang/pull/41019), [#41020](https://github.com/sgl-project/sglang/pull/41020))
- **DeepSeek-V4.1 CUDA 支持** — 低比例索引器和比例 1/2 top-k 操作已移至专用内核模块（`dsv4/low_ratio_indexer` 和 `kernels/ops/attention/dsv4`）。 ([#41125](https://github.com/sgl-project/sglang/pull/41125), [#41291](https://github.com/sgl-project/sglang/pull/41291))
- **MiniMax-M3 + MXFP8** — 为 gfx950 上的 MXFP8 ptpc 解码 GEMM 实现了融合 all-reduce + RMSNorm + per-token fp8 量化。 ([#36575](https://github.com/sgl-project/sglang/pull/36575))
- **XGrammar Lark 语法支持** — 通过 XGrammar 0.2.7 新增了对 Lark 语法的支持（除 EBNF 外）。 ([#39380](https://github.com/sgl-project/sglang/pull/39380))
- **Gemma4 非树注意力默认值** — 为 Gemma4 平台集成尊重非树注意力后端默认值。 ([#41293](https://github.com/sgl-project/sglang/pull/41293))

---

## 性能优化

- **Gemma3n 共享注意力** — 在 Gemma3n 共享注意力层中跳过未使用的 K/V 工作，避免在支持的 CUDA RoPE 内核中分配和旋转虚拟键。 ([#41295](https://github.com/sgl-project/sglang/pull/41295))
- **Hopper V4.1 比例 2 解码** — 为 SM90、头维度 512、解码批次 1–64 融合了 pooling、BF16 转换和 RMSNorm 内核。 ([#41294](https://github.com/sgl-project/sglang/pull/41294))
- **RTX 4090 上的 MXFP4 MoE** — 为 Hopper 以下设备固定 `triton_kernels num_warps`，解决约 6x 吞吐量回退问题（从约 20 tok/s 降至目标性能）。 ([#41292](https://github.com/sgl-project/sglang/pull/41292))
- **DeepSeek-V4.1 AMD 内核** — CuTe DSL AR 融合核心已共享并接入 DeepSeek-V3 / GLM-5.x。 ([#37196](https://github.com/sgl-project/sglang/pull/37196))
- **统一 Radix Cache** — Rust TreeCore 现为默认值，Python 行为同步至一处。 ([#39627](https://github.com/sgl-project/sglang/pull/39627))
- **PD 解码 radix 缓存** — 修复了 EAGLE 二元插入边界下 SWA 窗口管理，防止 `available + evictive > total` 错误。 ([#40681](https://github.com/sgl-project/sglang/pull/40681))

---

## 稳定性与回退

### 高优先级

| Issue | 描述 | 状态 |
|-------|------|------|
| [#36537](https://github.com/sgl-project/sglang/issues/36537) | Qwen3.8-Flash-Next thinking + qwen3_coder 工具解析器在 token ID 0 上循环 | **已关闭** — 已修复 |
| [#40926](https://github.com/sgl-project/sglang/issues/40926) | HiCache + 混合 (SSM/Mamba)：`cudaHostRegister` 失败导致整个实例中止，TypeError 隐藏真实错误码 | 进行中 |
| [#36938](https://github.com/sgl-project/sglang/issues/36938) | 预填充输入 logprobs 来自错误请求（当批次成员被撤回或完成时） | 进行中 |

### 中优先级

| Issue | 描述 | 状态 |
|-------|------|------|
| [#39675](https://github.com/sgl-project/sglang/issues/39675) | Apple Metal (mps) 报告无设备内存 → `mem_fraction_static` 回退至 0.95，导致预填充 OOM | 进行中 |
| [#21443](https://github.com/sgl-project/sglang/issues/21443) | Apple Silicon Mac 内存管理改进（MPS 后端） | 进行中 |
| [#37712](https://github.com/sgl-project/sglang/issues/37712) | GLM-5.3-Flash：长上下文预填充时 CUDA OOM 于 fp8_mqa_logits | 进行中 |
| [#41211](https://github.com/sgl-project/sglang/issues/41211) | MLX：`return_logprob` 静默返回空 logprobs，未启用 `--mlx-enable-sampling` 时导致 /v1/score 返回 500 | 进行中 |
| [#33388](https://github.com/sgl-project/sglang/issues/33388) | 多模态 tensor view 导致 518x pickle 内存放大 | 进行中 |

### CI / 基础设施

- **CI 测试失败** — 跟踪显示 1 个broken、7 个flaky、1101 个近期修复的测试。 ([#17050](https://github.com/sgl-project/sglang/issues/17050))
- **CI 维护模式** — 由于测试不稳定和机器问题已激活；常规 PR CI 暂停运行。 ([#21065](https://github.com/sgl-project/sglang/issues/21065))
- **/rerun-test 调度加固** — 拒绝 Intel Xeon 和 arm64 CPU 套件，指引至其自身工作流。 ([#41285](https://github.com/sgl-project/sglang/pull/41285))

---

## 对应用开发者的意义

1. **如果你运行 DeepSeek-V4.1 或 GLM-5.x 模型** — 预期在 NVIDIA (Hopper) 和 AMD (gfx950) 硬件上获得更好的内核性能。新的内核模块化应该能提高可维护性。

2. **如果你使用 Radix Cache** — Rust TreeCore 现为默认值。如果依赖 Python 特定行为，请对照 [#39627](https://github.com/sgl-project/sglang/pull/39627) 中的同步实现验证你的用例。

3. **如果你使用 Qwen3.8-Flash-Next 并启用 thinking 模式** — Token ID 0 循环 bug 已修复；请更新至最新版本。

4. **如果你在 Apple Silicon (MPS) 上运行** — 导致 OOM 的内存报告 bug 已知且正在进行中。在修复前请考虑手动限制 `mem_fraction_static`。

5. **如果你使用 MLX 后端进行评分** — 当未启用采样时请求 logprobs，`/v1/score` 端点返回 500。作为临时解决方案请使用 `--mlx-enable-sampling`。

6. **如果你依赖 CI 进行 PR** — 项目处于 CI 维护模式；在解决不稳定性问题之前请预期 CI 反馈延迟。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the llama.cpp digest into Simplified Chinese, following the specific rules provided. Let me carefully translate while preserving the exact structure and format.

Key rules to follow:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, bold/italic, etc.
3. Keep URLs, numbers, dates, issue/PR references verbatim
4. Keep technical terms, project names, file paths in original form
5. Use natural technical Chinese register

Let me translate section by section:

Title: # llama.cpp 动态 — 2026-09-26

Today's Highlights section - translate naturally while keeping the technical content

Releases & Breaking Changes - translate table

New Model & Hardware Support - translate list

Performance & Optimization - translate table

Stability & Regressions - translate table

What This Means for Application Developers - translate numbered list

Let me do this carefully:</think>

# llama.cpp 动态 — 2026-09-26

## 今日要闻

llama.cpp 项目本周在 Metal 和 Vulkan 后端方面取得了重要进展，包括扩展了 FWHT 内核支持范围，修复了针对旧版 GLSLC 编译器的兼容问题。重要的精度策略功能（`llama_prec_policy`）与模型驱动的 W4A4 路径已正式合并，同时修复了 Windows Unicode 路径处理和 LFM2 音频转录准确性问题。

---

## 版本发布与破坏性变更

| 提交 | 描述 | PR |
|------|------|-----|
| **b11181** | HIP：将 HIP_VERSION 要求提升至支持 fp8 的版本，以避免 ROCm 6.2 缺少 `__hip_fp8_e4m3` 的问题 | [#29231](https://github.com/ggml-org/llama.cpp/pull/29231) |
| **b11192** | 依赖更新：升级 cpp-httplib 至 0.58.0 | [#29427](https://github.com/ggml-org/llama.cpp/pull/29407) |

*本时段内无 API 破坏性变更。*

---

## 新模型与硬件支持

- **K2 Horizon** — 已提交功能请求，支持 K2 Horizon 模型（0.9B、3.7B、7B、32B、36B MoVA 变体）。详见 [#29424](https://github.com/ggml-org/llama.cpp/issues/29424)
- **Prism PQ2_0 与 PTQ1_0** — 请求支持新的量化类型（GGML 类型 142、143，由 Ternary-Bonsai-2 使用）。详见 [#29058](https://github.com/ggml-org/llama.cpp/issues/29058)
- **Limite 1B - Violetto** — 新模型支持 PR 开放中。详见 [#29433](https://github.com/ggml-org/llama.cpp/pull/29433)
- **GraniteSpeech5ForCTC** — 新模型架构（Turbo CTC）已添加。详见 [#29446](https://github.com/ggml-org/llama.cpp/pull/29446)

---

## 性能与优化

| 领域 | 变更 | PR/提交 |
|------|------|---------|
| **Metal FA** | 按数据类型拆分 flash attention 内核，提升模块化程度 | [b11183](https://github.com/ggml-org/llama.cpp/commit/b11183) |
| **Metal FWHT** | 新增块宽度 512 以上的内核支持（此前限制在 64–512 范围） | [#29095](https://github.com/ggml-org/llama.cpp/pull/29095) |
| **Metal 稀疏 FA** | 将索引移至共享内存以优化性能（已合并） | [#29377](https://github.com/ggml-org/llama.cpp/pull/29377) |
| **Metal SUM** | 新增连续性检查，支持更多排列布局 | [#29296](https://github.com/ggml-org/llama.cpp/pull/29296) |
| **Vulkan Intel FA** | 面向 LLM 工作负载的新型 Intel 预填充 flash attention 着色器 | [#29357](https://github.com/ggml-org/llama.cpp/pull/29357) |
| **OpenCL Q5_K** | 为非 MoE 模型添加 A8 Q5_K 二进制内核，支持 dp4a | [#29401](https://github.com/ggml-org/llama.cpp/pull/29401) |
| **CPU k-quants** | k-quants 矩阵乘法分块计算——通过 VNNI 提升 3–7 倍（进行中） | [#27851](https://github.com/ggml-org/llama.cpp/pull/27851) |
| **MoE 缓存** | GPU 驻留 LRU 缓存，用于主机卸载的 MoE 专家权重（进行中） | [#27861](https://github.com/ggml-org/llama.cpp/pull/27861) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | HIP/ROCm 在 gfx1151 上，长度超过 n_ubatch 的 prompt 会返回错误的 logit——非崩溃但输出不正确 | [开启 #28211](https://github.com/ggml-org/llama.cpp/issues/28211) |
| **高** | 服务器 `-np 4 --kv-unified` 在集成 HIP GPU（gfx1151）上会将其他请求的响应完整返回给当前请求 | [开启 #25992](https://github.com/ggml-org/llama.cpp/issues/25992) |
| **中** | 使用 `-np 2 --kv-unified`（单 GPU，无投机）时，第二次及后续请求的 prompt 处理吞吐量下降 42–54% | [开启 #28495](https://github.com/ggml-org/llama.cpp/issues/28495) |
| **中** | Windows + CUDA 环境下，服务器在 `/metrics` 端点被 VictoriaMetrics 抓取时静默停止处理 | [开启 #29104](https://github.com/ggml-org/llama.cpp/issues/29104) |
| **中** | 旧版 GLSLC 缺少 GL_KHR_cooperative_matrix 支持，导致 Vulkan 构建失败 | [开启 #29373](https://github.com/ggml-org/llama.cpp/issues/29373) —— 已在 [b11188](https://github.com/ggml-org/llama.cpp/commit/b11188) 修复 |
| **已修复** | LFM2 音频 MEL 预处理器对 4.5% 英语 / 6.5% 日语语音产生不同转录结果 | 于 [b11190](https://github.com/ggml-org/llama.cpp/commit/b11190) 修复 |
| **已修复** | Windows 环境下 `fs_create_directory_with_parents()` 的 unicode 路径处理问题 | 于 [b11191](https://github.com/ggml-org/llama.cpp/commit/b11191) 修复 |

---

## 应用开发者需要关注的事项

1. **Metal 用户**：更大块宽度的 FWHT 性能将有所提升；按数据类型拆分的 FA 内核提升了可维护性。

2. **Intel Vulkan 用户**：新型 Intel 预填充 flash attention 内核应在支持的 Intel 平台上改善预填充吞吐量。

3. **gfx1151（Strix Halo）上的 HIP/ROCm 用户**：错误 logit 缺陷（#28211）和跨请求响应泄露（#25992）仍处于活跃状态——在修复前请避免使用 unified KV 模式，或限制为单槽推理。

4. **服务器运维人员**：Windows CUDA 部署中 VictoriaMetrics 抓取导致的挂起问题（#29104）会影响服务——需密切监控或暂时避免该抓取模式。

5. **精度敏感型部署**：新增的 `llama_prec_policy` 配合模型驱动的 W4A4 路径（#24364）支持针对量化密集工作流的逐模型精度控制。

6. **构建维护人员**：旧版 GLSLC 的构建问题现已修复（#29373）；请确保 CI 使用更新的 GLSLC 或启用 cooperative matrix 宏。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Simplified Chinese, maintaining all the Markdown structure, URLs, code references, issue numbers, etc. They want it to read naturally for a Chinese developer audience, not a literal translation.

Let me go through and translate while:
1. Keeping all headings, tables, structure exactly as-is
2. Keeping URLs, issue numbers (#18509), PR numbers, version tags (v0.40.0-rc0), code references, file paths
3. Translating the content naturally into Chinese technical register
4. Maintaining any bold/italic formatting
5. Keeping horizontal rules

Let me start:</think>

# Ollama 动态 — 2026-09-26

## 1. 今日要闻

**v0.40.0-rc0** 带来重大架构变更：在支持的模型架构上，MLX 现已成为 Apple Silicon 的默认运行时，无需手动配置即可启用原生 Metal 加速。本次发布周期还修复了 macOS GUI 聊天超时、OpenAI 兼容响应 ID 冲突、MLX 拉取磁盘满错误传播等长期问题。

---

## 2. 版本发布与破坏性变更

| 版本 | 变更 | 影响 |
|---------|--------|--------|
| **v0.40.0-rc0** | MLX 运行时成为 Apple Silicon 上支持模型的默认选项 | 低 — 自动生效，如需降级为纯 CPU 模式需手动配置 |
| PR #18646 | 模型名称组件长度限制从 80 字符提升至 128 字符 | 修复了从 HuggingFace 拉取长 repo 名称模型时的报错 |

---

## 3. 新模型与硬件支持

- **Apple Silicon 默认使用 MLX** — 支持的模型架构（如 `qwen3.8`、`gemma4`）现在自动使用 MLX 运行时和 Metal 内核，无需任何标志位即可直接运行。
- **Intel SYCL/oneAPI GPU 后端**（PR #17621，进行中）—— 基于 llama.cpp 的 `ggml-sycl`，为 Intel Arc/Battlemage GPU 提供可选后端支持。需使用 `-DOLLAMA_LLAMA_BACKENDS=sycl` 编译。
- **MLX CUDA 内核移植**（PR #18657）—— 自定义 Metal 内核（`mamba2_scan`、`depthwise_conv_silu`、`gated_delta`）现已具备 CUDA 等效实现，消除了 CUDA 启用时回退到 graph ops 的问题。
- **System One 评分 API**（PR #18606）—— 新增 `POST /v1/systemone` 端点，支持使用本地 Nimble 和 Tev 模型进行结构化决策。

---

## 4. 性能优化

| 领域 | 变更 | 状态 |
|------|--------|--------|
| **MLX CUDA 去重**（PR #17956）| 共享 CUDA 运行时库从 `mlx_cuda_v13` 移至同级的 `cuda_v13` payload，减少下载体积 | 进行中 |
| **MLX 内核性能**（PR #18657）| Metal 自定义内核移植至 CUDA — 消除 Mamba、depthwise 卷积、gated delta 层的 graph-op 回退 | 进行中 |
| **基准测试**（PR #17480）| 用打包的 HumanEval Python prompt 替代合成词表，更真实地评估投机解码 | 进行中 |
| **加载进度报告**（PR #17834）| 恢复 0.30 之前的进度跟踪和卡顿检测机制，用于 MLX 模型加载 | 进行中 |
| **整数格式化**（PR #18641）| 大数值模型参数在 `ollama show --modelfile` 中不再使用科学计数法 | 进行中 |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 链接 | 修复 PR |
|----------|-------|------|--------|
| **高** | macOS GUI 聊天流在 60 秒后静默断开——长预填充触发 WKWebView 超时 | #18368 | #18654 |
| **高** | RTX 5090 上 Cohere MoE 发生 CUDA 非法内存访问（Windows）| #18642 | — |
| **高** | `/v1/chat/completions` 忽略 `max_tokens` 和 Modelfile 中的 `num_predict`——无限制生成 | #18575 | — |
| **中** | qwen3.8：`think: "high"`/`"max"` 静默回退为默认的 `medium` | #18632 | — |
| **中** | MLX 前缀缓存 8 GiB 硬限制导致 32GB Mac 在代理工作负载下大量换页 | #18131 | — |
| **中** | Windows CUDA 发现机制在 RTX 50 系列（Blackwell）上失败——回退至 CPU | #18581 | — |
| **中** | OpenAI 响应 ID 仅使用 999 个不同值（`rand.Intn(999)`），代理层发生冲突 | #18655 | #18656 |
| **中** | deepseek-v4.1-flash 静默丢弃图像输入（#18527 的回归）| #18637 | — |
| **中** | MLX 拉取未检测磁盘满——表现为网络超时而非磁盘错误 | #18644 | #18648 |
| **低** | gemma4 解析器拒绝带尾部噪声 token（`$$`）的有效工具调用 | #18649 | — |

---

## 6. 应用开发者需要关注的事项

1. **Apple Silicon 用户** — 大多数模型将自动启用 MLX 加速。如需纯 CPU 行为，可在部署脚本中显式设置 `OLLAMA_HOST=0.0.0.0` 或检查运行时标志位。

2. **macOS GUI 用户** — 60 秒聊天超时修复（PR #18654）预计将在下一个稳定版中发布。如果你在 0.34.x 版本遇到长提示词时的静默失败，问题根源已在此修复。

3. **代理/中间件开发者** — 响应 ID 冲突 bug（PR #18656）将改用 UUID 修复。如果你使用 `chatcmpl-*` ID 作为键，请准备好接收更长的标识符。

4. **Ollama Cloud 用户** — deepseek-v4.1-flash 图像丢弃回归正在追踪。使用视觉模型时请注意静默失败情况——模型可能显示"无法识别图像"。

5. **Windows + RTX 50 系列用户** — CUDA 发现机制目前在 Blackwell 上失败，暂回退至 CPU。请关注 PR #18581 了解修复进展。

6. **Intel GPU 用户** — SYCL 后端等待中（PR #17621）。如需 Arc/Battlemage 支持，请关注该 PR 获取构建说明。

7. **API 消费者** — 如果你依赖 `max_tokens` 来限制 OpenAI 兼容端点的生成长度，请注意当前该参数被忽略（issue #18575）。临时解决方案：在 Modelfile 中设置 `num_predict` 或使用底层 API，直至修复上线。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM Daily Digest from English to Chinese (Simplified Chinese). I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, issue/PR references, version tags, technical terms as-is
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while maintaining all the formatting and technical integrity.

Key terms to handle:
- "digest" → "每日简报"
- "releases" → "版本发布"
- "breaking changes" → "重大变更"
- "provider" → "供应商/提供商" (will use "提供商" for consistency)
- "pull request" → "拉取请求" or keep as "PR"
- "issue" → "问题"
- "streaming" → "流式"
- "fallback" → "降级/后备"
- "cosign" → keep as "cosign" (technical term)
- "rate limiting" → "速率限制"
- "budget" → "预算"
- "spend" → "花费/消费"

Let me go through and translate section by section while keeping the structure intact.</think>

# LiteLLM 每日简报 — 2026-09-26

## 今日要点

LiteLLM 保持快速迭代节奏，今日发布四个版本（v1.98.1 到 v1.104.0-dev.2），均包含 Docker 镜像的 cosign 签名验证。最重要的变更是一项新的安全相关 PR（#43255）——对 guardrail 参数、嵌套 litellm_params 和 router_settings 中的密钥进行静态加密，这直接回应了常见问题中关于凭据应被加密的说明。与此同时，路由器降级 bug（#43165）在成功降级后返回空响应体的问题仍处于开放状态，有 12 条评论，表明正在积极处理中。

---

## 版本发布与重大变更

| 版本 | 说明 | 参考链接 |
|---------|-------|-----------|
| v1.104.0-dev.2 | 开发版；Docker 镜像已通过 cosign 签名验证 | [GitHub](https://github.com/BerriAI/litellm/releases/tag/v1.104.0-dev.2) |
| v1.100.3 | 稳定版；已通过 cosign 签名验证 | [GitHub](https://github.com/BerriAI/litellm/releases/tag/v1.100.3) |
| v1.99.4 | 稳定版；已通过 cosign 签名验证 | [GitHub](https://github.com/BerriAI/litellm/releases/tag/v1.99.4) |
| v1.98.1 | 稳定版；已通过 cosign 签名验证 | [GitHub](https://github.com/BerriAI/litellm/releases/tag/v1.98.1) |

**迁移说明：** 所有 Docker 镜像现均带有 cosign 签名。使用提交 `0112e53` 中的密钥进行验证。

---

## 新模型与硬件支持

| 提供商/模型 | 功能 | PR/Issue |
|----------------|---------|----------|
| **Sail** | 新增提供商，`service_tier` 映射到 completion window | [#42840](https://github.com/BerriAI/litellm/pull/42840) |
| **typesafe/jev-router** | 已添加到 OpenRouter 成本映射 | [#43248](https://github.com/BerriAI/litellm/pull/43248) |
| **Jev 与 Laya** | 在 auto-router 下支持 Decision Model | [#43234](https://github.com/BerriAI/litellm/pull/43234) |
| **DeepSeek V4 Flash Vision Exp** | 已添加 Fireworks 优先层级定价 | [#43252](https://github.com/BerriAI/litellm/pull/43252) |
| **MAI-Image-2.5-Flash** | Azure AI 输出价格已修正为零售价 | [#43254](https://github.com/BerriAI/litellm/pull/43254) |

**Langfuse SDK v4 支持：** Langfuse Python SDK v4 及 v4 OTel 摄取现已支持——参见 [#33383](https://github.com/BerriAI/litellm/pull/33383)（已合并）和功能请求 [#24123](https://github.com/BerriAI/litellm/issues/24123)（已关闭）。

---

## 性能与优化

| 领域 | 变更 | PR |
|------|--------|-----|
| **HTTP 客户端** | 重构以分发独立的 `Client` 实例，并让所有提供商通过 `HttpClientPool` 路由——确保 SSL 验证、CA 证书、客户端证书、代理和超时配置统一应用 | [#43245](https://github.com/BerriAI/litellm/pull/43245) |
| **速率限制** | 新增 `fail_closed_rate_limit_enforcement` 标志，在 Redis 速率限制计数器不可访问时以 503 拒绝请求（防止 N 个副本产生 N×RPM 限制） | [#43251](https://github.com/BerriAI/litellm/pull/43251) |
| **透传** | 错误流不再等待日志预览就直接转发；修复了 429 流上的 12 秒卡顿问题 | [#43056](https://github.com/BerriAI/litellm/pull/43056) |
| **OTel** | 响应后的服务 spans 按请求阶段而非结束时间排序解绑——修复了流式追踪嵌套问题 | [#43233](https://github.com/BerriAI/litellm/pull/43233) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **高** | 路由器降级在主请求超时后返回空响应体（非流式） | [开放 #43165](https://github.com/BerriAI/litellm/issues/43165) | — |
| **高** | Redis 缓存在 v1.93.0 中报 `ssl_check_hostname` 错误 | [开放 #34614](https://github.com/BerriAI/litellm/issues/34614) | — |
| **中** | Databricks 模型映射需要更新以支持 Unity Gateway — `databricks/databricks-claude-sonnet-5` 现在无法正确路由 | [开放 #43146](https://github.com/BerriAI/litellm/issues/43146) | — |
| **中** | Azure 请求在模型别名通过 LiteLLM 解析时包含内部 `model_alias_map`，导致 Azure 拒绝并报"未知参数" | [开放 #42409](https://github.com/BerriAI/litellm/issues/42409) | — |
| **中** | `/v1/audio/transcriptions` 在 `response_format=text` 时返回 JSON 而非 `text/plain` | [开放 #31457](https://github.com/BerriAI/litellm/issues/31457) | — |
| **低** | Prometheus 预算指标未为 `team_id = NULL` 的键发出 | [开放 #37292](https://github.com/BerriAI/litellm/issues/37292) | — |
| **已修复** | FLUX.2 编辑参考图片现在按百万像素正确计费 | — | [#43216](https://github.com/BerriAI/litellm/pull/43216) |
| **已修复** | Fireworks AI DeepSeek V4P1 Flash 定价已修正（之前输入被低估约 27%，输出被低估约 45%） | — | [#43253](https://github.com/BerriAI/litellm/pull/43253) |

---

## 这对应用开发者的意义

1. **安全加固即将推出：** Guardrail 参数、嵌套 litellm_params 和 router_settings 中的密钥将进行静态加密。升级到包含 [#43255](https://github.com/BerriAI/litellm/pull/43255) 的版本时，请关注配置迁移需求。

2. **速率限制现支持多副本安全：** 如果您在 Redis 速率限制下运行多副本 LiteLLM，新增的 `fail_closed_rate_limit_enforcement` 标志可防止"N 副本 × RPM 限制"问题。建议在生产环境中启用此功能。

3. **关注路由器降级的空响应问题：** 如果您在非流式补全中使用路由器的降级功能，当前版本可能在成功降级后返回 HTTP 200 但响应体为空。在 [#43165] 解决前，请避免依赖降级路径。

4. **Langfuse 用户应升级 SDK：** Langfuse Python SDK v4 现已支持。如果您使用 Langfuse 回调，请将 SDK 升级到 v4.7.0+ 以使用新的 observations-first 摄取路径。

5. **成本报告修复：** 两项定价修正已合入——Fireworks 上的 DeepSeek V4P1 Flash（定价过低）和 Azure AI 上的 MAI-Image-2.5-Flash（定价过高）。如果您使用这些模型，请检查消费日志。

6. **新提供商：Sail：** 如果您使用 Sail 进行推理，LiteLLM 现已将其作为一等公民提供支持，并提供 service tier 映射。

---

*基于 2026-09-26 的 GitHub 数据生成。欲了解完整上下文，请参阅 [LiteLLM 仓库](https://github.com/BerriAI/litellm)。*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the Unsloth digest into Chinese. Let me follow the rules:
- Output ONLY the translation. No preamble, no explanation, no markdown fences.
- Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
- Issue/PR references like #12345 and their link text stay as-is.
- Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate the content while keeping all the formatting and technical terms intact.

Title: # Unsloth Digest — 2026-09-26

## Today's Highlights

Unsloth's development continues to focus on AMD/ROCm stabilization and Studio UI refinements. The most notablePRs landed today add vLLM and SGLang as optional inference engines with multi-GPU support (#11491), introduce a Benchmarks page for speculative decoding and KV cache sweeps (#11808), and lift the TRL ceiling to 1.13.0 to support recent training stack updates (#11137). Meanwhile, AMD-related issues remain the dominant theme in the issue tracker, with multiple VRAM allocation and ROCm version compatibility problems still open.

## Releases & Breaking Changes

No releases published in the last 24 hours.

## New Model & Hardware Support

| Item | Description | PR/Issue |
|------|-------------|----------|
| **ModelScope integration** | Unsloth Studio can now pull models/datasets from ModelScope as an alternative to Hugging Face | #11761 |
| **Custom HF endpoint** | Users can configure a custom Hugging Face endpoint (e.g., mirrors) in Settings | #11761 |


| **vLLM + SGLang support** | Text/image chat, quantization, and multi-GPU inference with optional inference engines | #11491 |
| **Vulkan training request** | Feature request for AMD Vulkan-based training (currently CPU-only) | #11184 |
| **ROCm 7.14/10 support** | Request to support PyTorch built for ROCm 7.14 or 10, not only ROCm 7.2 | #9932 |

## Performance & Optimization

| Area | Change | PR | Details |
|------|--------|-----|---------|

The new inference engine support enables text and image chat capabilities with quantization options and multi-GPU deployment, though vLLM and SGLang aren't included by default. There's also interest in extending AMD Vulkan beyond CPU-only training, and support for newer ROCm versions is being requested.

Performance work includes matching Qwen-Image-2.1's bf16 accuracy using Hadamard-rotated int8 transformers, consolidating image and video denoising onto a single render thread to better reuse cuDNN caches, eliminating recompilation delays when running second prompts with Qwen-Image at maximum tier and int8, preventing denoiser recompilation on subsequent caption and initial i2v operations, and correcting the memory planner to reference loaded dtype rather than disk file sizes.

On the stability front, several high-severity issues affect AMD hardware: Qwen3.8-27B GGUF crashes on R9700 (Vulkan) while V2 functions properly, bnb-4bit training fails with shape errors on both R9700 and NVIDIA, QLoRA training hangs on RX 7900 XTX due to AMDGPU VM faults, and Unsloth Studio incorrectly loads models into system RAM instead of VRAM on W7900 and Strix Halo. ROCm Docker also misidentifies Qwen-Image-2.1 GGUF as v1.x, causing shape mismatches.

Additional concerns include 4-bit dequantize caching GPU streams at import rather than dynamically, and mixed NVIDIA+AMD systems defaulting to CUDA torch despite needing AMD support. For developers, the new inference backends—vLLM and SGLang—offer flexibility for production but require thorough testing on AMD hardware. TRL 1.13.0 compatibility unlocks the latest training features, while Studio enhancements like model pinning and sorting improve workflow efficiency. The Benchmarks page will streamline GGUF inference optimization, and ModelScope provides a fallback when Hugging Face access is limited.</think>

# Unsloth Digest — 2026-09-26

## 今日要闻

Unsloth 的开发继续聚焦于 AMD/ROCm 稳定性和 Studio UI 优化。今天最受关注的 PR 包括：新增 vLLM 和 SGLang 作为可选推理引擎，支持多 GPU（#11491）；推出 Benchmarks 页面，用于 speculative decoding 和 KV cache 调优（#11808）；以及将 TRL 版本上限提升至 1.13.0，以支持最新的训练栈更新（#11137）。同时，AMD 相关问题仍然是 issue 跟踪器的主题，多个 VRAM 分配和 ROCm 版本兼容性问题仍未解决。

---

## 版本更新与破坏性变更

过去 24 小时内无版本发布。

---

## 新模型与硬件支持

| 项目 | 描述 | PR/Issue |
|------|-------------|----------|
| **ModelScope 集成** | Unsloth Studio 现可从 ModelScope 获取模型和数据集，作为 Hugging Face 的替代方案 | #11761 |
| **自定义 HF 端点** | 用户可在设置中配置自定义 Hugging Face 端点（如镜像源） | #11761 |
| **vLLM + SGLang 支持** | 新增可选推理引擎，支持文本/图像聊天、量化及多 GPU 推理服务 | #11491 |
| **Vulkan 训练需求** | 功能请求：支持基于 AMD Vulkan 的训练（目前仅 CPU） | #11184 |
| **ROCm 7.14/10 支持** | 请求安装针对 ROCm 7.14 或 10 编译的 PyTorch，而非仅支持 ROCm 7.2 | #9932 |

---

## 性能与优化

| 领域 | 变更 | PR | 详情 |
|------|--------|-----|---------|
| **Qwen-Image-2.1 精度** | Hadamard 旋转的 int8 transformer 现在与 bf16 精度一致（LPIPS 0.066 vs 0.066） | #11835 | 修复了 11/48 个 prompt-seed 组合的 LPIPS 误差超过 0.10 的问题 |
| **cuDNN 缓存复用** | 图像/视频去噪器现运行在单渲染线程上，以复用 cuDNN 卷积和 SDPA 执行计划缓存 | #11843 |
| **避免重编译** | 消除 Qwen-Image 最高档位 + int8 在第二个 prompt 时的重编译（15-50 秒卡顿） | #11842 |
| **MiniMax-H3 修复** | 消除第二个 caption 和第一个 i2v 时的去噪器重编译 | #11880 |
| **内存规划** | 图像内存规划器现按加载时的 dtype 而非磁盘字节大小计算 — 修复了 24 GB 显卡为 SDXL 规划卸载时出现偏差的问题 | #11922 |

---

## 稳定性与回归问题

| 严重程度 | 问题 | GPU/平台 | 状态 |
|----------|-------|---------------|--------|
| **高** | Qwen3.8-27B GGUF 在 R9700（Vulkan）上于 context checkpoint 后崩溃；V2 正常 | AMD R9700 / Windows | 待解决 — #9792 |
| **高** | Qwen3.8-27B bnb-4bit 训练因 shape 错误崩溃 | AMD R9700 / NVIDIA | 待解决 — #9867 |
| **高** | QLoRA 训练在 RX 7900 XTX 上挂起并重置（AMDGPU VM fault） | AMD RX 7900 XTX / Linux | 待解决 — #11498 |
| **中** | Unsloth Studio 即使设置 VRAM-only，仍将模型加载到系统 RAM | AMD W7900 + W7500, Strix Halo | 待解决 — #9549 |
| **中** | ROCm Docker 镜像将 Qwen-Image-2.1 GGUF 识别为 v1.x，加载时 shape 不匹配 | AMD ROCm / Docker | 待解决 — #11890 |
| **中** | 4-bit 去量化在 import 时使用 GPU stream 缓存，而非当前 stream（stream 变化时不安全） | AMD RX 7900 XTX | 待解决 — #10563 |
| **低** | 混合 NVIDIA + AMD 主机安装 CUDA torch；AMD 显卡对训练不可见 | 混合 GPU 系统 | 待解决 — #10450 |

---

## 这对应用开发者意味着什么

1. **更多推理后端选项** — vLLM 和 SGLang 作为可选引擎的加入为高吞吐量生产部署提供了灵活性，支持多 GPU 推理和量化。请注意两者默认不安装。

2. **AMD 仍不稳定，不适合生产** — Issue 跟踪器显示 AMD ROCm 存在持续性问题（VRAM 分配、GPU 重置、ROCm 版本不匹配）。AMD 硬件团队在生产使用前应进行充分测试，或考虑暂时使用 NVIDIA。

3. **TRL 1.13.0 现已支持** — TRL 版本上限的提升解锁了最新 TRL 功能；请确认与你的微调工作流的兼容性。

4. **Studio UX 改进** — 模型固定、排序和即将推出的 Benchmarks 页面改善了本地实验工作流。Benchmarks 页面将帮助优化 GGUF 推理设置（speculative decoding、KV cache、offload），无需手动编写脚本。

5. **ModelScope 备用方案** — 对于 Hugging Face 被屏蔽或速度慢的地区团队，ModelScope 提供了可行的替代方案。

---

*基于 GitHub 数据生成 — unslothai/unsloth*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*