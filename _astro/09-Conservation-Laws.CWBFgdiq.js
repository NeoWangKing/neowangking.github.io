const n="physics/Electrodynamics/09-Conservation-Laws.md",l="posts",o="physics/electrodynamics/09-conservation-laws",t=`
## 电荷守恒

**连续性方程**：

$$
\\begin{align}
\\frac{\\partial\\rho}{\\partial t} + \\nabla\\cdot\\boldsymbol{J} = 0
\\end{align}
$$

积分形式：$\\dfrac{\\mathrm{d}Q}{\\mathrm{d}t} = -\\oint \\boldsymbol{J}\\cdot\\mathrm{d}\\boldsymbol{a}$。

## 能量守恒（坡印廷定理）

**能量密度**：

$$
\\begin{align}
u = \\frac{1}{2}\\left(\\epsilon_0 E^2 + \\frac{1}{\\mu_0}B^2\\right)
\\end{align}
$$

**坡印廷矢量**（能流密度）：

$$
\\begin{align}
\\boldsymbol{S} = \\frac{1}{\\mu_0}\\boldsymbol{E}\\times\\boldsymbol{B}
\\end{align}
$$

**坡印廷定理**（局部形式）：

$$
\\begin{align}
\\frac{\\partial u}{\\partial t} + \\nabla\\cdot\\boldsymbol{S} = -\\boldsymbol{J}\\cdot\\boldsymbol{E}
\\end{align}
$$

积分形式：

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t}\\int_V u\\,\\mathrm{d}\\tau + \\oint_S \\boldsymbol{S}\\cdot\\mathrm{d}\\boldsymbol{a} = -\\int_V \\boldsymbol{J}\\cdot\\boldsymbol{E}\\,\\mathrm{d}\\tau
\\end{align}
$$

## 动量守恒

**动量密度**：

$$
\\begin{align}
\\boldsymbol{g} = \\epsilon_0\\boldsymbol{E}\\times\\boldsymbol{B} = \\mu_0\\epsilon_0\\boldsymbol{S}
\\end{align}
$$

**麦克斯韦应力张量**：

$$
\\begin{align}
T_{ij} = \\epsilon_0\\left(E_iE_j - \\frac{1}{2}\\delta_{ij}E^2\\right) + \\frac{1}{\\mu_0}\\left(B_iB_j - \\frac{1}{2}\\delta_{ij}B^2\\right)
\\end{align}
$$

**动量守恒**（局部形式）：

$$
\\begin{align}
\\frac{\\partial}{\\partial t}(\\boldsymbol{g}_{\\text{mech}} + \\boldsymbol{g}_{\\text{field}}) = \\nabla\\cdot\\overleftrightarrow{\\boldsymbol{T}}
\\end{align}
$$

积分形式：

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t}(\\boldsymbol{p}_{\\text{mech}} + \\boldsymbol{p}_{\\text{field}}) = \\oint_S \\overleftrightarrow{\\boldsymbol{T}}\\cdot\\mathrm{d}\\boldsymbol{a}
\\end{align}
$$

其中 $\\boldsymbol{p}_{\\text{field}} = \\int_V \\boldsymbol{g}\\,\\mathrm{d}\\tau$。

## 角动量守恒

**角动量密度**：

$$
\\begin{align}
\\boldsymbol{\\ell} = \\boldsymbol{r}\\times\\boldsymbol{g} = \\epsilon_0\\boldsymbol{r}\\times(\\boldsymbol{E}\\times\\boldsymbol{B})
\\end{align}
$$

守恒形式类似于动量，但需考虑力矩。

## 牛顿第三定律

在电动力学中，牛顿第三定律一般不成立，因为场可以携带动量。总动量（机械+场）守恒。
`,a={title:"守恒定律",author:"NeoWangKing",date:new Date(17766432e5),lastMod:new Date(17828208e5),tags:["物理","电动力学","守恒定律","坡印廷定理"],category:["物理","电动力学"],summary:"本文系统介绍电动力学中的守恒定律，包括电荷守恒、能量守恒（坡印廷定理）、动量守恒和角动量守恒。",comments:!0,draft:!1,sticky:0,chapter:9},e={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/09-Conservation-Laws.md",rawData:void 0};export{e as _internal,t as body,l as collection,a as data,n as id,o as slug};
