<template><div><h2 id="_1-新建-pycharm-项目" tabindex="-1"><a class="header-anchor" href="#_1-新建-pycharm-项目" aria-hidden="true">#</a> 1. 新建 Pycharm 项目</h2>
<ol>
<li>设置路径和文件夹名称「不要中文、空格」</li>
<li>其他不用改变，直接 create</li>
</ol>
<p><img src="@source/1v1/03-Dannie/03.assets/image-20220907075419628.png" alt="image-20220907075419628" loading="lazy"></p>
<h2 id="_2-pycharm-为何自动生成-main-py" tabindex="-1"><a class="header-anchor" href="#_2-pycharm-为何自动生成-main-py" aria-hidden="true">#</a> 2. Pycharm 为何自动生成 <a href="http://main.py" target="_blank" rel="noopener noreferrer">main.py<ExternalLinkIcon/></a>？</h2>
<p><img src="@source/1v1/03-Dannie/03.assets/image-20220907075718832.png" alt="image-20220907075718832" loading="lazy"></p>
<p>为了方便我们「开发者」快速测试 Pycharm 环境，能否正常调用 Python。「测试 Python 环境，是否正常」</p>
<h2 id="_3-run-main-py" tabindex="-1"><a class="header-anchor" href="#_3-run-main-py" aria-hidden="true">#</a> 3. run <a href="http://main.py" target="_blank" rel="noopener noreferrer">main.py<ExternalLinkIcon/></a></h2>
<p>在代码编辑器中任意位置，鼠标右键，运行代码。</p>
<p><img src="@source/1v1/03-Dannie/03.assets/image-20220907081729064.png" alt="image-20220907081729064" loading="lazy"></p>
<h2 id="_4-删除-main-py-and-create-new-python-file" tabindex="-1"><a class="header-anchor" href="#_4-删除-main-py-and-create-new-python-file" aria-hidden="true">#</a> 4. 删除 <a href="http://main.py" target="_blank" rel="noopener noreferrer">main.py<ExternalLinkIcon/></a> and create new Python file</h2>
<h3 id="_4-1-删除-main-py" tabindex="-1"><a class="header-anchor" href="#_4-1-删除-main-py" aria-hidden="true">#</a> 4.1 删除 <a href="http://main.py" target="_blank" rel="noopener noreferrer">main.py<ExternalLinkIcon/></a></h3>
<ol>
<li>删除：鼠标放在 <code v-pre>main.py</code> 代码文件上面，右键 deleat。</li>
</ol>
<p><img src="@source/1v1/03-Dannie/03.assets/image-20220907081911670.png" alt="image-20220907081911670" loading="lazy"></p>
<blockquote>
<p>注意⚠️：Pycharm 中有 venv 文件夹，注意！！！注意！！！注意！！！不要去动它，收起来即可，以后带你了解——Python 虚拟环境</p>
</blockquote>
<h3 id="_4-2-为什么需要虚拟环境呢" tabindex="-1"><a class="header-anchor" href="#_4-2-为什么需要虚拟环境呢" aria-hidden="true">#</a> 4.2 为什么需要虚拟环境呢？</h3>
<ul>
<li>我们每台电脑不可能就只有一个 Project，会有很多 Python 的 Project。</li>
<li>每个 Project 的项目依赖不同，有可能多个项目会有依赖的版本不同。</li>
<li>例如：
<ul>
<li>A 项目：requests、pandas、numpy==1.23.2、tkinter</li>
<li>B 项目：requests、numpy==1.01.1、pyecharts</li>
</ul>
</li>
<li>防止项目依赖冲突。</li>
<li>库都会下载在对应的虚拟环境里面。A_venv、B_venv</li>
<li>举个例子：你电脑安装了一个 Chrome 浏览器，你还能再同时安装另一个版本的 Chrome 吗？</li>
</ul>
<h3 id="_4-3-新建-python-文件" tabindex="-1"><a class="header-anchor" href="#_4-3-新建-python-文件" aria-hidden="true">#</a> 4.3 新建 Python 文件</h3>
<p>你把代码放在哪个文件夹，就在哪个文件夹上右键</p>
<p><img src="@source/1v1/03-Dannie/03.assets/image-20220907083139595.png" alt="image-20220907083139595" loading="lazy"></p>
<p><img src="@source/1v1/03-Dannie/03.assets/image-20220907083117636.png" alt="image-20220907083117636" loading="lazy"></p>
<p>在新建的文件夹上：右键&gt;&gt;&gt;New Python file</p>
<p><img src="@source/1v1/03-Dannie/03.assets/image-20220907083415347.png" alt="image-20220907083415347" loading="lazy"></p>
<p><img src="@source/1v1/03-Dannie/03.assets/image-20220907083431199.png" alt="image-20220907083431199" loading="lazy"></p>
<p>输入测试代码：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Hello Python!!!我来啦！Skr～"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/1v1/03-Dannie/03.assets/image-20220907083553419.png" alt="image-20220907083553419" loading="lazy"></p>
<h2 id="_5-变量" tabindex="-1"><a class="header-anchor" href="#_5-变量" aria-hidden="true">#</a> 5. 变量</h2>
<h3 id="_5-1-理解变量" tabindex="-1"><a class="header-anchor" href="#_5-1-理解变量" aria-hidden="true">#</a> 5.1 理解变量</h3>
<p>从生活中去理解变量：</p>
<ul>
<li>变：变化</li>
<li>量：有大小</li>
</ul>
<blockquote>
<p><strong>变量就在计算机的内存中，开辟空间！</strong></p>
</blockquote>
<p>变量 Value 会被覆盖。</p>
<h3 id="_5-2-如何创建变量——赋值语句" tabindex="-1"><a class="header-anchor" href="#_5-2-如何创建变量——赋值语句" aria-hidden="true">#</a> 5.2 如何创建变量——赋值语句</h3>
<p>代码运行顺序：从上到下，从右到左。</p>
<p>PS：最后一步才是赋值</p>
<p>代码实操：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Hello Python!!!我来啦！Skr～"</span><span class="token punctuation">)</span>

