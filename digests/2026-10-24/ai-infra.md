# AI 基础设施日报 2026-10-24

> 生成时间: 2026-10-24 00:59 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this entire report into Simplified Chinese, following the specific rules outlined in the translation guidance. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while maintaining the structure and technical accuracy.</think>

# 跨项目生态报告 — 2026-10-24

## 1. 生态概览

LLM 推理与服务生态系统正围绕三个不同层级持续整合：**云原生服务引擎**（vLLM、SGLang）专注于吞吐量和多节点集群优化，**本地运行时**（llama.cpp、Ollama、Unsloth）面向消费级硬件和边缘部署，**聚合网关**（LiteLLM）提供统一 API 层。当日活动反映了两极分化趋势：服务引擎大力投入高级内核（MoE、投机解码、视觉），而本地运行时则扩展量化格式和硬件后端。LiteLLM 的关键安全事件凸显了快速发展的开源 AI 生态中存在的供应链风险。

---

## 2. 活动对比

| 项目 | Issue（24h） | PR（24h） | Release（24h） | 备注 |
|------|-------------|-----------|----------------|------|
| **vLLM** | ~50（活跃） | 15+ | 0 | RFC 讨论占据主导 |
| **SGLang** | 43 | ~500（积压） | 0 | PR 数量最多；deepseek-recipe 集成 |
| **llama.cpp** | 22 | ~15 | 5（维护） | 针对 CUDA/Hexagon/SYCL 的补丁发布 |
| **Ollama** | 22 | 44 | 2（小版本） | v0.40.11 补丁；Apple Foundation Models |
| **LiteLLM** | 31 | 15+ | 1（已撤回） | 安全事件；可选 Rust 网关 |
| **Unsloth** | ~20 | 20+ | 1（beta） | v0.1.910 支持视觉 + MoE |

**关键观察：** SGLang 的活跃 PR 积压最多，表明功能迭代速度最快。vLLM 的活动以高评论 RFC 为主，而非快速修复，这暗示其架构功能的开发周期更长。

---

## 3. 模型支持竞赛

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|-----------|------|--------|-----------|--------|---------|
| **DeepSeek-V4 / V4.1** | 🔄（SM8x 受阻） | ✅（recipe 已就绪） | — | — | ✅ |
| **Qwen4Exp** | — | ✅ | ✅（QSA 优化） | — | — |
| **GLM5-Next** | — | — | ✅（QSA 优化） | — | — |
| **Nemotron 3.5 Bolt E4B** | — | — | — | ✅（v0.40.10） | — |
| **NVIDIA Dory** | ✅ | — | — | — | — |
| **MLX MoE（Apple）** | — | — | — | ✅ | ✅ |
| **Cambricon MLU** | — | ✅ | — | — | — |
| **JevRank 重排序** | — | — | — | — | ✅ |
| **MOSS-Image** | — | — | — | — | ✅ |
| **Flint（Recursive）** | — | — | — | — | ✅ |

**领先者：** 本周期 **Unsloth** 和 **SGLang** 在模型覆盖上领先，支持视觉（MOSS-Image）、重排序（JevRank）和新兴架构（Flint、Cambricon MLU）。**vLLM** 在 DeepSeek-V4 SM8x 支持上落后，因 Ampere 兼容性障碍受阻。

---

## 4. 性能前沿

| 优化领域 | 主要项目 | 关键技术 |
|---------|---------|---------|
| **KV Cache / 量化** | llama.cpp、vLLM | JQ_K（2-6b）跨后端；NVFP4；FP8 |
| **MoE / 专家路由** | vLLM、SGLang | MegaMoE 融合；MoE CPU 缓存回退 |
| **投机解码** | vLLM、SGLang | 自适应 MTP 深度；Triton 内核替换 |
| **视觉 / 多模态** | SGLang、Unsloth | ViT CUDA Graph；diffusion VRAM 管理 |
| **分布式服务** | vLLM、SGLang | EP2；TP-allreduce；DCP a2a |
| **本地 / 边缘** | llama.cpp、Ollama | MLX 核外；Metal BF16；CPU 训练 |
| **网关 / 路由** | LiteLLM | Rust 网关；spend rollup；router 重试 |

**热点区域：** 服务层（vLLM + SGLang）在 **MoE 优化** 和 **投机解码** 上趋于收敛，这将是吞吐量的关键差异化因素。llama.cpp 在 **量化多样性** 方面领先，JQ_K 覆盖所有后端。

---

## 5. 层级定位

| 层级 | 项目 | 范围 |
|-----|------|-----|
| **训练 / 微调** | Unsloth | FSDP2、LoRA、CPU 回退、OpenAI 兼容 FT API |
| **本地运行时** | llama.cpp、Ollama、Unsloth | GGUF/MLX 执行、消费级 GPU/CPU、Apple Silicon |
| **服务引擎** | vLLM、SGLang | 生产级 LLM 服务、多节点、KV 缓存管理 |
| **网关 / 聚合** | LiteLLM | 多供应商路由、成本控制、统一 API |
| **桌面 / 终端用户** | Ollama、Unsloth | 聊天 UI、模型管理、定时任务 |

**边界推移：** Unsloth 正在从训练层向上扩展到 **本地服务**（GGUF 加载、Studio）。LiteLLM 向下扩展，推出 **可选 Rust 网关**，蚕食服务层领地。服务引擎（vLLM、SGLang）保持垂直整合，但正在添加微调钩子（SGLang Flows）。

---

## 6. 趋势信号

**基础设施工程师应关注：**

1. **量化碎片化** — JQ_K（2-6 bit）在 llama.cpp 后端和 Unsloth 中落地，引入了新的质量/性能权衡。应用应充分测试；不要假设 IQ3/IQ4 等价物。

2. **投机解码成熟** — vLLM 和 SGLang 都在为免编译自适应验证推送 Triton 内核替换。预期生产环境中尾延迟降低。

3. **ROCm AMD  parity** — SGLang 和 vLLM 都在针对 MI355X（gfx950）深度优化。AMD 推理正在追赶 NVIDIA，但边缘情况仍存在（DCP、FP8）。

4. **安全面扩大** — LiteLLM 受污染的版本（v1.107.0）表明 Python AI 生态存在供应链风险。生产环境中验证哈希；避免自动升级。

5. **网关整合** — LiteLLM 的 Rust 网关和 Unsloth 的桌面扩展表明向统一部署栈推进。"网关"和"服务引擎"之间的界限正在模糊。

6. **视觉成为一等公民** — SGLang 的 ViT CUDA Graph RFC 和 Unsloth 的 MOSS-Image/Flint 支持表明多模态不再是附加组件。规划服务基础设施时应考虑视觉工作负载。

