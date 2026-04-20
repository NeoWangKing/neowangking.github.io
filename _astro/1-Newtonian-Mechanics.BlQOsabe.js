const n="physics/TheoreticalMechanics/1-Newtonian-Mechanics.md",t="posts",o="physics/theoreticalmechanics/1-newtonian-mechanics",d=`
## 牛顿力学体系

### 牛顿三定律

**第一定律（惯性定律）**：任何物体都保持静止或匀速直线运动的状态，直到其他物体的作用力迫使它改变这种状态为止。

**第二定律**：物体动量的变化率等于作用于物体的合外力，即

$$
\\begin{align}
\\boldsymbol{F} = \\frac{\\mathrm{d}\\boldsymbol{p}}{\\mathrm{d}t} = \\frac{\\mathrm{d}(m\\boldsymbol{v})}{\\mathrm{d}t}
\\end{align}
$$

当质量 $m$ 为常数时，可写为 $\\boldsymbol{F} = m\\boldsymbol{a}$。

**第三定律**：作用力与反作用力大小相等、方向相反、作用在同一直线上，即

$$
\\begin{align}
\\boldsymbol{F}_{12} = -\\boldsymbol{F}_{21}
\\end{align}
$$

### 力的独立作用原理

若干个力同时作用于一个质点时，每个力各自独立地使质点获得加速度，质点的总加速度等于各力单独作用时所获加速度的矢量和。这一原理是矢量叠加的基础。

### 牛顿绝对时空观

- **空间的绝对性**：空间与任何外界事物无关，永远是相同和不动的。
- **时间的绝对性**：时间均匀流逝，与任何外界事物无关。
- **伽利略相对性原理**：力学定律在所有惯性参考系中形式相同，即惯性系之间通过伽利略变换相联系。

## 常见坐标系下的牛顿第二定律

### 直角坐标系

直角坐标系 $(x,y,z)$ 下，牛顿第二定律的分量形式为

$$
\\begin{align}
F_x = m\\ddot{x}, \\quad F_y = m\\ddot{y}, \\quad F_z = m\\ddot{z}
\\end{align}
$$

### 平面极坐标系

平面极坐标 $(r,\\theta)$ 与直角坐标的关系为 $x = r\\cos\\theta$，$y = r\\sin\\theta$。径向与横向的加速度分量为

- 径向加速度：$a_r = \\ddot{r} - r\\dot{\\theta}^2$
- 横向加速度：$a_\\theta = r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta}$

对应的牛顿第二定律为

$$
\\begin{align}
F_r &= m(\\ddot{r} - r\\dot{\\theta}^2) \\\\
F_\\theta &= m(r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})
\\end{align}
$$

### 柱坐标系

柱坐标 $(r,\\theta,z)$ 下，加速度分量为

$$
\\begin{align}
a_r &= \\ddot{r} - r\\dot{\\theta}^2 \\\\
a_\\theta &= r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta} \\\\
a_z &= \\ddot{z}
\\end{align}
$$

相应的动力学方程为

$$
\\begin{align}
F_r &= m(\\ddot{r} - r\\dot{\\theta}^2) \\\\
F_\\theta &= m(r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta}) \\\\
F_z &= m\\ddot{z}
\\end{align}
$$

### 球坐标系

球坐标 $(r,\\theta,\\phi)$ 下，加速度分量较为复杂：

$$
\\begin{align}
a_r &= \\ddot{r} - r\\dot{\\theta}^2 - r\\sin^2\\theta\\,\\dot{\\phi}^2 \\\\
a_\\theta &= r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta} - r\\sin\\theta\\cos\\theta\\,\\dot{\\phi}^2 \\\\
a_\\phi &= r\\sin\\theta\\,\\ddot{\\phi} + 2\\dot{r}\\sin\\theta\\,\\dot{\\phi} + 2r\\cos\\theta\\,\\dot{\\theta}\\dot{\\phi}
\\end{align}
$$

### 自然坐标系（内禀坐标）

对于已知轨迹的曲线运动，采用自然坐标 $(s)$，其中切向和法向加速度为

- 切向加速度：$a_t = \\dot{v} = \\ddot{s}$
- 法向加速度：$a_n = \\dfrac{v^2}{\\rho}$（$\\rho$ 为曲率半径）

牛顿第二定律在自然坐标下的形式为

$$
\\begin{align}
F_t &= m\\ddot{s} \\\\
F_n &= m\\frac{v^2}{\\rho}
\\end{align}
$$

## 质点系动力学

### 质点系的基本概念

质点系是由多个质点组成的系统，各质点的运动通过相互作用相互联系。处理质点系问题的关键在于区分内力和外力。

### 动量定理与质心运动定理

**质点系的动量**定义为各质点动量的矢量和：

$$
\\begin{align}
\\boldsymbol{P} = \\sum_i m_i \\boldsymbol{v}_i
\\end{align}
$$

**动量定理**：质点系动量的变化率等于质点系所受外力的矢量和（内力不影响总动量）：

$$
\\begin{align}
\\frac{\\mathrm{d}\\boldsymbol{P}}{\\mathrm{d}t} = \\sum_i \\boldsymbol{F}_i^{\\text{(ext)}} = \\boldsymbol{F}^{\\text{(ext)}}
\\end{align}
$$

**质心**定义为质点系的质量中心：

$$
\\begin{align}
\\boldsymbol{r}_c = \\frac{\\sum_i m_i \\boldsymbol{r}_i}{\\sum_i m_i} = \\frac{\\sum_i m_i \\boldsymbol{r}_i}{M}
\\end{align}
$$

**质心运动定理**：质心的运动等同于一个质量为总质量 $M$ 的质点，在合外力 $\\boldsymbol{F}^{\\text{(ext)}}$ 作用下的运动：

$$
\\begin{align}
M\\ddot{\\boldsymbol{r}}_c = \\boldsymbol{F}^{\\text{(ext)}}
\\end{align}
$$

**质心系**是固结在质心上的参考系，在该系中总动量为零，因此也称为零动量系。

### 角动量定理

**质点对固定点 $O$ 的角动量**定义为

$$
\\begin{align}
\\boldsymbol{L} = \\boldsymbol{r} \\times \\boldsymbol{p} = \\boldsymbol{r} \\times (m\\boldsymbol{v})
\\end{align}
$$

**力矩**定义为

$$
\\begin{align}
\\boldsymbol{M} = \\boldsymbol{r} \\times \\boldsymbol{F}
\\end{align}
$$

**角动量定理**：质点对固定点的角动量变化率等于作用于质点的合力对同一点的力矩：

$$
\\begin{align}
\\frac{\\mathrm{d}\\boldsymbol{L}}{\\mathrm{d}t} = \\boldsymbol{M}
\\end{align}
$$

对于质点系，总角动量的变化率等于所有外力矩之和（内力矩相互抵消）：

$$
\\begin{align}
\\frac{\\mathrm{d}\\boldsymbol{L}}{\\mathrm{d}t} = \\sum_i \\boldsymbol{r}_i \\times \\boldsymbol{F}_i^{\\text{(ext)}} = \\boldsymbol{M}^{\\text{(ext)}}
\\end{align}
$$

**角动量守恒定律**：若作用于质点（系）的合外力矩为零，则质点（系）对该点的角动量守恒。

### 能量定理

**动能定理**：质点动能的增量等于合外力所做的功：

$$
\\begin{align}
\\mathrm{d}\\left( \\frac{1}{2} mv^2 \\right) = \\boldsymbol{F} \\cdot \\mathrm{d}\\boldsymbol{r}
\\end{align}
$$

对于质点系，总动能的增量等于所有外力做功与所有内力做功之和：

$$
\\begin{align}
\\mathrm{d}T = \\sum_i \\boldsymbol{F}_i^{\\text{(ext)}} \\cdot \\mathrm{d}\\boldsymbol{r}_i + \\sum_{i<j} \\boldsymbol{F}_{ij} \\cdot \\mathrm{d}(\\boldsymbol{r}_i - \\boldsymbol{r}_j)
\\end{align}
$$

**保守力与势能**：若力 $\\boldsymbol{F}$ 所做的功与路径无关，仅取决于起点和终点，则称为保守力。保守力可表示为势能的负梯度：

$$
\\begin{align}
\\boldsymbol{F} = -\\nabla V
\\end{align}
$$

常见的保守力有重力、弹性力、万有引力等。

**机械能守恒定律**：若作用于质点（系）的力均为保守力，则质点（系）的机械能（动能+势能）守恒：

$$
\\begin{align}
T + V = \\text{常数}
\\end{align}
$$

### 有心力

**有心力**是指方向始终指向（或背离）某固定中心、大小仅与到该中心距离有关的力，其一般形式为

$$
\\begin{align}
\\boldsymbol{F} = f(r) \\hat{\\boldsymbol{r}}
\\end{align}
$$

有心力的重要性质：

- 角动量守恒（力矩为零）
- 机械能守恒（有心力为保守力）
- 运动轨迹在同一平面内

## 总结

牛顿力学以牛顿三定律为基础，通过建立微分方程描述物体的运动。选择合适的坐标系可以简化问题的求解。对于质点系，三大守恒定律（动量、角动量、能量）提供了强大的分析工具，它们与对称性紧密相关：动量守恒对应空间平移对称性，角动量守恒对应空间旋转对称性，能量守恒对应时间平移对称性。
`,a={title:"牛顿力学",author:"NeoWangKing",date:new Date(1773144e6),lastMod:new Date(17738172e5),tags:["物理","理论力学","牛顿力学","质点力学","守恒定律"],category:["物理","理论力学"],summary:"本文是理论力学课程的第一篇笔记，系统介绍牛顿力学的基本体系，包括牛顿三定律、绝对时空观、常见坐标系下的运动方程、质点系动力学以及三大守恒定律（动量、角动量、能量）。",comments:!0,draft:!1,sticky:0},l={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/1-Newtonian-Mechanics.md",rawData:void 0};export{l as _internal,d as body,t as collection,a as data,n as id,o as slug};
