---
title: 球函数
author: NeoWangKing
date: 2026-03-12T00:00:47+08:00
lastMod: 2026-03-17T21:44:16+08:00
tags: [数学, 物理, 数学物理方法, 球函数, 勒让德多项式, 勒让德函数]
category: ['数学', '数学物理方法']
summary: 本文系统整理球函数的相关知识，。
comments: true
sticky: 0
draft: false
---

根据前面的知识，对拉普拉斯方程 $\Delta u = 0$ 和亥姆霍兹方程 $(\nabla^{2} + k^{2}) A = 0$ （描述波动现象空间分布的二阶椭圆型偏微分方程）进行分离变量，可以得到球函数方程：

$$
\begin{align}
\frac{1}{\sin{\theta}}\frac{\partial}{\partial \theta}\left(\sin{\theta}\frac{\partial Y}{\partial \theta}\right) + \frac{1}{\sin^{2}{\theta}}\frac{\partial^{2} Y}{\partial \varphi^{2}} + \lambda Y = 0
\end{align}
$$

其解 $Y(\theta, \varphi)$ 称为球函数（定义在半径 $r$ 的球面上的函数），对球函数在进行分离变量：

$$
\begin{align}
Y(\theta, \varphi) = (A \cos{m \varphi} + B \sin{m \varphi}) \Theta(\theta) = 0
\end{align}
$$

其中的 $\Theta(\theta)$ 需要从 **勒让德方程** 中解出：

$$
\begin{align}
(1 - x^{2})\frac{\mathrm{d}^{2}\Theta}{\mathrm{d}x^{2}} - 2x\frac{\mathrm{d}\Theta}{\mathrm{d}x} + \left[\lambda - \frac{m^{2}}{1 - x^{2}}\right]\Theta = 0
\end{align}
$$

上式中，我们采用了变量代换：

$$
\begin{align}
x = \cos{\theta}
\end{align}
$$

## 1. 轴对称球函数

### 勒让德多项式

我们先来考虑系统在 $\varphi$ 的方向上对称的情形，此时就有 $\mu = m^{2} = 0$ ，这样勒让德方程就可以化为

$$
\begin{align}
(1 - x^{2})\frac{\mathrm{d}^{2}\Theta}{\mathrm{d}x^{2}} - 2x\frac{\mathrm{d}\Theta}{\mathrm{d}x} + \lambda \Theta(x) = 0
\end{align}
$$

这个方程的定义域为 $x\in[-1,1]$ ，$x = 0$ 为常点，奇点为 $-1,1,\infty$，且均为正则奇点

于是，可以在 $x = 0$ 附近作泰勒展开

$$
\begin{align}
\Theta(x) = \sum_{k = 0}^{\infty}{a_{k} x^{k}}
\end{align}
$$

其中，收敛半径为 $R = 1$ ，且在 $|x| = 1$ 处发散，将其代入

$$
\begin{align}
a_{k + 2} = \frac{\lambda - k(k + 1)}{(k + 2)(k + 1)}a_{k}
\end{align}
$$

要得到收敛解，需要对某个 $k_{c}$ 有 $\lambda - k_{c}(k_{c} + 1) = 0$ ，于是我们取

$$
\begin{align}
\lambda = l(l + 1)
\end{align}
$$

这样多项式的最高次项就为 $a_{l}x^{l}$ ，适当的取系数，使得

$$
\begin{align}
a_{l}=\frac{(2l)!}{2^{l}(l!)^{2}}
\end{align}
$$

于是这个多项式解就为

$$
\begin{align}
P_{l}(x) = \sum_{k = 0}^{\lfloor l/2 \rfloor}{a_{l - 2k}x^{l -2 k}} = \sum_{k = 0}^{\lfloor l/2 \rfloor}{(-1)^{k} \frac{(2l - 2k)!}{2^{l}k!(l - k)!(l - 2k)!}x^{l -2 k}}
\end{align}
$$

这就是 **$l$ 阶勒让德多项式** 的具体表达式

> 一些常用的结论：
>
> 1. 前几个勒让德多项式：
>
>    $$
>    \begin{align}
>    P_{0}(x) = 1
>    \end{align}
>    $$
>
>    $$
>    \begin{align}
>    P_{1}(x) = x
>    \end{align}
>    $$
>
>    $$
>    \begin{align}
>    P_{2}(x) = \frac{1}{2}(3x^{2} -1)
>    \end{align}
>    $$
>
> 2. 在零处的勒让德多项式 $P_{l}(0)$ 有
>
>    $$
>    \begin{align}
>    P_{2n + 1}(0) = 0
>    \end{align}
>    $$
>
>    $$
>    \begin{align}
>    P_{2n}(0) = (-1)^{n}\frac{(2n - 1)!!}{(2n)!!}
>    \end{align}
>    $$

