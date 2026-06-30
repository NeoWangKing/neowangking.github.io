const l="physics/Electrodynamics/01-Vector-Analysis.md",a="posts",n="physics/electrodynamics/01-vector-analysis",b=`
## 矢量代数

### 基本运算

1. **加法**：$\\boldsymbol{A} + \\boldsymbol{B} = \\boldsymbol{B} + \\boldsymbol{A}$，满足交换律和结合律。
2. **数乘**：$\\alpha(\\boldsymbol{A}+\\boldsymbol{B}) = \\alpha\\boldsymbol{A} + \\alpha\\boldsymbol{B}$。
3. **点乘（标量积）**：$\\boldsymbol{A} \\cdot \\boldsymbol{B} = AB\\cos\\theta$，满足交换律。
4. **叉乘（矢量积）**：$\\boldsymbol{A} \\times \\boldsymbol{B} = AB\\sin\\theta\\,\\hat{\\boldsymbol{n}}$，满足分配律，但不满足交换律：$\\boldsymbol{B}\\times\\boldsymbol{A} = -(\\boldsymbol{A}\\times\\boldsymbol{B})$。

### 三重积

**标量三重积**（混合积）：

$$
\\begin{align}
\\boldsymbol{A}\\cdot(\\boldsymbol{B}\\times\\boldsymbol{C}) = \\boldsymbol{B}\\cdot(\\boldsymbol{C}\\times\\boldsymbol{A}) = \\boldsymbol{C}\\cdot(\\boldsymbol{A}\\times\\boldsymbol{B})
\\end{align}
$$

**矢量三重积**（BAC-CAB规则）：

$$
\\begin{align}
\\boldsymbol{A}\\times(\\boldsymbol{B}\\times\\boldsymbol{C}) = \\boldsymbol{B}(\\boldsymbol{A}\\cdot\\boldsymbol{C}) - \\boldsymbol{C}(\\boldsymbol{A}\\cdot\\boldsymbol{B})
\\end{align}
$$

**四个矢量的点乘关系**：

$$
\\begin{align}
(\\boldsymbol{A}\\times\\boldsymbol{B})\\cdot(\\boldsymbol{C}\\times\\boldsymbol{D}) = (\\boldsymbol{A}\\cdot\\boldsymbol{C})(\\boldsymbol{B}\\cdot\\boldsymbol{D}) - (\\boldsymbol{A}\\cdot\\boldsymbol{D})(\\boldsymbol{B}\\cdot\\boldsymbol{C})
\\end{align}
$$

## 矢量微分学

### 梯度

标量场 $T(x,y,z)$ 的梯度定义为

$$
\\begin{align}
\\nabla T = \\frac{\\partial T}{\\partial x}\\hat{\\boldsymbol{x}} + \\frac{\\partial T}{\\partial y}\\hat{\\boldsymbol{y}} + \\frac{\\partial T}{\\partial z}\\hat{\\boldsymbol{z}}
\\end{align}
$$

梯度算符 $\\nabla = \\hat{\\boldsymbol{x}}\\dfrac{\\partial}{\\partial x} + \\hat{\\boldsymbol{y}}\\dfrac{\\partial}{\\partial y} + \\hat{\\boldsymbol{z}}\\dfrac{\\partial}{\\partial z}$。梯度方向是函数 $T$ 增加最快的方向，其大小等于该方向的方向导数。例如，$r = \\sqrt{x^2+y^2+z^2}$，则 $\\nabla r = \\hat{\\boldsymbol{r}}$。

### 散度

矢量场 $\\boldsymbol{v}$ 的散度为

$$
\\begin{align}
\\nabla\\cdot\\boldsymbol{v} = \\frac{\\partial v_x}{\\partial x} + \\frac{\\partial v_y}{\\partial y} + \\frac{\\partial v_z}{\\partial z}
\\end{align}
$$

散度衡量场从某一点发散的程度：正散度表示源（向外发散），负散度表示汇（向内汇聚）。

### 旋度

矢量场 $\\boldsymbol{v}$ 的旋度为

$$
\\begin{align}
\\nabla\\times\\boldsymbol{v} =
\\begin{vmatrix}
\\hat{\\boldsymbol{x}} & \\hat{\\boldsymbol{y}} & \\hat{\\boldsymbol{z}} \\\\
\\frac{\\partial}{\\partial x} & \\frac{\\partial}{\\partial y} & \\frac{\\partial}{\\partial z} \\\\
v_x & v_y & v_z
\\end{vmatrix}
= \\left(\\frac{\\partial v_z}{\\partial y}-\\frac{\\partial v_y}{\\partial z}\\right)\\hat{\\boldsymbol{x}} + \\left(\\frac{\\partial v_x}{\\partial z}-\\frac{\\partial v_z}{\\partial x}\\right)\\hat{\\boldsymbol{y}} + \\left(\\frac{\\partial v_y}{\\partial x}-\\frac{\\partial v_x}{\\partial y}\\right)\\hat{\\boldsymbol{z}}
\\end{align}
$$

旋度方向为最大环量密度的方向，大小反映旋转的强弱。

### 常用恒等式

1. **梯度**：

$$
\\begin{align}
\\nabla(fg) = f\\nabla g + g\\nabla f
\\end{align}
$$

$$
\\begin{align}
\\nabla(\\boldsymbol{A}\\cdot\\boldsymbol{B}) = \\boldsymbol{A}\\times(\\nabla\\times\\boldsymbol{B}) + \\boldsymbol{B}\\times(\\nabla\\times\\boldsymbol{A}) + (\\boldsymbol{A}\\cdot\\nabla)\\boldsymbol{B} + (\\boldsymbol{B}\\cdot\\nabla)\\boldsymbol{A}
\\end{align}
$$

2. **散度**：

$$
\\begin{align}
\\nabla\\cdot(f\\boldsymbol{A}) = f(\\nabla\\cdot\\boldsymbol{A}) + \\boldsymbol{A}\\cdot(\\nabla f)
\\end{align}
$$

$$
\\begin{align}
\\nabla\\cdot(\\boldsymbol{A}\\times\\boldsymbol{B}) = \\boldsymbol{B}\\cdot(\\nabla\\times\\boldsymbol{A}) - \\boldsymbol{A}\\cdot(\\nabla\\times\\boldsymbol{B})
\\end{align}
$$

3. **旋度**：

$$
\\begin{align}
\\nabla\\times(f\\boldsymbol{A}) = f(\\nabla\\times\\boldsymbol{A}) + \\boldsymbol{A}\\times(\\nabla f)
\\end{align}
$$

$$
\\begin{align}
\\nabla\\times(\\boldsymbol{A}\\times\\boldsymbol{B}) = (\\boldsymbol{B}\\cdot\\nabla)\\boldsymbol{A} - (\\boldsymbol{A}\\cdot\\nabla)\\boldsymbol{B} + \\boldsymbol{A}(\\nabla\\cdot\\boldsymbol{B}) - \\boldsymbol{B}(\\nabla\\cdot\\boldsymbol{A})
\\end{align}
$$

## 矢量积分学

### 梯度定理

$$
\\begin{align}
\\int_{\\boldsymbol{a}}^{\\boldsymbol{b}} (\\nabla T)\\cdot \\mathrm{d}\\boldsymbol{l} = T(\\boldsymbol{b}) - T(\\boldsymbol{a})
\\end{align}
$$

推论：沿闭合回路积分 $\\oint (\\nabla T)\\cdot \\mathrm{d}\\boldsymbol{l}=0$。

### 散度定理（高斯定理）

$$
\\begin{align}
\\iiint_{V} (\\nabla\\cdot\\boldsymbol{v})\\,\\mathrm{d}\\tau = \\oiint_{S=\\partial V} \\boldsymbol{v}\\cdot \\mathrm{d}\\boldsymbol{a}
\\end{align}
$$

### 旋度定理（斯托克斯定理）

$$
\\begin{align}
\\iint_{S} (\\nabla\\times\\boldsymbol{v})\\cdot \\mathrm{d}\\boldsymbol{a} = \\oint_{L=\\partial S} \\boldsymbol{v}\\cdot \\mathrm{d}\\boldsymbol{l}
\\end{align}
$$

## 曲线坐标系

### 球坐标系

坐标 $(r,\\theta,\\phi)$，变换关系：$x = r\\sin\\theta\\cos\\phi$，$y = r\\sin\\theta\\sin\\phi$，$z = r\\cos\\theta$。

线元、面元、体元：

$$
\\begin{align}
\\mathrm{d}\\boldsymbol{l} = \\mathrm{d}r\\,\\hat{\\boldsymbol{r}} + r\\mathrm{d}\\theta\\,\\hat{\\boldsymbol{\\theta}} + r\\sin\\theta\\,\\mathrm{d}\\phi\\,\\hat{\\boldsymbol{\\phi}}
\\end{align}
$$

$$
\\begin{align}
\\mathrm{d}\\boldsymbol{a}_r = r^2\\sin\\theta\\,\\mathrm{d}\\theta\\mathrm{d}\\phi\\,\\hat{\\boldsymbol{r}}, \\quad \\mathrm{d}\\tau = r^2\\sin\\theta\\,\\mathrm{d}r\\mathrm{d}\\theta\\mathrm{d}\\phi
\\end{align}
$$

**梯度**：

$$
\\begin{align}
\\nabla T = \\frac{\\partial T}{\\partial r}\\hat{\\boldsymbol{r}} + \\frac{1}{r}\\frac{\\partial T}{\\partial\\theta}\\hat{\\boldsymbol{\\theta}} + \\frac{1}{r\\sin\\theta}\\frac{\\partial T}{\\partial\\phi}\\hat{\\boldsymbol{\\phi}}
\\end{align}
$$

**散度**：

$$
\\begin{align}
\\nabla\\cdot\\boldsymbol{v} = \\frac{1}{r^2}\\frac{\\partial}{\\partial r}(r^2 v_r) + \\frac{1}{r\\sin\\theta}\\frac{\\partial}{\\partial\\theta}(\\sin\\theta\\,v_\\theta) + \\frac{1}{r\\sin\\theta}\\frac{\\partial v_\\phi}{\\partial\\phi}
\\end{align}
$$

**旋度**：

$$
\\begin{align}
\\nabla\\times\\boldsymbol{v} = &\\frac{1}{r\\sin\\theta}\\left[\\frac{\\partial}{\\partial\\theta}(\\sin\\theta\\,v_\\phi)-\\frac{\\partial v_\\theta}{\\partial\\phi}\\right]\\hat{\\boldsymbol{r}} \\\\
&+ \\frac{1}{r}\\left[\\frac{1}{\\sin\\theta}\\frac{\\partial v_r}{\\partial\\phi}-\\frac{\\partial}{\\partial r}(r v_\\phi)\\right]\\hat{\\boldsymbol{\\theta}} \\\\
&+ \\frac{1}{r}\\left[\\frac{\\partial}{\\partial r}(r v_\\theta)-\\frac{\\partial v_r}{\\partial\\theta}\\right]\\hat{\\boldsymbol{\\phi}}
\\end{align}
$$

**拉普拉斯算符**：

$$
\\begin{align}
\\nabla^2 T = \\frac{1}{r^2}\\frac{\\partial}{\\partial r}\\left(r^2\\frac{\\partial T}{\\partial r}\\right) + \\frac{1}{r^2\\sin\\theta}\\frac{\\partial}{\\partial\\theta}\\left(\\sin\\theta\\frac{\\partial T}{\\partial\\theta}\\right) + \\frac{1}{r^2\\sin^2\\theta}\\frac{\\partial^2 T}{\\partial\\phi^2}
\\end{align}
$$

### 柱坐标系

坐标 $(s,\\phi,z)$，$x = s\\cos\\phi$，$y = s\\sin\\phi$，$z=z$。

线元、体元：

$$
\\begin{align}
\\mathrm{d}\\boldsymbol{l} = \\mathrm{d}s\\,\\hat{\\boldsymbol{s}} + s\\mathrm{d}\\phi\\,\\hat{\\boldsymbol{\\phi}} + \\mathrm{d}z\\,\\hat{\\boldsymbol{z}}, \\quad \\mathrm{d}\\tau = s\\,\\mathrm{d}s\\mathrm{d}\\phi\\mathrm{d}z
\\end{align}
$$

**梯度**：

$$
\\begin{align}
\\nabla T = \\frac{\\partial T}{\\partial s}\\hat{\\boldsymbol{s}} + \\frac{1}{s}\\frac{\\partial T}{\\partial\\phi}\\hat{\\boldsymbol{\\phi}} + \\frac{\\partial T}{\\partial z}\\hat{\\boldsymbol{z}}
\\end{align}
$$

**散度**：

$$
\\begin{align}
\\nabla\\cdot\\boldsymbol{v} = \\frac{1}{s}\\frac{\\partial}{\\partial s}(s v_s) + \\frac{1}{s}\\frac{\\partial v_\\phi}{\\partial\\phi} + \\frac{\\partial v_z}{\\partial z}
\\end{align}
$$

**旋度**：

$$
\\begin{align}
\\nabla\\times\\boldsymbol{v} = \\left(\\frac{1}{s}\\frac{\\partial v_z}{\\partial\\phi}-\\frac{\\partial v_\\phi}{\\partial z}\\right)\\hat{\\boldsymbol{s}} + \\left(\\frac{\\partial v_s}{\\partial z}-\\frac{\\partial v_z}{\\partial s}\\right)\\hat{\\boldsymbol{\\phi}} + \\frac{1}{s}\\left[\\frac{\\partial}{\\partial s}(s v_\\phi)-\\frac{\\partial v_s}{\\partial\\phi}\\right]\\hat{\\boldsymbol{z}}
\\end{align}
$$

**拉普拉斯算符**：

$$
\\begin{align}
\\nabla^2 T = \\frac{1}{s}\\frac{\\partial}{\\partial s}\\left(s\\frac{\\partial T}{\\partial s}\\right) + \\frac{1}{s^2}\\frac{\\partial^2 T}{\\partial\\phi^2} + \\frac{\\partial^2 T}{\\partial z^2}
\\end{align}
$$

## 狄拉克δ函数

一维δ函数满足

$$
\\begin{align}
\\delta(x) = 0 \\ (x \\neq 0), \\quad \\int_{-\\infty}^{\\infty}\\delta(x)\\,\\mathrm{d}x = 1, \\quad \\int_{-\\infty}^{\\infty} f(x)\\delta(x-a)\\,\\mathrm{d}x = f(a)
\\end{align}
$$

**性质**：

- 偶函数：$\\delta(-x)=\\delta(x)$
- 缩放：$\\delta(kx) = \\dfrac{1}{|k|}\\delta(x)$
- 与函数乘积：$f(x)\\delta(x-a) = f(a)\\delta(x-a)$

三维δ函数：

$$
\\begin{align}
\\delta^3(\\boldsymbol{r}) = \\delta(x)\\delta(y)\\delta(z), \\quad \\iiint f(\\boldsymbol{r})\\,\\delta^3(\\boldsymbol{r}-\\boldsymbol{a})\\,\\mathrm{d}\\tau = f(\\boldsymbol{a})
\\end{align}
$$

**重要恒等式**：

$$
\\begin{align}
\\nabla\\cdot\\left(\\frac{\\boldsymbol{r}}{r^3}\\right) = 4\\pi\\delta^3(\\boldsymbol{r}), \\quad \\nabla^2\\left(\\frac{1}{r}\\right) = -4\\pi\\delta^3(\\boldsymbol{r})
\\end{align}
$$

## 矢量场理论

### 亥姆霍兹定理

矢量场 $\\boldsymbol{F}(\\boldsymbol{r})$ 由其散度 $D(\\boldsymbol{r})=\\nabla\\cdot\\boldsymbol{F}$ 和旋度 $\\boldsymbol{C}(\\boldsymbol{r})=\\nabla\\times\\boldsymbol{F}$ 唯一确定，当 $r\\to\\infty$ 时 $\\boldsymbol{F}\\to 0$，且 $D$ 和 $\\boldsymbol{C}$ 趋于零的速度比 $1/r^2$ 更快。

### 势的形式

- **无旋场**：若 $\\nabla\\times\\boldsymbol{F}=0$，则 $\\boldsymbol{F} = \\nabla V$。
- **无散场**：若 $\\nabla\\cdot\\boldsymbol{F}=0$，则 $\\boldsymbol{F} = \\nabla\\times\\boldsymbol{A}$。

## 张量初步

### 定义

二阶张量 $\\boldsymbol{T}$ 可表示为

$$
\\begin{align}
\\boldsymbol{T} = \\sum_{i,j} T_{ij}\\, \\boldsymbol{e}_i \\boldsymbol{e}_j
\\end{align}
$$

$T_{ij}$ 是在 $j$ 方向单位面积上沿 $i$ 方向的力。

### 张量变换规则

坐标变换 $\\tilde{A}_i = \\sum_j R_{ij}A_j$ 下，二阶张量变换为

$$
\\begin{align}
\\tilde{T}_{ij} = \\sum_{k,l} R_{ik} R_{jl} T_{kl}
\\end{align}
$$

即矩阵形式 $\\tilde{\\mathsf{T}} = \\mathsf{R}\\mathsf{T}\\mathsf{R}^{\\mathsf{T}}$。

### 张量运算

- $(\\boldsymbol{T}+\\boldsymbol{P})_{ij} = T_{ij} + P_{ij}$
- $(\\boldsymbol{T}\\cdot\\boldsymbol{P})_{ij} = \\sum_k T_{ik} P_{kj}$
- $(\\boldsymbol{v}\\cdot\\boldsymbol{T})_i = \\sum_j v_j T_{ji}$，$(\\boldsymbol{T}\\cdot\\boldsymbol{v})_i = \\sum_j v_j T_{ij}$
- $(\\nabla\\cdot\\boldsymbol{T})_i = \\sum_j \\partial T_{ji}/\\partial x_j$
`,o={title:"矢量分析",author:"NeoWangKing",date:new Date(17722368e5),lastMod:new Date(17828208e5),tags:["物理","电动力学","矢量分析","张量"],category:["物理","电动力学"],summary:"本文系统整理电动力学所需的矢量分析基础知识，包括矢量代数、微分与积分运算、曲线坐标系下的表示、狄拉克δ函数、矢量场理论以及张量的初步介绍。",comments:!0,draft:!1,sticky:0},t={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/01-Vector-Analysis.md",rawData:void 0};export{t as _internal,b as body,a as collection,o as data,l as id,n as slug};
