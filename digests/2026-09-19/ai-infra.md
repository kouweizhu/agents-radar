# AI 基础设施日报 2026-09-19

> 生成时间: 2026-09-19 00:33 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the entire report to Simplified Chinese, following specific rules about preserving formatting and using natural technical Chinese. Let me translate it carefully.

I need to:
1. Output ONLY the translation, no preamble or explanation
2. Preserve all Markdown structure exactly
3. Keep all URLs, code, numbers, dates as-is
4. Keep project names, version tags, file paths in original form
5. Use natural technical Chinese register

Let me translate section by section:</think>

# AI 推理生态跨项目报告 — 2026-09-19

## 1. 生态概览

AI 推理栈持续分化，一方是云端优化服务引擎（vLLM、SGLang），另一方是本地运行时（llama.cpp、Ollama），LiteLLM 则作为互操作层桥接各服务提供商。当日活动聚焦三个方向：多模态模型支持（ViT CUDA 图、GLM-5.3-Flash）、内存受限优化（MoE 专家卸载、GPU 驻留 LRU 缓存）、以及后端多样化（Hexagon NPU、AMD RDNA1+2、Windows ARM64）。各项目量化路径（NVFP4、MXFP8、IQ3_S）的趋同表明，8 位以下推理正在各类硬件层级进入生产就绪状态。

---

## 2. 活动对比

| 项目 | Issue（跟踪中） | PR（活跃） | 发布（24h） | 发布节奏 |
|---------|------------------|---------------|---------------|------------------|
| **vLLM** | 134 | 500+ | 无 | 约每周 |
| **SGLang** | ~40 | ~100+ | v0.5.20 | 约双周 |
| **llama.cpp** | ~20 | 215 | b11035–b11046（10 个构建） | 每日/持续 |
| **Ollama** | 23 | ~80 | v0.1.811-beta | 约每月 |
| **LiteLLM** | ~25 | ~50 | v1.103.0-dev.2 | 约每周 dev |

**观察：**
- **llama.cpp** 发布速度领先（24 小时内 10 个构建），反映后端迭代频繁
- **vLLM** 和 **SGLang** PR 数量最多，表明功能开发力度大
- **Ollama** Issue 数量最少，定位更偏向终端用户导向

---

## 3. 模型支持竞赛

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM |
|--------------------|------|--------|-----------|--------|---------|
| **Qwen3.8-Flash-Next** | ✓（MTP 进行中） | — | ✓（MTP） | — | ✓ |
| **GLM-5.3-Flash** | ✓（JPEG 缺陷） | ✓ | — | — | ✓ |
| **MiniMax-M3** | — | ✓（MoE/fused MXFP8） | — | — | — |
| **Gemma4** | ✓（Turing 阻塞） | — | — | — | ✓ |
| **DeepSeek-V4** | ✓（SM90 稀疏 MLA） | — | — | ✓ | ✓ |
| **Kimi K3** | — | — | — | （咨询中） | — |
| **Bonsai（PrismML）** | — | — | ✓（导入缺陷） | — | — |
| **LongCat-Flash-Lite** | ✓（功能请求） | — | — | — | — |
| **Mistral Small 4** | — | — | — | ✓（请求） | — |
| **GitGot** | — | — | — | — | ✓（新增提供商） |

**领先者：**
- **SGLang** 在 MiniMax-M3 优化上占据主导，具备融合内核和 MoE 支持
- **llama.cpp** 在硬件覆盖广度（6+ 后端）和 GGUF 生态上领先
- **vLLM** 在生产服务功能（前缀缓存、分页注意力变体）上领先

---

## 4. 性能前沿

| 优化领域 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM |
|-------------------|------|--------|-----------|--------|---------|
| **KV 缓存量化** | NVFP4（SM90），Q8KV8 稀疏 MLA | — | IQ3_S MMQ（Vulkan） | — | — |
| **MoE 优化** | 渐进式专家卸载 | 融合 MXFP8 | GPU 驻留 LRU 缓存 | — | — |
| **多 Token 预测** | RFC 进行中 | — | Qwen MTP（共享模块） | — | — |
| **全量化 Flash Attention** | — | — | ✓（CUDA 默认） | — | — |
| **预填充/解码分离** | PD 内存传输 | — | — | — | — |
| **上下文并行** | 动态预填充 CP（RFC） | — | — | — | — |
| **批处理** | 纯预填充优化 | — | — | — | — |
| **多模态 CUDA 图** | ViT RFC | — | — | — | — |
| **计时精度** | — | — | — | — | ✓（Redis 延迟锚定） |

**投入重点：**
- **vLLM**：服务级优化（分离、上下文并行、分页 KV）
- **SGLang**：内核级 MoE/量化融合，针对特定模型
- **llama.cpp**：后端多样化和跨硬件量化
- **LiteLLM**：网关级延迟核算和多提供商一致性

---

## 5. 层级定位

| 层级 | 项目 | 描述 |
|-------|----------|-------------|
| **训练/微调** | **Unsloth**（主力） | GPU 加速 LoRA/GRPO 训练，Docker + 多用户 |
| **本地运行时** | **llama.cpp**、**Ollama** | 边缘部署，GGUF 驱动，易上手 |
| **服务引擎** | **vLLM**、**SGLang** | 生产级推理服务器，PagedAttention，高吞吐 |
| **网关/框架** | **LiteLLM** | 多提供商抽象，认证，限速，成本管理 |
| **混合** | **Ollama** | 桥接本地与云端；Docker，多用户，模型管理 |

**定位图：**

