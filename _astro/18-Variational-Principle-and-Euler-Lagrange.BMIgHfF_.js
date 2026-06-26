const n="physics/TheoreticalMechanics/18-Variational-Principle-and-Euler-Lagrange.md",a="posts",t="physics/theoreticalmechanics/18-variational-principle-and-euler-lagrange",$=`
## 泛函与变分

### 函数与泛函

**函数**是从数到数的映射。**泛函**是从函数到数的映射。例如，曲线长度 $J[y] = \\int_a^b \\sqrt{1 + (y')^2} \\,\\mathrm{d}x$ 是一个泛函，它把函数 $y(x)$ 映射为一个实数（长度）。

### 变分

**变分** $\\delta J$ 是泛函 $J[y]$ 对宗量函数 $y(x)$ 的微小改变所产生的变化，类似于函数的微分。变分算符 $\\delta$ 与微分算符 $\\mathrm{d}$ 有如下关系：

- $\\delta x = 0$（自变量不变）
- $\\delta$ 与 $\\mathrm{d}$ 可交换：$\\delta(\\mathrm{d}y) = \\mathrm{d}(\\delta y)$
- $\\delta$ 与 $\\dfrac{\\mathrm{d}}{\\mathrm{d}x}$ 可交换：$\\delta\\left(\\frac{\\mathrm{d}y}{\\mathrm{d}x}\\right) = \\frac{\\mathrm{d}}{\\mathrm{d}x}(\\delta y)$

## 欧拉-拉格朗日方程

### 最速落径问题的启发

最速落径问题：求从 $A$ 到 $B$ 的曲线，使质点在重力作用下无摩擦滑落所需时间最短。时间泛函为

$$
\\begin{align}
J[y] = \\int_{x_A}^{x_B} \\frac{\\sqrt{1+(y')^2}}{\\sqrt{2g y}} \\,\\mathrm{d}x
\\end{align}
$$

求使 $J$ 取极值的函数 $y(x)$。

### 泛函极值的必要条件

考虑泛函 $J[y] = \\int_{x_1}^{x_2} F(x, y, y') \\,\\mathrm{d}x$，其中端点固定：$y(x_1)=y_1$，$y(x_2)=y_2$。设 $y(x)$ 是极值曲线，$y(x) + \\delta y(x)$ 是邻近曲线，且 $\\delta y(x_1)=\\delta y(x_2)=0$。则 $J$ 的一阶变分为

$$
\\begin{align}
\\delta J = \\int_{x_1}^{x_2} \\left( \\frac{\\partial F}{\\partial y} \\delta y + \\frac{\\partial F}{\\partial y'} \\delta y' \\right) \\mathrm{d}x
\\end{align}
$$

利用分部积分和端点条件，得

$$
\\begin{align}
\\delta J = \\int_{x_1}^{x_2} \\left( \\frac{\\partial F}{\\partial y} - \\frac{\\mathrm{d}}{\\mathrm{d}x} \\frac{\\partial F}{\\partial y'} \\right) \\delta y \\,\\mathrm{d}x
\\end{align}
$$

极值条件 $\\delta J = 0$ 对任意 $\\delta y$ 成立，故被积函数必须为零：

$$
\\begin{align}
\\frac{\\partial F}{\\partial y} - \\frac{\\mathrm{d}}{\\mathrm{d}x} \\frac{\\partial F}{\\partial y'} = 0
\\end{align}
$$

这就是**欧拉-拉格朗日方程**（变分法中的基本方程），与分析力学中的拉格朗日方程形式一致。

### 欧拉-拉格朗日方程的特例

若 $F$ 不显含 $y$（$\\partial F/\\partial y = 0$），则方程有首次积分：

$$
\\begin{align}
\\frac{\\partial F}{\\partial y'} = \\text{常数}
\\end{align}
$$

若 $F$ 不显含 $x$（$\\partial F/\\partial x = 0$），则存在守恒量

$$
\\begin{align}
F - y' \\frac{\\partial F}{\\partial y'} = \\text{常数}
\\end{align}
$$

## 经典变分问题

### 最速落径

取 $F(y,y') = \\frac{\\sqrt{1+(y')^2}}{\\sqrt{y}}$（忽略常数因子）。$F$ 不显含 $x$，由守恒形式得

$$
\\begin{align}
\\frac{\\sqrt{1+(y')^2}}{\\sqrt{y}} - y' \\cdot \\frac{y'}{\\sqrt{y}\\sqrt{1+(y')^2}} = \\text{常数}
\\end{align}
$$

化简得 $y(1+(y')^2) = \\text{常数}$。引入参数 $\\theta$，令 $y' = \\cot(\\theta/2)$，可解得

$$
\\begin{align}
x = a(\\theta - \\sin\\theta), \\quad y = a(1 - \\cos\\theta)
\\end{align}
$$

这是一条**摆线**（旋轮线）。最速落径是摆线，而非圆弧（伽利略曾误认为是圆弧）。

### 悬链线

两端固定、受重力作用的均匀软链，平衡时势能最小。势能泛函为

$$
\\begin{align}
J[y] = \\int \\rho g y \\sqrt{1+(y')^2} \\,\\mathrm{d}x
\\end{align}
$$

$F = y\\sqrt{1+(y')^2}$ 不显含 $x$，由守恒形式得

$$
\\begin{align}
y\\sqrt{1+(y')^2} - y' \\cdot \\frac{y y'}{\\sqrt{1+(y')^2}} = \\text{常数}
\\end{align}
$$

化简得 $y/\\sqrt{1+(y')^2} = \\text{常数}$，解为双曲余弦函数

$$
\\begin{align}
y = c \\cosh\\left(\\frac{x - x_0}{c}\\right)
\\end{align}
$$

这就是**悬链线**。

## 最小作用量原理

### 哈密顿原理

在经典力学中，**哈密顿原理**（最小作用量原理的现代形式）指出：保守体系的真实运动路径使作用量泛函取极值（通常是极小值）。作用量定义为

$$
\\begin{align}
S = \\int_{t_1}^{t_2} L(q, \\dot{q}, t) \\,\\mathrm{d}t
\\end{align}
$$

由变分原理 $\\delta S = 0$ 可导出拉格朗日方程。因此，拉格朗日方程是哈密顿原理的直接推论。

### 莫佩尔蒂原理

对于能量守恒的体系，可定义约化作用量 $\\int \\boldsymbol{p} \\cdot \\mathrm{d}\\boldsymbol{q}$，真实路径使其取极值。这是几何光学中费马原理在力学中的类比。

## 变分法的应用

- 最短路径问题（测地线）
- 等时曲线（摆线）
- 光学中的费马原理（光程极值）
- 弹性力学中的最小势能原理
- 场论中的作用量原理（如电磁场、广义相对论）

## 小结

- 变分法是求泛函极值的数学方法，核心是欧拉-拉格朗日方程
- 最速落径的解是摆线，悬链线的解是双曲余弦
- 最小作用量原理是力学的基本原理，可导出拉格朗日方程
- 变分法广泛应用于物理学的各个分支，是理论物理的重要工具
`,r={title:"变分法与最小作用量原理",author:"NeoWangKing",date:new Date(1780131267e3),lastMod:new Date(1780131276e3),tags:["物理","理论力学","变分法","欧拉-拉格朗日方程","最小作用量原理","最速落径"],category:["物理","理论力学"],summary:"本文介绍变分法的基本概念，包括泛函、变分算符、欧拉-拉格朗日方程的推导，以及物理学中的最小作用量原理。通过最速落径和悬链线等经典问题展示变分法的应用。",comments:!0,draft:!1,sticky:0},e={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/18-Variational-Principle-and-Euler-Lagrange.md",rawData:void 0};export{e as _internal,$ as body,a as collection,r as data,n as id,t as slug};
