# AI 基础设施日报 2026-11-01

> 生成时间: 2026-11-01 01:24 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this report into Chinese, following specific rules:
- Output ONLY the translation, no preamble, no explanation
- Preserve Markdown structure exactly
- Keep technical terms, project names, code references as-is
- Use natural technical Chinese register

Let me translate this carefully, maintaining all the structure and technical accuracy.</think>

# 跨项目对比报告：AI推理栈全景

## 1. 生态系统概览

AI推理栈正在硬件-软件层面快速分化。当前活动呈现两条清晰路线：**性能优化**主导vLLM和SGLang（聚焦大规模服务），而**开发者体验和可移植性**则是llama.cpp、Ollama和Unsloth的重心。LiteLLM作为编排/网关层统一这些引擎。所有六个项目的共同主题：ROCm AMD GPU支持正在加速（vLLM和SGLang均针对gfx950/MI355X进行优化），多模态推理正在成为一等公民（vLLM的ViT CUDA Graphs，Unsloth的CLI视觉支持），生产环境加固持续进行（LiteLLM预算强制执行，异步调度修复）。

---

## 2. 活动对比

| 项目 | 问题（开放） | PRs（已合并/活跃） | 发布（24小时内） | 专注领域 |
|---------|--------------|---------------------|----------------|------------|
| **vLLM** | 7个关键/稳定性问题 | 10+ PRs（ROCm、FlashInfer、PDL） | 0 | 服务引擎 |
| **SGLang** | 6个稳定性问题（PP、基准测试） | 8 PRs（NCCL 2.30、内存） | 0 | 服务引擎 |
| **llama.cpp** | 5个开放问题 | 7个发布（b12018–b12024），10+ PRs | 7 | 本地运行时 |
| **Ollama** | 10个问题（Windows为主） | 8 PRs（MLX、内存、采样器） | 0 | 本地运行时 |
| **LiteLLM** | 3个开放（流式传输、文件路由） | 7 PRs（Redis、OAuth、预算） | 2 | 网关/代理 |
| **Unsloth** | 8个问题（GPU bug、UI） | 14 PRs（UI优化、性能） | 0 | 训练+本地推理 |

---

## 3. 模型支持竞赛

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---------------------|------|--------|-----------|--------|---------|
| **DeepSeek-V4/V4.1** | ✅（SM8x待处理） | ✅（gfx950优化） | ❌ | ❌ | ❌ |
| **Qwen3.8（MoE）** | ✅（ROCm gfx950） | ✅（ROCm） | ❌ | ❌ | ❌ |
| **Gemma 4** | ✅（有回归） | ❌ | ✅（测试支持） | ✅（Windows有bug） | ❌ |
| **MiniMax-M3.1** | ❌ | ✅（GB300文档） | ❌ | ❌ | ❌ |
| **Kimi-K3** | ✅（ROCm） | ❌ | ❌ | ❌ | ❌ |
| **Metis-1.6** | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Llama 4** | ❌ | ❌ | ✅（仅bf16） | ❌ | ❌ |
| **视觉语言模型（VL）** | ViT CUDA Graph（进行中） | ❌ | ❌ | ✅（CLI图像） | ❌ |
| **Ascend NPU** | ❌ | ❌ | ❌ | ❌ | RFC（#10772） |

**领先者**：llama.cpp在模型广度上领先（Metis、Gemma 4、Llama 4），但vLLM/SGLang在生产规模服务上领先（MoE优化、ROCm）。Unsloth是唯一追求华为Ascend NPU的项目。

---

## 4. 性能前沿

| 优化领域 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|--------------------|------|--------|-----------|--------|---------|
| **KV缓存/分页注意力** | ✅ 动态PDL（Hopper/Blackwell） | ✅ | ✅ | ❌ | ❌ |
| **量化** | ✅ FP8、INT4 | ✅ | ✅ IQ3、Q4/Q5（SYCL） | ✅ Q4_K_M（已请求） | ❌ |
| **多模态** | ViT CUDA Graph（RFC） | ❌ | 组归一化（WebGPU） | ✅ 语音缓存修复 | ❌ |
| **分布式服务** | ✅ 异步调度 | ✅ NCCL 2.30 EP | ❌ | ❌ | ✅ PP融合优化器 |
| **MoE内核** | ✅ ROCm融合 | ✅ NCCL EP A2A | ❌ | ❌ | ❌ |
| **内存管理** | ✅ 提示验证 | ✅ 延迟异步加载 | ❌ | ✅ LFM3-Omni修复 | ❌ |
| **CPU推理** | ❌ | ❌ | ✅ | ✅ | ❌ |

**前沿**：vLLM和SGLang在分布式服务（PP、MoE、NCCL）上并驾齐驱。llama.cpp在量化格式和CPU/向后兼容性上占主导。Ollama和Unsloth聚焦MLX（苹果芯片）和本地运行时效率。

---

## 5. 层级定位

| 层级 | 项目 |
|-----|----------|
| **训练/微调** | Unsloth |
| **本地运行时** | llama.cpp、Ollama |
| **服务引擎** | vLLM、SGLang |
| **网关/代理** | LiteLLM |
| **混合（服务+本地）** | Ollama（基于CLI）、Unsloth（Studio） |

**关键差异**：

- **vLLM / SGLang**：为多GPU集群服务设计；聚焦吞吐量、延迟和推理规模化。均针对Kubernetes/部署的AI API。
- **llama.cpp**：为本地/CPU推理设计；支持最广泛的硬件（CPU、GPU、NPU、移动端）。无服务器——作为库运行。
- **Ollama**：封装引擎（llama.cpp、vLLM后端）为简单CLI/守护进程。面向希望无需基础设施复杂性即可运行本地LLM的开发者。
- **LiteLLM**：位于任何后端之前（vLLM、Ollama、OpenAI、Anthropic、Azure）并提供统一API、速率限制、认证、可观测性。纯代理。
- **Unsloth**：独特定位——训练模型（通过LlamaFactory集成进行4位LoRA）*并*提供Studio UI用于本地推理。连接训练→推理。

---

## 6. 趋势信号

### 基础设施工程师应关注

1. **ROCm AMD GPU正在成为一等公民**：vLLM和SGLang都在大力投资gfx950/MI355X优化。如果你在AMD上部署（常见于成本敏感或中国部署场景），预计Q1–Q2 2026年内ROCm将可用于生产。

2. **多模态正从实验走向生产**：vLLM的ViT CUDA Graph RFC表明视觉语言模型即将达到与纯文本相当的吞吐量。Unsloth的CLI图像支持和llama.cpp的WebGPU组归一化内核都表明这一趋势是普遍性的。

3. **NCCL 2.30是MoE的阶梯式进步**：SGLang的NCCL EP后端用于MoE all-to-all显著降低了解码延迟。分布式MoE服务将在整个生态系统中改进。

4. **LiteLLM正在成为标准代理层**：预算强制执行、密钥撤销、基于Redis的速率限制正在成熟。如果你运行多模型API，LiteLLM越来越成为默认选择。

5. **Windows支持落后**：Ollama、llama.cpp和Unsloth都显示Windows特定回归（连接重置、GPU bug、UI闪烁）。Windows团队应在生产前验证工作负载。

6. **苹果芯片MLX正在成熟**：Ollama和Unsloth正在修复内存泄漏、token重复限制和CUDA库加载问题。MLX可用于本地开发，但尚不适用于高吞吐量服务。

### 应用/Agent开发者应关注

- **不要假设模型默认值会被遵守**（LiteLLM #14052已修复）——当需要一致性时，始终明确设置temperature/top_p。
- **JSON工具调用在各引擎间很脆弱**：Ollama的通用解析器和vLLM的HYV4都有边缘情况。
- **流式传输边缘情况依然存在**：Amazon Nova（LiteLLM）、OpenRouter（LiteLLM）和Bedrock guardrails（LiteLLM）在本周期都有流式传输bug修复。
- **如果使用量化投机解码**（llama.cpp），关注#25618——与非量化运行的分歧是已知问题。

---

*报告基于2026年11月1日vllm-project/vllm、sgl-project/sglang、ggml-org/llama.cpp、ollama/ollama、BerriAI/litellm和unslothai/unsloth的GitHub活动生成。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM digest into Simplified Chinese. I need to:
1. Translate the content while preserving the exact Markdown structure
2. Keep all technical terms, URLs, issue numbers, code identifiers as-is
3. Use natural technical Chinese register
4. Output ONLY the translation without any preamble or explanation

