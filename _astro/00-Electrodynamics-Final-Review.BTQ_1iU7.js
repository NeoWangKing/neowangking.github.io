const n="physics/Electrodynamics/00-Electrodynamics-Final-Review.md",l="posts",a="physics/electrodynamics/00-electrodynamics-final-review",o=`
## 第1章：矢量分析（数学工具）

### 1.1 矢量代数

- 点乘：$\\boldsymbol{A}\\cdot\\boldsymbol{B} = AB\\cos\\theta$
- 叉乘：$\\boldsymbol{A}\\times\\boldsymbol{B} = AB\\sin\\theta\\,\\hat{\\boldsymbol{n}}$
- 三重积：$\\boldsymbol{A}\\cdot(\\boldsymbol{B}\\times\\boldsymbol{C}) = \\boldsymbol{B}\\cdot(\\boldsymbol{C}\\times\\boldsymbol{A}) = \\boldsymbol{C}\\cdot(\\boldsymbol{A}\\times\\boldsymbol{B})$
- BAC-CAB规则：$\\boldsymbol{A}\\times(\\boldsymbol{B}\\times\\boldsymbol{C}) = \\boldsymbol{B}(\\boldsymbol{A}\\cdot\\boldsymbol{C}) - \\boldsymbol{C}(\\boldsymbol{A}\\cdot\\boldsymbol{B})$

### 1.2 微分运算

| 运算 | 定义                                                                                                                                                                       | 物理意义           |
| :--: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------- |
| 梯度 | $\\nabla T = \\dfrac{\\partial T}{\\partial x}\\hat{\\boldsymbol{x}} + \\dfrac{\\partial T}{\\partial y}\\hat{\\boldsymbol{y}} + \\dfrac{\\partial T}{\\partial z}\\hat{\\boldsymbol{z}}$  | 最大变化方向与速率 |
| 散度 | $\\nabla\\cdot\\boldsymbol{v} = \\dfrac{\\partial v_x}{\\partial x} + \\dfrac{\\partial v_y}{\\partial y} + \\dfrac{\\partial v_z}{\\partial z}$                                       | 源的强度           |
| 旋度 | $\\nabla\\times\\boldsymbol{v} = \\begin{vmatrix}\\hat{\\boldsymbol{x}}&\\hat{\\boldsymbol{y}}&\\hat{\\boldsymbol{z}}\\\\ \\partial_x&\\partial_y&\\partial_z\\\\ v_x&v_y&v_z\\end{vmatrix}$ | 涡旋强度           |

### 1.3 重要恒等式

$$
\\begin{align}
\\nabla\\cdot\\left(\\frac{\\boldsymbol{r}}{r^3}\\right) = 4\\pi\\delta^3(\\boldsymbol{r}), \\qquad \\nabla^2\\left(\\frac{1}{r}\\right) = -4\\pi\\delta^3(\\boldsymbol{r})
\\end{align}
$$

$$
\\begin{align}
\\nabla\\times(\\nabla\\times\\boldsymbol{F}) = \\nabla(\\nabla\\cdot\\boldsymbol{F}) - \\nabla^2\\boldsymbol{F}
\\end{align}
$$

### 1.4 积分定理

- 梯度定理：$\\int_a^b (\\nabla T)\\cdot d\\boldsymbol{l} = T(b) - T(a)$
- 散度定理：$\\int_V (\\nabla\\cdot\\boldsymbol{v})d\\tau = \\oint_S \\boldsymbol{v}\\cdot d\\boldsymbol{a}$
- 旋度定理（Stokes）：$\\int_S (\\nabla\\times\\boldsymbol{v})\\cdot d\\boldsymbol{a} = \\oint_P \\boldsymbol{v}\\cdot d\\boldsymbol{l}$

### 1.5 曲线坐标

**球坐标**（$(r,\\theta,\\phi)$）：

$$
\\begin{align}
\\nabla\\cdot\\boldsymbol{v} = \\frac{1}{r^2}\\frac{\\partial}{\\partial r}(r^2v_r) + \\frac{1}{r\\sin\\theta}\\frac{\\partial}{\\partial\\theta}(\\sin\\theta\\,v_\\theta) + \\frac{1}{r\\sin\\theta}\\frac{\\partial v_\\phi}{\\partial\\phi}
\\end{align}
$$

**柱坐标**（$(s,\\phi,z)$）：

$$
\\begin{align}
\\nabla\\cdot\\boldsymbol{v} = \\frac{1}{s}\\frac{\\partial}{\\partial s}(sv_s) + \\frac{1}{s}\\frac{\\partial v_\\phi}{\\partial\\phi} + \\frac{\\partial v_z}{\\partial z}
\\end{align}
$$

## 第2章：静电场

### 2.1 库仑定律与电场

点电荷电场：

$$
\\begin{align}
\\boldsymbol{E} = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r^2}\\hat{\\boldsymbol{r}}
\\end{align}
$$

连续分布：

$$
\\begin{align}
\\boldsymbol{E}(\\boldsymbol{r}) = \\frac{1}{4\\pi\\epsilon_0}\\int \\frac{\\rho(\\boldsymbol{r}')}{|\\boldsymbol{r}-\\boldsymbol{r}'|^2}\\hat{\\boldsymbol{r}}'' d\\tau'
\\end{align}
$$

### 2.2 高斯定律

积分形式：$\\oint_S \\boldsymbol{E}\\cdot d\\boldsymbol{a} = Q_{\\text{enc}}/\\epsilon_0$

微分形式：$\\nabla\\cdot\\boldsymbol{E} = \\rho/\\epsilon_0$

### 2.3 电势

$$
\\begin{align}
\\boldsymbol{E} = -\\nabla V, \\qquad V(\\boldsymbol{r}) = \\frac{1}{4\\pi\\epsilon_0}\\int \\frac{\\rho(\\boldsymbol{r}')}{|\\boldsymbol{r}-\\boldsymbol{r}'|}d\\tau'
\\end{align}
$$

泊松方程：$\\nabla^2 V = -\\rho/\\epsilon_0$

拉普拉斯方程：$\\nabla^2 V = 0$（无电荷区域）

### 2.4 导体

- 内部 $\\boldsymbol{E}=0$，$\\rho=0$
- 导体是等势体
- 表面电场：$\\boldsymbol{E} = \\dfrac{\\sigma}{\\epsilon_0}\\hat{\\boldsymbol{n}}$
- 表面力：$\\boldsymbol{f} = \\dfrac{1}{2\\epsilon_0}\\sigma^2\\hat{\\boldsymbol{n}}$

### 2.5 电容

平行板：$C = \\dfrac{\\epsilon_0 A}{d}$

球壳：$C = 4\\pi\\epsilon_0\\dfrac{ab}{b-a}$

同轴圆柱：$C = \\dfrac{2\\pi\\epsilon_0 l}{\\ln(b/a)}$

静电能：$W = \\dfrac{1}{2}\\int \\rho V d\\tau = \\dfrac{\\epsilon_0}{2}\\int E^2 d\\tau$

## 第3章：势的特殊方法

### 3.1 拉普拉斯方程的性质

- **平均值性质**：$V$ 在球心的值等于球面上的平均值
- **极值原理**：无局部极值，极值在边界上
- **唯一性定理**：给定边界 $V$ 值，解唯一

### 3.2 镜像法

**点电荷 + 接地导体平面**：

$$
\\begin{align}
V = \\frac{1}{4\\pi\\epsilon_0}\\left(\\frac{q}{r_+} - \\frac{q}{r_-}\\right), \\quad \\sigma = -\\frac{qd}{2\\pi(r^2+d^2)^{3/2}}, \\quad F = \\frac{1}{4\\pi\\epsilon_0}\\frac{q^2}{(2d)^2}
\\end{align}
$$

**点电荷 + 接地导体球**：

$$
\\begin{align}
q' = -\\frac{R}{a}q, \\quad b = \\frac{R^2}{a}
\\end{align}
$$

### 3.3 分离变量法

轴对称拉普拉斯方程通解：

$$
\\begin{align}
V(r,\\theta) = \\sum_{l=0}^{\\infty}\\left(A_l r^l + \\frac{B_l}{r^{l+1}}\\right)P_l(\\cos\\theta)
\\end{align}
$$

勒让德多项式：$P_0=1$，$P_1=x$，$P_2=\\frac{1}{2}(3x^2-1)$

正交性：

$$
\\begin{align}
\\int_{-1}^1 P_l(x)P_{l'}(x)dx = \\frac{2}{2l+1}\\delta_{ll'}
\\end{align}
$$

### 3.4 多极展开

$$
\\begin{align}
V(\\boldsymbol{r}) = \\frac{1}{4\\pi\\epsilon_0}\\left[\\frac{Q}{r} + \\frac{\\boldsymbol{p}\\cdot\\hat{\\boldsymbol{r}}}{r^2} + \\frac{1}{2r^3}\\sum_{i,j}Q_{ij}\\hat{r}_i\\hat{r}_j + \\cdots\\right]
\\end{align}
$$

电偶极子：

$$
\\begin{align}
V_{\\text{dip}} = \\frac{1}{4\\pi\\epsilon_0}\\frac{\\boldsymbol{p}\\cdot\\hat{\\boldsymbol{r}}}{r^2}, \\quad \\boldsymbol{E}_{\\text{dip}} = \\frac{1}{4\\pi\\epsilon_0}\\frac{1}{r^3}[3(\\boldsymbol{p}\\cdot\\hat{\\boldsymbol{r}})\\hat{\\boldsymbol{r}} - \\boldsymbol{p}]
\\end{align}
$$

## 第4章：电介质

### 4.1 极化

极化强度 $\\boldsymbol{P}$ = 偶极矩密度

束缚电荷：

$$
\\begin{align}
\\rho_b = -\\nabla\\cdot\\boldsymbol{P}, \\qquad \\sigma_b = \\boldsymbol{P}\\cdot\\hat{\\boldsymbol{n}}
\\end{align}
$$

### 4.2 电位移矢量

$$
\\begin{align}
\\boldsymbol{D} = \\epsilon_0\\boldsymbol{E} + \\boldsymbol{P}, \\qquad \\nabla\\cdot\\boldsymbol{D} = \\rho_f
\\end{align}
$$

### 4.3 线性电介质

$$
\\begin{align}
\\boldsymbol{P} = \\epsilon_0\\chi_e\\boldsymbol{E}, \\qquad \\boldsymbol{D} = \\epsilon\\boldsymbol{E}, \\qquad \\epsilon = \\epsilon_0(1+\\chi_e), \\qquad \\epsilon_r = 1+\\chi_e
\\end{align}
$$

边界条件：

$$
\\begin{align}
D_{1\\perp} - D_{2\\perp} = \\sigma_f, \\qquad E_{1\\parallel} = E_{2\\parallel}
\\end{align}
$$

能量：$W = \\dfrac{1}{2}\\int \\boldsymbol{D}\\cdot\\boldsymbol{E}\\,d\\tau$，$u = \\dfrac{1}{2}\\boldsymbol{D}\\cdot\\boldsymbol{E}$

## 第5章：静磁场

### 5.1 洛伦兹力

$$
\\begin{align}
\\boldsymbol{F} = q(\\boldsymbol{E} + \\boldsymbol{v}\\times\\boldsymbol{B})
\\end{align}
$$

### 5.2 毕奥-萨伐尔定律

线电流：

$$
\\begin{align}
\\boldsymbol{B}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi}\\int \\frac{I d\\boldsymbol{l}'\\times\\hat{\\boldsymbol{r}}''}{r''^2}
\\end{align}
$$

体电流：

$$
\\begin{align}
\\boldsymbol{B}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi}\\int \\frac{\\boldsymbol{J}(\\boldsymbol{r}')\\times\\hat{\\boldsymbol{r}}''}{r''^2}d\\tau'
\\end{align}
$$

### 5.3 安培定律

$$
\\begin{align}
\\nabla\\times\\boldsymbol{B} = \\mu_0\\boldsymbol{J}, \\qquad \\oint\\boldsymbol{B}\\cdot d\\boldsymbol{l} = \\mu_0 I_{\\text{enc}}, \\qquad \\nabla\\cdot\\boldsymbol{B}=0
\\end{align}
$$

### 5.4 磁矢势

$$
\\begin{align}
\\boldsymbol{B} = \\nabla\\times\\boldsymbol{A}, \\qquad \\nabla\\cdot\\boldsymbol{A}=0, \\qquad \\nabla^2\\boldsymbol{A} = -\\mu_0\\boldsymbol{J}
\\end{align}
$$

解：

$$
\\begin{align}
\\boldsymbol{A}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi}\\int \\frac{\\boldsymbol{J}(\\boldsymbol{r}')}{|\\boldsymbol{r}-\\boldsymbol{r}'|}d\\tau'
\\end{align}
$$

### 5.5 磁偶极子

$$
\\begin{align}
\\boldsymbol{m} = I\\boldsymbol{a}, \\qquad \\boldsymbol{A}_{\\text{dip}} = \\frac{\\mu_0}{4\\pi}\\frac{\\boldsymbol{m}\\times\\hat{\\boldsymbol{r}}}{r^2}, \\qquad \\boldsymbol{B}_{\\text{dip}} = \\frac{\\mu_0}{4\\pi}\\frac{1}{r^3}[3(\\boldsymbol{m}\\cdot\\hat{\\boldsymbol{r}})\\hat{\\boldsymbol{r}}-\\boldsymbol{m}]
\\end{align}
$$

## 第6章：磁介质

### 6.1 磁化

磁化强度 $\\boldsymbol{M}$ = 磁偶极矩密度

束缚电流：

$$
\\begin{align}
\\boldsymbol{J}_b = \\nabla\\times\\boldsymbol{M}, \\qquad \\boldsymbol{K}_b = \\boldsymbol{M}\\times\\hat{\\boldsymbol{n}}
\\end{align}
$$

### 6.2 辅助场 $\\boldsymbol{H}$

$$
\\begin{align}
\\boldsymbol{H} = \\frac{1}{\\mu_0}\\boldsymbol{B} - \\boldsymbol{M}, \\qquad \\nabla\\times\\boldsymbol{H} = \\boldsymbol{J}_f
\\end{align}
$$

### 6.3 线性磁介质

$$
\\begin{align}
\\boldsymbol{M} = \\chi_m\\boldsymbol{H}, \\qquad \\boldsymbol{B} = \\mu\\boldsymbol{H}, \\qquad \\mu = \\mu_0(1+\\chi_m)
\\end{align}
$$

边界条件：

$$
\\begin{align}
B_{1\\perp} = B_{2\\perp}, \\qquad H_{1\\parallel} - H_{2\\parallel} = K_f
\\end{align}
$$

## 第7章：电动力学

### 7.1 法拉第定律

$$
\\begin{align}
\\mathcal{E} = \\oint \\boldsymbol{E}\\cdot d\\boldsymbol{l} = -\\frac{d\\Phi}{dt}, \\qquad \\nabla\\times\\boldsymbol{E} = -\\frac{\\partial\\boldsymbol{B}}{\\partial t}
\\end{align}
$$

### 7.2 电感

互感：$\\Phi_2 = M I_1$，$\\mathcal{E}_2 = -M\\dfrac{dI_1}{dt}$

自感：$\\Phi = L I$，$\\mathcal{E} = -L\\dfrac{dI}{dt}$

RL电路：$I(t) = \\dfrac{\\mathcal{E}_0}{R}(1 - e^{-(R/L)t})$

磁场能量：$W = \\dfrac{1}{2}LI^2 = \\dfrac{1}{2\\mu_0}\\int B^2 d\\tau$

### 7.3 位移电流与麦克斯韦方程组

**位移电流**：$\\boldsymbol{J}_d = \\epsilon_0\\dfrac{\\partial\\boldsymbol{E}}{\\partial t}$

**麦克斯韦方程组（真空）**：

$$
\\begin{align}
\\nabla\\cdot\\boldsymbol{E} = \\frac{\\rho}{\\epsilon_0}, \\quad \\nabla\\cdot\\boldsymbol{B}=0, \\quad \\nabla\\times\\boldsymbol{E} = -\\frac{\\partial\\boldsymbol{B}}{\\partial t}, \\quad \\nabla\\times\\boldsymbol{B} = \\mu_0\\boldsymbol{J} + \\mu_0\\epsilon_0\\frac{\\partial\\boldsymbol{E}}{\\partial t}
\\end{align}
$$

**物质中**：

$$
\\begin{align}
\\nabla\\cdot\\boldsymbol{D} = \\rho_f, \\quad \\nabla\\cdot\\boldsymbol{B}=0, \\quad \\nabla\\times\\boldsymbol{E} = -\\frac{\\partial\\boldsymbol{B}}{\\partial t}, \\quad \\nabla\\times\\boldsymbol{H} = \\boldsymbol{J}_f + \\frac{\\partial\\boldsymbol{D}}{\\partial t}
\\end{align}
$$

**边界条件**：

$$
\\begin{align}
D_{1\\perp} - D_{2\\perp} = \\sigma_f, \\quad E_{1\\parallel} = E_{2\\parallel}, \\quad B_{1\\perp} = B_{2\\perp}, \\quad H_{1\\parallel} - H_{2\\parallel} = K_f\\times\\hat{\\boldsymbol{n}}
\\end{align}
$$

## 第8章：守恒定律

### 8.1 电荷守恒

连续性方程：$\\dfrac{\\partial\\rho}{\\partial t} + \\nabla\\cdot\\boldsymbol{J} = 0$

### 8.2 能量守恒（坡印廷定理）

能量密度：

$$
\\begin{align}
u_{\\text{em}} = \\frac{1}{2}\\left(\\epsilon_0 E^2 + \\frac{1}{\\mu_0}B^2\\right)
\\end{align}
$$

坡印廷矢量：

$$
\\begin{align}
\\boldsymbol{S} = \\frac{1}{\\mu_0}\\boldsymbol{E}\\times\\boldsymbol{B}
\\end{align}
$$

坡印廷定理：

$$
\\begin{align}
\\frac{\\partial}{\\partial t}(u_{\\text{kin}} + u_{\\text{em}}) = -\\nabla\\cdot\\boldsymbol{S}, \\qquad \\frac{d}{dt}(E_{\\text{kin}} + U_{\\text{em}}) = -\\oint_S \\boldsymbol{S}\\cdot d\\boldsymbol{a}
\\end{align}
$$

### 8.3 动量守恒

动量密度：

$$
\\begin{align}
\\boldsymbol{g}_{\\text{em}} = \\epsilon_0\\boldsymbol{E}\\times\\boldsymbol{B} = \\frac{1}{c^2}\\boldsymbol{S}
\\end{align}
$$

麦克斯韦应力张量：

$$
\\begin{align}
T_{ij} = \\epsilon_0\\left(E_iE_j - \\frac{1}{2}\\delta_{ij}E^2\\right) + \\frac{1}{\\mu_0}\\left(B_iB_j - \\frac{1}{2}\\delta_{ij}B^2\\right)
\\end{align}
$$

动量守恒：

$$
\\begin{align}
\\frac{d}{dt}(\\boldsymbol{P}_{\\text{kin}} + \\boldsymbol{P}_{\\text{em}}) = \\oint_S \\boldsymbol{T}\\cdot d\\boldsymbol{a}
\\end{align}
$$

## 第9章：电磁波（核心重点）

### 9.1 真空中的波动方程

由麦克斯韦方程组推导：

$$
\\begin{align}
\\nabla^2\\boldsymbol{E} = \\frac{1}{c^2}\\frac{\\partial^2\\boldsymbol{E}}{\\partial t^2}, \\qquad \\nabla^2\\boldsymbol{B} = \\frac{1}{c^2}\\frac{\\partial^2\\boldsymbol{B}}{\\partial t^2}, \\qquad c = \\frac{1}{\\sqrt{\\mu_0\\epsilon_0}}
\\end{align}
$$

### 9.2 平面波解

$$
\\begin{align}
\\boldsymbol{E}(z,t) = \\tilde{\\boldsymbol{E}}_0 e^{i(kz-\\omega t)}, \\qquad \\tilde{\\boldsymbol{B}} = \\frac{1}{c}\\hat{\\boldsymbol{k}}\\times\\tilde{\\boldsymbol{E}}
\\end{align}
$$

**横波**：$(\\tilde{\\boldsymbol{E}}_0)_z = 0$，$(\\tilde{\\boldsymbol{B}}_0)_z = 0$

**偏振**：$\\tilde{\\boldsymbol{E}}(\\boldsymbol{r},t) = \\tilde{E}_0 e^{i(\\boldsymbol{k}\\cdot\\boldsymbol{r}-\\omega t)}\\hat{\\boldsymbol{n}}$，$\\hat{\\boldsymbol{n}}\\cdot\\hat{\\boldsymbol{k}}=0$

### 9.3 能量与动量

$$
\\begin{align}
u_{\\text{em}} = \\epsilon_0 E^2, \\quad \\boldsymbol{S} = cu_{\\text{em}}\\hat{\\boldsymbol{z}}, \\quad \\langle u\\rangle = \\frac{1}{2}\\epsilon_0 E_0^2, \\quad I = \\langle S\\rangle = \\frac{1}{2}c\\epsilon_0 E_0^2
\\end{align}
$$

辐射压力：$P = I/c$（完美吸收体）；$P = 2I/c$（完美反射体）

### 9.4 介质中的电磁波

相速度：$v = c/n$，折射率：$n = \\sqrt{\\mu\\epsilon/\\mu_0\\epsilon_0}$

### 9.5 垂直入射反射与透射

振幅关系：

$$
\\begin{align}
\\tilde{E}_{0R} = \\frac{1-\\beta}{1+\\beta}\\tilde{E}_{0I}, \\quad \\tilde{E}_{0T} = \\frac{2}{1+\\beta}\\tilde{E}_{0I}, \\quad \\beta \\equiv \\frac{\\mu_1 v_1}{\\mu_2 v_2} \\approx \\frac{n_2}{n_1}
\\end{align}
$$

反射/透射系数：

$$
\\begin{align}
R = \\left(\\frac{1-\\beta}{1+\\beta}\\right)^2, \\quad T = \\beta\\left(\\frac{2}{1+\\beta}\\right)^2, \\quad R+T=1
\\end{align}
$$

### 9.6 斜入射

反射定律：$\\theta_R = \\theta_I$

折射定律（斯涅耳）：$\\dfrac{\\sin\\theta_T}{\\sin\\theta_I} = \\dfrac{n_1}{n_2}$

菲涅尔公式（$\\boldsymbol{E}\\parallel$入射面）：

$$
\\begin{align}
\\tilde{E}_{0R} = \\frac{\\alpha-\\beta}{\\alpha+\\beta}\\tilde{E}_{0I}, \\quad \\tilde{E}_{0T} = \\frac{2}{\\alpha+\\beta}\\tilde{E}_{0I}, \\quad \\alpha \\equiv \\frac{\\cos\\theta_T}{\\cos\\theta_I}
\\end{align}
$$

布儒斯特角：$\\tan\\theta_B \\approx n_2/n_1$（$\\mu_1\\approx\\mu_2$）

### 9.7 导体中的电磁波

复介电常数：$\\tilde{\\epsilon} = \\epsilon + i\\sigma/\\omega$

复波数：$\\tilde{k}^2 = \\mu\\tilde{\\epsilon}\\omega^2$

良导体：$\\tilde{k} \\approx \\sqrt{\\dfrac{\\sigma\\mu\\omega}{2}}(1+i)$

趋肤深度：$d = \\sqrt{\\dfrac{2}{\\sigma\\mu\\omega}}$

理想导体（$\\sigma\\to\\infty$）全反射。

### 9.8 等离子体中的电磁波

电子运动方程：$m_e\\dfrac{\\partial\\boldsymbol{v}_e}{\\partial t} = -e\\boldsymbol{E}$

电导率：$\\sigma = \\dfrac{i n_e e^2}{m_e\\omega}$

等效介电常数：

$$
\\begin{align}
\\tilde{\\epsilon} = \\epsilon_0\\left(1 - \\frac{\\omega_p^2}{\\omega^2}\\right), \\qquad \\omega_p^2 = \\frac{n_e e^2}{m_e\\epsilon_0}
\\end{align}
$$

**色散关系**：

$$
\\begin{align}
\\omega^2 = \\omega_p^2 + k^2 c^2
\\end{align}
$$

相速度：$v_p = \\dfrac{\\omega}{k} = \\dfrac{c}{\\sqrt{1-\\omega_p^2/\\omega^2}} > c$

群速度：$v_g = \\dfrac{d\\omega}{dk} = c\\sqrt{1-\\omega_p^2/\\omega^2} < c$

传播条件：$\\omega > \\omega_p$

等离子体振荡：$\\omega = \\omega_p$，群速度为零，无色散

### 9.9 色散与吸收（洛伦兹模型）

电子受迫阻尼振子：

$$
\\begin{align}
m\\ddot{x} + m\\gamma\\dot{x} + m\\omega_0^2 x = -eE_0e^{-i\\omega t}
\\end{align}
$$

复介电常数：

$$
\\begin{align}
\\tilde{\\epsilon}_r = 1 + \\frac{N e^2}{m\\epsilon_0}\\sum_j \\frac{f_j}{\\omega_j^2 - \\omega^2 - i\\gamma_j\\omega}
\\end{align}
$$

柯西公式：$n = 1 + A(1 + B/\\lambda^2)$

### 9.10 波导

矩形波导 TM波（$B_z=0$）：

$$
\\begin{align}
E_z = E_0\\sin\\left(\\frac{m\\pi x}{a}\\right)\\sin\\left(\\frac{n\\pi y}{b}\\right)
\\end{align}
$$

截止频率：$\\omega_{mn} = c\\pi\\sqrt{(m/a)^2 + (n/b)^2}$

色散关系：$k = \\dfrac{1}{c}\\sqrt{\\omega^2 - \\omega_{mn}^2}$

**TM$_{m0}$ 和 TM$_{0n}$ 不存在**：若 $m=0$ 或 $n=0$，$E_z=0$，与 TM 波定义矛盾。

TE波（$E_z=0$）：

$$
\\begin{align}
B_z = B_0\\cos\\left(\\frac{m\\pi x}{a}\\right)\\cos\\left(\\frac{n\\pi y}{b}\\right)
\\end{align}
$$

**TEM波不能在空心波导中存在**。同轴线可支持 TEM 波。

## 第10章：势与场

### 10.1 矢势与标势

$$
\\begin{align}
\\boldsymbol{B} = \\nabla\\times\\boldsymbol{A}, \\qquad \\boldsymbol{E} = -\\nabla V - \\frac{\\partial\\boldsymbol{A}}{\\partial t}
\\end{align}
$$

### 10.2 规范变换

$$
\\begin{align}
\\boldsymbol{A}' = \\boldsymbol{A} + \\nabla\\lambda, \\qquad V' = V - \\frac{\\partial\\lambda}{\\partial t}
\\end{align}
$$

### 10.3 洛伦兹规范

$$
\\begin{align}
\\nabla\\cdot\\boldsymbol{A} + \\mu_0\\epsilon_0\\frac{\\partial V}{\\partial t} = 0
\\end{align}
$$

达朗贝尔方程：

$$
\\begin{align}
\\Box^2 V = -\\frac{\\rho}{\\epsilon_0}, \\qquad \\Box^2\\boldsymbol{A} = -\\mu_0\\boldsymbol{J}, \\qquad \\Box^2 \\equiv \\nabla^2 - \\frac{1}{c^2}\\frac{\\partial^2}{\\partial t^2}
\\end{align}
$$

### 10.4 推迟势

$$
\\begin{align}
V(\\boldsymbol{r},t) = \\frac{1}{4\\pi\\epsilon_0}\\int \\frac{\\rho(\\boldsymbol{r}',t_r)}{|\\boldsymbol{r}-\\boldsymbol{r}'|}d\\tau', \\qquad \\boldsymbol{A}(\\boldsymbol{r},t) = \\frac{\\mu_0}{4\\pi}\\int \\frac{\\boldsymbol{J}(\\boldsymbol{r}',t_r)}{|\\boldsymbol{r}-\\boldsymbol{r}'|}d\\tau'
\\end{align}
$$

其中 $t_r = t - |\\boldsymbol{r}-\\boldsymbol{r}'|/c$ 为推迟时间。

### 10.5 杰斐缅柯方程

$$
\\begin{align}
\\boldsymbol{E}(\\boldsymbol{r},t) = \\frac{1}{4\\pi\\epsilon_0}\\int\\left[\\frac{\\rho\\hat{\\boldsymbol{\\mathcal{R}}}}{\\mathcal{R}^2} + \\frac{\\dot{\\rho}\\hat{\\boldsymbol{\\mathcal{R}}}}{c\\mathcal{R}} - \\frac{\\dot{\\boldsymbol{J}}}{c^2\\mathcal{R}}\\right]d\\tau'
\\end{align}
$$

$$
\\begin{align}
\\boldsymbol{B}(\\boldsymbol{r},t) = \\frac{\\mu_0}{4\\pi}\\int\\left[\\frac{\\boldsymbol{J}}{\\mathcal{R}^2} + \\frac{\\dot{\\boldsymbol{J}}}{c\\mathcal{R}}\\right]\\times\\hat{\\boldsymbol{\\mathcal{R}}}\\,d\\tau'
\\end{align}
$$

### 10.6 李纳-维谢尔势

运动点电荷 $q$ 沿轨迹 $\\boldsymbol{w}(t)$：

$$
\\begin{align}
V(\\boldsymbol{r},t) = \\frac{1}{4\\pi\\epsilon_0}\\frac{q}{\\mathcal{R}}\\frac{1}{1-\\hat{\\boldsymbol{\\mathcal{R}}}\\cdot\\boldsymbol{v}/c}, \\qquad \\boldsymbol{A}(\\boldsymbol{r},t) = \\frac{\\boldsymbol{v}}{c^2}V(\\boldsymbol{r},t)
\\end{align}
$$

### 10.7 运动点电荷的场

$$
\\begin{align}
\\boldsymbol{E} = \\frac{q}{4\\pi\\epsilon_0}\\frac{1}{\\mathcal{R}^2}\\frac{1}{(1-\\hat{\\boldsymbol{\\mathcal{R}}}\\cdot\\boldsymbol{v}/c)^3}\\left[\\left(1-\\frac{v^2}{c^2}\\right)\\hat{\\boldsymbol{\\mathcal{R}}} + \\frac{\\hat{\\boldsymbol{\\mathcal{R}}}\\times(\\hat{\\boldsymbol{\\mathcal{R}}}\\times\\boldsymbol{a})}{c^2}\\right]
\\end{align}
$$

$$
\\begin{align}
\\boldsymbol{B} = \\frac{1}{c}\\hat{\\boldsymbol{\\mathcal{R}}}\\times\\boldsymbol{E}
\\end{align}
$$

- 第一项（速度项）$\\propto 1/\\mathcal{R}^2$：随动库仑场
- 第二项（加速度项）$\\propto 1/\\mathcal{R}$：**辐射场**

**匀速运动**（$\\boldsymbol{a}=0$）：

$$
\\begin{align}
\\boldsymbol{E} = \\frac{q}{4\\pi\\epsilon_0}\\frac{1-v^2/c^2}{(1-v^2\\sin^2\\theta/c^2)^{3/2}}\\frac{\\hat{\\boldsymbol{R}}}{R^2}
\\end{align}
$$

## 第11章：辐射（核心重点）

### 11.1 辐射的定义

辐射是能量不可逆地传播到无穷远：

$$
\\begin{align}
P_{\\text{rad}}(t_0) = \\lim_{r\\to\\infty} P\\left(r, t_0 + \\frac{r}{c}\\right)
\\end{align}
$$

辐射场是随 $1/r$ 衰减的场分量。

### 11.2 拉莫尔公式（非相对论）

$$
\\begin{align}
P = \\frac{\\mu_0 q^2 a^2}{6\\pi c}, \\qquad \\frac{dP}{d\\Omega} = \\frac{\\mu_0 q^2 a^2}{16\\pi^2 c}\\sin^2\\theta
\\end{align}
$$

### 11.3 电偶极辐射

振荡电偶极子 $\\boldsymbol{p}(t)=\\boldsymbol{p}_0\\cos(\\omega t)$：

辐射场：

$$
\\begin{align}
E_\\theta = -\\frac{\\mu_0 p_0\\omega^2}{4\\pi}\\frac{\\sin\\theta}{r}\\cos\\left[\\omega\\left(t-\\frac{r}{c}\\right)\\right], \\qquad B_\\phi = \\frac{1}{c}E_\\theta
\\end{align}
$$

平均功率：

$$
\\begin{align}
\\langle P\\rangle = \\frac{\\mu_0 p_0^2\\omega^4}{12\\pi c}
\\end{align}
$$

角分布 $\\propto \\sin^2\\theta$，沿偶极轴无辐射，$P\\propto\\omega^4$。

### 11.4 磁偶极辐射

平均功率：

$$
\\begin{align}
\\langle P\\rangle = \\frac{\\mu_0 m_0^2\\omega^4}{12\\pi c^3}
\\end{align}
$$

与电偶极辐射之比：

$$
\\begin{align}
\\frac{P_{\\text{mag}}}{P_{\\text{elec}}} \\sim \\left(\\frac{\\omega b}{c}\\right)^2 \\ll 1
\\end{align}
$$

### 11.5 任意源的辐射（远场近似）

$$
\\begin{align}
\\boldsymbol{E} = \\frac{\\mu_0}{4\\pi r}[\\hat{\\boldsymbol{r}}\\times(\\hat{\\boldsymbol{r}}\\times\\ddot{\\boldsymbol{p}}(t_0))], \\qquad \\boldsymbol{B} = -\\frac{\\mu_0}{4\\pi r c}[\\hat{\\boldsymbol{r}}\\times\\ddot{\\boldsymbol{p}}(t_0)]
\\end{align}
$$

辐射功率：$P(r,t) = \\dfrac{\\mu_0}{6\\pi c}[\\ddot{\\boldsymbol{p}}(t - r/c)]^2$

### 11.6 李纳公式（相对论）

$$
\\begin{align}
P = \\frac{\\mu_0 q^2\\gamma^6}{6\\pi c}\\left(a^2 - \\frac{|\\boldsymbol{v}\\times\\boldsymbol{a}|^2}{c^2}\\right)
\\end{align}
$$

等价形式：

$$
\\begin{align}
P = \\frac{\\mu_0 q^2}{6\\pi c}\\left(\\gamma^4 a^2 + \\gamma^6\\frac{(\\boldsymbol{v}\\cdot\\boldsymbol{a})^2}{c^2}\\right)
\\end{align}
$$

$\\boldsymbol{v}\\parallel\\boldsymbol{a}$（轫致辐射）：

$$
\\begin{align}
\\frac{dP}{d\\Omega} = \\frac{\\mu_0 q^2 a^2}{16\\pi^2 c}\\frac{\\sin^2\\theta}{(1-\\beta\\cos\\theta)^5}, \\qquad P = \\frac{\\mu_0 q^2 a^2\\gamma^6}{6\\pi c}
\\end{align}
$$

$\\boldsymbol{v}\\perp\\boldsymbol{a}$（同步辐射）：

$$
\\begin{align}
P = \\frac{\\mu_0 q^2 a^2\\gamma^4}{6\\pi c}
\\end{align}
$$

### 11.7 辐射反作用力

Abraham-Lorentz公式：

$$
\\begin{align}
\\boldsymbol{F}_{\\text{rad}} = \\frac{\\mu_0 q^2}{6\\pi c}\\dot{\\boldsymbol{a}}
\\end{align}
$$

存在问题：预加速、自加速解。仅在周期运动的平均意义上成立。

## 第12章：相对论电动力学

### 12.1 洛伦兹变换

$$
\\begin{align}
\\bar{x} = \\gamma(x-vt), \\quad \\bar{t} = \\gamma\\left(t-\\frac{v}{c^2}x\\right), \\quad \\gamma = \\frac{1}{\\sqrt{1-v^2/c^2}}
\\end{align}
$$

### 12.2 四维矢量

| 四维矢量 | 分量                                                                 |
| :------: | :------------------------------------------------------------------- |
|   坐标   | $x^\\mu = (ct, x, y, z)$                                              |
|   速度   | $\\eta^\\mu = (\\gamma c, \\gamma\\boldsymbol{u})$                        |
|   动量   | $p^\\mu = (E/c, \\boldsymbol{p}) = (m\\gamma c, m\\gamma\\boldsymbol{u})$ |
|   电流   | $J^\\mu = (\\rho c, \\boldsymbol{J})$                                   |
|    势    | $A^\\mu = (V/c, \\boldsymbol{A})$                                      |

**度规**：$g_{\\mu\\nu} = \\text{diag}(-1,1,1,1)$

**点积**：$(a,b) = g_{\\mu\\nu}a^\\mu b^\\nu = -a^0b^0 + a^1b^1 + a^2b^2 + a^3b^3$

**能量-动量关系**：$E^2 - p^2c^2 = (mc^2)^2$

### 12.3 电磁场张量

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

对偶张量 $G^{\\mu\\nu}$：$\\boldsymbol{E}/c \\to \\boldsymbol{B}$，$\\boldsymbol{B} \\to -\\boldsymbol{E}/c$

### 12.4 麦克斯韦方程的张量形式

$$
\\begin{align}
\\frac{\\partial F^{\\mu\\nu}}{\\partial x^\\nu} = \\mu_0 J^\\mu, \\qquad \\frac{\\partial G^{\\mu\\nu}}{\\partial x^\\nu} = 0
\\end{align}
$$

展开后分别给出高斯定律、安培-麦克斯韦定律、磁高斯定律和法拉第定律。

**两个不变量**：

$$
\\begin{align}
F_{\\mu\\nu}F^{\\mu\\nu} = 2\\left(B^2 - \\frac{E^2}{c^2}\\right), \\qquad \\epsilon_{\\mu\\nu\\lambda\\sigma}F^{\\mu\\nu}F^{\\lambda\\sigma} \\propto \\boldsymbol{E}\\cdot\\boldsymbol{B}
\\end{align}
$$

即 $E^2 - c^2B^2$ 和 $\\boldsymbol{E}\\cdot\\boldsymbol{B}$ 是洛伦兹不变量。

### 12.5 电磁场的变换

$$
\\begin{align}
\\bar{E}_x &= E_x, \\quad \\bar{E}_y = \\gamma(E_y - vB_z), \\quad \\bar{E}_z = \\gamma(E_z + vB_y)
\\end{align}
$$

$$
\\begin{align}
\\bar{B}_x &= B_x, \\quad \\bar{B}_y = \\gamma\\left(B_y + \\frac{v}{c^2}E_z\\right), \\quad \\bar{B}_z = \\gamma\\left(B_z - \\frac{v}{c^2}E_y\\right)
\\end{align}
$$

**特殊情况**：

- 若 $B=0$，则 $\\bar{B} = -\\dfrac{1}{c^2}(v\\times\\bar{E})$
- 若 $E=0$，则 $\\bar{E} = v\\times\\bar{B}$

### 12.6 相对论性势

$$
\\begin{align}
A^\\mu = (V/c, \\boldsymbol{A}), \\qquad F^{\\mu\\nu} = \\partial^\\mu A^\\nu - \\partial^\\nu A^\\mu
\\end{align}
$$

洛伦兹规范：$\\partial_\\mu A^\\mu = 0$

达朗贝尔方程：$\\Box^2 A^\\mu = -\\mu_0 J^\\mu$

## 核心公式速查表

|       主题       | 核心公式                                                                                                                                                                                                                     |
| :--------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | -------- |
|  麦克斯韦方程组  | $\\nabla\\cdot\\boldsymbol{E}=\\rho/\\epsilon_0$，$\\nabla\\cdot\\boldsymbol{B}=0$，$\\nabla\\times\\boldsymbol{E}=-\\partial_t\\boldsymbol{B}$，$\\nabla\\times\\boldsymbol{B}=\\mu_0\\boldsymbol{J}+\\mu_0\\epsilon_0\\partial_t\\boldsymbol{E}$ |
|    洛伦兹规范    | $\\nabla\\cdot\\boldsymbol{A}+\\mu_0\\epsilon_0\\partial_t V=0$                                                                                                                                                                    |
|   达朗贝尔方程   | $\\Box^2 V=-\\rho/\\epsilon_0$，$\\Box^2\\boldsymbol{A}=-\\mu_0\\boldsymbol{J}$                                                                                                                                                     |
|      推迟势      | $V(\\boldsymbol{r},t)=\\dfrac{1}{4\\pi\\epsilon_0}\\int\\dfrac{\\rho(\\boldsymbol{r}',t_r)}{\\mathcal{R}}d\\tau'$                                                                                                                      |
|  李纳-维谢尔势   | $V=\\dfrac{1}{4\\pi\\epsilon_0}\\dfrac{q}{\\mathcal{R}}\\dfrac{1}{1-\\hat{\\boldsymbol{\\mathcal{R}}}\\cdot\\boldsymbol{v}/c}$                                                                                                          |
|    坡印廷矢量    | $\\boldsymbol{S}=\\dfrac{1}{\\mu_0}\\boldsymbol{E}\\times\\boldsymbol{B}$                                                                                                                                                          |
|    平面波关系    | $\\tilde{\\boldsymbol{B}}=\\dfrac{1}{c}\\hat{\\boldsymbol{k}}\\times\\tilde{\\boldsymbol{E}}$                                                                                                                                        |
| 垂直入射反射系数 | $R=\\left(\\dfrac{1-\\beta}{1+\\beta}\\right)^2$                                                                                                                                                                                  |
|    菲涅尔公式    | $\\tilde{E}_{0R}=\\dfrac{\\alpha-\\beta}{\\alpha+\\beta}\\tilde{E}_{0I}$                                                                                                                                                            |
|    布儒斯特角    | $\\tan\\theta_B=n_2/n_1$                                                                                                                                                                                                       |
|     趋肤深度     | $d=\\sqrt{2/(\\sigma\\mu\\omega)}$                                                                                                                                                                                               |
|   等离子体色散   | $\\omega^2=\\omega_p^2+k^2c^2$                                                                                                                                                                                                 |
|   波导截止频率   | $\\omega_{mn}=c\\pi\\sqrt{(m/a)^2+(n/b)^2}$                                                                                                                                                                                     |
|  电偶极辐射功率  | $\\langle P\\rangle=\\dfrac{\\mu_0 p_0^2\\omega^4}{12\\pi c}$                                                                                                                                                                      |
|    拉莫尔公式    | $P=\\dfrac{\\mu_0 q^2 a^2}{6\\pi c}$                                                                                                                                                                                            |
|     李纳公式     | $P=\\dfrac{\\mu_0 q^2\\gamma^6}{6\\pi c}(a^2-                                                                                                                                                                                    | \\boldsymbol{v}\\times\\boldsymbol{a} | ^2/c^2)$ |
|    电磁场张量    | $F^{\\mu\\nu}=\\partial^\\mu A^\\nu-\\partial^\\nu A^\\mu$                                                                                                                                                                           |
|    洛伦兹变换    | $\\bar{x}=\\gamma(x-vt)$，$\\bar{t}=\\gamma(t-vx/c^2)$                                                                                                                                                                           |
`,b={title:"电动力学期末复习",author:"NeoWangKing",date:new Date(17827776e5),lastMod:new Date(178282061e4),tags:["物理","电动力学","期末复习","麦克斯韦方程组","电磁波","辐射","相对论"],category:["物理","电动力学"],summary:"本文是电动力学课程的期末复习笔记，覆盖麦克斯韦方程组、电磁波（真空/介质/导体/等离子体/波导）、势与场（推迟势/李纳-维谢尔）、辐射（电偶极/拉莫尔公式）以及相对论电动力学（洛伦兹变换/电磁场张量）。核心公式框出，重要结论附推导。",comments:!0,draft:!1,sticky:0},d={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/00-Electrodynamics-Final-Review.md",rawData:void 0};export{d as _internal,o as body,l as collection,b as data,n as id,a as slug};
