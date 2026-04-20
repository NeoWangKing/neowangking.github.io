const a="physics/TheoreticalMechanics/7-Symmetry-and-Conservation-Laws.md",n="posts",t="physics/theoreticalmechanics/7-symmetry-and-conservation-laws",l=`
## 运动积分

在力学中，**运动积分**是指关于坐标、速度和时间的一个函数，在运动过程中保持常数。常见的运动积分有能量、动量、角动量等，它们是守恒定律的具体体现。

## 广义能量积分

### 拉格朗日函数不显含时间

若拉格朗日函数 $L(q,\\dot{q},t)$ 不显含时间 $t$，即 $\\partial L / \\partial t = 0$，则存在广义能量积分。对 $L$ 求时间的全导数：

$$
\\begin{align}
\\frac{\\mathrm{d}L}{\\mathrm{d}t} = \\sum_\\alpha \\left( \\frac{\\partial L}{\\partial q_\\alpha} \\dot{q}_\\alpha + \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} \\ddot{q}_\\alpha \\right)
\\end{align}
$$

利用拉格朗日方程 $\\dfrac{\\mathrm{d}}{\\mathrm{d}t} \\dfrac{\\partial L}{\\partial \\dot{q}_\\alpha} = \\dfrac{\\partial L}{\\partial q_\\alpha}$，可得

$$
\\begin{align}
\\frac{\\mathrm{d}L}{\\mathrm{d}t} = \\sum_\\alpha \\left( \\frac{\\mathrm{d}}{\\mathrm{d}t} \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} \\dot{q}_\\alpha + \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} \\ddot{q}_\\alpha \\right) = \\frac{\\mathrm{d}}{\\mathrm{d}t} \\left( \\sum_\\alpha \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} \\dot{q}_\\alpha \\right)
\\end{align}
$$

因此

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t} \\left( \\sum_\\alpha \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} \\dot{q}_\\alpha - L \\right) = 0
\\end{align}
$$

定义**广义能量** $H = \\sum_\\alpha \\dfrac{\\partial L}{\\partial \\dot{q}_\\alpha} \\dot{q}_\\alpha - L$，则 $H$ 为常数。

### 广义能量与机械能的关系

当约束为稳定约束（即 $\\partial \\boldsymbol{r}_i / \\partial t = 0$）且势能 $V$ 与速度无关时，动能 $T$ 是广义速度的二次齐次函数。根据欧拉齐次函数定理，

$$
\\begin{align}
\\sum_\\alpha \\frac{\\partial T}{\\partial \\dot{q}_\\alpha} \\dot{q}_\\alpha = 2T
\\end{align}
$$

此时 $H = 2T - (T - V) = T + V$，即系统的机械能。因此：

- **广义能量守恒**的条件：拉格朗日函数不显含时间（仅此一条）
- **机械能守恒**的条件：稳定约束 + 势能与速度无关 + 拉格朗日函数不显含时间

## 循环坐标与广义动量守恒

### 循环坐标的定义

若拉格朗日函数 $L$ 不显含某个广义坐标 $q_\\alpha$（即 $\\partial L / \\partial q_\\alpha = 0$），则称 $q_\\alpha$ 为**循环坐标**。

### 广义动量守恒

由拉格朗日方程，若 $q_\\alpha$ 为循环坐标，则

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t} \\left( \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} \\right) = \\frac{\\partial L}{\\partial q_\\alpha} = 0
\\end{align}
$$

因此

$$
\\begin{align}
p_\\alpha = \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} = \\text{常数}
\\end{align}
$$

$p_\\alpha$ 称为**广义动量**。循环坐标对应的广义动量守恒。

**例**：在中心势场中，拉格朗日函数 $L = \\frac{1}{2} m (\\dot{r}^2 + r^2 \\dot{\\theta}^2) - V(r)$ 不显含 $\\theta$，故 $\\theta$ 是循环坐标，广义动量 $p_\\theta = m r^2 \\dot{\\theta}$ 守恒，即角动量守恒。

## 对称性与守恒定律的深刻联系——诺特定理

### 对称性的概念

对称性是指体系的拉格朗日函数或运动方程在某种变换下保持不变。常见的对称性有：

- 空间平移对称性（均匀性）
- 空间旋转对称性（各向同性）
- 时间平移对称性（均匀性）

### 诺特定理

**诺特定理**（Noether's theorem）指出：如果拉格朗日函数在某种连续变换下保持不变，则必存在一个相应的守恒量。

|     对称性     |   守恒量   |
| :------------: | :--------: |
| 空间平移对称性 |  动量守恒  |
| 空间旋转对称性 | 角动量守恒 |
| 时间平移对称性 |  能量守恒  |

### 三种对称性的讨论

1. **空间平移对称性**：若拉格朗日函数不依赖于整体空间位置（即无外力场），则系统具有空间平移对称性，总动量守恒。

2. **空间旋转对称性**：若拉格朗日函数在整体旋转下不变，则总角动量守恒。在中心势场中，势能仅依赖于距离 $r$，绕力心的旋转不变性导致角动量守恒。

3. **时间平移对称性**：若拉格朗日函数不显含时间，则系统具有时间平移对称性，广义能量守恒。在稳定约束下，这就是机械能守恒。

### 诺特定理的数学表述

考虑一个单参数连续变换：

$$
\\begin{align}
q_\\alpha \\rightarrow q_\\alpha' = q_\\alpha + \\varepsilon \\psi_\\alpha(q,\\dot{q},t)
\\end{align}
$$

若在此变换下拉格朗日函数的变化为 $\\Delta L = \\varepsilon \\dfrac{\\mathrm{d}F}{\\mathrm{d}t}$（即一个全导数），则存在守恒量

$$
\\begin{align}
I = \\sum_\\alpha \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} \\psi_\\alpha - F = \\text{常数}
\\end{align}
$$

## 小结

- 拉格朗日函数不显含时间 → 广义能量守恒（稳定约束下即机械能守恒）
- 循环坐标 → 对应的广义动量守恒
- 诺特定理将对称性与守恒定律统一起来，揭示了物理定律的内在联系
- 守恒定律是简化力学问题的有力工具，可将二阶微分方程降阶为一阶积分
`,r={title:"对称性与守恒定律",author:"NeoWangKing",date:new Date(1775478562e3),lastMod:new Date(1775478562e3),tags:["物理","理论力学","对称性","守恒定律","诺特定理","拉格朗日函数"],category:["物理","理论力学"],summary:"本文介绍分析力学中的对称性与守恒定律，包括广义能量积分、循环坐标与广义动量守恒，以及诺特定理揭示的对称性与守恒量之间的深刻联系。",comments:!0,draft:!1,sticky:0},i={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/7-Symmetry-and-Conservation-Laws.md",rawData:void 0};export{i as _internal,l as body,n as collection,r as data,a as id,t as slug};
