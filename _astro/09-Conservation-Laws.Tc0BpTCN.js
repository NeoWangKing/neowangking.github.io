const n="physics/Electrodynamics/09-Conservation-Laws.md",o="posts",l="physics/electrodynamics/09-conservation-laws",t=`
## 电荷守恒定律

连续性方程：

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

## 能量守恒（坡印廷定理）

电磁场能量密度：

$$
\\begin{align}
u_{\\text{em}} = \\frac{1}{2} (\\boldsymbol{E} \\cdot \\boldsymbol{D} + \\boldsymbol{B} \\cdot \\boldsymbol{H})
\\end{align}
$$

坡印廷矢量（能流密度）：

$$
\\begin{align}
\\boldsymbol{S} = \\boldsymbol{E} \\times \\boldsymbol{H}
\\end{align}
$$

真空中：$u_{\\text{em}} = \\frac{1}{2} (\\epsilon_0 E^2 + \\frac{1}{\\mu_0} B^2)$，$\\boldsymbol{S} = \\frac{1}{\\mu_0} \\boldsymbol{E} \\times \\boldsymbol{B}$。

能量守恒的积分形式：

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t} (E_{\\text{kin}} + U_{\\text{em}}) = -\\oint_S \\boldsymbol{S} \\cdot \\mathrm{d}\\boldsymbol{a}
\\end{align}
$$

局部形式：

$$
\\begin{align}
\\frac{\\partial u_{\\text{total}}}{\\partial t} + \\nabla \\cdot \\boldsymbol{S} = 0
\\end{align}
$$

## 动量守恒

电磁场对带电体的单位体积力：

$$
\\begin{align}
\\boldsymbol{f} = \\rho \\boldsymbol{E} + \\boldsymbol{J} \\times \\boldsymbol{B}
\\end{align}
$$

麦克斯韦应力张量（分量形式）：

$$
\\begin{align}
T_{ij} = \\epsilon_0 \\left( E_i E_j - \\frac{1}{2} \\delta_{ij} E^2 \\right) + \\frac{1}{\\mu_0} \\left( B_i B_j - \\frac{1}{2} \\delta_{ij} B^2 \\right)
\\end{align}
$$

电磁场动量密度：

$$
\\begin{align}
\\boldsymbol{g}_{\\text{em}} = \\epsilon_0 \\boldsymbol{E} \\times \\boldsymbol{B} = \\frac{1}{c^2} \\boldsymbol{S}
\\end{align}
$$

动量守恒的积分形式：

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t} (\\boldsymbol{P}_{\\text{kin}} + \\boldsymbol{P}_{\\text{em}}) = \\oint_S \\boldsymbol{T} \\cdot \\mathrm{d}\\boldsymbol{a}
\\end{align}
$$

## 守恒定律总结

| 守恒量 |             密度             |      流密度      |       源项       |
| :----: | :--------------------------: | :--------------: | :--------------: |
|  电荷  |            $\\rho$            | $\\boldsymbol{J}$ | 无（连续性方程） |
|  能量  |       $u_{\\text{em}}$        | $\\boldsymbol{S}$ |   洛伦兹力做功   |
|  动量  | $\\boldsymbol{g}_{\\text{em}}$ | $\\boldsymbol{T}$ |     洛伦兹力     |
`,a={title:"电磁场中的守恒定律",author:"NeoWangKing",date:new Date(17766432e5),lastMod:new Date(178283514e4),tags:["物理","电动力学","能量守恒","动量守恒","坡印廷定理","麦克斯韦应力张量"],category:["物理","电动力学"],summary:"本文介绍电磁场中的守恒定律，包括电荷守恒、能量守恒（坡印廷定理）和动量守恒（麦克斯韦应力张量），并讨论电磁场的能量密度、能流密度和动量密度。",comments:!0,draft:!1,sticky:0},e={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/09-Conservation-Laws.md",rawData:void 0};export{e as _internal,t as body,o as collection,a as data,n as id,l as slug};
