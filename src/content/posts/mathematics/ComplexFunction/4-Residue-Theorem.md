---
title: 复变函数论（4）：留数定理
author: NeoWangKing
date: 2026-03-09
lastMod: 2026-03-09T23:30:00.000Z
tags: [数学, 复变函数, 留数定理, 实积分]
category: ['数学', '复变函数论']
summary: 留数定理是复变函数中计算围道积分的强有力工具，并能应用于计算某些实变函数的定积分。本文介绍留数定理及其在实积分计算中的典型应用，辅以具体例子。
comments: true
draft: false
---

## 留数定理

### 留数的定义

设 $z_0$ 是解析函数 $f(z)$ 的孤立奇点，在 $z_0$ 的去心邻域内 $f(z)$ 有洛朗展开

$$
\begin{align}
f(z) = \sum_{n=-\infty}^{\infty} c_n (z - z_0)^n.
\end{align}
$$

则 $c_{-1}$ 称为 $f(z)$ 在 $z_0$ 处的 **留数**，记作 $\mathrm{Res}[f, z_0]$。

由洛朗系数的积分公式，

$$
\begin{align}
\mathrm{Res}[f, z_0] = c_{-1} = \frac{1}{2\pi \mathrm{i}} \oint_C f(z) \, dz,
\end{align}
$$

其中 $C$ 是环绕 $z_0$ 一周且不包含其他奇点的简单闭曲线（逆时针方向）。

### 留数定理

**定理**：设 $C$ 是一条正向简单闭曲线，$f(z)$ 在 $C$ 内部除有限个孤立奇点 $z_1, z_2, \dots, z_n$ 外处处解析，且在 $C$ 上解析，则

$$
\begin{align}
\oint_C f(z) \, dz = 2\pi \mathrm{i} \sum_{k=1}^{n} \mathrm{Res}[f, z_k].
\end{align}
$$

**证明思路**：将 $C$ 内每个奇点用小圆周包围，利用复连通区域的柯西定理，将积分转化为各小圆周上积分的和，再由留数定义得证。

### 留数的计算

对于不同类型的奇点，留数有简便算法：

