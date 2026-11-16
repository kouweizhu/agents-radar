# AI 基础设施日报 2026-11-16

> 生成时间: 2026-11-16 02:21 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to translate it accurately while maintaining the Markdown structure, tables, and technical content. Let me go through the document carefully.

Key things to preserve:
- All headings
- Tables with formatting
- Lists
- Bold/italic
- URLs
- Code spans
- Issue/PR numbers
- Version tags
- Project names
- Technical terminology

I should use natural Chinese technical register. Let me translate section by section.

Title: AI Infrastructure Ecosystem Digest — 2026-11-16 → AI 基础设施生态系统摘要 — 2026-11-16

Let me work through this carefully.
</think>


# AI 基础设施生态系统摘要 — 2026-11-16

---

## 1. 生态系统总览

AI 推理基础设施层正处于同步成熟与碎片化的并行状态。今天摘要中的每一个项目都在解决同一组核心难题——KV Cache 管理、投机解码可靠性、多模态管线统一化、以及多后端（NVIDIA/AMD/Intel/NPU）一致性——但每个项目的解决路径处于不同的抽象层级，发布节奏也各不相同。**vLLM** 和 **SGLang** 在 KV Cache 可编程性和多后端稳定性方面领先；**llama.cpp** 以新增模型支持的数量继续主导本地/端侧推理场景；**Ollama** 正在巩固其最简自托管 LLM 运行时的定位；**LiteLLM** 作为网关聚合器持续扩展影响力；**Unsloth** 则是本批摘要中唯一面向训练和微调的项目，与其他项目构成互补而非竞争关系。

---

## 2. 活跃度对比

| 项目 | Issues（过去 24 h） | PR 合并/活跃数 | Releases | 值得关注的标记 |
|---------|-------------------:|------------------:|----------|---------------|
| **vLLM** | ~10 个跟踪中；峰值 34 条评论（MI355X 性能） | 10+ 已合并，约 3 个安全/缺陷修复 | 无 | 安全修复已合并（SSRF）；ROCm gfx950 堆叠 PR |
| **SGLang** | 30+ 个总计；368 条评论的 CUDA coredump 追踪帖 | 10+ 开放/已合并 | 无 | SM90 回归修复开放中；NPU AMD 推送；1.0 规划中 |
| **llama.cpp** | 15 个 issues；110 条评论的操作特性请求 | 13 个 PR；144 个 WebGPU 测试通过 | 8 次提交（b12419–b12428，含一次 revert/re-apply 循环） | Jinja 模板循环（revert → 重新应用）；4 个新模型 PR 开放中 |
| **Ollama** | 15 个总计；290 赞的重排序模型请求 | 13 个总计；1 个修复等待 review | 无 | Qwen 解析器缺陷修复已暂存；GCC 15 构建失败开放中 |
| **LiteLLM** | 56 个总计；8 条评论的推理编码缺陷 | ~20 个 PR；3 个特性/修复 PR 开放中 | v1.111.0-dev.4（Sigstore 无密钥 cosign） | 签名 BREAKING CHANGE；3 个流式正确性缺陷活跃中 |
| **Unsloth** | 22 个 issues；3 个 block-compile PR | 137 个总计；今日 10+ | 无（v0.1.917 β 有回归问题） | Block compile 修复；v0.1.917 β mmap 回归问题开放中 |

**数量之王**：llama.cpp（单日 8 次提交、13 个 PR、4 个新模型 PR）
**复杂度之王**：SGLang（Issue 清单最多、多后端推送、1.0 发布规划）
**网关扩张**：LiteLLM（3 个新 provider、流式正确性缺陷、Sigstore breaking change）
**训练专注**：Unsloth（本批摘要中唯一的微调项目；其余均为推理/服务化方向）

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | LiteLLM | Unsloth |
|---------------------|:----:|:------:|:---------:|:------:|:-------:|:-------:|
| **DeepSeek-V4.1-Flash** | ✅ ROCm MI300X preset | ✅（H20 回归问题开放中） | ✅（Vulkan 正确性问题） | — | — | ✅ 编译训练修复 |
| **Qwen3.8 / Qwen4Exp** | ✅ ROCm MI355X 性能工作 | — | — | — | — | ✅ Packing / offload |
| **Qwen3.5 / Qwen3-coder** | ✅ NVFP4 + thinking budget | — | ✅ | — | — | ✅ GRPO + FSDP2 |
| **Qwen3VL** | — | ✅ Chat 模板修复 | ✅ 输出头尺寸 | — | — | — |
| **Mistral Large 4（1T 参数）** | — | ✅ 开放 PR | — | — | — | — |
| **GLM-5.3 / GLM-5.1** | ✅ Rust 多模态 | ✅ A3 cookbook | — | — | — | — |
| **Gemma-4（vision + text）** | — | ✅ `--language-model-only` | — | ✅ Token 预算硬编码 | — | ✅ Tower LoRA + DPO |
| **Raon-1-mini（KRAFTON）** | ✅ 刚刚添加 | — | — | — | — | — |
| **Nemotron 3.5 ASR** | ✅ 流式 ASR 请求 | — | — | — | — | — |
| **MiniMax-M3.1** | — | — | ✅ 刚刚添加 | — | — | — |
| **Zonos3-mini TTS** | — | — | ✅ 刚刚添加 | — | — | — |
| **Inkling 1（多模态）** | — | — | ✅ PR 开放中 | — | — | — |
| **fish audio s2** | — | — | ✅ PR 开放中 | — | — | — |
| **Qoder Cloud Agents** | — | — | — | — | ✅ 刚刚添加 | — |
| **Tripo** | — | — | — | — | ✅ 刚刚添加 | — |
| **Reranking 模型** | — | — | — | ✅ 290 赞的请求 | — | — |

**覆盖广度之最**：llama.cpp（单日新增模型最多：6 个）
**架构覆盖之最**：vLLM（MoE、量化、KV offload 最深入）
**Serving 复杂程度之最**：SGLang（1.0 规划、Unified Memory、Agentic 配方）
**多模态管线深度之最**：vLLM + llama.cpp（两者从不同层级推进多模态）
**微调之最**：Unsloth（本批摘要中独一无二；此处无直接竞争者）

---

## 4. 性能前沿

六个项目的优化工作集中在五个集群：

