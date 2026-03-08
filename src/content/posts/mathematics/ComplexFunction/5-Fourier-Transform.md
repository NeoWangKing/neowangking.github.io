---
title: 复变函数论（5）：傅里叶变换
author: NeoWangKing
date: 2026-03-09T20:00:00.000Z
lastMod: 2026-03-09T20:00:00.000Z
tags: [数学, 复变函数, 傅里叶级数, 傅里叶变换, δ函数]
category: ['数学', '复变函数论']
summary: 傅里叶变换是数学物理中常用的积分变换，它将函数分解为不同频率的正弦波叠加。本文从傅里叶级数出发，引入傅里叶积分与傅里叶变换，并介绍广义函数δ函数及其在变换中的作用。
comments: true
draft: false
---

## 傅里叶级数

### 周期函数的傅里叶展开

对于一个周期为 $T$（角频率 $\omega = 2\pi/T$）的函数 $f(t)$，若满足 Dirichlet 条件（在一个周期内连续或只有有限个第一类间断点，且只有有限个极值点），则可以展开为傅里叶级数：

$$
\begin{align}
f(t) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left( a_n \cos n\omega t + b_n \sin n\omega t \right)
\end{align}
$$

其中系数

$$
\begin{align}
a_n &= \frac{2}{T} \int_{t_0}^{t_0+T} f(t) \cos n\omega t \, dt, \quad n=0,1,2,\dots \\
b_n &= \frac{2}{T} \int_{t_0}^{t_0+T} f(t) \sin n\omega t \, dt, \quad n=1,2,\dots
\end{align}
$$

**物理意义**：傅里叶级数将一个周期信号分解为直流分量（$a_0/2$）和一系列谐波（正弦和余弦）的叠加，每个谐波的频率是基频 $\omega$ 的整数倍。系数 $a_n, b_n$ 反映了各次谐波的幅度。

**复数形式**：利用欧拉公式，傅里叶级数可以写成更紧凑的复数形式：

$$
\begin{align}
f(t) = \sum_{n=-\infty}^{\infty} c_n e^{\mathrm{i} n\omega t}
\end{align}
$$

其中

$$
\begin{align}
c_n = \frac{1}{T} \int_{t_0}^{t_0+T} f(t) e^{-\mathrm{i} n\omega t} \, dt
\end{align}
$$

复数系数 $c_n$ 包含了幅度和相位信息，且满足 $c_{-n} = \overline{c_n}$（当 $f(t)$ 为实函数时）。

> 傅里叶级数揭示了周期函数的频谱是离散的，仅在基频的整数倍处有非零分量。

## 傅里叶积分与傅里叶变换

### 从傅里叶级数到傅里叶积分

当周期 $T \to \infty$ 时，周期函数退化为非周期函数。此时离散频率 $n\omega$ 趋于连续变量 $\omega$，求和变为积分。傅里叶级数过渡为傅里叶积分。

设 $f(t)$ 为非周期函数，满足绝对可积条件 $\int_{-\infty}^{\infty} |f(t)| dt < \infty$，则有傅里叶积分公式：

$$
\begin{align}
f(t) = \frac{1}{2\pi} \int_{-\infty}^{\infty} F(\omega) e^{\mathrm{i} \omega t} \, d\omega
\end{align}
$$

其中

$$
\begin{align}
F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-\mathrm{i} \omega t} \, dt
\end{align}
$$

称 $F(\omega)$ 为 $f(t)$ 的 **傅里叶变换**（或频谱密度函数），$f(t)$ 为 $F(\omega)$ 的 **傅里叶逆变换**。记作

$$
\begin{align}
F(\omega) = \mathcal{F}[f(t)], \quad f(t) = \mathcal{F}^{-1}[F(\omega)]
\end{align}
$$

### 傅里叶变换的意义

傅里叶变换将时域函数 $f(t)$ 映射到频域函数 $F(\omega)$，$F(\omega)$ 描述了信号在各个频率 $\omega$ 上的复振幅分布（包括幅度和相位）。它类似于将信号分解为无数个频率为 $\omega$ 的复指数信号 $e^{\mathrm{i}\omega t}$ 的加权叠加，权重就是 $F(\omega) d\omega/(2\pi)$。

