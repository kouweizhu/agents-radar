# AI 基础设施日报 2026-10-01

> 生成时间: 2026-10-01 01:28 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this entire English report into Chinese, following the specific rules provided. Let me analyze the key requirements:

1. **Only output the translation** - no preamble, no explanation, no markdown fences around the whole output
2. **Preserve Markdown structure exactly** - headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. **Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim**
4. **Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form**
5. **Issue/PR references like #12345 stay as-is**
6. **Use natural technical Chinese** - the register of a Chinese developer newsletter, not literal word-for-word

This is a formal long-form translation task. Let me translate section by section, maintaining the exact structure.

Let me start:

## 1. Ecosystem Overview
- "Ecosystem Overview" → "生态概览"
- Today's AI infrastructure ecosystem spans the full serving-to-training stack → 如今的人工智能基础设施生态覆盖了从服务到训练的完整技术栈
- with clear layer separation → 并呈现出清晰的层级划分
- vLLM and SGLang compete as high-throughput serving engines → vLLM 和 SGLang 作为高吞吐量服务引擎展开竞争
- with aggressive kernel fusion and speculative decoding → 两者都在积极推进内核融合和投机解码
- llama.cpp dominates local/offline inference → llama.cpp 在本地/离线推理领域占据主导地位
- across CPU/GPU/metal with the broadest hardware reach → 覆盖 CPU/GPU/Metal，拥有最广泛的硬件支持
- Ollama provides cloud-hosted convenience → Ollama 提供云端托管的便捷体验


- Native MLX and Vulkan backends expand platform compatibility and performance optimization capabilities
- LiteLLM orchestrates multi-provider deployments with unified APIs → LiteLLM 通过统一 API 编排多供应商部署
- Unsloth targets fine-tuning and studio workflows → Unsloth 专注于微调和工作室工作流
- with specialized training kernels → 配备专用训练内核

The October 2026 landscape shows convergence → 2026 年 10 月的技术格局呈现融合趋势
around a few themes → 围绕几个核心主题展开
(1) ROCm/AMD GPU support maturation → ROCm/AMD GPU 支持走向成熟
- across all major projects → 在所有主流项目中
(2) speculative decoding and MTP (multi-token prediction) becoming standard → 投机解码和 MTP（多令牌预测）成为标准配置
for latency-sensitive workloads → 针对延迟敏感型工作负载
(3) quantization formats fragmenting → 量化格式碎片化
(MXFP4, NVFP4, IQ4) with backend-specific tradeoffs → (MXFP4、NVFP4、IQ4) 存在后端特定的权衡取舍
(4) multi-modal as a first-class concern → 多模态作为一等公民
across serving layers → 贯穿服务层

Activity Comparison shows project engagement → 活动比较展示了项目参与度
| Project | Open Issues | Open PRs | Releases (24h) → | 项目 | 公开问题 | 公开 PR | 发布 (24小时) |
|---------|-------------|----------|------------------| ---

- 表格内容待续
| **vLLM** | ~92 | ~595 | 0 |
| **SGLang** | 213 | 378 | 0 |
| **llama.cpp** | 92 | ~100+ (活跃) | 10 次提交 |
| **Ollama** | 20+ 报告 | 25+ | 0 |
| **LiteLLM** | 140+ | 140+ | 1 (v1.105.0-dev.1) |
| **Unsloth** | 17 | 140+ | 0 |

**Observations:** → **观察：**
- **llama.cpp** 拥有最高的发布频率（10 次提交），体现了其作为快速迭代运行时的特质，专注于精细化修复
- **SGLang 和 vLLM** 的 PR 数量相当，服务层功能开发保持活跃
- **LiteLLM** 在 API 网关和服务引擎之间架起桥梁，PR 活动稳定并有版本标签
- **Unsloth** 尽管问题数量较少，但 PR 数量居高不下，表明开发以功能驱动为主，而非问题驱动

The model support race intensifies across different architectures → 模型支持竞赛在不同架构间愈演激烈

| Model / Architecture | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------|------|--------|-----------|--------|---------|
| **Qwen3.8-Flash-Next** | ✅ (实验性，有 bug) | ✅ (路线图) | — | — | — |
| **GLM-5.3-Flash** | ✅ (性能优化) | ✅ (NVFP4) | ✅ (需求) | — | — |
| **DeepSeek-V4.1-Flash** | ✅ (SM120 性能问题) | ✅ (ROCm 优化) | — | — | — |
| **Qwen4Exp (MTP)** | — | — | ✅ | — | —

多个项目在竞相支持新的模型架构，每个框架都在积极扩展其功能集。SGLang 在 ROCm/AMD 优化方面领先，推出了针对 gfx950 的融合 MLA 内核、PTPC FP8 和 MiMo FA4。vLLM 则专注于投机解码基础设施的建设，包括 MTP、DSpark 槽位预留和 CUDA 图中的上下文组合等高级功能。

llama.cpp 在模型覆盖范围和硬件支持上具有优势，特别是对 Prism Bonsai 2 27B、maion-coder 和 Qwen4Exp (MTP) 等本地离线模型的支持。Ollama 在云端部署便捷性和 Apple Silicon MLX 支持方面表现出色，而 Unsloth 则在微调体验和 Studio 可视化界面以及新兴的 audio.cpp 集成方面处于领先地位。

性能优化的关键领域包括内核融合（通过减少内核启动开销）、投机解码（降低每令牌延迟）以及权重加载优化。Unsloth 的权重缓存守护进程和 vLLM 的 CPU 卸载都瞄准了相同的冷启动痛点。技术栈中的项目各司其职：Unsloth 负责训练/微调层，llama.cpp 提供本地运行时，vLLM 和 SGLang 作为高吞吐量服务器处理批处理和投机解码，Ollama 提供云端托管的前端便利性，LiteLLM 则充当网关/编排层。

对于应用开发者来说，投机解码正成为标准配置——vLLM 的 DFlash/DSpark 槽位预留修复、SGLang 的 DFlash 捕获和 llama.cpp 的 MTP 支持都在近几天内完成，预期将带来 2-4 倍的解码延迟改善。ROCm/AMD 不再是二等公民——ROCm 10.0 成为 vLLM 默认版本，针对 gfx950 的融合 MLA 内核在两个项目中都得到支持，AMD 的支持力度在持续加强。

量化格式正在快速碎片化，MXFP4、NVFP4、IQ4_NL、GGUF Q4_K_M 等格式各有其精度/吞吐量权衡和后端支持。 llama.cpp 在格式覆盖上领先，SGLang 则针对特定 GPU 进行优化。

多模态功能正在吞噬整个技术栈，GLM-5.3-Flash、Qwen Image 2.1、System One、T5Gemma2 和 audio.cpp 都获得了原生支持。

网关层正在整合，LiteLLM 的延迟日志导入展示了启动性能的关注，多提供商路由功能已成熟。

权重加载成为新的瓶颈——Unsloth 的权重缓存守护进程和 vLLM 的 CPU 卸载都针对同一个问题，这对于无服务器/函数即服务模式至关重要。

对于基础设施工程师来说，构建流程正在整合，ROCm 10.0、cosign 签名的 Docker 镜像和 cgroup 感知的线程调度等生产就绪功能正在所有项目中成熟。

Rust 正在扩展到 SGLang 的 NIXL、vLLM 的 Rust 前端路线图和 llama.cpp 的 Rust 示例，服务层正逐渐转向 Rust 原生。观测能力也在改进，LiteLLM 的延迟日志、vLLM 的定时追踪回放和 SGLang 的聊天延迟修复都在使生产推理调试变得更加容易。

对于代理和应用开发者来说，应该关注几个关键趋势。投机解码正在成为标准配置，需要测试推理管道并启用该功能，同时评估延迟和精度的权衡。ROCm/AMD GPU 支持正在成熟，接下来几个月将带来显著的性能提升。量化格式的碎片化加速，不能假设量化就等于更快，需要验证特定的模型和硬件组合。mmproj 处理是常见的痛点，应该仔细监控内存使用情况，并要求项目提供延迟加载功能。

对于网关层，LiteLLM 是跨多个 LLM 提供商代理的默认选择，需要验证部署是否使用签名镜像。权重加载可能是延迟敏感场景中的主要瓶颈，应该评估缓存策略。

在基础设施方面，构建管道正在整合，生产就绪功能正在成熟。Rust 正在扩展到整个服务层，使得推理调试变得更加容易。

Observability 工具的改进正在简化生产推理的调试过程，使开发者能够更有效地监控和优化系统性能。</think>

# AI 推理技术栈 — 跨项目对比报告

## 1. 生态概览

如今的人工智能基础设施生态覆盖了从服务到训练的完整技术栈，并呈现出清晰的层级划分：**vLLM 和 SGLang** 作为高吞吐量服务引擎展开竞争，两者都在积极推进内核融合和投机解码；**llama.cpp** 在本地/离线推理领域占据主导地位，覆盖 CPU/GPU/Metal，拥有最广泛的硬件支持；**Ollama** 提供云端托管的便捷体验，原生支持 MLX 和 Vulkan 后端；**LiteLLM** 通过统一 API 编排多供应商部署，实现成本追踪和路由；**Unsloth** 专注于微调和工作室工作流，配备专用训练内核。

