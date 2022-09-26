<template><div><h2 id="_1-文章加密解决" tabindex="-1"><a class="header-anchor" href="#_1-文章加密解决" aria-hidden="true">#</a> 1. 文章加密解决</h2>
<p>解决方法有两种：</p>
<p><strong>themes.ts</strong></p>
<ol>
<li>文件名称、文件夹全部用英文才可以出现锁；</li>
<li><code v-pre>[encodeURI(&quot;/column/TensorFlow/零基础实战机器学习/&quot;)]: &quot;123123a&quot;,</code></li>
</ol>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token punctuation">[</span><span class="token function">encodeURI</span><span class="token punctuation">(</span><span class="token string">"链接"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">"123123a"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token punctuation">[</span><span class="token function">encodeURI</span><span class="token punctuation">(</span><span class="token string">"/小随笔/"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">"111021"</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-修改菜单栏" tabindex="-1"><a class="header-anchor" href="#_2-修改菜单栏" aria-hidden="true">#</a> 2. 修改菜单栏</h2>
<ul>
<li>体验在线 Python：<a href="https://py.bornforthis.cn/#/" target="_blank" rel="noopener noreferrer">https://py.bornforthis.cn/#/<ExternalLinkIcon/></a></li>
<li>体验猜数字：<a href="https://bornforthis.cn/tool/works/game/GuessNumber.html" target="_blank" rel="noopener noreferrer">https://bornforthis.cn/tool/works/game/GuessNumber.html<ExternalLinkIcon/></a></li>
</ul>
<p>你想怎么存放呢？</p>
<table>
<thead>
<tr>
<th>主页</th>
<th>文章</th>
<th>日记</th>
<th>复习</th>
<th>规划</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<ul>
<li>text：标题</li>
<li>icon：图标</li>
<li>link：链接</li>
<li>children：子菜单</li>
<li>逗号隔开</li>
</ul>
<p>语法：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token punctuation">{</span>text<span class="token operator">:</span> <span class="token string">"使命必达"</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">"/小目标/5thgradeterm1"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>link 指向文件名称。</p>
<h3 id="_2-1-修改的文件" tabindex="-1"><a class="header-anchor" href="#_2-1-修改的文件" aria-hidden="true">#</a> 2.1 修改的文件</h3>
<p><code v-pre>.vuepress/navbar.ts</code></p>
<p><img src="@source/1v1/01-Thomas-hw-note/08-web07.assets/image-20220907194226928.png" alt="image-20220907194226928" loading="lazy"></p>
<h2 id="作业" tabindex="-1"><a class="header-anchor" href="#作业" aria-hidden="true">#</a> 作业</h2>
<ol>
<li>复习加密出现明文显示，解决的方法，并把自己的网站；</li>
<li>把自己的顶栏全部设置好；</li>
<li>复习查看部署进度；</li>
</ol>
<h2 id="课后反馈" tabindex="-1"><a class="header-anchor" href="#课后反馈" aria-hidden="true">#</a> 课后反馈</h2>
<ol>
<li>要记得保持哦；</li>
</ol>
<p><img src="@source/1v1/01-Thomas-hw-note/08-web07.assets/image-20220907193201953.png" alt="image-20220907193201953" loading="lazy"></p>
<ol start="2">
<li>要静下心思考和观察，这节课分享不认真观察和从已有的事务中寻找规律。</li>
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


