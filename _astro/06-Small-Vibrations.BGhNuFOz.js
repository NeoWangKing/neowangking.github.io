const n="physics/TheoreticalMechanics/06-Small-Vibrations.md",a="posts",$="physics/theoreticalmechanics/06-small-vibrations",e=`
## 引言

任何保守体系在稳定平衡位置附近做小幅度运动时，都可以近似为简谐振动的叠加。这是分析多自由度系统振动行为的基础。

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

### 线性化

对于两自由度保守体系，广义坐标为 $q_1, q_2$。设平衡位置在 $q_1=q_2=0$。将动能和势能在平衡位置附近展开：

**动能**（广义速度的二次齐次函数）：

$$
\\begin{align}
T = \\frac{1}{2} m_{11} \\dot{q}_1^2 + m_{12} \\dot{q}_1 \\dot{q}_2 + \\frac{1}{2} m_{22} \\dot{q}_2^2
\\end{align}
$$

**势能**（保留到二阶）：

$$
\\begin{align}
V = V_0 + \\frac{1}{2} k_{11} q_1^2 + k_{12} q_1 q_2 + \\frac{1}{2} k_{22} q_2^2
\\end{align}
$$

### 运动方程

代入拉格朗日方程，得到线性微分方程组：

$$
\\begin{align}
m_{11} \\ddot{q}_1 + m_{12} \\ddot{q}_2 + k_{11} q_1 + k_{12} q_2 &= 0 \\\\
m_{21} \\ddot{q}_1 + m_{22} \\ddot{q}_2 + k_{21} q_1 + k_{22} q_2 &= 0
\\end{align}
$$

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

系数行列式为零给出**久期方程**：

$$
\\begin{align}
\\det(\\boldsymbol{K} - \\omega^2 \\boldsymbol{M}) = 0
\\end{align}
$$

解得两个本征频率 $\\omega_1$ 和 $\\omega_2$（简正频率）。每个频率对应一个振幅比（简正模式）。

### 例题：两个相同的单摆耦合

两个相同的单摆（摆长 $l$，质量 $m$），用轻弹簧（劲度系数 $k$）在距离悬挂点 $a$ 处耦合。取小角度近似：

$$
\\begin{align}
T &= \\frac{1}{2} m l^2 (\\dot{\\theta}_1^2 + \\dot{\\theta}_2^2) \\\\
V &= \\frac{1}{2} mgl (\\theta_1^2 + \\theta_2^2) + \\frac{1}{2} k a^2 (\\theta_1 - \\theta_2)^2
\\end{align}
$$

简正频率：

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
L = \\frac{1}{2} \\sum_{\\alpha=1}^s (\\dot{Q}_\\alpha^2 - \\omega_\\alpha^2 Q_\\alpha^2)
\\end{align}
$$

即系统分解为 $s$ 个独立的简谐振子。

### 寻找简正坐标的方法

1. **线性代数法**：求解广义本征值问题 $\\boldsymbol{K} \\boldsymbol{a} = \\omega^2 \\boldsymbol{M} \\boldsymbol{a}$
2. **物理直觉法**：对于对称系统，可猜测简正坐标（如同相和反相运动）
3. **二次型对角化**：将 $T$ 和 $V$ 的二次型同时对角化

### 简正坐标的物理意义

- 每个简正坐标对应一个独立的振动模式
- 各简正模式之间没有能量交换
- 系统的任意运动可表示为简正模式的线性叠加
- 简正频率与初始条件无关

## 多自由度体系的一般理论

对于 $s$ 个自由度的保守体系，拉格朗日函数可写为

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

代入简谐解，得广义本征值问题

$$
\\begin{align}
\\sum_j (k_{ij} - \\omega^2 m_{ij}) A_j = 0
\\end{align}
$$

久期方程 $\\det(\\boldsymbol{K} - \\omega^2 \\boldsymbol{M}) = 0$ 给出 $s$ 个简正频率。

## 一维晶格的纵振动

### 离散模型

考虑一维单原子链，原子间距 $a$，质量 $m$，弹簧劲度系数 $k$。第 $n$ 个原子的运动方程为

$$
\\begin{align}
m \\ddot{u}_n = k(u_{n+1} - 2u_n + u_{n-1})
\\end{align}
$$

设简谐解 $u_n = A e^{\\mathrm{i}(qna - \\omega t)}$，代入得色散关系：

$$
\\begin{align}
\\omega^2 = \\frac{4k}{m} \\sin^2\\left(\\frac{qa}{2}\\right)
\\end{align}
$$

### 连续极限

当 $qa \\ll 1$ 时，$\\omega \\approx a\\sqrt{k/m} \\, q$，声速 $v = a\\sqrt{k/m}$。此时离散晶格趋于连续弹性介质。

### 声子概念

格波量子化后的能量量子称为**声子**。声子是玻色子，遵循玻色-爱因斯坦统计。

## 小结

- 多自由度体系在稳定平衡附近的微振动可线性化为简谐振动问题
- 简正频率由广义本征值方程 $\\det(\\boldsymbol{K} - \\omega^2 \\boldsymbol{M}) = 0$ 给出
- 简正坐标使系统解耦为独立谐振子
- 一维晶格的色散关系 $\\omega^2 = (4k/m)\\sin^2(qa/2)$
`,_={title:"多自由度体系的微振动",author:"NeoWangKing",date:new Date(17762976e5),lastMod:new Date(1782646561e3),tags:["物理","理论力学","微振动","简正坐标","简正频率","一维晶格"],category:["物理","理论力学"],summary:"本文讨论多自由度保守体系在平衡位置附近的微振动，包括拉格朗日方法的线性化、久期方程的建立与求解、简正坐标与简正频率的概念，以及一维晶格纵振动的离散模型和色散关系。",comments:!0,draft:!1,sticky:0},o={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/06-Small-Vibrations.md",rawData:void 0};export{o as _internal,e as body,a as collection,_ as data,n as id,$ as slug};
