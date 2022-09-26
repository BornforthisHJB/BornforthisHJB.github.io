<template><div><h2 id="重温-img-元素" tabindex="-1"><a class="header-anchor" href="#重温-img-元素" aria-hidden="true">#</a> 重温 <code v-pre>&lt;img&gt;</code> 元素</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://bornforthis.cn/web_runing/data/base_03/img/base-03-02.jpg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/web_base/base_03/base_03-10.html" target="_blank">尝试一下</a></button></p>
<p>以上是一个 <code v-pre>&lt;img&gt;</code> 元素，在之前的课程中我们知道它是空元素。</p>
<p>该元素包含属性 src 将图像文件路径的地址包裹其中，可在网页内容中嵌入图像。</p>
<p>该元素还包括一个替换文字属性 alt。该属性是图像的描述内容。当图像不能正常显示时，它负责说明。点击“尝试一下”看看属性 alt 的作用：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://bornforthis.cn/web_runing/data/base_03/img/base-03-02.<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>图片不见了！<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/web_base/base_03/base_03-11.html" target="_blank">尝试一下</a></button></p>
<p>在以上案例中，属性 src 中指向的图片位置因缺少文件格式 jpg，导致图片无法显示。此时，属性 alt 中的文字“ <strong>图片不见了</strong> ”就发挥了说明的作用。</p>
<p><img src="@source/column/web/base/base_04.assets/image-20220802161622835.png" alt="image-20220802161622835" loading="lazy"></p>
<p><img src="@source/column/web/base/base_04.assets/image-20220802161720241.png" alt="image-20220802161720241" loading="lazy"></p>
<h2 id="a-元素" tabindex="-1"><a class="header-anchor" href="#a-元素" aria-hidden="true">#</a> <code v-pre>&lt;a&gt;</code> 元素</h2>
<p>我们在浏览网页时常遇上超链接：</p>
<p><img src="@source/column/web/base/base_04.assets/202004131603149459.gif" alt="" loading="lazy"></p>
<p><strong>网页中的超链接怎么做呢？</strong></p>
<p>我们可以通过 <code v-pre>&lt;a&gt;</code> 元素对文本植入超链接。</p>
<p>例如：在文本“<code v-pre>随时随地学编程，请上 bornforthis.cn</code> ”上添加一个超链接，使用户点击这个文本时转移到 <code v-pre>bornforthis.cn</code> 的官网首页。步骤如下：</p>
<ul>
<li>用 <code v-pre>&lt;a&gt; &lt;/a&gt;</code> 包围文本： <code v-pre>&lt;a&gt;随时随地学编程，请上 bornforthis.cn &lt;/a&gt;</code>。</li>
<li>为此 <code v-pre>&lt;a&gt;</code> 元素添加一个 href 属性： <code v-pre>&lt;a href=&quot;&quot;&gt;随时随地学编程，请上 bornforthis.cn &lt;/a&gt;</code></li>
<li>把 <a href="http://bornforthis.cn" target="_blank" rel="noopener noreferrer">bornforthis.cn<ExternalLinkIcon/></a> 官网首页的地址写入的 href 属性的引号当中： <code v-pre>&lt;a href=&quot;https://bornforthis.cn&quot;&gt; 随时随地学编程，请上bornforthis.cn &lt;/a&gt;</code></li>
</ul>
<p><strong>点击“尝试一下”，看看你是否能顺利访问 <a href="http://bornforthis.cn" target="_blank" rel="noopener noreferrer">bornforthis.cn<ExternalLinkIcon/></a> 的官网？</strong></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://bornforthis.cn/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>随时随地学编程，请上 bornforthis.cn<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/web_base/base_03/base_03-12.html" target="_blank">尝试一下</a></button></p>
<h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h2>
<p>网页内容中有一些是列表。</p>
<p><img src="@source/column/web/base/base_04.assets/image-20220802162427423.png" alt="image-20220802162427423" loading="lazy"></p>
<p>以上，标有序号的内容是 <strong>有序列表</strong> 的样式。在 HTML 代码中，它用一个 <code v-pre>&lt;ol&gt;</code> 元素包围。标有黑色小圆点的内容是 <strong>无序列表</strong> 的样式。在 HTML 代码中，它用一个 <code v-pre>&lt;ul&gt;</code> 元素包围。</p>
<p>两者区别在于“序”：列表有序中的项目顺序很重要。这就像我们用电饭煲煮饭先用量杯量米，再用清水洗米，接着盛适量水把洗净的米放入电饭煲蒸。这个过程中的先后顺序不能变。</p>
<p>列表无序中的项目顺序不重要。就像我们在体育课结束后，收拾散落一地的乒乓球，先从哪个球开始收拾并无讲究，只要收拾干净就行。</p>
<p>两者的相同点是：列表中的每个项目都要用一个 <code v-pre>&lt;li&gt;</code> 元素包围。</p>
<p>将下面的这串：<code v-pre>自制辣条的原料包括面筋条、干红辣椒、花椒、麻椒等等。</code> 改成一个无序列表：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>自制辣条的原料包括面筋条、干红辣椒、花椒、麻椒等等。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们可以这样改：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>自制辣条的原料包括<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>面筋条<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>干红辣椒<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>花椒<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>麻椒<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>辣椒粉等等<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/web_base/base_03/base_03-13.html" target="_blank">尝试一下</a></button></p>
<p>点击“尝试一下”，看看制作手工辣条的有序步骤列表（节选）：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>年轻的朋友们！品牌辣条吃得爽，可是价格贵。不如自己动手做：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>面筋条冷水浸泡4-5小时。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>将浸泡后的面筋条沥干，放入温油中小火慢炸。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>面筋条炸至金黄后捞起沥油。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>锅内留少许油，入花椒，麻椒，干红辣椒小火慢炒至出香。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>倒入沥干油的辣条，将其与配料一起翻炒......<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/web_base/base_03/base_03-14.html" target="_blank">尝试一下</a></button></p>
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


