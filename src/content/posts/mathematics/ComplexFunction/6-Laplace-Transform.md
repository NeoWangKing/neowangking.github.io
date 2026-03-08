---
title: 复变函数论（6）：拉普拉斯变换
author: NeoWangKing
date: 2026-03-09T23:00:00.000Z
lastMod: 2026-03-09T23:00:00.000Z
tags: [数学, 复变函数, 拉普拉斯变换, 积分变换]
category: ['数学', '复变函数论']
summary: 拉普拉斯变换是处理微分方程和系统分析的强有力工具，它通过引入衰减因子将定义域扩展到复频域，从而适用于更广泛的函数。本文介绍拉普拉斯变换的定义、性质、反演方法及其应用实例。
comments: true
draft: false
---

## 拉普拉斯变换

### 定义

设函数 $f(t)$ 定义在 $t \ge 0$ 上，且满足一定的增长条件（存在常数 $M>0, \sigma_0$ 使得 $|f(t)| \le M e^{\sigma_0 t}$），则 $f(t)$ 的 **单边拉普拉斯变换** 定义为

$$
\begin{align}
F(s) = \mathcal{L}[f(t)] = \int_0^{\infty} f(t) e^{-st} \, dt, \quad s = \sigma + \mathrm{i}\omega
\end{align}
$$

其中 $s$ 是复变量。使积分收敛的 $\sigma = \mathrm{Re}(s)$ 的范围称为 **收敛域**，通常为 $\mathrm{Re}(s) > \sigma_c$。

**物理意义**：拉普拉斯变换可以看作是傅里叶变换的推广。在傅里叶变换中，因子 $e^{-\mathrm{i}\omega t}$ 只考虑频率，而拉普拉斯变换通过 $e^{-st} = e^{-\sigma t} e^{-\mathrm{i}\omega t}$ 引入了衰减因子 $e^{-\sigma t}$，这使得许多原本不满足绝对可积条件的函数（如增长函数）能够进行变换。因此，拉普拉斯变换特别适合处理初始值问题。

### 基本性质

拉普拉斯变换是线性变换，并且具有以下重要性质（假设所有涉及的变换存在）：

