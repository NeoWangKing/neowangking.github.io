---
title: 矢量分析
author: NeoWangKing
date: 2026-03-02
lastMod: 2026-03-09
tags: [物理, 电动力学, 矢量分析]
category: ['物理', '电动力学']
summary: 这是我在学习 电动力学 过程中的笔记
comments: true
draft: false
---

## 矢量代数

### 矢量运算

1. **矢量的加法**：$\boldsymbol{A}+\boldsymbol{B}=\boldsymbol{B}+\boldsymbol{A}$

   除了交换律，矢量的加法也满足结合律

   $$
   \begin{align}
   (\boldsymbol{A}+\boldsymbol{B})+\boldsymbol{C}=\boldsymbol{A}+(\boldsymbol{B}+\boldsymbol{C})
   \end{align}
   $$

2. **标量的数乘**：$a(\boldsymbol{A}+\boldsymbol{B})=a\boldsymbol{A}+a\boldsymbol{B}$

3. **矢量的点乘**：$\boldsymbol{A}\cdot\boldsymbol{B}=AB\cos{\theta}$

   矢量的点乘满足交换律：

   $$
   \begin{align}
   \boldsymbol{A}\cdot\boldsymbol{B}=\boldsymbol{B}\cdot\boldsymbol{A}
   \end{align}
   $$

   以及分配律：

   $$
   \begin{align}
   \boldsymbol{A}\cdot(\boldsymbol{B}+\boldsymbol{C})=\boldsymbol{A}\cdot\boldsymbol{B}+\boldsymbol{A}\cdot\boldsymbol{C}
   \end{align}
   $$

4. **矢量的叉乘**：$\boldsymbol{A}\times\boldsymbol{B}=AB\sin{\theta}\hat{\boldsymbol{n}}$

   矢量的叉乘满足分配律：

   $$
   \begin{align}
   \boldsymbol{A}\times(\boldsymbol{B}+\boldsymbol{C})=\boldsymbol{A}\times\boldsymbol{B}+\boldsymbol{A}\times\boldsymbol{C}
   \end{align}
   $$

   但值得注意的是，矢量的叉乘并不满足交换律，其满足如下式子：

   $$
   \begin{align}
   \boldsymbol{B}\times\boldsymbol{A}=-(\boldsymbol{A}\times\boldsymbol{B})
   \end{align}
   $$

### 矢量的微分学

1. 梯度算符（$\nabla$）

   定义表达式

   $$
   \begin{align}
   \nabla T&=\frac{\partial T}{\partial x}\hat{x}+\frac{\partial T}{\partial y}\hat{y}+\frac{\partial T}{\partial z}\hat{z}\\
   &=\left(\hat{x}\frac{\partial}{\partial x}+\hat{y}\frac{\partial}{\partial y}+\hat{z}\frac{\partial}{\partial z}\right)T
   \end{align}
   $$

   其中，算符 $\nabla=\hat{x}\frac{\partial}{\partial x}+\hat{y}\frac{\partial}{\partial y}+\hat{z}\frac{\partial}{\partial z}$ 称作**梯度算符**，读作“Nabla算符”

2. 散度（$\nabla\cdot\vec{v}$）

   矢量 $\vec{v}$ 的散度定义为

   $$
   \begin{align}
   \nabla\cdot\vec{v}=\frac{\partial v_{x}}{\partial x}+\frac{\partial v_{y}}{\partial y}+\frac{\partial v_{z}}{\partial z}
   \end{align}
   $$

3. 旋度（$\nabla\times\vec{v}$）

   矢量 $\vec{v}$ 的旋度定义为

   $$
   \begin{align}
   \nabla\times\vec{v}&=
   \begin{vmatrix}
   \hat{x} & \hat{y} & \hat{z}\\
   \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z}\\
   v_{x} & v_{y} & v_{z}
   \end{vmatrix}\\
   &=\left(\frac{\partial v_{z}}{\partial y}-\frac{\partial v_{y}}{\partial z}\right)\vec{x}+
   \left(\frac{\partial v_{x}}{\partial z}-\frac{\partial v_{z}}{\partial x}\right)\vec{y}+
   \left(\frac{\partial v_{y}}{\partial x}-\frac{\partial v_{x}}{\partial y}\right)\vec{z}
   \end{align}
   $$

