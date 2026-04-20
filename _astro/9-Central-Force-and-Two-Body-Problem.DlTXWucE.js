const n="physics/TheoreticalMechanics/9-Central-Force-and-Two-Body-Problem.md",$="posts",a="physics/theoreticalmechanics/9-central-force-and-two-body-problem",r=`
## 两体问题概述

### 问题的定义

两体问题研究两个相互作用粒子的运动。与两个独立的单粒子不同，两体之间存在相互作用，其运动方程是耦合的。

两体问题的一个重要结论：**两体运动可分解为质心运动和相对运动**。

### 拉格朗日函数

设两质点质量分别为 $m_1$ 和 $m_2$，位矢分别为 $\\boldsymbol{r}_1$ 和 $\\boldsymbol{r}_2$，相互作用势能只依赖于相对距离 $V(|\\boldsymbol{r}_1 - \\boldsymbol{r}_2|)$。系统的拉格朗日函数为

$$
\\begin{align}
L = \\frac{1}{2} m_1 \\dot{\\boldsymbol{r}}_1^2 + \\frac{1}{2} m_2 \\dot{\\boldsymbol{r}}_2^2 - V(|\\boldsymbol{r}_1 - \\boldsymbol{r}_2|)
\\end{align}
$$

## 约化为单粒子问题

### 质心坐标与相对坐标

引入质心坐标 $\\boldsymbol{R}$ 和相对坐标 $\\boldsymbol{r}$：

$$
\\begin{align}
\\boldsymbol{R} &= \\frac{m_1 \\boldsymbol{r}_1 + m_2 \\boldsymbol{r}_2}{m_1 + m_2} \\\\
\\boldsymbol{r} &= \\boldsymbol{r}_1 - \\boldsymbol{r}_2
\\end{align}
$$

用质心坐标和相对坐标表示，拉格朗日函数变为

$$
\\begin{align}
L = \\frac{1}{2} M \\dot{\\boldsymbol{R}}^2 + \\frac{1}{2} \\mu \\dot{\\boldsymbol{r}}^2 - V(|\\boldsymbol{r}|)
\\end{align}
$$

其中 $M = m_1 + m_2$ 是总质量，$\\mu = \\dfrac{m_1 m_2}{m_1 + m_2}$ 是**约化质量**。

### 质心运动与相对运动

- **质心运动**：$\\dfrac{1}{2} M \\dot{\\boldsymbol{R}}^2$ 对应自由粒子，质心做匀速直线运动
- **相对运动**：$\\dfrac{1}{2} \\mu \\dot{\\boldsymbol{r}}^2 - V(|\\boldsymbol{r}|)$ 对应质量为 $\\mu$ 的粒子在中心势场 $V(r)$ 中的运动

**结论**：两体问题约化为一个单粒子在中心势场中的运动问题。这意味着两个实体粒子的运动等价于两个假想粒子的运动（质心粒子和相对运动粒子）。

## 中心势场中的单粒子运动

### 中心势场的定义

**中心势场**是指势能函数只依赖于到力心的距离 $r$，即 $V = V(r)$。中心势场中的粒子受力为**有心力**：

$$
\\begin{align}
\\boldsymbol{F} = -\\nabla V(r) = -\\frac{\\mathrm{d}V}{\\mathrm{d}r} \\hat{\\boldsymbol{r}}
\\end{align}
$$

### 角动量守恒与平面运动

由于有心力对力心的力矩为零，角动量守恒：

$$
\\begin{align}
\\boldsymbol{L} = \\boldsymbol{r} \\times \\boldsymbol{p} = \\text{常数}
\\end{align}
$$

角动量守恒的推论：

- 粒子的运动轨迹在同一平面内（垂直于 $\\boldsymbol{L}$ 的平面）
- 面积速度守恒（开普勒第二定律）

### 平面极坐标下的拉格朗日函数

选取运动平面为极坐标平面，拉格朗日函数为

$$
\\begin{align}
L = \\frac{1}{2} \\mu (\\dot{r}^2 + r^2 \\dot{\\theta}^2) - V(r)
\\end{align}
$$

## 有效势能与运动分析

### 守恒量

由于 $L$ 不显含 $\\theta$，$\\theta$ 是循环坐标，广义动量守恒：

$$
\\begin{align}
p_\\theta = \\frac{\\partial L}{\\partial \\dot{\\theta}} = \\mu r^2 \\dot{\\theta} = \\text{常数} \\equiv l
\\end{align}
$$

$l$ 是角动量的大小。同时，$L$ 不显含时间，能量守恒：

$$
\\begin{align}
E = \\frac{1}{2} \\mu (\\dot{r}^2 + r^2 \\dot{\\theta}^2) + V(r) = \\text{常数}
\\end{align}
$$

### 有效势能

利用角动量守恒消去 $\\dot{\\theta}$，径向运动方程为

$$
\\begin{align}
E = \\frac{1}{2} \\mu \\dot{r}^2 + \\frac{l^2}{2\\mu r^2} + V(r)
\\end{align}
$$

定义**有效势能**

$$
\\begin{align}
V_{\\text{eff}}(r) = \\frac{l^2}{2\\mu r^2} + V(r)
\\end{align}
$$

则径向运动等价于一维粒子在有效势场中的运动：

$$
\\begin{align}
E = \\frac{1}{2} \\mu \\dot{r}^2 + V_{\\text{eff}}(r)
\\end{align}
$$

其中 $\\dfrac{l^2}{2\\mu r^2}$ 是离心势能项。

### 有效势能定性分析

通过分析有效势能的形状，可以判断粒子的运动类型：

- **束缚态**：能量 $E < 0$，粒子在 $r_{\\min}$ 和 $r_{\\max}$ 之间振荡，轨道闭合
- **散射态**：能量 $E > 0$，粒子从无穷远来，到无穷远去
- **圆轨道**：能量等于有效势能的极小值，$r = \\text{常数}$

## 轨道方程

### 轨道微分方程

由 $\\dot{\\theta} = l / \\mu r^2$ 和 $\\dot{r} = \\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta} \\dot{\\theta}$，可得轨道微分方程（比内公式）：

$$
\\begin{align}
\\frac{\\mathrm{d}^2 u}{\\mathrm{d}\\theta^2} + u = -\\frac{\\mu}{l^2 u^2} F\\left(\\frac{1}{u}\\right)
\\end{align}
$$

其中 $u = 1/r$，$F(r) = -\\mathrm{d}V/\\mathrm{d}r$ 是径向力的大小。

### 平方反比引力场

对于万有引力或库仑引力，$F(r) = -k/r^2$（$k > 0$）。轨道方程为

$$
\\begin{align}
\\frac{\\mathrm{d}^2 u}{\\mathrm{d}\\theta^2} + u = \\frac{\\mu k}{l^2}
\\end{align}
$$

解为

$$
\\begin{align}
u = \\frac{1}{r} = \\frac{\\mu k}{l^2} [1 + e \\cos(\\theta - \\theta_0)]
\\end{align}
$$

这是圆锥曲线方程，偏心率 $e = \\sqrt{1 + \\dfrac{2E l^2}{\\mu k^2}}$：

- $e = 0$：圆轨道
- $0 < e < 1$：椭圆轨道
- $e = 1$：抛物线轨道
- $e > 1$：双曲线轨道

## 散射问题与卢瑟福散射

### 散射问题的基本概念

散射问题是中心势场问题的重要应用。一个粒子从无穷远入射，在中心势场中偏转后飞向无穷远。关键物理量是**散射截面**。

### 卢瑟福散射

卢瑟福散射是 $\\alpha$ 粒子在原子核库仑势场中的散射，是发现原子核结构的关键实验。散射截面公式为

$$
\\begin{align}
\\frac{\\mathrm{d}\\sigma}{\\mathrm{d}\\Omega} = \\left( \\frac{k}{4E} \\right)^2 \\frac{1}{\\sin^4(\\theta/2)}
\\end{align}
$$

其中 $k = \\dfrac{Z_1 Z_2 e^2}{4\\pi\\epsilon_0}$，$E$ 是入射粒子的动能。

## 小结

- 两体问题可约化为质心运动（自由粒子）和相对运动（单粒子在中心势场）两部分
- 中心势场中的粒子角动量守恒，运动限制在平面内
- 有效势能方法将径向运动化为一维问题，便于定性分析
- 平方反比引力场中的轨道是圆锥曲线
- 散射问题（尤其是卢瑟福散射）是中心势场理论的重要应用
`,t={title:"中心势场与两体问题",author:"NeoWangKing",date:new Date(1775478622e3),lastMod:new Date(1775478622e3),tags:["物理","理论力学","中心势场","两体问题","有心力","有效势能"],category:["物理","理论力学"],summary:"本文介绍中心势场中的粒子运动与两体问题，包括两体问题约化为单粒子问题的方法、角动量守恒与平面运动、有效势能、轨道方程以及散射问题的重要应用（卢瑟福散射）。",comments:!0,draft:!1,sticky:0},l={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/9-Central-Force-and-Two-Body-Problem.md",rawData:void 0};export{l as _internal,r as body,$ as collection,t as data,n as id,a as slug};
