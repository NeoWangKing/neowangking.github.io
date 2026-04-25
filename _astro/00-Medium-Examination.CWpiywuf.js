const a="physics/TheoreticalMechanics/00-Medium-Examination.md",n="posts",$="physics/theoreticalmechanics/00-medium-examination",t=`
## 一、牛顿力学基础

### 1. 牛顿定律

- **第一定律**（惯性定律）：物体保持静止或匀速直线运动，除非外力作用。
- **第二定律**：$\\boldsymbol{F} = \\dfrac{d\\boldsymbol{p}}{dt} = m\\boldsymbol{a}$（质量恒定）。
- **第三定律**：$\\boldsymbol{F}_{12} = -\\boldsymbol{F}_{21}$。

### 2. 常见坐标系下的加速度

- **直角坐标**：$a_x=\\ddot{x},\\ a_y=\\ddot{y},\\ a_z=\\ddot{z}$。
- **极坐标**：$a_r = \\ddot{r} - r\\dot{\\theta}^2$，$a_\\theta = r\\ddot{\\theta}+2\\dot{r}\\dot{\\theta}$。
- **柱坐标**：类似极坐标，加上 $z$ 方向加速度 $\\ddot{z}$。
- **自然坐标**：$a_t = \\dot{v}$，$a_n = v^2/\\rho$（$\\rho$ 曲率半径）。

### 3. 质点系动力学

- **质心**：$\\displaystyle \\boldsymbol{r}_c = \\frac{\\sum m_i \\boldsymbol{r}_i}{\\sum m_i}$。
- **质心运动定理**：$M\\ddot{\\boldsymbol{r}}_c = \\boldsymbol{F}^{\\text{(ext)}}$。
- **动量定理**：$\\dfrac{d\\boldsymbol{P}}{dt} = \\boldsymbol{F}^{\\text{(ext)}}$。
- **角动量定理**：$\\dfrac{d\\boldsymbol{L}}{dt} = \\boldsymbol{M}^{\\text{(ext)}}$。
- **动能定理**：$dT = \\sum \\boldsymbol{F}_i \\cdot d\\boldsymbol{r}_i$。

### 4. 守恒律（对称性背景）

| 守恒量 | 条件              | 对称性   |
| ------ | ----------------- | -------- |
| 动量   | 合外力为零        | 空间平移 |
| 角动量 | 合外力矩为零      | 空间旋转 |
| 机械能 | 保守力 + 稳定约束 | 时间平移 |

## 二、约束与虚功原理

### 1. 约束分类

- **完整约束**：只限制坐标和时间，可积分。$f(\\boldsymbol{r}_i, t)=0$。
- **非完整约束**：包含速度且不可积分。
- **稳定约束**：不显含时间；**不稳定约束**：显含时间。

### 2. 虚位移与虚功

- **虚位移** $\\delta \\boldsymbol{r}_i$：约束允许的任意无穷小位移（固定时间）。
- **虚功** $\\delta W = \\sum \\boldsymbol{F}_i \\cdot \\delta \\boldsymbol{r}_i$。
- **理想约束**：$\\sum \\boldsymbol{N}_i \\cdot \\delta \\boldsymbol{r}_i = 0$（光滑面、刚性杆、纯滚动等）。

### 3. 达朗贝尔方程（动力学普遍方程）

$$
\\sum_i (\\boldsymbol{F}_i - m_i\\ddot{\\boldsymbol{r}}_i) \\cdot \\delta \\boldsymbol{r}_i = 0
$$

- 消去约束力，适用于理想约束体系。

### 4. 虚功原理（静力学）

平衡时：$\\sum \\boldsymbol{F}_i \\cdot \\delta \\boldsymbol{r}_i = 0$。

## 三、拉格朗日方程

### 1. 广义坐标与自由度

- 自由度 $s = 3n - k$（完整约束数 $k$）。
- 广义坐标 $q_\\alpha$（$s$ 个独立参量）。

### 2. 广义力

$$
Q_\\alpha = \\sum_i \\boldsymbol{F}_i \\cdot \\frac{\\partial \\boldsymbol{r}_i}{\\partial q_\\alpha}
$$

- 保守力时 $Q_\\alpha = -\\dfrac{\\partial V}{\\partial q_\\alpha}$。

### 3. 拉格朗日方程的一般形式

$$
\\frac{d}{dt}\\left( \\frac{\\partial T}{\\partial \\dot{q}_\\alpha} \\right) - \\frac{\\partial T}{\\partial q_\\alpha} = Q_\\alpha
$$

### 4. 保守体系的拉格朗日方程

- 拉格朗日函数 $L = T - V$。
- 方程：$\\dfrac{d}{dt}\\left( \\dfrac{\\partial L}{\\partial \\dot{q}_\\alpha} \\right) - \\dfrac{\\partial L}{\\partial q_\\alpha} = 0$。

### 5. 应用步骤

1. 确定自由度，选取广义坐标。
2. 用广义坐标、广义速度写出 $T$ 和 $V$。
3. 构造 $L = T - V$。
4. 代入拉格朗日方程得到运动方程。

## 四、守恒量与对称性

### 1. 广义能量积分

- 若 $L$ 不显含 $t$，则 $H = \\sum_\\alpha \\dfrac{\\partial L}{\\partial \\dot{q}_\\alpha} \\dot{q}_\\alpha - L = \\text{常数}$。
- 稳定约束 + 势能无关速度 → $H = T+V$（机械能守恒）。

### 2. 循环坐标与广义动量

- 若 $\\dfrac{\\partial L}{\\partial q_\\alpha}=0$（$q_\\alpha$ 为循环坐标），则 $p_\\alpha = \\dfrac{\\partial L}{\\partial \\dot{q}_\\alpha} = \\text{常数}$。
- 对应守恒量：动量、角动量等。

### 3. 诺特定理

- 对称性 → 守恒量：
  - 时间平移 → 能量守恒
  - 空间平移 → 动量守恒
  - 空间旋转 → 角动量守恒

## 五、瞬时力问题（碰撞、冲量）

### 1. 拉格朗日方程的积分形式

- 冲量作用时间极短，广义坐标不变，广义动量突变：
  $$
  \\left[ \\frac{\\partial T}{\\partial \\dot{q}_\\alpha} \\right]_{t_0^-}^{t_0^+} = \\hat{Q}_\\alpha
  $$
- 广义冲量：$\\hat{Q}_\\alpha = \\int Q_\\alpha dt = \\sum_i \\boldsymbol{I}_i \\cdot \\dfrac{\\partial \\boldsymbol{r}_i}{\\partial q_\\alpha}$。

### 2. 碰撞恢复系数

- 沿法向：$e = \\dfrac{v_2' - v_1'}{v_1 - v_2}$，$0\\le e\\le 1$。
- 完全弹性：$e=1$；完全非弹性：$e=0$。

## 六、两体问题与中心势场

### 1. 两体约化为单粒子

- 质心坐标 $\\boldsymbol{R}$，相对坐标 $\\boldsymbol{r}$。
- 约化质量 $\\mu = \\dfrac{m_1 m_2}{m_1+m_2}$。
- 运动分解：质心自由运动 + 相对运动（质量为 $\\mu$，势 $V(r)$）。

### 2. 中心势场中的守恒量

- 角动量守恒：$\\boldsymbol{L} = \\mu r^2 \\dot{\\theta} \\hat{\\boldsymbol{z}}$（大小 $l = \\mu r^2 \\dot{\\theta}$）。
- 能量守恒：$E = \\frac{1}{2}\\mu (\\dot{r}^2 + r^2\\dot{\\theta}^2) + V(r)$。

### 3. 有效势能与径向运动

- 有效势能：$V_{\\text{eff}}(r) = V(r) + \\dfrac{l^2}{2\\mu r^2}$。
- 径向方程：$E = \\frac{1}{2}\\mu \\dot{r}^2 + V_{\\text{eff}}(r)$。

### 4. 平方反比引力（$V = -k/r$，$k>0$）

- 轨道方程：$\\dfrac{1}{r} = \\dfrac{\\mu k}{l^2} [1 + e \\cos(\\theta - \\theta_0)]$，$e = \\sqrt{1 + \\dfrac{2E l^2}{\\mu k^2}}$。
- 轨道类型：
  - $E < 0$ → 椭圆（$e<1$，圆 $e=0$）
  - $E = 0$ → 抛物线（$e=1$）
  - $E > 0$ → 双曲线（$e>1$）

### 5. 轨道稳定性

- 圆轨道稳定性：$V_{\\text{eff}}''(r_0) > 0$ 稳定。  
  对 $V(r) = -\\alpha r^{-\\beta}$，稳定条件 $\\beta < 2$。  
  平方反比力（$\\beta=1$）稳定。

### 6. 散射截面（卢瑟福散射）

- 微分散射截面：$\\dfrac{d\\sigma}{d\\Omega} = \\left| \\dfrac{b}{\\sin\\theta} \\dfrac{db}{d\\theta} \\right|$。
- 库仑散射：$\\dfrac{d\\sigma}{d\\Omega} = \\left( \\dfrac{\\alpha}{4E} \\right)^2 \\dfrac{1}{\\sin^4(\\theta/2)}$，$\\alpha = \\dfrac{q_1 q_2}{4\\pi\\epsilon_0}$。

## 七、微振动（多自由度体系）

### 1. 基本思想

对于处于**稳定平衡**位置的保守体系，当动能和势能在平衡点附近做小振动时，可将拉格朗日函数展开到二阶，从而得到**线性化运动方程**。这种近似称为**微振动近似**或**简谐近似**。

设平衡位置为 $q_\\alpha = q_{\\alpha 0}$（常可取为零），广义坐标偏离平衡的小量为 $\\xi_\\alpha = q_\\alpha - q_{\\alpha 0}$。以下推导均用 $\\xi_\\alpha$ 表示小量。

### 2. 动能与势能的近似展开

#### 2.1 动能的近似

对于稳定约束，动能 $T$ 是广义速度 $\\dot{q}_\\alpha$ 的二次齐次函数，且系数为广义坐标的函数：

$$
T = \\frac{1}{2} \\sum_{\\alpha,\\beta} m_{\\alpha\\beta}(q) \\dot{q}_\\alpha \\dot{q}_\\beta
$$

在平衡位置附近，可将系数 $m_{\\alpha\\beta}(q)$ 在 $q = q_0$ 处泰勒展开到零阶（因为与 $\\dot{q}$ 相乘后已是一阶小量）：

$$
m_{\\alpha\\beta}(q) \\approx m_{\\alpha\\beta}(q_0) \\equiv M_{\\alpha\\beta}
$$

于是

$$
T \\approx \\frac{1}{2} \\sum_{\\alpha,\\beta} M_{\\alpha\\beta} \\dot{\\xi}_\\alpha \\dot{\\xi}_\\beta
$$

其中 $M_{\\alpha\\beta}$ 是对称正定矩阵。

#### 2.2 势能的近似

势能 $V(q)$ 在平衡位置 $q_0$ 处取极小值，一阶导数为零。泰勒展开到二阶：

$$
V(q) \\approx V(q_0) + \\frac{1}{2} \\sum_{\\alpha,\\beta} \\left.\\frac{\\partial^2 V}{\\partial q_\\alpha \\partial q_\\beta}\\right|_{q_0} \\xi_\\alpha \\xi_\\beta
$$

记

$$
K_{\\alpha\\beta} = \\left.\\frac{\\partial^2 V}{\\partial q_\\alpha \\partial q_\\beta}\\right|_{q_0}
$$

则 $K_{\\alpha\\beta}$ 对称，且对于稳定平衡，它是正定矩阵。常数项 $V(q_0)$ 不影响运动，可略去。

### 3. 拉格朗日函数与运动方程

拉格朗日函数 $L = T - V$ 的近似为

$$
L = \\frac{1}{2} \\sum_{\\alpha,\\beta} \\left( M_{\\alpha\\beta} \\dot{\\xi}_\\alpha \\dot{\\xi}_\\beta - K_{\\alpha\\beta} \\xi_\\alpha \\xi_\\beta \\right)
$$

代入拉格朗日方程 $\\frac{\\mathrm{d}}{\\mathrm{d}t}\\frac{\\partial L}{\\partial \\dot{\\xi}_\\alpha} - \\frac{\\partial L}{\\partial \\xi_\\alpha} = 0$，得到**线性微分方程组**：

$$
\\sum_{\\beta} \\left( M_{\\alpha\\beta} \\ddot{\\xi}_\\beta + K_{\\alpha\\beta} \\xi_\\beta \\right) = 0, \\quad \\alpha = 1,\\dots,s
$$

写成矩阵形式：

$$
M \\ddot{\\xi} + K \\xi = 0
$$

其中 $M$ 和 $K$ 是 $s\\times s$ 实对称矩阵，$M$ 正定，$K$ 正定（稳定平衡）。

### 4. 简正频率与简正模式

设简正模解为 $\\xi(t) = a \\, e^{\\mathrm{i}\\omega t}$（或 $\\cos(\\omega t+\\varphi)$），代入得广义本征方程：

$$
(K - \\omega^2 M) a = 0
$$

非零解的条件是系数行列式为零：

$$
\\det(K - \\omega^2 M) = 0
$$

此式为 $\\omega^2$ 的 $s$ 次代数方程，称为**久期方程**。解得 $s$ 个正根 $\\omega_1^2, \\omega_2^2, \\dots, \\omega_s^2$（因 $M,K$ 正定），开方后得到 $s$ 个**简正频率**（固有频率）。

每个 $\\omega_1^2$ 对应的非零解向量 $a^{(1)}$ 确定一个**简正模式**（振型）。不同模式的振幅比固定，且模式之间关于 $M$ 正交：$a^{(\\alpha)T} M a^{(\\beta)} = 0$（$\\alpha\\neq\\beta$）。

### 5. 简正坐标

由于 $M$ 和 $K$ 都是实对称且正定，可以找到一个线性变换 $\\xi = Q \\eta$，使得变换后的动能和势能同时化为标准二次型（对角化）：

$$
T = \\frac{1}{2} \\sum_{\\alpha=1}^s \\dot{\\eta}_\\alpha^2, \\quad
V = \\frac{1}{2} \\sum_{\\alpha=1}^s \\omega_\\alpha^2 \\eta_\\alpha^2
$$

则拉格朗日函数变为：

$$
L = \\frac{1}{2} \\sum_{\\alpha=1}^s \\left( \\dot{\\eta}_\\alpha^2 - \\omega_\\alpha^2 \\eta_\\alpha^2 \\right)
$$

这表示系统分解为 $s$ 个**独立的谐振子**。坐标 $\\eta_\\alpha$ 称为**简正坐标**，每个简正坐标描述一个简正振动。

### 6. 两个自由度体系的具体解法（考试常用）

对于 $s=2$ 的情况，运动方程为：

$$
\\begin{cases}
M_{11}\\ddot{\\xi}_1 + M_{12}\\ddot{\\xi}_2 + K_{11}\\xi_1 + K_{12}\\xi_2 = 0 \\\\
M_{21}\\ddot{\\xi}_1 + M_{22}\\ddot{\\xi}_2 + K_{21}\\xi_1 + K_{22}\\xi_2 = 0
\\end{cases}
$$

设 $\\xi_1 = A_1 e^{\\mathrm{i}\\omega t}$，$\\xi_2 = A_2 e^{\\mathrm{i}\\omega t}$，代入得：

$$
\\begin{cases}
(K_{11} - \\omega^2 M_{11}) A_1 + (K_{12} - \\omega^2 M_{12}) A_2 = 0 \\\\
(K_{21} - \\omega^2 M_{21}) A_1 + (K_{22} - \\omega^2 M_{22}) A_2 = 0
\\end{cases}
$$

令系数行列式为零得久期方程：

$$
(K_{11} - \\omega^2 M_{11})(K_{22} - \\omega^2 M_{22}) - (K_{12} - \\omega^2 M_{12})^2 = 0
$$

解得 $\\omega_1^2$ 和 $\\omega_2^2$，然后分别代入求振幅比 $A_2/A_1$，得到两个简正模式。

**例：两相同单摆用弹簧耦合**（如图，摆长 $l$，质量 $m$，弹簧劲度系数 $k$，连接点距悬挂点 $a$，小角度近似）。

- 广义坐标：$\\theta_1$，$\\theta_2$。
- 动能：$T = \\frac{1}{2} m l^2 (\\dot{\\theta}_1^2 + \\dot{\\theta}_2^2)$。
- 势能：重力势能 $V_g = \\frac{1}{2} mgl (\\theta_1^2 + \\theta_2^2)$；弹簧势能 $V_s = \\frac{1}{2} k (a\\theta_1 - a\\theta_2)^2 = \\frac{1}{2} k a^2 (\\theta_1 - \\theta_2)^2$。
- 总势能：$V = \\frac{1}{2} mgl (\\theta_1^2 + \\theta_2^2) + \\frac{1}{2} k a^2 (\\theta_1^2 - 2\\theta_1\\theta_2 + \\theta_2^2)$。
- 系数矩阵：
  $$
  M = \\begin{pmatrix} m l^2 & 0 \\\\ 0 & m l^2 \\end{pmatrix}, \\quad
  K = \\begin{pmatrix} mgl + k a^2 & -k a^2 \\\\ -k a^2 & mgl + k a^2 \\end{pmatrix}
  $$
- 设 $\\omega^2$，久期方程：
  $$
  \\begin{vmatrix}
  mgl + k a^2 - \\omega^2 m l^2 & -k a^2 \\\\
  -k a^2 & mgl + k a^2 - \\omega^2 m l^2
  \\end{vmatrix} = 0
  $$
  解得：
  $$
  \\omega_1^2 = \\frac{g}{l}, \\quad
  \\omega_2^2 = \\frac{g}{l} + \\frac{2k a^2}{m l^2}
  $$
- 模式：
  - $\\omega_1$：$A_1 = A_2$，两摆同向摆动，弹簧不变形。
  - $\\omega_2$：$A_1 = -A_2$，两摆反向摆动，弹簧伸缩。

### 7. 多自由度体系的一般理论

对于 $s$ 个自由度，求解步骤：

1. 写出 $T$ 和 $V$ 的二次型矩阵 $M$、$K$。
2. 解广义本征值问题 $K a = \\omega^2 M a$。
3. 得到 $\\omega_\\alpha^2$ 和对应的特征向量 $a^{(\\alpha)}$。
4. 构造简正坐标 $\\eta_\\alpha = a^{(\\alpha)T} M \\xi$（经适当归一化），使系统解耦。

**注意**：如果系统有零本征值（$\\omega=0$），则存在“零模式”，对应刚体运动或不稳定平衡。

### 8. 能量与振动模式

- 系统的总能量等于各简正模式能量之和：$E = \\sum_\\alpha \\frac{1}{2}(\\dot{\\eta}_\\alpha^2 + \\omega_\\alpha^2 \\eta_\\alpha^2)$。
- 初始条件只激发特定模式时，系统会以单一频率振动。
- 一般情况下，运动是各简正模式的叠加。

### 9. 解题要点总结

| 任务              | 操作                                                                                |
| ----------------- | ----------------------------------------------------------------------------------- |
| 写出 $T$、$V$     | 用广义坐标、广义速度表示至二阶                                                      |
| 提取矩阵 $M$、$K$ | $T = \\frac{1}{2} \\dot{q}^T M \\dot{q}$，$V = \\frac{1}{2} q^T K q$                    |
| 求简正频率        | 解 $\\det(K - \\omega^2 M)=0$                                                         |
| 求振型            | 对每个 $\\omega$，解 $(K - \\omega^2 M)a=0$                                           |
| 求简正坐标        | 解广义本征值，归一化后变换                                                          |
| 写出通解          | $\\xi(t) = \\sum_\\alpha c_\\alpha a^{(\\alpha)} \\cos(\\omega_\\alpha t + \\varphi_\\alpha)$ |
`,l={title:"理论力学期中复习笔记",author:"NeoWangKing",date:new Date(1777087744e3),lastMod:new Date(1777087744e3),tags:["物理","理论力学"],category:["物理","理论力学"],summary:"期中复习临时笔记",comments:!0,draft:!1,sticky:0},_={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/00-Medium-Examination.md",rawData:void 0};export{_ as _internal,t as body,n as collection,l as data,a as id,$ as slug};
