# AI 基础设施日报 2026-10-18

> 生成时间: 2026-10-18 00:13 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

<think>The user wants me to translate this English report into Simplified Chinese. Let me translate it while:
1. Preserving all markdown structure exactly (headings, tables, lists, etc.)
2. Keeping all technical terms, project names, issue numbers, URLs as-is
3. Using natural technical Chinese register
4. Outputting ONLY the translation with no preamble or explanation

Let me go through each section:</think>

# 跨项目对比报告 — AI 基础设施生态系统

## 1. 生态系统概览

今日活动反映了 AI 推理基础设施的日趋成熟，各项目在层级定位上更加专业化。vLLM 和 SGLang 正在高性能推理引擎层展开激烈竞争，双方都在优化 Blackwell（SM120）和 GB300 部署。llama.cpp 继续在量化领域扩张，已在 Hexagon 上支持 Q1_0/Q2_0，而 Ollama 和 Unsloth 则服务于本地/边缘部署场景。LiteLLM 通过 v1.103.5 的 Docker 镜像验证巩固了其网关地位，Unsloth 则在微调领域推进 LoRA 运行时。所有六个项目的 issue 总量都处于高位，表明项目在快速迭代的同时也面临着稳定性挑战——尤其是在 Blackwell 回退和 ROCm 兼容性方面。

---

## 2. 活动对比

| 项目 | Issues（活跃） | PRs（过去 24h 合并） | Releases（过去 24h） | 重点领域 |
|---------|-----------------|----------------------|---------------------|----------------|
| **vLLM** | 10 个追踪 | 10 个关键 PR | 无 | Blackwell 优化，KV 卸载 |
| **SGLang** | 8+ 个追踪 | 10+ 个 PR | 无 | DeepSeek V4.1，DSpark，LoRA 栈 |
| **llama.cpp** | 9 个追踪 | 10 次提交 | 无（1 次回退） | 量化，Hexagon/AMD，安全 |
| **Ollama** | 10+ 个追踪 | 8+ 个 PR | 无 | 本地运行时，MLX，嵌入修复 |
| **LiteLLM** | 15 个追踪 | 12+ 个 PR | **v1.103.5** | 网关，Redis 限流，推理 |
| **Unsloth** | 15 个追踪 | 10+ 个 PR | 无 | 微调，Studio，MCP 代理 |

---

## 3. 模型支持竞赛

| 模型 / 架构 | vLLM | SGLang | llama.cpp | Ollama | Unsloth |
|---------------------|------|--------|-----------|--------|---------|
| **DeepSeek V4.1 Flash** | ✅（GB300） | ✅（路线图） | ❌ | ❌ | ❌ |
| **Kimi-K3（MoE）** | ✅（ROCm） | ❌ | ❌ | ❌ | ❌ |
| **Qwen4Exp** | ✅（磁盘卸载） | ❌ | ❌ | ❌ | ❌ |
| **Kolibri 1** | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Gemma 4** | ✅ | ❌ | ❌ | ✅ | ❌ |
| **GLM-5.3 Flash** | ❌ | ✅ | ❌ | ⚠️（有 bug） | ❌ |
| **Granite switch (256)** | ❌ | ❌ | ✅ | ❌ | ❌ |
| **PPLX Decider v1.2** | ❌ | ❌ | ❌ | ✅（MLX） | ❌ |
| **Nemotron-3.5** | ✅（回退） | ❌ | ❌ | ❌ | ❌ |
| **d1-omni** | ❌ | ❌ | ❌ | ⚠️（Vulkan bug） | ❌ |

**领先者**：vLLM 在生产推理的模型广度上领先；llama.cpp 在边缘/量化模型多样性上领先；Ollama 在本地 MLX 部署上领先。

---

## 4. 性能前沿

| 优化领域 | 主要项目 | 状态 |
|-------------------|-----------------|--------|
| **Blackwell（SM120）解码** | vLLM，SGLang | 回退（NVFP4 比 FP8 慢 1.7-2 倍）；图捕获在 SM120 上损坏 |
| **GB300 专用内核** | vLLM，SGLang | 已合入；显著加速 |
| **KV 缓存卸载** | vLLM | TP 无关卸载追踪（#61886） |
| **LoRA 运行时** | SGLang | 21 部分栈正在合入（MoE LoRA，CuTeDSL，Triton） |
| **低位量化** | llama.cpp | Hexagon 上支持 Q1_0/Q2_0；更快的 MMVQ CUDA |
| **Redis 限流** | LiteLLM | 3 轮通信 → 1 轮 |
| **预填充缓存持久化** | Ollama | KV 缓存可在 runner 重载后保留 |
| **MLX 内存管理** | Ollama，Unsloth | 前缀缓存预算控制；追踪 8 GiB 消耗 |
| **上下文并行注意力** | vLLM | L3 key 方案 RFC（#44635） |

---

## 5. 层级定位

