# AI 基础设施日报 2026-09-20

> 生成时间: 2026-09-20 00:19 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this English report into Chinese, following the detailed translation rules provided. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, numbers, dates, code spans, code blocks verbatim
4. Keep project names, repo slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while maintaining the structure and technical accuracy.</think>

# 跨项目对比：AI 基础设施生态系统

## 1. 生态系统概览

今日活跃度反映出 AI 推理栈的分层专业化日趋成熟。**vLLM 和 SGLang** 在高性能服务层展开竞争，争相优化长上下文和多模态工作负载；**llama.cpp** 以最广泛的硬件覆盖主导本地/运行时层；**Ollama** 为寻求零配置体验的开发者简化部署流程；**LiteLLM** 提供关键网关层，统一 100+ 提供商；而 **Unsloth** 占据微调/训练层。各层之间的集成——LiteLLM 路由到 vLLM/SGLang 后端，Unsloth 导出 GGUF 供 llama.cpp/Ollama 使用——构成了一个内聚但碎片化的生态系统。

---

## 2. 活跃度对比

| 项目 | Issue（过去 24h） | PR（过去 24h） | Release |
|---------|-------------------|----------------|----------|
| **vLLM** | 30（10 个关键/bug） | 22 | 0 |
| **SGLang** | 29 | 20+（351 个活跃 total） | 0 |
| **llama.cpp** | 15 | 15+（b11054-b11056） | 3 builds |
| **Ollama** | 18 | 13 | 0 |
| **LiteLLM** | 55（活跃 thread） | 30+ | 0 |
| **Unsloth** | 15 | 20+（Studio） | 0 |

**关键观察**：llama.cpp 在发布节奏上领先（3 个 builds），而 LiteLLM 的 issue 数量最多，反映出其网关角色需对接 100+ 提供商集成。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|----------------------|------|--------|-----------|--------|---------|
| **GLM-5.3-Flash**（混合 MLA+DSA） | 🔴 关键稳定性问题 | 🔴 无 SM121 backend | — | — | — |
| **Qwen3.5 FastMTP** | 🔴 回归问题 | Feature 已 merge | — | Feature 已 merge | 🔴 Loader 崩溃 |
| **Qwen3.8 Flash-Next** | 回归问题 | — | — | — | 🔴 MTP 中止 |
| **DeepSeek V4.1 Flash** | — | Bug 追踪中 | — | 图片静默丢失 | — |
| **Gemma 4（Vision/MoE）** | ViT CUDA graphs RFC | Feature 移植中 | — | MLX MoE 失败 | — |
| **Ling 3.0 VL** | — | — | 已添加 | — | — |
| **GLiNER v2.1** | — | — | — | MLX 支持 | — |
| **Claude Gateway** | — | — | — | ✅ 已添加 | — |
| **Block-FP8 MoE** | — | ModelOpt dispatch | — | — | — |

**竞赛状态**：vLLM 和 SGLang 在 GLM-5.3-Flash 上陷入胶着，均遭遇关键障碍。llama.cpp 在模型广度上领先（ Ling VL、GLiNER）。Unsloth 和 Ollama 正在应对 Qwen MTP 问题。目前尚无项目实现稳定的 GLM-5.3-Flash 支持。

---

## 4. 性能前沿

| 优化领域 | 活跃项目 | 关键工作 |
|---------------------|-------------------|----------|
| **KV Cache / HBM** | vLLM, SGLang | HiCache TMA-staged 传输（SGLang: 2x 吞吐量），V1 部分 prefill 限制（vLLM RFC） |
| **量化** | llama.cpp, vLLM, LiteLLM | MXFP4 支持（vLLM ROCm），block-FP8 MoE（SGLang ModelOpt），Prism PQ2_0/PTQ1_0（llama.cpp 请求） |
| **Kernel Fusion** | vLLM, llama.cpp | Qwen3 融合 QK-norm+RoPE+gate（vLLM ROCm），12 个 SANA-Video conv 融合（SGLang） |
| **投机解码** | vLLM, SGLang, Ollama | MTP draft vocab 裁剪（Ollama），枚举式重设计（SGLang RFC），Qwen3.8 回归（Ollama） |
| **多 GPU / EP** | vLLM, SGLang | Elastic EP 取消安全（vLLM），FlashInfer autotune 缓存死锁（SGLang） |
| **本地运行时** | llama.cpp | GPU-resident MoE LRU 缓存，ARM NEON 向量化，CUDA BF16 4x 转换 |
| **网关** | LiteLLM | Headroom 压缩跳过，Prometheus 指标 |

**前沿聚焦**：KV cache 优化（尤其是 HBM 传输瓶颈）和投机解码是最热门的领域。量化支持在格式上碎片化（MXFP4、block-FP8、FP8、PQ2_0、PTQ1_0）。

---

## 5. 层级定位

| 层级 | 项目 | 差异化 |
|-------|----------|-----------------|
| **微调 / 训练** | Unsloth | GGUF 导出，Studio UI，ROCm Docker |
| **本地运行时** | llama.cpp, Ollama | llama.cpp：最广硬件覆盖（CUDA/Metal/SYCL/Hexagon）；Ollama：零配置 |
| **高性能服务** | vLLM, SGLang | vLLM：V1 scheduler，FlashInfer；SGLang：HiCache，sgl-router |
| **网关 / 聚合** | LiteLLM | 100+ 提供商，速率限制，护栏 |

**市场定位**：vLLM 和 SGLang 在功能上处于服务层同位竞争，差异在于调度器设计和 KV 传输策略。llama.cpp 占据"本地无处不在"细分市场。LiteLLM 位于顶层，路由到任何后端。Unsloth 垂直整合下游，向 llama.cpp/Ollama 供给 GGUF。

---

## 6. 趋势信号

### Agent / 应用开发者应关注

1. **GLM-5.3-Flash 是关键路径阻塞点** — 两大主流服务引擎均存在稳定性问题。构建混合 MLA+DSA 架构的应用开发者应规划备选方案或做好延迟准备。

2. **工具调用在各层均脆弱** — vLLM、SGLang、Ollama 和 LiteLLM 均有相关 issue。`tool_choice: "auto"` 与 `response_format` 的交互在多个项目中存在问题。依赖结构化输出+工具的应用需要防御性编码。

3. **投机解码正在进入生产但不稳定** — Ollama 中的 MTP 回归，SGLang 中的枚举重设计。押注投机解码以降低延迟的团队应锁定版本并密切监控。

4. **Windows 性能差距扩大** — Unsloth 等项目显示 Linux 显著优于 Windows。对于生产级延迟敏感型应用，Linux 仍是基准。

5. **LiteLLM 正在成为事实标准网关** — 拥有 100+ 提供商且企业采用率不断增长（速率限制、护栏），LiteLLM 故障会广泛传导。速率限制器 bug（#34140）影响任何多租户部署。

