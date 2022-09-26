<template><div><h2 id="mac-升级-nodejs-和-npm-到最新版" tabindex="-1"><a class="header-anchor" href="#mac-升级-nodejs-和-npm-到最新版" aria-hidden="true">#</a> MAC 升级 Nodejs 和 Npm 到最新版</h2>
<blockquote>
<p>第一步，先查看本机node.js版本：</p>
</blockquote>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>node -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>第二步，清除node.js的cache：</p>
</blockquote>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>sudo npm cache clean -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>第三步，安装 n 工具，这个工具是专门用来管理node.js版本的，别怀疑这个工具的名字，是他是他就是他，他的名字就是 &quot;n&quot;</p>
</blockquote>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>sudo npm install -g n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>第四步，安装最新版本的node.js</p>
</blockquote>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>sudo n stable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>第五步，再次查看本机的node.js版本：</p>
</blockquote>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>node -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>第六步，更新npm到最新版：</p>
</blockquote>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>$ sudo npm install npm@latest -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>第七步，验证</p>
</blockquote>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>1、node -v
2、npm -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
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


