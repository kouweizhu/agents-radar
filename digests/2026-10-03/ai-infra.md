# AI 基础设施日报 2026-10-03

> 生成时间: 2026-10-03 01:22 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the cross-project comparison report into Chinese. I need to:
1. Translate all the text content
2. Keep all Markdown structure, tables, headings, lists, etc.
3. Keep code/technical identifiers, URLs, issue numbers, project names as-is
4. Use natural technical Chinese - not literal word-for-word

Let me go through and translate while preserving the structure.</think>

# 跨项目对比：AI 推理与服务生态

## 1. 生态概览

AI 推理技术栈正从三个方向快速横向扩展：**硬件异构化**（Blackwell、RDNA、Hexagon、Apple Silicon、Intel Arc）、**内存层级精细化**（可扩展 KV 缓存、GPU 驻留 MoE 缓存、异构内存支持）以及**部署拓扑多样化**（解耦式 prefill-decode、投机解码、多模型服务）。各项目占据不同的技术栈层级，但竞争压力正推动功能趋同——vLLM 的可扩展 KV 缓存与 SGLang 的 HiCache 之间的差距正在快速缩小。同时，llama.cpp 保持其独特定位：唯一同时覆盖消费级 CPU + Apple Silicon + 嵌入式 DSP 的运行时，而 LiteLLM 则在网关层抽象化各服务提供商。

---

## 2. 活跃度对比

| 项目 | 活跃 Issue | 关键问题 | PR（近 24h） | 发布（24h） |
|------|-----------|---------|-------------|-------------|
| **vLLM** | 约 12 个 | SM120 崩溃、调度器卡死、ROCm 稳定性 | 约 15 个合并 | 无 |
| **SGLang** | 约 8 个 | CUDA 显存溢出、GLM SM120 崩溃、EAGLE 前缀坍缩 | 约 12 个合并 | 无 |
| **llama.cpp** | 约 6 个 | 多 GPU MTP 回归、Vulkan 回归 | 约 10 个合并 | 5 次提交 (b11345–b11364) |
| **Ollama** | 约 10 个 | Cloud Pro 95% 失败率、Windows 安装包签名 bug、MLX 内存 | 约 8 个合并 | 无 |
| **LiteLLM** | 约 10 个 | 预算绕过、Redis 集群卡死、支出日志 | 约 12 个合并 | v1.105.0-dev.2 |
| **Unsloth** | 约 8 个 | 显存溢出、解码回归、工具调用 | 约 10 个合并 | 无 |

**分析：**
- **llama.cpp** 提交频率最高，尽管没有正式的"发布"标签——这是其持续交付模式的常态。
- **vLLM 和 SGLang** 的 issue 数量与 Blackwell（SM120）硬件成熟度挑战高度相关。
- **Ollama 和 LiteLLM** 的问题更偏向运维可靠性（云服务、安装程序、预算执行），而非核心推理正确性。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|-------------|------|--------|-----------|--------|---------|
| **DeepSeek V4.1** | ⚠️ SM120 问题 | 🔧 优化路线图 | — | — | — |
| **GLM-5.3 Flash** | NVFP4 MLA | ⚠️ SM120 崩溃 | — | — | — |
| **Qwen3.8 Flash-Next** | DGX Spark 支持 | 🔧 进行中 | — | — | 🔧 LoRA bug |
| **Qwen3.5 Embeddings** | — | — | ✅ 已添加 | — | — |
| **Prism Bonsai 2** | — | — | ✅ 运行时支持 | — | — |
| **Laya Decision** | — | — | — | — | ✅ 微调 |
| **Granite (IBM)** | — | — | — | ✅ MLX | — |
| **Reka** | — | — | — | ✅ Provider | — |
| **Gemma 4** | — | 🔧 修复中 | — | — | — |
| **xAI Grok Imagine** | — | — | — | ✅ 原生 | — |

**领先者分析：**
- **vLLM** 在企业级硬件（Blackwell、ROCm MI355X）支持上领先，但在 SM120 稳定性上仍有挑战。
- **SGLang** 在投机解码创新上领先（DSpark 动态验证宽度、Ngram 支持）。
- **llama.cpp** 在嵌入式/ CPU/非 NVIDIA 目标（Hexagon、Apple Silicon、Vulkan）的模型多样性上领先。
- **LiteLLM** 在提供商抽象上领先，本周期新增 10+ 个 provider。
- **Unsloth** 在消费级 GPU 微调工作流自动化上领先。

---

## 4. 性能前沿

