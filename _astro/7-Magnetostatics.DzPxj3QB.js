const n="physics/Electrodynamics/7-Magnetostatics.md",l="posts",o="physics/electrodynamics/7-magnetostatics",b=`
## 洛伦兹力

运动电荷在电磁场中受到的力为

$$
\\begin{align}
\\boldsymbol{F} = q(\\boldsymbol{E} + \\boldsymbol{v} \\times \\boldsymbol{B})
\\end{align}
$$

其中 $\\boldsymbol{B}$ 是磁感应强度（磁场）。静磁场由稳恒电流产生。

## 毕奥-萨伐尔定律

### 线电流

电流元 $I\\mathrm{d}\\boldsymbol{l}$ 在空间产生的磁场为

$$
\\begin{align}
\\mathrm{d}\\boldsymbol{B} = \\frac{\\mu_0}{4\\pi} \\frac{I \\mathrm{d}\\boldsymbol{l} \\times \\hat{\\boldsymbol{r}}}{r^2}
\\end{align}
$$

总磁场为

$$
\\begin{align}
\\boldsymbol{B}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi} \\int \\frac{I \\mathrm{d}\\boldsymbol{l}' \\times \\hat{\\boldsymbol{r}}''}{r''^2}
\\end{align}
$$

### 体电流与面电流

对于体电流密度 $\\boldsymbol{J}$：

$$
\\begin{align}
\\boldsymbol{B}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi} \\int \\frac{\\boldsymbol{J}(\\boldsymbol{r}') \\times \\hat{\\boldsymbol{r}}''}{r''^2} \\, \\mathrm{d}\\tau'
\\end{align}
$$

对于面电流密度 $\\boldsymbol{K}$：

$$
\\begin{align}
\\boldsymbol{B}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi} \\int \\frac{\\boldsymbol{K}(\\boldsymbol{r}') \\times \\hat{\\boldsymbol{r}}''}{r''^2} \\, \\mathrm{d}a'
\\end{align}
$$

## 磁场的基本性质

### 散度

毕奥-萨伐尔定律的直接推论：

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{B} = 0
\\end{align}
$$

积分形式：

$$
\\begin{align}
\\oint_S \\boldsymbol{B} \\cdot \\mathrm{d}\\boldsymbol{a} = 0
\\end{align}
$$

这表明**不存在磁单极**（磁荷）。

### 旋度（安培定律）

$$
\\begin{align}
\\nabla \\times \\boldsymbol{B} = \\mu_0 \\boldsymbol{J}
\\end{align}
$$

积分形式（安培环路定律）：

$$
\\begin{align}
\\oint_C \\boldsymbol{B} \\cdot \\mathrm{d}\\boldsymbol{l} = \\mu_0 I_{\\text{enc}}
\\end{align}
$$

其中 $I_{\\text{enc}}$ 是穿过以 $C$ 为边界的任意曲面的总电流。

## 典型电流分布的磁场

### 无限长直导线

电流 $I$ 沿 $z$ 轴，在距离 $s$ 处：

$$
\\begin{align}
\\boldsymbol{B} = \\frac{\\mu_0 I}{2\\pi s} \\hat{\\boldsymbol{\\phi}}
\\end{align}
$$

### 圆形载流环（轴线上）

半径为 $R$，电流 $I$，在轴线上距离圆心 $z$ 处：

$$
\\begin{align}
B(z) = \\frac{\\mu_0 I R^2}{2(R^2 + z^2)^{3/2}} \\hat{\\boldsymbol{z}}
\\end{align}
$$

### 无限大平面电流

面电流密度 $\\boldsymbol{K} = K \\hat{\\boldsymbol{x}}$，在平面两侧产生均匀磁场：

$$
\\begin{align}
\\boldsymbol{B} = \\begin{cases}
\\frac{\\mu_0}{2} K \\hat{\\boldsymbol{y}}, & z < 0 \\\\
-\\frac{\\mu_0}{2} K \\hat{\\boldsymbol{y}}, & z > 0
\\end{cases}
\\end{align}
$$

### 长直螺线管

单位长度匝数 $n$，电流 $I$，内部磁场均匀：

$$
\\begin{align}
\\boldsymbol{B} = \\mu_0 n I \\hat{\\boldsymbol{z}}
\\end{align}
$$

外部磁场为零（理想情况）。

## 磁矢势

### 定义

由于 $\\nabla \\cdot \\boldsymbol{B} = 0$，可引入**磁矢势** $\\boldsymbol{A}$ 满足

$$
\\begin{align}
\\boldsymbol{B} = \\nabla \\times \\boldsymbol{A}
\\end{align}
$$

在库仑规范 $\\nabla \\cdot \\boldsymbol{A} = 0$ 下，$\\boldsymbol{A}$ 满足泊松方程：

$$
\\begin{align}
\\nabla^2 \\boldsymbol{A} = -\\mu_0 \\boldsymbol{J}
\\end{align}
$$

解为

$$
\\begin{align}
\\boldsymbol{A}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi} \\int \\frac{\\boldsymbol{J}(\\boldsymbol{r}')}{|\\boldsymbol{r} - \\boldsymbol{r}'|} \\, \\mathrm{d}\\tau'
\\end{align}
$$

（类似静电势公式）

### 磁矢势的物理意义

- $\\boldsymbol{A}$ 不是唯一的，可进行规范变换
- 在量子力学中，$\\boldsymbol{A}$ 具有可观测效应（Aharonov-Bohm 效应）

## 磁偶极子

### 磁偶极矩

对于一个小电流回路，定义**磁偶极矩**

$$
\\begin{align}
\\boldsymbol{m} = I \\int \\mathrm{d}\\boldsymbol{a} = I \\boldsymbol{a}
\\end{align}
$$

其中 $\\boldsymbol{a}$ 是回路所围面积（矢量方向由右手定则确定）。

### 磁矢势的多极展开

对于局域电流分布，在远场区可展开：

$$
\\begin{align}
\\boldsymbol{A}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi} \\left[ \\frac{1}{r} \\int \\boldsymbol{J} \\, \\mathrm{d}\\tau' + \\frac{1}{r^2} \\int (\\boldsymbol{r}' \\cdot \\hat{\\boldsymbol{r}}) \\boldsymbol{J} \\, \\mathrm{d}\\tau' + \\cdots \\right]
\\end{align}
$$

- 第一项（单极项）为零（净电流为零）
- 第二项为偶极项：

$$
\\begin{align}
\\boldsymbol{A}_{\\text{dip}}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi} \\frac{\\boldsymbol{m} \\times \\hat{\\boldsymbol{r}}}{r^2}
\\end{align}
$$

### 偶极子的磁场

由 $\\boldsymbol{B}_{\\text{dip}} = \\nabla \\times \\boldsymbol{A}_{\\text{dip}}$ 得

$$
\\begin{align}
\\boldsymbol{B}_{\\text{dip}}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi} \\frac{1}{r^3} [3(\\boldsymbol{m} \\cdot \\hat{\\boldsymbol{r}}) \\hat{\\boldsymbol{r}} - \\boldsymbol{m}]
\\end{align}
$$

该形式与电偶极子电场完全相同（仅常数替换）。

### 物理偶极子与纯偶极子

- 物理偶极子：有限大小的电流环，近场复杂
- 纯偶极子：取极限 $I \\to \\infty$，面积 $\\to 0$，$m$ 有限

## 边界条件

在面电流 $\\boldsymbol{K}$ 存在的分界面上：

$$
\\begin{align}
\\boldsymbol{B}_{\\text{above}} - \\boldsymbol{B}_{\\text{below}} = \\mu_0 (\\boldsymbol{K} \\times \\hat{\\boldsymbol{n}})
\\end{align}
$$

法向分量连续：

$$
\\begin{align}
B_{\\text{above}\\perp} = B_{\\text{below}\\perp}
\\end{align}
$$

## 小结

- 静磁场由稳恒电流产生，满足毕奥-萨伐尔定律
- 磁场无散，有旋：$\\nabla \\cdot \\boldsymbol{B}=0$，$\\nabla \\times \\boldsymbol{B} = \\mu_0 \\boldsymbol{J}$
- 安培环路定律是积分形式
- 磁矢势 $\\boldsymbol{A}$ 满足泊松方程，常用于计算
- 远场可用磁偶极子近似，磁偶极矩 $\\boldsymbol{m} = I \\boldsymbol{a}$
- 边界条件：法向 $B$ 连续，切向跃变由面电流决定
`,m={title:"静磁场",author:"NeoWangKing",date:new Date(1775835591e3),lastMod:new Date(1776699591e3),tags:["物理","电动力学","静磁场","毕奥-萨伐尔定律","安培定律","磁矢势","磁偶极子"],category:["物理","电动力学"],summary:"本文介绍静磁场的基本理论，包括洛伦兹力、毕奥-萨伐尔定律、安培定律、磁矢势、磁偶极子以及多极展开，并给出典型电流分布的磁场计算实例。",comments:!0,draft:!1,sticky:0},d={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/7-Magnetostatics.md",rawData:void 0};export{d as _internal,b as body,l as collection,m as data,n as id,o as slug};
