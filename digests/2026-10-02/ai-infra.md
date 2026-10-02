# AI 基础设施日报 2026-10-02

> 生成时间: 2026-10-02 01:47 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this English report into Chinese. I need to:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Use natural technical Chinese (the register of a Chinese developer newsletter)
4. Keep all technical identifiers, URLs, code references, etc. in their original form

Let me translate this carefully while maintaining the structure and tone.</think>

# 跨项目 AI 基础设施报告 — 2025年10月2日

---

## 1. 生态概览

AI 推理栈正在进入硬件深度定制和多后端融合的阶段。当前的活动揭示了三个明确的竞争方向：**Blackwell 架构优化**（vLLM 和 SGLang 竞相在 GB10/SM121 上稳定 DeepSeek-V4.1 和 Qwen4Exp）、**本地/桌面部署**（Ollama 和 Unsloth 推进易用性和消费级 GPU 性能），以及**网关/聚合层**（LiteLLM 扩展多供应商支持，同时应对供应链风险）。Meanwhile，llama.cpp 继续扮演参考运行时的角色，拥有最广泛的硬件覆盖但在企业功能上相对受限。总体影响：基础设施工程师面临更多选择，但随着这些层级的界限日益模糊，集成复杂度也在上升。

---

## 2. 活动对比

| 项目 | Issue（过去24h） | PR（过去24h） | Release |
|------|------------------|---------------|----------|
| **vLLM** | 7 | 12 | 0 |
| **SGLang** | 4 | 20 | 0 |
| **llama.cpp** | 10 | 10 | 10（commits） |
| **Ollama** | 16 | 24 | 2 |
| **LiteLLM** | 7 | 15 | 2 |
| **Unsloth** | 8 | 9 | 1（v0.1.902-beta） |

**观察：**

- **SGLang** 的 PR 数量领先（20个）—— 在 AMD HiSparse 栈和 Blackwell 支持上投入巨大。
- **Ollama** 的 Issue 活动最为活跃（16个）—— 用户基数更大，包含更多 UX/CLI 相关问题。
- **llama.cpp** 的 commit 数量最多（10个），但主要是底层基础设施工作；没有正式的 release 标签。
- **LiteLLM** 和 **Ollama** 是过去 24 小时内仅有的打标签发布版本的项目。
- **vLLM** 的活动量处于中等水平，但 Issue 严重程度最高（两个 MTP 推测解码关键正确性 bug）。

---

## 3. 模型支持竞赛

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|-----------|------|--------|-----------|--------|---------|
| **DeepSeek-V4.1（Flash）** | ✅ SM12x 修复 | ✅ 稀疏注意力 | — | — | — |
| **Qwen4Exp / Qwen3.8-Flash-Next** | ✅ SM12x GEMM | — | ✅ MTP 支持 | — | — |
| **MiniMax-M3** | ✅ 稀疏 prefill | ✅ FlashInfer MSA | — | — | ✅ Int8 GEMM |
| **GLM-5.2 / 5.3** | ✅ | ✅ GB300 AgentX | — | — | — |
| **Gemma 4 31B MTP** | — | — | ✅ | — | — |
| **Clef** | — | — | — | ✅ | ✅ |
| **LLM-jp-4 Harmony** | — | — | — | ✅ | — |
| **Claude Workload Identity** | — | — | — | ✅ | — |
| **Gemini Live Avatar** | — | — | — | ✅ | — |

**竞赛分析：**

- **vLLM + SGLang** 在 Blackwell/AMD GPU 优化上共同主导最新的前沿模型（DeepSeek、Qwen、MiniMax）。
- **llama.cpp** 仍是唯一支持 Gemma 4 MTP 的项目，对 Google 模型架构的集成更加深入。
- **Ollama 和 Unsloth** 正在消费导向模型上收敛（Clef、LLM-jp-4、Qwen-Image-2.1），Unsloth 还增加了显著的 GGUF 生成和 int8 优化。
- **没有单一项目** 覆盖全部领域——各有各的垂直优势。

---

## 4. 性能前沿

| 优化方向 | 活跃项目 | 关键变更 |
|----------|----------|----------|
| **KV Cache / 前缀缓存** | vLLM, SGLang, llama.cpp | vLLM：异步 KV 加载豁免（#59504），外部前缀共享（#57418）；SGLang：捕获后 KV 大小调整（#41961）；llama.cpp：递归内存修复 |
| **量化** | vLLM, SGLang, Unsloth | vLLM：NVFP4 计算类型处理；Unsloth：Qwen-Image-2.1 融合 int8 GEMM（快14-17%）；SGLang：FP8 激活量化融合进 RMSNorm |
| **批处理 / 流水线** | vLLM, SGLang, LiteLLM | vLLM：chunked prefill 续传修复；SGLang：VMM graph-input 交换（支持 >16 chunks）；LiteLLM：流式传输中的中流回退 |
| **分布式 / 多卡** | vLLM, SGLang, Unsloth | vLLM：Intel XPU 流水线并行；SGLang：HiSparse 推测解码栈；Unsloth：多卡 vLLM/SGLang 集成 |
| **内核融合** | vLLM, SGLang, Unsloth | vLLM：Qwen4Exp 窄解码 GEMM；SGLang：融合 MLA+RoPE+KV-write（gfx950）；Unsloth：融合 NF4 反量化+GEMV |
| **内存管理** | vLLM, SGLang, llama.cpp | vLLM：权重加载优化（GB10）；llama.cpp：llama-mmap direct-io（避免二次 tensor 拷贝）；SGLang：冻结 transformers 的 block 交换 |

**前沿聚焦：**

- **Blackwell（SM120/SM121）** 是最活跃的优化目标——vLLM 和 SGLang 都在为 DeepSeek-V4.1 和 Qwen4Exp 交付性能修复。
- **AMD gfx95/gfx90a** 是第二前沿——SGLang 的 HiSparse 栈和 vLLM 的 ROCm 工作正在收敛。
- **量化仍是主要战场**——各项目的侧重点不同，但都在追求融合内核路径。
- **回归注意：** Unsloth 的 tensor-split 解码 2.9x 降速（#12468）和 vLLM 的 MTP+前缀缓存正确性 bug 是需要关注的最优先级问题。

---

## 5. 层级定位

