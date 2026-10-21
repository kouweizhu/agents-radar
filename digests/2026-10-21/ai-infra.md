# AI 基础设施日报 2026-10-21

> 生成时间: 2026-10-21 00:50 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the entire report into Simplified Chinese, following specific rules about preserving formatting while using natural technical Chinese register.

Let me translate carefully, preserving all structure:

- Keep all headings, tables, lists, blockquotes, bold/italic, horizontal rules
- Keep all URLs, numbers, dates, code references, PR/issue numbers as-is
- Keep project names, version tags, file paths unchanged
- Use natural technical Chinese, not literal word-for-word translation
- Output ONLY the translation, no preamble, no markdown fences

Let me go through section by section:

## 1. Ecosystem Overview

The current AI serving infrastructure landscape reflects a maturing stack with clear separation of concerns: inference engines (vLLM, SGLang) battle for throughput dominance on data center GPUs; local runtimes (llama.cpp, Ollama) push quantization and edge deployment boundaries; gateways (LiteLLM) provide the operational layer for multi-provider routing; and training tools (Unsloth) accelerate the fine-tuning loop. Today's activity shows all six projects actively shipping new model support, but the performance frontier has shifted toward speculative decoding, multi-modal RoPE, and extreme quantization (TurboQuant, SVE q5_0/q5_1). The convergence of KV cache optimizations across vLLM and SGLang suggests commoditization of flash attention techniques, while llama.cpp and Unsloth race to capture the quantized/edge market with hardware-specific kernels.

Let me translate this naturally:

当前的 AI 服务基础设施生态已经趋于成熟，各层职责分明：推理引擎（vLLM、SGLang）在数据中心的 GPU 上争夺吞吐量主导权；本地运行时（llama.cpp、Ollama）则在量化技术和边缘部署上不断突破；网关层（LiteLLM）提供多供应商路由的运维能力；训练工具（Unsloth）加速微调工作流。

今日动态显示，六个项目都在积极支持新模型，但性能前沿已转向投机解码、多模态 RoPE 和极限量化（TurboQuant、SVE q5_0/q5_1）。vLLM 与 SGLang 在 KV 缓存优化上的趋同表明 Flash Attention 技术正在走向标准化，而 llama.cpp 和 Unsloth 则竞相通过硬件特定的内核抢占量化和边缘市场。

---

## 2. Activity Comparison

Activity comparison section - need to translate the table and observations

Activity Comparison:

| Project | Issues (last 24h) | PRs (last 24h) | Releases (last 24h) |
|---------|-------------------|----------------|---------------------|
| **vLLM** | 17 | 15+ | None |
| **SGLang** | 15+ | 20+ | None |
| **llama.cpp** | 17 | 20+ | b11768 (minor fixes) |
| **Ollama** | 17 | 20+ | None |
| **LiteLLM** | 5 | 20+ | 4 stable + 1 RC |
| **Unsloth** | 44 | 174 | None |

Unsloth 在 PR 数量上遥遥领先，显示出其在训练工具开发上的活跃程度。LiteLLM 的发布节奏最为激进，接连推出多个稳定版本并配合 cosign 验证机制。llama.cpp 保持小幅更新的稳定节奏。两大推理服务器（vLLM、SGLang）活动量均衡，符合其数据中心定位。

---

## 3. Model Support Race

The

Model Support Race section shows vLLM and SGLang tied in multi-modal flash model dominance, with DeepSeek-V4.1 and GLM-5.3-Flash leading. llama.cpp edges ahead on emerging text/vision models like Paligemma and SenseNova. Ollama differentiates with TTS and Apple Silicon acceleration, while Unsloth controls the fine-tuning narrative for vision/audio. I need to translate this table section naturally into Chinese while preserving the data structure and technical terminology.

## 4. Performance Frontier

The Performance Frontier section reveals vLLM and SGLang as the main competitors at the inference layer, both advancing KV cache and speculative decoding capabilities. Unsloth dominates kernel optimization for training, while llama.cpp leads in quantization variety. LiteLLM prioritizes operational reliability over raw performance gains.

---

## 5. Layer Positioning

The Layer Positioning section groups projects into four tiers: data center inference engines (vLLM, SGLang), local and edge runtimes (llama.cpp, Ollama), gateways and proxies (LiteLLM), and training and fine-tuning tools (Unsloth). Ollama wraps llama.cpp with user experience and server capabilities, while LiteLLM can serve as a routing layer in front of various backends.

---

## 6. Trend Signals

### What Agent / Application Developers Should Watch

Six key trends are emerging. First, batch invariance is becoming deterministic in vLLM and SGLang—bitwise reproducibility across batch composition matters for agentic workflows requiring deterministic replay. Second, speculative decoding is hitting production maturity through DFlash2, adaptive verification, and GPU-side draft token handling, with 1.5-2x latency gains possible though testing for tool-use reliability remains essential. Third, quantization is accelerating on consumer silicon—llama.cpp's SVE and VNNI kernels combined with Ollama's TurboQuant are pushing Q5/Q2 toward usable quality on Apple Silicon and ARM. Fourth, multi-modal capabilities are entering the serving layer.

Now I'm moving through the remaining trends: multi-modal support across vLLM, SGLang, llama.cpp, and Unsloth creates end-to-end image handling from training to inference. Security hardening in LiteLLM's production deployments signals tightening data exfiltration controls, requiring guardrail configuration audits. Unsloth's kernel velocity suggests training inference co-design is accelerating, with tighter integration between fine-tuning and serving. Finally, ROCm/AMD support is maturing—Qwen3.8 on gfx950, Muse Spark ROCm day-0 support, and DeepSeek-V4.1 prefill CP on AMD give data centers viable state-of-the-art options beyond NVIDIA.

For infrastructure, vLLM and SGLang are converging for data center inference—choose based on disaggregation needs. LiteLLM handles multi-provider routing with cost controls. Ollama plus llama.cpp covers consumer to professional use cases. Unsloth provides the fastest path to quantized fine-tuned models deployable across the full stack.

Now I'm translating the report title and heading structure into Chinese, starting with the ecosystem overview that breaks down the AI serving infrastructure into distinct layers: inference engines like vLLM and SGLang competing for throughput on data center GPUs, local runtimes pushing quantization and edge deployment boundaries, gateways providing operational routing, and training tools accelerating the fine-tuning pipeline.

Today's activity across all six projects shows active model support, but the performance frontier is shifting toward speculative decoding, multi-modal RoPE, and extreme quantization techniques. The convergence of KV cache optimizations in vLLM and SGLang indicates Flash Attention is becoming commoditized, while llama.cpp and Unsloth race to capture the quantized edge market through hardware-specific kernels.

Now I'm moving into the activity comparison section, which tracks the last 24 hours of issues, pull requests, and releases across the main projects.

Looking at the numbers, Unsloth is clearly the most active in terms of PRs with 174, reflecting intense development on the training tooling side. LiteLLM is churning out releases aggressively with 4 stable versions plus a release candidate, while llama.cpp continues with incremental updates. The two major inference servers—vLLM and SGLang—are tracking closely in activity, which makes sense given their data center focus.

For model support, vLLM and SGLang are leading the pack on multimodal capabilities, particularly with DeepSeek-V4.1 and GLM-5.3-Flash, while llama.cpp has an edge on newer text and vision models. Ollama is carving out a niche with TTS and Apple Silicon optimization, and Unsloth owns the fine-tuning space for vision and audio tasks.

The performance battle is most intense at the inference layer between vLLM and SGLang around KV cache and speculative decoding. Unsloth dominates kernel optimization for training workloads, llama.cpp offers the widest quantization options, and LiteLLM prioritizes operational reliability over raw compute speed.

The ecosystem breaks into distinct layers: data center inference engines like vLLM and SGLang handle high-throughput serving, local runtimes like llama.cpp and Ollama target edge deployment, LiteLLM provides gateway routing, and Unsloth focuses on fine-tuning. vLLM and SGLang are converging toward similar capabilities with SGLang adding prefill-decode separation, while Ollama wraps llama.cpp with a better UX and LiteLLM can front-end any backend. The trend signals are shifting toward batch invariance becoming deterministic in vLLM and SGLang.

