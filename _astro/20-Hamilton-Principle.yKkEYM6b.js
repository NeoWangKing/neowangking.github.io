const n="physics/TheoreticalMechanics/20-Hamilton-Principle.md",a="posts",t="physics/theoreticalmechanics/20-hamilton-principle",i=`
## 变分原理的基本思想

变分原理提供一种准则，将力学系统的**真实运动**与约束所允许的**一切可能运动**区别开来。理论物理学的目标是：从物理学的经验规律出发，构建一个理性的世界，通过逻辑演绎推理出各种性质，再与经验事实比较。

### 变分法的回顾

泛函 $J[y] = \\int_{x_1}^{x_2} F(x, y, y') \\,\\mathrm{d}x$ 取极值的必要条件为欧拉-拉格朗日方程

$$
\\begin{align}
\\frac{\\partial F}{\\partial y} - \\frac{\\mathrm{d}}{\\mathrm{d}x} \\frac{\\partial F}{\\partial y'} = 0
\\end{align}
$$

当 $F$ 不显含 $x$ 时，存在初积分 $F - y' \\dfrac{\\partial F}{\\partial y'} = \\text{常数}$。

## 哈密顿原理

### 位形空间的表述

**哈密顿原理**（哈密顿最小作用量原理）：对于具有相同时间间隔和相同始末位置的一切可能运动中，真实运动的哈密顿作用量取极值（通常为极小值）。

哈密顿作用量定义为

$$
\\begin{align}
S = \\int_{t_1}^{t_2} L(q, \\dot{q}, t) \\,\\mathrm{d}t
\\end{align}
$$

其中 $L = T - V$ 是拉格朗日函数。

在 $2s+1$ 维空间中做端点 $A$ 和 $B$ 固定的等时变分：

$$
\\begin{align}
\\delta S = \\delta \\int_{t_1}^{t_2} L(q, \\dot{q}, t) \\,\\mathrm{d}t = 0
\\end{align}
$$

由 $\\delta S = 0$ 可直接导出拉格朗日方程：

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t} \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} - \\frac{\\partial L}{\\partial q_\\alpha} = 0
\\end{align}
$$

### 相空间的表述

在相空间中，作用量泛函定义为

$$
\\begin{align}
S = \\int_{t_1}^{t_2} \\left[ \\sum_\\alpha p_\\alpha \\dot{q}_\\alpha - H(q, p, t) \\right] \\mathrm{d}t
\\end{align}
$$

将 $q_\\alpha$ 和 $p_\\alpha$ 视为独立变量，由 $\\delta S = 0$ 可导出哈密顿正则方程：

$$
\\begin{align}
\\dot{q}_\\alpha = \\frac{\\partial H}{\\partial p_\\alpha}, \\quad \\dot{p}_\\alpha = -\\frac{\\partial H}{\\partial q_\\alpha}
\\end{align}
$$

因此，哈密顿原理与正则方程等价，也与拉格朗日方程等价。

## 哈密顿原理的物理图像

以自由落体为例：质点从 $A$ 点自由下落到 $B$ 点。在所有可能的路径中：

- 真实路径（自由落体）使哈密顿作用量取极小值
- 其他路径（如匀速运动、分段变速运动等）的作用量均大于真实路径

**重要结论**：在所有可能路径中，只有真实路径的能量才是守恒的。

## 哈密顿原理与莫培督原理的比较

### 莫培督原理（1744）

对于完整、保守力学体系，在位形空间确定的始末位置之间一切可能的运动中，真实运动的作用量 $W$ 具有极小值：

$$
\\begin{align}
\\delta W = \\delta \\int \\sum_\\alpha p_\\alpha \\,\\mathrm{d}q_\\alpha = 0
\\end{align}
$$

### 两种原理的区别

|            |        莫培督原理        |        哈密顿原理        |
| :--------: | :----------------------: | :----------------------: |
|  变分条件  | 等能而不等时（能量固定） | 等时而不等能（时间固定） |
|  适用场景  |     适合分析轨道问题     |    适合建立动力学方程    |
| 与理论衔接 |      与几何光学类比      |  直接与拉格朗日理论衔接  |

哈密顿原理因其与拉格朗日方程的直接衔接而被普遍采用。

## 力学原理的分类

1. **不变分原理**：反映力学系统真实运动的普遍规律（如牛顿定律）
2. **变分原理**：提供一种准则，将真实运动与一切可能运动区分开来

哈密顿原理属于变分原理，它通过作用量泛函的极值条件筛选出真实运动。

## 泛函极值的其他方法

### Ritz 变分法

Ritz 变分法缩小搜索范围，在特定的函数族中寻找泛函的极值。例如，设函数集合中的泛函为 $J[y] = \\int_a^b F(x, y, y') \\,\\mathrm{d}x$，通过选择参数化的试探函数，将泛函极值问题转化为函数极值问题。

### 拉格朗日不定乘子法

对于带约束的泛函极值问题，可引入拉格朗日乘子将条件极值转化为无条件极值。

**例（最大熵）**：在归一化和均值固定的约束下，求熵 $S = -\\int p(x) \\ln p(x) \\,\\mathrm{d}x$ 的极值。引入拉格朗日乘子后可得玻尔兹曼分布。

## 哈密顿原理的意义

哈密顿原理是理论物理中最基本的**第一性原理**之一：

- 它是拉格朗日方程和哈密顿方程的**逻辑基础**
- 它将全部力学归结为一个**标量泛函**的极值问题
- 它可推广到场论、量子力学（费曼路径积分）、广义相对论等领域
- 它体现了物理学中对**简洁与统一**的追求

## 小结

- 哈密顿作用量：$S = \\int_{t_1}^{t_2} L \\,\\mathrm{d}t = \\int_{t_1}^{t_2} (\\sum p_\\alpha \\dot{q}_\\alpha - H) \\,\\mathrm{d}t$
- 哈密顿原理：$\\delta S = 0$，真实运动使作用量取极值
- 由哈密顿原理可导出拉格朗日方程或正则方程
- 莫培督原理是等能变分，哈密顿原理是等时变分
- 哈密顿原理是第一性原理，可推广到物理学的各个分支
`,l={title:"哈密顿原理",author:"NeoWangKing",date:new Date(178102563e4),lastMod:new Date(1782494446e3),tags:["物理","理论力学","哈密顿原理","最小作用量","变分原理"],category:["物理","理论力学"],summary:"本文介绍哈密顿最小作用量原理，包括位形空间和相空间中的表述、由哈密顿原理推导拉格朗日方程和正则方程，以及与莫培督原理的比较。",comments:!0,draft:!1,sticky:0},$={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/20-Hamilton-Principle.md",rawData:void 0};export{$ as _internal,i as body,a as collection,l as data,n as id,t as slug};
