const n="physics/Electrodynamics/10-Electromagnetic-Waves.md",a="posts",e="physics/electrodynamics/10-electromagnetic-waves",o=`
## 真空中的波动方程

从麦克斯韦方程组导出：

$$
\\begin{align}
\\nabla^2\\boldsymbol{E} = \\mu_0\\epsilon_0\\frac{\\partial^2\\boldsymbol{E}}{\\partial t^2}, \\quad \\nabla^2\\boldsymbol{B} = \\mu_0\\epsilon_0\\frac{\\partial^2\\boldsymbol{B}}{\\partial t^2}
\\end{align}
$$

波速 $c = 1/\\sqrt{\\mu_0\\epsilon_0}$。

## 单色平面波

设波沿 $z$ 方向传播，$\\boldsymbol{E} = \\boldsymbol{E}_0 e^{i(kz-\\omega t)}$，则：

$$
\\begin{align}
\\boldsymbol{B} = \\frac{1}{c}\\hat{\\boldsymbol{k}}\\times\\boldsymbol{E}
\\end{align}
$$

**横波性质**：$\\boldsymbol{E}\\cdot\\hat{\\boldsymbol{k}} = 0$，$\\boldsymbol{B}\\cdot\\hat{\\boldsymbol{k}} = 0$，且 $E_0 = cB_0$。

**能流**：$\\langle\\boldsymbol{S}\\rangle = \\dfrac{1}{2}c\\epsilon_0 E_0^2\\,\\hat{\\boldsymbol{k}}$。

**辐射压**：$P = \\langle S\\rangle/c$。

## 物质中的电磁波

**折射率**：$n = \\sqrt{\\epsilon_r\\mu_r} = \\dfrac{c}{v}$。

**正常入射反射与透射**：

$$
\\begin{align}
\\tilde{E}_{0R} = \\frac{1-\\beta}{1+\\beta}\\tilde{E}_{0I}, \\quad \\tilde{E}_{0T} = \\frac{2}{1+\\beta}\\tilde{E}_{0I}
\\end{align}
$$

其中 $\\beta = \\dfrac{\\mu_1 v_1}{\\mu_2 v_2} \\approx \\dfrac{n_2}{n_1}$。

**反射系数** $R = \\left(\\dfrac{n_1-n_2}{n_1+n_2}\\right)^2$，**透射系数** $T = \\dfrac{4n_1n_2}{(n_1+n_2)^2}$，$R+T=1$。

**斜入射**：菲涅耳公式、布儒斯特角、全反射。

## 导体中的电磁波

**复波数**：$\\tilde{k} = k + i\\kappa$，其中

$$
\\begin{align}
k &= \\omega\\sqrt{\\frac{\\epsilon\\mu}{2}}\\left(\\sqrt{1+\\left(\\frac{\\sigma}{\\epsilon\\omega}\\right)^2}+1\\right)^{1/2} \\\\
\\kappa &= \\omega\\sqrt{\\frac{\\epsilon\\mu}{2}}\\left(\\sqrt{1+\\left(\\frac{\\sigma}{\\epsilon\\omega}\\right)^2}-1\\right)^{1/2}
\\end{align}
$$

**趋肤深度**：$d = 1/\\kappa$。

## 色散

电子在电场中受迫振动：

$$
\\begin{align}
m\\ddot{x} + m\\gamma\\dot{x} + m\\omega_0^2 x = qE_0\\cos(\\omega t)
\\end{align}
$$

**复介电常数**：

$$
\\begin{align}
\\tilde{\\epsilon}_r = 1 + \\frac{Nq^2}{m\\epsilon_0}\\sum_j \\frac{f_j}{\\omega_j^2-\\omega^2-i\\gamma_j\\omega}
\\end{align}
$$

**折射率和吸收系数**可由 $\\tilde{k} = \\dfrac{\\omega}{c}\\sqrt{\\tilde{\\epsilon}_r}$ 得到。

## 波导

**TE、TM、TEM 模**。矩形波导：

$$
\\begin{align}
B_z = B_0\\cos\\left(\\frac{m\\pi x}{a}\\right)\\cos\\left(\\frac{n\\pi y}{b}\\right)
\\end{align}
$$

**截止频率**：$\\omega_{mn} = c\\pi\\sqrt{(m/a)^2+(n/b)^2}$。

**色散关系**：$k = \\dfrac{1}{c}\\sqrt{\\omega^2-\\omega_{mn}^2}$。

**相速度** $v_p = \\dfrac{c}{\\sqrt{1-(\\omega_{mn}/\\omega)^2}} > c$，**群速度** $v_g = c\\sqrt{1-(\\omega_{mn}/\\omega)^2} < c$。
`,l={title:"电磁波",author:"NeoWangKing",date:new Date(1777248e6),lastMod:new Date(17828208e5),tags:["物理","电动力学","电磁波","色散","波导"],category:["物理","电动力学"],summary:"本文系统介绍电磁波的理论，包括真空和物质中的波动方程、反射与透射、导体中的波、色散、以及波导中的传播模式。",comments:!0,draft:!1,sticky:0},t={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/10-Electromagnetic-Waves.md",rawData:void 0};export{t as _internal,o as body,a as collection,l as data,n as id,e as slug};
