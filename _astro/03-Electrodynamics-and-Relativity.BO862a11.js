const n="physics/Electrodynamics/03-Electrodynamics-and-Relativity.md",a="posts",t="physics/electrodynamics/03-electrodynamics-and-relativity",$=`
## 狭义相对论的基本假设

1. **相对性原理**：所有惯性参考系中的物理定律形式相同。
2. **光速不变原理**：真空中光速对所有惯性观察者都相同，与光源运动无关。

## 洛伦兹变换

设 $\\bar S$ 相对 $S$ 以速度 $v$ 沿 $x$ 轴运动：

$$
\\begin{align}
\\bar{x} &= \\gamma(x - vt) \\\\
\\bar{y} &= y \\\\
\\bar{z} &= z \\\\
\\bar{t} &= \\gamma\\left(t - \\frac{v}{c^2}x\\right)
\\end{align}
$$

其中 $\\gamma = \\dfrac{1}{\\sqrt{1-v^2/c^2}}$。

逆变换：

$$
\\begin{align}
x &= \\gamma(\\bar{x} + v\\bar{t}) \\\\
t &= \\gamma\\left(\\bar{t} + \\frac{v}{c^2}\\bar{x}\\right)
\\end{align}
$$

## 时空结构

**四维矢量** $x^\\mu = (ct, x, y, z)$。

**间隔不变性**：

$$
\\begin{align}
I = -(c\\Delta t)^2 + (\\Delta x)^2 + (\\Delta y)^2 + (\\Delta z)^2
\\end{align}
$$

**类时** $I<0$，**类空** $I>0$，**类光** $I=0$。

## 相对论力学

**固有时间**：$\\mathrm{d}\\tau = \\dfrac{1}{\\gamma}\\mathrm{d}t$

**四维速度**：$\\eta^\\mu = \\dfrac{\\mathrm{d}x^\\mu}{\\mathrm{d}\\tau} = \\gamma(c, \\boldsymbol{u})$

**相对论能量-动量**：

$$
\\begin{align}
E = \\gamma m c^2, \\quad \\boldsymbol{p} = \\gamma m \\boldsymbol{u}, \\quad E^2 = p^2 c^2 + m^2 c^4
\\end{align}
$$

**相对论动能**：$E_{\\text{kin}} = E - mc^2 = (\\gamma-1)mc^2$。

## 相对论电动力学

### 场变换

设 $\\bar S$ 沿 $x$ 方向相对 $S$ 以速度 $v$ 运动：

$$
\\begin{align}
\\bar{E}_x &= E_x \\\\
\\bar{E}_y &= \\gamma(E_y - vB_z) \\\\
\\bar{E}_z &= \\gamma(E_z + vB_y) \\\\
\\bar{B}_x &= B_x \\\\
\\bar{B}_y &= \\gamma\\left(B_y + \\frac{v}{c^2}E_z\\right) \\\\
\\bar{B}_z &= \\gamma\\left(B_z - \\frac{v}{c^2}E_y\\right)
\\end{align}
$$

### 场张量 $F^{\\mu\\nu}$

$$
\\begin{align}
F^{\\mu\\nu} =
\\begin{pmatrix}
0 & E_x/c & E_y/c & E_z/c \\\\
-E_x/c & 0 & B_z & -B_y \\\\
-E_y/c & -B_z & 0 & B_x \\\\
-E_z/c & B_y & -B_x & 0
\\end{pmatrix}
\\end{align}
$$

对偶场张量 $G^{\\mu\\nu}$ 通过 $E/c \\to B$，$B \\to -E/c$ 得到。

### 麦克斯韦方程的协变形式

$$
\\begin{align}
\\partial_\\mu F^{\\mu\\nu} = \\mu_0 J^\\nu, \\quad \\partial_\\mu G^{\\mu\\nu} = 0
\\end{align}
$$

其中 $J^\\mu = (c\\rho, \\boldsymbol{J})$ 是四维电流密度。

### 洛伦兹力协变形式

$$
\\begin{align}
K^\\mu = q\\eta_\\nu F^{\\mu\\nu}
\\end{align}
$$

其中 $K^\\mu$ 是闵可夫斯基力，$\\eta^\\mu$ 是四维速度。
`,m={title:"电动力学与相对论",author:"NeoWangKing",date:new Date(17731872e5),lastMod:new Date(17828208e5),tags:["物理","电动力学","狭义相对论","洛伦兹变换"],category:["物理","电动力学"],summary:"本文系统介绍狭义相对论的基本假设、洛伦兹变换、时空结构、相对论力学以及相对论电动力学，强调电动力学与相对论的融合。",comments:!0,draft:!1,sticky:0},e={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/03-Electrodynamics-and-Relativity.md",rawData:void 0};export{e as _internal,$ as body,a as collection,m as data,n as id,t as slug};
