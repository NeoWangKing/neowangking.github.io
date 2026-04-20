const n="physics/TMDModel/TMD-TightBinding2.md",$="posts",t="physics/tmdmodel/tmd-tightbinding2",i=`
## 引言

单层过渡金属二硫化物（TMD，如 $\\mathrm{MoS_{2}}$、$\\mathrm{WS_{2}}$、$\\mathrm{MoSe_{2}}$等）是近年来非常受关注的一类二维半导体材料。他们在单层极限下表现为直接带隙体系，并且具有明显的自旋-轨道耦合效应和能谷（valley）自由度，这使得许多新奇的物理都集中在 $K/K'$ 点附近。在这个能量区间内，价带顶与导带底几乎完全由过渡金属原子的 $d$ 轨道组成，它们分别是 $d_{z^{2}}$、$d_{xy}$ 与 $d_{x^{2} - y^{2}}$。基于这一事实，我们可以构建一个仅包含这三个轨道的紧束缚模型，也就是常提到的三能带模型。尽管这个模型的基组很小，但已经足够描述 $K/K'$ 点附近的带边性质。

- **紧束缚模型：** 所谓紧束缚模型，是指利用局域的原子轨道来描述晶体电子结构的办法
  1. 它假设电子主要局域在各个原子附近，即波函数由一组正交的原子轨道线性组合而成，并允许电子通过有限距离的跳跃在晶格中传播。
  2. 它的哈密顿量通常由原位（on-site）能级和 近邻/远近邻跳跃项组成，参数可以由对称性约束得到简化，并通过拟合 DFT 能带得到。
  3. **特点：** 形式直观、计算高效、适合分析带边、能谷以及自旋-轨道耦合等物理性质。

## TMD 的晶体结构与对称性分析

在构建紧束缚模型之前，我们首先要弄明白研究对象的晶体结构，这包含了材料的晶胞形状以及对称性信息。而紧束缚模型中跳跃矩阵的各项参数并非完全独立，受材料对称性的约束，这些参数之间有存在相应的关联，这些关联操作可以大大减少跳跃矩阵中独立参数的数量，使问题简单化。因此，我们有必要弄明白 TMD 材料的对称性信息。

- **注：** 为了避免误会，接下来我们所提到的 TMD 材料均为单层材料。而 TMD 的单层材料中有两种常见的相：分别是 **1T 相**和 **2H 相**，其中 1T 相为**金属**， 2H 相为**半导体（或绝缘体）**。我们下面所讨论的均为 2H 相。

### TMD 的实空间结构与布里渊区

单层 TMD 材料的化学式为 $\\mathrm{MX_{2}}$ ，其中 $\\mathrm{M}$ 为过渡金属元素（如 $\\mathrm{Mo}$、$\\mathrm{W}$ 和 $\\mathrm{V}$ 等），$\\mathrm{X}$ 为硫族元素（如 $\\mathrm{S}$、$\\mathrm{Se}$ 和 $\\mathrm{Te}$ 等）。

其结构如图 1 所示，图中灰色原子为过渡金属原子，黄色原子为硫族原子，它们组成了一种类似“三明治”的结构，金属原子形成了二维的六角晶格，硫族原子分别位于金属原子的上下两侧，形成了三棱柱形的配位环境，形状如图 1 (b) 所示

![TMD 材料的晶体结构以及布里渊区示意图](https://ionizing.page/post/tmd-tightbinding/TMD-Structure.png '图 1 : TMD 材料的晶体结构以及布里渊区示意图，灰色球为 M 原子，黄色球为 X 原子，(c) 为布里渊区示意图。')

而由于 $\\mathrm{MX_{2}}$ 的原胞为六角晶型，他的布里渊区同样为六角形，如图 1 (c) 所示。在这个布里渊区中，除了原点 $\\Gamma$ 和边中心 $M$ 以外，我们对位于六边形顶点的 $+K$ 与 $-K$ 点比较感兴趣，它们决定着能谷（valley）中存在许多有趣的物理性质。

### TMD 的对称性

单层 TMD 的点群为 $D_{3h}$ ，它主要包括以下几种对称性：

1. **三重旋转对称性：** 绕 $z$ 轴旋转 $120\\degree$ 后系统保持不变，即

   $$
   \\begin{align}
   C_{3}:\\begin{bmatrix}x\\\\y\\end{bmatrix}\\longrightarrow\\begin{bmatrix}\\cos{(\\theta)} & -\\sin{(\\theta)}\\\\ \\sin{(\\theta)} & \\cos{(\\theta)}\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix},\\quad\\theta = \\frac{2\\pi}{3}
   \\end{align}
   $$

2. **水平镜面反射：** 关于 $xy$ 平面反射后系统不变，即

   $$
   \\begin{align}
   \\sigma_{h}:(x,y,z)\\longrightarrow(x,y,-z)
   \\end{align}
   $$

3. **竖直的镜面反射：** 分别沿 $\\mathrm{M-X}$ 键做反映（以图 1 中沿 $yz$ 反映面为例）

   $$
   \\begin{align}
   \\sigma_{v}:(x,y,z)\\longrightarrow(-x,y,z)
   \\end{align}
   $$

以上三种对称操作可以相互组合，并形成更多的对称操作，下面将部分操作总结在表 1 中

|               对称操作                |      符号      |                表达式                |
| :-----------------------------------: | :------------: | :----------------------------------: |
|         旋转 $\\frac{2\\pi}{3}$         |    $C_{3}$     |               $C_{3}$                |
|         旋转 $\\frac{4\\pi}{3}$         |  $C_{3}^{2}$   |          $C_{3}\\cdot C_{3}$          |
|            沿 $yz$ 面反映             |  $\\sigma_{v}$  |             $\\sigma_{v}$             |
| 沿 $yz$ 面反映后旋转 $\\frac{2\\pi}{3}$ | $\\sigma_{v}'$  |       $C_{3} \\cdot \\sigma_{v}$       |
| 沿 $yz$ 面反映后旋转 $\\frac{4\\pi}{3}$ | $\\sigma_{v}''$ | $C_{3} \\cdot C_{3} \\cdot \\sigma_{v}$ |

表 1 ：TMD 材料的部分对称性操作

## 基组的确定及对称性算符

在构建紧束缚的哈密顿量之前，我们需要明确系统的基组。众所周知，“紧束缚模型”也称为“原子轨道线性组合法”（LCAO，linear combination of atomic orbitals），它使用原子轨道作为基组表示系统的波函数，因此我们需要明确具体使用哪些原子轨道。

以 $\\mathrm{MoS_{2}}$ 为例，G.B.Liu 等人使用 DFT 软件计算得到它的原子轨道投影能带，如图 2 所示。不难看出 $\\mathrm{MoS_{2}}$ 的价带最高（VBM）与导带最低（CBM）均主要由原子的 $d$ 轨道贡献，而 $p$ 轨道占比相比之下就小很多，$s$ 轨道更是几乎没有。由于我们通常只关心 VBM 和 CBM 的带隙与色散，因此只使用 $M$ 原子的这三个 $d$ 轨道来构成紧束缚模型的基组是可行的。为此我们认为 $\\mathrm{X}$ 原子的所有轨道以及 $\\mathrm{M}$ 原子的 $sp$ 轨道都可以忽略不计，他们不参与紧束缚模型的构建。

![MoS2 能带及原子轨道投影](https://ionizing.page/post/tmd-tightbinding/TMD-DFT-bandstructure.png '图 2 : 使用 VASP 计算得到的 MoS2 能带及原子轨道投影。')

在此，我们的紧束缚模型基组确定为 $M$ 原子的三条 $d$ 轨道：

$$
\\begin{align}
\\left\\{|d_{z^{2}}\\rangle,|d_{xy}\\rangle,|d_{x^{2} - y^{2}}\\rangle\\right\\}
\\end{align}
$$

从轨道的基函数表达式不难判断，他们对应了几种对称性：

1. $|d_{z^{2}}\\rangle$ 的基函数为 $z^{2}$ ，与 $xy$ 无关，因此它对于 $xy$ 平面内的操作不变，即 $C_{3}$ 操作与 $\\sigma_{v}$ 操作对它不起作用：
   $$
   \\begin{align}
   C_{3}:|d_{z^{2}}\\rangle \\longrightarrow |d_{z^{2}}\\rangle;\\quad \\sigma_{v}:|d_{z^{2}}\\rangle \\longrightarrow |d_{z^{2}}\\rangle
   \\end{align}
   $$
2. $|d_{xy}\\rangle$ 的基函数为 $xy$ ，它对于沿 $yz$ 平面的反映产生符号改变：

   $$
   \\begin{align}
   \\sigma_{v}:|d_{xy}\\rangle \\longrightarrow -|d_{z^{2}}\\rangle
   \\end{align}
   $$

3. $|d_{xy}\\rangle$ 与 $|d_{x^{2} - y^{2}}\\rangle$ 组合起来时，它对三重旋转操作有以下关系

   $$
   \\begin{align}
   C_{3}:\\begin{bmatrix}|d_{xy}\\rangle\\\\|d_{x^{2} - y^{2}}\\rangle\\end{bmatrix} \\longrightarrow \\begin{bmatrix}\\cos{(2\\frac{2\\pi}{3})} & -\\sin{(2\\frac{2\\pi}{3})}\\\\ \\sin{(2\\frac{2\\pi}{3})} & \\cos{(2\\frac{2\\pi}{3})}\\end{bmatrix} \\begin{bmatrix}|d_{xy}\\rangle \\\\ |d_{x^{2} - y^{2}}\\rangle \\end{bmatrix}
   \\end{align}
   $$

   这个式子的意思是，当一个波函数可以用 $|d_{xy}\\rangle$ 与 $|d_{x^{2} - y^{2}}\\rangle$ 这两种轨道的线性组合表示时，它经过三重旋转后的结果仍可以使用这两个轨道表示，旋转操作只改变了两种轨道的组合系数。需要指出的是，尽管这个式子看起来与公式 $(1)$ 很像，但他们是完全不同的概念。当前对称操作作用的基底是原子轨道，而 $(1)$ 作用的基底则是位置坐标 $xy$ 。

那么，在 $\\left\\{|d_{z^{2}}\\rangle,|d_{xy}\\rangle,|d_{x^{2} - y^{2}}\\rangle\\right\\}$ 基组中，上面两种对称操作可以用下面的算符表示：

$$
\\begin{align}
D(C_{3}) =
\\begin{bmatrix}
1 & 0                       & 0                        \\\\
0 & \\cos{(2\\frac{2\\pi}{3})} & -\\sin{(2\\frac{2\\pi}{3})} \\\\
0 & \\sin{(2\\frac{2\\pi}{3})} & \\cos{(2\\frac{2\\pi}{3})}
\\end{bmatrix}
;\\quad D(\\sigma_{v}) =
\\begin{bmatrix}
1 & 0  & 0 \\\\
0 & -1 & 0 \\\\
0 & 0  & 1
\\end{bmatrix}
\\end{align}
$$

有了以上两种对称操作后，表 1 中对称操作对应的矩阵形式就都可以得到了。

由于 $X$ 原子不参与到模型中，系统只由 $M$ 原子组成，并且所有 $M$ 原子都在同一平面内， $z$ 方向上的对称操作对这个系统的基函数也不起作用，因此 $D_{3h}$ 点群中其它与 $z$ 方向相关的操作，如 $xy$ 平面反映 $\\sigma_{h}$ 与绕 $x$ 轴的二次旋转 $C_{2}$ 等均不需要考虑。

## 紧束缚哈密顿量的构建

### 坐标系与近邻原子

在此我们不妨明确一下系统的坐标系，如图 3 所示。

![本文所使用的坐标系](https://ionizing.page/post/tmd-tightbinding/coordinate-system.png '
图 3: 本文所使用的坐标系，以及 M 原子的最近邻（nearest neighbor, NN）、次近邻（next-nearest neighbor, NNN）和第三近邻（third-nearest neighbor, TNN） M 原子位置示意图')

图中 $ab$ 表示两个晶格矢量，他们分别是

$$
\\begin{align}
\\vec{a} = (l,0); \\quad \\vec{b} = (\\frac{l}{2},\\frac{\\sqrt{3}}{2}l)
\\end{align}
$$

$l$ 是相邻两个 $M$ 原子的距离，在本文中它也表示晶格常数。最近邻原子、次近邻原子与第三近邻原子的位置分别用 $R_{n}$ 、$\\tilde{R}_{n}$ 以及 $2R_{n}(n = 1,2,\\cdots,6)$ 表示，它们对应的分数坐标为

$$
\\begin{gathered}
R_{1} = (1,0);\\; R_{2} = (0,1);\\; R_{3} = (-1,1);\\\\
R_{4} = (-1,0);\\; R_{5} = (0,-1);\\; R_{6} = (1,-1)
\\end{gathered}
$$

$$
\\begin{gathered}
\\tilde{R}_{1} = (1,1);\\; \\tilde{R}_{2} = (-1,2);\\; \\tilde{R}_{3} = (-2,1);\\\\
\\tilde{R}_{4} = (-1,-1);\\; \\tilde{R}_{5} = (1,-2);\\; \\tilde{R}_{6} = (2,-1)
\\end{gathered}
$$

$$
\\begin{gathered}
2R_{1} = (2,0);\\; 2R_{2} = (0,2);\\; 2R_{3} = (-2,2);\\\\
2R_{4} = (-2,0);\\; 2R_{5} = (0,-2);\\; 2R_{6} = (2,-2)
\\end{gathered}
$$

### 紧束缚模型哈密顿量

由于我们研究的晶胞内只包含一个 $M$ 原子，每个原子有三个 $d$ 轨道，因此三能带模型的紧束缚哈密顿量在动量空间中表示为一个 $3\\times3$ 的矩阵

$$
\\begin{align}
H(\\boldsymbol{k}) =
\\begin{bmatrix}
H_{11}(\\boldsymbol{k}) & H_{12}(\\boldsymbol{k}) & H_{13}(\\boldsymbol{k})\\\\
H_{21}(\\boldsymbol{k}) & H_{22}(\\boldsymbol{k}) & H_{23}(\\boldsymbol{k})\\\\
H_{31}(\\boldsymbol{k}) & H_{32}(\\boldsymbol{k}) & H_{33}(\\boldsymbol{k})\\\\
\\end{bmatrix}
\\end{align}
$$

为了方便起见，我们不妨定义以下记号

$$
\\begin{align}
|\\phi_{1}\\rangle = d_{z^{2}},\\quad |\\phi_{2}\\rangle = d_{xy},\\quad |\\phi_{3}\\rangle = d_{x^{2} - y^{2}}
\\end{align}
$$

公式 $(10)$ 中每一项对应的表达式为

$$
\\begin{align}
H_{ij}(\\boldsymbol{k}) = \\sum_{\\boldsymbol{R}}{e^{\\mathrm{i}\\boldsymbol{k}\\cdot\\boldsymbol{R}}E_{ij}(\\boldsymbol{R})}
\\end{align}
$$

其中 $E_{ij}(\\boldsymbol{R})$ 即为轨道间的跳跃项，

$$
\\begin{align}
E_{ij}(\\boldsymbol{R}) = \\langle\\phi_{i}(\\boldsymbol{r})|\\hat{H}|\\phi_{j}(\\boldsymbol{r} - \\boldsymbol{R})\\rangle
\\end{align}
$$

它表示位于原点的 $i$ 轨道跳跃到位于 $\\boldsymbol{R}$ 的 $j$ 轨道的能量积分，这里 $\\boldsymbol{R}$ 表示近邻的原子。

这个积分有一个十分重要的性质 $E_{ij}(\\boldsymbol{R}) = E_{ji}(-\\boldsymbol{R})^{*}$ ，证明如下

$$
\\begin{align}
\\begin{aligned}
E_{ij}(\\boldsymbol{R}) &= \\langle\\phi_{i}(\\boldsymbol{r})|\\hat{H}|\\phi_{j}(\\boldsymbol{r} - \\boldsymbol{R})\\rangle\\\\
&= \\langle\\phi_{j}(\\boldsymbol{r} - \\boldsymbol{R})|\\hat{H}|\\phi_{i}(\\boldsymbol{r})\\rangle^{*}\\\\
&= E_{ji}(-\\boldsymbol{R})^{*}
\\end{aligned}
\\end{align}
$$

此外，当有了其中一个近邻原子轨道的 $E_{ij}(\\boldsymbol{R})$ 后，我们可以通过对称性操作推导出其它近邻原子轨道对应的跳跃积分 $E_{ij}(\\boldsymbol{R}')$ ，它们可以通过下面的式子推得

$$
\\begin{align}
E(\\hat{g}_{n}\\boldsymbol{R}) = D(\\hat{g}_{n})E(\\boldsymbol{R})\\left[D(\\hat{g}_{n})\\right]^{\\dag}
\\end{align}
$$

$E(R)$ 表示由 $E_{ij}(\\boldsymbol{R})$ 组成的矩阵， $\\hat{g}_{n}$ 是具体的对称操作， $D(\\hat{g}_{n})$ 是 $\\hat{g}_{n}$ 对应的矩阵形式，它们已在公式 $(8)$ 中给出。

在 TMD 中，根据考虑近邻原子的多少不同，跳跃项分最近邻项、次近邻项和第三近邻项，下面将以最近邻模型和第三近邻模型为例分别阐述它们的具体形式。

#### 最近邻模型

现在我们考虑最简单的一种情况，即只考虑最近邻原子的跳跃，如图 4 所示

![最近邻模型中涉及的原子](https://ionizing.page/post/tmd-tightbinding/TMD-hopping-NN.png '图 4：最近邻模型中涉及的原子')

那么哈密顿量包含以下两项

$$
\\begin{align}
H^{\\mathrm{NN-Model}} = H^{\\mathrm{on-site}} + H^{\\mathrm{NN}}
\\end{align}
$$

其中 $H^{\\mathrm{on-sote}}$ 是原位项，$H^{\\mathrm{NN}}$ 则是最近邻跳跃项，它们的形式如下。

##### 原位项

原位项是紧束缚模型里最简单的一项，我们把 $R = R_{0} = 0$ 代入公式 $(13)$ 后，可得

$$
\\begin{align}
H^{\\mathrm{on-site}}_{ij} = E^{\\mathrm{on-sote}}_{ij} = \\langle\\phi_{i}(\\boldsymbol{r})|\\hat{H}|\\phi_{j}(\\boldsymbol{r})\\rangle = \\epsilon_{j} \\cdot \\delta_{ij} =
\\begin{bmatrix}
\\epsilon_{1} & & \\\\
 & \\epsilon_{2} & \\\\
 & & \\epsilon_{3}
\\end{bmatrix}
\\end{align}
$$

即各个原子轨道的本征值，它其实是比最近邻原子“更加近邻”的那一项。需要指出的是，在 $\\Gamma$ 点，导带存在简并现象，因此原位项里 $\\phi_{2}$ 与 $\\phi_{3}$ 的本征值都是 $\\epsilon_{2}$。

##### 最近邻项

最近邻项包括 $R_{1},R_{2},\\cdots,R_{6}$ 共 6 个位点，我们不妨设 $R_{0}$ 到 $R_{1}$ 的跳跃积分都为实数

$$
\\begin{align}
E(R_{1}) =
\\begin{bmatrix}
t_{11} & t_{12} & t_{13}\\\\
t_{21} & t_{22} & t_{23}\\\\
t_{31} & t_{32} & t_{33}
\\end{bmatrix}
\\end{align}
$$

其一共包含 9 个参数，但它们不完全是相互独立的，受对称性约束，有些参数之间存在关联，下面我们来寻找一下。

不难发现， $R_{1}$ 与 $R_{4}$ 刚好互为镜像，即 $R_{1} = -R_{4}$ ，可以应用公式 $(15)$ 以及公式 $(14)$ 得到：

$$
\\begin{align}
\\begin{aligned}
E(\\sigma_{v}\\boldsymbol{R}_{1}) = E(\\boldsymbol{R}_{4}) = E(-\\boldsymbol{R}_{1})\\\\
D(\\sigma_{v})E(\\boldsymbol{R}_{1})\\left[D(\\sigma_{v})\\right]^{\\dag} = E(\\boldsymbol{R}_{1})^{\\dag}
\\end{aligned}
\\end{align}
$$

使用下面的 \`SymPy\` 脚本，可以解出部分参数之间的关系

\`\`\`python title="python"
#!/usr/bin/env python3

import sympy as sym
from sympy import sqrt, S

t11, t12, t13 = sym.symbols("t11, t12, t13", real=True)
t21, t22, t23 = sym.symbols("t21, t22, t23", real=True)
t31, t32, t33 = sym.symbols("t31, t32, t33", real=True)

DSigmaV = sym.Matrix([[1,  0, 0],
                      [0, -1, 0],
                      [0,  0, 1]])

t = sym.Matrix([[t11, t12, t13],
                [t21, t22, t23],
                [t31, t32, t33]])

equation_matrix = DSigmaV * t * DSigmaV.T - t.T
equations = list(equation_matrix)
solutions = sym.solve(equations, (t11, t12, t13, t21, t22, t23, t31, t32, t33))
print(solutions)

# Output:
# {t12: -t21, t13: t31, t23: -t32}
\`\`\`

将 $t_{12} = -t_{21},t_{13} = t_{31},t_{23} = -t_{32}$ 代入，可以得到简化后的跳跃矩阵：

$$
\\begin{align}
E(R_{1}) =
\\begin{bmatrix}
t_{11} & t_{12} & t_{13}\\\\
-t_{12} & t_{22} & t_{23}\\\\
t_{13} & -t_{23} & t_{33}
\\end{bmatrix}
\\end{align}
$$

现在我们只需要 $t_{11},t_{12},t_{13},t_{22},t_{23},t_{33}$ 这六个参数即可描述最近邻的跳跃了。

在确定了 $E(R_{1})$ 后，我们可以通过公式 $(15)$ 得到 $R_{2}$ 到 $R_{6}$ 对应的跳跃项

- $R_{2}$ 可以通过 $R_{1}$ 先转动 $\\frac{2\\pi}{3}$ ，再沿 $yz$ 面反映得到：

  $$
  \\begin{align}
  E(R_{2}) = D(\\sigma_{v}\\cdot C_{3})E(R_{1})D(\\sigma_{v}\\cdot C_{3})^{\\dag}
  \\end{align}
  $$

- $R_{3}$ 可以通过 $R_{1}$ 直接转动 $\\frac{2\\pi}{3}$ 得到：

  $$
  \\begin{align}
  E(R_{3}) = D(C_{3})E(R_{1})D(C_{3})^{\\dag}
  \\end{align}
  $$

- $R_{4}$ 刚好是 $-R_{1}$ ：

  $$
  \\begin{align}
  E(R_{4}) = E(R_{1})^{\\dag}
  \\end{align}
  $$

- $R_{5}$ 是 $R_{1}$ 转动 $\\frac{4\\pi}{3}$ 得到：

  $$
  \\begin{align}
  E(R_{5}) = D(C_{3}\\cdot C_{3})E(R_{1})D(C_{3}\\cdot C_{3})^{\\dag}
  \\end{align}
  $$

- $R_{6}$ 是 $R_{1}$ 转动 $\\frac{4\\pi}{3}$ 再沿 $yz$ 面反映得到：

  $$
  \\begin{align}
  E(R_{6}) = D(\\sigma_{v} \\cdot C_{3} \\cdot C_{3})E(R_{1})D(\\sigma_{v} \\cdot C_{3} \\cdot C_{3})^{\\dag}
  \\end{align}
  $$

将以上式子代入公式 $(12)$ 可得到 $\\boldsymbol{k}$ 点处完整的最近邻跳跃贡献

$$
\\begin{aligned}
H^{\\mathrm{NN}} =
e^{\\mathrm{i}\\boldsymbol{k}\\cdot\\boldsymbol{R}_{1}}E(R_{1}) +
e^{\\mathrm{i}\\boldsymbol{k}\\cdot\\boldsymbol{R}_{2}}E(R_{2}) +
e^{\\mathrm{i}\\boldsymbol{k}\\cdot\\boldsymbol{R}_{3}}E(R_{3}) +
e^{\\mathrm{i}\\boldsymbol{k}\\cdot\\boldsymbol{R}_{4}}E(R_{4}) +
e^{\\mathrm{i}\\boldsymbol{k}\\cdot\\boldsymbol{R}_{5}}E(R_{5}) +
e^{\\mathrm{i}\\boldsymbol{k}\\cdot\\boldsymbol{R}_{6}}E(R_{6})
\\end{aligned}
$$

将参数 $\\epsilon_{1},\\cdots,\\epsilon_{3},t_{11},\\cdots,t_{33}$ 代入公式 $(16)$ 并对角化它，即可得到能带。

##### 能带求解

以 $\\mathrm{MoS_{2}}$ 为例，这里借用刘贵斌教授 Phys Rev B 给出的数值：

|      参数      |    文献符号    | 数值（$\\mathrm{eV}$） |   参数   | 文献符号 | 数值（$\\mathrm{eV}$） |
| :------------: | :------------: | :-------------------: | :------: | :------: | :-------------------: |
| $\\epsilon_{1}$ | $\\epsilon_{1}$ |         1.046         | $t_{13}$ | $t_{2}$  |         0.507         |
| $\\epsilon_{2}$ | $\\epsilon_{2}$ |         2.104         | $t_{22}$ | $t_{11}$ |         0.218         |
|    $t_{11}$    |    $t_{0}$     |        -0.184         | $t_{23}$ | $t_{12}$ |         0.338         |
|    $t_{12}$    |    $t_{1}$     |         0.401         | $t_{33}$ | $t_{22}$ |         0.057         |

可得能带图如下：

![最近邻模型能带图](https://ionizing.page/post/tmd-tightbinding/code/pbe-NN.png)

不难看出，最近邻模型对带边的描述效果不错，比如对于 $K/K'$ 点的 VBM 和 CBM ，以及 $\\Gamma$ 点的 VBM ，最近邻模型都给出的十分接近于 DFT 的能带。如果我们只关心 $K/K'$ 点的能带性质，那么最近邻模型已经是一个相当可用的工具。但如果我们想让最近邻模型的能带与 DFT 复合的更好，仅使用最近邻跳跃就不够了，我们需要考虑更多的跳跃项。

#### 第三近邻模型

第三近邻模型在最近邻模型的基础上增加了**次近邻**以及**第三近邻**跳跃，这样可以得到更符合 DFT 的结果。他的哈密顿量包括

$$
\\begin{align}
H^{\\mathrm{TNN-Model}} = H^{\\mathrm{on-site}} + H^{\\mathrm{NN}} + H^{\\mathrm{NNN}} + H^{\\mathrm{TNN}}
\\end{align}
$$

其中 $H^{\\mathrm{NNN}}$ 是次近邻跳跃贡献， $H^{\\mathrm{TNN}}$ 是第三近邻跳跃贡献。

##### 第三近邻项

我们不妨从第三近邻跳跃开始，如图所示

![第三近邻跳跃](https://ionizing.page/post/tmd-tightbinding/TMD-hopping-TNN.png)

第三近邻跳跃的矢量对应于 $2R_{n}$ ，它刚好是最近邻跳跃 $R_{n}$ 矢量的倍数，因此这种跳跃也符合最近邻跳跃的对称性约束，我们直接复用最近邻跳跃矩阵 $E(R_{1})$ 的形式即可。为方便区分， $E(2R_{1})$ 的矩阵元用 $u_{ij}$ 表示，即

$$
\\begin{align}
E(2R_{1}) =
\\begin{bmatrix}
 u_{11} &  u_{12} & u_{13}\\\\
-u_{12} &  u_{22} & u_{23}\\\\
 u_{13} & -u_{23} & u_{33}
\\end{bmatrix}
\\end{align}
$$

因此第三近邻跳跃的哈密顿量形式如下：

$$
\\begin{aligned}
H^{\\mathrm{TNN}} =
e^{\\mathrm{i}\\boldsymbol{k}\\cdot 2\\boldsymbol{R}_{1}}E(2R_{1}) +
e^{\\mathrm{i}\\boldsymbol{k}\\cdot 2\\boldsymbol{R}_{2}}E(2R_{2}) +
e^{\\mathrm{i}\\boldsymbol{k}\\cdot 2\\boldsymbol{R}_{3}}E(2R_{3}) +
e^{\\mathrm{i}\\boldsymbol{k}\\cdot 2\\boldsymbol{R}_{4}}E(2R_{4}) +
e^{\\mathrm{i}\\boldsymbol{k}\\cdot 2\\boldsymbol{R}_{5}}E(2R_{5}) +
e^{\\mathrm{i}\\boldsymbol{k}\\cdot 2\\boldsymbol{R}_{6}}E(2R_{6})
\\end{aligned}
$$

##### 次近邻项

不妨令次近邻跳跃 $\\tilde{R}_{1}$ 对应的积分为 $E(\\tilde{R}_{1})$ ，有

$$
\\begin{align}
E(\\tilde{R}_{1}) =
\\begin{bmatrix}
r_{11} & r_{12} & r_{13}\\\\
r_{21} & r_{22} & r_{23}\\\\
r_{31} & r_{32} & r_{33}
\\end{bmatrix}
\\end{align}
$$

次近邻跳跃如图所示，此时跳跃矢量不再是 $R_{n}$ 的倍数，它的方向有所改变，因此我们需要寻找其他的对称性来减少参数数量。

![次近邻跳跃示意图](https://ionizing.page/post/tmd-tightbinding/TMD-hopping-NNN.png)

仔细观察，不难看出，对于 $\\tilde{R}_{1}$ ，我们可以先做 $C_{3}$ 转动变换为 $\\tilde{R}_{3}$ ，再经过 $yz$ 面反映变换回 $\\tilde{R}_{1}$ 。即

$$
\\begin{gathered}
\\tilde{R}_{1}\\xrightarrow{C_{3}}\\tilde{R}_{3}\\xrightarrow{\\sigma_{v}}\\tilde{R}_{1}\\\\
\\Downarrow\\\\
E(\\tilde{R}_{1}) = D(\\sigma_{v}\\cdot C_{3})E(\\tilde{R}_{1})D(\\sigma_{v}\\cdot C_{3})^{\\dag}
\\end{gathered}
$$

同样，使用下面的 \`SymPy\` 脚本，可以解出 $E(\\tilde{R}\\_{1}) 中部分参数之间的关系

\`\`\`python title="python"
r11, r12, r13 = sym.symbols("r11, r12, r13", real=True)
r21, r22, r23 = sym.symbols("r21, r22, r23", real=True)
r31, r32, r33 = sym.symbols("r31, r32, r33", real=True)

DC3 = sym.Matrix([[1,          0,         0],
                  [0,    -S(1)/2, sqrt(3)/2],
                  [0, -sqrt(3)/2,   -S(1)/2]])

r = sym.Matrix([[r11, r12, r13],
                [r21, r22, r23],
                [r31, r32, r33]])

equation_matrix = (DSigmaV * DC3) * r * (DSigmaV * DC3).t - r
equations = list(equation_matrix)
solutions = sym.solve(equations, (r11, r12, r13, r21, r22, r23, r31, r32, r33))
print(solutions)

# Output:
# {r12: -sqrt(3)*r13, r21: -sqrt(3)*r31, r22: -2*sqrt(3)*r32/3 + r33, r23: r32}
\`\`\`

因此可得简化后的跳跃矩阵

$$
\\begin{align}
E(\\tilde{R}_{1}) =
\\begin{bmatrix}
r_{11} & r_{12} & -\\frac{1}{\\sqrt{3}}r_{12}\\\\
r_{21} & r_{22} & r_{23}\\\\
-\\frac{1}{\\sqrt{3}}r_{21} & r_{23} & r_{22} + \\frac{2}{\\sqrt{3}}r_{23}
\\end{bmatrix}
\\end{align}
$$

有了 $\\tilde{R}_{1}$ 后，我们可以通过对称性陆续得到其它的次近邻跳跃项 $\\tilde{R}_{2},\\cdots,\\tilde{R}_{6}$：

- 为方便理解，我们先从 $\\tilde{R}_{4}$ 开始，刚好有 $\\tilde{R}_{4} = -\\tilde{R}_{1}$ ，因此有

  $$
  \\begin{align}
  E(\\tilde{R}_{4}) = E(\\tilde{R}_{1})^{\\dag}
  \\end{align}
  $$

- $\\tilde{R}_{2}$ 可以使用 $\\tilde{R}_{4}$ 经过两次 $C_{3}$ 转动得到

  $$
  \\begin{align}
  E(\\tilde{R}_{2}) = D(C_{3} \\cdot C_{3})E(\\tilde{R}_{1})^{\\dag}D(C_{3} \\cdot C_{3})^{\\dag}
  \\end{align}
  $$

- $\\tilde{R}_{3}$ 可以使用 $\\tilde{R}_{1}$ 经过一次 $C_{3}$ 转动得到

  $$
  \\begin{align}
  E(\\tilde{R}_{3}) = D(C_{3})E(\\tilde{R}_{1})D(C_{3})^{\\dag}
  \\end{align}
  $$

- $\\tilde{R}_{5}$ 可以使用 $\\tilde{R}_{1}$ 经过两次 $C_{3}$ 转动得到

  $$
  \\begin{align}
  E(\\tilde{R}_{5}) = D(C_{3} \\cdot C_{3})E(\\tilde{R}_{1})D(C_{3} \\cdot C_{3})^{\\dag}
  \\end{align}
  $$

- $\\tilde{R}_{6}$ 可以使用 $\\tilde{R}_{4}$ 经过一次 $C_{3}$ 转动得到

  $$
  \\begin{align}
  E(\\tilde{R}_{6}) = D(C_{3})E(\\tilde{R}_{1})^{\\dag}D(C_{3})^{\\dag}
  \\end{align}
  $$

此时次近邻跳跃的哈密顿量形式如下：

$$
\\begin{aligned}
H^{\\mathrm{NNN}} =
e^{\\mathrm{i}\\boldsymbol{k}\\cdot\\tilde{\\boldsymbol{R}}_{1}}E(\\tilde{R}_{1}) +
e^{\\mathrm{i}\\boldsymbol{k}\\cdot\\tilde{\\boldsymbol{R}}_{2}}E(\\tilde{R}_{2}) +
e^{\\mathrm{i}\\boldsymbol{k}\\cdot\\tilde{\\boldsymbol{R}}_{3}}E(\\tilde{R}_{3}) +
e^{\\mathrm{i}\\boldsymbol{k}\\cdot\\tilde{\\boldsymbol{R}}_{4}}E(\\tilde{R}_{4}) +
e^{\\mathrm{i}\\boldsymbol{k}\\cdot\\tilde{\\boldsymbol{R}}_{5}}E(\\tilde{R}_{5}) +
e^{\\mathrm{i}\\boldsymbol{k}\\cdot\\tilde{\\boldsymbol{R}}_{6}}E(\\tilde{R}_{6})
\\end{aligned}
$$

将参数代入 $H^{\\mathrm{NNN}}$ 和 $H^{\\mathrm{TNN}}$ 中，即可得到第三近邻模型下的能带结构。需要注意的是，在使用第三近邻模型时， $H^{\\mathrm{on-site}}$ 与 $H^{\\mathrm{NN}}$ 的参数也需要更新。

##### 能带求解

这里同样使用刘贵斌教授给出的数值：

|      参数      |    文献符号    | 数值（$\\mathrm{eV}$） |   参数   | 文献符号 | 数值（$\\mathrm{eV}$） |
| :------------: | :------------: | :-------------------: | :------: | :------: | :-------------------: |
| $\\epsilon_{1}$ | $\\epsilon_{1}$ |         0.683         | $t_{13}$ | $t_{2}$  |         0.506         |
| $\\epsilon_{2}$ | $\\epsilon_{2}$ |         1.707         | $t_{22}$ | $t_{11}$ |         0.085         |
|    $t_{11}$    |    $t_{0}$     |        -0.146         | $t_{23}$ | $t_{12}$ |         0.162         |
|    $t_{12}$    |    $t_{1}$     |         0.114         | $t_{33}$ | $t_{22}$ |         0.073         |
|                |                |                       |          |          |                       |
|    $r_{11}$    |    $r_{0}$     |         0.060         | $r_{22}$ | $r_{11}$ |         0.016         |
|    $r_{12}$    |    $r_{1}$     |        -0.236         | $r_{23}$ | $r_{12}$ |         0.087         |
|    $r_{21}$    |    $r_{2}$     |         0.067         |          |          |                       |
|                |                |                       |          |          |                       |
|    $u_{11}$    |    $u_{0}$     |        -0.038         | $u_{22}$ | $u_{11}$ |         0.266         |
|    $u_{12}$    |    $u_{1}$     |         0.046         | $u_{23}$ | $u_{12}$ |        -0.176         |
|    $u_{13}$    |    $u_{2}$     |         0.001         | $u_{33}$ | $u_{22}$ |        -0.150         |

可得能带图如下：

![第三近邻模型能带图](https://ionizing.page/post/tmd-tightbinding/code/pbe-TNN.png)

显然，这次模型所得能带与 DFT 符合的很好，这说明考虑次近邻跳跃与第三近邻跳跃后的三能带模型已经可以很好地满足带边的描述需求。

## 自旋-轨道耦合的引入

在前面的讨论中，我们构建了一个仅包含轨道自由度的紧束缚模型。然而，对于单层 TMD 材料而言，自旋-轨道耦合（spin-orbit coupling，SOC）不仅仅是一种微小的能量修正，它是决定能带精细结构以及谷激子性质的关键因素，因此我们有必要研究如何将 SOC 引入紧束缚模型。

### 原子内 SOC 的基本形式

所谓自旋轨道耦合，就是电子的自旋角动量与轨道角动量相互作用的一种狭义相对论效应。当电子在原子核产生的电场中高速运动时，相对论效应会使其感应出有效磁场，这种磁场与电子自身的自旋磁矩产生相互作用，从而导致能级分裂和谱线精细结构的产生。

SOC 的通用形式为

$$
\\begin{align}
H^{\\mathrm{SOC}} = \\frac{\\hbar}{4mc^{2}}\\sigma\\cdot\\boldsymbol{p}\\times\\nabla v(\\boldsymbol{r})
\\end{align}
$$

其中：

- $\\sigma$ 是泡利矩阵；
- $\\boldsymbol{p}$ 是电子的动量；
- $v(\\boldsymbol{r})$ 是电子感受到的静电势；

在真实体系中，这个表达中的 $\\nabla v(\\boldsymbol{r})$ 并不容易得到，因此我们将它与前面的系数合并为 $\\lambda$ 作为一个经验参数给出，此时 SOC 可以写成

$$
\\begin{align}
H_{\\mathrm{atom}}^{\\mathrm{SOC}} = \\lambda \\boldsymbol{L} \\cdot \\boldsymbol{S}
\\end{align}
$$

其中：

- $\\lambda = \\frac{\\nabla v(\\boldsymbol{r})}{2mc^{2}}$ 表示 SOC 作用的强度，它决定了 SOC 对能级劈裂的贡献；
- $\\boldsymbol{L}$ 是电子的轨道角动量；
- $\\boldsymbol{S} = \\frac{\\hbar}{2}\\sigma$ 是电子的自旋角动量。

我们将用这个式子对紧束缚模型中的 SOC 作用进行建模。需要指出的是，一般认为 SOC 仅作用于 on-site 项，即它只作用于同一个原胞内的同一个原子，不涉及跳跃项。

### 三能带模型中的 SOC 作用

在三能带模型中，我们选取的轨道基组为：

$$
\\begin{align}
\\left\\{|d_{z^{2}}\\rangle,|d_{xy}\\rangle,|d_{x^{2} - y^{2}}\\rangle\\right\\}
\\end{align}
$$

当 $\\boldsymbol{L}$ 算符作用到它们时， $L_{x}$ 与 $L_{y}$ 分量所得结果可能会得到 $|d_{yz}\\rangle$ 、 $|d_{xz}\\rangle$ 分量，而这些分量并不在三能带模型的基组内；相反，当使用 $|L_{z}\\rangle$ 算符作用时，所得结果仍可用现有的基组表达。因此在三能带近似下，可以将 $m_{z}$ 视为一个号量子数， SOC 被简化为

$$
\\begin{align}
H^{\\mathrm{SOC}} = \\lambda L_{z}S_{z}
\\end{align}
$$

下面我们来讨论三能带基组下 SOC 的矩阵元。

#### $L_{z}$ 算符

对于各个实轨道，它们都可以写成复球谐函数的线性组合：

- $|d_{z^{2}}\\rangle = Y_{2,0}$
- $|d_{xy}\\rangle = \\frac{\\mathrm{i}}{\\sqrt{2}}(Y_{2,-2} - Y_{2,2})$
- $|d_{x^{2} - y^{2}}\\rangle = \\frac{1}{\\sqrt{2}}(Y_{2,-2} + Y_{2,2})$

对每个球谐函数，有

$$
\\begin{align}
L_{z}Y_{lm} = mY_{lm}
\\end{align}
$$

将 $L_{z}$ 作用于实轨道时，有

- $\\hat{L}_{z}|d_{z^{2}}\\rangle = 0$
- $\\hat{L}_{z}|d_{xy}\\rangle = \\frac{i}{\\sqrt{2}}(-2Y_{2,-2} - 2Y_{2,2}) = -2\\mathrm{i}\\frac{1}{\\sqrt{2}}(Y_{2,-2} + Y_{2,2}) = -2\\mathrm{i}|d_{x^{2} - y^{2}}\\rangle$
- $\\hat{L}_{z}|d_{x^{2} - y^{2}}\\rangle = \\frac{1}{\\sqrt{2}}(-2Y_{2,-2} + 2Y_{2,2}) = 2\\mathrm{i}\\frac{-\\mathrm{i}}{\\sqrt{2}}(-Y_{2,-2} + Y_{2,2}) = 2\\mathrm{i}|d_{xy}\\rangle$

因此， $\\hat{L}_{z}$ 的矩阵元 $\\langle i|\\hat{L}_{z}|j\\rangle$ 中有一下关系

- $\\langle d_{z^{2}}|\\hat{L}_{z}|j\\rangle = 0$
- $\\langle d_{xy}|\\hat{L}_{z}|d_{x^{2} - y^{2}}\\rangle = \\langle d_{x^{2} - y^{2}}|\\hat{L}_{z}|d_{xy}\\rangle^{*} = -2\\mathrm{i}$
- $\\langle d_{xy}|\\hat{L}_{z}|d_{xy}\\rangle = \\langle d_{x^{2} - y^{2}}|\\hat{L}_{z}|d_{x^{2} - y^{2}}\\rangle = 0$

把上面的关系写成矩阵形式有

$$
\\begin{align}
L_{z} =
\\begin{bmatrix}
0 & 0 & 0\\\\
0 & 0 & -2\\mathrm{i}\\\\
0 & 2\\mathrm{i} & 0
\\end{bmatrix}
\\end{align}
$$

#### $S_{z}$ 算符

由于我们忽略了 $L_{x}$ 与 $L_{y}$ 的贡献，因此电子自旋也只需考虑 $S_{z}$ 的贡献

$$
\\begin{align}
S_{z} = \\frac{1}{2}\\sigma_{z} =
\\begin{bmatrix}
\\frac{1}{2} & 0\\\\
0 & -\\frac{1}{2}
\\end{bmatrix}
\\end{align}
$$

此时我们可以得到完整的 SOC 矩阵：

$$
\\begin{aligned}
H^{\\mathrm{SOC}} &= \\lambda S_{z} \\otimes L_{z}\\\\
&=
\\begin{bmatrix}
\\frac{\\lambda}{2}L_{z} & 0\\\\
0 & -\\frac{\\lambda}{2}L_{z}
\\end{bmatrix}
\\end{aligned}
$$

这里我们相当于引入了新的自由度，即自旋，因此需要使用克罗内积（Kronecker Product，也称“直积”）符号 $\\otimes$ 。

### 考虑自旋-轨道耦合后的能带

前面我们已经得到了紧束缚模型的哈密顿量 $H^{0}$ 和完整的 SOC 矩阵 $H^{\\mathrm{SOC}}$ ，现在可以将它们组合起来

$$
\\begin{aligned}
H^{\\mathrm{TB + SOC}}(\\boldsymbol{k}) &= I_{2} \\otimes H^{0}(\\boldsymbol{k}) + H^{\\mathrm{SOC}}\\\\
&=
\\begin{bmatrix}
H_{0} + \\frac{\\lambda}{2}L_{z} & 0\\\\
0 & H_{0} - \\frac{\\lambda}{2}L_{z}
\\end{bmatrix}
\\end{aligned}
$$

这里 $I_{2} =\\begin{bmatrix}1 & 0\\\\0 & 1\\end{bmatrix}$ 表示单位矩阵。

借用刘贵斌教授 Phys. Rev. B 给出的数值， $\\mathrm{MoS_{2}}$ 中 $\\lambda = 0.073$ ，代入 $H^{\\mathrm{TB + SOC}}$ 中，可得能带如图 5 所示

![包含 SOC 的能带图](https://ionizing.page/post/tmd-tightbinding/code/pbe-TNN-soc.png '图 5: 包含 SOC 后 DFT 能带图与第三邻模型的对比。')

不难看出，在包含 SOC 后，三能带模型与 DFT 计算结果仍然符合地不错。比如 $K$ 谷里 VBM 较大的劈裂和 CBM 微小的劈裂都被良好地复现出来，而 $\\Gamma$ 谷 VBM 存在简并的特性也一样得到保留。这说明在只取 $L_{z}$ 近似下的 SOC 就可以描述出较为合理的自旋-轨道劈裂。

## 参数的拟合

到目前为止，我们的模型在建立好之后一直依赖查文献来获取模型的参数，这对于 $\\mathrm{MoS_{2}}$ 这样已经十分熟悉的体系而言是没什么问题的，但对于一个文献鲜有报道的体系，我们就不得不自己来拟合这些参数。

我们来简化一下这个问题，它等同于：

> 有一个函数 $f$ ，它接受一个参数集 $\\left\\{p\\right\\}$ 并输出结果 $E$ ，现在求一个 $\\left\\{p\\right\\}$ 使得 $E$ 尽可能接近目标值 $E_{0}$ ，即
>
> $$
> \\begin{align}
> \\min_{p}{\\sum{\\left[f(\\left\\{p\\right\\}) - E_{0}\\right]^{2}}}
> \\end{align}
> $$
>
> - 其中 $f$ 即为紧束缚模型；
> - $\\left\\{p\\right\\} = \\left\\{\\epsilon_{1},\\epsilon_{2},t_{11},\\cdots\\right\\}$；
> - $E_{0}$ 为目标能带的具体数值。

这是一个典型的最优化问题，直接交给程序去完成即可。

### 目标能带

这里我们以 $\\mathrm{MoS_{2}}$ 为例演示如何通过拟合 HSE 能带（不带 SOC ）得到三能带紧束缚模型的参数值。图 6 中突出显示的为目标能带。

![使用 DFT + HSE06 计算得到的 MoS2 能带及选取的目标能带](https://ionizing.page/post/tmd-tightbinding/code/hse-target.png '图 6: 使用 DFT + HSE06 计算得到的 MoS2 能带及选取的目标能带')

### 构造损失函数

损失函数的构造其实相当简单，只需

$$
\\begin{align}
f_{\\mathrm{loss}}[p] = \\sum_{n,\\boldsymbol{k}}{\\left|E[p](n,\\boldsymbol{k}) - E_{0}(n,\\boldsymbol{k})\\right|^{2}|}
\\end{align}
$$

其中 $E[p](n, \\boldsymbol{k})$ 是在当前参数空间 $p$ 中计算所得到的能带值。这个损失函数其实就表示当前能带“距离目标能带有多远”，式中 $|\\quad|^{2}$ 就表示求两个量的欧氏距离。

### 程序设计和计算结果

这里我们使用 Julia 的 \`Optim.jl\` 包，大概流程如下

\`\`\`Julia title="Julia"
# Evaluate bands, pvec is the vector of TB params
function forward_bands(pvec, kpath, model, ...)
    # Const and diagonalize the Hamiltonian
    Hk = ...
    E = eigvals!(Hk)
    return E
end

# Loss function
function make_loss(Etarget, kpath, model, cache)
    function loss(pvec)
        Etb = forward_bands(pvec, kpath, model, cache)
        s = 0.0
        @inbounds for b in 1:3, i in 1:size(Etb,2)
            d = Etb[b,i] - Etarget[b,i]
            s += w * d*d
        end
        return s
    end
    return loss
end

# main function
loss = make_loss(Etarget, kpath, model, cache; mask=mask, p0=p0, reg=reg, nsegs=nsegs)

# 1) Coarse: Nelder-Mead (robust, no gradients)
res1 = optimize(loss, p0, NelderMead())
p1 = Optim.minimizer(res1)
@info "After NelderMead: loss = $(Optim.minimum(res1))"

# 2) Refine: BFGS (fast local)
res2 = optimize(loss, p1, BFGS(), Optim.Options(show_trace=true))
p_opt = Optim.minimizer(res2)
@info "After BFGS: loss = $(Optim.minimum(res2))"
\`\`\`

在上面的代码中，我们先用 \`NelderMead\` 方法进行快速地粗优化，然后在此基础上使用 \`BFGS\` 算法进行更精细化地优化，拟合所得参数如下：

|      参数      |    文献符号    | 数值（$\\mathrm{eV}$） |   参数   | 文献符号 | 数值（$\\mathrm{eV}$） |
| :------------: | :------------: | :-------------------: | :------: | :------: | :-------------------: |
| $\\epsilon_{1}$ | $\\epsilon_{1}$ |         1.126         | $t_{13}$ | $t_{2}$  |         0.653         |
| $\\epsilon_{2}$ | $\\epsilon_{2}$ |         2.211         | $t_{22}$ | $t_{11}$ |         0.205         |
|    $t_{11}$    |    $t_{0}$     |        -0.208         | $t_{23}$ | $t_{12}$ |         0.231         |
|    $t_{12}$    |    $t_{1}$     |        -0.203         | $t_{33}$ | $t_{22}$ |         0.065         |
|                |                |                       |          |          |                       |
|    $r_{11}$    |    $r_{0}$     |         0.055         | $r_{22}$ | $r_{11}$ |         0.023         |
|    $r_{12}$    |    $r_{1}$     |        -0.271         | $r_{23}$ | $r_{12}$ |         0.107         |
|    $r_{21}$    |    $r_{2}$     |         0.040         |          |          |                       |
|                |                |                       |          |          |                       |
|    $u_{11}$    |    $u_{0}$     |        -0.015         | $u_{22}$ | $u_{11}$ |         0.267         |
|    $u_{12}$    |    $u_{1}$     |         0.064         | $u_{23}$ | $u_{12}$ |         0.184         |
|    $u_{13}$    |    $u_{2}$     |         0.026         | $u_{33}$ | $u_{22}$ |         0.179         |

其对应的能带结果如图 7 所示

![MoS2 中 HSE06 能带与 TNN 模型能带对比](https://ionizing.page/post/tmd-tightbinding/code/pbe-TNN-hse.png '图 7: MoS2 中 HSE06 能带与 TNN 模型能带对比')

不难看出，用拟合参数计算得到的能带与 HSE 能带在 $\\Gamma$ 谷和 $K$ 谷复合的非常好，但在 $M$ 与 $M'$ 谷及附近还存在 $~15\\mathrm{meV}$ 左右的差距，尽管如此，笔者依然认为这是一个相当好的结果，至少证明了我们的程序是可用的。

## 模型的局限性

至此，我们已经给出了单层 TMD 体系中三能带紧束缚模型的完整构建过程，并证明该模型能够较好的再现 $K/K'$ 谷附近的低能电子结构。然而，在模型构建过程中我们不可避免地引入了一系列假设与近似，这也意味着该模型的适用性存在明确的边界。本节将系统总结三能带模型的适用范围，并讨论其主要局限性。

三能带模型仅保留了过渡金属（$M$）原子的 $|d_{z^{2}}\\rangle, |d_{xy}\\rangle, |d_{x^{2} - y^{2}}\\rangle$ 三个轨道。在这一近似下，该模型能够较为准确地描述 $K/K'$ 谷附近、费米能级上下若干电子伏特范围内的能带性质， 包括带隙大小、有效质量以及价带的自旋-轨道耦合劈裂等关键物理量。

然而，在以下情形中，三能带模型的局限性会逐渐显现：

- 在 $\\Gamma$ 点附近，导带底（CBM）往往不再由所选取的三条金属 $d$ 轨道主导。若希望正确描述 $\\Gamma$ 谷附近的能带结构，必须在基组中引入更多轨道自由度，例如硫（或硒）原子的 $p$ 轨道或金属原子的其他 $d$ 轨道；
- 当 $\\boldsymbol{k}$ 远离 $K/K'$ 点（例如靠近 $M/M'$ 谷）时，三能带模型对能带色散关系的描述精度明显下降；
- 对于远离费米能级的高能能带，该模型本身并不具备描述能力，此时应考虑采用多能带模型，甚至使用 Wannier 轨道基；
- 在当前模型中，自旋–轨道耦合仅以 on-site 项的形式引入，并忽略了 $L_{x}$ 和 $L_{y}$ 分量以及可能存在的 inter-site SOC，这一近似在研究精细自旋结构或强外场效应时可能不再充分；
- 模型的结构高度依赖于单层 TMD 材料所具有的 $D_{3h}$ 点群对称性。一旦体系的对称性被破坏，例如施加垂直电场或磁场、引入单轴应变、构造异质结或莫尔超结构，原有的对称性约束将不再成立，此时整个模型需要重新审视甚至重新构建。换言之，该模型在不同体系之间的泛用性是有限的。

以上讨论总结了三能带紧束缚模型的主要局限性。在实际研究中，只要所关注的物理问题处于其适用范围之内， 这一模型依然是一个结构简洁、物理清晰且行之有效的理论工具。

## 总结

本文以单层 TMD 材料的三能带紧束缚模型为核心，系统介绍了该模型的构建思路与实现过程。 我们从晶体结构与对称性分析出发，依次讨论了轨道基组的选择、紧束缚哈密顿量的构建方法以及自旋-轨道耦合的引入方式， 展示了如何在最小基组的框架下刻画 TMD 体系中最受关注的带边电子结构。

三能带模型之所以具有代表性，主要体现在以下几个方面：

- 单层 TMD 的导带底与价带顶主要由金属原子的三条 $d$ 轨道贡献，其它原子及轨道的影响可以在低能近似下被有效吸收，从而保留了带隙起源及带边态的本征轨道性质；
- 尽管模型中未显式包含硫（或硒）原子的轨道自由度，但金属原子之间的有效跃迁参数已经隐式地包含了 M–X–M 路径的贡献；
- 在模型构建的全过程中，对称性始终作为首要约束条件，这显著减少了自由参数数量，并保证了模型结构与物理结果的一致性。

凭借其简洁而不失物理内涵的特点，三能带紧束缚模型不仅是研究单层 TMD 能谷物理的重要工具，也非常适合作为紧束缚建模方法的入门示例。通过这一模型，人们可以清晰地看到如何在复杂材料体系中提炼出最关键的自由度，并在可控近似下建立具有明确物理解释力的有效理论。

## 代码下载

文中所有代码已经打包到[code.zip](https://ionizing.page/post/tmd-tightbinding/code.zip)，其中包括：

- 计算能带脚本：[tmd-tb-main.jl](https://ionizing.page/post/tmd-tightbinding/code/tmd-tb-main.jl)
- 画图脚本：[tmd-plot.py](https://ionizing.page/post/tmd-tightbinding/code/tmd-plot.py)
- TMD 紧束缚模型的参数：[tmd-params.toml](https://ionizing.page/post/tmd-tightbinding/code/tmd-params.toml)
- 拟合 HSE 能带的脚本：[tmd-fit-params.jl](https://ionizing.page/post/tmd-tightbinding/code/tmd-tb-fit-params.jl)
- $\\mathrm{MoS_{2}}$ 使用 DFT 计算得到的能带信息，这里不一一列举。

其中大部分代码是在我已经写好的基础上使用 ChatGPT 优化所得，因此需要给到 ChatGPT 部分 credit ，在此表示感谢。
`,a={title:"单层 TMD 材料的三能带紧束缚模型构建",author:"Ionizing",date:new Date(1774261886e3),lastMod:new Date(1774506874e3),tags:["物理","固体物理","TMD","TMDs","Python","Julia","紧束缚模型"],category:["物理","固体物理"],summary:"引用自外部网站，本文将从对称性与轨道选择出发，逐步构建单层 TMD 的三能带紧束缚模型，并说明它为何足以描述 K/K′ 点附近的带边性质。",comments:!0,draft:!1,sticky:0,exSlug:"https://ionizing.page/post/tmd-tightbinding/"},l={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TMDModel/TMD-TightBinding2.md",rawData:void 0};export{l as _internal,i as body,$ as collection,a as data,n as id,t as slug};
