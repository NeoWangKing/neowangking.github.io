import{c as n,r as i,m as e}from"./render-template.DMR6LJA0.js";import{u as t}from"./PostTagsList.BHZ-WoFS.js";import"./astro/assets-service.DLSo0gp6.js";import"./jsx-runtime.-xR-R7lh.js";import"./index.SeRWem-E.js";import"./_commonjsHelpers.BosuxZz1.js";import"./clsx.B-dksMZM.js";const a=`<h2 id="tailwind-css-简介" class="heading">Tailwind CSS 简介<a href="#tailwind-css-简介" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<p>Tailwind CSS 是一个实用优先的 CSS 框架，它提供大量原子类（如 <code>p-4</code>、<code>text-center</code>、<code>bg-blue-500</code>），让你无需离开 HTML 即可快速构建自定义设计。在 Astro 中使用 Tailwind 可以大幅提升开发效率，并保证最终样式文件的最小体积（通过 PurgeCSS 自动移除未使用的类）。</p>
<h3 id="tailwind-css-的优势" class="heading">Tailwind CSS 的优势<a href="#tailwind-css-的优势" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>在不支持 Tailwind CSS 的传统项目上为网页设计样式时，需要单独编写 CSS 样式。例如：</p>
<div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="https://q1.qlogo.cn/g?b=qq&#x26;nk=3245938285&#x26;s=640" alt="ChitChat Logo">
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
<div class="expressive-code"><link rel="stylesheet" href="/_astro/ec.eyz6w.css"><script type="module" src="/_astro/ec.0vx5m.js"><\/script><figure class="frame has-title"><figcaption class="header"><span class="title">html</span></figcaption><pre data-language="html"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">class</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"chat-notification"</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">class</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"chat-notification-logo-wrapper"</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">img</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">class</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"chat-notification-logo"</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">src</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"/img/logo.svg"</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">alt</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"ChitChat Logo"</span><span style="--0:#383A42;--1:#ABB2BF"> /></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">class</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"chat-notification-content"</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">h4</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">class</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"chat-notification-title"</span><span style="--0:#383A42;--1:#ABB2BF">>ChitChat&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">h4</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">class</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"chat-notification-message"</span><span style="--0:#383A42;--1:#ABB2BF">>You have a new message!&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">10</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">11</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">style</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">12</div></div><div class="code"><span class="indent">  </span><span style="--0:#875D01;--1:#D19A66">.chat-notification</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">13</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">display: </span><span style="--0:#383A42;--1:#D19A66">flex</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">14</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">align-items: </span><span style="--0:#383A42;--1:#D19A66">center</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">15</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">max-width: </span><span style="--0:#875D01;--1:#D19A66">24</span><span style="--0:#875D01;--1:#E6888F">rem</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">16</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">margin: </span><span style="--0:#875D01;--1:#D19A66">0</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#383A42;--1:#D19A66">auto</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">17</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">padding: </span><span style="--0:#875D01;--1:#D19A66">1.5</span><span style="--0:#875D01;--1:#E6888F">rem</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">18</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">border-radius: </span><span style="--0:#875D01;--1:#D19A66">0.5</span><span style="--0:#875D01;--1:#E6888F">rem</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">19</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">background-color: </span><span style="--1:#D19A66"><span style="--0:#875D01">#</span><span style="--0:#016C9A">fff</span></span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">20</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">box-shadow:</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">21</div></div><div class="code"><span class="indent">      </span><span style="--0:#875D01;--1:#D19A66">0</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">20</span><span style="--0:#875D01;--1:#E6888F">px</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">25</span><span style="--0:#875D01;--1:#E6888F">px</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">-5</span><span style="--0:#875D01;--1:#E6888F">px</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#016C9A;--1:#56B6C2">rgba</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#875D01;--1:#D19A66">0</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#875D01;--1:#D19A66">0</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#875D01;--1:#D19A66">0</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#875D01;--1:#D19A66">0.1</span><span style="--0:#383A42;--1:#ABB2BF">),</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">22</div></div><div class="code"><span class="indent">      </span><span style="--0:#875D01;--1:#D19A66">0</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">10</span><span style="--0:#875D01;--1:#E6888F">px</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">10</span><span style="--0:#875D01;--1:#E6888F">px</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">-5</span><span style="--0:#875D01;--1:#E6888F">px</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#016C9A;--1:#56B6C2">rgba</span><span style="--0:#383A42;--1:#ABB2BF">(</span><span style="--0:#875D01;--1:#D19A66">0</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#875D01;--1:#D19A66">0</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#875D01;--1:#D19A66">0</span><span style="--0:#383A42;--1:#ABB2BF">, </span><span style="--0:#875D01;--1:#D19A66">0.04</span><span style="--0:#383A42;--1:#ABB2BF">);</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">23</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">24</div></div><div class="code"><span class="indent">  </span><span style="--0:#875D01;--1:#D19A66">.chat-notification-logo-wrapper</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">25</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">flex-shrink: </span><span style="--0:#875D01;--1:#D19A66">0</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">26</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">27</div></div><div class="code"><span class="indent">  </span><span style="--0:#875D01;--1:#D19A66">.chat-notification-logo</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">28</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">height: </span><span style="--0:#875D01;--1:#D19A66">3</span><span style="--0:#875D01;--1:#E6888F">rem</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">29</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">width: </span><span style="--0:#875D01;--1:#D19A66">3</span><span style="--0:#875D01;--1:#E6888F">rem</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">30</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">31</div></div><div class="code"><span class="indent">  </span><span style="--0:#875D01;--1:#D19A66">.chat-notification-content</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">32</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">margin-left: </span><span style="--0:#875D01;--1:#D19A66">1.5</span><span style="--0:#875D01;--1:#E6888F">rem</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">33</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">34</div></div><div class="code"><span class="indent">  </span><span style="--0:#875D01;--1:#D19A66">.chat-notification-title</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">35</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">color: </span><span style="--1:#D19A66"><span style="--0:#875D01">#</span><span style="--0:#016C9A">1a202c</span></span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">36</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">font-size: </span><span style="--0:#875D01;--1:#D19A66">1.25</span><span style="--0:#875D01;--1:#E6888F">rem</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">37</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">line-height: </span><span style="--0:#875D01;--1:#D19A66">1.25</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">38</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">39</div></div><div class="code"><span class="indent">  </span><span style="--0:#875D01;--1:#D19A66">.chat-notification-message</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">40</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">color: </span><span style="--1:#D19A66"><span style="--0:#875D01">#</span><span style="--0:#016C9A">718096</span></span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">41</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">font-size: </span><span style="--0:#875D01;--1:#D19A66">1</span><span style="--0:#875D01;--1:#E6888F">rem</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">42</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">line-height: </span><span style="--0:#875D01;--1:#D19A66">1.5</span><span style="--0:#383A42;--1:#ABB2BF">;</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">43</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">44</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">style</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="<div class=&#x22;chat-notification&#x22;>  <div class=&#x22;chat-notification-logo-wrapper&#x22;>    <img class=&#x22;chat-notification-logo&#x22; src=&#x22;/img/logo.svg&#x22; alt=&#x22;ChitChat Logo&#x22; />  </div>  <div class=&#x22;chat-notification-content&#x22;>    <h4 class=&#x22;chat-notification-title&#x22;>ChitChat</h4>    <p class=&#x22;chat-notification-message&#x22;>You have a new message!</p>  </div></div><style>  .chat-notification {    display: flex;    align-items: center;    max-width: 24rem;    margin: 0 auto;    padding: 1.5rem;    border-radius: 0.5rem;    background-color: #fff;    box-shadow:      0 20px 25px -5px rgba(0, 0, 0, 0.1),      0 10px 10px -5px rgba(0, 0, 0, 0.04);  }  .chat-notification-logo-wrapper {    flex-shrink: 0;  }  .chat-notification-logo {    height: 3rem;    width: 3rem;  }  .chat-notification-content {    margin-left: 1.5rem;  }  .chat-notification-title {    color: #1a202c;    font-size: 1.25rem;    line-height: 1.25;  }  .chat-notification-message {    color: #718096;    font-size: 1rem;    line-height: 1.5;  }</style>"><div></div></button></div></figure></div>
<p>而使用 Tailwind ，就可以直接在 HTML 中应用已有的类来样式化元素。</p>
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4">
  <div class="shrink-0">
    <img class="size-12" src="https://q1.qlogo.cn/g?b=qq&#x26;nk=3245938285&#x26;s=640" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">html</span></figcaption><pre data-language="html"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">class</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4"</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">class</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"shrink-0"</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">img</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">class</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"size-12"</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">src</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"/img/logo.svg"</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">alt</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"ChitChat Logo"</span><span style="--0:#383A42;--1:#ABB2BF"> /></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">class</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"text-xl font-medium text-black"</span><span style="--0:#383A42;--1:#ABB2BF">>ChitChat&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">class</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"text-slate-500"</span><span style="--0:#383A42;--1:#ABB2BF">>You have a new message!&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="<div class=&#x22;p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4&#x22;>  <div class=&#x22;shrink-0&#x22;>    <img class=&#x22;size-12&#x22; src=&#x22;/img/logo.svg&#x22; alt=&#x22;ChitChat Logo&#x22; />  </div>  <div>    <div class=&#x22;text-xl font-medium text-black&#x22;>ChitChat</div>    <p class=&#x22;text-slate-500&#x22;>You have a new message!</p>  </div></div>"><div></div></button></div></figure></div>
<p>效果与前面一致。</p>
<p>显然，使用 Tailwind 对前端的开发者更加的友好，它主要有以下好处：</p>
<ul>
<li><strong>不用费心去设计元素的类名或者 ID</strong>：在传统的流程中，每添加一个组件都需要费心为它分配一个“完美的”名称，而使用 Tailwind 就只需要把精力放在样式的设计上；</li>
<li><strong>避免了 CSS 文件的不停膨胀</strong>：在传统的流程中，每次添加新的类别或者组件，都要更新 CSS 文件，导致 CSS 文件的大小不断膨胀；</li>
<li><strong>更加安全的调整样式</strong>：用传统方法，CSS 的样式是全局的，做出更改时永远不知道会有什么隐性的破坏，使用 Tailwind 就很好的避免了这点。</li>
</ul>
<h2 id="安装与配置" class="heading">安装与配置<a href="#安装与配置" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<h3 id="安装-tailwind-css" class="heading">安装 Tailwind CSS<a href="#安装-tailwind-css" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>在 Astro 项目的根目录下运行以下命令来安装 Tailwind CSS 及其依赖：</p>
<div class="expressive-code"><figure class="frame is-terminal"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">npm</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">install</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">-D</span><span style="--0:#383A42;--1:#ABB2BF"> </span><mark><span style="--0:#2e5c2e;--1:#98C379">tailwindcss</span></mark><span style="--0:#383A42;--1:#ABB2BF"> </span><mark><span style="--0:#2e5c2e;--1:#98C379">@astrojs/tailwind</span></mark></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"># 或</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">yarn</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">add</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">-D</span><span style="--0:#383A42;--1:#ABB2BF"> </span><mark><span style="--0:#2e5c2e;--1:#98C379">tailwindcss</span></mark><span style="--0:#383A42;--1:#ABB2BF"> </span><mark><span style="--0:#2e5c2e;--1:#98C379">@astrojs/tailwind</span></mark></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"># 或</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">pnpm</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">add</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">-D</span><span style="--0:#383A42;--1:#ABB2BF"> </span><mark><span style="--0:#2e5c2e;--1:#98C379">tailwindcss</span></mark><span style="--0:#383A42;--1:#ABB2BF"> </span><mark><span style="--0:#2e5c2e;--1:#98C379">@astrojs/tailwind</span></mark></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="npm install -D tailwindcss @astrojs/tailwindyarn add -D tailwindcss @astrojs/tailwindpnpm add -D tailwindcss @astrojs/tailwind"><div></div></button></div></figure></div>
<p>这串命令安装了两个部分</p>
<ul>
<li><code>tailwindcss</code> ：Tailwind CSS 的核心库</li>
<li><code>@astrojs/tailwind</code> ：Astro 官方的 Tailwind 集成包</li>
</ul>
<h3 id="配置-astro-和-tailwind" class="heading">配置 Astro 和 Tailwind<a href="#配置-astro-和-tailwind" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>在 <code>astro.config.mjs/astro.config.js</code> 中添加 Tailwind 集成：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">astro.config.mjs</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> { </span><span style="--0:#AF4238;--1:#E6888F">defineConfig</span><span style="--0:#383A42;--1:#ABB2BF"> } </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'astro/config'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">import</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#AF4238;--1:#E6888F">tailwind</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#A626A4;--1:#CD89E1">from</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">'@astrojs/tailwind'</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">export</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#AF4238;--1:#CD89E1">default</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#3360C1;--1:#61AFEF">defineConfig</span><span style="--0:#383A42;--1:#ABB2BF">({</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">  </span><span style="--0:#AF4238;--1:#E6888F">integrations</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> [</span></span><span style="--0:#3360C1;--1:#61AFEF">tailwind</span><span style="--0:#383A42;--1:#ABB2BF">()],</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span style="--0:#383A42;--1:#b0b6c3">})</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="import { defineConfig } from &#x27;astro/config&#x27;import tailwind from &#x27;@astrojs/tailwind&#x27;export default defineConfig({  integrations: [tailwind()],})"><div></div></button></div></figure></div>
<h3 id="生成-tailwind-配置文件" class="heading">生成 Tailwind 配置文件<a href="#生成-tailwind-配置文件" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>执行以下命令自动生成 <code>tailwind.config.js</code> ：</p>
<div class="expressive-code"><figure class="frame is-terminal"><figcaption class="header"><span class="title"></span><span class="sr-only">Terminal window</span></figcaption><pre data-language="bash"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#3360C1;--1:#61AFEF">npx</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">tailwindcss</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#387138;--1:#98C379">init</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="npx tailwindcss init"><div></div></button></div></figure></div>
<p>在生成的配置文件 <code>tailwind.config.js</code> 中添加所有模板文件的路径：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">tailwind.config.js</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/** </span><span style="--1:#CD89E1;--1fs:italic"><span style="--0:#383A42;--0fs:italic">@</span><span style="--0:#A626A4;--0fs:italic">type</span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span><span style="--0:#885D01;--0fs:italic;--1:#E5C07B;--1fs:italic">{import('tailwindcss').Config}</span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#AF4238;--1:#E5C07B">module</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#AF4238;--1:#E5C07B">exports</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#016C9A;--1:#56B6C2">=</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent">  </span><span style="--0:#8b352d;--1:#eca3a8">content</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> [</span></span><span style="--0:#2e5c2e;--1:#98C379">'./src/**/*.{html,js}'</span><span style="--0:#383A42;--1:#b0b6c3">],</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">  </span><span style="--0:#AF4238;--1:#E6888F">theme</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> {</span></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">    </span><span style="--0:#AF4238;--1:#E6888F">extend</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> {},</span></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">},</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent">  </span><span style="--0:#AF4238;--1:#E6888F">plugins</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> [],</span></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="/** @type {import(&#x27;tailwindcss&#x27;).Config} */module.exports = {  content: [&#x27;./src/**/*.{html,js}&#x27;],  theme: {    extend: {},  },  plugins: [],}"><div></div></button></div></figure></div>
<h2 id="tailwind-的基本使用" class="heading">Tailwind 的基本使用<a href="#tailwind-的基本使用" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h2>
<h3 id="在-astro-组件中使用" class="heading">在 Astro 组件中使用<a href="#在-astro-组件中使用" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>在 <code>.astro</code> 组件的模板部分直接使用 Tailwind 类名：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">---</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 无需额外代码</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">---</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">class</span><span style="--0:#383A42;--1:#ABB2BF">=</span><mark><span style="--0:#2e5c2e;--1:#98C379">"p-4 bg-blue-500 text-white rounded-lg"</span></mark><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">h1</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">class</span><span style="--0:#383A42;--1:#ABB2BF">=</span><mark><span style="--0:#2e5c2e;--1:#98C379">"text-2xl font-bold"</span></mark><span style="--0:#383A42;--1:#ABB2BF">>Hello, Tailwind!&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">h1</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">class</span><span style="--0:#383A42;--1:#ABB2BF">=</span><mark><span style="--0:#2e5c2e;--1:#98C379">"mt-2"</span></mark><span style="--0:#383A42;--1:#ABB2BF">>这是一个使用 Tailwind CSS 的 Astro 组件。&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">p</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="---// 无需额外代码---<div class=&#x22;p-4 bg-blue-500 text-white rounded-lg&#x22;>  <h1 class=&#x22;text-2xl font-bold&#x22;>Hello, Tailwind!</h1>  <p class=&#x22;mt-2&#x22;>这是一个使用 Tailwind CSS 的 Astro 组件。</p></div>"><div></div></button></div></figure></div>
<h3 id="在-markdownmdx-中使用" class="heading">在 Markdown/MDX 中使用<a href="#在-markdownmdx-中使用" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>在 <code>.md</code> 或 <code>.mdx</code> 文件中，同样可以直接使用 Tailwind 类，但有个前置条件</p>
<ol>
<li>
<p>你可以选择在 Markdown 文件的头部中声明布局组件并且在布局组件中链接到 <code>global.css</code>：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">md</span></figcaption><pre data-language="md"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">---</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#8b352d;--1:#eca3a8">layout</span><span style="--0:#383A42;--1:#b0b6c3">: </span><span style="--0:#2e5c2e;--1:#98C379">../layouts/Layout.astro //其中链接了 global.css</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">---</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">span</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">class</span><span style="--0:#383A42;--1:#ABB2BF">=</span><mark><span style="--0:#2e5c2e;--1:#98C379">"text-blue-500"</span></mark><span style="--0:#383A42;--1:#ABB2BF">>蓝色文字&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">span</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="---layout: ../layouts/Layout.astro //其中链接了 global.css---<span class=&#x22;text-blue-500&#x22;>蓝色文字</span>"><div></div></button></div></figure></div>
</li>
<li>
<p>或者你也可以在 <code>tailwind.config.js</code> 中直接支持 <code>.md</code> 文件：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">tailwind.config.js</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">/** </span><span style="--1:#CD89E1;--1fs:italic"><span style="--0:#383A42;--0fs:italic">@</span><span style="--0:#A626A4;--0fs:italic">type</span></span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> </span><span style="--0:#885D01;--0fs:italic;--1:#E5C07B;--1fs:italic">{import('tailwindcss').Config}</span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic"> */</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#AF4238;--1:#E5C07B">module</span><span style="--0:#383A42;--1:#ABB2BF">.</span><span style="--0:#AF4238;--1:#E5C07B">exports</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#016C9A;--1:#56B6C2">=</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent">  </span><span style="--0:#AF4238;--1:#E6888F">content</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> [</span></span><span style="--0:#387138;--1:#98C379">'./src/**/*.{html,js,</span><mark><span style="--0:#2e5c2e;--1:#98C379">md</span></mark><span style="--0:#387138;--1:#98C379">}'</span><span style="--0:#383A42;--1:#ABB2BF">],</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span class="indent">  </span><span style="--0:#AF4238;--1:#E6888F">theme</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> {</span></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span class="indent">    </span><span style="--0:#AF4238;--1:#E6888F">extend</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> {},</span></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">},</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent">  </span><span style="--0:#AF4238;--1:#E6888F">plugins</span><span style="--1:#ABB2BF"><span style="--0:#016C9A">:</span><span style="--0:#383A42"> [],</span></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="/** @type {import(&#x27;tailwindcss&#x27;).Config} */module.exports = {  content: [&#x27;./src/**/*.{html,js,md}&#x27;],  theme: {    extend: {},  },  plugins: [],}"><div></div></button></div></figure></div>
</li>
</ol>
<h3 id="响应式设计" class="heading">响应式设计<a href="#响应式设计" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>Tailwind 提供了响应式的前缀，如：<code>sm:</code>、<code>md:</code>、<code>lg:</code>、<code>xl:</code>、<code>hover:</code>等：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">html</span></figcaption><pre data-language="html"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">class</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"text-center sm:text-left md:text-right lg:text-center"</span><span style="--0:#383A42;--1:#ABB2BF">>响应式文本对齐&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="<div class=&#x22;text-center sm:text-left md:text-right lg:text-center&#x22;>响应式文本对齐</div>"><div></div></button></div></figure></div>
<h3 id="暗色模式" class="heading">暗色模式<a href="#暗色模式" class="heading-anchor" aria-label="Heading Anchor"><i class="iconfont icon-link"></i></a></h3>
<p>在 <code>tailwind.config.js</code> 中开启暗色模式策略（推荐使用 <code>class</code> 策略，以便手动调整）：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">js</span></figcaption><pre data-language="js"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">export</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#AF4238;--1:#CD89E1">default</span><span style="--0:#383A42;--1:#ABB2BF"> {</span></div></div><div class="ec-line highlight mark"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span class="indent">  </span><span style="--0:#8b352d;--1:#eca3a8">darkMode</span><span style="--1:#b0b6c3"><span style="--0:#01587d">:</span><span style="--0:#383A42"> </span></span><span style="--0:#2e5c2e;--1:#98C379">'class'</span><span style="--0:#383A42;--1:#b0b6c3">,</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span class="indent">  </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// ...</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">}</span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="export default {  darkMode: &#x27;class&#x27;,  // ...}"><div></div></button></div></figure></div>
<p>然后就可以在 HTML 的根元素上添加 <code>dark</code> 类以触发暗色模式。当然在 Astro 中也可以使用逻辑判断等方式来自动切换暗色模式：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">astro</span></figcaption><pre data-language="astro"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">---</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">2</div></div><div class="code"><span style="--0:#A626A4;--1:#CD89E1">const</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#E5C07B">isDark</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#016C9A;--1:#56B6C2">=</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">false</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">// 根据实际情况设置</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">3</div></div><div class="code"><span style="--0:#646568;--0fs:italic;--1:#9FA3AA;--1fs:italic">---</span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">4</div></div><div class="code">
</div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">5</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">html</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">class</span><span style="--0:#383A42;--1:#ABB2BF">=</span><mark><span style="--0:#a20f36;--1:#d8a3e8">{</span><span style="--0:#383A42;--1:#eca3a8">isDark</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#01587d;--1:#d8a3e8">?</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#2e5c2e;--1:#98C379">'dark'</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#01587d;--1:#d8a3e8">:</span><span style="--0:#383A42;--1:#b0b6c3"> </span><span style="--0:#2e5c2e;--1:#98C379">''</span><span style="--0:#a20f36;--1:#d8a3e8">}</span></mark><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">6</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">body</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">7</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">    </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">slot</span><span style="--0:#383A42;--1:#ABB2BF"> /></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">8</div></div><div class="code"><span class="indent"><span style="--0:#383A42;--1:#ABB2BF">  </span></span><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">body</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">9</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">html</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="---const isDark = false // 根据实际情况设置---<html class={isDark ? &#x27;dark&#x27; : &#x27;&#x27;}>  <body>    <slot />  </body></html>"><div></div></button></div></figure></div>
<p>然后在使用的时候就可以直接：</p>
<div class="expressive-code"><figure class="frame has-title"><figcaption class="header"><span class="title">html</span></figcaption><pre data-language="html"><code><div class="ec-line"><div class="gutter"><div class="ln" aria-hidden="true">1</div></div><div class="code"><span style="--0:#383A42;--1:#ABB2BF">&#x3C;</span><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#383A42;--1:#ABB2BF"> </span><span style="--0:#875D01;--1:#D19A66">class</span><span style="--0:#383A42;--1:#ABB2BF">=</span><span style="--0:#387138;--1:#98C379">"bg-white </span><mark><span style="--0:#2e5c2e;--1:#98C379">dark:</span></mark><span style="--0:#387138;--1:#98C379">bg-gray-800 text-gray-900 </span><mark><span style="--0:#2e5c2e;--1:#98C379">dark:</span></mark><span style="--0:#387138;--1:#98C379">text-white"</span><span style="--0:#383A42;--1:#ABB2BF">>主题自适应&#x3C;/</span><span style="--0:#AF4238;--1:#E6888F">div</span><span style="--0:#383A42;--1:#ABB2BF">></span></div></div></code></pre><div class="copy"><div aria-live="polite"></div><button title="Copy to clipboard" data-copied="Copied!" data-code="<div class=&#x22;bg-white dark:bg-gray-800 text-gray-900 dark:text-white&#x22;>主题自适应</div>"><div></div></button></div></figure></div>`,l={title:"Astro 框架中配置与使用 Tailwind CSS",author:"NeoWangKing",date:"2026-03-27T11:14:49.000Z",lastMod:"2026-03-27T11:14:49.000Z",tags:["Astro","Tailwind CSS","前端","样式"],category:["前端开发","Astro"],summary:"本文介绍在 Astro 框架中配置和使用 Tailwind CSS 的方法，包括安装步骤、基础用法、自定义主题、响应式设计以及与 Astro 组件的集成技巧。",comments:!0,draft:!1,readingMinutes:5.5,words:1100},d="/home/runner/work/blog-source-code/blog-source-code/src/content/posts/front-end/astro/TailwindCSS-in-Astro.md",p=void 0;function f(){return`
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
`}function m(){return a}function x(){return[{depth:2,slug:"tailwind-css-简介",text:"Tailwind CSS 简介"},{depth:3,slug:"tailwind-css-的优势",text:"Tailwind CSS 的优势"},{depth:2,slug:"安装与配置",text:"安装与配置"},{depth:3,slug:"安装-tailwind-css",text:"安装 Tailwind CSS"},{depth:3,slug:"配置-astro-和-tailwind",text:"配置 Astro 和 Tailwind"},{depth:3,slug:"生成-tailwind-配置文件",text:"生成 Tailwind 配置文件"},{depth:2,slug:"tailwind-的基本使用",text:"Tailwind 的基本使用"},{depth:3,slug:"在-astro-组件中使用",text:"在 Astro 组件中使用"},{depth:3,slug:"在-markdownmdx-中使用",text:"在 Markdown/MDX 中使用"},{depth:3,slug:"响应式设计",text:"响应式设计"},{depth:3,slug:"暗色模式",text:"暗色模式"}]}const C=n((c,v,o)=>{const{layout:r,...s}=l;return s.file=d,s.url=p,i`${e()}${t(a)}`});export{C as Content,m as compiledContent,C as default,d as file,l as frontmatter,x as getHeadings,f as rawContent,p as url};
