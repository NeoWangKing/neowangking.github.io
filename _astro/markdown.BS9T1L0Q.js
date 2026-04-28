import{c as n,r as e,m as t}from"./render-template.DtkxLM7h.js";import{u as i}from"./PostTagsList.BLSNtdne.js";import"./astro/assets-service.DLSo0gp6.js";import"./jsx-runtime.-xR-R7lh.js";import"./index.SeRWem-E.js";import"./_commonjsHelpers.BosuxZz1.js";import"./clsx.B-dksMZM.js";const a=`<p>下面是在 Astro 中编写 Markdown 内容时，可以使用的一些基本 Markdown 语法示例。</p>
<h2 id="标题" class="heading">标题<a href="#标题" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>你应该避免在 Markdown 正文中重复创建一级文章标题，因为文章标题会根据 <code>frontmatter</code> 中 <code>title</code> 自动生成。</p>
<blockquote>
<p>避免标题层级过深，一般到三级标题就够了。</p>
</blockquote>
<h2 id="二级" class="heading">二级<a href="#二级" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<h3 id="三级-inline-code" class="heading">三级 <code>inline code</code><a href="#三级-inline-code" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<h4 id="四级" class="heading">四级<a href="#四级" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h4>
<h5 id="五级" class="heading">五级<a href="#五级" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h5>
<h6 id="六级" class="heading">六级<a href="#六级" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h6>
<h2 id="段落" class="heading">段落<a href="#段落" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.</p>
<p>使用行尾使用两个空格进行段落内的换行</p>
<p>All work and no play makes Jack a dull boy.<br>
All work and no play makes Jack a dull boy.</p>
<h2 id="图片" class="heading">图片<a href="#图片" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>小尺寸的图片</p>
<figure><img src="https://picsum.photos/seed/picsum/250/400" alt="图片描述" loading="lazy"></figure>
<p>大尺寸的图片</p>
<figure><img src="https://picsum.photos/seed/picsum/1200/900" alt="图片描述" loading="lazy"></figure>
<p>带标题的图片</p>
<figure><img src="https://picsum.photos/seed/picsum/400/300" alt="图片描述" title="图片标题" loading="lazy"><figcaption>图片标题</figcaption></figure>
<h2 id="强调" class="heading">强调<a href="#强调" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>这是<strong>重要内容</strong>，这是<em>次要内容</em></p>
<h2 id="删除线" class="heading">删除线<a href="#删除线" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p><del>这是一段被删除的文本。</del></p>
<h2 id="引用" class="heading">引用<a href="#引用" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a <code>footer</code> or <code>cite</code> element, and optionally with in-line changes such as annotations and abbreviations.</p>
<blockquote>
<p>Tiam, ad mint andaepu dandae nostion secatur sequo quae.<br>
<strong>Note</strong> that you can use <em>Markdown syntax</em> within a blockquote.</p>
</blockquote>
<p>嵌套的引用</p>
<blockquote>
<p>引用</p>
<blockquote>
<p>嵌套的引用</p>
</blockquote>
</blockquote>
<p>带脚标的引用</p>
<blockquote>
<p>Don't communicate by sharing memory, share memory by communicating.<br>
— <cite>Rob Pike<sup><a href="#user-content-fn-1" id="user-content-fnref-1" data-footnote-ref="" aria-describedby="footnote-label">1</a></sup></cite></p>
</blockquote>
<h2 id="分割线" class="heading">分割线<a href="#分割线" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<hr>
<h2 id="链接" class="heading">链接<a href="#链接" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>这是内部链接 <a href="/posts/guide">Gyoza 使用指南</a></p>
<p>这是外部连接 <a href="https://zh-hans.react.dev/" rel="noopener noreferrer" target="_blank">React <strong>中文</strong>文档</a><i class="iconfont icon-external-link"></i></p>
<p>自动渲染成连接 <a href="https://github.com" rel="noopener noreferrer" target="_blank">https://github.com</a><i class="iconfont icon-external-link"></i></p>
<p>邮箱地址 <a href="mailto:mail@example.com">mail@example.com</a></p>
<h2 id="表格" class="heading">表格<a href="#表格" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>设置单元格对齐(默认左对齐)</p>

























<table><thead><tr><th align="left">Name</th><th align="center">Age</th><th align="right">Fruit</th></tr></thead><tbody><tr><td align="left">Bob</td><td align="center">27</td><td align="right">Apple</td></tr><tr><td align="left">Alice</td><td align="center">23</td><td align="right">Banana</td></tr><tr><td align="left">John</td><td align="center">28</td><td align="right">Orange</td></tr></tbody></table>
<p>支持行内 Markdown</p>















<table><thead><tr><th>Italics</th><th>Bold</th><th>Code</th></tr></thead><tbody><tr><td><em>italics</em></td><td><strong>bold</strong></td><td><code>code</code></td></tr></tbody></table>
<p>表格溢出</p>





















<table><thead><tr><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th><th>F</th></tr></thead><tbody><tr><td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td><td>Phasellus ultricies, sapien non euismod aliquam, dui ligula tincidunt odio, at accumsan nulla sapien eget ex.</td><td>Proin eleifend dictum ipsum, non euismod ipsum pulvinar et. Vivamus sollicitudin, quam in pulvinar aliquam, metus elit pretium purus</td><td>Proin sit amet velit nec enim imperdiet vehicula.</td><td>Ut bibendum vestibulum quam, eu egestas turpis gravida nec</td><td>Sed scelerisque nec turpis vel viverra. Vivamus vitae pretium sapien</td></tr></tbody></table>
<h2 id="代码块" class="heading">代码块<a href="#代码块" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<h3 id="syntax" class="heading">Syntax<a href="#syntax" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>we can use 3 backticks \`\`\` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntac, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash</p>
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.eyz6w.css"><script type="module" src="/_astro/ec.0vx5m.js"><\/script><figure class="frame"><figcaption class="header"></figcaption><pre data-language="html"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;!</span><span style="--0:#AF4238;--1:#E6888F">doctype</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">html</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">html</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">lang</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"en"</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">head</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">meta</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">charset</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"utf-8"</span><span style="--0:#383A42;--1:#ABB2BF"> /></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">title</span><span style="--0:#383A42;--1:#ABB2BF">>Example HTML5 Document&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">title</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">head</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">body</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">12</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">13</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">14</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">15</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">16</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">17</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">18</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">19</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">20</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">21</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">22</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">23</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">24</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">25</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">26</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">body</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">27</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">html</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">28</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;!</span><span style="--0:#AF4238;--1:#E6888F">doctype</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">html</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">29</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">html</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">lang</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"en"</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">30</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">head</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">31</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">meta</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">charset</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"utf-8"</span><span style="--0:#383A42;--1:#ABB2BF"> /></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">32</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">title</span><span style="--0:#383A42;--1:#ABB2BF">>Example HTML5 Document&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">title</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">33</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">head</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">34</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">body</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">35</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">36</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">body</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">37</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">html</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">38</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;!</span><span style="--0:#AF4238;--1:#E6888F">doctype</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">html</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">39</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">html</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">lang</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"en"</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">40</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">head</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">41</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">meta</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">charset</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"utf-8"</span><span style="--0:#383A42;--1:#ABB2BF"> /></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">42</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">title</span><span style="--0:#383A42;--1:#ABB2BF">>Example HTML5 Document&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">title</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">43</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">head</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">44</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">body</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">45</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">46</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">body</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">47</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">html</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">48</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;!</span><span style="--0:#AF4238;--1:#E6888F">doctype</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">html</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">49</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">html</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">lang</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"en"</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">50</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">head</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">51</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">meta</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">charset</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"utf-8"</span><span style="--0:#383A42;--1:#ABB2BF"> /></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">52</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">title</span><span style="--0:#383A42;--1:#ABB2BF">>Example HTML5 Document&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">title</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">53</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">head</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">54</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">body</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">55</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">>Test&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">56</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">body</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">57</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">html</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="<!doctype html><html lang=&#x22;en&#x22;>  <head>    <meta charset=&#x22;utf-8&#x22; />    <title>Example HTML5 Document</title>  </head>  <body>    <p>Test</p>    <p>Test</p>    <p>Test</p>    <p>Test</p>    <p>Test</p>    <p>Test</p>    <p>Test</p>    <p>Test</p>    <p>Test</p>    <p>Test</p>    <p>Test</p>    <p>Test</p>    <p>Test</p>    <p>Test</p>    <p>Test</p>    <p>Test</p>    <p>Test</p>    <p>Test</p>  </body></html><!doctype html><html lang=&#x22;en&#x22;>  <head>    <meta charset=&#x22;utf-8&#x22; />    <title>Example HTML5 Document</title>  </head>  <body>    <p>Test</p>  </body></html><!doctype html><html lang=&#x22;en&#x22;>  <head>    <meta charset=&#x22;utf-8&#x22; />    <title>Example HTML5 Document</title>  </head>  <body>    <p>Test</p>  </body></html><!doctype html><html lang=&#x22;en&#x22;>  <head>    <meta charset=&#x22;utf-8&#x22; />    <title>Example HTML5 Document</title>  </head>  <body>    <p>Test</p>  </body></html>"><div></div></button></div></figure></div>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="text"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383a42;--1:#abb2bf">const var text = "hello world"</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="const var text = &#x22;hello world&#x22;"><div></div></button></div></figure></div>
<h2 id="katex-公式" class="heading">KaTeX 公式<a href="#katex-公式" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>使用 <code>$</code> 符号包裹公式生成行内公式，例如：<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">E = mc^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord mathnormal">m</span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>。</p>
<p>使用 <code>$$</code> 符号包裹公式来生成独立公式。例如：</p>
<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi></mrow></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">e^{i\\pi} + 1 = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.958em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8747em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">iπ</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span></span>
<p>也可以使用代码块（<code>\`\`\`math</code>）的方式：</p>
<span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><msub><mo>∮</mo><mrow><mi mathvariant="normal">∂</mi><mi>V</mi></mrow></msub><mi mathvariant="bold">E</mi><mo>⋅</mo><mi>d</mi><mi mathvariant="bold">A</mi><mo>=</mo><mfrac><mi>Q</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mfrac></mrow><annotation encoding="application/x-tex">\\oint_{\\partial V} \\mathbf{E} \\cdot d\\mathbf{A} = \\frac{Q}{\\epsilon_0}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.2719em;vertical-align:-0.9119em;"></span><span class="mop"><span class="mop op-symbol large-op" style="margin-right:0.44445em;position:relative;top:-0.0011em;">∮</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:-0.4258em;"><span style="top:-1.7881em;margin-left:-0.4445em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight" style="margin-right:0.05556em;">∂</span><span class="mord mathnormal mtight" style="margin-right:0.22222em;">V</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.9119em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathbf">E</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">⋅</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">d</span><span class="mord mathbf">A</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.1963em;vertical-align:-0.836em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3603em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal">ϵ</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">Q</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.836em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span></span>
<h2 id="list-types" class="heading">List Types<a href="#list-types" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<h3 id="ordered-list" class="heading">Ordered List<a href="#ordered-list" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<h4 id="syntax-1" class="heading">Syntax<a href="#syntax-1" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h4>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="markdown"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">1.</span><span style="--0:#383A42;--1:#ABB2BF"> First item</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">2.</span><span style="--0:#383A42;--1:#ABB2BF"> Second item</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">3.</span><span style="--0:#383A42;--1:#ABB2BF"> Third item</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="1. First item2. Second item3. Third item"><div></div></button></div></figure></div>
<h4 id="output" class="heading">Output<a href="#output" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h4>
<ol>
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
</ol>
<h3 id="unordered-list" class="heading">Unordered List<a href="#unordered-list" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<h4 id="syntax-2" class="heading">Syntax<a href="#syntax-2" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h4>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="markdown"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">-</span><span style="--0:#383A42;--1:#ABB2BF"> List item</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">-</span><span style="--0:#383A42;--1:#ABB2BF"> Another item</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">-</span><span style="--0:#383A42;--1:#ABB2BF"> And another item</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="- List item- Another item- And another item"><div></div></button></div></figure></div>
<h4 id="output-1" class="heading">Output<a href="#output-1" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h4>
<ul>
<li>List item</li>
<li>Another item</li>
<li>And another item</li>
</ul>
<h3 id="nested-list" class="heading">Nested list<a href="#nested-list" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<h4 id="syntax-3" class="heading">Syntax<a href="#syntax-3" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h4>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="markdown"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">-</span><span style="--0:#383A42;--1:#ABB2BF"> Fruit</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent"><span style="--0:#383A42">  </span></span><span style="--0:#383A42;--1:#E5C07B">-</span><span style="--0:#383A42;--1:#ABB2BF"> Apple</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent"><span style="--0:#383A42">  </span></span><span style="--0:#383A42;--1:#E5C07B">-</span><span style="--0:#383A42;--1:#ABB2BF"> Orange</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent"><span style="--0:#383A42">  </span></span><span style="--0:#383A42;--1:#E5C07B">-</span><span style="--0:#383A42;--1:#ABB2BF"> Banana</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#383A42;--1:#E5C07B">-</span><span style="--0:#383A42;--1:#ABB2BF"> Dairy</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent"><span style="--0:#383A42">  </span></span><span style="--0:#383A42;--1:#E5C07B">-</span><span style="--0:#383A42;--1:#ABB2BF"> Milk</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent"><span style="--0:#383A42">  </span></span><span style="--0:#383A42;--1:#E5C07B">-</span><span style="--0:#383A42;--1:#ABB2BF"> Cheese</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="- Fruit  - Apple  - Orange  - Banana- Dairy  - Milk  - Cheese"><div></div></button></div></figure></div>
<h4 id="output-2" class="heading">Output<a href="#output-2" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h4>
<ul>
<li>Fruit
<ul>
<li>Apple</li>
<li>Orange</li>
<li>Banana</li>
</ul>
</li>
<li>Dairy
<ul>
<li>Milk</li>
<li>Cheese</li>
</ul>
</li>
</ul>
<h2 id="other-elements--abbr-sub-sup-kbd-mark" class="heading">Other Elements — abbr, sub, sup, kbd, mark<a href="#other-elements--abbr-sub-sup-kbd-mark" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<h3 id="syntax-4" class="heading">Syntax<a href="#syntax-4" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="markdown"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">abbr</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">title</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"Graphics Interchange Format"</span><span style="--0:#383A42;--1:#ABB2BF">>GIF&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">abbr</span><span style="--0:#383A42;--1:#ABB2BF">> is a bitmap image format.</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">H&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">sub</span><span style="--0:#383A42;--1:#ABB2BF">>2&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">sub</span><span style="--0:#383A42;--1:#ABB2BF">>O</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">X&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">sup</span><span style="--0:#383A42;--1:#ABB2BF">>n&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">sup</span><span style="--0:#383A42;--1:#ABB2BF">> + Y&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">sup</span><span style="--0:#383A42;--1:#ABB2BF">>n&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">sup</span><span style="--0:#383A42;--1:#ABB2BF">> = Z&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">sup</span><span style="--0:#383A42;--1:#ABB2BF">>n&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">sup</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">Press &#x3C;</span><span style="--0:#AF4238;--1:#E6888F">kbd</span><span style="--0:#383A42;--1:#ABB2BF">>&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">kbd</span><span style="--0:#383A42;--1:#ABB2BF">>CTRL&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">kbd</span><span style="--0:#383A42;--1:#ABB2BF">>+&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">kbd</span><span style="--0:#383A42;--1:#ABB2BF">>ALT&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">kbd</span><span style="--0:#383A42;--1:#ABB2BF">>+&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">kbd</span><span style="--0:#383A42;--1:#ABB2BF">>Delete&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">kbd</span><span style="--0:#383A42;--1:#ABB2BF">>&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">kbd</span><span style="--0:#383A42;--1:#ABB2BF">> to end the session.</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">Most &#x3C;</span><span style="--0:#AF4238;--1:#E6888F">mark</span><span style="--0:#383A42;--1:#ABB2BF">>salamanders&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">mark</span><span style="--0:#383A42;--1:#ABB2BF">> are nocturnal, and hunt for insects, worms, and other small creatures.</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="<abbr title=&#x22;Graphics Interchange Format&#x22;>GIF</abbr> is a bitmap image format.H<sub>2</sub>OX<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures."><div></div></button></div></figure></div>
<h4 id="output-3" class="heading">Output<a href="#output-3" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h4>
<p><abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.</p>
<p>H<sub>2</sub>O</p>
<p>X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup></p>
<p>Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.</p>
<p>Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.</p>
<h2 id="spoiler" class="heading">Spoiler<a href="#spoiler" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<div class="expressive-code"><figure class="frame"><figcaption class="header"></figcaption><pre data-language="md"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">||hide content||</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="||hide content||"><div></div></button></div></figure></div>
<p>正常情况下，该内容会隐藏 <span class="spoiler" title="你知道的太多了">hide content</span>，鼠标悬浮时才会显示。</p>
<section data-footnotes="" class="footnotes"><h2 class="heading" id="footnote-label">参考<a href="#footnote-label" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<ol>
<li id="user-content-fn-1">
<p>The above quote is excerpted from Rob Pike's <a href="https://www.youtube.com/watch?v=PAAkCSZUG1c" rel="noopener noreferrer" target="_blank">talk</a><i class="iconfont icon-external-link"></i> during Gopherfest, November 18, 2015. <a href="#user-content-fnref-1" data-footnote-backref="" aria-label="返回正文" class="data-footnote-backref">↩</a></p>
</li>
</ol>
</section>`,l={title:"Markdown 示例",author:"lxchapu",date:"2024-04-01T00:00:00.000Z",lastMod:"2024-04-01T00:00:00.000Z",tags:["Markdown"],category:["例子","markdown"],summary:"这是一篇 Markdown 文章的示例。展示了 Markdown 的语法和渲染效果。",comments:!1,draft:!0,readingMinutes:4.275,words:855},p="/home/runner/work/blog-source-code/blog-source-code/src/content/posts/drafted/markdown.md",d=void 0;function g(){return`
下面是在 Astro 中编写 Markdown 内容时，可以使用的一些基本 Markdown 语法示例。

## 标题

你应该避免在 Markdown 正文中重复创建一级文章标题，因为文章标题会根据 \`frontmatter\` 中 \`title\` 自动生成。

> 避免标题层级过深，一般到三级标题就够了。

## 二级

### 三级 \`inline code\`

#### 四级

##### 五级

###### 六级

## 段落

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

使用行尾使用两个空格进行段落内的换行

All work and no play makes Jack a dull boy.  
All work and no play makes Jack a dull boy.

## 图片

小尺寸的图片

![图片描述](https://picsum.photos/seed/picsum/250/400)

大尺寸的图片

![图片描述](https://picsum.photos/seed/picsum/1200/900)

带标题的图片

![图片描述](https://picsum.photos/seed/picsum/400/300 '图片标题')

## 强调

这是**重要内容**，这是*次要内容*

## 删除线

~~这是一段被删除的文本。~~

## 引用

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a \`footer\` or \`cite\` element, and optionally with in-line changes such as annotations and abbreviations.

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use *Markdown syntax* within a blockquote.

嵌套的引用

> 引用
>
> > 嵌套的引用

带脚标的引用

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## 分割线

---

## 链接

这是内部链接 [Gyoza 使用指南](/posts/guide)

这是外部连接 [React **中文**文档](https://zh-hans.react.dev/)

自动渲染成连接 <https://github.com>

邮箱地址 <mail@example.com>

## 表格

设置单元格对齐(默认左对齐)

| Name  | Age |  Fruit |
| :---- | :-: | -----: |
| Bob   | 27  |  Apple |
| Alice | 23  | Banana |
| John  | 28  | Orange |

支持行内 Markdown

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| *italics* | **bold** | \`code\` |

表格溢出

| A                                                        | B                                                                                                             | C                                                                                                                                    | D                                                 | E                                                          | F                                                                    |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------- |
| Lorem ipsum dolor sit amet, consectetur adipiscing elit. | Phasellus ultricies, sapien non euismod aliquam, dui ligula tincidunt odio, at accumsan nulla sapien eget ex. | Proin eleifend dictum ipsum, non euismod ipsum pulvinar et. Vivamus sollicitudin, quam in pulvinar aliquam, metus elit pretium purus | Proin sit amet velit nec enim imperdiet vehicula. | Ut bibendum vestibulum quam, eu egestas turpis gravida nec | Sed scelerisque nec turpis vel viverra. Vivamus vitae pretium sapien |

## 代码块

### Syntax

we can use 3 backticks \`\`\` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntac, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash

\`\`\`html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
    <p>Test</p>
    <p>Test</p>
    <p>Test</p>
    <p>Test</p>
    <p>Test</p>
    <p>Test</p>
    <p>Test</p>
    <p>Test</p>
    <p>Test</p>
    <p>Test</p>
    <p>Test</p>
    <p>Test</p>
    <p>Test</p>
    <p>Test</p>
    <p>Test</p>
    <p>Test</p>
    <p>Test</p>
  </body>
</html>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
\`\`\`

\`\`\`text
const var text = "hello world"
\`\`\`

## KaTeX 公式

使用 \`$\` 符号包裹公式生成行内公式，例如：$E = mc^2$。

使用 \`$$\` 符号包裹公式来生成独立公式。例如：

$$
e^{i\\pi} + 1 = 0
$$

也可以使用代码块（\` \`\`\`math \`）的方式：

\`\`\`math
\\oint_{\\partial V} \\mathbf{E} \\cdot d\\mathbf{A} = \\frac{Q}{\\epsilon_0}
\`\`\`

## List Types

### Ordered List

#### Syntax

\`\`\`markdown
1. First item
2. Second item
3. Third item
\`\`\`

#### Output

1. First item
2. Second item
3. Third item

### Unordered List

#### Syntax

\`\`\`markdown
- List item
- Another item
- And another item
\`\`\`

#### Output

- List item
- Another item
- And another item

### Nested list

#### Syntax

\`\`\`markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
\`\`\`

#### Output

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

### Syntax

\`\`\`markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
\`\`\`

#### Output

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.

## Spoiler

\`\`\`md
||hide content||
\`\`\`

正常情况下，该内容会隐藏 ||hide content||，鼠标悬浮时才会显示。
`}function b(){return a}function x(){return[{depth:2,slug:"标题",text:"标题"},{depth:2,slug:"二级",text:"二级"},{depth:3,slug:"三级-inline-code",text:"三级 inline code"},{depth:4,slug:"四级",text:"四级"},{depth:5,slug:"五级",text:"五级"},{depth:6,slug:"六级",text:"六级"},{depth:2,slug:"段落",text:"段落"},{depth:2,slug:"图片",text:"图片"},{depth:2,slug:"强调",text:"强调"},{depth:2,slug:"删除线",text:"删除线"},{depth:2,slug:"引用",text:"引用"},{depth:2,slug:"分割线",text:"分割线"},{depth:2,slug:"链接",text:"链接"},{depth:2,slug:"表格",text:"表格"},{depth:2,slug:"代码块",text:"代码块"},{depth:3,slug:"syntax",text:"Syntax"},{depth:2,slug:"katex-公式",text:"KaTeX 公式"},{depth:2,slug:"list-types",text:"List Types"},{depth:3,slug:"ordered-list",text:"Ordered List"},{depth:4,slug:"syntax-1",text:"Syntax"},{depth:4,slug:"output",text:"Output"},{depth:3,slug:"unordered-list",text:"Unordered List"},{depth:4,slug:"syntax-2",text:"Syntax"},{depth:4,slug:"output-1",text:"Output"},{depth:3,slug:"nested-list",text:"Nested list"},{depth:4,slug:"syntax-3",text:"Syntax"},{depth:4,slug:"output-2",text:"Output"},{depth:2,slug:"other-elements--abbr-sub-sup-kbd-mark",text:"Other Elements — abbr, sub, sup, kbd, mark"},{depth:3,slug:"syntax-4",text:"Syntax"},{depth:4,slug:"output-3",text:"Output"},{depth:2,slug:"spoiler",text:"Spoiler"},{depth:2,slug:"footnote-label",text:"参考"}]}const f=n((c,r,o)=>{const{layout:v,...s}=l;return s.file=p,s.url=d,e`${t()}${i(a)}`});export{f as Content,b as compiledContent,f as default,p as file,l as frontmatter,x as getHeadings,g as rawContent,d as url};