Now I'm seeing speculative decoding reach production maturity with noticeable latency gains, consumer hardware quantization accelerating, multimodal capabilities entering the serving layer, security hardening in LiteLLM, Unsloth's kernel velocity indicating training-inference co-design, and AMD ROCm becoming a viable alternative to NVIDIA. For infrastructure decisions, vLLM and SGLang are converging so the choice depends on disaggregation needs, LiteLLM handles multi-provider routing with cost controls, Ollama paired with llama.cpp covers consumer through professional use cases, and Unsloth provides the fastest route to quantized fine-tuned models deployable across the full stack. I need to verify the table translations maintain proper formatting with pipes and alignment bars. Then I'll output the full translation as requested, keeping the heading, emoji, and all content intact without markdown code fences.</think>

# 跨项目对比报告 — 2026-10-21

## 1. 生态概览

当前的 AI 服务基础设施生态已经趋于成熟，各层职责分明：推理引擎（vLLM、SGLang）在数据中心的 GPU 上争夺吞吐量主导权；本地运行时（llama.cpp、Ollama）则在量化技术和边缘部署上不断突破；网关层（LiteLLM）提供多供应商路由的运维能力；训练工具（Unsloth）加速微调工作流。

今日动态显示，六个项目都在积极支持新模型，但性能前沿已转向投机解码、多模态 RoPE 和极限量化（TurboQuant、SVE q5_0/q5_1）。vLLM 与 SGLang 在 KV 缓存优化上的趋同表明 Flash Attention 技术正在走向标准化，而 llama.cpp 和 Unsloth 则竞相通过硬件特定的内核抢占量化和边缘市场。

---

## 2. 活跃度对比

| 项目 | Issue（过去 24h） | PR（过去 24h） | Release（过去 24h） |
|---------|-------------------|----------------|---------------------|
| **vLLM** | 17 | 15+ | 无 |
| **SGLang** | 15+ | 20+ | 无 |
| **llama.cpp** | 17 | 20+ | b11768（小修小补） |
| **Ollama** | 17 | 20+ | 无 |
| **LiteLLM** | 5 | 20+ | 4 个稳定版 + 1 个 RC |
| **Unsloth** | 44 | 174 | 无 |

**观察：** Unsloth 的 PR 数量遥遥领先，反映出其训练工具开发的活跃周期。LiteLLM 的发布节奏最为激进，接连推出多个稳定版本并配合 cosign 验证。llama.cpp 保持小幅更新的稳定节奏。两大推理服务器（vLLM、SGLang）活动量均衡，符合其数据中心定位。

---

## 3. 模型支持之争

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4.1** | ✅（Flash、batch invariance） | ✅（encoder-only prefill） | ❌ | ❌ | ❌ | ❌ |
| **GLM-5.3-Flash** | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Qwen3.8-Flash-Next** | ✅（ROCm FP8 KV） | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Muse Spark** | ✅（ROCm） | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Paligemma** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **SenseNova U1** | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **Phonon TTS** | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **DFlash2（Apple Silicon）** | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ |
| **视觉/音频微调** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **TypeSafe Jev 系列模型** | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |

**结论：** **vLLM 和 SGLang 在多模态 Flash 模型上并驾齐驱**，DeepSeek-V4.1 和 GLM-5.3-Flash 领跑。llama.cpp 在新兴文本/视觉模型上略占优势（Paligemma、SenseNova）。Ollama 以 TTS 和 Apple Silicon 加速形成差异化。Unsloth 在视觉/音频微调领域独占鳌头。

---

## 4. 性能前沿

| 优化方向 | 活跃项目 | 关键工作 |
|-------------------|-----------------|----------|
| **KV 缓存 / Flash Attention** | vLLM、SGLang | 可拆分 CUDA 图中的 FlashInfer KDA prefill（SGLang）；CUDA 图的 batch invariance（vLLM） |
| **投机解码** | vLLM、SGLang、Unsloth | 自适应验证、GPU 端 draft token top-k/p（vLLM）；DFlash2 block draft（SGLang、Unsloth） |
| **量化** | llama.cpp、Unsloth、Ollama、vLLM | SVE q5_0/q5_1（llama.cpp）；VNNI Q2_0（llama.cpp）；TurboQuant/RotorQuant（Ollama）；MiMo 部分 RoPE 融合（vLLM） |
| **多 GPU / 分布式** | SGLang、Unsloth | 扩散去噪器跨 GPU 拆分（Unsloth）；ROCm 上 prefill 上下文并行（SGLang） |
| **内核级加速** | Unsloth、llama.cpp | RoPE 多头分块加速 2-2.7 倍（Unsloth）；CUDA 图缓存键优化（llama.cpp） |
| **网关 / 运维** | LiteLLM | Tokenizer 缓存、Prometheus 401s、加权故障转移路由 |

**结论：** **性能争夺最激烈的战场在推理层**（vLLM/SGLang），焦点是 KV 缓存和投机解码。**Unsloth** 在训练内核优化上领跑。**llama.cpp** 在量化多样性上领先（SVE、VNNI、Marlin）。**LiteLLM** 重在运维可靠性而非原始算力。

---

## 5. 层级定位

| 层级 | 项目 | 主要角色 |
|-------|----------|--------------|
| **数据中心推理引擎** | vLLM、SGLang | 高吞吐服务、批推理、TP/PP 并行、投机解码 |
| **本地 / 边缘运行时** | llama.cpp、Ollama | 单 GPU/消费级 GPU 推理、CPU 回退、量化权重、离线运行 |
| **网关 / 代理** | LiteLLM | 多供应商路由、成本控制、统一 OpenAI 兼容 API、可观测性 |
| **训练 / 微调** | Unsloth | LoRA/QLoRA/全参数微调、DPO/GRPO/ORPO、多 GPU 训练、量化训练 |
| **工具链 / Studio** | Unsloth、Ollama | 训练 GUI（Unsloth Studio）、本地模型管理（Ollama） |

**交叉地带：**

- **vLLM ≈ SGLang** — 定位几乎相同；SGLang 额外支持 prefill-decode 分离
- **llama.cpp ↔ Ollama** — Ollama 是 llama.cpp 的封装，提供更好 UX 和服务能力
- **LiteLLM 可以作为 vLLM/SGLang/llama.cpp 的前端** — 在任意后端之上提供路由层
- **Unsloth 训练的模型可以部署到 vLLM/Ollama/llama.cpp** — 端到端工作流集成

---

## 6. 趋势信号

### 智能体 / 应用开发者应关注什么

1. **Batch invariance 正在走向确定性** — vLLM 和 SGLang 都实现了 CUDA 图的位级 batch invariance。这意味着无论批次组成如何，token 输出都变得可复现，对需要确定性回放的智能体工作流至关重要。

2. **投机解码进入生产成熟期** — DFlash2、自适应验证、GPU 端 draft token 处理在 vLLM、SGLang、Unsloth 全面落地。符合条件的模型预期可获得 1.5-2 倍延迟改善；智能体开发者应测试投机路径的工具调用可靠性。

3. **消费级硬件上的量化正在加速** — llama.cpp 的 SVE 和 VNNI 内核，加上 Ollama 的 TurboQuant，让 Q5/Q2 在 Apple Silicon 和 ARM 服务器上逼近可用质量。边缘智能体可以瞄准更小的量化而不牺牲准确率。

4. **多模态进入服务层** — vLLM/SGLang 支持 DeepSeek-V4.1 和 GLM-5.3-Flash，llama.cpp 支持 Paligemma，Unsloth 支持视觉微调。完整技术栈现已支持从训练到服务的端到端图像处理。

5. **网关层安全加固** — LiteLLM 的高风险 guardrail 修复（#47122）表明生产部署正在收紧数据泄露控制。如果你通过 LiteLLM 代理模型调用，请审计你的 guardrail 配置。

6. **Unsloth 的内核速度暗示训练推理协同设计** — 2.7 倍 RoPE 加速和扩散拆分表明，训练优化越来越需要推理感知的内核设计。预计微调和服务之间的集成将更加紧密。

7. **ROCm/AMD 不再是二等公民** — Qwen3.8 在 gfx950 上运行、Muse Spark ROCm 首发支持、DeepSeek-V4.1 在 AMD 上实现 prefill CP。AMD 硬件的数据中心现在有了通往最先进模型的可行路径。

---

