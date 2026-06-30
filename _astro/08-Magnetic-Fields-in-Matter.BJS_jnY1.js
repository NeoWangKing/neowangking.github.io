const n="physics/Electrodynamics/08-Magnetic-Fields-in-Matter.md",l="posts",o="physics/electrodynamics/08-magnetic-fields-in-matter",b=`
## 磁化机制

- **抗磁性**：电子轨道在外磁场中产生感应磁矩，方向与外磁场相反（水、铜、铋）。
- **顺磁性**：原子或分子具有固有磁矩，外磁场使其趋向排列（铝、氧、铂）。
- **铁磁性**：强相互作用使相邻磁矩自发平行排列，形成磁畴（铁、钴、镍）。

## 磁化强度

**磁化强度** $\\boldsymbol{M}$ 定义为磁偶极矩密度：

$$
\\begin{align}
\\boldsymbol{M} = \\frac{\\sum \\boldsymbol{m}_i}{\\Delta V}
\\end{align}
$$

### 束缚电流

- 体束缚电流密度：$\\boldsymbol{J}_b = \\nabla \\times \\boldsymbol{M}$
- 面束缚电流密度：$\\boldsymbol{K}_b = \\boldsymbol{M} \\times \\hat{\\boldsymbol{n}}$

### 均匀磁化球体

球内磁场：$\\boldsymbol{B} = \\dfrac{2}{3} \\mu_0 \\boldsymbol{M}$  
球外磁场：偶极子场，$\\boldsymbol{m} = \\dfrac{4\\pi}{3} R^3 \\boldsymbol{M}$

## 辅助场 $\\boldsymbol{H}$

定义 $\\boldsymbol{H} = \\dfrac{1}{\\mu_0} \\boldsymbol{B} - \\boldsymbol{M}$，则

$$
\\begin{align}
\\nabla \\times \\boldsymbol{H} = \\boldsymbol{J}_f, \\quad \\oint \\boldsymbol{H} \\cdot \\mathrm{d}\\boldsymbol{l} = I_{f,\\text{enc}}
\\end{align}
$$

## 线性介质

$$
\\begin{align}
\\boldsymbol{M} = \\chi_m \\boldsymbol{H}, \\quad \\boldsymbol{B} = \\mu \\boldsymbol{H}, \\quad \\mu = \\mu_0(1+\\chi_m)
\\end{align}
$$

## 铁磁性

铁磁材料具有**磁滞回线**，特征量包括饱和磁化强度 $M_s$、剩余磁化强度 $M_r$、矫顽力 $H_c$。铁磁性在居里温度以上消失（铁为 $770^\\circ\\mathrm{C}$）。

## 麦克斯韦方程组在物质中

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{D} &= \\rho_f \\\\
\\nabla \\cdot \\boldsymbol{B} &= 0 \\\\
\\nabla \\times \\boldsymbol{E} &= -\\frac{\\partial \\boldsymbol{B}}{\\partial t} \\\\
\\nabla \\times \\boldsymbol{H} &= \\boldsymbol{J}_f + \\frac{\\partial \\boldsymbol{D}}{\\partial t}
\\end{align}
$$

其中 $\\boldsymbol{D} = \\epsilon_0 \\boldsymbol{E} + \\boldsymbol{P}$，$\\boldsymbol{H} = \\dfrac{1}{\\mu_0} \\boldsymbol{B} - \\boldsymbol{M}$。

## 边界条件

无自由面电流和自由面电荷时：

$$
\\begin{align}
D_{1\\perp} = D_{2\\perp}, \\quad B_{1\\perp} = B_{2\\perp}, \\quad E_{1\\parallel} = E_{2\\parallel}, \\quad H_{1\\parallel} = H_{2\\parallel}
\\end{align}
$$
`,a={title:"磁场中的物质",author:"NeoWangKing",date:new Date(17762112e5),lastMod:new Date(17828334e5),tags:["物理","电动力学","磁化","束缚电流","辅助场H","线性介质","铁磁性"],category:["物理","电动力学"],summary:"本文介绍物质在磁场中的行为，包括磁化机制、磁化强度、束缚电流、辅助场H、线性与非线性介质、铁磁性的磁滞现象，以及麦克斯韦方程组在物质中的形式。",comments:!0,draft:!1,sticky:0},s={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/08-Magnetic-Fields-in-Matter.md",rawData:void 0};export{s as _internal,b as body,l as collection,a as data,n as id,o as slug};
