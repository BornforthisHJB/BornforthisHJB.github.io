<template><div><p>你好，我是悦创。</p>
<h2 id="_1-画出奥运五环图-代码如下" tabindex="-1"><a class="header-anchor" href="#_1-画出奥运五环图-代码如下" aria-hidden="true">#</a> 1. 画出奥运五环图，代码如下：</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> turtle
turtle<span class="token punctuation">.</span>width<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>color<span class="token punctuation">(</span><span class="token string">"blue"</span><span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>circle<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>

turtle<span class="token punctuation">.</span>color<span class="token punctuation">(</span><span class="token string">"black"</span><span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>penup<span class="token punctuation">(</span><span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>goto<span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>pendown<span class="token punctuation">(</span><span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>circle<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>

turtle<span class="token punctuation">.</span>color<span class="token punctuation">(</span><span class="token string">"red"</span><span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>penup<span class="token punctuation">(</span><span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>goto<span class="token punctuation">(</span><span class="token number">240</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>pendown<span class="token punctuation">(</span><span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>circle<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>

turtle<span class="token punctuation">.</span>color<span class="token punctuation">(</span><span class="token string">"yellow"</span><span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>penup<span class="token punctuation">(</span><span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>goto<span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>pendown<span class="token punctuation">(</span><span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>circle<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>

turtle<span class="token punctuation">.</span>color<span class="token punctuation">(</span><span class="token string">"green"</span><span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>penup<span class="token punctuation">(</span><span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>goto<span class="token punctuation">(</span><span class="token number">180</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>pendown<span class="token punctuation">(</span><span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>circle<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果如下图所示：
<img src="@source/blog/2022/17.assets/43f73c263c1f44309434e2ecd0b3ac48.png" alt="在这里插入图片描述" loading="lazy">
在线执行网站：<a href="https://py.bornforthis.cn/#/" target="_blank" rel="noopener noreferrer">https://py.bornforthis.cn/#/<ExternalLinkIcon/></a></p>
<h2 id="_2-定义多点坐标-绘出折线-并计算起始点和终点距离" tabindex="-1"><a class="header-anchor" href="#_2-定义多点坐标-绘出折线-并计算起始点和终点距离" aria-hidden="true">#</a> 2. 定义多点坐标_绘出折线_并计算起始点和终点距离</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> turtle
<span class="token keyword">import</span> math

<span class="token comment"># 定义多个点的坐标</span>
x1<span class="token punctuation">,</span> y1 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span>
x2<span class="token punctuation">,</span> y2 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">100</span>
x3<span class="token punctuation">,</span> y3 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">100</span>
x4<span class="token punctuation">,</span> y4 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span>

<span class="token comment"># 绘制折线</span>
turtle<span class="token punctuation">.</span>penup<span class="token punctuation">(</span><span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>goto<span class="token punctuation">(</span>x1<span class="token punctuation">,</span> y1<span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>pendown<span class="token punctuation">(</span><span class="token punctuation">)</span>

turtle<span class="token punctuation">.</span>goto<span class="token punctuation">(</span>x2<span class="token punctuation">,</span> y2<span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>goto<span class="token punctuation">(</span>x3<span class="token punctuation">,</span> y3<span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>goto<span class="token punctuation">(</span>x4<span class="token punctuation">,</span> y4<span class="token punctuation">)</span>

<span class="token comment"># 计算起始点和终点的距离</span>
distance <span class="token operator">=</span> math<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span><span class="token punctuation">(</span>x1<span class="token operator">-</span>x4<span class="token punctuation">)</span><span class="token operator">**</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token punctuation">(</span>y1<span class="token operator">-</span>y4<span class="token punctuation">)</span><span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">)</span>
turtle<span class="token punctuation">.</span>write<span class="token punctuation">(</span>distance<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/blog/2022/17.assets/3e220597f69e4c94b09616b939292b8e.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
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


