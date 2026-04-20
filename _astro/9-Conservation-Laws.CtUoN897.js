const n="physics/Electrodynamics/9-Conservation-Laws.md",l="posts",o="physics/electrodynamics/9-conservation-laws",t=`
## 电荷守恒

### 连续性方程

电荷守恒的微分形式为

$$
\\begin{align}
\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot \\boldsymbol{J} = 0
\\end{align}
$$

积分形式：

$$
\\begin{align}
\\frac{\\mathrm{d}Q}{\\mathrm{d}t} = -\\oint_S \\boldsymbol{J} \\cdot \\mathrm{d}\\boldsymbol{a}
\\end{align}
$$

即单位时间内封闭曲面内电荷的减少量等于流出曲面的电流。

## 能量守恒

### 坡印廷定理

考虑带电系统在电磁场中的动能变化率：

$$
\\begin{align}
\\frac{\\mathrm{d}E_{\\text{kin}}}{\\mathrm{d}t} = \\int \\boldsymbol{J} \\cdot \\boldsymbol{E} \\, \\mathrm{d}\\tau
\\end{align}
$$

利用麦克斯韦方程消去 $\\boldsymbol{J}$：

$$
\\begin{align}
\\boldsymbol{J} = \\nabla \\times \\boldsymbol{H} - \\frac{\\partial \\boldsymbol{D}}{\\partial t}
\\end{align}
$$

代入并经过矢量恒等式运算，可得

$$
\\begin{align}
\\frac{\\mathrm{d}E_{\\text{kin}}}{\\mathrm{d}t} = -\\int \\left( \\frac{\\partial u}{\\partial t} + \\nabla \\cdot \\boldsymbol{S} \\right) \\mathrm{d}\\tau
\\end{align}
$$

其中

- **电磁场能量密度**：$u = \\frac{1}{2} (\\boldsymbol{E} \\cdot \\boldsymbol{D} + \\boldsymbol{B} \\cdot \\boldsymbol{H})$
- **坡印廷矢量（能流密度）**：$\\boldsymbol{S} = \\boldsymbol{E} \\times \\boldsymbol{H}$

在真空中，$u = \\frac{1}{2} (\\epsilon_0 E^2 + \\frac{1}{\\mu_0} B^2)$，$\\boldsymbol{S} = \\frac{1}{\\mu_0} \\boldsymbol{E} \\times \\boldsymbol{B}$。

### 能量守恒的积分形式

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t} (E_{\\text{kin}} + U_{\\text{em}}) = -\\oint_S \\boldsymbol{S} \\cdot \\mathrm{d}\\boldsymbol{a}
\\end{align}
$$

其中 $U_{\\text{em}} = \\int u \\, \\mathrm{d}\\tau$ 是电磁场能量。物理意义：电磁场对带电体做功的功率加上电磁场能量变化率，等于流入封闭曲面的电磁能流。

### 局部形式

$$
\\begin{align}
\\frac{\\partial u_{\\text{total}}}{\\partial t} + \\nabla \\cdot \\boldsymbol{S} = 0
\\end{align}
$$

其中 $u_{\\text{total}}$ 包括带电粒子的动能密度和电磁场能量密度。

## 动量守恒

### 电磁场对带电体的力

单位体积的力为

$$
\\begin{align}
\\boldsymbol{f} = \\rho \\boldsymbol{E} + \\boldsymbol{J} \\times \\boldsymbol{B}
\\end{align}
$$

利用麦克斯韦方程，可将 $\\boldsymbol{f}$ 表示为场的函数。经过推导得到

$$
\\begin{align}
\\boldsymbol{f} = \\nabla \\cdot \\boldsymbol{T} - \\frac{\\partial \\boldsymbol{g}}{\\partial t}
\\end{align}
$$

其中

- **麦克斯韦应力张量**（分量形式）：

$$
\\begin{align}
T_{ij} = \\epsilon_0 \\left( E_i E_j - \\frac{1}{2} \\delta_{ij} E^2 \\right) + \\frac{1}{\\mu_0} \\left( B_i B_j - \\frac{1}{2} \\delta_{ij} B^2 \\right)
\\end{align}
$$

- **电磁场动量密度**：$\\boldsymbol{g} = \\epsilon_0 \\boldsymbol{E} \\times \\boldsymbol{B} = \\frac{1}{c^2} \\boldsymbol{S}$（真空中）

### 动量守恒的积分形式

对体积分，得

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t} (\\boldsymbol{P}_{\\text{kin}} + \\boldsymbol{P}_{\\text{em}}) = \\oint_S \\boldsymbol{T} \\cdot \\mathrm{d}\\boldsymbol{a}
\\end{align}
$$

其中 $\\boldsymbol{P}_{\\text{kin}}$ 是带电粒子的机械动量，$\\boldsymbol{P}_{\\text{em}} = \\int \\boldsymbol{g} \\, \\mathrm{d}\\tau$ 是电磁场动量。右边是通过闭合曲面的应力张量通量，表示单位时间内流入的动量。

### 局部形式

$$
\\begin{align}
\\frac{\\partial}{\\partial t} (\\boldsymbol{g}_{\\text{mech}} + \\boldsymbol{g}_{\\text{em}}) + \\nabla \\cdot \\boldsymbol{T} = 0
\\end{align}
$$

## 角动量守恒

类似地，可定义电磁场的角动量密度 $\\boldsymbol{l} = \\boldsymbol{r} \\times \\boldsymbol{g}$，并得到角动量守恒方程。

## 守恒定律总结

| 守恒量 |             密度             |      流密度      |       源项       |
| :----: | :--------------------------: | :--------------: | :--------------: |
|  电荷  |            $\\rho$            | $\\boldsymbol{J}$ | 无（连续性方程） |
|  能量  |       $u_{\\text{em}}$        | $\\boldsymbol{S}$ |   洛伦兹力做功   |
|  动量  | $\\boldsymbol{g}_{\\text{em}}$ | $\\boldsymbol{T}$ |     洛伦兹力     |

## 应用意义

- 坡印廷定理用于分析电磁能传输（如导线、天线、激光）
- 应力张量用于计算电磁场对物体的力（如辐射压）
- 动量密度解释了光压现象

## 小结

- 电荷守恒由连续性方程描述
- 能量守恒：坡印廷定理，能流密度 $\\boldsymbol{S} = \\boldsymbol{E} \\times \\boldsymbol{H}$
- 动量守恒：麦克斯韦应力张量，动量密度 $\\boldsymbol{g} = \\epsilon_0 \\boldsymbol{E} \\times \\boldsymbol{B}$
- 电磁场与带电物质之间满足完整的能量和动量守恒
`,b={title:"守恒定律",author:"NeoWangKing",date:new Date(1776699668e3),lastMod:new Date(1776699668e3),tags:["物理","电动力学","能量守恒","动量守恒","坡印廷定理","麦克斯韦应力张量"],category:["物理","电动力学"],summary:"本文介绍电磁场中的守恒定律，包括电荷守恒、能量守恒（坡印廷定理）和动量守恒（麦克斯韦应力张量），并讨论电磁场的能量密度、能流密度和动量密度。",comments:!0,draft:!1,sticky:0},a={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/9-Conservation-Laws.md",rawData:void 0};export{a as _internal,t as body,l as collection,b as data,n as id,o as slug};
