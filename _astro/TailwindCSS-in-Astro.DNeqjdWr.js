const n="front-end/astro/TailwindCSS-in-Astro.md",t="posts",i="front-end/astro/tailwindcss-in-astro",a=`
## Tailwind CSS 简介

Tailwind CSS 是一个实用优先的 CSS 框架，它提供大量原子类（如 \`p-4\`、\`text-center\`、\`bg-blue-500\`），让你无需离开 HTML 即可快速构建自定义设计。在 Astro 中使用 Tailwind 可以大幅提升开发效率，并保证最终样式文件的最小体积（通过 PurgeCSS 自动移除未使用的类）。

### Tailwind CSS 的优势

在不支持 Tailwind CSS 的传统项目上为网页设计样式时，需要单独编写 CSS 样式。例如：

<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="https://q1.qlogo.cn/g?b=qq&nk=3245938285&s=640" alt="ChitChat Logo">
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification {
    display: flex;
    align-items: center;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-logo-wrapper {
    flex-shrink: 0;
  }
  .chat-notification-logo {
    height: 3rem;
    width: 3rem;
  }
  .chat-notification-content {
    margin-left: 1.5rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>

\`\`\`html title="html"
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo" />
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>

<style>
  .chat-notification {
    display: flex;
    align-items: center;
    max-width: 24rem;
    margin: 0 auto;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow:
      0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .chat-notification-logo-wrapper {
    flex-shrink: 0;
  }
  .chat-notification-logo {
    height: 3rem;
    width: 3rem;
  }
  .chat-notification-content {
    margin-left: 1.5rem;
  }
  .chat-notification-title {
    color: #1a202c;
    font-size: 1.25rem;
    line-height: 1.25;
  }
  .chat-notification-message {
    color: #718096;
    font-size: 1rem;
    line-height: 1.5;
  }
</style>
\`\`\`

而使用 Tailwind ，就可以直接在 HTML 中应用已有的类来样式化元素。

<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4">
  <div class="shrink-0">
    <img class="size-12" src="https://q1.qlogo.cn/g?b=qq&nk=3245938285&s=640" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>

\`\`\`html title="html"
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4">
  <div class="shrink-0">
    <img class="size-12" src="/img/logo.svg" alt="ChitChat Logo" />
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
\`\`\`

效果与前面一致。

显然，使用 Tailwind 对前端的开发者更加的友好，它主要有以下好处：

- **不用费心去设计元素的类名或者 ID**：在传统的流程中，每添加一个组件都需要费心为它分配一个“完美的”名称，而使用 Tailwind 就只需要把精力放在样式的设计上；
- **避免了 CSS 文件的不停膨胀**：在传统的流程中，每次添加新的类别或者组件，都要更新 CSS 文件，导致 CSS 文件的大小不断膨胀；
- **更加安全的调整样式**：用传统方法，CSS 的样式是全局的，做出更改时永远不知道会有什么隐性的破坏，使用 Tailwind 就很好的避免了这点。

## 安装与配置

### 安装 Tailwind CSS

在 Astro 项目的根目录下运行以下命令来安装 Tailwind CSS 及其依赖：

\`\`\`bash "tailwindcss" "@astrojs/tailwind"
npm install -D tailwindcss @astrojs/tailwind
# 或
yarn add -D tailwindcss @astrojs/tailwind
# 或
pnpm add -D tailwindcss @astrojs/tailwind
\`\`\`

这串命令安装了两个部分

- \`tailwindcss\` ：Tailwind CSS 的核心库
- \`@astrojs/tailwind\` ：Astro 官方的 Tailwind 集成包

### 配置 Astro 和 Tailwind

在 \`astro.config.mjs/astro.config.js\` 中添加 Tailwind 集成：

\`\`\`js {7}
//astro.config.mjs
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  integrations: [tailwind()],
})
\`\`\`

### 生成 Tailwind 配置文件

执行以下命令自动生成 \`tailwind.config.js\` ：

\`\`\`bash
npx tailwindcss init
\`\`\`

在生成的配置文件 \`tailwind.config.js\` 中添加所有模板文件的路径：

\`\`\`js {4}
//tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

## Tailwind 的基本使用

### 在 Astro 组件中使用

在 \`.astro\` 组件的模板部分直接使用 Tailwind 类名：

\`\`\`astro title="astro" '"p-4 bg-blue-500 text-white rounded-lg"' '"text-2xl font-bold"' '"mt-2"'
---
// 无需额外代码
---

<div class="p-4 bg-blue-500 text-white rounded-lg">
  <h1 class="text-2xl font-bold">Hello, Tailwind!</h1>
  <p class="mt-2">这是一个使用 Tailwind CSS 的 Astro 组件。</p>
</div>
\`\`\`

### 在 Markdown/MDX 中使用

在 \`.md\` 或 \`.mdx\` 文件中，同样可以直接使用 Tailwind 类，但有个前置条件

1. 你可以选择在 Markdown 文件的头部中声明布局组件并且在布局组件中链接到 \`global.css\`：

   \`\`\`md title="md" '"text-blue-500"' {2}
   ---
   layout: ../layouts/Layout.astro //其中链接了 global.css
   ---

   <span class="text-blue-500">蓝色文字</span>
   \`\`\`

2. 或者你也可以在 \`tailwind.config.js\` 中直接支持 \`.md\` 文件：

   \`\`\`js "md"
   //tailwind.config.js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: ['./src/**/*.{html,js,md}'],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   \`\`\`

### 响应式设计

Tailwind 提供了响应式的前缀，如：\`sm:\`、\`md:\`、\`lg:\`、\`xl:\`、\`hover:\`等：

\`\`\`html title="html"
<div class="text-center sm:text-left md:text-right lg:text-center">响应式文本对齐</div>
\`\`\`

### 暗色模式

在 \`tailwind.config.js\` 中开启暗色模式策略（推荐使用 \`class\` 策略，以便手动调整）：

\`\`\`js title="js" {2}
export default {
  darkMode: 'class',
  // ...
}
\`\`\`

然后就可以在 HTML 的根元素上添加 \`dark\` 类以触发暗色模式。当然在 Astro 中也可以使用逻辑判断等方式来自动切换暗色模式：

\`\`\`astro title="astro" "{isDark ? 'dark' : ''}"
---
const isDark = false // 根据实际情况设置
---

<html class={isDark ? 'dark' : ''}>
  <body>
    <slot />
  </body>
</html>
\`\`\`

然后在使用的时候就可以直接：

\`\`\`html title="html" "dark:"
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">主题自适应</div>
\`\`\`
`,s={title:"Astro 框架中配置与使用 Tailwind CSS",author:"NeoWangKing",date:new Date(1774610089e3),lastMod:new Date(1774610089e3),tags:["Astro","Tailwind CSS","前端","样式"],category:["前端开发","Astro"],summary:"本文介绍在 Astro 框架中配置和使用 Tailwind CSS 的方法，包括安装步骤、基础用法、自定义主题、响应式设计以及与 Astro 组件的集成技巧。",comments:!0,draft:!1,sticky:0},o={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/front-end/astro/TailwindCSS-in-Astro.md",rawData:void 0};export{o as _internal,a as body,t as collection,s as data,n as id,i as slug};
