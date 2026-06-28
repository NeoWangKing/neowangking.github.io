const n="physics/TheoreticalMechanics/04-Rigid-Body.md",o="posts",a="physics/theoreticalmechanics/04-rigid-body",e=`
## 刚体的定义与自由度

**刚体**是一种特殊的质点系，其中任意两质点间的距离保持恒定。刚体模型既考虑物体的质量，又考虑形状和大小，但忽略形变。

刚体位置的确定：只需任意三个不在同一直线上的质点的位置即可确定刚体的位形。

|   运动类型   | 自由度 |             广义坐标             |
| :----------: | :----: | :------------------------------: |
|   自由刚体   |   6    |        质心坐标 + 欧拉角         |
|   定轴转动   |   1    |          转角 $\\theta$           |
|   定点转动   |   3    | 欧拉角 $(\\varphi, \\theta, \\psi)$ |
| 平面平行运动 |   3    |        $(x, y, \\varphi)$         |

## 欧拉角

定点转动常用**欧拉角**作为广义坐标：

- **进动角** $\\varphi$：绕固定轴 $z_0$ 的转动
- **章动角** $\\theta$：绕节线（$x'$ 轴）的转动
- **自转角** $\\psi$：绕刚体对称轴 $z$ 的转动

欧拉角的顺序：先绕 $z_0$ 转 $\\varphi$，再绕新 $x'$ 转 $\\theta$，最后绕新 $z$ 转 $\\psi$。

## 角速度

### 无穷小角位移是矢量

有限角位移不满足交换律，但**无穷小角位移**是矢量。无限小定点转动总可视为定轴转动。

### 欧拉运动学方程

角速度在随动坐标系中的分量为

$$
\\begin{align}
\\omega_x &= \\dot{\\theta} \\cos\\psi + \\dot{\\varphi} \\sin\\theta \\sin\\psi \\\\
\\omega_y &= -\\dot{\\theta} \\sin\\psi + \\dot{\\varphi} \\sin\\theta \\cos\\psi \\\\
\\omega_z &= \\dot{\\psi} + \\dot{\\varphi} \\cos\\theta
\\end{align}
$$

## 刚体上任一点的速度和加速度

### 速度公式（基点法）

设 $C$ 为刚体上任意基点（通常选质心），$P$ 为刚体上任一点：

$$
\\begin{align}
\\boldsymbol{v}_P = \\boldsymbol{v}_C + \\boldsymbol{\\omega} \\times \\boldsymbol{r}_{CP}
\\end{align}
$$

### 加速度公式

$$
\\begin{align}
\\boldsymbol{a}_P = \\boldsymbol{a}_C + \\boldsymbol{\\alpha} \\times \\boldsymbol{r}_{CP} + \\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\boldsymbol{r}_{CP})
\\end{align}
$$

**关键性质**：角速度 $\\boldsymbol{\\omega}$ 与基点的选择无关，是刚体的整体运动学量。

### 平面平行运动与瞬时转心

在平面平行运动中，每一瞬时存在速度为零的点——**瞬时转心**。求法：

- 作两点速度的垂线，交点为瞬时转心
- 纯滚动时接触点为瞬时转心

## 转动惯量张量

### 定义

$$
\\begin{align}
I_{ij} = \\int (r^2 \\delta_{ij} - x_i x_j) \\,\\mathrm{d}m
\\end{align}
$$

转动惯量张量是对称的二阶张量（$I_{ij} = I_{ji}$），在三维空间中有6个独立分量。

### 惯量主轴

通过选择合适的坐标系，可使三个惯量积同时为零。这样的坐标轴称为**惯量主轴**。在惯量主轴系中：

$$
\\begin{align}
I = \\begin{pmatrix}
I_1 & 0 & 0 \\\\
0 & I_2 & 0 \\\\
0 & 0 & I_3
\\end{pmatrix}
\\end{align}
$$

**寻找惯量主轴的技巧**：

- 均匀刚体的对称轴必为惯量主轴
- 垂直于均匀刚体对称面的轴也是惯量主轴

### 角动量与转动动能

角动量：

$$
\\begin{align}
\\boldsymbol{L} = \\boldsymbol{I} \\cdot \\boldsymbol{\\omega}
\\end{align}
$$

在惯量主轴系中，$L_i = I_i \\omega_i$。

转动动能：

$$
\\begin{align}
T = \\frac{1}{2} \\boldsymbol{\\omega} \\cdot \\boldsymbol{L} = \\frac{1}{2} (I_1 \\omega_1^2 + I_2 \\omega_2^2 + I_3 \\omega_3^2)
\\end{align}
$$

## 欧拉动力学方程

### 随动坐标系中的角动量定理

在随动坐标系（固连于刚体）中，角动量定理为

$$
\\begin{align}
\\frac{\\mathrm{d}\\boldsymbol{L}}{\\mathrm{d}t} + \\boldsymbol{\\omega} \\times \\boldsymbol{L} = \\boldsymbol{M}
\\end{align}
$$

### 欧拉方程

在惯量主轴系中，分量形式为

$$
\\begin{align}
I_1 \\dot{\\omega}_1 + (I_3 - I_2) \\omega_2 \\omega_3 &= M_1 \\\\
I_2 \\dot{\\omega}_2 + (I_1 - I_3) \\omega_3 \\omega_1 &= M_2 \\\\
I_3 \\dot{\\omega}_3 + (I_2 - I_1) \\omega_1 \\omega_2 &= M_3
\\end{align}
$$

## 典型陀螺运动

### 欧拉陀螺（自由转动）

外力矩为零（$\\boldsymbol{M}=0$）时，角动量大小和动能守恒：

$$
\\begin{align}
L^2 &= I_1^2 \\omega_1^2 + I_2^2 \\omega_2^2 + I_3^2 \\omega_3^2 = \\text{常数} \\\\
T &= \\frac{1}{2} (I_1 \\omega_1^2 + I_2 \\omega_2^2 + I_3 \\omega_3^2) = \\text{常数}
\\end{align}
$$

### 拉格朗日陀螺

对称陀螺（$I_1 = I_2$）在重力场中绕固定点转动，拉格朗日函数为

$$
\\begin{align}
L = \\frac{1}{2} I_1 (\\dot{\\theta}^2 + \\dot{\\varphi}^2 \\sin^2\\theta) + \\frac{1}{2} I_3 (\\dot{\\psi} + \\dot{\\varphi} \\cos\\theta)^2 - Mgl \\cos\\theta
\\end{align}
$$

$\\varphi$ 和 $\\psi$ 是循环坐标，对应的广义动量守恒。

### 快速陀螺近似

当自转角速度 $\\dot{\\psi}$ 很大时，进动角速度近似为

$$
\\begin{align}
\\dot{\\varphi} \\approx \\frac{Mgl}{I_3 \\dot{\\psi}}
\\end{align}
$$

进动角速度与自转角速度成反比。

## 小结

- 刚体运动可分解为质心平动和定点转动
- 欧拉角是描述定点转动的广义坐标
- 角速度是刚体整体量，与基点无关
- 欧拉动力学方程是随动坐标系中的角动量定理
- 快速陀螺的进动角速度与自转角速度成反比
`,i={title:"刚体",author:"NeoWangKing",date:new Date(17775936e5),lastMod:new Date(1782646439e3),tags:["物理","理论力学","刚体","角速度","欧拉角","转动惯量张量","欧拉方程","陀螺"],category:["物理","理论力学"],summary:"本文系统介绍刚体运动学与动力学，包括刚体的自由度与广义坐标（欧拉角）、角速度矢量、欧拉运动学方程、刚体上任一点的速度和加速度、转动惯量张量、惯量主轴、欧拉动力学方程，以及典型陀螺运动（欧拉陀螺、拉格朗日陀螺、快速陀螺）。",comments:!0,draft:!1,sticky:0},$={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/04-Rigid-Body.md",rawData:void 0};export{$ as _internal,e as body,o as collection,i as data,n as id,a as slug};
