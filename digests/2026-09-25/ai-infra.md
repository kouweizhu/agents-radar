# AI 基础设施日报 2026-09-25

> 生成时间: 2026-09-25 00:44 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the entire English report into Chinese. Let me translate it while preserving:
- All Markdown structure (headings, tables, lists, blockquotes, horizontal rules)
- All formatting (bold, italic)
- URLs and links
- Project names, version tags, issue/PR numbers, file paths
- Numbers and dates
- Code spans and blocks
- Emoji

I need to use natural technical Chinese suitable for a developer newsletter, not literal translation.

Let me go through each section:

1. 生态系统概览
2. 活跃度对比
3. 模型支持竞争
4. 性能前沿
5. 层级定位
6. 趋势信号

I'll maintain all tables and their formatting exactly as is.</think>

# 跨项目对比报告 — AI 基础设施每日快讯

## 1. 生态系统概览

今日活动反映出一个日益成熟的 AI 基础设施技术栈，各层级之间的边界正变得愈发模糊。**vLLM** 和 **SGLang** 作为高性能推理服务引擎竞争，目标是 Kubernetes 和企业级部署场景；**llama.cpp** 和 **Ollama** 面向本地/自建推理，在可移植性和优化之间寻求不同取舍；**LiteLLM** 则在这些后端之上构建了统一的网关抽象层；**Unsloth** 则打通了训练与服务之间的隔阂。共同的主题是：针对 Blackwell/RTX 50（batch-invariant kernels）的优化、扩展 AMD ROCm 支持、以及深化多模态（ViT、Qwen-Image）能力——这表明整个生态正在为下一代 GPU 硬件和视觉-语言工作负载的大规模落地做准备。

---

## 2. 活跃度对比

| 项目 | Issue（24h） | PR（24h） | Release（24h） | 热门讨论串 |
|---------|--------------|-----------|----------------|------------------------|
| **vLLM** | ~20+（最高：#27433，batch-invariant 相关评论 95 条） | ~15+ | 无 | Blackwell 批处理不变式 matmul、Mamba2 状态保存、ROCm GEMM 优化 |
| **SGLang** | ~15 | ~15 | 无 | DeepSeek FFN 重构栈、diffusion TP=2 回归、overlap scheduler 惩罚 bug |
| **llama.cpp** | 11 | 21 | **1**（v0.25.3） | 推测解码发散、Qwen3.8 长上下文吞吐量骤降、Vulkan 回归 |
| **Ollama** | ~11 | 21 | 无 | macOS GUI 60s 失败、RTX 50 CUDA 检测、MLX 内存泄漏 |
| **LiteLLM** | ~10（最高：#26672，预算绕过相关 19 条） | ~15 | 无 | 流式 service_tier 修复、Prometheus 重定向问题、客户级 RPM 绕过 |
| **Unsloth** | 39 | 199 | 无 | AMD ROCm 崩溃、Qwen-Image-2.1 VAE 卡死、vLLM/SGLang 后端集成 |

**观察**：Unsloth 以 PR 数量领先（199 个），反映出其作为多后端聚合器的角色。llama.cpp 是今日唯一有版本发布的项目（v0.25.3）。vLLM 的社区讨论热度最高（评论量最大）。

---

## 3. 模型支持竞争

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|----------------------|------|--------|-----------|--------|---------|---------|
| **DeepSeek-V4/V4.1** | ✅ Flash、DeepGEMM MegaMoE、Blackwell kernels | ✅ FFN 重构、scatter 模式规划 | — | — | — | — |
| **Qwen-Image-2.1** | — | — | — | — | — | ✅ GGUF 流程、int8 Hadamard、VAE 修复 |
| **Qwen3-VL** | ⚠️ Embedding 不匹配（已关闭） | — | — | — | — | — |
| **Gemma 4** | — | — | ✅ MLX expert 加载、sparse-MoE 量化 | — | — | — |
| **GLM-5.3 Flash** | ✅ 追踪中 | ✅ 非对称 P/D TP bug | — | — | — | — |
| **GraniteForCausalLM** | — | — | — | ✅ MLX 支持 | — | — |
| **Kimi-K3** | — | — | — | — | — | ✅ MXFP4 训练 |
| **ViT（视觉 Transformer）** | ✅ RFC（CUDA graphs） | — | — | — | — | ✅ NVFP4 策略 |
| **System One** | — | — | — | ✅ API | ✅ 评分 API | — |
| **Lark 语法** | — | ✅ XGrammar 支持 | — | — | — | — |

**领先者**：**vLLM** 在企业级模型覆盖上领先（DeepSeek、GLM、ViT）；**Unsloth** 在实验性/新兴模型上领先（Kimi-K3、Qwen-Image、AMD NPU）。

---

## 4. 性能前沿

| 优化方向 | 主导项目 | 今日关键工作 |
|-------------------|---------------------|----------------|
| **Batch-Invariant Kernels** | vLLM | TP=2/4/8 形状适配 sm_120（Blackwell/RTX 50） |
| **MoE / 专家并行** | vLLM、SGLang | 每层按需延迟 FFN finalize；scatter 模式 EP 规划 |
| **量化（KV Cache、权重）** | vLLM、Unsloth、llama.cpp | INT8 KV（vllm #33480）、NVFP4 每层策略（Unsloth）、Q8_0 dot 修复（llama.cpp） |
| **Mamba / SSM 状态** | vLLM | 批处理 prefill SSM 状态保存；spec-decode block tables 修复 |
| **Metal / GPU 内核** | llama.cpp、Unsloth | 稀疏 FA（llama.cpp）、FlashInfer + VAE 编译（Unsloth） |
| **ROCm / AMD** | vLLM、llama.cpp、Unsloth | ROCm GEMM 拷贝消除（vllm）、Intel FA（llama.cpp）、Ryzen AI NPU（Unsloth） |
| **流式 / 调度** | vLLM、LiteLLM | Live scheduler 调优旋钮；service_tier 传递 |
| **多后端推理** | Unsloth | vLLM/SGLang 作为可选后端 |

