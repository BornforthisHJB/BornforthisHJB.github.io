<template><div><p>你好，我是悦创。</p>
<p>本来一直打开 terminal，会直接进入对应的虚拟环境，直到有一天更新  pycharm 后，发现打开 terminal 后直接进入了 base 环境，每次都要手动 activate 一下，比较麻烦仔细观察才发现，terminal 使用了 windows 的powershell，如下图所示：</p>
<p><img src="@source/blog/2022/11.assets/bdb1b16c730c4e93945d9cc61a6613b2.png" alt="在这里插入图片描述" loading="lazy"></p>
<h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法：</h2>
<p>Settings --&gt; Tools --&gt; Terminal --&gt; Shell Path，<code v-pre>将 powershell 修改为 cmd.exe</code>，如下图所示：</p>
<p><img src="@source/blog/2022/11.assets/126f695841a74022b90db7f6a1ab8abf.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>修改 shell 过后，可以看到使用的是 windows 的 cmd shell ，并且会自动跳转到虚拟环境</p>
<p><img src="@source/blog/2022/11.assets/3a3a48dcdec94c768571dc41d04bbd6f.png" alt="在这里插入图片描述" loading="lazy"></p>
<p><img src="@source/blog/2022/11.assets/25e21e53cba04a56885c4f84319f641b.png" alt="在这里插入图片描述" loading="lazy"></p>
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


