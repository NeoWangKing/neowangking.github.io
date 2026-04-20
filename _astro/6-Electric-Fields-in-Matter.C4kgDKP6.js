const n="physics/Electrodynamics/6-Electric-Fields-in-Matter.md",l="posts",o="physics/electrodynamics/6-electric-fields-in-matter",b=`
## 极化机制

### 导体与绝缘体

- **导体**：存在自由电子，内部电场为零，电荷分布在表面。
- **绝缘体（电介质）**：没有自由电子，但在外电场中会发生**极化**。

### 极化的微观图像

#### 原子极化（拉伸）

中性原子在外电场中，电子云与原子核被反向拉动，形成**感应偶极矩**：

$$
\\begin{align}
\\boldsymbol{p} = \\alpha \\boldsymbol{E}
\\end{align}
$$

其中 $\\alpha$ 称为**原子极化率**。典型值 $\\alpha \\sim 10^{-30}\\,\\mathrm{m}^3$。

#### 分子极化（取向）

某些分子具有**固有偶极矩**（如 $\\mathrm{H}_2\\mathrm{O}$）。外电场对偶极子施加力矩，使其转向电场方向，导致宏观极化。

### 偶极子在电场中的行为

#### 力矩

均匀电场中，偶极子受到的力矩为

$$
\\begin{align}
\\boldsymbol{N} = \\boldsymbol{p} \\times \\boldsymbol{E}
\\end{align}
$$

力矩倾向于将偶极子转向电场方向。

#### 力

非均匀电场中，偶极子受到净力：

$$
\\begin{align}
\\boldsymbol{F} = (\\boldsymbol{p} \\cdot \\nabla) \\boldsymbol{E}
\\end{align}
$$

## 极化矢量

**极化强度** $\\boldsymbol{P}$ 定义为偶极矩密度（单位体积内的偶极矩之和）：

$$
\\begin{align}
\\boldsymbol{P} = \\frac{\\sum \\boldsymbol{p}_i}{\\Delta V}
\\end{align}
$$

## 极化物体的电场

### 束缚电荷

极化物体产生的电势可表示为

$$
\\begin{align}
V(\\boldsymbol{r}) = \\frac{1}{4\\pi\\epsilon_0} \\oint_S \\frac{\\sigma_b}{|\\boldsymbol{r} - \\boldsymbol{r}'|} \\, \\mathrm{d}a' + \\frac{1}{4\\pi\\epsilon_0} \\int_V \\frac{\\rho_b}{|\\boldsymbol{r} - \\boldsymbol{r}'|} \\, \\mathrm{d}\\tau'
\\end{align}
$$

其中

- **面束缚电荷密度**：$\\sigma_b = \\boldsymbol{P} \\cdot \\hat{\\boldsymbol{n}}$
- **体束缚电荷密度**：$\\rho_b = -\\nabla \\cdot \\boldsymbol{P}$

**物理意义**：

- $\\sigma_b$ 来源于极化时表面未抵消的电荷
- $\\rho_b$ 来源于极化强度空间变化导致的净电荷

### 均匀极化球体

对于均匀极化强度 $\\boldsymbol{P}$ 的球体（半径 $R$）：

- 球内电场均匀：$\\boldsymbol{E} = -\\dfrac{1}{3\\epsilon_0} \\boldsymbol{P}$
- 球外电场为偶极子场：$\\boldsymbol{E}_{\\text{dip}} = \\dfrac{1}{4\\pi\\epsilon_0} \\dfrac{3(\\boldsymbol{p}\\cdot\\hat{\\boldsymbol{r}})\\hat{\\boldsymbol{r}} - \\boldsymbol{p}}{r^3}$，其中 $\\boldsymbol{p} = \\dfrac{4\\pi}{3}R^3 \\boldsymbol{P}$

## 电位移矢量

### 高斯定律在介质中的形式

自由电荷密度 $\\rho_f$ 与总电荷 $\\rho = \\rho_f + \\rho_b$ 的关系为

$$
\\begin{align}
\\epsilon_0 \\nabla \\cdot \\boldsymbol{E} = \\rho = \\rho_f + \\rho_b = \\rho_f - \\nabla \\cdot \\boldsymbol{P}
\\end{align}
$$

整理得

$$
\\begin{align}
\\nabla \\cdot (\\epsilon_0 \\boldsymbol{E} + \\boldsymbol{P}) = \\rho_f
\\end{align}
$$

定义**电位移矢量**

$$
\\begin{align}
\\boldsymbol{D} = \\epsilon_0 \\boldsymbol{E} + \\boldsymbol{P}
\\end{align}
$$

则

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{D} = \\rho_f
\\end{align}
$$

积分形式：

$$
\\begin{align}
\\oint_S \\boldsymbol{D} \\cdot \\mathrm{d}\\boldsymbol{a} = Q_{f,\\text{enc}}
\\end{align}
$$

### 注意

- $\\nabla \\times \\boldsymbol{D} = \\nabla \\times \\boldsymbol{P} \\neq 0$（一般情况）
- $\\boldsymbol{D}$ 的散度仅由自由电荷决定，但其旋度不一定为零
- 不能仅由自由电荷分布确定 $\\boldsymbol{D}$（需知道 $\\boldsymbol{P}$ 或介质性质）

## 线性电介质

### 本构关系

对于线性电介质，极化强度与电场成正比：

$$
\\begin{align}
\\boldsymbol{P} = \\epsilon_0 \\chi_e \\boldsymbol{E}
\\end{align}
$$

其中 $\\chi_e$ 称为**电极化率**（无量纲）。于是

$$
\\begin{align}
\\boldsymbol{D} = \\epsilon_0 (1 + \\chi_e) \\boldsymbol{E} = \\epsilon \\boldsymbol{E}
\\end{align}
$$

其中 $\\epsilon = \\epsilon_0 \\epsilon_r$ 是介质的**介电常数**，$\\epsilon_r = 1 + \\chi_e$ 是**相对介电常数**（介电常数）。

### 常见介质的介电常数

|  材料  | 介电常数 $\\epsilon_r$ |
| :----: | :-------------------: |
|  真空  |           1           |
|  空气  |        1.00059        |
|   水   |         80.1          |
|  玻璃  |         5–10          |
| 钛酸钡 |         ~1200         |

### 线性介质中的电场计算

利用 $\\boldsymbol{D} = \\epsilon \\boldsymbol{E}$ 和 $\\nabla \\cdot \\boldsymbol{D} = \\rho_f$，可在已知自由电荷分布时求解电场。

**例**：点电荷 $q$ 浸入无限大均匀电介质中。由对称性，

$$
\\begin{align}
\\oint \\boldsymbol{D} \\cdot \\mathrm{d}\\boldsymbol{a} = q \\quad \\Rightarrow \\quad D \\cdot 4\\pi r^2 = q \\quad \\Rightarrow \\quad \\boldsymbol{D} = \\frac{q}{4\\pi r^2} \\hat{\\boldsymbol{r}}
\\end{align}
$$

则

$$
\\begin{align}
\\boldsymbol{E} = \\frac{\\boldsymbol{D}}{\\epsilon} = \\frac{q}{4\\pi \\epsilon r^2} \\hat{\\boldsymbol{r}}
\\end{align}
$$

电场比真空中弱 $\\epsilon_r$ 倍。

## 边界条件

在两种介质的分界面上，由 $\\nabla \\cdot \\boldsymbol{D} = \\rho_f$ 和 $\\nabla \\times \\boldsymbol{E} = 0$ 可得：

- $\\boldsymbol{D}$ 的法向分量跃变：$D_{1\\perp} - D_{2\\perp} = \\sigma_f$
- $\\boldsymbol{E}$ 的切向分量连续：$E_{1\\parallel} = E_{2\\parallel}$

若分界面无自由电荷，则

$$
\\begin{align}
D_{1\\perp} = D_{2\\perp}, \\quad E_{1\\parallel} = E_{2\\parallel}
\\end{align}
$$

## 电介质中的能量

### 电容器的能量

对于平行板电容器充满电介质，电容增加 $\\epsilon_r$ 倍，储能

$$
\\begin{align}
W = \\frac{1}{2} C V^2 = \\frac{1}{2} \\epsilon_r C_0 V^2
\\end{align}
$$

### 能量密度

静电场的能量密度在介质中推广为

$$
\\begin{align}
u = \\frac{1}{2} \\boldsymbol{D} \\cdot \\boldsymbol{E}
\\end{align}
$$

对于线性介质，$u = \\frac{1}{2} \\epsilon E^2 = \\frac{1}{2} \\frac{D^2}{\\epsilon}$。

## 小结

- 电介质在外电场中发生极化，产生束缚电荷
- 极化强度 $\\boldsymbol{P}$ 描述极化程度，$\\rho_b = -\\nabla \\cdot \\boldsymbol{P}$，$\\sigma_b = \\boldsymbol{P} \\cdot \\hat{\\boldsymbol{n}}$
- 电位移 $\\boldsymbol{D} = \\epsilon_0 \\boldsymbol{E} + \\boldsymbol{P}$，满足 $\\nabla \\cdot \\boldsymbol{D} = \\rho_f$
- 线性电介质有 $\\boldsymbol{P} = \\epsilon_0 \\chi_e \\boldsymbol{E}$，$\\boldsymbol{D} = \\epsilon \\boldsymbol{E}$
- 边界条件：$D_\\perp$ 跃变由自由面电荷引起，$E_\\parallel$ 连续
- 介质中的电场能量密度为 $\\frac{1}{2} \\boldsymbol{D} \\cdot \\boldsymbol{E}$
`,$={title:"电介质中的电场",author:"NeoWangKing",date:new Date(1775489953e3),lastMod:new Date(1776699553e3),tags:["物理","电动力学","电介质","极化","电位移矢量","线性电介质"],category:["物理","电动力学"],summary:"本文介绍电介质在电场中的行为，包括极化机制（拉伸与取向）、极化矢量、束缚电荷、电位移矢量、线性电介质的性质，以及电介质中的能量和边界条件。",comments:!0,draft:!1,sticky:0},a={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/6-Electric-Fields-in-Matter.md",rawData:void 0};export{a as _internal,b as body,l as collection,$ as data,n as id,o as slug};
