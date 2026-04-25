const n="physics/TheoreticalMechanics/03-Lagrange-Equilibrium.md",a="posts",$="physics/theoreticalmechanics/03-lagrange-equilibrium",l=`
## 广义力的概念

在拉格朗日方程的一般形式中，广义力 $Q_\\alpha$ 定义为

$$
\\begin{align}
Q_\\alpha = \\sum_i \\boldsymbol{F}_i \\cdot \\frac{\\partial \\boldsymbol{r}_i}{\\partial q_\\alpha}
\\end{align}
$$

它表示在广义坐标 $q_\\alpha$ 的虚位移 $\\delta q_\\alpha$ 上，所有主动力所做的虚功：

$$
\\begin{align}
\\delta W = \\sum_\\alpha Q_\\alpha \\delta q_\\alpha
\\end{align}
$$

广义力的物理意义是：它是在广义坐标所描述的位形空间中，对应虚位移 $\\delta q_\\alpha$ 的“广义功”系数。若系统为保守体系，则广义力可由势能函数导出：

$$
\\begin{align}
Q_\\alpha = -\\frac{\\partial V}{\\partial q_\\alpha}
\\end{align}
$$

## 拉格朗日方程的平衡条件

对于理想、完整约束的力学体系，拉格朗日方程的一般形式为

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left( \\frac{\\partial T}{\\partial \\dot{q}_\\alpha} \\right) - \\frac{\\partial T}{\\partial q_\\alpha} = Q_\\alpha
\\end{align}
$$

在平衡状态，系统处于静止，所有广义速度和广义加速度均为零。此时动能 $T$ 对速度的偏导为零，且 $T$ 对坐标的偏导通常也与速度无关（在惯性系下 $T$ 是 $\\dot{q}$ 的二次齐次函数，且系数与 $q$ 有关，但平衡时 $\\dot{q}=0$，$\\partial T/\\partial q$ 并不一定为零）。然而从拉格朗日方程出发，平衡条件可通过对虚功原理的推导得到。

实际上，对于保守体系，平衡条件更简单地由虚功原理得到：

$$
\\begin{align}
\\delta W = \\sum_\\alpha Q_\\alpha \\delta q_\\alpha = 0
\\end{align}
$$

由于虚位移 $\\delta q_\\alpha$ 独立，故平衡时各广义力必须为零：

$$
\\begin{align}
Q_\\alpha = 0, \\quad \\alpha = 1,2,\\dots,s
\\end{align}
$$

若主动力为保守力，则平衡条件等价于

$$
\\begin{align}
\\frac{\\partial V}{\\partial q_\\alpha} = 0
\\end{align}
$$

即势能在平衡位置取极值（稳定平衡对应极小值，不稳定平衡对应极大值）。

## 平衡问题的应用

### 求解平衡位置

对于给定的力学体系，平衡位置可通过令广义力为零或势能梯度为零来求解。

**例**：质量为 $m$ 的质点被约束在抛物线 $z = ax^2$ 上，受重力作用，求平衡位置。

解：取广义坐标 $x$，势能 $V = mgz = mg a x^2$。平衡条件 $\\partial V/\\partial x = 2mg a x = 0$，得 $x=0$。此即平衡位置。

### 利用平衡条件求约束力

在拉格朗日方程中，约束力已被消去。若要计算某约束力的大小，可采用“释放约束”的方法：将欲求的约束力视为主动力，同时解除该约束，使体系自由度增加一。在新的体系中，该约束力变为主动力，然后利用平衡条件（或虚功原理）求解。

**步骤**：

1. 确定欲求的约束力对应的约束，并将该约束解除。
2. 将原约束力视为主动力，其方向沿约束所限制的方向。
3. 选择广义坐标（此时自由度为原自由度加1）。
4. 写出新体系的势能（或虚功表达式），利用平衡条件 $\\delta W = 0$，令独立虚位移的系数为零，即可解出约束力。

**例**：如图，轻杆 $AC$、$BC$、$AO$、$BO$ 和 $OC$ 五根轻杆对称组成，$C$ 点受铅直力 $F$，求杆 $AO$ 所受的力。

解：求 $AO$ 杆的力，可将 $AO$ 杆解除，代之以沿杆方向的拉力 $T$（主动力）。然后分析系统的平衡，利用虚功原理即可求出 $T$。

## 广义势能

对于某些非保守力（如带电粒子在电磁场中受到的洛伦兹力），虽不直接由势能导出，但仍可引入一个依赖于速度的广义势能 $U(q,\\dot{q},t)$，使得广义力满足

$$
\\begin{align}
Q_\\alpha = \\frac{\\mathrm{d}}{\\mathrm{d}t}\\left( \\frac{\\partial U}{\\partial \\dot{q}_\\alpha} \\right) - \\frac{\\partial U}{\\partial q_\\alpha}
\\end{align}
$$

此时拉格朗日函数取为 $L = T - U$，方程形式与保守体系相同。这一内容将在后续章节详细讨论。

## 小结

- 广义力是拉格朗日方程中的关键量，反映了主动力在广义坐标中的贡献。
- 平衡条件：广义力为零（或势能梯度为零）。
- 通过释放约束法，可利用平衡条件求解约束力。
- 广义势能的概念使拉格朗日方程能处理某些非保守力。
`,t={title:"拉格朗日方程的平衡问题",author:"NeoWangKing",date:new Date(1774679658e3),lastMod:new Date(1774679658e3),tags:["物理","理论力学","拉格朗日方程","平衡","广义力"],category:["物理","理论力学"],summary:"本文介绍拉格朗日方程在平衡问题中的应用，包括广义力的概念、平衡条件、虚功原理的应用，以及利用平衡条件求解约束力等问题。",comments:!0,draft:!1,sticky:0},i={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/03-Lagrange-Equilibrium.md",rawData:void 0};export{i as _internal,l as body,a as collection,t as data,n as id,$ as slug};
