<template><div><h2 id="_1-软件安装" tabindex="-1"><a class="header-anchor" href="#_1-软件安装" aria-hidden="true">#</a> 1. 软件安装</h2>
<ol>
<li><a href="https://atom.io/" target="_blank" rel="noopener noreferrer">https://atom.io/<ExternalLinkIcon/></a></li>
<li><a href="http://www.barebones.com/products/textwrangler/" target="_blank" rel="noopener noreferrer">http://www.barebones.com/products/textwrangler/<ExternalLinkIcon/></a></li>
<li><a href="https://notepad-plus-plus.org/" target="_blank" rel="noopener noreferrer">https://notepad-plus-plus.org/<ExternalLinkIcon/></a></li>
<li><a href="https://fetchsoftworks.com/" target="_blank" rel="noopener noreferrer">https://fetchsoftworks.com/<ExternalLinkIcon/></a></li>
<li>Putty：命令行操作服务器，SSH</li>
<li>WinScp：文件操作</li>
<li>SublimeText：<a href="https://www.sublimetext.com/download" target="_blank" rel="noopener noreferrer">https://www.sublimetext.com/download<ExternalLinkIcon/></a></li>
<li><a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer">https://www.jetbrains.com/webstorm/<ExternalLinkIcon/></a></li>
</ol>
<h2 id="windows-software-for-secure-access" tabindex="-1"><a class="header-anchor" href="#windows-software-for-secure-access" aria-hidden="true">#</a> Windows Software For Secure Access:</h2>
<p><strong>Login Shell Programs</strong></p>
<ul>
<li><strong><a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html" target="_blank" rel="noopener noreferrer">putty<ExternalLinkIcon/></a>:</strong> Further <a href="http://the.earth.li/~sgtatham/putty/0.53b/htmldoc/" target="_blank" rel="noopener noreferrer">information <ExternalLinkIcon/></a>and some <a href="https://cims.nyu.edu/webapps/content/systems/userservices/netaccess/secure#putty" target="_blank" rel="noopener noreferrer">example commands<ExternalLinkIcon/></a></li>
</ul>
<p><strong>File Transfer Programs</strong></p>
<ul>
<li><strong><a href="https://winscp.net/" target="_blank" rel="noopener noreferrer">winscp<ExternalLinkIcon/></a></strong></li>
<li><strong><a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html" target="_blank" rel="noopener noreferrer">psftp<ExternalLinkIcon/></a>:</strong> Further <a href="http://the.earth.li/~sgtatham/putty/0.53b/htmldoc/Chapter6.html#6" target="_blank" rel="noopener noreferrer">information<ExternalLinkIcon/></a> and some <a href="https://cims.nyu.edu/webapps/content/systems/userservices/netaccess/secure#psftp" target="_blank" rel="noopener noreferrer">example commands<ExternalLinkIcon/></a></li>
</ul>
<h2 id="_2-assignment-1-unix" tabindex="-1"><a class="header-anchor" href="#_2-assignment-1-unix" aria-hidden="true">#</a> 2. Assignment 1: Unix</h2>
<p>This assignment will create an initial Web page for you on a Unix server at <a href="http://i6.cims.nyu.edu/~netid" target="_blank" rel="noopener noreferrer">i6.cims.nyu.edu/~netid<ExternalLinkIcon/></a>.</p>
<p>This will just set up your Web page for the first time. Soon you will update the page, but for now you just need to access your account and establish your page.</p>
<h3 id="_2-1-writing-your-web-page" tabindex="-1"><a class="header-anchor" href="#_2-1-writing-your-web-page" aria-hidden="true">#</a> 2.1 Writing Your Web Page</h3>
<p>You need to establish your page with your name in the title and body.</p>
<p>Use <a href="https://atom.io/" target="_blank" rel="noopener noreferrer">Atom<ExternalLinkIcon/></a>, <a href="http://www.barebones.com/products/textwrangler/" target="_blank" rel="noopener noreferrer">TextWrangler<ExternalLinkIcon/></a> (Mac), or <a href="http://notepad-plus-plus.org/" target="_blank" rel="noopener noreferrer">Notepad++<ExternalLinkIcon/></a> (Windows) to type in or copy the HTML code below and enter your name into the title and body of the page.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Your name goes here<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Your name and any other text you would like goes here.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Save this file as “<code v-pre>index.html</code>” on your computer. Test it locally in a Web browser to make sure it looks as it should using File &gt; Open File . . . from within Chrome, Firefox, or Safari.</p>
<h3 id="_2-2-uploading-your-web-page" tabindex="-1"><a class="header-anchor" href="#_2-2-uploading-your-web-page" aria-hidden="true">#</a> 2.2 Uploading Your Web Page</h3>
<p>Now, use an SFTP program to transfer your “index.html” Web page file from your computer to the i6 server. <a href="https://fetchsoftworks.com/" target="_blank" rel="noopener noreferrer">Fetch<ExternalLinkIcon/></a> is a Mac SFTP program available for free to NYU students <a href="https://www.nyu.edu/its/software/#fetch" target="_blank" rel="noopener noreferrer">from ITS<ExternalLinkIcon/></a>. Alternatively, you can try <a href="http://cyberduck.ch/" target="_blank" rel="noopener noreferrer">Cyberduck<ExternalLinkIcon/></a> for the Mac or <a href="http://winscp.net/" target="_blank" rel="noopener noreferrer">WinSCP<ExternalLinkIcon/></a> for Windows. Whatever program you use, be sure to connect using SFTP (as opposed to FTP).</p>
<p>If you are using Fetch, here is the opening screen; fill it in as follows but with your own NetID and click “Connect.” After logging in, you can use “Put” to copy files to the server and “Get” to bring files down from the server to your local machine.</p>
<p><img src="@source/1v1/06-KAI/01-Assignment-1-Unix.assets/Screen-Shot-2017-09-29-at-11.06.54-AM-1024x820.png" alt="Screen Shot 2017-09-29 at 11.06.54 AM" loading="lazy"></p>
<p>Upload the index.html file from your computer to your i6 account inside your <strong>public_html</strong> folder. Once you have uploaded the file, check to make sure your Web page is visible at: <a href="http://i6.cims.nyu.edu/~netid" target="_blank" rel="noopener noreferrer">i6.cims.nyu.edu/~netid<ExternalLinkIcon/></a></p>
<h3 id="_2-3-submitting-your-assignment" tabindex="-1"><a class="header-anchor" href="#_2-3-submitting-your-assignment" aria-hidden="true">#</a> 2.3 Submitting Your Assignment</h3>
<ul>
<li>Post the URL of your Web page to BrightSpace for your instructor and grader.</li>
</ul>
<p><strong>Start Date</strong></p>
<ul>
<li>Sep 8, 2022 6:59 AM</li>
</ul>
<p><strong>Due Date</strong></p>
<ul>
<li>Sep 13, 2022 8:00 AM</li>
</ul>
<p>![Screen Shot 2017-09-29 at 11.06.54 AM](./01-Assignment-1-Unix.assets/Screen Shot 2017-09-29 at 11.06.54 AM.png)</p>
<h2 id="_3-submit" tabindex="-1"><a class="header-anchor" href="#_3-submit" aria-hidden="true">#</a> 3. Submit</h2>
<p>Text submission</p>
<p><img src="@source/1v1/06-KAI/01-Assignment-1-Unix.assets/image-20220909214735804.png" alt="image-20220909214735804" loading="lazy"></p>
<p>成功：<a href="https://i6.cims.nyu.edu/~zq2076/index.html" target="_blank" rel="noopener noreferrer">https://i6.cims.nyu.edu/~zq2076/index.html<ExternalLinkIcon/></a></p>
<h2 id="_4-url-是什么" tabindex="-1"><a class="header-anchor" href="#_4-url-是什么" aria-hidden="true">#</a> 4. URL 是什么？</h2>
<h2 id="_5-时间表" tabindex="-1"><a class="header-anchor" href="#_5-时间表" aria-hidden="true">#</a> 5. 时间表</h2>
<ul>
<li>每天一个小时
<ul>
<li>Java</li>
<li>Python</li>
<li>Blog</li>
<li>。。。</li>
<li>让自己更加高效。</li>
</ul>
</li>
</ul>
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


