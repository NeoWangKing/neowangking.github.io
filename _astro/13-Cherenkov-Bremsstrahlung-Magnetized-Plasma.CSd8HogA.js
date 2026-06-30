const n="physics/Electrodynamics/13-Cherenkov-Bremsstrahlung-Magnetized-Plasma.md",a="posts",e="physics/electrodynamics/13-cherenkov-bremsstrahlung-magnetized-plasma",m=`
## 第一部分：切伦科夫辐射（Cherenkov Radiation）

### 物理图像

当一个带电粒子以超光速（相对于介质中的光速）穿过介质时，会发出切伦科夫辐射。其物理图像类似于超音速飞行器产生的音爆。

**切伦科夫条件**：

$$
\\begin{align}
v > v_{\\text{phase}} = \\frac{c}{n}
\\end{align}
$$

即

$$
\\begin{align}
n\\beta > 1, \\quad \\beta = \\frac{v}{c}
\\end{align}
$$

**切伦科夫角**：

$$
\\begin{align}
\\cos\\theta_c = \\frac{c}{nv} = \\frac{1}{n\\beta}
\\end{align}
$$

辐射在锥面上发出，锥轴沿粒子运动方向，锥角为 $\\theta_c$。

### 源项与推迟势

运动点电荷的电荷密度和电流密度：

$$
\\begin{align}
\\rho(\\mathbf{r},t) = q\\delta(x)\\delta(y)\\delta(z-vt)
\\end{align}
$$

$$
\\begin{align}
\\mathbf{J}(\\mathbf{r},t) = qv\\delta(x)\\delta(y)\\delta(z-vt)\\hat{\\mathbf{z}}
\\end{align}
$$

在介质中，推迟势满足：

$$
\\begin{align}
\\nabla^2\\phi - \\frac{n^2}{c^2}\\frac{\\partial^2\\phi}{\\partial t^2} = -\\frac{\\rho}{\\epsilon_0\\epsilon_r}
\\end{align}
$$

$$
\\begin{align}
\\nabla^2\\mathbf{A} - \\frac{n^2}{c^2}\\frac{\\partial^2\\mathbf{A}}{\\partial t^2} = -\\mu_0\\mathbf{J}
\\end{align}
$$

### 傅里叶分析

对电流做傅里叶变换：

$$
\\begin{align}
\\mathbf{J}(\\mathbf{r},\\omega) = \\frac{q}{2\\pi} e^{\\mathrm{i}\\omega z/v}\\delta(x)\\delta(y)\\hat{\\mathbf{z}}
\\end{align}
$$

矢势在频率空间满足亥姆霍兹方程：

$$
\\begin{align}
\\nabla^2\\mathbf{A}(\\mathbf{r},\\omega) + k^2\\mathbf{A}(\\mathbf{r},\\omega) = -\\mu_0\\mathbf{J}(\\mathbf{r},\\omega)
\\end{align}
$$

其中 $k = n\\omega/c$。

### 格林函数解

远场近似 $r \\gg \\lambda$ 下：

$$
\\begin{align}
|\\mathbf{r} - \\mathbf{r}'| \\approx r - \\mathbf{n}\\cdot\\mathbf{r}', \\quad \\mathbf{n} = \\frac{\\mathbf{r}}{r}
\\end{align}
$$

矢势为

$$
\\begin{align}
\\mathbf{A}(\\mathbf{r},\\omega) \\approx \\frac{\\mu_0 q}{8\\pi^2} \\frac{e^{\\mathrm{i}kr}}{r} \\hat{\\mathbf{z}} \\int e^{\\mathrm{i}\\omega z'/v} e^{-\\mathrm{i}k\\hat{n}\\cdot\\mathbf{r}'} \\delta(x')\\delta(y') \\,\\mathrm{d}^3r'
\\end{align}
$$

对 $z'$ 积分得

$$
\\begin{align}
\\int_{-\\infty}^{\\infty} e^{\\mathrm{i}\\omega z'/v} e^{-\\mathrm{i}kz'\\cos\\theta} \\,\\mathrm{d}z' = 2\\pi \\delta\\left(\\frac{\\omega}{v} - k\\cos\\theta\\right)
\\end{align}
$$

这个 $\\delta$ 函数给出了切伦科夫条件：

$$
\\begin{align}
\\cos\\theta = \\frac{\\omega}{kv} = \\frac{c}{nv} = \\frac{1}{n\\beta}
\\end{align}
$$

### 辐射场

磁场：

$$
\\begin{align}
\\mathbf{B}(\\mathbf{r},\\omega) = \\mathrm{i}\\mathbf{k}\\times\\mathbf{A} = \\frac{\\mathrm{i}\\mu_0 q\\omega}{8\\pi^2 c} \\frac{e^{\\mathrm{i}kr}}{r} \\sin\\theta \\,\\delta\\left(\\frac{\\omega}{v} - k\\cos\\theta\\right) \\hat{\\boldsymbol{\\phi}}
\\end{align}
$$

电场由麦克斯韦方程给出：

$$
\\begin{align}
\\mathbf{E} = \\frac{\\mathrm{i}}{k}\\sqrt{\\frac{\\mu_0}{\\epsilon_0}} \\nabla\\times\\mathbf{B}
\\end{align}
$$

辐射场是横波，非零只在切伦科夫锥面上。

### Frank-Tamm公式

单位频率的辐射功率：

$$
\\begin{align}
\\frac{\\mathrm{d}P}{\\mathrm{d}\\omega} = \\frac{q^2}{4\\pi\\epsilon_0 c^2} \\mu(\\omega) \\omega \\left(1 - \\frac{1}{\\beta^2 n^2(\\omega)}\\right) v
\\end{align}
$$

单位波长的辐射功率：

$$
\\begin{align}
\\frac{\\mathrm{d}P}{\\mathrm{d}\\lambda} = \\frac{2\\pi q^2}{\\epsilon_0 \\lambda^3} \\mu(\\lambda) \\left(1 - \\frac{1}{\\beta^2 n^2(\\lambda)}\\right)
\\end{align}
$$

单位路径的能量损失：

$$
\\begin{align}
\\frac{\\mathrm{d}W}{\\mathrm{d}x} = \\frac{q^2}{4\\pi\\epsilon_0 c^2} \\int_{\\omega_1}^{\\omega_2} \\mu(\\omega) \\omega \\left(1 - \\frac{1}{\\beta^2 n^2(\\omega)}\\right) \\mathrm{d}\\omega
\\end{align}
$$

**关键物理结论**：

1. 辐射只在 $n\\beta > 1$ 时存在
2. 辐射集中在切伦科夫锥面上
3. $\\mathrm{d}P/\\mathrm{d}\\lambda \\propto 1/\\lambda^3$，蓝光占主导
4. 色散限制了辐射的频率范围
5. 应用：粒子探测器、天体物理、核反应堆监测

---

## 第二部分：轫致辐射（Bremsstrahlung）

### 物理机制

轫致辐射是带电粒子（通常是电子）在离子库仑场中加速时发出的电磁辐射。德文"Bremsstrahlung"意为"刹车辐射"。

**关键假设**：在最低阶偶极近似下，电子-电子碰撞不产生净辐射（加速度等大反向）。

### 非相对论处理

拉莫尔公式：

$$
\\begin{align}
\\dot{W} = \\frac{e^2 a^2}{6\\pi\\epsilon_0 c^3}
\\end{align}
$$

库仑力：

$$
\\begin{align}
ma = \\frac{Ze^2}{4\\pi\\epsilon_0 r^2}
\\end{align}
$$

瞬时辐射功率：

$$
\\begin{align}
\\dot{W} = \\frac{2Z^2 e^6}{3(4\\pi\\epsilon_0)^3 m^2 c^3 r^4}
\\end{align}
$$

### 直线近似

在偏转角很小的近似下，将轨道视为直线。碰撞参数 $b$，沿路径距离 $s$，$r^2 = s^2 + b^2$，速度 $v$ 近似为常数。

单次碰撞辐射能量：

$$
\\begin{align}
W_{\\text{rad}} \\approx \\frac{\\pi Z^2 e^6}{3(4\\pi\\epsilon_0)^3 m^2 c^3 v b^3}
\\end{align}
$$

### 体积辐射功率

单位体积辐射功率（对 $b$ 积分）：

$$
\\begin{align}
P_{br} \\approx \\frac{2\\pi^2 n_i n_e Z^2 e^6}{3(4\\pi\\epsilon_0)^3 m^2 c^3} \\int_{b_{\\min}}^{\\infty} \\frac{\\mathrm{d}b}{b^2}
\\end{align}
$$

积分在 $b \\to 0$ 处发散，需要量子力学截断。

### 量子截断

量子力学给出最小碰撞参数为德布罗意波长：

$$
\\begin{align}
b_{\\min} \\approx \\frac{\\hbar}{mv}, \\quad v = \\left(\\frac{3T_e}{m}\\right)^{1/2}
\\end{align}
$$

最终公式（含Gaunt因子修正）：

$$
\\begin{align}
P_{br} = 1.7 \\times 10^{-38} Z^2 n_e n_i T_e^{1/2} \\quad (\\mathrm{W\\,m}^{-3})
\\end{align}
$$

其中 $T_e$ 以 $\\mathrm{eV}$ 为单位，$n_e, n_i$ 以 $\\mathrm{m}^{-3}$ 为单位。实际应用中需乘以约 $0.75$ 的Gaunt因子修正。

---

## 第三部分：冷均匀磁化等离子体中的波

### 线性化运动方程

对于磁化等离子体，背景磁场 $\\mathbf{B}_0 = B_0 \\hat{\\mathbf{z}}$。第 $s$ 种粒子的线性化运动方程为

$$
\\begin{align}
m_s \\frac{\\partial \\mathbf{v}_{s1}}{\\partial t} = e_s(\\mathbf{E}_1 + \\mathbf{v}_{s1} \\times \\mathbf{B}_0)
\\end{align}
$$

分量形式：

$$
\\begin{align}
-\\mathrm{i}\\omega m_s v_{sx} - e_s B_0 v_{sy} &= e_s E_x
\\end{align}
$$

$$
\\begin{align}
-\\mathrm{i}\\omega m_s v_{sy} + e_s B_0 v_{sx} &= e_s E_y
\\end{align}
$$

$$
\\begin{align}
-\\mathrm{i}\\omega m_s v_{sz} &= e_s E_z
\\end{align}
$$

定义回旋频率：

$$
\\begin{align}
\\omega_{cs} = \\frac{e_s B_0}{m_s}
\\end{align}
$$

### 速度解

$$
\\begin{align}
v_{sx} = \\frac{e_s}{m_s} \\left[ \\frac{-\\mathrm{i}\\omega}{\\omega_{cs}^2 - \\omega^2} E_x + \\frac{\\omega_{cs}}{\\omega_{cs}^2 - \\omega^2} E_y \\right]
\\end{align}
$$

$$
\\begin{align}
v_{sy} = \\frac{e_s}{m_s} \\left[ -\\frac{\\omega_{cs}}{\\omega_{cs}^2 - \\omega^2} E_x + \\frac{-\\mathrm{i}\\omega}{\\omega_{cs}^2 - \\omega^2} E_y \\right]
\\end{align}
$$

$$
\\begin{align}
v_{sz} = \\frac{e_s}{m_s} \\frac{\\mathrm{i}}{\\omega} E_z
\\end{align}
$$

### 介电张量

电流密度 $\\mathbf{J} = \\sum_s n_{s0} e_s \\mathbf{v}_{s1} = \\boldsymbol{\\sigma}\\cdot\\mathbf{E}$，介电张量 $\\tilde{\\boldsymbol{K}} = \\tilde{\\boldsymbol{I}} - \\dfrac{\\boldsymbol{\\sigma}}{\\mathrm{i}\\omega\\epsilon_0}$。

定义 Stix 参数：

$$
\\begin{align}
S = 1 - \\sum_s \\frac{\\omega_{ps}^2}{\\omega^2 - \\omega_{cs}^2}
\\end{align}
$$

$$
\\begin{align}
D = \\sum_s \\frac{\\omega_{cs}\\omega_{ps}^2}{\\omega(\\omega^2 - \\omega_{cs}^2)}
\\end{align}
$$

$$
\\begin{align}
P = 1 - \\sum_s \\frac{\\omega_{ps}^2}{\\omega^2}
\\end{align}
$$

介电张量写为

$$
\\begin{align}
\\tilde{\\boldsymbol{K}} = \\begin{pmatrix}
S & -\\mathrm{i}D & 0 \\\\
\\mathrm{i}D & S & 0 \\\\
0 & 0 & P
\\end{pmatrix}
\\end{align}
$$

### 波方程

折射率矢量 $\\mathbf{n} = \\dfrac{c\\mathbf{k}}{\\omega} = (n\\sin\\theta, 0, n\\cos\\theta)$。

波方程：

$$
\\begin{align}
\\mathbf{n}\\times(\\mathbf{n}\\times\\mathbf{E}) + \\tilde{\\boldsymbol{K}}\\cdot\\mathbf{E} = 0
\\end{align}
$$

展开为矩阵形式：

$$
\\begin{align}
\\begin{pmatrix}
S - n^2\\cos^2\\theta & -\\mathrm{i}D & n^2\\sin\\theta\\cos\\theta \\\\
\\mathrm{i}D & S - n^2 & 0 \\\\
n^2\\sin\\theta\\cos\\theta & 0 & P - n^2\\sin^2\\theta
\\end{pmatrix}
\\begin{pmatrix}
E_x \\\\ E_y \\\\ E_z
\\end{pmatrix} = 0
\\end{align}
$$

### 色散关系

由行列式为零得色散关系：

$$
\\begin{align}
A n^4 - B n^2 + RLP = 0
\\end{align}
$$

其中

$$
\\begin{align}
R = S + D, \\quad L = S - D
\\end{align}
$$

$$
\\begin{align}
A = S\\sin^2\\theta + P\\cos^2\\theta
\\end{align}
$$

$$
\\begin{align}
B = RL\\sin^2\\theta + PS(1+\\cos^2\\theta)
\\end{align}
$$

等价形式：

$$
\\begin{align}
\\tan^2\\theta = -\\frac{P(n^2 - R)(n^2 - L)}{(Sn^2 - RL)(n^2 - P)}
\\end{align}
$$

### 平行传播（$\\theta = 0$）

当 $\\theta = 0$ 时，有三种模式：

1. **纵向模式**：$P = 0$，$\\mathbf{E} \\parallel \\mathbf{B}_0$
2. **右旋模式**：$n^2 = R$
3. **左旋模式**：$n^2 = L$

右旋模式（$n^2 = R$）：

$$
\\begin{align}
R = 1 - \\frac{\\omega_{pi}^2}{\\omega(\\omega+\\omega_{ci})} - \\frac{\\omega_{pe}^2}{\\omega(\\omega-|\\omega_{ce}|)}
\\end{align}
$$

左旋模式（$n^2 = L$）：

$$
\\begin{align}
L = 1 - \\frac{\\omega_{pi}^2}{\\omega(\\omega-\\omega_{ci})} - \\frac{\\omega_{pe}^2}{\\omega(\\omega+|\\omega_{ce}|)}
\\end{align}
$$

### 哨声波（Whistler）

在低频范围 $\\omega_{ci} \\ll \\omega < |\\omega_{ce}|$ 内，且 $\\omega_{pe}^2/\\omega_{ce}^2 \\gg 1$ 时，右旋模式近似为

$$
\\begin{align}
n^2 = R \\approx \\frac{\\omega_{pe}^2}{(|\\omega_{ce}| - \\omega)\\omega}
\\end{align}
$$

色散关系：

$$
\\begin{align}
\\omega = \\omega_{ce} \\frac{k^2 c^2}{k^2 c^2 + \\omega_{pe}^2}
\\end{align}
$$

群速度：

$$
\\begin{align}
v_g = \\omega_{ce} \\frac{2kc^2\\omega_{pe}^2}{(k^2c^2 + \\omega_{pe}^2)^2}
\\end{align}
$$

低频极限 $\\omega \\ll \\omega_{ce}$ 下：

$$
\\begin{align}
v_g \\approx 2\\omega_{ce}\\left(\\frac{c}{\\omega_{pe}}\\right)^2 k \\propto \\sqrt{\\omega}
\\end{align}
$$

**重要结论**：高频成分比低频成分传播更快，因此宽频脉冲（如雷击信号）在磁层中传播时形成频率随时间下降的**哨声**。

### 法拉第旋转

线偏振波可分解为右旋和左旋圆偏振波的叠加。由于 $k_R \\neq k_L$，偏振面在传播过程中旋转。

旋转角：

$$
\\begin{align}
\\psi = \\frac{1}{2}(k_L - k_R)z
\\end{align}
$$

这就是**法拉第旋转**效应，在天体物理和电离层物理中有重要应用。

---

## 本章小结

|      专题      | 核心物理               | 关键公式                                                                                                        |
| :------------: | :--------------------- | :-------------------------------------------------------------------------------------------------------------- |
|  切伦科夫辐射  | 超光速粒子在介质中发光 | $\\cos\\theta_c = 1/(n\\beta)$，Frank-Tamm公式                                                                     |
|    轫致辐射    | 电子在库仑场中加速辐射 | $P_{br} = 1.7\\times10^{-38}Z^2 n_e n_i T_e^{1/2}$                                                               |
| 磁化等离子体波 | 磁场使介电张量各向异性 | $\\tilde{\\boldsymbol{K}} = \\begin{pmatrix}S & -\\mathrm{i}D & 0 \\\\ \\mathrm{i}D & S & 0 \\\\ 0 & 0 & P\\end{pmatrix}$ |
|     哨声波     | 色散导致频率下降       | $v_g \\propto \\sqrt{\\omega}$                                                                                     |
|   法拉第旋转   | 圆偏振波折射率不同     | $\\psi = \\frac{1}{2}(k_L - k_R)z$                                                                                |
`,i={title:"切伦科夫辐射、轫致辐射与磁化等离子体中的波",author:"NeoWangKing",date:new Date(17816544e5),lastMod:new Date(1782819654e3),tags:["物理","电动力学","切伦科夫辐射","轫致辐射","磁化等离子体","色散关系"],category:["物理","电动力学"],summary:"本文介绍电动力学的三个进阶专题：切伦科夫辐射的物理机制与Frank-Tamm公式、轫致辐射的经典与量子处理、以及冷均匀磁化等离子体中的波（色散关系、法拉第旋转、哨声波）。内容对应课程第13讲课件。",comments:!0,draft:!1,sticky:0},t={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/13-Cherenkov-Bremsstrahlung-Magnetized-Plasma.md",rawData:void 0};export{t as _internal,m as body,a as collection,i as data,n as id,e as slug};