Let me translate section by section while maintaining the structure.</think>

# vLLM Digest — 2026-11-01

## 1. 今日要闻

vLLM 项目持续在 ROCm AMD GPU 优化（gfx950/MI355X）、多模态 ViT CUDA Graph 支持以及 DeepSeek 模型适配方面保持活跃开发。多项针对 ROCm 预填充注意力和内存管理的性能优化 PR 已合并，同时社区报告了异步调度和 Gemma 4 FP8 量化相关的回归问题，需要关注。

## 2. 发布与破坏性变更

*过去 24 小时内无新发布。*

## 3. 新模型与硬件支持

| 模型 / 硬件 | 描述 | Issue / PR |
|-------------|------|------------|
| **DeepSeek-V4-Flash / V4-Flash-0731** | SM8x（安培 A100/A800，RTX 30xx）支持请求 — 当前仅支持 Hopper/Blackwell | [#50576](https://github.com/vllm-project/vllm/issues/50576) |
| **ViT Full CUDA Graph** | 为视觉 Transformer 编码器启用 CUDA Graph 的 RFC 追踪器（Qwen3-VL、GLM-V、Kimi K2.5），以提升多模态服务性能 | [#38175](https://github.com/vllm-project/vllm/issues/38175) |
| **Kimi-K3 on ROCm** | AMD GPU 功能适配与性能优化追踪 | [#50682](https://github.com/vllm-project/vllm/issues/50682) |
| **Qwen3.8-2.4T-A95B** | ROCm gfx950/MI355X 优化方案与追踪 | [#57149](https://github.com/vllm-project/vllm/issues/57149) |
| **Qwen3.8-Flash-Next** | ROCm amd/Qwen3.8-Flash-Next-Quark-MXFP4 优化（MXFP4 MoE，GatedDeltaNet）| [#59575](https://github.com/vllm-project/vllm/issues/59575) |

## 4. 性能优化

| 领域 | 变更 | 详情 | PR / Issue |
|------|------|------|------------|
| **ROCm 预填充注意力** | FP8 Triton 内核 | 在启用 FP8 KV 缓存时，加速 gfx942 上的预填充/扩展注意力，使用 per-tensor FP8 Q/K/V | [#62913](https://github.com/vllm-project/vllm/pull/62913) |
| **ROCm 滑动窗口前缀预填充** | 跳过遮罩瓦片 | Triton 内核从第一个可到达的瓦片开始计算，而非瓦片零，减少计算浪费 | [#63867](https://github.com/vllm-project/vllm/pull/63867) |
| **GLM-5.3-Flash（ROCm）** | 消除 int32/int64 转换 | 移除 kpool 稀疏索引器中的冗余拷贝 — 消除每次预填充调用的 GPU→CPU 同步 | [#63910](https://github.com/vllm-project/vllm/pull/63910) |
| **GLM-5.3-Flash（ROCm）** | Chunk KDA 优化 | 向 chunk_kda 传递预计算的 chunk 索引，避免重复的 `prepare_chunk_indices` 调用 | [#63072](https://github.com/vllm-project/vllm/pull/63072) |
| **模型加载器** | FastSafetensors 内存绑定 | 使用 0.4 拟合规划器限制峰值内存，防止大 shard 时的 OOM | [#55985](https://github.com/vllm-project/vllm/pull/55985) |
| **动态 PDL** | Hopper/Blackwell 低延迟 | 启用 TRTLLM/TORCHINDUCTOR PDL 标志，用于融合 QKV 投影和 torch.compile 内核 | [#40543](https://github.com/vllm-project/vllm/issues/40543) |
| **KV 卸载** | 混合步骤异步加载 | 在混合 decode/prefill 步骤中延迟异步加载，防止阻塞 | [#64236](https://github.com/vllm-project/vllm/pull/64236) |
| **FlashInfer** | All-reduce 大小覆盖 | 遵守显式 `fi_allreduce_fusion_max_size_mb` 配置 | [#53852](https://github.com/vllm-project/vllm/pull/53852) |

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 描述 | 修复 PR？|
|----------|------|------|----------|
| **高** | 异步调度 + 抢占崩溃 | V1 Model Runner 启用异步调度后，`_update_states` 中出现 KeyError `all_token_ids[req_id]`（Ascend 910B NPU）| — |
| **高** | Gemma 4 + FP8 量化崩溃 | 图像请求自 v0.23.0 起崩溃 — FP8 转换后的像素值到达量化后的 patch_embedder；v0.22.0 正常 | — |
| **中** | Hybrid Mamba + KV connector | 每组前缀命中发散与 vLLM 引擎崩溃 | — |
| **中** | CUDA 设备端断言 | Qwen3.6-35B-A3B-NVFP4 + MTP 在 nightly 版本上崩溃 | — |
| **中** | INCConfig 混合 INT4+FP8 | AutoRound 检查点输出乱码 — weight_scale_inv 未加载 | — |
| **中** | XPU compressed-tensors MoE | WNA16 MoE selector 忽略 XPU 平台，在 Marlin 路径上崩溃 | — |
| **低** | ROCm kernel_paged_attention_2d | gfx950 长上下文 decode 时非法内存访问（hipErrorLaunchFailure）| — |
| **低** | 工具调用流式输出 | HYV4 解析器中重复参数键的流式 JSON 无效 | [#60788](https://github.com/vllm-project/vllm/pull/60788) |

## 6. 应用开发者需要关注的事项

- **多模态工作负载**：ViT CUDA Graph 支持正在开发中 — Qwen3-VL、GLM-V 和 Kimi K2.5 模型合并后预计将获得显著的预填充吞吐量提升。
- **AMD ROCm 用户**：gfx950/MI355X（Qwen3.8、GLM-5.3）持续优化中 — 预期预填充 decode 吞吐量将有所改善。请关注 [#57149](https://github.com vllm-project/vllm/issues/57149) 获取优化路线图。
- **Ampere 上的 DeepSeek 用户**：尚不支持 SM8x — 关注 [#50576](https://github.com/vllm-project/vllm/issues/50576) 了解适配时间表。
- **Gemma 4 + FP8**：如使用在线 FP8 量化，请避免 v0.23.0；该回归问题影响图像输入。
- **异步调度**：在当前 main 分支上使用异步调度加抢占的应用应在负载下充分测试 — [#63549](https://github.com/vllm-project/vllm/issues/63549) 报告了负载下的崩溃问题。
- **工具调用**：HYV4 解析器中并行工具调用的流式边界情况正在修复中 — 如使用函数调用功能，请确保使用最新版本。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Digest into Simplified Chinese, following the detailed translation rules provided. Let me go through the content carefully and translate it while preserving the structure, formatting, and technical terminology.

Key points to remember:
1. Keep headings, tables, lists, etc. in exact same format
2. Preserve URLs, issue numbers, code blocks, numbers, dates
3. Don't translate project names, repo slugs, usernames, version tags, file paths, API/config identifiers
4. Use natural technical Chinese register
5. Output ONLY the translation, no preamble or explanation
6. No markdown fences around the whole output

Let me translate section by section:

**1. Today's Highlights**
Active development continues across multiple fronts: NCCN 2.30 integration is advancing with a new PR adding NCCL EP as an optional MoE all-to-all backend for low-latency decode (#47600). The roadmap for adaptive speculative decoding (#23705) and agentic cache scheduling (#43098) signal longer-term architectural investments. Meanwhile, several correctness bugs affecting production scenarios — including PP disaggregated decode garbage output (#47613) and benchmark offline failures (#47420) — remain open.

Should translate to:
开发工作在多个方向持续推进：NCCL 2.30 集成正在深入，新 PR 添加 NCCL EP 作为低延迟解码的可选 MoE all-to-all 后端 (#47600)。自适应投机解码 (#23705) 和代理缓存调度 (#43098) 的路线图预示着长期架构投入。与此同时，影响生产场景的几个正确性 bug 仍待解决——包括 PP 解聚解码的垃圾输出 (#47613) 和离线环境下的 benchmark 失败 (#47420)。


2. **Releases & Breaking Changes** section discusses recent updates in the project. Two key points emerge: no new releases in the past 24 hours, and an ongoing API migration to the shared `api.v1` backend. This migration represents a significant structural refactoring of the generator, processor, and router components, aiming to unify the generation process behind the Rust server's `api.v1.Generate` endpoint. The RFC #45816 tracks this comprehensive migration process.

3. **New Model & Hardware Support** reveals expanded technological capabilities. DeepSeek-V4.1 now runs on AMD gfx950 with notable kernel fusion improvements. The MiniMax-M3.1-Flash (GB300) documentation has been updated, supporting PD AgentX with 6 DEP2 prefill workers. Intel Xeon CPUs have an active Q4 2026 roadmap focusing on cost-effective small/medium LLM serving, MoE execution, and diffusion workloads. NCCL 2.30 integration is progressing, with EP support, cross-group M-to-N transfer, and zero-SM communication being tracked in #32774.

4. **Performance & Optimization** highlights technical enhancements. DeepSeek-V4 prefill on SM120 is under investigation, with 4× RTX PRO 6000 (TP=4) showing 2–7K tok/s compared to ~12.5K via vLLM/marlin in issue #33422. NCCL 2.30's new MoE all-to-all backend (#47600) offers optional low-latency operations. CPU token allocator optimization (#42520) reduces overhead by deferring free-list copies. Memory pool validation (#42519) now rejects prompts without sufficient paged KV headroom. DeepSeek-V4.1 on AMD gfx950 benefits from kernel fusion, with dense GEMMs routed to aiter for >8 rows (6.1 µs vs 10.8 µs).

5. **Stability & Regressions** outlines critical technical challenges. High-severity issues include PP disaggregated decode producing token garbage (#47613), benchmark offline failures (#47420), and EAGLE draft extend crashes (#47490). Medium-level problems involve Rust server network address issues (#47509), attention-DP listeners pinning frontend CPU cores (#47598), and DFlash target_layer_ids fallback guesswork (#37475). These technical debt items require careful investigation and targeted resolution strategies.

6. The development roadmap highlights strategic technological advancements. Key focus areas include NCCL 2.30 backend improvements for multi-GPU MoE workloads, benchmark network connectivity challenges in offline environments, and pipeline parallelism asynchronous batching complexities. The API v1 migration signals a significant architectural transformation, while AMD GPU performance gains and memory safety enhancements represent critical engineering achievements.</think>

# SGLang 速报 — 2026-11-01

## 1. 今日要点

开发工作在多个方向持续推进：NCCL 2.30 集成正在深入，新 PR 添加 NCCL EP 作为低延迟解码的可选 MoE all-to-all 后端 (#47600)。自适应投机解码 (#23705) 和代理缓存调度 (#43098) 的路线图预示着长期架构投入。与此同时，影响生产场景的几个正确性 bug 仍待解决——包括 PP 解聚解码的垃圾输出 (#47613) 和离线环境下的 benchmark 失败 (#47420)。

---

## 2. 版本发布与重大变更

- **过去 24 小时内无版本发布**。
- **API 迁移进行中**：RFC #45816 跟踪向共享 `api.v1` 后端 API 的完整迁移，涵盖 generator、processor 和 router 组件。这是结构重构，将统一 Rust server 的 `api.v1.Generate` 端点后的生成逻辑。

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 状态 | 说明 |
|---|---|---|
| **DeepSeek-V4.1** (AMD gfx950) | 优化已合并 | MoE combine 融合到 decode all-reduce (#42504)；密集 GEMM 路由到 aiter，超过 8 行时启用 (#42499) |
| **MiniMax-M3.1-Flash** (GB300) | 文档已添加 | PD AgentX 接入点已添加到 cookbook (#47699) — 支持 Dynamo + SGLang，6 个 DEP2 prefill worker |
| **Intel Xeon CPU** | 路线图进行中 | Q4 2026 路线图 (#44675) 聚焦于高性价比的小/中型 LLM 服务、MoE 推理和扩散工作负载 |
| **NCCL 2.30** | 集成进行中 | EP 支持 (#47600)、跨组 M-to-N 传输、zero-SM 通信 — 在 #32784 中跟踪 |

---

## 4. 性能与优化

| 领域 | 变更 | 详情 |
|---|---|---|
| **DeepSeek-V4 prefill (SM120)** | 调查中 | 4× RTX PRO 6000 (TP=4) 约 2–7K tok/s vs vLLM/marlin 报告的 ~12.5K — issue #33422 寻求调优指导 |
| **MoE all-to-all (NCCL EP)** | 新后端 | #47600 新增 NCCL EP 作为低延迟 MoE A2A 后端，用于解码工作负载 |
| **CPU token allocator** | 优化已合并 | #42520 将空闲列表复制延迟到分配压力出现时，减少请求周转开销 |
| **Memory pool** | 校验已添加 | #42519 现在会拒绝无法预留分页 KV 头存的提示词，而非静默排队无法满足的请求 |
| **DeepSeek-V4.1 (AMD gfx950)** | 内核融合 | MoE combine 融入 decode all-reduce；密集 GEMM 路由到 aiter，超过 8 行时启用（6.1 µs vs 10.8 µs）|

---

## 5. 稳定性与回归

| 严重程度 | 问题 | 状态 | 修复 PR？ |
|---|---|---|---|
| **高** | PP 解聚解码产生垃圾（token 0 重复输出）当 `pp_async_batch_depth > pp_size / 2` 时 | Open — #47613 | 无 |
| **高** | Benchmark `--dataset-name random` 在离线网络失败（需要下载 ShareGPT）| Open — #47420 | 无 |
| **高** | EAGLE draft extend 在 DP attention + FlashInfer A2A + prefill CUDA graph 下负维度崩溃 | Open — #47490 | 无 |
| **中** | Rust server 向其他节点通告环回/不可路由地址 (#47509)；attention-DP listener 将前端固定到同一 CPU 核心 (#47598) | Open | 无 |
| **中** | DFlash `target_layer_ids` 回退猜错 tap layers；静默失败 (#37475) | Closed | — |
| **中** | S3 model URI 用 runai_streamer 覆盖显式远程实例 (#47428) | Open | 无 |
| **低** | CUDA coredump 追踪器 (#26340) — CI 自动收集的 351 条事件评论 | 持续监控 | — |
| **低** | CI 不稳定测试追踪于 #42752 — 160 条评论 | 持续 | — |

---

## 6. 这对应用开发者意味着什么

1. **NCCL 2.30 即将到来** — 如果你运行多 GPU MoE 工作负载，新的 NCCL EP 后端 (#47600) 提供更低延迟的 all-to-all 操作。请关注 PR 何时可用。

2. **Benchmark 用户注意离线环境** — 运行 `bench_serving --dataset-name random` 现在需要 HuggingFace 网络连接。如果在离线或受限网络环境，请考虑预下载数据集或使用本地提示词。

3. **关注 PP 解聚解码** — 如果你使用流水线并行和异步批处理，请避免设置 `pp_async_batch_depth > pp_size / 2`，直到 #47613 修复。

4. **API v1 迁移正在进行** — Rust server 的生成 API 正在整合。如果你依赖内部 API，请查看 #45816 了解迁移时间表。

5. **AMD GPU 改进** — DeepSeek-V4.1 在 gfx950 上的解码现在受益于融合内核和 aiter 路由。AMD 用户应在 MoE 工作负载上看到延迟改善。

6. **内存安全** — 新的提示词验证 (#42519) 阻止静默排队不可能满足的请求。这改变了错误行为，但提高了可调试性。

---

*基于 sgl-project/sglang GitHub 数据生成于 2026-11-01。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English digest into Simplified Chinese while following all the specified rules. Let me carefully translate this while preserving:

1. The Markdown structure (tables, headings, lists, etc.)
2. All technical identifiers (PR numbers, issue numbers, paths, code references)
3. URLs and links
4. The technical register of a Chinese developer newsletter

Let me translate section by section:

---

# llama.cpp 摘要 — 2026-11-01

## 1. 今日要点

项目保持快速迭代节奏，本周期重点包括：修复了 `/v1/responses` 端点接受 extra_params 的关键问题，OpenCL 新增 FWHT 支持，以及针对 SYCL 量化转换的舍入修正。XDNA 后端功能请求 (#21725) 获得 39 个 👍，反映出硬件支持扩展的需求增长。

---

## 2. 版本发布与破坏性变更

| 版本 | 描述 | PR |
|---------|-------------|-----|
| **b12024** | 将 LFM SC 的矩阵乘法重塑从 3D 张量改为 2D 张量 | [#30831](https://github.com/ggml-org/llama.cpp/pull/30831) |
| **b12023** | Server: 将共享决策前缀截断至首次输出 | [#30710](https://github.com/ggml-org/llama.cpp/pull/30710) — 修复 [#30482](https://github.com/ggml-org/llama.cpp/issues/30482) |
| **b12022** | Server: 修复 `/v1/responses` 端点接受 extra_params | [#30959](https://github.com/ggml-org/llama.cpp/pull/30959) |


| **b12021** | MTMD: 调整 Gemma 4 图像尺寸，移除信箱式填充 | [#30922](https://github.com/ggml-org/llama.cpp/pull/30922) |
| **b12020** | OpenCL: 新增 FWHT 算子 | [#31434](https://github.com/ggml-org/llama.cpp/pull/31434) |
| **b12019** | Chat: 当 `reasoning_format=none` 时移除 qwen3-coder 的思考块 | [#31380](https://github.com/ggml-org/llama.cpp/pull/31380) |
| **b12018** | SYCL: 修正 CPY 中 f32 到 Q2_0/Q4_0/Q5_0 的舍入问题 | [#31120](https://github.com/ggml-org/llama.cpp/pull/31120) |

本周期无破坏性变更。

---

## 3. 新模型与硬件支持

- **Metis-1.6 模型** — PR [#31134](https://github.com/ggml-org/llama.cpp/pull/31134) 新增对 Praxis (~2.94B) 和 Logos (~10.2B) 架构的支持（Mamba-2 混合架构）
- **Gemma 4** — `test-llama-archs` 现已启用测试支持 ([#31401](https://github.com/ggml-org/llama.cpp/pull/31401))
- **PocketTTS** — 新增对非克隆声音的支持 ([#31429](https://github.com/ggml-org/llama.cpp/pull/31429))
- **IQ3 支持 (OpenCL)** — IQ3_S, IQ3_XXS 格式初步支持 ([#31338](https://github.com/ggml-org/llama.cpp/pull/31338))
- **Group norm kernel (WebGPU)** — 新内核实现用于扩散模型 ([#31490](https://github.com/ggml-org/llama.cpp/pull/31490))
- **Adreno 830 修复** — 修正 Q6_K 切片 GEMM 在骁龙 8 Elite 上的无效工作

组大小 ([#31485](https://github.com/ggml-org/llama.cpp/pull/31485))

## 4. 性能与优化

| 领域 | 变更 | PR |
|------|--------|-----|
| **SYCL** | CPY 到 Q4_1/Q5_1/Q8_0 的精确舍入 — 修复 `test-backend-ops` 中的不稳定测试 | [#31465](https://github.com/ggml-org/llama.cpp/pull/31465) (修复 [#31140](https://github.com/ggml-org/llama.cpp/issues/31140)) |
| **SYCL** | 重构 MUL_MAT/SET_ROMS 中的类型拒绝处理，改用显式允许列表 | [#31460](https://github.com/ggml-org/llama.cpp/pull/31460) |
| **SYCL** | 尝试通过 PkgConfig 查找 LevelZero 头文件 — 改进 oneAPI 2026.x 检测 | [#31076](https://github.com/ggml-org/llama.cpp/pull/31076) |
| **OpenCL** | 新增 FWHT 内核 | [#31434](https://github.com/ggml-org/llama.cpp/pull/31434) |
| **Hexagon** | 修正 v75+ 设备的跨步 DMA 传输（限制 24 位寻址）| [#31442](https://github.com/ggml-org/llama.cpp/pull/31442) |
| **iOS** | 改用 `vm_allocate` 替代 `posix_memalign` 以修复内存追踪 | [#31437](https://github.com/ggml-org/llama.cpp/pull/31437) |

---

## 5. 稳定性与回归问题

### 严重

| 问题 | 描述 | 严重程度 | 状态 |
|-------|-------------|----------|--------|
| [#31472](https://github.com/ggml-org/llama.cpp/issues/31472) | 推测: draft-dflash/dspark 在 temp-0 模式下破坏输出一致性（100% 接受率时发散） | **高** | OPEN |
| [#31077](https://github.com/ggml-org/llama.cpp/issues/31077) | CUDA: Gemma 4 + MTP 在 KV cache 回滚后发生非法内存访问 | **高** | OPEN |
| [#30698](https://github.com/ggml-org/llama.cpp/issues/30698) | Gemma 4 配合 `--mmproj` + MTP 启动时中止（`GGML_ASSERT`）| **高** | OPEN |

### 值得注意

| 问题 | 描述 | 严重程度 | 状态 |
|-------|-------------|----------|--------|
| [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) | 推测解码在量化目标（Q4_K_M）上与普通模式发散 | 中 | OPEN |
| [#26409](https://github.com/ggml-org/llama.cpp/issues/26409) | SYCL `--split-mode tensor` 相比单 GPU 慢 3 倍 | 中 | OPEN |
| [#27595](https://github.com/ggml-org/llama.cpp/issues/27595) | SYCL `--fit` 内存计算不完整，导致运行时溢出 | 中 | OPEN |
| [#24840](https://github.com/ggml-org/llama.cpp/issues/24840) | Server: `batch_view` 偏移量未传递至 `ctx_dft` | 低 | OPEN |

### 已修复

- [#26114](https://github.com/ggml-org/llama.cpp/pull/26114) — 修复加载推测模型时 llama-server 崩溃问题（关闭 #24443）
- [#30886](https://github.com/ggml-org/llama.cpp/pull/30886) — 修正 InternVL CLS token 顺序

---

## 6. 对应用开发者的意义

1. **服务端可靠性**: `/v1/responses` 接受 extra_params 的修复和语法触发器验证（[#31478](https://github.com/ggml-org/llama.cpp/pull/31478)）可防止单个错误请求导致整个服务端崩溃。

2. **多轮推理**: 共享决策前缀修复（#30710）确保问题共享选项 token 时，决策输出嵌入在最终批次中保持可用——这对使用工具的代理工作流至关重要。

3. **守护进程模式**: PR [#31489](https://github.com/ggml-org/llama.cpp/pull/31489) 新增服务模式，支持 `.sock` 控制端点，使 llama-server 可作为带 ACL 安全保护的正规守护进程运行。

4. **SYCL 用户**: Q4_1/Q5_1/Q8_0 转换中的舍入修正在 Intel GPU 上解决了非确定性行为；请使用最新构建以获得位精确输出。

5. **量化推理**: 关注 [#25618](https://github.com/ggml-org/llama.cpp/issues/25618)——在量化目标上使用推测解码时，输出可能与非推测运行不一致；修复工作中。

6. **新硬件前景**: XDNA 后端兴趣（#21725）预示未来将支持 AMD XDNA NPU；如需边缘 AI 加速器支持请跟踪该 issue。</think>

# llama.cpp 摘要 — 2026-11-01

## 1. 今日要点

项目保持快速迭代节奏，本周期重点包括：修复了 `/v1/responses` 端点接受 extra_params 的关键问题，OpenCL 新增 FWHT 支持，以及针对 SYCL 量化转换的舍入修正。XDNA 后端功能请求 (#21725) 获得 39 个 👍，反映出硬件支持扩展的需求增长。

---

## 2. 版本发布与破坏性变更

| 版本 | 描述 | PR |
|---------|-------------|-----|
| **b12024** | 将 LFM SC 的矩阵乘法重塑从 3D 张量改为 2D 张量 | [#30831](https://github.com/ggml-org/llama.cpp/pull/30831) |
| **b12023** | Server: 将共享决策前缀截断至首次输出 | [#30710](https://github.com/ggml-org/llama.cpp/pull/30710) — 修复 [#30482](https://github.com/ggml-org/llama.cpp/issues/30482) |
| **b12022** | Server: 修复 `/v1/responses` 端点接受 extra_params | [#30959](https://github.com/ggml-org/llama.cpp/pull/30959) |
| **b12021** | MTMD: 调整 Gemma 4 图像尺寸，移除信箱式填充 | [#30922](https://github.com/ggml-org/llama.cpp/pull/30922) |
| **b12020** | OpenCL: 新增 FWHT 算子 | [#31434](https://github.com/ggml-org/llama.cpp/pull/31434) |
| **b12019** | Chat: 当 `reasoning_format=none` 时移除 qwen3-coder 的思考块 | [#31380](https://github.com/ggml-org/llama.cpp/pull/31380) |
| **b12018** | SYCL: 修正 CPY 中 f32 到 Q2_0/Q4_0/Q5_0 的舍入问题 | [#31120](https://github.com/ggml-org/llama.cpp/pull/31120) |

**本周期无破坏性变更。**

---

## 3. 新模型与硬件支持

- **Metis-1.6 模型** — PR [#31134](https://github.com/ggml-org/llama.cpp/pull/31134) 新增对 Praxis (~2.94B) 和 Logos (~10.2B) 架构的支持（混合 Mamba-2 + GQA）
- **Gemma 4** — `test-llama-archs` 现已启用测试支持 ([#31401](https://github.com/ggml-org/llama.cpp/pull/31401))
- **PocketTTS** — 新增对非克隆声音的支持 ([#31429](https://github.com/ggml-org/llama.cpp/pull/31429))
- **IQ3 支持 (OpenCL)** — IQ3_S、IQ3_XXS 格式初步支持 ([#31338](https://github.com/ggml-org/llama.cpp/pull/31338))
- **Group norm kernel (WebGPU)** — 新内核实现用于扩散模型支持 ([#31490](https://github.com/ggml-org/llama.cpp/pull/31490))
- **Adreno 830 修复** — 修正 Q6_K 切片 GEMM 在骁龙 8 Elite 上的无效工作组大小 ([#31485](https://github.com/ggml-org/llama.cpp/pull/31485))

---

## 4. 性能与优化

| 领域 | 变更 | PR |
|------|--------|-----|
| **SYCL** | CPY 到 Q4_1/Q5_1/Q8_0 的精确舍入 — 修复 `test-backend-ops` 中的不稳定测试 | [#31465](https://github.com/ggml-org/llama.cpp/pull/31465) (修复 [#31140](https://github.com/ggml-org/llama.cpp/issues/31140)) |
| **SYCL** | 重构 MUL_MAT/SET_ROWS/CPY 中的类型拒绝处理为显式允许列表 | [#31460](https://github.com/ggml-org/llama.cpp/pull/31460) |
| **SYCL** | 通过 PkgConfig 尝试获取 LevelZero 头文件 — 改进 oneAPI 2026.x 检测 | [#31076](https://github.com/ggml-org/llama.cpp/pull/31076) |
| **OpenCL** | 新增 FWHT 内核 | [#31434](https://github.com/ggml-org/llama.cpp/pull/31434) |
| **Hexagon** | 修正 v75+ 设备上跨距 > 24 位的 DMA 传输 | [#31442](https://github.com/ggml-org/llama.cpp/pull/31442) |
| **iOS** | 改用 `vm_allocate` 替代 `posix_memalign` 修复内存追踪 | [#31437](https://github.com/ggml-org/llama.cpp/pull/31437) |

---

## 5. 稳定性与回归问题

### 严重

| 问题 | 描述 | 严重程度 | 状态 |
|-------|-------------|----------|--------|
| [#31472](https://github.com/ggml-org/llama.cpp/issues/31472) | Spec: draft-dflash/dspark 在 temp-0 输出时破坏一致性（100% 接受率时发散）| **高** | OPEN |
| [#31077](https://github.com/ggml-org/llama.cpp/issues/31077) | CUDA: Gemma 4 + MTP 在 KV cache 回滚后发生非法内存访问 | **高** | OPEN |
| [#30698](https://github.com/ggml-org/llama.cpp/issues/30698) | Gemma 4 配合 `--mmproj` + MTP 启动时中止（`GGML_ASSERT`）| **高** | OPEN |

### 值得关注

| 问题 | 描述 | 严重程度 | 状态 |
|-------|-------------|----------|--------|
| [#25618](https://github.com/ggml-org/llama.cpp/issues/25618) | 推测解码在量化目标（Q4_K_M）上与普通模式发散 | 中 | OPEN |
| [#26409](https://github.com/ggml-org/llama.cpp/issues/26409) | SYCL `--split-mode tensor` 比单 GPU 慢 3 倍 | 中 | OPEN |
| [#27595](https://github.com/ggml-org/llama.cpp/issues/27595) | SYCL `--fit` 未完整计算内存，导致运行时溢出 | 中 | OPEN |
| [#24840](https://github.com/ggml-org/llama.cpp/issues/24840) | Server: `batch_view` 偏移量未传播至 `ctx_dft` | 低 | OPEN |

### 已修复

- [#26114](https://github.com/ggml-org/llama.cpp/pull/26114) — 修复加载推测模型时 llama-server 崩溃（关闭 #24443）
- [#30886](https://github.com/ggml-org/llama.cpp/pull/30886) — 修正 InternVL CLS token 顺序

---

## 6. 这对应用开发者的意义

1. **服务端可靠性**: `/v1/responses` 接受 extra_params 的修复和语法触发器验证（[#31478](https://github.com/ggml-org/llama.cpp/pull/31478)）可防止单个错误请求导致整个服务端崩溃。

2. **多轮推理**: 共享决策前缀修复（#30710）确保当问题共享选项 token 时，决策输出嵌入在最终批次中保持可用——这对于代理工作流中使用工具的场景至关重要。

3. **守护进程模式**: PR [#31489](https://github.com/ggml-org/llama.cpp/pull/31489) 新增服务模式，支持 `.sock` 控制端点，使 llama-server 可作为带 ACL 安全保护的正规守护进程运行。

4. **SYCL 用户**: Q4_1/Q5_1/Q8_0 转换中的舍入修正在 Intel GPU 上解决了非确定性行为；请使用最新构建以获得位精确输出。

5. **量化推理**: 关注 [#25618](https://github.com/ggml-org/llama.cpp/issues/25618)——在量化目标上使用推测解码时，输出可能与非推测运行不一致；修复工作正在进行中。

6. **新硬件前景**: XDNA 后端兴趣（#21725）预示未来将支持 AMD XDNA NPU；如需边缘 AI 加速器支持请跟踪该 issue。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Simplified Chinese, following the translation rules provided. Let me go through the content carefully and translate it while preserving the structure and technical terms.

Key points to remember:
1. Output ONLY the translation, no preamble or explanation
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, issue/PR references verbatim
4. Keep project names, repository slugs, technical identifiers in original form
5. Use natural technical Chinese register

Let me translate section by section:

## 1. Today's Highlights
今天，Ollama 在多个方面都有活跃的开发进展。团队合并了一个关键修复（[#19432](https://github.com/ollama/ollama/pull/19432)），修复了 OpenAI 兼容端点覆盖模型采样器默认参数的问题——LFM3 的 temperature 本应为 0.1 却被设为 1.0，Qwen3-Coder 也失去了其 0.7/0.8 的默认设置。当日还有多个 PR 解决了 MLX 运行器的问题，包括 LFM3-Omni 语音生成中的内存增长以及 token 重复限制。Windows 用户继续报告 Gemma4、大提示词导致的连接重置以及工具调用中的运行器断开连接等问题。

## 2. Releases & Breaking Changes
过去 24 小时内没有新版本发布。

**API 行为变更（已在 #19432 中修复）：** OpenAI 兼容层在客户端未指定参数时注入了硬编码的 `top_p: 1.0` 和 `temperature` 值，静默覆盖了模型自带的默认参数。

这影响了 `/v1/chat/completions`、`/v1/completions` 和 `/v1/messages`。该修复现已合并。

## 3. New Model & Hardware Support
表格翻译：
| Item | Details | Links |
|------|---------|-------|
| **VirbiusGuard model request** | 0.6B 双语（EN/中文）智能体安全与提示词注入防护模型，基于 Qwen3Guard-Gen-0.6B 微调，Apache-2.0 许可证 | [#19428](https://github.com/ollama/ollama/issues/19428) |
| **Qwen3.5 0.8B Q4_K_M quantization** | 添加缺失的量化格式以提升 CPU 推理效率（相比 q8_* 提速 2 倍）| [#19436](https://github.com/ollama/ollama/issues/19436) |
| **MIMO v2.5 已集成至 Ollama Cloud** | 小米百万级 token 上下文窗口的 LLM，MIT 许可证（已关闭）| [#15887](https://github.com/ollama/ollama/issues/15887) |
| **MLX Gemma4 专家权重加载** | 修复 mlx-community Gemma 4 检查点中 MoE 专家权重加载问题的 PR | [#18631](https://github.com/ollama/ollama/pull/18631) |

## 4. Performance & Optimization
| Area | Change | PR/Issue |
|------|--------|----------|
| **LFM3-Omni 内存** | 修复语音缓存内存增长问题——临时 KV 分配现已在每次语音生成完成后释放 | [#19438](https://github.com/ollama/ollama/pull/19438)（修复 [#19437](https://github.com/ollama/ollama/issues/19437)）|
| **MLX token 重复** | 为 mlxrunner 添加 101 token 重复限制以防止生成卡死 | [#19422](https://github.com/ollama/ollama/pull/19422) |
| **MLX 提示词扩展** | 允许更长的状态/模式输入用于 MLX 决策模型，同时限制总提示词大小 | [#19408](https://github.com/ollama/ollama/pull/19408) |
| **MLX CUDA 库** | 在 Linux 上进程内加载捆绑的 CUDA 库以修复 mlx_cusolver 依赖解析问题 | [#19433](https://github.com/ollama/ollama/pull/19433) |
| **提示词缓存预算** | 全局缓存预算阻止共享服务器上各模型的独立配置 | [#19435](https://github.com/ollama/ollama/issues/19435) |

## 5. Stability & Regressions
| Severity | Issue | Status |
|----------|-------|--------|
| **高** | Windows：Gemma4 在所有提示词上返回 500 内部服务器错误 | [#19420](https://github.com/ollama/ollama/issues/19420) |
| **高** | Windows：大提示词后约 15 秒连接重置（RTX 3090，Qwen3.8-27B）| [#19139](https://github.com/ollama/ollama/issues/19139) |
| **高** | Windows RTX 5090：工具调用期间运行器断开，/tokenize 返回 HTTP 500 | [#19439](https://github.com/ollama/ollama/issues/19439) |
| **中** | Qwen 模型思考（`</thinking>`）结束时结束整个对话 | [#19424](https://github.com/ollama/ollama/issues/19424) |
| **中** | Gemma3：4b 使用长提取提示词+结构化输出时返回空 JSON | [#19427](https://github.com/ollama/ollama/issues/19427) |
| **中** | 工具解析器在参数字符串包含另一个函数名时选择错误的函数 | [#19425](https://github.com/ollama/ollama/issues/19425)——修复见 [#19426](https://github.com/ollama/ollama/pull/19426) |
| **中** | Gemma4 长字符串时留下未闭合的工具调用 JSON 列表 | [#19274](https://github.com/ollama/ollama/pull/19274) |
| **低** | CRLF Modelfiles 在三引号值内保留 `\r` | [#19404](https://github.com/ollama/ollama/issues/19404)——修复见 [#19431](https://github.com/ollama/ollama/pull/19431) |
| **低** | Windows 11 26H2 TCP 表状态歧义用于环回端点 | [#19418](https://github.com/ollama/ollama/issues/19418) |
| **低** | 网络断开后 TLS 握手超时，X25519MLKEM768 ClientHello 后量子密钥交换失败 | [#19430](https://github.com/ollama/ollama/issues/19430) |

## 6. What This Means for Application Developers

1. **采样器行为现已正确：** 如果在 Ollama 上使用 `/v1/chat/completions`，模型现在将遵循其原生的 temperature/top_p 默认值，而不是被强制设为 1.0。这对 LFM3（默认 0.1）和 Qwen3-Coder（0.7/0.8）等 LLM 尤为重要。

2. **JSON 工具调用存在解析错误：** 通用工具解析器在参数字符串包含另一个函数名时可能会错误地调度到错误的函数。修复待定（[#19426](https://github.com/ollama/ollama/pull/19426)）。

3. **Windows 用户应验证兼容性：** 多个问题报告涉及 Windows 11 上的 Gemma4 和大提示词。如果在 Windows 上运行生产工作负载，请彻底测试或考虑 Linux/macOS。

4. **MLX 改进使 Apple Silicon 用户受益：** 语音生成内存现已正确释放，token 重复限制防止生成卡死。CUDA 库加载修复提高了 Linux MLX 的稳定性。

5. **Modelfile 解析现支持大小写不敏感：** 现在接受 `Temperature` 等参数名作为 `temperature` 的替代，与文档一致。

6. **新增社区集成：** [tokencut](https://github.com/attnstack/tokencut)（上下文压缩代理）和 [SuperEditr](https://github.com/ollama/ollama/pull/19429)（macOS 菜单栏校对应用）已添加到集成列表中。</think>

# Ollama Digest — 2026-11-01

## 1. 今日要闻

今天，Ollama 在多个方面都有活跃的开发进展。团队合并了一个关键修复（[#19432](https://github.com/ollama/ollama/pull/19432)），修复了 OpenAI 兼容端点覆盖模型采样器默认参数的问题——LFM3 的 temperature 本应为 0.1 却被设为 1.0，Qwen3-Coder 也失去了其 0.7/0.8 的默认设置。当日还有多个 PR 解决了 MLX 运行器的问题，包括 LFM3-Omni 语音生成中的内存增长以及 token 重复限制。Windows 用户继续报告 Gemma4、大提示词导致的连接重置以及工具调用中的运行器断开连接等问题。

---

## 2. 发布与重大变更

过去 24 小时内没有新版本发布。

**API 行为变更（已在 #19432 中修复）：** OpenAI 兼容层在客户端未指定参数时注入了硬编码的 `top_p: 1.0` 和 `temperature` 值，静默覆盖了模型自带的默认参数。这影响了 `/v1/chat/completions`、`/v1/completions` 和 `/v1/messages`。该修复现已合并。

---

## 3. 新模型与硬件支持

| 项目 | 详情 | 链接 |
|------|---------|-------|
| **VirbiusGuard 模型请求** | 0.6B 双语（EN/中文）智能体安全与提示词注入防护模型，基于 Qwen3Guard-Gen-0.6B 微调，Apache-2.0 许可证 | [#19428](https://github.com/ollama/ollama/issues/19428) |
| **Qwen3.5 0.8B Q4_K_M 量化** | 添加缺失的量化格式以提升 CPU 推理效率（相比 q8_* 提速 2 倍）| [#19436](https://github.com/ollama/ollama/issues/19436) |
| **MIMO v2.5 已添加至 Ollama Cloud** | 小米百万级 token 上下文窗口的 LLM，MIT 许可证（已关闭请求）| [#15887](https://github.com/ollama/ollama/issues/15887) |
| **MLX Gemma4 专家权重加载** | 修复 mlx-community Gemma 4 检查点中 MoE 专家权重加载问题的 PR | [#18631](https://github.com/ollama/ollama/pull/18631) |

---

## 4. 性能与优化

| 领域 | 变更 | PR/Issue |
|------|--------|----------|
| **LFM3-Omni 内存** | 修复语音缓存内存增长问题——临时 KV 分配现已在每次语音生成完成后释放 | [#19438](https://github.com/ollama/ollama/pull/19438)（修复 [#19437](https://github.com/ollama/ollama/issues/19437)）|
| **MLX token 重复** | 为 mlxrunner 添加 101 token 重复限制以防止生成卡死 | [#19422](https://github.com/ollama/ollama/pull/19422) |
| **MLX 提示词扩展** | 允许更长的状态/模式输入用于 MLX 决策模型，同时限制总提示词大小 | [#19408](https://github.com/ollama/ollama/pull/19408) |
| **MLX CUDA 库** | 在 Linux 上进程内加载捆绑的 CUDA 库以修复 mlx_cusolver 依赖解析问题 | [#19433](https://github.com/ollama/ollama/pull/19433) |
| **提示词缓存预算** | 全局缓存预算阻止共享服务器上各模型的独立配置 | [#19435](https://github.com/ollama/ollama/issues/19435) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | Windows：Gemma4 在所有提示词上返回 500 内部服务器错误 | [#19420](https://github.com/ollama/ollama/issues/19420) |
| **高** | Windows：大提示词后约 15 秒连接重置（RTX 3090，Qwen3.8-27B）| [#19139](https://github.com/ollama/ollama/issues/19139) |
| **高** | Windows RTX 5090：工具调用期间运行器断开，/tokenize 返回 HTTP 500 | [#19439](https://github.com/ollama/ollama/issues/19439) |
| **中** | Qwen 模型思考（`</thinking>`）结束时结束整个对话 | [#19424](https://github.com/ollama/ollama/issues/19424) |
| **中** | Gemma3：4b 使用长提取提示词+结构化输出时返回空 JSON | [#19427](https://github.com/ollama/ollama/issues/19427) |
| **中** | 工具解析器在参数字符串包含另一个函数名时选择错误的函数 | [#19425](https://github.com/ollama/ollama/issues/19425)——修复见 [#19426](https://github.com/ollama/ollama/pull/19426) |
| **中** | Gemma4 长字符串时留下未闭合的工具调用 JSON 列表 | [#19274](https://github.com/ollama/ollama/pull/19274) |
| **低** | CRLF Modelfiles 在三引号值内保留 `\r` | [#19404](https://github.com/ollama/ollama/issues/19404)——修复见 [#19431](https://github.com/ollama/ollama/pull/19431) |
| **低** | Windows 11 26H2 TCP 表状态歧义用于环回端点 | [#19418](https://github.com/ollama/ollama/issues/19418) |
| **低** | 网络断开后 TLS 握手超时，X25519MLKEM768 ClientHello 后量子密钥交换失败 | [#19430](https://github.com/ollama/ollama/issues/19430) |

---

## 6. 这对应用开发者意味着什么

1. **采样器行为现已正确：** 如果在 Ollama 上使用 `/v1/chat/completions`，模型现在将遵循其原生的 temperature/top_p 默认值，而不是被强制设为 1.0。这对 LFM3（默认 0.1）和 Qwen3-Coder（0.7/0.8）等 LLM 尤为重要。

2. **JSON 工具调用存在解析错误：** 通用工具解析器在参数字符串包含另一个函数名时可能会错误地调度到错误的函数。修复待定（[#19426](https://github.com/ollama/ollama/pull/19426)）。

3. **Windows 用户应验证兼容性：** 多个问题报告涉及 Windows 11 上的 Gemma4 和大提示词。如果在 Windows 上运行生产工作负载，请彻底测试或考虑 Linux/macOS。

4. **MLX 改进使 Apple Silicon 用户受益：** 语音生成内存现已正确释放，token 重复限制防止生成卡死。CUDA 库加载修复提高了 Linux MLX 的稳定性。

5. **Modelfile 解析现支持大小写不敏感：** 现在接受 `Temperature` 等参数名作为 `temperature` 的替代，与文档一致。

6. **新增社区集成：** [tokencut](https://github.com/attnstack/tokencut)（上下文压缩代理）和 [SuperEditr](https://github.com/ollama/ollama/pull/19429)（macOS 菜单栏校对应用）已添加到集成列表中。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM digest into Chinese. I need to:
1. Translate the content while preserving the exact Markdown structure
2. Keep all technical terms, issue numbers, URLs, code, etc. as-is
3. Use natural technical Chinese (the register of a Chinese developer newsletter)
4. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate this carefully while maintaining the format.</think>

# LiteLLM 速报 — 2026-11-01

## 今日重点

LiteLLM 项目的代理服务强化和计费优化仍在快速推进。今日最重要的进展包括：新增了密钥撤销的公开端点 (#49545)、增强了 Redis 后端路由器的冷却机制 (#49545)，并修复了 GitHub MCP 集成中 OAuth 请求头过长的问题 (#48517)。多个影响流式响应、速率限制和预算执行的 bug 已被关闭。

## 版本发布与重大变更

| 项目 | 描述 | 状态 |
|------|-------------|--------|
| **热重载与多工作进程** | `--reload` 现在会正确重启整个工作进程池，而不是在使用 `--num_workers`、`NUM_WORKERS` 或 `DEFAULT_NUM_WORKERS_LITELLM_PROXY` 时回退到单个工作进程。对于依赖之前行为的用户来说，这是一个破坏性变更。 | 已合并 (#45909) |
| **预算预留修复** | 修复了当 `custom_auth_run_common_checks` 预留了 `max_budget` 消费但没有 `database_url` 时，预算预留未被记录的问题，这会导致后续请求失败。 | 已合并 (#45907) |

---

## 新模型与硬件支持

过去 24 小时内无新模型或硬件支持公告。

---

## 性能与优化

| 领域 | 变更 | PR |
|------|--------|-----|
| **路由器冷却与全局计数器** | 路由器冷却和 TPM/RPM 计数器现在运行在 Rust 存储上，位于相同的 Python 存储接口之后。Redis 键、值字节数和 TTL 与现有的 pod 行为保持一致，便于新旧部署之间的无缝共享。 | #49525 |
| **Redis 云凭证** | 新增 Redis 轮转云凭证支持：ElastiCache (IAM)、Memorystore (GCP IAM) 和 Azure Cache (Entra ID)。 | #49510 |
| **用量导出增强** | 每日活动导出现在在每行包含 key 和 user 元数据对象，方便分摊计费工作流。 | #49360 |
| **消费日志** | 新增可选的 `spend_logs_prompt_storage: latest_turn` 模式，只保留无状态请求的当前轮次，减少重复的会话数据。 | #49544 |
| **HuggingFace TEI 重新排序定价** | 修复了 TEI 重新排序部署的 `register_model` / `model_info` 费用被错误计为 $0 的问题。 | #45990 |
| **Bedrock GovCloud West** | 将 Llama 3 最大输出提升至 8K，与模型卡片规格一致。 | #49543 |

---

## 稳定性与回归问题

### 关键 (P0–P1)

| 问题 | 摘要 | 状态 |
|-----|---------|--------|
| **#14052** | `x-litellm-tags` 未将请求路由到正确的模型；回退优先级不明确 | 已修复 (#14052) |
| **#24152** | 密钥级别的按模型速率限制 (`model_rpm_limit`/`model_tpm_limit`) 未触发回退 | 已修复 (#24152) |
| **#48364** | 管理员用户的密钥未强制执行 token 消费/预算限制 — 管理员用户可以超出预算 | 已修复 (#48364) |
| **#48809** | 团队成员预算耗尽后，模型发现 (`GET /models`、`GET /v1/models`) 返回 HTTP 422，破坏 OpenAI 兼容客户端 | 已修复 (#48809) |

### 高优先级

| 问题 | 摘要 | 状态 |
|-----|---------|--------|
| **#26413** | `think: false` 被忽略；仍返回 `reasoning_content` 和 `thinking_blocks` | 已修复 (#26413) |
| **#22747** | Azure Responses API 在需要 >60s 推理时间的模型上失败并报 `ServerDisconnectedError` (GPT-5-Pro) — aiohttp 硬编码了 60s socket 空闲超时 | 已修复 (#22747) |
| **#46095** | OpenRouter 流式响应报告请求的路由器名称而非实际服务的模型 | 已修复 (#46095) |
| **#40260** | 干净的流式 EOF 没有 provider 的 `finish_reason` 被报告为成功完成，并附带估算用量 | 已修复 (#40260) |
| **#35589** | Amazon Nova 流式 100% 失败 — httpx zstd 解码器在多帧 SSE 中重用了已完成的 `decompressobj` | 待处理 (#35589) |

### 中优先级

| 问题 | 摘要 | 状态 |
|-----|---------|--------|
| **#48145** | JSON 定义的 openai-like 提供商在模型不在目录中时丢失 tools | 待处理 (#48145) |
| **#26376** | `langfuse_otel` 回调在 `asyncio.gather()` 并发下丢失约 1/3 的 OTEL span | 已修复 (#26376) |
| **#26387** | BedrockGuardrail 流式钩子在 HTTP 200 后丢弃 `HTTPException`，产生损坏的 SSE 流 | 已修复 (#26387) |
| **#26411** | LiteLLM 无法处理长时间运行的 A2A 任务 | 已修复 (#26411) |
| **#32903** | `GET /v1/models` 对所有模型返回 `owned_by: "openai"`，无论实际 provider 是谁 | 已修复 (#32903) |
| **#48813** | OCI Gemini 忽略除最后一条之外的所有系统消息 | 已修复 (#48813) |
| **#49449** | Anthropic 流式 guardrails 将传输块解析为完整的 SSE 帧，导致警告刷屏 | 待处理 (#49449) |

### 低优先级 / 信息类

| 问题 | 摘要 | 状态 |
|-----|---------|--------|
| **#34636** | Redis 缓存测试在使用 `url` 字段时失败 | 已修复 (#34636) |
| **#25757** | 基于模型的路由编码的 `file_id` 超出 Azure OpenAI 64 字符限制 (67-80+ 字符) | 待处理 (#25757) |
| **#44531** | 仅支持 A2A 1.0 的上游代理：`GetTask` 被降级为 0.3 并返回 HTTP 500 | 待处理 (#44531) |

---

## 这对应用开发者意味着什么

1. **速率限制现在支持每日限制** — 除了每分钟限制外，你还可以设置 `requests_per_day` 和 `tokens_per_day`，这解决了 OpenAI 免费/Pro 层级等提供商的需求。(#14398)

2. **预算执行现在一致了** — 管理员用户密钥现在会正确遵守 token 消费和预算限制，堵住了一个重要的安全漏洞。(#48364)

3. **新增密钥撤销端点** — 新的公开 `POST /key/revoke` 端点允许任何意外泄露密钥的人阻止它，而无需管理员权限，同时保留密钥用于审计。(#49545)

4. **GitHub MCP OAuth 现在工作了** — GitHub 约 9KB 的 `Content-Security-Policy` 请求头超出了 aiohttp 默认的 8190 字节限制，导致令牌交换失败。现已修复。(#48517)

5. **团队预算不再破坏模型发现** — 之前，当团队成员超出预算时，`GET /models` 请求会失败并返回 HTTP 422，破坏 OpenAI 兼容客户端。现已修复。(#48809)

6. **流式正确性改进** — 多个修复解决了流式边界情况：Amazon Nova zstd 解压、OpenRouter 模型命名和 Bedrock guardrail SSE 处理。

7. **A2A 协议改进** — 仅支持 A2A 1.0 的上游代理现在可以正确使用 `GetTask`，长时间运行的 A2A 任务也能正常处理。(#26411, #44531)

---

*数据来源：BerriAI/litellm GitHub，2026-11-01*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the Unsloth digest into Chinese, following specific rules:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, issue/PR references, project names, technical terms in original form
4. Use natural technical Chinese - not literal word-for-word

Let me translate this carefully while maintaining all the structure and technical accuracy.</think>

# Unsloth 速报 — 2026-11-01

## 1. 今日焦点

Unsloth 团队正在推进 Studio UI 的重大改进，包括毛玻璃效果（macOS 系统级毛玻璃、液态毛玻璃、玻璃透镜）以及 RTL（从右至左）语言聊天支持。性能优化也在全面铺开——日志脱敏、图库加载、语音列表、数据集文件夹处理都有显著改进。在硬件方面，关于 Ascend NPU（华为昇腾）后端支持的提案表明 Unsloth 正在扩展到中国 AI 加速器生态。

## 2. 发布与重大变更

过去 24 小时内无发布。

## 3. 新模型与硬件支持

- **Ascend NPU (昇腾) 后端**: Issue [#10772](https://github.com/unslothai/unsloth/issues/10772) 提议添加华为昇腾 NPU 支持——这是中国数据中心主流的 AI 加速器，用于 LLM 微调和推理。目前处于 RFC 阶段，暂无实施时间表。

- **ExLlamav2 推理引擎**: 功能请求 [#15527](https://github.com/unslothai/unsloth/issues/15527) 寻求集成 turboderp 的 exllamav3 推理引擎。社区 PR 正在等待合并。

- **CLI 视觉模型支持**: PR [#16347](https://github.com/unslothai/unsloth/pull/16347) 使 `unsloth inference` 和 `unsloth chat` 能够接受图像输入——此前仅支持训练。

- **trust_remote_code 支持**: Issue [#16331](https://github.com/unslothai/unsloth/issues/16331) 报告 CLI 缺少 `--trust_remote_code` 参数，导致无法加载包含自定义代码的模型（如 LiquidAI/LFM3-Omni-2B）。

## 4. 性能优化

- **日志脱敏**: PR [#16356](https://github.com/unslothai/unsloth/pull/16356) 通过跳过无法匹配给定行的正则规则来优化 `redact_log_text`，将每行耗时从约 3–13ms 降至非匹配模式的近零开销。

- **图库 PNG 加载**: PR [#16355](https://github.com/unslothai/unsloth/pull/16355) 缓存 PNG 配方并仅解析符号链接的 clip，消除每次获取图库时的冗余 Pillow 打开操作。

- **语音列表**: PR [#16354](https://github.com/unslothai/unsloth/pull/16354) 将 `list_voices()` 从每个语音约 4 次 `voices_dir()` 调用（每次 52µs）加上重复的 JSON 解析，优化为单次文件夹查找加一次 sidecar 读取。

- **数据集文件夹检查**: PR [#16353](https://github.com/unslothai/unsloth/pull/16353) 消除了数据集 caption-stem 冲突检查期间的每文件文件夹重新列表和 stat 操作。

- **Seed Hub 文件名处理**: PR [#16352](https://github.com/unslothai/unsloth/pull/16352) 一次性编译分割标签匹配器并按字符串分割 hub 文件名，提升大分割数据集预览性能。

- **流水线并行融合优化器**: PR [#16351](https://github.com/unslothai/unsloth/pull/16351) 将流水线并行跳过协调扩展到融合优化器（SGD、Adam、AdamW 配合 `fused=True`）。

- **GRPO 打包回归修复**: PR [#16349](https://github.com/unslothai/unsloth/pull/16349) 对跨打包行混合 token 的模型禁用打包前向传播（DeepSeek V4、Zaya CCA、RecurrentGemma）。

## 5. 稳定性与回归

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | Studio 对非 NVLink GPU（RTX 6000 Ada、L40/L40S、L4）设置 `GGML_CUDA_P2P=1`，静默损坏输出 | 已关闭；PR [#6098](https://github.com/unslothai/unsloth/pull/6098) 引入此 bug |
| **高** | CLI 推理在成功响应后增加 10–18 秒关闭延迟 | Open [#16330](https://github.com/unslothai/unsloth/issues/16330) |
| **高** | 模型选择器卡顿约 20 分钟，持续对每个缓存的 GGUF 重新探测 HuggingFace | Open [#16267](https://github.com/unslothai/unsloth/issues/16267) |
| **中** | MiniMax-H3 在 Windows 上崩溃，显示 "No available kernel"（torch 无 flash attention） | Open [#16294](https://github.com/unslothai/unsloth/issues/16294) |
| **中** | 从 ModelScope 加载 GGUF 模型失败（固定的 HF revision 404） | Open [#16263](https://github.com/unslothai/unsloth/issues/16263) |
| **中** | North Mini Code 使用 Bearer Token + OpenAIAPI 时流式中断 | Open [#16317](https://github.com/unslothai/unsloth/issues/16317) |
| **低** | Linux（Debian，X11）闪烁 | Open [#16318](https://github.com/unslothai/unsloth/issues/16318) |
| **低** | 设置仅存储在浏览器 localStorage，每个 origin 重置 | Open [#16309](https://github.com/unslothai/unsloth/issues/16309) |

## 6. 对应用开发者的意义

- **CLI 现已支持 VLM 推理**：如果你通过 CLI 微调视觉语言模型，现在可以用 `unsloth inference <model> <prompt> --image <path>` 进行测试。这填补了 VLM 可以训练但无法从命令行调用的空白。

- **关注模型选择器性能**：如果在使用 Unsloth Studio 时缓存了大量 GGUF 模型，模型选择器打开时卡顿 20 分钟是已知问题——考虑变通方案或等待修复。

- **近期避免在非 NVLink GPU 上使用 Studio**：`GGML_CUDA_P2P=1` bug 在 RTX 6000 Ada、L40、L40S 和 L4 上会静默损坏输出。如果使用这些 GPU，请仔细验证模型输出或等待修复。

- **UI 升级即将到来**：毛玻璃主题、macOS 系统级毛玻璃和 RTL 聊天支持正在落地——期待即将发布版本中的视觉变化。

- **音频转录限制提高**：根据 PR [#15952](https://github.com/unslothai/unsloth/pull/15952)，audio.cpp 模型上的转录现在支持最长 4 小时的文件（此前为 30 分钟）。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*