# AI 基础设施日报 2026-09-15

> 生成时间: 2026-09-15 00:51 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

**跨项目AI基础设施生态系统报告 — 2026-09-15**

---

### **1. 生态系统概览**

2026年第三季度，AI推理基础设施格局呈现出高度专业化与碎片化特征：高性能推理引擎（vLLM、SGLang）在云规模LLM部署中激烈竞争，而轻量级运行时（llama.cpp、Ollama）则加速渗透边缘与混合环境。LiteLLM等网关通过企业级可观测性统一多供应商接入，Unsloth等微调工具则聚焦开发者体验与本地工具链。贯穿全生态的核心主题是**规模化下的生产级可靠性**——关键修复主导开发活动，新功能让位于MoE、长上下文代理与多GPU异构性暴露的系统性不稳定问题，尤其是KV缓存、量化与推测解码中的深层缺陷。

---

### **2. 活动对比**

| 项目         | 开放Issue | 开放PR | 最近发布             | 发布类型           |
|--------------|-----------|--------|----------------------|--------------------|
| **vLLM**     | 42        | 18     | v0.29.0（稳定版）    | 维护更新           |
| **SGLang**   | 58        | 21     | —                    | 仅夜间构建         |
| **llama.cpp**| 37        | 24     | **v0.4.1**（2026-09-15） | **破坏性更新**     |
| **Ollama**   | 49        | 19     | **v0.34.1-rc1**      | 发布候选版         |
| **LiteLLM**  | 31        | 12     | v1.87.1              | 维护更新           |
| **Unsloth**  | 45        | 452*   | —                    | CI/PR激增          |

> *注：Unsloth的452个PR反映的是CI/基础设施重构与沙箱安全审计，而非功能开发。多数为非功能性或自动化变更。*

---

### **3. 模型支持竞赛**

| 项目         | 新增模型支持                                                                 | 架构/量化进展                                                                                     |
|--------------|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| **vLLM**     | DeepSeek-V4.1-Flash、Nemotron-3、MiniMax-M3、GLM-5.3-Flash                   | **SWA有界重放**、**MXFP8/NVFP4 KV缓存**、**MoE卸载**、**FlashMLA V4.1内核**                     |
| **SGLang**   | SenseNova-U1/U1.5、Qwen3.8-Flash-Next-FP8                                    | **FP8 KV缓存（Hopper）**、**NVFP4路由权重**、**AMD上的MXFP4**、**DCP分布式KV**                  |
| **llama.cpp**| Maple 20B-A1B、腾讯Hy 4、Spark2.5、**SenseNova U1（多模态）**                | **Ampere/RDNA3上的FP32回退**、**GGUF全支持**、**SYCL基数TOP_K**                                 |
| **Ollama**   | **Q2_0 GGUF支持**、Gemma 4 E4B（边缘测试）                                   | **MLX前缀缓存淘汰**、**Q2_0张量加载**（超低比特边缘）                                           |
| **LiteLLM**  | 通过Bedrock `mantle`支持Gemma 4，通过Fireworks.ai支持glm-5p3-fast            | **嵌入模态计费**（音频/图像/文本）、**Vertex AI定价更新**                                       |
| **Unsloth**  | 本地模型发现：Ollama、LM Studio、Hermes                                      | **通过llama-server支持GGUF**、**MLX令牌流修复**                                                 |

**领先者**：**vLLM**与**SGLang**在架构领导力上并列，均推动面向1000亿级以上模型的**MoE + KV缓存优化**；**llama.cpp**在**硬件广度**（SYCL、HIP、Vulkan、macOS）与**边缘量化**上领先；**Ollama**在**本地推理开发者体验**上领先；**LiteLLM**在**多云模型网关覆盖**上领先。

---

### **4. 性能前沿**

优化工作集中在五个关键维度：

- **KV缓存**：  
  - *vLLM*：**SWA有界重放**（开销降低40%）、**带准入策略的文件系统分层**。  
  - *SGLang*：**分布式KV缓存（#21846）** 与 **HiCache压缩**，专为代理工作流设计。  
  - *llama.cpp*：**LLAMA_STATE_SEQ_FLAGS_PARTIAL_ONLY** 支持、**SYCL图重放**。  
- **量化**：  
  - *vLLM/SGLang*：在Blackwell/Hopper上实现**NVFP4/MXFP8 KV缓存**；**FP4路由权重**。  
  - *Ollama*：**Q2_0 GGUF支持**——首个主流运行时实现边缘端低于10亿参数模型推理。  
- **批处理与推测解码**：  
  - *vLLM*：**DFlash在>100k上下文时不稳定**，**SWA**为推荐替代方案。  
  - *SGLang*：**推测解码 + 流水线并行现已兼容**。  
- **分布式推理**：  
  - *SGLang*：**DCP + fi_a2a** 作为默认通信后端；**混合MoE状态损坏**正修复中。  
  - *vLLM*：**通过LFRU实现MoE专家卸载**，使1000亿+模型可在<24GB GPU上运行。  
- **内核**：  
  - *vLLM*：为DeepSeek-V4.1提供FlashMLA V4.1融合内核。  
  - *llama.cpp*：CUTLASS 4.6后处理（SGLang）、**CUDA交错**、**SYCL合并softmax**。  

**主导前沿**：**KV缓存效率**（尤其针对长上下文代理）与**KV状态的低比特量化**——而不仅是权重。

---

### **5. 层级定位**