6. **ROCm 正在迎头赶上** — Unsloth ROCm Docker，vLLM ROCm AITER flag 修复，SGLang Mi300X 工作。AMD GPU 用户现已有可行路径，尽管 CUDA 仍在优化成熟度上领先。

7. **HiCache 代表 KV 传输的阶跃变化** — SGLang 在 H200 上实现 2x 吞吐量提升，表明服务器架构将日益分离 prefilling 和 decoding，使用专用高带宽通道。

### 信号摘要

| 趋势 | 方向 | 时间线 |
|-------|-----------|----------|
| GLM-5.3-Flash 支持 | 🔴 阻塞 | 2-4 周 |
| 工具调用可靠性 | 📉 下降 | 持续 |
| ROCm  parity | 📈 改善 | 2026 Q4 |
| 投机解码稳定性 | 📉 回归 | 1-2 个月 |
| 网关整合（LiteLLM） | 📈 增长 | 现在 |
| 本地 + 云 parity | ➡️ 稳定差距 | 长期 |

---

*基于 2026-09-20 当日 vLLM、SGLang、llama.cpp、Ollama、LiteLLM 和 Unsloth 的 GitHub 活动分析。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM Daily Digest from English to Chinese. Let me carefully translate it while:
1. Keeping the exact Markdown structure (headings, tables, lists, etc.)
2. Preserving URLs, issue numbers, code references, etc.
3. Using natural technical Chinese suitable for a Chinese developer newsletter
4. Not adding any preamble or explanation

Let me go through each section:</think>

# vLLM 每日简报 — 2026-09-20

## 1. 今日要闻

vLLM 项目持续在多个方向活跃开发。关注重点包括 GLM-5.3-Flash 稳定性（围绕 CUDA 非法内存访问和解码退化的多个关键 bug）、V1 调度器对长上下文工作负载的优化，以及 AMD 硬件的 ROCm 后端改进。社区还合并了一个重要的安全修复，解决了 min_tokens 验证绕过问题。此外，Vision Transformer CUDA 图支持以实现多模态模型也是热门讨论话题。

## 2. 版本发布与重大变更

过去 24 小时内无新版本发布。

## 3. 新模型与硬件支持