> 关于梯度算符的一些常用性质
>
> 1. 梯度：
>
>    $$
>    \begin{align}
>    \nabla(fg)=f\nabla g+g\nabla f
>    \end{align}
>    $$
>
>    $$
>    \begin{align}
>    \nabla(\boldsymbol{A}\cdot\boldsymbol{B})=\boldsymbol{A}\times(\nabla\times\boldsymbol{B})+\boldsymbol{B}\times(\nabla\times\boldsymbol{A})+(\boldsymbol{A}\cdot\nabla)\boldsymbol{B}+(\boldsymbol{B}\cdot\nabla)\boldsymbol{A}
>    \end{align}
>    $$
>
> 2. 散度：
>
>    $$
>    \begin{align}
>    \nabla\cdot(f\boldsymbol{A})=f(\nabla\cdot\boldsymbol{A})+\boldsymbol{A}\cdot(\nabla f)
>    \end{align}
>    $$
>
>    $$
>    \begin{align}
>    \nabla\cdot(\boldsymbol{A}\times\boldsymbol{B})=\boldsymbol{B}\cdot(\nabla\times\boldsymbol{A})-\boldsymbol{A}\cdot(\nabla\times\boldsymbol{B})
>    \end{align}
>    $$
>
> 3. 旋度：
>
>    $$
>    \begin{align}
>    \nabla\times(f\boldsymbol{A})=f(\nabla\times\boldsymbol{A})+\boldsymbol{A}\times(\nabla f)
>    \end{align}
>    $$
>
>    $$
>    \begin{align}
>    \nabla\times(\boldsymbol{A}\times\boldsymbol{B})=(\boldsymbol{B}\cdot\nabla)\boldsymbol{A}-(\boldsymbol{A}\cdot\nabla)\boldsymbol{B}+\boldsymbol{A}(\nabla\cdot\boldsymbol{B})-\boldsymbol{B}(\nabla\cdot\boldsymbol{A})
>    \end{align}
>    $$

### 矢量的积分学

1. 梯度定理

   $$
   \begin{align}
   \int_{\boldsymbol{a}}^{\boldsymbol{b}}{(\nabla T)\cdot\mathrm{d}\boldsymbol{l}}=T(\boldsymbol{b})-T(\boldsymbol{a})
   \end{align}
   $$

   即梯度场上的路径积分只与路径的起点和终点有关，于是可以得到环路积分：

   $$
   \begin{align}
   \oint{(\nabla T)\cdot\mathrm{d}\boldsymbol{l}}=0
   \end{align}
   $$

2. 散度定理

   $$
   \begin{align}
   \iiint_{V}{(\nabla\cdot\boldsymbol{v})\mathrm{d}\tau}=\oiint_{S=\partial V}{\boldsymbol{v}\cdot\mathrm{d}\boldsymbol{a}}
   \end{align}
   $$

3. 旋度定理

   $$
   \begin{align}
   \iint_{S}{(\nabla\times\boldsymbol{v})\cdot\mathrm{d}\boldsymbol{v}}=\oint_{L=\partial S}{\boldsymbol{v}\cdot\mathrm{d}\boldsymbol{l}}
   \end{align}
   $$

### 矢量的不同坐标系转换

1. 球坐标系

   ![球坐标系](@/image/posts/physics/Electrodynamics/Vector-Analysis/spherical.jpg '球坐标系')

   在球坐标系下，梯度、散度、旋度以及拉普拉斯算符的形式为

   - 梯度：

     $$
     \begin{align}
     \nabla T=\frac{\partial T}{\partial r}\boldsymbol{\hat{r}}+\frac{1}{r}\frac{\partial T}{\partial\theta}\boldsymbol{\hat{\theta}}+\frac{1}{r\sin{\theta}}\frac{\partial T}{\partial \phi}\boldsymbol{\hat{\phi}}
     \end{align}
     $$

   - 散度：

     $$
     \begin{align}
     \nabla\cdot\boldsymbol{v}=\frac{1}{r^{2}}\frac{\partial}{\partial r}(r^{2} v_{r})+\frac{1}{r\sin{\theta}}\frac{\partial}{\partial \theta}(\sin{\theta} v_{\theta})+\frac{1}{r\sin{\theta}}\frac{\partial v_{\phi}}{\partial \phi}
     \end{align}
     $$

   - 旋度：

     $$
     \begin{align}
     \nabla\times\boldsymbol{v}=&\frac{1}{r\sin{\theta}}\left[\frac{\partial}{\partial\theta}(\sin{\theta}v_{\phi})-\frac{\partial v_{\theta}}{\partial\phi}\right]\boldsymbol{\hat{r}}+\frac{1}{r}\left[\frac{1}{\sin{\theta}}\frac{\partial v_{r}}{\partial\phi}-\frac{\partial}{\partial r}(r v_{\phi})\right]\boldsymbol{\hat{\theta}}\\
     &+\frac{1}{r}\left[\frac{\partial}{\partial r}(r v_{\theta})-\frac{\partial v_{r}}{\partial \theta}\right]\boldsymbol{\hat{\phi}}
     \end{align}
     $$

   - 拉普拉斯算符：
     $$
     \begin{align}
     \nabla^{2}T=\frac{1}{r^{2}}\frac{\partial}{\partial r}\left(r^{2}\frac{\partial T}{\partial r}\right)+\frac{1}{r^{2}\sin{\theta}}\frac{\partial}{\partial\theta}\left(\sin{\theta}\frac{\partial T}{\partial \theta}\right)+\frac{1}{r^{2}\sin^{2}{\theta}}\frac{\partial^{2}T}{\partial \phi^{2}}
     \end{align}
     $$

