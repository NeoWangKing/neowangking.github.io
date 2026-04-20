const n="physics/TheoreticalMechanics/11-Elastic-Collision-Scattering-Cross-Section.md",t="posts",a="physics/theoreticalmechanics/11-elastic-collision-scattering-cross-section",e=`
## 弹性碰撞的基本概念

**弹性碰撞**（或弹性散射）是指两个质点在碰撞前后内部状态不发生改变，即动能守恒（机械能守恒）。宏观的台球碰撞、微观的粒子散射等都可近似为弹性碰撞。

### 质心系与实验室系

#### 质心系（CM 系）

质心系是固结在系统质心上的参考系。在质心系中，总动量为零。两粒子碰撞前：

- 粒子 1：速度 $\\boldsymbol{v}_1' = \\frac{m_2}{m_1+m_2} \\boldsymbol{v}_{\\text{rel}}$
- 粒子 2：速度 $\\boldsymbol{v}_2' = -\\frac{m_1}{m_1+m_2} \\boldsymbol{v}_{\\text{rel}}$

其中 $\\boldsymbol{v}_{\\text{rel}} = \\boldsymbol{v}_1 - \\boldsymbol{v}_2$ 是相对速度。

碰撞后，在质心系中两粒子的速度大小不变，方向偏转一个角度 $\\theta_{\\text{cm}}$（散射角）。

#### 实验室系（Lab 系）

实验室系是通常的静止参考系，通常假定靶粒子（粒子 2）初始静止。实验室系与质心系的变换是一个伽利略变换，相对速度为质心速度 $\\boldsymbol{V}_{\\text{cm}} = \\frac{m_1 \\boldsymbol{v}_1 + m_2 \\boldsymbol{v}_2}{m_1+m_2}$。

### 碰撞后的速度关系

设粒子 2 初始静止，$m_1$ 以初速 $v_1$ 碰撞 $m_2$。碰撞后，实验室系中的散射角 $\\theta_{\\text{lab}}$ 与质心系散射角 $\\theta_{\\text{cm}}$ 的关系为

$$
\\begin{align}
\\tan \\theta_{\\text{lab}} = \\frac{\\sin \\theta_{\\text{cm}}}{\\cos \\theta_{\\text{cm}} + \\frac{m_1}{m_2}}
\\end{align}
$$

特别地：

- 当 $m_1 = m_2$ 时，$\\theta_{\\text{lab}} = \\theta_{\\text{cm}}/2$，且两粒子运动方向垂直。
- 当 $m_1 \\ll m_2$ 时，$\\theta_{\\text{lab}} \\approx \\theta_{\\text{cm}}$，轻粒子几乎被原路弹回。
- 当 $m_1 \\gg m_2$ 时，$\\theta_{\\text{lab}}$ 很小，重粒子几乎不受影响。

## 散射截面

### 基本定义

**散射截面** $\\sigma$ 是描述入射粒子与靶粒子发生相互作用的概率的物理量，单位为面积。对于单个靶粒子，入射粒子流密度为 $j$（单位时间通过单位面积的粒子数），则单位时间内发生散射的粒子数为

$$
\\begin{align}
N = j \\sigma
\\end{align}
$$

### 微分散射截面

在实际问题中，更关心散射粒子在不同方向上的角分布。**微分散射截面**定义为

$$
\\begin{align}
\\frac{\\mathrm{d}\\sigma}{\\mathrm{d}\\Omega} = \\frac{1}{j} \\frac{\\mathrm{d}N}{\\mathrm{d}\\Omega}
\\end{align}
$$

其中 $\\mathrm{d}\\Omega = \\sin\\theta \\, \\mathrm{d}\\theta \\, \\mathrm{d}\\phi$ 是立体角元。

微分散射截面的物理意义：单位入射流密度下，散射到单位立体角内的粒子数。它通常与散射角 $\\theta$ 有关。

### 由轨道参数计算散射截面

在中心势场中，入射粒子的瞄准距离（碰撞参数）为 $b$，散射角为 $\\theta$。对于给定的势场，$b$ 与 $\\theta$ 有一一对应关系（通常单调）。则微分散射截面为

$$
\\begin{align}
\\frac{\\mathrm{d}\\sigma}{\\mathrm{d}\\Omega} = \\left| \\frac{b}{\\sin\\theta} \\frac{\\mathrm{d}b}{\\mathrm{d}\\theta} \\right|
\\end{align}
$$

该公式将几何参数与散射角联系起来。

## 库仑势场中的弹性散射（卢瑟福散射）

### 散射角与碰撞参数的关系

在排斥的库仑势 $V(r) = \\frac{\\alpha}{r}$（$\\alpha > 0$）中，散射角 $\\theta$ 与碰撞参数 $b$ 的关系为

$$
\\begin{align}
b = \\frac{\\alpha}{2E} \\cot\\left(\\frac{\\theta}{2}\\right)
\\end{align}
$$

其中 $E$ 是入射粒子在无穷远处的动能。

### 卢瑟福散射公式

由上式微分得到 $\\mathrm{d}b/\\mathrm{d}\\theta$，代入微分散射截面公式可得

$$
\\begin{align}
\\frac{\\mathrm{d}\\sigma}{\\mathrm{d}\\Omega} = \\left( \\frac{\\alpha}{4E} \\right)^2 \\frac{1}{\\sin^4(\\theta/2)}
\\end{align}
$$

这就是著名的**卢瑟福散射公式**。它成功解释了 $\\alpha$ 粒子被原子核散射的实验结果，从而证实了原子核的存在。

### 特点

- 与入射粒子和靶粒子的电荷乘积的平方成正比
- 与入射能量的平方成反比
- 在小角度处散射截面发散（但实际因屏蔽效应而有限）
- 与靶物质的厚度成正比

## 弹性碰撞中的能量与动量守恒

在弹性碰撞中，系统的总动能和总动量守恒。在质心系中，两粒子的速率在碰撞前后不变，只是方向改变。这为分析碰撞后的运动提供了方便。

利用质心系，可以推导出实验室系中靶粒子反冲动能、散射角等关系。例如，当 $m_1 = m_2$ 时，碰撞后两粒子的速度相互垂直，这是一个常见结论。

## 总结

- 弹性碰撞满足动能和动量守恒
- 质心系简化了碰撞问题的分析，实验室系的结果可由变换得到
- 散射截面是描述散射概率的核心物理量，微分散射截面反映角分布
- 卢瑟福散射公式是库仑势场中弹性散射的精确结果，具有重要的历史意义
`,$={title:"弹性碰撞与散射截面",author:"NeoWangKing",date:new Date(1776353543e3),lastMod:new Date(1776699143e3),tags:["物理","理论力学","弹性碰撞","散射截面","卢瑟福散射","质心系"],category:["物理","理论力学"],summary:"本文讨论弹性碰撞问题，包括质心系与实验室系的描述、弹性碰撞的动力学、散射截面的定义，以及库仑势场中的卢瑟福散射公式，并介绍微分散射截面的计算方法。",comments:!0,draft:!1,sticky:0},m={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/11-Elastic-Collision-Scattering-Cross-Section.md",rawData:void 0};export{m as _internal,e as body,t as collection,$ as data,n as id,a as slug};
