const n="physics/TheoreticalMechanics/24-Final-Review-Post-Midterm.md",a="posts",$="physics/theoreticalmechanics/24-final-review-post-midterm",t=`
## 一、刚体运动学

### 1.1 刚体的自由度

|   运动类型   | 自由度 |             广义坐标             |
| :----------: | :----: | :------------------------------: |
|   自由刚体   |   6    |        质心坐标 + 欧拉角         |
|   定轴转动   |   1    |          转角 $\\theta$           |
|   定点转动   |   3    | 欧拉角 $(\\varphi, \\theta, \\psi)$ |
| 平面平行运动 |   3    |        $(x, y, \\varphi)$         |

### 1.2 欧拉角与角速度

**欧拉角**：进动角 $\\varphi$（绕 $z_0$）、章动角 $\\theta$（绕节线）、自转角 $\\psi$（绕 $z$）。

**欧拉运动学方程**（在随动坐标系中）：

$$
\\begin{align}
\\omega_x &= \\dot{\\theta} \\cos\\psi + \\dot{\\varphi} \\sin\\theta \\sin\\psi \\\\
\\omega_y &= -\\dot{\\theta} \\sin\\psi + \\dot{\\varphi} \\sin\\theta \\cos\\psi \\\\
\\omega_z &= \\dot{\\psi} + \\dot{\\varphi} \\cos\\theta
\\end{align}
$$

### 1.3 刚体上任一点的速度和加速度

**速度公式**（基点法）：

$$
\\begin{align}
\\boldsymbol{v}_P = \\boldsymbol{v}_C + \\boldsymbol{\\omega} \\times \\boldsymbol{r}_{CP}
\\end{align}
$$

**加速度公式**：

$$
\\begin{align}
\\boldsymbol{a}_P = \\boldsymbol{a}_C + \\boldsymbol{\\alpha} \\times \\boldsymbol{r}_{CP} + \\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\boldsymbol{r}_{CP})
\\end{align}
$$

**关键性质**：角速度 $\\boldsymbol{\\omega}$ 与基点的选择无关，是刚体的整体运动学量。

### 1.4 瞬时转心（平面平行运动）

在平面平行运动中，每一瞬时存在速度为零的点——**瞬时转心**。求法：

- 作两点速度的垂线，交点为瞬时转心
- 纯滚动时接触点为瞬时转心

以瞬时转心为基点，刚体在该瞬时做纯转动。

---

## 二、刚体动力学

### 2.1 转动惯量张量

**定义**：

$$
\\begin{align}
I_{ij} = \\int (r^2 \\delta_{ij} - x_i x_j) \\,\\mathrm{d}m
\\end{align}
$$

**角动量**（惯量主轴系中）：

$$
\\begin{align}
L_i = I_i \\omega_i \\quad (i=1,2,3)
\\end{align}
$$

**转动动能**：

$$
\\begin{align}
T = \\frac{1}{2} \\boldsymbol{\\omega} \\cdot \\boldsymbol{L} = \\frac{1}{2} (I_1 \\omega_1^2 + I_2 \\omega_2^2 + I_3 \\omega_3^2)
\\end{align}
$$

### 2.2 惯量主轴

对称轴必为惯量主轴；垂直于对称面的轴也是惯量主轴。惯量主轴系中 $I_{ij}$ 对角化。

### 2.3 欧拉动力学方程（随动坐标系）

$$
\\begin{align}
I_1 \\dot{\\omega}_1 + (I_3 - I_2) \\omega_2 \\omega_3 &= M_1 \\\\
I_2 \\dot{\\omega}_2 + (I_1 - I_3) \\omega_3 \\omega_1 &= M_2 \\\\
I_3 \\dot{\\omega}_3 + (I_2 - I_1) \\omega_1 \\omega_2 &= M_3
\\end{align}
$$

### 2.4 自由转动（欧拉陀螺）

外力矩为零时，角动量大小和动能守恒：

$$
\\begin{align}
L^2 &= I_1^2 \\omega_1^2 + I_2^2 \\omega_2^2 + I_3^2 \\omega_3^2 = \\text{常数} \\\\
T &= \\frac{1}{2} (I_1 \\omega_1^2 + I_2 \\omega_2^2 + I_3 \\omega_3^2) = \\text{常数}
\\end{align}
$$

### 2.5 拉格朗日陀螺（重力场中的对称陀螺）

对称陀螺（$I_1=I_2$），固定点到质心距离 $l$，拉格朗日函数：

$$
\\begin{align}
L = \\frac{1}{2} I_1 (\\dot{\\theta}^2 + \\dot{\\varphi}^2 \\sin^2\\theta) + \\frac{1}{2} I_3 (\\dot{\\psi} + \\dot{\\varphi} \\cos\\theta)^2 - Mgl \\cos\\theta
\\end{align}
$$

$\\varphi$ 和 $\\psi$ 为循环坐标，对应广义动量守恒。快速陀螺进动角速度：

$$
\\begin{align}
\\dot{\\varphi} \\approx \\frac{Mgl}{I_3 \\dot{\\psi}}
\\end{align}
$$

---

## 三、多自由度体系的微振动

### 3.1 线性化

平衡位置附近（稳定约束），动能和势能展开至二阶：

$$
\\begin{align}
T &= \\frac{1}{2} \\sum_{i,j} m_{ij} \\dot{q}_i \\dot{q}_j \\\\
V &= \\frac{1}{2} \\sum_{i,j} k_{ij} q_i q_j
\\end{align}
$$

### 3.2 运动方程

$$
\\begin{align}
\\sum_j (m_{ij} \\ddot{q}_j + k_{ij} q_j) = 0
\\end{align}
$$

### 3.3 简正频率与简正模式

设 $q_j = A_j e^{\\mathrm{i}\\omega t}$，得广义本征值问题：

$$
\\begin{align}
\\sum_j (k_{ij} - \\omega^2 m_{ij}) A_j = 0
\\end{align}
$$

非零解条件（久期方程）：

$$
\\begin{align}
\\det(\\boldsymbol{K} - \\omega^2 \\boldsymbol{M}) = 0
\\end{align}
$$

解得 $s$ 个简正频率 $\\omega_\\alpha$ 和对应的本征矢量（简正模式）。

### 3.4 简正坐标

存在线性变换使系统解耦为 $s$ 个独立谐振子：

$$
\\begin{align}
L = \\frac{1}{2} \\sum_{\\alpha=1}^s (\\dot{Q}_\\alpha^2 - \\omega_\\alpha^2 Q_\\alpha^2)
\\end{align}
$$

### 3.5 一维晶格的纵振动（连续极限）

离散模型色散关系：

$$
\\begin{align}
\\omega^2 = \\frac{4k}{m} \\sin^2\\left(\\frac{qa}{2}\\right)
\\end{align}
$$

长波极限 $qa \\ll 1$：$\\omega \\approx v q$，声速 $v = a\\sqrt{k/m}$。

---

## 四、阻尼振动与受迫振动

### 4.1 线性阻尼振动

运动方程：

$$
\\begin{align}
\\ddot{x} + 2\\beta \\dot{x} + \\omega_0^2 x = 0, \\quad \\beta = \\frac{\\gamma}{2m}, \\quad \\omega_0 = \\sqrt{\\frac{k}{m}}
\\end{align}
$$

**三种情况**：

|   类型   |        条件        |                                        解的形式                                         |
| :------: | :----------------: | :-------------------------------------------------------------------------------------: |
|  欠阻尼  | $\\beta < \\omega_0$ | $x = Ae^{-\\beta t}\\cos(\\omega_d t + \\varphi)$，$\\omega_d = \\sqrt{\\omega_0^2 - \\beta^2}$ |
| 临界阻尼 | $\\beta = \\omega_0$ |                               $x = (A + Bt)e^{-\\beta t}$                                |
|  过阻尼  | $\\beta > \\omega_0$ |         $x = Ae^{\\lambda_1 t} + Be^{\\lambda_2 t}$（$\\lambda_1,\\lambda_2 < 0$）          |

### 4.2 周期性强迫振动

运动方程：

$$
\\begin{align}
\\ddot{x} + 2\\beta \\dot{x} + \\omega_0^2 x = \\frac{F_0}{m} \\cos(\\omega t)
\\end{align}
$$

稳态解振幅：

$$
\\begin{align}
A(\\omega) = \\frac{F_0/m}{\\sqrt{(\\omega_0^2 - \\omega^2)^2 + 4\\beta^2 \\omega^2}}
\\end{align}
$$

**共振频率**：$\\omega_{\\text{res}} = \\sqrt{\\omega_0^2 - 2\\beta^2}$

**品质因子**：

$$
\\begin{align}
Q = \\frac{\\omega_0}{2\\beta}
\\end{align}
$$

---

## 五、哈密顿正则方程

### 5.1 广义动量与哈密顿函数

广义动量：

$$
\\begin{align}
p_\\alpha = \\frac{\\partial L}{\\partial \\dot{q}_\\alpha}
\\end{align}
$$

哈密顿函数（勒让德变换）：

$$
\\begin{align}
H(q,p,t) = \\sum_\\alpha p_\\alpha \\dot{q}_\\alpha - L
\\end{align}
$$

### 5.2 哈密顿正则方程

$$
\\begin{align}
\\dot{q}_\\alpha = \\frac{\\partial H}{\\partial p_\\alpha}, \\quad \\dot{p}_\\alpha = -\\frac{\\partial H}{\\partial q_\\alpha}
\\end{align}
$$

### 5.3 能量守恒条件

$H$ 不显含时间 $\\Rightarrow$ $H = \\text{常数}$。若约束稳定且势能与速度无关，则 $H = T + V$（机械能）。

### 5.4 循环坐标

若 $L$ 不显含 $q_\\alpha$，则 $q_\\alpha$ 为循环坐标，对应 $p_\\alpha$ 守恒。

---

## 六、变分法与哈密顿原理

### 6.1 欧拉-拉格朗日方程

泛函 $J[y] = \\int_{x_1}^{x_2} F(x,y,y') \\,\\mathrm{d}x$ 取极值的必要条件：

$$
\\begin{align}
\\frac{\\partial F}{\\partial y} - \\frac{\\mathrm{d}}{\\mathrm{d}x} \\frac{\\partial F}{\\partial y'} = 0
\\end{align}
$$

**初积分**：若 $F$ 不显含 $x$，则 $F - y' \\dfrac{\\partial F}{\\partial y'} = \\text{常数}$。

### 6.2 哈密顿原理

哈密顿作用量：

$$
\\begin{align}
S = \\int_{t_1}^{t_2} L(q,\\dot{q},t) \\,\\mathrm{d}t
\\end{align}
$$

哈密顿原理：$\\delta S = 0$，真实运动使作用量取极值。

由 $\\delta S = 0$ 可导出：

- 位形空间：拉格朗日方程
- 相空间：哈密顿正则方程

### 6.3 莫培督原理（等能变分）

$$
\\begin{align}
\\delta \\int \\sum_\\alpha p_\\alpha \\,\\mathrm{d}q_\\alpha = 0
\\end{align}
$$

适用于能量固定的情况，适合分析轨道问题。

---

## 七、正则变换

### 7.1 定义

正则变换 $(q,p) \\to (Q,P)$ 保持正则方程的形式不变。

### 7.2 四类母函数

|    母函数    | 自变量  |                          变换公式                          |           $H'$ 关系            |
| :----------: | :-----: | :--------------------------------------------------------: | :----------------------------: |
| $F_1(q,Q,t)$ | $(q,Q)$ | $p=\\partial F_1/\\partial q$，$P=-\\partial F_1/\\partial Q$  | $H'=H+\\partial F_1/\\partial t$ |
| $F_2(q,P,t)$ | $(q,P)$ |  $p=\\partial F_2/\\partial q$，$Q=\\partial F_2/\\partial P$  | $H'=H+\\partial F_2/\\partial t$ |
| $F_3(p,Q,t)$ | $(p,Q)$ | $q=-\\partial F_3/\\partial p$，$P=-\\partial F_3/\\partial Q$ | $H'=H+\\partial F_3/\\partial t$ |
| $F_4(p,P,t)$ | $(p,P)$ | $q=-\\partial F_4/\\partial p$，$Q=\\partial F_4/\\partial P$  | $H'=H+\\partial F_4/\\partial t$ |

### 7.3 泊松括号判别法

变换是正则变换的充要条件：

$$
\\begin{align}
[Q_\\alpha, Q_\\beta]_{q,p} = 0, \\quad [P_\\alpha, P_\\beta]_{q,p} = 0, \\quad [Q_\\alpha, P_\\beta]_{q,p} = \\delta_{\\alpha\\beta}
\\end{align}
$$

---

## 八、泊松括号

### 8.1 定义

$$
\\begin{align}
[f, g] = \\sum_\\alpha \\left( \\frac{\\partial f}{\\partial q_\\alpha} \\frac{\\partial g}{\\partial p_\\alpha} - \\frac{\\partial f}{\\partial p_\\alpha} \\frac{\\partial g}{\\partial q_\\alpha} \\right)
\\end{align}
$$

### 8.2 力学量的时间演化

$$
\\begin{align}
\\frac{\\mathrm{d}f}{\\mathrm{d}t} = [f, H] + \\frac{\\partial f}{\\partial t}
\\end{align}
$$

### 8.3 运动积分判据

不显含时间的 $f$ 是运动积分 $\\iff [f, H] = 0$。

### 8.4 基本性质

- 反对称性：$[f, g] = -[g, f]$
- 双线性：$[af + bg, h] = a[f, h] + b[g, h]$
- 莱布尼茨法则：$[fg, h] = f[g, h] + [f, h]g$
- 雅可比恒等式：$[f, [g, h]] + [g, [h, f]] + [h, [f, g]] = 0$
- 基本泊松括号：$[q_\\alpha, q_\\beta] = [p_\\alpha, p_\\beta] = 0$，$[q_\\alpha, p_\\beta] = \\delta_{\\alpha\\beta}$

### 8.5 泊松定理

若 $f$ 和 $g$ 均为运动积分，则 $[f, g]$ 也是运动积分。

---

## 九、哈密顿-雅可比方程

### 9.1 哈密顿主函数

选择第二类母函数 $S(q, P, t)$（哈密顿主函数），令 $H' = 0$：

$$
\\begin{align}
H\\left(q_1, \\dots, q_s, \\frac{\\partial S}{\\partial q_1}, \\dots, \\frac{\\partial S}{\\partial q_s}, t\\right) + \\frac{\\partial S}{\\partial t} = 0
\\end{align}
$$

### 9.2 哈密顿特征函数

若 $H$ 不显含时间（能量守恒），设 $S = W(q, P) - E(P)t$：

$$
\\begin{align}
H\\left(q, \\frac{\\partial W}{\\partial q}\\right) = E
\\end{align}
$$

### 9.3 由 $S$ 求运动

1. **轨道方程**：$\\partial S / \\partial P_\\alpha = \\text{常数}$
2. **运动方程**：$\\partial S / \\partial E = t - t_0$
3. **动量**：$p_\\alpha = \\partial S / \\partial q_\\alpha$

### 9.4 作用量-角变量

周期运动系统：

$$
\\begin{align}
J = \\oint p \\,\\mathrm{d}q
\\end{align}
$$

$J$ 是运动积分（绝热不变量），角变量 $\\dot{w} = \\nu = \\partial H / \\partial J$。

---

## 十、连续体与薛定谔方程

### 10.1 拉格朗日密度

连续体系用拉格朗日密度 $\\mathcal{L}(\\eta, \\partial_\\mu \\eta)$ 描述：

$$
\\begin{align}
L = \\int \\mathcal{L} \\,\\mathrm{d}^3 x
\\end{align}
$$

### 10.2 连续体系的拉格朗日方程

$$
\\begin{align}
\\frac{\\partial \\mathcal{L}}{\\partial \\eta_a} - \\partial_\\mu \\frac{\\partial \\mathcal{L}}{\\partial (\\partial_\\mu \\eta_a)} = 0
\\end{align}
$$

### 10.3 弹性棒纵振动

拉格朗日密度：

$$
\\begin{align}
\\mathcal{L} = \\frac{1}{2} \\rho \\dot{u}^2 - \\frac{1}{2} Y (u')^2
\\end{align}
$$

波动方程：$\\ddot{u} = v^2 u''$，$v = \\sqrt{Y/\\rho}$。

### 10.4 从哈-雅方程到薛定谔方程

薛定谔变换 $\\psi = e^{\\mathrm{i}S/\\hbar}$，将经典哈密顿-雅可比方程转化为薛定谔方程：

$$
\\begin{align}
\\left( -\\frac{\\hbar^2}{2m} \\nabla^2 + V \\right) \\psi = \\mathrm{i}\\hbar \\frac{\\partial \\psi}{\\partial t}
\\end{align}
$$

---

## 十一、核心公式速查表

|       知识点       |                                                                                           核心公式                                                                                           |
| :----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    刚体速度公式    |                                                    $\\boldsymbol{v}_P = \\boldsymbol{v}_C + \\boldsymbol{\\omega} \\times \\boldsymbol{r}_{CP}$                                                    |
|   欧拉运动学方程   | $\\omega_x = \\dot{\\theta}\\cos\\psi + \\dot{\\varphi}\\sin\\theta\\sin\\psi$，$\\omega_y = -\\dot{\\theta}\\sin\\psi + \\dot{\\varphi}\\sin\\theta\\cos\\psi$，$\\omega_z = \\dot{\\psi} + \\dot{\\varphi}\\cos\\theta$ |
|   欧拉动力学方程   |                                                                $I_1\\dot{\\omega}_1 + (I_3-I_2)\\omega_2\\omega_3 = M_1$（循环）                                                                 |
|    阻尼振动方程    |                                                                        $\\ddot{x} + 2\\beta\\dot{x} + \\omega_0^2 x = 0$                                                                         |
|    受迫振动振幅    |                                                         $A(\\omega) = (F_0/m) / \\sqrt{(\\omega_0^2 - \\omega^2)^2 + 4\\beta^2\\omega^2}$                                                          |
|   哈密顿正则方程   |                                            $\\dot{q}_\\alpha = \\partial H / \\partial p_\\alpha$，$\\dot{p}_\\alpha = -\\partial H / \\partial q_\\alpha$                                             |
| 哈密顿-雅可比方程  |                                                               $H(q, \\partial S / \\partial q, t) + \\partial S / \\partial t = 0$                                                               |
|      泊松括号      |                    $[f, g] = \\sum_\\alpha (\\partial f / \\partial q_\\alpha \\partial g / \\partial p_\\alpha - \\partial f / \\partial p_\\alpha \\partial g / \\partial q_\\alpha)$                    |
|  简正频率久期方程  |                                                                     $\\det(\\boldsymbol{K} - \\omega^2 \\boldsymbol{M}) = 0$                                                                     |
| 连续体拉格朗日方程 |                                     $\\partial \\mathcal{L} / \\partial \\eta_a - \\partial_\\mu [\\partial \\mathcal{L} / \\partial (\\partial_\\mu \\eta_a)] = 0$                                      |

---

## 十二、复习建议

1. **刚体部分**：重点掌握欧拉角的物理图像、角速度分解、转动惯量张量的计算（对称轴判断主轴）、欧拉方程的应用。

2. **微振动**：掌握由 $L$ 写出 $T$ 和 $V$ 的二次型、代入久期方程求简正频率、理解简正坐标的解耦意义。

3. **哈密顿理论**：

   - 正则方程：会由 $L$ 求 $H$，会写正则方程
   - 变分法：记住欧拉-拉格朗日方程及其初积分形式
   - 正则变换：记住四类母函数的变换公式，会用泊松括号判别
   - 泊松括号：记住定义和基本性质，会用泊松定理判断守恒量
   - 哈-雅方程：记住形式，会用分离变量法求解简单问题

4. **连续体**：理解拉格朗日密度的概念，会由 $\\mathcal{L}$ 推导波动方程，了解薛定谔方程的建立思路。

5. **考试提醒**：注意区分广义能量与机械能守恒的条件；注意正则变换中母函数各类的符号；注意阻尼振动三种情况的判断。
`,i={title:"理论力学（期中后）期末复习",author:"NeoWangKing",date:new Date(1782541243e3),lastMod:new Date(1782541252e3),tags:["物理","理论力学","期末复习","刚体","微振动","阻尼振动","哈密顿理论","连续体"],category:["物理","理论力学"],summary:"本文是理论力学课程的期末复习资料，覆盖期中考试之后的所有内容：刚体运动学与动力学（角速度、欧拉角、转动惯量张量、欧拉方程、陀螺）、多自由度微振动（简正坐标、简正频率、一维晶格）、阻尼振动与受迫振动、哈密顿理论（正则方程、变分法、哈密顿原理、正则变换、泊松括号、哈密顿-雅可比方程）以及连续体拉格朗日方程与薛定谔方程的建立。整理核心公式与关键方法，供期末备考使用。",comments:!0,draft:!1,sticky:0},l={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/24-Final-Review-Post-Midterm.md",rawData:void 0};export{l as _internal,t as body,a as collection,i as data,n as id,$ as slug};
