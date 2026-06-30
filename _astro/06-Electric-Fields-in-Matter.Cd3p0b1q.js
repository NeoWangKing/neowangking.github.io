const n="physics/Electrodynamics/06-Electric-Fields-in-Matter.md",l="posts",o="physics/electrodynamics/06-electric-fields-in-matter",b=`
## 极化机制

- **原子极化（拉伸）**：中性原子在外电场中形成感应偶极矩 $\\boldsymbol{p} = \\alpha \\boldsymbol{E}$。
- **分子极化（取向）**：具有固有偶极矩的分子在外电场中取向排列。

### 偶极子在电场中的行为

力矩：

$$
\\begin{align}
\\boldsymbol{N} = \\boldsymbol{p} \\times \\boldsymbol{E}
\\end{align}
$$

非均匀电场中的力：

$$
\\begin{align}
\\boldsymbol{F} = (\\boldsymbol{p} \\cdot \\nabla) \\boldsymbol{E}
\\end{align}
$$

## 极化矢量

**极化强度** $\\boldsymbol{P}$ 定义为偶极矩密度：

$$
\\begin{align}
\\boldsymbol{P} = \\frac{\\sum \\boldsymbol{p}_i}{\\Delta V}
\\end{align}
$$

### 束缚电荷

- 面束缚电荷密度：$\\sigma_b = \\boldsymbol{P} \\cdot \\hat{\\boldsymbol{n}}$
- 体束缚电荷密度：$\\rho_b = -\\nabla \\cdot \\boldsymbol{P}$

### 均匀极化球体

球内电场：$\\boldsymbol{E} = -\\dfrac{1}{3\\epsilon_0} \\boldsymbol{P}$  
球外电场：偶极子场，$\\boldsymbol{p} = \\dfrac{4\\pi}{3}R^3 \\boldsymbol{P}$

## 电位移矢量

定义 $\\boldsymbol{D} = \\epsilon_0 \\boldsymbol{E} + \\boldsymbol{P}$，则

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{D} = \\rho_f, \\quad \\oint \\boldsymbol{D} \\cdot \\mathrm{d}\\boldsymbol{a} = Q_{f,\\text{enc}}
\\end{align}
$$

## 线性电介质

$$
\\begin{align}
\\boldsymbol{P} = \\epsilon_0 \\chi_e \\boldsymbol{E}, \\quad \\boldsymbol{D} = \\epsilon \\boldsymbol{E}, \\quad \\epsilon = \\epsilon_0 \\epsilon_r, \\quad \\epsilon_r = 1 + \\chi_e
\\end{align}
$$

## 边界条件

在两种介质的分界面上（无自由面电荷时）：

$$
\\begin{align}
D_{1\\perp} = D_{2\\perp}, \\quad E_{1\\parallel} = E_{2\\parallel}
\\end{align}
$$

## 电介质中的能量

$$
\\begin{align}
W = \\frac{1}{2} \\int \\boldsymbol{D} \\cdot \\boldsymbol{E} \\,\\mathrm{d}\\tau, \\quad u = \\frac{1}{2} \\boldsymbol{D} \\cdot \\boldsymbol{E} = \\frac{1}{2} \\epsilon E^2
\\end{align}
$$
`,s={title:"电介质中的电场",author:"NeoWangKing",date:new Date(17756928e5),lastMod:new Date(17828298e5),tags:["物理","电动力学","电介质","极化","电位移矢量","线性电介质"],category:["物理","电动力学"],summary:"本文介绍电介质在电场中的行为，包括极化机制、极化矢量、束缚电荷、电位移矢量、线性电介质的性质，以及电介质中的能量和边界条件。",comments:!0,draft:!1,sticky:0},d={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/06-Electric-Fields-in-Matter.md",rawData:void 0};export{d as _internal,b as body,l as collection,s as data,n as id,o as slug};