**基础设施决策的建议：** 如果你在数据中心运行推理服务，**vLLM 和 SGLang 正在趋同**；根据你的分离需求选择。如果需要多供应商路由和成本控制，**LiteLLM 是运维层**。对于本地/离线场景，**Ollama + llama.cpp** 覆盖消费级到专业级。对于训练，**Unsloth** 是通往量化微调模型的最快路径，模型可部署到整个技术栈的任何环节。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM Daily Digest from English to Chinese (Simplified Chinese). I need to follow the rules:
- Output ONLY the translation
- No preamble, no explanation, no markdown fences
- Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
- Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the structure and using appropriate technical Chinese terminology.

Key terms to handle:
- "Daily Digest" -> "每日简报"
- "Breaking Changes" -> "重大变更"
- "Hardware" -> "硬件"
- "Performance & Optimization" -> "性能优化"
- "Stability & Regressions" -> "稳定性与回归问题"
- "Application Developers" -> "应用开发者"
- "Speculative Decoding" -> "投机解码"
- "batch invariance" -> "批次不变性"
- "disaggregation" -> "解聚"
- "RoPE cache" -> "RoPE缓存"
- "KV cache" -> "KV缓存"

Let me translate section by section:</think>

# vLLM 每日简报 — 2026-10-21

## 1. 今日重点

vLLM 项目在多个方向上持续推进：AMD ROCm 支持持续扩展，Qwen4Exp FP8 KV 缓存和 Muse Spark 优化已合并，同时 DeepSeek-V4.1 集成工作正在进行中，包括批次不变性相关的改进。NIXL P/D 解聚和 Triton 统一注意力机制方面有多个关键 bug 正在修复中。Rust 前端路线图获得了较多关注（46 条评论），表明社区对最终功能对齐有强烈兴趣。

## 2. 发布与重大变更

