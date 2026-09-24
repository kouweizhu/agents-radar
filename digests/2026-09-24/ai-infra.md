# AI 基础设施日报 2026-09-24

> 生成时间: 2026-09-24 00:50 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the Cross-Project Comparison Report from English to Chinese (Simplified Chinese). Let me follow the translation rules provided:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences.
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form.
5. Issue/PR references like #12345 and their link text stay as-is.
6. Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate while preserving the structure and using natural technical Chinese.</think>

# 跨项目对比报告 — 2026-09-24

## 1. 生态概览

AI推理生态持续沿着三条轴线快速分化：部署目标（云端GPU、边缘NPU、本地CPU）、模型架构（密集模型、MoE、混合SSM/Mamba、视觉语言）以及量化策略（FP8、MXFP4、NVFP4、IQ3）。今日动态显示六个项目并行推进——vLLM和SGLang在云端GPU服务领域竞争最为激烈，分别针对混合架构进行优化；llama.cpp推进消费级硬件的边界推理；Ollama简化本地部署；LiteLLM聚合多提供商路由；Unsloth则连接训练与本地推理。最终效果：基础设施工程师在选择技术栈时面临日益复杂的局面，因为没有任何一个项目能够覆盖从NPU边缘到多GPU云端服务的全部场景。

---

## 2. 活跃度对比

| 项目 | Issues（总计） | PRs（总计） | Releases（24h） |
|---------|---------------|-------------|----------------|
| **vLLM** | 119 | 500+ | 0 |
| **SGLang** | ~150+ | ~300+ | 0 |
| **llama.cpp** | ~280+ | ~1000+ | 1 (v0.5.0) |
| **Ollama** | ~185+ | ~150+ | 1 (v0.34.4) |
| **LiteLLM** | 41 | ~428+ | 6 (v1.99.3 → v1.104.0-dev.1) |
| **Unsloth** | 41 | 302 | 1 (v0.1.815-beta) |

**观察：**
- **LiteLLM** 发布节奏领先（24小时内6个版本），反映了其网关/编排角色的定位——稳定性比功能更重要
- **vLLM和SGLang** 的PR数量最高，表明云端GPU服务优化竞争激烈
- **llama.cpp** 的PR/Issue比率最高，强调广度而非深度
- **Unsloth** 保持精简的302条PR流水线，专注特定优化管道（NVFP4、VAE编译）

---

## 3. 模型支持竞赛

| 模型/架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|-------------------|------|--------|-----------|--------|---------|
| **GLM-5.3 Flash** | ✅ (attention架构已添加) | ✅ (FP8 KV阻塞) | — | — | — |
| **Gemma4 DSpark** | — | — | ✅ (v0.5.0) | — | ✅ (训练) |
| **Qwen-Image-2.1** | — | — | — | — | ✅ (v0.1.815-beta) |
| **MiMo-V2.5/V2.6** | — | — | ✅ (转换) | ✅ (已请求) | — |
| **Ling 3.0 VL** | — | — | ✅ | — | — |
| **SenseNova-U1/U1.5** | — | ✅ (跟踪中) | — | — | — |
| **HunyuanOCR** | — | — | ✅ (v0.5.0) | — | — |
| **HRM-Text (DFM Mimir)** | — | — | ✅ (v0.5.0) | — | — |
| **Kimi-K3** | — | ✅ (EP32回归) | — | — | ✅ (MXFP4训练) |

**排行榜：**
- **视觉语言模型**：llama.cpp（ Ling 3.0 VL）、Unsloth（Qwen-Image-2.1）、SGLang（GLM-5.3）
- **混合SSM/Mamba**：vLLM和SGLang以各自的prefix-caching优化领先
- **NPU/边缘**：Unsloth（Ryzen AI）、llama.cpp（Hexagon NPU）、Ollama（ROCm v10）
- **MoE**：所有项目都在积极添加专家路由和量化支持

---

## 4. 性能前沿

| 优化领域 | 领先项目 | 关键工作 |
|--------------------|-------------------|----------|
| **KV缓存 / 前缀缓存** | vLLM, SGLang | Mamba混合批处理、层级缓存、融合多步解码 |
| **量化（云端GPU）** | vLLM, SGLang, Unsloth | MXFP4、NVFP4逐层策略、int4_per_token_head |
| **量化（边缘/NPU）** | llama.cpp, Unsloth | IQ3重排序、int8协作矩阵、MXFP8调度 |
| **批量预填充/解码** | vLLM, SGLang | 两阶段GDN/Mamba预填充（+7.58x）、批次无关模式 |
| **稀疏注意力** | llama.cpp | dsv4预填充sparse-fa重新启用 |
| **内核融合（AMD）** | SGLang | ROCm DSA索引器（11→1内核）、Qwen3.5 GDN优化 |
| **Flash Attention** | llama.cpp, vLLM | SM120自适应分片K、Metal线程组修复 |
| **VAE编译** | Unsloth | DiT VAE解码编译 |
| **网关路由** | LiteLLM | Redis协调、预算执行 |

**关键分歧**：vLLM/SGLang专注于云端多GPU服务，采用激进的内核融合；llama.cpp针对单GPU消费级硬件优化；Unsloth通过编译通道连接训练和本地推理；LiteLLM则聚焦于可观测性和多提供商编排。

---

## 5. 分层定位

| 层级 | 主要项目 | 描述 |
|-------|---------------------|-------------|
| **训练 / 微调** | **Unsloth** | 高效GPU LoRA/QLoRA训练，支持NVFP4、MXFP4、compressed-tensors |
| **本地运行时** | **llama.cpp**, **Ollama** | llama.cpp：可移植C++运行时（CPU/GPU/NPU）；Ollama：开箱即用的本地服务 |
| **云端服务引擎** | **vLLM**, **SGLang** | 生产级P2P推理，包含调度器、前缀缓存、投机解码 |
| **网关 / 代理** | **LiteLLM** | 多提供商聚合、成本追踪、限流、预算执行 |
| **混合栈** | **Unsloth** | 训练→vLLM/SGLang导出管道（LoRA合并、GGUF导出） |

**竞争态势**：
- **vLLM vs SGLang**：两者都瞄准相同的云端GPU服务层；差异化在于优化专长（vLLM：Mamba/层级缓存；SGLang：ROCm/AMD parity）
- **llama.cpp vs Ollama**：llama.cpp是引擎；Ollama是包装了UX/运维的产品化层
- **Unsloth作为桥梁**：定位为训练层，供给vLLM/SGLang/llama.cpp进行服务

---

## 6. 趋势信号

**基础设施工程师应关注：**

1. **混合SSM/Mamba进入生产阶段**：vLLM和SGLang都针对混合架构发布了重要的前缀缓存优化。vLLM的+7.58x吞吐量提升表明，基于Mamba的模型（如Qwen3.5-35B等）已准备好用于延迟敏感型工作负载。**行动**：如果你需要长上下文效率，下一代产品应评估混合模型。

2. **AMD ROCm不再是二等公民**：SGLang完成了多个ROCm内核优化（融合DSA索引器、Qwen3.5 GDN、MI355X稀疏MLA）。加上llama.cpp的Hexagon NPU后端和Ollama的ROCm v10，AMD硬件正在获得原生优化平权。**行动**：在成本敏感型部署中重新评估AMD；不要假定只有NVIDIA可用。

