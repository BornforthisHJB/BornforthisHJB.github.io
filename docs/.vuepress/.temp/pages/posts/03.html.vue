<template><div><p>本题就是操作 Numpy 与 Pandas 读取文件，并对比速度： 数据集：</p>
<ul>
<li>
<p>rating.txt：<a href="https://aiyc.lanzoux.com/iSU8ufj79af" target="_blank" rel="noopener noreferrer">https://aiyc.lanzoux.com/iSU8ufj79af<ExternalLinkIcon/></a></p>
</li>
<li>
<p>rating.csv：<a href="https://aiyc.lanzoux.com/iy3upfxymba" target="_blank" rel="noopener noreferrer">https://aiyc.lanzoux.com/iy3upfxymba<ExternalLinkIcon/></a></p>
</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">import</span> time

start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
data <span class="token operator">=</span> np<span class="token punctuation">.</span>genfromtxt<span class="token punctuation">(</span><span class="token string">'./rating.txt'</span><span class="token punctuation">,</span> delimiter<span class="token operator">=</span><span class="token string">','</span><span class="token punctuation">)</span>
end_reading_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Numpy reading time: {}ms'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">round</span><span class="token punctuation">(</span><span class="token punctuation">(</span>end_reading_time <span class="token operator">-</span> start_time<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

start_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
data <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_table<span class="token punctuation">(</span><span class="token string">'./rating.csv'</span><span class="token punctuation">,</span> 
    names<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">'user_id'</span><span class="token punctuation">,</span> <span class="token string">'book_id'</span><span class="token punctuation">,</span> <span class="token string">'rating'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    sep<span class="token operator">=</span><span class="token string">','</span><span class="token punctuation">)</span>
end_reading_time <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Pandas reading time: {}ms'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token builtin">round</span><span class="token punctuation">(</span><span class="token punctuation">(</span>end_reading_time <span class="token operator">-</span> start_time<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
Numpy reading time<span class="token punctuation">:</span> <span class="token number">27029</span><span class="token punctuation">.</span>64ms
Pandas reading time<span class="token punctuation">:</span> <span class="token number">1003</span><span class="token punctuation">.</span>31ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
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


