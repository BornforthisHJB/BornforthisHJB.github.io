<template><div><p>你好，我是悦创。</p>
<p>以下是一对一学员的需求：</p>
<p><img src="@source/blog/2022/07.assets/915b1e19ec4d406f90b089f9a91b28cb.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>开整！</p>
<h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1>
<p>讲一下在 Python 中写好了一个脚本之后，怎么自动双击一个程序自动就跑起来。</p>
<p>以及，怎么在 Windows 10 中设计定期定时触发并跑脚本。</p>
<h1 id="环境介绍" tabindex="-1"><a class="header-anchor" href="#环境介绍" aria-hidden="true">#</a> 环境介绍</h1>
<p>系统环境：Windows 10</p>
<p>Python版本：Python 3.8</p>
<p>必备包：无</p>
<h2 id="运行-python-脚本-bat-文件" tabindex="-1"><a class="header-anchor" href="#运行-python-脚本-bat-文件" aria-hidden="true">#</a> 运行 Python 脚本：.bat 文件</h2>
<p>在 Windows 中，<code v-pre>.bat</code> 文件是批处理文件，是与 Linux 中 <code v-pre>.sh</code>（shell）文件很像的东西。</p>
<p>如果，我们想在 Windows 中运行一个 Python 脚本，我们可以通过 CMD ，首先进入 python 文件所在的目录，之后运行。</p>
<p>但是这样很麻烦，每次都要打开 CMD，进入文件夹，运行文件。</p>
<p>所以，我们为了不每次都重复输入，建议把这些代码统一写在一个 txt 文件中，写完之后只要把 <code v-pre>.txt</code> 文件的后缀改为 <code v-pre>.bat</code> ，然后双击运行就行啦。</p>
<h2 id="举例" tabindex="-1"><a class="header-anchor" href="#举例" aria-hidden="true">#</a> 举例：</h2>
<p>假设我们在 <code v-pre>cd D:\Curriculum-development\AI悦创编程一对一\Python 办公自动化\Tester_Coder</code>目录中有一个名为 <code v-pre>demo.py</code> 的脚本。</p>
<p>我们希望能有一个类似 exe 一样的东西，每次一双击，自动就会跑出结果。</p>
<p>那么，我们可以进行下面几个步骤：</p>
<p>在任意文件夹中，创建一个记事本文件（后缀 <code v-pre>.txt</code>），打开文件</p>
<p>在文件夹中输入如下内容：(第一句是用来切换文件夹路径的，第二句是用来运行 python 脚本的)</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>C<span class="token punctuation">:</span>\Users\clela\Desktop\demo
python demo<span class="token punctuation">.</span>py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>保存退出，将记事本的后缀由 <code v-pre>.txt</code> 改为 <code v-pre>.bat</code></p>
<p>这时，双击 <code v-pre>.bat</code> 文件，就会发现，自己跑 Python 的结果啦~</p>
<h2 id="定时在-windows-中触发-bat-文件" tabindex="-1"><a class="header-anchor" href="#定时在-windows-中触发-bat-文件" aria-hidden="true">#</a> 定时在 Windows 中触发 .bat 文件</h2>
<p>在 Windows 中，依照如下步骤触发作业：</p>
<ol>
<li>
<p>右键单击“我的电脑”</p>
</li>
<li>
<p>选择 “管理”，弹出如下窗口</p>
</li>
</ol>
<p><img src="@source/blog/2022/07.assets/eb34af9712874fcb94b6f09fd090d484.png" alt="在这里插入图片描述" loading="lazy"></p>
<p><img src="@source/blog/2022/07.assets/5d41cc5bb03848cbb14b8b72bc89ddc1.png" alt="在这里插入图片描述" loading="lazy"></p>
<ol start="3">
<li>在右边Action一栏点击“Create Basic Task”，创建一个基本任务</li>
</ol>
<p><img src="@source/blog/2022/07.assets/8a8304694ee24169a8d816b0a3d34954.png" alt="在这里插入图片描述" loading="lazy"></p>
<ol start="4">
<li>填写任务名称与描述，随便写就好了。单击下一步</li>
</ol>
<p><img src="@source/blog/2022/07.assets/91bc691500734cdeb149bea5dd6d6dd5.png" alt="在这里插入图片描述" loading="lazy"></p>
<p><img src="@source/blog/2022/07.assets/ba740d7e92f14efa9a8d05717f20e51a.png" alt="在这里插入图片描述" loading="lazy"></p>
<p><img src="@source/blog/2022/07.assets/04a62a22a3144c8fbeeb16385dac8d4e.png" alt="在这里插入图片描述" loading="lazy"></p>
<p><img src="@source/blog/2022/07.assets/006f7a6c8efe4966b45ef8f704ef8364.png" alt="在这里插入图片描述" loading="lazy"></p>
<p><img src="@source/blog/2022/07.assets/79adf27cb52d4918accb1b9e093262de.png" alt="在这里插入图片描述" loading="lazy"></p>
<p><img src="@source/blog/2022/07.assets/bb2b51d15c534cd1b0e9f18907514b6a.png" alt="在这里插入图片描述" loading="lazy"></p>
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


