const n="physics/TheoreticalMechanics/00-Medium-Examination.md",a="posts",$="physics/theoreticalmechanics/00-medium-examination",t=`
## 一、牛顿力学基础

### 1. 牛顿定律

- **第一定律**（惯性定律）：物体保持静止或匀速直线运动，除非外力作用。
- **第二定律**：$\\boldsymbol{F} = \\dfrac{d\\boldsymbol{p}}{dt} = m\\boldsymbol{a}$（质量恒定）。
- **第三定律**：$\\boldsymbol{F}_{12} = -\\boldsymbol{F}_{21}$。

### 2. 常见坐标系下的加速度

- **直角坐标**：$a_x=\\ddot{x},\\ a_y=\\ddot{y},\\ a_z=\\ddot{z}$。
- **极坐标**：$a_r = \\ddot{r} - r\\dot{\\theta}^2$，$a_\\theta = r\\ddot{\\theta}+2\\dot{r}\\dot{\\theta}$。
- **柱坐标**：类似极坐标，加上 $z$ 方向加速度 $\\ddot{z}$。
- **自然坐标**：$a_t = \\dot{v}$，$a_n = v^2/\\rho$（$\\rho$ 曲率半径）。

### 3. 质点系动力学

- **质心**：$\\displaystyle \\boldsymbol{r}_c = \\frac{\\sum m_i \\boldsymbol{r}_i}{\\sum m_i}$。
- **质心运动定理**：$M\\ddot{\\boldsymbol{r}}_c = \\boldsymbol{F}^{\\text{(ext)}}$。
- **动量定理**：$\\dfrac{d\\boldsymbol{P}}{dt} = \\boldsymbol{F}^{\\text{(ext)}}$。
- **角动量定理**：$\\dfrac{d\\boldsymbol{L}}{dt} = \\boldsymbol{M}^{\\text{(ext)}}$。
- **动能定理**：$dT = \\sum \\boldsymbol{F}_i \\cdot d\\boldsymbol{r}_i$。

### 4. 守恒律（对称性背景）

| 守恒量 | 条件              | 对称性   |
| ------ | ----------------- | -------- |
| 动量   | 合外力为零        | 空间平移 |
| 角动量 | 合外力矩为零      | 空间旋转 |
| 机械能 | 保守力 + 稳定约束 | 时间平移 |

---

## 二、约束与虚功原理

### 1. 约束分类

- **完整约束**：只限制坐标和时间，可积分。$f(\\boldsymbol{r}_i, t)=0$。
- **非完整约束**：包含速度且不可积分。
- **稳定约束**：不显含时间；**不稳定约束**：显含时间。

### 2. 虚位移与虚功

- **虚位移** $\\delta \\boldsymbol{r}_i$：约束允许的任意无穷小位移（固定时间）。
- **虚功** $\\delta W = \\sum \\boldsymbol{F}_i \\cdot \\delta \\boldsymbol{r}_i$。
- **理想约束**：$\\sum \\boldsymbol{N}_i \\cdot \\delta \\boldsymbol{r}_i = 0$（光滑面、刚性杆、纯滚动等）。

### 3. 达朗贝尔方程（动力学普遍方程）

$$
\\sum_i (\\boldsymbol{F}_i - m_i\\ddot{\\boldsymbol{r}}_i) \\cdot \\delta \\boldsymbol{r}_i = 0
$$

- 消去约束力，适用于理想约束体系。

### 4. 虚功原理（静力学）

平衡时：$\\sum \\boldsymbol{F}_i \\cdot \\delta \\boldsymbol{r}_i = 0$。

---

## 三、拉格朗日方程

### 1. 广义坐标与自由度

- 自由度 $s = 3n - k$（完整约束数 $k$）。
- 广义坐标 $q_\\alpha$（$s$ 个独立参量）。

### 2. 广义力

$$
Q_\\alpha = \\sum_i \\boldsymbol{F}_i \\cdot \\frac{\\partial \\boldsymbol{r}_i}{\\partial q_\\alpha}
$$

- 保守力时 $Q_\\alpha = -\\dfrac{\\partial V}{\\partial q_\\alpha}$。

### 3. 拉格朗日方程的一般形式

$$
\\frac{d}{dt}\\left( \\frac{\\partial T}{\\partial \\dot{q}_\\alpha} \\right) - \\frac{\\partial T}{\\partial q_\\alpha} = Q_\\alpha
$$

### 4. 保守体系的拉格朗日方程

- 拉格朗日函数 $L = T - V$。
- 方程：$\\dfrac{d}{dt}\\left( \\dfrac{\\partial L}{\\partial \\dot{q}_\\alpha} \\right) - \\dfrac{\\partial L}{\\partial q_\\alpha} = 0$。

### 5. 应用步骤

1. 确定自由度，选取广义坐标。
2. 用广义坐标、广义速度写出 $T$ 和 $V$。
3. 构造 $L = T - V$。
4. 代入拉格朗日方程得到运动方程。

---

## 四、守恒量与对称性

### 1. 广义能量积分

- 若 $L$ 不显含 $t$，则 $H = \\sum_\\alpha \\dfrac{\\partial L}{\\partial \\dot{q}_\\alpha} \\dot{q}_\\alpha - L = \\text{常数}$。
- 稳定约束 + 势能无关速度 → $H = T+V$（机械能守恒）。

### 2. 循环坐标与广义动量

- 若 $\\dfrac{\\partial L}{\\partial q_\\alpha}=0$（$q_\\alpha$ 为循环坐标），则 $p_\\alpha = \\dfrac{\\partial L}{\\partial \\dot{q}_\\alpha} = \\text{常数}$。
- 对应守恒量：动量、角动量等。

### 3. 诺特定理

- 对称性 → 守恒量：
  - 时间平移 → 能量守恒
  - 空间平移 → 动量守恒
  - 空间旋转 → 角动量守恒

---

## 五、瞬时力问题（碰撞、冲量）

### 1. 拉格朗日方程的积分形式

- 冲量作用时间极短，广义坐标不变，广义动量突变：
  $$
  \\left[ \\frac{\\partial T}{\\partial \\dot{q}_\\alpha} \\right]_{t_0^-}^{t_0^+} = \\hat{Q}_\\alpha
  $$
- 广义冲量：$\\hat{Q}_\\alpha = \\int Q_\\alpha dt = \\sum_i \\boldsymbol{I}_i \\cdot \\dfrac{\\partial \\boldsymbol{r}_i}{\\partial q_\\alpha}$。

### 2. 碰撞恢复系数

- 沿法向：$e = \\dfrac{v_2' - v_1'}{v_1 - v_2}$，$0\\le e\\le 1$。
- 完全弹性：$e=1$；完全非弹性：$e=0$。

---

## 六、两体问题与中心势场

### 1. 两体约化为单粒子

- 质心坐标 $\\boldsymbol{R}$，相对坐标 $\\boldsymbol{r}$。
- 约化质量 $\\mu = \\dfrac{m_1 m_2}{m_1+m_2}$。
- 运动分解：质心自由运动 + 相对运动（质量为 $\\mu$，势 $V(r)$）。

### 2. 中心势场中的守恒量

- 角动量守恒：$\\boldsymbol{L} = \\mu r^2 \\dot{\\theta} \\hat{\\boldsymbol{z}}$（大小 $l = \\mu r^2 \\dot{\\theta}$）。
- 能量守恒：$E = \\frac{1}{2}\\mu (\\dot{r}^2 + r^2\\dot{\\theta}^2) + V(r)$。

### 3. 有效势能与径向运动

- 有效势能：$V_{\\text{eff}}(r) = V(r) + \\dfrac{l^2}{2\\mu r^2}$。
- 径向方程：$E = \\frac{1}{2}\\mu \\dot{r}^2 + V_{\\text{eff}}(r)$。

### 4. 平方反比引力（$V = -k/r$，$k>0$）

- 轨道方程：$\\dfrac{1}{r} = \\dfrac{\\mu k}{l^2} [1 + e \\cos(\\theta - \\theta_0)]$，$e = \\sqrt{1 + \\dfrac{2E l^2}{\\mu k^2}}$。
- 轨道类型：
  - $E < 0$ → 椭圆（$e<1$，圆 $e=0$）
  - $E = 0$ → 抛物线（$e=1$）
  - $E > 0$ → 双曲线（$e>1$）

### 5. 轨道稳定性

- 圆轨道稳定性：$V_{\\text{eff}}''(r_0) > 0$ 稳定。  
  对 $V(r) = -\\alpha r^{-\\beta}$，稳定条件 $\\beta < 2$。  
  平方反比力（$\\beta=1$）稳定。

### 6. 散射截面（卢瑟福散射）

- 微分散射截面：$\\dfrac{d\\sigma}{d\\Omega} = \\left| \\dfrac{b}{\\sin\\theta} \\dfrac{db}{d\\theta} \\right|$。
- 库仑散射：$\\dfrac{d\\sigma}{d\\Omega} = \\left( \\dfrac{\\alpha}{4E} \\right)^2 \\dfrac{1}{\\sin^4(\\theta/2)}$，$\\alpha = \\dfrac{q_1 q_2}{4\\pi\\epsilon_0}$。

---

## 七、微振动（多自由度体系）

### 1. 平衡附近线性化

- 势能展开：$V \\approx V_0 + \\frac{1}{2}\\sum_{i,j} k_{ij} q_i q_j$，$k_{ij} = \\left.\\frac{\\partial^2 V}{\\partial q_i \\partial q_j}\\right|_0$。
- 动能近似：$T \\approx \\frac{1}{2}\\sum_{i,j} m_{ij} \\dot{q}_i \\dot{q}_j$，$m_{ij}$ 常数。

### 2. 运动方程（矩阵形式）

$$
\\boldsymbol{M} \\ddot{\\boldsymbol{q}} + \\boldsymbol{K} \\boldsymbol{q} = 0
$$

- 设简正模解 $\\boldsymbol{q} = \\boldsymbol{a} e^{i\\omega t}$ → 广义本征方程：
  $$
  (\\boldsymbol{K} - \\omega^2 \\boldsymbol{M}) \\boldsymbol{a} = 0
  $$
- 久期方程：$\\det(\\boldsymbol{K} - \\omega^2 \\boldsymbol{M}) = 0$，解得 $\\omega^2$（简正频率）。

### 3. 简正坐标

- 线性变换使 $T$ 和 $V$ 同时对角化：
  $$
  L = \\frac{1}{2}\\sum_{\\alpha=1}^s (\\dot{Q}_\\alpha^2 - \\omega_\\alpha^2 Q_\\alpha^2)
  $$
- 每个简正坐标对应独立谐振子，运动为简正模式的叠加。

### 4. 两自由度示例（对称耦合摆）

- 简正频率：$\\omega_1 = \\sqrt{g/l}$，$\\omega_2 = \\sqrt{g/l + 2ka^2/(m l^2)}$。
- 简正模式：同相摆动、反相摆动。

---

## 八、常用数学工具

- 欧拉-拉格朗日方程变分推导。
- 保守力与势能梯度。
- 勒让德变换（用于定义哈密顿量，了解即可）。
- 二次型对角化（简正坐标）。

---

## 九、典型解题思路总结

| 问题类型             | 主要方法                                        | 关键步骤                     |
| -------------------- | ----------------------------------------------- | ---------------------------- |
| 单质点运动           | 牛顿第二定律                                    | 坐标系选好，列出分量方程     |
| 约束体系（求约束力） | 牛顿法 + 约束方程，或释放约束虚功原理           | 分离主动力与约束力           |
| 无约束力需求         | 拉格朗日方程                                    | 选广义坐标，求 $L$，代入方程 |
| 求平衡位置           | 广义力为零，或 $\\partial V/\\partial q_\\alpha=0$ | 势能展开到二阶判断稳定性     |
| 瞬时力（碰撞）       | 拉格朗日方程积分形式                            | 计算动量增量，结合恢复系数   |
| 中心势场轨道         | 能量守恒、角动量守恒、比耐公式                  | 有效势能分析，求轨道方程     |
| 多自由度微振动       | 简正坐标法                                      | 写出 $T$、$V$，解本征方程    |

---

以上为理论力学期中考试核心内容，祝你考试顺利！
`,l={title:"理论力学期中复习笔记",author:"NeoWangKing",date:new Date(1777087744e3),lastMod:new Date(1777087744e3),tags:["物理","理论力学"],category:["物理","理论力学"],summary:"期中复习临时笔记",comments:!0,draft:!1,sticky:0},o={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/00-Medium-Examination.md",rawData:void 0};export{o as _internal,t as body,a as collection,l as data,n as id,$ as slug};
