# AI 基础设施日报 2026-11-13

> 生成时间: 2026-11-13 02:51 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate the entire English technical report into Simplified Chinese, maintaining all formatting exactly as specified.
</think>



# AI 基础设施生态全景双周报
**2026-11-13 | 资深分析师视角**

---

## 1. 生态总览

AI 推理技术栈正处于多线并行的成熟期。服务引擎（vLLM、SGLang）正围绕 Blackwell 和 AMD CDNA 架构展开激烈竞争，同时努力修复近期功能迭代中引入的各类回归问题；llama.cpp 在吸收上游改进的同时正在重建其内存管理模型；LiteLLM 正在通过 Rust 重写强化其多租户计费路径；Unsloth Studio 则在本地化 / 微调层面持续打磨。今天的共同主线是：**正确性与性能正在正面竞争** —— 多个项目在交付可观的吞吐提升的同时，也背负着影响生产部署的未解决正确性问题。

---

## 2. 各项目活跃度对比

| 项目 | 公开 Issues | PR 总数 | 24h 内 Release | 活跃的 Severity-1 Bug |
|---------|--------------|------------|----------------|----------------------|
| **vLLM** | ~160 条报告 | ~500 条近期活跃 | **无** | 🔴 2 个（DeepGEMM sm_120 崩溃、EngineDeadError TDX） |
| **SGLang** | ~23 条报告 | ~196 条总计 | **无** | 🔴 2 个（Hopper 解码回归、GLM-5.3 NaN logits） |
| **llama.cpp** | ~11 条报告 | ~27 条 24h 内 | **b12340**（SSRF 修复） | 🔴 1 个（YaRN 上下文位移幅度 bug） |
| **Ollama** | ~11 条报告 | ~27 条 24h 内 | **无** | 🔴 1 个（Strix Halo 容器内显存回归） |
| **LiteLLM** | ~10+ 条报告 | ~15 条 24h 内 | **v1.110.0-rc.2** | 🔴 2 个（百万倍计费超收、Redis 预算绕过） |
| **Unsloth** | ~23 条报告 | ~196 条总计 | **无** | 🔴 1 个（Qwen 混合模型提示词重复处理循环） |

**关键观察：**
- 过去 24 小时内，没有任何 serving 引擎发布了新版本——所有项目同时处于开发周期中。
- llama.cpp 和 LiteLLM 是仅有的两个拥有新构建 tag 的项目；其余项目均在未发布开发分支上。
- 整个生态当前共有 **8 个** 公开的 🔴 级别 issue，表明年底前存在可观 correctness 债务积累。

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---------------------|------|--------|-----------|--------|---------|
| **DeepSeek-V4 / V4.1（NVIDIA）** | ✅ SM8x 开发中（#50576） | — | — | — | — |
| **DeepSeek-V4.1（AMD gfx942）** | ✅ 融合解码器（#60153） | ✅ MORI EPv2（#44492） | — | — | — |
| **Qwen3.8 Flash-Next** | ✅ NVFP4、MXFP4 MoE | ✅ ROCm QK-norm+RoPE 融合 | — | — | ✅ UD 3.1 Engram 精度 UI |
| **Gemma 4** | ✅ 批次无关矩阵乘法 1.76× | — | ✅ F32 位置编码修复 | — | ✅ UD 3.1 请求 |
| **Kimi K3** | — | ✅ RFC 开放中（#49536） | — | — | — |
| **GLM-5.3 Flash** | ✅ 基础支持 | ⚠️ CUDA Graph 失效；NaN logits bug | — | — | — |
| **GigaChat 3.5（432B MoE）** | — | — | ✅ MLA+MoE 混合架构 | — | — |
| **FLUX.3（图像生成）** | — | — | — | — | ✅ bf16-as-stored 在 12 GB 显存上 |
| **Zaya1 8B** | — | — | ✅ SSM_SCAN + Vulkan 修复 | — | — |
| **RAON-1-mini-preview** | — | — | ✅ HF→GGUF + 推理 | — | — |
| **Nemotron 3.5 ASR** | ✅ 流式推理请求开放中 | — | — | — | — |
| **HunyuanVL** | — | — | ✅ 强制 F32 位置编码 | — | — |
| **MiniMax-H3 / H3-Image** | — | ✅ 合成 VAE 瓦片解码 | — | — | ✅ 融合 RMSNorm+RoPE + VAE |
| **Ascend NPU** | — | ✅ NPU Kimi K3 禁用 cutedsl | — | — | RFC 开放中 |
| **AMD gfx950 / MI355X** | ✅ 2 个活跃追踪项 | ✅ MegaMoE AITER 后端 | — | — | — |
| **Blackwell SM120** | ✅ NVFP4 FlashInfer b12x 内核 | — | — | — | — |

**领先者评估：**
- **vLLM** 在 NVIDIA Blackwell NVFP4 和 Ampere SM8x 前沿覆盖上领先。
- **SGLang** 在 AMD 异构计算（MORI、MegaMoE、ROCm 融合内核）上领先。
- **llama.cpp** 在架构多样性（Hexagon、Vulkan SSM_SCAN、SYCL AOT >4 GB、OpenVINO、MUSA）上领先。
- **Unsloth** 在多模态扩散 + 转录音频的本地 Studio UI 上领先。

---

## 4. 性能前沿

优化工作集中在四个集群：

**A. KV Cache 与内存管理**

| 项目 | 举措 | 阶段 |
|---------|-----------|--------|
| vLLM | TP 无关 KV 卸载（跨 TP 共享） | 开发中（#61886） |
| vLLM | CUDA Checkpoint/Restore 近乎零冷启动（RFC） | RFC（#34303） |
| llama.cpp | 惰性 VRAM 分配（按需动态增长） | PR（#32170，多后端） |
| llama.cpp | 图元数据页惰性分配（减少 RSS） | 已发布（b12322） |
| Unsloth | `--load-mode none` 惰性张量统计 | 已修复（#17607） |
| SGLang | 仅在 fork 点做 Mamba 状态检查点 | 已合并（#49886） |

**B. 量化与内核选型**

| 项目 | 举措 | 指标 |
|---------|-----------|--------|
| vLLM | NVFP4 FlashInfer b12x 内核选型（SM120） | 各解码 shape 均更快 |
| vLLM | 批次无关矩阵乘法（Gemma 4 E2B/E4B） | **并发 1 时 1.76× 吞吐** |
| llama.cpp | NVFP4 将 w_s scale 融合进 prefil 尾端 | 微基准测试评审中 |
| llama.cpp | CUDA MMA FA 中融合 q8_0/q4_0/f8_e4m3 KV 反量化 | 消除独立反量化 pass |
| SGLang | HiSparse 结构化稀疏数据平面 | 新 KV 后端 |
| SGLang | DFLASH 验证：TP>1 时对 all-gather 的 logits 做 top-k | 投机质量提升 |
| Unsloth | H3/H3-Image 融合 q/k RMSNorm + RoPE | 与 stock eager 位精确等价 |

**C. 批处理与调度**

| 项目 | 举措 | 指标 |
|---------|-----------|--------|
| SGLang | 层级优先 prefill（每 token chunk 先处理全部层再进下一 chunk） | Dense MoE 上 **~2× prefill** |
| llama.cpp | 调度上下文在 split 时右对齐（right-sizing） | 减少过度分配 |
| vLLM | 批次无关特征 pass 1（Gemma 4） | **并发 128 时 1.21×** |
| LiteLLM | Rust router-core：用量计数 → 原生存储 | 推进中 |
| Ollama | MLX 自适应历史保留（内存压力下） | 更好地利用 headroom |

**D. 分布式 / 分解式服务**

| 项目 | 举措 | 阶段 |
|---------|-----------|--------|
| vLLM | CUDA Checkpoint/Restore RFC | 早期 RFC |
| vLLM | TP 无关 KV 卸载 | 开发中 |
| SGLang | PP 序列化前先物化嵌套输出元数据 | 已合并（#49116） |
| LiteLLM | Redis key 构造迁移至 Rust store 层 | PR 开放中（#50356） |

---

## 5. 层级定位

| 层级 | 项目 | 定位 |
|-------|----------|-------------|
| **Serving Engine**（高吞吐、分布式、生产级） | **vLLM**、**SGLang** | 两者均面向云端部署，支持张量并行、流水线并行、投机解码、KV 卸载。vLLM 在 Blackwell NVFP4 上领先；SGLang 在 AMD 异构硬件上领先。 |
| **本地推理运行时**（边缘、桌面、消费级 GPU） | **llama.cpp**、**Ollama** | llama.cpp 是底层引擎（C++/CUDA/Metal/Vulkan/Hexagon 等）；Ollama 在其上封装了 UX、模型管理和 REST API。Ollama 的 MLX runner 原生面向 Apple Silicon。 |
| **LLM 网关 / 代理层**（多租户、路由、可观测性） | **LiteLLM** | 定位在 serving 引擎之上；提供统一 API、成本追踪、认证和 OTel 可观测性。Rust router-core 迁移表明正在向生产级多租户路由推进。 |
| **微调 / 训练层**（数据集准备、训练循环、LoRA/QLoRA） | **Unsloth Studio** | 定位为微调层，带有桌面 UI；封装了 Transformers 和 llama.cpp 后端。独特之处在于面向需要本地定制模型的非工程师用户。 |
| **专业化方向** | SGLang（Agent/MCP）、vLLM（spec decode）、llama.cpp（内核可移植性） | 各有专长：SGLang 主攻 tool calling 和 MCP；vLLM 主攻投机解码；llama.cpp 主攻最大硬件可移植性。 |

**竞争边界变迁：** LiteLLM 的 Rust router-core 迁移是最重要的跨层事件——一旦完成，LiteLLM 将在请求路径中拥有更大比例的原生控制权，减少对 Python 路由的依赖，提升网关层吞吐。基础设施团队应密切关注。

---

## 6. 趋势信号

### 信号一：Blackwell 已至，但 Bug 也随之而来
两个项目在 NVIDIA Blackwell 上存在活跃的 🔴 问题（vLLM 的 DeepGEMM sm_120 断言失败、SGLang 的 GLM-5.3 NaN logits）。sm_120 架构在各项目的生产路径上尚未稳定。**基础设施团队的决策点：** 如果你在 B200/B100 上通过 vLLM 运行 FP8，必须停在 v0.23.0，直到 v0.24.x 补丁上线。

### 信号二：AMD ROCm 正在弥合差距
Qwen3.8 在 MI355X/gfx950 上有 vLLM（2 个追踪项）和 SGLang（MORI EPv2、MegaMoE、QK-norm+RoPE 融合）协调推进。这是最清晰的信号，表明 AMD MI300 系列正在成为一级推理目标。**计划部署 AMD 容量 的基础设施团队应密切跟踪这些 PR**——ROCm 后端进展很快，但正确性尚未达到 CUDA 后端的水平。

### 信号三：投机解码正在扩散，但仍然脆弱
vLLM 的 FLy、SGLang 的 DFlash、llama.cpp 的 MTP、Ollama 的 draft-dflash 均处于活跃状态，但均背负开放中的正确性问题（接受率漂移、NaN logits、prompt logprobs 损坏、提示词重复处理循环）。**运营商的心理模型** 应该是：投机解码处于生产就绪的边缘，而非生产默认选项。在高风险管道中启用前务必仔细验证。