- **可去奇点**：$c_{-1}=0$。
- **一阶极点**：若 $z_0$ 为 $f(z)$ 的一阶极点，则

  $$
  \begin{align}
  \mathrm{Res}[f, z_0] = \lim_{z\to z_0} (z - z_0) f(z).
  \end{align}
  $$

  特别地，若 $f(z) = \frac{P(z)}{Q(z)}$，$P(z_0) \neq 0$，$Q(z_0)=0$，$Q'(z_0) \neq 0$，则

  $$
  \begin{align}
  \mathrm{Res}[f, z_0] = \frac{P(z_0)}{Q'(z_0)}.
  \end{align}
  $$

- **$m$ 阶极点**：若 $z_0$ 为 $m$ 阶极点，则

  $$
  \begin{align}
  \mathrm{Res}[f, z_0] = \frac{1}{(m-1)!} \lim_{z\to z_0} \frac{d^{m-1}}{dz^{m-1}} \left[ (z - z_0)^m f(z) \right].
  \end{align}
  $$

## 应用留数定理计算实变函数的定积分

留数定理的核心应用之一是计算某些实变函数的定积分，特别是广义积分。基本思路是将实积分转化为复平面上的围道积分，然后利用留数定理计算。常见的积分类型及处理方法如下。

### 类型一：三角函数有理式的积分

考虑形如 $\int_{0}^{2\pi} R(\cos\theta, \sin\theta) \, d\theta$ 的积分，其中 $R$ 是 $\cos\theta, \sin\theta$ 的有理函数。令 $z = e^{\mathrm{i}\theta}$，则 $d\theta = \frac{dz}{\mathrm{i}z}$，$\cos\theta = \frac{z + z^{-1}}{2}$，$\sin\theta = \frac{z - z^{-1}}{2\mathrm{i}}$，积分变为单位圆上的围道积分：

$$
\begin{align}
\int_{0}^{2\pi} R(\cos\theta, \sin\theta) \, d\theta = \oint_{|z|=1} F(z) \, \frac{dz}{\mathrm{i}z},
\end{align}
$$

其中 $F(z)$ 是 $z$ 的有理函数。然后计算单位圆内所有奇点的留数和，乘以 $2\pi$ 即得结果。

### 类型二：有理函数的无穷积分

考虑形如 $\int_{-\infty}^{\infty} R(x) \, dx$ 的积分，其中 $R(x) = P(x)/Q(x)$，$P,Q$ 为多项式，分母次数至少比分子高两次，且分母无实零点。则

$$
\begin{align}
\int_{-\infty}^{\infty} R(x) \, dx = 2\pi \mathrm{i} \sum_{\text{上半平面}} \mathrm{Res}[R(z), z_k],
\end{align}
$$

其中求和取上半平面内的所有孤立奇点（通常是极点）。证明采用上半圆围道，利用大圆弧引理可得。

### 类型三：含三角函数的无穷积分

考虑形如 $\int_{-\infty}^{\infty} R(x) e^{\mathrm{i} a x} \, dx$ 的积分，其中 $a>0$，$R(x)$ 为有理函数，分母次数高于分子次数，且分母无实零点。则

$$
\begin{align}
\int_{-\infty}^{\infty} R(x) e^{\mathrm{i} a x} \, dx = 2\pi \mathrm{i} \sum_{\text{上半平面}} \mathrm{Res}\left[ R(z) e^{\mathrm{i} a z}, z_k \right].
\end{align}
$$

取其实部或虚部可得 $\int R(x) \cos(ax) dx$ 或 $\int R(x) \sin(ax) dx$。证明需用到约当引理（Jordan's Lemma）以确保上半圆弧积分趋于零。

### 类型四：实轴上有单极点的积分（柯西主值）

若 $R(x)$ 在实轴上有单极点，则需取柯西主值，并以小半圆绕开极点。例如

$$
\begin{align}
\mathrm{P.V.} \int_{-\infty}^{\infty} R(x) e^{\mathrm{i} a x} \, dx = \pi \mathrm{i} \sum_{\text{实轴上极点}} \mathrm{Res} + 2\pi \mathrm{i} \sum_{\text{上半平面}} \mathrm{Res}.
\end{align}
$$

## 计算定积分的一些例子

### 例1：计算一个三角函数有理式的积分（$a>1$）

计算 $I = \int_{0}^{2\pi} \frac{d\theta}{a + \cos\theta}$，其中 $a>1$。

解：令 $z = e^{\mathrm{i}\theta}$，则 $\cos\theta = \frac{z+z^{-1}}{2}$，$d\theta = dz/(\mathrm{i}z)$，积分化为

$$
\begin{align}
I = \oint_{|z|=1} \frac{1}{a + \frac{z+z^{-1}}{2}} \frac{dz}{\mathrm{i}z}
= \frac{2}{\mathrm{i}} \oint_{|z|=1} \frac{dz}{z^2 + 2a z + 1}.
\end{align}
$$

分母 $z^2 + 2a z + 1 = 0$ 的根为 $z = -a \pm \sqrt{a^2-1}$。由于 $a>1$，两根皆为实数，且乘积为 $1$，故一根在单位圆内，一根在外。记 $z_1 = -a + \sqrt{a^2-1}$（绝对值小于 $1$），则

$$
\begin{align}
I = \frac{2}{\mathrm{i}} \cdot 2\pi \mathrm{i} \, \mathrm{Res}\left[ \frac{1}{z^2+2a z+1}, z_1 \right] = 4\pi \cdot \frac{1}{2z_1+2a}.
\end{align}
$$

计算 $2z_1+2a = 2\sqrt{a^2-1}$，故

$$
\begin{align}
I = \frac{2\pi}{\sqrt{a^2-1}}.
\end{align}
$$

### 例2：计算一个有理函数的无穷积分

计算 $I = \int_{-\infty}^{\infty} \frac{dx}{(x^2+1)(x^2+4)}$。

解：被积函数是有理函数，分母次数比分子高 $4$，满足类型二条件。上半平面内的奇点为 $z = \mathrm{i}$（一阶极点）和 $z = 2\mathrm{i}$（一阶极点？注意分母 $(z^2+1)(z^2+4) = (z-\mathrm{i})(z+\mathrm{i})(z-2\mathrm{i})(z+2\mathrm{i})$，所以 $z=\mathrm{i},2\mathrm{i}$ 均为单极点）。计算留数：

$$
\begin{align}
\mathrm{Res}\left[ \frac{1}{(z^2+1)(z^2+4)}, \mathrm{i} \right] = \lim_{z\to \mathrm{i}} \frac{z-\mathrm{i}}{(z-\mathrm{i})(z+\mathrm{i})(z^2+4)} = \frac{1}{(2\mathrm{i})(-1+4)} = \frac{1}{6\mathrm{i}}.
\end{align}
$$

$$
\begin{align}
\mathrm{Res}\left[ \frac{1}{(z^2+1)(z^2+4)}, 2\mathrm{i} \right] = \lim_{z\to 2\mathrm{i}} \frac{z-2\mathrm{i}}{(z^2+1)(z-2\mathrm{i})(z+2\mathrm{i})} = \frac{1}{((-4)+1)(4\mathrm{i})} = \frac{1}{-3\cdot 4\mathrm{i}} = -\frac{1}{12\mathrm{i}}.
\end{align}
$$

因此，

$$
\begin{align}
I = 2\pi \mathrm{i} \left( \frac{1}{6\mathrm{i}} - \frac{1}{12\mathrm{i}} \right) = 2\pi \mathrm{i} \cdot \frac{1}{12\mathrm{i}} = \frac{\pi}{6}.
\end{align}
$$

### 例3：计算一个含三角函数的无穷积分

计算 $I = \int_{-\infty}^{\infty} \frac{\cos x}{x^2 + 1} \, dx$。

解：考虑 $J = \int_{-\infty}^{\infty} \frac{e^{\mathrm{i} x}}{x^2 + 1} \, dx$，则 $I = \mathrm{Re}\, J$。被积函数满足类型三（$a=1$），上半平面奇点为 $z = \mathrm{i}$（单极点）。计算留数：

$$
\begin{align}
\mathrm{Res}\left[ \frac{e^{\mathrm{i} z}}{z^2+1}, \mathrm{i} \right] = \frac{e^{\mathrm{i} \cdot \mathrm{i}}}{2\mathrm{i}} = \frac{e^{-1}}{2\mathrm{i}}.
\end{align}
$$

由留数定理，

$$
\begin{align}
J = 2\pi \mathrm{i} \cdot \frac{e^{-1}}{2\mathrm{i}} = \pi e^{-1}.
\end{align}
$$

故 $I = \pi e^{-1}$（即 $\pi/e$）。

> 留数定理巧妙地将实积分与复奇点联系起来，是数学物理方法中极具威力的工具。熟练掌握留数计算，能够大大简化许多复杂定积分的求解过程。