3. **量化正在碎片化**：NVFP4（Blackwell）、MXFP4（AMD）、IQ3（llama.cpp）、int4_per_token_head（vLLM）——每个方案针对不同的硬件和模型类型。没有单一的量化方案占主导。**行动**：根据GPU代数匹配量化；针对每个模型测试精度回归。

4. **边缘NPU推理正在兴起**：Unsloth添加了Ryzen AI支持（PR #11743），llama.cpp添加了Hexagon NPU构建。这表明对低于100W的边缘部署投资正在增长。**行动**：关注中；NPU推理质量尚未达到前沿模型竞争力。

5. **网关复杂性在增加**：LiteLLM的预算绕过漏洞（#26672）和限流器重复计数（#34140）提醒我们，多提供商路由增加了超出推理引擎本身的故障模式。**行动**：将LiteLLM视为关键基础设施；实施超越"是否返回"的健康检查。

6. **服务与训练的差距在缩小**：Unsloth的vLLM/SGLang导出管道（PR #11491）和GGUF支持（Qwen-Image-2.1）实现了无需模型转换摩擦的训练→服务工作流。**行动**：如果你迭代频繁，考虑统一工具链。

7. **Flash Attention回归再次出现**：llama.cpp的CUDA稀疏FA 1.6x减速（#29281）和vLLM的int4_per_token_head头大小bug（#56197）提醒我们，优化通道携带回归风险。**行动**：升级前后进行基准测试；版本锁定已知良好的配置。

*基于2026-09-24的GitHub活动进行跨项目分析*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the English GitHub digest about vLLM into Chinese. Let me translate the content while:

1. Keeping all Markdown structure exactly (headings, tables, lists, bold/italic, horizontal rules, emoji)
2. Preserving URLs, issue/PR numbers, code identifiers, etc.
3. Using natural technical Chinese (the register of a Chinese developer newsletter)
4. Outputting ONLY the translation - no preamble, no explanation, no markdown fences

Let me go through the content:

1. **Today's Highlights** - translate naturally
2. **Releases & Breaking Changes** - translate
3. **New Model & Hardware Support** - translate the table
4. **Performance & Optimization** - translate the table
5. **Stability & Regressions** - translate the table
6. **What This Means for Application Developers** - translate the numbered list

Let me do this carefully:</think>

# vLLM 每日简报 — 2026-09-24

## 1. 今日要闻

今日开发活动主要围绕混合架构与多步推测解码的性能优化展开，同时包括针对 ROCm KV 缓存内存管理的关键 bug 修复。最具影响力的 PR 系列实现了混合 GDN/Mamba 模型的批处理两阶段分组预填充执行，吞吐量提升高达 **7.58 倍**。此外，一项重要 bugfix 解决了大型 MoE 模型在 ROCm 上的 KV 缓存 OOM 问题。

---

## 2. 发布与重大变更

**过去 24 小时内无新版本发布。**

---

## 3. 新模型与硬件支持