| 项目         | 主要层级                   | 次要层级                   | 差异化优势 |
|--------------|----------------------------|----------------------------|------------|
| **vLLM**     | **高吞吐推理引擎**         | 模型服务（API）            | 专为**云规模MoE + 长上下文**优化；内核级主导。 |
| **SGLang**   | **推理引擎**               | 分布式KV服务               | **代理优先设计**；DCP与分布式缓存为核心原语。 |
| **llama.cpp**| **本地运行时 / 边缘**      | 模型服务（通过服务器）     | **硬件无关**（SYCL、HIP、Vulkan、Metal）；**原生GGUF**；无云依赖。 |
| **Ollama**   | **本地运行时 / 边缘**      | 网关（API代理）            | **开发者优先体验**；无缝模型加载、MLX集成、桌面应用。 |
| **LiteLLM**  | **多云网关**               | 可观测性 / 计费            | **API抽象 + 成本控制**；统一速率限制、支出追踪与模型路由。 |
| **Unsloth**  | **微调 + 本地工具链**      | 本地推理包装器             | **开发者工具链**（聊天重放、模型目录、沙箱）；非生产级引擎。 |

**核心洞察**：vLLM与SGLang在**云推理层**竞争；llama.cpp与Ollama主导**边缘/本地层**；LiteLLM掌控**网关/抽象层**；Unsloth深耕**训练/开发工具层**。

---

### **6. 趋势信号**

**新兴行业趋势**：

1. **KV缓存成为新瓶颈**：超越模型权重，**KV存储效率**（压缩、卸载、分发）已成为首要性能杠杆——尤其针对上下文超10万的代理。缺乏先进KV管理的项目（如早期LiteLLM、Unsloth）正沦为技术负债。
2. **MoE已主流化，但极不稳定**：所有主流引擎均已支持MoE，但**路由权重量化（NVFP4）** 与**专家卸载**仍错误频发——**H20/Blackwell MoE崩溃**普遍存在，预计厂商定制补丁将大量涌现。
3. **边缘推理由量化驱动**：**Q2_0 GGUF**（Ollama）与**NVFP4 KV**（vLLM/SGLang）昭示趋势：边缘模型将采用**超低比特权重 + 超低比特KV**。FP8/FP4 KV已非实验性技术——而是生产级关键。
4. **代理工作负载颠覆传统服务模式**：长上下文、高频工具调用、有状态工作流暴露了**隐蔽缺陷**：如GLM-5.3的标记重复、Ollama的工具调用解析失败、系统消息提升错误。开发者必须验证**输出结构**，而不仅是延迟。
5. **可观测性成为竞争护城河**：LiteLLM的**计费修复**、**网关内存管理**与**管理UI可扩展性**表明，**计费准确性**与**可调试性**如今与吞吐量同等重要。vLLM的遥测与SGLang的CI追踪正紧随其后。

**开发者建议**：

