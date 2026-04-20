const n="physics/TheoreticalMechanics/6-Lagrange-Equilibrium.md",a="posts",l="physics/theoreticalmechanics/6-lagrange-equilibrium",i=`
## 广义力

### 广义力的定义

在拉格朗日方程的一般形式中，广义力 $Q_\\alpha$ 定义为

$$
\\begin{align}
Q_\\alpha = \\sum_i \\boldsymbol{F}_i \\cdot \\frac{\\partial \\boldsymbol{r}_i}{\\partial q_\\alpha}
\\end{align}
$$

广义力的物理意义：它是在广义坐标所描述的位形空间中，对应虚位移 $\\delta q_\\alpha$ 的广义功系数。主动力所做的虚功可表示为

$$
\\begin{align}
\\delta W = \\sum_\\alpha Q_\\alpha \\delta q_\\alpha
\\end{align}
$$

### 广义力的计算步骤

1. 选择适当的广义坐标 $q_\\alpha$
2. 用广义坐标描述各质点的位置 $\\boldsymbol{r}_i(q_1,\\dots,q_s)$
3. 计算偏导数 $\\partial \\boldsymbol{r}_i / \\partial q_\\alpha$
4. 代入公式计算 $Q_\\alpha$

**例**：质量为 $m_1$ 和 $m_2$ 的两质点由轻绳连接，跨过定滑轮，求系统的广义力。

解：取广义坐标为 $m_1$ 下移的距离 $h$。系统的势能为

$$
\\begin{align}
V = -m_1 g h - m_2 g (l - h)
\\end{align}
$$

由于主动力均为保守力，广义力为

$$
\\begin{align}
Q = -\\frac{\\partial V}{\\partial h} = (m_1 - m_2)g
\\end{align}
$$

## 平衡条件

### 虚功原理

对于理想约束的力学体系，在平衡状态，主动力在任意虚位移上所做的虚功之和为零：

$$
\\begin{align}
\\delta W = \\sum_i \\boldsymbol{F}_i \\cdot \\delta \\boldsymbol{r}_i = 0
\\end{align}
$$

用广义坐标表示，虚功原理为

$$
\\begin{align}
\\sum_{\\alpha=1}^s Q_\\alpha \\delta q_\\alpha = 0
\\end{align}
$$

由于虚位移 $\\delta q_\\alpha$ 是独立的，因此平衡时各广义力必须为零：

$$
\\begin{align}
Q_\\alpha = 0, \\quad \\alpha = 1, 2, \\dots, s
\\end{align}
$$

### 保守体系的平衡条件

若所有主动力均为保守力，则 $Q_\\alpha = -\\partial V / \\partial q_\\alpha$，平衡条件变为

$$
\\begin{align}
\\frac{\\partial V}{\\partial q_\\alpha} = 0, \\quad \\alpha = 1, 2, \\dots, s
\\end{align}
$$

即势能在平衡位置取极值：

- 稳定平衡对应势能极小值
- 不稳定平衡对应势能极大值
- 随遇平衡对应势能常数

## 利用平衡条件求约束力

拉格朗日方程中不出现约束力，因此无法直接求解约束力。但可采用“释放约束法”：

1. **解除约束**：将欲求的约束所对应的约束解除
2. **代之以主动力**：将原约束力视为主动力，方向沿约束所限制的方向
3. **求解平衡**：在新的体系中，利用虚功原理或平衡条件求出约束力

**例**：如图所示，五根轻杆对称组成，$C$ 点承受铅直力 $F$，求杆 $AO$ 所受的作用力。

解：将杆 $AO$ 解除，代之以沿杆方向的拉力 $T$（主动力）。然后分析系统的平衡，利用虚功原理即可求出 $T$。

## 平衡的稳定性

对于保守体系，平衡的稳定性由势能的二阶导数判断。在平衡位置 $q_\\alpha = q_{\\alpha 0}$ 处：

- 若 $\\dfrac{\\partial^2 V}{\\partial q_\\alpha \\partial q_\\beta}$ 正定 → 稳定平衡
- 若 $\\dfrac{\\partial^2 V}{\\partial q_\\alpha \\partial q_\\beta}$ 负定 → 不稳定平衡
- 若 $\\dfrac{\\partial^2 V}{\\partial q_\\alpha \\partial q_\\beta}$ 不定 → 鞍点（不稳定）

## 广义势能

对于某些非保守力（如带电粒子在电磁场中受到的洛伦兹力），可引入依赖于速度的广义势能 $U(q,\\dot{q},t)$，使得

$$
\\begin{align}
Q_\\alpha = \\frac{\\mathrm{d}}{\\mathrm{d}t}\\left( \\frac{\\partial U}{\\partial \\dot{q}_\\alpha} \\right) - \\frac{\\partial U}{\\partial q_\\alpha}
\\end{align}
$$

此时拉格朗日函数取为 $L = T - U$，方程形式与保守体系相同。

## 小结

- 广义力是拉格朗日方程中的关键量，反映了主动力在广义坐标中的贡献
- 平衡条件：广义力为零（或势能梯度为零）
- 通过释放约束法，可利用平衡条件求解约束力
- 平衡的稳定性由势能的二阶导数判断
- 广义势能的概念使拉格朗日方程能处理某些非保守力
`,$={title:"拉格朗日方程的平衡问题",author:"NeoWangKing",date:new Date(1775478512e3),lastMod:new Date(1775478512e3),tags:["物理","理论力学","拉格朗日方程","平衡","广义力","虚功原理"],category:["物理","理论力学"],summary:"本文介绍拉格朗日方程在平衡问题中的应用，包括广义力的概念、平衡条件、虚功原理的应用，以及利用平衡条件求解约束力等实际问题。",comments:!0,draft:!1,sticky:0},t={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/6-Lagrange-Equilibrium.md",rawData:void 0};export{t as _internal,i as body,a as collection,$ as data,n as id,l as slug};
