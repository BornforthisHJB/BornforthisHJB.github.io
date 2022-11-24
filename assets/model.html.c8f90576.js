import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.9add2d53.js";const e={},p=t(`<h2 id="监听函数" tabindex="-1"><a class="header-anchor" href="#监听函数" aria-hidden="true">#</a> 监听函数</h2><p>浏览器的事件模型，就是通过监听函数（listener）对事件做出反应。事件发生后，浏览器监听到了这个事件，就会执行对应的监听函数。这是事件驱动编程模式（event-driven）的主要编程方式。</p><p>JavaScript 有三种方法，可以为事件绑定监听函数。</p><h3 id="html-的-on-属性" tabindex="-1"><a class="header-anchor" href="#html-的-on-属性" aria-hidden="true">#</a> HTML 的 on- 属性</h3><p>HTML 语言允许在元素的属性中，直接定义某些事件的监听代码。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token special-attr"><span class="token attr-name">onload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;触发事件&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码为<code>body</code>节点的<code>load</code>事件、<code>div</code>节点的<code>click</code>事件，指定了监听代码。一旦事件发生，就会执行这段代码。</p><p>元素的事件监听属性，都是<code>on</code>加上事件名，比如<code>onload</code>就是<code>on + load</code>，表示<code>load</code>事件的监听代码。</p><p>注意，这些属性的值是将会执行的代码，而不是一个函数。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 正确 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token special-attr"><span class="token attr-name">onload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 错误 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token special-attr"><span class="token attr-name">onload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript">doSomething</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一旦指定的事件发生，<code>on-</code>属性的值是原样传入 JavaScript 引擎执行。因此如果要执行函数，不要忘记加上一对圆括号。</p><p>使用这个方法指定的监听代码，只会在冒泡阶段触发。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>点击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>&lt;button&gt;</code>是<code>&lt;div&gt;</code>的子元素。<code>&lt;button&gt;</code>的<code>click</code>事件，也会触发<code>&lt;div&gt;</code>的<code>click</code>事件。由于<code>on-</code>属性的监听代码，只在冒泡阶段触发，所以点击结果是先输出<code>1</code>，再输出<code>2</code>，即事件从子元素开始冒泡到父元素。</p><p>直接设置<code>on-</code>属性，与通过元素节点的<code>setAttribute</code>方法设置<code>on-</code>属性，效果是一样的。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;onclick&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;doSomething()&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 等同于</span>
<span class="token comment">// &lt;Element onclick=&quot;doSomething()&quot;&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元素节点的事件属性" tabindex="-1"><a class="header-anchor" href="#元素节点的事件属性" aria-hidden="true">#</a> 元素节点的事件属性</h3><p>元素节点对象的事件属性，同样可以指定监听函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span>onload <span class="token operator">=</span> doSomething<span class="token punctuation">;</span>

