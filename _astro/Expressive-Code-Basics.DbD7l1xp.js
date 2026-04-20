const n="front-end/astro/Expressive-Code-Basics.md",e="posts",o="front-end/astro/expressive-code-basics",r=`
## Expressive Code 简介

[Expressive Code](https://expressive-code.com/) 是一个用于在网页上展示源代码的引擎，它基于 VS Code 同款的 Shiki 语法高亮引擎，提供精确的语法高亮，同时支持代码注释、差异高亮、编辑器/终端窗口框架等丰富功能。

在 Astro 框架中，Expressive Code 通过 \`astro-expressive-code\` 集成包提供支持，可以自动渲染 Markdown/MDX 文件中的代码块，并提供 \`<Code>\` 组件用于动态渲染代码。

本文只涉及一些常见的配置方法和用法，更加详细的使用说明，请查阅[官方文档](https://expressive-code.com/installation/)

## 安装与配置

### 安装依赖

在 Astro 项目中安装 Expressive Code 集成：

\`\`\`bash
npm install astro-expressive-code
# 或
yarn add astro-expressive-code
# 或
pnpm add astro-expressive-code
\`\`\`

### 配置 astro

#### 直接集成

在 \`astro.config.mathrmjs\` 中添加 Expressive Code 集成：

\`\`\`js {8-12}
//astro.config.mjs
import { defineConfig } from 'astro/config'
import expressiveCode from 'astro-expressive-code'

export default defineConfig({
  integrations: [
    expressiveCode({
      // 配置选项
      themes: ['github-dark', 'github-light'],
      styleOverrides: {
        borderRadius: '0.5rem',
      },
    }),
  ],
})
\`\`\`

#### 使用配置文件

在项目根目录下创建 \`ec.config.mjs\` 文件单独存放配置信息：

\`\`\`js {5-9}
// ec.config.mjs
import { defineEcConfig } from 'astro-expressive-code'

export default defineEcConfig({
  // 配置选项
  themes: ['github-dark', 'github-light'],
  styleOverrides: {
    borderRadius: '0.5rem',
  },
})
\`\`\`

> 两种方法的配置语法几乎一致，接下来我们默认按照使用配置文件的方式来举例

## 基础的代码块用法

### Markdown 代码块用法

在 \`Markdown/MDX\` 文件中，使用标准的代码块语法即可自动获得语法高亮：

\`\`\`\`markdown title="Markdown/MDX"
\`\`\`javascript
function hello(name) {
  console.log(\`Hello, \${name}!\`)
}
\`\`\`
\`\`\`\`

渲染效果如下：

\`\`\`javascript title="javascript"
function hello(name) {
  console.log(\`Hello, \${name}!\`)
}
\`\`\`

### 指定语言的语法高亮

Expressive Code 支持超过 100 种编程语言，只需在开头的代码围栏后添加语言标识：

\`\`\`\`markdown title="markdown"
\`\`\`python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
\`\`\`
\`\`\`\`

渲染效果如下：

\`\`\`python title="python"
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
\`\`\`

> Expressive Code 使用 Shiki 作为语法高亮的解释器，可以访问 Shiki 的[官方文档](https://shiki.style/guide/)查看其默认[支持的所有内置语言](https://shiki.style/languages)

### 代码块标题

使用 \`title\` 属性为代码块添加标题：

\`\`\`\`markdown title="markdown"
\`\`\`js title="hello.js"
console.log('Hello, World!')
\`\`\`
\`\`\`\`

渲染效果如下：

\`\`\`js title="hello.js"
console.log('Hello, World!')
\`\`\`

而不添加标题属性的渲染效果如下：

\`\`\`js
console.log('Hello, World!')
\`\`\`

> 在 Markdown 语法中，有时会通过在第一行添加注释的方式来确定标题
>
> \`\`\`\`markdown title="markdown" {2}
> \`\`\`js
> //hello.js
> console.log('Hello, World!')
> \`\`\`
> \`\`\`\`
>
> 渲染效果如下：
>
> \`\`\`js
> //hello.js
> console.log('Hello, World!')
> \`\`\`

### 使用 \`<Code>\` 组件

在 \`.astro\` 或 \`.mdx\` 文件中，可以导入并使用 \`<Code>\` 组件来渲染代码块：

在 \`.astro\` 文件中：

\`\`\`astro title="astro" {4-6} {9}
---
import { Code } from 'astro-expressive-code'

const codeString = \`function add(a, b) {
  return a + b;
}\`
---

<Code code={codeString} lang="javascript" />
\`\`\`

在 \`.mdx\` 文件中：

\`\`\`mdx title="mdx" {3}
import { Code } from 'astro-expressive-code'

<Code code="console.log('Hello!');" lang="javascript" />
\`\`\`

### 从文件导入代码

除此之外，代码块的内容还可以直接链接到外部文件，即使用 Vite 的 \`?raw\` 后缀将代码文件作为字符串导入：

\`\`\`astro title="astro" {3}
---
import { Code } from 'astro-expressive-code'
import exampleCode from './examples/example.js?raw'
---

<Code code={exampleCode} lang="javascript" title="example.js" />
\`\`\`

\`<Code>\` 组件支持传入以下常用的属性：

|  属性   |                 类型                 |             说明             |
| :-----: | :----------------------------------: | :--------------------------: |
| \`code\`  |               \`string\`               |    代码内容 **（必填）**     |
| \`lang\`  |               \`string\`               | 编程语言标识（用于语法高亮） |
| \`title\` |               \`string\`               |          代码块标题          |
| \`frame\` | \`'auto'\\|'code'\\|'terminal'\\|'none'\` |           框架类型           |
| \`wrap\`  |              \`boolean\`               |       是否启用自动换行       |
| \`mark\`  |         \`MarkerDefinition[]\`         |           普通标记           |
|  \`ins\`  |         \`MarkerDefinition[]\`         |       插入标记（绿色）       |
|  \`del\`  |         \`MarkerDefinition[]\`         |       删除标记（红色）       |

### 文本与行标记

Expressive Code 支持在代码块中标记特定的行或文本片段。

#### 整行标记

在代码块元信息中用 \`{ }\` 指定行号来进行标记：

\`\`\`\`markdown title="markdown"
\`\`\`js {2, 4-6}
function processData(data) {
  if (!data) return null

  const result = data.map((item) => {
    return item.value * 2
  })

  return result
}
\`\`\`
\`\`\`\`

渲染效果如下：

\`\`\`js {2, 4-6}
function processData(data) {
  if (!data) return null

  const result = data.map((item) => {
    return item.value * 2
  })

  return result
}
\`\`\`

> 需要注意的是，如果代码块的标题是通过如前所述的第一行注释的方式来设置的，花括号里的行号需要 +1，例如：
>
> \`\`\`\`markdown title="markdown" {1}
> \`\`\`js {5-9}
> // ec.config.mjs
> import { defineEcConfig } from 'astro-expressive-code'
>
> export default defineEcConfig({
>   // 配置选项
>   themes: ['github-dark', 'github-light'],
>   styleOverrides: {
>     borderRadius: '0.5rem',
>   },
> })
> \`\`\`
> \`\`\`\`
>
> 其渲染效果如下：
>
> \`\`\`js {5-9}
> // ec.config.mjs
> import { defineEcConfig } from 'astro-expressive-code'
>
> export default defineEcConfig({
>   // 配置选项
>   themes: ['github-dark', 'github-light'],
>   styleOverrides: {
>     borderRadius: '0.5rem',
>   },
> })
> \`\`\`

##### 标记类型

整行的标记还有两种衍生类型： \`ins={ }\` （插入 insert）、 \`del={ }\` （删除 delete），例如：

\`\`\`\`markdown title="markdown" {1}
\`\`\`js ins={2} del={4-5}
function processData(data) {
  if (!data) return []

  const result = data.map((item) => {
    return item.value
  })

  return result
}
\`\`\`
\`\`\`\`

\`\`\`js ins={2} del={4-5}
function processData(data) {
  if (!data) return []

  const result = data.map((item) => {
    return item.value
  })

  return result
}
\`\`\`

##### 添加标签

此外，还可以为标记的行添加标签：

\`\`\`\`markdown title="markdown" {1}
\`\`\`js ins={"新增":2} mark={"关键":4-6}
function processData(data) {
  if (!data) return null

  const result = data.map((item) => {
    return item.value * 2
  })

  return result
}
\`\`\`
\`\`\`\`

\`\`\`js ins={"新增":2} mark={"关键":4-6}
function processData(data) {
  if (!data) return null

  const result = data.map((item) => {
    return item.value * 2
  })

  return result
}
\`\`\`

##### Diff 语法

可以使用 \`diff\` 语言快速的创建插入和删除标记：

\`\`\`\`markdown title="markdown" {3-4}
\`\`\`diff
function processData(data) {
-  if (!data) return null;
+  if (!data) return [];

  const result = data.map(item => {
    return item.value * 2;
  });

  return result;
}
\`\`\`
\`\`\`\`

\`\`\`diff
function processData(data) {
-  if (!data) return null;
+  if (!data) return [];

  const result = data.map(item => {
    return item.value * 2;
  });

  return result;
}
\`\`\`

#### 行内文本标记

可以使用**字符串**或者**正则表达式**来标记行内的特定文本：

\`\`\`\`markdown title="markdown" '"return"' "/data/"
\`\`\`js "return" /data/
function processData(data) {
  if (!data) return null
  return data
}
\`\`\`
\`\`\`\`

\`\`\`js "return" /data/
function processData(data) {
  if (!data) return null
  return data
}
\`\`\`

### 代码框架的插件

Expressive Code 内置了一些框架的插件，可以将代码块渲染成编辑器或者终端等风格。

#### 终端风格

使用 \`frame="terminal"\` 可以获得终端窗口的风格：

\`\`\`\`markdown title="markdown" 'frame="terminal"'
\`\`\`bash frame="terminal" title="~"
npm install astro-expressive-code
\`\`\`
\`\`\`\`

\`\`\`bash frame="terminal" title="~"
npm install astro-expressive-code
\`\`\`

> 也可以直接通过声明语言为 \`bash\` 来调整成终端风格：
>
> \`\`\`\`markdown title="markdown" "bash"
> \`\`\`bash
> npm install astro-expressive-code
> \`\`\`
> \`\`\`\`
>
> \`\`\`bash
> npm install astro-expressive-code
> \`\`\`

#### 编辑器风格

默认风格是编辑器样式，也可以显式指定 \`frame="code"\`：

\`\`\`\`markdown title="markdown" 'frame="code"'
\`\`\`js frame="code" title="app.js"
import { Code } from 'astro-expressive-code'
\`\`\`
\`\`\`\`

\`\`\`js frame="code" title="app.js"
import { Code } from 'astro-expressive-code'
\`\`\`

#### 无框架风格

设置 \`frame="none"\` 可以移除框架，只显示代码：

\`\`\`\`markdown title="markdown" 'frame="none"'
\`\`\`js frame="none" title="js"
console.log('No frame')
\`\`\`
\`\`\`\`

\`\`\`js frame="none" title="js"
console.log('No frame')
\`\`\`

可见这种风格不会显示标题等内容，不过高亮和标记仍然会显示。

### 配置颜色主题

#### 配置内置主题

可以通过传递 \`theme\` 选项来配置内置的颜色主题：

\`\`\`js {3-4}
//ec.config.mjs
expressiveCode({
  themes: ['github-dark', 'github-light'],
  useDarkModeMediaQuery: true, // 自动响应系统主题，如要根据网页主题切换需要设为 false 并自行配置
})
\`\`\`

#### 自定义样式覆盖

可以使用 \`styleOverrides\` 来自定义代码块的外观：

\`\`\`js {3-10}
//ec.config.mjs
expressiveCode({
  styleOverrides: {
    borderRadius: '0.75rem',
    borderWidth: '1px',
    codeFontSize: '0.875rem',
    frames: {
      shadowColor: 'rgba(0, 0, 0, 0.1)',
    },
  },
})
\`\`\`

可以访问 Expressive Code 的[官方文档](https://expressive-code.com/installation/)查看[支持自定义的所有参数](https://expressive-code.com/key-features/frames/#available-plugin-options)

## 进阶使用以及常用插件

[更多的使用技巧以及插件](https://expressive-code.com/plugins/community-plugins/)可以访问 Expressive Code 的[官方文档](https://expressive-code.com/installation/)详细了解，这里只列举一些常用的插件以及技巧

### 行号插件

默认的代码块不显示行号，如果想加上的话，可以通过以下指令安装插件：

\`\`\`bash
npm i @expressive-code/plugin-line-numbers
# 或
pnpm add @expressive-code/plugin-line-numbers
# 或
yarn add @expressive-code/plugin-line-numbers
\`\`\`

然后向 \`ec.config.mjs\` 中导入并声明这个插件

\`\`\`js ins={3,6}
//ec.config.mjs
import { defineEcConfig } from 'astro-expressive-code'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

export default defineEcConfig({
  plugins: [pluginLineNumbers()],
})
\`\`\`

这样就可以通过参数 \`showLineNumbers: boolean\` （默认为 \`true\`）来开关显示行号了

\`\`\`\`markdown title="markdown" "showLineNumbers=false" "showLineNumbers"
\`\`\`js showLineNumbers
// This code block will show line numbers
console.log('Greetings from line 2!')
console.log('I am on line 3')
\`\`\`

\`\`\`js showLineNumbers=false
// Line numbers are disabled for this block
console.log('Hello?')
console.log('Sorry, do you know what line I am on?')
\`\`\`
\`\`\`\`

渲染效果分别如下

\`\`\`js showLineNumbers
// This code block will show line numbers
console.log('Greetings from line 2!')
console.log('I am on line 3')
\`\`\`

\`\`\`js showLineNumbers=false
// Line numbers are disabled for this block
console.log('Hello?')
console.log('Sorry, do you know what line I am on?')
\`\`\`

也可以使用 \`startLineNumber: numbers\` （默认为 \`1\` ）来调整行号起始的编号

\`\`\`\`markdown title="markdown" "showLineNumbers" "startLineNumber=5"
\`\`\`js showLineNumbers startLineNumber=5
console.log('Greetings from line 5!')
console.log('I am on line 6')
\`\`\`
\`\`\`\`

\`\`\`js showLineNumbers startLineNumber=5
console.log('Greetings from line 5!')
console.log('I am on line 6')
\`\`\`

当然，我们也可以向 \`ec.config.mjs\` 传递默认的参数来调控行号的显示：

\`\`\`js ins={7-16}
//ec.config.mjs
import { defineEcConfig } from 'astro-expressive-code'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

export default defineEcConfig({
  plugins: [pluginLineNumbers()],
  defaultProps: {
    // Disable line numbers by default
    showLineNumbers: false,
    // But enable line numbers for certain languages
    overridesByLang: {
      'js,ts,html': {
        showLineNumbers: true,
      },
    },
  },
})
\`\`\`

或者行号的样式：

\`\`\`js ins={7-13}
//ec.config.mjs
import { defineEcConfig } from 'astro-expressive-code'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

export default defineEcConfig({
  plugins: [pluginLineNumbers()],
  styleOverrides: {
    lineNumbers: {
      // Example: Change the line number foreground colors
      foreground: '#578298a6',
      highlightForeground: '#85c7ebb3',
    },
  },
})
\`\`\`
`,s={title:"Astro 框架下 Expressive Code 的基础用法",author:"NeoWangKing",date:new Date(1774441405e3),lastMod:new Date(1774512384e3),tags:["Astro","Expressive Code","代码高亮","前端开发"],category:["前端开发","Astro"],summary:"本文介绍在 Astro 框架中使用 Expressive Code 的方法，包括安装配置、基础代码块渲染、动态代码组件、文本标记功能、代码框架插件等核心特性，帮助你在博客或文档中优雅地展示代码。",comments:!0,draft:!1,sticky:0},t={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/front-end/astro/Expressive-Code-Basics.md",rawData:void 0};export{t as _internal,r as body,e as collection,s as data,n as id,o as slug};
