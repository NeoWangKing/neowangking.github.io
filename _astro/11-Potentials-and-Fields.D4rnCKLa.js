const l="physics/Electrodynamics/11-Potentials-and-Fields.md",o="posts",n="physics/electrodynamics/11-potentials-and-fields",b=`
## 标势和矢势

由 $\\nabla\\cdot\\boldsymbol{B}=0$ 引入矢势 $\\boldsymbol{A}$，$\\boldsymbol{B} = \\nabla\\times\\boldsymbol{A}$。

由法拉第定律引入标势 $V$，$\\boldsymbol{E} = -\\nabla V - \\dfrac{\\partial\\boldsymbol{A}}{\\partial t}$。

## 规范变换

物理量 $\\boldsymbol{E}$ 和 $\\boldsymbol{B}$ 在以下变换下不变：

$$
\\begin{align}
\\boldsymbol{A}' = \\boldsymbol{A} + \\nabla\\lambda, \\quad V' = V - \\frac{\\partial\\lambda}{\\partial t}
\\end{align}
$$

### 洛伦兹规范

$$
\\begin{align}
\\nabla\\cdot\\boldsymbol{A} + \\mu_0\\epsilon_0\\frac{\\partial V}{\\partial t} = 0
\\end{align}
$$

在该规范下，$\\boldsymbol{A}$ 和 $V$ 满足非齐次波动方程：

$$
\\begin{align}
\\Box^2 V = -\\frac{\\rho}{\\epsilon_0}, \\quad \\Box^2 \\boldsymbol{A} = -\\mu_0\\boldsymbol{J}
\\end{align}
$$

其中 $\\Box^2 = \\nabla^2 - \\dfrac{1}{c^2}\\dfrac{\\partial^2}{\\partial t^2}$ 是达朗贝尔算符。

### 库仑规范

$\\nabla\\cdot\\boldsymbol{A}=0$，$V$ 满足泊松方程（瞬时的），但 $\\boldsymbol{A}$ 的方程复杂。

## 推迟势

$$
\\begin{align}
V(\\boldsymbol{r},t) = \\frac{1}{4\\pi\\epsilon_0}\\int \\frac{\\rho(\\boldsymbol{r}',t_r)}{\\mathscr{r}}\\,\\mathrm{d}\\tau', \\quad \\boldsymbol{A}(\\boldsymbol{r},t) = \\frac{\\mu_0}{4\\pi}\\int \\frac{\\boldsymbol{J}(\\boldsymbol{r}',t_r)}{\\mathscr{r}}\\,\\mathrm{d}\\tau'
\\end{align}
$$

其中 $t_r = t - \\mathscr{r}/c$ 是推迟时间。

## 杰菲缅科方程

电场和磁场的显式表达式：

$$
\\begin{align}
\\boldsymbol{E}(\\boldsymbol{r},t) = \\frac{1}{4\\pi\\epsilon_0}\\int \\left[\\frac{\\rho(\\boldsymbol{r}',t_r)}{\\mathscr{r}^2}\\hat{\\boldsymbol{\\mathscr{r}}} + \\frac{\\dot{\\rho}(\\boldsymbol{r}',t_r)}{c\\mathscr{r}}\\hat{\\boldsymbol{\\mathscr{r}}} - \\frac{\\dot{\\boldsymbol{J}}(\\boldsymbol{r}',t_r)}{c^2\\mathscr{r}}\\right]\\mathrm{d}\\tau'
\\end{align}
$$

$$
\\begin{align}
\\boldsymbol{B}(\\boldsymbol{r},t) = \\frac{\\mu_0}{4\\pi}\\int \\left[\\frac{\\boldsymbol{J}(\\boldsymbol{r}',t_r)}{\\mathscr{r}^2} + \\frac{\\dot{\\boldsymbol{J}}(\\boldsymbol{r}',t_r)}{c\\mathscr{r}}\\right]\\times\\hat{\\boldsymbol{\\mathscr{r}}}\\,\\mathrm{d}\\tau'
\\end{align}
$$

## 李纳-维谢尔势

运动点电荷的势：

$$
\\begin{align}
V(\\boldsymbol{r},t) = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{\\mathscr{r}(1-\\hat{\\boldsymbol{\\mathscr{r}}}\\cdot\\boldsymbol{v}/c)}, \\quad \\boldsymbol{A}(\\boldsymbol{r},t) = \\frac{\\boldsymbol{v}}{c^2}V
\\end{align}
$$

其中 $\\boldsymbol{\\mathscr{r}} = \\boldsymbol{r} - \\boldsymbol{w}(t_r)$，$\\boldsymbol{v} = \\dot{\\boldsymbol{w}}(t_r)$。

### 运动点电荷的场

定义 $\\boldsymbol{u} = c\\hat{\\boldsymbol{\\mathscr{r}}} - \\boldsymbol{v}$，则

$$
\\begin{align}
\\boldsymbol{E}(\\boldsymbol{r},t) = \\frac{q}{4\\pi\\epsilon_0}\\frac{\\mathscr{r}}{(\\boldsymbol{\\mathscr{r}}\\cdot\\boldsymbol{u})^3}\\left[(c^2-v^2)\\boldsymbol{u} + \\boldsymbol{\\mathscr{r}}\\times(\\boldsymbol{u}\\times\\boldsymbol{a})\\right]
\\end{align}
$$

$$
\\begin{align}
\\boldsymbol{B}(\\boldsymbol{r},t) = \\frac{1}{c}\\hat{\\boldsymbol{\\mathscr{r}}}\\times\\boldsymbol{E}
\\end{align}
$$

其中 $\\boldsymbol{a} = \\dot{\\boldsymbol{v}}$ 是加速度（在推迟时刻）。

**速度场**（$1/r^2$ 项）和**加速度场**（$1/r$ 项，辐射场）。
`,a={title:"势和场",author:"NeoWangKing",date:new Date(17786304e5),lastMod:new Date(17828208e5),tags:["物理","电动力学","势","推迟势","李纳-维谢尔"],category:["物理","电动力学"],summary:"本文系统介绍电动力学中的标势和矢势、规范变换、推迟势、杰菲缅科方程以及运动点电荷的李纳-维谢尔势和场。",comments:!0,draft:!1,sticky:0,chapter:11},t={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/11-Potentials-and-Fields.md",rawData:void 0};export{t as _internal,b as body,o as collection,a as data,l as id,n as slug};
