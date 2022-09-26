<template><div><p>你好，我是悦创。</p>
<p>Markdown 段落没有特殊的格式，直接编写文字就好，<strong>段落的换行直接回车就好。</strong></p>
<p><img src="@source/column/md/02.assets/202205051655970.png" alt="image-20211027172857577" loading="lazy"></p>
<h2 id="字体" tabindex="-1"><a class="header-anchor" href="#字体" aria-hidden="true">#</a> 字体</h2>
<p>Markdown 可以使用以下几种字体：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token italic"><span class="token punctuation">*</span><span class="token content">斜体文本</span><span class="token punctuation">*</span></span>
<span class="token italic"><span class="token punctuation">_</span><span class="token content">斜体文本</span><span class="token punctuation">_</span></span>
<span class="token bold"><span class="token punctuation">**</span><span class="token content">粗体文本</span><span class="token punctuation">**</span></span>
<span class="token bold"><span class="token punctuation">__</span><span class="token content">粗体文本</span><span class="token punctuation">__</span></span>
<span class="token bold"><span class="token punctuation">**</span><span class="token content"><span class="token italic"><span class="token punctuation">*</span><span class="token content">粗斜体文本</span><span class="token punctuation">*</span></span></span><span class="token punctuation">**</span></span>
<span class="token bold"><span class="token punctuation">__</span><span class="token content"><span class="token italic"><span class="token punctuation">_</span><span class="token content">粗斜体文本</span><span class="token punctuation">_</span></span></span><span class="token punctuation">__</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示效果如下所示：</p>
<p><img src="@source/column/md/02.assets/202205051655205.png" alt="" loading="lazy"></p>
<h2 id="分隔线" tabindex="-1"><a class="header-anchor" href="#分隔线" aria-hidden="true">#</a> 分隔线</h2>
<p>你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token hr punctuation">***</span>

<span class="token hr punctuation">* * *</span>

<span class="token hr punctuation">*****</span>

<span class="token hr punctuation">- - -</span>

<span class="token hr punctuation">----------</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示效果如下所示：</p>
<p><img src="@source/column/md/02.assets/202205051656556.png" alt="" loading="lazy"></p>
<h2 id="删除线" tabindex="-1"><a class="header-anchor" href="#删除线" aria-hidden="true">#</a> 删除线</h2>
<p>如果段落上的文字要添加删除线，只需要在文字的两端加上两个波浪线 <strong>~~</strong>  即可，实例如下：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>aiyc.top

book.bornforthi.com

<span class="token strike"><span class="token punctuation">~~</span><span class="token content">baidu.com</span><span class="token punctuation">~~</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显示效果如下所示：</p>
<p><img src="@source/column/md/02.assets/202205051656348.png" alt="image-20211027211907431" loading="lazy"></p>
<h2 id="下划线" tabindex="-1"><a class="header-anchor" href="#下划线" aria-hidden="true">#</a> 下划线</h2>
<p>下划线可以通过 HTML 的 <strong>&lt;u&gt;</strong> 标签来实现：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>u</span><span class="token punctuation">></span></span>带下划线文本<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>u</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示效果如下所示：</p>
<p><img src="@source/column/md/02.assets/202205051656946.png" alt="image-20211027212240861" loading="lazy"></p>
<h2 id="脚注" tabindex="-1"><a class="header-anchor" href="#脚注" aria-hidden="true">#</a> 脚注</h2>
<p>脚注是对文本的补充说明。</p>
<p>Markdown 脚注的格式如下:</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>[^要注明的文本]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以下实例演示了脚注的用法：</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>创建脚注格式类似这样 [^bornforthi]。

<span class="token url-reference url"><span class="token punctuation">[</span><span class="token variable">^bornforthi</span><span class="token punctuation">]</span><span class="token punctuation">:</span> 流沙团队</span> -- 一股无形的力量，学的不仅是技术，更是梦想！！！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>演示效果如下：</p>
<p><img src="@source/column/md/02.assets/202205051656607.png" alt="image-20211027212704519" loading="lazy"></p>
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


