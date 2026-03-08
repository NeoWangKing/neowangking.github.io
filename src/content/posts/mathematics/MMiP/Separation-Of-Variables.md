---
title: 数理方法（2）：分离变量法
author: NeoWangKing
date: 2026-03-09T17:00:00.000Z
lastMod: 2026-03-09T17:00:00.000Z
tags: [数学, 物理, 数学物理方法, 分离变量法]
category: ['数学', '数学物理方法']
summary: 分离变量法是求解线性偏微分方程定解问题的常用方法，本文系统整理了齐次方程、非齐次方程、非齐次边界条件、泊松方程的处理步骤，并给出小结。
comments: true
draft: false
---

## 齐次方程的分离变量法

分离变量法（又称傅里叶级数法）适用于 **线性齐次偏微分方程** 及 **齐次边界条件**。其核心思想是将多元函数分解为单变量函数的乘积，代入方程后分离出若干个常微分方程，再利用边界条件确定本征值和本征函数，最后叠加所有特解并由初始条件确定系数。

### 基本步骤（以一维波动方程为例）

考虑定解问题：

$$
\begin{align}
\begin{cases}
u_{tt} - a^2 u_{xx} = 0, \quad 0 < x < l, \; t > 0, \\
u(0,t) = 0, \; u(l,t) = 0, \\
u(x,0) = \phi(x), \; u_t(x,0) = \psi(x).
\end{cases}
\end{align}
$$

1. **分离变量**：设 $u(x,t) = X(x)T(t)$，代入方程得

   $$
   \begin{align}
   X T'' - a^2 X'' T = 0 \quad \Rightarrow \quad \frac{T''}{a^2 T} = \frac{X''}{X} = -\lambda,
   \end{align}
   $$

   其中 $-\lambda$ 为分离常数。

2. **得到常微分方程组**：

   $$
   \begin{align}
   \begin{cases}
   X'' + \lambda X = 0, \\
   T'' + a^2 \lambda T = 0.
   \end{cases}
   \end{align}
   $$

3. **利用边界条件导出本征值问题**：由 $u(0,t)=X(0)T(t)=0$ 及 $u(l,t)=X(l)T(t)=0$，得

   $$
   \begin{align}
   X(0)=0, \quad X(l)=0.
   \end{align}
   $$

   求解 $X'' + \lambda X = 0$ 在边界条件下的非零解，得到本征值

   $$
   \begin{align}
   \lambda_n = \left( \frac{n\pi}{l} \right)^2, \quad n=1,2,3,\dots
   \end{align}
   $$

   相应的本征函数为

   $$
   \begin{align}
   X_n(x) = \sin \frac{n\pi x}{l}.
   \end{align}
   $$

4. **求时间函数**：将 $\lambda_n$ 代入 $T$ 的方程得

   $$
   \begin{align}
   T_n(t) = A_n \cos \frac{n\pi a}{l} t + B_n \sin \frac{n\pi a}{l} t.
   \end{align}
   $$

5. **叠加特解**：通解为所有特解的线性叠加

   $$
   \begin{align}
   u(x,t) = \sum_{n=1}^{\infty} \left( A_n \cos \frac{n\pi a}{l} t + B_n \sin \frac{n\pi a}{l} t \right) \sin \frac{n\pi x}{l}.
   \end{align}
   $$

6. **利用初始条件定系数**：由 $u(x,0) = \phi(x)$ 得

   $$
   \begin{align}
   \phi(x) = \sum_{n=1}^{\infty} A_n \sin \frac{n\pi x}{l},
   \end{align}
   $$

   由 $u_t(x,0) = \psi(x)$ 得

   $$
   \begin{align}
   \psi(x) = \sum_{n=1}^{\infty} B_n \frac{n\pi a}{l} \sin \frac{n\pi x}{l}.
   \end{align}
   $$

   利用正弦函数的正交性可得

   $$
   \begin{align}
   A_n = \frac{2}{l} \int_0^l \phi(x) \sin \frac{n\pi x}{l} \, dx, \quad
   B_n = \frac{2}{n\pi a} \int_0^l \psi(x) \sin \frac{n\pi x}{l} \, dx.
   \end{align}
   $$

> 本征函数的正交性是确定展开系数的关键。对于不同的边界条件，本征函数可能是余弦函数或更一般的正交函数系。

## 非齐次振动方程和输运方程

考虑带有源项的非齐次方程，例如

- 非齐次波动方程：$u_{tt} - a^2 u_{xx} = f(x,t)$，
- 非齐次热传导方程：$u_t - a^2 u_{xx} = f(x,t)$。

