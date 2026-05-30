const n="physics/TheoreticalMechanics/14-Rigid-Body-Kinematics.md",o="posts",l="physics/theoreticalmechanics/14-rigid-body-kinematics",$=`
## 刚体的定义与自由度

**刚体**是一种特殊的质点系，其中任意两质点间的距离保持恒定。刚体模型既考虑物体的质量，又考虑形状和大小，但忽略形变。

刚体位置的确定：只需任意三个不在同一直线上的质点的位置即可确定刚体的位形。

刚体的自由度：

- 自由刚体：6个自由度（3个平动 + 3个转动）
- 定轴转动：1个自由度
- 定点转动：3个自由度
- 平面平行运动：3个自由度（2个平动 + 1个转动）

## 欧拉角

定点转动常用**欧拉角**作为广义坐标：

- **进动角** $\\varphi$：绕固定轴 $z_0$ 的转动
- **章动角** $\\theta$：绕节线（$x'$ 轴）的转动，范围 $0 \\le \\theta \\le \\pi$
- **自转角** $\\psi$：绕刚体对称轴 $z$ 的转动

欧拉角的顺序：先绕 $z_0$ 转 $\\varphi$，再绕新 $x'$ 转 $\\theta$，最后绕新 $z$ 转 $\\psi$。

## 角速度

### 无穷小角位移是矢量

有限角位移不满足交换律（非矢量），但**无穷小角位移**是矢量，可进行矢量加法。无限小定点转动总可视为定轴转动。

### 角速度矢量

角速度 $\\boldsymbol{\\omega}$ 的大小和方向由瞬时转轴确定。对于定点转动，角速度可分解为三个欧拉角速度的合成：

$$
\\begin{align}
\\boldsymbol{\\omega} = \\dot{\\varphi} \\hat{\\boldsymbol{z}}_0 + \\dot{\\theta} \\hat{\\boldsymbol{x}}' + \\dot{\\psi} \\hat{\\boldsymbol{z}}
\\end{align}
$$

其中 $\\hat{\\boldsymbol{z}}_0$、$\\hat{\\boldsymbol{x}}'$、$\\hat{\\boldsymbol{z}}$ 分别是固定轴、节线和刚体对称轴方向的单位矢量。

### 欧拉运动学方程

将上述角速度投影到随动坐标系（固连于刚体）的坐标轴上，得到欧拉运动学方程：

$$
\\begin{align}
\\omega_x &= \\dot{\\theta} \\cos\\psi + \\dot{\\varphi} \\sin\\theta \\sin\\psi \\\\
\\omega_y &= -\\dot{\\theta} \\sin\\psi + \\dot{\\varphi} \\sin\\theta \\cos\\psi \\\\
\\omega_z &= \\dot{\\psi} + \\dot{\\varphi} \\cos\\theta
\\end{align}
$$

## 刚体上任一点的速度和加速度

### 只有转动（定点转动）

设 $O$ 为定点，$P$ 为刚体上任一点，位矢为 $\\boldsymbol{r}$（在随动坐标系中）。则

$$
\\begin{align}
\\boldsymbol{v}_P = \\boldsymbol{\\omega} \\times \\boldsymbol{r}
\\end{align}
$$

$$
\\begin{align}
\\boldsymbol{a}_P = \\boldsymbol{\\alpha} \\times \\boldsymbol{r} + \\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\boldsymbol{r})
\\end{align}
$$

其中 $\\boldsymbol{\\alpha} = \\dot{\\boldsymbol{\\omega}}$ 为角加速度。

### 一般运动（平动 + 转动）

设 $C$ 为刚体上任意基点（通常选质心），则

$$
\\begin{align}
\\boldsymbol{v}_P = \\boldsymbol{v}_C + \\boldsymbol{\\omega} \\times \\boldsymbol{r}_{CP}
\\end{align}
$$

$$
\\begin{align}
\\boldsymbol{a}_P = \\boldsymbol{a}_C + \\boldsymbol{\\alpha} \\times \\boldsymbol{r}_{CP} + \\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\boldsymbol{r}_{CP})
\\end{align}
$$

**重要性质**：刚体的角速度 $\\boldsymbol{\\omega}$ 与基点的选择无关，是刚体整体的运动学量。

### 平面平行运动

平面平行运动是刚体一般运动的特例：刚体内各点始终在平行于固定平面的平面内运动。此时角速度方向垂直于运动平面。

**瞬时转心**：在平面平行运动中，每一瞬时都存在一个速度为零的点（可能在刚体上，也可能在刚体外部），称为**瞬时转心**（或瞬时速度中心）。以瞬时转心为基点，刚体在该瞬时纯转动。

瞬时转心的求法：

- 作刚体上两点速度的垂线，交点即为瞬时转心
- 纯滚动时，接触点即为瞬时转心

**例**：半径为 $R$ 的轮子在水平轨道上纯滚动，质心速度为 $v_c$。则角速度 $\\omega = v_c / R$，瞬时转心在接触点。轮缘上任一点 $P$ 的速度为

$$
\\begin{align}
v_P = \\omega \\cdot CP
\\end{align}
$$

其中 $CP$ 是该点到瞬时转心的距离，方向垂直于连线。

## 刚体运动学的应用

### 例题：圆锥在平面上纯滚动

一圆锥高 $h$，顶角 $2\\alpha$，在一平面上纯滚动，锥以等角速度 $\\omega$ 绕对称轴转动。求底面最高点 $A$ 的速度和加速度。

解：圆锥绕顶点 $O$ 做定点转动（因为 $O$ 点与平面接触且无滑动？实际上纯滚动时接触点瞬时静止，但接触点不断变化，不是固定点。更严谨的做法是分析角速度合成。利用欧拉运动学方程和刚体上任一点的速度公式即可求解。

## 小结

- 刚体运动可分解为平动和定点转动
- 欧拉角是描述定点转动的三个独立广义坐标
- 角速度是刚体整体量，与基点无关
- 无穷小角位移是矢量，有限角位移不是
- 平面平行运动可用瞬时转心法简化速度分析
`,a={title:"刚体运动学",author:"NeoWangKing",date:new Date(1780131175e3),lastMod:new Date(1780131188e3),tags:["物理","理论力学","刚体","角速度","欧拉角","平面平行运动"],category:["物理","理论力学"],summary:"本文介绍刚体运动学的基本概念，包括刚体的自由度、欧拉角、角速度矢量、定点转动的欧拉运动学方程，以及刚体上任一点的速度和加速度，并讨论平面平行运动的瞬时转心法。",comments:!0,draft:!1,sticky:0},e={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/14-Rigid-Body-Kinematics.md",rawData:void 0};export{e as _internal,$ as body,o as collection,a as data,n as id,l as slug};
