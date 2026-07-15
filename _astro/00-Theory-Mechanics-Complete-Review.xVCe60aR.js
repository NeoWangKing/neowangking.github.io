const a="physics/TheoreticalMechanics/00-Theory-Mechanics-Complete-Review.md",n="posts",t="physics/theoreticalmechanics/00-theory-mechanics-complete-review",l=`
> 这篇笔记我是一边复习一边写的，所以有些章节我没重点复习的就没有喵～

<!-- ## [第一章：牛顿力学](/posts/physics/theoreticalmechanics/01-newtonian-mechanics) -->
<!---->
<!-- ### 牛顿三定律 -->
<!---->
<!-- **第一定律（惯性定律）**：定义惯性参考系. -->
<!---->
<!-- **第二定律**： -->
<!---->
<!-- $$ -->
<!-- \\begin{align} -->
<!-- \\boldsymbol{F} = \\frac{\\mathrm{d}\\boldsymbol{p}}{\\mathrm{d}t} = \\frac{\\mathrm{d}(m\\boldsymbol{v})}{\\mathrm{d}t} -->
<!-- \\end{align} -->
<!-- $$ -->
<!---->
<!-- 质量恒定时为 $\\boldsymbol{F} = m\\boldsymbol{a}$. -->
<!---->
<!-- **第三定律（相互作用力定律）**：$\\boldsymbol{F}_{12} = -\\boldsymbol{F}_{21}$. -->
<!---->
<!-- ### 常见坐标系下的物理量 -->
<!---->
<!-- **平面极坐标**： -->
<!---->
<!-- $$ -->
<!-- \\begin{gather} -->
<!-- v_r = \\dot{r} \\quad -->
<!-- v_\\theta = r\\dot{\\theta} \\\\ -->
<!-- a_r = \\ddot{r} - r\\dot{\\theta}^2 \\quad -->
<!-- a_\\theta = r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta} -->
<!-- \\end{gather} -->
<!-- $$ -->
<!---->
<!-- **自然坐标（内禀坐标）**： -->
<!---->
<!-- $$ -->
<!-- \\begin{align} -->
<!-- a_t = \\dot{v} = \\ddot{s}, \\quad a_n = \\frac{v^2}{\\rho} -->
<!-- \\end{align} -->
<!-- $$ -->
<!---->
<!-- ### 质点系三大定理与守恒定律 -->
<!---->
<!-- |     定理     |                                 表达式                                 |         守恒条件          | -->
<!-- | :----------: | :--------------------------------------------------------------------: | :-----------------------: | -->
<!-- | 质心运动定理 |       $M\\ddot{\\boldsymbol{r}}_c = \\boldsymbol{F}^{(\\text{ext})}$       |   合外力为零 → 动量守恒   | -->
<!-- |  角动量定理  | $\\mathrm{d}\\boldsymbol{L}/\\mathrm{d}t = \\boldsymbol{M}^{(\\text{ext})}$ | 合外力矩为零 → 角动量守恒 | -->
<!-- |   动能定理   |    $\\mathrm{d}T = \\sum \\boldsymbol{F}\\cdot\\mathrm{d}\\boldsymbol{r}$    |    保守力 → 机械能守恒    | -->
<!---->
<!-- 三大守恒定律分别对应时间平移、空间平移、空间旋转对称性. -->
<!---->
<!-- --- -->
<!---->

## [第二章：分析力学基础——拉格朗日方程](/posts/physics/theoreticalmechanics/02-lagrange-equations)

### 约束与自由度

- **完整约束**：$f(\\boldsymbol{r}_1,\\dots,\\boldsymbol{r}_n,t)=0$，自由度 $s = 3n - k$
- **非完整约束**：含不可积分的微分约束
- **理想约束**：约束反力虚功为零，$\\sum_i \\boldsymbol{N}_i \\cdot \\delta\\boldsymbol{r}_i = 0$

### 达朗贝尔方程

考虑理想约束情况，从牛顿第二定律出发，引入惯性力，消去约束力：

$$
\\begin{align}
\\sum_i (\\boldsymbol{F}_i - m_i \\ddot{\\boldsymbol{r}}_i) \\cdot \\delta \\boldsymbol{r}_i = 0
\\end{align}
$$

这就是**达朗贝尔方程**，是理想约束体系的普遍方程.

静力学特例为**虚功原理**：

$$
\\begin{align}
\\sum_i \\boldsymbol{F}_i \\cdot \\delta\\boldsymbol{r}_i = 0
\\end{align}
$$

### 拉格朗日方程

**广义力**：

$$
\\begin{align}
Q_\\alpha = \\sum_i \\boldsymbol{F}_i \\cdot \\frac{\\partial \\boldsymbol{r}_i}{\\partial q_\\alpha}
\\end{align}
$$

**一般形式**：

$$
\\begin{align}
\\boxed{
   \\frac{\\mathrm{d}}{\\mathrm{d}t} \\left( \\frac{\\partial T}{\\partial \\dot{q}_\\alpha} \\right) - \\frac{\\partial T}{\\partial q_\\alpha} = Q_\\alpha
}
\\end{align}
$$

**保守体系**（$L = T - V$）：

$$
\\begin{align}
\\boxed{
   \\frac{\\mathrm{d}}{\\mathrm{d}t} \\left( \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} \\right) - \\frac{\\partial L}{\\partial q_\\alpha} = 0
}
\\end{align}
$$

其中 $L = T - V = L(q,\\dot{q},t)$ 称为体系的**拉格朗日函数**

**拉格朗日函数的不确定性**：$L$ 与 $L' = L + \\mathrm{d}f/\\mathrm{d}t$ 给出相同运动方程.

> 拉格朗日函数的不确定性的证明如下：
>
> 我们从**充分性**和**必要性**两方面来证明：
>
> **充分性证明**（若 $\\mathcal{L} - \\mathcal{L}' = \\dot{f}$，则它们给出相同运动方程）
>
> 设 $\\mathcal{L} - \\mathcal{L}' = \\dfrac{\\mathrm{d}f}{\\mathrm{d}t} = \\sum_{i=1}^s \\dfrac{\\partial f}{\\partial q_i} \\dot{q}_i + \\dfrac{\\partial f}{\\partial t}$，其中 $f(q_1,\\dots,q_s,t)$ 是任意可微函数。
>
> 将 $\\mathcal{L} = \\mathcal{L}' + \\dot{f}$ 代入拉格朗日方程：
>
> $$
> \\frac{\\mathrm{d}}{\\mathrm{d}t}\\left( \\frac{\\partial \\mathcal{L}}{\\partial \\dot{q}_i} \\right) - \\frac{\\partial \\mathcal{L}}{\\partial q_i}
> = \\frac{\\mathrm{d}}{\\mathrm{d}t}\\left( \\frac{\\partial \\mathcal{L}'}{\\partial \\dot{q}_i} + \\frac{\\partial f}{\\partial q_i} \\right) - \\left( \\frac{\\partial \\mathcal{L}'}{\\partial q_i} + \\frac{\\partial}{\\partial q_i}\\sum_j \\frac{\\partial f}{\\partial q_j} \\dot{q}_j + \\frac{\\partial^2 f}{\\partial q_i \\partial t} \\right)
> $$
>
> 由于
>
> $$
> \\frac{\\mathrm{d}}{\\mathrm{d}t}\\left( \\frac{\\partial f}{\\partial q_i} \\right) = \\sum_j \\frac{\\partial^2 f}{\\partial q_j \\partial q_i} \\dot{q}_j + \\frac{\\partial^2 f}{\\partial t \\partial q_i},
> $$
>
> 代入后，所有涉及 $f$ 的附加项相互抵消。因此：
>
> $$
> \\frac{\\mathrm{d}}{\\mathrm{d}t}\\left( \\frac{\\partial \\mathcal{L}}{\\partial \\dot{q}_i} \\right) - \\frac{\\partial \\mathcal{L}}{\\partial q_i}
> = \\frac{\\mathrm{d}}{\\mathrm{d}t}\\left( \\frac{\\partial \\mathcal{L}'}{\\partial \\dot{q}_i} \\right) - \\frac{\\partial \\mathcal{L}'}{\\partial q_i}.
> $$
>
> 所以 $\\mathcal{L}$ 和 $\\mathcal{L}'$ 给出完全相同的拉格朗日方程，即描述同一个力学体系。
>
> ---
>
> **必要性证明**（若两个拉格朗日量给出相同运动方程，则它们必相差一个全导数）
>
> 如果 $\\mathcal{L}$ 和 $\\mathcal{L}'$ 给出相同的运动方程，则它们的变分之差为零：
>
> $$
> \\delta \\int_{t_1}^{t_2} (\\mathcal{L} - \\mathcal{L}') \\,\\mathrm{d}t = 0
> $$
>
> 因为两个作用量泛函的极值条件相同。
>
> 由变分法基本引理，若 $\\delta \\int_{t_1}^{t_2} F(q,\\dot{q},t) \\,\\mathrm{d}t = 0$ 对所有端点固定的变分路径都成立，则 $F$ 必须满足欧拉-拉格朗日方程的零解，即 $F$ 本身可以写成某个函数的全导数：
>
> $$
> \\mathcal{L} - \\mathcal{L}' = \\frac{\\mathrm{d}f}{\\mathrm{d}t}.
> $$
>
> 更直接地，将 $\\mathcal{L} - \\mathcal{L}'$ 记为 $\\Delta L$。如果 $\\Delta L$ 不满足拉格朗日方程，则其变分不会为零，与前提矛盾。因此 $\\Delta L$ 的欧拉-拉格朗日表达式为零，这意味着 $\\Delta L$ 是一个**全导数项**。
>
> 证毕

### 平衡条件

$$
\\begin{align}
Q_\\alpha = 0 \\quad \\text{或} \\quad \\frac{\\partial V}{\\partial q_\\alpha} = 0
\\end{align}
$$

稳定平衡：势能取极小值（二阶偏导数矩阵正定）.

**释放约束法求约束力**：解除约束 → 约束力视为主动力 → 虚功原理求解.

---

<!-- ## [第三章：两体问题与中心势场](/posts/physics/theoreticalmechanics/03-two-body-problem-and-central-force) -->
<!---->
<!-- ### 两体约化为单体 -->
<!---->
<!-- 引入质心坐标 $\\boldsymbol{R}$ 和相对坐标 $\\boldsymbol{r}$： -->
<!---->
<!-- $$ -->
<!-- \\begin{align} -->
<!-- \\boldsymbol{R} = \\frac{m_1\\boldsymbol{r}_1 + m_2\\boldsymbol{r}_2}{m_1 + m_2}, \\quad \\boldsymbol{r} = \\boldsymbol{r}_1 - \\boldsymbol{r}_2 -->
<!-- \\end{align} -->
<!-- $$ -->
<!---->
<!-- **约化质量**： -->
<!---->
<!-- $$ -->
<!-- \\begin{align} -->
<!-- \\mu = \\frac{m_1 m_2}{m_1 + m_2} -->
<!-- \\end{align} -->
<!-- $$ -->
<!---->
<!-- 拉格朗日函数分解为： -->
<!---->
<!-- $$ -->
<!-- \\begin{align} -->
<!-- L = \\frac{1}{2} M \\dot{\\boldsymbol{R}}^2 + \\frac{1}{2} \\mu \\dot{\\boldsymbol{r}}^2 - V(r) -->
<!-- \\end{align} -->
<!-- $$ -->
<!---->
<!-- 质心做匀速直线运动，相对运动等价于质量为 $\\mu$ 的粒子在中心势场 $V(r)$ 中的运动. -->
<!---->
<!-- ### 中心势场中的运动 -->
<!---->
<!-- 角动量守恒：$l = \\mu r^2 \\dot{\\theta} = \\text{常数}$，运动限制在平面内. -->
<!---->
<!-- **有效势能**： -->
<!---->
<!-- $$ -->
<!-- \\begin{align} -->
<!-- V_{\\text{eff}}(r) = \\frac{l^2}{2\\mu r^2} + V(r) -->
<!-- \\end{align} -->
<!-- $$ -->
<!---->
<!-- 径向运动化为 $E = \\frac{1}{2}\\mu \\dot{r}^2 + V_{\\text{eff}}(r)$. -->
<!---->
<!-- ### 比耐公式与平方反比力轨道 -->
<!---->
<!-- **比耐公式**： -->
<!---->
<!-- $$ -->
<!-- \\begin{align} -->
<!-- \\frac{\\mathrm{d}^2 u}{\\mathrm{d}\\theta^2} + u = -\\frac{\\mu}{l^2 u^2} F\\left(\\frac{1}{u}\\right), \\quad u = \\frac{1}{r} -->
<!-- \\end{align} -->
<!-- $$ -->
<!---->
<!-- 平方反比引力 $F(r) = -k/r^2$ 的轨道为圆锥曲线： -->
<!---->
<!-- $$ -->
<!-- \\begin{align} -->
<!-- \\frac{1}{r} = \\frac{\\mu k}{l^2} [1 + e \\cos(\\theta - \\theta_0)], \\quad e = \\sqrt{1 + \\frac{2E l^2}{\\mu k^2}} -->
<!-- \\end{align} -->
<!-- $$ -->
<!---->
<!-- | 能量  |    偏心率     |      轨道类型      | -->
<!-- | :---: | :-----------: | :----------------: | -->
<!-- | $E<0$ | $0 \\le e < 1$ | 椭圆（$e=0$ 为圆） | -->
<!-- | $E=0$ |     $e=1$     |       抛物线       | -->
<!-- | $E>0$ |     $e>1$     |       双曲线       | -->
<!---->
<!-- 圆轨道稳定条件：$V''_{\\text{eff}}(r_0) > 0$. -->
<!---->
<!-- ### 卢瑟福散射 -->
<!---->
<!-- 排斥库仑势 $V(r) = \\alpha/r$ 的微分散射截面： -->
<!---->
<!-- $$ -->
<!-- \\begin{align} -->
<!-- \\frac{\\mathrm{d}\\sigma}{\\mathrm{d}\\Omega} = \\left( \\frac{\\alpha}{4E} \\right)^2 \\frac{1}{\\sin^4(\\theta/2)} -->
<!-- \\end{align} -->
<!-- $$ -->
<!---->
<!-- --- -->

## [第四章：刚体](/posts/physics/theoreticalmechanics/04-rigid-body)

### 刚体运动学

**运动分类**：平动（质点的运动）、定轴转动、平面平行运动、定点转动（欧拉角）、一般运动.

**自由度**：自由刚体6个（3平动+3转动），定点转动3个（欧拉角），平面平行运动3个.

**欧拉角**：

- 进动角 $\\varphi$ ：绕固定轴 $z_0$ 的转动，描述刚体对称轴在空间中的方位角
- 章动角 $\\theta$ ：绕节线（$x'$ 轴、$ON$）的转动，描述刚体 $z$ 轴与固定轴之间的夹角（$0 \\le \\theta \\le \\pi$）
- 自转角 $\\psi$ ：绕刚体自身 $z$ 轴的转动，描述刚体绕其对称轴的自转

**欧拉运动学方程**（定点转动）：

随动坐标系 $Oxyz$ ：

$$
\\begin{align}
\\begin{cases}
\\begin{aligned}
\\omega_x &= \\dot{\\theta} \\cos\\psi + \\dot{\\varphi} \\sin\\theta \\sin\\psi \\\\
\\omega_y &= -\\dot{\\theta} \\sin\\psi + \\dot{\\varphi} \\sin\\theta \\cos\\psi \\\\
\\omega_z &= \\dot{\\psi} + \\dot{\\varphi} \\cos\\theta
\\end{aligned}
\\end{cases}
\\end{align}
$$

世界坐标系 $Ox_0y_0z_0$ ：

$$
\\begin{align}
\\begin{cases}
\\begin{aligned}
\\omega_{0,x} &= \\dot{\\psi} \\sin\\theta \\sin\\varphi + \\dot{\\theta} \\cos\\varphi \\\\
\\omega_{0,y} &= -\\dot{\\psi} \\sin\\theta \\cos\\varphi + \\dot{\\theta} \\sin\\varphi \\\\
\\omega_{0,z} &= \\dot{\\psi} \\cos\\theta + \\dot{\\varphi}
\\end{aligned}
\\end{cases}
\\end{align}
$$

**基点法求速度与加速度**：

$$
\\begin{align}
\\begin{cases}
\\begin{aligned}
\\boldsymbol{v}_P &= \\boldsymbol{v}_C + \\boldsymbol{\\omega} \\times \\boldsymbol{r}_{CP} \\\\
\\boldsymbol{a}_P &= \\boldsymbol{a}_C + \\frac{\\mathrm{d} \\boldsymbol{\\omega}}{\\mathrm{d} t} \\times \\boldsymbol{r}_{CP} + \\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\boldsymbol{r}_{CP})
\\end{aligned}
\\end{cases}
\\end{align}
$$

角速度 $\\boldsymbol{\\omega}$ 与基点选择无关.

**动力学方程**：

质心运动定律（3个）：

$$
\\begin{align}
m \\frac{\\mathrm{d} v_c}{\\mathrm{d} t} = \\sum_i \\boldsymbol{F}_i^{(e)}
\\end{align}
$$

角动量定理（3个）：

$$
\\begin{align}
\\frac{\\mathrm{d} \\boldsymbol{L}}{\\mathrm{d} t} = \\sum_i \\boldsymbol{r}_i \\times \\boldsymbol{F}_i^{(e)}
\\end{align}
$$

动能定理：

$$
\\begin{align}
\\mathrm{d} T = \\sum_i (\\boldsymbol{F}_i^{(e)} + \\boldsymbol{F}_i^{(i)}) \\cdot \\mathrm{d} \\boldsymbol{r}_i
\\end{align}
$$

从这7个方程中选取6个即可建立**刚体运动的动力学方程**.

**瞬时转心**：平面平行运动中速度为零的点，纯滚动时接触点为瞬心.

### 转动惯量

$$
\\begin{align}
I_{ij} = \\int (r^2 \\delta_{ij} - x_i x_j) \\,\\mathrm{d}m
\\end{align}
$$

有 $I_{kl} = I_{lk}$ ，$\\boldsymbol{I}$ 称为**惯量矩阵**或**惯量张量**. 非对角元素成为**惯量积**.

**惯量主轴**：使惯量积为零的坐标轴. 对称轴必为主轴.

**平行轴定理** ：$I_P = I_C + md^2$.

**回转半径**：令 $I = m\\rho^2$ ，其中 $\\rho$ 称为对该转动轴的**回转半径**. 主回转半径 $\\rho_C$ 是最小的回转半径.

|               物体（质量为 $m$ ）                |                      坐标轴（惯量主轴）                      | 主转动惯量                                                                |
| :----------------------------------------------: | :----------------------------------------------------------: | :------------------------------------------------------------------------ |
|         长方形板（边长为 $2a$ 和 $2b$ ）         | $Ox$ 和 $Oy$ 依次平行于 $2a$ $\\\\$ 和 $2b$ ， $Oz$ 垂直于板面 | $I_{11} = mb^2/3 \\\\ I_{22} = ma^2/3 \\\\ I_{33} = m(a^2+b^2)/3$             |
|          实心长方体（$2a$，$2b$，$2c$）          |      $Ox$、$Oy$、$Oz$依次平行 $\\\\$ 于 $2a$、$2b$、$2c$       | $I_{11} = m(b^2+c^2)/3 \\\\ I_{22} = m(c^2+a^2)/3 \\\\ I_{33} = m(a^2+b^2)/3$ |
|                圆板（半径为 $a$）                |         $Ox$ 和 $Oy$ 在板面上，$\\\\$ $Oz$ 垂直于版面          | $I_{11}=I_{22}=ma^2/4 \\\\ I_{33}=ma^2/2$                                   |
|          椭圆板（长短轴为 $2a$、$2b$）           |      $Ox$、$oy$依次沿半长、 $\\\\$ 短轴，$Oz$ 垂直于板面       | $I_{11}=mb^2/4 \\\\ I_{22}=ma^2/4 \\\\ I_{33}=m(a^2+b^2)/4$                   |
|      实心圆柱体（半径为 $a$，$\\\\$ 长 $l$）       |          $Ox$、$Oy$垂直于对称轴，$\\\\$ $Oz$ 为其轴线          | $I_{11}=I_{22}=m(3a^2+l^2)/12 \\\\ I_{33}=ma^2/2$                           |
| 实心椭圆柱体（椭圆半轴为 $\\\\$ $a$、$b$，长 $l$） |        $Ox$、$Oy$为椭圆半长、$\\\\$ 短轴，$Oz$ 为其轴线        | $I_{11}=m(3b^2+l^2)/12 \\\\ I_{22}=m(3a^2+l^2)/12 \\\\ I_{33}=m(a^2+b^2)/4$   |
|        球壳（外半径为 $a$，内半径为 $b$）        |                    任意三条互相垂直的轴线                    | $\\displaystyle I=\\frac{2}{5}m\\frac{a^5-b^5}{a^3-b^3}$                     |
|               薄球壳（半径为 $a$）               |                    任意三条互相垂直的轴线                    | $I=2ma^2/3$                                                               |
|              实心球体（半径为 $a$）              |                    任意三条互相垂直的轴线                    | $I=2ma^2/5$                                                               |
|         实椭球体（半轴为 $a$、$b$、$c$）         |                           三条半轴                           | $I_{11}=m(b^2+c^2)/5 \\\\ I_{22}=m(c^2+a^2)/5 \\\\ I_{33}=m(a^2+b^2)/5$       |
|          圆锥（高 $h$ ，底面半径 $a$）           |          $Ox$、$Oy$轴在底面上，$\\\\$ $Oz$ 轴为其轴线          | $I_{11}=I_{22}=m(3a^2+2h^2)/20 \\\\ I_{33}=3ma^2/10$                        |

**角动量与转动动能**：

一般系：

$$
\\begin{align}
\\begin{bmatrix}
L_x \\\\ L_y \\\\ L_z
\\end{bmatrix} =
\\begin{bmatrix}
 I_{11} & -I_{12} & -I_{13} \\\\
-I_{21} &  I_{22} & -I_{23} \\\\
-I_{31} & -I_{32} &  I_{33}
\\end{bmatrix}
\\begin{bmatrix}
\\omega_x \\\\ \\omega_y \\\\ \\omega_z
\\end{bmatrix}, \\quad T = \\frac{1}{2} \\boldsymbol{L}\\cdot\\boldsymbol{\\omega}
\\end{align}
$$

惯量主轴系下：

$$
\\begin{align}
\\boldsymbol{L} = I_1\\omega_x\\boldsymbol{i} + I_2\\omega_y\\boldsymbol{j} + I_3\\omega_z\\boldsymbol{k}, \\quad T = \\frac{1}{2} (I_1 \\omega_x^2 + I_2 \\omega_y^2 + I_3 \\omega_z^2)
\\end{align}
$$

**欧拉动力学方程**:

随动坐标系中的角动量定理：

$$
\\begin{align}
\\frac{\\mathrm{d}\\boldsymbol{L}}{\\mathrm{d}t} - \\boldsymbol{L} \\times \\boldsymbol{\\omega} = \\boldsymbol{M}
\\end{align}
$$

分量形式（欧拉方程）：

$$
\\begin{align}
\\begin{cases}
\\begin{aligned}
I_1 \\dot{\\omega}_x - (I_2 - I_3) \\omega_y \\omega_z &= M_x \\\\
I_2 \\dot{\\omega}_y - (I_3 - I_1) \\omega_z \\omega_x &= M_y \\\\
I_3 \\dot{\\omega}_z - (I_1 - I_2) \\omega_x \\omega_y &= M_z
\\end{aligned}
\\end{cases}
\\end{align}
$$

**惯量椭球**:

刚体绕 转轴 $e$ 做定轴转动时，有

$$
\\begin{align}
I_e = I_{11}\\alpha^2 + I_{22}\\beta^2 + I_{33}\\gamma^2 + 2I_{12}\\alpha\\beta + 2I_{13}\\alpha\\gamma + 2I_{23}\\beta\\gamma
\\end{align}
$$

在转动轴 $e$ 上取一线段 $ON=\\frac{1}{\\sqrt{I_e}}$ ，则 $N$ 点的坐标为

$$
\\begin{align}
x=\\frac{\\alpha}{\\sqrt{I_e}},\\quad y=\\frac{\\beta}{\\sqrt{I_e}},\\quad z=\\frac{\\gamma}{\\sqrt{I_e}}
\\end{align}
$$

代入即可得到：

$$
\\begin{align}
I_{11}x^2 + I_{22}y^2 + I_{33}z^2 + 2I_{12}xy + 2I_{13}xz + 2I_{23}yz = 1
\\end{align}
$$

这个椭球称为**惯量椭球**，它的对称轴就是惯量主轴. 任意轴线 $e$ 与其交点 $N$ ，那么 $ON$ 即为绕这个轴的转动惯量 $I_e$ 的平方根的倒数.

### 典型陀螺运动

**欧拉陀螺**（$\\boldsymbol{M}=0$，即自由转动）：$L^2$ 和 $T$ 守恒.

**拉格朗日陀螺**（对称陀螺 $I_1=I_2$ 在重力场中）：

$$
\\begin{align}
\\boxed{
L = \\frac{1}{2} I_1 (\\dot{\\theta}^2 + \\dot{\\varphi}^2 \\sin^2\\theta) + \\frac{1}{2} I_3 (\\dot{\\psi} + \\dot{\\varphi} \\cos\\theta)^2 - mgl \\cos\\theta
}
\\end{align}
$$

$\\varphi$ 和 $\\psi$ 为循环坐标，因此得到两个守恒量

$$
\\begin{gather}
P_\\varphi = \\frac{\\partial L}{\\partial \\dot{\\varphi}} = L_{e_3} = (I_1 \\sin^2\\theta + I_3 \\cos^2\\theta)\\dot{\\varphi} + I_3 \\cos\\theta\\dot{\\psi} = \\text{常数} \\\\
P_\\psi = \\frac{\\partial L}{\\partial \\dot{\\psi}} = L_k = I_3(\\dot{\\psi} + \\dot{\\varphi}\\cos\\theta) = \\text{常数}
\\end{gather}
$$

同时还有能量守恒：

$$
\\begin{align}
E = \\boxed{\\frac{I_1}{2} (\\dot{\\theta}^2 + \\dot{\\varphi}^2\\sin^2\\theta) + \\frac{L_{k'}^2}{2I_3} + mgl\\cos\\theta} = \\text{常数}
\\end{align}
$$

这就是拉格朗日陀螺的三个动力学方程.

令

$$
\\begin{gather}
V_{\\text{eff}}(\\theta) = \\frac{(L_{e_3} - L_k \\cos\\theta)^2}{2I_1 \\sin^2\\theta} - mgl(1- \\cos\\theta) \\\\
E' = E - \\frac{L_k^2}{2I_3} - mgl
\\end{gather}
$$

则可以化成：

$$
\\begin{align}
\\frac{I_1}{2}\\dot{\\theta}^2 + V_{\\text{eff}}(\\theta) = E'
\\end{align}
$$

而 $\\theta$ 的极值由条件 $E'=V_{\\text{eff}}(\\theta)$ 决定.

**快速陀螺近似**：$\\dot{\\varphi} \\approx mgl / (I_3 \\dot{\\psi})$ （进动角速度和初角速度 $\\omega$ 近似成反比）.

---

## [第五章：非惯性参考系](/posts/physics/theoreticalmechanics/05-non-inertial-reference-frames)

### 平动加速参考系

平移惯性力：$\\boldsymbol{F}_{\\text{惯}} = -m\\boldsymbol{a}_0$.

### 转动参考系

矢量导数关系：

$$
\\begin{align}
\\left( \\frac{\\mathrm{d}\\boldsymbol{A}}{\\mathrm{d}t} \\right)_S = \\left( \\frac{\\mathrm{d}\\boldsymbol{A}}{\\mathrm{d}t} \\right)_{S'} + \\boldsymbol{\\omega} \\times \\boldsymbol{A}
\\end{align}
$$

加速度合成：

$$
\\begin{align}
\\boldsymbol{a}_S = \\boldsymbol{a}_{S'} + 2\\boldsymbol{\\omega} \\times \\boldsymbol{v}_{S'} + \\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\boldsymbol{r}) + \\dot{\\boldsymbol{\\omega}} \\times \\boldsymbol{r}
\\end{align}
$$

**惯性力**：

|    名称    |                                                 表达式                                                  | 特点                   |
| :--------: | :-----------------------------------------------------------------------------------------------------: | :--------------------- |
| 科里奥利力 |            $\\boldsymbol{F}_{\\text{科}} = -2m\\boldsymbol{\\omega} \\times \\boldsymbol{v}_{S'}$             | 与速度垂直，不改变速率 |
|   离心力   | $\\boldsymbol{F}_{\\text{离}} = -m\\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\boldsymbol{r})$ | 方向垂直于转轴向外     |
|   欧拉力   |            $\\boldsymbol{F}_{\\text{欧}} = -m\\dot{\\boldsymbol{\\omega}} \\times \\boldsymbol{r}$             | 角速度变化时出现       |

**经典应用**：傅科摆 $\\Omega = \\omega_{\\text{earth}}\\sin\\lambda$，落体偏东，地转风.

---

## [第六章：多自由度体系的微振动](/posts/physics/theoreticalmechanics/06-small-vibrations)

### 线性化

平衡位置附近，动能和势能展开至二阶：

$$
\\begin{align}
T &= \\frac{1}{2} \\sum_{i,j} m_{ij} \\dot{q}_i \\dot{q}_j \\\\
V &= \\frac{1}{2} \\sum_{i,j} k_{ij} q_i q_j
\\end{align}
$$

### 运动方程与久期方程

$$
\\begin{align}
\\sum_j (m_{ij} \\ddot{q}_j + k_{ij} q_j) = 0
\\end{align}
$$

设 $q_j = A_j e^{\\mathrm{i}\\omega t}$，得广义本征值问题：

$$
\\begin{align}
\\sum_j (k_{ij} - \\omega^2 m_{ij}) A_j = 0
\\end{align}
$$

**久期方程**：

$$
\\begin{align}
\\det(\\boldsymbol{K} - \\omega^2 \\boldsymbol{M}) = 0
\\end{align}
$$

### 简正坐标

存在线性变换使系统解耦为独立谐振子：

$$
\\begin{align}
L = \\frac{1}{2} \\sum_{\\alpha=1}^s (\\dot{Q}_\\alpha^2 - \\omega_\\alpha^2 Q_\\alpha^2)
\\end{align}
$$

各简正模式独立，无能量交换.

### 一维晶格纵振动

色散关系：

$$
\\begin{align}
\\omega^2 = \\frac{4k}{m} \\sin^2\\left(\\frac{qa}{2}\\right)
\\end{align}
$$

长波极限 $qa \\ll 1$：$\\omega \\approx v q$，$v = a\\sqrt{k/m}$.

---

## [第七章：阻尼运动](/posts/physics/theoreticalmechanics/07-damped-motion)

### 恒力下的阻尼直线运动

$$
\\begin{align}
m\\dot{v} = mg - \\gamma v, \\quad v(t) = \\frac{mg}{\\gamma}(1 - e^{-\\gamma t/m}), \\quad v_T = \\frac{mg}{\\gamma}
\\end{align}
$$

### 线性阻尼自由振动

$$
\\begin{align}
\\ddot{x} + 2\\beta \\dot{x} + \\omega_0^2 x = 0, \\quad \\beta = \\frac{\\gamma}{2m}, \\quad \\omega_0 = \\sqrt{\\frac{k}{m}}
\\end{align}
$$

|   类型   |        条件        | 解的形式                                                                                |
| :------: | :----------------: | :-------------------------------------------------------------------------------------- |
|  欠阻尼  | $\\beta < \\omega_0$ | $x = Ae^{-\\beta t}\\cos(\\omega_d t + \\varphi)$，$\\omega_d = \\sqrt{\\omega_0^2 - \\beta^2}$ |
| 临界阻尼 | $\\beta = \\omega_0$ | $x = (A + Bt)e^{-\\beta t}$                                                              |
|  过阻尼  | $\\beta > \\omega_0$ | $x = Ae^{\\lambda_1 t} + Be^{\\lambda_2 t}$（$\\lambda_1,\\lambda_2<0$）                    |

### 受迫振动与共振

$$
\\begin{align}
A(\\omega) = \\frac{F_0/m}{\\sqrt{(\\omega_0^2 - \\omega^2)^2 + 4\\beta^2 \\omega^2}}
\\end{align}
$$

共振频率 $\\omega_{\\text{res}} = \\sqrt{\\omega_0^2 - 2\\beta^2}$.

品质因子 $Q = \\omega_0/(2\\beta)$.

---

## [第八章：哈密顿理论](/posts/physics/theoreticalmechanics/08-hamiltonian-theory)

### 变分法基础

泛函 $J[y] = \\int_{x_1}^{x_2} f(x, y, y') \\,\\mathrm{d}x$ 取极值的必要条件为**欧拉-拉格朗日方程**：

$$
\\begin{align}
\\frac{\\partial f}{\\partial y} - \\frac{\\mathrm{d}}{\\mathrm{d}x} \\frac{\\partial f}{\\partial y'} = 0
\\end{align}
$$

> 证明：
> 对泛函取变分：
>
> $$
> \\begin{aligned}
> \\delta J[y(x)] &= \\delta \\int_{x_1}^{x_2} f(y, y', x) \\, \\mathrm{d}x = \\int_{x_1}^{x_2} \\delta f(y, y', x) \\, \\mathrm{d}x \\\\
>                &= \\int_{x_1}^{x_2} \\left(\\frac{\\partial f}{\\partial y}\\delta y + \\frac{\\partial f}{\\partial y}\\delta y'\\right) \\, \\mathrm{d}x \\\\
>                &= \\int_{x_1}^{x_2} \\left[\\frac{\\partial f}{\\partial y}\\delta y + \\frac{\\mathrm{d}}{\\mathrm{d}x}\\left(\\frac{\\partial f}{\\partial y'}\\delta y\\right) - \\frac{\\mathrm{d}}{\\mathrm{d}x}\\left(\\frac{\\partial f}{\\partial y'}\\right)\\delta y\\right] \\, \\mathrm{d}x \\\\
>                &= \\left.\\frac{\\partial f}{\\partial y'}\\delta y\\right|_{x_1}^{x_2}- \\int_{x_1}^{x_2} \\left(\\frac{\\mathrm{d}}{\\mathrm{d}x}\\frac{\\partial f}{\\partial y'} - \\frac{\\partial f}{\\partial y}\\right) \\delta y \\, \\mathrm{d}x \\\\
> \\end{aligned}
> $$
>
> 这里第一项为零，为了使得变分 $\\delta J[y(x)]$ 为零，需要第二项括号内取零，于是得证.

若 $f$ 不显含 $x$，存在**初积分**：

$$
\\begin{align}
f - y' \\frac{\\partial f}{\\partial y'} = \\text{常数}
\\end{align}
$$

> 证明：
> 有
>
> $$
> \\begin{aligned}
> &\\frac{\\mathrm{d}}{\\mathrm{d}x}\\left(f - y'\\frac{\\partial f}{\\partial y'}\\right) \\\\
> = &\\left(\\frac{\\partial f}{\\partial y}y' + \\frac{\\partial f}{\\partial y'}y''\\right) - \\left(\\frac{\\partial f}{\\partial y'}y'' + y' \\frac{\\mathrm{d}}{\\mathrm{d}x}\\frac{\\partial f}{\\partial y'}\\right) \\\\
> = &-y'\\left(\\frac{\\mathrm{d}}{\\mathrm{d}x}\\frac{\\partial f}{\\partial y'} - \\frac{\\partial f}{\\partial y}\\right) = 0
> \\end{aligned}
> $$
>
> 得证.

变分算符 $\\delta$ 与微分算符 $\\mathrm{d}$ 可交换：$\\delta(\\mathrm{d}y) = \\mathrm{d}(\\delta y)$，且 $\\delta x = 0$.

### 哈密顿正则方程

**广义动量**：$p_\\alpha = \\partial L / \\partial \\dot{q}_\\alpha$

**哈密顿函数（体系的广义能量）**：

$$
\\begin{align}
H = \\sum_{\\alpha=1}^s p_\\alpha \\dot{q}_\\alpha - L
\\end{align}
$$

> **哈密顿函数**有一条重要的性质：
>
> $$
> \\begin{align}
> \\frac{\\mathrm{d} H(q,p,t)}{\\mathrm{d}t} = - \\frac{\\partial L(q,\\dot{q},t)}{\\partial t}
> \\end{align}
> $$
>
> 证明如下：
>
> 对哈密顿函数求时间的全导数：
>
> $$
> \\begin{aligned}
> \\frac{\\mathrm{d} H}{\\mathrm{d} t} &= \\sum_\\alpha \\left( \\dot{p}_\\alpha\\dot{q}_\\alpha + p_\\alpha\\ddot{q}_\\alpha \\right) - \\frac{\\mathrm{d} L}{\\mathrm{d} t} \\\\
> &= \\sum_\\alpha \\left( \\dot{p}_\\alpha\\dot{q}_\\alpha + p_\\alpha\\ddot{q}_\\alpha \\right) - \\left[ \\sum_\\alpha \\left( \\frac{\\partial L}{\\partial q_\\alpha}\\dot{q}_\\alpha + \\frac{\\partial L}{\\partial \\dot{q}_\\alpha}\\ddot{q}_\\alpha \\right) + \\frac{\\partial L}{\\partial t} \\right] \\\\
> &= \\sum_\\alpha \\left( \\dot{p}_\\alpha\\dot{q}_\\alpha + p_\\alpha\\ddot{q}_\\alpha \\right) - \\left[ \\sum_\\alpha \\left( \\dot{p}_\\alpha\\dot{q}_\\alpha + p_\\alpha\\ddot{q}_\\alpha \\right) + \\frac{\\partial L}{\\partial t} \\right]
> \\end{aligned}
> $$
>
> 这里用到了广义动量的定义 $\\displaystyle p_\\alpha = \\frac{\\partial L}{\\partial \\dot{q}_\\alpha}$ 以及拉格朗日方程 $\\displaystyle \\dot{p}_\\alpha = \\frac{\\mathrm{d}}{\\mathrm{d} t}\\frac{\\partial L}{\\partial \\dot{q}_\\alpha} = \\frac{\\partial L}{\\partial q_\\alpha}$ ，于是有
>
> $$
> \\begin{aligned}
> \\Rightarrow \\frac{\\mathrm{d} H}{\\mathrm{d} t} &= - \\frac{\\partial L}{\\partial t}
> \\end{aligned}
> $$
>
> 得证.

**哈密顿正则方程**：

$$
\\begin{align}
\\begin{cases}
\\begin{aligned}
\\dot{q}_\\alpha &= \\frac{\\partial H}{\\partial p_\\alpha}, \\\\
\\dot{p}_\\alpha &= -\\frac{\\partial H}{\\partial q_\\alpha},
\\end{aligned}
\\end{cases}
\\qquad \\alpha = 1,2,\\cdots,s.
\\end{align}
$$

**相空间**：$(q_\\alpha, p_\\alpha)$ 张成的 $2s$ 维空间. 若 $H$ 不显含时间，相轨迹不相交，这就是**能量守恒定律**.

**刘维尔定理**：相空间体积在演化中保持不变.

### 哈密顿原理

通过泛函分析可以得出

$$
\\begin{align}
S = \\int_{t_1}^{t_2} L(q,\\dot{q},t) \\,\\mathrm{d}t, \\quad \\delta S = 0
\\end{align}
$$

$S$ 称为**哈密顿作用量**，由 $\\delta S = 0$ 可导出拉格朗日方程或正则方程.

> 哈密顿正则方程的导出：
>
> 将哈密顿量的定义 $H = \\sum_\\alpha p_\\alpha \\dot{q}_\\alpha - L$ 代入 $\\delta S = 0 $ 即可得到
>
> $$
> \\begin{aligned}
> \\delta S &= \\int_{t_1}^{t_2} \\delta \\left[ \\sum_\\alpha p_\\alpha \\dot{q}_\\alpha - H \\right] \\; \\mathrm{d} t \\\\
>          &= \\int_{t_1}^{t_2} \\left[ \\sum_\\alpha \\left( p_\\alpha \\delta \\dot{q}_\\alpha + \\dot{q}_\\alpha \\delta p_\\alpha \\right) - \\sum_\\alpha \\left( \\frac{\\partial H}{\\partial p_\\alpha}\\delta p_\\alpha + \\frac{\\partial H}{\\partial q_\\alpha}\\delta q_\\alpha \\right) \\right] \\; \\mathrm{d} t \\\\
>          &= \\int_{t_1}^{t_2} \\left[ \\sum_\\alpha \\left( \\dot{q}_\\alpha - \\frac{\\partial H}{\\partial p_\\alpha} \\right) \\delta p_\\alpha - \\sum_\\alpha \\left( \\dot{p}_\\alpha + \\frac{\\partial H}{\\partial q_\\alpha} \\right) \\delta q_\\alpha \\right] \\; \\mathrm{d} t = 0
> \\end{aligned}
> $$
>
> 于是得到
>
> $$
> \\begin{aligned}
> \\dot{q}_\\alpha = \\frac{\\partial H}{\\partial p_\\alpha}, \\quad \\dot{p}_\\alpha = -\\frac{\\partial H}{\\partial q_\\alpha} , \\quad \\alpha = 1,2,\\cdots,s
> \\end{aligned}
> $$

哈密顿原理比较的是真实路径和其无限邻近的各种可能路径的作用量的值.

> 对于非保守体系，有
>
> $$
> \\begin{align}
> \\delta S &= \\int_{t_1}^{t_2} [\\delta L(q_\\alpha, \\dot{q_\\alpha}, t) + \\sum_\\alpha Q_\\alpha \\delta q_\\alpha]\\mathrm{d} t = 0 \\\\
>          &= \\int_{t_1}^{t_2} \\left[ \\sum_\\alpha \\left( \\dot{q}_\\alpha - \\frac{\\partial H}{\\partial p_\\alpha} \\right) \\delta p_\\alpha - \\sum_\\alpha \\left( \\dot{p}_\\alpha + \\frac{\\partial H}{\\partial q_\\alpha} - Q_\\alpha \\right) \\delta q_\\alpha \\right] \\; \\mathrm{d} t = 0
> \\end{align}
> $$
>
> 其中的 $Q_\\alpha$ 为非保守力，对应的求出非保守系的哈密顿正则方程为：
>
> $$
> \\begin{aligned}
> \\dot{q}_\\alpha = \\frac{\\partial H}{\\partial p_\\alpha}, \\quad \\dot{p}_\\alpha = -\\frac{\\partial H}{\\partial q_\\alpha} + Q_\\alpha , \\quad \\alpha = 1,2,\\cdots,s
> \\end{aligned}
> $$

### 正则变换

**正则变换**：使得变换后新的哈密顿函数 $H^*$ 仍然满足正则方程

$$
\\begin{align}
Q_\\alpha = \\frac{\\partial H^*}{\\partial P_\\alpha}, \\quad P_\\alpha = -\\frac{\\partial H^*}{\\partial Q_\\alpha}, \\quad \\alpha = 1,2,\\cdots,s.
\\end{align}
$$

的变换.

**四类母函数**：

|    母函数    | 自变量  | 变换公式                                                       |
| :----------: | :-----: | :------------------------------------------------------------- |
| $F_1(q,Q,t)$ | $(q,Q)$ | $p = \\partial F_1/\\partial q$，$P = -\\partial F_1/\\partial Q$  |
| $F_2(q,P,t)$ | $(q,P)$ | $p = \\partial F_2/\\partial q$，$Q = \\partial F_2/\\partial P$   |
| $F_3(p,Q,t)$ | $(p,Q)$ | $q = -\\partial F_3/\\partial p$，$P = -\\partial F_3/\\partial Q$ |
| $F_4(p,P,t)$ | $(p,P)$ | $q = -\\partial F_4/\\partial p$，$Q = \\partial F_4/\\partial P$  |

> 四种母函数之间互相区分的关键就是所**选取的独立变量不同**. 对于变换公式，有以下规律可帮助记忆：
>
> - 若旧变量为 $q$，则偏导前取正号（$p=\\partial F_1/\\partial q$，$p=\\partial F_2/\\partial q$）；
> - 若旧变量为 $p$，则偏导前取负号（$q=-\\partial F_3/\\partial p$，$q=-\\partial F_4/\\partial p$）；
> - 若新变量为 $Q$，则偏导前取负号（$P=-\\partial F_1/\\partial Q$，$P=-\\partial F_3/\\partial Q$）；
> - 若新变量为 $P$，则偏导前取正号（$Q=\\partial F_2/\\partial P$，$Q=\\partial F_4/\\partial P$）。

新旧哈密顿量之间的变换关系为：

$$
H^* = H + \\frac{\\partial F_i}{\\partial t}, \\quad i=1,2,3,4.
$$

> 这里可以看出，在哈密顿方程中，广义坐标和广义动量只是名称上的不同，在物理意义上已经没有任何差别，因此常把它们称为**正则共轭变量**

**用泊松括号判别正则变换**：

$$
\\begin{align}
[Q_\\alpha, Q_\\beta]_{q,p} = 0, \\quad [P_\\alpha, P_\\beta]_{q,p} = 0, \\quad [Q_\\alpha, P_\\beta]_{q,p} = \\delta_{\\alpha\\beta}
\\end{align}
$$

### 泊松括号

**定义**：

$$
\\begin{align}
[f, g] = \\sum_{\\alpha=1}^s \\left( \\frac{\\partial f}{\\partial p_\\alpha} \\frac{\\partial g}{\\partial q_\\alpha} - \\frac{\\partial f}{\\partial q_\\alpha} \\frac{\\partial g}{\\partial p_\\alpha} \\right)
\\end{align}
$$

**力学量的时间演化**：

$$
\\begin{align}
\\frac{\\mathrm{d}f}{\\mathrm{d}t} = [H, f] + \\frac{\\partial f}{\\partial t}
\\end{align}
$$

**运动积分判据**：$[H, f] = 0 \\iff f$ 是运动积分（不显含时间时）.

**基本性质**：

1. $[f,g] = -[g,f]$.
2. $[f,c] = 0 \\; (c \\text{为常量})$.
3. $[f_1 + f_2,g] = [f_1,g] + [f_2,g]$.
4. $[f_1 f_2,g] = f_1 [f_2,g] + f_2 [f_1,g]$.
5. $\\displaystyle \\frac{\\partial}{\\partial t}[f,g] = [\\frac{\\partial f}{\\partial t},g] + [f, \\frac{\\partial g}{\\partial t}]$.
6. $\\displaystyle [f,q_\\alpha] = \\frac{\\partial f}{\\partial p_\\alpha}; \\quad [f, p_\\alpha] = -\\frac{\\partial f}{\\partial q_\\alpha}$.
7. $[p_\\alpha,p_\\beta] = 0, \\quad [q_\\alpha,q_\\beta] = 0, \\quad [p_\\alpha,q_\\beta]=\\delta_{\\alpha\\beta}$.
8. 雅可比恒等式： $[f,[g,h]] + [g,[h,f]] + [h,[f,g]] = 0$.
9. 正则变换下保持不变： $[f,g]_{p,q} = [f,g]_{P,Q}$.

**泊松定理**：若 $f$ 和 $g$ 均为运动积分，则 $[f, g]$ 也是运动积分.

### 哈密顿-雅可比方程

**哈密顿主函数** $S(q, t)$ （对应的就是第二类母函数的 $F(q, P, t)$ ）：

$$
\\begin{align}
H\\left(q_1, \\dots, q_s, \\frac{\\partial S}{\\partial q_1}, \\dots, \\frac{\\partial S}{\\partial q_s}, t\\right) + \\frac{\\partial S}{\\partial t} = 0
\\end{align}
$$

> 这种解正则方程的方法只是将解正则方程的困难转移到了解哈密顿-雅可比方程上了，但毕竟指出了另一条途径.

$S$ 还可以写成

$$
\\begin{gather}
\\frac{\\mathrm{d} S}{\\mathrm{d} t} = \\sum_\\alpha \\frac{\\partial S}{\\partial q_\\alpha} \\dot{q_\\alpha} + \\frac{\\partial S}{\\partial t} \\\\
S = \\int L \\mathrm{d} t
\\end{gather}
$$

即哈密顿主函数 $S$ 就是积分限不确定的哈密顿作用量，因此也被称为**哈密顿作用函数**.

若 $H$ 不显含时间，设 $S = W(q, P) - Et + A$，$W$ 为**哈密顿特征函数**：

$$
\\begin{align}
H\\left(q, \\frac{\\partial W}{\\partial q}\\right) = E
\\end{align}
$$

**由 $S$ 求运动**：

1. 轨道方程：

$$
\\frac{\\partial W}{\\partial \\eta_\\alpha} = \\xi_\\alpha = \\text{常数}, \\quad \\alpha = 2,3,\\cdots,s
$$

这 $s - 1$ 个曲面方程的交线就是粒子运动的轨道.

2. 运动方程：

$$
\\frac{\\partial W}{\\partial E} = t - t_0 = f_1 (q, E, \\eta)
$$

3. 动量：$p_\\alpha = \\partial W / \\partial q_\\alpha$

**作用量-角变量**：$J = \\oint p \\,\\mathrm{d}q$（绝热不变量），$\\dot{w} = \\nu = \\partial H / \\partial J$.

---

## [第九章：哈密顿理论的应用](/posts/physics/theoreticalmechanics/09-hamiltonian-applications)

### 连续体系的拉格朗日方程

**拉格朗日密度** $\\mathcal{L}(\\eta, \\partial_\\mu \\eta)$：

$$
\\begin{align}
L = \\int \\mathcal{L} \\,\\mathrm{d}^3 x
\\end{align}
$$

**连续体系的拉格朗日方程**：

$$
\\begin{align}
\\frac{\\partial \\mathcal{L}}{\\partial \\eta_a} - \\partial_\\mu \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\eta_a)} = 0
\\end{align}
$$

**弹性棒纵振动**：$\\mathcal{L} = \\frac{1}{2}\\rho \\dot{u}^2 - \\frac{1}{2}Y (u')^2$，波动方程 $\\ddot{u} = v^2 u''$，$v = \\sqrt{Y/\\rho}$.

### 从哈-雅方程到薛定谔方程

薛定谔变换 $\\psi = e^{\\mathrm{i}S/\\hbar}$ 将哈-雅方程转化为薛定谔方程：

$$
\\begin{align}
\\left( -\\frac{\\hbar^2}{2m} \\nabla^2 + V \\right) \\psi = \\mathrm{i}\\hbar \\frac{\\partial \\psi}{\\partial t}
\\end{align}
$$

**WKB 近似**（$\\hbar \\to 0$）：$\\psi(x) \\approx \\frac{1}{\\sqrt{p(x)}} \\exp\\left( \\pm \\frac{\\mathrm{i}}{\\hbar} \\int p(x) \\,\\mathrm{d}x \\right)$.

---

<!-- ## [第十章：流体（非重点）](/posts/physics/theoreticalmechanics/10-fluid-mechanics) -->
<!---->
<!-- ### 两种描述方法 -->
<!---->
<!-- - **拉格朗日描述**：追踪流体元 -->
<!-- - **欧拉描述**：观察空间固定点 -->
<!---->
<!-- **物质导数**： -->
<!---->
<!-- $$ -->
<!-- \\begin{align} -->
<!-- \\frac{\\mathrm{d}}{\\mathrm{d}t} = \\frac{\\partial}{\\partial t} + \\boldsymbol{v} \\cdot \\nabla -->
<!-- \\end{align} -->
<!-- $$ -->
<!---->
<!-- ### 连续性方程（质量守恒） -->
<!---->
<!-- $$ -->
<!-- \\begin{align} -->
<!-- \\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot (\\rho \\boldsymbol{v}) = 0 -->
<!-- \\end{align} -->
<!-- $$ -->
<!---->
<!-- 不可压缩流体：$\\nabla \\cdot \\boldsymbol{v} = 0$. -->
<!---->
<!-- ### 欧拉方程（动量守恒） -->
<!---->
<!-- 理想流体： -->
<!---->
<!-- $$ -->
<!-- \\begin{align} -->
<!-- \\rho \\left( \\frac{\\partial \\boldsymbol{v}}{\\partial t} + \\boldsymbol{v} \\cdot \\nabla \\boldsymbol{v} \\right) = -\\nabla p + \\rho \\boldsymbol{f} -->
<!-- \\end{align} -->
<!-- $$ -->
<!---->
<!-- ### 伯努利方程（能量守恒） -->
<!---->
<!-- 沿流线： -->
<!---->
<!-- $$ -->
<!-- \\begin{align} -->
<!-- \\frac{1}{2} v^2 + \\Phi + \\frac{p}{\\rho} = \\text{常数} -->
<!-- \\end{align} -->
<!-- $$ -->
<!---->
<!-- 适用条件：定常、无黏、不可压、沿同一条流线. -->
<!---->
<!-- ### 涡量与环量 -->
<!---->
<!-- **涡量**：$\\boldsymbol{\\omega} = \\nabla \\times \\boldsymbol{v}$ -->
<!---->
<!-- **环量**：$\\Gamma = \\oint_C \\boldsymbol{v} \\cdot \\mathrm{d}\\boldsymbol{l}$ -->
<!---->
<!-- **开尔文环量定理**：理想流体中环量守恒，$\\mathrm{d}\\Gamma/\\mathrm{d}t = 0$. -->
<!---->
<!-- **亥姆霍兹涡量定理**：涡线随流体运动，涡管强度守恒，无旋流动保持无旋. -->
<!---->
<!-- --- -->
<!---->
<!-- ## 各章节核心公式速查表 -->
<!---->
<!-- |     章节     |                                                        核心公式                                                        | 说明               | -->
<!-- | :----------: | :--------------------------------------------------------------------------------------------------------------------: | :----------------- | -->
<!-- |   牛顿力学   |                            $\\boldsymbol{F}=m\\boldsymbol{a}$，$a_r=\\ddot{r}-r\\dot{\\theta}^2$                            | 极坐标加速度是关键 | -->
<!-- | 拉格朗日方程 |         $\\frac{\\mathrm{d}}{\\mathrm{d}t}\\frac{\\partial L}{\\partial \\dot{q}} - \\frac{\\partial L}{\\partial q}=0$          | 保守体系，$L=T-V$  | -->
<!-- |   两体问题   |                              $\\mu=m_1m_2/(m_1+m_2)$，$V_{\\text{eff}}=l^2/(2\\mu r^2)+V(r)$                              | 约化质量+有效势能  | -->
<!-- |     刚体     |                            欧拉运动学方程，$I_{ij}=\\int(r^2\\delta_{ij}-x_ix_j)\\mathrm{d}m$                             | 欧拉角+惯量张量    | -->
<!-- |   非惯性系   |                      $\\boldsymbol{F}_{\\text{科}}=-2m\\boldsymbol{\\omega}\\times\\boldsymbol{v}_{S'}$                      | 科里奥利力是核心   | -->
<!-- |    微振动    |                                    $\\det(\\boldsymbol{K}-\\omega^2\\boldsymbol{M})=0$                                     | 久期方程求简正频率 | -->
<!-- |   阻尼运动   |                          $A(\\omega)=(F_0/m)/\\sqrt{(\\omega_0^2-\\omega^2)^2+4\\beta^2\\omega^2}$                           | 受迫振动振幅       | -->
<!-- |  哈密顿理论  |                           $\\dot{q}=\\partial H/\\partial p$，$\\dot{p}=-\\partial H/\\partial q$                            | 正则方程           | -->
<!-- |   泊松括号   |        $[f,g]=\\sum(\\partial f/\\partial q \\partial g/\\partial p - \\partial f/\\partial p \\partial g/\\partial q)$         | 运动积分判据       | -->
<!-- |  哈-雅方程   |                                 $H(q,\\partial S/\\partial q,t)+\\partial S/\\partial t=0$                                 | 求解的最一般方法   | -->
<!-- |    连续体    | $\\frac{\\partial \\mathcal{L}}{\\partial \\eta} - \\partial_\\mu \\frac{\\partial \\mathcal{L}}{\\partial(\\partial_\\mu \\eta)}=0$ | 拉格朗日密度       | -->
<!-- |     流体     |               $\\partial_t\\rho+\\nabla\\cdot(\\rho\\boldsymbol{v})=0$，$\\frac12 v^2+\\Phi+p/\\rho=\\text{常数}$                | 连续性方程+伯努利  | -->
<!---->
<!-- --- -->
<!---->
<!-- ## 复习要点提示 -->
<!---->
<!-- 1. **拉格朗日方程**：会由 $L$ 写出运动方程是基本功，注意循环坐标的识别. -->
<!-- 2. **刚体**：欧拉运动学方程的几何图像要清晰，惯量主轴的判别要熟练. -->
<!-- 3. **微振动**：久期方程的求解流程要熟练（写出 $M$、$K$ → 求 $\\det$ → 解 $\\omega^2$ → 求本征矢量）. -->
<!-- 4. **哈密顿理论**：正则变换四类母函数的符号规则是易错点，建议用 $F_2$ 作为默认选择. -->
<!-- 5. **哈-雅方程**：理解“$H'=0$ 的理想变换”这一核心思想，分离变量法是主要求解手段. -->
`,$={title:"理论力学总复习",author:"NeoWangKing",date:new Date(17823456e5),lastMod:new Date(1782794597e3),tags:["物理","理论力学","复习","拉格朗日力学","哈密顿力学","刚体"],category:["物理","理论力学"],summary:"本文是理论力学课程的完整复习笔记，整合了全部十章内容：牛顿力学、拉格朗日方程、两体问题与中心势场、刚体、非惯性参考系、多自由度微振动、阻尼运动、哈密顿理论、哈密顿理论的应用以及流体. 按知识模块系统梳理，包含核心公式、推导思路和关键物理图像.",comments:!0,draft:!1,sticky:0,chapter:0},i={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/00-Theory-Mechanics-Complete-Review.md",rawData:void 0};export{i as _internal,l as body,n as collection,$ as data,a as id,t as slug};
