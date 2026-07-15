const n="physics/TheoreticalMechanics/09-Hamiltonian-Applications.md",a="posts",t="physics/theoreticalmechanics/09-hamiltonian-applications",l=`
## 从离散到连续

在分析力学中，有限自由度的体系用广义坐标 $q_\\alpha(t)$ 描述。对于连续体系（如弹性棒、电磁场、流体），自由度是无穷多的，需要用空间连续的力学变量 $\\eta(\\boldsymbol{x}, t)$ 来描述。

### 离散到连续的过渡

- 离散：$q_\\alpha(t)$，$\\alpha = 1,2,\\dots,s$
- 连续：$\\eta(\\boldsymbol{x}, t)$，$\\boldsymbol{x}$ 连续取值

## 连续体系的拉格朗日描述

### 拉格朗日密度

拉格朗日函数可写为对空间的积分：

$$
\\begin{align}
L = \\int \\mathcal{L}(\\eta, \\partial_t \\eta, \\partial_x \\eta, \\dots) \\,\\mathrm{d}^3 x
\\end{align}
$$

其中 $\\mathcal{L}$ 称为**拉格朗日密度**。

对于一维弹性棒的纵振动：

$$
\\begin{align}
\\mathcal{L} = \\frac{1}{2} \\rho \\dot{u}^2 - \\frac{1}{2} Y (u')^2
\\end{align}
$$

动能密度 $\\mathcal{T} = \\frac{1}{2} \\rho \\dot{u}^2$，势能密度 $\\mathcal{V} = \\frac{1}{2} Y (u')^2$。

### 连续体系的哈密顿原理

对于连续体系，哈密顿原理仍然成立：

$$
\\begin{align}
\\delta S = \\delta \\int_{t_1}^{t_2} \\int \\mathcal{L} \\,\\mathrm{d}^3 x \\,\\mathrm{d}t = 0
\\end{align}
$$

### 连续体系的拉格朗日方程

对于三维多场 $\\eta_a$：

$$
\\begin{align}
\\frac{\\partial \\mathcal{L}}{\\partial \\eta_a} - \\partial_\\mu \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\eta_a)} = 0
\\end{align}
$$

其中 $\\partial_\\mu \\eta_a = (\\partial_t \\eta_a, \\nabla \\eta_a)$。

### 应用：弹性棒的波动方程

将 $\\mathcal{L} = \\frac{1}{2} \\rho \\dot{u}^2 - \\frac{1}{2} Y (u')^2$ 代入连续体系的拉格朗日方程：

$$
\\begin{align}
\\rho \\ddot{u} - Y u'' = 0
\\end{align}
$$

即波动方程：

$$
\\begin{align}
\\frac{\\partial^2 u}{\\partial t^2} = v^2 \\frac{\\partial^2 u}{\\partial x^2}, \\quad v = \\sqrt{\\frac{Y}{\\rho}}
\\end{align}
$$

## 电磁场的拉格朗日密度

电磁场的拉格朗日密度为

$$
\\begin{align}
\\mathcal{L} = \\frac{1}{2} \\epsilon_0 E^2 - \\frac{1}{2\\mu_0} B^2 - \\rho V + \\boldsymbol{J} \\cdot \\boldsymbol{A}
\\end{align}
$$

其中 $\\boldsymbol{E} = -\\nabla V - \\partial \\boldsymbol{A} / \\partial t$，$\\boldsymbol{B} = \\nabla \\times \\boldsymbol{A}$。由连续体系的拉格朗日方程可导出麦克斯韦方程组。

## 从哈密顿-雅可比方程到薛定谔方程

### 薛定谔的思路

薛定谔将电子视为一种**物质波**，从经典力学的哈密顿-雅可比方程出发，通过变换引入波函数。

### 薛定谔变换

引入变换：

$$
\\begin{align}
\\psi = e^{\\mathrm{i} S / \\hbar}
\\end{align}
$$

其中 $S$ 是哈密顿主函数。代入哈-雅方程，可得到薛定谔方程。

### 氢原子的薛定谔方程

氢原子中电子的经典哈密顿函数为

$$
\\begin{align}
H = \\frac{p^2}{2m} - \\frac{k}{r}
\\end{align}
$$

对应的薛定谔方程为

$$
\\begin{align}
\\left( -\\frac{\\hbar^2}{2m} \\nabla^2 - \\frac{k}{r} \\right) \\psi = E \\psi
\\end{align}
$$

### 一维谐振子的薛定谔方程

从一维谐振子的哈密顿函数 $H = \\dfrac{p^2}{2m} + \\dfrac{1}{2} m \\omega^2 x^2$ 出发，做薛定谔变换可得

$$
\\begin{align}
-\\frac{\\hbar^2}{2m} \\frac{\\mathrm{d}^2 \\psi}{\\mathrm{d}x^2} + \\frac{1}{2} m \\omega^2 x^2 \\psi = E \\psi
\\end{align}
$$

### WKB 近似

在 $\\hbar \\to 0$ 的极限下（短波长极限），薛定谔方程退化为哈密顿-雅可比方程。WKB 近似提供半经典方法：

$$
\\begin{align}
\\psi(x) \\approx \\frac{1}{\\sqrt{p(x)}} \\exp\\left( \\pm \\frac{\\mathrm{i}}{\\hbar} \\int p(x) \\,\\mathrm{d}x \\right)
\\end{align}
$$

其中 $p(x) = \\sqrt{2m[E - V(x)]}$。

## 从经典到量子的理论发展脉络

|     阶段     |                                              核心方程                                               |      关键思想      |
| :----------: | :-------------------------------------------------------------------------------------------------: | :----------------: |
|   牛顿力学   |                                 $\\boldsymbol{F} = m\\boldsymbol{a}$                                  | 受力分析，矢量方程 |
| 拉格朗日力学 | $\\frac{\\mathrm{d}}{\\mathrm{d}t}\\frac{\\partial L}{\\partial \\dot{q}} = \\frac{\\partial L}{\\partial q}$ | 标量函数，广义坐标 |
|  哈密顿力学  |              $\\dot{q} = \\partial H / \\partial p$，$\\dot{p} = -\\partial H / \\partial q$              |  相空间，正则方程  |
|  哈-雅理论   |                  $H(q, \\partial S / \\partial q, t) + \\partial S / \\partial t = 0$                   | 偏微分方程，作用量 |
|  薛定谔方程  |              $(-\\frac{\\hbar^2}{2m}\\nabla^2 + V)\\psi = \\mathrm{i}\\hbar \\partial_t \\psi$              |   波函数，量子化   |

## 小结

- 连续体系用拉格朗日密度 $\\mathcal{L}(\\eta, \\partial_\\mu \\eta)$ 描述
- 连续体系的拉格朗日方程：$\\partial \\mathcal{L} / \\partial \\eta_a - \\partial_\\mu [\\partial \\mathcal{L} / \\partial (\\partial_\\mu \\eta_a)] = 0$
- 弹性棒的纵振动给出波动方程 $\\ddot{u} = v^2 u''$
- 薛定谔从哈密顿-雅可比方程出发建立了波动力学
- 哈密顿理论是连接经典力学和量子力学的桥梁
`,i={title:"哈密顿理论在物理学中的应用",author:"NeoWangKing",date:new Date(17808768e5),lastMod:new Date(1782646874e3),tags:["物理","理论力学","连续体","拉格朗日密度","薛定谔方程","声子"],category:["物理","理论力学"],summary:"本文展示哈密顿理论在连续体系和量子力学中的拓展应用，包括拉格朗日密度的引入、连续体系的哈密顿原理与拉格朗日方程、一维弹性棒的波动方程，以及从哈密顿-雅可比方程到薛定谔方程的建立过程。",comments:!0,draft:!1,sticky:0,chapter:9},r={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/09-Hamiltonian-Applications.md",rawData:void 0};export{r as _internal,l as body,a as collection,i as data,n as id,t as slug};
