<template><div><p><img src="@source/blog/2022/02.assets/v2-c40d2ef7e08afbb2750f2c5b4b45c923_1440w.jpg" alt="Homebrew国内如何自动安装（国内地址）（Mac &amp; Linux）" loading="lazy"></p>
<p><em>如果你是提示来这个页面查看<strong>错误</strong>，说明你用的脚本太老了，用下面脚本安装。</em></p>
<p>Brew 官网：<a href="https://brew.sh/" target="_blank" rel="noopener noreferrer">https://brew.sh/<ExternalLinkIcon/></a></p>
<h2 id="自动脚本-全部国内地址-复制下面一句脚本到终端中粘贴回车" tabindex="-1"><a class="header-anchor" href="#自动脚本-全部国内地址-复制下面一句脚本到终端中粘贴回车" aria-hidden="true">#</a> 自动脚本(全部国内地址)（复制下面一句脚本到终端中粘贴回车)</h2>
<p><strong>苹果电脑 常规安装脚本（推荐 完全体 几分钟安装完成）：</strong></p>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>/bin/zsh -c &quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>苹果电脑 极速安装脚本（精简版 几秒钟安装完成）：</strong></p>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>/bin/zsh -c &quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot; speed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>-&gt; <a href="https://link.zhihu.com/?target=https%3A//support.apple.com/zh-cn/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac" target="_blank" rel="noopener noreferrer">Mac电脑如何打开终端：command+空格 在聚焦搜索中输入terminal回车<ExternalLinkIcon/></a>。</p>
<p><strong>苹果电脑 卸载脚本：</strong></p>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>/bin/zsh -c &quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>常见错误</strong>去下方<a href="https://gitee.com/cunkai/HomebrewCN/blob/master/error.md" target="_blank" rel="noopener noreferrer">地址<ExternalLinkIcon/></a>查看</p>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>https://gitee.com/cunkai/HomebrewCN/blob/master/error.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Linux电脑</strong> 安装脚本：</p>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>rm Homebrew.sh ; wget https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh ; bash Homebrew.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Linux电脑</strong> 卸载脚本：</p>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>rm HomebrewUninstall.sh ; wget https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh ; bash HomebrewUninstall.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>如果遇到 SSL certificate problem: certificate has expired 错误
具体内容如下：
Cloning into '/usr/local/Homebrew'...
fatal: unable to access '<a href="http://link.zhihu.com/?target=https%3A//mirrors.ustc.edu.cn/brew.git/" target="_blank" rel="noopener noreferrer">mirrors.ustc.edu.cn/bre<ExternalLinkIcon/></a>': SSL certificate problem: certificate has expired
m此步骤失败 '尝试再次运行自动脚本选择其他下载源或者切换网络'
[问题分析]：
该部分原因可能因为在此之前 安装过Git客户端 默认Git客户端安装是开启SSL证书验证功能 需要在终端中关闭该验证
[解决办法] :
前面都不是重点，重点是问题描述里面的最后一句 certificate problem: certificate has expired，意思是证书过期了。其实就是SSL卡住了你，因此最快的解决方法就是关掉SSL验证。
终端输入下方代码 关闭SSL证书验证：
git config --global http.sslVerify false</p>
</blockquote>
<p>Give 仓库：<a href="https://gitee.com/cunkai/HomebrewCN" target="_blank" rel="noopener noreferrer">https://gitee.com/cunkai/HomebrewCN<ExternalLinkIcon/></a></p>
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