| 优化方向 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------|------|--------|-----------|--------|---------|
| **KV 缓存可扩展性** | 🔥 Extensible KV (#56492) | HiCache 回写 | — | — | — |
| **内存卸载（Sleep）** | ✅ CUDA graph pool offload | — | GPU 驻留 MoE LRU | MLX 权重解绑修复 | — |
| **投机解码** | MTP 修复 | DSpark 动态验证 | — | — | — |
| **量化** | NVFP4 MLA | MXFP4 MoE (AMD) | q2_k/q3_k (Hexagon) | MXFP8 (MLX) | BNB 4-bit 修复 |
| **内核性能** | FlashInfer 下载器 | — | CUDA TOP_K 基数排序、Vulkan RMS norm | — | — |
| **批处理** | 优先级感知指标 | PD 混合 draft KV 切片 | — | — | — |
| **多 GPU / 分布式** | — | TP-slice 混合 | 多 GPU MTP（⚠️ 回归） | — | 多 GPU（Studio 差距） |

**前沿聚焦：**
- **vLLM 和 SGLang** 在异构 KV 缓存管理（设备/主机/p2p/磁盘）上直接竞争，这是 128K+ 上下文工作负载的关键能力。
- **llama.cpp** 占据 CPU/嵌入式优化前沿——CUDA TOP_K 和 Vulkan RMS norm 是本周期最高影响力的改进。
- **Unsloth** 专注于微调效率（LoRA + QAT 保留），而非推理优化。

---

## 5. 层级定位

| 层级 | 项目 | 定位说明 |
|------|------|---------|
| **训练 / 微调** | Unsloth | 消费级 GPU 微调，支持 LoRA、QAT、多 GPU |
| **本地运行时** | llama.cpp、Ollama | 面向 CPU/Apple Silicon/嵌入式的完整推理引擎 |
| **服务引擎** | vLLM、SGLang | 生产级 GPU 服务，包含调度器、KV 缓存、投机解码 |
| **网关 / 抽象层** | LiteLLM | 多提供商 OpenAI 兼容 API，支持预算、限流、可观测性 |
| **混合型** | Ollama | 终端用户本地部署 + 云端同步，通过 OpenAI 兼容层桥接到 LiteLLM |

**竞争边界：**
- **vLLM ↔ SGLang**：GPU 服务直接竞争——功能正在快速趋同（KV 缓存可扩展性、投机解码、PD 解耦）。
- **llama.cpp ↔ Ollama**：llama.cpp 提供引擎；Ollama 为其包装终端用户可访问性。Ollama 增加编排、云同步和 MLX 后端。
- **LiteLLM** 正交运作——位于所有这些引擎以及云提供商（OpenAI、Anthropic、Bedrock）之前，作为转换/代理层。
- **Unsloth** 占据独特细分：微调而非推理。它训练的模型随后运行在 vLLM/SGLang/llama.cpp/Ollama 上。

---

## 6. 趋势信号

### 应用开发者和智能体开发者应关注

| 信号 | 影响 | 相关项目 |
|------|------|---------|
| **Blackwell (SM120) 不稳定** | 避免在 RTX PRO 6000 / RTX 5080 上生产部署 CUDA graph 或投机解码工作负载。Triton 后端比 fa4 更稳定。 | vLLM、SGLang |
| **可扩展 KV 缓存即将发布** | 将支持 128K+ 上下文结合异构内存（磁盘/p2p/主机）。关注 API 稳定性。预计 2027 年 Q1 生产就绪。 | vLLM |
| **多模型 GGUF 服务** | Unsloth Studio 和 llama.cpp 支持多个并发 GGUF 模型——简化多租户部署。 | Unsloth、llama.cpp |
| **预算执行 bug** | 自托管 LiteLLM 用户：在你的版本中验证预算限制是否实际生效。 | LiteLLM |
| **MLX 内存行为变更** | Apple Silicon 用户：每次请求后约 2 秒权重解绑。对延迟敏感的应用需考虑页面恢复延迟。 | Ollama |
| **工具调用可靠性提升** | LiteLLM 和 SGLang 都修复了工具调用顺序/分块边界问题——智能体工作流中断减少。 | LiteLLM、SGLang |
| **提供商扩展加速** | LiteLLM 每周期约新增 3 个 provider。需要特定模型/后端时先查 LiteLLM——可能已抽象化。 | LiteLLM |

### 行业趋势（从活跃度推断）

1. **异构内存层级是下一个前沿** — KV 缓存可扩展性（vLLM）、GPU 驻留 MoE 缓存（llama.cpp）、Sleep 模式 CUDA graph 卸载（vLLM）都指向同一目标：利用主机/磁盘内存运行超出 GPU 显存容量的模型。

2. **投机解码正在超越纯粹的速度** — DSpark 的动态验证宽度和 Ngram 支持表明焦点正从"能否工作？"转向"大规模下能否保持质量？"（参见 SGLang 中的 EAGLE 前缀坍缩 bug）。

3. **AMD ROCm 正在追赶** — MI355X（gfx950）现已在 Triton 内核中支持 MXFP4 MoE 和 fp32 路由 GEMM。如果受 CUDA 限制，AMD MI300X/MI355X 正在变得可行。

4. **量化正在碎片化** — NVFP4（Blackwell）、MXFP4（AMD）、MXFP8（Apple）、Q2_K/Q3_K（Hexagon）、GGUF IQ3（llama.cpp）。没有单一量化格式在各硬件上占主导。LiteLLM 的抽象在此有所帮助。

5. **本地 + 云端融合** — Ollama 云同步 + LiteLLM 兼容层 + Unsloth 训练创建了从消费级 GPU 到企业云部署的连续体。"本地模型"和"API 模型"之间的界限在工具层面正在模糊。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM digest from English to Chinese. I need to:
1. Translate all the text, keeping the same structure
2. Keep technical terms, project names, URLs, issue numbers, etc. as-is
3. Use natural technical Chinese register
4. Keep all Markdown formatting exactly the same

Let me go through and translate while preserving the structure:

Title: vLLM Digest — 2026-10-03
→ vLLM 动态 — 2026-10-03

Let me translate section by section:</think>

# vLLM 动态 — 2026-10-03

## 今日要闻

vLLM 项目正在解决关键的 Blackwell (SM120) 问题，同时推进可扩展 KV 缓存基础设施方面的工作。多条 PR 已围绕休眠/快照功能落地，用于权重加载受限的推理服务场景，ROCm 优化工作也持续在 AMD GPU 上进行。值得注意的是，可扩展 KV 缓存 PR (#56492) 正在向产品化推进，代表着异构内存层次结构方面的重大架构升级。

---

## 版本发布与重大变更

*过去 24 小时内无版本发布记录。*

---

## 新模型与硬件支持

- **GLM-5.x NVFP4 MLA 支持**：PR [#59833](https://github.com/vllm-project/vllm/pull/59833) 新增将 ModelOpt NVFP4 MLA 投影加载到 GLM-5.x 模型的 BF16 `fused_qkv_a_proj` 中。

- **Qwen3.8-Flash-Next 在 DGX Spark 上运行**：PR [#58439](https://github.com/vllm-project/vllm/pull/58439) 引入检查点映射的 PLE 存储，用于统一内存 GPU (GB10)，解决了 47.7 GiB FP8 PLE 表无法与约 72 GiB 权重并存的问题。

- **ROCm 测试覆盖扩展**：PR [#56679](https://github.com/vllm-project/vllm/pull/56679) 新增 15 个 AMD 镜像和 5 个独立 AMD 测试组，位于 `.buildkite/test_areas/` 目录下。

---

## 性能优化

- **休眠模式下的 CUDA Graph 池卸载**：PR [#59160](https://github.com/vllm-project/vllm/pull/59160) 和 [#59523](https://github.com/vllm-project/vllm/pull/59523) 引入 `sleep_mode_offload_cudagraph`（可选启用，默认关闭），在休眠模式下权重卸载时释放 CUDA graph 私有张量池——这可以在大型 MoE 部署中节省每个 GPU 数 GiB 的显存。

- **ROCm M3 Triton fp32 路由 GEMM**：PR [#54916](https://github.com/vllm-project/vllm/pull/54916) 落地 gfx950 低 M fp32 路由 GEMM，用于 MI300X 上 decode 规模的批次。

- **优先级感知指标**：PR [#58078](https://github.com/vllm-project/vllm/pull/58078) 在启用 `--scheduling-policy priority` 时，为已完成的请求指标添加桶式 `priority` 标签，实现按优先级层级的延迟/吞吐量分解。

- **Prompt Token 缓存层级指标**：PR [#56318](https://github.com/vllm-project/vllm/pull/56318) 暴露 `vllm:prompt_tokens_cached_by_source_total{source}` 指标，包含五个值（`device`、`host`、`p2p`、`disk`、`external_unspecified`）。

- **FlashInfer 内核下载器**：PR [#58765](https://github.com/vllm-project/vllm/pull/58765) 新增 `vllm download-kernels` 命令，用于预装 FlashInfer 预编译内核，这对 Hopper/Blackwell GPU 至关重要。

---

## 稳定性与回归问题

### 严重（高优先级）

| 问题 | 描述 | 状态 |
|------|------|------|
| [#56892](https://github.com/vllm-project/vllm/issues/56892) | **DeepSeek-V4.1-Flash 在 SM120 上**：使用 `--enager-eager` 时解码吞吐量极低；8x RTX PRO 6000 Blackwell 上 CUDA graphs 无法使用 | 待处理，17 条评论 |
| [#51744](https://github.com/vllm-project/vllm/issues/51744) | **Gemma4 配合 Transformers 5.15.0**：vLLM 0.27.0 启动失败（已关闭，可能需要后续跟进） | 已关闭，20 条评论 |
| [#59724](https://github.com/vllm-project/vllm/issues/59724) | **MTP 投机解码 0% 接受率** 在 SM120 夜间构建上，使用原生 FLASHINFER_MLA_SPARSE_SM120 后端（GLM-5.3-Flash） | 待处理，7 条评论 |

### 中等

| 问题 | 描述 | 状态 |
|------|------|------|
| [#53130](https://github.com/vllm-project/vllm/issues/53130) | **调度器在负载下停止接收请求**；延迟队列增长但引擎报告健康 | 待处理，10 条评论 |
| [#46625](https://github.com/vllm-project/vllm/issues/46625) | **Qwen3-VL-8B-FP8 在 RTX 5080 上**：引擎初始化正常但 generate() 静默挂起 | 待处理，9 条评论 |
| [#54359](https://github.com/vllm-project/vllm/issues/54359) | **ROCm GLM-5.3-Flash kpool 索引器** 静默覆盖自己的 KV 缓存（约 79% 的键错误） | 待处理，11 条评论 |
| [#59642](https://github.com/vllm-project/vllm/issues/59642) | **Qwen3.8-flash-next 0% MTP 接受率** 在分离式 PD 服务中 | 待处理，7 条评论 |

### 已修复

- PR [#59699](https://github.com/vllm-project/vllm/pull/59699): 修复 H200 上带 InfiniBand 状态的 TP1 快照捕获失败问题
- PR [#59661](https://github.com/vllm-project/vllm/pull/59661): 在快照清理前报告 CRIU 失败详情
- PR [#59504](https://github.com/vllm-project/vllm/pull/59504): 修复异步 KV 加载时的分配器清零竞态
- PR [#58890](https://github.com/vllm-project/vllm/pull/58890): 修复 Qwen3-Omni 中的 M-RoPE 偏移量重复计算问题

---

## 这对应用开发者意味着什么

1. **Blackwell (SM120) 支持仍在成熟中**：多个关于 RTX PRO 6000 和 RTX 5080 的严重问题正在追踪中。在 Blackwell 硬件上部署时，预计会遇到一些坎坷——尤其是 CUDA graphs 和投机解码方面。在可行的情况下，考虑继续使用 CUDA graph 捕获。

2. **休眠模式内存改进**：即将发布的新版本中将提供 `sleep_mode_offload_cudagraph` 选项，这将显著减少大型 MoE 模型在休眠期间的内存占用——对多租户部署非常重要。

3. **可扩展 KV 缓存即将到来**：PR [#56492](https://github.com/vllm-project/vllm/pull/56492) 代表了 KV 缓存管理的重大架构变化，支持异构内存（设备/主机/p2p/磁盘）管理。这将支持大型上下文工作负载的新部署模式。

4. **优先级调度现已可观测**：随着优先级感知指标的落地，使用 `--scheduling-policy priority` 的团队现在可以在生产环境中按优先级层级正确监控延迟/吞吐量。

5. **Docker 镜像压缩**：Issue [#28656](https://github.com/vllm-project/vllm/issues/28656) 提议使用 Zstd 压缩 Docker 镜像，这将减少镜像大小并改善拉取时间——值得基础设施团队关注。

---

*基于 2026-10-03 的 GitHub 数据生成*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Digest into Chinese. I need to:
1. Translate the content into Simplified Chinese
2. Keep all Markdown structure (headings, tables, lists, etc.)
3. Keep all technical terms, issue/PR numbers, code identifiers as-is
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through and translate each section while preserving the structure.</think>

# SGLang 速报 — 2026-10-03

## 1. 今日要点

SGLang 今日在多个方向保持活跃开发。最值得关注的是：**Foundry Adapter** PR (#42254) 现已可用于集成 Foundry 基础设施；修复了 **DeepSeek NVFP4 shared-expert fusion** 在 LoRA 和 FP4 后端不兼容的问题 (#42203)；以及 **DSpark 动态验证宽度** 方面的进展，支持根据每个步骤动态选择验证宽度 (#42281)。CI 追踪 issue (#17050) 显示截至 10 月 3 日有 2 个失败测试和 5 个不稳定测试，近期已修复 1130 个测试。

---

## 2. 版本发布与破坏性变更

过去 24 小时内无新版本发布。

---

## 3. 新模型与硬件支持

| 模型/架构 | 支持详情 | PR/Issue |
|---|---|---|
| **DeepSeek V4.1** | 优化路线图：追踪 mHC 重构与预填充改进 | #42170 |
| **GLM-5.3-Flash** | SM120 (RTX PRO 6000) — fa4 注意力后端在 CUDA-graph 捕获时崩溃；Triton 是唯一可用的后端 | #42012 |
| **DeepSeek-V4-Pro** | GB300 (SM103) 支持；#39704 后 decode 在并发 1 时有约 5% 性能回退 | #42074 |
| **AMD MI355X (gfx950)** | Quark MXFP4 MoE 现支持通过 triton_kernels 以 W4A16 方式运行于 RDNA | #41389 |
| **Cake kernels (FlashInfer)** | 端到端验证追踪器已开放，按模型逐个集成 | #42176 |

---

## 4. 性能优化

| 领域 | 变更 | 详情 | PR/Issue |
|---|---|---|---|
| **DeepSeek NVFP4** | 修复 LoRA/FP4 后端的 shared-expert fusion | 防止在不兼容配置启用时产生错误的 GEMM 融合 | #42203 |
| **DSpark** | 每步动态验证宽度 | 从 #41994 分支；验证宽度在 batch 64 时开始见效 | #42281 |
| **DSpark** | DSA 的 k-pool 256-token 逻辑页 | 修复 16K 共享前缀下的 NIAH 针丢失问题；替代 #41645 | #42178 |
| **HiCache** | 写回 SWA 插入修复 | 解决写回模式下 SWA 模型的断言失败问题 | #42264 |
| **请求预处理** | 从 HTTP 事件循环中剥离 | 防止长 prompt 阻塞健康检查和流式响应 | #39716 |
| **PD (预填充-解码)** | 跨异构 TP 切分混合草稿 KV | 处理 prefill/decode TP 不同的 TP 分片 MQA 草稿 K/V | #41992 |
| **AMD gfx950 MoE** | 小 batch 紧凑排序 + FP8 block-scale kernel | 提升 MI355X 上中等大小 decode batch（6-23 tokens）的性能 | #41982 |
| **MoE router** | 统一 GEMM 到单一 gate 层 | 对 router GEMM 精度至关重要 | #38695 |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 摘要 | 状态 |
|---|---|---|---|
| **高** | QSA extend 在 8 个并发请求时出现 CUDA 非法内存访问 | H20 TP8 上的 Qwen3.8-Flash-Next-FP8；可通过 `CUDA_LAUNCH_BLOCKING=1` 或 `--disable-overlap-schedule` 规避 | #37633 (open) |
| **高** | EAGLE 投机解码导致 radix 前缀复用崩溃 | GLM-DSA NVFP4 多轮场景下复用率从 97% 降至 40-53%；无崩溃，悄然失效 | #32459 (closed) |
| **高** | GLM-5.3-Flash 在 SM120 上：fa4 在 CUDA-graph 捕获时崩溃 | Triton 是唯一可用的注意力后端 | #42012 (open) |
| **中** | DSPark 启动时因未同步的 CUDA graph 内存检查而卡死 | 启动时可能卡死 | #39886 (open) |
| **中** | DeepSeek-V4 在 GB300 上 decode 在并发 1 时约慢 5% | #39704 后的回归 | #42074 (open) |
| **中** | DeepSeek-V4 在 SM120 上：FP8 分页 MQA logits 关闭 C4 indexer | 128k 上下文下增加 3.3–3.8 GiB | #42146 (open) |
| **低** | MultiDetokenizerRouter 将 batch 拆分为每个请求的 IPC 发送 | 多 tokenizer 部署时效率低下 | #42217 (open) |

**CI 状态** (#17050)：2 个失败，5 个不稳定，近期已修复 1130 个。

---

## 6. 应用开发者需要关注的事项

1. **投机解码用户**：如果在 GLM 模型上使用 EAGLE 配合 radix 缓存，需注意静默的前缀复用崩溃问题 — 监控你的缓存命中率 (#32459)。

2. **H20 / 并发请求工作负载**：8 并发请求时的 CUDA 非法内存访问问题可能需要临时解决方案（`CUDA_LAUNCH_BLOCKING=1` 或 `--disable-overlap-schedule`），直至确认根本原因 (#37633)。

3. **SM120 (RTX PRO 6000) 用户**：FlashAttention 4 后端在 GLM-5.3-Flash 上存在稳定性问题；使用 Triton 后端作为备选 (#42012)。

4. **DeepSeek V4 / V4.1 用户**：优化工作持续进行中；预计性能将继续提升。注意 SM120 上 FP8 分页 MQA logits 的内存开销 (#42146)。

5. **AMD ROCm 用户**：Quark MXFP4 MoE 模型现可通过 triton_kernels 在 RDNA (gfx1151) 上运行 — AMD GPU 支持取得良好进展 (#41389)。

6. **流式会话**：#42295 中的新行为强制流式会话使用 `UnifiedRadixCache`；不支持流式的树缓存将被拒绝。

---

*基于 GitHub 数据生成 — sgl-project/sglang | 2026-10-03*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English llama.cpp digest into Chinese (Simplified Chinese), following specific rules:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter, not literal word-for-word translation

Let me translate this carefully, maintaining all the formatting and structure.

Title: # llama.cpp Digest — 2026-10-03

I'll translate each section:

## Today's Highlights

The project continues advancing multi-backend optimization with Metal flash attention for F16 KV cache (b11362), Vulkan RMS norm subgroup reductions, and new Qwen4 exp mask optimizations. Notably, the server gains a `/v1/systemone` API endpoint while Qualcomm Hexagon gains q2_k/q3_k quantization support. Stability work includes Vulkan pipeline compile logging and Samsung GPU large matmul tile disablement.

Translation: 项目持续推进多后端优化，包括 Metal 的 F16 KV 缓存闪光注意力 (b11362)、Vulkan RMS norm 子群归约，以及新的 Qwen4 exp 掩码优化。值得注意的是，服务器新增了 `/v1/systemone` API 端点，Qualcomm Hexagon 获得了 q2_k/q3_k 量化支持。稳定性工作包括 Vulkan 管线编译日志记录和 Samsung GPU 大矩阵乘法块禁用。

---

## Releases & Breaking Changes

## 发布与重大变更

| Commit | Description |
|--------|-------------|
| [b11364](https://github.com/ggml-org/llama.cpp/commit/b11364) | Support for nimble decision model (#29844) |
| [b11362](https://github.com/ggml-org/llama.cpp/commit/b11362) | Metal: add tensor API flash attention kernel for F16 KV, supporting attention sinks, ALiBi, and logit softcap (#29570) |
| [b11361](https://github.com/ggml-org/llama.cpp/commit/b11361) | Server: add `/v1/systemone` API for models: laya, julia-1, lev, openjev, kev (#29818) |
| [b11351](https://github.com/ggml-org/llama.cpp/commit/b11351) | GGML: add `alloc_buffer_n` to buffer type interface (#23671) |

我注意到表格中列出了几个关键的提交和变更。第一个提交 b11364 增加了对 nimble 决策模型的支持。第二个提交 b11362 在 Metal 中添加了张量 API 闪光注意力内核，支持 F16 KV 缓存、注意力sink、ALiBi 和对数 softcap。第三个提交 b11361 在服务器端为多个模型添加了 `/v1/systemone` API。第四个提交 b11351 在 GGML 中为缓冲区类型接口增加了 `alloc_buffer_n`。

---

## New Model & Hardware Support

## 新模型与硬件支持

| Area | Update | PR/Commit |
|------|--------|-----------|
| **Model** | Runtime support for Prism Bonsai 2 27B | [#29600](https://github.com/ggml-org/llama.cpp/pull/29600) |
| **Model** | Support for Clef decision model (text-only) | [#29831](https://github.com/ggml-org/llama.cpp/pull/29831) |
| **Model** | Qwen3.5 embedding models in convert_hf_to_gguf | [#27920](https://github.com/ggml-org/llama.cpp/pull/27920) |
| **Metal** | Flash attention kernel for F16 KV with ALiBi/logit softcap | [b11362](https://github.com/ggml-org/llama.cpp/commit/b11362) |
| **Hexagon** | q2_k and q3_k quant type support | [b11345](https://github.com/ggml-org/llama.cpp/commit/b11345) |
| **Hexagon** | Rebuilt HTP skeletons installed | [b11347](https://github.com/ggml-org/llama.cpp/commit/b11347) |

该表格展示了多个模型和硬件支持领域的更新。Prism Bonsai 2 27B 获得了运行时支持，Clef 决策模型（仅文本）也可使用，Qwen3.5 嵌入模型现已整合到 convert_hf_to_gguf 工具中。Metal 平台的闪光注意力内核增加了 F16 KV 的 ALiBi 和对数 softcap 支持，Hexagon 则新增了 q2_k 和 q3_k 量化类型，并安装了重建的 HTP 框架。

---

## Performance & Optimization

## 性能与优化

| Backend | Optimization | PR/Commit |
|---------|--------------|-----------|
| **CUDA** | Multi-row TOP_K optimization with segmented radix sort | [#29883](https://github.com/ggml-org/llama.cpp/pull/29883) |
| **Vulkan** | RMS norm optimization using subgroup reductions (Intel Arc Pro B70, RTX 4060 TI tested) | [#29882](https://github.com/ggml-org/llama.cpp/pull/29882) |
| **Vulkan** | Disable large matmul tile on Samsung GPUs with 32KB shared memory (stability fix) | [b11355](https://github.com/ggml-org/llama.cpp/commit/b11355) |
| **Qwen4exp** | Optimized mask constructions | [b11352](https://github.com/ggml-org/llama.cpp/commit/b11352) |
| **MoE** | GPU-resident LRU cache for host-offloaded expert weights | [#27861](https://github.com/ggml-org/llama.cpp/pull/27861) |
| **SYCL** | IQ3 code reorder for Intel Arc Pro B70 | [#29107](https://github.com/ggml-org/llama.cpp/pull/29107) |
| **SYCL** | GLM MLA prefill acceleration with MKL flash attention | [#29171](https://github.com/ggml-org/llama.cpp/pull/29171) |
| **OpenVINO** | Update to 2026.4.1, MoE performance optimization | [#29852](https://github.com/ggml-org/llama.cpp/pull/29852) |

I see multiple performance improvements across different hardware platforms. The CUDA backend now optimizes multi-row TOP_K with segmented radix sort, while Vulkan introduces RMS norm optimizations using subgroup reductions. For stability, large matrix multiplication tiles are disabled on Samsung GPUs with limited shared memory. The Qwen4exp backend gets optimized mask constructions, and the MoE architecture gains a GPU-resident LRU cache for expert weights.

Intel's SYCL backend benefits from IQ3 code reordering and GLM MLA prefill acceleration using MKL flash attention. OpenVINO receives an update to version 2026.4.1, focusing on MoE performance improvements.

---

## Stability & Regressions

## 稳定性与回归

| Severity | Issue | Details |
|----------|-------|---------|
| **High** | [#27428](https://github.com/ggml-org/llama.cpp/issues/27428) | **Multi-GPU MTP bug**: draft-mtp roughly halves prompt processing on layer-split configs; single GPU unaffected (25 comments) |
| **High** | [#25207](https://github.com/ggml-org/llama.cpp/issues/25207) | **Vulkan Flash Attention regression**: Massive performance drop on AMD Strix Halo (20 comments) |
| **High** | [#29811](https://github.com/ggml-org/llama.cpp/issues/29811) | Assert at startup running Qwen 3.8 Flash with MTP (15 comments) |
| **Medium** | [#28134](https://github.com/ggml-org/llama.cpp/issues/28134) | SYCL backend aborts on Lunar Lake iGPU (Arc 140V) — device memory query fails |
| **Medium** | [#29786](https://github.com/ggml-org/llama.cpp/issues/29786) | Vulkan aborts with no diagnostic on Qualcomm Adreno driver |
| **Medium** | [#29521](https://github.com/ggml-org/llama.cpp/issues/29521) | macOS Metal OOM & Compute error (-3) on Gemma 4 31B with large n_ctx |
| **Low** | [#27792](https://github.com/ggml-org/llama.cpp/issues/27792) | CUDA MMQ mul_mat_id out-of-bounds read for MoE models |

I see a series of critical stability and regression issues across different hardware platforms. The Vulkan Flash Attention regression on AMD Strix Halo is particularly concerning, causing significant performance degradation. There's also an assertion error when running Qwen 3.8 Flash with MTP. Additionally, the SYCL backend is experiencing crashes on Lunar Lake iGPU due to device memory query failures, and there are macOS Metal memory-related errors with Gemma 4 31B models.

---

## What This Means for Application Developers

## 这对应用开发者意味着什么

1. **Metal users**: The new F16 KV flash attention kernel with ALiBi/logit softcap support enables better accuracy on newer attention schemes — update builds to b11362+ if using Gemma 4 or similar models.

2. **Multi-GPU inference with MTP**: Avoid the current multi-GPU layer-split + draft-mtp configuration (#27428) — fallback to single-GPU or disable MTP until the prompt processing regression is resolved.

3. **Vulkan on Samsung/Qualcomm**: Samsung GPUs with 32KB shared memory now have large matmul tiles disabled for stability. Qualcomm Adreno users should monitor #29786 — the driver causes silent aborts with no error output.

4. **Server API expansion**: The `/v1/systemone` endpoint (b11361) adds support for new model architectures — check the [model list](https://github.com/ggml-org/llama.cpp/pull/29818) if integrating LLaMA-compatible endpoints.

5. **SYCL/Intel**: Ongoing IQ3 reordering and GLM MLA optimizations (PRs #29107, #29171) improve Arc B70 performance; OpenVINO updated to 2026.4.1 with improved MoE support.

6. **Memory-constrained deployments**: The GPU-resident LRU cache for MoE expert weights (#27861) reduces host RAM bandwidth pressure when using `-ot ...exps=CPU` or `-ncmoe` configurations.

The Metal platform now supports advanced attention mechanisms with the new F16 KV flash attention kernel, offering improved accuracy for newer model architectures. Multi-GPU users should be cautious with MTP configurations, as current implementations show performance regressions. Vulkan users on Samsung and Qualcomm devices face stability challenges, with specific workarounds needed for different GPU memory configurations. Server API expansions provide more flexibility for LLaMA-compatible endpoint integrations, while SYCL and OpenVINO updates continue to enhance performance and hardware support for complex model architectures.</think>

# llama.cpp 每日简报 — 2026-10-03

## 今日要点

项目持续推进多后端优化，包括 Metal 的 F16 KV 缓存闪光注意力 (b11362)、Vulkan RMS norm 子群归约，以及新的 Qwen4 exp 掩码优化。值得注意的是，服务器新增了 `/v1/systemone` API 端点，Qualcomm Hexagon 获得了 q2_k/q3_k 量化支持。稳定性工作包括 Vulkan 管线编译日志记录和 Samsung GPU 大矩阵乘法块禁用。

---

## 发布与重大变更

| 提交 | 描述 |
|------|------|
| [b11364](https://github.com/ggml-org/llama.cpp/commit/b11364) | 支持 nimble 决策模型 (#29844) |
| [b11362](https://github.com/ggml-org/llama.cpp/commit/b11362) | Metal: 添加 F16 KV 的 tensor API 闪光注意力内核，支持 attention sinks、ALiBi 和 logit softcap (#29570) |
| [b11361](https://github.com/ggml-org/llama.cpp/commit/b11361) | Server: 为模型 laya、julia-1、lev、openjev、kev 添加 `/v1/systemone` API (#29818) |
| [b11351](https://github.com/ggml-org/llama.cpp/commit/b11351) | GGML: 为 buffer type 接口添加 `alloc_buffer_n` (#23671) |

---

## 新模型与硬件支持

| 领域 | 更新 | PR/提交 |
|------|------|---------|
| **模型** | Prism Bonsai 2 27B 运行时支持 | [#29600](https://github.com/ggml-org/llama.cpp/pull/29600) |
| **模型** | 支持 Clef 决策模型（纯文本） | [#29831](https://github.com/ggml-org/llama.cpp/pull/29831) |
| **模型** | convert_hf_to_gguf 支持 Qwen3.5 embedding 模型 | [#27920](https://github.com/ggml-org/llama.cpp/pull/27920) |
| **Metal** | F16 KV 闪光注意力内核，支持 ALiBi/logit softcap | [b11362](https://github.com/ggml-org/llama.cpp/commit/b11362) |
| **Hexagon** | q2_k 和 q3_k 量化类型支持 | [b11345](https://github.com/ggml-org/llama.cpp/commit/b11345) |
| **Hexagon** | 安装重建的 HTP 骨架 | [b11347](https://github.com/ggml-org/llama.cpp/commit/b11347) |

---

## 性能与优化

| 后端 | 优化 | PR/提交 |
|------|------|---------|
| **CUDA** | 使用分段基数排序优化多行 TOP_K | [#29883](https://github.com/ggml-org/llama.cpp/pull/29883) |
| **Vulkan** | 使用子群归约优化 RMS norm（Intel Arc Pro B70、RTX 4060 TI 已测试） | [#29882](https://github.com/ggml-org/llama.cpp/pull/29882) |
| **Vulkan** | 在 32KB 共享内存的 Samsung GPU 上禁用大矩阵乘法块（稳定性修复） | [b11355](https://github.com/ggml-org/llama.cpp/commit/b11355) |
| **Qwen4exp** | 优化掩码构建 | [b11352](https://github.com/ggml-org/llama.cpp/commit/b11352) |
| **MoE** | 主机卸载的专家权重的 GPU 常驻 LRU 缓存 | [#27861](https://github.com/ggml-org/llama.cpp/pull/27861) |
| **SYCL** | Intel Arc Pro B70 的 IQ3 代码重排序 | [#29107](https://github.com/ggml-org/llama.cpp/pull/29107) |
| **SYCL** | 使用 MKL 闪光注意力加速 GLM MLA 预填充 | [#29171](https://github.com/ggml-org/llama.cpp/pull/29171) |
| **OpenVINO** | 更新至 2026.4.1，MoE 性能优化 | [#29852](https://github.com/ggml-org/llama.cpp/pull/29852) |

---

## 稳定性与回归

| 严重程度 | 问题 | 详情 |
|----------|------|------|
| **高** | [#27428](https://github.com/ggml-org/llama.cpp/issues/27428) | **多 GPU MTP 缺陷**：draft-mtp 在 layer-split 配置下使提示处理速度降低约一半；单 GPU 不受影响（25 条评论） |
| **高** | [#25207](https://github.com/ggml-org/llama.cpp/issues/25207) | **Vulkan 闪光注意力回归**：AMD Strix Halo 性能大幅下降（20 条评论） |
| **高** | [#29811](https://github.com/ggml-org/llama.cpp/issues/29811) | 使用 MTP 运行 Qwen 3.8 Flash 时启动断言失败（15 条评论） |
| **中** | [#28134](https://github.com/ggml-org/llama.cpp/issues/28134) | SYCL 后端在 Lunar Lake iGPU（Arc 140V）上中止 — 设备内存查询失败 |
| **中** | [#29786](https://github.com/ggml-org/llama.cpp/issues/29786) | Qualcomm Adreno 驱动的 Vulkan 无诊断信息中止 |
| **中** | [#29521](https://github.com/ggml-org/llama.cpp/issues/29521) | macOS Metal 在大 n_ctx 的 Gemma 4 31B 上 OOM 和计算错误 (-3) |
| **低** | [#27792](https://github.com/ggml-org/llama.cpp/issues/27792) | MoE 模型的 CUDA MMQ mul_mat_id 越界读取 |

---

## 这对应用开发者意味着什么

1. **Metal 用户**：新的 F16 KV 闪光注意力内核支持 ALiBi/logit softcap，在较新的注意力机制上可实现更高精度 — 如果使用 Gemma 4 或类似模型，请更新至 b11362+ 版本。

2. **多 GPU 推理 + MTP**：避免当前的 multi-GPU layer-split + draft-mtp 配置（#27428）— 请回退到单 GPU 或禁用 MTP，直到提示处理回归问题解决。

3. **Samsung/Qualcomm 上的 Vulkan**：32KB 共享内存的 Samsung GPU 现已禁用大矩阵乘法块以确保稳定性。Qualcomm Adreno 用户应关注 #29786 — 该驱动会导致静默中止且无错误输出。

4. **Server API 扩展**：`/v1/systemone` 端点（b11361）新增了对新模型架构的支持 — 如需集成 LLaMA 兼容端点，请查阅[模型列表](https://github.com/ggml-org/llama.cpp/pull/29818)。

5. **SYCL/Intel**：正在进行的 IQ3 重排序和 GLM MLA 优化（PR #29107、#29171）提升了 Arc B70 性能；OpenVINO 已更新至 2026.4.1，改进 MoE 支持。

6. **内存受限的部署**：MoE 专家权重的 GPU 常驻 LRU 缓存（#27861）在使用 `-ot ...exps=CPU` 或 `-ncmoe` 配置时可减少主机内存带宽压力。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest from English to Chinese. I need to:
1. Output ONLY the translation
2. No preamble, no explanation, no markdown fences
3. Preserve the Markdown structure exactly
4. Keep URLs, numbers, issue/PR references, code identifiers as-is
5. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully while maintaining the structure and technical accuracy.</think>

# Ollama 动态 — 2026-10-03

## 1. 今日要闻

Ollama 项目正在处理一系列云服务可靠性问题和核心推理引擎的改进。值得注意的是，**Ollama Cloud Pro 用户报告所有云模型故障率高达 95%**，同时 v0.35.1 的 Windows Authenticode 签名问题（第 18765 号）也在今日新增。在开发方面，团队正在推进 MLX 后端的工作（Strands Decider 实现、GPU 内存处理修复），并加强 OpenAI 兼容 API 的可靠性。

---

## 2. 发布与重大变更

**暂无** — 过去 24 小时内无版本发布。

---

## 3. 新模型与硬件支持

| 项目 | 描述 | PR/Issue |
|------|-------------|----------|
| **MLX 中的 GraniteForCausalLM** | 在 MLX 后端和 mlxrunner 中添加了对 IBM 的 Granite 4.1/4.2 密集语言模型的支持 | [#17972](https://github.com/ollama/ollama/pull/17972) |
| **Mac MLX 上的 Qwen 3.8 27b-mxfp8** | 通过 MLX 在 Apple Silicon 上支持 Qwen 3.8 27b 的 MXFP8 量化 | [#18754](https://github.com/ollama/ollama/issues/18754) |
| **多 GPU 运行时安装程序** | 功能请求：支持同时下载 ROCm 和 CUDA 运行时，适用于混合 GPU 系统（如 7800XT + 4060Ti） | [#18545](https://github.com/ollama/ollama/issues/18545) |

---

## 4. 性能与优化

| 领域 | 状态 | 详情 |
|------|--------|---------|
| **MLX GPU 利用率** | *问题报告* | M4 Pro 未充分利用 GPU 处理 Qwen 3.8 27b-mxfp8 — 对比 0.40.0 与 0.35.1-rc2 版本 | [#18754](https://github.com/ollama/ollama/issues/18754) |
| **MLX 内存分页** | *进行中* | 每次请求后约 2 秒解绑权重，导致下次请求时重新调页延迟 | [#18744](https://github.com/ollama/ollama/issues/18744) |
| **ROCm VRAM 驱逐** | *问题* | 驱逐模型时忽略统一 VRAM — 尽管有可用内存，却过早驱逐旧模型 | [#18756](https://github.com/ollama/ollama/issues/18756) |
| **llama.cpp 更新** | *已合并* | 版本从 `b11232` 升级到 `b11351` | [#18761](https://github.com/ollama/ollama/pull/18761) |
| **MLX 版本升级** | *已合并* | MLX 库已更新 | [#18720](https://github.com/ollama/ollama/pull/18720) |

---

## 5. 稳定性与回归问题

### 严重

| Issue | 严重程度 | 状态 | 修复 PR |
|-------|----------|--------|--------|
| **Ollama Cloud Pro：95% 故障率** | **严重** | 待处理 | — |
| **Windows 安装包 HashMismatch**（v0.35.1 Authenticode） | **严重** | 待处理 | — |

### 高

| Issue | 严重程度 | 状态 | 修复 PR |
|-------|----------|--------|--------|
| **Llama3.2-vision 在最新更新后损坏** | 高 | 待处理 | — |
| **Intel UHD 0x4626 在 Windows 上未被 Vulkan 后端检测到** | 高 | 待处理 | — |

### 中

| Issue | 严重程度 | 状态 | 修复 PR |
|-------|----------|--------|--------|
| **工具调用结果顺序错误** — `/v1/chat/completions` 按位置而非 `tool_call_id` 排序 | 中 | 待处理 | [#18763](https://github.com/ollama/ollama/pull/18763) |
| **工具调用标签在分块边界丢失** — DeepSeek3/Cogito/LFM2 解析器 | 中 | 待处理 | [#18759](https://github.com/ollama/ollama/pull/18759) |
| **`ollama create --quantize` 泄漏未引用的 blob**（每次导入约 50GB） | 中 | 待处理 | — |
| **Qwen3.8:27b 文档中未注明 Ollama 版本要求** | 中 | 待处理 | — |

---

## 6. 这对应用开发者的影响

1. **避免使用 v0.35.1 Windows 安装包** — Authenticode 签名验证失败。如果在 Windows 上自动化安装 Ollama，可能需要回退到 v0.34.x 或暂时禁用签名检查，直至问题修复。

2. **工具调用可靠性正在改善** — 两个 PR（第 18763 号、第 18759 号）解决了工具结果排序和分块边界问题。如果你在 OpenAI 兼容 API 中使用并行工具调用，这些修复将减少归因错误。

3. **MLX 内存行为有变化** — 如果在 Apple Silicon 上运行，模型权重将在每次请求后约 2 秒被取消固定。对于需要重复推理的延迟敏感型应用，建议保持一个预热请求或预留重新调页的时间。

4. **云服务可靠性问题** — 如果你使用 Ollama Cloud Pro，所有模型 95% 的故障率表明服务端存在问题。请关注第 15453 号 issue 获取更新，或考虑回退到本地推理。

5. **视觉模型可能已损坏** — Llama3.2-vision 在近期更新中出现问题。如果你的应用使用视觉功能，请仔细测试或锁定到已知可用的 Ollama 版本。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM digest into Chinese. I need to:
1. Keep all markdown structure exactly as is
2. Keep URLs, code, numbers, issue numbers, etc. verbatim
3. Use natural technical Chinese - like a Chinese developer newsletter
4. No preamble, no explanation, no markdown fences

Let me translate this carefully, maintaining the structure and making it read naturally in Chinese.</think>

# LiteLLM 动态 — 2026-10-03

## 1. 今日要闻

Docker 镜像现已完成 **cosign** 签名验证 — 所有 LiteLLM 发布版本均使用统一密钥（`0112e53`）签名。与此同时，项目持续扩展多提供商支持，新增 **Reka** 和 **QuickSilver Pro** 作为原生 OpenAI 兼容提供商。v1.82.3 中存在严重预算执行绕过漏洞（#26672，20 条评论）— 如果你运行自托管 proxy 部署，值得关注。

---

## 2. 版本更新与破坏性变更

| 版本 | 说明 | PR/提交 |
|------|------|---------|
| **v1.105.0-dev.2** | 开发构建版 | [GitHub](https://github.com/BerriAI/litellm/releases/tag/v1.105.0-dev.2) |
| **Cosign 签名** | 所有 Docker 镜像现已完成签名。使用 `cosign verify` 配合提交 `0112e53` 中的密钥进行验证。 | [提交](https://github.com/BerriAI/litellm/commit/0112e53046018d726492c814b3644b7d376029d0) |

---

## 3. 新模型与硬件支持

- **Reka** — 新增原生支持，作为 OpenAI 兼容提供商（`reka/`）。读取 `REKA_API_KEY` 和 `REKA_API_BASE` 环境变量。 [#44278](https://github.com/BerriAI/litellm/pull/44278)
- **QuickSilver Pro** — 新增为 JSON 配置的 OpenAI 兼容提供商。 [#44303](https://github.com/BerriAI/litellm/pull/44303)
- **CoralBricks** — 新增提供商支持，包含 GLM 5.3、GLM 5.3 Flash、DeepSeek V4.1 Flash 型号，内置成本追踪。 [#35957](https://github.com/BerriAI/litellm/pull/35957)
- **Amazon Nova 2 Pro (Preview)** — 定价已修正为标准层级（$1.25 / $10 每百万 tokens）。 [#44302](https://github.com/BerriAI/litellm/pull/44302)
- **xAI Grok Imagine** — 新增图像生成、编辑和视频下载的原生支持。 [#40238](https://github.com/BerriAI/litellm/pull/40238)
- **Anthropic Sonnet 5.5** — 修复 thinking 禁用映射：`disabled` 现已映射至 `between_tools`（即该型号文档中记载的关闭等效状态）。 [#44299](https://github.com/BerriAI/litellm/pull/44299)
- **Claude Code → GPT-5** — 修复 Azure GPT-5 自定义部署上 `reasoning_effort='none'` 的能力门控问题。 [#31243](https://github.com/BerriAI/litellm/issues/31243)

---

## 4. 性能与优化

- **Prompt-cache 资格判定** — 停止使用完整对话 tokenization 来判断缓存资格。此举应可降低大型聊天历史记录缓存检查的延迟。 [#44221](https://github.com/BerriAI/litellm/pull/44221)
- **Postgres span 命名** — OTEL span 现按操作和表名命名（如 `db.operation.name`），而非使用通用的 Python 辅助函数名。改善了追踪仪表盘的可观测性。 [#44240](https://github.com/BerriAI/litellm/pull/44240)
- **OTEL 缓存 token 计数** — 缓存读取/写入的 token 计数现作为 span 属性按 OTEL GenAI 语义约定导出。 [#43992](https://github.com/BerriAI/litellm/issues/43992)
- **Azure SDK 重试限制** — 修复缓存的 SDK 客户端忽略 `max_retries` 的问题 — 请求零重试的调用可能复用配置为重试的客户端。现已尊重每调用重试限制。 [#44204](https://github.com/BerriAI/litellm/pull/44204)
- **CI 并行化** — 安全测试现并行运行，以缩短 CI 总体耗时。 [#44146](https://github.com/BerriAI/litellm/pull/44146)

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|------|------|---------|
| **高** | **预算执行被绕过** — v1.82.3 中 key/user 的 `max_budget` 在超出限额后仍未被执行。 | [开启 #26672](https://github.com/BerriAI/litellm/issues/26672) | — |
| **高** | **REDIS_CLUSTER_NODES 导致 proxy 关闭失败** — 启用集群模式时优雅关闭会挂起。 | [开启 #31206](https://github.com/BerriAI/litellm/issues/31206) | — |
| **中** | **MCP 工具自动执行被静默跳过** — `ollama_chat`/`base` 型号即使设置 `require_approval: "never"` 也会跳过服务端 MCP 工具执行。 | [开启 #31911](https://github.com/BerriAI/litellm/issues/31911) | — |
| **中** | **支出日志记录 $0** — 未内置于成本映射表的自定义型号在支出日志中 `total_cost` 记录为 0，尽管 `estimated_cost` 正确。 | [开启 #35691](https://github.com/BerriAI/litellm/issues/35691) | — |
| **中** | **RateLimitError 混淆计费与可重试** — `insufficient_quota`（计费失败）被当作可重试的 429 处理，导致计费错误时陷入重试循环。 | [开启 #32785](https://github.com/BerriAI/litellm/issues/32785) | — |
| **中** | **anyio 依赖版本下限缺失** — 未声明版本下限，导致 LiteLLM 暴露于已知的锁等待者死锁漏洞（agronholm/anyio#1145）。 | [开启 #44048](https://github.com/BerriAI/litellm/issues/44048) | — |
| **中** | **自定义定价被低估 6 倍** — ultrafast 层级的部署覆盖了标准费率但仍按标准定价计费。 | [关闭 #43868](https://github.com/BerriAI/litellm/issues/43868) | — |
| **低** | **OTLP span 事件被丢弃** — 带有嵌套事件的通用 OTLP span 在写入 ClickHouse 前丢失事件名/属性。 | [开启 #44274](https://github.com/BerriAI/litellm/issues/44274) | — |
| **低** | **Bedrock 跨区域定价无法生效** — 区域特定定价因查找顺序问题从未匹配，始终回退至基础型号。 | [关闭 #24669](https://github.com/BerriAI/litellm/issues/24669) | — |

---

## 6. 对应用开发者的影响

- **如果你使用自定义型号定价或预算限制** — 确认你的部署版本未受 v1.82.3 预算绕过漏洞影响。修复发布后考虑升级。
- **如果你使用 Ollama 配合 MCP 工具** — 服务端自动执行目前对 `ollama_chat`/`base` 型号不可用。你需要在客户端处理工具执行或等待修复。
- **如果你在集群模式下使用 Redis** — 注意 proxy 优雅关闭可能会挂起。使用 `REDIS_CLUSTER_NODES` 的部署需要做好规划。
- **如果你按团队追踪成本** — 新的团队所有标签功能（#44289）可防止跨团队标签污染支出日志。多租户部署值得采用。
- **如果你需要细粒度向量存储访问控制** — 新增的 `vector_store_deny_by_default` 选配功能（#44244）提供了向量存储的最小权限访问控制。
- **如果你使用 Azure 并配置了重试** — 确认你的显式重试设置是否生效（近期修复已合并至 #44204）。

---

*基于 GitHub 数据生成 — BerriAI/litellm @ 2026-10-03*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate this Unsloth digest from English to Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, issue/PR references, project names, etc. as-is
4. Use natural technical Chinese - like a Chinese developer newsletter

Let me translate this carefully while keeping all the formatting and technical elements intact.</think>

# Unsloth 速报 — 2026-10-03

## 1. 今日要闻

Unsloth Studio 持续快速迭代，多个 PR 聚焦于模型服务、微调体验和模型支持。最值得关注的是 **tensor-split 解码性能回退**（自 b10715-mix-86bd2d3 版本后变慢 2.9 倍），同时社区传来好消息：**Unsloth Desktop 现已纳入 Nixpkgs**，为 Linux 用户提供了更多安装选择。

---

## 2. 发布与重大变更

过去 24 小时内无发布。

---

## 3. 新模型与硬件支持

| 模型/功能 | 状态 | PR/Issue |
|---------------|--------|----------|
| **Qwen3-TTS** 微调支持 | 功能请求中 | [#3951](https://github.com/unslothai/unsloth/issues/3951) |
| **Qwen3-VL** 加载 LoRA 适配器 + vllm | Bug（调查中） | [#3560](https://github.com/unslothai/unsloth/issues/3560) |
| **Laya decision models** | 现已支持微调 | [#12585](https://github.com/unslothai/unsloth/pull/12585) |
| **多个常驻 GGUF 模型** | 开发中 | [#10876](https://github.com/unslothai/unsloth/pull/10876) |
| **Unsloth Desktop → Nixpkgs** | ✅ 已上线 | [#11135](https://github.com/unslothai/unsloth/issues/11135) |

---

## 4. 性能与优化

| 领域 | 变化 | 影响 | PR/Issue |
|------|--------|--------|----------|
| **Tensor-split 解码** | 回退：自 `b10715-mix-86bd2d3` 后变慢 2.9 倍 | 48 t/s vs 115 t/s（RTX 5070 Ti） | [#12468](https://github.com/unslothai/unsloth/issues/12468) |
| **LoRA MLP + Activation QAT** | 修复：在 up/down 投影中保留伪量化器 | QAT 微调的正确性 | [#12558](https://github.com/unslothai/unsloth/pull/12558) |
| **基准测试页面** | 功能开发中：GGUF 配置扫描 UI | 速度/质量优化界面 | [#11808](https://github.com/unslothai/unsloth/pull/11808), [#11646](https://github.com/unslothai/unsloth/issues/11646) |
| **OpenAI 兼容 API 延迟** | 回退：每个 GGUF 请求增加 +1.2s | 比 bundled llama-server 慢 3-5 倍 | [#12364](https://github.com/unslothai/unsloth/issues/12364) |

---

## 5. 稳定性与回退

| 严重程度 | 问题 | 详情 | 状态 |
|----------|-------|---------|--------|
| **高** | **微调时 OOM** — VRAM 占用超出预期，导致大模型 OOM | 23 条评论，持续调查中 | [#4504](https://github.com/unslothai/unsloth/issues/4504) |
| **高** | **Qwen3.8-27B bnb-4bit 崩溃** — 首次前向传播时 shape 错误 | Checkpoint 缺陷，需重新生成 | [#9867](https://github.com/unslothai/unsloth/issues/9867) |
| **中** | **Tool 调用随机失败** | 近期回退 | [#12435](https://github.com/unslothai/unsloth/issues/12435) |
| **中** | **多卡微调** — Studio 仅使用一张 GPU | 功能缺失 | [#5764](https://github.com/unslothai/unsloth/issues/5764) |
| **低** | **Companion-device mask widening 跳过** — `--mmproj-device CUDA1` 被拒绝 | 已保存 gpu_ids 的 bug | [#12467](https://github.com/unslothai/unsloth/issues/12467) |

---

## 6. 对应用开发者的意义

1. **部署选项增多** — Unsloth Desktop 现可通过 `nix` 在 NixOS/Nix 发行版上安装（[#11135](https://github.com/unslothai/unsloth/issues/11135)）。

2. **GGUF 服务能力增强** — 多常驻 GGUF 模型 PR（[#10876](https://github.com/unslothai/unsloth/pull/10876)）将支持同时运行多个 GGUF 模型，每个模型运行在独立的 llama.cpp 进程中。管理模型集群时，这将简化多租户配置。

3. **警惕回退问题** — tensor-split 解码变慢（[#12468](https://github.com/unslothai/unsloth/issues/1244)）和 OpenAI API 延迟增加（[#12364](https://github.com/unslothai/unsloth/issues/12364)）会影响推理吞吐。如果你在多卡 GGUF 推理或使用 OpenAI 兼容端点，生产部署前请务必进行基准测试。

4. **微调 VRAM 问题依然存在** — Issue #4504 报告微调 VRAM 占用远超预期。如果大模型上遇到 OOM，这是一个已知问题。

5. **Tool 调用持续改进** — 多个 PR 改进 Studio 中的工具使用：改进工具调用在历史记录中的保留（[#12574](https://github.com/unslothai/unsloth/pull/12574)）、修复工具结果的 JSON 导出（[#12579](https://github.com/unslothai/unsloth/pull/12579)）、以及修复 Gemma 4 基于工具结果训练的问题（[#12575](https://github.com/unslothai/unsloth/pull/12575)）。这些改进提升了代理工作流的可靠性。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*