```
                    ┌─────────────────────────────────────────┐
                    │          LiteLLM（网关层）              │
                    │  多提供商、认证、限速                    │
                    └───────────────┬─────────────────────────┘
                                    │
        ┌───────────────────────────┼───────────────────────────┐
        │                           │                           │
        ▼                           ▼                           ▼
┌───────────────┐         ┌─────────────────┐         ┌─────────────────┐
│   vLLM       │         │    SGLang      │         │    Ollama       │
│ （生产服务）  │         │ （内核优化推理）│         │ （用户友好本地部署）
└───────────────┘         └─────────────────┘         └────────┬────────┘
                                                                 │
                                                        ┌────────▼────────┐
                                                        │   llama.cpp     │
                                                        │ （多后端运行时） │
                                                        └─────────────────┘
```

---

## 6. 趋势信号

### 基础设施工程师应关注的趋势

| 趋势 | 证据 | 影响 |
|-------|----------|-------------|
| **多模态进入生产** | vLLM ViT CUDA 图 RFC，GLM-5.3-Flash 覆盖 3 个项目 | 多模态推理将成为标配；优化视觉管道 |
| **MoE 内存优化收敛** | vLLM 专家卸载，llama.cpp GPU 驻留 LRU，SGLang 融合 MXFP8 | 大型 MoE 模型（Qwen3.8、DeepSeek）将在 80GB 以下 VRAM 运行 |
| **后端多样化加速** | llama.cpp Hexagon NPU、AMD RDNA2、Windows ARM64；Unsloth RDNA1+2 | 边缘/NPU 部署可行；测试目标硬件 |
| **量化路径成熟** | NVFP4 预 SM100（FlashInfer），IQ3_S MMQ，融合 MXFP8 | 8 位以下不再是实验性的；预期 2-4× 内存节省 |
| **网关安全加固** | LiteLLM cosign 镜像签名、MCP 白名单、JWT 作用域 | 生产网关需供应链验证 |
| **MCP 成为一等公民** | LiteLLM OAuth 作用域保留、客户端白名单、工具镜像 | MCP 代理将普及；基础设施需支持 |

### 代理/应用开发者应关注的事项

1. **工具调用回归**：DeepSeek V4 工具调用在 SGLang 和 Ollama 中均损坏——生产环境工具使用需等待修复
2. **思考控制标准化**：`/api/show` 现可暴露每模型思考层级—— Codex CLI 等可向用户暴露控制
3. **MCP 生产就绪**：LiteLLM MCP 白名单和作用域映射已落地——网关托管 MCP 可行
4. **本地与云端一致性**：Ollama Python/Rust 提示词渲染不匹配影响 token 计数——审计成本估算
5. **RTX 5090 不稳定**：llama.cpp CUDA 图挂起，SGLang 显示器丢失——避免作为主要推理 GPU
6. **vLLM 异步调度**：异步模式断言失败——重异步工作负载前验证稳定性

---

*数据来源：每日摘要 vLLM、SGLang、llama.cpp、Ollama、LiteLLM — 2026-09-19*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM Daily Digest from English to Chinese. I need to follow the rules:
- Output ONLY the translation. No preamble, no explanation, no markdown fences.
- Preserve the Markdown structure exactly
- Keep technical terms, project names, issue numbers, URLs as-is
- Use natural technical Chinese register

Let me translate section by section:

## 1. Today's Highlights

**Multi-modal deployments**: The upcoming ViT CUDA Graph support will significantly improve throughput for vision-language models. If you're serving Qwen3-VL or GLM-V in production, monitor the RFC (#38175) for upcoming optimization paths.

## 2. Releases & Breaking Changes

## 3. New Model & Hardware Support

## 4. Performance & Optimization

## 5. Stability & Regressions

## 6. What This Means for Application Developers

Let me translate each carefully, preserving all formatting.</think>

# vLLM 每日简报 — 2026-09-19

## 1. 今日要闻

vLLM 项目正在推进多模态推理能力，针对 ViT Full CUDA Graph 支持的新 RFC（#38175）对 Qwen3-VL、GLM-V 和 Kimi K2.5 模型的生产部署至关重要。同时，性能优化持续推进，包括增量式 MoE 专家卸载方案（#38256），可通过 CPU pinned memory 缓存实现在有限显存下运行大型 MoE 模型。稳定性方面，多个值得注意的问题正在跟踪，包括共享内存限制导致 Gemma4 无法在 Turing GPU 上运行（#38918）以及异步调度断言失败（#30142）。

---

## 2. 发布与重大变更

过去 24 小时内无新发布或重大变更。

---

## 3. 新模型与硬件支持

| 组件 | 详情 | PR/Issue |
|-----------|---------|----------|
| **GLM-5.3-Flash on SM120** | 在 RTX PRO 6000 Blackwell 上，无 rope-free MLA（`qk_rope_head_dim: 0`）的可用稀疏 MLA 路径 — 已识别三种失败模式 | #53963 |
| **Gemma4 on Turing GPUs** | 所有 attention 后端在 SM 7.5（如 T4、RTX 3090）上遇到共享内存限制 — 目前无法运行 | #38918 |
| **LongCat-Flash-Lite** | 特性请求：embedding 支持，应用 DeepSeek 风格技术处理 token embedding | #33528 |
| **ROCm: Qwen3-Next/3.5** | 为 AMD GPU 启用融合的 QK-norm+RoPE+gate Triton 内核 | #51406 |
| **Intel GPU: Qwen3.6-35B** | 多卡和 MTP 问题，混合 AutoRound 量化 | #53119 |

---

## 4. 性能与优化

