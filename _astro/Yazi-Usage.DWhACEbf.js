import{c as t,r as e,m as s}from"./render-template.CoIZ-2vC.js";import{u as i}from"./PostTagsList.ZCO9sOpk.js";import"./jsx-runtime.CPK7-dcL.js";import"./index.BufDd4G-.js";import"./_commonjsHelpers.Cpj98o6Y.js";const a=`<h2 id="简介" class="heading">简介<a href="#简介" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p><strong>Yazi</strong>（“鸭子”）是一款基于 Rust 编写的现代化终端文件管理器。它采用异步 I/O 架构，即使目录中包含数千个文件也能保持流畅操作。Yazi 的操作逻辑借鉴了 Vim，默认使用单键快捷键，并支持图像预览、模糊搜索、批量重命名和多标签页等实用功能。</p>
<h2 id="安装与启动" class="heading">安装与启动<a href="#安装与启动" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>不同平台安装命令如下：</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.eyz6w.css"><script type="module" src="/_astro/ec.0vx5m.js"><\/script><figure class="frame is-terminal"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"># macOS (Homebrew)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">brew</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">install</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">yazi</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"># Arch Linux</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">sudo</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">pacman</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">-S</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">yazi</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"># Cargo (编译安装)</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">cargo</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">install</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">yazi-fm</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="brew install yazisudo pacman -S yazicargo install yazi-fm"><div></div></button></div></figure></div>
<p>启动方式非常简单：</p>
<div class="expressive-code"><figure class="frame is-terminal"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"># 直接启动</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">yazi</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"># 启动并跳转到指定目录</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">yazi</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">/path/to/project</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="yaziyazi /path/to/project"><div></div></button></div></figure></div>
<blockquote>
<p><strong>提示</strong>：Yazi 支持 Kitty、iTerm2 等终端的图像协议，可在终端内直接预览图片、视频缩略图和 PDF。若终端不支持，会回退为 ASCII 艺术形式。</p>
</blockquote>
<h2 id="核心快捷键速查" class="heading">核心快捷键速查<a href="#核心快捷键速查" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>快捷键是 Yazi 的核心操作方式，以下按使用场景分类整理：</p>
<h3 id="导航" class="heading">导航<a href="#导航" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>









































<table><thead><tr><th align="center">操作</th><th align="center">快捷键</th></tr></thead><tbody><tr><td align="center">向上/向下</td><td align="center">k/j</td></tr><tr><td align="center">进入目录 / 打开文件</td><td align="center">l / Enter</td></tr><tr><td align="center">返回上级目录</td><td align="center">h</td></tr><tr><td align="center">跳到顶部/底部</td><td align="center">gg / G</td></tr><tr><td align="center">回到主目录（<code>~</code>）</td><td align="center">~</td></tr><tr><td align="center">显示隐藏文件</td><td align="center">.</td></tr><tr><td align="center">排序方式切换</td><td align="center">,</td></tr><tr><td align="center">切换到下一标签页</td><td align="center">Tab</td></tr></tbody></table>
<blockquote>
<p>还支持 Vim 风格行跳转：如 <code>5G</code> 跳转到第 5 行。</p>
</blockquote>
<h3 id="文件操作" class="heading">文件操作<a href="#文件操作" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>













































<table><thead><tr><th align="center">操作</th><th align="center">快捷键</th></tr></thead><tbody><tr><td align="center">复制文件</td><td align="center">y</td></tr><tr><td align="center">剪切文件</td><td align="center">x</td></tr><tr><td align="center">粘贴</td><td align="center">p</td></tr><tr><td align="center">重命名</td><td align="center">r</td></tr><tr><td align="center">删除（移入回收站）</td><td align="center">d</td></tr><tr><td align="center">永久删除</td><td align="center">D</td></tr><tr><td align="center">新建文件</td><td align="center">a</td></tr><tr><td align="center">新建文件夹</td><td align="center">a（文件名末尾加 <code>/</code>）</td></tr><tr><td align="center">复制文件完整路径</td><td align="center">c 然后 c</td></tr></tbody></table>
<blockquote>
<p>选中多文件后按 <code>r</code> 会调用外部编辑器进行<strong>批量重命名</strong>，非常高效。</p>
</blockquote>
<h3 id="选择" class="heading">选择<a href="#选择" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>

























<table><thead><tr><th align="center">操作</th><th align="center">快捷键</th></tr></thead><tbody><tr><td align="center">选中/取消当前项</td><td align="center">Space</td></tr><tr><td align="center">全选</td><td align="center"><code>Ctrl + a</code></td></tr><tr><td align="center">反选</td><td align="center"><code>Ctrl + r</code></td></tr><tr><td align="center">视觉选择模式</td><td align="center">v</td></tr></tbody></table>
<h3 id="搜索与跳转" class="heading">搜索与跳转<a href="#搜索与跳转" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>





























<table><thead><tr><th align="center">操作</th><th align="center">快捷键</th></tr></thead><tbody><tr><td align="center">当前目录过滤搜索</td><td align="center">/</td></tr><tr><td align="center">递归搜索文件名（需要 <code>fd</code>）</td><td align="center">s</td></tr><tr><td align="center">搜索文件内容（需要 <code>rg</code>）</td><td align="center">S</td></tr><tr><td align="center">模糊搜索跳转（需要 <code>fzf</code>）</td><td align="center">z</td></tr><tr><td align="center">zoxide 历史目录跳转</td><td align="center">Z</td></tr></tbody></table>
<blockquote>
<p>搜索后按 <code>n</code> / <code>N</code> 跳转下一个/上一个匹配项。</p>
</blockquote>
<h3 id="其他常用" class="heading">其他常用<a href="#其他常用" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>





























<table><thead><tr><th align="center">操作</th><th align="center">快捷键</th></tr></thead><tbody><tr><td align="center">打开帮助</td><td align="center">~ 或 F1</td></tr><tr><td align="center">打开 Shell（当前目录）</td><td align="center">!</td></tr><tr><td align="center">执行 Shell 命令</td><td align="center">;</td></tr><tr><td align="center">退出（保持当前目录）</td><td align="center">q</td></tr><tr><td align="center">退出并 <code>cd</code> 到浏览目录</td><td align="center">Q</td></tr></tbody></table>
<h2 id="shell-集成退出时自动切换目录" class="heading">Shell 集成：退出时自动切换目录<a href="#shell-集成退出时自动切换目录" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>Yazi 默认退出后 Shell 仍停留在启动时的目录。通过配置 Shell 包装函数，可以实现“退出 Yazi 后自动切换到当时浏览的目录”。</p>
<p>在 <code>~/.zshrc</code>（或 <code>~/.bashrc</code>）中添加：</p>
<div class="expressive-code"><figure class="frame is-terminal"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">function</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">yy</span><span style="--0:#383A42;--1:#ABB2BF">() {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">local</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#AF4238;--1:#E6888F">tmp</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent">  </span><span style="--0:#AF4238;--1:#E6888F">tmp</span><span style="--0:#383A42;--1:#56B6C2">=</span><span style="--0:#387138;--1:#98C379">"$(</span><span style="--0:#3360C1;--1:#61AFEF">mktemp</span><span style="--0:#387138;--1:#98C379"> </span><span style="--0:#875D01;--1:#D19A66">-t</span><span style="--0:#387138;--1:#98C379"> "yazi-cwd.XXXXXX")"</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">  </span><span style="--0:#3360C1;--1:#61AFEF">yazi</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">"</span><span style="--0:#383A42;--1:#E6888F;--1fs:italic">$@</span><span style="--0:#387138;--1:#98C379">"</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">--cwd-file=</span><span style="--0:#387138;--1:#98C379">"</span><span style="--0:#AF4238;--1:#E6888F">$tmp</span><span style="--0:#387138;--1:#98C379">"</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">if</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#AF4238;--1:#E6888F">cwd</span><span style="--0:#383A42;--1:#56B6C2">=</span><span style="--0:#387138;--1:#98C379">"$(</span><span style="--0:#3360C1;--1:#61AFEF">cat</span><span style="--0:#387138;--1:#98C379"> </span><span style="--0:#875D01;--1:#D19A66">--</span><span style="--0:#387138;--1:#98C379"> "</span><span style="--0:#AF4238;--1:#E6888F">$tmp</span><span style="--0:#387138;--1:#98C379">")"</span><span style="--0:#383A42;--1:#ABB2BF"> &#x26;&#x26; [ </span><span style="--0:#383A42;--1:#56B6C2">-n</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">"</span><span style="--0:#AF4238;--1:#E6888F">$cwd</span><span style="--0:#387138;--1:#98C379">"</span><span style="--0:#383A42;--1:#ABB2BF"> ] &#x26;&#x26; [ </span><span style="--0:#387138;--1:#98C379">"</span><span style="--0:#AF4238;--1:#E6888F">$cwd</span><span style="--0:#387138;--1:#98C379">"</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#56B6C2">!=</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">"</span><span style="--0:#AF4238;--1:#E6888F">$PWD</span><span style="--0:#387138;--1:#98C379">"</span><span style="--0:#383A42;--1:#ABB2BF"> ]; </span><span style="--0:#A626A4;--1:#CD89E1">then</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent">    </span><span style="--0:#016C9A;--1:#56B6C2">cd</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">--</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">"</span><span style="--0:#AF4238;--1:#E6888F">$cwd</span><span style="--0:#387138;--1:#98C379">"</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent">  </span><span style="--0:#A626A4;--1:#CD89E1">fi</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent">  </span><span style="--0:#3360C1;--1:#61AFEF">rm</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">-f</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">--</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">"</span><span style="--0:#AF4238;--1:#E6888F">$tmp</span><span style="--0:#387138;--1:#98C379">"</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="function yy() {  local tmp  tmp=&#x22;$(mktemp -t &#x22;yazi-cwd.XXXXXX&#x22;)&#x22;  yazi &#x22;$@&#x22; --cwd-file=&#x22;$tmp&#x22;  if cwd=&#x22;$(cat -- &#x22;$tmp&#x22;)&#x22; &#x26;&#x26; [ -n &#x22;$cwd&#x22; ] &#x26;&#x26; [ &#x22;$cwd&#x22; != &#x22;$PWD&#x22; ]; then    cd -- &#x22;$cwd&#x22;  fi  rm -f -- &#x22;$tmp&#x22;}"><div></div></button></div></figure></div>
<p>之后使用 <code>yy</code> 命令启动 Yazi，退出时终端会自动切换到 Yazi 最后浏览的目录。</p>
<h2 id="进阶功能" class="heading">进阶功能<a href="#进阶功能" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<h3 id="图像与媒体预览" class="heading">图像与媒体预览<a href="#图像与媒体预览" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>将光标停留在图片（<code>.jpg</code>、<code>.png</code>）、视频或 PDF 文件上，右侧预览面板会自动显示内容。支持 Kitty、iTerm2、Sixel 等图形协议。</p>
<h3 id="多标签页与分栏" class="heading">多标签页与分栏<a href="#多标签页与分栏" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>Yazi 支持<strong>多标签页</strong>（<code>Tab</code> 切换）和<strong>分栏视图</strong>，方便在不同目录之间对比和移动文件。</p>
<h3 id="lua-插件系统" class="heading">Lua 插件系统<a href="#lua-插件系统" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>Yazi 通过 Lua 脚本扩展功能，可安装社区插件实现自定义功能。</p>
<h3 id="自定义按键绑定" class="heading">自定义按键绑定<a href="#自定义按键绑定" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>修改配置文件 <code>keymap.toml</code>（位于 <code>~/.config/yazi/</code>）即可自定义快捷键。例如，将 <code>o</code> 键绑定为创建文件：</p>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="toml"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">[</span><span style="--0:#3360C1;--1:#61AFEF">manager</span><span style="--0:#383A42;--1:#ABB2BF">]</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#AF4238;--1:#E6888F">o</span><span style="--0:#383A42;--1:#ABB2BF"> = { </span><span style="--0:#AF4238;--1:#E6888F">exec</span><span style="--0:#383A42;--1:#ABB2BF"> = </span><span style="--0:#387138;--1:#98C379">"shell"</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#AF4238;--1:#E6888F">args</span><span style="--0:#383A42;--1:#ABB2BF"> = [</span><span style="--0:#387138;--1:#98C379">"touch"</span><span style="--0:#383A42;--1:#ABB2BF">] }</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="[manager]o = { exec = &#x22;shell&#x22;, args = [&#x22;touch&#x22;] }"><div></div></button></div></figure></div>
<h2 id="常用指令速记" class="heading">常用指令速记<a href="#常用指令速记" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>





































<table><thead><tr><th align="center">意图</th><th align="center">按键</th></tr></thead><tbody><tr><td align="center">进去/出去</td><td align="center"><code>l</code> / <code>h</code></td></tr><tr><td align="center">上下移动</td><td align="center"><code>k</code> / <code>j</code></td></tr><tr><td align="center">复制粘贴</td><td align="center"><code>y</code> + <code>p</code></td></tr><tr><td align="center">找文件</td><td align="center"><code>/</code></td></tr><tr><td align="center">快速跳转</td><td align="center"><code>z</code></td></tr><tr><td align="center">看帮助</td><td align="center"><code>~</code> 或 <code>F1</code></td></tr><tr><td align="center">退出</td><td align="center"><code>q</code></td></tr></tbody></table>
<blockquote>
<p>Yazi 默认内置了完善的文件操作功能（创建、删除、重命名等），大多数场景无需自定义快捷键就能高效工作。</p>
</blockquote>`,d={title:"Yazi 终端文件管理器使用指南",author:"NeoWangKing",date:"2026-05-05T04:00:00.000Z",lastMod:"2026-05-05T06:44:47.000Z",tags:["开发工具","终端","文件管理器","Yazi"],category:["开发工具","终端"],summary:"本文详细介绍新一代终端文件管理器 Yazi 的使用方法，包括核心功能、完整的快捷键速查表、Shell 集成配置以及进阶技巧，帮助终端用户提升文件管理效率。",comments:!0,draft:!1,readingMinutes:4.73,words:946},l="/home/runner/work/blog-source-code/blog-source-code/src/content/posts/Development-Tools/NeoVim/Yazi-Usage.md",c=void 0;function B(){return`
## 简介

**Yazi**（“鸭子”）是一款基于 Rust 编写的现代化终端文件管理器。它采用异步 I/O 架构，即使目录中包含数千个文件也能保持流畅操作。Yazi 的操作逻辑借鉴了 Vim，默认使用单键快捷键，并支持图像预览、模糊搜索、批量重命名和多标签页等实用功能。

## 安装与启动

不同平台安装命令如下：

\`\`\`bash
# macOS (Homebrew)
brew install yazi

# Arch Linux
sudo pacman -S yazi

# Cargo (编译安装)
cargo install yazi-fm
\`\`\`

启动方式非常简单：

\`\`\`bash
# 直接启动
yazi

# 启动并跳转到指定目录
yazi /path/to/project
\`\`\`

> **提示**：Yazi 支持 Kitty、iTerm2 等终端的图像协议，可在终端内直接预览图片、视频缩略图和 PDF。若终端不支持，会回退为 ASCII 艺术形式。

## 核心快捷键速查

快捷键是 Yazi 的核心操作方式，以下按使用场景分类整理：

### 导航

|        操作         |  快捷键   |
| :-----------------: | :-------: |
|      向上/向下      |    k/j    |
| 进入目录 / 打开文件 | l / Enter |
|    返回上级目录     |     h     |
|    跳到顶部/底部    |  gg / G   |
|  回到主目录（\`~\`）  |     ~     |
|    显示隐藏文件     |     .     |
|    排序方式切换     |     ,     |
|  切换到下一标签页   |    Tab    |

> 还支持 Vim 风格行跳转：如 \`5G\` 跳转到第 5 行。

### 文件操作

|        操作        |        快捷键         |
| :----------------: | :-------------------: |
|      复制文件      |           y           |
|      剪切文件      |           x           |
|        粘贴        |           p           |
|       重命名       |           r           |
| 删除（移入回收站） |           d           |
|      永久删除      |           D           |
|      新建文件      |           a           |
|     新建文件夹     | a（文件名末尾加 \`/\`） |
|  复制文件完整路径  |       c 然后 c        |

> 选中多文件后按 \`r\` 会调用外部编辑器进行**批量重命名**，非常高效。

### 选择

|      操作       |   快捷键   |
| :-------------: | :--------: |
| 选中/取消当前项 |   Space    |
|      全选       | \`Ctrl + a\` |
|      反选       | \`Ctrl + r\` |
|  视觉选择模式   |     v      |

### 搜索与跳转

|            操作             | 快捷键 |
| :-------------------------: | :----: |
|      当前目录过滤搜索       |   /    |
| 递归搜索文件名（需要 \`fd\`） |   s    |
|  搜索文件内容（需要 \`rg\`）  |   S    |
| 模糊搜索跳转（需要 \`fzf\`）  |   z    |
|     zoxide 历史目录跳转     |   Z    |

> 搜索后按 \`n\` / \`N\` 跳转下一个/上一个匹配项。

### 其他常用

|          操作          | 快捷键  |
| :--------------------: | :-----: |
|        打开帮助        | ~ 或 F1 |
| 打开 Shell（当前目录） |    !    |
|    执行 Shell 命令     |    ;    |
|  退出（保持当前目录）  |    q    |
| 退出并 \`cd\` 到浏览目录 |    Q    |

## Shell 集成：退出时自动切换目录

Yazi 默认退出后 Shell 仍停留在启动时的目录。通过配置 Shell 包装函数，可以实现“退出 Yazi 后自动切换到当时浏览的目录”。

在 \`~/.zshrc\`（或 \`~/.bashrc\`）中添加：

\`\`\`bash
function yy() {
  local tmp
  tmp="$(mktemp -t "yazi-cwd.XXXXXX")"
  yazi "$@" --cwd-file="$tmp"
  if cwd="$(cat -- "$tmp")" && [ -n "$cwd" ] && [ "$cwd" != "$PWD" ]; then
    cd -- "$cwd"
  fi
  rm -f -- "$tmp"
}
\`\`\`

之后使用 \`yy\` 命令启动 Yazi，退出时终端会自动切换到 Yazi 最后浏览的目录。

## 进阶功能

### 图像与媒体预览

将光标停留在图片（\`.jpg\`、\`.png\`）、视频或 PDF 文件上，右侧预览面板会自动显示内容。支持 Kitty、iTerm2、Sixel 等图形协议。

### 多标签页与分栏

Yazi 支持**多标签页**（\`Tab\` 切换）和**分栏视图**，方便在不同目录之间对比和移动文件。

### Lua 插件系统

Yazi 通过 Lua 脚本扩展功能，可安装社区插件实现自定义功能。

### 自定义按键绑定

修改配置文件 \`keymap.toml\`（位于 \`~/.config/yazi/\`）即可自定义快捷键。例如，将 \`o\` 键绑定为创建文件：

\`\`\`toml
[manager]
o = { exec = "shell", args = ["touch"] }
\`\`\`

## 常用指令速记

|   意图    |    按键     |
| :-------: | :---------: |
| 进去/出去 |  \`l\` / \`h\`  |
| 上下移动  |  \`k\` / \`j\`  |
| 复制粘贴  |  \`y\` + \`p\`  |
|  找文件   |     \`/\`     |
| 快速跳转  |     \`z\`     |
|  看帮助   | \`~\` 或 \`F1\` |
|   退出    |     \`q\`     |

> Yazi 默认内置了完善的文件操作功能（创建、删除、重命名等），大多数场景无需自定义快捷键就能高效工作。
`}function f(){return a}function F(){return[{depth:2,slug:"简介",text:"简介"},{depth:2,slug:"安装与启动",text:"安装与启动"},{depth:2,slug:"核心快捷键速查",text:"核心快捷键速查"},{depth:3,slug:"导航",text:"导航"},{depth:3,slug:"文件操作",text:"文件操作"},{depth:3,slug:"选择",text:"选择"},{depth:3,slug:"搜索与跳转",text:"搜索与跳转"},{depth:3,slug:"其他常用",text:"其他常用"},{depth:2,slug:"shell-集成退出时自动切换目录",text:"Shell 集成：退出时自动切换目录"},{depth:2,slug:"进阶功能",text:"进阶功能"},{depth:3,slug:"图像与媒体预览",text:"图像与媒体预览"},{depth:3,slug:"多标签页与分栏",text:"多标签页与分栏"},{depth:3,slug:"lua-插件系统",text:"Lua 插件系统"},{depth:3,slug:"自定义按键绑定",text:"自定义按键绑定"},{depth:2,slug:"常用指令速记",text:"常用指令速记"}]}const m=t((r,p,o)=>{const{layout:g,...n}=d;return n.file=l,n.url=c,e`${s()}${i(a)}`});export{m as Content,f as compiledContent,m as default,l as file,d as frontmatter,F as getHeadings,B as rawContent,c as url};
