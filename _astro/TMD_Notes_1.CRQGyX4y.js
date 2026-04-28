const n="physics/TMDModel/TMD_Notes_1.md",a="posts",t="physics/tmdmodel/tmd_notes_1",$=`
整个过程可以分为下面几个阶段：

1. **明确物理体系与对称性**：确定晶体结构、原子轨道，并用群论分析轨道的对称性分类。
2. **构建紧束缚哈密顿量**：基于对称性，写出动量空间中的 $3 \\times 3$ 哈密顿量矩阵。
3. **确定模型参数**：通过与第一性原理（DFT）计算结果进行拟合，得到矩阵中的所有参数。
4. **分析模型结果**：利用得到的参数，计算能带结构、有效质量、贝里曲率等物理量，并与DFT结果对比。

---

## 1. 物理体系与对称性

### 1.1 为什么只选3个 $d$ 轨道？

这是模型的第一个关键近似。

1. **物理图像**：

通过DFT（第一性原理）计算（如Liu等人的图，即下图 1 所示）可以看出，在费米能级附近，即我们最关心的导带底和价带顶处，波函数主要由过渡金属原子（M）的 $d$ 轨道贡献，疏族原子（X）的 $p$ 轨道贡献很小。

![MoS2 能带及原子轨道投影](https://ionizing.page/post/tmd-tightbinding/TMD-DFT-bandstructure.png '图 1 : 使用 VASP 计算得到的 MoS2 能带及原子轨道投影。')

2. **给 $d$ 轨道分类**：

单层 TMD 的三个原子层相对于 $xy$ 平面镜面对称，记这个操作为 $\\sigma_h$ 。 $\\sigma_h$ 的操作是 $(x, y, z)\\xrightarrow{\\sigma_h}(x, y, -z)$ ，五个 $d$ 轨道对 $\\sigma_h$ 的响应不同，可以分为以下几组：

- $d_{z^2} \\propto 3z^{2} - r^{2}$, 在反射下完全不变，是偶对称。$\\longrightarrow A_{1}'$
- $d_{xy} \\propto xy, d_{x^2-y^2} \\propto x^2-y^2$ 只在 $xy$ 平面内有分布，不受 $z$ 坐标反射影响，是偶对称。 $\\longrightarrow E'$
- $d_{xz} \\propto xz, d_{yz} \\propto yz$ 在 $\\sigma_h$ 下， $x$ 和 $y$ 不变，但 $z$ 变成 $-z$ ，是奇对称。 $\\longrightarrow E''$

3. **$d$ 轨道之间的跃迁矩阵元**：

考虑不同对称性的 $d$ 轨道之间的跃迁矩阵元：

$$
t = \\langle d(偶)|\\hat{H}|d(奇)\\rangle
$$

由于 $\\hat{H}$ 在 $\\sigma_h$ 下不变，有 $\\hat{H} = \\sigma_h^{-1}\\hat{H}\\sigma_h$ ，把它代入：

$$
t = \\langle d(偶)|\\sigma_h^{-1}\\hat{H}\\sigma_h|d(奇)\\rangle
$$

于是可以得到：

$$
t = (+\\langle d(偶)|)\\hat{H}(-\\rangle d(奇)\\rangle) = -\\langle d(偶)|\\hat{H}|d(奇)\\rangle = -t
$$

$$
\\Rightarrow t = 0
$$

这也解释了为什么这些奇对称的轨道在这些能带上的贡献为零——对称性使得它们不可能杂化进来。

### 1.2 基函数、布洛赫和与哈密顿量矩阵元

- **基函数**：我们选择的原子轨道基是：

$$
|\\phi_1^1\\rangle = |d_{z^2}\\rangle, \\quad |\\phi_1^2\\rangle = |d_{xy}\\rangle, \\quad |\\phi_2^2\\rangle = |d_{x^2-y^2}\\rangle
$$

这里，上标 $j$ 标记不同的不可约表示（ $j=1$ 为 $A_1'$ ， $j=2$ 为 $E'$ ），下标 $\\mu$ 是表示内部的基函数序号。

- **布洛赫和**：晶体中的电子是共有化的，其波函数必须满足 **布洛赫定理**

> **布洛赫定理**：
> 在周期势场中，电子的波函数一定可以写成一个平面波乘以一个周期函数的形式：

对于该固体物理中的周期体系，正确的基函数是布洛赫和：

$$
|\\phi_{\\mu}^j(\\mathbf{k}, \\mathbf{r})\\rangle = \\frac{1}{\\sqrt{N}}\\sum_{\\mathbf{R}_n} e^{i\\mathbf{k}\\cdot\\mathbf{R}_n} |\\phi_{\\mu}^j(\\mathbf{r} - \\mathbf{R}_n)\\rangle
$$

这是在原子轨道基础上，满足布洛赫定理的线性组合。

- **哈密顿量矩阵元**：在这组布洛赫和基下，哈密顿量矩阵元为：

$$
\\begin{aligned}
H_{\\mu\\mu'}^{jj'}(\\mathbf{k}) &= \\langle\\frac{1}{\\sqrt{N}}\\sum_{\\mathbf{R}_{m}}{e^{i\\mathbf{k}\\cdot\\mathbf{R}_{m}}\\phi_{\\mu}^{j}(\\mathbf{r}-\\mathbf{R}_{m})}|\\hat{H}|\\frac{1}{\\sqrt{N}}\\sum_{\\mathbf{R}_{l}}{e^{i\\mathbf{k}\\cdot\\mathbf{R}_{l}}\\phi_{\\mu'}^{j'}(\\mathbf{r}-\\mathbf{R}_{l})}\\rangle \\\\
&= \\frac{1}{N} \\sum_{\\mathbf{R}_{m},\\mathbf{R}_{l}}{e^{-i\\mathbf{k}\\cdot\\mathbf{R}_{m}}e^{i\\mathbf{k}\\cdot\\mathbf{R}_{l}} \\langle\\phi_{\\mu}^{j}(\\mathbf{r}-\\mathbf{R}_{m})|\\hat{H}|\\phi_{\\mu'}^{j'}(\\mathbf{r}-\\mathbf{R}_{l})\\rangle}
\\end{aligned}
$$

令 $\\mathbf{R}_{n} = \\mathbf{R}_{l} - \\mathbf{R}_{m}$ ，则有双重求和变为：

$$
\\frac{1}{N} \\sum_{\\mathbf{R}_{m}} \\sum_{\\mathbf{R}_{n}} e^{i\\mathbf{k}\\cdot(\\mathbf{R}_{m}+\\mathbf{R}_{n})}e^{-i\\mathbf{k}\\cdot\\mathbf{R}_{m}} \\langle\\phi_{\\mu}^{j}(\\mathbf{r}-\\mathbf{R}_{m})|\\hat{H}|\\phi_{\\mu'}^{j'}(\\mathbf{r}-\\mathbf{R}_{m}-\\mathbf{R}_{n})\\rangle
$$

提取如下的代数结构：

$$
\\langle\\phi_{\\mu}^{j}(\\mathbf{r}-\\mathbf{R}_{m})|\\hat{H}|\\phi_{\\mu'}^{j'}(\\mathbf{r}-\\mathbf{R}_{m}-\\mathbf{R}_{n})\\rangle = \\langle\\phi_{\\mu}^{j}(\\mathbf{r})|\\hat{H}|\\phi_{\\mu'}^{j'}(\\mathbf{r}-\\mathbf{R}_{n})\\rangle \\equiv E_{\\mu\\mu'}^{jj'}(\\mathbf{R}_{n})
$$

于是就有了

$$
H_{\\mu\\mu'}^{jj'}(\\mathbf{k}) = \\langle \\phi_{\\mu}^j(\\mathbf{k})|\\hat{H}|\\phi_{\\mu'}^{j'}(\\mathbf{k})\\rangle = \\sum_{\\mathbf{R}_n} e^{i\\mathbf{k}\\cdot\\mathbf{R}_n} E_{\\mu\\mu'}^{jj'}(\\mathbf{R}_n)
$$

其中， $E_{\\mu\\mu'}^{jj'}(\\mathbf{R}_n) = \\langle \\phi_{\\mu}^j(\\mathbf{r})|\\hat{H}|\\phi_{\\mu'}^{j'}(\\mathbf{r} - \\mathbf{R}_n)\\rangle$ 被称为“跃迁积分”或“能量积分”。它只依赖于两个轨道之间的相对位置 $\\mathbf{R}_n$ 。通常我们只考虑最近邻（甚至次近邻）的贡献，因为轨道波函数是局域的，重叠随距离快速衰减。

### 1.3 **用群论简化跃迁积分**

这是模型构建的精髓！我们的哈密顿量中有很多未知的 $E_{\\mu\\mu'}^{jj'}(\\mathbf{R}_n)$ ，但它们并不独立。将它们联系起来的最核心的群论公式：

$$
\\boxed{E^{jj'}(\\hat{g}_{n}\\mathbf{R}_n) = D^j(\\hat{g}_{n}) E^{jj'}(\\mathbf{R}_n) [D^j(\\hat{g}_{n})]^{\\dagger}}
$$

- **物理含义**：这个式子说明，如果我已知指向某个格点 $\\mathbf{R}_n$ 的跃迁积分矩阵 $E^{jj'}(\\mathbf{R}_n)$ ，那么我可以通过对称操作 $\\hat{g}_{n}$ ，立刻得到指向对称等效格点 $\\hat{g}_{n}\\mathbf{R}_n$ 的跃迁积分矩阵。
- **数学含义**： $D^j(R)$ 是对称操作 $\\hat{g}_{n}$ 在第 $j$ 个不可约表示下的矩阵。这个公式告诉我们，跃迁积分作为连接两个不同不可约表示（ $j$ 和 $j'$ ）空间的量，其变换必须同时依赖于这两个不可约表示。
- **如何简化参数**：我们只需要计算一个方向（比如 $\\mathbf{R}_1$ ）上的跃迁积分矩阵，其中包含若干个独立参数。通过这个公式，其它所有最近邻方向（ $\\mathbf{R}_2$ 到 $\\mathbf{R}_6$ ）上的跃迁积分都可以用这同一组参数表示出来。

---

## 2. 构建 $3 \\times 3$ 紧束缚哈密顿量

通过上面的群论分析，我们已经拥有了：

1. 基函数：

$$
|\\phi_{1}^{1}\\rangle = |d_{z^2}\\rangle ,\\space |\\phi_{1}^{2}\\rangle = |d_{xy}\\rangle ,\\space |\\phi_{2}{2}\\rangle = |d_{x^2-y^2}\\rangle
$$

2. 布洛赫和：

$$
|\\phi_{\\mu}^{j}(\\mathbf{k})\\rangle = \\frac{1}{\\sqrt{N}} \\sum_{\\mathbf{R}_{n}} e^{i\\mathbf{k}\\cdot\\mathbf{R}_{n}} |\\phi_{\\mu}^{j}(\\mathbf{r}-\\mathbf{R}_{n})\\rangle
$$

3. 哈密顿量矩阵元公式：

$$
H_{\\mu\\mu'}^{jj'}(\\mathbf{k}) = \\sum_{\\mathbf{R}_{n}} e^{i\\mathbf{k}\\cdot\\mathbf{R}_{n}} E_{\\mu\\mu'}^{jj'}(\\mathbf{R}_{n})
$$

4. 几个最近邻方向的坐标：

$$
\\begin{align*}
\\mathbf{R}_{1} &= \\left(a, 0, 0\\right), & \\mathbf{R}_{2} &= \\left(\\frac{a}{2}, -\\frac{\\sqrt{3}a}{2}, 0\\right), & \\mathbf{R}_{3} &= \\left(-\\frac{a}{2}, -\\frac{\\sqrt{3}a}{2}, 0\\right) \\\\
\\mathbf{R}_{4} &= \\left(-a, 0, 0\\right), & \\mathbf{R}_{5} &= \\left(-\\frac{a}{2}, \\frac{\\sqrt{3}a}{2}, 0\\right), & \\mathbf{R}_{6} &= \\left(\\frac{a}{2}, \\frac{\\sqrt{3}a}{2}, 0\\right)
\\end{align*}
$$

5. 群论简化跃迁积分后得到的跳跃参数

我们将所有矩阵元用6个跳跃参数和2个在格位能（ $\\epsilon_1$ 对应 $A_1'$ ， $\\epsilon_2$ 对应 $E'$ ，由于 $d_{xy}$ 和 $d_{x^2-y^2}$ 对称性相同，它们在格位能相等）表示出来。最终得到动量空间中的 $3 \\times 3$ 哈密顿量矩阵 $H(\\mathbf{k})_{\\mu\\mu'}^{jj'}$ 。

这个矩阵的显式形如：

$$
H =
\\begin{bmatrix}
H_{11}^{11} & H_{11}^{12} & H_{12}^{12} \\\\
            & H_{11}^{22} & H_{12}^{22} \\\\
c.c.        &             & H_{22}^{22}
\\end{bmatrix}
$$

## 3. 模型参数拟合

**此部分内容有待深入了解**

<!-- 有了 $H(k)$ ，下一步就是确定里面的8个参数： $\\epsilon_1, \\epsilon_2, t_0, t_1, t_2, t_{11}, t_{12}, t_{22}$ 。这需要通过拟合第一性原理计算（DFT）的数据来完成。 -->
<!---->
<!-- ### 3.1 拟合方法论 -->
<!---->
<!-- - **目标**：让TB模型计算出的能带尽可能与DFT计算出的能带一致。 -->
<!-- - **方法**：抽取DFT计算中一些关键信息（如高对称点能量、有效质量），列方程组来求解这些参数。 -->
<!-- - **你的资料中的案例**：\`MoS2_TB-liu guibin.pdf\` 第8节是绝佳的实战记录。作者尝试了不同的拟合策略，例如： -->
<!-- 1.  **方案A (8.1节)**：先用 $\\Gamma, K, M$ 点的能量定出大部分参数，然后再用K点有效质量定出 $t_1$ 。 -->
<!-- 2.  **方案B (8.5-8.6节)**：发现线性展开的哈密顿量在算有效质量时不精确，改用二次展开的哈密顿量去拟合有效质量，结果更可靠。 -->
<!-- 3.  **“换一种方式拟合” (11节)**：提出更全局的拟合方法，不是在几个高对称点严格相等，而是构造了一个包含K点附近41个点能量的损失函数，并通过优化算法来找参数，同时加入 $\\Gamma$ , $M$ 点的能量作为约束，避免“过拟合”。 -->
<!---->
<!-- ### 3.2 从三带到两带模型 -->
<!---->
<!-- 在完成三带模型后，\`MoS2_TB-liu guibin.pdf\`的第12节展示了如何将其化简为仅关注导带和价带的两带模型。其核心是在 $K$ 点对三带模型进行对角化，找到导带和价带的精确本征态（即 $d$ 轨道的特定线性组合，如 $|u_c\\rangle = |d_{z^2}\\rangle$ , $|u_v\\rangle = (|d_{x^2-y^2}\\rangle + i\\tau |d_{xy}\\rangle)/\\sqrt{2}$ ），然后用这两个态作为新基组，通过幺正变换将 $3\\times3$ 矩阵投影到 $2\\times2$ 子空间。这就是你博客链接里推导的起点。 -->

## 4. 分析模型结果

一旦参数确定，模型就完全建好了。之后可以：

1.  **画出能带图**：沿高对称路径对角化 $H(k)$ ，得到本征值 $E_n(k)$ ，并与DFT能带对比。
2.  **进一步优化模型**：可以进一步包含第三近邻项、自旋轨道耦合项（SOC），从而研究能带的自旋劈裂。
`,m={title:"笔记1：单层 TMD 材料的三能带紧束缚模型构建",author:"Ionizing",date:new Date(1777371857e3),lastMod:new Date(1777404376e3),tags:["物理","固体物理","TMD","TMDs","Python","Julia","紧束缚模型"],category:["物理","固体物理"],summary:"本文较为详细的梳理了模型构建的整个过程，不过本文尚且停留在对最近邻模型的构建过程的分析上，第三近邻模型以及自旋轨道耦合的模型有待后续详细的分析。",comments:!0,draft:!1,sticky:0},h={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TMDModel/TMD_Notes_1.md",rawData:void 0};export{h as _internal,$ as body,a as collection,m as data,n as id,t as slug};