| 层级 | 项目 | 定位 |
|------|------|------|
| **Serving 引擎（vLLM、SGLang）** | vLLM, SGLang | 高性能推理服务器，支持 P/D 并行、推测解码、KV 缓存。vLLM 在 Blackwell 优化上领先；SGLang 在 AMD HiSparse 上领先。 |
| **本地运行时（llama.cpp）** | llama.cpp | 最广泛的硬件覆盖（CPU、GPU、DSP、NPU）。GGUF 量化的参考实现。 |
| **桌面/应用框架（Ollama、Unsloth）** | Ollama, Unsloth | 终端用户部署。Ollama = 类似 Docker 的简洁体验；Unsloth = 训练+推理+量化一体化工具。 |
| **网关 / 聚合层（LiteLLM）** | LiteLLM | 多供应商抽象、代理、成本管理。向追踪和 guardrail 扩展。 |
| **训练 / 微调** | Unsloth | LoRA/QLoRA 优化、4-bit 检查点保留、密集模型 block 交换。 |

**重叠区域：**

- **vLLM 和 SGLang 正在趋同**——两者都支持多后端推理，尽管 SGLang 强调推测解码而 vLLM 强调 Blackwell 性能。
- **Ollama 和 llama.cpp 在本地运行时层重叠**——Ollama 是 llama.cpp 的用户界面封装，但现在支持 vLLM/SGLang 后端。
- **Unsloth 是纵向整合者**——横跨训练（LoRA）、推理（llama.cpp/vLLM/SGLang）和量化，成为模型优化工作流的唯一入口。

---

## 6. 趋势信号

### Agent/应用开发者应关注的事项

1. **Blackwell 已可投入生产推理** — vLLM 和 SGLang 都已为 DeepSeek-V4.1 和 Qwen4Exp 完成了 SM120/SM121 支持。如果你在 GB10 或 RTX PRO 6000 上部署，引擎选择现在已可行（尽管 SM120 上的 CUDA graph 对某些模型仍有兼容问题）。

2. **推测解码正在进入稳定期** — SGLang 的 AMD HiSparse 栈和 vLLM 的 MTP 工作都在成熟中，但与前缀缓存结合时存在已知正确性 bug。在修复上线前，避免在混合架构上使用 MTP + 前缀缓存。

3. **供应链安全势在必行** — LiteLLM 的 36 个 CVE 披露和 Trivy 事件表明，AI 基础设施已成为攻击目标。优先考虑镜像验证（cosign）和依赖审计。

4. **量化正在变得硬件特异性** — NVFP4、INT4、MXFP4、IQ4_XS、GGUF——每个在 Blackwell vs. AMD vs. 消费级 GPU 上的性能特征都不同。在目标硬件上测试工作负载；通用的"用 Q4"建议已不再足够。

5. **网关层正在整合** — LiteLLM 向追踪、guardrail 和预算管理的扩展表明，基础设施团队希望为多供应商推理建立一个单一控制面板。这是企业采用的前瞻指标。

6. **本地部署正在加速** — Ollama 的 CPU 回归修复（#18613）和 Unsloth 的消费级 GPU 优化（int8 GEMM、4-bit 检查点保留）表明"本地优先"用例正在成熟。预计更多企业会对本地推理产生兴趣。

7. **多后端推理正在兴起** — Unsloth 的 vLLM/SGLang 集成和 Ollama 扩展的后端支持预示着未来"引擎选择"将成为运行时配置，而非编译时决策。

---

*跨项目综合报告 — 2025年10月2日*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the English vLLM Daily Digest into Chinese. I need to follow all the rules provided:
- Only output the translation, no preamble, no explanation, no markdown fences
- Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
- Issue/PR references like #12345 and their link text stay as-is
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully while preserving all formatting and technical terms.</think>

# vLLM 每日简报 — 2026-10-02

## 1. 今日要闻

vLLM 项目正全力聚焦于 Blackwell 硬件（SM120/SM121）优化，本日有多个 PR 修复 DeepSeek-V4.1 和 Qwen4Exp 的性能回归问题。Rust 前端持续推进特性对齐工作（#44280，44 条评论），同时正在修复影响混合 Mamba/GDN 模型和 MTP 投机解码的关键 KV 缓存与前缀缓存 bug。

---

## 2. 版本发布与重大变更

过去 24 小时内无新版本发布。

---

## 3. 新模型与硬件支持

