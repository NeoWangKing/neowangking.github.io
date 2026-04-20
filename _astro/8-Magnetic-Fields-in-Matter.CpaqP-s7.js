const n="physics/Electrodynamics/8-Magnetic-Fields-in-Matter.md",l="posts",o="physics/electrodynamics/8-magnetic-fields-in-matter",b=`
## 磁化机制

### 抗磁性

- 电子轨道在外磁场中产生感应磁矩，方向与外磁场相反
- 所有物质都有抗磁性，但通常很弱
- 典型材料：水、铜、铋

### 顺磁性

- 原子或分子具有固有磁矩（未满壳层电子）
- 外磁场使磁矩趋向排列，产生净磁化
- 典型材料：铝、氧气、铂

### 铁磁性

- 强相互作用使相邻磁矩自发平行排列（交换作用）
- 形成**磁畴**（domain），无外场时平均磁化为零
- 外场使畴壁移动，产生强磁化
- 典型材料：铁、钴、镍

## 磁化强度

**磁化强度** $\\boldsymbol{M}$ 定义为磁偶极矩密度（单位体积内的磁偶极矩之和）：

$$
\\begin{align}
\\boldsymbol{M} = \\frac{\\sum \\boldsymbol{m}_i}{\\Delta V}
\\end{align}
$$

## 磁化物体的磁场

### 束缚电流

磁化物体产生的矢势为

$$
\\begin{align}
\\boldsymbol{A}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi} \\int \\frac{\\boldsymbol{M}(\\boldsymbol{r}') \\times \\hat{\\boldsymbol{r}}''}{r''^2} \\, \\mathrm{d}\\tau'
\\end{align}
$$

通过矢量恒等式，可表示为

$$
\\begin{align}
\\boldsymbol{A}(\\boldsymbol{r}) = \\frac{\\mu_0}{4\\pi} \\int \\frac{\\boldsymbol{J}_b}{|\\boldsymbol{r} - \\boldsymbol{r}'|} \\, \\mathrm{d}\\tau' + \\frac{\\mu_0}{4\\pi} \\oint \\frac{\\boldsymbol{K}_b}{|\\boldsymbol{r} - \\boldsymbol{r}'|} \\, \\mathrm{d}a'
\\end{align}
$$

其中

- **体束缚电流密度**：$\\boldsymbol{J}_b = \\nabla \\times \\boldsymbol{M}$
- **面束缚电流密度**：$\\boldsymbol{K}_b = \\boldsymbol{M} \\times \\hat{\\boldsymbol{n}}$

### 均匀磁化球体

对于均匀磁化强度 $\\boldsymbol{M}$ 的球体（半径 $R$）：

- 球内磁场均匀：$\\boldsymbol{B} = \\dfrac{2}{3} \\mu_0 \\boldsymbol{M}$
- 球外磁场为偶极子场，磁偶极矩 $\\boldsymbol{m} = \\dfrac{4\\pi}{3} R^3 \\boldsymbol{M}$

注意与极化球体的对比：$\\boldsymbol{E}_{\\text{in}} = -\\dfrac{1}{3\\epsilon_0} \\boldsymbol{P}$，$\\boldsymbol{B}_{\\text{in}} = \\dfrac{2}{3} \\mu_0 \\boldsymbol{M}$。

## 辅助场 $\\boldsymbol{H}$

### 定义

在磁化物质中，安培定律为

$$
\\begin{align}
\\nabla \\times \\boldsymbol{B} = \\mu_0 (\\boldsymbol{J}_f + \\boldsymbol{J}_b) = \\mu_0 \\boldsymbol{J}_f + \\mu_0 (\\nabla \\times \\boldsymbol{M})
\\end{align}
$$

整理得

$$
\\begin{align}
\\nabla \\times \\left( \\frac{1}{\\mu_0} \\boldsymbol{B} - \\boldsymbol{M} \\right) = \\boldsymbol{J}_f
\\end{align}
$$

定义**辅助场**

$$
\\begin{align}
\\boldsymbol{H} = \\frac{1}{\\mu_0} \\boldsymbol{B} - \\boldsymbol{M}
\\end{align}
$$

则

$$
\\begin{align}
\\nabla \\times \\boldsymbol{H} = \\boldsymbol{J}_f
\\end{align}
$$

积分形式：

$$
\\begin{align}
\\oint_C \\boldsymbol{H} \\cdot \\mathrm{d}\\boldsymbol{l} = I_{f,\\text{enc}}
\\end{align}
$$

### 注意

- $\\nabla \\cdot \\boldsymbol{H} = -\\nabla \\cdot \\boldsymbol{M} \\neq 0$（一般情况）
- $\\boldsymbol{H}$ 的旋度仅由自由电流决定，但散度不一定为零
- $\\boldsymbol{H}$ 常称为“磁场强度”，但 $\\boldsymbol{B}$ 才是基本物理量

## 线性介质

### 本构关系

对于线性、各向同性介质，磁化强度与 $\\boldsymbol{H}$ 成正比：

$$
\\begin{align}
\\boldsymbol{M} = \\chi_m \\boldsymbol{H}
\\end{align}
$$

其中 $\\chi_m$ 是**磁化率**。于是

$$
\\begin{align}
\\boldsymbol{B} = \\mu_0 (\\boldsymbol{H} + \\boldsymbol{M}) = \\mu_0 (1 + \\chi_m) \\boldsymbol{H} = \\mu \\boldsymbol{H}
\\end{align}
$$

其中 $\\mu = \\mu_0 \\mu_r$ 是**磁导率**，$\\mu_r = 1 + \\chi_m$ 是**相对磁导率**。

### 常见介质的磁化率

| 材料 |  类型  |       $\\chi_m$        |
| :--: | :----: | :-------------------: |
|  铋  | 抗磁性 |  $-1.6\\times10^{-4}$  |
|  铜  | 抗磁性 |  $-9.7\\times10^{-6}$  |
|  水  | 抗磁性 |  $-9.0\\times10^{-6}$  |
|  铝  | 顺磁性 |  $2.1\\times10^{-5}$   |
|  铂  | 顺磁性 |  $2.8\\times10^{-4}$   |
|  铁  | 铁磁性 | $\\sim 10^3$（非线性） |

## 铁磁性

### 磁滞回线

铁磁材料的 $\\boldsymbol{B}$ 与 $\\boldsymbol{H}$ 关系非线性且非单值，形成**磁滞回线**。

特征量：

- 饱和磁化强度 $M_s$
- 剩余磁化强度 $M_r$
- 矫顽力 $H_c$

### 居里温度

铁磁性在高温下消失，居里点（铁为 $770^\\circ\\mathrm{C}$）。高于居里点，材料变为顺磁性。

## 麦克斯韦方程组在物质中

完整的麦克斯韦方程组在介质中的形式为

$$
\\begin{align}
\\nabla \\cdot \\boldsymbol{D} &= \\rho_f \\\\
\\nabla \\cdot \\boldsymbol{B} &= 0 \\\\
\\nabla \\times \\boldsymbol{E} &= -\\frac{\\partial \\boldsymbol{B}}{\\partial t} \\\\
\\nabla \\times \\boldsymbol{H} &= \\boldsymbol{J}_f + \\frac{\\partial \\boldsymbol{D}}{\\partial t}
\\end{align}
$$

其中

- $\\boldsymbol{D} = \\epsilon_0 \\boldsymbol{E} + \\boldsymbol{P}$
- $\\boldsymbol{H} = \\frac{1}{\\mu_0} \\boldsymbol{B} - \\boldsymbol{M}$

最后一项 $\\partial \\boldsymbol{D}/\\partial t$ 是**位移电流**，包含极化电流 $\\partial \\boldsymbol{P}/\\partial t$。

## 边界条件

在两种介质的分界面上（无自由面电流和自由面电荷时）：

- $D_{1\\perp} = D_{2\\perp}$
- $B_{1\\perp} = B_{2\\perp}$
- $E_{1\\parallel} = E_{2\\parallel}$
- $H_{1\\parallel} = H_{2\\parallel}$

若有自由面电流 $\\boldsymbol{K}_f$，则

$$
\\begin{align}
\\boldsymbol{H}_{\\text{above}} - \\boldsymbol{H}_{\\text{below}} = \\boldsymbol{K}_f \\times \\hat{\\boldsymbol{n}}
\\end{align}
$$

## 小结

- 磁化强度 $\\boldsymbol{M}$ 描述介质的磁化程度，束缚电流 $\\boldsymbol{J}_b = \\nabla \\times \\boldsymbol{M}$，$\\boldsymbol{K}_b = \\boldsymbol{M} \\times \\hat{\\boldsymbol{n}}$
- 辅助场 $\\boldsymbol{H} = \\boldsymbol{B}/\\mu_0 - \\boldsymbol{M}$，满足 $\\nabla \\times \\boldsymbol{H} = \\boldsymbol{J}_f$
- 线性介质：$\\boldsymbol{M} = \\chi_m \\boldsymbol{H}$，$\\boldsymbol{B} = \\mu \\boldsymbol{H}$
- 铁磁体具有磁滞和非线性
- 介质中的麦克斯韦方程组统一了电和磁的响应
`,m={title:"磁场中的物质",author:"NeoWangKing",date:new Date(1776354028e3),lastMod:new Date(1776699628e3),tags:["物理","电动力学","磁化","束缚电流","辅助场H","线性介质","铁磁性"],category:["物理","电动力学"],summary:"本文介绍物质在磁场中的行为，包括磁化机制、磁化强度、束缚电流、辅助场H、线性与非线性介质、铁磁性的磁滞现象，以及麦克斯韦方程组在物质中的形式。",comments:!0,draft:!1,sticky:0},s={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/Electrodynamics/8-Magnetic-Fields-in-Matter.md",rawData:void 0};export{s as _internal,b as body,l as collection,m as data,n as id,o as slug};
