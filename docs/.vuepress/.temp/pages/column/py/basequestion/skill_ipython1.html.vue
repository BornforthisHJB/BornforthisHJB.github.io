<template><div><p>你好，我是悦创。</p>
<p>经常给一对一学员上课的时候，会用到 IPython 来演示代码，毕竟 IPython 不用不知道，一用根本停不下来。我都不想用 Pycharm 来调试代码了。</p>
<p>但是，用了这么久，一直惯性思维回答编程一对一学员： <strong>IPython 的优点是我刚刚说的这些，但是就是代码保存不了。</strong> 很多人问我，我也一直是这个想法并且做的非常彻底去回答。</p>
<p>但是，今天一个学员，学计算机专业的在伯克利，上课后问我：老师，IPython 真的不能保留「保存」代码？ 我说是的！非常肯定的回答，一直都是这个回答的不会有错！但是，当听见这句话的时候，我惊呆了：<strong>从来如此就是对的吗？</strong> 那一瞬间，好像有什么东西破碎一般，所有自我的矇昧体现了出来。我想起了柴静的《看见》中的一句话：<strong>要想“看见”，就要从蒙昧中睁开眼来。这才是最困难的地方，因为蒙昧就是我自身，像石头一样成了心里的坝。</strong> 然后我就去找了一下，然后就有了下面的小笔记： <strong>回到上面的问题, 两种办法解决：</strong></p>
<ol>
<li>用 <code v-pre>%hist</code> 保存后把 <code v-pre>%</code> 开头的删掉再执行。</li>
</ol>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>Input<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span><span class="token operator">%</span>hist <span class="token operator">-</span>f filename<span class="token punctuation">.</span>py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>用 <code v-pre>%logstart</code> 和 <code v-pre>%logstop</code> 。它会把你所用的 <code v-pre>%</code> 命令对应的的 <code v-pre>Python</code> 代码（如下面的 magic…）。</li>
</ol>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token operator">%</span>logstart <span class="token operator">/</span>tmp<span class="token operator">/</span>test_log<span class="token punctuation">.</span>py
Activating auto<span class="token operator">-</span>logging<span class="token punctuation">.</span> Current session state plus future <span class="token builtin">input</span> saved<span class="token punctuation">.</span>
Filename       <span class="token punctuation">:</span> <span class="token operator">/</span>tmp<span class="token operator">/</span>test_log<span class="token punctuation">.</span>py
Mode           <span class="token punctuation">:</span> backup
Output logging <span class="token punctuation">:</span> <span class="token boolean">False</span>
Raw <span class="token builtin">input</span> log  <span class="token punctuation">:</span> <span class="token boolean">False</span>
Timestamping   <span class="token punctuation">:</span> <span class="token boolean">False</span>
State          <span class="token punctuation">:</span> active
 In <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a <span class="token operator">=</span> <span class="token number">10</span>
 In <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">:</span> b <span class="token operator">=</span> a<span class="token operator">*</span>a
 In <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token operator">%</span>who
a        b
 In <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token operator">%</span>logstop
 In <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">:</span> !cat <span class="token operator">/</span>tmp<span class="token operator">/</span>test_log<span class="token punctuation">.</span>py
<span class="token comment"># IPython log file</span>

357x46
<span class="token number">357</span><span class="token operator">*</span><span class="token number">46</span>
<span class="token number">54</span><span class="token operator">*</span><span class="token number">32</span>
<span class="token number">53</span><span class="token operator">*</span><span class="token number">42</span>
<span class="token number">52</span><span class="token operator">*</span><span class="token number">43</span>
<span class="token number">532</span><span class="token operator">*</span><span class="token number">4</span>
get_ipython<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>magic<span class="token punctuation">(</span><span class="token string">u'logstart /tmp/test_log.py'</span><span class="token punctuation">)</span>
a <span class="token operator">=</span> <span class="token number">10</span>
b <span class="token operator">=</span> a<span class="token operator">*</span>a
get_ipython<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>magic<span class="token punctuation">(</span><span class="token string">u'who'</span><span class="token punctuation">)</span>
get_ipython<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>magic<span class="token punctuation">(</span><span class="token string">u'logstop'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>例如，对于你的用例，有 <a href="http://ipython.readthedocs.io/en/stable/interactive/magics.html#magic-save" target="_blank" rel="noopener noreferrer"><code v-pre>%save</code> magic command<ExternalLinkIcon/></a> 你只需输入<code v-pre>%save my_useful_session 10-20 23</code>保存输入行 10 至 20 和 23 到 <code v-pre>my_useful_session.py</code></li>
</ol>
<hr>
<p>如果你的 IPython 会话如下所示</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">:</span> <span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
In <span class="token punctuation">[</span><span class="token number">135</span><span class="token punctuation">]</span><span class="token punctuation">:</span> counter<span class="token operator">=</span>collections<span class="token punctuation">.</span>Counter<span class="token punctuation">(</span>mapusercluster<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
In <span class="token punctuation">[</span><span class="token number">136</span><span class="token punctuation">]</span><span class="token punctuation">:</span> counter
Out<span class="token punctuation">[</span><span class="token number">136</span><span class="token punctuation">]</span><span class="token punctuation">:</span> Counter<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">:</span> <span class="token number">700</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">:</span> <span class="token number">351</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">:</span> <span class="token number">233</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你希望将行从 1 保存到 135，然后在同一个 IPython 会话上使用以下命令</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">137</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token operator">%</span>save aiyc<span class="token punctuation">.</span>py <span class="token number">1</span><span class="token operator">-</span><span class="token number">135</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这将所有 Python 语句保存在当前目录(启动 IPython 的位置)中的 <code v-pre>aiyc.py</code> 文件中。 <strong>此外，文件指出：</strong></p>
<blockquote>
<p>此函数使用与<a href="http://ipython.readthedocs.io/en/5.x/interactive/magics.html#magic-history" target="_blank" rel="noopener noreferrer">%history<ExternalLinkIcon/></a>对于输入范围，然后将行保存到指定的文件名。</p>
</blockquote>
<p>例如，这允许引用较早的会话，例如</p>
<div class="language-ipython ext-ipython line-numbers-mode"><pre v-pre class="language-ipython"><code>%save current_session ~0/
%save previous_session ~1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
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