2026 年 10 月的技术格局围绕几个核心主题呈现融合趋势：(1) ROCm/AMD GPU 支持在所有主流项目中走向成熟，(2) 投机解码和 MTP（多令牌预测）成为延迟敏感型工作负载的标准配置，(3) 量化格式碎片化（MXFP4、NVFP4、IQ4），存在后端特定的权衡取舍，(4) 多模态作为一等公民贯穿服务层。

---

## 2. 活动对比

| 项目 | 公开 Issues | 公开 PRs | 发布 (24h) |
|---------|-------------|----------|----------------|
| **vLLM** | ~92 | ~595 | 0 |
| **SGLang** | 213 | 378 | 0 |
| **llama.cpp** | 92 | ~100+ (活跃) | 10 次提交 |
| **Ollama** | 20+ 报告 | 25+ | 0 |
| **LiteLLM** | 140+ | 140+ | 1 (v1.105.0-dev.1) |
| **Unsloth** | 17 | 140+ | 0 |

**观察：**

- **llama.cpp** 的发布频率最高（10 次提交），反映出其作为快速迭代运行时的定位，专注于精细化的缺陷修复
- **SGLang 与 vLLM** 的 PR 数量相当，服务层的功能开发保持高度活跃
- **LiteLLM** 位于 API 网关与服务引擎之间的枢纽位置，PR 活动稳定且已有版本标签
- **Unsloth** 尽管 Issue 数量较少，但 PR 数量居高不下，表明开发以功能驱动而非问题驱动

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------|------|--------|-----------|--------|---------|
| **Qwen3.8-Flash-Next** | ✅ (实验性，存在 bug) | ✅ (路线图) | — | — | — |
| **GLM-5.3-Flash** | ✅ (性能优化) | ✅ (NVFP4) | ✅ (需求) | — | — |
| **DeepSeek-V4.1-Flash** | ✅ (SM120 性能问题) | ✅ (ROCm 优化) | — | — | — |
| **Qwen4Exp (MTP)** | — | — | ✅ | — | — |
| **MiMo-V2** | — | ✅ (默认 FA4) | ✅ (dflash) | — | — |
| **Prism Bonsai 2 27B** | — | — | ✅ | — | — |
| **maion-coder** | — | — | ✅ | — | — |
| **System One** | — | — | — | ✅ (MLX) | ✅ |
| **Bongard (T5Gemma2)** | — | — | — | ✅ (提议中) | — |
| **Gemma 4** | — | — | — | ✅ (需求) | — |
| **Kimi-K3 MXFP4** | — | ✅ (ROCm) | — | — | — |

**谁在领先：**

- **SGLang** 在 ROCm/AMD 优化方面领先，拥有针对 gfx950 的融合 MLA 内核、PTPC FP8 和 MiMo 默认启用 FA4
- **vLLM** 在投机解码基础设施方面领先（MTP、DSlash、槽位预留修复）
- **llama.cpp** 在模型广度（本地/离线）和硬件覆盖方面领先（Hexagon HMX、Vulkan、SYCL、Metal）
- **Ollama** 在云端托管的便捷性和 Apple Silicon MLX 支持方面领先
- **Unsloth** 在微调体验（Studio）和新兴的 audio.cpp 集成方面领先

---

## 4. 性能前沿

| 优化领域 | 活跃项目 | 关键工作 |
|-------------------|-----------------|----------|
| **内核融合** | vLLM, SGLang, llama.cpp | QK-norm+RoPE+gate (ROCm)、GLM Q-projection、MXFP4 bf16 计算 |
| **量化** | vLLM, SGLang, llama.cpp, Unsloth | IQ4、MXFP4、NVFP4、MMQ N-tiles 启发式算法 |
| **KV 缓存 / 注意力** | vLLM, SGLang, llama.cpp | NIXL KV 连接器合并、FlashAttention 全瓦片调度、HiSparse 长上下文 |
| **投机解码** | vLLM, SGLang, llama.cpp | DFlash 槽位预留、Qwen4Exp MTP、CUDA 图中的上下文合并 |
| **权重加载** | vLLM, Unsloth | 权重缓存守护进程（1s 加载 vs 300s）、mmproj 内存映射加载 |
| **线程调度** | llama.cpp | `common_cpu_get_num_math()` 实现 SMT 感知线程分配 |
| **内存管理** | vLLM, SGLang | VLLM_PLE_CPU_OFFload、CUDA 图内存预留修复 |
| **后端专用** | 全项目 | ROCm 10.0 成为默认（vLLM）、Metal MXFP4（llama.cpp）、原生 audio.cpp（Unsloth） |

**工作重心：**
最高密度的优化工作集中在**内核融合**（减少内核启动开销）和**投机解码**（降低每令牌延迟）。权重加载优化是一个新的前沿方向——Unsloth 的权重缓存守护进程和 vLLM 的 CPU 卸载都瞄准了同一个冷启动痛点。

---

## 5. 层级定位

| 层级 | 项目 | 职责 |
|-------|----------|------|
| **训练 / 微调** | Unsloth | Studio + 训练内核（快速交叉熵、梯度检查点） |
| **本地运行时** | llama.cpp | 离线推理、最广泛的硬件支持、无需服务器 |
| **服务引擎** | vLLM, SGLang | 高吞吐量服务器，配备批处理、投机解码、KV 缓存管理 |
| **云端托管** | Ollama | 面向终端用户、一键部署、MLX/Vulkan 后端 |
| **网关 / 编排** | LiteLLM | 多供应商路由、成本追踪、统一的 OpenAI 兼容 API |
| **工作室 / 用户体验** | Unsloth | 可视化微调界面、语音模式、文档处理 |

**关键差异点：**
- **vLLM/SGLang** 在同一层级（服务引擎）展开竞争，但优化理念不同——vLLM 依赖 PyTorch/Triton，SGLang 依赖 Rust + NIXL
- **llama.cpp** 占据独特的本地/离线运行时生态位，是边缘和嵌入式用例的基础
- **LiteLLM** 与服务引擎是正交关系——它路由到这些引擎，因此是互补而非竞争

---

## 6. 趋势信号

### Agent / 应用开发者应关注

1. **投机解码正在成为标准配置**
   - vLLM 的 DFlash/DSpark 槽位预留修复、SGLang 的 DFlash 捕获，以及 llama.cpp 的 MTP 支持都在数日内完成
   - 预期解码延迟将提升 2-4 倍，随着这些功能趋于稳定
   - **行动建议**：在推理流水线中启用投机解码并测试；评估延迟与精度的权衡

2. **ROCm/AMD 不再是二等公民**
   - ROCm 10.0 在 vLLM 中成为默认版本；融合 MLA 内核登陆 vLLM 和 SGLang，针对 gfx950 优化；Ollama 支持 AMD Quark
   - AMD MI355X 和 gfx950 现已在主流项目中拥有专门的优化路线
   - **行动建议**：如果在 AMD GPU 上部署，未来 2-3 个月将带来显著的性能提升——请及时重新测试

3. **量化格式碎片化加速**
   - MXFP4、NVFP4、IQ4_NL、GGUF Q4_K_M——每种格式都有不同的精度/吞吐量权衡和后端支持
   - llama.cpp 在格式覆盖上领先；SGLang 针对特定 GPU 进行优化
   - **行动建议**：不要假设"量化即快"——请针对你的特定模型 + 硬件组合验证吞吐量和精度

4. **多模态正在吞噬整个技术栈**
   - GLM-5.3-Flash、Qwen Image 2.1、System One、T5Gemma2、audio.cpp 都在获得原生支持
   - mmproj 处理是反复出现的痛点（Unsloth 的磁盘加载回归、vLLM 的内存卸载）
   - **行动建议**：如果构建多模态 Agent，请仔细监控内存使用；向项目方要求延迟加载 mmproj

5. **网关层正在整合**
   - LiteLLM 的延迟日志导入表明对启动性能的关注；多供应商路由已成熟
   - LiteLLM v1.105.0 新增 cosign 签名的 Docker 镜像——供应链安全现已提升为一等公民
   - **行动建议**：如果需要在多个 LLM 提供商之间代理，LiteLLM 是默认选择；请验证部署使用的是签名镜像

6. **权重加载是新的瓶颈**
   - Unsloth 的权重缓存守护进程（306s → <1s）和 vLLM 的 CPU 卸载都瞄准了同一个问题
   - 这对无服务器/函数即服务模式至关重要，冷启动时间直接影响体验
   - **行动建议**：如果在延迟敏感场景中部署大型模型，权重加载时间很可能就是你的瓶颈——请评估缓存策略

### 基础设施工程师应关注

- **构建流水线正在整合**：ROCm 10.0、cosign 签名的 Docker、cgroup 感知的线程调度——生产就绪功能正在所有项目中走向成熟
- **Rust 正在蔓延**：SGLang 的 NIXL、vLLM 的 Rust 前端路线图、llama.cpp 的 Rust 示例——服务层正日益 Rust 原生化
- **可观测性正在改善**：LiteLLM 的延迟日志、vLLM 的定时追踪回放、SGLang 的聊天延迟修复——生产推理调试正变得更便捷

