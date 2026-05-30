const n="physics/TheoreticalMechanics/15-Rigid-Body-Dynamics.md",o="posts",a="physics/theoreticalmechanics/15-rigid-body-dynamics",e=`
## 转动惯量张量

### 角动量的计算

对于绕固定点 $O$ 转动的刚体，角动量 $\\boldsymbol{L}$ 的一般表达式为

$$
\\begin{align}
\\boldsymbol{L} = \\int \\boldsymbol{r} \\times (\\boldsymbol{\\omega} \\times \\boldsymbol{r}) \\, \\mathrm{d}m
\\end{align}
$$

在直角坐标系中，分量形式为

$$
\\begin{align}
L_x &= I_{xx} \\omega_x + I_{xy} \\omega_y + I_{xz} \\omega_z \\\\
L_y &= I_{yx} \\omega_x + I_{yy} \\omega_y + I_{yz} \\omega_z \\\\
L_z &= I_{zx} \\omega_x + I_{zy} \\omega_y + I_{zz} \\omega_z
\\end{align}
$$

其中 $I_{xx}, I_{yy}, I_{zz}$ 为转动惯量，$I_{xy}$ 等为惯量积（负值，$I_{xy} = -\\int xy \\, \\mathrm{d}m$）。

### 转动惯量张量

定义**转动惯量张量** $\\boldsymbol{I}$（或写为 $I_{ij}$），其分量为

$$
\\begin{align}
I_{ij} = \\int (r^2 \\delta_{ij} - x_i x_j) \\, \\mathrm{d}m
\\end{align}
$$

则角动量可简洁地写为 $\\boldsymbol{L} = \\boldsymbol{I} \\cdot \\boldsymbol{\\omega}$，即 $L_i = \\sum_j I_{ij} \\omega_j$。

转动惯量张量是对称的二阶张量（$I_{ij} = I_{ji}$），在三维空间中有6个独立分量。

### 惯量主轴

通过选择合适的坐标系（随动坐标系，固连于刚体），可使三个惯量积同时为零。这样的坐标轴称为**惯量主轴**。在惯量主轴系中，转动惯量张量对角化：

$$
\\begin{align}
I = \\begin{pmatrix}
I_1 & 0 & 0 \\\\
0 & I_2 & 0 \\\\
0 & 0 & I_3
\\end{pmatrix}
\\end{align}
$$

此时角动量 $\\boldsymbol{L} = (I_1 \\omega_1, I_2 \\omega_2, I_3 \\omega_3)$。

**寻找惯量主轴的技巧**：

- 均匀刚体的对称轴必为惯量主轴
- 垂直于均匀刚体对称面的轴也是惯量主轴

### 转动动能

定点转动刚体的动能为

$$
\\begin{align}
T = \\frac{1}{2} \\boldsymbol{\\omega} \\cdot \\boldsymbol{L} = \\frac{1}{2} \\sum_{i,j} I_{ij} \\omega_i \\omega_j
\\end{align}
$$

在惯量主轴系中，$T = \\frac{1}{2} (I_1 \\omega_1^2 + I_2 \\omega_2^2 + I_3 \\omega_3^2)$。

## 欧拉动力学方程

### 在随动坐标系中的角动量定理

对于定点转动，角动量定理 $\\dfrac{\\mathrm{d}\\boldsymbol{L}}{\\mathrm{d}t} = \\boldsymbol{M}$ 在惯性系中成立。但刚体随动坐标系是非惯性系。在随动坐标系（固连于刚体）中，有

$$
\\begin{align}
\\left( \\frac{\\mathrm{d}\\boldsymbol{L}}{\\mathrm{d}t} \\right)_{\\text{惯}} = \\left( \\frac{\\mathrm{d}\\boldsymbol{L}}{\\mathrm{d}t} \\right)_{\\text{随}} + \\boldsymbol{\\omega} \\times \\boldsymbol{L}
\\end{align}
$$

因此，随动坐标系中的角动量定理为

$$
\\begin{align}
\\frac{\\mathrm{d}\\boldsymbol{L}}{\\mathrm{d}t} + \\boldsymbol{\\omega} \\times \\boldsymbol{L} = \\boldsymbol{M}
\\end{align}
$$

其中 $\\boldsymbol{L}$ 和 $\\boldsymbol{M}$ 均在随动坐标系中表示，且 $\\boldsymbol{L} = \\boldsymbol{I} \\cdot \\boldsymbol{\\omega}$。

### 欧拉方程

在惯量主轴系中，分量形式为

$$
\\begin{align}
I_1 \\dot{\\omega}_1 + (I_3 - I_2) \\omega_2 \\omega_3 &= M_1 \\\\
I_2 \\dot{\\omega}_2 + (I_1 - I_3) \\omega_3 \\omega_1 &= M_2 \\\\
I_3 \\dot{\\omega}_3 + (I_2 - I_1) \\omega_1 \\omega_2 &= M_3
\\end{align}
$$

这就是**欧拉动力学方程**，是处理刚体定点转动的基本方程。

## 自由转动（欧拉陀螺）

当外力矩为零（$\\boldsymbol{M}=0$）时，刚体绕质心自由转动。此时有两个守恒量：

- 角动量大小守恒：$L^2 = I_1^2 \\omega_1^2 + I_2^2 \\omega_2^2 + I_3^2 \\omega_3^2 = \\text{常数}$
- 动能守恒：$T = \\frac{1}{2} (I_1 \\omega_1^2 + I_2 \\omega_2^2 + I_3 \\omega_3^2) = \\text{常数}$

对于轴对称刚体（$I_1 = I_2 \\neq I_3$），欧拉方程可解析求解，得到章动和进动现象。例如地球的转动（轻微扁平）存在极移和岁差。

## 拉格朗日陀螺

**拉格朗日陀螺**是指对称刚体（$I_1 = I_2$）在重力场中绕固定点（非质心）转动。其拉格朗日函数为

$$
\\begin{align}
L = \\frac{1}{2} I_1 (\\dot{\\theta}^2 + \\dot{\\varphi}^2 \\sin^2\\theta) + \\frac{1}{2} I_3 (\\dot{\\psi} + \\dot{\\varphi} \\cos\\theta)^2 - Mgl \\cos\\theta
\\end{align}
$$

其中 $l$ 是固定点到质心的距离。

由于 $\\varphi$ 和 $\\psi$ 是循环坐标，对应的广义动量守恒：

$$
\\begin{align}
p_\\varphi &= I_1 \\dot{\\varphi} \\sin^2\\theta + I_3 (\\dot{\\psi} + \\dot{\\varphi} \\cos\\theta) \\cos\\theta = L_z \\text{（常数）} \\\\
p_\\psi &= I_3 (\\dot{\\psi} + \\dot{\\varphi} \\cos\\theta) = L_3 \\text{（常数）}
\\end{align}
$$

此外能量守恒。这些守恒律可将问题化为一维有效势中的章动运动。

## 快速陀螺的近似理论

当自转角速度 $\\dot{\\psi}$ 很大时，章动角 $\\theta$ 的变化很小，进动角速度近似为

$$
\\begin{align}
\\dot{\\varphi} \\approx \\frac{Mgl}{I_3 \\dot{\\psi}}
\\end{align}
$$

即进动角速度与自转角速度成反比。当自转减慢时，进动加快，且章动幅度增大——这是陀螺的重要特性。

## 小结

- 转动惯量张量是描述刚体转动惯性的二阶张量，在惯量主轴系中对角化
- 欧拉动力学方程是随动坐标系中的角动量定理，适用于定点转动
- 自由转动（外力矩为零）时角动量和动能守恒
- 拉格朗日陀螺（重力场中的对称陀螺）有循环坐标，可简化分析
- 快速陀螺的进动角速度与自转角速度成反比
`,t={title:"刚体动力学",author:"NeoWangKing",date:new Date(1780131203e3),lastMod:new Date(1780131214e3),tags:["物理","理论力学","刚体","转动惯量张量","欧拉方程","陀螺"],category:["物理","理论力学"],summary:"本文介绍刚体动力学的核心内容，包括转动惯量张量的定义与性质、惯量主轴、欧拉动力学方程，以及刚体定点运动的守恒律和简单陀螺的运动分析。",comments:!0,draft:!1,sticky:0},m={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/15-Rigid-Body-Dynamics.md",rawData:void 0};export{m as _internal,e as body,o as collection,t as data,n as id,a as slug};
