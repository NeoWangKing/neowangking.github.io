import{c as n,r as i,m as e}from"./render-template.C79RKzgm.js";import{u as d}from"./PostTagsList.Ci3mefJB.js";import"./astro/assets-service.DLSo0gp6.js";import"./jsx-runtime.-xR-R7lh.js";import"./index.SeRWem-E.js";import"./_commonjsHelpers.BosuxZz1.js";import"./clsx.B-dksMZM.js";const a=`<h2 id="项目背景" class="heading">项目背景<a href="#项目背景" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>在搭建 Astro 博客时，已有配置包括：</p>
<ul>
<li>自定义 remark/rehype 插件</li>
<li>Expressive Code（代码高亮）</li>
<li>Tailwind CSS（样式框架）</li>
<li>KaTeX（数学公式渲染）</li>
</ul>
<p>目标：在 Markdown 中支持 TikZ 代码块，自动渲染为 SVG 图片。</p>
<h2 id="整体架构" class="heading">整体架构<a href="#整体架构" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>TikZ 支持的核心流程如下：</p>
<ol>
<li>编写 Remark 插件遍历 Markdown AST</li>
<li>提取 <code>lang="tikz"</code> 的代码块</li>
<li>调用转换工具将 TikZ 代码编译为 SVG</li>
<li>将原始代码块替换为 <code>&#x3C;img></code> 标签</li>
</ol>
<h2 id="安装依赖" class="heading">安装依赖<a href="#安装依赖" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>在命令行界面执行下面的命令来安装所需的依赖：</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.eyz6w.css"><script type="module" src="/_astro/ec.0vx5m.js"><\/script><figure class="frame is-terminal"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">pnpm</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">add</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">-D</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">unified</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">mdast</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">@types/mdast</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">unist-util-visit</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">@types/unist</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="pnpm add -D unified mdast @types/mdast unist-util-visit @types/unist"><div></div></button></div></figure></div>
<p>具体的作用如下。</p>
<h3 id="unified" class="heading"><code>unified</code><a href="#unified" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<ul>
<li><strong>作用</strong>：统一的文本处理生态系统，提供处理 HTML、Markdown、MDX 等内容的管道式处理框架。</li>
<li><strong>核心概念</strong>：通过 <code>remark</code>（Markdown 处理）、<code>rehype</code>（HTML 处理）、<code>retext</code>（自然语言处理）等插件，将文本解析为 AST，然后通过插件链进行转换。</li>
<li><strong>在 TikZ 插件中的角色</strong>：Astro 的 Markdown 处理基于 unified 生态系统，我们需要编写的 Remark 插件就是 unified 插件的一种。</li>
</ul>
<h3 id="mdast-与-typesmdast" class="heading"><code>mdast</code> 与 <code>@types/mdast</code><a href="#mdast-与-typesmdast" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<ul>
<li>
<p><strong>mdast 全称</strong>：Markdown Abstract Syntax Tree（Markdown 抽象语法树）。</p>
</li>
<li>
<p><strong>作用</strong>：定义了 Markdown 文档在内存中的树形数据结构规范。例如，一个标题节点包含 <code>type: 'heading'</code>、<code>depth: 1</code> 和 <code>children</code> 数组；一个代码块节点包含 <code>type: 'code'</code>、<code>lang</code>（语言标识）和 <code>value</code>（代码内容）。</p>
</li>
<li>
<p><strong><code>@types/mdast</code></strong>：TypeScript 类型定义包，提供 <code>Root</code>、<code>Code</code>、<code>Heading</code> 等类型，用于代码提示和类型检查。</p>
</li>
<li>
<p><strong>典型节点结构示例</strong>：</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="typescript"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 代码块节点的结构</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">interface</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#885D01;--1:#E5C07B">Code</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent"><span style="--0:#383A42">  </span></span><span style="--0:#383A42;--1:#E6888F">type</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> </span></span><span style="--0:#387138;--1:#98C379">'code'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent"><span style="--0:#383A42">  </span></span><span style="--0:#383A42;--1:#E6888F">lang</span><span style="--0:#016C9A;--1:#CD89E1">?</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> </span></span><span style="--0:#016C9A;--1:#E5C07B">string</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 如 'javascript', 'tikz'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent"><span style="--0:#383A42">  </span></span><span style="--0:#383A42;--1:#E6888F">value</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> </span></span><span style="--0:#016C9A;--1:#E5C07B">string</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 代码内容</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="// 代码块节点的结构interface Code {  type: &#x27;code&#x27;  lang?: string // 如 &#x27;javascript&#x27;, &#x27;tikz&#x27;  value: string // 代码内容}"><div></div></button></div></figure></div>
</li>
</ul>
<h3 id="unist-util-visit" class="heading"><code>unist-util-visit</code><a href="#unist-util-visit" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<ul>
<li><strong>unist 全称</strong>：Unified Syntax Tree（统一语法树），是 <code>mdast</code>、<code>hast</code>（HTML AST）、<code>nlcst</code>（自然语言 AST）的底层规范。</li>
<li><strong>作用</strong>：提供遍历 unist 树的工具函数，可以在 AST 中查找、操作特定类型的节点。</li>
<li><strong>核心函数</strong>：<code>visit(tree, type, callback)</code>，其中 <code>type</code> 可以是节点类型字符串（如 <code>'code'</code>）或匹配函数。</li>
<li><strong>在 TikZ 插件中的使用</strong>：用 <code>visit(tree, 'code', ...)</code> 遍历所有代码块节点，筛选出 <code>lang === 'tikz'</code> 的节点进行转换。</li>
</ul>
<h3 id="typesunist" class="heading"><code>@types/unist</code><a href="#typesunist" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<ul>
<li><strong>作用</strong>：unist 底层规范的类型定义包，定义了 <code>Node</code>、<code>Parent</code>、<code>Literal</code> 等基础类型。</li>
<li><strong>依赖关系</strong>：<code>mdast</code> 和 <code>hast</code> 的类型定义都继承自 <code>unist</code> 的基础类型，因此需要安装此包作为类型依赖。</li>
</ul>
<h3 id="各依赖之间的关系图" class="heading">各依赖之间的关系图<a href="#各依赖之间的关系图" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="text"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383a42;--1:#abb2bf">unified (处理框架)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent"><span style="--0:#383a42;--1:#abb2bf">   </span></span><span style="--0:#383a42;--1:#abb2bf">├── 处理 Markdown → 依赖 mdast (数据结构)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent"><span style="--0:#383a42;--1:#abb2bf">   </span></span><span style="--0:#383a42;--1:#abb2bf">│                     └── 继承自 unist (底层规范)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent"><span style="--0:#383a42;--1:#abb2bf">   </span></span><span style="--0:#383a42;--1:#abb2bf">└── 遍历树结构 → 依赖 unist-util-visit (遍历工具)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent"><span style="--0:#383a42;--1:#abb2bf">                     </span></span><span style="--0:#383a42;--1:#abb2bf">└── 依赖 @types/unist (类型定义)</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="unified (处理框架)   ├── 处理 Markdown → 依赖 mdast (数据结构)   │                     └── 继承自 unist (底层规范)   └── 遍历树结构 → 依赖 unist-util-visit (遍历工具)                     └── 依赖 @types/unist (类型定义)"><div></div></button></div></figure></div>
<h3 id="总结为什么需要这些依赖" class="heading">总结：为什么需要这些依赖<a href="#总结为什么需要这些依赖" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>





























<table><thead><tr><th align="center">依赖</th><th align="left">解决的问题</th></tr></thead><tbody><tr><td align="center"><code>unified</code></td><td align="left">提供编写 Remark 插件的基础框架</td></tr><tr><td align="center"><code>mdast</code></td><td align="left">定义 Markdown AST 的结构规范</td></tr><tr><td align="center"><code>@types/mdast</code></td><td align="left">提供 TypeScript 类型，便于编写安全代码</td></tr><tr><td align="center"><code>unist-util-visit</code></td><td align="left">提供遍历 AST 的工具函数，免去手写递归遍历</td></tr><tr><td align="center"><code>@types/unist</code></td><td align="left">提供 unist 底层类型的 TypeScript 定义</td></tr></tbody></table>
<p>安装这些依赖后，就可以编写能够读取、分析、修改 Markdown AST 的 Remark 插件，将 TikZ 代码块转换为图片。</p>
<h2 id="tikz-转换工具函数" class="heading">TikZ 转换工具函数<a href="#tikz-转换工具函数" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>文件路径：<code>src/utils/tikzToSvg.ts</code></p>
<h3 id="核心功能" class="heading">核心功能<a href="#核心功能" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<ul>
<li>将 TikZ 代码包装为完整的 LaTeX 文档（使用 standalone 文档类）</li>
<li>调用 <code>pdflatex</code> 编译为 PDF</li>
<li>调用 <code>pdftocairo</code> 将 PDF 转换为 SVG</li>
<li>使用 MD5 哈希实现缓存机制</li>
<li>输出 SVG 到 <code>public/tikz-images/</code> 目录</li>
</ul>
<h3 id="代码包装函数" class="heading">代码包装函数<a href="#代码包装函数" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="typescript"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/**</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* 将 TikZ 代码包装为完整的 LaTeX 文档</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* </span><span style="--1:#CD89E1;--1fs:italic"><span style="--0:#383A42;--0fs:italic">@</span><span style="--0:#A626A4;--0fs:italic">param</span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span><mark><span style="--0:#8b352d;--0fs:italic;--1:#eca3a8;--1fs:italic">code</span></mark><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> - 用户编写的 TikZ 代码（只包含 tikzpicture 环境内部的内容）</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* </span><span style="--1:#CD89E1;--1fs:italic"><span style="--0:#383A42;--0fs:italic">@</span><span style="--0:#A626A4;--0fs:italic">returns</span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> 完整的 LaTeX 文档字符串</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">*</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* 说明：</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* - standalone 文档类会自动裁剪白边，只保留图形区域</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* - border=10pt 为图形添加 10pt 的内边距</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* - 预加载常用 TikZ 库，用户无需手动导入</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">*/</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">function</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">wrapTikZ</span><span style="--0:#383A42;--1:#ABB2BF">(</span><mark><span style="--0:#383A42;--1:#eca3a8;--1fs:italic">code</span></mark><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> </span></span><span style="--0:#016C9A;--1:#E5C07B">string</span><span style="--1:#ABB2BF"><span style="--0:#383A42">)</span><span style="--0:#016C9A">:</span><span style="--0:#383A42"> </span></span><span style="--0:#016C9A;--1:#E5C07B">string</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">12</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">\`</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">13</div></div><div class="code"><span style="--0:#01587d;--1:#73c3cc">\\\\</span><span style="--0:#2e5c2e;--1:#98C379">documentclass[tikz,border=10pt]{standalone}</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">14</div></div><div class="code"><span style="--0:#01587d;--1:#73c3cc">\\\\</span><span style="--0:#2e5c2e;--1:#98C379">usepackage{tikz}</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">15</div></div><div class="code"><span style="--0:#01587d;--1:#73c3cc">\\\\</span><span style="--0:#2e5c2e;--1:#98C379">usetikzlibrary{arrows, positioning, shapes, calc}</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">16</div></div><div class="code"><span style="--0:#01587d;--1:#73c3cc">\\\\</span><span style="--0:#2e5c2e;--1:#98C379">begin{document}</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">17</div></div><div class="code"><span style="--0:#01587d;--1:#73c3cc">\\\\</span><span style="--0:#2e5c2e;--1:#98C379">begin{tikzpicture}</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">18</div></div><div class="code"><span style="--0:#a20f36;--1:#d8a3e8">\${</span><mark><span style="--0:#383A42;--1:#efb3b7">code</span></mark><span style="--0:#a20f36;--1:#d8a3e8">}</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">19</div></div><div class="code"><span style="--0:#01587d;--1:#73c3cc">\\\\</span><span style="--0:#2e5c2e;--1:#98C379">end{tikzpicture}</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">20</div></div><div class="code"><span style="--0:#01587d;--1:#73c3cc">\\\\</span><span style="--0:#2e5c2e;--1:#98C379">end{document}\`</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">21</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="/** * 将 TikZ 代码包装为完整的 LaTeX 文档 * @param code - 用户编写的 TikZ 代码（只包含 tikzpicture 环境内部的内容） * @returns 完整的 LaTeX 文档字符串 * * 说明： * - standalone 文档类会自动裁剪白边，只保留图形区域 * - border=10pt 为图形添加 10pt 的内边距 * - 预加载常用 TikZ 库，用户无需手动导入 */function wrapTikZ(code: string): string {  return &#x60;\\\\documentclass[tikz,border=10pt]{standalone}\\\\usepackage{tikz}\\\\usetikzlibrary{arrows, positioning, shapes, calc}\\\\begin{document}\\\\begin{tikzpicture}\${code}\\\\end{tikzpicture}\\\\end{document}&#x60;}"><div></div></button></div></figure></div>
<h3 id="主函数结构" class="heading">主函数结构<a href="#主函数结构" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="typescript"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">createHash</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'crypto'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#AF4238;--1:#E6888F">fs</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'fs/promises'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#AF4238;--1:#E6888F">path</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'path'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">exec</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'child_process'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">promisify</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'util'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">const</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#E5C07B">execAsync</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#016C9A;--1:#56B6C2">=</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">promisify</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F">exec</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/**</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* 将 TikZ 代码转换为 SVG 图片路径</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* </span><span style="--1:#CD89E1;--1fs:italic"><span style="--0:#383A42;--0fs:italic">@</span><span style="--0:#A626A4;--0fs:italic">param</span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span><span style="--0:#AF4238;--0fs:italic;--1:#E6888F;--1fs:italic">code</span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> - TikZ 代码字符串</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">12</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* </span><span style="--1:#CD89E1;--1fs:italic"><span style="--0:#383A42;--0fs:italic">@</span><span style="--0:#A626A4;--0fs:italic">returns</span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> SVG 文件的公开访问路径（如 \`/tikz-images/abc123.svg\`）</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">13</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">*</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">14</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* 工作流程：</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">15</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* 1. 计算代码哈希值作为文件名</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">16</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* 2. 检查缓存，若已存在则直接返回</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">17</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* 3. 将代码写入临时 .tex 文件</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">18</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* 4. 调用 pdflatex 编译为 PDF</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">19</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* 5. 调用 pdftocairo 将 PDF 转换为 SVG</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">20</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* 6. 清理临时文件，返回 SVG 路径</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">21</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">*/</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">22</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">export</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#A626A4;--1:#CD89E1">async</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#A626A4;--1:#CD89E1">function</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">tikzToSvg</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">code</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> </span></span><span style="--0:#016C9A;--1:#E5C07B">string</span><span style="--1:#ABB2BF"><span style="--0:#383A42">)</span><span style="--0:#016C9A">:</span><span style="--0:#383A42"> </span></span><span style="--0:#885D01;--1:#E5C07B">Promise</span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#383A42;--1:#E5C07B">string</span><span style="--0:#383A42;--1:#ABB2BF">> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">23</div></div><div class="code"><span class="indent">  </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 步骤1：生成基于代码内容的唯一哈希值</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">24</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">const</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#E5C07B">hash</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#016C9A;--1:#56B6C2">=</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">createHash</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'md5'</span><span style="--0:#383A42;--1:#ABB2BF">).</span><span style="--0:#3360C1;--1:#61AFEF">update</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F">code</span><span style="--0:#383A42;--1:#ABB2BF">).</span><span style="--0:#3360C1;--1:#61AFEF">digest</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'hex'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">25</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">26</div></div><div class="code"><span class="indent">  </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 定义输出目录和文件路径</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">27</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">const</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#E5C07B">outputDir</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#016C9A;--1:#56B6C2">=</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E5C07B">path</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">join</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E5C07B">process</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">cwd</span><span style="--0:#383A42;--1:#ABB2BF">(), </span><span style="--0:#387138;--1:#98C379">'public'</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#387138;--1:#98C379">'tikz-images'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">28</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">const</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#E5C07B">texPath</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#016C9A;--1:#56B6C2">=</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E5C07B">path</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">join</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F">outputDir</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#387138;--1:#98C379">\`</span><span style="--0:#C71242;--1:#CD89E1">\${</span><span style="--0:#383A42;--1:#E6888F">hash</span><span style="--0:#C71242;--1:#CD89E1">}</span><span style="--0:#387138;--1:#98C379">.tex\`</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">29</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">const</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#E5C07B">pdfPath</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#016C9A;--1:#56B6C2">=</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E5C07B">path</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">join</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F">outputDir</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#387138;--1:#98C379">\`</span><span style="--0:#C71242;--1:#CD89E1">\${</span><span style="--0:#383A42;--1:#E6888F">hash</span><span style="--0:#C71242;--1:#CD89E1">}</span><span style="--0:#387138;--1:#98C379">.pdf\`</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">30</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">const</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#E5C07B">svgPath</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#016C9A;--1:#56B6C2">=</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E5C07B">path</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">join</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F">outputDir</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#387138;--1:#98C379">\`</span><span style="--0:#C71242;--1:#CD89E1">\${</span><span style="--0:#383A42;--1:#E6888F">hash</span><span style="--0:#C71242;--1:#CD89E1">}</span><span style="--0:#387138;--1:#98C379">.svg\`</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">31</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">32</div></div><div class="code"><span class="indent">  </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 确保输出目录存在</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">33</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">await</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E5C07B">fs</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">mkdir</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F">outputDir</span><span style="--0:#383A42;--1:#ABB2BF">, { </span><span style="--0:#AF4238;--1:#E6888F">recursive</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> </span></span><span style="--0:#875D01;--1:#D19A66">true</span><span style="--0:#383A42;--1:#ABB2BF"> })</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">34</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">35</div></div><div class="code"><span class="indent">  </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 步骤2：缓存检查——如果 SVG 已存在，直接返回</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">36</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">try</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">37</div></div><div class="code"><span class="indent">    </span><span style="--0:#A626A4;--1:#CD89E1">await</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E5C07B">fs</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">access</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F">svgPath</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">38</div></div><div class="code"><span class="indent">    </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">\`/tikz-images/</span><span style="--0:#C71242;--1:#CD89E1">\${</span><span style="--0:#383A42;--1:#E6888F">hash</span><span style="--0:#C71242;--1:#CD89E1">}</span><span style="--0:#387138;--1:#98C379">.svg\`</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">39</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">} </span><span style="--0:#A626A4;--1:#CD89E1">catch</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">40</div></div><div class="code"><span class="indent">    </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 文件不存在，继续编译流程</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">41</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">42</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">43</div></div><div class="code"><span class="indent">  </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 步骤3：写入 .tex 文件</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">44</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">const</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#E5C07B">latexDoc</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#016C9A;--1:#56B6C2">=</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">wrapTikZ</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F">code</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">45</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">await</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E5C07B">fs</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">writeFile</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F">texPath</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#383A42;--1:#E6888F">latexDoc</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#387138;--1:#98C379">'utf-8'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">46</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">47</div></div><div class="code"><span class="indent">  </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 步骤4：调用 pdflatex 编译 PDF</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">48</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">try</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">49</div></div><div class="code"><span class="indent">    </span><span style="--0:#A626A4;--1:#CD89E1">await</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">execAsync</span><span style="--0:#383A42;--1:#ABB2BF">(</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">50</div></div><div class="code"><span class="indent">      </span><span style="--0:#387138;--1:#98C379">\`pdflatex -interaction=nonstopmode -output-directory="</span><span style="--0:#C71242;--1:#CD89E1">\${</span><span style="--0:#383A42;--1:#E6888F">outputDir</span><span style="--0:#C71242;--1:#CD89E1">}</span><span style="--0:#387138;--1:#98C379">" "</span><span style="--0:#C71242;--1:#CD89E1">\${</span><span style="--0:#383A42;--1:#E6888F">texPath</span><span style="--0:#C71242;--1:#CD89E1">}</span><span style="--0:#387138;--1:#98C379">"\`</span><span style="--0:#383A42;--1:#ABB2BF">,</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">51</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">      </span></span><span style="--0:#383A42;--1:#ABB2BF">{ </span><span style="--0:#AF4238;--1:#E6888F">timeout</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> </span></span><span style="--0:#875D01;--1:#D19A66">30000</span><span style="--0:#383A42;--1:#ABB2BF"> }, </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 30秒超时</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">52</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">53</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">} </span><span style="--0:#A626A4;--1:#CD89E1">catch</span><span style="--0:#383A42;--1:#ABB2BF"> (</span><span style="--0:#383A42;--1:#E6888F">error</span><span style="--0:#383A42;--1:#ABB2BF">) {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">54</div></div><div class="code"><span class="indent">    </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// pdflatex 即使有警告也会抛出非零退出码</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">55</div></div><div class="code"><span class="indent">    </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 需要检查 PDF 是否实际生成，而不是直接认为失败</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">56</div></div><div class="code"><span class="indent">    </span><span style="--0:#A626A4;--1:#CD89E1">try</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">57</div></div><div class="code"><span class="indent">      </span><span style="--0:#A626A4;--1:#CD89E1">await</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E5C07B">fs</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">access</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F">pdfPath</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">58</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">} </span><span style="--0:#A626A4;--1:#CD89E1">catch</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">59</div></div><div class="code"><span class="indent">      </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// PDF 未生成，编译真正失败</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">60</div></div><div class="code"><span class="indent">      </span><span style="--0:#A626A4;--1:#CD89E1">throw</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#A626A4;--1:#CD89E1">new</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">Error</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">\`TikZ 编译失败: </span><span style="--0:#C71242;--1:#CD89E1">\${</span><span style="--0:#383A42;--1:#E6888F">error</span><span style="--0:#C71242;--1:#CD89E1">}</span><span style="--0:#387138;--1:#98C379">\`</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">61</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">62</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">63</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">64</div></div><div class="code"><span class="indent">  </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 步骤5：调用 pdftocairo 将 PDF 转换为 SVG</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">65</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">await</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">execAsync</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">\`pdftocairo -svg "</span><span style="--0:#C71242;--1:#CD89E1">\${</span><span style="--0:#383A42;--1:#E6888F">pdfPath</span><span style="--0:#C71242;--1:#CD89E1">}</span><span style="--0:#387138;--1:#98C379">" "</span><span style="--0:#C71242;--1:#CD89E1">\${</span><span style="--0:#383A42;--1:#E6888F">svgPath</span><span style="--0:#C71242;--1:#CD89E1">}</span><span style="--0:#387138;--1:#98C379">"\`</span><span style="--0:#383A42;--1:#ABB2BF">, { </span><span style="--0:#AF4238;--1:#E6888F">timeout</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> </span></span><span style="--0:#875D01;--1:#D19A66">10000</span><span style="--0:#383A42;--1:#ABB2BF"> })</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">66</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">67</div></div><div class="code"><span class="indent">  </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 步骤6：清理临时 .tex 文件（可选，保留 PDF 用于调试）</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">68</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">await</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E5C07B">fs</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">unlink</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F">texPath</span><span style="--0:#383A42;--1:#ABB2BF">).</span><span style="--0:#3360C1;--1:#61AFEF">catch</span><span style="--0:#383A42;--1:#ABB2BF">(() </span><span style="--0:#A626A4;--1:#CD89E1">=></span><span style="--0:#383A42;--1:#ABB2BF"> {})</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">69</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">70</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">\`/tikz-images/</span><span style="--0:#C71242;--1:#CD89E1">\${</span><span style="--0:#383A42;--1:#E6888F">hash</span><span style="--0:#C71242;--1:#CD89E1">}</span><span style="--0:#387138;--1:#98C379">.svg\`</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">71</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="import { createHash } from &#x27;crypto&#x27;import fs from &#x27;fs/promises&#x27;import path from &#x27;path&#x27;import { exec } from &#x27;child_process&#x27;import { promisify } from &#x27;util&#x27;const execAsync = promisify(exec)/** * 将 TikZ 代码转换为 SVG 图片路径 * @param code - TikZ 代码字符串 * @returns SVG 文件的公开访问路径（如 &#x60;/tikz-images/abc123.svg&#x60;） * * 工作流程： * 1. 计算代码哈希值作为文件名 * 2. 检查缓存，若已存在则直接返回 * 3. 将代码写入临时 .tex 文件 * 4. 调用 pdflatex 编译为 PDF * 5. 调用 pdftocairo 将 PDF 转换为 SVG * 6. 清理临时文件，返回 SVG 路径 */export async function tikzToSvg(code: string): Promise<string> {  // 步骤1：生成基于代码内容的唯一哈希值  const hash = createHash(&#x27;md5&#x27;).update(code).digest(&#x27;hex&#x27;)  // 定义输出目录和文件路径  const outputDir = path.join(process.cwd(), &#x27;public&#x27;, &#x27;tikz-images&#x27;)  const texPath = path.join(outputDir, &#x60;\${hash}.tex&#x60;)  const pdfPath = path.join(outputDir, &#x60;\${hash}.pdf&#x60;)  const svgPath = path.join(outputDir, &#x60;\${hash}.svg&#x60;)  // 确保输出目录存在  await fs.mkdir(outputDir, { recursive: true })  // 步骤2：缓存检查——如果 SVG 已存在，直接返回  try {    await fs.access(svgPath)    return &#x60;/tikz-images/\${hash}.svg&#x60;  } catch {    // 文件不存在，继续编译流程  }  // 步骤3：写入 .tex 文件  const latexDoc = wrapTikZ(code)  await fs.writeFile(texPath, latexDoc, &#x27;utf-8&#x27;)  // 步骤4：调用 pdflatex 编译 PDF  try {    await execAsync(      &#x60;pdflatex -interaction=nonstopmode -output-directory=&#x22;\${outputDir}&#x22; &#x22;\${texPath}&#x22;&#x60;,      { timeout: 30000 }, // 30秒超时    )  } catch (error) {    // pdflatex 即使有警告也会抛出非零退出码    // 需要检查 PDF 是否实际生成，而不是直接认为失败    try {      await fs.access(pdfPath)    } catch {      // PDF 未生成，编译真正失败      throw new Error(&#x60;TikZ 编译失败: \${error}&#x60;)    }  }  // 步骤5：调用 pdftocairo 将 PDF 转换为 SVG  await execAsync(&#x60;pdftocairo -svg &#x22;\${pdfPath}&#x22; &#x22;\${svgPath}&#x22;&#x60;, { timeout: 10000 })  // 步骤6：清理临时 .tex 文件（可选，保留 PDF 用于调试）  await fs.unlink(texPath).catch(() => {})  return &#x60;/tikz-images/\${hash}.svg&#x60;}"><div></div></button></div></figure></div>
<h3 id="错误处理要点" class="heading">错误处理要点<a href="#错误处理要点" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<ul>
<li><code>pdflatex</code> 即使有警告也会返回非零退出码，需检查 PDF 是否实际生成</li>
<li>PDF 生成成功应视为成功，警告可以忽略</li>
<li>使用日志文件辅助调试</li>
</ul>
<h2 id="remark-插件开发" class="heading">Remark 插件开发<a href="#remark-插件开发" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>文件路径：<code>src/plugins/remarkTikz.ts</code></p>
<h3 id="插件功能" class="heading">插件功能<a href="#插件功能" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<ul>
<li>遍历 Markdown AST 中的 <code>code</code> 节点</li>
<li>筛选 <code>lang === 'tikz'</code> 的代码块</li>
<li>并行调用 <code>tikzToSvg()</code> 转换</li>
<li>将原始代码块替换为 HTML 结构</li>
</ul>
<h3 id="代码实现" class="heading">代码实现<a href="#代码实现" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="typescript"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">visit</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'unist-util-visit'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#A626A4;--1:#CD89E1">type</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">Plugin</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'unified'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#A626A4;--1:#CD89E1">type</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">Root</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'mdast'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">tikzToSvg</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'../utils/tikzToSvg'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/**</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* Remark 插件：将 TikZ 代码块转换为 SVG 图片</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">*</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* 工作流程：</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* 1. 遍历 Markdown AST，找到所有 lang="tikz" 的代码块</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* 2. 并行调用 tikzToSvg 转换每个代码块</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">12</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">* 3. 将原始代码块替换为 &#x3C;img> 标签</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">13</div></div><div class="code"><span class="indent"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">*/</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">14</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">export</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#A626A4;--1:#CD89E1">const</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">remarkTikz</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> </span></span><span style="--0:#885D01;--1:#E5C07B">Plugin</span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;[], </span><span style="--0:#885D01;--1:#E5C07B">Root</span><span style="--0:#383A42;--1:#ABB2BF">> </span><span style="--0:#016C9A;--1:#56B6C2">=</span><span style="--0:#383A42;--1:#ABB2BF"> () </span><span style="--0:#A626A4;--1:#CD89E1">=></span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">15</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#A626A4;--1:#CD89E1">async</span><span style="--0:#383A42;--1:#ABB2BF"> (</span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">tree</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> </span></span><span style="--0:#885D01;--1:#E5C07B">Root</span><span style="--0:#383A42;--1:#ABB2BF">) </span><span style="--0:#A626A4;--1:#CD89E1">=></span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">16</div></div><div class="code"><span class="indent">    </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 存储待处理的节点信息</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">17</div></div><div class="code"><span class="indent">    </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 不能在遍历过程中直接修改 AST，需要先收集再统一处理</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">18</div></div><div class="code"><span class="indent">    </span><span style="--0:#A626A4;--1:#CD89E1">const</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#E5C07B">nodes</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> </span></span><span style="--0:#885D01;--1:#E5C07B">Array</span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;{</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">19</div></div><div class="code"><span class="indent"><span style="--0:#383A42">      </span></span><span style="--0:#383A42;--1:#E6888F">node</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> </span></span><span style="--0:#383A42;--1:#E5C07B">any</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 原始代码块节点</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">20</div></div><div class="code"><span class="indent"><span style="--0:#383A42">      </span></span><span style="--0:#383A42;--1:#E6888F">index</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> </span></span><span style="--0:#383A42;--1:#E5C07B">number</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 节点在父节点 children 数组中的位置</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">21</div></div><div class="code"><span class="indent"><span style="--0:#383A42">      </span></span><span style="--0:#383A42;--1:#E6888F">parent</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> </span></span><span style="--0:#383A42;--1:#E5C07B">any</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 父节点</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">22</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">}> </span><span style="--0:#016C9A;--1:#56B6C2">=</span><span style="--0:#383A42;--1:#ABB2BF"> []</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">23</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">24</div></div><div class="code"><span class="indent">    </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 遍历 AST，收集所有 TikZ 代码块</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">25</div></div><div class="code"><span class="indent">    </span><span style="--0:#3360C1;--1:#61AFEF">visit</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F">tree</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#387138;--1:#98C379">'code'</span><span style="--0:#383A42;--1:#ABB2BF">, (</span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">node</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">index</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">parent</span><span style="--0:#383A42;--1:#ABB2BF">) </span><span style="--0:#A626A4;--1:#CD89E1">=></span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">26</div></div><div class="code"><span class="indent">      </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// node.lang 是代码块的语言标识，如 \`\`\`tikz 中的 "tikz"</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">27</div></div><div class="code"><span class="indent">      </span><span style="--0:#A626A4;--1:#CD89E1">if</span><span style="--0:#383A42;--1:#ABB2BF"> (</span><span style="--0:#383A42;--1:#E5C07B">node</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#AF4238;--1:#E6888F">lang</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#016C9A;--1:#56B6C2">===</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'tikz'</span><span style="--0:#383A42;--1:#ABB2BF">) {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">28</div></div><div class="code"><span class="indent">        </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// index 的类型是 number | undefined，使用非空断言</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">29</div></div><div class="code"><span class="indent"><span style="--0:#383A42">        </span></span><span style="--0:#383A42;--1:#E5C07B">nodes</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">push</span><span style="--0:#383A42;--1:#ABB2BF">({ </span><span style="--0:#383A42;--1:#E6888F">node</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#AF4238;--1:#E6888F">index</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> </span></span><span style="--0:#383A42;--1:#E6888F">index</span><span style="--0:#016C9A;--1:#56B6C2">!</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#383A42;--1:#E6888F">parent</span><span style="--0:#383A42;--1:#ABB2BF"> })</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">30</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">      </span></span><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">31</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">})</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">32</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">33</div></div><div class="code"><span class="indent">    </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 并行转换所有 TikZ 代码块</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">34</div></div><div class="code"><span class="indent">    </span><span style="--0:#A626A4;--1:#CD89E1">await</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#885D01;--1:#E5C07B">Promise</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">all</span><span style="--0:#383A42;--1:#ABB2BF">(</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">35</div></div><div class="code"><span class="indent"><span style="--0:#383A42">      </span></span><span style="--0:#383A42;--1:#E5C07B">nodes</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">map</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#A626A4;--1:#CD89E1">async</span><span style="--0:#383A42;--1:#ABB2BF"> ({ </span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">node</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">index</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">parent</span><span style="--0:#383A42;--1:#ABB2BF"> }) </span><span style="--0:#A626A4;--1:#CD89E1">=></span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">36</div></div><div class="code"><span class="indent">        </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 调用转换函数，获取 SVG 图片路径</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">37</div></div><div class="code"><span class="indent">        </span><span style="--0:#A626A4;--1:#CD89E1">const</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#E5C07B">svgPath</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#016C9A;--1:#56B6C2">=</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#A626A4;--1:#CD89E1">await</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">tikzToSvg</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E5C07B">node</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#AF4238;--1:#E6888F">value</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">38</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">39</div></div><div class="code"><span class="indent">        </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 创建 HTML 节点替换原始代码块</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">40</div></div><div class="code"><span class="indent">        </span><span style="--0:#A626A4;--1:#CD89E1">const</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#E5C07B">htmlNode</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#016C9A;--1:#56B6C2">=</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">41</div></div><div class="code"><span class="indent">          </span><span style="--0:#AF4238;--1:#E6888F">type</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> </span></span><span style="--0:#387138;--1:#98C379">'html'</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// mdast 中的 HTML 节点类型</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">42</div></div><div class="code"><span class="indent">          </span><span style="--0:#AF4238;--1:#E6888F">value</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> </span></span><span style="--0:#387138;--1:#98C379">\`&#x3C;div class="tikz-container">&#x3C;img src="</span><span style="--0:#C71242;--1:#CD89E1">\${</span><span style="--0:#383A42;--1:#E6888F">svgPath</span><span style="--0:#C71242;--1:#CD89E1">}</span><span style="--0:#387138;--1:#98C379">" alt="TikZ diagram" class="tikz-diagram" />&#x3C;/div>\`</span><span style="--0:#383A42;--1:#ABB2BF">,</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">43</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">        </span></span><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">44</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">45</div></div><div class="code"><span class="indent">        </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 替换：删除原节点，插入新节点</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">46</div></div><div class="code"><span class="indent"><span style="--0:#383A42">        </span></span><span style="--0:#383A42;--1:#E5C07B">parent</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#AF4238;--1:#E5C07B">children</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">splice</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F">index</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#875D01;--1:#D19A66">1</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#383A42;--1:#E6888F">htmlNode</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">47</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">      </span></span><span style="--0:#383A42;--1:#ABB2BF">}),</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">48</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">49</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">50</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="import { visit } from &#x27;unist-util-visit&#x27;import type { Plugin } from &#x27;unified&#x27;import type { Root } from &#x27;mdast&#x27;import { tikzToSvg } from &#x27;../utils/tikzToSvg&#x27;/** * Remark 插件：将 TikZ 代码块转换为 SVG 图片 * * 工作流程： * 1. 遍历 Markdown AST，找到所有 lang=&#x22;tikz&#x22; 的代码块 * 2. 并行调用 tikzToSvg 转换每个代码块 * 3. 将原始代码块替换为 <img> 标签 */export const remarkTikz: Plugin<[], Root> = () => {  return async (tree: Root) => {    // 存储待处理的节点信息    // 不能在遍历过程中直接修改 AST，需要先收集再统一处理    const nodes: Array<{      node: any // 原始代码块节点      index: number // 节点在父节点 children 数组中的位置      parent: any // 父节点    }> = []    // 遍历 AST，收集所有 TikZ 代码块    visit(tree, &#x27;code&#x27;, (node, index, parent) => {      // node.lang 是代码块的语言标识，如 &#x60;&#x60;&#x60;tikz 中的 &#x22;tikz&#x22;      if (node.lang === &#x27;tikz&#x27;) {        // index 的类型是 number | undefined，使用非空断言        nodes.push({ node, index: index!, parent })      }    })    // 并行转换所有 TikZ 代码块    await Promise.all(      nodes.map(async ({ node, index, parent }) => {        // 调用转换函数，获取 SVG 图片路径        const svgPath = await tikzToSvg(node.value)        // 创建 HTML 节点替换原始代码块        const htmlNode = {          type: &#x27;html&#x27;, // mdast 中的 HTML 节点类型          value: &#x60;<div class=&#x22;tikz-container&#x22;><img src=&#x22;\${svgPath}&#x22; alt=&#x22;TikZ diagram&#x22; class=&#x22;tikz-diagram&#x22; /></div>&#x60;,        }        // 替换：删除原节点，插入新节点        parent.children.splice(index, 1, htmlNode)      }),    )  }}"><div></div></button></div></figure></div>
<h3 id="类型处理注意事项" class="heading">类型处理注意事项<a href="#类型处理注意事项" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<ul>
<li><code>visit</code> 回调的 <code>index</code> 参数类型为 <code>number | undefined</code>，需要判空或使用非空断言</li>
<li>可使用 <code>@ts-ignore</code> 绕过复杂的类型检查（如遇类型问题）</li>
</ul>
<h2 id="注册插件" class="heading">注册插件<a href="#注册插件" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>修改 <code>astro.config.js</code>：</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">remarkTikz</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'./src/plugins/remarkTikz'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">export</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#AF4238;--1:#CD89E1">default</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">defineConfig</span><span style="--0:#383A42;--1:#ABB2BF">({</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">  </span><span style="--0:#AF4238;--1:#E6888F">markdown</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> {</span></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">    </span><span style="--0:#AF4238;--1:#E6888F">remarkPlugins</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> [</span></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent">      </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// ... 其他插件（如 remarkMath、remarkToc 等）</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent">      </span><span style="--0:#AF4238;--1:#E6888F">remarkTikz</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 添加 TikZ 插件</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">],</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">},</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">})</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="import { remarkTikz } from &#x27;./src/plugins/remarkTikz&#x27;export default defineConfig({  markdown: {    remarkPlugins: [      // ... 其他插件（如 remarkMath、remarkToc 等）      remarkTikz, // 添加 TikZ 插件    ],  },})"><div></div></button></div></figure></div>
<h2 id="windows-环境工具链配置" class="heading">Windows 环境工具链配置<a href="#windows-环境工具链配置" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<h3 id="latex-编译器" class="heading">LaTeX 编译器<a href="#latex-编译器" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<ul>
<li>安装 <strong>MiKTeX</strong>（确保 <code>pdflatex</code> 可用）</li>
<li>安装时选择“为所有用户安装”以便 PATH 配置</li>
</ul>
<h3 id="pdf-转-svg-工具" class="heading">PDF 转 SVG 工具<a href="#pdf-转-svg-工具" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<ul>
<li>下载 <strong>Poppler for Windows</strong></li>
<li>使用其中的 <code>pdftocairo.exe</code></li>
</ul>
<h3 id="路径配置" class="heading">路径配置<a href="#路径配置" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>将 <code>pdflatex</code> 和 <code>pdftocairo</code> 所在目录添加到系统 PATH：</p>
<ul>
<li>MiKTeX 默认路径：<code>C:\\Program Files\\MiKTeX\\miktex\\bin\\x64\\</code></li>
<li>Poppler 解压路径：<code>C:\\poppler\\bin\\</code></li>
</ul>
<p>验证安装：</p>
<div class="expressive-code"><figure class="frame is-terminal"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">pdflatex</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">--version</span><span style="--0:#383A42;--1:#ABB2BF">   </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"># 应显示版本信息</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">pdftocairo</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">--version</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"># 应显示版本信息</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="pdflatex --version   # 应显示版本信息pdftocairo --version # 应显示版本信息"><div></div></button></div></figure></div>
<h3 id="关键命令格式" class="heading">关键命令格式<a href="#关键命令格式" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<div class="expressive-code"><figure class="frame is-terminal"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"># 编译 LaTeX：-interaction=nonstopmode 遇到错误不停止，继续编译</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">pdflatex</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">-interaction=nonstopmode</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">-output-directory=</span><span style="--0:#383A42;--1:#ABB2BF">{</span><span style="--0:#3360C1;--1:#61AFEF">dir}</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">{tex文件}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"># PDF 转 SVG：-svg 指定输出格式为 SVG</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">pdftocairo</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">-svg</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">{pdf路径}</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">{svg路径}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="pdflatex -interaction=nonstopmode -output-directory={dir} {tex文件}pdftocairo -svg {pdf路径} {svg路径}"><div></div></button></div></figure></div>
<h2 id="样式处理" class="heading">样式处理<a href="#样式处理" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>由于 SVG 作为 <code>&#x3C;img></code> 嵌入时颜色难以控制（依赖外部 CSS 变量），可采用固定白色背景：</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="css"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 在全局样式文件中添加 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#875D01;--1:#D19A66">.markdown</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#875D01;--1:#D19A66">.tikz-diagram</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">@apply bg-white rounded-lg p-2;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="/* 在全局样式文件中添加 */.markdown .tikz-diagram {  @apply bg-white rounded-lg p-2;}"><div></div></button></div></figure></div>
<h2 id="最终使用方式" class="heading">最终使用方式<a href="#最终使用方式" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>在 Markdown 文件中直接输入<code>tikz</code>代码：</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="markdown"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`tikz</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\\node (X) at (-2,0) {$x$};</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\\node (P) at (0, 0) {Progress};</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\\node (Y) at (2, 0) {$y$};</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\\path[->] (X) edge (P);</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\\path[->] (P) edge (Y);</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x60;&#x60;&#x60;tikz\\node (X) at (-2,0) {$x$};\\node (P) at (0, 0) {Progress};\\node (Y) at (2, 0) {$y$};\\path[->] (X) edge (P);\\path[->] (P) edge (Y);&#x60;&#x60;&#x60;"><div></div></button></div></figure></div>
<p>渲染效果：</p>
<div class="tikz-container"><img src="/tikz-images/5d75f0f8dd57c2c6f224aa9ab0d8482d.svg" alt="TikZ Diagram" loading="lazy" class="tikz-diagram"></div>
<h2 id="已知问题与限制" class="heading">已知问题与限制<a href="#已知问题与限制" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>






























