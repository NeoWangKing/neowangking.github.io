---
title: 势与场和狭义相对论
author: NeoWangKing
date: 2026-03-14T11:50:58+08:00
lastMod: 2026-03-14T11:50:58+08:00
tags: [物理, 电动力学, 矢势, 标势, 规范变换, 相对论]
category: ['物理', '电动力学']
summary: 本文介绍电动力学中的势与场，包括矢势和标势的引入、规范变换（库仑规范与洛伦兹规范），以及狭义相对论的基本原理、同时性的相对性、时间膨胀等概念。
comments: true
draft: false
---

## 势与场

### 矢势与标势的引入

在电动力学中，为了简化麦克斯韦方程组的求解，我们引入矢势 $\boldsymbol{A}$ 和标势 $V$。由磁场的无散性，可令

$$
\begin{align}
\boldsymbol{B} = \nabla \times \boldsymbol{A}
\end{align}
$$

代入法拉第定律 $\nabla \times \boldsymbol{E} = -\partial \boldsymbol{B}/\partial t$，得

$$
\begin{align}
\nabla \times \left( \boldsymbol{E} + \frac{\partial \boldsymbol{A}}{\partial t} \right) = 0
\end{align}
$$

因此括号内的矢量可以表示为某标量函数的梯度，令

$$
\begin{align}
\boldsymbol{E} + \frac{\partial \boldsymbol{A}}{\partial t} = -\nabla V
\end{align}
$$

于是电场可表示为

$$
\begin{align}
\boldsymbol{E} = -\nabla V - \frac{\partial \boldsymbol{A}}{\partial t}
\end{align}
$$

将上述表达式代入麦克斯韦方程组中的高斯定律和安培定律，得到关于势的方程：

$$
\begin{align}
\nabla^2 V + \frac{\partial}{\partial t} (\nabla \cdot \boldsymbol{A}) = -\frac{1}{\epsilon_0} \rho
\end{align}
$$

$$
\begin{align}
\nabla^2 \boldsymbol{A} - \mu_0 \epsilon_0 \frac{\partial^2 \boldsymbol{A}}{\partial t^2} - \nabla \left( \nabla \cdot \boldsymbol{A} + \mu_0 \epsilon_0 \frac{\partial V}{\partial t} \right) = -\mu_0 \boldsymbol{J}
\end{align}
$$

### 规范变换

势 $(\boldsymbol{A}, V)$ 的选取不是唯一的，因为可以作如下变换而不改变电场和磁场：

$$
\begin{align}
\boldsymbol{A}' = \boldsymbol{A} + \nabla \lambda, \quad V' = V - \frac{\partial \lambda}{\partial t}
\end{align}
$$

其中 $\lambda$ 是任意标量函数。这种变换称为 **规范变换**，电场和磁场在规范变换下保持不变。

### 库仑规范

库仑规范要求 $\nabla \cdot \boldsymbol{A} = 0$。在此规范下，标势方程简化为泊松方程：

$$
\begin{align}
\nabla^2 V = -\frac{1}{\epsilon_0} \rho
\end{align}
$$

而矢势方程变为

$$
\begin{align}
\nabla^2 \boldsymbol{A} - \mu_0 \epsilon_0 \frac{\partial^2 \boldsymbol{A}}{\partial t^2} = -\mu_0 \boldsymbol{J} + \mu_0 \epsilon_0 \nabla \frac{\partial V}{\partial t}
\end{align}
$$

库仑规范中标势 $V$ 由瞬时电荷分布决定，类似于静电场情形，但矢势的方程仍较复杂。

### 洛伦兹规范

洛伦兹规范要求

$$
\begin{align}
\nabla \cdot \boldsymbol{A} + \mu_0 \epsilon_0 \frac{\partial V}{\partial t} = 0
\end{align}
$$

在此规范下，势的方程解耦为对称形式的达朗贝尔方程：

$$
\begin{align}
\nabla^2 V - \mu_0 \epsilon_0 \frac{\partial^2 V}{\partial t^2} = -\frac{1}{\epsilon_0} \rho
\end{align}
$$

$$
\begin{align}
\nabla^2 \boldsymbol{A} - \mu_0 \epsilon_0 \frac{\partial^2 \boldsymbol{A}}{\partial t^2} = -\mu_0 \boldsymbol{J}
\end{align}
$$

引入达朗贝尔算符 $\Box^2 = \nabla^2 - \mu_0 \epsilon_0 \dfrac{\partial^2}{\partial t^2}$，方程可简洁地写为

$$
\begin{align}
\Box^2 V = -\frac{1}{\epsilon_0} \rho, \quad \Box^2 \boldsymbol{A} = -\mu_0 \boldsymbol{J}
\end{align}
$$

洛伦兹规范在狭义相对论中具有特别重要的地位，因为它使势方程具有洛伦兹协变性。

## 狭义相对论

### 爱因斯坦的基本假设

1. **相对性原理**：所有物理定律在一切惯性参考系中形式相同。
2. **光速不变原理**：真空中的光速对所有惯性观察者都相同，与光源运动无关。

光速 $c = 1/\sqrt{\mu_0\epsilon_0} \approx 3\times 10^8\,\mathrm{m/s}$ 是宇宙常数，不存在绝对静止的“以太”。

### 爱因斯坦速度叠加公式

在相对论中，速度不再满足伽利略叠加，而是

$$
\begin{align}
v_1 = \frac{v_2 + v_{21}}{1 + \dfrac{v_2 v_{21}}{c^2}}
\end{align}
$$

其中 $v_1$ 是物体在惯性系 $S_1$ 中的速度，$v_2$ 是在 $S_2$ 中的速度，$v_{21}$ 是 $S_2$ 相对 $S_1$ 的速度。若 $v_2 = c$，则 $v_1 = c$，符合光速不变。

### 同时性的相对性

在一列匀速运动的火车中点处发出一闪光，在火车参考系中，光同时到达前后两端；但在地面参考系中，由于光速不变且火车在运动，光到达后端比前端更早。因此，不同惯性系对同时性的判断不同。

### 时间膨胀

考虑火车上的一束光垂直射向地板，在火车参考系中，光走的高度为 $h$，时间为 $\Delta \bar{t} = h/c$。在地面参考系中，由于火车运动，光走的路径为斜线，长度为 $\sqrt{h^2 + (v\Delta t)^2}$，因此

$$
\begin{align}
c\Delta t = \sqrt{h^2 + (v\Delta t)^2} \quad \Rightarrow \quad \Delta t = \frac{h/c}{\sqrt{1-v^2/c^2}} = \gamma \Delta \bar{t}
\end{align}
$$

其中 $\gamma = 1/\sqrt{1-v^2/c^2}$。可见，运动时钟变慢——**时间膨胀**。反之，在火车上的观察者也会看到地面上的时钟变慢，两者都是正确的，这是相对论的对称性。

### 例子：μ子的寿命

μ子在静止时的平均寿命约为 $\Delta \bar{t} = 2\times 10^{-6}\,\mathrm{s}$。若它以 $v = \dfrac{3}{5}c$ 运动，则在地面参考系中的寿命为

$$
\begin{align}
\gamma = \frac{1}{\sqrt{1-(3/5)^2}} = \frac{5}{4}, \quad \Delta t = \gamma \Delta \bar{t} = \frac{5}{4} \times 2\times 10^{-6} = 2.5\times 10^{-6}\,\mathrm{s}
\end{align}
$$

这就是为什么高速μ子能到达地面而被观测到。

_**持续更新ing...**_
