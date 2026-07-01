const n="physics/Electrodynamics/06-Electric-Fields-in-Matter.md",o="posts",l="physics/electrodynamics/06-electric-fields-in-matter",e=`
## 极化

**极化机制**：

1. 原子在电场中发生位移极化（电子云与核偏移）。
2. 极性分子在电场中转向排列。

**极化强度** $\\boldsymbol{P}$ 定义为单位体积内的电偶极矩。

**束缚电荷**：

$$
\\begin{align}
\\rho_b = -\\nabla\\cdot\\boldsymbol{P}, \\quad \\sigma_b = \\boldsymbol{P}\\cdot\\hat{\\boldsymbol{n}}
\\end{align}
$$

总束缚电荷为零：$\\int \\rho_b\\,\\mathrm{d}\\tau + \\oint \\sigma_b\\,\\mathrm{d}a = 0$。

## 电位移矢量

$$
\\begin{align}
\\boldsymbol{D} \\equiv \\epsilon_0\\boldsymbol{E} + \\boldsymbol{P}, \\quad \\nabla\\cdot\\boldsymbol{D} = \\rho_f
\\end{align}
$$

积分形式：$\\oint \\boldsymbol{D}\\cdot\\mathrm{d}\\boldsymbol{a} = Q_{f,\\text{enc}}$。

**注意**：$\\nabla\\times\\boldsymbol{D} = \\nabla\\times\\boldsymbol{P}$，一般不为零，因此 $\\boldsymbol{D}$ 不能简单由 $\\rho_f$ 的库仑积分给出。

## 边界条件

在两种介质界面：

$$
\\begin{align}
D_{\\text{above}}^\\perp - D_{\\text{below}}^\\perp &= \\sigma_f \\\\
E_{\\text{above}}^\\parallel &= E_{\\text{below}}^\\parallel
\\end{align}
$$

## 线性电介质

$$
\\begin{align}
\\boldsymbol{P} = \\epsilon_0\\chi_e\\boldsymbol{E}, \\quad \\boldsymbol{D} = \\epsilon\\boldsymbol{E}, \\quad \\epsilon = \\epsilon_0(1+\\chi_e)
\\end{align}
$$

**介电常数** $\\epsilon_r = 1+\\chi_e$。

**在均匀线性介质中**：$\\rho_b = -\\dfrac{\\chi_e}{1+\\chi_e}\\rho_f$。

## 边界值问题

利用 $\\nabla^2 V = 0$（若无自由电荷）和边界条件求解。例如：

- 介质球在均匀外场中的电势。
- 点电荷在介质平面附近的势（镜像法推广）。

## 能量

线性介质中的静电能：

$$
\\begin{align}
W = \\frac{1}{2}\\int \\boldsymbol{D}\\cdot\\boldsymbol{E}\\,\\mathrm{d}\\tau
\\end{align}
$$

这包括极化分子“弹簧”的储能。

## 电介质受力

通过虚功原理计算：$F = -\\dfrac{\\mathrm{d}W}{\\mathrm{d}x}$（保持 $Q$ 恒定）或 $F = \\dfrac{1}{2}V^2\\dfrac{\\mathrm{d}C}{\\mathrm{d}x}$（保持 $V$ 恒定）。
`,t={title:"物质中的电场",author:"NeoWangKing",date:new Date(17756928e5),lastMod:new Date(17828208e5),tags:["物理","电动力学","电介质","极化","电位移"],category:["物理","电动力学"],summary:"本文系统介绍物质中的电场，包括极化机制、束缚电荷、电位移矢量、线性电介质、边界条件以及能量问题。",comments:!0,draft:!1,sticky:0},a={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/06-Electric-Fields-in-Matter.md",rawData:void 0};export{a as _internal,e as body,o as collection,t as data,n as id,l as slug};
