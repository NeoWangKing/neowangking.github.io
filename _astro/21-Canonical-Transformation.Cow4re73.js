const a="physics/TheoreticalMechanics/21-Canonical-Transformation.md",n="posts",$="physics/theoreticalmechanics/21-canonical-transformation",l=`
## 正则变换的动机

在拉格朗日力学中，广义坐标的选取是任意的（拉格朗日方程具有协变性）。在哈密顿力学中，我们不仅希望变换坐标 $q \\to Q$，还希望变换动量 $p \\to P$，同时保持正则方程的形式不变。

**正则变换**：从 $(q,p)$ 到 $(Q,P)$ 的变换，使得变换后正则方程的形式保持不变：

$$
\\begin{align}
\\dot{Q}_\\alpha = \\frac{\\partial H'}{\\partial P_\\alpha}, \\quad \\dot{P}_\\alpha = -\\frac{\\partial H'}{\\partial Q_\\alpha}
\\end{align}
$$

其中 $H'(Q,P,t)$ 是变换后的哈密顿函数。

## 正则变换的条件

### 从哈密顿原理出发

变换前：

$$
\\begin{align}
\\delta \\int_{t_1}^{t_2} \\left( \\sum_\\alpha p_\\alpha \\dot{q}_\\alpha - H \\right) \\mathrm{d}t = 0
\\end{align}
$$

变换后：

$$
\\begin{align}
\\delta \\int_{t_1}^{t_2} \\left( \\sum_\\alpha P_\\alpha \\dot{Q}_\\alpha - H' \\right) \\mathrm{d}t = 0
\\end{align}
$$

两式相减，被积函数之差必须为一个全导数：

$$
\\begin{align}
\\sum_\\alpha p_\\alpha \\mathrm{d}q_\\alpha - H \\mathrm{d}t = \\sum_\\alpha P_\\alpha \\mathrm{d}Q_\\alpha - H' \\mathrm{d}t + \\mathrm{d}F
\\end{align}
$$

其中 $F$ 称为**正则变换的母函数**。

## 四类母函数

### 第一类母函数 $F_1(q, Q, t)$

若母函数取为 $F_1(q, Q, t)$，则 $\\mathrm{d}F_1 = \\sum_\\alpha \\dfrac{\\partial F_1}{\\partial q_\\alpha} \\mathrm{d}q_\\alpha + \\sum_\\alpha \\dfrac{\\partial F_1}{\\partial Q_\\alpha} \\mathrm{d}Q_\\alpha + \\dfrac{\\partial F_1}{\\partial t} \\mathrm{d}t$。比较系数得

$$
\\begin{align}
p_\\alpha = \\frac{\\partial F_1}{\\partial q_\\alpha}, \\quad P_\\alpha = -\\frac{\\partial F_1}{\\partial Q_\\alpha}, \\quad H' = H + \\frac{\\partial F_1}{\\partial t}
\\end{align}
$$

### 第二类母函数 $F_2(q, P, t)$

通过勒让德变换 $F_2 = F_1 + \\sum_\\alpha P_\\alpha Q_\\alpha$，可得

$$
\\begin{align}
p_\\alpha = \\frac{\\partial F_2}{\\partial q_\\alpha}, \\quad Q_\\alpha = \\frac{\\partial F_2}{\\partial P_\\alpha}, \\quad H' = H + \\frac{\\partial F_2}{\\partial t}
\\end{align}
$$

### 第三类母函数 $F_3(p, Q, t)$

通过勒让德变换 $F_3 = F_1 - \\sum_\\alpha p_\\alpha q_\\alpha$，可得

$$
\\begin{align}
q_\\alpha = -\\frac{\\partial F_3}{\\partial p_\\alpha}, \\quad P_\\alpha = -\\frac{\\partial F_3}{\\partial Q_\\alpha}, \\quad H' = H + \\frac{\\partial F_3}{\\partial t}
\\end{align}
$$

### 第四类母函数 $F_4(p, P, t)$

通过勒让德变换 $F_4 = F_1 + \\sum_\\alpha P_\\alpha Q_\\alpha - \\sum_\\alpha p_\\alpha q_\\alpha$，可得

$$
\\begin{align}
q_\\alpha = -\\frac{\\partial F_4}{\\partial p_\\alpha}, \\quad Q_\\alpha = \\frac{\\partial F_4}{\\partial P_\\alpha}, \\quad H' = H + \\frac{\\partial F_4}{\\partial t}
\\end{align}
$$

### 母函数记忆规律

| 母函数 |  自变量  |            $q$ 变换            |            $p$ 变换            |           $H'$ 关系            |
| :----: | :------: | :----------------------------: | :----------------------------: | :----------------------------: |
| $F_1$  | $(q, Q)$ | $p = \\partial F_1/\\partial q$  | $P = -\\partial F_1/\\partial Q$ | $H'=H+\\partial F_1/\\partial t$ |
| $F_2$  | $(q, P)$ | $p = \\partial F_2/\\partial q$  | $Q = \\partial F_2/\\partial P$  | $H'=H+\\partial F_2/\\partial t$ |
| $F_3$  | $(p, Q)$ | $q = -\\partial F_3/\\partial p$ | $P = -\\partial F_3/\\partial Q$ | $H'=H+\\partial F_3/\\partial t$ |
| $F_4$  | $(p, P)$ | $q = -\\partial F_4/\\partial p$ | $Q = \\partial F_4/\\partial P$  | $H'=H+\\partial F_4/\\partial t$ |

## 正则变换的应用：构造循环坐标

正则变换的核心目的是将问题简化。如果能够找到这样的变换，使得新的哈密顿函数 $H'$ 不显含某些 $Q_\\alpha$（即 $Q_\\alpha$ 为循环坐标），则对应的 $P_\\alpha$ 守恒，问题大大简化。

### 例：一维谐振子

一维谐振子的哈密顿函数为

$$
\\begin{align}
H = \\frac{p^2}{2m} + \\frac{1}{2} m \\omega^2 q^2
\\end{align}
$$

若选取适当的母函数进行正则变换，使得 $H'$ 仅依赖于 $P$（不显含 $Q$），则 $Q$ 为循环坐标，$P$ 守恒，运动方程可直接积分。

## 用泊松括号判别正则变换

变换 $(q,p) \\to (Q,P)$ 是正则变换的充要条件是基本泊松括号保持不变：

$$
\\begin{align}
[Q_\\alpha, Q_\\beta]_{q,p} = 0, \\quad [P_\\alpha, P_\\beta]_{q,p} = 0, \\quad [Q_\\alpha, P_\\beta]_{q,p} = \\delta_{\\alpha\\beta}
\\end{align}
$$

其中泊松括号 $[f, g]_{q,p}$ 是在原变量 $(q,p)$ 中计算的。

**例**：证明变换 $Q = \\dfrac{1}{2}(q^2 + p^2)$，$P = \\arctan(q/p)$ 是正则变换。

可直接计算 $[Q, P] = 1$，$[Q, Q] = [P, P] = 0$，因此是正则变换。

## 正则变换的物理意义

- 正则变换将相空间坐标进行重新参数化，同时保持哈密顿方程的结构
- 在正则变换下，广义坐标和广义动量的角色可以互换（$q$ 和 $p$ 是对等的）
- 任何一对力学量 $p,q$，只要其乘积具有作用量的量纲，均可视为正则变量
- 能量 $E$ 和时间 $t$ 也是一对共轭的正则变量

## 小结

- 正则变换保持正则方程的形式不变
- 四类母函数 $F_1(q,Q)$、$F_2(q,P)$、$F_3(p,Q)$、$F_4(p,P)$ 生成所有正则变换
- 通过正则变换构造循环坐标是简化哈密顿问题的核心方法
- 泊松括号不变性是判别正则变换的充要条件
- 正则变换揭示了哈密顿力学中坐标和动量的对称性
`,t={title:"正则变换",author:"NeoWangKing",date:new Date(1781284858e3),lastMod:new Date(1782494466e3),tags:["物理","理论力学","正则变换","母函数","哈密顿理论"],category:["物理","理论力学"],summary:"本文介绍哈密顿力学中的正则变换，包括正则变换的定义与条件、四类母函数及其对应的变换公式、正则变换在构造循环坐标中的应用，以及利用泊松括号判别正则变换的方法。",comments:!0,draft:!1,sticky:0},p={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/21-Canonical-Transformation.md",rawData:void 0};export{p as _internal,l as body,n as collection,t as data,a as id,$ as slug};
