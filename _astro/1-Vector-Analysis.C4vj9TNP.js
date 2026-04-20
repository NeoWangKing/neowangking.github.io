const l="physics/Electrodynamics/1-Vector-Analysis.md",n="posts",a="physics/electrodynamics/1-vector-analysis",o=`
## 矢量代数

### 基本运算

1. **加法**：$\\boldsymbol{A} + \\boldsymbol{B} = \\boldsymbol{B} + \\boldsymbol{A}$，满足交换律和结合律。
2. **数乘**：$\\alpha(\\boldsymbol{A}+\\boldsymbol{B}) = \\alpha\\boldsymbol{A} + \\alpha\\boldsymbol{B}$。
3. **点乘（标量积）**：$\\boldsymbol{A} \\cdot \\boldsymbol{B} = AB\\cos\\theta$，满足交换律 $\\boldsymbol{A}\\cdot\\boldsymbol{B} = \\boldsymbol{B}\\cdot\\boldsymbol{A}$ 和分配律 $\\boldsymbol{A}\\cdot(\\boldsymbol{B}+\\boldsymbol{C}) = \\boldsymbol{A}\\cdot\\boldsymbol{B} + \\boldsymbol{A}\\cdot\\boldsymbol{C}$。
4. **叉乘（矢量积）**：$\\boldsymbol{A} \\times \\boldsymbol{B} = AB\\sin\\theta\\,\\hat{\\boldsymbol{n}}$，其中 $\\hat{\\boldsymbol{n}}$ 是垂直于 $\\boldsymbol{A},\\boldsymbol{B}$ 所在平面且按右手定则确定的单位矢量。叉乘满足分配律，但不满足交换律：$\\boldsymbol{B}\\times\\boldsymbol{A} = -(\\boldsymbol{A}\\times\\boldsymbol{B})$，且 $\\boldsymbol{A}\\times\\boldsymbol{A}=0$。

### 三重积

- **标量三重积**（混合积）：

  $$
  \\begin{align}
  \\boldsymbol{A}\\cdot(\\boldsymbol{B}\\times\\boldsymbol{C}) = \\boldsymbol{B}\\cdot(\\boldsymbol{C}\\times\\boldsymbol{A}) = \\boldsymbol{C}\\cdot(\\boldsymbol{A}\\times\\boldsymbol{B})
  \\end{align}
  $$

  其几何意义是以三个矢量为棱的平行六面体的体积。

- **矢量三重积**：

  $$
  \\begin{align}
  \\boldsymbol{A}\\times(\\boldsymbol{B}\\times\\boldsymbol{C}) = \\boldsymbol{B}(\\boldsymbol{A}\\cdot\\boldsymbol{C}) - \\boldsymbol{C}(\\boldsymbol{A}\\cdot\\boldsymbol{B})
  \\end{align}
  $$

  此公式称为“BAC-CAB”规则，需注意括号位置。

- **四个矢量的点乘关系**：
  $$
  \\begin{align}
  (\\boldsymbol{A}\\times\\boldsymbol{B})\\cdot(\\boldsymbol{C}\\times\\boldsymbol{D}) = (\\boldsymbol{A}\\cdot\\boldsymbol{C})(\\boldsymbol{B}\\cdot\\boldsymbol{D}) - (\\boldsymbol{A}\\cdot\\boldsymbol{D})(\\boldsymbol{B}\\cdot\\boldsymbol{C})
  \\end{align}
  $$

## 矢量的微分学

### 梯度

**定义**：标量场 $T(x,y,z)$ 的梯度是一个矢量，表示 $T$ 在空间变化最快的方向与速率：

$$
\\begin{align}
\\nabla T = \\frac{\\partial T}{\\partial x}\\hat{\\boldsymbol{x}} + \\frac{\\partial T}{\\partial y}\\hat{\\boldsymbol{y}} + \\frac{\\partial T}{\\partial z}\\hat{\\boldsymbol{z}}
\\end{align}
$$

梯度算符 $\\nabla = \\hat{\\boldsymbol{x}}\\dfrac{\\partial}{\\partial x} + \\hat{\\boldsymbol{y}}\\dfrac{\\partial}{\\partial y} + \\hat{\\boldsymbol{z}}\\dfrac{\\partial}{\\partial z}$。

**几何意义**：梯度方向是函数 $T$ 增加最快的方向，其大小等于该方向的方向导数。

**例子**：$r = \\sqrt{x^2+y^2+z^2}$，则 $\\nabla r = \\hat{\\boldsymbol{r}}$。

### 散度

**定义**：矢量场 $\\boldsymbol{v}$ 的散度是一个标量，衡量场从某一点发散的程度：

$$
\\begin{align}
\\nabla\\cdot\\boldsymbol{v} = \\frac{\\partial v_x}{\\partial x} + \\frac{\\partial v_y}{\\partial y} + \\frac{\\partial v_z}{\\partial z}
\\end{align}
$$

**几何意义**：若散度为正，表示该点有源（向外发散）；为负表示汇（向内汇聚）；为零表示无源。

### 旋度

**定义**：矢量场 $\\boldsymbol{v}$ 的旋度是一个矢量，衡量场的旋转程度：

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

**几何意义**：旋度方向为最大环量密度的方向，大小反映旋转的强弱。

### 常用恒等式

以下恒等式在电动力学中频繁使用：

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

## 矢量的积分学

### 梯度定理（基本定理）

对于梯度场，其路径积分与路径无关，仅取决于端点：

$$
\\begin{align}
\\int_{\\boldsymbol{a}}^{\\boldsymbol{b}} (\\nabla T)\\cdot d\\boldsymbol{l} = T(\\boldsymbol{b}) - T(\\boldsymbol{a})
\\end{align}
$$

推论：沿闭合回路积分 $\\oint (\\nabla T)\\cdot d\\boldsymbol{l}=0$。

### 散度定理（高斯定理）

矢量场通过闭合曲面的通量等于其散度在曲面所围体积内的积分：

$$
\\begin{align}
\\iiint_{V} (\\nabla\\cdot\\boldsymbol{v})\\,d\\tau = \\oiint_{S=\\partial V} \\boldsymbol{v}\\cdot d\\boldsymbol{a}
\\end{align}
$$

### 旋度定理（斯托克斯定理）

矢量场在曲面上的通量（旋度的面积分）等于其沿曲面边界的环量：

$$
\\begin{align}
\\iint_{S} (\\nabla\\times\\boldsymbol{v})\\cdot d\\boldsymbol{a} = \\oint_{L=\\partial S} \\boldsymbol{v}\\cdot d\\boldsymbol{l}
\\end{align}
$$

推论：对于闭合曲面，$\\oint (\\nabla\\times\\boldsymbol{v})\\cdot d\\boldsymbol{a}=0$。

## 曲线坐标系

### 球坐标系

坐标 $(r,\\theta,\\phi)$，变换关系：$x = r\\sin\\theta\\cos\\phi$，$y = r\\sin\\theta\\sin\\phi$，$z = r\\cos\\theta$。线元、面元、体元：

$$
\\begin{align}
d\\boldsymbol{l} = dr\\,\\hat{\\boldsymbol{r}} + r d\\theta\\,\\hat{\\boldsymbol{\\theta}} + r\\sin\\theta\\,d\\phi\\,\\hat{\\boldsymbol{\\phi}}
\\end{align}
$$

$$
\\begin{align}
d\\boldsymbol{a}_r = r^2\\sin\\theta\\,d\\theta d\\phi\\,\\hat{\\boldsymbol{r}}, \\quad d\\tau = r^2\\sin\\theta\\,dr d\\theta d\\phi
\\end{align}
$$

- **梯度**：
  $$
  \\begin{align}
  \\nabla T = \\frac{\\partial T}{\\partial r}\\hat{\\boldsymbol{r}} + \\frac{1}{r}\\frac{\\partial T}{\\partial\\theta}\\hat{\\boldsymbol{\\theta}} + \\frac{1}{r\\sin\\theta}\\frac{\\partial T}{\\partial\\phi}\\hat{\\boldsymbol{\\phi}}
  \\end{align}
  $$
- **散度**：
  $$
  \\begin{align}
  \\nabla\\cdot\\boldsymbol{v} = \\frac{1}{r^2}\\frac{\\partial}{\\partial r}(r^2 v_r) + \\frac{1}{r\\sin\\theta}\\frac{\\partial}{\\partial\\theta}(\\sin\\theta\\,v_\\theta) + \\frac{1}{r\\sin\\theta}\\frac{\\partial v_\\phi}{\\partial\\phi}
  \\end{align}
  $$
- **旋度**：
  $$
  \\begin{align}
  \\nabla\\times\\boldsymbol{v} = &\\frac{1}{r\\sin\\theta}\\left[\\frac{\\partial}{\\partial\\theta}(\\sin\\theta\\,v_\\phi)-\\frac{\\partial v_\\theta}{\\partial\\phi}\\right]\\hat{\\boldsymbol{r}} \\\\
  &+ \\frac{1}{r}\\left[\\frac{1}{\\sin\\theta}\\frac{\\partial v_r}{\\partial\\phi}-\\frac{\\partial}{\\partial r}(r v_\\phi)\\right]\\hat{\\boldsymbol{\\theta}} \\\\
  &+ \\frac{1}{r}\\left[\\frac{\\partial}{\\partial r}(r v_\\theta)-\\frac{\\partial v_r}{\\partial\\theta}\\right]\\hat{\\boldsymbol{\\phi}}
  \\end{align}
  $$
- **拉普拉斯算符**：
  $$
  \\begin{align}
  \\nabla^2 T = \\frac{1}{r^2}\\frac{\\partial}{\\partial r}\\left(r^2\\frac{\\partial T}{\\partial r}\\right) + \\frac{1}{r^2\\sin\\theta}\\frac{\\partial}{\\partial\\theta}\\left(\\sin\\theta\\frac{\\partial T}{\\partial\\theta}\\right) + \\frac{1}{r^2\\sin^2\\theta}\\frac{\\partial^2 T}{\\partial\\phi^2}
  \\end{align}
  $$

### 柱坐标系

坐标 $(s,\\phi,z)$，$x = s\\cos\\phi$，$y = s\\sin\\phi$，$z=z$。线元、面元、体元：

$$
\\begin{align}
d\\boldsymbol{l} = ds\\,\\hat{\\boldsymbol{s}} + s d\\phi\\,\\hat{\\boldsymbol{\\phi}} + dz\\,\\hat{\\boldsymbol{z}}
\\end{align}
$$

$$
\\begin{align}
d\\tau = s\\,ds d\\phi dz
\\end{align}
$$

- **梯度**：
  $$
  \\begin{align}
  \\nabla T = \\frac{\\partial T}{\\partial s}\\hat{\\boldsymbol{s}} + \\frac{1}{s}\\frac{\\partial T}{\\partial\\phi}\\hat{\\boldsymbol{\\phi}} + \\frac{\\partial T}{\\partial z}\\hat{\\boldsymbol{z}}
  \\end{align}
  $$
- **散度**：
  $$
  \\begin{align}
  \\nabla\\cdot\\boldsymbol{v} = \\frac{1}{s}\\frac{\\partial}{\\partial s}(s v_s) + \\frac{1}{s}\\frac{\\partial v_\\phi}{\\partial\\phi} + \\frac{\\partial v_z}{\\partial z}
  \\end{align}
  $$
- **旋度**：
  $$
  \\begin{align}
  \\nabla\\times\\boldsymbol{v} = \\left(\\frac{1}{s}\\frac{\\partial v_z}{\\partial\\phi}-\\frac{\\partial v_\\phi}{\\partial z}\\right)\\hat{\\boldsymbol{s}} + \\left(\\frac{\\partial v_s}{\\partial z}-\\frac{\\partial v_z}{\\partial s}\\right)\\hat{\\boldsymbol{\\phi}} + \\frac{1}{s}\\left[\\frac{\\partial}{\\partial s}(s v_\\phi)-\\frac{\\partial v_s}{\\partial\\phi}\\right]\\hat{\\boldsymbol{z}}
  \\end{align}
  $$
- **拉普拉斯算符**：
  $$
  \\begin{align}
  \\nabla^2 T = \\frac{1}{s}\\frac{\\partial}{\\partial s}\\left(s\\frac{\\partial T}{\\partial s}\\right) + \\frac{1}{s^2}\\frac{\\partial^2 T}{\\partial\\phi^2} + \\frac{\\partial^2 T}{\\partial z^2}
  \\end{align}
  $$

## 狄拉克δ函数

### 一维δ函数

狄拉克δ函数 $\\delta(x)$ 不是普通函数，而是一种广义函数，满足：

- $\\delta(x)=0$ 当 $x\\neq 0$，且 $\\displaystyle\\int_{-\\infty}^{\\infty}\\delta(x)\\,dx = 1$。
- 筛选性质：$\\displaystyle\\int_{-\\infty}^{\\infty} f(x)\\delta(x-a)\\,dx = f(a)$。

**性质**：

- 偶函数：$\\delta(-x)=\\delta(x)$。
- 缩放：$\\delta(kx) = \\dfrac{1}{|k|}\\delta(x)$。
- 与函数乘积：$f(x)\\delta(x-a) = f(a)\\delta(x-a)$。

### 三维δ函数

三维δ函数可定义为三个一维δ函数的乘积：

$$
\\begin{align}
\\delta^3(\\boldsymbol{r}) = \\delta(x)\\delta(y)\\delta(z)
\\end{align}
$$

满足 $\\displaystyle\\iiint_{\\text{all space}} \\delta^3(\\boldsymbol{r})\\,d\\tau = 1$，筛选性质：

$$
\\begin{align}
\\iiint f(\\boldsymbol{r})\\,\\delta^3(\\boldsymbol{r}-\\boldsymbol{a})\\,d\\tau = f(\\boldsymbol{a})
\\end{align}
$$

缩放性质：$\\delta^3(k\\boldsymbol{r}) = \\dfrac{1}{|k|^3}\\delta^3(\\boldsymbol{r})$。

### 矢量分析中的δ函数

考虑矢量场 $\\boldsymbol{v} = \\dfrac{\\boldsymbol{r}}{r^3}$，其散度：

$$
\\begin{align}
\\nabla\\cdot\\left(\\frac{\\boldsymbol{r}}{r^3}\\right) = 4\\pi\\delta^3(\\boldsymbol{r})
\\end{align}
$$

这一结果解释了散度定理在该场中的表现：虽然直接计算 $\\nabla\\cdot\\boldsymbol{v}=0$（当 $r\\neq0$），但通过闭合曲面积分得到 $4\\pi$，因此必须在原点处引入δ函数来修正。

另一个重要恒等式：

$$
\\begin{align}
\\nabla^2\\left(\\frac{1}{r}\\right) = -4\\pi\\delta^3(\\boldsymbol{r})
\\end{align}
$$

## 矢量场理论

### 亥姆霍兹定理

一个矢量场 $\\boldsymbol{F}(\\boldsymbol{r})$ 由其散度 $D(\\boldsymbol{r})=\\nabla\\cdot\\boldsymbol{F}$ 和旋度 $\\boldsymbol{C}(\\boldsymbol{r})=\\nabla\\times\\boldsymbol{F}$ 唯一确定，**当且仅当** 当 $r\\to\\infty$ 时，$\\boldsymbol{F}$ 趋于零，且 $D$ 和 $\\boldsymbol{C}$ 趋于零的速度比 $1/r^2$ 更快：

$$
\\begin{align}
\\boldsymbol{F} \\text{ 可被 } D \\text{ 和 } \\boldsymbol{C} \\text{ 唯一定义} \\iff
\\begin{cases}
\\boldsymbol{F} \\to 0,\\\\[2pt]
r^2 D \\to 0,\\\\[2pt]
r^2 \\boldsymbol{C} \\to 0,
\\end{cases} \\quad (r\\to\\infty)
\\end{align}
$$

### 势的形式

- **无旋场**：若 $\\nabla\\times\\boldsymbol{F}=0$，则 $\\boldsymbol{F}$ 可表示为某标量势的梯度：$\\boldsymbol{F} = \\nabla V$，且路径积分与路径无关，$\\oint \\boldsymbol{F}\\cdot d\\boldsymbol{l}=0$。
- **无散场**：若 $\\nabla\\cdot\\boldsymbol{F}=0$，则 $\\boldsymbol{F}$ 可表示为某矢量势的旋度：$\\boldsymbol{F} = \\nabla\\times\\boldsymbol{A}$，且通过任何闭合曲面的通量为零，$\\oint \\boldsymbol{F}\\cdot d\\boldsymbol{a}=0$，曲面积分与所选曲面（以同一曲线为边界）无关。

## 张量初步

### 张量的定义

张量是矢量的推广，在坐标变换下满足特定的变换规律。按阶数分类：

- 标量：0 阶张量。
- 矢量：1 阶张量。
- 二阶张量：可视为并矢，在三维空间中有 $3\\times3=9$ 个分量。

一个二阶张量 $\\boldsymbol{T}$ 可表示为：

$$
\\begin{align}
\\boldsymbol{T} = \\sum_{i,j} T_{ij}\\, \\boldsymbol{e}_i \\boldsymbol{e}_j
\\end{align}
$$

其中 $\\boldsymbol{e}_i$ 是基矢量，$\\boldsymbol{e}_i\\boldsymbol{e}_j$ 表示并矢。

### 物理实例：应力张量

在连续介质中，作用在某面元上的力 $\\boldsymbol{F}$ 与该面元的定向有关，可用应力张量 $\\boldsymbol{T}$ 描述：

$$
\\begin{align}
d\\boldsymbol{F} = \\boldsymbol{T}\\cdot d\\boldsymbol{a}
\\end{align}
$$

分量 $T_{ij}$ 表示在垂直于 $j$ 方向的单位面积上沿 $i$ 方向的力。

### 张量的代数运算

- **数乘与加法**：$(\\alpha\\boldsymbol{T})_{ij} = \\alpha T_{ij}$，$(\\boldsymbol{T}+\\boldsymbol{P})_{ij} = T_{ij}+P_{ij}$。
- **张量与矢量的点乘**（左乘和右乘结果不同）：
  $$
  \\begin{align}
  (\\boldsymbol{v}\\cdot\\boldsymbol{T})_i = \\sum_j v_j T_{ji}, \\quad (\\boldsymbol{T}\\cdot\\boldsymbol{v})_i = \\sum_j v_j T_{ij}
  \\end{align}
  $$
  两者一般不相等。
- **张量间的点乘**：$(\\boldsymbol{T}\\cdot\\boldsymbol{P})_{ij} = \\sum_k T_{ik} P_{kj}$。
- **散度**：张量场的散度定义为矢量，其第 $i$ 分量为
  $$
  \\begin{align}
  (\\nabla\\cdot\\boldsymbol{T})_i = \\sum_j \\frac{\\partial T_{ji}}{\\partial x_j}
  \\end{align}
  $$

### 张量的坐标变换

设坐标变换矩阵为 $\\mathsf{R}$（正交矩阵），则矢量变换为 $\\tilde{A}_i = \\sum_j R_{ij}A_j$。二阶张量变换为：

$$
\\begin{align}
\\tilde{T}_{ij} = \\sum_{k,l} R_{ik} R_{jl} T_{kl}
\\end{align}
$$

即矩阵形式 $\\tilde{\\mathsf{T}} = \\mathsf{R}\\mathsf{T}\\mathsf{R}^{\\mathsf{T}}$。

> 张量分析在电动力学中用于描述电磁应力、能量动量张量等，是深入理解场与物质相互作用的重要工具。
`,b={title:"矢量分析",author:"NeoWangKing",date:new Date(17724096e5),lastMod:new Date(1773459918e3),tags:["物理","电动力学","矢量分析","张量"],category:["物理","电动力学"],summary:"本文系统整理矢量分析的基础知识，包括矢量代数、微分与积分运算、曲线坐标系下的表示、狄拉克δ函数、矢量场理论（亥姆霍兹定理）以及张量的初步介绍，为后续电动力学学习奠定数学基础。",comments:!0,draft:!1,sticky:0},t={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/1-Vector-Analysis.md",rawData:void 0};export{t as _internal,o as body,n as collection,b as data,l as id,a as slug};
