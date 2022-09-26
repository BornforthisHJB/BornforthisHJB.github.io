<template><div><h2 id="_1-debug" tabindex="-1"><a class="header-anchor" href="#_1-debug" aria-hidden="true">#</a> 1.debug</h2>
<p>缺少 <code v-pre>])</code>。</p>
<p>所有的符号，都是成双成对的。<code v-pre>()</code> 、<code v-pre>[]</code>。</p>
<h2 id="_2-多菜栏设置" tabindex="-1"><a class="header-anchor" href="#_2-多菜栏设置" aria-hidden="true">#</a> 2. 多菜栏设置</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token punctuation">{</span> 
    text<span class="token operator">:</span> <span class="token string">"专栏"</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token string">"workingDirectory"</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> 
        text<span class="token operator">:</span> <span class="token string">"IT 文档主页"</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">"/column"</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"私教回放"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"play"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">"/column/playback/"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"Python 合集"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"python"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">"/column/py/Python_tutorial/"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"Python 私教"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"python"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">"/column/py/basequestion/"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"Web 专栏"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"network"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">"/column/web/base"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"Python 办公自动化"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"python"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">"/column/pyauto"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"题解"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"code"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">"/column/tijie"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"公开课资料"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"blog"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">"/column/pyauto/gkk/"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"编程思维"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"siwei"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">"/column/Programmingthinking/"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"零基础学习机器学习"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"centos"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">"/column/TensorFlow/零基础实战机器学习/"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"数据分析"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"zhuzhuangtu"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">"/column/data_analysis/week1/01"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"数据结构与算法"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"shujujiegou-01"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">"/column/data-structure/week1/01"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"Python 60 Day"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"python"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">"/column/python60/01"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"AI悦创·天池计划"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"dianchi1"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">"/column/tianchi/Python/Python01"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"Java体系课"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"java"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">"/column/Java/chapter01/01.md"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"AI悦创·1v1"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"1v1-4"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">"/1v1/"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">"摄影入门课"</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token string">"cameraadd"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">"/column/摄影入门课/"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/1v1/01-Thomas-hw-note/09-web08.assets/image-20220913192300355.png" alt="image-20220913192300355" loading="lazy"></p>
<p><img src="@source/1v1/01-Thomas-hw-note/09-web08.assets/image-20220913192509249.png" alt="image-20220913192509249" loading="lazy"></p>
<h2 id="作业" tabindex="-1"><a class="header-anchor" href="#作业" aria-hidden="true">#</a> 作业</h2>
<ol>
<li></li>
<li></li>
</ol>
<h2 id="课后反馈" tabindex="-1"><a class="header-anchor" href="#课后反馈" aria-hidden="true">#</a> 课后反馈</h2>
<ol>
<li></li>
<li></li>
</ol>
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


