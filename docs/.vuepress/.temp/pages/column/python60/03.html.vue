<template><div><h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h2>
<p>列表（list）作为 Python 中最常用的数据类型之一，是一个可增加、删除元素的可变（mutable）容器。</p>
<h3 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h3>
<p>创建 list 的方法非常简单，只使用一对中括号 <code v-pre>[]</code>。如下创建三个 list：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>empty <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'xiaoming'</span><span class="token punctuation">,</span> <span class="token number">29.5</span><span class="token punctuation">,</span> <span class="token string">'17312662388'</span><span class="token punctuation">]</span>
lst2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'001'</span><span class="token punctuation">,</span> <span class="token string">'2019-11-11'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'三文鱼'</span><span class="token punctuation">,</span> <span class="token string">'电烤箱'</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>empty 在内存中的示意图：</p>
<p><img src="@source/column/python60/03.assets/2020-02-06-013514.png" alt="1574822445967" loading="lazy"></p>
<p>lst 在内存中的示意图：</p>
<p><img src="@source/column/python60/03.assets/2020-02-06-013515.png" alt="1574821820948" loading="lazy"></p>
<p>lst2 在内存中的示意图：</p>
<p><img src="@source/column/python60/03.assets/2020-02-06-013516.png" alt="1574821753563" loading="lazy"></p>
<p>使用 Python 的内置函数 len 求 list 内元素个数：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token builtin">len</span><span class="token punctuation">(</span>empty<span class="token punctuation">)</span>  <span class="token comment"># 0</span>
<span class="token builtin">len</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span>  <span class="token comment"># 4</span>
<span class="token builtin">len</span><span class="token punctuation">(</span>lst2<span class="token punctuation">)</span>  <span class="token comment"># 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依次遍历 lst 内每个元素并求对应类型，使用 <code v-pre>for in</code> 对遍历，内置函数 type 得到类型：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">for</span> _ <span class="token keyword">in</span> lst<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'</span><span class="token interpolation"><span class="token punctuation">{</span>_<span class="token punctuation">}</span></span><span class="token string">的类型为</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">type</span><span class="token punctuation">(</span>_<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果如下，列表 lst 内元素类型有 3 种：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token number">1</span>的类型为<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'int'</span><span class="token operator">></span>
xiaoming的类型为<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'str'</span><span class="token operator">></span>
<span class="token number">29.5</span>的类型为<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'float'</span><span class="token operator">></span>
<span class="token number">17312662388</span>的类型为<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">'str'</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>因此，Python 的列表不要求元素类型一致。</strong></p>
<p>如何向 lst2 的第三个元素 <code v-pre>['三文鱼','电烤箱']</code> 内再增加一个元素 <code v-pre>'烤鸭'</code>。</p>
<p>首先，使用“整数索引”取出这个元素：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>sku <span class="token operator">=</span> lst2<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>  <span class="token comment"># sku 又是一个列表</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>sku 变量位于栈帧中，同时指向 <code v-pre>lst2[2]</code> ：</p>
<p><img src="@source/column/python60/03.assets/2020-02-06-13517.png" alt="1574822492043" loading="lazy"></p>
<p>然后，使用列表的 append 方法增加元素，append 默认增加到 sku 列表尾部：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>sku<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">'烤鸭'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sku<span class="token punctuation">)</span> <span class="token comment"># ['三文鱼', '电烤箱', '烤鸭']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/column/python60/03.assets/2020-02-06-013518.png" alt="1574822603342" loading="lazy"></p>
<p>此时想在 sku 指定索引 1 处插入“牛腱子”，使用列表的 insert 方法：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>sku<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'牛腱子'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sku<span class="token punctuation">)</span>  <span class="token comment"># ['三文鱼', '牛腱子', '电烤箱', '烤鸭']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/column/python60/03.assets/2020-02-06-013519.png" alt="1574822644827" loading="lazy"></p>
<p>在购买烤鸭和牛腱子后，发现超出双十一的预算，不得不放弃购买烤鸭，使用 pop 方法可直接移除列表尾部元素：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>item <span class="token operator">=</span> sku<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 返回烤鸭</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sku<span class="token punctuation">)</span>  <span class="token comment"># ['三文鱼', '牛腱子', '电烤箱']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/column/python60/03.assets/2020-02-06-13520.png" alt="1574822687219" loading="lazy"></p>
<p>发现还是超出预算，干脆移除三文鱼，pop 因为只能移除表尾元素，幸好列表有 remove 方法：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>sku<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">'三文鱼'</span><span class="token punctuation">)</span>  <span class="token comment"># 更好用：sku.remove(sku[0])</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sku<span class="token punctuation">)</span>  <span class="token comment"># ['牛腱子', '电烤箱']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/column/python60/03.assets/2020-02-06-013520.png" alt="1574822769243" loading="lazy"></p>
<h3 id="深浅拷贝" tabindex="-1"><a class="header-anchor" href="#深浅拷贝" aria-hidden="true">#</a> 深浅拷贝</h3>
<p>打印 lst2，发现第三个元素也对应改变，因为 sku 引用 lst2 的第三个元素，sku 指向的内存区域改变，所以 lst2 也会相应改变。</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>lst2<span class="token punctuation">)</span>  <span class="token comment"># ['001', '2019-11-11', ['牛腱子', '电烤箱']]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果不想改变 lst2 的第三个元素，就需要复制出 lst2 的这个元素，列表上有 copy 方法可实现复制：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>lst2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'001'</span><span class="token punctuation">,</span> <span class="token string">'2019-11-11'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'三文鱼'</span><span class="token punctuation">,</span> <span class="token string">'电烤箱'</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token comment"># 这是 lst2 的初始值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可视化此行代码，lst2 位于全局帧栈中，其中三个元素内存中的可视化图如下所示：</p>
<p><img src="@source/column/python60/03.assets/2020-02-06-013522.png" alt="1574820784839" loading="lazy"></p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>sku_deep <span class="token operator">=</span> lst2<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意，copy 函数，仅仅实现对内嵌对象的一层拷贝，属于 shallow copy。</p>
<p>此时可视化图为如下，因为拷贝 <code v-pre>lst2[2]</code> ，所以 <code v-pre>sku_deep</code>  位于栈帧中指向一块新的内存空间：</p>
<p><img src="@source/column/python60/03.assets/2020-02-06-13523.png" alt="1574820818329" loading="lazy"></p>
<p>此时，再对 <code v-pre>sku_deep</code>  操作，便不会影响 <code v-pre>lst2[2]</code> 的值。</p>
<p>如下修改 <code v-pre>sku_deep</code> 的第一个元素（Python 的列表索引从 0 开始编号），lst2 未受到任何影响。</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>sku_deep<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'腱子'</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lst2<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment"># ['三文鱼','电烤箱']</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 <code v-pre>sku_deep</code> 时，不会影响 <code v-pre>lst2[2]</code>。</p>
<p>因为它们位于不同的内存空间中，如图所示，<code v-pre>lst2[2]</code> 中的第一个元素依然是“三文鱼”，而不是“腱子”。</p>
<p><img src="@source/column/python60/03.assets/2020-02-06-013524.png" alt="1574820760556" loading="lazy"></p>
<p>至此，仅仅使用 shallow copy。那么，它与深拷贝，英文叫 deepcopy，又有什么不同？</p>
<p>请看下面例子，a 是内嵌一层 list 的列表，对其浅拷贝生成列表 ac，修改 ac 的第三个元素，也就是列表 <code v-pre>[3, 4, 5]</code> 中的第二个元素为 40：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
ac <span class="token operator">=</span> a<span class="token punctuation">.</span>copy<span class="token punctuation">(</span><span class="token punctuation">)</span>
ac<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span>
ac<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">40</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改后，分别测试两个值的相等性。</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> ac<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回 False，证明实现拷贝。</p>
<p>而 <code v-pre>ac[2][1]</code> 是否与原数组 a 的对应位置元素相等：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> ac<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>返回 True，进一步证明是浅拷贝，不是深拷贝。</p>
<p>如下图所示：copy 只完成了一层 copy，即 <code v-pre>[1, 2, id([3, 4, 5])]</code> 复制一份，而复制后，仍然指向 <code v-pre>[3,4,5]</code> 所在的内存空间：</p>
<p><img src="@source/column/python60/03.assets/87ba9090-6145-11ea-be13-9d4b32a4c9f6.png" alt="img" loading="lazy"></p>
<p>要想实现深度拷贝，需要使用 copy 模块的 deepcopy 函数：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> copy <span class="token keyword">import</span> deepcopy

