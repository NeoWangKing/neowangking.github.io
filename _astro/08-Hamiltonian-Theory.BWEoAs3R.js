const a="physics/TheoreticalMechanics/08-Hamiltonian-Theory.md",n="posts",t="physics/theoreticalmechanics/08-hamiltonian-theory",$=`
## 哈密顿正则方程

### 广义动量与哈密顿函数

对于保守体系，定义**广义动量**（正则动量）

$$
\\begin{align}
p_\\alpha = \\frac{\\partial L}{\\partial \\dot{q}_\\alpha}
\\end{align}
$$

**哈密顿函数** $H(q,p,t)$ 通过勒让德变换定义为

$$
\\begin{align}
H = \\sum_{\\alpha=1}^s p_\\alpha \\dot{q}_\\alpha - L
\\end{align}
$$

$H$ 是 $(q_\\alpha, p_\\alpha, t)$ 的函数，与拉格朗日函数 $L(q, \\dot{q}, t)$ 等价但视角不同。

### 哈密顿函数与能量的关系

当约束稳定且势能与速度无关时，动能 $T$ 是 $\\dot{q}$ 的二次齐次函数：

$$
\\begin{align}
\\sum_\\alpha p_\\alpha \\dot{q}_\\alpha = 2T
\\end{align}
$$

因此 $H = 2T - (T - V) = T + V$，即系统的机械能。若条件不满足，$H$ 是广义能量。

### 哈密顿正则方程

$$
\\begin{align}
\\dot{q}_\\alpha = \\frac{\\partial H}{\\partial p_\\alpha}, \\quad \\dot{p}_\\alpha = -\\frac{\\partial H}{\\partial q_\\alpha}, \\quad \\alpha = 1, 2, \\dots, s
\\end{align}
$$

### 相空间

相空间是由 $(q_\\alpha, p_\\alpha)$ 张成的 $2s$ 维空间。系统状态对应相空间中的一个点，演化对应一条相轨迹。

**重要性质**：若 $H$ 不显含时间，相轨迹不相交。

**刘维尔定理**：在哈密顿正则方程支配下，相空间中的体积元在演化过程中保持不变。

## 变分法与哈密顿原理

### 欧拉-拉格朗日方程

泛函 $J[y] = \\int_{x_1}^{x_2} F(x, y, y') \\,\\mathrm{d}x$ 取极值的必要条件为

$$
\\begin{align}
\\frac{\\partial F}{\\partial y} - \\frac{\\mathrm{d}}{\\mathrm{d}x} \\frac{\\partial F}{\\partial y'} = 0
\\end{align}
$$

若 $F$ 不显含 $x$，存在初积分 $F - y' \\dfrac{\\partial F}{\\partial y'} = \\text{常数}$。

### 哈密顿原理

哈密顿作用量：

$$
\\begin{align}
S = \\int_{t_1}^{t_2} L(q, \\dot{q}, t) \\,\\mathrm{d}t
\\end{align}
$$

哈密顿原理：$\\delta S = 0$，真实运动使作用量取极值。

由 $\\delta S = 0$ 可导出：

- 位形空间：拉格朗日方程
- 相空间：哈密顿正则方程

### 莫培督原理（等能变分）

$$
\\begin{align}
\\delta \\int \\sum_\\alpha p_\\alpha \\,\\mathrm{d}q_\\alpha = 0
\\end{align}
$$

适用于能量固定的情况，适合分析轨道问题。

## 正则变换

### 定义

正则变换 $(q,p) \\to (Q,P)$ 保持正则方程的形式不变。

### 四类母函数

|    母函数    | 自变量  |                            变换公式                            |             $H'$ 关系              |
| :----------: | :-----: | :------------------------------------------------------------: | :--------------------------------: |
| $F_1(q,Q,t)$ | $(q,Q)$ | $p = \\partial F_1/\\partial q$，$P = -\\partial F_1/\\partial Q$  | $H' = H + \\partial F_1/\\partial t$ |
| $F_2(q,P,t)$ | $(q,P)$ |  $p = \\partial F_2/\\partial q$，$Q = \\partial F_2/\\partial P$  | $H' = H + \\partial F_2/\\partial t$ |
| $F_3(p,Q,t)$ | $(p,Q)$ | $q = -\\partial F_3/\\partial p$，$P = -\\partial F_3/\\partial Q$ | $H' = H + \\partial F_3/\\partial t$ |
| $F_4(p,P,t)$ | $(p,P)$ | $q = -\\partial F_4/\\partial p$，$Q = \\partial F_4/\\partial P$  | $H' = H + \\partial F_4/\\partial t$ |

### 用泊松括号判别正则变换

变换是正则变换的充要条件：

$$
\\begin{align}
[Q_\\alpha, Q_\\beta]_{q,p} = 0, \\quad [P_\\alpha, P_\\beta]_{q,p} = 0, \\quad [Q_\\alpha, P_\\beta]_{q,p} = \\delta_{\\alpha\\beta}
\\end{align}
$$

## 泊松括号

### 定义

$$
\\begin{align}
[f, g] = \\sum_{\\alpha=1}^s \\left( \\frac{\\partial f}{\\partial q_\\alpha} \\frac{\\partial g}{\\partial p_\\alpha} - \\frac{\\partial f}{\\partial p_\\alpha} \\frac{\\partial g}{\\partial q_\\alpha} \\right)
\\end{align}
$$

### 力学量的时间演化

$$
\\begin{align}
\\frac{\\mathrm{d}f}{\\mathrm{d}t} = [f, H] + \\frac{\\partial f}{\\partial t}
\\end{align}
$$

### 运动积分判据

不显含时间的 $f$ 是运动积分 $\\iff [f, H] = 0$。

### 基本性质

- **反对称性**：$[f, g] = -[g, f]$
- **双线性**：$[af + bg, h] = a[f, h] + b[g, h]$
- **莱布尼茨法则**：$[fg, h] = f[g, h] + [f, h]g$
- **基本泊松括号**：$[q_\\alpha, q_\\beta] = [p_\\alpha, p_\\beta] = 0$，$[q_\\alpha, p_\\beta] = \\delta_{\\alpha\\beta}$
- **雅可比恒等式**：$[f, [g, h]] + [g, [h, f]] + [h, [f, g]] = 0$

### 泊松定理

若 $f$ 和 $g$ 均为运动积分，则 $[f, g]$ 也是运动积分。

## 哈密顿-雅可比方程

### 哈密顿主函数

选择第二类母函数 $S(q, P, t)$（哈密顿主函数），令 $H' = 0$：

$$
\\begin{align}
H\\left(q_1, \\dots, q_s, \\frac{\\partial S}{\\partial q_1}, \\dots, \\frac{\\partial S}{\\partial q_s}, t\\right) + \\frac{\\partial S}{\\partial t} = 0
\\end{align}
$$

这就是**哈密顿-雅可比方程**。

### 哈密顿特征函数

若 $H$ 不显含时间（能量守恒），设 $S = W(q, P) - E(P)t$：

$$
\\begin{align}
H\\left(q, \\frac{\\partial W}{\\partial q}\\right) = E(P)
\\end{align}
$$

$W$ 称为哈密顿特征函数。

### 分离变量法

若哈密顿函数可分离变量，设 $W = W_1(q_1) + \\cdots + W_s(q_s)$，代入哈-雅方程后得到 $s$ 个常微分方程。

### 由 $S$ 求运动

1. **轨道方程**：$\\partial S / \\partial P_\\alpha = \\text{常数}$
2. **运动方程**：$\\partial S / \\partial E = t - t_0$
3. **动量**：$p_\\alpha = \\partial S / \\partial q_\\alpha$

### 作用量-角变量

对于周期运动系统：

$$
\\begin{align}
J = \\oint p \\,\\mathrm{d}q
\\end{align}
$$

$J$ 是运动积分（绝热不变量），角变量 $\\dot{w} = \\nu = \\partial H / \\partial J$。

## 小结

- 哈密顿正则方程：$\\dot{q} = \\partial H / \\partial p$，$\\dot{p} = -\\partial H / \\partial q$
- 哈密顿原理：$\\delta S = 0$，是力学的第一性原理
- 正则变换保持正则方程形式不变，四类母函数生成所有正则变换
- 泊松括号是相空间的基本代数结构，运动积分判据 $[f, H] = 0$
- 哈密顿-雅可比方程 $H(q, \\partial S / \\partial q, t) + \\partial S / \\partial t = 0$ 是求解力学问题的最一般方法
`,l={title:"经典力学的哈密顿理论",author:"NeoWangKing",date:new Date(1779408e6),lastMod:new Date(1782646738e3),tags:["物理","理论力学","哈密顿力学","正则方程","正则变换","泊松括号","哈密顿-雅可比方程"],category:["物理","理论力学"],summary:"本文是哈密顿理论的核心笔记，系统介绍从拉格朗日力学到哈密顿力学的过渡，包括正则方程、哈密顿原理、变分法、正则变换与四类母函数、泊松括号及其性质、哈密顿-雅可比方程与分离变量法，以及作用量-角变量理论。",comments:!0,draft:!1,sticky:0,chapter:8},p={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/08-Hamiltonian-Theory.md",rawData:void 0};export{p as _internal,$ as body,n as collection,l as data,a as id,t as slug};
