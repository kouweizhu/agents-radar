# AI 基础设施日报 2026-10-22

> 生成时间: 2026-10-22 00:50 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this entire cross-project comparison report into Chinese, following the specific rules provided. Let me carefully translate while:

1. Preserving ALL markdown structure (headings, tables, lists, etc.)
2. Keeping technical terms, project names, version numbers, issue numbers as-is
3. Using natural technical Chinese register
4. Not adding any preamble or explanation
5. Not using markdown code fences around the output

Let me go through this systematically:

The content has:
- Main heading
- 6 sections with sub-sections
- Multiple tables
- Lists
- Trend signals with numbered items

I'll translate each section while maintaining the structure.</think>

# 跨项目对比报告 — AI 基础设施 Digest

---

## 1. 生态系统概览

今日活动表明 AI serving 生态系统正在走向成熟，各项目定位清晰：**vLLM 和 SGLang** 争夺高性能推理引擎层，均瞄准 disaggregated prefill-decode 和多 GPU 优化；**llama.cpp** 通过新增模型支持和后端多样化扩展其本地/离线推理的领先地位；**Ollama** 借助 MLX 加速和 macOS 集成简化本地部署；**LiteLLM** 作为网关/编排层提供入口（尽管遭遇安全事件）；**Unsloth** 则占据微调层，提供训练优化和决策模型支持。业界对 Blackwell（SM120）、AMD ROCm（gfx950）和多主机部署的集体关注，显示出向生产级分布式推理推进的趋势。

---

## 2. 活动对比

| 项目 | Issues（24h） | PRs（24h） | Releases（24h） | 显著趋势 |
|---------|---------------|-----------|----------------|---------------|
| **vLLM** | 11（最多 116 条评论） | 9 | 0 | 重点投入 ROCm/AMD，Blackwell 回归 |
| **SGLang** | 9（350 条评论 — CUDA 崩溃追踪） | 15+ | 0 | Blackwell PCIe 优化活跃 |
| **llama.cpp** | 10（最多 24 条评论） | 10+ | 0（7 次提交） | 模型扩展（Flint、 SenseNova），后端多样化 |
| **Ollama** | 7（54 条评论 — 云端失败） | 7 | 1（v0.40.8） | 工具调用稳定性问题，MLX 改进 |
| **LiteLLM** | 9（严重安全） | 10+ | 4（安全重点） | 安全事件，新提供商激增 |
| **Unsloth** | 8（高危 bug） | 15+ | 0 | 决策模型内存、MLX 聊天、GIF 导出 |

**观察：** 各项目均保持高速迭代。vLLM 和 SGLang 的 PR 数量领先，反映推理引擎领域的竞争态势。LiteLLM 的多版本发布旨在应对安全问题；Unsloth 的 PR 数量表明微调功能开发活跃。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------|------|--------|-----------|--------|---------|
| **DeepSeek-V4 / V4.1** | ✅（Flash + PD disagg） | ✅（TRTLLM-Gen） | — | — | — |
| **Qwen3.8-Flash-Next** | ⚠️（回归） | ⚠️（gfx950 工作中） | — | — | — |
| **Muse Spark Open** | ✅（ROCm） | — | — | — | — |
| **Step-5-Preview** | ✅（ROCm） | — | — | — | — |
| **Flint（代码）** | — | — | ✅ | ✅（v0.40.8） | — |
| **SenseNova U1** | — | — | ✅ | — | — |
| **GigaChat 3.5（MoE）** | — | — | ✅ | — | — |
| **Apple Foundation Models** | — | — | — | ✅ | — |
| **D3（决策）** | — | — | — | ✅（MLX） | ✅ |
| **GLM-5.3-Flash** | — | ⚠️（SM120 崩溃） | — | — | — |
| **Gemma 4** | — | — | — | ⚠️（工具解析） | — |
| **MOSS-Image** | — | — | — | — | ✅ |

**领先者：**

- **多 GPU 分布式推理**：vLLM 和 SGLang 凭借 PD disaggregation、张量并行和 Blackwell 优化领先
- **本地/CPU/边缘**：llama.cpp 后端覆盖最广（Vulkan、SYCL、OpenCL、CPU）
- **开发者易用性**：Ollama 在本地 macOS/Apple Silicon + MLX 方面领先
- **网关/编排**：LiteLLM 独占代理层
- **微调/训练**：Unsloth 以决策模型和训练优化占据该层级

---

## 4. 性能前沿

| 优化领域 | 活跃项目 | 重点方向 |
|---------------------|------------------|-----------|
| **KV Cache / Attention** | vLLM、SGLang、llama.cpp | 从后端提取 KV（vLLM #32335）、FlashInfer NVFP4（vLLM、SGLang）、QSA 融合算子（llama.cpp） |
| **量化** | 全部 | MXFP4（vLLM、SGLang）、NVFP4（vLLM、SGLang）、Q8 SYCL（llama.cpp）、DFlash2（Ollama、Unsloth） |
| **多 GPU / 分布式** | vLLG、SGLang、Unsloth | Blackwell PCIe all-reduce（SGLang）、张量并行（vLLM、Unsloth）、Mooncake RDMA（SGLang） |
| **内存管理** | vLLM、SGLang、Ollama、Unsloth | 决策模型卸载（Unsloth）、embedding 内存 host/disk 卸载（Unsloth）、模型驱逐（Ollama） |
| **MLX / Apple Silicon** | Ollama、Unsloth | 并发生成（Ollama #19197）、聊天历史缓存（Unsloth #14574）、逐层 embedding（Unsloth） |
| **批处理 / 调度** | vLLM、SGLang | PD disaggregation 路由（SGLang #35036）、block compile（Unsloth #14063 — 回归） |
| **内核融合** | llama.cpp、SGLang、Unsloth | QSA mask（llama.cpp）、FLUX RoPE 融合（Unsloth）、CFG batching（Unsloth） |

**前沿所在：**

- **Disaggregated serving**（prefill/decode 分离）是当前性能争夺焦点 — vLLM 和 SGLang 都在大力推进
- **Blackwell（SM120）** 优化尚处早期 — 多项回归：NVFP4 1.7-1.8x 减速（vLLM）、fa4 CUDA-graph 崩溃（SGLang）、PCIe 优化仍在实验阶段（SGLang #32479）
- **决策模型** 作为新 workload 类型涌现 — Unsloth、Ollama、LiteLLM 都在增加支持
- **本地/移动端推理** 方面，llama.cpp 扩展 OpenCL/Adreno 支持，Ollama/Unsloth 推进 MLX

---

