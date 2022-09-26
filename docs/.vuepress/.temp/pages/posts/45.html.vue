<template><div><p>你好，我是悦创。</p>
<blockquote>
<p>8421 转换法是一个计算机的术语，可以轻松实现各进制之间的转换。</p>
</blockquote>
<table>
<thead>
<tr>
<th>中文名</th>
<th>释义</th>
<th>类别</th>
</tr>
</thead>
<tbody>
<tr>
<td>8421 转换法</td>
<td>可以轻松实现各进制之间的转换</td>
<td>计算机术语</td>
</tr>
</tbody>
</table>
<h2 id="一、10-进制转二进制" tabindex="-1"><a class="header-anchor" href="#一、10-进制转二进制" aria-hidden="true">#</a> 一、10 进制转二进制</h2>
<h3 id="_1-例-10-进制-10-转换成二进制" tabindex="-1"><a class="header-anchor" href="#_1-例-10-进制-10-转换成二进制" aria-hidden="true">#</a> 1. 例：10 进制 10 转换成二进制</h3>
<p>首先按照 8421 来分解：10=2+8，用 8421 转换法，对应数字下面写 1，没有的写 0，得到：</p>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>8　4　2　1
1　0　1　0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说 10 进制的转换成 2 进制等于 1010，此时或许有人会问，如果这个数大于 15(8+4+2+1) 咋办？很简单，在前面添加个 16，如果再大于 31，就再在前面加个 32</p>
<h3 id="_2-例-10-进制-21-转换成二进制" tabindex="-1"><a class="header-anchor" href="#_2-例-10-进制-21-转换成二进制" aria-hidden="true">#</a> 2. 例：10 进制 21 转换成二进制</h3>
<p>21=16+4+1，接下来，老规矩</p>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>16　8　4　2　1
1　 0　1　0　1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-例-10-进制-35-转换成二进制" tabindex="-1"><a class="header-anchor" href="#_3-例-10-进制-35-转换成二进制" aria-hidden="true">#</a> 3. 例：10 进制 35 转换成二进制</h3>
<p>35=32+2+1</p>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>32 16 8 4 2 1
1	0 0 0 1 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、-二进制转-10-进制" tabindex="-1"><a class="header-anchor" href="#二、-二进制转-10-进制" aria-hidden="true">#</a> 二、 二进制转 10 进制</h2>
<h3 id="_1-例-2-进制-1011-转换成十进制" tabindex="-1"><a class="header-anchor" href="#_1-例-2-进制-1011-转换成十进制" aria-hidden="true">#</a> 1. 例：2 进制 1011 转换成十进制</h3>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>8 4 2 1
1 0 1 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>8+2+1=11(D)</code></p>
<p><strong>二进制 1011 就是 10 进制的 11 （其实是上面方法的逆过程!）</strong></p>
<h2 id="三、10-进制转-16-进制" tabindex="-1"><a class="header-anchor" href="#三、10-进制转-16-进制" aria-hidden="true">#</a> 三、10 进制转 16 进制</h2>
<h3 id="_1-例-10-进制-52-转换成-16-进制" tabindex="-1"><a class="header-anchor" href="#_1-例-10-进制-52-转换成-16-进制" aria-hidden="true">#</a> 1. 例：10 进制 52 转换成 16 进制</h3>
<p>52=32+16+4</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>32  16   8  4  2  1
1   1    0  1  0  0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>从右到左 4 位 4 位的进行分割，位数不足的在左边添 0</strong></p>
<p>得到 0011 0100</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>8 4 2 1   8 4 2 1
0 0 1 1   0 1 0 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>(1+2)*10+4*1=34(H)</code>-&gt;H 代表十六进制</p>
<h2 id="四、10-进制转-8-进制" tabindex="-1"><a class="header-anchor" href="#四、10-进制转-8-进制" aria-hidden="true">#</a> 四、10 进制转 8 进制</h2>
<h3 id="_1-例-10-进制-52-转换成-8-进制-421-码" tabindex="-1"><a class="header-anchor" href="#_1-例-10-进制-52-转换成-8-进制-421-码" aria-hidden="true">#</a> 1. 例：10 进制 52 转换成 8 进制（421 码)</h3>
<p>52=32+16+4</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>32  16  8  4  2  1
1    1  0  1  0  0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>从右到左 3 位 3 位的进行分割，位数不足的在左边添 0</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>4 2 1  4 2 1
1 1 0  1 0 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>(4+2)*10+1*4=64(O)</code></p>
<h2 id="五、16-进制转-8-进制" tabindex="-1"><a class="header-anchor" href="#五、16-进制转-8-进制" aria-hidden="true">#</a> 五、16 进制转 8 进制</h2>
<h3 id="_1-例-16-进制-2a-转换成-8-进制" tabindex="-1"><a class="header-anchor" href="#_1-例-16-进制-2a-转换成-8-进制" aria-hidden="true">#</a> 1. 例：16 进制 2A 转换成 8 进制</h3>
<p>把每一位进行8421分解：</p>
<p>2=0010（B）</p>
<p>A=1010（B）</p>
<p>从右到左3位3位的进行分割，位数不足的在左边添0</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>4 2 1  4 2 1  4 2 1
0 0 0  1 0 1  0 1 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>(4+1)*10+2=52（O)</code></p>
<h3 id="六、8-进制转-16-进制" tabindex="-1"><a class="header-anchor" href="#六、8-进制转-16-进制" aria-hidden="true">#</a> 六、8 进制转 16 进制</h3>
<h3 id="_1-例-8-进制-64-转换成-16-进制" tabindex="-1"><a class="header-anchor" href="#_1-例-8-进制-64-转换成-16-进制" aria-hidden="true">#</a> 1. 例：8 进制 64 转换成 16 进制</h3>
<p>6=110（B）</p>
<p>4=100（B）</p>
<p>从右到左4位4位的进行分割，位数不足的在左边添0</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>8 4 2 1  8 4 2 1
0 0 1 1  0 1 0 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>（2+1）*10+4=34(H)</code></p>
<h2 id="学术论文" tabindex="-1"><a class="header-anchor" href="#学术论文" aria-hidden="true">#</a> 学术论文</h2>
<ul>
<li><a href="https://xueshu.baidu.com/usercenter/paper/show?paperid=b4177899dc7bb4ae79bf98f6a42f966d&amp;tn=SE_baiduxueshu_c1gjeupa&amp;ie=utf-8&amp;site=baike" target="_blank" rel="noopener noreferrer">曾美华.  使用&quot;8421&quot;法轻松进行数制转换． <ExternalLinkIcon/></a>《 科学技术创新 》 ， 2015</li>
<li><a href="https://xueshu.baidu.com/usercenter/paper/show?paperid=67bb9cde76c9c5d9401b4afb91d8d933&amp;tn=SE_baiduxueshu_c1gjeupa&amp;ie=utf-8&amp;site=baike" target="_blank" rel="noopener noreferrer">李晓鹏.  二—十进行制转换中的8421方法初探． <ExternalLinkIcon/></a>《 VIP 》 ， 1999</li>
<li><a href="https://xueshu.baidu.com/usercenter/paper/show?paperid=1e1d08u0sp1p0r200n7208701f664954&amp;tn=SE_baiduxueshu_c1gjeupa&amp;ie=utf-8&amp;site=baike" target="_blank" rel="noopener noreferrer">谢承超，陈金发，郑宁敏等.  用于拼舱型预制舱的电缆转换箱及其接线方法． <ExternalLinkIcon/></a>年</li>
<li><a href="https://xueshu.baidu.com/usercenter/paper/show?paperid=45677549978bad3233f7b884b76021f6&amp;tn=SE_baiduxueshu_c1gjeupa&amp;ie=utf-8&amp;site=baike" target="_blank" rel="noopener noreferrer">李晓鹏.  二─十进制转换中的8421方法初探． <ExternalLinkIcon/></a>《 CNKI 》 ， 1999</li>
</ul>
<PDF url="/pdf/03-使用8421.pdf" /><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
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


