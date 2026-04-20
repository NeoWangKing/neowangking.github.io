const n="mathematics/MMiP/5-Cylindrical-Functions.md",m="posts",r="mathematics/mmip/5-cylindrical-functions",a=`
## 三类柱函数

我们先来考虑拉普拉斯方程：

$$
\\begin{align}
\\Delta u = 0
\\end{align}
$$

在柱坐标下，有

$$
\\begin{align}
\\frac{1}{\\rho}\\frac{\\partial}{\\partial \\rho}\\left(\\rho\\frac{\\partial u}{\\partial \\rho}\\right) + \\frac{1}{\\rho^{2}}\\frac{\\partial^{2} u}{\\partial \\varphi^{2}} + \\frac{\\partial^{2} u}{\\partial z^{2}} = 0
\\end{align}
$$

进行分离变量：

$$
\\begin{align}
u(\\theta,\\varphi,z) = R(\\rho)\\Phi(\\varphi)Z(z)
\\end{align}
$$

代入拉普拉斯方程，即可得到：

$$
\\begin{align}
\\begin{cases}
\\begin{aligned}
&Z''(z) - \\mu Z(z) = 0 &\\qquad\\text{[1]}\\\\
&\\Phi''(\\varphi) + m^{2}\\Phi(\\varphi) = 0 &\\qquad\\text{[2]}\\\\
&\\rho^{2} R''(\\rho) + \\rho R'(\\rho) + [ \\mu\\rho^{2} - m^{2} ]R(\\rho) = 0 &\\qquad\\text{[3]}
\\end{aligned}
\\end{cases}
\\end{align}
$$

1. 如果 $\\mu > 0$ ，则有通解为 $Z(z) =\\left\\{ e^{\\sqrt{\\mu}z}, e^{-\\sqrt{\\mu}z} \\right\\}$ ，作变量代换： $x = \\sqrt{\\mu} \\rho$，方程 $\\text{[3]}$ 就化为**贝塞尔方程**：

   $$
   \\begin{align}
   x^{2} R''(x) + x R'(x) + [x^{2} - m^{2}] R(x) = 0
   \\end{align}
   $$

   其通解由 $m$ 阶贝塞尔函数 $\\mathrm{J}_{m}(x)$ 和 $m$ 阶诺伊曼函数 $\\mathrm{N}_{m}(x)$ 线性组合而成，其中：

   $$
   \\begin{align}
   &\\mathrm{J}_{m}(x) = \\sum_{k = 0}^{\\infty}{\\frac{(-1)^{k}}{k!\\Gamma(m + k + 1)}\\left(\\frac{x}{2}\\right)^{m + 2k}}\\\\
   &\\mathrm{N}_{m}(x) = \\frac{2}{\\pi}\\left(\\ln{\\frac{x}{2}} + C\\right) \\mathrm{J}_{m}(x)\\\\
   &\\mathrm{J}_{-m}(x) = (-1)^{m}\\mathrm{J}_{m}(x)
   \\end{align}
   $$

   _**⚠：但是在确定系数之前还有一些需要注意的点，我们之后详细讨论**_

   > 诺伊曼函数还可以写成：
   >
   > $$
   > \\begin{align}
   > \\mathrm{N}_{m}(x) = \\lim_{m\\rightarrow\\mathbb{Z}}{\\frac{\\mathrm{J}_{m}(x)\\cos{m\\pi} - \\mathrm{J}_{-m}(x)}{\\sin{m\\pi}}}
   > \\end{align}
   > $$

2. 如果 $\\mu < 0$ 则作换元 $x = \\sqrt{-\\mu}\\rho$ 就得到**虚宗量贝塞尔方程**：

   $$
   \\begin{align}
   x^{2} R''(x) + x R(x) - [x^{2} + m^{2}] R(x) = 0
   \\end{align}
   $$

   贝塞尔函数可以作如下的变换：

   $$
   \\begin{align}
   \\mathrm{J}_{m}(\\mathrm{i}x) &= \\sum_{k = 0}^{\\infty}{\\frac{(-1)^{k}}{k!\\Gamma(k + m + 1)}\\left(\\frac{x}{2}\\right)^{m + 2k}\\mathrm{i}^{m + 2k}}\\\\
   &=\\mathrm{i}^{m} \\sum_{k = 0}^{\\infty}{\\frac{1}{k!\\Gamma(k + m + 1)}\\left(\\frac{x}{2}\\right)^{m + 2k}}\\\\
   &= \\mathrm{i}^{m} \\mathrm{I}_{m}(x)
   \\end{align}
   $$

> 如果是对球函数作分离变量，得到的就是球贝塞尔方程：
>
> $$
> \\begin{align}
> r^{2} R''(r) + 2r R'(r) + [k^{2}r^{2} - l(l + 1)] R(r) &= 0\\\\
> \\xRightarrow{(x = kr)} x^{2} R''(x) + 2x R'(x) + [x^{2} - l(l + 1)] R(x) &= 0
> \\end{align}
> $$

### 三类柱函数

前面已经给出 $m$ 阶贝塞尔方程的通解为：

$$
\\begin{align}
&R(x) = C_{1} \\mathrm{J}_{m}(x) + C_{2} \\mathrm{J}_{-m}(x)\\\\
\\text{或}\\qquad &R(x) = C_{1} \\mathrm{J}_{m}(x) + C_{2} \\mathrm{N}_{m}(x)
\\end{align}
$$

但是对于整数的 $m$ 阶，$\\mathrm{J}_{-m}(x)$ 与 $\\mathrm{J}_{m}(x)$ 并非完全独立，此时上述的通解 **$R(x) = C_{1} \\mathrm{J}_{m}(x) + C_{2} \\mathrm{J}_{-m}(x)$** 就不适用了（而通解 **$R(x) = C_{1} \\mathrm{J}_{m}(x) + C_{2} \\mathrm{N}_{m}(x)$** 仍然适用），为了解决这一问题，通常会选取线性独立的：

$$
\\begin{align}
\\begin{cases}
\\begin{aligned}
&\\mathrm{H}_{m}^{(1)} = \\mathrm{J}_{m}(x) + \\mathrm{iN}_{m}(x)\\\\
&\\mathrm{H}_{m}^{(2)} = \\mathrm{J}_{m}(x) - \\mathrm{iN}_{m}(x)
\\end{aligned}
\\end{cases}
\\end{align}
$$

来表示 $m$ 阶贝塞尔方程的通解，其中这两个函数分别称为**第一种和第二种汉克尔函数**，于是通解可以表示为

$$
\\begin{align}
R(x) = C_{1}\\mathrm{H}_{m}^{(1)}(x) + C_{2}\\mathrm{H}_{m}^{(2)}(x)
\\end{align}
$$

而 **贝塞尔函数**、**诺伊曼函数**、**汉克尔函数** 分别称为**第一类**、**第二类**、**第三类柱函数**

### 原点和无穷远处的行为

在 $x \\rightarrow 0$ 时：

$$
\\begin{align}
\\begin{matrix}
&\\mathrm{J}_{0}(x) \\rightarrow 1, &\\mathrm{J}_{m}(x) \\rightarrow 0, &\\mathrm{J}_{-m}(x) \\rightarrow \\infty\\\\
&\\mathrm{N}_{0}(x) \\rightarrow \\infty, &\\mathrm{N}_{m}(x) \\rightarrow \\pm\\infty, &(m \\neq 0)
\\end{matrix}
\\end{align}
$$

而在另一个极端 $x \\rightarrow \\infty$ 处，有：

$$
\\begin{align}
&\\mathrm{H}_{m}^{(1)}(x) \\sim \\sqrt{\\frac{2}{\\pi x}}e^{\\mathrm{i}(x - m\\pi/2 - \\pi/4)}\\\\
&\\mathrm{H}_{m}^{(2)}(x) \\sim \\sqrt{\\frac{2}{\\pi x}}e^{-\\mathrm{i}(x - m\\pi/2 - \\pi/4)}\\\\
&\\mathrm{J}_{m}(x) \\sim \\sqrt{\\frac{2}{\\pi x}}\\cos{(x - m\\pi/2 - \\pi/4)}\\\\
&\\mathrm{N}_{m}(x) \\sim \\sqrt{\\frac{2}{\\pi x}}\\sin{(x - m\\pi/2 - \\pi/4)}
\\end{align}
$$

可见他们都满足“解在无限远处为有限”。

### 递推公式

由贝塞尔函数的级数表达式可以算出

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}x}\\left[\\frac{\\mathrm{J}_{m}(x)}{x^{m}}\\right] &= \\frac{\\mathrm{d}}{\\mathrm{d}x}\\left[\\sum_{k = 0}^{\\infty}{\\frac{(-1)^{k}}{k!\\,\\Gamma(m + k + 1)}\\left(\\frac{1}{2}\\right)^{m + 2k}x^{2k}}\\right]\\\\
&= \\sum_{k = 1}^{\\infty}{\\frac{(-1)^{k}2k}{k!\\,\\Gamma(m + k + 1)}\\left(\\frac{1}{2}\\right)^{m + 2k}x^{2k - 1}}\\\\
&= -\\frac{\\mathrm{J}_{m + 1}(x)}{x^{m}}
\\end{align}
$$

同理可以推出：

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}x}\\left[x^{m}\\mathrm{J}_{m}(x)\\right] = x^{m}\\mathrm{J}_{m - 1}(x)
\\end{align}
$$

上面两式都是贝塞尔函数的线性关系式，由于**诺依曼函数**是正负阶贝塞尔函数的线性组合、**汉克尔函数**是贝塞尔函数和诺依曼函数的线性组合，所以上面的两式也适用于诺依曼函数和汉克尔函数。总之，用 $\\mathrm{Z}_{m}(x)$ 表示三类柱函数，总有：

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}x}\\left[x^{m}\\mathrm{Z}_{m}(x)\\right] = x^{m} \\mathrm{Z}_{m - 1}(x)\\\\
\\frac{\\mathrm{d}}{\\mathrm{d}x}\\left[\\frac{\\mathrm{Z}_{m}(x)}{x^{m}}\\right] = -\\frac{\\mathrm{Z}_{m + 1}(x)}{x^{m}}
\\end{align}
$$

## 贝塞尔方程

### 贝塞尔函数与本征值问题

在文章[《二阶常微分方程的级数解法以及本征值问题》](/posts/mathematics/mmip/3-series-solutions-and-eigenvalue-problems/)中给出了拉普拉斯方程和亥姆霍兹方程在柱坐标系中分离变量的 $\\mu < 0$、$\\mu = 0$、$\\mu > 0$ 三种情况。

而对于圆柱内部的问题，如果在圆柱的侧边有齐次的边界条件，则 $\\mu < 0$ 的情况应当被排除（因为 $\\mu < 0$ 的情况会导向虚宗量贝塞尔方程，其解恒不为零）

在 $\\mu \\ge 0$ 的情况下，$R(\\rho)$ 应是整数 $m$ 阶贝塞尔方程

$$
\\begin{align}
x^{2} \\frac{\\mathrm{d}^{2}R}{\\mathrm{d}x^{2}} + x \\frac{\\mathrm{d}R}{\\mathrm{d}x} + (x^{2} - m^{2})R = 0\\quad (x = \\sqrt{\\mu}\\rho)
\\end{align}
$$

的解，由于圆柱上的自然边界条件，这个方程的两个线性独立解中，我们只需要非负阶贝塞尔函数

$$
\\begin{align}
R(\\rho) = \\mathrm{J}_{m}(x) = \\mathrm{J}_{m}(\\sqrt{\\mu}\\rho)
\\end{align}
$$

#### 第一类齐次边界条件

第一类其次边界条件为 $R(\\rho_{0}) = 0$ ， $\\rho_{0}$ 为圆柱的半径，代入到解中得到 $\\mathrm{J}_{m}(\\sqrt{\\mu}\\rho_{0})$ ，这是一个超越方程，使用工具求解。本征值：

$$
\\begin{align}
\\mu_{n}^{(m,1)} = \\left(\\frac{x_{n}^{(m,1)}}{\\rho_{0}}\\right)^{2} = \\left(\\frac{x_{n}^{(m)}}{\\rho_{0}}\\right)^{2}
\\end{align}
$$

其中 $x_{n}^{(m)}$ 是 $\\mathrm{J}_{m}(x)$ 的第 $n$ 个正零点，而 $x_{n}^{(m,1)}$ 表示 $\\mathrm{J}_{m}(x)$ 在满足第一类齐次边界条件下方程：

$$
\\begin{align}
\\mathrm{J}_{m}(x_{0}) = 0
\\end{align}
$$

的第 $n$ 个正根，故 $x_{n}^{(m,1)} = x_{n}^{(m)}$ 。为什么一定是正根呢，首先 $\\rho_{0} \\neq 0$ ，如果 $\\mu = 0$ ，则原方程退化为简单的常微分方程，其解为：

$$
\\begin{align}
R(\\rho) =
\\begin{cases}
\\begin{aligned}
E + F\\ln{\\rho}\\qquad &(m = 0)\\\\
E\\rho^{m} + \\frac{F}{\\rho^{m}}\\qquad &(m = 1,2,3,\\cdots)
\\end{aligned}
\\end{cases}
\\end{align}
$$

在第一类齐次边界条件下，只有平凡解，无意义。所以， $\\mu = 0$ 不是本征值。

> 贝塞尔函数的零点可以通过下面的公式计算：
>
> $$
> \\begin{aligned}
> x_{n}^{(m)} = A - \\frac{B - 1}{8A}\\left(1 + \\frac{C}{3(4A)^{2}} + \\frac{2D}{15(4A)^{4}} + \\frac{E}{105(4A)^{6}} + \\cdots\\right)
> \\end{aligned}
> $$
>
> 其中：
>
> $$
> \\begin{aligned}
> &A = \\left(m - \\frac{1}{2} + 2n\\right)\\frac{\\pi}{2} B = 4m^{2},\\\\
> &C = 7 B - 31,\\\\
> &D = 83 B^{2} - 982 B + 3779\\\\
> &E = 6949 B^{3} - 153855 B^{2} + 1585743 B - 6277237
> \\end{aligned}
> $$
>
> 可见这个式子十分的逆天。同时，特殊位置的贝塞尔函数存在下面关系：
>
> $$
> \\begin{gathered}
> \\mathrm{J}_{0}(0) = 1,\\quad \\mathrm{J}_{m}(0) = 0
> x \\leftarrow \\infty,\\; \\mathrm{J}_{m}(x) \\sim \\sqrt{1/x} \\cos{(x - m\\pi / 2 - \\pi / 4)}
> \\end{gathered}
> $$
>
> 即 $x \\leftarrow \\infty$ 时，贝塞尔函数近似于三角函数。
>
> 由于：
>
> $$
> \\begin{aligned}
> \\mathrm{J}_{m}(x) = (-1)^{m}\\mathrm{J}_{m}(x)
> \\end{aligned}
> $$
>
> 则贝塞尔函数零点正负成对，绝对值相同。
>
> 由于：
>
> $$
> \\begin{aligned}
> x \\leftarrow \\infty,\\; \\mathrm{J}_{m}(x) \\sim \\sqrt{1/x} \\cos{(x - m\\pi / 2 - \\pi / 4)}
> \\end{aligned}
> $$
>
> 则贝塞尔函数有无穷多个零点
>
> 由于：
>
> $$
> \\begin{aligned}
> \\frac{\\mathrm{d}}{\\mathrm{d}x}\\left[x^{m}\\mathrm{J}_{m}(x)\\right] = x^{m} \\mathrm{J}_{m - 1}(x)
> \\end{aligned}
> $$
>
> 则 $\\mathrm{J}_{m}(x)$ 的绝对值最小的零点比 $\\mathrm{J}_{m + 1}(x)$ 的绝对值最小的零点更接近于零。
>
> 由于：
>
> $$
> \\begin{aligned}
> \\frac{\\mathrm{d}}{\\mathrm{d}x}\\left[\\frac{\\mathrm{J}_{m}(x)}{x^{m}}\\right] = -\\frac{\\mathrm{J}_{m - 1}(x)}{x^{m}}
> \\end{aligned}
> $$
>
> 则 $\\mathrm{J}_{m}(x)$ 与 $\\mathrm{J}_{m + 1}(x)$ 的零点两两相间。

#### 第二类齐次边界条件

第二类齐次边界条件 $R'(\\rho_{0}) = 0$ ，如果 $\\mu = 0$ ，则原方程退化为简单的常微分方程，其解为：

$$
\\begin{align}
R(\\rho) =
\\begin{cases}
\\begin{aligned}
E + F\\ln{\\rho}\\qquad &(m = 0)\\\\
E\\rho^{m} + \\frac{F}{\\rho^{m}}\\qquad &(m = 1,2,3,\\cdots)
\\end{aligned}
\\end{cases}
\\end{align}
$$

在第二类齐次边界条件下，只有平凡解，无意义。所以， $\\mu = 0$ 不是本征值。在 $\\mu \\neq 0$ 的情况下，这个条件即为 $\\mathrm{J}_{m}'(\\sqrt{\\mu}\\rho_{0}) = 0$ ，所以本征值：

$$
\\begin{align}
\\mu_{n}^{(m,2)} = \\left(\\frac{x_{n}^{(m,2)}}{\\rho_{0}}\\right)^{2}
\\end{align}
$$

记 $x_{0} = \\sqrt{\\mu} \\rho_{0}$ ，其中 $x_{n}^{(m,2)}$ 是 $\\mathrm{J}_{m}(x)$ 在第二类齐次边界条件下的方程：

$$
\\begin{align}
\\frac{x_{0}}{\\rho_{0}}\\mathrm{J}_{m}'(x_{0}) = 0
\\end{align}
$$

的第 $n$ 个正根，即 $\\mathrm{J}_{m}'(x)$ 的第 $n$ 个正的零点。在 $m = 0$ 的特例下：

$$
\\begin{align}
\\mathrm{J}_{0}'(x) = -\\mathrm{J}_{1}(x)
\\end{align}
$$

也就是 $x_{n}^{(0,2)} = x_{n}^{(0)}$ ，其他情况下，根据递推公式：

$$
\\begin{align}
\\mathrm{J}_{m - 1}(x) - \\mathrm{J}_{m + 1}(x) = 2 \\mathrm{J}_{m}'(x)
\\end{align}
$$

得知 $\\mathrm{J}_{m}'(x)$ 的零点可以从 $\\mathrm{J}_{m - 1}(x)$ 和 $\\mathrm{J}_{m + 1}(x)$ 的零点得出。

> 贝塞尔函数导数的零点 $x_{n}^{(m,2)} > 0$ 可以使用下面公式计算：
>
> $$
> \\begin{aligned}
> x_{n}^{(m)} = A - \\frac{B + 3}{2(4A)} - \\frac{C}{6(4A)^{3}} - \\frac{D}{15(4A)^{5}} - \\cdots
> \\end{aligned}
> $$
>
> 其中：
>
> $$
> \\begin{aligned}
> &A = \\left(m + \\frac{1}{2} + 2n\\right)\\frac{\\pi}{2}\\\\
> &B = 4m^{2}\\\\
> &C = 7 B^{2} + 82 B - 9\\\\
> &D = 83 B^{3} + 2075 B^{2} - 3039 B + 3537
> \\end{aligned}
> $$
>
> 依旧非常的逆天。

#### 第三类齐次边界条件

第三类齐次边界条件形如 $R(\\rho_{0}) + H R'(\\rho_{0}) = 0$ ，记 $x_{0} = \\sqrt{\\mu}\\rho_{0},\\, h = \\rho_{0} / H$ ，这个条件即为：

$$
\\begin{align}
\\mathrm{J}_{m}(x_{0}) = \\frac{x_{0}}{h + m}\\mathrm{J}_{m + 1}(x_{0})
\\end{align}
$$

第三类齐次边界条件下的本征值为：

$$
\\begin{align}
\\mu_{n}^{(m,3)} = \\left(\\frac{x_{n}^{(m,3)}}{\\rho_{0}}\\right)^{2}
\\end{align}
$$

其中 $x_{n}^{(m,3)}$ 是方程的第 $n$ 个正根。这玩意儿……直接查表 ~~（不想查你就算吧）~~

> 后面统一使用 $x_{n}^{(m)}$ 表示 $\\mathrm{J}_{m}(x)$ 的第 $n$ 个正零点， $x_{m}^{(m,t)},\\mu_{n}^{(m,t)}$ 表示第 $t$ 类齐次边界条件下的第 $n$ 个正根或者本征值。不指明齐次边界条件种类的话，记本征值为 $\\mu_{n}^{(m)}$ 或者 $\\mu_{n}$ 。

### 贝塞尔函数的正交关系

贝塞尔函数是施图姆-刘维尔本征值问题正交关系的特例，对应于不同本征值的同节贝塞尔函数在区间 $[0,\\rho_{0}]$ 上带权重 $\\rho$ 正交：

$$
\\begin{align}
\\int_{0}^{\\rho_{0}}{\\mathrm{J}_{m}(\\sqrt{\\mu_{m}}\\rho)\\mathrm{J}_{m}(\\sqrt{\\mu_{l}}\\rho)\\rho\\,\\mathrm{d}\\rho} = 0\\quad (n \\neq l)
\\end{align}
$$

### 贝塞尔函数的模

下面计算贝塞尔函数 $\\mathrm{J}_{m}\\left(\\sqrt{\\mu_{n}^{(m)}}\\rho\\right)$ 的模：

$$
\\begin{align}
\\left[N_{n}^{(m)}\\right]^{2} = \\int_{0}^{\\rho_{0}}{\\left[\\mathrm{J}_{m}\\left(\\sqrt{\\mu_{n}^{(m)}}\\rho\\right)\\right]^{2}\\rho\\,\\mathrm{d}\\rho}
\\end{align}
$$

记 $\\sqrt{\\mu_{n}^{(m)}}\\rho = x,\\sqrt{\\mu_{n}^{(m)}}\\rho_{0} = x_{0}$ ，则：

$$
\\begin{align}
\\left[N_{n}^{(m)}\\right]^{2} &= \\frac{1}{\\mu_{n}^{(m)}}\\int_{0}^{x_{0}}{\\left[\\mathrm{J}_{m}(x)\\right]^{2}x\\,\\mathrm{d}x}\\\\
&= \\frac{1}{2\\mu_{n}^{(m)}}\\int_{0}^{x_{0}}{\\left[\\mathrm{J}_{m}(x)\\right]^{2}\\,\\mathrm{d}(x^{2})}\\\\
&= \\frac{1}{2\\mu_{n}^{(m)}}\\left[x^{2}\\mathrm{J}_{m}^{2}(x)\\right]_{0}^{x_{0}} - \\frac{1}{\\mu_{n}^{(m)}}\\int_{0}^{x_{0}}{\\left[x^{2}\\mathrm{J}_{m}(x)\\right]\\mathrm{J}_{m}'(x)\\,\\mathrm{d}x}\\\\
&= \\frac{1}{2\\mu_{n}^{(m)}}\\left[x^{2}\\mathrm{J}_{m}^{2}\\right]_{0}^{x_{0}} - \\frac{1}{\\mu_{n}^{(m)}}\\int_{0}^{x_{0}}{\\left[x^{2}\\mathrm{J}''_{m} + x\\mathrm{J}'_{m} - m^{2}\\mathrm{J}_{m}\\right]\\mathrm{J}'_{m}\\,\\mathrm{d}x}
\\end{align}
$$

最后得到：

$$
\\begin{align}
\\left[N_{n}^{(m)}\\right]^{2} = \\frac{1}{2}\\left(\\rho_{0}^{2} - \\frac{m^{2}}{\\mu_{n}^{(m)}}\\right)\\left[\\mathrm{J}_{m}(\\sqrt{\\mu_{n}^{(m)}}\\rho_{0})\\right]^{2} + \\frac{1}{2}\\rho_{0}^{2}\\left[\\mathrm{J}'_{m}(\\sqrt{\\mu_{n}^{(m)}}\\rho_{0})\\right]^{2}
\\end{align}
$$

分别代入三类齐次边界条件：

- 第一类边界条件：

  $$
  \\begin{align}
  \\left[N_{n}^{(m)}\\right]^{2} = \\frac{1}{2} \\rho_{0}^{2} \\left[\\mathrm{J}_{m + 1} (\\sqrt{\\mu_{n}^{(m)}}\\rho_{0})\\right]^{2}
  \\end{align}
  $$

- 第二类边界条件：

  $$
  \\begin{align}
  \\left[N_{n}^{(m)}\\right]^{2} = \\frac{1}{2} \\left(\\rho_{0}^{2} - \\frac{m^{2}}{\\mu_{n}^{(m)}}\\right) \\left[\\mathrm{J}_{m + 1} (\\sqrt{\\mu_{n}^{(m)}}\\rho_{0})\\right]^{2}
  \\end{align}
  $$

- 第三类边界条件：

  $$
  \\begin{align}
  \\left[N_{n}^{(m)}\\right]^{2} = \\frac{1}{2} \\left(\\rho_{0}^{2} - \\frac{m^{2}}{\\mu_{n}^{(m)}} + \\frac{\\rho_{0}^{2}}{\\mu_{n}^{(m)}\\mathrm{H}}\\right) \\left[\\mathrm{J}_{m + 1} (\\sqrt{\\mu_{n}^{(m)}}\\rho_{0})\\right]^{2}
  \\end{align}
  $$

### 傅里叶-贝塞尔级数

根据施图姆-刘维尔本征值问题的性质，本征函数组 $\\mathrm{J}_{m}(\\sqrt{\\mu_{n}^{(m)}})$ 是完备的，可以作广义傅里叶级数展开的基。在区间 $[0,\\rho_{0}]$ 上的函数 $f(\\rho)$ 的傅里叶-贝塞尔级数是：

$$
\\begin{align}
\\begin{cases}
\\begin{aligned}
&f(\\rho) = \\sum_{n = 1}^{\\infty}{f_{n}\\,\\mathrm{J}_{m}\\left(\\sqrt{\\mu_{n}^{(m)}}\\rho\\right)}\\\\
&f_{n} = \\frac{1}{\\left[N_{n}^{(m)}\\right]^{2}}\\int_{0}^{\\rho_{0}}{f(\\rho)\\mathrm{J}_{m}\\left(\\sqrt{\\mu_{n}^{(m)}}\\rho\\right)\\,\\rho\\mathrm{d}\\rho}
\\end{aligned}
\\end{cases}
\\end{align}
$$

> 计算 $f_{n}$ 时，可以使用下面的积分公式，分别是对之前结论的应用：
>
> $$
> \\begin{gathered}
> \\int{x^{-m}\\mathrm{J}_{m + 1}(x)\\,\\mathrm{d}x} = -x^{-m}\\mathrm{J}_{m}(x) + C\\\\
> \\int{\\mathrm{J}_{1}(x)\\,\\mathrm{d}x} = -\\mathrm{J}_{0}(x) + C\\\\
> \\int{x_{m}\\mathrm{J}_{m - 1}(x)\\,\\mathrm{d}x} = x^{m}\\mathrm{J}_{m}(x) + C
> \\end{gathered}
> $$

对于 $\\rho_{0} \\rightarrow \\infty$ 的情况，有傅里叶-贝塞尔积分：

$$
\\begin{align}
\\begin{cases}
\\begin{aligned}
&f(\\rho) = \\int_{0}^{infty}{F(\\omega)\\mathrm{J}_{m}(\\omega\\rho)\\omega\\,\\mathrm{d}\\omega}\\\\
&F(\\omega) = \\int_{0}^{infty}{f(\\rho)\\mathrm{J}_{m}(\\omega\\rho)\\rho\\,\\mathrm{d}\\rho}
\\end{aligned}
\\end{cases}
\\end{align}
$$

### 母函数

将 $e^{\\frac{1}{2}xz}$ 和 $e^{-\\frac{1}{2}x\\frac{1}{z}}$ 分别展开为绝对收敛级数，逐项相乘得到：

$$
\\begin{align}
e^{\\frac{1}{2}x\\left(z-\\frac{1}{z}\\right)} = \\sum_{m = 0}^{\\infty}{\\left[\\sum_{n = 0}^{\\infty}{\\frac{(-1)^{n}}{(m + n)!n!}\\left(\\frac{x}{2}\\right)^{m + 2n}}\\right]z^{m}} + \\sum_{m = -1}^{-\\infty}{\\left[(-1)^{m}\\sum_{n = 0}^{\\infty}{\\frac{(-1)^{n}}{n!(|m| + n)!}\\left(\\frac{x}{2}\\right)^{|m| + 2n}}\\right]z^{m}}\\qquad(0 < |z| < \\infty)
\\end{align}
$$

上式的前一个求和的 $[\\quad]$ 内为 $m$ 阶贝塞尔函数，后面一个 $[\\quad]$ 是 $(-1)^{m}\\mathrm{J}_{|m|}(x)$ ，所以：

$$
\\begin{align}
e^{\\frac{1}{2}x(z - \\frac{1}{z})} =\\sum_{m = -\\infty}^{\\infty}{\\mathrm{J}_{m}(x)z^{m}}\\quad (0 < |z| < \\infty)
\\end{align}
$$

所以 $e^{\\frac{1}{2}x(z - \\frac{1}{z})}$ 叫做**贝塞尔函数的母函数**。

> 令 $z = e^{\\mathrm{i}\\zeta}$ ，上式改写为：
>
> $$
> \\begin{align}
> e^{\\mathrm{i}x\\sin{\\zeta}} = \\sum_{m = -\\infty}^{\\infty}{\\mathrm{J}_{m}(x)e^{\\mathrm{i}m\\zeta}}
> \\end{align}
> $$
>
> 又令 $\\zeta = \\psi - \\frac{\\pi}{2}$ ：
>
> $$
> \\begin{align}
> e^{\\mathrm{i}x\\cos{\\psi}} = \\sum_{m = -\\infty}^{\\infty}{(-\\mathrm{i})^{m}\\mathrm{J}_{m}(x)e^{\\mathrm{i}m\\psi}}
> \\end{align}
> $$
>
> 再令 $\\psi = \\theta + \\pi$ :
>
> $$
> \\begin{align}
> e^{\\mathrm{i}x\\cos{\\theta}} = \\sum_{m = -\\infty}^{\\infty}{\\mathrm{i}^{m}\\mathrm{J}_{m}(x)e^{\\mathrm{i}m\\theta}}
> \\end{align}
> $$
>
> 上述公式都是等价的。

#### 加法公式

考虑 $\\mathrm{J}_{m}(a + b)$ ：

$$
\\begin{align}
\\sum_{m = -\\infty}^{+\\infty}{\\mathrm{J}_{m}(a + b) z^{m}} &= e^{\\frac{1}{2}(a + b)(z - \\frac{1}{z})} = e^{\\frac{1}{2}a(z - \\frac{1}{z})}e^{\\frac{1}{2}b(z - \\frac{1}{z})}\\\\
&= \\sum_{k = -\\infty}^{+\\infty}{\\mathrm{J}_{k}(a) z^{k}}\\sum_{n = -\\infty}^{+\\infty}{\\mathrm{J}_{n}(b) z^{n}}
\\end{align}
$$

于是得出：

$$
\\begin{align}
\\mathrm{J}_{m}(a + b) = \\sum_{k = -\\infty}^{+\\infty}{\\mathrm{J}_{k}(a)\\mathrm{J}_{m - k}(b)}
\\end{align}
$$

$$
H = \\frac{1}{2}
$$

这就是贝塞尔函数的加法公式

## 虚宗量贝塞尔函数

如果圆柱上下底面边界条件齐次，但是侧面边界条件非齐次，这时齐次方程 $Z'' - \\mu Z = 0$ 和上下底面的齐次边界条件构成本征值问题，当 $\\mu < 0$ 时，就引入虚宗量贝塞尔方程

$$
\\begin{align}
x^{2}R''(x) + x R'(x) - (x^{2} + m^{2})R(x) = 0\\quad (x = \\sqrt{-\\mu}\\rho)
\\end{align}
$$

方程的解为：

$$
\\begin{align}
R(x) = \\mathrm{I}_{m}(x) = \\sum_{k = 0}^{\\infty}\\frac{1}{k! \\Gamma(k + m + 1)}\\left(\\frac{x}{2}\\right)^{m + 2k}
\\end{align}
$$

对于整数 $m$ ，$\\mathrm{I}_{m}(x) = \\mathrm{I}_{-m}(x)$ ，不是线性独立的，需要寻找另外一个解（也就是虚宗量的汉克尔函数和虚宗量的诺伊曼函数）：

$$
\\begin{align}
\\mathrm{K}_{m}(x) = \\frac{\\pi}{2}\\frac{\\mathrm{I}_{-m}(x) - \\mathrm{I}_{m}(x)}{\\sin{m\\pi}}
\\end{align}
$$

这就是**虚宗量的汉克尔函数**，对于 $m$ 是整数时，有：

$$
\\begin{align}
\\mathrm{K}_{m}(x) = \\frac{\\pi}{2}\\mathrm{i}^{m + 1}\\left[\\mathrm{J}_{m}(\\mathrm{i}x) + \\mathrm{i}\\mathrm{N}_{m}(\\mathrm{i}x)\\right]
\\end{align}
$$

化简得：

$$
\\begin{align}
\\mathrm{K}_{m}(x) = \\frac{1}{2}\\sum_{n = 0}^{m - 1}{(-1)^{n}\\frac{(m - n - 1)!}{n!}\\left(\\frac{x}{2}\\right)^{-m + 2n}} + (-1)^{m + 1}\\sum_{n = 0}^{\\infty}{\\frac{1}{n!\\,\\Gamma{(m + n + 1)}}\\left\\{\\ln{\\frac{x}{2}} - \\frac{1}{2}\\left[\\psi(m + n + 1) + \\psi(n + 1)\\right]\\right\\}\\left(\\frac{x}{2}\\right)^{m + 2n}}\\quad (m = 0,1,2,\\cdots,\\,|\\mathrm{arg}| < \\pi)
\\end{align}
$$

### 一些行为

当 $x \\rightarrow 0$ 时：

$$
\\begin{align}
\\mathrm{I}_{1}(0) = 1,\\quad \\mathrm{I}_{m}(0) = 0,\\quad \\mathrm{K}_{m}(x) \\rightarrow \\infty
\\end{align}
$$

当 $x \\rightarrow \\infty$ 时，有渐近公式：

$$
\\begin{gather}
\\mathrm{I}_{m}(x) = \\frac{1}{2\\sqrt{x}}e^{x}\\\\
\\mathrm{K}_{m}(x) = \\frac{\\pi}{2\\sqrt{x}}e^{-x}
\\end{gather}
$$

## 球贝塞尔方程

对亥姆霍兹方程：

$$
\\begin{align}
\\Delta u + k^{2} u = 0
\\end{align}
$$

用球坐标进行分离变量，得到球贝塞尔方程：

$$
\\begin{align}
r^{2} R''(r) + 2 r R'(r) + \\left[k^{2} r^{2} - l(l + 1)\\right] R(r) = 0
\\end{align}
$$

不难看出 $r = 0$ 是正则奇点。

为了消去系数 $2$ ，把自变量 $r$ 和函数 $R(r)$ 做如下变换：

$$
\\begin{align}
x = kr,\\quad y(x) = \\sqrt{\\frac{2x}{\\pi}}R(r)
\\end{align}
$$

则方程化为 $l + \\frac{1}{2}$ 阶的贝塞尔方程：

$$
\\begin{align}
x^{2} y''(x) + x y'(x) + \\left[x^{2} - \\left(l + \\frac{1}{2}\\right)^{2}\\right] y(x) = 0
\\end{align}
$$

若 $k = 0$ ，则方程退化为：

$$
\\begin{align}
r^{2} R''(r) + 2 r R'(r) - l(l + 1) R(r) = 0
\\end{align}
$$

其解为

$$
\\begin{align}
R(r) = A r^{l} + \\frac{B}{r^{l + 1}}
\\end{align}
$$

接下来讨论 $k \\neq 0$ 的情况。

### 线性独立解

$l + \\frac{1}{2}$ 阶贝塞尔方程有如下几种解

$$
\\begin{align}
\\mathrm{J}_{l + 1/2}(x),\\quad \\mathrm{J}_{-(l + 1/2)}(x),\\quad \\mathrm{N}_{l + 1/2}(x),\\quad \\mathrm{H}_{l + 1/2}^{(1)}(x),\\quad \\mathrm{H}_{l + 1/2}^{(2)}(x)
\\end{align}
$$

在其中任取两个就组成了 $l + \\frac{1}{2}$ 阶贝塞尔方程的线性独立解。这样，球贝塞尔方程的线性独立解也就是下列五种之中任取的两种：

- 球贝塞尔函数：

  $$
  \\begin{gather}
  \\mathrm{j}_{l}(x) = \\sqrt{\\frac{\\pi}{2x}}\\mathrm{J}_{l + 1/2}(x)\\\\
  \\mathrm{j}_{-l}(x) = \\sqrt{\\frac{\\pi}{2x}}\\mathrm{J}_{-l + 1/2}(x)
  \\end{gather}
  $$

- 球诺伊曼函数：

  $$
  \\begin{align}
  \\mathrm{n}_{l}(x) = \\sqrt{\\frac{\\pi}{2x}}\\mathrm{N}_{l + 1/2}(x)
  \\end{align}
  $$

- 球汉克尔函数：

  $$
  \\begin{gather}
  \\mathrm{h}_{l}^{(1)}(x) = \\sqrt{\\frac{\\pi}{2x}}\\mathrm{H}_{l + 1/2}^{(1)}(x)\\\\
  \\mathrm{h}_{l}^{(2)}(x) = \\sqrt{\\frac{\\pi}{2x}}\\mathrm{H}_{l + 1/2}^{(2)}(x)
  \\end{gather}
  $$

我们现在考虑一个最简单的情况：$l = 0$

此时有：

$$
\\begin{align}
\\mathrm{J}_{1/2}(x) &= \\sum_{k = 0}^{\\infty}{\\frac{(-1)^{k}}{k!\\,\\Gamma(k + 1 + \\frac{1}{2})}\\left(\\frac{x}{2}\\right)^{\\frac{1}{2} + 2k}}\\\\
&= \\sqrt{\\frac{2}{x}} \\sum_{k = 0}^{\\infty}{\\frac{(-1)^{k}}{k!\\,\\Gamma(k + 1 + \\frac{1}{2})}\\left(\\frac{x}{2}\\right)^{2k + 1}}
\\end{align}
$$

有：

$$
\\begin{align}
\\Gamma(k + \\frac{3}{2}) &= (k + \\frac{1}{2})\\,\\Gamma(k + \\frac{1}{2})\\\\
&= \\frac{1}{2^{k}}(2k + 1)(2k - 1)\\cdots \\Gamma(\\frac{1}{2})\\\\
&= \\frac{1}{2^{k}}(2k + 1)(2k - 1)\\cdots \\sqrt{\\pi}
\\end{align}
$$

代入得：

$$
\\begin{align}
\\mathrm{J}_{1/2}(x) &= \\sqrt{\\frac{2}{\\pi x}}\\sum_{k = 0}^{\\infty}{\\frac{(-1)^{k}}{(2k + 1)!} x^{2k + 1}}\\\\
&= \\sqrt{\\frac{2}{\\pi x}}\\sin{x}
\\end{align}
$$

同理可得：

$$
\\begin{align}
\\mathrm{J}_{-1/2}(x) = \\sqrt{\\frac{2}{\\pi x}}\\cos{x}
\\end{align}
$$

把这两个式子带回到 $R_{1/2}(r)$ 有：

$$
\\begin{align}
R_{1/2}(r) = \\sqrt{\\frac{\\pi}{2 x}}\\mathrm{J}_{1/2}(x) = \\frac{\\sin{x}}{x} = \\frac{\\sin{kr}}{kr} \\equiv j_{0}(x)
\\end{align}
$$

将这个式子定义为零阶球贝塞尔函数 $j_{0}(x)$ ，并且把：

$$
\\begin{align}
j_{l}(x) \\equiv \\sqrt{\\frac{\\pi}{2x}}\\mathrm{J}_{l + 1/2}(x)
\\end{align}
$$

称为 $l$ 阶球贝塞尔函数。

这种定义对 **$l$ 阶球诺伊曼函数** 和 **$l$ 阶球汉克尔函数** 有同样的声明

对诺伊曼函数，有：

$$
\\begin{align}
\\mathrm{N}_{l + 1/2}(x) = \\frac{\\mathrm{J}_{l + 1/2}(x) \\cos{[(l + 1/2)\\pi]} - \\mathrm{J}_{-(l + 1/2)}(x)}{\\sin{[(l + 1/2)\\pi]}} = (-1)^{l + 1}\\mathrm{J}_{-(l + 1/2)}(x)
\\end{align}
$$

于是可以得到：

$$
\\begin{align}
n_{0}(x) = -\\frac{\\cos{x}}{x}\\,\\quad n_{-1}(x) = \\frac{\\sin{x}}{x}
\\end{align}
$$

同理由汉克尔函数得定义可以得到：

$$
\\begin{align}
h_{l}^{(1)}(x) = j_{l}(x) + \\mathrm{i}n_{l}(x),\\quad h_{l}^{(2)}(x) = j_{l}(x) - \\mathrm{i}n_{l}(x)
\\end{align}
$$

### 球形区域内得本征值问题

球贝塞尔方程是施图姆-刘维尔型方程，即：

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}r}\\left(r^{2}\\frac{\\mathrm{d}R}{\\mathrm{d}r}\\right) - l(l + 1)R + k^{2} r^{2} R = 0
\\end{align}
$$

其中 $k^{2}$ 为本征值，$r^{2}$ 为权重系数。方程在 $r = 0$ 处有自然边界条件，所以取 $j_{l}(kr)$ ，舍弃 $n_{l}(kr)$ ，并且 $j_{l}(kr)$ 应当满足球面上得边界条件，这决定了本征值。对应不同本征值得本征函数在 $[0,r_{0}]$ 上带权重 $r^{2}$ 正交：

$$
\\begin{align}
\\int_{0}^{r_{0}}{j_{l}(k_{m}r)j_{l}(k_{n}r)r^{2}\\,\\mathrm{d}r} = 0\\quad (k_{m} \\neq k_{n})
\\end{align}
$$

本征函数簇 $j_{l}(k_{m}r)(m = 1,2,3,\\cdots)$ 是完备的，可以作为广义傅里叶级数展开的基：

$$
\\begin{align}
\\begin{cases}
\\begin{aligned}
&f(r) = \\sum_{m = 1}^{\\infty}{f_{m}j_{l}(k_{m}r)}\\\\
&\\text{系数}f_{m} = \\frac{1}{[N_{m}]^{2}}\\int_{0}^{r_{0}}{f(r)j_{l}(k_{m}r)r^{2}\\,\\mathrm{d}r}
\\end{aligned}
\\end{cases}
\\end{align}
$$

式中的 $N_{m}$ 是本征函数 $j_{l}(k_{m}r)$ 的模：

$$
\\begin{align}
[N_{m}]^{2} = \\int_{0}^{r_{0}}{[j_{l}(k_{m}r)]^{2}r^{2}\\,\\mathrm{d}r} = \\frac{\\pi}{2k_{m}}\\int_{0}^{r_{0}}{[\\mathrm{J}_{l + 1/2}(k_{m}r)]^{2}r\\,\\mathrm{d}r}
\\end{align}
$$

- 第一类齐次边界条件：

  $$
  \\begin{align}
  [N_{m}]^{2} = \\frac{\\pi r_{0}^{2}}{4k_{m}}\\left[\\mathrm{J}'_{l + 1/2}(k_{m}r_{0})\\right]^{2}
  \\end{align}
  $$

- 第二类齐次边界条件：

  $$
  \\begin{align}
  [N_{m}]^{2} = \\frac{\\pi}{4k_{m}}\\left[r_{0}^{2} - \\frac{l(l + 1)}{k_{m}^{2}}\\right]\\left[\\mathrm{J}_{l + 1/2}(k_{m}r_{0})\\right]^{2}
  \\end{align}
  $$

- 第三类齐次边界条件：

  $$
  \\begin{align}
  [N_{m}]^{2} = \\frac{\\pi}{4k_{m}}\\left[r_{0}^{2} + \\frac{(r_{0}/H)(r_{0}/H - 1) - l(l + 1)}{k_{m}^{2}}\\right]\\left[\\mathrm{J}_{l + 1/2}(k_{m}r_{0})\\right]^{2}
  \\end{align}
  $$
`,$={title:"柱函数",author:"NeoWangKing",date:new Date(1773925985e3),lastMod:new Date(1773925985e3),tags:["数学","数学物理方法","柱函数","贝塞尔函数","诺伊曼函数"],category:["数学","数学物理方法"],summary:"本文介绍柱坐标系下分离变量引出的柱函数，包括贝塞尔方程、贝塞尔函数、诺伊曼函数、汉克尔函数及其性质、递推关系、正交性与展开，以及虚宗量柱函数。",comments:!0,draft:!1,sticky:0},t={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/mathematics/MMiP/5-Cylindrical-Functions.md",rawData:void 0};export{t as _internal,a as body,m as collection,$ as data,n as id,r as slug};
