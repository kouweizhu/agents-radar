# AI 基础设施日报 2026-09-13

> 生成时间: 2026-09-13 00:13 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

**跨项目AI基础设施生态报告 — 2026-09-13**

---

### **1. 生态概览**  
2026年第三季度的AI推理生态呈现出强烈的硬件无关优化压力，Blackwell（SM120/121）、ROCm MI355X 和 Intel Arc 成为关键的新前沿。vLLM 和 SGLang 主导高吞吐模型服务，llama.cpp 和 Ollama 则在本地量化推理领域领先，各方正竞相稳定下一代MoE与Flash Attention内核。LiteLLM的代理层已成为多供应商代理工作流的事实路由粘合剂，但其正确性缺陷正暴露流式传输与成本追踪中的系统性脆弱性。与此同时，Unsloth 桥接了微调与部署，揭示出训练优化与推理效率日益融合的趋势。

---

### **2. 活动对比**

| 项目         | 24小时内开放议题 | 开放PR数 | 最近发布版本 | 发布状态                         |
|--------------|------------------|----------|----------------|----------------------------------|
| **vLLM**     | 18               | 22       | 无             | v0.29.1 即将发布（关键修复）     |
| **SGLang**   | 26               | 342      | 无             | v0.5.15 固定；重大PR积压         |
| **llama.cpp**| 12               | 15       | 无             | 构建标签版（b10933）；无语义化版本 |
| **Ollama**   | 15               | 11       | 无             | 0.34.0 不稳定；推荐使用 0.33.x   |
| **LiteLLM**  | 30+              | 12       | v1.84.0（退化） | 避免 v1.84.0；v1.83.x 稳定       |
| **Unsloth**  | 15               | 72       | 无             | 主要CI/UX修复正在审查中          |

*注：SGLang 的 342 个 PR 反映深度架构重构；LiteLLM 的议题数量反映其在5+供应商代理层的脆弱性。*

---

### **3. 模型支持竞赛**

| 项目         | 新模型支持                                                                 | 新硬件支持                                      | 领先地位                     |
|--------------|----------------------------------------------------------------------------|-------------------------------------------------|------------------------------|
| **vLLM**     | DeepSeek-V4.1-Flash、GLM-5.3-Flash（关键修复）                             | NVIDIA GB10（SM121）、H20（SM90）、AMD MI355X   | ✅ **MoE/Flash 领先者**       |
| **SGLang**   | DeepSeek-V4.1 FP8/MoE、Qwen3.5 VL、GLM-4.7/5                               | NVIDIA Blackwell（SM120/121）、AMD gfx942/950、Apple MLX | ✅ **最广硬件覆盖**           |
| **llama.cpp**| ELMOD 2.7B（德语）、Qwen3-Coder（Jinja点符号）                             | NVIDIA Blackwell（sm_120）、Intel Arc A770、ROCm GCN | ✅ **最佳4位/量化支持**       |
| **Ollama**   | Gemma 4、Qwen 3.8（多模态工具）                                            | AMD Strix Halo、Jetson Orin Nano、混合显卡       | ⚠️ **边缘部署领先者**         |
| **LiteLLM**  | 34个新模型（Gemini Live、DeepSeek、腾讯TokenHub）                        | 无（仅云代理）                                 | ✅ **模型路由权威**           |
| **Unsloth**  | Qwen3.5-9B LoRA、DeepSeek V4.1 Flash GGUF（已请求）                        | AMD ROCm（RDNA2–4、CDNA）、B200                | ✅ **训练→推理桥梁**          |

**领先者**：**SGLang** 在模型/硬件支持**广度**上领先；**vLLM** 在MoE/Flash优化**深度**上领先；**llama.cpp** 在新GPU上的量化**可靠性**上领先。

---

### **4. 性能前沿**

优化工作高度集中在四大领域：

| 领域               | 领先项目                     | 关键进展                                                                 |
|--------------------|------------------------------|--------------------------------------------------------------------------|
| **KV缓存**         | vLLM, SGLang                 | HiSparse缓存共享（vLLM）、统一基数缓存+辅助池（SGLang）、FP8 KV存储（SGLang, vLLM） |
| **推测解码**       | vLLM                         | DFlash2 正在优化中 —— 但在 >100k 上下文时**净减速**（vLLM #54691）         |
| **量化**           | llama.cpp, vLLM              | Blackwell 上 IQ 量化回退（llama.cpp）、NVFP4/Marlin W4A8-FP8 数据损坏修复（vLLM） |
| **分布式服务**     | vLLM, SGLang                 | SM100/103 上 TP reduce-scatter（vLLM）、MoE 的 CUDA 图捕获修复（SGLang） |
| **内核**           | SGLang, vLLM                 | DeepGEMM（SGLang）、Triton/FlashInfer 组合（vLLM）、MSA 后端（SGLang）   |

**主导趋势**：**KV缓存效率**与**MoE感知的内核融合**是吞吐量的主要杠杆，而量化稳定性正成为生产部署的门槛。

---

### **5. 层级定位**

| 项目         | 主要层级               | 角色与差异化                                                                 |
|--------------|------------------------|------------------------------------------------------------------------------|
| **vLLM**     | 高吞吐服务层           | 企业级推理引擎；专为数据中心GPU上的批量、长上下文、MoE服务优化。             |
| **SGLang**   | 高性能服务层           | 针对Blackwell/ROCm的低延迟内核级优化；面向带推测解码的代理工作负载。         |
| **llama.cpp**| 本地运行时（边缘）     | 轻量级CPU/GPU量化推理；主导设备端、离线与嵌入式部署。                        |
| **Ollama**   | 本地运行时 + CLI       | 开发者优先的模型打包与本地服务；原型设计体验优秀，生产扩展能力薄弱。         |
| **LiteLLM**  | 推理网关/代理          | 15+供应商统一API层；多模型代理编排的关键，但在负载下脆弱。                   |
| **Unsloth**  | 微调→推理层            | 训练优化（LoRA、SFT）直连llama.cpp与Studio推理；打通训练与部署管道。         |

