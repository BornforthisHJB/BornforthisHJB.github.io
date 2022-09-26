<template><div><h2 id="_1-vscode-安装" tabindex="-1"><a class="header-anchor" href="#_1-vscode-安装" aria-hidden="true">#</a> 1. VSCode 安装</h2>
<p>下载地址：<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">https://code.visualstudio.com/<ExternalLinkIcon/></a></p>
<h2 id="_2-安装-git、nodejs、yarn" tabindex="-1"><a class="header-anchor" href="#_2-安装-git、nodejs、yarn" aria-hidden="true">#</a> 2. 安装 git、nodejs、yarn</h2>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>brew install git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>brew install nodejs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-yarn ext-yarn line-numbers-mode"><pre v-pre class="language-yarn"><code>sudo npm install --global yarn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>安装失败使用安装包安装，下载地址</strong>：<a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">https://nodejs.org/en/<ExternalLinkIcon/></a></p>
<h2 id="_3-检测-npm-版本" tabindex="-1"><a class="header-anchor" href="#_3-检测-npm-版本" aria-hidden="true">#</a> 3. 检测 npm 版本</h2>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>npm --v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-npm-换源" tabindex="-1"><a class="header-anchor" href="#_4-npm-换源" aria-hidden="true">#</a> 4. npm 换源</h2>
<div class="language-npm ext-npm line-numbers-mode"><pre v-pre class="language-npm"><code>npm config set registry https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-git-与-github" tabindex="-1"><a class="header-anchor" href="#_5-git-与-github" aria-hidden="true">#</a> 5. Git 与 GitHub</h2>
<div class="language-git ext-git line-numbers-mode"><pre v-pre class="language-git"><code>git config --global  --list
git config --global  user.name <span class="token string">"这里换上你的用户名"</span>
git config --global user.email <span class="token string">"这里换上你的邮箱"</span>
git config --global  --list
ssh-keygen -t rsa -C <span class="token string">"这里换上你的邮箱"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-操作-github" tabindex="-1"><a class="header-anchor" href="#_6-操作-github" aria-hidden="true">#</a> 6. 操作 GitHub</h2>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>ssh -T git@github.com 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_7-安装网站" tabindex="-1"><a class="header-anchor" href="#_7-安装网站" aria-hidden="true">#</a> 7. 安装网站</h2>
<div class="language-git ext-git line-numbers-mode"><pre v-pre class="language-git"><code>git clone git@github.com:Ohlalala1021/Ohlalala1021.github.io.git
npm init vuepress-theme-hope@next [dir]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>卜算子•咏春【回文诗】
作者：杭州云谷学校 肖张梓轩

｛早春篇｝
凛凛寒风疾，
金桔映梅黄，
落叶松下雪皑皑，
滴水化冰棱。

疾风寒凛凛，
黄梅映桔金，
皑皑雪下松叶落，
棱冰化水滴。

｛盛春篇｝
泥润春风起，
风舞白花垂，
扬絮柳韵作飞花，
暖日虫始春。

起风春润泥，
垂花白舞风，
花飞作韵柳絮扬，
春始虫日暖。

｛接夏篇｝
早花嫌春晚，
鸣虫语花繁，
翠柳啼莺舞蝶忙，
飞霞恋西溪。

晚春嫌花早，
繁花语虫鸣，
忙蝶舞莺啼柳翠，
溪西恋霞飞。�
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-网站启动命令" tabindex="-1"><a class="header-anchor" href="#_8-网站启动命令" aria-hidden="true">#</a> 8. 网站启动命令</h2>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>yarn run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键" aria-hidden="true">#</a> 快捷键</h2>
<ol>
<li>在命令行中，键盘向上键，可以快速获取上一条命令。</li>
</ol>
<h2 id="课后反馈" tabindex="-1"><a class="header-anchor" href="#课后反馈" aria-hidden="true">#</a> 课后反馈</h2>
<ol>
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


