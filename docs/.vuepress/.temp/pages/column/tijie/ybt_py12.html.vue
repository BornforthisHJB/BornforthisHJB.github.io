<template><div><h2 id="【题目描述】" tabindex="-1"><a class="header-anchor" href="#【题目描述】" aria-hidden="true">#</a> 【题目描述】</h2>
<p>计算华氏100度到105度所对应的摄氏温度。精确到小数点后2位。</p>
<p>换算公式 C=5×(F−32)÷9(其中C表示摄氏温度，F表示华氏温度)。</p>
<h3 id="【输入】" tabindex="-1"><a class="header-anchor" href="#【输入】" aria-hidden="true">#</a> 【输入】</h3>
<p>(无)</p>
<h3 id="【输出】" tabindex="-1"><a class="header-anchor" href="#【输出】" aria-hidden="true">#</a> 【输出】</h3>
<p>若干行每行两个数，表示华氏温度（整数，占8个字符宽度）与摄氏温度（占10个字符宽度，保留两位小数）。</p>
<h2 id="【输入样例】" tabindex="-1"><a class="header-anchor" href="#【输入样例】" aria-hidden="true">#</a> 【输入样例】</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>（无）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="【输出样例】" tabindex="-1"><a class="header-anchor" href="#【输出样例】" aria-hidden="true">#</a> 【输出样例】</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>     100     37.78
     101     38.33
     102     38.89
     103     39.44
     104     40.00
     105     40.56
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h2>
<p>for 循环枚举摄氏温度，并运用公式换算即可。</p>
<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">for</span> f <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">106</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	c <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token punctuation">(</span>f <span class="token operator">-</span> <span class="token number">32</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">9</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"%8.0f%10.2f"</span> <span class="token operator">%</span> <span class="token punctuation">(</span>f<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
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