### 勒让德多项式的微分形式

利用二项式定理对 $(x^{2} - 1)^{l}$ 展开得到：

$$
\begin{align}
(x^{2} - 1)^{l} = \sum_{k = 0}^{l}{(-1)^{k}\frac{l!}{k!(l - k)!}x^{2l - 2k}}
\end{align}
$$

对上式求导 $l$ 次，与勒让德多项式对照后可以得到

$$
\begin{align}
P_{l}(x) = \frac{1}{2^{l}l!}\frac{\mathrm{d}^{l}}{\mathrm{d}x^{l}}(x^{2} - 1)^{l}
\end{align}
$$

该公式也叫做 **罗德里格斯公式**

### 勒让德多项式的积分形式

利用高阶导数的柯西公式

$$
\begin{align}
f^{(l)}(x) = \frac{l!}{2\pi\mathrm{i}}\oint{\frac{f(z)}{(z - x)^{l + 1}}\mathrm{d}z}
\end{align}
$$

可以得到勒让德多项式的积分形式

$$
\begin{align}
P_{l}(x) &= \frac{\mathrm{d}^{l}}{\mathrm{d}x^{l}}\left[\frac{1}{2^{l}l!}(x^{2} - 1)^{l}\right]\\
\Rightarrow P_{l}(x) &= \frac{1}{2\pi\mathrm{i}2^{l}}\oint_{C_{l}}{\frac{(z^{2} - 1)^{l}}{(z - x)^{l + 1}}\mathrm{d}z}
\end{align}
$$

其中 $C_{l}$ 为包含 $z = x$ 点的任一环路，这一积分公式称作 **施列夫利积分**

接下来将这个积分化成定积分，取 $C_{l}$ 为圆心在 $z = x$ 、半径为 $\sqrt{|x^{2} - 1|}$ 的圆周，于是就有：$z - x = \sqrt{x^{2} - 1}\mathrm{e}^{\mathrm{i}\psi}$ ，$\mathrm{d}z = \mathrm{i}\sqrt{x^{2} - 1}\mathrm{e}^{\mathrm{i}\psi}\mathrm{d}\psi$ ，代入得到

$$
\begin{align}
P_{l}(x) = \frac{1}{\pi}\int_{0}^{\pi}\left[x + \mathrm{i}\sqrt{1-x^{2}}\cos{\psi}\right]^{l}\mathrm{d}\psi
\end{align}
$$

这叫做 **拉普拉斯积分** ，由此也可见 $|P_{l}(x)| \le 1$

### 勒让德多项式的正交性

勒让德多项式是施图姆-刘维尔本征值问题的正交关系的一个 **特例**，也即

$$
\begin{align}
\int_{-1}^{+1}{P_{k}(x) P_{l}(x) \mathrm{d}x} = 0 \quad (l \neq k)
\end{align}
$$

更一般的，我们可以求出

$$
\begin{align}
\int_{-1}^{+1}{P_{k}(x) P_{l}(x) \mathrm{d}x} = \left(N_{l}\right)^{2} \delta_{l,k} = \frac{2}{2l + 1} \delta_{l,k}
\end{align}
$$

其中 $\left(N_{l}\right)^{2} = \frac{2}{2l + 1}$ ， 这就是勒让德多项式的模方

### 广义傅里叶级数展开

通过上面的推导，我们知道了勒让德多项式是完备的，也就是说，它可以作为广义傅里叶级数展开的基。于是，定义在 $x \in [-1, +1]$ 上的函数 $f(x)$ 可以展开成广义傅里叶级数：

$$
\begin{align}
\begin{cases}
\begin{aligned}
&f(x) = \sum_{l = 0}^{\infty}{f_{l}P_{l}(x)}\\
&f_{l} = \frac{2l + 1}{2}\int_{-1}^{+1}{f(x)P_{l}(x)\mathrm{d}x}
\end{aligned}
\end{cases}
\end{align}
$$

或者对于定义在 $\theta \in [0,\pi]$ 上的函数 $f(\theta)$ 也可以进行展开：

