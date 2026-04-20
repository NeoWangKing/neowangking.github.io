const n="front-end/astro/Tikz-Support-in-Astro.md",t="posts",e="front-end/astro/tikz-support-in-astro",i=`
## 项目背景

在搭建 Astro 博客时，已有配置包括：

- 自定义 remark/rehype 插件
- Expressive Code（代码高亮）
- Tailwind CSS（样式框架）
- KaTeX（数学公式渲染）

目标：在 Markdown 中支持 TikZ 代码块，自动渲染为 SVG 图片。

## 整体架构

TikZ 支持的核心流程如下：

1. 编写 Remark 插件遍历 Markdown AST
2. 提取 \`lang="tikz"\` 的代码块
3. 调用转换工具将 TikZ 代码编译为 SVG
4. 将原始代码块替换为 \`<img>\` 标签

## 安装依赖

在命令行界面执行下面的命令来安装所需的依赖：

\`\`\`bash
pnpm add -D unified mdast @types/mdast unist-util-visit @types/unist
\`\`\`

具体的作用如下。

### \`unified\`

- **作用**：统一的文本处理生态系统，提供处理 HTML、Markdown、MDX 等内容的管道式处理框架。
- **核心概念**：通过 \`remark\`（Markdown 处理）、\`rehype\`（HTML 处理）、\`retext\`（自然语言处理）等插件，将文本解析为 AST，然后通过插件链进行转换。
- **在 TikZ 插件中的角色**：Astro 的 Markdown 处理基于 unified 生态系统，我们需要编写的 Remark 插件就是 unified 插件的一种。

### \`mdast\` 与 \`@types/mdast\`

- **mdast 全称**：Markdown Abstract Syntax Tree（Markdown 抽象语法树）。
- **作用**：定义了 Markdown 文档在内存中的树形数据结构规范。例如，一个标题节点包含 \`type: 'heading'\`、\`depth: 1\` 和 \`children\` 数组；一个代码块节点包含 \`type: 'code'\`、\`lang\`（语言标识）和 \`value\`（代码内容）。
- **\`@types/mdast\`**：TypeScript 类型定义包，提供 \`Root\`、\`Code\`、\`Heading\` 等类型，用于代码提示和类型检查。
- **典型节点结构示例**：

  \`\`\`typescript
  // 代码块节点的结构
  interface Code {
    type: 'code'
    lang?: string // 如 'javascript', 'tikz'
    value: string // 代码内容
  }
  \`\`\`

### \`unist-util-visit\`

- **unist 全称**：Unified Syntax Tree（统一语法树），是 \`mdast\`、\`hast\`（HTML AST）、\`nlcst\`（自然语言 AST）的底层规范。
- **作用**：提供遍历 unist 树的工具函数，可以在 AST 中查找、操作特定类型的节点。
- **核心函数**：\`visit(tree, type, callback)\`，其中 \`type\` 可以是节点类型字符串（如 \`'code'\`）或匹配函数。
- **在 TikZ 插件中的使用**：用 \`visit(tree, 'code', ...)\` 遍历所有代码块节点，筛选出 \`lang === 'tikz'\` 的节点进行转换。

### \`@types/unist\`

- **作用**：unist 底层规范的类型定义包，定义了 \`Node\`、\`Parent\`、\`Literal\` 等基础类型。
- **依赖关系**：\`mdast\` 和 \`hast\` 的类型定义都继承自 \`unist\` 的基础类型，因此需要安装此包作为类型依赖。

### 各依赖之间的关系图

\`\`\`text
unified (处理框架)
   ├── 处理 Markdown → 依赖 mdast (数据结构)
   │                     └── 继承自 unist (底层规范)
   └── 遍历树结构 → 依赖 unist-util-visit (遍历工具)
                     └── 依赖 @types/unist (类型定义)
\`\`\`

### 总结：为什么需要这些依赖

|        依赖        | 解决的问题                                |
| :----------------: | :---------------------------------------- |
|     \`unified\`      | 提供编写 Remark 插件的基础框架            |
|      \`mdast\`       | 定义 Markdown AST 的结构规范              |
|   \`@types/mdast\`   | 提供 TypeScript 类型，便于编写安全代码    |
| \`unist-util-visit\` | 提供遍历 AST 的工具函数，免去手写递归遍历 |
|   \`@types/unist\`   | 提供 unist 底层类型的 TypeScript 定义     |

安装这些依赖后，就可以编写能够读取、分析、修改 Markdown AST 的 Remark 插件，将 TikZ 代码块转换为图片。

## TikZ 转换工具函数

文件路径：\`src/utils/tikzToSvg.ts\`

### 核心功能

- 将 TikZ 代码包装为完整的 LaTeX 文档（使用 standalone 文档类）
- 调用 \`pdflatex\` 编译为 PDF
- 调用 \`pdftocairo\` 将 PDF 转换为 SVG
- 使用 MD5 哈希实现缓存机制
- 输出 SVG 到 \`public/tikz-images/\` 目录

### 代码包装函数

\`\`\`typescript {13-20} "code"
/**
 * 将 TikZ 代码包装为完整的 LaTeX 文档
 * @param code - 用户编写的 TikZ 代码（只包含 tikzpicture 环境内部的内容）
 * @returns 完整的 LaTeX 文档字符串
 *
 * 说明：
 * - standalone 文档类会自动裁剪白边，只保留图形区域
 * - border=10pt 为图形添加 10pt 的内边距
 * - 预加载常用 TikZ 库，用户无需手动导入
 */
function wrapTikZ(code: string): string {
  return \`
\\\\documentclass[tikz,border=10pt]{standalone}
\\\\usepackage{tikz}
\\\\usetikzlibrary{arrows, positioning, shapes, calc}
\\\\begin{document}
\\\\begin{tikzpicture}
\${code}
\\\\end{tikzpicture}
\\\\end{document}\`
}
\`\`\`

### 主函数结构

\`\`\`typescript
import { createHash } from 'crypto'
import fs from 'fs/promises'
import path from 'path'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

/**
 * 将 TikZ 代码转换为 SVG 图片路径
 * @param code - TikZ 代码字符串
 * @returns SVG 文件的公开访问路径（如 \`/tikz-images/abc123.svg\`）
 *
 * 工作流程：
 * 1. 计算代码哈希值作为文件名
 * 2. 检查缓存，若已存在则直接返回
 * 3. 将代码写入临时 .tex 文件
 * 4. 调用 pdflatex 编译为 PDF
 * 5. 调用 pdftocairo 将 PDF 转换为 SVG
 * 6. 清理临时文件，返回 SVG 路径
 */
export async function tikzToSvg(code: string): Promise<string> {
  // 步骤1：生成基于代码内容的唯一哈希值
  const hash = createHash('md5').update(code).digest('hex')

  // 定义输出目录和文件路径
  const outputDir = path.join(process.cwd(), 'public', 'tikz-images')
  const texPath = path.join(outputDir, \`\${hash}.tex\`)
  const pdfPath = path.join(outputDir, \`\${hash}.pdf\`)
  const svgPath = path.join(outputDir, \`\${hash}.svg\`)

  // 确保输出目录存在
  await fs.mkdir(outputDir, { recursive: true })

  // 步骤2：缓存检查——如果 SVG 已存在，直接返回
  try {
    await fs.access(svgPath)
    return \`/tikz-images/\${hash}.svg\`
  } catch {
    // 文件不存在，继续编译流程
  }

  // 步骤3：写入 .tex 文件
  const latexDoc = wrapTikZ(code)
  await fs.writeFile(texPath, latexDoc, 'utf-8')

  // 步骤4：调用 pdflatex 编译 PDF
  try {
    await execAsync(
      \`pdflatex -interaction=nonstopmode -output-directory="\${outputDir}" "\${texPath}"\`,
      { timeout: 30000 }, // 30秒超时
    )
  } catch (error) {
    // pdflatex 即使有警告也会抛出非零退出码
    // 需要检查 PDF 是否实际生成，而不是直接认为失败
    try {
      await fs.access(pdfPath)
    } catch {
      // PDF 未生成，编译真正失败
      throw new Error(\`TikZ 编译失败: \${error}\`)
    }
  }

  // 步骤5：调用 pdftocairo 将 PDF 转换为 SVG
  await execAsync(\`pdftocairo -svg "\${pdfPath}" "\${svgPath}"\`, { timeout: 10000 })

  // 步骤6：清理临时 .tex 文件（可选，保留 PDF 用于调试）
  await fs.unlink(texPath).catch(() => {})

  return \`/tikz-images/\${hash}.svg\`
}
\`\`\`

### 错误处理要点

- \`pdflatex\` 即使有警告也会返回非零退出码，需检查 PDF 是否实际生成
- PDF 生成成功应视为成功，警告可以忽略
- 使用日志文件辅助调试

## Remark 插件开发

文件路径：\`src/plugins/remarkTikz.ts\`

### 插件功能

- 遍历 Markdown AST 中的 \`code\` 节点
- 筛选 \`lang === 'tikz'\` 的代码块
- 并行调用 \`tikzToSvg()\` 转换
- 将原始代码块替换为 HTML 结构

### 代码实现

\`\`\`\`typescript
import { visit } from 'unist-util-visit'
import type { Plugin } from 'unified'
import type { Root } from 'mdast'
import { tikzToSvg } from '../utils/tikzToSvg'

/**
 * Remark 插件：将 TikZ 代码块转换为 SVG 图片
 *
 * 工作流程：
 * 1. 遍历 Markdown AST，找到所有 lang="tikz" 的代码块
 * 2. 并行调用 tikzToSvg 转换每个代码块
 * 3. 将原始代码块替换为 <img> 标签
 */
export const remarkTikz: Plugin<[], Root> = () => {
  return async (tree: Root) => {
    // 存储待处理的节点信息
    // 不能在遍历过程中直接修改 AST，需要先收集再统一处理
    const nodes: Array<{
      node: any // 原始代码块节点
      index: number // 节点在父节点 children 数组中的位置
      parent: any // 父节点
    }> = []

    // 遍历 AST，收集所有 TikZ 代码块
    visit(tree, 'code', (node, index, parent) => {
      // node.lang 是代码块的语言标识，如 \`\`\`tikz 中的 "tikz"
      if (node.lang === 'tikz') {
        // index 的类型是 number | undefined，使用非空断言
        nodes.push({ node, index: index!, parent })
      }
    })

    // 并行转换所有 TikZ 代码块
    await Promise.all(
      nodes.map(async ({ node, index, parent }) => {
        // 调用转换函数，获取 SVG 图片路径
        const svgPath = await tikzToSvg(node.value)

        // 创建 HTML 节点替换原始代码块
        const htmlNode = {
          type: 'html', // mdast 中的 HTML 节点类型
          value: \`<div class="tikz-container"><img src="\${svgPath}" alt="TikZ diagram" class="tikz-diagram" /></div>\`,
        }

        // 替换：删除原节点，插入新节点
        parent.children.splice(index, 1, htmlNode)
      }),
    )
  }
}
\`\`\`\`

### 类型处理注意事项

- \`visit\` 回调的 \`index\` 参数类型为 \`number | undefined\`，需要判空或使用非空断言
- 可使用 \`@ts-ignore\` 绕过复杂的类型检查（如遇类型问题）

## 注册插件

修改 \`astro.config.js\`：

\`\`\`js
import { remarkTikz } from './src/plugins/remarkTikz'

export default defineConfig({
  markdown: {
    remarkPlugins: [
      // ... 其他插件（如 remarkMath、remarkToc 等）
      remarkTikz, // 添加 TikZ 插件
    ],
  },
})
\`\`\`

## Windows 环境工具链配置

### LaTeX 编译器

- 安装 **MiKTeX**（确保 \`pdflatex\` 可用）
- 安装时选择“为所有用户安装”以便 PATH 配置

### PDF 转 SVG 工具

- 下载 **Poppler for Windows**
- 使用其中的 \`pdftocairo.exe\`

### 路径配置

将 \`pdflatex\` 和 \`pdftocairo\` 所在目录添加到系统 PATH：

- MiKTeX 默认路径：\`C:\\Program Files\\MiKTeX\\miktex\\bin\\x64\\\`
- Poppler 解压路径：\`C:\\poppler\\bin\\\`

验证安装：

\`\`\`bash
pdflatex --version   # 应显示版本信息
pdftocairo --version # 应显示版本信息
\`\`\`

### 关键命令格式

\`\`\`bash
# 编译 LaTeX：-interaction=nonstopmode 遇到错误不停止，继续编译
pdflatex -interaction=nonstopmode -output-directory={dir} {tex文件}

# PDF 转 SVG：-svg 指定输出格式为 SVG
pdftocairo -svg {pdf路径} {svg路径}
\`\`\`

## 样式处理

由于 SVG 作为 \`<img>\` 嵌入时颜色难以控制（依赖外部 CSS 变量），可采用固定白色背景：

\`\`\`css
/* 在全局样式文件中添加 */
.markdown .tikz-diagram {
  @apply bg-white rounded-lg p-2;
}
\`\`\`

## 最终使用方式

在 Markdown 文件中直接输入\`tikz\`代码：

\`\`\`\`markdown
\`\`\`tikz
\\node (X) at (-2,0) {$x$};
\\node (P) at (0, 0) {Progress};
\\node (Y) at (2, 0) {$y$};
\\path[->] (X) edge (P);
\\path[->] (P) edge (Y);
\`\`\`
\`\`\`\`

渲染效果：

\`\`\`tikz
\\node (X) at (-2,0) {$x$};
\\node (P) at (0, 0) {Progress};
\\node (Y) at (2, 0) {$y$};
\\path[->] (X) edge (P);
\\path[->] (P) edge (Y);
\`\`\`

## 已知问题与限制

| 问题                   | 说明                           | 解决方案                            |
| :--------------------- | :----------------------------- | :---------------------------------- |
| 首次编译较慢           | 约 0.5-2 秒                    | 使用 MD5 缓存，仅首次编译           |
| Windows 工具链配置复杂 | 需手动安装 MiKTeX 和 Poppler   | 推荐使用 WSL2 或 Linux 环境         |
| SVG 颜色控制           | 外部 CSS 变量无法影响 SVG 内部 | 使用固定背景色或内联样式            |
| LaTeX 警告             | 警告也会导致非零退出码         | 检查 PDF 是否实际生成而非仅看退出码 |

## 总结

通过上述步骤，成功在 Astro 博客中实现了 TikZ 代码块的自动渲染。核心组件包括：

- **转换工具**：\`tikzToSvg.ts\`（LaTeX → PDF → SVG）
- **Remark 插件**：\`remarkTikz.ts\`（AST 遍历与节点替换）
- **缓存机制**：基于 MD5 哈希，避免重复编译
- **样式适配**：固定背景色确保图表可见

这一方案适用于需要在博客中编写 LaTeX 矢量图形的场景，兼顾了书写便利性和渲染质量。
`,a={title:"在 Astro 博客中集成 TikZ 支持",author:"NeoWangKing",date:new Date(1775616187e3),lastMod:new Date(1775616187e3),tags:["Astro","TikZ","LaTeX","SVG","Remark插件","前端"],category:["前端","Astro"],summary:"本文记录在 Astro 博客框架中实现 TikZ 代码块自动渲染为 SVG 图片的完整过程，包括依赖安装、工具函数编写、Remark 插件开发、Windows 环境配置以及错误处理等关键步骤。",comments:!0,draft:!1,sticky:0},r={type:"content",filePath:"/home/runner/work/blog-source-code/blog-source-code/src/content/posts/front-end/astro/Tikz-Support-in-Astro.md",rawData:void 0};export{r as _internal,i as body,t as collection,a as data,n as id,e as slug};