| 优化项 | 描述 | 状态 |
|--------------|-------------|--------|
| **FusedMoE torch.compile** | 展开 FusedMoE custom op 以启用 torch.compile 优化，减少 CPU 开销 | #31985（特性请求） |
| **增量式 MoE 专家卸载** | 动态专家权重卸载，GPU 缓存，LRU 驱逐，跨层预测 — 显存较小的硬件也能运行超大模型 | #38256（RFC，PR #37190 已开放） |
| **DeepSeek-V4 SM90 稀疏 MLA** | 通过 FlashMLA 后端的原生 Q8KV8 稀疏 MLA prefill 路径 | #54592（进行中） |
| **Pre-SM100 NVFP4** | FlashInfer slot-mapping API，用于 Ampere/Hopper NVFP4 分页 KV 缓存 | #46963（进行中） |
| **DiffusionGemma Prefill 优化** | 为 prefill-only 批次提供模型状态的 logit 行 — 避免不必要的完整前向传播 | #57416（就绪） |
| **NIXL KV 指标** | KV 连接器传输指标的聚合语义文档 | #41230（需要文档） |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 详情 | 修复 PR |
|----------|-------|---------|---------| 
| **高** | **异步调度断言失败** | 异步调度中 `assert request.num_output_placeholders >= 0` 失败 — 在 v0.12.0、v0.11.2 上出现 | — |
| **高** | **GLM-5.3-Flash 解码退化** | W4A16 量化的 GLM-5.3-Flash 累积推理后长解码退化 | — |
| **高** | **睡眠模式 wake_up 崩溃** | DGX Spark（GB10）上 EngineCore 原生崩溃于 wake 时 — level 1 可用，wake 导致崩溃 | — |
| **中** | **Qwen3-VL-30B 重复** | 模型反复输出相同短语 — 在 v0.11.0 上可复现 | — |
| **中** | **Hybrid Mamba prefix-cache 恢复** | 使用显式 block-size 的 prefix-cache 恢复时内存越界 | — |
| **中** | **流式输入会话 bug** | 可恢复会话的四个 bug，影响视频流使用场景 | #53861 |
| **中** | **Hybrid GDN + MTP 前缀缓存** | MTP 投机解码下缺失缓存命中 | #52244 |
| **低** | **ROCm GLM-5.3 kpool indexer** | ROCm 上静默覆盖 KV 缓存 — 79% 的键错误 | — |
| **低** | **NIXL DCP MLA 缓存** | 多源 rank 的 MLA 缓存区域上 DCP pull 失败 | #57389 |

---

## 6. 这对应用开发者意味着什么

**多模态部署**：即将推出的 ViT CUDA Graph 支持将显著提升视觉语言模型的吞吐量。如果你在生产环境中服务 Qwen3-VL 或 GLM-V，请关注 RFC（#38175）以了解即将推出的优化路径。

**显存受限部署**：增量式 MoE 专家卸载功能（#38256）正在积极开发中，将允许在显存较小的 GPU 上运行大型 MoE 模型 — 这对小型集群的成本优化很有价值。

**硬件兼容性**：请注意，Gemma4 目前无法在 Turing GPU（T4、RTX 3090）上运行，因为共享内存限制。如果使用旧硬件，请考虑其他模型或等待修复。

**量化**：DeepSeek-V4 正在为 SM90（H100/H200）获得优化的稀疏 MLA 路径，而通过 FlashInfer（#46963）为 Pre-SM100 支持 NVFP4 扩展了 Ampere 用户的量化选项。

**Bug 变通方案**：如果使用流式输入会话或混合 GDN 配合 MTP 投机解码，修复 PR（#53861、#52244）解决了可能影响工作负载的正确性问题。

---

*来自 GitHub 数据 — vllm-project/vllm | 2026-09-19*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Daily Digest from English to Chinese. Let me translate this while:
1. Keeping all markdown structure exactly
2. Keeping URLs, issue numbers, version tags, etc. as-is
3. Using natural technical Chinese register
4. Preserving tables, headings, lists, etc.

Let me go through and translate:</think>

# SGLang 每日简报 — 2026-09-19

## 今日要闻

SGLang v0.5.20 正式发布，包含 713 个 PR 和 237 位贡献者，新增 GLM-5.3-Flash 作为主打模型。项目持续深耕 MiniMax-M3 优化工作，推进融合 FP8 量化与 MoE 内核，同时报告了多个影响 DeepSeek V4 工具调用和 Qwen3CoderDetector 的正确性 bug。CI 稳定性仍是重点关注方向，目前有 1 个broken 测试和 6 个 flaky 测试。

## 发布与重大变更