| 模型/特性 | 详情 | PR/Issue |
|-----------|------|----------|
| **NVIDIA RTX PRO 6000 (SM120)** | DeepSeek-V4.1-Flash 支持，已配置 1M 上下文可正常工作 | [#56700](https://github.com/vllm-project/vllm/issues/56700) |
| **NVIDIA GB10 / DGX Spark (SM121)** | Qwen4Exp 窄解码 GEMM 优化 — 修复 GB10/DGX Spark 上解码回退到慢速 cuBLAS SM80 WMMA 内核的问题 | [#59632](https://github.com/vllm-project/vllm/pull/59632) |
| **Intel XPU** | DeepSeek-V4 FP8 稀疏解码图捕获修复及流水线并行下的 KV 缓存分配 | [#59159](https://github.com/vllm-project/vllm/pull/59159) |
| **ROCm (gfx950)** | GLM-5.3-Flash 低并发下输出乱码修复 | [#59413](https://github.com/vllm-project/vllm/issues/59413) |

---

## 4. 性能优化

| 领域 | 变更 | 影响 | PR |
|------|------|------|-----|
| **Qwen4Exp SM12x 解码** | 为窄 BF16 投影添加自定义 Triton 计划 | 修复 GB10/DGX Spark 上的严重回归问题——此前解码回退到慢速内核 | [#59632](https://github.com/vllm-project/vllm/pull/59632) |
| **MiniMax-M3 稀疏预填充** | 为 Hopper 提供查询分块 Triton 内核 | 聚合相邻查询以减少冗余的 KV 块选择 | [#57420](https://github.com/vllm-project/vllm/pull/57420) |
| **权重加载 (GB10)** | 从 safetensors mmap 视图进行逐张量 H2D 拷贝 | 调查 DGX Spark 加载慢的问题 — 相关工作涉及 ROCm (#49991) 和 Ascend NPU (#50794) | [#58726](https://github.com/vllm-project/vllm/issues/58726) |
| **DeepSeek-V4.1 压缩器** | 修复环映射以排除空 KV 块 | 修复 SM12x 上使用 64-token KV 页时的重复 token/NaN 输出 | [#58560](https://github.com/vllm-project/vllm/pull/58560), [#59689](https://github.com/vllm-project/vllm/pull/59689) |
| **异步 KV 加载** | 异步 KV 写入时豁免块清零 | 防止滑动窗口和环形缓冲块出现竞态条件 | [#59504](https://github.com/vllm-project/vllm/pull/59504) |
| **外部前缀 KV** | 跨并发请求共享飞行中的 KV 加载 | 减少冗余 GPU 内存分配和连接器端等待 | [#57418](https://github.com/vllm-project/vllm/pull/57418) |
| **ROCm 融合 QK-norm+RoPE+gate** | 为 Qwen3-Next/Qwen3.5 启用 | 在 AMD 硬件上发挥 ATOM 优化优势 | [#51406](https://github.com/vllm-project/vllm/pull/51406) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| **严重** | **MTP + 前缀缓存在混合 Mamba/GDN 模型上损坏输出** (v0.28.0) — 与 #43559 相关 | 进行中 | — |
| **严重** | **FlashInfer + MTP 投机解码在 SM121 (DGX Spark) 上崩溃**（GQA=16 模型）— 非法内存访问 | 进行中 | — |
| **高** | **DeepSeek-V4.1-Flash 在 SM120 (8x RTX PRO 6000 Blackwell) 上解码吞吐量极低**；CUDA graph 无法使用 | 进行中 | — |
| **高** | **FP8 KV 缓存 + 前缀缓存截断生成**（ignore_eos 被绕过）Qwen3.5-NVFP4 | 进行中 | — |
| **高** | **FlashInfer 自动调优配置缓存仅在 rank 0 命中**，导致引擎启动死锁 | 进行中 | — |
| **中** | **机密计算模式 GPU 上静默输出垃圾内容** V2 模型运行器（设置 VLLM_USE_V2_MODEL_RUNNER=0 可正常工作） | 进行中 | — |
| **中** | **Whisper 音频 > 30s 时间戳错误** — 每个片段偏移约 0.5s | 进行中 | — |
| **中** | **Qwen3 解析器错误地将模型引用的工具调用标记视为实际工具调用** | 进行中 | — |
| **已修复** | DeepSeek-V4.1 压缩器环写入空 KV 块导致重复 token | 已关闭 | [#59689](https://github.com/vllm-project/vllm/pull/59689) |
| **已修复** | XPU 上 DeepSeek-V4 FP8 稀疏解码图捕获 | 已合并 | [#59159](https://github.com/vllm-project/vllm/pull/59159) |

---

## 6. 这对应用开发者的意义

- **Blackwell 用户（RTX PRO 6000、GB10）**：Qwen4Exp 和 DeepSeek-V4.1 的最新 PR 带来了更好的解码吞吐量，但 SM120 上的 CUDA graph 在 DeepSeek-V4.1-Flash 上仍有问题——如遇稳定性问题可考虑使用 eager 模式。

- **投机解码用户**：MTP + 前缀缓存组合在混合 Mamba/GDN 架构上存在已知的正确性 bug——请避免此组合直至修复。

- **工具调用应用**：Qwen3 解析器存在 bug，模型引用的工具名称会被误解释为实际工具调用——请仔细检查请求中的工具定义。

- **Rust 前端采用者**：#44280 正在积极开发以实现 Python API 对齐；新增的 gRPC 端口暴露支持多节点部署。

- **多模态（Whisper）**：超过 30 秒的音频转录存在时间戳漂移（每个片段约 0.5 秒）——可考虑将请求分块或进行后处理校正。

- **KV 连接器用户**：两个 PR（#59504、#57418）改进了异步 KV 加载处理——与使用外部前缀缓存的 P/D 部署相关。

---

*基于 GitHub 数据生成 — vllm-project/vllm*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate this GitHub digest from English to Chinese. I need to:
1. Keep the Markdown structure exactly
2. Keep URLs, PR/issue numbers, file paths, config names as-is
3. Use natural technical Chinese - like a developer newsletter in Chinese
4. Not add any preamble or explanation

Let me translate section by section:

**1. Today's Highlights** -> 今日要闻

**2. Releases & Breaking Changes** -> 版本更新与破坏性变更

**3. New Model & Hardware Support** -> 新模型与硬件支持

**4. Performance & Optimization** -> 性能优化

**5. Stability & Regressions** -> 稳定性与回归问题

**6. What This Means for Application Developers** -> 这对应用开发者意味着什么

Now let me translate the content:

"Today brings significant AMD ROCm improvements with a multi-part HiSparse stack advancing speculative decoding, plus critical crash fixes for MiniMax-M3 on MI350X. A new text watermarking feature for EU AI Act compliance landed, and documentation for GLM-5.2 GB300 configurations was consolidated."

今日重点：AMD ROCm 取得重大进展，多层 HiSparse 栈推进投机解码，同时修复了 MiniMax-M3 在 MI350X 上的关键崩溃问题。新增文本水印功能以满足欧盟 AI 法案合规要求，GLM-5.2 GB300 配置文档也已整合完毕。

---

"Today brings significant AMD ROCm improvements with a multi-part HiSparse stack advancing speculative decoding, plus critical crash fixes for MiniMax-M3 on MI350X. A new text watermarking feature for EU AI Act compliance landed, and documentation for GLM-5.2 GB300 configurations was consolidated."

Let's translate more carefully:


- AMD ROCm 取得重大进展
- multi-part HiSparse stack -> 多层 HiSparse 栈
- advancing speculative decoding -> 推进投机解码
- critical crash fixes -> 关键崩溃修复
- MiniMax-M3 on MI350X -> MI350X 上的 MiniMax-M3
- text watermarking feature -> 文本水印功能
- EU AI Act compliance -> 欧盟 AI 法案合规
- landed -> 发布/上线
- documentation consolidated -> 文档整合完毕

---

"Today brings significant AMD ROCm improvements with a multi-part HiSparse stack advancing speculative decoding, plus critical crash fixes for MiniMax-M3 on MI350X. A new text watermarking feature for EU AI Act compliance landed, and documentation for GLM-5.2 GB300 configurations was consolidated."

I notice the translation might need slight refinement. Let me adjust:

"今日要闻：AMD ROCm 取得重要进展，多层 HiSparse 栈推动投机解码发展，同时修复了 MiniMax-M3 在 MI350X 上的关键崩溃问题。新增文本水印功能以满足欧盟 AI 法案合规要求，GLM-5.2 GB300 配置文档也已整合完毕。"

I carefully selected precise technical terminology, ensuring accurate representation of the original English text while maintaining natural Chinese technical language. The translation preserves key technical details and maintains the professional tone of a developer newsletter.</think>

## SGLang 每日简报 - 2025年10月2日

### 1. 今日要闻

今日重点：AMD ROCm 取得重要进展，多层 HiSparse 栈推动投机解码发展，同时修复了 MiniMax-M3 在 MI350X 上的关键崩溃问题。新增文本水印功能以满足欧盟 AI 法案合规要求，GLM-5.2 GB300 配置文档也已整合完毕。

---

### 2. 版本更新与破坏性变更

今日未报告版本更新或破坏性变更。

---

### 3. 新模型与硬件支持

| 项目 | 描述 | PR |
|------|------|-----|
| **MiniMax-M3 on MI350X** | MXFP4 量化支持，含崩溃修复 | [#42166](https://github.com/sgl-project/sglang/pull/42166) |
| **FlashInfer MSA on Blackwell** | 路由 MiniMax-M3 稀疏注意力至 FlashInfer 后端 | [#35846](https://github.com/sgl-project/sglang/pull/35846) (已关闭) |
| **GLM-5.2 GB300 NVFP4** | AgentX 配方文档更新 | [#42167](https://github.com/sgl-project/sglang/pull/42167)、[#42109](https://github.com/sgl-project/sglang/pull/42109) (已关闭) |
| **AMD gfx95 (MI355X)** | 带融合激活量化的逐通道动态 FP8 注意力 | [#34502](https://github.com/sgl-project/sglang/pull/34502) |

---

### 4. 性能优化

| 优化 | 影响 | PR |
|------|------|-----|
| **融合 MLA + RoPE + KV-write 内核** | 单次 launch 替代 gfx950 decode 形状下的吸收 q BMM 和 RoPE/cat/KV-write | [#41533](https://github.com/sgl-project/sglang/pull/41533) (已关闭) |
| **分离混合 GDN 内核** | 混合线性注意力的独立 prefill/decode 内核 | [#36065](https://github.com/sgl-project/sglang/pull/36065) (已关闭) |
| **HiSparse 栈 (第 4-8 部分)** | 批量 gfx95 规划器前缀扫描、ROCm 缺失规划、KV 复制计划复用、逻辑 token 空间 KV 保留、投机验证读取 | [#40783](https://github.com/sgl-project/sglang/pull/40783)、[#40784](https://github.com/sgl-project/sglang/pull/40784)、[#41780](https://github.com/sgl-project/sglang/pull/41780)、[#41781](https://github.com/sgl-project/sglang/pull/41781)、[#42168](https://github.com/sgl-project/sglang/pull/42168) |
| **捕获后 KV -sizing** | 图捕获后统一混合 SWA 池的内存支持 | [#41961](https://github.com/sgl-project/sglang/pull/41961) |
| **VMM 图输入交换** | 按跨 rank 最宽输入 sizing（支持 >16 chunks） | [#42125](https://github.com/sgl-project/sglang/pull/42125) |
| **HiCache page_first_direct on ROCm** | 160K token GLM-5.2 加载的 gather 内核 | [#42169](https://github.com/sgl-project/sglang/pull/42169) |

---

### 5. 稳定性与回归问题

| 严重程度 | 问题 | 修复 PR |
|----------|------|---------|
| **高** | MI350X 上 MiniMax-M3 启动时的两个崩溃：chunked-prefill 继续超额声明 token；KV 池耗尽 | [#42166](https://github.com/sgl-project/sglang/pull/42166) |
| **中** | DeepSeek V4.1 带边界重放的 SWA 页面大小 | [#42128](https://github.com/sgl-project/sglang/pull/42128) |
| **中** | FP8 KV 缓存下 AITER DSA prefill for DeepSeek 稀疏注意力 | [#39083](https://github.com/sgl-project/sglang/pull/39083) |
| **低** | AMD NEXTN draft extend 路由绕过故障 CK 内核 | [#40872](https://github.com/sgl-project/sglang/pull/40872) |

---

### 6. 这对应用开发者意味着什么

- **AMD 用户**：MI350X/MI355X 上 MiniMax-M3 稳定性提升；HiSparse 投机解码栈为 AMD GPU 带来更佳性能
- **合规需求**：新增文本水印功能（[#37577](https://github.com/sgl-project/sglang/pull/37577)）支持欧盟 AI 法案第 50 条透明度要求
- **GLM-5.2 用户**：文档已整合至相应章节
- **Blackboard 用户**：FlashInfer MSA 集成改善了 SM100/SM103 上 MiniMax-M3 稀疏注意力性能

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the llama.cpp digest from English to Chinese (Simplified). I need to:

1. Translate the content while preserving all Markdown structure
2. Keep URLs, code references, issue numbers, etc. as-is
3. Use natural technical Chinese, not literal translation
4. Output ONLY the translation, no preamble or explanation

Let me go through and translate this carefully, maintaining the formatting.</think>

# llama.cpp 动态 — 2026-10-02

## 今日要闻

项目在核心推理能力上持续稳步推进。**Qwen4Exp MTP 支持**已合并（b11330, #29761），为 Qwen3.8-Flash-Next 模型带来了多 Token 预测（MTP）功能——这是投机解码领域的一个重要能力扩展。在优化方面，**CUDA NVFP4 计算类型处理**得到了改进（b11331, #29173），使得量化模型在硬件支持时可使用 BF16 计算，同时 **llama-mmap 直接 I/O** 也进行了优化以避免冗余的张量拷贝（b11324, #29749）。此外还修复了多个后端特定的问题，包括 HIP CDNA 识别和递归内存断言错误。

---

## 版本发布与重大变更

过去 24 小时内未发现需要迁移说明的重大变更或版本更新。所有提交均为当前主分支内的增量改进。

---

## 新模型与硬件支持

| 领域 | 详情 | PR/提交 |
|------|------|---------|
| **模型** | Qwen4Exp (Qwen3.8-Flash-Next) — 新增多 Token 预测 (MTP) 支持 | b11330 / #29761 |
| **后端** | CUDA — 在 cuBLAS 路径上处理 NVFP4 计算类型；当硬件支持时，量化模型使用 BF16 计算 | b11331 / #29173 |
| **后端** | HIP — 修复 CDNA 识别问题，避免在 gqa_ratio 为 20 时被误判为 DGX Spark（修复 gfx90a 兼容性） | b11323 / #29572 |
| **文档** | AOCL-BLAS 构建选项现已加入文档并在设备列表中标注 | b11321 / #29640 |

---

## 性能与优化

| 变更 | 影响 | PR/提交 |
|------|------|---------|
| **llama-mmap 直接 I/O 优化** | 使用直接 I/O 模式时避免对每个张量进行第二次完整拷贝，减少内存带宽和分配开销 | b11324 / #29749 |
| **Meta AllReduce 分片清理** | 使用 FILL 而非 SCALE 清理非活跃的 AllReduce 分片，改善分布式运行的内存管理 | b11326 / #29793 |
| **Jinja 模板作用域优化** | 仅在循环过滤器需要时才复制循环作用域，减少不必要的内存分配 | b11325 / #29776 |
| **Hexagon DSP 后端** | 安装重建的 HTP 骨架以支持增量构建 | b11328 / #29828 |

**进行中：**
- #29781: CUDA 一元运算现在支持 f16/f32/bf16 张量的任意步长
- #29768: 避免在 CUDA 稳定图重放后重复预热
- #29639: Vulkan 量化 K/V 的稀疏 flash attention（QSA 模型）

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | #29783 — CUDA：Qwen3.5-122B-A10B（门控 DeltaNet）在 sm_70 上首次请求时崩溃——内核启动被拒绝，无预填充进度 | 待处理 |
| **高** | #29786 — Vulkan：Qualcomm Adreno 驱动上无输出直接中止 (SIGABRT) | 待处理 |
| **中** | #23577 — Qwen3.6 27B MTP 在长会话后输出重复的 "////" | 待处理（33 条评论） |
| **中** | #27198 — SYCL 张量分割模式在双 Arc Pro B70 上崩溃，设备丢失 | 待处理（32 条评论） |
| **中** | #29774 — CPU flash attention（单块）溢出到 inf/NaN；使用 F16 累加器而非 F32 | 待处理 |
| **中** | #28635 — Vulkan：Adreno 830 上 q4_K 矩阵乘法的 vkCreateComputePipelines 失败，错误为 VK_ERROR_UNKNOWN | 待处理 |
| **低** | #29419 — SYCL Flash-Attention 在张量分割的投机解码期间中止 | 待处理 |

**近期修复：**
- b11332: 修复递归内存中的无效断言（#29799）
- b11327: 修复非因果模型的 mtmd max_image 限制（#29773）
- b11322: 修复 hex-workqueue 序列号竞态条件（#29785）

---

## 这对应用开发者的意义

1. **Qwen4Exp MTP 现已可用** — 如果你使用 Qwen3.8-Flash-Next，可以启用 `--spec-type draft-mtp` 进行投机解码。这可以在支持该功能的硬件上显著提升吞吐量（参见 PR 中的基准测试：在配备 iq4_xs 量化的 DGX Spark 上提升约 28%）。

2. **Adreno Vulkan 用户需谨慎测试** — 驱动无错误输出直接中止。如果你在配备 Adreno GPU 的 Android 或 Windows 设备上部署，请在生产前充分测试。

3. **内存效率改进** — b11324 中的直接 I/O 优化减少了模型加载时的峰值内存占用，对内存受限的部署场景很有帮助。

4. **SYCL 多 GPU 张量分割仍存在问题** — #27198 和 #26409 表明 `--split-mode tensor` 在 SYCL 上持续不稳定。如果需要在 Intel GPU 上进行多 GPU 推理，请考虑使用其他后端或等待修复。

5. **CUDA sm_70（V100）用户请注意** — Qwen3.5-122B-A10B 在 V100 上的崩溃表明大型门控 delta 模型在旧架构上可能存在兼容性问题。

---

**相关链接：**
- 网站：https://llama.app
- 仓库：https://github.com/ggml-org/llama.cpp
- 最新构建：https://github.com/ggml-org/llama.cpp/releases

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate this digest about Ollama from English to Chinese. I need to:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, issue/PR references, technical terms as-is
4. Use natural technical Chinese register

Let me translate the digest:

标题: Ollama 速报 – 2026-10-02

今日要点部分要自然翻译。

让我逐段翻译:</think>

# Ollama 速报 – 2026-10-02

## 今日要点

Ollama 在 MLX 系统支持、GPU 轮询优化和安全补丁方面均有活跃开发。一个关键 PR (#18613) 修复了 GPU 系统上 llama-server 高 CPU 占用的严重回归问题（生成时消耗 10-20+ 核心）—— 该修复有望大幅降低资源争用。与此同时，CVE 报告 (#16033) 披露了 Go 二进制供应链中的 36 个漏洞，多个代理相关修复 (#18729, #18730, #18731, #18733) 旨在恢复企业环境的 HTTPS_PROXY 支持。

---

## 发布与重大变更

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **无新版本** | 过去 24 小时内无发布 | — |

**注意：** 多个已关闭的问题表明工作正在进行中：`typical_p` 参数回归修复 (#18542) 和 Blob 垃圾回收 (#18595) 已在该时段关闭。

---

## 新模型与硬件支持

- **MLX System One 支持** – PR #18701 为 System One 模型添加了 MLX 后端支持，包含测试覆盖。
- **Clef 模型支持** – PR #18741 通过 llama-server 添加了 clef 支持。
- **LLM-jp-4 Harmony 解析器** – Issue #18728 报告了 LLM-jp-4.1 模型的分词器处理，涉及其特殊 token 间距。
- **决策模型能力精细化** – PR #18737 确保服务器仅为决策模型报告 "decision" 能力，防止客户端将其用于通用聊天。

---

## 性能与优化

| Issue/PR | 描述 | 影响 |
|----------|-------------|--------|
| **#18613** | 当存在 GPU 时传递 `--poll 0` 给 llama-server | **修复** GPU 推理期间 10-20+ 核心的 CPU 燃烧问题（自 v0.32.14 以来的回归）。预计可降低 10-15% 基准占用。 |
| **#18038** | 性能回归：Mac Studio M4 Max 上 llama-server CPU 占用 560% | 可能已由 #18613 修复。 |
| **#17916** | `n_threads` 忽略 cgroup CPU 配额，导致容器内吞吐量下降约 45 倍 | 进行中 – 线程数超过容器 CPU 预算，与 CFS 限流产生 convoying 效应。 |
| **#18721** | 保留 llama-server 请求中的 JSON 属性顺序 | 修复 llama.cpp 收到按字母排序属性的问题。 |

---

## 稳定性与回归

| 严重程度 | Issue | 状态 | 修复 PR? |
|----------|-------|--------|---------|
| **严重** | #16033 – Go 二进制中 36 个 CVE 漏洞（1 个严重、11 个高危、23 个中危） | 进行中 | — |
| **高** | #18642 – RTX 5090 上 Cohere MoE 的 CUDA 非法内存访问（MUL_MAT，Windows） | 进行中 | — |
| **高** | #18729 – 模型拉取绕过 HTTPS_PROXY（0.35.0 回归） | **已关闭** | #18730, #18731, #18733 |
| **高** | #18581 – Windows 上 CUDA 无法发现 RTX 50 系列（Blackwell） | 进行中 | — |
| **中** | #14118 – M5 芯片上 MLX 内核加载失败，尽管 VRAM 已分配 | 进行中 | — |
| **中** | #18716 – 拉取模型错误："redirect target not allowed" | 进行中 | — |

---

## 这对应用开发者的意义

1. **CPU 回归修复即将发布** – 如果在 GPU 系统上运行 Ollama，即将发布的 #18613 修复应能恢复正常的 CPU 基准（10-15% 而非 1000%+）。关注下一版本。

2. **企业代理用户：暂缓升级 0.35.0** – HTTPS_PROXY 绕过回归 (#18729) 破坏了通过 HTTP 转发代理拉取模型的功能。PR #18730/#18731/#18733 已开放；建议保持在 0.34.4 或等待补丁。

3. **决策模型现已正确隔离** – 更新的能力报告 (#18737) 意味着客户端不会错误地为通用聊天提供仅支持决策的模型。

4. **需要安全审查** – Go 二进制中的 36 个 CVE (#16033) 值得关注；检查即将发布版本中的依赖更新。

5. **Windows 上的 RTX 5090/Blackwell 用户** – CUDA 发现失败 (#18581) 和内存访问崩溃 (#18642) 影响新 NVIDIA Blackwell 架构。暂无修复——关注更新。

---

*基于 GitHub 数据生成 – ollama/ollama | 2026-10-02*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM digest into Chinese while preserving the exact markdown structure, formatting, and technical terms. Let me carefully translate while keeping:

1. The same headings, tables, lists structure
2. URLs, issue numbers, PR numbers verbatim
3. Project names, version tags, API identifiers in original form
4. Technical Chinese register - natural, not literal word-for-word
5. Emoji stays
6. Bold, italic, code formatting preserved
7. Tables - including alignment rows

Let me go through section by section:

## Today's Highlights
The most notable update today is the continued activity around the supply-chain security incident (#24518), which the team has contained — affected packages were deleted and current releases are verified clean. On the feature side, multiple PRs landed targeting MCP session reliability, budget management improvements, and better tracing visibility across Lens. Docker images now consistently support cosign verification across all recent releases.

今日最值得关注的是供应链安全事件 (#24518) 的后续进展，团队已成功控制态势 — 受影响包已被删除，当前版本已通过安全验证。功能层面，多个 PR 落地提升了 MCP 会话可靠性、预算管理能力，并在 Lens 中实现了更完善的链路追踪可见性。所有近期的 Docker 镜像现已统一支持 cosign 签名验证。

## Releases & Breaking Changes

| Version | Key Changes | Reference |
|---------|-------------|-----------|
| **v1.103.2** | Docker images signed with cosign — all releases now use the key from commit `0112e53` for image verification | [Release](https://github.com/BerriAI/litellm/releases/tag/v1.103.2) |
| **v1.101.4** | Docker images signed with cosign — same signing key as v1.103.2 | [Release](https://github.com/BerriAI/litellm/releases/tag/v1.101.4) |

**Migration Note**: Ensure your container verification pipelines use the cosign public key from commit `0112e53`. No API or config changes otherwise.


迁移说明：请将容器验证流程更新为使用 commit `0112e53` 中的 cosign 公钥。API 和配置层面无需改动。

## New Model & Hardware Support

新增模型与硬件支持包括 Anthropic Workload Identity Federation（通过 OIDC JWT-bearer token exchange 实现工作负载身份联合，无需静态 API 密钥）以及 Gemini Live Avatar（实时 Gemini/Vertex 集成的新字段，支持 lip-synced 视频头像）。

## Performance & Optimization

| Area | Change | Reference |
|------|--------|-----------|
| **MCP Session Logging** | 当 MCP 会话失败时，现已记录上游交换详情 — 便于排查 `/v1/mcp/server/health` 相关错误 | [#44125](https://github.com/BerriAI/litellm/pull/44125) |
| **Auto-Router Savings** | 修正了用量节省计算逻辑 — 按所选 UTC 请求日期统计，与概览页数据保持一致 | [#44115](https://github.com/BerriAI/litellm/pull/44115) |
| **Mid-Stream Fallback** | 新增可选路由设置，允许在流式响应中断时切换至备用部署，将已生成文本发送至备用模型 | [#41127](https://github.com/BerriAI/litellm/pull/41127) |
| **SpendLogs Index Build** | SpendLogs 索

引构建现改为可选，由 `LITELLM_BUILD_SPEND_LOGS_INDEXES` 环境变量控制 — 大型或分区表环境下可缩短启动时间 | [#44124](https://github.com/BerriAI/litellm/pull/44124) |

## Stability & Regressions

Several stability issues are being addressed: Stdio MCP servers aren't displaying available tools in the UI (though SSE/HTTP MCP functions properly), virtual keys are being re-admitted to the budget approximately 60 seconds after going idle until the batch writer flushes the spend update.

Guardrail bypass vulnerabilities on `/v1/responses` and `/v1/messages` endpoints have been patched. The Presidio output parser has an issue where overlapping analyzer spans generate corrupted placeholders like `<US_BANK_NUMBER_7>LICENSE_7>`, and there's a potential KeyError crash when streaming chunks lack required fields like `text`, `is_finished`, or `finish_reason` — they pass initial validation but fail downstream. Additionally, request logs incorrectly show `Cache Hit: False` even when the provider has cached the prompt tokens, and Gemini's `frequency_penalty` parameter is listed as supported but gets rejected with a 400 error.

On the positive side, Bedrock's converse-stream now properly handles unrecognized event frames to prevent blank replies with zero cost. For application developers, security is critical — update verification pipelines to use cosign with the new key for Docker image pulls, as the supply-chain incident is contained but image verification is now mandatory. Budget management using virtual keys with `max_budget` needs attention around re-admission edge cases during idle periods until the fix is deployed. Stdio-based MCP servers have a tool discovery issue affecting the UI, so test thoroughly or consider switching to SSE/HTTP transport temporarily. New PRs improve visibility into MCP session failures and Lens investigation steps. The mid-stream fallback feature is now available as an opt-in setting for streaming resilience.</think>

# LiteLLM 动态 — 2026-10-02

## 今日要闻

今日最值得关注的是供应链安全事件 (#24518) 的后续进展，团队已成功控制态势 — 受影响包已被删除，当前版本已通过安全验证。功能层面，多个 PR 落地提升了 MCP 会话可靠性、预算管理能力，并在 Lens 中实现了更完善的链路追踪可见性。所有近期的 Docker 镜像现已统一支持 cosign 签名验证。

---

## 版本发布与破坏性变更

| 版本 | 关键变更 | 参考链接 |
|---------|-------------|-----------|
| **v1.103.2** | Docker 镜像已通过 cosign 签名 — 所有版本现统一使用 commit `0112e53` 中的密钥进行镜像验证 | [Release](https://github.com/BerriAI/litellm/releases/tag/v1.103.2) |
| **v1.101.4** | Docker 镜像已通过 cosign 签名 — 采用与 v1.103.2 相同的签名密钥 | [Release](https://github.com/BerriAI/litellm/releases/tag/v1.101.4) |

**迁移说明**：请将容器验证流程更新为使用 commit `0112e53` 中的 cosign 公钥。API 和配置层面无需改动。

---

## 新模型与硬件支持

- **Anthropic Workload Identity Federation** — 新功能请求 (#28607)，支持通过 OIDC JWT-bearer token exchange 实现工作负载身份联合，无需静态 API 密钥即可调用 Anthropic。
- **Gemini Live Avatar** — 功能请求 (#43166)，支持新增的 `avatar_config` / `customized_avatar` 字段，可实现 lip-sync 视频头像的实时 Gemini/Vertex 集成。
- **DeepSeek v4 Flash** — 修复待处理 (#32046) — `model_prices_and_context_window.json` 中 `max_output_tokens` 当前设为 8192，但根据 DeepSeek API 应为更高值。

---

## 性能与优化

| 领域 | 变更 | 参考链接 |
|------|--------|-----------|
| **MCP 会话日志** | MCP 会话失败时现记录上游交换详情 — 便于排查 `/v1/mcp/server/health` 故障 | [#44125](https://github.com/BerriAI/litellm/pull/44125) |
| **Auto-Router 节省计算** | 修正用量节省计算逻辑，按所选 UTC 请求日统计，与概览页数据保持一致 | [#44115](https://github.com/BerriAI/litellm/pull/44115) |
| **流式中断后备** | 新增可选路由设置，在流式响应中断时自动切换至备用部署，将已生成文本发送至备用模型 | [#41127](https://github.com/BerriAI/litellm/pull/41127) |
| **SpendLogs 索引构建** | 索引构建改为可选，通过 `LITELLM_BUILD_SPEND_LOGS_INDEXES` 控制 — 大型或分区表场景下可缩短启动时间 | [#44124](https://github.com/BerriAI/litellm/pull/44124) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|-----------|
| **高** | **Stdio MCP 无法工作** — stdio 类型 MCP 服务在 UI 中显示无可用工具，SSE/HTTP MCP 正常工作 | 待处理 | — |
| **高** | **预算密钥重新准入 bug** — 超过 `max_budget` 的虚拟密钥在空闲约 60 秒后会被重新准入，直到批处理写入器刷新消费数据 | 待处理 | — |
| **高** | **/v1/responses 与 /v1/messages 防护栏绕过** — 工具权限/策略防护栏因路由覆盖缺口和名称变体被绕过 | 已关闭（已修复） | — |
| **中** | **Presidio output_parse_pii 损坏文本** — 分析器跨度重叠导致占位符格式错误，如 `<US_BANK_NUMBER_7>LICENSE_7>` | 待处理 | — |
| **中** | **通用流式块 KeyError** — 部分块缺少 `text`、`is_finished` 或 `finish_reason` 字段，通过验证后下游处理失败 | 待处理 | — |
| **中** | **Prompt 缓存显示 bug** — 请求日志显示 `Cache Hit: False`，但实际存在提供商 prompt-cache token | 待处理 | — |
| **中** | **Gemini frequency_penalty 被拒绝** — 文档列为支持，但 `gemini-2.5-flash` 调用时返回 400 错误 | 待处理 | — |
| **低** | **Bedrock converse-stream 空响应** — 无法识别的事件帧导致回复为空且计费为 $0 | 已修复 | [#44112](https://github.com/BerriAI/litellm/pull/44112) |

---

## 应用开发者需要关注的事项

1. **安全规范**：如使用 LiteLLM Docker 镜像，请将验证流程更新为使用新版 cosign 密钥。供应链事件虽已控制，但镜像验证现已成为必要步骤。

2. **预算管理**：如使用带 `max_budget` 的虚拟密钥，请注意空闲期间的重新准入边缘 case — 修复上线前请密切监控消费情况。

3. **MCP 工具**：Stdio MCP 工具发现问题影响 UI 显示；如依赖 stdio 类型 MCP 服务，请充分测试或暂时切换至 SSE/HTTP 传输方式。

4. **可观测性**：新版 PR 提升了调试能力 — MCP 会话失败现在会显示上游交换详情，Lens 可见带 ETA 的调查步骤耗时。

5. **流式可靠性**：流式中断后备功能 (#41127) 现已作为可选设置提供；如需保障 agent 响应韧性，请启用该功能。

---

*数据来源：GitHub BerriAI/litellm — 过去 24 小时内更新的 issue 与 PR。*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the Unsloth digest from English to Chinese (Simplified Chinese). I need to:

1. Translate all the content
2. Keep the Markdown structure exactly as-is
3. Keep all technical terms, URLs, issue numbers, version tags, etc. in their original form
4. Use natural technical Chinese register

Let me go through and translate this carefully while preserving the structure.</think>

# Unsloth 速报 — 2026-10-02

## 1. 今日焦点

Unsloth Desktop v0.1.902-beta 带来命令面板（Command Palette）实现更快的导航，支持分享运行设置，并提供更清晰的错误提示。该版本还将 Laya 决策速度提升了 4 倍，并扩展了托管 Decision API 的支持，同时在 LoRA 训练期间保持 NVFP4、INT4 和 MXFP4 检查点为 4-bit。与此同时，大量性能优化正在合并：Qwen-Image-2.1 的 int8 融合 GEMM 实现了 14-17% 的单步推理提升，1-D GGUF 归一化去量化问题也已修复。

---

## 2. 版本发布与破坏性变更

| 版本 | 变更 |
|------|------|
| **v0.1.902-beta** | 命令面板（Cmd+K）、可分享的运行设置、更清晰的错误提示、Laya 决策速度提升 4 倍、托管 Decision API 扩展、NVFP4/INT4/MXFP4 4-bit 检查点在 LoRA 训练期间保持 4-bit |

**迁移说明：** 本发布周期内未报告破坏性 API 变更。

---

## 3. 新模型与硬件支持

- **vLLM 与 SGLang 集成** — Studio 新增可选推理引擎，支持多 GPU 推理、量化和视觉模型（[#11491](https://github.com/unslothai/unsloth/pull/11491)）
- **Windows + WSL2 vLLM/SGLang** — 实验性支持在这些引擎在 Windows 私有 WSL2 发行版中运行（[#12024](https://github.com/unslothai/unsloth/pull/12024)）
- **MLX 路由专家融合** — 按需启用 Qwen 稀疏 MoE 和共享专家门控，适用于 Metal 后端（[#12422](https://github.com/unslothai/unsloth/pull/12422)）
- **torch 2.13** — 新的 Linux cu130 Python 3.13 安装现在附带 torch 2.13、flash-attn 2.8.4、causal-conv1d 1.7.0 和 mamba-ssm 2.3.2.post1（[#12150](https://github.com/unslothai/unsloth/pull/12150)）
- **Transformers 兼容版本上限提升** — 兼容矩阵扩展至支持 transformers 4.57.6 至 5.17.0（[#11016](https://github.com/unslothai/unsloth/pull/11016)）

---

## 4. 性能与优化

| 领域 | 变更 | 影响 |
|------|------|------|
| **Qwen-Image-2.1 Int8** | 融合 int8 GEMM 带去量化后处理，bf16 输出 | **L4/A100 单步快 14-17%**（[#12448](https://github.com/unslothai/unsloth/pull/12448)） |
| **Qwen-Image-2.1 卸载** | 5-bit 及以下 GGUF 选择缓存 int8 检查点 | 12/8 GB VRAM 下约 **2 倍加速**（[#12455](https://github.com/unslothai/unsloth/pull/12455)） |
| **LoRA 训练** | NVFP4/INT4/MXFP4 检查点保持 4-bit | 训练时内存占用降低 |
| **DiT 流式推理** | 块卸载重叠执行，停止冗余权重复制 | 隐藏扩散流式推理中的复制延迟（[#12389](https://github.com/unslothai/unsloth/pull/12389)） |
| **torch.compile** | RMSNorm、RoPE、输入嵌入钩子可追踪 | 消除解码器层中的图中断（[#12171](https://github.com/unslothai/unsloth/pull/12171)） |
| **融合 Triton NF4** | 位精确、流安全、torch.compile 可追踪的去量化/GEMV | 修复 4-bit 路径中的流式快照问题（[#12113](https://github.com/unslothai/unsloth/pull/12113)） |
| **块交换** | 从主机 RAM 流式传输冻结的 transformer 块 | 突破 VRAM 限制进行密集模型训练（[#11832](https://github.com/unslothai/unsloth/pull/11832)） |

**⚠️ 回归问题：** 自提交 b10715-mix-86bd2d3 以来，双 GPU 设置下的张量分割解码速度下降了 2.9 倍（48 t/s vs 之前的 115 t/s）— 见 [#12468](https://github.com/unslothai/unsloth/issues/12468)。

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | Qwen-Image-2.1 GGUF 生成失败 — 1-D 归一化权重在无转换路径上未去量化 | **已修复合并：** [#12449](https://github.com/unslothai/unsloth/pull/12449) |
| **高** | 设备端 GGUF 发现离线时阻塞 | **已修复合并：** [#12451](https://github.com/unslothai/unsloth/pull/12451) |
| **中** | 双 GPU（RTX 5070 Ti，Windows/WSL2）上张量分割解码速度下降 2.9 倍 | 待解决 — [#12468](https://github.com/unslothai/unsloth/issues/12468) |
| **中** | 工具调用随机失败（来自近期更新） | 待解决 — [#12435](https://github.com/unslothai/unsloth/issues/12435) |
| **中** | AMD QLoRA 训练在 Linux 上挂起/重置 RX 7900 XTX | 待解决 — [#11498](https://github.com/unslothai/unsloth/issues/11498) |
| **中** | OpenAI 兼容 API 每个请求增加约 1.2 秒延迟 | 待解决 — [#12364](https://github.com/unslothai/unsloth/issues/12364) |
| **低** | Xet 健康探测存根 Triton，破坏 diffusers/xformers | 待解决 — [#12466](https://github.com/unslothai/unsloth/issues/12466) |
| **低** | 日文 IME 回车键过早保存聊天标题 | 待解决 — [#12474](https://github.com/unslothai/unsloth/issues/12474) |

---

## 6. 这对应用开发者意味着什么

1. **多模型服务即将到来** — 按模型的 llama.cpp INI 配置正在开发中（[#10783](https://github.com/unslothai/unsloth/pull/10783)），vLLM/SGLang 现在可以与默认 llama.cpp 后端并行运行。如果您需要对每个模型进行自定义调优，这将解锁生产级部署。

2. **图像生成速度提升** — int8 GEMM 融合和缓存检查点加载为 Qwen-Image-2.1 带来了显著的吞吐量提升。如果您在 12-24GB 显卡上运行视觉工作负载，预期单步推理提升 14-17%，需要卸载时提升 2 倍。

3. **离线支持改善** — 设备端 GGUF 发现现在支持离线工作（[#12451](https://github.com/unslothai/unsloth/pull/12451)），解决了隔离部署的痛点。

4. **关注双 GPU 回归** — 如果您在多 GPU Windows/WSL2 设置上运行张量分割推理，近期版本中 2.9 倍的减速是一个已知问题。建议在修复发布前回退到构建 b10687-mix-67dfc8b 作为临时方案。

5. **采样标志现在按代理作用域** — `unsloth start` 上的 `--temperature` 和 `--reasoning` 标志现在仅适用于生成它们的代理，修复了后续客户端继承错误设置的 bug（[#12493](https://github.com/unslothai/unsloth/pull/12493)）。

---

*基于 GitHub 数据生成 — unslothai/unsloth（2026-10-02）*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*