2. 柱坐标系

   ![柱坐标系](@/image/posts/physics/Electrodynamics/Vector-Analysis/cylindrical.jpg '柱坐标系')

   在柱坐标系下，梯度、散度、旋度以及拉普拉斯算符的形式为

   - 梯度：

     $$
     \begin{align}
     \nabla T=\frac{\partial T}{\partial s}\boldsymbol{\hat{s}}+\frac{1}{s}\frac{\partial T}{\partial\phi}\boldsymbol{\hat{\phi}}+\frac{\partial T}{\partial z}\boldsymbol{\hat{z}}
     \end{align}
     $$

   - 散度：

     $$
     \begin{align}
     \nabla\cdot\boldsymbol{v}=\frac{1}{s}\frac{\partial}{\partial s}(s v_{s})+\frac{1}{s}\frac{\partial v_{\phi}}{\partial \phi}+\frac{\partial v_{z}}{\partial z}
     \end{align}
     $$

   - 旋度：

     $$
     \begin{align}
     \nabla\times\boldsymbol{v}=\left(\frac{1}{s}\frac{\partial v_{z}}{\partial\phi}-\frac{\partial v_{\phi}}{\partial z}\right)\boldsymbol{\hat{s}}+\left(\frac{\partial v_{s}}{\partial z}-\frac{\partial v_{z}}{\partial s}\right)\boldsymbol{\hat{\phi}}+\frac{1}{s}\left[\frac{\partial}{\partial s}(s v_{\phi})-\frac{\partial v_{s}}{\partial \phi}\right]\boldsymbol{\hat{z}}
     \end{align}
     $$

   - 拉普拉斯算符：

     $$
     \begin{align}
     \nabla^{2}T=\frac{1}{s}\frac{\partial}{\partial s}\left(s\frac{\partial T}{\partial s}\right)+\frac{1}{s^{2}}\frac{\partial^{2}T}{\partial\phi^{2}}+\frac{\partial^{2}T}{\partial z^{2}}
     \end{align}
     $$

### 狄拉克函数

1. 一维狄拉克函数

   一维情形下的狄拉克函数 $\delta(x)$ 可以看作一个位于 $x=0$ 处的无限高、无限窄的“尖刺”，并且其面积为 $1$，即

   $$
   \begin{align}
   \delta(x)=
   \begin{cases}
   0, & \text{if}\space x \neq 0\\
   \infty, & \text{if}\space x = 0
   \end{cases}
   \end{align}
   $$

   并且

   $$
   \begin{align}
   \int_{-\infty}^{\infty}{\delta(x)\mathrm{d}x}=1
   \end{align}
   $$

   ![狄拉克函数示意图](@/image/posts/physics/Electrodynamics/Vector-Analysis/diracfunction.jpg '狄拉克函数示意图')

   #### 一维狄拉克函数的一些性质

   - $\int_{-\infty}^{\infty}{f(x)\delta(x-a)\mathrm{d}x}=f(a)$

   - $\delta(kx)=\frac{1}{|k|}\delta(x)$

2. 三维狄拉克函数

   三维情形下的狄拉克函数可以由一维狄拉克函数简单的生成

   $$
   \begin{align}
   \delta^{3}(\boldsymbol{r})=\delta(x)\delta(y)\delta(z)
   \end{align}
   $$

   易证，三维的狄拉克函数依旧满足“面积为一”

   $$
   \begin{align}
   \iiint_{\text{all space}}{\delta^{3}(\boldsymbol{r})\mathrm{d}\tau}=1
   \end{align}
   $$

   #### 三维狄拉克函数的一些性质

   与一维的情形相对应

   - $\iiint_{\text{all space}}{f(\boldsymbol{r})\delta^{3}(\boldsymbol{r}-\boldsymbol{a})\mathrm{d}\tau}=f(\boldsymbol{a})$

   - $\delta^{3}(k\boldsymbol{r})=\frac{1}{|k^{3}|}\delta^{3}(\boldsymbol{r})$

### 矢量场理论

1. 亥姆霍兹定理

   一个矢量场 $F$ 可以由其散度场 $D$ 和旋度场 $C$ 唯一的定义，**当且仅当**在 $r\rightarrow+\infty$ 时，这个矢量场本身趋于 $0$，且其散度和旋度趋于零的速度比 $\frac{1}{r^{2}}$ 快

   $$
   \begin{align}
   \text{ $F$ 可被 $D$ 和 $C$ 唯一定义} \iff
   \begin{cases}
   F\rightarrow 0\\
   r^{2}D\rightarrow 0\\
   r^{2}C\rightarrow 0
   \end{cases},\quad(r\rightarrow +\infty)
   \end{align}
   $$
