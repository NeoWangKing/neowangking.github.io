const n="physics/Electrodynamics/3-Potentials-Fields-Relativity.md",a="posts",l="physics/electrodynamics/3-potentials-fields-relativity",$=`
## 势与场

### 矢势与标势的引入

在电动力学中，为了简化麦克斯韦方程组的求解，我们引入矢势 $\\boldsymbol{A}$ 和标势 $V$。由磁场的无散性，可令

$$
\\begin{align}
\\boldsymbol{B} = \\nabla \\times \\boldsymbol{A}
\\end{align}
$$

代入法拉第定律 $\\nabla \\times \\boldsymbol{E} = -\\partial \\boldsymbol{B}/\\partial t$，得

$$
\\begin{align}
\\nabla \\times \\left( \\boldsymbol{E} + \\frac{\\partial \\boldsymbol{A}}{\\partial t} \\right) = 0
\\end{align}
$$

因此括号内的矢量可以表示为某标量函数的梯度，令

$$
\\begin{align}
\\boldsymbol{E} + \\frac{\\partial \\boldsymbol{A}}{\\partial t} = -\\nabla V
\\end{align}
$$

于是电场可表示为

$$
\\begin{align}
\\boldsymbol{E} = -\\nabla V - \\frac{\\partial \\boldsymbol{A}}{\\partial t}
\\end{align}
$$

将上述表达式代入麦克斯韦方程组中的高斯定律和安培定律，得到关于势的方程：

$$
\\begin{align}
\\nabla^2 V + \\frac{\\partial}{\\partial t} (\\nabla \\cdot \\boldsymbol{A}) = -\\frac{1}{\\epsilon_0} \\rho
\\end{align}
$$

$$
\\begin{align}
\\nabla^2 \\boldsymbol{A} - \\mu_0 \\epsilon_0 \\frac{\\partial^2 \\boldsymbol{A}}{\\partial t^2} - \\nabla \\left( \\nabla \\cdot \\boldsymbol{A} + \\mu_0 \\epsilon_0 \\frac{\\partial V}{\\partial t} \\right) = -\\mu_0 \\boldsymbol{J}
\\end{align}
$$

### 规范变换

势 $(\\boldsymbol{A}, V)$ 的选取不是唯一的，因为可以作如下变换而不改变电场和磁场：

$$
\\begin{align}
\\boldsymbol{A}' = \\boldsymbol{A} + \\nabla \\lambda, \\quad V' = V - \\frac{\\partial \\lambda}{\\partial t}
\\end{align}
$$

其中 $\\lambda$ 是任意标量函数。这种变换称为 **规范变换**，电场和磁场在规范变换下保持不变。

### 库仑规范

库仑规范要求 $\\nabla \\cdot \\boldsymbol{A} = 0$。在此规范下，标势方程简化为泊松方程：

$$
\\begin{align}
\\nabla^2 V = -\\frac{1}{\\epsilon_0} \\rho
\\end{align}
$$

而矢势方程变为

$$
\\begin{align}
\\nabla^2 \\boldsymbol{A} - \\mu_0 \\epsilon_0 \\frac{\\partial^2 \\boldsymbol{A}}{\\partial t^2} = -\\mu_0 \\boldsymbol{J} + \\mu_0 \\epsilon_0 \\nabla \\frac{\\partial V}{\\partial t}
\\end{align}
$$

库仑规范中标势 $V$ 由瞬时电荷分布决定，类似于静电场情形，但矢势的方程仍较复杂。

### 洛伦兹规范

洛伦兹规范要求

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{A} + \\mu_0 \\epsilon_0 \\frac{\\partial V}{\\partial t} = 0
\\end{align}
$$

在此规范下，势的方程解耦为对称形式的达朗贝尔方程：

$$
\\begin{align}
\\nabla^2 V - \\mu_0 \\epsilon_0 \\frac{\\partial^2 V}{\\partial t^2} = -\\frac{1}{\\epsilon_0} \\rho
\\end{align}
$$

$$
\\begin{align}
\\nabla^2 \\boldsymbol{A} - \\mu_0 \\epsilon_0 \\frac{\\partial^2 \\boldsymbol{A}}{\\partial t^2} = -\\mu_0 \\boldsymbol{J}
\\end{align}
$$

引入达朗贝尔算符 $\\Box^2 = \\nabla^2 - \\mu_0 \\epsilon_0 \\dfrac{\\partial^2}{\\partial t^2}$，方程可简洁地写为

$$
\\begin{align}
\\Box^2 V = -\\frac{1}{\\epsilon_0} \\rho, \\quad \\Box^2 \\boldsymbol{A} = -\\mu_0 \\boldsymbol{J}
\\end{align}
$$

洛伦兹规范在狭义相对论中具有特别重要的地位，因为它使势方程具有洛伦兹协变性。

## 狭义相对论

### 爱因斯坦的基本假设

1. **相对性原理**：所有物理定律在一切惯性参考系中形式相同。
2. **光速不变原理**：真空中的光速对所有惯性观察者都相同，与光源运动无关。

光速 $c = 1/\\sqrt{\\mu_0\\epsilon_0} \\approx 3\\times 10^8\\,\\mathrm{m/s}$ 是宇宙常数，不存在绝对静止的“以太”。

### 爱因斯坦速度叠加公式

在相对论中，速度不再满足伽利略叠加，而是

$$
\\begin{align}
v_1 = \\frac{v_2 + v_{21}}{1 + \\dfrac{v_2 v_{21}}{c^2}}
\\end{align}
$$

其中 $v_1$ 是物体在惯性系 $S_1$ 中的速度，$v_2$ 是在 $S_2$ 中的速度，$v_{21}$ 是 $S_2$ 相对 $S_1$ 的速度。若 $v_2 = c$，则 $v_1 = c$，符合光速不变。

### 同时性的相对性

在一列匀速运动的火车中点处发出一闪光，在火车参考系中，光同时到达前后两端；但在地面参考系中，由于光速不变且火车在运动，光到达后端比前端更早。因此，不同惯性系对同时性的判断不同。

### 时间膨胀

考虑火车上的一束光垂直射向地板，在火车参考系中，光走的高度为 $h$，时间为 $\\Delta \\bar{t} = h/c$。在地面参考系中，由于火车运动，光走的路径为斜线，长度为 $\\sqrt{h^2 + (v\\Delta t)^2}$，因此

$$
\\begin{align}
c\\Delta t = \\sqrt{h^2 + (v\\Delta t)^2} \\quad \\Rightarrow \\quad \\Delta t = \\frac{h/c}{\\sqrt{1-v^2/c^2}} = \\gamma \\Delta \\bar{t}
\\end{align}
$$

其中 $\\gamma = 1/\\sqrt{1-v^2/c^2}$。可见，运动时钟变慢——**时间膨胀**。反之，在火车上的观察者也会看到地面上的时钟变慢，两者都是正确的，这是相对论的对称性。

### 长度收缩

考虑一列长度为 $\\Delta \\bar{x}$ 的车厢（在自身静止系中的长度），以速度 $v$ 相对于地面运动。在地面系中测量其长度，需要同时记录两端的位置。设光从后端发出，经前端反射回后端。在车厢系中，光往返时间为 $\\Delta \\bar{t} = 2\\Delta \\bar{x}/c$。在地面系中，设车厢长度为 $\\Delta x$，则光从前端到后端的时间满足

$$
\\begin{align}
\\Delta t_1 = \\frac{\\Delta x + v\\Delta t_1}{c}, \\quad \\Delta t_2 = \\frac{\\Delta x - v\\Delta t_2}{c}
\\end{align}
$$

解得 $\\Delta t_1 = \\dfrac{\\Delta x}{c-v}$，$\\Delta t_2 = \\dfrac{\\Delta x}{c+v}$，总时间 $\\Delta t = \\Delta t_1 + \\Delta t_2 = \\dfrac{2\\Delta x}{c(1-v^2/c^2)} = \\dfrac{2\\gamma^2 \\Delta x}{c}$。由时间膨胀，$\\Delta t = \\gamma \\Delta \\bar{t} = \\dfrac{2\\gamma \\Delta \\bar{x}}{c}$，比较得

$$
\\begin{align}
\\Delta x = \\frac{1}{\\gamma} \\Delta \\bar{x}
\\end{align}
$$

即运动物体在运动方向上长度收缩。

### 洛伦兹变换

设惯性系 $\\bar{S}$ 以速度 $v$ 沿 $x$ 轴方向相对于 $S$ 系运动，且两系原点在 $t=0$ 时重合。洛伦兹变换为

$$
\\begin{align}
\\bar{x} &= \\gamma (x - vt) \\\\
\\bar{y} &= y \\\\
\\bar{z} &= z \\\\
\\bar{t} &= \\gamma \\left( t - \\frac{v}{c^2} x \\right)
\\end{align}
$$

其逆变换为

$$
\\begin{align}
x &= \\gamma (\\bar{x} + vt) \\\\
y &= \\bar{y} \\\\
z &= \\bar{z} \\\\
t &= \\gamma \\left( \\bar{t} + \\frac{v}{c^2} \\bar{x} \\right)
\\end{align}
$$

其中 $\\gamma = 1/\\sqrt{1-v^2/c^2}$。

### 闵可夫斯基时空与四维矢量

#### 四维坐标

定义四维坐标 $x^\\mu$（$\\mu = 0,1,2,3$）：

$$
\\begin{align}
x^0 = ct, \\quad x^1 = x, \\quad x^2 = y, \\quad x^3 = z
\\end{align}
$$

洛伦兹变换可写为矩阵形式：

$$
\\begin{align}
\\begin{pmatrix} \\bar{x}^0 \\\\ \\bar{x}^1 \\\\ \\bar{x}^2 \\\\ \\bar{x}^3 \\end{pmatrix} =
\\begin{pmatrix}
\\gamma & -\\gamma\\beta & 0 & 0 \\\\
-\\gamma\\beta & \\gamma & 0 & 0 \\\\
0 & 0 & 1 & 0 \\\\
0 & 0 & 0 & 1
\\end{pmatrix}
\\begin{pmatrix} x^0 \\\\ x^1 \\\\ x^2 \\\\ x^3 \\end{pmatrix}
\\end{align}
$$

其中 $\\beta = v/c$。通常记 $\\bar{x}^\\mu = \\Lambda^\\mu_{\\ \\nu} x^\\nu$。

#### 四维矢量的点积与度规

定义度规 $g_{\\mu\\nu}$ 为

$$
\\begin{align}
g_{00} = -1, \\quad g_{11} = g_{22} = g_{33} = 1
\\end{align}
$$

四维矢量的点积（内积）定义为

$$
\\begin{align}
(a,b) = g_{\\mu\\nu} a^\\mu b^\\nu = -a^0 b^0 + a^1 b^1 + a^2 b^2 + a^3 b^3
\\end{align}
$$

该点积在洛伦兹变换下不变。

协变矢量 $a_\\mu$ 定义为

$$
\\begin{align}
a_0 = -a^0, \\quad a_1 = a^1, \\quad a_2 = a^2, \\quad a_3 = a^3
\\end{align}
$$

于是点积可写为 $a_\\mu b^\\mu$（爱因斯坦求和约定）。

#### 时空间隔与因果结构

对于两个事件，定义间隔 $I$ 为

$$
\\begin{align}
I = (\\Delta x)_\\mu (\\Delta x)^\\mu = - (c\\Delta t)^2 + (\\Delta x)^2 + (\\Delta y)^2 + (\\Delta z)^2
\\end{align}
$$

间隔是洛伦兹不变量。根据 $I$ 的符号，可将事件分为三类：

- **类时间隔**（$I<0$）：可通过小于光速的信号联系，存在因果关联。
- **类空间隔**（$I>0$）：无法用光速或亚光速信号联系，无因果关联。
- **类光间隔**（$I=0$）：正好可用光信号联系。

在闵可夫斯基图中，未来光锥、过去光锥和现在区域由间隔划分。

### 四维速度与四维动量

#### 固有时

对于运动的粒子，定义固有时 $\\tau$ 为粒子静止系中的时间：

$$
\\begin{align}
\\mathrm{d}\\tau = \\sqrt{1 - \\frac{u^2}{c^2}} \\, \\mathrm{d}t = \\frac{1}{\\gamma} \\mathrm{d}t
\\end{align}
$$

固有时是洛伦兹标量。

#### 四维速度

四维速度定义为

$$
\\begin{align}
\\eta^\\mu = \\frac{\\mathrm{d}x^\\mu}{\\mathrm{d}\\tau} = \\left( \\gamma c, \\gamma \\boldsymbol{u} \\right)
\\end{align}
$$

其中 $\\boldsymbol{u}$ 是普通速度。四维速度满足 $\\eta_\\mu \\eta^\\mu = -c^2$。

#### 四维动量与能量

四维动量定义为

$$
\\begin{align}
p^\\mu = m \\eta^\\mu = \\left( \\gamma m c, \\gamma m \\boldsymbol{u} \\right)
\\end{align}
$$

其中 $m$ 为静止质量。定义能量 $E = p^0 c = \\gamma m c^2$，相对论性动量 $\\boldsymbol{p} = \\gamma m \\boldsymbol{u}$。于是四维动量可写为 $p^\\mu = (E/c, \\boldsymbol{p})$。

**能量-动量关系**：由 $p_\\mu p^\\mu = -m^2 c^2$ 得

$$
\\begin{align}
E^2 - p^2 c^2 = (m c^2)^2
\\end{align}
$$

其中 $p = |\\boldsymbol{p}|$。静止能量 $E_0 = m c^2$，动能 $E_{\\text{kin}} = E - m c^2 = (\\gamma - 1) m c^2$，低速下近似为 $\\frac{1}{2} m u^2$。

### 相对论动力学举例

#### 恒力作用下的直线运动

设粒子受恒定力 $F$（沿 $x$ 方向），初动量为零。由 $F = \\mathrm{d}p/\\mathrm{d}t$ 得 $p = Ft$。又 $p = \\gamma m u$，解得

$$
\\begin{align}
\\frac{u}{c} = \\frac{Ft/mc}{\\sqrt{1 + (Ft/mc)^2}}
\\end{align}
$$

积分得位置

$$
\\begin{align}
x(t) = \\int_0^t u \\, \\mathrm{d}t = \\frac{mc^2}{F} \\left[ \\sqrt{1 + \\left( \\frac{Ft}{mc} \\right)^2} - 1 \\right]
\\end{align}
$$

当 $Ft \\ll mc$ 时，$x \\approx \\frac{F}{2m}t^2$（牛顿极限）；当 $Ft \\gg mc$ 时，$x \\approx ct - \\frac{mc^2}{F}$（趋近光速）。

#### 相对论性回旋运动

带电粒子在均匀恒定磁场 $\\boldsymbol{B}$ 中运动，受洛伦兹力 $\\boldsymbol{F} = Q \\boldsymbol{u} \\times \\boldsymbol{B}$。运动方程为 $\\mathrm{d}\\boldsymbol{p}/\\mathrm{d}t = Q \\boldsymbol{u} \\times \\boldsymbol{B}$，其中 $\\boldsymbol{p} = \\gamma m \\boldsymbol{u}$。由于磁场不做功，$\\gamma$ 常数，故 $p = \\gamma m u$ 大小不变，方向变化。在垂直磁场的平面内做匀速圆周运动，向心力由洛伦兹力提供：

$$
\\begin{align}
\\frac{p u}{R} = Q u B \\quad \\Rightarrow \\quad p = Q B R
\\end{align}
$$

角频率（回旋频率）为

$$
\\begin{align}
\\Omega = \\frac{u}{R} = \\frac{Q B}{p/u} = \\frac{Q B}{\\gamma m}
\\end{align}
$$

即 $\\Omega = \\dfrac{QB}{\\gamma m}$，与速度有关，体现了相对论效应。

### 闵可夫斯基力

定义闵可夫斯基力（四维力）$K^\\mu = \\dfrac{\\mathrm{d}p^\\mu}{\\mathrm{d}\\tau}$。它是一个四维矢量，其时间分量为

$$
\\begin{align}
K^0 = \\frac{\\mathrm{d}p^0}{\\mathrm{d}\\tau} = \\frac{1}{c} \\frac{\\mathrm{d}E}{\\mathrm{d}\\tau}
\\end{align}
$$

对于电磁力，洛伦兹力公式 $\\boldsymbol{F} = Q(\\boldsymbol{E} + \\boldsymbol{u} \\times \\boldsymbol{B})$ 可嵌入四维形式，但需注意 $K^\\mu$ 与普通力 $\\boldsymbol{F}$ 的关系为 $K^\\mu = (\\gamma \\boldsymbol{F}\\cdot\\boldsymbol{u}/c, \\gamma \\boldsymbol{F})$。

## 相对论电动力学

### 电磁场的变换规律

在狭义相对论中，电场 $\\boldsymbol{E}$ 和磁场 $\\boldsymbol{B}$ 不是独立的四维矢量，而是构成一个四维二阶张量——电磁场张量。从静止系 $S_0$（电场 $\\boldsymbol{E}_0$、磁场 $\\boldsymbol{B}_0=0$）变换到以速度 $v$ 运动的参考系 $S$ 时，场的变换规律为

$$
\\begin{align}
E_\\parallel &= E_{0\\parallel}, \\quad B_\\parallel = 0 \\\\
E_\\perp &= \\gamma (E_{0\\perp} + \\boldsymbol{v} \\times \\boldsymbol{B}_{0\\perp}) \\\\
B_\\perp &= \\gamma \\left( B_{0\\perp} - \\frac{\\boldsymbol{v} \\times \\boldsymbol{E}_{0\\perp}}{c^2} \\right)
\\end{align}
$$

其中 $\\parallel$ 和 $\\perp$ 分别表示平行和垂直于相对速度 $\\boldsymbol{v}$ 的分量。一般情况下，场变换的完整表达式为

$$
\\begin{align}
\\bar{E}_x &= E_x \\\\
\\bar{E}_y &= \\gamma (E_y - v B_z) \\\\
\\bar{E}_z &= \\gamma (E_z + v B_y) \\\\
\\bar{B}_x &= B_x \\\\
\\bar{B}_y &= \\gamma \\left( B_y + \\frac{v}{c^2} E_z \\right) \\\\
\\bar{B}_z &= \\gamma \\left( B_z - \\frac{v}{c^2} E_y \\right)
\\end{align}
$$

这些变换表明 $\\boldsymbol{E}$ 和 $\\boldsymbol{B}$ 是同一物理对象在不同惯性系中的不同表现，磁现象本质上可以理解为相对论效应。

### 电磁场张量

引入四维势 $A^\\mu = (V/c, \\boldsymbol{A})$（是一个四维矢量），则电磁场张量定义为

$$
\\begin{align}
F^{\\mu\\nu} = \\frac{\\partial A^\\nu}{\\partial x_\\mu} - \\frac{\\partial A^\\mu}{\\partial x_\\nu}
\\end{align}
$$

在洛伦兹规范 $\\partial_\\mu A^\\mu = 0$ 下，势满足 $\\Box^2 A^\\mu = -\\mu_0 J^\\mu$。

电磁场张量的分量与电场和磁场的关系为

$$
\\begin{align}
F^{\\mu\\nu} = \\begin{pmatrix}
0 & E_x/c & E_y/c & E_z/c \\\\
-E_x/c & 0 & B_z & -B_y \\\\
-E_y/c & -B_z & 0 & B_x \\\\
-E_z/c & B_y & -B_x & 0
\\end{pmatrix}
\\end{align}
$$

对偶张量定义为

$$
\\begin{align}
G^{\\mu\\nu} = \\begin{pmatrix}
0 & B_x & B_y & B_z \\\\
-B_x & 0 & -E_z/c & E_y/c \\\\
-B_y & E_z/c & 0 & -E_x/c \\\\
-B_z & -E_y/c & E_x/c & 0
\\end{pmatrix}
\\end{align}
$$

### 麦克斯韦方程的张量形式

引入四维电流密度 $J^\\mu = (\\rho c, \\boldsymbol{J})$，则麦克斯韦方程组可简洁地写为

$$
\\begin{align}
\\frac{\\partial F^{\\mu\\nu}}{\\partial x^\\nu} &= \\mu_0 J^\\mu \\\\
\\frac{\\partial G^{\\mu\\nu}}{\\partial x^\\nu} &= 0
\\end{align}
$$

展开后：

- $\\mu=0$ 给出 $\\nabla \\cdot \\boldsymbol{E} = \\rho/\\epsilon_0$（高斯定律）
- $\\mu=1,2,3$ 给出 $\\nabla \\times \\boldsymbol{B} = \\mu_0 \\boldsymbol{J} + \\mu_0\\epsilon_0 \\partial \\boldsymbol{E}/\\partial t$（安培-麦克斯韦定律）
- 第二个方程 $\\partial_\\nu G^{\\mu\\nu}=0$ 给出 $\\nabla \\cdot \\boldsymbol{B}=0$ 和 $\\nabla \\times \\boldsymbol{E} = -\\partial\\boldsymbol{B}/\\partial t$（法拉第定律）

这些方程在洛伦兹变换下保持形式不变，体现了电动力学的相对论协变性。

### 电磁场的相对论性统一

电磁场张量的引入揭示了电场和磁场的本质：它们是同一个四维二阶张量在不同惯性系中的不同分量。这一观点统一了电现象和磁现象，并表明麦克斯韦方程组天然满足狭义相对论的要求。正如爱因斯坦在1905年的论文中所指出，电动力学无需引入“以太”假设，相对论即可自洽地描述电磁现象。
`,m={title:"势与场和狭义相对论",author:"NeoWangKing",date:new Date(1773460258e3),lastMod:new Date(1774678921e3),tags:["物理","电动力学","矢势","标势","规范变换","狭义相对论","洛伦兹变换","四维矢量","电磁场张量"],category:["物理","电动力学"],summary:"本文介绍电动力学中的势与场，包括矢势和标势的引入、规范变换（库仑规范与洛伦兹规范）；以及狭义相对论的基本原理、洛伦兹变换、四维时空、相对论动力学，并进一步讨论相对论电动力学，包括电磁场的变换规律、电磁场张量及麦克斯韦方程的张量形式。",comments:!0,draft:!1,sticky:0},t={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/3-Potentials-Fields-Relativity.md",rawData:void 0};export{t as _internal,$ as body,a as collection,m as data,n as id,l as slug};
