---
title: 数学物理方程的定解问题
author: NeoWangKing
date: 2026-03-01
lastMod: 2026-03-01
tags: [数学, 物理, 学科交叉, 数学物理方法]
category: ['数学', '数学物理方法']
summary: 这是我在学习 数学物理方法 过程中的笔记
comment: true
draft: false
---

## 数学物理方程的类型

### 波动方程

波动方程的常见形式可以写成

$$
\begin{align}
u_{tt}-a^{2}\Delta u=0
\end{align}
$$

1. 均匀弦的微小横振动

   对应 $a^{2}=F_{T}/\rho$ ，方程为

   $$
   \begin{align}
   \rho u_{tt}-F_{T}u_{xx}=0
   \end{align}
   $$

   即为**弦振动方程**

   考虑受迫振动的情形，化为

   $$
   \begin{align}
   \rho u_{tt}-F_{T}u_{xx}&=F(x,t)\\
   \Rightarrow u_{tt}-a^{2}u_{xx}&=f(x,t)
   \end{align}
   $$

   就是**弦的受迫振动方程**

2. 均匀杆的纵振动

   对应 $a^{2}=E/\rho$ ，方程为

   $$
   \begin{align}
   \rho u_{tt}-Eu_{xx}=0
   \end{align}
   $$

   即为**杆的纵振动方程**

   考虑受迫振动的情形，化为

   $$
   \begin{align}
   \rho u_{tt}-Eu_{xx}&=F(x,t)\\
   \Rightarrow u_{tt}-a^{2}u_{xx}&=f(x,t)
   \end{align}
   $$

   就是**杆的受迫振动方程**

3. 传输线方程（电报方程）

   1. 非理想传输线

      方程为

      $$
      \begin{align}
      LCj_{tt}-j_{xx}+(LG+RC)j_{t}+RGj&=0\\
      LCv_{tt}-v_{xx}+(LG+RC)v_{t}+RGv&=0
      \end{align}
      $$

   2. 理想传输线

      在导线电阻 $R$ 和线间电导 $G$ 很小以至于可以忽略时，化成**理想传输线**

      $$
      \begin{align}
      j_{tt}-a^{2}j_{xx}&=0\\
      v_{tt}-a^{2}v_{xx}&=0
      \end{align}
      $$

      其中 $a^{2}=1/LC$

   上述四个方程叫做**传输线方程（电报方程）**

4. 均匀薄膜的微小横振动

   方程

   $$
   \begin{align}
   \rho u_{tt}-F_{T}(u_{xx}+u_{yy})=0
   \end{align}
   $$

   用**拉普拉斯算符**简化，即可得到

   $$
   \begin{align}
   \rho u_{tt}-F_{T}\Delta_{2}u&=0\\
   u_{tt}-a^{2}\Delta_{2}u&=0
   \end{align}
   $$

   这就是**薄膜微小振动方程**

   在受迫振动的情形下

   $$
   \begin{align}
   u_{tt}-a^{2}\Delta_{2}u=f(x,y,t)
   \end{align}
   $$

   就是**薄膜的受迫振动方程**

5. 流体力学与声学方程

   对应 $a^{2}=\frac{\gamma p_{0}}{\rho_{0}}$ ，方程为

   $$
   \begin{align}
   u_{tt}-a^{2}\Delta_{3}u=0
   \end{align}
   $$

   就是**声波方程**，其中 $p_{0}$ 和 $\rho_{0}$ 为空气处于平衡状态下的压强和密度

6. 电磁波方程

   利用麦克斯韦方程组可以推导出

   $$
   \begin{align}
   \boldsymbol{E}_{tt}-a^{2}\Delta_{3}\boldsymbol{E}&=0\\
   \boldsymbol{H}_{tt}-a^{2}\Delta_{3}\boldsymbol{H}&=0
   \end{align}
   $$

   此即为真空中的**电磁波方程**，其中 $a^{2}=1/\mu*{0}\varepsilon*{0}=光速平方

7. 杆的微小横振动

   杆在横向变形时，存在**切应力**，于是杆的横振动方程为

   $$
   \begin{align}
   u_{tt}+a^{2}u_{xxxx}=0\space(a^{2}=EI/\rho)
   \end{align}
   $$

   其中 $E$ 是弹性模量，$I$ 是转动惯量，$\rho$ 是密度

   > 注意这个方程与前面的振动的常用方程的不同，比如符号、偏导的阶数

### 输运方程

1. 扩散方程

   扩散直接与物质的浓度有关，方程

   $$
   \begin{align}
   u_{t}-\left[\frac{\partial}{\partial x}\left(D\frac{\partial u}{\partial x}\right)+\frac{\partial}{\partial y}\left(D\frac{\partial u}{\partial y}\right)+\frac{\partial}{\partial z}\left(D\frac{\partial u}{\partial z}\right)\right]=0
   \end{align}
   $$

   如果扩散系数 $D$ 在空间中是均匀的，则方程可以简化为

   $$
   \begin{align}
   u_{t}-a^{2}\Delta_{3}u=0
   \end{align}
   $$

   而在有源（汇）扩散的情形下，考虑一下情况：

   1. 扩散源强度与浓度无关

      扩散源强度为 $F(x,y,z,t)$ ，则方程为

      $$
      \begin{align}
      u_{t}-\left[\frac{\partial}{\partial x}\left(D\frac{\partial u}{\partial x}\right)+\frac{\partial}{\partial y}\left(D\frac{\partial u}{\partial y}\right)+\frac{\partial}{\partial z}\left(D\frac{\partial u}{\partial z}\right)\right]=F(x,y,z,t)
      \end{align}
      $$

      $$
      \begin{align}
      u_{t}-a^{2}\Delta_{3}u=F(x,y,z,t)\space(a^{2}=D)
      \end{align}
      $$

   2. 扩散源的强度与浓度 $u$ 成正比

      例如 $^{235}\mathrm{U}$ 原子核的链式反应中，中子数增殖的时间变化率为 $b^{2}u$ ，于是一维和三维方程相应变化为

      $$
      \begin{align}
      \begin{cases}
      u_{t}-a^{2}u_{xx}-b^{2}u=0\\
      u_{t}-a^{2}\Delta_{3}u-b^{2}u=0
      \end{cases}
      \end{align}
      $$

2. 热传导方程

### 稳定场方程
