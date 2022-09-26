<template><div><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2>
<p>计算字符串最后一个单词的长度，单词以空格隔开，字符串长度小于 5000。（注：字符串末尾不以空格为结尾）</p>
<h3 id="输入描述" tabindex="-1"><a class="header-anchor" href="#输入描述" aria-hidden="true">#</a> 输入描述：</h3>
<p>输入一行，代表要计算的字符串，非空，长度小于 5000。</p>
<h3 id="输出描述" tabindex="-1"><a class="header-anchor" href="#输出描述" aria-hidden="true">#</a> 输出描述：</h3>
<p>输出一个整数，表示输入字符串最后一个单词的长度。</p>
<h2 id="示例1" tabindex="-1"><a class="header-anchor" href="#示例1" aria-hidden="true">#</a> 示例1</h2>
<h3 id="输入" tabindex="-1"><a class="header-anchor" href="#输入" aria-hidden="true">#</a> 输入：</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>hello nowcoder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出：</h3>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="说明" tabindex="-1"><a class="header-anchor" href="#说明" aria-hidden="true">#</a> 说明：</h3>
<p>最后一个单词为 nowcoder，长度为 8</p>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># 输入字符串 s</span>
arr <span class="token operator">=</span> s<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span>  <span class="token comment"># 以空格分割字符串并将结果存入数组 arr</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># 打印最后一个元素 arr[-1] 的长度即为最后一个单词的长度</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加字符长度在 5000 之内：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>        <span class="token comment"># 输入字符串 s</span>
<span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">5000</span><span class="token punctuation">:</span>
    arr <span class="token operator">=</span> s<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span>  <span class="token comment"># 以空格分割字符串并将结果存入数组 arr</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>   <span class="token comment"># 打印最后一个元素 arr[-1] 的长度即为最后一个单词的长度</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目链接" tabindex="-1"><a class="header-anchor" href="#题目链接" aria-hidden="true">#</a> 题目链接</h2>
<p><a href="https://www.nowcoder.com/practice/8c949ea5f36f422594b306a2300315da" target="_blank" rel="noopener noreferrer">https://www.nowcoder.com/practice/8c949ea5f36f422594b306a2300315da<ExternalLinkIcon/></a></p>
<h2 id="图解" tabindex="-1"><a class="header-anchor" href="#图解" aria-hidden="true">#</a> 图解</h2>
<p><img src="@source/column/tijie/nkw_hw01.assets/WX20211014-193743@2x.png" alt="img" loading="lazy"></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>input_str <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
word_list <span class="token operator">=</span> input_str<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span> 
last_word <span class="token operator">=</span> word_list<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> 
last_word_len <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>last_word<span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token punctuation">(</span>last_word_len<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
<details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary>
<p><img src="/gzh.jpg" alt="" loading="lazy"></p>
</details>
<div class="custom-container info">
<p class="custom-container-title">AI悦创·编程一对一</p>
<p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发，华为 Python 机试」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p>
<p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</div>
<p><img src="/zsxq.jpg" alt="" loading="lazy"></p>
</div></template>