- **GLM-5.3-Flash (glm5next)** — 持续推进为混合 MLA + Kimi Delta Attention 模型添加 CPU KDA 后端的工作（[#57346](https://github.com/vllm-project/vllm/issues/57346)）
- **混合精度检查点** — ROCm 现已支持混合 mxfp4 + fp8 检查点（如 Kimi-K3，路由专家使用 mxfp4 + 密集投影使用 fp8），通过 PR [#57048](https://github.com/vllm-project/vllm/pull/57048)
- **XPU 支持** — MRV2 采样器现通过融合的 top-k/top-p 采样内核支持英特尔 XPU（[#57277](https://github.com/vllm-project/vllm/pull/57277)）
- **Gemma4 视觉编码器** — 将其移植到使用 FlashAttention 的 MMEncoderAttention 的功能开发（[#43178](https://github.com/vllm-project/vllm/issues/43178)）

## 4. 性能优化

- **DiffusionGemma 前缀填充优化** — 前缀填充专用批次现可从模型状态获取正确的 logit 行数，消除不必要的完整前向传播（[#57416](https://github.com/vllm-project/vllm/pull/57416)）
- **DeepGEMM CUDA 12.9** — 修复六个失败的发布构建目标（x86_64/aarch64 wheel 和镜像）（[#57554](https://github.com/vllm-project/vLLM/pull/57554)）
- **SM100 fp8_ds_mla** — 统一 FlashMLA 在 SM90 和 SM100 之间的缓存缩放契约（[#49435](https://github.com/vllm-project/vllm/pull/49435)）
- **Qwen3-Next/3.5 ROCm** — 推进启用融合 QK-norm+RoPE+gate Triton 内核的工作（[#51406](https://github.com/vllm-project/vllm/pull/51406)）
- **ROCm AITER** — 问题反馈：vLLM ROCm 镜像缺少 `VLLM_ROCM_USE_AITER` 标志，导致在 MI300X 上相比 AITER 后端慢 1.7–3.7 倍（[#56945](https://github.com/vllm-project/vllm/issues/56945)）

## 5. 稳定性与回归问题

**严重：**
- **GLM-5.3-Flash CUDA 非法内存访问** — 在 4xB200 上三个不相关内核（KDA 线性注意力、MHC TileLang、TRT-LLM 融合 MoE）反复出现 IMA。严重程度：高，影响生产环境（[#54317](https://github.com/vllm-project/vllm/issues/54317)）
- **GLM-5.3-Flash 解码退化** — 在 B300 上累积推理解码后出现长解码退化（[#56868](https://github.com/vllm-project/vllm/issues/56868)）
- **DFlash2 越界崩溃** — 在 sm_80 上采样负载下约 11k 解码步后出现确定性 CUDA IMA/Xid 31（[#55279](https://github.com/vllm-project/vllm/issues/55279)）

**高：**
- **Qwen3.6-27B 工具调用 + MTP 回归** — 启用 MTP 投机解码时，结构化输出的 Responses API 调用失败（[#46249](https://github.com/vllm-project/vllm/issues/46249)）
- **结构化输出抑制工具调用** — 带 `tool_choice: "auto"` 的 `response_format` 阻止工具生成（[#39929](https://github.com/vllm-project/vllm/issues/39929)）
- **FlashInfer 自动调优缓存死锁** — 配置缓存仅在 rank 0 命中，导致引擎启动死锁（[#57423](https://github.com/vllm-project/vllm/issues/57423)）
- **弹性 EP 提交竞态条件** — 在 `_commit_scale_down_elastic_ep` 期间取消任务会导致集群状态损坏（[#57691](https://github.com/vllm-project/vllm/issues/57691)）→ 已通过 [#57710](https://github.com/vllm-project/vllm/pull/57710) 修复

**中：**
- **ROCm 注意力非确定性** — ROCM_ATTN 在 gfx1151 上对同一贪婪请求返回不同于其他请求后的输出（[#57493](https://github.com/vllm-project/vllm/issues/57493)）
- **MoE W4A16 topk 权重 bug** — `moe_wna16_marlin_gemm` 在 gpt-oss NVFP4 形状上应用了错误的每行 topk 权重（[#48895](https://github.com/vllm-project/vllm/issues/48895)）

## 6. 这对应用开发者的意义

- **安全加固**：min_tokens 验证绕过修复（[#57731](https://github.com/vllm-project/vllm/pull/57731)）应审查以供部署——请确保您的部署接受此更新
- **GLM-5.3-Flash 注意**：如果在生产环境中运行 GLM-5.3-Flash，请注意解码退化问题；考虑变通方案或监控报告的症状
- **结构化输出 + 工具**：`response_format` 与 `tool_choice: "auto"` 之间的交互仍然存在问题；可能需要使用 `tool_choice: "required"` 作为变通方案（[#39929](https://github.com/vllm-project/vllm/issues/39929)）
- **V1 调度器调优**：关于恢复并发部分前缀填充限制的 RFC（[#57413](https://github.com/vllm-project/vllm/issues/57413)）针对长上下文 RAG 工作负载；欢迎生产部署的反馈
- **扩散模型**：如果使用 DiffusionGemma，最近的修复（[#57416](https://github.com/vllm-project/vllm/pull/57416)、[#57462](https://github.com/vllm-project/vllm/pull/57462)）提高了前缀填充效率——可用时进行升级
- **ROCm 用户**：缺失的 AITER 标志问题（[#56945](https://github.com/vllm-project/vllm/issues/56945)）导致显著减速；MI300X/MI325X 部署需要修复或变通方案

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang digest from English to Chinese. Let me go through the content and translate it while preserving the exact structure, including markdown formatting, tables, links, code references, etc.

I need to:
1. Keep all markdown headings, tables, lists, etc.
2. Keep all URLs, issue/PR references (#xxxxx), code references as-is
3. Translate the content to natural technical Chinese
4. Not add any preamble or explanation

Let me translate section by section:</think>

# SGLang 动态 — 2026-09-20

## 1. 今日要点

SGLang 项目今日继续保持多线并进的发展态势。HiCache 内核优化取得重大进展，在 H100/H200 上实现约 2 倍的设备间 KV 传输吞吐量提升；GLM-5.3-Flash 集成工作持续推进，暴露了 DGX Spark (SM121) 上的后端缺陷；sgl-router 重构系列正在推进中，引入了基于会话感知、缓存感知和 SLO 的分桶选择策略。CI 基础设施仍需关注，目前有 21 个失败的测试和 24 个不稳定测试在追踪中。

---

## 2. 版本发布与破坏性变更

过去 24 小时内无版本发布。

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 状态 | Issue / PR |
|------------------|--------|----------|
| **DeepSeek-V4.1** | 主分支支持追踪 Issue 已开启 | [#40152](https://github.com/sgl-project/sglang/issues/40152) |
| **DeepSeek-V4.1 + Engram** | CUDA-graph 捕获 ragged verify 存在 bug，需要修复 | [#39173](https://github.com/sgl-project/sglang/issues/39173) |
| **GLM-5.3-Flash** (DSA+mamba 混合架构) | SM90 H20 上 TBO 不可达；缺少 Glm5NextDecoderLayer 策略 | [#36840](https://github.com/sgl-project/sglang/issues/36840) |
| **GLM-5.3-Flash** (DGX Spark / SM121) | 无可用的 DSA attention 后端 — trtllm 仅支持 SM100，tilelang 超过 smem，triton 仅支持 ROCm，flashinfer_sparse_mla 未开放 | [#40286](https://github.com/sgl-project/sglang/issues/40286) |
| **Qwen3.6-27B-AWQ** | temperature=0 时多轮提示词出现退化输出（对比 vLLM）| [#31720](https://github.com/sgl-project/sglang/issues/31720) |
| **MXFP8 MTP experts** (GLM-5.3-Flash-NVFP4) | 加载器失败 — MTP 层未被跳过处理 `model.language_model.*` 名称 | [#40285](https://github.com/sgl-project/sglang/issues/40285) |
| **Block-FP8 MoE** (ModelOpt) | PR 添加了 FP8_BLOS experts 的调度和块大小推导 | [#38726](https://github.com/sgl-project/sglang/pull/38726) |

---

## 4. 性能优化

### 已合并 / 进行中

| 优化 | 影响 | PR |
|--------------|--------|-----|
| **HiCache TMA 分阶段 host↔device KV 传输** (sm_90+) | H2D: 97 → 192 GB/s, D2H: 93 → 183 GB/s (GB300 上约 2 倍)，使用 4/152 SM | [#40278](https://github.com/sgl-project/sglang/pull/40278) |
| **HiCache 在 post-capture KV 大小计算前预分配 MHA staging 缓冲区** | 通过在运行时工作区大小测量前确定 staging 缓冲区大小，防止 OOM | [#40256](https://github.com/sgl-project/sglang/pull/40256) |
| **统一缓存 — MLA 加载去重** (Mooncake Linker) | 减少 TP  rank 间的重复 KV 加载 | [#39565](https://github.com/sgl-project/sglang/pull/39565) |
| **SANA-Video 无损 eager conv 融合** | 延迟降低 12.6%；80 个 conv-bias-add 内核在每个 CFG 迭代中占用 97.77ms，已融合 | [#40388](https://github.com/sgl-project/sglang/pull/40388) |
| **PD: 在内存压力下由 decode host pool 接收 prefill KV** | 新增标志 `--disaggregation-decode-enable-host-receive`，支持 Mooncake | [#40238](https://github.com/sgl-project/sglang/pull/40238) |
| **TopK v2 fallback 修复** — 处理 16-block 集群容量为 0 的情况 | 解决内核崩溃问题 | [#40163](https://github.com/sgl-project/sglang/pull/40163) |

### 进行中 — RFC / 设计阶段

- **统一 KV-Cache 稀疏框架** — 面向后处理稀疏注意力（固定模式、KV 派生、查询感知检索）— [#32657](https://github.com/sgl-project/sglang/issues/32657)
- **并行投机解码** — 从 response-based 改为 enumeration-based 设计（draft 器预枚举验证结果，verifier 在 GPU 上选择）— [#27462](https://github.com/sgl-project/sglang/issues/27462)

---

## 5. 稳定性与回归问题

### 严重

| 问题 | 严重程度 | 状态 |
|-------|----------|--------|
| **FlashInfer 自动调优缓存在 EP > 1 时每次启动被丢弃** — MoE expert parallelism 下缓存无法跨重启持久化，导致每次启动都重新调优 | 高 | [#40320](https://github.com/sgl-project/sglang/issues/40320) |
| **EAGLE spec-decode: draft 批次的 `num_token_non_padded = 0`** — 将所有 draft topk id 掩盖为 -1，破坏 MoE 调度 | 高 | [#40156](https://github.com/sgl-project/sglang/issues/40156) |
| **DP scheduler SIGQUIT 终止 DataParallelController** 而非通知 Engine，导致非正常关闭 | 高 | [#40364](https://github.com/sgl-project/sglang/issues/40364) |
| **HiCache MP 会话在 pre-load-back 中止时泄漏**；中止钩子无法安全完成 | 高 | [#40360](https://github.com/sgl-project/sglang/issues/40360) |
| **HiCache 分阶段写回: 128 KiB 批次路径** 传递未注册的 host VA 给 `cudaMemcpyAsync`，在 `CanUseHostPointerForRegisteredMem == 0` 时触发错误 | 高 | [#40232](https://github.com/sgl-project/sglang/issues/40232) |

### 中等

| 问题 | 状态 |
|-------|--------|
| **JSON Schema 语法编译**: DFA 状态爆炸及深层嵌套模式时 CPU 线程挂起 — 潜在 DoS 向量 | [#39125](https://github.com/sgl-project/sglang/issues/39125) |
| **JIT hadamard/DSA-indexer 内核编译在共享 NFS tvm-ffi 缓存上竞争** — 多节点冷启动时 ESTALE 链接失败 | [#31347](https://github.com/sgl-project/sglang/issues/31347) |
| **队列中止导致流式会话卡在飞行状态** | [#31765](https://github.com/sgl-project/sglang/issues/31765) |

### CI 状态

- **21 个失败** 测试，**24 个不稳定** 测试，**1029 个近期已修复** — 在 [#17050](https://github.com/sgl-project/sglang/issues/17050) 中追踪

---

## 6. 应用开发者需要关注的事项

1. **多轮 / few-shot prompting 与 AWQ 模型** — 在 [#31720](https://github.com/sgl-project/sglang/issues/31720) 修复前，生产环境中避免使用 temperature=0 的 Qwen3.6-27B-AWQ；考虑 vLLM 作为替代。

2. **GLM-5.3-Flash 用户在 DGX Spark (SM121) 上** — 当前版本 (v0.5.20) 缺少可用的 DSA attention 后端；关注 [#40286](https://github.com/sgl-project/sglang/issues/40286) 等待修复。

3. **如果使用 expert parallelism (EP > 1)** — 由于 [#40320](https://github.com/sgl-project/sglang/issues/40320)，冷启动时间会更长；每次启动时 FlashInfer 自动调优缓存都会重建。

4. **sgl-router 部署** — 正在进行的重构引入了新的分桶选择策略（SLO 排序、会话感知、缓存感知）。如果您依赖自定义路由逻辑，请查阅 [#40292](https://github.com/sgl-project/sglang/pull/40292)、[#40379](https://github.com/sgl-project/sglang/pull/40379) 和 [#40366](https://github.com/sgl-project/sglang/pull/40366)。

5. **如果运行 HiCache 配合 MoE 模型** — [#40278](https://github.com/sgl-project/sglang/pull/40278) 中的 TMA 内核显著提升了 KV 传输吞吐量；合并后请升级。

6. **结构化输出 (JSON Schema)** — 深层嵌套模式可能导致 CPU 挂起；请按 [#39125](https://github.com/sgl-project/sglang/issues/39125) 中的建议对不受信任的输入进行清洗。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate this English digest about llama.cpp into Chinese. Let me analyze the requirements:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Use natural technical Chinese, register of a Chinese developer newsletter
4. Keep URLs, issue/PR references, code, numbers, etc. as-is
5. Keep project names, repository slugs, etc. untranslated

Let me translate section by section while maintaining the structure:

**Title**: llama.cpp 每日简报

**Section 1: 今日要闻**
- Convert to natural Chinese

**Section 2: 发布与breaking changes**

**Section 3: 新模型与硬件支持**

**Section 4: 性能与优化**

**Section 5: 稳定性与回归问题**

**Section 6: 对应用开发者的意义**

Let me do this translation now.</think>

# llama.cpp 每日简报

## 1. 今日要闻

最新构建版本（b11054-b11056）为 Hexagon DSP 后端带来了重要改进，包括 TOP_K 优化和新算子支持。服务器启动日志现在会显示模型来源，便于调试。Metal 和 CUDA 也修复了 Flash Attention 支持检查和 CUB argsort 操作的正确性问题。

## 2. 发布与重大变更

今日无重大版本发布。但以下 bug 修复可能会影响现有行为：

- **Metal**：修复了 FA（Flash Attention）支持检查错误拒绝有效配置的问题（[PR #29122](https://github.com/ggml-org/llama.cpp/pull/29122)）
- **CUDA**：修复了 CUB argsort 因原地键缓冲区导致的损坏问题（[PR #28389](https://github.com/ggml-org/llama.cpp/pull/28389)）
- **Server**：改进了令牌边界处的无效 UTF-8 清理逻辑（[PR #28724](https://github.com/ggml-org/llama.cpp/pull/28724)）

## 3. 新模型与硬件支持

- **Ling 3.0 VL (BailingMoeV3VL)**：新增模型支持，包括视觉语言能力（[PR #29151](https://github.com/ggml-org/llama.cpp/pull/29151)）
- **Qwen4exp HC 算子**：Metal 后端现已支持 DeepSeek V4 新变体的门控 sigmoid gate 和 identity mixing（[PR #29000](https://github.com/ggml-org/llama.cpp/pull/29000)）
- **MSVC 上的 AVX-VNNI**：编译现已自动检测并启用 MSVC 构建中的 AVX-VNNI（[PR #28297](https://github.com/ggml-org/llama.cpp/pull/28297)）
- **OpenHarmony 支持**：构建兼容性支持 OpenHarmony (musl) 系统（[PR #29156](https://github.com/ggml-org/llama.cpp/pull/29156)）
- **量化格式**：功能请求支持 Prism PQ2_0（GGML 类型 142）和 PTQ1_0（类型 143）用于 Ternary-Bonsai-2（[Issue #29058](https://github.com/ggml-org/llama.cpp/issues/29058)）

## 4. 性能与优化

- **CUDA BF16 预填充**：每次转换四个元素的连续张量，可测量提升性能（[PR #29155](https://github.com/ggml-org/llama.cpp/pull/29155)）
- **ARM NEON 量化**：为 NEON 添加了矢量化的 `ggml_quantize_mat_q8_K_4x4` 和 `4x8` 实现（[PR #29153]([PR #29153](https://github.com/ggml-org/llama.cpp/pull/29153))）
- **GPU 驻留 MoE 缓存**：新增主机卸载 MoE 专家权重的 LRU 缓存，减少解码带宽受限场景的带宽消耗（[PR #27861](https://github.com/ggml-org/llama.cpp/pull/27861)）
- **Hexagon TOP_K**：单行 TOP_K 线程处理，提高 VTCM 上限并优化大行选择（[PR #29113](https://github.com/ggml-org/llama.cpp/pull/29113)）
- **线程选择**：`--threads -1` 现遵循自动数学核心计算，而非硬件并发数（[PR #29160](https://github.com/ggml-org/llama.cpp/pull/29160)）
- **SYCL 固定内存**：修复多 GPU 设置中固定内存的设备上下文使用问题（[PR #28895](https://github.com/ggml-org/llama.cpp/pull/28895)）

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | HIP/ROCm：Gated Delta Net 在请求间保留循环状态，导致后续补全中出现之前提示词的文本（[#29092](https://github.com/ggml-org/llama.cpp/issues/29092)） | 待解决 |
| **高** | SYCL 双 GPU 在模型加载时卡死（[#27547](https://github.com/ggml-org/llama.cpp/issues/27547)） | 待解决 - bug-未确认 |
| **高** | CUDA 图在 RTX 5090 笔记本上挂起 (sm_120)；GGML_CUDA_DISABLE_GRAPHS=1 作为变通方案（[#27330](https://github.com/ggml-org/llama.cpp/issues/27330)） | 待解决 |
| **中** | SYCL 显存使用量自 b10680 以来增加（[#29063](https://github.com/ggml-org/llama.cpp/issues/29063)） | 待解决 |
| **中** | Draft-MTP 上下文大小使用 llama_n_ctx() 而非 llama_n_ctx_seq()，导致服务器崩溃（[#28433](https://github.com/ggml-org/llama.cpp/issues/28433)） | 待解决 |
| **中** | AMD Strix Halo：因输入层在 CPU 上导致 30% CPU 使用率（[#25700](https://github.com/ggml-org/llama.cpp/issues/25700)） | 待解决 |
| **中** | SYCL --fit 未完全考虑内存使用，导致运行时溢出（[#27595](https://github.com/ggml-org/llama.cpp/issues/27595)） | 待解决 |

## 6. 对应用开发者的意义

- **更好的调试**：服务器日志现在显示模型来源（preset/models_dir/cache）而非神秘标记——检查启动日志以获得更好的可见性
- **改进的文本处理**：生成的输出现在在令牌边界处清理无效 UTF-8，减少解析失败
- **Metal 用户**：如果您之前遇到 FA（Flash Attention）问题，最新构建应该能解决
- **SYCL 用户**：多 GPU 设置现在应该能正常工作，固定内存设备上下文使用正确
- **线程配置**：使用 `--threads -1` 现在通过尊重数学核心数而非总核心数来提供更好的默认性能
- **注意回归**：如果您在 HIP/ROCm 上使用 Qwen35 混合模型，在修复之前请注意循环状态持久化问题

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest from English to Chinese (Simplified Chinese based on the context and language used in my analysis). 

Let me translate this following the rules:
1. Only output the translation, no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, issue/PR references, code, etc. as-is
4. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

## 1. Today's Highlights
- Two significant fixes landed addressing DeepSeek model compatibility: the OpenAI-compatible endpoint now accepts `reasoning_content` (PRs #18543 and #18536) for proper thinking replay, and the qwen3-coder parser now recognizes implicit tool-call openers (PR #18538). Meanwhile, multiple stability issues persist around tool calling across models (qwen, minicpm5, deepseek-v4.1-flash) and a new regression affects MTP speculative decoding with Qwen3.8 27B.

## 2. Releases & Breaking Changes
- No releases in the last 24 hours.
- **Migration Note:** The `typical_p` parameter is no longer supported (Issue #18542), breaking clients like SillyTavern 1.18.0 that cannot omit this parameter. No timeline for resolution provided.

## 3. New Model & Hardware Support
- **GLiNER Small v2.1 MLX Support** — PR #18535 adds native entity extraction via `POST /api/extract` for MLX-backed inference. Models: `gliner-small-v2.1`
- **Qwen 3.5 MTP FastMTP** — PR #18546 implements draft-vocabulary trimming (`d2t` mapping) for compact MTP draft models.
- **Multi-Runtime Downloads** — Feature request #18545 proposes downloading both CUDA and ROCm runtimes on mixed GPU systems (e.g., 7800XT + 4060Ti). 

Currently only CUDA is bundled on detection. On Windows, custom installation and model storage locations aren't available yet — they default to the system drive. Linux ChatGPT launch support is being added to detect executables under `/usr/lib/chatgpt`.

For performance, the benchmark is being updated with PR #17480 to use packed HumanEval Python code instead of synthetic word-list prompts, better calibrating `-prompt-tokens` through untimed chat probes, while PR #15084 introduces OpenAI API benchmark support.

The `/metrics` endpoint is now available when `OLLAMA_METRICS` is set, offering observability without external dependencies. Thinking token budgets per-request or per-model are being proposed to prevent infinite loops from consuming the entire context window. VRAM reporting and prediction from head dimensions are also being implemented across PRs #18197 and #18198.

Several high-priority issues are emerging: tool calls are being refused or silently dropped across multiple models including qwen, minicpm5, and deepseek-v4.1-flash; MTP speculative decoding with Qwen3.8 27B regressed in 0.34.2; and model download failures are occurring in 0.34.2 but not in 0.34.1. Intel QuickSync iGPU isn't being utilized despite the model responding in Docker and OpenWebUI, and macOS GUI silently fails after processing around 6k tokens.

MLX Gemma 4 MoE is unable to load, specifically missing MoE expert weights with the `experts.switch_glu` layout on the quantized model. The CUDA ADD_ID abort with gpt-oss:20b MXFP4 on RTX 4000 Ada is now resolved.

For developers, several compatibility concerns need attention: DeepSeek users should verify their client uses the `reasoning` field rather than `reasoning_content` until PR #18543 merges, and qwen3-coder users may experience silent tool call drops with prepended reasoning until PR #18538 is addressed.

The `typical_p` regression is breaking SillyTavern 1.18.0, so either downgrade Ollama or wait for a fix. Multi-GPU mixed vendor setups may require manual runtime selection on ROCm systems with NVIDIA cards. Gemma 4 MoE quantized models shouldn't be deployed in production until #18540 is resolved. For production monitoring, Prometheus metrics are accessible at `/metrics` behind the `OLLAMA_METRICS` flag.</think>

# Ollama digest — 2026-09-20

## 1. 今日要闻

两个重要修复已合入，解决了 DeepSeek 模型兼容性问题：OpenAI 兼容端点现在接受 `reasoning_content`（PR #18543 和 #18536）以支持思考内容回放，qwen3-coder 解析器现在可以识别隐式工具调用起始符（PR #18538）。同时，多个稳定性问题持续存在，涉及跨模型工具调用（qwen、minicpm5、deepseek-v4.1-flash），且一个新回归影响了 Qwen3.8 27B 的 MTP 投机解码。

---

## 2. 版本更新与重大变更

过去 24 小时内无版本发布。

**迁移注意**：`typical_p` 参数不再受支持（Issue #18542），导致无法省略此参数的客户端如 SillyTavern 1.18.0 报错。暂未提供修复时间表。

---

## 3. 新模型与硬件支持

- **GLiNER Small v2.1 MLX 支持** — PR #18535 新增通过 `POST /api/extract` 进行原生实体提取，支持 MLX 推理后端。模型：`gliner-small-v2.1`
- **Qwen 3.5 MTP FastMTP** — PR #18546 实现了草稿词汇表裁剪（`d2t` 映射），用于紧凑型 MTP 草稿模型。
- **多运行时下载** — 功能请求 #18545 提议在混合 GPU 系统（如 7800XT + 4060Ti）上同时下载 CUDA 和 ROCm 运行时。当前仅在检测到时捆绑 CUDA。
- **Windows 安装器** — 功能请求 #18549 寻求自定义安装目录和模型存储目录；目前默认使用系统盘符。
- **Linux ChatGPT 启动** — PR #18537 为 `ollama launch chatgpt` 添加 Linux 支持，可检测 `/usr/lib/chatgpt` 下的可执行文件。

---

## 4. 性能与优化

- **基准测试改进** — PR #17480 将合成词表提示词替换为打包的 HumanEval Python 代码，用于投机解码基准测试，通过不计时的聊天探测校准 `-prompt-tokens`。PR #15084 新增 OpenAI API 基准测试支持。
- **Prometheus 指标** — PR #18508 在设置 `OLLAMA_METRICS` 时添加 `/metrics` 端点，提供无外部依赖的可观测性。
- **思考 Token 预算** — PR #17566 提议按请求或按模型设置思考 token 预算，防止无限循环消耗完整上下文。
- **显存报告** — PR #18197 和 #PR #18198（已关闭）引入了按设备显存报告和基于头维度的显存预测，以堆叠形式合入。

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 详情 |
|----------|------|------|------|
| **高** | 跨多模型工具调用被拒绝/丢失 | 进行中 | qwen 工具角色被拒绝（#18509），qwen3-coder 带思考的工具调用丢失（#18530），minicpm5-2b 原生调用始终无法解析（#18483），deepseek-v4.1-flash 静默丢弃图像（#18527）。 |
| **高** | MTP 投机解码回归 | 已关闭 | Qwen3.8 27B 在 0.34.2 中使用 MTP 失败（#18541）。 |
| **高** | 模型下载失败 | 已关闭 | 0.34.2 无法下载/拉取模型；0.34.1 正常（#18547）。 |
| **中** | Intel QuickSync iGPU 未被使用 | 进行中 | Docker + OpenWebUI 显示无 iGPU 活动，但模型有响应（#18548）。 |
| **中** | macOS GUI 静默失败 | 进行中 | 聊天在约 6k token 后失败，无任何通知（M4 Pro MacBook）（#18368）。 |
| **中** | MLX Gemma 4 MoE 加载失败 | 进行中 | `mlx-community/gemma-4-26B-A4B-it-qat-4bit` 加载失败："缺少 MoE 专家权重（experts.switch_glu 布局）"（#18540）。 |
| **低** | CUDA ADD_ID 中止 | 已关闭 | gpt-oss:20b MXFP4 在 RTX 4000 Ada 上确定性中止（#18522）。 |
| **低** | DeepSeek 思考内容丢失 | 已关闭 | `DeepSeek3Renderer` 在带工具调用的助手消息中丢弃思考内容（#18529）。 |

---

## 6. 这对应用开发者意味着什么

- **DeepSeek 用户**：如果需要回放对话历史，验证你的客户端使用 `reasoning` 字段（而非仅 `reasoning_content`），直到 PR #18543 合入。
- **qwen3-coder 用户**：带前缀思考的工具调用可能会被静默丢弃；密切监控输出或等待 PR #18538 合入。
- **SillyTavern 用户**：`typical_p` 回归可能导致 1.18.0 不可用；考虑降级 Ollama 或等待修复。
- **多 GPU 混合 vendor**：ROCm 用户在同时配备 NVIDIA 卡的系统上可能需要手动选择运行时，直到双运行时支持上线。
- **MLX 用户**：Gemma 4 MoE 量化模型当前无法加载；生产环境避免部署，直至 #18540 修复。
- **可观测性**：生产监控现在可以使用 `OLLAMA_METRICS` 标志启用 `/metrics` 端点的 Prometheus 指标。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM digest from English to Chinese. I need to follow the rules provided:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully while maintaining all the formatting and technical terms.</think>

# LiteLLM 每日简报 — 2026-09-20

## 今日要点

LiteLLM 今日在基础设施稳定性方面有重要进展：修复了影响 spend-log 视图的数据库启动竞态条件，加固了安全配置移除硬编码主密钥，并更新了 DeepSeek 模型的定价。多项影响多账户 OAuth、速率限制和 MCP 工具的 bug 仍未解决。团队正在推送 UI 改进，增强提示词缓存可视性和路由预测功能。

---

## 发布与重大变更

过去 24 小时内无新版本发布。

---

## 新模型与硬件支持

- **DeepSeek V4 Flash 定价更新** — PR #42006 同步了 `openrouter/deepseek/deepseek-v4-flash` 的 cache_read 和 input 令牌费用（$0.008064/1M → $0.00756/1M cache read；$0.04032 → $0.0378/1M input）。[[PR #42006](https://github.com/BerriAI/litellm/pull/42006)]

- **Claude Gateway 支持上线** — Issue #34924 已关闭；LiteLLM 现已支持 Anthropic 的 Claude Apps Gateway。[[Issue #34924](https://github.com/BerriAI/litellm/issues/34924)]

- **Mistral Batches API + OCR 端点** — Issue #29914 功能合并，使 LiteLLM 能够路由 OCR 和 Mistral 批量请求。[[Issue #29914](https://github.com/BerriAI/litellm/issues/29914)]

- **MCP 2.x SDK 支持** — Issue #35306 跟踪从锁定 `mcp>=1.28.1,<2.0` 到支持 2026-07-28 发布的 MCP 2.0.0 SDK 的迁移。[[Issue #35306](https://github.com/BerriAI/litellm/issues/35306)]

---

## 性能与优化

- **Headroom: 小于 min_tokens 阈值时跳过压缩** — PR #42017 引入配置开关，基于对话长度控制 `/v1/compress` 调用，避免短请求的不必要往返（如 4 条消息的聊天）。[[PR #42017](https://github.com/BerriAI/litellm/pull/42017)]

- **Responses 流: 保留显式空值** — PR #41983 修复了 `/v1/responses` 流式传输中可空字段被剥离的问题，保持与 provider 合约的兼容性。[[PR #41983](https://github.com/BerriAI/litellm/pull/41983)]

- **OpenTelemetry v2: llm_only 跨度范围** — PR #41740 为 Langfuse OTel 目标添加 `langfuse_span_scope`（`full` vs `llm_only`），让租户可以缩小可见范围仅限模型调用。[[PR #41740](https://github.com/BerriAI/litellm/pull/41740)]

---

## 稳定性与回归问题

### 严重

- **速率限制器重复计算团队每模型限额** — Issue #34140: 通过 `POST /team/update {metadata: {model_rpm_limit: {...}}}` 设置的团队级每模型速率限制按配置值的一半执行。团队模型限额为 `N` 时，约 `N/2` 请求后即返回 429。根本原因调查进行中。[[Issue #34140](https://github.com/BerriAI/litellm/issues/34140)]

### 高

- **MCP 语义工具过滤器启动时崩溃** — Issue #26155: 当 `mcp_semantic_tool_filter.enabled: true` 且数据库中有数千个 MCP 工具时，代理在启动期间进入崩溃循环。[[Issue #26155](https://github.com/BerriAI/litellm/issues/26155)]

- **MCP 访问组无法分配给非团队密钥** — Issue #25866: v1.83.3 中的回归；将 MCP 访问组分配给非团队密钥时失败并返回不明确的错误。[[Issue #25866](https://github.com/BerriAI/litellm/issues/25866)]

- **Guardrails 无法通过 Anthropic /v1/messages 查看 MCP 工具** — Issue #40583: 预调用 guardrails（custom_code、tool_permission）在客户端使用 Anthropic 兼容的 `/v1/messages` 端点时无法看到或阻止 MCP 工具。[[Issue #40583](https://github.com/BerriAI/litellm/issues/40583)]

### 中

- **map_system_message_pt 中出现 TypeError** — Issue #23757: 将 Anthropic 格式消息路由到 ChatGPT provider 时抛出 `TypeError: can only concatenate list (not "str") to list`。[[Issue #23757](https://github.com/BerriAI/litellm/issues/23757)]

- **Ollama reasoning_effort 映射崩溃** — Issue #34574: `map_openai_params` 存在不可哈希字典 bug，并在非推理模型上强制 `think=True`。[[Issue #34574](https://github.com/BerriAI/litellm/issues/34574)]

- **DeepSeek V4 Pro/Flash 价格过时** — Issue #37255: 固定费率不再匹配 provider 的按时间定价。[[Issue #37255](https://github.com/BerriAI/litellm/issues/37255)]

- **Responses→Chat 桥接丢失原生工具调用** — Issue #42005: 多轮回放丢失工具调用并将推理泄漏为 assistant 文本。[[Issue #42005](https://github.com/BerriAI/litellm/issues/42005)]

### 低（已修复）

- **Claude Code 2.1.104 "Extra inputs not permitted"** — Issue #26240: 已解决。[[Issue #26240](https://github.com/BerriAI/litellm/issues/26240)]
- **主密钥错误消息已修正** — Issue #12273: 使用错误主密钥时返回的错误消息不正确；修复进行中。[[Issue #12273](https://github.com/BerriAI/litellm/issues/12273)]

---

## 这对应用开发者意味着什么

1. **速率限制被低估** — 如果你使用团队级每模型限制，在修复上线前会收到约为你配置 RPM/TPM 一半的 429 错误。请密切监控并考虑将限制翻倍。

2. **MCP 工具发现现免于预算检查** — PR #41276 修复了超预算密钥在 MCP 工具发现期间收到 429 的回归问题，提升了代理工作流的可靠性。

3. **UI 现显示缓存节省和路由预测** — PR #42055 和 #42057 带来新的仪表板可见性：可筛选的提示词缓存请求（含注入/节省数据），以及请求卡片上的 Capability/FUSE v2 路由估算。适用于成本优化工作流。

4. **安全加固：停止使用 `sk-1234`** — PR #42011 从发布配置中移除了硬编码主密钥。如果你运行的是演示配置，请确保设置 `LITELLM_MASTER_KEY`，否则部署可能存在安全风险。

5. **多 ChatGPT OAuth 账户仍被阻止** — Issue #23777 仍待解决；单一账户限制仍然存在。运行多个 ChatGPT 订阅的团队需要变通方案或替代路由。

6. **Azure AI 函数工具 + 推理已修复** — PR #42041 将 GPT-5.4+ 函数工具与推理桥接到 Foundry 的 Responses API，解决了 Azure AI 部署上的 400 错误。

7. **Headroom 压缩现可配置** — 如果你使用 Headroom guardrail，现在可以设置 `min_tokens` 阈值来跳过短请求的压缩，减少轻量级聊天的延迟。

---

*基于 2026-09-20 的 GitHub 数据生成。更多上下文请访问 [BerriAI/litellm](https://github.com/BerriAI/litellm)。*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the English digest into Chinese (Simplified Chinese - 简体中文), following the rules provided. I need to translate the entire content while:

1. Keeping all markdown structure exactly the same
2. Keeping URLs, issue/PR numbers, code identifiers as-is
3. Using natural technical Chinese register
4. Not adding any preamble or explanation

Let me translate section by section:

---

# Unsloth 速报 — 2026-09-20

## 今日要点

Unsloth Studio 今日迎来多项 UX 优化，涵盖聊天管理、训练恢复流程和 Hugging Face 数据集集成。缺陷方面，有一个影响 Windows 相对于 Linux 性能的严重回归问题值得关注，同时多个 Qwen 模型的 GGUF/MTP 加载崩溃问题也在持续。ROCm Docker 镜像现已支持 Studio，缩小了与 CUDA 的功能差距。

## 发布与重大变更

过去 24 小时内无新版本发布。

## 新模型与硬件支持

- **ROCm Docker 镜像现已内置 Unsloth Studio** — PR [#11218](https://github.com/unslothai/unsloth/pull/11218) 和 [#11286](https://github.com/unslothai/unsloth/pull/11286) 将 Studio 带入 AMD GPU 用户群体。ROCm Studio 镜像现已包含 JupyterLab、SSH 守护进程和 supervisord，功能与 CUDA 镜像看齐。此外，ROCm 容器现可通过 WSL2 的 DXG 桥接访问 GPU（[#11212](https://github.com/unslothai/unsloth/pull/11212)）。

- **Nixpkgs 打包** — Unsloth Desktop 现已可通过 `nix` 包管理器安装（[#11135](https://github.com/unslothai/unsloth/issues/11135)）。


- **多 GGUF 模型支持** — PR [#10876](https://github.com/unslothai/unsloth/pull/10876) 实现了 Studio 可同时保持多个不同的 GGUF 模型运行，每个模型运行在独立的 `llama-server` 进程中。

- **训练恢复修复** — [#11297](https://github.com/unslothai/unsloth/pull/11297) 修正了训练恢复后的剩余时间计算逻辑。

此前该数值显示严重不准确。PR [#11301](https://github.com/unslothai/unsloth/pull/11301) 通过升级至 `huggingface_hub 1.32` 恢复了历史运行的恢复按钮功能。

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | **Windows 回归 — Linux 速度显著更快**（[#11336](https://github.com/unslothai/unsloth/issues/11336)）| 待处理，2026-09-19 报告 |
| **高** | **Qwen 3.5 FastMTP GGUF 加载器崩溃** — `blk.0.nextn.shared_head_h` 词表维度不匹配（[#11335](https://github.com/unslothai/unsloth/issues/11335））| 待处理 |
| **高** | **Qwen3.8-Flash-Next MTP 加载中止** — 重构后 `nextn.hc_head_norm` 维度不匹配（[#11143](https://github.com/unslothai/unsloth/issues/11143））| 待处理，13 条评论 |
| **中** | **Studio 移除 --tensor-split 参数** — 多 GPU MoE + CPU 卸载场景下导致 OOM（[#11330](https://github.com/unslothai/unsloth/issues/11330））| 待处理 |
| **中** | **Gemma27B GGUF 保存错误** — DGX Spark 仅使用 65GB/128GB RAM 时报错（[#3581](https://github.com/unslothai/unsloth/issues/3581））| 已关闭，近期更新 |
| **低** | **响应标记 '<|turn>model\\n' 未找到**（[#11321](https://github.com/unslothai/unsloth/issues/11321））| 待处理 |

1. **多 GPU MoE 用户**：目前暂时避免通过 Studio 传递 `--tensor-split` 参数，该参数会被过滤并导致 OOM（[#11330](https://github.com/unslothai/unsloth/issues/11330)）。考虑其他内存管理方案。

2. **Windows 用户**：预期推理性能低于 Linux，需等待 [#11336](https://github.com/unslothai/unsloth/issues/11336) 修复。性能敏感场景可考虑切换至 Linux。

3. **Qwen MTP 模型用户**：Qwen 3.5 FastMTP 和 Qwen3.8-Flash-Next 的 GGUF 加载存在维度不匹配问题，生产部署建议等待修复。

4. **Docker AMD 用户**：ROCm + Studio 镜像现已支持完整工作流。更新容器以获取包含 JupyterLab 支持的新镜像。

5. **训练流程**：Studio 中的恢复时间估算缺陷已修复。若需恢复训练运行，请确认预计完成时间现已准确。 I need to complete the table row about "Keep URLs, link targets, code spans..." that was cut off. Looking at the context, this appears to be a continuation of the translation rules, so I should finish that thought and then move to the final instruction about using natural technical Chinese.

For the final paragraph, I need to translate: "Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering."

This translates to: 使用自然的技术中文，即中文开发者通讯的语体风格——而非逐字直译。

Now I'm ready to provide the complete translation output.</think>

# Unsloth 速报 — 2026-09-20

## 今日要点

Unsloth Studio 今日迎来多项 UX 优化，涵盖聊天管理、训练恢复流程和 Hugging Face 数据集集成。缺陷方面，有一个影响 Windows 相对于 Linux 性能的严重回归问题值得关注，同时多个 Qwen 模型的 GGUF/MTP 加载崩溃问题也在持续。ROCm Docker 镜像现已支持 Studio，缩小了与 CUDA 的功能差距。

## 发布与重大变更

过去 24 小时内无新版本发布。

## 新模型与硬件支持

- **ROCm Docker 镜像现已内置 Unsloth Studio** — PR [#11218](https://github.com/unslothai/unsloth/pull/11218) 和 [#11286](https://github.com/unslothai/unsloth/pull/11286) 将 Studio 带入 AMD GPU 用户群体。ROCm Studio 镜像现已包含 JupyterLab、SSH 守护进程和 supervisord，功能与 CUDA 镜像看齐。此外，ROCm 容器现可通过 WSL2 的 DXG 桥接访问 GPU（[#11212](https://github.com/unslothai/unsloth/pull/11212)）。

- **Nixpkgs 打包** — Unsloth Desktop 现已可通过 `nix` 包管理器安装（[#11135](https://github.com/unslothai/unsloth/issues/11135)）。

## 性能与优化

- **多 GGUF 模型支持** — PR [#10876](https://github.com/unslothai/unsloth/pull/10876) 实现了 Studio 可同时保持多个不同的 GGUF 模型运行，每个模型运行在独立的 `llama-server` 进程中。

- **训练恢复修复** — [#11297](https://github.com/unslothai/unsloth/pull/11297) 修正了恢复训练后的剩余时间计算（此前显示严重不准确）。[#11301](https://github.com/unslothai/unsloth/pull/11301) 通过升级至 `huggingface_hub 1.32` 恢复了历史运行记录的 Resume 按钮。

## 稳定性与回归

| 严重程度 | 问题 | 状态 |
|----------|-------|--------|
| **高** | **Windows 回归 — Linux 速度显著更快**（[#11336](https://github.com/unslothai/unsloth/issues/11336)）| 待处理，2026-09-19 报告 |
| **高** | **Qwen 3.5 FastMTP GGUF 加载器崩溃** — `blk.0.nextn.shared_head_h` 词表维度不匹配（[#11335](https://github.com/unslothai/unsloth/issues/11335)）| 待处理 |
| **高** | **Qwen3.8-Flash-Next MTP 加载中止** — 重构后 `nextn.hc_head_norm` 维度不匹配（[#11143](https://github.com/unslothai/unsloth/issues/11143)）| 待处理，13 条评论 |
| **中** | **Studio 移除 --tensor-split 参数** — 多 GPU MoE + CPU 卸载场景下导致 OOM（[#11330](https://github.com/unslothai/unsloth/issues/11330)）| 待处理 |
| **中** | **Gemma27B GGUF 保存错误** — DGX Spark 仅使用 65GB/128GB RAM 时报错（[#3581](https://github.com/unslothai/unsloth/issues/3581)）| 已关闭，近期更新 |
| **低** | **响应标记 '<|turn>model\\n' 未找到**（[#11321](https://github.com/unslothai/unsloth/issues/11321)）| 待处理 |

## 应用开发者需要关注的事项

1. **多 GPU MoE 用户**：目前暂时避免通过 Studio 传递 `--tensor-split` 参数，该参数会被过滤并导致 OOM（[#11330](https://github.com/unslothai/unsloth/issues/11330)）。考虑其他内存管理方案。

2. **Windows 用户**：预期推理性能低于 Linux，需等待 [#11336](https://github.com/unslothai/unsloth/issues/11336) 修复。性能敏感场景可考虑切换至 Linux。

3. **Qwen MTP 模型用户**：Qwen 3.5 FastMTP 和 Qwen3.8-Flash-Next 的 GGUF 加载存在维度不匹配问题，生产部署建议等待修复后再行使用。

4. **Docker AMD 用户**：ROCm + Studio 镜像现已支持完整工作流。建议更新容器以获取包含 JupyterLab 支持的新镜像。

5. **训练流程**：Studio 中的恢复时间估算缺陷已修复。若需恢复训练运行，请确认预计完成时间现已准确。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*