---
title: 柱函数
author: NeoWangKing
date: 2026-03-19T21:13:05+08:00
lastMod: 2026-03-19T21:13:05+08:00
tags: [数学, 数学物理方法, 柱函数, 贝塞尔函数, 诺伊曼函数]
category: ['数学', '数学物理方法']
summary: 本文介绍柱坐标系下分离变量引出的柱函数，包括贝塞尔方程、贝塞尔函数、诺伊曼函数、汉克尔函数及其性质、递推关系、正交性与展开，以及虚宗量柱函数。
comments: true
draft: false
---

## 三类柱函数

我们先来考虑拉普拉斯方程：

$$
\begin{align}
\Delta u = 0
\end{align}
$$

在柱坐标下，有

$$
\begin{align}
\frac{1}{\rho}\frac{\partial}{\partial \rho}\left(\rho\frac{\partial u}{\partial \rho}\right) + \frac{1}{\rho^{2}}\frac{\partial^{2} u}{\partial \varphi^{2}} + \frac{\partial^{2} u}{\partial z^{2}} = 0
\end{align}
$$

进行分离变量：

$$
\begin{align}
u(\theta,\varphi,z) = R(\rho)\Phi(\varphi)Z(z)
\end{align}
$$

代入拉普拉斯方程，即可得到：

$$
\begin{align}
\begin{cases}
\begin{aligned}
&Z''(z) - \mu Z(z) = 0 &\qquad\text{[1]}\\
&\Phi''(\varphi) + m^{2}\Phi(\varphi) = 0 &\qquad\text{[2]}\\
&\rho^{2} R''(\rho) + \rho R'(\rho) + [ \mu\rho^{2} - m^{2} ]R(\rho) = 0 &\qquad\text{[3]}
\end{aligned}
\end{cases}
\end{align}
$$

1. 如果 $\mu > 0$ ，则有通解为 $Z(z) =\left\{ e^{\sqrt{\mu}z}, e^{-\sqrt{\mu}z} \right\}$ ，作变量代换： $x = \sqrt{\mu} \rho$，方程 $\text{[3]}$ 就化为**贝塞尔方程**：

   $$
   \begin{align}
   x^{2} R''(x) + x R'(x) + [x^{2} - m^{2}] R(x) = 0
   \end{align}
   $$

   其通解由 $m$ 阶贝塞尔函数 $\mathrm{J}_{m}(x)$ 和 $m$ 阶诺伊曼函数 $\mathrm{N}_{m}(x)$ 线性组合而成，其中：

   $$
   \begin{align}
   &\mathrm{J}_{m}(x) = \sum_{k = 0}^{\infty}{\frac{(-1)^{k}}{k!\Gamma(m + k + 1)}\left(\frac{x}{2}\right)^{m + 2k}}\\
   &\mathrm{N}_{m}(x) = \frac{2}{\pi}\left(\ln{\frac{x}{2}} + C\right) \mathrm{J}_{m}(x)\\
   &\mathrm{J}_{-m}(x) = (-1)^{m}\mathrm{J}_{m}(x)
   \end{align}
   $$

   _**⚠：但是在确定系数之前还有一些需要注意的点，我们之后详细讨论**_

   > 诺伊曼函数还可以写成：
   >
   > $$
   > \begin{align}
   > \mathrm{N}_{m}(x) = \lim_{m\rightarrow\mathbb{Z}}{\frac{\mathrm{J}_{m}(x)\cos{m\pi} - \mathrm{J}_{-m}(x)}{\sin{m\pi}}}
   > \end{align}
   > $$

2. 如果 $\mu < 0$ 则作换元 $x = \sqrt{-\mu}\rho$ 就得到**虚宗量贝塞尔方程**：

   $$
   \begin{align}
   x^{2} R''(x) + x R(x) - [x^{2} + m^{2}] R(x) = 0
   \end{align}
   $$

   贝塞尔函数可以作如下的变换：

   $$
   \begin{align}
   \mathrm{J}_{m}(\mathrm{i}x) &= \sum_{k = 0}^{\infty}{\frac{(-1)^{k}}{k!\Gamma(k + m + 1)}\left(\frac{x}{2}\right)^{m + 2k}\mathrm{i}^{m + 2k}}\\
   &=\mathrm{i}^{m} \sum_{k = 0}^{\infty}{\frac{1}{k!\Gamma(k + m + 1)}\left(\frac{x}{2}\right)^{m + 2k}}\\
   &= \mathrm{i}^{m} \mathrm{I}_{m}(x)
   \end{align}
   $$

> 如果是对球函数作分离变量，得到的就是球贝塞尔方程：
>
> $$
> \begin{align}
> r^{2} R''(r) + 2r R'(r) + [k^{2}r^{2} - l(l + 1)] R(r) &= 0\\
> \xRightarrow{(x = kr)} x^{2} R''(x) + 2x R'(x) + [x^{2} - l(l + 1)] R(x) &= 0
> \end{align}
> $$

### 三类柱函数

前面已经给出 $m$ 阶贝塞尔方程的通解为：

$$
\begin{align}
&R(x) = C_{1} \mathrm{J}_{m}(x) + C_{2} \mathrm{J}_{-m}(x)\\
\text{或}\qquad &R(x) = C_{1} \mathrm{J}_{m}(x) + C_{2} \mathrm{N}_{m}(x)
\end{align}
$$

但是对于整数的 $m$ 阶，$\mathrm{J}_{-m}(x)$ 与 $\mathrm{J}_{m}(x)$ 并非完全独立，此时上述的通解 **$R(x) = C_{1} \mathrm{J}_{m}(x) + C_{2} \mathrm{J}_{-m}(x)$** 就不适用了（而通解 **$R(x) = C_{1} \mathrm{J}_{m}(x) + C_{2} \mathrm{N}_{m}(x)$** 仍然适用），为了解决这一问题，通常会选取线性独立的：

$$
\begin{align}
\begin{cases}
\begin{aligned}
&\mathrm{H}_{m}^{(1)} = \mathrm{J}_{m}(x) + \mathrm{iN}_{m}(x)\\
&\mathrm{H}_{m}^{(2)} = \mathrm{J}_{m}(x) - \mathrm{iN}_{m}(x)
\end{aligned}
\end{cases}
\end{align}
$$

来表示 $m$ 阶贝塞尔方程的通解，其中这两个函数分别称为**第一种和第二种汉克尔函数**，于是通解可以表示为

$$
\begin{align}
R(x) = C_{1}\mathrm{H}_{m}^{(1)}(x) + C_{2}\mathrm{H}_{m}^{(2)}(x)
\end{align}
$$

而 **贝塞尔函数**、**诺伊曼函数**、**汉克尔函数** 分别称为**第一类**、**第二类**、**第三类柱函数**
