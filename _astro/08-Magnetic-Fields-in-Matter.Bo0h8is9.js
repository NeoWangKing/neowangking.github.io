const n="physics/Electrodynamics/08-Magnetic-Fields-in-Matter.md",l="posts",o="physics/electrodynamics/08-magnetic-fields-in-matter",b=`
## 磁化

**磁化机制**：

- 顺磁性：原子磁矩在磁场中转向排列（与场同向）。
- 抗磁性：轨道电子运动改变产生与场反向的磁矩（普遍但微弱）。
- 铁磁性：自发磁化，存在磁畴和磁滞。

**磁化强度** $\\boldsymbol{M}$ 定义为单位体积内的磁偶极矩。

**束缚电流**：

$$
\\begin{align}
\\boldsymbol{J}_b = \\nabla\\times\\boldsymbol{M}, \\quad \\boldsymbol{K}_b = \\boldsymbol{M}\\times\\hat{\\boldsymbol{n}}
\\end{align}
$$

物理图像：内部小电流环相互抵消，表面形成净电流。

## 辅助场 $\\boldsymbol{H}$

$$
\\begin{align}
\\boldsymbol{H} = \\frac{1}{\\mu_0}\\boldsymbol{B} - \\boldsymbol{M}, \\quad \\nabla\\times\\boldsymbol{H} = \\boldsymbol{J}_f
\\end{align}
$$

积分形式：$\\oint \\boldsymbol{H}\\cdot\\mathrm{d}\\boldsymbol{l} = I_{f,\\text{enc}}$。

**注意**：$\\nabla\\cdot\\boldsymbol{H} = -\\nabla\\cdot\\boldsymbol{M}$，一般不为零，故 $\\boldsymbol{H}$ 不能仅由自由电流决定。

## 边界条件

在两种磁介质界面：

$$
\\begin{align}
B_{\\text{above}}^\\perp &= B_{\\text{below}}^\\perp \\\\
H_{\\text{above}}^\\parallel - H_{\\text{below}}^\\parallel &= \\boldsymbol{K}_f\\times\\hat{\\boldsymbol{n}}
\\end{align}
$$

## 线性磁介质

$$
\\begin{align}
\\boldsymbol{M} = \\chi_m\\boldsymbol{H}, \\quad \\boldsymbol{B} = \\mu\\boldsymbol{H}, \\quad \\mu = \\mu_0(1+\\chi_m)
\\end{align}
$$

**磁化率** $\\chi_m$：顺磁为正，抗磁为负（典型值 $10^{-5}$）。

**铁磁性**：非线性的，$\\boldsymbol{M}$ 与 $\\boldsymbol{H}$ 不成正比，存在磁滞回线。居里点以上变为顺磁性。

## 物质中的麦克斯韦方程组

$$
\\begin{align}
\\nabla\\cdot\\boldsymbol{D} &= \\rho_f \\\\
\\nabla\\times\\boldsymbol{E} &= -\\frac{\\partial\\boldsymbol{B}}{\\partial t} \\\\
\\nabla\\cdot\\boldsymbol{B} &= 0 \\\\
\\nabla\\times\\boldsymbol{H} &= \\boldsymbol{J}_f + \\frac{\\partial\\boldsymbol{D}}{\\partial t}
\\end{align}
$$

**极化电流**：$\\boldsymbol{J}_p = \\dfrac{\\partial\\boldsymbol{P}}{\\partial t}$，满足 $\\dfrac{\\partial\\rho_b}{\\partial t} = -\\nabla\\cdot\\boldsymbol{J}_p$。

## 磁能

线性磁介质中的磁能：

$$
\\begin{align}
W = \\frac{1}{2}\\int \\boldsymbol{H}\\cdot\\boldsymbol{B}\\,\\mathrm{d}\\tau
\\end{align}
$$
`,a={title:"物质中的磁场",author:"NeoWangKing",date:new Date(17762112e5),lastMod:new Date(17828208e5),tags:["物理","电动力学","磁化","磁介质","磁化强度"],category:["物理","电动力学"],summary:"本文系统介绍物质中的磁场，包括磁化机制、束缚电流、辅助场H、线性磁介质、铁磁性以及边界条件。",comments:!0,draft:!1,sticky:0,chapter:8},t={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/08-Magnetic-Fields-in-Matter.md",rawData:void 0};export{t as _internal,b as body,l as collection,a as data,n as id,o as slug};
