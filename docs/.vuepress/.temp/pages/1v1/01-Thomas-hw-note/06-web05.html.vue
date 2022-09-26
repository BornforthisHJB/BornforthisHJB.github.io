<template><div><h2 id="_1-购买域名" tabindex="-1"><a class="header-anchor" href="#_1-购买域名" aria-hidden="true">#</a> 1. 购买域名</h2>
<h2 id="_2-注册-csdn" tabindex="-1"><a class="header-anchor" href="#_2-注册-csdn" aria-hidden="true">#</a> 2. 注册 CSDN</h2>
<p>利用 CSDN 做图床</p>
<p>Command + A 全选</p>
<h2 id="_3-修改背景图片链接" tabindex="-1"><a class="header-anchor" href="#_3-修改背景图片链接" aria-hidden="true">#</a> 3. 修改背景图片链接</h2>
<h2 id="_4-删除" tabindex="-1"><a class="header-anchor" href="#_4-删除" aria-hidden="true">#</a> 4. 删除</h2>
<p><img src="@source/1v1/01-Thomas-hw-note/06-web05.assets/image-20220830201148847.png" alt="image-20220830201148847" loading="lazy"></p>
<p><a href="http://README.md" target="_blank" rel="noopener noreferrer">README.md<ExternalLinkIcon/></a>&gt;projects</p>
<h2 id="_5-修改-footer" tabindex="-1"><a class="header-anchor" href="#_5-修改-footer" aria-hidden="true">#</a> 5. 修改 footer</h2>
<h2 id="_6-文章编写的初步操作" tabindex="-1"><a class="header-anchor" href="#_6-文章编写的初步操作" aria-hidden="true">#</a> 6. 文章编写的初步操作</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>title<span class="token punctuation">:</span> 你的标题
date<span class="token punctuation">:</span> <span class="token number">2022</span><span class="token operator">-</span><span class="token number">08</span><span class="token operator">-</span><span class="token number">30</span> <span class="token number">19</span><span class="token punctuation">:</span><span class="token number">59</span><span class="token punctuation">:</span><span class="token number">55</span>
author<span class="token punctuation">:</span> AI悦创
isOriginal<span class="token punctuation">:</span> true
category<span class="token punctuation">:</span>
    <span class="token operator">-</span> Python 1v1
    <span class="token operator">-</span> Thomas<span class="token operator">-</span>hw<span class="token operator">-</span>note
tag<span class="token punctuation">:</span>
    <span class="token operator">-</span> Python 1v1
    <span class="token operator">-</span> Thomas<span class="token operator">-</span>hw<span class="token operator">-</span>note
icon<span class="token punctuation">:</span> blog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-文章日期生成" tabindex="-1"><a class="header-anchor" href="#_7-文章日期生成" aria-hidden="true">#</a> 7. 文章日期生成</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> time  <span class="token comment"># 引入time模块</span>
<span class="token comment"># 打印格式化时间</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">'%Y-%m-%d %H:%M:%S'</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>       <span class="token comment"># 打印按指定格式排版的时间</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-阿里云域名解析" tabindex="-1"><a class="header-anchor" href="#_8-阿里云域名解析" aria-hidden="true">#</a> 8. 阿里云域名解析</h2>
<p><a href="https://www.thomasxiao.com/" target="_blank" rel="noopener noreferrer">https://www.thomasxiao.com/<ExternalLinkIcon/></a></p>
<h2 id="作业" tabindex="-1"><a class="header-anchor" href="#作业" aria-hidden="true">#</a> 作业</h2>
<ol>
<li>把你以往的文章上传上去；</li>
<li>要求：
<ol>
<li>文章标题</li>
<li>文章日期</li>
<li>文章作者</li>
<li>分类标签、标签</li>
<li>都要有</li>
</ol>
</li>
</ol>
<h2 id="课后反馈" tabindex="-1"><a class="header-anchor" href="#课后反馈" aria-hidden="true">#</a> 课后反馈</h2>
<ol>
<li>忘记进入网站根目录，在根目录启动网站。</li>
<li>修改完要记得保存哦。Command + S</li>
<li>忘记部署命令了哎；</li>
<li>Run 经常打错，打成 yun</li>
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


