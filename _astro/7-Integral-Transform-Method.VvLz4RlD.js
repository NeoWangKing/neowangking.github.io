const n="mathematics/MMiP/7-Integral-Transform-Method.md",t="posts",a="mathematics/mmip/7-integral-transform-method",i=`
## 引言

积分变换是将函数映射为另一个函数空间中的积分表达，其核心优势在于能将微分运算转化为代数运算。在数学物理中，傅里叶变换和拉普拉斯变换是求解微分方程（尤其是偏微分方程）最常用的两种积分变换。傅里叶变换擅长处理无界空间或周期边界条件的问题，而拉普拉斯变换更适合处理初值问题，特别是含时间变量的演化方程。

## 傅里叶变换法

### 基本步骤

1. 对偏微分方程中某个空间变量进行傅里叶变换，将偏导数化为代数因子。
2. 求解变换后得到的常微分方程（通常是关于时间 $t$ 的）。
3. 利用初始条件确定解中的待定函数。
4. 通过傅里叶逆变换回到原函数空间。

关键公式（一维情形）：

- 正变换：$\\displaystyle \\hat{f}(k, t) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty f(x, t) e^{-\\mathrm{i}kx} \\,\\mathrm{d}x$
- 逆变换：$\\displaystyle f(x, t) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty \\hat{f}(k, t) e^{\\mathrm{i}kx} \\,\\mathrm{d}k$

微分性质：若 $f(x)$ 在无穷远足够快衰减，则

$$
\\begin{align}
\\mathcal{F}\\{ f'(x) \\} = \\mathrm{i}k \\hat{f}(k), \\quad
\\mathcal{F}\\{ f''(x) \\} = -k^2 \\hat{f}(k)
\\end{align}
$$

类比三维的情形：

- 正变换：$\\displaystyle \\hat{f}(\\vec{k},t) = \\frac{1}{(2\\pi)^{3/2}} \\iiint f(\\vec{r}, t) e^{-\\mathrm{i}\\vec{k}\\cdot\\vec{r}} \\mathrm{d}^{3}\\vec{r}$
- 逆变换：$\\displaystyle f(\\vec{r},t) = \\frac{1}{(2\\pi)^{3/2}} \\iiint \\hat{f}(\\vec{k}, t) e^{\\mathrm{i}\\vec{k}\\cdot\\vec{r}} \\mathrm{d}^{3}\\vec{k}$

### 典型例题：一维热传导方程的柯西问题

考虑无限长杆上的热传导，定解问题：

$$
\\begin{align}
\\begin{cases}
u_t - \\alpha u_{xx} = 0, \\quad ( -\\infty < x < \\infty,\\ t > 0 ) \\\\[4pt]
u(x,0) = \\phi(x)
\\end{cases}
\\end{align}
$$

**解**：对空间变量 $x$ 做傅里叶变换。记

$$
\\begin{align}
\\hat{u}(k,t) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty u(x,t) e^{-\\mathrm{i}kx} \\,\\mathrm{d}x
\\end{align}
$$

利用微分性质和定解方程，得到像函数满足的常微分方程

$$
\\begin{align}
\\frac{\\mathrm{d}\\hat{u}}{\\mathrm{d}t} = -\\alpha k^2 \\hat{u}
\\end{align}
$$

初始条件变换为 $\\hat{u}(k,0) = \\hat{\\phi}(k) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty \\phi(x) e^{-\\mathrm{i}kx} \\,\\mathrm{d}x$。

解这关于 $t$ 的一阶常微分方程，得

$$
\\begin{align}
\\hat{u}(k,t) = \\hat{\\phi}(k) \\, e^{-\\alpha k^2 t}
\\end{align}
$$

作傅里叶逆变换还原：

$$
\\begin{align}
u(x,t) &= \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty \\hat{u}(k,t) e^{\\mathrm{i}kx} \\,\\mathrm{d}k \\\\
&= \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty \\hat{\\phi}(k) e^{-\\alpha k^2 t} e^{\\mathrm{i}kx} \\,\\mathrm{d}k \\\\
&= \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty \\left( \\int_{-\\infty}^\\infty \\phi(\\xi) e^{-\\mathrm{i}k\\xi} \\,\\mathrm{d}\\xi \\right) e^{-\\alpha k^2 t} e^{\\mathrm{i}kx} \\,\\mathrm{d}k
\\end{align}
$$

交换积分次序，先对 $k$ 积分：

$$
\\begin{align}
u(x,t) = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty \\phi(\\xi) \\left( \\int_{-\\infty}^\\infty e^{-\\alpha k^2 t} e^{\\mathrm{i}k(x-\\xi)} \\,\\mathrm{d}k \\right) \\mathrm{d}\\xi
\\end{align}
$$

内层积分为标准高斯积分，利用公式 $\\int_{-\\infty}^\\infty e^{-a k^2 + b k} \\,\\mathrm{d}k = \\sqrt{\\frac{\\pi}{a}} e^{b^2/(4a)}$（$a>0$）。此处 $a = \\alpha t$，$b = \\mathrm{i}(x-\\xi)$，于是

$$
\\begin{align}
\\int_{-\\infty}^\\infty e^{-\\alpha t k^2} e^{\\mathrm{i}k(x-\\xi)} \\,\\mathrm{d}k = \\sqrt{\\frac{\\pi}{\\alpha t}} \\, \\exp\\!\\left[ -\\frac{(x-\\xi)^2}{4\\alpha t} \\right]
\\end{align}
$$

代回得到热传导方程柯西问题的经典解

$$
\\begin{align}
u(x,t) = \\frac{1}{\\sqrt{4\\pi\\alpha t}} \\int_{-\\infty}^\\infty \\phi(\\xi) \\exp\\!\\left[ -\\frac{(x-\\xi)^2}{4\\alpha t} \\right] \\mathrm{d}\\xi
\\end{align}
$$

### 典型例题：半无限长一维扩散问题

考虑如下定解问题：

$$
\\begin{cases}
\\displaystyle u_t - a^2 u_{xx} = 0, \\quad x > 0,\\ t > 0 \\\\[6pt]
\\displaystyle \\left. u_x \\right|_{x=0} = 0 \\\\[6pt]
\\displaystyle \\left. u \\right|_{t=0} = N_0 \\delta(x)
\\end{cases}
$$

**解**：为在无界域上使用傅里叶变换，利用边界条件 $u_x|_{x=0}=0$ 将初始函数偶延拓到全实轴。延拓后的初值为 $u(x,0) = N_0 \\delta(x) + N_0 \\delta(-x) = 2N_0 \\delta(x)$（对 $x \\in \\mathbb{R}$ 而言，偶延拓使原点处强度加倍）。现在求解全实轴上的热传导方程柯西问题。

定义傅里叶变换（对称形式）

$$
\\begin{align}
U(k,t) &= \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty u(x, t) e^{-\\mathrm{i}kx} \\mathrm{d}x \\\\
u(x,t) &= \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty U(k, t) e^{\\mathrm{i}kx} \\mathrm{d}k
\\end{align}
$$

代入方程 $u_t = a^2 u_{xx}$ 得

$$
\\begin{align}
U_t(k, t) + a^2 k^2 U(k, t) = 0
\\end{align}
$$

初始条件变换为

$$
\\begin{align}
U(k, 0) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^{\\infty} 2 N_0 \\delta(x) e^{-\\mathrm{i}kx} \\mathrm{d}x = \\frac{2 N_0}{\\sqrt{2\\pi}}
\\end{align}
$$

求解一阶常微分方程，得

$$
\\begin{align}
U(k, t) = \\frac{2 N_0}{\\sqrt{2\\pi}} \\, e^{-a^2 k^2 t}
\\end{align}
$$

> 此处系数 $2$ 来源于第二类齐次边界条件所伴随的偶延拓。

进行逆变换

$$
\\begin{align}
u(x, t) &= \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^{\\infty} U(k, t) e^{\\mathrm{i}kx} \\mathrm{d}k \\\\
&= \\frac{N_0}{\\pi} \\int_{-\\infty}^{\\infty} e^{-a^2 k^2 t} e^{\\mathrm{i}kx} \\mathrm{d}k
\\end{align}
$$

配平方做高斯积分：

$$
\\begin{align}
\\int_{-\\infty}^{\\infty} e^{-a^2 t k^2 + \\mathrm{i}x k} \\mathrm{d}k
&= \\int_{-\\infty}^{\\infty} \\exp\\!\\left[ -a^2 t \\left( k - \\frac{\\mathrm{i}x}{2a^2 t} \\right)^2 - \\frac{x^2}{4a^2 t} \\right] \\mathrm{d}k \\\\
&= e^{-\\frac{x^2}{4a^2 t}} \\int_{-\\infty}^{\\infty} e^{-a^2 t \\, \\eta^2} \\mathrm{d}\\eta \\qquad \\left( \\eta = k - \\frac{\\mathrm{i}x}{2a^2 t} \\right) \\\\
&= e^{-\\frac{x^2}{4a^2 t}} \\sqrt{\\frac{\\pi}{a^2 t}}
\\end{align}
$$

因此

$$
\\begin{align}
u(x, t) = \\frac{N_0}{\\sqrt{a^2 \\pi t}} \\, e^{-\\frac{x^{2}}{4 a^2 t}}
\\end{align}
$$

此解自动满足 $u_x(0,t)=0$。

### 典型例题：三维无界波动问题

考虑如下定解问题：

$$
\\begin{cases}
\\displaystyle u_{tt} - a^2 \\Delta u = 0, \\quad \\vec{r} \\in \\mathbb{R}^3,\\ t > 0 \\\\[6pt]
\\displaystyle \\left. u \\right|_{t=0} = \\varphi(\\vec{r}),\\quad \\left. u_t \\right|_{t=0} = \\psi(\\vec{r})
\\end{cases}
$$

**解**：采用三维傅里叶变换（对称形式）

$$
\\begin{align}
U(\\vec{k},t) &= \\frac{1}{(2\\pi)^{3/2}} \\iiint u(\\vec{r}, t) e^{-\\mathrm{i}\\vec{k}\\cdot\\vec{r}} \\mathrm{d}^{3}\\vec{r} \\\\
u(\\vec{r},t) &= \\frac{1}{(2\\pi)^{3/2}} \\iiint U(\\vec{k}, t) e^{\\mathrm{i}\\vec{k}\\cdot\\vec{r}} \\mathrm{d}^{3}\\vec{k}
\\end{align}
$$

代入波动方程 $u_{tt} = a^2 \\Delta u$。由于 $\\Delta u$ 的傅里叶变换为 $-k^2 U(\\vec{k},t)$，得到像空间的简谐振动方程

$$
\\begin{align}
U_{tt}(\\vec{k}, t) + a^2 k^2 U(\\vec{k}, t) = 0
\\end{align}
$$

初始条件变换为

$$
\\begin{align}
U(\\vec{k}, 0) = \\Phi(\\vec{k}) = \\frac{1}{(2\\pi)^{3/2}} \\iiint \\varphi(\\vec{r}) e^{-\\mathrm{i}\\vec{k}\\cdot\\vec{r}} \\mathrm{d}^3 \\vec{r} \\\\
U_t(\\vec{k}, 0) = \\Psi(\\vec{k}) = \\frac{1}{(2\\pi)^{3/2}} \\iiint \\psi(\\vec{r}) e^{-\\mathrm{i}\\vec{k}\\cdot\\vec{r}} \\mathrm{d}^3 \\vec{r}
\\end{align}
$$

方程通解为

$$
\\begin{align}
U(\\vec{k}, t) = A(\\vec{k}) \\sin(a k t) + B(\\vec{k}) \\cos(a k t)
\\end{align}
$$

利用初值得 $B = \\Phi$，$A = \\dfrac{\\Psi}{a k}$。于是

$$
\\begin{align}
U(\\vec{k}, t) = \\Phi(\\vec{k}) \\cos(a k t) + \\frac{\\Psi(\\vec{k})}{a k} \\sin(a k t)
\\end{align}
$$

逆变换给出

$$
\\begin{align}
u(\\vec{r}, t) = \\frac{1}{(2\\pi)^{3/2}} \\iiint \\left[ \\Phi(\\vec{k}) \\cos(a k t) + \\frac{\\Psi(\\vec{k})}{a k} \\sin(a k t) \\right] e^{\\mathrm{i}\\vec{k}\\cdot\\vec{r}} \\mathrm{d}^3 \\vec{k}
\\end{align}
$$

将 $\\cos(a k t)$ 和 $\\sin(a k t)$ 写成复指数形式，并代入 $\\Phi, \\Psi$ 的积分表达式，交换积分次序后可得

$$
\\begin{align}
u(\\vec{r}, t) = \\frac{1}{(2\\pi)^3} \\iiint \\mathrm{d}^3 \\vec{r}' \\,
&\\left\\{ \\varphi(\\vec{r}') \\frac{\\partial}{\\partial t} \\iiint \\frac{1}{2\\mathrm{i} a k} \\left( e^{\\mathrm{i} a k t} - e^{-\\mathrm{i} a k t} \\right) e^{\\mathrm{i}\\vec{k}\\cdot(\\vec{r} - \\vec{r}')} \\mathrm{d}^3 \\vec{k} \\right. \\\\
&\\left. + \\psi(\\vec{r}') \\iiint \\frac{1}{2\\mathrm{i} a k} \\left( e^{\\mathrm{i} a k t} - e^{-\\mathrm{i} a k t} \\right) e^{\\mathrm{i}\\vec{k}\\cdot(\\vec{r} - \\vec{r}')} \\mathrm{d}^3 \\vec{k} \\right\\}
\\end{align}
$$

利用已知三维傅里叶变换

$$
\\begin{align}
\\mathcal{F}\\left[ \\frac{1}{r} \\delta(r - c) \\right] = \\sqrt{\\frac{2}{\\pi}} \\frac{1}{\\mathrm{i} k} \\left( e^{\\mathrm{i} k c} - e^{-\\mathrm{i} k c} \\right)
\\end{align}
$$

（其中 $r = |\\vec{r}|$）并注意归一化常数，可最终得到泊松公式（三维波动方程的解）

$$
\\begin{align}
u(\\vec{r}, t) = \\frac{1}{4\\pi a} \\left\\{
\\frac{\\partial}{\\partial t} \\iint_{|\\vec{r} - \\vec{r}'| = a t} \\frac{\\varphi(\\vec{r}')}{a t} \\,\\mathrm{d} S' +
\\iint_{|\\vec{r} - \\vec{r}'| = a t} \\frac{\\psi(\\vec{r}')}{a t} \\,\\mathrm{d} S'
\\right\\}
\\end{align}
$$

### 适用场景

- 空间区域为全直线或半直线（可通过奇延拓/偶延拓处理齐次边界条件）。
- 方程系数为常数。
- 边界条件较简单（如无穷远处衰减）。

## 拉普拉斯变换法

### 基本步骤

1. 对方程中的时间变量 $t$ 进行拉普拉斯变换。
2. 将原方程转化为关于空间变量的常微分方程（像空间中的方程）。
3. 求解该常微分方程，并利用边界条件确定像函数中的待定系数。
4. 通过拉普拉斯逆变换求得原函数。常用留数定理或查表。

拉普拉斯变换及其导数性质：

- 正变换：$\\displaystyle F(s) = \\mathcal{L}\\{ f(t) \\} = \\int_0^\\infty f(t) e^{-st} \\,\\mathrm{d}t$
- 导数性质：
  $$
  \\begin{align}
  \\mathcal{L}\\{ f'(t) \\} &= sF(s) - f(0) \\\\
  \\mathcal{L}\\{ f''(t) \\} &= s^2 F(s) - s f(0) - f'(0)
  \\end{align}
  $$

### 典型例题：半无限长弦的受迫振动

定解问题：

$$
\\begin{align}
\\begin{cases}
u_{tt} = c^2 u_{xx}, \\quad x > 0,\\ t > 0 \\\\[4pt]
u(x,0) = 0,\\quad u_t(x,0) = 0 \\\\[4pt]
u(0,t) = g(t), \\quad \\lim\\limits_{x\\to\\infty} u(x,t) \\text{有界}
\\end{cases}
\\end{align}
$$

**解**：对时间 $t$ 取拉普拉斯变换，令 $U(x,s) = \\mathcal{L}\\{ u(x,t) \\}$。利用初值和导数性质，

$$
\\begin{align}
\\mathcal{L}\\{ u_{tt} \\} = s^2 U(x,s) - s u(x,0) - u_t(x,0) = s^2 U(x,s)
\\end{align}
$$

原方程化为关于 $x$ 的常微分方程

$$
\\begin{align}
s^2 U(x,s) = c^2 \\frac{\\mathrm{d}^2 U}{\\mathrm{d}x^2} \\quad \\Longrightarrow \\quad \\frac{\\mathrm{d}^2 U}{\\mathrm{d}x^2} - \\frac{s^2}{c^2} U = 0
\\end{align}
$$

通解为

$$
\\begin{align}
U(x,s) = A(s) e^{-(s/c)x} + B(s) e^{(s/c)x}
\\end{align}
$$

由 $x \\to \\infty$ 有界，舍去增长项 $e^{(s/c)x}$，故 $B(s) = 0$。再利用边界条件 $u(0,t)=g(t)$，其像函数为 $G(s) = \\mathcal{L}\\{ g(t) \\}$，得

$$
\\begin{align}
U(0,s) = A(s) = G(s) \\quad \\Longrightarrow \\quad U(x,s) = G(s) e^{-(s/c)x}
\\end{align}
$$

对像函数使用拉普拉斯逆变换。由延迟定理（第二平移定理）

$$
\\begin{align}
\\mathcal{L}^{-1}\\{ e^{-as} F(s) \\} = f(t-a) H(t-a)
\\end{align}
$$

其中 $H$ 为单位阶跃函数。此处 $a = x/c$，$F(s)=G(s)$，$f(t)=g(t)$。于是

$$
\\begin{align}
u(x,t) = g\\!\\left(t - \\frac{x}{c}\\right) H\\!\\left(t - \\frac{x}{c}\\right)
\\end{align}
$$

此解描述波前以速度 $c$ 向右传播，表明 $x$ 点在 $t < x/c$ 时保持静止，之后才受到边界信号的激励。

### 典型例题：半无限长杆的热传导（第一类边界条件）

定解问题：

$$
\\begin{align}
\\begin{cases}
u_t = \\alpha u_{xx}, \\quad x > 0,\\ t > 0 \\\\[4pt]
u(x,0) = 0 \\\\[4pt]
u(0,t) = f(t), \\quad \\lim\\limits_{x\\to\\infty} u(x,t) = 0
\\end{cases}
\\end{align}
$$

**解**：对 $t$ 取拉普拉斯变换，记 $U(x,s) = \\mathcal{L}\\{ u(x,t) \\}$。利用初值 $u(x,0)=0$，导数性质给出

$$
\\begin{align}
s U(x,s) - u(x,0) = \\alpha \\frac{\\mathrm{d}^2 U}{\\mathrm{d}x^2} \\quad \\Longrightarrow \\quad \\frac{\\mathrm{d}^2 U}{\\mathrm{d}x^2} - \\frac{s}{\\alpha} U = 0
\\end{align}
$$

该方程的通解为

$$
\\begin{align}
U(x,s) = A(s) e^{-\\sqrt{s/\\alpha}\\, x} + B(s) e^{\\sqrt{s/\\alpha}\\, x}
\\end{align}
$$

无穷远处有界要求 $B(s) = 0$。由边界条件 $u(0,t)=f(t)$，其像为 $F(s) = \\mathcal{L}\\{ f(t) \\}$，所以 $U(0,s) = A(s) = F(s)$。于是

$$
\\begin{align}
U(x,s) = F(s) \\, e^{-\\sqrt{s/\\alpha}\\, x}
\\end{align}
$$

逆变换时，首先回忆已知拉普拉斯逆变换

$$
\\begin{align}
\\mathcal{L}^{-1}\\!\\left\\{ e^{-a\\sqrt{s}} \\right\\} = \\frac{a}{2\\sqrt{\\pi}\\, t^{3/2}} \\exp\\!\\left( -\\frac{a^2}{4t} \\right), \\quad a > 0
\\end{align}
$$

由卷积定理，$U(x,s)$ 的逆变换为 $f(t)$ 与 $\\mathcal{L}^{-1}\\!\\big\\{ e^{-\\frac{x}{\\sqrt{\\alpha}}\\sqrt{s}} \\big\\}$ 的卷积：

$$
\\begin{align}
u(x,t) = f(t) * \\left( \\frac{x}{2\\sqrt{\\pi\\alpha}\\, t^{3/2}} e^{-\\frac{x^2}{4\\alpha t}} \\right)
\\end{align}
$$

即

$$
\\begin{align}
u(x,t) = \\frac{x}{2\\sqrt{\\pi\\alpha}} \\int_0^t f(\\tau) \\frac{1}{(t-\\tau)^{3/2}} \\exp\\!\\left[ -\\frac{x^2}{4\\alpha (t-\\tau)} \\right] \\mathrm{d}\\tau
\\end{align}
$$

当 $f(t) = T_0$（常数）时，上述积分经过变量代换可进一步化为误差函数形式，常用于地表温度传导等模型。

### 典型例题：半无限长弦的初始位移问题（自由振动）

考虑一端固定的半无限长弦，初始位移给定，初速为零：

$$
\\begin{align}
\\begin{cases}
u_{tt} = c^2 u_{xx}, \\quad x > 0,\\ t > 0 \\\\[4pt]
u(x,0) = \\varphi(x), \\quad u_t(x,0) = 0 \\\\[4pt]
u(0,t) = 0, \\quad \\lim\\limits_{x\\to\\infty} u(x,t) \\text{ 有界}
\\end{cases}
\\end{align}
$$

**解**：对 $t$ 取拉普拉斯变换，令 $U(x,s) = \\mathcal{L}\\{ u(x,t) \\}$。由初值和导数性质，

$$
\\begin{align}
\\mathcal{L}\\{ u_{tt} \\} = s^2 U(x,s) - s \\varphi(x) - 0
\\end{align}
$$

原方程化为

$$
\\begin{align}
s^2 U(x,s) - s \\varphi(x) = c^2 \\frac{\\mathrm{d}^2 U}{\\mathrm{d}x^2}
\\end{align}
$$

整理得非齐次常微分方程

$$
\\begin{align}
\\frac{\\mathrm{d}^2 U}{\\mathrm{d}x^2} - \\frac{s^2}{c^2} U = -\\frac{s}{c^2} \\varphi(x)
\\end{align}
$$

其对应齐次方程的通解为 $U_h = A(s) e^{-(s/c)x} + B(s) e^{(s/c)x}$。由无穷远有界条件 $B(s)=0$。接下来用常数变易法求特解，或直接使用一维格林函数。

齐次通解部分 $U_h = A(s) e^{-(s/c)x}$；非齐次方程的特解可取为

$$
\\begin{align}
U_p(x,s) = \\frac{1}{2c} \\int_0^\\infty \\varphi(\\xi) \\left[ e^{-(s/c)|x-\\xi|} - e^{-(s/c)(x+\\xi)} \\right] \\mathrm{d}\\xi
\\end{align}
$$

（该表达式可通过镜像法或者拉普拉斯变换的格林函数导出）。利用边界条件 $u(0,t)=0 \\Rightarrow U(0,s)=0$ 确定 $A(s) = 0$，因此

$$
\\begin{align}
U(x,s) = U_p(x,s) = \\frac{1}{2c} \\int_0^\\infty \\varphi(\\xi) \\left[ e^{-\\frac{s}{c}|x-\\xi|} - e^{-\\frac{s}{c}(x+\\xi)} \\right] \\mathrm{d}\\xi
\\end{align}
$$

逐项做拉普拉斯逆变换，利用 $\\mathcal{L}^{-1}\\{ e^{-a s} \\} = \\delta(t-a)$（注意这里 $a$ 可以是 $|x-\\xi|/c$ 等），可得

$$
\\begin{align}
u(x,t) = \\frac{1}{2} \\big[ \\tilde{\\varphi}(x+ct) + \\tilde{\\varphi}(x-ct) \\big]
\\end{align}
$$

其中 $\\tilde{\\varphi}$ 是 $\\varphi(x)$ 在整个实轴上的奇延拓：$\\tilde{\\varphi}(-y) = -\\varphi(y),\\, y>0$。这正是达朗贝尔解的半无限弦形式：初始位移分解为左行波和右行波，并在固定端点 $x=0$ 处发生反射并反相。

### 适用场景

- 初值问题，尤其是 $t \\ge 0$ 的半无限时间域。
- 方程系数为常数或仅依赖于空间变量。
- 边界条件在 $x=0$ 等端点给出。

## 两种变换的比较

|              | 傅里叶变换                     | 拉普拉斯变换                   |
| :----------: | :----------------------------- | :----------------------------- |
|  基本积分域  | 全实轴 $(-\\infty,\\infty)$      | 半实轴 $[0,\\infty)$            |
|   擅长处理   | 空间变量的无界问题             | 时间变量的初值问题             |
| 初始条件处理 | 手动代入，化为像函数的初始条件 | 直接通过导数性质融入像方程     |
|  常见逆变换  | 积分法、留数法                 | 留数定理、查表                 |
|   典型方程   | 全直线上的热传导、波动方程     | 半无限弦、半无限杆的扩散与振动 |

## 总结

- 积分变换的核心思想：微分化→代数乘，偏微分方程→常微分方程。
- 傅里叶变换法可直接处理无界空间问题，边界条件由函数在无穷远的行为隐含确定。
- 拉普拉斯变换法自动吸收初始条件，非常适合求解含时间初值的演化问题。
- 在实际应用中，选择变换取决于问题的定义域和边界/初始条件类型。
`,e={title:"积分变换求解微分方程",author:"NeoWangKing",date:new Date(177796308e4),lastMod:new Date(1778241527e3),tags:["数学","数学物理方法","积分变换","傅里叶变换","拉普拉斯变换","偏微分方程"],category:["数学","数学物理方法"],summary:"本文介绍利用傅里叶变换和拉普拉斯变换求解常微分方程与偏微分方程的系统方法，包括基本步骤、重要性质、典型例题的详细推导，以及两种变换的适用场景对比。",comments:!0,draft:!1,sticky:0,chapter:7},$={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/mathematics/MMiP/7-Integral-Transform-Method.md",rawData:void 0};export{$ as _internal,i as body,t as collection,e as data,n as id,a as slug};
