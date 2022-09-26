<template><div><p>Sometimes you need to store sensitive information in your code, such as passwords or API keys, and the cleanest way to do it in Python is using the os and dotenv modules.</p>
<p>For that, you will need to install the dotenv module, while the os module is a standard Python module and needs no installation.</p>
<p>In the command line, you enter:</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>pip install python<span class="token operator">-</span>dotenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or for Python 3</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>pip3 install python<span class="token operator">-</span>dotenv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Let’s say the content of the .env file is:</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>API_KEY<span class="token operator">=</span><span class="token string">"abcd123"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A good practice is to include a .env.example file in your project, where you include an example for each one of the secret variables you are using. The content of the file would look like:</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>API_KEY<span class="token operator">=</span><span class="token string">"example key"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To load it in your python file, you should:</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">from</span> dotenv <span class="token keyword">import</span> load_dotenv
load_dotenv<span class="token punctuation">(</span><span class="token punctuation">)</span>
API_KEY <span class="token operator">=</span> os<span class="token punctuation">.</span>getenv<span class="token punctuation">(</span><span class="token string">"API_KEY"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There you go! Now, you are hiding you data properly!</p>
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
<p><a href="https://medium.com/@alexbebereche/how-to-hide-you-api-key-with-python-5cc63d2a6c45" target="_blank" rel="noopener noreferrer">https://medium.com/@alexbebereche/how-to-hide-you-api-key-with-python-5cc63d2a6c45<ExternalLinkIcon/></a></p>
</div></template>


