const a="physics/Electrodynamics/00-Electrodynamics-Final-Review.md",t="posts",n="physics/electrodynamics/00-electrodynamics-final-review",$=`
## [第1章 矢量分析（简要）](/posts/physics/electrodynamics/01-vector-analysis)

- 矢量代数：点乘、叉乘、三重积（标量三重积、BAC‑CAB规则）
- 微分：梯度、散度、旋度的定义与几何意义
- 积分定理：梯度定理、高斯定理（散度）、斯托克斯定理（旋度）
- 曲线坐标系：球坐标、柱坐标的线元、面元、体元及梯度/散度/旋度/拉普拉斯表达式
- 狄拉克δ函数：定义、性质、三维δ函数，恒等式 $\\nabla\\cdot(\\mathbf{r}/r^3)=4\\pi\\delta^3(\\mathbf{r})$
- 亥姆霍兹定理：矢量场由其散度和旋度唯一确定（边界条件）

## [第2章 电动力学基础（简要）](/posts/physics/electrodynamics/02-electrodynamics)

- 麦克斯韦方程组（真空与物质中，微分与积分形式）
- 洛伦兹力公式，磁力不做功
- 电磁感应：法拉第定律、楞次定律、电动势、动生电动势
- 电感（自感、互感）与磁能 $W = \\frac{1}{2}LI^2 = \\frac{1}{2\\mu_0}\\int B^2 d\\tau$
- 位移电流 $\\mathbf{J}_d = \\epsilon_0 \\partial\\mathbf{E}/\\partial t$，安培‑麦克斯韦定律
- 物质中的麦克斯韦方程组（$\\mathbf{D}, \\mathbf{H}$）及边界条件

## [第3章 电动力学与相对论（简要）](/posts/physics/electrodynamics/03-electrodynamics-and-relativity)

- 狭义相对论基本假设：相对性原理、光速不变原理
- 洛伦兹变换（沿x方向）及逆变换
- 时空结构：四维矢量 $x^\\mu=(ct,\\mathbf{r})$、间隔不变性（类时、类空、类光）
- 相对论力学：固有时 $\\tau$、四维速度 $\\eta^\\mu$、能量‑动量四维矢量 $p^\\mu=(E/c,\\mathbf{p})$，$E^2=p^2c^2+m^2c^4$
- 相对论电动力学：场变换公式（E,B 在惯性系间的变换）、场张量 $F^{\\mu\\nu}$、麦克斯韦方程协变形式 $\\partial_\\mu F^{\\mu\\nu}=\\mu_0 J^\\nu$，洛伦兹力协变形式 $K^\\mu = q\\eta_\\nu F^{\\mu\\nu}$

## [第4章 静电学（简要）](/posts/physics/electrodynamics/04-electrostatics)

- 库仑定律、电场叠加原理
- 高斯定律及其对称性应用（球、柱、平面对称）
- 电势 $V$，$\\mathbf{E}=-\\nabla V$，泊松方程 $\\nabla^2 V=-\\rho/\\epsilon_0$
- 导体性质：内部 $\\mathbf{E}=0$，电荷在表面，等势体，表面外场垂直
- 电容 $C=Q/V$，平行板 $C=\\epsilon_0 A/d$
- 静电能 $W=\\frac{1}{2}\\int \\rho V d\\tau = \\frac{\\epsilon_0}{2}\\int E^2 d\\tau$

## [第5章 势（重点：镜像法、多极展开；分离变量法了解）](/posts/physics/electrodynamics/05-potentials)

### 5.1 拉普拉斯方程与唯一性定理

- 无电荷区域 $\\nabla^2 V=0$，解具有平均值性质，无局部极值
- 第一唯一性定理：边界上 $V$ 给定，内部解唯一
- 第二唯一性定理：导体上总电荷给定，场唯一

### 5.2 分离变量法（直角、球、柱）

- 直角坐标：$V=(Ae^{kx}+Be^{-kx})(C\\sin ky+D\\cos ky)$，系数由傅里叶级数确定
- 球坐标（轴对称）：$V=\\sum_{l=0}^\\infty (A_l r^l + B_l r^{-l-1})P_l(\\cos\\theta)$，勒让德多项式正交性
- 柱坐标：径向解为贝塞尔函数或 $s^{\\pm k}$（含 $\\ln s$）

### 5.3 镜像法（考试常与辐射结合）

**基本原理**：用假想电荷（像电荷）代替边界上的感应电荷，使原边界条件满足。

**经典配置**：

- 点电荷 $q$ 距接地平面 $d$：像电荷 $-q$ 在对称位置
- 点电荷 $q$ 距接地球心 $a$（半径 $R$）：像电荷 $q'=-Rq/a$，距球心 $b=R^2/a$
- 两相交接地平面（夹角 $\\pi/n$）：用 $2n-1$ 个像电荷

**镜像法在辐射问题中的应用**（如回忆卷）：偶极子 $\\mathbf{p}(t)$ 平行于无限大导体平板，用镜像偶极子代替平板，然后计算两个偶极子的辐射叠加。

### 5.4 多极展开

- 远场势的展开 $V=\\frac{1}{4\\pi\\epsilon_0}\\sum_{n=0}^\\infty \\frac{1}{r^{n+1}}\\int (r')^n P_n(\\cos\\alpha)\\rho(\\mathbf{r}')d\\tau'$
- 单极项：$V_{\\rm mon}=\\frac{1}{4\\pi\\epsilon_0}\\frac{Q}{r}$，$Q=\\int\\rho d\\tau$
- 偶极项：$V_{\\rm dip}=\\frac{1}{4\\pi\\epsilon_0}\\frac{\\mathbf{p}\\cdot\\hat{\\mathbf{r}}}{r^2}$，$\\mathbf{p}=\\int\\mathbf{r}'\\rho d\\tau'$
- 偶极子电场：$\\mathbf{E}_{\\rm dip}=\\frac{1}{4\\pi\\epsilon_0}\\frac{1}{r^3}[3(\\mathbf{p}\\cdot\\hat{\\mathbf{r}})\\hat{\\mathbf{r}}-\\mathbf{p}]$（注意原点处的 $\\delta$ 项）

## [第6章 物质中的电场（简要）](/posts/physics/electrodynamics/06-electric-fields-in-matter)

- 极化 $\\mathbf{P}$：位移极化、转向极化
- 束缚电荷 $\\rho_b=-\\nabla\\cdot\\mathbf{P}$，$\\sigma_b=\\mathbf{P}\\cdot\\hat{\\mathbf{n}}$
- 电位移 $\\mathbf{D}=\\epsilon_0\\mathbf{E}+\\mathbf{P}$，高斯定律 $\\nabla\\cdot\\mathbf{D}=\\rho_f$
- 线性电介质：$\\mathbf{P}=\\epsilon_0\\chi_e\\mathbf{E}$，$\\mathbf{D}=\\epsilon\\mathbf{E}$，$\\epsilon=\\epsilon_0(1+\\chi_e)$
- 边界条件：$D_\\perp$ 差为 $\\sigma_f$，$E_\\parallel$ 连续
- 能量 $W=\\frac{1}{2}\\int \\mathbf{D}\\cdot\\mathbf{E}\\,d\\tau$

## [第7章 静磁学（简要）](/posts/physics/electrodynamics/07-magnetostatics)

- 洛伦兹力（磁力不做功）
- 电流密度 $\\mathbf{J}$，连续性方程
- 毕奥‑萨伐尔定律（线、面、体电流）
- 安培定律 $\\nabla\\times\\mathbf{B}=\\mu_0\\mathbf{J}$，积分形式 $\\oint \\mathbf{B}\\cdot d\\mathbf{l}=\\mu_0 I_{\\rm enc}$
- 矢势 $\\mathbf{B}=\\nabla\\times\\mathbf{A}$，库仑规范 $\\nabla\\cdot\\mathbf{A}=0$，$\\nabla^2\\mathbf{A}=-\\mu_0\\mathbf{J}$
- 磁偶极子：$\\mathbf{m}=I\\int d\\mathbf{a}$，$\\mathbf{A}_{\\rm dip}=\\frac{\\mu_0}{4\\pi}\\frac{\\mathbf{m}\\times\\hat{\\mathbf{r}}}{r^2}$，$\\mathbf{B}_{\\rm dip}=\\frac{\\mu_0}{4\\pi}\\frac{1}{r^3}[3(\\mathbf{m}\\cdot\\hat{\\mathbf{r}})\\hat{\\mathbf{r}}-\\mathbf{m}]$（含 $\\delta$ 项）
- 边界条件：$B_\\perp$ 连续，$B_\\parallel$ 跳变 $\\mu_0\\mathbf{K}\\times\\hat{\\mathbf{n}}$

## [第8章 物质中的磁场（简要）](/posts/physics/electrodynamics/08-magnetic-fields-in-matter)

- 磁化 $\\mathbf{M}$，束缚电流 $\\mathbf{J}_b=\\nabla\\times\\mathbf{M}$，$\\mathbf{K}_b=\\mathbf{M}\\times\\hat{\\mathbf{n}}$
- 辅助场 $\\mathbf{H}=\\frac{1}{\\mu_0}\\mathbf{B}-\\mathbf{M}$，$\\nabla\\times\\mathbf{H}=\\mathbf{J}_f$
- 线性磁介质：$\\mathbf{M}=\\chi_m\\mathbf{H}$，$\\mathbf{B}=\\mu\\mathbf{H}$，$\\mu=\\mu_0(1+\\chi_m)$
- 边界条件：$B_\\perp$ 连续，$H_\\parallel$ 跳变 $\\mathbf{K}_f\\times\\hat{\\mathbf{n}}$
- 铁磁性：磁滞、居里点

## [第9章 守恒定律（简要）](/posts/physics/electrodynamics/09-conservation-laws)

- 电荷守恒：连续性方程 $\\partial\\rho/\\partial t+\\nabla\\cdot\\mathbf{J}=0$
- 能量守恒：坡印廷定理 $\\frac{\\partial u}{\\partial t}+\\nabla\\cdot\\mathbf{S}=-\\mathbf{J}\\cdot\\mathbf{E}$，其中 $u=\\frac{1}{2}(\\epsilon_0E^2+\\frac{1}{\\mu_0}B^2)$，$\\mathbf{S}=\\frac{1}{\\mu_0}\\mathbf{E}\\times\\mathbf{B}$
- 动量守恒：动量密度 $\\mathbf{g}=\\epsilon_0\\mathbf{E}\\times\\mathbf{B}$，麦克斯韦应力张量 $\\overleftrightarrow{\\mathbf{T}}$，$\\frac{\\partial}{\\partial t}(\\mathbf{g}_{\\rm mech}+\\mathbf{g}_{\\rm field})=\\nabla\\cdot\\overleftrightarrow{\\mathbf{T}}$
- 角动量密度 $\\boldsymbol{\\ell}=\\mathbf{r}\\times\\mathbf{g}$

## [第10章 电磁波（重点）](/posts/physics/electrodynamics/10-electromagnetic-waves)

### 10.1 真空中的平面波

- 波动方程 $\\nabla^2\\mathbf{E}=\\frac{1}{c^2}\\partial_t^2\\mathbf{E}$，$\\nabla^2\\mathbf{B}=\\frac{1}{c^2}\\partial_t^2\\mathbf{B}$
- 单色平面波：$\\mathbf{E}=\\mathbf{E}_0 e^{i(\\mathbf{k}\\cdot\\mathbf{r}-\\omega t)}$，$\\mathbf{B}=\\frac{1}{c}\\hat{\\mathbf{k}}\\times\\mathbf{E}$，横波，$E_0=cB_0$
- 能流密度 $\\langle\\mathbf{S}\\rangle=\\frac{1}{2}c\\epsilon_0 E_0^2\\hat{\\mathbf{k}}$，辐射压 $P=\\langle S\\rangle/c$

### 10.2 介质中的电磁波

- 折射率 $n=\\sqrt{\\epsilon_r\\mu_r}=c/v$
- 正常入射反射/透射：$\\tilde{E}_{0R}=\\frac{1-\\beta}{1+\\beta}\\tilde{E}_{0I}$，$\\tilde{E}_{0T}=\\frac{2}{1+\\beta}\\tilde{E}_{0I}$，$\\beta=\\frac{\\mu_1 v_1}{\\mu_2 v_2}\\approx\\frac{n_2}{n_1}$
- 反射系数 $R=(\\frac{n_1-n_2}{n_1+n_2})^2$，透射系数 $T=\\frac{4n_1n_2}{(n_1+n_2)^2}$，$R+T=1$
- 斜入射：菲涅耳公式、布儒斯特角 $\\tan\\theta_B=n_2/n_1$、全反射临界角 $\\sin\\theta_c=n_2/n_1$

### 10.3 导体中的电磁波（趋肤效应）

- 复波数 $\\tilde{k}=k+i\\kappa$，$k,\\kappa$ 表达式（见讲义）
- 趋肤深度 $d=1/\\kappa$，对于良导体 $d=\\sqrt{2/(\\sigma\\mu\\omega)}$

### 10.4 色散与介质模型

- 电子受迫振动：$m\\ddot{x}+m\\gamma\\dot{x}+m\\omega_0^2x=qE_0\\cos\\omega t$
- 复介电常数 $\\tilde{\\epsilon}_r=1+\\frac{Nq^2}{m\\epsilon_0}\\sum_j \\frac{f_j}{\\omega_j^2-\\omega^2-i\\gamma_j\\omega}$
- 折射率 $n$ 和吸收系数 $\\alpha$ 由 $\\tilde{k}=\\frac{\\omega}{c}\\sqrt{\\tilde{\\epsilon}_r}$ 得到

### 10.5 等离子体中的电磁波（考试重点）

**冷等离子体模型**（无碰撞）：

- 电子运动方程 $m_e\\dot{\\mathbf{v}}=-e\\mathbf{E}$（忽略磁力）$\\Rightarrow$ 极化率 $\\chi_e=-\\frac{\\omega_p^2}{\\omega^2}$，$\\epsilon_r=1-\\frac{\\omega_p^2}{\\omega^2}$，$\\omega_p=\\sqrt{\\frac{n_e e^2}{m_e\\epsilon_0}}$
- 色散关系 $\\omega^2=\\omega_p^2+c^2k^2$，折射率 $n(\\omega)=\\sqrt{1-\\omega_p^2/\\omega^2}$
- 波传播条件 $\\omega>\\omega_p$；$\\omega<\\omega_p$ 时波衰减（全反射）

**折射角**（真空→等离子体）：

斯涅尔定律 $\\sin\\theta_T = \\frac{\\sin\\theta_I}{\\sqrt{1-\\omega_p^2/\\omega^2}}$，若右边 >1 则全反射，临界角 $\\sin\\theta_c = \\sqrt{1-\\omega_p^2/\\omega^2}$（当 $\\omega>\\omega_p$）。

**布儒斯特角**（零反射，平行极化）：

$\\tan\\theta_B = n(\\omega) = \\sqrt{1-\\omega_p^2/\\omega^2}$，故 $\\theta_B = \\arctan(\\sqrt{1-\\omega_p^2/\\omega^2})$。

**考虑辐射阻尼的修正**（回忆卷）：

加入阻尼力 $-m_e\\gamma\\dot{\\mathbf{v}}$（$\\gamma=\\omega^2\\tau$，$\\tau=\\mu_0e^2/(6\\pi m_e c)$），复介电常数 $\\epsilon_r=1-\\frac{\\omega_p^2}{\\omega^2+i\\gamma\\omega}$，复波数有虚部，衰减长度 $L=1/{\\rm Im}(k)$。

### 10.6 波导（考试重点）

#### 10.6.1 矩形波导

- TE 波（$E_z=0$）和 TM 波（$B_z=0$），TEM 波不存在于空心波导
- 纵向场满足亥姆霍兹方程，边界条件：导体表面切向电场为零（TM 波 $E_z=0$ 在边界；TE 波 $\\partial B_z/\\partial n=0$）
- 色散关系 $k=\\frac{1}{c}\\sqrt{\\omega^2-\\omega_{mn}^2}$，截止频率 $\\omega_{mn}=c\\pi\\sqrt{(m/a)^2+(n/b)^2}$
- TM$_{m0}$ 和 TM$_{0n}$ 不存在（因为 $E_z=0$）
- 最低模式 TE$_{10}$，截止频率 $\\omega_{10}=c\\pi/a$

#### 10.6.2 平行导体板（平板波导）

- 板间距 $d$，波沿 $x$ 方向传播，场与 $y$ 无关
- TE$_m$ 模式：$B_z\\propto\\cos(m\\pi z/d)$，色散 $k=\\sqrt{\\omega^2/c^2-(m\\pi/d)^2}$，截止 $\\omega_{c,m}=m\\pi c/d$
- TM$_m$ 模式：$E_z\\propto\\sin(m\\pi z/d)$，$m=1,2,\\dots$（$m=0$ 时 $E_z=0$ 无意义）
- 平均能流密度 $\\langle S_x\\rangle = \\frac{1}{2\\mu_0}\\frac{k}{\\omega}|E_0|^2\\cos^2(m\\pi z/d)$（TE 模）

## [第11章 势和场（重点：推迟势、李纳-维谢尔）](/posts/physics/electrodynamics/11-potentials-and-fields)

### 11.1 标势和矢势

- $\\mathbf{B}=\\nabla\\times\\mathbf{A}$，$\\mathbf{E}=-\\nabla V-\\partial_t\\mathbf{A}$
- 规范变换：$\\mathbf{A}'=\\mathbf{A}+\\nabla\\lambda$，$V'=V-\\partial_t\\lambda$
- 洛伦兹规范：$\\nabla\\cdot\\mathbf{A}+\\frac{1}{c^2}\\partial_t V=0$，得 $\\Box^2 V=-\\rho/\\epsilon_0$，$\\Box^2\\mathbf{A}=-\\mu_0\\mathbf{J}$

### 11.2 推迟势

$V(\\mathbf{r},t)=\\frac{1}{4\\pi\\epsilon_0}\\int\\frac{\\rho(\\mathbf{r}',t_r)}{\\mathscr{r}}d\\tau'$，$\\mathbf{A}=\\frac{\\mu_0}{4\\pi}\\int\\frac{\\mathbf{J}(\\mathbf{r}',t_r)}{\\mathscr{r}}d\\tau'$，$t_r=t-\\mathscr{r}/c$

### 11.3 杰菲缅科方程（略，了解即可）

### 11.4 李纳-维谢尔势（运动点电荷）

- $V=\\frac{1}{4\\pi\\epsilon_0}\\frac{q}{\\mathscr{r}(1-\\hat{\\boldsymbol{\\mathscr{r}}}\\cdot\\mathbf{v}/c)}$，$\\mathbf{A}=\\frac{\\mathbf{v}}{c^2}V$
- 场：$\\mathbf{E}=\\frac{q}{4\\pi\\epsilon_0}\\frac{\\mathscr{r}}{(\\boldsymbol{\\mathscr{r}}\\cdot\\mathbf{u})^3}[(c^2-v^2)\\mathbf{u}+\\boldsymbol{\\mathscr{r}}\\times(\\mathbf{u}\\times\\mathbf{a})]$，$\\mathbf{u}=c\\hat{\\boldsymbol{\\mathscr{r}}}-\\mathbf{v}$，$\\mathbf{B}=\\frac{1}{c}\\hat{\\boldsymbol{\\mathscr{r}}}\\times\\mathbf{E}$
- 速度场（$1/r^2$）和加速度场（$1/r$，辐射场）

### 11.5 矢势的唯一性（回忆卷考点）

在真空中，若取 $V=0$，则 $\\mathbf{E}=-\\partial_t\\mathbf{A}$，$\\mathbf{B}=\\nabla\\times\\mathbf{A}$，且 $\\mathbf{A}$ 满足：

1. $\\Box^2\\mathbf{A}=0$
2. $\\nabla\\cdot\\mathbf{A}=0$（横波条件）
   给定边界和初始条件，$\\mathbf{A}$ 唯一确定，从而 $\\mathbf{E},\\mathbf{B}$ 唯一。

## [第12章 辐射（重点）](/posts/physics/electrodynamics/12-radiation)

### 12.1 辐射的定义

只有 $1/r$ 的场（加速度场）贡献辐射功率，因为 $S\\sim1/r^2$，面积 $4\\pi r^2$ 给出有限值。

### 12.2 电偶极辐射

- 辐射场：$\\mathbf{E}_{\\rm rad}=\\frac{\\mu_0}{4\\pi r}[\\hat{\\mathbf{r}}\\times(\\hat{\\mathbf{r}}\\times\\ddot{\\mathbf{p}})]$，$\\mathbf{B}_{\\rm rad}=\\frac{1}{c}\\hat{\\mathbf{r}}\\times\\mathbf{E}_{\\rm rad}$（远区，非相对论）
- 瞬时功率 $P(t)=\\frac{\\mu_0}{6\\pi c}|\\ddot{\\mathbf{p}}(t_r)|^2$
- 简谐 $\\mathbf{p}=\\mathbf{p}_0\\cos\\omega t$：$\\langle P\\rangle=\\frac{\\mu_0\\omega^4|\\mathbf{p}_0|^2}{12\\pi c}$
- 角分布 $\\frac{dP}{d\\Omega}=\\frac{\\mu_0}{32\\pi^2c}|\\ddot{\\mathbf{p}}|^2\\sin^2\\theta$

### 12.3 磁偶极辐射

- $\\langle P\\rangle=\\frac{\\mu_0\\omega^4|\\mathbf{m}_0|^2}{12\\pi c^3}$，通常比电偶极弱 $(\\omega b/c)^2$ 倍

### 12.4 任意源的辐射（电偶极近似）

远区辐射由 $\\ddot{\\mathbf{p}}$ 决定，公式同电偶极辐射。

### 12.5 运动点电荷的辐射

#### 12.5.1 非相对论（拉莫尔公式）

$P=\\frac{\\mu_0 q^2 a^2}{6\\pi c}$，角分布 $\\frac{dP}{d\\Omega}=\\frac{\\mu_0 q^2 a^2}{16\\pi^2 c}\\sin^2\\theta$

#### 12.5.2 相对论（李纳公式）

$P=\\frac{\\mu_0 q^2\\gamma^6}{6\\pi c}\\left(a^2-\\frac{|\\mathbf{v}\\times\\mathbf{a}|^2}{c^2}\\right)$

- $\\mathbf{v}\\parallel\\mathbf{a}$（直线加速）：$P=\\frac{\\mu_0 q^2 a^2\\gamma^6}{6\\pi c}$，角分布 $\\frac{dP}{d\\Omega}=\\frac{\\mu_0 q^2 a^2}{16\\pi^2c}\\frac{\\sin^2\\theta}{(1-\\beta\\cos\\theta)^5}$（轫致辐射，向前集中）
- $\\mathbf{v}\\perp\\mathbf{a}$（圆周运动）：同步辐射，同样向前集中

### 12.6 辐射反作用力

- 阿布拉罕-洛伦兹公式（非相对论）：$\\mathbf{F}_{\\rm rad}=\\frac{\\mu_0 q^2}{6\\pi c}\\dot{\\mathbf{a}}$
- 问题：预加速、runaway 解；仅对周期性运动平均有效
- 辐射阻尼：简谐运动 $\\gamma_{\\rm rad}=\\omega^2\\tau$，$\\tau=\\frac{\\mu_0 q^2}{6\\pi m c}$

### 12.7 球对称径向振荡不辐射（回忆卷）

球对称电荷分布 $\\rho(r,t)$ 作径向振荡，$\\mathbf{p}=\\int\\mathbf{r}'\\rho d\\tau'=0$，故电偶极辐射为零，更高多极一般也为零（或可忽略）。

### 12.8 镜像法与偶极子辐射（回忆卷）

无限大接地导体平板上的偶极子 $\\mathbf{p}(t)$（平行于板），用镜像偶极子替代平板，再计算两个偶极子的辐射叠加。总辐射场为两者矢量和，考虑相位差，得到辐射角分布和功率。
`,m={title:"电动力学期末复习",author:"NeoWangKing",date:new Date(17825184e5),lastMod:new Date(17829072e5),tags:["物理","电动力学","期末复习","波导","等离子体","辐射"],category:["物理","电动力学"],summary:"根据近两年期末回忆卷和全部课程讲义，按12个章节系统整理电动力学复习要点，重点突出波导、等离子体、辐射、运动电荷场等高频考点。",comments:!0,draft:!0,sticky:0},r={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/00-Electrodynamics-Final-Review.md",rawData:void 0};export{r as _internal,$ as body,t as collection,m as data,a as id,n as slug};
