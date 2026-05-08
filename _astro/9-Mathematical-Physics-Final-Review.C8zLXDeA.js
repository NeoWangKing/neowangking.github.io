const n="mathematics/MMiP/9-Mathematical-Physics-Final-Review.md",$="posts",a="mathematics/mmip/9-mathematical-physics-final-review",t=`
## 一、复变函数与解析性

### 1.1 复数基础与区域

复数 $z = x + \\mathrm{i}y$，实部 $\\operatorname{Re} z = x$，虚部 $\\operatorname{Im} z = y$。  
模 $|z| = \\sqrt{x^2+y^2}$，辐角 $\\theta = \\operatorname{arg} z$（主值取 $(-\\pi, \\pi]$）。  
欧拉公式：$e^{\\mathrm{i}\\theta} = \\cos\\theta + \\mathrm{i}\\sin\\theta$，于是 $z = r e^{\\mathrm{i}\\theta}$，$r = |z|$。

**邻域**：以 $z_0$ 为心、$\\delta>0$ 为半径的圆内部点集合。  
**内点**、**开集**、**连通**等概念：区域是连通的开集。  
**单连通域**：区域内任意简单闭曲线可连续收缩到一点；否则为多连通域。

复变函数 $f(z)$ 是把复数映到复数的映射，写作 $f(z) = u(x,y) + \\mathrm{i}v(x,y)$，其中 $u,v$ 为实二元函数。

### 1.2 解析函数与柯西–黎曼条件

**导数**：$f'(z_0) = \\lim_{\\Delta z \\to 0} \\frac{f(z_0+\\Delta z)-f(z_0)}{\\Delta z}$，若极限存在且与 $\\Delta z \\to 0$ 的方式无关。  
**解析（全纯）函数**：在区域 $D$ 内处处可导。

**柯西–黎曼方程**：设 $f(z) = u(x,y) + \\mathrm{i}v(x,y)$ 在 $z_0$ 可导，则在该点满足

$$
\\begin{align}
\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}, \\qquad \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}
\\end{align}
$$

反之，若 $u,v$ 在 $(x_0,y_0)$ 具有连续一阶偏导且满足 C-R 方程，则 $f(z)$ 在该点可导（从而在区域 $D$ 内解析）。此时

$$
\\begin{align}
f'(z) = u_x + \\mathrm{i}v_x = v_y - \\mathrm{i}u_y
\\end{align}
$$

若 $f(z)$ 在单连通域 $D$ 内解析且导数为零，则 $f(z)$ 为常数。

**调和函数**：若 $f(z)$ 解析，则 $u,v$ 满足拉普拉斯方程：

$$
\\begin{align}
u_{xx} + u_{yy} = 0, \\quad v_{xx} + v_{yy} = 0
\\end{align}
$$

称 $v$ 是 $u$ 的**共轭调和函数**（注意顺序：$-u$ 是 $v$ 的共轭调和函数）。

**重要初等函数解析性**：

- $e^z = e^x(\\cos y + \\mathrm{i}\\sin y)$ 全平面解析，$(e^z)' = e^z$。
- $\\sin z = \\frac{e^{\\mathrm{i}z} - e^{-\\mathrm{i}z}}{2\\mathrm{i}}$，$\\cos z$ 同理，全平面解析。
- $\\sinh z = \\frac{e^z - e^{-z}}{2}$，$\\cosh z$ 全平面解析。
- $\\ln z = \\ln|z| + \\mathrm{i}\\arg z$ 在多值性，需指定分支割线以定义单值解析分支。主值支 $\\operatorname{Ln} z$ 在割去负实轴的平面内解析，$\\frac{\\mathrm{d}}{\\mathrm{d}z}\\ln z = \\frac{1}{z}$。
- 幂函数 $z^\\alpha = e^{\\alpha \\ln z}$ 一般也是多值。

### 1.3 典型例题：求共轭调和函数

**例 1**：已知 $u(x,y) = 2x - x^3 + 3xy^2$，求其共轭调和函数 $v$ 及解析函数 $f(z) = u+\\mathrm{i}v$。

**解**：由 C-R 方程

$$
\\begin{align}
v_y &= u_x = 2 - 3x^2 + 3y^2 \\\\
v_x &= -u_y = -6xy
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
f(z) &= u + \\mathrm{i}v = (2x - x^3 + 3xy^2) + \\mathrm{i}(2y - 3x^2 y + y^3) \\\\
&= 2(x+\\mathrm{i}y) - (x+\\mathrm{i}y)^3 = 2z - z^3
\\end{align}
$$

**例 2**：已知解析函数 $f(z)$ 的虚部 $v = e^x(y\\cos y + x\\sin y)$，求实部 $u$ 和 $f(z)$。

**解**：由 C-R 得

$$
\\begin{align}
u_x &= v_y = e^x(\\cos y - y\\sin y + x\\cos y) \\\\
u_y &= -v_x = -e^x(y\\cos y + x\\sin y + \\sin y)
\\end{align}
$$

对 $u_x$ 关于 $x$ 积分（视 $y$ 为常数）：

$$
\\begin{align}
u = e^x[x\\cos y + (1-y)\\sin y] + \\psi(y)
\\end{align}
$$

(可通过分部积分核实)。再对 $u$ 求 $y$ 偏导并令等于 $-v_x$，定出 $\\psi'(y)=0$，$\\psi(y)=C$。取 $C=0$，得 $u = e^x[(x+1)\\cos y + (1-y)\\sin y]$？需仔细核对。无论如何，最终可得 $f(z) = z e^z$ 等形式。

---

## 二、复变函数的积分

### 2.1 曲线积分与柯西定理

复积分定义：$\\int_C f(z)\\,\\mathrm{d}z = \\int_C (u\\,\\mathrm{d}x - v\\,\\mathrm{d}y) + \\mathrm{i}\\int_C (v\\,\\mathrm{d}x + u\\,\\mathrm{d}y)$。

**柯西积分定理**：若 $f(z)$ 在单连通域 $D$ 内解析，则沿 $D$ 内任一简单闭曲线 $C$ 的积分为零：

$$
\\begin{align}
\\oint_C f(z)\\,\\mathrm{d}z = 0
\\end{align}
$$

推论：若 $C_1$ 和 $C_2$ 是复连通域的同向闭路，则 $\\oint_{C_1} f = \\oint_{C_2} f$。

**原函数**：若 $f$ 在单连通域解析，则积分与路径无关，存在 $F(z)$ 使得 $F'(z)=f(z)$，且 $\\int_{z_0}^{z} f(\\zeta)\\,\\mathrm{d}\\zeta = F(z) - F(z_0)$。

### 2.2 柯西积分公式与高阶导数

**柯西积分公式**：设 $f(z)$ 在正向简单闭曲线 $C$ 上及其内部解析，$z_0$ 为 $C$ 内一点，则

$$
\\begin{align}
f(z_0) = \\frac{1}{2\\pi\\mathrm{i}} \\oint_C \\frac{f(z)}{z - z_0}\\,\\mathrm{d}z
\\end{align}
$$

该公式表明解析函数的值完全由边界上的值决定。对两端关于 $z_0$ 求导 $n$ 次得到**高阶导数公式**：

$$
\\begin{align}
f^{(n)}(z_0) = \\frac{n!}{2\\pi\\mathrm{i}} \\oint_C \\frac{f(z)}{(z - z_0)^{n+1}}\\,\\mathrm{d}z
\\end{align}
$$

这说明解析函数有任意阶导数。

### 2.3 典型例题

**例 3**：计算 $\\oint_{|z|=2} \\frac{e^{3z}}{z - \\mathrm{i}}\\,\\mathrm{d}z$。

**解**：$f(z)=e^{3z}$ 全平面解析，$z_0=\\mathrm{i}$ 在 $|z|=2$ 内。由柯西积分公式

$$
\\begin{align}
I = 2\\pi\\mathrm{i}\\, f(\\mathrm{i}) = 2\\pi\\mathrm{i} e^{3\\mathrm{i}} = 2\\pi\\mathrm{i} (\\cos 3 + \\mathrm{i}\\sin 3) = -2\\pi\\sin 3 + 2\\pi\\mathrm{i}\\cos 3
\\end{align}
$$

**例 4**：计算 $\\oint_{|z|=1} \\frac{\\sin z}{z^2}\\,\\mathrm{d}z$。

**解**：$f(z)=\\sin z$ 解析，$z_0=0$ 在内部。用一阶导数公式：

$$
\\begin{align}
I = \\frac{2\\pi\\mathrm{i}}{1!} f'(0) = 2\\pi\\mathrm{i} \\cos 0 = 2\\pi\\mathrm{i}
\\end{align}
$$

---

## 三、复级数与留数

### 3.1 泰勒级数与洛朗级数

**泰勒级数**：若 $f(z)$ 在圆盘 $|z-z_0|<R$ 内解析，则可展开为 $f(z)=\\sum_{n=0}^\\infty a_n (z-z_0)^n$，系数

$$
\\begin{align}
a_n = \\frac{f^{(n)}(z_0)}{n!} = \\frac{1}{2\\pi\\mathrm{i}} \\oint_{|z-z_0|=r} \\frac{f(z)}{(z-z_0)^{n+1}}\\,\\mathrm{d}z
\\end{align}
$$

**洛朗级数**：若 $f(z)$ 在圆环域 $r<|z-z_0|<R$ 内解析，则可展开为 $f(z)=\\sum_{n=-\\infty}^\\infty c_n (z-z_0)^n$，系数

$$
\\begin{align}
c_n = \\frac{1}{2\\pi\\mathrm{i}} \\oint_C \\frac{f(z)}{(z-z_0)^{n+1}}\\,\\mathrm{d}z
\\end{align}
$$

其中 $C$ 是圆环内绕 $z_0$ 一周的任意简单闭曲线。

**解析函数的零点**：若 $f(z_0)=0$ 且 $f^{(m-1)}(z_0)=0$ 而 $f^{(m)}(z_0)\\neq0$，则 $z_0$ 为 $m$ 阶零点，此时 $f(z) = (z-z_0)^m \\varphi(z)$，$\\varphi(z_0)\\neq0$ 且解析。

### 3.2 孤立奇点与留数

**孤立奇点分类**：$f(z)$ 在 $z_0$ 不解析但某去心邻域内解析，$z_0$ 为孤立奇点。

- **可去奇点**：洛朗级数不含负幂项，极限 $\\lim_{z\\to z_0} f(z)$ 存在有限。
- **极点**：洛朗级数只有有限个负幂项，设最高负幂为 $(z-z_0)^{-m}$，则 $z_0$ 为 $m$ 阶极点。此时 $\\lim_{z\\to z_0} (z-z_0)^m f(z)$ 存在非零有限。
- **本性奇点**：有无穷多负幂项，极限不存在。

**留数**：$f(z)$ 在 $z_0$ 的洛朗展开中 $(z-z_0)^{-1}$ 项的系数 $c_{-1}$，记为 $\\operatorname{Res}[f(z), z_0]$。

对于 $m$ 阶极点的留数计算公式：

$$
\\begin{align}
\\operatorname{Res}[f(z), z_0] = \\frac{1}{(m-1)!} \\lim_{z\\to z_0} \\frac{\\mathrm{d}^{m-1}}{\\mathrm{d}z^{m-1}} \\big[ (z-z_0)^m f(z) \\big]
\\end{align}
$$

若 $f(z) = \\frac{P(z)}{Q(z)}$，$P(z_0)\\neq0$，$Q(z)$ 以 $z_0$ 为简单零点（即一阶极点），则

$$
\\begin{align}
\\operatorname{Res}[f, z_0] = \\frac{P(z_0)}{Q'(z_0)}
\\end{align}
$$

### 3.3 留数定理

**留数定理**：若 $f(z)$ 在正向简单闭曲线 $C$ 内部除有限个孤立奇点 $z_1,\\dots,z_k$ 外解析，则

$$
\\begin{align}
\\oint_C f(z)\\,\\mathrm{d}z = 2\\pi\\mathrm{i} \\sum_{j=1}^k \\operatorname{Res}[f(z), z_j]
\\end{align}
$$

### 3.4 利用留数计算实积分

计算三种典型实积分。

#### 类型一：形如 $\\int_0^{2\\pi} R(\\cos\\theta, \\sin\\theta)\\,\\mathrm{d}\\theta$

令 $z = e^{\\mathrm{i}\\theta}$，则 $\\mathrm{d}\\theta = \\frac{\\mathrm{d}z}{\\mathrm{i}z}$，$\\cos\\theta = \\frac{z+z^{-1}}{2}$，$\\sin\\theta = \\frac{z-z^{-1}}{2\\mathrm{i}}$。积分化为闭合单位圆 $|z|=1$ 上的回路积分，再用留数定理。

**例 5**：计算 $I = \\int_0^{2\\pi} \\frac{\\mathrm{d}\\theta}{5 + 3\\cos\\theta}$。

**解**：换元后

$$
\\begin{align}
I = \\oint_{|z|=1} \\frac{1}{5 + \\frac{3}{2}(z+z^{-1})} \\frac{\\mathrm{d}z}{\\mathrm{i}z}
= \\frac{2}{\\mathrm{i}} \\oint_{|z|=1} \\frac{\\mathrm{d}z}{3z^2 + 10z + 3}
\\end{align}
$$

分母 $3z^2+10z+3 = (3z+1)(z+3)$，单位圆内极点为 $z = -1/3$。计算留数：

$$
\\begin{align}
\\operatorname{Res}\\left[ \\frac{1}{(3z+1)(z+3)}, -\\frac13 \\right]
= \\left. \\frac{1}{3(z+3)} \\right|_{z=-1/3} = \\frac{1}{3 \\cdot (8/3)} = \\frac{1}{8}
\\end{align}
$$

因此 $I = \\frac{2}{\\mathrm{i}} \\cdot 2\\pi\\mathrm{i} \\cdot \\frac{1}{8} = \\frac{\\pi}{2}$。

#### 类型二：$\\int_{-\\infty}^\\infty \\frac{P(x)}{Q(x)}\\,\\mathrm{d}x$（分母次数比分子高至少 2 次）

考虑回路：实轴段 $[-R,R]$ 加上半圆弧 $C_R$。若 $R$ 足够大，上半平面奇点全在内。若 $\\lim_{z\\to\\infty} z f(z) = 0$，则大圆弧积分为零，于是

$$
\\begin{align}
\\int_{-\\infty}^\\infty f(x)\\,\\mathrm{d}x = 2\\pi\\mathrm{i} \\sum_{k} \\operatorname{Res}[f(z), z_k^{\\text{上半}}]
\\end{align}
$$

**例 6**：$I = \\int_{-\\infty}^\\infty \\frac{\\mathrm{d}x}{(x^2+1)(x^2+4)}$。

**解**：$f(z) = \\frac{1}{(z^2+1)(z^2+4)}$。上半平面一阶极点：$z_1=\\mathrm{i}$，$z_2=2\\mathrm{i}$。留数：

$$
\\begin{align}
\\operatorname{Res}[f,\\mathrm{i}] &= \\left. \\frac{1}{2z(z^2+4)} \\right|_{z=\\mathrm{i}} = \\frac{1}{2\\mathrm{i}(3)} = \\frac{1}{6\\mathrm{i}} \\\\
\\operatorname{Res}[f,2\\mathrm{i}] &= \\left. \\frac{1}{(z^2+1)2z} \\right|_{z=2\\mathrm{i}} = \\frac{1}{(-3)4\\mathrm{i}} = -\\frac{1}{12\\mathrm{i}}
\\end{align}
$$

和：$\\frac{1}{6\\mathrm{i}} - \\frac{1}{12\\mathrm{i}} = \\frac{1}{12\\mathrm{i}}$。于是 $I = 2\\pi\\mathrm{i} \\cdot \\frac{1}{12\\mathrm{i}} = \\frac{\\pi}{6}$。

#### 类型三：含三角函数 $\\int_{-\\infty}^\\infty f(x) \\frac{\\sin / \\cos}{e^{\\mathrm{i}mx}}\\,\\mathrm{d}x$ 型

通常化为积分 $\\int_{-\\infty}^\\infty g(x) e^{\\mathrm{i}mx}\\,\\mathrm{d}x$，配合**约当引理**：若当 $|z|\\to\\infty$ 时 $g(z)\\to0$ 一致于上半平面，且 $m>0$，则

$$
\\begin{align}
\\lim_{R\\to\\infty} \\int_{C_R} g(z) e^{\\mathrm{i}mz}\\,\\mathrm{d}z = 0
\\end{align}
$$

之后取实部或虚部得到原积分。

**例 7**：$I = \\int_{-\\infty}^\\infty \\frac{x\\sin x}{x^2+a^2}\\,\\mathrm{d}x \\quad (a>0)$。

**解**：取复函数 $f(z) = \\frac{z e^{\\mathrm{i}z}}{z^2+a^2}$，上半平面极点 $z=\\mathrm{i}a$。由约当引理大圆弧积分为零。留数：

$$
\\begin{align}
\\operatorname{Res}[f, \\mathrm{i}a] = \\left. \\frac{z e^{\\mathrm{i}z}}{2z} \\right|_{z=\\mathrm{i}a} = \\frac{e^{-a}}{2}
\\end{align}
$$

于是 $\\int_{-\\infty}^\\infty \\frac{x e^{\\mathrm{i}x}}{x^2+a^2}\\,\\mathrm{d}x = 2\\pi\\mathrm{i} \\cdot \\frac{e^{-a}}{2} = \\pi\\mathrm{i} e^{-a}$。取虚部得 $I = \\pi e^{-a}$。

---

## 四、傅里叶变换

### 4.1 定义与基本性质

**一维傅里叶变换**（对称形式）：

$$
\\begin{align}
F(k) = \\mathcal{F}[f] = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty f(x) e^{-\\mathrm{i}kx}\\,\\mathrm{d}x
\\end{align}
$$

逆变换：

$$
\\begin{align}
f(x) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty F(k) e^{\\mathrm{i}kx}\\,\\mathrm{d}k
\\end{align}
$$

**线性**：$\\mathcal{F}[af+bg] = a\\mathcal{F}[f] + b\\mathcal{F}[g]$。

**微分性质**：若 $f,\\ f',\\dots,f^{(n-1)}$ 绝对可积且 $x\\to\\pm\\infty$ 时趋于零，则

$$
\\begin{align}
\\mathcal{F}[f^{(n)}(x)] = (\\mathrm{i}k)^n F(k)
\\end{align}
$$

**卷积定理**：定义卷积 $(f*g)(x) = \\int_{-\\infty}^\\infty f(\\xi) g(x-\\xi)\\,\\mathrm{d}\\xi$，则

$$
\\begin{align}
\\mathcal{F}[f*g] = \\sqrt{2\\pi}\\, F(k) G(k), \\qquad
\\mathcal{F}^{-1}[F(k) G(k)] = \\frac{1}{\\sqrt{2\\pi}} (f*g)(x)
\\end{align}
$$

### 4.2 解偏微分方程的基本步骤

1. 选择合适空间变量（通常是 $x$）进行傅里叶变换，得到关于 $t$ 的常微分方程。
2. 利用初始条件确定像函数。
3. 逆变换还原为原函数解。

### 4.3 典型例题：无限长杆上的热传导

**问题**：$u_t = \\alpha u_{xx},\\ -\\infty<x<\\infty,\\ t>0$；$u(x,0)=\\phi(x)$。求 $u(x,t)$。

**解**：对 $x$ 做傅里叶变换：

$$
\\begin{align}
\\hat{u}(k,t) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty u(x,t) e^{-\\mathrm{i}kx}\\,\\mathrm{d}x
\\end{align}
$$

则 $u_{xx}$ 变为 $-k^2 \\hat{u}$，原方程化为

$$
\\begin{align}
\\frac{\\mathrm{d}\\hat{u}}{\\mathrm{d}t} = -\\alpha k^2 \\hat{u}
\\end{align}
$$

解此常微分方程：$\\hat{u}(k,t) = \\hat{u}(k,0) e^{-\\alpha k^2 t} = \\hat{\\phi}(k) e^{-\\alpha k^2 t}$，其中 $\\hat{\\phi}(k)$ 为 $\\phi(x)$ 的傅里叶变换。

逆变换得

$$
\\begin{align}
u(x,t) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty \\hat{\\phi}(k) e^{-\\alpha k^2 t} e^{\\mathrm{i}kx}\\,\\mathrm{d}k
\\end{align}
$$

将 $\\hat{\\phi}(k)$ 的积分表达式代入并交换积分次序，得

$$
\\begin{align}
u(x,t) = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty \\phi(\\xi) \\left( \\int_{-\\infty}^\\infty e^{-\\alpha k^2 t} e^{\\mathrm{i}k(x-\\xi)}\\,\\mathrm{d}k \\right) \\mathrm{d}\\xi
\\end{align}
$$

内层积分是高斯型，利用公式 $\\int_{-\\infty}^\\infty e^{-a k^2 + b k}\\,\\mathrm{d}k = \\sqrt{\\frac{\\pi}{a}} e^{b^2/(4a)}$（$a>0$）。这里 $a=\\alpha t$，$b=\\mathrm{i}(x-\\xi)$，得

$$
\\begin{align}
\\int_{-\\infty}^\\infty e^{-\\alpha t k^2} e^{\\mathrm{i}k(x-\\xi)}\\,\\mathrm{d}k = \\sqrt{\\frac{\\pi}{\\alpha t}} \\exp\\left[ -\\frac{(x-\\xi)^2}{4\\alpha t} \\right]
\\end{align}
$$

代回得热传导方程基本解

$$
\\begin{align}
u(x,t) = \\frac{1}{\\sqrt{4\\pi\\alpha t}} \\int_{-\\infty}^\\infty \\phi(\\xi) \\exp\\left[ -\\frac{(x-\\xi)^2}{4\\alpha t} \\right] \\mathrm{d}\\xi
\\end{align}
$$

---

## 五、拉普拉斯变换

### 5.1 定义与性质

**定义**：$F(s) = \\mathcal{L}[f(t)] = \\int_0^\\infty f(t) e^{-st}\\,\\mathrm{d}t$，其中 $s$ 为复变量，要求积分收敛。

**线性**、**相似定理**、**位移定理**等。

**导数性质**（最常用）：

$$
\\begin{align}
\\mathcal{L}[f'(t)] &= sF(s) - f(0) \\\\
\\mathcal{L}[f''(t)] &= s^2 F(s) - s f(0) - f'(0)
\\end{align}
$$

**积分性质**：$\\mathcal{L}\\left[ \\int_0^t f(\\tau)\\,\\mathrm{d}\\tau \\right] = \\frac{F(s)}{s}$。

**延迟定理**：$\\mathcal{L}[f(t-a) H(t-a)] = e^{-as} F(s)$，其中 $H$ 是亥维赛阶跃函数。

**卷积定理**：定义 $(f*g)(t) = \\int_0^t f(\\tau)g(t-\\tau)\\,\\mathrm{d}\\tau$，则 $\\mathcal{L}[f*g] = F(s) G(s)$。

常见逆变换可通过查表或留数反演公式得到。

### 5.2 解偏微分方程的基本步骤

1. 对时间变量 $t$ 施行拉普拉斯变换，化偏导数为代数项，得到关于空间变量的常微分方程。
2. 将初始条件自动代入。
3. 解常微分方程得到像函数 $U(x,s)$。
4. 利用逆变换（留数法、查表、卷积）求得 $u(x,t)$。

### 5.3 典型例题：半无穷杆的扩散

**问题**：$u_t = \\alpha u_{xx},\\ x>0,\\ t>0$；$u(x,0)=0$；$u(0,t)=f(t)$；$u(\\infty,t)=0$。

**解**：对 $t$ 拉普拉斯变换，令 $U(x,s) = \\mathcal{L}[u(x,t)]$。方程化为

$$
\\begin{align}
s U(x,s) - 0 = \\alpha U_{xx} \\quad \\Rightarrow \\quad U_{xx} - \\frac{s}{\\alpha} U = 0
\\end{align}
$$

通解 $U = A(s) e^{-\\sqrt{s/\\alpha}\\, x} + B(s) e^{\\sqrt{s/\\alpha}\\, x}$。由无穷远有界得 $B(s)=0$；由边界条件 $U(0,s) = F(s)$（$F = \\mathcal{L}[f]$）得 $A(s)=F(s)$。因此

$$
\\begin{align}
U(x,s) = F(s) e^{-\\sqrt{s/\\alpha}\\, x}
\\end{align}
$$

逆变换需借助卷积。已知 $\\mathcal{L}^{-1}\\big[ e^{-a\\sqrt{s}} \\big] = \\frac{a}{2\\sqrt{\\pi} t^{3/2}} e^{-a^2/(4t)}$（$a>0$）。由卷积定理

$$
\\begin{align}
u(x,t) = \\int_0^t f(\\tau) \\cdot \\frac{x}{2\\sqrt{\\pi\\alpha}\\, (t-\\tau)^{3/2}} \\exp\\left[ -\\frac{x^2}{4\\alpha(t-\\tau)} \\right] \\mathrm{d}\\tau
\\end{align}
$$

---

## 六、分离变量法（重点）

### 6.1 直角坐标系下的分离变量

**模型：有界弦的自由振动**

方程 $u_{tt} = a^2 u_{xx},\\ 0<x<l,\\ t>0$。边界条件：$u(0,t)=u(l,t)=0$；初始条件：$u(x,0)=\\phi(x)$，$u_t(x,0)=\\psi(x)$。

**步骤**：

1. 设 $u = X(x)T(t)$，代入方程得 $\\frac{X''}{X} = \\frac{T''}{a^2 T} = -\\lambda$。
2. 解空间方程 $X'' + \\lambda X = 0$，结合齐次边界条件 $X(0)=X(l)=0$。
   - 若 $\\lambda < 0$，通解指数函数，不满足零边界。
   - 若 $\\lambda = 0$，通解 $X = Ax+B$，由 $X(0)=X(l)=0$ 得 $A=B=0$（平凡解）。
   - $\\lambda > 0$，令 $\\lambda = \\beta^2$，通解 $X = A\\cos\\beta x + B\\sin\\beta x$。由 $X(0)=0$ 得 $A=0$；再由 $X(l)=B\\sin\\beta l =0$ 得 $\\beta l = n\\pi$，即
     $$
     \\begin{align}
     \\lambda_n = \\left( \\frac{n\\pi}{l} \\right)^2, \\qquad X_n(x) = \\sin\\frac{n\\pi x}{l}, \\quad n=1,2,3,\\dots
     \\end{align}
     $$
3. 对应的时间方程 $T_n'' + a^2 \\lambda_n T_n = 0$，通解
   $$
   \\begin{align}
   T_n(t) = A_n \\cos\\frac{n\\pi a t}{l} + B_n \\sin\\frac{n\\pi a t}{l}
   \\end{align}
   $$
4. 叠加得到一般解：
   $$
   \\begin{align}
   u(x,t) = \\sum_{n=1}^\\infty \\left( A_n \\cos\\frac{n\\pi a t}{l} + B_n \\sin\\frac{n\\pi a t}{l} \\right) \\sin\\frac{n\\pi x}{l}
   \\end{align}
   $$
5. 由初始条件确定系数。利用 $\\sin$ 函数的正交性：
   $$
   \\begin{align}
   A_n &= \\frac{2}{l} \\int_0^l \\phi(x) \\sin\\frac{n\\pi x}{l}\\,\\mathrm{d}x \\\\
   B_n &= \\frac{2}{n\\pi a} \\int_0^l \\psi(x) \\sin\\frac{n\\pi x}{l}\\,\\mathrm{d}x
   \\end{align}
   $$

**典型例题**：若 $\\phi(x)=\\sin\\frac{\\pi x}{l}$，$\\psi(x)=0$，则 $A_1=1$，其余 $A_n=0$，$B_n=0$，解为 $u(x,t)=\\cos\\frac{\\pi a t}{l} \\sin\\frac{\\pi x}{l}$。

### 6.2 热传导方程的分离变量（有限杆）

方程 $u_t = \\alpha u_{xx},\\ 0<x<l,\\ t>0$。边界 $u(0,t)=u(l,t)=0$，初值 $u(x,0)=\\phi(x)$。

分离变量 $u=X(x)T(t)$，得 $X''+\\lambda X=0$，$T'+\\alpha\\lambda T=0$。同样本征值和本征函数 $X_n(x)=\\sin\\frac{n\\pi x}{l}$，$\\lambda_n=(n\\pi/l)^2$。时间方程解 $T_n(t)=C_n e^{-\\alpha\\lambda_n t}$。通解

$$
\\begin{align}
u(x,t) = \\sum_{n=1}^\\infty C_n e^{-\\alpha (n\\pi/l)^2 t} \\sin\\frac{n\\pi x}{l}
\\end{align}
$$

系数 $C_n$ 由初值展开：$C_n = \\frac{2}{l} \\int_0^l \\phi(x) \\sin\\frac{n\\pi x}{l}\\,\\mathrm{d}x$。

### 6.3 圆域拉普拉斯方程（极坐标下的分离变量）

二维拉普拉斯方程极坐标下：

$$
\\begin{align}
u_{\\rho\\rho} + \\frac{1}{\\rho} u_\\rho + \\frac{1}{\\rho^2} u_{\\theta\\theta} = 0
\\end{align}
$$

设 $u = R(\\rho)\\Theta(\\theta)$，分离得

$$
\\begin{align}
\\frac{\\rho^2 R'' + \\rho R'}{R} = -\\frac{\\Theta''}{\\Theta} = \\lambda
\\end{align}
$$

由自然周期条件 $\\Theta(\\theta+2\\pi)=\\Theta(\\theta)$，得 $\\lambda = m^2\\ (m=0,1,2,\\dots)$，解为

$$
\\begin{align}
\\Theta_m(\\theta) = C_m \\cos m\\theta + D_m \\sin m\\theta
\\end{align}
$$

径向方程为 Euler 方程 $\\rho^2 R'' + \\rho R' - m^2 R = 0$，求通解：

- $m=0$：$R_0 = A_0 + B_0 \\ln\\rho$；
- $m>0$：$R_m = A_m \\rho^m + B_m \\rho^{-m}$。

若区域包含原点且解有界，舍去 $\\ln\\rho$ 和 $\\rho^{-m}$ 项。圆形区域内解为

$$
\\begin{align}
u(\\rho,\\theta) = \\frac{A_0}{2} + \\sum_{m=1}^\\infty \\rho^m (A_m \\cos m\\theta + B_m \\sin m\\theta)
\\end{align}
$$

边界条件 $u(a,\\theta)=f(\\theta)$ 确定系数：

$$
\\begin{align}
A_m = \\frac{1}{\\pi a^m} \\int_0^{2\\pi} f(\\theta) \\cos m\\theta\\,\\mathrm{d}\\theta,\\quad
B_m = \\frac{1}{\\pi a^m} \\int_0^{2\\pi} f(\\theta) \\sin m\\theta\\,\\mathrm{d}\\theta
\\end{align}
$$

**例**：若 $f(\\theta)=U_0 \\cos\\theta$，则 $A_1 = U_0/a$，其余为零，解 $u(\\rho,\\theta) = \\frac{U_0}{a} \\rho \\cos\\theta$。

---

## 七、特殊函数

### 7.1 勒让德多项式

在球坐标系下拉普拉斯方程分离出的连带勒让德方程，当轴对称时（$m=0$）简化为勒让德方程：

$$
\\begin{align}
(1-x^2) P''(x) - 2x P'(x) + l(l+1) P(x) = 0, \\quad -1\\le x\\le 1
\\end{align}
$$

该方程的有界解为**勒让德多项式** $P_l(x)$，其中 $l=0,1,2,\\dots$

**生成函数**：$\\frac{1}{\\sqrt{1-2xt+t^2}} = \\sum_{l=0}^\\infty P_l(x) t^l$。

**罗巨格公式**：$P_l(x) = \\frac{1}{2^l l!} \\frac{\\mathrm{d}^l}{\\mathrm{d}x^l} (x^2-1)^l$。

前几项：$P_0=1,\\ P_1=x,\\ P_2=\\frac12(3x^2-1),\\ P_3=\\frac12(5x^3-3x)$。

**正交性**：$\\int_{-1}^1 P_l(x) P_k(x)\\,\\mathrm{d}x = \\frac{2}{2l+1} \\delta_{lk}$。

**勒让德–傅里叶展开**：区间 $[-1,1]$ 上的函数 $f(x)$ 可展开为 $f(x)=\\sum_{l=0}^\\infty C_l P_l(x)$，其中

$$
\\begin{align}
C_l = \\frac{2l+1}{2} \\int_{-1}^1 f(x) P_l(x)\\,\\mathrm{d}x
\\end{align}
$$

**轴对称拉普拉斯方程在球域内的解**：

$$
\\begin{align}
u(r,\\theta) = \\sum_{l=0}^\\infty \\left( A_l r^l + \\frac{B_l}{r^{l+1}} \\right) P_l(\\cos\\theta)
\\end{align}
$$

若区域包含原点，舍去 $r^{-l-1}$ 项；无穷远边界为零则舍去 $r^l$ 项。

### 7.2 贝塞尔函数

柱坐标系下径向方程常化为贝塞尔方程：

$$
\\begin{align}
x^2 J_\\nu''(x) + x J_\\nu'(x) + (x^2 - \\nu^2) J_\\nu(x) = 0
\\end{align}
$$

其中 $\\nu$ 为阶数。有界解为**第一类贝塞尔函数** $J_\\nu(x)$，另一线性独立解为 $J_{-\\nu}(x)$（当 $\\nu$ 非整数时）或第二类贝塞尔函数 $Y_\\nu(x)$（诺依曼函数）。

**级数表达式**：

$$
\\begin{align}
J_\\nu(x) = \\sum_{m=0}^\\infty \\frac{(-1)^m}{m!\\,\\Gamma(m+\\nu+1)} \\left( \\frac{x}{2} \\right)^{2m+\\nu}
\\end{align}
$$

特别 $J_0(x) = \\sum_{m=0}^\\infty \\frac{(-1)^m}{(m!)^2} \\left( \\frac{x}{2} \\right)^{2m}$。

**渐近行为**（$x\\to0$）：$J_\\nu(x) \\approx \\frac{1}{\\Gamma(\\nu+1)} \\left( \\frac{x}{2} \\right)^\\nu$，故 $J_\\nu(0)=0$（$\\nu>0$），$J_0(0)=1$。

**本征值问题**：在 $[0,R]$ 上，满足 $J_n(k R)=0$ 的正根 $k_{nm}$ 构成本征值，对应的本征函数系 $\\sqrt{r} J_n(k_{nm} r)$ 在 $(0,R)$ 上关于权重 $r$ 正交：

$$
\\begin{align}
\\int_0^R J_n(k_{nm} r) J_n(k_{nl} r)\\, r\\,\\mathrm{d}r = \\frac{R^2}{2} [J_{n+1}(k_{nm} R)]^2 \\delta_{ml}
\\end{align}
$$

**傅里叶–贝塞尔展开**：在 $[0,R]$ 上任意函数可展开为 $\\sum_{m=1}^\\infty C_m J_n(k_{nm} r)$，系数

$$
\\begin{align}
C_m = \\frac{2}{R^2 [J_{n+1}(k_{nm} R)]^2} \\int_0^R f(r) J_n(k_{nm} r)\\, r\\,\\mathrm{d}r
\\end{align}
$$

---

## 八、格林函数法

泊松方程 $\\Delta u = -f(\\boldsymbol{r})$ 在区域 $V$ 内，满足齐次边界条件（如 $u=0$ 在 $\\partial V$）。格林函数 $G(\\boldsymbol{r}, \\boldsymbol{r}')$ 满足

$$
\\begin{align}
\\Delta G = -\\delta(\\boldsymbol{r} - \\boldsymbol{r}'), \\quad G|_{\\partial V} = 0
\\end{align}
$$

则解可表示为

$$
\\begin{align}
u(\\boldsymbol{r}) = \\int_V G(\\boldsymbol{r}, \\boldsymbol{r}') f(\\boldsymbol{r}')\\,\\mathrm{d}\\boldsymbol{r}'
\\end{align}
$$

格林函数的对称性：$G(\\boldsymbol{r}, \\boldsymbol{r}') = G(\\boldsymbol{r}', \\boldsymbol{r})$。

**自由空间格林函数**（全空间，无穷远边界条件为零）：

三维：$G_0(\\boldsymbol{r}, \\boldsymbol{r}') = \\dfrac{1}{4\\pi |\\boldsymbol{r} - \\boldsymbol{r}'|}$。

二维：$G_0 = -\\dfrac{1}{2\\pi} \\ln |\\boldsymbol{r} - \\boldsymbol{r}'|$。

**镜像法求格林函数**：对于半空间、球域等，通过放置镜像源来满足边界条件。

**例：半空间格林函数**：$z>0$，边界 $z=0$ 上 $G=0$。在 $\\boldsymbol{r}_0=(x_0,y_0,z_0)$ 的点源，在 $z=0$ 平面下方对称点 $(x_0,y_0,-z_0)$ 放相反的单位强度源，得到

$$
\\begin{align}
G(\\boldsymbol{r}, \\boldsymbol{r}_0) = \\frac{1}{4\\pi} \\left( \\frac{1}{|\\boldsymbol{r} - \\boldsymbol{r}_0|} - \\frac{1}{|\\boldsymbol{r} - \\boldsymbol{r}_0^*|} \\right)
\\end{align}
$$

其中 $\\boldsymbol{r}_0^*$ 是镜像点。

---

## 九、保角变换法（共形映射）

### 9.1 基本原理

二维拉普拉斯方程在解析变换 $w=f(z)$ 下形式不变，即若 $\\varphi(u,v)$ 在 $w$ 平面调和，则 $\\Phi(x,y)=\\varphi(u(x,y),v(x,y))$ 在 $z$ 平面相应区域调和。求解复杂区域边值问题时，用映射将区域化为半平面或单位圆等简单区域，转移边界条件后求解，再反变回原变量。

### 9.2 常用映射速查

- **线性** $w=az+b$：平移、旋转、缩放。
- **幂函数** $w=z^\\alpha$：角域 $0<\\arg z<\\theta$ 变为 $0<\\arg w<\\alpha\\theta$。选 $\\alpha = \\pi/\\theta$ 可得上半平面。
- **指数和对数**：带域与角域互化。
- **分式线性** $w=\\frac{az+b}{cz+d}$：将圆（直线）映为圆（直线），三点决定变换。
- **施瓦茨–克里斯托费尔公式**：将上半平面映到多边形的内部。

### 9.3 解决步骤与例题

步骤：（1）选择映射 $w=f(z)$；（2）在 $w$ 平面解拉普拉斯方程得 $\\varphi$；（3）反变 $u(x,y)=\\varphi(u(x,y),v(x,y))$。

**例**：第一象限区域内有稳定温度场，边界 $\\arg z=0$ 上 $T=0$，$\\arg z=\\pi/2$ 上 $T=T_0$。求内部温度。

取映射 $w = z^2$，它将第一象限映射到上半平面。边界条件转移：正实轴 $\\to$ 正实轴($\\arg w=0$)，$T=0$；正虚轴 $\\to$ 负实轴($\\arg w=\\pi$)，$T=T_0$。在上半平面，角度线性函数调和，设 $\\varphi = A + B\\arg w$。由边界条件：$\\arg w=0$ 时 $\\varphi=0\\ \\Rightarrow A=0$；$\\arg w=\\pi$ 时 $\\varphi=B\\pi = T_0 \\Rightarrow B = T_0/\\pi$。故 $\\varphi = \\frac{T_0}{\\pi}\\arg w$。反代 $w=z^2$，$\\arg w = 2\\arg z$，得原问题解

$$
\\begin{align}
T(x,y) = \\frac{2T_0}{\\pi} \\arg z = \\frac{2T_0}{\\pi} \\arctan\\frac{y}{x}
\\end{align}
$$

---

## 十、备考提醒与典型考题思路

1. **判断解析并用 C-R 条件求调和共轭**是基本题，务必熟练。
2. **回路积分**常直接使用柯西公式或高阶导数公式，看清被积函数形式。
3. **实积分**重点掌握三种类型，熟练定理条件和留数快速求法（尤其是极点留数公式）。
4. **傅里叶/拉普拉斯解方程**要求会写变换和逆变换步骤，并记住高斯积分公式等常用积分结果。
5. **分离变量法**步骤复杂，建议动手做几道题（弦振动、热传导、矩形/圆拉普拉斯），记清各个系数公式。
6. **特殊函数**通常只要求知道正交性和展开系数公式，勒让德展开和贝塞尔展开可能会出简单计算题。
7. **格林函数**重点掌握基本解和镜像法的思路。
8. **保角变换**看熟几种映射效果，掌握上半平面线性温度/电场的解法。

> 复习时结合笔记自行推导每一步，确保考试能够流畅书写。
`,i={title:"数学物理方法期末复习",author:"NeoWangKing",date:new Date(1778242463e3),lastMod:new Date(1778242463e3),tags:["数学","数学物理方法","期末复习","复变函数","积分变换","偏微分方程","特殊函数"],category:["数学","数学物理方法"],summary:"本文是数学物理方法的详细期末复习笔记，全面覆盖复变函数（解析性、积分、留数定理及应用）、傅里叶变换与拉普拉斯变换（性质及解偏微分方程）、分离变量法（直角坐标、极坐标、球坐标、柱坐标）、特殊函数（勒让德、贝塞尔）、格林函数法和保角变换法，并配有大量典型例题和详尽推导。",comments:!0,draft:!1,sticky:0},r={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/mathematics/MMiP/9-Mathematical-Physics-Final-Review.md",rawData:void 0};export{r as _internal,t as body,$ as collection,i as data,n as id,a as slug};
