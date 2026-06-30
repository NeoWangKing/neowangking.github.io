const n="physics/Electrodynamics/05-Advanced-Electrostatics.md",a="posts",l="physics/electrodynamics/05-advanced-electrostatics",t=`
## 拉普拉斯方程的基本性质

### 平均性质

满足 $\\nabla^2 V = 0$ 的函数在球心的值等于球面上值的平均。

**极值原理**：拉普拉斯方程的解在区域内没有局部极值，极值只能出现在边界上。

### 唯一性定理

**第一唯一性定理**：给定边界上 $V$ 的值，拉普拉斯方程的解唯一。

**第二唯一性定理**：给定各导体的电势（或总电荷），区域内静电场的解唯一。

## 镜像法

### 点电荷与接地导体平面

点电荷 $q$ 位于导体平面上方 $d$ 处，镜像电荷 $-q$ 位于对称位置：

$$
\\begin{align}
V(x,y,z) = \\frac{1}{4\\pi\\epsilon_0} \\left[ \\frac{q}{\\sqrt{x^2+y^2+(z-d)^2}} - \\frac{q}{\\sqrt{x^2+y^2+(z+d)^2}} \\right]
\\end{align}
$$

感应电荷面密度：

$$
\\begin{align}
\\sigma = -\\frac{qd}{2\\pi (x^2+y^2+d^2)^{3/2}}
\\end{align}
$$

点电荷所受引力：

$$
\\begin{align}
F = \\frac{1}{4\\pi\\epsilon_0} \\frac{q^2}{(2d)^2}
\\end{align}
$$

### 点电荷与接地导体球

电荷 $q$ 在距球心 $a$ 处，镜像电荷 $q' = -\\dfrac{R}{a} q$，位置 $b = \\dfrac{R^2}{a}$。

## 分离变量法

### 直角坐标系

二维拉普拉斯方程的通解：

$$
\\begin{align}
V(x,y) = \\sum_{n=1}^{\\infty} C_n e^{-n\\pi x/a} \\sin\\left(\\frac{n\\pi y}{a}\\right), \\quad C_n = \\frac{2}{a} \\int_0^a V_0(y) \\sin\\left(\\frac{n\\pi y}{a}\\right) \\mathrm{d}y
\\end{align}
$$

### 球坐标系（轴对称）

勒让德多项式 $P_l(\\cos\\theta)$ 由罗德里格斯公式给出：

$$
\\begin{align}
P_l(x) = \\frac{1}{2^l l!} \\frac{\\mathrm{d}^l}{\\mathrm{d}x^l} (x^2 - 1)^l
\\end{align}
$$

前几项：$P_0=1$，$P_1=x$，$P_2=\\frac{1}{2}(3x^2-1)$。

正交性：

$$
\\begin{align}
\\int_{-1}^1 P_l(x) P_{l'}(x) \\,\\mathrm{d}x = \\frac{2}{2l+1} \\delta_{ll'}
\\end{align}
$$

轴对称拉普拉斯方程的通解：

$$
\\begin{align}
V(r,\\theta) = \\sum_{l=0}^{\\infty} \\left( A_l r^l + \\frac{B_l}{r^{l+1}} \\right) P_l(\\cos\\theta)
\\end{align}
$$

## 多极展开

### 电势的展开

$$
\\begin{align}
V(\\boldsymbol{r}) = \\frac{1}{4\\pi\\epsilon_0} \\left[ \\frac{Q}{r} + \\frac{\\boldsymbol{p}\\cdot\\hat{\\boldsymbol{r}}}{r^2} + \\frac{1}{2r^3} \\sum_{i,j} Q_{ij} \\hat{r}_i \\hat{r}_j + \\cdots \\right]
\\end{align}
$$

### 电偶极子

偶极矩：$\\boldsymbol{p} = q \\boldsymbol{d}$。

电势：

$$
\\begin{align}
V_{\\text{dip}}(\\boldsymbol{r}) = \\frac{1}{4\\pi\\epsilon_0} \\frac{\\boldsymbol{p}\\cdot\\hat{\\boldsymbol{r}}}{r^2} = \\frac{p\\cos\\theta}{4\\pi\\epsilon_0 r^2}
\\end{align}
$$

电场：

$$
\\begin{align}
\\boldsymbol{E}_{\\text{dip}}(\\boldsymbol{r}) = \\frac{1}{4\\pi\\epsilon_0} \\frac{1}{r^3} [3(\\boldsymbol{p}\\cdot\\hat{\\boldsymbol{r}})\\hat{\\boldsymbol{r}} - \\boldsymbol{p}]
\\end{align}
$$
`,i={title:"静电场的高级求解方法",author:"NeoWangKing",date:new Date(17750016e5),lastMod:new Date(1782828e6),tags:["物理","电动力学","拉普拉斯方程","镜像法","分离变量法","多极展开"],category:["物理","电动力学"],summary:"本文介绍静电场的高级求解方法，包括拉普拉斯方程的性质与唯一性定理、镜像法、直角坐标与球坐标下的分离变量法（勒让德多项式），以及多极展开与偶极子场。",comments:!0,draft:!1,sticky:0},e={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/05-Advanced-Electrostatics.md",rawData:void 0};export{e as _internal,t as body,a as collection,i as data,n as id,l as slug};
