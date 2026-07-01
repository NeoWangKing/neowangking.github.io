const n="physics/Electrodynamics/10-Electromagnetic-Waves.md",a="posts",l="physics/electrodynamics/10-electromagnetic-waves",e=`
## 1. 一维波动基础

### 1.1 波动方程与行波解

一维波动方程：

$$
\\begin{align}
\\frac{\\partial^2 f}{\\partial z^2} = \\frac{1}{v^2}\\frac{\\partial^2 f}{\\partial t^2}
\\end{align}
$$

其通解为 $f(z,t) = g(z-vt) + h(z+vt)$，分别表示沿 $+z$ 和 $-z$ 方向传播的波，形状不变，速度为 $v$。

**正弦波**：$f(z,t) = A\\cos(kz-\\omega t + \\delta)$，其中 $k$ 为波数，$\\omega = kv$ 为角频率，波长 $\\lambda = 2\\pi/k$，周期 $T=2\\pi/\\omega$。

**复数表示**：$\\tilde{f}(z,t) = \\tilde{A}e^{i(kz-\\omega t)}$，实际场为实部。复数表示可以简化叠加和微分运算，其中的 $\\tilde{A} = A e^{i\\delta}$ 称为复振幅，包含了振幅和初相位的信息。

**偏振**：横波有两个独立偏振方向。线偏振波可用偏振矢量 $\\hat{\\boldsymbol{n}}$ 描述，$\\tilde{\\boldsymbol{f}} = \\tilde{A}e^{i(kz-\\omega t)}\\hat{\\boldsymbol{n}}$，$\\hat{\\boldsymbol{n}}\\cdot\\hat{\\boldsymbol{z}}=0$。圆偏振是两个正交线偏振波相位差 $90^\\circ$ 的叠加。

## 2. 真空中的电磁波

### 2.1 波动方程

在真空（$\\rho=0,\\boldsymbol{J}=0$）中，麦克斯韦方程组为：

$$
\\begin{align}
\\nabla\\cdot\\boldsymbol{E}=0,\\quad \\nabla\\cdot\\boldsymbol{B}=0,\\quad \\nabla\\times\\boldsymbol{E}=-\\partial_t\\boldsymbol{B},\\quad \\nabla\\times\\boldsymbol{B}=\\mu_0\\epsilon_0\\partial_t\\boldsymbol{E}
\\end{align}
$$

取旋度并利用恒等式 $\\nabla\\times(\\nabla\\times\\boldsymbol{E}) = \\nabla(\\nabla\\cdot\\boldsymbol{E})-\\nabla^2\\boldsymbol{E}$，得到：

$$
\\begin{align}
\\nabla^2\\boldsymbol{E} = \\mu_0\\epsilon_0\\frac{\\partial^2\\boldsymbol{E}}{\\partial t^2},\\qquad \\nabla^2\\boldsymbol{B} = \\mu_0\\epsilon_0\\frac{\\partial^2\\boldsymbol{B}}{\\partial t^2}
\\end{align}
$$

因此电磁波在真空中传播的速度为 $c = 1/\\sqrt{\\mu_0\\epsilon_0}$。

### 2.2 单色平面波解

设波沿 $z$ 方向传播，电场为 $\\tilde{\\boldsymbol{E}}(z,t)=\\tilde{\\boldsymbol{E}}_0 e^{i(kz-\\omega t)}$，由 $\\nabla\\cdot\\boldsymbol{E}=0$ 得 $\\tilde{E}_{0z}=0$，即横波。由法拉第定律得：

$$
\\begin{align}
\\tilde{\\boldsymbol{B}}_0 = \\frac{k}{\\omega}(\\hat{\\boldsymbol{z}}\\times\\tilde{\\boldsymbol{E}}_0) = \\frac{1}{c}\\hat{\\boldsymbol{k}}\\times\\tilde{\\boldsymbol{E}}_0
\\end{align}
$$

故 $\\boldsymbol{E}$ 与 $\\boldsymbol{B}$ 同相，振幅关系 $B_0 = E_0/c$，且 $\\boldsymbol{E}\\perp\\boldsymbol{B}\\perp\\hat{\\boldsymbol{k}}$。

一般传播方向 $\\boldsymbol{k}$，极化矢量 $\\hat{\\boldsymbol{n}}$（$\\hat{\\boldsymbol{n}}\\cdot\\hat{\\boldsymbol{k}}=0$）：

$$
\\begin{align}
\\tilde{\\boldsymbol{E}}(\\boldsymbol{r},t)=\\tilde{E}_0 e^{i(\\boldsymbol{k}\\cdot\\boldsymbol{r}-\\omega t)}\\hat{\\boldsymbol{n}},\\quad \\tilde{\\boldsymbol{B}}=\\frac{1}{c}\\hat{\\boldsymbol{k}}\\times\\tilde{\\boldsymbol{E}}
\\end{align}
$$

### 2.3 能量、动量与辐射压

**能量密度**：

$$
\\begin{align}
u = \\frac{1}{2}(\\epsilon_0 E^2 + \\frac{1}{\\mu_0} B^2)
\\end{align}
$$

对平面波 $B^2 = E^2/c^2 = \\mu_0\\epsilon_0 E^2$，故

$$
\\begin{align}
u = \\epsilon_0 E^2 = \\epsilon_0 E_0^2 \\cos^2(kz-\\omega t+\\delta)
\\end{align}
$$

**坡印廷矢量**：

坡印廷矢量表示瞬时的能量传输：

$$
\\begin{align}
\\boxed{\\boldsymbol{S} = \\frac{1}{\\mu_0} \\boldsymbol{E}\\times\\boldsymbol{B} = c\\,u\\,\\hat{\\boldsymbol{k}}}
\\end{align}
$$

**时间平均**（对周期平均，$\\langle\\cos^2\\rangle=1/2$）：

$$
\\begin{align}
\\langle u\\rangle = \\frac{1}{2}\\epsilon_0 E_0^2,\\quad \\langle \\boldsymbol{S}\\rangle = \\frac{1}{2}c\\epsilon_0 E_0^2\\,\\hat{\\boldsymbol{k}} = I\\,\\hat{\\boldsymbol{k}}
\\end{align}
$$

其中 $I$ 为强度（平均能流密度）。

**动量密度**：$\\boldsymbol{g} = \\epsilon_0\\boldsymbol{E}\\times\\boldsymbol{B} = \\boldsymbol{S}/c^2$，平均值 $\\langle \\boldsymbol{g}\\rangle = I/c^2\\,\\hat{\\boldsymbol{k}}$。

**辐射压**：对完全吸收表面，$P = \\langle S\\rangle/c = I/c$；对完全反射表面（动量反向），$P = 2I/c$。

## 3. 物质中的电磁波

### 3.1 线性介质中的传播

在无自由电荷和电流的线性均匀介质（$\\epsilon,\\mu$）中，麦克斯韦方程组形式与真空相同

$$
\\begin{align}
\\nabla\\cdot\\boldsymbol{D}=0,\\quad \\nabla\\times\\boldsymbol{E}=-\\frac{\\partial \\boldsymbol{B}}{\\partial t},\\quad \\nabla\\cdot\\boldsymbol{B}=0,\\quad \\nabla\\times\\boldsymbol{H}=\\frac{\\partial \\boldsymbol{D}}{\\partial t}
\\end{align}
$$

其中 $\\boldsymbol{D} = \\epsilon \\boldsymbol{E}$ ， $\\boldsymbol{H}=\\frac{1}{\\mu}\\boldsymbol{B}$ 。代入即可得到波动方程，波速 $v = 1/\\sqrt{\\epsilon\\mu} = c/n$，折射率 $n = \\sqrt{\\epsilon_r\\mu_r}$（通常 $\\mu_r\\approx1$，故 $n\\approx\\sqrt{\\epsilon_r}$）。

**平面波解**：

$$
\\begin{align}
\\boldsymbol{E} = \\boldsymbol{E}_0 e^{i(\\boldsymbol{k}\\cdot\\boldsymbol{r}-\\omega t)},\\quad \\boldsymbol{B} = \\frac{1}{v}\\hat{\\boldsymbol{k}}\\times\\boldsymbol{E},\\quad B_0 = E_0/v
\\end{align}
$$

**能量密度**：

$$
\\begin{align}
u = \\frac{1}{2}(\\epsilon E^2 + \\frac{1}{\\mu} B^2) = \\epsilon E^2
\\end{align}
$$

**坡印廷矢量**：

$$
\\begin{align}
\\boldsymbol{S} = \\frac{1}{\\mu} \\boldsymbol{E}\\times\\boldsymbol{B} = v u\\,\\hat{\\boldsymbol{k}}
\\end{align}
$$

平均强度 $I = \\frac{1}{2}\\epsilon v E_0^2$。

**边界条件**：在两种介质的分界面上，电场和磁场满足：

$$
\\begin{gather}
D_{1,\\perp} = D_{2,\\perp},\\quad B_{1,\\perp} = B_{2,\\perp} \\\\
E_{1,\\parallel} = E_{2,\\parallel},\\quad H_{1,\\parallel} = H_{2,\\parallel}
\\end{gather}
$$

### 3.2 反射与透射：正入射

设界面 $z=0$，介质1（$n_1$）和介质2（$n_2$），入射波沿 $+z$，反射波沿 $-z$，透射波沿 $+z$。电场偏振沿 $x$，磁场沿 $y$（注意反射波磁场反向）。

**入射**：$\\displaystyle \\tilde{\\boldsymbol{E}}_I = \\tilde{E}_{0I}e^{i(k_1z-\\omega t)}\\hat{\\boldsymbol{x}},\\quad \\tilde{\\boldsymbol{B}}_I = \\frac{1}{v_1}\\tilde{E}_{0I}e^{i(k_1z-\\omega t)}\\hat{\\boldsymbol{y}}$

**反射**：$\\displaystyle \\tilde{\\boldsymbol{E}}_R = \\tilde{E}_{0R}e^{i(-k_1z-\\omega t)}\\hat{\\boldsymbol{x}},\\quad \\tilde{\\boldsymbol{B}}_R = -\\frac{1}{v_1}\\tilde{E}_{0R}e^{i(-k_1z-\\omega t)}\\hat{\\boldsymbol{y}}$

**透射**：$\\displaystyle \\tilde{\\boldsymbol{E}}_T = \\tilde{E}_{0T}e^{i(k_2z-\\omega t)}\\hat{\\boldsymbol{x}},\\quad \\tilde{\\boldsymbol{B}}_T = \\frac{1}{v_2}\\tilde{E}_{0T}e^{i(k_2z-\\omega t)}\\hat{\\boldsymbol{y}}$

边界条件：$E_\\parallel$ 连续，$\\frac{1}{\\mu}B_\\parallel$ 连续（无面电流）。得：

$$
\\begin{align}
\\tilde{E}_{0I}+\\tilde{E}_{0R} &= \\tilde{E}_{0T} \\\\
\\frac{1}{\\mu_1 v_1}(\\tilde{E}_{0I}-\\tilde{E}_{0R}) &= \\frac{1}{\\mu_2 v_2}\\tilde{E}_{0T}
\\end{align}
$$

定义 $\\displaystyle \\beta \\equiv \\frac{\\mu_1 v_1}{\\mu_2 v_2} = \\frac{\\mu_1 n_2}{\\mu_2 n_1}$，通常 $\\mu_1\\approx\\mu_2$，故 $\\beta \\approx n_2/n_1$。解得：

$$
\\begin{align}
\\boxed{
\\tilde{E}_{0R} = \\left(\\frac{1-\\beta}{1+\\beta}\\right)\\tilde{E}_{0I},\\quad \\tilde{E}_{0T} = \\left(\\frac{2}{1+\\beta}\\right)\\tilde{E}_{0I}
}
\\end{align}
$$

反射和透射系数

$$
\\begin{align}
R &= \\left(\\frac{1 - \\beta}{1 + \\beta}\\right)^2,\\quad
T &= \\beta\\left(\\frac{2}{1+\\beta}\\right)^2
\\end{align}
$$

满足 $R+T=1$。当 $n_2>n_1$，反射波有 $\\pi$ 相位跳变（若 $\\beta>1$，$\\tilde{E}_{0R}<0$）。

### 3.3 反射与透射：斜入射（菲涅耳公式）

设入射面为 $xz$ 平面，界面 $z=0$。入射波矢 $\\boldsymbol{k}_I$，反射 $\\boldsymbol{k}_R$，透射 $\\boldsymbol{k}_T$。由边界相位匹配得反射定律 $\\theta_I=\\theta_R$ 和斯涅尔定律 $n_1\\sin\\theta_I = n_2\\sin\\theta_T$。

记 $\\alpha \\equiv \\cos\\theta_T / \\cos\\theta_I$ ， 通过边界条件可以推出：

$$
\\begin{align}
\\tilde{E}_{0R,\\parallel} = \\frac{\\alpha-\\beta}{\\alpha+\\beta}\\tilde{E}_{0I,\\parallel},&\\quad \\tilde{E}_{0T,\\parallel} = \\frac{2}{\\alpha+\\beta}\\tilde{E}_{0I,\\parallel}
\\end{align}
$$

$$
\\begin{align}
\\tilde{E}_{0R,\\perp} = \\frac{1-\\alpha\\beta}{1+\\alpha\\beta}\\tilde{E}_{0I,\\perp},&\\quad \\tilde{E}_{0T,\\perp} = \\frac{2}{1+\\alpha\\beta}\\tilde{E}_{0I,\\perp}
\\end{align}
$$

**极化平行于入射面（TM 或 p 极化）**：

反射和透射系数

$$
\\begin{align}
R_\\parallel &= \\left(\\frac{\\alpha - \\beta}{\\alpha + \\beta}\\right)^2,\\quad
T_\\parallel &= \\alpha\\beta\\left(\\frac{2}{\\alpha+\\beta}\\right)^2
\\end{align}
$$

有 $R_\\parallel+T_\\parallel=1$。

**极化垂直于入射面（TE 或 s 极化）**：

反射和透射系数

$$
\\begin{align}
R_\\perp &= \\left(\\frac{1 - \\alpha\\beta}{1 + \\alpha\\beta}\\right)^2,\\quad
T_\\perp &= \\alpha\\beta\\left(\\frac{2}{1+\\alpha\\beta}\\right)^2
\\end{align}
$$

**布儒斯特角**：当 $\\alpha=\\beta$ 时 p 极化的反射系数为零，此时 $\\theta_I\\equiv\\theta_B$，满足 $\\tan\\theta_B = \\frac{n_2}{n_1}$（$\\mu_1=\\mu_2$）。此时反射光为纯垂直极化（s 极化）。

有 $R_\\perp+T_\\perp=1$。s 极化无布儒斯特角（反射系数不降为零，除非 $n_1=n_2$）。

**全反射**：当 $\\theta_I$ 大于临界角 $\\theta_c=\\sin^{-1}(n_2/n_1)$（$n_1>n_2$）时，发生全反射（$\\cos\\theta_T$ 为虚数），透射波为倏逝波（沿界面传播，指数衰减离开界面）。

## 4. 导体中的电磁波

### 4.1 波动方程与复介电常数

在导体中，有欧姆定律 $\\boldsymbol{J}_f=\\sigma\\boldsymbol{E}$，麦克斯韦方程变为：

$$
\\begin{align}
&\\nabla\\cdot\\boldsymbol{E}=0,\\quad \\nabla\\times\\boldsymbol{E}=-\\frac{\\partial \\boldsymbol{B}}{\\partial t}, \\\\
&\\nabla\\cdot\\boldsymbol{B}=0,\\quad \\nabla\\times\\boldsymbol{B}=\\mu\\sigma\\boldsymbol{E} + \\mu\\epsilon\\frac{\\partial\\boldsymbol{E}}{\\partial t}
\\end{align}
$$

于是就有

$$
\\begin{align}
\\nabla^2\\boldsymbol{E} = \\mu\\epsilon\\frac{\\partial^2\\boldsymbol{E}}{\\partial t^2} + \\mu\\sigma\\frac{\\partial\\boldsymbol{E}}{\\partial t},\\quad \\nabla^2\\boldsymbol{B} = \\mu\\epsilon\\frac{\\partial^2\\boldsymbol{B}}{\\partial t^2} + \\mu\\sigma\\frac{\\partial\\boldsymbol{B}}{\\partial t}
\\end{align}
$$

设平面波 $\\tilde{\\boldsymbol{E}}=\\tilde{\\boldsymbol{E}}_0 e^{i(\\tilde{k}z-\\omega t)}$，得复波数：

$$
\\begin{align}
\\tilde{k}^2 = \\mu\\epsilon\\omega^2 + i\\mu\\sigma\\omega
\\end{align}
$$

令 $\\tilde{k}=k+i\\kappa$，解出：

$$
\\begin{align}
k &= \\omega\\sqrt{\\frac{\\epsilon\\mu}{2}}\\left[\\sqrt{1+\\left(\\frac{\\sigma}{\\epsilon\\omega}\\right)^2}+1\\right]^{1/2} \\\\
\\kappa &= \\omega\\sqrt{\\frac{\\epsilon\\mu}{2}}\\left[\\sqrt{1+\\left(\\frac{\\sigma}{\\epsilon\\omega}\\right)^2}-1\\right]^{1/2}
\\end{align}
$$

电场 $\\tilde{\\boldsymbol{E}}=\\tilde{\\boldsymbol{E}}_0 e^{-\\kappa z}e^{i(kz-\\omega t)}$，振幅指数衰减

**趋肤深度**：

$$
\\begin{align}
d\\equiv\\frac{1}{\\kappa}
\\end{align}
$$

### 4.2 良导体与劣导体近似

- **良导体** $\\sigma \\gg \\epsilon\\omega$：$k\\approx\\kappa\\approx\\sqrt{\\frac{\\sigma\\mu\\omega}{2}}$，$d=\\sqrt{\\frac{2}{\\sigma\\mu\\omega}}$，磁场滞后电场 $45^\\circ$。
- **劣导体** $\\sigma \\ll \\epsilon\\omega$：$d\\approx\\frac{2}{\\sigma}\\sqrt{\\frac{\\epsilon}{\\mu}}$（与频率无关）。

### 4.3 反射系数（正常入射）

从介质（非导体）入射到导体，反射系数同前公式，只需将介质2的波数替换为复波数 $\\tilde{k}_2$，并定义 $\\tilde{\\beta}=\\frac{\\mu_1 v_1}{\\mu_2\\omega}\\tilde{k}_2$。对于理想导体（$\\sigma\\to\\infty$），$\\tilde{\\beta}\\to\\infty$，$\\tilde{E}_{0R}=-\\tilde{E}_{0I}$，$\\tilde{E}_{0T}=0$，全反射。

## 5. 色散与介质模型

### 5.1 电子受迫振动模型

电子（电荷 $q$，质量 $m$）束缚在原子中，受弹性力 $-m\\omega_0^2x$、阻尼力 $-m\\gamma\\dot{x}$ 和电场驱动力 $qE_0\\cos\\omega t$。运动方程：

$$
\\begin{align}
m\\ddot{x}+m\\gamma\\dot{x}+m\\omega_0^2x = qE_0\\cos\\omega t
\\end{align}
$$

复数解：$\\tilde{x}(t)=\\tilde{x}_0 e^{-i\\omega t}$，$\\tilde{x}_0 = \\frac{q/m}{\\omega_0^2-\\omega^2-i\\gamma\\omega}E_0$。

单个分子有 $f_j$ 个电子（振子强度）对应频率 $\\omega_j$、阻尼 $\\gamma_j$，则极化强度：

$$
\\begin{align}
\\tilde{\\boldsymbol{P}} = \\frac{Nq^2}{m}\\left(\\sum_j \\frac{f_j}{\\omega_j^2-\\omega^2-i\\gamma_j\\omega}\\right)\\tilde{\\boldsymbol{E}}
\\end{align}
$$

故复介电常数：

$$
\\begin{align}
\\tilde{\\epsilon}_r(\\omega) = 1 + \\frac{Nq^2}{m\\epsilon_0}\\sum_j \\frac{f_j}{\\omega_j^2-\\omega^2-i\\gamma_j\\omega}
\\end{align}
$$

### 5.2 折射率与吸收系数

令 $\\tilde{k}=\\frac{\\omega}{c}\\sqrt{\\tilde{\\epsilon}_r}$，则 $n=\\frac{ck}{\\omega}$，吸收系数 $\\alpha=2\\kappa$。在共振频率附近，$n$ 变化剧烈，出现反常色散，且 $\\alpha$ 大（吸收峰）。

### 5.3 等离子体（冷等离子体）

等离子体中，电子自由（$\\omega_0=0$，忽略阻尼），则有

$$
\\begin{align}
\\tilde{\\epsilon}_r = 1 - \\frac{\\omega_p^2}{\\omega^2} \\Rightarrow \\boxed{n = \\sqrt{1 - \\frac{\\omega_p^2}{\\omega^2}}}
\\end{align}
$$

其中 $\\omega_p=\\sqrt{\\frac{Ne^2}{m\\epsilon_0}}$ 为等离子体频率。色散关系 $\\omega^2 = \\omega_p^2 + c^2k^2$。

当 $\\omega<\\omega_p$，$k$ 为虚数，波不能传播（全反射）。等离子体振荡频率 $\\omega_p$。

考虑碰撞（阻尼）时，有

$$
\\begin{align}
\\tilde{\\epsilon}_r = 1 - \\frac{\\omega_p^2}{\\omega^2+i\\gamma\\omega}
\\end{align}
$$

这时候波会有衰减，衰减长度 $L=1/\\mathrm{Im}(k)$（回忆卷考点）。

## 6. 波导

### 6.1 一般理论与模式分类

考虑理想导体壁构成的中空波导，内部无源，波沿 $z$ 方向传播，场形为 $\\tilde{\\boldsymbol{E}}(x,y,z,t)=\\tilde{\\boldsymbol{E}}_0(x,y)e^{i(kz-\\omega t)}$。

纵向分量 $E_z, B_z$ 满足亥姆霍兹方程：

$$
\\begin{align}
\\left(\\nabla_\\perp^2 + \\frac{\\omega^2}{c^2}-k^2\\right) E_z = 0,\\quad \\left(\\nabla_\\perp^2 + \\frac{\\omega^2}{c^2}-k^2\\right) B_z = 0
\\end{align}
$$

横向场由纵向场导出（见讲义公式9.180）。边界条件：导体表面切向电场为零，法向磁场为零（即 $E_z=0$ 对 TM，$\\partial B_z/\\partial n=0$ 对 TE）。

**模式分类**：

- **TEM**：$E_z=0, B_z=0$，仅在同轴线等双导体结构中存在，无色散 $k=\\omega/c$。
- **TE**（横电）：$E_z=0, B_z\\neq0$。
- **TM**（横磁）：$B_z=0, E_z\\neq0$。
- 空心波导中 TEM 不存在（证明见讲义）。

### 6.2 矩形波导

尺寸 $a\\times b$（$a\\ge b$）。TE 模：

$$
\\begin{align}
B_z = B_0\\cos\\left(\\frac{m\\pi x}{a}\\right)\\cos\\left(\\frac{n\\pi y}{b}\\right),\\quad m,n=0,1,2,\\dots\\quad (\\text{不全为0})
\\end{align}
$$

色散关系 $k = \\frac{1}{c}\\sqrt{\\omega^2-\\omega_{mn}^2}$，截止频率 $\\omega_{mn}=c\\pi\\sqrt{(m/a)^2+(n/b)^2}$。最低模式 TE$_{10}$，截止 $\\omega_{10}=c\\pi/a$。

TM 模：

$$
\\begin{align}
E_z = E_0\\sin\\left(\\frac{m\\pi x}{a}\\right)\\sin\\left(\\frac{n\\pi y}{b}\\right),\\quad m,n=1,2,\\dots
\\end{align}
$$

同样色散关系，最低 TM$_{11}$，截止 $\\omega_{11}=c\\pi\\sqrt{1/a^2+1/b^2}$。TM$_{m0}$ 或 TM$_{0n}$ 不存在（因边界条件迫使 $E_z=0$）。

**相速度** $v_p = \\omega/k = c/\\sqrt{1-(\\omega_{mn}/\\omega)^2} > c$，**群速度** $v_g = d\\omega/dk = c\\sqrt{1-(\\omega_{mn}/\\omega)^2} < c$。

**能流**由坡印廷矢量积分得到，能量以群速度传输。

### 6.3 平行板波导（回忆卷）

两导体板间距 $d$，波沿 $x$ 方向，场与 $y$ 无关。TE$_m$ 模：

$$
\\begin{align}
B_z = B_0\\cos\\left(\\frac{m\\pi z}{d}\\right)e^{i(kx-\\omega t)},\\quad m=0,1,2,\\dots
\\end{align}
$$

色散 $k=\\sqrt{\\omega^2/c^2-(m\\pi/d)^2}$，截止 $\\omega_{c,m}=m\\pi c/d$。平均能流密度 $\\langle S_x\\rangle = \\frac{1}{2\\mu_0}\\frac{k}{\\omega}|E_0|^2\\cos^2(m\\pi z/d)$。

TM$_m$ 模（$m\\ge1$）：$E_z=E_0\\sin(m\\pi z/d)e^{i(kx-\\omega t)}$。

### 6.4 同轴线（TEM 模）

同轴线可支持 TEM 模，场分布类似静电场和静磁场：$\\boldsymbol{E}=\\frac{A}{s}\\hat{\\boldsymbol{s}}e^{i(kz-\\omega t)}$，$\\boldsymbol{B}=\\frac{A}{cs}\\hat{\\boldsymbol{\\phi}}e^{i(kz-\\omega t)}$，无色散 $k=\\omega/c$，截止频率为零。

## 7. 常见考试题型要点

- **等离子体**：色散关系、折射角、布儒斯特角、临界角、考虑阻尼时的衰减长度。
- **波导**：写出场表达式、求截止频率、色散关系、能流密度、TM$_{m0}$ 不存在的原因。
- **反射透射**：正常入射、斜入射的菲涅耳公式，布儒斯特角，全反射临界角。
- **导体**：趋肤深度，反射系数（正常入射）。
- **色散**：受迫振动模型推导复介电常数，折射率与吸收系数表达式。
`,$={title:"电磁波",author:"NeoWangKing",date:new Date(1777248e6),lastMod:new Date(17828208e5),tags:["物理","电动力学","电磁波","色散","波导"],category:["物理","电动力学"],summary:"本文系统介绍电磁波的理论，包括真空和物质中的波动方程、反射与透射、导体中的波、色散、以及波导中的传播模式。",comments:!0,draft:!1,sticky:0},o={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/10-Electromagnetic-Waves.md",rawData:void 0};export{o as _internal,e as body,a as collection,$ as data,n as id,l as slug};
