const n="physics/Electrodynamics/5-Advanced-Electrostatics.md",a="posts",$="physics/electrodynamics/5-advanced-electrostatics",t=`
## 拉普拉斯方程的基本性质

### 平均性质

对于满足拉普拉斯方程 $\\nabla^2 V = 0$ 的函数，在无电荷区域具有重要的平均性质：

- **二维情形**：$V$ 在圆心的值等于圆周上值的平均
- **三维情形**：$V$ 在球心的值等于球面上值的平均

**推论**：拉普拉斯方程的解在区域内没有局部极值，极值只能出现在边界上。这一性质称为**极值原理**。

### 唯一性定理

**第一唯一性定理**：在给定边界条件（$V$ 在边界上的值）下，拉普拉斯方程的解是唯一的。

**第二唯一性定理**：对于导体系统，给定各导体的电势（或总电荷），区域内静电场的解是唯一的。

唯一性定理保证了静电学问题的解是确定的，也是镜像法等方法的理论基础。

## 镜像法

### 基本原理

镜像法利用唯一性定理，将导体边界的影响用假想的镜像电荷代替，从而将原问题转化为无界空间中的电荷分布问题。关键在于镜像电荷的设置必须满足原边界条件。

### 点电荷与接地导体平面

**问题**：点电荷 $q$ 位于接地无穷大导体平板上方 $d$ 处，求上半空间的电势。

**解**：在导体板下方对称位置放置镜像电荷 $-q$，则上半空间的电势为

$$
\\begin{align}
V(x,y,z) = \\frac{1}{4\\pi\\epsilon_0} \\left[ \\frac{q}{\\sqrt{x^2+y^2+(z-d)^2}} - \\frac{q}{\\sqrt{x^2+y^2+(z+d)^2}} \\right]
\\end{align}
$$

在 $z=0$ 的平面上，$V=0$，满足导体接地条件。导体表面感应电荷的面密度为

$$
\\begin{align}
\\sigma = -\\epsilon_0 \\left. \\frac{\\partial V}{\\partial z} \\right|_{z=0} = -\\frac{qd}{2\\pi (x^2+y^2+d^2)^{3/2}}
\\end{align}
$$

点电荷所受的力等于镜像电荷对它的吸引力：

$$
\\begin{align}
F = \\frac{1}{4\\pi\\epsilon_0} \\frac{q^2}{(2d)^2}
\\end{align}
$$

### 点电荷与接地导体球

**问题**：点电荷 $q$ 位于接地导体球外距离 $a$ 处（球心到电荷的距离），球半径为 $R$，求球外电势。

**解**：在球心与电荷的连线上放置镜像电荷 $q'$，位置在球内距球心 $b$ 处，使得球面电势为零。由几何关系可得

$$
\\begin{align}
q' = -\\frac{R}{a} q, \\quad b = \\frac{R^2}{a}
\\end{align}
$$

球外电势为

$$
\\begin{align}
V(\\boldsymbol{r}) = \\frac{1}{4\\pi\\epsilon_0} \\left( \\frac{q}{|\\boldsymbol{r} - \\boldsymbol{a}|} + \\frac{q'}{|\\boldsymbol{r} - \\boldsymbol{b}|} \\right)
\\end{align}
$$

### 其他镜像问题

镜像法还可处理：

- 点电荷与绝缘导体平面（用等量同号镜像电荷，但需考虑电势常数）
- 点电荷与导体球（不接地时需再加一个镜像电荷以保证总电荷为零）
- 线电荷与导体圆柱
- 两相交导体平面形成的角域

## 分离变量法

### 直角坐标系

**问题**：求解二维拉普拉斯方程 $\\dfrac{\\partial^2 V}{\\partial x^2} + \\dfrac{\\partial^2 V}{\\partial y^2} = 0$，边界条件为 $V(0,y)=V_0(y)$，$V(x,0)=V(x,a)=0$，且 $V\\to 0$ 当 $x\\to\\infty$。

**解**：设 $V(x,y)=X(x)Y(y)$，代入方程得

$$
\\begin{align}
\\frac{1}{X}\\frac{\\mathrm{d}^2 X}{\\mathrm{d}x^2} + \\frac{1}{Y}\\frac{\\mathrm{d}^2 Y}{\\mathrm{d}y^2} = 0
\\end{align}
$$

设 $\\dfrac{1}{X}\\dfrac{\\mathrm{d}^2 X}{\\mathrm{d}x^2} = k^2$，$\\dfrac{1}{Y}\\dfrac{\\mathrm{d}^2 Y}{\\mathrm{d}y^2} = -k^2$，解得

$$
\\begin{align}
X(x) &= A e^{kx} + B e^{-kx} \\\\
Y(y) &= C \\sin(ky) + D \\cos(ky)
\\end{align}
$$

由边界条件 $V(x,0)=0$ 得 $D=0$；由 $V(x,a)=0$ 得 $k = n\\pi/a$（$n=1,2,3,\\dots$）；由 $x\\to\\infty$ 时 $V\\to 0$ 得 $A=0$。因此

$$
\\begin{align}
V(x,y) = \\sum_{n=1}^{\\infty} C_n e^{-n\\pi x/a} \\sin\\left(\\frac{n\\pi y}{a}\\right)
\\end{align}
$$

系数 $C_n$ 由 $V(0,y)=V_0(y)$ 确定，利用正弦函数的正交性：

$$
\\begin{align}
C_n = \\frac{2}{a} \\int_0^a V_0(y) \\sin\\left(\\frac{n\\pi y}{a}\\right) \\mathrm{d}y
\\end{align}
$$

### 球坐标系（轴对称情形）

对于具有轴对称性的问题（$V$ 与方位角 $\\phi$ 无关），拉普拉斯方程为

$$
\\begin{align}
\\frac{\\partial}{\\partial r}\\left(r^2 \\frac{\\partial V}{\\partial r}\\right) + \\frac{1}{\\sin\\theta} \\frac{\\partial}{\\partial\\theta}\\left(\\sin\\theta \\frac{\\partial V}{\\partial\\theta}\\right) = 0
\\end{align}
$$

设 $V(r,\\theta) = R(r)\\Theta(\\theta)$，分离变量得

$$
\\begin{align}
\\frac{1}{R}\\frac{\\mathrm{d}}{\\mathrm{d}r}\\left(r^2 \\frac{\\mathrm{d}R}{\\mathrm{d}r}\\right) &= l(l+1) \\\\
\\frac{1}{\\Theta \\sin\\theta} \\frac{\\mathrm{d}}{\\mathrm{d}\\theta}\\left(\\sin\\theta \\frac{\\mathrm{d}\\Theta}{\\mathrm{d}\\theta}\\right) &= -l(l+1)
\\end{align}
$$

径向方程的解为

$$
\\begin{align}
R(r) = A r^l + \\frac{B}{r^{l+1}}
\\end{align}
$$

角向方程的解是**勒让德多项式** $P_l(\\cos\\theta)$，由罗德里格斯公式给出：

$$
\\begin{align}
P_l(x) = \\frac{1}{2^l l!} \\frac{\\mathrm{d}^l}{\\mathrm{d}x^l} (x^2 - 1)^l
\\end{align}
$$

前几项：

- $P_0(x)=1$
- $P_1(x)=x$
- $P_2(x)=\\frac{1}{2}(3x^2-1)$
- $P_3(x)=\\frac{1}{2}(5x^3-3x)$

勒让德多项式在 $[-1,1]$ 上正交：

$$
\\begin{align}
\\int_{-1}^1 P_l(x) P_{l'}(x) \\, \\mathrm{d}x = \\frac{2}{2l+1} \\delta_{ll'}
\\end{align}
$$

### 球坐标系下的通解

轴对称拉普拉斯方程的通解为

$$
\\begin{align}
V(r,\\theta) = \\sum_{l=0}^{\\infty} \\left( A_l r^l + \\frac{B_l}{r^{l+1}} \\right) P_l(\\cos\\theta)
\\end{align}
$$

系数由边界条件确定。

**例**：球面电势 $V(R,\\theta)=V_0(\\theta)$，求球内电势。由球内解 $r<R$ 时 $B_l=0$（否则在原点发散），得

$$
\\begin{align}
V(r,\\theta) = \\sum_{l=0}^{\\infty} A_l r^l P_l(\\cos\\theta)
\\end{align}
$$

在 $r=R$ 处，$V(R,\\theta)=\\sum A_l R^l P_l(\\cos\\theta)=V_0(\\theta)$，由正交性得

$$
\\begin{align}
A_l = \\frac{2l+1}{2R^l} \\int_0^\\pi V_0(\\theta) P_l(\\cos\\theta) \\sin\\theta \\, \\mathrm{d}\\theta
\\end{align}
$$

## 多极展开

### 远场近似

对于局域电荷分布，在远场（$r \\gg r'$）可将电势展开为 $1/r$ 的幂级数：

$$
\\begin{align}
V(\\boldsymbol{r}) = \\frac{1}{4\\pi\\epsilon_0} \\sum_{n=0}^{\\infty} \\frac{1}{r^{n+1}} \\int (r')^n P_n(\\cos\\alpha) \\rho(\\boldsymbol{r}') \\, \\mathrm{d}\\tau'
\\end{align}
$$

其中 $\\alpha$ 是 $\\boldsymbol{r}$ 与 $\\boldsymbol{r}'$ 的夹角。前几项为：

$$
\\begin{align}
V(\\boldsymbol{r}) = \\frac{1}{4\\pi\\epsilon_0} \\left[ \\frac{Q}{r} + \\frac{\\boldsymbol{p} \\cdot \\hat{\\boldsymbol{r}}}{r^2} + \\frac{1}{2r^3} \\sum_{i,j} Q_{ij} \\hat{r}_i \\hat{r}_j + \\cdots \\right]
\\end{align}
$$

### 电偶极子

**电偶极子**由两个等量异号电荷 $+q$ 和 $-q$ 组成，间距为 $d$。其偶极矩定义为

$$
\\begin{align}
\\boldsymbol{p} = q \\boldsymbol{d}
\\end{align}
$$

方向由负电荷指向正电荷。偶极子产生的电势和电场分别为

$$
\\begin{align}
V_{\\text{dip}}(\\boldsymbol{r}) &= \\frac{1}{4\\pi\\epsilon_0} \\frac{\\boldsymbol{p} \\cdot \\hat{\\boldsymbol{r}}}{r^2} = \\frac{p \\cos\\theta}{4\\pi\\epsilon_0 r^2} \\\\
\\boldsymbol{E}_{\\text{dip}}(\\boldsymbol{r}) &= \\frac{p}{4\\pi\\epsilon_0 r^3} (2\\cos\\theta \\, \\hat{\\boldsymbol{r}} + \\sin\\theta \\, \\hat{\\boldsymbol{\\theta}}) \\\\
&= \\frac{1}{4\\pi\\epsilon_0} \\frac{1}{r^3} [3(\\boldsymbol{p} \\cdot \\hat{\\boldsymbol{r}}) \\hat{\\boldsymbol{r}} - \\boldsymbol{p}]
\\end{align}
$$

偶极子场的特征是：

- 电势按 $1/r^2$ 衰减（比点电荷更快）
- 电场按 $1/r^3$ 衰减
- 在 $\\theta=0$ 方向最强，$\\theta=\\pi/2$ 方向最弱

### 高阶多极矩

- **单极矩（总电荷）**：$Q = \\int \\rho \\, \\mathrm{d}\\tau$，电势按 $1/r$ 衰减
- **偶极矩**：$\\boldsymbol{p} = \\int \\boldsymbol{r}' \\rho(\\boldsymbol{r}') \\, \\mathrm{d}\\tau'$，电势按 $1/r^2$ 衰减
- **四极矩**：$Q_{ij} = \\int (3x_i' x_j' - r'^2 \\delta_{ij}) \\rho(\\boldsymbol{r}') \\, \\mathrm{d}\\tau'$，电势按 $1/r^3$ 衰减
- 更高阶多极矩按 $1/r^{n+1}$ 衰减

### 物理偶极子与纯偶极子

- **物理偶极子**：由两个点电荷组成，距离有限，在近场其行为与纯偶极子不同
- **纯偶极子**：将 $q \\to \\infty$、$d \\to 0$，但保持 $p = qd$ 有限，其场严格满足偶极子公式
- 在远场，物理偶极子的场趋近于纯偶极子场

## 总结

本章介绍的求解方法各有特点：

| 方法       | 适用场景                       | 优点                     | 注意事项                 |
| ---------- | ------------------------------ | ------------------------ | ------------------------ |
| 直接积分   | 已知电荷分布                   | 直接、概念清晰           | 积分复杂，不适合复杂边界 |
| 高斯定律   | 高度对称性                     | 计算简单                 | 要求电荷分布具有对称性   |
| 镜像法     | 简单导体边界                   | 将边界问题转化为无界问题 | 仅适用于特定几何         |
| 分离变量法 | 规则边界（直角坐标、球坐标等） | 系统性强，可求精确解     | 需处理级数求和           |
| 多极展开   | 远场近似                       | 揭示多极矩的物理意义     | 近场不适用               |

这些方法共同构成了静电学的完整求解体系，是后续学习电动力学其他内容的基础。
`,l={title:"静电场的高级求解方法",author:"NeoWangKing",date:new Date(1775059468e3),lastMod:new Date(1775059468e3),tags:["物理","电动力学","拉普拉斯方程","镜像法","分离变量法","多极展开","勒让德多项式"],category:["物理","电动力学"],summary:"本文介绍静电学中的高级求解方法，包括拉普拉斯方程的基本性质与唯一性定理、镜像法、直角坐标与球坐标下的分离变量法（勒让德多项式），以及多极展开与偶极子场。",comments:!0,draft:!1,sticky:0},r={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/5-Advanced-Electrostatics.md",rawData:void 0};export{r as _internal,t as body,a as collection,l as data,n as id,$ as slug};
