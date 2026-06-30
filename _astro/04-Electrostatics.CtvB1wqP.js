const n="physics/Electrodynamics/04-Electrostatics.md",l="posts",o="physics/electrodynamics/04-electrostatics",a=`
## 静电场的基本方程

静电场满足

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{E} = \\frac{1}{\\epsilon_0} \\rho(\\boldsymbol{r}), \\quad \\nabla \\times \\boldsymbol{E} = 0
\\end{align}
$$

## 库仑定律

点电荷 $q$ 和 $Q$ 之间的相互作用力为

$$
\\begin{align}
\\boldsymbol{F} = \\frac{1}{4\\pi\\epsilon_0} \\frac{qQ}{r^2} \\hat{\\boldsymbol{r}}
\\end{align}
$$

点电荷 $q$ 的电场：

$$
\\begin{align}
\\boldsymbol{E} = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r^2} \\hat{\\boldsymbol{r}}
\\end{align}
$$

连续电荷分布的电场：

$$
\\begin{align}
\\boldsymbol{E}(\\boldsymbol{r}) = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{\\rho(\\boldsymbol{r}')}{|\\boldsymbol{r} - \\boldsymbol{r}'|^2} \\hat{\\boldsymbol{r}}'' \\,\\mathrm{d}\\tau'
\\end{align}
$$

## 高斯定律

### 积分形式

$$
\\begin{align}
\\oint_S \\boldsymbol{E} \\cdot \\mathrm{d}\\boldsymbol{a} = \\frac{1}{\\epsilon_0} Q_{\\text{enc}}
\\end{align}
$$

### 微分形式

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{E} = \\frac{1}{\\epsilon_0} \\rho
\\end{align}
$$

## 电势

### 定义

由 $\\nabla \\times \\boldsymbol{E} = 0$，可引入标势 $V$，使得 $\\boldsymbol{E} = -\\nabla V$。

两点间的电势差：

$$
\\begin{align}
V(\\boldsymbol{b}) - V(\\boldsymbol{a}) = -\\int_{\\boldsymbol{a}}^{\\boldsymbol{b}} \\boldsymbol{E} \\cdot \\mathrm{d}\\boldsymbol{l}
\\end{align}
$$

点电荷的电势：

$$
\\begin{align}
V = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{r}
\\end{align}
$$

连续电荷分布的电势：

$$
\\begin{align}
V(\\boldsymbol{r}) = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{\\rho(\\boldsymbol{r}')}{|\\boldsymbol{r} - \\boldsymbol{r}'|} \\,\\mathrm{d}\\tau'
\\end{align}
$$

### 泊松方程与拉普拉斯方程

$$
\\begin{align}
\\nabla^2 V = -\\frac{\\rho}{\\epsilon_0} \\quad (\\text{泊松方程}), \\qquad \\nabla^2 V = 0 \\quad (\\text{拉普拉斯方程})
\\end{align}
$$

### 边界条件

- 电势连续：$V_{\\text{above}} = V_{\\text{below}}$
- 法向导数：$\\dfrac{\\partial V_{\\text{above}}}{\\partial n} - \\dfrac{\\partial V_{\\text{below}}}{\\partial n} = -\\dfrac{1}{\\epsilon_0} \\sigma$

## 导体

在静电平衡状态下：

1. 内部电场为零：$\\boldsymbol{E} = 0$
2. 内部净电荷为零：$\\rho = 0$
3. 导体是等势体
4. 表面电场垂直于表面：$\\boldsymbol{E} = \\dfrac{\\sigma}{\\epsilon_0} \\hat{\\boldsymbol{n}}$

导体表面单位面积受力：

$$
\\begin{align}
\\boldsymbol{f} = \\frac{1}{2\\epsilon_0} \\sigma^2 \\hat{\\boldsymbol{n}}
\\end{align}
$$

## 电容器与电容

电容 $C = Q/V$。

**常见电容**：

- 平行板电容器：$C = \\dfrac{\\epsilon_0 A}{d}$
- 同心球壳电容器：$C = 4\\pi\\epsilon_0 \\dfrac{ab}{b-a}$
- 同轴圆柱电容器：$C = \\dfrac{2\\pi\\epsilon_0 l}{\\ln(b/a)}$

## 静电场能量

点电荷系统：

$$
\\begin{align}
W = \\frac{1}{2} \\sum_i q_i V(\\boldsymbol{r}_i)
\\end{align}
$$

连续电荷分布：

$$
\\begin{align}
W = \\frac{1}{2} \\int \\rho V \\,\\mathrm{d}\\tau = \\frac{\\epsilon_0}{2} \\int E^2 \\,\\mathrm{d}\\tau
\\end{align}
$$

能量密度：

$$
\\begin{align}
u = \\frac{\\epsilon_0}{2} E^2
\\end{align}
$$
`,b={title:"静电场",author:"NeoWangKing",date:new Date(1774224e6),lastMod:new Date(17828262e5),tags:["物理","电动力学","静电场","高斯定律","电势","导体","电容"],category:["物理","电动力学"],summary:"本文介绍静电场的基本理论，包括库仑定律、高斯定律、电势、泊松方程与拉普拉斯方程、导体的基本性质、电容器与电容，以及静电场能量。",comments:!0,draft:!1,sticky:0},i={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/04-Electrostatics.md",rawData:void 0};export{i as _internal,a as body,l as collection,b as data,n as id,o as slug};