### KV Cache 工程（vLLM + SGLang）
两个项目正在独立收敛到可编程 KV Cache 分层方案。vLLM 的 V1 调度器 partial prefill 限制（[#57413](https://github.com/vllm-project/vllm/issues/57413)）和 SGLang 的 UnifiedL3 + Mooncake 存储后端（[#46499](https://github.com/unslothai/unsloth/pull/46499)）代表了同一问题的不同解法：Full KV、滑动窗口和循环状态异构 Cache 生命周期的管理。SGLang 的 encoder cache 事件流（[#67030](https://github.com/vllm-project/vllm/pull/67030)）更进一步，将 Cache 状态暴露给外部编排器。两个项目都尚未解决统一的单 Arena 内存池问题。

### 投机解码正确性（vLLM + llama.cpp + Unsloth）
三个独立项目同时出现投机解码正确性回归：
- **vLLM**：Partial prefill 限制导致 V1 调度器准入失败（[#57413](https://github.com/vllm-project/vllm/issues/57413)）
- **llama.cpp**：MoE Cache 命中率在 depth-1 slot 自 #30637 起骤降至 0.6%（[#31421](https://github.com/ggml-org/llama.cpp/issues/31421)）
- **Unsloth**：Qwen3.8-Flash-Next UD 3.1 MTP head 接受率从约 74% 降至生产温度下的 56–66%（[#17402](https://github.com/unslothai/unsloth/issues/17402)）

这是本批摘要中活跃度最高的正确性集群，值得密切关注。

### 多后端量化（vLLM + llama.cpp）
vLLM 的 NVFP4 checkpoint OOM（[#46268](https://github.com/vllm-project/vllm/issues/46268)）和 llama.cpp 的 Vulkan NaN logits 伴随 flash attention（[#31480](https://github.com/ggml-org/llama.cpp/issues/31480)）是同一条量化路径上的独立失败（block-wise FP4/NVFP4 配合 fused attention）。根本原因不同（vLLM：CPU 固定内存分配；llama.cpp：Vulkan kernel 正确性），但生产后果相同——推理结果出错。

### Block / Triton / Inductor 编译（vLLM + Unsloth）
两个项目都在与可变长度（packed/padding-free rows）的编译器捕获问题搏斗。vLLM 移除了 EAGLE block dropping，改为 lookahead hash（[#66234](https://github.com/vllm-project/vllm/pull/66234)），而 Unsloth 通过两个协同 PR 修复了 packed rows 在运行中途卡住的问题（[#17880](https://github.com/unslothai/unsloth/pull/17880)、[#17883](https://github.com/unslothai/unsloth/pull/17883)）。这是一个趋同问题：任何使用 `flash_attn_varlen` 配合 block 编译的引擎都必须处理图捕获边界。

### 分布式 Serving（SGLang + Unsloth）
- **SGLang**：DeepSeek-V4.1-Flash SM 10.0/10.3 权重本地化，PD 分离 Ascend A3 cookbook，Mooncake KV 连接器 debug 模式
- **Unsloth**：180B MoE + Block Swap 在线分词 fork，DDP hub 仅 rank-0 上传，FSDP2 下分词器保存

---

## 5. 层级定位

| 层级 | 项目 | 核心价值 | 当前动态 |
|-------|----------|------------|-------|
| **推理 Serving 引擎**（GPU 加速、生产级） | **vLLM**，**SGLang** | 最高吞吐、KV Cache 控制、分布式 Serving | vLLM：SSRF 安全修复，KV offload RFC。SGLang：SM90 回归修复，Unified Memory 路线图 |
| **本地/端侧运行时**（CPU/GPU/metal/SYCL/Vulkan） | **llama.cpp**，**Ollama** | 可移植性、无服务器部署、硬件支持广泛 | llama.cpp：8 次提交，6 个新模型，Jinja 引擎。Ollama：GGUF 启动配置别名化，macOS launchd |
| **LLM 网关 / 代理**（多 provider 聚合） | **LiteLLM** | 统一 API、成本管理、provider 切换 | Sigstore 签名，流式 TTFT timeout，推理模型编码修复 |
| **训练 / 微调框架** | **Unsloth** | 内存高效 LoRA/QLoRA、编译训练、GRPO/DPO | Block compile 修复，MoE aux loss 梯度恢复，GKD 冻结教师 offloading |

**互补定位观察**：llama.cpp 和 Ollama 是天然搭档（llama.cpp 提供运行时，Ollama 提供部署 UX）。LiteLLM 在生产环境中通常作为 vLLM 和 SGLang 的前端。Unsloth 微调的模型随后部署在 vLLM、SGLang 或 Ollama 上。Unsloth 与其他五个项目之间不存在直接的层级重叠。

---

## 6. 趋势信号

### 信号 1：安全加固提速
两个独立的安全修复同日落地——vLLM 媒体连接器的 SSRF 阻断，以及 LiteLLM 的 Sigstore 无密钥 cosign 迁移。这反映了一个更广泛的转变：随着推理引擎添加多模态内容获取能力，它们正在暴露于对抗性网络输入面前。接下来几周预计会有更多以安全为重点的发布。

### 信号 2：投机解码成为新战场
六个项目中有三个同时出现了投机解码正确性回归。这并非巧合——随着 MTP、block-level draft 和 n-gram 投机在生产部署中激增，model × 量化 × batch size × 后端 的组合爆炸正在暴露潜伏的缺陷。任何依赖投机解码的团队应在路由真实流量之前，以 shadow mode 测试升级。

### 信号 3：多模态管线向 Rust 预处理收敛
vLLM（GLM-5.3-Flash，[#67237](https://github.com/vllm-project/vllm/pull/67237)）和 llama.cpp（zonos3-mini TTS 文本归一化）都在将多模态预处理迁移到 Rust，以消除 Python 路径分歧导致的正确性和性能不一致问题。集成多模态模型的应用开发者应确认其部署工具链已跟上这些管线变更——Python 侧回退路径正在被移除。

### 信号 4：NPU 和 AMD 后端投入激增
SGLang 同日发布了 NPU KT CPU expert offload 和 AMD MI355X Agentic 配方。Unsloth 发现了 ROCm gfx1151 上因 MIOpen 回退导致的 3.1× step time 回归。llama.cpp 有 15+ 个活跃的 Vulkan/Intel Arc 正确性缺陷。这种多后端压力表明，推理生态系统在开发投入上已不再 NVIDIA 一家独大——未来 12 个月，所有项目都会看到大量 AMD/Intel/NPU 一致性工作落地。

### 信号 5：Llama.cpp 的发布速度全面领先
24 小时内 8 次提交，包含一个完整模型家族（Inkling 1 多模态、YuE2-3B、fish audio s2）和一个 WebGPU 里程碑（144 个测试通过），表明 llama.cpp 的贡献者速度在广度上依然无可匹敌。对于需要快速获得新模型支持的团队，llama.cpp 的合并节奏是标杆——但代价是 Vulkan 和 SYCL 后端中更高的回归率。

### 信号 6：SGLang 1.0 将强制一次升级决策
SGLang 的 1.0 发布追踪明确锁定了"静默成功 → 显式报错"的配置变更。对于在生产环境中运行 SGLang 0.5.x 的团队，这是迁移的触发点。1.0 落地时应预留 2–4 周的工程时间来审查升级说明。1.0 还将为 1.x 系列建立兼容性策略——这是 SGLang 此前缺失、企业部署方一直在呼吁的功能。

---

## Agent 和应用开发者本周应关注的事项

1. **监控所有模型的投机解码输出**——尤其是 Qwen3.8-Flash-Next、DeepSeek-V4.1-Flash 和所有 MoE 模型——直到三个开放回归问题解决。
2. **将 LiteLLM 固定到稳定版本**，而非 dev 构建，如果你依赖流式推理的话；`/v1/messages` 编码缺陷和链接使用量低估问题会影响推理模型部署。
3. **暂缓在 Windows 上使用 v0.1.917 β** 运行大模型 GGUFs，直到 forced-mmap 回归问题打补丁。
4. **审视 vLLM 部署中的媒体连接器配置**——SSRF 修复应在 tagged release 中尽快跟进。
5. **开始审查 SGLang 1.0 迁移说明**（[Issue #50045](https://github.com/sgl-project/sglang/issues/50045)），如果你目前运行的是 0.5.x；静默 → 显式的配置变更很可能会破坏现有部署。
6. **追踪 NPU/AMD 后端投入**——SGLang 的 Ascend A3 + DeepSeek-V3.2 cookbook 和 Unsloth 的 ROCm GDN 工作表明，AMD MI355X 和 Intel NPU 在 2–3 个版本内将成为生产级推理目标。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate an English technical report into Simplified Chinese. I need to follow the rules:
- Output ONLY the translation
- No preamble, no explanation, no markdown fences
- Preserve Markdown structure exactly
- Keep URLs, links, code spans, numbers, dates verbatim
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the structure and technical accuracy while making it read naturally in Chinese.
</think>


# vLLM 项目日报 — 2026-11-16

## 1. 今日要点

vLLM 项目今日合并了一个**安全修复**，修复了媒体连接器中的 SSRF 漏洞，该漏洞曾允许未授权访问私有地址/链路本地地址。在 ROCm 方面，针对 MI355X（gfx950）的 Qwen3.8 性能优化工作持续推进中，相关 PR 正在 main 分支上逐步堆叠。V1 调度器的部分 prefill 并发限制正在接受审查，并已有生产环境证据提交。MoE 内核选择正通过基于类的"oracle"结构进行统一重构。

---

## 2. 版本发布与破坏性变更

| 项目 | 描述 | 链接 |
|------|------|------|
| **无新版本发布** | 过去 24 小时内无版本发布。 | — |

**依赖说明**：一个修复 backport（PR [#67827](https://github.com/vllm-project/vllm/pull/67827)）在 v0.33 release 分支上将 `mistral-common` 限制在 1.13 以下，以防止 mistral-common 1.13.0+ 引入的不兼容问题。

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 类型 | 说明 |
|-------------|------|------|
| **Raon-1-mini**（KRAFTON） | 新模型支持 | 通过 PR [#64672](https://github.com/vllm-project/vllm/pull/64672) 新增。28.8B 总参数量 / 4.3B 激活参数量，包含 DFlash2 draft 修复。 |
| **NVIDIA Nemotron 3.5 ASR Streaming**（`nemotron-3.5-asr-streaming-0.6b`） | 功能请求 | Issue [#47455](https://github.com/vllm-project/vllm/issues/47455) — 600M 参数多语言流式 ASR 模型，采用 OpenMDW-1.1 许可证；已申请支持。 |
| **GLM-5.3-Flash** | 多模态更新 | PR [#67237](https://github.com/vllm-project/vllm/pull/67237) 移除了分叉的 Python 预处理路径，要求使用 Rust 预处理以对齐官方 pipeline。 |
| **DeepSeek-V4.1-Flash on MI300X** | 新 ROCm 预设 | PR [#67586](https://github.com/vllm-project/vllm/pull/67586) 新增 MI300X AgentX 预设，包含 12 个 TP8/TP4 工作点。 |
| **Qwen3.5 on Intel XPU** | 移植进行中 | PR [#64687](https://github.com/vllm-project/vllm/pull/64687) 将 Qwen3.5 模型和 MTP 移植到 XPU，采用 eager 可中断图设计。 |

---

## 4. 性能与优化

### 已合并 / 评审中

| 类别 | 详情 | PR / Issue |
|------|------|------------|
| **KV Cache 重构** | 移除 EAGLE block dropping；core prefix caching 及所有 in-tree KV connector 默认切换为 lookahead hashes。 | [#66234](https://github.com/vllm-project/vllm/pull/66234) |
| **SWA 准入修复** | Bugfix：仅对可回收的 held blocks（不含 prefix 共享的 `ref_cnt > 1` 的块）计入 SWA 上限。 | [#66725](https://github.com/vllm-project/vllm/pull/66725) |
| **Mooncake Array API** | 使用 Mooncake v0.3.14 的 `batch_transfer_sync_write_arrays` 消除列表转换开销。 | [#67656](https://github.com/vllm-project/vllm/pull/67656) |
| **Daemons 权重镜像（D2D）** | 第二个副本从已加载的副本填充分片，而非重新读取 checkpoint。 | [#64641](https://github.com/vllm-project/vllm/pull/64641) |
| **Encoder Cache 事件** | 新增 `--ec-events-config` 参数，暴露与 KV cache 事件镜像对齐的事件流，供 cache-aware orchestrator 使用。 | [#67030](https://github.com/vllm-project/vllm/pull/67030) |

### 活跃 Issues

| Issue | 主题 | 状态 |
|-------|------|------|
| [#57149](https://github.com/vllm-project/vllm/issues/57149)（34 条评论） | ROCm MI355X / gfx950 上 Qwen3.8-2.4T 配合 MXFP4 量化的性能优化。计划在 main 分支上堆叠 PR。 | 活跃中 |
| [#57555](https://github.com/vllm-project/vllm/issues/57555) | KV offload DMA/Triton load threshold（`cuMemcpyBatchAsync` vs. Triton kernel）需要 per-device profiling；目前基于 H100 tuning 硬编码。 | 活跃中 |
| [#64824](https://github.com/vllm-project/vllm/issues/64824) | 消除 DeepGEMM runtime-JIT 差距中的 kernel warmup 问题，防止生产推理过程中静默触发 JIT 编译。 | 活跃中 |
| [#41390](https://github.com/vllm-project/vllm/issues/41390) | Llama-Nemotron embedding 在 offline batch-32 pooling 场景下比 vanilla Transformers 慢，即使经过 compile-cache warmup 仍如此。 | 活跃中 |

---

## 5. 稳定性与回归问题

| 严重级别 | Issue | 详情 | 链接 |
|----------|-------|------|------|
| 🔴 **安全** | 媒体连接器 SSRF 漏洞 | CWE-918：媒体连接器会抓取包含 loopback/私有/链路本地地址的 URL。修复已合并：阻断对私有/链路本地 IP 的 SSRF。 | [#67826](https://github.com/vllm-project/vllm/pull/67826)，[#57157](https://github.com/vllm-project/vllm/issues/57157) |
| 🔴 **Bug** | Kimi-K3 退化 token | 长上下文 prefill（~240K tokens）后所有后续请求仅输出单个重复 token（NaN logits，疑似 packed KDA prefill 问题）。 | [#51039](https://github.com/vllm-project/vllm/issues/51039) |
| 🔴 **Bug** | ModelOpt NVFP4 OOM | NVFP4 checkpoint 导致约 52 GiB 固定 CPU 内存分配，在 64GB 系统上即使 0.8B 模型也会 OOM。 | [#46268](https://github.com/vllm-project/vllm/issues/46268) |
| 🟠 **Bug** | GDN Triton/FLA on Hopper（H20） | triton 3.6 下结果错误且不确定；`chunk_scaled_dot_kkt_fwd` 自动调优配置中 BK < K 且 num_warps ≥ 4 的配置存在缺陷。 | [#65385](https://github.com/vllm-project/vllm/issues/65385) |
| 🟠 **Bug** | Qwen2.5-0.5B CUDA 非法内存访问 | 初始化 warmup 阶段因 CUDA 非法内存访问崩溃。 | [#66244](https://github.com/vllm-project/vllm/issues/66244)（已关闭） |
| 🟡 **CI** | NVIDIA Nightly 失败 | 追踪多个 nightly 构建失败（builds #102057、#102399、#102740、#102861）。 | [#67307](https://github.com/vllm-project/vllm/issues/67307) |
| 🟡 **CI** | ROCm 量化分片 | `test_modelopt_nested_mixed_checkpoint` 和 `test_modelopt_mixed_dspark_checkpoint` 在 H200 MIG 35GB 上失败。 | [#67664](https://github.com/vllm-project/vllm/issues/67664)（已关闭） |

---

## 6. 对应用开发者的影响

1. **安全**：如果你将 vLLM 的媒体连接器暴露给不可信输入，请在该修复发布到 release tag 后**立即升级**——SSRF 漏洞可被利用访问内部元数据端点（如 169.254.169.254）。

2. **量化注意事项**：NVFP4 checkpoint 加载存在内存回归，在部分系统上有问题。ModelOpt NVFP4 OOM 问题会影响甚至很小的模型。如果在 warmup 阶段遇到 NVFP4 OOM，这是已知问题，跟踪于 [#46268](https://github.com/vllm-project/vllm/issues/46268)。

3. **长上下文服务**：Kimi-K3 在长上下文 prefill 后的退化 token 问题对 RAG/agent 工作负载影响严重。在问题解决前，避免在 Kimi-K3 上使用超长上下文（>200K tokens）进行 prefill。

4. **GLM-5.3-Flash 用户**：多模态预处理 pipeline 正在转向纯 Rust 实现。请确保你的部署 pipeline 从 [#67237](https://github.com/vllm-project/vllm/pull/67237) 获取变更。

5. **MoE 模型**：MoE oracle 统一工作（[#37753](https://github.com/vllm-project/vllm/issues/37753)）最终将提供更清晰的自定义 MoE 内核扩展点（fp8、nvfp4、mxfp8、mxfp4、unquantized）——插件作者应密切关注此进展。

6. **Transformer v5 兼容性**：Transformer v5 的测试覆盖率缺口正在积极修复中（[#38379](https://github.com/vllm-project/vllm/issues/38379)）；如果在升级 HF 依赖后遇到测试失败，请查看此跟踪器了解已知问题。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Digest report from English to Simplified Chinese. I need to:

1. Translate the content while preserving the Markdown structure
2. Keep URLs, code references, issue/PR numbers, version tags, etc. in their original form
3. Use natural technical Chinese appropriate for a Chinese developer newsletter
4. Output only the translation, no preamble or explanation

Let me translate section by section:

## 1. 今日要点 (Today's Highlights)

## 2. 发布与破坏性变更 (Releases & Breaking Changes)

## 3. 新模型与硬件支持 (New Model & Hardware Support)

## 4. 性能与优化 (Performance & Optimization)

## 5. 稳定性与回归 (Stability & Regressions)

## 6. 对应用开发者的意义 (What This Means for Application Developers)

Let me translate this carefully, maintaining the technical Chinese register.
</think>


# SGLang 每日简报 — 2026-11-16

## 1. 今日要点

SGLang 开发工作仍聚焦于 1.0 发布前的稳定性打磨。当前有两条并行推进的高优先级主线：**统一内存**路线图（Issue #49944）正在推进单一 GPU 显存 arena 统一管理 KV Cache、滑动窗口和递归状态；**SM90 decode 回归**问题（Issue #49336）则通过 PR #49978 积极修复，旨在恢复 Hopper 上的完整 top-k decode 性能。NPU 和 AMD 后端贡献也在激增，其中 KT CPU Expert Offload（PR #50675）和 MI355X agentic recipes（PR #50677）均为今日提交。

---

## 2. 发布与破坏性变更

**过去 24 小时内无发布。**

**SGLang 1.0 发布追踪器**（Issue #50045）是 1.0 稳定版发布的核心规划载体。主要目标包括：

- 将静默的配置变更替换为显式报错，并明确指出具体设置项
- 制定 1.x 系列的兼容性策略
- 夯实现有功能的稳定性
- 可能从 0.5.x 升级时存在一定摩擦

上游团队应密切关注该追踪器，及时了解即将到来的迁移要求。

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | PR / Issue | 状态 | 说明 |
|---|---|---|---|
| **Mistral Large 4** (`mistralai/Mistral-Large-4-1T-A52B`) | PR #47271 | Open | 1T 参数 / 52B 激活量的 MoE 多模态模型；MLA + DSA 稀疏注意力；YaRN 支持 1,048,576 token 超长上下文；跨层 KV 共享 |
| **GLM-5.3 chat template** | Issue #50408 | Open | 按 GLM-5.3 / GLM-5.3-Flash 规范，将消息内容编码为普通文本 |
| **Gemma 4 `--language-model-only`** | PR #49511 | Merged | 将多模态 checkpoint 以纯文本模式加载，跳过编码器 |
| **Ascend A3 + DeepSeek-V3.2** | PR #49167 | Open | 4 节点 PD 分离部署于 A3 的参考手册条目 |
| **Ascend A3 + GLM-5.1** | PR #45655 | Merged | 已将 A3 部署场景添加至 GLM-5.1 参考手册 |
| **NPU KT CPU Expert Offload** | PR #50675 | Open | 实验性 TP=1/EP=1 默认值，显式 TP=2/EP=1 可选启用 |
| **NPU LayerNorm Sequence Parallel** | PR #41496 | Open | 为 Ascend NPU 添加 `--enable-layernorm-sp` 快速路径 |

---

## 4. 性能与优化

### 已合并 / 进行中

| 优化项 | 位置 | 详情 |
|---|---|---|
| **SM90 top-k decode 恢复** | PR #49978 | 在 Hopper 上禁用 DeepSelect decode，使 decode 保持在完整 top-k v2 `select_decode` 路径。直接解决 Issue #49336：DeepSeek-V4.1-Flash 在 H20-3e 上从 v0.5.22 升级至 v0.5.23 后，并发 12 场景下每步延迟增加 33–45%。 |
| **DeepGEMM weight localization** | PR #50608 | 在 SM 10.0 和 SM 10.3 上为 `mega_moe` 启用 DeepGEMM weight localization（NVIDIA 硬件）。 |
| **AMD gfx942 融合 AR + RMSNorm + per-group FP8** | PR #49884 | 在 MI355X（gfx942）上运行融合异步复制（AR）+ RMSNorm + per-group FP8 量化。 |
| **Qwen VL token-space 策略重构** | PR #46413 | 将 Qwen media helpers 和 mRoPE index helpers 重构移入 `multimodal/`。降低耦合度；影响 Qwen2/2.5/3-VL、Qwen3.5、Qwen3-Omni、Qwen4Exp。 |
| **UnifiedL3 + Mooncake 存储后端** | PR #46499 | 将 Mooncake 作为 UnifiedL3 的存储后端，扩展统一 L3 缓存架构。 |

### 待解决性能问题

- **Issue #49336** — SM90 decode 回归已确认：在 H20-3e 上，并发 12（8K–64K 上下文长度）时每步 decode 延迟增加 33–45%。PR #49978 为针对性修复方案。

---

## 5. 稳定性与回归

按用户影响严重程度排序：

| # | Issue / PR | 严重程度 | 摘要 | 修复 PR？ |
|---|---|---|---|---|
| 🔴 Critical | **Issue #26340** | 高 | CUDA coredump 追踪器 — 收集自 `pr-test.yml` 的自动事件。368 条评论表明生产环境持续出现问题。 | 仅追踪 |
| 🔴 Critical | **Issue #22511** | 高 | v0.5.10 双 H100 健康检查失败；GLM-5 上 detokenizer 超时 20s。 | 2026-11-16 已关闭（已失效） |
| 🔴 High | **Issue #50577** | 高 | `DFlashAuxGraph` 保留 per-batch-size 缓冲区，导致 GPU 显存过度增长。 | 暂无 |
| 🔴 High | **Issue #49108** | 高 | Rust 扩展加载器中 `cargo --version` 探测在 launcher spawn 上下文中可能死锁，影响多节点部署。 | 暂无 |
| 🟡 Medium | **Issue #49336** | 中 | SM90 decode 回归 v0.5.22 → v0.5.23：每步延迟增加 33–45%。 | PR #49978 针对此项 |
| 🟡 Medium | **Issue #30209** | 中 | GLM-5.2 FP4 + EAGLE 在 `flashinfer_trtllm` bf16 batched-GEMM 中产生非法内存访问。 | 已关闭（已失效） |
| 🟡 Medium | **Issue #45755** | 中 | Kimi-K3 on SM90：`flashinfer_mxfp4` 静默使用 GPT-OSS SwiGLU 而非 SiTU。 | 已关闭（已失效） |
| 🟡 Medium | **Issue #50348** | 中 | `sgl-router` `/v1/messages` 对 inline `role="system"` 返回 400。 | 2026-11-15 已关闭 |
| 🟡 Medium | **Issue #42110** | 中 | 重放 Codex 对话时，Responses API 中将连续 assistant 消息合并（`_merge_consecutive_assistant_messages`）导致对话被拆分为三个 assistant 块。 | 暂无 |
| 🟢 Low | **Issue #39400** | 低 | Bootstrap HTTP 上未经认证的 PUT `/route` 可导致路由污染。 | 已关闭（已失效） |
| 🟢 Low | **Issue #36859** | 低 | Kimi-K3 高压场景下输出异常。 | 已关闭（已失效） |
| 🟢 Low | **Issue #39838** | 低 | 流式 / tree sessions 在 dev head 上触发"连接池内存泄漏检测"。 | 已关闭（已失效） |

**CI 健康状态**（Issue #17050）：截至 2026-11-16 01:51 UTC — 1 个 broken，10 个 flaky，`main` 上最近已修复 911 个。

---

## 6. 对应用开发者的意义

**近期（未来 2–4 周）：**

1. **v0.5.23 上的 SM90 Hopper 用户**：若在使用 DeepSeek-V4.1-Flash 等模型时观察到并发 12+ 场景下 decode 延迟升高，PR #49978 即为修复方案。请关注该 PR 的合并状态，或手动应用 patch。对生产部署而言，这是一个实质性的回归问题。

2. **DFlash 投机解码**：PR #50608 与 DFlash 显存增长问题（Issue #50577）表明辅助 CUDA graph 路径仍存在不稳定性。在缓冲池修复方案落地之前，生产环境应避免启用 `SGLANG_DFLASH_AUX_GRAPH=1`。

3. **SGLang 1.0 规划**：若当前使用 0.5.x，请开始关注 Issue #50045 中的升级说明。目前静默生效的配置变更将变为显式报错。请预留足够的迁移时间。

4. **NPU Ascend 用户**：KT CPU Expert Offload（PR #50675）和 LayerNorm-SP 支持（PR #41496）仍在实验阶段，进展顺利。对于生产级 Ascend 部署，CUDA 路径仍更为稳定。

5. **多模态 VL 工作负载**：Qwen VL token-space 重构（PR #46413）将 Qwen media helpers 迁移至新位置。若您有自定义集成，请确认没有直接从 `serving/` 或 `layers/` 中导入。

6. **Rust 扩展用户**：多节点部署需留意 `cargo --version` 死锁风险（Issue #49108）。目前尚未合并防御性超时或替代扩展初始化路径，建议关注后续进展。

7. **统一内存**：统一内存计划（Issue #49944）最终将消除 KV 池的固定分区限制。在混合负载（Full KV + SWA + 递归状态混用）场景下有早期需求的用户应密切跟踪；该方案有望大幅简化显存容量规划。

---

*简报数据来源：github.com/sgl-project/sglang，时间范围 2026-11-16。*

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the technical digest from English to Simplified Chinese. I need to:

1. Translate the content maintaining the exact Markdown structure
2. Keep all technical terms, URLs, code references, issue/PR numbers as-is
3. Use natural Chinese technical register
4. Output ONLY the translation, no preamble or explanation
5. No markdown fences around the output

Let me carefully translate this digest section by section.

Key terms to handle:
- "Digest" - 技术简报
- "Highlights" - 今日要闻
- "Releases & Breaking Changes" - 版本发布与破坏性变更
- "New Model & Hardware Support" - 新模型与硬件支持
- "Performance & Optimization" - 性能与优化
- "Stability & Regressions" - 稳定性与回退问题
- "What This Means for Application Developers" - 对应用开发者的影响

Technical terms that should stay as-is or have standard Chinese equivalents:
- llama.cpp (keep as-is, it's a project name)
- GitHub (keep as-is)
- backend → 后端
- PR (keep as-is or use PR)
- commit → 提交
- release → 版本
- breaking changes → 破坏性变更
- flash attention → Flash Attention (or flash注意力机制)
- multimodal → 多模态
- TTS (Text-to-Speech) → TTS (语音合成)
- STT (Speech-to-Text) → STT (语音识别)
- ASR → ASR (自动语音识别)
- pipeline → 流水线
- throughput → 吞吐量
- regression → 回退/回归问题
- Vulkan, SYCL, CUDA, HIP, Metal, OpenCL, WebGPU, etc. - keep as-is

Let me translate section by section:

---

# llama.cpp 技术简报 — 2026-11-16

## 1. 今日要闻

## 2. 版本发布与破坏性变更

## 3. 新模型与硬件支持

## 4. 性能与优化

## 5. 稳定性与回退问题

## 6. 对应用开发者的影响
</think>


# llama.cpp 技术简报 — 2026-11-16

## 1. 今日要闻

本日项目发布了 **b12428** 版本，重新引入了四个 Jinja 模板特性（整除 `//`、位运算、字符串格式化、`min/max` 内置函数），此前经历了一轮短暂的撤销再重新应用的周期。多模态流水线工作占据主导地位：**zonos3-mini TTS**、**higgs v3 STT** 和 **vibevoice-ASR** 于同日合入，同时新增 **MiniMax-M3.1** 支持并修复了 Qwen3VL 输出头尺寸问题。Vulkan/Intel Arc 和 HIP MoE 吞吐量回退问题仍处于活跃状态。

---

## 2. 版本发布与破坏性变更

| 提交 | 概要 | 备注 |
|--------|---------|-------|
| **b12428** | [Jinja: 新增4个缺失特性](https://github.com/ggml-org/llama.cpp/pull/32352) | 整除运算 `//`、位运算、字符串格式化、`min/max` 内置函数；撤销后重新应用 |
| **b12423** | [Revert "jinja: 新增4个缺失特性"](https://github.com/ggml-org/llama.cpp/commit/b12423) | 临时撤销，用于补丁优化 |
| **b12427** | [Server: 跳过路由子节点的 MCP 发现](https://github.com/ggml-org/llama.cpp/pull/32359) | 减少路由拓扑中的启动开销 |
| **b12419** | [Server: 忽略空停止字符串](https://github.com/ggml-org/llama.cpp/pull/32093) | 防止误触发提前终止 |

**本日版本中未检测到 API 破坏性变更。**

---

## 3. 新模型与硬件支持

| 模型 / 特性 | 提交 / PR | 详情 |
|-----------------|-------------|---------|
| **MiniMax-M3.1** | [#32301](https://github.com/ggml-org/llama.cpp/pull/32301) (`b12420`) | 原生模型支持已合入 |
| **Qwen3VL 输出头** | [#32349](https://github.com/ggml-org/llama.cpp/pull/32349) (`b12425`) | 从 tensor 读取输出头尺寸，启用 Qwen3-ForcedAligner（5000 时间戳类别） |
| **zonos3-mini TTS** | [#32020](https://github.com/ggml-org/llama.cpp/pull/32020) (`b12424`) | 完整音频生成流水线，支持声音克隆和文本规范化 |
| **higgs v3 STT** | [#32329](https://github.com/ggml-org/llama.cpp/pull/32326) (`b12426`) | 语音转文字支持 |
| **vibevoice-ASR** | [#32329](https://github.com/ggml-org/llama.cpp/pull/32329) (`b12426`) | 备选 ASR 模型 |
| **Inkling 1**（文本、视觉、音频） | [#32354](https://github.com/ggml-org/llama.cpp/pull/32354) | PR 开放中；全模态系列支持 |
| **YuE2-3B** | [#32369](https://github.com/ggml-org/llama.cpp/pull/32369) | PR 开放中；通过 `llama_model_init_from_user` 加载 mmproj |
| **fish audio s2** | [#32330](https://github.com/ggml-org/llama.cpp/pull/32330) | PR 开放中；Qwen3-4B 主干网络，语义编码 |
| **Zaya1 8B**（Zyphra） | [#32071](https://github.com/ggml-org/llama.cpp/pull/32071) | PR 开放中；修复 CUDA 上 SSM_CONV 问题 |

**本日新增后端支持：**
- OpenCL：[FLASH_ATTN_EXT GMEM kernel](https://github.com/ggml-org/llama.cpp/pull/32302) — 面向 stable-diffusion/FastWan 路径
- WebGPU：[POOL_2D 支持](https://github.com/ggml-org/llama.cpp/pull/32250) — RTX 4090 上全部 144 项测试通过

---

## 4. 性能与优化

| 领域 | 详情 | 参考 |
|------|---------|-----------|
| **SYCL Flash Attention** | 修复 mask 在 heads/batches 维度广播的 MKL 路径；此前在 f16 K/V 上导致 GPU 错误（`UR_RESULT_ERROR_DEVICE_LOST`），q8_0 上产生 NaN | [#31536](https://github.com/ggml-org/llama.cpp/pull/31536) |
| **SpacemiT Flash Attention** | 修复 VLEN=1024 核心（A100/K3）上的空 mask、ALiBi 和 softcap 问题 | [#32182](https://github.com/ggml-org/llama.cpp/pull/32182) |
| **WebGPU POOL_2D** | 连续 F32 输入；可进行基准测试 | [#32250](https://github.com/ggml-org/llama.cpp/pull/32250) |
| **Zonos3-mini TTS** | 音频生成流水线速度优化 | [#32020](https://github.com/ggml-org/llama.cpp/pull/32020) |
| **Jinja 模板** | 位运算和整除运算加速 G2P 处理（如 Kokoro TTS） | [#32352](https://github.com/ggml-org/llama.cpp/pull/32352) |

**尚未修复的回退问题：**
- **HIP MoE prefill**：启用 `--spec-type draft-mtp` 后吞吐量下降约 80%；Vulkan 不受影响（[#31495](https://github.com/ggml-org/llama.cpp/issues/31495)）
- **HIP/gfx906 MoE**：自 #29948 起提示处理速度慢 15–50%（[#31599](https://github.com/ggml-org/llama.cpp/issues/31599)）
- **CUDA Blackwell**：b10655→b11140 之间提示和生成吞吐量回退（[#29341](https://github.com/ggml-org/llama.cpp/issues/29341)）
- **MoE 缓存命中率**：自 #30637 起在 token slot depth=1 时降至 0.6%（[#31421](https://github.com/ggml-org/llama.cpp/issues/31421)）

---

## 5. 稳定性与回退问题

### 严重（设备丢失 / 正确性）
| 问题 | 后端 | 严重程度 | 状态 |
|-------|---------|----------|--------|
| [Vulkan GLM-OCR 在 Arc A380 上输出乱码](https://github.com/ggml-org/llama.cpp/issues/31836) | Vulkan | 🔴 高 | 开放 |
| [Vulkan 在 Radeon 680M 上产生随机 NaN logits](https://github.com/ggml-org/llama.cpp/issues/31509) | Vulkan | 🔴 高 | 开放 |
| [DeepSeek-V4.1-Flash 在 Vulkan + flash attn 下输出乱码](https://github.com/ggml-org/llama.cpp/issues/31480) | Vulkan | 🔴 高 | 开放 |
| [SYCL Arc Pro B70 tensor 崩溃](https://github.com/ggml-org/llama.cpp/issues/27198) | SYCL | 🔴 高 | 已关闭（已失效） |
| [MTP draft 在 AMD RADV 上 DeviceLost](https://github.com/ggml-org/llama.cpp/issues/27306) | Vulkan | 🔴 高 | 已关闭（已失效） |

### 中等（性能 / 正确性）
| 问题 | 后端 | 严重程度 | 备注 |
|-------|---------|----------|--------|
| [MoE 缓存命中回退](https://github.com/ggml-org/llama.cpp/issues/31421) | Metal/CUDA | 🟡 中等 | depth-1 slot 时命中率为 0.6% |
| [Draft-mtp HIP 80% prefill 回退](https://github.com/ggml-org/llama.cpp/issues/31495) | HIP | 🟡 中等 | Vulkan 不受影响 |
| [GPU 推理时 CPU 空闲率高](https://github.com/ggml-org/llama.cpp/issues/29858) | CUDA | 🟡 中等 | 问题定位到提交 `a94d563` |
| [mmproj 首次使用后内存增长](https://github.com/ggml-org/llama.cpp/issues/26873) | CUDA | 🟡 中等 | Glimmer 模型 |
| [A770 在 FFN fusion 下性能下降](https://github.com/ggml-org/llama.cpp/issues/30478) | SYCL | 🟡 中等 | Arc A770 |

### 低（功能性、特性缺口）
- [功能请求：后端缺失的 op](https://github.com/ggml-org/llama.cpp/issues/14909) — 56 条评论，标记为 good-first-issue
- [SYCL PP 性能回退](https://github.com/ggml-org/llama.cpp/issues/30248) — B580 + 5700X3D
- [Hexagon HTP 在 dspqueue 错误时线程退出](https://github.com/ggml-org/llama.cpp/issues/30309) — v75 目标

---

## 6. 对应用开发者的影响

**Intel Arc / Vulkan 用户：** 请谨慎行事 — Vulkan 在 Arc A380、Arc 140V 和 Radeon 680M/890M 上存在多个正确性问题。Flash Attention 在多个问题中被涉及；针对 DeepSeek-V4.1-Flash，禁用 `-fa` 是可行的临时解决方案（[#31480](https://github.com/ggml-org/llama.cpp/issues/31480)）。

**LLM 网关 / server 运维人员：** [路由子节点跳过 MCP 发现](https://github.com/ggml-org/llama.cpp/pull/32359) 减少了路由 server 拓扑的启动延迟。[空停止字符串修复](https://github.com/ggml-org/llama.cpp/pull/32093) 消除了虚假提前终止 — 请检查客户端停止字符串列表中是否有空条目。

**TTS 集成开发者：** zonos3-mini 支持现已上游化，支持声音克隆和文本规范化。b12428 中新增的 Jinja 模板特性（整除、位运算）将使基于 Kokoro 的流水线受益。

**多模态流水线构建者：** 新模型支持（Inkling 1、YuE2-3B、fish audio s2）正通过 PR 陆续合入 — 预计在未来 1–2 个版本中 `llama-mtmd-cli` 能力将显著扩展。

**HIP 性能敏感用户：** 启用 MTP 后 prefill 吞吐量下降 80% 是后端特定问题（Vulkan 不受影响）。如果在 AMD GPU 上依赖推测解码，请关注 [#31495](https://github.com/ggml-org/llama.cpp/issues/31495) 的更新，或在问题修复前禁用 `--spec-type draft-mtp`。

---

*本简报基于 2026-11-16 github.com/ggml-org/llama.cpp 的活动记录生成。所有提交/PR 链接均指向规范仓库 URL。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate an English technical report about Ollama into Simplified Chinese. I need to:

1. Translate all the English text into natural technical Simplified Chinese
2. Preserve all Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, link targets, code spans, numbers, dates, issue/PR references as-is
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers untranslated
5. Use natural technical Chinese register - not literal word-for-word
6. Output ONLY the translation, no preamble or explanation

Let me translate section by section:

**Title**: Ollama Digest — 2026-11-16
→ Ollama 技术速报 — 2026-11-16

**Section 1: Today's Highlights**

The first paragraph:
"Ollama's development activity centers on tooling improvements and bug fixes rather than new releases. A critical parser bug affecting Qwen3.5 and Qwen3-coder tool-call generation has a fix pending review, while the multimodal memory management feature request for configurable `mmproj` headroom signals growing interest in running larger vision models. Community integrations continue to expand, with three new contributors adding reranking, terminal chat, and desktop apps to the ecosystem."

Translation:
今日开发工作以工具优化和缺陷修复为主，未发布新版本。影响 Qwen3.5 和 Qwen3-coder 工具调用生成的解析器关键 bug 已有修复待审，同时关于 `mmproj` 可配置内存余量的功能请求表明社区对运行更大视觉模型的兴趣日增。三位新贡献者带来了重排序、终端聊天和桌面应用等社区集成项目，生态系统持续扩张。

**Section 2: Releases & Breaking Changes**

" | Item | Status | Impact |
|------|--------|--------|
| No releases in last 24h | — | — |

No new versions tagged. Existing stable is v0.40.15."

Translation:


| 项目 | 状态 | 影响 |
|------|--------|--------|
| 过去 24 小时内无发布 | — | — |

无新版本 tag。当前稳定版为 v0.40.15。

**Section 3: New Model & Hardware Support**

I'll translate the technical details about emerging model support and hardware compatibility, focusing on precise technical terminology in Simplified Chinese. The section highlights nuanced hardware and model integration challenges, emphasizing the ongoing efforts to expand Ollama's capabilities across different computational environments.

The translations capture the technical essence of model support, reranking improvements, and compatibility considerations, maintaining the original technical context while expressing it in natural Simplified Chinese technical language.

| 领域 | 详情 | 参考 |
|------|--------|-----------|
| **重排序模型** | 功能请求获得 290+ 票支持，计划原生支持 `bge-reranker-large`、`mxbai-rerank-large-v1` 等交叉编码器 | [#3368](https://github.com/ollama/ollama/issues/3368) |
| **GCC 15 兼容性** | 编译失败，`llama-mmap.h` 中缺少 `uint32_t` 定义——需要升级 `llama.cpp` 以适配 GCC 15 更严格的标

准合规要求 | [#19714](https://github.com/ollama/ollama/issues/19714) |
| **ROCm / AMD Strix Halo** | 修复已合并，确保模型权重不进入 Windows 集显的固定主机内存，解决大模型 OOM 问题 | [PR #19636](https://github.com/ollama/ollama/pull/19636) |
| **MLX-C + XGrammar** | CMake 工作正在进行，允许打包者独立提供 MLX-C 和 XGrammar 二进制文件 | [PR #19688](https://github.com/ollama/ollama/pull/19688) |

## 性能与优化

VRAM 管理和上下文切换成为当前重点改进领域。开发团队正在处理复杂的多 GPU 场景，特别关注模型驱逐、负载分配和内存管理的细微技术细节。通过精细的 RoPE（旋转位置编码）幅度控制，团队力求在内存受限环境中实现更高效的模型推理。

关键改进包括固定内存管理、多 GPU 资源分配和上下文处理策略，旨在解决现有系统在资源调度方面的局限性。团队正在系统性地优化内存使用，确保推理过程中的稳定性和性能。

新增配置选项允许开发者更精细地控制内存缓冲和日志生成，提升了系统的灵活性和可观测性。这些增强为复杂推理场景提供了更可控的技术基础。

关键系统稳定性问题集中在工具调用和资源管理方面。不同复杂度的错误状态显示了系统仍在持续优化和修复潜在缺陷，需要开发团队重点关注并发和流处理机制。

资源泄漏和版本兼容性问题尤其值得关注，特别是针对不同模型和编译环境的适配。系统在高负载场景下的稳定性和错误处理机制仍有改进空间。

端口绑定和编译兼容性是当前最直接的挑战，需要开发团队快速响应和修复。

多 GPU 推理场景下的模型加载可靠性成为性能优化重点。

对于 Qwen3.5/coder 的工具调用功能，建议在生产环境中谨慎处理流式工作负载，待 PR 合并后再进行大规模应用。长期运行的流式应用需要特别关注资源管理和潜在内存泄漏问题，特别是涉及 ChatHandler 和 GenerateHandler 的场景。

视觉模型在 Gemma4 上的图像令牌预算硬编码限制，意味着高分辨率图像可能被意外截断，目前尚无运行时解决策略。重排序功能请求获得最高票数支持，为构建检索增强生成管道提供了潜在的社区解决方案。

多 GPU 推理场景下，VRAM 会计修复将显著提升模型加载可靠性。API 参数如 `logprobs` 和 `top_logprobs` 已正式文档化，为获取令牌级概率数据提供了标准化支持。

系统性能和稳定性持续优化中，用户可期待更流畅的推理体验。
</think>


# Ollama 技术速报 — 2026-11-16

## 1. 今日要点

今日开发工作以工具优化和缺陷修复为主，未发布新版本。影响 Qwen3.5 和 Qwen3-coder 工具调用生成的解析器关键 bug 已有修复待审，同时关于 `mmproj` 可配置内存余量的功能请求表明社区对运行更大视觉模型的兴趣日增。三位新贡献者带来了重排序、终端聊天和桌面应用等社区集成项目，生态系统持续扩张。

---

## 2. 版本与破坏性变更

| 项目 | 状态 | 影响 |
|------|--------|--------|
| 过去 24 小时内无发布 | — | — |

无新版本 tag。当前稳定版为 v0.40.15。

---

## 3. 新模型与硬件支持

| 领域 | 详情 | 参考 |
|------|--------|--------|
| **重排序模型** | 功能请求获得 290+ 👍，计划原生支持 `bge-reranker-large`、`mxbai-rerank-large-v1` 等交叉编码器 | [#3368](https://github.com/ollama/ollama/issues/3368) |
| **GCC 15 兼容性** | 构建失败，`llama-mmap.h` 中 `uint32_t` 未定义——需更新 `llama.cpp` 以适配 GCC 15 更严格的标准合规要求 | [#19714](https://github.com/ollama/ollama/issues/19714) |
| **ROCm / AMD Strix Halo** | 修复已合并，确保模型权重不进入 Windows 集显的固定主机内存，解决大模型 OOM 问题 | [PR #19636](https://github.com/ollama/ollama/pull/19636) |
| **MLX-C + XGrammar** | CMake 工作允许打包者独立提供 MLX-C 和 XGrammar 二进制文件 | [PR #19688](https://github.com/ollama/ollama/pull/19688) |

---

## 4. 性能与优化

| 类别 | 变更 | 参考 |
|----------|--------|-----------|
| **VRAM 统计与 GPU 分配** | 修复模型错误驱逐、加载拒绝、不必要的多卡分散等问题（解决 #19463、#18679、#18349、#16599） | [PR #19632](https://github.com/ollama/ollama/pull/19632) |
| **Context Shift RoPE** | 修复使用 `--context-shift` 时 KV Cache 移位过程中的幅度累积问题；保持每次移位的 RoPE 中性 | [PR #19680](https://github.com/ollama/ollama/pull/19680) |
| **mmproj 内存余量** | 提议将 1 GiB 安全余量从硬编码改为可配置 | [#19407](https://github.com/ollama/ollama/issues/19407) |
| **API 文档** | `/api/generate` 和 `/api/chat` 的 `logprobs` 和 `top_logprobs` 参数现已写入文档 | [PR #19710](https://github.com/ollama/ollama/pull/19710) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **高** | Qwen3.5 / Qwen3-coder 解析器根据内容与流式分块情况损坏或丢弃工具调用参数 | Open；修复待审 | [PR #19705](https://github.com/ollama/ollama/pull/19705) |
| **高** | 流式处理器（`generate/chat/push`）在客户端断开时泄漏 goroutine 和 runner 信号量槽位 | Open | — |
| **中** | Gemma4 视觉编码器硬编码 `max_soft_tokens=280`；图像 token 预算不可配置 | Closed；功能请求已记录 | — |
| **中** | `mimo-v2.6:9b` 返回的 `tool_calls` 中 `function.arguments` 为空 | Closed | — |
| **中** | Anthropic `/v1/messages` 将 `xhigh` 映射为 `high`，导致依赖 `xhigh` 的 Qwen3.8 聊天模板出错 | Open | — |
| **低** | 端口 11434 绑定失败（重复报告） | Open | — |
| **低** | GCC 15 构建失败（`llama-mmap.h` 中 `uint32_t` 未定义） | Open | — |

---

## 6. 对应用开发者的意义

1. **Qwen3.5/coder 的工具调用**：如果您在这些模型上使用结构化工具调用，请在 [PR #19705](https://github.com/ollama/ollama/pull/19705) 合并前暂停在生产环境中使用流式工作负载——参数损坏与内容相关，测试中可能不易察觉。

2. **长时间运行的流**：客户端断开时 `ChatHandler` 和 `GenerateHandler` 会泄漏 goroutine。对于具有扩展流式会话的代理应用，请监控内存使用情况，并在补丁发布前考虑定期重启服务。

3. **Gemma4 上的视觉模型**：硬编码的 280 token 预算意味着高分辨率图像会被静默截断。目前尚无运行时解决方案。

4. **RAG 管线**：重排序功能请求（[#3368](https://github.com/ollama/ollama/issues/3368)）仍是得票最高的 issue。若当前需要重排序功能，通过 [PR #19706](https://github.com/ollama/ollama/pull/19706) 添加的社区项目 **tiebreak** 提供了一个 CPU 运行的 Cohere/Jina 兼容接口，可在 Ollama 旁运行。

5. **多 GPU 推理**：[PR #19632](https://github.com/ollama/ollama/pull/19632) 中的 VRAM 统计修复应能减少多 GPU 配置下的错误驱逐事件——该 PR 合入后请关注模型加载可靠性的改善。

6. **API 完整性**：`logprobs` 和 `top_logprobs` 现已正式文档化，为获取 token 级概率数据用于排序或置信度评分提供了受支持的路径。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the English technical digest into Simplified Chinese while preserving the Markdown structure, URLs, code references, and using natural technical Chinese register.
</think>


# LiteLLM 每日速报 — 2026-11-16

## 1. 今日要点

LiteLLM 发布了两个补丁版本（v1.111.0-dev.3/4），将签名方式迁移至 **Sigstore 无密钥签名**（GitHub OIDC），弃用了旧的 `cosign.pub` 密钥 —— 用户必须更新验证命令。在 PR 侧，一个针对 Anthropic `/chat/completions` 端点的重要修复暴露了此前被丢弃的 `mcp_tool_use` 块，同时新增了路由器超时参数（`stream_ttft_timeout`），可在提供商迟迟不发出首个 token 时防止客户端无限等待。

---

## 2. 版本发布与破坏性变更

| 版本 | 变更 | 影响 |
|---|---|---|
| **v1.111.0-dev.4** | 签名迁移至 Sigstore 无密钥方式（GitHub OIDC） | **破坏性变更** — `cosign verify --key ...` 不再可用；需改用无密钥验证命令。dev.3 已被替代。 |
| v1.111.0-dev.3 | 部分发布 — 已被 dev.4 替代 | 无需处理；使用 dev.4 即可。 |

---

## 3. 新增模型与硬件支持

- **LM Studio 自动检测上下文窗口** — 新功能提案（[#36948](https://github.com/BerriAI/litellm/issues/36948)），通过查询 LM Studio 原生的 `/api/v0/models` 和 `/api/v1/models` 元数据端点来自动获取模型上下文窗口，从此无需再为自托管模型手动指定 `max_input_tokens`。
- **DeepSeek Fetch 工具** — PR [#50618](https://github.com/BerriAI/litellm/pull/50618) 新增了 `litellm.fetch` / `litellm.afetch` 及对应的代理路由，支持 DeepSeek 的 fetch 工具（Search 此前已有）。
- **Qoder Cloud Agents** — PR [#50041](https://github.com/BerriAI/litellm/pull/50041) 将 Qoder Cloud Agents 接入 Interactions API，支持异步文本、流式及会话续接；通过常规模型别名对外暴露，凭证留存在服务端。
- **Tripo** — PR [#50839](https://github.com/BerriAI/litellm/pull/50839) 为 Tripo（中国区 + 全球区）新增原生代理路由和异步计费支持。

---

## 4. 性能与优化

| PR | 领域 | 详情 |
|---|---|---|
| [#51974](https://github.com/BerriAI/litellm/pull/51974) | **Router** | 新增部署/请求级别的 `stream_ttft_timeout` 参数，限制首个 token 的等待时间；当提供商保持连接活跃但不发出 token 时，防止无限阻塞 |
| [#51935](https://github.com/BerriAI/litellm/issues/51935) | **Cache** | Bug：`Cache.get_cache_key()` 在哈希前将完整请求体序列化（含 base64 图片）—— 对 200+ MB 的图片请求，这会阻塞事件循环数秒；修复进行中 |
| [#51900](https://github.com/BerriAI/litellm/issues/51900) | **语义缓存** | Bug：`redis-semantic` / `qdrant-semantic` / gptcache 在余弦相似度约 0.9749 时，返回跨请求的 `tool_calls` 参数（动态 ID 不同但内容相似） |
| [#36124](https://github.com/BerriAI/litellm/issues/36124) | **Cache** | 功能：支持为 `valkey-semantic` 后端设置自适应相似度阈值（默认静态 0.8 对变化请求模式表现欠佳） |

---

## 5. 稳定性与回归问题

### 高危
| # | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| [#36114](https://github.com/BerriAI/litellm/issues/36114) | **流式响应使用量严重统计不足**（链式代理场景：Front-Proxy → Upstream-Proxy → Bedrock）；根因在流聚合层 | ✅ 已关闭 | — |
| [#51452](https://github.com/BerriAI/litellm/issues/51452) | **`ModelNotMappedError`** 发生在 `litellm/utils.py` — 自动生成的 bug 报告，无请求数据 | 进行中 | — |
| [#27144](https://github.com/BerriAI/litellm/issues/27144) | **ChatGPT/Codex Responses 流式传输丢失函数调用参数** — 模型发出 `response.function_call_arguments.done` 但无 deltas | 进行中 | — |

### 中危
| # | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| [#32357](https://github.com/BerriAI/litellm/issues/32357) | **`/v1/messages` 适配器错误编码推理模型** — `thinking_delta` 被嵌入文本块 + 重复 `message_start` → Anthropic SDK / Claude Code 中内容为空 | 进行中 | — |
| [#48401](https://github.com/BerriAI/litellm/issues/48401) | **流式传输丢失 OpenRouter 仅含 `reasoning_details` 的块**（Claude 签名、加密推理） | 进行中 | — |
| [#41792](https://github.com/BerriAI/litellm/issues/41792) | **切换模型后 Bedrock 拒绝加密推理** — `encrypted_content_affinity` 将共享 API 基址的部署视为兼容 | 进行中 | — |
| [#46209](https://github.com/BerriAI/litellm/issues/46209) | 使用 `mistral-medium-3.5` 处理工具结果（>500 字符）后出现 **str/list 拼接 TypeError** | 进行中 | — |
| [#37108](https://github.com/BerriAI/litellm/issues/37108) | **仅管理员路由的拒绝返回 401 而非 403**，Prometheus 标签错误 | 进行中 | — |
| [#36941](https://github.com/BerriAI/litellm/issues/36941) | **预算重置时计数器和重置时间戳状态分裂** — 后续失败导致跨两个时间窗口的账务状态混乱 | 进行中 | [#40940](https://github.com/BerriAI/litellm/pull/40940) |

### 已修复的重要问题
- **#34328** — `unpack_defs` 在递归高扇入工具 schema（Bedrock & Vertex）上挂起 — 已关闭
- **#47607** — `encrypted_content_affinity` 在故障部署上形成陷阱，导致重试循环 — 已关闭
- **#36309** — `Router(cache_responses=True, cache_kwargs={'type': 'disk'})` 静默创建内存缓存 — 已关闭
- **#35775** — VSCode 原生 Model-Provider 兼容性问题 — 已关闭
- **#27947** — Anthropic thinking 块转换为 OpenAI 格式时丢失 `reasoning_content` — 已关闭

---

## 6. 对应用开发者的影响

1. **检查 CI/CD 签名验证流程** — 若你通过 cosign 验证 LiteLLM 发布产物的签名，请立即切换至 Sigstore 无密钥验证方式，否则下一个稳定版发布时构建将失败。

2. **关注流式可靠性** — 当前有两个活跃 bug 影响流式正确性：(a) `/v1/messages` 路径的推理模型可能返回空内容，(b) OpenRouter 仅含推理的块被静默丢弃。如果你的推理模型经过 LiteLLM 走流式，请密切监控输出，或等待修复上线后再启用流式。

3. **流式超时安全网** — Router 上新增的 `stream_ttft_timeout` 直接针对"保持连接但不发出 token"的提供商场景。在生产环境启用此参数，可以让客户端等待时间有界，并在超时后可预测地触发降级。

4. **图片密集型 Agent 的缓存键开销** — 缓存键计算与 payload 大小呈线性关系。对于反复发送大 base64 图片的 Agent，这会成为一个 CPU 事件循环瓶颈。请关注 issue [#51935](https://github.com/BerriAI/litellm/issues/51935) 以获取修复进展。

5. **预算核算的边界情况** — 若你使用项目级或终端用户预算限制配合 Redis 消费计数器，请在重置时留意状态分裂问题（[#36941](https://github.com/BerriAI/litellm/issues/36941)）；PR [#40940](https://github.com/BerriAI/litellm/pull/40940) 为修复方案。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the technical digest from English to Simplified Chinese. I need to:

1. Output ONLY the translation, no preamble or explanation
2. Preserve all Markdown structure (headings, tables, lists, etc.)
3. Keep URLs, numbers, dates, code, version tags, issue/PR numbers verbatim
4. Keep project names, repository slugs, usernames, etc. in original form
5. Use natural technical Chinese suitable for a Chinese developer newsletter

Let me translate section by section carefully:

**Title**: Unsloth Digest — 2026-11-16 → Unsloth 每日摘要 — 2026-11-16

Let me go through each section:

## 1. Today's Highlights

"Block compilation received two coordinated PRs" - 需要注意 PR 在中文技术文档中通常保持 PR 的形式
"Long-standing issues" - 长期存在的问题
"packed/padding-free rows dropping out of compiled graphs" - packed/padding-free rows 从编译图中脱落
"vision models stalling mid-run" - vision 模型在运行中途卡住
"Native GGUF launch configuration selection via API model aliases" - 通过 API 模型别名原生支持 GGUF 启动配置选择
"multi-config workflows" - 多配置工作流

## 2. Releases & Breaking Changes

表格需要准确翻译
"Regression" - 回归问题
"Regression in v0.1.917" - v0.1.917 中的回归问题
"Forces mmap even with explicit --load-mode none" - 即使显式指定 --load-mode none 也会强制使用 mmap
"excessive RAM/SSD usage" - 过度的内存/SSD 占用
"Downstream projects" - 下游项目


"No new releases published today" - 今日无新版本发布

## 3. New Model & Hardware Support

DeepSeek-V4.1 的编译训练卡死问题已解决，16 位合并布局在发布检查点上运行，fp4 全量微调可用。Qwen3.8-Flash-Next 的打包、文本 SFT 和 KV 缓存处理得到改进，GDN 操作修复了拒绝采样问题。gated-query attention 张量并行奇偶校验测试完成，Qwen3 4B GRPO 在 FSDP2 上的属性错误已修复。

Gemma-4 和视觉任务的 LoRA 加 DDP 全量微调正常工作，DPO 参考适配器默认使用 find_unused=False。ROCm 的 MIOpen 回退在 gfx1151 上被识别，HIP 门控增加 3.1 倍步长时间开销。macOS CLI 的新启动代理可保持 Studio 在终端关闭后继续运行。

性能方面，打包行现在保持在编译图中，闪存 varlen 得到保留，消除了打包开销。视觉训练不再卡顿，步时间从 116 秒降至接近基线水平。非可重入试验前向被排除以防止 MoE 门计数损坏，辅助损失梯度得到恢复。

对于 epoch 运行中的映射风格数据集，打包默认启用以提高 GPU 利用率。冻结教师模型保持在训练 GPU 之外以避免 OOM，私有副本在 rank 0 上运行以防止并发写入冲突。DPOTrainer 不再因混合张量类型而崩溃。

在 180B MoE 上，训练器太大无法分叉时会直接在进程内进行分词以防止 OOM。

关键问题包括 v0.1.917 β 中的 mmap 回归导致 200-400 MB 内存泄漏，AMD RX 6700S 硬件检测失败，Qwen3.8-Flash-Next UD 3.1 的 MTP 头接受率下降约 8-18 个百分点。Gemma-4 视觉微调现已可靠。

打包修复消除了 40-140 秒的中途运行卡顿，epoch 基础 SFT 现在默认打包以提高 GPU 利用率，DeepSeek-V4.1 编译训练已解除阻塞，冻结量化教师的 GKD 在多 GPU 设置下现已可行。使用 Qwen3.8-Flash-Next 进行推测解码时，草案接受率预计会下降。

macOS CLI 用户应更新到新的启动守护进程代理以防止任务终止，而 NVIDIA 和 Intel Arc 的多 GPU 混合供应商设置存在风险，需要监控内存泄漏情况。
</think>


# Unsloth 每日摘要 — 2026-11-16

## 1. 今日要点

Unsloth 后端今日有多项重要的 CI 和正确性修复上线：v0.1.917 β 中有一个严重回归问题（即使指定 `--load-mode none` 仍强制使用 `mmap`）被发现并通过相关修复部分解决；block 编译收到两个协同的 PR，修复了 packed/padding-free rows 从编译图中脱落以及 vision 模型在运行中途卡住的长期问题。DeepSeek-V4.1 编译训练不再卡死，团队还通过 API 模型别名原生支持了 GGUF 启动配置选择，适用于多配置工作流场景。

---

## 2. 版本发布与破坏性变更

| 项目 | 详情 | 状态 | 链接 |
|------|------|------|------|
| **v0.1.917 β 回归问题** | 即使显式指定 `--load-mode none` 仍强制使用 `mmap`，导致大体积 GGUF（Qwen3.8-Flash-Next EXL3 4.05 bpw，97 GiB）在 Windows AMD Ryzen AI Max+ 395 上内存/SSD 占用过高 | **待修复 bug** | [#17605](https://github.com/unslothai/unsloth/issues/17605) |

**今日无新版本发布。** 使用 v0.1.917 β 的下游项目请关注 mmap 回归问题，修复 PR 尚未合入。

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 变更内容 | PR / Issue |
|-------------|----------|------------|
| **DeepSeek-V4.1** | 原生支持上线；编译训练卡死问题已解决，16 位 merged layout，fp4 全量微调支持 | [#17881](https://github.com/unslothai/unsloth/pull/17881) |
| **Qwen3.8-Flash-Next (Qwen4Exp)** | 打包/text SFT，packed rows 上禁用 KV cache，GDN op 修复，offload_layers 拒绝采样 | [#17827](https://github.com/unslothai/unsloth/pull/17827) |
| **Qwen3.5 / Qwen3-Next** | Gated-query attention tensor parallel 奇偶校验测试 | [#17870](https://github.com/unslothai/unsloth/pull/17870) |
| **Qwen3 4B GRPO + FSDP2** | 修复首次 loss forward 时 `AttributeError: 'FSDPCommContext' object has no attribute 'all_gather_copy_in_stream'` | [#17875](https://github.com/unslothai/unsloth/pull/17875) |
| **Gemma-4 + Vision** | Tower LoRA + DDP 全量微调正常运行；DPO ref adapter 默认 `find_unused=False` | [#17867](https://github.com/unslothai/unsloth/pull/17867) |
| **AMD ROCm (gfx1151)** | GDN causal conv1d 识别需回退到 MIOpen；HIP gate 导致 step 时间增加 3.1 倍 | [#17734](https://github.com/unslothai/unsloth/issues/17734) |
| **AMD RX 6700S (gfx1032)** | Windows 11 上 0.1.917 β 无法识别该 GPU — 调查中 | [#17874](https://github.com/unslothai/unsloth/issues/17874) |
| **Intel SYCL + 多 GPU** | Studio VRAM 规划器查询 `nvidia-smi` 而非 Intel Arc SYCL 设备，导致 context 容量被错误限制 | [#17787](https://github.com/unslothai/unsloth/issues/17787) |
| **macOS CLI (launchd)** | 新增可选的 launchd 代理，终端关闭后保持 Studio 运行 | [#17879](https://github.com/unslothai/unsloth/pull/17879) |

---

## 4. 性能与优化

| 领域 | 变更内容 | 数据指标 | PR |
|------|----------|----------|-----|
| **Block 编译 — packed rows** | Packed 和 padding-free rows 现在保留在编译图中（flash varlen 保留）；此前每个 packed row 都会退化为非编译 forward | 消除 padding-free SFT 的打包开销 | [#17883](https://github.com/unslothai/unsloth/pull/17883) |
| **Block 编译 — vision** | Vision 训练不再在 steps 11 和 26（`gemma-4-E2B-it`）时中途卡住 40–140 秒；单个 graph 现在可处理 padded 和 unpadded micro batches | 116 s → 接近基线的 step 时间 | [#17880](https://github.com/unslothai/unsloth/pull/17880) |
| **Block 编译 — 非可重入 trial** | Trial forward 不再被 transformers output capture 捕获；防止 MoE gate 计数损坏 | Gate 路由正确性恢复 | [#17872](https://github.com/unslothai/unsloth/pull/17872) |
| **SFT 打包** | 当 `packing`、`padding_free` 和 `max_steps` 均未设置且为 epoch 运行时，map-style 数据集默认启用打包 | 无需用户修改配置 | [#17884](https://github.com/unslothai/unsloth/pull/17884) |
| **MoE router aux loss** | 在 Unsloth gradient checkpointing 下恢复梯度；此前 aux loss 值有记录但梯度被丢弃 | Grad norm: 0.0261 → 0.0486（step 1，`gpt-oss`） | [#17873](https://github.com/unslothai/unsloth/pull/17873) |
| **GKD frozen teacher** | Teacher 现在保持在训练 GPU 之外；避免 2× T4 上 4-bit teacher 的 OOM / 拒绝运行 | 4-bit teacher 在独立 GPU 上可运行 | [#17876](https://github.com/unslothai/unsloth/pull/17876) |
| **Tokenizer save DDP/FSDP2** | 移动到正确位置前在每个 rank 创建私有副本；消除并发写入导致的 `JSONDecodeError` | 并行保存安全 | [#17862](https://github.com/unslothai/unsloth/pull/17862) |
| **DDP hub upload** | `push_to_hub` 现在仅在 rank 0 执行；消除重复提交 | 每次保存一个 commit | [#17868](https://github.com/unslothai/unsloth/pull/17868) |
| **Tensor parallel DPO** | 使用 PEFT + TP 时 `DPOTrainer` 不再因 `aten.copy_.default got mixed torch.Tensor and DTensor` 而崩溃 | DPO + TP + LoRA 可用 | [#17886](https://github.com/unslothai/unsloth/pull/17886) |
| **在线 tokenization fork** | 当 trainer 过大无法 fork 时（180B MoE + Block Swap）在进程内进行 tokenize；防止 step 1 前 OOM | 180B MoE + Block Swap 可行 | [#17701](https://github.com/unslothai/unsloth/pull/17701) |

---

## 5. 稳定性与回归问题

| 严重程度 | Issue | 描述 | 修复 PR |
|----------|-------|------|---------|
| 🔴 **Critical** | [#17605](https://github.com/unslothai/unsloth/issues/17605) | **0.1.917 β 回归问题**：即使指定 `--load-mode none` 仍强制使用 `mmap`；导致 Windows AMD Ryzen AI Max+ 395 上 97 GiB GGUF 每次运行后残留 200–400 MB 内存泄漏和过度 SSD 写入 | 尚未合入 |
| 🔴 **Critical** | [#17874](https://github.com/unslothai/unsloth/issues/17874) | AMD RX 6700S (gfx1032) 在 Windows 11 上 0.1.917 β 无法识别 | 调查中 |
| 🟠 **High** | [#17402](https://github.com/unslothai/unsloth/issues/17402) | Qwen3.8-Flash-Next UD 3.1 GGUFs vs 当前 MTP heads：生产温度下 draft acceptance 从 ~74% 降至 56–66% | 尚未计划 3.1 匹配的 MTP heads |
| 🟠 **High** | [#17787](https://github.com/unslothai/unsloth/issues/17787) | 自定义 SYCL llama.cpp 在多 GPU（NVIDIA + Intel Arc）上读取了错误的 GPU VRAM；context 容量被错误限制 | 调查中 |
| 🟡 **Medium** | [#14487](https://github.com/unslothai/unsloth/issues/14487) | 潜在内存泄漏：Drive C 每次使用后丢失 200–400 MB，且无清除残留数据的方法 | 持续调查中 |
| 🟡 **Medium** | [#17734](https://github.com/unslothai/unsloth/issues/17734) | ROCm GDN causal conv1d 在 gfx1151 上回退到 MIOpen；HIP gate 导致 step 时间增加 3.1 倍 | Triton kernel 正确；ROCm gate 逻辑需修复 |
| 🟢 **Low** | [#17773](https://github.com/unslothai/unsloth/issues/17773) | iOS "Add to Home Screen" 显示文字图标而非 logo（`index.html` 缺少 `apple-touch-icon`） | 修复方案已确定 |
| 🟢 **Low** | [#17716](https://github.com/unslothai/unsloth/issues/17716) | 尽管支持 Image models 但无法选择编辑 | 调查中 |

---

## 6. 对应用开发者的影响

### 立即行动项
- **在 Windows AMD 硬件上处理大体积 GGUF 部署时避开 v0.1.917 β**：直到强制 mmap 回归问题解决前，使用 v0.1.916 或关注 [#17605](https://github.com/unslothai/unsloth/issues/17605) 等修复版本。
- **多配置 GGUF 工作流**：API 模型别名现已支持（[#17885](https://github.com/unslothai/unsloth/pull/17885)）：例如同一个 GGUF 可以通过 OpenAI 兼容 API 在 96k context + q5_1 KV cache 配置和短 context + ngram 推测解码配置之间切换。

### 近期机遇
- **Vision 微调现已可靠**：`padding_free=True` 和 `packing=True` 配合使用是安全的——block 编译修复（[#17880](https://github.com/unslothai/unsloth/pull/17880)、[#17883](https://github.com/unslothai/unsloth/pull/17883)）消除了 Gemma-4 和混合打包场景下的中途卡顿。
- **Epoch 运行的 SFT 现在自动打包**：如果你的 map-style 文本数据集没有显式设置打包，Unsloth 现在会在 epoch 运行时自动打包，无需修改任何配置即可提升 GPU 利用率。
- **DeepSeek-V4.1 编译训练已解除阻塞**：如果之前因 Inductor 卡死问题受阻，[#17881](https://github.com/unslothai/unsloth/pull/17881) 已修复并包含完整的 fp4 全量微调支持。
- **GKD + 冻结量化 teacher 在多 GPU 上现已可行**：teacher 保持在训练 GPU 之外，消除了 2× T4 级别硬件上的 OOM 问题。

### 需关注的风险
- **Qwen3.8-Flash-Next 推测解码**：如果使用 UD 3.1 GGUFs 的 MTP draft heads，生产温度下 draft acceptance 预计下降 8–18 个百分点；考虑回退到 greedy 解码或等待 3.1 匹配的 heads（[#17402](https://github.com/unslothai/unsloth/issues/17402)）。
- **macOS CLI 用户**：如果有定时任务，请更新到 [#17879](https://github.com/unslothai/unsloth/pull/17879) 中的新 launchd 代理，防止终端关闭后任务中断。
- **混合供应商多 GPU 配置**（NVIDIA + Intel Arc）：VRAM 规划器目前读取了错误的设备，可能导致 context 分配不足或 offload 错误（[#17787](https://github.com/unslothai/unsloth/issues/17787)）。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*