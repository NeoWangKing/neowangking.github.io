const n="physics/TheoreticalMechanics/05-Non-Inertial-Reference-Frames.md",o="posts",l="physics/theoreticalmechanics/05-non-inertial-reference-frames",b=`
## 非惯性系的引入

牛顿第二定律 $\\boldsymbol{F} = m\\boldsymbol{a}$ 仅适用于惯性参考系。在非惯性系中，需要引入**惯性力**（虚拟力）来保持牛顿第二定律的形式。

## 平动加速参考系

设 $S$ 为惯性系，$S'$ 相对 $S$ 以加速度 $\\boldsymbol{a}_0$ 平动。质点 $m$ 在 $S'$ 系中的加速度为 $\\boldsymbol{a}'$，在 $S$ 系中为 $\\boldsymbol{a} = \\boldsymbol{a}' + \\boldsymbol{a}_0$。

牛顿第二定律在 $S$ 系中：$m(\\boldsymbol{a}' + \\boldsymbol{a}_0) = \\boldsymbol{F}$。

在 $S'$ 系中写为

$$
\\begin{align}
m\\boldsymbol{a}' = \\boldsymbol{F} - m\\boldsymbol{a}_0
\\end{align}
$$

因此，在平动加速参考系中，除真实力 $\\boldsymbol{F}$ 外，还需引入**平移惯性力**

$$
\\begin{align}
\\boldsymbol{F}_{\\text{惯}} = -m\\boldsymbol{a}_0
\\end{align}
$$

## 转动参考系

### 矢量导数的基本公式

设 $S$ 为惯性系，$S'$ 以角速度 $\\boldsymbol{\\omega}$ 相对 $S$ 转动。任意矢量 $\\boldsymbol{A}$ 在 $S$ 系中的时间导数与在 $S'$ 系中的时间导数关系为

$$
\\begin{align}
\\left( \\frac{\\mathrm{d}\\boldsymbol{A}}{\\mathrm{d}t} \\right)_S = \\left( \\frac{\\mathrm{d}\\boldsymbol{A}}{\\mathrm{d}t} \\right)_{S'} + \\boldsymbol{\\omega} \\times \\boldsymbol{A}
\\end{align}
$$

### 加速度合成

质点在 $S'$ 系中的位置矢量为 $\\boldsymbol{r}$，速度在 $S$ 系中为

$$
\\begin{align}
\\boldsymbol{v}_S = \\boldsymbol{v}_{S'} + \\boldsymbol{\\omega} \\times \\boldsymbol{r}
\\end{align}
$$

加速度在 $S$ 系中为

$$
\\begin{align}
\\boldsymbol{a}_S = \\boldsymbol{a}_{S'} + 2\\boldsymbol{\\omega} \\times \\boldsymbol{v}_{S'} + \\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\boldsymbol{r}) + \\dot{\\boldsymbol{\\omega}} \\times \\boldsymbol{r}
\\end{align}
$$

### 转动参考系中的惯性力

在转动参考系 $S'$ 中，牛顿第二定律写为

$$
\\begin{align}
m\\boldsymbol{a}_{S'} = \\boldsymbol{F} - 2m\\boldsymbol{\\omega} \\times \\boldsymbol{v}_{S'} - m\\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\boldsymbol{r}) - m\\dot{\\boldsymbol{\\omega}} \\times \\boldsymbol{r}
\\end{align}
$$

各项惯性力为：

1. **科里奥利力**：$\\boldsymbol{F}_{\\text{科}} = -2m\\boldsymbol{\\omega} \\times \\boldsymbol{v}_{S'}$

   - 与相对速度垂直，不改变速率，只改变方向
   - 在北半球使运动物体向右偏转

2. **离心力**：$\\boldsymbol{F}_{\\text{离}} = -m\\boldsymbol{\\omega} \\times (\\boldsymbol{\\omega} \\times \\boldsymbol{r})$

   - 方向垂直于转轴向外，大小 $m\\omega^2 \\rho$（$\\rho$ 为到转轴的垂直距离）

3. **欧拉力**（切向惯性力）：$\\boldsymbol{F}_{\\text{欧}} = -m\\dot{\\boldsymbol{\\omega}} \\times \\boldsymbol{r}$
   - 当角速度变化时出现

## 经典应用

### 傅科摆

傅科摆是证明地球自转的实验装置。在北半球，科里奥利力使摆的振动平面缓慢旋转，旋转角速度为

$$
\\begin{align}
\\Omega = \\omega_{\\text{earth}} \\sin \\lambda
\\end{align}
$$

其中 $\\lambda$ 是当地纬度。在北极，$\\Omega = \\omega_{\\text{earth}}$，摆平面每天旋转一圈。

### 落体偏东

在北半球，自由下落的物体会向东偏转。偏转量约为

$$
\\begin{align}
\\Delta x \\approx \\frac{1}{3} \\omega_{\\text{earth}} \\cos\\lambda \\sqrt{\\frac{8h^3}{g}}
\\end{align}
$$

其中 $h$ 是下落高度。

### 地转风

在大气运动中，气压梯度力与科里奥利力平衡时形成地转风：

$$
\\begin{align}
\\boldsymbol{v}_g = -\\frac{1}{2\\rho \\omega \\sin\\lambda} \\hat{\\boldsymbol{z}} \\times \\nabla p
\\end{align}
$$

## 小结

- 平动加速参考系：引入平移惯性力 $\\boldsymbol{F}_{\\text{惯}} = -m\\boldsymbol{a}_0$
- 转动参考系：引入离心力、科里奥利力、欧拉力
- 科里奥利力 $\\boldsymbol{F}_{\\text{科}} = -2m\\boldsymbol{\\omega} \\times \\boldsymbol{v}_{S'}$，是转动参考系中最具特征性的惯性力
- 傅科摆、落体偏东等现象是科里奥利力的可观测效应
`,m={title:"非惯性参考系",author:"NeoWangKing",date:new Date(17760384e5),lastMod:new Date(1782646523e3),tags:["物理","理论力学","非惯性系","惯性力","科里奥利力","离心力"],category:["物理","理论力学"],summary:"本文讨论非惯性参考系中的动力学，包括平动加速参考系和转动参考系中的惯性力（平移惯性力、离心力、科里奥利力、欧拉力），并通过傅科摆等经典应用展示科里奥利力的可观测效应。",comments:!0,draft:!1,sticky:0,chapter:5},e={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/physics/TheoreticalMechanics/05-Non-Inertial-Reference-Frames.md",rawData:void 0};export{e as _internal,b as body,o as collection,m as data,n as id,l as slug};
