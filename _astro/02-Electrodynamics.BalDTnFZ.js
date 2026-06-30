const n="physics/Electrodynamics/02-Electrodynamics.md",a="posts",l="physics/electrodynamics/02-electrodynamics",t=`
## 引言：从静场到时变场

在静电学和静磁学中，电场由静止电荷产生，磁场由稳恒电流产生。但当电荷和电流随时间变化时，电场和磁场相互耦合，形成统一的电磁场。

## 电动势

**电动势**定义为作用在单位电荷上的非静电力沿闭合回路做的功：

$$
\\begin{align}
\\mathcal{E} \\equiv \\oint \\boldsymbol{f} \\cdot \\mathrm{d}\\boldsymbol{l}
\\end{align}
$$

### 动生电动势

当电路在磁场中运动时，自由电荷受到洛伦兹力 $\\boldsymbol{f}_{mag} = \\boldsymbol{v} \\times \\boldsymbol{B}$，产生的电动势称为**动生电动势**。

**磁通量法则**：

$$
\\begin{align}
\\mathcal{E} = -\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t}, \\quad \\Phi = \\int \\boldsymbol{B} \\cdot \\mathrm{d}\\boldsymbol{a}
\\end{align}
$$

## 法拉第定律

### 积分形式

$$
\\begin{align}
\\mathcal{E} = \\oint \\boldsymbol{E} \\cdot \\mathrm{d}\\boldsymbol{l} = -\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t}
\\end{align}
$$

### 微分形式

$$
\\begin{align}
\\nabla \\times \\boldsymbol{E} = -\\frac{\\partial \\boldsymbol{B}}{\\partial t}
\\end{align}
$$

### 两种产生电动势的机制

1. **动生电动势**：由洛伦兹力产生（磁场不变，回路运动）
2. **感生电动势**：由变化磁场产生的感应电场引起（回路静止，磁场变化）

## 电感

### 互感

回路1中的电流 $I_1$ 在回路2中产生的磁通量 $\\Phi_2 = M I_1$，$M$ 称为**互感**。感应电动势

$$
\\begin{align}
\\mathcal{E}_2 = -M \\frac{\\mathrm{d}I_1}{\\mathrm{d}t}
\\end{align}
$$

### 自感

回路自身的磁通量 $\\Phi = L I$，$L$ 称为**自感**。自感电动势

$$
\\begin{align}
\\mathcal{E} = -L \\frac{\\mathrm{d}I}{\\mathrm{d}t}
\\end{align}
$$

RL电路中电流随时间指数增长：

$$
\\begin{align}
I(t) = \\frac{\\mathcal{E}_0}{R} \\left(1 - e^{-(R/L)t}\\right), \\quad \\tau = \\frac{L}{R}
\\end{align}
$$

## 磁场能量

单个线圈储能：$W = \\frac{1}{2} L I^2$。

一般电流分布的磁场能量：

$$
\\begin{align}
W = \\frac{1}{2} \\int \\boldsymbol{A} \\cdot \\boldsymbol{J} \\,\\mathrm{d}\\tau = \\frac{1}{2\\mu_0} \\int B^2 \\,\\mathrm{d}\\tau
\\end{align}
$$

## 位移电流

### 安培定律的困难

对 $\\nabla \\times \\boldsymbol{B} = \\mu_0 \\boldsymbol{J}$ 取散度，左边为零，但 $\\nabla \\cdot \\boldsymbol{J} = -\\partial \\rho/\\partial t$，除非 $\\rho$ 不随时间变化。

### 麦克斯韦的修正

$$
\\begin{align}
\\nabla \\times \\boldsymbol{B} = \\mu_0 \\boldsymbol{J} + \\mu_0 \\epsilon_0 \\frac{\\partial \\boldsymbol{E}}{\\partial t}
\\end{align}
$$

其中 $\\epsilon_0 \\partial \\boldsymbol{E} / \\partial t$ 称为**位移电流**。

## 麦克斯韦方程组（真空形式）

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{E} &= \\frac{1}{\\epsilon_0} \\rho \\tag{高斯定律} \\\\
\\nabla \\cdot \\boldsymbol{B} &= 0 \\tag{磁高斯定律} \\\\
\\nabla \\times \\boldsymbol{E} &= -\\frac{\\partial \\boldsymbol{B}}{\\partial t} \\tag{法拉第定律} \\\\
\\nabla \\times \\boldsymbol{B} &= \\mu_0 \\boldsymbol{J} + \\mu_0 \\epsilon_0 \\frac{\\partial \\boldsymbol{E}}{\\partial t} \\tag{安培-麦克斯韦定律}
\\end{align}
$$
`,o={title:"电动力学",author:"NeoWangKing",date:new Date(17725824e5),lastMod:new Date(178281923e4),tags:["物理","电动力学","法拉第定律","电感","麦克斯韦方程组"],category:["物理","电动力学"],summary:"本文介绍电动力学的核心内容，包括电动势、法拉第定律、电感、磁场能量、位移电流以及麦克斯韦方程组，从静电场和静磁场过渡到时变情形，揭示电磁场的统一性。",comments:!0,draft:!1,sticky:0},m={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/02-Electrodynamics.md",rawData:void 0};export{m as _internal,t as body,a as collection,o as data,n as id,l as slug};
