const n="physics/Electrodynamics/12-Radiation.md",a="posts",l="physics/electrodynamics/12-radiation",o=`
## 辐射的基本概念

### 什么是辐射？

**辐射**是能量从局域源不可逆地径向传播到无穷远的物理过程。辐射场的特征是场分量随距离 $r$ 衰减为 $1/r$，使得通过半径为 $r$ 的球面的能流在 $r \\to \\infty$ 时趋于有限值。

$$
\\begin{align}
P_{\\text{rad}}(t_0) = \\lim_{r\\to\\infty} P\\left(r, t_0 + \\frac{r}{c}\\right)
\\end{align}
$$

其中 $P(r,t) = \\oint \\boldsymbol{S} \\cdot \\mathrm{d}\\boldsymbol{a}$ 是通过球面的瞬时功率。

**辐射的判据**：在远场区（$r \\to \\infty$），只保留随 $1/r$ 衰减的场分量，这些分量就是辐射场。静电场和静磁场分量随 $1/r^2$ 或更快衰减，不贡献辐射。

## 电偶极辐射

### 物理模型

考虑一个振荡电偶极子，其偶极矩随时间简谐变化：

$$
\\begin{align}
\\boldsymbol{p}(t) = \\boldsymbol{p}_0 \\cos(\\omega t)
\\end{align}
$$

这可以等效为一对等量异号电荷 $+q$ 和 $-q$ 以距离 $d$ 振荡，$p_0 = q_0 d$。相应的电流为

$$
\\begin{align}
I(t) = \\frac{\\mathrm{d}q}{\\mathrm{d}t} = -\\omega q_0 \\sin(\\omega t)
\\end{align}
$$

### 矢势的计算

对于沿 $z$ 轴放置的短偶极子（$d \\ll \\lambda$），在远场区 $r \\gg d$，矢势为

$$
\\begin{align}
\\boldsymbol{A}(\\boldsymbol{r}, t) \\approx \\frac{\\mu_0}{4\\pi} \\int_{-d/2}^{d/2} \\frac{I(t_r)}{|\\boldsymbol{r} - \\boldsymbol{r}'|} \\mathrm{d}z' \\hat{\\boldsymbol{z}} \\approx \\frac{\\mu_0 I(t_r) d}{4\\pi r} \\hat{\\boldsymbol{z}}
\\end{align}
$$

其中 $t_r = t - r/c$ 是推迟时间。代入 $I(t) = -\\omega q_0 \\sin(\\omega t)$，得

$$
\\begin{align}
\\boldsymbol{A}(\\boldsymbol{r}, t) \\approx -\\frac{\\mu_0 p_0 \\omega}{4\\pi r} \\sin\\left[\\omega\\left(t - \\frac{r}{c}\\right)\\right] \\hat{\\boldsymbol{z}}
\\end{align}
$$

### 标势的计算

利用洛伦兹规范 $\\nabla \\cdot \\boldsymbol{A} + \\mu_0\\epsilon_0 \\dfrac{\\partial V}{\\partial t} = 0$，可得

$$
\\begin{align}
V(\\boldsymbol{r}, t) = -c^2 \\int \\nabla \\cdot \\boldsymbol{A} \\,\\mathrm{d}t
\\end{align}
$$

计算 $\\nabla \\cdot \\boldsymbol{A}$（保留到 $1/r$ 阶）：

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{A} \\approx \\frac{\\partial A_z}{\\partial r} \\cos\\theta \\approx -\\frac{\\mu_0 p_0 \\omega^2}{4\\pi c r} \\cos\\theta \\cos\\left[\\omega\\left(t - \\frac{r}{c}\\right)\\right]
\\end{align}
$$

积分得

$$
\\begin{align}
V(\\boldsymbol{r}, t) \\approx -\\frac{c p_0 \\mu_0 \\omega}{4\\pi r} \\cos\\theta \\sin\\left[\\omega\\left(t - \\frac{r}{c}\\right)\\right]
\\end{align}
$$

### 辐射场

由 $\\boldsymbol{E} = -\\nabla V - \\partial \\boldsymbol{A}/\\partial t$ 和 $\\boldsymbol{B} = \\nabla \\times \\boldsymbol{A}$，保留 $1/r$ 项，得到辐射场：

$$
\\begin{align}
E_\\theta(\\boldsymbol{r}, t) = -\\frac{p_0 \\mu_0 \\omega^2}{4\\pi} \\frac{\\sin\\theta}{r} \\cos\\left[\\omega\\left(t - \\frac{r}{c}\\right)\\right]
\\end{align}
$$

$$
\\begin{align}
B_\\phi(\\boldsymbol{r}, t) = -\\frac{p_0 \\mu_0 \\omega^2}{4\\pi c} \\frac{\\sin\\theta}{r} \\cos\\left[\\omega\\left(t - \\frac{r}{c}\\right)\\right] = \\frac{1}{c} E_\\theta
\\end{align}
$$

**电偶极辐射的主要特征**：

1. 辐射场是横波：$\\boldsymbol{E} \\parallel \\hat{\\boldsymbol{\\theta}}$，$\\boldsymbol{B} \\parallel \\hat{\\boldsymbol{\\phi}}$，$\\boldsymbol{k} \\parallel \\hat{\\boldsymbol{r}}$
2. 辐射场随 $1/r$ 衰减
3. 角分布呈 $\\sin^2\\theta$ 形式，在 $\\theta = \\pi/2$ 方向辐射最强，沿偶极轴方向无辐射
4. 频率等于偶极子的振荡频率
5. 电场和磁场同相，$E_\\theta = c B_\\phi$

### 辐射功率与角分布

瞬时能流密度：

$$
\\begin{align}
\\boldsymbol{S} = \\frac{1}{\\mu_0} \\boldsymbol{E} \\times \\boldsymbol{B} = \\frac{1}{\\mu_0 c} E_\\theta^2 \\hat{\\boldsymbol{r}}
\\end{align}
$$

对时间平均：

$$
\\begin{align}
\\langle \\boldsymbol{S} \\rangle = \\frac{\\mu_0 p_0^2 \\omega^4}{32\\pi^2 c} \\frac{\\sin^2\\theta}{r^2} \\hat{\\boldsymbol{r}}
\\end{align}
$$

角分布（单位立体角的平均辐射功率）：

$$
\\begin{align}
\\frac{\\mathrm{d}\\langle P \\rangle}{\\mathrm{d}\\Omega} = r^2 \\langle S_r \\rangle = \\frac{\\mu_0 p_0^2 \\omega^4}{32\\pi^2 c} \\sin^2\\theta
\\end{align}
$$

总辐射功率：

$$
\\begin{align}
\\langle P \\rangle = \\int \\frac{\\mathrm{d}\\langle P \\rangle}{\\mathrm{d}\\Omega} \\mathrm{d}\\Omega = \\frac{\\mu_0 p_0^2 \\omega^4}{12\\pi c}
\\end{align}
$$

### 物理应用：天空为什么是蓝的？

太阳光在穿过大气时，与空气中的分子相互作用，诱导出振荡电偶极矩。电偶极辐射功率 $P \\propto \\omega^4$，因此高频（蓝光）的散射比低频（红光）强得多，所以天空呈现蓝色。日落时太阳光经过更长的路径，高频光被散射殆尽，剩下红光，所以日落呈红色。

## 磁偶极辐射

### 物理模型

考虑一个振荡磁偶极子，如一个载有交变电流的小线圈：

$$
\\begin{align}
I(t) = I_0 \\cos(\\omega t), \\quad \\boldsymbol{m}(t) = \\pi b^2 I(t) \\hat{\\boldsymbol{z}} = m_0 \\cos(\\omega t) \\hat{\\boldsymbol{z}}
\\end{align}
$$

### 矢势

对于 $b \\ll \\lambda$ 的小线圈，在远场区矢势为

$$
\\begin{align}
\\boldsymbol{A}(\\boldsymbol{r}, t) = -\\frac{\\mu_0 m_0 \\omega}{4\\pi c} \\frac{\\sin\\theta}{r} \\sin\\left[\\omega\\left(t - \\frac{r}{c}\\right)\\right] \\hat{\\boldsymbol{\\phi}}
\\end{align}
$$

### 辐射场

$$
\\begin{align}
E_\\phi(\\boldsymbol{r}, t) = \\frac{\\mu_0 m_0 \\omega^2}{4\\pi c^2} \\frac{\\sin\\theta}{r} \\cos\\left[\\omega\\left(t - \\frac{r}{c}\\right)\\right]
\\end{align}
$$

$$
\\begin{align}
B_\\theta(\\boldsymbol{r}, t) = -\\frac{\\mu_0 m_0 \\omega^2}{4\\pi c^2} \\frac{\\sin\\theta}{r} \\cos\\left[\\omega\\left(t - \\frac{r}{c}\\right)\\right] = -\\frac{1}{c} E_\\phi
\\end{align}
$$

### 辐射功率

平均辐射功率：

$$
\\begin{align}
\\langle P \\rangle = \\frac{\\mu_0 m_0^2 \\omega^4}{12\\pi c^3}
\\end{align}
$$

### 电偶极辐射与磁偶极辐射的比较

$$
\\begin{align}
\\frac{P_{\\text{mag}}}{P_{\\text{elec}}} = \\left(\\frac{m_0}{p_0 c}\\right)^2
\\end{align}
$$

对于同尺度的源，$m_0 \\sim I_0 b^2$，$p_0 \\sim q_0 d$，且 $I_0 \\sim q_0 \\omega$，取 $d \\sim b$，得

$$
\\begin{align}
\\frac{P_{\\text{mag}}}{P_{\\text{elec}}} \\sim \\left(\\frac{\\omega b}{c}\\right)^2 \\ll 1
\\end{align}
$$

因此，在低速、小尺寸条件下，电偶极辐射通常占主导，磁偶极辐射相对较弱。

## 任意源的辐射（多极展开）

### 远场近似的一般方法

对于任意局域源分布，在远场区 $|\\boldsymbol{r}| \\gg |\\boldsymbol{r}'|$ 和 $\\lambda \\gg |\\boldsymbol{r}'|$ 的条件下，可将推迟势展开。令 $t_0 = t - r/c$，则

$$
\\begin{align}
V(\\boldsymbol{r}, t) \\cong \\frac{1}{4\\pi\\epsilon_0} \\left[ \\frac{Q}{r} + \\frac{\\hat{\\boldsymbol{r}} \\cdot \\boldsymbol{p}(t_0)}{r^2} + \\frac{\\hat{\\boldsymbol{r}} \\cdot \\dot{\\boldsymbol{p}}(t_0)}{r c} \\right]
\\end{align}
$$

$$
\\begin{align}
\\boldsymbol{A}(\\boldsymbol{r}, t) \\cong \\frac{\\mu_0}{4\\pi} \\left[ \\frac{\\dot{\\boldsymbol{p}}(t_0)}{r} + \\frac{\\dot{\\boldsymbol{m}}(t_0) \\times \\hat{\\boldsymbol{r}}}{r c} + \\frac{1}{6r c} \\dddot{\\boldsymbol{D}}(t_0) \\cdot \\hat{\\boldsymbol{r}} \\right]
\\end{align}
$$

其中 $\\boldsymbol{D}$ 是电四极矩张量。

辐射场（仅保留 $1/r$ 项）：

$$
\\begin{align}
\\boldsymbol{E}(\\boldsymbol{r}, t) \\cong \\frac{\\mu_0}{4\\pi r} \\left[\\hat{\\boldsymbol{r}} \\times (\\hat{\\boldsymbol{r}} \\times \\ddot{\\boldsymbol{p}}(t_0))\\right]
\\end{align}
$$

$$
\\begin{align}
\\boldsymbol{B}(\\boldsymbol{r}, t) \\cong -\\frac{\\mu_0}{4\\pi r c} \\left[\\hat{\\boldsymbol{r}} \\times \\ddot{\\boldsymbol{p}}(t_0)\\right]
\\end{align}
$$

辐射功率：

$$
\\begin{align}
P(r,t) = \\oint \\boldsymbol{S} \\cdot \\mathrm{d}\\boldsymbol{a} = \\frac{\\mu_0}{6\\pi c} \\left[\\ddot{\\boldsymbol{p}}\\left(t - \\frac{r}{c}\\right)\\right]^2
\\end{align}
$$

## 运动电荷的辐射

### 非相对论情形：拉莫尔公式

对于非相对论运动（$v \\ll c$）的单个电荷 $q$，其加速度为 $\\boldsymbol{a}$，偶极矩为 $\\boldsymbol{p} = q \\boldsymbol{d}$，$\\ddot{\\boldsymbol{p}} = q \\boldsymbol{a}$。代入任意源的辐射功率公式得

$$
\\begin{align}
P = \\frac{\\mu_0 q^2 a^2}{6\\pi c}
\\end{align}
$$

这就是著名的**拉莫尔公式**（Larmor formula），是经典电动力学中最基本的辐射公式。

辐射功率的角分布：

$$
\\begin{align}
\\frac{\\mathrm{d}P}{\\mathrm{d}\\Omega} = \\frac{\\mu_0 q^2 a^2}{16\\pi^2 c} \\sin^2\\theta
\\end{align}
$$

其中 $\\theta$ 是观测方向与加速度方向的夹角。

### 相对论推广：李纳公式

对于相对论性运动（$v$ 可接近 $c$），拉莫尔公式推广为**李纳公式**（LiÃ©nard formula）：

$$
\\begin{align}
P = \\frac{\\mu_0 q^2 \\gamma^6}{6\\pi c} \\left(a^2 - \\frac{|\\boldsymbol{v} \\times \\boldsymbol{a}|^2}{c^2}\\right)
\\end{align}
$$

等价形式：

$$
\\begin{align}
P = \\frac{\\mu_0 q^2}{6\\pi c} \\left(\\gamma^4 a^2 + \\gamma^6 \\frac{(\\boldsymbol{v} \\cdot \\boldsymbol{a})^2}{c^2}\\right)
\\end{align}
$$

其中 $\\gamma = 1/\\sqrt{1 - v^2/c^2}$。

**重要特征**：

- 当 $v \\to 0$ 时，$\\gamma \\to 1$，李纳公式退化为拉莫尔公式
- 辐射功率强烈依赖于速度（$\\gamma^6$ 因子）
- 相对论性粒子的辐射比非相对论性粒子强得多

### 特殊情况一：$\\boldsymbol{v} \\parallel \\boldsymbol{a}$（直线加速）

当速度和加速度同向时（如电子在直线加速器中），角分布为

$$
\\begin{align}
\\frac{\\mathrm{d}P}{\\mathrm{d}\\Omega} = \\frac{\\mu_0 q^2 a^2}{16\\pi^2 c} \\frac{\\sin^2\\theta}{(1 - \\beta\\cos\\theta)^5}
\\end{align}
$$

其中 $\\beta = v/c$。辐射功率为

$$
\\begin{align}
P = \\frac{\\mu_0 q^2 a^2 \\gamma^6}{6\\pi c}
\\end{align}
$$

**轫致辐射**（Bremsstrahlung，德语"刹车辐射"）就是这种情形：高速电子在原子核的库仑场中减速，辐射能量集中在前进方向的一个小角度锥内，锥角约为 $\\theta_{\\text{max}} \\sim \\sqrt{(1-\\beta)/2}$。

### 特殊情况二：$\\boldsymbol{v} \\perp \\boldsymbol{a}$（回旋/同步辐射）

当速度和加速度垂直时（如电子在磁场中做圆周运动），角分布为

$$
\\begin{align}
\\frac{\\mathrm{d}P}{\\mathrm{d}\\Omega} = \\frac{\\mu_0 q^2 a^2}{16\\pi^2 c} \\frac{[(1 - \\beta\\cos\\theta)^2 - (1-\\beta^2)\\sin^2\\theta\\cos^2\\phi]}{(1 - \\beta\\cos\\theta)^5}
\\end{align}
$$

辐射功率为

$$
\\begin{align}
P = \\frac{\\mu_0 q^2 a^2 \\gamma^4}{6\\pi c}
\\end{align}
$$

**同步辐射**（Synchrotron radiation）即属此类，是高能电子在环形加速器中发出的辐射，具有高度前向性、连续谱和偏振等特征。

## 辐射反作用力

### 物理图像

辐射带走能量和动量，对发射电荷产生一个反冲力——**辐射反作用力**（radiation reaction force）。对于周期运动，反冲力在一个周期内做的功等于辐射能量。

### 非相对论情形：Abraham-Lorentz公式

对于非相对论运动，辐射反作用力为

$$
\\begin{align}
\\boldsymbol{F}_{\\text{rad}} = \\frac{\\mu_0 q^2}{6\\pi c} \\dot{\\boldsymbol{a}}
\\end{align}
$$

这称为**Abraham-Lorentz公式**。它只在周期运动的平均意义上成立。

### 相对论情形

相对论推广为

$$
\\begin{align}
\\boldsymbol{F}_{\\text{rad}} = \\frac{\\mu_0 q^2}{6\\pi c} \\frac{\\mathrm{d}}{\\mathrm{d}t} \\left(\\gamma^4 \\boldsymbol{a} + \\gamma^6 \\frac{\\boldsymbol{v} \\boldsymbol{v} \\cdot \\boldsymbol{a}}{c^2}\\right)
\\end{align}
$$

### Abraham-Lorentz公式的困难

该公式存在非物理的"预加速"解（pre-acceleration）：在施加外力之前，粒子就开始加速。这表明经典电动力学在点粒子模型下有根本性的困难，需要量子电动力学或考虑有限尺寸效应来解决。

## 辐射阻尼

考虑一个束缚在谐振势中的电荷（原子模型），在电磁波驱动下振荡：

$$
\\begin{align}
m\\ddot{x} = -m\\omega_0^2 x + m\\tau \\dot{a} + F_{\\text{driving}}
\\end{align}
$$

其中 $\\tau = \\mu_0 q^2/(6\\pi m c)$。对于简谐运动 $\\dot{a} = -\\omega^2 \\dot{x}$，可得

$$
\\begin{align}
m\\ddot{x} + m\\omega_0^2 x + m \\omega^2 \\tau \\dot{x} = F_{\\text{driving}}
\\end{align}
$$

这等价于一个阻尼谐振子，阻尼系数 $\\gamma = \\omega^2 \\tau$。对于电子，$\\tau \\sim 6 \\times 10^{-24}\\,\\mathrm{s}$，在可见光频率 $\\omega \\sim 10^{15}\\,\\mathrm{rad/s}$ 下，$\\gamma \\sim 10^7\\,\\mathrm{s}^{-1}$，远小于 $\\omega$，即辐射阻尼很弱。

## 辐射理论总结表

|   辐射类型   |                 源                 |                   功率                    |         角分布         |
| :----------: | :--------------------------------: | :---------------------------------------: | :--------------------: | -------------- | ---------------------- |
|  电偶极辐射  |        $\\boldsymbol{p}(t)$         |               $\\dfrac{\\mu_0               | \\ddot{\\boldsymbol{p}}  | ^2}{6\\pi c}$   | $\\propto \\sin^2\\theta$ |
|  磁偶极辐射  |        $\\boldsymbol{m}(t)$         |               $\\dfrac{\\mu_0               | \\ddot{\\boldsymbol{m}}  | ^2}{6\\pi c^3}$ | $\\propto \\sin^2\\theta$ |
|  电四极辐射  |        $\\boldsymbol{D}(t)$         |        $\\dfrac{\\mu_0}{1440\\pi c^5}        | \\dddot{\\boldsymbol{D}} | ^2$            | 更复杂                 |
| 非相对论电荷 |         $q\\boldsymbol{a}$          | $\\dfrac{\\mu_0 q^2 a^2}{6\\pi c}$（拉莫尔） | $\\propto \\sin^2\\theta$ |
|  相对论电荷  | $q(\\boldsymbol{v},\\boldsymbol{a})$ |                 李纳公式                  |        高度前向        |
`,t={title:"电磁辐射",author:"NeoWangKing",date:new Date(17796672e5),lastMod:new Date(178281944e4),tags:["物理","电动力学","辐射","电偶极辐射","磁偶极辐射","拉莫尔公式","李纳公式"],category:["物理","电动力学"],summary:"本文系统讨论电磁辐射理论，包括辐射的基本概念与判据、电偶极辐射的完整推导（矢势、标势、辐射场、功率与角分布）、磁偶极辐射、任意源辐射的多极展开，以及运动电荷的辐射（拉莫尔公式、李纳公式、轫致辐射、同步辐射），最后介绍辐射反作用力（Abraham-Lorentz公式）。",comments:!0,draft:!1,sticky:0},m={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/12-Radiation.md",rawData:void 0};export{m as _internal,o as body,a as collection,t as data,n as id,l as slug};
