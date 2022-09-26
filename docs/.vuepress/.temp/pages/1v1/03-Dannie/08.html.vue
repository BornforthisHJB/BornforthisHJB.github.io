<template><div><h2 id="_1-python-有哪些数据类型" tabindex="-1"><a class="header-anchor" href="#_1-python-有哪些数据类型" aria-hidden="true">#</a> 1. Python 有哪些数据类型</h2>
<p><img src="@source/1v1/03-Dannie/08.assets/image-20220920221016968.png" alt="image-20220920221016968" loading="lazy"></p>
<h2 id="_2-type-检测数据类型" tabindex="-1"><a class="header-anchor" href="#_2-type-检测数据类型" aria-hidden="true">#</a> 2. type() 检测数据类型</h2>
<h3 id="_2-1-int" tabindex="-1"><a class="header-anchor" href="#_2-1-int" aria-hidden="true">#</a> 2.1 int</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>

t <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'int'</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'int'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-float" tabindex="-1"><a class="header-anchor" href="#_2-2-float" aria-hidden="true">#</a> 2.2 float</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">2.1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>

t <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'float'</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'float'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-各个数据类型的特点" tabindex="-1"><a class="header-anchor" href="#_3-各个数据类型的特点" aria-hidden="true">#</a> 3. 各个数据类型的特点</h2>
<h3 id="_3-1-字符串「str」" tabindex="-1"><a class="header-anchor" href="#_3-1-字符串「str」" aria-hidden="true">#</a> 3.1 字符串「str」</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">"aiyuechuang"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span>

s_t <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s_t<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>aiyuechuang
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'str'</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'str'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>字符串特点</strong></p>
<ol>
<li><strong>有序性</strong> ：从左到右是 0 开始，从右到左是 -1 开始</li>
<li><strong>不可变性</strong> ：字符串在被创建出来之后，在 <strong>运行当中，字符串是不可以被改变的。</strong> 非要改变，只能是覆盖「也就是重新赋值」</li>
<li><strong>任意数据类型</strong> ：字符串中可以存放任意的数据类型，int、float、tuple……「你键盘能打入的所有字符，都可以存进去」</li>
</ol>
<h3 id="_3-2-列表「list」" tabindex="-1"><a class="header-anchor" href="#_3-2-列表「list」" aria-hidden="true">#</a> 3.2 列表「list」</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">11.1</span><span class="token punctuation">,</span> <span class="token string">"adede"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"AIYC"</span><span class="token punctuation">,</span> <span class="token string">"age"</span><span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">]</span>

lst_t <span class="token operator">=</span> <span class="token builtin">type</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lst_t<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'list'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/1v1/03-Dannie/08.assets/image-20220920224647138.png" alt="image-20220920224647138" loading="lazy"></p>
<p><strong>列表的特点：</strong></p>
<ol>
<li><strong>有序性</strong> ：从左到右是 0 开始，从右到左是 -1 开始</li>
</ol>
<p><img src="@source/1v1/03-Dannie/08.assets/image-20220920224958955.png" alt="image-20220920224958955" loading="lazy"></p>
<ol start="2">
<li><strong>任意数据类型</strong> ：你放进去是什么类型，它还是原本的类型。</li>
<li><strong>可变性</strong> ：列表的内容是可以被修改的「update、修改、查询、、、」</li>
</ol>
<h3 id="_3-3-元组「tuple」" tabindex="-1"><a class="header-anchor" href="#_3-3-元组「tuple」" aria-hidden="true">#</a> 3.3 元组「tuple」</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>tup <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">"aiyc"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>tup<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'tuple'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>元组的特点：</strong></p>
<ol>
<li><strong>有序性</strong> ：从左到右是 0 开始，从右到左是 -1 开始</li>
<li><strong>任意数据类型</strong></li>
<li><strong>不可变性</strong></li>
</ol>
<p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
<div class="custom-container info">
<p class="custom-container-title">AI悦创·编程一对一</p>
<p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p>
<p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</div>
</div></template>


