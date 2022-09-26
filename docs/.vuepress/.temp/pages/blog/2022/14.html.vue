<template><div><h2 id="一、python-打开浏览器的方法" tabindex="-1"><a class="header-anchor" href="#一、python-打开浏览器的方法" aria-hidden="true">#</a> 一、Python 打开浏览器的方法：</h2>
<ol>
<li>startfile 方法（打开指定浏览器）</li>
</ol>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> os
os<span class="token punctuation">.</span>startfile<span class="token punctuation">(</span><span class="token string">"C:\Program Files\internet explorer\iexplore.exe"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>system 方法：打开指定浏览器</li>
</ol>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> os
os<span class="token punctuation">.</span>system<span class="token punctuation">(</span><span class="token string">'"C:\Program Files\internet explorer\iexplore.exe"'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过指定浏览器打开指定的网址：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> os
os<span class="token punctuation">.</span>system<span class="token punctuation">(</span><span class="token string">'"C:\Program Files\internet explorer\iexplore.exe" http://www.baidu.com'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>更好地解决方案 WEBBROWER 通过默认浏览器打开</li>
</ol>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> webbrowser
webbrowser<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"http://www.baidu.com"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>通过指定浏览器打开指定的网址：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> webbrowser
IEPath <span class="token operator">=</span> <span class="token string">"C:\Program Files\internet explorer\iexplore.exe"</span>
webbrowser<span class="token punctuation">.</span>register<span class="token punctuation">(</span><span class="token string">'IE'</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">,</span> webbrowser<span class="token punctuation">.</span>BackgroundBrowser<span class="token punctuation">(</span>IEPath<span class="token punctuation">)</span><span class="token punctuation">)</span>
webbrowser<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">'IE'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'http://www.baidu.com'</span><span class="token punctuation">,</span> new<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span>autoraise<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token comment"># 或者</span>
webbrowser<span class="token punctuation">.</span>open_new_tab<span class="token punctuation">(</span><span class="token string">'http://www.baidu.com'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、python-打开文件的方法" tabindex="-1"><a class="header-anchor" href="#二、python-打开文件的方法" aria-hidden="true">#</a> 二、Python 打开文件的方法</h2>
<ol>
<li>startfile 方法</li>
</ol>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> <span class="token keyword">import</span> os
<span class="token operator">>></span><span class="token operator">></span> os<span class="token punctuation">.</span>startfile<span class="token punctuation">(</span><span class="token string">r"D:\MODISPRO\操作指南.txt"</span><span class="token punctuation">)</span>
<span class="token operator">>></span><span class="token operator">></span> os<span class="token punctuation">.</span>startfile<span class="token punctuation">(</span><span class="token string">r"D:\MODISPRO\操作指南.docx"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>system 方法</li>
</ol>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token operator">>></span><span class="token operator">></span> <span class="token keyword">import</span> os
<span class="token operator">>></span><span class="token operator">></span> os<span class="token punctuation">.</span>system<span class="token punctuation">(</span><span class="token string">r"D:\MODISPRO\操作指南.txt"</span><span class="token punctuation">)</span>
<span class="token operator">>></span><span class="token operator">></span> os<span class="token punctuation">.</span>system<span class="token punctuation">(</span><span class="token string">r"D:\MODISPRO\操作指南.docx"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
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


