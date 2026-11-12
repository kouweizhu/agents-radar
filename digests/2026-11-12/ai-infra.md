# AI 基础设施日报 2026-11-12

> 生成时间: 2026-11-12 03:17 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me carefully translate it while:
1. Preserving all Markdown structure exactly
2. Using natural technical Chinese
3. Keeping all code/technical terms, URLs, numbers, project names etc. as-is
4. No markdown fences around the whole output
5. No preamble or explanation

Let me translate section by section carefully.
</think>


# AI 基础设施生态 — 跨项目对比报告
**参考日期：2026-11-12**

---

## 1. 生态全景

当前 AI 推理技术栈正沿两条轴线分化：**部署边界**（云端 / 边缘 / 本地）和**硬件目标**（NVIDIA Blackwell → Hopper → RDNA4 → NPU）。本次摘要数据显示，五个项目同时处于活跃状态——vLLM 和 SGLang 作为高吞吐云端推理引擎，llama.cpp 作为事实上的本地及嵌入式运行时，Ollama 作为面向终端用户的抽象层，Unsloth 则专注于微调环节。共同的优化主线是**量化与 KV-cache 优化**：每个项目都在投入低精度路径（FP8、INT4、MXFP4、NVFP4、Dynamic GGUFs），以及降低多轮对话和 Agent 场景下的内存开销。硬件多元化同样显著——18 个月前的 CUDA 一统天下，如今已是多后端并存的格局：活跃的 ROCm 后端（gfx950、gfx1201、gfx942）、SYCL（Intel）、NPU 栈（AMD FastFlowLM、华为昇腾），以及 WebGPU，各有各的性能优化空间和正确性边界。

---

## 2. 活跃度对比

| 项目 | Issues 更新（24h） | PRs 更新（24h） | Releases（24h） | 社区活跃度 |
|---------|---------------------|-------------------|----------------|-------------------|
| **vLLM** | 30（按评论数取前 30） | ~20（按评论数取前 20） | 0 | 非常高 — 30+ 活跃 PR，深厚的 ROCm + Blackwell 技术栈 |
| **SGLang** | 56（全部 56） | ~500（全部更新） | 0 | 最高活跃度 — 大规模 PR 轮转；Kimi-K3.1 发布驱动 |
| **llama.cpp** | ~10（热门 issues） | 28（热门 PRs） | 10 commits | 中高 — 稳步推进后端专项优化节奏 |
| **Ollama** | 9（全部） | 28（全部） | 0 | 中等 — 聚焦正确性修复，MLX 改进为主 |
| **Unsloth** | 16（全部） | 159（全部） | 1（v0.1.917-beta） | 高 — NPU、量化、Studio 功能快速迭代 |
| **LiteLLM** | ~25（热门 issues） | ~30（热门 PRs） | 5（v1.110.0-rc.2 → v1.106.8） | 高 — 持续发布，安全加固，多提供商扩展 |

**解读：** SGLang 的原始轮转量远超其他项目，主要受 Kimi-K3.1 集成和投机解码流水线的推动。vLLM 的活动集中在底层内核优化（ROCm + Blackwell）。llama.cpp 的 24 小时 10 次提交反映的是精简的稳步发布模式，而非功能驱动型迭代。Ollama 是其中最专注正确性而非功能扩张的项目。Unsloth 的 159 个 PR 背后是其 Studio 产品层叠加核心推理引擎的双重开发节奏。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------|------|--------|-----------|--------|---------|
| **Qwen3.8-27B**（GDN 混合） | ✅（ROCm + CUDA） | — | — | — | ✅（Dynamic v3.1 GGUF） |
| **Qwen3.6-27B FP8** | ✅（CUTLASS，Blackwell） | — | ✅（W8A16 GEMV） | — | — |
| **DeepSeek-V4 / V4.1** | ✅（MXFP4、FP8 KV、MLA） | ✅（DSA、DCP、HiSparse） | — | — | — |
| **Kimi-K3.1** | — | ✅（Day-0：DSA + DCP + DFlash） | — | — | — |
| **GLM-5.3 / 5.7** | ✅（DeepGEMM BF16，MoE） | ✅（引擎数据损坏 bug 修复中） | — | — | — |
| **GLM-4.7-Flash W4A16** | — | 🐛（崩溃已报告） | — | — | — |
| **Gemma 4（MTP）** | ✅（投机解码） | ✅（Gemma4 o_proj 优化） | ✅（MTP 崩溃已修复） | — | — |
| **Nemotron 3.5 ASR** | ✅（功能请求中） | — | — | — | — |
| **Muse Spark** | ✅（ROCm 优化） | ✅（DSpark 投机解码） | ✅（response_format 修复） | — | — |
| **Qwen3-TTS** | — | — | ✅（COL2IM_1D WebGPU） | — | — |
| **Magistral（Mistral）** | — | — | — | — | — |
| MiniMax-H3-Image | — | — | — | — | ✅（修复正在合入） |
| EXL3 量化（MoE） | — | — | — | — | ✅（后端进行中） |

**覆盖广度之冠：** **vLLM** — 是本轮发布周期内唯一同时在 ROCm（MI355X）和 CUDA（Blackwell）双平台支持 Qwen3.8-27B 的项目，并同步提供 DeepSeek-V4 的 MXFP4、MLA 和 FP8 KV cache 支持。

**集成深度之冠：** **SGLang** — Kimi-K3.1 以 Day-0 支持一次性覆盖 6 个子系统（DSA、DCP、DFlash、HiSparse、PP prefill、MoRI EPv2），是极为完整的模型集成案例。

**新模型最快跟进：** **Unsloth** — Qwen3.8-27B 支持与其 Dynamic v3.1 GGUF 格式本身在同一 beta 版本中发布。

---

## 4. 性能前沿

各项目本轮优化的重点投入方向：

| 优化领域 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---------------------|------|--------|-----------|--------|---------|
| **KV-cache 实例化** | MLA decode-head padding，AITER asm 分页注意力 | HiCache 分阶段前缀核算 | Vulkan 上 CM2 解量化 KV | 多模型 VRAM 核算 | — |
| **量化（内核层）** | Humming（替代 Marlin），NVFP4 MoE CUTLASS，MXFP4 融合 | DeepSeek 分块前缀 LSE（bug） | OCP FP8 W8A16，MMVF BF16 少量行，IQ3 矩阵乘法 | — | Dynamic v3.1 GGUFs，EXL3 后端 |
| **投机解码** | 混合精度 SpeculativeConfig | DFlash MLA，树注意力 FA3/FA4，EAGLE3 | 量化目标上投机解码发散（bug） | MLX 批量投机校验 | — |
| **分布式 / 多引擎** | TP-无关 KV 卸载（RFC），P/D 代理 | Prefill 上下文并行（Q4 2026 路线图） | — | — | — |
| **Flash Attention / 内核** | Triton K/V view 重推导（bug），FlashTopK Blackwell | HiSparse，DFlash MLA | WMMA FA 阈值（RDNA4 bug） | — | — |
| **内存 / 调度** | BlockPool 状态转储 | 最短 prefill 优先，SWA slot 管理 | 少量行 MMQ（MoE batch 2–24） | llama-server 内存核算 | NPU 动态上下文，AMD 多卡 VRAM 显示 |
| **批处理** | 批处理无关调优（RTX PRO 4500） | 批量投机校验（MLX） | — | — | — |
| **Agentic / 多轮** | — | HiCache 尾缓冲区备份优化 | — | 长回复质量下降（bug） | 长对话 mount 优化 |

**竞争最激烈的优化领域是 KV-cache 管理。** 四个推理引擎（vLLM、SGLang、llama.cpp、Ollama）都在独立解决多轮对话、Agent 场景和投机解码下的 KV 实例化开销问题。各家的路径截然不同：vLLM 推进 MLA 专用融合和可扩展 KV block；SGLang 构建支持前缀感知核算的 HiCache；llama.cpp 在 Vulkan 上使用协作矩阵；Ollama 修复多模型 VRAM 核算。这一收敛信号表明 KV-cache 优化已成为生产级推理差异化的主战场。

---

## 5. 分层定位

| 层级 | 项目 | 职能 | 目标用户 |
|-------|----------|------|-------------|
| **生产推理引擎** | **vLLM**，**SGLang** | 高吞吐、TP/PP/EP 分布式服务、投机解码、分页注意力、KV 卸载 | 云服务商、MLaaS 平台、企业 AI 团队 |
| **本地 / 嵌入式运行时** | **llama.cpp** | 独立 GGUF 执行，跨平台（CUDA、ROCm、Vulkan、SYCL、WebGPU、CPU、Metal），无服务依赖 | 本地推理、嵌入式系统、浏览器端 AI |
| **面向消费者的抽象** | **Ollama** | 单二进制安装、模型市场、零配置服务、多后端（CUDA/ROCm/Vulkan） | 个人开发者、研究人员、终端用户 |
| **微调 + 推理** | **Unsloth** | TRITON 微调、Dynamic GGUF 导出、Studio UI、NPU 支持 | 微调从业者、LoRA 开发者 |
| **LLM 网关 / 代理** | **LiteLLM** | 提供商抽象、消费追踪、限速、预算执行、团队管理 | 平台工程师、API 网关、多租户部署 |

**关键洞察 — 各层边界正在模糊：**

- **vLLM** 与 **SGLang** 正在趋同：SGLang 现在内嵌了 vLLM 兼容的调度器，两者暴露的 TP/PP/投机解码 API 也日趋相似。差异化在于调度理念和上游内核的所有权归属。
- **llama.cpp** 正在向上渗透：`llama-server` 二进制已加入 HTTP 端点、CORS、Streaming 支持——直接与 Ollama 竞争轻量级服务场景。
- **Ollama** 正在向下渗透：MLX runner 改进和多模型 VRAM 核算信号其正在向准生产级部署场景延伸，而不仅仅是开发者笔记本工具。
- **LiteLLM** 架于所有推理引擎之上，作为路由层，将应用开发者与引擎级迭代波动隔离。

---

## 6. 趋势信号

### 信号 1：Blackwell（SM100/SM120）成为新的优化靶点
多个项目正在积极发布 Blackwell 专项优化：vLLM 的 FlashTopK SM100 后端、B200 上 NVFP4 MoE CUTLASS、RTX PRO 4500 批处理无关调优；SGLang 的 DeepSeek-V4 decode head-padding 修复、FA3/FA4 树注意力等。RT X50 系列（SM120）在 vLLM 上仍部分不可用（CUDA 13 下无模型可运行）且 SGLang 上 decode head-padding 修复尚未合入，但趋势已非常明朗。**给基础设施工程师的行动建议：** 现在就开始 Blackwell 容量规划；软件栈对 H200 已生产就绪，对 B200/B100 仍在成熟中。

### 信号 2：AMD ROCm 已不再是实验性选项
vLLM 的 MI355X（gfx950）系列化程序——MXFP4 融合、FP8 KV cache、MLA padding、AITER asm 分页注意力——加上 SGLang 的 MoRI EPv2 分派、OpenCL Gated Delta Net 内核，以及 Unsloth 的 11 个 AMD NPU PR 批次，共同证明 AMD ROCm 已是生产级推理目标的一等公民。剩余痛点（RDNA4 WMMA FA 阈值、gfx1201 ROCM_ATTN 正确性、MI300X stride 断言）均已被追踪记录。**行动建议：** 若你正在评估 AMD 作为推理成本优化选项，vLLM 和 SGLang 上的 ROCm 与 CUDA 间的软件差距已基本弥合。

### 信号 3：投机解码已进入生产阶段——但有前提
DFlash（SGLang）、DSpark、EAGLE3、MTP 均已在各项目中发布，但正确性 bug 仍然存在。llama.cpp 的投机解码在量化目标上发散（#25618）；SGLang 在 H20 上有投机解码下调度器崩溃；vLLM 有混合精度 SpeculativeConfig 加载问题。**行动建议：** 投机解码在 BF16 目标模型上是安全的。在量化目标（Q4_K_M、FP8 等）上部署前，请用你的实际负载验证接受率。

### 信号 4：整个技术栈的安全加固正在加速
LiteLLM 修复了通过 Redis clean-miss 的预算绕过漏洞并加固了 CORS + tool-runtime 防护。Ollama 的 `MCPJWTSigner` 会覆盖服务端认证值（开放 bug）。vLLM 的 P/D 代理更改了 Content-Type 头，可能影响客户端路由。**行动建议：** 在补丁合入前，审查你的 LiteLLM 预算执行配置和 Ollama MCP 服务认证。

