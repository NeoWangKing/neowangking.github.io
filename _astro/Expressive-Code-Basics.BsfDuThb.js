import{c as e,r as n,m as i}from"./render-template.COflMQ4u.js";import{u as d}from"./PostTagsList.CjOK4Y_Q.js";import"./astro/assets-service.DLSo0gp6.js";import"./jsx-runtime.-xR-R7lh.js";import"./index.SeRWem-E.js";import"./_commonjsHelpers.BosuxZz1.js";import"./clsx.B-dksMZM.js";const a=`<h2 id="expressive-code-简介" class="heading">Expressive Code 简介<a href="#expressive-code-简介" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p><a href="https://expressive-code.com/" rel="noopener noreferrer" target="_blank">Expressive Code</a><i class="iconfont icon-external-link"></i> 是一个用于在网页上展示源代码的引擎，它基于 VS Code 同款的 Shiki 语法高亮引擎，提供精确的语法高亮，同时支持代码注释、差异高亮、编辑器/终端窗口框架等丰富功能。</p>
<p>在 Astro 框架中，Expressive Code 通过 <code>astro-expressive-code</code> 集成包提供支持，可以自动渲染 Markdown/MDX 文件中的代码块，并提供 <code>&#x3C;Code></code> 组件用于动态渲染代码。</p>
<p>本文只涉及一些常见的配置方法和用法，更加详细的使用说明，请查阅<a href="https://expressive-code.com/installation/" rel="noopener noreferrer" target="_blank">官方文档</a><i class="iconfont icon-external-link"></i></p>
<h2 id="安装与配置" class="heading">安装与配置<a href="#安装与配置" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<h3 id="安装依赖" class="heading">安装依赖<a href="#安装依赖" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>在 Astro 项目中安装 Expressive Code 集成：</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.eyz6w.css"><script type="module" src="/_astro/ec.0vx5m.js"><\/script><figure class="frame is-terminal"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">npm</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">install</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">astro-expressive-code</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"># 或</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">yarn</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">add</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">astro-expressive-code</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"># 或</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">pnpm</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">add</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">astro-expressive-code</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="npm install astro-expressive-codeyarn add astro-expressive-codepnpm add astro-expressive-code"><div></div></button></div></figure></div>
<h3 id="配置-astro" class="heading">配置 astro<a href="#配置-astro" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<h4 id="直接集成" class="heading">直接集成<a href="#直接集成" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h4>
<p>在 <code>astro.config.mathrmjs</code> 中添加 Expressive Code 集成：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">astro.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">defineConfig</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'astro/config'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#AF4238;--1:#E6888F">expressiveCode</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'astro-expressive-code'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">export</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#AF4238;--1:#CD89E1">default</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">defineConfig</span><span style="--0:#383A42;--1:#ABB2BF">({</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">  </span><span style="--0:#AF4238;--1:#E6888F">integrations</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> [</span></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent">    </span><span style="--0:#3360C1;--1:#61AFEF">expressiveCode</span><span style="--0:#383A42;--1:#ABB2BF">({</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent">      </span><span style="--0:#515255;--0fs:italic;--1:#b3b6bb;--1fs:italic">// 配置选项</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent">      </span><span style="--0:#8b352d;--1:#eca3a8">themes</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> [</span></span><span style="--0:#2e5c2e;--1:#98C379">'github-dark'</span><span style="--0:#383A42;--1:#b0b6c3">, </span><span style="--0:#2e5c2e;--1:#98C379">'github-light'</span><span style="--0:#383A42;--1:#b0b6c3">],</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span class="indent">      </span><span style="--0:#8b352d;--1:#eca3a8">styleOverrides</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> {</span></span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span class="indent">        </span><span style="--0:#8b352d;--1:#eca3a8">borderRadius</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> </span></span><span style="--0:#2e5c2e;--1:#98C379">'0.5rem'</span><span style="--0:#383A42;--1:#b0b6c3">,</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span style="--1:#b0b6c3"><span class="indent"><span style="--0:#383A42">      </span></span><span style="--0:#383A42">},</span></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">12</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">}),</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">13</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">],</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">14</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">})</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="import { defineConfig } from &#x27;astro/config&#x27;import expressiveCode from &#x27;astro-expressive-code&#x27;export default defineConfig({  integrations: [    expressiveCode({      // 配置选项      themes: [&#x27;github-dark&#x27;, &#x27;github-light&#x27;],      styleOverrides: {        borderRadius: &#x27;0.5rem&#x27;,      },    }),  ],})"><div></div></button></div></figure></div>
<h4 id="使用配置文件" class="heading">使用配置文件<a href="#使用配置文件" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h4>
<p>在项目根目录下创建 <code>ec.config.mjs</code> 文件单独存放配置信息：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">ec.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">defineEcConfig</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'astro-expressive-code'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">export</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#AF4238;--1:#CD89E1">default</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">defineEcConfig</span><span style="--0:#383A42;--1:#ABB2BF">({</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">  </span><span style="--0:#515255;--0fs:italic;--1:#b3b6bb;--1fs:italic">// 配置选项</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">  </span><span style="--0:#8b352d;--1:#eca3a8">themes</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> [</span></span><span style="--0:#2e5c2e;--1:#98C379">'github-dark'</span><span style="--0:#383A42;--1:#b0b6c3">, </span><span style="--0:#2e5c2e;--1:#98C379">'github-light'</span><span style="--0:#383A42;--1:#b0b6c3">],</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent">  </span><span style="--0:#8b352d;--1:#eca3a8">styleOverrides</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> {</span></span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent">    </span><span style="--0:#8b352d;--1:#eca3a8">borderRadius</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> </span></span><span style="--0:#2e5c2e;--1:#98C379">'0.5rem'</span><span style="--0:#383A42;--1:#b0b6c3">,</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span style="--1:#b0b6c3"><span class="indent"><span style="--0:#383A42">  </span></span><span style="--0:#383A42">},</span></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">})</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="import { defineEcConfig } from &#x27;astro-expressive-code&#x27;export default defineEcConfig({  // 配置选项  themes: [&#x27;github-dark&#x27;, &#x27;github-light&#x27;],  styleOverrides: {    borderRadius: &#x27;0.5rem&#x27;,  },})"><div></div></button></div></figure></div>
<blockquote>
<p>两种方法的配置语法几乎一致，接下来我们默认按照使用配置文件的方式来举例</p>
</blockquote>
<h2 id="基础的代码块用法" class="heading">基础的代码块用法<a href="#基础的代码块用法" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<h3 id="markdown-代码块用法" class="heading">Markdown 代码块用法<a href="#markdown-代码块用法" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>在 <code>Markdown/MDX</code> 文件中，使用标准的代码块语法即可自动获得语法高亮：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">Markdown/MDX</span></figcaption><pre data-language="markdown"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`javascript</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">function</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">hello</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">name</span><span style="--0:#383A42;--1:#ABB2BF">) {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent"><span style="--0:#383A42">  </span></span><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">\`Hello, </span><span style="--0:#C71242;--1:#CD89E1">\${</span><span style="--0:#383A42;--1:#E6888F">name</span><span style="--0:#C71242;--1:#CD89E1">}</span><span style="--0:#387138;--1:#98C379">!\`</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x60;&#x60;&#x60;javascriptfunction hello(name) {  console.log(&#x60;Hello, \${name}!&#x60;)}&#x60;&#x60;&#x60;"><div></div></button></div></figure></div>
<p>渲染效果如下：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">javascript</span></figcaption><pre data-language="javascript"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">function</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">hello</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">name</span><span style="--0:#383A42;--1:#ABB2BF">) {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent"><span style="--0:#383A42">  </span></span><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">\`Hello, </span><span style="--0:#C71242;--1:#CD89E1">\${</span><span style="--0:#383A42;--1:#E6888F">name</span><span style="--0:#C71242;--1:#CD89E1">}</span><span style="--0:#387138;--1:#98C379">!\`</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="function hello(name) {  console.log(&#x60;Hello, \${name}!&#x60;)}"><div></div></button></div></figure></div>
<h3 id="指定语言的语法高亮" class="heading">指定语言的语法高亮<a href="#指定语言的语法高亮" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>Expressive Code 支持超过 100 种编程语言，只需在开头的代码围栏后添加语言标识：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">markdown</span></figcaption><pre data-language="markdown"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`python</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">def</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">fibonacci</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#D19A66;--1fs:italic">n</span><span style="--0:#383A42;--1:#ABB2BF">):</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent">    </span><span style="--0:#A626A4;--1:#CD89E1">if</span><span style="--0:#383A42;--1:#ABB2BF"> n </span><span style="--0:#383A42;--1:#56B6C2">&#x3C;=</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">1</span><span style="--0:#383A42;--1:#ABB2BF">:</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">        </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> n</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">    </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#61AFEF">fibonacci</span><span style="--0:#383A42;--1:#ABB2BF">(n</span><span style="--0:#383A42;--1:#56B6C2">-</span><span style="--0:#875D01;--1:#D19A66">1</span><span style="--0:#383A42;--1:#ABB2BF">) </span><span style="--0:#383A42;--1:#56B6C2">+</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#61AFEF">fibonacci</span><span style="--0:#383A42;--1:#ABB2BF">(n</span><span style="--0:#383A42;--1:#56B6C2">-</span><span style="--0:#875D01;--1:#D19A66">2</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x60;&#x60;&#x60;pythondef fibonacci(n):    if n <= 1:        return n    return fibonacci(n-1) + fibonacci(n-2)&#x60;&#x60;&#x60;"><div></div></button></div></figure></div>
<p>渲染效果如下：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">python</span></figcaption><pre data-language="python"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">def</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">fibonacci</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#875D01;--1:#D19A66;--1fs:italic">n</span><span style="--0:#383A42;--1:#ABB2BF">):</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent">    </span><span style="--0:#A626A4;--1:#CD89E1">if</span><span style="--0:#383A42;--1:#ABB2BF"> n </span><span style="--0:#383A42;--1:#56B6C2">&#x3C;=</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">1</span><span style="--0:#383A42;--1:#ABB2BF">:</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent">        </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> n</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">    </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#61AFEF">fibonacci</span><span style="--0:#383A42;--1:#ABB2BF">(n</span><span style="--0:#383A42;--1:#56B6C2">-</span><span style="--0:#875D01;--1:#D19A66">1</span><span style="--0:#383A42;--1:#ABB2BF">) </span><span style="--0:#383A42;--1:#56B6C2">+</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#61AFEF">fibonacci</span><span style="--0:#383A42;--1:#ABB2BF">(n</span><span style="--0:#383A42;--1:#56B6C2">-</span><span style="--0:#875D01;--1:#D19A66">2</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="def fibonacci(n):    if n <= 1:        return n    return fibonacci(n-1) + fibonacci(n-2)"><div></div></button></div></figure></div>
<blockquote>
<p>Expressive Code 使用 Shiki 作为语法高亮的解释器，可以访问 Shiki 的<a href="https://shiki.style/guide/" rel="noopener noreferrer" target="_blank">官方文档</a><i class="iconfont icon-external-link"></i>查看其默认<a href="https://shiki.style/languages" rel="noopener noreferrer" target="_blank">支持的所有内置语言</a><i class="iconfont icon-external-link"></i></p>
</blockquote>
<h3 id="代码块标题" class="heading">代码块标题<a href="#代码块标题" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>使用 <code>title</code> 属性为代码块添加标题：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">markdown</span></figcaption><pre data-language="markdown"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`js title="hello.js"</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'Hello, World!'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x60;&#x60;&#x60;js title=&#x22;hello.js&#x22;console.log(&#x27;Hello, World!&#x27;)&#x60;&#x60;&#x60;"><div></div></button></div></figure></div>
<p>渲染效果如下：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">hello.js</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'Hello, World!'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="console.log(&#x27;Hello, World!&#x27;)"><div></div></button></div></figure></div>
<p>而不添加标题属性的渲染效果如下：</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'Hello, World!'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="console.log(&#x27;Hello, World!&#x27;)"><div></div></button></div></figure></div>
<blockquote>
<p>在 Markdown 语法中，有时会通过在第一行添加注释的方式来确定标题</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">markdown</span></figcaption><pre data-language="markdown"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`js</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#515255;--0fs:italic;--1:#b3b6bb;--1fs:italic">//hello.js</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'Hello, World!'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x60;&#x60;&#x60;js//hello.jsconsole.log(&#x27;Hello, World!&#x27;)&#x60;&#x60;&#x60;"><div></div></button></div></figure></div>
<p>渲染效果如下：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">hello.js</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'Hello, World!'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="console.log(&#x27;Hello, World!&#x27;)"><div></div></button></div></figure></div>
</blockquote>
<h3 id="使用-code-组件" class="heading">使用 <code>&#x3C;Code></code> 组件<a href="#使用-code-组件" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>在 <code>.astro</code> 或 <code>.mdx</code> 文件中，可以导入并使用 <code>&#x3C;Code></code> 组件来渲染代码块：</p>
<p>在 <code>.astro</code> 文件中：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">---</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">Code</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'astro-expressive-code'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code">
</div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#8c208a;--1:#d8a3e8">const</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#6e4c01;--1:#E5C07B">codeString</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#01587d;--1:#73c3cc">=</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#2e5c2e;--1:#98C379">\`function add(a, b) {</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#2e5c2e"><span class="indent"><span style="--1:#98C379">  </span></span><span style="--1:#98C379">return a + b;</span></span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--0:#2e5c2e;--1:#98C379">}\`</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">---</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code">
</div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--0:#383A42;--1:#b0b6c3">&#x3C;</span><span style="--0:#6d4b01;--1:#E5C07B">Code</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#6e4c01;--1:#daae84">code</span><span style="--0:#383A42;--1:#b0b6c3">=</span><span style="--0:#a20f36;--1:#d8a3e8">{</span><span style="--0:#383A42;--1:#eca3a8">codeString</span><span style="--0:#a20f36;--1:#d8a3e8">}</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#6e4c01;--1:#daae84">lang</span><span style="--0:#383A42;--1:#b0b6c3">=</span><span style="--0:#2e5c2e;--1:#98C379">"javascript"</span><span style="--0:#383A42;--1:#b0b6c3"> /></span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="---import { Code } from &#x27;astro-expressive-code&#x27;const codeString = &#x60;function add(a, b) {  return a + b;}&#x60;---<Code code={codeString} lang=&#x22;javascript&#x22; />"><div></div></button></div></figure></div>
<p>在 <code>.mdx</code> 文件中：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">mdx</span></figcaption><pre data-language="mdx"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">Code</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'astro-expressive-code'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code">
</div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#383A42;--1:#b0b6c3">&#x3C;</span><span style="--0:#6d4b01;--1:#E5C07B">Code</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#6e4c01;--1:#daae84;--1fs:italic">code</span><span style="--0:#383A42;--1:#73c3cc">=</span><span style="--0:#2e5c2e;--1:#98C379">"console.log('Hello!');"</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#6e4c01;--1:#daae84;--1fs:italic">lang</span><span style="--0:#383A42;--1:#73c3cc">=</span><span style="--0:#2e5c2e;--1:#98C379">"javascript"</span><span style="--0:#383A42;--1:#b0b6c3"> /></span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="import { Code } from &#x27;astro-expressive-code&#x27;<Code code=&#x22;console.log(&#x27;Hello!&#x27;);&#x22; lang=&#x22;javascript&#x22; />"><div></div></button></div></figure></div>
<h3 id="从文件导入代码" class="heading">从文件导入代码<a href="#从文件导入代码" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>除此之外，代码块的内容还可以直接链接到外部文件，即使用 Vite 的 <code>?raw</code> 后缀将代码文件作为字符串导入：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">---</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">Code</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'astro-expressive-code'</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#8c208a;--1:#d8a3e8">import</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#8b352d;--1:#eca3a8">exampleCode</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#8c208a;--1:#d8a3e8">from</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#2e5c2e;--1:#98C379">'./examples/example.js?raw'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">---</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#885D01;--1:#E5C07B">Code</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">code</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#C71242;--1:#CD89E1">{</span><span style="--0:#383A42;--1:#E6888F">exampleCode</span><span style="--0:#C71242;--1:#CD89E1">}</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">lang</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"javascript"</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">title</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"example.js"</span><span style="--0:#383A42;--1:#ABB2BF"> /></span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="---import { Code } from &#x27;astro-expressive-code&#x27;import exampleCode from &#x27;./examples/example.js?raw&#x27;---<Code code={exampleCode} lang=&#x22;javascript&#x22; title=&#x22;example.js&#x22; />"><div></div></button></div></figure></div>
<p><code>&#x3C;Code></code> 组件支持传入以下常用的属性：</p>


















































<table><thead><tr><th align="center">属性</th><th align="center">类型</th><th align="center">说明</th></tr></thead><tbody><tr><td align="center"><code>code</code></td><td align="center"><code>string</code></td><td align="center">代码内容 <strong>（必填）</strong></td></tr><tr><td align="center"><code>lang</code></td><td align="center"><code>string</code></td><td align="center">编程语言标识（用于语法高亮）</td></tr><tr><td align="center"><code>title</code></td><td align="center"><code>string</code></td><td align="center">代码块标题</td></tr><tr><td align="center"><code>frame</code></td><td align="center"><code>'auto'|'code'|'terminal'|'none'</code></td><td align="center">框架类型</td></tr><tr><td align="center"><code>wrap</code></td><td align="center"><code>boolean</code></td><td align="center">是否启用自动换行</td></tr><tr><td align="center"><code>mark</code></td><td align="center"><code>MarkerDefinition[]</code></td><td align="center">普通标记</td></tr><tr><td align="center"><code>ins</code></td><td align="center"><code>MarkerDefinition[]</code></td><td align="center">插入标记（绿色）</td></tr><tr><td align="center"><code>del</code></td><td align="center"><code>MarkerDefinition[]</code></td><td align="center">删除标记（红色）</td></tr></tbody></table>
<h3 id="文本与行标记" class="heading">文本与行标记<a href="#文本与行标记" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>Expressive Code 支持在代码块中标记特定的行或文本片段。</p>
<h4 id="整行标记" class="heading">整行标记<a href="#整行标记" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h4>
<p>在代码块元信息中用 <code>{ }</code> 指定行号来进行标记：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">markdown</span></figcaption><pre data-language="markdown"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`js {2, 4-6}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">function</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">processData</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">data</span><span style="--0:#383A42;--1:#ABB2BF">) {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">if</span><span style="--0:#383A42;--1:#ABB2BF"> (</span><span style="--0:#383A42;--1:#56B6C2">!</span><span style="--0:#383A42;--1:#E6888F">data</span><span style="--0:#383A42;--1:#ABB2BF">) </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">null</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">const</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#E5C07B">result</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#56B6C2">=</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E5C07B">data</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">map</span><span style="--0:#383A42;--1:#ABB2BF">((</span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">item</span><span style="--0:#383A42;--1:#ABB2BF">) </span><span style="--0:#A626A4;--1:#CD89E1">=></span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent">    </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E5C07B">item</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#AF4238;--1:#E6888F">value</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#56B6C2">*</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">2</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">})</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E6888F">result</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x60;&#x60;&#x60;js {2, 4-6}function processData(data) {  if (!data) return null  const result = data.map((item) => {    return item.value * 2  })  return result}&#x60;&#x60;&#x60;"><div></div></button></div></figure></div>
<p>渲染效果如下：</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">function</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">processData</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">data</span><span style="--0:#383A42;--1:#ABB2BF">) {</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent">  </span><span style="--0:#8c208a;--1:#d8a3e8">if</span><span style="--0:#383A42;--1:#b0b6c3"> (</span><span style="--0:#01587d;--1:#73c3cc">!</span><span style="--0:#383A42;--1:#eca3a8">data</span><span style="--0:#383A42;--1:#b0b6c3">) </span><span style="--0:#8c208a;--1:#d8a3e8">return</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#6e4c01;--1:#daae84">null</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code">
</div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">  </span><span style="--0:#8c208a;--1:#d8a3e8">const</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#6e4c01;--1:#E5C07B">result</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#01587d;--1:#73c3cc">=</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#383A42;--1:#E5C07B">data</span><span style="--0:#383A42;--1:#b0b6c3">.</span><span style="--0:#294e9d;--1:#7cbcf2">map</span><span style="--0:#383A42;--1:#b0b6c3">((</span><span style="--0:#383A42;--1:#eca3a8;--1fs:italic">item</span><span style="--0:#383A42;--1:#b0b6c3">) </span><span style="--0:#8c208a;--1:#d8a3e8">=></span><span style="--0:#383A42;--1:#b0b6c3"> {</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">    </span><span style="--0:#8c208a;--1:#d8a3e8">return</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#383A42;--1:#E5C07B">item</span><span style="--0:#383A42;--1:#b0b6c3">.</span><span style="--0:#8b352d;--1:#eca3a8">value</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#01587d;--1:#73c3cc">*</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#6e4c01;--1:#daae84">2</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--1:#b0b6c3"><span class="indent"><span style="--0:#383A42">  </span></span><span style="--0:#383A42">})</span></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E6888F">result</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="function processData(data) {  if (!data) return null  const result = data.map((item) => {    return item.value * 2  })  return result}"><div></div></button></div></figure></div>
<blockquote>
<p>需要注意的是，如果代码块的标题是通过如前所述的第一行注释的方式来设置的，花括号里的行号需要 +1，例如：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">markdown</span></figcaption><pre data-language="markdown"><code><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#b0b6c3">\`\`\`js {5-9}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// ec.config.mjs</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">defineEcConfig</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'astro-expressive-code'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">export</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#AF4238;--1:#CD89E1">default</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">defineEcConfig</span><span style="--0:#383A42;--1:#ABB2BF">({</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent">  </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 配置选项</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent">  </span><span style="--0:#AF4238;--1:#E6888F">themes</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> [</span></span><span style="--0:#387138;--1:#98C379">'github-dark'</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#387138;--1:#98C379">'github-light'</span><span style="--0:#383A42;--1:#ABB2BF">],</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent">  </span><span style="--0:#AF4238;--1:#E6888F">styleOverrides</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> {</span></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span class="indent">    </span><span style="--0:#AF4238;--1:#E6888F">borderRadius</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> </span></span><span style="--0:#387138;--1:#98C379">'0.5rem'</span><span style="--0:#383A42;--1:#ABB2BF">,</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">},</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">})</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">12</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x60;&#x60;&#x60;js {5-9}// ec.config.mjsimport { defineEcConfig } from &#x27;astro-expressive-code&#x27;export default defineEcConfig({  // 配置选项  themes: [&#x27;github-dark&#x27;, &#x27;github-light&#x27;],  styleOverrides: {    borderRadius: &#x27;0.5rem&#x27;,  },})&#x60;&#x60;&#x60;"><div></div></button></div></figure></div>
<p>其渲染效果如下：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">ec.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">defineEcConfig</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'astro-expressive-code'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">export</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#AF4238;--1:#CD89E1">default</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">defineEcConfig</span><span style="--0:#383A42;--1:#ABB2BF">({</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">  </span><span style="--0:#515255;--0fs:italic;--1:#b3b6bb;--1fs:italic">// 配置选项</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">  </span><span style="--0:#8b352d;--1:#eca3a8">themes</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> [</span></span><span style="--0:#2e5c2e;--1:#98C379">'github-dark'</span><span style="--0:#383A42;--1:#b0b6c3">, </span><span style="--0:#2e5c2e;--1:#98C379">'github-light'</span><span style="--0:#383A42;--1:#b0b6c3">],</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent">  </span><span style="--0:#8b352d;--1:#eca3a8">styleOverrides</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> {</span></span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent">    </span><span style="--0:#8b352d;--1:#eca3a8">borderRadius</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> </span></span><span style="--0:#2e5c2e;--1:#98C379">'0.5rem'</span><span style="--0:#383A42;--1:#b0b6c3">,</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span style="--1:#b0b6c3"><span class="indent"><span style="--0:#383A42">  </span></span><span style="--0:#383A42">},</span></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">})</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="import { defineEcConfig } from &#x27;astro-expressive-code&#x27;export default defineEcConfig({  // 配置选项  themes: [&#x27;github-dark&#x27;, &#x27;github-light&#x27;],  styleOverrides: {    borderRadius: &#x27;0.5rem&#x27;,  },})"><div></div></button></div></figure></div>
</blockquote>
<h5 id="标记类型" class="heading">标记类型<a href="#标记类型" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h5>
<p>整行的标记还有两种衍生类型： <code>ins={ }</code> （插入 insert）、 <code>del={ }</code> （删除 delete），例如：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">markdown</span></figcaption><pre data-language="markdown"><code><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#b0b6c3">\`\`\`js ins={2} del={4-5}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">function</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">processData</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">data</span><span style="--0:#383A42;--1:#ABB2BF">) {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">if</span><span style="--0:#383A42;--1:#ABB2BF"> (</span><span style="--0:#383A42;--1:#56B6C2">!</span><span style="--0:#383A42;--1:#E6888F">data</span><span style="--0:#383A42;--1:#ABB2BF">) </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> []</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">const</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#E5C07B">result</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#56B6C2">=</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E5C07B">data</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">map</span><span style="--0:#383A42;--1:#ABB2BF">((</span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">item</span><span style="--0:#383A42;--1:#ABB2BF">) </span><span style="--0:#A626A4;--1:#CD89E1">=></span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent">    </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E5C07B">item</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#AF4238;--1:#E6888F">value</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">})</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E6888F">result</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x60;&#x60;&#x60;js ins={2} del={4-5}function processData(data) {  if (!data) return []  const result = data.map((item) => {    return item.value  })  return result}&#x60;&#x60;&#x60;"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">function</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">processData</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">data</span><span style="--0:#383A42;--1:#ABB2BF">) {</span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent">  </span><span style="--0:#8c208a;--1:#d8a3e8">if</span><span style="--0:#383A42;--1:#b0b6c3"> (</span><span style="--0:#01587d;--1:#72c2cc">!</span><span style="--0:#383A42;--1:#eca3a8">data</span><span style="--0:#383A42;--1:#b0b6c3">) </span><span style="--0:#8c208a;--1:#d8a3e8">return</span><span style="--0:#383A42;--1:#b0b6c3"> []</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code">
</div></div><div class="ec-line highlight del"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">  </span><span style="--0:#891f88;--1:#d7a1e7">const</span><span style="--0:#383A42;--1:#aeb4c1"> </span><span style="--0:#6c4a01;--1:#E5C07B">result</span><span style="--0:#383A42;--1:#aeb4c1"> </span><span style="--0:#01567b;--1:#6ec1cb">=</span><span style="--0:#383A42;--1:#aeb4c1"> </span><span style="--0:#383A42;--1:#E5C07B">data</span><span style="--0:#383A42;--1:#aeb4c1">.</span><span style="--0:#294e9d;--1:#78baf1">map</span><span style="--0:#383A42;--1:#aeb4c1">((</span><span style="--0:#383A42;--1:#eba0a6;--1fs:italic">item</span><span style="--0:#383A42;--1:#aeb4c1">) </span><span style="--0:#891f88;--1:#d7a1e7">=></span><span style="--0:#383A42;--1:#aeb4c1"> {</span></div></div><div class="ec-line highlight del"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">    </span><span style="--0:#891f88;--1:#d7a1e7">return</span><span style="--0:#383A42;--1:#aeb4c1"> </span><span style="--0:#383A42;--1:#E5C07B">item</span><span style="--0:#383A42;--1:#aeb4c1">.</span><span style="--0:#8b352d;--1:#eba0a6">value</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">})</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E6888F">result</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="function processData(data) {  if (!data) return []  const result = data.map((item) => {    return item.value  })  return result}"><div></div></button></div></figure></div>
<h5 id="添加标签" class="heading">添加标签<a href="#添加标签" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h5>
<p>此外，还可以为标记的行添加标签：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">markdown</span></figcaption><pre data-language="markdown"><code><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#b0b6c3">\`\`\`js ins={"新增":2} mark={"关键":4-6}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">function</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">processData</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">data</span><span style="--0:#383A42;--1:#ABB2BF">) {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">if</span><span style="--0:#383A42;--1:#ABB2BF"> (</span><span style="--0:#383A42;--1:#56B6C2">!</span><span style="--0:#383A42;--1:#E6888F">data</span><span style="--0:#383A42;--1:#ABB2BF">) </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">null</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">const</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#E5C07B">result</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#56B6C2">=</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E5C07B">data</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">map</span><span style="--0:#383A42;--1:#ABB2BF">((</span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">item</span><span style="--0:#383A42;--1:#ABB2BF">) </span><span style="--0:#A626A4;--1:#CD89E1">=></span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent">    </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E5C07B">item</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#AF4238;--1:#E6888F">value</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#56B6C2">*</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">2</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">})</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E6888F">result</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x60;&#x60;&#x60;js ins={&#x22;新增&#x22;:2} mark={&#x22;关键&#x22;:4-6}function processData(data) {  if (!data) return null  const result = data.map((item) => {    return item.value * 2  })  return result}&#x60;&#x60;&#x60;"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">function</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">processData</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">data</span><span style="--0:#383A42;--1:#ABB2BF">) {</span></div></div><div class="ec-line highlight ins tm-label" style="--tmLabel:&#x27;新增&#x27;"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent">  </span><span style="--0:#8c208a;--1:#d8a3e8">if</span><span style="--0:#383A42;--1:#b0b6c3"> (</span><span style="--0:#01587d;--1:#72c2cc">!</span><span style="--0:#383A42;--1:#eca3a8">data</span><span style="--0:#383A42;--1:#b0b6c3">) </span><span style="--0:#8c208a;--1:#d8a3e8">return</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#6e4c01;--1:#daae84">null</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code">
</div></div><div class="ec-line highlight mark tm-label" style="--tmLabel:&#x27;关键&#x27;"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">  </span><span style="--0:#8c208a;--1:#d8a3e8">const</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#6e4c01;--1:#E5C07B">result</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#01587d;--1:#73c3cc">=</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#383A42;--1:#E5C07B">data</span><span style="--0:#383A42;--1:#b0b6c3">.</span><span style="--0:#294e9d;--1:#7cbcf2">map</span><span style="--0:#383A42;--1:#b0b6c3">((</span><span style="--0:#383A42;--1:#eca3a8;--1fs:italic">item</span><span style="--0:#383A42;--1:#b0b6c3">) </span><span style="--0:#8c208a;--1:#d8a3e8">=></span><span style="--0:#383A42;--1:#b0b6c3"> {</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">    </span><span style="--0:#8c208a;--1:#d8a3e8">return</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#383A42;--1:#E5C07B">item</span><span style="--0:#383A42;--1:#b0b6c3">.</span><span style="--0:#8b352d;--1:#eca3a8">value</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#01587d;--1:#73c3cc">*</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#6e4c01;--1:#daae84">2</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--1:#b0b6c3"><span class="indent"><span style="--0:#383A42">  </span></span><span style="--0:#383A42">})</span></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E6888F">result</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="function processData(data) {  if (!data) return null  const result = data.map((item) => {    return item.value * 2  })  return result}"><div></div></button></div></figure></div>
<h5 id="diff-语法" class="heading">Diff 语法<a href="#diff-语法" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h5>
<p>可以使用 <code>diff</code> 语言快速的创建插入和删除标记：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">markdown</span></figcaption><pre data-language="markdown"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`diff</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">function processData(data) {</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#8b352d;--1:#eca3a8">-  if (!data) return null;</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#2e5c2e;--1:#98C379">+  if (!data) return [];</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">const result = data.map(item => {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">return item.value * 2;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">});</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">return result;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">12</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x60;&#x60;&#x60;difffunction processData(data) {-  if (!data) return null;+  if (!data) return [];  const result = data.map(item => {    return item.value * 2;  });  return result;}&#x60;&#x60;&#x60;"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="diff"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">function processData(data) {</span></div></div><div class="ec-line highlight del"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--1:#aeb4c1"><span class="indent"><span style="--0:#383A42">  </span></span><span style="--0:#383A42">if (!data) return null;</span></span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--1:#b0b6c3"><span class="indent"><span style="--0:#383A42">  </span></span><span style="--0:#383A42">if (!data) return [];</span></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">const result = data.map(item => {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">return item.value * 2;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">});</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">return result;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="function processData(data) {  if (!data) return null;  if (!data) return [];  const result = data.map(item => {    return item.value * 2;  });  return result;}"><div></div></button></div></figure></div>
<h4 id="行内文本标记" class="heading">行内文本标记<a href="#行内文本标记" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h4>
<p>可以使用<strong>字符串</strong>或者<strong>正则表达式</strong>来标记行内的特定文本：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">markdown</span></figcaption><pre data-language="markdown"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`js </span><mark><span style="--0:#383A42;--1:#b0b6c3">"return"</span></mark><span style="--0:#383A42;--1:#ABB2BF"> </span><mark><span style="--0:#383A42;--1:#b0b6c3">/data/</span></mark></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">function</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">processData</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">data</span><span style="--0:#383A42;--1:#ABB2BF">) {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">if</span><span style="--0:#383A42;--1:#ABB2BF"> (</span><span style="--0:#383A42;--1:#56B6C2">!</span><span style="--0:#383A42;--1:#E6888F">data</span><span style="--0:#383A42;--1:#ABB2BF">) </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">null</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">return</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#E6888F">data</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x60;&#x60;&#x60;js &#x22;return&#x22; /data/function processData(data) {  if (!data) return null  return data}&#x60;&#x60;&#x60;"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">function</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">processData</span><span style="--0:#383A42;--1:#ABB2BF">(</span><mark><span style="--0:#383A42;--1:#eca3a8;--1fs:italic">data</span></mark><span style="--0:#383A42;--1:#ABB2BF">) {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">if</span><span style="--0:#383A42;--1:#ABB2BF"> (</span><span style="--0:#016C9A;--1:#56B6C2">!</span><mark><span style="--0:#383A42;--1:#eca3a8">data</span></mark><span style="--0:#383A42;--1:#ABB2BF">) </span><mark><span style="--0:#8c208a;--1:#d8a3e8">return</span></mark><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">null</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent">  </span><mark><span style="--0:#8c208a;--1:#d8a3e8">return</span></mark><span style="--0:#383A42;--1:#ABB2BF"> </span><mark><span style="--0:#383A42;--1:#eca3a8">data</span></mark></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="function processData(data) {  if (!data) return null  return data}"><div></div></button></div></figure></div>
<h3 id="代码框架的插件" class="heading">代码框架的插件<a href="#代码框架的插件" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>Expressive Code 内置了一些框架的插件，可以将代码块渲染成编辑器或者终端等风格。</p>
<h4 id="终端风格" class="heading">终端风格<a href="#终端风格" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h4>
<p>使用 <code>frame="terminal"</code> 可以获得终端窗口的风格：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">markdown</span></figcaption><pre data-language="markdown"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`bash </span><mark><span style="--0:#383A42;--1:#b0b6c3">frame="terminal"</span></mark><span style="--0:#383A42;--1:#ABB2BF"> title="~"</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">npm</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">install</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">astro-expressive-code</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x60;&#x60;&#x60;bash frame=&#x22;terminal&#x22; title=&#x22;~&#x22;npm install astro-expressive-code&#x60;&#x60;&#x60;"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame is-terminal has-title"><figcaption class="header"><span class="title">~</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">npm</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">install</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">astro-expressive-code</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="npm install astro-expressive-code"><div></div></button></div></figure></div>
<blockquote>
<p>也可以直接通过声明语言为 <code>bash</code> 来调整成终端风格：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">markdown</span></figcaption><pre data-language="markdown"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`</span><mark><span style="--0:#383A42;--1:#b0b6c3">bash</span></mark></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">npm</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">install</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">astro-expressive-code</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x60;&#x60;&#x60;bashnpm install astro-expressive-code&#x60;&#x60;&#x60;"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame is-terminal"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">npm</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">install</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">astro-expressive-code</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="npm install astro-expressive-code"><div></div></button></div></figure></div>
</blockquote>
<h4 id="编辑器风格" class="heading">编辑器风格<a href="#编辑器风格" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h4>
<p>默认风格是编辑器样式，也可以显式指定 <code>frame="code"</code>：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">markdown</span></figcaption><pre data-language="markdown"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`js </span><mark><span style="--0:#383A42;--1:#b0b6c3">frame="code"</span></mark><span style="--0:#383A42;--1:#ABB2BF"> title="app.js"</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">Code</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'astro-expressive-code'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x60;&#x60;&#x60;js frame=&#x22;code&#x22; title=&#x22;app.js&#x22;import { Code } from &#x27;astro-expressive-code&#x27;&#x60;&#x60;&#x60;"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">app.js</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">Code</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'astro-expressive-code'</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="import { Code } from &#x27;astro-expressive-code&#x27;"><div></div></button></div></figure></div>
<h4 id="无框架风格" class="heading">无框架风格<a href="#无框架风格" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h4>
<p>设置 <code>frame="none"</code> 可以移除框架，只显示代码：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">markdown</span></figcaption><pre data-language="markdown"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`js </span><mark><span style="--0:#383A42;--1:#b0b6c3">frame="none"</span></mark><span style="--0:#383A42;--1:#ABB2BF"> title="js"</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'No frame'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x60;&#x60;&#x60;js frame=&#x22;none&#x22; title=&#x22;js&#x22;console.log(&#x27;No frame&#x27;)&#x60;&#x60;&#x60;"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'No frame'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="console.log(&#x27;No frame&#x27;)"><div></div></button></div></figure></div>
<p>可见这种风格不会显示标题等内容，不过高亮和标记仍然会显示。</p>
<h3 id="配置颜色主题" class="heading">配置颜色主题<a href="#配置颜色主题" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<h4 id="配置内置主题" class="heading">配置内置主题<a href="#配置内置主题" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h4>
<p>可以通过传递 <code>theme</code> 选项来配置内置的颜色主题：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">ec.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">expressiveCode</span><span style="--0:#383A42;--1:#ABB2BF">({</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent">  </span><span style="--0:#8b352d;--1:#eca3a8">themes</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> [</span></span><span style="--0:#2e5c2e;--1:#98C379">'github-dark'</span><span style="--0:#383A42;--1:#b0b6c3">, </span><span style="--0:#2e5c2e;--1:#98C379">'github-light'</span><span style="--0:#383A42;--1:#b0b6c3">],</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent">  </span><span style="--0:#8b352d;--1:#eca3a8">useDarkModeMediaQuery</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> </span></span><span style="--0:#6e4c01;--1:#daae84">true</span><span style="--0:#383A42;--1:#b0b6c3">, </span><span style="--0:#515255;--0fs:italic;--1:#b3b6bb;--1fs:italic">// 自动响应系统主题，如要根据网页主题切换需要设为 false 并自行配置</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">})</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="expressiveCode({  themes: [&#x27;github-dark&#x27;, &#x27;github-light&#x27;],  useDarkModeMediaQuery: true, // 自动响应系统主题，如要根据网页主题切换需要设为 false 并自行配置})"><div></div></button></div></figure></div>
<h4 id="自定义样式覆盖" class="heading">自定义样式覆盖<a href="#自定义样式覆盖" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h4>
<p>可以使用 <code>styleOverrides</code> 来自定义代码块的外观：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">ec.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">expressiveCode</span><span style="--0:#383A42;--1:#ABB2BF">({</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent">  </span><span style="--0:#8b352d;--1:#eca3a8">styleOverrides</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> {</span></span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent">    </span><span style="--0:#8b352d;--1:#eca3a8">borderRadius</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> </span></span><span style="--0:#2e5c2e;--1:#98C379">'0.75rem'</span><span style="--0:#383A42;--1:#b0b6c3">,</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">    </span><span style="--0:#8b352d;--1:#eca3a8">borderWidth</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> </span></span><span style="--0:#2e5c2e;--1:#98C379">'1px'</span><span style="--0:#383A42;--1:#b0b6c3">,</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">    </span><span style="--0:#8b352d;--1:#eca3a8">codeFontSize</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> </span></span><span style="--0:#2e5c2e;--1:#98C379">'0.875rem'</span><span style="--0:#383A42;--1:#b0b6c3">,</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent">    </span><span style="--0:#8b352d;--1:#eca3a8">frames</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> {</span></span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent">      </span><span style="--0:#8b352d;--1:#eca3a8">shadowColor</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> </span></span><span style="--0:#2e5c2e;--1:#98C379">'rgba(0, 0, 0, 0.1)'</span><span style="--0:#383A42;--1:#b0b6c3">,</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span style="--1:#b0b6c3"><span class="indent"><span style="--0:#383A42">    </span></span><span style="--0:#383A42">},</span></span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--1:#b0b6c3"><span class="indent"><span style="--0:#383A42">  </span></span><span style="--0:#383A42">},</span></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">})</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="expressiveCode({  styleOverrides: {    borderRadius: &#x27;0.75rem&#x27;,    borderWidth: &#x27;1px&#x27;,    codeFontSize: &#x27;0.875rem&#x27;,    frames: {      shadowColor: &#x27;rgba(0, 0, 0, 0.1)&#x27;,    },  },})"><div></div></button></div></figure></div>
<p>可以访问 Expressive Code 的<a href="https://expressive-code.com/installation/" rel="noopener noreferrer" target="_blank">官方文档</a><i class="iconfont icon-external-link"></i>查看<a href="https://expressive-code.com/key-features/frames/#available-plugin-options" rel="noopener noreferrer" target="_blank">支持自定义的所有参数</a><i class="iconfont icon-external-link"></i></p>
<h2 id="进阶使用以及常用插件" class="heading">进阶使用以及常用插件<a href="#进阶使用以及常用插件" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p><a href="https://expressive-code.com/plugins/community-plugins/" rel="noopener noreferrer" target="_blank">更多的使用技巧以及插件</a><i class="iconfont icon-external-link"></i>可以访问 Expressive Code 的<a href="https://expressive-code.com/installation/" rel="noopener noreferrer" target="_blank">官方文档</a><i class="iconfont icon-external-link"></i>详细了解，这里只列举一些常用的插件以及技巧</p>
<h3 id="行号插件" class="heading">行号插件<a href="#行号插件" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>默认的代码块不显示行号，如果想加上的话，可以通过以下指令安装插件：</p>
<div class="expressive-code"><figure class="frame is-terminal"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">npm</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">i</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">@expressive-code/plugin-line-numbers</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"># 或</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">pnpm</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">add</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">@expressive-code/plugin-line-numbers</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"># 或</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">yarn</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">add</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">@expressive-code/plugin-line-numbers</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="npm i @expressive-code/plugin-line-numberspnpm add @expressive-code/plugin-line-numbersyarn add @expressive-code/plugin-line-numbers"><div></div></button></div></figure></div>
<p>然后向 <code>ec.config.mjs</code> 中导入并声明这个插件</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">ec.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">defineEcConfig</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'astro-expressive-code'</span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#8c208a;--1:#d8a3e8">import</span><span style="--0:#383A42;--1:#b0b6c3"> { </span><span style="--0:#8b352d;--1:#eca3a8">pluginLineNumbers</span><span style="--0:#383A42;--1:#b0b6c3"> } </span><span style="--0:#8c208a;--1:#d8a3e8">from</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#2e5c2e;--1:#98C379">'@expressive-code/plugin-line-numbers'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">export</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#AF4238;--1:#CD89E1">default</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">defineEcConfig</span><span style="--0:#383A42;--1:#ABB2BF">({</span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">  </span><span style="--0:#8b352d;--1:#eca3a8">plugins</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> [</span></span><span style="--0:#294e9d;--1:#7abcf2">pluginLineNumbers</span><span style="--0:#383A42;--1:#b0b6c3">()],</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">})</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="import { defineEcConfig } from &#x27;astro-expressive-code&#x27;import { pluginLineNumbers } from &#x27;@expressive-code/plugin-line-numbers&#x27;export default defineEcConfig({  plugins: [pluginLineNumbers()],})"><div></div></button></div></figure></div>
<p>这样就可以通过参数 <code>showLineNumbers: boolean</code> （默认为 <code>true</code>）来开关显示行号了</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">markdown</span></figcaption><pre data-language="markdown"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`js </span><mark><span style="--0:#383A42;--1:#b0b6c3">showLineNumbers</span></mark></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// This code block will show line numbers</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'Greetings from line 2!'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'I am on line 3'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`js </span><mark><span style="--0:#383A42;--1:#b0b6c3">showLineNumbers=false</span></mark></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// Line numbers are disabled for this block</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'Hello?'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'Sorry, do you know what line I am on?'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x60;&#x60;&#x60;js showLineNumbers// This code block will show line numbersconsole.log(&#x27;Greetings from line 2!&#x27;)console.log(&#x27;I am on line 3&#x27;)&#x60;&#x60;&#x60;&#x60;&#x60;&#x60;js showLineNumbers=false// Line numbers are disabled for this blockconsole.log(&#x27;Hello?&#x27;)console.log(&#x27;Sorry, do you know what line I am on?&#x27;)&#x60;&#x60;&#x60;"><div></div></button></div></figure></div>
<p>渲染效果分别如下</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// This code block will show line numbers</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'Greetings from line 2!'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'I am on line 3'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="// This code block will show line numbersconsole.log(&#x27;Greetings from line 2!&#x27;)console.log(&#x27;I am on line 3&#x27;)"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// Line numbers are disabled for this block</span></div></div><div class="ec-line"><div class="code"><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'Hello?'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="code"><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'Sorry, do you know what line I am on?'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="// Line numbers are disabled for this blockconsole.log(&#x27;Hello?&#x27;)console.log(&#x27;Sorry, do you know what line I am on?&#x27;)"><div></div></button></div></figure></div>
<p>也可以使用 <code>startLineNumber: numbers</code> （默认为 <code>1</code> ）来调整行号起始的编号</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">markdown</span></figcaption><pre data-language="markdown"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`js </span><mark><span style="--0:#383A42;--1:#b0b6c3">showLineNumbers</span></mark><span style="--0:#383A42;--1:#ABB2BF"> </span><mark><span style="--0:#383A42;--1:#b0b6c3">startLineNumber=5</span></mark></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'Greetings from line 5!'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'I am on line 6'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">\`\`\`</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="&#x60;&#x60;&#x60;js showLineNumbers startLineNumber=5console.log(&#x27;Greetings from line 5!&#x27;)console.log(&#x27;I am on line 6&#x27;)&#x60;&#x60;&#x60;"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'Greetings from line 5!'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">console</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#3360C1;--1:#61AFEF">log</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#387138;--1:#98C379">'I am on line 6'</span><span style="--0:#383A42;--1:#ABB2BF">)</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="console.log(&#x27;Greetings from line 5!&#x27;)console.log(&#x27;I am on line 6&#x27;)"><div></div></button></div></figure></div>
<p>当然，我们也可以向 <code>ec.config.mjs</code> 传递默认的参数来调控行号的显示：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">ec.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">defineEcConfig</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'astro-expressive-code'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">pluginLineNumbers</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'@expressive-code/plugin-line-numbers'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">export</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#AF4238;--1:#CD89E1">default</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">defineEcConfig</span><span style="--0:#383A42;--1:#ABB2BF">({</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">  </span><span style="--0:#AF4238;--1:#E6888F">plugins</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> [</span></span><span style="--0:#3360C1;--1:#61AFEF">pluginLineNumbers</span><span style="--0:#383A42;--1:#ABB2BF">()],</span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent">  </span><span style="--0:#8b352d;--1:#eca3a8">defaultProps</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> {</span></span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent">    </span><span style="--0:#515255;--0fs:italic;--1:#b3b6bb;--1fs:italic">// Disable line numbers by default</span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent">    </span><span style="--0:#8b352d;--1:#eca3a8">showLineNumbers</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> </span></span><span style="--0:#6e4c01;--1:#daae84">false</span><span style="--0:#383A42;--1:#b0b6c3">,</span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span class="indent">    </span><span style="--0:#515255;--0fs:italic;--1:#b3b6bb;--1fs:italic">// But enable line numbers for certain languages</span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span class="indent">    </span><span style="--0:#8b352d;--1:#eca3a8">overridesByLang</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> {</span></span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span class="indent">      </span><span style="--0:#2e5c2e;--1:#98C379">'js,ts,html'</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> {</span></span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">12</div></div><div class="code"><span class="indent">        </span><span style="--0:#8b352d;--1:#eca3a8">showLineNumbers</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> </span></span><span style="--0:#6e4c01;--1:#daae84">true</span><span style="--0:#383A42;--1:#b0b6c3">,</span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">13</div></div><div class="code"><span style="--1:#b0b6c3"><span class="indent"><span style="--0:#383A42">      </span></span><span style="--0:#383A42">},</span></span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">14</div></div><div class="code"><span style="--1:#b0b6c3"><span class="indent"><span style="--0:#383A42">    </span></span><span style="--0:#383A42">},</span></span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">15</div></div><div class="code"><span style="--1:#b0b6c3"><span class="indent"><span style="--0:#383A42">  </span></span><span style="--0:#383A42">},</span></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">16</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">})</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="import { defineEcConfig } from &#x27;astro-expressive-code&#x27;import { pluginLineNumbers } from &#x27;@expressive-code/plugin-line-numbers&#x27;export default defineEcConfig({  plugins: [pluginLineNumbers()],  defaultProps: {    // Disable line numbers by default    showLineNumbers: false,    // But enable line numbers for certain languages    overridesByLang: {      &#x27;js,ts,html&#x27;: {        showLineNumbers: true,      },    },  },})"><div></div></button></div></figure></div>
<p>或者行号的样式：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">ec.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">defineEcConfig</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'astro-expressive-code'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">pluginLineNumbers</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'@expressive-code/plugin-line-numbers'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">export</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#AF4238;--1:#CD89E1">default</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">defineEcConfig</span><span style="--0:#383A42;--1:#ABB2BF">({</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">  </span><span style="--0:#AF4238;--1:#E6888F">plugins</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> [</span></span><span style="--0:#3360C1;--1:#61AFEF">pluginLineNumbers</span><span style="--0:#383A42;--1:#ABB2BF">()],</span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent">  </span><span style="--0:#8b352d;--1:#eca3a8">styleOverrides</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> {</span></span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent">    </span><span style="--0:#8b352d;--1:#eca3a8">lineNumbers</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> {</span></span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent">      </span><span style="--0:#515255;--0fs:italic;--1:#b3b6bb;--1fs:italic">// Example: Change the line number foreground colors</span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span class="indent">      </span><span style="--0:#8b352d;--1:#eca3a8">foreground</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> </span></span><span style="--0:#2e5c2e;--1:#98C379">'#578298a6'</span><span style="--0:#383A42;--1:#b0b6c3">,</span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span class="indent">      </span><span style="--0:#8b352d;--1:#eca3a8">highlightForeground</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> </span></span><span style="--0:#2e5c2e;--1:#98C379">'#85c7ebb3'</span><span style="--0:#383A42;--1:#b0b6c3">,</span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span style="--1:#b0b6c3"><span class="indent"><span style="--0:#383A42">    </span></span><span style="--0:#383A42">},</span></span></div></div><div class="ec-line highlight ins"><div class="gutter"><div class="ln" aria-hidden="true">12</div></div><div class="code"><span style="--1:#b0b6c3"><span class="indent"><span style="--0:#383A42">  </span></span><span style="--0:#383A42">},</span></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">13</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">})</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="import { defineEcConfig } from &#x27;astro-expressive-code&#x27;import { pluginLineNumbers } from &#x27;@expressive-code/plugin-line-numbers&#x27;export default defineEcConfig({  plugins: [pluginLineNumbers()],  styleOverrides: {    lineNumbers: {      // Example: Change the line number foreground colors      foreground: &#x27;#578298a6&#x27;,      highlightForeground: &#x27;#85c7ebb3&#x27;,    },  },})"><div></div></button></div></figure></div>`,l={title:"Astro 框架下 Expressive Code 的基础用法",author:"NeoWangKing",date:"2026-03-25T12:23:25.000Z",lastMod:"2026-03-26T08:06:24.000Z",tags:["Astro","Expressive Code","代码高亮","前端开发"],category:["前端开发","Astro"],summary:"本文介绍在 Astro 框架中使用 Expressive Code 的方法，包括安装配置、基础代码块渲染、动态代码组件、文本标记功能、代码框架插件等核心特性，帮助你在博客或文档中优雅地展示代码。",comments:!0,draft:!1,readingMinutes:9.86,words:1972},t="/home/runner/work/blog-source-code/blog-source-code/src/content/posts/front-end/astro/Expressive-Code-Basics.md",c=void 0;function b(){return`
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
`}function m(){return a}function F(){return[{depth:2,slug:"expressive-code-简介",text:"Expressive Code 简介"},{depth:2,slug:"安装与配置",text:"安装与配置"},{depth:3,slug:"安装依赖",text:"安装依赖"},{depth:3,slug:"配置-astro",text:"配置 astro"},{depth:4,slug:"直接集成",text:"直接集成"},{depth:4,slug:"使用配置文件",text:"使用配置文件"},{depth:2,slug:"基础的代码块用法",text:"基础的代码块用法"},{depth:3,slug:"markdown-代码块用法",text:"Markdown 代码块用法"},{depth:3,slug:"指定语言的语法高亮",text:"指定语言的语法高亮"},{depth:3,slug:"代码块标题",text:"代码块标题"},{depth:3,slug:"使用-code-组件",text:"使用 <Code> 组件"},{depth:3,slug:"从文件导入代码",text:"从文件导入代码"},{depth:3,slug:"文本与行标记",text:"文本与行标记"},{depth:4,slug:"整行标记",text:"整行标记"},{depth:5,slug:"标记类型",text:"标记类型"},{depth:5,slug:"添加标签",text:"添加标签"},{depth:5,slug:"diff-语法",text:"Diff 语法"},{depth:4,slug:"行内文本标记",text:"行内文本标记"},{depth:3,slug:"代码框架的插件",text:"代码框架的插件"},{depth:4,slug:"终端风格",text:"终端风格"},{depth:4,slug:"编辑器风格",text:"编辑器风格"},{depth:4,slug:"无框架风格",text:"无框架风格"},{depth:3,slug:"配置颜色主题",text:"配置颜色主题"},{depth:4,slug:"配置内置主题",text:"配置内置主题"},{depth:4,slug:"自定义样式覆盖",text:"自定义样式覆盖"},{depth:2,slug:"进阶使用以及常用插件",text:"进阶使用以及常用插件"},{depth:3,slug:"行号插件",text:"行号插件"}]}const C=e((p,v,r)=>{const{layout:o,...s}=l;return s.file=t,s.url=c,n`${i()}${d(a)}`});export{C as Content,m as compiledContent,C as default,t as file,l as frontmatter,F as getHeadings,b as rawContent,c as url};
