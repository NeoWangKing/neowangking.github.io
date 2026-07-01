const n="physics/Electrodynamics/12-Radiation.md",a="posts",l="physics/electrodynamics/12-radiation",o=`
## 辐射的定义

当电荷加速时，它们的电场可以把能量不可逆地传送到无限远——这个过程我们称之为**辐射**。

辐射是携带能量不可逆地传播到无穷远的电磁场。只有场中 $1/r$ 项（加速度场）贡献辐射功率，因为 $S\\sim E^2\\sim 1/r^2$，面积 $4\\pi r^2$ 给出有限值。

## 电偶极辐射

振荡电偶极子 $\\boldsymbol{p}(t) = \\boldsymbol{p}_0\\cos(\\omega t)$：

**辐射场**（远区）：

$$
\\begin{align}
\\boldsymbol{E}_{\\text{rad}} = -\\frac{\\mu_0 \\ddot{\\boldsymbol{p}}}{4\\pi r}\\sin\\theta\\,\\hat{\\boldsymbol{\\theta}}, \\quad \\boldsymbol{B}_{\\text{rad}} = -\\frac{\\mu_0 \\ddot{\\boldsymbol{p}}}{4\\pi c r}\\sin\\theta\\,\\hat{\\boldsymbol{\\phi}}
\\end{align}
$$

**坡印廷矢量（平均）**：

$$
\\begin{align}
\\langle\\boldsymbol{S}\\rangle = \\frac{\\mu_0 p_0^2\\omega^4}{32\\pi^2 c}\\frac{\\sin^2\\theta}{r^2}\\hat{\\boldsymbol{r}}
\\end{align}
$$

**总辐射功率（平均）**：

$$
\\begin{align}
\\langle P\\rangle = \\frac{\\mu_0 p_0^2\\omega^4}{12\\pi c}
\\end{align}
$$

**角分布**：$\\sin^2\\theta$ 形式，沿偶极轴方向无辐射。

## 磁偶极辐射

振荡磁偶极子 $\\boldsymbol{m}(t) = \\boldsymbol{m}_0\\cos(\\omega t)$：

**辐射场**：

$$
\\begin{align}
\\boldsymbol{E}_{\\text{rad}} = \\frac{\\mu_0\\ddot{\\boldsymbol{m}}}{4\\pi c r}\\sin\\theta \\hat{\\boldsymbol{\\phi}},\\quad
\\boldsymbol{B}_{\\text{rad}} = -\\frac{\\mu_0\\ddot{\\boldsymbol{m}}}{4\\pi c^2 r}\\sin\\theta \\hat{\\boldsymbol{\\theta}}
\\end{align}
$$

**坡印廷矢量（平均）**：

$$
\\begin{align}
\\langle\\boldsymbol{S}\\rangle = \\frac{\\mu_0 m_0^2\\omega^4}{32\\pi^2 c^3}\\frac{\\sin^2\\theta}{r^2}\\hat{\\boldsymbol{r}}
\\end{align}
$$

**总辐射功率（平均）**：

$$
\\begin{align}
\\langle P\\rangle = \\frac{\\mu_0 m_0^2\\omega^4}{12\\pi c^3}
\\end{align}
$$

通常比电偶极辐射弱 $(\\omega b/c)^2$ 倍。

## 任意源的辐射

远区辐射场由电偶极矩的二阶导数决定：

$$
\\begin{align}
\\boldsymbol{E}_{\\text{rad}} = \\frac{\\mu_0}{4\\pi r}[\\hat{\\boldsymbol{r}}\\times(\\hat{\\boldsymbol{r}}\\times\\ddot{\\boldsymbol{p}})], \\quad \\boldsymbol{B}_{\\text{rad}} = -\\frac{\\mu_0}{4\\pi c r}[\\hat{\\boldsymbol{r}}\\times\\ddot{\\boldsymbol{p}}]
\\end{align}
$$

**辐射功率**：

$$
\\begin{align}
P_{\\text{rad}} = \\frac{\\mu_0}{6\\pi c}|\\ddot{\\boldsymbol{p}}|^2
\\end{align}
$$

## 运动点电荷的辐射

### 运动点电荷的电磁场

第10章已经给出，运动点电荷在任意运动状态下的电磁场为：

$$
\\begin{align}
\\boldsymbol{E}(\\boldsymbol{r},t) = \\frac{q}{4\\pi\\epsilon_0}\\frac{\\mathscr{r}}{(\\boldsymbol{\\mathscr{r}}\\cdot\\boldsymbol{u})^3}
\\left[(c^2 - v^2)\\boldsymbol{u} + \\boldsymbol{\\mathscr{r}}\\times(\\boldsymbol{u}\\times\\boldsymbol{a})\\right]
\\end{align}
$$

$$
\\begin{align}
\\boldsymbol{B}(\\boldsymbol{r},t) = \\frac{1}{c}\\hat{\\boldsymbol{\\mathscr{r}}}\\times\\boldsymbol{E}
\\end{align}
$$

其中：

- $\\boldsymbol{\\mathscr{r}} = \\boldsymbol{r} - \\boldsymbol{w}(t_r)$ 是场点到**推迟位置**的矢量，$\\mathscr{r} = |\\boldsymbol{\\mathscr{r}}|$
- $\\boldsymbol{v} = \\dot{\\boldsymbol{w}}(t_r)$ 是推迟时刻的速度
- $\\boldsymbol{a} = \\dot{\\boldsymbol{v}}(t_r)$ 是推迟时刻的加速度
- $\\boldsymbol{u} = c\\hat{\\boldsymbol{\\mathscr{r}}} - \\boldsymbol{v}$，$\\hat{\\boldsymbol{\\mathscr{r}}} = \\boldsymbol{\\mathscr{r}}/\\mathscr{r}$

这个场分为两项：

- **速度场**（广义库仑场）：正比于 $\\left(c^2 - v^2\\right)\\boldsymbol{u}$，随距离 $1/\\mathscr{r}^2$ 衰减
- **加速度场**（辐射场）：正比于 $\\boldsymbol{\\mathscr{r}}\\times(\\boldsymbol{u}\\times\\boldsymbol{a})$，随距离 $1/\\mathscr{r}$ 衰减

只有**加速度场**贡献辐射功率。

### 辐射场（远区，只保留 $1/r$ 项）

在远区（$r \\to \\infty$），辐射场为：

$$
\\begin{align}
\\boldsymbol{E}_{\\text{rad}}(\\boldsymbol{r},t) = \\frac{q}{4\\pi\\epsilon_0}\\frac{1}{\\mathscr{r}}\\frac{\\hat{\\boldsymbol{\\mathscr{r}}}\\times(\\hat{\\boldsymbol{\\mathscr{r}}}\\times\\boldsymbol{a})}
{\\left(1 - \\hat{\\boldsymbol{\\mathscr{r}}}\\cdot\\boldsymbol{v}/c\\right)^3}
\\end{align}
$$

$$
\\begin{align}
\\boldsymbol{B}_{\\text{rad}}(\\boldsymbol{r},t) = \\frac{1}{c}\\hat{\\boldsymbol{\\mathscr{r}}}\\times\\boldsymbol{E}_{\\text{rad}}
\\end{align}
$$

### 功率的角分布（一般情形）

功率辐射到立体角 $\\mathrm{d}\\Omega$ 中的速率（在粒子静止参考系中测量）为：

$$
\\begin{align}
\\frac{\\mathrm{d}P}{\\mathrm{d}\\Omega} = \\frac{q^2}{16\\pi^2\\epsilon_0 c}
\\frac{|\\hat{\\boldsymbol{\\mathscr{r}}}\\times[(\\hat{\\boldsymbol{\\mathscr{r}}}-\\boldsymbol{\\beta})\\times\\dot{\\boldsymbol{\\beta}}]|^2}
{(1 - \\hat{\\boldsymbol{\\mathscr{r}}}\\cdot\\boldsymbol{\\beta})^5}
\\end{align}
$$

其中 $\\boldsymbol{\\beta} = \\boldsymbol{v}/c$，$\\dot{\\boldsymbol{\\beta}} = \\boldsymbol{a}/c$。

这个公式适用于任意速度和加速度方向。

### 特殊情况

#### 非相对论极限 ($v \\ll c$)

当速度远小于光速时，$\\boldsymbol{\\beta} \\to 0$，分母 $(1 - \\hat{\\boldsymbol{\\mathscr{r}}}\\cdot\\boldsymbol{\\beta})^5 \\to 1$，辐射场简化为：

$$
\\begin{align}
\\boldsymbol{E}_{\\text{rad}} = \\frac{q}{4\\pi\\epsilon_0 c^2 \\mathscr{r}}\\hat{\\boldsymbol{\\mathscr{r}}}\\times(\\hat{\\boldsymbol{\\mathscr{r}}}\\times\\boldsymbol{a})
\\end{align}
$$

角分布：

$$
\\begin{align}
\\frac{\\mathrm{d}P}{\\mathrm{d}\\Omega} = \\frac{q^2 a^2}{16\\pi^2\\epsilon_0 c^3}\\sin^2\\theta
\\end{align}
$$

其中 $\\theta$ 是观察方向与加速度方向的夹角。

总功率（**拉莫尔公式**）：

$$
\\begin{align}
P = \\frac{q^2 a^2}{6\\pi\\epsilon_0 c^3} = \\frac{\\mu_0 q^2 a^2}{6\\pi c}
\\end{align}
$$

#### $\\boldsymbol{v} \\parallel \\boldsymbol{a}$（直线加速/减速，轫致辐射）

此时 $\\hat{\\boldsymbol{\\mathscr{r}}}\\times(\\hat{\\boldsymbol{\\mathscr{r}}}\\times\\boldsymbol{a})$ 的模方为 $a^2\\sin^2\\theta$，角分布为：

$$
\\begin{align}
\\frac{\\mathrm{d}P}{\\mathrm{d}\\Omega} = \\frac{q^2 a^2}{16\\pi^2\\epsilon_0 c^3}
\\frac{\\sin^2\\theta}{(1 - \\beta\\cos\\theta)^5}
\\end{align}
$$

总功率（**李纳公式**的特例）：

$$
\\begin{align}
P = \\frac{\\mu_0 q^2 a^2}{6\\pi c}\\gamma^6
\\end{align}
$$

辐射集中在向前方向（$\\theta \\approx 0$），锥角 $\\theta \\sim 1/\\gamma$。

#### $\\boldsymbol{v} \\perp \\boldsymbol{a}$（圆周运动，同步辐射）

角分布为：

$$
\\begin{align}
\\frac{\\mathrm{d}P}{\\mathrm{d}\\Omega} = \\frac{q^2 a^2}{16\\pi^2\\epsilon_0 c^3}
\\frac{(1 - \\beta\\cos\\theta)^2 - (1 - \\beta^2)\\sin^2\\theta\\cos^2\\phi}
{(1 - \\beta\\cos\\theta)^5}
\\end{align}
$$

总功率：

$$
\\begin{align}
P = \\frac{\\mu_0 q^2 a^2}{6\\pi c}\\gamma^4
\\end{align}
$$

### 5. 辐射反作用力

#### 阿布拉罕-洛伦兹公式（非相对论）

$$
\\begin{align}
\\boldsymbol{F}_{\\text{rad}} = \\frac{\\mu_0 q^2}{6\\pi c}\\dot{\\boldsymbol{a}}
\\end{align}
$$

#### 相对论推广

闵可夫斯基力形式：

$$
\\begin{align}
K_{\\text{rad}}^\\mu = \\frac{\\mu_0 q^2}{6\\pi c}\\frac{\\mathrm{d}\\alpha^\\mu}{\\mathrm{d}\\tau}
\\end{align}
$$

其中 $\\alpha^\\mu = \\mathrm{d}\\eta^\\mu/\\mathrm{d}\\tau$ 是四维加速度，$\\eta^\\mu$ 是四维速度。

#### 存在的问题

- **超前效应（预加速度）**：外力还没施加，粒子就开始加速
- **Runaway 解**：无外力时，加速度自发指数增长 $a(t) = a_0 e^{t/\\tau}$
- 只有在周期性运动中，平均效果才满足能量守恒

#### 辐射阻尼

在简谐运动中，$\\gamma_{\\text{rad}} = \\omega^2\\tau$，其中：

$$
\\begin{align}
\\tau = \\frac{\\mu_0 q^2}{6\\pi m c}
\\end{align}
$$

对电子，$\\tau \\approx 6 \\times 10^{-24}\\,\\text{s}$。
`,t={title:"辐射",author:"NeoWangKing",date:new Date(17796672e5),lastMod:new Date(17828208e5),tags:["物理","电动力学","辐射","拉莫尔公式","辐射反作用"],category:["物理","电动力学"],summary:"本文系统介绍电磁辐射理论，包括电偶极辐射、磁偶极辐射、任意源的辐射、运动点电荷的辐射（拉莫尔公式和李纳公式）以及辐射反作用力。",comments:!0,draft:!1,sticky:0},m={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/12-Radiation.md",rawData:void 0};export{m as _internal,o as body,a as collection,t as data,n as id,l as slug};
