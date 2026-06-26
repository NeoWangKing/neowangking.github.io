const n="physics/TheoreticalMechanics/19-Poisson-Brackets.md",a="posts",$="physics/theoreticalmechanics/19-poisson-brackets",t=`
## 泊松括号的定义

在哈密顿力学中，对于任意两个力学量 $f(q,p,t)$ 和 $g(q,p,t)$，定义其**泊松括号**为

$$
\\begin{align}
[f, g] = \\sum_{\\alpha=1}^s \\left( \\frac{\\partial f}{\\partial q_\\alpha} \\frac{\\partial g}{\\partial p_\\alpha} - \\frac{\\partial f}{\\partial p_\\alpha} \\frac{\\partial g}{\\partial q_\\alpha} \\right)
\\end{align}
$$

泊松括号是哈密顿力学中最基本的数学结构之一，它反映了相空间中函数之间的代数关系。

## 力学量的运动方程与运动积分

### 力学量的时间演化

任意力学量 $f(q,p,t)$ 对时间的全导数为

$$
\\begin{align}
\\frac{\\mathrm{d}f}{\\mathrm{d}t} = \\sum_\\alpha \\left( \\frac{\\partial f}{\\partial q_\\alpha} \\dot{q}_\\alpha + \\frac{\\partial f}{\\partial p_\\alpha} \\dot{p}_\\alpha \\right) + \\frac{\\partial f}{\\partial t}
\\end{align}
$$

利用哈密顿正则方程 $\\dot{q}_\\alpha = \\partial H / \\partial p_\\alpha$，$\\dot{p}_\\alpha = -\\partial H / \\partial q_\\alpha$，可得

$$
\\begin{align}
\\frac{\\mathrm{d}f}{\\mathrm{d}t} = [f, H] + \\frac{\\partial f}{\\partial t}
\\end{align}
$$

若 $f$ 不显含时间，则 $\\dfrac{\\mathrm{d}f}{\\mathrm{d}t} = [f, H]$。

### 运动积分的判据

**运动积分**（守恒量）是指在运动过程中保持常数的力学量。对于不显含时间的 $f$，它是运动积分当且仅当

$$
\\begin{align}
[f, H] = 0
\\end{align}
$$

特别地，对于哈密顿函数本身，$[H, H] = 0$，因此若 $H$ 不显含时间，则能量守恒。

## 泊松括号的基本性质

泊松括号具有以下重要性质：

1. **反对称性**：$[f, g] = -[g, f]$

2. **双线性**：$[af + bg, h] = a[f, h] + b[g, h]$（$a,b$ 为常数）

3. **莱布尼茨法则**（乘积法则）：

   $$
   \\begin{align}
   [fg, h] = f[g, h] + [f, h]g
   \\end{align}
   $$

4. **基本泊松括号**：

   $$
   \\begin{align}
   [q_\\alpha, q_\\beta] = 0, \\quad [p_\\alpha, p_\\beta] = 0, \\quad [q_\\alpha, p_\\beta] = \\delta_{\\alpha\\beta}
   \\end{align}
   $$

5. **雅可比恒等式**：
   $$
   \\begin{align}
   [f, [g, h]] + [g, [h, f]] + [h, [f, g]] = 0
   \\end{align}
   $$

雅可比恒等式是泊松括号最重要的代数性质，它保证了泊松括号定义了相空间上的李代数结构。

## 泊松定理

**泊松定理**：若 $f$ 和 $g$ 都是运动积分，则 $[f, g]$ 也是运动积分。

**证明**：

$$
\\begin{align}
[[f, g], H] = -[g, [H, f]] - [f, [g, H]] = 0
\\end{align}
$$

其中第一步用到雅可比恒等式 $[f, [g, H]] + [g, [H, f]] + [H, [f, g]] = 0$，第二步用到 $[f, H]=[g, H]=0$。

泊松定理提供了一种从已知运动积分构造新运动积分的方法，在经典力学中具有重要意义。

## 应用实例

### 例1：中心势场中的角动量

对于质点在中心势场 $V(r)$ 中的运动，哈密顿函数为 $H = \\dfrac{p^2}{2m} + V(r)$。直角坐标系中的角动量为

$$
\\begin{align}
L_x = y p_z - z p_y, \\quad L_y = z p_x - x p_z, \\quad L_z = x p_y - y p_x
\\end{align}
$$

可以验证：

$$
\\begin{align}
[L_x, H] = 0, \\quad [L_y, H] = 0, \\quad [L_z, H] = 0
\\end{align}
$$

因此三个角动量分量均为运动积分。

进一步，角动量分量之间的泊松括号为

$$
\\begin{align}
[L_x, L_y] = L_z, \\quad [L_y, L_z] = L_x, \\quad [L_z, L_x] = L_y
\\end{align}
$$

这正是 $SO(3)$ 李代数的结构关系。

### 例2：平面谐振子的角动量守恒

二维各向同性谐振子的哈密顿函数为

$$
\\begin{align}
H = \\frac{p_x^2 + p_y^2}{2m} + \\frac{1}{2} m \\omega^2 (x^2 + y^2)
\\end{align}
$$

角动量 $L_z = x p_y - y p_x$。计算泊松括号：

$$
\\begin{align}
[L_z, H] = 0
\\end{align}
$$

因此角动量守恒。这是空间旋转对称性的结果。

若频率各向异性（$\\omega_x \\neq \\omega_y$），则 $[L_z, H] \\neq 0$，角动量不守恒。

### 例3：用泊松括号证明正则变换

泊松括号在正则变换中具有不变性：变换 $(q,p) \\to (Q,P)$ 是正则变换的充要条件是

$$
\\begin{align}
[Q_\\alpha, Q_\\beta]_{q,p} = 0, \\quad [P_\\alpha, P_\\beta]_{q,p} = 0, \\quad [Q_\\alpha, P_\\beta]_{q,p} = \\delta_{\\alpha\\beta}
\\end{align}
$$

即基本泊松括号在变换下保持不变。

## 泊松括号与量子力学

泊松括号在量子力学中具有重要地位。在正则量子化中，经典泊松括号 $[f, g]$ 对应量子力学中的对易子 $[ \\hat{f}, \\hat{g} ] / (\\mathrm{i}\\hbar)$：

$$
\\begin{align}
[f, g] \\quad \\longrightarrow \\quad \\frac{1}{\\mathrm{i}\\hbar} [\\hat{f}, \\hat{g}]
\\end{align}
$$

特别是基本泊松括号 $[q, p] = 1$ 对应海森堡对易关系 $[\\hat{q}, \\hat{p}] = \\mathrm{i}\\hbar$。

## 小结

- 泊松括号 $[f, g] = \\sum_\\alpha (\\partial f / \\partial q_\\alpha \\partial g / \\partial p_\\alpha - \\partial f / \\partial p_\\alpha \\partial g / \\partial q_\\alpha)$
- 力学量的时间演化：$\\mathrm{d}f / \\mathrm{d}t = [f, H] + \\partial f / \\partial t$
- 运动积分判据：$[f, H] = 0$
- 泊松定理：运动积分的泊松括号仍是运动积分
- 正则变换保持基本泊松括号不变
- 泊松括号是经典力学与量子力学的桥梁（正则量子化）
`,l={title:"泊松括号",author:"NeoWangKing",date:new Date(1780679989e3),lastMod:new Date(1782494403e3),tags:["物理","理论力学","泊松括号","运动积分","正则变换"],category:["物理","理论力学"],summary:"本文介绍哈密顿力学中的泊松括号，包括定义、基本性质、雅可比恒等式，以及泊松括号在判断运动积分、证明正则变换和构建新守恒量中的应用。",comments:!0,draft:!1,sticky:0},i={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/19-Poisson-Brackets.md",rawData:void 0};export{i as _internal,t as body,a as collection,l as data,n as id,$ as slug};
