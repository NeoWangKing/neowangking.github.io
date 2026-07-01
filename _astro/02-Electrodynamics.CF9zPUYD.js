const n="physics/Electrodynamics/02-Electrodynamics.md",l="posts",o="physics/electrodynamics/02-electrodynamics",a=`
## 麦克斯韦方程组

真空中的麦克斯韦方程组（微分形式）：

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{E} &= \\frac{\\rho}{\\epsilon_0} \\quad (\\text{高斯定律}) \\\\
\\nabla \\cdot \\boldsymbol{B} &= 0 \\\\
\\nabla \\times \\boldsymbol{E} &= -\\frac{\\partial \\boldsymbol{B}}{\\partial t} \\quad (\\text{法拉第定律}) \\\\
\\nabla \\times \\boldsymbol{B} &= \\mu_0 \\boldsymbol{J} + \\mu_0\\epsilon_0 \\frac{\\partial \\boldsymbol{E}}{\\partial t} \\quad (\\text{安培-麦克斯韦定律})
\\end{align}
$$

### 洛伦兹力定律

电荷 $q$ 在电磁场中受到的力为

$$
\\begin{align}
\\boldsymbol{F} = q(\\boldsymbol{E} + \\boldsymbol{v} \\times \\boldsymbol{B})
\\end{align}
$$

磁力不做功：$\\mathrm{d}W_{\\text{mag}} = \\boldsymbol{F}_{\\text{mag}}\\cdot\\mathrm{d}\\boldsymbol{l} = 0$。

## 电磁感应与电动势

**电动势 (EMF)**：

$$
\\begin{align}
\\mathcal{E} \\equiv \\oint \\boldsymbol{f} \\cdot \\mathrm{d}\\boldsymbol{l} = \\oint \\boldsymbol{f}_s \\cdot \\mathrm{d}\\boldsymbol{l}
\\end{align}
$$

其中 $\\boldsymbol{f}_s$ 是源力（如化学力）。

**法拉第定律**（积分形式）：

$$
\\begin{align}
\\oint \\boldsymbol{E} \\cdot \\mathrm{d}\\boldsymbol{l} = -\\frac{\\mathrm{d}\\Phi}{\\mathrm{d}t}, \\quad \\Phi = \\int \\boldsymbol{B} \\cdot \\mathrm{d}\\boldsymbol{a}
\\end{align}
$$

**楞次定律**：感应电流的方向总是使其产生的磁通量抵抗原磁通量的变化。

## 电感与磁能

**互感** $M$：$\\Phi_2 = M_{21} I_1$，$M_{21}=M_{12}$。

**自感** $L$：$\\Phi = L I$，$\\mathcal{E} = -L\\dfrac{\\mathrm{d}I}{\\mathrm{d}t}$。

**磁能**：

$$
\\begin{align}
W = \\frac{1}{2}LI^2 = \\frac{1}{2\\mu_0}\\int B^2\\,\\mathrm{d}\\tau
\\end{align}
$$

## 位移电流

麦克斯韦修正项 $\\epsilon_0\\dfrac{\\partial \\boldsymbol{E}}{\\partial t}$ 解决了安培定律在非稳恒情况下的矛盾。位移电流密度定义为 $\\boldsymbol{J}_d = \\epsilon_0\\dfrac{\\partial \\boldsymbol{E}}{\\partial t}$。

## 物质中的麦克斯韦方程组

引入辅助场 $\\boldsymbol{D} = \\epsilon_0\\boldsymbol{E} + \\boldsymbol{P}$ 和 $\\boldsymbol{H} = \\dfrac{1}{\\mu_0}\\boldsymbol{B} - \\boldsymbol{M}$：

$$
\\begin{align}
\\nabla\\cdot\\boldsymbol{D} &= \\rho_f \\\\
\\nabla\\times\\boldsymbol{E} &= -\\frac{\\partial\\boldsymbol{B}}{\\partial t} \\\\
\\nabla\\cdot\\boldsymbol{B} &= 0 \\\\
\\nabla\\times\\boldsymbol{H} &= \\boldsymbol{J}_f + \\frac{\\partial\\boldsymbol{D}}{\\partial t}
\\end{align}
$$

### 边界条件

在两种介质交界面上：

$$
\\begin{align}
D_{\\text{above}}^\\perp - D_{\\text{below}}^\\perp &= \\sigma_f \\\\
E_{\\text{above}}^\\parallel &= E_{\\text{below}}^\\parallel \\\\
B_{\\text{above}}^\\perp &= B_{\\text{below}}^\\perp \\\\
H_{\\text{above}}^\\parallel - H_{\\text{below}}^\\parallel &= \\boldsymbol{K}_f\\times\\hat{\\boldsymbol{n}}
\\end{align}
$$
`,t={title:"电动力学",author:"NeoWangKing",date:new Date(17725824e5),lastMod:new Date(17828208e5),tags:["物理","电动力学","麦克斯韦方程组","电磁感应"],category:["物理","电动力学"],summary:"本文系统介绍电动力学的核心内容，包括麦克斯韦方程组、电磁感应、电感、位移电流以及物质中的麦克斯韦方程组。",comments:!0,draft:!1,sticky:0},b={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/02-Electrodynamics.md",rawData:void 0};export{b as _internal,a as body,l as collection,t as data,n as id,o as slug};
