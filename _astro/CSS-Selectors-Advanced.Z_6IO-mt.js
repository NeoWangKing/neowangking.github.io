import{c as a,r as i,m as e}from"./render-template.C79RKzgm.js";import{u as d}from"./PostTagsList.Ci3mefJB.js";import"./astro/assets-service.DLSo0gp6.js";import"./jsx-runtime.-xR-R7lh.js";import"./index.SeRWem-E.js";import"./_commonjsHelpers.BosuxZz1.js";import"./clsx.B-dksMZM.js";const n=`<h2 id="概述" class="heading">概述<a href="#概述" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>CSS 选择器用于定位 HTML 元素，为其应用样式。基础选择器（元素、类、ID）简单直接，但面对复杂结构时，高级选择器能极大提升效率和可维护性。本文涵盖 CSS 中常用且强大的高级选择器，适用于现代浏览器。</p>
<h2 id="属性选择器" class="heading">属性选择器<a href="#属性选择器" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>属性选择器根据元素的属性及其值选择元素，提供灵活的匹配方式。</p>
<h3 id="基础属性选择器" class="heading">基础属性选择器<a href="#基础属性选择器" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>













































<table><thead><tr><th align="center">语法</th><th align="center">说明</th><th align="center">示例</th></tr></thead><tbody><tr><td align="center"><code>[attr]</code></td><td align="center">存在属性 <code>attr</code> 的元素</td><td align="center"><code>[disabled]</code></td></tr><tr><td align="center"><code>[attr=value]</code></td><td align="center">属性值完全等于 <code>value</code></td><td align="center"><code>[type="text"]</code></td></tr><tr><td align="center"><code>[attr^=value]</code></td><td align="center">属性值以 <code>value</code> 开头</td><td align="center"><code>[href^="https"]</code></td></tr><tr><td align="center"><code>[attr$=value]</code></td><td align="center">属性值以 <code>value</code> 结尾</td><td align="center"><code>[src$=".jpg"]</code></td></tr><tr><td align="center"><code>[attr*=value]</code></td><td align="center">属性值包含 <code>value</code></td><td align="center"><code>[class*="btn"]</code></td></tr><tr><td align="center"><code>[attr~=value]</code></td><td align="center">属性值包含单词 <code>value</code>（空格分隔）</td><td align="center"><code>[class~="active"]</code></td></tr><tr><td align="center"><code>[attr|=value]</code></td><td align="center">属性值等于 <code>value</code> 或 <code>value-</code> 开头</td><td align="center"><code>[lang|="en"]</code></td></tr></tbody></table>
<h3 id="示例" class="heading">示例<a href="#示例" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.eyz6w.css"><script type="module" src="/_astro/ec.0vx5m.js"><\/script><figure class="frame"><figcaption class="header"></figcaption><pre data-language="css"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 选中所有带有 data-type 属性的元素 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">[</span><span style="--0:#875D01;--1:#D19A66">data-type</span><span style="--0:#A626A4;--1:#CD89E1">]</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">border: </span><span style="--0:#875D01;--1:#D19A66">1</span><span style="--0:#875D01;--1:#E6888F">px</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#D19A66">solid</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">gray</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 所有以 "https" 开头的链接 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">a</span><span style="--0:#A626A4;--1:#CD89E1">[</span><span style="--0:#875D01;--1:#D19A66">href</span><span style="--0:#383A42;--1:#ABB2BF">^=</span><span style="--0:#387138;--1:#98C379">'https'</span><span style="--0:#A626A4;--1:#CD89E1">]</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">color: </span><span style="--0:#875D01;--1:#D19A66">green</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 所有 .jpg 或 .png 图片 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">12</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">13</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">img</span><span style="--0:#A626A4;--1:#CD89E1">[</span><span style="--0:#875D01;--1:#D19A66">src</span><span style="--0:#383A42;--1:#ABB2BF">$=</span><span style="--0:#387138;--1:#98C379">'.jpg'</span><span style="--0:#A626A4;--1:#CD89E1">]</span><span style="--0:#A626A4;--1:#ABB2BF">,</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">14</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">img</span><span style="--0:#A626A4;--1:#CD89E1">[</span><span style="--0:#875D01;--1:#D19A66">src</span><span style="--0:#383A42;--1:#ABB2BF">$=</span><span style="--0:#387138;--1:#98C379">'.png'</span><span style="--0:#A626A4;--1:#CD89E1">]</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">15</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">border-radius: </span><span style="--0:#875D01;--1:#D19A66">4</span><span style="--0:#875D01;--1:#E6888F">px</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">16</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">17</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">18</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* class 包含 "warning" 单词的元素 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">19</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">[</span><span style="--0:#875D01;--1:#D19A66">class</span><span style="--0:#383A42;--1:#ABB2BF">~=</span><span style="--0:#387138;--1:#98C379">'warning'</span><span style="--0:#A626A4;--1:#CD89E1">]</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">20</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">background-color: </span><span style="--1:#D19A66"><span style="--0:#875D01">#</span><span style="--0:#016C9A">ffcccc</span></span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">21</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="/* 选中所有带有 data-type 属性的元素 */[data-type] {  border: 1px solid gray;}/* 所有以 &#x22;https&#x22; 开头的链接 */a[href^=&#x27;https&#x27;] {  color: green;}/* 所有 .jpg 或 .png 图片 */img[src$=&#x27;.jpg&#x27;],img[src$=&#x27;.png&#x27;] {  border-radius: 4px;}/* class 包含 &#x22;warning&#x22; 单词的元素 */[class~=&#x27;warning&#x27;] {  background-color: #ffcccc;}"><div></div></button></div></figure></div>
<h2 id="组合选择器" class="heading">组合选择器<a href="#组合选择器" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>组合选择器用于表达元素之间的结构关系</p>



































<table><thead><tr><th align="center">组合器</th><th align="center">语法</th><th align="center">说明</th><th align="center">示例</th></tr></thead><tbody><tr><td align="center">后代选择器</td><td align="center"><code>A B</code></td><td align="center">A 的后代 B （匹配所有层级）</td><td align="center"><code>ul li</code></td></tr><tr><td align="center">子代选择器</td><td align="center"><code>A > B</code></td><td align="center">A 的直接子元素 B</td><td align="center"><code>nav > ul</code></td></tr><tr><td align="center">相邻兄弟选择器</td><td align="center"><code>A + B</code></td><td align="center">紧接在 A 后面的兄弟元素 B</td><td align="center"><code>h2 + p</code></td></tr><tr><td align="center">通用兄弟选择器</td><td align="center"><code>A ~ B</code></td><td align="center">A 之后的所有兄弟元素 B</td><td align="center"><code>h2 ~ p</code></td></tr></tbody></table>
<h3 id="示例-1" class="heading">示例<a href="#示例-1" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">css</span></figcaption><pre data-language="css"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 所有直接子列表项 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#875D01;--1:#D19A66">.menu</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#383A42;--1:#ABB2BF">></span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#AF4238;--1:#E6888F">li</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">display: </span><span style="--0:#383A42;--1:#D19A66">inline-block</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 紧跟在标题后的第一个段落 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">h2</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#383A42;--1:#ABB2BF">+</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">font-size: </span><span style="--0:#875D01;--1:#D19A66">1.2</span><span style="--0:#875D01;--1:#E6888F">em</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">font-weight: </span><span style="--0:#383A42;--1:#D19A66">bold</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">12</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 所有在警告信息之后的同级信息框 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">13</div></div><div class="code"><span style="--0:#875D01;--1:#D19A66">.alert</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#383A42;--1:#ABB2BF">~</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#875D01;--1:#D19A66">.info</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">14</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">margin-top: </span><span style="--0:#875D01;--1:#D19A66">1</span><span style="--0:#875D01;--1:#E6888F">rem</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">15</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="/* 所有直接子列表项 */.menu > li {  display: inline-block;}/* 紧跟在标题后的第一个段落 */h2 + p {  font-size: 1.2em;  font-weight: bold;}/* 所有在警告信息之后的同级信息框 */.alert ~ .info {  margin-top: 1rem;}"><div></div></button></div></figure></div>
<h2 id="伪类选择器" class="heading">伪类选择器<a href="#伪类选择器" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>伪类选择器基于元素的状态或位置进行选择。</p>
<h3 id="动态伪类" class="heading">动态伪类<a href="#动态伪类" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>





































<table><thead><tr><th align="left">伪类</th><th align="left">说明</th></tr></thead><tbody><tr><td align="left"><code>:link</code></td><td align="left">未访问的链接</td></tr><tr><td align="left"><code>:visited</code></td><td align="left">已访问的链接</td></tr><tr><td align="left"><code>:hover</code></td><td align="left">鼠标悬停的元素</td></tr><tr><td align="left"><code>:active</code></td><td align="left">激活（按下）状态</td></tr><tr><td align="left"><code>:focus</code></td><td align="left">获得焦点</td></tr><tr><td align="left"><code>:focus-visible</code></td><td align="left">通过键盘等可见方式获得焦点（现代）</td></tr><tr><td align="left"><code>:focus-within</code></td><td align="left">元素自身或其内部元素获得焦点</td></tr></tbody></table>
<h3 id="结构伪类" class="heading">结构伪类<a href="#结构伪类" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>





















































<table><thead><tr><th align="left">伪类</th><th align="left">说明</th></tr></thead><tbody><tr><td align="left"><code>:root</code></td><td align="left">根元素（<code>&#x3C;html></code>）</td></tr><tr><td align="left"><code>:empty</code></td><td align="left">没有子元素（包括文本节点）</td></tr><tr><td align="left"><code>:first-child</code></td><td align="left">父元素的第一个子元素</td></tr><tr><td align="left"><code>:last-child</code></td><td align="left">父元素的最后一个子元素</td></tr><tr><td align="left"><code>:nth-child(n)</code></td><td align="left">父元素的第 n 个子元素</td></tr><tr><td align="left"><code>:nth-last-child(n)</code></td><td align="left">从末尾数第 n 个子元素</td></tr><tr><td align="left"><code>:first-of-type</code></td><td align="left">同类型元素中的第一个</td></tr><tr><td align="left"><code>:last-of-type</code></td><td align="left">同类型元素中的最后一个</td></tr><tr><td align="left"><code>:nth-of-type(n)</code></td><td align="left">同类型元素中的第 n 个</td></tr><tr><td align="left"><code>:only-child</code></td><td align="left">父元素唯一的子元素</td></tr><tr><td align="left"><code>:only-of-type</code></td><td align="left">父元素中唯一该类型的子元素</td></tr></tbody></table>
<h3 id="其他常用伪类" class="heading">其他常用伪类<a href="#其他常用伪类" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>













































<table><thead><tr><th align="left">伪类</th><th align="left">说明</th></tr></thead><tbody><tr><td align="left"><code>:not(selector)</code></td><td align="left">不匹配指定选择器的元素</td></tr><tr><td align="left"><code>:is(selector-list)</code></td><td align="left">匹配列表中的任意选择器（优先级取最高）</td></tr><tr><td align="left"><code>:where(selector-list)</code></td><td align="left">同 <code>:is</code>，但优先级始终为 0</td></tr><tr><td align="left"><code>:has(selector)</code></td><td align="left">包含满足选择器的后代元素（关系伪类）</td></tr><tr><td align="left"><code>:target</code></td><td align="left">当前锚点目标元素</td></tr><tr><td align="left"><code>:enabled</code> / <code>:disabled</code></td><td align="left">表单元素的启用 / 禁用状态</td></tr><tr><td align="left"><code>:checked</code></td><td align="left">选中状态的单选框 / 复选框</td></tr><tr><td align="left"><code>:indeterminate</code></td><td align="left">不确定状态（如半选复选框）</td></tr><tr><td align="left"><code>:valid</code> / <code>:invalid</code></td><td align="left">表单输入验证状态</td></tr></tbody></table>
<h3 id="示例-2" class="heading">示例<a href="#示例-2" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">css</span></figcaption><pre data-language="css"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 悬停时的按钮 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">button</span><span style="--0:#875D01;--1:#56B6C2">:hover</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">background-color: </span><span style="--1:#D19A66"><span style="--0:#875D01">#</span><span style="--0:#016C9A">0056b3</span></span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 列表中的第 3 项 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">li</span><span style="--0:#875D01;--1:#56B6C2">:nth-child</span><span style="--0:#A626A4;--1:#CD89E1">(</span><span style="--0:#875D01;--1:#D19A66">3</span><span style="--0:#A626A4;--1:#CD89E1">)</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">font-weight: </span><span style="--0:#383A42;--1:#D19A66">bold</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 每隔一行改变背景 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">12</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">tr</span><span style="--0:#875D01;--1:#56B6C2">:nth-child</span><span style="--1:#CD89E1"><span style="--0:#A626A4">(</span><span style="--0:#875D01">even</span><span style="--0:#A626A4">)</span></span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">13</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">background-color: </span><span style="--1:#D19A66"><span style="--0:#875D01">#</span><span style="--0:#016C9A">f2f2f2</span></span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">14</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">15</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">16</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 所有不是第一个子元素的段落 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">17</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#875D01;--1:#56B6C2">:not</span><span style="--0:#A626A4;--1:#CD89E1">(</span><span style="--0:#875D01;--1:#56B6C2">:first-child</span><span style="--0:#A626A4;--1:#CD89E1">)</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">18</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">margin-top: </span><span style="--0:#875D01;--1:#D19A66">0</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">19</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">20</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">21</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 父元素内含有图片的 div */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">22</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#875D01;--1:#56B6C2">:has</span><span style="--0:#A626A4;--1:#CD89E1">(</span><span style="--0:#AF4238;--1:#E6888F">img</span><span style="--0:#A626A4;--1:#CD89E1">)</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">23</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">border: </span><span style="--0:#875D01;--1:#D19A66">2</span><span style="--0:#875D01;--1:#E6888F">px</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#D19A66">solid</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--1:#D19A66"><span style="--0:#875D01">#</span><span style="--0:#016C9A">ccc</span></span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">24</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="/* 悬停时的按钮 */button:hover {  background-color: #0056b3;}/* 列表中的第 3 项 */li:nth-child(3) {  font-weight: bold;}/* 每隔一行改变背景 */tr:nth-child(even) {  background-color: #f2f2f2;}/* 所有不是第一个子元素的段落 */p:not(:first-child) {  margin-top: 0;}/* 父元素内含有图片的 div */div:has(img) {  border: 2px solid #ccc;}"><div></div></button></div></figure></div>
<h2 id="伪元素选择器" class="heading">伪元素选择器<a href="#伪元素选择器" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>伪元素用于选择元素的特定部分，通常以双冒号 <code>::</code> 表示（CSS3规范），单冒号也能兼容，但推荐双冒号。</p>





































<table><thead><tr><th align="left">伪元素</th><th align="left">说明</th></tr></thead><tbody><tr><td align="left"><code>::before</code></td><td align="left">在元素的内容之前插入生成内容</td></tr><tr><td align="left"><code>::after</code></td><td align="left">在元素的内容之后插入生成内容</td></tr><tr><td align="left"><code>::first-line</code></td><td align="left">块级元素的第一行</td></tr><tr><td align="left"><code>::first-letter</code></td><td align="left">块级元素的第一个字母</td></tr><tr><td align="left"><code>::selection</code></td><td align="left">用户选中的文本部分</td></tr><tr><td align="left"><code>::placeholder</code></td><td align="left">输入框的占位文本</td></tr><tr><td align="left"><code>::marker</code></td><td align="left">列表项的标志（如圆点、数字）</td></tr></tbody></table>
<h3 id="示例-3" class="heading">示例<a href="#示例-3" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">css</span></figcaption><pre data-language="css"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 添加前缀 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#875D01;--1:#D19A66">.link</span><span style="--0:#875D01;--1:#56B6C2">::before</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">content: </span><span style="--0:#387138;--1:#98C379">'🔗 '</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 首行样式 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">article</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#875D01;--1:#56B6C2">::first-line</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">font-variant: </span><span style="--0:#383A42;--1:#D19A66">small-caps</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">font-weight: </span><span style="--0:#383A42;--1:#D19A66">bold</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">12</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 首字母下沉 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">13</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#875D01;--1:#56B6C2">::first-letter</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">14</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">font-size: </span><span style="--0:#875D01;--1:#D19A66">2</span><span style="--0:#875D01;--1:#E6888F">em</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">15</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">float: </span><span style="--0:#383A42;--1:#D19A66">left</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">16</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">margin-right: </span><span style="--0:#875D01;--1:#D19A66">0.2</span><span style="--0:#875D01;--1:#E6888F">em</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">17</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="/* 添加前缀 */.link::before {  content: &#x27;🔗 &#x27;;}/* 首行样式 */article p::first-line {  font-variant: small-caps;  font-weight: bold;}/* 首字母下沉 */p::first-letter {  font-size: 2em;  float: left;  margin-right: 0.2em;}"><div></div></button></div></figure></div>
<h2 id="逻辑组合选择器" class="heading">逻辑组合选择器<a href="#逻辑组合选择器" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>现代的 CSS 提供了几个强大的组合选择器用以简化复杂选择器列表的书写。</p>
<h3 id="is" class="heading"><code>:is()</code><a href="#is" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p><code>:is()</code> 接受一个选择器列表，匹配其中任意一个。之前使用 <code>:matches()</code>，现在统一为 <code>:is()</code> 。它简化了冗长的选择器列表，并且优先级取其内部选择器中的最高优先级。</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">css</span></figcaption><pre data-language="css"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 旧写法 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">header</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#AF4238;--1:#E6888F">nav</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#AF4238;--1:#E6888F">ul</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#AF4238;--1:#E6888F">li</span><span style="--0:#A626A4;--1:#ABB2BF">,</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">footer</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#AF4238;--1:#E6888F">nav</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#AF4238;--1:#E6888F">ul</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#AF4238;--1:#E6888F">li</span><span style="--0:#A626A4;--1:#ABB2BF">,</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">aside</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#AF4238;--1:#E6888F">ul</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#AF4238;--1:#E6888F">li</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">margin: </span><span style="--0:#875D01;--1:#D19A66">0</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 使用 :is() */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--0:#875D01;--1:#56B6C2">:is</span><span style="--0:#A626A4;--1:#CD89E1">(</span><span style="--0:#AF4238;--1:#E6888F">header</span><span style="--0:#A626A4;--1:#ABB2BF">,</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#AF4238;--1:#E6888F">footer</span><span style="--0:#A626A4;--1:#ABB2BF">,</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#AF4238;--1:#E6888F">aside</span><span style="--0:#A626A4;--1:#CD89E1">) </span><span style="--0:#AF4238;--1:#E6888F">nav</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#AF4238;--1:#E6888F">ul</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#AF4238;--1:#E6888F">li</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">margin: </span><span style="--0:#875D01;--1:#D19A66">0</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="/* 旧写法 */header nav ul li,footer nav ul li,aside ul li {  margin: 0;}/* 使用 :is() */:is(header, footer, aside) nav ul li {  margin: 0;}"><div></div></button></div></figure></div>
<h3 id="where" class="heading"><code>:where()</code><a href="#where" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p><code>:where()</code> 语法与 <code>:is()</code> 完全相同，区别在于其优先级始终为 0（即不影响权重），非常适合用于重置样式或低优先级的通用样式。</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">css</span></figcaption><pre data-language="css"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 低优先级，方便后续覆盖 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#875D01;--1:#56B6C2">:where</span><span style="--0:#A626A4;--1:#CD89E1">(</span><span style="--0:#AF4238;--1:#E6888F">header</span><span style="--0:#A626A4;--1:#ABB2BF">,</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#AF4238;--1:#E6888F">footer</span><span style="--0:#A626A4;--1:#ABB2BF">,</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#AF4238;--1:#E6888F">aside</span><span style="--0:#A626A4;--1:#CD89E1">) </span><span style="--0:#AF4238;--1:#E6888F">nav</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#AF4238;--1:#E6888F">ul</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#AF4238;--1:#E6888F">li</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">margin: </span><span style="--0:#875D01;--1:#D19A66">0</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="/* 低优先级，方便后续覆盖 */:where(header, footer, aside) nav ul li {  margin: 0;}"><div></div></button></div></figure></div>
<h3 id="has" class="heading"><code>:has()</code><a href="#has" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p><code>:has()</code> 是关系伪类，表示包含某个元素的元素。它被称为“父级选择器”，实际上可以向上、向下、兄弟关系查询。</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">css</span></figcaption><pre data-language="css"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 包含图片的 figure 元素 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">figure</span><span style="--0:#875D01;--1:#56B6C2">:has</span><span style="--0:#A626A4;--1:#CD89E1">(</span><span style="--0:#AF4238;--1:#E6888F">img</span><span style="--0:#A626A4;--1:#CD89E1">)</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">background: </span><span style="--1:#D19A66"><span style="--0:#875D01">#</span><span style="--0:#016C9A">f9f9f9</span></span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 包含 .error 输入的 form 表单 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">form</span><span style="--0:#875D01;--1:#56B6C2">:has</span><span style="--0:#A626A4;--1:#CD89E1">(</span><span style="--0:#AF4238;--1:#E6888F">input</span><span style="--0:#875D01;--1:#D19A66">.error</span><span style="--0:#A626A4;--1:#CD89E1">)</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">border: </span><span style="--0:#875D01;--1:#D19A66">1</span><span style="--0:#875D01;--1:#E6888F">px</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#D19A66">solid</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">red</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 后面跟着兄弟警告框的 label */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">12</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">label</span><span style="--0:#875D01;--1:#56B6C2">:has</span><span style="--0:#A626A4;--1:#CD89E1">(</span><span style="--0:#383A42;--1:#ABB2BF">+</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#875D01;--1:#D19A66">.warning</span><span style="--0:#A626A4;--1:#CD89E1">)</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">13</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">color: </span><span style="--0:#875D01;--1:#D19A66">orange</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">14</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="/* 包含图片的 figure 元素 */figure:has(img) {  background: #f9f9f9;}/* 包含 .error 输入的 form 表单 */form:has(input.error) {  border: 1px solid red;}/* 后面跟着兄弟警告框的 label */label:has(+ .warning) {  color: orange;}"><div></div></button></div></figure></div>
<h3 id="not" class="heading"><code>:not()</code><a href="#not" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p><code>:not()</code> 用于排除满足指定选择器的元素。可以接受逗号分隔列表。</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">css</span></figcaption><pre data-language="css"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 不是 .special 类的所有按钮 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">button</span><span style="--0:#875D01;--1:#56B6C2">:not</span><span style="--0:#A626A4;--1:#CD89E1">(</span><span style="--0:#875D01;--1:#D19A66">.special</span><span style="--0:#A626A4;--1:#CD89E1">)</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">background: </span><span style="--0:#875D01;--1:#D19A66">gray</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 不是第一项也不是最后一项的列表项 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">li</span><span style="--0:#875D01;--1:#56B6C2">:not</span><span style="--0:#A626A4;--1:#CD89E1">(</span><span style="--0:#875D01;--1:#56B6C2">:first-child</span><span style="--0:#A626A4;--1:#ABB2BF">,</span><span style="--0:#A626A4;--1:#CD89E1"> </span><span style="--0:#875D01;--1:#56B6C2">:last-child</span><span style="--0:#A626A4;--1:#CD89E1">)</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">border-bottom: </span><span style="--0:#875D01;--1:#D19A66">1</span><span style="--0:#875D01;--1:#E6888F">px</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#D19A66">solid</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--1:#D19A66"><span style="--0:#875D01">#</span><span style="--0:#016C9A">ccc</span></span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="/* 不是 .special 类的所有按钮 */button:not(.special) {  background: gray;}/* 不是第一项也不是最后一项的列表项 */li:not(:first-child, :last-child) {  border-bottom: 1px solid #ccc;}"><div></div></button></div></figure></div>
<h3 id="焦点相关伪类" class="heading">焦点相关伪类<a href="#焦点相关伪类" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>





















<table><thead><tr><th align="left">伪类</th><th align="left">说明</th></tr></thead><tbody><tr><td align="left"><code>:focus</code></td><td align="left">元素获得焦点时（通常伴随轮廓）</td></tr><tr><td align="left"><code>:focus-visible</code></td><td align="left">元素通过键盘导航等方式获得焦点时（浏览器决定是否显示轮廓）</td></tr><tr><td align="left"><code>:focus-within</code></td><td align="left">元素自身或其内部元素获得焦点时</td></tr></tbody></table>
<h3 id="示例-4" class="heading">示例<a href="#示例-4" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">css</span></figcaption><pre data-language="css"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 键盘焦点样式（不干扰鼠标点击） */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">button</span><span style="--0:#875D01;--1:#56B6C2">:focus-visible</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">outline: </span><span style="--0:#875D01;--1:#D19A66">2</span><span style="--0:#875D01;--1:#E6888F">px</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#D19A66">solid</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">blue</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/* 当表单内有焦点时，高亮整个表单 */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">form</span><span style="--0:#875D01;--1:#56B6C2">:focus-within</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">background: </span><span style="--1:#D19A66"><span style="--0:#875D01">#</span><span style="--0:#016C9A">ffffe0</span></span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="/* 键盘焦点样式（不干扰鼠标点击） */button:focus-visible {  outline: 2px solid blue;}/* 当表单内有焦点时，高亮整个表单 */form:focus-within {  background: #ffffe0;}"><div></div></button></div></figure></div>
<h3 id="选择器的优先级与性能" class="heading">选择器的优先级与性能<a href="#选择器的优先级与性能" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<ul>
<li>
<p>优先级：内联样式 > ID > 类/伪类/属性 > 元素/伪元素。</p>
<p><code>:is()</code> 取最高优先级，<code>:where()</code> 优先级为 0 。</p>
</li>
<li>
<p>性能：过于复杂的选择器（如多层嵌套、通用组合器）会增加匹配成本，但在现代浏览器中影响很小。</p>
<p>建议保持选择器的简洁，避免使用 <code>*</code>。</p>
</li>
</ul>
<h2 id="总结" class="heading">总结<a href="#总结" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>








































<table><thead><tr><th align="left">类别</th><th align="left">核心选择器</th><th align="left">应用场景</th></tr></thead><tbody><tr><td align="left">属性选择器</td><td align="left"><code>[attr^=value]</code>等</td><td align="left">根据属性值灵活匹配，如链接、表单元素</td></tr><tr><td align="left">组合器</td><td align="left"><code>></code> <code>+</code> <code>~</code></td><td align="left">表达层级与兄弟关系</td></tr><tr><td align="left">伪类</td><td align="left"><code>:nth-child()</code> <code>:not()</code> <code>:has()</code></td><td align="left">基于状态、位置、关系的复杂匹配</td></tr><tr><td align="left">伪元素</td><td align="left"><code>::before</code> <code>::first-line</code></td><td align="left">插入内容、装饰特定文本</td></tr><tr><td align="left">逻辑组合</td><td align="left"><code>:is()</code> <code>:where()</code></td><td align="left">简化选择器列表，控制优先级</td></tr><tr><td align="left">焦点类</td><td align="left"><code>:focus-visible</code> <code>:focus-within</code></td><td align="left">提升可访问性，实现更好的交互反馈</td></tr></tbody></table>`,t={title:"CSS 选择器高级用法",author:"NeoWangKing",date:"2026-03-28T13:03:28.000Z",lastMod:"2026-03-28T13:03:28.000Z",tags:["CSS","前端","选择器","样式"],category:["前端开发","CSS"],summary:"本文系统介绍 CSS 选择器的高级用法，包括属性选择器、组合器、伪类选择器、伪元素选择器，以及现代 CSS 提供的逻辑组合选择器（:is, :where, :has, :not）和焦点相关伪类，帮助你更精准、更高效地控制页面样式。",comments:!0,draft:!1,readingMinutes:8.54,words:1708},l="/home/runner/work/blog-source-code/blog-source-code/src/content/posts/front-end/CSS/CSS-Selectors-Advanced.md",c=void 0;function F(){return`
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
`}function D(){return n}function b(){return[{depth:2,slug:"概述",text:"概述"},{depth:2,slug:"属性选择器",text:"属性选择器"},{depth:3,slug:"基础属性选择器",text:"基础属性选择器"},{depth:3,slug:"示例",text:"示例"},{depth:2,slug:"组合选择器",text:"组合选择器"},{depth:3,slug:"示例-1",text:"示例"},{depth:2,slug:"伪类选择器",text:"伪类选择器"},{depth:3,slug:"动态伪类",text:"动态伪类"},{depth:3,slug:"结构伪类",text:"结构伪类"},{depth:3,slug:"其他常用伪类",text:"其他常用伪类"},{depth:3,slug:"示例-2",text:"示例"},{depth:2,slug:"伪元素选择器",text:"伪元素选择器"},{depth:3,slug:"示例-3",text:"示例"},{depth:2,slug:"逻辑组合选择器",text:"逻辑组合选择器"},{depth:3,slug:"is",text:":is()"},{depth:3,slug:"where",text:":where()"},{depth:3,slug:"has",text:":has()"},{depth:3,slug:"not",text:":not()"},{depth:3,slug:"焦点相关伪类",text:"焦点相关伪类"},{depth:3,slug:"示例-4",text:"示例"},{depth:3,slug:"选择器的优先级与性能",text:"选择器的优先级与性能"},{depth:2,slug:"总结",text:"总结"}]}const C=a((v,p,r)=>{const{layout:o,...s}=t;return s.file=l,s.url=c,i`${e()}${d(n)}`});export{C as Content,D as compiledContent,C as default,l as file,t as frontmatter,b as getHeadings,F as rawContent,c as url};