$$
\begin{align}
\begin{cases}
\begin{aligned}
&f(\theta) = \sum_{l = 0}^{\infty}{f_{l}P_{l}(\cos{\theta})} \\
&f_{l} = \frac{2l + 1}{2}\int_{0}^{\pi}{f(\theta)P_{l}(\cos{\theta})\sin{\theta}\mathrm{d}\theta}
\end{aligned}
\end{cases}
\end{align}
$$

### 母函数的导出

考虑在单位球的北极处放置一个 $4\pi\varepsilon_{0}$ 单位的正电荷，则在球内任意一点 $M(r, \theta)$ 处的静电势为：

$$
\begin{align}
\frac{1}{d} = \frac{1}{\sqrt{1 - 2r\cos{\theta} + r^{2}}}
\end{align}
$$

> 我也不知道这里为什么要是 $\frac{1}{d}$ ，约定俗成的

静电势 $\frac{1}{d}$ 遵从拉普拉斯方程，满足拉普拉斯方程的一般解的形式，即：

$$
\begin{align}
\frac{1}{d} = \sum_{l = 0}^{\infty}{\left(A_{l}r^{l} + B_{l}\frac{1}{r^{l + 1}}\right)P_{l}(\cos{\theta})}
\end{align}
$$

球心处的电势应当有限，所以 $B_{l} = 0$ ，于是有

$$
\begin{align}
\frac{1}{\sqrt{1 - 2r\cos{\theta} + r^{2}}} = \sum_{l = 0}^{\infty}{A_{l}r^{l}P_{l}(\cos{\theta})}
\end{align}
$$

可以简单的通过令 $\theta = 0$ ，得到 $A_{l} = 1$ ，于是

$$
\begin{align}
\frac{1}{\sqrt{1 - 2r\cos{\theta} + r^{2}}} = \sum_{l = 0}^{\infty}{r^{l}P_{l}(\cos{\theta})},\quad r<1
\end{align}
$$

同理，可以求得球外的静电势，结果为：

$$
\begin{align}
\frac{1}{\sqrt{1 - 2r\cos{\theta} + r^{2}}} = \sum_{l = 0}^{\infty}{\frac{1}{r^{l + 1}}P_{l}(\cos{\theta})},\quad r>1
\end{align}
$$

于是，这个静电势 $\frac{1}{\sqrt{1 - 2r\cos{\theta} + r^{2}}}$ 被称作勒让德多项式的 **母函数**（生成函数）

而如果是在半径为 $R$ 的球的北极上放置电荷，则：

$$
\begin{align}
\frac{1}{\sqrt{R^{2} - 2rR\cos{\theta} + r^{2}}} =
\begin{cases}
\begin{aligned}
&\sum_{l = 0}^{\infty}{\frac{1}{R^{l + 1}}r^{l}P_{l}(\cos{\theta})}, &r<R \\
&\sum_{l = 0}^{\infty}{R^{l}\frac{1}{r^{l + 1}}P_{l}(\cos{\theta})}, &r>R
\end{aligned}
\end{cases}
\end{align}
$$

### 勒让德多项式的递推公式

通过母函数可以推导出勒让德多项式的递推公式，已知有：

$$
\begin{align}
\frac{1}{\sqrt{1 - 2rx + r^{2}}} = \sum_{l = 0}^{\infty}{r^{l}P_{l}(x)}
\end{align}
$$

两边对 $r$ 求导，得到

$$
\begin{align}
\frac{x - r}{\sqrt{1 - 2rx + r^{2}}} = (1 - 2rx + r^{2})\sum_{l = 0}^{\infty}{l r^{l - 1} P_{l}(x)}
\end{align}
$$

$$
\begin{align}
(x - r)\sum_{l = 0}^{\infty}{r^{l}P_{l}(x)} = (1 - 2rx + r^{2})\sum_{l = 0}^{\infty}{l r^{l - 1} P_{l}(x)}
\end{align}
$$

化简即可得到

$$
\begin{align}
(k + 1)P_{k + 1}(x) - (2k + 1)xP_{k}(x) + kP_{k - 1}(x) = 0\quad(k \ge 1)
\end{align}
$$

通过改变求导的对象（比如对 $x$ 求导），还可以得到如下的递推公式

$$
\begin{align}
P_{k}(x) = P_{k + 1}'(x) - 2xP_{k}'(x) + P_{k - 1}'(x)\quad(k \ge 1)
\end{align}
$$

$$
\begin{align}
P_{k + 1}'(x) = (k + 1)P_{k}(x) + xP_{k}'(x)
\end{align}
$$

$$
\begin{align}
kP_{k}(x) = xP_{k}'(x) - P_{k - 1}'(x)\quad(k \ge 1)
\end{align}
$$