边界条件和初始条件仍为齐次（非齐次边界条件将在下一节处理）。

### 本征函数展开法（傅里叶级数法）

1. **确定本征函数系**：先求解对应齐次方程在齐次边界条件下的本征值问题，得到本征函数 $X_n(x)$。（对于一维问题，通常为 $\sin$ 或 $\cos$ 函数）

2. **将未知解和非齐次项按本征函数展开**：

   $$
   \begin{align}
   u(x,t) = \sum_{n=1}^{\infty} T_n(t) X_n(x), \quad
   f(x,t) = \sum_{n=1}^{\infty} f_n(t) X_n(x),
   \end{align}
   $$

   其中

   $$
   \begin{align}
   f_n(t) = \frac{\int_0^l f(x,t) X_n(x) \, dx}{\int_0^l X_n^2(x) \, dx}.
   \end{align}
   $$

3. **代入原方程**，利用本征函数满足的方程 $X_n'' + \lambda_n X_n = 0$ 及正交性，得到关于 $T_n(t)$ 的常微分方程：

   - 对于波动方程：$T_n''(t) + a^2 \lambda_n T_n(t) = f_n(t)$，
   - 对于热传导方程：$T_n'(t) + a^2 \lambda_n T_n(t) = f_n(t)$。

4. **求解 $T_n(t)$**（初值条件由原问题的初始条件通过展开得到），然后代回级数即得解。

> 该方法本质上是将偏微分方程投影到本征函数张成的空间上，将问题转化为一组常微分方程。求解 $T_n(t)$ 时通常用到常数变易法或拉普拉斯变换。

### 冲量定理法（Duhamel原理）

对于波动方程或热传导方程，也可以利用冲量定理将非齐次问题的解表示为对应齐次问题解的积分。以波动方程为例：

设 $w(x,t;\tau)$ 是下述齐次问题的解

$$
\begin{align}
\begin{cases}
w_{tt} - a^2 w_{xx} = 0, \\
w(x,0;\tau)=0, \quad w_t(x,0;\tau)=f(x,\tau),
\end{cases}
\end{align}
$$

则原非齐次问题的解为

$$
\begin{align}
u(x,t) = \int_0^t w(x,t-\tau;\tau) \, d\tau.
\end{align}
$$

该方法的优点是可以直接利用齐次问题的求解公式，避免展开系数的计算。

## 非齐次边界条件的处理

当边界条件非零时（例如 $u(0,t)=\mu(t), \; u(l,t)=\nu(t)$），需要先将其齐次化。

### 辅助函数法

1. **构造一个满足非齐次边界条件的简单函数 $v(x,t)$**。通常可选为线性插值：

   $$
   \begin{align}
   v(x,t) = \mu(t) + \frac{x}{l} \big( \nu(t) - \mu(t) \big).
   \end{align}
   $$

   若边界条件不随时间变化（常数），则可取 $v(x) = A x + B$。

2. **令 $u(x,t) = v(x,t) + w(x,t)$**，代入原方程和初始条件，得到关于 $w$ 的定解问题。此时 $w$ 的边界条件变为齐次，但方程可能变为非齐次（因为 $v$ 不一定满足原齐次方程），初始条件也需相应调整。

   - 波动方程：$w_{tt} - a^2 w_{xx} = f(x,t) - (v_{tt} - a^2 v_{xx})$，记为新源项 $\tilde{f}(x,t)$。
   - 热传导方程类似。

3. **求解 $w$ 的定解问题**：方程可能非齐次，但边界条件齐次，可用第2节的方法（本征函数展开）求解。

4. **最终解为 $u = v + w$**。

> 关键在于选择合适的辅助函数 $v$，使得 $w$ 的边界条件齐次。有时也可用特解叠加法，先求出满足非齐次边界条件的某个特解，再解齐次边界条件的剩余问题。

## 泊松方程

泊松方程是稳态方程（不含时间）：

$$
\begin{align}
\nabla^2 u = f(\mathbf{r}), \quad \mathbf{r} \in \Omega,
\end{align}
$$

边界条件通常为 $u|_{\partial\Omega} = g$（第一类）或其他类型。

### 求解思路

#### 1. 直接分离变量法（适用于规则区域且边界条件齐次）

例如矩形区域 $0<x<a,\;0<y<b$ 上的泊松方程 $u_{xx}+u_{yy}=f(x,y)$，且边界条件齐次（$u=0$ 或 $u_x=0$ 等）。

