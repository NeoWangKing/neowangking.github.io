const n="physics/Electrodynamics/03-Potentials-Fields-and-Relativity.md",a="posts",l="physics/electrodynamics/03-potentials-fields-and-relativity",t=`
## 势与场

### 矢势与标势

由 $\\boldsymbol{B} = \\nabla \\times \\boldsymbol{A}$ 代入法拉第定律得

$$
\\begin{align}
\\nabla \\times \\left( \\boldsymbol{E} + \\frac{\\partial \\boldsymbol{A}}{\\partial t} \\right) = 0
\\end{align}
$$

故可引入标势 $V$，使得

$$
\\begin{align}
\\boldsymbol{E} = -\\nabla V - \\frac{\\partial \\boldsymbol{A}}{\\partial t}
\\end{align}
$$

代入麦克斯韦方程组，得到关于势的耦合方程：

$$
\\begin{align}
\\nabla^2 V + \\frac{\\partial}{\\partial t}(\\nabla \\cdot \\boldsymbol{A}) &= -\\frac{1}{\\epsilon_0}\\rho \\\\
\\nabla^2 \\boldsymbol{A} - \\mu_0\\epsilon_0 \\frac{\\partial^2 \\boldsymbol{A}}{\\partial t^2} - \\nabla\\left(\\nabla \\cdot \\boldsymbol{A} + \\mu_0\\epsilon_0 \\frac{\\partial V}{\\partial t}\\right) &= -\\mu_0 \\boldsymbol{J}
\\end{align}
$$

### 规范变换

$$
\\begin{align}
\\boldsymbol{A}' = \\boldsymbol{A} + \\nabla\\lambda, \\quad V' = V - \\frac{\\partial\\lambda}{\\partial t}
\\end{align}
$$

### 洛伦兹规范

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{A} + \\mu_0\\epsilon_0 \\frac{\\partial V}{\\partial t} = 0
\\end{align}
$$

在此规范下，势的方程解耦为达朗贝尔方程：

$$
\\begin{align}
\\Box^2 V = -\\frac{1}{\\epsilon_0}\\rho, \\quad \\Box^2 \\boldsymbol{A} = -\\mu_0 \\boldsymbol{J}
\\end{align}
$$

其中 $\\Box^2 = \\nabla^2 - \\mu_0\\epsilon_0 \\dfrac{\\partial^2}{\\partial t^2}$。

## 狭义相对论

### 爱因斯坦的基本假设

1. **相对性原理**：所有物理定律在一切惯性参考系中形式相同。
2. **光速不变原理**：真空中的光速对所有惯性观察者都相同。

### 洛伦兹变换

设 $\\bar{S}$ 以速度 $v$ 沿 $x$ 轴方向相对于 $S$ 系运动：

$$
\\begin{align}
\\bar{x} = \\gamma (x - vt), \\quad \\bar{y} = y, \\quad \\bar{z} = z, \\quad \\bar{t} = \\gamma \\left( t - \\frac{v}{c^2} x \\right)
\\end{align}
$$

其中 $\\gamma = 1/\\sqrt{1-v^2/c^2}$。

### 四维坐标

定义 $x^\\mu = (ct, x, y, z)$，洛伦兹变换为

$$
\\begin{align}
\\bar{x}^\\mu = \\Lambda^\\mu_{\\ \\nu} x^\\nu, \\quad \\Lambda = \\begin{pmatrix}
\\gamma & -\\gamma\\beta & 0 & 0 \\\\
-\\gamma\\beta & \\gamma & 0 & 0 \\\\
0 & 0 & 1 & 0 \\\\
0 & 0 & 0 & 1
\\end{pmatrix}
\\end{align}
$$

### 四维矢量与度规

度规 $g_{00} = -1, g_{11}=g_{22}=g_{33}=1$。四维点积：

$$
\\begin{align}
(a,b) = g_{\\mu\\nu} a^\\mu b^\\nu = -a^0 b^0 + a^1 b^1 + a^2 b^2 + a^3 b^3
\\end{align}
$$

时空间隔：

$$
\\begin{align}
I = - (c\\Delta t)^2 + (\\Delta x)^2 + (\\Delta y)^2 + (\\Delta z)^2
\\end{align}
$$

- $I < 0$：类时间隔
- $I > 0$：类空间隔
- $I = 0$：类光间隔

### 四维速度与动量

**固有时**：$\\mathrm{d}\\tau = \\dfrac{1}{\\gamma}\\mathrm{d}t$

**四维速度**：$\\eta^\\mu = \\dfrac{\\mathrm{d}x^\\mu}{\\mathrm{d}\\tau} = (\\gamma c, \\gamma \\boldsymbol{u})$

**四维动量**：$p^\\mu = m\\eta^\\mu = (E/c, \\boldsymbol{p})$，其中 $E = \\gamma m c^2$，$\\boldsymbol{p} = \\gamma m \\boldsymbol{u}$。

**能量-动量关系**：

$$
\\begin{align}
E^2 - p^2 c^2 = (m c^2)^2
\\end{align}
$$

## 相对论电动力学

### 电磁场的变换规律

$$
\\begin{align}
\\bar{E}_x = E_x, \\quad \\bar{E}_y = \\gamma(E_y - v B_z), \\quad \\bar{E}_z = \\gamma(E_z + v B_y)
\\end{align}
$$

$$
\\begin{align}
\\bar{B}_x = B_x, \\quad \\bar{B}_y = \\gamma\\left(B_y + \\frac{v}{c^2} E_z\\right), \\quad \\bar{B}_z = \\gamma\\left(B_z - \\frac{v}{c^2} E_y\\right)
\\end{align}
$$

### 电磁场张量

引入四维势 $A^\\mu = (V/c, \\boldsymbol{A})$，电磁场张量为

$$
\\begin{align}
F^{\\mu\\nu} = \\frac{\\partial A^\\nu}{\\partial x_\\mu} - \\frac{\\partial A^\\mu}{\\partial x_\\nu}
\\end{align}
$$

其分量为

$$
\\begin{align}
F^{\\mu\\nu} = \\begin{pmatrix}
0 & E_x/c & E_y/c & E_z/c \\\\
-E_x/c & 0 & B_z & -B_y \\\\
-E_y/c & -B_z & 0 & B_x \\\\
-E_z/c & B_y & -B_x & 0
\\end{pmatrix}
\\end{align}
$$

对偶张量 $G^{\\mu\\nu}$ 将 $\\boldsymbol{E}$ 替换为 $c\\boldsymbol{B}$，$\\boldsymbol{B}$ 替换为 $-\\boldsymbol{E}/c$。

### 麦克斯韦方程的张量形式

引入四维电流 $J^\\mu = (\\rho c, \\boldsymbol{J})$：

$$
\\begin{align}
\\frac{\\partial F^{\\mu\\nu}}{\\partial x^\\nu} = \\mu_0 J^\\mu, \\quad \\frac{\\partial G^{\\mu\\nu}}{\\partial x^\\nu} = 0
\\end{align}
$$
`,i={title:"势与场和狭义相对论",author:"NeoWangKing",date:new Date(17731872e5),lastMod:new Date(1782819255e3),tags:["物理","电动力学","矢势","标势","狭义相对论","电磁场张量"],category:["物理","电动力学"],summary:"本文介绍电动力学中的势与场，包括矢势和标势的引入、规范变换（库仑规范与洛伦兹规范）；以及狭义相对论的基本原理、洛伦兹变换、四维时空、相对论动力学，并进一步讨论相对论电动力学，包括电磁场的变换规律和电磁场张量。",comments:!0,draft:!1,sticky:0},m={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/03-Potentials-Fields-and-Relativity.md",rawData:void 0};export{m as _internal,t as body,a as collection,i as data,n as id,l as slug};
