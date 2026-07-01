const n="physics/Electrodynamics/12-Radiation.md",a="posts",o="physics/electrodynamics/12-radiation",l=`
## 辐射的定义

辐射是携带能量不可逆地传播到无穷远的电磁场。只有场中 $1/r$ 项（加速度场）贡献辐射功率，因为 $S\\sim E^2\\sim 1/r^2$，面积 $4\\pi r^2$ 给出有限值。

## 电偶极辐射

振荡电偶极子 $\\boldsymbol{p}(t) = \\boldsymbol{p}_0\\cos(\\omega t)$：

**辐射场**（远区）：

$$
\\begin{align}
\\boldsymbol{E}_{\\text{rad}} = -\\frac{\\mu_0 \\ddot{\\boldsymbol{p}}}{4\\pi r}\\sin\\theta\\,\\hat{\\boldsymbol{\\theta}}, \\quad \\boldsymbol{B}_{\\text{rad}} = -\\frac{\\mu_0 \\ddot{\\boldsymbol{p}}}{4\\pi c r}\\sin\\theta\\,\\hat{\\boldsymbol{\\phi}}
\\end{align}
$$

**坡印廷矢量（平均）**：

$$
\\begin{align}
\\langle\\boldsymbol{S}\\rangle = \\frac{\\mu_0 p_0^2\\omega^4}{32\\pi^2 c}\\frac{\\sin^2\\theta}{r^2}\\hat{\\boldsymbol{r}}
\\end{align}
$$

**总辐射功率（平均）**：

$$
\\begin{align}
\\langle P\\rangle = \\frac{\\mu_0 p_0^2\\omega^4}{12\\pi c}
\\end{align}
$$

**角分布**：$\\sin^2\\theta$ 形式，沿偶极轴方向无辐射。

## 磁偶极辐射

振荡磁偶极子 $\\boldsymbol{m}(t) = \\boldsymbol{m}_0\\cos(\\omega t)$：

$$
\\begin{align}
\\langle P\\rangle = \\frac{\\mu_0 m_0^2\\omega^4}{12\\pi c^3}
\\end{align}
$$

通常比电偶极辐射弱 $(\\omega b/c)^2$ 倍。

## 任意源的辐射

远区辐射场由电偶极矩的二阶导数决定：

$$
\\begin{align}
\\boldsymbol{E}_{\\text{rad}} = \\frac{\\mu_0}{4\\pi r}[\\hat{\\boldsymbol{r}}\\times(\\hat{\\boldsymbol{r}}\\times\\ddot{\\boldsymbol{p}})], \\quad \\boldsymbol{B}_{\\text{rad}} = -\\frac{\\mu_0}{4\\pi c r}[\\hat{\\boldsymbol{r}}\\times\\ddot{\\boldsymbol{p}}]
\\end{align}
$$

**辐射功率**：

$$
\\begin{align}
P_{\\text{rad}} = \\frac{\\mu_0}{6\\pi c}|\\ddot{\\boldsymbol{p}}|^2
\\end{align}
$$

## 运动点电荷的辐射

### 非相对论（拉莫尔公式）

$$
\\begin{align}
P = \\frac{\\mu_0 q^2 a^2}{6\\pi c}
\\end{align}
$$

角分布：$\\dfrac{\\mathrm{d}P}{\\mathrm{d}\\Omega} = \\dfrac{\\mu_0 q^2 a^2}{16\\pi^2 c}\\sin^2\\theta$。

### 相对论（李纳公式）

$$
\\begin{align}
P = \\frac{\\mu_0 q^2\\gamma^6}{6\\pi c}\\left(a^2 - \\frac{|\\boldsymbol{v}\\times\\boldsymbol{a}|^2}{c^2}\\right)
\\end{align}
$$

**特殊情况**：

- $\\boldsymbol{v}\\parallel\\boldsymbol{a}$（直线加速/减速）：$P = \\dfrac{\\mu_0 q^2 a^2\\gamma^6}{6\\pi c}$，角分布 $\\dfrac{\\mathrm{d}P}{\\mathrm{d}\\Omega} = \\dfrac{\\mu_0 q^2 a^2}{16\\pi^2 c}\\dfrac{\\sin^2\\theta}{(1-\\beta\\cos\\theta)^5}$，辐射向前集中（轫致辐射）。
- $\\boldsymbol{v}\\perp\\boldsymbol{a}$（圆周运动）：同步辐射，同样向前集中。

## 辐射反作用力

**阿布拉罕-洛伦兹公式**（非相对论）：

$$
\\begin{align}
\\boldsymbol{F}_{\\text{rad}} = \\frac{\\mu_0 q^2}{6\\pi c}\\dot{\\boldsymbol{a}}
\\end{align}
$$

**问题**：导致超前效应（预加速度）和 runaway 解。在周期性运动中，该力满足能量守恒。

**辐射阻尼**：在简谐运动中，阻尼因子 $\\gamma_{\\text{rad}} = \\omega^2\\tau$，其中 $\\tau = \\dfrac{\\mu_0 q^2}{6\\pi mc}$。
`,t={title:"辐射",author:"NeoWangKing",date:new Date(17796672e5),lastMod:new Date(17828208e5),tags:["物理","电动力学","辐射","拉莫尔公式","辐射反作用"],category:["物理","电动力学"],summary:"本文系统介绍电磁辐射理论，包括电偶极辐射、磁偶极辐射、任意源的辐射、运动点电荷的辐射（拉莫尔公式和李纳公式）以及辐射反作用力。",comments:!0,draft:!1,sticky:0},d={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/12-Radiation.md",rawData:void 0};export{d as _internal,l as body,a as collection,t as data,n as id,o as slug};
