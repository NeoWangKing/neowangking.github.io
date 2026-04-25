const n="physics/TheoreticalMechanics/08-Instantaneous-Forces.md",a="posts",t="physics/theoreticalmechanics/08-instantaneous-forces",$=`
## 瞬时力问题的特点

瞬时力是指作用时间极短、力值极大的外力（如碰撞、爆炸、突然施加的约束等）。在冲击过程中，位移来不及变化，但速度发生突变。通常用**冲量**来描述这种作用：

$$
\\begin{align}
\\boldsymbol{I} = \\int \\boldsymbol{F} \\, \\mathrm{d}t
\\end{align}
$$

## 拉格朗日方程的积分形式

对于理想、完整的力学体系，拉格朗日方程的一般形式为

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t}\\left( \\frac{\\partial T}{\\partial \\dot{q}_\\alpha} \\right) - \\frac{\\partial T}{\\partial q_\\alpha} = Q_\\alpha
\\end{align}
$$

在瞬时力作用过程中，时间极短，$q_\\alpha$ 的变化可忽略（位置不变），但 $\\dot{q}_\\alpha$ 发生跃变。对方程两边在冲击时间区间 $[t_0, t_0+\\varepsilon]$ 上积分，取极限 $\\varepsilon \\to 0$：

$$
\\begin{align}
\\int \\frac{\\mathrm{d}}{\\mathrm{d}t}\\left( \\frac{\\partial T}{\\partial \\dot{q}_\\alpha} \\right) \\mathrm{d}t - \\int \\frac{\\partial T}{\\partial q_\\alpha} \\mathrm{d}t = \\int Q_\\alpha \\mathrm{d}t
\\end{align}
$$

由于 $q_\\alpha$ 在冲击过程中不变，$\\partial T/\\partial q_\\alpha$ 为有限值，其积分为零。左边第一项积分为广义动量的增量：

$$
\\begin{align}
\\left[ \\frac{\\partial T}{\\partial \\dot{q}_\\alpha} \\right]_{t_0^-}^{t_0^+} = \\Delta p_\\alpha = \\hat{Q}_\\alpha
\\end{align}
$$

其中 $\\hat{Q}_\\alpha$ 是**广义冲量**，定义为

$$
\\begin{align}
\\hat{Q}_\\alpha = \\int Q_\\alpha \\, \\mathrm{d}t
\\end{align}
$$

**结论**：在瞬时力作用下，广义动量发生突变，其增量等于广义冲量。

## 广义冲量的计算

广义力 $Q_\\alpha$ 由主动力 $\\boldsymbol{F}_i$ 决定：

$$
\\begin{align}
Q_\\alpha = \\sum_i \\boldsymbol{F}_i \\cdot \\frac{\\partial \\boldsymbol{r}_i}{\\partial q_\\alpha}
\\end{align}
$$

在瞬时力作用下，$\\partial \\boldsymbol{r}_i / \\partial q_\\alpha$ 在冲击过程中可视为常数（位置不变），因此广义冲量为

$$
\\begin{align}
\\hat{Q}_\\alpha = \\sum_i \\left( \\int \\boldsymbol{F}_i \\, \\mathrm{d}t \\right) \\cdot \\frac{\\partial \\boldsymbol{r}_i}{\\partial q_\\alpha} = \\sum_i \\boldsymbol{I}_i \\cdot \\frac{\\partial \\boldsymbol{r}_i}{\\partial q_\\alpha}
\\end{align}
$$

其中 $\\boldsymbol{I}_i$ 为作用于第 $i$ 个质点的冲量。

## 应用实例

### 例1：冲击后速度的确定

**问题**：质量为 $m$ 的质点，初始静止，在 $A$ 点受到沿 $AB$ 方向的冲量 $I$，求冲击后质点的速度。

解：取广义坐标 $x,y$（直角坐标）。冲击前速度为零，动能 $T = \\frac{1}{2} m (\\dot{x}^2 + \\dot{y}^2)$。广义动量为

$$
\\begin{align}
p_x = \\frac{\\partial T}{\\partial \\dot{x}} = m\\dot{x}, \\quad p_y = \\frac{\\partial T}{\\partial \\dot{y}} = m\\dot{y}
\\end{align}
$$

冲量沿 $AB$ 方向，其分量为 $I_x, I_y$。由 $\\Delta p_x = I_x$，$\\Delta p_y = I_y$，得

$$
\\begin{align}
\\dot{x} = \\frac{I_x}{m}, \\quad \\dot{y} = \\frac{I_y}{m}
\\end{align}
$$

### 例2：四根均质杆组成的菱形系统

**问题**：四根质量均为 $m$、长为 $l$ 的均质杆用铰链连成菱形，放置在光滑水平面上，原来形状为正方形。

（1）体系开始时静止，在 $A$ 点突然受到沿 $BA$ 方向的冲量 $I$，求冲击终了时 $A$ 点的速度。

（2）若开始时体系以速度 $v_0$ 沿 $BA$ 方向运动，而后突然将 $A$ 点固定，求以后质心的速度和杆的角速度，并计算能量损失。

解：选取广义坐标：质心坐标 $y_C$ 和绕质心的转角 $\\theta$（或取其他适当坐标）。写出动能表达式，计算广义动量。利用瞬时力问题的拉格朗日方程，结合约束条件，可解得冲击后的运动。

## 碰撞中的恢复系数

与瞬时力相关的一个常见物理现象是碰撞。在碰撞问题中，常引入**恢复系数** $e$ 来描述碰撞的弹性程度：

- $e=1$：完全弹性碰撞，动能守恒
- $e=0$：完全非弹性碰撞，两物体碰撞后粘在一起
- $0<e<1$：非完全弹性碰撞，部分动能损失

恢复系数定义为碰撞后分离速度与碰撞前接近速度之比（沿法线方向）：

$$
\\begin{align}
e = \\frac{v_2' - v_1'}{v_1 - v_2}
\\end{align}
$$

其中 $v_1, v_2$ 为碰撞前速度，$v_1', v_2'$ 为碰撞后速度。

### 压缩冲量与恢复冲量

碰撞过程可分为两个阶段：

- **压缩阶段**：两物体从开始接触到相对速度为零，冲量为 $I_1$
- **恢复阶段**：从相对速度为零到分离，冲量为 $I_2$

恢复系数也可表示为 $e = I_2 / I_1$。

利用拉格朗日方程的积分形式，结合恢复系数，可求解碰撞后的运动。

## 小结

- 瞬时力问题中，时间极短，位置不变，速度发生跃变
- 拉格朗日方程的积分形式给出广义动量增量等于广义冲量
- 广义冲量由作用在质点上的冲量及虚位移系数确定
- 利用这一方法，可方便地求解冲击后的运动，并计算能量损失
- 碰撞问题中，恢复系数用于补充方程，确定冲击后的速度
`,l={title:"瞬时力问题的拉格朗日方程",author:"NeoWangKing",date:new Date(1775478587e3),lastMod:new Date(1775478587e3),tags:["物理","理论力学","瞬时力","碰撞","冲量","拉格朗日方程"],category:["物理","理论力学"],summary:"本文讨论拉格朗日方程在处理瞬时力（如碰撞、冲量）问题中的应用，包括积分形式的拉格朗日方程、冲量对广义动量的影响，以及碰撞过程中的能量损失。",comments:!0,draft:!1,sticky:0},i={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/08-Instantaneous-Forces.md",rawData:void 0};export{i as _internal,$ as body,a as collection,l as data,n as id,t as slug};
