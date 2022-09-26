<template><div><h2 id="猎豹-的第二篇成长日记" tabindex="-1"><a class="header-anchor" href="#猎豹-的第二篇成长日记" aria-hidden="true">#</a> “猎豹”的第二篇成长日记</h2>
<p>嗨，你还记得我吗？我是萨摩耶“猎豹”。今天我的主人 Lisa 亲手做了一份晚餐给我吃。</p>
<p>味道好极了！你能帮我写一篇日记记录这美好的一天吗？</p>
<p><img src="@source/column/web/base/base_06.assets/1564991566226580.jpg" alt="HTML实战" loading="lazy"></p>
<h2 id="第1步-找到文件" tabindex="-1"><a class="header-anchor" href="#第1步-找到文件" aria-hidden="true">#</a> 第1步 找到文件</h2>
<p>请你在编译器中找到在做第一章实战练习时，保存下来的index.html文件并打开它。</p>
<p>找到 body 中的最后一个 <code v-pre>&lt;p&gt;</code> 元素的结束标签 <code v-pre>&lt;/p&gt;</code> ,把光标移动到它后面，然后点击回车，将光标移到新的一行。</p>
<p><img src="@source/column/web/base/base_06.assets/image-20220802185215729.png" alt="image-20220802185215729" loading="lazy"></p>
<h2 id="第-2-步-标题" tabindex="-1"><a class="header-anchor" href="#第-2-步-标题" aria-hidden="true">#</a> 第 2 步 标题</h2>
<p>我们要再为猎豹写一篇日记。就得接在第一篇日记后面写。</p>
<p>日记结构依然由标题、图片、段落 3 个元素组成。</p>
<p><img src="@source/column/web/base/base_06.assets/未命名表单.png" alt="未命名表单" loading="lazy"></p>
<p>这次，请尝试自己写代码和文本：</p>
<p>写日记首先从写日期开始。我们将日期作为第二篇日记的 <strong>标题</strong> ，采用 <code v-pre>&lt;h2&gt;&lt;/h2&gt;</code> 包围文本“ <strong>2019年7月31日</strong> ”。</p>
<p><img src="@source/column/web/base/base_06.assets/image-20220802191012599.png" alt="image-20220802191012599" loading="lazy"></p>
<p>为什么不使用 <code v-pre>&lt;h1&gt;</code> 元素包围文本呢？</p>
<p>对于 <code v-pre>index.html</code> 这个文件来说，我们已有了一级标题—— <code v-pre>&lt;h1&gt;</code> 猎豹的成长日记 <code v-pre>&lt;/h1&gt;</code> 。</p>
<p><img src="@source/column/web/base/base_06.assets/image-20220802191321924.png" alt="image-20220802191321924" loading="lazy"></p>
<p>为了使猎豹的网页版成长日记看起来结构清晰，我们将日记中的日期都用 <code v-pre>&lt;h2&gt;&lt;/h2&gt;</code> 包围起来。</p>
<p>你也可以理解为文本 <strong>2022年7月13日</strong> 与 <strong>2022年8月02日</strong> 是 <strong>平级关系</strong> 。字号统一。</p>
<h2 id="第-3-步-图片" tabindex="-1"><a class="header-anchor" href="#第-3-步-图片" aria-hidden="true">#</a> 第 3 步 图片</h2>
<p>这是 Lisa 为猎豹亲手制作的美味晚餐照片。</p>
<img src="@source/column/web/base/base_06.assets/image-20220802202948836.png" alt="猎豹的晚餐" style="zoom:25%;" />
<p>这张照片是网页上的第二张图片。我们将它命名为 <code v-pre>pic2.png</code> 。</p>
<p>将 pic2 保存在 img（专门存放图片的）文件夹中。</p>
<p><img src="@source/column/web/base/base_06.assets/image-20220802203422653.png" alt="image-20220802203422653" loading="lazy"></p>
<p>还记得图片对应哪个元素吗？</p>
<p>对应 <code v-pre>&lt;img&gt;</code> 元素。</p>
<p>但光有 <code v-pre>&lt;img&gt;</code> 元素没用, 我们要为它添加 src 属性：<code v-pre>&lt;img src=&quot;&quot;&gt;</code></p>
<p>还记得 <code v-pre>src=&quot;&quot;</code> 中的引号内要填入什么吗?</p>
<p>应填入图片的存储路径。</p>
<p>对于本例来说，pic2 这张图片存储在 img 文件夹中，因此路径是：<code v-pre>img/pic2.jpg</code> 。</p>
<p><img src="@source/column/web/base/base_06.assets/image-20220802203854960.png" alt="image-20220802203854960" loading="lazy"></p>
<p>注意：</p>
<ul>
<li><strong>要将图片的文件格式一起写入。</strong> 本例的文件格式是 jpg。HTML 能运行多种格式的图片。比如：<code v-pre>png</code>, <code v-pre>jpg</code> ,<code v-pre>svg</code> 等。</li>
<li><strong><code v-pre>&lt;br&gt;</code> 也是空元素。它的作用是折行。</strong>「换行」 它能够使图片和下面的段落文本分离成两行。这样能使网页结构更加清晰，看起来更加美观。</li>
</ul>
<h2 id="第-4-步-列表" tabindex="-1"><a class="header-anchor" href="#第-4-步-列表" aria-hidden="true">#</a> 第 4 步 列表</h2>
<p>接下来，我们要为猎豹的美味晚餐配上文字。</p>
<p>Lisa想这样写：</p>
<p><strong>猎豹今日晚餐食材：西蓝花5g、胡萝卜5g、土豆5g、苹果5g、三文鱼10g、鸡胸肉10g、牛肉10g、豆腐5g、燕麦2g、鸡蛋黄2个。</strong></p>
<p>制作步骤：</p>
<ol>
<li>
<p>敲 2 个鸡蛋，只取蛋黄</p>
</li>
<li>
<p>把西蓝花、胡萝卜、土豆、苹果、三文鱼、鸡胸肉、牛肉、豆腐洗净，切碎。豆腐和成泥装盘独放。再取少许燕麦，将蛋黄和切碎的食材一起（除豆腐外）放入料理机打成泥状。</p>
</li>
<li>
<p>从料理机中取出食材装盘。将泥状食材与豆腐混合搓成乒乓球大小的泥团。</p>
</li>
<li>
<p>将泥团放入锅中蒸煮，10分钟即可。</p>
</li>
</ol>
<p><strong>看完 Lisa 的文字，你是不是有了制作列表的灵感？</strong></p>
<p>我们可先将内容分为 2 个部分，分别用 2 个段落处理：</p>
<p><code v-pre>&lt;p&gt;猎豹今日晚餐食材&lt;/p&gt;</code></p>
<p><code v-pre>&lt;p&gt;制作步骤&lt;/p&gt;</code></p>
<p><img src="@source/column/web/base/base_06.assets/image-20220802210703419.png" alt="image-20220802210703419" loading="lazy"></p>
<p>我们将具体的食材和用量用 <strong>无序列表</strong> 处理：</p>
<p><img src="@source/column/web/base/base_06.assets/image-20220802212321962.png" alt="image-20220802212321962" loading="lazy"></p>
<p>我们再将制作步骤用 <strong>有序列表</strong> 处理：</p>
<p><img src="@source/column/web/base/base_06.assets/image-20220802212556776.png" alt="image-20220802212556776" loading="lazy"></p>
<h2 id="第-5-步-超链接" tabindex="-1"><a class="header-anchor" href="#第-5-步-超链接" aria-hidden="true">#</a> 第 5 步 超链接</h2>
<p>我们还可以考虑使用 <code v-pre>&lt;a&gt;</code> 元素，为不常见的食材添加百度百科的超链接。比如：为&quot;燕麦”添加超链接。</p>
<p>首先将&quot;燕麦”用 <code v-pre>&lt;a&gt;&lt;/a&gt;</code> 包围。</p>
<p><img src="@source/column/web/base/base_06.assets/image-20220802213036797.png" alt="image-20220802213036797" loading="lazy"></p>
<p>找到 <code v-pre>&lt;a&gt;</code> 元素的开始标签，空一格，在空格后添加上 href 属性，补充等号，将燕麦的百度百科地址封装在引号中：</p>
<p><img src="@source/column/web/base/base_06.assets/image-20220802213409423.png" alt="image-20220802213409423" loading="lazy"></p>
<p>到此，猎豹的第二篇日记就写好了。</p>
<p>记得点击“保存（save）”，确保你的实战成果都保存在编译器的 <code v-pre>index.html</code> 文件中。</p>
<h2 id="附加题" tabindex="-1"><a class="header-anchor" href="#附加题" aria-hidden="true">#</a> 附加题</h2>
<p>我们可以为猎豹晚餐的重点制作步骤添加强调效果。比如：加粗或是斜体。</p>
<p><img src="@source/column/web/base/base_06.assets/image-20220802213934582.png" alt="image-20220802213934582" loading="lazy"></p>
<ul>
<li><code v-pre>&lt;strong&gt;</code> 元素的效果是加粗;</li>
<li><code v-pre>&lt;em&gt;</code> 元素的效果是斜体。</li>
</ul>
<p><img src="@source/column/web/base/base_06.assets/image-20220802214108809.png" alt="image-20220802214108809" loading="lazy"></p>
<h2 id="第-6-步-测试" tabindex="-1"><a class="header-anchor" href="#第-6-步-测试" aria-hidden="true">#</a> 第 6 步 测试</h2>
<p>如果你一直跟着我的步骤，在编译器中编写代码，猎豹的第二篇日记已经完工啦！</p>
<p>请将 <code v-pre>index.html</code> 文件再次拖入浏览器中，测试运行效果。</p>
<p><img src="@source/column/web/base/base_06.assets/image-20220802214436380.png" alt="image-20220802214436380" loading="lazy"></p>
<p>经过第二章的学习，你已经：</p>
<p><strong>1. 理解了HTML的定义和作用；</strong></p>
<p><strong>2. 理解了HTML的元素和属性、元素的嵌套、块级元素、内联元素和空元素。</strong></p>
<p><strong>3. 掌握了HTML的常见元素。</strong></p>
<p><strong>4. 为猎豹编写了第二篇成长日记！</strong></p>
<p><strong>5. HTML 入门了！</strong></p>
<p>下一章，我们将带领你入门CSS。CSS将使猎豹的成长日记变得更加美观。</p>
<h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2>
<p><img src="@source/column/web/base/base_06.assets/image-20220802215317895.png" alt="image-20220802215317895" loading="lazy"></p>
<p><img src="@source/column/web/base/base_06.assets/image-20220802215421253.png" alt="image-20220802215421253" loading="lazy"></p>
<p><button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/web_base/base_06/index.html" target="_blank">成品</a></button></p>
<p><button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/web_base/base_06/base_06.html" target="_blank">在线试一试</a></button></p>
<h2 id="代码下载" tabindex="-1"><a class="header-anchor" href="#代码下载" aria-hidden="true">#</a> 代码下载</h2>
<p><button name="button" style="color: black"><a href="https://bornforthis.cn/web_runing/data/base_06/base_06.zip" target="_blank">代码下载</a></button></p>
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


