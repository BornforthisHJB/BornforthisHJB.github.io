import{_ as a}from"./gzh.b03adfd2.js";import{_ as t}from"./zsxq.77f6dc86.js";import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as l,a as e,d as n,b as d,e as i,r as p}from"./app.d09b637c.js";const r={},u=i(`<p><code>&lt;option&gt;</code>元素表示下拉框（<code>&lt;select&gt;</code>，<code>&lt;optgroup&gt;</code>或<code>&lt;datalist&gt;</code>）里面的一个选项。它是 HTMLOptionElement 接口的实例。</p><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><p>除了继承 HTMLElement 接口的属性和方法，HTMLOptionElement 接口具有下面的属性。</p><ul><li><code>disabled</code>：布尔值，表示该项是否可选择。</li><li><code>defaultSelected</code>：布尔值，表示该项是否默认选中。一旦设为<code>true</code>，该项的值就是<code>&lt;select&gt;</code>的默认值。</li><li><code>form</code>：返回<code>&lt;option&gt;</code>所在的表单元素。如果不属于任何表单，则返回<code>null</code>。该属性只读。</li><li><code>index</code>：整数，表示该选项在整个下拉列表里面的位置。该属性只读。</li><li><code>label</code>：字符串，表示对该选项的说明。如果该属性未设置，则返回该选项的文本内容。</li><li><code>selected</code>：布尔值，表示该选项是否选中。</li><li><code>text</code>：字符串，该选项的文本内容。</li><li><code>value</code>：字符串，该选项的值。表单提交时，上传的就是选中项的这个属性。</li></ul><h2 id="option-构造函数" tabindex="-1"><a class="header-anchor" href="#option-构造函数" aria-hidden="true">#</a> Option() 构造函数</h2><p>浏览器原生提供<code>Option()</code>构造函数，用来生成 HTMLOptionElement 实例。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Option</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> value<span class="token punctuation">,</span> defaultSelected<span class="token punctuation">,</span> selected<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它接受四个参数，都是可选的。</p><ul><li>text：字符串，表示该选项的文本内容。如果省略，返回空字符串。</li><li>value：字符串，表示该选项的值。如果省略，默认返回<code>text</code>属性的值。</li><li>defaultSelected：布尔值，表示该项是否默认选中，默认为<code>false</code>。注意，即使设为<code>true</code>，也不代表该项的<code>selected</code>属性为<code>true</code>。</li><li>selected：布尔值，表示该项是否选中，默认为<code>false</code>。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> newOption <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Option</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

newOption<span class="token punctuation">.</span>text <span class="token comment">// &quot;hello&quot;</span>
newOption<span class="token punctuation">.</span>value <span class="token comment">// &quot;world&quot;</span>
newOption<span class="token punctuation">.</span>defaultSelected <span class="token comment">// true</span>
newOption<span class="token punctuation">.</span>selected <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>newOption</code>的<code>defaultSelected</code>属性为<code>true</code>，但是它没有被选中（即<code>selected</code>属性为<code>false</code>）。</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+a+'" alt="" loading="lazy"></p></details>',12),m={class:"custom-container info"},v=e("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),_=e("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web 全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),h=e("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),k={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"方法二：微信：Jiabcdefh",-1),g=e("p",null,[e("img",{src:t,alt:"",loading:"lazy"})],-1);function b(x,w){const s=p("ExternalLinkIcon");return c(),l("div",null,[u,e("div",m,[v,_,h,e("p",null,[n("方法一："),e("a",k,[n("QQ"),d(s)])]),f]),g])}const E=o(r,[["render",b],["__file","option.html.vue"]]);export{E as default};
