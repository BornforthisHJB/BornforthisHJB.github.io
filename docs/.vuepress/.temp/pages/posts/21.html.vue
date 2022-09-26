<template><div><p>你好，我是悦创。推荐你先阅读此篇：<a href="https://bornforthis.cn/posts/22.html" target="_blank" rel="noopener noreferrer">一文讲清楚补码的本质<ExternalLinkIcon/></a></p>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<p>程序中的所有数在计算机内存中都是以二进制的形式储存的。位运算就是直接对整数在内存中的二进制位进行操作。巧妙的使用位运算可以大量减少运行开销，优化算法。</p>
<h2 id="运算符号" tabindex="-1"><a class="header-anchor" href="#运算符号" aria-hidden="true">#</a> 运算符号</h2>
<p><img src="@source/posts/21.assets/20210224215351129.jpg" alt="img" loading="lazy"></p>
<h2 id="按位与" tabindex="-1"><a class="header-anchor" href="#按位与" aria-hidden="true">#</a> 按位与（&amp;）</h2>
<p><strong>规则：</strong> 两个操作数对应位同为 1 时，结果为 1，其余全为 0。</p>
<p><img src="@source/posts/21.assets/20210224215442791.jpg" alt="img" loading="lazy"></p>
<h2 id="按位或" tabindex="-1"><a class="header-anchor" href="#按位或" aria-hidden="true">#</a> 按位或（|）</h2>
<p><strong>规则：</strong> 两个操作数对应位同为 0 时，结果为 0，其余全为 1。</p>
<p><img src="@source/posts/21.assets/20210224215537736.jpg" alt="img" loading="lazy"></p>
<h2 id="按位非" tabindex="-1"><a class="header-anchor" href="#按位非" aria-hidden="true">#</a> 按位非（~）</h2>
<p><strong>规则：</strong> 每个操作数对应位取反即可。</p>
<p><img src="@source/posts/21.assets/20210224215631428.jpg" alt="img" loading="lazy"></p>
<h2 id="按位异或" tabindex="-1"><a class="header-anchor" href="#按位异或" aria-hidden="true">#</a> 按位异或（^）</h2>
<p><strong>规则：</strong> 两个操作数对应位相同时，结果为 0，不同时，结果为 1。</p>
<p><img src="@source/posts/21.assets/20210224215716849.jpg" alt="img" loading="lazy"></p>
<h2 id="左位移" tabindex="-1"><a class="header-anchor" href="#左位移" aria-hidden="true">#</a> 左位移（&lt;&lt;）</h2>
<p><strong>规则：</strong> 将一个操作数的各二进制位全部左移若干位（左边的二进制位丢弃，右边补 0）。</p>
<p><img src="@source/posts/21.assets/20210224215757247.jpg" alt="img" loading="lazy"></p>
<h2 id="右位移" tabindex="-1"><a class="header-anchor" href="#右位移" aria-hidden="true">#</a> 右位移（&gt;&gt;）</h2>
<p><strong>规则：</strong> 将一个操作数的各二进制位全部右移若干位（右边的二进制位丢弃，正数左补 0，负数左补 1）。</p>
<p><img src="@source/posts/21.assets/20210224215842282.jpg" alt="img" loading="lazy"></p>
<h2 id="无符号右移" tabindex="-1"><a class="header-anchor" href="#无符号右移" aria-hidden="true">#</a> 无符号右移（&gt;&gt;&gt;）</h2>
<p><strong>规则：</strong> 将一个操作数的各二进制位全部右移若干位（右边的二进制位丢弃，右边补 0）。</p>
<p><img src="@source/posts/21.assets/20210224220028218.jpg" alt="img" loading="lazy"></p>
<ul>
<li>判断一个数 n 的奇偶性:
n &amp; 1 == 1 ? &quot;奇数&quot; : &quot;偶数&quot;;</li>
<li>取绝对值:
(a^(a&gt;&gt;31))-(a&gt;&gt;31)；
a&gt;&gt;31 取得 a 的符号，若 a 为正数，a&gt;&gt;31 等于0，a^0=a，不变；若 a 为负数, a&gt;&gt;31 等于-1 ，a^-1 翻转每一位。</li>
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