**战略洞察**：vLLM 与 SGLang 竞争**数据中心服务层**；llama.cpp 与 Ollama 主导**边缘/本地层**；LiteLLM 是**编排粘合剂**；Unsloth 是**训练→推理管道赋能者**。

---

### **6. 趋势信号**

**提炼的行业趋势**：

1. **Blackwell 是新的 A100** — 所有主要项目（vLLM、SGLang、llama.cpp）都在紧急修复 SM120/121 上的静默损坏与利用率不足问题。**在2026年第四季度末前，Blackwell 上的生产部署仍具风险**。
2. **MoE卸载已具备生产能力** — vLLM 的 LFRU 清除与 SGLang 的 DeepGEMM 缓冲控制表明，MoE服务已超越研究阶段。
3. **量化成为新瓶颈** — NVFP4、Marlin W4A8-FP8 与 IQ 量化在新架构上频频失效。**FP8 KV缓存是下一前沿** — SGLang 与 vLLM 处于领先地位。
4. **代理工作流正在崩溃** — 工具调用去重（Unsloth）、流式推理丢失（LiteLLM）、JSON解析（Ollama）与上下文截断（Ollama/vLLM）暴露出多轮代理管道的系统性脆弱。
5. **CI/CD不稳定已成常态** — SGLang（342 PR）、Unsloth（72 PR）与 LiteLLM（30+议题）表明，快速功能迭代已超越正确性保障。**锁定版本，监控PR，避免前沿发布**。

**开发者建议**：

- ✅ **生产环境MoE服务**：使用 **vLLM v0.28.0** 在 A100/A800 上；**避免 GB10/H20**，直至 v0.29.1 发布。
- ✅ **Blackwell/边缘部署**：使用 **llama.cpp b10929**，并启用 `GGML_CUDA_DISABLE_GRAPHS=1` 和 `GGML_CUDA_FA_ALL_QUANTS=ON`。
- ✅ **本地多模态代理**：使用 **Ollama 0.33.x**；避免 0.34.0，直至工具调用修复合并。
- ✅ **避免 LiteLLM v1.84.0** — 使用 v1.83.x，自托管模型**避免使用 `openai/` 前缀**。
- ✅ **监控PR**：  
  - vLLM: #56461（GB10块大小）、#56389（H20崩溃）  
  - SGLang: #39193（FP8 GEMM）、#39216（断开连接崩溃）  
  - Ollama: #17894（工具调用上下文）、#18400（JSON键）  
  - Unsloth: #10839（工具去重）、#10835（安全绕过）

> **最终洞察**：基础设施栈在能力上正变得**更加碎片化**，但在优先级上却**日益趋同**——**KV效率、量化稳定性、代理正确性**已成为通用KPI。明智选择你的层级，锁定版本，并将推测解码视为Beta功能，直至第四季度。

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM 摘要 — 2026-09-13**

---

### **1. 今日重点**  
vLLM 生态系统正围绕 DeepSeek-V4.1-Flash 和 GLM-5.3-Flash 的部署快速演进，针对 SM120/SM121（GB10）、ROCm（MI355X）以及推测解码的关键修复与优化已陆续提交。当前最紧迫的问题包括：GB10 上的内存损坏、H20 高并发下 Triton 内核崩溃，以及 DFlash2 中的前缀缓存失效——所有问题均有活跃 PR 正在审查中。与此同时，批处理不变性与 MoE 卸载正逐步成为核心基础设施支柱。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未发布任何新版本或破坏性 API/配置变更。

---

### **3. 新模型与硬件支持**  
- **DeepSeek-V4.1-Flash**：现已正式支持 **NVIDIA GB10（SM121）** 和 **H20（SM90）**，多个 PR 正在解决缓存块不匹配（#56461）、Triton 内存访问异常（#56389）和量化损坏（#49546）等问题。  
- **ROCm（MI355X）**：正在跟踪 DeepSeek-V4.1-Flash 在 AMD GPU 上的性能并稳定 CI（#56506、#50922）；已弃用 MI250 测试组的 DinD（#56162）。  
- **GLM-5.3-Flash**：在多轮智能体场景中报告了重复标记退化问题（#56605）；去 JIT 化工作正在进行中（#55348）。  
- **量化**：NVFP4 权重缩放检测通过 NaN 标记得到改进（#52501）；GB10 上 Marlin W4A8-FP8 的损坏已被确认（#49546）。  
- **MoE**：引入 LFRU 逐出与异步流水线的增量专家卸载（#38256）；DeepSelect TopK 已集成至 DSA 稀疏索引器（#56464）。

