const n="mathematics/MMiP/7-Integral-Transform-Method.md",t="posts",a="mathematics/mmip/7-integral-transform-method",$=`
## 引言

积分变换是将函数映射为另一个函数空间中的积分表达，其核心优势在于能将微分运算转化为代数运算。在数学物理中，傅里叶变换和拉普拉斯变换是求解微分方程（尤其是偏微分方程）最常用的两种积分变换。傅里叶变换擅长处理无界空间或周期边界条件的问题，而拉普拉斯变换更适合处理初值问题，特别是含时间变量的演化方程。

## 傅里叶变换法

### 基本步骤

1. 对偏微分方程中某个空间变量进行傅里叶变换，将偏导数化为代数因子。
2. 求解变换后得到的常微分方程（通常是关于时间 $t$ 的）。
3. 利用初始条件确定解中的待定函数。
4. 通过傅里叶逆变换回到原函数空间。

关键公式：

- 正变换：$\\displaystyle \\hat{f}(k) = \\int_{-\\infty}^\\infty f(x) e^{-\\mathrm{i}kx} \\,\\mathrm{d}x$
- 逆变换：$\\displaystyle f(x) = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty \\hat{f}(k) e^{\\mathrm{i}kx} \\,\\mathrm{d}k$

微分性质：若 $f(x)$ 在无穷远足够快衰减，则

$$
\\begin{align}
\\mathcal{F}\\{ f'(x) \\} = \\mathrm{i}k \\hat{f}(k), \\quad
\\mathcal{F}\\{ f''(x) \\} = -k^2 \\hat{f}(k)
\\end{align}
$$

### 典型例题：一维热传导方程的柯西问题

考虑无限长杆上的热传导：

$$
\\begin{align}
u_t = \\alpha u_{xx}, \\quad -\\infty < x < \\infty,\\ t > 0
\\end{align}
$$

初始条件：$u(x,0) = \\phi(x)$。

**解**：对 $x$ 做傅里叶变换，记 $\\hat{u}(k,t) = \\mathcal{F}\\{ u(x,t) \\}$。利用微分性质得到

$$
\\begin{align}
\\frac{\\mathrm{d}\\hat{u}}{\\mathrm{d}t} = -\\alpha k^2 \\hat{u}
\\end{align}
$$

这是一阶常微分方程，其解为 $\\hat{u}(k,t) = \\hat{\\phi}(k) e^{-\\alpha k^2 t}$。作逆变换得

$$
\\begin{align}
u(x,t) = \\frac{1}{\\sqrt{4\\pi\\alpha t}} \\int_{-\\infty}^\\infty \\phi(\\xi) \\exp\\left[ -\\frac{(x-\\xi)^2}{4\\alpha t} \\right] \\mathrm{d}\\xi
\\end{align}
$$

### 适用场景

- 空间区域为全直线或半直线（可通过奇延拓/偶延拓处理齐次边界条件）。
- 方程系数为常数。
- 边界条件较简单（如无穷远处衰减）。

## 拉普拉斯变换法

### 基本步骤

1. 对方程中的时间变量 $t$ 进行拉普拉斯变换。
2. 将原方程转化为关于空间变量的常微分方程（像空间中的方程）。
3. 求解该常微分方程，并利用边界条件确定像函数中的待定系数。
4. 通过拉普拉斯逆变换求得原函数。常用留数定理或查表。

关键公式：

- 正变换：$\\displaystyle F(s) = \\int_0^\\infty f(t) e^{-st} \\,\\mathrm{d}t$
- 导数性质：$\\mathcal{L}\\{ f'(t) \\} = sF(s) - f(0)$，$\\mathcal{L}\\{ f''(t) \\} = s^2 F(s) - s f(0) - f'(0)$

### 典型例题：一维波动方程的初值问题

考虑半无限长弦的受迫振动：

$$
\\begin{align}
u_{tt} = c^2 u_{xx}, \\quad x > 0,\\ t > 0
\\end{align}
$$

初始条件：$u(x,0) = 0$，$u_t(x,0) = 0$；边界条件：$u(0,t) = g(t)$，且 $x \\to \\infty$ 时 $u$ 有界。

**解**：对 $t$ 取拉普拉斯变换，记 $U(x,s) = \\mathcal{L}\\{ u(x,t) \\}$。利用初始条件得

$$
\\begin{align}
s^2 U - s u(x,0) - u_t(x,0) = c^2 U_{xx} \\quad \\Rightarrow \\quad U_{xx} - \\frac{s^2}{c^2} U = 0
\\end{align}
$$

通解为 $U(x,s) = A(s) e^{-(s/c)x} + B(s) e^{(s/c)x}$。由有界性要求 $B(s)=0$。再由边界条件 $U(0,s) = G(s)$ 得 $A(s)=G(s)$。于是

$$
\\begin{align}
U(x,s) = G(s) e^{-(s/c)x}
\\end{align}
$$

由延迟定理 $\\mathcal{L}^{-1}\\{ e^{-as} F(s) \\} = f(t-a) H(t-a)$，得

$$
\\begin{align}
u(x,t) = g(t - x/c) H(t - x/c)
\\end{align}
$$

其中 $H$ 为单位阶跃函数。该解表示信号以速度 $c$ 向右传播。

### 适用场景

- 初值问题，尤其是 $t \\ge 0$ 的半无限时间域。
- 方程系数为常数或仅依赖于空间变量。
- 边界条件在 $x=0$ 等端点给出。

## 两种变换的比较

|              | 傅里叶变换                     | 拉普拉斯变换                   |
| :----------: | :----------------------------- | :----------------------------- |
|  基本积分域  | 全实轴 $(-\\infty,\\infty)$      | 半实轴 $[0,\\infty)$            |
|   擅长处理   | 空间变量的无界问题             | 时间变量的初值问题             |
| 初始条件处理 | 手动代入，化为像函数的初始条件 | 直接通过导数性质融入像方程     |
|  常见逆变换  | 积分法、留数法                 | 留数定理、查表                 |
|   典型方程   | 全直线上的热传导、波动方程     | 半无限弦、半无限杆的扩散与振动 |

## 总结

- 积分变换的核心思想：微分化→代数乘，偏微分方程→常微分方程。
- 傅里叶变换法可直接处理无界空间问题，边界条件由函数在无穷远的行为隐含确定。
- 拉普拉斯变换法自动吸收初始条件，非常适合求解含时间初值的演化问题。
- 在实际应用中，选择变换取决于问题的定义域和边界/初始条件类型。
`,i={title:"积分变换求解微分方程",author:"NeoWangKing",date:new Date(177796308e4),lastMod:new Date(177796308e4),tags:["数学","数学物理方法","积分变换","傅里叶变换","拉普拉斯变换","偏微分方程"],category:["数学","数学物理方法"],summary:"本文介绍利用傅里叶变换和拉普拉斯变换求解常微分方程与偏微分方程的系统方法，包括基本步骤、重要性质、典型例题，以及两种变换的适用场景对比。",comments:!0,draft:!1,sticky:0},e={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/mathematics/MMiP/7-Integral-Transform-Method.md",rawData:void 0};export{e as _internal,$ as body,t as collection,i as data,n as id,a as slug};
