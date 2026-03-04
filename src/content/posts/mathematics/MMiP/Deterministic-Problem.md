---
title: 数理方法（1）：数学物理方程的定解问题
author: NeoWangKing
date: 2026-03-01
lastMod: 2026-03-04
tags: [数学, 物理, 学科交叉, 数学物理方法]
category: ['数学', '数学物理方法']
summary: 这是我在学习 数学物理方法 过程中的笔记
comments: false
draft: false
---

## 数学物理方程的导出

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

   热传导的起源是温度的不均匀，热传导现象遵循**热传导定律**，也就是**傅里叶定律**

   $$
   \begin{align}
   \boldsymbol{q}=-k\nabla u
   \end{align}
   $$

   比例系数 $k$ 称作**热传导系数**

   仿照扩散问题，应用热传导定律和能量守恒定律，可以导出热传导方程

   $$
   \begin{align}
   c\rho u_{t}-\left[\frac{\partial}{\partial x}(ku_{x})+\frac{\partial}{\partial y}(ku_{y})+\frac{\partial}{\partial z}(ku_{z})\right]=0
   \end{align}
   $$

   其中 $c$ 是比热容，$\rho$ 的密度，对于均匀物体，$k$、$c$、$\rho$ 是常数，上式化为

   $$
   \begin{align}
   u_{t}-a^{2}\Delta u=0,\space\left(a^{2}=\frac{k}{c\rho}\right)
   \end{align}
   $$

   - 如果存在热源 $F(x,y,z,t)$ ，方程就可以化为

     $$
     \begin{align}
     c\rho u_{t}-\left[\frac{\partial}{\partial x}(ku_{x})+\frac{\partial}{\partial y}(ku_{y})+\frac{\partial}{\partial z}(ku_{z})\right]=F(x,y,z,t)
     \end{align}
     $$

     对均匀物体

     $$
     \begin{align}
     u_{t}-a^{2}\Delta u=f(x,y,z,t),\space\left(a^{2}=\frac{k}{c\rho}\right)
     \end{align}
     $$

### 稳定场方程

1. 稳定浓度分布

   如果扩散源的强度 $F(x,y,z)$ 不随时间变化，扩散运动最后会达到稳定状态，于是方程 $\text{(22)}$ 就化为

   $$
   \begin{align}
   \nabla\cdot(D\nabla u)=-F(x,y,z)
   \end{align}
   $$

   如果 $D$ 是常数，就有

   $$
   \begin{align}
   D\Delta u=-F(x,y,z)
   \end{align}
   $$

   这就是**泊松方程**，如果没有源，就是**拉普拉斯方程**

   $$
   \begin{align}
   \Delta u=0
   \end{align}
   $$

   这两个方程就是**浓度的稳定分布方程**

2. 稳定温度分布

   与浓度分布对应，如果热源温度 $T(x,y,z)$ 不随时间变化，方程 $\text{(28)}$ 就化为

   $$
   \begin{align}
   \nabla\cdot(k\nabla u)=-T(x,y,z)
   \end{align}
   $$

   如果 $k$ 是常数，就有

   $$
   \begin{align}
   k\Delta u=-T(x,y,z)
   \end{align}
   $$

   这也是**泊松方程**，如果没有热源，也会简化为**拉普拉斯方程**

   $$
   \begin{align}
   \Delta u=0
   \end{align}
   $$

3. 静电场

   静电场的电场强度 $\boldsymbol{E}$ 是无旋的，即

   $$
   \begin{align}
   \nabla\times\boldsymbol{E}=0
   \end{align}
   $$

   于是存在电势函数 $V(x,y,z)$ 使得

   $$
   \begin{align}
   \boldsymbol{E}=-\nabla V
   \end{align}
   $$

   而电场强度的散度又满足

   $$
   \begin{align}
   \nabla\cdot\boldsymbol{E}=\frac{1}{\varepsilon_{0}}\rho
   \end{align}
   $$

   代入即可得到**泊松方程**

   $$
   \begin{align}
   \Delta V=-\frac{1}{\varepsilon_{0}}\rho
   \end{align}
   $$

   在没有电荷分布的区域内，方程简化为**拉普拉斯方程**

   $$
   \begin{align}
   \Delta V=0
   \end{align}
   $$

4. 恒定电流场

   研究具有恒定电流分布的导电介质，其中的电荷满足连续性方程

   $$
   \begin{align}
   \frac{\partial \rho}{\partial t}+\nabla\cdot\boldsymbol{j}=0
   \end{align}
   $$

   在恒定电流的情况下，$\boldsymbol{j}(x,y,z)$ 不随时间变化，$\rho(x,y,z)$ 也不随时间变化，于是

   $$
   \begin{align}
   \nabla\cdot\boldsymbol{j}=0
   \end{align}
   $$

   于是根据麦克斯韦方程组，有

   $$
   \begin{align}
   \nabla\times\boldsymbol{E}=0\\
   \Rightarrow\boldsymbol{E}=-\nabla\varphi
   \end{align}
   $$

   代入 $\boldsymbol{j}=\sigma\boldsymbol{E}$ 即可得到

   $$
   \begin{align}
   \nabla\cdot(\sigma\boldsymbol{E})=-\nabla\cdot(\sigma\nabla\varphi)=0
   \end{align}
   $$

   对于均匀导电介质，$\sigma$ 是常量，于是方程简化为

   $$
   \begin{align}
   \Delta\varphi=0
   \end{align}
   $$

   这是**拉普拉斯方程**

## 定解条件

### （一）初始条件

对于随着时间而发展变化的问题，必须考虑到研究对象的“历史”，即追溯到某个“初始时刻”的状态，也即**初始条件**

1. 输运过程

   对于输运过程来说，初始状态指的是所研究物理量 $u$ 的初始分布，因此初始条件就是

   $$
   \begin{align}
   \left. u(x,y,z,t)\right|_{t=0}=\varphi(x,y,z)
   \end{align}
   $$

2. 振动过程

   对于振动过程，只给出物理量的初始“位置”

   $$
   \begin{align}
   \left. u(x,y,z,t)\right|_{t=0}=\varphi(x,y,z)
   \end{align}
   $$

   是不够的，还需要知道初始的“速度”

   $$
   \begin{align}
   \left. u_{t}(x,y,z,t)\right|_{t=0}=\psi(x,y,z)
   \end{align}
   $$

   这是由于振动方程中出现了关于时间 $t$ 的二阶导数，所以需要两个初始条件

3. 稳定场问题不存在初始条件问题

### （二）边界条件

研究具体的物理系统时，需要考虑研究对象所处的特定环境，这体现在边界上的物理状况，也就是**边界条件**

1. 线性边界条件

   数学上，可以将常见的线性边界条件分为三类

   1. 第一类边界条件

      直接规定了所研究的物理量在边界上的数值

      $$
      \begin{align}
      \left. u(\boldsymbol{r},t)\right|_{\Sigma}=f(M,t)
      \end{align}
      $$

   2. 第二类边界条件

      规定了物理量在边界外法线方向上方向导数的数值

      $$
      \begin{align}
      \left. \frac{\partial u}{\partial n}\right|_{\Sigma}=f(M,t)
      \end{align}
      $$

   3. 第三类边界条件

      规定了物理量及其外法向导数的线性组合在边界上的数值

      $$
      \begin{align}
      \left. \left(u+H\frac{\partial u}{\partial n}\right)\right|_{\Sigma}=f(M,t)
      \end{align}
      $$

2. 非线性边界条件

   比如物体表面按照斯蒂芬定律（与温度的四次方成正比）向四周辐射能量时，就会出现非线性的边界条件

### （三）衔接条件
