const n="physics/Electrodynamics/10-Electromagnetic-Waves.md",a="posts",l="physics/electrodynamics/10-electromagnetic-waves",e=`
## 一维波动方程

一维波动方程为

$$
\\begin{align}
\\frac{\\partial^2 f}{\\partial z^2} = \\frac{1}{v^2} \\frac{\\partial^2 f}{\\partial t^2}
\\end{align}
$$

通解为 $f(z,t) = g(z \\pm vt)$，代表沿 $z$ 方向传播的行波。正弦波形式为

$$
\\begin{align}
f(z,t) = A \\cos(kz - \\omega t + \\delta)
\\end{align}
$$

其中 $v$ 为相速度，$k = 2\\pi/\\lambda$ 为波数，$\\omega = 2\\pi/T$ 为角频率，$\\delta$ 为初相位。复数表示 $\\tilde{f} = \\tilde{A} e^{\\mathrm{i}(kz - \\omega t)}$ 可简化运算。

## 真空中的波动方程

真空中 $\\rho = 0$，$\\boldsymbol{J} = 0$，麦克斯韦方程组为

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{E} &= 0 \\\\
\\nabla \\times \\boldsymbol{E} &= -\\frac{\\partial \\boldsymbol{B}}{\\partial t} \\\\
\\nabla \\cdot \\boldsymbol{B} &= 0 \\\\
\\nabla \\times \\boldsymbol{B} &= \\mu_0 \\epsilon_0 \\frac{\\partial \\boldsymbol{E}}{\\partial t}
\\end{align}
$$

对 $\\nabla \\times \\boldsymbol{E}$ 取旋度并利用 $\\nabla \\times \\nabla \\times \\boldsymbol{E} = \\nabla(\\nabla \\cdot \\boldsymbol{E}) - \\nabla^2 \\boldsymbol{E}$，可得

$$
\\begin{align}
\\nabla^2 \\boldsymbol{E} = \\frac{1}{c^2} \\frac{\\partial^2 \\boldsymbol{E}}{\\partial t^2}, \\quad \\nabla^2 \\boldsymbol{B} = \\frac{1}{c^2} \\frac{\\partial^2 \\boldsymbol{B}}{\\partial t^2}
\\end{align}
$$

其中 $c = 1/\\sqrt{\\mu_0 \\epsilon_0}$ 为真空中的光速。

## 单色平面波

平面波解具有形式

$$
\\begin{align}
\\boldsymbol{E}(z,t) = \\tilde{\\boldsymbol{E}}_0 e^{\\mathrm{i}(kz - \\omega t)}, \\quad \\boldsymbol{B}(z,t) = \\tilde{\\boldsymbol{B}}_0 e^{\\mathrm{i}(kz - \\omega t)}
\\end{align}
$$

由 $\\nabla \\cdot \\boldsymbol{E}=0$ 和 $\\nabla \\cdot \\boldsymbol{B}=0$ 可得 $(\\tilde{\\boldsymbol{E}}_0)_z = 0$，$(\\tilde{\\boldsymbol{B}}_0)_z = 0$，即电磁波是**横波**。进一步由法拉第定律可得 $\\boldsymbol{B}$ 与 $\\boldsymbol{E}$ 的关系：

$$
\\begin{align}
\\tilde{\\boldsymbol{B}} = \\frac{1}{c} \\hat{\\boldsymbol{k}} \\times \\tilde{\\boldsymbol{E}}
\\end{align}
$$

若 $\\boldsymbol{E}$ 沿 $x$ 方向，则 $\\boldsymbol{B}$ 沿 $y$ 方向：

$$
\\begin{align}
\\boldsymbol{E}(z,t) = E_0 \\cos(kz - \\omega t + \\delta)\\,\\hat{\\boldsymbol{x}}, \\quad \\boldsymbol{B}(z,t) = \\frac{E_0}{c} \\cos(kz - \\omega t + \\delta)\\,\\hat{\\boldsymbol{y}}
\\end{align}
$$

## 偏振

对于沿 $z$ 方向传播的平面波，电场可在 $xy$ 平面内任意方向振动，由**偏振矢量** $\\hat{\\boldsymbol{n}}$ 描述：

$$
\\begin{align}
\\tilde{\\boldsymbol{E}}(\\boldsymbol{r},t) = \\tilde{E}_0 e^{\\mathrm{i}(\\boldsymbol{k}\\cdot \\boldsymbol{r} - \\omega t)} \\hat{\\boldsymbol{n}}, \\quad \\hat{\\boldsymbol{n}} \\cdot \\hat{\\boldsymbol{k}} = 0
\\end{align}
$$

## 能量与动量

电磁场的能量密度、能流密度（坡印廷矢量）和动量密度分别为

$$
\\begin{align}
u_{\\text{em}} &= \\frac{1}{2}\\epsilon_0 E^2 + \\frac{1}{2\\mu_0} B^2 = \\epsilon_0 E^2 \\\\
\\boldsymbol{S} &= \\frac{1}{\\mu_0} \\boldsymbol{E} \\times \\boldsymbol{B} = c u_{\\text{em}} \\hat{\\boldsymbol{z}} \\\\
\\boldsymbol{p}_{\\text{em}} &= \\epsilon_0 \\boldsymbol{E} \\times \\boldsymbol{B} = \\frac{u_{\\text{em}}}{c} \\hat{\\boldsymbol{z}}
\\end{align}
$$

对时间平均后，平均能量密度和强度（平均能流密度）为

$$
\\begin{align}
\\langle u_{\\text{em}} \\rangle = \\frac{1}{2}\\epsilon_0 E_0^2, \\quad I = \\langle S \\rangle = \\frac{1}{2} c \\epsilon_0 E_0^2
\\end{align}
$$

## 介质中的电磁波

对于均匀线性介质（无自由电荷和自由电流），麦克斯韦方程组为

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{E} &= 0 \\\\
\\nabla \\times \\boldsymbol{E} &= -\\frac{\\partial \\boldsymbol{B}}{\\partial t} \\\\
\\nabla \\cdot \\boldsymbol{B} &= 0 \\\\
\\nabla \\times \\boldsymbol{B} &= \\mu\\epsilon \\frac{\\partial \\boldsymbol{E}}{\\partial t}
\\end{align}
$$

由此可得波动方程

$$
\\begin{align}
\\nabla^2 \\boldsymbol{E} = \\frac{1}{v^2} \\frac{\\partial^2 \\boldsymbol{E}}{\\partial t^2}, \\quad v = \\frac{c}{n}, \\quad n = \\sqrt{\\frac{\\mu\\epsilon}{\\mu_0\\epsilon_0}}
\\end{align}
$$

其中 $v$ 为介质中的相速度，$n$ 为折射率。通常介质无磁性（$\\mu \\approx \\mu_0$），故 $n \\approx \\sqrt{\\epsilon/\\epsilon_0}$。

## 垂直入射的反射与透射

考虑平面波从介质 1（$n_1$）垂直入射到介质 2（$n_2$），界面位于 $z=0$。入射波、反射波和透射波的电场为

$$
\\begin{align}
\\tilde{E}_I &= \\tilde{E}_{0I} e^{\\mathrm{i}(k_1z - \\omega t)}\\,\\hat{\\boldsymbol{x}} \\\\
\\tilde{E}_R &= \\tilde{E}_{0R} e^{\\mathrm{i}(-k_1z - \\omega t)}\\,\\hat{\\boldsymbol{x}} \\\\
\\tilde{E}_T &= \\tilde{E}_{0T} e^{\\mathrm{i}(k_2z - \\omega t)}\\,\\hat{\\boldsymbol{x}}
\\end{align}
$$

相应的磁场由 $\\tilde{\\boldsymbol{B}} = (1/v) \\hat{\\boldsymbol{k}} \\times \\tilde{\\boldsymbol{E}}$ 给出。利用边界条件（电场切向连续，磁场切向连续）可得振幅关系

$$
\\begin{align}
\\tilde{E}_{0R} = \\frac{1-\\beta}{1+\\beta}\\,\\tilde{E}_{0I}, \\quad \\tilde{E}_{0T} = \\frac{2}{1+\\beta}\\,\\tilde{E}_{0I}, \\quad \\beta \\equiv \\frac{\\mu_1 v_1}{\\mu_2 v_2} \\approx \\frac{n_2}{n_1}
\\end{align}
$$

反射系数 $R$ 和透射系数 $T$ 定义为能流之比：

$$
\\begin{align}
R = \\left(\\frac{E_{0R}}{E_{0I}}\\right)^2 = \\left(\\frac{1-\\beta}{1+\\beta}\\right)^2, \\quad T = \\beta\\left(\\frac{2}{1+\\beta}\\right)^2, \\quad R+T=1
\\end{align}
$$

## 斜入射：反射与折射定律

设入射角为 $\\theta_I$，反射角 $\\theta_R$，折射角 $\\theta_T$。由相位匹配条件（界面处相位相等）可得

$$
\\begin{align}
\\theta_R = \\theta_I, \\quad \\frac{\\sin\\theta_T}{\\sin\\theta_I} = \\frac{n_1}{n_2} \\quad (\\text{斯涅耳定律})
\\end{align}
$$

## 菲涅尔公式（电场平行于入射面）

对于偏振方向平行于入射面的情况，定义

$$
\\begin{align}
\\alpha \\equiv \\frac{\\cos\\theta_T}{\\cos\\theta_I} = \\frac{\\sqrt{1-[(n_1/n_2)\\sin\\theta_I]^2}}{\\cos\\theta_I}, \\quad \\beta \\equiv \\frac{\\mu_1 n_2}{\\mu_2 n_1}
\\end{align}
$$

振幅满足

$$
\\begin{align}
\\tilde{E}_{0I} - \\tilde{E}_{0R} = \\beta \\tilde{E}_{0T}, \\quad \\tilde{E}_{0I} + \\tilde{E}_{0R} = \\alpha \\tilde{E}_{0T}
\\end{align}
$$

解得

$$
\\begin{align}
\\tilde{E}_{0R} = \\frac{\\alpha-\\beta}{\\alpha+\\beta}\\,\\tilde{E}_{0I}, \\quad \\tilde{E}_{0T} = \\frac{2}{\\alpha+\\beta}\\,\\tilde{E}_{0I}
\\end{align}
$$

反射系数和透射系数为

$$
\\begin{align}
R = \\left(\\frac{\\alpha-\\beta}{\\alpha+\\beta}\\right)^2, \\quad T = \\alpha\\beta\\left(\\frac{2}{\\alpha+\\beta}\\right)^2, \\quad R+T=1
\\end{align}
$$

## 布儒斯特角

当 $\\alpha = \\beta$ 时，$\\tilde{E}_{0R}=0$，即反射波消失。此时对应的入射角称为布儒斯特角 $\\theta_B$。对于非磁性介质（$\\mu_1\\approx\\mu_2$），有

$$
\\begin{align}
\\tan\\theta_B \\approx \\frac{n_2}{n_1}
\\end{align}
$$

此时反射光完全偏振化（偏振方向垂直于入射面）。

## 导体中的电磁波

对于线性、各向同性导体，欧姆定律 $\\boldsymbol{J}_f = \\sigma \\boldsymbol{E}$ 成立。引入复介电常数 $\\tilde{\\epsilon} = \\epsilon + \\mathrm{i}\\sigma/\\omega$，则安培定律写为 $\\nabla \\times \\boldsymbol{B} = \\mu\\tilde{\\epsilon}\\,\\partial\\boldsymbol{E}/\\partial t$。波动方程给出复波数

$$
\\begin{align}
\\tilde{k}^2 = \\mu\\tilde{\\epsilon}\\,\\omega^2
\\end{align}
$$

对于良导体（$\\sigma \\gg \\epsilon\\omega$），有

$$
\\begin{align}
\\tilde{k} \\approx \\sqrt{\\frac{\\sigma\\mu\\omega}{2}}\\,(1+\\mathrm{i})
\\end{align}
$$

电场解为

$$
\\begin{align}
\\tilde{E}(z,t) = \\tilde{E}_0 e^{-\\kappa z} e^{\\mathrm{i}(kz - \\omega t)}, \\quad k = \\kappa = \\sqrt{\\frac{\\sigma\\mu\\omega}{2}}
\\end{align}
$$

**趋肤深度** $d$ 定义为场强衰减到表面值的 $1/e$ 所需的距离：

$$
\\begin{align}
d = \\frac{1}{\\kappa} = \\sqrt{\\frac{2}{\\sigma\\mu\\omega}}
\\end{align}
$$

对于理想导体（$\\sigma \\to \\infty$），反射系数 $R \\to 1$，发生全反射，且反射波相位改变 $\\pi$。

## 等离子体中的电磁波

考虑冷均匀等离子体，无背景磁场，离子静止。电子运动方程为

$$
\\begin{align}
m_e \\frac{\\partial \\boldsymbol{v}_e}{\\partial t} = q_e \\boldsymbol{E} - m_e \\nu \\boldsymbol{v}_e
\\end{align}
$$

设 $\\boldsymbol{E} = \\boldsymbol{E}_0 e^{\\mathrm{i}(kz-\\omega t)}$，解得电导率

$$
\\begin{align}
\\sigma = \\frac{q_e^2 n_e}{m_e(\\nu - \\mathrm{i}\\omega)}
\\end{align}
$$

等效介电常数为

$$
\\begin{align}
\\tilde{\\epsilon} = \\epsilon_0 + \\frac{\\mathrm{i}\\sigma}{\\omega} = \\epsilon_0\\left(1 - \\frac{\\omega_p^2}{\\omega^2(1 + \\mathrm{i}\\nu/\\omega)}\\right)
\\end{align}
$$

其中**等离子体频率**定义为 $\\omega_p^2 = q_e^2 n_e / (m_e \\epsilon_0)$。忽略碰撞时，$\\tilde{\\epsilon} = \\epsilon_0(1 - \\omega_p^2/\\omega^2)$，色散关系为

$$
\\begin{align}
\\omega^2 = \\omega_p^2 + k^2 c^2
\\end{align}
$$

电磁波只能在 $\\omega > \\omega_p$ 时传播。相速度和群速度分别为

$$
\\begin{align}
v_p = \\frac{\\omega}{k} = \\sqrt{\\frac{\\omega_p^2}{k^2} + c^2} > c, \\quad v_g = \\frac{\\mathrm{d}\\omega}{\\mathrm{d}k} = c\\sqrt{1 - \\frac{\\omega_p^2}{\\omega^2}} < c
\\end{align}
$$

当 $\\tilde{\\epsilon}=0$ 时，存在静电振荡解 $\\omega = \\omega_p$，称为**等离子体振荡**，无色散，群速度为零。

## 介质的频率响应与色散

将介质中的电子视为受迫阻尼振子，运动方程为

$$
\\begin{align}
\\ddot{x} + \\gamma\\dot{x} + \\omega_0^2 x = \\frac{q}{m}E_0\\cos(\\omega t)
\\end{align}
$$

复数振幅 $\\tilde{x}_0 = (q/m)E_0 / (\\omega_0^2 - \\omega^2 - \\mathrm{i}\\gamma\\omega)$，偶极矩 $\\tilde{p} = q\\tilde{x}$。设单位体积内有 $N$ 个分子，每个分子有 $f_j$ 个频率为 $\\omega_j$、阻尼为 $\\gamma_j$ 的电子，极化强度为

$$
\\begin{align}
\\tilde{\\boldsymbol{P}} = \\frac{Nq^2}{m}\\left(\\sum_j \\frac{f_j}{\\omega_j^2 - \\omega^2 - \\mathrm{i}\\gamma_j\\omega}\\right) \\tilde{\\boldsymbol{E}}
\\end{align}
$$

复相对介电常数为

$$
\\begin{align}
\\tilde{\\epsilon}_r = 1 + \\frac{Nq^2}{m\\epsilon_0} \\sum_j \\frac{f_j}{\\omega_j^2 - \\omega^2 - \\mathrm{i}\\gamma_j\\omega}
\\end{align}
$$

折射率 $n$ 和吸收系数 $\\alpha$ 可由 $\\tilde{k} = \\frac{\\omega}{c}\\sqrt{\\tilde{\\epsilon}_r}$ 导出。远离共振时，柯西公式给出

$$
\\begin{align}
n = 1 + A\\left(1 + \\frac{B}{\\lambda^2}\\right)
\\end{align}
$$

## 波导

矩形波导（$a \\times b$）内，TE 模（$E_z=0$）和 TM 模（$B_z=0$）满足亥姆霍兹方程。TE 模的纵向磁场为

$$
\\begin{align}
B_z(x,y) = B_0 \\cos\\left(\\frac{m\\pi x}{a}\\right) \\cos\\left(\\frac{n\\pi y}{b}\\right), \\quad m,n = 0,1,2,\\dots \\text{（不同时为0）}
\\end{align}
$$

色散关系为

$$
\\begin{align}
k = \\frac{1}{c}\\sqrt{\\omega^2 - \\omega_{mn}^2}, \\quad \\omega_{mn} = c\\pi\\sqrt{(m/a)^2 + (n/b)^2}
\\end{align}
$$

截止频率 $\\omega_{mn}$ 以下波不能传播。相速度 $v_p = c/\\sqrt{1-(\\omega_{mn}/\\omega)^2} > c$，群速度 $v_g = c\\sqrt{1-(\\omega_{mn}/\\omega)^2} < c$。TEM 模（$E_z=B_z=0$）不能在空心波导中存在，但可在同轴线中传播。

同轴线中的 TEM 波为

$$
\\begin{align}
\\boldsymbol{E}(s,\\phi,z,t) = \\frac{A\\cos(kz - \\omega t)}{s}\\,\\hat{\\boldsymbol{s}}, \\quad \\boldsymbol{B}(s,\\phi,z,t) = \\frac{A\\cos(kz - \\omega t)}{cs}\\,\\hat{\\boldsymbol{\\phi}}
\\end{align}
$$
`,o={title:"电磁波",author:"NeoWangKing",date:new Date(1780131292e3),lastMod:new Date(1780131302e3),tags:["物理","电动力学","电磁波","平面波","反射折射","导体","等离子体","色散","波导"],category:["物理","电动力学"],summary:"本文系统介绍电磁波的基本理论，包括真空与介质中的波动方程、单色平面波的性质、能量动量、反射折射定律、菲涅尔公式、布儒斯特角、导体中的趋肤效应、等离子体中的色散与振荡、介质的频率响应（洛伦兹模型、复介电常数、吸收、柯西公式），以及矩形波导与同轴线的导波模式。",comments:!0,draft:!1,sticky:0},t={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/10-Electromagnetic-Waves.md",rawData:void 0};export{t as _internal,e as body,a as collection,o as data,n as id,l as slug};
