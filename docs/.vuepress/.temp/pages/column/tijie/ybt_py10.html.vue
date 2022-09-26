<template><div><h2 id="【题目描述】" tabindex="-1"><a class="header-anchor" href="#【题目描述】" aria-hidden="true">#</a> 【题目描述】</h2>
<p>最适宜运动心率的公式有性别差异，试问最适宜运动心率？</p>
<p>男性最适宜运动心率 = (220-年龄-安静心率)×(60%~80%)+安静心率</p>
<p>女性最适宜运动心率 = (210-年龄-安静心率)×(60%~80%)+安静心率</p>
<h3 id="【输入】" tabindex="-1"><a class="header-anchor" href="#【输入】" aria-hidden="true">#</a> 【输入】</h3>
<p>三行，第一行输入年龄（实数），第二行输入安静心率（实数）,第三行输入“male”或“female”表示性别。</p>
<h3 id="【输出】" tabindex="-1"><a class="header-anchor" href="#【输出】" aria-hidden="true">#</a> 【输出】</h3>
<p>输出最适宜的运动心率的范围。</p>
<h2 id="【输入样例】" tabindex="-1"><a class="header-anchor" href="#【输入样例】" aria-hidden="true">#</a> 【输入样例】</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token number">16</span>
<span class="token number">71</span> 
male
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【输出样例】" tabindex="-1"><a class="header-anchor" href="#【输出样例】" aria-hidden="true">#</a> 【输出样例】</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token number">150.8</span><span class="token operator">~</span><span class="token number">177.4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>age <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输入年龄</span>
HRrest <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输入安静心率</span>
gender <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 输入性别</span>
<span class="token keyword">if</span> gender <span class="token operator">==</span> <span class="token string">"male"</span><span class="token punctuation">:</span>  <span class="token comment"># 性别是否是男性 male</span>
	low <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">220</span> <span class="token operator">-</span> age <span class="token operator">-</span> HRrest<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.6</span> <span class="token operator">+</span> HRrest  <span class="token comment"># 计算男性 male 最适宜运动心率低值</span>
	high <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">220</span> <span class="token operator">-</span> age <span class="token operator">-</span> HRrest<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.8</span> <span class="token operator">+</span> HRrest  <span class="token comment"># 计算男性 male 最适宜运动心率高值</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
	low <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">210</span> <span class="token operator">-</span> age <span class="token operator">-</span> HRrest<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.6</span> <span class="token operator">+</span> HRrest  <span class="token comment"># 计算女性 female 最适宜运动心率低值</span>
	high <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">210</span> <span class="token operator">-</span> age <span class="token operator">-</span> HRrest<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0.8</span> <span class="token operator">+</span> HRrest  <span class="token comment"># 计算女性 female 最适宜运动心率高值</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>low<span class="token punctuation">,</span> high<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">"~"</span><span class="token punctuation">)</span>  <span class="token comment"># 输出最适合运动心率的范围</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
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


