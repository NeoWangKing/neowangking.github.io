const n="mathematics/MMiP/6-Green-Function.md",l="posts",b="mathematics/mmip/6-green-function",a=`
## 泊松方程的格林函数法

### 问题的提法

在静电学中，电势 $V(\\boldsymbol{r})$ 满足泊松方程

$$
\\begin{align}
\\nabla^2 V = -\\frac{\\rho}{\\epsilon_0}
\\end{align}
$$

其中 $\\rho(\\boldsymbol{r})$ 是电荷密度。对于给定的电荷分布，若边界条件也已知，我们需要求解这个边值问题。格林函数方法提供了一种将非齐次方程的解表示为源函数与格林函数卷积的途径，其核心思想是利用线性叠加原理：将任意源分布分解为点源的叠加，然后对点源响应进行积分。

### 格林函数的定义

**格林函数** $G(\\boldsymbol{r}, \\boldsymbol{r}')$ 定义为满足以下方程的函数

$$
\\begin{align}
\\nabla^2 G(\\boldsymbol{r}, \\boldsymbol{r}') = \\delta(\\boldsymbol{r} - \\boldsymbol{r}')
\\end{align}
$$

其中 $\\delta(\\boldsymbol{r} - \\boldsymbol{r}')$ 是三维狄拉克 $\\delta$ 函数。格林函数的物理意义是：在 $\\boldsymbol{r}'$ 点放置一个单位点源时，在 $\\boldsymbol{r}$ 点产生的响应（势）。格林函数通常还需要满足与原始问题相同的边界条件（齐次边界条件）。

> 格林函数的定义依赖于边界条件。不同的边界条件对应不同的格林函数。例如，对于第一类边界条件（Dirichlet 边界条件），格林函数满足 $G|_{\\partial\\Omega} = 0$；对于第二类边界条件（Neumann 边界条件），格林函数满足 $\\partial G/\\partial n|_{\\partial\\Omega} = 0$。

### 泊松方程解的积分表示

利用格林函数，我们可以将泊松方程的解表示为积分形式。首先，考虑泊松方程

$$
\\begin{align}
\\nabla^2 V = -f(\\boldsymbol{r})
\\end{align}
$$

其中 $f(\\boldsymbol{r}) = \\rho(\\boldsymbol{r})/\\epsilon_0$。设 $G(\\boldsymbol{r}, \\boldsymbol{r}')$ 是满足相同边界条件的格林函数。在区域 $\\Omega$ 内，利用格林第二恒等式

$$
\\begin{align}
\\int_\\Omega (u \\nabla^2 v - v \\nabla^2 u) \\, \\mathrm{d}\\tau = \\oint_{\\partial\\Omega} \\left( u \\frac{\\partial v}{\\partial n} - v \\frac{\\partial u}{\\partial n} \\right) \\mathrm{d}a
\\end{align}
$$

令 $u = V(\\boldsymbol{r})$，$v = G(\\boldsymbol{r}, \\boldsymbol{r}')$，并固定 $\\boldsymbol{r}'$，则

$$
\\begin{align}
\\int_\\Omega \\left[ V(\\boldsymbol{r}) \\nabla^2 G(\\boldsymbol{r}, \\boldsymbol{r}') - G(\\boldsymbol{r}, \\boldsymbol{r}') \\nabla^2 V(\\boldsymbol{r}) \\right] \\mathrm{d}\\tau = \\oint_{\\partial\\Omega} \\left( V \\frac{\\partial G}{\\partial n} - G \\frac{\\partial V}{\\partial n} \\right) \\mathrm{d}a
\\end{align}
$$

利用 $\\nabla^2 G(\\boldsymbol{r}, \\boldsymbol{r}') = \\delta(\\boldsymbol{r} - \\boldsymbol{r}')$ 和 $\\nabla^2 V(\\boldsymbol{r}) = -f(\\boldsymbol{r})$，左边为

$$
\\begin{align}
\\int_\\Omega V(\\boldsymbol{r}) \\delta(\\boldsymbol{r} - \\boldsymbol{r}') \\, \\mathrm{d}\\tau + \\int_\\Omega G(\\boldsymbol{r}, \\boldsymbol{r}') f(\\boldsymbol{r}) \\, \\mathrm{d}\\tau = V(\\boldsymbol{r}') + \\int_\\Omega G(\\boldsymbol{r}, \\boldsymbol{r}') f(\\boldsymbol{r}) \\, \\mathrm{d}\\tau
\\end{align}
$$

因此

$$
\\begin{align}
V(\\boldsymbol{r}') = \\int_\\Omega G(\\boldsymbol{r}, \\boldsymbol{r}') f(\\boldsymbol{r}) \\, \\mathrm{d}\\tau - \\oint_{\\partial\\Omega} \\left( V \\frac{\\partial G}{\\partial n} - G \\frac{\\partial V}{\\partial n} \\right) \\mathrm{d}a
\\end{align}
$$

交换 $\\boldsymbol{r}$ 和 $\\boldsymbol{r}'$（利用格林函数的对称性 $G(\\boldsymbol{r}, \\boldsymbol{r}') = G(\\boldsymbol{r}', \\boldsymbol{r})$），可得

$$
\\begin{align}
V(\\boldsymbol{r}) = \\int_\\Omega G(\\boldsymbol{r}, \\boldsymbol{r}') f(\\boldsymbol{r}') \\, \\mathrm{d}\\tau' - \\oint_{\\partial\\Omega} \\left( V(\\boldsymbol{r}') \\frac{\\partial G(\\boldsymbol{r}, \\boldsymbol{r}')}{\\partial n'} - G(\\boldsymbol{r}, \\boldsymbol{r}') \\frac{\\partial V(\\boldsymbol{r}')}{\\partial n'} \\right) \\mathrm{d}a'
\\end{align}
$$

这是泊松方程解的一般积分表示。该式表明，区域内的势 $V(\\boldsymbol{r})$ 由三部分贡献：区域内的源分布（体积分）、边界上的势值（第一项面积分）和边界上的法向导数值（第二项面积分）。

### 边界条件的处理

根据不同的边界条件，格林函数可以设计得使边界项简化。

#### 第一类边界条件（Dirichlet 问题）

若边界上 $V$ 已知，我们选择格林函数满足齐次 Dirichlet 边界条件 $G(\\boldsymbol{r}, \\boldsymbol{r}') = 0$（当 $\\boldsymbol{r}$ 或 $\\boldsymbol{r}'$ 在边界上时）。此时边界项中 $G$ 消失，只剩下包含 $V$ 的项：

$$
\\begin{align}
V(\\boldsymbol{r}) = \\int_\\Omega G_D(\\boldsymbol{r}, \\boldsymbol{r}') f(\\boldsymbol{r}') \\, \\mathrm{d}\\tau' - \\oint_{\\partial\\Omega} V(\\boldsymbol{r}') \\frac{\\partial G_D(\\boldsymbol{r}, \\boldsymbol{r}')}{\\partial n'} \\, \\mathrm{d}a'
\\end{align}
$$

其中 $G_D$ 是 Dirichlet 格林函数。

#### 第二类边界条件（Neumann 问题）

若边界上 $\\partial V/\\partial n$ 已知，我们选择格林函数满足齐次 Neumann 边界条件 $\\partial G/\\partial n = 0$（当 $\\boldsymbol{r}$ 或 $\\boldsymbol{r}'$ 在边界上时）。但需注意，Neumann 问题的解存在性要求源项满足相容性条件，且格林函数需修改为

$$
\\begin{align}
\\nabla^2 G_N(\\boldsymbol{r}, \\boldsymbol{r}') = \\delta(\\boldsymbol{r} - \\boldsymbol{r}') - \\frac{1}{|\\Omega|}
\\end{align}
$$

其中 $|\\Omega|$ 是区域 $\\Omega$ 的体积。此时解为

$$
\\begin{align}
V(\\boldsymbol{r}) = \\int_\\Omega G_N(\\boldsymbol{r}, \\boldsymbol{r}') f(\\boldsymbol{r}') \\, \\mathrm{d}\\tau' + \\oint_{\\partial\\Omega} G_N(\\boldsymbol{r}, \\boldsymbol{r}') \\frac{\\partial V(\\boldsymbol{r}')}{\\partial n'} \\, \\mathrm{d}a' + \\langle V \\rangle
\\end{align}
$$

其中 $\\langle V \\rangle$ 是势在区域内的平均值。

### 格林函数的对称性

格林函数具有对称性 $G(\\boldsymbol{r}, \\boldsymbol{r}') = G(\\boldsymbol{r}', \\boldsymbol{r})$。这一性质可以通过格林第二恒等式证明，其物理意义是源点和场点的地位等价（互易定理）。利用对称性，我们可以在积分表达式中将 $\\boldsymbol{r}$ 和 $\\boldsymbol{r}'$ 互换，这在实际计算中往往带来便利。

### 自由空间格林函数

在无界空间中（无边界条件或边界在无穷远），泊松方程的基本解称为**自由空间格林函数**。

#### 三维空间

对于三维空间，自由空间格林函数为

$$
\\begin{align}
G_0(\\boldsymbol{r}, \\boldsymbol{r}') = -\\frac{1}{4\\pi |\\boldsymbol{r} - \\boldsymbol{r}'|}
\\end{align}
$$

验证：$\\nabla^2 \\left( -\\frac{1}{4\\pi r} \\right) = \\delta(\\boldsymbol{r})$。

#### 二维空间

对于二维空间，自由空间格林函数为

$$
\\begin{align}
G_0(\\boldsymbol{r}, \\boldsymbol{r}') = \\frac{1}{2\\pi} \\ln |\\boldsymbol{r} - \\boldsymbol{r}'|
\\end{align}
$$

验证：$\\nabla^2 \\left( \\frac{1}{2\\pi} \\ln r \\right) = \\delta(\\boldsymbol{r})$。

#### 一维空间

对于一维空间，自由空间格林函数为

$$
\\begin{align}
G_0(x, x') = \\frac{1}{2} |x - x'|
\\end{align}
$$

验证：$\\frac{\\mathrm{d}^2}{\\mathrm{d}x^2} \\left( \\frac{1}{2} |x| \\right) = \\delta(x)$。

自由空间格林函数是求解有界区域格林函数的基础，通过镜像法等技巧可以从自由空间格林函数构造满足边界条件的格林函数。

### 自由空间泊松方程的解

利用自由空间格林函数，无界空间中的泊松方程 $\\nabla^2 V = -f(\\boldsymbol{r})$ 的解为

$$
\\begin{align}
V(\\boldsymbol{r}) = \\int_{\\mathbb{R}^3} G_0(\\boldsymbol{r}, \\boldsymbol{r}') f(\\boldsymbol{r}') \\, \\mathrm{d}\\tau' = \\frac{1}{4\\pi} \\int_{\\mathbb{R}^3} \\frac{f(\\boldsymbol{r}')}{|\\boldsymbol{r} - \\boldsymbol{r}'|} \\, \\mathrm{d}\\tau'
\\end{align}
$$

这正是电磁学中由电荷分布计算电势的标准公式（其中 $f = \\rho/\\epsilon_0$）。这表明格林函数方法是对已有结果的统一和推广。

### 格林函数方法的求解步骤

1. 根据问题的边界条件，确定需要求解的格林函数类型（Dirichlet、Neumann 等）
2. 求解满足 $\\nabla^2 G = \\delta(\\boldsymbol{r} - \\boldsymbol{r}')$ 和齐次边界条件的格林函数
3. 利用积分公式将解表示为格林函数与源项、边界值的积分
4. 计算积分，得到 $V(\\boldsymbol{r})$ 的表达式

## 镜像法求格林函数

### 基本原理

镜像法是求解格林函数的一种直观方法，尤其适用于具有对称边界的区域。其基本思想是用假想的镜像电荷代替边界的影响，使得在区域内格林函数满足齐次边界条件。

### 半空间 Dirichlet 格林函数

**问题**：求上半空间 $z > 0$ 中满足 $G=0$ 在 $z=0$ 平面上的格林函数。

**解**：在 $z'$ 点放置单位点源，并在对称位置 $z = -z'$ 处放置镜像点源 $-1$。则上半空间的格林函数为

$$
\\begin{align}
G(\\boldsymbol{r}, \\boldsymbol{r}') = -\\frac{1}{4\\pi} \\left( \\frac{1}{|\\boldsymbol{r} - \\boldsymbol{r}'|} - \\frac{1}{|\\boldsymbol{r} - \\boldsymbol{r}''|} \\right)
\\end{align}
$$

其中 $\\boldsymbol{r}' = (x', y', z')$，$\\boldsymbol{r}'' = (x', y', -z')$。容易验证，在 $z=0$ 平面上，$G=0$。

### 球内 Dirichlet 格林函数

**问题**：求半径为 $R$ 的球内满足 $G=0$ 在球面上的格林函数。

**解**：设源点在球内 $\\boldsymbol{r}'$（$r' < R$），在球外 $\\boldsymbol{r}'' = \\frac{R^2}{r'^2} \\boldsymbol{r}'$ 处放置镜像点源 $q' = -R/r'$。则球内格林函数为

$$
\\begin{align}
G(\\boldsymbol{r}, \\boldsymbol{r}') = -\\frac{1}{4\\pi} \\left( \\frac{1}{|\\boldsymbol{r} - \\boldsymbol{r}'|} - \\frac{R/r'}{|\\boldsymbol{r} - \\boldsymbol{r}''|} \\right)
\\end{align}
$$

在球面 $r = R$ 上，$G=0$。

### 球外 Dirichlet 格林函数

类似地，对于球外区域（$r > R$），格林函数为

$$
\\begin{align}
G(\\boldsymbol{r}, \\boldsymbol{r}') = -\\frac{1}{4\\pi} \\left( \\frac{1}{|\\boldsymbol{r} - \\boldsymbol{r}'|} - \\frac{R/r'}{|\\boldsymbol{r} - \\boldsymbol{r}''|} \\right)
\\end{align}
$$

其中 $\\boldsymbol{r}'' = \\frac{R^2}{r'^2} \\boldsymbol{r}'$，且 $q' = -R/r'$。在球面 $r = R$ 上，$G=0$。

## 本征函数展开法求格林函数

### 基本原理

对于规则区域，可以将格林函数用本征函数展开。设 $\\{\\phi_n(\\boldsymbol{r})\\}$ 是某自伴算子的完备正交本征函数系，满足

$$
\\begin{align}
\\nabla^2 \\phi_n + \\lambda_n \\phi_n = 0
\\end{align}
$$

且满足齐次边界条件。则格林函数可展开为

$$
\\begin{align}
G(\\boldsymbol{r}, \\boldsymbol{r}') = \\sum_n \\frac{\\phi_n(\\boldsymbol{r}) \\phi_n^*(\\boldsymbol{r}')}{\\lambda_n}
\\end{align}
$$

其中 $\\lambda_n$ 是本征值。

### 一维例子：区间 $[0, L]$ 上的格林函数

考虑一维泊松方程 $-u''(x) = f(x)$，边界条件 $u(0)=u(L)=0$。本征函数为 $\\phi_n(x) = \\sqrt{\\frac{2}{L}} \\sin\\left(\\frac{n\\pi x}{L}\\right)$，本征值 $\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2$。格林函数为

$$
\\begin{align}
G(x, x') = \\sum_{n=1}^{\\infty} \\frac{2}{L} \\frac{\\sin\\left(\\frac{n\\pi x}{L}\\right) \\sin\\left(\\frac{n\\pi x'}{L}\\right)}{\\left(\\frac{n\\pi}{L}\\right)^2}
\\end{align}
$$

该级数可以求和得到封闭形式：

$$
\\begin{align}
G(x, x') = \\begin{cases}
\\dfrac{x'(L-x)}{L}, & 0 \\le x' \\le x \\\\
\\dfrac{x(L-x')}{L}, & x \\le x' \\le L
\\end{cases}
\\end{align}
$$

### 矩形区域格林函数

对于矩形区域 $0 < x < a$，$0 < y < b$，边界条件为 $V=0$。格林函数为

$$
\\begin{align}
G(x,y;x',y') = \\frac{4}{ab} \\sum_{m=1}^{\\infty} \\sum_{n=1}^{\\infty} \\frac{\\sin\\left(\\frac{m\\pi x}{a}\\right) \\sin\\left(\\frac{m\\pi x'}{a}\\right) \\sin\\left(\\frac{n\\pi y}{b}\\right) \\sin\\left(\\frac{n\\pi y'}{b}\\right)}{\\left(\\frac{m\\pi}{a}\\right)^2 + \\left(\\frac{n\\pi}{b}\\right)^2}
\\end{align}
$$

## 含时问题的格林函数

### 热传导方程的格林函数

考虑热传导方程

$$
\\begin{align}
\\frac{\\partial u}{\\partial t} - \\kappa \\nabla^2 u = f(\\boldsymbol{r}, t)
\\end{align}
$$

其格林函数 $G(\\boldsymbol{r}, t; \\boldsymbol{r}', t')$ 满足

$$
\\begin{align}
\\left( \\frac{\\partial}{\\partial t} - \\kappa \\nabla^2 \\right) G(\\boldsymbol{r}, t; \\boldsymbol{r}', t') = \\delta(\\boldsymbol{r} - \\boldsymbol{r}') \\delta(t - t')
\\end{align}
$$

且 $G=0$ 当 $t < t'$（因果性条件）。自由空间热传导方程的格林函数为

$$
\\begin{align}
G_0(\\boldsymbol{r}, t; \\boldsymbol{r}', t') = \\frac{1}{[4\\pi \\kappa (t - t')]^{3/2}} \\exp\\left( -\\frac{|\\boldsymbol{r} - \\boldsymbol{r}'|^2}{4\\kappa (t - t')} \\right) \\theta(t - t')
\\end{align}
$$

其中 $\\theta(t)$ 是单位阶跃函数。这是一维、二维、三维高斯型热核的统一形式。

### 波动方程的格林函数

考虑波动方程

$$
\\begin{align}
\\frac{\\partial^2 u}{\\partial t^2} - c^2 \\nabla^2 u = f(\\boldsymbol{r}, t)
\\end{align}
$$

其格林函数满足

$$
\\begin{align}
\\left( \\frac{\\partial^2}{\\partial t^2} - c^2 \\nabla^2 \\right) G(\\boldsymbol{r}, t; \\boldsymbol{r}', t') = \\delta(\\boldsymbol{r} - \\boldsymbol{r}') \\delta(t - t')
\\end{align}
$$

自由空间波动方程的格林函数（推迟格林函数）为

- **一维**：$G_0(x,t;x',t') = \\frac{c}{2} \\theta(t - t' - |x-x'|/c)$
- **二维**：$G_0(\\boldsymbol{r},t;\\boldsymbol{r}',t') = \\frac{1}{2\\pi c} \\frac{\\theta(t - t' - |\\boldsymbol{r} - \\boldsymbol{r}'|/c)}{\\sqrt{(t - t')^2 - |\\boldsymbol{r} - \\boldsymbol{r}'|^2/c^2}}$
- **三维**：$G_0(\\boldsymbol{r},t;\\boldsymbol{r}',t') = \\frac{1}{4\\pi |\\boldsymbol{r} - \\boldsymbol{r}'|} \\delta(t - t' - |\\boldsymbol{r} - \\boldsymbol{r}'|/c)$

三维推迟格林函数具有简洁的形式，反映了惠更斯原理：波前以速度 $c$ 传播，且在波前到达后信号立即消失。

## 格林函数的应用

### 静电学中的应用

在静电学中，给定边界上的电势分布，区域内的电势可由 Dirichlet 格林函数求得：

$$
\\begin{align}
V(\\boldsymbol{r}) = -\\oint_{\\partial\\Omega} V(\\boldsymbol{r}') \\frac{\\partial G_D(\\boldsymbol{r}, \\boldsymbol{r}')}{\\partial n'} \\, \\mathrm{d}a'
\\end{align}
$$

这称为**泊松积分公式**。例如，对于球内区域，利用球内 Dirichlet 格林函数可得

$$
\\begin{align}
V(r,\\theta,\\phi) = \\frac{R(r^2 - R^2)}{4\\pi} \\oint \\frac{V(\\theta',\\phi')}{|\\boldsymbol{r} - \\boldsymbol{r}'|^3} \\, \\mathrm{d}\\Omega'
\\end{align}
$$

这是拉普拉斯方程球内边值问题的解的积分表示。

### 量子力学中的应用

在量子力学中，薛定谔方程的格林函数是描述粒子传播的核心概念。对于含时薛定谔方程

$$
\\begin{align}
\\mathrm{i}\\hbar \\frac{\\partial \\psi}{\\partial t} = -\\frac{\\hbar^2}{2m} \\nabla^2 \\psi + V(\\boldsymbol{r}) \\psi
\\end{align}
$$

其格林函数 $K(\\boldsymbol{r}, t; \\boldsymbol{r}', t')$ 称为**传播子**，满足

$$
\\begin{align}
\\left( \\mathrm{i}\\hbar \\frac{\\partial}{\\partial t} + \\frac{\\hbar^2}{2m} \\nabla^2 - V(\\boldsymbol{r}) \\right) K(\\boldsymbol{r}, t; \\boldsymbol{r}', t') = \\mathrm{i}\\hbar \\delta(\\boldsymbol{r} - \\boldsymbol{r}') \\delta(t - t')
\\end{align}
$$

自由粒子的传播子为

$$
\\begin{align}
K_0(\\boldsymbol{r}, t; \\boldsymbol{r}', t') = \\left( \\frac{m}{2\\pi \\mathrm{i}\\hbar (t - t')} \\right)^{3/2} \\exp\\left( \\frac{\\mathrm{i} m |\\boldsymbol{r} - \\boldsymbol{r}'|^2}{2\\hbar (t - t')} \\right)
\\end{align}
$$

利用传播子，任意初态波函数的演化可写为

$$
\\begin{align}
\\psi(\\boldsymbol{r}, t) = \\int K(\\boldsymbol{r}, t; \\boldsymbol{r}', t') \\psi(\\boldsymbol{r}', t') \\, \\mathrm{d}^3 r'
\\end{align}
$$

### 声学与弹性力学中的应用

在声学中，亥姆霍兹方程 $\\nabla^2 u + k^2 u = f(\\boldsymbol{r})$ 的格林函数满足

$$
\\begin{align}
\\nabla^2 G + k^2 G = \\delta(\\boldsymbol{r} - \\boldsymbol{r}')
\\end{align}
$$

三维自由空间解为

$$
\\begin{align}
G_0(\\boldsymbol{r}, \\boldsymbol{r}') = -\\frac{e^{\\mathrm{i} k |\\boldsymbol{r} - \\boldsymbol{r}'|}}{4\\pi |\\boldsymbol{r} - \\boldsymbol{r}'|}
\\end{align}
$$

其中 $e^{\\mathrm{i} k r}$ 对应出射波（辐射条件）。这个格林函数在声场辐射、天线理论中有广泛应用。

### 扩散问题中的应用

对于扩散方程 $\\frac{\\partial u}{\\partial t} - D \\nabla^2 u = 0$，格林函数描述了初始点源随时间的扩散行为。在无限域中，解为

$$
\\begin{align}
u(\\boldsymbol{r}, t) = \\int G_0(\\boldsymbol{r}, t; \\boldsymbol{r}', 0) u_0(\\boldsymbol{r}') \\, \\mathrm{d}^3 r'
\\end{align}
$$

其中 $G_0$ 是高斯核。利用边界格林函数，可以处理有界区域中的扩散问题，如半导体中的载流子扩散、热传导等。

## 格林函数与泛函分析

### 算子的逆

从泛函分析的角度，格林函数是微分算子 $\\mathcal{L} = \\nabla^2$ 在给定边界条件下的逆算子。即对于方程 $\\mathcal{L} u = f$，有

$$
\\begin{align}
u = \\mathcal{L}^{-1} f = \\int G(\\boldsymbol{r}, \\boldsymbol{r}') f(\\boldsymbol{r}') \\, \\mathrm{d}\\tau'
\\end{align}
$$

因此，格林函数是积分算子 $\\mathcal{L}^{-1}$ 的积分核。

### 格林函数的谱表示

对于自伴算子，格林函数可用本征函数展开。设 $\\mathcal{L}$ 的本征函数系 $\\{\\phi_n\\}$ 满足 $\\mathcal{L} \\phi_n = \\lambda_n \\phi_n$ 和边界条件，且完备正交。则格林函数为

$$
\\begin{align}
G(\\boldsymbol{r}, \\boldsymbol{r}') = \\sum_n \\frac{\\phi_n(\\boldsymbol{r}) \\phi_n^*(\\boldsymbol{r}')}{\\lambda_n}
\\end{align}
$$

这个级数在 $\\lambda_n \\neq 0$ 时收敛。当存在零本征值时，需修改定义或考虑广义逆。

### 紧算子的核

对于紧算子，格林函数的核是希尔伯特-施密特核，具有优良的谱性质。这一观点将偏微分方程理论、积分方程理论和泛函分析紧密联系起来。

## 小结

### 格林函数方法的本质

格林函数方法的核心思想是将复杂源分布问题转化为对点源响应的叠加。一旦求得了特定边界条件下的格林函数，任意源分布的解都可通过积分得到。

### 求解格林函数的常用方法

|      方法      |             适用场景             |         优点         |        局限性        |
| :------------: | :------------------------------: | :------------------: | :------------------: |
|     镜像法     | 具有对称边界（平面、球面、柱面） |    直观、封闭形式    |   仅适用于简单几何   |
| 本征函数展开法 |   规则区域（矩形、圆柱、球等）   | 系统性强、可数值计算 | 级数收敛慢，求和困难 |
|   积分变换法   |         无界或半无界区域         |    处理无穷域方便    |    反变换可能复杂    |
|   复变函数法   |             二维问题             |    得到封闭解析解    |     仅适用于二维     |

### 格林函数的重要性

格林函数方法不仅是求解偏微分方程的有力工具，更深刻揭示了线性系统的本质：系统的响应是输入与格林函数的卷积。这一思想贯穿于数学物理、信号处理、控制理论等众多领域，是理解线性系统行为的统一框架。
`,o={title:"格林函数",author:"NeoWangKing",date:new Date(177510349e4),lastMod:new Date(1775841669e3),tags:["数学","数学物理方法","格林函数","泊松方程","拉普拉斯方程"],category:["数学","数学物理方法"],summary:"本文介绍格林函数方法在求解偏微分方程边值问题中的应用，包括格林函数的定义、基本性质、求解方法（镜像法、本征函数展开法），以及在泊松方程、拉普拉斯方程和含时问题中的应用。",comments:!0,draft:!1,sticky:0},r={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/mathematics/MMiP/6-Green-Function.md",rawData:void 0};export{r as _internal,a as body,l as collection,o as data,n as id,b as slug};
