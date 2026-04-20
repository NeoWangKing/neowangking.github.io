const n="physics/Electrodynamics/2-Electrodynamics.md",l="posts",o="physics/electrodynamics/2-electrodynamics",a=`
## 引言：从静场到时变场

在静电学和静磁学中，我们研究的是不随时间变化的电荷和电流分布所产生的电场和磁场：

- 静电场：$\\nabla \\cdot \\boldsymbol{E} = \\dfrac{1}{\\epsilon_0}\\rho$，$\\nabla \\times \\boldsymbol{E} = 0$，电场由静止电荷产生。
- 静磁场：$\\nabla \\times \\boldsymbol{B} = \\mu_0 \\boldsymbol{J}$，$\\nabla \\cdot \\boldsymbol{B} = 0$，磁场由稳恒电流产生。

但当电荷和电流随时间变化时，电场和磁场不再独立，它们相互耦合，形成统一的电磁场。本章将探讨这种耦合的规律。

## 电动势

### 电动势的定义

考虑一个电路，其中电池提供非静电力（化学力）驱动电荷流动。定义 **电动势** 为作用在单位电荷上的非静电力沿闭合回路做的功：

$$
\\begin{align}
\\mathcal{E} \\equiv \\oint \\boldsymbol{f} \\cdot d\\boldsymbol{l} = \\oint \\boldsymbol{f}_s \\cdot d\\boldsymbol{l}
\\end{align}
$$

其中 $\\boldsymbol{f}_s$ 是单位电荷所受的非静电力（如化学力）。在静电情形下，$\\oint \\boldsymbol{E} \\cdot d\\boldsymbol{l} = 0$，但电动势可以非零。

### 动生电动势

当电路在磁场中运动时，自由电荷受到洛伦兹力 $\\boldsymbol{f}_{mag} = \\boldsymbol{v} \\times \\boldsymbol{B}$，由此产生的电动势称为 **动生电动势**。例如，一个矩形线圈以速度 $\\boldsymbol{v}$ 在均匀磁场中运动（如图7.10），电动势为

$$
\\begin{align}
\\mathcal{E} = \\oint \\boldsymbol{f}_{mag} \\cdot d\\boldsymbol{l} = v B h
\\end{align}
$$

有趣的是，洛伦兹力本身不做功，真正做功的是外力（拉动线圈的力），但电动势仍然由洛伦兹力贡献。

### 磁通量法则

对于任意形状的线圈在非均匀磁场中运动，可以证明动生电动势等于磁通量变化率的负值：

$$
\\begin{align}
\\mathcal{E} = -\\frac{d\\Phi}{dt}, \\quad \\Phi = \\int \\boldsymbol{B} \\cdot d\\boldsymbol{a}
\\end{align}
$$

这个规则称为 **磁通量法则**。它适用于任何导致磁通量变化的机制，包括线圈运动、磁场变化或两者同时发生。

## 法拉第定律

### 法拉第实验

法拉第通过一系列实验发现：无论是什么原因引起穿过回路的磁通量发生变化，回路中都会产生感应电动势，且其大小与磁通量变化率成正比，方向由楞次定律决定。

### 法拉第定律的积分形式

$$
\\begin{align}
\\mathcal{E} = \\oint \\boldsymbol{E} \\cdot d\\boldsymbol{l} = -\\frac{d\\Phi}{dt}
\\end{align}
$$

其中 $\\boldsymbol{E}$ 是感应电场（注意它不是静电场，而是由变化的磁场产生的有旋电场）。

### 法拉第定律的微分形式

将磁通量 $\\Phi = \\int \\boldsymbol{B} \\cdot d\\boldsymbol{a}$ 代入，并应用斯托克斯定理，得到

$$
\\begin{align}
\\nabla \\times \\boldsymbol{E} = -\\frac{\\partial \\boldsymbol{B}}{\\partial t}
\\end{align}
$$

这揭示了变化的磁场会产生有旋电场。

### 两种产生电动势的机制

1. 动生电动势：由洛伦兹力产生，对应磁场不变而回路运动。
2. 感生电动势：由变化磁场产生的感应电场引起，对应回路静止而磁场变化。

## 电感

### 互感

当回路1中的电流 $I_1$ 变化时，它在回路2中产生的磁通量 $\\Phi_2$ 与 $I_1$ 成正比：

$$
\\begin{align}
\\Phi_2 = M I_1
\\end{align}
$$

比例系数 $M$ 称为 **互感**，仅与两回路的几何形状、相对位置及周围介质有关。互感满足互易性 $M_{12}=M_{21}$。

由法拉第定律，回路2中的感应电动势为

$$
\\begin{align}
\\mathcal{E}_2 = -\\frac{d\\Phi_2}{dt} = -M \\frac{dI_1}{dt}
\\end{align}
$$

### 自感

对于一个回路自身，当电流变化时，穿过回路自身的磁通量也与电流成正比：

$$
\\begin{align}
\\Phi = L I
\\end{align}
$$

$L$ 称为 **自感**，单位是亨利（H）。自感电动势（反电动势）为

$$
\\begin{align}
\\mathcal{E} = -L \\frac{dI}{dt}
\\end{align}
$$

自感阻碍电流的变化，使得电流不能瞬时改变。例如，在 $RL$ 电路中，电流随时间指数增长：

$$
\\begin{align}
I(t) = \\frac{\\mathcal{E}_0}{R} \\left(1 - e^{-(R/L)t}\\right)
\\end{align}
$$

时间常数 $\\tau = L/R$ 称为 $L/R$ 时间。

## 磁场能量

### 单个线圈的储能

建立电流过程中，电源克服反电动势做功，这些功转化为磁场能量。对于单个线圈，能量为

$$
\\begin{align}
W = \\frac{1}{2} L I^2
\\end{align}
$$

### 一般电流分布的磁场能量

对于任意电流分布，磁场能量可以用矢势 $\\boldsymbol{A}$ 和电流密度 $\\boldsymbol{J}$ 表示为

$$
\\begin{align}
W = \\frac{1}{2} \\int \\boldsymbol{A} \\cdot \\boldsymbol{J} \\, d\\tau
\\end{align}
$$

通过矢量恒等式，也可用磁场 $\\boldsymbol{B}$ 表示为

$$
\\begin{align}
W = \\frac{1}{2\\mu_0} \\int B^2 \\, d\\tau
\\end{align}
$$

前提是积分区域覆盖整个空间，且场在无穷远处衰减足够快。

## 位移电流

### 安培环路定律的困难

对于时变场，安培环路定律 $\\nabla \\times \\boldsymbol{B} = \\mu_0 \\boldsymbol{J}$ 与电荷守恒定律矛盾。因为取散度得 $\\nabla \\cdot (\\nabla \\times \\boldsymbol{B}) = 0$，但 $\\nabla \\cdot \\boldsymbol{J} = -\\partial \\rho / \\partial t$，除非 $\\rho$ 不随时间变化。

### 麦克斯韦的修正

麦克斯韦引入 **位移电流** 项，修正安培定律为

$$
\\begin{align}
\\nabla \\times \\boldsymbol{B} = \\mu_0 \\boldsymbol{J} + \\mu_0 \\epsilon_0 \\frac{\\partial \\boldsymbol{E}}{\\partial t}
\\end{align}
$$

其中 $\\epsilon_0 \\partial \\boldsymbol{E} / \\partial t$ 称为位移电流密度。这一修正使得方程组自洽，并预言了电磁波的存在。

### 位移电流的意义

位移电流揭示了变化的电场也能产生磁场，正如变化的磁场产生电场一样。电磁场的相互激发形成了电磁波。

## 麦克斯韦方程组

完整的麦克斯韦方程组（真空形式）为：

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{E} &= \\frac{1}{\\epsilon_0} \\rho \\quad &\\text{(高斯定律)} \\\\
\\nabla \\cdot \\boldsymbol{B} &= 0 \\quad &\\text{(磁高斯定律)} \\\\
\\nabla \\times \\boldsymbol{E} &= -\\frac{\\partial \\boldsymbol{B}}{\\partial t} \\quad &\\text{(法拉第定律)} \\\\
\\nabla \\times \\boldsymbol{B} &= \\mu_0 \\boldsymbol{J} + \\mu_0 \\epsilon_0 \\frac{\\partial \\boldsymbol{E}}{\\partial t} \\quad &\\text{(安培-麦克斯韦定律)}
\\end{align}
$$

这组方程统一了电学和磁学，描述了电磁场的产生、传播以及与物质的相互作用。它们是经典电动力学的基础。

> 麦克斯韦方程组的核心思想：电荷产生电场，电流和变化电场产生磁场，变化磁场产生电场。电磁场可以脱离源而独立存在，以波的形式在空间中传播。
`,b={title:"电动力学",author:"NeoWangKing",date:new Date(1773459674e3),lastMod:new Date(1773459674e3),tags:["物理","电动力学","法拉第定律","电感","麦克斯韦方程组"],category:["物理","电动力学"],summary:"本文介绍电动力学的核心内容，包括电动势、法拉第定律、电感、磁场能量、位移电流以及麦克斯韦方程组，从静电场和静磁场过渡到时变情形，揭示电磁场的统一性。",comments:!0,draft:!1,sticky:0},d={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/2-Electrodynamics.md",rawData:void 0};export{d as _internal,a as body,l as collection,b as data,n as id,o as slug};
