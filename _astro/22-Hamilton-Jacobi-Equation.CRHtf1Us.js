const n="physics/TheoreticalMechanics/22-Hamilton-Jacobi-Equation.md",a="posts",t="physics/theoreticalmechanics/22-hamilton-jacobi-equation",$=`
## 从正则变换到哈密顿-雅可比方程

### 理想的正则变换

正则变换的核心目标：寻找合适的母函数，使变换后的哈密顿函数 $H'$ 尽可能简单。**理想情况**是 $H' = 0$，此时正则方程变为

$$
\\begin{align}
\\dot{Q}_\\alpha = 0, \\quad \\dot{P}_\\alpha = 0
\\end{align}
$$

即 $Q_\\alpha$ 和 $P_\\alpha$ 均为常数，问题完全解决。

### 第二类母函数的设定

设选择第二类母函数 $S(q, P, t)$（通常称为**哈密顿主函数**），使得

$$
\\begin{align}
H'\\left(Q, P, t\\right) = H\\left(q, p, t\\right) + \\frac{\\partial S}{\\partial t} = 0
\\end{align}
$$

利用变换关系 $p_\\alpha = \\partial S / \\partial q_\\alpha$，代入上式得

$$
\\begin{align}
H\\left(q_1, \\dots, q_s, \\frac{\\partial S}{\\partial q_1}, \\dots, \\frac{\\partial S}{\\partial q_s}, t\\right) + \\frac{\\partial S}{\\partial t} = 0
\\end{align}
$$

这就是**哈密顿-雅可比方程**。它是一个关于 $S$ 的一阶偏微分方程，包含 $s+1$ 个自变量（$q_1,\\dots,q_s,t$）。

### 哈密顿主函数与作用量的关系

哈密顿主函数 $S(q, P, t)$ 就是端点不固定的哈密顿作用量：

$$
\\begin{align}
S = \\int L \\,\\mathrm{d}t = \\int \\left( \\sum_\\alpha p_\\alpha \\mathrm{d}q_\\alpha - H \\mathrm{d}t \\right)
\\end{align}
$$

但需注意，拉格朗日函数具有不确定性，因此 $S$ 的构建需要谨慎。

## 哈密顿-雅可比方程的解法

### 当 $H$ 不显含时间时

若 $H$ 不显含时间（能量守恒），可设

$$
\\begin{align}
S(q, P, t) = W(q, P) - E(P) t
\\end{align}
$$

其中 $E(P)$ 是能量常数（由 $P$ 参数化），$W(q, P)$ 称为**哈密顿特征函数**。代入哈-雅方程得

$$
\\begin{align}
H\\left(q, \\frac{\\partial W}{\\partial q}\\right) = E(P)
\\end{align}
$$

这就是以作用量形式表达的能量守恒方程。

### 分离变量法

若哈密顿函数可分离变量，则哈-雅方程可用分离变量法求解。设

$$
\\begin{align}
W(q_1, \\dots, q_s) = W_1(q_1) + W_2(q_2) + \\cdots + W_s(q_s)
\\end{align}
$$

每个 $W_\\alpha$ 只依赖一个坐标，代入哈-雅方程后可得到 $s$ 个常微分方程。

**例**：开普勒问题（平面极坐标）

哈密顿函数为

$$
\\begin{align}
H = \\frac{1}{2m} \\left( p_r^2 + \\frac{p_\\theta^2}{r^2} \\right) - \\frac{k}{r}
\\end{align}
$$

哈-雅方程为

$$
\\begin{align}
\\frac{1}{2m} \\left[ \\left( \\frac{\\partial W}{\\partial r} \\right)^2 + \\frac{1}{r^2} \\left( \\frac{\\partial W}{\\partial \\theta} \\right)^2 \\right] - \\frac{k}{r} = E
\\end{align}
$$

设 $W = W_r(r) + W_\\theta(\\theta)$，则

$$
\\begin{align}
\\frac{1}{2m} \\left( \\frac{\\mathrm{d}W_r}{\\mathrm{d}r} \\right)^2 + \\frac{1}{2m r^2} \\left( \\frac{\\mathrm{d}W_\\theta}{\\mathrm{d}\\theta} \\right)^2 - \\frac{k}{r} = E
\\end{align}
$$

由于 $\\theta$ 是循环坐标，$\\mathrm{d}W_\\theta/\\mathrm{d}\\theta = L_z$（常数）。于是径向方程为

$$
\\begin{align}
\\frac{\\mathrm{d}W_r}{\\mathrm{d}r} = \\sqrt{2m\\left( E + \\frac{k}{r} \\right) - \\frac{L_z^2}{r^2}}
\\end{align}
$$

积分可得 $W_r$。

## 由哈密顿-雅可比方程求运动

求解哈-雅方程得到 $S(q, P, t)$ 后，可通过以下步骤获得全部运动：

1. **轨道方程**：

   $$
   \\begin{align}
   \\frac{\\partial S}{\\partial P_\\alpha} = \\text{常数}
   \\end{align}
   $$

2. **坐标变化规律**（运动方程）：

   $$
   \\begin{align}
   \\frac{\\partial S}{\\partial E} = t - t_0
   \\end{align}
   $$

3. **动量变化规律**：
   $$
   \\begin{align}
   p_\\alpha = \\frac{\\partial S}{\\partial q_\\alpha}
   \\end{align}
   $$

## 应用实例

### 例1：自由粒子

哈密顿函数 $H = \\dfrac{p^2}{2m}$，哈-雅方程为

$$
\\begin{align}
\\frac{1}{2m} \\left( \\frac{\\partial S}{\\partial x} \\right)^2 + \\frac{\\partial S}{\\partial t} = 0
\\end{align}
$$

设 $S = W(x) - Et$，$E = \\dfrac{1}{2m} \\left( \\dfrac{\\mathrm{d}W}{\\mathrm{d}x} \\right)^2$。解得 $W = \\sqrt{2mE}\\, x$，故

$$
\\begin{align}
S = \\sqrt{2mE}\\, x - Et
\\end{align}
$$

由 $\\partial S / \\partial E = 0$ 得 $x = \\sqrt{\\dfrac{2E}{m}} t$，即匀速直线运动。

### 例2：一维谐振子

哈密顿函数 $H = \\dfrac{p^2}{2m} + \\dfrac{1}{2} m \\omega^2 q^2$。哈-雅方程为

$$
\\begin{align}
\\frac{1}{2m} \\left( \\frac{\\partial W}{\\partial q} \\right)^2 + \\frac{1}{2} m \\omega^2 q^2 = E
\\end{align}
$$

解得

$$
\\begin{align}
W(q) = \\int \\sqrt{2mE - m^2 \\omega^2 q^2} \\,\\mathrm{d}q
\\end{align}
$$

由此可得到谐振子的全部运动。

## 哈密顿-雅可比方程与量子力学

哈密顿-雅可比方程是经典力学到量子力学的桥梁。薛定谔在建立波动力学时，将电子视为物质波，并从哈密顿-雅可比方程出发，做变换

$$
\\begin{align}
\\psi = e^{\\mathrm{i} S / \\hbar}
\\end{align}
$$

代入哈-雅方程并保留 $\\hbar$ 的一阶项，可得到薛定谔方程。这一方法称为 **WKB 近似**（Wentzel-Kramers-Brillouin 近似），是半经典量子力学的重要工具。

## 作用量-角变量

对于周期运动系统（如谐振子、刚体转动），可定义**作用量变量**

$$
\\begin{align}
J = \\oint p \\,\\mathrm{d}q
\\end{align}
$$

其中积分沿一个完整周期进行。$J$ 是运动积分（绝热不变量）。对应的**角变量** $w$ 满足

$$
\\begin{align}
\\dot{w} = \\nu = \\frac{\\partial H}{\\partial J}
\\end{align}
$$

即 $w$ 随时间匀速增加，频率 $\\nu$ 为常数。作用量-角变量方法将周期运动化为匀速转动，在旧量子论（玻尔-索末菲量子化条件 $J = nh$）中有重要应用。

## 小结

- 哈密顿-雅可比方程：$H(q, \\partial S / \\partial q, t) + \\partial S / \\partial t = 0$
- 哈密顿主函数 $S(q, P, t)$ 是第二类母函数
- 若 $H$ 不显含时间，设 $S = W(q, P) - E(P)t$，$W$ 为哈密顿特征函数
- 分离变量法是求解哈-雅方程的主要方法
- 由 $S$ 可得到轨道方程、运动方程和动量变化规律
- 哈-雅方程是连接经典力学和量子力学（薛定谔方程、WKB 近似）的桥梁
- 作用量-角变量方法将周期运动化为匀速转动
`,i={title:"哈密顿-雅可比方程",author:"NeoWangKing",date:new Date(1781630488e3),lastMod:new Date(1782494498e3),tags:["物理","理论力学","哈密顿-雅可比方程","正则变换","可积系统"],category:["物理","理论力学"],summary:"本文介绍哈密顿-雅可比方程，它是哈密顿力学中求解动力学问题的最高形式。通过恰当的正则变换寻找使新哈密顿函数为零或仅为常数的方法，将哈密顿-雅可比方程化为偏微分方程，并用分离变量法求解。",comments:!0,draft:!1,sticky:0},r={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/22-Hamilton-Jacobi-Equation.md",rawData:void 0};export{r as _internal,$ as body,a as collection,i as data,n as id,t as slug};
