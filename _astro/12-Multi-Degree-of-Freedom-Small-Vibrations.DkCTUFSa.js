const n="physics/TheoreticalMechanics/12-Multi-Degree-of-Freedom-Small-Vibrations.md",$="posts",a="physics/theoreticalmechanics/12-multi-degree-of-freedom-small-vibrations",e=`
## 引言

振动是自然界中普遍存在的现象。任何保守体系在稳定平衡位置附近做小幅度运动时，都可以近似为简谐振动的叠加。本章研究多自由度体系的微振动，是分析力学的重要应用。

## 单自由度体系的回顾

对于单自由度保守体系，平衡位置 $q_0$ 满足 $V'(q_0)=0$。将势能在平衡位置附近泰勒展开：

$$
\\begin{align}
V(q) = V(q_0) + \\frac{1}{2} V''(q_0) (q - q_0)^2 + \\cdots
\\end{align}
$$

若 $V''(q_0) > 0$（稳定平衡），则运动方程为

$$
\\begin{align}
m \\ddot{\\xi} + k \\xi = 0
\\end{align}
$$

其中 $\\xi = q - q_0$，$k = V''(q_0)$。这是简谐振动方程，频率 $\\omega = \\sqrt{k/m}$。

## 两自由度体系的微振动

### 拉格朗日函数的近似

对于两自由度保守体系，广义坐标为 $q_1, q_2$。设平衡位置在 $q_1=q_2=0$（可通过平移实现）。将动能 $T$ 和势能 $V$ 在平衡位置附近展开：

- 动能 $T$ 是广义速度的二次齐次函数，在稳定约束下可写为

$$
\\begin{align}
T = \\frac{1}{2} m_{11} \\dot{q}_1^2 + m_{12} \\dot{q}_1 \\dot{q}_2 + \\frac{1}{2} m_{22} \\dot{q}_2^2
\\end{align}
$$

其中系数 $m_{ij}$ 是常数（在平衡位置取值）。

- 势能 $V$ 在平衡位置处取极小值，一阶导数为零，保留到二阶：

$$
\\begin{align}
V = V_0 + \\frac{1}{2} k_{11} q_1^2 + k_{12} q_1 q_2 + \\frac{1}{2} k_{22} q_2^2
\\end{align}
$$

其中 $k_{ij} = \\frac{\\partial^2 V}{\\partial q_i \\partial q_j}\\big|_0$，常数项 $V_0$ 可略去。

### 运动方程

代入拉格朗日方程，得到线性微分方程组：

$$
\\begin{align}
m_{11} \\ddot{q}_1 + m_{12} \\ddot{q}_2 + k_{11} q_1 + k_{12} q_2 &= 0 \\\\
m_{21} \\ddot{q}_1 + m_{22} \\ddot{q}_2 + k_{21} q_1 + k_{22} q_2 &= 0
\\end{align}
$$

其中 $m_{12}=m_{21}$，$k_{12}=k_{21}$。

### 简正频率与简正模式

设简正模解为 $q_1 = A_1 e^{\\mathrm{i}\\omega t}$，$q_2 = A_2 e^{\\mathrm{i}\\omega t}$，代入得本征方程：

$$
\\begin{align}
\\begin{pmatrix}
k_{11} - \\omega^2 m_{11} & k_{12} - \\omega^2 m_{12} \\\\
k_{21} - \\omega^2 m_{21} & k_{22} - \\omega^2 m_{22}
\\end{pmatrix}
\\begin{pmatrix} A_1 \\\\ A_2 \\end{pmatrix} = 0
\\end{align}
$$

系数行列式为零给出**久期方程**，解得两个本征频率 $\\omega_1$ 和 $\\omega_2$（简正频率）。每个频率对应一个振幅比（简正模式）。

### 例题：两个相同的单摆耦合

考虑两个相同的单摆（摆长 $l$，质量 $m$），用轻弹簧（劲度系数 $k$）在距离悬挂点 $a$ 处耦合。取小角度近似，广义坐标为 $\\theta_1$、$\\theta_2$。动能和势能分别为

$$
\\begin{align}
T &= \\frac{1}{2} m l^2 (\\dot{\\theta}_1^2 + \\dot{\\theta}_2^2) \\\\
V &= \\frac{1}{2} mgl (\\theta_1^2 + \\theta_2^2) + \\frac{1}{2} k a^2 (\\theta_1 - \\theta_2)^2
\\end{align}
$$

代入拉格朗日方程，得到运动方程。求解本征值得

$$
\\begin{align}
\\omega_1^2 = \\frac{g}{l}, \\quad \\omega_2^2 = \\frac{g}{l} + \\frac{2k a^2}{m l^2}
\\end{align}
$$

对应的简正模式：

- $\\omega_1$：两摆同相运动（弹簧不变形）
- $\\omega_2$：两摆反相运动（弹簧拉伸压缩）

## 简正坐标

### 定义

**简正坐标**是使动能和势能同时对角化的一组广义坐标。在简正坐标下，拉格朗日函数变为

$$
\\begin{align}
L = \\frac{1}{2} \\sum_{i=1}^s (\\dot{Q}_i^2 - \\omega_i^2 Q_i^2)
\\end{align}
$$

即系统分解为 $s$ 个独立的简谐振子。

### 寻找简正坐标的方法

1. **线性代数法**：将运动方程写为矩阵形式 $\\boldsymbol{M} \\ddot{\\boldsymbol{q}} + \\boldsymbol{K} \\boldsymbol{q} = 0$，通过求解广义本征值问题 $\\boldsymbol{K} \\boldsymbol{a} = \\omega^2 \\boldsymbol{M} \\boldsymbol{a}$，得到本征矢量，从而构造变换矩阵。

2. **物理直觉法**：对于对称系统，常可猜测简正坐标。例如，两相同单摆的同相和反相运动就是简正模式。

3. **二次型对角化**：将 $T$ 和 $V$ 的二次型同时对角化，即寻找线性变换使 $T$ 变为单位矩阵，$V$ 变为对角矩阵。

### 简正坐标的物理意义

- 每个简正坐标对应一个独立的振动模式（简正振动）
- 各简正模式之间没有能量交换
- 系统的任意运动可以表示为简正模式的线性叠加
- 简正频率是系统的固有频率，与初始条件无关

## 多自由度体系的一般理论

对于 $s$ 个自由度的保守体系，在稳定平衡位置附近的微振动，其拉格朗日函数可写为

$$
\\begin{align}
L = \\frac{1}{2} \\sum_{i,j} m_{ij} \\dot{q}_i \\dot{q}_j - \\frac{1}{2} \\sum_{i,j} k_{ij} q_i q_j
\\end{align}
$$

运动方程为

$$
\\begin{align}
\\sum_j (m_{ij} \\ddot{q}_j + k_{ij} q_j) = 0, \\quad i = 1,2,\\dots,s
\\end{align}
$$

设解为 $q_j = A_j e^{\\mathrm{i}\\omega t}$，得到广义本征值问题

$$
\\begin{align}
\\sum_j (k_{ij} - \\omega^2 m_{ij}) A_j = 0
\\end{align}
$$

非零解条件为 $\\det(\\boldsymbol{K} - \\omega^2 \\boldsymbol{M}) = 0$，这是一个关于 $\\omega^2$ 的 $s$ 次方程，给出 $s$ 个简正频率 $\\omega_\\alpha^2$（均为正实数，因平衡稳定）。

每个频率对应的本征矢量 $\\boldsymbol{A}^{(\\alpha)}$ 确定一个简正模式。所有模式构成完备正交基，可用来定义简正坐标。

## 应用举例

### 三质点横振动（弹性弦）

三个质量相同的质点 $m$ 等间距固定在张紧的弦上，弦的张力 $F$ 很大（近似常数），质点做横向小振动。可求出简正频率和简正模式。这类问题是连续弦振动模型的离散近似。

### 三原子分子振动

一维三原子分子（如 CO₂）的纵向振动，有对称伸缩、反对称伸缩等模式。这些模式在红外光谱中有重要应用。

## 小结

- 多自由度体系在稳定平衡附近的微振动可线性化为简谐振动问题
- 动能和势能的二次型系数矩阵 $\\boldsymbol{M}$ 和 $\\boldsymbol{K}$ 决定了系统的动力学
- 简正频率由广义本征值方程的解给出
- 简正坐标使系统解耦为独立谐振子，是分析复杂振动的重要工具
- 简正模式的概念在分子振动、固体物理（声子）等领域有广泛应用
`,_={title:"多自由度体系的微振动",author:"NeoWangKing",date:new Date(1776699189e3),lastMod:new Date(1776699189e3),tags:["物理","理论力学","微振动","简正坐标","简正频率","多自由度"],category:["物理","理论力学"],summary:"本文讨论多自由度保守体系在平衡位置附近的微振动，包括拉格朗日方法的线性化、运动方程的建立、简正坐标与简正频率的求解，以及多自由度体系的一般理论。",comments:!0,draft:!1,sticky:0},o={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/12-Multi-Degree-of-Freedom-Small-Vibrations.md",rawData:void 0};export{o as _internal,e as body,$ as collection,_ as data,n as id,a as slug};
