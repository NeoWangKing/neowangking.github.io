const n="physics/Electrodynamics/4-Electrostatics.md",l="posts",o="physics/electrodynamics/4-electrostatics",$=`
## 从麦克斯韦方程组到静电场

### 静电场的基本方程

麦克斯韦方程组是电磁场的普遍规律。在静电场情形下，所有物理量不随时间变化，即 $\\partial/\\partial t = 0$。此时，电场和磁场相互独立，静电场满足：

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{E} &= \\frac{1}{\\epsilon_0} \\rho(\\boldsymbol{r}) \\\\
\\nabla \\times \\boldsymbol{E} &= 0
\\end{align}
$$

其中 $\\rho(\\boldsymbol{r})$ 是电荷密度，$\\epsilon_0$ 是真空介电常数。静电场是无旋场，其力线不闭合，始于正电荷，终于负电荷。

### 库仑定律

库仑定律是静电学的实验基础。两个点电荷 $q$ 和 $Q$ 之间的相互作用力为

$$
\\begin{align}
\\boldsymbol{F} = \\frac{1}{4\\pi\\epsilon_0} \\frac{qQ}{r^2} \\hat{\\boldsymbol{r}}
\\end{align}
$$

其中 $\\boldsymbol{r}$ 是从 $q$ 指向 $Q$ 的位矢。库仑力满足：

- 与电荷量乘积成正比
- 与距离平方成反比
- 方向沿连线方向，同号相斥，异号相吸

### 电场强度

**电场强度**定义为作用于单位正电荷上的力：

$$
\\begin{align}
\\boldsymbol{E} = \\frac{\\boldsymbol{F}}{Q}
\\end{align}
$$

对于点电荷 $q$，其电场为

$$
\\begin{align}
\\boldsymbol{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2} \\hat{\\boldsymbol{r}}
\\end{align}
$$

对于多个点电荷，电场满足叠加原理：

$$
\\begin{align}
\\boldsymbol{E} = \\sum_i \\frac{1}{4\\pi\\epsilon_0} \\frac{q_i}{r_i^2} \\hat{\\boldsymbol{r}}_i
\\end{align}
$$

对于连续电荷分布，电场为

$$
\\begin{align}
\\boldsymbol{E}(\\boldsymbol{r}) = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{\\rho(\\boldsymbol{r}')}{|\\boldsymbol{r} - \\boldsymbol{r}'|^2} \\hat{\\boldsymbol{r}}'' \\, \\mathrm{d}\\tau'
\\end{align}
$$

其中 $\\boldsymbol{r}'' = \\boldsymbol{r} - \\boldsymbol{r}'$，$\\hat{\\boldsymbol{r}}'' = \\boldsymbol{r}''/|\\boldsymbol{r}''|$。

### 电场线表示

电场线是描述电场方向与强度的直观工具：

- 电场线上每点的切线方向即该点电场方向
- 电场线的密度反映电场强度大小（$|\\boldsymbol{E}| \\propto \\text{线密度}$）
- 正电荷是电场线的起点，负电荷是终点

## 高斯定律

### 积分形式

高斯定律将电场与电荷分布联系起来：

$$
\\begin{align}
\\oint_S \\boldsymbol{E} \\cdot \\mathrm{d}\\boldsymbol{a} = \\frac{1}{\\epsilon_0} Q_{\\text{enc}}
\\end{align}
$$

其中 $Q_{\\text{enc}}$ 是闭合曲面 $S$ 所包围的总电荷。高斯定律是库仑定律的直接推论，但在处理对称性电荷分布时具有极大的便利性。

### 微分形式

由散度定理，可得高斯定律的微分形式：

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{E} = \\frac{1}{\\epsilon_0} \\rho
\\end{align}
$$

它表明电场的散度等于电荷密度除以 $\\epsilon_0$，即电荷是电场的源。

## 电势

### 电势的定义

由于静电场是无旋场（$\\nabla \\times \\boldsymbol{E} = 0$），可引入标量势函数 $V$，使得

$$
\\begin{align}
\\boldsymbol{E} = -\\nabla V
\\end{align}
$$

$V$ 称为**电势**。两点间的电势差等于将单位正电荷从一点移到另一点时电场力所做的功：

$$
\\begin{align}
V(\\boldsymbol{b}) - V(\\boldsymbol{a}) = -\\int_{\\boldsymbol{a}}^{\\boldsymbol{b}} \\boldsymbol{E} \\cdot \\mathrm{d}\\boldsymbol{l}
\\end{align}
$$

### 点电荷的电势

对于点电荷 $q$，电势为

$$
\\begin{align}
V = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r}
\\end{align}
$$

连续电荷分布的电势为

$$
\\begin{align}
V(\\boldsymbol{r}) = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{\\rho(\\boldsymbol{r}')}{|\\boldsymbol{r} - \\boldsymbol{r}'|} \\, \\mathrm{d}\\tau'
\\end{align}
$$

### 泊松方程与拉普拉斯方程

将 $\\boldsymbol{E} = -\\nabla V$ 代入高斯定律 $\\nabla \\cdot \\boldsymbol{E} = \\rho/\\epsilon_0$，得

$$
\\begin{align}
\\nabla^2 V = -\\frac{\\rho}{\\epsilon_0}
\\end{align}
$$

此即**泊松方程**。在无电荷区域（$\\rho = 0$），泊松方程退化为**拉普拉斯方程**：

$$
\\begin{align}
\\nabla^2 V = 0
\\end{align}
$$

求解静电学问题常归结为在给定边界条件下求解拉普拉斯方程或泊松方程。

### 边界条件

在两种介质的分界面上（或导体表面），电势满足以下边界条件：

- 电势连续：$V_{\\text{above}} = V_{\\text{below}}$
- 电场切向分量连续：$E_{\\text{above}}^{\\parallel} = E_{\\text{below}}^{\\parallel}$
- 法向导数满足：$\\dfrac{\\partial V_{\\text{above}}}{\\partial n} - \\dfrac{\\partial V_{\\text{below}}}{\\partial n} = -\\dfrac{1}{\\epsilon_0} \\sigma$

其中 $\\sigma$ 是面电荷密度，$\\hat{\\boldsymbol{n}}$ 是从分界面指向上的法向单位矢量。

## 导体的基本性质

在静电平衡状态下，导体具有以下性质：

1. **内部电场为零**：$\\boldsymbol{E} = 0$（导体内部）
2. **内部净电荷为零**：$\\rho = 0$，所有电荷分布在表面
3. **导体是等势体**：表面和内部电势处处相等
4. **表面电场垂直于表面**：$\\boldsymbol{E} = \\dfrac{\\sigma}{\\epsilon_0} \\hat{\\boldsymbol{n}}$
5. **表面电荷分布使总能量最小**

### 导体表面的电场与受力

考虑导体表面的一小块面元，其附近电场为

$$
\\begin{align}
\\boldsymbol{E}_{\\text{above}} = \\frac{\\sigma}{\\epsilon_0} \\hat{\\boldsymbol{n}}
\\end{align}
$$

该面元所受的力来自其他电荷产生的电场，该电场为 $\\boldsymbol{E}_{\\text{other}} = \\dfrac{1}{2}\\boldsymbol{E}_{\\text{above}}$。因此单位面积受力为

$$
\\begin{align}
\\boldsymbol{f} = \\frac{1}{2\\epsilon_0} \\sigma^2 \\hat{\\boldsymbol{n}}
\\end{align}
$$

此力方向垂直于导体表面向外，表现为导体表面的静电压力。

### 空腔内的导体

若导体内部存在空腔，且空腔内无电荷，则空腔内电场为零，空腔壁为等势面。若空腔内放置电荷 $q$，则导体腔内壁会感应出 $-q$ 的电荷，外表面感应出 $+q$ 的电荷，导体外部的电场不受腔内电荷具体位置的影响。

## 电容器与电容

### 电容的定义

**电容器**由两个导体组成，带等量异号电荷 $+Q$ 和 $-Q$。两导体间的电势差 $V$ 与 $Q$ 成正比，比例系数称为**电容**：

$$
\\begin{align}
C = \\frac{Q}{V}
\\end{align}
$$

电容的单位是法拉（F），$1\\,\\mathrm{F} = 1\\,\\mathrm{C/V}$。电容仅取决于导体的几何形状和周围介质。

### 常见电容器的电容

**平行板电容器**（面积 $A$，间距 $d$，忽略边缘效应）：

$$
\\begin{align}
C = \\frac{\\epsilon_0 A}{d}
\\end{align}
$$

**同心球壳电容器**（内半径 $a$，外半径 $b$）：

$$
\\begin{align}
C = 4\\pi\\epsilon_0 \\frac{ab}{b-a}
\\end{align}
$$

**同轴圆柱电容器**（内半径 $a$，外半径 $b$，长度 $l$，忽略边缘效应）：

$$
\\begin{align}
C = \\frac{2\\pi\\epsilon_0 l}{\\ln(b/a)}
\\end{align}
$$

## 静电场的能量

### 点电荷系统的能量

将一组点电荷从无穷远处缓慢移动到当前位置所做的功即为系统的静电能。对于 $n$ 个点电荷：

$$
\\begin{align}
W = \\frac{1}{2} \\sum_{i=1}^n q_i V(\\boldsymbol{r}_i)
\\end{align}
$$

其中 $V(\\boldsymbol{r}_i)$ 是除 $q_i$ 外其他电荷在 $q_i$ 处产生的电势。注意自能（点电荷自身产生的能量）是发散的，但在讨论能量差时可不考虑。

### 连续电荷分布的能量

对于连续电荷分布，能量表达式为

$$
\\begin{align}
W = \\frac{1}{2} \\int \\rho(\\boldsymbol{r}) V(\\boldsymbol{r}) \\, \\mathrm{d}\\tau
\\end{align}
$$

利用 $\\rho = \\epsilon_0 \\nabla \\cdot \\boldsymbol{E}$ 和分部积分，可得

$$
\\begin{align}
W = \\frac{\\epsilon_0}{2} \\int_{\\text{all space}} E^2 \\, \\mathrm{d}\\tau
\\end{align}
$$

这表明静电能定域在电场中，电场强度大的区域能量密度高。能量密度为

$$
\\begin{align}
u = \\frac{\\epsilon_0}{2} E^2
\\end{align}
$$

### 关于能量的几点说明

- 连续电荷分布的能量总是正的
- 点电荷系统的能量可以为负（如正负电荷组成的偶极子）
- 能量定域于电场，而非电荷本身
- 电场能量不满足叠加原理（$E^2$ 包含交叉项）

## 静电场问题的求解思路

1. **直接积分**：利用库仑定律或电势的积分公式，适用于已知电荷分布的情形
2. **高斯定律**：适用于具有高度对称性的电荷分布（球对称、柱对称、面对称）
3. **求解拉普拉斯方程/泊松方程**：适用于给定边界条件的区域，常用方法有分离变量法、镜像法等
4. **多极展开**：适用于远场近似，将复杂电荷分布等效为点电荷、偶极子、四极子等的叠加

> 静电场是电动力学的基础，后续章节将在此基础上讨论介质中的静电场、静磁场以及时变电磁场。
`,a={title:"静电场",author:"NeoWangKing",date:new Date(1775059417e3),lastMod:new Date(1775059417e3),tags:["物理","电动力学","静电场","库仑定律","高斯定律","电势","导体","电容"],category:["物理","电动力学"],summary:"本文从麦克斯韦方程组出发，推导静电场的基本方程，介绍库仑定律、电场强度、高斯定律、电势、泊松方程与拉普拉斯方程，并讨论导体的基本性质、电容器的电容以及静电场的能量。",comments:!0,draft:!1,sticky:0},b={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/4-Electrostatics.md",rawData:void 0};export{b as _internal,$ as body,l as collection,a as data,n as id,o as slug};
