const n="front-end/CSS/CSS-Selectors-Advanced.md",e="posts",t="front-end/css/css-selectors-advanced",s=`
## 概述

CSS 选择器用于定位 HTML 元素，为其应用样式。基础选择器（元素、类、ID）简单直接，但面对复杂结构时，高级选择器能极大提升效率和可维护性。本文涵盖 CSS 中常用且强大的高级选择器，适用于现代浏览器。

## 属性选择器

属性选择器根据元素的属性及其值选择元素，提供灵活的匹配方式。

### 基础属性选择器

|       语法       |                说明                 |        示例         |
| :--------------: | :---------------------------------: | :-----------------: |
|     \`[attr]\`     |       存在属性 \`attr\` 的元素        |    \`[disabled]\`     |
|  \`[attr=value]\`  |       属性值完全等于 \`value\`        |   \`[type="text"]\`   |
| \`[attr^=value]\`  |        属性值以 \`value\` 开头        |  \`[href^="https"]\`  |
| \`[attr$=value]\`  |        属性值以 \`value\` 结尾        |   \`[src$=".jpg"]\`   |
| \`[attr*=value]\`  |         属性值包含 \`value\`          |  \`[class*="btn"]\`   |
| \`[attr~=value]\`  | 属性值包含单词 \`value\`（空格分隔）  | \`[class~="active"]\` |
| \`[attr\\|=value]\` | 属性值等于 \`value\` 或 \`value-\` 开头 |   \`[lang\\|="en"]\`   |

### 示例

\`\`\`css
/* 选中所有带有 data-type 属性的元素 */
[data-type] {
  border: 1px solid gray;
}

/* 所有以 "https" 开头的链接 */
a[href^='https'] {
  color: green;
}

/* 所有 .jpg 或 .png 图片 */

img[src$='.jpg'],
img[src$='.png'] {
  border-radius: 4px;
}

/* class 包含 "warning" 单词的元素 */
[class~='warning'] {
  background-color: #ffcccc;
}
\`\`\`

## 组合选择器

组合选择器用于表达元素之间的结构关系

|     组合器     |  语法   |            说明             |    示例    |
| :------------: | :-----: | :-------------------------: | :--------: |
|   后代选择器   |  \`A B\`  | A 的后代 B （匹配所有层级） |  \`ul li\`   |
|   子代选择器   | \`A > B\` |      A 的直接子元素 B       | \`nav > ul\` |
| 相邻兄弟选择器 | \`A + B\` |  紧接在 A 后面的兄弟元素 B  |  \`h2 + p\`  |
| 通用兄弟选择器 | \`A ~ B\` |   A 之后的所有兄弟元素 B    |  \`h2 ~ p\`  |

### 示例

\`\`\`css title="css"
/* 所有直接子列表项 */
.menu > li {
  display: inline-block;
}

/* 紧跟在标题后的第一个段落 */
h2 + p {
  font-size: 1.2em;
  font-weight: bold;
}

/* 所有在警告信息之后的同级信息框 */
.alert ~ .info {
  margin-top: 1rem;
}
\`\`\`

## 伪类选择器

伪类选择器基于元素的状态或位置进行选择。

### 动态伪类

| 伪类             | 说明                               |
| :--------------- | :--------------------------------- |
| \`:link\`          | 未访问的链接                       |
| \`:visited\`       | 已访问的链接                       |
| \`:hover\`         | 鼠标悬停的元素                     |
| \`:active\`        | 激活（按下）状态                   |
| \`:focus\`         | 获得焦点                           |
| \`:focus-visible\` | 通过键盘等可见方式获得焦点（现代） |
| \`:focus-within\`  | 元素自身或其内部元素获得焦点       |

### 结构伪类

| 伪类                 | 说明                       |
| :------------------- | :------------------------- |
| \`:root\`              | 根元素（\`<html>\`）         |
| \`:empty\`             | 没有子元素（包括文本节点） |
| \`:first-child\`       | 父元素的第一个子元素       |
| \`:last-child\`        | 父元素的最后一个子元素     |
| \`:nth-child(n)\`      | 父元素的第 n 个子元素      |
| \`:nth-last-child(n)\` | 从末尾数第 n 个子元素      |
| \`:first-of-type\`     | 同类型元素中的第一个       |
| \`:last-of-type\`      | 同类型元素中的最后一个     |
| \`:nth-of-type(n)\`    | 同类型元素中的第 n 个      |
| \`:only-child\`        | 父元素唯一的子元素         |
| \`:only-of-type\`      | 父元素中唯一该类型的子元素 |

### 其他常用伪类

| 伪类                     | 说明                                   |
| :----------------------- | :------------------------------------- |
| \`:not(selector)\`         | 不匹配指定选择器的元素                 |
| \`:is(selector-list)\`     | 匹配列表中的任意选择器（优先级取最高） |
| \`:where(selector-list)\`  | 同 \`:is\`，但优先级始终为 0             |
| \`:has(selector)\`         | 包含满足选择器的后代元素（关系伪类）   |
| \`:target\`                | 当前锚点目标元素                       |
| \`:enabled\` / \`:disabled\` | 表单元素的启用 / 禁用状态              |
| \`:checked\`               | 选中状态的单选框 / 复选框              |
| \`:indeterminate\`         | 不确定状态（如半选复选框）             |
| \`:valid\` / \`:invalid\`    | 表单输入验证状态                       |

### 示例

\`\`\`css title="css"
/* 悬停时的按钮 */
button:hover {
  background-color: #0056b3;
}

/* 列表中的第 3 项 */
li:nth-child(3) {
  font-weight: bold;
}

/* 每隔一行改变背景 */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* 所有不是第一个子元素的段落 */
p:not(:first-child) {
  margin-top: 0;
}

/* 父元素内含有图片的 div */
div:has(img) {
  border: 2px solid #ccc;
}
\`\`\`

## 伪元素选择器

伪元素用于选择元素的特定部分，通常以双冒号 \`::\` 表示（CSS3规范），单冒号也能兼容，但推荐双冒号。

| 伪元素           | 说明                         |
| :--------------- | :--------------------------- |
| \`::before\`       | 在元素的内容之前插入生成内容 |
| \`::after\`        | 在元素的内容之后插入生成内容 |
| \`::first-line\`   | 块级元素的第一行             |
| \`::first-letter\` | 块级元素的第一个字母         |
| \`::selection\`    | 用户选中的文本部分           |
| \`::placeholder\`  | 输入框的占位文本             |
| \`::marker\`       | 列表项的标志（如圆点、数字） |

### 示例

\`\`\`css title="css"
/* 添加前缀 */
.link::before {
  content: '🔗 ';
}

/* 首行样式 */
article p::first-line {
  font-variant: small-caps;
  font-weight: bold;
}

/* 首字母下沉 */
p::first-letter {
  font-size: 2em;
  float: left;
  margin-right: 0.2em;
}
\`\`\`

## 逻辑组合选择器

现代的 CSS 提供了几个强大的组合选择器用以简化复杂选择器列表的书写。

### \`:is()\`

\`:is()\` 接受一个选择器列表，匹配其中任意一个。之前使用 \`:matches()\`，现在统一为 \`:is()\` 。它简化了冗长的选择器列表，并且优先级取其内部选择器中的最高优先级。

\`\`\`css title="css"
/* 旧写法 */
header nav ul li,
footer nav ul li,
aside ul li {
  margin: 0;
}

/* 使用 :is() */
:is(header, footer, aside) nav ul li {
  margin: 0;
}
\`\`\`

### \`:where()\`

\`:where()\` 语法与 \`:is()\` 完全相同，区别在于其优先级始终为 0（即不影响权重），非常适合用于重置样式或低优先级的通用样式。

\`\`\`css title="css"
/* 低优先级，方便后续覆盖 */
:where(header, footer, aside) nav ul li {
  margin: 0;
}
\`\`\`

### \`:has()\`

\`:has()\` 是关系伪类，表示包含某个元素的元素。它被称为“父级选择器”，实际上可以向上、向下、兄弟关系查询。

\`\`\`css title="css"
/* 包含图片的 figure 元素 */
figure:has(img) {
  background: #f9f9f9;
}

/* 包含 .error 输入的 form 表单 */
form:has(input.error) {
  border: 1px solid red;
}

/* 后面跟着兄弟警告框的 label */
label:has(+ .warning) {
  color: orange;
}
\`\`\`

### \`:not()\`

\`:not()\` 用于排除满足指定选择器的元素。可以接受逗号分隔列表。

\`\`\`css title="css"
/* 不是 .special 类的所有按钮 */
button:not(.special) {
  background: gray;
}

/* 不是第一项也不是最后一项的列表项 */
li:not(:first-child, :last-child) {
  border-bottom: 1px solid #ccc;
}
\`\`\`

### 焦点相关伪类

| 伪类             | 说明                                                       |
| :--------------- | :--------------------------------------------------------- |
| \`:focus\`         | 元素获得焦点时（通常伴随轮廓）                             |
| \`:focus-visible\` | 元素通过键盘导航等方式获得焦点时（浏览器决定是否显示轮廓） |
| \`:focus-within\`  | 元素自身或其内部元素获得焦点时                             |

### 示例

\`\`\`css title="css"
/* 键盘焦点样式（不干扰鼠标点击） */
button:focus-visible {
  outline: 2px solid blue;
}

/* 当表单内有焦点时，高亮整个表单 */
form:focus-within {
  background: #ffffe0;
}
\`\`\`

### 选择器的优先级与性能

- 优先级：内联样式 > ID > 类/伪类/属性 > 元素/伪元素。

  \`:is()\` 取最高优先级，\`:where()\` 优先级为 0 。

- 性能：过于复杂的选择器（如多层嵌套、通用组合器）会增加匹配成本，但在现代浏览器中影响很小。

  建议保持选择器的简洁，避免使用 \`*\`。

## 总结

| 类别       | 核心选择器                       | 应用场景                             |
| :--------- | :------------------------------- | :----------------------------------- |
| 属性选择器 | \`[attr^=value]\`等                | 根据属性值灵活匹配，如链接、表单元素 |
| 组合器     | \`>\` \`+\` \`~\`                      | 表达层级与兄弟关系                   |
| 伪类       | \`:nth-child()\` \`:not()\` \`:has()\` | 基于状态、位置、关系的复杂匹配       |
| 伪元素     | \`::before\` \`::first-line\`        | 插入内容、装饰特定文本               |
| 逻辑组合   | \`:is()\` \`:where()\`               | 简化选择器列表，控制优先级           |
| 焦点类     | \`:focus-visible\` \`:focus-within\` | 提升可访问性，实现更好的交互反馈     |
`,i={title:"CSS 选择器高级用法",author:"NeoWangKing",date:new Date(1774703008e3),lastMod:new Date(1774703008e3),tags:["CSS","前端","选择器","样式"],category:["前端开发","CSS"],summary:"本文系统介绍 CSS 选择器的高级用法，包括属性选择器、组合器、伪类选择器、伪元素选择器，以及现代 CSS 提供的逻辑组合选择器（:is, :where, :has, :not）和焦点相关伪类，帮助你更精准、更高效地控制页面样式。",comments:!0,draft:!1,sticky:0},l={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/front-end/CSS/CSS-Selectors-Advanced.md",rawData:void 0};export{l as _internal,s as body,e as collection,i as data,n as id,t as slug};
