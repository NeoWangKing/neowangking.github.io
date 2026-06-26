const n="physics/TheoreticalMechanics/23-Continuous-Systems-and-Schrodinger-Equation.md",a="posts",t="physics/theoreticalmechanics/23-continuous-systems-and-schrodinger-equation",l=`
## 从离散到连续

在分析力学中，有限自由度的体系用广义坐标 $q_\\alpha(t)$ 描述。对于连续体系（如弹性棒、流体、电磁场），自由度是无穷多的，需要用空间连续的力学变量 $\\eta(\\boldsymbol{x}, t)$ 来描述。

从离散到连续的过渡：

- 离散：$q_\\alpha(t)$，$\\alpha = 1,2,\\dots,s$
- 连续：$\\eta(\\boldsymbol{x}, t)$，$\\boldsymbol{x}$ 连续取值

## 一维弹性棒的纵振动

### 离散模型

考虑一维晶格的纵振动，第 $n$ 个原子的运动方程为

$$
\\begin{align}
m \\ddot{u}_n = k(u_{n+1} - 2u_n + u_{n-1})
\\end{align}
$$

简正模式为

$$
\\begin{align}
u_n(t) = A e^{\\mathrm{i}(qna - \\omega t)}
\\end{align}
$$

色散关系为

$$
\\begin{align}
\\omega^2 = \\frac{4k}{m} \\sin^2\\left(\\frac{qa}{2}\\right)
\\end{align}
$$

### 连续极限

当波长远大于晶格常数 $a$ 时（$qa \\ll 1$），色散关系近似为 $\\omega \\approx \\sqrt{k/m}\\, a q$，声速 $v = a\\sqrt{k/m}$。

在连续极限下，用位移场 $u(x,t)$ 描述弹性棒的纵振动。动能和势能分别为

$$
\\begin{align}
T &= \\frac{1}{2} \\int_0^l \\rho \\dot{u}^2 \\,\\mathrm{d}x \\\\
V &= \\frac{1}{2} \\int_0^l Y (u')^2 \\,\\mathrm{d}x
\\end{align}
$$

其中 $\\rho$ 是线密度，$Y$ 是杨氏模量。

## 拉格朗日密度

### 定义

拉格朗日函数可写为对空间的积分：

$$
\\begin{align}
L = \\int \\mathcal{L}(\\eta, \\partial_t \\eta, \\partial_x \\eta, \\dots) \\,\\mathrm{d}x
\\end{align}
$$

其中 $\\mathcal{L}$ 称为**拉格朗日密度**。

对于弹性棒的纵振动：

$$
\\begin{align}
\\mathcal{L} = \\frac{1}{2} \\rho \\dot{u}^2 - \\frac{1}{2} Y (u')^2
\\end{align}
$$

动能密度：$\\mathcal{T} = \\frac{1}{2} \\rho \\dot{u}^2$；势能密度：$\\mathcal{V} = \\frac{1}{2} Y (u')^2$。

### 三维推广

对于三维连续体系：

$$
\\begin{align}
L = \\int \\mathcal{L}(\\eta, \\partial_\\mu \\eta) \\,\\mathrm{d}^3 x
\\end{align}
$$

其中 $\\partial_\\mu \\eta = (\\partial_t \\eta, \\nabla \\eta)$。

## 连续体系的哈密顿原理

对于连续体系，哈密顿原理仍然成立：

$$
\\begin{align}
\\delta S = \\delta \\int_{t_1}^{t_2} \\int \\mathcal{L} \\,\\mathrm{d}^3 x \\,\\mathrm{d}t = 0
\\end{align}
$$

### 连续体系的拉格朗日方程

对于一维情况 $\\mathcal{L}(\\eta, \\dot{\\eta}, \\eta')$，由 $\\delta S = 0$ 可得

$$
\\begin{align}
\\frac{\\partial \\mathcal{L}}{\\partial \\eta} - \\frac{\\partial}{\\partial t} \\frac{\\partial \\mathcal{L}}{\\partial \\dot{\\eta}} - \\frac{\\partial}{\\partial x} \\frac{\\partial \\mathcal{L}}{\\partial \\eta'} = 0
\\end{align}
$$

对于三维多场 $\\eta_a$：

$$
\\begin{align}
\\frac{\\partial \\mathcal{L}}{\\partial \\eta_a} - \\partial_\\mu \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\eta_a)} = 0
\\end{align}
$$

### 例：弹性棒的波动方程

将 $\\mathcal{L} = \\frac{1}{2} \\rho \\dot{u}^2 - \\frac{1}{2} Y (u')^2$ 代入连续体系的拉格朗日方程：

- $\\partial \\mathcal{L} / \\partial u = 0$
- $\\partial \\mathcal{L} / \\partial \\dot{u} = \\rho \\dot{u}$，$\\partial_t (\\partial \\mathcal{L} / \\partial \\dot{u}) = \\rho \\ddot{u}$
- $\\partial \\mathcal{L} / \\partial u' = -Y u'$，$\\partial_x (\\partial \\mathcal{L} / \\partial u') = -Y u''$

代入得 $\\rho \\ddot{u} - Y u'' = 0$，即

$$
\\begin{align}
\\frac{\\partial^2 u}{\\partial t^2} = v^2 \\frac{\\partial^2 u}{\\partial x^2}, \\quad v = \\sqrt{\\frac{Y}{\\rho}}
\\end{align}
$$

这正是弹性波的波动方程。

## 电磁场的拉格朗日密度

电磁场也可以用拉格朗日密度描述。引入矢势 $\\boldsymbol{A}$ 和标势 $V$，电磁场的拉格朗日密度为

$$
\\begin{align}
\\mathcal{L} = \\frac{1}{2} \\epsilon_0 E^2 - \\frac{1}{2\\mu_0} B^2 - \\rho V + \\boldsymbol{J} \\cdot \\boldsymbol{A}
\\end{align}
$$

其中 $\\boldsymbol{E} = -\\nabla V - \\partial \\boldsymbol{A} / \\partial t$，$\\boldsymbol{B} = \\nabla \\times \\boldsymbol{A}$。由连续体系的拉格朗日方程可导出麦克斯韦方程组。

## 从哈密顿-雅可比方程到薛定谔方程

### 薛定谔的思路

薛定谔在建立波动力学时，将电子视为一种**物质波**。他的核心思路是从经典力学的哈密顿-雅可比方程出发，通过一个变换引入波函数。

### 氢原子的哈密顿-雅可比方程

氢原子中电子的经典哈密顿函数为

$$
\\begin{align}
H = \\frac{p^2}{2m} - \\frac{k}{r}
\\end{align}
$$

对应的哈密顿-雅可比方程为

$$
\\begin{align}
\\frac{1}{2m} (\\nabla S)^2 - \\frac{k}{r} + \\frac{\\partial S}{\\partial t} = 0
\\end{align}
$$

### 薛定谔变换

薛定谔引入变换

$$
\\begin{align}
\\psi = e^{\\mathrm{i} S / \\hbar}
\\end{align}
$$

将波函数写成作用量的指数形式。代入哈-雅方程，并保留 $\\hbar$ 的一阶项，可得到薛定谔方程。

更直接的做法：薛定谔构建了一个作用量泛函

$$
\\begin{align}
S = \\int \\mathcal{L} \\,\\mathrm{d}^3 x \\,\\mathrm{d}t
\\end{align}
$$

其中 $\\mathcal{L}$ 是电子的拉格朗日密度。对电子波函数做变分，得到薛定谔方程：

$$
\\begin{align}
\\left( -\\frac{\\hbar^2}{2m} \\nabla^2 + V \\right) \\psi = \\mathrm{i}\\hbar \\frac{\\partial \\psi}{\\partial t}
\\end{align}
$$

### 一维谐振子的薛定谔方程

一维谐振子的哈密顿函数为 $H = \\dfrac{p^2}{2m} + \\dfrac{1}{2} m \\omega^2 x^2$。对应的薛定谔方程为

$$
\\begin{align}
-\\frac{\\hbar^2}{2m} \\frac{\\mathrm{d}^2 \\psi}{\\mathrm{d}x^2} + \\frac{1}{2} m \\omega^2 x^2 \\psi = E \\psi
\\end{align}
$$

### WKB 近似

在 $\\hbar \\to 0$ 的极限下（短波长极限），薛定谔方程退化为哈密顿-雅可比方程。WKB 近似提供了连接经典力学和量子力学的半经典方法：

$$
\\begin{align}
\\psi(x) \\approx \\frac{1}{\\sqrt{p(x)}} \\exp\\left( \\pm \\frac{\\mathrm{i}}{\\hbar} \\int p(x) \\,\\mathrm{d}x \\right)
\\end{align}
$$

其中 $p(x) = \\sqrt{2m[E - V(x)]}$ 是经典动量。

## 从经典到量子的理论发展脉络

|     阶段     |                                   核心方程                                    |      关键思想      |
| :----------: | :---------------------------------------------------------------------------: | :----------------: |
|   牛顿力学   |                       $\\boldsymbol{F}=m\\boldsymbol{a}$                        | 受力分析，矢量方程 |
| 拉格朗日力学 | $\\mathrm{d}/\\mathrm{d}t(\\partial L/\\partial \\dot{q}) = \\partial L/\\partial q$ | 标量函数，广义坐标 |
|  哈密顿力学  |       $\\dot{q}=\\partial H/\\partial p$，$\\dot{p}=-\\partial H/\\partial q$       |  相空间，正则方程  |
|  哈-雅理论   |            $H(q,\\partial S/\\partial q,t)+\\partial S/\\partial t=0$             | 偏微分方程，作用量 |
|  薛定谔方程  |       $(-\\hbar^2/2m\\nabla^2 + V)\\psi = \\mathrm{i}\\hbar\\partial_t \\psi$        |   波函数，量子化   |

## 小结

- 连续体系用拉格朗日密度 $\\mathcal{L}(\\eta, \\partial_\\mu \\eta)$ 描述
- 连续体系的拉格朗日方程：$\\partial \\mathcal{L} / \\partial \\eta_a - \\partial_\\mu [\\partial \\mathcal{L} / \\partial (\\partial_\\mu \\eta_a)] = 0$
- 弹性棒的纵振动给出波动方程
- 电磁场可由拉格朗日密度描述，导出麦克斯韦方程组
- 薛定谔从哈密顿-雅可比方程出发，通过 $\\psi = e^{\\mathrm{i}S/\\hbar}$ 变换建立了波动力学
- 哈密顿理论是连接经典力学和量子力学的桥梁
`,i={title:"连续体拉格朗日方程与薛定谔方程",author:"NeoWangKing",date:new Date(1781889735e3),lastMod:new Date(1782494543e3),tags:["物理","理论力学","连续体","拉格朗日密度","薛定谔方程","量子力学"],category:["物理","理论力学"],summary:"本文介绍哈密顿理论在连续体系中的应用。从一维弹性棒的纵振动出发，引入拉格朗日密度和连续体系的哈密顿原理，推导连续体系的拉格朗日方程。并进一步展示如何从哈密顿-雅可比方程出发建立薛定谔波动方程。",comments:!0,draft:!1,sticky:0},r={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/23-Continuous-Systems-and-Schrodinger-Equation.md",rawData:void 0};export{r as _internal,l as body,a as collection,i as data,n as id,t as slug};