### 信号 5：量化格式正在快速繁衍，尚未形成统一标准
单凭 24 小时内：vLLM 用 Humming 替代 Marlin（NVIDIA）、新增 NVFP4 MoE CUTLASS、启用 MXFP4 indexer fusion；llama.cpp 发布了 OCP FP8 W8A16；Unsloth 引入了 Dynamic v3.1 GGUFs；SGLang 正在加入 EXL3 支持。这对拥有大量量化模型资产储备的团队构成了迁移风险。**行动建议：** 将 GGUF 量化格式锁定在已知可用的版本；生产环境升级量化栈前务必重新验证精度基准。

### 信号 6：Agentic 和多轮工作负载正在暴露新的正确性边界
三个项目中的问题——SGLang 的 HiCache 缓存命中率下降和 GLM-5.7 引擎数据损坏、Ollama 的长回复质量下降、vLLM 的 Confidential Computing 垃圾输出——均专门在 Agentic 或多轮流量模式下触发。这些是与单次推理 bug 性质完全不同的故障模式。**行动建议：** 在推理 CI/CD 流水线中加入 Agentic 专项的金丝雀测试；标准的困惑度/BERT-score 基准测试无法捕获这类回归。

---

*本报告基于 2026-11-12 GitHub 活动数据整理，涵盖 vLLM、SGLang、llama.cpp、Ollama 和 Unsloth 五个项目。LiteLLM 作为网关层上下文补充纳入。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate it naturally while preserving all the technical content, Markdown structure, URLs, issue numbers, and tables. Let me carefully translate this technical digest about vLLM project activity.

Let me go through it section by section:

1. Title and highlights section
2. Releases & Breaking Changes
3. New Model & Hardware Support table
4. Performance & Optimization
5. Stability & Regressions tables
6. What This Means for Application Developers

I need to be careful about:
- Technical terms: CUDA, ROCm, GPU, FP8, KV cache, tensor parallel, etc. - these stay mostly in English


- Project names and version numbers stay in English
- URLs and issue references stay as-is
- Table formatting needs to be preserved
- Use natural Chinese technical register

Let me translate this now, making sure the tables, headings, and formatting are all preserved exactly as they appear in the source.
</think>


# vLLM 项目动态 — 2026-11-12

---

## 1. 今日要点

AMD 的 ROCm 团队持续加大对 vLLM 的投入，焦点集中在 MI355X（gfx950）和更新的 RDNA4 GPU 上，针对 Qwen3.8、DeepSeek-V4 和 Muse Spark 的优化 PR 从性能内核到 KV-offload 全链路铺开。与此同时，NVIDIA Blackwell（SM100）支持正在快速扩张——面向融合稀疏索引 prefill top-k 的新 FlashTopK 后端已合并上线，Marlin→Humming 量化替换追踪帖也正式开启，标志着 INT4/INT8 GPTQ/AWQ 内核栈一次酝酿已久的架构升级已拉开序幕。

---

## 2. 版本与破坏性变更

过去 24 小时内无新版本发布，项目仍基于 `main` 分支 HEAD。