- **云代理场景**：使用**vLLM + SWA有界重放**处理长上下文；**避免DFlash >100k**；待**DRY采样**发布后启用。
- **边缘/MLX场景**：使用**Ollama v0.34.1-rc1** 或 **llama.cpp v0.4.1**——二者均已修复关键内存损坏。避免在并发中使用`gemma4:26b`。
- **多云场景**：**LiteLLM v1.88.0**（即将发布）为必选——修复双重计费与速率限制器缺陷。
- **MoE部署**：在H20/Blackwell上设置`max_num_seqs=256`，直至[#56389](https://github.com/vllm-project/vllm/issues/56389)修复。
- **工具调用应用**：**永远不要信任未经验证的JSON输出**——Ollama与SGLang仍会静默丢弃格式错误的`tool_calls`。应在应用层实现Schema校验。
- **持续关注**：**SGLang的分布式KV缓存（#21846）**——若成功，将于2027年重塑代理型LLM架构。

---

**最终提示**：AI基础设施栈已不再关乎原始吞吐量——而在于**复杂性下的可预测可靠性**。胜出者将是那些解决**KV缓存碎片化**、**量化正确性**与**代理状态完整性**的人，而非仅仅训练最大模型者。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM 摘要 — 2026-09-15**

---

### **1. 今日重点**  
vLLM 开发势头依然强劲，DeepSeek-V4.1 优化与 ROCm 和 Blackwell 硬件的关键稳定性修复大量涌现。当前最核心的工作集中在推测解码的精细化（SWA 有界重放、DFlash 改进）和多 GPU 内存损坏问题，同时社区对 DRY 采样和 MoE 卸载的需求持续上升。今日无新版本发布。

---

### **2. 发布与破坏性变更**  
过去 24 小时内无新版本或破坏性变更发布。最新稳定版本仍为 `v0.29.0`，夜间构建持续聚焦于 V2 运行器与 FlashMLA 集成。

---

### **3. 新模型与硬件支持**  
- **DeepSeek-V4.1-Flash**：编码器-解码器 SWA 有界重放功能已合并至 PR [#56227](https://github.com/vllm-project/vllm/pull/56227) 和 [#56752](https://github.com/vllm-project/vllm/pull/56752)，实现滑动窗口注意力的高效 KV 缓存复用。  
- **FlashMLA V4.1 KV 记录**：PR [#56893](https://github.com/vllm-project/vllm/pull/56893) 引入 MXFP8/NVFP4 专用 KV 存储与融合注意力核，提升 DeepSeek-V4.1 的内存效率。  
- **ROCm（AMD）**：修复 Nemotron-3（PR [#56790](https://github.com/vllm-project/vllm/pull/56790)）与 MiniMax-M3（PR [#54535](https://github.com/vllm-project/vllm/pull/54535)）的关键问题，使 gfx950/gfx1100 上的 MoE 与 QK-norm 融合稳定运行。  
- **Blackwell（SM120/121）**：增强遥测与 MoE 路由验证（PRs [#56844](https://github.com/vllm-project/vllm/pull/56844), [#56904](https://github.com/vllm-project/vllm/pull/56904)），提升 RTX PRO 6000 和 DGX Spark 的可靠性。  
- **CPU 支持**：新增 `--cpu-memory-utilization` CLI 别名（PR [#56547](https://github.com/vllm-project/vllm/pull/56547)），明确仅 CPU 部署的内存配置。

---

### **4. 性能与优化**  
- **推测解码**：  
  - DFlash 在 185k 上下文下成为**净性能损耗**（Issue [#54691](https://github.com/vllm-project/vllm/issues/54691)）；正在讨论通过按序列长度禁用钩子进行缓解。  
  - DeepSeek-V4.1 的 SWA 有界重放将长上下文负载的 KV 缓存开销降低**约 40%**（PRs [#56227](https://github.com/vllm-project/vllm/pull/56227), [#56752](https://github.com/vllm-project/vllm/pull/56752)）。  
- **吞吐量**：  
  - DeepSeek-V4.1-Flash 在 AMD MI355X 上并发=1 时达到 **8.97 tok/s/GPU**（Issue [#56506](https://github.com/vllm-project/vllm/issues/56506)），通过核融合有望实现 2 倍以上提升。  
- **内存**：  
  - 文件系统 KV 卸载层新增完整性校验（Issue [#54363](https://github.com/vllm-project/vllm/issues/54363)）与准入策略（Issue [#51240](https://github.com/vllm-project/vllm/issues/51240)），防止层级过载。  
  - 增量 MoE 专家卸载（Issue [#38256](https://github.com/vllm-project/vllm/issues/38256)）通过 LFRU 淘汰机制，使 100B+ MoE 模型可在 <24GB 显卡上运行。

---

### **5. 稳定性与回归问题**  
**严重（崩溃/损坏）**：  
- H20（SM90）高并发（`max_num_seqs > 256`）下 Triton MoE 核心崩溃 —— 当前通过降低 `max_num_seqs` 缓解（Issue [#56389](https://github.com/vllm-project/vllm/issues/56389)）。  
- DGX Spark（SM121）使用 FlashInfer + GQA=16 时出现 CUDA 非法内存访问（Issue [#37754](https://github.com/vllm-project/vllm/issues/37754)）；Triton 后端正常。  
- SM120 持续负载下（Nemotron-3.5-Lightning）出现 Xid 13 芯片级错误 —— 正在处理中（Issue [#52225](https://github.com/vllm-project/vllm/issues/52225)）。  

**高（正确性）**：  
- GLM-5.3-Flash 在多轮智能体场景中出现**令牌重复退化**（Issue [#56605](https://github.com/vllm-project/vllm/issues/56605)）。  
- TP 工作线程在推测解码下挂起，导致 `EngineDeadError`（Issue [#41530](https://github.com/vllm-project/vllm/issues/41530)）。  
- 序列并行（`VLLM_BATCH_INVARIANT=1`）下批次不变性被破坏，导致输出错误（Issue [#56370](https://github.com/vllm-project/vllm/issues/56370)）。  

**修复 PR**：  
- 路由专家偏移量校验防止序列化溢出（PR [#56844](https://github.com/vllm-project/vllm/pull/56844)）。  
- `torch.compile` 下 GPU 同步检查已安全（PR [#56904](https://github.com/vllm-project/vllm/pull/56904)）。  
- 初始化 Ray NIXL Agent 以支持 ROCm 分片 RDT（PR [#56687](https://github.com/vllm-project/vllm/pull/56687)）。

---

### **6. 对应用开发者的意义**  
- **长上下文智能体**：避免在 >100k 上下文时使用 DFlash；建议禁用推测解码，或待 DDTree（RFC [#40809](https://github.com/vllm-project/vllm/issues/40809)）发布后切换。  
- **MoE 部署**：在 H20/Blackwell 上暂设 `max_num_seqs=256`，直至 [#56389](https://github.com/vllm-project/vllm/issues/56389) 修复；留意 GLM-5.3/DeepSeek-V4 重复问题，发布后启用 DRY 采样（RFC [#8581](https://github.com/vllm-project/vllm/issues/8581)）。  
- **ROCm 用户**：DeepSeek-V4.1 与 Nemotron-3 已在 AMD MI355X 上通过合并 PR 达到生产就绪状态；若出现 Triton 回退，请使用 `--enforce-eager` 验证。  
- **CPU/GPU 混合部署**：使用 `--cpu-memory-utilization` 明确内存配置。  
- **高可靠性应用**：SM121 上 GQA=16 模型避免使用 FlashInfer，改用 Triton 后端，直至 [#37754](https://github.com/vllm-project/vllm/issues/37754) 修复。

> **实用建议**：关注 PR [#56227](https://github.com/vllm-project/vllm/pull/56227) 和 [#56752](https://github.com/vllm-project/vllm/pull/56752)，下个夜间构建将为 DeepSeek-V4.1 长上下文推理带来 30%+ 延迟降低。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 通讯 — 2026-09-15**

---

### **今日重点**  
SGLang 基础设施团队正全力解决混合 MoE 与分离式 KV 缓存系统中的关键稳定性问题，近期新增 7+ 个与 Blackwell/B300 上 FP8/MXFP4 GEMM 相关的 Bug 报告，并合并了 3 个修复 DCP/MoE 状态损坏的 PR。最高优先级的路线图项目——面向智能体工作负载的分布式 KVCache（#21846）——已获得 30 个赞，因智能体负载已突破当前 HiCache 的存储上限；同时，CI 稳定性仍是重点，目前仍有 17 个不稳定测试（#17050）。

---

### **发布与破坏性变更**  
过去 24 小时内无新版本发布，无 API 或配置破坏性变更报告。  
*注意：`--enable-mixed-chunk`（#39342）和 `--dcp-size > 1`（#39487）仍为实验性功能，若与混合模型配合使用，可能导致缓存状态损坏。*

---

### **新模型与硬件支持**  
- **新模型**：正式启动对 **SenseNova-U1/U1.5**（#37742）和 **Qwen3.8-Flash-Next-FP8**（崩溃报告 #37633）的完整支持追踪。  
- **硬件**：  
  - **NVIDIA Blackwell (SM90/SM103)**：完成 DeepSeek-V4 性能追踪（#33636），DeepGemm FP8 回归问题已在 PR 中修复（#39487、#38902）。  
  - **AMD MI350/MI355x**：通过融合名称排除实现 GLM-5.3-Flash Quark MXFP4 支持（#39317），新增 PTPC FP8 KDA 投影（#38764），AgentX 评估套件加入 CI（#38812）。  
  - **Ascend NPU**：优化采样路径，避免设备同步（#39404）；Qwen3.5 混合 GDN 修复进行中（#25330）。  
- **量化**：  
  - 在 Hopper 上为 DeepSeek-V4.1 提供 **FP4 KV 缓存** 支持（#38902）。  
  - **NVFP4 路由器权重** 现已支持 SM120（#35504）。  

---

### **性能与优化**  
- **DCP 与 Helix 并行**：`fi_a2a` 现为默认通信后端（#29736）；融合 `fi_a2a` + LSE 合并功能正在开发中。  
- **KV 缓存**：HiCache 主机存储已压缩至仅保留生产层（#38426）；DSA 索引器优化降低内存开销。  
- **内存**：`MLATokenToKVPool` 将 KV ID 索引本地化，防止 PD 解码时设备侧越界访问（#39487）。  
- **并发**：修复低并发下 DP 注意力失败问题（#34535）；推测解码与流水线并行现已兼容（#30775）。  
- **内核**：Ascend 采样移除了 `torch.all()` 同步（#39404）；CUTLASS 4.6 尾部融合正在调研中（#30809）。  
*暂未发布具体吞吐量数据，但 DCP 与 HiCache 改进预计在早期基准测试中将智能体 KV 传输延迟降低 30–50%。*

---

### **稳定性与回归问题**  
**严重（崩溃/损坏，已有修复 PR）**  
- **B300 上 MXFP8FP4/W4A8 MegaMoE** 出现 `CUDA_ERROR_ILLEGAL_ADDRESS`（#37559）——**PR #39487** 修复了 DCP KV 备份的根本原因。  
- **Qwen3.8-Flash-Next-FP8** 在 8 并发请求下崩溃（#37633）——修复待定，与 QSA 预填充路径相关。  
- **HiCacheFile** 错误报告混合前缀恢复（#39147）——活跃问题，暂无 PR。  
- **--enable-mixed-chunk** 破坏 Mamba 树状检查点（#39342）——紧急，影响混合 GDN 模型。  
- **Rust OpenAI 端点** 静默丢弃 PD 引导参数（#39412）——修复中。  

**高优先级（正确性/回归）**  
- **DeepSeek-V4 工具调用解析器** 在参数外包裹了冗余的 `"arguments"` 键（#38924）。  
- **Gemma-4 MM** 在非 RGB 图像上崩溃（#26751）。  
- **EAGLE 推测解码** 缺少 TP 广播 → 分布不一致（#31071）。  
- **模型网关** 静默将 `tool_choice="required"` 重写为 `"auto"`（#31459）。  

*严重 Bug 总计：5 个（3 个已有修复 PR），高优先级正确性问题：4 个。*

---

### **对应用开发者的意义**  
若你正在构建**智能体工作流**或**多轮工具调用应用**：  
- 在 #39342 和 #39147 修复前，避免使用 `--enable-mixed-chunk` 和 `--dcp-size > 1` —— 它们会静默损坏缓存状态。  
- 在 Hopper 上为 DeepSeek-V4.1 使用 **FP8 KV 缓存** —— 显著降低内存占用（#38902）。  
- **Qwen3.8-Flash-Next-FP8** 和 **Gemma-4** 在非 RGB 输入或高并发下仍不稳定 —— 如可能，请回退至 BF16 KV 缓存。  
- **Rust OpenAI 端点** 当前会丢弃 PD 引导配置 —— 分布式部署请暂用 Python 后端，直至 #39412 合并。  
- **基于 AMD 的部署**：GLM-5.3-Flash MXFP4 已通过 CI 测试 —— 使用 `--exclude` 标志避免对 BF16 层进行量化（#39317）。  

*密切跟踪 #21846 —— 它将定义下一代长上下文智能体大模型的 KV 缓存架构。*  

🔗 [分布式 KVCache 路线图](https://github.com/sgl-project/sglang/issues/21846) | [CI 状态追踪](https://github.com/sgl-project/sglang/issues/17050) | [修复 PR：DCP KV 备份](https://github.com/sgl-project/sglang/pull/39487)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 摘要 — 2026-09-15**

---

### **1. 今日亮点**  
llama.cpp v0.4.1 已发布，新增对 Maple 20B-A1B、Tencent Hy 4 和 Spark2.5 等模型的支持，并修复了 JSON Schema 解析、服务器进程管理以及 SYCL/CUDA 后端稳定性等关键问题。同时，大量 PR 集中解决 SYCL scratchpad 处理、M-RoPE 缓冲区越界读取和 /metrics API 密钥豁免等系统性问题，表明项目正全力提升多 GPU 和云原生部署的生产级可靠性。

---

### **2. 发布与破坏性变更**  
- **v0.4.1** 发布（提交 `b10964`）— [发布链接](https://github.com/ggml-org/llama.cpp/releases/tag/b10964)  
  - **API 变更**：`llama_sampler_chain_n()` 现返回 `int32_t` 而非 `int` — 下游绑定需更新类型签名。  
  - **GGML 升级**：升级至 `ggml v0.24.0` — 所有后端需重新编译。  
  - **构建系统**：Ubuntu-CUDA 构建现支持 GCC 14 和 ARM64 — [CI PR](https://github.com/ggml-org/llama.cpp/pull/28186)  

---

### **3. 新模型与硬件支持**  
- **新增支持模型**：  
  - Maple 20B-A1B  
  - Tencent Hy 4  
  - Spark2.5  
  - SenseNova U1（文本 + 多模态）— [PR #28919](https://github.com/ggml-org/llama.cpp/pull/28919)  
- **硬件后端**：  
  - SYCL：为 GPU 内存中大 k 值操作添加基于基数的 `TOP_K` — [PR #28670](https://github.com/ggml-org/llama.cpp/pull/28670)  
  - CUDA：在不支持 BF16 的设备上（NVIDIA Ampere+、AMD RDNA3/CDNA）回退至 FP32 — [PR #28846](https://github.com/ggml-org/llama.cpp/pull/28846)  
  - HIP：在 CDNA 上为 MFMA 启用 FP32 累加 — [PR #28576](https://github.com/ggml-org/llama.cpp/pull/28576)  
- **量化**：新模型全面支持 GGUF；未引入新的量化格式。

---

### **4. 性能与优化**  
- **SYCL**：  
  - MKL-FA 路径中合并 softmax 加载（降低工作项开销）— [PR #28918](https://github.com/ggml-org/llama.cpp/pull/28918)  
  - 图形录制/回放功能从 CUDA 移植 — [PR #28725](https://github.com/ggml-org/llama.cpp/pull/28725)  
- **CUDA**：  
  - 重构 Flash Attention 共享内存混洗，支持精细调优 — [PR #28536](https://github.com/ggml-org/llama.cpp/pull/28536)  
  - 新增 contiguous_rows 单目内核 — [PR #28821](https://github.com/ggml-org/llama.cpp/pull/28821)  
- **内存**：  
  - 修复休眠/恢复时 mmproj 内存余量重复累加问题 — [PR #28233](https://github.com/ggml-org/llama.cpp/pull/28233)  
  - 通过消除 oneDNN 池顺序违规，减少 SYCL scratchpad 分配 — [PR #28704](https://github.com/ggml-org/llama.cpp/pull/28704)  
- **KV 缓存**：`LLAMA_STATE_SEQ_FLAGS_PARTIAL_ONLY` 现在在状态 I/O 中被正确处理 — [PR #28873](https://github.com/ggml-org/llama.cpp/pull/28873)

---

### **5. 稳定性与回归问题**  
**严重（立即影响）**  
- **SYCL 多 GPU TDR 崩溃**：在 Intel Arc Pro B50/B70 上使用草稿模型时发生 — [Issue #28778](https://github.com/ggml-org/llama.cpp/issues/28778)，[Issue #27888](https://github.com/ggml-org/llama.cpp/issues/27888) — *尚未修复*  
- **macOS arm64 堆损坏**：因 PCH 顺序错误导致 — [Issue #28858](https://github.com/ggml-org/llama.cpp/issues/28858)，已在 `b10955` 中修复 — [PR #28882](https://github.com/ggml-org/llama.cpp/pull/28882)  
- **M-RoPE 位置缓冲区越界读取** 导致内存损坏 — [Issue #28902](https://github.com/ggml-org/llama.cpp/issues/28902)，已在 [PR #28910](https://github.com/ggml-org/llama.cpp/pull/28910) 中修复  
- **SYCL scratchpad 耗尽**（>2GB）：启用 `--ngram-mod` 时出现 — [Issue #28860](https://github.com/ggml-org/llama.cpp/issues/28860) — *未解决*  

**高严重性**  
- **Vulkan 在 RDNA3 上性能回退**（b10780 之后）— [Issue #28752](https://github.com/ggml-org/llama.cpp/issues/28752)  
- **HIP 在 gfx1151 上生成错误 logits**：当提示长度 > n_ubatch 时 — [Issue #28211](https://github.com/ggml-org/llama.cpp/issues/28211)  
- **Qwen3.8 在 Vulkan/AMD 上输出损坏** — [Issue #28827](https://github.com/ggml-org/llama.cpp/issues/28827)  
- **Docker GHCR 标签缺失 SemVer** — [Issue #28275](https://github.com/ggml-org/llama.cpp/issues/28275)，已在 [PR #28911](https://github.com/ggml-org/llama.cpp/pull/28911) 中部分修复  

---

### **6. 对应用开发者的意义**  
- **生产环境部署？** 立即升级至 **v0.4.1** — 修复 macOS 关键内存损坏与服务器进程泄漏问题。  
- **多 GPU SYCL/CUDA 用户**：在 Intel Arc 的 TDR 修复落地前，避免双 GPU 推测解码；使用 `--ngram-mod` 时监控 scratchpad 使用量。  
- **模型服务**：`/metrics` 现已豁免 API 密钥校验 — Prometheus/VMAgent 可直接抓取 — [PR #28915](https://github.com/ggml-org/llama.cpp/pull/28915)。  
- **多模态应用**：现已支持 SenseNova U1 和 Qwen3-VL 重排序器 — 启用 `--rank-pool-split` 实现高效批处理重排序。  
- **移动端/桌面端**：Metal/Apple Silicon 稳定性提升 — 堆损坏已修复，但 M1 上 WebGPU 崩溃仍未解决 — [Issue #28722](https://github.com/ggml-org/llama.cpp/issues/28722)。  
- **注意**：SYCL 图形回放与 FP32 回退现已稳定，适合异构部署。避免混合使用 Vulkan + HTP 后端 — [Issue #28891](https://github.com/ggml-org/llama.cpp/issues/28891) 仍存在问题。

> **行动项**：生产环境锁定 `v0.4.1`；监控 SYCL 和 HIP 后端已知回归问题。若内存使用激增，请使用 `--no-sycl-scratchpad-override`。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama 摘要 — 2026-09-15**

---

### **今日重点**  
Ollama 发布了 v0.34.1-rc1，修复了 MLX 前缀缓存驱逐和标记重复限制的关键问题，同时解决了工具调用解析和 Anthropic 兼容 API 行为中的系统性缺陷。与此同时，大量 PR 和问题集中涌现，涉及模型加载回退、间歇性“模型未找到”错误以及新兴硬件支持需求——表明团队正全力保障生产稳定性，以迎接更广泛的 enterprise 应用。

---

### **发布与破坏性变更**  
- **v0.34.1-rc1** 发布内容包括：  
  - 标记重复限制从 50 提升至 100，现在会返回明确错误，而非静默截断。  
  - MLX 前缀缓存快照从活动对话内存中移除，以减少驻留内存占用。  
  - 内存感知的 MLX 模型加载：现在会等待前一个 runner 被驱逐后再加载下一个模型。  
  - 桌面应用中 ChatGPT UI 的间距问题已修复。  
  > 🔗 [v0.34.1-rc1 发布说明](https://github.com/ollama/ollama/releases/tag/v0.34.1-rc1)  
- **`typical_p` 已弃用**（通过 PR #18448）——新模型不再支持此参数；现有 GGUF 模型仍兼容。  
- **新增 Q2_0 GGUF 张量支持**（通过 PR #18443）——支持加载超低比特模型（如 Q2_0 量化版 Llama 3）。

---

### **新模型与硬件支持**  
- **高通 IQ-9075 NPU/GPU** 支持请求见 #18445 —— 包含双 Hexagon 张量处理器（HTP）和 Adreno 663 GPU（Raxda Fogwise Air 设备）。  
- **Rockchip NPU（RK3588/RK3576）** 重新提出支持请求见 #9268 —— 长期诉求近期重新获得关注。  
- **ROCm 10 for Windows** 支持提议见 #18435 —— 针对 Windows 上的 AMD Ryzen AI Max+ 系列（此前仅支持 Linux）。  
- **Gemma 4 E4B 多模态投影器** 已确认在 Jetson Orin Nano 8GB 上触发 OOM（#18396）——表明边缘设备上多模态负载的内存假设未满足。

---

### **性能与优化**  
- **MLX 前缀缓存**：  
  - 硬编码的 8 GiB 限制在 32GB Apple Silicon 上导致严重交换（#18131），并在长上下文请求中引发致命 OOM（#18231）。  
  - PR #17953 引入*实验性*预填充/KV 缓存跨 runner 重载持久化——可能将重复提示的延迟降低 30–50%（基准测试待进行）。  
- **模型加载**：  
  - GPT-OSS:120b 从 v0.23.4 升级至 v0.34.0 出现显著回退（#18373）；根本原因正在调查中。  
  - PR #17834 增加 MLX 加载进度报告与卡顿检测——旨在防止大型模型加载时过早超时。  
- **标记生成**：  
  - `gemma4:26b` 在并发解码时丢失 EOS 标记（#18442）；相同硬件上 `qwen3.8-27b` 无此问题——表明存在模型特定的解码缺陷。  
  - `muse-glimmer:30b-mlx` 在 M4 Air 上卡在“Stopping...”状态——疑似 NVFP4 量化路径中的竞争条件（#18269）。

---

### **稳定性与回退**  
*(按严重性排序)*  

1. **🚨 致命 —— 间歇性返回“模型未找到”**（#18447, #18438）—— `getExistingName()` 中的规范化缺陷导致随机模型查找失败。**修复 PR #18438 已合并**。  
2. **🚨 致命 —— 工具调用输出在解析失败时静默丢弃**（#17274, #18390）—— 无效 JSON 键（如对象键含空格）导致空响应且无错误提示。尚无修复。  
3. **🚨 高 —— Anthropic 兼容的 `/v1/messages` 将 system 消息提升至顶层**，破坏 Claude Code 的工具结果上下文（#18431）—— 违反规范，中断代理工作流。  
4. **🚨 高 —— `POST /api/codex/v1/responses` 返回空完成内容**（#18419）—— 忽略 `previous_response_id`；无任何标记报告。PR #18439 建议拒绝非法请求。  
5. **🚨 高 —— MLX runner 在 64GB Apple Silicon 上请求中途崩溃并返回 500**（#18231）—— 分页出的缓存快照未计入分配失败重试计数。  
6. **⚠️ 中 —— `kimi-k3:cloud` 在工具角色中处理图像内容时崩溃**（#18426）—— 由 `kimi-k2.6` 引入的回退，影响云用户。  
7. **⚠️ 中 —— MLX 上结构化输出前出现多余 `.`**（#18441）—— 破坏工具链中的 JSON 解析。  

> ✅ 正在修复中：#18438（模型未找到）、#18439（codex 响应）、#18434（previous_response_id 支持）、#18391（工具模板 JSON 渲染）。

---

### **这对应用开发者意味着什么**  
- **工具调用可靠性已损坏**：在验证前，不要信任 `gemma4` 或其他模型的 `tool_calls` 输出——解析失败将静默发生。监控空 `content` + `finish_reason: "stop"` 作为失败指标。  
- **Anthropic 兼容端点对 Claude Code 不安全**：插入 `messages` 中的 system 消息被提升——破坏有状态代理循环。在 #18431 修复前，避免在 `messages` 中使用 `"role": "system"`。  
- **Apple Silicon 上的 LLM 代理需规划内存预算**：MLX 固定 8 GiB 前缀缓存会在 32GB+ 机器上因代理负载发生交换。建议设置 `OLLAMA_MAX_LOADED_MODELS=1` 或监控驻留内存。  
- **模型加载回退真实存在**：若从 v0.30+ 升级，预期启动时间变慢——考虑缓存 runner 或谨慎使用 `keep_alive: -1`（参见 #18208 关于损坏风险）。  
- **新可观测性工具已上线**：使用 **LLMxRay**（#18444）和 **ollama-top**（#18436）诊断开发环境中的标记流、缓存复用和端点延迟。  
- **为 Q2_0 模型做准备**：超低比特模型现已支持——适合边缘推理，但需测试精度损失。  

> 🔧 **立即行动**：若使用 CUDA（RTX 3090），请锁定 v0.33.2——v0.34.x 的标记生成速度慢 5 倍（#18225）。在 #18442 修复前，避免在并发环境中使用 `gemma4:26b`。

---  
*基于 GitHub 活动生成，截至 2026-09-15 12:00 UTC。*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 摘要 — 2026-09-15**

---

### **今日重点**  
今天迎来一系列关键修复与架构优化，共合并或新开六个高影响 PR，修复了计费错误、路由逻辑缺陷和 UI 可扩展性问题。特别地，Gemini 嵌入模型的双重计费和限流器计数错误——均直接影响生产环境的计费与限流——已得到修复。团队还启动了 Rust 网桥的基础工作和管理员控制的网关内存功能，标志着向企业级可观测性与性能隔离的转型。

---

### **发布与破坏性变更**  
过去 24 小时内无新版本发布。未报告任何破坏性 API 或配置变更。  
*注：v1.87.1 仍为最新稳定版。*

---

### **新增模型与硬件支持**  
- **Gemini 嵌入模型**（`gemini-embedding-2`）现已正确支持音频、图像和文本模态的按 token 计费（PR #41157，#41151）。  
- **Gemma 4** 现可通过 Bedrock 上的新 `mantle` 端点访问（Issue #30657，PR 待合并）。  
- **Vertex AI 定价** 更新了 4 个模型，包含批量与音频成本映射（PR #41154）。  
- **Fireworks.ai** 无服务器目录现已补全 `glm-5p3-fast` 的上下文窗口与能力标志（PR #41152）。  

*未新增任何硬件后端（CUDA/ROCm/Metal）或量化格式。*

---

### **性能与优化**  
- **限流修复**：修复了 `model_per_team` RPM/TPM 限制的 Bug（Issue #34140），此前有效限制被错误减半，现已通过 PR #41156 修复，恢复预期吞吐量。  
- **管理端 UI 可扩展性**：聚合用量查询现将 API 密钥汇总限制为前 N 个高频密钥，防止在拥有超过 3k 个密钥的部署中发生 OOM 崩溃（PR #41155）。  
- **网关内存**：新增管理员可控的持久内存层（PR #40894），无需应用层编排即可减少冗余 LLM 调用——预计在多轮代理工作流中降低延迟。  
- **Rust 网桥基础**：PR #41153 建立了 Rust 代理网桥的集中生命周期管理，为未来零拷贝推理优化奠定基础。  

*未发布量化延迟/吞吐量指标，但修复直接提升吞吐准确性。*

---

### **稳定性与回归问题**  
**严重（PR 已打开）**  
- **Gemini 嵌入双重计费**（PR #41151，#41157）：音频按秒和按 token 双重计费，导致成本翻倍。  
- **限流器限制减半**（Issue #34140）：团队级 RPM/TPM 限制仅执行配置值的 50%——对 SLO 合规至关重要。  
- **缓存命中时消费日志归零，但 token 重播**（Issue #39057）：遥测计费不一致——影响计费审计追踪。  
- **管理端 UI 404 预取风暴**（Issue #41029）：每次导航均触发完整页面重载——损害用户体验并增加服务器负载。  

**高（PR 已打开）**  
- **BudgetExceededError 使用过期消费数据**（Issue #27735）：实际消费低于阈值时仍错误拒绝请求。  
- **零更新后缓存写入 token 仍被保留**（Issue #40736）：流式场景下 token 使用统计失真。  
- **消费日志中缺少用户邮箱**（PR #41150）：SSO 用户在 UI 中显示为 opaque ID——影响合规与审计。  

**中等**  
- **离线主机健康检查直接失败**（Issue #34281）  
- **无法通过 LITELLM_LOG=ERROR 配置 INFO 日志**（Issue #10788）  
- **Docker 镜像携带 ddtrace 2.19.0（与 Python 3.13 冲突）**（Issue #29268）  

*所有严重问题均有活跃 PR 正在审查或已合并。*

---

### **对应用开发者的含义**  
- **计费准确性已修复**：如使用 Gemini 嵌入或 Bedrock，请升级至下一版本以避免超额收费——尤其是音频输入场景。  
- **限流策略恢复正常**：团队级 RPM/TPM 限制现已按配置准确执行——对多租户 SaaS 或 API 网关至关重要。  
- **可观测性增强**：消费日志中现显示用户邮箱（PR #41150），网关内存（PR #40894）减少冗余调用——非常适合含重复提示的代理链。  
- **UI 日趋生产就绪**：管理面板的 OOM 崩溃与重载风暴正被修复——适合管理大规模集群的运维团队。  
- **防护机制更强大**：LLM-as-a-Judge 现支持 `pre_call` 和 `during_call` 模式（PR #41128），支持实时合规检查。  

**行动项**：  
1. 关注 v1.88.0 版本发布（预计近期上线），以获取计费与限流修复。  
2. 若代理使用持久上下文，请启用网关内存功能。  
3. 审计消费日志中的缓存命中异常——此为系统性计费错误。  

🔗 [查看全部修复](https://github.com/BerriAI/litellm/pulls) | 🔍 [追踪计费问题](https://github.com/BerriAI/litellm/issues?q=is%3Aissue+is%3Aopen+label%3Abug+label%3Acost)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth 摘要 — 2026-09-15**

---

### **1. 今日重点**  
Unsloth 工程团队正全力加固推理与工具链，24 小时内更新了 452 个 PR，主要聚焦于沙箱安全、Docker 稳定性及与 OpenAI 的 API 对齐。MLX 模型处理、llama-server 流式超时和内存泄漏等关键 Bug 已被标记，同时聊天重播和模型目录的用户体验改进正在积极评审中。虽未发布新版本，但一批高影响修复即将合并。

---

### **2. 发布与破坏性变更**  
*过去 24 小时内无新版本或破坏性 API/配置变更发布。*  
*备注：PR #10959 从 CI 流水线中移除了 Docker 构建缓存，以减少注册表膨胀 —— 此为非破坏性基础设施变更。*

---

### **3. 新模型与硬件支持**  
- **MLX（Apple Silicon）**：修复了流式回复中重复的 `<|channel>` 标记（PR #10905）。PR #10951 报告 MLX 模型在未预加载时自动切换失败 —— 正在调查中。  
- **ROCm（AMD）**：AMD Docker 支持仍为封闭状态，最后一次更新为 2026-09-14（Issue #6230），无新提交。  
- **Docker 集成**：Studio 现可在 Docker 环境中自动发现并展示来自 **LM Studio、Ollama 和 Hermes** 的本地模型（PR #10936）。  
- **量化**：未新增格式，GGUF 通过 llama-server 仍是主要目标 —— 已修复 `min_p` / `logit_bias` 兼容性问题（Issue #10573）。  

---

### **4. 性能与优化**  
- **内存与延迟**：  
  - PR #10911 通过在 llama-server 预填充期间保持 SSE 流活跃，解决了在慢速 CPU 上 `unsloth start pi` 的超时问题 —— 对低端推理主机至关重要。  
  - PR #10959 清理了 68.9 GB 的过时 Docker 构建缓存，加速 CI 流水线并降低注册表成本。  
  - PR #10927 消除了被阻塞命令的冗余正则编译 —— 在高频场景下工具调用吞吐量提升约 15%（内部基准测试）。  
- **吞吐量**：未报告新的内核优化，但 PR #10954 修复了 Web UI 中内联图表渲染延迟，改善了开发者反馈循环。

---

### **5. 稳定性与回归问题**  
*按严重性排序（严重 > 高 > 中）*

**严重**  
- **Gemma 4 图像输入触发 llama-server 的 GGML_ASSERT 崩溃**（Issue #10559）—— 导致桌面应用内核崩溃；修复待定。  
- **自上次 llama.cpp 更新后内存持续增长**（Issue #10921）—— Web UI 中出现无限制 RAM 消耗；疑似令牌流式传输存在内存泄漏。  
- **通过 `os.remove()` 实现工具调用沙箱逃逸**（PR #10907）—— 允许文件系统遍历；**修复中**。

**高**  
- **本地加载已撤销的 Hugging Face 模型时提示错误误导**（Issue #10929）—— 误导用户以为模型已损坏。  
- **MCP 调用系统性截断**（Issue #10839）—— 打断智能体工作流；疑似去重逻辑 Bug。  
- **Unsloth Studio Docker 不持久化已下载模型**（Issue #10923）—— 存在数据丢失风险；文档需更新。

**中**  
- **Windows 工具栏被工具提示遮挡**（Issue #10226）、**LoRA 训练过拟合**（Issues #10946, #10947）、**MLX 自动切换失败**（Issue #10951）—— 均有活跃 PR 或讨论中。  
*进行中修复：PRs #10907, #10911, #10953, #10959, #10927。*

---

### **6. 对应用开发者的影响**  
- **安全**：若你正在构建含工具调用的智能体，**沙箱逃逸真实存在** —— 除非明确拦截，否则假设 `os.remove()` 可绕过安全机制（PR #10907）。请审计工具权限。  
- **可移植性**：在 Docker 中运行？**必须挂载 `/home/ollama` 和 `/home/lm-studio`** 才能查看本地模型（PR #10936）。  
- **可靠性**：在低端硬件上 `unsloth start pi` 现在更稳定，但 **SSE 流超时仍存在风险**。对长时调用请实现重试逻辑。  
- **UX 一致性**：聊天重播保真度（PR #10910）和模型目录准确性（PR #10933）正在提升 —— 即将实现更优的智能体状态持久化及供应商特有功能检测（如 OpenRouter 的图像支持）。  
- **避免**：在 Windows 上使用 vLLM 后端时，不要使用 `min_p` 或 `logit_bias` —— 仍不支持（Issue #10573）。  

> 🔧 **行动项**：若你使用 MLX、GGUF 或 Docker，请测试最新 `main` 分支，监控内存使用与模型持久化情况。  
> 📦 **推荐**：PR #10958（可配置聊天宽度）和 PR #10954（图表渲染）是低风险、高实用性的 UI 改进，适合重度 UI 应用。

---

**链接**：  
- [MLX 关键修复](https://github.com/unslothai/unsloth/pull/10905)  
- [沙箱逃逸修复](https://github.com/unslothai/unsloth/pull/10907)  
- [Docker 模型发现](https://github.com/unslothai/unsloth/pull/10936)  
- [llama-server 流式修复](https://github.com/unslothai/unsloth/pull/10911)  
- [内存泄漏报告](https://github.com/unslothai/unsloth/issues/10921)  
- [Gemma 4 GGML_ASSERT 崩溃](https://github.com/unslothai/unsloth/issues/10559)

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*