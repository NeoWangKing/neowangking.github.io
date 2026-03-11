---
title: 球函数
author: NeoWangKing
date: 2026-03-12T00:00:47+08:00
lastMod: 2026-03-12T00:00:47+08:00
tags: [数学, 物理, 数学物理方法, 球函数, 勒让德多项式, 勒让德函数]
category: ['数学', '数学物理方法']
summary: 本文系统整理球函数的相关知识，。
comments: true
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

## 轴对称球函数

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

_**持续更新ing...**_