- **v0.5.20** — [Release](https://github.com/sgl-project/sglang/releases/tag/v0.5.20)：合并 713 个 PR，237 位贡献者。新增模型：GLM-5.3-Flash（自回归）。完整模型列表见 [cookbook](https://docs.sglang.io/cookbook)。

本发布窗口未标记重大 API 变更。

## 新模型与硬件支持

| 模型 | 类型 | 备注 |
|-------|------|-------|
| **GLM-5.3-Flash** | 自回归 | v0.5.20 新增 — 视觉版本存在已知 JPEG 解析 bug（#38821，H20 上触发） |

**ROCm/AMD**：MiniMax-M3 lightning-indexer K cache 现已在 ROCm 上以 FP8 分配（#36549）。Wave64 histogram-select decode top-k 已实现 MiniMax-M3 decode 路径（#36560）。

**Kimi-K3**：CUDA-only 快速路径现已正确保护非 CUDA 平台（#40267, #40269, #40270）。

## 性能优化

- **MiniMax-M3 MoE**：小批次排序融合 mxfp8 激活量化，在 decode 批次规模下减少约 7µs/层开销（#36559）
- **MiniMax-M3 Sparse Prefill**：Gluon paged-attention 集成，Triton 回退支持 lightning-index attention（#36546）
- **融合 FP8 量化**：逐 token FP8 量化融合入 add-RMSNorm，MoE all-reduce 折叠入下一层（#36575）
- **MXFP8 Dense Block Convert**：新增 dense-only 块转换路径，采用 `torch._scaled_mm` 1x32 和 BF16-FP8 GEMM 后端（#36574）
- **Prefill 交错**：新增调度器控制，支持 prefill 交错与 HRRN（#39717）
- **动态 Prefill CP**：动态 prefill 上下文并行特性请求（#37944）

## 稳定性与回归

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **High** | DeepSeek V4/V3.2 工具调用返回内容中不含 `tool_calls`，输出格式错误（#40236） | Open |
| **High** | Python 与 Rust OpenAI API 提示词渲染不一致：相同请求分别产生 177 vs 167 tokens（#39843） | Open |
| **Medium** | Qwen3CoderDetector：重复的 `<parameter=NAME>` 位于值中间时，会截断数组/对象参数（#39836） | Open |
| **Medium** | `/health` 处理器超时未取消调度器侧请求——孤立请求导致 paged-prefill 批处理崩溃（#35884） | Open |
| **Medium** | Qwen3.6-27B + AWQ 多轮提示词 + temperature 0 输出退化（#31720） | Closed |
| **Medium** | 乐观 prefill 跨阶段容量不足可能导致死锁（#31473） | Closed |
| **Low** | Prefill CUDA graph 预留约 1.8 GB，在小显存卡上挤压量化 KV 长上下文 prefill（#40094） | Open |
| **Low** | JSON schema 接受 `uniqueItems` 和 `multipleOf` 但未强制校验（#40083） | Open |

**CI 状态**（#17050）：1 broken，6 flaky，1051 recently fixed。追踪 issue 持续维护中。

## 应用开发者需知

1. **工具调用回归**：DeepSeek V4 工具调用当前输出格式异常 — 在 #40236 解决前，生产环境请避免使用 DeepSeek V4/V3.2 的工具调用功能。

2. **Python/Rust 一致性风险**：若您部署了混合 Python 和 Rust 的 SGLang 实例，提示词分词可能产生约 10 tokens 的偏差（#39843）。这会影响 token 计数和成本估算。

3. **健康检查负载**：#35884 中的 `/health` 端点 bug 可能在超时条件下导致请求堆积 — 在修复前建议使用外部健康监控。

4. **GLM-5.3-Flash 视觉模型**：视觉模型在 H100/H20 GPU 上存在 JPEG 解析问题（#38821）— 图像输入可能被错误识别。

5. **v0.5.20 升级建议**：通用场景可安全升级；新模型支持及常规优化，无重大变更。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate this llama.cpp digest from English to Chinese. I need to:

1. Translate all the text content
2. Keep all markdown structure (headings, tables, lists, etc.)
3. Keep URLs, issue/PR numbers, code snippets, file paths, version tags as-is
4. Use natural technical Chinese register
5. NOT add any preamble or explanation
6. NOT use markdown code fences around the output

Let me go through and translate while preserving the structure:

Key terms to translate appropriately:
- "digest" → 简报
- "releases" → 发布版本
- "breaking changes" → 破坏性变更
- "hardware support" → 硬件支持
- "performance" → 性能
- "stability" → 稳定性
- "regressions" → 回归问题

Technical terms like "flash attention", "quantization", "kernels", "backend" can be kept in English or used with Chinese equivalents depending on context.

Let me translate:</think>

# llama.cpp 简报 — 2026-09-19

## 1. 今日要闻

项目在后端多样化方面持续深耕，Hexagon（NPU）和 Vulkan/Metal 优化工作进展显著。GGML 核心进行了多项内存安全改进，解决了分配失败和图缓冲区预留问题。多个量化内核更新已发布，包括 OpenCL flash attention 和 Vulkan IQ3_S MMQ 支持。

## 2. 发布版本与破坏性变更

| 构建版本 | 描述 | 链接 |
|----------|------|------|
| **b11040** | GGML：添加分配失败检查，防止崩溃（[#28149](https://github.com/ggml-org/llama.cpp/pull/28149)） | [发布](https://github.com/ggml-org/llama.cpp/releases/tag/b11040) |
| **b11036** | GGML：处理图缓冲区预留失败（[#26070](https://github.com/ggml-org/llama.cpp/pull/26070)） | [发布](https://github.com/ggml-org/llama.cpp/releases/tag/b11036) |

未检测到破坏性 API 变更。这些都是增强稳健性的防御性修复。

## 3. 新模型与硬件支持

- **Hexagon HMX flash-attention**：现在支持非 64 倍数的 head_dim（如 SigLIP 的 head_dim=72），通过在 DK/DV 向上取整到 64 后用零填充尾部实现 —— 实现了 Qualcomm NPU 上的 SigLIP 等模型（[#26539](https://github.com/ggml-org/llama.cpp/pull/26539)，b11043）
- **Hexagon ROLL 算子**：为 Hexagon 后端添加 f32 ROLL 算子支持（[#29105](https://github.com/ggml-org/llama.cpp/pull/29105)，b11045）
- **Hexagon IM2COL**：扩展支持 1D 和带填充的 IM2COL 算子，改进 DMA 内核（[#29103](https://github.com/ggml-org/llama.cpp/pull/29103)，b11044）
- **Hexagon BF16↔F16 转换**：在 set_tensor/get_tensor 期间添加原地转换，便于 DSP 矩阵复用（[#29106](https://github.com/ggml-org/llama.cpp/pull/29106)）
- **Model-Saver SWA 模式**：新增 15 种架构支持滑动窗口模式往返序列化（[#29042](https://github.com/ggml-org/llama.cpp/pull/29042)，b11039）

## 4. 性能优化

| 领域 | 变更 | PR |
|------|------|-----|
| **OpenCL** | 添加 flash_attn_f32_f16_bin 二进制内核（[#29046](https://github.com/ggml-org/llama.cpp/pull/29046)，b11046） | 已合并 |
| **OpenCL** | 为 Q6_K 非 MoE 添加二进制内核（[#28678](https://github.com/ggml-org/llama.cpp/pull/28678)，b11042） | 已合并 |
| **Vulkan** | 添加 IQ3_S MMQ 矩阵乘法内核（[#28822](https://github.com/ggml-org/llama.cpp/pull/28822)，b11035） | 已合并 |
| **Vulkan** | 通过环境变量添加 VK_KHR_global_priority 支持（[#29109](https://github.com/ggml-org/llama.cpp/pull/29109)） | 进行中 |
| **Metal** | 小批次多列 mat-vec 内核（Q4_0/Q8_0，ne11=2..8）—— 降低每列开销（[#29110](https://github.com/ggml-org/llama.cpp/pull/29110)） | 开放 |
| **Metal** | 支持块宽度大于 512 的 FWHT 内核（[#29095](https://github.com/ggml-org/llama.cpp/pull/29095)） | 开放 |
| **Metal** | FWHT 内核支持 F16 输入（[#29094](https://github.com/ggml-org/llama.cpp/pull/29094)） | 可合并 |
| **CUDA** | 默认启用 `GGML_CUDA_FA_ALL_QUANTS` —— 对所有 KV 量化类型启用 flash attention，避免静默回退到慢速反量化路径（[#28634](https://github.com/ggml-org/llama.cpp/pull/28634)） | 已合并 |
| **SYCL** | IQ3 代码重排序 —— 在 Intel Arc Pro B70 上使用持久化重排序布局改进 IQ3_S/IQ3_XXS MMVQ 的 attention/decode 路径（[#29107](https://github.com/ggml-org/llama.cpp/pull/29107)） | 开放 |
| **MoE** | 主机卸载 MoE 专家权重的 GPU 驻留 LRU 缓存 —— 将最近使用的专家保留在 GPU 内存中而非从系统 RAM 流式传输（[#27861](https://github.com/ggml-org/llama.cpp/pull/27861)） | 开放 |
| **Qwen MTP** | Qwen3.8-Flash-Next MTP 支持，共享 MTP 模块（重用 embed_tokens）—— MTP 速度提升 1.3–2×（[#28243](https://github.com/ggml-org/llama.cpp/pull/28243)） | 开放 |

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 后端 | 状态 |
|----------|------|------|------|
| **高** | CUDA 图挂起 GPU 通道（RC watchdog + Xid 8），RTX 5090 笔记本 / sm_120 —— 临时解决方案：`GGML_CUDA_DISABLE_GRAPHS=1` | CUDA | 开放（[#27330](https://github.com/ggml-org/llama.cpp/issues/27330)） |
| **高** | Qwen3.8-27B Q6_K 导致 Linux 上 RTX 5090 显示器丢失和整芯片重置 | CUDA | 开放（[#27910](https://github.com/ggml-org/llama.cpp/issues/27910)） |
| **高** | SYCL `--split-mode tensor` 在双 Arc Pro B70 上 dev2memcpy 时崩溃（DEVICE_LOST） | SYCL | 开放（[#27198](https://github.com/ggml-org/llama.cpp/issues/27198)） |
| **中** | Linux 7.x 内核上 RADV（Strix Halo）出现 vk::DeviceLostError | Vulkan | 开放（[#25664](https://github.com/ggml-org/llama.cpp/issues/25664)） |
| **中** | 启用 ngram-mod 时 SYCL 极端 scratchpad 分配（2GB+） | SYCL | 开放（[#28860](https://github.com/ggml-org/llama.cpp/issues/28860)） |
| **中** | Metal 上 Qwen2.5-Omni 在系统负载下偶发音频损坏 | Metal | 开放（[#28441](https://github.com/ggml-org/llama.cpp/issues/28441)） |
| **中** | HIP/ROCm gfx1151（RDNA3）上超过 n_ubatch 的提示产生错误 logits | HIP/ROCm | 开放（[#28211](https://github.com/ggml-org/llama.cpp/issues/28211)） |
| **已修复** | CUDA 上 `--split-mode tensor` 导致 DFlash2 断言失败 | CUDA | PR 开放（[#27858](https://github.com/ggml-org/llama.cpp/pull/27858)） |
| **已修复** | CUB argsort 原地键导致 sm_50 损坏 | CUDA | PR 开放（[#28389](https://github.com/ggml-org/llama.cpp/pull/28389)） |

## 6. 应用开发者需知

- **内存安全加固**：分配失败检查（b11040）和图缓冲区预留处理（b11036）应能减少内存受限场景下的崩溃 —— 如果在紧张内存环境下运行，值得测试。
- **所有 KV 量化类型现在默认支持 flash attention**：在 CUDA 默认构建中使用 q4_1、q5_0、q5_1 等配合 flash attention 时，应能看到显著的预填充提速（RTX 3090 上报告约 34→1147 t/s）。
- **Hexagon/NPU 用户**：head_dim 填充修复支持 SigLIP 和类似视觉模型。多 NPU 异步后端工作正在进行中（[#26501](https://github.com/ggml-org/llama.cpp/pull/26501)）。
- **Vulkan AMD 用户**：新的 IQ3_S MMQ 内核和全局优先级支持应能提升 RDNA3/4 显卡的吞吐量。
- **MoE 模型用户**：主机卸载专家权重的 GPU 驻留 LRU 缓存在使用 `-ot ...exps=CPU` 或 `-ncmoe` 时可显著改善解码延迟。
- **关注项**：RTX 5090 存在多个稳定性问题报告 —— 如需部署该硬件，建议暂时使用 `GGML_CUDA_DISABLE_GRAPHS=1` 临时方案。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Simplified Chinese, following the specific rules provided. Let me translate this carefully while preserving the exact structure, URLs, code, numbers, and technical terms.

Let me go through it section by section:

1. Title: "Ollama Digest — 2026-09-19" → "Ollama 动态 — 2026-09-19"

2. Today's Highlights section - translate naturally while keeping technical terms

3. Releases & Breaking Changes

4. New Model & Hardware Support

5. Performance & Optimization

6. Stability & Regressions - this has a table which I need to preserve exactly

7. What This Means for Application Developers - numbered list

Let me do this translation:</think>

# Ollama 动态 — 2026-09-19

## 今日要点

v0.34.3 版本已发布，带来一个重要的 API 增强：`/api/show` 现在会暴露每个模型的思考控制参数和默认值，使得 Codex CLI 等客户端能够提供可配置的推理级别。与此同时，问题追踪器显示多个后端都在积极开发中——ROCm 状态泄漏、MLX 预填充卡死、Vulkan iGPU 检测问题占据主导，而多个 Qwen3 相关 bug（工具调用、模型错误）也引起了社区的广泛关注。

## 版本发布与破坏性变更

- **v0.34.3** 发布 — `GET /api/show` 现在为每个模型宣传思考控制项：  
  ```json
  {
    "thinking": {
      "values": ["low", "high", "max"],
      "default": "max"
    }
  }
  ```  
  [Release commit](https://github.com/ollama/ollama/releases/tag/v0.34.3)

- **PR #18533**（已合并）— 允许在允许列表中的主机之间进行跨主机注册表重定向，解决了 HuggingFace CDN 拉取时的间歇性失败问题。  
  [PR #18533](https://github.com/ollama/ollama/pull/18533)

## 新模型与硬件支持

- **Mistral Small 4** — 已提交功能请求，希望添加到 Ollama 模型库。  
  [Issue #15142](https://github.com/ollama/ollama/issues/15142)

- **Prism Ternary GGUFs** — 导入失败，显示不支持的张量大小溢出（PQ2_0 类型 142 / PTQ1_0 类型 143）。跟踪问题已开启。  
  [Issue #18521](https://github.com/ollama/ollama/issues/18521)

- **MLX 低比特量化** — 请求为 0.19 MLX 后端添加对 Bonsai 的 1 比特/2 比特量化权重的支持。  
  [Issue #18515](https://github.com/ollama/ollama/issues/18515)

- **Windows MSI 安装程序** — 正在进行中的 PR #14081 实现基于 MSI 的安装，包含独立的 GPU 后端包。  
  [PR #14081](https://github.com/ollama/ollama/pull/14081)

## 性能与优化

- **PR #17976** — 修复了 gemma4 sparse-MoE 专家库量化问题（之前由于 8 比特提升不匹配导致包体积膨胀）。  
  [PR #17976](https://github.com/ollama/ollama/pull/17976)

- **PR #18202** — 新的离线模型差异工具，用于比较本地 Ollama 模型、GGUF 和 safetensors。  
  [PR #18202](https://github.com/ollama/ollama/pull/18202)

- **PR #17480** — 基准测试现在使用 HumanEval 补丁提示而不是合成词列表，以获得更真实的投机解码评估。  
  [PR #17480](https://github.com/ollama/ollama/pull/17480)

## 稳定性与回归问题

| 严重程度 | 问题 | 详情 |
|----------|------|------|
| **高** | #17778 | Qwen 3.8 在 205k 上下文下使用工具时抛出"消息中未找到用户查询"（500 错误） |
| **高** | #18528 | ROCm：混合 GDN 模型（qwen3.6:35b-a3b、qwen3.8:27b）存在跨请求状态泄漏——早期提示会混入后续响应 |
| **高** | #18505 | MLX nvfp4：已接收请求在 processed=total-1 时卡死，零 token 输出；仅 SIGTERM 可恢复 |
| **中** | #18509 | Ollama 拒绝曾在 llama.cpp 中工作的工具角色；变通方法需要将其错误分类为 user/assistant |
| **中** | #18477 | Vulkan iGPU（Intel Lunar Lake）：大型预填充取消后 runner 卡死；后续请求挂起 |
| **中** | #18527 | deepseek-v4.1-flash 在宣传视觉能力的同时静默丢弃所有图像输入 |
| **中** | #18507 | Windows 11 托盘应用显示图标但永不启动服务器；手动 `ollama serve` 可正常工作 |
| **中** | #18531 | Intel Iris Xe iGPU 上的 Vulkan 在 qwen2.5:14b 上出现 ErrorOutOfDeviceMemory（0.33.3+，0.32.6 正常） |
| **低** | #18530 | qwen3-coder 工具调用在模型调用前进行推理时丢失（解析器错过隐式开头符） |

**正在修复中：**
- #18532（开放）— 解析器修复，以接受隐式 qwen3coder 工具开头符
- #18526（已关闭）— 修复从 HuggingFace 拉取模型时的重定向失败

## 这对应用开发者意味着什么

1. **思考配置** — 如果你构建推理级别控制（如低/高/最大思考），新的 `/api/show` 端点会暴露每个模型的默认值——使用它来避免硬编码。

2. **Qwen3 工具调用** — 如果在工具调用前使用 Qwen3-Coder 进行推理，注意工具调用可能会静默丢失（#18530）。跟踪 PR #18532 获取修复。

3. **ROCm 用户** — 在跨请求状态泄漏（#18528）解决之前，避免在 AMD GPU 上使用混合 GDN Qwen 模型——响应可能包含先前提示的污染。

4. **Intel iGPU 上的 Vulkan** — v0.32.6 是 Intel Iris Xe 的最后一个稳定版本；0.33.3+ 在此硬件上引入了 KV 缓存分配失败。

5. **Windows 部署** — 托盘应用 bug（#18507）影响 0.34.1 在 Windows 11 26200 上的表现；如果要部署，考虑回退到手动 `ollama serve` 或推迟升级。

6. **HF 模型拉取** — 根据 #18533，从 HuggingFace 拉取模型时间歇性的 502/重定向失败应在 v0.34.3 中得到解决。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the English LiteLLM digest into Chinese, following specific rules about how to handle various elements. Let me carefully translate while preserving the structure and keeping technical terms, URLs, issue numbers, etc. as-is.

Let me go through this:

1. Keep all headings, tables, lists, blockquotes exactly as structured
2. Keep URLs, code spans, numbers, dates as-is
3. Keep project names, repository slugs, version tags, file paths, API identifiers in original form
4. Translate naturally in Chinese technical register

Let me translate section by section:</think>

# LiteLLM 速报 — 2026-09-19

## 1. 今日要点

项目在安全加固和企业功能方面持续稳步推进。**Cosign 镜像签名**现已覆盖所有 Docker 发布版本，解决了供应链安全问题。多项 PR 围绕 MCP（Model Context Protocol）基础设施落地——包括客户端允许列表、OAuth 作用域保留和基于 JWT 作用域的访问授权——表明企业部署路径更加成熟。Databricks 集成现已正确传递 `service_tier` 参数至流式响应和成本计算，这对优先级流量计费至关重要。

## 2. 发布与重大变更

| 版本 | 备注 |
|------|------|
| **v1.103.0-dev.2** | 最新开发版 |

**安全更新**：所有 LiteLLM Docker 镜像现均已通过 [cosign](https://docs.sigstore.dev/cosign/overview/) 签名。每个版本均使用提交 `0112e53` 中的密钥进行签名。验证方式：
```bash
cosign verify --key https://docs.litellm.ai/docs/cosign/public-key.pem litellm/litellm:<tag>
```
（[GitHub 提交](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0)）

## 3. 新模型与硬件支持

| PR | 描述 |
|----|------|
| [#41902](https://github.com/BerriAI/litellm/pull/41902) | 回填分销商 Gemini 条目（2.5+ 标志）并清理注册表中已废弃的 ID |
| [#41842](https://github.com/BerriAI/litellm/pull/41842) | 同步 Azure 价格：5 个模型更新，5 个废弃（gpt-4.1-nano 退役期延长 6 个月） |
| [#41833](https://github.com/BerriAI/litellm/pull/41833) | 同步 OpenRouter 价格：15 个模型更新，2 个新增条目 |
| [#40810](https://github.com/BerriAI/litellm/pull/40810) | 新增 **GitGot**（`gitgot`）作为 JSON 配置的 OpenAI 兼容提供商 —— base URL `https://inference.gitgot.ai/v1` |

## 4. 性能与优化

| PR | 影响 |
|----|------|
| [#41891](https://github.com/BerriAI/litellm/pull/41891) | **计时修复**：响应时长和开销现以代理接收时间为锚点——修复了代理报告约 1ms 开销而客户端实际等待数秒的偏差；Redis 路由延迟现已正确反映在指标中 |
| [#41897](https://github.com/BerriAI/litellm/pull/41897) | Rust 客户端池（`litellm-http`）注入 OCR 路由——启用共享 HTTP 配置并遵循 `litellm.ssl_verify` 设置，而非进程级静态变量 |
| [#41837](https://github.com/BerriAI/litellm/pull/41837) | Databricks：`service_tier` 现已贯穿请求、流式响应和成本计算——确保优先级流量定价正确 |

## 5. 稳定性与回归问题

| Issue | 严重程度 | 状态 | 备注 |
|-------|----------|------|------|
| [#24677](https://github.com/BerriAI/litellm/issues/24677) | **高** | 已关闭 | 虚拟密钥的 TPM 限流不正确——v1.80.0 引入的回归，持续存在于 v1.82.3 |
| [#39713](https://github.com/BerriAI/litellm/issues/39713) | **高** | 进行中 | 每客户 RPM 限制在虚拟密钥缓存后停止应用——预算执行缺口 |
| [#30043](https://github.com/BerriAI/litellm/issues/30043) | **严重** | 已关闭 | Claude Code → vLLM 无稳定 LiteLLM 路径——`hosted_vllm`（流式响应损坏）和 `anthropic`（不稳定）两条路线均有问题 |
| [#20097](https://github.com/BerriAI/litellm/issues/20097) | **中** | 进行中 | Anthropic 模型响应中的字符被截断——responses API 中期望输出 "I'm happy" 但实际被切断 |
| [#41611](https://github.com/BerriAI/litellm/issues/41611) | **中** | 进行中 | 流式护栏：敏感值分散在两个 SSE 块中可能绕过逐块检查 |
| [#41810](https://github.com/BerriAI/litellm/issues/41810) | **中** | 进行中 | 虚拟密钥模型允许列表可通过 `/v1/chat/completions` 的 `?model=` 查询字符串绕过 |
| [#41765](https://github.com/BerriAI/litellm/issues/41765) | **低** | 进行中 | MCP 工具发现超时——对不支持 list_prompts/list_resources 的上游进行串行探测 |

## 6. 应用开发者需要关注的事项

- **使用验证后的镜像**：更新你的 Docker pull 脚本以验证 cosign 签名——这已成为生产 LiteLLM 部署的预期安全基线。

- **企业 MCP 更加可用**：MCP 客户端允许列表（#41667）、JWT 作用域映射（#41896）和 OAuth 作用域保留（#39805）的新增功能使 LiteLLM 作为受监管环境的 MCP 网关更加可行。

- **Databricks 用户**：如果你使用 `service_tier: priority`，#41837 的修复确保你的请求实际进入优先队列并按正确费率计费——请核实你的成本日志。

- **避开 Claude Code → vLLM 路径**：严重问题 #30043 仍部分未解决；如果你需要 vLLM 支持的 Claude 兼容性，请在生产部署前充分测试或考虑替代路由方案。

- **关注你的计时指标**：如果你之前发现代理报告的开销与实际客户端等待时间存在差异，#41891 应该会让这些数字趋于一致。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the Unsloth digest into Chinese. I need to:
1. Keep all the same structure - headings, tables, lists, etc.
2. Keep URLs, issue numbers, version numbers, code references as-is
3. Translate into natural technical Chinese
4. Output ONLY the translation without any preamble or explanation
5. No markdown code fences around the entire output

Let me translate this carefully:</think>

# Unsloth 速报 — 2026-09-19

## 今日要点

Unsloth 发布 **v0.1.811-beta**，新增 Docker 镜像支持多用户账户、RDNA1+2 AMD GPU 支持、FP8/INT8 扩散模型支持，以及 ARM64 CUDA Windows 支持。**Qwen3.8-Flash-Next MTP 修复带来 2 倍性能提升**。但同时出现了 **GGUF 推理吞吐回退** 问题（v0.1.810-beta），以及多个稳定性问题仍在处理中，包括 MTP 加载中止、GGML_ASSERT 崩溃和 Windows 安装失败。

---

## 版本更新与重大变更

| 版本 | 关键变更 |
|------|----------|
| **v0.1.811-beta** | Docker 镜像更新；支持多用户账户；RDNA1+2 AMD 支持；FP8/INT8 扩散模型支持；ARM64 CUDA Windows 支持；训练、GRPO 和推理优化；Qwen3.8-Flash-Next MTP 修复（2 倍加速） |

**迁移注意事项：**
- GGUF 推理用户：v0.1.810-beta 存在吞吐回退问题 — 如受影响，建议等待 v0.1.811-beta 或回滚至前一版本。
- Windows ARM64 用户：新 CUDA 支持需要 ARM64 Windows 11 或 WSL2。

---

## 新模型与硬件支持

- **AMD RDNA1+2 GPU**：现已支持训练和推理（通过新 Docker 镜像）
- **ARM64 CUDA Windows**：Windows on ARM64 现已支持 CUDA 工作负载
- **FP8/INT8 扩散模型**：量化扩散模型现已支持
- **Qwen3.8-Flash-Next**：MTP（多词元预测）修复已合并 — 推理速度翻倍
- **Kimi K3**：社区询问训练支持 — 架构看起来兼容，但尚未官方确认
- **Nixpkgs**：Unsloth Desktop 现可通过 Nix/NixOS 包管理器安装

---

## 性能与优化

| 领域 | 状态 | 详情 |
|------|------|------|
| Qwen3.8-Flash-Next MTP | **已发布** | v0.1.811-beta 中通过修复实现 2 倍加速 |
| GGUF 推理吞吐 | **回退中** | v0.1.810-beta 推理速度比前一版本慢 — [#11221](https://github.com/unslothai/unsloth/issues/11221) 待处理 |
| RTX 5090 + Qwen3.8-Flash-Next GGUF | **性能下降** | 200k ctx、KV Cache Q8、投机解码下出现严重性能下降 — [#11278](https://github.com/unslothai/unsloth/issues/11278) |

---

## 稳定性与回归问题

### 高优先级

1. **Qwen3.8-Flash-Next MTP 加载时中止** — [#11143](https://github.com/unslothai/unsloth/issues/11143) | 待处理 | 11 条评论
   - 重构后 `nextn.hc_head_norm` 维度不匹配；影响 `b10995-mix-3e83366`

2. **MTP 起草器 GGML_ASSERT 崩溃** — [#11219](https://github.com/unslothai/unsloth/issues/11219) | 待处理
   - RTX 5080 上 Qwen3.8-Flash-Next GGUF 构建图时出现 `ggml-can_repeat(b, a)` 断言失败

3. **GGUF 推理吞吐回退** — [#11221](https://github.com/unslothai/unsloth/issues/11221) | 待处理 | 5 👍
   - v0.1.810-beta 比前一版本慢 — Studio 回归问题

### 中优先级

4. **Bonsai 模型加载失败** — [#11259](https://github.com/unslothai/unsloth/issues/11259) | 待处理
   - Ternary/1bit PrismML Bonsai 模型完全无法加载

5. **DFlash + ROCm 张量分割断言失败** — [#11308](https://github.com/unslothai/unsloth/issues/11308) | 待处理
   - ROCm (gfx1201) 上 `ggml-backend-meta.cpp:543` 断言失败

6. **Windows 安装回滚因用户名空格失败** — [#11290](https://github.com/unslothai/unsloth/issues/11290) | 待处理
   - PowerShell 脚本无法找到 `HOMEPC~1` 路径

### 已修复（近期）

- **#11309**：修复测试隔离问题 — 一个测试的 app 设置不再泄露到另一个测试
- **#11272**：缓存文件系统错误不再清除本地模型清单
- **#11214**：现在可通过公共 Unsloth 副本训练门控上游模型

---

## 对应用开发者的意义

1. **推理工作负载**：生产环境中的 GGUF 服务建议暂缓使用 v0.1.810-beta — 吞吐回退影响显著。如需 MTP 加速，请等待 v0.1.811-beta 或手动应用修复。

2. **多用户部署**：Docker 镜像新增的多用户账户支持使 v0.1.811-beta 适合共享推理端点场景。

3. **Windows ARM64**：新增支持可在配备骁龙 X Elite / X Plus 的 Windows 笔记本上运行 Unsloth — 有利于边缘部署测试。

4. **Studio 工具调用**：PR [#11172](https://github.com/unslothai/unsloth/pull/11172) 修复了 Python 工具网络调用可绕过主机允许列表的安全漏洞 — 对多租户部署尤为重要。

5. **MCP 工具图像**：PR [#10088](https://github.com/unslothai/unsloth/pull/10088) 使模型能够看到 MCP 工具返回的图像 — 显著增强智能体工作流。

6. **API 并发控制**：PR [#5482](https://github.com/unslothai/unsloth/pull/5482) 新增 `--api-max-concurrency` 参数 — 公共端点建议启用以实现限流。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*