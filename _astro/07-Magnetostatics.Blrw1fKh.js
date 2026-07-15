const n="physics/Electrodynamics/07-Magnetostatics.md",l="posts",o="physics/electrodynamics/07-magnetostatics",b=`
## 洛伦兹力

$$
\\begin{align}
\\boldsymbol{F} = q(\\boldsymbol{E} + \\boldsymbol{v}\\times\\boldsymbol{B})
\\end{align}
$$

磁力不做功：$\\mathrm{d}W_{\\text{mag}} = \\boldsymbol{F}_{\\text{mag}}\\cdot\\mathrm{d}\\boldsymbol{l} = 0$。

## 电流

**线电流**：$I = \\lambda v$。

**面电流密度** $\\boldsymbol{K}$：单位宽度的电流，$\\boldsymbol{K} = \\sigma \\boldsymbol{v}$。

**体电流密度** $\\boldsymbol{J}$：单位面积的电流，$\\boldsymbol{J} = \\rho \\boldsymbol{v}$。

**连续性方程**：$\\nabla\\cdot\\boldsymbol{J} = -\\dfrac{\\partial\\rho}{\\partial t}$。

## 毕奥-萨伐尔定律

线电流：

$$
\\begin{align}
\\boldsymbol{B}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi} I\\int \\frac{\\mathrm{d}\\boldsymbol{l}' \\times \\hat{\\boldsymbol{\\mathscr{r}}}}{\\mathscr{r}^2}
\\end{align}
$$

体电流：

$$
\\begin{align}
\\boldsymbol{B}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi}\\int \\frac{\\boldsymbol{J}(\\boldsymbol{r}')\\times\\hat{\\boldsymbol{\\mathscr{r}}}}{\\mathscr{r}^2}\\,\\mathrm{d}\\tau'
\\end{align}
$$

## 安培定律

微分形式：$\\nabla\\times\\boldsymbol{B} = \\mu_0\\boldsymbol{J}$

积分形式：$\\oint \\boldsymbol{B}\\cdot\\mathrm{d}\\boldsymbol{l} = \\mu_0 I_{\\text{enc}}$

**对称性应用**：无限长直导线、无限大平面、螺线管、环形螺线管。

## 矢势

$$
\\begin{align}
\\boldsymbol{B} = \\nabla\\times\\boldsymbol{A}, \\quad \\nabla\\cdot\\boldsymbol{A}=0, \\quad \\nabla^2\\boldsymbol{A} = -\\mu_0\\boldsymbol{J}
\\end{align}
$$

解：

$$
\\begin{align}
\\boldsymbol{A}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi}\\int \\frac{\\boldsymbol{J}(\\boldsymbol{r}')}{\\mathscr{r}}\\,\\mathrm{d}\\tau'
\\end{align}
$$

## 磁偶极子

**磁偶极矩**：$\\boldsymbol{m} = I\\int \\mathrm{d}\\boldsymbol{a} = \\dfrac{1}{2}\\int \\boldsymbol{r}'\\times\\boldsymbol{J}\\,\\mathrm{d}\\tau'$。

**矢势**：$\\boldsymbol{A}_{\\text{dip}} = \\dfrac{\\mu_0}{4\\pi}\\dfrac{\\boldsymbol{m}\\times\\hat{\\boldsymbol{r}}}{r^2}$

**磁场**：$\\boldsymbol{B}_{\\text{dip}} = \\dfrac{\\mu_0}{4\\pi}\\dfrac{1}{r^3}[3(\\boldsymbol{m}\\cdot\\hat{\\boldsymbol{r}})\\hat{\\boldsymbol{r}}-\\boldsymbol{m}]$

（注意在原点处有 $\\delta$ 函数项。）

## 边界条件

在面电流处：

$$
\\begin{align}
B_{\\text{above}}^\\perp &= B_{\\text{below}}^\\perp \\\\
B_{\\text{above}}^\\parallel - B_{\\text{below}}^\\parallel &= \\mu_0\\boldsymbol{K}\\times\\hat{\\boldsymbol{n}}
\\end{align}
$$
`,t={title:"静磁学",author:"NeoWangKing",date:new Date(17760384e5),lastMod:new Date(17828208e5),tags:["物理","电动力学","静磁学","安培定律","矢势"],category:["物理","电动力学"],summary:"本文系统整理静磁学的基础知识，包括洛伦兹力、电流、毕奥-萨伐尔定律、安培定律、矢势以及磁偶极子。",comments:!0,draft:!1,sticky:0,chapter:7},m={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/07-Magnetostatics.md",rawData:void 0};export{m as _internal,b as body,l as collection,t as data,n as id,o as slug};