### 信号四：Rust 正在蚕食 Python 中间层
LiteLLM 的 router-core Rust 迁移（#50862、#50356、#51388、#51383）和 vLLM 的 Rust 前端工作（#66540 stop string 支持）是两个独立但收敛的运动。推理技术栈正缓慢地将热路径重写为 Rust 以提升正确性和吞吐。**在 API 层集成的 Agent 和应用开发者** 应验证 Python 回调钩子和中间件模式在 Rust 路径中仍然得到支持。

### 信号五：多架构 KV Cache 是下一个重大基础设施故事
vLLM 的 TP 无关 KV 卸载（#61886）和 llama.cpp 的惰性 VRAM 分配（#32170）都在解决同一个根本问题：**KV Cache 是一种跨 TP 尺寸、后端和内存层级共享的异构资源**。这是分解式服务、多租户 KV 共享和高效上下文窗口利用的前提条件。请将这些 PR 视为分解式推理架构的领先指标。

### 信号六：正确性债务正在积累
在全部六个项目中，今天共有 **8 个活跃的 🔴 级别问题**。对于单日快照而言异常高，表明功能的快速迭代正在超出回归测试的覆盖能力。**基础设施团队** 应将当前 `main` / `master` 分支视为高于正常水平的风险状态，并对生产部署评估使用固定版本或 LTS 追踪（LiteLLM v1.108.7 LTS）。

### 信号七：多租户网关中的计费正确性是真实风险
LiteLLM 的 #48398（百万倍计费超收）和 #34238（Redis 预算绕过）都是计费关键问题，可能导致收入损失或客户纠纷。任何将 LiteLLM 用作成本控制代理的团队都应针对这些模式审计其当前配置，尤其是在路由至非美元计价 provider 时。

---

*跨项目全景报告，编译日期 2026-11-13。数据来源为所有五个仓库加 Unsloth Studio 的 GitHub 活动记录。所有 issue/PR 编号均对应其各自仓库。*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese while following specific rules. Let me translate this carefully, maintaining the structure and technical accuracy.
</think>


# vLLM 项目日报 — 2026-11-13

---

## 1. 今日要点

vLLM 社区正在多架构性能优化上持续发力：AMD ROCm 平台上 MI355X（gfx950）上 Qwen3.8 的优化进展迅速，堆叠了多个 PR；而 NVIDIA 侧 Blackwell SM120 的 NVFP4 内核工作也在推进中，新内核选型策略已倾向于 FlashInfer b12x 而非 CUTLASS。一份关于 CUDA Checkpoint/Restore 实现近零冷启动的草案（#34303）预示着 disaggregated serving 方向即将展开，batch-invariance 特性也在持续成熟，Gemma 4 E2B/E4B 矩阵计算调优已合入。过去 24 小时内无新版本发布，但有 500 个 PR 和 160 个 issue 保持活跃。

---

## 2. 版本发布与破坏性变更

**无** — 过去 24 小时内无新版本发布。

---

## 3. 新模型与硬件支持