🔗 [DeepSeek-V4.1-Flash GB10 问题 #56461](https://github.com/vllm-project/vllm/issues/56461)  
🔗 [ROCm 性能追踪 #56506](https://github.com/vllm-project/vllm/issues/56506)  
🔗 [NVFP4 标记修复 #52501](https://github.com/vllm-project/vllm/pull/52501)  
🔗 [DeepSelect TopK 集成 #56464](https://github.com/vllm-project/vllm/pull/56464)

---

### **4. 性能与优化**  
- **前缀缓存复用**：DFlash2 在 104 万条提示中**完全无法复用前缀缓存**，因 KV 块对齐不匹配（#54094）；修复中，PR #54381 正在处理。  
- **推测解码**：在 Qwen3.5 上，当上下文达 18.5k 时，DFlash2 反成**性能瓶颈**（吞吐从 71 降至 16 token/s），因每次草稿周期均需全 KV 重扫描（#54691）。  
- **吞吐量**：Triton/FlashInfer 多模态前缀注意力组合在固定 5 req/s 负载下，将 TTFT 降低 **34.5%**（#56305）。  
- **KV 缓存**：HiSparse 主机缓存现已通过 mmap 在 TP 各分片间共享（#56629），减少内存冗余。  
- **TopK**：DeepSelect 集成目标是使 DSA 稀疏索引器路径上的 TopK 内核**提速超 2 倍**（#56464）。  
- **Reduce-Scatter**：为 SM100/SM103 新增低 SM 后端，利用 `multimem.ld_reduce` 提升 TP2/4/8 的 reduce-scatter 效率（#55072）。

🔗 [DFlash2 TTFT 提升 #56305](https://github.com/vllm-project/vllm/pull/56305)  
🔗 [DeepSelect TopK #56464](https://github.com/vllm-project/vllm/pull/56464)  
🔗 [HiSparse 缓存共享 #56629](https://github.com/vllm-project/vllm/pull/56629)

---

### **5. 稳定性与回归问题**  
按严重性排序（严重 → 高）：

1. **严重**：`dsv4_topk` Triton 内核在 H20 上 `max_num_seqs > 256` 时因**非法内存访问**崩溃（#56389）——当前通过降低配置缓解，修复中。  
2. **严重**：DeepSeek-V4.1-Flash 在 GB10（SM121）上**无法服务**，因 SWA 缓存索引器中 32 与 64 块大小不匹配（#56461）——活跃 PR #54381。  
3. **高**：DeepSeek-V4-Flash-0731 在 1/4 提示长度下，精确检索任务出现**确定性输出损坏**（#55927）——托管服务商可复现。  
4. **高**：GLM-5.3-Flash 在多轮智能体流程中退化为**重复标记的“词 salad”**（#56605）——尚无修复。  
5. **高**：启用序列并行时，**批处理不变性被破坏**（#56370）——影响确定性推理保障。  
6. **高**：**水印兼容性与质量回归监控缺失**（#56105）——跟踪中。

修复中：  
- #56621（KV 卸载存储提交）  
- #56610（ROCm 弹性 EP 死锁）  
- #56645（PCP/DCP 分片暴露）  
- #56323（DFlash JIT 迁移）

🔗 [H20 Triton 崩溃 #56389](https://github.com/vllm-project/vllm/issues/56389)  
🔗 [GB10 块大小不匹配 #56461](https://github.com/vllm-project/vllm/issues/56461)  
🔗 [输出损坏 #55927](https://github.com/vllm-project/vllm/issues/55927)  
🔗 [批处理不变性破坏 #56370](https://github.com/vllm-project/vllm/issues/56370)

---

### **6. 对应用开发者的影响**  
- **在 #56389 修复前，避免在 H20 上使用 `max_num_seqs > 256`** —— 请降低并发量，或禁用 DFlash2 直至补丁发布。  
- **暂勿在 GB10 系统上部署 DeepSeek-V4.1-Flash** —— 缓存块大小不匹配会导致静默失败（#56461）。请关注 v0.29.1 及以上版本。  
- **在 Qwen3.5 等混合 GDN 模型上，超过 100k 上下文时推测解码风险极高** —— 长上下文智能体请禁用 DFlash2。  
- **结构化输出 + DFlash2 + xgrammar 已失效** —— 确定性 FSM 失败（#53777）；建议对 JSON 输出任务禁用推测解码。  
- **ROCm 部署现已适用于 MI355X 生产环境** —— CI 已稳定，性能追踪已上线（#56506）。  
- **如需确定性推理**：若启用 `VLLM_BATCH_INVARIANT=1`，请禁用序列并行（#56370）——此为已知回归。  
- **监控水印与量化输出**：NVFP4 和 Marlin W4A8-FP8 在 GB10 上仍不稳定（#49546）。

> **建议**：在 vLLM v0.29.1 发布前，暂勿在生产环境中部署 DeepSeek-V4.1-Flash 或 GLM-5.3-Flash。请使用 v0.28.0 并设置保守的 `max_num_seqs`，对长上下文或结构化输出任务禁用推测解码，并优先选择 SM80（A100/A800）而非 SM90/SM121，直至进一步稳定性补丁落地。

🔗 [vLLM v0.29.x 追踪](https://github.com/vllm-project/vllm/releases)  
🔗 [DeepSeek-V4.1 生产指南](https://github.com/vllm-project/vllm/issues/56461)  
🔗 [推测解码陷阱](https://github.com/vllm-project/vllm/issues/54691)

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 摘要 — 2026-09-13**

---

### **今日重点**  
SGLang 的 CI 流水线持续受到高度关注，24 小时内新增 26 个问题，主要集中在 DeepSeek-V4.1 的 FP8/MoE 内核正确性问题及 Blackwell（SM121）硬件兼容性上。与此同时，大量 PR 正针对新兴架构（AMD gfx942/950、Apple MLX、NVIDIA Blackwell）进行性能加固，目前共有 342 个开放 PR，覆盖推理、量化与分布式服务各层的活跃开发。

---

### **发布与破坏性变更**  
过去 24 小时内无新版本或破坏性 API/配置变更发布。

---

### **新模型与硬件支持**  
- **Blackwell（SM120/121）**：多项 PR 推进完整集成：  
  - `vibecuda` MSA 后端支持（#39233）  
  - 修复 SM121 上 DeepGEMM MoE 缓冲区大小问题（#39223）  
  - FP8 `wo_a` GEMM 正确性补丁待审（#39193）  
  - 修复 DSV4.1 + Engram 的 CUDA 图捕获问题（#39173）  
- **AMD ROCm**：  
  - gfx942 上 DSA 投影融合与 CUDA 后处理解耦（#39243）  
  - gfx950 上启用统一 FP8 KV 缓存（#37413）  
  - 统一 Triton MoE 路由器现支持 ROCm（#38328）  
- **Apple MLX**：  
  - 修复 Qwen3.5 VL 模型的无头 trunk 检测问题（#39242）  
  - 初始化 Mamba grid 属性以避免前缀匹配时崩溃（#39238）  
- **NPU**：为 DeepSeek-V4 添加主机内存缓存管理（#37382）  
- **量化**：提议为 Hopper 上的 DeepSeek-V4.1 C1/C2 实现 FP4 KV 缓存存储（#38902）  

---

### **性能与优化**  
- **延迟**：  
  - TRT-LLM MLA 后端在目标验证中复用融合的 FP8 KV/Q 预处理，消除冗余启动（#39232）  
  - SM120/121 上移除 DeepSeek-V4 解码填充 → **解码步长减少 0.5%**（#39235）  
- **内存**：  
  - 统一 Radix 缓存现支持带辅助池感知的混合前缀恢复（#39147）  
  - MegaMoE 缓冲区分配优化，遵循 SM 预算限制（#39223）  
- **吞吐量**：  
  - CUDA 上启用向量化 JointThreshold 解码，替代串行 Python 路径（#34122）  
  - ReplaySSM 环形写入合并至 KDA 链验证内核（#36821）  
- **内核**：  
  - FlashInfer 现正确拒绝无 cubin 的 SM89（#38980）  
  - 通过依赖修复解决 `deep_gemm` CUDA 图捕获失败（#39241）  

---

### **稳定性与回归问题**  
*按严重性排序 — 除注明外均为关键问题*  

1. **🔥 关键（正确性）**：  
   - DeepSeek-V4.1 FP8 `wo_a` GEMM 在 SM121 上且 `DEEPGEMM_SCALE_UE8M0=false` 时，**约 25% 输出错误但无提示**（#39193）  
   - 量化 DFlash2 草稿模型**接受率接近 0% 且无错误报告**（#39087）  
   - `--moe-runner-backend deep_gemm` 在 SM121 上加载 4 分钟权重后 CUDA 图捕获失败（#39226）  
   - 客户端断开连接导致引擎崩溃，因未捕获 `asyncio.CancelledError`（#39216）  

2. **🚨 高（回归）**：  
   - 统一缓存默认切换导致 Spark/Thor 上长前缀解码吞吐量下降（#36131）  
   - PP8 分离预填充在 Kimi-K3 上 TTFT 基线达 **~30 秒**（#34815）  
   - FP8 KV 缓存解码因未融合的 K/V 量化开销而变慢（#30815）  

3. **⚠️ 中等（稳定性）**：  
   - CI 流水线：4 个失败，10 个不稳定测试（#17050）  
   - MiniMax H3 GGUF 无法加载 Conv3D 补丁嵌入（#38904）  
   - SWA 分支错误地将 Mamba 检查点附加到更早前缀（#38815）  

*除 #39193 和 #39087 外，所有关键问题均已存在修复 PR，二者均在积极审查中。*

---

### **对应用开发者的建议**  
- **生产环境避免使用 Blackwell + FP8 MoE**，直到 #39193 和 #39226 合并 —— 输出会静默损坏。  
- **除非需要审计追踪，否则请使用 `--enable-response-store=false`** —— PD 部署中存在无界内存增长（#39122）。  
- **Apple Silicon 用户**：Qwen3.5 VL 和 Mamba 混合模型现已可启动 —— 但仅在打上 #39238 补丁后才需使用 `--mamba-radix-cache-strategy no_buffer`。  
- **AMD 用户**：gfx942/gfx950 的 FP8 支持现已可用 —— 请验证 `--attn-cp-size` 并启用统一 Triton 路由器（#38328）。  
- **CI/CD 流水线**：扩散 CI 中性能失败现为终止性错误 —— 请确保输出 E2E 指标（#39206）。  
- **工具调用解析**：GLM-4.7/5 的 JSON Schema 联合类型现可在流式与非流式路径中一致保留（#39136）— 对代理可靠性至关重要。  

> **建议**：生产环境请锁定至 `v0.5.15`，直至 #39193 和 #39216 解决。持续关注 #17050 了解 CI 稳定性趋势。  

🔗 **关键问题**：  
- [#39193](https://github.com/sgl-project/sglang/issues/39193) — FP8 GEMM 正确性  
- [#39216](https://github.com/sgl-project/sglang/issues/39216) — 客户端断开导致引擎崩溃  
- [#39226](https://github.com/sgl-project/sglang/issues/39226) — DeepGEMM CUDA 图失败  
- [#17050](https://github.com/sgl-project/sglang/issues/17050) — CI 健康追踪  

🔗 **关键 PR**：  
- [#39241](https://github.com/sgl-project/sglang/pull/39241) — DeepGEMM 依赖修复  
- [#39232](https://github.com/sgl-project/sglang/pull/39232) — MLA 中 FP8 KV 复用  
- [#39233](https://github.com/sgl-project/sglang/pull/39233) — Blackwell 上 VibeCUDA  
- [#39243](https://github.com/sgl-project/sglang/pull/39243) — AMD DSA 解耦

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 摘要 — 2026-09-13**

---

### **今日重点**  
今日更新聚焦于 CUDA 和 Vulkan 后端的关键稳定性修复、工具调用模型的 Jinja 模板解析增强，以及为下一代硬件（如 NVIDIA Blackwell（sm_120）和 Intel Arc Battlemage）奠定基础支持。最具影响力的变化解决了 4-bit KV 缓存处理中的静默性能骤降和连续批处理中的 GPU 内存泄漏问题，直接关系到生产环境推理的可靠性。

---

### **发布与破坏性变更**  
过去 24 小时内未发布正式版本。但构建行为发生显著变化：  
- `b10933` 增加了对 Jinja 点符号整数字面量的支持（`{1: 'Bob'}.1`），提升与 Qwen3-Coder 及类似工具调用模型的兼容性。  
- `b10932` 禁用了 Clang PCH 中的时间戳嵌入，以修复 CI/CD 重建时的缓存失效问题——虽非破坏性变更，但对开发流程至关重要。  
- `b10931` 为 Web 界面引入 UI 缓存支持，提升重载时的用户体验一致性。  
➡️ *无 API 破坏性变更；所有更新均为新增或修复性质。*  
🔗 [PR #28817](https://github.com/ggml-org/llama.cpp/pull/28817) | [PR #28816](https://github.com/ggml-org/llama.cpp/pull/28816) | [PR #28802](https://github.com/ggml-org/llama.cpp/pull/28802)

---

### **新模型与硬件支持**  
- **模型**：通过 PR #28818 增加对 **ELMOD 2.7B**（基于 GPTNeoX 的德语变体，含自定义分词器）的支持。  
- **硬件**：  
  - **CUDA（Blackwell）**：PR #28823 强制在 sm_120 上对 IQ 量化（IQ1_S、IQ3_XXS 等）使用 cuBLAS 回退，修复 Unsloth 动态量化模型中的静默数据损坏问题（#21371）。  
  - **Vulkan（Intel Arc）**：PR #28822 为 Intel Arc A770 添加 IQ3_S MMQ 内核，提升此前不支持后端的量化性能。  
  - **ROCm**：PR #27841 为 HIP 后端添加 GCN 专用配置表，增强 AMD GPU 兼容性。  
- **量化**：IQ 量化在 Blackwell 上现具备显式回退路径——这是实现下一代 GPU 上可靠 4-bit 部署的重要一步。  
🔗 [PR #28818](https://github.com/ggml-org/llama.cpp/pull/28818) | [PR #28823](https://github.com/ggml-org/llama.cpp/pull/28823) | [PR #28822](https://github.com/ggml-org/llama.cpp/pull/28822) | [PR #27841](https://github.com/ggml-org/llama.cpp/pull/27841)

---

### **性能与优化**  
- **CUDA**：PR #28633 提议将 `GGML_CUDA_FA_ALL_QUANTS=ON` 设为默认值，以避免在使用 4-bit KV 缓存时出现静默的 30 倍预填充性能下降——这对成本敏感型部署至关重要。  
- **Vulkan**：PR #28752 报告在 b10780 之后 RDNA3 上出现严重的提示处理性能回退，正在调查中。  
- **内核改进**：  
  - 为 OpenCL 添加 `kernel_gemm_noshuffle_q4_k_f32_32b_trans_ila_a8_bin`（PR #28677），提升高通 APU 上的量化 GEMM 性能。  
  - PR #28821 在 CUDA 中增加 contiguous_rows 一元内核支持，使张量布局更灵活。  
- **内存**：PR #28751 消除在 `causal_attn` 切换时不必要的调度器重新预留，降低循环架构的开销。  
🔗 [PR #28633](https://github.com/ggml-org/llama.cpp/pull/28633) | [PR #28677](https://github.com/ggml-org/llama.cpp/pull/28677) | [PR #28821](https://github.com/ggml-org/llama.cpp/pull/28821) | [PR #28751](https://github.com/ggml-org/llama.cpp/pull/28751)

---

### **稳定性与回退**  
**关键问题（需立即处理）**  
- **#28196**：在 RTX 5090（sm_120）上运行 Qwen35 时，解码带宽仅为理论峰值的 76%——严重利用率不足。  
- **#27330**：CUDA 图形在 RTX 5090 笔记本电脑上导致挂起（RC 看门狗/Xid 8）；需使用 `GGML_CUDA_DISABLE_GRAPHS=1` 作为临时方案。  
- **#28404**：双 GPU 服务器在 `ggml-cuda.cu:107` 处因 CUDA 图形复用而崩溃——已在 Windows/RTX 5060 Ti 上确认。  
- **#28813**：在多 GPU 系统上使用 `-np 3` 时发生 OOM 崩溃——可能由调度器或 KV 缓存管理中的内存泄漏导致。  

**高风险（生产环境风险）**  
- **#28752**：b10780 后 Vulkan/RDNA3 上提示处理性能严重下降——正在积极调查。  
- **#28633**：使用 4-bit KV 缓存时出现静默的 30 倍预填充性能下降——无警告、无日志，仅性能崩溃。  
- **#26220**：移除 rocWMMA 后，RDNA4 提示处理性能下降 2 倍——原生 MMA 内核性能不佳。  

**修复进行中**  
- PR #28823 解决 Blackwell 上 IQ 量化的数据损坏问题。  
- PR #27530 和 #27943 修复失败恢复后 K/V 状态清理与序列化泄漏问题。  
🔗 [Issue #28196](https://github.com/ggml-org/llama.cpp/issues/28196) | [Issue #27330](https://github.com/ggml-org/llama.cpp/issues/27330) | [Issue #28404](https://github.com/ggml-org/llama.cpp/issues/28404) | [Issue #28813](https://github.com/ggml-org/llama.cpp/issues/28813) | [Issue #28752](https://github.com/ggml-org/llama.cpp/issues/28752) | [Issue #28633](https://github.com/ggml-org/llama.cpp/issues/28633)

---

### **对应用开发者的含义**  
- **在 Blackwell（RTX 5090/5080）上部署**：当前请使用 `GGML_CUDA_DISABLE_GRAPHS=1` 避免挂起；启用 `GGML_CUDA_FA_ALL_QUANTS=ON` 防止 30 倍预填充性能下降。等待 PR #28823 合并以获得稳定的 IQ 量化支持。  
- **工具调用（Qwen3、Ling 3.0）**：Jinja 点符号整数支持（b10933）可无缝解析 `{1: 'Bob'}.1` 格式的工具输出——请确保前端已适配此格式。  
- **多 GPU 与连续批处理**：在混合 GPU 配置中，请避免使用 `-np 3` 或更高值，直至 #28813 修复。建议采用单进程绑定单 GPU 并显式指定 `--gpu-layers`。  
- **Vulkan 用户（AMD/Intel）**：请留意 b10780 后的提示处理性能下降。Intel 用户即将获得 IQ3_S 支持——建议升级驱动程序。  
- **构建与 CI**：若使用 Clang + PCH，请升级至 b10932+ 以避免缓存失效循环。  

> **建议**：若在 CUDA/Blackwell 上部署关键生产系统，请锁定至 `b10929` 或更早版本。密切关注 PR #28823 和 #28633 的修复进展。使用 `--log-json`（PR #28586）启用结构化日志，以检测静默失败。  

🔗 [llama.app](https://llama.app) | [GitHub 仓库](https://github.com/ggml-org/llama.cpp)

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama 摘要 — 2026-09-13**

---

### **今日重点**  
Ollama 最近的活动主要集中在多模态和工具调用模型的关键稳定性与正确性修复上，尤其涉及 Qwen 3.8、Gemma 4 和结构化输出解析。大量 PR 解决了长期存在的对话截断、工具调用流式传输和 GPU 内存管理问题，多项修复已进入审核阶段，即将发布。

---

### **发布与破坏性变更**  
过去 24 小时内无新版本发布。  
**注意**：`ollama create --quantize` 现在会在 `~/.ollama/models/blobs` 中保留未引用的 F16 数据块（#18416），可能导致磁盘膨胀 —— 临时解决方法：量化后手动清理 blobs。  
此外，PR #18393 已移除内置代理，CLI 恢复为经典聊天界面。

---

### **新模型与硬件支持**  
- **新模型支持**：已提交 `Hy4`（腾讯）模型请求（#18287），暂无官方支持。  
- **硬件**：  
  - AMD Strix Halo（gfx1151）上的 ROCm 后端在请求间存在 KV 状态泄漏问题（#17847）。  
  - Linux 混合显卡（Intel iGPU + RTX 4080）在设备选择时触发 `llama-server SIGABRT`（#18412）。  
  - Jetson Orin Nano 8GB 因 projector 内存溢出无法加载 Gemma 4 E4B 多模态模型（#18396）。  
- **量化**：从 safetensors 使用 `--quantize` 不再清理未量化的 F16 数据块（#18416）—— 此为回归问题。

---

### **性能与优化**  
- **内存**：  
  - 在持续负载下，Windows 上的 `/api/embed` 会因禁用 HTTP keep-alive 耗尽回环端口（#18392）。  
  - PR #18407 在验证后保留导入的 GGUF 数据块，避免重复复制 50GB+ 的张量。  
- **吞吐量**：  
  - PR #18399 引入 `OLLAMA_CONTEXT_SHIFT`，拒绝过长提示而非静默截断 —— 提升批处理流水线的可靠性。  
- **延迟**：  
  - PR #18413 确保推理完成后再发出 `web_search` 工具调用，防止 Codex 重放流程中断。

---

### **稳定性与回归问题**  
*按严重性和影响程度排序*：

1. **严重**：Qwen 3.8 工具循环报错 `500: no user query found in messages`（#17778）—— **PR #17894 已修复**。  
2. **严重**：Strix Halo 上 ROCm 的 KV 状态在请求间泄漏（#17847）—— 尚无 PR；影响多轮推理可靠性。  
3. **高**：Gemma 4 工具调用中含空格的键名（如 `"Basic LLM Chain"`）导致 JSON 解析失败（#18400, #18398）—— **两个 PR 已提交**。  
4. **高**：Jetson Orin Nano 在 Gemma 4 E4B 多模态 projector 上因 OOM 崩溃（#18396）—— 尚无修复；阻碍边缘端多模态部署。  
5. **高**：`ollama create --quantize` 泄漏未引用的 F16 数据块（#18416）—— **0.34.0 版本中的回归**。  
6. **中**：Windows PowerShell 在应用启动时闪烁（#18415）—— 无害但影响用户体验。  
7. **中**：聊天历史静默截断且无用户通知（#14259）—— **PR #17894 部分修复此问题**。

---

### **对应用开发者的影响**  
- **代理与工具调用**：若依赖 Qwen 3.8 或 Gemma 4 进行工具调用，**请勿在生产环境部署，直至 PR #17894、#18400 和 #18413 合并** —— 当前工具调用顺序、键名解析和上下文截断均存在故障。  
- **嵌入流水线**：在 Windows 上批量调用 `/api/embed` 存在端口耗尽风险 —— 请实现连接池或带退避的重试逻辑（#18392）。  
- **边缘部署**：Jetson Orin Nano 用户应避免使用多模态 Gemma 4 版本，直至内存 projector 修复上线（#18396）。  
- **模型管理**：量化后请手动清理 `~/.ollama/models/blobs/` 以避免磁盘膨胀（#18416）。  
- **未来兼容**：`OLLAMA_CONTEXT_SHIFT`（PR #18399）将很快支持强制限制提示长度 —— 请准备处理 400 错误，而非静默截断。

**行动项**：  
- 关注 PR #17894、#18400、#18413 的合并状态 —— 这些修复解决了核心代理故障。  
- 生产环境中避免使用 Ollama 0.34.0，直至多模态和工具调用修复发布。  
- 若稳定性至关重要，建议锁定至 0.33.x 版本。

🔗 [PR #17894](https://github.com/ollama/ollama/pull/17894) | [PR #18400](https://github.com/ollama/ollama/pull/18400) | [PR #18413](https://github.com/ollama/ollama/pull/18413) | [Issue #18416](https://github.com/ollama/ollama/issues/18416)

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 摘要 — 2026-09-13**

---

### **今日重点**  
今日活动主要集中在代理路由、成本追踪以及 Anthropic/Vertex AI 互操作性的关键修复上，共提交了 30 多个新问题，主要涉及流式推理丢失、预算强制执行漏洞以及 OpenAI 兼容模型路由配置错误。值得注意的是，PR #40923 强制要求委托 MCP 路由的 OAuth 认证，而 PR #40919 同步了来自 5 个提供商的 278 个模型的定价，解决了长期存在的成本可见性偏差问题。

---

### **发布与破坏性变更**  
过去 24 小时内无新版本发布，未报告任何 API 或配置破坏性变更。然而，v1.84.0 仍是已知的回归问题来源：Vertex AI 健康状态错误地标记为“不健康”（#28206），且以 `openai/` 开头的自托管模型通过 `/v1/messages` 路由时会静默丢弃多模态输入（#40780）。

---

### **新增模型与硬件支持**  
- **新增模型**：通过 PR #40919 同步了 Anthropic、Google Gemini、OpenAI、Mistral 和 Cohere 的 34 个新模型，包括新上线的 Gemini Live 变体和 DeepSeek 模型（#30430）。  
- **提供商支持**：腾讯 TokenHub 现已出现在 UI 模型下拉菜单中（#40924）。  
- 未报告新增硬件或量化格式支持。

---

### **性能与优化**  
- **延迟降低**：PR #40923 消除了冗余的匿名 MCP 流量，减少了委托工具调用的上游往返次数。  
- **缓存效率**：PR #40627 通过正确应用缓存读取费率，修复了缓存音频标记的超额计费问题，提升了实时音频工作流的成本准确性。  
- **日志开销**：PR #40912 在流量高峰期间限制了冗余的 Redis 超时日志，使高吞吐部署中的日志量减少超过 90%。  
- *未报告可测量的吞吐量或内核级优化。*

---

### **稳定性与回归问题**  
**严重（高优先级）**  
- **#40887**：流式响应丢失推理进度 —— 破坏代理自省与缓存功能。*暂无修复 PR。*  
- **#40780**：`openai/` 开头的模型将 `/v1/messages` 路由至 Responses API，静默丢弃多模态输入。*对自托管 vLLM/TGI 用户影响重大。*  
- **#23741**：Anthropic 因传递 `vector_store_ids` 导致 400 错误 —— 破坏 Claude 3.5 与向量库的工具调用。*对 RAG 代理影响严重。*  
- **#40851**：消费日志中的 `session_id` 被覆盖，导致多请求会话分组失效。  

**高优先级**  
- **#40649**：管理界面持久化派生定价，导致 Azure 消费报告为 $0。  
- **#40050**：Claude Code 错误触发预算超限告警 —— 实际消费未超限却返回 429。  
- **#40890**：`/v1/messages` 透传丢弃自适应推理元数据 —— 破坏 Anthropic 原生推理流程。  

**修复中**  
- PR #40922 解决团队回调静音与 GCS 刷新失败问题。  
- PR #40915 修复 Gemini Live 会话计费（内部副本 #37075）。  
- PR #40923 强制实施 MCP 委托的 OAuth 认证。  

*严重缺陷总数：5 | 修复 PR：4（覆盖不全）*

---

### **对应用开发者的影响**  
- **避免对自托管模型使用 `openai/` 前缀** —— 会触发损坏的 `/v1/messages` 路由。改用直接提供商名称（如 `vllm/`、`sglang/`）。  
- **代理推理流程脆弱** —— 来自 Anthropic/Vertex 模型的流式响应可能丢失 `reasoning_items` 和 `reasoning_text`。请监控日志中是否存在上下文缺失。  
- **成本追踪不可靠** —— Claude Code 的预算强制失效，OCR 定价忽略部署覆盖，会话 ID 遗失。在 PR 合并前，请手动审计消费日志。  
- **MCP 工具调用现需认证** —— 若使用委托 MCP 路由，请确保已配置 OAuth 认证（PR #40923）。  
- **更新模型定价** —— 新增 34 个模型支持；运行 `litellm --update-models` 同步。  

> *建议*：在 #28206、#40780 和 #23741 的修复合并前，请勿升级至 v1.84.0+。如需在生产环境中使用 Anthropic 或 Vertex AI 工具，请继续使用 v1.83.x。

---

**相关链接**  
- [Anthropic vector_store_ids 问题](https://github.com/BerriAI/litellm/issues/23741)  
- [OpenAI 前缀模型多模态失效](https://github.com/BerriAI/litellm/issues/40780)  
- [流式推理丢失](https://github.com/BerriAI/litellm/issues/40887)  
- [定价同步 PR](https://github.com/BerriAI/litellm/pull/40919)  
- [MCP OAuth 认证修复](https://github.com/BerriAI/litellm/pull/40923)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

Unsloth 消息摘要 — 2026-09-13

---

### **1. 今日重点**  
Unsloth 工程团队正全力修复桌面端与 Studio 界面的关键稳定性与用户体验回退问题，24 小时内更新了 72 个 PR，涵盖模型下载失败、MCP 去重缺陷及 GPU 后端配置错误等修复。一系列高影响力 PR 已合并，以解除主线 CI 阻塞、恢复 ROCm 支持并增强推理可观测性，标志着即将发布周期前的一次重大稳定化推进。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未发布新版本。  
但破坏性变更正在积极修复中：  
- PR #10825 通过从 Docker 镜像中移除 `UNSLOTH_ALLOW_CPU=1`，恢复了 GPU 主机上的 TRL 补丁，解决了 Trainer 初始化失败问题。  
- PR #10740 通过从 Studio 训练流程中移除已弃用的 kwargs（`max_seq_length`、`tokenizer`），解决了 TRL 0.20+ 的兼容性问题。  
- PR #10837 更新了 Azure/OpenAI 网关的代理逻辑，改用 `max_completion_tokens` 替代 `max_tokens`，以符合新版 API 期望。  

👉 *迁移提示*：使用 TRL 0.20+ 或 Azure 网关的用户必须升级至最新版 `unsloth`，以避免训练或推理失败。

---

### **3. 新模型与硬件支持**  
- **新增模型支持**：  
  - 请求支持 **DeepSeek V4.1 Flash GGUF**（#10838）—— 正在审核中。  
  - **Qwen3.5-9B LoRA** 在 B200 上的训练性能已验证（#10744）。  
  - **Qwen 3.8 Flash Next (Q5_K_XL)** 因缺少 `hf_xet` 依赖导致下载失败（#10840）—— 已标记待纳入。  
- **硬件与后端**：  
  - 通过新 Docker 镜像添加了对 AMD ROCm 的支持（涵盖 RDNA2–RDNA4 和 CDNA 架构）（#10820），可在 Instinct MI300X 及类似设备上训练。  
  - Windows 上的 ROCm 明确限制 `accelerate < 1.15`，以规避 `torch.distributed.tensor` 不兼容问题（#10819）。  
  - Studio API 监控器现支持 GGUF + llama.cpp 的实时进度追踪（#10834）。  

---

### **4. 性能与优化**  
- 在 NVIDIA B200 上运行 **Qwen3.5-9B LoRA SFT**，通过降低 CPU 端开销，**吞吐量提升 22%**（单步耗时从 0.85s 降至 0.66s）（#10744）。  
- Studio 推理延迟可观测性增强，新增实时 `Prompt 处理 · N%` 和 `Token 生成` 阶段指示器（#10834）。  
- 模型加载现在支持“仅下载”模式，图像模型不再自动加载，减轻内存压力（#10789）。  
- 为图像模型开放了文本编码器精度控制（FP8、INT8、NVFP4）（#10788），支持精细的内存/性能调优。

---

### **5. 稳定性与回退问题**  
*今日报告的前五项关键问题（均未合并修复）：*

1. **🚨 MCP 去重导致工具调用中断** —— 系统性截断合法的重复工具调用（如编译命令）（#10839, #10379）。*对智能体工作流影响重大。*  
2. **🚨 AppImage 缺少 `hf_xet`** —— 导致无法下载大型 GGUF 模型（如 Qwen 3.8 Flash Next）（#10840）。  
3. **🚨 “完全访问”工具权限绕过安全沙箱** —— 允许 `rm`、`reboot` 等命令绕过沙箱保护（#10835）。*严重安全漏洞。*  
4. **🚨 新建聊天时 Studio 崩溃** —— `tapClientLookup: Index 1 out of bounds` 导致桌面端频繁崩溃（#10288）。  
5. **🚨 Windows 上 ROCm 训练失效** —— `accelerate 1.15` 因缺失 CUDA 后端符号而崩溃（#10819）。  

*正在修复中：*  
- PR #10836 修复了数据配方中误报的 `ALL_COLUMNS_DROPPED` 警告（#10738）。  
- PR #10832 修复了 `main` 分支因过时断言导致的 CI 中断，解除了 25+ 个 PR 的阻塞。  
- PR #10825 与 #10819 直接修复了 Docker 与 ROCm 的回退问题。

---

### **6. 对应用开发者的影响**  
- **智能体与工具调用**：若你的应用依赖重复工具调用（如代码生成、批量 API 调用），请在 #10379 可用后**禁用去重**，否则智能体将静默失败。  
- **部署建议**：使用**含 GPU 支持的 Docker 镜像**，在 #10825 合并前避免使用 `unsloth:latest`。AMD 用户请切换至新 ROCm 镜像（#10820）。  
- **推理可观测性**：Studio 现提供实时提示与 token 阶段监控，对调试生产网关延迟至关重要（#10834）。  
- **安全提醒**：**生产环境中切勿信任“完全访问”工具权限** —— 修复补丁正在准备中（#10835），建议实施外部沙箱机制。  
- **模型管理**：新增“在文件夹中显示”与“删除”操作，便于本地模型的 CI/CD 集成与清理（#10833）。  

> 🔧 *专业提示*：若使用 AppImage，请手动安装 `hf_xet`：`pip install hf_xet` —— 或改用原生安装以避免下载失败（#10840）。

---

**相关链接**：  
- [PR #10832: 修复 main 分支 CI 中断](https://github.com/unslothai/unsloth/pull/10832)  
- [PR #10825: 恢复 GPU 上的 TRL 补丁](https://github.com/unslothai/unsloth/pull/10825)  
- [PR #10820: 添加 ROCm Docker 镜像](https://github.com/unslothai/unsloth/pull/10820)  
- [Issue #10839: MCP 截断问题](https://github.com/unslothai/unsloth/issues/10839)  
- [Issue #10840: AppImage 缺失 hf_xet](https://github.com/unslothai/unsloth/issues/10840)  
- [PR #10834: 推理阶段监控](https://github.com/unslothai/unsloth/pull/10834)  
- [Issue #10379: 禁用工具去重](https://github.com/unslothai/unsloth/issues/10379)

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*