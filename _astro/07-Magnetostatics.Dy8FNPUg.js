const n="physics/Electrodynamics/07-Magnetostatics.md",l="posts",o="physics/electrodynamics/07-magnetostatics",b=`
## 洛伦兹力

运动电荷在电磁场中的受力：

$$
\\begin{align}
\\boldsymbol{F} = q(\\boldsymbol{E} + \\boldsymbol{v} \\times \\boldsymbol{B})
\\end{align}
$$

## 毕奥-萨伐尔定律

线电流：

$$
\\begin{align}
\\boldsymbol{B}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi} \\int \\frac{I \\mathrm{d}\\boldsymbol{l}' \\times \\hat{\\boldsymbol{r}}''}{r''^2}
\\end{align}
$$

体电流：

$$
\\begin{align}
\\boldsymbol{B}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi} \\int \\frac{\\boldsymbol{J}(\\boldsymbol{r}') \\times \\hat{\\boldsymbol{r}}''}{r''^2} \\,\\mathrm{d}\\tau'
\\end{align}
$$

面电流：

$$
\\begin{align}
\\boldsymbol{B}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi} \\int \\frac{\\boldsymbol{K}(\\boldsymbol{r}') \\times \\hat{\\boldsymbol{r}}''}{r''^2} \\,\\mathrm{d}a'
\\end{align}
$$

## 磁场的基本性质

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{B} = 0, \\quad \\oint \\boldsymbol{B} \\cdot \\mathrm{d}\\boldsymbol{a} = 0
\\end{align}
$$

安培定律：

$$
\\begin{align}
\\nabla \\times \\boldsymbol{B} = \\mu_0 \\boldsymbol{J}, \\quad \\oint \\boldsymbol{B} \\cdot \\mathrm{d}\\boldsymbol{l} = \\mu_0 I_{\\text{enc}}
\\end{align}
$$

## 典型电流分布的磁场

**无限长直导线**：

$$
\\begin{align}
\\boldsymbol{B} = \\frac{\\mu_0 I}{2\\pi s} \\hat{\\boldsymbol{\\phi}}
\\end{align}
$$

**圆形载流环（轴线上）**：

$$
\\begin{align}
B(z) = \\frac{\\mu_0 I R^2}{2(R^2 + z^2)^{3/2}}
\\end{align}
$$

**无限大平面电流**：

$$
\\begin{align}
\\boldsymbol{B} = \\begin{cases}
\\frac{\\mu_0}{2} K \\hat{\\boldsymbol{y}}, & z < 0 \\\\
-\\frac{\\mu_0}{2} K \\hat{\\boldsymbol{y}}, & z > 0
\\end{cases}
\\end{align}
$$

**长直螺线管**：

$$
\\begin{align}
\\boldsymbol{B} = \\mu_0 n I \\hat{\\boldsymbol{z}}
\\end{align}
$$

## 磁矢势

$$
\\begin{align}
\\boldsymbol{B} = \\nabla \\times \\boldsymbol{A}, \\quad \\nabla \\cdot \\boldsymbol{A} = 0, \\quad \\nabla^2 \\boldsymbol{A} = -\\mu_0 \\boldsymbol{J}
\\end{align}
$$

解：

$$
\\begin{align}
\\boldsymbol{A}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi} \\int \\frac{\\boldsymbol{J}(\\boldsymbol{r}')}{|\\boldsymbol{r} - \\boldsymbol{r}'|} \\,\\mathrm{d}\\tau'
\\end{align}
$$

## 磁偶极子

磁偶极矩 $\\boldsymbol{m} = I \\boldsymbol{a}$。

磁矢势的偶极项：

$$
\\begin{align}
\\boldsymbol{A}_{\\text{dip}}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi} \\frac{\\boldsymbol{m} \\times \\hat{\\boldsymbol{r}}}{r^2}
\\end{align}
$$

偶极子的磁场：

$$
\\begin{align}
\\boldsymbol{B}_{\\text{dip}}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi} \\frac{1}{r^3} [3(\\boldsymbol{m} \\cdot \\hat{\\boldsymbol{r}})\\hat{\\boldsymbol{r}} - \\boldsymbol{m}]
\\end{align}
$$

## 边界条件

在面电流 $\\boldsymbol{K}$ 存在的分界面上：

$$
\\begin{align}
\\boldsymbol{B}_{\\text{above}} - \\boldsymbol{B}_{\\text{below}} = \\mu_0 (\\boldsymbol{K} \\times \\hat{\\boldsymbol{n}}), \\quad B_{\\text{above}\\perp} = B_{\\text{below}\\perp}
\\end{align}
$$
`,a={title:"静磁场",author:"NeoWangKing",date:new Date(17760384e5),lastMod:new Date(17828316e5),tags:["物理","电动力学","静磁场","毕奥-萨伐尔定律","安培定律","磁矢势"],category:["物理","电动力学"],summary:"本文介绍静磁场的基本理论，包括洛伦兹力、毕奥-萨伐尔定律、安培定律、磁矢势、磁偶极子以及多极展开。",comments:!0,draft:!1,sticky:0},m={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/07-Magnetostatics.md",rawData:void 0};export{m as _internal,b as body,l as collection,a as data,n as id,o as slug};
