import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as s,e as a}from"./app.9add2d53.js";const t={},c=a(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p><code>&lt;img&gt;</code>元素用于插入图片，主要继承了 HTMLImageElement 接口。</p><p>浏览器提供一个原生构造函数<code>Image</code>，用于生成<code>HTMLImageElement</code>实例。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img <span class="token keyword">instanceof</span> <span class="token class-name">Image</span> <span class="token comment">// true</span>
img <span class="token keyword">instanceof</span> <span class="token class-name">HTMLImageElement</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Image</code>构造函数可以接受两个整数作为参数，分别表示<code>&lt;img&gt;</code>元素的宽度和高度。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 语法</span>
<span class="token function">Image</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">)</span>

<span class="token comment">// 用法</span>
<span class="token keyword">var</span> myImage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>&lt;img&gt;</code>实例的<code>src</code>属性可以定义图像的网址。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;picture.jpg&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>新生成的<code>&lt;img&gt;</code>实例并不属于文档的一部分。如果想让它显示在文档中，必须手动插入文档。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;image1.png&#39;</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>img<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了使用<code>Image</code>构造，下面的方法也可以得到<code>HTMLImageElement</code>实例。</p><ul><li><code>document.images</code>的成员</li><li>节点选取方法（比如<code>document.getElementById</code>）得到的<code>&lt;img&gt;</code>节点</li><li><code>document.createElement(&#39;img&#39;)</code>生成的<code>&lt;img&gt;</code>节点</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span>images<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token keyword">instanceof</span> <span class="token class-name">HTMLImageElement</span>
<span class="token comment">// true</span>

<span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myImg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img <span class="token keyword">instanceof</span> <span class="token class-name">HTMLImageElement</span>
<span class="token comment">// true</span>

<span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img <span class="token keyword">instanceof</span> <span class="token class-name">HTMLImageElement</span>
<span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>HTMLImageElement</code>实例除了具有 Node、Element、HTMLElement 接口以外，还拥有一些独有的属性。这个接口没有定义自己的方法。</p><h2 id="特性相关的属性" tabindex="-1"><a class="header-anchor" href="#特性相关的属性" aria-hidden="true">#</a> 特性相关的属性</h2><p><strong>（1）HTMLImageElement.src</strong></p><p><code>HTMLImageElement.src</code>属性返回图像的完整网址。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;img width=&quot;300&quot; height=&quot;400&quot; id=&quot;myImg&quot; src=&quot;http://example.com/pic.jpg&quot;&gt;</span>
<span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>src <span class="token comment">// http://example.com/pic.jpg</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）HTMLImageElement.currentSrc</strong></p><p><code>HTMLImageElement.currentSrc</code>属性返回当前正在展示的图像的网址。JavaScript 和 CSS 的 mediaQuery 都可能改变正在展示的图像。</p><p><strong>（3）HTMLImageElement.alt</strong></p><p><code>HTMLImageElement.alt</code>属性可以读写<code>&lt;img&gt;</code>的 HTML 属性<code>alt</code>，表示对图片的文字说明。</p><p><strong>（4）HTMLImageElement.isMap，HTMLImageElement.useMap</strong></p><p><code>HTMLImageElement.isMap</code>属性对应<code>&lt;img&gt;</code>元素的 HTML 属性<code>ismap</code>，返回一个布尔值，表示图像是否为服务器端的图像映射的一部分。</p><p><code>HTMLImageElement.useMap</code>属性对应<code>&lt;img&gt;</code>元素的 HTML 属性<code>usemap</code>，表示当前图像对应的<code>&lt;map&gt;</code>元素。</p><p><strong>（5）HTMLImageElement.srcset，HTMLImageElement.sizes</strong></p><p><code>HTMLImageElement.srcset</code>属性和<code>HTMLImageElement.sizes</code>属性，分别用于读写<code>&lt;img&gt;</code>元素的<code>srcset</code>属性和<code>sizes</code>属性。它们用于<code>&lt;img&gt;</code>元素的响应式加载。<code>srcset</code>属性可以单独使用，但是<code>sizes</code>属性必须与<code>srcset</code>属性同时使用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;img srcset=&quot;example-320w.jpg 320w,</span>
<span class="token comment">//              example-480w.jpg 480w,</span>
<span class="token comment">//              example-800w.jpg 800w&quot;</span>
<span class="token comment">//      sizes=&quot;(max-width: 320px) 280px,</span>
<span class="token comment">//             (max-width: 480px) 440px,</span>
<span class="token comment">//             800px&quot;</span>
<span class="token comment">//      id=&quot;myImg&quot;</span>
<span class="token comment">//      src=&quot;example-800w.jpg&quot;&gt;</span>
<span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;myImg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>srcset
<span class="token comment">// &quot;example-320w.jpg 320w,</span>
<span class="token comment">//  example-480w.jpg 480w,</span>
<span class="token comment">//  example-800w.jpg 800w&quot;</span>

img<span class="token punctuation">.</span>sizes
<span class="token comment">// &quot;(max-width: 320px) 280px,</span>
<span class="token comment">//  (max-width: 480px) 440px,</span>
<span class="token comment">//  800px&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>sizes</code>属性指定，对于小于<code>320px</code>的屏幕，图像的宽度为<code>280px</code>；对于小于<code>480px</code>的屏幕，图像宽度为<code>440px</code>；其他情况下，图像宽度为<code>800px</code>。然后，浏览器会根据当前屏幕下的图像宽度，到<code>srcset</code>属性加载宽度最接近的图像。</p><h2 id="htmlimageelement-width-htmlimageelement-height" tabindex="-1"><a class="header-anchor" href="#htmlimageelement-width-htmlimageelement-height" aria-hidden="true">#</a> HTMLImageElement.width，HTMLImageElement.height</h2><p><code>width</code>属性表示<code>&lt;img&gt;</code>的 HTML 宽度，<code>height</code>属性表示高度。这两个属性返回的都是整数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;img width=&quot;300&quot; height=&quot;400&quot; id=&quot;myImg&quot; src=&quot;pic.jpg&quot;&gt;</span>
<span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>width <span class="token comment">// 300</span>
img<span class="token punctuation">.</span>height <span class="token comment">// 400</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果图像还没有加载，这两个属性返回的都是<code>0</code>。</p><p>如果 HTML 代码没有设置<code>width</code>和<code>height</code>属性，则它们返回的是图像的实际宽度和高度，即<code>HTMLImageElement.naturalWidth</code>属性和<code>HTMLImageElement.naturalHeight</code>属性。</p><h2 id="htmlimageelement-naturalwidth-htmlimageelement-naturalheight" tabindex="-1"><a class="header-anchor" href="#htmlimageelement-naturalwidth-htmlimageelement-naturalheight" aria-hidden="true">#</a> HTMLImageElement.naturalWidth，HTMLImageElement.naturalHeight</h2><p><code>HTMLImageElement.naturalWidth</code>属性表示图像的实际宽度（单位像素），<code>HTMLImageElement.naturalHeight</code>属性表示实际高度。这两个属性返回的都是整数。</p><p>如果图像还没有指定或不可得，这两个属性都等于<code>0</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>img<span class="token punctuation">.</span>naturalHeight <span class="token operator">&gt;</span> img<span class="token punctuation">.</span>naturalWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  img<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;portrait&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，如果图片的高度大于宽度，则设为<code>portrait</code>模式。</p><h2 id="htmlimageelement-complete" tabindex="-1"><a class="header-anchor" href="#htmlimageelement-complete" aria-hidden="true">#</a> HTMLImageElement.complete</h2><p><code>HTMLImageElement.complete</code>属性返回一个布尔值，表示图表是否已经加载完成。如果<code>&lt;img&gt;</code>元素没有<code>src</code>属性，也会返回<code>true</code>。</p><h2 id="htmlimageelement-crossorigin" tabindex="-1"><a class="header-anchor" href="#htmlimageelement-crossorigin" aria-hidden="true">#</a> HTMLImageElement.crossOrigin</h2><p><code>HTMLImageElement.crossOrigin</code>属性用于读写<code>&lt;img&gt;</code>元素的<code>crossorigin</code>属性，表示跨域设置。</p><p>这个属性有两个可能的值。</p><ul><li><code>anonymous</code>：跨域请求不要求用户身份（credentials），这是默认值。</li><li><code>use-credentials</code>：跨域请求要求用户身份。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;img crossorigin=&quot;anonymous&quot; id=&quot;myImg&quot; src=&quot;pic.jpg&quot;&gt;</span>
<span class="token keyword">var</span> img <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
img<span class="token punctuation">.</span>crossOrigin <span class="token comment">// &quot;anonymous&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="htmlimageelement-referrerpolicy" tabindex="-1"><a class="header-anchor" href="#htmlimageelement-referrerpolicy" aria-hidden="true">#</a> HTMLImageElement.referrerPolicy</h2><p><code>HTMLImageElement.referrerPolicy</code>用来读写<code>&lt;img&gt;</code>元素的 HTML 属性<code>referrerpolicy</code>，表示请求图像资源时，如何处理 HTTP 请求的<code>referrer</code>字段。</p><p>它有五个可能的值。</p><ul><li><code>no-referrer</code>：不带有<code>referrer</code>字段。</li><li><code>no-referrer-when-downgrade</code>：如果请求的地址不是 HTTPS 协议，就不带有<code>referrer</code>字段，这是默认值。</li><li><code>origin</code>：<code>referrer</code>字段是当前网页的地址，包含协议、域名和端口。</li><li><code>origin-when-cross-origin</code>：如果请求的地址与当前网页是同源关系，那么<code>referrer</code>字段将带有完整路径，否则将只包含协议、域名和端口。</li><li><code>unsafe-url</code>：<code>referrer</code>字段包含当前网页的地址，除了协议、域名和端口以外，还包括路径。这个设置是不安全的，因为会泄漏路径信息。</li></ul><h2 id="htmlimageelement-x-htmlimageelement-y" tabindex="-1"><a class="header-anchor" href="#htmlimageelement-x-htmlimageelement-y" aria-hidden="true">#</a> HTMLImageElement.x，HTMLImageElement.y</h2><p><code>HTMLImageElement.x</code>属性返回图像左上角相对于页面左上角的横坐标，<code>HTMLImageElement.y</code>属性返回纵坐标。</p><h2 id="事件属性" tabindex="-1"><a class="header-anchor" href="#事件属性" aria-hidden="true">#</a> 事件属性</h2><p>图像加载完成，会触发<code>onload</code>属性指定的回调函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// HTML 代码为 &lt;img src=&quot;example.jpg&quot; onload=&quot;loadImage()&quot;&gt;</span>
<span class="token keyword">function</span> <span class="token function">loadImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Image is loaded&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>图像加载过程中发生错误，会触发<code>onerror</code>属性指定的回调函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// HTML 代码为 &lt;img src=&quot;image.gif&quot; onerror=&quot;myFunction()&quot;&gt;</span>
<span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;There is something wrong&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,57),o=[c];function p(i,l){return e(),s("div",null,o)}const r=n(t,[["render",p],["__file","image.html.vue"]]);export{r as default};