$$
\begin{align}
(x^{2} - 1)P_{k}'(x) = kxP_{k}(x) - kP_{k - 1}(x)\quad(k \ge 1)
\end{align}
$$

$$
\begin{align}
(2k + 1)P_{k}(x) = P_{k + 1}'(x) - P_{k - 1}'(x)\quad(k \ge 1)
\end{align}
$$

## 2. 连带勒让德函数

### 连带勒让德函数的导出

当问题不再具有轴对称性（$m \neq 0$）时，$\Theta(\theta)$ 满足的方程为连带勒让德方程。在变量 $x=\cos\theta$ 下，方程化为

$$
\begin{align}
(1-x^2)\frac{\mathrm{d}^2\Theta}{\mathrm{d}x^2} - 2x\frac{\mathrm{d}\Theta}{\mathrm{d}x} + \left[\lambda - \frac{m^2}{1-x^2}\right]\Theta = 0
\end{align}
$$

其中 $m$ 为整数（由 $\Phi(\phi)$ 的周期性条件决定），且 $|m| \le l$。此方程的解称为 **连带勒让德函数** $P_l^m(x)$。

在这个方程中， $x_{0} = 0$ 是常点，可以通过一般的级数解法求得级数解，但是递推公式极为复杂，所以我们考虑一下其他的方法，适当的取

$$
\begin{align}
\Theta = (1 - x^{2})^{\frac{m}{2}} y(x)
\end{align}
$$

在这个变换下有：

$$
\begin{align}
\frac{\mathrm{d}\Theta}{\mathrm{d}x} = (1 - x^2)^{\frac{m}{2}} y' - m(1 - x^2)^{\frac{m}{2} - 1}xy
\end{align}
$$

$$
\begin{align}
\frac{\mathrm{d}^{2}\Theta}{\mathrm{d}x^{2}} = (1 - x^2)^{\frac{m}{2}} y'' - 2m(1 - x^2)^{\frac{m}{2} - 1} xy' - m(1 - x^2)^{\frac{m}{2} - 1} y + m(m - 2)(1 - x^2)^{\frac{m}{2} - 2}x^{2}y
\end{align}
$$

这样代入就可以得到 $y(x)$ 的微分方程

$$
\begin{align}
(1 - x^2)y'' - 2(m + 1)xy' + [\lambda - m(m + 1)]y = 0
\end{align}
$$

可以证明，上式就是勒让德方程求导 $m$ 次后得到的方程，于是就有 $y(x) = P_{l}^{(m)}(x)$ 。

> 证明：
> 将勒让德方程：
>
> $$
> \begin{align}
> (1 - x^2)P'' - 2xP' + \lambda P = 0
> \end{align}
> $$
>
> 对 $x$ 求导 $m$ 次，结果为：
>
> $$
> \begin{align}
> \left[(1 - x^2)p^{(m + 2)} - m2xP^{(m + 1)} - \frac{m(m - 1)}{2}2P^{(m)}\right] - 2\left[xP^{(m + 1)} + mP^{(m)}\right] + \lambda P^{(m)} = 0
> \end{align}
> $$
>
> 化简得到：
>
> $$
> \begin{align}
> (1 - x^2){P^{(m)}}'' - 2x(m + 1){P^{(m)}}' + \left[\lambda - m(m + 1)\right]P^{(m)} = 0
> \end{align}
> $$
>
> 这就是连带勒让德方程

于是我们可以得到 $l$ 阶连带勒让德函数：

$$
\begin{align}
P_l^m(x) = (1-x^2)^{\frac{m}{2}} P^{(m)}_{l}(x), \quad m = 0,1,2,\dots,l
\end{align}
$$

对于负指标 $m$，定义

$$
\begin{align}
P_l^{-m}(x) = (-1)^m \frac{(l-m)!}{(l+m)!} P_l^m(x)
\end{align}
$$

**前几项**：

- $P_1^1(x) = (1-x^2)^{1/2}$
- $P_2^1(x) = 3x(1-x^2)^{1/2}$
- $P_2^2(x) = 3(1-x^2)$

### 连带勒让德函数的其他形式

