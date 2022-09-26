<template><div><nav class="table-of-contents"><ul><li><router-link to="#_0-简介">0. 简介</router-link></li><li><router-link to="#_1-变量、运算符与数据类型">1. 变量、运算符与数据类型</router-link><ul><li><router-link to="#_1-1-注释">1.1 注释</router-link></li></ul></li></ul></nav>
<h2 id="_0-简介" tabindex="-1"><a class="header-anchor" href="#_0-简介" aria-hidden="true">#</a> 0. 简介</h2>
<p>Python 是一种通用编程语言，其在科学计算和机器学习领域具有广泛的应用。如果我们打算利用 Python 来执行机器学习，那么对 Python 有一些基本的了解就是至关重要的。本 Python 入门系列体验就是为这样的初学者精心准备的。</p>
<p>AI悦创官方为大家准备知识星球，在学习过程中，大家有任何教程内容或者平台使用问题都可以在知识星球内提出，扫码即可加入：</p>
<p><img src="/zsxq.jpg" alt="" loading="lazy"></p>
<p>本实验包括以下内容：</p>
<ul>
<li>变量、运算符与数据类型
<ul>
<li>注释</li>
<li>运算符</li>
<li>变量和赋值</li>
<li>数据类型与转换</li>
<li>print() 函数</li>
</ul>
</li>
<li>位运算
<ul>
<li>原码、反码和补码</li>
<li>按位非操作 ~</li>
<li>按位与操作 &amp;</li>
<li>按位或操作 |</li>
<li>按位异或操作 ^</li>
<li>按位左移操作 &lt;&lt;</li>
<li>按位右移操作 &gt;&gt;</li>
<li>利用位运算实现快速计算</li>
<li>利用位运算实现整数集合</li>
</ul>
</li>
<li>条件语句
<ul>
<li>if 语句</li>
<li>if - else 语句</li>
<li>if - elif - else 语句</li>
<li>assert 关键词</li>
</ul>
</li>
<li>循环语句
<ul>
<li>while 循环</li>
<li>while - else 循环</li>
<li>for 循环</li>
<li>for - else 循环</li>
<li>range() 函数</li>
<li>enumerate() 函数</li>
<li>break 语句</li>
<li>continue 语句</li>
<li>pass 语句</li>
<li>推导式</li>
</ul>
</li>
<li>异常处理
<ul>
<li>Python 标准异常总结</li>
<li>Python 标准警告总结</li>
<li>try - except 语句</li>
<li>try - except - finally 语句</li>
<li>try - except - else 语句</li>
<li>raise 语句</li>
</ul>
</li>
</ul>
<h2 id="_1-变量、运算符与数据类型" tabindex="-1"><a class="header-anchor" href="#_1-变量、运算符与数据类型" aria-hidden="true">#</a> 1. 变量、运算符与数据类型</h2>
<h3 id="_1-1-注释" tabindex="-1"><a class="header-anchor" href="#_1-1-注释" aria-hidden="true">#</a> 1.1 注释</h3>
<ul>
<li>在 Python 中，<code v-pre>#</code> 表示注释，作用于整行。</li>
</ul>
<h4 id="_1-1-1【例子】单行注释" tabindex="-1"><a class="header-anchor" href="#_1-1-1【例子】单行注释" aria-hidden="true">#</a> 1.1.1【例子】单行注释</h4>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># 这是一个注释</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Hello world"</span><span class="token punctuation">)</span>

<span class="token comment"># Hello world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>Hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li><code v-pre>''' '''</code> 或者 <code v-pre>&quot;&quot;&quot; &quot;&quot;&quot;</code> 表示区间注释，在三引号之间的所有内容被注释</li>
</ul>
<h4 id="_1-1-2【例子】多行注释" tabindex="-1"><a class="header-anchor" href="#_1-1-2【例子】多行注释" aria-hidden="true">#</a> 1.1.2【例子】多行注释</h4>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token triple-quoted-string string">'''
这是多行注释，用三个单引号
这是多行注释，用三个单引号
这是多行注释，用三个单引号
'''</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Hello china"</span><span class="token punctuation">)</span> 
<span class="token comment"># Hello china</span>

<span class="token triple-quoted-string string">"""
这是多行注释，用三个双引号
这是多行注释，用三个双引号 
这是多行注释，用三个双引号
"""</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"hello china"</span><span class="token punctuation">)</span> 
<span class="token comment"># hello china</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>Hello china
hello china
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-1-3【我是测试题1】请在下方代码块中打印-print-出-hello-你的姓名" tabindex="-1"><a class="header-anchor" href="#_1-1-3【我是测试题1】请在下方代码块中打印-print-出-hello-你的姓名" aria-hidden="true">#</a> 1.1.3【我是测试题1】请在下方代码块中打印 (print) 出 hello+你的姓名</h4>
<p>如：print(&quot;hello 老表&quot;)</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># 写下你的答案</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
<details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary>
<p><img src="/gzh.jpg" alt="" loading="lazy"></p>
</details>
<div class="custom-container info">
<p class="custom-container-title">AI悦创·编程一对一</p>
<p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发，华为 Python 机试」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p>
<p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</div>
<p><img src="/zsxq.jpg" alt="" loading="lazy"></p>
</div></template>