**存在条件**：$f(t)$ 绝对可积是傅里叶变换存在的充分条件，但非必要条件（如周期函数不绝对可积，但其傅里叶变换可通过 $\delta$ 函数表示）。

### 傅里叶变换的性质

1. **线性性**：$\mathcal{F}[af(t)+bg(t)] = aF(\omega)+bG(\omega)$。
2. **时移**：$\mathcal{F}[f(t-t_0)] = e^{-\mathrm{i}\omega t_0} F(\omega)$。
3. **频移**：$\mathcal{F}[e^{\mathrm{i}\omega_0 t} f(t)] = F(\omega - \omega_0)$。
4. **尺度变换**：$\mathcal{F}[f(at)] = \frac{1}{|a|} F\left(\frac{\omega}{a}\right)$。
5. **微分**：$\mathcal{F}[f'(t)] = \mathrm{i}\omega F(\omega)$（要求 $f(\pm\infty)=0$）。
6. **卷积定理**：$\mathcal{F}[f(t) * g(t)] = F(\omega) G(\omega)$，其中卷积定义为 $(f*g)(t) = \int_{-\infty}^{\infty} f(\tau)g(t-\tau)d\tau$。

### 适用范围

傅里叶变换广泛用于信号处理、图像处理、量子力学、偏微分方程等领域。它特别适用于处理平稳信号和线性时不变系统，通过频域分析可以直观地理解系统的频率响应、滤波特性等。然而，对于随时间增长的函数（如 $e^{at}, a>0$），傅里叶变换可能不存在，此时需引入拉普拉斯变换。

## δ函数

### 定义与性质

$\delta$ 函数（Dirac delta 函数）不是普通函数，而是一种广义函数（分布），其定义为：对于任意连续函数 $f(t)$，有

$$
\begin{align}
\int_{-\infty}^{\infty} \delta(t) f(t) \, dt = f(0)
\end{align}
$$

更一般地，$\delta(t-t_0)$ 满足

$$
\begin{align}
\int_{-\infty}^{\infty} \delta(t-t_0) f(t) \, dt = f(t_0)
\end{align}
$$

$\delta$ 函数可视为一系列普通函数（如矩形脉冲、高斯函数）的极限，具有以下性质：

- 筛选性：如上所述。
- 偶函数：$\delta(-t) = \delta(t)$。
- 与普通函数乘积：$f(t)\delta(t-t_0) = f(t_0)\delta(t-t_0)$。
- 导数 $\delta'(t)$ 也有定义，满足 $\int \delta'(t) f(t) dt = -f'(0)$。

### δ函数与傅里叶变换

$\delta$ 函数的傅里叶变换为

$$
\begin{align}
\mathcal{F}[\delta(t)] = \int_{-\infty}^{\infty} \delta(t) e^{-\mathrm{i}\omega t} dt = 1
\end{align}
$$

反之，常数函数 $1$ 的傅里叶逆变换为 $\delta(\omega)$：

$$
\begin{align}
\mathcal{F}^{-1}[1] = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{\mathrm{i}\omega t} d\omega = \delta(t)
\end{align}
$$

因此，$\delta$ 函数为处理傅里叶变换中的恒等元、周期函数的变换等提供了工具。例如，周期函数的傅里叶变换可表示为一系列 $\delta$ 函数的组合：

$$
\begin{align}
\mathcal{F}\left[\sum_{n=-\infty}^{\infty} c_n e^{\mathrm{i} n\omega_0 t}\right] = 2\pi \sum_{n=-\infty}^{\infty} c_n \delta(\omega - n\omega_0)
\end{align}
$$

**物理意义**：$\delta$ 函数在频域中表示一个理想的单频信号（纯正弦波），在时域中表示一个瞬时冲击。它是傅里叶分析中不可或缺的广义函数。

> 傅里叶变换将时域和频域联系起来，而 $\delta$ 函数则架起了连续谱和离散谱之间的桥梁，使得我们能够统一处理周期和非周期信号。
