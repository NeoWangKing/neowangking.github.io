const n="physics/TheoreticalMechanics/13-Theoretical-Mechanics-Midterm-Review.md",a="posts",l="physics/theoreticalmechanics/13-theoretical-mechanics-midterm-review",$=`
## 一、牛顿力学基础

### 牛顿三定律与常见坐标系

- **第一定律**：惯性参考系中物体保持静止或匀速直线运动。
- **第二定律**：$\\boldsymbol{F} = \\mathrm{d}\\boldsymbol{p}/\\mathrm{d}t$，质量恒定则为 $\\boldsymbol{F}=m\\boldsymbol{a}$。
- **第三定律**：$\\boldsymbol{F}_{12} = -\\boldsymbol{F}_{21}$。

在不同坐标系下，加速度分量需要熟悉：

- **平面极坐标**：$a_r = \\ddot{r} - r\\dot{\\theta}^2$，$a_\\theta = r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta}$
- **自然坐标**：$a_t = \\ddot{s}$，$a_n = v^2/\\rho$

### 质点系与守恒定律

- **质心**：$\\boldsymbol{r}_c = \\sum m_i \\boldsymbol{r}_i / M$，质心运动定理：$M\\ddot{\\boldsymbol{r}}_c = \\boldsymbol{F}^{\\text{(ext)}}$
- **动量定理**：$\\mathrm{d}\\boldsymbol{P}/\\mathrm{d}t = \\boldsymbol{F}^{\\text{(ext)}}$
- **角动量定理**：$\\mathrm{d}\\boldsymbol{L}/\\mathrm{d}t = \\boldsymbol{M}^{\\text{(ext)}}$，有心力下角动量守恒
- **动能定理**：$\\mathrm{d}T = \\boldsymbol{F}\\cdot \\mathrm{d}\\boldsymbol{r}$，保守力下机械能守恒

---

## 二、分析力学基础

### 约束与广义坐标

**约束**：对质点系运动的几何或运动学限制。

- **完整约束**：只含坐标（和时间）的等式约束 $f(\\boldsymbol{r}_i,t)=0$，或可积分的微分约束。
- **非完整约束**：含有速度且不可积分。
- **自由度**：完整体系中独立坐标个数 $s = 3n - k$（$n$ 质点数，$k$ 完整约束数）。

**广义坐标** $q_1,\\dots,q_s$：任意一组完全确定系统位形的独立参数。

### 虚位移与虚功

- **虚位移** $\\delta\\boldsymbol{r}$：满足瞬时约束的无限小位移，与时间变化无关。
- **虚功**：$\\delta W = \\boldsymbol{F}\\cdot\\delta\\boldsymbol{r}$。
- **理想约束**：约束反力在任意虚位移上总虚功为零：

  $$
  \\begin{align}
  \\sum_i \\boldsymbol{N}_i \\cdot \\delta\\boldsymbol{r}_i = 0
  \\end{align}
  $$

  光滑曲面、无质量刚性杆、纯滚动、不可伸长绳等均属理想约束。

### 达朗贝尔方程

从牛顿第二定律出发，引入惯性力，在理想约束下得到不含约束力的动力学方程：

$$
\\begin{align}
\\sum_i (\\boldsymbol{F}_i - m_i \\ddot{\\boldsymbol{r}}_i) \\cdot \\delta\\boldsymbol{r}_i = 0
\\end{align}
$$

静力学特例 → **虚功原理**：$\\sum_i \\boldsymbol{F}_i \\cdot \\delta\\boldsymbol{r}_i = 0$。

---

## 三、拉格朗日方程

### 一般形式

对于 **理想、完整体系**，定义广义力

$$
\\begin{align}
Q_\\alpha = \\sum_i \\boldsymbol{F}_i \\cdot \\frac{\\partial \\boldsymbol{r}_i}{\\partial q_\\alpha}
\\end{align}
$$

拉格朗日方程为

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(\\frac{\\partial T}{\\partial \\dot{q}_\\alpha}\\right) - \\frac{\\partial T}{\\partial q_\\alpha} = Q_\\alpha, \\quad \\alpha=1,\\dots,s
\\end{align}
$$

### 保守体系的拉格朗日方程

若主动力为保守力，$\\boldsymbol{F}_i = -\\nabla_i V$，引入拉格朗日函数 $L = T - V$，有

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left(\\frac{\\partial L}{\\partial \\dot{q}_\\alpha}\\right) - \\frac{\\partial L}{\\partial q_\\alpha} = 0
\\end{align}
$$

此形式与坐标选择无关（协变性），且不含约束力。

### 解题步骤

1. 判断约束类型，确定自由度 $s$。
2. 选取广义坐标 $q_\\alpha$。
3. 写出动能 $T(q,\\dot{q},t)$ 和势能 $V(q,t)$，构造 $L = T - V$。
4. 若有非保守力，计算广义力。
5. 代入拉格朗日方程，得到 $s$ 个二阶常微分方程。

---

## 四、平衡问题与广义力

### 平衡条件

由虚功原理，平衡时广义力为零：

$$
\\begin{align}
Q_\\alpha = 0, \\quad \\alpha=1,\\dots,s
\\end{align}
$$

对保守体系等价于 $\\partial V / \\partial q_\\alpha = 0$，即势能取极值。

- **稳定平衡**：势能取极小值，二阶偏导数矩阵正定。
- **不稳定平衡**：势能取极大值或鞍点。

### 利用平衡求约束力（释放约束法）

1. 解除欲求约束力对应的约束。
2. 将约束力视为主动力，在相应虚位移上做功。
3. 平衡条件 $\\delta W = 0$ 求解该力。

---

## 五、对称性与守恒定律

### 运动积分

**运动积分**是坐标、速度和时间的函数，在运动过程中保持常数。

### 广义能量积分

若 $L$ 不显含时间（$\\partial L / \\partial t = 0$），则

$$
\\begin{align}
H = \\sum_\\alpha \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} \\dot{q}_\\alpha - L = \\text{常数}
\\end{align}
$$

- 稳定约束下，动能是广义速度的二次齐次函数，$H = T + V$ 即机械能。
- 否则 $H$ 只是广义能量，不一定是机械能。

### 循环坐标与广义动量守恒

若 $L$ 不显含某坐标 $q_\\alpha$（**循环坐标**），则对应的广义动量守恒：

$$
\\begin{align}
p_\\alpha = \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} = \\text{常数}
\\end{align}
$$

### 诺特定理

连续对称性必然导出守恒量：

- **空间平移对称性** → 动量守恒
- **空间旋转对称性** → 角动量守恒
- **时间平移对称性** → 广义能量守恒

---

## 六、瞬时力问题

### 积分形式的拉格朗日方程

冲击过程中时间极短，坐标可认为不变，速度突变。对拉格朗日方程在 $[t_0, t_0+\\varepsilon]$ 上积分取极限：

$$
\\begin{align}
\\Delta p_\\alpha = \\left[\\frac{\\partial T}{\\partial \\dot{q}_\\alpha}\\right]_{t_0^-}^{t_0^+} = \\hat{Q}_\\alpha
\\end{align}
$$

其中 $\\hat{Q}_\\alpha = \\int Q_\\alpha \\mathrm{d}t$ 为**广义冲量**，可由主动力冲量求得：

$$
\\begin{align}
\\hat{Q}_\\alpha = \\sum_i \\boldsymbol{I}_i \\cdot \\frac{\\partial \\boldsymbol{r}_i}{\\partial q_\\alpha}
\\end{align}
$$

### 碰撞问题

- **恢复系数** $e = \\dfrac{v_2' - v_1'}{v_1 - v_2}$，描述弹性程度。
- 利用积分形式方程和恢复系数可求解碰撞后速度及能量损失。

---

## 七、中心势场与两体问题

### 两体约化

两质点相互作用势 $V(|\\boldsymbol{r}_1 - \\boldsymbol{r}_2|)$ 下，引入质心坐标 $\\boldsymbol{R}$ 和相对坐标 $\\boldsymbol{r}$：

$$
\\begin{align}
L = \\frac{1}{2} M \\dot{\\boldsymbol{R}}^2 + \\frac{1}{2} \\mu \\dot{\\boldsymbol{r}}^2 - V(r)
\\end{align}
$$

其中 $M=m_1+m_2$，约化质量 $\\mu = m_1 m_2/(m_1+m_2)$。

- 质心运动：匀速直线运动。
- 相对运动：质量为 $\\mu$ 的单粒子在中心势场 $V(r)$ 中的运动。

### 中心势场中的守恒量与有效势

角动量守恒：$p_\\theta = \\mu r^2 \\dot{\\theta} \\equiv l$（运动限制在平面内）  
能量守恒：$E = \\frac{1}{2}\\mu \\dot{r}^2 + \\frac{l^2}{2\\mu r^2} + V(r)$

有效势能：

$$
\\begin{align}
V_{\\text{eff}}(r) = \\frac{l^2}{2\\mu r^2} + V(r)
\\end{align}
$$

径向运动化为一维问题：$E = \\frac{1}{2}\\mu \\dot{r}^2 + V_{\\text{eff}}(r)$。

### 轨道方程与比耐公式

利用 $u = 1/r$ 将径向方程转变为轨道方程：

$$
\\begin{align}
\\frac{\\mathrm{d}^2 u}{\\mathrm{d}\\theta^2} + u = -\\frac{\\mu}{l^2 u^2} F\\!\\left(\\frac{1}{u}\\right)
\\end{align}
$$

平方反比引力 $F = -k/r^2$ 的解为圆锥曲线：

$$
\\begin{align}
\\frac{1}{r} = \\frac{\\mu k}{l^2}\\big[1 + e\\cos(\\theta - \\theta_0)\\big]
\\end{align}
$$

偏心率 $e = \\sqrt{1 + \\dfrac{2E l^2}{\\mu k^2}}$：

- $E<0$，$0\\le e<1$：椭圆（$e=0$ 为圆）
- $E=0$，$e=1$：抛物线
- $E>0$，$e>1$：双曲线

圆轨道稳定条件：有效势能二阶导数 $V_{\\text{eff}}''(r_0) > 0$。平方反比力场中圆轨道稳定。

---

## 八、弹性碰撞与散射截面

### 质心系与实验室系

质心系总动量为零，碰撞前后两粒子速度大小不变，仅方向偏转 $\\theta_{\\text{cm}}$。

实验室系与质心系散射角关系（靶初始静止）：

$$
\\begin{align}
\\tan\\theta_{\\text{lab}} = \\frac{\\sin\\theta_{\\text{cm}}}{\\cos\\theta_{\\text{cm}} + m_1/m_2}
\\end{align}
$$

### 散射截面

微分散射截面：

$$
\\begin{align}
\\frac{\\mathrm{d}\\sigma}{\\mathrm{d}\\Omega} = \\left|\\frac{b}{\\sin\\theta}\\frac{\\mathrm{d}b}{\\mathrm{d}\\theta}\\right|
\\end{align}
$$

### 卢瑟福散射

库仑排斥势 $V = \\alpha/r$ 下，散射角 $\\theta$ 与碰撞参数 $b$ 的关系：

$$
\\begin{align}
b = \\frac{\\alpha}{2E}\\cot\\frac{\\theta}{2}
\\end{align}
$$

微分散射截面：

$$
\\begin{align}
\\frac{\\mathrm{d}\\sigma}{\\mathrm{d}\\Omega} = \\left(\\frac{\\alpha}{4E}\\right)^2 \\frac{1}{\\sin^4(\\theta/2)}
\\end{align}
$$

---

## 九、多自由度体系的微振动

### 线性化

保守体系在稳定平衡位置附近做小振动，可将动能和势能展开至二阶：

$$
\\begin{align}
T = \\frac{1}{2}\\sum_{i,j} m_{ij} \\dot{q}_i \\dot{q}_j, \\quad
V = \\frac{1}{2}\\sum_{i,j} k_{ij} q_i q_j
\\end{align}
$$

其中 $m_{ij}, k_{ij}$ 为常数矩阵，$\\boldsymbol{M}$ 正定，$\\boldsymbol{K}$ 正定（稳定平衡）。

### 运动方程与简正模

代入拉格朗日方程得线性方程组：

$$
\\begin{align}
\\sum_j \\big(m_{ij} \\ddot{q}_j + k_{ij} q_j\\big) = 0
\\end{align}
$$

设简谐解 $q_j = A_j e^{\\mathrm{i}\\omega t}$，得广义本征值问题：

$$
\\begin{align}
(\\boldsymbol{K} - \\omega^2 \\boldsymbol{M})\\boldsymbol{A} = 0
\\end{align}
$$

久期方程 $\\det(\\boldsymbol{K} - \\omega^2 \\boldsymbol{M}) = 0$ 给出 $s$ 个简正频率 $\\omega_\\alpha$，对应 $s$ 个简正模式。

### 简正坐标

存在线性变换将 $\\boldsymbol{M}$ 化为单位矩阵、$\\boldsymbol{K}$ 对角化，使系统解耦为独立谐振子：

$$
\\begin{align}
L = \\frac{1}{2}\\sum_{\\alpha=1}^s (\\dot{Q}_\\alpha^2 - \\omega_\\alpha^2 Q_\\alpha^2)
\\end{align}
$$

各简正模间无能量交换，任意运动可表示为简正模式的叠加。

---

## 十、复习要点总结

|      知识点      |                                                               核心内容                                                                |                                      主要公式                                      |
| :--------------: | :-----------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------: |
|     牛顿力学     |                                                      三定律、坐标系、质点系守恒                                                       |                          $\\boldsymbol{F}=m\\boldsymbol{a}$                          |
|  约束与广义坐标  |                                                          完整/非完整、自由度                                                          |                                $s = 3n - k$（完整）                                |
|   达朗贝尔方程   |                                                      虚位移、理想约束、无约束力                                                       | $\\sum(\\boldsymbol{F}_i - m\\ddot{\\boldsymbol{r}}_i)\\cdot\\delta\\boldsymbol{r}_i = 0$ |
|   拉格朗日方程   | $L=T-V$，保守系 $\\frac{\\mathrm{d}}{\\mathrm{d}t}\\frac{\\partial L}{\\partial \\dot{q}_\\alpha} - \\frac{\\partial L}{\\partial q_\\alpha} = 0$ |                                   二阶微分方程组                                   |
| 平衡与约束力求解 |                                                        广义力为零、释放约束法                                                         |                         $\\partial V/\\partial q_\\alpha = 0$                         |
| 对称性与守恒定律 |                                              时间平移→能量，循环坐标→广义动量，诺特定理                                               |                  $p_\\alpha = \\partial L/\\partial \\dot{q}_\\alpha$                   |
|    瞬时力问题    |                                                     积分形式方程、广义冲量、碰撞                                                      |                         $\\Delta p_\\alpha = \\hat{Q}_\\alpha$                         |
|  中心势场与轨道  |                                              两体约化、有效势、比耐公式、平方反比力轨道                                               |                   $V_{\\text{eff}} = \\frac{l^2}{2\\mu r^2} + V(r)$                   |
|     散射截面     |                                                       微分截面、卢瑟福散射公式                                                        |      $\\frac{\\mathrm{d}\\sigma}{\\mathrm{d}\\Omega} \\propto \\sin^{-4}(\\theta/2)$       |
|  多自由度微振动  |                                               线性化、久期方程、简正坐标、解耦为谐振子                                                |                $\\det(\\boldsymbol{K} - \\omega^2 \\boldsymbol{M}) = 0$                |

> **提示**：重点掌握拉格朗日方程的建立与求解、对称性分析、两体约化和有效势方法，以及简正模的基本概念。解题时注意完整约束下的自由度选取和动能势能的二阶展开。
`,t={title:"理论力学期中复习",author:"NeoWangKing",date:new Date(17770752e5),lastMod:new Date(1777122e6),tags:["物理","理论力学","期中复习","分析力学","拉格朗日方程","对称性","中心势场","微振动"],category:["物理","理论力学"],summary:"本文是理论力学课程的期中复习笔记，系统梳理从牛顿力学到分析力学的核心内容，包括约束与广义坐标、拉格朗日方程、平衡与稳定性、对称性与守恒定律、瞬时力、两体问题、轨道与散射以及多自由度微振动。",comments:!0,draft:!1,sticky:0},o={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/13-Theoretical-Mechanics-Midterm-Review.md",rawData:void 0};export{o as _internal,$ as body,a as collection,t as data,n as id,l as slug};