**决策点：** 如果部署到云端 GPU，优先选择 vLLM 或 SGLang 以获得吞吐量；如果面向边缘/消费级硬件，选择 llama.cpp + Ollama 或 Unsloth。如果需要多供应商抽象，LiteLLM 是明确的标准——但请审计你的依赖版本。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM Daily Digest from English to Chinese. Let me carefully translate while:
1. Keeping all Markdown structure exactly as-is
2. Keeping URLs, issue/PR references, code blocks, numbers, dates as-is
3. Not translating technical terms, project names, or identifiers
4. Using natural technical Chinese (the register of a Chinese developer newsletter)
5. Outputting ONLY the translation with no preamble or explanation

Let me go through and translate this:

# vLLM Daily Digest — 2026-10-24

## 1. Today's Highlights

vLLM 项目继续重点投入 AMD ROCm 优化和多模态能力。两条重要 PR 已合并：修复了 DCP 关闭时 ROCm 上 Kimi-K3 的精度回退问题 ([#63409](https://github.com/vllm-project/vllm/pull/63409))，并将融合 KDA prefill conv1d 的 `block_m` 从 8 提升到 128，显著提升了吞吐量 ([#63342](https://github.com/vllm-project/vllm/pull/63342))。批处理不变性特性 ([#27433](https://github.com/vllm-project/vllm/issues/27433)) 依然保持高活跃度（103 条评论），表明正在持续推进 LLM 推理的确定性改进工作。

## 2. Releases & Breaking Changes

过去 24 小时内无新版本发布。

## 3. New Model & Hardware Support

- **NVIDIA Dory (Dory1.0-4B-BF16)**：通过 PR [#60149](https://github.com/vllm-project/vllm/pull/60149) 添加了完整模型支持——这是来自 NVIDIA Nemotron-Labs 的 latent-recurrent / looped LLM，采用 normalized-GPT 架构并配备交错式混合滑动窗口注意力机制。

- **DeepSeek-V4-Flash / DeepSeek-V4-Flash-0731 on SM8x (Ampere)**：仍待解决——Issue [#50576](https://github.com/vllm-project/vllm/issues/50576) 跟踪在 Ampere (A100/A800, RTX 30xx) 上启用支持的工作。目前仅支持更新的 GPU 架构。

- **Inkling (InklingForConditionalGeneration) on SM120**：在 Blackwell 上 `tml_fa4` 注意力内核缺少 Paged-KV 支持——Issue [#51405](https://github.com/vllm-project/vllm/issues/51405)。

## 4. Performance & Optimization

- **Kimi-K3 ROCm Performance**：PR [#63409](https://github.com/vllm-project/vllm/pull/63409) 修复了关闭 DCP 时 ROCm 上严重的精度回退问题，通过向融合 MLA decode q-prep 内核传递零位置。PR [#63342](https://github.com/vllm-project/vllm/pull/63342) 将融合 KDA prefill conv1d 的 `block_m` 从 8 提升到 128，显著提升了吞吐量。

- **DeepSeek-V4-Pro Mono Decode Layer**：PR [#61482](https://github.com/vllm-project/vllm/pull/61482) 在 MI355X (gfx950) 上为 DeepSeek-V4-Pro 实现了独立的 mono decode 层，采用持久化 FlyDSL 启动方式实现 TP8，可通过 `--monokernel` 选配启用。

- **Adaptive Verification Overhead Reduction**：PR [#63421](https://github.com/vllm-project/vllm/pull/63421) 用单次启动 Triton 内核替换了 `torch.compile(dynamic=True)` 的草稿预算选择逻辑，消除了 serving 期间的中途编译卡顿，将每次预算绑定的宿主开销降低了约 6 倍。

- **MiniMax-M3 MonoKernel Upgrade**：PR [#63398](https://github.com/vllm-project/vllm/pull/63398) 在 TP4 MI355X 上将默认的 FFN-only `--monokernel` 升级为全层稀疏流水线，融合了投影层、索引器、稀疏注意力、MoE 和 TP 归约。

- **GB10 上的权重加载**：Issue [#58726](https://github.com/vllm-project/vllm/issues/58726) 报告了 DGX Spark (GB10) 上权重加载缓慢的问题，原因是 safetensors mmap 视图的 per-tensor H2D 复制。其他硬件后端的相关工作正在进行中（ROCm #49991, Ascend NPU #50794）。

- **GB10 上的 Qwen3.8-Flash-Next**：Issue [#62776](https://github.com/vllm-project/vllm/issues/62776) 报告 2×DGX Spark (GB10, sm121) 上超过约 2048 tokens 的提示词内容对模型不可见。

## 5. Stability & Regressions

- **MTP/DFlash/DSpark 非法内存访问**（关键）：PR [#63432](https://github.com/vllm-project/vllm/pull/63432) 修复了当推测解码草稿超过 `max_position_embeddings` 时的 CUDA 非法内存访问问题。草稿在请求超出检查点限制时会被终止（例如 262K vs 通过 YaRN 扩展的 1M）。

- **Hopper 上的 Kimi-K3 FP8 KV Cache**（高优先级）：Issue [#51313](https://github.com/vllm-project/vllm/issues/51313) — 在 H200 上使用 `--kv-cache-dtype fp8`  serving Kimi-K3 时失败，需要启用 `use_prefill_query_quantization`，但该标志在非 Blackwell 设备上被静默忽略。

- **ROCm 上的 Qwen3.8-27B-FP8 精度崩溃**（高优先级）：Issue [#60160](https://github.com/vllm-project/vllm/issues/60160) — 在 MI355X 上高并发时使用 `VLLM_ROCM_USE_AITER=1` 时精度崩溃；关闭 AITER 后正常工作。

- **NixlConnector 提前释放 KV 块**（中优先级）：Issue [#61229](https://github.com/vllm-project/vllm/issues/61229) — 租约到期时释放 KV 块，而远程 READ 仍在进行中，导致 decode 静默消费被覆盖的 KV。

- **TRITON_MLA 批处理不变性 Bug**（中优先级）：Issue [#60007](https://github.com/vllm-project/vllm/issues/60007) — 在使用分块 prefill 和 `VLLM_BATCH_INVARIANT=1` 时，TRITON_MLA 对 DeepSeek-V2-Lite 和 DeepSeek-V3.1 不满足批处理不变性。

- **Gemma 4 per-token-head KV 量化**（中优先级）：Issue [#40388](https://github.com/vllm-project/vllm/issues/40388) — Gemma 4 使用 per-token-head KV cache 量化时初始化失败。

## 6. 对应用开发者的意义

- **生产环境 ROCm 用户**：在 AMD MI355X 上运行 Kimi-K3 时，确保 DCP 已启用或等待 [#63409](https://github.com/vllm-project/vllm/pull/63409) 中的修复。合并后的 [#63342](https://github.com/vllm-project/vllm/pull/63342) 中的 block_m=128 优化应该能提升 prefill 吞吐量——考虑在合并后升级。

- **推测解码用户**：[#63421](https://github.com/vllm-project/vllm/pull/63421) 中的 Triton 内核替换消除了编译卡顿——这将改善 serving 期间的延迟一致性，尤其是在启用自适应验证时。

- **GB10/DGX Spark 用户**：注意在 Qwen3.8-Flash-Next 中使用时的 2048-token 提示词可见性 bug ([#62776](https://github.com/vllm-project/vllm/issues/62776))。同时也在调查权重加载性能问题 ([#58726](https://github.com/vllm-project/vllm/issues/58726))。

- **批处理不变性工作负载**：[#27433](https://github.com/vllm-project/vllm/issues/27433) 中的持续工作旨在改进确定性——这对于生产推理流水线中的调试和可重现性非常重要。

- **多模态 ViT 工作负载**：[#38175](https://github.com/vllm-project/vllm/issues/38175) 中的 RFC 跟踪 ViT 完整 CUDA Graph 支持，这可能显著提升 Qwen3-VL、GLM-V 和 Kimi K2.5 等模型的视觉编码吞吐量。</think>

# vLLM 每日摘要 — 2026-10-24

## 1. 今日要闻

vLLM 项目继续重点投入 AMD ROCm 优化和多模态能力。两条重要 PR 已合并：修复了 DCP 关闭时 ROCm 上 Kimi-K3 的精度回退问题 ([#63409](https://github.com/vllm-project/vllm/pull/63409))，并将融合 KDA prefill conv1d 的 `block_m` 从 8 提升到 128，显著提升了吞吐量 ([#63342](https://github.com/vllm-project/vllm/pull/63342))。批处理不变性特性 ([#27433](https://github.com/vllm-project/vllm/issues/27433)) 依然保持高活跃度（103 条评论），表明正在持续推进 LLM 推理的确定性改进工作。

---

## 2. 版本发布与重大变更

过去 24 小时内无新版本发布。

---

## 3. 新模型与硬件支持

- **NVIDIA Dory (Dory1.0-4B-BF16)**：通过 PR [#60149](https://github.com/vllm-project/vllm/pull/60149) 添加了完整模型支持——这是来自 NVIDIA Nemotron-Labs 的 latent-recurrent / looped LLM，采用 normalized-GPT 架构并配备交错式混合滑动窗口注意力机制。

- **DeepSeek-V4-Flash / DeepSeek-V4-Flash-0731 on SM8x (Ampere)**：仍待解决——Issue [#50576](https://github.com/vllm-project/vllm/issues/50576) 跟踪在 Ampere (A100/A800, RTX 30xx) 上启用支持的工作。目前仅支持更新的 GPU 架构。

- **Inkling (InklingForConditionalGeneration) on SM120**：在 Blackwell 上 `tml_fa4` 注意力内核缺少 Paged-KV 支持——Issue [#51405](https://github.com/vllm-project/vllm/issues/51405)。

---

## 4. 性能与优化

- **Kimi-K3 ROCm 性能**：PR [#63409](https://github.com/vllm-project/vllm/pull/63409) 修复了关闭 DCP 时 ROCm 上严重的精度回退问题，通过向融合 MLA decode q-prep 内核传递零位置。PR [#63342](https://github.com/vllm-project/vllm/pull/63342) 将融合 KDA prefill conv1d 的 `block_m` 从 8 提升到 128，显著提升了吞吐量。

- **DeepSeek-V4-Pro Mono Decode Layer**：PR [#61482](https://github.com/vllm-project/vllm/pull/61482) 在 MI355X (gfx950) 上为 DeepSeek-V4-Pro 实现了独立的 mono decode 层，采用持久化 FlyDSL 启动方式实现 TP8，可通过 `--monokernel` 选配启用。

- **自适应验证开销优化**：PR [#63421](https://github.com/vllm-project/vllm/pull/63421) 用单次启动 Triton 内核替换了 `torch.compile(dynamic=True)` 的草稿预算选择逻辑，消除了 serving 期间的中途编译卡顿，将每次预算绑定的宿主机开销降低了约 6 倍。

- **MiniMax-M3 MonoKernel 升级**：PR [#63398](https://github.com/vllm-project/vllm/pull/63398) 在 TP4 MI355X 上将默认的 FFN-only `--monokernel` 升级为全层稀疏流水线，融合了投影层、索引器、稀疏注意力、MoE 和 TP 归约。

- **GB10 上的权重加载**：Issue [#58726](https://github.com/vllm-project/vllm/issues/58726) 报告了 DGX Spark (GB10) 上权重加载缓慢的问题，原因是 safetensors mmap 视图的 per-tensor H2D 复制。其他硬件后端的相关工作正在进行中（ROCm #49991, Ascend NPU #50794）。

- **GB10 上的 Qwen3.8-Flash-Next**：Issue [#62776](https://github.com/vllm-project/vllm/issues/62776) 报告 2×DGX Spark (GB10, sm121) 上超过约 2048 tokens 的提示词内容对模型不可见。

---

## 5. 稳定性与回退问题

- **MTP/DFlash/DSpark 非法内存访问**（关键）：PR [#63432](https://github.com/vllm-project/vllm/pull/63432) 修复了当推测解码草稿超过 `max_position_embeddings` 时的 CUDA 非法内存访问问题。草稿在请求超出检查点限制时会被终止（例如 262K vs 通过 YaRN 扩展的 1M）。

- **Hopper 上的 Kimi-K3 FP8 KV Cache**（高优先级）：Issue [#51313](https://github.com/vllm-project/vllm/issues/51313) — 在 H200 上使用 `--kv-cache-dtype fp8`  serving Kimi-K3 时失败，需要启用 `use_prefill_query_quantization`，但该标志在非 Blackwell 设备上被静默忽略。

- **ROCm 上的 Qwen3.8-27B-FP8 精度崩溃**（高优先级）：Issue [#60160](https://github.com/vllm-project/vllm/issues/60160) — 在 MI355X 上高并发时使用 `VLLM_ROCM_USE_AITER=1` 时精度崩溃；关闭 AITER 后正常工作。

- **NixlConnector 提前释放 KV 块**（中优先级）：Issue [#61229](https://github.com/vllm-project/vllm/issues/61229) — 租约到期时释放 KV 块，而远程 READ 仍在进行中，导致 decode 静默消费被覆盖的 KV。

- **TRITON_MLA 批处理不变性 Bug**（中优先级）：Issue [#60007](https://github.com/vllm-project/vllm/issues/60007) — 在使用分块 prefill 和 `VLLM_BATCH_INVARIANT=1` 时，TRITON_MLA 对 DeepSeek-V2-Lite 和 DeepSeek-V3.1 不满足批处理不变性。

- **Gemma 4 per-token-head KV 量化**（中优先级）：Issue [#40388](https://github.com/vllm-project/vllm/issues/40388) — Gemma 4 使用 per-token-head KV cache 量化时初始化失败。

---

## 6. 对应用开发者的意义

- **生产环境 ROCm 用户**：在 AMD MI355X 上运行 Kimi-K3 时，确保 DCP 已启用或等待 [#63409](https://github.com/vllm-project/vllm/pull/63409) 中的修复。合并后的 [#63342](https://github.com/vllm-project/vllm/pull/63342) 中的 block_m=128 优化应该能提升 prefill 吞吐量——考虑在合并后升级。

- **推测解码用户**：[#63421](https://github.com/vllm-project/vllm/pull/63421) 中的 Triton 内核替换消除了编译卡顿——这将改善 serving 期间的延迟一致性，尤其是在启用自适应验证时。

- **GB10/DGX Spark 用户**：注意在 Qwen3.8-Flash-Next 中使用时的 2048-token 提示词可见性 bug ([#62776](https://github.com/vllm-project/vllm/issues/62776))。同时也在调查权重加载性能问题 ([#58726](https://github.com/vllm-project/vllm/issues/58726))。

- **批处理不变性工作负载**：[#27433](https://github.com/vllm-project/vllm/issues/27433) 中的持续工作旨在改进确定性——这对于生产推理流水线中的调试和可重现性非常重要。

- **多模态 ViT 工作负载**：[#38175](https://github.com/vllm-project/vllm/issues/38175) 中的 RFC 跟踪 ViT 完整 CUDA Graph 支持，这可能显著提升 Qwen3-VL、GLM-V 和 Kimi K2.5 等模型的视觉编码吞吐量。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang digest into Simplified Chinese, maintaining the exact Markdown structure (tables, headings, lists, etc.) while using natural technical Chinese register.

Let me translate this carefully:

## Key translations to consider:
- "Digest" → "简报"
- "Highlights" → "今日要闻"
- "Releases & Breaking Changes" → "版本发布与重大变更"
- "New Model & Hardware Support" → "新模型与硬件支持"
- "Performance & Optimization" → "性能优化"
- "Stability & Regressions" → "稳定性与回归问题"
- "What This Means for Application Developers" → "对应用开发者的影响"

Let me translate the full content:</think>

# SGLang 简报 — 2026-10-24

## 1. 今日要闻

各条线开发持续推进：DeepSeek-V4/V4.1 配方集成已进入收尾阶段（分批 PR #45315、#45907），多个影响 KV Cache 配合投机解码和 EP2 配置的关键 Bug 仍在处理中，Qwen3.8-Flash-Next 在 AMD ROCm 上的性能优化正在追踪。CI 基础设施可靠性仍是焦点， flaky test 追踪帖已有 125 条评论。

---

## 2. 版本发布与重大变更

**过去 24 小时内无版本发布。**

---

## 3. 新模型与硬件支持

| 项目 | 描述 | 链接 |
|------|-------------|-------|
| **Cambricon MLU** | 新增平台支持，包含设备管理、CNCL 通信和 RMSNorm | [#45149](https://github.com/sgl-project/sglang/pull/45149) |
| **DeepSeek-V4/V4.1** | 聊天提示词现通过 deepseek-recipe 0.2.0 渲染；新增输出解析 | [#45315](https://github.com/sgl-project/sglang/pull/45315), [#45907](https://github.com/sgl-project/sglang/pull/45907) |
| **T-Head SAIL PPU** | Zhenwu 810/810E/M890P 一级支持路线图 | [#37519](https://github.com/sgl-project/sglang/issues/37519) |
| **SenseNova-U1** | SenseNova-U1/U1.5 特性与性能追踪 | [#37742](https://github.com/sgl-project/sglang/issues/37742) |
| **Ascend NPU** | Kimi-K3 共享式紧凑通信 DCP | [#40825](https://github.com/sgl-project/sglang/pull/40825) |

---

## 4. 性能优化

| 项目 | 描述 | 链接 |
|------|-------------|-------|
| **DeepSeek-V4.1 MegaMoE** | 让 Mega-mHC 在 MegaGate 下写入 MegaMoE 输入，消除冗余量化通道 | [#46163](https://github.com/sgl-project/sglang/pull/46163) |
| **DeepSeek-V4 分页 KV 解量化** | 向量化解量化（每程序 4 token）复用压缩 Cache | [#42929](https://github.com/sgl-project/sglang/pull/42929) |
| **DeepSeek-V4.1 Engram** | 为 DP Attention 的每rank表从对端设备分片读取 Engram 行 | [#46180](https://github.com/sgl-project/sglang/pull/46180) |
| **Qwen3.8-Flash-Next host KV** | QSA 稀疏注意力后端的 Host KV 层（262K 上下文，~24 KiB/token） | [#46191](https://github.com/sgl-project/sglang/pull/46191) |
| **内存池 FIFO** | StagingAllocator、FlexKVComm、LMCacheUnifiedRadixCache 中用 `deque` 替代 O(N) 的 `list.pop(0)` | [#46178](https://github.com/sgl-project/sglang/pull/46178) |
| **Diffusion 空间并行** | 单次构建空间并行因果卷积输入 | [#46174](https://github.com/sgl-project/sglang/pull/46174) |
| **Diffusion FA4** | B300 (sm_103) 长自注意力优先选用 FA4 而非 cuDNN SDPA | [#46146](https://github.com/sgl-project/sglang/pull/46146) |
| **ModelOpt FP4** | 避免在 marlin runner 中物化未使用的 swizzled blockscale | [#46192](https://github.com/sgl-project/sglang/pull/46192) |
| **Qwen3.8-Flash-Next ROCm** | gfx950 / MI355X 性能优化追踪 | [#44304](https://github.com/sgl-project/sglang/issues/44304) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 描述 | 链接 |
|----------|-------|-------------|-------|
| **Critical** | NVFP4 KV + 投机解码 | FlashInfer 解量化工作区路径中 `extend_prefix_lens_cpu is None` | [#36010](https://github.com/sgl-project/sglang/issues/36010) |
| **Critical** | EP2 tp=2 + ep=2 | Qwen3.8-Flash-Next-NVFP4 (RTX PRO 6000, sm_120) 上非法内存访问崩溃 | [#44291](https://github.com/sgl-project/sglang/issues/44291) |
| **High** | HiCache + Mooncake L3 | 调度器接纳了无法完成的分块预填充，抛出 "Prefill out of memory" 崩溃 | [#45989](https://github.com/sgl-project/sglang/issues/45989) |
| **High** | RadixCache 回缩 | `pause_generation(mode="retract")` 未完全释放 KV Cache 内存 | [#33783](https://github.com/sgl-project/sglang/issues/33783) |
| **Medium** | Anthropic 端点 | `tool_result` 中的 `tool_reference` 部分导致缺少延迟引用支持的聊天模板失效 | [#35692](https://github.com/sgl-project/sglang/issues/35692) |
| **Medium** | GLM 工具调用解析器 | JSON null 被转换为字符串 "None"/"null" | [#46037](https://github.com/sgl-project/sglang/issues/46037) |
| **Medium** | Qwen3CoderDetector 流式输出 | 模型省略 `</function>` 时发出未终结的 JSON | [#43150](https://github.com/sgl-project/sglang/issues/43150) |
| **Medium** | Kimi-K3 DCP all-to-all | 2 节点 GB300 上解码输出乱码；设置 NCCL_GRAPH_REGISTER=0 可恢复 | [#45367](https://github.com/sgl-project/sglang/issues/45367) |
| **CI** | Flaky tests | 追踪 PR Test Base/Extra 运行中的 CI 基础设施故障 | [#42752](https://github.com/sgl-project/sglang/issues/42752) |

---

## 6. 对应用开发者的影响

1. **DeepSeek-V4/V4.1 集成接近完成**：分阶段推进的 deepseek-recipe 聊天提示词渲染和输出解析即将就绪。使用这些模型的同学可期待聊天模板兼容性改善。

2. **避免 NVFP4 + 投机解码组合**：当前 NVFP4 KV Cache 配合投机解码无法正常工作。如需投机解码（例如 NEXTN MTP），请勿使用 `--kv-cache-dtype nvfp4`。

3. **EP2 部署需充分测试**：Qwen3.8-Flash-Next-NVFP4 上的张量并行 + 专家并行组合（tp=2 + ep=2）存在崩溃问题。生产环境部署前请务必全面测试。

4. **新硬件后端正在推进**：Cambricon MLU 支持尚处早期，预计功能覆盖有限，早期使用者需有心理准备。

5. **Docker 构建已修复**：已更新 pinned sgl-nvidia-mega commit，主分支构建失败问题已解决。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the llama.cpp digest from English to Chinese (Simplified). I need to:
1. Translate all the content
2. Keep the Markdown structure exactly as-is
3. Keep URLs, issue/PR references, code identifiers, etc. in their original form
4. Use natural technical Chinese register

Let me go through each section carefully.

The digest is dated 2026-10-24, which is interesting as it's in the future from the current date (2024), but I'll keep it as is since the user provided this data.

Let me translate section by section:

## 1. Today's Highlights

## 2. Releases & Breaking Changes

## 3. New Model & Hardware Support

## 4. Performance & Optimization

## 5. Stability & Regressions

## 6. What This Means for Application Developers

I need to maintain:
- Tables (including column alignment rows)
- Lists
- Bold/italic
- Code spans and blocks
- Horizontal rules
- Emoji
- URLs
- Issue/PR numbers

Let me translate carefully:</think>

# llama.cpp 动态 — 2026-10-24

## 1. 今日要闻

llama.cpp 项目继续保持高速迭代，后端优化覆盖 CUDA、SYCL 和 Hexagon 两大领域。值得关注的 PR 包括 Qwen4Exp 和 GLM5-Next 的内存高效 QSA 注意力机制实现，在长上下文场景下可节省 2–4 GB 显存。JQ_K 量化家族正在向所有主流后端移植，代表着低位宽选项的重大扩展。

## 2. 版本更新与破坏性变更

过去 24 小时内无新版本发布。最新的稳定构建仍为 b11846（CUDA）和 b11840（macOS/iOS/Hexagon）。

- **b11846** — CUDA：强制 DP4A MMQ tile 高度为 warp 大小的倍数 (#30837) — 添加静态断言以在编译时捕获 tile 高度配置错误。
- **b11840** — Hexagon：添加 CEIL 操作 (#31006) — 新增 f32 和 f16 CEIL 操作并更新文档。
- **b11838** — GGML：修复 ggml_time_us 时间溢出 (#30969) — 改用 `double` 防止长时间推理时溢出。
- **b11835** — SYCL：将 device 传入 mul_mat_uses_onednn (#31014) — 后端一致性修复。

## 3. 新模型与硬件支持

| 模型/架构 | 状态 | PR/Issue |
|---|---|---|
| **GLM5-Next** | QSA 注意力（无需 kq_mask） | #31009 |
| **Qwen4Exp** | QSA 注意力优化（已合并） | #30965 |
| **JQ2_K–JQ6_K 量化** | CPU 支持 | #30715 |
| **JQ2_K–JQ6_K 量化** | Metal、CUDA、Vulkan、SYCL | #30716、#30717、#30718 |
| **TML Inkling** | 架构支持 | #25731 |
| **Soprano 音频** | MTMD 音频生成 | #28607 |
| **Intel Arc Pro B70** | SYCL F16 NaN 输出修复 | #30892 |

## 4. 性能与优化

**内存降低：**
- Qwen4Exp 和 GLM5-Next QSA 优化消除了 kq_mask 分配，在 **ub 4096** 时节省 **2 GB**，在 **ub 8192** 时节省 **4 GB** — 有利于专家缓存或更大上下文场景。

**后端工作：**
- Vulkan 张量并行 allreduce (#25051) — 新增 F16 AllReduce 并修复流水线崩溃。
- Hexagon 多核 HMX flash attention 的 KV-head 团队拆分 (#31055) — 当 `n_kv_heads` 不能整除核心数时改进 FA。
- 自适应 MTP 草稿深度 (#27210) — 新增 `--spec-type draft-mtp-adaptive` 选项。
- MoE 缓存 CPU 后备 (#30966) — 根据 `--moe-cache-cpu-share` 在 CPU 上执行错过的专家。

**构建/CI 修复：**
- 共享模型缓存 runner 之间的 CI 数据竞争修复 (#31046)。
- CMake pkg-config 系统 GGML 修复 (#31048)。

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|---|---|---|
| **高** | CUDA Q4_1/Q5_1 矩阵向量乘法 fp16 溢出导致 NaN  logits (#30950) | 待处理 |
| **高** | SYCL F16 在 Qwen3.8-27B Q4_K_M 上输出 NaN（自 #29107 起）( #30892) | 待处理；禁用 fused GEMM 可解决 |
| **高** | CUDA flash attention 在 Windows 上非法内存访问 (#30436) | 待处理；-fa off 可用 |
| **中** | 混合/循环模型上的上下文检查点失效 (#24055) | 待处理，21 条评论 |
| **中** | Qwen 3.8 flash + MTP 启动时断言失败 (#29811) | 待处理 |
| **中** | Vulkan RDNA3 提示词处理速度下降（自 b10780 起）(#28752) | 已关闭 |
| **中** | Metal 在 MUL_MAT BF16 K≥64, batch>8 时中止 (#30973) | 待处理 |
| **低** | Blackwell GGML-CUDA SOFT_MAX 崩溃 (#25060) | 已关闭 |
| **安全** | 通过 WebUI 查询参数进行指令注入 (#25790) | 待处理 |

## 6. 这对应用开发者意味着什么

1. **量化选项扩展** — JQ_K 类型（2–6 位）正在登陆所有后端。关注量化质量基准测试；相比现有 IQ 格式，这些可能提供更好的每比特质量。

2. **长上下文内存节省** — 如果在上下文 4K+ 下运行 Qwen4Exp 或 GLM5-Next，QSA 优化显著降低内存占用。考虑重新测试之前因 OOM 受阻的工作负载。

3. **关注 SYCL F16 回归** — Intel Arc Pro B70 用户报告 Q4_K_M 输出 NaN。使用 SYCL 时，临时禁用 fused GEMM 作为变通方案。

4. **服务器安全** — 查询参数注入问题 (#25790) 仍未修复。在补丁发布前，避免将 llama-server 直接暴露于不可信网络。

5. **JSON 深度限制将至** — PR #30242 添加了防止深层嵌套 JSON 导致服务器崩溃的保护 — 这是针对工具使用工作负载的防御性修复。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest from English to Chinese. Let me analyze the requirements:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in original form - do not translate them
5. Use natural technical Chinese - register of a Chinese developer newsletter

Let me translate this carefully, maintaining the exact structure:

## 1. Today's Highlights

## 2. Releases & Breaking Changes

## 3. New Model & Hardware Support

## 4. Performance & Optimization

## 5. Stability & Regressions

## 6. What This Means for Application Developers

I need to translate everything while:
- Keeping URLs like https://github.com/ollama/ollama/issues/1016
- Keeping issue numbers like #1016
- Keeping version numbers like v0.40.11
- Keeping file paths like /api/chat
- Keeping model names like Qwen3Coder, Gemma 4, NVIDIA Nemotron 3.5 Bolt E4B

Let me translate now:</think>

# Ollama 速报 — 2026-10-24

## 1. 今日焦点

Ollama 发布 **v0.40.11**，修复了 Qwen3Coder 函数解析和 OpenCode 上下文分配问题；v0.40.10 新增 **NVIDIA Nemotron 3.5 Bolt E4B** 支持 — 这是一个基于 Gemma 4 的 VLM。社区在模型解析、语音/Phonon 集成和调度器改进方面活跃。

## 2. 版本更新与重大变更

| 版本 | 关键变更 |
|---------|-------------|
| **v0.40.11** | 修复 Qwen3Coder 参数中的函数闭合标签；为 OpenCode 使用分配的上下文；允许 vllm-d3 决策的空状态 |
| **v0.40.10** | 新增 NVIDIA Nemotron 3.5 Bolt E4B（基于 Gemma 4 的 VLM，128K 上下文，DFlash 解码器） |

本周期**无重大变更**报告。

## 3. 新模型与硬件支持

- **NVIDIA Nemotron 3.5 Bolt E4B** — 基于 Gemma 4 的视觉语言模型，支持本地快速对话、图像理解和工具调用；128K token 上下文窗口（[ollama.com/library/nemotron-3.5-bolt](https://ollama.com/library/nemotron-3.5-bolt)）
- **Apple Foundation Models** — PR #19184 引入 `apple-foundation-model` 运行器，支持 macOS 27 上的设备端模型，通过 `fm` CLI 调用；支持 `ollama run`、`/api/chat`、`/api/generate` 和 OpenAI 兼容端点
- **Phonon 语音目录** — PR #19242 添加 Gradium 语音目录；PR #19234 移植 xn-ptts 英语规范化以支持 MLX 分词器的符号处理

**公开功能请求：**
- Intel Mac 上的 AMD GPU 支持（[#1016](https://github.com/ollama/ollama/issues/1016)，174 条评论）
- Windows ARM 上的 Snapdragon X Elite NPU 和 GPU（[#5360](https://github.com/ollama/ollama/issues/5360)，68 👍）

## 4. 性能与优化

| 领域 | 变更 |
|------|--------|
| **MLX 图像细节** | PR #19247 为紧凑型 Gemma 4 视觉塔保持小图像细节，通过向上取整网格大小以维持 70 token 预算 |
| **工具调用解析** | PR #19252 修复渲染器中将整数参数渲染为小数的问题（`30000` → `"30000.0"`） |
| **Gemma 4 恢复** | PR #19226 恢复跟随尾随噪声（如 `$$`）的完整工具调用对象 |
| **OpenCode 上下文** | PR #19193 预加载模型并在启动前从 `/api/ps` 读取分配的上下文，避免延迟压缩 |
| **上下文窗口** | Issue #18995：`OLLAMA_CONTEXT_LENGTH` 在 `/api/show` 或 `/api/tags` 中未生效 — 用户看到的是原生上下文而非有效限制 |

**性能回归：**
- Issue #19254：`flint:40b-a2b-gguf-nvfp4`（MLX）在 Apple Silicon M3 上比 `flint:40b-a2b-qat-int4` 更慢

## 5. 稳定性与回归

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | #18980 — 10 月 10 日起 5-8% 生成失败（glm-5.3-flash）；已识别集群数据损坏 | 待处理 |
| **高** | #15419 — Ollama Cloud 频繁 503 错误，导致云模型在生产代理中不可靠 | 待处理 |
| **中** | #19139 — Windows `/api/chat` 处理大提示词时约 15 秒后连接重置（RTX 3090） | 待处理 |
| **中** | #19245 — 调度器停滞：标记为驱逐的运行器永不卸载，而其他客户端持续使用（keep_alive 覆盖） | 已关闭 |
| **中** | #19182 — 待处理驱逐被请求的 keep_alive 取消；等待请求停滞 | 待处理 |
| **低** | #19235 — `install.sh` 在下载后立即调用 sudo，导致慢速连接超时 | 待处理 |
| **低** | #19249 — Claude Code 自动压缩失败，`deepseek-v4.1-flash:1017-cloud` 不会自动压缩 | 待处理 |

## 6. 这对应用开发者意味着什么

- **大提示词的 Windows 用户**：预计约 15 秒后连接重置；暂无修复方案 — 考虑分块或减少提示词大小。
- **工具调用应用**：整数参数小数 bug（#19252）已在 PR 中修复 — 确保更新以获取修复。
- **Modelfile 思考控制**：通过 modelfile 启用 `/think` 或 `/nothink` 的功能请求（#10961）仍未开放 — 尚无原生支持。
- **云可靠性**：生产代理使用 Ollama Cloud 的用户，503 错误问题（#15419）仍未解决 — 建议制定回退策略。
- **优雅节点关闭**：暂停/恢复 API 的功能请求（#17300）以支持负载均衡器故障转移仍未实现 — 尚不支持。
- **新型 Apple Silicon Mac**：通过 PR #19184 即将支持 Apple Foundation Model，将能在 macOS 27 上实现原生设备端推理。
- **上下文长度**：`OLLAMA_CONTEXT_LENGTH` 行为（#18995）可能让用户意外 — API 端点报告原生上下文，而非有效限制。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM Digest into Simplified Chinese, following specific rules:
- Output ONLY the translation, no preamble, no explanation, no markdown fences
- Preserve Markdown structure exactly (headings, tables, lists, etc.)
- Keep URLs, issue/PR numbers, project names, version tags, file paths as-is
- Use natural technical Chinese register

Let me translate this carefully:

## 1. Today's Highlights

**Critical Security Advisory**: LiteLLM version 1.107.0 was compromised and has been removed from PyPI. The malicious build contained a credential stealer (`cook.pth`) and an RCE loader (`sitecustomize`), built from a lookalike repository. All Docker images (`latest`, `main-latest`, `main-stable`) have been yanked. Users must upgrade immediately to a safe version. See [#47826](https://github.com/BerriAI/litellm/issues/47826).

On the positive side, the project is shipping significant infrastructure improvements today: an opt-in Rust gateway for improved performance, JevRank reranking via Perplexity, and proper billing for OpenAI's 12-hour prompt cache writes.

## 2. Releases & Breaking Changes

## 3. New Model & Hardware Support

## 4. Performance & Optimization

## 5. Stability & Regressions

## 6. What This Means for Application Developers

Let me translate this now:</think>

# LiteLLM 要闻 — 2026-10-24

## 1. 今日要闻

**严重安全预警**：LiteLLM 1.107.0 版本被篡改，已从 PyPI 下架。该恶意构建包含凭证窃取器（`cook.pth`）和 RCE 加载器（`sitecustomize`），基于一个仿冒仓库构建。所有 Docker 镜像（`latest`、`main-latest`、`main-stable`）均已撤回。用户必须立即升级到安全版本。详见 [#47826](https://github.com/BerriAI/litellm/issues/47826)。

积极的一面是，项目今天发布了重要的基础设施改进：可选的 Rust 网关以提升性能、通过 Perplexity 的 JevRank 排序功能，以及对 OpenAI 12 小时提示缓存写入的准确计费。

---

## 2. 版本发布与重大变更

| 状态 | 项目 | 详情 |
|------|------|-------|
| 🔴 **安全** | v1.107.0 已撤回 | 恶意构建已从 PyPI 和 Docker 中移除。请勿使用，请升级到最新安全版本。 |
| 🟢 **新增** | 可选 Rust 网关 | PR [#48132](https://github.com/BerriAI/litellm/pull/48132) — 运营者可启用 Rust 前端监听器与 Python 网关并行运行。两者均受监督，共享写入器池的关闭协调。 |
| 🟢 **新增** | 预算更新权限控制 | PR [#47681](https://github.com/BerriAI/litellm/pull/47681) — `/key/update` 现已对 `budget_duration` 和 `budget_id` 变更检查权限（此前仅检查 `max_budget`）。 |

---

## 3. 新模型与硬件支持

| 提供商/模型 | 类型 | 说明 |
|------------|------|------|
| **Engy** | 新 OpenAI 兼容提供商 | PR [#46744](https://github.com/BerriAI/litellm/pull/46744) — 通过 `https://api.engy.ai/v1` 提供 8 个模型 |
| **JevRank** | 排序功能 | PR [#48133](https://github.com/BerriAI/litellm/pull/48133) — 通过 Perplexity + Jev 决策模型自动实现排序接口 |
| **Gemini Live Avatar** | 功能需求 | [#43166](https://github.com/BerriAI/litellm/issues/43166) — 支持 Gemini 3.8 Live 实时集成的 `avatar_config` |
| **OpenCode Zen / Go** | 新提供商 | PR [#39549](https://github.com/BerriAI/litellm/pull/39549) — 新增 `x-opencode-session` 请求头支持 |

---

## 4. 性能与优化

| 领域 | 变更 | PR |
|------|------|-----|
| **Spend 汇总可靠性** | 等待每个请求的汇总入队；报告失败 | [#48131](https://github.com/BerriAI/litellm/pull/48131) |
| **路由重试逻辑** | 对固定会话在冷却前重试健康部署 | [#48134](https://github.com/BerriAI/litellm/pull/48134) |
| **提示缓存计费** | 12 小时 OpenAI 缓存写入按 2.5 倍计费（而非 1.25 倍） | [#48088](https://github.com/BerriAI/litellm/pull/48088) |
| **PgBouncer 生命周期** | 网关关闭期间限制清理 | [#48127](https://github.com/BerriAI/litellm/pull/48127) |
| **自定义定价** | 在 Responses API 中尊重每调用级别的 `input_cost_per_token` / `output_cost_per_token` | [#48119](https://github.com/BerriAI/litellm/pull/48119) |
| **类型清理** | 13 处注解中用 `object` 替换 `Any` | [#48001](https://github.com/BerriAI/litellm/pull/48001) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| 🔴 **严重** | v1.107.0 被篡改 — 凭证窃取器 + RCE | 进行中 | — |
| 🟡 **高** | `x-litellm-tags` 未路由到正确模型 | 进行中，P0 | — |
| 🟡 **高** | 按模型速率限制未触发回退 | 进行中 | — |
| 🟡 **高** | `think: false` 被忽略；仍返回推理内容 | 进行中 | — |
| 🟡 **中** | Azure Responses：>60 秒请求失败（套接字超时） | 进行中 | — |
| 🟡 **中** | Langfuse OTEL 在 `asyncio.gather()` 下丢失 span | 进行中 | — |
| 🟡 **中** | Redis 缓存测试因 `url` 字段失败 | 进行中 | — |
| 🟢 **低** | `/v1beta/interactions` 未记录 `spend_logs_metadata` | 已关闭 | — |
| 🟢 **低** | 管理端点暴露原始 DB 异常 | 已关闭 | — |

---

## 6. 这对应用开发者的意义

1. **立即行动**：如果你正在使用 v1.107.0 或最近拉取了 `latest` Docker 镜像，请立即升级。该篡改涉及凭证盗窃和远程代码执行能力。

2. **路由改进**：路由器现会对固定会话在进入冷却前重试健康部署，减少部署期间的 503 错误。

3. **排序功能**：通过 Perplexity 的 JevRank 现已可用 — 排序端点将自动使用决策模型进行组合排序和使用量追踪。

4. **计费准确性**：如果使用 OpenAI GPT-5.6+ 及 12 小时提示缓存，现已按正确的 2.5 倍费率计费（此前计费不足）。

5. **上下文管理修复**：两个修复解决了工具结果清除问题 — 一是针对 Responses API 路径（[#47861](https://github.com/BerriAI/litellm/pull/47861)），二是针对 token 触发计数（[#47857](https://github.com/BerriAI/litellm/pull/47857)）。

6. **气隙部署**：新功能（[#46466](https://github.com/BerriAI/litellm/issues/46466)）允许禁用远程版本检查查询 — 适用于受限出站环境。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate this GitHub digest into Chinese. I need to:
1. Translate only the content, keeping the markdown structure exactly
2. Keep all technical terms, URLs, issue numbers, code, etc. as-is
3. Use natural technical Chinese (the register of a Chinese developer newsletter)
4. Output ONLY the translation, no preamble or explanation

Let me translate section by section while preserving the structure:

## 1. Today's Highlights → 今日要闻

## 2. Releases & Breaking Changes → 发布与重大变更

## 3. New Model & Hardware Support → 新模型与硬件支持

## 4. Performance & Optimization → 性能与优化

## 5. Stability & Regressions → 稳定性与回归问题

## 6. What This Means for Application Developers → 这对应用开发者意味着什么

Now let me translate all the content:</think>

# Unsloth 要闻 — 2026-10-24

## 1. 今日要闻

Unsloth 发布 **v0.1.910-beta** 版本，新增对 **MOSS-Image**、**Recursive 的 Flint** 以及 **NVIDIA Nemotron Bolt 4B** 模型的支持。本次更新带来了仅聊天功能的 Unsloth Desktop 安装程序选项、扩展了 **MLX MoE 模型** 支持（可运行超过 Mac 本机内存的模型），以及一个 **OpenAI 兼容的微调 API**。后端主要工作包括 FSDP2 优化器恢复修复、NVFP4 编译缓存标记，以及扩散模型的 VRAM 管理。

## 2. 发布与重大变更

| 版本 | 变更 |
|------|------|
| **v0.1.910-beta** | 支持 MOSS-Image、Flint、NVIDIA Bolt E4B；提供仅聊天版 Desktop 安装程序；支持超出 Mac 内存的 MLX MoE 模型；OpenAI 兼容微调 API |
| — | 无重大变更报告 |

## 3. 新模型与硬件支持

- **MOSS-Image** — 新支持的多模态视觉模型
- **Recursive's Flint** — 新增本地推理支持
- **NVIDIA Nemotron Bolt 4B** — 新模型架构支持
- **MLX MoE 模型** — 现在可以在 Mac 上运行超过可用内存的模型（核心外执行）
- **AMD RDNA3/gfx1100** — 修复了原生 Linux 上的静默 CPU 回退回归问题（[#14906](https://github.com/unslothai/unsloth/issues/14906)）

## 4. 性能与优化

| PR | 描述 | 影响 |
|----|------|------|
| [#15055](https://github.com/unslothai/unsloth/pull/15055) | Studio NVFP4: 在两种切换状态中标记编译缓存 | 防止 NVFP4 开关状态间的缓存匹配失效 |
| [#15050](https://github.com/unslothai/unsloth/pull/15050) | 原生 FSDP2 optimizer.pt 恢复处理未使用的参数 | 修复 MoE experts/模态分支从未执行 step 时的恢复失败 |
| [#15054](https://github.com/unslothai/unsloth/pull/15054) | 仅当所有 GGUF 模型均为 Q8_0 时启用 BF16 cuBLAS | 更优的量化路径选择 |
| [#15048](https://github.com/unslothai/unsloth/pull/15048) | Studio 扩散模型: 在解码时释放后保留 VRAM Budget 预留 | 改善 VAE 解码期间的 VRAM 管理 |
| [#14717](https://github.com/unslothai/unsloth/pull/14717) | 无 GPU 时在 CPU 上训练 | 优雅降级，与 Apple Silicon → MLX 行为一致 |
| [#14909](https://github.com/unslothai/unsloth/pull/14909) | 提示词处理进度、实时生成详情、GGUF 加载位置 | 体验优化：显示提示词处理百分比、模型卸载信息、速度 |

## 5. 稳定性与回归问题

| 问题 | 严重程度 | 状态 | 备注 |
|------|----------|------|------|
| [#15022](https://github.com/unslothai/unsloth/issues/15022) — Windows GGUF 因误判"子进程未响应"端口检查被终止 | **高** | 进行中 | 2026-10-23 回归；llama-server 可加载但 Studio 将其终止 |
| [#14906](https://github.com/unslothai/unsloth/issues/14906) — AMD Linux 上静默 CPU 回退导致捆绑的 llama-server 无法识别 GPU | **高** | 进行中 | 回归问题；studio 预置的 `/opt/rocm/lib` 破坏 ROCm 检测 |
| [#14519](https://github.com/unslothai/unsloth/issues/14519) — 长对话在 CPU 归档 conversation-archive 嵌入时卡顿 | **中** | 已关闭 | 工具密集型对话在归档前会阻塞推理数分钟 |
| [#14411](https://github.com/unslothai/unsloth/issues/14411) — 对话几轮后崩溃转储 | **中** | 进行中 | 未找到相关日志；弹出模型时崩溃 |
| [#14987](https://github.com/unslothai/unsloth/issues/14987) — MiniCPM-V-4.7-1B Vulkan 后端文本生成失败 | **中** | 进行中 | |
| [#14695](https://github.com/unslothai/unsloth/issues/14695) — DeepSeek-V4.1-Flash-1017 GGUF 加载失败（未知架构） | **中** | 已关闭 | llama.cpp 构建不识别 `deepseek41-dspark` |
| [#14439](https://github.com/unslothai/unsloth/issues/14439) — Gemma-3 FastDecisionModel 训练: 损失平坦、准确率等同于随机 | **中** | 进行中 | 训练正确性问题 |

## 6. 这对应用开发者意味着什么

1. **多用户推理服务器**: Issue [#12365](https://github.com/unslothai/unsloth/issues/12365) 表明多个 LAN 账户访问同一本地模型时存在模型同步问题 — 在问题解决前请避免使用共享模型目录或做好同步问题准备。

2. **Windows GGUF 部署**: 端口所有权回归问题（[#15022](https://github.com/unslothai/unsloth/issues/15022)）影响加载 GGUF 文件的 Windows Studio 用户 — 如受影响可考虑回退到 v0.1.909-beta。

3. **AMD GPU on Linux**: 原生 Linux AMD 用户（RDNA3）更新后请验证 GPU 检测情况 — ROCm 路径回归可能导致静默降级到 CPU。

4. **定时与流水线工作流**: PR [#14730](https://github.com/unslothai/unsloth/pull/14730)（Flows 节点编辑器）和 [#13871](https://github.com/unslothai/unsloth/pull/13871)（定时任务）正在向生产就绪推进 — 预计 Studio 将支持类 cron 定时自动化和可视化 AI 流水线构建。

5. **CPU 训练**: 新的 CPU 回退功能（[#14717](https://github.com/unslothai/unsloth/pull/14717））支持在无 GPU 机器上训练 — 这对 CI/CD 和无需 GPU 的原型开发很有帮助。

6. **长对话处理**: 使用工具密集型对话的用户应注意 CPU 归档瓶颈（[#14519](https://github.com/unslothai/unsloth/issues/14519)）— 建议拆分长对话以避免数分钟的卡顿。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*