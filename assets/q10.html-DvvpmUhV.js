import{_ as o,a}from"./784dde09ac8178ddcf851290a9d2369d-C_zl_k-4.js";import{_ as l}from"./gzh-DnOBNg6W.js";import{_ as n}from"./zsxq-BcdwOI-_.js";import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as p,o as r}from"./app-BFJczFUY.js";const i={};function c(F,s){return r(),e("div",null,s[0]||(s[0]=[p('<ol><li>Python 中的可变数据类型有___________，不可变数据类型有___________。</li><li>表达式 3 and not 5 的值为___________，不可变数据类型有___________。</li><li><code>input()</code> 函数的返回值是，不可变数据类型有___________类型。</li><li>下面程序的执行结果是___________。</li></ol><figure><img src="'+o+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>只要判断条件是非零数值、非空字符串、非空 list 等，就判断为 True，否则为 False。</li></ol><p>A. √</p><p>B. X</p><ol start="6"><li>Python 字符串方法 <code>replace()</code> 对字符串进行原地修改。</li></ol><p>A. √</p><p>B. X</p><ol start="7"><li>可以使用 format 函数对字符串进行格式化。</li></ol><p>A. √</p><p>B. X</p><ol start="8"><li>当以指定“键”为下标给字典对象赋值时，若该“键”存在则表示修改该“键”对应的“值”，若不存在则表示为字典对象添加一个新的“键-值对”。</li></ol><p>A. √</p><p>B. X</p><ol start="9"><li>Python 内置的字典 dict 中元素是按添加的顺序依次进行存储的。</li></ol><p>A. √</p><p>B. X</p><ol start="10"><li>下面的代码是否能够正确运行，若不能请解释原因；若能，请分析其执行结果。</li></ol><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">x </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;font-style:italic;"> list</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;">range</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">20</span><span style="color:#F8F8F2;">))</span></span>
<span class="line"><span style="color:#F92672;">for</span><span style="color:#F8F8F2;"> i </span><span style="color:#F92672;">in</span><span style="color:#66D9EF;"> range</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;">len</span><span style="color:#F8F8F2;">(x)):</span></span>
<span class="line"><span style="color:#F92672;">    del</span><span style="color:#F8F8F2;"> x[i]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="11"><li>请写出以下代码的执行结果：</li></ol><figure><img src="`+a+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="12"><li>编写程序: 输入长方形的长和宽,计算长方形的面积.</li><li>输入一个时间(以“小时:分钟:秒”的格式)，输出该时间经过 5 分 30 秒后的时间。</li><li>斐波那契数列为<code>1,2,3,5,8,13,21.....</code>根据这样的规律，编程求出 400 万以内最大的斐波那契数，并求出他是第几个斐波那契数。</li><li>要求写一段代码，实现两个字典的相加，不同的 key 对应的值保留，相同的 key 对应的值相加后保留。</li></ol><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">dicta </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span><span style="color:#E6DB74;">&quot;a&quot;</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&quot;b&quot;</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">2</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&quot;c&quot;</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&quot;d&quot;</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">4</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&quot;f&quot;</span><span style="color:#F8F8F2;">:</span><span style="color:#E6DB74;">&quot;hello&quot;</span><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#F8F8F2;">dictb </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span><span style="color:#E6DB74;">&quot;b&quot;</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&quot;d&quot;</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">5</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&quot;e&quot;</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">7</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&quot;m&quot;</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">9</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&quot;k&quot;</span><span style="color:#F8F8F2;">:</span><span style="color:#E6DB74;">&quot;world&quot;</span><span style="color:#F8F8F2;">}</span></span>
<span class="line"><span style="color:#88846F;"># 如上示例得到结果为：</span></span>
<span class="line"><span style="color:#F8F8F2;">dictc </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> {</span><span style="color:#E6DB74;">&quot;a&quot;</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&quot;b&quot;</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">5</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&quot;c&quot;</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&quot;d&quot;</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">9</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&quot;e&quot;</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">7</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&quot;m&quot;</span><span style="color:#F8F8F2;">:</span><span style="color:#AE81FF;">9</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&quot;f&quot;</span><span style="color:#F8F8F2;">:</span><span style="color:#E6DB74;">&quot;hello&quot;</span><span style="color:#F8F8F2;">,</span><span style="color:#E6DB74;">&quot;k&quot;</span><span style="color:#F8F8F2;">:</span><span style="color:#E6DB74;">&quot;world&quot;</span><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="hint-container details"><summary>公众号：AI悦创【二维码】</summary><figure><img src="`+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><div class="hint-container info"><p class="hint-container-title">AI悦创·编程一对一</p><p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p><p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p><p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ</a></p><p>方法二：微信：Jiabcdefh</p></div><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',27)]))}const q=t(i,[["render",c],["__file","q10.html.vue"]]),h=JSON.parse('{"path":"/Python/basequestion/q10.html","title":"10-Python-基础课程结业测试","lang":"zh-CN","frontmatter":{"title":"10-Python-基础课程结业测试","date":"2023-04-02T12:43:42.000Z","author":"AI悦创","isOriginal":true,"category":"Python 私教练习题【基础】","tag":["Python 基础练习题"],"icon":"python","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":true,"backToTop":true,"toc":true,"feed":false,"seo":false,"head":[]},"headers":[],"git":{"createdTime":1704501196000,"updatedTime":1704501196000,"contributors":[{"name":"AndersonHJB","email":"cleland1432803776@icloud.com","commits":1}]},"readingTime":{"minutes":2.77,"words":831},"filePathRelative":"Python/basequestion/q10.md","localizedDate":"2023年4月2日","copyright":{"author":"AI悦创"}}');export{q as comp,h as data};
