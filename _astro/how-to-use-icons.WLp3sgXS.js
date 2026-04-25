import{c as o,r as t,m as s}from"./render-template.C79RKzgm.js";import{u as e}from"./PostTagsList.Ci3mefJB.js";import"./astro/assets-service.DLSo0gp6.js";import"./jsx-runtime.-xR-R7lh.js";import"./index.SeRWem-E.js";import"./_commonjsHelpers.BosuxZz1.js";import"./clsx.B-dksMZM.js";const i=`<p>Gyoza 选择 font-class 的方式引用图标。这些图标大部分来源于 <a href="https://remixicon.com/" rel="noopener noreferrer" target="_blank">Remix Icons</a><i class="iconfont icon-external-link"></i>，并且在 <a href="https://www.iconfont.cn/" rel="noopener noreferrer" target="_blank">iconfont</a><i class="iconfont icon-external-link"></i> 上进行管理和导出。</p>
<p>下图展示了项目中的所有图标：</p>
<figure><img src="https://s2.loli.net/2024/05/08/mbdT5HqYMEajyRG.webp" alt="所有图标" loading="lazy"></figure>
<p>当你在添加首页显示的社交账号时，你可能会想要使用这些图标。在对应的配置项中填写图标下面有 <code>icon-</code> 前缀的名称即可。</p>
<p>如果是在组件中使用图标，可以按照如下方式：</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.eyz6w.css"><script type="module" src="/_astro/ec.0vx5m.js"><\/script><figure class="frame"><figcaption class="header"></figcaption><pre data-language="jsx"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">i</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66;--1fs:italic">className</span><span style="--0:#383A42;--1:#56B6C2">=</span><span style="--0:#387138;--1:#98C379">"iconfont icon-xxx"</span><span style="--0:#383A42;--1:#ABB2BF">>&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">i</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="<i className=&#x22;iconfont icon-xxx&#x22;></i>"><div></div></button></div></figure></div>
<h2 id="为什么不是-svg-图标" class="heading">为什么不是 SVG 图标？<a href="#为什么不是-svg-图标" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>你可能看到很多的项目在使用 <a href="https://iconify.design/" rel="noopener noreferrer" target="_blank">iconify</a><i class="iconfont icon-external-link"></i>。iconify 是一个开源图标集，包含超过 20 万个图标，提供了多种框架的引入方式。Astro 中也有对应的插件 astro-icon 可以使用（如果对此感兴趣，可以查看他们的<a href="https://github.com/natemoo-re/astro-icon" rel="noopener noreferrer" target="_blank">文档</a><i class="iconfont icon-external-link"></i>）。</p>
<p>我在项目中也尝试使用过 iconify，但是出于以下几个原因，我最终还是转向了 font-class 的方式：</p>
<ul>
<li>由于项目中同时使用了 Astro 和 React，而在 Astro 组件和 React 组件中使用 iconify 图标的方式是不同的，这会导致代码中不得不存在两种使用方式。</li>
<li>iconify 在加载时需要请求它的服务器， <del>我会担心请求失败</del> ，虽然这种担心是多余的。</li>
<li>有一个功能是我会在渲染文章时往 markdown 中注入一些图标，例如外部链接尾部的图标，iconify 想要做到这一点并不方便。</li>
<li>在 HTML 中直接嵌入 SVG icon 的方式并不优雅，使用 font-class 只需要对应的类名，感觉相较而言最终的 HTML 体积小一点，页面加载会快点。我还没有做过具体的测试，但是至少我会尽量避免页面中出现大量的 SVG 仅仅只是作为图标使用。</li>
<li>该项目中用到的图标并不多，主要是一些常用的社交账号的图标，供自定义联系方式时使用。我希望所有图标集中在一起管理，这样更方便一点。</li>
</ul>
<p>我必须要承认，目前的图标方案并不优雅，每当图标集合发生修改时我都需要更新对应的字体文件和 CSS 文件。而且其他人想要管理图标集合也变得困难。</p>
<p>也许我会在未来尝试其他方式，例如 <a href="https://github.com/iconify/iconify/tree/main/plugins/tailwind" rel="noopener noreferrer" target="_blank">@iconify/tailwind</a><i class="iconfont icon-external-link"></i>，如果你有更好的方案，也欢迎给我留言。</p>
<h2 id="自定义图标" class="heading">自定义图标<a href="#自定义图标" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>如果你想要替换 iconfont 的图标，请修改以下文件：</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="text"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383a42;--1:#abb2bf">public/fonts/iconfont.ttf</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#383a42;--1:#abb2bf">public/fonts/iconfont.woff</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#383a42;--1:#abb2bf">public/fonts/iconfont.woff2</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#383a42;--1:#abb2bf">src/styles/iconfont.css</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="public/fonts/iconfont.ttfpublic/fonts/iconfont.woffpublic/fonts/iconfont.woff2src/styles/iconfont.css"><div></div></button></div></figure></div>
<p>注意，这将会替换掉项目中使用的所有图标，所以请确保你知道自己在做什么。</p>`,a={title:"如何在 Gyoza 中使用图标？",author:"lxchapu",date:"2024-05-08T00:00:00.000Z",lastMod:"2024-05-08T00:00:00.000Z",tags:["Icon"],category:["教程","Gyoza"],summary:"讲解了在Gyoza模板中使用图标的方法与规范",comments:!1,draft:!0,readingMinutes:3.36,words:672},c="/home/runner/work/blog-source-code/blog-source-code/src/content/posts/drafted/how-to-use-icons.md",l=void 0;function x(){return`
Gyoza 选择 font-class 的方式引用图标。这些图标大部分来源于 [Remix Icons](https://remixicon.com/)，并且在 [iconfont](https://www.iconfont.cn/) 上进行管理和导出。

下图展示了项目中的所有图标：

![所有图标](https://s2.loli.net/2024/05/08/mbdT5HqYMEajyRG.webp)

当你在添加首页显示的社交账号时，你可能会想要使用这些图标。在对应的配置项中填写图标下面有 \`icon-\` 前缀的名称即可。

如果是在组件中使用图标，可以按照如下方式：

\`\`\`jsx
<i className="iconfont icon-xxx"></i>
\`\`\`

## 为什么不是 SVG 图标？

你可能看到很多的项目在使用 [iconify](https://iconify.design/)。iconify 是一个开源图标集，包含超过 20 万个图标，提供了多种框架的引入方式。Astro 中也有对应的插件 astro-icon 可以使用（如果对此感兴趣，可以查看他们的[文档](https://github.com/natemoo-re/astro-icon)）。

我在项目中也尝试使用过 iconify，但是出于以下几个原因，我最终还是转向了 font-class 的方式：

- 由于项目中同时使用了 Astro 和 React，而在 Astro 组件和 React 组件中使用 iconify 图标的方式是不同的，这会导致代码中不得不存在两种使用方式。
- iconify 在加载时需要请求它的服务器， ~~我会担心请求失败~~ ，虽然这种担心是多余的。
- 有一个功能是我会在渲染文章时往 markdown 中注入一些图标，例如外部链接尾部的图标，iconify 想要做到这一点并不方便。
- 在 HTML 中直接嵌入 SVG icon 的方式并不优雅，使用 font-class 只需要对应的类名，感觉相较而言最终的 HTML 体积小一点，页面加载会快点。我还没有做过具体的测试，但是至少我会尽量避免页面中出现大量的 SVG 仅仅只是作为图标使用。
- 该项目中用到的图标并不多，主要是一些常用的社交账号的图标，供自定义联系方式时使用。我希望所有图标集中在一起管理，这样更方便一点。

我必须要承认，目前的图标方案并不优雅，每当图标集合发生修改时我都需要更新对应的字体文件和 CSS 文件。而且其他人想要管理图标集合也变得困难。

也许我会在未来尝试其他方式，例如 [@iconify/tailwind](https://github.com/iconify/iconify/tree/main/plugins/tailwind)，如果你有更好的方案，也欢迎给我留言。

## 自定义图标

如果你想要替换 iconfont 的图标，请修改以下文件：

\`\`\`text
public/fonts/iconfont.ttf
public/fonts/iconfont.woff
public/fonts/iconfont.woff2
src/styles/iconfont.css
\`\`\`

注意，这将会替换掉项目中使用的所有图标，所以请确保你知道自己在做什么。
`}function w(){return i}function A(){return[{depth:2,slug:"为什么不是-svg-图标",text:"为什么不是 SVG 图标？"},{depth:2,slug:"自定义图标",text:"自定义图标"}]}const k=o((r,d,f)=>{const{layout:p,...n}=a;return n.file=c,n.url=l,t`${s()}${e(i)}`});export{k as Content,w as compiledContent,k as default,c as file,a as frontmatter,A as getHeadings,x as rawContent,l as url};
