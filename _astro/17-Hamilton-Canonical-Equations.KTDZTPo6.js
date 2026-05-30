const a="physics/TheoreticalMechanics/17-Hamilton-Canonical-Equations.md",n="posts",t="physics/theoreticalmechanics/17-hamilton-canonical-equations",l=`
## 从拉格朗日到哈密顿

### 广义动量与哈密顿函数

对于保守体系，定义**广义动量**（正则动量）

$$
\\begin{align}
p_\\alpha = \\frac{\\partial L}{\\partial \\dot{q}_\\alpha}
\\end{align}
$$

**哈密顿函数** $H(q,p,t)$ 定义为

$$
\\begin{align}
H = \\sum_{\\alpha=1}^s p_\\alpha \\dot{q}_\\alpha - L
\\end{align}
$$

$H$ 是 $(q_\\alpha, p_\\alpha, t)$ 的函数，而拉格朗日函数 $L$ 是 $(q_\\alpha, \\dot{q}_\\alpha, t)$ 的函数。两者之间通过勒让德变换相联系。

### 哈密顿函数与能量的关系

当约束稳定且势能与速度无关时，$T$ 是 $\\dot{q}$ 的二次齐次函数，有

$$
\\begin{align}
\\sum_\\alpha p_\\alpha \\dot{q}_\\alpha = 2T
\\end{align}
$$

因此 $H = 2T - (T-V) = T + V$，即系统的机械能。若这些条件不满足，$H$ 是广义能量，不一定等于机械能。

## 哈密顿正则方程

### 正则方程的推导

对 $H = \\sum p_\\alpha \\dot{q}_\\alpha - L$ 求微分：

$$
\\begin{align}
\\mathrm{d}H = \\sum_\\alpha \\left( \\dot{q}_\\alpha \\mathrm{d}p_\\alpha + p_\\alpha \\mathrm{d}\\dot{q}_\\alpha - \\frac{\\partial L}{\\partial q_\\alpha} \\mathrm{d}q_\\alpha - \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} \\mathrm{d}\\dot{q}_\\alpha \\right) - \\frac{\\partial L}{\\partial t} \\mathrm{d}t
\\end{align}
$$

利用 $p_\\alpha = \\partial L / \\partial \\dot{q}_\\alpha$ 和拉格朗日方程 $\\dot{p}_\\alpha = \\partial L / \\partial q_\\alpha$，消去 $\\mathrm{d}\\dot{q}_\\alpha$ 项，得

$$
\\begin{align}
\\mathrm{d}H = \\sum_\\alpha \\left( \\dot{q}_\\alpha \\mathrm{d}p_\\alpha - \\dot{p}_\\alpha \\mathrm{d}q_\\alpha \\right) - \\frac{\\partial L}{\\partial t} \\mathrm{d}t
\\end{align}
$$

另一方面，$H$ 作为 $(q,p,t)$ 的函数，其全微分为

$$
\\begin{align}
\\mathrm{d}H = \\sum_\\alpha \\left( \\frac{\\partial H}{\\partial q_\\alpha} \\mathrm{d}q_\\alpha + \\frac{\\partial H}{\\partial p_\\alpha} \\mathrm{d}p_\\alpha \\right) + \\frac{\\partial H}{\\partial t} \\mathrm{d}t
\\end{align}
$$

比较两式，得**哈密顿正则方程**：

$$
\\begin{align}
\\dot{q}_\\alpha = \\frac{\\partial H}{\\partial p_\\alpha}, \\quad \\dot{p}_\\alpha = -\\frac{\\partial H}{\\partial q_\\alpha}, \\quad \\alpha = 1,2,\\dots,s
\\end{align}
$$

以及 $\\dfrac{\\partial H}{\\partial t} = -\\dfrac{\\partial L}{\\partial t}$。

### 正则方程的特点

- 将拉格朗日的 $s$ 个二阶微分方程转化为 $2s$ 个一阶微分方程
- $q$ 和 $p$ 被视为独立的变量（相空间坐标）
- 方程形式高度对称，便于理论分析和数值计算
- 适用于所有理想、完整体系，包括非保守体系（若广义力可写出）

## 相空间

### 定义

**相空间**是由所有广义坐标 $q_\\alpha$ 和广义动量 $p_\\alpha$ 张成的 $2s$ 维空间。系统在任意时刻的状态对应相空间中的一个点。

### 相轨迹

随着时间演化，相点沿相空间中的一条曲线运动，称为**相轨迹**或相轨道。正则方程决定了相轨迹的方向。

**重要性质**：若哈密顿函数 $H$ 不显含时间（$H = H(q,p)$），则相轨迹**绝不会相交**。因为若两条轨迹在某点相交，则从该点出发的演化由正则方程唯一确定，两条轨迹必定重合。若 $H$ 显含时间，则相轨迹可以相交。

### 相空间例子：一维谐振子

一维谐振子的哈密顿函数 $H = \\frac{p^2}{2m} + \\frac{1}{2} m \\omega^2 q^2$。相轨迹是椭圆：

$$
\\begin{align}
\\frac{p^2}{2mE} + \\frac{q^2}{2E/(m\\omega^2)} = 1
\\end{align}
$$

不同能量对应不同椭圆，互不相交。运动方向：上半平面 $p>0$ 时 $q$ 增加，下半平面 $p<0$ 时 $q$ 减小。

## 刘维尔定理

**刘维尔定理**：在哈密顿正则方程支配下，相空间中的“体积元”在演化过程中保持不变。即，若取一组初始相点构成区域 $\\mathcal{D}(0)$，经过时间 $t$ 后，这些点演化到区域 $\\mathcal{D}(t)$，则两个区域的体积相等：

$$
\\begin{align}
\\int_{\\mathcal{D}(t)} \\mathrm{d}q_1 \\cdots \\mathrm{d}q_s \\mathrm{d}p_1 \\cdots \\mathrm{d}p_s = \\int_{\\mathcal{D}(0)} \\mathrm{d}q_1 \\cdots \\mathrm{d}q_s \\mathrm{d}p_1 \\cdots \\mathrm{d}p_s
\\end{align}
$$

**证明概要**：考虑相空间中的“相流体”，其散度为

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{v} = \\sum_\\alpha \\left( \\frac{\\partial \\dot{q}_\\alpha}{\\partial q_\\alpha} + \\frac{\\partial \\dot{p}_\\alpha}{\\partial p_\\alpha} \\right) = \\sum_\\alpha \\left( \\frac{\\partial^2 H}{\\partial q_\\alpha \\partial p_\\alpha} - \\frac{\\partial^2 H}{\\partial p_\\alpha \\partial q_\\alpha} \\right) = 0
\\end{align}
$$

因此相流体不可压缩，体积不变。刘维尔定理是统计力学的基础之一。

## 哈密顿力学的优势

- 相空间描述提供了几何直观（系统状态 = 一点，演化 = 轨迹）
- 正则方程对称形式便于寻找守恒量（泊松括号理论）
- 为量子力学（海森堡绘景）和统计力学（刘维尔方程）提供了直接类比
- 适用于处理约束系统（狄拉克括号）

## 小结

- 哈密顿函数 $H = \\sum p_\\alpha \\dot{q}_\\alpha - L$，正则方程 $\\dot{q}_\\alpha = \\partial H / \\partial p_\\alpha$，$\\dot{p}_\\alpha = -\\partial H / \\partial q_\\alpha$
- 相空间由 $(q,p)$ 构成，维数为 $2s$
- 若 $H$ 不显含时间，相轨迹不相交
- 刘维尔定理：相体积在演化中不变
- 哈密顿力学是经典力学到量子力学和统计力学的桥梁
`,p={title:"哈密顿正则方程",author:"NeoWangKing",date:new Date(1780131246e3),lastMod:new Date(1780131255e3),tags:["物理","理论力学","哈密顿力学","正则方程","相空间","刘维尔定理"],category:["物理","理论力学"],summary:"本文介绍哈密顿力学的基本框架，包括正则共轭坐标、哈密顿函数、正则方程的推导、相空间的概念、刘维尔定理，以及哈密顿力学在分析体系演化中的应用。",comments:!0,draft:!1,sticky:0},$={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/17-Hamilton-Canonical-Equations.md",rawData:void 0};export{$ as _internal,l as body,n as collection,p as data,a as id,t as slug};
