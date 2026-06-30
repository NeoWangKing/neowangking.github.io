const l="physics/Electrodynamics/11-Potentials-and-Fields.md",o="posts",n="physics/electrodynamics/11-potentials-and-fields",b=`
## 矢势与标势

由 $\\boldsymbol{B} = \\nabla \\times \\boldsymbol{A}$ 和法拉第定律得

$$
\\begin{align}
\\boldsymbol{E} = -\\nabla V - \\frac{\\partial \\boldsymbol{A}}{\\partial t}
\\end{align}
$$

代入麦克斯韦方程组：

$$
\\begin{align}
\\nabla^2 V + \\frac{\\partial}{\\partial t}(\\nabla \\cdot \\boldsymbol{A}) &= -\\frac{1}{\\epsilon_0}\\rho
\\end{align}
$$

$$
\\begin{align}
\\nabla^2 \\boldsymbol{A} - \\mu_0\\epsilon_0 \\frac{\\partial^2 \\boldsymbol{A}}{\\partial t^2} - \\nabla\\left(\\nabla \\cdot \\boldsymbol{A} + \\mu_0\\epsilon_0 \\frac{\\partial V}{\\partial t}\\right) &= -\\mu_0 \\boldsymbol{J}
\\end{align}
$$

## 洛伦兹规范与达朗贝尔方程

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{A} + \\mu_0\\epsilon_0 \\frac{\\partial V}{\\partial t} = 0
\\end{align}
$$

$$
\\begin{align}
\\Box^2 V = -\\frac{1}{\\epsilon_0}\\rho, \\quad \\Box^2 \\boldsymbol{A} = -\\mu_0 \\boldsymbol{J}, \\quad \\Box^2 = \\nabla^2 - \\mu_0\\epsilon_0 \\frac{\\partial^2}{\\partial t^2}
\\end{align}
$$

## 推迟势

$$
\\begin{align}
V(\\boldsymbol{r}, t) = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{\\rho(\\boldsymbol{r}', t_r)}{|\\boldsymbol{r} - \\boldsymbol{r}'|} \\,\\mathrm{d}\\tau'
\\end{align}
$$

$$
\\begin{align}
\\boldsymbol{A}(\\boldsymbol{r}, t) = \\frac{\\mu_0}{4\\pi} \\int \\frac{\\boldsymbol{J}(\\boldsymbol{r}', t_r)}{|\\boldsymbol{r} - \\boldsymbol{r}'|} \\,\\mathrm{d}\\tau'
\\end{align}
$$

其中 $t_r = t - |\\boldsymbol{r} - \\boldsymbol{r}'|/c$ 为**推迟时间**。

## 杰斐缅柯方程

$$
\\begin{align}
\\boldsymbol{E}(\\boldsymbol{r},t) = \\frac{1}{4\\pi\\epsilon_0} \\int \\left[ \\frac{\\rho(\\boldsymbol{r}',t_r)}{|\\boldsymbol{r}-\\boldsymbol{r}'|^2} \\hat{\\boldsymbol{\\mathcal{R}}} + \\frac{\\dot{\\rho}(\\boldsymbol{r}',t_r)}{c|\\boldsymbol{r}-\\boldsymbol{r}'|} \\hat{\\boldsymbol{\\mathcal{R}}} - \\frac{\\dot{\\boldsymbol{J}}(\\boldsymbol{r}',t_r)}{c^2|\\boldsymbol{r}-\\boldsymbol{r}'|} \\right] \\mathrm{d}\\tau'
\\end{align}
$$

$$
\\begin{align}
\\boldsymbol{B}(\\boldsymbol{r},t) = \\frac{\\mu_0}{4\\pi} \\int \\left[ \\frac{\\boldsymbol{J}(\\boldsymbol{r}',t_r)}{|\\boldsymbol{r}-\\boldsymbol{r}'|^2} + \\frac{\\dot{\\boldsymbol{J}}(\\boldsymbol{r}',t_r)}{c|\\boldsymbol{r}-\\boldsymbol{r}'|} \\right] \\times \\hat{\\boldsymbol{\\mathcal{R}}} \\,\\mathrm{d}\\tau'
\\end{align}
$$

其中 $\\boldsymbol{\\mathcal{R}} = \\boldsymbol{r} - \\boldsymbol{r}'$，$\\hat{\\boldsymbol{\\mathcal{R}}} = \\boldsymbol{\\mathcal{R}}/|\\boldsymbol{\\mathcal{R}}|$。

## 准静态近似

当 $\\dot{\\boldsymbol{J}}/(c|\\boldsymbol{J}|) \\ll 1$ 时，可忽略推迟效应，回到静磁学公式。

## 李纳-维谢尔势

运动点电荷 $q$ 沿轨迹 $\\boldsymbol{w}(t)$ 运动：

$$
\\begin{align}
V(\\boldsymbol{r},t) = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{\\mathcal{R}} \\frac{1}{1 - \\hat{\\boldsymbol{\\mathcal{R}}} \\cdot \\boldsymbol{v}/c}
\\end{align}
$$

$$
\\begin{align}
\\boldsymbol{A}(\\boldsymbol{r},t) = \\frac{\\boldsymbol{v}}{c^2} V(\\boldsymbol{r},t)
\\end{align}
$$

其中 $\\boldsymbol{\\mathcal{R}} = \\boldsymbol{r} - \\boldsymbol{w}(t_r)$，$\\boldsymbol{v} = \\dot{\\boldsymbol{w}}(t_r)$，$t_r$ 由 $t_r = t - |\\boldsymbol{r} - \\boldsymbol{w}(t_r)|/c$ 隐式定义。

### 匀速运动点电荷的场

$$
\\begin{align}
\\boldsymbol{E} = \\frac{q}{4\\pi\\epsilon_0} \\frac{1 - v^2/c^2}{(1 - v^2\\sin^2\\theta/c^2)^{3/2}} \\frac{\\hat{\\boldsymbol{R}}}{R^2}, \\quad \\boldsymbol{B} = \\frac{\\boldsymbol{v}}{c^2} \\times \\boldsymbol{E}
\\end{align}
$$

### 加速运动点电荷的场

$$
\\begin{align}
\\boldsymbol{E} = \\frac{q}{4\\pi\\epsilon_0} \\frac{1}{\\mathcal{R}^2} \\frac{1}{(1 - \\hat{\\boldsymbol{\\mathcal{R}}} \\cdot \\boldsymbol{v}/c)^3} \\left[ \\left(1 - \\frac{v^2}{c^2}\\right) \\hat{\\boldsymbol{\\mathcal{R}}} + \\frac{\\hat{\\boldsymbol{\\mathcal{R}}} \\times (\\hat{\\boldsymbol{\\mathcal{R}}} \\times \\boldsymbol{a})}{c^2} \\right]
\\end{align}
$$
`,a={title:"势与场",author:"NeoWangKing",date:new Date(17786304e5),lastMod:new Date(1782819419e3),tags:["物理","电动力学","矢势","标势","推迟势","李纳-维谢尔势","运动电荷"],category:["物理","电动力学"],summary:"本文讨论时变电磁场的势表示。从矢势和标势出发，引入洛伦兹规范得到达朗贝尔方程及其推迟势解。给出杰斐缅柯方程、准静态近似条件，并详细推导运动点电荷的李纳-维谢尔势及其场。",comments:!0,draft:!1,sticky:0},t={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/11-Potentials-and-Fields.md",rawData:void 0};export{t as _internal,b as body,o as collection,a as data,l as id,n as slug};