- 设解为 $u(x,y) = \sum_{m,n} A_{mn} X_m(x) Y_n(y)$，其中 $X_m, Y_n$ 是相应齐次拉普拉斯方程在给定边界条件下的本征函数。
- 将 $f(x,y)$ 也按同一本征函数系展开，代入方程利用正交性得到 $A_{mn}$ 的代数方程，直接解出。

#### 2. 特解 + 齐次解

若边界条件非齐次，可先找一个特解 $u_p$ 满足 $\nabla^2 u_p = f$（可用本征函数展开或格林函数法寻找），然后令 $u = u_p + v$，则 $v$ 满足拉普拉斯方程 $\nabla^2 v = 0$ 及修正后的边界条件。拉普拉斯方程仍可用分离变量法求解。

### 例：矩形区域泊松方程

考虑

$$
\begin{align}
\begin{cases}
u_{xx}+u_{yy} = f(x,y), \quad 0<x<a,\;0<y<b, \\
u(0,y)=0,\; u(a,y)=0,\; u(x,0)=0,\; u(x,b)=0.
\end{cases}
\end{align}
$$

1. 对应齐次拉普拉斯方程的本征函数为 $\sin\frac{m\pi x}{a}\sin\frac{n\pi y}{b}$，本征值为 $-\left(\frac{m^2\pi^2}{a^2}+\frac{n^2\pi^2}{b^2}\right)$。

2. 将 $u$ 和 $f$ 展开为双重傅里叶正弦级数：

   $$
   \begin{align}
   u(x,y) = \sum_{m=1}^{\infty}\sum_{n=1}^{\infty} A_{mn} \sin\frac{m\pi x}{a}\sin\frac{n\pi y}{b},
   \end{align}
   $$

   $$
   \begin{align}
   f(x,y) = \sum_{m=1}^{\infty}\sum_{n=1}^{\infty} f_{mn} \sin\frac{m\pi x}{a}\sin\frac{n\pi y}{b},
   \end{align}
   $$

   其中

   $$
   \begin{align}
   f_{mn} = \frac{4}{ab}\int_0^a\int_0^b f(x,y) \sin\frac{m\pi x}{a}\sin\frac{n\pi y}{b} \, dy\,dx.
   \end{align}
   $$

3. 代入方程得

   $$
   \begin{align}
   -\left( \frac{m^2\pi^2}{a^2}+\frac{n^2\pi^2}{b^2} \right) A_{mn} = f_{mn},
   \end{align}
   $$

   所以

   $$
   \begin{align}
   A_{mn} = -\frac{f_{mn}}{\frac{m^2\pi^2}{a^2}+\frac{n^2\pi^2}{b^2}}.
   \end{align}
   $$

4. 回代即得解。

> 注意：当分母为零时（即齐次方程有零本征值），需要检查相容性条件（Fredholm 择一定理），此时方程有解的条件是 $f$ 与零本征值对应的本征函数正交。

## 分离变量法小结

1. **适用范围**：线性齐次（或可化为齐次）偏微分方程，规则区域，边界条件简单（齐次或可齐次化）。

2. **核心步骤**：

   - 分离变量 → 导出本征值问题 → 确定本征值和本征函数；
   - 将解按本征函数展开，利用正交性将问题转化为常微分方程组或代数方程组；
   - 叠加特解，利用初始条件或非齐次项确定展开系数。

3. **关键点**：

   - 本征函数的正交性及完备性是展开的基础；
   - 边界条件决定本征函数的形式；
   - 非齐次方程通常通过本征函数展开处理；
   - 非齐次边界条件需先齐次化。

4. **常见问题类型总结**：

   - **齐次方程 + 齐次边界条件**：直接分离变量，得本征值问题，叠加，由初始条件定系数。
   - **非齐次方程 + 齐次边界条件**：本征函数展开法或冲量定理法。
   - **非齐次边界条件**：辅助函数法先齐次化边界，再处理方程（可能变为非齐次）。
   - **泊松方程（稳态）**：可视为“时间无关”的非齐次方程，仍可用本征函数展开；边界条件非齐次时需找特解。

5. **与其他方法的联系**：分离变量法本质上是将偏微分方程在合适的函数空间中投影，与积分变换法（傅里叶变换、拉普拉斯变换）有密切联系。当区域无界时，本征函数连续，分离变量法过渡为积分变换法。

> 分离变量法是数学物理方法的基石之一，熟练掌握它对后续学习格林函数法、积分变换法等大有裨益。
