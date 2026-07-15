const n="mathematics/MMiP/9-Mathematical-Physics-Final-Review.md",$="posts",a="mathematics/mmip/9-mathematical-physics-final-review",t=`
## 第一章 复变函数

### 1.1 复数与复数运算

**复数的表示形式**

复数有两种等价的表示方法：

代数形式：$z = x + \\mathrm{i}y$，其中 $x = \\operatorname{Re}z$ 称为实部，$y = \\operatorname{Im}z$ 称为虚部，$\\mathrm{i} = \\sqrt{-1}$ 为虚数单位。

三角形式（极坐标形式）：由欧拉公式 $e^{\\mathrm{i}\\theta} = \\cos\\theta + \\mathrm{i}\\sin\\theta$，复数可表示为

$$
z = \\rho e^{\\mathrm{i}\\theta} = \\rho(\\cos\\theta + \\mathrm{i}\\sin\\theta)
$$

其中 $\\rho = |z| = \\sqrt{x^2 + y^2}$ 称为**模**，表示复数在复平面上到原点的距离；$\\theta = \\operatorname{Arg}z$ 称为**辐角**，表示从正实轴逆时针旋转到该点所在射线的角度。

**多值性与主辐角**

辐角 $\\operatorname{Arg}z$ 不能唯一确定，因为 $e^{\\mathrm{i}(\\theta + 2k\\pi)} = e^{\\mathrm{i}\\theta}$，故辐角可以相差 $2\\pi$ 的任意整数倍：

$$
\\operatorname{Arg}z = \\operatorname{arg}z + 2k\\pi, \\quad k \\in \\mathbb{Z}
$$

其中 $\\operatorname{arg}z$ 通常限制在某个长度为 $2\\pi$ 的区间内（如 $(-\\pi, \\pi]$ 或 $[0, 2\\pi)$），称为**主辐角**。

**无穷远点**

将模为无穷大的复数对应为复平面上一个理想点——**无穷远点**，记作 $\\infty$。引入无穷远点后，复平面加上无穷远点可与**复数球**（黎曼球面）建立一一对应关系。注意无穷远点的辐角没有明确意义。

**共轭复数**

复数 $z = x + \\mathrm{i}y$ 的共轭定义为 $\\bar{z} = x - \\mathrm{i}y$。在极坐标下，若 $z = \\rho e^{\\mathrm{i}\\theta}$，则 $\\bar{z} = \\rho e^{-\\mathrm{i}\\theta}$。共轭的基本性质：

- $z + \\bar{z} = 2\\operatorname{Re}z = 2x$，$z - \\bar{z} = 2\\mathrm{i}\\operatorname{Im}z = 2\\mathrm{i}y$
- $z\\bar{z} = |z|^2 = x^2 + y^2$
- $\\overline{z_1 + z_2} = \\bar{z}_1 + \\bar{z}_2$，$\\overline{z_1 z_2} = \\bar{z}_1 \\bar{z}_2$

**复数的运算**

加减法按实部和虚部分别运算：

$$
z_1 \\pm z_2 = (x_1 \\pm x_2) + \\mathrm{i}(y_1 \\pm y_2)
$$

乘除法在极坐标下更为简便。设 $z_1 = \\rho_1 e^{\\mathrm{i}\\theta_1}$，$z_2 = \\rho_2 e^{\\mathrm{i}\\theta_2}$：

$$
z_1 z_2 = \\rho_1 \\rho_2 e^{\\mathrm{i}(\\theta_1 + \\theta_2)}
$$

即模相乘，辐角相加。

$$
\\frac{z_1}{z_2} = \\frac{\\rho_1}{\\rho_2} e^{\\mathrm{i}(\\theta_1 - \\theta_2)}, \\quad z_2 \\neq 0
$$

即模相除，辐角相减。

乘方（棣莫弗公式）：

$$
z^n = \\rho^n e^{\\mathrm{i}n\\theta} = \\rho^n(\\cos n\\theta + \\mathrm{i}\\sin n\\theta)
$$

开方：

$$
\\sqrt[n]{z} = \\sqrt[n]{\\rho}\\, e^{\\mathrm{i}(\\theta + 2k\\pi)/n}, \\quad k = 0, 1, 2, \\dots, n-1
$$

由于 $k$ 可取 $n$ 个不同值，开方运算给出 $n$ 个不同的复数（当 $z \\neq 0$ 时），这就是复变函数**多值性**的来源。例如 $\\sqrt[3]{1}$ 有三个值：$1$，$e^{2\\pi\\mathrm{i}/3}$，$e^{4\\pi\\mathrm{i}/3}$。

### 1.2 复变函数的基本概念

**定义**：设 $E$ 是复平面上的一个点集（通常是一个区域）。如果对于 $E$ 中的每一个复数 $z$，都有一个或多个复数 $w$ 与之对应，则称 $w$ 是 $z$ 的**复变函数**，记作

$$
w = f(z), \\quad z \\in E
$$

$z$ 称为**宗量**（自变量），$E$ 称为**定义域**。

将 $w$ 和 $z$ 分别写成实部和虚部的形式：$w = u + \\mathrm{i}v$，$z = x + \\mathrm{i}y$，那么一个复变函数等价于两个实二元函数：

$$
w = f(z) = u(x,y) + \\mathrm{i}v(x,y)
$$

**例**：$w = z^2 = (x + \\mathrm{i}y)^2 = (x^2 - y^2) + \\mathrm{i}(2xy)$，则 $u(x,y) = x^2 - y^2$，$v(x,y) = 2xy$。

若每个 $z$ 只对应一个 $w$，则称 $f(z)$ 为**单值函数**；否则为**多值函数**。多值函数在复变函数论中非常重要，需通过**分支切割**和**黎曼面**等概念来处理。

### 1.3 区域的概念

在复变函数论中，**区域**是一个核心概念。

**邻域**：以 $z_0$ 为圆心、任意小的正数 $\\varepsilon$ 为半径的圆内所有点的集合，称为 $z_0$ 的 $\\varepsilon$-邻域。

**内点**：若点 $z$ 及其某个邻域的所有点都属于点集 $E$，则 $z$ 是 $E$ 的内点。

**外点**：若点 $z$ 及其某个邻域的所有点都不属于点集 $E$，则 $z$ 是 $E$ 的外点。

**边界点**：若点 $z$ 的任意邻域内都同时含有属于和不属于点集 $E$ 的点，则 $z$ 是 $E$ 的边界点。所有边界点的集合称为**边界**。

**区域**：满足以下两个条件的点集称为**区域**（或开区域）：

1. 全由内点组成（即为开集）；
2. 具有连通性，即点集内任意两点可用一条完全落在点集内的折线连接。

区域加上其边界称为**闭区域**。

**单连通域与多连通域**：若区域 $B$ 内任何简单闭合曲线都可在 $B$ 内连续收缩为一点，则 $B$ 为**单连通域**（通俗地说就是"没有洞"的区域）；否则为**多连通域**（或复连通域）。

### 1.4 复变函数的极限与连续性

**极限**：$\\lim_{z \\to z_0} f(z) = A$ 是指：对于任意 $\\varepsilon > 0$，存在 $\\delta > 0$，使得当 $0 < |z - z_0| < \\delta$ 时，$|f(z) - A| < \\varepsilon$。这里要求对复数值的模而言。

用实部和虚部表示：设 $f(z) = u(x,y) + \\mathrm{i}v(x,y)$，$A = u_0 + \\mathrm{i}v_0$，则

$$
\\lim_{z \\to z_0} f(z) = A \\iff \\lim_{(x,y) \\to (x_0,y_0)} u(x,y) = u_0 \\text{ 且 } \\lim_{(x,y) \\to (x_0,y_0)} v(x,y) = v_0
$$

**连续性**：若 $\\lim_{z \\to z_0} f(z) = f(z_0)$，则称 $f(z)$ 在 $z_0$ 点**连续**。若在某区域 $B$ 内每点都连续，则称 $f(z)$ 在 $B$ 上连续。

### 1.5 导数与解析函数

**导数的定义**：设函数 $w = f(z)$ 定义在区域 $B$ 上，$z_0 \\in B$。若极限

$$
\\lim_{\\Delta z \\to 0} \\frac{f(z_0 + \\Delta z) - f(z_0)}{\\Delta z}
$$

存在且与 $\\Delta z \\to 0$ 的方式无关，则称 $f(z)$ 在 $z_0$ 点**可导**，此极限值称为 $f(z)$ 在 $z_0$ 点的**导数**，记作 $f'(z_0)$ 或 $\\frac{dw}{dz}\\big|_{z=z_0}$。

**与实变函数的本质区别**：在实变函数中，$\\Delta x \\to 0$ 只有两种方式（从左和从右）；而在复变函数中，$\\Delta z \\to 0$ 有无限多种方式（沿任意方向、任意路径）。因此，复变函数可导的条件远比实变函数苛刻，也正因如此，可导的复变函数具有许多优良性质。

**解析函数（全纯函数）的定义**：若 $f(z)$ 在 $z_0$ 的某个邻域内处处可导，则称 $f(z)$ 在 $z_0$ 点**解析**。若 $f(z)$ 在区域 $B$ 内处处解析，则称 $f(z)$ 是 $B$ 上的**解析函数**（或全纯函数）。

若 $f(z)$ 在 $z_0$ 不解析，则称 $z_0$ 为 $f(z)$ 的**奇点**。

解析函数是复变函数论的核心研究对象。解析性比可导性更强，因为它要求在一个**区域**（而不仅仅在一个点）上可导。

### 1.6 柯西-黎曼条件（C-R条件）

**定理（可导的必要条件）**：若 $f(z) = u(x,y) + \\mathrm{i}v(x,y)$ 在点 $z_0 = x_0 + \\mathrm{i}y_0$ 可导，则 $u,v$ 在该点的一阶偏导数存在，且满足

$$
\\boxed{\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}, \\qquad \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}}
$$

这两个方程称为**柯西-黎曼方程**（Cauchy-Riemann equations），简称 **C-R 条件**。

**证明**：因导数存在且与 $\\Delta z \\to 0$ 的方式无关，分别取 $\\Delta z = \\Delta x$（沿实轴方向）和 $\\Delta z = \\mathrm{i}\\Delta y$（沿虚轴方向），令两者相等即可得到 C-R 条件。具体推导如下：

沿实轴方向（$\\Delta z = \\Delta x$）：

$$
f'(z_0) = \\lim_{\\Delta x \\to 0} \\frac{u(x_0+\\Delta x, y_0) - u(x_0,y_0)}{\\Delta x} + \\mathrm{i} \\frac{v(x_0+\\Delta x, y_0) - v(x_0,y_0)}{\\Delta x} = \\frac{\\partial u}{\\partial x} + \\mathrm{i}\\frac{\\partial v}{\\partial x}
$$

沿虚轴方向（$\\Delta z = \\mathrm{i}\\Delta y$）：

$$
f'(z_0) = \\lim_{\\Delta y \\to 0} \\frac{u(x_0, y_0+\\Delta y) - u(x_0,y_0)}{\\mathrm{i}\\Delta y} + \\mathrm{i} \\frac{v(x_0, y_0+\\Delta y) - v(x_0,y_0)}{\\mathrm{i}\\Delta y} = -\\mathrm{i}\\frac{\\partial u}{\\partial y} + \\frac{\\partial v}{\\partial y}
$$

因两极限必须相等，得 $\\frac{\\partial u}{\\partial x} + \\mathrm{i}\\frac{\\partial v}{\\partial x} = \\frac{\\partial v}{\\partial y} - \\mathrm{i}\\frac{\\partial u}{\\partial y}$，比较实部和虚部即得 C-R 条件。

**定理（可导的充分条件）**：若 $u(x,y)$ 和 $v(x,y)$ 在点 $(x_0,y_0)$ 具有连续的一阶偏导数，且在该点满足 C-R 条件，则 $f(z) = u + \\mathrm{i}v$ 在 $z_0$ 点可导（从而解析）。

当 $f(z)$ 解析时，导数可用实部或虚部表示：

$$
\\boxed{f'(z) = \\frac{\\partial u}{\\partial x} + \\mathrm{i}\\frac{\\partial v}{\\partial x} = \\frac{\\partial v}{\\partial y} - \\mathrm{i}\\frac{\\partial u}{\\partial y}}
$$

### 1.7 调和函数与共轭调和函数

若 $f(z) = u + \\mathrm{i}v$ 在区域 $B$ 上解析，则 $u$ 和 $v$ 在 $B$ 上具有任意阶连续偏导数。对 C-R 方程分别求导：

由 $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$，两边对 $x$ 求偏导得 $\\frac{\\partial^2 u}{\\partial x^2} = \\frac{\\partial^2 v}{\\partial x \\partial y}$。

由 $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$，两边对 $y$ 求偏导得 $\\frac{\\partial^2 u}{\\partial y^2} = -\\frac{\\partial^2 v}{\\partial y \\partial x}$。

因混合偏导连续，$\\frac{\\partial^2 v}{\\partial x \\partial y} = \\frac{\\partial^2 v}{\\partial y \\partial x}$，两式相加得

$$
\\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0
$$

同理可证 $v$ 也满足拉普拉斯方程：

$$
\\frac{\\partial^2 v}{\\partial x^2} + \\frac{\\partial^2 v}{\\partial y^2} = 0
$$

满足拉普拉斯方程的函数称为**调和函数**。解析函数的实部和虚部都是调和函数，且通过 C-R 条件相互关联，此时称 $v$ 是 $u$ 的**共轭调和函数**（注意：$u$ 是 $-v$ 的共轭调和函数）。

**重要性质**：由于解析函数的实部和虚部分别满足拉普拉斯方程，解析函数与平面标量场（静电场、热传导、无旋流体等）有深刻的联系。这正是保角变换法和复势理论的基础。

### 1.8 平面标量场与复势

在无源区域，静电场电势、稳态温度场、无旋流体速度势等都满足二维拉普拉斯方程。可以用一个解析函数 $f(z) = u(x,y) + \\mathrm{i}v(x,y)$ 来统一描述这些场。通常称 $f(z)$ 为**复势**。

例如在静电场中，取 $u$ 为电势，则 $u(x,y) = C_1$ 表示**等势线**，而 $v(x,y) = C_2$ 表示**电场线**（因为由 C-R 条件可证 $\\nabla u \\perp \\nabla v$）。

曲线簇 $u = C_1$ 和 $v = C_2$ 相互正交，这是解析函数导出的调和场的重要几何特征。

### 1.9 初等解析函数

**指数函数**：$e^z = e^{x+\\mathrm{i}y} = e^x(\\cos y + \\mathrm{i}\\sin y)$ 在全平面解析，且 $(e^z)' = e^z$。它以 $2\\pi\\mathrm{i}$ 为周期。

**三角函数**：由欧拉公式定义

$$
\\sin z = \\frac{e^{\\mathrm{i}z} - e^{-\\mathrm{i}z}}{2\\mathrm{i}}, \\quad \\cos z = \\frac{e^{\\mathrm{i}z} + e^{-\\mathrm{i}z}}{2}
$$

它们在复平面上仍是解析的，且 $(\\sin z)' = \\cos z$，$(\\cos z)' = -\\sin z$。

**双曲函数**：

$$
\\sinh z = \\frac{e^z - e^{-z}}{2}, \\quad \\cosh z = \\frac{e^z + e^{-z}}{2}
$$

它们与三角函数的关系：$\\sinh z = -\\mathrm{i}\\sin(\\mathrm{i}z)$，$\\cosh z = \\cos(\\mathrm{i}z)$。

**对数函数**：若 $e^w = z$，则 $w = \\ln z$。由 $z = \\rho e^{\\mathrm{i}\\theta}$，得

$$
\\ln z = \\ln \\rho + \\mathrm{i}(\\theta + 2k\\pi), \\quad k \\in \\mathbb{Z}
$$

因此 $\\ln z$ 是一个**多值函数**，有无穷多个值，它们相差 $2\\pi\\mathrm{i}$ 的整数倍。取 $k = 0$ 且限制 $-\\pi < \\theta \\le \\pi$（即主辐角范围），得到**主值支**：

$$
\\operatorname{Ln} z = \\ln |z| + \\mathrm{i}\\operatorname{arg}z
$$

主值支在割去负实轴（包括原点）的复平面上解析，且 $(\\ln z)' = \\frac{1}{z}$。

**幂函数**：$z^\\alpha = e^{\\alpha \\ln z}$（$\\alpha$ 为复数）。由于 $\\ln z$ 是多值的，$z^\\alpha$ 一般也是多值的。当 $\\alpha$ 为整数时，$z^\\alpha$ 为单值；当 $\\alpha$ 为有理数 $\\frac{p}{q}$（既约）时，$z^\\alpha$ 有 $q$ 个不同值；当 $\\alpha$ 为无理数或非实复数时，$z^\\alpha$ 有无穷多个值。

### 1.10 典型例题

**例1**：已知 $u(x,y) = x^2 - y^2 + 2x$，求其共轭调和函数 $v(x,y)$，并构造解析函数 $f(z) = u + \\mathrm{i}v$。

**解**：由 C-R 条件：

$$
\\frac{\\partial v}{\\partial y} = \\frac{\\partial u}{\\partial x} = 2x + 2
$$

对 $y$ 积分（$x$ 视为常数）：

$$
v(x,y) = \\int (2x + 2)\\,dy = 2xy + 2y + \\phi(x)
$$

使用另一 C-R 条件：

$$
\\frac{\\partial v}{\\partial x} = 2y + \\phi'(x) = -\\frac{\\partial u}{\\partial y} = -(-2y) = 2y
$$

所以 $\\phi'(x) = 0$，$\\phi(x) = C$（常数）。取 $C = 0$，得

$$
v(x,y) = 2xy + 2y
$$

解析函数：

$$
f(z) = (x^2 - y^2 + 2x) + \\mathrm{i}(2xy + 2y) = (x + \\mathrm{i}y)^2 + 2(x + \\mathrm{i}y) = z^2 + 2z
$$

**例2**：试证 $u(x,y) = e^x(x\\cos y - y\\sin y)$ 是调和函数，并求其共轭调和函数。

**解**：首先验证 $\\Delta u = 0$：

$$
\\begin{aligned}
u_x &= e^x(x\\cos y - y\\sin y) + e^x(\\cos y) = e^x[(x+1)\\cos y - y\\sin y] \\\\
u_{xx} &= e^x[(x+2)\\cos y - y\\sin y] \\\\
u_y &= e^x(-x\\sin y - \\sin y - y\\cos y) = -e^x[(x+1)\\sin y + y\\cos y] \\\\
u_{yy} &= -e^x[(x+1)\\cos y + \\cos y - y\\sin y] = -e^x[(x+2)\\cos y - y\\sin y]
\\end{aligned}
$$

相加得 $u_{xx} + u_{yy} = 0$，确实调和。

由 C-R 求 $v$：

$$
v_y = u_x = e^x[(x+1)\\cos y - y\\sin y]
$$

积分得 $v = e^x[(x+1)\\sin y + y\\cos y] + \\phi(x)$（需仔细做分部积分）。继续用 $v_x = -u_y$ 应可定出 $\\phi(x) = C$。最终 $f(z) = z e^z$（可通过极坐标验证）。

---

## 第二章 复变函数的积分

### 2.1 复积分的定义与性质

**路积分的定义**

设 $C$ 是复平面上一条分段光滑的有向曲线，起点为 $\\alpha$，终点为 $\\beta$。函数 $f(z)$ 定义在 $C$ 上。将 $C$ 分割为 $n$ 小段，分点依次为 $z_0 = \\alpha, z_1, z_2, \\dots, z_n = \\beta$，在第 $k$ 小段上任取一点 $\\zeta_k$。做和式

$$
S_n = \\sum_{k=1}^n f(\\zeta_k) \\Delta z_k, \\quad \\Delta z_k = z_k - z_{k-1}
$$

若当分割无限加密（$\\max|\\Delta z_k| \\to 0$）时，$S_n$ 趋于确定的极限，且极限值与分割方式和 $\\zeta_k$ 的选取无关，则称此极限为 $f(z)$ 沿曲线 $C$ 的**路积分**，记作

$$
\\int_C f(z)\\,dz = \\lim_{\\max|\\Delta z_k| \\to 0} \\sum_{k=1}^n f(\\zeta_k) \\Delta z_k
$$

**用实线积分表示**

设 $f(z) = u(x,y) + \\mathrm{i}v(x,y)$，$dz = dx + \\mathrm{i}dy$，则

$$
\\begin{aligned}
\\int_C f(z)\\,dz &= \\int_C (u + \\mathrm{i}v)(dx + \\mathrm{i}dy) \\\\
&= \\int_C (u\\,dx - v\\,dy) + \\mathrm{i}\\int_C (v\\,dx + u\\,dy)
\\end{aligned}
$$

这样，复变函数的路积分就转化为两个实变函数的第二类曲线积分。

**基本性质**

1. 线性：$\\int_C [\\alpha f(z) + \\beta g(z)]\\,dz = \\alpha\\int_C f(z)\\,dz + \\beta\\int_C g(z)\\,dz$
2. 路径反向：$\\int_{C^-} f(z)\\,dz = -\\int_C f(z)\\,dz$
3. 路径分段：若 $C = C_1 + C_2$，则 $\\int_C f\\,dz = \\int_{C_1} f\\,dz + \\int_{C_2} f\\,dz$
4. 模不等式（重要）：

   $$
   \\left|\\int_C f(z)\\,dz\\right| \\le \\int_C |f(z)|\\,|dz|
   $$

   进一步，若在 $C$ 上 $|f(z)| \\le M$，$C$ 的长度为 $L$，则

   $$
   \\left|\\int_C f(z)\\,dz\\right| \\le M L
   $$

   这个不等式在估算积分大小和证明某些极限为零时非常有用。

### 2.2 柯西积分定理

**定理2.1（柯西积分定理，单连通域情形）**

若函数 $f(z)$ 在单连通域 $D$ 内解析，在闭区域 $\\overline{D}$ 上连续，$C$ 是 $D$ 内任意一条分段光滑的简单闭曲线，则

$$
\\boxed{\\oint_C f(z)\\,dz = 0}
$$

**证明思路**（格林公式法）：由路积分用实线积分表示，

$$
\\oint_C f(z)\\,dz = \\oint_C (u\\,dx - v\\,dy) + \\mathrm{i}\\oint_C (v\\,dx + u\\,dy)
$$

对两个实线积分分别应用格林公式：

$$
\\oint_C (u\\,dx - v\\,dy) = \\iint_D \\left(-\\frac{\\partial v}{\\partial x} - \\frac{\\partial u}{\\partial y}\\right) dx\\,dy
$$

$$
\\oint_C (v\\,dx + u\\,dy) = \\iint_D \\left(\\frac{\\partial u}{\\partial x} - \\frac{\\partial v}{\\partial y}\\right) dx\\,dy
$$

由于 $f(z)$ 解析，满足 C-R 条件 $\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$，$\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$，故两个面积分中的被积函数分别为零，从而整个积分为零。

这个定理是复变函数积分理论的基石。它表明：在单连通域内，解析函数的积分与路径无关，仅与起点和终点有关。

**推论（复连通域柯西定理）**

若 $D$ 为多连通域，外边界为 $C_0$，内边界为 $C_1, C_2, \\dots, C_n$（各边界均取正向：沿边界行走时区域始终在左侧），则

$$
\\oint_{C_0} f(z)\\,dz = \\sum_{k=1}^n \\oint_{C_k} f(z)\\,dz
$$

或等价的写法（所有围道取同一时针方向）：

$$
\\oint_{C_0} f(z)\\,dz + \\sum_{k=1}^n \\oint_{C_k} f(z)\\,dz = 0
$$

其中内边界 $C_k$ 取顺时针方向（若外边界取逆时针）。

### 2.3 不定积分与原函数

在单连通域 $D$ 内，由于解析函数 $f(z)$ 的积分与路径无关，固定起点 $z_0$ 后，可以定义变上限积分

$$
F(z) = \\int_{z_0}^z f(\\zeta)\\,d\\zeta
$$

$F(z)$ 是 $D$ 内的单值函数。

**定理2.2**：在上述条件下，$F(z)$ 在 $D$ 内解析，且 $F'(z) = f(z)$。即 $F(z)$ 是 $f(z)$ 的一个**原函数**。

**证明**：类似于实变函数微积分基本定理的证明，利用积分与路径无关以及 $f(z)$ 的连续性。

由此得到复变函数的**牛顿-莱布尼茨公式**：若 $F(z)$ 是 $f(z)$ 的原函数，则

$$
\\int_{z_1}^{z_2} f(z)\\,dz = F(z_2) - F(z_1)
$$

### 2.4 柯西积分公式

**定理2.3（柯西积分公式）**

设 $f(z)$ 在正向简单闭曲线 $C$ 上及其内部解析，$z_0$ 为 $C$ 内部任意一点，则

$$
\\boxed{f(z_0) = \\frac{1}{2\\pi\\mathrm{i}} \\oint_C \\frac{f(z)}{z - z_0}\\,dz}
$$

**证明思路**：以 $z_0$ 为圆心作一个小圆周 $C_\\varepsilon$（半径 $\\varepsilon$），考虑积分 $\\oint_C \\frac{f(z)}{z-z_0}dz$。由复连通域柯西定理，该积分等于 $\\oint_{C_\\varepsilon} \\frac{f(z)}{z-z_0}dz$。在 $C_\\varepsilon$ 上，令 $z - z_0 = \\varepsilon e^{\\mathrm{i}\\theta}$，则

$$
\\oint_{C_\\varepsilon} \\frac{f(z)}{z-z_0}dz = \\int_0^{2\\pi} \\frac{f(z_0 + \\varepsilon e^{\\mathrm{i}\\theta})}{\\varepsilon e^{\\mathrm{i}\\theta}} \\mathrm{i}\\varepsilon e^{\\mathrm{i}\\theta} d\\theta = \\mathrm{i}\\int_0^{2\\pi} f(z_0 + \\varepsilon e^{\\mathrm{i}\\theta})\\,d\\theta
$$

令 $\\varepsilon \\to 0$，由 $f(z)$ 的连续性得 $f(z_0 + \\varepsilon e^{\\mathrm{i}\\theta}) \\to f(z_0)$，故积分 $\\to 2\\pi\\mathrm{i} f(z_0)$。

**意义**：柯西积分公式表明，解析函数在区域内部的值完全由其在边界上的值决定（通过积分公式）。这是复变函数与实变函数的一个本质区别。

**定理2.4（高阶导数公式）**

在定理2.3的条件下，$f(z)$ 在 $C$ 内有任意阶导数，且

$$
\\boxed{f^{(n)}(z_0) = \\frac{n!}{2\\pi\\mathrm{i}} \\oint_C \\frac{f(z)}{(z - z_0)^{n+1}}\\,dz}, \\quad n = 1, 2, 3, \\dots
$$

**证明**：对柯西积分公式两边关于 $z_0$ 求导，利用积分号下求导的合理性即可。

**重要推论**：

1. **柯西不等式**：若 $|f(z)| \\le M$ 在 $|z - z_0| = R$ 上，则 $|f^{(n)}(z_0)| \\le \\frac{n! M}{R^n}$。
2. **刘维尔定理**：若 $f(z)$ 在全复平面上解析且有界，则 $f(z)$ 必为常数。
3. **最大模原理**：若 $f(z)$ 在区域 $D$ 内解析，则 $|f(z)|$ 的最大值只能在边界 $\\partial D$ 上取到（除非 $f(z)$ 为常数）。
4. **代数学基本定理**：任何 $n$ 次多项式在复平面上必有 $n$ 个根（可由刘维尔定理证明）。

### 2.5 典型例题

**例1**：计算 $\\oint_{|z|=2} \\frac{e^z}{z - 1}\\,dz$。

解：$f(z) = e^z$ 全平面解析，$z_0 = 1$ 在 $|z|=2$ 内部。由柯西积分公式：

$$
\\oint_{|z|=2} \\frac{e^z}{z-1}\\,dz = 2\\pi\\mathrm{i}\\, f(1) = 2\\pi\\mathrm{i} e
$$

**例2**：计算 $\\oint_{|z|=1} \\frac{\\sin z}{z^2}\\,dz$。

解：$f(z) = \\sin z$ 全平面解析。由 $n=1$ 的高阶导数公式：

$$
\\oint_{|z|=1} \\frac{\\sin z}{z^2}\\,dz = \\frac{2\\pi\\mathrm{i}}{1!} f'(0) = 2\\pi\\mathrm{i} \\cos 0 = 2\\pi\\mathrm{i}
$$

**例3**：计算 $\\oint_{|z|=3} \\frac{e^{2z}}{(z+1)^3}\\,dz$。

解：$f(z) = e^{2z}$，$z_0 = -1$ 在 $|z|=3$ 内，$n=2$。$f''(z) = 4e^{2z}$，$f''(-1) = 4e^{-2}$。所以

$$
\\oint_{|z|=3} \\frac{e^{2z}}{(z+1)^3}\\,dz = \\frac{2\\pi\\mathrm{i}}{2!} \\cdot 4e^{-2} = 4\\pi\\mathrm{i} e^{-2}
$$

---

## 第三章 幂级数展开

### 3.1 复数项级数

**定义**：复数项无穷级数 $\\sum_{n=1}^\\infty w_n$ 收敛于 $S$ 是指部分和 $S_N = \\sum_{n=1}^N w_n$ 的极限为 $S$。

级数收敛的**必要条件**为 $\\lim_{n\\to\\infty} w_n = 0$。

**绝对收敛**：若 $\\sum_{n=1}^\\infty |w_n|$ 收敛，则称原级数**绝对收敛**。绝对收敛的级数必条件收敛，且可任意重排而不改变其和。

用实部和虚部判断：设 $w_n = a_n + \\mathrm{i}b_n$，则 $\\sum w_n$ 收敛当且仅当 $\\sum a_n$ 和 $\\sum b_n$ 均收敛。

### 3.2 幂级数与收敛半径

**幂级数**：形如

$$
\\sum_{n=0}^\\infty a_n (z - z_0)^n
$$

的级数，其中 $a_n$ 为复常数，$z_0$ 称为展开中心。

**阿贝尔定理**：若幂级数在 $z_1 \\neq z_0$ 处收敛，则它在圆 $|z - z_0| < |z_1 - z_0|$ 内绝对收敛。

**收敛半径**：对于任何幂级数，存在一个数 $R$（$0 \\le R \\le \\infty$），使得

- $|z - z_0| < R$ 时，级数绝对收敛；
- $|z - z_0| > R$ 时，级数发散；
- $|z - z_0| = R$ 时，需单独判定。

$R$ 称为**收敛半径**。计算 $R$ 的方法：

**比值法**（达朗贝尔法）：若 $\\lim_{n\\to\\infty} \\left|\\frac{a_n}{a_{n+1}}\\right|$ 存在，则 $R$ 等于该极限。

**根值法**（柯西-阿达马公式）：

$$
\\frac{1}{R} = \\limsup_{n\\to\\infty} \\sqrt[n]{|a_n|}
$$

此公式总是成立的（即使极限不存在，可用上极限）。

### 3.3 幂级数的解析性

**定理3.1**：幂级数 $\\sum_{n=0}^\\infty a_n (z - z_0)^n$ 在其收敛圆 $|z - z_0| < R$ 内定义了一个解析函数 $f(z)$。

**定理3.2**：幂级数可在收敛圆内**逐项求导**和**逐项积分**任意多次，求导或积分后的级数收敛半径不变。

由此，幂级数系数与和函数的导数之间有：

$$
a_n = \\frac{f^{(n)}(z_0)}{n!}
$$

### 3.4 泰勒展开

**定理3.3（泰勒定理）**

若 $f(z)$ 在圆盘 $|z - z_0| < R$ 内解析，则在该圆盘内 $f(z)$ 可展开为唯一的幂级数（泰勒级数）：

$$
\\boxed{f(z) = \\sum_{n=0}^\\infty a_n (z - z_0)^n, \\quad a_n = \\frac{f^{(n)}(z_0)}{n!} = \\frac{1}{2\\pi\\mathrm{i}} \\oint_C \\frac{f(\\zeta)}{(\\zeta - z_0)^{n+1}}\\,d\\zeta}
$$

其中 $C$ 是圆内绕 $z_0$ 一周的任意正向简单闭曲线。收敛半径至少为 $R$。

**证明思路**：由柯西积分公式，$f(z) = \\frac{1}{2\\pi\\mathrm{i}}\\oint_C \\frac{f(\\zeta)}{\\zeta - z}\\,d\\zeta$，将 $\\frac{1}{\\zeta - z}$ 展开为几何级数 $\\frac{1}{\\zeta - z} = \\frac{1}{(\\zeta - z_0) - (z - z_0)} = \\frac{1}{\\zeta - z_0} \\cdot \\frac{1}{1 - \\frac{z - z_0}{\\zeta - z_0}} = \\sum_{n=0}^\\infty \\frac{(z - z_0)^n}{(\\zeta - z_0)^{n+1}}$，再逐项积分即得。

**常用泰勒展开**（$z_0 = 0$）：

$$
\\begin{aligned}
e^z &= \\sum_{n=0}^\\infty \\frac{z^n}{n!}, \\quad R = \\infty \\\\
\\sin z &= \\sum_{n=0}^\\infty \\frac{(-1)^n z^{2n+1}}{(2n+1)!}, \\quad R = \\infty \\\\
\\cos z &= \\sum_{n=0}^\\infty \\frac{(-1)^n z^{2n}}{(2n)!}, \\quad R = \\infty \\\\
\\frac{1}{1-z} &= \\sum_{n=0}^\\infty z^n, \\quad R = 1 \\\\
\\ln(1+z) &= \\sum_{n=1}^\\infty \\frac{(-1)^{n-1} z^n}{n}, \\quad R = 1
\\end{aligned}
$$

### 3.5 解析函数的零点

若 $f(z_0) = 0$，则 $z_0$ 为 $f(z)$ 的**零点**。若 $f(z)$ 在 $z_0$ 解析且不恒为零，则存在唯一的正整数 $m$ 使得

$$
f(z_0) = f'(z_0) = \\cdots = f^{(m-1)}(z_0) = 0, \\quad f^{(m)}(z_0) \\neq 0
$$

此时称 $z_0$ 为 $f(z)$ 的 **$m$ 阶零点**。在 $z_0$ 附近，$f(z) = (z - z_0)^m \\varphi(z)$，其中 $\\varphi(z)$ 解析且 $\\varphi(z_0) \\neq 0$。

解析函数的零点是**孤立**的，即每个零点都有一个邻域，其中不再有其他零点（除非函数恒为零）。

### 3.6 洛朗展开

**定理3.4（洛朗定理）**

若 $f(z)$ 在圆环域 $R_1 < |z - z_0| < R_2$ 内解析（$0 \\le R_1 < R_2 \\le \\infty$），则在该环域内 $f(z)$ 可展开为**洛朗级数**：

$$
\\boxed{f(z) = \\sum_{n=-\\infty}^\\infty c_n (z - z_0)^n}
$$

其中系数

$$
\\boxed{c_n = \\frac{1}{2\\pi\\mathrm{i}} \\oint_C \\frac{f(\\zeta)}{(\\zeta - z_0)^{n+1}}\\,d\\zeta, \\quad n = 0, \\pm 1, \\pm 2, \\dots}
$$

$C$ 是环域内绕 $z_0$ 一周的任意正向简单闭曲线。

洛朗级数由两部分组成：

- **正则部分**（解析部分）：$\\sum_{n=0}^\\infty c_n (z - z_0)^n$，在 $|z - z_0| < R_2$ 内收敛。
- **主要部分**：$\\sum_{n=-\\infty}^{-1} c_n (z - z_0)^n$，在 $|z - z_0| > R_1$ 内收敛。

注意：如果 $f(z)$ 在 $z_0$ 解析，那么主要部分的所有系数为零，洛朗级数退化为泰勒级数。

**计算方法**：通常不直接用系数公式算积分，而是利用已知的泰勒展开和代数分解。例如，求 $\\frac{1}{z(z-1)}$ 在 $0 < |z| < 1$ 内的洛朗展开：

$$
\\frac{1}{z(z-1)} = -\\frac{1}{z} \\cdot \\frac{1}{1-z} = -\\frac{1}{z} \\sum_{n=0}^\\infty z^n = -\\sum_{n=-1}^\\infty z^n
$$

**例**：求 $f(z) = e^{1/z}$ 在 $0 < |z| < \\infty$ 内的洛朗展开。

利用 $e^w = \\sum_{n=0}^\\infty \\frac{w^n}{n!}$，令 $w = 1/z$，得

$$
e^{1/z} = \\sum_{n=0}^\\infty \\frac{1}{n!} z^{-n} = 1 + \\frac{1}{z} + \\frac{1}{2! z^2} + \\cdots
$$

此展开有无穷多个负幂项，说明 $z = 0$ 是本性奇点。

### 3.7 孤立奇点的分类

若 $f(z)$ 在 $z_0$ 不解析，但在去心邻域 $0 < |z - z_0| < \\delta$ 内解析，则 $z_0$ 为 $f(z)$ 的**孤立奇点**。按洛朗展开中负幂项的情况，分为三类：

**1. 可去奇点**：主要部分为零（即无负幂项）。此时 $\\lim_{z\\to z_0} f(z)$ 存在有限。适当定义或修改 $f(z_0)$ 可使函数在 $z_0$ 解析。

例：$f(z) = \\frac{\\sin z}{z}$ 在 $z=0$ 处。展开 $\\frac{\\sin z}{z} = 1 - \\frac{z^2}{6} + \\cdots$，无负幂项，$z=0$ 是可去奇点。定义 $f(0)=1$ 后函数全平面解析。

**2. 极点**：主要部分只有有限多项，即存在正整数 $m$ 使得 $c_{-m} \\neq 0$ 而对所有 $k > m$ 有 $c_{-k} = 0$。此时称 $z_0$ 为 **$m$ 阶极点**，且 $\\lim_{z\\to z_0} f(z) = \\infty$。

一阶极点又称为**单极点**。判断极点的阶数：若 $\\lim_{z\\to z_0} (z - z_0)^m f(z) = A \\neq 0$（有限），则 $z_0$ 是 $m$ 阶极点。

例：$f(z) = \\frac{1}{(z-1)^3}$ 在 $z=1$ 处是三阶极点。

**极点和零点的关系**：若 $f(z)$ 可写成 $f(z) = \\frac{\\varphi(z)}{(z-z_0)^m}$，其中 $\\varphi(z)$ 在 $z_0$ 解析且 $\\varphi(z_0) \\neq 0$，则 $z_0$ 是 $f(z)$ 的 $m$ 阶极点。这等价于 $\\frac{1}{f(z)}$ 以 $z_0$ 为 $m$ 阶零点。

**3. 本性奇点**：主要部分有无穷多项。此时 $\\lim_{z\\to z_0} f(z)$ 不存在且不为 $\\infty$（实际上，在本性奇点的任意邻域内，函数值可以任意接近任何复数——魏尔斯特拉斯定理）。

例：$f(z) = e^{1/z}$ 在 $z = 0$ 处为本性奇点。

### 3.8 解析延拓

**定义**：若 $f_1(z)$ 在区域 $D_1$ 内解析，$f_2(z)$ 在区域 $D_2$ 内解析，且 $D_1 \\cap D_2 \\neq \\varnothing$，在此交集上有 $f_1(z) = f_2(z)$，则称 $f_2(z)$ 是 $f_1(z)$ 在 $D_2$ 上的**直接解析延拓**。

**唯一性定理**：若 $f(z)$ 在区域 $D$ 内解析，且在某条位于 $D$ 内的曲线上（或某个有聚点的点集上）为零，则 $f(z)$ 在 $D$ 内恒为零。

**推论**：若两个解析函数在某个子区域（或某条曲线上）相等，则它们在整个定义域的交集上相等。这意味着解析延拓（如果存在）是唯一的。

**例**：级数 $\\sum_{n=0}^\\infty z^n$ 在 $|z|<1$ 内收敛到 $\\frac{1}{1-z}$。$\\frac{1}{1-z}$ 在 $z \\neq 1$ 的全平面解析，因此它是该级数在全平面（除 $z=1$）上的解析延拓。

---

## 第四章 留数定理

### 4.1 留数的定义

设 $z_0$ 是 $f(z)$ 的孤立奇点，$f(z)$ 在 $z_0$ 的去心邻域内的洛朗展开为

$$
f(z) = \\sum_{n=-\\infty}^\\infty c_n (z - z_0)^n
$$

系数 $c_{-1}$（即 $(z - z_0)^{-1}$ 项的系数）称为 $f(z)$ 在 $z_0$ 点的**留数**，记作 $\\operatorname{Res}[f(z), z_0]$。

由洛朗系数公式，

$$
\\operatorname{Res}[f(z), z_0] = c_{-1} = \\frac{1}{2\\pi\\mathrm{i}} \\oint_C f(z)\\,dz
$$

其中 $C$ 是围绕 $z_0$ 一周且不包含其他奇点的任意正向简单闭曲线。这说明：函数沿闭合曲线的积分，完全由被积函数在内部奇点的留数决定。

### 4.2 留数的计算规则

**规则1（可去奇点）**：若 $z_0$ 为可去奇点，则 $\\operatorname{Res}[f(z), z_0] = 0$。

**规则2（一阶极点）**：若 $z_0$ 为一阶极点，则

$$
\\operatorname{Res}[f(z), z_0] = \\lim_{z \\to z_0} (z - z_0) f(z)
$$

**规则3（一阶极点，$f(z) = P(z)/Q(z)$ 形式）**：若 $f(z) = \\frac{P(z)}{Q(z)}$，$P(z)$ 和 $Q(z)$ 在 $z_0$ 解析，$P(z_0) \\neq 0$，$Q(z_0) = 0$，$Q'(z_0) \\neq 0$（即 $z_0$ 是 $Q(z)$ 的一阶零点），则 $z_0$ 是 $f(z)$ 的一阶极点，且

$$
\\boxed{\\operatorname{Res}[f(z), z_0] = \\frac{P(z_0)}{Q'(z_0)}}
$$

这个公式非常实用，避免了求极限。

**规则4（$m$ 阶极点）**：若 $z_0$ 为 $m$ 阶极点，则

$$
\\boxed{\\operatorname{Res}[f(z), z_0] = \\frac{1}{(m-1)!} \\lim_{z \\to z_0} \\frac{d^{m-1}}{dz^{m-1}} \\left[ (z - z_0)^m f(z) \\right]}
$$

**规则5（无穷远点的留数）**：定义 $f(z)$ 在无穷远点 $\\infty$ 的留数为

$$
\\operatorname{Res}[f(z), \\infty] = -\\frac{1}{2\\pi\\mathrm{i}} \\oint_C f(z)\\,dz = -c_{-1}
$$

其中 $C$ 是绕原点一周的足够大正向简单闭曲线（使所有有限奇点都在内部），$c_{-1}$ 是 $f(z)$ 在无穷远点邻域的洛朗展开中 $z^{-1}$ 项的系数。

### 4.3 留数定理

**定理4.1（留数定理）**

设 $C$ 是一条正向简单闭曲线，函数 $f(z)$ 在 $C$ 的内部除有限个孤立奇点 $z_1, z_2, \\dots, z_k$ 外处处解析，且在 $C$ 上解析，则

$$
\\boxed{\\oint_C f(z)\\,dz = 2\\pi\\mathrm{i} \\sum_{j=1}^k \\operatorname{Res}[f(z), z_j]}
$$

**证明**：以各奇点 $z_j$ 为圆心作一系列互不相交的小圆周 $C_j$（都在 $C$ 内），由复连通域柯西定理，

$$
\\oint_C f(z)\\,dz = \\sum_{j=1}^k \\oint_{C_j} f(z)\\,dz
$$

而由留数定义，$\\oint_{C_j} f(z)\\,dz = 2\\pi\\mathrm{i} \\operatorname{Res}[f(z), z_j]$，命题得证。

**推论**：若 $f(z)$ 在扩充复平面上除有限个奇点（包括可能的 $\\infty$）外解析，则所有这些奇点（包括 $\\infty$）的留数之和为零。

### 4.4 利用留数计算实积分

这是留数定理最重要的应用。以下三类实积分必须熟练掌握。

#### 类型一：$\\displaystyle \\int_0^{2\\pi} R(\\cos\\theta, \\sin\\theta)\\,d\\theta$

其中 $R$ 是 $\\cos\\theta$、$\\sin\\theta$ 的有理函数（在积分区间上连续）。

**方法**：令 $z = e^{\\mathrm{i}\\theta}$，当 $\\theta$ 从 $0$ 变到 $2\\pi$ 时，$z$ 沿单位圆逆时针绕一周。此时

$$
d\\theta = \\frac{dz}{\\mathrm{i}z}, \\quad \\cos\\theta = \\frac{z + z^{-1}}{2}, \\quad \\sin\\theta = \\frac{z - z^{-1}}{2\\mathrm{i}}
$$

代入得

$$
\\int_0^{2\\pi} R(\\cos\\theta, \\sin\\theta)\\,d\\theta = \\oint_{|z|=1} R\\left(\\frac{z+z^{-1}}{2}, \\frac{z-z^{-1}}{2\\mathrm{i}}\\right) \\frac{dz}{\\mathrm{i}z}
$$

然后计算被积函数在单位圆**内部**所有奇点的留数之和，乘以 $2\\pi\\mathrm{i}$ 即可。

**例1**：计算 $I = \\int_0^{2\\pi} \\frac{d\\theta}{5 + 4\\cos\\theta}$。

**解**：令 $z = e^{\\mathrm{i}\\theta}$，则 $\\cos\\theta = \\frac{z+z^{-1}}{2}$，$d\\theta = \\frac{dz}{\\mathrm{i}z}$。

$$
\\begin{aligned}
I &= \\oint_{|z|=1} \\frac{1}{5 + 2(z + z^{-1})} \\frac{dz}{\\mathrm{i}z}
= \\frac{1}{\\mathrm{i}} \\oint_{|z|=1} \\frac{dz}{2z^2 + 5z + 2} \\\\
&= \\frac{1}{\\mathrm{i}} \\oint_{|z|=1} \\frac{dz}{(2z+1)(z+2)}
\\end{aligned}
$$

被积函数在 $|z|=1$ 内的奇点为 $z = -1/2$（一阶极点），$z = -2$ 在圆外。

$$
\\operatorname{Res}\\left[\\frac{1}{(2z+1)(z+2)}, -\\frac{1}{2}\\right] = \\lim_{z \\to -1/2} \\left(z + \\frac{1}{2}\\right) \\frac{1}{(2z+1)(z+2)} = \\lim_{z \\to -1/2} \\frac{1}{2(z+2)} = \\frac{1}{3}
$$

（也可用 $P/Q'$ 公式：分子 $1$，分母导数 $4z+5$，在 $z=-1/2$ 处值为 $3$，留数 $1/3$。）

故 $I = \\frac{1}{\\mathrm{i}} \\cdot 2\\pi\\mathrm{i} \\cdot \\frac{1}{3} = \\frac{2\\pi}{3}$。

**例2**：计算 $I = \\int_0^{2\\pi} \\frac{d\\theta}{a + \\cos\\theta}$，$a > 1$。

解：同法得 $I = \\frac{2\\pi}{\\sqrt{a^2 - 1}}$。

#### 类型二：$\\displaystyle \\int_{-\\infty}^\\infty \\frac{P(x)}{Q(x)}\\,dx$

条件：$P(x)$、$Q(x)$ 是多项式；$Q(x)$ 在实轴上无零点；$\\deg Q \\ge \\deg P + 2$（保证无穷远处积分为零）。

**方法**：考虑上半平面的围道。取 $R$ 足够大，使上半平面所有极点都在围道内。沿实轴从 $-R$ 到 $R$，再沿上半圆弧 $C_R$ 返回。由留数定理，

$$
\\int_{-R}^R f(x)\\,dx + \\int_{C_R} f(z)\\,dz = 2\\pi\\mathrm{i} \\sum_{\\text{上半平面}} \\operatorname{Res}[f(z)]
$$

当 $R \\to \\infty$ 时，由条件 $\\deg Q \\ge \\deg P + 2$，可证 $\\lim_{R\\to\\infty} \\int_{C_R} f(z)\\,dz = 0$（因在 $C_R$ 上 $|f(z)| \\le \\frac{M}{R^2}$，而弧长为 $\\pi R$，模 $\\le \\pi M/R \\to 0$）。

于是

$$
\\boxed{\\int_{-\\infty}^\\infty \\frac{P(x)}{Q(x)}\\,dx = 2\\pi\\mathrm{i} \\sum_{\\text{上半平面极点}} \\operatorname{Res}\\left[\\frac{P(z)}{Q(z)}\\right]}
$$

**例3**：计算 $I = \\int_{-\\infty}^\\infty \\frac{dx}{(x^2+1)(x^2+4)}$。

解：$f(z) = \\frac{1}{(z^2+1)(z^2+4)}$。极点为 $z = \\pm\\mathrm{i}$，$z = \\pm 2\\mathrm{i}$，全部为一阶极点。上半平面有 $z = \\mathrm{i}$ 和 $z = 2\\mathrm{i}$。

用规则3求留数：

$$
\\begin{aligned}
\\operatorname{Res}[f, \\mathrm{i}] &= \\frac{1}{2z (z^2+4)}\\Big|_{z=\\mathrm{i}} = \\frac{1}{2\\mathrm{i} \\cdot 3} = \\frac{1}{6\\mathrm{i}} \\\\
\\operatorname{Res}[f, 2\\mathrm{i}] &= \\frac{1}{(z^2+1) \\cdot 2z}\\Big|_{z=2\\mathrm{i}} = \\frac{1}{(-3) \\cdot 4\\mathrm{i}} = -\\frac{1}{12\\mathrm{i}}
\\end{aligned}
$$

留数和 $= \\frac{1}{6\\mathrm{i}} - \\frac{1}{12\\mathrm{i}} = \\frac{1}{12\\mathrm{i}}$。

因此 $I = 2\\pi\\mathrm{i} \\cdot \\frac{1}{12\\mathrm{i}} = \\frac{\\pi}{6}$。

#### 类型三：$\\displaystyle \\int_{-\\infty}^\\infty R(x) e^{\\mathrm{i}mx}\\,dx$ 及相应的三角函数积分

条件：$m > 0$；$R(x)$ 是有理函数，分母在实轴上无零点，且 $\\deg(\\text{分母}) > \\deg(\\text{分子})$（只需高一次即可，与类型二不同）。

**约当引理**：若当 $|z| \\to \\infty$ 时 $R(z) \\to 0$（一致于上半平面），$m > 0$，则

$$
\\lim_{R \\to \\infty} \\int_{C_R} R(z) e^{\\mathrm{i}mz}\\,dz = 0
$$

其中 $C_R$ 是上半圆周 $|z| = R$（$\\operatorname{Im}z \\ge 0$）。

由此，同样取上半平面围道，得到

$$
\\int_{-\\infty}^\\infty R(x) e^{\\mathrm{i}mx}\\,dx = 2\\pi\\mathrm{i} \\sum_{\\text{上半平面}} \\operatorname{Res}\\left[R(z) e^{\\mathrm{i}mz}\\right]
$$

然后取实部或虚部即可得到含 $\\cos mx$ 或 $\\sin mx$ 的积分。

**例4**：计算 $I = \\int_{-\\infty}^\\infty \\frac{x \\sin x}{x^2 + a^2}\\,dx$，$a > 0$。

解：考虑 $J = \\int_{-\\infty}^\\infty \\frac{z e^{\\mathrm{i}z}}{z^2 + a^2}\\,dz$（$m=1$）。

$f(z) = \\frac{z e^{\\mathrm{i}z}}{z^2 + a^2}$，上半平面极点：$z = \\mathrm{i}a$（一阶极点）。由规则3求留数：

分母求导：$(z^2 + a^2)' = 2z$，在 $z = \\mathrm{i}a$ 处值为 $2\\mathrm{i}a$。

分子在 $\\mathrm{i}a$ 处的值：$\\mathrm{i}a \\cdot e^{\\mathrm{i}(\\mathrm{i}a)} = \\mathrm{i}a e^{-a}$。

$$
\\operatorname{Res}[f, \\mathrm{i}a] = \\frac{\\mathrm{i}a e^{-a}}{2\\mathrm{i}a} = \\frac{e^{-a}}{2}
$$

由留数定理（约当引理满足），

$$
J = 2\\pi\\mathrm{i} \\cdot \\frac{e^{-a}}{2} = \\mathrm{i}\\pi e^{-a}
$$

$J$ 的虚部即为所求（因 $\\sin x$ 对应 $e^{\\mathrm{i}x}$ 的虚部）：

$$
I = \\operatorname{Im}(J) = \\pi e^{-a}
$$

**例5**：计算 $I = \\int_{-\\infty}^\\infty \\frac{\\cos x}{x^2 + 1}\\,dx$。

解：取 $J = \\int_{-\\infty}^\\infty \\frac{e^{\\mathrm{i}z}}{z^2 + 1}\\,dz$，上半平面极点 $z = \\mathrm{i}$。

$$
\\operatorname{Res}\\left[\\frac{e^{\\mathrm{i}z}}{z^2+1}, \\mathrm{i}\\right] = \\frac{e^{\\mathrm{i}\\cdot\\mathrm{i}}}{2\\mathrm{i}} = \\frac{e^{-1}}{2\\mathrm{i}}
$$

$J = 2\\pi\\mathrm{i} \\cdot \\frac{e^{-1}}{2\\mathrm{i}} = \\pi e^{-1}$，取实部得 $I = \\frac{\\pi}{e}$。

---

## 第五章 傅里叶变换

### 5.1 傅里叶级数回顾

对于以 $2l$ 为周期的函数 $f(x)$（满足 Dirichlet 条件），可展开为傅里叶级数。采用复数形式更为简洁：

$$
f(x) = \\sum_{n=-\\infty}^\\infty c_n e^{\\mathrm{i} n \\pi x / l}
$$

$$
c_n = \\frac{1}{2l} \\int_{-l}^l f(x) e^{-\\mathrm{i} n \\pi x / l}\\,dx
$$

令 $\\Delta k = \\pi / l$（相邻频率的间隔），$k_n = n \\Delta k = n \\pi / l$，则

$$
f(x) = \\frac{1}{2\\pi} \\sum_{n=-\\infty}^\\infty \\left( \\int_{-l}^l f(\\xi) e^{-\\mathrm{i} k_n \\xi}\\,d\\xi \\right) e^{\\mathrm{i} k_n x} \\Delta k
$$

当 $l \\to \\infty$ 时，$\\Delta k \\to 0$，离散求和变为连续积分，得到**傅里叶积分公式**。

### 5.2 傅里叶变换与逆变换

**定义（对称形式）**

傅里叶正变换：

$$
\\boxed{F(k) = \\mathcal{F}[f(x)] = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty f(x) e^{-\\mathrm{i} k x}\\,dx}
$$

傅里叶逆变换：

$$
\\boxed{f(x) = \\mathcal{F}^{-1}[F(k)] = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty F(k) e^{\\mathrm{i} k x}\\,dk}
$$

这里采用对称形式使得正逆变换形式上几乎一致（只差 $e$ 指数上的正负号）。有些教材采用非对称形式（正变换系数为 1，逆变换系数为 $1/(2\\pi)$），实质相同。

$F(k)$ 称为 $f(x)$ 的**频谱函数**（或像函数），$k$ 通常解释为波数（空间频率）。

**傅里叶变换存在的充分条件**：$f(x)$ 在 $(-\\infty, \\infty)$ 上绝对可积（$\\int_{-\\infty}^\\infty |f(x)|\\,dx < \\infty$），且在任意有限区间上满足 Dirichlet 条件（至多有有限个第一类间断点和有限个极值点）。但这不是必要条件——广义函数（如 $\\delta$ 函数）也有傅里叶变换。

### 5.3 傅里叶变换的基本性质

**1. 线性性质**

$$
\\mathcal{F}[\\alpha f(x) + \\beta g(x)] = \\alpha \\mathcal{F}[f(x)] + \\beta \\mathcal{F}[g(x)]
$$

**2. 位移性质（时移）**

$$
\\mathcal{F}[f(x - a)] = e^{-\\mathrm{i}ka} F(k)
$$

**3. 频移性质**

$$
\\mathcal{F}[e^{\\mathrm{i}k_0 x} f(x)] = F(k - k_0)
$$

**4. 尺度变换**

$$
\\mathcal{F}[f(ax)] = \\frac{1}{|a|} F\\!\\left(\\frac{k}{a}\\right), \\quad a \\neq 0
$$

**5. 微分性质**

若 $\\lim_{|x| \\to \\infty} f(x) = 0$，则

$$
\\boxed{\\mathcal{F}[f'(x)] = \\mathrm{i}k F(k)}
$$

**证明**：由定义和分部积分，

$$
\\begin{aligned}
\\mathcal{F}[f'(x)] &= \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty f'(x) e^{-\\mathrm{i}kx}\\,dx \\\\
&= \\frac{1}{\\sqrt{2\\pi}} \\left[ f(x) e^{-\\mathrm{i}kx} \\right]_{-\\infty}^\\infty - \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty f(x) (-\\mathrm{i}k) e^{-\\mathrm{i}kx}\\,dx \\\\
&= 0 + \\mathrm{i}k F(k) = \\mathrm{i}k F(k)
\\end{aligned}
$$

推广到高阶导数：

$$
\\mathcal{F}[f^{(n)}(x)] = (\\mathrm{i}k)^n F(k)
$$

结合尺度变换和微分性质可得到非常有用的公式。

**6. 积分性质**

$$
\\mathcal{F}\\left[\\int_{-\\infty}^x f(\\xi)\\,d\\xi\\right] = \\frac{F(k)}{\\mathrm{i}k}
$$

（需满足一定条件使积分收敛）。

**7. 卷积定理**

定义卷积 $(f * g)(x) = \\int_{-\\infty}^\\infty f(x - \\xi) g(\\xi)\\,d\\xi$，则

$$
\\boxed{\\mathcal{F}[f * g] = \\sqrt{2\\pi}\\, F(k) G(k)}
$$

$$
\\mathcal{F}^{-1}[F(k) G(k)] = \\frac{1}{\\sqrt{2\\pi}} (f * g)(x)
$$

卷积定理是傅里叶变换最强大的性质之一：它将时域中的卷积运算转化为频域中的乘积运算，在求解偏微分方程和信号处理中有重要应用。

**8. 帕塞瓦尔等式（能量积分）**

$$
\\int_{-\\infty}^\\infty |f(x)|^2\\,dx = \\int_{-\\infty}^\\infty |F(k)|^2\\,dk
$$

（对称形式下系数为 1）。

### 5.4 $\\delta$ 函数与常用傅里叶变换对

$\\delta$ 函数不是普通意义上的函数，而是一种广义函数（分布）。它的定义性质是：对任意连续函数 $\\varphi(x)$，

$$
\\int_{-\\infty}^\\infty \\delta(x) \\varphi(x)\\,dx = \\varphi(0)
$$

更一般地，$\\int_{-\\infty}^\\infty \\delta(x - a) \\varphi(x)\\,dx = \\varphi(a)$。

$\\delta$ 函数可视为某些普通函数序列的极限，如高斯函数序列、矩形脉冲序列等。

$\\delta$ 函数的傅里叶变换：

$$
\\mathcal{F}[\\delta(x)] = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty \\delta(x) e^{-\\mathrm{i}kx}\\,dx = \\frac{1}{\\sqrt{2\\pi}}
$$

逆变换给出 $\\delta$ 函数的积分表示：

$$
\\delta(x) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty \\frac{1}{\\sqrt{2\\pi}} e^{\\mathrm{i}kx}\\,dk = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty e^{\\mathrm{i}kx}\\,dk
$$

> 这里就可以看出对称的和非对称的傅里叶变换实际上是等价的了

常用傅里叶变换对（对称形式下）：

- $\\mathcal{F}[1] = \\sqrt{2\\pi}\\,\\delta(k)$
- $\\mathcal{F}[e^{-a|x|}] = \\sqrt{\\frac{2}{\\pi}} \\frac{a}{a^2 + k^2}$（$a > 0$）
- $\\mathcal{F}[e^{-ax^2}] = \\frac{1}{\\sqrt{2a}} e^{-k^2/(4a)}$（$a > 0$，高斯函数）

### 5.5 傅里叶变换解偏微分方程

傅里叶变换特别适用于**无界空间**中的偏微分方程问题。通过变换可将对空间坐标的偏导数化为代数运算，将偏微分方程转化为关于时间 $t$ 的**常微分方程**。

**一般步骤**：

1. 对空间变量（如 $x$）进行傅里叶变换；
2. 利用微分性质，将对 $x$ 的导数变为乘 $(\\mathrm{i}k)$；
3. 得到关于 $t$ 的常微分方程；
4. 将初始条件也进行变换；
5. 解常微分方程，得到像函数 $\\hat{u}(k,t)$；
6. 做傅里叶逆变换，得到原解 $u(x,t)$。

**例1：一维热传导方程的柯西问题**

定解问题：

$$
\\begin{cases}
u_t = \\alpha u_{xx}, \\quad -\\infty < x < \\infty, \\; t > 0 \\\\
u(x,0) = \\phi(x)
\\end{cases}
$$

**解**：对 $x$ 做傅里叶变换，利用 $\\mathcal{F}[u_{xx}] = -k^2 \\hat{u}$，得

$$
\\frac{d\\hat{u}}{dt} = -\\alpha k^2 \\hat{u}
$$

初始条件：$\\hat{u}(k,0) = \\hat{\\phi}(k)$。解此一阶常微分方程：

$$
\\hat{u}(k,t) = \\hat{\\phi}(k) e^{-\\alpha k^2 t}
$$

做逆变换：

$$
\\begin{aligned}
u(x,t) &= \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty \\hat{\\phi}(k) e^{-\\alpha k^2 t} e^{\\mathrm{i}kx}\\,dk \\\\
&= \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty \\phi(\\xi) \\left[ \\int_{-\\infty}^\\infty e^{-\\alpha t k^2 + \\mathrm{i}k(x-\\xi)}\\,dk \\right] d\\xi
\\end{aligned}
$$

内层为高斯积分，配方得

$$
\\int_{-\\infty}^\\infty e^{-\\alpha t k^2 + \\mathrm{i}k(x-\\xi)}\\,dk = \\sqrt{\\frac{\\pi}{\\alpha t}} \\exp\\!\\left[-\\frac{(x-\\xi)^2}{4\\alpha t}\\right]
$$

最终

$$
\\boxed{u(x,t) = \\frac{1}{\\sqrt{4\\pi\\alpha t}} \\int_{-\\infty}^\\infty \\phi(\\xi) \\exp\\!\\left[-\\frac{(x-\\xi)^2}{4\\alpha t}\\right] d\\xi}
$$

这就是一维热传导方程的基本解（泊松公式）。

**例2：半无限杆热扩散（绝热边界，偶延拓）**

设 $u_t = a^2 u_{xx}$，$x > 0$，$u_x(0,t) = 0$，$u(x,0) = N_0\\delta(x)$。将初值偶延拓至全轴：$\\tilde{u}(x,0) = N_0\\delta(x) + N_0\\delta(-x) = 2N_0\\delta(x)$。套用柯西问题基本解得

$$
u(x,t) = \\frac{N_0}{\\sqrt{\\pi a^2 t}} e^{-x^2/(4a^2 t)}
$$

此解自动满足 $u_x(0,t) = 0$（偶函数在原点导数为零）。

---

## 第六章 拉普拉斯变换

### 6.1 从傅里叶到拉普拉斯

傅里叶变换要求被变换函数在 $(-\\infty,\\infty)$ 上绝对可积，这使得许多常见函数（如常数、$t^n$、$e^{at}$ 等）不能直接进行傅里叶变换。**拉普拉斯变换**通过引入衰减因子 $e^{-\\sigma t}$ 扩大了可变换函数的范围，并且天然地适合处理 $t \\ge 0$ 上的初值问题。

### 6.2 拉普拉斯变换的定义

设 $f(t)$ 在 $t \\ge 0$ 上有定义，其**拉普拉斯变换**定义为

$$
\\boxed{F(s) = \\mathcal{L}[f(t)] = \\int_0^\\infty f(t) e^{-st}\\,dt}
$$

其中 $s = \\sigma + \\mathrm{i}\\omega$ 是复变量。使得积分收敛的 $s$ 的范围（通常为半平面 $\\operatorname{Re} s > \\sigma_c$）称为**收敛域**。$\\sigma_c$ 是收敛横标，由 $f(t)$ 的增长速度决定。

**与傅里叶变换的关系**：若令 $s = \\sigma + \\mathrm{i}\\omega$，则

$$
\\mathcal{L}[f(t)] = \\int_0^\\infty f(t) e^{-\\sigma t} e^{-\\mathrm{i}\\omega t}\\,dt = \\mathcal{F}[f(t) e^{-\\sigma t} H(t)] \\cdot \\sqrt{2\\pi}
$$

即拉普拉斯变换可看作函数 $f(t) e^{-\\sigma t} H(t)$ 的傅里叶变换（差一常数因子）。

### 6.3 常见函数的拉普拉斯变换

通过直接积分可得以下基本变换（需牢记）：

$$
\\begin{aligned}
\\mathcal{L}[1] &= \\frac{1}{s}, \\quad \\operatorname{Re} s > 0 \\\\
\\mathcal{L}[t^n] &= \\frac{n!}{s^{n+1}}, \\quad \\operatorname{Re} s > 0 \\\\
\\mathcal{L}[e^{at}] &= \\frac{1}{s - a}, \\quad \\operatorname{Re} s > \\operatorname{Re} a \\\\
\\mathcal{L}[\\sin \\omega t] &= \\frac{\\omega}{s^2 + \\omega^2}, \\quad \\operatorname{Re} s > 0 \\\\
\\mathcal{L}[\\cos \\omega t] &= \\frac{s}{s^2 + \\omega^2}, \\quad \\operatorname{Re} s > 0 \\\\
\\mathcal{L}[\\sinh \\omega t] &= \\frac{\\omega}{s^2 - \\omega^2}, \\quad \\operatorname{Re} s > |\\omega| \\\\
\\mathcal{L}[\\cosh \\omega t] &= \\frac{s}{s^2 - \\omega^2}, \\quad \\operatorname{Re} s > |\\omega| \\\\
\\mathcal{L}[t e^{at}] &= \\frac{1}{(s - a)^2} \\\\
\\mathcal{L}[\\delta(t)] &= 1 \\quad (\\forall s)
\\end{aligned}
$$

### 6.4 拉普拉斯变换的基本性质

**1. 线性性质**：$\\mathcal{L}[\\alpha f + \\beta g] = \\alpha F(s) + \\beta G(s)$

**2. 相似定理**：$\\mathcal{L}[f(at)] = \\frac{1}{a} F\\!\\left(\\frac{s}{a}\\right)$，$a > 0$

**3. 位移性质（频域平移）**：

$$
\\mathcal{L}[e^{at} f(t)] = F(s - a)
$$

**4. 延迟性质（时域平移）**

设 $H(t)$ 为单位阶跃函数（亥维赛函数），定义 $H(t) = 0$ 当 $t < 0$，$H(t) = 1$ 当 $t \\ge 0$。则对 $a > 0$，

$$
\\boxed{\\mathcal{L}[f(t - a) H(t - a)] = e^{-as} F(s)}
$$

这个性质在波动问题中非常关键——它描述的是"推迟效应"。

**5. 微分性质（核心）**

$$
\\boxed{\\mathcal{L}[f'(t)] = s F(s) - f(0)}
$$

**证明**：由定义和分部积分，

$$
\\begin{aligned}
\\mathcal{L}[f'(t)] &= \\int_0^\\infty f'(t) e^{-st}\\,dt \\\\
&= \\left[ f(t) e^{-st} \\right]_0^\\infty - \\int_0^\\infty f(t) (-s) e^{-st}\\,dt \\\\
&= (0 - f(0)) + s \\int_0^\\infty f(t) e^{-st}\\,dt \\\\
&= s F(s) - f(0)
\\end{aligned}
$$

（假设 $\\lim_{t\\to\\infty} f(t) e^{-st} = 0$ 在收敛域内成立。）

重复应用可得高阶导数：

$$
\\boxed{\\mathcal{L}[f''(t)] = s^2 F(s) - s f(0) - f'(0)}
$$

一般地，

$$
\\mathcal{L}[f^{(n)}(t)] = s^n F(s) - s^{n-1} f(0) - s^{n-2} f'(0) - \\cdots - f^{(n-1)}(0)
$$

**注意**：拉普拉斯变换的微分性质**自动将初始条件融入像函数**，这是它在求解初值问题中的巨大优势。

**6. 积分性质**

$$
\\mathcal{L}\\left[\\int_0^t f(\\tau)\\,d\\tau\\right] = \\frac{F(s)}{s}
$$

**7. 卷积定理**

定义拉普拉斯卷积 $(f * g)(t) = \\int_0^t f(\\tau) g(t - \\tau)\\,d\\tau$（注意积分上限是 $t$），则

$$
\\boxed{\\mathcal{L}[f * g] = F(s) G(s)}
$$

**8. 初值定理与终值定理**

若 $\\lim_{s \\to \\infty} sF(s)$ 存在，则

$$
f(0^+) = \\lim_{t \\to 0^+} f(t) = \\lim_{s \\to \\infty} s F(s)
$$

若 $sF(s)$ 的所有极点在左半平面（允许原点处有一阶极点），则

$$
\\lim_{t \\to \\infty} f(t) = \\lim_{s \\to 0} s F(s)
$$

### 6.5 拉普拉斯逆变换

由 $F(s)$ 求 $f(t)$ 的过程称为**拉普拉斯逆变换**，记作 $\\mathcal{L}^{-1}[F(s)]$。

**Mellin 反演公式**：

$$
f(t) = \\frac{1}{2\\pi\\mathrm{i}} \\int_{\\sigma - \\mathrm{i}\\infty}^{\\sigma + \\mathrm{i}\\infty} F(s) e^{st}\\,ds, \\quad t > 0
$$

积分路径（Bromwich 路径）是复平面上 $\\operatorname{Re} s = \\sigma$ 的一条直线，$\\sigma$ 大于 $F(s)$ 所有奇点的实部。

**逆变换的计算方法**：

1. **查表法**：将 $F(s)$ 分解成已知变换的组合（最常用）。

2. **部分分式展开**（适用于有理函数）：将 $F(s)$ 拆分后逐项查表。

3. **卷积法**：若 $F(s) = F_1(s) F_2(s)$，则 $f(t) = (f_1 * f_2)(t)$。

4. **留数法**：当 $t > 0$ 时，通过补左半大圆弧，利用留数定理：

   $$
   f(t) = \\sum_{\\text{所有奇点}\\, s_k} \\operatorname{Res}[F(s) e^{st}, s_k], \\quad t > 0
   $$

   这是因为 $e^{st}$ 在 $\\operatorname{Re} s < \\sigma$ 且 $t>0$ 时衰减。

### 6.6 拉普拉斯变换解偏微分方程

对于含时间变量的一维偏微分方程，拉普拉斯变换通常对**时间 $t$** 进行。

**一般步骤**：

1. 对时间变量 $t$ 做拉普拉斯变换，得到关于空间变量 $x$ 的常微分方程（初始条件已融入）；
2. 将边界条件也进行变换；
3. 求解常微分方程，得到像函数 $U(x,s)$；
4. 做拉普拉斯逆变换得到 $u(x,t)$（常用延迟定理、卷积或留数）。

**例1：半无限弦的受迫振动**

定解问题：

$$
\\begin{cases}
u_{tt} = c^2 u_{xx}, \\quad x > 0, \\; t > 0 \\\\
u(x,0) = u_t(x,0) = 0 \\quad (\\text{初始静止}) \\\\
u(0,t) = g(t), \\quad u(x,t) \\to 0 \\; (x \\to \\infty)
\\end{cases}
$$

**解**：对 $t$ 做拉普拉斯变换，记 $U(x,s) = \\mathcal{L}[u(x,t)]$。

利用初值为零，$\\mathcal{L}[u_{tt}] = s^2 U(x,s) - 0 - 0 = s^2 U(x,s)$。

$$
s^2 U(x,s) = c^2 \\frac{d^2 U}{dx^2} \\quad \\Rightarrow \\quad \\frac{d^2 U}{dx^2} - \\frac{s^2}{c^2} U = 0
$$

通解：$U(x,s) = A(s) e^{-(s/c)x} + B(s) e^{(s/c)x}$。

由 $x \\to \\infty$ 有界，舍去增长项 $B = 0$。由边界条件 $U(0,s) = G(s) = \\mathcal{L}[g(t)]$ 得 $A = G$。故

$$
U(x,s) = G(s) e^{-(s/c)x}
$$

由延迟定理，$\\mathcal{L}^{-1}[e^{-as} G(s)] = g(t - a) H(t - a)$，其中 $a = x/c$。因此

$$
\\boxed{u(x,t) = g\\!\\left(t - \\frac{x}{c}\\right) H\\!\\left(t - \\frac{x}{c}\\right)}
$$

这个解清晰地描述了一个以速度 $c$ 向右传播的行波。

**例2：半无限杆热传导（给定壁温）**

$$
\\begin{cases}
u_t = \\alpha u_{xx}, \\quad x > 0, \\; t > 0 \\\\
u(x,0) = 0 \\\\
u(0,t) = f(t), \\quad u(\\infty,t) = 0
\\end{cases}
$$

对 $t$ 做拉普拉斯变换：

$$
sU(x,s) - 0 = \\alpha \\frac{d^2 U}{dx^2} \\quad \\Rightarrow \\quad \\frac{d^2 U}{dx^2} - \\frac{s}{\\alpha} U = 0
$$

通解：$U = A(s) e^{-\\sqrt{s/\\alpha}\\,x} + B(s) e^{\\sqrt{s/\\alpha}\\,x}$。由无穷远条件 $B = 0$，边界条件 $A = F(s) = \\mathcal{L}[f(t)]$。于是

$$
U(x,s) = F(s) e^{-\\sqrt{s/\\alpha}\\,x}
$$

求逆变换。查表或计算可知：

$$
\\mathcal{L}^{-1}\\!\\left[e^{-a\\sqrt{s}}\\right] = \\frac{a}{2\\sqrt{\\pi}\\,t^{3/2}} e^{-a^2/(4t)}, \\quad a > 0
$$

这里 $a = x/\\sqrt{\\alpha}$。由卷积定理，

$$
\\boxed{u(x,t) = \\int_0^t f(\\tau) \\, \\frac{x}{2\\sqrt{\\pi\\alpha}\\,(t - \\tau)^{3/2}} \\exp\\!\\left[ -\\frac{x^2}{4\\alpha(t - \\tau)} \\right] d\\tau}
$$

这就是半无限杆热传导的**杜哈梅积分**。

---

## 第七章 数学物理定解问题

### 7.1 三类典型方程

数学物理方程主要研究从物理问题中提炼出的偏微分方程。在经典理论中，最重要的三类为：

**1. 波动方程（双曲型）**

$$
u_{tt} = a^2 \\Delta u
$$

描述：弦的横振动、杆的纵振动、薄膜振动、声波、电磁波等。方程中含有对时间的二阶导数，因此需要**两个初始条件**（初始位移和初始速度）。

**2. 热传导方程（抛物型）**

$$
u_t = \\alpha \\Delta u
$$

描述：热传导、物质扩散等。方程中有对时间的一阶导数，只需**一个初始条件**（初始温度/浓度分布）。

**3. 拉普拉斯方程（椭圆型）与泊松方程**

拉普拉斯方程：$\\Delta u = 0$

泊松方程：$\\Delta u = -f(\\boldsymbol r)$

描述：稳态温度场、静电场、无旋流体的速度势等。不含时间变量，是**稳态问题**，无初始条件。

### 7.2 定解条件

仅有泛定方程（如 $u_{tt} = a^2 u_{xx}$）不能唯一确定解，还需要根据具体的物理情境补充**定解条件**。

**初始条件**：描述系统在初始时刻（通常取 $t = 0$）的状态。

- 对波动方程：需给出 $u(x,y,z,0) = \\phi(x,y,z)$（初始位移）和 $u_t(x,y,z,0) = \\psi(x,y,z)$（初始速度）。
- 对热传导方程：只需给出 $u(x,y,z,0) = \\phi(x,y,z)$（初始温度分布）。
- 对稳态方程：不涉及时间，无需初始条件。

**边界条件**：描述系统在边界上的物理状况。常见的有三类：

1. **第一类边界条件（Dirichlet）**：直接给出边界上的函数值

   $$
   u|_{\\partial\\Omega} = f(M, t)
   $$

   例：弦的两端固定（$u=0$），导体表面电势给定。

2. **第二类边界条件（Neumann）**：给出边界上的法向导数值

   $$
   \\left.\\frac{\\partial u}{\\partial n}\\right|_{\\partial\\Omega} = f(M, t)
   $$

   例：绝热边界（$\\frac{\\partial u}{\\partial n} = 0$）。

3. **第三类边界条件（Robin，混合边界条件）**：给出函数值与法向导数的线性组合

   $$
   \\left(u + H\\frac{\\partial u}{\\partial n}\\right)_{\\partial\\Omega} = f(M, t)
   $$

   例：牛顿冷却定律（热传导的散热边界）。

### 7.3 衔接条件

若在所研究的区域内存在某些**间断面**（如不同介质的交界面），在这些面上物理量可能发生跃变，需补充**衔接条件**。例如，在两种介质交界面两侧，温度和热流量通常是连续的。

### 7.4 叠加原理

若泛定方程和定解条件都是**线性的**，则解的任意线性组合仍是解。即若 $u_1, u_2$ 分别满足各自的方程和定解条件，则 $\\alpha u_1 + \\beta u_2$ 满足方程，且定解条件是原条件的线性组合。

叠加原理使我们能够将复杂问题拆解为几个简单子问题之和。

### 7.5 二阶线性偏微分方程的分类

两个自变量的二阶线性偏微分方程的一般形式为

$$
a_{11} u_{xx} + 2a_{12} u_{xy} + a_{22} u_{yy} + b_1 u_x + b_2 u_y + cu + f = 0
$$

根据判别式 $\\Delta = a_{12}^2 - a_{11}a_{22}$ 可判断方程类型：

- $\\Delta > 0$：**双曲型**（如波动方程）
- $\\Delta = 0$：**抛物型**（如热传导方程）
- $\\Delta < 0$：**椭圆型**（如拉普拉斯方程）

---

## 第八章 分离变量法

### 8.1 基本思想

分离变量法（又称傅里叶方法）是求解**有界区域**上线性齐次偏微分方程的最重要方法。基本思想是：**假设解可写成若干个单变量函数的乘积**。代入偏微分方程后，可将其分解为几个常微分方程；再结合齐次边界条件确定本征值和本征函数；最后利用初始条件确定展开系数。

### 8.2 有界弦的自由振动（经典范例）

**定解问题**：

$$
\\begin{cases}
u_{tt} = a^2 u_{xx}, \\quad 0 < x < l, \\; t > 0 \\\\
u(0,t) = 0, \\; u(l,t) = 0 \\quad (\\text{两端固定}) \\\\
u(x,0) = \\phi(x), \\; u_t(x,0) = \\psi(x)
\\end{cases}
$$

**步骤1：分离变量**

设 $u(x,t) = X(x) T(t)$，代入波动方程：

$$
X(x) T''(t) = a^2 X''(x) T(t)
$$

两边同除以 $a^2 X(x) T(t)$（假设非零）：

$$
\\frac{T''(t)}{a^2 T(t)} = \\frac{X''(x)}{X(x)}
$$

左边只含 $t$，右边只含 $x$。要使两者对所有 $t, x$ 恒等，它们必须等于同一常数，记作 $-\\lambda$：

$$
\\frac{X''}{X} = \\frac{T''}{a^2 T} = -\\lambda
$$

于是得到两个常微分方程：

$$
\\begin{aligned}
X''(x) + \\lambda X(x) &= 0 \\\\
T''(t) + a^2 \\lambda T(t) &= 0
\\end{aligned}
$$

**步骤2：利用齐次边界条件导出本征值问题**

由 $u(0,t) = 0$ 和 $u(l,t) = 0$ 得 $X(0) = 0$，$X(l) = 0$。

求解 $X'' + \\lambda X = 0$，$X(0) = X(l) = 0$。

- 若 $\\lambda < 0$：令 $\\lambda = -\\mu^2$（$\\mu > 0$），通解 $X = A e^{\\mu x} + B e^{-\\mu x}$。代入边界条件可得 $A = B = 0$，只有零解（平凡解）。
- 若 $\\lambda = 0$：通解 $X = Ax + B$，由边界条件得 $A = B = 0$，也只有零解。
- 若 $\\lambda > 0$：令 $\\lambda = \\beta^2$（$\\beta > 0$），通解 $X = A\\cos\\beta x + B\\sin\\beta x$。由 $X(0) = 0$ 得 $A = 0$；由 $X(l) = 0$ 得 $\\sin\\beta l = 0$，即 $\\beta l = n\\pi$（$n = 1, 2, 3, \\dots$）。

因此**本征值**为

$$
\\lambda_n = \\left(\\frac{n\\pi}{l}\\right)^2, \\quad n = 1, 2, 3, \\dots
$$

对应的**本征函数**为

$$
X_n(x) = \\sin\\frac{n\\pi x}{l}
$$

（注意：$n$ 从 $1$ 开始，$n = 0$ 给出的是零解。）

**步骤3：求解时间方程**

对每个 $\\lambda_n$，有 $T_n'' + a^2 \\lambda_n T_n = 0$，即简谐振动方程：

$$
T_n'' + \\left(\\frac{n\\pi a}{l}\\right)^2 T_n = 0
$$

通解为

$$
T_n(t) = A_n \\cos\\frac{n\\pi a t}{l} + B_n \\sin\\frac{n\\pi a t}{l}
$$

**步骤4：叠加成一般解**

由于方程是线性的，所有特解的线性组合仍是解：

$$
u(x,t) = \\sum_{n=1}^\\infty \\left( A_n \\cos\\frac{n\\pi a t}{l} + B_n \\sin\\frac{n\\pi a t}{l} \\right) \\sin\\frac{n\\pi x}{l}
$$

**步骤5：利用初始条件确定系数**

当 $t = 0$ 时：

$$
u(x,0) = \\sum_{n=1}^\\infty A_n \\sin\\frac{n\\pi x}{l} = \\phi(x)
$$

这正是 $\\phi(x)$ 在 $[0, l]$ 上的**傅里叶正弦级数**。利用正弦函数的正交性：

$$
\\int_0^l \\sin\\frac{m\\pi x}{l} \\sin\\frac{n\\pi x}{l}\\,dx = \\frac{l}{2}\\delta_{mn}
$$

可得

$$
\\boxed{A_n = \\frac{2}{l} \\int_0^l \\phi(x) \\sin\\frac{n\\pi x}{l}\\,dx}
$$

同理，对 $t$ 求导并利用 $u_t(x,0) = \\psi(x)$：

$$
\\psi(x) = \\sum_{n=1}^\\infty B_n \\frac{n\\pi a}{l} \\sin\\frac{n\\pi x}{l}
$$

得

$$
\\boxed{B_n = \\frac{2}{n\\pi a} \\int_0^l \\psi(x) \\sin\\frac{n\\pi x}{l}\\,dx}
$$

所有系数唯一确定，定解问题求解完毕。

### 8.3 有限杆热传导

定解问题：

$$
\\begin{cases}
u_t = \\alpha u_{xx}, \\quad 0 < x < l, \\; t > 0 \\\\
u(0,t) = 0, \\; u(l,t) = 0 \\\\
u(x,0) = \\phi(x)
\\end{cases}
$$

分离变量 $u = X(x)T(t)$，得

$$
X'' + \\lambda X = 0, \\quad T' + \\alpha\\lambda T = 0
$$

空间部分本征问题同上：$\\lambda_n = (n\\pi/l)^2$，$X_n(x) = \\sin\\frac{n\\pi x}{l}$。

时间部分解为 $T_n(t) = C_n e^{-\\alpha (n\\pi/l)^2 t}$。

通解：

$$
u(x,t) = \\sum_{n=1}^\\infty C_n e^{-\\alpha (n\\pi/l)^2 t} \\sin\\frac{n\\pi x}{l}
$$

由初始条件定 $C_n = \\frac{2}{l} \\int_0^l \\phi(x) \\sin\\frac{n\\pi x}{l}\\,dx$。

**物理意义**：各本征模式随时间**指数衰减**。高阶模（$n$ 大）衰减极快，长时间后温度趋于均匀（零）。

### 8.4 圆域拉普拉斯方程

在极坐标 $(\\rho,\\theta)$ 下，二维拉普拉斯方程：

$$
\\frac{1}{\\rho}\\frac{\\partial}{\\partial\\rho}\\left(\\rho\\frac{\\partial u}{\\partial\\rho}\\right) + \\frac{1}{\\rho^2}\\frac{\\partial^2 u}{\\partial\\theta^2} = 0
$$

设 $u = R(\\rho)\\Theta(\\theta)$，分离得

$$
\\frac{\\rho^2 R'' + \\rho R'}{R} = -\\frac{\\Theta''}{\\Theta} = \\lambda
$$

角度方程 $\\Theta'' + \\lambda \\Theta = 0$，配合自然周期条件 $\\Theta(\\theta+2\\pi) = \\Theta(\\theta)$，得

$$
\\lambda = m^2, \\quad m = 0, 1, 2, \\dots
$$

$\\Theta_m(\\theta) = A_m \\cos m\\theta + B_m \\sin m\\theta$（$m = 0$ 时为常数）。

径向方程 $\\rho^2 R'' + \\rho R' - m^2 R = 0$（欧拉方程），解为：

- $m = 0$：$R_0 = C_0 + D_0 \\ln\\rho$
- $m > 0$：$R_m = C_m \\rho^m + D_m \\rho^{-m}$

若区域包含原点，为保持有限性舍去 $\\ln\\rho$ 和 $\\rho^{-m}$ 项，得

$$
u(\\rho,\\theta) = \\frac{A_0}{2} + \\sum_{m=1}^\\infty \\rho^m (A_m \\cos m\\theta + B_m \\sin m\\theta)
$$

（常数项写成 $A_0/2$ 是为与傅里叶级数公式统一。）

若边界条件为 $u(a,\\theta) = f(\\theta)$，则系数由 $f$ 的傅里叶级数给出：

$$
A_m = \\frac{1}{\\pi a^m} \\int_0^{2\\pi} f(\\theta) \\cos m\\theta\\,d\\theta, \\quad B_m = \\frac{1}{\\pi a^m} \\int_0^{2\\pi} f(\\theta) \\sin m\\theta\\,d\\theta
$$

### 8.5 非齐次边界条件的处理：辅助函数法

当边界条件非零时（如 $u(0,t) = \\mu(t)$，$u(l,t) = \\nu(t)$），不能直接使用分离变量法。处理办法是引入**辅助函数**。

构造 $v(x,t) = \\mu(t) + \\frac{x}{l}[\\nu(t) - \\mu(t)]$，显然 $v(0,t) = \\mu(t)$，$v(l,t) = \\nu(t)$。

令 $u(x,t) = v(x,t) + w(x,t)$，代入原问题，则 $w(x,t)$ 满足**齐次边界条件**，但方程可能变为非齐次。再用本征函数展开法求解 $w$，最终 $u = v + w$。

---

## 第九章 二阶常微分方程的级数解法与本征值问题

### 9.1 特殊函数常微分方程的来源

在球坐标、柱坐标等曲线坐标系中分离变量时，径向或角向常出现一些变系数二阶常微分方程，其解构成本课程中最重要的几类**特殊函数**：

- 勒让德方程 $(1-x^2)y'' - 2xy' + l(l+1)y = 0$ → 勒让德多项式
- 连带勒让德方程 → 连带勒让德函数
- 贝塞尔方程 $x^2 y'' + xy' + (x^2 - \\nu^2)y = 0$ → 贝塞尔函数
- 埃尔米特方程、拉盖尔方程等（量子力学中常见）

这些方程的共同特点是：系数在某点（如 $x = 0$、$x = \\pm 1$）不解析，甚至可能是奇点。因此需要用**级数解法**来求它们的解。

### 9.2 常点邻域的级数解法

**定义**：对于标准形式的二阶线性齐次常微分方程

$$
y''(x) + p(x) y'(x) + q(x) y(x) = 0
$$

若 $p(x)$ 和 $q(x)$ 在点 $x_0$ 处解析（即可展开为 $(x-x_0)$ 的泰勒级数），则称 $x_0$ 为方程的**常点**。

**定理**：在常点 $x_0$ 的邻域内，方程存在唯一的解析解，且可展开为幂级数：

$$
y(x) = \\sum_{n=0}^\\infty a_n (x - x_0)^n
$$

$y(x)$ 由两个初始条件（如 $a_0 = y(x_0)$ 和 $a_1 = y'(x_0)$）唯一确定，这对应方程的两个线性无关解。

**解题步骤**：

1. 将幂级数解代入方程，将各阶导数展开。
2. 合并同次幂项，令各次幂系数为零，得到系数间的**递推关系**。
3. 由递推关系将高次系数用 $a_0$、$a_1$ 表示。
4. 分别取 $a_0=1, a_1=0$ 和 $a_0=0, a_1=1$ 得到两个线性无关解。

**例**：在 $x=0$ 附近求解勒让德方程 $(1-x^2)y'' - 2xy' + l(l+1)y = 0$。

解：$x=0$ 是常点（$p(x) = -2x/(1-x^2)$，$q(x) = l(l+1)/(1-x^2)$ 均在 $x=0$ 解析）。设 $y = \\sum_{n=0}^\\infty a_n x^n$，代入整理得递推关系

$$
a_{n+2} = \\frac{n(n+1) - l(l+1)}{(n+2)(n+1)} a_n
$$

此关系只连接下标相差 $2$ 的系数，因此两个解分别为纯偶次幂级数和纯奇次幂级数。当 $l$ 为非负整数时，其中一个级数在 $n = l$ 处截断，成为 $l$ 次多项式——这就是**勒让德多项式**。

### 9.3 正则奇点邻域的级数解法（Frobenius 方法）

**定义**：若 $x_0$ 是 $p(x)$ 或 $q(x)$ 的奇点，但 $(x-x_0)p(x)$ 和 $(x-x_0)^2 q(x)$ 在 $x_0$ 解析，则称 $x_0$ 为方程的**正则奇点**。

在正则奇点去心邻域内，方程至少有一个如下形式的解（Frobenius 级数）：

$$
y(x) = (x - x_0)^\\rho \\sum_{n=0}^\\infty a_n (x - x_0)^n, \\quad a_0 \\neq 0
$$

其中 $\\rho$ 称为**指标**，由**指标方程**确定。

**Frobenius 方法步骤**：

1. 将上述形式的解代入方程，整理。
2. 提取最低幂次项的系数，令其为零得到**指标方程**：

   $$
   \\rho(\\rho-1) + p_{-1}\\rho + q_{-2} = 0
   $$

   其中 $p_{-1} = \\lim_{x\\to x_0} (x-x_0)p(x)$，$q_{-2} = \\lim_{x\\to x_0} (x-x_0)^2 q(x)$。

3. 解指标方程得两个根 $\\rho_1$ 和 $\\rho_2$（设 $\\rho_1 \\ge \\rho_2$）。
4. 将 $\\rho_1$ 代入，通过递推得到所有 $a_n$，得到第一个解。
5. 第二个解的情况取决于两根之差：
   - 若 $\\rho_1 - \\rho_2$ 不为整数，则 $\\rho_2$ 直接给出第二个独立解。
   - 若 $\\rho_1 - \\rho_2 = 0$（重根），第二解含对数项。
   - 若 $\\rho_1 - \\rho_2$ 为正整数，第二解可能也含对数项（取决于递推是否相容）。

**例**：$\\nu$ 阶贝塞尔方程 $x^2 y'' + xy' + (x^2 - \\nu^2)y = 0$ 在 $x=0$ 的求解。

化标准形式：$p(x) = 1/x$，$q(x) = 1 - \\nu^2/x^2$。$x=0$ 是正则奇点（$xp(x) = 1$ 解析，$x^2 q(x) = x^2 - \\nu^2$ 解析）。

$p_{-1} = 1$，$q_{-2} = -\\nu^2$。指标方程：$\\rho(\\rho-1) + \\rho - \\nu^2 = \\rho^2 - \\nu^2 = 0$，解得 $\\rho = \\pm\\nu$。

取 $\\rho = \\nu$，代入 Frobenius 级数可求得第一类贝塞尔函数 $J_\\nu(x)$。

### 9.4 施图姆-刘维尔（Sturm-Liouville）本征值问题

在分离变量法中，空间部分（或时间部分）常归结为如下形式的方程：

**施图姆-刘维尔型方程**：

$$
\\boxed{\\frac{d}{dx}\\left[ p(x) \\frac{dy}{dx} \\right] + [q(x) + \\lambda \\rho(x)] y = 0, \\quad a < x < b}
$$

结合适当的齐次边界条件（三类之一，或周期条件），构成**施图姆-刘维尔本征值问题**。

其中 $p(x) > 0$，$\\rho(x) > 0$（权函数），$p, q, \\rho$ 在 $[a,b]$ 上连续或分段连续。$\\lambda$ 是本征值参数。

**重要定理（施图姆-刘维尔问题的性质）**：

1. **本征值的存在性与可数性**：存在无穷多个实数本征值 $\\lambda_1 < \\lambda_2 < \\lambda_3 < \\cdots$，且 $\\lambda_n \\to \\infty$（$n \\to \\infty$）。

2. **本征函数的正交性**：对应于不同本征值 $\\lambda_m \\neq \\lambda_n$ 的本征函数 $y_m(x)$ 和 $y_n(x)$ 在区间 $[a,b]$ 上**带权 $\\rho(x)$ 正交**：

   $$
   \\boxed{\\int_a^b \\rho(x) y_m(x) y_n(x)\\,dx = 0, \\quad m \\neq n}
   $$

   **证明概要**：将 $y_m$ 和 $y_n$ 分别满足的方程乘以适当的函数后相减，在 $[a,b]$ 上积分，利用边界条件即可得证。

3. **本征函数的完备性**：任意在 $[a,b]$ 上满足适当光滑条件的函数 $f(x)$ 可展开为**广义傅里叶级数**：

   $$
   f(x) = \\sum_{n=1}^\\infty c_n y_n(x)
   $$

   其中系数

   $$
   \\boxed{c_n = \\frac{\\int_a^b \\rho(x) f(x) y_n(x)\\,dx}{\\int_a^b \\rho(x) y_n^2(x)\\,dx}}
   $$

   分母 $N_n^2 = \\int_a^b \\rho(x) y_n^2(x)\\,dx$ 称为本征函数 $y_n$ 的**模方**。

4. **本征值下界**：所有 $\\lambda_n > -\\infty$（实际上在正则问题中通常 $\\lambda_n \\ge 0$）。

5. **零点性质**：第 $n$ 个本征函数 $y_n(x)$ 在开区间 $(a,b)$ 内恰有 $n-1$ 个零点（施图姆比较定理的推论）。

**S-L 问题与分离变量法的关系**：分离变量法求出的空间部分本征问题本质上就是 S-L 问题，正交性和完备性定理为傅里叶级数展开（以及其他正交函数展开）提供了理论保证。

---

## 第十章 球函数

### 10.1 球坐标系下的拉普拉斯方程

在球坐标 $(r, \\theta, \\phi)$ 中，拉普拉斯方程为

$$
\\frac{1}{r^2}\\frac{\\partial}{\\partial r}\\left(r^2 \\frac{\\partial u}{\\partial r}\\right) + \\frac{1}{r^2\\sin\\theta}\\frac{\\partial}{\\partial \\theta}\\left(\\sin\\theta\\frac{\\partial u}{\\partial \\theta}\\right) + \\frac{1}{r^2\\sin^2\\theta}\\frac{\\partial^2 u}{\\partial \\phi^2} = 0
$$

分离变量：设 $u(r,\\theta,\\phi) = R(r) Y(\\theta,\\phi)$，代入得

$$
\\frac{1}{R}\\frac{d}{dr}\\left(r^2 \\frac{dR}{dr}\\right) = -\\frac{1}{Y}\\left[ \\frac{1}{\\sin\\theta}\\frac{\\partial}{\\partial\\theta}\\left(\\sin\\theta\\frac{\\partial Y}{\\partial\\theta}\\right) + \\frac{1}{\\sin^2\\theta}\\frac{\\partial^2 Y}{\\partial\\phi^2} \\right] = \\lambda
$$

令 $\\lambda = l(l+1)$（$l$ 为非负整数，这一选择的理由见下文），则

**径向方程**（欧拉型）：

$$
r^2 R'' + 2r R' - l(l+1) R = 0
$$

解为 $R_l(r) = A_l r^l + B_l r^{-l-1}$。

**球函数方程**：

$$
\\frac{1}{\\sin\\theta}\\frac{\\partial}{\\partial\\theta}\\left(\\sin\\theta\\frac{\\partial Y}{\\partial\\theta}\\right) + \\frac{1}{\\sin^2\\theta}\\frac{\\partial^2 Y}{\\partial\\phi^2} + l(l+1) Y = 0
$$

### 10.2 轴对称球函数（勒让德多项式）

当问题具有**轴对称性**（$u$ 与 $\\phi$ 无关，即绕 $z$ 轴旋转对称）时，$Y$ 只与 $\\theta$ 有关。球函数方程简化为

$$
\\frac{1}{\\sin\\theta}\\frac{d}{d\\theta}\\left(\\sin\\theta\\frac{d\\Theta}{d\\theta}\\right) + l(l+1) \\Theta = 0
$$

做变量代换 $x = \\cos\\theta$（$\\Theta(\\theta) \\to P(x)$），利用链式法则得

**勒让德方程**：

$$
\\boxed{(1-x^2) P''(x) - 2x P'(x) + l(l+1) P(x) = 0, \\quad -1 \\le x \\le 1}
$$

这个方程在 $x=0$ 是常点，在 $x=\\pm1$ 是正则奇点。要求解在 $[-1,1]$ 上有界，则 $l$ 必须为非负整数，此时解退化为 $l$ 次多项式——**勒让德多项式** $P_l(x)$。

**罗巨格公式（Rodrigues formula）**：

$$
\\boxed{P_l(x) = \\frac{1}{2^l l!} \\frac{d^l}{dx^l}(x^2 - 1)^l}
$$

由此可得前几项：

$$
P_0(x) = 1, \\quad P_1(x) = x, \\quad P_2(x) = \\frac{1}{2}(3x^2 - 1), \\quad P_3(x) = \\frac{1}{2}(5x^3 - 3x)
$$

奇偶性：$P_l(-x) = (-1)^l P_l(x)$。特殊值：$P_l(1) = 1$，$P_l(-1) = (-1)^l$。

**生成函数（母函数）**：

$$
\\frac{1}{\\sqrt{1 - 2xt + t^2}} = \\sum_{l=0}^\\infty P_l(x) t^l, \\quad |t| < 1
$$

母函数在推导递推关系和加法公式时非常有用。

**正交性与模**：

$$
\\boxed{\\int_{-1}^1 P_l(x) P_k(x)\\,dx = \\frac{2}{2l + 1}\\,\\delta_{lk}}
$$

**勒让德-傅里叶展开**：任意在 $[-1,1]$ 上分段光滑的函数 $f(x)$ 可展开为

$$
f(x) = \\sum_{l=0}^\\infty C_l P_l(x), \\quad C_l = \\frac{2l + 1}{2} \\int_{-1}^1 f(x) P_l(x)\\,dx
$$

对应地，$f(\\theta)$（$\\theta \\in [0,\\pi]$）可展开为

$$
f(\\theta) = \\sum_{l=0}^\\infty C_l P_l(\\cos\\theta), \\quad C_l = \\frac{2l + 1}{2} \\int_0^\\pi f(\\theta) P_l(\\cos\\theta) \\sin\\theta\\,d\\theta
$$

**球域内轴对称拉普拉斯方程的通解**：

结合径向解和角度解，

$$
\\boxed{u(r,\\theta) = \\sum_{l=0}^\\infty \\left( A_l r^l + \\frac{B_l}{r^{l+1}} \\right) P_l(\\cos\\theta)}
$$

- 区域包含球心（$r=0$）时，保有限性需舍去 $r^{-l-1}$ 项（$B_l = 0$）。
- 区域为球外（$r \\to \\infty$ 时 $u \\to 0$）时，舍去 $r^l$ 项（$A_l = 0$）。

**例**：半径为 $R$ 的球面上电势分布为 $V_0 \\cos\\theta$，求球内电势。球内通解 $u = \\sum A_l r^l P_l(\\cos\\theta)$。$V_0\\cos\\theta = V_0 P_1(\\cos\\theta)$，所以只有 $l=1$ 项：$A_1 R = V_0 \\Rightarrow A_1 = V_0/R$。解为 $u = \\frac{V_0}{R} r\\cos\\theta$。

### 10.3 连带勒让德函数

当问题不具有轴对称性时，$Y(\\theta,\\phi) = \\Theta(\\theta)\\Phi(\\phi)$。$\\Phi$ 满足 $\\Phi'' + m^2 \\Phi = 0$，由周期条件 $m$ 为整数。角度方程变为**连带勒让德方程**：

$$
(1-x^2)\\frac{d^2\\Theta}{dx^2} - 2x\\frac{d\\Theta}{dx} + \\left[l(l+1) - \\frac{m^2}{1-x^2}\\right]\\Theta = 0, \\quad |m| \\le l
$$

有界解为**连带勒让德函数** $P_l^m(x)$：

$$
\\boxed{P_l^m(x) = (1-x^2)^{|m|/2} \\frac{d^{|m|}}{dx^{|m|}} P_l(x)}
$$

正交性：同 $m$ 不同 $l$ 的函数在 $[-1,1]$ 上正交。

### 10.4 一般球函数（球谐函数）

球函数方程的解可统一表示为

$$
Y_l^m(\\theta,\\phi) = P_l^{|m|}(\\cos\\theta) e^{\\mathrm{i}m\\phi}, \\quad m = -l, -l+1, \\dots, l
$$

（有时用实形式 $\\cos m\\phi$、$\\sin m\\phi$）。

**正交归一化球函数**：

$$
Y_{lm}(\\theta,\\phi) = \\sqrt{\\frac{2l+1}{4\\pi} \\frac{(l-|m|)!}{(l+|m|)!}} \\, P_l^{|m|}(\\cos\\theta) e^{\\mathrm{i}m\\phi}
$$

构成球面上完备的正交归一基，用于展开球面上的任意函数：

$$
f(\\theta,\\phi) = \\sum_{l=0}^\\infty \\sum_{m=-l}^l C_{lm} Y_{lm}(\\theta,\\phi)
$$

---

## 第十一章 柱函数

### 11.1 贝塞尔方程的来源

在柱坐标 $(\\rho, \\phi, z)$ 中拉普拉斯方程（或亥姆霍兹方程）分离变量，径向部分常导出**贝塞尔方程**。经过适当的变量代换 $x = k\\rho$（或 $\\sqrt{\\mu}\\rho$ 等），得到标准形式：

$$
\\boxed{x^2 J_\\nu''(x) + x J_\\nu'(x) + (x^2 - \\nu^2) J_\\nu(x) = 0}
$$

$\\nu$ 是阶数，由角度部分分离的本征值决定。在轴对称情形下 $\\nu = 0$。

### 11.2 第一类贝塞尔函数

$J_\\nu(x)$ 是贝塞尔方程在 $x=0$ 有界的一个解，其级数表达式为

$$
\\boxed{J_\\nu(x) = \\sum_{m=0}^\\infty \\frac{(-1)^m}{m!\\,\\Gamma(m+\\nu+1)} \\left(\\frac{x}{2}\\right)^{2m+\\nu}}
$$

对于整数阶 $\\nu = n$：

$$
J_n(x) = \\sum_{m=0}^\\infty \\frac{(-1)^m}{m!\\,(m+n)!} \\left(\\frac{x}{2}\\right)^{2m+n}
$$

特殊性质：

- $J_0(0) = 1$，$J_n(0) = 0$（$n \\ge 1$）
- $J_{-n}(x) = (-1)^n J_n(x)$（整数阶时与 $J_n$ 线性相关）
- $J_n(x)$ 有无穷多个正零点，间距渐近于 $\\pi$

渐近行为（$x \\to \\infty$）：

$$
J_\\nu(x) \\sim \\sqrt{\\frac{2}{\\pi x}} \\cos\\!\\left(x - \\frac{\\nu\\pi}{2} - \\frac{\\pi}{4}\\right)
$$

### 11.3 第二类和第三类柱函数

**诺伊曼函数（第二类贝塞尔函数）** $N_\\nu(x)$：当 $\\nu$ 为非整数时，$J_\\nu$ 和 $J_{-\\nu}$ 已线性独立；当 $\\nu$ 为整数时需用 $N_n$ 作为第二独立解。$N_n(x)$ 在 $x=0$ 处发散（行为如 $\\ln x$）。

**汉克尔函数（第三类柱函数）**：

$$
H_\\nu^{(1)}(x) = J_\\nu(x) + \\mathrm{i} N_\\nu(x), \\quad H_\\nu^{(2)}(x) = J_\\nu(x) - \\mathrm{i} N_\\nu(x)
$$

在大 $x$ 下分别对应出射波和入射波。

对于**包含原点的区域**（如圆柱内部），解必须有界，因此只取 $J_n(x)$，舍弃 $N_n(x)$。

### 11.4 贝塞尔函数的递推公式

三类柱函数（$J_\\nu, N_\\nu, H_\\nu^{(1,2)}$）满足相同的递推关系。记 $Z_\\nu(x)$ 为任意柱函数，有

$$
\\boxed{\\frac{d}{dx}[x^\\nu Z_\\nu(x)] = x^\\nu Z_{\\nu-1}(x)}
$$

$$
\\boxed{\\frac{d}{dx}[x^{-\\nu} Z_\\nu(x)] = -x^{-\\nu} Z_{\\nu+1}(x)}
$$

展开后可得多种常用形式，如

$$
Z_{\\nu-1}(x) - Z_{\\nu+1}(x) = 2 Z_\\nu'(x)
$$

$$
Z_{\\nu-1}(x) + Z_{\\nu+1}(x) = \\frac{2\\nu}{x} Z_\\nu(x)
$$

### 11.5 贝塞尔函数的正交性与傅里叶-贝塞尔展开

考虑圆柱内 $0 \\le \\rho \\le R$ 的问题。设边界条件为齐次（如第一类：$J_n(kR) = 0$），记正根为 $k_{nm}$（$m = 1, 2, 3, \\dots$），它们是本征值，本征函数为 $J_n(k_{nm}\\rho)$。

正交性（关键）：

$$
\\boxed{\\int_0^R J_n(k_{nm}\\rho) J_n(k_{nl}\\rho)\\,\\rho\\,d\\rho = \\frac{R^2}{2} [J_{n+1}(k_{nm}R)]^2 \\,\\delta_{ml}}
$$

（权重函数为 $\\rho$）。

**傅里叶-贝塞尔展开**：定义在 $[0,R]$ 上的函数 $f(\\rho)$ 可展开为

$$
\\boxed{f(\\rho) = \\sum_{m=1}^\\infty C_m J_n(k_{nm}\\rho)}
$$

$$
\\boxed{C_m = \\frac{2}{R^2 [J_{n+1}(k_{nm}R)]^2} \\int_0^R f(\\rho) J_n(k_{nm}\\rho)\\,\\rho\\,d\\rho}
$$

### 11.6 虚宗量贝塞尔函数

当柱体轴向的分离常数为负（对应上下底面齐次边界条件），会出现**虚宗量贝塞尔方程**：

$$
x^2 y'' + xy' - (x^2 + \\nu^2)y = 0
$$

解为虚宗量贝塞尔函数 $I_\\nu(x)$ 和虚宗量汉克尔函数 $K_\\nu(x)$。$I_\\nu(0)$ 有限，$K_\\nu(0)$ 发散。

### 11.7 球贝塞尔函数

在球坐标系中分离亥姆霍兹方程 $(\\nabla^2 + k^2)u = 0$ 时，径向部分经代换 $y(x) = \\sqrt{\\frac{\\pi}{2x}} R(r)$，$x = kr$，化为半奇数阶贝塞尔方程，其解为**球贝塞尔函数**：

$$
j_l(x) = \\sqrt{\\frac{\\pi}{2x}} J_{l+1/2}(x), \\quad n_l(x) = \\sqrt{\\frac{\\pi}{2x}} N_{l+1/2}(x)
$$

$j_0(x) = \\frac{\\sin x}{x}$，$n_0(x) = -\\frac{\\cos x}{x}$。在球形区域内的径向问题中，$j_l(kr)$ 为在原点的有界解。

---

## 第十二章 格林函数法

### 12.1 点源叠加的物理思想

格林函数法是求解**非齐次方程边值问题**的系统方法。基本思想源于线性系统的叠加原理：任何连续的源分布都可分解为**点源的叠加**。若我们知道了单个点源在给定边界条件下产生的场——这就是**格林函数**——那么将所有点源的场积分就得到了任意源分布产生的总场。

### 12.2 格林函数的定义

考虑泊松方程 $\\nabla^2 u = -f(\\boldsymbol r)$（$\\boldsymbol r \\in \\Omega$），附加齐次狄利克雷边界条件 $u|_{\\partial\\Omega} = 0$（第一类）。**格林函数** $G(\\boldsymbol r, \\boldsymbol r')$ 定义为满足下列方程和边界条件的函数：

$$
\\boxed{\\nabla^2 G(\\boldsymbol r, \\boldsymbol r') = -\\delta(\\boldsymbol r - \\boldsymbol r'), \\qquad G|_{\\partial\\Omega} = 0}
$$

其中 $\\delta(\\boldsymbol r - \\boldsymbol r')$ 是狄拉克 $\\delta$ 函数，代表集中于 $\\boldsymbol r'$ 的单位强度点源。$G(\\boldsymbol r, \\boldsymbol r')$ 的物理解释：位于 $\\boldsymbol r'$ 点的单位点源在 $\\boldsymbol r$ 点产生的响应（且满足边界条件）。

### 12.3 解的积分表示

**格林第二恒等式**：

$$
\\int_\\Omega (u \\nabla^2 v - v \\nabla^2 u)\\,d\\tau = \\oint_{\\partial\\Omega} \\left( u\\frac{\\partial v}{\\partial n} - v\\frac{\\partial u}{\\partial n} \\right) da
$$

取 $v(\\boldsymbol r) = G(\\boldsymbol r, \\boldsymbol r')$（固定 $\\boldsymbol r'$），并利用 $\\nabla^2 u = -f$ 和 $\\nabla^2 G = -\\delta$，可得

$$
u(\\boldsymbol r') = \\int_\\Omega G(\\boldsymbol r, \\boldsymbol r') f(\\boldsymbol r)\\,d\\tau - \\oint_{\\partial\\Omega} u(\\boldsymbol r) \\frac{\\partial G(\\boldsymbol r, \\boldsymbol r')}{\\partial n}\\,da
$$

（再利用格林函数的对称性 $G(\\boldsymbol r, \\boldsymbol r') = G(\\boldsymbol r', \\boldsymbol r)$，交换 $\\boldsymbol r$ 和 $\\boldsymbol r'$。）

对于狄利克雷问题（边界上 $u$ 已知），取 $G_D$ 为边界为零的格林函数，则边界上 $G_D = 0$，面积分仅保留含 $u$ 的那一项。解简化为

$$
u(\\boldsymbol r) = \\int_\\Omega G_D(\\boldsymbol r, \\boldsymbol r') f(\\boldsymbol r')\\,d\\tau' - \\oint_{\\partial\\Omega} u(\\boldsymbol r') \\frac{\\partial G_D}{\\partial n'}\\,da'
$$

若源 $f = 0$（拉普拉斯方程），则解完全由边界值决定：

$$
u(\\boldsymbol r) = -\\oint_{\\partial\\Omega} u(\\boldsymbol r') \\frac{\\partial G_D}{\\partial n'}\\,da'
$$

### 12.4 自由空间格林函数（基本解）

在无界空间（无边界条件，或无穷远处自然边界条件）中，基本解为

- 三维：$\\displaystyle G_0(\\boldsymbol r, \\boldsymbol r') = \\frac{1}{4\\pi |\\boldsymbol r - \\boldsymbol r'|}$
- 二维：$\\displaystyle G_0(\\boldsymbol r, \\boldsymbol r') = -\\frac{1}{2\\pi} \\ln|\\boldsymbol r - \\boldsymbol r'|$

验证：三维中 $\\nabla^2(1/r) = -4\\pi\\delta(\\boldsymbol r)$。

### 12.5 镜像法构造格林函数

对于具有规则对称边界（平面、球面）的区域，镜像法提供了一种直观构造格林函数的方式。

**半空间（$z > 0$）狄利克雷问题**：在源点 $(x',y',z')$ 放 $+1$ 强度的源，在对称点 $(x',y',-z')$ 放 $-1$ 强度的源，两源在 $z=0$ 上完全抵消：

$$
G(\\boldsymbol r, \\boldsymbol r') = \\frac{1}{4\\pi}\\left( \\frac{1}{|\\boldsymbol r - \\boldsymbol r'|} - \\frac{1}{|\\boldsymbol r - \\boldsymbol r''|} \\right)
$$

**球内（半径 $R$）狄利克雷问题**：源点 $\\boldsymbol r'$ 在球内（$r' < R$），镜像点在球外的反演点 $\\boldsymbol r'' = \\frac{R^2}{r'^2}\\boldsymbol r'$，镜像源强度为 $-\\frac{R}{r'}$。在球面上 $G = 0$。

$$
G(\\boldsymbol r, \\boldsymbol r') = \\frac{1}{4\\pi}\\left( \\frac{1}{|\\boldsymbol r - \\boldsymbol r'|} - \\frac{R/r'}{|\\boldsymbol r - \\boldsymbol r''|} \\right)
$$

由球内格林函数可导出球内无源时调和函数的**泊松积分公式**。

### 12.6 本征函数展开法

在规则区域（矩形、圆柱、球），格林函数可按该区域的本征函数展开。设 $\\{\\phi_n(\\boldsymbol r)\\}$ 满足 $\\nabla^2 \\phi_n + \\lambda_n \\phi_n = 0$ 和齐次边界条件，且构成完备正交系，则

$$
\\boxed{G(\\boldsymbol r, \\boldsymbol r') = \\sum_n \\frac{\\phi_n(\\boldsymbol r) \\phi_n^*(\\boldsymbol r')}{\\lambda_n}}
$$

**例（一维）**：区间 $[0,L]$ 上狄利克雷格林函数，本征函数 $\\phi_n(x) = \\sqrt{\\frac{2}{L}}\\sin\\frac{n\\pi x}{L}$，$\\lambda_n = (n\\pi/L)^2$。展开级数可求和为分段线性函数 $G(x,x') = \\frac{x_<(L-x_>)}{L}$。

---

## 第十三章 积分变换法

### 13.1 方法概述

积分变换法是将偏微分方程通过积分变换（傅里叶变换、拉普拉斯变换等）转化为像空间中的**常微分方程**或**代数方程**，求解后再逆变换回原函数空间。其核心在于：**变换可将微分运算化为乘法运算，从而降维或降阶**。

前面第五、六章已详细介绍了傅里叶变换和拉普拉斯变换的定义、性质及其在特定问题中的应用。本章作为总结和补充，强调二者在数学物理方程中的系统应用以及选择原则。

### 13.2 傅里叶变换法（空间无界问题）

**适用场景**：空间区域为**全直线**（$-\\infty < x < \\infty$）或**半直线**（可通过奇偶延拓化为全直线的问题）。

**关键步骤**：

1. 对空间变量进行傅里叶变换，利用 $\\mathcal{F}[u_{xx}] = -k^2 \\hat{u}$ 将对 $x$ 的微分化为乘法。
2. 得到关于时间 $t$ 的常微分方程。
3. 将初始条件也进行变换。
4. 解常微分方程得到 $\\hat{u}(k,t)$。
5. 做傅里叶逆变换，常利用傅里叶积分、高斯积分和卷积定理。

**代表性问题**：无限长杆热传导（柯西问题）：

$$
u(x,t) = \\frac{1}{\\sqrt{4\\pi\\alpha t}} \\int_{-\\infty}^\\infty \\phi(\\xi) \\exp\\!\\left[-\\frac{(x-\\xi)^2}{4\\alpha t}\\right] d\\xi
$$

**三维无界波动问题**的解可由傅里叶变换推导出泊松公式（基尔霍夫公式）。

### 13.3 拉普拉斯变换法（时间初值问题）

**适用场景**：含有时间变量 $t \\ge 0$ 的初值问题（波动、热传导等），且方程系数不依赖于 $t$（或可处理）。

**关键步骤**：

1. 对时间 $t$ 进行拉普拉斯变换，初始条件自动融入像方程。
2. 利用 $\\mathcal{L}[u_t] = sU - u(0)$，$\\mathcal{L}[u_{tt}] = s^2 U - s u(0) - u_t(0)$。
3. 得到关于空间变量 $x$ 的常微分方程（边界条件也一并变换）。
4. 求解后得到 $U(x,s)$。
5. 利用拉普拉斯逆变换（查表、部分分式、卷积定理、留数定理）求得 $u(x,t)$。

**代表性问题**：

- 半无限弦受迫振动：$u_{tt} = c^2 u_{xx}$，得行波解 $u = g(t - x/c) H(t - x/c)$。
- 半无限杆热传导：得杜哈梅积分。

### 13.4 两种变换的对比与选择

| 特性               | 傅里叶变换          | 拉普拉斯变换            |
| ------------------ | ------------------- | ----------------------- |
| **积分域**         | $(-\\infty, \\infty)$ | $[0, \\infty)$           |
| **擅长变量**       | 空间变量（无界）    | 时间变量（初值）        |
| **初始条件处理**   | 需另外代入          | 自动融入                |
| **常见逆变换方法** | 积分、留数          | 查表、留数、卷积        |
| **典型方程**       | 全直线热传导/波动   | 半无限弦/杆的振动和扩散 |

---

## 第十四章 保角变换法（共形映射）

### 14.1 基本原理

**核心定理**：二维拉普拉斯方程 $\\nabla^2 u = 0$ 在解析变换 $w = f(z)$（$f'(z) \\neq 0$）下**保持形式不变**。即若 $\\varphi(u,v)$ 在 $w$ 平面是调和函数，则 $\\Phi(x,y) = \\varphi(u(x,y), v(x,y))$ 在 $z$ 平面相应区域也是调和的。

**证明概要**：由 C-R 条件推导：

$$
\\Phi_{xx} + \\Phi_{yy} = |f'(z)|^2 (\\varphi_{uu} + \\varphi_{vv}) = 0
$$

这意味着我们可以通过保角变换，把**复杂区域**的边值问题映射为**简单区域**（上半平面、单位圆、带域）的边值问题，在简单区域求解后再映射回原区域。

### 14.2 常用保角变换

| 变换                    | 几何效果                                                                                       |
| ----------------------- | ---------------------------------------------------------------------------------------------- |
| $w = z + a$             | 平移                                                                                           |
| $w = az$                | 旋转 + 缩放                                                                                    |
| $w = z^\\alpha$          | 角度扩张/压缩。角域 $(0,\\theta)$ → $(0,\\alpha\\theta)$。取 $\\alpha = \\pi/\\theta$ 展平为上半平面 |
| $w = e^z$               | 水平带域 $(0,\\operatorname{Im}z<\\pi)$ → 上半平面                                               |
| $w = \\ln z$             | 角域 → 带域                                                                                    |
| $w = \\frac{az+b}{cz+d}$ | 分式线性变换。保圆（直线视为半径无穷大的圆）。三点可决定唯一映射                               |

### 14.3 解题步骤与例题

**一般步骤**：

1. 观察原区域的几何形状（角域？带域？同心/偏心圆？）。
2. 选取合适的解析映射 $w = f(z)$。
3. 写出映射后区域上的边界条件（逐边界对应）。
4. 在新的简单区域下求解拉普拉斯方程（常用 $\\arg w$ 等调和函数）。
5. 用逆映射 $z = f^{-1}(w)$ 把解还原为 $x, y$ 的函数。

**例1：角域稳态温度场**

无限大楔形区域 $0 < \\arg z < \\theta$（$0 < \\theta < 2\\pi$），边界上温度分别为 $T_1$（$\\arg z = 0$）和 $T_2$（$\\arg z = \\theta$）。求区域内温度。

取变换 $w = z^{\\pi/\\theta}$，将区域映为上半平面。边界映射：

- $\\arg z = 0 \\to \\arg w = 0$（正实轴）：$T = T_1$
- $\\arg z = \\theta \\to \\arg w = \\pi$（负实轴）：$T = T_2$

在上半平面，线性函数 $T(w) = A + B\\arg w$ 是调和的。代入边界条件得 $A = T_1$，$B = (T_2 - T_1)/\\pi$。故

$$
T(w) = T_1 + \\frac{T_2 - T_1}{\\pi} \\arg w
$$

逆代换：$\\arg w = \\frac{\\pi}{\\theta}\\arg z$，所以

$$
\\boxed{T(z) = T_1 + \\frac{T_2 - T_1}{\\theta} \\arg z}
$$

温度沿角度方向线性变化，与径向距离无关。

**例2：第一象限问题**

第一象限，两边温度分别为 $0$（正实轴）和 $T_0$（正虚轴）。取 $w = z^2$（$\\alpha = 2$），映为上半平面，同样方法解得

$$
T(z) = \\frac{2T_0}{\\pi} \\arg z = \\frac{2T_0}{\\pi} \\arctan\\frac{y}{x}
$$

---

## AI 附录：期末备考建议

1. **第一至四章（复变函数核心）**：留数计算三种实积分是必考，每类练熟两道题。
2. **第五、六章（积分变换）**：区分何时用傅里叶（无界空间），何时用拉普拉斯（时间初值）。变换→解常微→逆变换，掌握每个案例的推导。
3. **第七、八章（定解问题与分离变量法）**：是整个课程的**灵魂**。弦振动、热传导、矩形/圆域拉普拉斯方程，每种完整推导必须能默写。
4. **第九、十、十一章（特殊函数）**：勒让德多项式和贝塞尔函数的正交性、模、展开系数公式是重点。理解它们在球和柱边值问题中的应用。
5. **第十二章（格林函数）**：掌握点源叠加的思想；会用镜像法求半空间和球内格林函数；理解本征函数展开的格林函数形式。
6. **第十三章（积分变换法）**：是第五、六章在偏微分方程中的系统应用总结。
7. **第十四章（保角变换）**：理解调和函数在解析映射下的不变性，记住常用映射效果，能做角域/半平面典型例题。
`,r={title:"数学物理方法期末复习",author:"NeoWangKing",date:new Date(1778243692e3),lastMod:new Date(1778243692e3),tags:["数学","数学物理方法","期末复习","复变函数","积分变换","偏微分方程","特殊函数"],category:["数学","数学物理方法"],summary:"本文是数学物理方法的详细期末复习笔记，全面覆盖复变函数（解析性、积分、留数定理及应用）、傅里叶变换与拉普拉斯变换（性质及解偏微分方程）、分离变量法（直角坐标、极坐标、球坐标、柱坐标）、特殊函数（勒让德、贝塞尔）、格林函数法和保角变换法，并配有大量典型例题和详尽推导。",comments:!0,draft:!0,sticky:0,chapter:9},i={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/mathematics/MMiP/9-Mathematical-Physics-Final-Review.md",rawData:void 0};export{i as _internal,t as body,$ as collection,r as data,n as id,a as slug};