**过去 24 小时内无新版本发布。**

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 描述 | PR / Issue |
|-------------|------|------------|
| **DeepSeek-V4-Flash / V4.1** | SM8x（Ampere A100/A800）支持正在开发中 — 当前在 Ampere GPU 上失败（[#50576](https://github.com/vllm-project/vllm/issues/50576)） | Issue |
| **ROCm gfx1201 / RDNA4** | FP8 补丁正在上游化中（[#28649](https://github.com/vllm-project/vllm/issues/28649)） | Issue |
| **Qwen3.8-Flash-Next** | ROCm gfx950 / MI355X 性能优化追踪（[#59575](https://github.com/vllm-project/vllm/issues/59575)）；AMD QSA 路径上 FP8 KV 和索引器缓存已启用（[#61529](https://github.com/vllm-project/vllm/pull/61529)） | PR |
| **Beam 1.0 + DFlash2** | ROCm 首发支持已添加（[#62057](https://github.com/vllm-project/vllm/pull/62057)） | PR |
| **Muse Spark (ROCm)** | RoPE 缓存共享优化 — 节省约 11.5 GiB/GPU（[#62757](https://github.com/vllm-project/vllm/pull/62757)）；批次分片采样输出乘数修复（[#62756](https://github.com/vllm-project/vllm/pull/62756)） | PR |
| **GLM-5.3-Flash** | 性能优化追踪（[#57406](https://github.com/vllm-project/vllm/issues/57406)） | Issue |
| **Jina Reranker v3** | 新的重排序模型支持（[#28557](https://github.com/vllm-project/vllm/issues/28557)） | Issue（已关闭）|

---

## 4. 性能与优化

| 领域 | 变更 | PR / Issue |
|------|------|------------|
| **MiMo 注意力** | 将 fused partial RoPE、value scaling 和 packed DiffKV 写入合并为单个 Triton 内核（[#58798](https://github.com/vllm-project/vllm/pull/58798)） | PR（需要 rebase）|
| **投机解码** | FlashInfer：跳过 `seq_lens` GPU→CPU 拷贝 — 消除同步瓶颈（[#57352](https://github.com/vllm-project/vllm/pull/57352)） | PR |
| **投机解码** | 在 GPU 上将请求的 top-k/top-p 应用于草稿 token（[#56724](https://github.com/vllm-project/vllm/pull/56724)） | PR |
| **自适应验证** | 批次分片采样支持自适应验证（[#58466](https://github.com/vllm-project/vllm/pull/58466)） | 进行中 |
| **分词器** | HF renderers 的有界段分词器缓存 — 减少重复分词开销（[#61335](https://github.com/vllm-project/vllm/pull/61335)） | PR |
| **DeepSeek-V4.1** | CUDA 图在 `VLLM_BATCH_INVARIANT=1` 下的位运算批次不变性（[#62365](https://github.com/vllm-project/vllm/pull/62365)） | PR |
| **Mooncake KV Connector** | DFS（分布式文件系统）层支持存储 KV（[#61175](https://github.com/vllm-project/vllm/pull/61175)） | PR |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **严重** | **GLM-5.3-Flash CUDA 非法内存访问** 在 4xB200 上 — 出现在三个不相关的内核中（KDA 线性注意力、MHC TileLang、TRT-LLM fused MoE）（[#54317](https://github.com/vllm-project/vllm/issues/54317)） | 进行中 |
| **高** | **DFlash 投机解码** 与 gpt-oss 目标一起使用时会崩溃，涉及 FlashAttention3 非法内存访问（[#61330](https://github.com/vllm-project/vllm/issues/61330)） | 进行中 |
| **高** | **Triton 统一注意力** 越界 block-table 读取 — KV tile 宽于 KV block（例如，prefill tile 宽度为 32 但 block 大小为 16）（[#62779](https://github.com/vllm-project/vllm/pull/62779)） | PR 已开 |
| **中** | **VLLM_BATCH_INVARIANT=1** 在 sm8x 上默认模式下对 AWQ 模型不满足批次不变性（[#59086](https://github.com/vllm-project/vllm/issues/59086)） | 已关闭 |
| **中** | **HF3FS 元数据服务器** 永不释放页面 — 页面池耗尽后每次保存都会失败（[#62389](https://github.com/vllm-project/vllm/issues/62389)） | 进行中 |
| **中** | **NIXL P/D 解聚** 在混合 Mamba/GDN 模型上使用 `kv_buffer_device="cpu"` 时损坏 — 自 v0.28.0 以来有两个回归问题（[#62453](https://github.com/vllm-project/vllm/pull/62453)） | PR 已开 |
| **中** | **结构化输出** 格式错误的语法请求在有效请求后导致 EngineCore 崩溃（[#43920](https://github.com/vllm-project/vllm/issues/43920)） | 通过 [#49625](https://github.com/vllm-project/vllm/pull/49625) 关闭 |

---

## 6. 这对应用开发者意味着什么

- **在 AMD ROCm 上部署？** Qwen3.8-Flash-Next 现已支持 gfx950/MI355X 上的 FP8 KV 缓存，Muse Spark 内存占用大幅降低。Beam 1.0 配合 DFlash2 现已支持。

- **使用 DeepSeek-V4 模型？** V4.1 Flash 批次不变性工作正在进行中 — 合并后无论批次组成如何都将获得确定的 token 输出。V4-Flash 仍有 SM8x（Ampere）兼容性问题待解决。

- **运行投机解码？** FlashInfer 现已避免 CPU–GPU 同步瓶颈，草稿 token 现在会遵守请求级别的 top-k/top-p 约束。

- **构建带结构化输出的 Agent？** 格式错误的语法请求导致引擎崩溃的 bug 已修复（[#49625](https://github.com/vllm-project/vllm/pull/49625)）。

- **使用 NIXL P/D 解聚？** 混合 Mamba 模型的 bugfix 正在修复中 — 在问题解决前请避免对混合架构使用 `kv_buffer_device="cpu"`。

- **对 Rust API 服务器感兴趣？** Rust 前端功能对齐路线图（[#44280](https://github.com/vllm-project/vllm/issues/44280)）正在活跃中；团队正在追踪需要移植的剩余 Python API 功能。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang digest into Simplified Chinese. Let me carefully translate while preserving all the Markdown structure, links, PR numbers, and technical terminology.

Key points:
1. Keep all Markdown structure exactly as-is
2. Keep URLs, PR numbers, code snippets, file paths, config identifiers in original form
3. Use natural technical Chinese - like a Chinese developer newsletter
4. Only output the translation, no explanations, no markdown code fences

Let me translate section by section:</think>

# SGLang 速报 — 2026-10-21

## 今日焦点

SGLang 项目正专注于稳定性和性能加固工作，团队在推进 PREFILL-DECODE 分离架构能力的同时，正在解决夜间构建版本上的 CUDA 编译问题。项目中还发现了一个影响 PD 预填充部署中 HiCache KV 缓存陈旧性的关键 bug，此外还有一个 Triton 内核回归问题导致最新 CUDA 夜间版本上的 FlashAttention 内核无法正常工作。

---

## 版本发布与重大变更

过去 24 小时内无版本发布。

---

## 新模型与硬件支持

| 功能 | 详情 | PR/Issue |
|---------|---------|----------|
| **DeepSeek-V4.1 Encoder-Only 预填充** | 新增 `--dsv41-encoder-only-prefill` 标志，允许在 Flash 变体上丢弃第 20-39 层，预填充权重减半 | [#45265](https://github.com/sgl-project/sglang/pull/45265) |
| **DeepSeek-V4.1 预填充上下文并行** | AMD ROCm 支持 DeepSeek-V4.1 预填充 CP | [#43465](https://github.com/sgl-project/sglang/pull/43465) |
| **Muse Spark 首发支持** | 正在为 Muse Spark 模型支持提交 PR | [#44678](https://github.com/sgl-project/sglang/issues/44678), [#44530](https://github.com/sgl-project/sglang/pull/44530) |
| **GLM-5.3-Flash 在 Hopper (SM90) 上** | Hopper GPU 性能优化追踪 | [#45373](https://github.com/sgl-project/sglang/issues/45373) |
| **Ascend NPU 拓扑感知** | 为 Ascend worker 进程添加 CPU/NUMA 亲和性支持 | [#39348](https://github.com/sgl-project/sglang/issues/39348) |
| **DoRA 适配器** | DoRA（分解秩适应 LoRA）变体功能已合并 | [#22124](https://github.com/sgl-project/sglang/issues/22124) |

---

## 性能优化

| 领域 | 描述 | 参考 |
|------|-------------|-----------|
| **FlashInfer KDA 预填充 CUDA 图** | 在可中断预填充 CUDA 图中捕获 FlashInfer KDA 预填充，消除 SM100/SM103 上的 eager host 同步 | [#45369](https://github.com/sgl-project/sglang/pull/45369) |
| **DeepSeek-V4.1 DSpark Megakernel** | 将解码图之间的 host 计算移入 GPU 图，用于 GB300 TP4 投机解码 | [#45450](https://github.com/sgl-project/sglang/pull/45450) |
| **Muse Marlin W4A8 内存** | 减少 MoE Muse Marlin 和 W4A8 缩放的临时内存占用 | [#45462](https://github.com/sgl-project/sglang/pull/45462) |
| **GLM5 FP8 量化在 AMD gfx950** | 在 MI355X 上融合 KPool Hadamard 和 FP8 量化 | [#44661](https://github.com/sgl-project/sglang/pull/44661) |
| **DeepSeek-v4.1 Encoder SWA Replay** | AMD HIP 优化：draft SWA ring、folded replay、in-place 解码窗口 | [#45465](https://github.com/sgl-project/sglang/pull/45465) |
| **FlashInfer 自动调优** | 默认启用针对所有生成目标的预填充尺寸 FlashInfer 自动调优 | [#42736](https://github.com/sgl-project/sglang/pull/42736) |
| **混合 Mamba 调度器** | 规划在 overlap 调度器中无 host-device 同步的扩展批次 | [#45472](https://github.com/sgl-project/sglang/pull/45472) |
| **LoRA Dense/MoE 引擎** | 新增针对 dense 和 routed-MoE 层的显式架构感知 LoRA 执行计划 | [#42284](https://github.com/sgl-project/sglang/pull/42284) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 描述 | 状态 |
|----------|-------|-------------|--------|
| **严重** | [#45426](https://github.com/sgl-project/sglang/issues/45426) | FLA 内核在 nightly-cu134 上编译失败 — Triton 移除了 `tl.make_block_ptr` | 待处理 |
| **高** | [#44070](https://github.com/sgl-project/sglang/issues/44070) | PD 预填充：早期缓存前缀在 KV 位于 host 内存时向解码器发送陈旧 KV | 待处理 |
| **高** | [#45345](https://github.com/sgl-project/sglang/issues/45345) | 32 个 tokenizer worker + CUDA VMM 在 GB300 多节点上启动时 OOM | 待处理 |
| **中** | [#42012](https://github.com/sgl-project/sglang/issues/42012) | SM120 上的 GLM-5.3-Flash：fa4 在 CUDA-graph 捕获时崩溃，仅 Triton 后端可用 | 待处理 |
| **中** | [#45159](https://github.com/sgl-project/sglang/issues/45159) | GLM-5.3-Flash 在 EAGLE verify 中发生 CUDA 非法内存访问 | 待处理 |
| **追踪中** | [#26340](https://github.com/sgl-project/sglang/issues/26340) | CUDA 核心转储追踪器（349 条评论） | 待处理 |
| **追踪中** | [#42752](https://github.com/sgl-project/sglang/issues/42752) | 不稳定测试与 CI 基础设施故障（112 条评论） | 待处理 |

---

## 应用开发者需要知道的事

1. **使用 HiCache 的 PD 部署**：如果你在运行启用了前缀缓存的预填充-解码分离架构（`SGLANG_DISAGG_PREFILL_EARLY_SEND_CACHED_PREFIX=1`），请注意解码器可能会收到共享前缀的陈旧 KV。修复方案正在处理中。

2. **夜间 CUDA 构建**：`nightly-cu134` 镜像有一个破坏性变更——Triton 移除了 `tl.make_block_ptr`，导致 FlashAttention 内核编译失败。如果你在最新的夜间构建版本上遇到编译错误，这是一个已知的回归问题，见 [#45426](https://github.com/sgl-project/sglang/issues/45426)。

3. **大规模部署**：在多节点 GB200/MNNVL 部署中使用高并行度 tokenizer（`--tokenizer-worker-num 32`）可能会在启用 CUDA VMM 时遇到启动 OOM。建议减少 worker 数量或禁用 VMM 作为临时解决方案。

4. **新硬件上的 GLM-5.3**：在 RTX PRO 6000 (SM120) 上，请使用 Triton attention 后端，直到 hybrid extend 上的 fa4 崩溃问题修复。

5. **性能提升即将到来**：FlashInfer 自动调优现已默认启用，应该能提升预填充吞吐量。即将推出的 DeepSeek-V4.1 encoder-only 预填充功能可以显著降低预填充内存占用。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the llama.cpp digest from English to Chinese (Simplified Chinese - 简体中文). I need to:

1. Translate all the content while preserving the Markdown structure exactly
2. Keep URLs, issue/PR references (#12345), file paths, API/config identifiers as-is
3. Use natural technical Chinese register - not literal word-for-word
4. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate section by section:

## 1. Today's Highlights
## 2. Releases & Breaking Changes
## 3. New Model & Hardware Support
## 4. Performance & Optimization
## 5. Stability & Regressions
## 6. What This Means for Application Developers

Let me translate each part carefully:

---
# llama.cpp 动态 — 2026-10-21

## 1. 今日要闻

项目在多个后端持续活跃开发，新增多项性能优化和问题修复。主要亮点包括：针对 ARM 平台的 SVE 优化量化内核、改进 CUDA 图缓存以支持投机解码、修复服务器 Responses API 的 SSE 事件问题。社区还在推进 Paligemma 和 SenseNova U1 等新模型的支持工作，同时解决 SYCL、Vulkan 和 HIP 后端的稳定性问题。

## 2. 版本更新与破坏性变更

过去 24 小时内未发布新版本。以下变更值得特定用户关注：

- **Server Responses API** — 修复了 SSE 事件中缺少 `output_index` 的问题 (#30863)。这确保了使用标准 Anthropic 风格流式的第三方工具能接收正确的事件元数据。


- **LFM2-VL 多模态** — 现在从 GGUF 元数据中读取平铺参数（`min_tiles`、`max_tiles`、`tile_size`、`max_pixels_tolerance`）以支持新转换格式 (#30840)，提升了与近期 mmproj 文件的兼容性。
- **Kolibri-1 路由器** — 移除了不必要的冗余精度覆盖调用 (#30865)，这些调用在之前的路由器 matmul 修复后已不再需要。

## 3. 新模型与硬件支持

新增了 Paligemma 支持，通过 `llama_batch_ext` 接口实现图像加文本生成能力 (#30903)，扩展了视觉语言模型的支持范围。同时支持 SenseNova U1 的文本到文本、图像到文本和图像加文本场景 (#28919)。此外，IBM Z 硬件的 ggml-zdnn 后端现已实现 Flash Attention 操作 (#30512)，拓展了量化推理在该平台的能力。

## 4. 性能与优化

在 ARM 平台上，SVE 优化的 `q5_0` 和 `q5_1` 点积内核针对不同向量长度进行了特定解包，提升了量化效率。x86 VNNI `Q2_0` 点积在兼容 CPU 上实现了约三倍性能提升。CUDA 图缓存首次添加了首节点范围作为缓存键，减少了预热状态的失效，提高了投机解码的稳定性。改进的小型 MoE 缓存处理在缓存过小时发出警告，当缓存低于 token 专家数的 1.8 倍时回退到标准 LRU 以避免抖动。Vulkan `mul_mat_vec` 内核针对 IQ3_XXS 进行了优化，LFM2 短卷积重塑重新排序减少了批处理解码期间的多次 gemv 调用。QSA 选择移除了 kq_mask 需求以减少内存压力并提升缓存利用率。

## 5. 稳定性与回归问题

SYCL FLASH_ATTN_EXT 在 MKL 和 OneDNN 路径上都出现排列填充 KV 视图失败的问题，通过 PR #30761 解决了 Case A，但其他情况仍在调查中。MoE 缓存在 AMD RX 6900 XT 上启动时崩溃，Vulkan 内存问题仍待解决。RDNA4（gfx1201）上的 Flash Attention 导致长上下文预填充立即输出 EOS，OpenAI API 对 Gemma 4 思维模式的控制支持也未实现。Intel Arc Pro B70 的 Vulkan 解码吞吐量在 8x 范围内存在性能下降。

HIP/ROCm 在 Windows 上的多 GPU 配置出现无声数据损坏，而 ROCm 6.3.4 编译错误指向 `group_mask_warp_inplace` 函数调用失败，LLVM 23 与 HIP 的链接器也存在 `ggml-rpc-server` 相关错误。开发者需要更新到最新构建版本以修复服务器 API 兼容性。

Apple Silicon 和 Graviton 用户将自动获得 SVE 内核的性能提升。SYCL 环境的 FLASH_ATTENTION_EXT 已知存在问题，PR #30761 正在逐步改进。MoE 模型用户会收到缓存不足的警告，建议避免在 AMD RDNA4（gfx1201）上对长上下文工作负载使用 Flash Attention。Vulkan 在没有 ReBAR 的 AMD Windows 上需关注内存溢出问题。

GPU 推理在 Vulkan 上的性能下降与后端特性相关，SYCL 仅出现约 2.4 倍的降级。

部署路径涉及 SYCL 或 Vulkan 的项目应跟踪这些已知限制。</think>

# llama.cpp 动态 — 2026-10-21

## 1. 今日要闻

项目在多个后端持续活跃开发，新增多项性能优化和问题修复。主要亮点包括：针对 ARM 平台的 SVE 优化量化内核、改进 CUDA 图缓存以支持投机解码、修复服务器 Responses API 的 SSE 事件问题。社区还在推进 Paligemma 和 SenseNova U1 等新模型的支持工作，同时解决 SYCL、Vulkan 和 HIP 后端的稳定性问题。

## 2. 版本更新与破坏性变更

过去 24 小时内未发布新版本。以下变更值得特定用户关注：

- **Server Responses API** — 修复了 SSE 事件中缺少 `output_index` 的问题 (#30863)。这确保了使用标准 Anthropic 风格流式的第三方工具能接收正确的事件元数据。
- **LFM2-VL 多模态** — 现在从 GGUF 元数据中读取平铺参数（`min_tiles`、`max_tiles`、`tile_size`、`max_pixels_tolerance`）(#30840)，提升了与近期 mmproj 文件的兼容性。
- **Kolibri-1 路由器** — 移除了不必要的冗余精度覆盖调用 (#30865)，这些调用在之前的路由器 matmul 修复后已不再需要。

## 3. 新模型与硬件支持

- **Paligemma** — 通过 `llama_batch_ext` 接口支持图像加文本生成 (#30903)，为支持的视觉语言模型列表新增一员。
- **SenseNova U1** — 支持文本到文本、图像到文本和图像加文本三种使用场景 (#28919)。
- **ggml-zdnn 后端** — 为 IBM Z 硬件实现了 Flash Attention 算子 (#30512)，拓展了 Z 系统上的量化推理能力。

## 4. 性能与优化

| PR | 描述 | 影响 |
|----|-------------|--------|
| #30867 | 针对 ARM 的 SVE 优化 `q5_0` 和 `q5_1` 点积内核 | 向量长度特定解包，提升量化效率 |
| #26348 | x86 VNNI `Q2_0` 点积 (AVX-VNNI/AVX-512 VNNI) | 兼容 CPU 上约 3 倍性能提升 |
| #28666 | 为 CUDA 图缓存添加首节点范围作为键 | 减少预热状态失效，提升投机解码稳定性 |
| #30848 | 改进小 MoE 缓存处理 | 缓存过小时发出警告；低于专家数 1.8x 时回退到普通 LRU 避免抖动 |
| #30904 | Vulkan 针对 IQ3_XXS 优化 `mul_mat_vec` 内核 | 提升该量化格式性能 |
| #30831 | LFM2 短卷积重塑重排序 | 批量解码时将多次 gemv 合并为单次 gemm |
| #30815 | Qwen4Exp QSA 选择无需 kq_mask | 降低内存压力，提升缓存利用率 |

**OpenCL 改进** — 新增多项小 batch gemm 变体，修复越界读取问题，移除强制使用 CPU 权重的大 N 守卫 (#30850)。

**Hexagon 后端** — Neon 向量化和线程化重打包（平铺）已合并 (#30901)，提升了 K-quants 和 Q1/Q2_0 模型的加载速度。

## 5. 稳定性与回归问题

| 问题 | 严重程度 | 状态 |
|-------|----------|-------|
| **SYCL FLASH_ATTN_EXT 失败** — 排列填充的 KV view 在 MKL 和 OneDNN 路径上均失败 (#30757) | 高 | PR #30761 修复 Case A；其他情况仍在调查 |
| **Vulkan MoE 缓存崩溃** — AMD RX 6900 XT 上 `--moe-cache-mib` 在加载时崩溃 (#30697) | 高 | 待解决，暂无修复 PR |
| **gfx1201 Flash Attention 输出垃圾数据** — 长上下文预填充在 RDNA4 上立即输出 EOS (#30884) | 高 | 待解决，影响 head_dim 256 模型 |
| **Gemma 4 thinking 通过 OpenAI API 无法控制** (#30759) | 中 | 待解决 |
| **Intel Arc Pro B70 Vulkan 解码吞吐崩溃** — 8x 性能下降 (1k→64k tokens) (#28721) | 中 | 后端特性，SYCL 仅下降约 2.4x |
| **HIP/ROCm Windows 多 GPU 静默损坏** — gfx1100 + gfx1201 输出乱码 (#28676) | 高 | 单 GPU HIP 和 Linux 双 GPU 正常工作 |

**编译问题：**

- ROCm 6.3.4 编译错误：`group_mask_warp_inplace` 无匹配函数 (#30755) — 已定位首个问题提交
- LLVM 23 + HIP 链接器错误：`ggml-rpc-server` (#28814)

## 6. 这对应用开发者的意义

1. **如果你使用服务器的 Responses API** — 更新到最新构建以修复 SSE 事件格式；这解决了与期望标准 OpenAI 兼容流式的客户端的兼容性问题。

2. **如果你在 ARM 上运行（Apple Silicon / Graviton）** — 新的 SVE 内核会提升 `q5_0`/`q5_1` 性能。如果你的硬件支持 SVE，将自动获得性能提升。

3. **如果你使用 SYCL** — 注意 FLASH_ATTN_EXT 已知存在问题；PR #30761 正在推进。如果你遇到 SYCL FA 问题，检查你的模型是否使用了 "gemma interleave" 启发式。

4. **如果你使用小缓存的 MoE 模型** — 新的警告系统会在缓存过小时提醒你，防止无声的性能下降。

5. **如果你在 AMD RDNA4 (gfx1201) 上部署** — 在 #30884 修复前，避免对长上下文工作负载使用 flash attention；该问题会导致立即输出 EOS。

6. **如果在无 ReBAR 的 AMD Windows 上使用 Vulkan** — 注意可能的 `VK_ERROR_OUT_OF_DEVICE_MEMORY` (#30888)；当前内存分配策略可能耗尽 WDDM 共享预算。

**构建建议：** 拉取最新的 `b11768` 或后续版本以获取服务器 API 修复和最新的后端改进。如果你的部署路径涉及这些后端，请关注 SYCL FA 和 Vulkan 问题。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Chinese. Let me carefully translate this following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references, code paths, API identifiers in original form
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

## 1. Today's Highlights

## 2. Releases & Breaking Changes

## 3. New Model & Hardware Support

## 4. Performance & Optimization

## 5. Stability & Regressions

## 6. What This Means for Application Developers

Let me go through each part carefully.</think>

# Ollama 动态 — 2026-10-21

## 1. 今日要点

安全和功能开发各占半壁江山。最紧迫的问题是**当前二进制中存在的关键 Go CVE 漏洞**（Issue #19162），需要将工具链升级到 Go 1.26.9+。正面消息是期待已久的 **TurboQuant/RotorQuant** 原生 Go 引擎实现已完成（Issue #15051），同时新增了 **Phonon 语音合成** 支持（通过 MLX）和 **DFlash2** 苹果芯片加速。

---

## 2. 版本发布与重大变更

| 项目 | 描述 | 链接 |
|------|------|------|
| 无新版本 | 过去 24 小时内无标签发布 | — |

---

## 3. 新模型与硬件支持

| 功能 | 详情 | PR/Issue |
|------|------|----------|
| **Phonon TTS** | MLX 运行器现支持 Phonon 文本转语音，提供 OpenAI 兼容的 `/v1/audio/speech` 端点和 CLI 播放功能 | PR #19166 |
| **DFlash2 支持** | 为苹果芯片 MLX 添加 DFlash2 块草案加速（块级动态卷积 + 候选选择器） | PR #19149 |
| **K2 Horizon 推理** | 在聊天模板中检测 K2 Horizon 推理标签，为 IFM 模型启用 `think: true` | PR #19161 |
| **vllm-d3 配对** | 决策模型现接收完整提示批次用于配对比较任务 | PR #19159 |

---

## 4. 性能与优化

| 领域 | 变更 | PR/Issue |
|------|------|----------|
| **CUDA 有效载荷去重** | 将共享 CUDA 运行时库从 `mlx_cuda_v13` 移入 `cuda_v13` 兄弟有效载荷，减少重复 | PR #17956 (已关闭) |
| **原子模型查询** | 将 `runnerRef.model` 改为 `atomic.Pointer`，消除并发预热模型查询时的锁竞争，修复 TestLoadedModelLookupConcurrent 闪烁问题 | PR #19070 (已关闭) |
| **右键菜单泄漏修复** | 在 macOS 和 Windows 上释放 `setContextMenuItems` 中的 C 字符串（每次右键点击约 32 字节） | PR #19042 (已关闭) |
| **TurboQuant + RotorQuant** | 原生 Go 引擎的极限压缩技术 — 参见 [Google Research 博客](https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/) 和 [arXiv:2504.19874](https://arxiv.org/pdf/2504.19874) | Issue #15051 (已关闭) |
| **下载重定向处理** | 为 blob 下载添加 HTTP 308 永久重定向支持 | PR #19164 |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 备注 |
|----------|------|------|------|
| **严重** | 当前二进制存在 Go CVE — 需要升级到 Go 1.26.9+ | #19162 (open) | 安全扫描发现多个严重/高危漏洞 |
| **高** | Windows：NVIDIA 显卡回退到 Vulkan 而非 CUDA — 0.40.6 上约 6% 解码性能回归 | #19165 (closed) | `OLLAMA_VULKAN:true` 默认值导致意外回退 |
| **高** | gemma4:12b 在 Intel Arc 130V（Lunar Lake 核显）上因 `ggml_vulkan: device lost` 崩溃 | #19158 (open) | 0.34.4 正常，0.40.x 起损坏 |
| **中** | gemma4 工具调用解析器在 `BEGIN_ARG/END_ARG` 语法上失败，导致退化 token 循环 | #18275 (open) | 影响 Continue.dev 代理模式 |
| **中** | 云端 deepseek-v4.1-flash 在系统消息约束回复时返回乱码 | #19156 (open) | 输出中途断裂，泄漏错误字符串 |
| **中** | `ollama launch opencode` 使用错误的上下文窗口大小（最大 vs. 已分配） | #19172 (open) | 使用 `/api/tags` 静态值而非运行时 `/api/ps` |
| **中** | Windows 桌面应用 0.33.1 静默启动失败内置服务器 | #18061 (open) | 服务器日志保持空白；手动 `ollama serve` 可用 |
| **低** | Ollama Generate 节点在切换模型时使用 `keep_context` 变红 | #19137 (open) | 需要重启服务器修复 |
| **需求** | VRAM 压力：空闲模型应在其他应用需要时提前释放 GPU 内存 | #18612 (open) | 需求最佳努力策略功能 |

---

## 6. 这对应用开发者意味着什么

- **安全优先**：如果你运行的是今日之前构建的生产环境 Ollama 二进制，一旦 Go 1.26.9+ 版本发布，请计划更新——当前构建存在严重 CVE 漏洞。
- **Windows CUDA 用户**：如果在 0.40.6 上使用 NVIDIA 显卡看到约 6% 吞吐量下降，请检查 `OLLAMA_VULKAN` 是否被意外设置；修复正在推进中。
- **苹果芯片收益**：新的 DFlash2 和 Phonon TTS 集成扩展了 M 系列 Mac 的能力——考虑用于离线 TTS 或加速草稿工作流。
- **上下文处理**：`ollama launch opencode` 缺陷意味着你的配置可能过度分配上下文；在调整前通过 `/api/ps` 验证实际分配。
- **工具使用注意**：如果基于 gemma4 构建代理，请注意解析器在 `BEGIN_ARG/END_ARG` 上的问题——可能触发退化循环。
- **内存管理**：空闲 VRAM 释放功能请求（Issue #18612）表明对多租户 GPU 场景有需求——值得关注未来版本。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the English LiteLLM Digest into Chinese, following specific rules:
- Only output the translation, no preamble or explanation
- Preserve markdown structure exactly (headings, tables, lists, etc.)
- Keep URLs, version numbers, issue/PR references, code as-is
- Use natural technical Chinese, like a Chinese developer newsletter

Let me translate this carefully while preserving the structure.</think>

# LiteLLM 摘要 — 2026-10-21

## 1. 今日要闻

LiteLLM 过去 24 小时非常繁忙，安全和稳定性工作占据主导。一个**高风险 guardrail 修复**（#47122）现已在工具流量和系统提示中撤回敏感信息——这对于处理敏感数据的部署来说是关键更新。团队发布了稳定版 v1.106.1 到 v1.103.6，均经过 cosign 验证的 Docker 镜像。在运维方面，GitHub Copilot 令牌自动刷新（#47701）已上线，解决了 BYOK 令牌过期问题；Prisma 启动竞态条件的修复（#27704）在经过数月影响后终于关闭。

---

## 2. 发布与破坏性变更

| 版本 | 类型 | 说明 |
|------|------|------|
| [v1.106.1](https://github.com/BerriAI/litellm/releases/tag/v1.106.1) | 稳定版 | Docker 镜像经过 cosign 签名验证 |
| [v1.105.2](https://github.com/BerriAI/litellm/releases/tag/v1.105.2) | 稳定版 | Docker 镜像经过 cosign 签名验证 |
| [v1.104.4](https://github.com/BerriAI/litellm/releases/tag/v1.104.4) | 稳定版 | Docker 镜像经过 cosign 签名验证 |
| [v1.103.6](https://github.com/BerriAI/litellm/releases/tag/v1.103.6) | 稳定版 | Docker 镜像经过 cosign 签名验证 |
| [v1.107.0-rc.2](https://github.com/BerriAI/litellm/releases/tag/v1.107.0-rc.2) | 发布候选 | — |

**破坏性变更警告：** #34889 修改了 GitHub Copilot OAuth 处理方式——`GHE.com` 用户必须在升级前设置 `GITHUB_COPILOT_API_BASE`；使用 `api_base` 的调用者在没有 `drop_params` 的情况下会收到 400 错误。

---

## 3. 新模型与硬件支持

- **TypeSafe Jev 模型** 现已在管理员模型选择器中列出（#47697）—— 支持通过 UI 配置团队/组织允许列表
- **Gemini 工具调用 ID 处理** — 新增可选参数 `thought_signature_in_tool_call_id`（#47692），适用于有严格 ID 长度限制的客户端（例如 AWS AgentCore 为 64 字符）

---

## 4. 性能优化

| 领域 | 变更 | PR |
|------|------|-----|
| **Token 计数** | HuggingFace 分词器失败后不再重新下载——缓存 5 分钟，节省离线代理每个请求约 23 秒 | [#47586](https://github.com/BerriAI/litellm/pull/47586) |
| **Prometheus 指标** | 提供商端 401 现在计入 LLM 失败和部署指标（自 v1.80.13 起损坏） | [#46668](https://github.com/BerriAI/litellm/pull/46668) |
| **数据库升级** | 升级运行现在以 JUnit 属性形式输出性能行和计时数据，用于仪表板监控 | [#47696](https://github.com/BerriAI/litellm/pull/47696) |
| **路由器故障转移** | 加权故障转移排除现在在部署亲和性回调之前应用，防止亲和性将请求发送回故障部署 | [#32309](https://github.com/BerriAI/litellm/pull/32309) |

---

## 5. 稳定性与回归问题

### 关键 / 高

| 问题 | 严重程度 | 状态 | 修复 PR |
|------|----------|------|---------|
| **工具流量中的 Secrets 未被撤回即送达模型** | **高** | 进行中 | [#47122](https://github.com/BerriAI/litellm/pull/47122) |
| **Prisma 查询引擎竞态条件导致滚动部署期间 Spend 数据丢失** | 高 | 已关闭 | —（需要回滚到稳定版） |
| **GitHub BYOK 令牌消耗显示为零** | 中 | 进行中 | — |

### 中

| 问题 | 严重程度 | 状态 |
|------|----------|------|
| **Headroom guardrail 在路由器上下文窗口检查已拒绝请求后触发** — 即使压缩能容纳，headroom 也永远无法挽救超窗口请求 | 中 | 进行中 [#46923](https://github.com/BerriAI/litellm/issues/46923) |
| **tpm_limit 与内存缓存一起使用从不补充——行为等同于 /key/update 时的固定预算** | 中 | 进行中 [#47340](https://github.com/BerriAI/litellm/issues/47340) |
| **响应缓存：finish_reason 以 "stop" 回放截断流；completion_tokens_details 丢弃** | 中 | 进行中 [#47014](https://github.com/BerriAI/litellm/issues/47014) |
| **SSE 错误码超出 HTTP 范围被静默丢弃** — 路由器回退/冷却永不触发 | 中 | 进行中 [#31284](https://github.com/BerriAI/litellm/issues/31284) |
| **Presidio guardrail 串行化所有分析器调用** — 锁在整个 HTTP 请求期间持有 | 中 | 进行中 [#47579](https://github.com/BerriAI/litellm/issues/47579) |

### 低 / 信息

- **最少占用路由饿瘦部署** — 响应缓存命中使计数器变为负数，平局总是选择第一个，计数器不在 workers 之间共享（#39322）
- **用户/团队 Spend 缓存丢失并发增量**（#43491）——已关闭，需要验证

---

## 6. 这对应用开发者意味着什么

1. **保护你的工具流量** — 高风险安全修复（#47122）即将推出。如果你运行 guardrails，预期工具调用/结果/提示中的 secrets 会被撤回。测试你的工作流。

2. **GitHub Copilot BYOK 在 1.104+ 中损坏** — 如果你依赖令牌消耗报告，停留在 1.103.x 或等待修复。刷新令牌功能（#47701）有助于解决过期问题，但不能解决消耗指标问题。

3. **离线部署变快** — 分词器缓存（#47586）消除了 HuggingFace 不可达时每个请求 23 秒的延迟。

4. **路由器故障转移改进** — 加权故障转移现在正确转移到健康部署，而不是卡在亲和性固定的故障部署上（#32309）。

5. **Prometheus 告警再次生效** — 提供商 401 现在触发失败指标（#46668）。如果你依赖 `litellm_deployment_failure_responses`，请检查你的告警。

6. **流式 MCP 工具链修复** — 多步骤工具调用现在记住之前的轮次（#47698）。之前，每次后续只有最新轮次，导致重复工具执行。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate this English digest about Unsloth into Chinese, following very strict rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully while maintaining all the structure and technical terms:

# Unsloth 每日简报 — 2026-10-21

## 1. 今日要闻

Unsloth 团队发布了重要的性能和可用性改进：新的 **RoPE 内核**通过多头平铺实现了 2-2.7 倍的加速，支持在多 GPU 间**拆分扩散去噪器**以处理单卡放不下的大模型，并扩展了 **GRPO/DPO/ORPO 训练**支持（含规则奖励库）。同时，多个影响 LoRA 可复现性和分布式检查点保存的 bug 已被标记。

---

## 2. 版本发布与重大变更

- **本周无新版本**发布。

---

## 3. 新模型与硬件支持

| 领域 | 更新内容 | PR/Issue |
|------|---------|----------|
| **多 GPU 扩散模型** | Studio 现在可以按块范围在多 GPU 间拆分单个扩散去噪器，避免当第二张显卡可用时回退到慢速的主机内存卸载。 | [#14412](https://github.com/unslothai/unsloth/pull/14412) |


| **视觉/音频模型训练** | `unsloth train` 现在能正确处理视觉模型（配合图像数据集）和音频模型（如 Gemma 3n）。之前会报错 "Could not auto-detect format mapping"。 | [#14389](https://github.com/unslothai/unsloth/pull/14389) |
| **DPO/ORPO/GRPO** | Studio Desktop 现已支持完整的训练目标，包括规则奖励库（`REWARD.md` 文件）用于 GRPO 训练。| [#12601](https://github.com/unslothai/unsloth/pull/12601) |

---

## 4. 性能优化

| 组件 | 改进 | 详情 | PR |
|------|------|------|-----|
| **RoPE 内核** | **单次调用 2-2.7 倍加速** | 采用多头平铺，Q 和 K 在一次 kernel _launch 中处理，无需克隆。在 B200 上对 Llama-8B（batch=8, 2048 tokens）进行性能分析：前向+反向总耗时 667μs（其中 kernel 本身 552μs）。| [#14417](https://github.com/unslothai/unsloth/pull/14417) |
| **全参数微调 DDP** | 降低显存占用 | 全参数微调（非 PEFT 模型）现默认启用 `gradient_as_bucket_view=True`，避免在 `param.grad` 和 DDP bucket 中重复存储梯度。| [#14399](https://github.com/unslothai/unsloth/pull/14399) |
| **梯度检查点** | 自动跳过层 | `checkpoint_skip_layers = "auto"` 在首次反向传播时测量每层的重计算开销，并按 `max_seq_length` 缩放以选出最优的 K 值。新增环境变量 `UNSLOTH_GC_KEEP_LAYERS`。| [#14404](https://github.com/unslothai/unsloth/pull/14404) |
| **FP8 融合** | Bug 修复 | `_e4m3fn_bytes_dequant_kernel` 现已在启动时传递 `enable_fp_fusion`（自 #14408 起缺失）。| [#14416](https://github.com/unslothai/unsloth/pull/14416) |
| **GRPO + DeepSpeed ZeRO-3** | 正确性修复 | 分数计算现使用收集后的 ZeRO-3 头部并采用 `no_grad` 而非 `inference_mode`。| [#14395](https://github.com/unslothai/unsloth/pull/14395) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复？ |
|----------|------|------|--------|
| **高** | 区块编译破坏分布式运行中的检查点重计算 → 第一步反向传播时触发 `CheckpointError` | [Issue #14063](https://github.com/unslothai/unsloth/issues/14063) | 临时方案：`UNSLOTH_BLOCK_COMPILE=0` |
| **高** | `has_internet()` 泄露全局 3s socket 超时 → 后续所有 socket 都被限制 | [Issue #14370](https://github.com/unslothai/unsloth/issues/14370) | — |
| **中** | LoRA 子空间碰撞：`random_state = 3407` 硬编码导致连续 LoRA→Merge→LoRA 流程中 99.9% 的 `lora_A` 权重相同 | [Issue #14327](https://github.com/unslothai/unsloth/issues/14327) | — |
| **中** | `fast_inference=True` + `full_finetuning=True` 在 A100 上加载模型时失败 | [Issue #4739](https://github.com/unslothai/unsloth/issues/4739) | 文档标注为不支持的组合 |
| **中** | DFlash2 在 Qwen3.8-Flash-Next 首次推理时崩溃 | [Issue #14381](https://github.com/unslothai/unsloth/issues/14381) | — |
| **低** | Pre-commit CI 压力问题：`enforce_kwargs_spacing.py` 运行极慢 | [Issue #14174](https://github.com/unslothai/unsloth/issues/14174) | — |

---

## 6. 应用开发者需要关注的事

- **如果你在多 GPU 环境下训练扩散模型**：[#14412](https://github.com/unslothai/unsloth/pull/14412) 中的新块范围拆分功能消除了去噪器无法单卡容纳时回退到 CPU 内存卸载的需求——多 GPU 桌面上的推理速度将显著提升。

- **如果你使用基于 RoPE 的模型**：[#14417](https://github.com/unslothai/unsloth/pull/14417) 中的内核 2-2.7 倍加速直接提升了长上下文工作场景的吞吐量。训练和推理均受益。

- **如果你用 DDP 进行全参数微调**：梯度现在存储在 DDP bucket 中而非重复副本，显存占用降低——这对多 GPU 节点上的大模型微调很重要。

- **如果你使用 GRPO/DPO/ORPO**：[#12601](https://github.com/unslothai/unsloth/pull/12601) 中的规则奖励库让你无需从头编写自定义奖励函数即可实现基于偏好的训练。

- **如果你在分布式环境中部署并使用区块编译**：由于检查点重计算 bug（[#14063](https://github.com/unslothai/unsloth/issues/14063)），目前建议避免 `UNSLOTH_BLOCK_COMPILE=1`。

- **如果你处理电子书进行微调**：现在有针对原生 EPUB/MOBI 支持的请求（[#14377](https://github.com/unslothai/unsloth/issues/14377)），将免除手动解析流程。

---

I'm noticing some translation inconsistencies in the PR references. Let me verify: all issue and PR identifiers (#14063, #14370, #14327, #4739, #14381, #14174, #14377) should remain as-is in the English format. The commit hash #14408 is also correct to preserve in its original form. Now checking the links section—these markdown links with Chinese anchor text appear consistent with the translation approach.</think>

# Unsloth 每日简报 — 2026-10-21

## 1. 今日要闻

Unsloth 团队发布了重要的性能和可用性改进：新的 **RoPE 内核**通过多头平铺实现了 2-2.7 倍的加速，支持在多 GPU 间**拆分扩散去噪器**以处理单卡放不下的大模型，并扩展了 **GRPO/DPO/ORPO 训练**支持（含规则奖励库）。同时，多个影响 LoRA 可复现性和分布式检查点保存的 bug 已被标记。

---

## 2. 版本发布与重大变更

- **本周无新版本**发布。

---

## 3. 新模型与硬件支持

| 领域 | 更新内容 | PR/Issue |
|------|---------|----------|
| **多 GPU 扩散模型** | Studio 现在可以按块范围在多 GPU 间拆分单个扩散去噪器，避免当第二张显卡可用时回退到慢速的主机内存卸载。 | [#14412](https://github.com/unslothai/unsloth/pull/14412) |
| **视觉/音频模型训练** | `unsloth train` 现在能正确处理视觉模型（配合图像数据集）和音频模型（如 Gemma 3n）。之前会报错 "Could not auto-detect format mapping"。 | [#14389](https://github.com/unslothai/unsloth/pull/14389) |
| **DPO/ORPO/GRPO** | Studio Desktop 现已支持完整的训练目标，包括规则奖励库（`REWARD.md` 文件）用于 GRPO 训练。| [#12601](https://github.com/unslothai/unsloth/pull/12601) |

---

## 4. 性能优化

| 组件 | 改进 | 详情 | PR |
|------|------|------|-----|
| **RoPE 内核** | **单次调用 2-2.7 倍加速** | 采用多头平铺，Q 和 K 在一次 kernel launch 中处理，无需克隆。在 B200 上对 Llama-8B（batch=8, 2048 tokens）进行性能分析：前向+反向总耗时 667μs（其中 kernel 本身 552μs）。| [#14417](https://github.com/unslothai/unsloth/pull/14417) |
| **全参数微调 DDP** | 降低显存占用 | 全参数微调（非 PEFT 模型）现默认启用 `gradient_as_bucket_view=True`，避免在 `param.grad` 和 DDP bucket 中重复存储梯度。| [#14399](https://github.com/unslothai/unsloth/pull/14399) |
| **梯度检查点** | 自动跳过层 | `checkpoint_skip_layers = "auto"` 在首次反向传播时测量每层的重计算开销，并按 `max_seq_length` 缩放以选出最优的 K 值。新增环境变量 `UNSLOTH_GC_KEEP_LAYERS`。| [#14404](https://github.com/unslothai/unsloth/pull/14404) |
| **FP8 融合** | Bug 修复 | `_e4m3fn_bytes_dequant_kernel` 现已在启动时传递 `enable_fp_fusion`（自 #14408 起缺失）。| [#14416](https://github.com/unslothai/unsloth/pull/14416) |
| **GRPO + DeepSpeed ZeRO-3** | 正确性修复 | 分数计算现使用收集后的 ZeRO-3 头部并采用 `no_grad` 而非 `inference_mode`。| [#14395](https://github.com/unslothai/unsloth/pull/14395) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复？ |
|----------|------|------|--------|
| **高** | 区块编译破坏分布式运行中的检查点重计算 → 第一步反向传播时触发 `CheckpointError` | [Issue #14063](https://github.com/unslothai/unsloth/issues/14063) | 临时方案：`UNSLOTH_BLOCK_COMPILE=0` |
| **高** | `has_internet()` 泄露全局 3s socket 超时 → 后续所有 socket 都被限制 | [Issue #14370](https://github.com/unslothai/unsloth/issues/14370) | — |
| **中** | LoRA 子空间碰撞：`random_state = 3407` 硬编码导致连续 LoRA→Merge→LoRA 流程中 99.9% 的 `lora_A` 权重相同 | [Issue #14327](https://github.com/unslothai/unsloth/issues/14327) | — |
| **中** | `fast_inference=True` + `full_finetuning=True` 在 A100 上加载模型时失败 | [Issue #4739](https://github.com/unslothai/unsloth/issues/4739) | 文档标注为不支持的组合 |
| **中** | DFlash2 在 Qwen3.8-Flash-Next 首次推理时崩溃 | [Issue #14381](https://github.com/unslothai/unsloth/issues/14381) | — |
| **低** | Pre-commit CI 压力问题：`enforce_kwargs_spacing.py` 运行极慢 | [Issue #14174](https://github.com/unslothai/unsloth/issues/14174) | — |

---

## 6. 应用开发者需要关注的事项

- **如果你在多 GPU 环境下训练扩散模型**：[#14412](https://github.com/unslothai/unsloth/pull/14412) 中的新块范围拆分功能消除了去噪器无法单卡容纳时回退到 CPU 内存卸载的需求——多 GPU 桌面上的推理速度将显著提升。

- **如果你使用基于 RoPE 的模型**：[#14417](https://github.com/unslothai/unsloth/pull/14417) 中的内核 2-2.7 倍加速直接提升了长上下文工作场景的吞吐量。训练和推理均受益。

- **如果你用 DDP 进行全参数微调**：梯度现在存储在 DDP bucket 中而非重复副本，显存占用降低——这对多 GPU 节点上的大模型微调很重要。

- **如果你使用 GRPO/DPO/ORPO**：[#12601](https://github.com/unslothai/unsloth/pull/12601) 中的规则奖励库让你无需从头编写自定义奖励函数即可实现基于偏好的训练。

- **如果你在分布式环境中部署并使用区块编译**：由于检查点重计算 bug（[#14063](https://github.com/unslothai/unsloth/issues/14063)），目前建议避免 `UNSLOTH_BLOCK_COMPILE=1`。

- **如果你处理电子书进行微调**：现在有针对原生 EPUB/MOBI 支持的请求（[#14377](https://github.com/unslothai/unsloth/issues/14377)），将免除手动解析流程。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*