```
┌─────────────────────────────────────────────────────────────────┐
│  训练 / 微调                                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ Unsloth：LoRA 运行时，量化感知的训练                      │  │
│  └──────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│  本地运行时（边缘 / 开发者工作站）                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │  llama.cpp   │  │   Ollama     │  │     Unsloth          │  │
│  │（量化/Edge） │  │（MLX/Native）│  │   （微调）           │  │
│  └──────────────┘  └──────────────┘  └──────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│  高性能推理引擎                                                │
│  ┌──────────────────────┐  ┌──────────────────────────────┐   │
│  │       vLLM           │  │         SGLang               │   │
│  │（KV 卸载，TP）      │  │（DeepSeek，LoRA，DSpark）   │   │
│  └──────────────────────┘  └──────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────┤
│  网关 / 编排                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ LiteLLM：多后端代理，限流，可观测性                        │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

- **vLLM**：生产级推理服务器，支持张量并行、KV 卸载和调度器优化
- **SGLang**：推理引擎，DeepSeek 优化和 LoRA 服务能力强劲；与 vLLM 竞争
- **llama.cpp**：面向边缘/CPU/Apple Silicon 的量化推理；硬件覆盖最广（Hexagon、AMD、NV、Metal、Vulkan）
- **Ollama**：开发者友好的本地运行时；MLX 后端支持 Apple Silicon
- **LiteLLM**：网关层；抽象 100+ 后端，处理认证、限流、可观测性
- **Unsloth**：微调层；量化感知训练、LoRA 栈、Unsloth Studio IDE

---

## 6. 趋势信号

### 应用开发者应关注的事项

1. **Blackwell（SM120）尚未准备好用于生产** — vLLM 和 SGLang 都报告 NVFP4 注意力相比 FP8 存在 1.5-2 倍的回退，且 CUDA 图捕获在 RTX PRO 6000 上损坏。在 SM120 修复完成之前，请勿将 Blackwell 推理工作负载部署到生产环境。

2. **量化正在激进扩张** — llama.cpp 现已支持移动端（Hexagon）上的 Q1_0/Q2_0，实现了亚 4 位边缘推理。vLLM 的 Qwen4Exp 磁盘卸载可节省 27 GiB。这一趋势有利于内存受限的部署场景。

3. **LoRA 正在成为一等公民** — SGLang 的 21 部分 LoRA 栈和 Unsloth 的 LoRA 运行时表明，基于适配器的服务正在从实验阶段走向支持阶段。预计通过适配器部署自定义模型将更加便捷。

4. **多模型服务正在巩固** — Unsloth Studio 的"保持多个模型加载"和 vLLM 的 TP 无关 KV 卸载都指向持久化多租户服务。基础设施正在走向成熟。

5. **网关可靠性至关重要** — LiteLLM 的 Redis 限流（单轮通信）和 Docker 镜像验证（cosign）展示了网关层的硬化。这降低了生产代理的延迟和供应链风险。

6. **ROCm 正在改进但仍不稳定** — 多个 AMD 问题持续存在（vLLM TP=2 死锁、Ollama W5700 崩溃、Unsloth gfx1201 失败）。AMD 用户在生产部署前应进行充分测试。

7. **代理基础设施正在涌现** — Unsloth 的 MCP 代理、LiteLLM 的推理 effort 级别，以及 SGLang 的流式护栏都瞄准了代理工作负载。长期运行的自适应任务将获得更好的工具支持。

8. **安全正在收紧** — llama.cpp 的 RPC 堆溢出（#30734）和 LiteLLM 的 cosign 验证镜像表明整个栈都在加强安全硬化。应避免将 ggml-rpc 暴露于不可信网络。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

<think>The user wants me to translate the vLLM Daily Digest to Simplified Chinese. Let me analyze the content and translate it while maintaining the structure and technical accuracy.

Key points:
1. This is a technical developer newsletter about vLLM project updates
2. I need to translate to Simplified Chinese (简体中文)
3. I must preserve all markdown structure, tables, links, code references
4. Use natural technical Chinese register - like a Chinese developer newsletter
5. Keep all technical terms, issue numbers, PR numbers, URLs as-is
6. Output ONLY the translation, no explanation

Let me translate section by section:

**Title**: # vLLM Daily Digest — 2026-10-18

**Today's Highlights**: 
- The project is addressing critical Blackwell (SM120) performance regressions
- ROCm support continues to mature
- Multiple scheduler and encoder-cache deadlock fixes

Let me translate the full content:

---

# vLLM 每日简报 — 2026-10-18

## 今日要闻

vLLM 项目正在修复关键的 Blackwell (SM120) 性能回退问题，尤其是 DeepSeek-V4.1-Flash 解码吞吐量和 NVFP4 KV 缓存相关问题。ROCm 支持持续完善，Kimi-K3 跟踪和 CI 基础设施都有改进，多个调度器和编码器缓存死锁修复正在推进中。

过去 24 小时内**无新版本发布**。

---

## 新模型与硬件支持

- **ROCm Kimi-K3**：特性启用和性能优化的专属跟踪 issue (#50682)。PR #61002 修复了混合 MLA 块配对问题，当 P 和 D 块大小不可整除时（例如 P TP2 2944-token 块 vs D TP1 5760-token 块）导致的问题。

- **Qwen4Exp 磁盘卸载**：PR #59958 新增 `--enagram-config '{"disk_offload": true}'` 支持，在 DGX Spark 上为 Qwen3.8-Flash-Next NVFP4 减少 27.0 GiB 内存占用。

- **DeepSeek-V4.1-Flash GB300**：PR #61868 为 GB300 TP4 添加专用解码内核，支持 DSpark 投机解码（5 个 draft token）。

- **Intel Arc Pro B70**：支持 Qwen3.8-27B MTP 工作负载 (#55425)，不过 MTP2 在 160K 场景下会触发 xe CCS 超时故障

，MTP1 则保持稳定。

---

## 性能与优化

- **DeepSeek-V4.1-Flash 解码 (SM120)**：Issue #56892 报告使用 `--enforce-eager` 时解码吞吐量极低；RTX PRO 6000 Blackwell 上 CUDA graphs 无法使用。PR #61868 针对 GB300 的专用解码进行了优化，但 SM120 图形捕获仍是优先待办事项。

- **NVFP4 KV 缓存回退**：FlashInfer NVFP4 因果预填充在 SM120 上比 FP8 慢约 1.7-1.8 倍 (#50416)。匹配的 profiler 片段显示 NVFP4 为 145.8 ms，而 FP8 约为 81 ms。

- **CUTLASS Small-M FP8 GEMMs (SM12x)**：PR #61331 将小型-M 解码尺寸操作的逐张量 FP8 linear 从 FlashInfer/bmm_fp8 切换到 CUTLASS，消除了不必要的 memset 开销。

- **GLM-5.x MoE 融合**：PR #62174 将 MoE 融合到下一个 RMSNorm 的 all-reduce 中，减少了解码步骤的内核启动次数。

- **MiMo Fused-QKV FP8**：PR #59053 改进 MiMo-V2.6-Flash-RL FP8KV/W4A8 方案的精度。

- **Nemotron-3.5-Lightning 回退**：自 v0.29.0 以来在 DGX Spark (GB10/SM121) 上解码速度降低约 16%，未使用投机解码 (#59770)。

- **W8A8 CUTLASS Ada (SM89)**：在 M=17 桶边缘处性能回退 1.3x-2x (#56924)。

---

## 稳定性与回退

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **严重** | AMD R9700 (gfx1201/RDNA4) TP=2 死锁 — GPU 100% 满载运行 | 待解决 (#40980) | — |
| **高** | DeepSeek-V4.1-Flash CUDA graphs 在 SM120 上不可用 | 待解决 (#56892) | — |
| **高** | NVFP4 KV 缓存在 SM120 上比 FP8 慢 1.7-1.8 倍 | 待解决 (#50416) | — |
| **高** | TurboQuant 工作空间锁定在 3.06 MB，>4096 tokens 需要 12 MB | 待解决 (#43357) | — |
| **中** | 编码器缓存死锁与 drafter look-ahead (EAGLE/MTP) | 待解决 | #60553 |
| **中** | 编码器阻塞的等待请求未重新入队 | 待解决 | #59030 |
| **中** | CUTLASS 块级 FP8 GEMM 拒绝 N % 128 != 0 在 SM120 (#47990) | 待解决 | — |
| **中** | MXFP8 MoE 在 SM_121 回退到 MARLIN，丢失精度 (#43906) | 待解决 | — |

- **RFC：模型开发变更**：Issue #42770 提议重新审视 vLLM 的模型实现原则，以在多样化的模型和硬件上实现统一性能。

- **RFC：可复现评估/基准测试**：Issue #61698 请求为 PR 提供 BYOG（自带 GPU）可复现评估，以解决评审者瓶颈问题。

---

## 这对应用开发者意味着什么

1. **Blackwell (SM120) 用户**：生产环境建议谨慎使用。DeepSeek-V4.1-Flash 在关闭 CUDA graphs 时解码性能显著下降。NVFP4 attention 相比 FP8 有明显回退。请关注即将发布的修复。

2. **ROCm/AMD 用户**：Kimi-K3 支持正在积极上游化。ROCm CI 已重新设计 (#61939)，合并了镜像层。R9700 上的 TP=2 死锁仍未解决——请避免该配置。

3. **DGX Spark (GB10/SM121) 用户**：Nemotron-3.5-Lightning NVFP4 自 v0.29.0 以来显示约 16% 回退。Qwen4Exp 磁盘卸载可节省 27 GiB 内存。

4. **多模态/端到端服务**：带投机解码 (MTP/EAGLE) 的编码器缓存死锁问题在 #60553 中已解决——合并后请更新。

5. **确定性**：#61440 修复了重复 generate() 调用中贪心解码的非确定性（cuBLAS split-K 算法排序）。

6. **编译缓存**：缓存索引的原子写入现在可防止损坏 (#60440)。

**行动项**：在图形捕获修复上线前，避免使用 SM120 + CUDA graphs + DeepSeek-V4.1-Flash 组合。请关注 #40980 以获取 AMD RDNA4 TP>1 修复的更新。

---</think>

# vLLM 每日简报 — 2026-10-18

## 今日要闻

vLLM 项目正在修复关键的 Blackwell (SM120) 性能回退问题，尤其是 DeepSeek-V4.1-Flash 解码吞吐量和 NVFP4 KV 缓存相关问题。ROCm 支持持续完善，Kimi-K3 跟踪和 CI 基础设施都有改进，多个调度器和编码器缓存死锁修复正在推进中。

过去 24 小时内**无新版本发布**。

---

## 新模型与硬件支持

- **ROCm Kimi-K3**：特性启用和性能优化的专属跟踪 issue (#50682)。PR #61002 修复了混合 MLA 块配对问题，当 P 和 D 块大小不可整除时（例如 P TP2 2944-token 块 vs D TP1 5760-token 块）。

- **Qwen4Exp 磁盘卸载**：PR #59958 新增 `--enagram-config '{"disk_offload": true}'` 支持，在 DGX Spark 上为 Qwen3.8-Flash-Next NVFP4 减少 27.0 GiB 内存占用。

- **DeepSeek-V4.1-Flash GB300**：PR #61868 为 GB300 TP4 添加专用解码内核，支持 DSpark 投机解码（5 个 draft token）。

- **Intel Arc Pro B70**：支持 Qwen3.8-27B MTP 工作负载 (#55425)，不过 MTP2 在 160K 场景下会触发 xe CCS 超时/BCS 错误，MTP1 稳定。

---

## 性能与优化

- **DeepSeek-V4.1-Flash 解码 (SM120)**：Issue #56892 报告使用 `--enforce-eager` 时解码吞吐量极低；RTX PRO 6000 Blackwell 上 CUDA graphs 无法使用。PR #61868 针对 GB300 的专用解码进行了优化，但 SM120 图形捕获仍是优先待办事项。

- **NVFP4 KV 缓存回退**：FlashInfer NVFP4 因果预填充在 SM120 上比 FP8 慢约 1.7-1.8 倍 (#50416)。匹配的 profiler 片段显示 NVFP4 为 145.8 ms，而 FP8 约为 81 ms。

- **CUTLASS Small-M FP8 GEMMs (SM12x)**：PR #61331 将小型-M 解码尺寸操作的逐张量 FP8 linear 从 FlashInfer/bmm_fp8 切换到 CUTLASS，消除了不必要的 memset 开销。

- **GLM-5.x MoE 融合**：PR #62174 将 MoE 最终化融合到下一个 RMSNorm 的 all-reduce 中，减少了解码步骤的内核启动次数。

- **MiMo Fused-QKV FP8**：PR #59053 上游化改进了 MiMo-V2.6-Flash-RL FP8KV/W4A8 配方。

- **Nemotron-3.5-Lightning 回退**：自 v0.29.0 以来在 DGX Spark (GB10/SM121) 上不使用投机解码时解码速度降低约 16% (#59770)。

- **W8A8 CUTLASS Ada (SM89)**：在 M=17 桶边缘处性能回退 1.3x-2x (#56924)。

---

## 稳定性与回退

| 严重程度 | 问题 | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **严重** | AMD R9700 (gfx1201/RDNA4) TP=2 死锁 — GPU 100% 满载运行 | 待解决 (#40980) | — |
| **高** | DeepSeek-V4.1-Flash CUDA graphs 在 SM120 上不可用 | 待解决 (#56892) | — |
| **高** | NVFP4 KV 缓存在 SM120 上比 FP8 慢 1.7-1.8 倍 | 待解决 (#50416) | — |
| **高** | TurboQuant 工作空间锁定在 3.06 MB，>4096 tokens 需要 12 MB | 待解决 (#43357) | — |
| **中** | 编码器缓存死锁与 drafter look-ahead (EAGLE/MTP) | 待解决 | #60553 |
| **中** | 编码器阻塞的等待请求未重新入队 | 待解决 | #59030 |
| **中** | CUTLASS 块级 FP8 GEMM 拒绝 N % 128 != 0 在 SM120 (#47990) | 待解决 | — |
| **中** | MXFP8 MoE 在 SM_121 回退到 MARLIN，丢失精度 (#43906) | 待解决 | — |

- **RFC：模型开发变更**：Issue #42770 提议重新审视 vLLM 的模型实现原则，以在多样化的模型和硬件上实现统一性能。

- **RFC：可复现评估/基准测试**：Issue #61698 请求为 PR 提供 BYOG（自带 GPU）可复现评估，以解决评审者瓶颈问题。

---

## 这对应用开发者意味着什么

1. **Blackwell (SM120) 用户**：生产环境建议谨慎使用。DeepSeek-V4.1-Flash 在关闭 CUDA graphs 时解码性能显著下降。NVFP4 attention 相比 FP8 有明显回退。请关注即将发布的修复。

2. **ROCm/AMD 用户**：Kimi-K3 支持正在积极上游化。ROCm CI 已重新设计 (#61939)，合并了镜像层。R9700 上的 TP=2 死锁仍未解决——请避免该配置。

3. **DGX Spark (GB10/SM121) 用户**：Nemotron-3.5-Lightning NVFP4 自 v0.29.0 以来显示约 16% 回退。Qwen4Exp 磁盘卸载可节省 27 GiB 内存。

4. **多模态/端到端服务**：带投机解码 (MTP/EAGLE) 的编码器缓存死锁问题在 #60553 中已解决——合并后请更新。

5. **确定性**：#61440 修复了重复 generate() 调用中贪心解码的非确定性（cuBLAS split-K 算法排序）。

6. **编译缓存**：缓存索引的原子写入现在可防止损坏 (#60440)。

**行动项**：在图形捕获修复上线前，避免使用 SM120 + CUDA graphs + DeepSeek-V4.1-Flash 组合。请关注 #40980 以获取 AMD RDNA4 TP>1 修复的更新。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

<think>The user wants me to translate the SGLang Digest from English to Chinese. I need to follow the rules provided:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
5. Issue/PR references like #12345 and their link text stay as-is.
6. Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate this carefully while preserving all formatting and keeping technical terms in English where appropriate.

Key terms to handle:
- LoRA stack → LoRA 栈
- DeepSeek V4.1 → 保持原样
- GB300, GB10, SM120 → 保持原样 (hardware identifiers)
- PR, Issue references → 保持原样
- FlashInfer → 保持原样
- DFLASH → 保持原样
- MoE → Mixture of Experts 的缩写，可以保留或翻译为"MoE"
- CuTeDSL → 保持原样
- Triton → 保持原样
- NVFP4 → 保持原样
- BF16, FP8 → 保持原样
- ROCm → 保持原样

Let me translate:</think>

# SGLang 速报 — 2026-10-18

## 1. 今日要闻

SGLang 继续快速推进 DeepSeek V4.1 优化，低延迟解码路径已在 GB300 上合并，同时大规模 21 件套 LoRA 运行时已接近完成。社区正在积极排查 GB10 长上下文工作负载的内存耗尽问题，并修复 AMD GPU 专家并行分发的相关 bug。

---

## 2. 版本更新与破坏性变更

*过去 24 小时内无版本发布。*

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 状态 | 备注 |
|-------------|------|------|
| **DeepSeek-V4.1-Flash** | 积极开发中 | 路线图跟踪预填充优化（[#42170](https://github.com/sgl-project/sglang/issues/42170)）；8× RTX PRO 6000 (PCIe) 现场报告显示了可行的配置和实测吞吐量（[#40877](https://github.com/sgl-project/sglang/issues/40877)） |
| **GLM-5.3-Flash** | Bug 排查中 | 多工具 agentic 提示词会导致思考输出退化，重复输出 `!`（[#36669](https://github.com/sgl-project/sglang/issues/36669)） |
| **Gemma4** | Bug | `input_embeds` 请求因排他性错误而崩溃（[#44895](https://github.com/sgl-project/sglang/issues/44895)） |
| **GB10 (DGX Spark)** | 已知限制 | 长预填充（>40k tokens）会耗尽统一内存；worker 在 54k-62k tokens 之间静默死亡（[#36941](https://github.com/sgl-project/sglang/issues/36941)） |
| **SM120 (RTX PRO 6000)** | 性能调研中 | DeepSeek-V4 预填充约 2-7K tok/s vs vLLM/marlin 报告的 ~12.5K（[#33422](https://github.com/sgl-project/sglang/issues/33422)） |
| **AMD ROCm** | Bug 修复中 | Encoder SWA 有界回放导致前缀命中时缓存 KV 损坏（[#44870](https://github.com/sgl-project/sglang/issues/44870)）；EP 分发算法路由 bug（[#44897](https://github.com/sgl-project/sglang/issues/44897)） |

---

## 4. 性能与优化

| 领域 | 变更 | PR / Issue |
|------|------|------------|
| **DSv4.1 DSpark 解码** | GB300 低延迟解码路径已合并 — 联合测试显示显著加速 | [#44626](https://github.com/sgl-project/sglang/pull/44626)、[#44628](https://github.com/sgl-project/sglang/pull/44628)、[#44935](https://github.com/sgl-project/sglang/pull/44935) |
| **DSv4.1 预填充** | mHC 代码清理完成；`q_rope_store` 已合并到 `fused_q_norm_rope` | [#42245](https://github.com/sgl-project/sglang/issues/42245)、[#41657](https://github.com/sgl-project/sglang/issues/41657) |
| **LoRA 运行时（21 件套）** | 第 8–21 部分已交付：MoE LoRA 运行器、CuTeDSL GEMM、FP8/BF16 提供者、Triton 供应商、计划表 | [#42875](https://github.com/sgl-project/sglang/pull/42875) – [#42888](https://github.com/sgl-project/sglang/pull/42888) |
| **AMD MoE** | 从 aiter 路径移除了三个逐层 copy/cast 内核 | [#33916](https://github.com/sgl-project/sglang/pull/33916) |
| **AMD FP32 bias** | 修复了 aiter fp32 路径中 `select_experts` 下溢 bug | [#44797](https://github.com/sgl-project/sglang/pull/44797) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | **GB10 内存耗尽**：长预填充（>40k tokens）耗尽统一内存；worker 静默死亡，无 traceback | 待解决（[#36941](https://github.com/sgl-project/sglang/issues/36941)） |
| **高** | **GLM-5.3 思考输出退化**：多工具 agentic 提示词导致重复输出 `!` | 待解决（[#36669](https://github.com/sgl-project/sglang/issues/36669)） |
| **中** | **推测解码 + abort**：返回的 token 数超过 `max_tokens` | 待解决（[#44839](https://github.com/sgl-project/sglang/issues/44839)） |
| **中** **贪心解码不可复现**：启用 FlashInfer 自动调优 (DFLASH) 后，不同服务器重启时输出不同 | 待解决（[#39597](https://github.com/sgl-project/sglang/issues/39597)） |
| **中** | **Gemma4 input_embeds 崩溃**：请求因 `input_ids`/`inputs_embeds` 排他性错误崩溃 | 待解决（[#44895](https://github.com/sgl-project/sglang/issues/44895)） |
| **中** | **Pause/abort 挂起**：服务器挂起直到看门狗将其终止 | 待解决（[#44835](https://github.com/sgl-project/sglang/issues/44835)） |
| **低** | **Chat API reasoning 回放**：gpt-oss 丢弃回放的 reasoning — 模板读取 `thinking`，SGLang 仅转发 `reasoning_content` | 待解决（[#44931](https://github.com/sgl-project/sglang/issues/44931)） |
| **低** | **Diffusion 实例端口冲突**：并发实例静默重绑定到 port+42 | 待解决（[#43731](https://github.com/sgl-project/sglang/issues/43731)） |

---

## 6. 这对应用开发者意味着什么

1. **DeepSeek V4.1 生产就绪度正在提升** — GB300 的低延迟解码路径已合并，但 Blackwell (SM120) 上的预填充性能仍比 vLLM/marlin 慢约 2 倍，生产部署前需进行基准测试。

2. **长上下文 GB10 工作负载需谨慎** — 超过约 40k tokens 的预填充可能导致 worker 死亡且无优雅错误提示。考虑使用分块或前缀缓存策略。

3. **GLM-5.3 与多工具 agentic 提示词** 可能产生退化输出 — 上线前需充分测试。

4. **LoRA 微调支持即将完善** — 21 件套带来了 NVFP4 MoE LoRA、CuTeDSL FP8/BF16 内核和 Triton 集成，预计自定义 adapter 部署将更便捷。

5. **AMD ROCm 用户** 应关注 encoder SWA 有界回放修复（[#44870](https://github.com/sgl-project/sglang/issues/44870)）— 当前行为会在前缀命中时损坏 KV 缓存。

6. **DFLASH 贪心解码可复现性问题** 意味着 DFLASH 推测解码在不同重启间无法保证确定性输出 — 修复待定。

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

<think>The user wants me to translate the English llama.cpp digest into Chinese, following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the exact structure and using proper technical Chinese terminology.</think>

# llama.cpp 动态 — 2026-10-18

## 1. 今日要闻

项目继续保持快速迭代节奏，本期重点包括：量化格式扩展（Hexagon 支持 Q1_0/Q2_0）、新模型架构支持（Kolibri-1 MoE、Granite 256 选项switch决策），以及多项后端优化。然而，一个重要的性能回退被修复：PR #30733 回滚了 MELLUM 架构变更（#30584），原因是该变更导致 CUDA 上出现 8x 性能下降。另外还报告了一个安全相关的 RPC 堆溢出 bug（#30734）。

---

## 2. 版本发布与破坏性变更

过去 24 小时内无正式版本发布。但有一个重要的回滚：

- **PR #30733**：回滚 "graph: add precision handling for MELLUM architecture (#30584)" — 修复 #30704 和 #30678。原始 PR 导致 CUDA 和 Vulkan 后端性能严重下降。

---

## 3. 新模型与硬件支持

| 模型 / 硬件 | 详情 | PR/提交 |
|-------------|------|---------|
| **Kolibri-1** (Aleph-Alpha) | 德英双语 MoE 推理模型，78B 参数，3.46B 激活，50 层，384 个路由专家 + 1 个共享专家 | #b11709 / #30673 |
| **Granite switch decision** | 256 选项 switch 决策支持 | #b11707 / #30693 |
| **Hexagon (Q1_0, Q2_0)** | 通过 HMX 和 HVX 内核支持原生量化，2D 平铺布局 | #b11716 / #30122 |
| **AMD HIP (Q1_0)** | 使用 `__builtin_amdgcn_perm` 进行 q1_0 解包 | #b11715 / #29927 |
| **CUDA grouped experts** | MoE 模型 top-k 融合，支持图优化 | #b11710 / #29181 |

---

## 4. 性能与优化

| 领域 | 变更 | PR/提交 |
|------|------|---------|
| **CUDA MMVQ** | 更快的多矩阵向量量化（低比特类型） | #b11713 / #30517 |
| **Vulkan flash attention** | Q4_0 KV cache 新的解包+转置快速路径 — 此前仅 Q8_0 启用 | #30738 |
| **SYCL** | 通过模板化合并 fp16/fp32 解包 switch；合并重复的 mmq 启动体 | #30740, #30739 |
| **OpenCL GEMM** | q4_0、q4_k、q6_k 的协作式 DP4A GEMM — 提升 pp2、pp3、pp4 | #30741 |
| **CPU gelu_quick** | 直接计算 `x*sigmoid(1.702x)`，无需 fp16 查找表（减少约 1e-3 误差） | #30737 |
| **SYCL IQ3 崩溃** | 修复 Qwen3.8-27B-GSQ-RCO-IQ3_S 使用 `--spec-type draft-mtp` 时的崩溃 | #30604 |
| **RPC 优雅失败** | 不可达端点时干净失败，避免 SIGABRT | #30415 |

---

## 5. 稳定性与回退

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **Critical** | #30734 — ggml-rpc：6 个操作中 op_params/ne 不匹配导致堆 OOB 写入（预认证验证绕过） | OPEN |
| **High** | #30704 — Mellum 自 #30584 起在 CUDA 上慢 8 倍（ffn_moe_down MUL_MAT_ID 回退到 CPU） | OPEN；已在 #30733 回滚 |
| **High** | #27330 — CUDA 图在 RTX 5090 / sm_120 上挂起；`GGML_CUDA_DISABLE_GRAPHS=1` 可作为临时方案 | OPEN（12 条评论） |
| **Medium** | #30726 — Metal：大上下文 prompt 处理期间偶发数分钟卡顿（qwen4exp） | OPEN |
| **Medium** | #30742 — qwen35 mmproj 推理质量显著低于 transformers | OPEN |
| **Medium** | #30697 — `--moe-cache-mib` 在 Vulkan 上加载时崩溃（RX 6900 XT） | OPEN |
| **Medium** | #28111 — CUDA mul_mat 在 SM120 上对 n=5,8 的 IQ 量化不支持批处理不变性（影响投机解码） | OPEN |
| **Low** | #28230 — mtmd_helper_bitmap_init_from_buf：webp 缓冲区解码失败 | OPEN |
| **已修复** | #30695 — Vulkan 多设备系统上 spec decode + 大 -c 时约 3x 解码回退 | CLOSED |

---

## 6. 应用开发者需要关注的事项

1. **量化灵活性提升**：Hexagon 上的 Q1_0/Q2_0 支持使得在移动端/边缘高通硬件上进行超低内存推理成为可能 — 适用于端侧部署场景。

2. **MoE 模型支持增强**：Kolibri-1 和 grouped experts top-k 融合改善了 Mixture-of-Experts 模型的吞吐量。多 GPU MoE 缓存支持（#30112）也已近期合入。

3. **关注 CUDA 性能**：如果使用 MELLUM 模型，请在 CUDA 上验证性能 — 性能回退严重到需要完全回滚。修复已在 #30733 中完成。

4. **安全提醒**：RPC 堆 OOB 写入（#30734）是 ggml-rpc 中的预认证漏洞。避免将 RPC 服务器暴露于不可信网络。

5. **Vulkan 多 GPU 用户**：如果在多 Vulkan 设备系统上使用大上下文投机解码，请留意 #30695 中报告的约 3x 回退（现已关闭，可能需要重新测试）。

6. **模型下载改进**：HF Hub 集成（#29584）现在自动解析 `<quant>-<sidecar>` 标签 — 单独下载 draft 或 mmproj 时会自动拉取正确的 sidecar 文件。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

<think>The user wants me to translate the Ollama digest from English to Chinese (Simplified). I need to translate everything while:
1. Keeping all markdown structure exactly the same
2. Preserving URLs, issue numbers, PR numbers, code references
3. Not translating technical terms that are commonly used in Chinese
4. Using natural technical Chinese register

Let me go through section by section and translate it properly.</think>

# Ollama 速报 — 2026-10-18

## 1. 今日要点

本日主要围绕后端回归问题和 API 优化展开。关键问题包括：精度缺陷影响可复现性（seed 值超过 2^53 会产生相同输出）、Vulkan 运行器在 iGPU 长请求场景下出现损坏、RDNA1 GPU 上的 ROCm 崩溃。正面进展方面，多个体验优化 PR 已合并：int64 精度修复、Modelfile 单引号支持、embedding 端点验证。过去 24 小时内无新版本发布。

---

## 2. 发布与破坏性变更

**过去 24 小时内无版本发布。**

| 变更 | 说明 | PR |
|------|------|-----|
| API 字段现已填充 | `ShowResponse` 现在携带有效的 `renderer` 和 `parser` 值；新增 `template_source` 字段 | [#19095](https://github.com/ollama/ollama/pull/19095) |
| Embedding 端点验证 | 现在要求模型具备 embedding 能力才能调用 embed 端点 | [#19091](https://github.com/ollama/ollama/pull/19091) |
| Modelfile 解析 | 单引号字符串（`'...'`）和三引号字符串（`'''...'''`）现在正确取消转义 | [#19088](https://github.com/ollama/ollama/pull/19088) |
| 打包提示 | `ollama create` 现在打印自动检测的默认值和缺失字段的提示信息 | [#19094](https://github.com/ollama/ollama/pull/19094) |

---

## 3. 新模型与硬件支持

| 领域 | 更新 | Issue/PR |
|------|------|----------|
| **MLX** | 新增 Kolibri 1 支持 | [#18780](https://github.com/ollama/ollama/pull/18780) |
| **MLX** | 新增 PPLX Decider v1.2 支持（基于 Qwen3.5 的决策评分器） | [#19072](https://github.com/ollama/ollama/pull/19072) |
| **Vulkan** | GPT-OSS 20B（MXFP4，20.9B）在 AMD Radeon Pro 5700 XT（16 GB）上返回空响应 — CPU 模式正常 | [#19060](https://github.com/ollama/ollama/issues/19060) |
| **ROCm** | AMD Radeon Pro W5700（gfx1010）崩溃，显示 `GGML_ASSERT(max_blocks_per_sm > 0)` | [#19075](https://github.com/ollama/ollama/issues/19075) |
| **多 GPU** | 多 GPU 间内存分配不均 — GPU0 比 GPU1 使用更多内存 | [#7047](https://github.com/ollama/ollama/issues/7047) |

---

## 4. 性能与优化

| 领域 | 更新 | 参考 |
|------|------|------|
| **指标监控** | 新增可选的 Prometheus `/metrics` 端点（`OLLAMA_METRICS=1`），提供队列、模型和请求 gauge 指标 | [#16998](https://github.com/ollama/ollama/pull/16998) |
| **MLX 加载** | 加载进度报告和卡顿检测，避免误取消慢速加载 | [#17834](https://github.com/ollama/ollama/pull/17834) |
| **预填充缓存** | 实验性 KV 缓存持久化，支持运行器重启后保留（`OLLAMA_PREFILL_CACHE=1`） | [#17953](https://github.com/ollama/ollama/pull/17953) |
| **MLX 内存** | 前缀缓存在 32 GB Apple Silicon 上可占用 8 GiB，导致工作流换入交换区 | [#18131](https://github.com/ollama/ollama/issues/18131) |
| **内存增长** | MLX 运行器每个请求约增长 0.147 GiB 驻留内存，最终稳定在约 28.5 GiB | [#17924](https://github.com/ollama/ollama/issues/17924) |

---

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 说明 | 状态 |
|----------|------|------|------|
| **高** | [#18980](https://github.com/ollama/ollama/issues/18980) | glm-5.3-flash 请求中 5-8% 出现大规模退化（"the the the..."）— 确认为主机端数据损坏 | OPEN |
| **高** | [#19078](https://github.com/ollama/ollama/issues/19078) | 整数 `seed` 超过 2^53 精度丢失（JSON 解析为 float64）；不同 seed 产生相同输出 | OPEN |
| **高** | [#19090](https://github.com/ollama/ollama/issues/19090) | Vulkan iGPU 上 d1-omni 单请求 >6.5k token 后运行器损坏；后续请求返回错误答案但 HTTP 200 | OPEN |
| **高** | [#19084](https://github.com/ollama/ollama/issues/19084) | NVIDIA Jetson Orin（8 GB）因无限制的提示词缓存导致 OOM 冻结 | OPEN |
| **中** | [#19075](https://github.com/ollama/ollama/issues/19075) | Radeon Pro W5700 上 ROCm 回归：推理时 GGML_ASSERT 崩溃 | OPEN |
| **中** | [#19060](https://github.com/ollama/ollama/issues/19060) | GPT-OSS 20B 在 AMD Radeon Pro 5700 XT 上通过 Vulkan 返回空响应 | OPEN |
| **中** | [#18817](https://github.com/ollama/ollama/issues/18817) | 导入 GSQ-RCO 量化 Qwen3.8-Flash-Next 时出现 "unsupported tensor size overflows" | CLOSED |
| **中** | [#18954](https://github.com/ollama/ollama/issues/18954) | Windows 上 GPU 发现子进程弹出控制台窗口 | OPEN（修复中：[#19080](https://github.com/ollama/ollama/pull/19080)） |
| **低** | [#19089](https://github.com/ollama/ollama/issues/19089) | `ollama ps` 对 15 GB 模型报告 586 MB | OPEN |
| **低** | [#19029](https://github.com/ollama/ollama/issues/19029) | 右键菜单标签 C 字符串未释放（桌面应用内存泄漏） | OPEN |

---

## 6. 对应用开发者的影响

1. **可复现性可能失效** — 如果你的应用使用超过 2^53 的 seed 值（如 9,007,199,254,740,992），预期会出现非确定性行为。[#19081](https://github.com/ollama/ollama/pull/19081) 中的修复尚未发布到稳定版。

2. **避免在 Vulkan iGPU 上使用长上下文** — d1-ommi 损坏问题（#19090）意味着在集成显卡上扩展请求会静默返回错误答案。这对代理工作流尤其危险。

3. **边缘设备需监控内存** — Jetson Orin 用户应显式设置 `keep_alive=0` 并考虑减少上下文窗口，因为默认的提示词缓存会占满 8 GB 预算。

4. **Windows 桌面应用用户** — GPU 发现时的控制台窗口闪烁问题将在下个版本修复（#19080），但目前影响用户体验。

5. **API 变更即将到来** — `/api/show` 响应中的 `renderer`/`parser` 字段现已填充，可能影响解析这些响应的工具。另外，调用非 embedding 模型的 embedding 端点现在会返回错误。

6. **Apple Silicon 上的 MLX 用户** — 大型 MLX 工作流可能因 8 GiB 前缀缓存预算而触发交换区使用。这是有意设计，非内存泄漏，但在 32 GB 机器上运行大型模型时需注意规划。

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

<think>The user wants me to translate the LiteLLM digest from English to Chinese (Simplified). I need to:

1. Translate all the content to Simplified Chinese
2. Keep all Markdown structure exactly as-is (headings, tables, lists, etc.)
3. Keep URLs, issue/PR references, version numbers, file paths, API names, etc. in their original form
4. Use natural technical Chinese register

Let me go through and translate this carefully while preserving the format.</think>

# LiteLLM 速报 — 2026-10-18

## 今日要闻

LiteLLM 项目继续快速推进，v1.103.5 版本通过 cosign 引入已验证的 Docker 镜像，同时正在修复多个高影响力的 bug，包括修复 v1.103.0 以来团队作用域模型批量检索返回 403 的问题。路由器的异步完成 CustomLogger 回调问题经过 26 条评论讨论后已解决。性能优化方面包括大幅减少 Redis 轮询次数以降低速率限制延迟。

---

## 发布公告与重大变更

- **v1.103.5 发布** — 所有 LiteLLM Docker 镜像现均已通过 cosign 签名验证。每次发布使用同一密钥，提交哈希为 `0112e53`。用户应在部署前验证镜像。[GitHub](https://github.com/BerriAI/litellm/releases/tag/v1.103.5)

- **重大变更：非数字 `thinking.budget_tokens` 现返回 400** — PR #46601 改变了托管 vllm、非 Claude 的 `/v1/messages` 以及 `litellm.adapter_completion` 的行为。使用 `reasoning_effort_levels` 的部署现每次路由都会对 effort 进行四舍五入。升级前请检查这两项。[GitHub](https://github.com/BerriAI/litellm/pull/46601)

- **重大变更：Prompt 缓存断点重命名为 cache_control** — PR #46391 将 Claude on anthropic、Vertex、Azure AI、Bedrock 和 Bedrock Mantle 端点上的 `prompt_cache_breakpoint` 重新命名为同一块上的 `cache_control`。[GitHub](https://github.com/BerriAI/litellm/pull/46391)

- **重大变更：流式 guardrails 现发送错误事件** — PR #46953 在 guardrail 阻止流式响应时，以错误事件结束聊天完成流，然后发送 `data: [DONE]`。此前连接会被直接切断。[GitHub](https://github.com/BerriAI/litellm/pull/46953)

---

## 新模型与硬件支持

- **Claude Sonnet 4 上下文窗口修复** — PR #47202 修正了五个 Bedrock Claude Sonnet 4 模型 ID 的 `max_input_tokens` 从 1M 到 200K，按照模型卡片。[GitHub](https://github.com/BerriAI/litellm/pull/47202)

- **功能：FunASR 音频/转录提供者** — Issue #29367 请求添加 FunASR 作为原生提供者。FunASR 和 SenseVoice 是具有特定许可的工具包。[GitHub](https://github.com/BerriAI/litellm/issues/29367)

- **功能：Gemini Live Avatar 支持** — Issue #43166 请求在 Gemini Live API（`bidiGenerateContent`）中支持 `avatar_config` / 定制 Avatar，以实现实时唇形同步视频头像。[GitHub](https://github.com/BerriAI/litellm/issues/43166)

---

## 性能优化

- **Redis 速率限制：3 次往返 → 1 次** — PR #47197 将速率限制检查（请求、飞行中、代币限制）合并为单次 Redis 往返，并通过哈希发送脚本而非完整 Lua 代码。[GitHub](https://github.com/BerriAI/litellm/pull/47197)

- **Headroom 压缩提示检查** — PR #47200 添加可选 headers 以按请求返回 Headroom 的压缩提示，对于过大提示会省略原因。[GitHub](https://github.com/BerriAI/litellm/pull/47200)

- **代币计数改进** — PR #46777 在响应中添加 `litellm_count_source` 和 `litellm_count_model` 字段，支持配置代币计数方法。[GitHub](https://github.com/BerriAI/litellm/pull/46777)

- **Gemini TTS 费用日志修复** — PR #44551 修正了 Gemini TTS 桥接的费用日志和使用量传播，防止重复调用 Google API。[GitHub](https://github.com/BerriAI/litellm/pull/44551)

---

## 稳定性与回归问题

- **严重：批量检索自 v1.103.0 起对团队作用域模型返回 403** — Issue #46958。`authorize_model_for_key` 检查内部 `model_name_{team_id}_{uuid}` 是否在 `team.models` 中，但后者仅存储公开名称。[GitHub](https://github.com/BerriAI/litellm/issues/46958)

- **严重：企业版 `get_spend_routes` 返回裸 500** — Issue #47011。没有企业版许可证时，`/key/generate` 和 `/user/new` 抛出转换为 500 的纯 `ValueError`。修复 PR #47112 改为正确的 403。[GitHub](https://github.com/BerriAI/litellm/issues/47011) [修复](https://github.com/BerriAI/litellm/pull/47112)

- **高优先级：SAP GenAI Hub deployment_url 每次调用都重新获取** — Issue #47096。每次使用 `sap/` 模型的 `litellm.acompletion()` 都会进行 2 次阻塞 HTTP GET（约 870ms 开销）来发现编排部署 URL。[GitHub](https://github.com/BerriAI/litellm/issues/47096)

- **高优先级：Helm 迁移 Job 自 v1.105.x 起 OOMKilled 于 1Gi** — Issue #47076。prisma 迁移在迁移后运行 `prisma generate`，导致峰值 1.15 GiB，在非 root 镜像中失败。[GitHub](https://github.com/BerriAI/litellm/issues/47076)

- **中优先级：并发 /v1/messages 字典变更** — Issue #44748。负载下流式请求偶尔会因"dictionary changed size during iteration"失败，但仍记录费用。[GitHub](https://github.com/BerriAI/litellm/issues/44748)

- **中优先级：流式缓存存储错误的 finish_reason** — Issue #47014。缓存流存储 `finish_reason: "stop"` 而非 `"length"`，回放时丢弃 `completion_tokens_details`。[GitHub](https://github.com/BerriAI/litellm/issues/47014)

- **中优先级：Vertex/Gemini 上下文缓存重排对话** — Issue #47046。当 `cache_control` 在非前缀消息上时，请求是将该消息移到历史前面并移除系统提示后发送的。[GitHub](https://github.com/BerriAI/litellm/issues/47046)

- **低优先级：Langfuse HTTP headers 未到达 API** — Issue #13901。通过 LiteLLM 代理时，自定义 headers 如 `langfuse_trace_user_id` 无法到达 Langfuse API。[GitHub](https://github.com/BerriAI/litellm/issues/13901)

---

## 这对应用开发者的意义

1. **验证 Docker 镜像** — v1.103.5 引入 cosign 签名验证。确保在生产环境运行前验证部署流水线中的镜像。

2. **检查 reasoning budget tokens** — 如果你在非数字值的 `thinking.budget_tokens` 使用 `thinking.budget_tokens`，升级后可能会看到 400 错误。检查你的配置。

3. **审查批量/团队模型访问** — 如果你在批量操作中使用团队作用域模型，请彻底测试，因为 v1.103.0 引入了正在修复的 403 回归问题。

4. **速率限制更快** — 如果你使用 Redis 背书的速率限制，部署 PR #47197 后预期延迟更低（单次往返 vs 三次）。

5. **流式 guardrails 信息更丰富** — 流中阻止现在返回正确的错误事件而非断开连接，使代理调试更容易。

6. **代币计数现在更明确** — 响应现在通过新字段指示计数是真实还是估算，对成本核算准确性很有用。

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

<think>The user wants me to translate the Unsloth digest into Simplified Chinese, following specific rules about translation. Let me analyze the content and translate it appropriately while preserving the structure.

Key points to remember:
- Keep headings, tables, lists, bold/italic, etc.
- Keep URLs, numbers, dates, issue/PR references
- Keep technical terms like "gradient checkpointing", "fused cross-entropy", etc. in English
- Use natural technical Chinese register
- Output ONLY the translation, no preamble or markdown fences

Let me translate section by section:

## 1. Today's Highlights

今日要闻

## 2. Releases & Breaking Changes

版本发布与重大变更

## 3. New Model & Hardware Support

新模型与硬件支持

## 4. Performance & Optimization

性能与优化

## 5. Stability & Regressions

稳定性与回归问题

## 6. What This Means for Application Developers

这对应用开发者意味着什么

Now let me translate the rest of the content:

**Unsloth Digest — 2026-10-18**
Unsloth 要闻 — 2026年10月18日

**The Unsloth Studio team landed substantial improvements to multi-model management and MCP (Model Control Protocol) agents, enabling features like persistent model loading, queue management for video tasks, and system proxy support across platforms. Critical training fixes landed for Nemotron loss normalization and Qwen PLE document boundary handling, while a Windows installer hang issue was partially resolved by optimizing prebuilt wheel downloads.**

Unsloth Studio 团队在多模型管理和 MCP（Model Control Protocol）智能体方面取得了重大改进，实现了持久化模型加载、视频任务队列管理以及跨平台系统代理支持。关键的训练修复包括 Nemotron 损失归一化和 Qwen PLE 文档边界处理，同时通过优化预编译 wheel 下载部分解决了 Windows 安装程序卡顿的问题。

Now for the releases section - straightforward translation:

- **No new releases in the last 24 hours**

过去24小时内无新版本发布。

Next section - New Model & Hardware Support:
 
I'm translating the key technical details about video and image quantization defaults. The system now automatically loads hosted quantized text encoders for video families, which significantly improves loading efficiency and memory consumption. This approach applies similarly to image families with large text encoders, leveraging hosted quantized encoders to optimize performance.

The AMD ROCm improvements are ongoing, focusing on resolving PyTorch ROCm binding challenges with AMD RDNA 2 graphics processors. The team is addressing compatibility issues across different AMD GPU architectures, particularly for RX 6800 XT and Windows AMD hardware configurations.

For performance optimization, the Windows installer received a significant enhancement by reducing prebuilt-wheel download size and implementing progress indicators. This addresses user-reported installation challenges on Reddit. Additionally, long chat histories now benefit from virtualization, dramatically reducing memory usage and improving overall system efficiency.

The latest update introduces advanced model loading preview capabilities, allowing users to understand model loading mechanics before full commitment. Quantized text encoder performance has been substantially improved, with hosted encoders loading faster and consuming approximately 50% less video memory compared to bf16 equivalents.

In terms of stability, a high-priority issue involves block compile functionality potentially disrupting checkpoint recomputation during distributed runs, which can trigger `CheckpointError` in the backward pass of step 1. A temporary workaround involves setting `UNSLOTH_BLOCK_COMPILE=0`, though the issue remains open.

A critical fix for long-context chat lag on Windows 10/Unsloth Desktop has been successfully closed after extensive discussion. Additional open issues include window resize problems on specific Linux environments, macOS compatibility errors, and UI-related challenges with sampling settings and progress bar inconsistencies.

Developers have implemented targeted solutions, including normalized loss computation across gradient accumulation, refined LM-head weight fake quantization techniques, and precise handling of packed document boundaries in Qwen PLE configurations. Date processing for specialized models like Gemma 4 and GLM has also been updated to ensure accurate current date representation.

For application developers, key implications include enhanced multi-model serving capabilities with flexible GPU memory management and more robust MCP agent configurations. These improvements enable smoother production-ready workflows for long-running tasks, featuring advanced load tracking and preview mechanisms.

The latest updates introduce clearer error handling for audio workflows, stronger Windows ARM deployment security with Authenticode signing, and improved system proxy support across different platforms. Developers should monitor the `UNSLOTH_BLOCK_COMPILE` flag for distributed training with gradient checkpointing, ensuring optimal performance and compatibility.</think>

# Unsloth 要闻 — 2026年10月18日

## 1. 今日要闻

Unsloth Studio 团队在多模型管理和 MCP（Model Control Protocol）智能体方面取得了重大改进，实现了持久化模型加载、视频任务队列管理以及跨平台系统代理支持。关键的训练修复包括 Nemotron 损失归一化和 Qwen PLE 文档边界处理，同时通过优化预编译 wheel 下载部分解决了 Windows 安装程序卡顿的问题。

## 2. 版本发布与重大变更

- **过去24小时内无新版本发布**

## 3. 新模型与硬件支持

- **视频/图像量化默认值调整**：视频系列现默认使用托管量化文本编码器；带有大型文本编码器的图像系列同样默认加载托管量化编码器，以提升加载速度并降低内存占用（[#14000](https://github.com/unslothai/unsloth/pull/14000)、[#14009](https://github.com/unslothai/unsloth/pull/14009)）
- **AMD ROCm 持续优化**：正在修复 AMD RDNA 2（gfx1030）和 gfx1201 GPU 上的 PyTorch ROCm 绑定问题；RX 6800 XT 和 Windows AMD 环境存在已知问题（[#14057](https://github.com/unslothai/unsloth/issues/14057)、[#14085](https://github.com/unslothai/unsloth/issues/14085)）

## 4. 性能与优化

- **Windows 安装器修复**：预编译 wheel 下载体积减半并新增进度显示，解决了 Reddit 用户反馈的更新安装卡顿问题（[#14051](https://github.com/unslothai/unsloth/pull/14051)）
- **聊天历史虚拟化**：长聊天历史现采用虚拟化技术，大幅降低内存占用（[#14001](https://github.com/unslothai/unsloth/pull/14001)）
- **模型加载预览**：MCP 智能体现在支持在提交前预览模型加载位置和方式（[#14090](https://github.com/unslothai/unsloth/pull/14090)）
- **量化文本编码器性能**：托管量化编码器加载速度更快，VRAM 占用较 bf16 降低约 50%（[#14009](https://github.com/unslothai/unsloth/pull/14009)）

## 5. 稳定性与回归问题

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | Block compile 导致分布式训练中断点重算失败（梯度检查点在第1步反向传播时抛出 `CheckpointError`） | 待解决；临时方案：设 `UNSLOTH_BLOCK_COMPILE=0`（[#14063](https://github.com/unslothai/unsloth/issues/14063)） |
| **高** | Windows 10/Unsloth Desktop 长上下文聊天卡顿 | 已关闭；13条评论 — 似乎已解决（[#12552](https://github.com/unslothai/unsloth/issues/12552)） |
| **中** | AppImage 在 Arch/GNOME/Wayland 环境下窗口调整大小失效，帧率异常 | 待解决；v0.1.902-beta（[#12845](https://github.com/unslothai/unsloth/issues/12845)） |
| **中** | MAC v0.1.908-beta：`scrollbarGutter.includes` 报错 undefined | 待解决（[#14055](https://github.com/unslothai/unsloth/issues/14055)） |
| **中** | 预设保存时采样设置被破坏 | 待解决（[#14068](https://github.com/unslothai/unsloth/issues/14068)） |
| **中** | 进度条显示数值不一致 | 待解决（[#14061](https://github.com/unslothai/unsloth/issues/14061)） |
| **低** | 文档：Homebrew 标签页错误显示 winget 命令 | 已关闭；已修复（[#14070](https://github.com/unslothai/unsloth/issues/14070)） |

**已修复的问题：**

- **Nemotron 梯度累积时损失归一化**：原错误计算 `mean(S_g / N_g)`，现修正为正确的 `sum(S_g) / sum(N_g)`（[#14002](https://github.com/unslothai/unsloth/pull/14002)）
- **Fused CE 中 LM-head 权重 fake quantization**：训练现使用 fake-quantized 值而非原始权重（[#14006](https://github.com/unslothai/unsloth/pull/14006)）
- **Qwen PLE 打包文档边界**：EOS 现正确重置膨胀卷积状态（[#14011](https://github.com/unslothai/unsloth/pull/14011)）
- **Gemma 4（Think off）和 GLM** 现能正确获取当前日期（[#14013](https://github.com/unslothai/unsloth/pull/14013)）

## 6. 这对应用开发者意味着什么

1. **多模型服务更加健壮**：新增的"保持多模型加载"模式（关闭 / 空间足够时 / 始终）和模型加载/卸载追踪为开发者提供了更精细的 GPU 内存控制和会话持久化管理能力，特别适合智能体工作流场景。

2. **MCP 智能体可投入生产环境**：智能体现在支持在单次调用中追踪长时间任务，并在每次模型加载/卸载时接收回调，减少了轮询开销，支持更好的无人值守运行。

3. **音频/图像/视频工作流的错误提示更清晰**：Audio.cpp 现会显示具体原因和修复方案，而非通用 500 错误；Speak/Clone 表单动态隐藏未使用的参数。

4. **Windows ARM 部署安全性加强**：Windows ARM wheelhouse 构建现对 Arrow 和 sqlite-vec 标签进行固定，并启用 Authenticode 签名（[#14092](https://github.com/unslothai/unsloth/pull/14092)）。

5. **系统代理支持**：桌面浏览器面板现遵循 macOS、Windows 和 Linux 的系统代理设置——对企业/网络环境非常重要。

6. **功能标志需关注**：使用梯度检查点的分布式训练开发者，请留意 `UNSLOTH_BLOCK_COMPILE` 标志，直至断点重算问题完全解决。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*