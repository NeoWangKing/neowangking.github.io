const n="physics/TheoreticalMechanics/03-Two-Body-Problem-and-Central-Force.md",$="posts",a="physics/theoreticalmechanics/03-two-body-problem-and-central-force",t=`
## 两体问题概述

### 问题的定义

两体问题研究两个相互作用粒子的运动。与两个独立的单粒子不同，两体之间存在相互作用，其运动方程是耦合的。

两体运动可分解为**质心运动**和**相对运动**。

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

- **束缚态**：$E < 0$，粒子在 $r_{\\min}$ 和 $r_{\\max}$ 之间振荡
- **散射态**：$E > 0$，粒子从无穷远来，到无穷远去
- **圆轨道**：能量等于有效势能的极小值

## 轨道方程

### 比耐公式

由 $\\dot{\\theta} = l / \\mu r^2$ 和 $\\dot{r} = \\dfrac{\\mathrm{d}r}{\\mathrm{d}\\theta} \\dot{\\theta}$，可得轨道微分方程（比耐公式）：

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

|  能量   |    偏心率     |      轨道类型      |
| :-----: | :-----------: | :----------------: |
| $E < 0$ | $0 \\le e < 1$ | 椭圆（$e=0$ 为圆） |
| $E = 0$ |    $e = 1$    |       抛物线       |
| $E > 0$ |    $e > 1$    |       双曲线       |

### 圆轨道的稳定性判据

圆轨道存在的条件是 $V'_{\\text{eff}}(r_0) = 0$。稳定性由二阶导数决定：

- $V''_{\\text{eff}}(r_0) > 0$：稳定
- $V''_{\\text{eff}}(r_0) < 0$：不稳定

对于平方反比力，$V''_{\\text{eff}} > 0$，圆轨道稳定。

## 弹性碰撞与散射截面

### 质心系与实验室系

在质心系中，两粒子的速率在碰撞前后不变，只是方向改变。实验室系与质心系散射角的关系（靶初始静止）为

$$
\\begin{align}
\\tan\\theta_{\\text{lab}} = \\frac{\\sin\\theta_{\\text{cm}}}{\\cos\\theta_{\\text{cm}} + m_1/m_2}
\\end{align}
$$

### 散射截面

微分散射截面定义为

$$
\\begin{align}
\\frac{\\mathrm{d}\\sigma}{\\mathrm{d}\\Omega} = \\left|\\frac{b}{\\sin\\theta}\\frac{\\mathrm{d}b}{\\mathrm{d}\\theta}\\right|
\\end{align}
$$

其中 $b$ 是碰撞参数，$\\theta$ 是散射角。

### 卢瑟福散射

在排斥库仑势 $V(r) = \\alpha/r$（$\\alpha > 0$）中，散射角与碰撞参数的关系为

$$
\\begin{align}
b = \\frac{\\alpha}{2E} \\cot\\left(\\frac{\\theta}{2}\\right)
\\end{align}
$$

微分散射截面（卢瑟福公式）：

$$
\\begin{align}
\\frac{\\mathrm{d}\\sigma}{\\mathrm{d}\\Omega} = \\left( \\frac{\\alpha}{4E} \\right)^2 \\frac{1}{\\sin^4(\\theta/2)}
\\end{align}
$$

## 小结

- 两体问题可约化为质心运动（自由粒子）和相对运动（单粒子在中心势场）
- 中心势场中角动量守恒，运动限制在平面内
- 有效势能方法将径向运动化为一维问题
- 平方反比引力场的轨道是圆锥曲线
- 卢瑟福散射公式是中心势场理论的重要应用
`,r={title:"两体问题与中心势场",author:"NeoWangKing",date:new Date(17748288e5),lastMod:new Date(1782646384e3),tags:["物理","理论力学","两体问题","中心势场","约化质量","有效势能","散射截面"],category:["物理","理论力学"],summary:"本文讨论两体问题的约化方法、中心势场中的运动、有效势能分析、比耐公式与平方反比力轨道，以及弹性碰撞和卢瑟福散射的微分散射截面。",comments:!0,draft:!1,sticky:0},e={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/03-Two-Body-Problem-and-Central-Force.md",rawData:void 0};export{e as _internal,t as body,$ as collection,r as data,n as id,a as slug};
