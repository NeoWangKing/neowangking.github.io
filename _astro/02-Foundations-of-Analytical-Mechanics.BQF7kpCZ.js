const n="physics/TheoreticalMechanics/02-Foundations-of-Analytical-Mechanics.md",a="posts",l="physics/theoreticalmechanics/02-foundations-of-analytical-mechanics",o=`
## 从牛顿力学到分析力学

牛顿力学处理质点系问题时，需要同时考虑主动力和约束力，并建立 $3n$ 个运动方程（$n$ 为质点数）。若系统存在 $k$ 个约束，则共有 $3n + k$ 个待求方程（包含 $k$ 个约束力）。这种方法在处理复杂约束系统时往往计算繁琐。

分析力学的目标：

- **消去约束力**：通过虚功原理使约束力不出现在方程中
- **消去不独立坐标**：引入广义坐标，用最少的独立变量描述系统
- **直接给出独立变量的运动方程**：拉格朗日方程

## 约束与分类

### 约束的概念

**约束**是对物体运动所加的几何学或运动学方面的限制。约束的存在产生了约束力。

**约束方程**的表示方式与坐标选择有关。例如，单摆的约束方程为

$$
\\begin{align}
x^2 + y^2 = l^2
\\end{align}
$$

若将单摆的绳子换成弹簧，则不再是约束，因为弹簧不限制质点的运动范围，只提供弹性力。

### 约束的分类

从不同角度，约束可分为：

1. **按是否与时间有关**

   - **稳定约束**：约束方程不显含时间 $t$
   - **不稳定约束**：约束方程显含时间 $t$

   例如，小球在匀速上升的平台上运动，其约束方程为 $z = vt$（设平台表面为 $z=0$），是不稳定约束。

2. **按约束方程的形式**

   - **完整约束**：约束方程可表示为坐标和时间的函数 $f(\\boldsymbol{r}_1, \\boldsymbol{r}_2, \\dots, t)=0$，或可积分的微分约束。完整约束的特点是可以**用代数方法消去不独立坐标**，只留下独立坐标。
   - **非完整约束**：约束方程包含不可积分的微分形式，如 $f(\\boldsymbol{r}_1, \\boldsymbol{r}_2, \\dots, \\dot{\\boldsymbol{r}}_1, \\dot{\\boldsymbol{r}}_2, \\dots, t)=0$ 且不可积。

   所有约束均为完整约束的力学体系称为**完整体系**。

## 虚位移与虚功

### 虚位移的概念

**虚位移**是指在某一固定时刻，约束所允许的任意无限小位移，记作 $\\delta \\boldsymbol{r}$。它与时间变化无关，只考虑约束条件。

**实位移**是时间 $\\mathrm{d}t$ 内实际发生的位移。对于稳定约束，实位移是虚位移中的一个；对于不稳定约束，实位移与虚位移不同。

例如，在柱坐标系中，质点 $m$ 的虚位移可表示为

$$
\\begin{align}
\\delta \\boldsymbol{r} = \\delta \\rho \\, \\hat{\\boldsymbol{\\rho}} + \\rho \\delta \\phi \\, \\hat{\\boldsymbol{\\phi}} + \\delta z \\, \\hat{\\boldsymbol{z}}
\\end{align}
$$

### 虚功

**虚功**是作用在质点上的力在虚位移上所做的功：

$$
\\begin{align}
\\delta W = \\boldsymbol{F} \\cdot \\delta \\boldsymbol{r}
\\end{align}
$$

### 理想约束

若约束反力在任意虚位移上所做的虚功之和为零，则称约束为**理想约束**：

$$
\\begin{align}
\\sum_{i=1}^n \\boldsymbol{N}_i \\cdot \\delta \\boldsymbol{r}_i = 0
\\end{align}
$$

其中 $\\boldsymbol{N}_i$ 是第 $i$ 个质点所受的约束力。

#### 五类理想约束

1. **光滑曲面**：约束力沿法线方向，虚位移在切平面内，$\\boldsymbol{N} \\perp \\delta \\boldsymbol{r}$
2. **无质量刚性杆连接的两个质点**：杆中张力沿杆方向，两质点虚位移在杆方向投影相等，总虚功为零
3. **光滑表面接触的两个刚体**：约束力在公法线方向，虚位移在公切面内
4. **完全粗糙表面接触（纯滚动）**：无滑动，接触点相对速度为零，约束力（静摩擦力）在接触点虚位移上不做功
5. **柔软不可伸长的绳子连接的两个质点**：绳子张力沿绳方向，两质点虚位移在绳方向投影相等，总虚功为零

## 达朗贝尔方程

### 达朗贝尔原理

将牛顿第二定律 $\\boldsymbol{F}_i + \\boldsymbol{N}_i = m_i \\ddot{\\boldsymbol{r}}_i$ 改写为

$$
\\begin{align}
\\boldsymbol{F}_i - m_i \\ddot{\\boldsymbol{r}}_i + \\boldsymbol{N}_i = 0
\\end{align}
$$

其中 $\\boldsymbol{F}_i$ 为主动力，$\\boldsymbol{N}_i$ 为约束力。引入**惯性力** $-m_i \\ddot{\\boldsymbol{r}}_i$，则形式上成为静力学平衡方程。

### 达朗贝尔方程

将达朗贝尔原理与虚位移点乘，并对所有质点求和：

$$
\\begin{align}
\\sum_{i=1}^n (\\boldsymbol{F}_i - m_i \\ddot{\\boldsymbol{r}}_i) \\cdot \\delta \\boldsymbol{r}_i + \\sum_{i=1}^n \\boldsymbol{N}_i \\cdot \\delta \\boldsymbol{r}_i = 0
\\end{align}
$$

对于理想约束，第二项为零，得到**达朗贝尔方程**（动力学普遍方程）：

$$
\\begin{align}
\\sum_{i=1}^n (\\boldsymbol{F}_i - m_i \\ddot{\\boldsymbol{r}}_i) \\cdot \\delta \\boldsymbol{r}_i = 0
\\end{align}
$$

该方程**不包含约束力**，是分析力学的出发点。它等价于 $3n-k$ 个独立方程（$k$ 为完整约束个数）。

### 达朗贝尔方程的应用步骤

1. 建立适当的坐标系
2. 写出各质点的虚位移表达式（用参数变分表示）
3. 写出主动力和惯性力在虚位移上所做的虚功
4. 利用约束条件消去不独立的虚位移变分
5. 令独立虚位移的系数为零，得到运动方程

### 静力学应用：虚功原理

对于静力学问题（$\\ddot{\\boldsymbol{r}}_i = 0$），达朗贝尔方程退化为**虚功原理**：

$$
\\begin{align}
\\sum_{i=1}^n \\boldsymbol{F}_i \\cdot \\delta \\boldsymbol{r}_i = 0
\\end{align}
$$

即理想约束下，主动力在任意虚位移上所做的虚功之和为零。

## 广义坐标与自由度

### 完整约束下的独立坐标

对于完整体系，可用代数方法消去不独立坐标，只留下独立坐标。设系统有 $n$ 个质点，$k$ 个完整约束，则独立坐标个数为

$$
\\begin{align}
s = 3n - k
\\end{align}
$$

$s$ 称为系统的**自由度**。

### 广义坐标的定义

**广义坐标**是用于确定质点系位置的**一组独立参量**，记作 $q_1, q_2, \\dots, q_s$。广义坐标的选取不唯一，可以是长度、角度或其他任意量，只要满足：

- 能够唯一确定系统的位形
- 个数等于自由度

例如：

- 自由运动的刚体：需要6个广义坐标（3个平动 + 3个转动）
- 单摆：1个广义坐标（角度 $\\theta$）
- 双滑块系统：需根据约束具体分析

### 广义坐标与达朗贝尔方程

引入广义坐标后，各质点的矢径可表示为广义坐标的函数：

$$
\\begin{align}
\\boldsymbol{r}_i = \\boldsymbol{r}_i(q_1, q_2, \\dots, q_s, t)
\\end{align}
$$

虚位移可用广义坐标的变分表示：

$$
\\begin{align}
\\delta \\boldsymbol{r}_i = \\sum_{\\alpha=1}^s \\frac{\\partial \\boldsymbol{r}_i}{\\partial q_\\alpha} \\delta q_\\alpha
\\end{align}
$$

代入达朗贝尔方程，可将动力学方程用广义坐标表达。

## 拉格朗日方程

### 从达朗贝尔方程到拉格朗日方程

将达朗贝尔方程中的加速度项用广义坐标表示。首先，速度可写为

$$
\\begin{align}
\\dot{\\boldsymbol{r}}_i = \\sum_{\\alpha=1}^s \\frac{\\partial \\boldsymbol{r}_i}{\\partial q_\\alpha} \\dot{q}_\\alpha + \\frac{\\partial \\boldsymbol{r}_i}{\\partial t}
\\end{align}
$$

可以证明以下两个重要关系：

$$
\\begin{align}
\\frac{\\partial \\dot{\\boldsymbol{r}}_i}{\\partial \\dot{q}_\\alpha} &= \\frac{\\partial \\boldsymbol{r}_i}{\\partial q_\\alpha} \\\\
\\frac{\\mathrm{d}}{\\mathrm{d}t} \\left( \\frac{\\partial \\boldsymbol{r}_i}{\\partial q_\\alpha} \\right) &= \\frac{\\partial \\dot{\\boldsymbol{r}}_i}{\\partial q_\\alpha}
\\end{align}
$$

利用这些关系，可将惯性力项改写为

$$
\\begin{align}
\\sum_i m_i \\ddot{\\boldsymbol{r}}_i \\cdot \\frac{\\partial \\boldsymbol{r}_i}{\\partial q_\\alpha} = \\frac{\\mathrm{d}}{\\mathrm{d}t} \\left( \\frac{\\partial T}{\\partial \\dot{q}_\\alpha} \\right) - \\frac{\\partial T}{\\partial q_\\alpha}
\\end{align}
$$

其中 $T = \\sum_i \\frac{1}{2} m_i \\dot{\\boldsymbol{r}}_i^2$ 是系统的动能。

定义**广义力**

$$
\\begin{align}
Q_\\alpha = \\sum_i \\boldsymbol{F}_i \\cdot \\frac{\\partial \\boldsymbol{r}_i}{\\partial q_\\alpha}
\\end{align}
$$

则达朗贝尔方程化为

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t} \\left( \\frac{\\partial T}{\\partial \\dot{q}_\\alpha} \\right) - \\frac{\\partial T}{\\partial q_\\alpha} = Q_\\alpha, \\quad \\alpha = 1, 2, \\dots, s
\\end{align}
$$

这就是**拉格朗日方程**的一般形式，适用于**理想约束、完整体系**。

### 主动力为保守力的情况

若所有主动力均为保守力，即存在势能函数 $V(q_1,\\dots,q_s,t)$，使得 $Q_\\alpha = -\\dfrac{\\partial V}{\\partial q_\\alpha}$，则引入**拉格朗日函数**

$$
\\begin{align}
L = T - V
\\end{align}
$$

拉格朗日方程化为

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t} \\left( \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} \\right) - \\frac{\\partial L}{\\partial q_\\alpha} = 0, \\quad \\alpha = 1, 2, \\dots, s
\\end{align}
$$

这是**保守体系的拉格朗日方程**，形式简洁且与坐标选择无关（协变性）。

### 部分主动力为非保守力的情况

若存在非保守力，则需保留广义力项：

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t} \\left( \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} \\right) - \\frac{\\partial L}{\\partial q_\\alpha} = Q_\\alpha^{\\text{(非保守)}}
\\end{align}
$$

其中 $L$ 仍由保守力部分的势能构成。

### 拉格朗日方程的应用步骤

1. 确定系统的自由度，选择合适的广义坐标 $q_\\alpha$
2. 用广义坐标和广义速度写出系统的动能 $T$ 和势能 $V$，构造拉格朗日函数 $L = T - V$
3. 若存在非保守力，计算广义力 $Q_\\alpha^{\\text{(非保守)}}$
4. 代入拉格朗日方程，得到 $s$ 个二阶常微分方程
5. 求解方程并利用初始条件确定积分常数

### 例题：双质点系统

回顾之前用牛顿力学和达朗贝尔方程处理过的例题：质点 $m$ 被长为 $l$ 的轻绳系着，另一端挂着质点 $m'$，放置于光滑水平平台上。

**用拉格朗日方程求解**：

1. **选取广义坐标**：设 $m$ 的极坐标为 $(r,\\theta)$，$m'$ 的坐标为 $(0, -l)$？实际上需仔细分析。更合理的选取：设 $m$ 的位置为 $(r,\\theta)$，$m'$ 的位置由绳长 $l$ 约束决定。

2. **构建拉格朗日函数**：写出动能和势能（注意是否为保守体系）

3. **代入拉格朗日方程**：得到两个运动方程

4. **与牛顿力学结果对比**：可见拉格朗日方程直接给出独立变量的方程，无需考虑约束力

## 总结

| 比较项目 | 牛顿力学         | 分析力学（拉格朗日）     |
| -------- | ---------------- | ------------------------ |
| 出发点   | 受力分析         | 能量分析                 |
| 基本量   | 矢量（力、动量） | 标量（动能、势能）       |
| 方程个数 | $3n + k$         | $3n - k$                 |
| 约束力   | 出现在方程中     | 被消去                   |
| 适用范围 | 经典力学         | 整个物理学（形式可推广） |
| 坐标选择 | 通常用直角坐标   | 任意广义坐标，形式不变   |

拉格朗日方程的核心优势：

- 没有冗余坐标的最经济描述
- 拉格朗日函数（标量）包含所有物理信息
- 方程形式协变（与坐标选择无关）
- 易于推广到其他物理领域（如场论）
`,i={title:"分析力学基础",author:"NeoWangKing",date:new Date(177376018e4),lastMod:new Date(17738208e5),tags:["物理","理论力学","分析力学","约束","虚功原理","达朗贝尔方程","广义坐标","拉格朗日方程"],category:["物理","理论力学"],summary:"本文是理论力学课程的第二篇笔记，系统介绍从牛顿力学到分析力学的过渡，包括约束与分类、虚位移与虚功、理想约束、达朗贝尔方程、广义坐标与自由度，以及拉格朗日方程的推导与应用。",comments:!0,draft:!1,sticky:0},$={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/02-Foundations-of-Analytical-Mechanics.md",rawData:void 0};export{$ as _internal,o as body,a as collection,i as data,n as id,l as slug};
