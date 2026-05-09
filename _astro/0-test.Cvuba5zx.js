import{c as t,r as o,m as r}from"./render-template.DAj-aA9b.js";import{u as s}from"./PostTagsList.BQG8rdfM.js";import"./jsx-runtime.CPK7-dcL.js";import"./index.BufDd4G-.js";import"./_commonjsHelpers.Cpj98o6Y.js";const e=`<h1 id="碎碎念" class="heading">碎碎念<a href="#碎碎念" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h1>
<p>最近我在网上学了一点图形学的知识，就想着不如写一个自己的 C 语言简易图形库，到现在为止，一些基本的二维平面图形的渲染功能已经能够正常使用了，欢迎大家来给我的图形库 <a href="https://github.com/NeoWangKing/neovin.c/" rel="noopener noreferrer" target="_blank">neovin.c</a><i class="iconfont icon-external-link"></i> 提建议～</p>
<p>在实现了一些基本的功能之后，我就在想，能不能用 WebAssembly 的能力直接把图形库渲染的信息导入到网站上展示出来，于是就有了下面这个动图（这个可是纯本地渲染的喔😈），不过需要说明的是，我暂时还没有真正实现 3D 图形的渲染，这只是按照三维的规律渲染了一堆点而已（<del>等我哪天想起来就会去</del> 我一定会尽快把 3D 的部分写出来的👀）</p>
<figure> <canvas id="app" &#x3C;="" canvas=""> </canvas></figure>
<script src="/posts/programming/NeoVinC/index.js"><\/script>`,a={title:"C 语言动画渲染",author:"NeoWangKing",date:"2026-05-07T11:19:13.000Z",lastMod:"2026-05-07T11:19:38.000Z",tags:["编程","C语言","图形学"],category:["编程","NeoVinC"],summary:"这是一篇测试用的笔记",comments:!0,draft:!1,readingMinutes:1.13,words:226},i="/home/runner/work/blog-source-code/blog-source-code/src/content/posts/programming/NeoVinC/0-test.md",c=void 0;function b(){return`
# 碎碎念

最近我在网上学了一点图形学的知识，就想着不如写一个自己的 C 语言简易图形库，到现在为止，一些基本的二维平面图形的渲染功能已经能够正常使用了，欢迎大家来给我的图形库 [neovin.c](https://github.com/NeoWangKing/neovin.c/) 提建议～

在实现了一些基本的功能之后，我就在想，能不能用 WebAssembly 的能力直接把图形库渲染的信息导入到网站上展示出来，于是就有了下面这个动图（这个可是纯本地渲染的喔😈），不过需要说明的是，我暂时还没有真正实现 3D 图形的渲染，这只是按照三维的规律渲染了一堆点而已（~~等我哪天想起来就会去~~ 我一定会尽快把 3D 的部分写出来的👀）

<figure> <canvas id="app" </canvas> </figure>
<script src="/posts/programming/NeoVinC/index.js"><\/script>
`}function v(){return e}function N(){return[{depth:1,slug:"碎碎念",text:"碎碎念"}]}const x=t((p,l,g)=>{const{layout:m,...n}=a;return n.file=i,n.url=c,o`${r()}${s(e)}`});export{x as Content,v as compiledContent,x as default,i as file,a as frontmatter,N as getHeadings,b as rawContent,c as url};
