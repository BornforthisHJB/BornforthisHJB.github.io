import{_ as p}from"./gzh.b03adfd2.js";import{_ as t}from"./zsxq.77f6dc86.js";import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,d as s,b as l,e as u,r as i}from"./app.0aea74f7.js";const r="/assets/ba76d73736a5049aea77b7fa50e888fe.b4763380.jpg",k={},m=u('<p><img src="'+r+`" alt="img" loading="lazy"></p><p>你好，我是悦创。</p><p>前面的课程，我们讲解了 Python 语言的学习方法，并且带你了解了 Python 必知的常用工具——Jupyter。那么从这节课开始，我们将正式学习 Python 的具体知识。</p><p>对于每一门编程语言来说，数据结构都是其根基。了解掌握 Python 的基本数据结构，对于学好这门语言至关重要。今天我们就一起来学习，Python 中最常见的两种数据结构：列表（list）和元组（tuple）。</p><h2 id="列表和元组基础" tabindex="-1"><a class="header-anchor" href="#列表和元组基础" aria-hidden="true">#</a> 列表和元组基础</h2><p>首先，我们需要弄清楚最基本的概念，什么是列表和元组呢？</p><p>实际上，列表和元组，都是<strong>一个可以放置任意数据类型的有序集合。</strong></p><p>在绝大多数编程语言中，集合的数据类型必须一致。不过，对于 Python 的列表和元组来说，并无此要求：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>l <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">]</span> <span class="token comment"># 列表中同时含有 int 和 string 类型的元素</span>
l
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;world&#39;</span><span class="token punctuation">]</span>

tup <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;jason&#39;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span> <span class="token comment"># 元组中同时含有 int 和 string 类型的元素</span>
tup
<span class="token punctuation">(</span><span class="token string">&#39;jason&#39;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其次，我们必须掌握它们的区别。</p><ul><li><strong>列表是动态的</strong>，长度大小不固定，可以随意地增加、删减或者改变元素（mutable）。</li><li><strong>而元组是静态的</strong>，长度大小固定，无法增加删减或者改变（immutable）。</li></ul><p>下面的例子中，我们分别创建了一个列表与元组。你可以看到，对于列表，我们可以很轻松地让其最后一个元素，由 4 变为 40；但是，如果你对元组采取相同的操作，Python 就会报错，原因就是元组是不可变的。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>l <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
l<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">40</span> <span class="token comment"># 和很多语言类似，python 中索引同样从 0 开始，l[3] 表示访问列表的第四个元素</span>
l
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span>

tup <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
tup<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">40</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
TypeError<span class="token punctuation">:</span> <span class="token string">&#39;tuple&#39;</span> <span class="token builtin">object</span> does <span class="token keyword">not</span> support item assignment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可是，如果你想对已有的元组做任何&quot;改变&quot;，该怎么办呢？那就只能重新开辟一块内存，创建新的元组了。</p><p>比如下面的例子，我们想增加一个元素 5 给元组，实际上就是创建了一个新的元组，然后把原来两个元组的值依次填充进去。</p><p>而对于列表来说，由于其是动态的，我们只需简单地在列表末尾，加入对应元素就可以了。如下操作后，会修改原来列表中的元素，而不会创建新的列表。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tup <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
new_tup <span class="token operator">=</span> tup <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token punctuation">)</span> <span class="token comment"># 创建新的元组 new_tup，并依次填充原元组的值</span>
new _tup
<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>

l <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
l<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token comment"># 添加元素 5 到原列表的末尾</span>
l
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+p+'" alt="" loading="lazy"></p></details>',19),d={class:"custom-container info"},b=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),v=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),h=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),_={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,"方法二：微信：Jiabcdefh",-1),y=n("p",null,[n("img",{src:t,alt:"",loading:"lazy"})],-1);function f(x,P){const a=i("ExternalLinkIcon");return o(),c("div",null,[m,n("div",d,[b,v,h,n("p",null,[s("方法一："),n("a",_,[s("QQ"),l(a)])]),g]),y])}const A=e(k,[["render",f],["__file","03.html.vue"]]);export{A as default};
