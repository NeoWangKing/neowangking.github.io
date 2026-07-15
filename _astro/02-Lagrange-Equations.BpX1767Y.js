const n="physics/TheoreticalMechanics/02-Lagrange-Equations.md",a="posts",l="physics/theoreticalmechanics/02-lagrange-equations",i=`
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

### 约束的分类

从不同角度，约束可分为：

1. **按是否与时间有关**

   - **稳定约束**：约束方程不显含时间 $t$
   - **不稳定约束**：约束方程显含时间 $t$

2. **按约束方程的形式**
   - **完整约束**：约束方程可表示为坐标和时间的函数 $f(\\boldsymbol{r}_1, \\boldsymbol{r}_2, \\dots, t)=0$，或可积分的微分约束
   - **非完整约束**：约束方程包含不可积分的微分形式

所有约束均为完整约束的力学体系称为**完整体系**。对于完整体系，自由度为 $s = 3n - k$。

## 虚位移与虚功

### 虚位移的概念

**虚位移**是指在某一固定时刻，约束所允许的任意无限小位移，记作 $\\delta \\boldsymbol{r}$。它与时间变化无关，只考虑约束条件。

**实位移**是时间 $\\mathrm{d}t$ 内实际发生的位移。对于稳定约束，实位移是虚位移中的一个；对于不稳定约束，实位移与虚位移不同。

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

#### 五类理想约束

1. **光滑曲面**：约束力沿法线方向，虚位移在切平面内
2. **无质量刚性杆连接的两个质点**：杆中张力做功之和为零
3. **光滑表面接触的两个刚体**：约束力在公法线方向
4. **完全粗糙表面接触（纯滚动）**：静摩擦力不做功
5. **柔软不可伸长的绳子连接的两个质点**：绳子张力做功之和为零

## 达朗贝尔方程

### 达朗贝尔原理

将牛顿第二定律 $\\boldsymbol{F}_i + \\boldsymbol{N}_i = m_i \\ddot{\\boldsymbol{r}}_i$ 改写为

$$
\\begin{align}
\\boldsymbol{F}_i - m_i \\ddot{\\boldsymbol{r}}_i + \\boldsymbol{N}_i = 0
\\end{align}
$$

引入**惯性力** $-m_i \\ddot{\\boldsymbol{r}}_i$，则形式上成为静力学平衡方程。

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

该方程**不包含约束力**，是分析力学的出发点。

### 静力学应用：虚功原理

对于静力学问题（$\\ddot{\\boldsymbol{r}}_i = 0$），达朗贝尔方程退化为**虚功原理**：

$$
\\begin{align}
\\sum_{i=1}^n \\boldsymbol{F}_i \\cdot \\delta \\boldsymbol{r}_i = 0
\\end{align}
$$

即理想约束下，主动力在任意虚位移上所做的虚功之和为零。

## 广义坐标与广义力

### 广义坐标

对于完整体系，可用代数方法消去不独立坐标，只留下独立坐标。**广义坐标**是用于确定质点系位置的**一组独立参量**，记作 $q_1, q_2, \\dots, q_s$。

引入广义坐标后，各质点的矢径可表示为

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

### 广义力

**广义力**定义为

$$
\\begin{align}
Q_\\alpha = \\sum_i \\boldsymbol{F}_i \\cdot \\frac{\\partial \\boldsymbol{r}_i}{\\partial q_\\alpha}
\\end{align}
$$

主动力所做的虚功可表示为

$$
\\begin{align}
\\delta W = \\sum_\\alpha Q_\\alpha \\delta q_\\alpha
\\end{align}
$$

若系统为保守体系，则广义力可由势能函数导出：

$$
\\begin{align}
Q_\\alpha = -\\frac{\\partial V}{\\partial q_\\alpha}
\\end{align}
$$

## 拉格朗日方程

### 一般形式

将达朗贝尔方程中的加速度项用广义坐标表示，可得

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t} \\left( \\frac{\\partial T}{\\partial \\dot{q}_\\alpha} \\right) - \\frac{\\partial T}{\\partial q_\\alpha} = Q_\\alpha, \\quad \\alpha = 1, 2, \\dots, s
\\end{align}
$$

这就是**拉格朗日方程**的一般形式，适用于**理想约束、完整体系**。

### 保守体系的拉格朗日方程

若所有主动力均为保守力，即存在势能函数 $V(q_1,\\dots,q_s,t)$，引入**拉格朗日函数**

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

这是**保守体系的拉格朗日方程**，形式简洁且与坐标选择无关。

### 部分主动力为非保守力的情况

若存在非保守力，则需保留广义力项：

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t} \\left( \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} \\right) - \\frac{\\partial L}{\\partial q_\\alpha} = Q_\\alpha^{\\text{(非保守)}}
\\end{align}
$$

### 拉格朗日函数的不确定性

拉格朗日函数不是唯一的：$L$ 和 $L' = L + \\dfrac{\\mathrm{d}f}{\\mathrm{d}t}$ 给出相同的运动方程。这称为拉格朗日函数的规范变换。

### 应用步骤

1. 确定系统的自由度，选择合适的广义坐标 $q_\\alpha$
2. 用广义坐标和广义速度写出系统的动能 $T$ 和势能 $V$
3. 构造拉格朗日函数 $L = T - V$
4. 若存在非保守力，计算广义力 $Q_\\alpha^{\\text{(非保守)}}$
5. 代入拉格朗日方程，得到 $s$ 个二阶常微分方程
6. 求解方程并利用初始条件确定积分常数

## 平衡问题

### 平衡条件

由虚功原理，平衡时广义力为零：

$$
\\begin{align}
Q_\\alpha = 0, \\quad \\alpha=1,\\dots,s
\\end{align}
$$

对保守体系等价于 $\\partial V / \\partial q_\\alpha = 0$，即势能取极值。

- **稳定平衡**：势能取极小值，二阶偏导数矩阵正定
- **不稳定平衡**：势能取极大值或鞍点

### 利用平衡求约束力（释放约束法）

1. 解除欲求约束力对应的约束
2. 将约束力视为主动力，在相应虚位移上做功
3. 平衡条件 $\\delta W = 0$ 求解该力

## 总结

| 比较项目 |     牛顿力学     |  分析力学（拉格朗日）  |
| :------: | :--------------: | :--------------------: |
|  出发点  |     受力分析     |        能量分析        |
|  基本量  | 矢量（力、动量） |   标量（动能、势能）   |
| 方程个数 |     $3n + k$     |        $3n - k$        |
|  约束力  |   出现在方程中   |         被消去         |
| 坐标选择 |  通常用直角坐标  | 任意广义坐标，形式不变 |
`,t={title:"拉格朗日方程",author:"NeoWangKing",date:new Date(17730144e5),lastMod:new Date(1782646337e3),tags:["物理","理论力学","分析力学","约束","虚功原理","达朗贝尔方程","广义坐标","拉格朗日方程"],category:["物理","理论力学"],summary:"本文系统介绍分析力学的核心内容——拉格朗日方程。从牛顿力学的局限出发，引入约束、广义坐标和虚功原理，推导达朗贝尔方程和拉格朗日方程，并讨论平衡条件与约束力的求解方法。",comments:!0,draft:!1,sticky:0,chapter:2},$={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/02-Lagrange-Equations.md",rawData:void 0};export{$ as _internal,i as body,a as collection,t as data,n as id,l as slug};