## 5. 分层定位

| 层级 | 项目 | 目标用户 |
|-------|----------|-------------|
| **训练 / 微调** | **Unsloth** | 微调基础模型的开发者 |
| **本地运行时** | **llama.cpp**、**Ollama**、**Unsloth** | 本地/离线运行模型的用户 |
| **Serving 引擎** | **vLLM**、**SGLang** | 生产推理集群、多 GPU/多节点 |
| **网关 / 代理** | **LiteLLM** | API 抽象、多提供商路由 |
| **Agent 框架** | （LiteLLM 通过 tool calling） | LLM 编排 |

**关键差异：**

- **vLLM vs SGLang**：均面向生产推理，但 SGLang 侧重高级调度（PD disagg、Mooncake），vLLM 强调硬件支持广度（FlashAttention、FlashInfer、Aiter）
- **llama.cpp vs Ollama**：llama.cpp 是面向嵌入的库/运行时；Ollama 则在其基础上提供面向消费者的 UX 和云端同步
- **Unsloth**：位于更高层级 — 训练模型供 vLLM/SGLang/llama.cpp 推理使用

---

## 6. 趋势信号

### 今日活动折射的行业趋势

1. **Disaggregated PD Serving 进入主流**
   - vLLM（#32335）、SGLang（#35036、#45221）、Ollama 都在推进 prefill-decode 分离
   - 支持对计算密集的 prefill 和延迟敏感的 decode 独立扩展

2. **Blackwell 部署复杂性凸显**
   - 多项回归：NVFP4 1.7-1.8x 减速（vLLM）、fa4 CUDA-graph 崩溃（SGLang）、PCIe 优化仍处实验阶段（SGLang #32479）
   - 复杂 workload 生产级 Blackwell 就绪仍需 6-12 个月

3. **AMD ROCm 获得更多关注**
   - vLLM、SGLang、llama.cpp 都在发布 AMD 优化（gfx950/MI355X、MI350X）
   - 后 Nvidia 出口管制时代，跨vendor 推理多样化加速

4. **决策模型作为新 workload 类型涌现**
   - Ollama（D3）、Unsloth（决策模型卸载）、LiteLLM（Nadir Decisions 提供商）
   - Agentic 用例推动对快速单 token 决策 vs 长生成的需求

5. **开源项目安全事件**
   - LiteLLM v1.107.0 被篡改（凭据窃取）暴露供应链风险
   - Cosign 镜像签名现已在 LiteLLM 全版本部署

6. **工具调用稳定性仍是难题**
   - Ollama：Qwen3.8、Gemma4、Qwen3.5 工具解析失败
   - SGLang：函数调用重扫描优化（#45143）解决 O(n²) 问题
   - 生产 agent 系统面临脆弱的工具使用可靠性

### Agent / 应用开发者应关注的方向

- **推理引擎选择**：多 GPU 场景倾向 vLLM 或 SGLang；本地 Apple Silicon 选 Ollama 或 Unsloth；追求最大可移植性选 llama.cpp
- **工具调用**：与 Qwen3 和 Gemma4 变体充分测试；预计偶发 500 错误；准备备用模型
- **Blackwell**：稳定 vLLM/SGLang 支持需等待 6 个月以上，除非使用 Ampere/Hopper
- **安全**：锁定 LiteLLM 版本；验证 Docker 签名；避免 latest 标签
- **决策模型**：Unsloth + LiteLLM 路由正成为 agentic 基础设施栈
- **多提供商**：LiteLLM 新提供商（Engy、Bitdeer、Foundry）提供 JSON 配置替代 OpenAI — 关注生产就绪状态

---

*跨项目综合报告 — 2026-10-22*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate this vLLM digest into Chinese, following specific rules:
- Output ONLY the translation
- Preserve the Markdown structure exactly (headings, tables, lists, bold/italic, etc.)
- Keep URLs, issue/PR references, technical terms as-is
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate while preserving the structure:</think>

# vLLM 速报 — 2026-10-22

## 1. 今日要闻

vLLM 项目正在推进多 GPU 和多后端支持，ROCm 方面有重要进展，包括新模型支持（Muse Spark Open、Step-5-Preview）以及针对 AMD gfx950/MI355X 的性能优化。报告了一个影响 Qwen3.8-Flash-Next 长提示词的严重 bug，Blackwell 硬件上存在性能回退。

---

## 2. 发布与破坏性变更

| 项目 | 描述 |
|------|-------------|
| **无发布** | 过去 24 小时内无版本发布 |

---

## 3. 新模型与硬件支持

