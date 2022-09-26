<template><div><h2 id="_1-交换果汁" tabindex="-1"><a class="header-anchor" href="#_1-交换果汁" aria-hidden="true">#</a> 1. 交换果汁</h2>
<p>假如你有两个小孩，哥哥叫：Austin，弟弟叫：Jaden。</p>
<p>Austin 想喝<strong>果汁</strong>，Jaden 想喝<strong>可乐</strong>。<strong>哥哥和弟弟都有专属的杯子，不喜欢用对方的杯子。</strong></p>
<p>家中仅剩一杯果汁、一杯可乐，你不小心把哥哥的杯子装了可乐，弟弟的杯子装了果汁。</p>
<p><strong>问：如何交换哥哥与弟弟杯中的果汁？</strong></p>
<CodeTabs :data='[{"title":"样例代码"},{"title":"提示"},{"title":"answer１"},{"title":"answer2"}]' tab-id="shell">

<template #tab0="{ title, value, isActive }">
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>Austin <span class="token operator">=</span> <span class="token string">"Coke"</span>
Jaden <span class="token operator">=</span> <span class="token string">"juice"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Austin"</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Jaden"</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
<span class="token comment"># 待补充代码</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Austin"</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Jaden"</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ title, value, isActive }">
<div class="language-tips ext-tips line-numbers-mode"><pre v-pre class="language-tips"><code>两种方法思路：

方法一： 联想现实生活，现实生活中你会如何解决？

&gt; 现实生活中，我想你会引入一个空杯子来操作，那你会如何操作？思考后再思考代码中如何实现？

方法二： Python 多个变量赋予不同值。
a, b, c = 1, 2, 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ title, value, isActive }">
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>Austin <span class="token operator">=</span> <span class="token string">"Coke"</span>
Jaden <span class="token operator">=</span> <span class="token string">"juice"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Austin"</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Jaden"</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
Empty_cup <span class="token operator">=</span> Austin
Austin <span class="token operator">=</span> Jaden
Jaden <span class="token operator">=</span> Empty_cup
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"-"</span> <span class="token operator">*</span> <span class="token number">12</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Austin"</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Jaden"</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab3="{ title, value, isActive }">
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>Austin <span class="token operator">=</span> <span class="token string">"Coke"</span>
Jaden <span class="token operator">=</span> <span class="token string">"juice"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Austin"</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Jaden"</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
Austin<span class="token punctuation">,</span> Jaden <span class="token operator">=</span> Jaden<span class="token punctuation">,</span> Austin
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"-"</span> <span class="token operator">*</span> <span class="token number">12</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Austin"</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Jaden"</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="custom-container danger">
<p class="custom-container-title">警告！！！</p>
<details class="custom-container details"><summary>不要出现如下方法！！！</summary>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>Austin <span class="token operator">=</span> <span class="token string">"Coke"</span>
Jaden <span class="token operator">=</span> <span class="token string">"juice"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Austin"</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Jaden"</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
<span class="token comment"># 待补充代码</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Austin"</span><span class="token punctuation">,</span> Jaden<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Jaden"</span><span class="token punctuation">,</span> Austin<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
</div>
<h2 id="_2-创建变量并输出" tabindex="-1"><a class="header-anchor" href="#_2-创建变量并输出" aria-hidden="true">#</a> 2. 创建变量并输出</h2>
<ol>
<li>输出效果：</li>
</ol>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>Austin Jaden Alex Cava
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>输出效果如下：</li>
</ol>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>Austin$Jaden$Alex$Cava<span class="token operator">%</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container info">
<p class="custom-container-title">悦创金句</p>
<p>程序员就是连接人与机器之间的桥梁——AI悦创</p>
</div>
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