1. 微分形式

   $$
   \begin{align}
   P^{m}_{l}(x) = \frac{(1 - x^2)^{\frac{m}{2}}}{2^{l}l!}\frac{\mathrm{d}^{l + m}}{\mathrm{d}x^{l + m}}\left(x^2 - 1\right)^{l}
   \end{align}
   $$

   > 而对于负指标，代入 $-m$ 即可得到
   >
   > $$
   > \begin{align}
   > P^{-m}_{l}(x) = \frac{(1 - x^2)^{-\frac{m}{2}}}{2^{l}l!}\frac{\mathrm{d}^{l - m}}{\mathrm{d}x^{l - m}}\left(x^2 - 1\right)^{l}
   > \end{align}
   > $$
   >
   > 与 $m$ 为正的情况对比即可得到
   >
   > $$
   > \begin{align}
   > P_l^{-m}(x) = (-1)^m \frac{(l-m)!}{(l+m)!} P_l^m(x)
   > \end{align}
   > $$

2. 积分形式

   按照柯西公式，微分表达式可以表示成环路积分：

   $$
   \begin{align}
   P^{m}_{l}(x) = \frac{(1 - x^2)^{\frac{m}{2}}}{2^l}\frac{1}{2\pi \mathrm{i}}\frac{(l + m)!}{l!}\oint_{C}{\frac{(z^2 - 1)^{l}}{(z - x)^{l + m + 1}}\mathrm{d}z}
   \end{align}
   $$

### 正交归一性与模

连带勒让德函数在区间 $[-1,1]$ 上带权正交：

$$
\begin{align}
\int_{-1}^{1} P_l^m(x) P_{k}^m(x) \, \mathrm{d}x = \left(N^{m}_{l}\right)^{2} \delta_{lk} = \frac{2}{2l+1} \frac{(l+m)!}{(l-m)!} \delta_{lk}
\end{align}
$$

对于不同的 $m$，它们也满足正交关系

