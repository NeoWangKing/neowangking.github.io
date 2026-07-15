const n="physics/Electrodynamics/04-Electrostatics.md",o="posts",l="physics/electrodynamics/04-electrostatics",a=`
## 库仑定律

点电荷 $q$ 对试探电荷 $Q$ 的力为

$$
\\begin{align}
\\boldsymbol{F} = \\frac{1}{4\\pi\\epsilon_0}\\frac{qQ}{\\mathscr{r}^2}\\hat{\\boldsymbol{\\mathscr{r}}}
\\end{align}
$$

其中 $\\boldsymbol{\\mathscr{r}} = \\boldsymbol{r} - \\boldsymbol{r}'$ 是源点到场点的距离矢量。

## 电场

电场定义为 $\\boldsymbol{E} = \\boldsymbol{F}/Q$，其散度和旋度为

$$
\\begin{align}
\\nabla\\cdot\\boldsymbol{E} = \\frac{\\rho}{\\epsilon_0}, \\quad \\nabla\\times\\boldsymbol{E} = 0
\\end{align}
$$

### 连续电荷分布的电场

$$
\\begin{align}
\\boldsymbol{E}(\\boldsymbol{r}) = \\frac{1}{4\\pi\\epsilon_0}\\int \\frac{\\rho(\\boldsymbol{r}')}{\\mathscr{r}^2}\\hat{\\boldsymbol{\\mathscr{r}}}\\,\\mathrm{d}\\tau'
\\end{align}
$$

## 电势

电势 $V$ 定义为 $\\boldsymbol{E} = -\\nabla V$，满足泊松方程 $\\nabla^2 V = -\\rho/\\epsilon_0$。

点电荷的电势为 $V = \\dfrac{1}{4\\pi\\epsilon_0}\\dfrac{q}{\\mathscr{r}}$。

连续分布：

$$
\\begin{align}
V(\\boldsymbol{r}) = \\frac{1}{4\\pi\\epsilon_0}\\int \\frac{\\rho(\\boldsymbol{r}')}{\\mathscr{r}}\\,\\mathrm{d}\\tau'
\\end{align}
$$

## 高斯定律

积分形式：$\\oint \\boldsymbol{E}\\cdot\\mathrm{d}\\boldsymbol{a} = Q_{\\text{enc}}/\\epsilon_0$。

### 对称性应用

- 球对称：高斯面为同心球面。
- 柱对称：高斯面为同轴柱面。
- 平面对称：高斯面为跨平面的“药盒”。

## 导体性质

1. 导体内部 $\\boldsymbol{E}=0$。
2. 导体内部净电荷 $\\rho=0$，所有电荷分布在表面。
3. 导体是等势体。
4. 导体表面外 $\\boldsymbol{E}$ 垂直于表面。
5. 表面电荷密度 $\\sigma = -\\epsilon_0\\dfrac{\\partial V}{\\partial n}$。

## 电容

电容 $C = Q/V$。

- 平行板电容器：$C = \\epsilon_0 A/d$
- 同心球壳：$C = 4\\pi\\epsilon_0\\dfrac{ab}{b-a}$
- 同轴圆柱：$C/L = \\dfrac{2\\pi\\epsilon_0}{\\ln(b/a)}$

## 静电能

点电荷系统的静电能：

$$
\\begin{align}
W = \\frac{1}{2}\\sum_{i=1}^n q_i V(\\boldsymbol{r}_i)
\\end{align}
$$

连续电荷分布：

$$
\\begin{align}
W = \\frac{1}{2}\\int \\rho V\\,\\mathrm{d}\\tau = \\frac{\\epsilon_0}{2}\\int E^2\\,\\mathrm{d}\\tau
\\end{align}
$$
`,s={title:"静电学",author:"NeoWangKing",date:new Date(1774224e6),lastMod:new Date(17828208e5),tags:["物理","电动力学","静电学","库仑定律"],category:["物理","电动力学"],summary:"本文系统整理静电学的基础知识，包括库仑定律、电场、电势、高斯定律、导体性质、电容以及静电能。",comments:!0,draft:!1,sticky:0,chapter:4},t={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/04-Electrostatics.md",rawData:void 0};export{t as _internal,a as body,o as collection,s as data,n as id,l as slug};