| 项目 | 详情 | 链接 |
|------|------|------|
| **DeepSeek-V4-Flash on SM8x（Ampere）** | 正在积极开发以支持 DeepSeek-V4-Flash 及 DeepSeek-V4-Flash-0731 在 A100/A800 上的运行；当前受限于 SM8x 兼容性而受阻 | [#50576](https://github.com/vllm-project/vllm/issues/50576) |
| **NVIDIA Nemotron 3.5 ASR 流式推理** | 新功能请求：支持 NVIDIA 的 600M 参数多语言流式 ASR 模型（`nemotron-3.5-asr-streaming-0.6b`），采用 OpenMDW-1.1 许可证 | [#47455](https://github.com/vllm-project/vllm/issues/47455) |
| **GLM 5.3** | 性能优化工作已启动；底层使用与 GLM-5.2 相同的 `glm_moe_dsa` 实现 | [#57406](https://github.com/vllm-project/vllm/issues/57406) |
| **Qwen3.8 on AMD gfx950 / MI355X** | 两条活跃追踪线（#57149、#59575），分别覆盖 Flash-Next 和 A95B 变体，支持 MXFP4 MoE；PR 栈正在推进中 | [#57149](https://github.com/vllm-project/vllm/issues/57149), [#59575](https://github.com/vllm-project/vllm/issues/59575) |
| **XPU MXFP8 Linear** | PR #66494 修复了 XPU MXFP8 内核在 3D→2D reshape 时与 Transformers 后端的兼容性问题 | [#66494](https://github.com/vllm-project/vllm/pull/66494) |

---

## 4. 性能与优化

### 已合入 / 审核中（PR）

| PR | 领域 | 详情 |
|----|------|------|
| **#67202** | NVFP4 内核选择（SM120） | Blackwell 上 NVFP4 W4A4 线性层优先使用 FlashInfer b12x 而非 FlashInfer CUTLASS；在所有实测形状上均更快 | [#67202](https://github.com/vllm-project/vllm/pull/67202) |
| **#67351** | Batch-Invariant Matmul（Gemma 4） | 为 Gemma 4 E2B/E4B 的 BF16 MLP 形状调优，`VLLM_BATCH_INVARIANT=1` 下：**并发1时吞吐量提升 1.76×**，**并发128时提升 1.21×** | [#67351](https://github.com/vllm-project/vllm/pull/67351) |
| **#60153** | DeepSeek-V4.1 AMD（gfx942） | 在 V4.1 AMD 解码器中完成 gfx942 mHC 接缝融合；将 64 token 阶段的多个 AITER 和 Triton 启动消除 | [#60153](https://github.com/vllm-project/vllm/pull/60153) |
| **#66593** | FLy 投机解码 | 归一化 top-k 熵门（除以 `log(k)`）；支持 FLy 成本叠加与合成接受率 | [#66593](https://github.com/vllm-project/vllm/pull/66593) |
| **#64646** | NVFP4 微基准测试 | 新增 `benchmark_nvfp4_small_m.py`，覆盖 FlashInfer CUTLASS/b12x/cuDNN/CuTe DSL、native b12x、Marlin、Humming 在 Qwen3.8-27B 解码形状上的性能 | [#64646](https://github.com/vllm-project/vllm/pull/64646) |
| **#66138** | Prefix Cache / DSpark | 为 DSpark 兄弟 prompt 启用共享 Mamba 检查点；多模块 MTP guard 的单 token 前缀预填充 lookahead | [#66138](https://github.com/vllm-project/vllm/pull/66138) |

### 进行中（Issue）

| Issue | 领域 | 详情 |
|-------|------|-------|
| **#27433** | Batch Invariance | 系统性优化工作；Gemma 4 调优（#67351）已合入；更多模型家族将陆续跟进 | [#27433](https://github.com/vllm-project/vllm/issues/27433) |
| **#61886** | TP-agnostic KV Offloading | 跨 TP-size 共享的规范化 KV offloading；需要 PR review 和覆盖项的协助 | [#61886](https://github.com/vllm-project/vllm/issues/61886) |
| **#65560** | Humming → Marlin 替换 | RFC：用 Humming（SM80 时代产物）在各 NVIDIA 架构上全面替换 Marlin；Humming 覆盖 INT4/INT8 GPTQ/AWQ、FP8、MXFP8、MXFP4、NVFP4、MXFP6 | [#65560](https://github.com/vllm-project/vllm/issues/65560) |
| **#54477** | 直接 Weight Reload（RL训练） | 在 17 个旗舰模型家族中标准化直接 reload；验证并修复隐性的 MLA 权重陈旧问题 | [#54477](https://github.com/vllm-project/vllm/issues/54477) |
| **#34303** | CUDA Checkpoint/Restore（RFC） | 通过 CUDA C/R 实现近零冷启动的 RFC；范围限定在 v1 engine；目标场景为多模型服务和弹性部署 | [#34303](https://github.com/vllm-project/vllm/issues/34303) |

---

## 5. 稳定性与回退

> **严重程度：** 🔴 严重 · 🟠 高 · 🟡 中 · 🔵 低

| 严重程度 | Issue | 概要 | 状态 |
|----------|-------|---------|--------|
| 🔴 **严重** | [#45268](https://github.com/vllm-project/vllm/issues/45268) | 使用 `--kv-offloading-backend native` + `--enable-sleep-mode` 时，L1 休眠/唤醒循环后抛出 `EngineDeadError`；v0.22.1，TP=2/PP=2，跨 RTX 3090 | Open |
| 🔴 **严重** | [#47130](https://github.com/vllm-project/vllm/issues/47130) | **v0.23.0 → v0.24.0 回退**：DeepGEMM 在 Blackwell（sm_120）FP8 内核预热时报"Unknown recipe"断言；阻塞所有 B200/B100 上的 FP8 服务 | Open，8 👍 |
| 🟠 **高** | [#53130](https://github.com/vllm-project/vllm/issues/53130) | 调度器在高负载下停止接收新请求；延迟 backlog 持续增长，但引擎报告健康 | Open |
| 🟠 **高** | [#57224](https://github.com/vllm-project/vllm/issues/57224) | Confidential Computing（TDX）模式下 GPU 产生静默垃圾输出；V2 model runner 对 pinned host memory 的 UVA 视图存在数据陈旧；**临时方案**：设置 `VLLM_USE_V2_MODEL_RUNNER=0` | Closed（临时方案已记录） |
| 🟠 **高** | [#44806](https://github.com/vllm-project/vllm/issues/44806) | Qwen3.5 397B NVFP4 DEP8：混合 prefill-decode 步骤在 8×B200 上比纯 decode 步骤慢 **6×** | Open |
| 🟠 **高** | [#48266](https://github.com/vllm-project/vllm/issues/48266) | **ROCm/gfx942**：序列长度超过 2048 token 时触发 GPU 内存访问错误（worker 崩溃）；DeepSeek V4 flash 架构，sparse_attn_indexer + fp8 KV，MI325X TP=4 | Open |
| 🟠 **高** | [#53488](https://github.com/vllm-project/vllm/issues/53488) | 启用 MTP 投机解码时 `prompt_logprobs` 静默损坏（Qwen3.5 家族，chunked prefill） | Closed |
| 🟡 **中** | [#43226](https://github.com/vllm-project/vllm/issues/43226) | `EngineCore` 崩溃：`_update_from_kv_xfer_finished` 中断言 `req_id in self.requests` 失败，原因是 KV connector 为已中止/已释放的请求报告了完成传输 | Open |
| 🟡 **中** | [#66407](https://github.com/vllm-project/vllm/pull/66407) | **[修复 PR]** 当请求经历多个 partial-tail 边界交接时引擎崩溃；`_build_partial_tail_store_jobs` 中的断言失败 | Open（修复 PR） |
| 🟡 **中** | [#46461](https://github.com/vllm-project/vllm/pull/46461) | **[修复 PR]** TurboQuant fast-path 在与首 chunk prefill 一起的 continuation 请求中丢失了 cached prefix K/V | Open（修复 PR） |
| 🔵 **低** | [#67061](https://github.com/vllm-project/vllm/pull/67061) | **[修复 PR]** 启用投机解码时，`min_p` 和 `logit_bias` 被错误地以 HTTP 400 拒绝；Model Runner V2 实际已支持 | Open（修复 PR） |

---

## 6. 对应用开发者的影响

| 要点 | 详情 |
|----------|--------|
| **Blackwell FP8 用户：升级受阻** | v0.24.0 在 sm_120 上存在 DeepGEMM 回归，导致 B200/B100 上的 FP8 服务无法运行。暂时停留在 v0.23.0 或等待补丁发布。 |
| **机密计算用户：切换到 V1 runner** | V2 model runner 在 TDX/CC 模式下会产生静默垃圾输出。在修复发布前请设置 `VLLM_USE_V2_MODEL_RUNNER=0`。 |
| **DeepSeek-V4 on Ampere：暂不可用** | SM8x 上 DeepSeek-V4-Flash 的支持正在积极开发中（#50576）。如果目前需要在 A100/A800 上使用 V4，可能需要等待或关注该 issue 的进展。 |
| **Gemma 4 部署获得 batch-invariant 加速** | 开启 `VLLM_BATCH_INVARIANT=1` 后，Gemma 4 E2B/E4B 在低并发下吞吐量提升最高达 1.76×，对交互式服务场景意义重大。 |
| **投机解码特性持续扩展** | FLy 投机解码现已支持归一化熵阈值（#66593），`min_p` / `logit_bias` 支持也在恢复中（#67061）—— 更灵活的投机配置即将到来。 |
| **Rust API 兼容性逐步完善** | `/inference/v1/generate` 正在获得 stop string 支持（#66540）和 `output_mode="text"`（#67359），与 Python 前端的差距进一步缩小。 |
| **AMD ROCm 路线图活跃** | 在 MI325X/MI355X 上运行的用户，Qwen3.8 和 DeepSeek-V4.1 的优化正在合入；AMD 生态正在获得更多一等公民待遇。 |
| **关注：KV offloading 协调** | TP-agnostic KV offloading（#61886）正在推进；完成后将支持跨不同 tensor parallelism 规模的引擎共享 offloaded KV——这与多租户和 disaggregated 场景密切相关。 |

---

*本日报基于过去 24 小时内 GitHub 上的活动数据生成，日期：2026-11-13。*

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate this English technical report about SGLang into Simplified Chinese. Let me go through the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate section by section:

Title: "SGLang Daily Digest — 2026-11-13" → "SGLang 每日摘要 — 2026-11-13"

Let me work through the content carefully, maintaining all formatting and using natural Chinese technical register.
</think>


# SGLang 每日摘要 — 2026-11-13

## 1. 今日要点

SGLang 项目正在积极解决 **Hopper 上的 decode 回归问题**（v0.5.22→v0.5.23 在并发 12 时每步耗时增加 33–45%），同时推进 Rust 服务端栈的后续工作。在基础设施层面，一个长期积累的 CI/不稳定测试跟踪 issue（#42752）已有 208 条评论，团队还在处理混合注意力模型和 HiCache/Mooncake 集成中的多个正确性 bug。

---

## 2. 版本发布与破坏性变更

| 项目 | 详情 |
|------|---------|
| **暂无新版本** | 过去 24 小时内无 tag 发布。 |
| **SGLang 1.0 路线图追踪** | Issue #50045 已开启，用于追踪即将发布的 1.0 稳定版。该版本将巩固现有功能、将静默的配置变更替换为显式报错，并为 1.x 系列定义兼容性策略。从 0.5.x 升级可能需要做一些改动。 |

---

## 3. 新模型与硬件支持

| 类别 | 项目 | PR / Issue |
|----------|------|------------|
| **Kimi K3 decode** | RFC 讨论（#49536），涉及 FlashInfer 重用和单节点 B300/SM103、TP8 场景下混合长 prefill 与 cache 恢复的集成范围。 | [#49536](https://github.com/sgl-project/sglang/issues/49536) |
| **AMD MORI EPv2** | MORI EPv2 在 AsyncLL 内核上的 dispatch/combine，面向 DeepSeek-V4 在 AMD 上的 TBO 优化。 | [#44492](https://github.com/sgl-project/sglang/pull/44492) |
| **AMD MegaMoE** | 新增 `--moe-a2a-backend megamoe` 选项，支持 AITER `MegaMoEGfx1250`，在 gfx1250 上实现 fused dispatch/combine。 | [#48097](https://github.com/sgl-project/sglang/pull/48097) |
| **ROCm Qwen3 prefill** | 通过 JIT 在 ROCm 上实现 fused QK-norm + RoPE 内核，将每层 5 次 kernel launch 合并为 1 次。 | [#47052](https://github.com/sgl-project/sglang/pull/47052) |
| **NPU Kimi K3** | 在 NPU 上禁用 cutedsl 加载（暂不支持）。 | [#50215](https://github.com/sgl-project/sglang/pull/50215) |
| **NPU diffusion** | MindIE-SD 量化注意力集成到 Ascend FA，用于 MiniMax-H3。 | [#46029](https://github.com/sgl-project/sglang/pull/46029) |
| **MUSA FLA kernel** | 修复 MUSA Triton 中 `TRACK_STATE` constexpr 拆分问题。 | [#50214](https://github.com/sgl-project/sglang/pull/50214) |
| **GLM-5.3-Flash** | Bug 报告：`--enable-hisparse` 启动失败，原因是 `HybridLinearKVPool` 缺少 `register_mapping`。 | [#50030](https://github.com/sgl-project/sglang/issues/50030) |

---

## 4. 性能与优化

| 领域 | 变更 | 详情 | PR / Issue |
|------|--------|---------|------------|
| **HiCache 后端数据平面** | 新功能 | 新增 HiSparse 后端数据平面，支持 KV Cache 结构化稀疏。 | [#49473](https://github.com/sgl-project/sglang/pull/49473) |
| **Mamba 状态检查点** | 优化 | 仅在 fork 点和请求结束时对混合 Mamba 状态做检查点，减少因内部检查点造成的设备/状态内存浪费。 | [#49886](https://github.com/sgl-project/sglang/pull/49886) |
| **GreedyDual-Size 驱逐策略** | 新策略 | 可选 `--radix-eviction-policy gds`，为混合模型提供更优的 Mamba 状态驱逐决策。 | [#50122](https://github.com/sgl-project/sglang/pull/50122) |
| **Kimi K3 q6 准备阶段** | 受并发约束 | Q6 准备阶段现自动受解析后的服务端并发限制约束。 | [#49376](https://github.com/sgl-project/sglang/pull/49376) |
| **AMD prefill 开销** | 降低主机开销 | Unified-KV prefill 元数据每 forward 只构建一次；复用 CP gather index；在 gfx1250 上 store verify KV 时无需拷贝。 | [#48093](https://github.com/sgl-project/sglang/pull/48093) |
| **HiCache/HF3FS 页回收** | Bug 修复 | 在确认时回收重复页面，修复并发写入场景下的资源泄漏。 | [#45061](https://github.com/sgl-project/sglang/pull/45061) |
| **DFLASH verify** | 可选性能优化 | 对采样批次（TP > 1）通过 all-gathered logits 进行 top-k 验证。 | [#46080](https://github.com/sgl-project/sglang/pull/46080) |
| **PP 嵌套元数据** | 修复 stall | 在序列化前物化嵌套输出元数据，避免长上下文 PP 请求时出现 stall。 | [#49116](https://github.com/sgl-project/sglang/pull/49116) |
| **Cache 命中率回归** | 调查中 | HiCache + Mooncake 场景下八轮后出现可复现的 prefix cache 命中率瞬时下降。 | [#47481](https://github.com/sgl-project/sglang/issues/47481) |

---

## 5. 稳定性与回归

| 严重程度 | Issue | 描述 | 状态 |
|----------|-------|-------------|--------|
| 🔴 **严重** | #49336 | **Hopper decode 回归**：v0.5.22→v0.5.23 在 8×H20（SM90）并发 12 时每步 decode 时间增加 33–45%。`use_deep_select_decode` 在 Hopper 上也带来了 acceptance 开销。 | Open |
| 🔴 **严重** | #49881 | **GLM-5.3-Flash NaN logits**：CUDA graph padding 边界（bs-9→bs-10）后所有后续请求的 logits 固定为 NaN。与 #48964、#49274、#43514 相关。 | Open |
| 🟠 **高** | #42752 | **CI 不稳定**：208 条评论追踪 `PR Test Base` / `PR Test Extra` 流程中反复出现的 CI 基础设施失败和不稳定测试问题。 | Open |
| 🟠 **高** | #48593 | **CUDA graph 捕获失败**：混合线性注意力模型（`HybridLinearAttnBackend`）在 `_replay_metadata` 处报 `IndexError`。 | Open |
| 🟠 **高** | #49796 | **Qwen-VL OOM**：`torch.cat(processed_images)` 造成 2.87 倍峰值内存增长，叠加 2×H800 上图像预处理缓存的泄漏。 | Open |
| 🟡 **中** | #50006 | **gRPC 错误码**：原生 `runtime.v1` gRPC 将异步输入校验失败上报为 `INTERNAL` 而非 `INVALID_ARGUMENT`。 | Closed（修复已合并） |
| 🟡 **中** | #50132 | **Router 重放 bug**：非幂等 POST 请求在连接关闭后被重放，此时 worker 可能已消费了该请求。 | Open |
| 🟡 **中** | #50131 | **工具调用参数**：被截断/格式错误的工具调用参数被静默改写为 `{}`。 | Open |
| 🟡 **中** | #50130 | **HiCache Mooncake**：短零拷贝读取被认定为完整 cache hit，尽管实际字节传输尚未完成。 | Open |
| 🟢 **低** | #43523 | **DeepSeekV3Detector 流式输出**：当两个完整工具调用在同一次增量中到达时，第一个工具调用会丢失。 | Open |

---

## 6. 对应用开发者的影响

**对于使用 Hopper（H100/H200/H20）的用户：** v0.5.23 中的 decode 回归在高并发场景下影响显著。如遇延迟升高，建议暂时回退至 v0.5.22，或关注 issue #49336 中的修复进展。

**对于使用混合模型的用户（GLM-5.3-Flash、含 GDN/KDA 层的 DeepSeek-V4）：** `--enable-hisparse` 标志目前在 GLM-5.3-Flash 上会导致崩溃（#50030），且所有混合线性注意力模型的 CUDA graph 捕获功能均不可用（#48593）。请等待相关修复合入后再启用这些功能。

**对于依赖多轮/Agent 场景且使用 Mamba 状态的用户：** 新增的 Mamba 检查点优化（#49886）和 GreedyDual-Size 驱逐策略（#50122）应能改善内存效率。检查点 PR 减少了此前因内部写入导致的无效状态槽位占用。

**对于 Router/网关运维者：** Issue #50132 描述了一个请求重放风险，可能导致非幂等请求被重复处理。请关注相关修复 PR 的进展。

**Q4 路线图须知：** SGLang 1.0 发布追踪（#50045）预示着即将到来的 0.5.x 到 1.0 的破坏性变更。请在升级说明发布后及时查阅。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate it naturally while preserving all the structure, formatting, numbers, code references, etc.

Let me translate this carefully:

Title: llama.cpp Daily Digest — 2026-11-13

Let me go through section by section.

I'll maintain the technical Chinese register, use appropriate Chinese punctuation (：，etc.), and keep all the markdown structure intact.
</think>


# llama.cpp 每日简报 — 2026-11-13

---

## 1. 今日要点

服务器组件的安全加固已上线，修复了 CORS 代理和媒体 URL 的 SSRF 漏洞（`#32115`）；同时图形元数据页不再触碰未使用的容量节点，降低了短上下文工作负载的 RSS 内存占用（`#32043`）。性能方面，CUDA 后端将 NVFP4 权重缩放融合进了 prefill 后置 MMQ 计算（`#26048`），而层优先 prefill 策略在稠密 MoE 模型上将 prefill 吞吐量提升了一倍——该 PR 已合并（`#32082`）。

---

## 2. 版本与重大变更

| 构建版本 | 变更内容 | 说明 |
|---------|---------|------|
| `b12340` | **服务器 SSRF 加固** — CORS 代理和媒体 URL 在拉取前进行校验 | 安全修复；强烈建议升级 |
| `b12322` | **图形元数据页延迟分配**（`#32043`） | 减少使用 < 100% `max_nodes` 的图结构的驻留内存 |
| `b12320` | **SYCL AOT：支持 >4 GB 模型**（`#31873`） | 构建脚本新增 `--aot` 参数；解除 4 GB 以上模型输出乱码限制 |

今日无新标签版本发布。当前活跃构建链位于 `b12340` 版本区间。

---

## 3. 新模型与硬件支持

- **RAON-1-mini-preview**（KRAFTON）— HF→GGUF 转换和推理支持已合并入 `#32173`。GGUF 文件已发布于 HuggingFace。
- **Zaya1 8B**（Zyphra）— 模型支持已在 `#32071` 中添加；同时修复了 SSM_CONV，使其无需回退到 CPU 即可在 CUDA 上运行。
- **GigaChat 3.5**（432B MoE，28B 激活参数）— MLA + DeepSeek MoE 混合注意力在 `#25342` 中持续推进中。
- **HunyuanVL** — 强制要求 F32 位置编码（`#32131`），防止重采样时出现 F64 张量溢出。
- **Hexagon 后端** — 已添加 SSM_SCAN（f32）算子（`#31921`），已在 v75/v81/v85 Android 和 v81 WoS 上通过测试。
- **Vulkan SSM_SCAN** — `d_state=96` 支持已合并（`#32162`），此前回退到 CPU 的 Nemotron-3-Puzzle 现可正常运行。
- **OpenVINO 后端** — 扩展了 Qwen3.5 GDN 分解以适配 Lunar Lake NPU，新增 Qwen MTP/多序列相关算子（`#32172`）。

---

## 4. 性能与优化

**已合并的生产级优化：**

- **`#32082` — 层优先 prefill**（已合并）：将 ubatch 处理重排为先跑完所有层再处理下一 token 块，减少 MoE 模型上冗余的 PCIe 专家上传。在 QFN 上的测试显示 **prefill 速度提升约 2 倍**。对运行 Qwen3.5-MoE 等稀疏架构的用户有直接收益。
- **`#32100` — 后端预取范围优化**：预取现在只拉取前序分片所需的输入，减少不必要的 GPU→CPU 回读。
- **`#31802` — CUDA 融合 q8_0/q4_0/f8_e4m3 KV 反量化 MMA flash-attention 内核**：在 FA 阶段消除量化 KV 缓存的独立反量化过程和临时缓冲区物化。

**进行中的优化：**

- **`#26048` — CUDA NVFP4 融合**：将 `w_s` 缩放值融合进 MMQ 回写后置阶段；融合缩放路径的基准测试正在 review 中。
- **`#31274` — 调度器上下文大小调整**：在分片创建时根据 `max(n_nodes, n_leafs)` 正确估算调度器缓冲区大小而非过量分配；仅在图结构扩展时才重新分配。
- **`#32023` — Jinja 模板渲染开销**：移除意外的内建表拷贝，减少 Value 存储和临时分配；这是 `#32002` 中第一波优化。
- **`#32170` — 惰性 VRAM 分配**：将 VRAM 动态增长与实际上下文使用量挂钩，而非预先保留全部配额——概念上类似于 VirtualBox 的虚拟磁盘动态扩容机制。多后端 PR，覆盖 CUDA、ROCm、Vulkan、SYCL、Metal 等。

**SYCL / Intel 相关：**
- `#31138` — oneDNN FA 缓存改为线程安全，用 memoization 缓存运行时错误。
- `#32013` — `set_main_device` 改用线程局部存储缓存设备 ID，避免每次图计算都锁住设备管理器。

---

## 5. 稳定性与回归问题

**高严重性（活跃，尚未修复）：**

| 问题 | 后端 | 描述 |
|-----|------|------|
| `#25593`（22 条评论） | CUDA / sm_60（Tesla P100） | FP32 运算静默地在 FP16 下执行；旧款 Maxwell 硬件上存在质量回归 |
| `#24055`（22 条评论） | llama-server | 混合/循环模型上的上下文检查点始终被置为失效 |
| `#30688`（3 👍） | Vulkan / AMD gfx1201 | Draft-MTP 解码自 #30020 起慢约 4 倍，prefill 慢约 6 倍；目标缓冲区被重新分配到 GTT |
| `#31656`（4 条评论） | llama-server | `--parallel 8` 时混合 Qwen3.8-27B 在 `post_decode seq_rm` 中触发 draft-dflash abort |

**中等严重性：**

| 问题 | 后端 | 描述 |
|-----|------|------|
| `#24440`（10 条评论） | CUDA | Gemma 4 31B + MTP + `-sm` 张量在编辑系统消息后服务器崩溃，发生在 `fattn.cu:579` |
| `#29418`（8 条评论） | Vulkan | 张量分片场景下投机解码时 `GGML_ASSERT(neq0 == HSK)` 触发 |
| `#31836`（3 条评论） | Vulkan / Intel Arc A380 | GLM-OCR 视觉编码器在全页图片上输出乱码（CPU 和 SYCL 均正常） |
| `#31206`（8 条评论） | SYCL / iGPU + MoE | `/v1/completions` 的 logprobs 存在不确定性；请求中的 seed 参数无法固定分布 |

**已关闭的重要修复：**
- `#27845` — SYCL 双 Intel B70 上 `-sm` 张量导致内存泄漏（已关闭，可能已失效）。
- `#27408` — 图片 mtmd + draft-dflash 场景下草稿 KV 缓存出现位置空洞导致 HTTP 500（已关闭）。
- `#31972` — 漏洞报告流程 404 链接（已关闭）。

---

## 6. 对应用开发者的影响

**SYCL 或老旧 CUDA 硬件（sm_60/sm_70）的部署者：** Tesla P100 上 FP16 模式下静默的 FP32→FP16 强制转换是一个正确性风险——问题 `#25593` 值得关注。目前尚无合并的修复方案，请持续关注该 issue。

**MoE 模型运维者：** 层优先 prefill PR（`#32082`）已合并，对稀疏架构有直接吞吐量提升。如果运行 Qwen3.5-MoE 或类似模型，更新到当前构建即可获得收益。结合 NVFP4 融合缩放（`#26048`），CUDA MoE 路径正处于持续优化中。

**长上下文工作负载的服务器运维者：** 图形元数据页延迟分配（`b12322`）降低了 RSS，在内存受限的多租户部署场景下尤为有价值。同时关注 `#32170`（惰性 VRAM 分配）——合并后将消除大上下文请求的预分配 VRAM 惩罚。

**视觉流水线运维者：** HunyuanVL 的 F32 位置编码要求现已强制执行。如果你的多模态模型在位置编码中使用了 F64 张量，将会得到错误结果；修复需要在模型侧提供 F32 缓冲区。

**安全敏感型部署：** 升级到 `b12340` 获取服务器组件的 SSRF 加固。CORS 代理和媒体 URL 拉取路径曾存在潜在 SSRF 攻击面。

---

*数据来源：`github.com/ggml-org/llama.cpp`，2026-11-13。Issue 和 PR 编号均指向该仓库。*

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate this Ollama technical digest from English to Simplified Chinese. I need to:

1. Translate all the English text to Simplified Chinese
2. Preserve the Markdown structure exactly - headings, tables, lists, blockquotes, formatting
3. Keep URLs, code references, issue numbers, file paths, version tags as-is
4. Use natural technical Chinese suitable for a developer newsletter
5. Output ONLY the translation, no preamble or explanation

Let me work through this section by section:

---

# Ollama Digest — 2026-11-13

This is the title, keep as is since it's a date and product name.

## 1. Today's Highlights

"Today's Highlights" → "今日要闻"

Ollama sees significant activity around MLX runner optimizations and Metal performance improvements, with two PRs targeting memory management and prefix caching on Apple Silicon. Meanwhile, the community is expanding integrations—Valo, Bluebird Harness, and OmniGet are all joining the ecosystem. A critical ROCm regression affecting AMD Strix Halo VRAM detection remains open, with a corresponding fix PR pending.

"Ollama sees significant activity around MLX runner optimizations and Metal performance improvements, with two PRs targeting memory management and prefix caching on Apple Silicon. Meanwhile, the community is expanding integrations—Valo, Bluebird Harness, and OmniGet are all joining the ecosystem. A critical ROCm regression affecting AMD Strix Halo VRAM detection remains open, with a corresponding fix PR pending."

→ "今天 Ollama 在 MLX runner 优化和 Metal 性能提升方面表现活跃，两个 PR 聚焦于 Apple Silicon 上的内存管理和前缀缓存。同时，社区集成生态持续扩张——Valo、Bluebird Harness 和 OmniGet 纷纷加入。影响 AMD Strix Halo VRAM 检测的 ROCm 关键回归问题仍未解决，相关修复 PR 已在 pending 状态。"

---

## 2. Releases & Breaking Changes

"Releases & Breaking Changes" → "版本发布与破坏性变更"


过去 24 小时内没有新版本发布。不过，有两个 PR 的关闭涉及行为变更：

**#19684** (已关闭) — `renderers: map disabled thinking to the model's lowest supported level` — 当模型不支持显式禁用 thinking 时，Ollama 现在会将其映射到模型支持的最低 thinking 级别，而不是直接失败。依赖显式 `thinking: null` 的用户应验证其目标模型的行为。

**#19557** (已关闭) — `cmd: show help for noninteractive bare invocations` — 在非交互式 shell（stdin/stdout 重定向）中执行裸 `ollama` 命令时，现在会打印标准帮助信息，而不是尝试启动 TUI，避免了 CI/CD 环境中可能的挂起或失败。

The command-line interface now provides clearer guidance when running in environments without terminal interaction, preventing unexpected behavior during automated workflows.

---

## 3. New Model & Hardware Support

Recent updates focus on expanding hardware compatibility and model support across different silicon architectures. The Metal runner now dynamically manages conversation history based on available GPU memory, moving beyond a fixed 8 GiB limit that could unnecessarily discard context. Cross-request optimization allows busy slots to share cached prompt prefixes, reducing redundant processing in overlapping conversations.

A critical fix addresses VRAM detection on AMD Strix Halo, properly accounting for firmware carve-outs instead of misusing free system RAM as the memory ceiling. This resolves the root cause for bare-metal deployments, though containerized environments may still experience the issue.

On Apple Silicon, the MLX runner improvements directly benefit agentic workloads with persistent conversation history by lowering token processing overhead and improving memory efficiency. The changes maintain full backward compatibility without requiring configuration adjustments.

For tool calling implementations, schema keyword preservation and handling of non-finite values represent meaningful upgrades for clients submitting rich tool definitions. Users sending `default`, `minimum`, or `examples` in tool schemas now get consistent end-to-end preservation. Developers encountering `NaN` serialization errors in tool calls should see resolution after upgrading.

Long-context sessions using YaRN models benefit from critical fixes to context shift amplitude, particularly for configurations using `--context-shift` with RoPE scaling on Llama variants. Previous implementations degraded numerical precision on cached keys through repeated context shifts, but this issue is now addressed.

For AMD ROCm deployments, the Strix Halo VRAM regression remains a critical blocker for containerized scenarios. Those requiring comprehensive memory reporting in Docker or Podman on Strix Halo should either remain on 0.24.0-rocm or closely track progress on the fix, which may not yet fully address container environments.

ChatGPT and Codex integrations suffer from stale model catalogs that demand manual daemon restarts when adding local models—something IDE integration builders should monitor closely.

The ecosystem continues expanding with three new desktop integrations joining the community, positioning Ollama alongside established tools like Claude Code and Codex as a rapidly growing copilot platform. | 🟡 **中** | #19682 — ChatGPT 集成模型目录陈旧 | 开启 | Codex 守护进程在添加本地模型后保留陈旧的模型列表；需要重启临时方案。 |
| 🟡 **中** | #19675 — pull 报 EOF 而非 HTTP 错误 | 开启 | 代理/阻塞下载失败时显示隐晦的报错信息；修复 PR #19676 待审。 |
| 🟢 **低** | #17735 — /save 清单错误失败 | 开启 | MoE 架构的 nemotron-3.5-lightning 本地清单存在但 API 拉取失败。 |

**

死代码 / 次要：**

- **#14955** — `server/routes.go` 中的重复 `TopLogprobs` 验证（第 203/245 行和 2085/2127 行附近）。每个处理程序中的第二个检查是无法到达的死代码。虽然不是 bug，但会造成代码审查的混乱。

---

## 6. What This Means for Application Developers

**If you run Ollama on Apple Silicon:**

The two MLX runner PRs (#19678, #19677) directly improve agentic workloads where multiple conversation turns share context. If you're building chatbots or coding agents with persistent history, expect lower token processing overhead and better memory utilization. The changes are backward-compatible; no config changes needed.

**If you use tool calling:**

The schema keyword preservation (#19686) and non-finite value handling (#19679) are improvements for clients emitting rich tool definitions. If your agent framework sends `default`, `minimum`, or `examples` in tool schemas, these are now preserved end-to-end. Upgrading will also fix `NaN` serialization errors in tool calls.

**If you run long-context sessions with YaRN models:**

The context shift amplitude fix (#19680) is critical for anyone using `--context-shift` with YaRN RoPE scaling. Prior to this fix, repeated context shifts degraded the model's numerical precision on cached keys. After merging, long conversations maintain correctness.

**If you deploy on AMD ROCm:**

The Strix Halo VRAM regression (#16462) is a blocker for containerized deployments. If you need full memory reporting in Docker/Podman on Strix Halo, either stay on 0.24.0-rocm or watch #19670 closely for the bare-metal fix—it may not yet cover container environments.

**If you integrate with ChatGPT/Codex:**

The stale model catalog issue (#19682) requires manual daemon restarts when adding local models. Track this if you're building IDE integrations.

**Ecosystem growth:**

Three new desktop integrations (Valo, Bluebird Harness, OmniGet) are joining the community list, all positioning Ollama alongside Claude Code and Codex. If you're building a copilot-style app, the integration surface is expanding rapidly.

---

*Digest generated from GitHub activity on 2026-11-13. All links reference `github.com/ollama/ollama`.*

---

Now let me format this properly:

# Ollama 速报 — 2026-11-13

## 1. 今日要闻

今天 Ollama 在 MLX runner 优化和 Metal 性能提升方面表现活跃，两个 PR 聚焦于 Apple Silicon 上的内存管理和前缀缓存。同时，社区集成生态持续扩张——Valo、Bluebird Harness 和 OmniGet 纷纷加入。影响 AMD Strix Halo VRAM 检测的 ROCm 关键回归问题仍未解决，相关修复 PR 已在 pending 状态。

---

## 2. 版本发布与破坏性变更

**过去 24 小时内无新版本发布。** 但有两个 PR 的关闭涉及行为变更：

- **#19684** (CLOSED) — `renderers: map disabled thinking to the model's lowest supported level` — 当模型不支持显式禁用 thinking 时，Ollama 现在会将其映射到模型支持的最低 thinking 级别，而不是失败。

The MLX runner improvements directly benefit agentic workloads with shared conversation context by reducing token processing overhead and optimizing memory usage. These changes maintain full backward compatibility with no configuration adjustments required. For tool calling implementations, schema keyword preservation and proper handling of non-finite values represent meaningful upgrades for clients with rich tool definitions.

The context shift amplitude fix becomes critical when operating long-context sessions with YaRN models and RoPE scaling, as previous implementations degraded numerical precision through repeated shifts that compounded cached key values. On AMD ROCm deployments, the Strix Halo VRAM regression presents a containerization blocker requiring either version downgrade or close monitoring of incoming fixes. The stale model catalog issue affecting ChatGPT and Codex integrations remains problematic and should be tracked closely.

Three new desktop integrations—Valo, Bluebird Harness, and OmniGet—are expanding the ecosystem by positioning Ollama alongside established tools like Claude Code and Codex, with the integration surface growing rapidly for copilot-style applications.

The digest pulls from GitHub activity on 2026-11-13, with all references pointing to the ollama/ollama repository.
</think>


# Ollama 速报 — 2026-11-13

## 1. 今日要闻

今天 Ollama 在 MLX runner 优化和 Metal 性能提升方面表现活跃，两个 PR 聚焦于 Apple Silicon 上的内存管理和前缀缓存。同时，社区集成生态持续扩张——Valo、Bluebird Harness 和 OmniGet 纷纷加入。影响 AMD Strix Halo VRAM 检测的 ROCm 关键回归问题仍未解决，相关修复 PR 已在 pending 状态。

---

## 2. 版本发布与破坏性变更

**过去 24 小时内无新版本发布。** 但有两个 PR 的关闭涉及行为变更：

- **#19684** (CLOSED) — `renderers: map disabled thinking to the model's lowest supported level` — 当模型不支持显式禁用 thinking 时，Ollama 现在会将其映射到模型支持的最低 thinking 级别，而不是直接失败。依赖显式 `thinking: null` 的用户应验证其目标模型的行为。

- **#19557** (CLOSED) — `cmd: show help for noninteractive bare invocations` — 在非交互式 shell（stdin/stdout 重定向）中执行裸 `ollama` 命令时，现在会打印标准帮助信息，而不是尝试启动 TUI，从而避免了 CI/CD 环境中可能的挂起或失败。

- **#19644** (CLOSED) — `cmd: expose model variant selection` — `--runner` 参数现在接受小写的 `gguf` 和 `mlx` 值，并在 `ollama show` 中按格式展示 GGUF 变体。旧版 runner 名称仍可使用以保持向后兼容。

---

## 3. 新模型与硬件支持

**今天无新模型支持公告。** 硬件重点仍在 Apple Silicon 和 ROCm：

- **#19678** (MLX runner) — `adapt saved history to memory pressure` — Metal runner 现在根据 GPU 内存余量动态保留更多对话历史，不再使用固定的 8 GiB 上限——后者可能导致有用上下文被过早驱逐。

- **#19677** (MLX runner) — `reuse saved prefixes across request slots` — 繁忙的请求槽现在可以与新请求共享缓存的提示词前缀，减少了重叠对话场景中冗余的 token 处理。

- **#19670** — `server: stop capping an iGPU with a firmware carve-out at free system RAM` — 修复了 bare-metal AMD Strix Halo 上 #16462 的根本原因；iGPU 内存上限现在会考虑固件 carve-out，而不是错误地使用空闲系统内存作为上限。

- **#16462** (open issue) — AMD Strix Halo VRAM 检测回归 — 容器部署在 0.30+ 版本中仍只报告 2 GB VRAM，这是 0.24.0-rocm 以来的已知回归问题。如果你在容器化环境中运行 Strix Halo，这是一个阻塞性问题。

---

## 4. 性能与优化

**内存与吞吐：**

- **#19680** — `llama.cpp: keep context shift amplitude-neutral` — 修复了上下文迁移中 YaRN 振幅乘法 bug：每次迁移都会将每个缓存的 RoPE 键乘以 YaRN 因子，导致长对话中上下文质量下降。影响任何使用 `--context-shift` 的 YaRN RoPE 缩放模型（影响 Llama 变体及类似模型）。

- **#19678** (MLX) — 自适应历史保留；具体收益取决于工作负载内存压力，但当存在余量时可消除不必要的重新计算。

- **#19677** (MLX) — 跨槽前缀复用；重叠的对话轮次（代理循环中常见）现在可避免冗余的提示词处理。

**工具调用与 API：**

- **#19686** — `api: preserve unmodeled tool schema keywords` — 发送包含非标准 JSON Schema 关键字（`default`、`minimum`、`examples`）的工具定义的客户端，在解码为 `api.ToolProperty` 时不再丢失这些字段。上游模型客户端受益于更丰富的 schema 保留。

- **#19679** — `model/parsers: keep non-finite tool arguments JSON-encodable` — 模型在 Qwen XML 或 OLMo/LFM Python 风格格式中发出 `NaN` 或 `Infinity` 作为工具参数时，现在可以正确序列化，而不是抛出 `json: unsupported value: NaN` 错误。

- **#19669** — `harmony: handle Unicode digits at the start of tool names` — 以非 ASCII 数字开头的工具名称（如阿拉伯语 `١weather`）现在可正确规范化为有效的 TypeScript 标识符。

- **#19676** — `server: report download host error status instead of retrying on EOF` — 来自代理 403/502 页面的下载失败曾被作为 blob 数据读取，导致隐晦的 `max retries exceeded: EOF` 错误。服务器现在会显示实际的 HTTP 状态码。

---

## 5. 稳定性与回归

按运维影响排序：

| 严重性 | 问题 | 状态 | 备注 |
|--------|------|------|------|
| 🔴 **高** | #16462 — AMD Strix Halo VRAM 回归（容器） | 开启 | 容器中自 0.30.0-rc0-rocm 起仅检测到 2 GB。修复 PR #19670 存在，但容器可能仍受影响。 |
| 🔴 **高** | #19672 — mimo-v2.6-pro:cloud 工具调用洪泛 | 开启 | 代理会话中的灾难性循环；数百个重复工具调用。仅限 Cloud，本地无影响。 |
| 🟡 **中** | #19671 — minimax-m3.1-flash 云端崩溃 | 开启 | Goose 代理会话中出现内部服务器错误；偶发性。 |
| 🟡 **中** | #19682 — ChatGPT 集成模型目录陈旧 | 开启 | Codex 守护进程在添加本地模型后保留陈旧的模型列表；需要重启临时方案。 |
| 🟡 **中** | #19675 — pull 报 EOF 而非 HTTP 错误 | 开启 | 代理/阻塞下载失败时显示隐晦的报错信息；修复 PR #19676 待审。 |
| 🟢 **低** | #17735 — /save 清单错误失败 | 开启 | MoE 架构的 nemotron-3.5-lightning 本地清单存在但 API 拉取失败。 |

**死代码 / 次要：**

- **#14955** — `server/routes.go` 中的重复 `TopLogprobs` 验证（第 203/245 行和 2085/2127 行附近）。每个处理程序中的第二个检查是无法到达的死代码。虽然不是 bug，但会造成代码审查的混乱。

---

## 6. 对应用开发者的影响

**如果你在 Apple Silicon 上运行 Ollama：**

两个 MLX runner PR（#19678、#19677）直接改善了多轮对话共享上下文的代理工作负载。如果你正在构建聊天机器人或具有持久历史的编码代理，可以期待更低的 token 处理开销和更好的内存利用率。这些变更向后兼容，无需配置更改。

**如果你使用工具调用：**

schema 关键字保留（#19686）和非有限值处理（#19679）是对发出丰富工具定义的客户端的改进。如果你的代理框架在工具 schema 中发送 `default`、`minimum` 或 `examples`，这些现在会端到端保留。如果你观察到工具调用中的 `NaN` 序列化错误，升级后将解决。

**如果你使用 YaRN 模型运行长上下文会话：**

上下文迁移振幅修复（#19680）对任何在 YaRN RoPE 缩放模型上使用 `--context-shift` 的人都至关重要。在此修复之前，每次上下文迁移都会使缓存键的数值精度下降。长对话后合并将保持正确性。

**如果你部署在 AMD ROCm 上：**

Strix Halo VRAM 回归（#16462）是容器化部署的阻塞问题。如果你需要在 Docker/Podman 中对 Strix Halo 进行完整内存报告，要么保持在 0.24.0-rocm，要么密切关注 #19670——它可能尚不涵盖容器环境。

**如果你与 ChatGPT/Codex 集成：**

陈旧模型目录问题（#19682）在添加本地模型时需要手动重启守护进程。如果你正在构建 IDE 集成，请跟踪此问题。

**生态系统增长：**

三个新的桌面集成（Valo、Bluebird Harness、OmniGet）正在加入社区列表，都将 Ollama 定位在 Claude Code 和 Codex 旁边。如果你正在构建 copilot 类应用，集成生态正在迅速扩展。

---

*本速报基于 2026-11-13 的 GitHub 活动生成。所有链接指向 `github.com/ollama/ollama`。*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Translate all text content while keeping technical terms appropriately localized
2. Preserve all markdown structure (tables, headings, lists, etc.)
3. Keep URLs, version numbers, issue/PR references verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Use natural technical Chinese register

Let me go through section by section:

**Title and Highlights:**
- "LiteLLM Digest — 2026-11-13" → "LiteLLM 速报 — 2026-11-13"
- "Today's Highlights" → "今日要点"
- "Two high-severity billing correctness issues surfaced" → "本期暴露两个高危计费准确性问题"
- Technical terms like "1,000,000× cost overbilling" stay as numbers
- "budget bypass" → "预算绕过"
- "stale Redis fallback counters" → "Redis 降级计数器过期问题"
- "Rust router-core migration" → keep as-is, or "Rust router-core 迁移"
- "native store layer" → "原生存储层"
- "consolidated Rust request path" → "统一 Rust 请求链路"

**Releases & Breaking Changes:**
- "Breaking Changes" → "破坏性变更" or just keep as "Breaking Changes" since it's standard
- "LTS" → "长期支持版" or keep "LTS"
- "RC" → "候选版"
- "No config/schema migration notices" → "本期无配置/Schema 迁移公告"
- "Operators" → "运维人员" or "部署方"

**New Model & Hardware Support:**
- "New Model & Hardware Support" → "新增模型与硬件支持"
- "Decision model" → "决策模型"


- "Per-second pricing" → "按秒计费"
- "Resolution tiers" → "分辨率档位"
- "Reasoning model" → "推理模型"

**Performance & Optimization:**
- "Performance & Optimization" → "性能与优化"
- "Quantified improvements" → "量化改进" or "性能数据"
- "latency tail improvement" → "尾部延迟改善"
- "high key-churn workloads" → "高键变更负载"

**Stability & Regressions:**
- "Stability & Regressions" → "稳定性与回归"
- "Severity" → "严重程度"
- "🔴 Critical" → "🔴 严重"
- "🟠 High" → "🟠 高"
- "🟡 Moderate" → "🟡 中"
- "🟡 Minor" → "🟡 低"
- "Status" → "状态"
- "Open" → "开放" or "待处理"
- "Closed" → "已关闭"

**What This Means for Application Developers:**
- "What This Means for Application Developers" → "对应用开发者的影响"
- "Billing accuracy risk if you self-host providers" → "自托管 Provider 的计费准确风险"
- "overbilling customers" → "向客户多收费"
- "Budget enforcement gap on short-TTL deployments" → "短 TTL 部署中的预算执行漏洞"
- "budget limits can be circumvented" → "预算限制可能被绕过"
- "strict spend control" → "严格支出控制"
- "secondary enforcement layer" → "二次执行层"
- "MCP clients using legacy protocol are slow" → "使用旧版协议的 MCP 客户端响应慢"
- "degraded UX" → "体验降级"
- "Rust auth pipeline merging" → "Rust 认证管

道合并"
- "Early testers" → "早期测试者"
- "behavioral changes" → "行为变更"
- "auth callbacks" → "认证回调"
- "Python hooks" → "Python 钩子"
- "Annual budgets landing soon" → "年度预算功能即将上线"
- "calendar-year reset periods" → "自然年重置周期"
- "timezone-aware resets" → "时区感知重置"

**Footer:**
- "Digest compiled from GitHub data for 2026-11-13" → "本速报数据采集自 2026-11-13 的 GitHub 数据"
- "All linked issues/PRs refer to `BerriAI/litellm`" → "所有链接的 Issue/PR 均指向 `BerriAI/litellm`"

Now working through the full document systematically.

**Table translations:**

**Releases:**
| Version | Type | Notes |
| Version → 版本 | Type → 类型 | Notes → 备注 |
| "Release candidate" → "候选版" or keep "RC" since it's standard
| "LTS release" → "长期支持版"

**Models:**
| Provider | Model | Details |
| Provider → 提供商 | Model → 模型 | Details → 详情 |
| "Decision model with image input support" → "支持图像输入的决策模型"
| "adds inline image handling" → "新增行内图像处理"
| "Per-second pricing" → "按秒计费"
- "video upscaling" → "视频超分辨率"
- "resolution tiers mapped to" → "分辨率档位映射到"
- "output_cost_per_second_* fields" → "output_cost_per_second_* 字段"
- "Reasoning model" → "推理模型"

**Performance:**
| PR | Area | Status |
| PR → PR | Area → 领域 | Status → 状态 |
- "moved entirely to native store" → "完全迁移至原生存储"
- "eliminates split counting" → "消除双计数"
- "redis-py" → keep as-is (technical term)
- "usage-v2" → keep as-is
- "decouples routing from key-format logic" → "解耦路由与键格式逻辑"
- "rebuilds on exact index" → "按精确索引重建"
- "stale heap records" → "过期堆记录"
- "delete/re-arm operations" → "删除/重新注册操作"
- "batch paths" → "批处理路径"
- "native implementation" → "原生实现"
- "served from native store" → "由原生存储提供"
- "deployment affinity" → "部署亲和性"
- "complexity router pins" → "复杂度路由器亲和"
- "unified" → "统一"

**Stability:**
| # | Severity | Issue | Status |
| # → # | Severity → 严重程度 | Issue → 问题 | Status → 状态 |
- "Provider `usage.cost` trusted as USD" → "Provider 的 `usage.cost` 被信任为 USD"
- "overbilling" → "超额计费"
- "on OpenAI-compatible providers" → "在 OpenAI 兼容 Provider 上"
- "End-user budget bypass" → "终端用户预算绕过"
- "stale per-pod Redis fallback" → "单 Pod Redis 降级过期"
- "counter TTL expiry" → "计数器 TTL 过期"
- "default" → "默认值"
- "MCP `tools/list` blocks" → "MCP `tools/list` 阻塞"
- "legacy `notifications/initialized`" → "旧版 `notifications/initialized`"
- "pre-2026 protocol clients" → "2026 年前协议客户端"
- "Responses API → Chat Completions bridge" → "Responses API → Chat Completions 桥接"
- "drops tool names" → "丢失 tool 名称"
- "forwards unsupported types" → "转发不支持的类型"
- "native streaming discards" → "原生流式处理丢弃"
- "usage falls back to zero" → "用量回退至零"
- "Vertex tool schemas with tuple-form `items`" → "Vertex tool schema 中 tuple 格式的 `items`"
- "crashes" → "崩溃"
- "silently dropped" → "被静默丢弃"
- "inconsistent with" → "与...不一致"
- "Invalid Value" → "无效值"

Now translating the full document with these terms in mind, ensuring technical accuracy and consistency throughout. I need to reconsider the approach here. The user wants only the translation without any introductory text or explanatory material. I'll format it as a direct translation using the appropriate structural elements.

For the digest title, "LiteLLM Digest" could work as a transliteration with "速报" or "日报" appended, or just "LiteLLM 速报" since the number already indicates the date. I'll go with the cleaner option. The highlights section needs natural Chinese flow while keeping all the technical context intact. When translating "Two high-severity billing correctness issues surfaced," I should maintain the urgency without being overly literal—"本期出现" works better than "浮出水面" for technical documentation.

The critical details about the 1,000,000× cost overbilling and budget bypass via stale Redis counters need to be rendered clearly, and the engineering implications around the Rust router-core migration should be expressed as an ongoing effort that operators should monitor. The release and breaking changes table requires careful translation of technical terms like "cosign-signed," which refers to the verification tool for container signatures.

For the LTS and RC versions, I'll use standard Chinese technical terminology: 长期支持版 for LTS and 候选版 for RC. The breaking changes section can be left empty since no config/schema migrations are mentioned—this keeps the documentation clean without unnecessary placeholder text. When describing the image handling capabilities for the Drex-Max model, I should emphasize the inline image support and decision-making functions clearly.

For the pricing structure, the per-second billing model applies specifically to video upscaling operations through the gemini-omni-flash API. The resolution-based pricing is calculated using the output_cost_per_second fields that correspond to different quality levels. The Together AI model qualifies as a reasoning-type model with its own cost parameters. No backend modifications are needed for CUDA, ROCm, or Metal support.

The Rust migration continues with several key infrastructure changes: router usage tracking has shifted to the native store to eliminate duplicate counting, Redis key generation logic is being separated from the core router layer, and the in-memory cache expiration mechanism is being reconstructed using precise indexing to prevent stale records from persisting after delete or re-arm operations. Redis batch processing is being migrated from Python to Rust, consolidating all batch operations into the native implementation. Session pinning logic is now being served directly from the native store. Quantitative performance improvements haven't been published yet, though the in-memory cache fix addresses a known issue where frequently accessed keys at the top of the heap were causing incorrect expirations, which should reduce tail latency under high-churn scenarios.

Several critical stability issues remain open: a potential 1,000,000× cost overbilling occurs when OpenAI-compatible providers report `usage.cost` without proper USD normalization, end-user budgets can be bypassed for up to 60 seconds after restarts or scaling events, and MCP `tools/list` operations experience 18–50 second delays with legacy protocol clients that send `notifications/initialized` messages. The Responses API bridge between OpenAI and Anthropic formats is dropping tool names and forwarding incompatible types, while Bedrock Llama streaming discards token counts causing usage to fall back to zero. Vertex tool schemas using tuple-form `items` crash during schema building, and `function.strict: true` is being silently ignored when OpenAI-format tools are sent to Anthropic.

Recent fixes addressed OpenTelemetry model reporting, non-list fallback configuration, and timeout span attribution. For self-hosted deployments, there's a significant billing accuracy risk—if routing through LiteLLM to providers that report `usage.cost` in non-USD units, customers could be overcharged by up to 1,000,000× until this is patched. Budget enforcement also has gaps during short-TTL deployments, allowing budget limits to be circumvented for up to 60 seconds post-restart or post-scaling, so organizations requiring strict spend control should implement additional enforcement layers or maintain single-pod instances.

Legacy MCP clients using the pre-2026 protocol will experience 18–50 second delays on `/mcp/` routes—upgrading client SDKs is necessary to restore normal performance. The Rust auth pipeline is consolidating route matching, key authentication, and JWT validation into a unified system, so early adopters should monitor for behavioral changes in routing rules and auth callbacks. Calendar-year budget resets with timezone awareness are also being introduced.

The data for this report comes from GitHub activity on 2026-11-13, with all linked issues and pull requests referencing the BerriAI/litellm repository.
</think>


# LiteLLM 速报 — 2026-11-13

## 今日要点

本期暴露两个高危计费准确性问题：Provider 报告的 `usage.cost` 被直接当作美元使用，可能导致 **100 万倍超额计费** (#48398)；Redis 降级计数器 TTL 过期后存在 **预算绕过漏洞** (#34238)——两者均需运维人员重点关注。工程层面，Rust router-core 迁移持续推进，多个 PR 将 Redis 键构建逻辑、认证决策和内存缓存过期机制迁移至原生存储层，预示着统一 Rust 请求链路的最终收敛。

## 版本发布与破坏性变更

| 版本 | 类型 | 说明 |
|------|------|------|
| **v1.110.0-rc.2** | 候选版 | Cosign 签名版；使用密钥 `e82a3c6` 验签 |
| **v1.108.7** | 长期支持版 | 使用 `ghcr.io/berriai/litellm:lts` 拉取 |

**本期无配置/Schema 迁移公告。** 使用旧版长期支持通道的运维人员应评估是否升级，以获取最新的计费追踪修复。

## 新增模型与硬件支持

| 提供商 | 模型 | 详情 |
|--------|------|------|
| **Nace** | `drex-max` | 支持图像输入的决策模型；为提供商新增行内图像处理能力 |
| **fal_ai** | `google/gemini-omni-flash/v1.2/upscale` | 视频超分辨率按秒计费；分辨率档位映射至 `output_cost_per_second_*` 字段 |
| **Together AI** | `together_ai/thinkingmachines/Inkling-2-Small` | 新增推理模型至成本映射表 |

本期无 CUDA/ROCm/Metal 后端变更。

## 性能与优化

| PR | 领域 | 状态 |
|----|------|------|
| #50862 | **Router 用量统计**完全迁移至原生存储；消除 redis-py 与 usage-v2 间的双计数问题 | Open |
| #50356 | **Redis 键构建逻辑**从 router-core 移出；解耦路由与键格式逻辑 | Open |
| #51388 | **内存缓存过期**按精确索引重建；修复删除/重新注册操作遗留过期堆记录的问题 | Open |
| #51383 | **RedisBatch Python → Rust** 迁移完成；所有批处理路径现使用原生实现 | Open |
| #50870 | **会话亲和**由原生存储提供服务；部署亲和与复杂度路由器亲和统一 | Open |

**量化性能数据**尚未发布。内存缓存修复 (#51388) 解决了堆顶长生命周期键导致虚假过期的问题——在高键变更负载下，预期尾部延迟将有所改善。

## 稳定性与回归

| # | 严重程度 | 问题 | 状态 |
|---|----------|------|------|
| **#48398** | 🔴 严重 | Provider `usage.cost` 被信任为 USD → OpenAI 兼容 Provider 上 100 万倍超额计费 | Open |
| **#34238** | 🔴 高 | 终端用户预算绕过：Pod 重启或计数器 TTL 过期（默认 60 秒）后单 Pod Redis 降级计数器仍可使用 | Open |
| **#50065** | 🟠 高 | MCP `tools/list` 在旧版 `notifications/initialized` 协议（2026 年前客户端，如 Open WebUI）下阻塞 18–50 秒 | Open |
| **#27276** | 🟠 中 | Responses API → Chat Completions 桥接丢失 tool 名称，并转发不支持的类型（`custom`、`shell`） | Open |
| **#51456** | 🟡 中 | Bedrock Llama 原生流式处理丢弃 `prompt_token_count` 和 `generation_token_count`；用量回退至零 | Open |
| **#36848** | 🟡 中 | Vertex tool schema 中 tuple 格式的 `items` 导致 `_build_vertex_schema` 崩溃：`'list' object has no attribute 'get'` | Open |
| **#51230** | 🟡 中 | `function.strict: true` 在 OpenAI 格式 tools 发送至 Anthropic 时被静默丢弃 | Open |
| **#32769** | 🟡 低 | Gemini 3.5 Flash 返回 `reasoning_tokens > 0` 但 `reasoning_content=None`；与 2.5 Flash 行为不一致 | Closed |
| **#36182** | 🟡 低 | Codex CLI 0.147.0 报 `Invalid Value: 'tools.namespace'` | Closed |

**已修复：** #51029（OTel `gen_ai.response.model` 现正确报告实际模型）、#51396（非列表 `fallbacks` 不再导致 router-core 返回 HTTP 500）、#51221（OTel span 在预填充后超时场景下现包含 `gen_ai.usage`）。

## 对应用开发者的影响

1. **自托管 Provider 存在计费准确风险。** 若通过 LiteLLM 路由至 OpenAI 兼容 Provider 且该 Provider 以非美元单位报告 `usage.cost`，可能向客户多收最多 100 万倍费用（#48398）。修复前，建议为这些后端验证 Provider 返回的 cost 或硬编码成本映射表。

2. **短 TTL 部署存在预算执行漏洞。** Pod 重启或扩缩容后最长 60 秒内终端用户预算限制可能被绕过（#34238）。如需严格支出控制，请实现二次执行层或将代理固定至单 Pod 部署。

3. **使用旧版协议的 MCP 客户端响应缓慢。** Open WebUI 等发送 `notifications/initialized` 的 2026 年前协议客户端在 `/mcp/` 路由下将经历 18–50 秒延迟（#50065）。请升级客户端 SDK，或在补丁发布前接受体验降级。

4. **Rust 认证管道正在合并。** 多个 PR（#51528–#51531, #51374）将路由匹配、密钥认证和 JWT 验证迁移至 Rust。早期测试者应留意路由规则和认证回调的行为变化——目前这些 PR 中尚未记录 Python 钩子支持。

5. **年度预算功能即将上线。** PR #51508 新增按自然年重置周期的预算支持，解决了当前无法创建带时区感知重置的年度支出限制的问题。

---

*本速报数据采集自 2026-11-13 的 GitHub 数据。所有链接的 Issue/PR 均指向 `BerriAI/litellm`。*

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the English technical digest into Simplified Chinese. Let me carefully translate the content while following the rules:

1. Output ONLY the translation - no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, code references, version numbers verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Use natural technical Chinese register

Let me translate section by section:

Title: "Unsloth Digest — 2026-11-13" → "Unsloth 技术日报 — 2026-11-13"

Section 1: Today's Highlights
- "The Unsloth Studio team merged..." → "Unsloth Studio 团队合并了..."
- "significant UI and model-serving improvements" → "多项重要的 UI 和模型服务改进"
- "model picker overhaul for the composer" → "composer 的模型选择器重构"
- "better handling of MOSS-Transcribe-Diarize token budgets" → "改进了 MOSS-Transcribe-Diarize 的 token 预算处理"
- "fix for the --load-mode none memory regression" → "修复了 --load-mode none 的内存回退问题"
- "FLUX.3 can now load on 12 GB hosts" → "FLUX.3 现在可以在 12 GB 主机上加载"
- "bit-exact fused q/k RMSNorm + RoPE kernels" → "位精确的融合 q/k RMSNorm + RoPE 内核"

Section 2: Releases & Breaking Changes
- "No tagged releases" → "过去 24 小时内无标签发布"


- "Configuration / Dependency Updates" → "配置/依赖更新"
- "bumped to" → "升级至"
- "highest sidecar pinned to" → "最高 sidecar 锁定至"

Section 3: New Model & Hardware Support
- "Can now load float16 builds" → "现在可以加载 float16 构建版本"
- "reads bf16 weights as-stored" → "以原样存储的 bf16 权重读取"
- "Studio gains UI to swap Engram table precision" → "Studio 新增界面以切换 Engram 表精度"
- "hand-editing files" → "手动编辑文件"
- "RFC open" → "RFC 提案已开放"
- "first-class NPU backend support" → "原生 NPU 后端支持"
- "currently a blocker" → "目前是一个阻碍因素"
- "Feature request" → "功能请求"
- "blocked with 'not supported' error" → "被'不支持'错误阻止"
- "Request to update" → "请求更新"
- "token budget now correctly sent per request" → "token 预算现在正确地在每个请求中发送"
- "scales 1024 tokens/min" → "按 1024 tokens/min 扩展"

For ROCm 7.14/MI300X (gfx942), there's a stride assertion problem in the scaled dot product flash attention backward operation that requires a MATH fallback. Docker encounters an invalid cross-device link issue when updating audio.cpp. With Qwen3.8-Flash-Next using Unsloth Dynamic 3.1 GGUFs, draft acceptance drops noticeably at production temperature on the Ryzen AI Max+ 395, falling from approximately 74% down to 56-66%. The regression in version 0.1.917 forces memory mapping even when using --load-mode none, resulting in excessive RAM and SSD usage, though this has been addressed. Thread window rendering now defers role attribute writes until after the style read pass, which resolves scroll performance degradation on extended conversations introduced by the previous update.

For streaming responses, keeping the thread window off the back of the streaming reply during React transitions prevents unnecessary re-render cycles with each new chunk. The H3/H3-Image model uses bit-exact fused q/k RMSNorm and RoPE kernels across all tiers, ensuring numerical stability on streamed configurations and maintaining bit-level consistency with standard eager operations. The Composited-canvas tiled VAE decode path leverages CUDA graphs and fp16 precision to accelerate H3-Image decoding at 2048px resolution, with end-to-end benchmarks still being finalized in CI.

For memory management, recognizing lazy-mode on-direct for tensor accounting fixes the --load-mode none regression—the backend now properly accounts for lazy-loaded tensors before placement. The Studio issue involves repeated full prompt reprocessing across conversation turns when using the Qwen hybrid model after tool invocations, with active investigation ongoing. The ROCm 7.14 / MI300X (gfx942) platform experiences stride assertion failures in _scaled_dot_product_flash_attention_backward, requiring MATH fallback. Docker encounters invalid cross-device link errors during audio.cpp updates. Qwen3.8-Flash-Next UD 3.1 GGUFs versus existing MTP draft heads show degraded acceptance rates around 74%.

The acceptance rate drops further to 56–66% at production temperature on Ryzen AI Max+ 395. DiffusionGemma multi-GPU aborts on prompts exceeding approximately 1792 tokens due to GGML_ASSERT n_ubatch. Linux desktop crashes occur from WebKitWebProcess SIGABRT on KDE Plasma with AT-SPI. MOSS-Transcribe-Diarize long audio failures are resolved through token budget adjustments. Upgrade to 0.1.917+ if on Desktop, as the --load-mode none mmap regression has been fixed and confirmed in the latest Studio version. Browser-use approvals are now port-aware, scoping site approvals per port when running multiple Studio instances on different ports.

Review existing allowlists. FLUX.3 image generation is now accessible on free-tier Colab with T4 GPU—the bf16-as-stored loading approach removes the 12 GB host RAM constraint. MOSS-Transcribe-Diarize handles long recordings by scaling token budgets with duration instead of truncating. If you rely on diarization, ensure your integration sends options.max_tokens or depends on Studio's auto-budget. Nested project folders are now supported with backup/restore preserving hierarchy—useful for multi-tenant or multi-experiment workflows. Duplicate run settings via UI allow cloning and modifying configurations without losing originals. Fedora desktop packages are available for ARM64 and x86_64 architectures.

If using Qwen3.8-Flash-Next with speculative decoding, expect 10–18% lower draft acceptance rates compared to UD 2.x until matched MTP heads are released. SSL certificates can now be configured through environment variables to avoid passing credentials on the command line in containerized environments.
</think>


# Unsloth 技术日报 — 2026-11-13

---

## 1. 今日要闻

Unsloth Studio 团队合并了多项重要的 UI 和模型服务改进，包括 composer 模型选择器的重构、更好地处理 MOSS-Transcribe-Diarize 的 token 预算，以及修复了 0.1.917 版本引入的 `--load-mode none` 内存回退问题。在模型方面，FLUX.3 现在可以通过 bf16 原样存储读取的方式在 12 GB 主机上加载；H3/H3-Image 系列获得了位精确的融合 q/k RMSNorm + RoPE 内核，以及合成画布平铺 VAE 解码路径。

---

## 2. 版本发布与破坏性变更

| 项目 | 描述 | 链接 |
|------|-------------|------|
| **无新版本发布** | 过去 24 小时内无标签发布。 | — |

**配置 / 依赖更新（已合并的 PR）：**
- Transformers 升级至 **5.5.4**（从 5.5.0），最高 sidecar 锁定至 **5.13.1**，SageAttention 也已更新至兼容当前 torch 的版本。  
  → [#17589](https://github.com/unslothai/unsloth/pull/17589)

---

## 3. 新模型与硬件支持

| 模型 / 架构 | 后端 | 说明 | 链接 |
|---------------------|---------|-------|------|
| **FLUX.3** (klein, int8 transformer) | CPU / GPU | 现在可以通过以 bf16 原样存储的权重读取方式，在 12 GB 主机上加载 float16 构建版本，无需在主机侧进行转换。 | [#17642](https://github.com/unslothai/unsloth/pull/17642) |
| **Qwen3.8-Flash-Next / DeepSeek-V4.1** | GGUF | Studio 新增 UI，可直接在界面中切换 Engram 表精度，无需手动编辑文件。 | [#17641](https://github.com/unslothai/unsloth/pull/17641) |
| **Ascend NPU（昇腾）** | 华为 Ascend | 原生 NPU 后端支持的 RFC 提案已开放——这对国内数据中心用户目前是一个阻碍因素。 | [#10772](https://github.com/unslothai/unsloth/issues/10772) |
| **Kromoss GGUF** | GGUF | 功能请求添加支持；目前被"不支持"错误阻止。 | [#17552](https://github.com/unslothai/unsloth/issues/17552) |
| **Gemma 4** | GGUF (UD_Q4_K_XL) | 请求从 Unsloth Dynamic 2.0 更新至 UD 3.1（Qwen3.8 已完成更新）。 | [#17573](https://github.com/unslothai/unsloth/issues/17573) |
| **MOSS-Transcribe-Diarize** | Studio | `max_tokens` 预算现在正确地在每个请求中发送；对于长音频按 1024 tokens/min 缩放。 | [#17599](https://github.com/unslothai/unsloth/pull/17599), [#17603](https://github.com/unslothai/unsloth/pull/17603) |

---

## 4. 性能与优化

| 领域 | 变更 | 指标 / 影响 | 链接 |
|------|--------|-----------------|------|
| **MiniMax-H3 / H3-Image VAE** | 合成画布平铺 VAE 解码，启用 CUDA graphs 和 fp16 解码器 | H3-Image 在 2048 px 解码：**2.82 s → 更快**（精确端到端数据待 CI 验证） | [#17595](https://github.com/unslothai/unsloth/pull/17595) |
| **H3 / H3-Image** | 位精确的融合 q/k RMSNorm + RoPE 内核，所有 tier 均已启用 | 消除了流式 tier 上的数值漂移；已验证与原生 eager 运算位级一致 | [#17593](https://github.com/unslothai/unsloth/pull/17593) |
| **内存管理** | 识别 `lazy-mode on-direct` 以便对 lazy tensor 进行独立核算 | 修复 `--load-mode none` 回退问题；后端现在在放置前分别扣除 lazy 加载的 tensor | [#17607](https://github.com/unslothai/unsloth/pull/17607) |
| **线程窗口渲染** | 将角色属性写入推迟到样式读取阶段之后 | 修复了 #17504 引入的长对话滚动变慢问题 | [#17588](https://github.com/unslothai/unsloth/pull/17588) |
| **流式体验** | 在 React 过渡期间保持线程窗口不在流式回复的背面 | 防止每个流式 chunk 都触发重新渲染级联 | [#17597](https://github.com/unslothai/unsloth/pull/17597) |

---

## 5. 稳定性与回退

**活跃问题（按严重程度排序）：**

| 严重程度 | 问题 | 描述 | 修复 PR |
|----------|-------|-------------|--------|
| 🔴 **高** | [#17015](https://github.com/unslothai/unsloth/issues/17015) | Studio：Qwen 混合模型在工具调用（MCP catalog）后跨轮次重复全量 prompt 重新处理。6 条评论，调查中。 | — |
| 🔴 **高** | [#17548](https://github.com/unslothai/unsloth/issues/17548) | ROCm 7.14 / MI300X (gfx942)：`_scaled_dot_product_flash_attention_backward` 中 stride 断言失败——需回退至 MATH 模式。 | — |
| 🟡 **中** | [#17638](https://github.com/unslothai/unsloth/issues/17638) | Docker：`audio.cpp` 更新失败，提示"无效的跨设备链接"。 | — |
| 🟡 **中** | [#17402](https://github.com/unslothai/unsloth/issues/17402) | Qwen3.8-Flash-Next UD 3.1 GGUFs 与现有 MTP draft heads：生产温度下接受率从 ~74% 下降至 56–66%（Ryzen AI Max+ 395）。 | — |
| 🟢 **低** | [#17605](https://github.com/unslothai/unsloth/issues/17605) | **0.1.917 中的回退**：即使 `--load-mode none` 也强制使用 mmap，导致内存/SSD 占用过高。 | **由 [#17607](https://github.com/unslothai/unsloth/pull/17607) 修复** |

**已关闭（今日解决）：**

| 问题 | 描述 | 链接 |
|-------|-------------|------|
| DiffusionGemma 加载忽略 context/parallelism 设置 | 已修复；Studio 现在正确地将设置传递给 runner | [#17558](https://github.com/unslothai/unsloth/issues/17558) |
| DiffusionGemma 多 GPU 在 prompt > ~1792 tokens 时中止 | GGML_ASSERT n_ubatch 修复 | [#16925](https://github.com/unslothai/unsloth/issues/16925) |
| KDE Plasma + AT-SPI 环境下 WebKitWebProcess SIGABRT | Linux 桌面崩溃 | [#15260](https://github.com/unslothai/unsloth/issues/15260) |
| GRPO 分块/hidden-state 优化移植至 ORPO/DPO/CPO | 功能已移植 | [#5291](https://github.com/unslothai/unsloth/issues/5291) |
| MOSS-Transcribe-Diarize 长音频处理失败 | Token 预算修复 | [#17598](https://github.com/unslothai/unsloth/issues/17598) → [#17599](https://github.com/unslothai/unsloth/pull/17599), [#17603](https://github.com/unslothai/unsloth/pull/17603) |

---

## 6. 应用开发者须知

| 要点 | 详情 |
|----------|--------|
| **升级至 0.1.917+（桌面端）** | `--load-mode none` 的 mmap 回退问题（#17605）已在最新构建中修复；请确认你的 Studio 版本包含 PR #17607。 |
| **浏览器使用权限现已按端口隔离** | 如果你在不同端口运行多个 Studio 实例，站点授权将按端口独立生效（#17596）。请检查现有的白名单。 |
| **FLUX.3 现可在免费版 Colab（T4）上使用** | bf16 原样加载路径解除了 FLUX.3 的 12 GB 主机内存上限。 |
| **MOSS-Transcribe-Diarize 现已支持长录音** | 此前长音频会被截断；token 预算现在会随音频时长缩放。如果你的业务依赖 diarization，请确认集成中发送了 `options.max_tokens` 或依赖 Studio 的自动预算。 |
| **项目文件夹现支持嵌套结构** | 备份/恢复保留目录层级；适用于多租户或多实验工作流（#17612）。 |
| **可通过 UI 复制运行配置** | 克隆并调整运行配置，无需丢失原始配置（#17600 / 关闭 #17590）。 |
| **Fedora 桌面包现已发布** | ARM64 和 x86_64 的 RPM 包已上线；为 Linux 用户提供了 AppImage 之外的替代选择（#17611）。 |
| **关注 Qwen3.8 MTP head 与 UD 3.1 的接受率差异** | 如果使用 Qwen3.8-Flash-Next 进行投机解码，在匹配的 MTP head 发布前，draft 接受率可能比 UD 2.x 低 10–18%（#17402）。 |
| **SSL 证书现可通过环境变量或配置文件设置** | 避免了容器化部署中在命令行传递凭证（#17640）。 |

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*