$$
\begin{align}
\int_{-1}^{1} P_l^m(x) P_l^{m'}(x) \frac{dx}{1-x^2} = 0, \quad m \neq m'
\end{align}
$$

### 广义傅里叶级数展开

根据上面的证明，可以看出连带勒让德函数 $P^{m}_{l}(x)$ 是完备的，可以作为广义傅里叶级数展开的基：

$$
\begin{align}
\begin{cases}
\begin{aligned}
&f(x) = \sum_{l = 0}^{\infty}{f_{l}P^{m}_{l}(x)}\\
&f_{l} = \frac{2l + 1}{2} \frac{(l - m)!}{(l + m)!}\int_{-1}^{+1}{f(x)P_{l}^{m}(x)\,\mathrm{d}x}
\end{aligned}
\end{cases}
\end{align}
$$

或：

$$
\begin{align}
\begin{cases}
\begin{aligned}
&f(\theta) = \sum_{l = 0}^{\infty}{f_{l}P^{m}_{l}(\cos{\theta})}\\
&f_{l} = \frac{2l + 1}{2} \frac{(l - m)!}{(l + m)!}\int_{-1}^{+1}{f(\theta)P_{l}^{m}(\cos{\theta})\,\sin{\theta}\mathrm{d}\theta}
\end{aligned}
\end{cases}
\end{align}
$$

### 连带勒让德函数的递推

连带勒让德函数的基本递推公式有四个：

$$
\begin{align}
(2k + 1)xP^{m}_{k}(x) = (k + m)P^{m}_{k - 1}(x) + (k - m + 1)P^{m}_{k + 1}(x)\quad(k \ge 1)
\end{align}
$$

$$
\begin{align}
(2k + 1)(1 - x^2)^{1/2}P^{m}_{k}(x) = P^{m + 1}_{k + 1}(x) -P^{m + 1}_{k - 1}(x)\quad(k \ge 1)
\end{align}
$$

$$
\begin{align}
(2k + 1)(1 - x^2)^{1/2}P^{m}_{k}(x) = (k + m)(k + m - 1)P^{m - 1}_{k - 1}(x) - (k - m + 2)(k - m + 1)P^{m - 1}_{k + 1}(x)\quad(k \ge 1)
\end{align}
$$

$$
\begin{align}
(2k + 1)(1 - x^2)\frac{\mathrm{d}P^{m}_{l}(x)}{\mathrm{d}x} = (k + 1)(k + m)P^{m}_{k - 1}(x) - k(k - m + 1)P^{m}_{k + 1}(x)\quad(k \ge 1)
\end{align}
$$

## 3. 一般求函数

### 球函数

球函数方程的解就叫做球函数：

$$
\begin{align}
Y^{m}_{l}(\theta, \varphi) = P^{m}_{l}(\cos{\theta})
\begin{Bmatrix}
\cos{m\varphi}\\
\sin{m\varphi}
\end{Bmatrix}
\end{align}
$$

这是球函数的实变函数形式，其中 $\begin{Bmatrix}\cos{m\varphi}\\\sin{m\varphi}\end{Bmatrix}$ 指的是 $\cos{m\varphi}$ 和 $\sin{m\varphi}$ 的线性组合

线性独立的 $l$ 阶球函数共有 $2l + 1$ 个，这是因为对于 $m = 0$，只有一个球函数 $P_{l}(x)$，而对于 $m \neq 0$，有两个球函数 $P^{m}_{l}(x)\cos{m\varphi}$ 和 $P^{m}_{l}(x)\sin{m\varphi}$，于是根据欧拉公式可以写出球函数的复变函数形式：

$$
\begin{align}
Y^{m}_{l}(\theta, \varphi) = P^{|m|}{l}(\cos{\theta}) = P^{|m|}_{l}(\cos{\theta})e^{\mathrm{i}m\varphi}\quad(m = -l, \cdots, 0, 1, \cdots, l; l = 0, 1, 2, \cdots)
\end{align}
$$

在之后的学习中，我会以复变函数的形式为重点，这里只是提一嘴以防忘记还有实变函数的形式

### 球函数的正交关系

球函数中的任意两个在球面 $S$ 上（即 $0 \le \theta \le \pi,\, 0 \le \varphi \le 2\pi$ ）正交：

$$
\begin{align}
\iint_{S}{Y^{m}_{l}(\theta, \varphi)Y^{n}_{k}(\theta, \varphi)\,\sin{\theta}\mathrm{d}\theta\mathrm{d}\varphi} = 0\quad(m \neq n \text{ or } l \neq k)
\end{align}
$$

### 球函数的模

1. 实变函数形式的模

   使用三角函数积分即可得到：

   $$
   \begin{align}
   (N^{m}_{l})^2 &= \iint_{S}{[Y^{m}_{l}(\theta, \varphi)]^{2}\,\sin{\theta}\mathrm{d}\theta\mathrm{d}\varphi}\\
   &=\int_{0}^{\pi}{[P^{m}_{l}(\cos{\theta})]^{2}\sin{\theta}\mathrm{d}\theta}\int_{0}^{2\pi}{(A\sin^{2}{m\varphi} + B\cos^{2}{m\varphi})\,\mathrm{d}\varphi}\\
   &=\int_{-1}^{+1}{[P^{m}_{l}(x)]^{2}\mathrm{d}x}\int_{0}^{2\pi}{(A\sin^{2}{m\varphi} + B\cos^{2}{m\varphi})\,\mathrm{d}\varphi}
   \end{align}
   $$

   积分得（不会积的去重修微积分）：

   $$
   \begin{align}
   N_{l}^{m} = \sqrt{\frac{2\pi\delta_{m}}{2l + 1}\frac{(l + m)!}{(l - m)!}}
   \end{align}
   $$

   其中 $\delta_{m} = \begin{cases}2, &m = 0\\1, &m = 1, 2, 3,\cdots\end{cases}$ 。

2. 复变函数形式的模

   利用积分式：

   $$
   \begin{align}
   \int_{0}^{2\pi}{e^{\mathrm{i}m\varphi}[e^{\mathrm{i}m\varphi}]^{*}\mathrm{d}\varphi} = \int_{0}^{2\pi}{1\mathrm{d}\varphi} = 2\pi
   \end{align}
   $$

   得到复变函数形式的球函数的模的平方为：

   $$
   \begin{align}
   (N_{l}^{m})^{2} &= \iint_{S}{Y_{l}^{m}(\theta,\varphi)[Y_{l}^{m}(\theta,\varphi)]^{*}\,\sin{\theta}\mathrm{d}\theta\mathrm{d}\varphi}\\
   &= \int_{0}^{\pi}{[P_{l}^{|m|}(\cos{\theta})]^{2}\sin{\theta}\mathrm{d}\theta}\cdot\int_{0}^{2\pi}{e^{\mathrm{i}m\varphi}[e^{\mathrm{i}m\varphi}]^{*}\mathrm{d}\varphi}\\
   &= \frac{2}{2l + 1}\cdot\frac{(l + |m|)!}{(l - |m|)!}\cdot 2\pi
   \end{align}
   $$

   得到：

   $$
   \begin{align}
   N_{l}^{m} = \sqrt{\frac{4\pi}{2l + 1}\cdot\frac{(l + |m|)!}{(l - |m|)!}}
   \end{align}
   $$

_**持续更新ing...**_
