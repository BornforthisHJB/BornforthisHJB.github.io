<template><div><h2 id="条件语句" tabindex="-1"><a class="header-anchor" href="#条件语句" aria-hidden="true">#</a> 条件语句</h2>
<p><strong>条件语句是一种代码结构。</strong></p>
<p>它用来测试表达式的真假并根据测试结果运行不同的代码。</p>
<p><strong>if...else 是最常用的条件语句。</strong> 请看示例：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> bestchoice <span class="token operator">=</span> <span class="token string">'bornforthis.cn'</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>bestchoice <span class="token operator">===</span> <span class="token string">'bornforthi.com'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'随时随地学编程'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'容我再想想'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码的含义是：</p>
<p>将 <code v-pre>bornforthis.cn</code> 赋值给 bestchoice（最佳选择）；</p>
<p>对 <code v-pre>if(...)</code> 中的表达式进行测试，用等于运算符 <code v-pre>==</code> 来比较 bestchoice 和 <code v-pre>bornforthis.cn</code> 是否相等；</p>
<p>如果返回为真（true）,则反馈第一个代码块——随时随地学编程；</p>
<p>如果返回为假（else）,则跳过第一个代码块，执行第二个代码块——容我再想想。</p>
<p><button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/web_base/base_10/base_10-2.html" target="_blank">尝试一下</a></button></p>
<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2>
<p><strong>函数用来封装可复用的功能。</strong></p>
<p>如果没有函数，一段操作用几次就要重复写几次，效率很低。而使用函数则只需写下函数名和一些简短的信息就可以了。比如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> myvariable <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'h1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'前方高能！'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>document.querySelector</code> 和 <code v-pre>alert</code> 是浏览器 <strong>内置的</strong> 函数，随时可用。</p>
<p>使用函数 <code v-pre>alert( )</code> 可在浏览器窗口内弹出 <strong>警告框。</strong> 引号内的'前方高能’是一个字符串参数，它是警告框里显示的内容。如下图：</p>
<p><img src="@source/column/web/base/base_11.assets/image-20220804230951887.png" alt="image-20220804230951887" loading="lazy"></p>
<p><img src="@source/column/web/base/base_11.assets/image-20220804231142876.png" alt="image-20220804231142876" loading="lazy"></p>
<h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2>
<p><strong>事件</strong>为网页添加<strong>交互能力</strong>。它可以捕捉浏览器操作并运行代码做为响应。</p>
<p>最简单的事件是点击事件。可尝试将下面的代码输入控制台，然后点击页面的任意位置：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'html'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'别来找我，我好烦！'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/web_base/base_10/base_10-3.html" target="_blank">尝试一下</a></button></p>
<p><img src="@source/column/web/base/base_11.assets/image-20220804231652817.png" alt="image-20220804231652817" loading="lazy"></p>
<p>将事件与元素绑定有许多方法。本例选用了 <code v-pre>&lt;html&gt;</code> 元素，把一个匿名函数（即未命名的函数，此匿名函数包含单击鼠标时要运行的代码）赋值给了 html 的 onclick 属性。</p>
<p>【选词填空】请选择相应的字符以使声明完整：</p>
<p><img src="@source/column/web/base/base_11.assets/image-20220804231722081.png" alt="image-20220804231722081" loading="lazy"></p>
<details class="custom-container details"><summary>答案</summary>
<p><img src="@source/column/web/base/base_11.assets/image-20220804231753169.png" alt="image-20220804231753169" loading="lazy"></p>
</details>
<p>【单选题】关于以下代码的执行结果说法错误的是？</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> mylove <span class="token operator">=</span> <span class="token string">'AI悦创'</span><span class="token punctuation">;</span> 
<span class="token keyword">if</span> <span class="token punctuation">(</span>mylove <span class="token operator">===</span> <span class="token string">'AI悦创'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'AI悦创--随时随地学编程！'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
 <span class="token punctuation">}</span> 
<span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'学编程，从 Bornforthis.cn 开始！'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 如果返回为真，则执行&quot;AI悦创--随时随地学编程！”。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 如果返回为假，则执行“AI悦创--随时随地学编程！”后再执行“学编程，从 <a href="http://Bornforthis.cn" target="_blank" rel="noopener noreferrer">Bornforthis.cn<ExternalLinkIcon/></a> 开始！&quot;。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 如果返回为假，则跳过第一个代码块，执行“学编程，从 <a href="http://Bornforthis.cn" target="_blank" rel="noopener noreferrer">Bornforthis.cn<ExternalLinkIcon/></a> 开始！”</label></li>
</ul>
<blockquote>
<p>词句是条件语句。如果测试 if 中的值为真，则执行第一个代码块。如果 if 中的值为假，则跳过第一个代码块，执行第二个代码块。</p>
</blockquote>
<p>【判断题】使用函数，你就能够对代码进行复用。</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 正确</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 错误</label></li>
</ul>
<p>【单选题】以下关于事件说法错误的是？</p>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> 事件可用来增强网页的交互性。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> 事件是可以被 JavaScript 侦测到的一种行为。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> 事件就是一些动作。比如：点击、提交、确认等等。</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> 事件由一系列的静态行为构成。</label></li>
</ul>
<blockquote>
<p>事件是动态的。</p>
</blockquote>
<details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary>
<p><img src="/gzh.jpg" alt="" loading="lazy"></p>
</details>
<div class="custom-container info">
<p class="custom-container-title">AI悦创·编程一对一</p>
<p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p>
<p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</div>
<p><img src="/zsxq.jpg" alt="" loading="lazy"></p>
</div></template>


