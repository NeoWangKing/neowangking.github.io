const l="physics/Electrodynamics/11-Potentials-and-Fields.md",n="posts",o="physics/electrodynamics/11-potentials-and-fields",b=`
## 矢势与标势

由 $\\boldsymbol{B} = \\nabla \\times \\boldsymbol{A}$ 代入法拉第定律 $\\nabla \\times \\boldsymbol{E} = -\\partial\\boldsymbol{B}/\\partial t$ 得

$$
\\begin{align}
\\nabla \\times \\left( \\boldsymbol{E} + \\frac{\\partial \\boldsymbol{A}}{\\partial t} \\right) = 0
\\end{align}
$$

故可引入标势 $V$ 使得

$$
\\begin{align}
\\boldsymbol{E} + \\frac{\\partial \\boldsymbol{A}}{\\partial t} = -\\nabla V
\\end{align}
$$

于是电场可表示为

$$
\\begin{align}
\\boldsymbol{E} = -\\nabla V - \\frac{\\partial \\boldsymbol{A}}{\\partial t}
\\end{align}
$$

将上述表达式代入高斯定律和安培定律，得到关于势的方程：

$$
\\begin{align}
\\nabla^2 V + \\frac{\\partial}{\\partial t}(\\nabla \\cdot \\boldsymbol{A}) &= -\\frac{1}{\\epsilon_0}\\rho \\\\
\\nabla^2 \\boldsymbol{A} - \\mu_0\\epsilon_0 \\frac{\\partial^2 \\boldsymbol{A}}{\\partial t^2} - \\nabla\\left(\\nabla \\cdot \\boldsymbol{A} + \\mu_0\\epsilon_0 \\frac{\\partial V}{\\partial t}\\right) &= -\\mu_0 \\boldsymbol{J}
\\end{align}
$$

## 规范变换

势 $(\\boldsymbol{A}, V)$ 的选取不是唯一的，可作如下变换而不改变电场和磁场：

$$
\\begin{align}
\\boldsymbol{A}' = \\boldsymbol{A} + \\nabla\\lambda, \\quad V' = V - \\frac{\\partial\\lambda}{\\partial t}
\\end{align}
$$

其中 $\\lambda$ 是任意标量函数。这种变换称为**规范变换**。

## 洛伦兹规范

选择洛伦兹规范

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{A} + \\mu_0\\epsilon_0 \\frac{\\partial V}{\\partial t} = 0
\\end{align}
$$

则势的方程解耦为达朗贝尔方程

$$
\\begin{align}
\\Box^2 V \\equiv \\nabla^2 V - \\mu_0\\epsilon_0 \\frac{\\partial^2 V}{\\partial t^2} &= -\\frac{1}{\\epsilon_0}\\rho \\\\
\\Box^2 \\boldsymbol{A} \\equiv \\nabla^2 \\boldsymbol{A} - \\mu_0\\epsilon_0 \\frac{\\partial^2 \\boldsymbol{A}}{\\partial t^2} &= -\\mu_0 \\boldsymbol{J}
\\end{align}
$$

## 推迟势

达朗贝尔方程的解为推迟势

$$
\\begin{align}
V(\\boldsymbol{r}, t) = \\frac{1}{4\\pi\\epsilon_0} \\int \\frac{\\rho(\\boldsymbol{r}', t_r)}{|\\boldsymbol{r} - \\boldsymbol{r}'|} \\,\\mathrm{d}\\tau', \\quad \\boldsymbol{A}(\\boldsymbol{r}, t) = \\frac{\\mu_0}{4\\pi} \\int \\frac{\\boldsymbol{J}(\\boldsymbol{r}', t_r)}{|\\boldsymbol{r} - \\boldsymbol{r}'|} \\,\\mathrm{d}\\tau'
\\end{align}
$$

其中 $t_r = t - |\\boldsymbol{r} - \\boldsymbol{r}'|/c$ 为**推迟时间**，表示场点处的势由源在更早时刻的状态决定。

## 实例：点电荷的突然出现与消失

设点电荷 $q$ 在 $t=t_1$ 时出现在 $\\boldsymbol{r}_0$，$t=t_2$ 时消失。由推迟势可得电势分布为

$$
\\begin{align}
V(\\boldsymbol{r},t) = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{|\\boldsymbol{r}-\\boldsymbol{r}_0|}, \\quad c(t-t_2) \\le |\\boldsymbol{r}-\\boldsymbol{r}_0| \\le c(t-t_1)
\\end{align}
$$

在球壳内电势与静电场相同，球壳外电势为零。这清晰地展示了电磁信号以光速传播的物理图像。

## 实例：无限长直导线的瞬态电流

设无限长直导线沿 $z$ 轴，$t=0$ 时接通恒定电流 $I_0$。由推迟势计算矢势（取圆柱坐标 $s$）

$$
\\begin{align}
A_z(s,t) = \\frac{\\mu_0 I_0}{2\\pi} \\ln\\left(\\frac{ct + \\sqrt{(ct)^2 - s^2}}{s}\\right), \\quad s < ct
\\end{align}
$$

电场和磁场分别为

$$
\\begin{align}
E_z(s,t) = -\\frac{\\partial A_z}{\\partial t} = -\\frac{\\mu_0 I_0 c}{2\\pi\\sqrt{(ct)^2 - s^2}}, \\quad B_\\phi(s,t) = -\\frac{\\partial A_z}{\\partial s} = \\frac{\\mu_0 I_0}{2\\pi s}\\frac{ct}{\\sqrt{(ct)^2 - s^2}}
\\end{align}
$$

## 杰斐缅柯方程

由推迟势直接计算电场和磁场，得到杰斐缅柯方程

$$
\\begin{align}
\\boldsymbol{E}(\\boldsymbol{r},t) &= \\frac{1}{4\\pi\\epsilon_0} \\int \\left[ \\frac{\\rho(\\boldsymbol{r}',t_r)}{|\\boldsymbol{r}-\\boldsymbol{r}'|^2} \\hat{\\boldsymbol{\\mathcal{R}}} + \\frac{\\dot{\\rho}(\\boldsymbol{r}',t_r)}{c|\\boldsymbol{r}-\\boldsymbol{r}'|} \\hat{\\boldsymbol{\\mathcal{R}}} - \\frac{\\dot{\\boldsymbol{J}}(\\boldsymbol{r}',t_r)}{c^2|\\boldsymbol{r}-\\boldsymbol{r}'|} \\right] \\mathrm{d}\\tau' \\\\
\\boldsymbol{B}(\\boldsymbol{r},t) &= \\frac{\\mu_0}{4\\pi} \\int \\left[ \\frac{\\boldsymbol{J}(\\boldsymbol{r}',t_r)}{|\\boldsymbol{r}-\\boldsymbol{r}'|^2} + \\frac{\\dot{\\boldsymbol{J}}(\\boldsymbol{r}',t_r)}{c|\\boldsymbol{r}-\\boldsymbol{r}'|} \\right] \\times \\hat{\\boldsymbol{\\mathcal{R}}} \\,\\mathrm{d}\\tau'
\\end{align}
$$

其中 $\\boldsymbol{\\mathcal{R}} = \\boldsymbol{r} - \\boldsymbol{r}'$，$\\hat{\\boldsymbol{\\mathcal{R}}} = \\boldsymbol{\\mathcal{R}}/|\\boldsymbol{\\mathcal{R}}|$。注意电场和磁场不能简单地将推迟电荷密度和电流密度代入静电场和静磁场公式，还需包含 $\\dot{\\rho}$ 和 $\\dot{\\boldsymbol{J}}$ 的贡献。

## 准静态近似

当 $\\dot{\\boldsymbol{J}}/(c|\\boldsymbol{J}|) \\ll 1$ 时，可忽略推迟效应，回到静磁学公式。这一条件等价于电流的变化足够缓慢，使得电磁信号传播时间远小于变化周期。

## 运动点电荷的李纳-维谢尔势

设点电荷 $q$ 沿轨迹 $\\boldsymbol{w}(t)$ 运动。推迟势中的积分需考虑 $\\delta$ 函数的雅可比因子。对于三维情况，结果为

$$
\\begin{align}
V(\\boldsymbol{r},t) = \\frac{1}{4\\pi\\epsilon_0} \\frac{q}{\\mathcal{R}} \\frac{1}{1 - \\hat{\\boldsymbol{\\mathcal{R}}} \\cdot \\boldsymbol{v}/c}, \\quad \\boldsymbol{A}(\\boldsymbol{r},t) = \\frac{\\boldsymbol{v}}{c^2} V(\\boldsymbol{r},t)
\\end{align}
$$

其中 $\\boldsymbol{\\mathcal{R}} = \\boldsymbol{r} - \\boldsymbol{w}(t_r)$，$\\boldsymbol{v} = \\dot{\\boldsymbol{w}}(t_r)$，所有量均在推迟时刻 $t_r$ 取值。$t_r$ 由方程 $t_r = t - |\\boldsymbol{r} - \\boldsymbol{w}(t_r)|/c$ 隐式定义。

## 匀速运动点电荷的场

当点电荷以恒定速度 $\\boldsymbol{v}$ 运动时，可由李纳-维谢尔势导出电场

$$
\\begin{align}
\\boldsymbol{E} = \\frac{q}{4\\pi\\epsilon_0} \\frac{1 - v^2/c^2}{(1 - v^2\\sin^2\\theta/c^2)^{3/2}} \\frac{\\hat{\\boldsymbol{R}}}{R^2}
\\end{align}
$$

其中 $\\boldsymbol{R}$ 是从电荷当前位置指向场点的矢量，$\\theta$ 是 $\\boldsymbol{R}$ 与 $\\boldsymbol{v}$ 的夹角。磁场为 $\\boldsymbol{B} = (\\boldsymbol{v}/c^2) \\times \\boldsymbol{E}$。

## 加速运动点电荷的场

对于一般运动，电场分为速度场（随动库仑场，与 $1/R^2$ 成正比）和加速度场（辐射场，与 $1/R$ 成正比）：

$$
\\begin{align}
\\boldsymbol{E} = \\frac{q}{4\\pi\\epsilon_0} \\frac{1}{\\mathcal{R}^2} \\frac{1}{(1 - \\hat{\\boldsymbol{\\mathcal{R}}} \\cdot \\boldsymbol{v}/c)^3} \\left[ \\left(1 - \\frac{v^2}{c^2}\\right) \\hat{\\boldsymbol{\\mathcal{R}}} + \\frac{\\hat{\\boldsymbol{\\mathcal{R}}} \\times (\\hat{\\boldsymbol{\\mathcal{R}}} \\times \\boldsymbol{a})}{c^2} \\right]
\\end{align}
$$

其中 $\\boldsymbol{a} = \\dot{\\boldsymbol{v}}(t_r)$ 为推迟加速度。辐射场（第二项）是产生电磁辐射的根源。
`,a={title:"势与场",author:"NeoWangKing",date:new Date(1780131313e3),lastMod:new Date(1780131322e3),tags:["物理","电动力学","矢势","标势","推迟势","李纳-维谢尔势","运动电荷"],category:["物理","电动力学"],summary:"本文讨论时变电磁场的势表示。从矢势和标势出发，引入洛伦兹规范得到达朗贝尔方程及其推迟势解。通过具体例子（点电荷的突然出现与消失、无限长直导线的瞬态电流）说明推迟势的物理意义。给出杰斐缅柯方程、准静态近似条件，并详细推导运动点电荷的李纳-维谢尔势及其场。",comments:!0,draft:!1,sticky:0},t={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/11-Potentials-and-Fields.md",rawData:void 0};export{t as _internal,b as body,n as collection,a as data,l as id,o as slug};
