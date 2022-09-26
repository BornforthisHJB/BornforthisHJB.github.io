<template><div><p>网站：<a href="https://cloud.tencent.com/developer/article/1875661" target="_blank" rel="noopener noreferrer">https://cloud.tencent.com/developer/article/1875661<ExternalLinkIcon/></a>
图片链接：<a href="https://ask.qcloudimg.com/http-save/7111610/50febd19e08f024d8ddd6509ce54edfa.png?imageView2/2/w/1620" target="_blank" rel="noopener noreferrer">https://ask.qcloudimg.com/http-save/7111610/50febd19e08f024d8ddd6509ce54edfa.png?imageView2/2/w/1620<ExternalLinkIcon/></a></p>
<p>直接访问：</p>
<p><img src="@source/column/crawler/s2_0201.assets/1631254472457-4f32ec1e-8e11-45eb-93f9-2c5e39f4eb02.gif" alt="1.gif" loading="lazy"></p>
<p><img src="@source/column/crawler/s2_0201.assets/1631254783984-f7761f77-c990-4be3-9f63-c835eccc46c3.gif" alt="2.gif" loading="lazy"></p>
<p>不加 headers：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> requests

url <span class="token operator">=</span> <span class="token string">"https://ask.qcloudimg.com/http-save/7111610/50febd19e08f024d8ddd6509ce54edfa.png?imageView2/2/w/1620"</span>

html <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>content
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"image.png"</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">"wb"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>html<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/column/crawler/s2_0201.assets/1631255449109-7ef6cbfd-4f13-4c38-a38f-ef59d9f4a65b.png" alt="image.png" loading="lazy"></p>
<p>加上 headers：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> requests

url <span class="token operator">=</span> <span class="token string">"https://ask.qcloudimg.com/http-save/7111610/50febd19e08f024d8ddd6509ce54edfa.png?imageView2/2/w/1620"</span>

headers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">"User-Agent"</span><span class="token punctuation">:</span> <span class="token string">"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36"</span><span class="token punctuation">,</span>
    <span class="token string">"Referer"</span><span class="token punctuation">:</span> <span class="token string">"https://cloud.tencent.com/"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
html <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span><span class="token punctuation">.</span>content
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">"image.png"</span><span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">"wb"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>html<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/column/crawler/s2_0201.assets/1631255506705-2da7842d-7a72-4267-a82b-31b3583c1000.png" alt="image.png" loading="lazy"></p>
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