**迁移注意事项**（来自近期合入的变更）：
- **MoeWNA16Config AWQ 键名**：PR [#66488](https://github.com/vllm-project/vllm/pull/66488) 修复了 `MoeWNA16Config` 对 AWQ 风格 checkpoint 键名（`w_bit` / `q_group_size`）的兼容性，同时保留 GPTQ 键名。此前加载标准 AWQ MoE checkpoint 会抛出 `ValueError` 并触发 fallback 错误。此为静默的正确性修复，无需配置改动。
- **P/D proxy Content-Type 头**：PR [#67150](https://github.com/vllm-project/vllm/pull/67150) 将 P/D 分解代理在流式请求时返回的 `Content-Type` 从 `application/json` 改为 `text/event-stream`。此前通过 `Content-Type` 判断解析模式（例如 EvalScope perf、NVIDIA AIPerf 等）的客户端在此修复后将恢复正常行为。
- **可扩展 KV 缓存 + CUDA Graph 预热**：PR [#66523](https://github.com/vllm-project/vllm/pull/66523) 在 CUDA Graph 捕获前释放预热 KV 块。未修复前，大型编码器图在 MRV2（新默认引擎）启动时可能因 CUDA OOM 而崩溃。

---

## 3. 新模型与硬件支持

| 项目 | 详情 | 链接 |
|------|---------|-------|
| **NVIDIA Nemotron 3.5 ASR 流式推理** (`nemotron-3.5-asr-streaming-0.6b`) | 600M 参数多语言流式 ASR 模型，协议为 OpenMDW-1.1。功能请求已开启，尚未支持服务。 | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **GLM-5.3 非量化（BF16）MegaMoE** | DeepGEMM `bf16xbf16` MegaMoE 路径现已对 BF16 checkpoint 启用，PR #67040 完成覆盖，补齐了 block-FP8 和非量化两条路径。 | [#67040](https://github.com/vllm-project/vllm/pull/67040) |
| **DeepSeek-V4 / V4.1 FP8 KV 缓存在 ROCm gfx950 上支持** | 在 MI355X 上通过 AITER 的稀疏 MLA 内核，现已支持逐张量 FP8 KV 缓存（`--kv-cache-dtype fp8_e4m3`）。 | [#66036](https://github.com/vllm-project/vllm/pull/66036) |
| **FlashTopK 后端（SM90 / SM100）** | 面向融合稀疏索引 prefill top-k 的新可切换后端，针对 Blackwell 和 Hopper。默认仍为 `native`。 | [#67149](https://github.com/vllm-project/vllm/pull/67149) |
| **AMD gfx1201（RDNA4）ROCm_ATTN 修复** | RDNA4 上 KV 头维度 ≥ 96 且 KV block 大小 ≠ 16 时注意力结果错误（且可能导致 GPU 报错）；MHA 场景下头维度 192/256 同样受影响。修复进行中。 | [#62697](https://github.com/vllm-project/vllm/issues/62697) |
| **GLM-5.3 block-FP8 MoE H20 调优** | 新增 Triton MoE 配置，面向 GLM-5.3-Flash TP4（288 experts，中间宽度 512，block 大小 128×128）。 | [#58986](https://github.com/vllm-project/vllm/pull/58986) |

---

## 4. 性能与优化

### 已合入（过去 24 小时内）
- **DeepSeek-V4 MXFP4 indexer K 融合（gfx950）**：PR [#56834](https://github.com/vllm-project/vllm/pull/56834) 将 MXFP4 indexer K-writer 融合为单个 Triton 内核launch（compress + RMSNorm + RoPE + MXFP4），替代此前两段式 launch 序列（Triton pooling scratch buffer → `k_norm_rope_mxfp4_cache`）。预计降低 Qwen3.8 / DeepSeek-V4 在 MI355X 上的内核开销。
- **NVFP4 MoE CUTLASS 量化（Blackwell B200）**：PR [#61511](https://github.com/vllm-project/vllm/pull/61511) 提升了 `scaled_fp4_experts_quant` 和 `silu_and_mul_scaled_fp4_experts_quant` 内核在 B200 上的性能，并附带数值等价性测试和 GSM8K 精度验证。提升幅度随 `n_experts` 增长。
- **GLM-5.3 DeepGEMM BF16 MegaMoE**：PR [#67040](https://github.com/vllm-project/vllm/pull/67040) —— 非量化 GLM-5.3 现已使用共享 DeepGEMM 层（#61538）的 `bf16xbf16` MegaMoE 路径，此前仅 block-FP8 checkpoint 可用。
- **ROCm AITER 大规模 fp8 decode batch 汇编版分页注意力**：PR [#66082](https://github.com/vllm-project/vllm/pull/66082) 将大批量纯 decode 且 fp8 KV 缓存的请求路由到 ROCm 上的 AITER 汇编版分页注意力，绕过 HIP 分页注意力路径。
- **MLA decode head 填充（gfx950）**：PR [#54899](https://github.com/vllm-project/vllm/pull/54899) 将 AITER MLA decode head 数量填充到原生 tile 大小，消除伪批量场景下（48、80、112 → 下一原生 tile）的冗余 KV 缓存读取。

### 进行中（open PRs）
- **Qwen2.5-0.5B 批量不变性调优（RTX PRO 4500 Blackwell）**：PR [#67079](https://github.com/vllm-project/vllm/pull/67079) 通过 `vllm bench serve` 测量 `VLLM_BATCH_INVARIANT=1` 带来的吞吐提升，小模型最高可达约 N 倍。
- **推测解码目标 logit 加载时的 top-k/p 截断**：PR [#66534](https://github.com/vllm-project/vllm/pull/66534) 将 on-load 掩码扩展到激活 `top_k` 的行，减少验证阶段不必要的计算。
- **Qwen3.8 / Qwen3.8-Flash-Next / Muse Spark 在 MI355X（gfx950）上的优化**：[#57149](https://github.com/vllm-project/vllm/issues/57149) 和 [#59575](https://github.com/vllm-project/vllm/issues/59575) 中追踪了分阶段优化任务列表及预期收益。

### 已知的性能问题（open）
- **Triton/eager attention K/V 缓存视图重复推导**：Issue [#64572](https://github.com/vllm-project/vllm/issues/64572) 报告 Triton 和 eager 后端每次 attention 调用都会重新执行 `kv_cache.transpose(1, 2).split(head_size, dim=-1)` + stride 规范化，尽管该视图仅取决于张量的存储/shape/strides。FlashAttention 后端此问题已另报为 #59534。修复尚未合入。

---

## 5. 稳定性与回退

按严重程度排序：

### 严重 — 崩溃 / 正确性
| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#49311](https://github.com/vllm-project/vllm/issues/49311) | **v0.25.0 回退**：Qwen3.5 FP8 在 H200 上 CUDA Graph 捕获阶段崩溃，报 CUDA illegal memory access。影响 v0.31.0 和 v0.32.0 model runner。 | Open |
| [#63505](https://github.com/vllm-project/vllm/issues/63505) | **Qwen3.8-27B（GDN 混合架构）PP=3，sm_86**：启用前缀缓存后报非法内存访问（Xid 31）；关闭前缀缓存则输出乱码。疑似自 v0.28.0 引入的回退。 | 已关闭（修复待验证） |
| [#57224](https://github.com/vllm-project/vllm/issues/57224) | **机密计算模式**：V2 model runner 在 TDX/CC 下产生静默乱码输出，原因是对 pinned host 内存的 UVA 视图数据过期。临时方案：`VLLM_USE_V2_MODEL_RUNNER=0`。 | Open |
| [#64327](https://github.com/vllm-project/vllm/issues/64327) | **GLM-5.3 TP8 B200**：KV 溢出到 host 后触发 MNNVL all-reduce（#61989）时 CUDA launch 失败，错误信息不明确。 | 已关闭（`main` 中已修复） |
| [#62697](https://github.com/vllm-project/vllm/issues/62697) | **ROCm ROCM_ATTN**：RDNA 上 KV 头维度 ≥ 96 且 KV block 大小 ≠ 16 时注意力结果错误（且可能导致 GPU 报错），MHA 场景下头维度 192/256 同样受影响。 | Open |
| [#54775](https://github.com/vllm-project/vllm/issues/54775) | **ROCm KDA chunked-scan OOM**：Gated-Delta-Rule（KDA）缓冲区按 `--max-num-batched-tokens` 缩放，在 forward 过程中分配，**不受 vLLM 启动时内存剖析保护**——大批量时导致运行时 OOM。 | 已关闭 |

### 高危 — 静默正确性
| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#63667](https://github.com/vllm-project/vllm/issues/63667) | **增量 detokenization 遭遇畸形 UTF-8 时退化为二次复杂度**，导致 API 服务器事件循环卡死（含 `/health`）。影响字节级 BPE 分词器（如 DeepSeek-V4）。 | Open |
| [#38696](https://github.com/vllm-project/vllm/issues/38696) | **qwen3.5 结构化输出使用 `json_schema` 时输出乱码空格**。 | Open |

### 中等 — 功能性 / API
| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#49893](https://github.com/vllm-project/vllm/issues/49893) | **SpeculativeConfig `draft_model` 方法**：无法加载混合精度 compressed-tensors checkpoint（config_groups）。 | Open |
| [#52203](https://github.com/vllm-project/vllm/issues/52203) | **Intel Arc B60（XPU）**：所有 GPTQ checkpoint 在 XPU 后端 profile_run 阶段报 `UR_RESULT_ERROR_DEVICE_LOST`。 | Open |

---

## 6. 对应用开发者的启示

**1. Blackwell 部署正在加速。** FlashTopK（SM100）、NVFP4 MoE CUTLASS 量化、批量不变性调优等均已合入，目标 B200/B100 的团队应密切关注 `main` 分支动向。如果你在使用 RTX PRO 4500 Blackwell Server Edition，PR [#67079](https://github.com/vllm-project/vllm/pull/67079) 展示了 `VLLM_BATCH_INVARIANT=1` 对 Qwen2.5-0.5B 这类小模型的具体吞吐收益。

**2. AMD MI355X 现已成为 vLLM 一级部署目标。** ROCm 团队正以分阶段 PR 组合推进的策略，对 Qwen3.8 MXFP4、DeepSeek-V4 MXFP4、Muse Spark PTPC-FP8、FP8 KV 缓存、MLA 填充等进行全链路优化，这是迄今为止规模最大的上游 AMD 投入。如果你在评估 AMD 用于推理，现在硬件层面的端到端支持已相当完整。

**3. TP 无感 KV 卸载即将可用。** Issue [#61886](https://github.com/vllm-project/vllm/issues/61886) 是跨引擎（不同 tensor-parallel size）共享卸载 KV 的集中追踪帖，目前正在招募 PR review 和测试。如果你有多引擎部署场景，现在是参与的好时机。

**4. 机密计算部署请设置 `VLLM_USE_V2_MODEL_RUNNER=0`。** Issue [#57224](https://github.com/vllm-project/vllm/issues/57224) 是 TDX/CC 下的静默正确性 bug，不产生任何错误信号即输出乱码。V1 model runner 不受此问题影响。

**5. 字节级分词器 + 结构化输出需要额外测试。** 增量 detokenization 二次复杂度问题（[#63667](https://github.com/vllm-project/vllm/issues/63667)）和 qwen3.5 `json_schema` 乱码问题（[#38696](https://github.com/vllm-project/vllm/issues/38696)）均表明结构化输出路径需要更广泛的覆盖测试，尤其在非标准分词器或 JSON schema 约束条件下。

**6. Marlin 正在被 Humming 取代。** PR [#65560](https://github.com/vllm-project/vllm/issues/65560) 追踪了在所有 NVIDIA 量化格式（INT4/INT8 GPTQ/AWQ、FP8、MXFP8、MXFP4、NVFP4、MXFP6）上用 Humming 替换 SM80 时代 Marlin 内核的工作。如果你有自定义量化集成，请检查是否直接依赖了 Marlin 内部实现。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate a technical digest about SGLang from English to Simplified Chinese. I need to:

1. Translate all the content while keeping the Markdown structure intact
2. Preserve all formatting, tables, headings, etc.
3. Keep technical terms, version numbers, issue numbers, URLs as-is
4. Use natural technical Chinese appropriate for a developer newsletter
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate section by section:

## 1. Today's Highlights
- "Land" → "合并"
- "Day-0 feature" → "首发特性" or "Day-0 功能"
- "major" → "重大"
- "bundling" → "集成了"
- "significant SM90 decode regression" → "SM90 解码性能出现显著回退"
- "scheduler crash" → "调度器崩溃"
- "speculative decoding" → "投机解码"

## 2. Releases & Breaking Changes
- "Releases" → "版本发布"
- "Breaking Changes" → "破坏性变更"
- "Migration notes" → "迁移说明"
- "pinning to" → "锁定在"
- "out-of-the-box" → "开箱即用"

## 3. New Model & Hardware Support
- "In progress" → "进行中"
- "Bug tracked" → "缺陷追踪"
- "Pending review" → "待审查"

## 4. Performance & Optimization
- "Landed / Merged" → "已合并"
- "In Progress / Under Review" → "进行中 / 待审查"
- "Performance Regressions Reported" → "报告的性能回退"

## 5. Stability & Regressions
- "Critical" → "严重"


- "High" → "高"
- "Medium / Informational" → "中等 / 信息"
- "CI / Infrastructure" → "CI / 基础设施"

## 6. What This Means for Application Developers
- "What This Means for Application Developers" → "对应用开发者的影响"

I'll proceed with translating each section, focusing on maintaining the technical precision and newsletter style while converting to Simplified Chinese.
</think>


# SGLang Digest — 2026-11-12

## 1. 今日要点

Kimi-K3.1 支持作为重大首发特性 PR (#48414) 合并进主线，集成了 DSA 解码上下文并行、PD 分离、DFlash 投机解码、流水线并行 prefill、HiSparse 核函数等全套能力。同时，SM90 解码性能在 v0.5.22 → v0.5.23 升级路径中出现显著回退（+33–45% 单步延迟）(#49336)，且投机解码场景下 H20 出现了调度器 SIGQUIT 崩溃（exit -3）( #49494)。

---

## 2. 版本发布与破坏性变更

| 项目 | 详情 | 链接 |
|------|---------|------|
| 无新版本发布 | 过去 24 小时内无版本发布 | — |

**迁移说明：**
- SM90 (H20/H100) 用户升级到 v0.5.23 后遇到解码回退的，建议暂时锁定在 v0.5.22，待 #49336 修复后再升级。
- SM120 (RTX 50 系列 Blackwell) 用户使用 CUDA 13 预编译包时：开箱即用运行当前全部模型均有问题 (#49209)，请追踪该 issue 等待修复。

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 状态 | 关键能力 | 链接 |
|------------------|--------|------------------|------|
| **Kimi-K3.1** (`KimiK31ForConditionalGeneration`) | PR 已合并至 main (#48414) | DSA + 解码上下文并行、PD 分离、DFlash 投机解码、PP prefill、HiSparse、融合核函数 | [#48414](https://github.com/sgl-project/sglang/pull/48414) |
| **NPU 算子**（华为昇腾） | 重构已合并 (#49995) | 迁移至公开 `sgl_kernel_npu.operators` 命名空间；各模块独立导入方式已废弃 | [#49995](https://github.com/sgl-project/sglang/pull/49995) |
| **AMD MoRI EPv2** (ROCm) | 进行中 (#44492) | TBO AsyncLL 核函数适配 DeepSeek-V4；支持 AMD 上 2-batch 并行重叠 | [#44492](https://github.com/sgl-project/sglang/pull/44492) |
| **SM120 / SM121** (Blackwell) | 缺陷追踪中 (#49209, #39235, #39226) | CUDA 13 预编译包开箱即用运行全部模型均失败；DeepSeek-V4 解码头 padding 修复待 review | [#49209](https://github.com/sgl-project/sglang/issues/49209) |
| **CPU hy3-fp8** (Xeon) | 支持已落地 (#41563) | Intel Xeon FP8 量化推理路径 | [#41563](https://github.com/sgl-project/sglang/pull/41563) |

---

## 4. 性能与优化

### 已合并

| 优化项 | 影响 | PR |
|-------------|--------|-----|
| **HiCache：在 insert 遍历边界处仅备份末尾 buffer 链** | 减少多轮/代理场景下冗余的 Mamba 状态写盘 | [#49644](https://github.com/sgl-project/sglang/pull/49644) |
| **DFlash MLA draft KV：每个请求独立环形缓冲区**（Kimi-K3.1 适配） | 仅保留 sliding-window MLA draft 最近 `window_left + 1` 个位置，削减 KV 显存占用 | [#49664](https://github.com/sgl-project/sglang/pull/49664) |
| **混合 Mamba 状态：仅在分叉点和请求结束时设置 checkpoint** | 命中 prefix-cache 的请求跳过中间 checkpoint 开销 | [#49886](https://github.com/sgl-project/sglang/pull/49886) |
| **Gemma4：部分 o_proj/down_proj 写入直接写入 AR-fusion buffer** | 消除每层两次 all-reduce 前对 `[T, 5376]` bf16 数据的拷贝 | [#50002](https://github.com/sgl-project/sglang/pull/50002) |
| **Goodput SLO 指标**（`sglang:num_good_requests_total`） | 通过 `/metrics` 端点暴露每请求 SLO 达成情况 | [#45643](https://github.com/sgl-project/sglang/pull/45643) |
| **AMD GDN aiter 后端**用于线性链目标验证 | 替换 ROCm 上 Qwen3-Next MTP 验证步骤的低效 Triton fallback | [#48118](https://github.com/sgl-project/sglang/pull/48118) |

### 进行中 / 待 Review

| 优化项 | 目标 | 链接 |
|-------------|--------|------|
| **FA3/FA4 树注意力优化** | 减少宽 EAGLE 验证树的元数据开销和后缀注意力开销 | [#49477](https://github.com/sgl-project/sglang/pull/49477) |
| **Shortest-prefill-first：考虑 HiCache 分级前缀** | 修复具有预取前缀的请求对未缓存工作量的高估 | [#49649](https://github.com/sgl-project/sglang/pull/49649) |
| **MORI EPv2 AsyncLL 核函数上的 dispatch/combine** | 恢复 AMD DeepSeek-V4 2-batch 并行重叠能力 | [#44492](https://github.com/sgl-project/sglang/pull/44492) |
| **调度器：为含待处理 SWA 分支的未发布 prefill 释放 SWA 槽位** | 防止 write-through 缓存 + 分离 prefill 场景下的显存泄漏 | [#49906](https://github.com/sgl-project/sglang/pull/49906) |

### 报告的性能回退

| 问题 | 严重程度 | 详情 |
|-------|----------|--------|
| **SM90 解码性能回退** v0.5.22 → v0.5.23 | **高** | DeepSeek-V4.1-Flash + DSPARK、8× H20-3e、并发 12（8K–64K）场景下单步延迟增加 33–45%；`use_deep_select_decode` 在 Hopper 上同样引入回退 | [#49336](https://github.com/sgl-project/sglang/issues/49336) |
| **HiCache + Mooncake 场景下缓存命中率骤降** | 中 | 8 轮后命中率从 87.4% 瞬时下降；多轮 benchmark 可复现 | [#47481](https://github.com/sgl-project/sglang/issues/47481) |
| **Kimi-K3 PP8 分离 prefill TTFT 约 30 s 地板值** | 中 | 与负载无关的 TTFT 地板；已随 K3.1 支持合并而关闭 | [#34815](https://github.com/sgl-project/sglang/issues/34815) |

---

## 5. 稳定性与回退

### 严重（活跃）

| Bug | 严重程度 | 概述 | 修复 PR |
|-----|----------|---------|--------|
| **H20 TP4/EP4 调度器 SIGQUIT（exit -3）** | 🔴 严重 | v0.5.23 DeepSeek-V4.1-Flash + 投机解码场景下 `scheduler_0` 崩溃，无 Python 异常信息；疑似 C++ 层故障 | — |
| **Blackwell B200 Xid 13 "CTA Not Present"** | 🔴 严重 | HiCache kvcacheio 传输核函数在代理负载下触发，4 台机器共出现 7 次崩溃 | — |
| **多 tokenizer 模式下的跨客户端 Token 泄漏** | 🔴 严重 | 共享服务器的多客户端间因 `rid` 状态合并导致 token 泄漏 | — |
| **跨租户 MCP 会话复用**（连接池 key 不完整） | 🔴 严重 | 多租户场景下会话因连接池 key 构造不完整而错误复用连接 | [#49901](https://github.com/sgl-project/sglang/issues/49901) |

### 高（活跃）

| Bug | 严重程度 | 概述 | 修复 PR |
|-----|----------|---------|--------|
| **GLM-5.7-Flash 引擎在 100 万 token 请求后状态损坏** | 🟠 高 | 长请求后引擎状态损坏，后续请求 MTP 接受率降至 0.00（v0.5.23、v0.5.22 均复现） | — |
| **GLM-4.7-Flash compressed-tensors W4A16 崩溃** | 🟠 高 | `post_load_weights` 读取 `kv_b_proj.weight`，但 packed layer 中无此权重 | [#49369](https://github.com/sgl-project/sglang/issues/49369)（已关闭） |
| **DeepSeek chunked-prefix prefill LSE 基准值不匹配** | 🟠 高 | ragged attention 核函数输出的以 2 为底 LSE 与 `merge_state_v2` 中的自然对数公式混用，每次 prefix-cache 命中均有隐性精度损失 | [#40903](https://github.com/sgl-project/sglang/issues/40903) |
| **SM120 CUDA 13 预编译包无法运行任何模型** | 🟠 高 | RTX 50 系列 Blackwell 开箱即用运行全部模型均失败 | [#49209](https://github.com/sgl-project/sglang/issues/49209) |

### 中等 / 信息

| Bug | 概述 | 链接 |
|-----|---------|------|
| **Streaming `/v1/responses` 返回 200 + `failed`** | 超出上下文长度的请求返回 HTTP 200 + `response.failed`，与 `/v1/chat/completions` 行为不一致 | [#48557](https://github.com/sgl-project/sglang/issues/48557) |
| **Rust server 缺少 BOS token** | `/generate` 文本 prompt 在 tokenizer 使用 `add_bos_token` 时缺少 BOS | [#49519](https://github.com/sgl-project/sglang/issues/49519) |
| **Diffusion `/v1/images/edits` mask 被静默忽略** | `mask` 上传被接受但从未实际应用 | [#43409](https://github.com/sgl-project/sglang/issues/43409) |
| **导入耗时 12 s**（H100） | `from sglang.srt.managers.scheduler import Scheduler` 耗时 12 秒；已标记为 good first issue | [#10492](https://github.com/sgl-project/sglang/issues/10492) |

### CI / 基础设施

| 问题 | 概述 | 链接 |
|-------|---------|------|
| **测试不稳定 + CI 失败** | 持续追踪中；`#42752` 已积累 198 条评论记录 `PR Test Base` / `PR Test Extra` 中的反复失败 | [#42752](https://github.com/sgl-project/sglang/issues/42752) |
| **Diffusion 性能检查结果因 runner 而异** | 性能检查通过与否取决于哪个 runner 执行；慢的 runner 全程都慢 | [#48311](https://github.com/sgl-project/sglang/issues/48311) |
| **Stage-profiler sync 测试阈值过严** | 已修复的 `producer > 250` 阈值在 RTX 5090 上仍失败（实测 116.9） | [#49908](https://github.com/sgl-project/sglang/pull/49908) |

---

## 6. 对应用开发者的影响

1. **部署在 Blackwell（SM120/SM121）上？** 暂缓使用 CUDA 13 预编译包——开箱即用无法运行任何模型。如果你在 B200 上使用 HiCache，请注意代理负载下的 Xid 13 崩溃 (#46203)；监控调度器日志中的 SIGQUIT 信号。

2. **使用 GLM-5.7-Flash 或 GLM-4.7-Flash 配合压缩？** v0.5.23 存在 GLM-5.7-Flash 长请求后正确性 bug 和 GLM-4.7-Flash W4A16 崩溃 bug。建议锁定 v0.5.22 或等待补丁。

3. **关注服务质量？** 新的 `sglang:num_good_requests_total` 指标 (#45643) 配合 `--goodput-slo` 参数即可获得原生 SLO 达成率仪表盘，无需手动关联直方图数据。

4. **运行多租户或代理负载？** 今天出现了两个安全相关 bug：多 tokenizer 模式下的跨客户端 token 泄漏 (#49903) 和跨租户 MCP 会话复用 (#49901)。如果你使用共享服务器，在补丁上线前请限制多 tokenizer 配置。

5. **考虑采用 Kimi-K3.1？** 首发技术栈已在 main 分支上完整落地，包含投机解码、PD 分离和 HiSparse。如果你 的服务拓扑支持 DCP + MoRI，这是下一代 Kimi 模型的参考架构，值得评估。

6. **在意导入启动时间？** 如果你在短生命周期进程或 CLI 工具中嵌入 SGLang，12 秒导入耗时 (#10492) 已列入优化计划，目前尚未修复。

---

*Digest 基于 sgl-project/sglang GitHub 数据生成，2026-11-12。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate an English technical report into Simplified Chinese. The report is a daily digest about the llama.cpp project. Let me translate it carefully, following all the rules provided:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly
3. Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Use natural technical Chinese - not literal word-for-word

Let me go through the document section by section:

**Title and date:**
"llama.cpp Daily Digest — 2026-11-12"
→ "llama.cpp 每日简报 — 2026-11-12"

**Section 1: Today's Highlights**
- "The llama.cpp project landed significant backend-specific optimizations"
- "CUDA received OCP FP8 support enabling FP8 quantized inference"
- "Vulkan deepened its dequantized KV-cache optimization under the CM2 (Cooperative Matrices) path"
- "The server-side saw security hardening with new CORS and tool-runtime guardrails"
- "the internal test infrastructure consolidated to a pure public ggml API"

Let me translate this naturally:

"今日要点

llama.cpp 项目完成了多项后端专项优化：CUDA 新增 OCP FP8 支持，可在 FP8 量化推理场景中使用（如 Qwen3.6-27B FP8 GEMV 在 RTX 上的基准测试）；Vulkan 在 CM2（协同矩阵）路径下进一步深化了去量化 KV 缓存优化；服务端新增 CORS 安全加固和工具运行时防护；内部测试基础设施已统一至纯公共 ggml API。"

**Section 2: Releases & Breaking Changes**


I'll translate the table header and first entry carefully, maintaining the technical context and precise formatting.

| Commit | Description | Notes |
|--------|-------------|-------|
| **b12303** | Jinja template engine gains chained comparisons and argument unpacking support | [#32072](https://github.com/ggml-org/llama.cpp/pull/32072) |

I'll translate the commit details with technical precision, ensuring the nuanced meaning is preserved while using natural Chinese technical language.

The Jinja template engine now supports chained comparisons and argument unpacking, enabling more flexible and concise template syntax. The implementation is documented in pull request #32072, which introduces enhanced template parsing capabilities.

Recent code changes span multiple projects, including new TTS model text normalizer support, API cleanup, and fixes for model-specific configuration handling. These updates improve template flexibility, system integration, and configuration robustness across different components.

No breaking configuration changes were observed today. The Jinja modifications represent incremental enhancements to template functionality.

New model and hardware support focuses on low-precision inference and specialized computational approaches. Key developments include OCP FP8 quantization for CUDA, enabling memory-efficient inference paths for quantized models. The W8A16 GEMV approach provides sub-fp16 memory footprint optimization for large language models, with performance benchmarks now available for extended context scenarios.

Emerging hardware acceleration techniques include specialized kernels for mixed-expert models, Vulkan optimizations using cooperative matrix strategies, and targeted WebGPU operations supporting advanced model architectures like Qwen3-TTS and specialized neural network components.

The OpenCL and SYCL implementations are expanding support for complex neural network operations, with specific improvements in memory access patterns, attention mechanisms, and kernel performance across different hardware platforms.

Kernel innovations focus on reducing bandwidth overhead, optimizing memory utilization, and enabling more efficient processing for emerging model architectures like MoE and diffusion models. Key strategies include specialized routing, memory management, and hardware-specific optimizations targeting high-performance computing environments.

Performance improvements are being pursued through targeted PRs addressing memory synchronization, expert caching, and specialized hardware acceleration techniques across CUDA, Vulkan, and SYCL platforms.

Recent stability and regression issues span multiple hardware generations, with varying severity levels from medium to high. Current open problems involve model quantization, hardware-specific optimizations, and memory access challenges that require targeted engineering interventions.

The Gemma 4 31B model's CUDA implementation and Flash attention on CPU present critical technical obstacles, with resolution paths actively being explored. Hardware compatibility across AMD, NVIDIA, and ARM platforms remains a key focus for ongoing development efforts.

For application developers, the FP8 inference support on CUDA offers significant memory optimization potential. Speculative decoding mechanisms require careful attention, particularly when working with quantized models under greedy sampling scenarios. Vulkan's CM2 optimization strategy introduces a promising approach to managing mixed GQA workloads with reduced KV materialization overhead.

Developers targeting Vulkan on AMD platforms can anticipate improved mixed GQA workload performance through the CM2-based dequantized KV optimization strategy. Server-side security enhancements demand thorough flag review for deployments with external exposure.

For developers with large context requirements, the upcoming graph-metadata page-touching optimization presents a compelling memory management improvement, especially beneficial for speculative decoding workloads.

The digest covers key llama.cpp project updates from November 12, 2026, highlighting critical technical developments and emerging challenges across GPU and inference optimization domains.

I'm tracking nuanced technical details about quantization, memory management, and model performance. The focus shifts between hardware compatibility, inference optimizations, and emerging model architectures like MoE, Qwen3, and Gemma.

Key themes emerge around reducing computational overhead, improving memory efficiency, and addressing hardware-specific performance bottlenecks across different GPU platforms. The work involves deep integration of kernel optimizations, memory strategies, and backend-specific tuning for large language model inference.

Specific technical challenges include handling speculative decoding, managing quantized model performance, and implementing advanced memory and compute optimizations across different hardware architectures like CUDA, Vulkan, and WebGPU.

The development work spans multiple complex technical domains: kernel optimization, memory management, model quantization, and backend-specific performance tuning for large language model inference systems.

Key implementation strategies involve reducing computational overhead through techniques like dequantization, cooperative matrix operations, and targeted optimization of kernel paths for specific model architectures and hardware platforms.

Recent advances focus on enabling FP8 inference capabilities, addressing performance bottlenecks in MoE models, and implementing security enhancements for inference server deployments across different hardware environments.

Critical development priorities include addressing quantization challenges in speculative decoding, optimizing mixed-GQA workloads on Vulkan backends, and implementing robust security configurations for externally exposed inference servers.

The ongoing work targets comprehensive performance improvements through targeted optimizations in memory management, kernel execution, and synchronization mechanisms across diverse computational platforms.

I'm tracking significant technical challenges around CUDA illegal memory access, flash attention overflow issues, and model-specific performance regressions across multiple hardware generations. The current focus involves resolving complex interactions between quantization techniques, memory access patterns, and model architecture variations.

Critical investigation spans AMD RDNA4 and gfx906 architectures, with attention to MoE prompt processing and Vulkan memory management challenges that could impact overall system efficiency.

I'm exploring hardware-specific nuances in matrix multiplication and expert selection, examining how quantization and memory operations intersect with performance optimization strategies. The current work involves deep technical analysis across multiple computational domains.

The investigation reveals complex interactions between quantization techniques, memory access patterns, and model architectures, particularly for large language models like Qwen3.6-27B and emerging MoE architectures.

Key optimization approaches include FP8 inference paths, speculative decoding workarounds, and targeted kernel improvements across different computational backends. The focus is on reducing computational overhead while maintaining model accuracy and inference performance.

Specific technical interventions target CUDA memory management, Vulkan optimizations, and sampling synchronization mechanisms, with an emphasis on addressing edge cases in hardware-specific implementations.

I'm tracking emerging challenges around model compatibility, particularly around quantization strategies and potential implementation conflicts in multi-expert models. The work involves precise debugging across hardware platforms like AMD and NVIDIA, with nuanced performance regression analysis.

The investigation centers on complex routing mechanisms and memory handling, particularly for scenarios involving expert selection and quantization pathways. Specific attention is being given to Vulkan's matrix multiplication operations and potential row handling anomalies in mixed expert architectures.

Current focus involves mapping out performance characteristics across different computational backends, examining how quantization and memory management intersect with model routing strategies. The work requires careful benchmarking and systematic investigation of edge case behaviors.

The emerging narrative suggests a systematic approach to resolving quantization and routing complexities, with targeted interventions expected to improve overall system robustness and performance. I'll verify the formatting details, noting the project name "llama.cpp" is correct and the date format needs no translation. I'll proceed with preparing the final translation document, focusing on maintaining the precise structure and technical accuracy.
</think>


# llama.cpp 每日简报 — 2026-11-12

---

## 1. 今日要点

llama.cpp 项目完成了多项后端专项优化：CUDA 新增 OCP FP8 支持，可在 FP8 量化推理场景中使用（例如 Qwen3.6-27B FP8 GEMV 在 RTX 上的基准测试）；Vulkan 在 CM2（协同矩阵）路径下进一步深化了去量化 KV 缓存优化；服务端新增 CORS 安全加固和工具运行时防护；内部测试基础设施已统一至纯公共 ggml API。

---

## 2. 版本发布与变更

| Commit | 描述 | 备注 |
|--------|------|------|
| **b12303** | Jinja 模板引擎新增链式比较和参数解包支持 | [#32072](https://github.com/ggml-org/llama.cpp/pull/32072) |
| **b12302** | Chat：TTS 模型现可通过 Jinja 提供自定义文本归一化器 | 移除 `tts_norm_is_reserved_name`；[#32053](https://github.com/ggml-org/llama.cpp/pull/32053) |
| **b12289** | 测试现仅使用公共 ggml API | [#32077](https://github.com/ggml-org/llama.cpp/pull/32077) — 内部 API 清理 |
| **b12282** | Chat：修复 Muse Spark 忽略 `response_format json_schema` | [#32017](https://github.com/ggml-org/llama.cpp/pull/32017) |

**今日无配置相关的破坏性变更。** Jinja 相关变更为增量添加，不影响现有模板。

---

## 3. 新增模型与硬件支持

| 领域 | 变更 | 详情 |
|------|------|------|
| **CUDA / FP8** | OCP FP8 量化支持正式落地 | W8A16 GEMV 路径支持 FP8 权重；在 Qwen3.6-27B-NVFP4 GGUF（8192 token 提示词）上已可通过 `llama-bench` 进行基准测试 | [#28413](https://github.com/ggml-org/llama.cpp/pull/28413) |
| **CUDA / BF16** | 小行数 BF16 矩阵在小批次下的 MMVF（多块向量获取） | 解决 Qwen4-exp（320 行，K=10240）在批次 2–24 时 SM 利用率不足的问题 | [#31959](https://github.com/ggml-org/llama.cpp/pull/31959) |
| **CUDA / MoE** | 小批次 MoE 专家的专用 MMQ 内核（批次 2–24，用于 7→8 token 的投机解码草稿） | MMVQ 和 MMAI 内核在此批次大小下效率均不理想，新路径填补了这一空白 | [#31533](https://github.com/ggml-org/llama.cpp/pull/31533) |
| **Vulkan / CM2** | 通过协作矩阵（CM2）启用去量化 KV 缓存优化 | 由基于查询 token GQA 比率的启发式算法保护；支持混合精度的 KV 路径而无需完全物化 | [#31526](https://github.com/ggml-org/llama.cpp/pull/31526) |
| **WebGPU** | 新增 `PAD_REFLECT_1D` 运算 | 用于图像/卷积预处理；附带正确性和性能测试 | [#31877](https://github.com/ggml-org/llama.cpp/pull/31877) |
| **WebGPU** | 新增 `COL2IM_1D` 支持 | Qwen3-TTS 和 PocketTTS 波形解码器所需；每个输出通过重叠列聚合，无 FP 原子操作 | [#31708](https://github.com/ggml-org/llama.cpp/pull/31708) |
| **SYCL** | 修复步幅视图/非连续视图的 `CLAMP` 运算 | 与 ggml-sycl 中其他stride-safe 一元运算模式保持一致 | [#31784](https://github.com/ggml-org/llama.cpp/pull/31784) |

---

## 4. 性能与优化

### 已落地（过去 24 小时内提交）

- **CUDA FP8 GEMV**：OCP FP8 路径（`W8A16`）使量化检查点的显存占用降至 fp16 以下。在 Qwen3.6-27B-NVFP4 GGUF 上处理 8192 token 提示词时，FP8 路径现已可通过 `llama-bench` 进行基准测试。
- **CUDA BF16 小行数 MMVF**：对于 ≤ 约 320 行的矩阵在批次 2–24 时，MMVF 分块策略（每块 32 行）消除了此前 SM 空闲的性能瓶颈。适用于 MoE 专家和小型投影层。
- **Vulkan CM2 KV 去量化**：KV 去量化优化现已接入 CM2 协作矩阵路径，GQA 感知工作负载受益于此。
- **WebGPU COL2IM_1D**：补全了 TTSdecoder 运算的最后一块拼图，Qwen3-TTS / PocketTTS 现可在 WebGPU 后端运行。

### 进行中（开放中的 PR）

- **OpenCL Gated Delta Net** — 直接读取循环缓存而非通过 `get_rows` 拷贝，减少每个 delta-net 层前的带宽开销。输入侧 PR #30359；[#30360](https://github.com/ggml-org/llama.cpp/pull/30360)
- **OpenCL int8 KQ 融合注意力** — 按 head-size 分片在本地内存中暂存 Q，支持 head size 512；[#30249](https://github.com/ggml-org/llama.cpp/pull/30249)
- **OpenCL Adreno 闪存注意力** — int8 KQV + 延迟归一化，softmax 融合入 KQ GEMM 用于 prefill；[#30182](https://github.com/ggml-org/llama.cpp/pull/30182)
- **Vulkan iq3_xxs matvec** — Vulkan 上 iq3_xxs 量化的优化 `mul_mat_vec` 内核；提示词处理在噪声范围内（-0.72% PP）；[#30904](https://github.com/ggml-org/llama.cpp/pull/30904)
- **图元数据页触碰** — 避免初始化未使用的图元数据页，在 Windows RTX 5090 和 Linux RTX PRO 6000 上，MTP-7 / Qwen3.8-27B Q4_K_M @ ubatch 2048 / ctx 65536 可观测到显著的主机内存节省；[#32043](https://github.com/ggml-org/llama.cpp/pull/32043)
- **采样同步** — 重用已准备的批次输出，消除采样和投机解码（EAGLE3、MTP、DFlash、DSpark）期间重复的同步开销；[#30196](https://github.com/ggml-org/llama.cpp/pull/30196)
- **MoE 专家缓存** — 面向专家缓存的路由感知（`--moe-cache-prior`）；[#30763](https://github.com/ggml-org/llama.cpp/pull/30763)

---

## 5. 稳定性与回归

按评论量和严重程度排序：

| # | 问题 | 严重程度 | 状态 | 修复 PR |
|---|------|----------|------|---------|
| **#25618** | 投机解码（draft-mtp / draft-dspark）：**目标模型量化**（Q4_K_M）时贪婪输出与基线分歧。同设置下 BF16 目标模型正常。相同量化目标下 ngram 投机不受影响。 | **高** — 生产推理路径的正确性回归 | OPEN | — |
| **#28867** | gfx1201（RDNA4）WMMA 闪存注意力调度阈值过低；自 PR #28102 以来约 20% 投机解码性能回退 | **中** — AMD RDNA4 性能回归 | OPEN | — |
| **#31599** | HIP / gfx906 MoE 提示词处理自 PR #29948 以来慢 15–50% | **中** — AMD gfx906 性能回归 | OPEN | — |
| **#29821** | Vulkan `MUL_MAT_ID` 当某个专家 ID 在 token 行中出现超过一次且 n > 8 时丢失行 | **中** — MoE 路由正确性 | OPEN | — |
| **#31077** | Gemma 4 31B + draft-mtp：MTP 草稿在 KV 缓存回滚/清除后触发 CUDA 非法内存访问 | **中** — 检查点恢复时崩溃 | CLOSED | — |
| **#29774** | CPU 闪存注意力（单 chunk）溢出为 inf/NaN；累加器应为 F32 而非 F16 | **中** — CPU 后端正确性 | CLOSED | — |
| **#31734** | CPU F16 点积在 ARM（无 SVE）上以 F16 累加，溢出为 inf | **中** — ARM CPU 正确性 | CLOSED | — |
| **#31987** | `auto_fgdn` 硬编码为 false，融合 GDN 探测从未运行 | **低** — 优化被意外禁用 | CLOSED | — |

**今日重要关闭项**：#29092（HIP/ROCm Gated Delta Net 循环状态跨请求泄漏）和 #28433（draft-mtp 上下文大小取自 `llama_n_ctx()` 而非 `llama_n_ctx_seq()`）均已标记为 closed/stale，表明底层 bug 或已在主版解决，或报告已过期。

---

## 6. 对应用开发者的影响

| 主题 | 可操作的要点 |
|------|-------------|
| **FP8 推理** | CUDA FP8（W8A16）现已可用。若你运行量化模型（如 Qwen3.6-27B NVFP4），显存占用将显著降低，`llama-bench` 显示吞吐量可接受。请与 BF16 基线对比监控精度变化。 |
| **投机解码** | 若你在量化目标（Q4_K_M 等）上使用 draft-mtp 或 draft-dspark，请注意 **已知分歧 bug**（#25618）在贪婪采样下会触发。在问题解决前，考虑使用 BF16 目标或 ngram 草稿作为临时方案。 |
| **Vulkan on AMD** | CM2 去量化 KV 优化现已激活。在 Vulkan 上使用混合 GQA 工作负载时，KV 物化开销可能降低。 |
| **llama-server 安全** | 新 PR 强制执行更严格的 CORS 规则，禁止从浏览器直接扫描子实例端口，非回环主机上工具执行需显式 opt-in（`--allow-unauthenticated-tools`）。若你对外暴露服务端，请检查部署参数。 |
| **UI / 持久化** | 对话和设置现可通过存储适配器（Postgres via Supabase 等）存于服务端，而非浏览器 localStorage。实现跨浏览器、跨端口共享；即将在后续版本推送。 |
| **SYCL on Windows** | 关于 Windows 上 SYCL FP16 构建的功能请求（#31678）已开放；若通过 SYCL 面向 Intel GPU on Windows，跟踪此 issue。 |
| **大上下文内存** | 图元数据页触碰修复（PR #32043）在长上下文（65k ctx）+ 投机解码工作负载下可节省大量主机内存。发布后请升级。 |

---

*本简报基于 github.com/ggml-org/llama.cpp 2026-11-12 的活动数据生成。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the text to Simplified Chinese
2. Preserve the Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese appropriate for a Chinese developer newsletter

Let me translate section by section:

Title: "Ollama Digest — 2026-11-12" → "Ollama 技术摘要 — 2026-11-12"

Section 1: Today's Highlights
- "Ollama development today shows strong focus on memory management and multi-model robustness" → "今天的 Ollama 开发重点聚焦于内存管理和多模型稳定性"
- "a new PR introduces batch speculative verification for MLX runners" → "新 PR 为 MLX runner 引入了批量投机验证"
- "fixes for VRAM accounting and GPU memory allocation across multi-model scenarios are progressing through review" → "VRAM 核算和多模型场景下的 GPU 内存分配修复正在评审中推进"
- "On the stability front, an AMD Vulkan access violation on AMD RX 6800 XT is being actively investigated" → "稳定性方面，AMD RX 6800 XT 上的 AMD Vulkan 访问违规问题正在积极调查中"
- "a regression affecting AMD Radeon 780M Vulkan backends has been marked closed with recent changes" → "影响 AMD Radeon 780M Vulkan 后端的回归问题已在最近的更新中标记为关闭"
 
I see the next section focuses on releases and breaking changes, with no new releases in the last 24 hours and no migration notes. The translation captures the core information succinctly, maintaining the technical reporting style while conveying the key details about the project's current state.

The next section highlights emerging model and hardware support. I'm noting the interesting developments around the Gemma3 model with LoRA adapter merging and the Antigravity CLI integration. The new Claude Desktop gateway feature appears to be an intriguing in-progress implementation, suggesting continued expansion of Ollama's ecosystem and integration capabilities.

For backend and device notes, there are critical memory allocation challenges with AMD Strix Halo iGPU on Windows. Large models exceeding half of system RAM are experiencing loading failures due to ROCm buffer allocation complexities. Additionally, the AMD RX 6800 XT Vulkan access violation requires active investigation, indicating ongoing technical refinement for GPU compatibility.

The performance and optimization section reveals sophisticated decoding techniques. Speculative decoding strategies are emerging, with MLX runners enabling continuous drafting across overlapping batched requests. Per-request metrics now provide detailed API response insights, potentially improving model transparency and debugging capabilities.

Memory accounting fixes target critical GPU resource management issues, addressing buffer deduplication problems that previously caused significant memory reporting inaccuracies. VRAM accounting and GPU splitting mechanisms are being refined to prevent incorrect model eviction and unnecessary cross-GPU data spreading.

Legacy migration efforts focus on modernizing GGUFs, implementing atomic manifest replacements and introducing garbage collection for unreferenced legacy blobs during conversion and startup processes.

HTTP connection efficiency receives attention, with reusable llama-server connections eliminating redundant health checks and embedding call overhead for input processing.

Stability challenges persist across different hardware configurations. Critical issues include access violations on AMD Vulkan platforms, particularly affecting RX 6800 XT users with specific driver versions. A regression impacting AMD Radeon 780M Vulkan backends has been marked as resolved.

Long reply scenarios reveal model quality degradation across multiple architectures, including DeepSeek-R1, Phi-3.5, and Phi-4-mini models, suggesting potential context caching or processing limitations. Tool-call JSON parser edge cases and version flag inconsistencies are lower-priority concerns with existing fixes.

The development roadmap emphasizes multi-model serving improvements, with anticipated memory management upgrades and enhanced concurrent request handling for MLX runner users.

Embed endpoint connection optimizations reduce per-request overhead, particularly beneficial for tight-loop API interactions. However, AMD Vulkan users on specific hardware like the RX 6800 XT should exercise caution due to potential access violation risks.

Upcoming launcher changes will unify integration approaches, introducing more consistent connection flows and increased platform customization options.

The digest captures ongoing technical developments, highlighting performance and integration improvements in the Ollama ecosystem.
</think>


# Ollama 技术摘要 — 2026-11-12

## 1. 今日要闻

今天的 Ollama 开发重点聚焦于内存管理和多模型稳定性：一个新 PR 为 MLX runner 引入了批量投机验证（batch speculative verification），同时针对 VRAM 核算和多模型场景下 GPU 内存分配的修复正在评审中稳步推进。稳定性方面，AMD RX 6800 XT 上的 AMD Vulkan 访问违规问题正在积极调查，而影响 AMD Radeon 780M Vulkan 后端的回归问题已在近期变更中标记为关闭。

---

## 2. 版本发布与破坏性变更

| 项目 | 描述 | 链接 |
|------|-------------|------|
| 今日无发布 | 过去 24 小时内无新版本发布 | — |

**迁移注意事项：** 近期 issues 和 PRs 中未标记破坏性变更。

---

## 3. 新模型与硬件支持

| 项目 | 状态 | 详情 | 链接 |
|------|----------|---------|------|
| **Gemma3 + LoRA 适配器合并** | 功能请求（OPEN） | 支持在 Gemma3 基座模型上应用微调 LoRA 适配器 | [#12788](https://github.com/ollama/ollama/issues/12788) |
| **Antigravity CLI（`agy`）启动集成** | 功能请求（OPEN，21 👍） | 将 `agy`（Google 的 AI 命令行工具）加入 Ollama 启动集成 | [#16329](https://github.com/ollama/ollama/issues/16329) |
| **Claude Desktop 网关** | 进行中（PR OPEN） | 在 Ollama 现有监听器上提供 Claude Desktop 网关服务 | [#19657](https://github.com/ollama/ollama/pull/19657) |

**后端/设备说明：**
- **AMD Strix Halo iGPU（Windows）：** PR [#19636](https://github.com/ollama/ollama/pull/19636) 解决了超过系统内存约一半的大模型在 ROCm 缓冲区分配时无法加载的问题。
- **AMD RX 6800 XT（Vulkan）：** 正在调查 `0xc0000005` 访问违规问题，详见稳定性部分。

---

## 4. 性能与优化

| PR | 类别 | 摘要 | 链接 |
|----|----------|---------|------|
| **#19663** | 投机解码 | **MLX runner 批量投机验证** — 在重叠的批处理请求中保持投机草案活跃；为并发客户端维持 MTP/DFlash 加速效果 | [#19663](https://github.com/ollama/ollama/pull/19663) |
| **#19368** | 投机解码 | **每请求投机解码指标** — API 响应和 `ollama run --verbose` 现在报告投机/接受令牌数及接受率 | [#19368](https://github.com/ollama/ollama/pull/19368) |
| **#17857** | 内存核算 | **修复 llama-server 多模型加载时的内存核算** — 修复缓冲区去重 bug（投机草案行错误替换目标模型行），~30B DFlash 模型之前报告约 2.3 GB 而非实际 VRAM 占用 | [#17857](https://github.com/ollama/ollama/pull/17857) |
| **#19632** | VRAM 核算 | **修复 VRAM 核算和 GPU 分片** — 解决 #19463、#18679、#18349、#16599；防止错误的模型驱逐、加载拒绝和不必要的跨 GPU 调度 | [#19632](https://github.com/ollama/ollama/pull/19632) |
| **#18882** | 遗留迁移 | **移除 llama.cpp 兼容补丁；加载时迁移遗留 GGUFs** — 原子化 manifest 替换，转换/启动 GC 时回收无引用的遗留 blob | [#18882](https://github.com/ollama/ollama/pull/18882) |
| **#18397** | HTTP 效率 | **复用 llama-server HTTP 连接用于 embed 加载** — 为 `/api/embed` 端点移除 `DisableKeepAlives: true`；消除每个输入重复的健康检查 + embedding 调用开销 | [#18397](https://github.com/ollama/ollama/pull/18397) |

---

## 5. 稳定性与回归问题

**按估计严重程度排序：**

### 🔴 高 — AMD Vulkan 访问违规（RX 6800 XT）
- **问题：** 在 Vulkan GPU 后端加载模型时，`llama-server` 崩溃并报 `0xc0000005`（访问违规），影响平台为 AMD RX 6800 XT（驱动 32.0.21045.5002）。7B 纯 Transformer 和 27B 混合 SSM+Transformer 模型均受影响。CPU 推理可正常运行。
- **重复标记：** 疑与 #18494 共用根因。
- **链接：** [#18557](https://github.com/ollama/ollama/issues/18557)

### 🟡 中 — AMD Radeon 780M Vulkan 回归（已关闭）
- **问题：** Ollama ≥0.32.10 在 AMD Radeon 780M 上报 `radv/amdgpu: Not enough memory for command submission`。
- **状态：** Issue 标记为 **CLOSED** — 可能已在近期修复中解决；建议关注者使用当前版本测试。
- **链接：** [#17748](https://github.com/ollama/ollama/issues/17748)

### 🟡 中 — 长回复导致模型质量下降（DeepSeek-R1、Phi-3.5、Phi-4-mini）
- **问题：** 长回复或超过 `num_ctx` 后，模型回复质量逐渐恶化，需执行 `ollama stop` 才能恢复。影响 DeepSeek-R1:8b、Phi3.5、Phi4-mini 及 Phi3 128k。
- **症状：** 上下文切换时缓存的 key/value 似乎被错误地重新缩放。
- **链接：** [#19457](https://github.com/ollama/ollama/issues/19457)

### 🟢 低 — 工具调用 JSON 解析器边界情况
- **问题：** `mimo-v2.6` 配合 `qwen3.5` 解析器时，当模型将 JSON 参数写在 `<function=...>` 块内而非 `<parameter=...>` 块内时，返回 `arguments: {}`。
- **链接：** [#19650](https://github.com/ollama/ollama/issues/19650)

### 🟢 低 — 版本标志噪声（已修复）
- **问题：** `ollama -v` / `--version` 输出了多余的 "warning: could not connect to a running Ollama instance" 提示。
- **状态：** Issue **已关闭**；修复将在下一版本中包含。
- **链接：** [#19613](https://github.com/ollama/ollama/issues/19613)

---

## 6. 对应用开发者的意义

| 要点 | 详情 |
|----------|--------|
| **多模型服务正在变得更可靠** | 内存核算修复（#17857、#19632）意味着单 GPU 或多 GPU 环境下的多模型部署将更少出现意外驱逐和 VRAM 报告错误。相关 PR 合并后建议升级。 |
| **批量投机解码令 MLX 用户受益** | PR #19663 使重叠的批处理请求能够保持 MTP/DFlash 加速效果。若您在 MLX runner 上运行重叠请求，请测试此变更。 |
| **Embed 端点连接开销已降低** | 若您在紧密循环中调用 `/api/embed`，PR #18397 消除了每个请求的连接拆除开销；高负载下预期延迟降低。 |
| **AMD Vulkan 用户需注意** | 在 AMD RX 6800 XT 上使用 Vulkan 后端时请留意活动中的访问违规 bug（#18557）。CPU 回退方案可用。Radeon 780M 用户应在最新版本测试（回归问题已关闭）。 |
| **平台扩展：Claude Desktop + ChatGPT 启动** | 即将推出的启动器变更统一了 ChatGPT 和 Claude Desktop 集成路径（#19657、#19660）。若您围绕 `ollama launch` 构建工具链，预期会有更一致的连接流程。 |
| **Windows 安装程序自定义即将到来** | 功能请求 [#19661](https://github.com/ollama/ollama/issues/19661) 要求支持自定义安装路径和模型存储路径——对 C 盘空间有限的系统部署有实际意义。 |

---

*本摘要基于 2026-11-12 的 GitHub 数据生成，来源仓库：[ollama/ollama](https://github.com/ollama/ollama)。*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese while preserving the Markdown structure exactly and following all the rules. Let me translate this carefully.

Key points to remember:
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
- Issue/PR references like #12345 and their link text stay as-is
- Use natural technical Chinese, not literal word-for-word
- Output ONLY the translation, no preamble, no explanation, no markdown fences around the whole output
- Preserve the Markdown structure exactly

Let me translate section by section:

# LiteLLM Digest — 2026-11-12
→ # LiteLLM 速览 — 2026-11-12

## 1. Today's Highlights
→ ## 1. 今日要闻

LiteLLM shipped five releases over the past 24 hours (v1.110.0-rc.2 through v1.106.8), standardizing **cosign-based Docker image signing** across all versions with a consistent verification key. Meanwhile, the community is actively addressing two high-severity correctness bugs: a budget bypass via Redis counter clean-miss (#34238) and streaming token inflation (#12970), both now closed. On the new-provider front, Magistral reasoning models are landing (#51329) and a dynamic rate-limiter feature (#51328) allows teams to borrow idle TPM/RPM capacity from other teams.

→ 过去 24 小时内，LiteLLM 一口气发布了五个版本（v1.110.0-rc.2 至 v1.106.8），统一了所有版本的 **cosign Docker 镜像签名**，验证密钥保持一致。与此同时，社区正在积极修复两个高危正确性 bug：Redis 计数器 clean-miss 导致的预算绕过漏洞（#34238）和流式 token 膨胀问题（#12970），均已关闭。

在新提供商方面，Magistral 推理模型已接入（#51329），动态限流器（#51328）允许团队借用其他团队的空闲 TPM/RPM 额度。

---

## 2. Releases & Breaking Changes
→ ## 2. 发布动态与破坏性变更

| Version | Notes |
|---|---|
| **v1.110.0-rc.2** | RC with cosign signature verification |
| **v1.109.1** | Stable, cosign-signed |
| **v1.108.6** | Stable, cosign-signed |
| **v1.106.9** | Stable, cosign-signed |
| **v1.106.8** | Stable, cosign-signed; full verification snippet provided |

| 版本 | 说明 |
|---|---|
| **v1.110.0-rc.2** | RC 版本，含 cosign 签名验证 |
| **v1.109.1** | 稳定版，cosign 已签名 |
| **v1.108.6** | 稳定版，cosign 已签名 |
| **v1.106.9** | 稳定版，cosign 已签名 |
| **v1.106.8** | 稳定版，cosign 已签名；提供完整验证脚本 |

All Docker images (including `litellm-database`, `litellm-non_root`, and `docker.io/litellm/*`) are signed. Verify with:
→ 所有 Docker 镜像（包括 `litellm-database`、`litellm-non_root` 和 `docker.io/litellm/*`）均已签名。验证方式如下：

```bash
cosign verify \
  --key https://raw.githubusercontent.com/BerriAI/litellm/e82a3c646908ba0a6ee0beddc4310d7a6cac4065/cosign.pub \
  ghcr.io/berriai/litellm:<version>
```
**Migration note:** If you run `litellm --config config.yaml` on Ubuntu 24.04/26.04 with `TZ=Asia/Calcutta`, startup will crash — the legacy tzdata alias requires the `tzdata-legacy` package. Fixed in #49813 (closed).
→ **迁移注意：** 在 Ubuntu 24.04/26.04 且 `TZ=Asia/Calcutta` 环境下执行 `litellm --config config.yaml` 会导致启动崩溃——旧的 tzdata 别名需要 `tzdata-legacy` 包。已在 #49813 中修复（已关闭）。

---

## 3. New Model & Hardware Support
→ ## 3. 新模型与硬件支持

| Provider / Model | Change | PR / Issue |
|---|---|---|
| **Magistral (Mistral)** | Native reasoning/thinking effort support | [#51329](https://github.com/BerriAI/litellm/pull/51329), [#50478](https://github.com/BerriAI/litellm/pull/50478) |
| **Fireworks AI (US-only short names: `glm-5p3-us`, `kimi-k3-us`)** | Routed correctly to `/accounts/fireworks/routers` endpoint | [#51323](https://github.com/BerriAI/litellm/pull/51323) |
| **fal.ai video endpoints** | Per-clip pricing by duration and resolution via `output_cost_per_video_clip` | [#51299](https://github.com/BerriAI/litellm/pull/51299) |
| **Bedrock service tiers** | 400 error now returned when a tier cannot be served (previously silent) | [#50516](https://github.com/BerriAI/litellm/pull/50516) |
| **Gemini batches (`/gemini` pass-through)** | Attributed to calling key | [#51340](https://github.com/BerriAI/litellm/pull/51340) |
| **Access groups → Vector stores** | Grant vector store access through access groups | [#50290](https://github.com/BerriAI/litellm/pull/50290), [#50510](https://github.com/BerriAI/litellm/pull/50510) |

| 提供商 / 模型 | 变更 | PR / Issue |
|---|---|---|
| **Magistral (Mistral)** | 原生支持 reasoning/thinking effort | [#51329](https://github.com/BerriAI/litellm/pull/51329), [#50478](https://github.com/BerriAI/litellm/pull/50478) |
| **Fireworks AI（仅限美国地区的短名称：`glm-5p3-us`、`kimi-k3-us`）** | 正确路由至 `/accounts/fireworks/routers` 端点 | [#51323](https://github.com/BerriAI/litellm/pull/51323) |
| **fal.ai 视频端点** | 通过 `output_cost_per_video_clip` 按时长和分辨率实现分片计费 | [#51299](https://github.com/BerriAI/litellm/pull/51299) |
| **Bedrock 服务层级** | 当无法满足特定层级时现在返回 400 错误（此前静默失败） | [#50516](https://github.com/BerriAI/litellm/pull/50516) |
| **Gemini 批处理（`/gemini` 直通）** | 归属至调用方密钥 | [#51340](https://github.com/BerriAI/litellm/pull/51340) |
| **访问组 → 向量存储** | 通过访问组授权向量存储访问权限 | [#50290](https://github.com/BerriAI/litellm/pull/50290), [#50510](https://github.com/BerriAI/litellm/pull/50510) |

---

## 4. Performance & Optimization
→ ## 4. 性能与优化

| Area | Detail | Reference |
|---|---|---|
| **Dynamic rate limiter** | New `team_model_limit_borrows_idle_capacity_from_other_teams` flag — a team's `model_tpm_limit` / `model_rpm_limit` can now borrow idle capacity from other teams, eliminating 429s on idle capacity windows | [#51328](https://github.com/BerriAI/litellm/pull/51328) |
| **Token counting** | O(n²) rebuild of model name per path segment fixed; long custom model names no longer cause quadratic slowdown in context-window checks | [#50412](https://github.com/BerriAI/litellm/pull/50412) |
| **Anthropic tool history** | Router context-window check now counts server-side tool calls and readable results; previously disabled for assistant history with tool interactions | [#51334](https://github.com/BerriAI/litellm/pull/51334) |
| **CustomLoggerV2 (step 0)** | Types, dispatcher, and route callback scaffolding landed; no behavioral change yet — lays foundation for future V2 callbacks | [#51214](https://github.com/BerriAI/litellm/pull/51214) |
| **Schema initialization race** | Usage schemas now built eagerly at import time, eliminating internal schema errors during burst first-requests on fresh workers | [#51310](https://github.com/BerriAI/litellm/pull/51310) |
| **CI / build cache** | PR runs no longer evict main's cache; sccache redundant request storm eliminated (was making 700–2000 requests per Rust build) | [#51343](https://github.com/BerriAI/litellm/pull/51343) |
| **MCP tools/list latency** | Legacy subscription listener path (pre-2026 protocol) no longer blocks 18–50 s after `notifications/initialized` | [#50065](https://github.com/BerriAI/litellm/issues/50065) |

| 领域 | 详情 | 参考 |
|---|---|---|
| **动态限流器** | 新增 `team_model_limit_borrows_idle_capacity_from_other_teams` 开关——团队的 `model_tpm_limit` / `model_rpm_limit` 现在可以从其他团队借用空闲额度，消除容量空闲窗口期间的 429 错误 | [#51328](https://github.com/BerriAI/litellm/pull/51328) |
| **Token 计数** | 修复了每个路径段 O(n²) 的模型名称重复构建问题；超长自定义模型名称不再导致上下文窗口检查出现二次方级别的性能衰减 | [#50412](https://github.com/BerriAI/litellm/pull/50412) |
| **Anthropic 工具历史记录** | Router 上下文窗口检查现在会统计服务端工具调用及可读结果；此前对含工具交互的助手历史记录禁用了此检查 | [#51334](https://github.com/BerriAI/litellm/pull/51334) |
| **CustomLoggerV2（第一步）** | 类型定义、dispatcher 和路由回调脚手架已就位；尚无行为变更——为未来 V2 回调奠定基础 | [#51214](https://github.com/BerriAI/litellm/pull/51214) |
| **Schema 初始化竞争** | 使用 schema 现已在导入时预构建，消除新 worker 首波请求期间的内部 schema 错误 | [#51310](https://github.com/BerriAI/litellm/pull/51310) |
| **CI / 构建缓存** | PR 运行不再驱逐 main 分支缓存；sccache 冗余请求风暴已消除（此前每个 Rust 构建会产生 700–2000 次请求） | [#51343](https://github.com/BerriAI/litellm/pull/51343) |
| **MCP tools/list 延迟** | 遗留订阅监听路径（2026 年前协议）在 `notifications/initialized` 后不再阻塞 18–50 秒 | [#50065](https://github.com/BerriAI/litellm/issues/50065) |

---

## 5. Stability & Regressions
→ ## 5. 稳定性与回归问题

**Critical (high severity)**
→ **严重（高危）**

| Issue | Description | Status | Fix PR |
|---|---|---|---|
| [#34238](https://github.com/BerriAI/litellm/issues/34238) | End-user budget bypass via stale per-pod Redis counter after clean-miss (60 s TTL window) — spend enforcement can be skirted | Open | — |
| [#12970](https://github.com/BerriAI/litellm/issues/12970) | Streaming responses report **significantly inflated `prompt_tokens`** vs. actual provider billing; affects cost tracking accuracy | Closed | — |

| Issue | Description | Status | Fix PR |
|---|---|---|---|
| [#34238](https://github.com/BerriAI/litellm/issues/34238) | Clean-miss 后按 Pod 的 Redis 计数器过期（60 秒 TTL 窗口），导致最终用户预算绕过——可绕过消费强制限制 | Open | — |
| [#12970](https://github.com/BerriAI/litellm/issues/12970) | 流式响应报告的 `prompt_tokens` **严重膨胀**，与提供商实际计费不符；影响成本追踪准确性 | Closed | — |

**Moderate (correctness / functional)**
→ **中等（正确性 / 功能性）**

| Issue | Description | Status | Fix PR |
|---|---|---|---|
| [#48145](https://github.com/BerriAI/litellm/issues/48145) | JSON-defined OpenAI-like providers drop `tools` by default if model not in catalog (regression from v1.81 → v1.106) | Open | — |
| [#49675](https://github.com/BerriAI/litellm/issues/49675) | v3 TPM counter outlives its window under upstream 429s; key/team rejected below `tpm_limit` | Open | — |
| [#42104](https://github.com/BerriAI/litellm/issues/42104) | Mid-conversation `system` messages inside `messages` array break Gemini/Vertex prompt caching (`cache_read_input_tokens: 0` every turn) | Open | — |
| [#32357](https://github.com/BerriAI/litellm/issues/32357) | `/v1/messages` adapter mis-encodes reasoning models: `thinking_delta` streamed inside text block → empty content in Anthropic SDK / Claude Code | Open | — |
| [#47723](https://github.com/BerriAI/litellm/issues/47723) | Anthropic `count_tokens` local fallback rejects `tool_addition` / `tool_removal` blocks | Open | — |
| [#43620](https://github.com/BerriAI/litellm/issues/43620) | Responses bridge keeps only the **last** reasoning item when `stream=False` | Open | — |
| [#36095](https://github.com/BerriAI/litellm/issues/36095) | `os.environ/` substitution in numeric `litellm_params` (`weight`/`rpm`/`tpm`) yields `str`, crashing `simple_shuffle` with `TypeError` at request time | Open | — |
| [#49813](https://github.com/BerriAI/litellm/issues/49813) | Proxy exits at startup on `TZ=Asia/Calcutta` if `tzdata-legacy` package absent (Ubuntu 24.04+) | Closed | — |
| [#47988](https://github.com/BerriAI/litellm/issues/47988) | `MCPJWTSigner` overwrites server's configured `auth_value`, causing 401 on keyed MCP servers | Open | — |
| [#46542](https://github.com/BerriAI/litellm/issues/46542) | Streaming completion emits `finish_reason="stop"` when stream ends without provider-sent finish reason; callers cannot distinguish truncated from complete streams | Open | — |

| Issue | Description | Status | Fix PR |
|---|---|---|---|
| [#48145](https://github.com/BerriAI/litellm/issues/48145) | JSON 定义的类 OpenAI 提供商在模型不在目录中时默认丢弃 `tools`（v1.81 → v1.106 回归） | Open | — |
| [#49675](https://github.com/BerriAI/litellm/issues/49675) | v3 TPM 计数器在上游 429 后未能正确清零；密钥/团队在低于 `tpm_limit` 时仍被拒绝 | Open | — |
| [#42104](https://github.com/BerriAI/litellm/issues/42104) | 对话中嵌入 `messages` 数组的 `system` 消息会破坏 Gemini/Vertex 提示缓存（每轮 `cache_read_input_tokens` 均为 0） | Open | — |
| [#32357](https://github.com/BerriAI/litellm/issues/32357) | `/v1/messages` 适配器对推理模型编码错误：`thinking_delta` 在文本块内流式传输 → Anthropic SDK / Claude Code 收到空内容 | Open | — |
| [#47723](https://github.com/BerriAI/litellm/issues/47723) | Anthropic `count_tokens` 本地回退拒绝 `tool_addition` / `tool_removal` 块 | Open | — |
| [#43620](https://github.com/BerriAI/litellm/issues/43620) | Responses 桥接在 `stream=False` 时仅保留**最后一个** reasoning 项 | Open | — |
| [#36095](https://github.com/BerriAI/litellm/issues/36095) | `os.environ/` 替换数字型 `litellm_params`（`weight`/`rpm`/`tpm`）后产生 `str`，请求时触发 `TypeError` 导致 `simple_shuffle` 崩溃 | Open | — |
| [#49813](https://github.com/BerriAI/litellm/issues/49813) | 缺少 `tzdata-legacy` 包时（Ubuntu 24.04+）Proxy 在启动时退出 | Closed | — |
| [#47988](https://github.com/BerriAI/litellm/issues/47988) | `MCPJWTSigner` 覆盖服务器配置的 `auth_value`，导致使用密钥认证的 MCP 服务器返回 401 | Open | — |
| [#46542](https://github.com/BerriAI/litellm/issues/46542) | 流式补全在流结束时若提供商未发送 finish reason，则发出 `finish_reason="stop"`；调用方无法区分截断流与完整流 | Open | — |

---

## 6. What This Means for Application Developers
→ ## 6. 对应用开发者的影响

1. **If you use budget enforcement with end-user keys:** Monitor for the Redis clean-miss bypass described in #34238 — the 60-second TTL window allows a window where spend limits can be exceeded before the counter is restored. Until a fix is available, consider additional application-side guardrails for high-value deployments.
→ 1. **如果你使用最终用户密钥的预算强制功能：** 关注 #34238 中描述的 Redis clean-miss 绕过问题——60 秒 TTL 窗口内在计数器恢复前存在消费限额被突破的风险。在修复发布前，高价值部署建议在应用层增加额外的防护措施。

2. **If you use streaming with cost tracking:** The `prompt_tokens` inflation bug (#12970, now closed) means historical streaming cost reports may have overcounted. Audit any dashboards or billing systems that rely on streaming `usage` telemetry.
→ 2. **如果你使用流式响应的成本追踪：** `prompt_tokens` 膨胀 bug（#12970，已关闭）意味着历史流式成本报告可能存在超额计量。请审查依赖流式 `usage` 遥测数据的仪表盘或计费系统。

3. **If you serve Magistral reasoning models:** PR #51329 adds native reasoning effort and thinking support. Expect correct `thinking` block handling on both the API and streaming paths.
→ 3. **如果你服务 Magistral 推理模型：** PR #51329 新增了原生 reasoning effort 和 thinking 支持。预计 API 和流式路径上的 `thinking` 块处理均将正确工作。

4. **If you run multiple teams with shared model capacity:** The new `team_model_limit_borrows_idle_capacity_from_other_teams` flag (#51328) can immediately reduce 429 rates for teams with bursty traffic patterns on shared model pools.
→ 4. **如果你运行多个团队并共享模型容量：** 新增的 `team_model_limit_borrows_idle_capacity_from_other_teams` 开关（#51328）可立即降低共享模型池中流量突增团队的 429 错误率。

5. **If you use custom model names with tool calling:** On v1.106, JSON-defined providers lose `tools` if the model is not in the catalog (#48145). Downgrade to v1.81 or set the provider to `openai` with a custom `api_base` as a workaround.
→ 5. **如果你使用自定义模型名称的工具调用：** 在 v1.106 中，JSON 定义的提供商在模型不在目录中时会丢失 `tools`（#48145）。临时方案是降级至 v1.81，或将 provider 设为 `openai` 并配置自定义 `api_base`。

6. **If you use MCP servers with static credentials:** The `MCPJWTSigner` guardrail overwrites bearer tokens and static auth values (#47988). Disable the JWT signer for servers using their own `auth_value` until the fix lands.
→ 6. **如果你使用带静态凭证的 MCP 服务器：** `MCPJWTSigner` 防护栏会覆盖 bearer token 和静态认证值（#47988）。在修复发布前，请对使用自有 `auth_value` 的服务器禁用 JWT signer。

7. **If you rely on Docker image integrity:** All current releases are cosign-signed with commit `e82a3c6`. Enforce signature verification in your deployment pipeline to prevent supply-chain tampering.
→ 7. **如果你依赖 Docker 镜像完整性：** 所有当前版本均使用 commit `e82a3c6` 进行 cosign 签名。在部署流水线中强制执行签名验证，以防范供应链篡改风险。</think>



</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, project names, version tags, etc. verbatim
4. Use natural technical Chinese register
5. No markdown fences around the whole output

Let me translate section by section carefully.

Key terms to translate consistently:
- "Highlights" → 今日亮点
- "Releases & Breaking Changes" → 发版与变更
- "New Model & Hardware Support" → 新增模型与硬件支持
- "Performance & Optimization" → 性能与优化
- "Stability & Regressions" → 稳定性与回归问题
- "What This Means for Application Developers" → 对应用开发者的意义

Let me go through each section:

1. Title: Unsloth Digest — 2026-11-12 → Unsloth 速报 — 2026-11-12

2. Section 1:
- "Today's Highlights" → 今日亮点
- "Unsloth shipped v0.1.917-beta introducing Dynamic v3.1 GGUFs and official support for Qwen3.8-27B, alongside UI polish (Glass rendering, code blocks, Thinking UI) and new HTML/PDF export capabilities." → Unsloth 发布了 v0.1.917-beta，引入了 Dynamic v3.1 GGUFs 并正式支持 Qwen3.8-27B，同时带来了 UI 优化（毛玻璃渲染、代码块、思考模式）以及 HTML/PDF 导出功能。
- "On the platform side, a large batch of AMD NPU work landed (power modes, dynamic context sizing, storage management), while Studio saw critical fixes for MiniMax-H3-Image downloads and DiffusionGemma context display mismatches." → 平台侧大量 AMD NPU 相关工作已合入（功耗模式、动态上下文长度、存储管理），Studio 则修复了 MiniMax-H3-Image 下载和 DiffusionGemma 上下文显示不匹配的问题。

3. Section 2 - Releases & Breaking Changes:
- Table headers: "Version | Change Summary | Reference" → "版本 | 变更摘要 | 参考"
- "Migration note" → 迁移注意事项
- "Dynamic v3.1 GGUFs are the new default quantization format for Qwen3 series." → Dynamic v3.1 GGUFs 是 Qwen3 系列新的默认量化格式。

The note about existing v3.0 GGUFs remaining compatible but benefiting from re-quantization for improved performance and memory efficiency needs translation as well.

4. Section 3 - New Model & Hardware Support:
- "Model" → 模型
- "Status" → 状态
- "Notes" → 备注
- "Supported" → ✅ 已支持
- "Requested" → ⚠️ 请求中
- "In progress" → 🔧 进行中
- "Bug reported" → 🐛 问题报告

5. Section 4 - Performance & Optimization:
- "AMD NPU — Context sizing" → AMD NPU — 上下文大小
- "AMD NPU — Prefill" → AMD NPU — 预填充
- "Studio — Long chats" → Studio — 长对话
- "Deep Research" → Deep Research
- "MiniMax-H3-Image" → MiniMax-H3-Image

6. Section 5 - Stability & Regressions:
- "Severity" → 严重程度
- "Issue" → 问题
- "Status" → 状态
- "Fix PR" → 修复 PR
- High severity → 🔴 高
- Medium severity → 🟡 中
- Low severity → 🟢 低

7. Section 6 - What This Means for Application Developers:
- Numbered list with the heading
- Each paragraph needs natural Chinese translation

I should maintain the table structure with proper Markdown formatting throughout, including column headers and alignment rows where needed.
</think>


# Unsloth 速报 — 2026-11-12

## 1. 今日亮点

Unsloth 发布了 **v0.1.917-beta**，引入了 Dynamic v3.1 GGUFs 并正式支持 **Qwen3.8-27B**，同时带来了 UI 优化（毛玻璃渲染、代码块、思考模式）以及 HTML/PDF 导出功能。平台侧大量 AMD NPU 相关工作已合入（功耗模式、动态上下文长度、存储管理），而 Studio 则修复了 MiniMax-H3-Image 下载和 DiffusionGemma 上下文显示不匹配的关键问题。

---

## 2. 发版与变更

| 版本 | 变更摘要 | 参考 |
|---------|----------------|-----------|
| **v0.1.917-beta** | 支持 Dynamic v3.1 GGUF 格式；支持 Qwen3.8-27B 模型；性能改进；全新毛玻璃渲染、代码块、思考模式 UI；HTML/PDF 聊天导出；图像生成和编码智能体功能 | [Release](https://github.com/unslothai/unsloth/releases) |

> **迁移注意事项：** Dynamic v3.1 GGUFs 是 Qwen3 系列新的默认量化格式。现有 v3.0 GGUFs 仍可兼容，但建议重新量化以获得最佳性能和显存效率。

---

## 3. 新增模型与硬件支持

| 类别 | 项目 | 状态 | 备注 |
|----------|------|--------|-------|
| **模型** | Qwen3.8-27B | ✅ 已支持 | 通过 Dynamic v3.1 GGUFs |
| **模型** | Kromoss（MOSS-Image 衍生版） | ⚠️ 请求中 | [Issue #17552](https://github.com/unslothai/unsloth/issues/17552) — 尚不支持，用户已受阻 |
| **模型** | MiniMax-H3-Image | 🔧 修复中 | PR [#17563](https://github.com/unslothai/unsloth/pull/17563)、[#17569](https://github.com/unslothai/unsloth/pull/17569) 修复下载、显存占用和精度选择问题 |
| **硬件** | AMD NPU（FastFlowLM/Lemonade） | ✅ 积极开发中 | 已合入 11 个 PR，涉及功耗模式、预填充块长度、图像预缩放、动态上下文长度、存储管理 |
| **硬件** | Intel GPU（SYCL） | ⚠️ 请求中 | [Issue #17048](https://github.com/unslothai/unsloth/issues/17048) — 请求在 llama-server 之前 source `/opt/intel/oneapi/setvars.sh` |
| **后端** | ROCm 7.14 / MI300X（gfx942） | 🐛 问题报告 | [Issue #17548](https://github.com/unslothai/unsloth/issues/17548) — `_scaled_dot_product_flash_attention_backward` 中的 stride 断言失败 |
| **量化** | EXL3（ExLlamaV3） | 🔧 进行中 | [PR #7115](https://github.com/unslothai/unsloth/pull/7115) — 支持 2/3/4/6/8 位量化 + MoE |

---

## 4. 性能与优化

| 领域 | 变更 | 详情 |
|------|--------|---------|
| **AMD NPU — 上下文大小** | 动态分配 | [PR #17511](https://github.com/unslothai/unsloth/pull/17511)：上下文大小现根据空闲显存计算（预留 2 GiB），而非固定 8,192 tokens |
| **AMD NPU — 预填充** | 可配置块长度 | [PR #17510](https://github.com/unslothai/unsloth/pull/17510)：用户可配置预填充块长度，限制在上下文范围内 |
| **Studio — 长对话** | 挂载优化 | [PR #17504](https://github.com/unslothai/unsloth/pull/17504)（已关闭）：仅挂载读取器附近的最近消息，按对话长度比例降低主线程开销 |
| **Deep Research** | 提示词自动调整大小 | [PR #17554](https://github.com/unslothai/unsloth/pull/17554)：提示词大小现根据自托管连接实际服务窗口调整（如 llama.cpp 为 4,096 tokens），而非 32K 上限 |
| **MiniMax-H3-Image** | 显存保护 | [PR #17563](https://github.com/unslothai/unsloth/pull/17563)：修复 24–40 GiB 显存 GPU 上 135 GB 下载问题；现接受显式 FP8/INT8 选择 |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| 🔴 **高** | DiffusionGemma 忽略上下文设置（显示 24,576，实际使用 4,096）和并行度设置 | [Issue #17558](https://github.com/unslothai/unsloth/issues/17558) | [PR #17566](https://github.com/unslothai/unsloth/pull/17566) |
| 🔴 **高** | MiniMax-H3-Image：下载大小不匹配，24–48 GiB 显存 GPU 上显存溢出 | [PR #17563](https://github.com/unslothai/unsloth/pull/17563) | —（修复 PR） |
| 🟡 **中** | 模型加载并发时，聊天设置在多个对话间泄露 | [PR #17565](https://github.com/unslothai/unsloth/pull/17565) | —（修复 PR） |
| 🟡 **中** | ROCm 7.14 / MI300X：flash attention 反向传播中的 stride 断言失败（需 MATH 回退） | [Issue #17548](https://github.com/unslothai/unsloth/issues/17548) | 暂无 |
| 🟡 **中** | AMD 多卡：iGPU 显示"Unknown"显存，无法聚合主机显存 | [PR #17523](https://github.com/unslothai/unsloth/pull/17523) | —（修复 PR） |
| 🟡 **中** | MoE CPU 后端：梯度累积 > 1 时路由器辅助 loss 发散 | [Issue #17054](https://github.com/unslothai/unsloth/issues/17054)（已关闭） | `tests/test_parallel_cp_compose.py` 中的等价性测试 |
| 🟢 **低** | Unsloth hub 未列出全部模型 | [Issue #17458](https://github.com/unslothai/unsloth/issues/17458)（已关闭） | — |
| 🟢 **低** | Docker 镜像标签指向错误的版本 | [Issue #17470](https://github.com/unslothai/unsloth/issues/17470) | 暂无 |

---

## 6. 对应用开发者的意义

1. **Qwen3.8-27B 现在可以本地生产级推理了。** 通过 Dynamic v3.1 GGUFs，如果你在服务 Qwen3 系列变体，建议重新量化到 v3.1 以获得最新的性能和显存优化。

2. **Studio 的 AMD NPU 技术栈正在快速成熟。** 功耗模式、动态上下文长度、存储管理在单次批量中合入，目标 AMD NPU 硬件（FastFlowLM/Lemonade）的团队现在应开始集成测试。

3. **注意 DiffusionGemma 的上下文长度不匹配问题。** UI 显示的上下文长度与后端实际使用的不一致（[Issue #17558](https://github.com/unslothai/unsloth/issues/17558) / [PR #17566](https://github.com/unslothai/unsloth/pull/17566)），可能悄无声息地截断长消息。在修复合入前，请在服务端验证实际的 token 限制。

4. **自托管 llama.cpp 用户请重新测试 Deep Research。** 提示词自动调整大小（[PR #17554](https://github.com/unslothai/unsloth/pull/17554)）改变了上下文使用方式——之前无论服务端窗口多大都固定在 32K 字符上限，现改为受实际上下文窗口约束。

5. **EXL3 量化后端进展**（[PR #7115](https://github.com/unslothai/unsloth/pull/7115)）将支持 2/3/4/6/8 位量化加 MoE——这对 transformers 5 下 MoE 模型的量化能力是重要补充。

6. **Intel SYCL 支持缺口**（[Issue #17048](https://github.com/unslothai/unsloth/issues/17048)）意味着 Intel GPU 用户目前无法使用 SYCL 构建的 llama.cpp。若你以此为目标硬件，请关注此 issue 或考虑临时使用 ROCm/CUDA 替代方案。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*