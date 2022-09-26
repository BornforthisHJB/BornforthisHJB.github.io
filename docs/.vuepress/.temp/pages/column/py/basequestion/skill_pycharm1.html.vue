<template><div><h2 id="_1-按照下面路径以此打开" tabindex="-1"><a class="header-anchor" href="#_1-按照下面路径以此打开" aria-hidden="true">#</a> 1. 按照下面路径以此打开</h2>
<p><img src="@source/column/py/basequestion/skill_pycharm1.assets/image-20220520161417800.png" alt="image-20220520161417800" loading="lazy"></p>
<h2 id="_2-设置相关代码" tabindex="-1"><a class="header-anchor" href="#_2-设置相关代码" aria-hidden="true">#</a> 2. 设置相关代码</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment">##!/usr/bin/python3</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : ${DATE} ${TIME}</span>
<span class="token comment"># @Author  : AI悦创</span>
<span class="token comment"># @FileName: ${NAME}.py</span>
<span class="token comment"># @Software: ${PRODUCT_NAME}</span>
<span class="token comment"># @Blog    ：https://bornforthis.cn/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设定的规则说明如下：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>（a）shebang行

<span class="token comment">#!/usr/bin/python3</span>

（b）预定义的变量要扩展为格式为$ <span class="token punctuation">{</span><span class="token operator">&lt;</span>variable_name<span class="token operator">></span><span class="token punctuation">}</span>的相应值。

可用的预定义文件模板变量为：

$ <span class="token punctuation">{</span>PROJECT_NAME<span class="token punctuation">}</span> <span class="token operator">-</span> 当前项目的名称。

$ <span class="token punctuation">{</span>NAME<span class="token punctuation">}</span> <span class="token operator">-</span> 在文件创建过程中在“新建文件”对话框中指定的新文件的名称。

$ <span class="token punctuation">{</span>USER<span class="token punctuation">}</span> <span class="token operator">-</span> 当前用户的登录名。

$ <span class="token punctuation">{</span>DATE<span class="token punctuation">}</span> <span class="token operator">-</span> 当前的系统日期。

$ <span class="token punctuation">{</span>TIME<span class="token punctuation">}</span> <span class="token operator">-</span> 当前系统时间。

$ <span class="token punctuation">{</span>YEAR<span class="token punctuation">}</span> <span class="token operator">-</span> 今年。

$ <span class="token punctuation">{</span>MONTH<span class="token punctuation">}</span> <span class="token operator">-</span> 当月。

$ <span class="token punctuation">{</span>DAY<span class="token punctuation">}</span> <span class="token operator">-</span> 当月的当天。

$ <span class="token punctuation">{</span>HOUR<span class="token punctuation">}</span> <span class="token operator">-</span> 目前的小时。

$ <span class="token punctuation">{</span>MINUTE<span class="token punctuation">}</span> <span class="token operator">-</span> 当前分钟。

$ <span class="token punctuation">{</span>PRODUCT_NAME<span class="token punctuation">}</span> <span class="token operator">-</span> 将在其中创建文件的IDE的名称。

$ <span class="token punctuation">{</span>MONTH_NAME_SHORT<span class="token punctuation">}</span> <span class="token operator">-</span> 月份名称的前<span class="token number">3</span>个字母。 示例：<span class="token number">1</span>月，<span class="token number">2</span>月等

$ <span class="token punctuation">{</span>MONTH_NAME_FULL<span class="token punctuation">}</span> <span class="token operator">-</span> 一个月的全名。 示例：<span class="token number">1</span>月，<span class="token number">2</span>月等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
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