div<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;触发事件&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用这个方法指定的监听函数，也是只会在冒泡阶段触发。</p><p>注意，这种方法与 HTML 的<code>on-</code>属性的差异是，它的值是函数名（<code>doSomething</code>），而不像后者，必须给出完整的监听代码（<code>doSomething()</code>）。</p><h3 id="eventtarget-addeventlistener" tabindex="-1"><a class="header-anchor" href="#eventtarget-addeventlistener" aria-hidden="true">#</a> EventTarget.addEventListener()</h3><p>所有 DOM 节点实例都有<code>addEventListener</code>方法，用来为该节点定义事件的监听函数。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> doSomething<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>addEventListener</code>方法的详细介绍，参见<code>EventTarget</code>章节。</p><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>上面三种方法，第一种“HTML 的 on- 属性”，违反了 HTML 与 JavaScript 代码相分离的原则，将两者写在一起，不利于代码分工，因此不推荐使用。</p><p>第二种“元素节点的事件属性”的缺点在于，同一个事件只能定义一个监听函数，也就是说，如果定义两次<code>onclick</code>属性，后一次定义会覆盖前一次。因此，也不推荐使用。</p><p>第三种<code>EventTarget.addEventListener</code>是推荐的指定监听函数的方法。它有如下优点：</p><ul><li>同一个事件可以添加多个监听函数。</li><li>能够指定在哪个阶段（捕获阶段还是冒泡阶段）触发监听函数。</li><li>除了 DOM 节点，其他对象（比如<code>window</code>、<code>XMLHttpRequest</code>等）也有这个接口，它等于是整个 JavaScript 统一的监听函数接口。</li></ul><h2 id="this-的指向" tabindex="-1"><a class="header-anchor" href="#this-的指向" aria-hidden="true">#</a> this 的指向</h2><p>监听函数内部的<code>this</code>指向触发事件的那个元素节点。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>点击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行上面代码，点击后会输出<code>btn</code>。</p><p>其他两种监听函数的写法，<code>this</code>的指向也是如此。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// HTML 代码如下</span>
<span class="token comment">// &lt;button id=&quot;btn&quot;&gt;点击&lt;/button&gt;</span>
<span class="token keyword">var</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 写法一</span>
btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 写法二</span>
btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token boolean">false</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面两种写法，点击按钮以后也是输出<code>btn</code>。</p><h2 id="事件的传播" tabindex="-1"><a class="header-anchor" href="#事件的传播" aria-hidden="true">#</a> 事件的传播</h2><p>一个事件发生后，会在子元素和父元素之间传播（propagation）。这种传播分成三个阶段。</p><ul><li><strong>第一阶段</strong>：从<code>window</code>对象传导到目标节点（上层传到底层），称为“捕获阶段”（capture phase）。</li><li><strong>第二阶段</strong>：在目标节点上触发，称为“目标阶段”（target phase）。</li><li><strong>第三阶段</strong>：从目标节点传导回<code>window</code>对象（从底层传回上层），称为“冒泡阶段”（bubbling phase）。</li></ul><p>这种三阶段的传播模型，使得同一个事件会在多个节点上触发。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>点击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>&lt;div&gt;</code>节点之中有一个<code>&lt;p&gt;</code>节点。</p><p>如果对这两个节点，都设置<code>click</code>事件的监听函数（每个节点的捕获阶段和冒泡阶段，各设置一个监听函数），共计设置四个监听函数。然后，对<code>&lt;p&gt;</code>点击，<code>click</code>事件会触发四次。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> phases <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token number">1</span><span class="token operator">:</span> <span class="token string">&#39;capture&#39;</span><span class="token punctuation">,</span>
  <span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;target&#39;</span><span class="token punctuation">,</span>
  <span class="token number">3</span><span class="token operator">:</span> <span class="token string">&#39;bubble&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

div<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> callback<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> callback<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
div<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> callback<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> callback<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> tag <span class="token operator">=</span> event<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>tagName<span class="token punctuation">;</span>
  <span class="token keyword">var</span> phase <span class="token operator">=</span> phases<span class="token punctuation">[</span>event<span class="token punctuation">.</span>eventPhase<span class="token punctuation">]</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Tag: &#39;&quot;</span> <span class="token operator">+</span> tag <span class="token operator">+</span> <span class="token string">&quot;&#39;. EventPhase: &#39;&quot;</span> <span class="token operator">+</span> phase <span class="token operator">+</span> <span class="token string">&quot;&#39;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 点击以后的结果</span>