<span class="token comment"># x = 1</span>
<span class="token comment"># x = x + 10</span>
<span class="token comment"># print(x)</span>

<span class="token comment"># name1 = "lilei"</span>
<span class="token comment"># name2 = name1</span>
<span class="token comment"># print(name2)</span>


name1 <span class="token operator">=</span> <span class="token string">"lilei"</span>
name1 <span class="token operator">=</span> <span class="token string">"hanmeimei"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>代码格式化快捷键：Control + Alt + L</p>
</li>
<li>
<p><code v-pre>#</code> 是注释，快捷键：control + /</p>
</li>
</ul>
<h2 id="作业" tabindex="-1"><a class="header-anchor" href="#作业" aria-hidden="true">#</a> 作业</h2>
<ol>
<li>注册 GitHub 账号，注册地址：<a href="https://github.com/" target="_blank" rel="noopener noreferrer">https://github.com/<ExternalLinkIcon/></a>，把账号密码发给我来操作；</li>
<li>实操如下变量与值的创建并输出：
<ol>
<li>name、Austin</li>
<li>age、19</li>
<li>Dream、Teacher</li>
</ol>
</li>
<li>购买域名：<a href="https://domains.google.com/" target="_blank" rel="noopener noreferrer">https://domains.google.com/<ExternalLinkIcon/></a></li>
<li>文档编写软件：<a href="https://typora.io/" target="_blank" rel="noopener noreferrer">https://typora.io/<ExternalLinkIcon/></a></li>
<li>Nodejs、npm、yarn、git</li>
</ol>
<p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
<div class="custom-container info">
<p class="custom-container-title">AI悦创·编程一对一</p>
<p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p>
<p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</div>
</div></template>