**前沿集中度**：最高杠杆的工作集中在 **Blackwell Batch-Invariant 内核**（解锁新硬件）、**MoE 优化**（DeepSeek 类模型）、以及 **多后端统一**（Unsloth 的 vLLM/SGLang 集成）。这些是基础设施层面的战略投入，而非针对特定模型的调优。

---

## 5. 层级定位

| 层级 | 主要项目 | 职责范围 |
|-------|------------------|------------|
| **训练 / 微调** | **Unsloth** | CUDA graph 训练、LoRA/QLoRA、NVFP4 训练、模型导出 |
| **本地运行时** | **llama.cpp**、**Ollama** | CPU/GPU/Metal/Vulkan 推理、GGUF 导出、嵌入式服务 |
| **服务引擎** | **vLLM**、**SGLang** | PagedAttention、前缀缓存、推测解码、多 GPU TP/EP |
| **网关 / 抽象层** | **LiteLLM** | 多供应商代理、速率限制、预算强制、成本追踪 |
| **多后端聚合器** | **Unsloth** | 训练 → 导出 → 通过 vLLM/SGLang/llama.cpp 服务 |

**重叠区域**：Unsloth 是唯一同时跨越训练和服务两个层级的项目。vLLM 和 SGLang 在功能集上趋于收敛（批处理、缓存、量化），但在调度器设计上各有侧重。LiteLLM 作为消费层位于所有服务引擎之上。

---

## 6. 趋势信号

### 基础设施工程师应关注

1. **Blackwell Batch-Invariant 是短期内的关键突破点**
   - vLLM 在 sm_120 的 TP>1 形状支持直接解锁 RTX 50 和 B200 的大规模部署。
   - SGLang 的 DeepSeek FFN 重构支持 scatter 模式 EP——这是多节点 MoE 服务的先决条件。
   - **行动建议**：如果在 Blackwell 硬件上部署，请关注 vLLM 版本的 batch-invariant 内核可用性。

2. **AMD ROCm 已不再是实验性功能**
   - vLLM（减少 69 次拷贝/decode）、llama.cpp（Intel FA 内核）、Unsloth（Ryzen AI NPU、ROCm 10）都在大力投入。
   - **行动建议**：如果关注成本或处于 HPC 环境，开始测试 AMD 路径。"仅支持 NVIDIA"的假设正在被打破。

3. **量化方案正在碎片化**
   - vLLM 推进 INT8 KV cache，Unsloth 推进 NVFP4，llama.cpp 推进 Q8_0 修复，LiteLLM 追踪 Quark MXFP4。
   - 每种量化格式有不同的精度/性能权衡和硬件需求。
   - **行动建议**：为每条量化路径建立基准测试套件；不要假设 FP8 的等效性。

4. **多后端推理正在成为现实**
   - Unsloth 现在提供 vLLM 和 SGLang 作为可选后端，替代其原生引擎。
   - LiteLLM 已经抽象了 100+ 供应商。
   - **行动建议**：设计推理层时考虑后端无关性；预计可移植性需求会增长。

5. **多模态正在跨越鸿沟**
   - ViT CUDA graphs（vLLM）、Qwen-Image-2.1 流程（Unsloth）、Gemma4 vision（llama.cpp）、DeepSeek-V4-Flash-Vision（vLLm）。
   - **行动建议**：如果构建视觉-语言代理，技术栈已经就绪。关注 VAE 解码稳定性问题（Unsloth #11636）。

6. **网关层正在成熟**
   - LiteLLM 的流式修复、预算强制、Prometheus 导出表明运维级关注正在得到解决。
   - **行动建议**：如果运行多租户 LLM 基础设施，评估 LiteLLM 作为标准化方案——不仅仅是作为适配层，而是作为控制平面。

---

*基于每日快讯整理 — 2026-09-25*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate this English GitHub digest about vLLM into Simplified Chinese, following the specific rules provided. Let me translate while:

1. Keeping all Markdown structure exactly (headings, tables, lists, bold, horizontal rules, emoji)
2. Preserving URLs, issue/PR references, version numbers, file paths, API/config identifiers as-is
3. Using natural technical Chinese (the register of a Chinese developer newsletter)
4. Not adding any preamble or explanation
5. Not using markdown fences around the output

Let me go through and translate:

Title: vLLM Daily Digest — 2026-09-25

1. Today's Highlights → 今日要闻

2. Releases & Breaking Changes → 版本发布与重大变更

3. New Model & Hardware Support → 新模型与硬件支持

4. Performance & Optimization → 性能与优化

5. Stability & Regressions → 稳定性与回归问题

6. What This Means for Application Developers → 这对应用开发者的意义

Let me translate the content carefully:</think>

# vLLM 每日简报 — 2026-09-25

## 1. 今日要闻

vLLM 项目多点推进：Blackwell/RTX 50 系列批量不变性（batch-invariant）内核覆盖持续扩展，新增张量并行（TP=2/4/8）的形状支持；同时社区持续解决模型特定问题，包括 GLM-5.3-Flash 解码退化问题以及 Mamba 混合模型的 Prefix Caching 问题。ROCm 优化正在密集合并，包括一项针对 AMD 硬件的修复，将每步解码中 69 次冗余连续拷贝归零。

---

## 2. 版本发布与重大变更

过去 24 小时内无新版本发布。

---