---

*跨项目综合报告 — 2026-10-01*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM Daily Digest into Simplified Chinese, following specific rules about translation. Let me go through the content carefully:

1. Keep all Markdown structure exactly as-is
2. Keep URLs, issue numbers, PR numbers, technical terms, etc. as-is
3. Use natural technical Chinese register
4. Keep all formatting (tables, lists, headings, etc.)

Let me translate this carefully:</think>

# vLLM 每日简报 — 2026-10-01

## 1. 今日要闻

vLLM 项目在多模型稳定性和 ROCm 优化方面持续活跃。Qwen3.8-Flash-Next 在 Sparse Attention 阈值附近的贪婪解码存在非确定性 bug（49 条评论），而 Rust 前端仍在推进功能对齐。性能方面，GLM-5.3 Q 投影融合已合入，内核性能提升 1.27–1.64 倍，ROCm 10.0 即将成为默认构建版本。

## 2. 版本发布与重大变更

过去 24 小时内未检测到新版本发布。

**进行中：** ROCm 10.0（TheRock）正在准备作为默认 ROCm 镜像和 wheel，ROCm 7.2 将保留用于过渡。参见 [PR #58761](https://github.com/vllm-project/vllm/pull/58761)。

---

## 3. 新模型与硬件支持

| 模型/架构 | 支持状态 | 备注 |
|---|---|---|
| **Qwen3.8-Flash-Next** | 实验性 | 在 `indexer_budget` 阈值附近使用 `persistent_topk` 时存在非确定性 bug — 见 [#54521](https://github.com/vllm-project/vllm/issues/54521) |
| **GLM-5.3-Flash** | 积极开发中 | 正在进行性能优化；累积推理解码后出现长序列退化问题 — 见 [#56868](https://github.com/vllm-project/vllm/issues/56868) |
| **DeepSeek-V4.1-Flash** | ROCm 优化 | 性能跟踪 issue [#56506](https://github.com/vllm-project/vllm/issues/56506)；Blackwell (SM120) 支持存在缺口 — 见 [#59203](https://github.com/vllm-project/vllm/issues/59203) |
| **AMD MI355X (gfx950)** | ROCm 性能跟踪 | 专用优化 issue [#57149](https://github.com/vllm-project/vllm/issues/57149)；目标模型 Qwen3.8-2.4T-A95B |
| **NVIDIA RTX PRO 6000 (SM120)** | 有限支持 | FlashInfer sparse-MLA 内核存在缺口 — 仅支持 `page_block_size=64`，不支持 32（[#59203](https://github.com/vllm-project/vllm/issues/59203)） |

---

## 4. 性能与优化

### 已合入 / 审查中

| 领域 | 变更 | 影响 | PR/Issue |
|---|---|---|---|
| **GLM-5.3** | 使用 `fused_q` 内核融合 Q 投影 | 内核性能提升 1.27–1.64 倍；每个 TP rank 减少 78 次 GPU 内核启动 | [#59084](https://github.com/vllm-project/vllm/pull/59084) |
| **ROCm MLA** | 减少 MLA 元数据构建中的主机调度 | 减少约 21 倍主机调度 | [#58381](https://github.com/vllm-project/vllm/pull/58381) |
| **ROCm MLA** | 按 token 块并行化页索引扩展 | 内核级改进（微基准测试） | [#57978](https://github.com/vllm-project/vllm/pull/57978) |
| **Qwen3 (ROCm)** | 融合 QK-norm+RoPE+gate 的 Triton 内核 | 为 ROCm 上的 Qwen3-Next/Qwen3.5 启用融合路径 | [#51406](https://github.com/vllm-project/vllm/pull/51406) |
| **NIXL KV Connector** | 跨缓存组合并主机缓冲区 KV 拷贝 | 减少 D2H/H2D 开销 | [#54483](https://github.com/vllm-project/vllm/pull/54483) |
| **DFlash/DSpark** | 在 draft CUDA graph 中合并 capture context 并设置锚点 | 改进投机解码效率 | [#59511](https://github.com/vllm-project/vllm/pull/59511) |
| **vllm-bench** | Mooncake 风格的 timed-trace 回放支持 | 支持从 Rust 客户端录制请求调度进行忠实回放 | [#55937](https://github.com/vllm-project/vllm/pull/55937) |
| **MRV2 调度器** | 不在 token 预算中预留 DFlash/DSpark draft 槽位 | 修复过度计费：K=5 的 DSpark 解码实际消耗 10 个 token 而非 6 个 | [#59468](https://github.com/vllm-project/vllm/pull/59468) |

### 已知的性能问题

- **解码吞吐量回退**：Qwen3.6-35B-A3B-FP8 在 H100 上从 v0.26.0 到 v0.29.0 吞吐量下降约 3.3 倍 — 见 [#57680](https://github.com/vllm-project/vllm/issues/57680)
- **GB10 权重加载**：来自 safetensors mmap 视图的逐张量 H2D 拷贝速度较慢 — [#58726](https://github.com/vllm-project/vllm/issues/58726)
- **DeepSeek-V4.1-Flash 在 SM120 上**：使用 `--enforce-eager` 时解码吞吐量极低；CUDA graph 不可用 — [#56892](https://github.com/vllm-project/vllm/issues/56892)

---

## 5. 稳定性与回退

### 高严重级别

| Issue | 描述 | 严重级别 |
|---|---|---|
| [#54521](https://github.com/vllm-project/vllm/issues/54521) | **Qwen3.8-Flash-Next**：当 prompt 长度接近 `indexer_budget` 时，使用 `persistent_topk` 的贪婪解码存在非确定性（SM121/GB10）。五个相同请求返回五个不同的补全结果。 | **高** — 正确性 bug；49 条评论 |
| [#40756](https://github.com/vllm-project/vllm/issues/40756) | **MTP 投机解码**在长序列上崩溃，非法内存访问（Qwen3.6-27B-FP8，v0.19.1）。 | **高** — 崩溃；45 条评论 |
| [#53960](https://github.com/vllm-project/vllm/issues/53960) | **VLLM_PLE_CPU_OFFLOAD** 在单 GPU（TP=1）上内核预热时死锁 — Qwen3.8-Flash-Next 在 GB10/sm_121 上 | **高** — 死锁；19 条评论 |
| [#53726](https://github.com/vllm-project/vllm/issues/53726) | 混合 GDN + MTP k=3 + 异步调度在 RTX 3090 上静默 CUDA IMA（退出码 0） | **高** — 静默损坏 |

### 中等严重级别

| Issue | 描述 | 状态 |
|---|---|---|
| [#56868](https://github.com/vllm-project/vllm/issues/56868) | GLM-5.3-Flash 在累积推理长解码后出现退化 | 进行中，35 条评论 |
| [#41530](https://github.com/vllm-project/vllm/issues/41530) | TP Worker 挂起 → DeepSeek-V4-Pro，TP=8，MTP 投机解码时出现 EngineDeadError | 进行中，14 条评论 |
| [#57423](https://github.com/vllm-project/vllm/issues/57423) | FlashInfer 自动调优配置缓存仅在 rank 0 命中，导致引擎启动死锁 | 进行中，6 条评论 |
| [#57562](https://github.com/vllm-project/vllm/issues/57562) | AsyncScheduler 的 `num_output_placeholders` 在分块 prefill + 并发下出现下溢 — v0.24.0 以来的回归问题 | 进行中，10 条评论 |

### 已合入 / 正在修复的修复

- **Rust 前端延迟测量**：修复 `vllm-bench` 聊天延迟计算在最后一个 token 处停止（与 Python 服务器行为一致）— [#59251](https://github.com/vllm-project/vllm/pull/59251)
- **弹性 EP 扩容**：修复远程引擎计数错误设为零时本地扩容卡住的问题 — [#57820](https://github.com/vllm-project/vllm/pull/57820)
- **NIXL 握手回滚**：失败时回滚不完整的远程代理握手 — [#59524](https://github.com/vllm-project/vllm/pull/59524)
- **混合 GDN 前缀缓存**：恢复 MTP spec 解码下的前缀缓存命中 — [#52244](https://github.com/vllm-project/vllm/pull/52244)

---

## 6. 这对应用开发者意味着什么

1. **Qwen3.8-Flash-Next 的确定性风险**：如果你依赖确定性的贪婪输出，请避免 prompt 长度接近 Sparse Attention `indexer_budget` 阈值，或者在该 bug 修复前暂缓使用。

2. **MTP 投机解码**：长序列上的非法内存访问 bug 仍在活跃；如果在 Qwen3.6-27B-FP8 或类似模型上使用 MTP，请在生产部署前进行充分测试。

3. **ROCm 用户**：ROCm 10.0 即将成为默认版本。如果你依赖 ROCm 7.2，请规划过渡期或固定容器版本。

4. **GLM-5.3 部署**：性能优化正在合入（Q 投影融合），但长序列推理后的解码退化正在调查中 — 在长对话场景中监控输出质量。

5. **基准测试注意**：如果你在 Rust 客户端中使用 `vllm-bench`，请注意最近的修复使其延迟测量与 Python 服务器对齐（[#59251](https://github.com/vllm-project/vllm/pull/59251)，[#59247](https://github.com/vllm-project/vllm/pull/59247)）。历史吞吐量数据在不同版本间可能无法直接比较。

6. **Blackwell (SM120) 用户**：DeepSeek-V4.1-Flash 在 eager 模式下解码吞吐量显著下降；CUDA graph 目前不可用。请关注 [#56892](https://github.com/vllm-project/vllm/issues/56892) 中的修复进展。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang digest into Simplified Chinese, following the detailed translation rules provided. Let me go through it carefully:

Key rules to follow:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, bold/italic, horizontal rules, emoji
3. Keep URLs, numbers, dates, issue/PR references verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

## Today's Highlights
翻译: 今日要闻

"inference optimization" - 推理优化
"model support expansion" - 模型支持扩展
"Weight Cache Daemon" - 权重缓存守护进程
"Prefill Context Parallelism" - 前缀上下文并行
"ROCm/AMD backends" - ROCm/AMD 后端
"streaming detectors" - 流式检测器
"kernel namespace" - 内核命名空间

## Releases & Breaking Changes
翻译: 版本发布与重大变更

"no new releases in the last 24 hours" - 过去 24 小时内无新版本发布

## New Model & Hardware Support
翻译: 新模型与硬件支持

| Item | Description | Link |
翻译: | 项目 | 描述 | 链接 |

"Kimi-K3 MXFP4 on ROCm" - ROCm 上的 Kimi-K3 MXFP4
"AMD Quark support" - AMD Quark 支持
"compressed-tensors fix" - 压缩张量修复
"forget gate projections" - 遗忘门投影

"GLM-5.3-Flash-NVFP4" - 保持不变
"RedHatAI/GLM-5.3-Flash-NVFP4" - 保持不变 (用户名和仓库名不翻译)


"Qwen3.8-Flash-Next" - 保持不变
"kernel optimizations" - 内核优化
"CPU overhead reduction" - CPU 开销降低

"MiMo-V2 on SM100" - SM100 上的 MiMo-V2
"FA4 enabled by default" - 默认启用 FA4
"DFlash decode throughput" - DFlash 解码吞吐量
"ordinary decode" - 常规解码

"ROCm gfx950" - 保持不变
"fused MLA absorb + RoPE + KV-write kernel" - 融合 MLA 吸收 + RoPE + KV 写入

内核
"decode-sized forward modes" - 解码尺寸前向模式

## Performance & Optimization
翻译: 性能与优化

| Area | Work Item | Impact | Link |
翻译: | 领域 | 工作项 | 影响 | 链接 |

"Weight Cache Daemon" - 权重缓存守护进程
"per-rank daemon" - 每ranks 守护进程
"post-quantized weights" - 后量化权重
"CUDA IPC" - 保持不变

"Prefill CP" - 保持不变 (前缀上下文并行)
"allreduce fusion" - allreduce 融合
"moe_dp size" - 保持不变 (MoE 数据并行大小)
"MLA models" - 保持不变
"Dpsk v3/Kimi-K2.5" - 保持不变
"SWA" - 保持不变 (滑动窗口注意力)

"MegaMoE" - 保持不变
"W13 layout" - 保持不变
"ModelOpt NVFP4" - 保持不变
"Expert layout" - 专家布局

"Qwen3.8-Next" - 保持不变
"fuse NEXTN verify" - 融合 NEXTN 验证
"draft graph" - 草图
"graph construction" - 图构建

"ROCm TopK" - 保持不变
"Split one long row across blocks" - 跨块分割单行长
"CDNA cluster-path decode" - CDNA 集群路径解码
"long context" - 长上下文

"NIXL Stride Desc API" - 保持不变
"strided (compressed) descriptor API" - 步进式（压缩）描述符 API
"memory registration" - 内存注册
"initial delay" - 初始延迟

## Stability & Regressions
翻译: 稳定性与回退问题

| Severity | Issue | Status | Link |
翻译: | 严重程度 | 问题 | 状态 | 链接 |

"High" - 高
"SafeUnpickler deny-list bypass → RCE" - SafeUnpickler 黑名单绕过 → 远程代码执行
"/load_lora_adapter_from_tensors" - 保持不变 (API 路径)
"untrusted inputs" - 不可信输入

"Req.decoded_text never written" - Req.decoded_text 从未被写入
"stop-string fallback dead code" - 停止字符串回退死代码
"empty DecodeStatus seed" - 空的 DecodeStatus 种子
"on eviction" - 驱逐时

"CUDA graph reserves ~1.8 GB" - CUDA 图预留约 1.8 GB
"starves quantized-KV long-context prefill" - 饿

死量化 KV 长上下文前缀
"small cards" - 小显存卡

"Triton kernel 'load_binary'" - Triton 内核 'load_binary'
"operation not permitted" - 操作不允许
"decode CUDA graph replay" - 解码 CUDA 图重放
"GB10/SM121" - 保持不变
"GPU memory exhaustion" - GPU 显存耗尽

"MiMo-V2 selects FP8 MoE runner" - MiMo-V2 选择 FP8 MoE 运行器
"packed MXFP4 experts" - 打包 MXFP4 专家
"incorrect" - 错误

"PEFT adapters" - PEFT 适配器
"bias='lora_only' or 'all'" - 保持不变
"crash or silently corrupt weights" - 崩溃或静默损坏权重
"normalize_q

" - 保持不变

"Streaming detectors" - 流式检测器
"buffered text" - 缓冲文本
"stream end" - 流结束
"Pythonic, Inkling, Gemma-4, Poolside, InternLM, MiniCPM-5, Hunyuan" - 保持不变
"Fixes merged" - 修复已合并

"CI" - 持续集成
"broken, flaky tests" - 损坏的、不稳定的测试
"as of" - 截至

## What This Means for Application Developers
翻译: 这对应用开发者意味着什么

"application developers" - 应用开发者
"faster cold starts" - 更快的冷启动
"large models" - 大模型

权重缓存守护进程的第一阶段将 Qwen3-235B FP8 上的权重加载从分钟级缩短到亚秒级，显著改善了大型 MoE 模型的重启延迟。MiMo 模型现在默认在 SM100 上启用 FA4，解码吞吐量提升高达 1.85 倍。ROCm 支持日趋成熟，AMD gfx950 用户受益于融合 MLA 内核和 GLM-5.3-Flash 的 PTPC FP8 KDA 投影。HiSparse 正在积极开发中以实现长上下文稀疏服务。

需要注意的是，SafeUnpickler 远程代码执行漏洞会影响来自张量的 LoRA 适配器加载，在修补前应避免向不可信输入暴露相关端点。多种格式检测器现已正确刷新流结束时的缓冲文本，应验证具体用例是否被覆盖。</think>

# SGLang 速报 — 2026-10-01

## 今日要闻

SGLang 项目持续高速推进推理优化与模型支持扩展。本期重点包括：**权重缓存守护进程**第一阶段已上线（Qwen3-235B FP8 权重加载从 ~306–327s 降至 <1s），**前缀上下文并行**取得 Q3 路线图进展，以及 ROCm/AMD 后端的活跃开发。多个流式检测器的 bug 修复已合入，一个重要的 RFC 提议统一 SGLang 的内核命名空间。

---

## 版本发布与重大变更

过去 24 小时内无新版本发布。

---

## 新模型与硬件支持

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **ROCm 上的 Kimi-K3 MXFP4** | AMD Quark 支持在 ROCm 上服务 Kimi-K3 MXFP4 权重 | [#40811](https://github.com/sgl-project/sglang/pull/40811) |
| **GLM-5.3-Flash-NVFP4** | 支持 RedHatAI/GLM-5.3-Flash-NVFP4（修复压缩张量对遗忘门投影的问题） | [#41836](https://github.com/sgl-project/sglang/issues/41836) |
| **Qwen3.8-Flash-Next** | Qwen3.8-Flash-Next 路线图推进中，包含内核优化与 CPU 开销降低 | [#38731](https://github.com/sgl-project/sglang/issues/38731) |
| **SM100 上的 MiMo-V2** | MiMo 在 SM100 上默认启用 FA4；后端 A/B 测试显示 **1.85× DFlash 解码吞吐量**和 **9.0%** 常规解码提升 | [#41886](https://github.com/sgl-project/sglang/pull/41886) |
| **ROCm gfx950** | 为解码尺寸前向模式在 gfx950 上实现融合 MLA 吸收 + RoPE + KV 写入内核 | [#41533](https://github.com/sgl-project/sglang/pull/41533) |

---

## 性能与优化

| 领域 | 工作项 | 影响 | 链接 |
|------|--------|------|------|
| **权重缓存守护进程** | 第一阶段已上线 — 每 ranks 守护进程持有后量化权重，通过 CUDA IPC 服务 | 权重加载：**306–327s → <1s**（Qwen3-235B FP8） | [#33522](https://github.com/sgl-project/sglang/issues/33522) |
| **前缀上下文并行** | 已完成：allreduce 融合、支持 attention cp size ≠ moe_dp size、前缀上下文并行支持 MLA 模型（Dpsk v3/Kimi-K2.5）及含 SWA 的模型 | Q3 路线图里程碑 | [#21788](https://github.com/sgl-project/sglang/issues/21788) |
| **MegaMoE** | 为 ModelOpt NVFP4 专家保留 W13 布局 | 专家布局优化 | [#39388](https://github.com/sgl-project/sglang/pull/39388) |
| **Qwen3.8-Next** | 融合 NEXTN 验证与草图输入准备 | 图构建效率提升 | [#41175](https://github.com/sgl-project/sglang/pull/41175) |
| **ROCm TopK** | 为 CDNA 集群路径解码跨块分割单行长 | 提升长上下文解码效率 | [#39931](https://github.com/sgl-project/sglang/pull/39931) |
| **NIXL 步进描述符 API** | 使用步进式（压缩）描述符 API 进行内存注册 | 大幅降低初始延迟（最高 5s） | [#37827](https://github.com/sgl-project/sglang/pull/37827) |

---

## 稳定性与回退问题

| 严重程度 | 问题 | 状态 | 链接 |
|----------|-------|------|------|
| **高** | SafeUnpickler 黑名单绕过 → 通过 `/load_lora_adapter_from_tensors` 实现 RCE | 待处理 | [#30165](https://github.com/sgl-project/sglang/issues/30165) |
| **高** | `Req.decoded_text` 从未被写入 — 停止字符串回退死代码、驱逐时 DecodeStatus 种子为空 | 待处理 | [#41372](https://github.com/sgl-project/sglang/issues/41372) |
| **中** | CUDA 图预留约 1.8 GB，导致小显存卡上量化 KV 长上下文前缀预填充显存不足 | 待处理 | [#40094](https://github.com/sgl-project/sglang/issues/40094) |
| **中** | Triton 内核 `load_binary` 在 GB10/SM121 上解码 CUDA 图重放时返回"操作不允许" → GPU 显存耗尽 | 待处理 | [#40948](https://github.com/sgl-project/sglang/issues/40948) |
| **中** | MiMo-V2 为打包 MXFP4 专家选择 FP8 MoE 运行器（错误） | 待处理 | [#41569](https://github.com/sgl-project/sglang/issues/41569) |
| **中** | 包含 bias="lora_only" 或 "all" 的 PEFT 适配器在 normalize_qkv_proj 期间崩溃或静默损坏权重 | 待处理 | [#41828](https://github.com/sgl-project/sglang/issues/41828) |
| **低** | 流式检测器保留缓冲文本，流结束时内容丢失（Pythonic、Inkling、Gemma-4、Poolside、InternLM、MiniCPM-5、Hunyuan） | 修复已合并 | [#41963](https://github.com/sgl-project/sglang/pull/41963)、[#41962](https://github.com/sgl-project/sglang/pull/41962) |
| **低** | CI：截至 2026-10-01 有 4 个损坏、10 个不稳定测试 | 追踪中 | [#17050](https://github.com/sgl-project/sglang/issues/17050) |

---

## 这对应用开发者意味着什么

1. **大型模型冷启动更快**：权重缓存守护进程（第一阶段）将 Qwen3-235B FP8 的权重加载从分钟级缩短到亚秒级。如果你部署大型 MoE 模型，这将显著改善重启延迟。

2. **NVIDIA GPU 吞吐量提升**：MiMo 模型现已在 SM100 上默认启用 FA4，解码吞吐量提升高达 1.85×。确保使用最新版 SGLang 以获得此自动优化。

3. **ROCm 支持日趋成熟**：AMD gfx950 用户受益于融合 MLA 内核和 GLM-5.3-Flash 的 PTPC FP8 KDA 投影。如果你使用 AMD 硬件，测试新路径以获得前缀预填充性能提升。

4. **长上下文稀疏注意力**：HiSparse 正在积极开发面向长上下文稀疏服务场景，GPU 显存占用更低 — 如果你的工作负载涉及超长上下文的稀疏注意力，值得评估。

5. **安全提醒**：SafeUnpickler RCE 漏洞（#30165）影响从张量加载 LoRA 适配器。在修复前，避免将 `/load_lora_adapter_from_tensors` 暴露给不可信输入。

6. **流式输出修复**：多种格式检测器（Pythonic、Inkling、Gemma-4 等）现已正确在流结束时刷新缓冲文本 — 如果你使用工具调用或结构化输出，请验证你的用例是否已被覆盖。

---

*基于 GitHub 数据生成 — sgl-project/sglang*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate this llama.cpp digest from English to Chinese (Simplified Chinese). I need to:

1. Translate all the text content while keeping the Markdown structure exactly as-is
2. Keep URLs, PR numbers, file paths, technical terms as-is
3. Use natural technical Chinese register
4. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me go through and translate section by section:

## 1. Today's Highlights
Translate to Chinese

## 2. Releases & Breaking Changes
Translate, keep table format

## 3. New Model & Hardware Support
Translate, keep table format

## 4. Performance & Optimization
Translate, keep table format

## 5. Stability & Regressions
Translate, keep table format

## 6. What This Means for Application Developers
Translate, keep bullet points

Let me do the translation now:</think>

# llama.cpp 速报 — 2026-10-01

## 1. 今日要闻

llama.cpp 项目继续保持高速迭代，今日修复了 CLI 参数解析、投机解码正确性以及整数溢出防护等问题。值得注意的是，项目正在添加新模型架构支持，包括 Prism Bonsai 2 27B 和带 MTP 的 Qwen4Exp，同时在 Metal、Vulkan 和 CUDA 后端方面也在解决稳定性问题。

---

## 2. 版本发布与破坏性变更

| 提交 | 描述 | PR |
|------|------|-----|
| **b11308** | 修复 CLI 下载 mmproj 参数解析 | [#28977](https://github.com/ggml-org/llama.cpp/pull/28977) |
| **b11301** | 修复 ggml/gguf 中零元素张量的整数溢出防护 | [#29384](https://github.com/ggml-org/llama.cpp/pull/29384) |
| **b11299** | CLI 在 stdin EOF 时正确退出；修复 Windows Ctrl+C 广播问题 | [#29722](https://github.com/ggml-org/llama.cpp/pull/29722) |

---

## 3. 新模型与硬件支持

| 模型/架构 | 类型 | PR |
|-----------|------|-----|
| **Prism Bonsai 2 27B** | 运行时支持 | [#29600](https://github.com/ggml-org/llama.cpp/pull/29600) |
| **Qwen4Exp** | MTP（多 Token 预测）支持 | [#29761](https://github.com/ggml-org/llama.cpp/pull/29761) |
| **maion-coder** | 架构支持（转换+测试） | [#29778](https://github.com/ggml-org/llama.cpp/pull/29778) |
| **LLM-jp-4.1** | 聊天格式处理器，支持 reasoning/content 分离 | [#29681](https://github.com/ggml-org/llama.cpp/pull/29681) |
| **GLM5.3 (flash)** | 功能请求跟进中 | [#27922](https://github.com/ggml-org/llama.cpp/issues/27922) |
| **dflash (MiMo)** | 转换+特征提取支持 | [#29650](https://github.com/ggml-org/llama.cpp/pull/29650) |

---

## 4. 性能与优化

| 领域 | 变更 | PR |
|------|------|-----|
| **CUDA FlashAttention** | 优先使用整 tile 调度以实现高效两阶段内核（提升 prefill 性能） | [#29435](https://github.com/ggml-org/llama.cpp/pull/29435) |
| **CUDA MMVF** | 小 batch size 时对 thin f16/bf16 使用 MMVF 而非慢速 cublas 路径 | [#29633](https://github.com/ggml-org/llama.cpp/pull/29633) |
| **CUDA MMQ** | 为 CDNA 架构添加 N-tiles 启发式策略 | [#28709](https://github.com/ggml-org/llama.cpp/pull/28709) |
| **CUDA sm70** | 将 Volta (sm_70) 路由至 Turing MMVQ nwarps 表以提升 decode 性能 | [#29753](https://github.com/ggml-org/llama.cpp/pull/29753) |
| **Metal MXFP4** | 对 mxfp4 mul-mat 使用 bf16 计算（修复大离群值导致的范围问题） | [#29770](https://github.com/ggml-org/llama.cpp/pull/29770) |
| **Vulkan FWHT** | 扩展内核支持最高 8192 的块宽度 | [#29772](https://github.com/ggml-org/llama.cpp/pull/29772) |
| **Hexagon HMX** | 展平多序列 matmul 为 2D（n_seqs > 1 时提速） | [#29779](https://github.com/ggml-org/llama.cpp/pull/29779) |
| **Jinja 解析器** | 除非循环过滤器需要，否则跳过循环作用域复制（优化） | [#29776](https://github.com/ggml-org/llama.cpp/pull/29776) |
| **线程调度** | 使用 `common_cpu_get_num_math()` 处理 `--threads -1` 以避免 SMT 超订阅 | [#23836](https://github.com/ggml-org/llama.cpp/pull/23836) |
| **投机解码** | 为层输入保留原始 batch 顺序 | [#29019](https://github.com/ggml-org/llama.cpp/pull/29019) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | PR/修复 |
|----------|------|------|---------|
| **严重** | SYCL 在 Intel A770 上完全不可用 | 开放中 | [#27063](https://github.com/ggml-org/llama.cpp/issues/27063) |
| **高** | Metal 长文本生成时 abort（`ggml_metal_buffer_get_tensor`） | 开放中 | [#29771](https://github.com/ggml-org/llama.cpp/issues/29771) — 修复见 [#29777](https://github.com/ggml-org/llama.cpp/pull/29777) |
| **高** | AMD Radeon AI PRO R9700 上 Vulkan ErrorDeviceLost（启用 SAM/ReBAR） | 开放中 | [#29623](https://github.com/ggml-org/llama.cpp/issues/29623) |
| **高** | Snapdragon 7 Gen 4 上的 ggml-hexagon 问题（HMX MUL_MAT 返回 inf） | 开放中 | [#29473](https://github.com/ggml-org/llama.cpp/issues/29473) |
| **中** | SYCL MUL_MAT bf16 在 bs=[1,3] 时结果错误（Arc 140T） | 开放中 | [#27771](https://github.com/ggml-org/llama.cpp/issues/27771) |
| **中** | 7x Volta (sm_70) 分层时 CUDA 错误 | 开放中 | [#29255](https://github.com/ggml-org/llama.cpp/issues/29255) |
| **中** | gfx1201 上 fattn 失败（test-backend-ops） | 开放中 | [#29314](https://github.com/ggml-org/llama.cpp/issues/29314) |
| **低** | RPC 符号链接缓存目录损坏 | 开放中 | [#29759](https://github.com/ggml-org/llama.cpp/issues/29759) |
| **低** | `--cache-ram -1` 未按"无限制"行为工作 | 开放中 | [#29324](https://github.com/ggml-org/llama.cpp/issues/29324) |

---

## 6. 对应用开发者的意义

- **修复上线**：Windows 上导致 Ctrl+C 时误杀无关进程的 stdin EOF bug 已修复。Metal 后端的内存泄漏问题已解决。
- **新模型支持**：使用 Prism Bonsai 2 27B 或 Qwen4Exp 的开发者现在可以用 llama.cpp 运行这些模型了。LLM-jp-4.1 聊天格式已支持。
- **量化改进**：MXFP4 推理现在可以在 Metal 上正确处理大权重离群值的边界情况。
- **性能提升**：CUDA 用户应该能看到改进的 FlashAttention prefill 性能，以及在 Volta 和 Turing GPU 上更好的 decode 吞吐量。
- **线程调度**：使用 `--threads -1` 现在可以正确识别 SMT/hybrid CPU 环境，避免线程超订阅。
- **值得关注**：SYCL 在 Intel A770 上仍然不可用；如果依赖 SYCL，请关注 #27063。启用了 SAM 的 AMD R9700 Vulkan 用户请跟踪 #29623。

---

*基于 GitHub 数据生成 — ggml-org/llama.cpp (2026-10-01)*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Chinese while preserving the Markdown structure exactly. Let me translate this carefully, keeping technical terms, issue numbers, URLs, and code identifiers in their original form.

I need to:
1. Translate all the content into Chinese
2. Keep the Markdown structure (headings, tables, lists, etc.)
3. Keep issue numbers, URLs, code references, project names as-is
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through and translate section by section.</think>

# Ollama 摘要 — 2026-10-01

## 今日要闻

Ollama 在 MLX（Apple Silicon）、Vulkan 和 Windows GPU 后端方面持续活跃开发，修复了 JSON 模式属性排序和代理处理的多个 bug。团队正在解决 MLX 模型在持续负载下的卡顿和 RTX 5090 上的 CUDA 崩溃等关键问题。社区贡献持续扩展 System One API 支持和可观测性集成。

## 发布与重大变更

过去 24 小时内无新版本发布。注意：Issue #18706 澄清了 v0.35.0 确实是预发布版本，尽管没有 `-rc` 后缀——用户应将其视为早期候选版本。

## 新模型与硬件支持

- **System One MLX 支持** — PR #18701 为 System One 模型添加了原生 MLX 支持及测试覆盖
- **Bongard (T5Gemma2) 模型** — Issue #18714 提议将 Bongard-mini（T5Gemma2 4B-4B 编码器-解码器）添加到 `/v1/systemone` 端点
- **Gemma4 MoE MLX 修复** — PR #18631 解决了 mlx-community Gemma 4 MoE 检查点的专家权重加载问题（修复 #18540）

## 性能与优化

- **Embedding HTTP 连接复用** — PR #18397 修复 #18392，复用 llama-server HTTP 连接进行 embed 负载，消除持续 `/api/embed` 工作负载下的每次请求健康检查
- **JSON 属性顺序保留** — PR #18721 修复回归 #18717，确保在原生 llama-server 聊天路径上维护 JSON 模式属性顺序，而非按字母顺序排序
- **Blob 下载时代理配置生效** — PR #18719 确保 `HTTPS_PROXY/HTTP_PROXY/NO_PROXY` 环境变量在注册表和 blob 下载时生效（修复 #18625 的回归）

## 稳定性与回归

| 严重程度 | Issue | 状态 | 修复 PR |
|----------|-------|------|---------|
| **高** | #18642 — RTX 5090 上 Cohere MoE 架构的 CUDA 非法内存访问（MUL_MAT）（Windows） | OPEN | — |
| **高** | #18505 — MLX nvfp4 模型在持续单槽负载下预填充卡顿，需要 SIGTERM 恢复 | OPEN | — |
| **高** | #18099 — macOS/Metal 上 llama-server malloc 堆无限增长（6.5 GB 换页到 swap） | CLOSED | — |
| **中** | #18557 — Vulkan 加载任何模型时访问冲突（AMD RX 6800 XT） | OPEN | — |
| **中** | #17916 — 默认 n_threads 忽略 cgroup CPU 配额，导致 CPU 限制容器中吞吐量下降约 45 倍 | OPEN | — |
| **中** | #18679 — llama-server 后端忽略 OLLAMA_GPU_OVERHEAD，未应用 VRAM 预留 | OPEN | — |
| **中** | #18712 — Windows 自动更新后留下 `cuda_v12\ggml-cuda.dll` 为 .tmp，导致回退到 CPU | OPEN | — |
| **低** | #16060 — 手机号验证拒绝非美国号码（德国），阻止付费计划注册 | OPEN | — |
| **低** | #18368 — macOS 上聊天 60 秒后静默失败，无 GUI 通知 | OPEN | — |
| **低** | #18715 — deepseek-v4.1-flash:cloud 工具调用前丢失空格 | OPEN | — |

## 这对应用开发者的意义

1. **MLX 用户**：请注意，持续单槽并行负载下 nvfp4 模型可能导致卡顿——考虑批处理或重启受影响的工作负载
2. **Windows NVIDIA 用户**：如果自动更新后 GPU 检测失败，检查 CUDA 后端目录中残留的 `.tmp` DLL 文件
3. **容器部署**：n_threads/cgroup 问题（#17916）在 CPU 限制容器中导致严重吞吐量下降——考虑显式设置线程数
4. **结构化输出**：JSON 属性顺序修复（#18717/#18721）恢复了依赖模式的正确顺序——测试依赖特定键序列的现有应用
5. **代理环境**：企业代理后的模型拉取现在应能正常工作，修复了代理问题（#18719）
6. **System One**：API 正在获得关注，MLX 支持和文档不断完善——期待更多模型可用性

---

Rules:
- Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
- Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
- Issue/PR references like #12345 and their link text stay as-is.
- Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM digest into Simplified Chinese, following specific rules. Let me translate while:

1. Keeping all Markdown structure (headings, tables, lists, etc.)
2. Keeping URLs, code, numbers, version tags as-is
3. Keeping issue/PR references as-is
4. Using natural technical Chinese (not literal translation)
5. No preamble, no explanation, no markdown fences

Let me go through each section:</think>

# LiteLLM 简报 — 2026-10-01

## 今日要闻

v1.105.0-dev.1 版本引入了 Docker 镜像签名机制（cosign），增强了生产部署的供应链安全。另一项重要性能优化已上线：日志集成采用懒加载模式，消除了 135 个未使用模块的导入开销。多个影响 Redis 集群部署、流式输出与 logprobs、成本计费的严重 bug 已修复。

---

## 版本发布与破坏性变更

- **v1.105.0-dev.1** 已发布 — [GitHub Release](https://github.com/BerriAI/litellm/releases/tag/v1.105.0-dev.1)
- **Docker 镜像签名**：所有 LiteLLM Docker 镜像现均使用 cosign 签名，密钥来自 commit `0112e53`。验证方式：`cosign verify --key cosign.pub ghcr.io/berriai/litellm:[tag]`

---

## 新模型与硬件支持

- **Gemma 4** 申请加入 `model_prices_and_context_window.json` — [Issue #26973](https://github.com/BerriAI/litellm/issues/26973)
- **Azure Terraform 模块** 提案，用于基础设施即代码部署 — [Issue #31843](https://github.com/BerriAI/litellm/issues/31843)

---

## 性能与优化

- **日志集成懒加载** — PR #43933 消除了 `import litellm` 时导入 135 个未使用日志模块的问题，减少了启动时间和内存占用。集成现通过 `__getattr__` 注册表在首次使用时才解析。
- **服务层级计费集成矩阵** — PR #43960 新增 40 个用例测试，覆盖 ultrafast 层级的端点、SDK 客户端和流式场景计费。
- **同步流式回退恢复** — PR #43959 修复了递归重试 bug：之前会错误地重试主模型而非继续使用备用模型。

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 | PR/修复方案 |
|----------|------|------|--------------|
| **高** | 缓存不存储 `provider_specific_fields`（Anthropic 引用） | 已关闭 | [Issue #13048](https://github.com/BerriAI/litellm/issues/13048) |
| **高** | 后台健康检查将整个无界表加载到内存 → 大规模下 OOM | 已关闭 | [Issue #37611](https://github.com/BerriAI/litellm/issues/37611) |
| **高** | 流式输出 + logprobs 在 vLLM 上失败（PydanticSerializationError） | 待处理 | [Issue #18801](https://github.com/BerriAI/litellm/issues/18801) |
| **中** | Azure Redis Enterprise（非集群模式）上的 Redis CROSSSLOT 错误 | 已关闭 | [Issue #30065](https://github.com/BerriAI/litellm/issues/30065) |
| **中** | 工作进程关闭时审计日志写入丢失（fire-and-forget 任务） | 待处理 | [Issue #43583](https://github.com/BerriAI/litellm/issues/43583) |
| **中** | 自定义模型（不在内置成本映射表中）计费为 $0 | 待处理 | [Issue #35691](https://github.com/BerriAI/litellm/issues/35691) |
| **中** | 超过 max_budget 的 Key 在 60s 空闲后仍被接纳，直到批处理写入器刷新 | 待处理 | [Issue #43732](https://github.com/BerriAI/litellm/issues/43732) |

---

## 对应用开发者的影响

1. **如果你在生产环境运行 LiteLLM**：请验证你的 Docker 部署使用 cosign 拉取签名镜像，确保供应链完整性。

2. **如果你使用 Redis 缓存 + Azure Redis Enterprise**：CROSSSLOT 错误修复（Issue #30065）已上线 — 确保你的部署包含多键操作的修复。

3. **如果你使用 vLLM 的流式输出 + logprobs**：已知 PydanticSerializationError 仍未解决（Issue #18801） — 在修复前请避免同时使用 `stream=True` 和 `logprobs=True`。

4. **如果你跟踪成本**：部署在内置成本映射表之外的自定义模型可能在 spend 日志中记录 $0，尽管 `estimated_cost` 是正确的 — 可使用 estimated_cost 字段作为临时方案。

5. **如果你使用 Cerebras**：SDK 现已正确处理部分 OpenAI 兼容性（Issue #31333 已关闭），但请注意并非所有 OpenAI 功能（tools/response_format）都受支持。

6. **如果你管理多租户部署**：终端用户的 Redis 缓存键在客户创建/更新/删除时不会失效（Issue #31838） — 在管理客户生命周期时考虑手动清除缓存。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate this Unsloth digest into Chinese. I need to:
1. Translate all the content into Chinese
2. Keep all Markdown structure (headings, tables, lists, etc.)
3. Keep URLs, issue numbers, code, file paths, etc. as-is
4. Use natural technical Chinese suitable for a developer newsletter

Let me translate section by section:

## 1. Today's Highlights → 今日要闻

Unsloth Studio sees substantial UI and backend work today, including voice mode reconstruction (PRs #12384-#12386) after the original fork was deleted, plus multiple bug fixes around PDF rendering, Word document handling, and CSV training. A notable performance regression was reported: Studio's mmproj loading from disk causes severe throughput regression, while the OpenAI-compatible API adds ~1.2s fixed latency per request.

Unsloth Studio 今日迎来大量 UI 与后端工作：语音模式在原分支被删除后正在进行重建（PR #12384-#12386），同时修复了多个 PDF 渲染、Word 文档处理和 CSV 训练的 bug。值得注意的是，有性能回退报告：Studio 的 mmproj 从磁盘加载导致吞吐量严重回退，而 OpenAI 兼容 API 每次请求增加约 1.2 秒固定延迟。

## 2. Releases & Breaking Changes → 发布与重大变更

No new releases in the last 24 hours.

过去 24 小时内无新版本发布。

## 3. New Model & Hardware Support → 新模型与硬件支持

| Item | Description | Link |
|------|-------------|------|
| audio.cpp integration | Added as fourth native audio runtime (alongside llama.cpp, whisper.cpp, sd.cpp) for TTS, music, and ASR | [#12342](https://github.com/unslothai/unsloth/pull/12342) |
| Decision API expansion | Now supports TypeSafe, Liquid AI, OpenRouter, and other System One servers | [#12373](https://github.com/unslothai/unsloth/pull/12373) |
| Native Replicate API bridge | Adds streaming support for Replicate endpoints, reducing OpenAI-proxy dependency | [#11905](https://github.com/unslothai/unsloth/pull/11905) |

| 项目 | 描述 | 链接 |
|------|-------------|------|
| audio.cpp 集成 | 新增为第四个原生音频运行时（与 llama.cpp、whisper.cpp、sd.cpp 并列），支持 TTS、音乐和 ASR | [#12342](https://github.com/unslothai/unsloth/pull/12342) |
| Decision API 扩展 | 现支持 TypeSafe、Liquid AI、OpenRouter 等 System One 服务器 | [#12373](https://github.com/unslothai/unsloth/pull/12373) |
| 原生 Replicate API 桥接 | 为 Replicate 端点添加流式支持，减少对 OpenAI 代理的依赖 | [#11905](https://github.com/unslothai/unsloth/pull/11905) |

## 4. Performance & Optimization → 性能与优化

| Item | Description | Link |
|------|-------------|------|
| Fast CrossEntropyLoss backward fix | Preserves logits to prevent silent gradient corruption with contiguous inputs | [#12351](https://github.com/unslothai/unsloth/pull/12351) |
| Memory-tight startup fix | Backend no longer crashes on high-CPU / low-memory machines (OpenBLAS 重试) | [#12374](https://github.com/unslothai/unsloth/pull/12374) |
| Voice pipeline benchmark | Deterministic E2E latency benchmarking for voice mode | [#12385](https://github.com/unslothai/unsloth/pull/12385) |
| **Regression**: mmproj disk loading | Loading mmproj-F16.gguf from disk during generation causes severe t/s regression; `--mlock` 被拒绝 | [#12372](https://github.com/unslothai/unsloth/issues/12372) |
| **Regression**: API latency | OpenAI-compatible endpoint adds ~1.2s fixed overhead per request (3-5x slower on short text) | [#12364](https://github.com/unslothai/unsloth/issues/12364) |

| 项目 | 描述 | 链接 |
|------|-------------|------|
| Fast CrossEntropyLoss 反向传播修复 | 保留 logits 以防止连续输入时的静默梯度损坏 | [#12351](https://github.com/unslothai/unsloth/pull/12351) |
| 内存受限启动修复 | 后端在高 CPU / 低内存机器上不再崩溃（OpenBLAS 重试机制） | [#12374](https://github.com/unslothai/unsloth/pull/12374) |
| 语音管道基准测试 | 语音模式端到端延迟确定性基准测试 | [#12385](https://github.com/unslothai/unsloth/pull/12385) |
| **回退**：mmproj 磁盘加载 | 生成期间从磁盘加载 mmproj-F16.gguf 导致严重的 t/s 回退；`--mlock` 被拒绝 | [#12372](https://github.com/unslothai/unsloth/issues/12372) |
| **回退**：API 延迟 | OpenAI 兼容端点每次请求增加约 1.2 秒固定开销（短文本 3-5 倍更慢） | [#12364](https://github.com/unslothai/unsloth/issues/12364) |

## 5. Stability & Regressions → 稳定性与回退

| Severity | Issue | Status | Link |
|----------|-------|--------|------|
| **High** | mmproj loaded from disk during generation, causing severe throughput regression; `--mlock` rejected | OPEN | [#12372](https://github.com/unslothai/unsloth/issues/12372) |
| **High** | OpenAI-compatible API adds ~1.2s fixed latency per request, 3-5x slower than bundled llama-server | OPEN | [#12364](https://github.com/unslothai/unsloth/issues/12364) |
| **Medium** | Windows winget installs ARM64 package on x86 Intel CPUs | CLOSED (no fix PR noted) | [#11913](https://github.com/unslothai/unsloth/issues/11913) |
| **Medium** | AMD/Windows: Qwen-Image-2.1 downloads 16GB text encoder because torchao fails to load FP8 | OPEN | [#11638](https://github.com/unslothai/unsloth/issues/11638) |
| **Medium** | Multi-user inference: model doesn't sync correctly across LAN accounts | OPEN | [#12365](https://github.com/unslothai/unsloth/issues/12365) |
| **Low** | --mmproj-device / --spec-draft-device rejected as "invalid device" when Studio pins to single GPU | CLOSED | [#11810](https://github.com/unslothai/unsloth/issues/11810) |
| **Low** | CSV export produces unreadable encoded content | CLOSED | [#11948](https://github.com/unslothai/unsloth/issues/11948) |

| 严重程度 | 问题 | 状态 | 链接 |
|----------|-------|--------|------|
| **高** | 生成期间从磁盘加载 mmproj 导致严重吞吐量回退；`--mlock` 被拒绝 | 待处理 | [#12372](https://github.com/unslothai/unsloth/issues/12372) |
| **高** | OpenAI 兼容 API 每次请求增加约 1.2 秒固定延迟，比捆绑的 llama-server 慢 3-5 倍 | 待处理 | [#12364](https://github.com/unslothai/unsloth/issues/12364) |
| **中** | Windows winget 在 x86 Intel CPU 上安装 ARM64 包 | 已关闭（未记录修复 PR） | [#11913](https://github.com/unslothai/unsloth/issues/11913) |
| **中** | AMD/Windows：Qwen-Image-2.1 下载 16GB 文本编码器，因为 torchao 无法加载 FP8 | 待处理 | [#11638](https://github.com/unslothai/unsloth/issues/11638) |
| **中** | 多用户推理：模型在 LAN 账户间无法正确同步 | 待处理 | [#12365](https://github.com/unslothai/unsloth/issues/12365) |
| **低** | --mmproj-device / --spec-draft-device 在 Studio 固定到单个 GPU 时被拒绝为"无效设备" | 已关闭 | [#11810](https://github.com/unslothai/unsloth/issues/11810) |
| **低** | CSV 导出产生不可读的编码内容 | 已关闭 | [#11948](https://github.com/unslothai/unsloth/issues/11948) |

## 6. What This Means for Application Developers → 这对应用开发者意味着什么

- **Voice mode is being rebuilt**: The voice conversation feature (consolidated from PRs #10373, #10374, #11074) is being re-merged. Expect voice capabilities to return to `main` soon.

- **语音模式正在重建**：语音对话功能（从 PR #10373、#10374、#11074 整合而来）正在重新合并。预计语音功能将很快回归 `main`。

- **Audio stack expansion**: Adding audio.cpp as a fourth native engine gives developers more TTS/ASR options beyond whisper.cpp.

- **音频堆栈扩展**：新增 audio.cpp 作为第四个原生引擎，为开发者提供除 whisper.cpp 之外的更多 TTS/ASR 选项。

- **LLM gateway improvements**: The native Replicate API bridge and expanded Decision API support reduce reliance on OpenAI-compatible proxies — useful if you're integrating with diverse model providers.

- **LLM 网关改进**：原生 Replicate API 桥接和扩展的 Decision API 支持减少了对 OpenAI 兼容代理的依赖——如果您正在集成多种模型提供商，这将非常有用。

- **Data handling fixes**: Several PRs improve document processing (PDF forms, Word footnotes, CSV training with NA/None values). If you're building RAG pipelines or fine-tuning on CSV data, these changes reduce silent data loss.

- **数据处理修复**：多个 PR 改进了文档处理（PDF 表单、Word 脚注、CSV 训练中的 NA/None 值）。如果您正在构建 RAG 管道或基于 CSV 数据进行微调，这些更改可减少静默数据丢失。

- **Watch for regressions**: The mmproj disk-loading issue and OpenAI API latency overhead could significantly impact throughput-sensitive workloads. Monitor performance after updates.

- **注意回退**：mmproj 磁盘加载问题和 OpenAI API 延迟开销可能会显著影响吞吐量敏感的工作负载。在更新后监控性能。

---

Rules:
- Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
- Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
- Issue/PR references like #12345 and their link text stay as-is.
- Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Now I'll translate everything in Chinese:

# Unsloth 速报 — 2026-10-01

## 1. 今日要闻

Unsloth Studio 今天迎来大量 UI 和后端工作，包括语音模式重建（原分支被删除后，通过 PR #12384-#12386 重建），以及多个关于 PDF 渲染、Word 文档处理和 CSV 训练的 bug 修复。有一个值得注意的性能回退报告：Studio 的 mmproj 从磁盘加载导致严重的吞吐量回退，而 OpenAI 兼容 API 每次请求增加约 1.2 秒的固定延迟。

## 2. 发布与重大变更

过去 24 小时内无新版本发布。

## 3. 新模型与硬件支持

| 项目 | 描述 | 链接 |
|------|-------------|------|
| audio.cpp 集成 | 作为第四个原生音频运行时加入（与 llama.cpp、whisper.cpp、sd.cpp 并列），支持 TTS、音乐和 ASR | [#12342](https://github.com/unslothai/unsloth/pull/12342) |
| Decision API 扩展 | 现支持 TypeSafe、Liquid AI、OpenRouter 和其他 System One 服务器 | [#12373](https://github.com/unslothai/unsloth/pull/12373) |
| 原生 Replicate API 桥接 | 为 Replicate 端点添加流式支持，减少对 OpenAI 代理的依赖 | [#11905](https://github.com/unslothai/unsloth/pull/11905) |

## 4. 性能与优化

| 项目 | 描述 | 链接 |
|------|-------------|------|
| Fast CrossEntropyLoss 反向传播修复 | 保留 logits 以防止连续输入时的静默梯度损坏 | [#12351](https://github.com/unslothai/unsloth/pull/12351) |
| 内存受限启动修复 | 后端在高 CPU / 低内存机器上不再崩溃（OpenBLAS 重试） | [#12374](https://github.com/unslothai/unsloth/pull/12374) |
| 语音管道基准测试 | 语音模式端到端延迟确定性基准测试 | [#12385](https://github.com/unslothai/unsloth/pull/12385) |
| **回退**：mmproj 磁盘加载 | 生成期间从磁盘加载 mmproj-F16.gguf 导致严重的 t/s 回退；`--mlock` 被拒绝 | [#12372](https://github.com/unslothai/unsloth/issues/12372) |
| **回退**：API 延迟 | OpenAI 兼容端点每次请求增加约 1.2 秒固定开销（短文本慢 3-5 倍） | [#12364](https://github.com/unslothai/unsloth/issues/12364) |

## 5. 稳定性与回退

| 严重程度 | 问题 | 状态 | 链接 |
|----------|-------|--------|------|
| **高** | 生成期间从磁盘加载 mmproj 导致严重吞吐量回退；`--mlock` 被拒绝 | 待处理 | [#12372](https://github.com/unslothai/unsloth/issues/12372) |
| **高** | OpenAI 兼容 API 每次请求增加约 1.2 秒固定延迟，比捆绑的 llama-server 慢 3-5 倍 | 待处理 | [#12364](https://github.com/unslothai/unsloth/issues/12364) |
| **中** | Windows winget 在 x86 Intel CPU 上安装 ARM64 包 | 已关闭（未记录修复 PR） | [#11913](https://github.com/unslothai/unsloth/issues/11913) |
| **中** | AMD/Windows：Qwen-Image-2.1 下载 16GB 文本编码器，因为 torchao 无法加载 FP8 | 待处理 | [#11638](https://github.com/unslothai/unsloth/issues/11638) |
| **中** | 多用户推理：模型在 LAN 账户间无法正确同步 | 待处理 | [#12365](https://github.com/unslothai/unsloth/issues/12365) |
| **低** | --mmproj-device / --spec-draft-device 在 Studio 固定到单个 GPU 时被拒绝为"无效设备" | 已关闭 | [#11810](https://github.com/unslothai/unsloth/issues/11810) |
| **低** | CSV 导出产生不可读的编码内容 | 已关闭 | [#11948](https://github.com/unslothai/unsloth/issues/11948) |

## 6. 这对应用开发者意味着什么

- **语音模式正在重建**：语音对话功能（从 PR #10373、#10374、#11074 整合而来）正在重新合并。预计语音功能将很快回归 `main`。

- **音频堆栈扩展**：新增 audio.cpp 作为第四个原生引擎，为开发者提供除 whisper.cpp 之外的更多 TTS/ASR 选项。

- **LLM 网关改进**：原生 Replicate API 桥接和扩展的 Decision API 支持减少了对 OpenAI 兼容代理的依赖——如果您正在集成多种模型提供商，这将非常有用。

- **数据处理修复**：多个 PR 改进了文档处理（PDF 表单、Word 脚注、CSV 训练中的 NA/None 值）。如果您正在构建 RAG 管道或基于 CSV 数据进行微调，这些更改可减少静默数据丢失。

- **注意回退**：mmproj 磁盘加载问题和 OpenAI API 延迟开销可能会显著影响吞吐量敏感的工作负载。在更新后监控性能。</think>



</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*