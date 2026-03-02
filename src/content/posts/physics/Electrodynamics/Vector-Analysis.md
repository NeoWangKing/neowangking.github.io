---
title: 矢量分析
author: NeoWangKing
date: 2026-03-02
lastMod: 2026-03-02
tags: [数学, 物理, 学科交叉, 电动力学, 矢量分析]
category: ['物理', '电动力学']
summary: 这是我在学习 电动力学 过程中的笔记
comments: false
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
> 1.  梯度：
>
>     $$
>     \begin{align}
>     \nabla(fg)=f\nabla g+g\nabla f
>     \end{align}
>     $$
>
>     $$
>     \begin{align}
>     \nabla(\boldsymbol{A}\cdot\boldsymbol{B})=\boldsymbol{A}\times(\nabla\times\boldsymbol{B})+\boldsymbol{B}\times(\nabla\times\boldsymbol{A})+(\boldsymbol{A}\cdot\nabla)\boldsymbol{B}+(\boldsymbol{B}\cdot\nabla)\boldsymbol{A}
>     \end{align}
>     $$
>
> 2.  散度：
>
>     $$
>     \begin{align}
>     \nabla\cdot(f\boldsymbol{A})=f(\nabla\cdot\boldsymbol{A})+\boldsymbol{A}\cdot(\nabla f)
>     \end{align}
>     $$
>
>     $$
>     \begin{align}
>     \nabla\cdot(\boldsymbol{A}\times\boldsymbol{B})=\boldsymbol{B}\cdot(\nabla\times\boldsymbol{A})-\boldsymbol{A}\cdot(\nabla\times\boldsymbol{B})
>     \end{align}
>     $$
>
> 3.  旋度：
>
>     $$
>     \begin{align}
>     \nabla\times(f\boldsymbol{A})=f(\nabla\times\boldsymbol{A})+\boldsymbol{A}\times(\nabla f)
>     \end{align}
>     $$
>
>     $$
>     \begin{align}
>     \nabla\times(\boldsymbol{A}\times\boldsymbol{B})=(\boldsymbol{B}\cdot\nabla)\boldsymbol{A}-(\boldsymbol{A}\cdot\nabla)\boldsymbol{B}+\boldsymbol{A}(\nabla\cdot\boldsymbol{B})-\boldsymbol{B}(\nabla\cdot\boldsymbol{A})
>     \end{align}
>     $$
