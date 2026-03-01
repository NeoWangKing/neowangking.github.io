---
title: 复变函数的积分
author: NeoWangKing
date: 2026-03-01
lastMod: 2026-03-01
tags: [数学, 物理, 学科交叉]
category: ['数学', '数学物理方法']
summary: 这是我在学习数学物理方法这门课程过程中的笔记
comment: false
draft: false
---

## 复变函数的积分

1. **复变函数的路积分**

   若函数 $f(z)$ 再复平面的一段光滑曲线 $l$ 上有定义，则函数 $f(z)$ 在曲线 $l$ 上从点 $A$ 到 $B$ 的**路积分**定义为

   $$
   \begin{align}
   \int_{l}{f(z)\mathrm{d}z}&=\lim_{\max{|\Delta z_{k}|}}{\sum_{k=1}^{n}f(\zeta_{k})\Delta z_{k}}
   \end{align}
   $$

   其中 $z_{0},z_{1},z_{2},\cdots,z_{n}$ 为 $l$ 上一系列分点，起点为 $A$ 终点为 $B$

   - 将路积分用实部和虚部展开：
     $$
     \begin{align}
     \int_{l}{f(z)\mathrm{d}z}&=\int_{l}{[u(x,y)+\imath v(x,y)](\mathrm{d}x+\imath \mathrm{d}y)}\\&=\int_{l}{u(x,y)\mathrm{d}x-v(x,y)\mathrm{d}y}+\imath\int_{l}{v(x,y)\mathrm{d}x+u(x,y)\mathrm{d}y}
     \end{align}
     $$
     这样就转化为了**两个实变函数的线积分**
   - 因此，实变函数的许多性质也对路积分成立，如
     1. 常数因子可以转移到积分号之外
     2. 函数的和的积分等于函数的积分的和
     3. 反转积分路径，积分值变号
     4. 全路径上的积分等于各分段路径上积分的和
     5. 积分不等式1：
        $$
        \begin{align}
        \left|\int_{l}{f(z)\mathrm{d}z}\right|\le\int_{l}{\left|f(z)\right|\left|\mathrm{d}z\right|}
        \end{align}
        $$
     6. 积分不等式2：
        $$
        \begin{align}
        \left|\int_{l}{f(z)\mathrm{d}z}\right|\le ML
        \end{align}
        $$
        其中 $M$ 为 $|f(z)|$ 在 $l$ 上的最大值，$L$ 为 $l$ 的全长

## 柯西定理

1. **单连通区域情形**

   - 单连通区域：区域中任何闭合曲线内部的点都是区域里的点

   **单连通区域柯西定理**：如果函数 $f(z)$ 在闭单连通区域 $\overline{B}$ 上解析，则对于 $\overline{B}$ 上任一分段光滑闭合曲线 $l$ ，有

   $$
   \begin{align}
   \oint_{l}{f(z)\mathrm{d}z}=0
   \end{align}
   $$

   - 上述柯西定理可以推广：在区域 $B$ 上解析，且在闭区域 $\overline{B}$ 上连续，也有相同结论

2. **复连通区域情形**

   - 复连通区域：在某些点或者子区域上不可导（存在**奇点**）

   **复连通区域柯西定理**：如果函数 $f(z)$ 是闭复连通区域上的**单值解析函数**，则有

   $$
   \begin{align}
   \oint_{l}{f(z)\mathrm{d}z}+\sum_{i=1}^{n}{\oint_{l_{i}}{f(z)\mathrm{d}z}}=0
   \end{align}
   $$

   其中 $l$ 为区域外边界线，$l_{i}$ 为区域的各个内边界线，积分沿外边界线的正方向进行

## 不定积分

1. **原函数**

   在单连通区域 $B$ 中的解析函数 $f(z)$ ，在任意路径 $l$ 上的积分值只与起点终点有关，因此当起点 $z_{0}$ 固定时，可以通过不定积分定义一个单值函数

   $$
   \begin{align}
   F(z)=\int_{z_{0}}^{z}{f(\zeta)\mathrm{d}\zeta}
   \end{align}
   $$

   可证得 $F(z)$ 在 $B$ 上是解析的，且 $F'(z)=f(z)$ ，即 $F(z)$ 是 $f(z)$ 的一个**原函数**
   于是，路积分可以表示为原函数的**改变量**

   $$
   \begin{align}
   \int_{z_{1}}^{z_{2}}{f(\zeta)\mathrm{d}\zeta}=F(z_{2})-F(z_{1})
   \end{align}
   $$

## 柯西公式

1. **柯西公式**
   若 $f(z)$ 在闭单连通区域 $\overline{B}$ 上解析，$l$ 为 $\overline{B}$ 的边界线，$\alpha$ 为 $\overline{B}$ 内的任意一点，则有
   $$
   \begin{align}
   f(\alpha)=\frac{1}{2\pi\imath}\oint_{l}{\frac{f(z)}{z-\alpha}\mathrm{d}z}
   \end{align}
   $$
   此为**柯西公式**

> 以下是柯西公式的两个推论
>
> 1.  **模数原理**
>     若 $f(z)$ 在某个闭区域上解析，则 $|f(z)|$ 只能在边界线上取最大值
> 2.  **刘维尔定理**
>     如 $f(z)$ 在全平面上解析且有界，即 $|f(z)|\le N$ ，则 $f(z)$ 必为常数
