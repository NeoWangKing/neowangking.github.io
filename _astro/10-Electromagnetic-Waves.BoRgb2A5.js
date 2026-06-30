const n="physics/Electrodynamics/10-Electromagnetic-Waves.md",a="posts",e="physics/electrodynamics/10-electromagnetic-waves",l=`
## 真空中的波动方程

真空中 $\\rho = 0$，$\\boldsymbol{J} = 0$，由麦克斯韦方程组可得

$$
\\begin{align}
\\nabla^2 \\boldsymbol{E} = \\frac{1}{c^2} \\frac{\\partial^2 \\boldsymbol{E}}{\\partial t^2}, \\quad \\nabla^2 \\boldsymbol{B} = \\frac{1}{c^2} \\frac{\\partial^2 \\boldsymbol{B}}{\\partial t^2}
\\end{align}
$$

## 单色平面波

平面波解：

$$
\\begin{align}
\\boldsymbol{E}(z,t) = \\tilde{\\boldsymbol{E}}_0 e^{\\mathrm{i}(kz - \\omega t)}, \\quad \\boldsymbol{B}(z,t) = \\tilde{\\boldsymbol{B}}_0 e^{\\mathrm{i}(kz - \\omega t)}
\\end{align}
$$

电磁波是横波：$(\\tilde{\\boldsymbol{E}}_0)_z = 0$，$(\\tilde{\\boldsymbol{B}}_0)_z = 0$。

$\\boldsymbol{B}$ 与 $\\boldsymbol{E}$ 的关系：

$$
\\begin{align}
\\tilde{\\boldsymbol{B}} = \\frac{1}{c} \\hat{\\boldsymbol{k}} \\times \\tilde{\\boldsymbol{E}}
\\end{align}
$$

偏振矢量 $\\hat{\\boldsymbol{n}}$：$\\tilde{\\boldsymbol{E}}(\\boldsymbol{r},t) = \\tilde{E}_0 e^{\\mathrm{i}(\\boldsymbol{k}\\cdot \\boldsymbol{r} - \\omega t)} \\hat{\\boldsymbol{n}}$，$\\hat{\\boldsymbol{n}} \\cdot \\hat{\\boldsymbol{k}} = 0$。

## 能量与动量

$$
\\begin{align}
u_{\\text{em}} = \\epsilon_0 E^2, \\quad \\boldsymbol{S} = c u_{\\text{em}} \\hat{\\boldsymbol{z}}, \\quad \\boldsymbol{p}_{\\text{em}} = \\frac{u_{\\text{em}}}{c} \\hat{\\boldsymbol{z}}
\\end{align}
$$

平均强度：

$$
\\begin{align}
\\langle u_{\\text{em}} \\rangle = \\frac{1}{2}\\epsilon_0 E_0^2, \\quad I = \\langle S \\rangle = \\frac{1}{2} c \\epsilon_0 E_0^2
\\end{align}
$$

## 介质中的电磁波

$$
\\begin{align}
v = \\frac{c}{n}, \\quad n = \\sqrt{\\frac{\\mu\\epsilon}{\\mu_0\\epsilon_0}}
\\end{align}
$$

## 垂直入射的反射与透射

振幅关系：

$$
\\begin{align}
\\tilde{E}_{0R} = \\frac{1-\\beta}{1+\\beta}\\,\\tilde{E}_{0I}, \\quad \\tilde{E}_{0T} = \\frac{2}{1+\\beta}\\,\\tilde{E}_{0I}, \\quad \\beta \\equiv \\frac{\\mu_1 v_1}{\\mu_2 v_2} \\approx \\frac{n_2}{n_1}
\\end{align}
$$

反射系数和透射系数：

$$
\\begin{align}
R = \\left(\\frac{1-\\beta}{1+\\beta}\\right)^2, \\quad T = \\beta\\left(\\frac{2}{1+\\beta}\\right)^2, \\quad R+T=1
\\end{align}
$$

## 斜入射

反射定律：$\\theta_R = \\theta_I$

折射定律（斯涅耳定律）：$\\dfrac{\\sin\\theta_T}{\\sin\\theta_I} = \\dfrac{n_1}{n_2}$

菲涅尔公式（电场平行于入射面）：

$$
\\begin{align}
\\tilde{E}_{0R} = \\frac{\\alpha-\\beta}{\\alpha+\\beta}\\,\\tilde{E}_{0I}, \\quad \\tilde{E}_{0T} = \\frac{2}{\\alpha+\\beta}\\,\\tilde{E}_{0I}
\\end{align}
$$

$$
\\begin{align}
\\alpha \\equiv \\frac{\\cos\\theta_T}{\\cos\\theta_I} = \\frac{\\sqrt{1-[(n_1/n_2)\\sin\\theta_I]^2}}{\\cos\\theta_I}
\\end{align}
$$

布儒斯特角：$\\tan\\theta_B \\approx \\dfrac{n_2}{n_1}$

## 导体中的电磁波

复介电常数 $\\tilde{\\epsilon} = \\epsilon + \\mathrm{i}\\sigma/\\omega$，复波数 $\\tilde{k}^2 = \\mu\\tilde{\\epsilon}\\,\\omega^2$。

良导体：$\\tilde{k} \\approx \\sqrt{\\dfrac{\\sigma\\mu\\omega}{2}}\\,(1+\\mathrm{i})$

趋肤深度：

$$
\\begin{align}
d = \\frac{1}{\\kappa} = \\sqrt{\\frac{2}{\\sigma\\mu\\omega}}
\\end{align}
$$

理想导体（$\\sigma \\to \\infty$）发生全反射。

## 等离子体中的电磁波

电导率：$\\sigma = \\dfrac{q_e^2 n_e}{m_e(\\nu - \\mathrm{i}\\omega)}$

等效介电常数：

$$
\\begin{align}
\\tilde{\\epsilon} = \\epsilon_0\\left(1 - \\frac{\\omega_p^2}{\\omega^2(1 + \\mathrm{i}\\nu/\\omega)}\\right), \\quad \\omega_p^2 = \\frac{q_e^2 n_e}{m_e\\epsilon_0}
\\end{align}
$$

忽略碰撞时色散关系：

$$
\\begin{align}
\\omega^2 = \\omega_p^2 + k^2 c^2
\\end{align}
$$

相速度 $v_p > c$，群速度 $v_g < c$，传播条件 $\\omega > \\omega_p$。

等离子体振荡：$\\omega = \\omega_p$，无色散，群速度为零。

## 介质的频率响应

电子受迫阻尼振子模型：

$$
\\begin{align}
\\tilde{x}_0 = \\frac{q/m}{\\omega_0^2 - \\omega^2 - \\mathrm{i}\\gamma\\omega} E_0
\\end{align}
$$

复相对介电常数：

$$
\\begin{align}
\\tilde{\\epsilon}_r = 1 + \\frac{Nq^2}{m\\epsilon_0} \\sum_j \\frac{f_j}{\\omega_j^2 - \\omega^2 - \\mathrm{i}\\gamma_j\\omega}
\\end{align}
$$

柯西公式：$n = 1 + A(1 + B/\\lambda^2)$

## 波导

TE模（$E_z=0$）的纵向磁场：

$$
\\begin{align}
B_z(x,y) = B_0 \\cos\\left(\\frac{m\\pi x}{a}\\right) \\cos\\left(\\frac{n\\pi y}{b}\\right)
\\end{align}
$$

色散关系：

$$
\\begin{align}
k = \\frac{1}{c}\\sqrt{\\omega^2 - \\omega_{mn}^2}, \\quad \\omega_{mn} = c\\pi\\sqrt{(m/a)^2 + (n/b)^2}
\\end{align}
$$

TEM模不能在空心波导中存在，但可在同轴线中传播。
`,t={title:"电磁波",author:"NeoWangKing",date:new Date(1777248e6),lastMod:new Date(1782819386e3),tags:["物理","电动力学","电磁波","平面波","反射折射","导体","等离子体","色散","波导"],category:["物理","电动力学"],summary:"本文系统介绍电磁波的基本理论，包括真空与介质中的波动方程、单色平面波、能量动量、反射折射定律、菲涅尔公式、布儒斯特角、导体中的趋肤效应、等离子体中的色散、介质的频率响应（洛伦兹模型、复介电常数、柯西公式）以及矩形波导与同轴线的导波模式。",comments:!0,draft:!1,sticky:0},o={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/10-Electromagnetic-Waves.md",rawData:void 0};export{o as _internal,l as body,a as collection,t as data,n as id,e as slug};