| 特性 | 详情 | PR/Issue |
|---------|---------|----------|
| **ROCm 上的 Muse Spark Open** | AMD 上支持 `amd/Muse-Spark-Open-816B-A42B-Quark-MXFP4`，适配 MI350X | [#62622](https://github.com/vllm-project/vllm/pull/62622) |
| **ROCm 上的 Step-5-Preview** | stepfun-ai/Step-5-Preview 的 ROCm 移植，使用 Triton 内核实现压缩稀疏注意力 | [#61837](https://github.com/vllm-project/vllm/pull/61837) |
| **ROCm 上 Qwen4Exp fp8 KV 缓存** | 在 AMD QSA 路径上启用 `--kv-cache-dtype fp8` 和 `--attention-config.indexer_kv_dtype fp8` | [#61529](https://github.com/vllm-project/vllm/pull/61529) |
| **DeepSeek-V4-Flash SM8x 支持** | 请求 Ampere (A100/A800, RTX 30xx) 支持 — 当前受阻 | [#50576](https://github.com/vllm-project/vllm/issues/50576) |
| **Dory 模型支持** | 新增 NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16 | [#60149](https://github.com/vllm-project/vllm/pull/60149) |

---

## 4. 性能与优化

| 领域 | 变更 | 参考 |
|------|--------|-----------|
| **AMD gfx950/MI355X** | Qwen3.8-2.4T-A95B 性能优化跟踪 | [#57149](https://github.com/vllm-project/vllm/issues/57149) |
| **AMD gfx950/MI355X** | Qwen3.8-Flash-Next（GatedDeltaNet, MXFP4 MoE）优化 | [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **ROCm 构建** | 三个构建时 PR (#62716, #62717, #62718) 的组合演示 | [#62921](https://github.com/vllm-project/vllm/pull/62921) |
| **KV-Cache 提取** | 从所有注意力后端提取 KV-Cache 更新（FlashAttention ✓, FlashInfer ✓, AiterFlashAttention 进行中） | [#32335](https://github.com/vllm-project/vllm/issues/32335) |
| **Torch.compile** | 在 JIT 和 AOT 路径之间共享编译缓存哈希辅助函数 | [#62628](https://github.com/vllm-project/vllm/pull/62628) |
| **Tensor descriptor** | 将 TD 构建从统一注意力内核中提出 | [#51506](https://github.com/vllm-project/vllm/pull/51506) |

---

## 5. 稳定性与回退

| 严重程度 | 问题 | 影响 | 状态 |
|----------|-------|--------|--------|
| **高** | **Qwen3.8-Flash-Next 提示词截断 bug** — 超过约 2048 token 的提示词在 GB10 (DGX Spark) 上对模型不可见 | 长提示词被静默忽略；模型响应仿佛在 2K 处截断 | 待处理 — [#62776](https://github.com/vllm-project/vllm/issues/62776) |
| **高** | **Nemotron-3.5-Lightning NVFP4 decode 回退** — 自 v0.29.0 以来在 DGX Spark (GB10/SM121) 上慢约 16% | 推理延迟增加 | 待处理 — [#59770](https://github.com/vllm-project/vllm/issues/59770) |
| **高** | **混合注意力 + Mamba 块大小不兼容** — B12X 后端拒绝来自混合页面对齐的 2176 块大小 | 无法在 v0.32.0 上用 B12X 提供混合模型 | 待处理 — [#62320](https://github.com/vllm-project/vllm/issues/62320) |
| **中** | **FlashInfer NVFP4 prefill 回退** — 在 SM120 (Blackwell) 上比 FP8 慢 1.7-1.8 倍 | Prefill 吞吐量下降 | 待处理 — [#50416](https://github.com/vllm-project/vllm/issues/50416) |
| **中** | **RDNA 上混合 Mamba decode 崩溃** — Triton 分页注意力回退在长上下文上导致 RDNA GPU decode 失败 | 通过 #45916 split-KV decode 内核在上游修复 | 已修复 — [#50264](https://github.com/vllm-project/vllm/issues/50264) |
| **中** | **Mooncake 代理 HTTP 200 过早返回** — 代理在 decode 失败前就提交成功 | 过早响应处理 | 待处理 — [#62559](https://github.com/vllm-project/vllm/issues/62559) |
| **中** | **GDN chunk 路径 fp16 溢出** — fp32 SSM 缓存进行 prefill 时溢出 | 大状态下的错误输出 | 待处理 — [#62116](https://github.com/vllm-project/vllm/issues/62116) |
| **中** | **CPU 后端 LoRA bug** — 非 LoRA 请求与 LoRA 请求混合时静默应用了适配器 | 错误输出 | 待处理 — [#62225](https://github.com/vllm-project/vllm/issues/62225) |
| **中** | **SharedOffloadRegion 多节点挂起** — 基于 mmap 的 KV offload 跨节点失败 | 多节点引擎启动超时 | 待处理 — [#54415](https://github.com/vllm-project/vllm/issues/54415) |
| **中** | **RoutedExperts 权重重建** — 每次调用都重新索引专家映射（Qwen3.5-35B-A3B 上约 50s） | 启动延迟 | 待处理 — [#62768](https://github.com/vllm-project/vllm/issues/62768) |
| **中** | **DP > 1 + MoE 专家 LoRA bug** — 每个 DP 副本将对所有副本的 token 应用其自身的 LoRA 状态 | 错误的专家增量 | 待处理 — [#61453](https://github.com/vllm-project/vllm/issues/61453) |

---

## 6. 这对应用开发者意味着什么

- **Blackwell 硬件用户注意**：NVFP4 decode 回退和提示词截断问题影响使用最新版 vLLM 的 DGX Spark (GB10/SM121)。如果运行 Qwen3.8-Flash-Next 或 Nemotron-3.5-Lightning，考虑停留在 v0.28.0 或等待修复。
- **AMD ROCm 用户**：重要进展 — Muse Spark Open 和 Step-5-Preview 现已支持 ROCm，Qwen4Exp 的 fp8 KV 缓存也已启用。gfx950/MI355X 优化正在进行中。
- **多节点部署**：共享 mmap CPU offload 问题（#54415）会导致多节点设置挂起 — 在 `--nnodes > 1` 时避免使用 `SharedOffloadRegion`，直到问题修复。
- **混合模型**：使用注意力 + Mamba 混合模型时，B12X 后端不兼容问题（#62320）会阻塞 v0.32.0 — 考虑使用其他后端或停留在 v0.31.x。
- **结构化输出 + 投机解码**：新 RFC（#62818）解决了该组合下保持输出分布的问题 — 对同时使用这两个特性的应用有影响。
- **Beam search 用户**：分数归一化 bug 修复（#62928）已合入 — beam search 现在仅按生成长度除以，与 Transformers 行为一致。

---

*数据来源：vllm-project/vllm GitHub — 2026-10-22*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang digest into Chinese. I need to:
1. Translate all the content while keeping the Markdown structure exactly
2. Keep URLs, issue/PR numbers, code identifiers, etc. as-is
3. Use natural technical Chinese suitable for a developer newsletter
4. No preamble or explanation - just the translation

Let me translate section by section while preserving all formatting:

- Title: SGLang Digest — 2026-10-22 → SGLang 每日简报 — 2026-10-22
- Today's Highlights → 今日要点
- Releases & Breaking Changes → 版本更新与重大变更
- New Model & Hardware Support → 新模型与硬件支持
- Performance & Optimization → 性能与优化
- Stability & Regressions → 稳定性与回归问题
- What This Means for Application Developers → 这对应用开发者意味着什么

Let me translate the full content:</think>

# SGLang 每日简报 — 2026-10-22

## 今日要点

SGLang 开发持续聚焦多主机部署的健壮性和硬件特定优化。Blackwell (SM120) PCIe 张量并行和 AMD ROCm 解聚方面的活动值得关注，同时 Q4 的 PD（预填充-解码）解聚路线图正在扩展模型家族支持。

## 版本更新与重大变更

过去 24 小时内无版本发布。

## 新模型与硬件支持

- **Blackwell PCIe All-Reduce 优化** — PR [#32479](https://github.com/sgl-project/sglang/pull/32479) 为 SM120/SM121（RTX PRO 6000、RTX 6000D、RTX 50 系列、GB10）无 NVLink 配置添加了可选的 b12x PCIe all-reduce（一次性传输 + 融合 RMSNorm + FP8 DMA ring），解决了解码延迟和长提示预填充的瓶颈。

- **AMD gfx950 / MI355X 性能** — Issue [#44304](https://github.com/sgl-project/sglang/issues/44304) 追踪 Qwen3.8-Flash-Next 在 AMD MI355X 上的优化；PR [#45691](https://github.com/sgl-project/sglang/pull/45691) 修复了 AMD 解聚 CI 中 Mooncake RDMA 注册问题。

- **GLM-5.3-Flash on Hopper** — Issue [#45373](https://github.com/sgl-project/sglang/issues/45373) 追踪 Hopper (SM90) 性能工作；Issue [#42012](https://github.com/sgl-project/sglang/issues/42012) 记录了 fa4 注意力后端在 SM120 (RTX PRO 6000) 上 CUDA-graph 捕获期间崩溃的问题——Triton 后端是临时解决方案。

- **4× SM120 上的 DeepSeek-V4.1 Flash** — Issue [#44445](https://github.com/sgl-project/sglang/issues/44445) 报告了在 4 张 PCIe SM120 卡（各 83 GiB）上成功运行 1M 上下文 + DSpark 服务的案例，包含设置说明。

## 性能与优化

- **DSv4 TRTLLM-Gen 注意力** — PR [#36652](https://github.com/sgl-project/sglang/pull/36652) 提升了准确性和性能；PR [#45221](https://github.com/sgl-project/sglang/pull/45221) 为该后端启用了 PD 解聚支持。

- **DSv41 Mega-mHC MXFP8 优化** — PR [#45632](https://github.com/sgl-project/sglang/pull/45632) 通过让 Mega-mHC 和 wo_a einsum 直接写入 MXFP8，消除了单独的量化内核，用于 wqkv_a 和 wo_b。

- **DSA TileLang Sparse Decode** — PR [#45274](https://github.com/sgl-project/sglang/pull/45274) 将 TileLang FP8稀疏解码扩展为支持任意瓦片数除数（不仅是二等分），提升了 GLM-5.3-Flash 的利用率。

- **KDA Verify Kernel SM90 支持** — PR [#44612](https://github.com/sgl-project/sglang/pull/44612) 将 CuTe DSL MTP 验证内核扩展到 Hopper (SM90)，启用了 nv_cutedsl 后端。

- **Function Call Rescan 优化** — PR [#45143](https://github.com/sgl-project/sglang/pull/45143) 停止对未关闭的 GLM 工具调用逐块重新扫描，将 O(n²) 降低到 O(n)，适用于长参数场景。

- **PD 解聚路由** — PR [#35036](https://github.com/sgl-project/sglang/pull/35036) 修复了等 TP 碎片化 KV 传输带宽下降问题，通过中转路由解决。

- **HiCache 空指针修复** — PR [#40565](https://github.com/sgl-project/sglang/pull/40565) 对 Mooncake 主机分配器返回的空指针添加了快速失败检查。

- **AMD HIP 导入修复** — PR [#45676](https://github.com/sgl-project/sglang/pull/45676) 修正了 smallm_fp8_blockscale_gfx950 中的 HIP 启动辅助函数导入。

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | [#42012](https://github.com/sgl-project/sglang/issues/42012) — GLM-5.3-Flash fa4 在 SM120 CUDA-graph 捕获时崩溃 | 待解决；Triton 后端可用 |
| **高** | [#45345](https://github.com/sgl-project/sglang/issues/45345) — GB300 上 32 tokenizer workers + cuda_vmm 启动 OOM | 待解决 |
| **中** | [#45000](https://github.com/sgl-project/sglang/issues/45000) — SM86 上 FP8 Marlin 与 overlap scheduler 产生错误 token | 待解决 |
| **中** | [#45512](https://github.com/sgl-project/sglang/issues/45512) — 静默 DP  rank 阻塞 /flush_cache | 待解决 |
| **中** | [#41351](https://github.com/sgl-project/sglang/issues/41351) — Hybrid GDN Radix-cache selected-logprob 漂移 | 待解决 |
| **中** | [#41152](https://github.com/sgl-project/sglang/issues/41152) — AMD aiter：Gemma 2/3 批量生成失控 | 待解决 |
| **低** | [#45481](https://github.com/sgl-project/sglang/issues/45481) — Qwen3.5-35B-A3B TP1/PP2 + NEXTN 在并发到达下 token 漂移 | 待解决 |
| **低** | [#45357](https://github.com/sgl-project/sglang/issues/45357) — PD prefill PP8 + HiCache cache mode 挂起 | 待解决 |

**CI 稳定性**：Issue [#42752](https://github.com/sgl-project/sglang/issues/42752) 追踪 PR Test 工作流中的 flaky 测试和 CI 基础设施故障；Issue [#37451](https://github.com/sgl-project/sglang/issues/37451) 追踪 AMD PR 测试失败。

## 这对应用开发者意味着什么

1. **Blackwell 部署**：如果在无 NVLink 的 RTX PRO 6000 或 GB10 上运行，新版 PCIe all-reduce 优化（[#32479](https://github.com/sgl-project/sglang/pull/32479)）应能显著提升多 GPU 张量并行性能——请关注合并的 PR。

2. **SM120 上的 GLM-5.3-Flash**：fa4 注意力后端在 CUDA-graph 捕获期间崩溃。请使用 `--attention-backend triton` 或 `--flashinfer-backend triton` 作为临时解决方案，直至问题修复。

3. **多节点 GB300**：在多节点设置中避免将 `--tokenizer-worker-num 32` 与自动选择的 `cuda_vmm` 传输配合使用；这会导致服务启动前就出现 OOM。

4. **AMD ROCm**：Mooncake RDMA 注册修复（[#45691](https://github.com/sgl-project/sglang/pull/45691)）应能改善 MI355X 上的解聚稳定性；预计在下个 AMD 容器版本中修复。

5. **DeepSeek-V4.1**：TRTLLM-Gen 注意力后端的 PD 解聚支持正在合并（[#45221](https://github.com/sgl-project/sglang/pull/45221)），支持该模型家族进行解聚服务。

6. **Qwen3 Thinking Toggle**：功能请求 [#5948](https://github.com/sgl-project/sglang/issues/5948) 寻求在启动时服务端控制来禁用思考模式——请关注实现进展。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the digest into Chinese. Let me carefully follow the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, numbers, dates, code references as-is
4. Keep project names, issue numbers, file paths in original form
5. Use natural technical Chinese - not literal word-for-word

Let me translate while keeping the structure intact:

Title: # llama.cpp Digest — 2026-10-22
→ # llama.cpp 每日简报 — 2026-10-22

Let me go through the entire document:</think>

# llama.cpp 每日简报 — 2026-10-22

## 今日要闻

llama.cpp 项目继续保持快速迭代节奏，今日重点包括新增 **Flint 模型**支持、**SenseNova U1** 模型集成，同时完成了词汇表加载的重大性能优化。与此同时，活跃议题涵盖 GPU 后端稳定性（SYCL、Vulkan），其中多个高评论线程涉及内存管理和模型加载边界情况。

---

## 发布与重大变更

过去 24 小时内无新标签发布；活动集中在 master 分支的提交（b11793–b11803）。

---

## 新模型与硬件支持

| 模型 / 硬件 | 详情 | PR / 提交 |
|-------------|------|-----------|
| **Flint** (`FlintForCausalLM`) | 新模型支持，含 HF 到 GGUF 转换、分词器处理及滑动/全注意力路由/共享专家推理。使用自适应专家激活缩放（1,024 阈值）。 | [b11803](https://github.com/ggml-org/llama.cpp/commit/b11803) · [#30928](https://github.com/ggml-org/llama.cpp/pull/30928) |
| **SenseNova U1** | 密集理解分支支持，包括 U1.5-8B-MoT；NEOChatModel（不含 MoT 生成张量）的 HF 到 GGUF 转换。 | [b11801](https://github.com/ggml-org/llama.cpp/commit/b11801) · [#28919](https://github.com/ggml-org/llama.cpp/pull/28919) |
| **GigaChat 3.5**（432B 总参数 / 28B 活跃 MoE） | DeepSeek-V3 风格骨干网（MLA + MoE）；混合注意力架构。 | [#25342](https://github.com/ggml-org/llama.cpp/pull/25342) |

---

## 性能与优化

| 领域 | 变更 | 影响 |
|------|------|------|
| **词汇表加载** | 优化 `llama` 核心的词汇表加载。 | 加快模型初始化。 [b11793](https://github.com/ggml-org/llama.cpp/commit/b11793) |
| **QSA 掩码** | 为 Query-Scaled Attention（QSA）掩码评分新增融合算子；已应用于 GLM5.3-Next。 | 降低 QSA 模型的内核开销。 [b11800](https://github.com/ggml-org/llama.cpp/commit/b11800) |
| **SYCL Q8 反量化** | SYCL 后端 Q8 张量的快速反量化路径。 | 提升 Q8 量化推理的吞吐量。 [b11799](https://github.com/ggml-org/llama.cpp/commit/b11799) |
| **OpenCL GEMM** | Adreno X1（32b trans_ila_a7）新增 Q6_K、Q4_K、Q4_0 的二进制内核。 | 改善移动端 GPU 性能。 [#30949](https://github.com/ggml-org/llama.cpp/pull/30949), [#30948](https://github.com/ggml-org/llama.cpp/pull/30948), [#30947](https://github.com/ggml-org/llama.cpp/pull/30947) |
| **GGML-CPU** | 修复块量化类型（q4_0）的 `dup_bytes` 行大小计算。 | 修复越界拷贝问题。 [#27256](https://github.com/ggml-org/llama.cpp/pull/27256) |
| **CUDA/ROCm** | 重新调优 AMD GPU 的 GCN MMQ 配置。 | 优化旧 AMD 架构的多头量化性能。 [#30021](https://github.com/ggml-org/llama.cpp/pull/30021) |

---

## 稳定性与回归问题

| 议题 | 严重程度 | 状态 | 详情 |
|------|----------|------|------|
| [#25664](https://github.com/ggml-org/llama.cpp/issues/25664) — Linux 7.x 上 `vk::DeviceLostError`（RADV，Strix Halo） | **高** | 待处理，长期 | 24 条评论。新内核上 Vulkan 后端失败。 |
| [#27595](https://github.com/ggml-org/llama.cpp/issues/27595) — SYCL `--fit` 内存统计不完整 | **高** | 待处理，长期 | 22 条评论。即使在 fit 模式下仍出现运行时溢出。 |
| [#27547](https://github.com/ggml-org/llama.cpp/issues/27547) — SYCL 双 GPU 在模型加载时卡死 | **高** | 待处理 | 12 条评论。2× Arc Pro B60 挂起。 |
| [#30892](https://github.com/ggml-org/llama.cpp/issues/30892) — Qwen3.8-27B Q4_K_M 上 SYCL F16 NaN | **中** | 待处理 | 自 #29107 起；关闭融合 GEMM 可解决。 |
| [#30793](https://github.com/ggml-org/llama.cpp/issues/30793) — MoE TTFT 退化（10s → 60s+） | **中** | 待处理 | #30449（CUDA 固定缓冲区限制）后的回归。 |
| [#30698](https://github.com/ggml-org/llama.cpp/issues/30698) — Gemma 4 + MTP 启动时 abort | **中** | 待处理 | `ubatch->embd_state` 上的 GGML_ASSERT。 |

---

## 应用开发者需要关注的事项

1. **新模型选项**：Flint 和 SenseNova U1 现已加入支持列表——开发者可通过标准 GGUF 转换流程运行这些模型。

2. **服务端采样控制**：`/v1/messages` 端点现已转发 llama.cpp 采样参数，使生成控制（temperature、top-p 等）更精细，无需使用变通方案。

3. **Jinja 模板修复**：命名空间属性处理和十六进制字符串转义已修正——聊天模板边界情况应表现更稳定。

4. **关注回归问题**：SYCL F16 NaN 问题和 MoE TTFT 退化可能影响 Intel Arc 和大型 MoE 模型的工作负载。遇到问题请使用 b11798 或更早版本测试。

5. **分词器 bug**：Gemma 4 等模型可能产生 `x!= y` 而非 `x != y`（[#30905](https://github.com/ggml-org/llama.cpp/issues/30905)）；修复正在 [#30940](https://github.com/ggml-org/llama.cpp/pull/30940) 中处理。

---

*基于 2026-10-22 的 GitHub 数据生成。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest into Simplified Chinese. I need to:
1. Only output the translation, no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Use natural technical Chinese (the register of a Chinese developer newsletter)
4. Keep URLs, numbers, code, version numbers, issue/PR references as-is

Let me translate section by section while maintaining the structure:

## 1. Today's Highlights -> 今日要闻
## 2. Releases & Breaking Changes -> 版本更新与破坏性变更
## 3. New Model & Hardware Support -> 新模型与硬件支持
## 4. Performance & Optimization -> 性能与优化
## 5. Stability & Regressions -> 稳定性与回归问题
## 6. What This Means for Application Developers -> 这对应用开发者意味着什么

I need to translate the content while:
- Keeping tables intact
- Keeping links and issue numbers
- Using technical Chinese
- Preserving formatting

Let me go through each section carefully.</think>

# Ollama 要闻 — 2026-10-22

## 1. 今日要闻

Ollama 发布了 **v0.40.8** 版本，并推出了 **Flint**，这是 Recursive 推出的全新编程模型，专为编程智能体工作流设计。本次更新还带来了显著的 MLX 改进，包括并发生成支持和 DFlash2 加速，以及 macOS 27 原生 Apple Foundation Models 集成。然而，多个影响工具调用可靠性和 Ollama Cloud Pro 服务可用性的高优先级问题仍未解决。

---

## 2. 版本更新与破坏性变更

| 版本 | 说明 |
|------|------|
| **v0.40.8** | 最新版本；支持 Flint 模型 |
| **0.40.9** | 新版 D3 决策模型的最低要求版本（`ollama pull dhiltgen/d3:4b`） |

本周期内无 API 破坏性变更报告。

**参考：** [Release v0.40.8](https://github.com/ollama/ollama/releases/tag/v0.40.8)

---

## 3. 新模型与硬件支持

### 模型
- **Flint** — Recursive 的编程模型现已通过 `ollama run flint` 可用（[模型库](https://ollama.com/library/flint)）
- **D3 决策模型** — 新增 MLX 支持；通过 `ollama pull dhiltgen/d3:4b` 获取（最低 v0.40.9）[#19196](https://github.com/ollama/ollama/pull/19196)
- **Apple Foundation Models** — macOS 27 原生设备端模型现已列为 `apple-foundation-model`，支持 `ollama run`、`/api/chat`、`/api/generate` 以及 OpenAI 兼容端点 [#19184](https://github.com/ollama/ollama/pull/19184)

### 硬件与后端
- **MLX** — 新增 DFlash2 块支持，提升草稿加速效果 [#19149](https://github.com/ollama/ollama/pull/19149)
- **MLX** — 现已通过 `OLLAMA_NUM_PARALLEL` 支持并发生成 [#19197](https://github.com/ollama/ollama/pull/19197)
- **Qwen3.5/Qwen3.5-MoE** — 已解除并行请求限制（此前因历史 llama.cpp 崩溃而被阻止）[#17144](https://github.com/ollama/ollama/pull/17144)

---

## 4. 性能与优化

| 领域 | 变更 | PR |
|------|------|-----|
| **MLX 并发** | 多个生成请求现可共享投影/前馈工作，同时保持独立的注意力头；可通过 `OLLAMA_NUM_PARALLEL` 配置 | [#19197](https://github.com/ollama/ollama/pull/19197) |
| **MLX DFlash2** | 块级动态卷积和候选选择器，提升草稿质量 | [#19149](https://github.com/ollama/ollama/pull/19149) |
| **Qwen3.5 并行** | 移除硬编码的 `numParallel=1` 黑名单；并行请求现安全可用 | [#17144](https://github.com/ollama/ollama/pull/17144) |
| **Chat Completions** | `max_completion_tokens` 现已强制执行（此前被忽略）| [#19188](https://github.com/ollama/ollama/pull/19168) |
| **OpenCode 上下文** | 启动现使用 `/api/ps` 分配的上下文，而非静态最大值 | [#19193](https://github.com/ollama/ollama/pull/19193) |

---

## 5. 稳定性与回归问题

### 严重（服务影响）
| 问题 | 严重程度 | 状态 |
|------|----------|------|
| **Ollama Cloud Pro：95% 失败率** — 所有云模型不可用 | **严重** | 待解决，54 条评论，22 👍 [#15453](https://github.com/ollama/ollama/issues/15453) |
| **Flint 在 NVIDIA AGX Orin 上报 500 错误** | **严重** | 待解决，2026-10-21 报告 [#19186](https://github.com/ollama/ollama/issues/19186) |

### 高优先级（工具调用 / 正确性）
| 问题 | 状态 |
|------|------|
| **qwen3.8：工具使用时出现"消息中未找到用户查询"（500）** — 205k 上下文，工具循环中触发 [#17778](https://github.com/ollama/ollama/issues/17778) |
| **gemma4:e4b** 工具解析错误在 0.20.1 修复后仍持续存在 [#15315](https://github.com/ollama/ollama/issues/15315) |
| **qwen3.5/3.6 解析器** 偶发工具调用失败，返回 500 [#16383](https://github.com/ollama/ollama/issues/16383) |
| **qwen3** 工具调用解析器在输出被截断时返回 500 [#14570](https://github.com/ollama/ollama/issues/14570) |
| **Flint** 整型工具参数被转换为浮点数字符串（"30000" → "30000.0"）— 修复已在 PR 中 [#19195](https://github.com/ollama/ollama/pull/19195) |

### 中等优先级（流式 / API）
| 问题 | 状态 |
|------|------|
| **流式 `/v1/messages`：** 首块之后的错误被丢弃，客户端收到空响应 [#19177](https://github.com/ollama/ollama/issues/19177) — 修复已在 PR [#19188](https://github.com/ollama/ollama/pull/19188) |
| **模型驱逐** 被 `keep_alive` 请求阻塞，导致排队请求停滞 [#19182](https://github.com/ollama/ollama/issues/19182) — 修复已在 PR [#19190](https://github.com/ollama/ollama/pull/19190) |
| **OpenCode** 使用了错误的上下文大小（最大值而非分配值）— 修复已在 PR [#19193](https://github.com/ollama/ollama/pull/19193) |

### 较低优先级
- Windows Desktop 应用 0.33.1：内置服务器静默失败，`ollama serve` 正常 [#18061](https://github.com/ollama/ollama/issues/18061)
- `/v1/responses`：重放时推理和图像内容丢失 [#19192](https://github.com/ollama/ollama/pull/19192)
- Responses API：命名空间工具标识丢失 [#16263](https://github.com/ollama/ollama/pull/16263)

---

## 6. 这对应用开发者意味着什么

1. **工具调用在 Qwen3 系列上仍然不稳定** — 如果你的智能体依赖 Qwen3.5/3.6/3.8 的函数调用功能，需做好间歇性 500 错误的准备。qwen3 解析器在截断输出和模板变化时非常脆弱。考虑使用备用模型或实现稳健的重试逻辑。

2. **MLX 用户获得吞吐量提升空间** — 通过 `OLLAMA_NUM_PARALLEL` 实现的新并发生成支持，可降低 Apple Silicon 用户的首 token 延迟。如果内存允许，可在并行数大于 1 的情况下进行基准测试。

3. **macOS 27 用户获得新的本地选项** — Apple Foundation Models 现可通过标准 Ollama 接口访问。非常适合隐私敏感、需要离线推理的场景。

4. **流式错误处理需要关注** — 如果你使用 `/v1/messages` 流式响应，要注意流中间的失败可能表现为空响应而非明确错误。修复已在 [#19188](https://github.com/ollama/ollama/pull/19188) 中实现，即将发布。

5. **在旧版 llama.cpp 上避免 Qwen3.5 并行** — 黑名单已解除，但仅在最新构建中安全。确保使用 0.34.4+ 版本以安全启用并行请求。

6. **关注 Cloud Pro 情况** — Ollama Cloud Pro 95% 的失败率是影响生产集成的服务级问题。如果你已是 Pro 订阅用户，请关注 #15453 获取更新。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate this LiteLLM digest from English to Chinese, following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate while keeping all the structural elements and technical identifiers intact.</think>

# LiteLLM 动态 — 2026-10-22

## 今日要闻

发生了一起严重的安全事件：**v1.107.0 版本被植入后门**，包含凭证窃取程序（`cook.pth`）和远程代码执行载荷。PyPI 已下架该包，Docker 镜像（`latest`、`main-stable`）已被撤回。正面消息是，项目持续快速迭代，新增了多个提供商集成（Engy、Bitdeer AI、OpenRouter rerank），并在代理稳定性方面做了大量工作，包括 JWKS 缓存和预算强制执行。

---

## 版本发布与破坏性变更

| 版本 | 变更类型 | 说明 |
|---------|-------------|-------|
| [v1.106.2](https://github.com/BerriAI/litellm/releases/tag/v1.106.2) | 安全 | Docker 镜像现已通过 cosign 签名 — 可用 `cosign verify` 验证 |
| [v1.105.3](https://github.com/BerriAI/litellm/releases/tag/v1.105.3) | 安全 | Docker 镜像签名验证 |
| [v1.104.5](https://github.com/BerriAI/litellm/releases/tag/v1.104.5) | 安全 | Docker 镜像签名验证 |
| [v1.103.7](https://github.com/BerriAI/litellm/releases/tag/v1.103.7) | 安全 | Docker 镜像签名验证 |

> ⚠️ **[安全漏洞 #47826](https://github.com/BerriAI/litellm/issues/47826)**: v1.107.0 被植入后门。如在此版本，请立即降级。攻击使用了钓鱼仓库 "Berri-AI/litellm"。

---

## 新模型与硬件支持

- **[#46744](https://github.com/BerriAI/litellm/pull/46744)** — 新增 **Engy** 作为 OpenAI 兼容提供商（8 个模型，支持 Chat Completions + Responses + Anthropic 兼容 Messages）
- **[#47885](https://github.com/BerriAI/litellm/pull/47885)** — 新增 **OpenRouter rerank** 提供商支持（`cohere/rerank-v3.5` 等）
- **[#36734](https://github.com/BerriAI/litellm/pull/36734)** — 新增 **Bitdeer AI** 作为 JSON 配置提供商（3 个模型）
- **[#47713](https://github.com/BerriAI/litellm/pull/47713)** — 新增 **Foundry Local** 提供商，支持 SDK 2.2.1
- **[#41797](https://github.com/BerriAI/litellm/pull/41797)** — 新增 **Nadir** 作为 Decisions 提供商和自动路由决策模型
- **[#33497](https://github.com/BerriAI/litellm/pull/33497)** — **Kimi-K2.6**（Crusoe）模型配置

---

## 性能优化

- **[#47846](https://github.com/BerriAI/litellm/pull/47846)** — **JWKS 密钥服务**：代理现在会立即返回过期的缓存密钥，同时在后台刷新，解决了 IdP 获取超时导致的请求阻塞问题
- **[#47886](https://github.com/BerriAI/litellm/pull/47886)** — **Gemini 音频缓存计费**：缓存的音频 token 现按音频缓存读取费率计费（之前错误地按文本费率计费 — `gemini-2.5-flash` 上约少计费 3 倍）

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **严重** | [#47826](https://github.com/BerriAI/litellm/issues/47826) — v1.107.0 被植入后门（凭证窃取） | PyPI 已下架，镜像已撤回 |
| **高** | [#17475](https://github.com/BerriAI/litellm/issues/17475) — 代理管理员独享的模型列表可见性问题 | 进行中 |
| **高** | [#22159](https://github.com/BerriAI/litellm/issues/22159) — 模块导入时发起 HTTP GET 导致启动慢 | 进行中 |
| **中** | [#22637](https://github.com/BerriAI/litellm/issues/22637) — Bedrock `parallel_tool_calls` 在 Claude 4.5+ 上失败 | 进行中 |
| **中** | [#34217](https://github.com/BerriAI/litellm/issues/34217) — `/team/delete` 留下缓存的虚拟密钥仍可认证 | 进行中 |
| **中** | [#29142](https://github.com/BerriAI/litellm/issues/29142) — 跨终端用户的预算泄漏（通过缓存的 `UserAPIKeyAuth`） | 进行中 |
| **中** | [#34238](https://github.com/BerriAI/litellm/issues/34238) — 终端用户预算绕过（通过过期的每 Pod 后备消费） | 进行中 |
| **中** | [#43444](https://github.com/BerriAI/litellm/issues/43444) — 价格数据重载清除 DB 部署的 cost-map 注册 | 进行中 |
| **中** | [#24987](https://github.com/BerriAI/litellm/issues/24987) — 通过代理使用 GPT-5.4 的 Prompt Caching 失效 | 进行中 |
| **低** | [#42104](https://github.com/BerriAI/litellm/issues/42104) — 对话中途插入 `system` 消息破坏 Gemini Prompt Caching | 进行中 |

---

## 对应用开发者的影响

1. **安全优先**：如正在使用 v1.107.0，请立即降级。推荐锁定版本，并使用新的 cosign 工作流验证 Docker 镜像签名。

2. **新提供商选项**：随着 Engy、Bitdeer AI、OpenRouter rerank 和 Foundry Local 的加入，你可以有更多部署选择，无需自定义包装器即可进行 JSON 配置推理。

3. **预算执行变更**：多个进行中的问题涉及跨终端用户的预算泄漏（共享虚拟密钥场景）— 如运行多租户部署且有每用户预算，请密切关注或等待修复。

4. **Prompt Caching 注意事项**：通过代理使用 GPT-5.4 的用户请测试缓存行为；直接调用 API 正常，但代理目前不支持。

5. **模块导入行为**：如冷启动延迟对你的工作流有影响，请注意 litellm 目前在导入时会发起 HTTP 调用 — 已跟踪但尚未修复。

---

*基于 2026-10-22 的 GitHub 数据生成*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate this GitHub digest from English to Chinese. I need to:
1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Use natural technical Chinese, not literal word-for-word translation
4. Keep all technical terms, URLs, code, numbers, etc. as-is

Let me translate this carefully while maintaining the structure and using appropriate technical Chinese register.</think>

# Unsloth 速报 — 2026-10-22

## 今日要闻

开发团队持续推进多个方向的工作。Studio 团队在 MLX 性能优化（消除冗余的聊天历史重读）、GIF 导出大幅提速（约 3 倍）以及决策模型的内存管理改进方面均有重要更新。稳定性方面发现了若干回归问题，包括多轮推理时的核心转储以及分块编译破坏分布式检查点重算的问题。

---

## 发布与重大变更

过去 24 小时内无新版本发布。

---

## 新模型与硬件支持

| 项目 | 详情 | PR/Issue |
|------|--------|----------|
| **MOSS-Image** | 作为新图像系列添加到 Studio（`OpenMOSS-Team/MOSS-Image-SFT` / `MOSS-Image-Base`） | [#14552](https://github.com/unslothai/unsloth/pull/14552) |
| **MLX PLE 与 Expert Offload** | Studio 现已完整支持 Apple Silicon 的逐层嵌入和专家卸载 | [#14326](https://github.com/unslothai/unsloth/pull/14326) |
| **SDXL 提示词权重** | 支持 AUTOMATIC1111 语法：`(word:1.2)`、`[word]`、`\(`、`\)` | [#14562](https://github.com/unslothai/unsloth/pull/14562) |
| **Flux/图像优化** | 融合 FLUX RoPE、CFG 批处理、Blackwell 原生注意力、小型 DiT BF16 默认启用 | [#14566](https://github.com/unslothai/unsloth/pull/14566) |
| **MLX Doctor 命令** | 修复 `unsloth doctor` 以正确检测 Apple Silicon/MLX | [#14457](https://github.com/unslothai/unsloth/pull/14457) |

---

## 性能与优化

| 领域 | 变更 | 影响 | PR |
|------|--------|--------|-----|
| **MLX 聊天性能** | 提示缓存预算耗尽后，不再在每轮重读整个聊天历史 | 29k token 聊天从 ~7-13秒/轮 → 几乎即时响应 | [#14574](https://github.com/unslothai/unsloth/pull/14574) |
| **GIF 导出** | 使用单次剪辑级调色板而非逐帧量化 | 导出速度提升约 3 倍 | [#14581](https://github.com/unslothai/unsloth/pull/14581) |
| **决策模型内存** | 加载新模型时卸载空闲的决策模型 | Qwen3-4B 增加 7k 上下文；Qwen3-8B 上下文容量提升约 5% | [#14555](https://github.com/unslothai/unsloth/pull/14555) |
| **嵌入内存** | 按逐层嵌入和 Engram 查找表计入 host/disk 而非 VRAM | DeepSeek-V4.1、Qwen3.8-Flash-Next、Gemma 4 的上下文容量更优 | [#14465](https://github.com/unslothai/unsloth/pull/14465) |
| **张量并行** | 支持在空闲 GPU 对之间对密集模型和 MTP MoE 进行张量分片 | 双 GPU 解码时利用率更佳 | [#14446](https://github.com/unslothai/unsloth/pull/14446) |
| **CFG 并行 Z-Image** | 在两张显卡上运行 Z-Image 引导分支 | 多 GPU 图像生成加速 | [#14564](https://github.com/unslothai/unsloth/pull/14564) |
| **FP8 扩散权重** | 保持 fp8 权重为 fp8 格式，避免主机内存膨胀 | 降低 Ampere/T4 上的内存压力 | [#14549](https://github.com/unslothai/unsloth/pull/14549) |
| **MoE 自动调优缓存** | 修复设备能力比较逻辑（list vs tuple） | 缓存现在能正确命中 | [#14578](https://github.com/unslothai/unsloth/pull/14578) |

---

## 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复进度 |
|----------|-------|--------|---------------|
| **高** | 推理几轮后核心转储，模型停止响应 | [#14411](https://github.com/unslothai/unsloth/issues/14411) | 调查中 |
| **高** | 分块编译破坏分布式运行中的检查点重算（第一步 backward 时出现 `CheckpointError`） | [#14063](https://github.com/unslothai/unsloth/issues/14063) | 临时方案：`UNSLOTH_BLOCK_COMPILE=0` |
| **中** | Gemma-3 无法训练——loss 持平，准确率为随机水平（FastDecisionModel / Clef head） | [#14439](https://github.com/unslothai/unsloth/issues/14439) | 调查中 |
| **中** | Windows 内存泄漏风险：每次使用 Studio 后丢失 200-400 MB | [#14487](https://github.com/unslothai/unsloth/issues/14487) | 调查中 |
| **中** | 自定义 Krea2 模型导致应用崩溃/无法加载 | [#14474](https://github.com/unslothai/unsloth/issues/14474) | 调查中 |
| **低** | 预提交 CI 压力来自未优化的 `scripts/enforce_kwargs_spacing.py` | [#14174](https://github.com/unslothai/unsloth/issues/14174) | 需优化 |
| **低** | 安装程序忽略 `PIP_INDEX_URL` / `UV_INDEX_URL` | [#13737](https://github.com/unslothai/unsloth/issues/13737) | 修复待定 |

---

## 这对应用开发者意味着什么

1. **Apple Silicon 用户**：MLX 后端现已通过 `unsloth doctor` 正确报告状态，长聊天不再遭受每轮 7-13 秒的延迟。

2. **多 GPU 配置**：张量并行现在能正确利用双卡进行密集模型和 MoE 推理——双 GPU 环境下吞吐量预期提升。

3. **图像生成**：SDXL 提示词权重语法现已兼容 AUTOMATIC1111/Forge，默认优化（FLUX RoPE 融合、CFG 批处理）已启用。在旧 GPU 上使用 fp8 检查点时，内存占用已降低。

4. **临时方案提示**：若在使用分块编译的分布式训练时遇到检查点错误，可临时设置 `UNSLOTH_BLOCK_COMPILE=0` 作为解决方案。

5. **聊天体验**：在不同模型的聊天间切换现更加智能——返回某聊天时若原模型仍在内存中则保持加载状态。

6. **快捷链接**：Studio 现支持 `/chat?q=<text>` 或 `/?q=<text>`，可作为浏览器搜索引擎嵌入使用。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*