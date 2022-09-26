<template><div><h2 id="sqlitestudio-介绍" tabindex="-1"><a class="header-anchor" href="#sqlitestudio-介绍" aria-hidden="true">#</a> sqlitestudio 介绍</h2>
<p>本节内容的目的，是教大家如何在非代码的情况下，创建 sqlite3 数据库文件和表格编辑操作。</p>
<p>既然不写代码，就肯定需要借助软件来操作。本节课对应的源码中，准备好了 windows、macos、linux 三个系统的 sqlitestudio 软件，如下图：</p>
<p><img src="@source/column/pyauto/auto_base09.assets/image-20220717104603622.png" alt="image-20220717104603622" loading="lazy"></p>
<blockquote>
<p>windows 使用 zip；macos 使用 dmg；linux 使用 tar.xz；</p>
</blockquote>
<p>sqlitestudio 是一款绿色软件，安装你的操作系统所对应的 sqlitestudio 软件，然后执行，就可以得到启动界面。</p>
<p><img src="@source/column/pyauto/auto_base09.assets/image-20220717104952779.png" alt="image-20220717104952779" loading="lazy"></p>
<h2 id="新建-sqlite-数据库文件" tabindex="-1"><a class="header-anchor" href="#新建-sqlite-数据库文件" aria-hidden="true">#</a> 新建  sqlite 数据库文件</h2>
<p>点击左上角的数据库，选择添加数据库，则会弹框，让你选择某个数据库文件，或者创建一个新的 sqlite 文件</p>
<p><img src="@source/column/pyauto/auto_base09.assets/image-20220717120252540.png" alt="image-20220717120252540" loading="lazy"></p>
<p>点击黄色的文件夹，是指打开某个存在的 sqlite 文件。</p>
<p>点击 <code v-pre>绿色的+</code> ，是新建一个 sqlite 文件，并且你也需要指定存储的具体位置。</p>
<p>选择在三个 sqlitestudio 安装包旁边，新建一个名为 <code v-pre>first.db</code> 的文件，如下截图：</p>
<p><img src="@source/column/pyauto/auto_base09.assets/image-20220717120453407.png" alt="image-20220717120453407" loading="lazy"></p>
<p>并且，文件也有对应的生成。</p>
<p><img src="@source/column/pyauto/auto_base09.assets/image-20220717133154926.png" alt="image-20220717133154926" loading="lazy"></p>
<h2 id="新增数据" tabindex="-1"><a class="header-anchor" href="#新增数据" aria-hidden="true">#</a> 新增数据</h2>
<p>回到 sqlitestudio 软件界面，打开刚新建的 <code v-pre>first.db</code> ，里面什么都没有，表格是空的，现在来新建一个表格。</p>
<p>鼠标右键点击 Tables，然后选择新建表格，在新出的界面中，写表格名、字段名和字段类型，如下图：</p>
<p><strong>方法一：</strong></p>
<p><img src="@source/column/pyauto/auto_base09.assets/image-20220717133809389.png" alt="image-20220717133809389" loading="lazy"></p>
<p><strong>方法二：</strong></p>
<p><img src="@source/column/pyauto/auto_base09.assets/image-20220717133940556.png" alt="image-20220717133940556" loading="lazy"></p>
<hr>
<p><img src="@source/column/pyauto/auto_base09.assets/image-20220717134958299.png" alt="image-20220717134958299" loading="lazy"></p>
<p><img src="@source/column/pyauto/auto_base09.assets/image-20220717135817135.png" alt="image-20220717135817135" loading="lazy"></p>
<p>Table Name 表格名，输入具体名称。最上方框中的那个按钮，是增列字段的按钮，点击按钮弹出中间的字段信息，输入字段名、类型、大小等。</p>
<p>这里写了id title content author 四个字段信息，然后点击绿色的勾，保存表格即可。</p>
<p><img src="@source/column/pyauto/auto_base09.assets/image-20220717141101312.png" alt="image-20220717141101312" loading="lazy"></p>
<p><img src="@source/column/pyauto/auto_base09.assets/image-20220717141230058.png" alt="image-20220717141230058" loading="lazy"></p>
<p>保存了文件，重新刷新页面，就可以查看数据栏，如下：</p>
<p><img src="@source/column/pyauto/auto_base09.assets/image-20220717141304198.png" alt="image-20220717141304198" loading="lazy"></p>
<p><img src="@source/column/pyauto/auto_base09.assets/image-20220717141702850.png" alt="image-20220717141702850" loading="lazy"></p>
<p>点击<code v-pre>绿色的+</code>号，然后增加几条数据，方便我们下节课的代码练习。图中有三条。</p>
<p>sqlitestudio 也要保留，方便我们下节课，查看代码练习的数据变化结果。</p>
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


