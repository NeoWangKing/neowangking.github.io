const n="physics/TMDModel/Graphene-TightBinding.md",$="posts",l="physics/tmdmodel/graphene-tightbinding",a=`
## 石墨烯的晶体结构与对称性分析

### 实空间结构与布里渊区

石墨烯的晶格结构中，每个原胞包含两个碳原子（标记为 A 和 B），它们形成了二维六角晶格。碳-碳键长 $a_{cc} \\approx 1.42$ Å，晶格常数 $a = \\sqrt{3}a_{cc} \\approx 2.46$ Å。

石墨烯的布里渊区同样为六角形。高对称点包括：

- $\\Gamma$ 点：布里渊区中心
- $K$ 和 $K'$ 点：六角形顶点（Dirac 点）
- $M$ 点：边中心

### 石墨烯的对称性

石墨烯的点群为 $D_{6h}$，主要包括以下对称操作：

1. 你这个有点奇怪啊，你说是不是^\\_^

1. **六重旋转对称性：** 绕 $z$ 轴旋转 $60^\\circ$ 后系统保持不变
1. **水平镜面反射：** 关于 $xy$ 平面反射（$\\sigma_h$）
1. **垂直镜面反射：** 沿碳-碳键方向的反射（$\\sigma_v$）

在最近邻近似下，我们主要关注以下对称操作：

|     对称操作     |    符号    |   表达式   |
| :--------------: | :--------: | :--------: |
| 旋转 $60^\\circ$  |   $C_6$    |   $C_6$    |
| 旋转 $120^\\circ$ |   $C_3$    |  $C_6^2$   |
|  沿 $yz$ 面反映  | $\\sigma_v$ | $\\sigma_v$ |

## 基组的确定

与 TMD 使用三个 $d$ 轨道不同，石墨烯的 $\\pi$ 能带仅由碳原子的 $p_z$ 轨道贡献。因此，我们的紧束缚模型基组简化为：

$$
\\begin{align}
\\left\\{|p_z^A\\rangle, |p_z^B\\rangle\\right\\}
\\end{align}
$$

其中 $|p_z^A\\rangle$ 和 $|p_z^B\\rangle$ 分别表示 A 和 B 子晶格上碳原子的 $p_z$ 轨道。

## 紧束缚哈密顿量的构建

### 坐标系与近邻原子

石墨烯的晶格矢量定义为：

$$
\\begin{align}
\\vec{a}_1 = \\left(\\frac{\\sqrt{3}}{2}a, \\frac{a}{2}\\right), \\quad
\\vec{a}_2 = \\left(\\frac{\\sqrt{3}}{2}a, -\\frac{a}{2}\\right)
\\end{align}
$$

最近邻矢量（从 A 原子指向最近邻的 B 原子）为：

$$
\\begin{align}
\\boldsymbol{\\delta}_1 = \\left(0, \\frac{a}{\\sqrt{3}}\\right), \\quad
\\boldsymbol{\\delta}_2 = \\left(\\frac{a}{2}, -\\frac{a}{2\\sqrt{3}}\\right), \\quad
\\boldsymbol{\\delta}_3 = \\left(-\\frac{a}{2}, -\\frac{a}{2\\sqrt{3}}\\right)
\\end{align}
$$

### 紧束缚模型哈密顿量

石墨烯的紧束缚哈密顿量在动量空间中表示为 $2\\times2$ 矩阵：

$$
\\begin{align}
H(\\boldsymbol{k}) =
\\begin{bmatrix}
H_{AA}(\\boldsymbol{k}) & H_{AB}(\\boldsymbol{k}) \\\\
H_{BA}(\\boldsymbol{k}) & H_{BB}(\\boldsymbol{k})
\\end{bmatrix}
\\end{align}
$$

#### 原位项

原位项对应于同一原子上的能量：

$$
\\begin{align}
H^{\\text{on-site}}_{AA} = \\langle p_z^A|\\hat{H}|p_z^A\\rangle = \\varepsilon_A
\\end{align}
$$

$$
\\begin{align}
H^{\\text{on-site}}_{BB} = \\langle p_z^B|\\hat{H}|p_z^B\\rangle = \\varepsilon_B
\\end{align}
$$

由于 A 和 B 原子是等价的，$\\varepsilon_A = \\varepsilon_B = \\varepsilon_0$。通常设 $\\varepsilon_0 = 0$ 作为能量零点。

#### 最近邻项

最近邻跳跃仅发生在 A 和 B 子晶格之间（A→B 或 B→A）。设从 A 到最近邻 B 原子的跳跃积分为 $t$（实数）：

$$
\\begin{align}
t = \\langle p_z^A(\\boldsymbol{r})|\\hat{H}|p_z^B(\\boldsymbol{r} - \\boldsymbol{\\delta}_1)\\rangle
\\end{align}
$$

由对称性可知，所有三个最近邻方向的跳跃积分相等：

$$
\\begin{align}
H_{AB}(\\boldsymbol{k}) = t \\sum_{n=1}^{3} e^{i\\boldsymbol{k}\\cdot\\boldsymbol{\\delta}_n} \\equiv t f(\\boldsymbol{k})
\\end{align}
$$

其中：

$$
\\begin{align}
f(\\boldsymbol{k}) = e^{i\\boldsymbol{k}\\cdot\\boldsymbol{\\delta}_1} + e^{i\\boldsymbol{k}\\cdot\\boldsymbol{\\delta}_2} + e^{i\\boldsymbol{k}\\cdot\\boldsymbol{\\delta}_3}
\\end{align}
$$

由厄米性可得：

$$
\\begin{align}
H_{BA}(\\boldsymbol{k}) = H_{AB}^*(\\boldsymbol{k}) = t f^*(\\boldsymbol{k})
\\end{align}
$$

### 完整的哈密顿量

将原位项和最近邻项合并，得到石墨烯的紧束缚哈密顿量：

$$
\\begin{align}
H(\\boldsymbol{k}) =
\\begin{bmatrix}
\\varepsilon_0 & t f(\\boldsymbol{k}) \\\\
t f^*(\\boldsymbol{k}) & \\varepsilon_0
\\end{bmatrix}
\\end{align}
$$

其中 $f(\\boldsymbol{k})$ 的具体表达式为：

$$
\\begin{align}
f(\\boldsymbol{k}) = e^{ik_y a/\\sqrt{3}} + 2e^{-ik_y a/(2\\sqrt{3})} \\cos\\left(\\frac{k_x a}{2}\\right)
\\end{align}
$$

## 能带求解

### 本征能量

对角化哈密顿量 $H(\\boldsymbol{k})$ 可得能带：

$$
\\begin{align}
E_{\\pm}(\\boldsymbol{k}) = \\varepsilon_0 \\pm |t| |f(\\boldsymbol{k})|
\\end{align}
$$

其中 $E_+(\\boldsymbol{k})$ 对应导带，$E_-(\\boldsymbol{k})$ 对应价带。

### Dirac 点

在 $K$ 和 $K'$ 点，$f(\\boldsymbol{k}) = 0$，因此：

$$
\\begin{align}
E_{\\pm}(K) = E_{\\pm}(K') = \\varepsilon_0
\\end{align}
$$

这意味着在 $K$ 和 $K'$ 点，导带和价带相交于费米能级，形成零带隙的半金属特性。

### 低能色散关系

在 $K$ 点附近展开 $f(\\boldsymbol{k})$，设 $\\boldsymbol{q} = \\boldsymbol{k} - \\boldsymbol{K}$，可得：

$$
\\begin{align}
f(\\boldsymbol{K} + \\boldsymbol{q}) \\approx \\frac{\\sqrt{3}a}{2}(q_y + i q_x)
\\end{align}
$$

因此低能色散关系为：

$$
\\begin{align}
E_{\\pm}(\\boldsymbol{q}) \\approx \\varepsilon_0 \\pm \\frac{\\sqrt{3}a}{2}|t| |\\boldsymbol{q}|
\\end{align}
$$

定义费米速度：

$$
\\begin{align}
v_F = \\frac{\\sqrt{3}a}{2} \\frac{|t|}{\\hbar}
\\end{align}
$$

则低能色散关系可写为：

$$
\\begin{align}
E_{\\pm}(\\boldsymbol{q}) = \\varepsilon_0 \\pm \\hbar v_F |\\boldsymbol{q}|
\\end{align}
$$

这表明石墨烯的低能激发是**无质量的 Dirac 费米子**，与 TMD 中的有质量 Dirac 费米子形成鲜明对比。

## 能带求解示例

以石墨烯的标准参数为例，取 $t = -2.8$ eV（负号表示跳跃降低能量），$\\varepsilon_0 = 0$ eV。

### 高对称点能量

计算各高对称点的能带能量：

| 高对称点 |  价带能量 (eV)   |  导带能量 (eV)   | 能隙 (eV) |
| :------: | :--------------: | :--------------: | :-------: |
| $\\Gamma$ | $-3\\|t\\| = -8.4$ | $+3\\|t\\| = +8.4$ |   16.8    |
|   $K$    |        0         |        0         |     0     |
|   $M$    | $-\\|t\\| = -2.8$  | $+\\|t\\| = +2.8$  |    5.6    |

### 能带结构特征

1. **Dirac 锥：** 在 $K$ 和 $K'$ 点附近，能带呈线性色散，形成 Dirac 锥
2. **零带隙：** 费米能级处无带隙，表现为半金属特性
3. **电子-空穴对称性：** 导带和价带关于费米能级对称

## 与 TMD 模型的对比

|       特性        |                    TMD (MoS₂)                    |       石墨烯        |
| :---------------: | :----------------------------------------------: | :-----------------: |
|     **基组**      |                   3个 $d$ 轨道                   |   1个 $p_z$ 轨道    |
|  **原胞原子数**   |                    1个 M 原子                    |     2个 C 原子      |
| **哈密顿量维度**  |                    $3\\times3$                    |     $2\\times2$      |
|   **最近邻数**    |                        6                         |          3          |
|   **原位参数**    |             $\\epsilon_1, \\epsilon_2$             |   $\\varepsilon_0$   |
|   **跳跃参数**    | $t_{11}, t_{12}, t_{13}, t_{22}, t_{23}, t_{33}$ |         $t$         |
|     **带隙**      |                 ~1.8 eV (半导体)                 |    0 eV (半金属)    |
|   **低能激发**    |               有质量 Dirac 费米子                | 无质量 Dirac 费米子 |
| **自旋-轨道耦合** |                 显著 (~0.15 eV)                  |   极弱 (~10 µeV)    |

## 参数总结

石墨烯最近邻紧束缚模型的关键参数如下：

|      参数      |      符号       |    数值    | 单位 |
| :------------: | :-------------: | :--------: | :--: |
|    晶格常数    |       $a$       |    2.46    |  Å   |
|   碳-碳键长    |    $a_{cc}$     |    1.42    |  Å   |
| 最近邻跳跃积分 |       $t$       |    -2.8    |  eV  |
|    原位能级    | $\\varepsilon_0$ |     0      |  eV  |
|    费米速度    |      $v_F$      | ~1.0 × 10⁶ | m/s  |

## 模型的局限性

尽管最近邻紧束缚模型成功描述了石墨烯的 Dirac 锥，但它也存在以下局限：

1. **电子-空穴不对称性：** 实际石墨烯的能带在远离 Dirac 点处存在轻微的电子-空穴不对称性，需要引入次近邻跳跃来修正
2. **高能能带：** 对于能量 > 3 eV 的能带，需要考虑更多轨道（如 $p_x, p_y$）的贡献
3. **自旋-轨道耦合：** 石墨烯的 SOC 极弱，但在某些量子输运现象中仍需考虑
4. **曲率效应：** 对于弯曲或应变的石墨烯，需要修正跳跃参数

## 总结

本文类比 TMD 三能带模型的构建方法，系统介绍了石墨烯最近邻紧束缚模型的构建过程。主要结论如下：

1. **模型简化：** 石墨烯的 $\\pi$ 能带仅需考虑 $p_z$ 轨道，哈密顿量为 $2\\times2$ 矩阵
2. **对称性约束：** $D_{6h}$ 点群对称性要求所有最近邻跳跃积分相等
3. **Dirac 锥：** 在 $K/K'$ 点附近，能带呈线性色散，形成无质量的 Dirac 费米子
4. **参数简洁：** 仅需一个跳跃参数 $t$ 即可描述主要的能带特征

该模型形式简单、物理清晰，是理解石墨烯新奇量子现象（如 Klein 隧穿、量子霍尔效应等）的基础工具。
`,o={title:"石墨烯最近邻紧束缚模型",author:"NeoWangKing",date:new Date(1775802856e3),lastMod:new Date(1775802856e3),tags:["物理","固体物理","TMD","TMDs","Python","紧束缚模型"],category:["物理","固体物理"],summary:"这是我在准备课题 单层 TMD 材料的三能带紧束缚模型构建 中的开题报告时整理的一些记录",comments:!0,draft:!0,sticky:0},e={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TMDModel/Graphene-TightBinding.md",rawData:void 0};export{e as _internal,a as body,$ as collection,o as data,n as id,l as slug};
