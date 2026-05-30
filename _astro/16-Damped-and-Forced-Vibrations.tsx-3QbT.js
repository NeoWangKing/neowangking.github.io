const n="physics/TheoreticalMechanics/16-Damped-and-Forced-Vibrations.md",a="posts",e="physics/theoreticalmechanics/16-damped-and-forced-vibrations",$=`
## 阻尼的一般性质

### 阻力的来源

- **摩擦阻力**：与正压力成正比，与速度方向相反，大小近似常数（库仑摩擦）
- **粘滞阻力**：与速度成正比，$F_{\\text{damp}} = -\\gamma v$（流体阻力）

本章主要讨论线性阻尼（阻力与速度的一次方成正比），这是小速度下的常见近似。

## 恒力作用下的阻尼直线运动

考虑质量为 $m$ 的物体在重力作用下下落，同时受到与速度成正比的空气阻力 $f = -\\gamma v$。

运动方程：

$$
\\begin{align}
m \\dot{v} = mg - \\gamma v
\\end{align}
$$

积分得速度：

$$
\\begin{align}
v(t) = \\frac{mg}{\\gamma} \\left(1 - e^{-\\gamma t/m}\\right)
\\end{align}
$$

**终端速度**：$v_T = mg/\\gamma$，当 $t \\to \\infty$ 时达到。位移为

$$
\\begin{align}
x(t) = \\frac{mg}{\\gamma} t - \\frac{m^2 g}{\\gamma^2} \\left(1 - e^{-\\gamma t/m}\\right)
\\end{align}
$$

**开伞问题**：若开伞后阻力系数变为 $\\gamma'$，则速度从 $v_0$ 开始以新的指数规律衰减至新终端速度 $v_T' = mg/\\gamma'$。

## 一维线性阻尼振动

### 运动方程

考虑弹簧振子（劲度系数 $k$），受粘滞阻力 $-\\gamma \\dot{x}$。运动方程为

$$
\\begin{align}
m \\ddot{x} + \\gamma \\dot{x} + kx = 0
\\end{align}
$$

令 $\\beta = \\gamma / (2m)$（阻尼系数），$\\omega_0 = \\sqrt{k/m}$（固有频率），方程化为

$$
\\begin{align}
\\ddot{x} + 2\\beta \\dot{x} + \\omega_0^2 x = 0
\\end{align}
$$

### 三种阻尼状态

设试解 $x = e^{\\lambda t}$，代入得特征方程 $\\lambda^2 + 2\\beta \\lambda + \\omega_0^2 = 0$，解得

$$
\\begin{align}
\\lambda = -\\beta \\pm \\sqrt{\\beta^2 - \\omega_0^2}
\\end{align}
$$

1. **欠阻尼**（$\\beta < \\omega_0$）：$\\lambda = -\\beta \\pm \\mathrm{i} \\omega_d$，其中 $\\omega_d = \\sqrt{\\omega_0^2 - \\beta^2}$。解为

$$
\\begin{align}
x(t) = A e^{-\\beta t} \\cos(\\omega_d t + \\varphi)
\\end{align}
$$

振幅指数衰减，振动频率 $\\omega_d$ 略小于 $\\omega_0$。

2. **临界阻尼**（$\\beta = \\omega_0$）：$\\lambda = -\\beta$（重根）。解为

$$
\\begin{align}
x(t) = (A + Bt) e^{-\\beta t}
\\end{align}
$$

无振动，系统最快回到平衡位置。

3. **过阻尼**（$\\beta > \\omega_0$）：两个负实根 $\\lambda_1, \\lambda_2$。解为

$$
\\begin{align}
x(t) = A e^{\\lambda_1 t} + B e^{\\lambda_2 t}
\\end{align}
$$

无振动，缓慢回到平衡。

## 周期性强迫振动

### 运动方程

在阻尼振动基础上施加周期性外力 $F_0 \\cos(\\omega t)$：

$$
\\begin{align}
\\ddot{x} + 2\\beta \\dot{x} + \\omega_0^2 x = \\frac{F_0}{m} \\cos(\\omega t)
\\end{align}
$$

稳态解为 $x_p(t) = A \\cos(\\omega t - \\delta)$，其中振幅 $A$ 和相位 $\\delta$ 由代入方程确定。

### 振幅与相位

代入后解得

$$
\\begin{align}
A(\\omega) &= \\frac{F_0/m}{\\sqrt{(\\omega_0^2 - \\omega^2)^2 + 4\\beta^2 \\omega^2}} \\\\
\\tan \\delta &= \\frac{2\\beta \\omega}{\\omega_0^2 - \\omega^2}
\\end{align}
$$

### 共振

振幅 $A(\\omega)$ 在频率 $\\omega_{\\text{res}} = \\sqrt{\\omega_0^2 - 2\\beta^2}$ 处取最大值（当 $\\beta < \\omega_0/\\sqrt{2}$）。若阻尼很小，共振频率近似为 $\\omega_0$，共振振幅约为

$$
\\begin{align}
A_{\\text{max}} \\approx \\frac{F_0}{2m\\beta \\omega_0} = \\frac{F_0}{\\gamma \\omega_0}
\\end{align}
$$

当 $\\omega = \\omega_0$ 时，相位 $\\delta = \\pi/2$，速度与外力同相，外力始终做正功，能量输入最大。

### 品质因子

品质因子 $Q$ 定义为

$$
\\begin{align}
Q = \\frac{\\omega_0}{2\\beta} = \\frac{\\sqrt{mk}}{\\gamma}
\\end{align}
$$

它度量共振峰的尖锐程度：$Q$ 越大，共振峰越窄，系统对频率的选择性越强。$Q$ 也等于振动周期内储能与耗能之比的 $2\\pi$ 倍。

## 能量关系

在稳态强迫振动中，外力输入的能量等于阻尼耗散的能量。平均功率为

$$
\\begin{align}
\\langle P \\rangle = \\frac{F_0^2 \\beta \\omega^2}{2m[(\\omega_0^2 - \\omega^2)^2 + 4\\beta^2 \\omega^2]} = \\frac{1}{2} \\gamma \\omega^2 A^2
\\end{align}
$$

在共振时，输入功率最大。

## 小结

- 线性阻尼振动的解分为欠阻尼、临界阻尼、过阻尼三种情况
- 强迫振动的稳态响应与频率有关，存在共振现象
- 品质因子 $Q$ 描述共振峰的尖锐程度
- 阻尼不仅消耗能量，还决定了系统对频率的选择性
`,m={title:"阻尼振动与受迫振动",author:"NeoWangKing",date:new Date(1780131226e3),lastMod:new Date(1780131234e3),tags:["物理","理论力学","阻尼振动","受迫振动","共振"],category:["物理","理论力学"],summary:"本文讨论有阻力的振动问题，包括恒力作用下的阻尼直线运动、一维线性阻尼振动（欠阻尼、临界阻尼、过阻尼），以及周期性强迫振动的稳态解、共振现象和品质因子。",comments:!0,draft:!1,sticky:0},g={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/16-Damped-and-Forced-Vibrations.md",rawData:void 0};export{g as _internal,$ as body,a as collection,m as data,n as id,e as slug};
