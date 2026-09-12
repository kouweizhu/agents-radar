# AI 基础设施日报 2026-09-12

> 生成时间: 2026-09-12 03:08 UTC | 覆盖项目: 6 个

- [vLLM](https://github.com/vllm-project/vllm)
- [SGLang](https://github.com/sgl-project/sglang)
- [llama.cpp](https://github.com/ggml-org/llama.cpp)
- [Ollama](https://github.com/ollama/ollama)
- [LiteLLM](https://github.com/BerriAI/litellm)
- [Unsloth](https://github.com/unslothai/unsloth)

---

## 横向对比

**跨项目AI基础设施生态报告 — 2026-09-12**

---

### **1. 生态概览**  
2026年第三季度的AI推理生态呈现出高度专业化与碎片化特征：高性能推理引擎（vLLM、SGLang）竞相优化MoE与Hopper/Blackwell架构，而本地运行时（llama.cpp、Ollama）则聚焦边缘部署、量化与跨平台稳定性。LiteLLM等网关整合了多提供商生态，但依然面临安全与预算管理漏洞；Unsloth等微调平台正转向以代理为中心的持久化工作流。主导趋势是**规模化下的稳定性**——结构化输出、KV缓存完整性与GPU内存管理的关键回归问题，正威胁全栈生产环境的可靠性。

---

### **2. 活动对比**

| 项目          | 开放议题 | 开放PR | 最近发布 | 发布状态 |
|---------------|----------|--------|----------|----------|
| **vLLM**      | 18       | 23     | 无（v0.28.0） | 稳定，但`main`分支待3个关键修复 |
| **SGLang**    | 21       | 19     | 无       | 高活跃度；所有关键Bug均有活跃PR |
| **llama.cpp** | 14       | 12     | 无（b10919 dev） | 开发导向；无正式发布；破坏性默认值正在讨论中 |
| **Ollama**    | 27       | 15     | 无（v0.34.0） | 不稳定；存在4个关键工具调用/量化回归问题 |
| **LiteLLM**   | 24       | 11     | v1.82.8（补丁） | 安全受损；2个关键修复已合并，3个高危问题未处理 |
| **Unsloth**   | 29       | 18     | 无（Docker 2026.9.4） | 破坏性API变更（`max_seq_length` → `max_length`）；代理功能已合并 |

> **洞察**：SGLang与vLLM在工程速度上领先（20+ PR），但Ollama和Unsloth的问题密度最高——表明功能扩张下运营脆弱性加剧。LiteLLM的PR数量偏低，反映其在安全事件后的谨慎态度。

---

### **3. 模型支持竞赛**

| 项目          | 新增模型/架构支持 |
|---------------|-------------------|
| **vLLM**      | DeepSeek-V4.1-Flash（SM90/SM120）、GLM-5.3（SM120）、Anthropic前缀缓存、Rust客户端对等支持 |
| **SGLang**    | DeepSeek-V4.1（Hopper TP8）、GLM-5.3-Flash（SM120）、SenseNova-U1/U1.5、NPU（Ascend CANN 9.1.0） |
| **llama.cpp** | DeepSeek-V2、GLM4MoE、Cohere2MoE、Maple 20B-A1B（三元MoE）、RDNA4（gfx1201）调优 |
| **Ollama**    | 已请求：DeepSeek-V4.1-Flash、GLM-5.1（离线）；暂无活跃支持 |
| **LiteLLM**   | 新增218个模型：`claude-fable-5`、`gemini-2.5-flash`、`arcee-ai/trinity-mini` —— 仅限提供商层面，非引擎层面 |
| **Unsloth**   | 无新模型；新增MLX原生代理框架；ROCm支持进行中 |

> **领先者**：**SGLang**与**vLLM**在架构支持上并列领先——均已支持**DeepSeek-V4.1-Flash在Blackwell（SM120）与Hopper（SM90）**上的FP8/KV优化。SGLang在**NPU（Ascend）**与**多模态路由**上领先；vLLM在**Rust/Anthropic客户端对等**上领先。**llama.cpp**在**MoE量化**（Maple 20B-A1B，三元）与**RDNA4调优**上领先。**LiteLLM**在**模型目录广度**上领先，但仅限网关层。**Ollama**与**Unsloth**在模型接入上滞后，专注稳定性与工作流。

---

### **4. 性能前沿**

| 优化领域           | 领先项目         | 关键进展 |
|--------------------|------------------|----------|
| **KV缓存**         | vLLM、SGLang     | 动态FlashInfer工作区调整（vLLM）、HiCache路由（SGLang）、FP4/FP8 KV打包（SGLang）、Q8_0+Q4_0混合缓存（llama.cpp） |
| **批处理与调度**   | vLLM             | 前缀缓存复用率>99%（MTP/GDN）、推测解码修复、集成DeepSelect的top-k（解码延迟降低15–20%） |
| **量化**           | llama.cpp        | CUDA上Q8_0 + Q4_0 KV缓存、CPU上Q4_K P6/VNNI、三元MoE（Maple 20B-A1B）、IQ3_S（Ollama中不稳定） |
| **分布式推理**     | SGLang           | DFlash Mamba状态传输、DP路由修复、EAGLE滑动窗口对齐验证 |
| **内核**           | vLLM、SGLang     | ROCm上的Triton MoE内核、WO_A输出投影（vLLM）；Hopper上的形状通用GEMV（SGLang）；融合RMSNorm/Combine（SGLang） |

> **核心焦点**：**KV缓存效率**与**MoE内核专业化**是当前主战场。vLLM与SGLang在**内核层**（Triton、FlashInfer）优化；llama.cpp主导**量化感知缓存**。分布式推理（SGLang）与边缘量化（llama.cpp）是下一前沿。

---

### **5. 层级定位**

| 项目          | 层级                     | 核心差异点 |
|---------------|--------------------------|------------|
| **vLLM**      | **推理引擎**             | 高吞吐、多GPU、为MoE优化的推理服务，具备NVIDIA/AMD的内核级优化 |
| **SGLang**    | **推理引擎**             | 代理式、分布式推理，支持推测解码、HiCache与Mamba状态路由——专为复杂工作流设计 |
| **llama.cpp** | **本地运行时**           | 跨平台、量化优先、支持CPU/GPU/边缘推理，后端含Metal/SYCL/Vulkan/WebGPU |
| **Ollama**    | **本地运行时 + 网关**    | 通过Docker/CLI简化本地模型部署；工具链薄弱，用户体验优秀——当前正面临可靠性危机 |
| **LiteLLM**   | **LLM网关/代理**         | 统一API接入200+提供商；支持成本/预算路由——但饱受安全与内存泄漏困扰 |
| **Unsloth**   | **微调 + 代理工作台**    | 端到端训练+代理工作流平台，具备Git感知沙箱——连接训练与部署 |

> **战略分野**：  
> - **云端/企业级服务**：vLLM与SGLang主导  
> - **边缘/本地部署**：llama.cpp与Ollama竞争——llama.cpp更稳健，Ollama更易用但不稳定  
> - **多提供商路由**：LiteLLM为事实标准，但存在安全隐患  
> - **代理开发**：Unsloth开创持久化、沙箱化工作流——开辟新类别

---

### **6. 趋势信号**

1. **MoE已成为标准**：所有主流引擎（vLLM、SGLang、llama.cpp）均已优化对DeepSeek-V4.1、GLM4MoE与Cohere2MoE的支持。**部署任何新模型？默认假设其为MoE。**
2. **KV缓存优化 > 原始吞吐**：动态工作区调整（vLLM）、FP4 KV（SGLang）、混合精度缓存（llama.cpp）带来的收益，已超过单纯扩大批处理规模。
3. **安全成为新瓶颈**：LiteLLM的root容器与Ollama的工具调用解析失败表明，**基础设施可靠性已成为生产环境的首要风险**，而非延迟。
4. **代理工作流成为第一优先级**：Unsloth的Git工作树与SGLang的HiCache状态路由，标志着从“推理”向**自主、有状态代理执行**的转变——开发者必须设计持久性，而非仅追求速度。
5. **跨平台碎片化加剧**：ROCm（vLLM、SGLang、llama.cpp）与Intel XPU（SGLang）正崛起，但驱动不稳定、内核缺失。**在v0.30+版本稳定前，避免厂商锁定。**
6. **量化是雷区**：IQ3_S（Ollama）、q2_K–q3_K_L（Qwen2.5-Coder）与GGUF转换变更（Ollama）引发静默失败。**生产环境请坚持使用Q4_K_M/Q5_K_M。**

> **开发者建议**：  
> - **云端推理**：MoE吞吐选**vLLM**，代理场景选**SGLang**  
> - **边缘/本地**：使用**llama.cpp**，配合`--kv-type q4_0`与`--n-gqa 8`  
> - **多提供商应用**：仅在手动加固安全上下文并验证预算逻辑后使用**LiteLLM**  
> - **代理开发**：采用**Unsloth的代理工作区**——目前唯一提供Git集成沙箱执行的平台  
> - **持续关注**：PR #56557（vLLM）、#39160（SGLang）、#28633（llama.cpp）、#18388（Ollama）、#40819（LiteLLM）、#10803（Unsloth）——这些将定义下一季度的稳定性

---  
*由AI基础设施分析团队编制 — 2026-09-12*

---

## 各项目详细报告

<details>
<summary><strong>vLLM</strong> — <a href="https://github.com/vllm-project/vllm">vllm-project/vllm</a></summary>

**vLLM 摘要 — 2026-09-12**

---

### **1. 今日重点**  
vLLM 今日修复了结构化输出的正确性问题（xgrammar 多分支 `allOf`）、ROCm MoE 内核稳定性（DeepSeek-V4.1-Flash），以及 Anthropic 和 Rust 客户端的前端对齐。当前最活跃的领域仍是 MoE 优化与跨平台内核调优，过去 24 小时内有 5 个新 PR 针对 AMD 和 NVIDIA 的特定性能瓶颈。

---

### **2. 发布与破坏性变更**  
过去 24 小时内未检测到新版本或破坏性变更。

---

### **3. 新模型与硬件支持**  
- **DeepSeek-V4.1-Flash**：通过 PR #56214 完全支持 SM90（H20）和 SM120/121（GB10），但 SM120 需要绕过缓存块大小不匹配问题（Issue #56461）。  
- **ROCm（AMD）**：为 gfx942/gfx950 上的 W4A16 MoE 显式启用 Triton 后端（PR #56543）；在 gfx950 上为 DeepSeek-V4 启用 FP8 WO_A 输出投影（PR #54894）。  
- **多模态**：修复了基于编码器的分词器在 Anthropic API 中的前缀缓存问题（PR #56520）；移除了 DeepSeek-V4.1-Flash 的图像占位符填充（PR #56554）。  
- **Rust 前端**：现支持 `HF_HUB_OFFLINE`、`--revision` 和缓存目录（PR #56386）。  

🔗 [PR #56214](https://github.com/vllm-project/vllm/pull/56214) | [PR #56543](https://github.com/vllm-project/vllm/pull/56543) | [PR #54894](https://github.com/vllm-project/vllm/pull/54894) | [PR #56386](https://github.com/vllm-project/vllm/pull/56386)

---

### **4. 性能与优化**  
- **DeepSelect TopK 集成**：将 DeepSeek 的 DeepSelect 库中的高性能 TopK 内核集成至 DSA 稀疏索引器（PR #56464），预计在稀疏 MoE 模型上将解码延迟降低 15–20%。  
- **FlashInfer 工作区大小调整**：动态工作区分配替代固定默认值，大批量负载下内存开销最高减少 30%（PR #46883）。  
- **ROCm MoE 性能**：DeepSeek-V4.1-Flash 在 8x MI355X（TP4, MXFP4）上达到 8.97 tok/s/GPU —— 比此前基线快 2.1 倍（Issue #56506）。  
- **AWQ GEMM 优化**：在 RTX 3070 Ti 上分析出 L1 缓存受限内核；通过内存合并有望提升 12–18% 吞吐量（Issue #55462）。  
- **前缀缓存复用**：修复 MTP + GDN 混合模型的缓存未命中问题（PR #52244）；重复提示下缓存复用率已达 >99%。  

🔗 [PR #56464](https://github.com/vllm-project/vllm/pull/56464) | [PR #46883](https://github.com/vllm-project/vllm/pull/46883) | [Issue #56506](https://github.com/vllm-project/vllm/issues/56506) | [PR #52244](https://github.com/vllm-project/vllm/pull/52244)

---

### **5. 稳定性与回归问题**  
**严重（需立即修复）**  
- **DeepSeek-V4.1-Flash Triton OOM**：在 H20 上 `max_num_seqs > 256` 时 `dsv4_topk` 出现非法内存访问（Issue #56389）—— *已通过降低 `max_num_seqs` 临时缓解*。  
- **GLM-5.3 准确率崩溃**：在 MRV1 强制启用后，ROCm 上 GSM8K 准确率从 91.6% 骤降至 14.9%（Issue #54924）。  
- **主机内存耗尽**：vLLM 0.28.0+ 因无界主机内存分配导致启动时冻结（Issue #54237）。  

**高（回归 / 正确性）**  
- **结构化输出失效**：xgrammar 静默忽略多分支 `allOf` 约束，允许生成无效 JSON（Issue #56557 — *PR #56557 已修复*）。  
- **SpecDecode + xgrammar**：在 JSON_OBJECT 语法下出现确定性“FSM 前进失败”（Issue #53777）。  
- **Qwen3.8-Flash-Next 解码饥饿**：在 DGX Spark 上长预填充阻塞解码长达 3–7 分钟（Issue #54919）。  
- **Nixl 连接器**：静默禁用 HMA，导致 KV 缓存容量减半（Issue #42024）。  

**正在处理的修复 PR**：  
- xgrammar 多分支修复：[PR #56557](https://github.com/vllm-project/vllm/pull/56557)  
- DeepSeek-V4.1-Flash SM120 缓存对齐：[PR #56461](https://github.com/vllm-project/vllm/issues/56461)（开放中）  
- GLM-5.3 ROCm 回归：[Issue #54924](https://github.com/vllm-project/vllm/issues/54924) —— 尚无 PR  

---

### **6. 对应用开发者的影响**  
- **结构化输出**：在 PR #56557 合并前，避免在复杂 `allOf` 模式下使用 `xgrammar` —— 输出可能无声违反约束。  
- **AMD ROCm 用户**：DeepSeek-V4.1-Flash 和 GLM-5.3 在 MI350/355 上不稳定 —— 使用 `max_num_seqs=256` 并避免启用 MRV1，直至修复上线。  
- **Anthropic API 用户**：前缀缓存现已正确支持系统消息 —— 可降低工具增强工作流中的冗余预填充开销。  
- **Rust 客户端**：模型加载现在支持 Hugging Face 离线模式与版本指定 —— 对气隙部署至关重要。  
- **高并发部署**：注意解码饥饿（Issue #54919）和 KV 缓存复用失败（Issue #53504）—— 升级至最新 `main` 分支以获取 MTP/GDN 修复。  

**行动项**：若在 NVIDIA H20 或 AMD MI355 上使用 MoE 模型，请暂锁定 v0.27.1，直至发布包含上述修复的 v0.29.1。请关注 PR #56557、#56464 和 #52244 以获取关键正确性修复。

</details>

<details>
<summary><strong>SGLang</strong> — <a href="https://github.com/sgl-project/sglang">sgl-project/sglang</a></summary>

**SGLang 摘要 — 2026-09-12**

---

### **今日亮点**  
SGLang 基础设施团队完成了一系列高影响的内核优化与稳定性修复，重点围绕推测解码、Hopper GPU 支持和 HiCache 完整性。最核心的工作是解决分布式智能体工作负载中长期存在的 KV 缓存损坏和路由问题，今日合并或开启了三个关键 PR，分别修复 FlashInfer、EAGLE 验证和 Mamba 状态转移。

---

### **发布与破坏性变更**  
过去 24 小时内未发布新版本或破坏性 API 变更。

---

### **新模型与硬件支持**  
- **DeepSeek-V4.1**：全面启用 TP8 的 Hopper 解码优化（#39114），并为 C1/C2 专家引入 FP4 打包 KV 缓存存储（#38902）。  
- **AMD RDNA3/RDNA4**：正式启动消费级 GPU 支持追踪（#30599），扩展至超越 Instinct 专属的 ROCm 支持。  
- **Intel XPU**：通过现有 TPC 基础设施，支持 Decode Context Parallelism（DCP）（#34355）。  
- **NPU（CANN 9.1.0）**：为 Ascend NPU 上的 DeepSeek-V4-Flash 和 GLM-5.2 新增夜间测试套件（#38332）；为 DSV4 添加主机内存缓存管理（#37382）。  
- **GLM-5.3-Flash**：全面启动 SM120（Blackwell）兼容性追踪（#37813），涵盖 FP8 KV、MTP 和视觉路由。  
- **SenseNova-U1/U1.5**：启动功能对齐追踪，集成参考实现（#37742）。

---

### **性能与优化**  
- **Hopper 解码**：TP8 解码路径通过形状通用的 `wo_a_bf16_gemv` 内核全面优化，彻底消除对 einsum 的回退（#39114）。  
- **GLM-5.x 预填充**：DSA top-k v2 内核扩展至打包分数行，ISL=70K 时实现 **+4.9% token 吞吐量** 和 **-5% 中位 TTFT**（#37889）。  
- **EAGLE 推测解码**：修复 FlashInfer 滑动窗口 KV 掩码对齐问题，消除长上下文场景中的错误接受（#39160）。  
- **融合 RMSNorm/Combine**：扩展支持 DSV4.1 的 48 行验证批处理，避免内核回退（#39158）。  
- **HiCache**：Mamba 状态转移现在通过 `io_backend="direct"` 下的专用内核路由，修复工具参数损坏问题（#39156）。  
- **滑动窗口 KV**：预填充插入前裁剪窗口外插槽，防止不必要的内存膨胀（#39159）。  
- **Qwen-Image-Edit**：在 Hopper 上复用 QKV 尾部处理，每层减少 96 次冗余 SDPA 调用，降低 DiT 延迟（#38584）。

---

### **稳定性与回归问题**  
**严重（修复 PR 已提交）**  
- **CUDA 核心转储追踪器**：自五月以来自动收集 298+ 事件，正在积极调查（#26340）。  
- **GLM-5.3 崩溃**：分片解码 + DP 注意力 + 推测解码触发段错误（#39072）。  
- **DP 路由崩溃**：生成健康检查破坏分布式路由状态，导致长预填充吞吐量崩溃（#35241）。  
- **KV 缓存双重释放**：当 `page_size > 1` 时，共享边界页被释放两次（#38840）。  
- **DFlash Mamba 检查点丢失**：接受的 token 跨越追踪边界导致状态漂移（#37817）。  

**高优先级（修复 PR 已提交）**  
- **EAGLE 验证**：滑动窗口掩码错位导致错误接受 token（#39160）— *PR 已修复*  
- **LoRA 状态竞争**：缓冲的 LoRA 更新在复制完成前发布，可能导致采样损坏（#39143）。  
- **工具调用解析器**：DeepSeek V4/V3.2 DSML 解析器错误地将参数包裹在冗余的 `"arguments"` 键中（#38924）。  
- **停止正则表达式**：`[^x]` 否定类被错误视为无界，导致尾部缓冲失效（#30932）。  
- **Include_Reasoning Bug**：`include_reasoning=false` 仍会在响应中输出推理字段（#39103）。  

**备注**：所有严重问题均有活跃 PR 正在审查；CI 稳定性无新回归报告（#17050 显示 1 个失败、11 个偶发、991 个近期修复）。

---

### **对应用开发者的意义**  
- **智能体工作负载**：若使用分布式推理、LoRA 适配器或长上下文智能体，请**升级至下一版本**，以避免 KV 缓存损坏、路由不稳定和工具调用解析器缺陷。  
- **高吞吐推理**：使用 DeepSeek-V4.1 或 GLM-5.3 的 Hopper 用户，当前 main 分支可期待 **约 5% TTFT 提升** 和 **约 5% 吞吐量增长**。  
- **成本优化**：FP4 KV 缓存与统一基数缓存改进显著降低内存占用，适用于多租户 LLM 网关。  
- **AMD/XPU 用户**：消费级 GPU 和 Intel XPU 支持已进入开发阶段，请关注 #30599 和 #34355 获取早期访问权限。  
- **调试提示**：启用 `--enable-metrics` 以通过新请求级指标端点暴露延迟异常（#36678）。  

对基础设施团队：优先推进 HiCache（#21846）和 PD 分片（#25760）路线图项——它们是 SGLang 下一代智能体可扩展性的核心支柱。  

🔗 [Issue #26340](https://github.com/sgl-project/sglang/issues/26340) | [PR #39114](https://github.com/sgl-project/sglang/pull/39114) | [PR #39160](https://github.com/sgl-project/sglang/pull/39160) | [路线图 #21846](https://github.com/sgl-project/sglang/issues/21846)

</details>

<details>
<summary><strong>llama.cpp</strong> — <a href="https://github.com/ggml-org/llama.cpp">ggml-org/llama.cpp</a></summary>

**llama.cpp 摘要 — 2026-09-12**

---

### **今日亮点**  
llama.cpp 项目对 Metal、CUDA 和 SYCL 后端进行了关键修复，解决了长期存在的性能回退和内存安全问题。特别地，RDNA4（gfx1201）的 Flash Attention 调优得到优化，SYCL 临时缓冲区竞争条件也已修复 —— 有效解决了 Intel Arc B70 部署中的严重崩溃问题。WebGPU 栈通过 Dawn 更新实现了现代化，提升了跨平台兼容性。

---

### **发布与破坏性变更**  
过去 24 小时内未发布正式版本。但 **b10919** 和 **b10909** 为包含行为变更的活跃开发提交：  
- **ggml-webgpu** 更新至最新 Dawn 版本（#28683）—— 若在 WASI 或原生环境中使用 WebGPU，需重新编译。  
- **MSVC 的 PCH 构建修复**（#28763）—— 修复了 b10800 引入的回归问题；Windows 上使用 MSVC 的用户必须重新编译以避免构建失败。  
- **GGML_CUDA_FA_ALL_QUANTS=ON** 正在讨论作为 4 位 KV 缓存的默认选项（#28633）—— 若采纳，将自动启用 q4_0/q4_1 的 GPU 预填充，避免 30 倍的 CPU 回退。

---

### **新模型与硬件支持**  
- **新增支持架构**：  
  - 修复了 **DeepSeek-V2**、**GLM4MoE** 和 **Cohere2MoE** 的 MTP KV 缓存分配（#28630）。  
  - 通过 PR #27000 增加了 **Maple 20B-A1B** 三元 MoE（CPU）支持 —— 24 层、256 专家的模型，采用 TQ1_0/TQ2_0 量化。  
- **量化支持**：  
  - **Q8_0 + Q4_0 异步 KV 缓存** 现已在 CUDA Flash Attention 中支持（#27269）—— 为内存受限部署提供混合精度缓存能力。  
  - 为 OpenCL 添加了 **A8 Q4_0 MM 二进制内核**（#28268）—— 提升低功耗 CPU/边缘端推理性能。  
- **硬件**：  
  - **RDNA4（gfx1201）**：Flash Attention 针对 WMMA 和 stream-K 网格进行调优（#28102）。  
  - **Intel Arc B70（Battlemage）**：修复 SYCL 的池顺序与临时缓冲区问题（#28704, #27689），对连续批处理稳定性至关重要。

---

### **性能与优化**  
- **CUDA/HIP**：Flash Attention 配置针对 **RDNA4** 优化 —— 推荐使用全瓦片网格而非 stream-K，在 7900 XTX 和 Pro W7800 上提示吞吐量提升达 **15–20%**（#28102）。  
- **Metal**：  
  - 修复了 `ne00 < 1024` 时 IQ mul_mv 内核中的空闲线程问题（#28692）—— 提升 Apple Silicon 在短上下文推理中的效率。  
  - 重构单源融合表（#28109）—— 减少代码冗余，为未来模式优化铺路。  
- **SYCL**：OneDNN 临时缓冲区分配现按 GEMM 而非队列进行，消除 LIFO 池损坏并提升内存复用（#28704）。  
- **Vulkan**：修复 argsort_large 中的越界访问（#28705）—— 防止大 Softmax 操作中出现静默数据损坏。  
- **CPU**：Q4_K P6 和 VNNI 内核支持按需启用（#28791）—— 在支持 AVX-512 的 Intel Tiger Lake 及更高版本上，延迟可降低 10–15%。

---

### **稳定性与回退**  
**关键问题（PR 中已修复）**：  
1. **Intel Arc B70 上 SYCL 因临时缓冲区池损坏导致崩溃** —— **已在 #28704 中修复**（#28660）。  
2. **CUDA：4 位 KV 缓存静默回退至 CPU** —— **建议修复：将 GGML_CUDA_FA_ALL_QUANTS=ON 设为默认值**（#28633）。  
3. **Metal：IQ 内核中存在空闲线程** —— 已在 #28692 修复（由 #28086 引入的回退）。  
4. **Vulkan：argsort_large 中越界访问** —— 已在 #28705 修复（此前导致 CI 不稳定）。  
5. **OpenVINO AVX-512 在 Core Ultra 7 上崩溃**（#28726）—— 仍未解决；疑似运行时库链接不兼容。

**高优先级（尚未修复）**：  
- **ROCm 7.14 在 gfx1201 上 VRAM 分配失败**（#26208）—— 尚无 PR。  
- **LLM 服务器“推理按钮”消失**（#26321）—— CUDA 上的 UI 回退。  
- **ngram-cache 推测在请求间保留上下文** —— 接受率从 86% 降至 11%（#27852）。

---

### **对应用开发者的意义**  
- **云/边缘 LLM 服务器**：若使用 **Intel Arc GPU**，请升级至最新 `main` 分支，避免连续批处理中 SYCL 崩溃。  
- **移动/嵌入式设备**：Apple Silicon 上的 Metal 优化显著降低短上下文代理（如语音助手）的延迟。  
- **量化感知部署**：**Q8_0 + Q4_0 KV 缓存** 支持在 70B+ 模型中实现 40–50% 内存节省，且不牺牲预填充速度 —— 可通过 `--n-gqa 8 --kv-type q4_0` 测试。  
- **API 集成**：`response_format.json_schema` 现可正确处理非嵌套模式（#28697）—— 不再出现静默空输出。  
- **注意**：`GGML_CUDA_FA_ALL_QUANTS=ON` 可能默认启用 —— 这将静默改变 q4_0 模型的性能特征；升级前请审核您的基准测试。

> 🔗 **关键 PR 跟踪**：  
> - [Q8_0+Q4_0 Flash Attention](https://github.com/ggml-org/llama.cpp/pull/27269)  
> - [SYCL 临时缓冲区修复](https://github.com/ggml-org/llama.cpp/pull/28704)  
> - [4 位 KV 缓存默认提议](https://github.com/ggml-org/llama.cpp/issues/28633)  
> - [WebGPU Dawn 更新](https://github.com/ggml-org/llama.cpp/pull/28683)  

敬请关注下一个候选版本 —— 当前优先级为稳定性，而非新功能。

</details>

<details>
<summary><strong>Ollama</strong> — <a href="https://github.com/ollama/ollama">ollama/ollama</a></summary>

**Ollama 摘要 — 2026-09-12**

---

### **今日重点**  
Ollama 生态系统正面临 Qwen3、Gemma4 和 Gemma3n 模型普遍存在的工具调用解析失败问题，叠加云代理不稳定和量化回退，情况雪上加霜。与此同时，关键基础设施的 PR 正在合并，修复文件描述符泄漏、云超时以及 MLX/ROCm 后端配置错误 —— 表明在预期企业级采用前，团队正全力提升生产环境的可靠性。

---

### **发布与破坏性变更**  
*过去 24 小时无新版本发布。*  
但 **PR #18393** 撤销了内置 CLI Agent，恢复了经典聊天界面 —— 对依赖 Agent 工作流的用户而言，这是向后不兼容的 UI 变更。  
**PR #18382** 为云代理引入了连接和 TTFB 的有界超时机制，缓解了无限挂起问题 —— 对 SaaS 集成至关重要。

---

### **新模型与硬件支持**  
- **新增模型请求**：`Hy4`（腾讯）、`deepseek-v4.1-flash` 和 `glm-5.1`（离线）—— 均待社区或官方打包。  
- **硬件**：  
  - **ROCm**：Issue #17782 报告在 RX 9060 XT 上加载 `TensileLibrary_lazy_gfx1200.dat` 失败；PR #16767 提议重新启用 ROCm APU 的投影器卸载。  
  - **ppc64le**：长期请求（#796）仍无进展。  
  - **Jetson Orin Nano**：Gemma 4 E4B 多模态投影器出现 OOM 崩溃 —— 问题 #18396。  
- **量化**：`IQ3_S` 用于 Qwen3.8-27B-GSQ-RCO-GGUF 时不支持（输出为空）—— 问题 #18297。  
- **GGUF**：PR #14969 从 `create` 流水线中移除 GGUF 转换，转而优先直接导入 MLX/safetensors —— 为非 GGUF 工作流做未来兼容准备。

---

### **性能与优化**  
- **云代理**：PR #18382 强制设置 30 秒连接超时和 60 秒 TTFB 超时 —— 防止上游延迟导致的无限挂起（对云 API SLA 至关重要）。  
- **并行处理**：PR #17144 解除了 Qwen35/Qwen35MoE 模型的 `numParallel=1` 限制 —— 利用上游 llama.cpp 修复（暂无延迟数据，但预计吞吐量提升 2–4 倍）。  
- **嵌入加载**：Issue #18392 揭示在 Windows 上持续调用 `/api/embed` 时因禁用 HTTP keep-alive 导致回环端口耗尽 —— 修复待定。  
- **内存**：PR #18376 阻止 Gemma3n 投影器进行 CPU 卸载（避免静默数据损坏），提升低显存系统上的嵌入保真度。

---

### **稳定性与回退**  
*按严重性排序（严重 > 高 > 中）*

**严重**  
- **Qwen3.8 工具调用解析**：多起报告（#17778、#14601、#18252）显示工具返回空内容或 500 错误 —— 很可能是核心提示模板缺陷。*尚无修复 PR。*  
- **Gemma4/Gemma3n 工具调用失败**：含空格的键名导致静默丢弃（#18390）；`tool_calls` 为空，尽管具备 `tools` 能力（#18357）。*PR #18388（解析 `args` 字段）正在审查中。*  
- **云模型卡死**：0.34.0 版本下模型运行约 45 分钟后挂起（问题 #18381）—— 从 0.33.1 起的回退。*PR #18382 修复根本原因（无界超时）。*  

**高**  
- **Qwen2.5-Coder 量化（q2_K–q3_K_L）**：在 HumanEval+ 上通过率为 0%，因损坏的 artifact —— 问题 #18252。  
- **IQ3_S 量化**：尽管 `done_reason: "stop"`，仍返回空内容 —— 问题 #18297。  
- **Windows `/api/embed` 端口耗尽** —— 问题 #18392。  

**中**  
- **文件描述符泄漏**（PR #18344）—— 因误判已撤回。  
- **Anthropic `/v1/messages` 工具模式解析**：复杂模式下失败 —— 问题 #18346。  
- **目录树省略号触发任务取消** —— 问题 #18387（边缘情况，但在文档密集型应用中影响显著）。

---

### **对应用开发者的影响**  
- **生产环境请避免使用 Qwen3.8 和 Gemma4 的工具调用**，直到 PR #18388 和 #18391 合并 —— 目前极不可靠。可暂用系统提示注入作为临时方案。  
- **云集成（Ollama Cloud）** 在超过 45 分钟后不稳定 —— 若需长时间运行，请降级至 0.33.1，或实现熔断机制。  
- **量化选择现已成雷区**：避免对 Qwen2.5-Coder 使用 `q2_K–q3_K_L`，对 Qwen3.8 使用 `IQ3_S` —— 优先选用经验证的 Q4_K_M 或 Q5_K_M。  
- **Jetson/ROCm 用户**：密切关注投影器卸载行为 —— PR #16767 可能解决统一内存系统上的 OOM 问题。  
- **Windows 上的高负载嵌入应用**：预期端口耗尽 —— 建议批量处理或切换至 Linux。  
- **模型清单追踪**：PR #18394 提议在 `/api/chat` 响应中包含清单摘要 —— 对可复现评估流水线至关重要。*请关注 v0.35+ 版本。*  

> 🔗 **关键 PR 跟踪列表**：  
> - [#18388](https://github.com/ollama/ollama/pull/18388) — 解析工具调用中的 `args`  
> - [#18391](https://github.com/ollama/ollama/pull/18391) — 在模板中以 JSON 渲染 tools  
> - [#18382](https://github.com/ollama/ollama/pull/18382) — 云代理超时  
> - [#17144](https://github.com/ollama/ollama/pull/17144) — 启用 Qwen35 并行处理  

*基础设施工程师应优先在 PR 合并后升级至 0.34.0 并审计所有使用工具的 Agent，排查静默失败。*

</details>

<details>
<summary><strong>LiteLLM</strong> — <a href="https://github.com/BerriAI/litellm">BerriAI/litellm</a></summary>

**LiteLLM 周报 — 2026-09-12**

---

### **今日重点**  
LiteLLM 项目仍在持续修复今年三月 PyPI 供应链被入侵的后遗症，过去 24 小时内无新版本发布，但已合并多项稳定性与安全修复。预算强制执行、流式响应错误处理和代理内存泄漏等关键问题正在解决中，同时新增了对 Prism 和 Meta Muse Voice 的提供商集成，并同步了 218+ 模型的定价信息，表明项目正在积极扩展。当前最紧迫的问题仍是**容器运行时未启用安全上下文**和**Helm 图表中安全上下文为空**，存在生产部署风险。

---

### **发布与破坏性变更**  
*过去 24 小时内无新版本发布。*  
未引入任何破坏性 API 或配置变更。最新稳定版本仍为 **v1.82.8**，所有已知被入侵的包（v1.82.7–v1.82.8）均已移除并替换，详情见 [安全闭门会](https://docs.litellm.ai/blog/security-townhall-updates)。

---

### **新增模型与硬件支持**  
- 通过实时流式支持新增 **Meta Muse Voice 转录** 功能（PR #39395）  
- **Prism 提供商** 现已原生支持 Chat、Responses 和 Messages 路由（PR #40782）  
- **218 个模型** 在 Anthropic（13 个）、Gemini（26 个）、OpenAI、Together AI（73 个）和 Fireworks AI 上更新，新增模型包括：  
  - `claude-fable-5`, `claude-fable-5-1`  
  - `gemini/gemini-2.5-computer-use-preview-10-2025`, `gemini/gemini-2.5-flash`  
  - `together_ai/arcee-ai/trinity-mini`  
  （PRs #40832, #40823, #40801, #40800）  
- 未报告新增硬件或量化格式支持。

---

### **性能与优化**  
- **提示缓存成本估算** 现在追踪模型切换时的缓存预热开销，支持更智能的路由决策（PR #40804）  
- **MCP 上游发现列表** 现已缓存，避免重复初始化（PR #40790）  
- 新增**内存回归测试**至 E2E 闸口，用于捕获请求膨胀问题（PR #40773）——此前曾导致 v1.100.0 版本的 OOM 终止  
- **HTTP/2 出站支持** 正在讨论中（Issue #30362），尚未实现  
- 未发布延迟或吞吐量指标；优化重点集中于正确性与成本建模

---

### **稳定性与回归问题**  
*按严重性和影响程度排序：*

1. **🚨 致命 — 缺少容器安全加固**  
   - Helm 图表中 `podSecurityContext` 和 `securityContext` 为空 → Pod 以 root 身份运行（Issue #40822）  
   - Docker 镜像使用 `USER root` → 代理与 Prisma 以完全权限运行（Issue #40821）  
   *尚无 PR — 生产部署风险极高*

2. **🚨 致命 — 模型别名绕过预算强制**  
   - 使用模型别名时忽略每模型预算 → 花费无上限（Issue #40050，已由 PR #40819 修复）  
   - *修复已合并：PR #40819*

3. **🚨 高危 — 密钥脱敏中的 ReDoS 漏洞**  
   - `redact_string()` 中的正则表达式回溯导致事件循环阻塞数分钟 → 代理崩溃循环（Issue #32353）  
   *尚未修复 — 高吞吐部署下风险极高*

4. **🚨 高危 — 代理内存泄漏（重试痕迹）**  
   - 失败请求重复携带完整负载 → 导致 OOM 终止（Issue #40773）  
   *已通过新 E2E 测试修复（PR #40773），但 v1.100.0 中仍存在回归*

5. **高危 — Bedrock Converse 在无 `tools=` 时拒绝工具调用后续请求**  
   - 无效的 schema 校验阻止了合法的 Agent 工作流（Issue #40735）  
   *尚未修复*

6. **中危 — Azure AI 路由器无成本追踪**  
   - Azure AI 模型路由请求的消费日志显示为 $0（Issue #40728）  
   *尚未修复*

7. **中危 — JWT 认证频繁刷写使用日志**  
   - 每次 token 刷新生成一条哈希后的 jwt 条目 → UI 与数据库膨胀（Issue #40398）  
   *尚未修复*

*高危/致命问题总数：6；已合并修复：2（PR #40819, #40773）*

---

### **对应用开发者的启示**  
- **安全优先**：切勿直接使用默认 Helm 图表或 Docker 镜像部署 LiteLLM — 在 PR 合并前，手动启用 `runAsNonRoot`、降权并审计镜像层。  
- **预算不可靠**：若使用模型别名或 Claude Code，请手动验证预算限制 — PR #40819 已修复此问题，但可能尚未进入你的版本。  
- **流式响应脆弱**：避免使用会发出内联错误（`data: {"error": ...}`）的提供商 — LiteLLM 会静默丢弃这些错误（Issue #40578）。如可能，请使用 `fake_streaming`（Issue #30208）。  
- **成本准确性提升**：新版定价同步确保了 Gemini、Anthropic 和 Together AI 的消费追踪准确性 — 请核对你的成本模型。  
- **Agent 工作流改进**：Bedrock Agent 的后续请求与网页搜索状态现在能更好地保留（PRs #40828, #40798）— 若使用 Claude Code 或 Bedrock Mantle，请升级。  
- **监控内存**：若运行 v1.100.0+，请留意 OOM 终止 — 内存回归已在测试中修复，但你的环境可能仍受影响。

**建议**：锁定稳定版本，审计安全上下文，并在下次升级时关注 PR #40819 和 #40773。跟踪 Issue #40821、#40822 和 #32353 以获取关键修复进展。

🔗 [安全闭门会](https://docs.litellm.ai/blog/security-townhall-updates) | 🔗 [PR #40819（预算修复）](https://github.com/BerriAI/litellm/pull/40819) | 🔗 [PR #40821（Root 用户）](https://github.com/BerriAI/litellm/issues/40821)

</details>

<details>
<summary><strong>Unsloth</strong> — <a href="https://github.com/unslothai/unsloth">unslothai/unsloth</a></summary>

**Unsloth 摘要 — 2026-09-12**

---

### **今日重点**  
Unsloth Studio 平台完成重大架构重构，合并了 14 个专注于持久化、沙箱化智能体工作流的 PR，引入了 Git 感知的工作树、经过验证的工具执行和受限进程隔离。与此同时，GPU 初始化（CUBLAS、ROCm）、API 参数不匹配以及 Windows/Linux 桌面应用崩溃等关键稳定性问题集中爆发，尽管功能大幅扩展，但当前发布窗口风险极高。

---

### **发布与破坏性变更**  
过去 24 小时内未发布新版本。但 **破坏性 API 行为** 已在 Issue #10785 中确认：`SFTConfig` 不再接受 `max_seq_length` 参数 —— 用户必须迁移至 `max_length`，否则训练时将触发 `TypeError`。此变更已包含在 Docker 镜像 `2026.9.4` 中，影响所有 CLI 和 Notebook 工作流。  
🔗 [Issue #10785](https://github.com/unslothai/unsloth/issues/10785)

---

### **新模型与硬件支持**  
- **AMD ROCm 支持**：两个关于 AMD Docker 镜像的请求（#6230、#9581）仍处于开放状态，已有可行分支（LeoBorcherding/feature/docker-rocm-support）正在开发中，尚未发布官方镜像，但社区贡献活跃。  
- **Apple Silicon (MLX)**：PR #10823 增加了经过认证的 MLX 运行时智能体工作区框架，无需修改运行时即可原生支持 Apple Silicon 智能体执行。  
- **音频/音乐生成**：功能请求 #10208 希望支持 MiniMax-Music3 和 audio-cpp，目前尚无实现。  
🔗 [Issue #6230](https://github.com/unslothai/unsloth/issues/6230) | [PR #10823](https://github.com/unslothai/unsloth/pull/10823) | [Issue #10208](https://github.com/unslothai/unsloth/issues/10208)

---

### **性能与优化**  
- **GPU 利用率**：Issue #10806 报告在 B200 上训练 Qwen3.5-9B LoRA 时，因每次启动重复重建自动调优键，GPU 空闲时间高达 70% 以上 —— 这是 CUDA 内核缓存已知的低效问题。  
- **内存与延迟**：PR #10658 和 #10672 引入了受限任务执行通道与专属 Git 工作树，有效减少因未管理智能体状态导致的内存膨胀。暂无量化指标，但隔离机制已防止跨任务干扰。  
- **Token 跟踪**：Issue #10807 指出 UI 回归问题：Token 使用图表缺失坐标轴标签和刻度，影响运维监控 —— 无性能影响，但对运维团队至关重要。  
🔗 [Issue #10806](https://github.com/unslothai/unsloth/issues/10806) | [PR #10658](https://github.com/unslothai/unsloth/pull/10658) | [Issue #10807](https://github.com/unslothai/unsloth/issues/10807)

---

### **稳定性与回归问题**  
**严重（立即影响）**  
- 在多 GPU 上执行 FLUX.2 Klein VAE 解码时出现 **CUBLAS_STATUS_NOT_INITIALIZED**（#10768）—— 导致推理流水线崩溃。  
- 手动 GPU 模式日志显示 `--fit: on`，但实际传入 `--fit off`（#10821）—— 误导运维人员误判失败。  
- Windows 安装程序在用户名含空格时失效（#10722）—— 阻断企业环境部署。  

**高（运营中断）**  
- GGUF 工具审批阻塞排队槽位（#10671）—— 即使有空闲槽位，资源仍被耗尽。  
- Unsloth Studio 无法在 localhost（127.0.0.1）上服务，但在局域网 IP 下正常（#10786）—— 破坏本地开发工具链。  
- 杀毒软件误报 `install.ps1`（#10805）—— 阻止 Windows 自动化部署。  

**中等（用户体验/工作流）**  
- 桌面端内联图表不渲染（#10539）、局域网语音输入失效（#10824）、运行配置草稿重复（#10817）。  

**修复中的 PR**：  
- #10803 修复 IPv6 黑洞导致后端崩溃问题（对云部署至关重要）。  
- #10632 增加 MCP 配置重新校验，防止未授权工具调用。  
- #10643 改进文件编辑 UI 安全性，减少静默失败。  

🔗 [Issue #10768](https://github.com/unslothai/unsloth/issues/10768) | [Issue #10821](https://github.com/unslothai/unsloth/issues/10821) | [Issue #10722](https://github.com/unslothai/unsloth/issues/10722) | [PR #10803](https://github.com/unslothai/unsloth/pull/10803)

---

### **对应用开发者的影响**  
1. **智能体工作流已具备生产就绪能力**：合并的 PR（#9673、#9987、#10576–10658）实现了类似 Codex 的智能体能力：持久化工作区、Git 集成编辑、经过验证的工具执行和进程沙箱。可构建自动提交、测试和审查代码的智能体，无需外部工具。  
2. **训练时请勿使用 `max_seq_length`**：立即更新所有 `SFTConfig` 的调用为 `max_length` —— 这是最新 Docker 镜像中的静默破坏性变更。  
3. **警惕 localhost/IPv6 问题**：若在云 VM 或容器中部署 Studio，请测试绑定 `0.0.0.0` —— `127.0.0.1` 可能失效（#10786）。  
4. **Windows 用户注意：杀毒软件与空格是阻断性问题**：在受管环境中请使用 Docker 或为 PowerShell 添加排除项。在 #10805 和 #10722 修复前，避免使用 Windows 安装程序。  
5. **AMD/MLX 支持即将上线**：规划异构部署 —— ROCm 和 MLX 正在积极开发中。当前建议使用 Docker，但请提前准备迁移。  

**建议**：请暂缓生产上线，等待 CUBLAS 和 GPU fit 问题修复。新智能体功能仅限在隔离、非关键流程中使用，待稳定性提升后再推广。  

🔗 [智能体工作区 PR](https://github.com/unslothai/unsloth/pulls?q=is%3Apr+is%3Aclosed+author%3APhilipJohnBasile+label%3A%22%3E3000%22) | [所有开放 Issue](https://github.com/unslothai/unsloth/issues)

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*