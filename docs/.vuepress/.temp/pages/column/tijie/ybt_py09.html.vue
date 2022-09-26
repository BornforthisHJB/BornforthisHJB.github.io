<template><div><h2 id="【题目描述】" tabindex="-1"><a class="header-anchor" href="#【题目描述】" aria-hidden="true">#</a> 【题目描述】</h2>
<p>现有两个相距 25km 的监测点，给定汽车经过两个监测点的时间。请判断汽车是否超速，以及超速的严重程度。</p>
<h3 id="【输入】" tabindex="-1"><a class="header-anchor" href="#【输入】" aria-hidden="true">#</a> 【输入】</h3>
<p>一个整数 t，表示汽车经过两个监测点的时间差是 t 秒。</p>
<h3 id="【输出】" tabindex="-1"><a class="header-anchor" href="#【输出】" aria-hidden="true">#</a> 【输出】</h3>
<p>输出有两行。第一行输出平均车速，用 <code v-pre>round()</code> 函数保留一位小数。</p>
<p>第二行判断超速情况。如果汽车没有超速，则输出“正常”；否则根据情况输出：</p>
<p>(1)、<code v-pre>100&lt;v&lt;120</code>，输出“超过规定时速且不足20%”</p>
<p>(2)、<code v-pre>120≤v&lt;150</code>，输出 “超过规定时速20%以上且不足50%”</p>
<p>(3)、<code v-pre>150≤v&lt;170</code>，输出  “超过规定时速50%以上且不足70%”</p>
<p>(4)、<code v-pre>v≥170</code>，输出“超过规定时速70%以上”。</p>
<h2 id="【输入样例】" tabindex="-1"><a class="header-anchor" href="#【输入样例】" aria-hidden="true">#</a> 【输入样例】</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token number">720</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="【输出样例】" tabindex="-1"><a class="header-anchor" href="#【输出样例】" aria-hidden="true">#</a> 【输出样例】</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token number">125.0</span> 
超过规定时速<span class="token number">20</span><span class="token operator">%</span>以上且不足<span class="token number">50</span><span class="token operator">%</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>s <span class="token operator">=</span> <span class="token number">25</span>  <span class="token comment"># 两个监测点相距 25km</span>
t <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输入通过监测点的时间</span>
<span class="token comment"># v = s / t</span>
<span class="token comment"># 1h = 60min</span>
<span class="token comment"># 1min = 60s</span>
<span class="token comment"># 1h = 3600s</span>
<span class="token comment"># s -> h = t / 3600</span>
v <span class="token operator">=</span> s <span class="token operator">*</span> <span class="token number">3600</span> <span class="token operator">/</span> t  <span class="token comment"># 3600 是秒和小时的单位换算系数</span>
<span class="token comment"># v1 = s / (t / 3600)</span>
<span class="token comment"># print(v, v1)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">round</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> v <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">:</span>  <span class="token comment"># 车速小于等于 100 千米/时</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"正常"</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> v <span class="token operator">&lt;</span> <span class="token number">120</span><span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"超过规定时速且不足20%"</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> v <span class="token operator">&lt;</span> <span class="token number">150</span><span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"超过规定时速20%以上且不足50%"</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> v <span class="token operator">&lt;</span> <span class="token number">170</span><span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"超过规定时速50%以上且不足70%"</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"超过规定时速70%以上"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
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


