const n="mathematics/MMiP/9-Mathematical-Physics-Final-Review.md",a="posts",$="mathematics/mmip/9-mathematical-physics-final-review",t=`
## 一、复变函数与解析性

### 1.1 复数基础与区域

复数 $z = x + \\mathrm{i}y$, 实部 $\\operatorname{Re} z = x$, 虚部 $\\operatorname{Im} z = y$。  
模 $|z| = \\sqrt{x^2+y^2}$, 辐角 $\\theta = \\operatorname{arg} z$（主值取 $(-\\pi, \\pi]$）。  
欧拉公式: $e^{\\mathrm{i}\\theta} = \\cos\\theta + \\mathrm{i}\\sin\\theta$，于是 $z = r e^{\\mathrm{i}\\theta}$, $r = |z|$。

**邻域**: 以 $z_0$ 为心、$\\delta>0$ 为半径的圆内部点集合。  
**内点、开集、连通**等概念: 区域是连通的开集。  
**单连通域**: 区域内任意简单闭曲线可连续收缩到一点；否则为多连通域。

复变函数 $f(z)$ 把复数映射到复数，可写为 $f(z) = u(x,y) + \\mathrm{i}v(x,y)$，其中 $u,v$ 是实二元函数。

### 1.2 解析函数与柯西–黎曼条件

**导数**: $f'(z_0) = \\lim_{\\Delta z \\to 0} \\frac{f(z_0+\\Delta z)-f(z_0)}{\\Delta z}$，若极限存在且与 $\\Delta z \\to 0$ 的方式无关。  
**解析（全纯）函数**: 在区域 $D$ 内处处可导。

**柯西–黎曼方程 (C-R)**：若 $f(z) = u(x,y) + \\mathrm{i}v(x,y)$ 在 $z_0$ 可导，则在该点满足

$$
\\begin{align}
\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}, \\qquad \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}
\\end{align}
$$

反之，若 $u,v$ 在 $(x_0,y_0)$ 具有连续一阶偏导且满足 C-R 方程，则 $f(z)$ 在该点可导。此时

$$
\\begin{align}
f'(z) = u_x + \\mathrm{i}v_x = v_y - \\mathrm{i}u_y
\\end{align}
$$

**调和函数**: 若 $f(z)$ 解析，则 $u,v$ 满足拉普拉斯方程：

$$
\\begin{align}
u_{xx} + u_{yy} = 0, \\quad v_{xx} + v_{yy} = 0
\\end{align}
$$

称 $v$ 是 $u$ 的**共轭调和函数**。

**重要初等函数**：$e^z,\\ \\sin z,\\ \\cos z$ 等在全平面解析；$\\ln z$ 为多值函数，需割开负实轴定义单值分支。

### 1.3 典型例题：求共轭调和函数

**例**: 已知 $u(x,y) = 2x - x^3 + 3xy^2$，求其共轭调和函数 $v$ 及解析函数 $f(z) = u+\\mathrm{i}v$。

**解**: 由 C-R 方程

$$
\\begin{align}
v_y = u_x = 2 - 3x^2 + 3y^2, \\quad v_x = -u_y = -6xy
\\end{align}
$$

对 $v_y$ 关于 $y$ 积分得

$$
\\begin{align}
v = \\int (2 - 3x^2 + 3y^2)\\,\\mathrm{d}y = 2y - 3x^2 y + y^3 + \\varphi(x)
\\end{align}
$$

代入 $v_x = -6xy + \\varphi'(x) = -6xy$，得 $\\varphi'(x) = 0$，$\\varphi(x) = C$（取 $C=0$）。  
于是 $v = 2y - 3x^2 y + y^3$。构造解析函数

$$
\\begin{align}
f(z) = u + \\mathrm{i}v = (2x - x^3 + 3xy^2) + \\mathrm{i}(2y - 3x^2 y + y^3) = 2z - z^3
\\end{align}
$$

---

## 二、复变函数的积分

### 2.1 柯西积分定理

若 $f(z)$ 在单连通域 $D$ 内解析，则沿 $D$ 内任一简单闭曲线 $C$ 的积分为零：

$$
\\begin{align}
\\oint_C f(z)\\,\\mathrm{d}z = 0
\\end{align}
$$

### 2.2 柯西积分公式与高阶导数

设 $f(z)$ 在正向简单闭曲线 $C$ 上及其内部解析，$z_0$ 为 $C$ 内一点，则

$$
\\begin{align}
f(z_0) = \\frac{1}{2\\pi\\mathrm{i}} \\oint_C \\frac{f(z)}{z - z_0}\\,\\mathrm{d}z
\\end{align}
$$

对两端求导 $n$ 次得**高阶导数公式**:

$$
\\begin{align}
f^{(n)}(z_0) = \\frac{n!}{2\\pi\\mathrm{i}} \\oint_C \\frac{f(z)}{(z - z_0)^{n+1}}\\,\\mathrm{d}z
\\end{align}
$$

**例**: 计算 $\\oint_{|z|=2} \\frac{e^{3z}}{z-\\mathrm{i}}\\,\\mathrm{d}z$。

**解**: $f(z)=e^{3z}$ 全平面解析，$z_0=\\mathrm{i}$ 在 $|z|=2$ 内。由柯西积分公式

$$
\\begin{align}
I = 2\\pi\\mathrm{i}\\, f(\\mathrm{i}) = 2\\pi\\mathrm{i} e^{3\\mathrm{i}}
\\end{align}
$$

---

## 三、复级数与留数

### 3.1 泰勒级数与洛朗级数

**泰勒级数**: $f(z)=\\sum_{n=0}^\\infty a_n (z-z_0)^n$，$a_n = f^{(n)}(z_0)/n!$。  
**洛朗级数**: 在圆环域内 $f(z)=\\sum_{n=-\\infty}^\\infty c_n (z-z_0)^n$，系数

$$
\\begin{align}
c_n = \\frac{1}{2\\pi\\mathrm{i}} \\oint_C \\frac{f(z)}{(z-z_0)^{n+1}}\\,\\mathrm{d}z
\\end{align}
$$

### 3.2 孤立奇点与留数

- **可去奇点**: 无负幂项；**极点**: 有限个负幂项，最高负幂次为阶数；**本性奇点**: 无穷多负幂项。
- **留数**: $\\operatorname{Res}[f,z_0] = c_{-1}$，即洛朗展开中 $(z-z_0)^{-1}$ 的系数。
- $m$ 阶极点留数公式:

  $$
  \\begin{align}
  \\operatorname{Res}[f,z_0] = \\frac{1}{(m-1)!} \\lim_{z\\to z_0} \\frac{\\mathrm{d}^{m-1}}{\\mathrm{d}z^{m-1}} \\big[ (z-z_0)^m f(z) \\big]
  \\end{align}
  $$

  若 $f(z)=P(z)/Q(z)$，$z_0$ 为一阶极点，则 $\\operatorname{Res}[f,z_0] = P(z_0)/Q'(z_0)$。

### 3.3 留数定理

$$
\\begin{align}
\\oint_C f(z)\\,\\mathrm{d}z = 2\\pi\\mathrm{i} \\sum_{k} \\operatorname{Res}[f(z), z_k]
\\end{align}
$$

### 3.4 利用留数计算实积分

#### 类型一: $\\int_0^{2\\pi} R(\\cos\\theta,\\sin\\theta)\\,\\mathrm{d}\\theta$

令 $z=e^{\\mathrm{i}\\theta}$，化为单位圆上的回路积分。

**例**: $I = \\int_0^{2\\pi} \\frac{\\mathrm{d}\\theta}{5 + 3\\cos\\theta}$。

**解**: 代换后得

$$
\\begin{align}
I = \\oint_{|z|=1} \\frac{1}{5 + \\frac{3}{2}(z+z^{-1})} \\frac{\\mathrm{d}z}{\\mathrm{i}z}
= \\frac{2}{\\mathrm{i}} \\oint_{|z|=1} \\frac{\\mathrm{d}z}{3z^2 + 10z + 3}
\\end{align}
$$

极点 $z=-1/3$ 在单位圆内，留数 $=1/8$，故 $I = \\frac{2}{\\mathrm{i}} \\cdot 2\\pi\\mathrm{i} \\cdot \\frac{1}{8} = \\frac{\\pi}{2}$。

#### 类型二: $\\int_{-\\infty}^\\infty \\frac{P(x)}{Q(x)}\\,\\mathrm{d}x$（分母至少高 2 次）

取上半平面极点。

**例**: $I = \\int_{-\\infty}^\\infty \\frac{\\mathrm{d}x}{(x^2+1)(x^2+4)}$。

**解**: 上半平面极点 $z=\\mathrm{i}, 2\\mathrm{i}$，留数分别为 $\\frac{1}{6\\mathrm{i}}$ 和 $-\\frac{1}{12\\mathrm{i}}$，和 $\\frac{1}{12\\mathrm{i}}$，故 $I = 2\\pi\\mathrm{i} \\cdot \\frac{1}{12\\mathrm{i}} = \\frac{\\pi}{6}$。

#### 类型三: 含三角函数 $\\int_{-\\infty}^\\infty f(x) e^{\\mathrm{i}mx}\\,\\mathrm{d}x$

配合约当引理。

**例**: $I = \\int_{-\\infty}^\\infty \\frac{x\\sin x}{x^2+a^2}\\,\\mathrm{d}x$ ($a>0$)。  
**解**: 取 $f(z)=\\frac{z e^{\\mathrm{i}z}}{z^2+a^2}$，上半平面极点 $z=\\mathrm{i}a$，留数 $=e^{-a}/2$。积分取虚部得 $I = \\pi e^{-a}$。

---

## 四、傅里叶变换

### 4.1 定义与性质

- 正变换: $\\displaystyle \\hat{f}(k) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty f(x) e^{-\\mathrm{i}kx}\\,\\mathrm{d}x$
- 逆变换: $\\displaystyle f(x) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty \\hat{f}(k) e^{\\mathrm{i}kx}\\,\\mathrm{d}k$
- 微分: $\\mathcal{F}[f^{(n)}] = (\\mathrm{i}k)^n \\hat{f}(k)$
- 卷积: $\\mathcal{F}[f*g] = \\sqrt{2\\pi}\\, \\hat{f} \\hat{g}$

### 4.2 解偏微分方程的基本步骤

1. 对空间变量做傅里叶变换，得常微分方程；
2. 由初始条件定解；
3. 逆变换还原。

### 4.3 典型例题：无限长杆热传导

$u_t = \\alpha u_{xx},\\ -\\infty<x<\\infty$，$u(x,0)=\\phi(x)$。

对 $x$ 变换得 $\\frac{\\mathrm{d}\\hat{u}}{\\mathrm{d}t} = -\\alpha k^2 \\hat{u}$，解得 $\\hat{u} = \\hat{\\phi}(k) e^{-\\alpha k^2 t}$。逆变换得

$$
\\begin{align}
u(x,t) = \\frac{1}{\\sqrt{4\\pi\\alpha t}} \\int_{-\\infty}^\\infty \\phi(\\xi) \\exp\\left[ -\\frac{(x-\\xi)^2}{4\\alpha t} \\right] \\mathrm{d}\\xi
\\end{align}
$$

### 4.4 半无限长扩散问题（偶延拓）

$u_t = a^2 u_{xx},\\ x>0$，$u_x(0,t)=0$，$u(x,0)=N_0\\delta(x)$。  
偶延拓至全实轴，初值变为 $2N_0\\delta(x)$，解得

$$
\\begin{align}
u(x,t) = \\frac{N_0}{\\sqrt{\\pi a^2 t}} \\exp\\left( -\\frac{x^2}{4a^2 t} \\right)
\\end{align}
$$

---

## 五、拉普拉斯变换

### 5.1 定义与性质

- $F(s) = \\int_0^\\infty f(t) e^{-st}\\,\\mathrm{d}t$
- 导数: $\\mathcal{L}[f'] = sF(s)-f(0)$，$\\mathcal{L}[f''] = s^2F(s)-sf(0)-f'(0)$
- 延迟: $\\mathcal{L}[f(t-a) H(t-a)] = e^{-as}F(s)$
- 卷积: $\\mathcal{L}[f*g] = F(s)G(s)$，其中 $(f*g)(t) = \\int_0^t f(\\tau)g(t-\\tau)\\,\\mathrm{d}\\tau$

### 5.2 解偏微分方程的步骤

对时间 $t$ 取拉普拉斯变换 → 求解关于空间的常微分方程 → 用卷积或留数反演。

### 5.3 典型例题：半无限杆热传导

$u_t = \\alpha u_{xx},\\ x>0,\\ t>0$，$u(x,0)=0$，$u(0,t)=f(t)$，$u(\\infty,t)=0$。

变换后 $U_{xx} - \\frac{s}{\\alpha} U = 0$，通解 $U = A(s) e^{-\\sqrt{s/\\alpha}\\,x}$，由边界条件 $U(0,s)=F(s)$ 得 $A(s)=F(s)$。逆变换用卷积：

$$
\\begin{align}
u(x,t) = \\int_0^t f(\\tau) \\frac{x}{2\\sqrt{\\pi\\alpha}(t-\\tau)^{3/2}} \\exp\\left[ -\\frac{x^2}{4\\alpha(t-\\tau)} \\right] \\mathrm{d}\\tau
\\end{align}
$$

---

## 六、分离变量法（重点）

### 6.1 有界弦的自由振动

方程 $u_{tt}=a^2 u_{xx}$，边界 $u(0,t)=u(l,t)=0$，初值 $u(x,0)=\\phi(x),\\ u_t(x,0)=\\psi(x)$。

1. 设 $u = X(x)T(t)$，得 $\\frac{X''}{X} = \\frac{T''}{a^2 T} = -\\lambda$。
2. 空间本征值问题: $X'' + \\lambda X = 0$，$X(0)=X(l)=0$ ⇒ $\\lambda_n = (n\\pi/l)^2$，$X_n = \\sin\\frac{n\\pi x}{l}$。
3. 时间方程: $T_n'' + a^2\\lambda_n T_n = 0$ ⇒ $T_n(t) = A_n\\cos\\frac{n\\pi a t}{l} + B_n\\sin\\frac{n\\pi a t}{l}$。
4. 通解叠加:

   $$
   \\begin{align}
   u(x,t) = \\sum_{n=1}^\\infty \\left( A_n \\cos\\frac{n\\pi a t}{l} + B_n \\sin\\frac{n\\pi a t}{l} \\right) \\sin\\frac{n\\pi x}{l}
   \\end{align}
   $$

5. 利用初值和正交性定系数:

   $$
   \\begin{align}
   A_n = \\frac{2}{l} \\int_0^l \\phi(x) \\sin\\frac{n\\pi x}{l}\\,\\mathrm{d}x, \\quad
   B_n = \\frac{2}{n\\pi a} \\int_0^l \\psi(x) \\sin\\frac{n\\pi x}{l}\\,\\mathrm{d}x
   \\end{align}
   $$

### 6.2 有限杆热传导

$u_t = \\alpha u_{xx},\\ 0<x<l$，边界 $u(0,t)=u(l,t)=0$，初值 $u(x,0)=\\phi(x)$。  
分离变量: $X_n(x)=\\sin\\frac{n\\pi x}{l}$，$T_n(t)=C_n e^{-\\alpha (n\\pi/l)^2 t}$，通解

$$
\\begin{align}
u(x,t) = \\sum_{n=1}^\\infty C_n e^{-\\alpha (n\\pi/l)^2 t} \\sin\\frac{n\\pi x}{l}, \\quad
C_n = \\frac{2}{l} \\int_0^l \\phi(x) \\sin\\frac{n\\pi x}{l}\\,\\mathrm{d}x
\\end{align}
$$

### 6.3 矩形区域稳态温度（拉普拉斯方程）

矩形 $0<x<a,\\ 0<y<b$，边界: $u(0,y)=u(a,y)=0$，$u(x,0)=f(x)$，$u(x,b)=0$。  
设 $u = X(x)Y(y)$，由 $x$ 方向齐次边界得 $X_n = \\sin\\frac{n\\pi x}{a}$。  
$y$ 方向: $Y'' - (n\\pi/a)^2 Y = 0$，通解 $Y_n = A_n \\cosh\\frac{n\\pi y}{a} + B_n \\sinh\\frac{n\\pi y}{a}$。  
利用 $y=b$ 和 $y=0$ 的边界条件得

$$
\\begin{align}
u(x,y) = \\sum_{n=1}^\\infty \\frac{2}{a} \\left( \\int_0^a f(x) \\sin\\frac{n\\pi x}{a}\\,\\mathrm{d}x \\right) \\frac{\\sinh\\frac{n\\pi (b-y)}{a}}{\\sinh\\frac{n\\pi b}{a}} \\sin\\frac{n\\pi x}{a}
\\end{align}
$$

### 6.4 圆域拉普拉斯方程

极坐标下 $\\Delta u = 0$。设 $u = R(\\rho)\\Theta(\\theta)$，分离得

- $\\Theta'' + m^2 \\Theta = 0$，周期条件 ⇒ $m=0,1,2,\\dots$，$\\Theta_m = C_m \\cos m\\theta + D_m \\sin m\\theta$。
- $\\rho^2 R'' + \\rho R' - m^2 R = 0$，解为 $R_m = A_m \\rho^m + B_m \\rho^{-m}$（$m=0$ 时 $R_0 = A_0 + B_0\\ln\\rho$）。

若区域包含原点，舍去 $\\rho^{-m}$ 和 $\\ln\\rho$ 项，得圆内解

$$
\\begin{align}
u(\\rho,\\theta) = \\frac{A_0}{2} + \\sum_{m=1}^\\infty \\rho^m (A_m \\cos m\\theta + B_m \\sin m\\theta)
\\end{align}
$$

边界条件 $u(a,\\theta)=f(\\theta)$ 确定系数:

$$
\\begin{align}
A_m = \\frac{1}{\\pi a^m} \\int_0^{2\\pi} f(\\theta) \\cos m\\theta\\,\\mathrm{d}\\theta, \\quad
B_m = \\frac{1}{\\pi a^m} \\int_0^{2\\pi} f(\\theta) \\sin m\\theta\\,\\mathrm{d}\\theta
\\end{align}
$$

**例**: 若 $f(\\theta) = U_0 \\cos\\theta$，则 $A_1 = U_0/a$，解为 $u = \\frac{U_0}{a} \\rho \\cos\\theta$。

---

## 七、特殊函数

### 7.1 勒让德多项式

从球坐标拉普拉斯方程轴对称情况导出勒让德方程:

$$
\\begin{align}
(1-x^2)P''(x) - 2x P'(x) + l(l+1) P(x) = 0, \\quad x\\in[-1,1]
\\end{align}
$$

有界解为勒让德多项式 $P_l(x)$ ($l=0,1,2,\\dots$)。

**前几项**: $P_0=1,\\ P_1=x,\\ P_2=\\frac12(3x^2-1),\\ P_3=\\frac12(5x^3-3x)$。

**生成函数**: $\\frac{1}{\\sqrt{1-2xt+t^2}} = \\sum_{l=0}^\\infty P_l(x) t^l$。  
**罗巨格公式**: $P_l(x) = \\frac{1}{2^l l!} \\frac{\\mathrm{d}^l}{\\mathrm{d}x^l} (x^2-1)^l$。

**正交性**:

$$
\\begin{align}
\\int_{-1}^1 P_l(x) P_k(x)\\,\\mathrm{d}x = \\frac{2}{2l+1} \\delta_{lk}
\\end{align}
$$

**展开定理**: 区间 $[-1,1]$ 上的函数 $f(x)$ 可展开为 $f(x)=\\sum_{l=0}^\\infty C_l P_l(x)$，其中

$$
\\begin{align}
C_l = \\frac{2l+1}{2} \\int_{-1}^1 f(x) P_l(x)\\,\\mathrm{d}x
\\end{align}
$$

**球域内轴对称拉普拉斯方程的通解**:

$$
\\begin{align}
u(r,\\theta) = \\sum_{l=0}^\\infty \\left( A_l r^l + \\frac{B_l}{r^{l+1}} \\right) P_l(\\cos\\theta)
\\end{align}
$$

### 7.2 贝塞尔函数

柱坐标径向方程化为贝塞尔方程:

$$
\\begin{align}
x^2 J_\\nu''(x) + x J_\\nu'(x) + (x^2 - \\nu^2) J_\\nu(x) = 0
\\end{align}
$$

有界解为第一类贝塞尔函数 $J_\\nu(x)$。

**级数表示**:

$$
\\begin{align}
J_\\nu(x) = \\sum_{m=0}^\\infty \\frac{(-1)^m}{m!\\,\\Gamma(m+\\nu+1)} \\left(\\frac{x}{2}\\right)^{2m+\\nu}
\\end{align}
$$

**本征值问题**: 在 $[0,R]$ 上，满足 $J_n(k R)=0$ 的正根 $k_{nm}$ 为本征值，本征函数 $J_n(k_{nm} r)$ 关于权 $r$ 正交:

$$
\\begin{align}
\\int_0^R J_n(k_{nm} r) J_n(k_{nl} r)\\, r\\,\\mathrm{d}r = \\frac{R^2}{2} [J_{n+1}(k_{nm} R)]^2 \\delta_{ml}
\\end{align}
$$

**傅里叶-贝塞尔展开**:

$$
\\begin{align}
f(r) &= \\sum_{m=1}^\\infty C_m J_n(k_{nm} r), \\\\
C_m &= \\frac{2}{R^2 [J_{n+1}(k_{nm} R)]^2} \\int_0^R f(r) J_n(k_{nm} r)\\, r\\,\\mathrm{d}r
\\end{align}
$$

---

## 八、格林函数法

### 8.1 基本概念与泊松方程解的积分表示

考虑泊松方程 $\\nabla^2 u = -f(\\boldsymbol{r})$ 在区域 $\\Omega$ 内，并带有齐次边界条件 (例如 $u|_{\\partial\\Omega}=0$ )。  
**格林函数** $G(\\boldsymbol{r}, \\boldsymbol{r}')$ 定义为

$$
\\begin{align}
\\nabla^2 G(\\boldsymbol{r}, \\boldsymbol{r}') = \\delta(\\boldsymbol{r} - \\boldsymbol{r}'), \\quad G|_{\\partial\\Omega} = 0
\\end{align}
$$

利用格林第二恒等式

$$
\\begin{align}
\\int_\\Omega (u \\nabla^2 v - v \\nabla^2 u)\\,\\mathrm{d}\\tau = \\oint_{\\partial\\Omega} \\left( u \\frac{\\partial v}{\\partial n} - v \\frac{\\partial u}{\\partial n} \\right) \\mathrm{d}a
\\end{align}
$$

取 $v = G(\\boldsymbol{r}, \\boldsymbol{r}')$，注意到 $u$ 满足 $\\nabla^2 u = -f$，得到

$$
\\begin{align}
u(\\boldsymbol{r}) = \\int_\\Omega G(\\boldsymbol{r}, \\boldsymbol{r}') f(\\boldsymbol{r}')\\,\\mathrm{d}\\tau' - \\oint_{\\partial\\Omega} \\left( u(\\boldsymbol{r}') \\frac{\\partial G}{\\partial n'} - G \\frac{\\partial u}{\\partial n'} \\right) \\mathrm{d}a'
\\end{align}
$$

若边界条件为齐次狄利克雷条件 ($u=0$)，则可进一步简化为

$$
\\begin{align}
u(\\boldsymbol{r}) = \\int_\\Omega G_D(\\boldsymbol{r}, \\boldsymbol{r}') f(\\boldsymbol{r}')\\,\\mathrm{d}\\tau'
\\end{align}
$$

其中 $G_D$ 为狄利克雷格林函数（在边界上为零）。

### 8.2 自由空间格林函数

无界空间的格林函数（基本解）为

- 三维: $G_0(\\boldsymbol{r}, \\boldsymbol{r}') = \\dfrac{1}{4\\pi |\\boldsymbol{r} - \\boldsymbol{r}'|}$
- 二维: $G_0(\\boldsymbol{r}, \\boldsymbol{r}') = -\\dfrac{1}{2\\pi} \\ln |\\boldsymbol{r} - \\boldsymbol{r}'|$

它们满足 $\\nabla^2 G_0 = -\\delta$ (符号因定义而异，此处按常见约定 $\\nabla^2 G = -\\delta$ 则三维 $G_0=1/(4\\pi r)$，需注意与前面定义一致性。为使 $u$ 的积分表示简洁，通常取 $\\nabla^2 G = -\\delta(\\boldsymbol{r}-\\boldsymbol{r}')$ 且 $G|_{\\partial\\Omega}=0$，则 $u = \\int G f$。后续例题采用此约定。)

### 8.3 镜像法求格林函数

通过放置适当的镜像源，使得边界条件自动满足。

#### (1) 半空间的狄利克雷格林函数

区域 $z>0$，边界 $z=0$ 上 $G=0$。在 $\\boldsymbol{r}'=(x',y',z')$ 放置点源，在对称点 $\\boldsymbol{r}''=(x',y',-z')$ 放置等量异号源，得

$$
\\begin{align}
G(\\boldsymbol{r}, \\boldsymbol{r}') = \\frac{1}{4\\pi} \\left( \\frac{1}{|\\boldsymbol{r} - \\boldsymbol{r}'|} - \\frac{1}{|\\boldsymbol{r} - \\boldsymbol{r}''|} \\right)
\\end{align}
$$

#### (2) 球内的狄利克雷格林函数

半径为 $R$ 的球内区域。源点 $\\boldsymbol{r}'$ (设 $r'<R$)，在球外反演点 $\\boldsymbol{r}'' = \\frac{R^2}{r'^2} \\boldsymbol{r}'$ 放置强度为 $-R/r'$ 的镜像源，则格林函数为

$$
\\begin{align}
G(\\boldsymbol{r}, \\boldsymbol{r}') = \\frac{1}{4\\pi} \\left( \\frac{1}{|\\boldsymbol{r} - \\boldsymbol{r}'|} - \\frac{R/r'}{|\\boldsymbol{r} - \\boldsymbol{r}''|} \\right)
\\end{align}
$$

在球面 $r=R$ 上 $G=0$。由此格林函数可导出球内狄利克雷问题的泊松积分公式:

给定球面上的电势 $u(R,\\theta,\\phi) = f(\\theta,\\phi)$，球内电势为

$$
\\begin{align}
u(\\boldsymbol{r}) = \\frac{R(R^2 - r^2)}{4\\pi} \\iint_{S} \\frac{f(\\theta',\\phi')}{(R^2 + r^2 - 2Rr\\cos\\gamma)^{3/2}} \\,\\mathrm{d}\\Omega'
\\end{align}
$$

其中 $\\gamma$ 是 $\\boldsymbol{r}$ 与 $\\boldsymbol{r}'$ 方向的夹角。

### 8.4 本征函数展开法求格林函数

对于规则区域，格林函数可以按正交本征函数族展开。

设 $\\{\\phi_n(\\boldsymbol{r})\\}$ 是算子 $\\nabla^2$ 在齐次边界条件下的完备正交本征函数系，满足

$$
\\begin{align}
\\nabla^2 \\phi_n + \\lambda_n \\phi_n = 0
\\end{align}
$$

且 $\\int \\phi_n \\phi_m^* \\,\\mathrm{d}\\tau = \\delta_{nm}$。则格林函数可表示为

$$
\\begin{align}
G(\\boldsymbol{r}, \\boldsymbol{r}') = \\sum_n \\frac{\\phi_n(\\boldsymbol{r}) \\phi_n^*(\\boldsymbol{r}')}{\\lambda_n}
\\end{align}
$$

**例: 一维狄利克雷问题**

区间 $[0,L]$，算符 $-\\frac{\\mathrm{d}^2}{\\mathrm{d}x^2}$ 的本征函数 $\\phi_n(x) = \\sqrt{\\frac{2}{L}} \\sin\\frac{n\\pi x}{L}$，本征值 $\\lambda_n = (n\\pi/L)^2$。格林函数为

$$
\\begin{align}
G(x,x') = \\frac{2}{L} \\sum_{n=1}^\\infty \\frac{\\sin\\frac{n\\pi x}{L} \\sin\\frac{n\\pi x'}{L}}{(n\\pi/L)^2}
\\end{align}
$$

该级数可求和为分段线性函数

$$
\\begin{align}
G(x,x') = \\begin{cases}
\\dfrac{x'(L-x)}{L}, & 0 \\le x' \\le x \\\\
\\dfrac{x(L-x')}{L}, & x \\le x' \\le L
\\end{cases}
\\end{align}
$$

**例: 矩形区域格林函数**

矩形 $0<x<a, 0<y<b$，狄利克雷边界条件。本征函数 $\\phi_{mn}(x,y) = \\frac{2}{\\sqrt{ab}} \\sin\\frac{m\\pi x}{a} \\sin\\frac{n\\pi y}{b}$，本征值 $\\lambda_{mn} = \\left(\\frac{m\\pi}{a}\\right)^2 + \\left(\\frac{n\\pi}{b}\\right)^2$。格林函数

$$
\\begin{align}
G(\\boldsymbol{r}, \\boldsymbol{r}') = \\frac{4}{ab} \\sum_{m=1}^\\infty \\sum_{n=1}^\\infty \\frac{ \\sin\\frac{m\\pi x}{a} \\sin\\frac{m\\pi x'}{a} \\sin\\frac{n\\pi y}{b} \\sin\\frac{n\\pi y'}{b} }{ \\left(\\frac{m\\pi}{a}\\right)^2 + \\left(\\frac{n\\pi}{b}\\right)^2 }
\\end{align}
$$

---

## 九、保角变换法（共形映射）

### 9.1 基本原理

二维拉普拉斯方程 $\\nabla^2 u = 0$ 在解析变换 $w = f(z)$ 下形式不变。若 $\\varphi(u,v)$ 在 $w$ 平面调和，则 $\\Phi(x,y) = \\varphi(u(x,y), v(x,y))$ 在 $z$ 平面原区域调和。

求解步骤: 选取映射 $w=f(z)$ 将复杂区域变为半平面或圆，转移边界条件，在新平面上求解，再反变回原坐标。

### 9.2 常用映射

- 线性: $w=az+b$
- 幂函数: $w=z^\\alpha$，调整角域开度
- 指数与对数: 带域与角域互化
- 分式线性: $w=\\frac{az+b}{cz+d}$，圆(直线)仍映为圆(直线)
- 施瓦茨-克里斯托费尔: 上半平面 → 多边形内部

### 9.3 典型例题

**角域稳态温度分布**: 区域 $0<\\arg z<\\theta$，边界 $\\arg z=0$ 上 $T=T_1$，$\\arg z=\\theta$ 上 $T=T_2$。  
取 $w = z^{\\pi/\\theta}$，映射为上半平面。在上半平面解 $\\varphi = A + B\\arg w$，由边界条件定 $A=T_1$，$B=(T_2-T_1)/\\pi$。  
反代得原问题解

$$
\\begin{align}
T(z) = T_1 + \\frac{T_2 - T_1}{\\theta} \\arg z
\\end{align}
$$

---

## 十、备考要点

1. **复变函数**: 掌握 C-R 条件、解析性判断、留数定理及三类实积分计算。
2. **积分变换**: 傅里叶变换解无界问题，拉普拉斯变换解初值问题，记住高斯积分公式。
3. **分离变量法**: 熟练弦振动、热传导、矩形/圆域拉普拉斯方程的完整求解流程。
4. **特殊函数**: 勒让德多项式的正交性与展开，贝塞尔函数的本征值问题与傅里叶-贝塞尔展开。
5. **格林函数**: 理解定义与积分表示，掌握半空间和球内的镜像法，以及本征函数展开法。
6. **保角变换**: 掌握基本映射，能求解角域、半平面等典型边值问题。

> 复习时务必亲自动手推导关键公式和例题，确保考场书写流畅。
`,i={title:"数学物理方法期末复习",author:"NeoWangKing",date:new Date(1778243692e3),lastMod:new Date(1778243692e3),tags:["数学","数学物理方法","期末复习","复变函数","积分变换","偏微分方程","特殊函数"],category:["数学","数学物理方法"],summary:"本文是数学物理方法的详细期末复习笔记，全面覆盖复变函数（解析性、积分、留数定理及应用）、傅里叶变换与拉普拉斯变换（性质及解偏微分方程）、分离变量法（直角坐标、极坐标、球坐标、柱坐标）、特殊函数（勒让德、贝塞尔）、格林函数法和保角变换法，并配有大量典型例题和详尽推导。",comments:!0,draft:!1,sticky:0},r={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/mathematics/MMiP/9-Mathematical-Physics-Final-Review.md",rawData:void 0};export{r as _internal,t as body,a as collection,i as data,n as id,$ as slug};