<table><thead><tr><th align="left">问题</th><th align="left">说明</th><th align="left">解决方案</th></tr></thead><tbody><tr><td align="left">首次编译较慢</td><td align="left">约 0.5-2 秒</td><td align="left">使用 MD5 缓存，仅首次编译</td></tr><tr><td align="left">Windows 工具链配置复杂</td><td align="left">需手动安装 MiKTeX 和 Poppler</td><td align="left">推荐使用 WSL2 或 Linux 环境</td></tr><tr><td align="left">SVG 颜色控制</td><td align="left">外部 CSS 变量无法影响 SVG 内部</td><td align="left">使用固定背景色或内联样式</td></tr><tr><td align="left">LaTeX 警告</td><td align="left">警告也会导致非零退出码</td><td align="left">检查 PDF 是否实际生成而非仅看退出码</td></tr></tbody></table>
<h2 id="总结" class="heading">总结<a href="#总结" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>通过上述步骤，成功在 Astro 博客中实现了 TikZ 代码块的自动渲染。核心组件包括：</p>
<ul>
<li><strong>转换工具</strong>：<code>tikzToSvg.ts</code>（LaTeX → PDF → SVG）</li>
<li><strong>Remark 插件</strong>：<code>remarkTikz.ts</code>（AST 遍历与节点替换）</li>
<li><strong>缓存机制</strong>：基于 MD5 哈希，避免重复编译</li>
<li><strong>样式适配</strong>：固定背景色确保图表可见</li>
</ul>
<p>这一方案适用于需要在博客中编写 LaTeX 矢量图形的场景，兼顾了书写便利性和渲染质量。</p>`,t={title:"在 Astro 博客中集成 TikZ 支持",author:"NeoWangKing",date:"2026-04-08T02:43:07.000Z",lastMod:"2026-04-08T02:43:07.000Z",tags:["Astro","TikZ","LaTeX","SVG","Remark插件","前端"],category:["前端","Astro"],summary:"本文记录在 Astro 博客框架中实现 TikZ 代码块自动渲染为 SVG 图片的完整过程，包括依赖安装、工具函数编写、Remark 插件开发、Windows 环境配置以及错误处理等关键步骤。",comments:!0,draft:!1,readingMinutes:12.02,words:2404},l="/home/runner/work/blog-source-code/blog-source-code/src/content/posts/front-end/astro/Tikz-Support-in-Astro.md",p=void 0;function f(){return`
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
`}function C(){return a}function m(){return[{depth:2,slug:"项目背景",text:"项目背景"},{depth:2,slug:"整体架构",text:"整体架构"},{depth:2,slug:"安装依赖",text:"安装依赖"},{depth:3,slug:"unified",text:"unified"},{depth:3,slug:"mdast-与-typesmdast",text:"mdast 与 @types/mdast"},{depth:3,slug:"unist-util-visit",text:"unist-util-visit"},{depth:3,slug:"typesunist",text:"@types/unist"},{depth:3,slug:"各依赖之间的关系图",text:"各依赖之间的关系图"},{depth:3,slug:"总结为什么需要这些依赖",text:"总结：为什么需要这些依赖"},{depth:2,slug:"tikz-转换工具函数",text:"TikZ 转换工具函数"},{depth:3,slug:"核心功能",text:"核心功能"},{depth:3,slug:"代码包装函数",text:"代码包装函数"},{depth:3,slug:"主函数结构",text:"主函数结构"},{depth:3,slug:"错误处理要点",text:"错误处理要点"},{depth:2,slug:"remark-插件开发",text:"Remark 插件开发"},{depth:3,slug:"插件功能",text:"插件功能"},{depth:3,slug:"代码实现",text:"代码实现"},{depth:3,slug:"类型处理注意事项",text:"类型处理注意事项"},{depth:2,slug:"注册插件",text:"注册插件"},{depth:2,slug:"windows-环境工具链配置",text:"Windows 环境工具链配置"},{depth:3,slug:"latex-编译器",text:"LaTeX 编译器"},{depth:3,slug:"pdf-转-svg-工具",text:"PDF 转 SVG 工具"},{depth:3,slug:"路径配置",text:"路径配置"},{depth:3,slug:"关键命令格式",text:"关键命令格式"},{depth:2,slug:"样式处理",text:"样式处理"},{depth:2,slug:"最终使用方式",text:"最终使用方式"},{depth:2,slug:"已知问题与限制",text:"已知问题与限制"},{depth:2,slug:"总结",text:"总结"}]}const k=n((c,v,r)=>{const{layout:A,...s}=t;return s.file=l,s.url=p,i`${e()}${d(a)}`});export{k as Content,C as compiledContent,k as default,l as file,t as frontmatter,m as getHeadings,f as rawContent,p as url};