| 项目 | 描述 | PR/Issue |
|------|-------------|----------|
| **GLM-5.3-Flash 支持** | 新增 `Glmam5NextTextLinearAttention` 注意力架构；正在修复长序列解码时的退化问题 (#56868, #54062) | Issue #54062 |
| **Qwen 视觉编码器** | 修复了非整除 TP 尺寸时的数据并行回退 | PR #57119 |
| **ROCm gfx950 / MI355X** | Qwen3.8-2.4T-A95B + MXFP4 量化的性能优化路线图 | Issue #57149 |
| **AMD MI355X 稀疏 MLA** | 在 ROCm (gfx950) 上启用 HiSparse 热缓冲 | PR #57602 |

---

## 4. 性能与优化

| 变更 | 影响 | PR/Issue |
|--------|--------|----------|
| **批处理两阶段 GDN/Mamba 预填充** | **+7.58 倍吞吐量**，共享前缀的混合 GDN/Mamba 模型 (Qwen3.5 35B-A3B) | PR #55876 (第三部分) |
| **MTP 融合多步解码** | 移除 DeepSeek V4 MTP 融合多步解码时的 eager 元数据重构建 | PR #58463 |
| **KV 缓存工作区大小** | KV 大小计算前修复内存占用——禁用图保留时保留前向传播头部空间 | PR #57865 |
| **SM120 注意力占用率** | 基于 SM 利用率的自适应 Triton split-K 段数 (64 vs 16) | PR #58482 |
| **int4_per_token_head 头维度** | 修复非 2 的幂头维度支持（此前为断言失败） | PR #56198 / Issue #56197 |
| **自定义 all-reduce 初始化** | 批量不变模式兼容性初始化时分配缓冲区大小 | PR #50505 |
| **DiffusionGemma 约束读取** | 通过 `logprob_token_ids` 优化实现约 25% 的约束扩散加速 | PR #58216 |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | **ROCm KV 缓存 OOM** — MI355X 上大型 MoE 模型 (DeepSeek-R1-MXFP4 TP8) 的后分析初始化消耗未计入的内存 | 修复 PR #58483 |
| **高** | **调度器死锁** — 当 `running + skipped_waiting` 达到 `max_num_seqs` 时永久停止接收请求 | Issue #53130 |
| **高** | **V1 引擎 + MTP 挂起** — GLM-5.1 (DSA + MoE + MLA) 持续流量下 worker 挂起，`sample_tokens` RPC 超时 | Issue #40926 |
| **中** | **混合 Mamba 前缀缓存** — 使用显式 `--block-size` 时前缀缓存恢复时的非法内存访问（状态列使用错误的块大小播种） | Issue #53142 |
| **中** | **CUDA graph 内存** — Qwen3.5 在 CUDA graph 模式下内存消耗过高 | Issue #38486 |
| **中** | **Gemma 4 31B MTP** — 草稿接受率异常低 (~0.2%) | Issue #41789 |
| **低** | **Intel XPU 主机内存** — 模型加载后未释放 | Issue #50269 |

---

## 6. 这对应用开发者意味着什么

1. **混合 Mamba/GDN 用户**：三部分 PR 系列 (#55873, #55875, #55876) 大幅提升了 Qwen3.5-35B-A3B 等模型的前缀处理能力。使用前缀缓存的混合架构用户将获得显著的吞吐量提升。

2. **ROCm 用户**：KV 缓存 OOM 修复 (#58483) 对在 MI355X 上运行大型 MoE 模型 (DeepSeek-R1-MXFP4 TP8) 至关重要。合并后请确保拉取最新的 ROCm 构建版本。

3. **推测解码用户**：DeepSeek V4 用户在使用 MTP > 1 时将从融合多步解码优化 (#58463) 中受益，减少元数据重构建开销。

4. **量化用户**：如果使用非 2 的幂头维度的 `int4_per_token_head`（如某些自定义配置），现在可以正常工作 (#56198)。

5. **调度器运维人员**：新增的 admission rejection 指标 (#55812) 提升了队列容量限制的可观测性——在 Prometheus 导出中关注带有 `reason` 标签的 `vllm:admission_rejections_total`。

---

*基于 vllm-project/vllm GitHub 数据生成 — 2026-09-24*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang digest into Chinese. Let me translate the content while preserving the markdown structure, URLs, issue numbers, and technical terms exactly as they are.

I need to:
1. Translate the content into Chinese
2. Keep all markdown formatting
3. Keep issue numbers, URLs, and technical terms as-is
4. Use natural technical Chinese

Let me go through each section:</think>

# SGLang 速报 — 2026-09-24

## 1. 今日要闻

开发多点开花：ROCm AMD 优化持续推进，GLM-5 和 Qwen3.5 的新融合内核已合入，同时报告了多个正确性 bug，包括 H200 上 TRTLLA MHA 返回错误补全结果的严重回归，以及 HiCache + Mamba 混合模型崩溃问题。社区还修复了一个可能导致推理服务器卡死的陈旧 torch 扩展锁问题。

---

## 2. 发布与破坏性变更

过去 24 小时无发布。注意：v0.5.20 镜像存在回归，`trtllm_mha` 在 H200 上无论是 prefill 还是 decode 都返回错误补全结果 — v0.5.17 正确拒绝了这个配置（[#40921](https://github.com/sgl-project/sglang/issues/40921)）。

---

## 3. 新模型与硬件支持

- **SenseNova-U1 / U1.5** — 功能与性能跟踪 issue 已开启，基于 OpenSenseNova 参考实现（[#37742](https://github.com/sgl-project/sglang/issues/37742)）
- **Qwen3.8-Flash-Next** — 路线图进行中，FP8 KV cache 已落地，内核优化中（[#38731](https://github.com/sgl-project/sglang/issues/38731)）
- **GLM-5.2 + AMD/ROCm DSpark** — MI350、ROCm 7.x 支持跟踪（[#30734](https://github.com/sgl-project/sglang/issues/30734)）
- **AMD gfx1250 MI45x** — CI/CD 已添加（[#40876](https://github.com/sgl-project/sglang/pull/40876)）

---

## 4. 性能与优化

**ROCm/AMD 内核：**
- GLM-5 q/k 预处理的 ROCm 融合 DSA indexer — 11 个内核合为 1 个（[#34394](https://github.com/sgl-project/sglang/pull/34394)）
- Qwen3.5 GDN prefill 在 ROCm 上优化 — 移除冗余物化和 QKV 切分（[#38806](https://github.com/sgl-project/sglang/pull/38806)）
- gfx950 (Qwen) 小型 MXFP4 融合 MoE 内核 — 目标每 rank 1–40 tokens 的 decode batch（[#40204](https://github.com/sgl-project/sglang/pull/40204)）
- DeepSeek V4 fp8 unified_kv decode：MI355X 上 >40 tokens 的 wave 感知切分优化（[#40878](https://github.com/sgl-project/sglang/pull/40878)）
- AMD 上小 batch MoE 排序与融合 MXFP8 量化（[#36559](https://github.com/sgl-project/sglang/pull/36559)）

**NPU 优化：**
- MiMo-V2.5 MoE router：运行 bf16，移除冗余 topk_ids 转换（[#40149](https://github.com/sgl-project/sglang/pull/40149)）
- MXFP8 低延迟 DeepEP 分发用于 FP4 专家的 NPU（[#40519](https://github.com/sgl-project/sglang/pull/40519)）

**基准测试：**
- 为 generated-shared-prefix 工作负载添加 `--gsp-input-ids` 标志以跳过服务端 tokenization（[#40900](https://github.com/sgl-project/sglang/pull/40900)）

---

## 5. 稳定性与回归

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **严重** | H200 上 TRTLLA MHA 返回错误补全结果 (v0.5.20) | 待处理 — [#40921](https://github.com/sgl-project/sglang/issues/40921) |
| **高** | HiCache + 混合 SSM/Mamba：cudaHostRegister 失败导致实例崩溃 + TypeError 掩盖真实错误 | 待处理 — [#40926](https://github.com/sgl-project/sglang/issues/40926) |
| **高** | Kimi-K3 EP32：MegaMoE 严重重复/精度回归 | 待处理 — [#40751](https://github.com/sgl-project/sglang/issues/40751) |
| **中** | GLM-5.3-Flash 无法使用 FP8 KV cache（`index_kpool > 1` 排除 flashmla_kv） | 待处理 — [#36830](https://github.com/sgl-project/sglang/issues/36830) |
| **中** | GLM-5.3-Flash vision 在 main 上损坏（pinned transformers==5.12.1 缺少 glm5_next） | 待处理 — [#39831](https://github.com/sgl-project/sglang/issues/39831) |
| **中** | Scheduler 崩溃：混合 token_ids_logprob batch 时 `'list' object has no attribute 'tolist'` | 待处理 — [#34719](https://github.com/sgl-project/sglang/issues/34719) |
| **中** | FP8 KV-cache decode 减速：非融合 K/V 量化 + 每层 Q 转换 | 待处理 — [#30815](https://github.com/sgl-project/sglang/issues/30815) |
| **中** | NVFP4 KV cache + 投机解码崩溃 | 待处理 — [#36010](https://github.com/sgl-project/sglang/issues/36010) |
| **低** | sgl-deep-gemm 0.2.0：SM90 weight-scale transform 返回非拥有权引用 | 待处理 — [#39684](https://github.com/sgl-project/sglang/issues/39684) |

**基础设施修复：**
- 从 cpp_extension loader 中恢复陈旧的 torch 扩展锁 — 修复 HiCache、KDA、HF3FS 中的卡死问题（[#40989](https://github.com/sgl-project/sglang/pull/40989)）

---

## 6. 这对应用开发者意味着什么

- **在 v0.5.20 中避免对 H200 使用 `trtllm_mha` 进行 prefill+decode 混合** — 要么仅用于 prefill 或仅用于 decode，或者降级到 v0.5.17。
- **HiCache + 混合 Mamba 模型目前在 H20 上不稳定** — 在修复 cudaHostRegister 错误之前，避免使用 `--enable-hierarchical-cache --hicache-storage-backend dynamic`。
- **混合 batch 使用 `token_ids_logprob` 可能导致 scheduler 崩溃** — 隔离这些请求或预期潜在停机。
- **DeepSeek chunked-prefix caching 存在静默精度 bug**：以 2 为底的对数 LSE 与自然对数公式混合导致前缀缓存命中时逐渐降级（[#40903](https://github.com/sgl-project/sglang/issues/40903)）。
- **GLM-5.3-Flash 用户**：FP8 KV cache 不可用；vision 流程在最新 main 上损坏。
- **如果在 AMD MI355X 上运行**：新 ROCm 内核已合入本周期 — 预期 MoE decode 性能提升。

**CI 健康度**：截至 2026-09-23，2 个broken，11 个 flaky 测试 — 新功能合入期间存在一些不稳定（[#17050](https://github.com/sgl-project/sglang/issues/17050)）。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the llama.cpp digest into Simplified Chinese. Let me translate the content following the rules provided:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully:</think>

# llama.cpp 动态 — 2026-09-24

## 1. 今日要闻

**v0.5.0** 版本正式发布，后端性能提升显著，新增 ggml 0.25.0、多地址 HTTP 绑定，并扩展了模型支持范围（HRM-Text、MiMo-V2.6、HunyuanOCR、Gemma4 DSpark）。开发工作持续推进，包括 CUDA sparse attention、Vulkan int8 coopmat 和 Metal 后端修复。需要注意的是，有用户报告了一个显著的回归问题：CUDA sparse flash attention 解码速度**变慢了 1.6 倍**。

---

## 2. 版本发布与破坏性变更

| 版本 | 主要变更 | 链接 |
|---------|-------------|------|
| **v0.5.0** | ggml 0.25.0 后端；新增 HRM-Text (DFM Mimir 1B)、MiMo-V2.6、HunyuanOCR 模型转换支持；多地址 HTTP 绑定；图片输出支持 | [Release](https://github.com/ggml-org/llama.cpp/releases/tag/v0.5.0) |
| b11149 | 测试用例新增 `-b/--backend` 选项 | [#29341](https://github.com/ggml-org/llama.cpp/pull/29341) |
| b11147 | OpenCL 新增 A8 Q6_K 非 MoE dp4a 二进制内核 | [#29057](https://github.com/ggml-org/llama.cpp/pull/29057) |
| b11146 | 版本号更新至 0.5.0 | [#29333](https://github.com/ggml-org/llama.cpp/pull/29333) |
| b11140 | CUDA 重新启用 dsv4 prefill 的 sparse-fa | [#29298](https://github.com/ggml-org/llama.cpp/pull/29298) |
| b11139 | 修复 server token counting API 睡眠时崩溃 | [#29309](https://github.com/ggml-org/llama.cpp/pull/29309) |
| b11138 | jinja: 变量前解析一元 +/- 运算符 | [#29284](https://github.com/ggml-org/llama.cpp/pull/29284) |
| b11136 | server: 支持 OpenAI video_url 内容类型和 data: video URI | [#27921](https://github.com/ggml-org/llama.cpp/pull/27921) |
| b11135 | 通过 dedup-cache-models 对 draft HF 模型去重 | [#27934](https://github.com/ggml-org/llama.cpp/pull/27934) |
| b11132 | model: 支持 Gemma4 DSpark draft 主干网络 | [#29226](https://github.com/ggml-org/llama.cpp/pull/29226) |

**迁移说明：** v0.5.0 未报告破坏性 API 变更。本次发布重点关注后端正确性和 server/router 健壮性。

---

## 3. 新模型与硬件支持

- **Gemma4 DSpark 主干网络** — 全注意力与 SWA 支持，权重绑定输出，布尔型主干网络元数据 ([#29226](https://github.com/ggml-org/llama.cpp/pull/29226))
- **Ling 3.0 VL** — 混合 KDA + 门控 MLA MoE 视觉语言模型（总计 124B / 激活 5.1B）([#29151](https://github.com/ggml-org/llama.cpp/pull/29151))
- **Laguna S 2.1 DFlash** — 功能需求议题已开启 ([#26669](https://github.com/ggml-org/llama.cpp/issues/26669))
- **Hexagon NPU 后端** — 新增 Windows Arm64 构建 CI ([#29052](https://github.com/ggml-org/llama.cpp/pull/29052))
- **OpenCL** — A8 Q6_K 非 MoE dp4a 二进制内核 ([#29057](https://github.com/ggml-org/llama.cpp/pull/29057))
- **多地址 HTTP 绑定** — 新增对逗号分隔地址列表的解析支持 ([#29331](https://github.com/ggml-org/llama.cpp/pull/29331))

---

## 4. 性能优化

| 领域 | 变更 | 详情 |
|------|--------|---------|
| **CUDA sparse attention** | 重新启用 dsv4 prefill 的 sparse-fa | 查询循环展开以支持 flash_attn_mask_to_sparse_indices ([#29298](https://github.com/ggml-org/llama.cpp/pull/29298)) |
| **Vulkan int8 coopmat** | RDNA3/RDNA4 新增 MMQ cm1 着色器 | 支持 q4_0、q4_1、q5_0、q5_1、q8_0、q3_k、q4_k、q5_k、q6_k、mxfp4、nvfp4、iq4_nl ([#27952](https://github.com/ggml-org/llama.cpp/pull/27952)) |
| **SYCL attention** | IQ3 代码重排序 | IQ3_S/XXS MMVQ 的持久化重排序布局，重排序感知的反量化 ([#29107](https://github.com/ggml-org/llama.cpp/pull/29107)) |
| **Metal flash attention** | 线程组内存溢出修复 | 修复头大小 512/512 或 576/512 批量 20-31 时的溢出问题 ([#29340](https://github.com/ggml-org/llama.cpp/pull/29340)) |
| **Qwen4Exp/Gemma4** | 懒加载张量行直接读取 | 使用 llama_file 的 OS 无感知实现，取代 #28136 ([#29030](https://github.com/ggml-org/llama.cpp/pull/29030)) |
| **CUDA** | Hopper 架构 FP8 矩阵乘法的动态分片 | 针对 H100/H200 优化 ([#29337](https://github.com/ggml-org/llama.cpp/pull/29337)) |
| **CUDA/ROCm** | 统一 bf16 bf16_2 核函数 | 减少代码重复 ([#29276](https://github.com/ggml-org/llama.cpp/pull/29276)) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | CUDA sparse flash attention **变慢 1.6 倍** (b11047 → b11062) | 进行中 — [#29281](https://github.com/ggml-org/llama.cpp/issues/29281) |
| **高** | Qwen4Exp CUDA 解码随上下文长度线性变慢 | 进行中 — [#28734](https://github.com/ggml-org/llama.cpp/issues/28734) |
| **高** | Vulkan RDNA3 提示词处理速度在 b10780 后下降 | 进行中 — [#28752](https://github.com/ggml-org/llama.cpp/issues/28752) |
| **中** | HIP/ROCm gfx1151  logits 错误（不崩溃） | 进行中 — [#28211](https://github.com/ggml-org/llama.cpp/issues/28211) |
| **中** | Metal 长序列批处理解码吞吐量骤降（M3 Ultra） | 进行中 — [#29335](https://github.com/ggml-org/llama.cpp/issues/29335) |
| **中** | OpenVINO NPU SIGSEGV (Intel Core Ultra 7 255H) | 进行中 — [#25904](https://github.com/ggml-org/llama.cpp/issues/25904) |
| **中** | draft-MTP RPC split 生成性能下降 | 进行中 — [#29327](https://github.com/ggml-org/llama.cpp/issues/29327) |
| **中** | Vulkan 着色器缓存加载失败 | 进行中 — [#29316](https://github.com/ggml-org/llama.cpp/issues/29316) |
| **低** | Qwen4Exp prompt processing 回归 | 进行中 — [#28733](https://github.com/ggml-org/llama.cpp/issues/28733) |
| **已修复** | Server token counting API 睡眠时崩溃 | 已合并 — [#29309](https://github.com/ggml-org/llama.cpp/pull/29309) |
| **已修复** | ggml-backend-meta 多缓冲区 Vulkan 段错误 | 已关闭 — [#22197](https://github.com/ggml-org/llama.cpp/issues/22197) |

---

## 6. 应用开发者需要关注的事项

1. **升级到 v0.5.0** — 该版本提供 ggml 0.25.0 后端改进和多地址 HTTP 绑定，对容器化部署很有帮助。由于存在 CUDA sparse attention 回归问题，生产环境使用前请务必充分测试。

2. **量化配置注意** — CUDA 上使用 4 位 KV 缓存的用户：`GGML_CUDA_FA_ALL_QUANTS=ON` 即将成为默认值（[#28633](https://github.com/ggml-org/llama.cpp/issues/28633)），但目前会静默回退到 CPU。请监控 KV 缓存量化设置。

3. **新视觉模型支持** — Ling 3.0 VL 和增强的 DFlash/DSpark 能力为多模态部署提供了可能。视觉目标的转换工具现已正确解析架构（[#29339](https://github.com/ggml-org/llama.cpp/pull/29339)）。

4. **Server 改进** — 新增视频 URL 内容类型支持（[#27921](https://github.com/ggml-org/llama.cpp/pull/27921)）、通过 dedup-cache-models 对 draft 模型去重（[#27934](https://github.com/ggml-org/llama.cpp/pull/27934)）、`/v1/responses` text.format 转换（[#29346](https://github.com/ggml-org/llama.cpp/pull/29346)）。

5. **Vulkan 用户长上下文场景** — 在 AMD RDNA3 上使用 131K 上下文时，请注意由于子分配碎片化可能导致约 78% 的吞吐量下降；变通方案：`GGML_VK_SUBALLOCATION_BLOCK_SIZE=4GiB`（[#27734](https://github.com/ggml-org/llama.cpp/issues/27734)）。

---

## 7. 功能需求热点

| 功能 | 讨论 |
|------|------|
| Fast Tool Gating | [#29022](https://github.com/ggml-org/llama.cpp/issues/29022) |
| llama serve -hf 路由模式 | [#26116](https://github.com/ggml-org/llama.cpp/issues/26116) |
| 设备级显存使用量暴露 | [#26129](https://github.com/ggml-org/llama.cpp/issues/26129) (已关闭) |
| Windows ARM64 Vulkan | [#29336](https://github.com/ggml-org/llama.cpp/issues/29336) |

---

## 8. 近期提交排行（24 小时内）

| 提交数 | 作者 |
|--------|------|
| 9 | [@JohannesGGE](https://github.com/ggml-org/llama.cpp/commits?author=JohannesGGE) |
| 7 | [@slaren](https://github.com/ggml-org/llama.cpp/commits?author=slaren) |
| 5 | [@jart](https://github.com/ggml-org/llama.cpp/commits?author=jart) |
| 4 | [@ggerganov](https://github.com/ggml-org/llama.cpp/commits?author=ggerganov) |
| 4 | [@cyanxiao](https://github.com/ggml-org/llama.cpp/commits?author=cyanxiao) |
| 4 | [@LiRic](https://github.com/ggml-org/llama.cpp/commits?author=LiRic) |
| 3 | [@ngxson](https://github.com/ggml-org/llama.cpp/commits?author=ngxson) |
| 3 | [@axLeft](https://github.com/ggml-org/llama.cpp/commits?author=axLeft) |

---

## 9. 相关链接

- [代码仓库](https://github.com/ggml-org/llama.cpp)
- [发布说明](https://github.com/ggml-org/llama.cpp/releases)
- [提交历史](https://github.com/ggml-org/llama.cpp/commits/master)
- [文档](https://github.com/ggml-org/llama.cpp/tree/master/docs)
- [Discord](https://discord.gg/4k55R3y)

---

*如有遗漏的重要更新，欢迎提交 PR。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama Digest into Simplified Chinese, following specific rules about preserving formatting and using natural technical Chinese. Let me go through the content carefully.

Key things to translate:
1. Headings
2. Body text
3. Table headers and content
4. List items
5. Issue descriptions

Things to keep as-is:
- URLs
- Issue/PR numbers (#18505, etc.)
- Version numbers (v0.34.4)
- Code references
- Project names (Ollama, MLX, ROCm, etc.)
- File paths
- Markdown structure

Let me translate section by section:

---

# Ollama 摘要 — 2026-09-24

## 今日要闻

v0.34.4 版本修复了间歇性的"model not found"错误，并改进了思维模型的结构化输出单次处理。一个重要的 CPU 回归问题已修复（#17833, #18613）—— v0.32.14 即使模型完全加载到显存中也会占用 10-20+ 个 CPU 核心且跑满 100%，现已通过向 llama-server 传递 `--poll 0` 解决。多个 MLX 引擎问题正在修复中，包括结构化输出终止问题和 XGrammar 更新。

---

## 版本发布与重大变更

| 版本 | 变更 | PR |
|---------|---------|-----|
| **v0.34.4** | 修复间歇性"model not found"错误；在思维模型上单次应用结构化输出 | [#18438](https://github.com/ollama/ollama/pull/18438), [#18479](https://github.com/ollama/ollama/pull/18479) |

**注意**：版本说明中"app: avoid System Events for..."被截断；请查看完整变更日志以了解 macOS 相关变更。

---

## 新模型与硬件支持

- **ROCm v10**：AMD GPU 支持已升级至 ROCm v10，改进的 HCL（+5 Linux 修复，+7 Windows 修复）— [#16446](https://github.com/ollama/ollama/pull/16446)
- **MiMo v2.5**：功能请求：添加小米百万 token 上下文 LLM 至 Ollama Cloud — [#15887](https://github.com/ollama/ollama/issues/15887)

ROCm v10 更新带来了显著的硬件兼容性改进。MiMo v2.5 的加入扩展了 Ollama Cloud 的模型库，支持更长的上下文处理。

- **MiMo v2.6**：模型请求下载 — [#18616](https://github.com/ollama/ollama/issues/18616)
- **Nemotron**：MLX 修复及全局尺度支持 — [#18614](https://github.com/ollama/ollama/pull/18614)

---

## 性能与优化

| 领域 | 变更 | 影响 |
|------|--------|--------|
| **CPU 使用率** | 有 GPU 时向 llama-server 传递 `--poll 0` | 修复 v0.32.14 的 10-20+ 核心 CPU 满载问题；恢复至 10-15% 基线 — [#18613](https://github.com/ollama/ollama/pull/18613) |
| **MLX 结构化输出** | 更新 XGrammar 至 0.2.7；限制语法空白符 | 修复 JSON schema 输出的不终止问题 — [#18615](https://github.com/ollama/ollama/pull/18615), [#18569](https://github.com/ollama/ollama/pull/18569) |
| **MLX 加载** | 实现加载进度报告与卡顿检测 | 避免取消超过默认超时的慢/长加载任务 — [#17834](https://github.com/ollama/ollama/pull/17834) |
| **Embedding JSON** | 避免 OpenAI embeddings 的原生 JSON 往返 | 减少大批量序列

化开销 — [#18610](https://github.com/ollama/ollama/pull/18610)

---

## 稳定性与回归问题

### 高严重级别
| Issue | 描述 | 状态 |
|-------|-------------|---------|
| [#18505](https://github.com/ollama/ollama/issues/18505) | MLX nvfp4：预处理阶段请求卡顿，显示已处理=总数-1 且零 token 持续数分钟；只能通过 runner SIGTERM 恢复 | OPEN，7 条评论 |
| [#18392](https://github.com/ollama/ollama/issues/18392) | Windows 上持续调用 `/api/embed` 会耗尽 loopback 端口——llama-server HTTP 客户端禁用了 keep-alive | OPEN，2 条评论 |

### 中等严重级别
| Issue | 描述 | 状态 |
|-------|-------------|---------|
| [#18609](https://github.com/ollama/ollama/issues/18609) | glm-ocr：0.34.1+ 对 0.34.0 成功过的 OCR 请求返回 HTTP 500 "token repeat limit reached" | OPEN |
| [#18597](https://github.com/ollama/ollama/issues/18597) | Homebrew 安装的 Ollama 运行 MLX 模型时无法提供结构化输出（找不到 xgrammar 库） | OPEN，3 条评论 |
| [#12187](https://github.com/ollama/ollama/issues/12187) | GPT-OSS 在 Open WebUI 中无法完成工具调用 | OPEN，39 条评论 |

### 已修复
- **#18567** (CLOSED): MLX 结构化输出永不终止 — 通过限制语法空白符修复
- **#18605** (CLOSED): gemma4 47+ 字符串值的工具调用被丢弃 — 解析器冲突修复
- **#18611**: xgrammar 独立 CMake 项目用于原生库（启用 Homebrew MLX 支持）

---

## 对应用开发者的意义

1. **如果你使用 GPU 推理**：v0.32.14 的 CPU 回归问题现已在新版本路径中修复。如被困在旧版本，请查阅 #18613 了解回 port 选项。

2. **如果你在 MLX 上使用结构化输出**：JSON 生成不终止的 bug 已在 v0.34.4 中修复。如果使用 Homebrew，请等待 xgrammar 修复进入其配方。

3. **如果你在 Windows 上大规模使用 embedding**：问题 #18392 表明持续负载下会导致端口耗尽——请考虑批处理策略或监控连接限制直至修复。

4. **如果你使用 glm-ocr**：0.34.1+ 中的回归问题导致 token 重复失败；可能需要锁定在 0.34.0 或等待 #17195 上线。

5. **如果你需要模型导入/导出**：PR #18578 添加了 `ollama export`/`import` 命令以及 `/api/export` 和 `/api/import` 端点——适用于离线/气隙部署。

The export and import functionality provides essential flexibility for air-gapped environments, enabling model transfer without network connectivity. This feature directly addresses deployment scenarios where security or infrastructure constraints prevent online model distribution.</think>

# Ollama 摘要 — 2026-09-24

## 今日要闻

v0.34.4 版本修复了间歇性的"model not found"错误，并改进了思维模型的结构化输出单次处理。一个重要的 CPU 回归问题已修复（#17833, #18613）—— v0.32.14 即使模型完全加载到显存中也会占用 10-20+ 个 CPU 核心且跑满 100%，现已通过向 llama-server 传递 `--poll 0` 解决。多个 MLX 引擎问题正在修复中，包括结构化输出终止问题和 XGrammar 更新。

---

## 版本发布与重大变更

| 版本 | 变更 | PR |
|---------|---------|-----|
| **v0.34.4** | 修复间歇性"model not found"错误；在思维模型上单次应用结构化输出 | [#18438](https://github.com/ollama/ollama/pull/18438), [#18479](https://github.com/ollama/ollama/pull/18479) |

**注意**：版本说明中"app: avoid System Events for..."被截断；请查看完整变更日志以了解 macOS 相关变更。

---

## 新模型与硬件支持

- **ROCm v10**：AMD GPU 支持已升级至 ROCm v10，改进的 HCL（+5 Linux 修复，+7 Windows 修复）— [#16446](https://github.com/ollama/ollama/pull/16446)
- **MiMo v2.5**：功能请求：添加小米百万 token 上下文 LLM 至 Ollama Cloud — [#15887](https://github.com/ollama/ollama/issues/15887)
- **MiMo v2.6**：模型请求下载 — [#18616](https://github.com/ollama/ollama/issues/18616)
- **Nemotron**：MLX 修复及全局尺度支持 — [#18614](https://github.com/ollama/ollama/pull/18614)

---

## 性能与优化

| 领域 | 变更 | 影响 |
|------|--------|--------|
| **CPU 使用率** | 有 GPU 时向 llama-server 传递 `--poll 0` | 修复 v0.32.14 的 10-20+ 核心 CPU 满载问题；恢复至 10-15% 基线 — [#18613](https://github.com/ollama/ollama/pull/18613) |
| **MLX 结构化输出** | 更新 XGrammar 至 0.2.7；限制语法空白符 | 修复 JSON schema 输出的不终止问题 — [#18615](https://github.com/ollama/ollama/pull/18615), [#18569](https://github.com/ollama/ollama/pull/18569) |
| **MLX 加载** | 实现加载进度报告与卡顿检测 | 避免取消超过默认超时的慢/长加载任务 — [#17834](https://github.com/ollama/ollama/pull/17834) |
| **Embedding JSON** | 避免 OpenAI embeddings 的原生 JSON 往返 | 减少大批量序列化开销 — [#18610](https://github.com/ollama/ollama/pull/18610) |

---

## 稳定性与回归问题

### 高严重级别
| Issue | 描述 | 状态 |
|-------|-------------|---------|
| [#18505](https://github.com/ollama/ollama/issues/18505) | MLX nvfp4：预处理阶段请求卡顿，显示已处理=总数-1 且零 token 持续数分钟；只能通过 runner SIGTERM 恢复 | OPEN，7 条评论 |
| [#18392](https://github.com/ollama/ollama/issues/18392) | Windows 上持续调用 `/api/embed` 会耗尽 loopback 端口——llama-server HTTP 客户端禁用了 keep-alive | OPEN，2 条评论 |

### 中等严重级别
| Issue | 描述 | 状态 |
|-------|-------------|---------|
| [#18609](https://github.com/ollama/ollama/issues/18609) | glm-ocr：0.34.1+ 对 0.34.0 成功过的 OCR 请求返回 HTTP 500 "token repeat limit reached" | OPEN |
| [#18597](https://github.com/ollama/ollama/issues/18597) | Homebrew 安装的 Ollama 运行 MLX 模型时无法提供结构化输出（找不到 xgrammar 库） | OPEN，3 条评论 |
| [#12187](https://github.com/ollama/ollama/issues/12187) | GPT-OSS 在 Open WebUI 中无法完成工具调用 | OPEN，39 条评论 |

### 已修复
- **#18567** (CLOSED): MLX 结构化输出永不终止 — 通过限制语法空白符修复
- **#18605** (CLOSED): gemma4 47+ 字符串值的工具调用被丢弃 — 解析器冲突修复
- **#18611**: xgrammar 独立 CMake 项目用于原生库（启用 Homebrew MLX 支持）

---

## 对应用开发者的意义

1. **如果你使用 GPU 推理**：v0.32.14 的 CPU 回归问题现已在新版本路径中修复。如被困在旧版本，请查阅 #18613 了解回 port 选项。

2. **如果你在 MLX 上使用结构化输出**：JSON 生成不终止的 bug 已在 v0.34.4 中修复。如果使用 Homebrew，请等待 xgrammar 修复进入其配方。

3. **如果你在 Windows 上大规模使用 embedding**：问题 #18392 表明持续负载下会导致端口耗尽——请考虑批处理策略或监控连接限制直至修复。

4. **如果你使用 glm-ocr**：0.34.1+ 中的回归问题导致 token 重复失败；可能需要锁定在 0.34.0 或等待 #17195 上线。

5. **如果你需要模型导入/导出**：PR #18578 添加了 `ollama export`/`import` 命令以及 `/api/export` 和 `/api/import` 端点——适用于离线/气隙部署。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM digest into Simplified Chinese. I need to:

1. Translate all the content into Simplified Chinese
2. Keep the Markdown structure exactly as-is
3. Keep URLs, issue/PR references, version numbers, code, etc. in their original form
4. Use natural technical Chinese register

Let me go through and translate section by section:

**Today's Highlights**
- Translate to Chinese, keeping the technical terms
- Keep version numbers, URLs

**Releases & Breaking Changes**
- Keep the table structure, translate text

**New Model & Hardware Support**
- Keep technical terms, translate descriptions

**Performance & Optimization**
- Translate descriptions

**Stability & Regressions**
- Translate the table and descriptions

**What This Means for Application Developers**
- Translate the numbered list

Let me do this translation now:</think>

# LiteLLM 摘要 — 2026-09-24

## 今日要闻

LiteLLM 发布了 v1.99.3 到 v1.102.1 版本以及开发版 v1.104.0-dev.1，所有版本均通过 cosign 实现 Docker 镜像签名，以强化供应链安全。项目持续扩展多提供商成本追踪能力，新增了 OpenAI（chat-latest、codex、deep-research）、Gemini 预览版别名、Vertex AI（Llama 3.3 70B、Veo 2/3、虚拟试穿、2.5 TTS）以及 OpenRouter 价格同步的模型行。多个关键问题已修复，包括预算强制执行绕过、速率限制器重复计数以及流式 guardrail 绕过等。

---

## 版本发布与重大变更

| 版本 | 说明 |
|------|------|
| **v1.104.0-dev.1** | 开发版 |
| **v1.102.1** | 稳定版，含 cosign 验证 |
| **v1.101.2** | 稳定版，含 cosign 验证 |
| **v1.101.1** | 稳定版，含 cosign 验证 |
| **v1.100.2** | 稳定版，含 cosign 验证 |
| **v1.99.3** | 稳定版，含 cosign 验证 |

所有 LiteLLM Docker 镜像现均已使用提交 `0112e53` 中的密钥通过 cosign 签名。使用以下命令验证：
```bash
cosign verify ghcr.io/berriai/litellm:<tag>
```

---

## 新模型与硬件支持

- **OpenAI**：新增 chat-latest、codex 和 deep-research 的成本映射行（11 个模型 ID 此前记录 0 美元支出）— [#42834](https://github.com/BerriAI/litellm/pull/42834)
- **Google Gemini**：新增预览版别名及 deep-research-04-2026 行（6 个 ID）— [#42833](https://github.com/BerriAI/litellm/pull/42833)
- **Vertex AI**：新增 Llama 3.3 70B MaaS、Veo 2、Veo 3、虚拟试穿及 2.5 TTS 行（7 个新行）— [#42837](https://github.com/BerriAI/litellm/pull/42837)
- **OpenRouter**：同步 18 个漂移的成本映射行；新增 Qwen 分层定价（超过 32k/128k/256k 阈值）— [#42832](https://github.com/BerriAI/litellm/pull/42832)
- **Azure AI**：修复 FLUX.2 图像编辑计费以计算参考图像像素（此前计费不足）— [#42829](https://github.com/BerriAI/litellm/pull/42829)
- **Vertex Batch**：原生批量 JSONL 直通，支持成本追踪 — [#42810](https://github.com/BerriAI/litellm/pull/42810)

---

## 性能优化

- **使用量页面搜索**：修复了无法搜索支出排名前 100 以外密钥的问题；新增 `/user/daily/activity/aggregated/search` 端点 — [#42836](https://github.com/BerriAI/litellm/pull/42836)
- **缓存日志**：修复流式响应 API 缓存命中时记录空 provider 的问题（导致使用量页面显示"Unknown"分组）— [#42830](https://github.com/BerriAI/litellm/pull/42830)
- **Rust 成本计算**：扩展独立 `litellm-cost` crate，涵盖 token、媒体、工具、搜索、guardrail 和 provider 计算 — [#42620](https://github.com/BerriAI/litellm/pull/42620)
- **CI 流水线**：重构测试分层以解决 Python 3.12 上 Vertex 流式测试的内存/超时问题 — [#42831](https://github.com/BerriAI/litellm/pull/42831)

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | v1.82.3 中预算强制执行被绕过 — key/user `max_budget` 设置后支出超过限制但未阻止 | [Issue #26672](https://github.com/BerriAI/litellm/issues/26672) |
| **高** | v3 速率限制器重复计数团队 per-model 限制（`model_per_team`）→ 实际 RPM/TPM 为配置值的一半 | [Issue #34140](https://github.com/BerriAI/litellm/issues/34140) |
| **高** | 流式 guardrail：值被拆分到两个 SSE 块中，每块检查均可通过 | [Issue #41611](https://github.com/BerriAI/litellm/issues/41611) |
| **高** | MCP OAuth2 令牌交换失败，报通用"无可用 access_token"错误，尽管上游令牌有效 | [Issue #42477](https://github.com/BerriAI/litellm/issues/42477) |
| **中** | Redis 协调启动时存在竞态条件，若初始 ping 失败则 pod 生命周期内 budgets 仅归该 pod 所有 | [Issue #42653](https://github.com/BerriAI/litellm/issues/42653) |
| **中** | 上下文管理摘要子请求绕过团队 ITPM/OTPM 配额 | [Issue #41395](https://github.com/BerriAI/litellm/issues/41395) |
| **中** | Azure 请求包含内部 `model_alias_map` 导致 BadRequestError | [Issue #42409](https://github.com/BerriAI/litellm/issues/42409) |
| **中** | Router：`fetch_stream()` 内部失败会跳过失败回调和冷却时间（Gemini/Vertex） | [Issue #42757](https://github.com/BerriAI/litellm/issues/42757) |
| **已修复** | Azure GPT-5.6 Terra/Luna 使用 OpenAI 价格而非 Azure 公布的计量费率 | [Issue #36192](https://github.com/BerriAI/litellm/issues/36192) — 已关闭 |
| **已修复** | Prompt 缓存 UI 每页显示 50 行；现改为 10 行并带分页 | [PR #42638](https://github.com/BerriAI/litellm/pull/42638) |

**安全修复**：`disable_global_guardrails` 现仅限 proxy 管理员使用；非管理员无法再通过 key/team 元数据绕过 guardrail — [#42699](https://github.com/BerriAI/litellm/pull/42699)

---

## 对应用开发者的意义

1. **成本追踪改进**：随着 OpenAI、Gemini、Vertex AI 和 OpenRouter 新模型行的加入，预计 30+ 此前未计费或计费错误的模型 ID 将实现准确支出记录。若你在 Azure AI 上使用 FLUX.2 图像编辑，计费现已更正。

2. **安全强化**：cosign 签名的 Docker 镜像提供可验证的来源证明。若在生产环境运行 LiteLLM，请验证你的镜像。

3. **速率限制细节**：若你使用 per-team per-model 限制（`model_rpm_limit`），请注意重复计数 bug——在补丁发布前，你可能需要将限制设置为预期值的 2 倍。

4. **流式 guardrail**：若你依赖 pre-call guardrail 进行 PII 掩码，请注意跨 SSE 块拆分的值可能会漏过。修复待定。

5. **使用量搜索**：新搜索端点可定位此前在 UI 中无法找到的低支出 API 密钥——适用于审计场景。

6. **模型可发现性**：运维人员现在可以隐藏 `/v1/models` 列表中的模型，同时仍允许通过 `model_info: {discoverable: false}` 直接请求 — [#42825](https://github.com/BerriAI/litellm/pull/42825)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate this GitHub digest into Simplified Chinese, following the detailed translation rules provided. Let me carefully translate while preserving all formatting, links, numbers, and technical terms.

Key points:
1. Only output the translation - no preamble or explanation
2. Keep all Markdown structure exactly as-is
3. Keep URLs, issue numbers, code, technical terms in original form
4. Use natural technical Chinese register
5. No markdown fences around the whole output

Let me translate section by section:</think>

# Unsloth 要闻 — 2026-09-24

## 1. 今日要闻

**v0.1.815-beta** 版本带来了 Qwen-Image-2.1 本地运行支持、自定义 Agent Skills，以及 2 倍推理加速（60 FPS 对比 30 FPS），并改进了 Linux 安装流程。项目持续推进多后端支持，新增 PR 包括 AMD Ryzen AI NPU 聊天支持（通过 Lemonade/FastFlowLM）以及 vLLM/SGLang 多 GPU 推理集成。

---

## 2. 版本更新与破坏性变更

| 版本 | 关键变更 |
|------|----------|
| **v0.1.815-beta** | Qwen-Image-2.1 GGUF 本地运行支持；自定义 Agent Skills；推理速度翻倍（60→30 FPS）；改进的 Linux 安装；更可靠的训练流程 |

本期未报告破坏性 API 变更。

---

## 3. 新模型与硬件支持

| 类别 | 详情 |
|------|------|
| **视觉模型** | Qwen-Image-2.1 GGUF 现已支持本地运行（[Issue #11567](https://github.com/unslothai/unsloth/issues/11567)） |
| **硬件** | AMD Ryzen AI NPU 聊天支持 — PR #11743 为 Windows/Linux 添加 XDNA 2 支持（Strix Halo/Point） |
| **量化** | DiT 系列的逐层 NVFP4 策略 — PR #10730；视频模型全模型 NVFP4（Wan2.2、HunyuanVideo）— PR #10729 |
| **推理后端** | vLLM 和 SGLang 支持多 GPU、量化、视觉模型 — PR #11491 |
| **训练** | Kimi-K3 MXFP4 专家训练，支持即时反量化 — PR #11750；compressed-tensors INT4→bitsandbytes 加载 — PR #11537 |
| **ROCm** | 呼吁 ROCm 10（[Issue #9932](https://github.com/unslothai/unsloth/issues/9932））；安装程序仍无法识别 ROCm 7.14（[Issue #10657](https://github.com/unslothai/unsloth/issues/10657)） |

---

## 4. 性能与优化

| 工作项 | 状态 | 影响 |
|--------|------|------|
| **图像模型静态步数跳过**（兼容 CUDA-graph） | PR #11737 | 按固定调度跳过整个 transformer 调用 |
| **视频生成静态步数跳过** | PR #11748 | 扩展静态缓存至视频 |
| **DiT 系列 VAE 解码编译** | PR #10889 | 第二大 GPU 时间预算项现已编译 |
| **避免最大速度档位重编译** | PR #11731 | 防止 DiT 在新 prompt 长度时重新编译（带文本 token） |
| **NVFP4 闪存推理按需安装** | PR #11730 | 用户选择 NVFP4 时自动获得更快路径 |
| **NVFP4 闪存推理内核**（设备守卫、持久屏障、偏置路径） | PR #10731 | 图像策略的后端内核项 |

---

## 5. 稳定性与回归问题

| 问题 | 严重程度 | 状态 |
|------|----------|------|
| **Windows ROCm：cudnn.benchmark 触发 exhaustive VAE 调优** — gfx1030 上 10-23 分钟卡死 | 高 | 开启中 — [Issue #11636](https://github.com/unslothai/unsloth/issues/11636) |
| **Qwen-Image-2.1 下载重复的 ~19GB "必需资产"**（GGUF 显示已下载后仍重复下载） | 高 | 开启中 — [Issue #11637](https://github.com/unslothai/unsloth/issues/11637) |
| **AMD 图像生成 GPU 崩溃导致整个 Studio 进程终止**（无进程隔离） | 高 | 开启中 — [Issue #9130](https://github.com/unslothai/unsloth/issues/9130) |
| **Windows ROCm：缺少 torch.distributed → torchao 导入失败，FP8 编码器跳过** | 中 | 开启中 — [Issue #11638](https://github.com/unslothai/unsloth/issues/11638) |
| **save_pretrained_gguf 静默导出基础模型（LoRA 未合并）** | 中 | 开启中 — [Issue #11698](https://github.com/unslothai/unsloth/issues/11698) |
| **Snapdragon X Elite：Desktop 安装失败（pyarrow）** | 中 | 开启中 — [Issue #8495](https://github.com/unslothai/unsloth/issues/8495) |
| **Windows 最大化窗口：底部条忽略点击**（composer "更多"菜单失效） | 低 | 开启中 — [Issue #11734](https://github.com/unslothai/unsloth/issues/11734) |

**已修复 PR：**
- PR #11746：修复 Windows ROCm stub 安装顺序（ diffusion 导入前）

---

## 6. 应用开发者需要关注的事项

1. **Qwen-Image-2.1 现已支持本地运行** — v0.1.815-beta 版本实现了本地多模态推理，无需云端依赖。推理块预期可达 60 FPS。

2. **AMD NPU 推理即将到来** — PR #11743 添加了一流 AMD Ryzen AI（XDNA 2）NPU 支持，通过 Lemonade 实现，面向 Strix Halo/Point 设备。需手动启用，启用前不会下载。

3. **vLLM/SGLang 后端即将上线** — PR #11491 引入多 GPU 服务支持，带量化与视觉功能。两者均非默认选项；安装为可选。

4. **NVFP4 优化流程日趋成熟** — 逐层策略（PR #10730）、闪存推理后端（PR #10731）和 VAE 解码编译（PR #10889）构成了图像/视频生成的端到端优化路径，适用于 NVIDIA Blackwell。

5. **注意 Windows 上的 ROCm 回归** — 多项问题报告图像生成崩溃、torch.distributed 缺失和安装程序误检。如在 AMD ROCm Windows 上部署，需手动干预。

6. **LoRA 导出 Bug** — 对 PEFT 封装调用 `save_pretrained_gguf` 会静默导出基础模型而未合并适配器。生产环境请暂避使用（[Issue #11698](https://github.com/unslothai/unsloth/issues/11698)）。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*