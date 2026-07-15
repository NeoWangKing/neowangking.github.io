const n="physics/TheoreticalMechanics/10-Fluid-Mechanics.md",l="posts",a="physics/theoreticalmechanics/10-fluid-mechanics",o=`
## 流体的两种描述方法

### 拉格朗日描述

追踪每个流体元（流元）的运动轨迹，类似于质点力学。每个流元用其初始位置 $\\boldsymbol{X}$ 标记，其当前位置为 $\\boldsymbol{r}(\\boldsymbol{X}, t)$。

### 欧拉描述

观察空间固定点上的流体状态（速度、密度、压强等），用场量 $\\boldsymbol{v}(\\boldsymbol{x}, t)$、$\\rho(\\boldsymbol{x}, t)$、$p(\\boldsymbol{x}, t)$ 描述。

### 物质导数

物质导数 $\\dfrac{\\mathrm{d}}{\\mathrm{d}t}$ 跟随流体元：

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t} = \\frac{\\partial}{\\partial t} + \\boldsymbol{v} \\cdot \\nabla
\\end{align}
$$

物理意义：$\\dfrac{\\partial}{\\partial t}$ 表示固定点的变化，$\\boldsymbol{v} \\cdot \\nabla$ 表示对流变化。

## 连续性方程（质量守恒）

### 积分形式

单位时间内，控制体内质量的变化率等于通过控制面流入的净质量流：

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t} \\int_V \\rho \\,\\mathrm{d}V = -\\oint_{\\partial V} \\rho \\boldsymbol{v} \\cdot \\mathrm{d}\\boldsymbol{S}
\\end{align}
$$

### 微分形式

由散度定理可得

$$
\\begin{align}
\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\boldsymbol{v}) = 0
\\end{align}
$$

对于不可压缩流体（$\\rho = \\text{常数}$）：

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{v} = 0
\\end{align}
$$

## 理想流体的欧拉方程（动量守恒）

### 受力分析

理想流体（无黏性）中，作用于流体元的力有：

- 体积力：$\\rho \\boldsymbol{f} \\,\\mathrm{d}V$（如重力 $\\boldsymbol{f} = \\boldsymbol{g}$）
- 表面力：$-\\nabla p \\,\\mathrm{d}V$（压强梯度力）

### 欧拉方程

由牛顿第二定律 $\\rho \\,\\mathrm{d}V \\cdot \\boldsymbol{a} = \\boldsymbol{F}$，得

$$
\\begin{align}
\\rho \\frac{\\mathrm{d}\\boldsymbol{v}}{\\mathrm{d}t} = -\\nabla p + \\rho \\boldsymbol{f}
\\end{align}
$$

展开物质导数：

$$
\\begin{align}
\\rho \\left( \\frac{\\partial \\boldsymbol{v}}{\\partial t} + \\boldsymbol{v} \\cdot \\nabla \\boldsymbol{v} \\right) = -\\nabla p + \\rho \\boldsymbol{f}
\\end{align}
$$

### 定常流动

对于定常流动（$\\partial \\boldsymbol{v}/\\partial t = 0$），欧拉方程简化为

$$
\\begin{align}
\\rho (\\boldsymbol{v} \\cdot \\nabla) \\boldsymbol{v} = -\\nabla p + \\rho \\boldsymbol{f}
\\end{align}
$$

## 伯努利方程（能量守恒）

### 推导

对欧拉方程沿流线积分，利用恒等式 $(\\boldsymbol{v} \\cdot \\nabla)\\boldsymbol{v} = \\nabla(\\frac{1}{2} v^2) - \\boldsymbol{v} \\times (\\nabla \\times \\boldsymbol{v})$，在无旋流动中可得

$$
\\begin{align}
\\frac{1}{2} v^2 + \\Phi + \\frac{p}{\\rho} = \\text{常数} \\quad (\\text{沿流线})
\\end{align}
$$

其中 $\\Phi$ 是单位质量的势能（如 $\\Phi = gz$）。

### 适用条件

1. 定常流动（$\\partial/\\partial t = 0$）
2. 无黏性流体（理想流体）
3. 不可压缩流体（$\\rho = \\text{常数}$）
4. 沿同一条流线

### 伯努利方程的物理意义

$$
\\begin{align}
\\frac{1}{2} \\rho v^2 + \\rho \\Phi + p = \\text{常数}
\\end{align}
$$

- $\\frac{1}{2} \\rho v^2$：动压（单位体积动能）
- $\\rho \\Phi$：势能密度
- $p$：静压

### 应用：托里拆利定理

小孔出流速度：

$$
\\begin{align}
v = \\sqrt{2gh}
\\end{align}
$$

即液体从小孔流出的速度等于从液面自由下落到小孔高度的速度。

## 涡量与环量

### 涡量

涡量定义为速度场的旋度：

$$
\\begin{align}
\\boldsymbol{\\omega} = \\nabla \\times \\boldsymbol{v}
\\end{align}
$$

无旋流动 $\\boldsymbol{\\omega} = 0$，存在速度势 $\\phi$ 使 $\\boldsymbol{v} = \\nabla \\phi$。

### 环量

环量定义为速度沿闭合曲线的线积分：

$$
\\begin{align}
\\Gamma = \\oint_C \\boldsymbol{v} \\cdot \\mathrm{d}\\boldsymbol{l} = \\int_S (\\nabla \\times \\boldsymbol{v}) \\cdot \\mathrm{d}\\boldsymbol{S}
\\end{align}
$$

### 开尔文环量定理

对于理想流体（无黏、正压、外力有势），沿随流体运动的闭合曲线的环量守恒：

$$
\\begin{align}
\\frac{\\mathrm{d}\\Gamma}{\\mathrm{d}t} = 0
\\end{align}
$$

这是流体力学中最基本的守恒定理之一。

### 亥姆霍兹涡量定理

1. 涡线随流体运动
2. 涡管强度（环量）守恒
3. 无旋流动保持无旋

这些定理是理想流体涡动力学的基础。

## 理想流体的几个重要结论

1. **不可压缩理想流体的无旋流动**：速度势 $\\phi$ 满足拉普拉斯方程 $\\nabla^2 \\phi = 0$
2. **伯努利方程在全空间成立**：若流动无旋，伯努利常数在整个流场中相同
3. **开尔文定理**：理想流体中涡量不能凭空产生或消失

## 小结

- 流体力学有两种描述：拉格朗日描述（追踪流元）和欧拉描述（观察空间点）
- 连续性方程：$\\partial \\rho / \\partial t + \\nabla \\cdot (\\rho \\boldsymbol{v}) = 0$
- 欧拉方程：$\\rho (\\partial \\boldsymbol{v} / \\partial t + \\boldsymbol{v} \\cdot \\nabla \\boldsymbol{v}) = -\\nabla p + \\rho \\boldsymbol{f}$
- 伯努利方程：$\\frac{1}{2} v^2 + \\Phi + p/\\rho = \\text{常数}$（沿流线）
- 涡量 $\\boldsymbol{\\omega} = \\nabla \\times \\boldsymbol{v}$，环量 $\\Gamma = \\oint \\boldsymbol{v} \\cdot \\mathrm{d}\\boldsymbol{l}$
- 开尔文环量定理：理想流体中环量守恒
`,b={title:"流体",author:"NeoWangKing",date:new Date(17816544e5),lastMod:new Date(1782646884e3),tags:["物理","理论力学","流体力学","连续性方程","欧拉方程","伯努利方程"],category:["物理","理论力学"],summary:"本文介绍流体力学的基本概念和方程，包括拉格朗日描述与欧拉描述、连续性方程（质量守恒）、理想流体的欧拉方程（动量守恒）、伯努利方程（能量守恒），以及涡量与环量的概念。",comments:!0,draft:!1,sticky:0,chapter:10},t={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/10-Fluid-Mechanics.md",rawData:void 0};export{t as _internal,o as body,l as collection,b as data,n as id,a as slug};