- **线性**：$\mathcal{L}[af(t)+bg(t)] = aF(s) + bG(s)$。
- **微分**：$\mathcal{L}[f'(t)] = sF(s) - f(0)$，$\mathcal{L}[f''(t)] = s^2 F(s) - s f(0) - f'(0)$，以此类推。
- **积分**：$\mathcal{L}\left[\int_0^t f(\tau) d\tau\right] = \frac{F(s)}{s}$。
- **位移**（频域）：$\mathcal{L}[e^{at} f(t)] = F(s-a)$。
- **延迟**（时域）：$\mathcal{L}[f(t-a) u(t-a)] = e^{-as} F(s)$，其中 $u(t)$ 是单位阶跃函数，$a>0$。
- **卷积**：$\mathcal{L}[f(t) * g(t)] = F(s) G(s)$，其中卷积定义为 $(f*g)(t) = \int_0^t f(\tau) g(t-\tau) d\tau$。
- **初值定理**：$f(0^+) = \lim_{s\to\infty} sF(s)$。
- **终值定理**：若极限存在，$\lim_{t\to\infty} f(t) = \lim_{s\to 0} sF(s)$。

### 常见函数的拉普拉斯变换

- $\mathcal{L}[1] = \frac{1}{s}$，$\mathrm{Re}(s) > 0$。
- $\mathcal{L}[t^n] = \frac{n!}{s^{n+1}}$，$\mathrm{Re}(s) > 0$。
- $\mathcal{L}[e^{at}] = \frac{1}{s-a}$，$\mathrm{Re}(s) > \mathrm{Re}(a)$。
- $\mathcal{L}[\sin \omega t] = \frac{\omega}{s^2+\omega^2}$，$\mathrm{Re}(s) > 0$。
- $\mathcal{L}[\cos \omega t] = \frac{s}{s^2+\omega^2}$，$\mathrm{Re}(s) > 0$。
- $\mathcal{L}[\delta(t)] = 1$（其中 $\delta$ 为狄拉克函数）。

### 适用范围

拉普拉斯变换广泛应用于：

- **求解线性常微分方程**：将微分方程转化为代数方程，自动引入初始条件。
- **电路分析**：将时域电路转换为复频域阻抗模型，简化计算。
- **自动控制**：分析系统的传递函数、稳定性、频率响应。
- **信号处理**：处理因果信号，分析系统函数。
- **偏微分方程**：将偏微分方程转化为常微分方程（如热传导方程）。

## 拉普拉斯变换的反演

### 反演公式（Mellin 反演公式）

若 $F(s)$ 是 $f(t)$ 的拉普拉斯变换，且 $f(t)$ 在 $t\ge0$ 上连续，则 $f(t)$ 可由下列反演积分得到：

$$
\begin{align}
f(t) = \frac{1}{2\pi \mathrm{i}} \int_{\sigma - \mathrm{i}\infty}^{\sigma + \mathrm{i}\infty} F(s) e^{st} \, ds, \quad t>0
\end{align}
$$

其中 $\sigma$ 大于 $F(s)$ 的所有奇点的实部，即积分路径（Bromwich 围道）是一条平行于虚轴的直线，位于收敛域的右侧。该积分通常通过围道积分和留数定理计算。

### 利用留数定理求反演

对于常见的有理函数 $F(s)$，反演积分可以转化为求 $F(s)e^{st}$ 在 $\mathrm{Re}(s) < \sigma$ 区域内所有奇点的留数之和。具体地，

$$
\begin{align}
f(t) = \sum_{\text{所有奇点 } s_k} \mathrm{Res}\left[ F(s) e^{st}, s_k \right], \quad t>0
\end{align}
$$

当 $t>0$ 时，闭合围道通常取左边无穷大半圆（因为 $e^{st}$ 在 $\mathrm{Re}(s)$ 为负时衰减）。若 $F(s)$ 的奇点均为极点，则留数计算较为直接。

### 其他反演方法

- **查表法**：利用已知的拉普拉斯变换对进行反演。
- **部分分式法**：将 $F(s)$ 分解为简单分式之和，然后查表。
- **卷积定理**：若 $F(s) = F_1(s)F_2(s)$，则 $f(t) = f_1(t) * f_2(t)$。

> 反演拉普拉斯变换的关键在于识别 $F(s)$ 的奇点类型和位置，并熟练运用复变函数的留数定理。

## 应用例子

### 例1：求解一阶常微分方程初值问题

考虑方程 $y'(t) + y(t) = e^{-t}$，初始条件 $y(0)=0$。

对两边取拉普拉斯变换，记 $Y(s) = \mathcal{L}[y(t)]$：

$$
\begin{align}
[sY(s) - y(0)] + Y(s) = \frac{1}{s+1}
\end{align}
$$

代入 $y(0)=0$，得 $(s+1)Y(s) = \frac{1}{s+1}$，所以

$$
\begin{align}
Y(s) = \frac{1}{(s+1)^2}
\end{align}
$$

查表或反演可知 $\mathcal{L}^{-1}\left[ \frac{1}{(s+1)^2} \right] = t e^{-t}$。因此

$$
\begin{align}
y(t) = t e^{-t}, \quad t \ge 0
\end{align}
$$

### 例2：求解 RLC 电路响应

考虑一个串联 RLC 电路，电容初始电压 $v_C(0)=1$，电感初始电流 $i(0)=0$，输入电压 $u(t)$（单位阶跃函数）。电路方程（关于电流 $i(t)$）为

$$
\begin{align}
L i''(t) + R i'(t) + \frac{1}{C} i(t) = u'(t)
\end{align}
$$

初始条件 $i(0)=0$，$i'(0)=0$（因为 $i'(0) = (u(0)-v_C(0))/L = (1-1)/L = 0$）。取拉普拉斯变换，记 $I(s) = \mathcal{L}[i(t)]$，$\mathcal{L}[u(t)] = 1/s$，$\mathcal{L}[u'(t)] = 1$（注意 $u'(t) = \delta(t)$？实际上单位阶跃的导数为 $\delta(t)$，其拉氏变换为 $1$）。方程变为

$$
\begin{align}
(L s^2 + R s + \frac{1}{C}) I(s) = 1
\end{align}
$$

所以

$$
\begin{align}
I(s) = \frac{1}{L s^2 + R s + 1/C}
\end{align}
$$

具体反演取决于 $R, L, C$ 的值，可通过部分分式或留数定理得到时域电流 $i(t)$，从而分析电路的瞬态响应。

### 例3：求解热传导方程（半无界区域）

考虑一维半无界热传导问题：

$$
\begin{align}
\frac{\partial u}{\partial t} = a^2 \frac{\partial^2 u}{\partial x^2}, \quad x>0, t>0
\end{align}
$$

初始条件 $u(x,0)=0$，边界条件 $u(0,t) = f(t)$（给定），且 $u(x,t)$ 有界。

对时间变量 $t$ 取拉普拉斯变换，记 $U(x,s) = \mathcal{L}[u(x,t)]$，则方程化为

$$
\begin{align}
sU(x,s) = a^2 \frac{\partial^2 U}{\partial x^2}
\end{align}
$$

解得 $U(x,s) = A(s) e^{-\sqrt{s}x/a} + B(s) e^{\sqrt{s}x/a}$。由有界性，$B(s)=0$。由边界条件 $U(0,s) = F(s) = \mathcal{L}[f(t)]$，得 $A(s)=F(s)$。因此

$$
\begin{align}
U(x,s) = F(s) e^{-\sqrt{s}x/a}
\end{align}
$$

反演可由卷积定理得到：

$$
\begin{align}
u(x,t) = f(t) * \mathcal{L}^{-1}\left[ e^{-\sqrt{s}x/a} \right]
\end{align}
$$

已知 $\mathcal{L}^{-1}\left[ e^{-\sqrt{s}x/a} \right] = \frac{x}{2a\sqrt{\pi t^{3/2}}} e^{-x^2/(4a^2 t)}$（这是一个半无限热源问题的格林函数）。因此

$$
\begin{align}
u(x,t) = \int_0^t f(t-\tau) \frac{x}{2a\sqrt{\pi \tau^{3/2}}} e^{-x^2/(4a^2 \tau)} \, d\tau
\end{align}
$$

这个例子展示了拉普拉斯变换在偏微分方程中的应用，通过变换将问题简化为常微分方程，再利用反演得到解析解。

> 拉普拉斯变换是处理初始值问题和系统分析的利器，它将微积分运算转化为代数运算，极大地简化了求解过程。结合复变函数的留数定理，能够处理各种复杂函数的反演。
