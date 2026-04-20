const n="physics/TheoreticalMechanics/10-Central-Force-Orbit-Stability.md",$="posts",e="physics/theoreticalmechanics/10-central-force-orbit-stability",t=`
## 与距离成反比的中心势场

### 平方反比力

在经典力学中，万有引力（或库仑力）是典型的与距离平方成反比的有心力，势能形式为

$$
\\begin{align}
V(r) = -\\frac{k}{r}
\\end{align}
$$

其中 $k > 0$ 对应吸引势（如引力），$k < 0$ 对应排斥势（如同性电荷）。

### 轨道方程

由比耐公式，在平方反比力 $F(r) = -k/r^2$ 作用下，轨道微分方程为

$$
\\begin{align}
\\frac{\\mathrm{d}^2 u}{\\mathrm{d}\\theta^2} + u = \\frac{\\mu k}{l^2}
\\end{align}
$$

其中 $u = 1/r$，$\\mu$ 是约化质量，$l$ 是角动量。该方程的解为

$$
\\begin{align}
u = \\frac{1}{r} = \\frac{\\mu k}{l^2} [1 + e \\cos(\\theta - \\theta_0)]
\\end{align}
$$

这是圆锥曲线方程，偏心率 $e$ 为

$$
\\begin{align}
e = \\sqrt{1 + \\frac{2E l^2}{\\mu k^2}}
\\end{align}
$$

其中 $E$ 是总能量。

### 轨道的分类

根据能量 $E$ 的正负，轨道类型如下：

|  能量   |    偏心率     |    轨道类型    | 说明               |
| :-----: | :-----------: | :------------: | :----------------- |
| $E < 0$ | $0 \\le e < 1$ | 椭圆（包括圆） | 束缚态，如行星轨道 |
| $E = 0$ |    $e = 1$    |     抛物线     | 临界态，非束缚     |
| $E > 0$ |    $e > 1$    |     双曲线     | 散射态，如彗星     |

**圆轨道**：当 $e = 0$ 时，轨道为圆。圆轨道要求

$$
\\begin{align}
E = -\\frac{\\mu k^2}{2l^2}, \\quad r = \\frac{l^2}{\\mu k}
\\end{align}
$$

### 排斥势

若 $k < 0$（排斥势），则轨道方程为

$$
\\begin{align}
\\frac{1}{r} = \\frac{\\mu |k|}{l^2} [ -1 + e \\cos(\\theta - \\theta_0) ]
\\end{align}
$$

此时轨道只能是双曲线的一支，粒子从无穷远来，在斥力作用下偏转后飞向无穷远。

## 轨道稳定性

### 稳定性的概念

**稳定性**：当一个微扰导致粒子轨道偏离原轨道后，若粒子运动仍能保持在原轨道附近，则该轨道是稳定的；否则是不稳定的。

例如，行星轨道在太阳引力作用下是稳定的（尽管有微小扰动，轨道不会发散），而某些势场中的轨道可能不稳定，导致卫星撞向中心或飞向无穷远。

### 比耐公式

从牛顿第二定律出发，可以得到轨道微分方程——**比耐公式**：

$$
\\begin{align}
\\frac{\\mathrm{d}^2 u}{\\mathrm{d}\\theta^2} + u = -\\frac{\\mu}{l^2 u^2} F\\left(\\frac{1}{u}\\right)
\\end{align}
$$

其中 $u = 1/r$，$F(r)$ 是有心力的大小（正号表示斥力，负号表示引力）。

### 圆轨道的稳定性判据

对于中心势场 $V(r)$，圆轨道存在的条件是有效势能 $V_{\\text{eff}}(r) = V(r) + \\frac{l^2}{2\\mu r^2}$ 的导数为零：

$$
\\begin{align}
V'_{\\text{eff}}(r_0) = 0 \\quad \\Rightarrow \\quad F(r_0) = -\\frac{l^2}{\\mu r_0^3}
\\end{align}
$$

圆轨道的稳定性由有效势能的二阶导数决定：

- 若 $V''_{\\text{eff}}(r_0) > 0$，圆轨道稳定
- 若 $V''_{\\text{eff}}(r_0) < 0$，圆轨道不稳定

对于幂律势 $V(r) = -\\alpha r^{-\\beta}$，可推导出稳定条件为 $\\beta < 2$（即力与距离的幂次小于 3）。平方反比力（$\\beta = 1$）满足此条件，因此行星轨道是稳定的。

### 稳定性判断的另一种方法

考虑轨道受到微小扰动 $r(\\theta) = r_0(\\theta) + \\delta r(\\theta)$，代入比耐公式并线性化，可得到 $\\delta r$ 满足的方程：

$$
\\begin{align}
\\frac{\\mathrm{d}^2 (\\delta r)}{\\mathrm{d}\\theta^2} + \\left(3 + \\frac{r_0 F'(r_0)}{F(r_0)}\\right) \\delta r = 0
\\end{align}
$$

若括号内为正，则 $\\delta r$ 做简谐振动，轨道稳定；若为负，则 $\\delta r$ 指数增长，轨道不稳定。对于平方反比力，括号内为 $1 > 0$，所以稳定。

## 总结

- 平方反比吸引势下的轨道是圆锥曲线，由能量决定形状
- 圆轨道的稳定性取决于有效势能的二阶导数
- 平方反比力场中的圆轨道是稳定的
- 比耐公式是分析轨道形状和稳定性的有力工具
`,a={title:"中心势场中的轨道与稳定性",author:"NeoWangKing",date:new Date(1775835082e3),lastMod:new Date(1776699082e3),tags:["物理","理论力学","中心势场","轨道稳定性","比耐公式","反比势能"],category:["物理","理论力学"],summary:"本文讨论与距离成反比（平方反比力）的中心势场中粒子的运动轨道，包括吸引势下的椭圆、抛物线、双曲线轨道，以及圆形轨道的稳定性判据，推导比耐公式并分析轨道稳定性条件。",comments:!0,draft:!1,sticky:0},r={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/10-Central-Force-Orbit-Stability.md",rawData:void 0};export{r as _internal,t as body,$ as collection,a as data,n as id,e as slug};
