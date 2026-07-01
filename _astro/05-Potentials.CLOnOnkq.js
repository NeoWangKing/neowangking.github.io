const n="physics/Electrodynamics/05-Potentials.md",l="posts",t="physics/electrodynamics/05-potentials",o=`
## 拉普拉斯方程

在无电荷区域 $\\nabla^2 V = 0$。

**一维**：$V(x) = mx + b$，无局部极值。

**二维**：$V(x,y)$ 满足平均值性质，无局部极值。

**三维**：$V(\\boldsymbol{r})$ 在球面上的平均值等于球心处的值。

**唯一性定理**：若边界上的 $V$ 给定，则区域内的 $V$ 唯一确定。

## 分离变量法

### 直角坐标

二维拉普拉斯方程分离变量：

$$
\\begin{align}
V(x,y) = (Ae^{kx}+Be^{-kx})(C\\sin ky+D\\cos ky)
\\end{align}
$$

边界条件确定 $k$ 的取值（如 $k = n\\pi/a$）和傅里叶系数。

### 球坐标（轴对称）

$$
\\begin{align}
V(r,\\theta) = \\sum_{l=0}^\\infty \\left(A_l r^l + \\frac{B_l}{r^{l+1}}\\right)P_l(\\cos\\theta)
\\end{align}
$$

勒让德多项式 $P_l(x)$ 满足正交性：

$$
\\begin{align}
\\int_{-1}^1 P_l(x)P_{l'}(x)\\,\\mathrm{d}x = \\frac{2}{2l+1}\\delta_{ll'}
\\end{align}
$$

### 柱坐标（无 $z$ 依赖）

径向方程为贝塞尔方程，解包含 $\\ln s$ 和 $s^{\\pm k}$。

## 镜像法

**点电荷与接地平面**：用 $-q$ 在对称位置代替感应电荷。

**点电荷与接地球**：像电荷 $q' = -\\dfrac{R}{a}q$ 在距离球心 $b = \\dfrac{R^2}{a}$ 处。

**点电荷与导体平面夹角**：若夹角为 $\\pi/n$（$n$ 整数），可用 $2n-1$ 个像电荷。

## 多极展开

对远场势的展开：

$$
\\begin{align}
V(\\boldsymbol{r}) = \\frac{1}{4\\pi\\epsilon_0}\\sum_{n=0}^\\infty \\frac{1}{r^{n+1}}\\int (r')^n P_n(\\cos\\alpha)\\rho(\\boldsymbol{r}')\\,\\mathrm{d}\\tau'
\\end{align}
$$

**单极项**：$V_{\\text{mon}} = \\dfrac{1}{4\\pi\\epsilon_0}\\dfrac{Q}{r}$，其中 $Q = \\int \\rho\\,\\mathrm{d}\\tau$。

**偶极项**：$V_{\\text{dip}} = \\dfrac{1}{4\\pi\\epsilon_0}\\dfrac{\\boldsymbol{p}\\cdot\\hat{\\boldsymbol{r}}}{r^2}$，其中 $\\boldsymbol{p} = \\int \\boldsymbol{r}'\\rho(\\boldsymbol{r}')\\,\\mathrm{d}\\tau'$。

**偶极子电场**：

$$
\\begin{align}
\\boldsymbol{E}_{\\text{dip}} = \\frac{1}{4\\pi\\epsilon_0}\\frac{1}{r^3}[3(\\boldsymbol{p}\\cdot\\hat{\\boldsymbol{r}})\\hat{\\boldsymbol{r}}-\\boldsymbol{p}]
\\end{align}
$$

（注意在原点处有 $\\delta$ 函数项。）
`,a={title:"势",author:"NeoWangKing",date:new Date(17750016e5),lastMod:new Date(17828208e5),tags:["物理","电动力学","势","拉普拉斯方程","镜像法","多极展开"],category:["物理","电动力学"],summary:"本文系统介绍电势的求解方法，包括拉普拉斯方程、分离变量法、镜像法和多极展开，涵盖直角坐标、球坐标和柱坐标下的解。",comments:!0,draft:!1,sticky:0},$={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/05-Potentials.md",rawData:void 0};export{$ as _internal,o as body,l as collection,a as data,n as id,t as slug};
