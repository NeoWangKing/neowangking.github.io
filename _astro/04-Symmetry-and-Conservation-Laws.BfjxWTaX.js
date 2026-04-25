const a="physics/TheoreticalMechanics/04-Symmetry-and-Conservation-Laws.md",n="posts",t="physics/theoreticalmechanics/04-symmetry-and-conservation-laws",r=`
## 运动积分

在力学中，**运动积分**是指关于坐标、速度和时间的一个函数，在运动过程中保持常数。常见的运动积分有能量、动量、角动量等。它们通常是守恒定律的体现。

## 广义能量积分

若拉格朗日函数 $L(q,\\dot{q},t)$ 不显含时间 $t$，即 $\\partial L/\\partial t = 0$，则存在广义能量积分。对 $L$ 求时间的全导数：

$$
\\begin{align}
\\frac{\\mathrm{d}L}{\\mathrm{d}t} = \\sum_\\alpha \\left( \\frac{\\partial L}{\\partial q_\\alpha} \\dot{q}_\\alpha + \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} \\ddot{q}_\\alpha \\right)
\\end{align}
$$

利用拉格朗日方程 $\\frac{\\mathrm{d}}{\\mathrm{d}t}\\frac{\\partial L}{\\partial \\dot{q}_\\alpha} = \\frac{\\partial L}{\\partial q_\\alpha}$，可得

$$
\\begin{align}
\\frac{\\mathrm{d}L}{\\mathrm{d}t} = \\sum_\\alpha \\left( \\frac{\\mathrm{d}}{\\mathrm{d}t}\\frac{\\partial L}{\\partial \\dot{q}_\\alpha} \\dot{q}_\\alpha + \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} \\ddot{q}_\\alpha \\right) = \\frac{\\mathrm{d}}{\\mathrm{d}t} \\left( \\sum_\\alpha \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} \\dot{q}_\\alpha \\right)
\\end{align}
$$

因此

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t} \\left( \\sum_\\alpha \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} \\dot{q}_\\alpha - L \\right) = 0
\\end{align}
$$

定义**广义能量** $H = \\sum_\\alpha \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} \\dot{q}_\\alpha - L$，则 $H$ 为常数。

### 广义能量与机械能的区别

当约束为稳定约束（即 $\\partial \\boldsymbol{r}_i/\\partial t = 0$）且势能 $V$ 与速度无关时，动能 $T$ 是广义速度的二次齐次函数。根据欧拉齐次函数定理，

$$
\\begin{align}
\\sum_\\alpha \\frac{\\partial T}{\\partial \\dot{q}_\\alpha} \\dot{q}_\\alpha = 2T
\\end{align}
$$

此时 $H = 2T - (T-V) = T + V$，即系统的机械能。因此，在稳定约束、保守力且势能与速度无关的条件下，广义能量守恒即为机械能守恒。

## 循环坐标与广义动量守恒

若拉格朗日函数 $L$ 不显含某个广义坐标 $q_\\alpha$（即 $\\partial L/\\partial q_\\alpha = 0$），则称 $q_\\alpha$ 为**循环坐标**。此时拉格朗日方程给出

$$
\\begin{align}
\\frac{\\mathrm{d}}{\\mathrm{d}t} \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} = 0 \\quad \\Rightarrow \\quad \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} = \\text{常数}
\\end{align}
$$

定义**广义动量** $p_\\alpha = \\frac{\\partial L}{\\partial \\dot{q}_\\alpha}$，则循环坐标对应的广义动量守恒。

## 对称性与守恒定律的深刻联系——诺特定理

**诺特定理**指出：如果拉格朗日函数在某种连续变换下保持不变（即具有对称性），则必存在一个相应的守恒量。

### 空间平移对称性与动量守恒

若系统具有空间平移不变性，即拉格朗日函数不依赖于整体空间坐标的平移，则对应守恒量为总动量。例如，对于无外场的自由粒子系统，拉格朗日函数在平移变换下不变，从而总动量守恒。

### 空间旋转对称性与角动量守恒

若系统具有空间旋转不变性，即拉格朗日函数在整体旋转下不变，则对应守恒量为总角动量。例如，在中心势场中，势能仅依赖于距离 $r$，绕力心的旋转不变性导致角动量守恒。

### 时间平移对称性与能量守恒

若系统具有时间平移不变性，即拉格朗日函数不显含时间，则对应守恒量为广义能量（在稳定约束下即为机械能）。时间平移对称性意味着物理定律不依赖于时间原点的选取。

## 诺特定理的数学表述

考虑一个单参数连续变换（如平移、旋转等）：

$$
\\begin{align}
q_\\alpha \\rightarrow q_\\alpha' = q_\\alpha + \\epsilon \\psi_\\alpha(q,\\dot{q},t)
\\end{align}
$$

其中 $\\epsilon$ 为无穷小参数。若在此变换下拉格朗日函数的变化为 $\\Delta L = \\epsilon \\frac{\\mathrm{d}F}{\\mathrm{d}t}$（即一个全导数），则存在守恒量

$$
\\begin{align}
I = \\sum_\\alpha \\frac{\\partial L}{\\partial \\dot{q}_\\alpha} \\psi_\\alpha - F = \\text{常数}
\\end{align}
$$

诺特定理揭示了对称性与守恒定律之间的内在联系，是理论物理学中最深刻的原理之一。

## 实例分析

### 例：双质点系统

考虑质点 $m$ 被长为 $l$ 的轻绳系着，另一端挂着质点 $m'$，放置于光滑水平平台上。系统在水平方向不受外力，具有空间平移对称性，故水平方向总动量守恒。同时，系统拉格朗日函数不显含时间，故广义能量守恒。这些守恒律可用于简化运动方程的求解。

### 例：中心势场中的运动

粒子在中心势 $V(r)$ 中运动，拉格朗日函数 $L = \\frac{1}{2} m (\\dot{r}^2 + r^2\\dot{\\theta}^2) - V(r)$ 不显含 $\\theta$，因此 $\\theta$ 是循环坐标，对应的广义动量 $p_\\theta = m r^2 \\dot{\\theta}$ 守恒，即角动量守恒。同时，$L$ 不显含时间，故机械能守恒。

## 小结

- 拉格朗日函数不显含时间 → 广义能量守恒（稳定约束下即机械能守恒）。
- 循环坐标 → 对应的广义动量守恒。
- 诺特定理将对称性与守恒定律统一起来：空间平移对称性→动量守恒；空间旋转对称性→角动量守恒；时间平移对称性→能量守恒。
- 守恒定律是简化力学问题的有力工具，常可将二阶微分方程降为一阶积分。
`,l={title:"对称性与守恒定律",author:"NeoWangKing",date:new Date(1774679683e3),lastMod:new Date(1774679683e3),tags:["物理","理论力学","对称性","守恒定律","诺特定理","拉格朗日函数"],category:["物理","理论力学"],summary:"本文介绍分析力学中的对称性与守恒定律，包括能量积分、广义能量积分、动量守恒、角动量守恒，以及诺特定理揭示的对称性与守恒量之间的深刻联系。",comments:!0,draft:!1,sticky:0},i={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/04-Symmetry-and-Conservation-Laws.md",rawData:void 0};export{i as _internal,r as body,n as collection,l as data,a as id,t as slug};