a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
ac <span class="token operator">=</span> deepcopy<span class="token punctuation">(</span>a<span class="token punctuation">)</span>
ac<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">10</span>
ac<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">40</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> ac<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> ac<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果，都为 False，结合下图，也能看出内嵌的 list 全部完成复制，都指向了不同的内存区域。</p>
<p><img src="@source/column/python60/03.assets/9e25b350-6145-11ea-b4a5-257b69c74d67.png" alt="img" loading="lazy"></p>
<h3 id="切片" tabindex="-1"><a class="header-anchor" href="#切片" aria-hidden="true">#</a> 切片</h3>
<p>Java 和 C++ 中，访问数组中的元素只能一次一个，但 Python 增加切片功能为访问列表带来极大便利。利用内置函数 <code v-pre>range(start, stop, step)</code> 生成序列数据，并转为 list 类型：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment"># [1, 4, 7, 10, 13, 16, 19]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>a[:3]</code> 获取列表 a 的前三个元素，形象称这类操作为“切片”，切片本身也是一个列表 <code v-pre>[1, 4, 7]</code>：</p>
<ul>
<li>使用 <code v-pre>a[-1]</code> 获取 a 的最后一个元素，返回 int 型，值为 19；</li>
<li>使用 <code v-pre>a[:-1]</code> 获取除最后一个元素的切片 <code v-pre>[1, 4, 7, 10, 13, 16]</code>；</li>
<li>使用 <code v-pre>a[1:5]</code> 生成索引为 <code v-pre>[1,5)</code>（不包括索引 5）的切片 <code v-pre>[4, 7, 10, 13]</code>；</li>
<li>使用 <code v-pre>a[1:5:2]</code> 生成索引 <code v-pre>[1,5)</code> 但步长为 2 的切片 <code v-pre>[4,10]</code>；</li>
<li>使用 <code v-pre>a[::3]</code> 生成索引 <code v-pre>[0, len(a))</code> 步长为 3 的切片 <code v-pre>[1, 10, 19]</code>；</li>
<li>使用 <code v-pre>a[::-3]</code> 生成逆向索引 <code v-pre>[len(a), 0)</code> 步长为 3 的切片 <code v-pre>[19, 10, 1]</code>。</li>
</ul>
<blockquote>
<p>逆向：从列表最后一个元素访问到第一个元素的方向。</p>
</blockquote>
<p>特别地，使用列表的逆向切片操作，只需一行代码就能逆向列表：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">reverse</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> lst<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>调用 <code v-pre>reverse</code> 函数：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>ra <span class="token operator">=</span> reverse<span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ra<span class="token punctuation">)</span>  <span class="token comment"># [19, 16, 13, 10, 7, 4, 1]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>说完列表，还有一个与之很相似的数据类型——元组（tuple）。</p>
<h2 id="元组" tabindex="-1"><a class="header-anchor" href="#元组" aria-hidden="true">#</a> 元组</h2>
<p>元组既然是不可变（immutable）对象，自然也就没有增加、删除元素的方法。</p>
<h3 id="基本操作-1" tabindex="-1"><a class="header-anchor" href="#基本操作-1" aria-hidden="true">#</a> 基本操作</h3>
<p>使用一对括号（<code v-pre>()</code>）就能创建一个元组对象，如：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 空元组对象</span>
b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'xiaoming'</span><span class="token punctuation">,</span> <span class="token number">29.5</span><span class="token punctuation">,</span> <span class="token string">'17312662388'</span><span class="token punctuation">)</span>
c <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'001'</span><span class="token punctuation">,</span> <span class="token string">'2019-11-11'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'三文鱼'</span><span class="token punctuation">,</span> <span class="token string">'电烤箱'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它们都是元组，除了 list 是用 <code v-pre>[]</code> 创建外，其他都与 list 很相似，比如都支持切片操作。</p>
<blockquote>
<p>特别注意：一个整数加一对括号，比如 (10)，返回的是整数。必须加一个逗号 (10, ) 才会返回元组对象。</p>
</blockquote>
<p>列表和元组都有一个很好用的统计方法 count，实现对某个元素的个数统计：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> numpy <span class="token keyword">import</span> random
a <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>  <span class="token comment"># 从 [1,5) 区间内随机选择 10 个数</span>
at <span class="token operator">=</span> <span class="token builtin">tuple</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>  <span class="token comment"># 转 tuple：(1, 4, 2, 1, 3, 3, 2, 3, 4, 2)</span>
at<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment"># 统计 3 出现次数，恰好也为 3 次</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="可变与不可变" tabindex="-1"><a class="header-anchor" href="#可变与不可变" aria-hidden="true">#</a> 可变与不可变</h3>
<p>文章开头提到列表是一个<strong>可变</strong>容器，可变与不可变是一对很微妙的概念。</p>
<p>因为网上经常出现，所以再重点总结下。</p>
<p>创建一个列表 <code v-pre>a = [1, 3, [5, 7], 9, 11, 13]</code>，存储示意图：</p>
<p><img src="@source/column/python60/03.assets/2020-02-06-013525.png" alt="1574825725117" loading="lazy"></p>
<p>执行 <code v-pre>a.pop()</code> 后删除最后一个元素：</p>
<p><img src="@source/column/python60/03.assets/2020-02-06-13526.png" alt="1574825793763" loading="lazy"></p>
<p>删除后：</p>
<p><img src="@source/column/python60/03.assets/2020-02-06-013526.png" alt="1574825814256" loading="lazy"></p>
<p>再在索引 3 处增加一个元素 8，<code v-pre>a.insert(3, 8)</code>，插入后如下：</p>
<p><img src="@source/column/python60/03.assets/2020-02-06-013527.png" alt="1574825848339" loading="lazy"></p>
<p>因此，对列表而言，因为它能增加或删除元素，所以它是可变的。</p>
<p>但是，如果<strong>仅仅</strong>在列表 a 中做这一步操作：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>  <span class="token comment"># 在 a[2]（也是一个列表）中插入元素 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>插入后可视化图：</p>
<p><img src="@source/column/python60/03.assets/2020-02-06-013528.png" alt="1574826103718" loading="lazy"></p>
<p>对于<strong>可变</strong>这个概念而言，这就不是真正调整 a 为<strong>可变</strong>的操作。</p>
<p>tuple 就是一个典型的不可变容器对象。对它而言，同样也可以修改嵌套对象的取值，但这并没有真正改变 tuple 内的元素。</p>
<p>如下所示，有一个元组 a：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>a <span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>a 的存储示意图如下：</p>
<p><img src="@source/column/python60/03.assets/2020-02-06-13529.png" alt="1574833081653" loading="lazy"></p>
<p>下面插入一个元素 6：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以看到，a 内元素没增没减，长度还是 6：</p>
<p><img src="@source/column/python60/03.assets/2020-02-11-115424.png" alt="1574833217247" loading="lazy"></p>
<p>这就是不可变对象的本质，元组一旦创建后，长度就被唯一确定。</p>
<p>但是，对于 list 而言，列表长度会有增有减，所以它是可变的。</p>
<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2>
<p>今天总结了：</p>
<ul>
<li>列表的基本操作</li>
<li>重要深、浅拷贝问题</li>
<li>常见的切片操作</li>
<li>元组（tuple）的基本操作</li>
<li>可变对象，不可变对象</li>
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


