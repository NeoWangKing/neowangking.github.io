const n="mathematics/MMiP/9-Mathematical-Physics-Final-Review.md",$="posts",a="mathematics/mmip/9-mathematical-physics-final-review",t=`
## 一、复变函数基础

### 1.1 复数与复变函数

- 复数 $z = x + \\mathrm{i}y$，模 $|z| = \\sqrt{x^2+y^2}$，辐角 $\\theta = \\arg z$。
- 欧拉公式：$e^{\\mathrm{i}\\theta} = \\cos\\theta + \\mathrm{i}\\sin\\theta$。
- **区域**：连通开集；**单连通域**：任何闭合曲线可连续收缩至一点。

### 1.2 解析函数

函数 $f(z) = u(x,y) + \\mathrm{i}v(x,y)$ 在区域 $D$ 内**解析**（全纯）的充要条件：$u,v$ 可微且满足**柯西-黎曼方程**（C-R 条件）：

$$
\\begin{align}
\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}, \\qquad
\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}
\\end{align}
$$

此时 $f'(z) = u_x + \\mathrm{i}v_x = v_y - \\mathrm{i}u_y$。

若 $f(z)$ 在 $D$ 内解析，其实部 $u$ 和虚部 $v$ 均为**调和函数**：$u_{xx}+u_{yy}=0$，$v_{xx}+v_{yy}=0$，且 $v$ 是 $u$ 的**共轭调和函数**。

**常见解析函数**：$e^z,\\ \\sin z,\\ \\cos z,\\ \\sinh z,\\ \\cosh z,\\ \\ln z$（需指定分支切割）。

### 1.3 经典例题

**例**：已知 $u(x,y)=x^2-y^2$，求其共轭调和函数 $v$ 及解析函数 $f(z)=u+\\mathrm{i}v$。

**解**：由 C-R：$v_y = u_x = 2x$，$v_x = -u_y = 2y$。
从 $v_y=2x$ 得 $v = 2xy + g(x)$；代入 $v_x = 2y + g'(x) = 2y$ $\\Rightarrow$ $g'(x)=0$，故 $g(x)=C$。
取 $C=0$，得 $v = 2xy$，则 $f(z) = (x^2-y^2) + \\mathrm{i}(2xy) = (x+\\mathrm{i}y)^2 = z^2$。

---

## 二、复变函数的积分

### 2.1 柯西积分定理

若 $f(z)$ 在单连通域 $D$ 内解析，则沿 $D$ 内任何闭合曲线 $C$ 的积分为零：

$$
\\begin{align}
\\oint_C f(z)\\,\\mathrm{d}z = 0
\\end{align}
$$

**推广**：若 $D$ 为多连通域，有 $\\oint_C f\\,\\mathrm{d}z = \\sum \\oint_{C_k} f\\,\\mathrm{d}z$。

### 2.2 柯西积分公式

若 $f(z)$ 在正向简单闭曲线 $C$ 及其内部解析，$z_0$ 为 $C$ 内一点，则

$$
\\begin{align}
f(z_0) = \\frac{1}{2\\pi\\mathrm{i}} \\oint_C \\frac{f(z)}{z - z_0}\\,\\mathrm{d}z
\\end{align}
$$

**高阶导数公式**：

$$
\\begin{align}
f^{(n)}(z_0) = \\frac{n!}{2\\pi\\mathrm{i}} \\oint_C \\frac{f(z)}{(z - z_0)^{n+1}}\\,\\mathrm{d}z
\\end{align}
$$

### 2.3 经典例题

**例**：计算 $I = \\oint_{|z|=2} \\frac{e^z}{z-1}\\,\\mathrm{d}z$。

**解**：$f(z)=e^z$ 在全平面解析，$z_0=1$ 在 $|z|=2$ 内。由柯西积分公式：

$$
\\begin{align}
I = 2\\pi\\mathrm{i}\\, f(1) = 2\\pi\\mathrm{i} e
\\end{align}
$$

---

## 三、复级数与留数定理

### 3.1 泰勒级数与洛朗级数

- **泰勒级数**：$f(z)$ 在 $z_0$ 邻域解析，展开为 $f(z) = \\sum_{n=0}^\\infty a_n (z-z_0)^n$，$a_n = \\frac{f^{(n)}(z_0)}{n!}$。
- **洛朗级数**：在圆环域 $r<|z-z_0|<R$ 内解析，展开为 $f(z) = \\sum_{n=-\\infty}^\\infty c_n (z-z_0)^n$，其中

$$
\\begin{align}
c_n = \\frac{1}{2\\pi\\mathrm{i}} \\oint_C \\frac{f(z)}{(z-z_0)^{n+1}}\\,\\mathrm{d}z
\\end{align}
$$

### 3.2 孤立奇点与留数

- **可去奇点**：洛朗级数无负幂项；**极点**：有限负幂项，最大负幂次数为**阶数**；**本性奇点**：无穷多负幂项。
- **留数**：$\\operatorname{Res}[f(z), z_0] = c_{-1}$（$z_0$ 洛朗展开中 $(z-z_0)^{-1}$ 的系数）。
- 对于 $m$ 阶极点：

$$
\\begin{align}
\\operatorname{Res}[f(z), z_0] = \\frac{1}{(m-1)!} \\lim_{z\\to z_0} \\frac{\\mathrm{d}^{m-1}}{\\mathrm{d}z^{m-1}} \\big[ (z-z_0)^m f(z) \\big]
\\end{align}
$$

### 3.3 留数定理及实积分计算

**留数定理**：若 $f(z)$ 在闭合曲线 $C$ 内除孤立奇点 $z_k$ 外解析，则

$$
\\begin{align}
\\oint_C f(z)\\,\\mathrm{d}z = 2\\pi\\mathrm{i} \\sum_{k} \\operatorname{Res}[f(z), z_k]
\\end{align}
$$

**典型实积分**：

#### (1) $\\int_0^{2\\pi} R(\\cos\\theta,\\sin\\theta)\\,\\mathrm{d}\\theta$ 型

令 $z = e^{\\mathrm{i}\\theta}$，则 $\\mathrm{d}\\theta = \\frac{\\mathrm{d}z}{\\mathrm{i}z}$，$\\cos\\theta = \\frac{z+z^{-1}}{2}$，$\\sin\\theta = \\frac{z-z^{-1}}{2\\mathrm{i}}$。化为 $|z|=1$ 上的回路积分。

**例**：计算 $I = \\int_0^{2\\pi} \\frac{\\mathrm{d}\\theta}{5 + 4\\cos\\theta}$。

**解**：令 $z=e^{\\mathrm{i}\\theta}$，整理得 $I = \\oint_{|z|=1} \\frac{2}{(z+2)(2z+1)} \\frac{\\mathrm{d}z}{\\mathrm{i}}$？详细计算如下：

$$
\\begin{align}
I &= \\oint_{|z|=1} \\frac{1}{5 + 2(z+z^{-1})} \\frac{\\mathrm{d}z}{\\mathrm{i}z}
= \\frac{1}{\\mathrm{i}} \\oint_{|z|=1} \\frac{\\mathrm{d}z}{2z^2 + 5z + 2} \\\\
&= \\frac{1}{\\mathrm{i}} \\oint_{|z|=1} \\frac{\\mathrm{d}z}{(2z+1)(z+2)}
\\end{align}
$$

极点 $z=-1/2$ 在单位圆内，$z=-2$ 在圆外。留数：$\\operatorname{Res}[f, -1/2] = \\left. \\frac{1}{2(z+2)} \\right|_{z=-1/2} = \\frac{1}{3}$。故 $I = \\frac{1}{\\mathrm{i}} \\cdot 2\\pi\\mathrm{i} \\cdot \\frac{1}{3} = \\frac{2\\pi}{3}$。

#### (2) $\\int_{-\\infty}^\\infty \\frac{P(x)}{Q(x)}\\,\\mathrm{d}x$ 型（分母次数至少比分子高 2）

补上半圆周构成回路，留数和乘以 $2\\pi\\mathrm{i}$。

**例**：$I = \\int_{-\\infty}^\\infty \\frac{\\mathrm{d}x}{1+x^2}$。

**解**：$f(z) = \\frac{1}{1+z^2}$，上半平面极点 $z=\\mathrm{i}$，$\\operatorname{Res}[f,\\mathrm{i}] = \\left. \\frac{1}{2z} \\right|_{z=\\mathrm{i}} = \\frac{1}{2\\mathrm{i}}$。故 $I = 2\\pi\\mathrm{i} \\cdot \\frac{1}{2\\mathrm{i}} = \\pi$。

#### (3) 含三角函数的无穷积分（约当引理）

$\\int_{-\\infty}^\\infty f(x) e^{\\mathrm{i} m x} \\mathrm{d}x$ 型，可配合约当引理完成。

---

## 四、傅里叶变换

### 4.1 定义与性质

- 正变换：$\\displaystyle F(k) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty f(x) e^{-\\mathrm{i}kx} \\,\\mathrm{d}x$
- 逆变换：$\\displaystyle f(x) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty F(k) e^{\\mathrm{i}kx} \\,\\mathrm{d}k$

**微分性质**：

$$
\\begin{align}
\\mathcal{F}\\{ f'(x) \\} = \\mathrm{i}k F(k),\\quad
\\mathcal{F}\\{ f''(x) \\} = -k^2 F(k)
\\end{align}
$$

**卷积定理**：$\\mathcal{F}\\{ f*g \\} = \\sqrt{2\\pi} \\, F(k) G(k)$，其中 $(f*g)(x) = \\int_{-\\infty}^\\infty f(\\xi) g(x-\\xi)\\,\\mathrm{d}\\xi$。

### 4.2 典型应用：一维热传导柯西问题

方程 $u_t = \\alpha u_{xx}$，初值 $u(x,0)=\\phi(x)$。对 $x$ 傅里叶变换得 $\\hat{u}_t = -\\alpha k^2 \\hat{u}$，解为 $\\hat{u} = \\hat{\\phi}(k) e^{-\\alpha k^2 t}$。逆变换得

$$
\\begin{align}
u(x,t) = \\frac{1}{\\sqrt{4\\pi\\alpha t}} \\int_{-\\infty}^\\infty \\phi(\\xi) \\exp\\left[ -\\frac{(x-\\xi)^2}{4\\alpha t} \\right] \\mathrm{d}\\xi
\\end{align}
$$

---

## 五、拉普拉斯变换

### 5.1 定义与性质

- $\\displaystyle F(s) = \\int_0^\\infty f(t) e^{-st}\\,\\mathrm{d}t$，$s$ 为复变量。
- 导数：$\\mathcal{L}\\{ f' \\} = sF(s)-f(0)$，$\\mathcal{L}\\{ f'' \\} = s^2F(s)-s f(0)-f'(0)$。
- 延迟定理：$\\mathcal{L}\\{ f(t-a)H(t-a) \\} = e^{-as}F(s)$。
- 卷积：$\\mathcal{L}\\{ f*g \\} = F(s)G(s)$，其中 $(f*g)(t) = \\int_0^t f(\\tau)g(t-\\tau)\\,\\mathrm{d}\\tau$。

### 5.2 典型应用：半无限弦受迫振动

方程 $u_{tt} = c^2 u_{xx}$，$x>0,t>0$；初值 $u=u_t=0$；边界 $u(0,t)=g(t)$。对 $t$ 取拉氏变换得 $U_{xx} - \\frac{s^2}{c^2}U = 0$，通解舍去正指数项得 $U = G(s) e^{-(s/c)x}$。逆变换由延迟定理得

$$
\\begin{align}
u(x,t) = g(t - x/c)\\, H(t - x/c)
\\end{align}
$$

---

## 六、数学物理方程定解问题

### 6.1 三类典型方程

- **波动方程**：$u_{tt} = a^2 \\Delta u$ （弦振动、电磁波）
- **热传导方程**：$u_t = \\alpha \\Delta u$ （扩散、热传导）
- **拉普拉斯方程**：$\\Delta u = 0$ （稳态温度、静电场）

### 6.2 定解条件

- **初始条件**：$u|_{t=0}$、$u_t|_{t=0}$（对波动方程）。
- **边界条件**：
  - 第一类：$u|_{\\partial D} = f$
  - 第二类：$\\left. \\frac{\\partial u}{\\partial n} \\right|_{\\partial D} = f$
  - 第三类：$\\left( \\frac{\\partial u}{\\partial n} + h u \\right)|_{\\partial D} = f$

---

## 七、分离变量法

### 7.1 直角坐标系下的分离变量

以有界弦自由振动为例：$u_{tt} = a^2 u_{xx},\\ 0<x<l,\\ t>0$；边界 $u(0,t)=u(l,t)=0$；初值 $u(x,0)=\\phi(x),\\ u_t(x,0)=\\psi(x)$。

设 $u = X(x)T(t)$，代入得

$$
\\begin{align}
\\frac{X''}{X} = \\frac{T''}{a^2 T} = -\\lambda
\\end{align}
$$

空间方程 $X'' + \\lambda X = 0$ 配合齐次边界条件得本征值和本征函数：

$$
\\begin{align}
\\lambda_n = \\left( \\frac{n\\pi}{l} \\right)^2, \\quad X_n(x) = \\sin\\left( \\frac{n\\pi x}{l} \\right), \\quad n = 1,2,\\dots
\\end{align}
$$

时间方程 $T_n'' + \\lambda_n a^2 T_n = 0$，解为 $T_n(t) = A_n \\cos\\frac{n\\pi a t}{l} + B_n \\sin\\frac{n\\pi a t}{l}$。

通解叠加：

$$
\\begin{align}
u(x,t) = \\sum_{n=1}^\\infty \\left( A_n \\cos\\frac{n\\pi a t}{l} + B_n \\sin\\frac{n\\pi a t}{l} \\right) \\sin\\frac{n\\pi x}{l}
\\end{align}
$$

利用初值和傅里叶正弦级数确定系数：

$$
\\begin{align}
A_n &= \\frac{2}{l} \\int_0^l \\phi(x) \\sin\\frac{n\\pi x}{l}\\,\\mathrm{d}x \\\\
B_n &= \\frac{2}{n\\pi a} \\int_0^l \\psi(x) \\sin\\frac{n\\pi x}{l}\\,\\mathrm{d}x
\\end{align}
$$

### 7.2 极坐标系下的分离变量（圆域问题）

二维拉普拉斯方程 $\\Delta u = 0$ 在圆域 $\\rho < R$ 内，极坐标下：

$$
\\begin{align}
u_{\\rho\\rho} + \\frac{1}{\\rho} u_\\rho + \\frac{1}{\\rho^2} u_{\\theta\\theta} = 0
\\end{align}
$$

设 $u = P(\\rho) \\Theta(\\theta)$，分离得

$$
\\begin{align}
\\rho^2 P'' + \\rho P' - \\lambda P = 0, \\quad \\Theta'' + \\lambda \\Theta = 0
\\end{align}
$$

由周期条件 $\\Theta(\\theta+2\\pi) = \\Theta(\\theta)$ 得 $\\lambda = m^2\\ (m=0,1,2,\\dots)$，$\\Theta_m(\\theta) = C_m \\cos m\\theta + D_m \\sin m\\theta$。

径向方程为欧拉型方程 $\\rho^2 P'' + \\rho P' - m^2 P = 0$，通解为

$$
\\begin{align}
P_0 = A_0 + B_0 \\ln\\rho,\\quad P_m = A_m \\rho^m + B_m \\rho^{-m}\\ (m>0)
\\end{align}
$$

根据有界性（$\\rho=0$ 处）舍去 $\\ln\\rho$ 和 $\\rho^{-m}$ 项。圆域内解为

$$
\\begin{align}
u(\\rho,\\theta) = \\frac{A_0}{2} + \\sum_{m=1}^\\infty \\rho^m (A_m \\cos m\\theta + B_m \\sin m\\theta)
\\end{align}
$$

边界 $u(R,\\theta) = f(\\theta)$ 可确定系数为傅里叶级数系数。

**例**：圆域狄利克雷问题的泊松积分公式：

$$
\\begin{align}
u(\\rho,\\theta) = \\frac{R^2 - \\rho^2}{2\\pi} \\int_0^{2\\pi} \\frac{f(\\phi)}{R^2 - 2R\\rho\\cos(\\theta-\\phi) + \\rho^2}\\,\\mathrm{d}\\phi
\\end{align}
$$

### 7.3 典型例题：矩形区域的稳态温度

**问题**：矩形板 $0<x<a$，$0<y<b$，边界 $u(0,y)=u(a,y)=0$，$u(x,0)=f(x)$，$u(x,b)=0$，求 $u(x,y)$。

**解**：拉普拉斯方程 $\\Delta u=0$，设 $u = X(x)Y(y)$。

由 $x$ 方向齐次边界得本征问题 $X'' + \\lambda X = 0,\\ X(0)=X(a)=0$，解得 $\\lambda_n = (n\\pi/a)^2,\\ X_n = \\sin(n\\pi x/a)$。

$y$ 方向方程 $Y'' - \\lambda_n Y = 0$，通解 $Y_n = A_n \\cosh(n\\pi y/a) + B_n \\sinh(n\\pi y/a)$。

由 $u(x,b)=0$ 和 $u(x,0)=f(x)$ 得：

$$
\\begin{align}
u(x,y) = \\sum_{n=1}^\\infty B_n \\frac{\\sinh[n\\pi (b-y)/a]}{\\sinh(n\\pi b/a)} \\sin\\frac{n\\pi x}{a}, \\quad
B_n = \\frac{2}{a} \\int_0^a f(x) \\sin\\frac{n\\pi x}{a}\\,\\mathrm{d}x
\\end{align}
$$

---

## 八、特殊函数

### 8.1 勒让德多项式

在球坐标系下拉普拉斯方程分离出的连带勒让德方程，对于轴对称情况 $m=0$ 得到勒让德方程：

$$
\\begin{align}
(1-x^2) P''(x) - 2x P'(x) + l(l+1) P(x) = 0
\\end{align}
$$

其有界解为**勒让德多项式** $P_l(x)$，满足正交性：

$$
\\begin{align}
\\int_{-1}^1 P_l(x) P_k(x)\\,\\mathrm{d}x = \\frac{2}{2l+1} \\delta_{lk}
\\end{align}
$$

前几项：$P_0=1,\\ P_1=x,\\ P_2=\\frac{1}{2}(3x^2-1),\\ P_3=\\frac{1}{2}(5x^3-3x)$。

球域内轴对称拉普拉斯方程的解：

$$
\\begin{align}
u(r,\\theta) = \\sum_{l=0}^\\infty \\left( A_l r^l + \\frac{B_l}{r^{l+1}} \\right) P_l(\\cos\\theta)
\\end{align}
$$

### 8.2 贝塞尔函数

柱坐标系下径向方程通常化为贝塞尔方程：

$$
\\begin{align}
x^2 J_\\nu''(x) + x J_\\nu'(x) + (x^2 - \\nu^2) J_\\nu(x) = 0
\\end{align}
$$

第一类贝塞尔函数 $J_\\nu(x)$：在 $x=0$ 处有限。常用 $J_0(x),\\ J_1(x)$。

**傅里叶-贝塞尔展开**：在区间 $[0,R]$ 上满足 $J_n(k_{nm} R)=0$ 的本征值 $k_{nm}$ 对应正交函数系 $\\sqrt{r} J_n(k_{nm} r)$，可展开给定函数。

---

## 九、格林函数法

对非齐次方程 $\\Delta u = -f(\\boldsymbol{r})$ 及齐次边界条件，解可表示为

$$
\\begin{align}
u(\\boldsymbol{r}) = \\int_D G(\\boldsymbol{r}, \\boldsymbol{r}') f(\\boldsymbol{r}')\\,\\mathrm{d}\\boldsymbol{r}'
\\end{align}
$$

格林函数满足 $\\Delta G = -\\delta(\\boldsymbol{r} - \\boldsymbol{r}')$ 及齐次边界条件。**镜像法**是构建半空间、球域格林函数的常用技巧。

**自由空间格林函数**（三维）：$G_0(\\boldsymbol{r}, \\boldsymbol{r}') = \\dfrac{1}{4\\pi |\\boldsymbol{r} - \\boldsymbol{r}'|}$。

---

## 十、保角变换法（共形映射）

二维拉普拉斯方程在解析变换 $w = f(z)$ 下保持形式不变。通过映射复杂区域为半平面或圆，可简化边值问题。

常用映射：

- 分式线性：$w = \\frac{az+b}{cz+d}$，化圆为直线，或两圆同轴。
- 幂函数：$w = z^\\alpha$ 调整角域。
- 对数：$w = \\ln z$ 化角域为带域。
- 施瓦茨-克里斯托费尔：上半平面到多边形的映射。

**解题流程**：选取映射 $w = f(z)$，将原边界化为简单边界，在 $w$ 平面求解（如用上半平面泊松公式），然后反变回 $z$ 平面。

**例**：角域 $0<\\arg z<\\theta$ 边界温度恒定 $T_1,T_2$，映射 $w = z^{\\pi/\\theta}$ 化为上半平面，得

$$
\\begin{align}
T(z) = T_1 + \\frac{T_2 - T_1}{\\theta} \\arg z
\\end{align}
$$

---

## 十一、考试重点归纳

|     章节     | 核心内容                   | 典型题型                                                   |
| :----------: | :------------------------- | :--------------------------------------------------------- |
|   复变函数   | 解析性、C-R 方程、调和函数 | 求共轭调和函数                                             |
|    复积分    | 柯西定理与公式、高阶导数   | 回路积分计算                                               |
|     留数     | 极点判定、留数计算、实积分 | $\\int_{-\\infty}^\\infty$ 有理函数、$\\int^{2\\pi}_0$ 三角函数 |
|  傅里叶变换  | 定义、微分性质、逆变换     | 解无界热传导/波动方程                                      |
| 拉普拉斯变换 | 导数性质、延迟定理、卷积   | 解半无界初边值问题                                         |
|  分离变量法  | 本征问题、傅里叶展开       | 弦振动、矩形/圆域稳态温度                                  |
|   特殊函数   | 勒让德正交性、贝塞尔级数   | 球域/柱域拉普拉斯方程                                      |
|   格林函数   | 镜像法、自由空间格林函数   | 半空间、球域狄利克雷问题                                   |
|   保角变换   | 基本映射、边值转移         | 角域/半平面电/温度分布                                     |

> **复习建议**：重点掌握复积分和留数计算实积分的方法，熟练掌握分离变量法的完整流程（本征值→本征函数→叠加→利用初边值定系数），理解傅里叶和拉普拉斯变换解微分方程的步骤。对于特殊函数，记住正交性和展开系数的公式即可。
`,i={title:"数学物理方法期末复习",author:"NeoWangKing",date:new Date(1778242002e3),lastMod:new Date(1778242002e3),tags:["数学","数学物理方法","期末复习"],category:["数学","数学物理方法"],summary:"本文是数学物理方法的期末复习笔记，系统梳理复变函数（解析、积分、级数、留数）、积分变换（傅里叶、拉普拉斯）、数学物理方程（分离变量法、特殊函数、格林函数）和保角变换法的核心知识与典型例题。",comments:!0,draft:!1,sticky:0},r={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/mathematics/MMiP/9-Mathematical-Physics-Final-Review.md",rawData:void 0};export{r as _internal,t as body,$ as collection,i as data,n as id,a as slug};
