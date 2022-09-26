<template><div><h2 id="一、多元多次方程" tabindex="-1"><a class="header-anchor" href="#一、多元多次方程" aria-hidden="true">#</a> 一、多元多次方程</h2>
<h3 id="_1-1-定义" tabindex="-1"><a class="header-anchor" href="#_1-1-定义" aria-hidden="true">#</a> 1.1 定义</h3>
<p>你好，我是悦创。</p>
<p>我们常见的方程组有一元一次方程组，比如 <code v-pre>x+3=5</code> 这种，很简单很好解。</p>
<p>二元一次方程组，即方程组中有两个未知数，未知数的最高次数为1。</p>
<p>二元二次方程组：方程组中有两个未知数，未知数的最高次数为 2。此类方程组均有公式解法或者成形的解法。</p>
<p>但是面临多元多次方程组，解法错综复杂，是数学家们研究的内容。为了更好的解决此类问题，我们可以用 Python 来实现。</p>
<h2 id="_1-2-例子" tabindex="-1"><a class="header-anchor" href="#_1-2-例子" aria-hidden="true">#</a> 1.2 例子</h2>
<p>多元多次方程组例如下面这种，三元二次方程组：</p>
<div style="text-align:center">
<p><img src="@source/blog/2022/13.assets/20200224143343595.png" alt="img" loading="lazy"></p>
</div>
<h2 id="二、python-求解工具包" tabindex="-1"><a class="header-anchor" href="#二、python-求解工具包" aria-hidden="true">#</a> 二、Python 求解工具包</h2>
<p>Python 求解方程组的工具包较多。例如：</p>
<ul>
<li>numpy：<code v-pre>numpy.linalg.solve</code> 可以直接求解线性方程组，numpy 是 Python 非常常用的包，解的方程也较为初级。</li>
<li>scipy：<code v-pre>from scipy.optimize import fsolve</code>，可以求解非线性方程组，使用较为方便，但是解集并不完备，可能漏掉一下解（后文会给个例子）scipy 可以用于数学、科学、工程领域的常用软件包,可以处理插值、积分、优化，相对较初级易用。</li>
<li>sympy：此工具包功能相对强大，支持符号计算、高精度计算、解方程、微积分、组合数学、离散数学、几何学、概率与统计、物理学等方面的功能。GitHub 地址：<a href="https://github.com/sympy/sympy" target="_blank" rel="noopener noreferrer">https://github.com/sympy/sympy<ExternalLinkIcon/></a></li>
<li>sage，不支持位运算，z3 约束求解器，等其他工具包，本文不详述，感兴趣的可以查找相应的内容。</li>
</ul>
<p>本文详细讲述 scipy 以及 sympy 求解多次方程的方法。</p>
<h2 id="三、scipy-方法" tabindex="-1"><a class="header-anchor" href="#三、scipy-方法" aria-hidden="true">#</a> 三、scipy 方法</h2>
<p>安装：</p>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>python -m pip install scipy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-1-使用-scipy-的-fsolve-求解" tabindex="-1"><a class="header-anchor" href="#_3-1-使用-scipy-的-fsolve-求解" aria-hidden="true">#</a> 3.1 使用 scipy 的 fsolve 求解</h3>
<p>我只讲求解方程的部分。</p>
<p>用 fsolve 相对初级，也相对简单易操作，代码较为简单，只用将方程的表达式写出运行即可。fsolve 近似看作用最小二乘法求解。不够很强大，很多情况下解集不完备或者无法解出。</p>
<p>例如对于<img src="@source/blog/2022/13.assets/20200224143343595-20220908124300713.png" alt="img" loading="lazy">，首先要定义相应的函数：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">solve_function</span><span class="token punctuation">(</span>unsolved_value<span class="token punctuation">)</span><span class="token punctuation">:</span>
    x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token operator">=</span> unsolved_value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> unsolved_value<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> unsolved_value<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        x <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">+</span> y <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">,</span>
        y <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">+</span> z <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">34</span><span class="token punctuation">,</span>
        x <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">+</span> z <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">26</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>求解函数三个公式都为 0 时候的解，中括号内为初值 <code v-pre>[0, 0, 0]</code></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>solved <span class="token operator">=</span> fsolve<span class="token punctuation">(</span>solve_function<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>全部代码：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> scipy<span class="token punctuation">.</span>optimize <span class="token keyword">import</span> fsolve


<span class="token keyword">def</span> <span class="token function">solve_function</span><span class="token punctuation">(</span>unsolved_value<span class="token punctuation">)</span><span class="token punctuation">:</span>
    x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token operator">=</span> unsolved_value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> unsolved_value<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> unsolved_value<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        x <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">+</span> y <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">,</span>
        y <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">+</span> z <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">34</span><span class="token punctuation">,</span>
        x <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">+</span> z <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">26</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>


solved <span class="token operator">=</span> fsolve<span class="token punctuation">(</span>solve_function<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>solved<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Program done!"</span><span class="token punctuation">)</span>

<span class="token triple-quoted-string string">"""
运行结果：
[-1.  3.  5.]
Program done!
"""</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看出运行结果来看，此结果并非完备解集。因为 x，y，z 都是可正可负。例如 1 或者 -1，3 或者 -3 ，5 或者 -5，但是此工具包只能解出一个解。</p>
<h3 id="_3-2-非完备解" tabindex="-1"><a class="header-anchor" href="#_3-2-非完备解" aria-hidden="true">#</a> 3.2 非完备解</h3>
<p>显而易见，<code v-pre>x**2-9=0</code> 的解为 3 或者 <code v-pre>-3</code></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">solve_function</span><span class="token punctuation">(</span>unsolved_value<span class="token punctuation">)</span><span class="token punctuation">:</span>
    x <span class="token operator">=</span> unsolved_value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        x <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">9</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>


solved <span class="token operator">=</span> fsolve<span class="token punctuation">(</span>solve_function<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-非线性方程的解" tabindex="-1"><a class="header-anchor" href="#_3-3-非线性方程的解" aria-hidden="true">#</a> 3.3 非线性方程的解</h3>
<p>最简单：sin(x)=0.5，则 x 可能为：π/6 或者 5π/6</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> scipy<span class="token punctuation">.</span>optimize <span class="token keyword">import</span> fsolve
<span class="token keyword">from</span> math <span class="token keyword">import</span> sin<span class="token punctuation">,</span> cos

<span class="token keyword">def</span> <span class="token function">solve_function</span><span class="token punctuation">(</span>unsoled_value<span class="token punctuation">)</span><span class="token punctuation">:</span>
    x <span class="token operator">=</span> unsoled_value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        sin<span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">0.5</span>
    <span class="token punctuation">]</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    solved <span class="token operator">=</span> fsolve<span class="token punctuation">(</span>solve_function<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3.14</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>solved<span class="token punctuation">)</span>
    solved <span class="token operator">=</span> fsolve<span class="token punctuation">(</span>solve_function<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>solved<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token punctuation">[</span><span class="token number">2.61799388</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">0.52359878</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hw" tabindex="-1"><a class="header-anchor" href="#hw" aria-hidden="true">#</a> HW</h2>
<p><img src="@source/blog/2022/13.assets/image-20220908131122997.png" alt="image-20220908131122997" loading="lazy"></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> scipy<span class="token punctuation">.</span>optimize <span class="token keyword">import</span> fsolve


<span class="token keyword">def</span> <span class="token function">solve_function</span><span class="token punctuation">(</span>unsoled_value<span class="token punctuation">)</span><span class="token punctuation">:</span>
    x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token operator">=</span> unsoled_value
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
        <span class="token number">10</span> <span class="token operator">*</span> x <span class="token operator">-</span> y <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">*</span> z <span class="token operator">-</span> <span class="token number">72</span><span class="token punctuation">,</span>
        <span class="token operator">-</span> x <span class="token operator">+</span> <span class="token number">10</span> <span class="token operator">*</span> y <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">*</span> z <span class="token operator">-</span> <span class="token number">83</span><span class="token punctuation">,</span>
        <span class="token operator">-</span> x <span class="token operator">-</span> y <span class="token operator">+</span> <span class="token number">5</span> <span class="token operator">*</span> z <span class="token operator">-</span> <span class="token number">42</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    solved <span class="token operator">=</span> fsolve<span class="token punctuation">(</span>solve_function<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>solved<span class="token punctuation">)</span>
<span class="token comment"># 输出</span>
<span class="token punctuation">[</span><span class="token number">11.</span> <span class="token number">12.</span> <span class="token number">13.</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
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
<p><a href="https://blog.csdn.net/weixin_36474809/article/details/104476870" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/weixin_36474809/article/details/104476870<ExternalLinkIcon/></a></p>
</div></template>