<span class="token comment">// Tag: &#39;DIV&#39;. EventPhase: &#39;capture&#39;</span>
<span class="token comment">// Tag: &#39;P&#39;. EventPhase: &#39;target&#39;</span>
<span class="token comment">// Tag: &#39;P&#39;. EventPhase: &#39;target&#39;</span>
<span class="token comment">// Tag: &#39;DIV&#39;. EventPhase: &#39;bubble&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码表示，<code>click</code>事件被触发了四次：<code>&lt;div&gt;</code>节点的捕获阶段和冒泡阶段各1次，<code>&lt;p&gt;</code>节点的目标阶段触发了2次。</p><ol><li>捕获阶段：事件从<code>&lt;div&gt;</code>向<code>&lt;p&gt;</code>传播时，触发<code>&lt;div&gt;</code>的<code>click</code>事件；</li><li>目标阶段：事件从<code>&lt;div&gt;</code>到达<code>&lt;p&gt;</code>时，触发<code>&lt;p&gt;</code>的<code>click</code>事件；</li><li>冒泡阶段：事件从<code>&lt;p&gt;</code>传回<code>&lt;div&gt;</code>时，再次触发<code>&lt;div&gt;</code>的<code>click</code>事件。</li></ol><p>其中，<code>&lt;p&gt;</code>节点有两个监听函数（<code>addEventListener</code>方法第三个参数的不同，会导致绑定两个监听函数），因此它们都会因为<code>click</code>事件触发一次。所以，<code>&lt;p&gt;</code>会在<code>target</code>阶段有两次输出。</p><p>注意，浏览器总是假定<code>click</code>事件的目标节点，就是点击位置嵌套最深的那个节点（本例是<code>&lt;div&gt;</code>节点里面的<code>&lt;p&gt;</code>节点）。所以，<code>&lt;p&gt;</code>节点的捕获阶段和冒泡阶段，都会显示为<code>target</code>阶段。</p><p>事件传播的最上层对象是<code>window</code>，接着依次是<code>document</code>，<code>html</code>（<code>document.documentElement</code>）和<code>body</code>（<code>document.body</code>）。也就是说，上例的事件传播顺序，在捕获阶段依次为<code>window</code>、<code>document</code>、<code>html</code>、<code>body</code>、<code>div</code>、<code>p</code>，在冒泡阶段依次为<code>p</code>、<code>div</code>、<code>body</code>、<code>html</code>、<code>document</code>、<code>window</code>。</p><h2 id="事件的代理" tabindex="-1"><a class="header-anchor" href="#事件的代理" aria-hidden="true">#</a> 事件的代理</h2><p>由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> ul <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ul<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>tagName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// some code</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>click</code>事件的监听函数定义在<code>&lt;ul&gt;</code>节点，但是实际上，它处理的是子节点<code>&lt;li&gt;</code>的<code>click</code>事件。这样做的好处是，只要定义一个监听函数，就能处理多个子节点的事件，而不用在每个<code>&lt;li&gt;</code>节点上定义监听函数。而且以后再添加子节点，监听函数依然有效。</p><p>如果希望事件到某个节点为止，不再传播，可以使用事件对象的<code>stopPropagation</code>方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 事件传播到 p 元素后，就不再向下传播了</span>
p<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 事件冒泡到 p 元素后，就不再向上冒泡了</span>
p<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>stopPropagation</code>方法分别在捕获阶段和冒泡阶段，阻止了事件的传播。</p><p>但是，<code>stopPropagation</code>方法只会阻止事件的传播，不会阻止该事件触发<code>&lt;p&gt;</code>节点的其他<code>click</code>事件的监听函数。也就是说，不是彻底取消<code>click</code>事件。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>p<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">stopPropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

p<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 会触发</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>p</code>元素绑定了两个<code>click</code>事件的监听函数。<code>stopPropagation</code>方法只能阻止这个事件的传播，不能取消这个事件，因此，第二个监听函数会触发。输出结果会先是1，然后是2。</p><p>如果想要彻底取消该事件，不再触发后面所有<code>click</code>的监听函数，可以使用<code>stopImmediatePropagation</code>方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>p<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  event<span class="token punctuation">.</span><span class="token function">stopImmediatePropagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

p<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 不会被触发</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>stopImmediatePropagation</code>方法可以彻底取消这个事件，使得后面绑定的所有<code>click</code>监听函数都不再触发。所以，只会输出1，不会输出2。</p>`,63),c=[p];function o(l,i){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","model.html.vue"]]);export{k as default};