## 3. 新模型与硬件支持

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **ViT Full CUDA Graph** | 正在追踪视觉 Transformer CUDA 图在多模态模型中的支持（Qwen3-VL、GLM-V、Kimi K2.5） | [#38175](https://github.com/vllm-project/vllm/issues/38175) |
| **INT8 KV Cache 量化** | 功能请求：在当前 FP8 KV Cache 量化基础上增加 INT8 支持 | [#33480](https://github.com/vllm-project/vllm/issues/33480) |
| **GLM 5.3 性能** | 追踪 GLM-5.3 架构优化工作（基于 GLM-5.2 `glm_moe_dsa` 扩展） | [#57406](https://github.com/vllm-project/vllm/issues/57406) |
| **ROCm MI355X Qwen3.8-2.4T** | AMD MI355X + Qwen3.8-2.4T-A95B (MXFP4) 性能优化计划 | [#57149](https://github.com/vllm-project/vllm/issues/57149) |

---

## 4. 性能与优化

| 类别 | 详情 | 链接 |
|----------|---------|------|
| **Blackwell/RTX 50 批量不变性** | 为 `sm_120` 批量不变性 MatMul 调优表添加 TP=2/4/8 每秩形状，使 TP>1 时批量不变性内核正常工作 | [#58495](https://github.com/vllm-project/vllm/pull/58495) |
| **Mamba2 状态管理** | 批量 Mamba2 前缀 SSM 状态保存，移除 Prefill 路径中的 GPU↔CPU 同步 | [#49371](https://github.com/vllm-project/vllm/pull/49371) |
| **ROCm GEMM** | 消除 Slim GEMM 路径中每步解码 69 次冗余连续拷贝 | [#58566](https://github.com/vllm-project/vllm/pull/58566) |
| **MoE 延迟 Finalize** | 重构 MoE finalize 为逐层合约，为专家并行支持模块化路径 | [#58635](https://github.com/vllm-project/vllm/pull/58635) |
| **DeepSeek-V4 Blackwell 覆盖缺口** | 追踪 DeepSeek-V4-Flash 在消费级 Blackwell（RTX 50 / GB10）上通过 DeepGEMM 的内核覆盖缺口 | [#41063](https://github.com/vllm-project/vllm/issues/41063) |
| **EPLB 批处理** | 添加争用感知的专家迁移批处理，减少异步专家并行期间的 NIC/推理争用 | [#52641](https://github.com/vllm-project/vllm/pull/52641) |
| **在线调度器参数** | PR 添加开发路由，支持运行时 KV 池重新初始化和在线调度器参数更新，无需进程重启 | [#55018](https://github.com/vllm-project/vllm/pull/55018) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 详情 | 状态 |
|----------|-------|---------|--------|
| **高** | GLM-5.3-Flash 长解码退化 | W4A16 量化的 GLM-5.3-Flash 在累积推理解码后出现输出退化；影响 B300 生产部署 | 进行中 — [#56868](https://github.com/vllm-project/vllm/issues/56868) |
| **高** | Prefix Caching + MTP 混合 Mamba/GDN | 混合 Mamba/GDN 模型在启用 Prefix Caching 时输出损坏；v0.28.0 中问题再现，曾在 #43559 报告但未修复 | 进行中 — [#53912](https://github.com/vllm-project/vllm/issues/53912) |
| **高** | AsyncScheduler num_output_placeholders 下溢 | v0.24.0 引入的回归，在 Chunked Prefill + 并发场景下导致下溢；影响 Qwen3.6-35B-A3B-FP8 | 进行中 — [#57562](https://github.com/vllm-project/vllm/issues/57562) |
| **中** | Mamba spec-decode 块表索引 bug | 修复 PP + MTP + Prefix Caching 导致 14-33% 请求退化为常量 token 循环问题 | PR 开放 — [#55506](https://github.com/vllm-project/vllm/pull/55506) |
| **中** | DeepSeek-V4.1-Flash Triton IMA | 高并发下 H20 上 `dsv4_topk` MoE 路由内核 CUDA 非法内存访问；通过 `max_num_seqs=256` 缓解 | 进行中 — [#56389](https://github.com/vllm-project/vllm/issues/56389) |
| **中** | sm120 上的 FP8 块缩放权重 | RTX 5090 上 `process_weights_after_loading` 期间 DeepGEMM 出现"未知 SF 转换"错误 | 进行中 — [#51884](https://github.com/vllm-project/vllm/issues/51884) |
| **低** | Qwen3-VL-Embedding 向量不一致 | 生成的嵌入与官方 qwen_vl_utils 实现不同 | 已关闭 — [#33204](https://github.com/vllm-project/vllm/issues/33204) |

---

## 6. 这对应用开发者的意义

- **Blackwell/RTX 50 用户**：批量不变性内核现在在张量并行度 > 1 时正常工作，提升了新 NVIDIA 硬件的吞吐量。
- **GLM-5.3-Flash 用户**：注意长解码退化 bug；如果你在服务量化 GLM 模型并使用扩展推理，请监控输出是否出现重复/退化。
- **混合 Mamba 模型**：MTP + Prefix Caching 目前不可靠；在此修复上线前，建议为这类架构禁用 Prefix Caching。
- **AMD ROCm 用户**：重要的解码路径优化已合并；预计 MI300/MI350 系列的内存带宽压力将降低。
- **生产运维人员**：即将上线的在线调度器参数 PR 将支持在模型热加载的情况下调整并发上限和 token 预算——这对处理流量突增非常有价值。
- **多模态开发者**：ViT CUDA 图支持正在积极开发中；这将提升视觉语言模型的前缀吞吐量。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the English digest into Chinese. Let me carefully follow the rules:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate while maintaining the exact structure:

The title is: # SGLang Daily Digest — September 25, 2026

I'll translate this section by section, keeping the structure intact.</think>

# SGLang 每日简报 — 2025年9月25日

## 1. 今日要闻

今日有多个重要 PR 合并，主要聚焦于 DeepSeek-V4 模型重构和 FFN all-reduce 优化（#41191-#41200），同时新增了可配置请求日志保留功能（#41129）。一个值得关注的正确性 bug 被发现：Diffusion Qwen-Image-2.1 在 TP=2 时输出出现损坏，而惩罚计算在 overlap 调度器下出现回归（#41124），导致 frequency/presence 惩罚使用了过期的历史状态。

## 2. 发布与破坏性变更

今日无新版本发布。

## 3. 新模型与硬件支持

- **Lark 语法支持**：XGrammar 0.2.7 现已支持通过既定语法 API 接收 Lark 语法（[#39380](https://github.com/sgl-project/sglang/pull/39380)）
- **CausalLM 集合评分**：将扩展的 token pool 原语引入生成模型（[#41188](https://github.com/sgl-project/sglang/pull/41188)）
- **混合 Quark 量化**：修复了 amd/Qwen3.8-2.4T-A95B-Quark-MXFP4 的 MTP checkpoint 加载问题（[#39064](https://github.com/sgl-project/sglang/pull/39064)）
- **AMD GDN Prefill**：为 AMD gfx95 新增 FlyDSL GDN prefill 后端（[#39595](https://github.com/sgl-project/sglang/pull/39595)）

## 4. 性能与优化

- **DeepSeek FFN 重构系列**：多个 PR（#41193-#41200）重构了 FFN all-reduce 处理——将延迟归约贯穿各层，修复了复制式 TP1 共享专家中 dense reduce_scatterv 的重复计算问题，并启用了 scatter-mode 规划
- **Decode CUDA-Graph 回归**：triton 后端的填充 decode 槽位表现出上下文长度相关的开销（30K 上下文、batch size 5 时为 27.7 → 35.9 ms/token）（[#41151](https://github.com/sgl-project/sglang/issues/41151)）
- **LoRA 内核修复**：修复了 fused shared-expert LoRA 加载问题并防止了 expert ID 别名（[#41074](https://github.com/sgl-project/sglang/pull/41074)）
- **DeepGEMM MegaMoE**：DeepSeek-V4 的原生 FP8 共享专家融合（[#39296](https://github.com/sgl-project/sglang/pull/39296)）

## 5. 稳定性与回归

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | Diffusion Qwen-Image-2.1 TP=2 输出损坏，出现密集色斑（单 GPU 正常） | 待处理（[#41192](https://github.com/sgl-project/sglang/issues/41192)） |
| **高** | 惩罚在 overlap 调度器下使用滞后一步的历史（`output[:i-1]` 对比 `output[:i]`） | 待处理（[#41124](https://github.com/sgl-project/sglang/issues/41124)） |
| **中** | AMD aiter 统一注意力：Gemma 2/3 批量生成失控（GSM8K 0.57 vs triton 上的 0.83） | 待处理（[#41152](https://github.com/sgl-project/sglang/issues/41152)） |
| **中** | Mooncake DFlash draft KV 转写在 GLM-5.3-Flash 上非对称 P/D TP 失败 | 待处理（[#41038](https://github.com/sgl-project/sglang/issues/41038)） |
| **低** | Decode graph 宽度固定为 `--context-length` 而非实际 max_seq_len | 待处理（[#40441](https://github.com/sgl-project/sglang/issues/40441)） |

## 6. 这对应用开发者意味着什么

- **提示处理**：一项新功能请求（#41148）提议增量处理聊天提示，以避免每轮重新 tokenize 完整历史——对长时间运行的多轮聊天应用很有价值
- **日志管理**：请求日志保留时间现可配置（#41129），简化了长时运行部署的磁盘管理
- **调度器控制**：`set_internal_state` 现已暴露热调度器旋钮（#37661），支持运行时调整并发、队列限制和 prefill 预算
- **注意力后端**：若在 AMD ROCm 上使用 Gemma 2/3 批量生成，应避免 `SGLANG_USE_AITER_UNIFIED_ATTN=1`，因为存在正确性问题；目前需要使用 triton 后端
- **TP=2 Diffusion**：在 #41192 解决前，请避免 TP=2 部署扩散模型；单 GPU 或 TP>2 配置正常工作

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the llama.cpp digest from English to Chinese. I need to:
1. Translate all the content to Simplified Chinese
2. Keep all Markdown structure exactly as-is
3. Keep URLs, code references, issue numbers, etc. in their original form
4. Use natural technical Chinese register

Let me translate section by section while preserving the exact structure.</think>

# llama.cpp 动态 — 2026-09-25

## 今日要点

项目持续快速推进，多项后端优化和核心库改进值得关注。亮点包括重要的 GGML 同步（v0.25.3）、Metal 稀疏 Flash Attention 优化，以及正在进行的 `llama_batch_ext` 新 API 开发。社区正在积极修复 CUDA 稀疏 Attention 的性能回退问题，并解决量化目标上的投机解码正确性问题。

## 版本发布与重大变更

- **b11171**：GGML 同步 — 版本升至 **v0.25.3**，包含 `ggml_graph_nbytes` 的 ubsan 修复（[ggml#1644](https://github.com/ggml-org/ggml/pull/1644)）
- **b11163**：`llama_batch_ext` API 已添加 — 新的扩展批次结构用于改进批次处理；迁移正在进行中（[PR #29385](https://github.com/ggml-org/llama.cpp/pull/29385)）

## 新模型与硬件支持

- **Hexagon NPU**：在 `concat_2d` 中处理多序列（[b11170](https://github.com/ggml-org/llama.cpp/commit/b11170)）
- **Hexagon NPU**：动态量化器改进 — 修复 Q8_0 精度问题，所有动态量化路径使用 DMA（[b11168](https://github.com/ggml-org/llama.cpp/commit/b11168)）
- **Hexagon NPU**：支持 I32 CPY 和 CONT 操作（[b11167](https://github.com/ggml-org/llama.cpp/commit/b11167)）
- **CUDA**：`CONV_2D_DW` 深度卷积的 F16 内核支持（[b11166](https://github.com/ggml-org/llama.cpp/commit/b11166)）
- **Windows Arm64**：添加 Hexagon NPU 后端 CI 构建（[PR #29052](https://github.com/ggml-org/llama.cpp/pull/29052)）

## 性能与优化

- **Metal**：稀疏 Flash Attention 优化，通过共享内存缓存 — DeepSeek-V4-Flash-Vision-Exp 基准测试显示显著提升（[PR #29377](https://github.com/ggml-org/llama.cpp/pull/29377)）
- **CUDA**：RMS_NORM + SCALE 融合为单内核 — 修复 #28068 引入的约 4% prefill 性能回退（[PR #29393](https://github.com/ggml-org/llama.cpp/pull/29393)）
- **CPU (ggml-cpu)**：k-quants 的平铺乘法 — 使用 VNNI 提升 3-7 倍，且复杂度很低（[PR #27851](https://github.com/ggml-org/llama.cpp/pull/27851)）
- **CPU (ggml-cpu)**：Q4_K 重新打包 GEMM 的 AVX-512 VNNI+VBMI 路径，使用 `vpdpbusd`（[PR #29397](https://github.com/ggml-org/llama.cpp/pull/29397)）
- **Vulkan**：Intel FA 内核用于 prefill — 与 Intel 合作改进 prefill 性能（[PR #29357](https://github.com/ggml-org/llama.cpp/pull/29357)）
- **Vulkan**：当绑定为常量时复用描述符集 — 减少图记录的开销（[PR #29280](https://github.com/ggml-org/llama.cpp/pull/29280)）
- **Vulkan**：可选的设备保活，用于排查内存驱逐问题（[PR #29267](https://github.com/ggml-org/llama.cpp/pull/29267)）
- **OpenCL**：Adreno 的 Q5_K bin 内核（GEMM + GEMV）（[PR #29401](https://github.com/ggml-org/llama.cpp/pull/29401)）

**问题修复**：CUDA 稀疏 FA 解码 1.6 倍变慢（b11047→b11062）— 现已解决（[Issue #29281](https://github.com/ggml-org/llama.cpp/issues/29281)）

## 稳定性与回退问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | 投机解码在量化目标（Q4_K_M）上产生与普通解码不同的输出 — 贪心采样结果分歧 | 待解决 — [Issue #25618](https://github.com/ggml-org/llama.cpp/issues/25618) |
| **高** | Qwen3.8-27B 在上下文 >80K 时解码吞吐量下降约 25 倍 | 待解决 — [Issue #27623](https://github.com/ggml-org/llama.cpp/issues/27623) |
| **中** | Vulkan 提示词处理速度在 b10780 后严重下降（RDNA3） | 待解决 — [Issue #28752](https://github.com/ggml-org/llama.cpp/issues/28752) |
| **中** | HIP/ROCm 在 gfx1151 上对长于 n_ubatch 的提示词输出错误的 logits | 待解决 — [Issue #28211](https://github.com/ggml-org/llama.cpp/issues/28211) |
| **中** | Unified-KV 导致第二次长请求的提示词处理下降 42-54% | 待解决 — [Issue #28495](https://github.com/ggml-org/llama.cpp/issues/28495) |

**已修复**：AMD ROCm 多 GPU 段错误（[Issue #17583](https://github.com/ggml-org/llama.cpp/issues/17583) — 已关闭）

## 这对应用开发者的意义

1. **批次 API 迁移**：新的 `llama_batch_ext` 即将落地 — 如果你手动管理批次，预期会有 API 变更。服务器和投机解码路径正在迁移中（[PR #29385](https://github.com/ggml-org/llama.cpp/pull/29385)）。

2. **量化正确性**：如果在使用 Q4/Q5 量化的投机解码，需注意贪心采样下可能出现输出分歧 — 在 #25618 修复前，生产环境应避免使用量化草稿模型。

3. **长上下文工作负载**：Qwen3.8-27B 及类似混合架构在 >80K 上下文时显示显著解码吞吐量下降。部署长上下文模型时，请监控吞吐量是否出现骤降。

4. **Metal/Vulkan 用户**：最近的优化提升了 prefill 性能。请更新构建版本以获得 Intel FA 内核（Vulkan）和稀疏 FA 改进（Metal）的优势。

5. **CPU 推理**：新的 AVX-512 VNNI+VBMI 内核显著提升现代 Intel CPU 上的 Q4_K 性能 — 请确保你的构建包含这些指令。

6. **服务器嵌入**：无效的嵌入请求现在返回 HTTP 400 而非 500 — 简化了生产环境中的错误处理（[PR #29060](https://github.com/ggml-org/llama.cpp/pull/29060)）。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Simplified Chinese, following the detailed translation rules provided. Let me carefully translate each section while preserving the exact structure, formatting, and technical terminology.

Key rules to follow:
1. Only output the translation - no preamble, no explanation, no markdown fences
2. Preserve all Markdown structure exactly
3. Keep all technical terms, URLs, issue numbers, etc. as-is
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

## 1. Today's Highlights
- "The Ollama project shows active MLX backend development and bug fixes today" - Ollama 项目今日在 MLX 后端开发和缺陷修复方面非常活跃
- "Critical issues include..." - 关键问题包括...
- "On the positive side" - 正面消息是

## 2. Releases & Breaking Changes
- "Breaking Changes" - 重大变更
- "No new releases" - 24小时内无新版本发布
- "Deprecation" - 弃用

## 3. New Model & Hardware Support
- "New Model & Hardware Support" - 新模型与硬件支持

## 4. Performance & Optimization
- "Performance & Optimization" - 性能与优化

## 5. Stability & Regressions
- "Stability & Regressions" - 稳定性与回归问题

## 6. What This Means for Application Developers
- "What This Means for Application Developers" - 这对应用开发者意味着什么

Now let me do the full translation:</think>

# Ollama 速报 — 2026-09-25

## 1. 今日要闻

Ollama 项目今日在 MLX 后端开发和缺陷修复方面非常活跃。关键问题包括 **macOS GUI 在处理长文档时超过 60 秒后会静默失败**（M4 Pro MacBook，Sequoia 15.7.9）以及 **Windows 平台上 RTX 50 系列（Blackwell）显卡无法被 CUDA 识别**。正面消息是团队合并了 **GraniteForCausalLM MLX 支持**、**Gemma4 MoE 专家加载** 方面的改进，并上线了全新的 **System One 评分 API**。

---

## 2. 版本发布与重大变更

- **24 小时内无新版本发布**。
- **弃用**：`typical_p` 参数现改为记录警告而非直接拒绝请求（[#18627](https://github.com/ollama/ollama/pull/18627)）。

---

## 3. 新模型与硬件支持

| 功能 | 说明 | PR/Issue |
|------|------|----------|
| **GraniteForCausalLM** | MLX 后端新增稠密模型架构支持（Granite 4.1/4.2 系列） | [#17972](https://github.com/ollama/ollama/pull/17972) |
| **Gemma4 MoE Experts** | MLX 运行器现以 `mlx-lm` switch_GLU 布局加载 Gemma4 专家模型，修复了导入失败问题 | [#18631](https://github.com/ollama/ollama/pull/18631) |
| **AMD GPU (Windows)** | 文档扩展支持 Windows ROCm 下的 gfx1030、gfx1100–gfx1102、gfx1150–gfx1151、gfx1200–gfx1201 | [#18623](https://github.com/ollama/ollama/pull/18623) |
| **System 1 Models** | 新增 Kev 和 Laya 模型支持的功能请求 — 尚未实现 | [#18594](https://github.com/ollama/ollama/issues/18594) |

---

## 4. 性能与优化

| 领域 | 变更 | 详情 |
|------|------|------|
| **Windows-on-Arm CPU** | 编译器优化 | 设置 `GGML_CPU_ARM_ARCH` 以启用点积/矩阵指令，而非基准 armv8-a 配置 | [#17654](https://github.com/ollama/ollama/pull/17654) |
| **Gemma4 量化** | 修复包体积膨胀问题 | 稀疏 MoE 专家库现跳过 sensitive-projection 规则，避免跨层混合格式 | [#17976](https://github.com/ollama/ollama/pull/17976) |
| **MLX Nemotron** | Bug 修复 + 全局缩放 | 保留层名称别名，修复层数推断，稳定 MTP 量化，支持每专家 F32 缩放 | [#18614](https://github.com/ollama/ollama/pull/18614) |
| **MLX 拉取卡顿** | 恢复机制修复 | 下载卡顿时现可恢复；看门狗可中断卡顿的传输 | [#18625](https://github.com/ollama/ollama/pull/18625) |
| **Qwen3.5 解析** | 工具调用修复 | 工具调用现可在 thinking 通道完全关闭前打开 | [#18624](https://github.com/ollama/ollama/pull/18624) |
| **网页搜索** | 速率限制提升 | 每次响应限额从 3 次提升至 10 次（适用于 Responses 和 Anthropic） | [#18602](https://github.com/ollama/ollama/pull/18602) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 影响 | 状态 |
|----------|------|------|------|
| **高** | **macOS GUI 静默失败** — 聊天处理在 60.0 秒后无任何通知直接失败（M4 Pro MacBook，Ollama 0.34.0，Sequoia 15.7.9） | 用户在长时间运行的任务中丢失请求却无任何反馈 | 待解决 — [#18368](https://github.com/ollama/ollama/issues/18368) |
| **高** | **Windows CUDA 识别失败** — RTX 50 系列（Blackwell）显卡搭配 Driver 616.92 报告 0 B VRAM，回退至 CPU | Blackwell 硬件无法使用 GPU 加速 | 待解决 — [#18581](https://github.com/ollama/ollama/issues/18581) |
| **高** | **MLX nvfp4 卡死** — 持续单槽负载下请求卡在 `processed=total-1`；仅 SIGTERM 可恢复 | 并行持续负载会间歇性卡死 | 待解决 — [#18505](https://github.com/ollama/ollama/issues/18505) |
| **高** | **MLX 内存泄漏** — 工具调用在前缀缓存预算外泄漏约 0.43 GiB/请求（qwen3.6:27b-mlx） | 长会话中内存逐步膨胀 | 待解决 — [#18620](https://github.com/ollama/ollama/issues/18620) |
| **中** | **0.31.2 回归** — 视觉模型内存估算膨胀约 1.2 GiB，导致 7 倍降速（gemma4:31b 上 33.8 → 4.7 tok/s） | 自动更新后吞吐量显著下降 | 待解决 — [#17099](https://github.com/ollama/ollama/issues/17099) |
| **中** | **Gemma4 工具调用解析器** — 带空格的对象键未加引号；调用被静默丢弃 | 带空格参数的工具调用失败 | 待解决 — [#18390](https://github.com/ollama/ollama/issues/18390) |
| **中** | **qwen3.8 think 参数** — `"high"` 等值静默运行默认的 `"medium"` 而非失败或映射 | 思考控制不一致 | 待解决 — [#18632](https://github.com/ollama/ollama/issues/18632) |

---

## 6. 这对应用开发者意味着什么

1. **macOS 用户运行长文档时注意** — 超过约 60 秒的请求可能在 GUI 中静默失败。考虑使用 CLI 或 API 轮询来检测失败。

2. **Windows + RTX 50 系列用户注意** — GPU 加速目前不可用。请关注修复或使用 CPU 推理作为后备方案。

3. **使用工具调用的 MLX 用户注意** — 每次请求约 0.43 GiB 的泄漏意味着长时运行的智能体会话会累积内存。考虑定期重启服务或等待修复。

4. **基于 qwen3.8 构建智能体时注意** — `think` 参数对未记录的值会静默默认为 `"medium"`。请使用文档中的值：`[false, "low", "medium", "xhigh"]`，或使用字符串 `"xhigh"` 来获得最大思考深度。

5. **新 API 能力** — 全新的 `POST /v1/systemone` 端点提供基于 Nimble 模型的结构化决策能力 — 可用于智能体路由逻辑。

6. **API 错误处理** — 401（需要认证）和 403（访问被禁用）现已纳入文档。如果你的代码依赖这些状态码，请更新错误处理逻辑。

---

*数据来源：GitHub — ollama/ollama | 2026-09-25*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM digest from English to Chinese. I need to:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references as-is
4. Keep project names, repository slugs, technical terms in their original form
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while maintaining the structure.</think>

# LiteLLM 每日简报 — 2026-09-25

## 1. 今日要闻

项目继续保持快速迭代节奏，多个 PR 解决特定提供商的边界情况和代理可靠性问题。今天的主题包括：(1) 修复流式响应中 `service_tier` 传播问题，确保计费准确；(2) 在 spend 日志中新增 Anthropic OAuth token 追踪，便于审计；(3) 多个修复解决预算执行和速率限制的绕过漏洞。

## 2. 发布与破坏性变更

- **近期无新版本**。
- **潜在破坏性变更**：Vertex AI 修复（[#43079](https://github.com/BerriAI/litellm/pull/43079)）从 Gemma/Llama 路由中移除了 OpenAI 专用参数 — 若现有部署依赖这些参数被转发，可能需要调整。

## 3. 新模型与硬件支持

- **新增 Sail 提供商** — PR [#42840](https://github.com/BerriAI/litellm/pull/42840) 将 Sail 注册为新的 OpenAI 兼容提供商，支持 12 个模型，覆盖 chat、streaming、responses 和 Anthropic messages，采用分时段窗口定价。
- **Fireworks DeepSeek V4.1 Flash（仅美国）** — 成本映射行在 [#43097](https://github.com/BerriAI/litellm/pull/43097) 中添加。
- **Gemini 价格同步** — PR [#43091](https://github.com/BerriAI/litellm/pull/43091) 更新了 Gemini priority、flex 和视频 token 价格，来自官方定价页面。

## 4. 性能与优化

- **流式 `service_tier` 修复** — PR [#42870](https://github.com/BerriAI/litellm/pull/42870) 在流式响应块和 spend 行中保留服务的 `service_tier`，修复了静默的计费不准确问题。
- **Prometheus `/metrics` 修复** — PR [#30082](https://github.com/BerriAI/litellm/pull/30082) 消除了尾随斜杠的 307 重定向，避免不跟随重定向的 scraper 静默丢失指标。
- **类型系统重构** — PR [#42843](https://github.com/BerriAI/litellm/pull/42843) 将手动维护的 LiteLLM kwargs 字符串列表转换为类型化对象，降低参数泄露给提供商的风险。

## 5. 稳定性与回归问题

| 严重程度 | 问题 | PR/修复 |
|----------|------|---------|
| **高** | v1.82.3 中 key/user `max_budget` 的预算执行被绕过 | [#26672](https://github.com/BerriAI/litellm/issues/26672) — 进行中，19 条评论 |
| **高** | 每个客户的 RPM 限制在虚拟 key 缓存后停止生效 | [#39713](https://github.com/BerriAI/litellm/issues/39713) — 进行中，8 条评论 |
| **中** | MCP oauth2 token 交换失败，即使上游返回有效 token 也报通用错误 | [#42477](https://github.com/BerriAI/litellm/issues/42477) — 进行中，8 条评论 |
| **中** | 预算重置任务在 `budget_duration=null` 且 `budget_reset_at` 过期时静默将 spend 永久清零 | [#39370](https://github.com/BerriAI/litellm/issues/39370) — 进行中 |
| **中** | Vertex AI Gemma 容器错误被掩盖为 200 响应 | [#43075](https://github.com/BerriAI/litellm/pull/43075) — 进行中 |
| **低** | Helm charts 依赖 Redis/PostgreSQL 版本过旧导致启动失败 | [#26169](https://github.com/BerriAI/litellm/issues/26169) — 进行中 |

**已关闭**：多个过期 issues 今天被关闭，包括 Cloudflare Workers AI API 错误（[#24065](https://github.com/BerriAI/litellm/issues/24065)）、版本端点功能（[#24109](https://github.com/BerriAI/litellm/issues/24109)）和会话撤销安全问题（[#35665](https://github.com/BerriAI/litellm/issues/35665)）。

## 6. 对应用开发者的影响

- **如果你使用流式响应**：`service_tier` 修复确保计费金额与实际使用量一致 — 请检查你的 spend 日志是否有历史偏差。
- **如果你使用第三方代理的 Anthropic**：Bug [#42172](https://github.com/BerriAI/litellm/issues/42172) 报告了使用自定义 `api_base` 时的 OAuth token 混淆问题；可能影响使用 Claude Code 转发的部署。
- **如果你使用团队成员预算**：PR [#42665](https://github.com/BerriAI/litellm/pull/42665) 在配置的预算百分比时发送邮件提醒 — 可以在硬限制触发前主动通知。
- **如果你使用基于标签的速率限制**：TPM/RPM 限制现在在请求时执行（[#41807](https://github.com/BerriAI/litellm/pull/41807)）；请验证你的配置。
- **如果你通过 Vertex Model Garden 路由**：Claude Code → Gemma 路径现在正确拒绝不支持的参数（[#43079](https://github.com/BerriAI/litellm/pull/43079)），减少不明原因的 400 错误。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the GitHub digest into Simplified Chinese, following the detailed translation guidelines provided. Let me go through each section carefully.

Key points to remember:
1. Output ONLY the translation, no preamble or explanation
2. Keep all Markdown structure exactly as-is
3. Keep technical terms, URLs, code references, PR/Issue numbers as-is
4. Use natural technical Chinese, the register of a Chinese developer newsletter
5. Translate headings
6. Keep emojis
7. Maintain table structure and alignment
8. Be careful with English terms that are commonly used in Chinese tech context

Let me translate section by section:

## 1. Today's Highlights

The Unsloth team is advancing multi-backend inference capabilities: PR #11491 introduces opt-in **vLLM and SGLang support** with multi-GPU inference, quantization, and vision. On the AMD front, ROCm 10 compatibility is actively being addressed with requests for broader card support (#9932) and fixes for ROCm 7.14 detection issues (#10657). The Qwen-Image-2.1 pipeline is receiving significant hardening, with fixes for double-download behavior (#11637), VAE decode hangs on AMD (#11636), and int8 accuracy improvements via Hadamard rotation (#11835).

Let me translate:
- "The Unsloth team is advancing multi-backend inference capabilities" - Unsloth 团队正在推进多后端推理能力
- "opt-in" - 可选启用
- "multi-GPU inference" - 多 GPU 推理
- "vision" - 视觉/多模态
- "ROCm 10 compatibility" - ROCm 10 兼容性
- "actively being addressed" - 正在积极处理
- "hardening" - 加固/稳定性改进


- "double-download behavior" - 重复下载问题

Unsloth 团队正在推进多后端推理能力：PR #11491 引入了可选启用的 **vLLM 和 SGLang 支持**，支持多 GPU 推理、量化和视觉模型。在 AMD 方面，ROCm 10 兼容性正在积极处理中，包括更广泛显卡支持的需求 (#9932) 和 ROCm 7.14 检测问题的修复 (#10657)。Qwen-Image-2.1 管道正在接受重大改进，包括重复下载行为的修复 (#11637)，以及针对 AMD 平台上 VAE 解码卡顿的修复 (#11636)。

接下来是关于精度优化的内容——通过 Hadamard 旋转提升了 int8 精度 (#11835)。

---

## 2. Releases & Breaking Changes

未检测到过去 24 小时内的版本发布。

---

## 3. New Model & Hardware Support

| 领域 | 项目 | 详情 | PR/Issue |
|------|------|---------|----------|
| **推理引擎** | vLLM & SGLang | 可选后端，支持多 GPU、量化、文本/图像聊天、并发 API | #11491 |
| **硬件** | AMD Ryzen AI NPU | 通过 Lemonade + FastFlowLM 在 XDNA 2 (Strix Halo/Point) 上支持聊天，Windows 和 Linux 均可 | #11743 |
| **硬件** | AMD ROCm 10 | 需要 ROCm 7.14 + 版本选择器支持 | #9932 |
| **模型** |

| **模型** | Kimi-K3 | MXFP4 专家训练，支持打包专家和即时解量化 | #11750 |
| **模型** | Qwen-Image-2.1 | GGUF 管道现已在下载前验证 FP8 检查点仓库 | #11829 |

---

## 4. Performance & Optimization

| 领域 | 变更 | 影响 |
|------|--------|--------|
| **NVFP4 Image DiT** | 每层 NVFP4 策略 + FlashInfer `mm_fp4` 后端 (#10730, #10731) | 在 NVIDIA B200 上加快图像生成速度 |
| **FlashInfer 安装** | 按需安装 NVFP4 而无需移动 torch (#11730) | 用户友好的可选快速路径 |
| **VAE 解码** | 基于 NVFP4 时间预算的编译路径 (#10889) | 降低解码延迟 |
| **Qwen-Image-2.1 Int8** | Hadamard 旋转以匹配 bf16 精度 (#11835) | LPIPS 从 0.066 提升至可接受范围 |
| **编译缓存** | 预热启动时停止重写，限制磁盘占用 (#11874) | 启动更快，减少磁盘 I/O |
| **模型扫描** | 缺失模型请求时停止重复扫描每个文件夹 (#11872) | 避免每次请求 17 秒扫描 |
| **视频精度** | 自动精度在 bf16 DiT 适用时保留驻留 bf16 (#11831) | 避免不必要的量化 |
| **Flash Attention 构建** | flash-attn 轮子并行 ccache 任务 (#11812) | 将 6-8 小时构建时间缩短至可行范围 |

---

## 5. Stability & Regressions

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **严重** | AMD: ROCm gfx103X/gfx110X/gfx908/gax90a 在 torch 2.10.0+rocm7.13.0 上卡死，`import unsloth` 因 `_grouped_mm` 访问冲突崩溃 | #11814 — 待处理 |
| **严重** | AMD: GGUF 导出将模型分割到不支持的 iGPU 上，导出失败并显示"无效内核文件" | #1

1870 — 待处理 |
| **高** | Qwen-Image-2.1: VAE 解码在 AMD ROCm 上挂起 10-23 分钟，驱动重置/崩溃 | #11636 — 待处理 |
| **高** | RX 5700XT (RDNA1) 在 Unsloth Desktop 中无法识别 | #8529 — 待处理，12 条评论 |
| **中** | Qwen-Image-2.1: 下载 GGUF (4.2GB)，然后在运行时重新下载 19GB"必需资源" | #11637 — 待处理 |
| **中** | AMD iGPU 报告的 VRAM 数值虚高 | #8942 — 待处理 |
| **中** | 导出为 GGUF 因只读 HF 缓存权限失败 | #11785 — 待处理 |
| **中** | UI: 最大化窗口底部条忽略点击 (Windows) | #11734 — 已关闭 |
| **低** | Thinking UI 文字渲染在 30/60 FPS 下卡顿 | #11778 — 待处理 |
| **低** | 流式响应中出现"流式下载不完整链接" | #11848 — 待处理 |

---

## 6. What This Means for Application Developers

**对于在 Unsloth Studio 上构建应用的开发者：**
- **多后端推理即将到来**：vLLM 和 SGLang 将作为默认引擎的可选替代方案提供，支持多 GPU 设置和量化——如果您需要特定的服务器特性或 CUDA 图优化，这会很有用。
- **AMD NPU 支持是一个垫脚石**：通过 FastFlowLM 在 Ryzen AI NPU 上进行聊天表明 Unsloth 正在将支持扩展到离散 GPU 之外的集成 AI 硬件。
- **Qwen-Image-2.1 正在趋于稳定**：已知存在重复下载问题 (#11637) 和 VAE 解码挂起 (#11636)——如果您使用此模型，请关注即将发布的修复。
- **关注 ROCm 兼容性**：如果您使用 AMD ROCm 7.14，安装程序仍然默认为 PyTorch 2.11 + ROCm 7.2 (#10657)。在修复前请考虑手动检查环境。

**对于基础设施工程师：**
- 编译缓存优化 (#11874) 减少了预热启动延迟——这与无服务器或临时推理设置相关。
- 模型文件夹扫描优化 (#11872) 在使用缺失模型的 OpenAI 自动切换时每次请求节省 17 秒——对于高吞吐量 API 网关来说意义重大。

---

*数据来源：github.com/unslothai/unsloth — Issue #8529 至 #11873，PR #6297 至 #11874*</think>



</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*